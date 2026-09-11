# Distributed Systems · Lesson 4.5: Byzantine fault tolerance

> ⏱ ~15 min · Module 4: Fault Tolerance and Distributed Data · Builds on: [1.2 (failure models)](01-02-failure-models-and-the-network.md), [2.6 (quorum systems)](02-06-quorum-systems.md), [3.3 (Paxos)](03-03-paxos.md) · Unlocks: [4.6 (Nakamoto consensus)](04-06-nakamoto-consensus-and-blockchains.md)

## Why this matters

Every protocol so far assumed a failed node **stops**. [1.2](01-02-failure-models-and-the-network.md) put a weaker assumption at the top of the lattice and deferred it: a Byzantine node may do anything, including send contradictory messages to different peers.

Two reasons to take it seriously, and the first is not adversaries. A bad deploy reaching one replica, a corrupted memory cell, a disk returning a stale block, a driver truncating a buffer — each produces a node that is up, responsive and confidently wrong. That is Byzantine behaviour with nobody to blame. The second reason is that open systems, where anyone may join, have no way to assume good behaviour at all, which is where [4.6](04-06-nakamoto-consensus-and-blockchains.md) picks up.

The headline number is that tolerating $f$ liars needs $3f+1$ nodes rather than $2f+1$. That extra $f$ is worth understanding rather than memorising, because the derivation is two lines and it explains exactly what the extra nodes are for.

## The idea

Start with the smallest interesting case: three nodes, one of them a liar.

A commander orders an attack or a retreat, and two lieutenants must agree: both attack or both retreat, and if the commander is loyal they must obey the order given.

**World A: the commander lies.** It tells L1 "attack" and L2 "retreat". The lieutenants compare notes, and L1 hears from L2 that the commander said retreat.

**World B: L2 lies.** The commander is loyal and tells both "attack". L2 reports to L1 that the commander said retreat.

**L1's observations are identical in both worlds**: attack from the commander, retreat reported by L2. So L1 must act the same way in both. In world B the commander is loyal and said attack, so validity demands L1 attack — and therefore L1 attacks in world A too. The mirror argument, with L1 as the liar, forces L2 to retreat in world A. **Two loyal nodes, opposite decisions, agreement broken.**

Three nodes cannot tolerate one liar, and scaling the argument gives $n \ge 3f+1$ in general.

The counting derivation says the same thing more usefully. A quorum must be assemblable while $f$ nodes are silent, so a quorum has at most $n - f$ nodes. Two quorums must overlap in **more than $f$** nodes — anything less could be entirely liars, and then the "shared memory" that [2.6](02-06-quorum-systems.md) relied on is worthless. So

$$2(n-f) - n > f \iff n > 3f.$$

**That is the whole result.** The first $f$ extra nodes let you proceed while $f$ are unreachable, which crash-tolerant systems also need. The *second* $f$ is new: it guarantees that the intersection of two quorums contains at least one **honest** node, not merely one node.

## The formal version

> **Byzantine Generals** (Lamport, Shostak, Pease, 1982). A commander sends an order to $n-1$ lieutenants. Required: **(IC1)** all loyal lieutenants decide the same value; **(IC2)** if the commander is loyal, every loyal lieutenant decides the commander's value.

> **Impossibility for $n \le 3f$.** With oral (unauthenticated) messages, no algorithm satisfies IC1 and IC2 when $f \ge n/3$.

The three-node case above is the base; the general result follows by a simulation argument — if an $n \le 3f$ algorithm existed, three super-nodes each simulating $n/3$ processes would solve the three-node case.

> **Byzantine quorum.** With $n = 3f+1$, a quorum has $2f+1$ nodes. Two quorums share at least $2(2f+1) - (3f+1) = f+1$ nodes, so **at least one is honest.**

That single honest node in every intersection is what makes the safety argument of [3.3](03-03-paxos.md) survive liars: a value certified by one quorum cannot be contradicted by another, because some honest node is in both and honest nodes do not contradict themselves.

