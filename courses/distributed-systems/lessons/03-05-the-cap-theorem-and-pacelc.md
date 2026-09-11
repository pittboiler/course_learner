# Distributed Systems · Lesson 3.5: The CAP theorem and PACELC

> ⏱ ~15 min · Module 3: Consensus and the CAP Theorem · Builds on: [2.1 (linearizability)](02-01-linearizability.md), [2.6 (quorum systems)](02-06-quorum-systems.md), [2.2 (causal consistency)](02-02-sequential-causal-and-session-consistency.md) · Unlocks: [3.6 (state-machine replication)](03-06-state-machine-replication.md), [4.6 (Nakamoto consensus)](04-06-nakamoto-consensus-and-blockchains.md)

## Why this matters

CAP is the most cited and most misquoted result in the field. "Pick two of three" is repeated everywhere and is not what the theorem says; it is not even a coherent sentence, since partitions are an event rather than a property you select.

[`databases` 4.6](../../databases/lessons/04-06-nosql-and-distributed-data.md) gave you the practitioner's version and the right slogan — *the real choice is C or A during a partition.* This lesson supplies the proof, which takes four nodes and two operations, and then the more useful successor result: **PACELC**, which points out that the partition case is rare and that the *same* trade is being made continuously on a healthy network, in the currency of latency. That second trade is the one you actually pay for every day.

## The idea

Suppose a system claims all three properties, and split it in half. Nodes on the left can talk to each other, nodes on the right likewise, and nothing crosses.

A client writes $x = 1$ on the left and gets an acknowledgement. That acknowledgement means the write is done. A different client now reads $x$ on the right. **Availability says the right side must answer** — it is not permitted to hang or error, that is what availability means. **Partition tolerance says no message about the write reached it.** So it answers from what it has, which is the old value.

But the write **returned** before the read **started**, so [2.1](02-01-linearizability.md)'s real-time constraint says the read must see it. It did not. Consistency fails.

That is the entire proof. Notice how few ingredients it uses: two nodes on each side, one write, one read, and the definition of linearizability. There is no clever adversary and no long execution — **the result is a triviality once the three properties are stated precisely**, and its reputation for depth comes from how often they are not.

**What follows in practice.** Because partitions happen to you rather than being chosen, a real system is either **CP** (refuses service on the minority side, preserving consistency) or **AP** (serves both sides, accepting divergence). And because [2.2](02-02-sequential-causal-and-session-consistency.md) showed causal consistency is achievable while always available, an AP system is not thereby consistency-free: **causal consistency is the ceiling under partition, and it is a long way above nothing.**

**And PACELC.** Partitions are rare. Cross-machine round trips are not. Every time a system waits for a quorum, it is paying latency for consistency, on a perfectly healthy network. So: **if Partitioned, choose Availability or Consistency; Else, choose Latency or Consistency.** The "else" branch describes almost all of your system's life.

## The formal version

> **Consistency.** Linearizability ([2.1](02-01-linearizability.md)): there is a total order on operations consistent with real time, and each read returns the value of the last write preceding it in that order.

> **Availability.** Every request received by a **non-failing** node must result in a response. No bound on how long — an eventual response suffices for the theorem.

> **Partition tolerance.** The network may lose arbitrarily many messages sent between nodes.

> **CAP (Gilbert and Lynch, 2002).** In an asynchronous network model, no read/write data object can guarantee both availability and linearizable consistency in all executions in which messages may be lost.

*Proof.* Partition the nodes into non-empty groups $G_1$ and $G_2$ with all messages between them lost. Let a client write $v \ne v_0$ to a node in $G_1$; by availability this write returns. Let a client subsequently read from a node in $G_2$; by availability this read returns some value. $G_2$ received no message about the write, so its execution is indistinguishable from one in which the write never occurred, and it returns $v_0$. The write's response precedes the read's invocation in real time, so linearizability demands the read return $v$. Contradiction. $\square$

**Four things the theorem does not say**, each of which is asserted somewhere in the wild:

