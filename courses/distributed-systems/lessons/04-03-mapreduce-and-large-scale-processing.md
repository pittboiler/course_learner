# Distributed Systems · Lesson 4.3: MapReduce and large-scale processing

> ⏱ ~15 min · Module 4: Fault Tolerance and Distributed Data · Builds on: [3.6 (state-machine replication)](03-06-state-machine-replication.md), [1.3 (RPC and delivery semantics)](01-03-rpc-and-delivery-semantics.md) · Unlocks: [4.4 (consistent hashing and DHTs)](04-04-consistent-hashing-and-dhts.md)

## Why this matters

Everything so far treated failure as something to *agree about* — vote, quorum, decide. MapReduce takes the opposite approach and is the more common one at scale: **make each unit of work repeatable, and treat a failure as an instruction to run it again.**

No consensus, no commit protocol, no coordination between workers. The price is a restriction on what you may compute, and the whole design is an argument that the restriction is worth it. It is also the origin of the observation that dominates large-system performance: **at a thousand tasks, the slowest task is not a risk, it is a certainty**, and dealing with it is a design problem rather than an operational one.

## The idea

A computation is expressed as two pure functions.

**Map** takes an input record and emits key-value pairs: $\mathrm{map}(k_1, v_1) \to \text{list}(k_2, v_2)$. **Reduce** takes one key and all the values emitted for it and produces the output: $\mathrm{reduce}(k_2, \text{list}(v_2)) \to \text{list}(v_3)$. Between them the framework **shuffles** — routes every emitted pair to the reducer responsible for its key.

The restriction is that both functions are **deterministic and side-effect-free**, and the payoff is enormous: a task that fails, or is merely slow, can simply be run again, anywhere, with no bookkeeping. There is nothing to roll back, because the task had no effects outside its own output, and the output is published by an **atomic rename** — the task writes to a temporary location and the framework renames it into place only on success, so a duplicate run's output is discarded rather than merged.

**This is [3.6](03-06-state-machine-replication.md)'s determinism requirement in a new setting**, and it is the same requirement for the same reason. A map function that reads the clock or calls a remote service produces different output on a re-run, and re-execution stops being safe.

Two more ideas make it work at scale. **Data locality**: the input lives in a distributed file system in large blocks, and the scheduler places each map task on a machine that already holds its block, so most input is read from local disk rather than the network. And **speculative execution**: near the end of a phase, the scheduler launches duplicate copies of the slowest tasks and takes whichever finishes first.

## The formal version

> **The model.** Input is split into $M$ blocks. $M$ map tasks run, each emitting key-value pairs partitioned into $R$ buckets by $\mathrm{hash}(k_2) \bmod R$. $R$ reduce tasks each fetch their bucket from every map task, sort by key, and apply reduce.

> **Shuffle cost.** Every reducer fetches from every mapper, so there are $M \times R$ transfers. This is the phase that dominates network usage and the reason $M$ and $R$ cannot both be made large.

With $M = 1000$ and $R = 500$ there are **500,000** transfers. If the intermediate data is 200 GB, each transfer averages $200\text{ GB} / 5 \times 10^5 = 0.4$ MB — small enough that connection setup and seek overhead start to matter, which is why real systems merge and batch aggressively.

> **Fault tolerance by re-execution.** A failed map task is re-run; its output was local and is lost with it. A failed reduce task is re-run; its input is re-fetched from the map outputs, which are retained until the job completes. Correctness requires map and reduce to be deterministic and output publication to be atomic.

**Note the asymmetry**: map output is kept on local disks precisely so that a reduce re-run does not force the map phase to be repeated. That is why a job holds disk across a cluster for its whole duration.

> **Stragglers.** Let each task independently be slow with probability $p$. The probability that a job of $M$ tasks contains at least one straggler is
> $$1 - (1-p)^M.$$

At $p = 0.01$:

| $M$ | $P(\text{at least one straggler})$ |
|---|---|
| 10 | 9.6% |
| 200 | 86.6% |
| 2,000 | $> 99.99\%$ |
| 10,000 | $\approx 1$ |

**A job's duration is the maximum over its tasks, not the mean**, so with thousands of tasks the job runs at straggler speed essentially always. Simulating $M = 2000$ tasks where a straggler takes 10 times as long gives a mean job time of **10.0** times the base task time — the job is *always* straggler-bound.

**Speculative execution fixes it** because the usual cause is the machine (a failing disk, a noisy neighbour, a misconfigured host) rather than the data, so a duplicate elsewhere runs at normal speed. In the same simulation, with a backup copy taking 1.2 times the base time, the mean job time falls to about **1.2** — an eightfold improvement from running a few percent more tasks.

