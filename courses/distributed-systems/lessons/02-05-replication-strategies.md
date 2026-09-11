# Distributed Systems · Lesson 2.5: Replication strategies

> ⏱ ~15 min · Module 2: Consistency and Replication · Builds on: [1.2 (failure models)](01-02-failure-models-and-the-network.md), [2.1 (linearizability)](02-01-linearizability.md), [2.4 (CRDTs)](02-04-crdts-and-strong-eventual-consistency.md) · Unlocks: [2.6 (quorum systems)](02-06-quorum-systems.md), [3.6 (state-machine replication)](03-06-state-machine-replication.md)

## Why this matters

[2.4](02-04-crdts-and-strong-eventual-consistency.md) solved concurrent writes by making the merge provably safe. This lesson takes the other road entirely: **arrange for concurrent writes never to happen**, by funnelling every write through one node. That is what most production systems do, and it works — until the one node dies, at which point you inherit the hardest question in the course.

Three decisions define a replication design, and each has a failure mode people meet in production before they meet in a textbook. Where do writes go? How long does a write wait? And what happens when the node they were going to dies?

## The idea

**Where writes go.** A **single-leader** scheme routes every write to one replica which orders them and ships the sequence to followers. Concurrency between writes is resolved by the leader's own sequential execution, so there are no conflicts to merge — this is why it is the default in almost every database. A **multi-leader** scheme accepts writes at several nodes and is back in [2.3](02-03-eventual-consistency-and-anti-entropy.md)'s world with conflicts to reconcile, bought in exchange for local write latency in several regions. A **leaderless** scheme sends every write to several replicas directly, which is [2.6](02-06-quorum-systems.md).

**How long a write waits.** **Synchronous** replication means the leader does not acknowledge until followers have the write, so a failover loses nothing. **Asynchronous** means it acknowledges immediately, so writes are fast and a failover loses everything the followers had not yet received. The crucial and under-appreciated fact is that synchronous replication makes your *latency* the **slowest** follower's, not the average — a single garbage-collecting replica stalls every write in the system. **Semi-synchronous** is the standard compromise: wait for *one* follower, not all of them.

**What happens on failover.** This is where [1.2](01-02-failure-models-and-the-network.md)'s split brain lives. The old leader may not be dead, only unreachable, and if it keeps accepting writes there are two leaders. Two mechanisms contain it: elect the new leader by **majority** so that at most one side can win, and issue each leader a monotonically increasing **fencing token** that the shared resource checks, so a deposed leader's late write is rejected at the storage layer even if it slips past every other check.

**Chain replication** is worth knowing as the elegant alternative. Arrange replicas in a line: writes enter at the **head** and flow down; the **tail** acknowledges the client and serves all reads. Because the tail has, by construction, seen every write that any client has been told succeeded, **reads at the tail are linearizable with no coordination at all** — and the leader's fan-out bottleneck disappears, because each node forwards to exactly one successor.

## The formal version

> **Single-leader replication.** One replica is the leader; all writes go to it. The leader appends each write to a replication log and streams the log to followers, which apply it in order. Followers serve reads.

Because the leader assigns a total order and followers apply it in that order, the system is FIFO and causally consistent by construction ([1.7](01-07-ordered-broadcast-fifo-causal-total.md)). It is **not** linearizable if followers serve reads, because a follower may lag.

> **Replication lag.** The time by which a follower trails the leader. Under async replication, a failover loses every write the new leader had not yet received — an amount bounded by the lag, not by anything the client can see.

> **Synchronous vs. semi-synchronous.** A write waits for $k$ of $n-1$ followers. $k = n-1$ is fully synchronous; $k = 1$ is semi-synchronous; $k = 0$ is asynchronous.

**The latency arithmetic.** Suppose each follower responds in 2 ms with probability 0.99 and 50 ms with probability 0.01, independently. Waiting for **all** $k$ followers is slow whenever *any* is slow:

$$\Pr[\text{slow}] = 1 - 0.99^{k}.$$