1. **It is not "pick two of three".** Partition tolerance is not a property you implement or decline; a partition is an event. The theorem constrains behaviour *during* one.
2. **It says nothing about a healthy network.** When no messages are lost, a system may be fully consistent and fully available, and good ones are.
3. **"Consistency" means linearizability specifically.** Weaker models are not covered. An always-available system can provide causal consistency and all four session guarantees ([2.2](02-02-sequential-causal-and-session-consistency.md)), and that is the *maximum* it can provide.
4. **"Availability" means every non-failing node answers.** A system that stays up on the majority side while the minority refuses is **not** available in CAP's sense — and is nonetheless what almost everyone wants.

> **PACELC (Abadi, 2012).** If there is a **P**artition, trade **A**vailability against **C**onsistency; **E**lse, trade **L**atency against **C**onsistency.

The classification is written as, for example, PC/EC or PA/EL:

| system style | partition behaviour | normal behaviour |
|---|---|---|
| consensus-replicated store (Spanner, etcd, ZooKeeper) | PC — minority refuses | EC — pays quorum latency always |
| Dynamo-style store at $R = W = 1$ | PA — both sides serve | EL — answers from the nearest replica |
| single-leader database with async followers | PC — followers go read-only | EL — reads may be stale, and are fast |

**The latency the E-branch buys.** Consistency across replicas costs at least one round trip to a quorum, and the floor is physics. Light in fibre travels at about $\tfrac{2}{3}c \approx 200{,}000$ km/s, so:

| path | great-circle distance | one-way floor | round-trip floor |
|---|---|---|---|
| Oregon – Virginia | 3,900 km | 19.5 ms | 39 ms |
| New York – London | 5,585 km | 27.9 ms | 56 ms |
| New York – Sydney | 15,990 km | 80.0 ms | 160 ms |

These are **lower bounds from the speed of light**; real paths are longer and add switching, so observed figures run perhaps 1.3 to 1.6 times these. A linearizable write replicated across three continents cannot be acknowledged in under about 100 ms, no matter what you buy. **Choosing consistency in the E-branch is choosing to add a round trip to every write, forever.**

## Picture

![Two groups of nodes, G1 on the left and G2 on the right, separated by a dashed vertical line marked as a partition in which every message is lost. A client writes x equals 1 to G1 and receives an acknowledgement, so G1 holds x equals 1. A client then reads x from G2, which must answer under availability and holds only the old value x equals 0. Text below sets out the contradiction: availability forces G2 to answer, partition tolerance means no message reached it, and the write having already returned means real-time order forbids the later read from missing it.](assets/03-05-fig1.svg)

The figure is the proof. It needs four nodes only for appearances — two would do — and the whole force of the argument is in the ordering of the two client operations: the write **returned** before the read **began**, which is exactly the clause that distinguishes linearizability from sequential consistency.

## Worked examples

**Example 1 — the same partition, three systems.**

Five replicas across two data centres, split 3–2 by a fibre cut. A client is connected to each side.

**(a) An etcd-style Raft cluster (PC/EC).** The 3-node side holds a majority, elects or retains a leader, and serves reads and writes normally. The 2-node side cannot form a quorum: **every request there fails**, including reads, if reads go through the leader.

Linearizability is preserved. The minority side is unavailable, and that is the design working — refusing is the only way to avoid returning a value that the majority side has already changed.

**(b) A Dynamo-style store at $N=5$, $R=W=1$ (PA/EL).** Both sides accept reads and writes. A client on the left writes $x = 1$; a client on the right writes $x = 2$. Both succeed, and after the partition heals the two versions are concurrent ([2.3](02-03-eventual-consistency-and-anti-entropy.md)) and must be reconciled by siblings, a CRDT merge, or last-writer-wins.

Availability is total. Linearizability is gone from the moment of the split, and — worth being precise — **it was already gone before the split**, because $R + W = 2 \not> 5$.

**(c) The same store at $N=5$, $R=W=3$.** The 3-node side can assemble both quorums and serves everything. The 2-node side can assemble neither and **fails every request**.

This is indistinguishable from (a) in behaviour. **The letters in a product's marketing describe its default configuration, not the system**, and the same store is CP or AP depending on two integers in a config file.