> **PBFT** (Castro and Liskov, 1999), a three-phase sketch:
>
> 1. **Pre-prepare.** The primary assigns a sequence number and broadcasts the request.
> 2. **Prepare.** Every replica broadcasts a `PREPARE`. A replica is *prepared* on collecting $2f$ matching prepares plus the pre-prepare — evidence that $2f+1$ nodes agree on this sequence number.
> 3. **Commit.** Every prepared replica broadcasts `COMMIT`, and executes on collecting $2f+1$ matching commits.
>
> A faulty primary is replaced by a **view change**, triggered when replicas time out.

**Why three phases and not two.** The prepare phase establishes that $2f+1$ nodes agree *within the current view*. The commit phase establishes that this agreement **survives a view change** — without it, a new primary could assign a different request to the same sequence number, since it might see only prepares that never became a quorum.

**Cost.** The prepare and commit phases are all-to-all, so message complexity is $O(n^2)$ per request:

| $n$ | $f$ | prepare + commit messages |
|---|---|---|
| 4 | 1 | 24 |
| 7 | 2 | 84 |
| 10 | 3 | 180 |

Against Raft's $O(n)$ per entry, this is the reason BFT protocols are used for small, high-value groups and not for general-purpose clusters.

> **Signatures change the synchronous bound, not the asynchronous one.** With digital signatures in a **synchronous** system, Byzantine broadcast is achievable for any $n > f$ — a lie is detectable, because a node cannot forge the commander's signature.
>
> In an **asynchronous or partially synchronous** system, $n \ge 3f+1$ is still required, and signatures do not help.

This distinction is constantly muddled and is worth being exact about. The asynchronous bound does not come from being unable to detect lies; it comes from **being unable to wait for everyone** ([1.1](01-01-why-distributed-systems-are-hard.md)). A quorum must be formable from $n - f$ nodes, and two such quorums must share an honest node — an argument in which authentication plays no part. **Signatures let you catch a liar; they do not let you hear from a node that is not answering.**

## Picture

![Two side-by-side scenarios with a commander and two lieutenants L1 and L2. In world A the commander lies, sending attack to L1 and retreat to L2, and L2 honestly reports to L1 that the commander said retreat. In world B the commander is loyal and sends attack to both, and L2 lies to L1 that the commander said retreat. A box under each panel records that L1 sees exactly the same thing in both: attack from the commander and retreat from L2. Text concludes that validity in world B forces L1 to attack, so it attacks in world A too, while the mirror argument forces L2 to retreat there, breaking agreement.](assets/04-05-fig1.svg)

The two boxes at the bottom are the argument. **They contain the same text**, which is the definition of indistinguishability, and once two worlds requiring opposite behaviour produce identical observations, no algorithm can separate them — the same proof device as [1.1](01-01-why-distributed-systems-are-hard.md), [3.1](03-01-the-consensus-problem-and-flp.md) and [3.5](03-05-the-cap-theorem-and-pacelc.md).

## Worked examples

**Example 1 — sizing a Byzantine cluster, and where the extra nodes go.**

A consortium of banks runs a shared ledger and wants to tolerate **two** members being compromised or running a buggy build.

$$n \ge 3f+1 = 3(2) + 1 = \mathbf{7 \text{ nodes}}.$$

Quorum size $2f+1 = \mathbf{5}$. Check the intersection: two quorums of 5 from 7 share at least $2(5) - 7 = 3$ nodes, of which at most 2 are faulty, so **at least one honest node is in every intersection** ✓.

**Where each group of $f$ goes.** With 7 nodes and $f = 2$: **2 nodes may be unreachable** and the remaining 5 still form a quorum — that is the availability budget, the same one a crash-tolerant system needs. **2 more cover the liars inside the intersection** — a quorum of 5 may contain up to 2 liars, and the intersection of 3 may contain up to 2, leaving 1 honest.

Compare a crash-tolerant system at the same $f$: $2f+1 = 5$ nodes, quorum 3. **Byzantine tolerance costs two extra machines and raises the quorum from 3 to 5**, which raises latency (waiting for 5 of 7 rather than 3 of 5) as well as hardware.

