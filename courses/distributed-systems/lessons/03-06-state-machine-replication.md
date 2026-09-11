# Distributed Systems · Lesson 3.6: State-machine replication

> ⏱ ~15 min · Module 3: Consensus and the CAP Theorem · Builds on: [3.4 (Raft)](03-04-raft.md), [1.6 (consistent cuts)](01-06-consistent-cuts-and-global-snapshots.md), [2.1 (linearizability)](02-01-linearizability.md) · Unlocks: [4.1 (distributed transactions)](04-01-distributed-transactions-and-2pc.md), [4.2 (consensus-backed commit)](04-02-three-phase-commit-and-consensus-backed-commit.md)

## Why this matters

Consensus decides one value. A service must stay alive, handling millions of operations, surviving crashes, and looking to its clients like one correct machine. This lesson is the bridge, and it is shorter than you would expect: **run one consensus instance per slot, and have every replica apply the resulting sequence to the same deterministic program.**

That recipe is how etcd, ZooKeeper, Chubby, Kafka's controller, every Raft-backed key-value store and the metadata layer of most distributed databases are built. And it comes with three obligations that look like implementation details and are not — determinism, reads, and the log growing forever — each of which has a standard answer and a standard way of going wrong.

## The idea

The insight is to **replicate the commands, not the state.**

Agreeing on state is hopeless: state is large, changes constantly, and comparing two copies is the anti-entropy problem of [2.3](02-03-eventual-consistency-and-anti-entropy.md). Agreeing on a *sequence of commands* is exactly what [1.7](01-07-ordered-broadcast-fifo-causal-total.md)'s total-order broadcast provides and what [3.4](03-04-raft.md) implements. And if every replica starts in the same state and applies the same commands in the same order, they **must** end in the same state — provided the state machine is deterministic.

That proviso is the first obligation, and it is a real design constraint rather than a footnote. A state machine that reads the wall clock, generates a random number, iterates a hash map in memory order, or calls an external service will produce different results on different replicas from identical inputs, and the replicas will silently diverge. **The standard fix is to move the nondeterminism into the command**: the leader picks the timestamp, the random seed, the generated id, and writes it into the log entry, so everyone applies the same value.

The second obligation is **reads**. Writes are safe automatically — they go through the log. A read served from a replica's local state may be stale, and one served from a leader that has been deposed may be very stale. There are three answers, costing a log entry, a round trip, or a clock assumption.

The third is that **the log grows without bound**. A service at ten thousand operations a second writes about a hundred gigabytes a day of log, and a replica restarting after a week cannot replay it. The answer is a **snapshot**: dump the state machine, record the log index it corresponds to, and discard the log below it. That is [1.6](01-06-consistent-cuts-and-global-snapshots.md)'s idea in its easiest setting — a single replica's own state at a known log position, which needs no marker protocol at all.

## The formal version

> **Replicated state machine.** Replicas $1..n$ each hold a deterministic state machine $M$ with the same initial state. A consensus protocol decides the command at each log index $1, 2, 3, \ldots$. Each replica applies committed commands to $M$ in index order.

> **Correctness.** If $M$ is deterministic and every replica applies the same prefix of the same sequence, their states are identical at equal prefixes. Since the consensus protocol guarantees a single agreed sequence, the replicas are indistinguishable to clients — the service is **linearizable**, with each command's linearization point at its commit.

> **Determinism obligations.** The state machine must not depend on: wall-clock time, random numbers, iteration order of unordered collections, memory addresses, thread scheduling, floating-point modes that vary across builds, or any external service. Any needed nondeterminism is chosen by the leader and carried **in the command**.

**Three ways to serve a linearizable read:**

| method | cost | assumption |
|---|---|---|
| **log read** — append a no-op read entry and answer when it commits | a full consensus round, including an fsync at a majority | none beyond the protocol |
| **ReadIndex** — leader records its `commitIndex`, confirms leadership with one heartbeat round to a majority, waits until it has applied that index, answers locally | one round trip, **no disk write** | none beyond the protocol |
| **lease read** — leader answers from local state with no messages at all | zero round trips | a bound on clock drift |