> **Where the model breaks down.** Iterative algorithms re-read the whole dataset from disk each round, so $k$ iterations cost $k$ full passes. Interactive queries pay the whole map-shuffle-reduce pipeline for a small answer. And anything requiring shared mutable state across tasks cannot be expressed at all — which is deliberate, since that state is exactly what would need a consensus protocol.

## Picture

![A dataflow diagram. Four map tasks, each reading an input block, sit above three reduce tasks, with a line from every map task to every reduce task, labelled M times R transfers. The third map task is highlighted as a straggler with a note that a backup copy is run. Text below states that fault tolerance is re-execution — a failed or slow task is simply run again somewhere else — and that this works only because map and reduce are deterministic and write their output atomically, the same requirement a replicated state machine has.](assets/04-03-fig1.svg)

Count the lines in the middle. **The shuffle is a complete bipartite graph**, and its edge count is the product of the two phase widths, which is why doubling both the mapper and reducer counts quadruples the transfer count while leaving the data volume unchanged.

## Worked examples

**Example 1 — sizing a job, and where the time goes.**

One terabyte of logs, counting occurrences of each distinct error code. Block size 128 MB.

**Map tasks.** $10^{12} / (128 \times 10^6) = 7813$ blocks, so $M = 7813$ map tasks, each reading 128 MB — ideally from a local disk, thanks to locality scheduling.

**Intermediate data.** Each log line emits one pair of perhaps 40 bytes. With $10^{10}$ lines that is 400 GB to shuffle — **more than a third of the input volume crossing the network**, which is usually the job's dominant cost.

**The combiner fixes this.** A `combine` function — reduce applied locally to each map task's output before it leaves the machine — collapses each mapper's pairs down to one per distinct error code. With 500 distinct codes, each mapper emits 500 pairs instead of $1.3 \times 10^6$:

$$7813 \times 500 \times 40 \text{ bytes} = 156 \text{ MB shuffled, against } 400 \text{ GB.}$$

**A factor of about 2,600**, from a function that is usually the reduce function verbatim. The combiner is correct exactly when reduce is **associative and commutative** — the same conditions as [2.4](02-04-crdts-and-strong-eventual-consistency.md)'s merge and [3.6](03-06-state-machine-replication.md)'s order-independent folds, because it is the same question: may this computation be reassociated across machines?

**A count is associative and commutative; a median is not**, which is why counting is the canonical example and computing exact medians at scale is genuinely awkward.

**Example 2 — the straggler, and why re-running is allowed.**

A job with $M = 2000$ map tasks, each normally taking 60 seconds. One machine has a disk that has begun retrying reads, so its task takes 600 seconds.

**Without speculation.** The map phase ends when the last task ends: **600 seconds**. The other 1,999 tasks finished in the first minute and 1,999 machines sat idle for nine. The job took ten times as long as the work required, because of one disk.

And this is not bad luck. At a 1 percent straggler rate, $1 - 0.99^{2000} > 99.99\%$ of jobs contain at least one, so **the ten-times slowdown is the normal case, not the tail.**

**With speculation.** Near the end of the phase the scheduler notices tasks running far past the median and launches duplicates elsewhere. The backup reads the same input block from a different replica and finishes in about 60 seconds; the original is killed. The map phase takes roughly 120 seconds instead of 600.

**Why running a task twice is safe**, and it is worth spelling out because it is the whole design:

1. **Map is deterministic**, so both copies compute identical output from identical input.
2. **Neither copy has side effects** — no writes to a database, no messages sent, no counters incremented anywhere outside its own output.
3. **Output is published atomically**, by renaming a temporary file into place. The first copy to finish wins; the loser's temporary file is deleted.

**Remove any one and speculation becomes a correctness bug.** A map function that posts to an external API would post twice. One that appends to a shared file would produce duplicates. This is [1.3](01-03-rpc-and-delivery-semantics.md)'s at-least-once delivery in a new costume: **the framework guarantees at-least-once execution, and the determinism plus atomic rename is what makes the effect exactly-once.**

## Watch out

- **You might think stragglers are an operational problem.** They are a statistical certainty at scale: a job's duration is the maximum over its tasks, and the maximum of thousands of samples sits far out in the tail. Speculative execution is not a workaround for bad machines, it is a required part of the design.
- **You might think a combiner is always safe.** It is correct only when reduce is associative and commutative. Applying a combiner to an averaging reduce gives the average of averages, which is wrong unless the group sizes are equal — a bug that produces plausible numbers and is therefore hard to spot.
- **You might think re-execution makes the framework fault-tolerant regardless of your code.** It makes it fault-tolerant *given* deterministic, side-effect-free tasks. A map function that calls an external service has broken the contract, and the framework has no way to detect it — the same silent-divergence problem as [3.6](03-06-state-machine-replication.md)'s determinism bugs.

## One-liner