**The comparison that decides deployments.** At $n = 7$ a Raft cluster tolerates $f = 3$ crashes; a PBFT cluster tolerates $f = 2$ liars. So the same hardware buys either more crash tolerance or some Byzantine tolerance, never both — and PBFT additionally pays $O(n^2)$ messages per request against Raft's $O(n)$: 84 against 12 at $n = 7$, a factor of seven in network cost for every operation.

**Example 2 — a Byzantine fault with nobody to blame.**

Five replicas of a pricing service run a crash-tolerant consensus protocol. A deploy reaches replica 3 only, and its build has an off-by-one in a rounding step, so it computes prices 1 cent low.

**What the consensus layer does: nothing.** It is doing its job perfectly. The log is identical on all five replicas — it agreed on the *inputs*, which is all it ever promised. Replica 3's divergence is downstream of everything the protocol checks, exactly as in [3.6](03-06-state-machine-replication.md)'s determinism bugs.

**What clients see.** Any request routed to replica 3 returns a price a penny off. Reads are inconsistent between replicas with no error anywhere, and the first report arrives from a customer.

**Why a crash-tolerant protocol cannot help.** Its safety argument assumes that a node which replies, replies correctly. Replica 3 replies, promptly, with a wrong answer, and nothing in the protocol compares answers — quorum intersection guarantees a *shared node*, and a shared node that lies is worth nothing.

**What a Byzantine protocol would do.** A client waits for $f+1 = 2$ matching replies before accepting a result. Replica 3's answer differs from the other four, so it never accumulates a matching pair and is discarded. **The client detects the fault rather than consuming it**, and the deviation is loud rather than silent.

**And the cheap defence for everyone else.** Full BFT is expensive, and most of its benefit here comes from one cheap idea: **have replicas periodically hash their state at an agreed log index and compare.** That turns a silent divergence into an alert without changing the protocol, and it is the single highest-value addition to a crash-tolerant replicated system. Full BFT is worth it when the nodes are run by *different organisations* with no shared incentive to be correct; within one organisation, state hashing plus good deployment hygiene catches nearly everything for nearly nothing.

## Watch out

- **You might think Byzantine faults require an adversary.** Most real ones are bugs, bit-flips and partial deploys. The model is defined by the *behaviour* — arbitrary output from a responsive node — and says nothing about intent.
- **You might think digital signatures reduce the $3f+1$ bound.** They reduce it in a **synchronous** system, where Byzantine broadcast becomes possible for any $n > f$. In an asynchronous or partially synchronous system the bound stands, because it comes from having to form a quorum without hearing from $f$ nodes, which authentication does nothing about.
- **You might think $3f+1$ is about outvoting the liars.** It is about the **intersection** of two quorums containing an honest node. That is why the requirement is $2q - n > f$ rather than "more honest nodes than liars", and it is why the answer is $3f+1$ and not $2f+1$.

## One-liner

> A crash-tolerant quorum needs two quorums to share a node; a Byzantine one needs them to share an **honest** node, and paying for that second guarantee — a quorum formable without $f$ silent nodes, overlapping in more than $f$ — is exactly what turns $2f+1$ into $3f+1$.

## Problems

**P1 (🟢)** A consortium wants Byzantine fault tolerance.

(a) Give the minimum node count for $f = 1$, $f = 3$ and $f = 4$.
(b) Give the quorum size in each case, and verify the intersection contains an honest node for $f = 3$.
(c) A 12-node cluster is deployed. Give the largest $f$ it tolerates, and state how many nodes are wasted relative to the tight bound.
(d) State how many **crash** faults the same 12 nodes would tolerate, and the one clause explaining the difference.

**P2 (🟡)** A PBFT deployment has $n = 10$.

(a) Give $f$, the quorum size, and the size of the intersection of two quorums.
(b) Give the number of honest nodes guaranteed in that intersection, with the arithmetic.
(c) Give the message count for the prepare and commit phases of one request.
(d) Compare with a Raft cluster of the same size, on both fault tolerance and messages per operation.

**P3 (🔴, optional)** A team runs a 4-node PBFT cluster and is asked whether the protocol is still needed now that all nodes are in one data centre under one administrator.