**The lease argument, stated carefully.** A leader elected at time $t$ holds a lease for duration $L$. Followers promise not to start an election before $t + L$ on their clocks. The leader may serve local reads only until $t + L - \epsilon$ on *its* clock, where $\epsilon$ bounds the drift between them ([1.4](01-04-physical-clocks-and-synchronization.md)). The safety condition is

$$\text{election timeout} > L + \epsilon,$$

so no new leader can be elected while the old one still believes its lease is valid. **The assumption is bounded drift, not synchronised clocks** — the leader never compares its clock to anyone's, it only measures an elapsed interval on its own monotonic clock.

> **Snapshot.** A serialisation of the state machine together with the log index and term it reflects. After taking one, the log below that index may be discarded. A follower too far behind receives an `InstallSnapshot` rather than an impossible number of log entries.

> **Membership change.** Adding or removing a replica changes what "majority" means, and changing it in one step can create two disjoint majorities. Raft's answer is to change **one server at a time** (any two consecutive configurations' majorities overlap), or to pass through a **joint consensus** configuration requiring majorities of both the old and new sets.

## Picture

![A layered diagram. Clients at the top feed into a wide box labelled consensus log, described as one agreed order of commands with Paxos or Raft deciding each slot. Three arrows lead down from the log to three identical replica boxes, each containing a deterministic state machine. A caption states that the same commands in the same order applied deterministically give the same state, with no agreement about state itself. Below, a warning notes that determinism is a requirement rather than a consequence, and that nondeterminism must be placed in the command by the leader so the log carries it to every replica.](assets/03-06-fig1.svg)

The arrows only go one way. **No replica ever tells another what its state is**, and no two states are ever compared — which is what makes the scheme cheap, and what makes a determinism bug so hard to find, since nothing in the system is looking for divergence.

## Worked examples

**Example 1 — three determinism bugs and their fixes.**

**(a) `expiry = now() + 3600`.** Each replica calls its own clock as it applies the command, and the clocks differ ([1.4](01-04-physical-clocks-and-synchronization.md)), so the stored expiry differs on every replica. Later, a lookup returns "expired" on one replica and "valid" on another — **and the divergence is invisible until a client happens to read the two.**

*Fix:* the leader reads the clock **once**, when it creates the log entry, and writes the absolute expiry timestamp into the command. Every replica stores the identical value.

**(b) `id = random_uuid()`.** Same shape, faster failure: the replicas store different ids for the same record, and any subsequent command referring to the id succeeds on one replica and fails on the others.

*Fix:* the leader generates the id and puts it in the command. **A useful rule: the state machine may not be a source of anything, only a function of its inputs.**

**(c) `for (k, v) in hashmap: total += hash(k) * v`.** This is the dangerous one, because it looks pure. If the hash map's iteration order depends on insertion history or on memory addresses — and in many languages it does, deliberately, for hash-flooding resistance — then two replicas that reached the same logical state by different insertion paths iterate differently, and with a non-commutative accumulation they compute different totals.

*Fix:* iterate a **sorted** view, or use an ordered collection. The general rule: **any traversal of an unordered collection must be made order-independent, either by sorting or by using only commutative and associative operations** — the same conditions as the CRDT merges in [2.4](02-04-crdts-and-strong-eventual-consistency.md), for the same reason.

**Why these are so hard to catch.** Nothing detects them. The consensus layer is doing its job perfectly — the logs are identical on every replica — and the divergence is downstream of everything the protocol checks. The standard defence is a **state hash**: each replica periodically hashes its state machine at a known log index and the leader compares them, turning a silent divergence into a loud alarm. It is cheap and it is the single highest-value thing to add to an SMR system.

**Example 2 — reads and snapshots, priced.**

A key-value service on 5 replicas in one data centre. Quorum round trip 2 ms, local read 0.2 ms, 10,000 write operations per second at 120 bytes per log entry.