| $k$ | wait for all | wait for one |
|---|---|---|
| 1 | 1.00% | $10^{-2}$ |
| 2 | 1.99% | $10^{-4}$ |
| 4 | 3.94% | $10^{-8}$ |
| 8 | 7.73% | $10^{-16}$ |

**Waiting for all makes stalls more likely as you add replicas; waiting for one makes them less likely.** That is the entire argument for semi-synchronous replication, and it is why adding a fifth replica to a fully synchronous group can make the system slower and less available at once.

> **Chain replication** (van Renesse & Schneider). Replicas form a total order $r_1 \to \cdots \to r_n$. A write goes to $r_1$ and is forwarded down the chain; $r_n$ applies it and acknowledges the client. All reads go to $r_n$.

**Cost.** A write costs $n$ messages in total and **at most 2 per node**, against $2(n-1)$ messages at the leader in primary-backup — 8 at one node for $n = 5$, against a chain in which no node handles more than 2. **Linearizability** is immediate: a write is acknowledged only after the tail has it, and every read is served by the tail, so no read can miss an acknowledged write.

**Failure handling is unusually simple.** Head fails: its successor becomes head. Tail fails: its predecessor becomes tail, and it may need to propagate writes the old tail had but had not acknowledged. Middle node fails: link its neighbours and replay anything in between. Each case is a local repair — but **deciding that a node has failed, and agreeing on the new chain, is a consensus problem**, handled by a separate configuration service.

> **Fencing token.** Each leadership term is numbered by a monotonically increasing integer. The leader includes its token with every request to a shared resource, and the resource rejects any request whose token is below the highest it has seen.

In words: this is the defence of last resort, and it works because it is enforced at the *resource*, which is a single point that sees every request, rather than at the nodes, which cannot tell whether they are still leader.

## Picture

![Two replication topologies side by side. On the left, primary-backup: one leader box receives all writes and fans out to three follower boxes, annotated with the fact that the leader handles two times n minus one messages per write, eight at one node when n is five, and that reads from a follower may be stale. On the right, chain replication: four boxes in a line labelled head, mid, mid and tail, with writes entering at the head, each node forwarding to its successor, and the tail both acknowledging the client and serving reads; annotated with n messages per write, at most two per node, and the note that reads at the tail are linearizable.](assets/02-05-fig1.svg)

The shapes tell you where the bottleneck is. In the hub, every write's cost lands on one node and grows with the replica count. In the pipeline, the per-node cost is constant and the replica count only adds latency — a chain trades throughput-limiting fan-out for a longer critical path.

## Worked examples

**Example 1 — what a failover actually costs, in writes.**

A leader accepts 5,000 writes per second. Its follower is asynchronous and typically lags by 250 ms; under load the lag reaches 3 seconds.

**The leader's host loses power.** The follower is promoted.

- At typical lag: $5000 \times 0.25 = \mathbf{1250}$ writes are lost.
- At peak lag: $5000 \times 3 = \mathbf{15{,}000}$ writes are lost.

Every one of those was **acknowledged to a client**. The system told 15,000 users their action succeeded and then forgot it, and nothing in the system records which ones — the writes existed only on a machine that is now off.

**Switch the follower to synchronous.** Zero writes are lost on failover. The costs, in order of how often they surprise people:

1. **Every write now waits for the follower.** Round-trip plus the follower's fsync, added to the critical path of all 5,000 writes per second.
2. **If the follower is down, writes stop.** A fully synchronous pair is *less* available than a single node: two machines that both must work, which is [1.1](01-01-why-distributed-systems-are-hard.md)'s series arithmetic exactly.
3. **A slow follower stalls the leader.** Not a failure, just a garbage collection pause, and every client feels it.

**Semi-synchronous with two followers** is the usual resolution: acknowledge when *either* follower has the write. From the table above, the chance of a stall drops from about 1 percent to about 0.01 percent, no single follower can block writes, and failover to whichever follower has the write loses nothing — provided the failover logic **checks which follower is caught up** rather than promoting a fixed one.

**Example 2 — a split brain that survives every obvious defence.**

A lock service grants a lease on a shared storage volume. Client $X$ acquires it and begins writing.