(a) State the largest $f$ the cluster tolerates, and whether it is on the tight bound.
(b) Give two concrete non-adversarial faults that PBFT would catch and a crash-tolerant protocol would not.
(c) The team proposes switching to Raft with 5 nodes, arguing it tolerates more faults. State what it gains and what it loses, with the numbers.
(d) Give the cheap mechanism that recovers most of the lost detection under Raft, and state precisely what it does and does not catch.

<details>
<summary>Solutions</summary>

**P1**

(a) $n \ge 3f+1$:

| $f$ | minimum $n$ |
|---|---|
| 1 | **4** |
| 3 | **10** |
| 4 | **13** |

(b) Quorum $= 2f+1$: **3**, **7** and **9** respectively.

Verifying the intersection at $f = 3$, $n = 10$: two quorums of 7 share at least $2(7) - 10 = 4$ nodes. At most 3 of those are faulty, leaving **at least 1 honest node** ✓.

(c) $12 \ge 3f+1$ gives $f \le 11/3 = 3.67$, so $\mathbf{f = 3}$. The tight bound for $f = 3$ is 10 nodes, so **2 nodes are wasted** — they raise the quorum from 7 to 9, adding latency and message cost, and buy no additional fault tolerance.

This is the same even-size waste as [1.2](01-02-failure-models-and-the-network.md)'s crash-tolerant clusters, and it is why BFT deployments are sized 4, 7, 10, 13.

(d) Crash faults need $n \ge 2f+1$, so $12 \ge 2f+1$ gives $\mathbf{f = 5}$.

**The difference is that a crash-tolerant quorum only needs to share *a* node, while a Byzantine quorum must share an *honest* node** — requiring the overlap to exceed $f$ rather than merely be non-empty.

**P2**

(a) $10 \ge 3f+1$ gives $f = 3$. Quorum $= 2f+1 = \mathbf{7}$. Two quorums of 7 from 10 intersect in at least $2(7) - 10 = \mathbf{4}$ nodes.

(b) At most $f = 3$ of the 4 shared nodes are faulty, so at least $4 - 3 = \mathbf{1}$ is honest.

The general form, worth carrying: $2(2f+1) - (3f+1) = f+1$ shared nodes, minus at most $f$ liars, leaves **exactly one guaranteed honest node** at the tight bound — the margin is one node and no more, which is why the bound is tight.

(c) Prepare and commit are both all-to-all among 10 nodes: $10 \times 9 = 90$ each, so $\mathbf{180 \text{ messages}}$ per request, plus 9 pre-prepare messages and 9 client replies.

(d) A 10-node **Raft** cluster tolerates $10 \ge 2f+1$, so $f = 4$ crashes, using $O(n)$ messages — the leader sends 9 `AppendEntries` and receives 9 acknowledgements, **18 messages** per entry.

| | PBFT, $n=10$ | Raft, $n=10$ |
|---|---|---|
| fault tolerance | 3 **Byzantine** | 4 **crash** |
| messages per operation | 180 | 18 |

**Ten times the messages, for a different kind of fault and one fewer of them.** The trade is only worth making when you genuinely cannot assume nodes are correct — which is a statement about who operates them, not about how reliable the hardware is.

**P3**

(a) $4 \ge 3f+1$ gives $\mathbf{f = 1}$, and 4 is **exactly** the tight bound $3(1)+1$. The cluster is optimally sized for one Byzantine fault and has no slack: a second faulty node breaks it.

(b) Two non-adversarial faults PBFT catches:

1. **A partial deploy.** One replica runs a build with a behavioural change — a rounding difference, a changed default, a fixed-but-differently bug — and returns answers that differ from the other three. A client waiting for $f+1 = 2$ matching replies discards it; a crash-tolerant protocol accepts whichever replica answered.
2. **Silent data corruption.** A bit-flip in memory or a disk returning a stale block makes one replica's state machine diverge. The replica is responsive and confident, which is the definition of Byzantine, and a crash-tolerant protocol has no mechanism that would notice.