**Read costs.** A log read pays a full consensus round including an fsync at a majority: call it 2 ms plus disk, and it adds load to the write path, so heavy reads slow down writes. **ReadIndex** pays one heartbeat round trip — **2 ms** — with no disk write and no log growth. A **lease read** costs **0.2 ms**, ten times faster, and adds no cluster load at all.

**The ranking is not close**, which is why every serious implementation offers leases. What you are buying with the 10x is an assumption: that clock drift between leader and followers is bounded, and that the election timeout exceeds the lease plus that bound. If a leader is partitioned and its own clock runs slow, it can believe its lease is live past the moment a new leader was elected — which is why the lease bound must be conservative and why fencing ([2.5](02-05-replication-strategies.md)) remains the backstop.

**Log growth.** At 10,000 entries per second and 120 bytes:

$$10{,}000 \times 120 = 1.2 \text{ MB/s} = \mathbf{104 \text{ GB per day}}, \qquad 8.64 \times 10^8 \text{ entries per day}.$$

**Why this forces snapshots.** A replica that has been down for a day must catch up on 864 million entries. Applying them at an optimistic 50,000 per second takes

$$\frac{8.64 \times 10^8}{50{,}000} = 17{,}280 \text{ s} \approx \mathbf{4.8 \text{ hours}}.$$

**Nearly five hours to rejoin after one day offline**, during which the cluster runs with reduced redundancy. With snapshots every million entries — once every 100 seconds — the replica instead installs one snapshot and replays at most a million entries, roughly 20 seconds.

**The trade the snapshot interval controls** is snapshot cost against recovery time. Too frequent and the state dump competes with serving traffic; too rare and recovery is slow and disk usage grows. The usual practice is to trigger on log size rather than time, and to take the snapshot from a copy-on-write view so the state machine keeps serving while it is written.

## Watch out

- **You might think a leader can serve a local read without a lease.** A deposed leader that has not yet noticed will happily answer from stale state, and the client has no way to tell. Either confirm leadership with a round trip (ReadIndex) or hold a lease with a clock bound — reading locally on the strength of "I think I am the leader" is the most common linearizability bug in SMR systems.
- **You might think determinism is automatic for pure code.** Iteration order of an unordered collection, floating-point contraction differences across compilers, and anything reading the environment all break it while looking perfectly functional. Add a periodic state hash so divergence is detected rather than discovered by a customer.
- **You might think a snapshot must be coordinated across replicas.** It must not be. Each replica snapshots its own state at its own log index, independently, and the index is what makes the snapshot meaningful. This is the one place where [1.6](01-06-consistent-cuts-and-global-snapshots.md)'s machinery is *not* needed — the log has already supplied the consistent cut.

## One-liner

> Replicate the commands and never the state: one consensus instance per log slot, a deterministic program at every replica, and three obligations — keep the state machine a pure function of the log, decide how much a linearizable read is worth, and snapshot before the log outgrows your recovery budget.

## Problems

**P1 (🟢)** For each state-machine operation, state whether it is deterministic, and if not give the fix.

(a) `balance = balance - amount`
(b) `created_at = current_time()`
(c) `winner = pick_random(candidates)`
(d) `total = sum(v for k, v in accounts)` where `accounts` is an unordered map of integers

**P2 (🟡)** A Raft-backed service handles 25,000 write operations per second, each producing a 200-byte log entry. Replicas apply at 80,000 entries per second.

(a) Give the log growth in MB per second and GB per day.
(b) A replica is offline for 6 hours. Give the number of entries it must replay and the time to do so.
(c) The team sets snapshots every $2 \times 10^6$ entries. Give the snapshot interval in seconds and the worst-case replay after installing a snapshot.
(d) State the two costs that the snapshot interval trades off, in one clause each.

**P3 (🔴, optional)** A 5-replica cluster serves linearizable reads using leader leases of $L = 9$ seconds, with an election timeout of 10 seconds and a clock-drift bound of $\epsilon = 0.5$ seconds between any two replicas.