**The observation that ties the three together:** each side of a partition is in exactly the position of [1.1](01-01-why-distributed-systems-are-hard.md)'s client with no reply. It cannot tell whether the other side is dead or unreachable. CP systems resolve the ambiguity by assuming the other side might be alive and refusing to act; AP systems assume it is dead and act anyway. **Neither is wrong; they are answers to a question with no observable answer.**

**Example 2 — the E-branch, priced.**

A service runs replicas in Virginia, Oregon and London and must survive losing any one region, so it uses a 3-replica majority quorum: every write needs acknowledgements from 2 of 3.

**Write latency from Virginia.** The leader is in Virginia and needs one more acknowledgement. Oregon is the nearer peer at a 39 ms round-trip floor, so the write cannot be acknowledged in under about **39 ms**, and with real routing perhaps 60 ms. Compare a single-region write at roughly 1 ms: **consistency across regions has made writes about fifty times slower, with no partition anywhere.**

**Choosing EL instead.** Acknowledge locally in Virginia and replicate asynchronously. Writes return in 1 ms. The cost is [2.5](02-05-replication-strategies.md)'s arithmetic: a Virginia failure loses every write the peers had not yet received, bounded by the replication lag rather than by anything a client can see.

**A third option, and the reason Spanner is interesting.** Keep consistency, and pay the latency in a *different* currency. Spanner's TrueTime reports a bounded uncertainty interval — an $\epsilon$ of a few milliseconds, achieved with GPS receivers and atomic clocks in every data centre — and a transaction **waits out** $2\epsilon$ before releasing its commit timestamp. At $\epsilon = 7$ ms that is a **14 ms commit wait**, which is real but is *not* a cross-continent round trip.

**The trade has not been abolished, it has been moved**: Spanner converted a network round trip into a clock-uncertainty wait, and paid for it with hardware most organisations do not have. **PACELC's E-branch is a budget, not a rule** — you may spend it on latency, on staleness, or on atomic clocks, and there is no fourth option.

## Watch out

- **You might think a CP system is "down" during a partition.** The majority side runs normally. Only the minority refuses, and it refuses precisely because it cannot rule out the majority having moved on without it.
- **You might think AP means no consistency guarantees.** The ceiling under partition is causal consistency plus all four session guarantees ([2.2](02-02-sequential-causal-and-session-consistency.md)), which is a great deal. An AP system that provides none of that has chosen to, and is not forced to by CAP.
- **You might think CAP is the constraint you feel in production.** Partitions are occasional; quorum round trips are constant. The latency arm of PACELC governs almost all of a system's life, and it is the one that shows up in a latency histogram rather than an incident review.

## One-liner

> CAP is a four-node proof that during a partition you must choose between answering and answering correctly — and PACELC is the more useful observation that on a healthy network you are making the same choice continuously, denominated in round trips, with the speed of light setting the floor.

## Problems

**P1 (🟢)** Classify each system's behaviour during a partition as CP or AP, and name the specific mechanism that forces it.

(a) A 5-node Raft cluster, split 3–2, with all reads served by the leader.
(b) A 3-replica store with $R = W = 1$, split 2–1.
(c) A 3-replica store with $R = W = 2$, split 2–1.
(d) A single-leader database with two asynchronous read replicas, where the leader is cut off from both.

**P2 (🟡)** A service replicates across Virginia, London and Sydney with a 3-replica majority quorum. Use a fibre speed of 200,000 km/s and these great-circle distances: Virginia–London 5,900 km, Virginia–Sydney 15,600 km, London–Sydney 17,000 km.

(a) Give the round-trip floor for each of the three links.
(b) The leader is in Virginia. Give the minimum write latency, and name the link that sets it.
(c) The leader moves to London. Give the minimum write latency.
(d) State where the leader should sit to minimise the worst-case write latency, and give the resulting figure.

**P3 (🔴, optional)** A team runs a globally replicated inventory service and wants linearizable decrements of stock counts.

(a) State which PACELC class this requirement forces, and why.
(b) The team measures 180 ms median write latency and calls it a bug. Given a quorum spanning Virginia and Sydney, state whether 180 ms is anomalous, using the figures from P2.
(c) The team proposes serving reads from the nearest replica while keeping writes quorum-based. State which guarantee this breaks and give a two-operation history that exhibits the failure.
(d) Give a design that keeps linearizable decrements and gets most reads to local latency, and state what it costs.