1. $X$ holds the lease and starts a write.
2. **$X$ pauses** — a long garbage-collection pause, 15 seconds, which [1.1](01-01-why-distributed-systems-are-hard.md) noted is indistinguishable from a crash.
3. The lease expires. The lock service grants it to client $Y$.
4. $Y$ writes to the volume. All correct so far.
5. **$X$ resumes**, entirely unaware that any time has passed, and completes its write.

$X$'s write lands **after** $Y$'s and corrupts it. Every component behaved correctly: the lease expired legitimately, the service granted it legitimately, and $X$ was never told anything.

**The defences that do not work.** Having $X$ check the lease before writing fails, because the pause can occur *between* the check and the write. Shortening the lease makes the race more frequent, not less. Having $X$ check its own clock fails, because the pause is invisible from inside $X$.

**The defence that does work is a fencing token.** The lock service issues token 33 to $X$ and token 34 to $Y$. The storage volume records the highest token it has accepted. When $X$'s delayed write arrives carrying 33, the volume sees $34 > 33$ and **rejects it**.

**Why this works when nothing else does: the check happens at the one component that sees both writes.** No node can determine whether it is still the leader — that is the indistinguishability problem again — but the resource can determine which of two requests is stale, because it has seen both. **Push the check to where the information is**, and the fact that $X$ was wrong about its own status stops mattering.

## Watch out

- **You might think synchronous replication is strictly safer.** It converts a durability risk into an availability risk, and the availability risk is larger than it looks: waiting for all $k$ followers means a stall whenever *any* is slow, so the probability of a slow write *grows* with the replica count.
- **You might think a majority election makes fencing unnecessary.** Majority election prevents two nodes from *believing* they are leader simultaneously in the normal case. It does not prevent a deposed leader whose process was paused from issuing a write it prepared while it still was leader. Fencing is the only mechanism that catches that one, because it is checked downstream of the belief.
- **You might think the replication lag is something clients can observe.** They cannot. A client that gets an acknowledgement from an asynchronous leader has no way to learn whether the write reached a follower, and no way to wait for it. If durability matters for a particular write, the *system* must be configured to wait — there is no client-side fix.

## One-liner

> Funnelling writes through one leader deletes the conflict problem and replaces it with the failover problem, and the failover problem has exactly two honest answers — elect by majority so at most one side can win, and fence at the resource so a leader who is wrong about being leader cannot do damage.

## Problems

**P1 (🟢)** A leader takes 8,000 writes per second with one asynchronous follower.

(a) The follower lags by 400 ms when the leader's host fails. Give the number of acknowledged writes lost.
(b) The team sets a monitoring alert at 1 second of lag. Give the number of writes that alert corresponds to.
(c) Switching the follower to synchronous, each write's added latency is one 0.6 ms round trip plus a 1.2 ms fsync at the follower. Give the added latency per write and the resulting cap on single-threaded write throughput from this term alone.
(d) State what happens to write availability if the synchronous follower goes down, and name the arithmetic from [1.1](01-01-why-distributed-systems-are-hard.md) that describes it.

**P2 (🟡)** A leader replicates to $k$ followers, each responding in 3 ms with probability 0.98 and 80 ms with probability 0.02, independently.

(a) Give the probability that a fully synchronous write is slow, for $k = 2$ and $k = 6$.
(b) Give the same probability under semi-synchronous replication (wait for one) at $k = 2$ and $k = 6$.
(c) State which scheme benefits from adding followers and which is harmed, with the reason in one clause.
(d) The team proposes waiting for a **majority** of the $k$ followers. Give the probability of a slow write at $k = 5$, and state which of the two behaviours this resembles.

**P3 (🔴, optional)** A five-node cluster uses majority election for leadership and writes to a shared object store.

(a) A partition splits the cluster 3–2. Give what each side can and cannot do, and state whether split brain occurs.
(b) The old leader is on the minority side. Give an ordered step list in which it nonetheless corrupts the object store, with no node behaving incorrectly.
(c) Give the mechanism that prevents your scenario, and state precisely which component performs the check and why it is the only one that can.
(d) The team argues that a 30-second lease makes (b) impossible because "no pause lasts 30 seconds". State whether the argument holds, and give a concrete counterexample from [1.1](01-01-why-distributed-systems-are-hard.md) or [1.2](01-02-failure-models-and-the-network.md).