> MapReduce replaces agreement with repeatability: if every task is deterministic, side-effect-free and published by an atomic rename, then a failure or a straggler is answered by running the task again somewhere else — which is the only reason a job of ten thousand tasks, where slow tasks are certain, finishes at all.

## Problems

**P1 (🟢)** A job processes 2 TB of input with a 256 MB block size, using $R = 400$ reduce tasks.

(a) Give the number of map tasks.
(b) Give the number of shuffle transfers.
(c) The intermediate data is 600 GB. Give the average size of one transfer.
(d) The team doubles both $M$ and $R$. Give the effect on the transfer count and on the total bytes shuffled.

**P2 (🟡)** Tasks are independently slow with probability $p = 0.02$, a slow task taking 8 times the normal 45 seconds.

(a) Give the probability a job of 50 tasks contains at least one straggler, and the same for 1,500 tasks.
(b) Give the expected phase duration for the 1,500-task job without speculative execution.
(c) The scheduler duplicates any task still running at 3 times the median, and a backup on a healthy machine takes 50 seconds. Give the approximate phase duration.
(d) State the three properties a task must have for (c) to be correct, and name one violation of each.

**P3 (🔴, optional)** A team writes a MapReduce job to deduplicate user records.

(a) The map function calls an external identity service to canonicalise each email address. State what breaks and under which framework behaviour.
(b) The reduce function writes each output record directly to a production database rather than to the job's output path. Give the concrete failure and its observable symptom.
(c) The reduce function computes, for each user, the mean of their session lengths, and the team adds a combiner that is the reduce function verbatim. State whether this is correct, with a two-group counterexample.
(d) Give the change that makes (c) correct, and state the general property the combined function must have.

<details>
<summary>Solutions</summary>

**P1**

(a) $2 \times 10^{12} / (256 \times 10^6) = \mathbf{7813 \text{ map tasks}}$ (7812.5, rounded up, since a partial block still needs a task).

(b) $M \times R = 7813 \times 400 = \mathbf{3.13 \times 10^6 \text{ transfers}}$.

(c) $600 \times 10^9 / 3.13 \times 10^6 = \mathbf{192 \text{ KB}}$ per transfer.

Worth noting how small that is. At around 200 KB per connection, the per-transfer overhead — connection setup, seek, buffer allocation — is a meaningful fraction of the cost, which is why frameworks merge many small fetches and why very large $M \times R$ is a performance problem in itself.

(d) **Transfer count quadruples** to $1.25 \times 10^7$, since it is the product $M \times R$.

**Total bytes shuffled is unchanged** at 600 GB — the same data, cut into four times as many pieces, each a quarter the size (48 KB). So the change buys more parallelism and pays for it entirely in per-transfer overhead, which at 48 KB per fetch is likely to make the shuffle *slower* despite the extra workers.

**P2**

(a) $1 - 0.98^{50} = 1 - 0.364 = \mathbf{63.6\%}$ for 50 tasks.

$1 - 0.98^{1500} = 1 - 6.9 \times 10^{-14} \approx \mathbf{100\%}$ for 1,500 tasks.

(b) A slow task takes $8 \times 45 = 360$ seconds, and the phase ends with the last task. Since a straggler is present with probability essentially 1, the expected duration is **about 360 seconds** — eight times the normal task time, and 1,499 machines idle for most of it.

(c) The straggler is duplicated once it passes $3 \times 45 = 135$ seconds, and the backup takes 50 seconds, finishing at about $135 + 50 = \mathbf{185 \text{ seconds}}$.

That is roughly half the unspeculated time. Lowering the duplication threshold improves it further at the cost of running more redundant tasks — the threshold is the knob that trades wasted compute against tail latency, and production schedulers set it near the 90th percentile of observed task times.

(d) The three properties, each with a violation:

1. **Determinism** — both copies compute the same output from the same input. *Violation:* a map function that stamps records with `now()`, so the two copies disagree and whichever wins changes the result.
2. **No side effects** — the task's only effect is its own output. *Violation:* a reduce function that sends an email per output record, so the duplicate sends every email twice.
3. **Atomic output publication** — the winning copy's output replaces the loser's rather than merging with it. *Violation:* tasks appending to a shared output file, so both copies' records end up in it and every record is duplicated.

**P3**

(a) **Determinism breaks**, and the framework behaviour that exposes it is **re-execution** — of a failed task, or of a speculative duplicate.

The identity service may return a different canonical form on the two calls (it was updated between them, or it load-balances across versions, or it failed and returned a fallback), so the two copies of the task produce different output. Whichever copy's rename lands first determines the result, so the job is **non-reproducible**: run it twice on the same input and get different answers, with no error anywhere.

There is a second failure even without re-execution: 7,813 map tasks each calling an external service per record will overwhelm it, and its failures become the job's failures.

*Fix:* pre-materialise the canonicalisation into a side input, or join against a snapshot of the identity data as a second input to the job.