<details>
<summary>Solutions</summary>

**P1**

(a) **CP.** The mechanism is the **majority quorum**: the 3-node side can elect and commit, and the 2-node side cannot assemble 3 votes, so it refuses every request — including reads, since reads go through the leader and the minority has none.

(b) **AP.** The mechanism is that $R = W = 1$ means **any single reachable replica satisfies both quorums**, so both sides serve everything. The cost is that $R + W = 2 \not> 3$, so concurrent writes on the two sides produce divergence to be reconciled later.

(c) **CP.** With $R = W = 2$, the 2-node side can assemble both quorums and serves normally; the 1-node side can assemble neither and fails every request.

Note (b) and (c) are the **same store** with different integers in its configuration — which is why "this database is AP" is a statement about a deployment, not a product.

(d) **CP, in effect, and for a different reason.** The leader still accepts writes but cannot replicate them; whether it continues depends on its synchronous-replication setting. The replicas, cut off from the leader, go read-only and serve increasingly stale data.

The mechanism is the **absence of a majority election**: with only a leader and two followers and no quorum rule, the followers cannot promote one of their own without risking split brain, so the honest configuration stops accepting writes. If instead the followers *do* promote on a timeout, this becomes the split-brain scenario of [1.2](01-02-failure-models-and-the-network.md) P3 — available and incorrect.

**P2**

(a) Round-trip floor is $2 \times \text{distance} / 200{,}000$ km/s:

| link | distance | one-way | round trip |
|---|---|---|---|
| Virginia–London | 5,900 km | 29.5 ms | **59 ms** |
| Virginia–Sydney | 15,600 km | 78.0 ms | **156 ms** |
| London–Sydney | 17,000 km | 85.0 ms | **170 ms** |

(b) A majority of 3 is 2, so the Virginia leader needs **one** remote acknowledgement and takes the **nearer** peer: London, at **59 ms**. Sydney is irrelevant to the latency — a quorum does not wait for the slowest replica, which is the [2.5](02-05-replication-strategies.md) point about majorities taking a middle order statistic rather than a maximum.

(c) A London leader's nearer peer is Virginia at 59 ms, so the minimum write latency is again **59 ms**.

(d) Worst case is set by the leader's *nearest* peer, so compute that per site:

| leader | nearest peer | write latency |
|---|---|---|
| Virginia | London, 59 ms | 59 ms |
| London | Virginia, 59 ms | 59 ms |
| Sydney | Virginia, 156 ms | 156 ms |

**Put the leader in Virginia or London, for 59 ms.** Sydney is the wrong place for the leader by a factor of 2.6, and the general rule is worth extracting: **leader placement should minimise the distance to the $\lceil n/2 \rceil$-th nearest replica, not the average distance to all of them** — which usually means placing the leader in the geographically central region rather than the one with the most users.

**P3**

(a) **PC/EC.**

Linearizable decrements are exactly the invariant [2.4](02-04-crdts-and-strong-eventual-consistency.md) showed no CRDT can maintain: "stock never goes below zero" is not preserved by joins, so the decrement path must be serialised through a quorum. That forces **PC** — during a partition the minority side must refuse rather than sell stock it cannot account for — and **EC**, because the quorum round trip is paid on every decrement whether or not the network is healthy.

(b) **Not anomalous.** With replicas in Virginia, London and Sydney, the answer depends on where the leader sits, and 180 ms is consistent with a **Sydney leader**: its nearest peer is Virginia at a 156 ms floor, and 180 ms is 1.15 times that — well within the usual 1.3 to 1.6 overhead for real routing, in fact better than typical.

**The team is measuring the speed of light, not a bug.** The actionable finding is leader placement: moving the leader to Virginia or London would put the floor at 59 ms, so a measured figure near 75 ms should be achievable. That is a configuration change, not a code change, and no amount of profiling would have found it.

(c) It breaks **linearizability**, specifically the real-time clause.

A two-operation history, with a client in Sydney reading from the local replica:

$$A \text{ (Virginia)}: W(\text{stock} = 4)[0, 60], \qquad B \text{ (Sydney)}: R(\text{stock} = 5)[70, 75]$$