(a) State whether the safety condition holds, with the arithmetic.
(b) Give the latest point, on the leader's own clock, at which it may serve a local read after being granted the lease at time $t$.
(c) The team shortens the election timeout to 8 seconds to speed up failover. Give an ordered step list in which a stale read is now served, and name the property violated.
(d) A colleague proposes keeping the 8-second election timeout and instead having the leader check `is_leader()` before each read. State whether this fixes (c), with the reason.

<details>
<summary>Solutions</summary>

**P1**

(a) **Deterministic.** The result is a function of the prior state and the command's `amount`, both of which are identical on every replica. No fix needed.

(b) **Not deterministic** — each replica calls its own clock at its own moment, and [1.4](01-04-physical-clocks-and-synchronization.md) says those differ.

*Fix:* the **leader** reads the clock once when creating the entry and writes the absolute timestamp into the command, so every replica stores the identical value.

(c) **Not deterministic** — independent random draws give different winners.

*Fix:* the leader draws the winner (or a seed) and puts it in the command. Note that shipping a *seed* also requires every replica to use bit-identical pseudo-random code, so shipping the **result** is safer.

(d) **Deterministic**, despite the unordered map — because addition of integers is **commutative and associative**, so the sum is independent of iteration order.

The contrast worth holding: change the accumulation to `total = (total * 31 + v)` and it becomes non-deterministic, because that operation is not commutative. **The map being unordered is not the problem; a non-commutative fold over an unordered collection is.** If in doubt, sort.

**P2**

(a) $25{,}000 \times 200 = 5 \times 10^6$ bytes per second $= \mathbf{5 \text{ MB/s}}$.

Per day: $5 \times 10^6 \times 86{,}400 = 4.32 \times 10^{11}$ bytes $= \mathbf{432 \text{ GB/day}}$.

(b) Six hours is 21,600 seconds:

$$25{,}000 \times 21{,}600 = 5.4 \times 10^8 = \mathbf{540 \text{ million entries}}.$$

At 80,000 per second:

$$\frac{5.4 \times 10^8}{80{,}000} = 6750 \text{ s} = \mathbf{1.875 \text{ hours}}.$$

Worth naming the shape of this: catching up takes a fixed fraction of the downtime — here $80{,}000 / 25{,}000 = 3.2$ times faster than real time, so 6 hours down costs 1.875 hours of recovery, and the cluster runs degraded throughout.

(c) Snapshot interval: $2 \times 10^6 / 25{,}000 = \mathbf{80 \text{ seconds}}$.

Worst-case replay after installing a snapshot is one full interval of entries: $2 \times 10^6 / 80{,}000 = \mathbf{25 \text{ seconds}}$.

**From 1.9 hours to 25 seconds**, and the recovery time is now independent of how long the replica was down — which is the real benefit. Without snapshots recovery scales with the outage; with them it is bounded by the snapshot interval plus the transfer time for the snapshot itself.

(d) **Shorter interval:** more frequent state dumps competing with serving traffic for CPU, memory and disk bandwidth. **Longer interval:** slower recovery for a rejoining replica, and more log retained on disk.

**P3**

(a) The safety condition is $\text{election timeout} > L + \epsilon$:

$$10 > 9 + 0.5 = 9.5 \quad \checkmark$$

**It holds**, with 0.5 seconds of margin.

(b) The leader may serve local reads until $t + L - \epsilon$ on its own clock:

$$t + 9 - 0.5 = \mathbf{t + 8.5 \text{ seconds}}.$$

It must stop half a second early, because its clock may be running fast relative to the followers' by up to $\epsilon$, so what its clock calls $t + 9$ could be $t + 8.5$ on theirs.

(c) *Accept criterion: any step list in which a new leader is elected and commits a write while the old leader still believes its lease is valid.*

With the election timeout at 8 seconds and $L + \epsilon = 9.5$:

1. At $t = 0$ the leader $A$ is granted its lease; it may serve local reads until $t + 8.5$ on its own clock.
2. At $t = 0.1$ the network partitions $A$ from the other four replicas. $A$ is otherwise healthy and continues serving reads locally.
3. At $t = 8.1$ the followers' election timeout (8 seconds of silence) expires. They elect $B$.
4. At $t = 8.3$ a client writes $x = 5$ through $B$, which commits it on the majority side.
5. At $t = 8.4$ — still inside $A$'s 8.5-second window — a client reads $x$ from $A$, which answers **from local state with the old value**.