In both cases the consensus layer of a crash-tolerant system is functioning perfectly — the *logs* agree — and the divergence is in the state machine, downstream of everything the protocol checks.

(c) **Gains:** crash tolerance rises from 1 to $f = 2$ at $n = 5$, and messages per operation fall from 24 to 8 — a threefold reduction, with correspondingly lower latency since a quorum of 3 is faster to assemble than one of 3 out of 4 with two all-to-all rounds.

**Loses:** all Byzantine detection. Both faults in (b) become silent, and the failure mode changes from "a replica's answers are rejected" to "a replica's wrong answers are served to clients". It also loses detection of a *compromised* node, which matters if the threat model ever includes one.

(d) **Periodic state hashing.** At an agreed log index — say every 100,000 entries — each replica hashes its entire state machine and reports the digest to the leader, which compares them and alerts on any mismatch.

**What it catches:** any divergence in the *replicated state*, from whatever cause — a partial deploy, a bit-flip, a determinism bug, a corrupted disk. It catches them cheaply (one hash per replica per interval) and, importantly, it catches them *at all*, which is the whole gap.

**What it does not catch:** anything where the divergence is not in the hashed state. A replica returning wrong answers to clients while holding correct state — a bug in the read path rather than the apply path — passes the hash check. Nor does it catch divergence *between* hash points, so detection is delayed by up to one interval. And it detects rather than tolerates: it tells you a replica is wrong, it does not let the cluster keep serving correct answers through the fault, which is what PBFT actually provides.

**The honest summary for the team:** inside one organisation, Raft plus state hashing catches nearly everything PBFT would, far more cheaply, at the cost of detection latency and the loss of *tolerance* as opposed to *detection*. Across organisations with no shared incentive to be correct, that argument fails and PBFT earns its cost.

</details>

## Flashback

**From Lesson 4.4 (consistent hashing and DHTs):** A 24-node ring holds 1.2 TB, using 256 virtual nodes per physical node. A 25th node joins.

(a) Give the expected fraction and volume of data that moves.
(b) Give the same figures if the cluster used `hash mod N` instead.
(c) State what the 256 virtual nodes buy, in one clause each for load and for failure.

<details>
<summary>Solution</summary>

(a) $\frac{1}{N+1} = \frac{1}{25} = \mathbf{4\%}$, which is $0.04 \times 1.2 = \mathbf{48 \text{ GB}}$.

(b) $\frac{N}{N+1} = \frac{24}{25} = \mathbf{96\%}$, which is $\mathbf{1.152 \text{ TB}}$ — a factor of 24 more, and the same bill again for the next node added or lost.

(c) **For load:** each physical node's share is the sum of 256 independent arc lengths rather than one, so the relative spread shrinks by about $\sqrt{256} = 16$ and the max-to-min imbalance falls from roughly an order of magnitude to a few percent.

**For failure:** a departing node's 256 arcs are inherited by up to 256 *different* successors, so the extra load is spread across the cluster rather than doubling one neighbour — which is what prevents a single failure from cascading into the next.

</details>

## Connections

- **Backward:** the $3f+1$ derivation is [2.6](02-06-quorum-systems.md)'s intersection condition with one clause added — the intersection must contain an honest node — and the impossibility proof is [1.1](01-01-why-distributed-systems-are-hard.md)'s indistinguishability applied to two worlds with different liars. The model itself is the top of [1.2](01-02-failure-models-and-the-network.md)'s lattice.
- **Forward:** [4.6](04-06-nakamoto-consensus-and-blockchains.md) faces Byzantine faults with **no membership list at all**, where the $3f+1$ bound cannot even be stated because $n$ is unknown and an adversary can manufacture identities — and answers with a completely different mechanism.
- **Sideways:** PBFT's three phases map onto [3.3](03-03-paxos.md)'s two with one added: pre-prepare and prepare are Paxos's phases, and the commit phase exists to make the agreement survive a view change, which Paxos gets for free because an honest proposer reports what it saw. **The extra phase and the extra $f$ nodes are both paying for the same thing: you can no longer believe what a node tells you about its own state.**