<details>
<summary>Solutions</summary>

**P1**

(a) $8000 \times 0.4 = \mathbf{3200}$ acknowledged writes lost.

(b) $8000 \times 1.0 = \mathbf{8000}$ writes. Worth stating plainly: the alert fires at the point where a failover would silently discard eight thousand confirmed operations, which is a rather different framing from "lag is 1 second".

(c) Added latency $= 0.6 + 1.2 = \mathbf{1.8 \text{ ms}}$ per write.

Single-threaded, this caps throughput at $1/0.0018 = \mathbf{556}$ writes per second from this term alone — against the 8,000 per second the leader was handling. **Synchronous replication is not viable here without pipelining or batching**, which is exactly what real implementations do: the leader streams and acknowledges in groups rather than blocking per write.

(d) **Writes stop entirely.** A fully synchronous leader cannot acknowledge without its follower, so a healthy leader holding all the data refuses service.

This is the **series** arithmetic of [1.1](01-01-why-distributed-systems-are-hard.md): the pair is available only when both are, so $A = A_{\text{leader}} \times A_{\text{follower}}$, which is strictly less than either. Adding a machine made availability worse because the machine became a dependency rather than an alternative.

**P2**

(a) Fully synchronous is slow if any follower is slow: $1 - 0.98^k$.

- $k = 2$: $1 - 0.9604 = \mathbf{3.96\%}$
- $k = 6$: $1 - 0.8858 = \mathbf{11.42\%}$

(b) Semi-synchronous is slow only if **all** followers are slow: $0.02^k$.

- $k = 2$: $4 \times 10^{-4} = \mathbf{0.04\%}$
- $k = 6$: $6.4 \times 10^{-11}$, effectively **never**

(c) **Semi-synchronous benefits and fully synchronous is harmed**, because waiting for all takes the *maximum* over followers (more followers, more chances one is slow) while waiting for one takes the *minimum* (more followers, more chances one is fast).

(d) Waiting for a majority of $k = 5$ means waiting for 3, so the write is slow if 3 or more are slow:

$$\sum_{j=3}^{5} \binom{5}{j} (0.02)^j (0.98)^{5-j} = 10(8\times10^{-6})(0.9604) + 5(1.6\times10^{-7})(0.98) + 3.2\times10^{-9}$$

$$= 7.68\times10^{-5} + 7.84\times10^{-7} + 3.2\times10^{-9} \approx \mathbf{7.8 \times 10^{-5}} = 0.0078\%$$

**This resembles the semi-synchronous behaviour**, not the synchronous one: it takes a *median*-like order statistic rather than a maximum, so a single slow follower never stalls the write and the probability falls as $k$ grows. This is why majority quorums are the standard choice — they give durability across failures with tail latency that improves rather than degrades with replica count, which is the point [2.6](02-06-quorum-systems.md) develops.

**P3**

(a) The **3-node side** can elect a leader (3 of 5 is a majority) and continues serving reads and writes. The **2-node side** cannot form a majority, so it cannot elect a leader and must refuse writes; it may serve stale reads if the system permits them.

**No split brain in the sense of two elected leaders** — at most one side of any partition can hold a majority, which is the property the majority rule buys. The minority side is unavailable, which is the price.

(b) *Accept criterion: any step list where the old leader is paused or delayed across the moment the new leader is elected, and its in-flight write reaches the store afterwards.*

1. Node $L$ is leader with term 7 and begins a write to the object store.
2. $L$ is on the minority side when the partition forms. It is otherwise healthy.
3. $L$'s process enters a long stop-the-world garbage-collection pause, holding a prepared write to the store.
4. The majority side detects $L$'s silence, elects node $M$ with term 8.
5. $M$ writes version $v_8$ of the object to the store.
6. $L$ resumes. It has no idea time has passed, no idea it has been deposed, and the object store is reachable from its side of the partition. It completes its write, overwriting $v_8$.