**Linearizability is violated:** the write returned at 8.3 and the read began at 8.4, so real time requires the read to see it.

The root cause is the arithmetic: $8 \not> 9.5$, so the new leader can be elected before the old one stops trusting its lease.

(d) **It does not fix it.**

`is_leader()` can only report what the node believes, and the node's belief is exactly what is stale. $A$ has heard nothing since the partition, and in an asynchronous system silence is indistinguishable from a healthy quiet cluster ([1.1](01-01-why-distributed-systems-are-hard.md)) — so `is_leader()` returns true throughout step 5.

**No purely local check can work**, and that is the general principle: leadership is a fact about the *cluster*, so establishing it requires either a message to the cluster (ReadIndex, one round trip) or a time-based argument with a clock bound (a correctly sized lease). Checking a local variable is neither.

The correct fixes are to restore $\text{election timeout} > L + \epsilon$ — shorten the lease to 7 seconds alongside the 8-second timeout — or to abandon lease reads and use ReadIndex, paying one round trip per read for an answer that needs no clock assumption at all.

</details>

## Flashback

**From Lesson 3.4 (Raft):** A leader in term 6 has just been elected. Its log is `1 1 3 3 5`, and entries at indices 4 and 5 are replicated on three of the five servers.

(a) State whether the leader may mark index 5 committed, with the rule.
(b) Give the standard first action the leader takes, and what it achieves.
(c) After that action commits, state which indices are committed.

<details>
<summary>Solution</summary>

(a) **No.** Raft's commit rule requires the entry to be replicated on a majority **and** to have been created in the leader's current term. Index 5 carries term 5; the leader's current term is 6. The terms differ, so it may not be marked committed however many servers hold it.

This is the §5.4.2 restriction, and the execution it prevents is the one in [3.4](03-04-raft.md)'s P3: an entry replicated on a majority but inherited from an earlier term can still be overwritten by a future leader whose log ends in a higher term.

(b) The leader appends a **no-op entry in term 6** at index 6 and replicates it.

What it achieves: it creates an entry the leader can vouch for. Once the term-6 entry is on a majority, the commit rule is satisfied for *it*, and committing it commits **everything beneath it** indirectly — the leader's whole inherited prefix becomes safe in one step.

(c) Once the term-6 no-op at index 6 commits, **indices 1 through 6 are all committed.**

The argument that makes this safe: any future leader needs votes from a majority, which intersects the majority holding the term-6 entry; the up-to-date comparison then forces that candidate's log to end in term 6 or later and to be at least as long, so by the Log Matching Property its log contains the entire prefix. Nothing at or below index 6 can be overwritten again.

</details>

## Connections

- **Backward:** the log is [3.4](03-04-raft.md)'s, and the equivalence that licenses the whole construction is [1.7](01-07-ordered-broadcast-fifo-causal-total.md)'s — total-order broadcast plus a deterministic state machine *is* a replicated service. Snapshots are [1.6](01-06-consistent-cuts-and-global-snapshots.md)'s idea in its easiest form, where the log index supplies the consistent cut for free.
- **Forward:** [4.1](04-01-distributed-transactions-and-2pc.md) needs an atomic decision across *several* such groups, which is a different problem from agreeing within one; [4.2](04-02-three-phase-commit-and-consensus-backed-commit.md) puts a replicated state machine in the role of the commit coordinator, which is what stops it blocking.
- **Sideways:** "replicate the commands, not the state" is the logical-replication-versus-physical-replication choice of [`databases` 4.5](../../databases/lessons/04-05-recovery-write-ahead-logging-and-aries.md), and the determinism requirement is the same one that makes a write-ahead log's redo pass reproducible — a redo record must be a pure function of the page and the record, for exactly the reason a state-machine command must be a pure function of the state and the command.