The write completed at 60 ms, having reached the Virginia and London replicas — a majority. $B$'s read starts at 70 ms, after the write returned, and is served by the Sydney replica, which is not in the write quorum and still holds the old value 5. The read returns a superseded value after the write was acknowledged, which is precisely the non-linearizable pattern of [2.1](02-01-linearizability.md).

In inventory terms: a customer in Sydney is shown 5 units in stock when 4 is the committed figure, and may be sold one that does not exist.

(d) **Leader leases with local read replicas, plus a split between the two kinds of operation.**

Concretely: keep the decrement path quorum-based and globally ordered; grant the leader a **lease** ([3.6](03-06-state-machine-replication.md)) so it can serve linearizable reads locally without a quorum round trip; and let regional replicas serve *bounded-staleness* reads for browsing, clearly labelled as approximate, while any read that will be acted upon — the add-to-cart check, the checkout — goes to the leader.

**What it costs**, in three parts. Browsing reads are **not linearizable** and the product must tolerate showing a slightly stale count, which for a stock display is usually fine and for a "1 left!" badge is a decision. Reads that must be exact still pay the cross-region round trip, so checkout is slow for distant users. And the lease introduces a **clock assumption**: the leader may serve local reads only while it is certain its lease has not expired, which requires a bound on clock drift ([1.4](01-04-physical-clocks-and-synchronization.md)) and means a leader that is partitioned away must stop serving reads before its lease expires, not after.

The general shape is the one worth carrying: **isolate the operations that genuinely need linearizability, pay full price for those, and serve everything else from the nearest copy.** Almost every global system that feels fast is doing this.

</details>

## Flashback

**From Lesson 2.6 (quorum systems):** A store has $N = 7$ replicas configured with $R = 5$, $W = 2$.

(a) State whether every read sees every completed write, with the arithmetic.
(b) State whether two concurrent writes are guaranteed to be ordered, with the arithmetic.
(c) Give the smallest change to $W$ that fixes the problem in (b), and the resulting constraint on $R$.

<details>
<summary>Solution</summary>

(a) **No.** The condition is $R + W > N$, and here $R + W = 5 + 2 = 7 = N$, which does not exceed it.

The boundary case is the trap: a read quorum of 5 and a write quorum of 2 drawn from 7 replicas **can be disjoint**, taking replicas $\{1..5\}$ and $\{6,7\}$. Overlap requires the sum to *strictly* exceed $N$, and equality buys nothing.

(b) **No.** The write-ordering condition is $2W > N$, and $2(2) = 4 \not> 7$. Two write quorums of size 2 drawn from 7 replicas can be disjoint, so two concurrent writes can be accepted with no replica holding both and nothing establishing their order.

(c) $2W > 7$ requires $W \ge 4$. **The smallest fix is $W = 4$**, and then $R + W > 7$ requires $R \ge 4$.

So the configuration becomes $W = 4$, $R \ge 4$ — the majority. As with $N = 5$ in [2.6](02-06-quorum-systems.md), the moment both conditions are imposed at maximum fault tolerance, the answer is the majority quorum, which is why consensus protocols use nothing else.

</details>

## Connections

- **Backward:** the "consistency" in CAP is exactly [2.1](02-01-linearizability.md)'s definition, and the proof turns on its real-time clause; the CP behaviour of a majority-quorum system is [2.6](02-06-quorum-systems.md)'s intersection property seen from the minority side, where refusing service is the intersection doing its job.
- **Forward:** [3.6](03-06-state-machine-replication.md) builds the CP side properly, including the leases that make local linearizable reads possible; [4.6](04-06-nakamoto-consensus-and-blockchains.md) shows a system that chooses availability and open membership and pays for it with probabilistic rather than certain agreement.
- **Sideways:** [`databases` 4.6](../../databases/lessons/04-06-nosql-and-distributed-data.md) owns the practitioner's framing, the NoSQL families and the BASE vocabulary, and its worked seat-booking example is this lesson's theorem in a business setting. The $R+W>N$ arithmetic it teaches is the same intersection condition, with the "P is not a choice" slogan stated there and proved here.