Every node followed its algorithm. The majority rule was not violated — only one leader was ever *elected* — but two nodes *wrote*.

(c) **A fencing token.** Each elected leader receives its term number as a token, includes it with every request to the object store, and **the object store** records the highest token it has accepted and rejects anything lower. $L$'s late write carries 7, the store has seen 8, and the write is refused.

**The object store is the only component that can perform this check**, because it is the only one that sees both writes. $L$ cannot check its own status — no node can determine whether it is still leader, since that would require distinguishing "I am partitioned" from "everyone else is dead" ([1.1](01-01-why-distributed-systems-are-hard.md)). The election service cannot check either, because it is not on the path of the write. **The check must live where both requests converge**, and that is the resource.

(d) **The argument does not hold**, on two counts.

First, pauses of that length do occur. A stop-the-world garbage collection on a large heap, a hypervisor suspending a virtual machine for live migration, or a machine swapping under memory pressure can each exceed 30 seconds, and [1.1](01-01-why-distributed-systems-are-hard.md) noted a paused process is indistinguishable from a crashed one for exactly this reason.

Second, and more fundamentally, **the pause is not the only cause**. A message delayed in the network for 30 seconds produces the same outcome with no pause at all — $L$ sends its write promptly, the packet is queued or retransmitted for half a minute, and it arrives after $M$'s. The asynchronous model ([1.1](01-01-why-distributed-systems-are-hard.md)) places no bound on message delay, so no lease length makes a late arrival impossible.

**Lengthening the lease trades one failure mode for another**: longer leases make the race rarer and make genuine failover slower, so a real crash leaves the system unavailable for the full lease duration. It is a tuning knob over a bug, and fencing is the fix.

</details>

## Flashback

**From Lesson 2.4 (CRDTs):** A team replicates a page-view counter across three data centres using a PN-Counter, and separately replicates a "remaining tickets" count using the same type.

(a) State whether the page-view counter converges correctly under concurrent increments at all three sites, with the reason.
(b) State whether the ticket count can enforce "never below zero", with the one sentence that decides it.
(c) Give what the ticket system must do instead, in one clause.

<details>
<summary>Solution</summary>

(a) **Yes, it converges.** A PN-Counter is a pair of G-Counters, each merged by pointwise maximum, and each site only ever increments its own coordinate. Pointwise max is associative, commutative and idempotent, so replicas that have seen the same set of increments hold the same state regardless of delivery order or duplication — the convergence theorem applies directly, and no increment is ever lost.

(b) **It cannot.** The deciding sentence: *the join of two valid states can be invalid* — two sites each decrement the last remaining ticket, each local state is legal, and their merge records two sales against one ticket, with merge being a total function that has no way to reject the result.

(c) The ticket system must **coordinate the decrement path through a single ordering point** — a leader, or a consensus round — so that the two sales are serialised and the second one can be refused while it still can be.

Note the useful consequence: only the *decrement* path needs coordination. Reads of the approximate remaining count, and the page-view counter alongside it, can stay replicated and available. **Isolating the operations that need agreement from those that do not is the standard way to keep the coordinated part small.**

</details>

## Connections

- **Backward:** single-leader replication is the alternative to [2.4](02-04-crdts-and-strong-eventual-consistency.md)'s approach — prevent concurrent writes rather than merge them — and the fencing token is the concrete answer to [1.2](01-02-failure-models-and-the-network.md)'s split-brain problem, which that lesson raised and deferred.
- **Forward:** [2.6](02-06-quorum-systems.md) removes the leader entirely and asks what a set of replicas can guarantee by intersection alone; [3.4](03-04-raft.md) supplies the majority election this lesson assumed; and [3.6](03-06-state-machine-replication.md) is single-leader replication done correctly, with the leader's log ordered by consensus rather than by assertion.
- **Sideways:** the leader's replication log is the write-ahead log of [`databases` 4.5](../../databases/lessons/04-05-recovery-write-ahead-logging-and-aries.md) shipped over a network, and the durability-versus-latency choice is the same one that lesson makes with `force` and `no-force` — one machine's fsync policy and a cluster's synchronous-replication policy are the same decision at two scales.
