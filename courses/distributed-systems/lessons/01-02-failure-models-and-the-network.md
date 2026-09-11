# Distributed Systems · Lesson 1.2: Failure models

> ⏱ ~15 min · Module 1: Models, Time, and Global State · Builds on: [1.1 (why it's hard)](01-01-why-distributed-systems-are-hard.md) · Unlocks: [1.3 (RPC and delivery semantics)](01-03-rpc-and-delivery-semantics.md), [3.2 (failure detectors)](03-02-failure-detectors-and-escaping-flp.md)

## Why this matters

"Fault-tolerant" is not a property. It is a property *relative to a set of faults you named in advance*, and a system that tolerates crashes may be destroyed by a node that answers slowly, or by one that answers wrongly.

So the first question about any protocol is never "is it fault-tolerant" but **"which faults, and how many?"** — and the answers turn out to be quantitative. Tolerating $f$ crashes needs $2f+1$ replicas; tolerating $f$ liars needs $3f+1$. Those numbers come from the failure model, and picking the wrong model means building the wrong number of machines.

## The idea

Line the models up from strongest assumption to weakest. **Strongest** means you are assuming the most about how nodes misbehave, which means the *fewest* behaviours are permitted, which makes your job easiest.

A **crash-stop** node executes its algorithm correctly and then, at some moment, stops forever. That's it. Everything it sent before the crash was correct; nothing comes after. This is the friendliest possible failure and it is what most of Module 3 assumes.

A **crash-recovery** node stops and then *comes back*, holding whatever it managed to write to stable storage and having lost everything else. This sounds like a small change and it is not: the restarted node has amnesia about its recent past, and an algorithm that assumed "once a node is gone, it is gone" can now be attacked by its own participant returning with stale beliefs.

An **omission** fault is a node that runs correctly but silently drops some messages — a full send buffer, an overloaded receiver. It looks alive, answers some requests, and loses others. The reason this is worse than crashing is that **a crash is honest**: it withdraws the node from every interaction at once, while omission leaves it participating in some and not others.

A **Byzantine** node may do literally anything: send contradictory values to different peers, forge messages, stay silent, or run a completely different algorithm. Not necessarily malicious — a corrupted memory cell or a buggy version deployed to one machine produces arbitrary behaviour just as effectively as an adversary.

Two things make this a **lattice** rather than a list. Each model **contains** the ones below it — every crash is a special case of omission (a node that omits everything from some point on), and every omission is a special case of arbitrary behaviour. And going up the lattice is **monotonically more expensive**: a protocol proved correct under Byzantine faults is correct under crashes, and a protocol proved only under crashes is worth nothing if a node lies once.

## The formal version

> **Crash-stop.** A correct process executes its algorithm forever. A faulty process executes correctly up to some step and takes no step afterwards. Nothing distinguishes a crashed process from a very slow one ([1.1](01-01-why-distributed-systems-are-hard.md)).

> **Crash-recovery.** A faulty process may crash and restart any number of times, retaining only the state it wrote to **stable storage** before crashing. A process that crashes infinitely often without stabilising is treated as faulty forever.

In words: the recovered node is *not* a fresh node. It carries a partial, possibly stale memory, and protocols must write down enough before acting to make the recovered state usable — this is exactly the role of the coordinator log in [4.1](04-01-distributed-transactions-and-2pc.md) and the persistent term and vote in [3.4](03-04-raft.md).

> **Omission.** A faulty process fails to send some messages it should send (*send omission*) or fails to receive some sent to it (*receive omission*). Otherwise it behaves correctly.

> **Byzantine (arbitrary).** A faulty process may deviate from its algorithm in any way, including sending different values to different processes in the same round.

> **Fail-stop.** Crash-stop **plus a perfect failure detector**: when a process crashes, every correct process is reliably informed, and no correct process is ever wrongly suspected.

In words: fail-stop is crash-stop with the hard part deleted. It is a legitimate model only in a synchronous system, where [1.1](01-01-why-distributed-systems-are-hard.md)'s $2d+p$ timeout is a proof — and it is worth naming precisely because so many informal designs assume it without saying so.

**The replica counts.** For the agreement problems of Module 3, tolerating $f$ faulty nodes needs

$$n \ge 2f + 1 \quad \text{(crash, crash-recovery, omission)}, \qquad n \ge 3f + 1 \quad \text{(Byzantine)}.$$

Both come from the same argument — two quorums must intersect in a node you can trust — and [2.6](02-06-quorum-systems.md) and [4.5](04-05-byzantine-fault-tolerance.md) derive them properly. Carry them for now as the price list.

**The network fails too, and it does not fail like a node.** A **partition** splits the nodes into groups that cannot talk across the divide but function perfectly within it. Each side sees the other as crashed, and **both are wrong** — the other side is running, serving clients, and accepting writes. This is the failure that CAP ([3.5](03-05-the-cap-theorem-and-pacelc.md)) is about, and it is why "assume crash-stop" is not as safe as it sounds: a partition makes a group of perfectly healthy nodes *look* crashed to everyone else while continuing to act.

Worse and more common than either is **gray failure**: a link that drops 5 percent of packets, a node whose disk has slowed by 50x, a machine that answers health checks promptly and real requests not at all. It is alive by every test you are running and useless for the work you need. Gray failures are the dominant cause of real outages precisely because they sit outside the model everyone designed against.

## Picture

![A stack of five boxes ordered from crash-stop at the bottom through crash-recovery, omission and timing to Byzantine at the top, with arrows pointing upward to show containment. Each box carries a one-line description of the behaviour it admits, and the right-hand column gives the number of replicas needed to tolerate f faults: 2f+1 for every model up to timing, and 3f+1 for Byzantine.](assets/01-02-fig1.svg)

The arrows point the way containment goes: anything a crash-stop node can do, a Byzantine node can do too. **Read the diagram downward when designing** — pick the lowest box you can actually defend, because every step up costs replicas, messages and latency.

## Worked examples

**Example 1 — classifying four real incidents.**

**(a) A server's power supply fails and it is replaced an hour later.** Crash-stop, if the algorithm never expects it back; **crash-recovery** if it rejoins holding its old disk. The distinction is not about the hardware — it is about whether your protocol allows the node to return, and what it is allowed to believe when it does.

**(b) A switch misconfiguration cuts a rack off from the rest of the cluster for nine minutes.** A **partition**, not a crash. The nine nodes in the rack are healthy, their clients inside the rack are being served, and their writes are accumulating. To the other side they look exactly like nine simultaneous crashes, and treating them that way — electing a new leader and continuing — is how you get two leaders and a split brain ([2.5](02-05-replication-strategies.md)).

**(c) A node's NIC driver silently drops inbound packets above a certain rate under load.** **Receive omission**, and the nastiest kind: it is fine under test load and fails under production load, so it will pass every pre-deployment check.

**(d) A bad deploy reaches one of five replicas, and it starts returning results computed with an off-by-one in the aggregation.** **Byzantine**, and the example is worth dwelling on because nobody was malicious. The node is up, responsive, and confidently wrong — which is exactly the behaviour the Byzantine model was invented to describe. Most practical Byzantine faults are bugs and bit-flips, not adversaries.

**Example 2 — what crash-recovery breaks that crash-stop did not.**

A three-node cluster elects a leader by majority vote, and each node promises to vote for at most one candidate per election. Node A collects votes from A and B, becomes leader, and starts accepting writes.

Now **B crashes and recovers** — and its vote was in memory only.

On restart B has no record of having voted. Node C, which never heard from A, starts a new election and asks B for a vote. B, believing it has not voted, grants it. C now has votes from B and C: a majority. **There are two leaders, each holding a majority, each accepting conflicting writes.**

Nothing failed except the assumption. Under crash-stop the argument was airtight: B voted once, so at most one candidate could reach a majority. Crash-recovery deleted the word "once".

**The fix is one line and it is the reason Raft has the field it has:** a node must write its current term and its vote to **stable storage before replying**, and read them back on restart. Then B's recovered self remembers, refuses C, and the majority argument holds again. This is exactly the `currentTerm` and `votedFor` persistence in [3.4](03-04-raft.md), and the pattern generalises: **anything your safety argument says a node "has already done" must have been made durable before the node acted on it.**

## Watch out

- **You might think a stronger failure model is a safer choice.** It is the opposite. "Byzantine" is the *weakest* assumption about node behaviour and therefore the safest to design against, and "fail-stop" is the strongest and most dangerous — assuming fail-stop in an asynchronous system is assuming a perfect failure detector you cannot build.
- **You might think a partition is a bunch of simultaneous crashes.** Crashed nodes stop doing things. Partitioned nodes keep serving clients, keep accepting writes, and keep believing they are the healthy majority. A protocol that treats the two identically will let both sides act, which is the single most common way distributed systems lose data.
- **You might think Byzantine faults require an adversary.** A corrupted RAM cell, a partial deploy, a driver truncating a buffer, or a disk returning a stale block all produce arbitrary behaviour. The reason most systems still assume crash faults is cost, not the absence of liars — and it is a conscious bet, not a fact.

## One-liner

> A failure model is a promise about how badly a node is allowed to behave, and every protocol is only as correct as that promise — which is why "how many faults, of what kind?" is a question with a number as its answer, and "is it fault-tolerant?" is not a question at all.

## Problems

**P1 (🟢)** Classify each of the following in the lattice, naming the model **and** the feature of the description that forces that classification.

(a) A node returns the correct value for every request but takes 40 seconds to do it, in a system whose timeout is 2 seconds.
(b) A node writes its state to disk, is power-cycled, and rejoins the cluster with the state as of its last flush.
(c) A node sends `commit` to two peers and `abort` to a third, in the same round of the same protocol.
(d) A load balancer's health check passes while every real request to the node returns a 500 error.

**P2 (🟡)** A service is designed to tolerate $f$ simultaneous faults.

(a) Give the minimum node count for $f = 2$ under crash faults, and under Byzantine faults.
(b) A cluster has 7 nodes. Give the largest $f$ it tolerates under each model.
(c) A team runs 4 nodes and claims it tolerates one Byzantine fault. State whether the claim holds, and give the largest node count for which the same claim would be false.
(d) The same team argues that since Byzantine faults are rare, 4 nodes "tolerate one fault in practice". State precisely what their 4-node cluster does tolerate, and what it does not.

**P3 (🔴, optional)** A two-node primary-backup pair uses this failover rule: *if the backup does not hear a heartbeat from the primary for 5 seconds, the backup promotes itself to primary and begins accepting writes.*

(a) Give a crash-stop execution in which this rule behaves correctly, as an ordered list of steps.
(b) Give a **network-partition** execution in which the same rule produces two primaries, as an ordered list of steps, and state the resulting damage to the data.
(c) State why no choice of the 5-second timeout — larger or smaller — eliminates the problem in (b).
(d) Give a change to the system that does eliminate it, and state what the change costs when only one node is up.

<details>
<summary>Solutions</summary>

**P1**

(a) **Timing fault.** The node's *values* are correct, so this is not omission or Byzantine; what it violates is the timing bound the system assumed. Note the trap: from the caller's side, past the 2-second timeout, this is indistinguishable from a crash — which is the whole content of [1.1](01-01-why-distributed-systems-are-hard.md).

(b) **Crash-recovery.** The forcing feature is "rejoins with the state as of its last flush": the node comes back, and it comes back with *partial* memory. Under crash-stop it would simply never return.

(c) **Byzantine.** The forcing feature is **sending different values to different peers in the same round**. No crash, omission or timing fault can do this — each of those either sends the right message or sends nothing. Contradictory statements to different audiences is the signature Byzantine behaviour, and it is why the $3f+1$ bound is larger than $2f+1$.

(d) **Omission**, specifically send omission on the real request path, with the additional practical name **gray failure**. The forcing feature is that the node is selectively serving: healthy on one class of message, failing on another. This is why health checks should exercise the real path rather than a separate endpoint.

**P2**

(a) Crash: $n \ge 2f+1 = 2(2)+1 = \mathbf{5}$. Byzantine: $n \ge 3f+1 = 3(2)+1 = \mathbf{7}$.

(b) With $n = 7$: crash faults need $7 \ge 2f+1$, so $f \le 3$, giving $\mathbf{f = 3}$. Byzantine faults need $7 \ge 3f+1$, so $f \le 2$, giving $\mathbf{f = 2}$.

(c) **The claim holds, exactly.** One Byzantine fault requires $n \ge 3(1)+1 = 4$, and 4 sits precisely on the bound. The largest node count for which the claim would be false is **3** — a 3-node cluster cannot tolerate even one Byzantine fault, which is the classic Byzantine-generals result.

This part is a trap for pattern-matching: "4 nodes, Byzantine" reads like it should be too few, and it is not. Do the arithmetic — $3f+1$ at $f = 1$ is 4, not 5.

(d) Their 4-node cluster tolerates **one Byzantine fault** (from (c)) and, under the crash model, $f \le 1$ since $4 \ge 2f+1$ gives $f \le 1.5$.

What it does **not** tolerate is **two faults of any kind** — and the practical warning is that 4 is an even number, so a crash-tolerant majority is 3 of 4, meaning the cluster survives one crash but pays for a fourth machine that buys nothing over three. **Even-sized clusters are the standard waste**: 4 tolerates the same single crash as 3, and 6 the same two as 5.

**P3**

*Accept criterion for (a) and (b): any ordered step list in which (a) the primary genuinely stops before the backup promotes, and (b) both nodes are alive and each believes the other is dead. The exact timings do not matter; the indistinguishability does.*

(a) A correct crash-stop execution:

1. Primary P serves writes; backup B receives heartbeats every 1 s.
2. P's power supply fails at $t = 0$. P takes no further steps, ever.
3. B receives no heartbeat during $[0, 5]$.
4. At $t = 5$ B promotes itself and begins accepting writes.
5. Clients fail over to B. **One primary exists throughout.**

(b) A partition execution producing two primaries:

1. Primary P serves writes; backup B receives heartbeats.
2. At $t = 0$ the link between P and B fails. **Both nodes remain up.** Clients in P's network segment still reach P; clients in B's segment still reach B.
3. During $[0,5]$, P continues accepting writes and continues *sending* heartbeats, which are dropped by the broken link.
4. At $t = 5$, B has heard nothing, applies the rule, and promotes itself.
5. Both P and B now accept writes. A client writes `x = 1` to P; another writes `x = 2` to B.

**The damage:** the two nodes' histories diverge with conflicting values for the same keys, and when the link heals there is no information anywhere in the system saying which write should win. Whichever reconciliation you choose, **acknowledged writes are lost** — the system told both clients their write succeeded, and one of them was a lie. This is split brain.

(c) The timeout is a guess at the answer to a question the network cannot answer ([1.1](01-01-why-distributed-systems-are-hard.md)): "is P dead, or merely unreachable?" A **shorter** timeout makes B promote sooner, so split brain starts earlier and happens more often. A **longer** timeout makes B wait longer, so genuine crashes go unserved for longer — but a partition lasting longer than the timeout still produces two primaries.

**Tuning trades availability against the frequency of the bug; it never removes it,** because no value of the timeout distinguishes the two worlds.

(d) **Require a majority to promote.** Add a third node (or a witness/arbiter that votes but stores no data) and let a node become primary only with votes from a strict majority. In a partition at most one side holds a majority, so at most one primary exists — the two-leader execution in (b) becomes impossible.

**What it costs:** when only one node of three is up, that node cannot form a majority and **refuses to serve**, even though it is perfectly healthy and holds all the data. The system has chosen unavailability over inconsistency, which is precisely the choice [3.5](03-05-the-cap-theorem-and-pacelc.md) shows is forced.

A complementary mechanism worth knowing: **fencing**. Have each promotion carry a monotonically increasing token, and make the shared resource (a storage volume, a lock service) reject any request carrying a token lower than the highest it has seen. Then even if a deposed primary wakes up and tries to write, its stale token is refused at the resource rather than at the node — [2.5](02-05-replication-strategies.md) builds this properly.

</details>

## Connections

- **Forward:** the crash-recovery model and its stable-storage requirement reappear as durable state in [3.4](03-04-raft.md) and as the coordinator log in [4.1](04-01-distributed-transactions-and-2pc.md); the Byzantine model gets its own treatment and its $3f+1$ proof in [4.5](04-05-byzantine-fault-tolerance.md).
- **Forward:** "no perfect failure detector in an asynchronous system" is the gap [3.2](03-02-failure-detectors-and-escaping-flp.md) formalises, turning the informal timeout of [1.1](01-01-why-distributed-systems-are-hard.md) into a named abstraction with completeness and accuracy properties.
- **Backward:** the crash-recovery discipline is the same idea as [`operating-systems` 4.3](../../operating-systems/lessons/04-03-crash-consistency-and-journaling.md)'s write-ahead rule, one level up: write your intention durably before you act on it, so that the version of you that wakes up after the crash can be trusted.
- **Sideways:** the lattice is an ordering by *permissiveness* — the same move as weakening an assumption in a theorem. A protocol proved under Byzantine faults is the stronger theorem, and like any stronger theorem it costs more to prove and more to satisfy.