(b) **The no-side-effects property breaks**, and the concrete failure is **duplicate writes**: a reduce task that fails after writing half its records and is re-run writes those records again, and a speculative duplicate writes every record twice.

**The observable symptom is duplicated or partially-applied rows in the production database after a job that reported success** — and the job *did* succeed, by its own definition, because the framework's notion of task completion says nothing about what the task did to an external system. There is no error to find.

*Fix:* write to the job's output path and load it into the database afterwards in a single idempotent step, or make each write idempotent with a record-level key ([1.3](01-03-rpc-and-delivery-semantics.md)).

(c) **Not correct.** A mean is not associative under the combining operation, so combining partial means gives the mean of means.

Counterexample. One user's session lengths arrive at two map tasks: task A holds $\{10, 10, 10, 10\}$ and task B holds $\{50\}$.

- **True mean:** $(10 \cdot 4 + 50) / 5 = 90/5 = \mathbf{18}$.
- **With the combiner:** A emits 10, B emits 50, and reduce averages them: $(10 + 50)/2 = \mathbf{30}$.

The answer is wrong by 67 percent, and — this is why the bug is dangerous — **30 is a perfectly plausible average session length.** Nothing looks broken.

(d) **Have the combiner emit a (sum, count) pair rather than a mean**, and have the reducer sum the sums, sum the counts, and divide once at the end.

Checking the counterexample: A emits $(40, 4)$, B emits $(50, 1)$; the reducer computes $(40+50)/(4+1) = 90/5 = 18$ ✓.

**The general property: the combined function must be associative and commutative**, so that the framework may apply it in any grouping and any order. A sum and a count are; a mean is not. The standard technique is to find an associative *representation* of the quantity — here $(\text{sum}, \text{count})$ — compute in that representation, and convert to the final answer only in the last step.

This is the same move as [2.4](02-04-crdts-and-strong-eventual-consistency.md)'s PN-Counter, which stores two grow-only counters rather than one signed integer for exactly this reason, and it recurs wherever a computation must be reassociated across machines.


</details>

## Flashback

**From Lesson 4.2 (three-phase commit and consensus-backed commit):** A 3PC transaction with participants $P_1 \ldots P_5$ is partitioned into $\{P_1, P_2\}$ and $\{P_3, P_4, P_5\}$, with the coordinator unreachable from both. $P_4$ is in `PRE-COMMIT`; nobody else is.

(a) Give each group's decision and the rule it applies.
(b) Name the property violated and state why 2PC would not have violated it.
(c) State the change that makes the protocol safe under this partition, and what it costs.

<details>
<summary>Solution</summary>

(a) $\{P_3, P_4, P_5\}$ contains $P_4$ in pre-commit, so by the first clause of the termination rule — if any operational participant is pre-committed, everybody voted yes — it decides **COMMIT**.

$\{P_1, P_2\}$ contains nobody in pre-commit, so by the second clause — nobody can have committed without first being pre-committed — it decides **ABORT**.

(b) **Agreement**, and with it atomicity: three participants commit and two roll back.

2PC would not have violated it because 2PC gives survivors no rule licensing a unilateral decision while uncertain. Faced with the same partition, $P_1$ and $P_2$ would **block** — holding locks until the coordinator returned — which is a liveness failure and is recoverable. **3PC traded that for a safety failure, which is not.**

(c) **Move the decision into a consensus group** rather than leaving it on the coordinator's disk. Then only the side holding a majority of that group can obtain a decision at all, so the minority has nothing to disagree with: it waits, exactly as 2PC's participants would, and resumes when the partition heals.

**What it costs is roughly one extra message delay** on the commit path — five instead of four — since votes can go straight to the acceptors and the per-participant consensus instances run in parallel. Against a blocking window measured in a machine's recovery time, that is not a close trade.

</details>

## Connections

- **Backward:** the determinism and atomic-output requirements are [3.6](03-06-state-machine-replication.md)'s rules for a replicated state machine, and re-execution is [1.3](01-03-rpc-and-delivery-semantics.md)'s at-least-once delivery with the framework supplying the deduplication — the atomic rename is the dedup table.
- **Forward:** [4.4](04-04-consistent-hashing-and-dhts.md) takes the partitioning idea — split the keyspace by a hash and let each node own a range — and makes it the basis of storage rather than computation, with the same locality argument and a much harder membership problem.
- **Sideways:** the combiner is correct under exactly the conditions that make a fold parallelisable, which is the same algebra as [2.4](02-04-crdts-and-strong-eventual-consistency.md)'s join-semilattice merges. And the straggler analysis is an extreme-value argument: a job's duration is the maximum of $M$ samples, so the tail of the task-time distribution, not its mean, is what sets the schedule — the same reason tail latency dominates a fan-out request in [1.3](01-03-rpc-and-delivery-semantics.md)'s flashback.
