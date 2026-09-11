# Distributed Systems · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

This course is about making many unreliable machines, connected by an unreliable network, behave like one correct one. The card holds what you would otherwise hunt for mid-problem: the system-model vocabulary, the consistency-model ladder with what each rung forbids, every fault-tolerance bound and where it comes from, the protocol traces for Paxos and Raft, the commit-protocol state rules, and the latency and message-count arithmetic that turns a design argument into one line of calculation.

## Scope and ownership

Four built courses touch this material. The split is deliberate, and both cards are worth having open together.

| Topic | Owned by | Note |
|---|---|---|
| The $R+W>N$ rule, sharding hash-vs-range, hot shards, practitioner CAP, BASE, the NoSQL families | [`databases` 4.6](../databases/lessons/04-06-nosql-and-distributed-data.md) | [2.6](lessons/02-06-quorum-systems.md) owns quorums as **intersecting set systems** — the $2W>N$ condition, grid quorums, load and availability, ABD; [3.5](lessons/03-05-the-cap-theorem-and-pacelc.md) owns the CAP **proof** and PACELC |
| ACID, serializability, precedence graphs, 2PL, isolation levels, WAL and ARIES | [`databases` 4.1](../databases/lessons/04-01-transactions-and-the-acid-properties.md)–[4.5](../databases/lessons/04-05-recovery-write-ahead-logging-and-aries.md) | [4.1](lessons/04-01-distributed-transactions-and-2pc.md) owns **atomic commit across machines**: uncertainty, the blocking theorem, the coordinator log |
| Cache coherence, shared-memory sequential consistency, fences, false sharing | [`computer-architecture` 5.3](../computer-architecture/lessons/05-03-multiprocessors-cache-coherence.md) | [2.1](lessons/02-01-linearizability.md)–[2.2](lessons/02-02-sequential-causal-and-session-consistency.md) own consistency models for **replicated objects over a network** |
| Reliable delivery over one link: sequence numbers, timeouts, duplicate detection, sliding windows | [`computer-networks` 2.2](../computer-networks/lessons/02-02-building-reliable-data-transfer.md) | [1.3](lessons/01-03-rpc-and-delivery-semantics.md) owns **RPC semantics under partial failure**; [1.7](lessons/01-07-ordered-broadcast-fifo-causal-total.md) owns broadcast ordering |
| Deadlock, the Coffman conditions, wait-for graphs | [`operating-systems` 2.5](../operating-systems/lessons/02-05-deadlock.md) | [4.1](lessons/04-01-distributed-transactions-and-2pc.md) owns **blocking**: a correct participant stuck because it cannot learn a decision |
| Crash consistency, journaling, idempotent replay | [`operating-systems` 4.3](../operating-systems/lessons/04-03-crash-consistency-and-journaling.md) | [1.2](lessons/01-02-failure-models-and-the-network.md) owns the crash-recovery **model**; [3.4](lessons/03-04-raft.md) and [4.1](lessons/04-01-distributed-transactions-and-2pc.md) own what must be durable before acting |
| Hash tables, Dijkstra, sorting, asymptotics | [`algorithms`](../algorithms/syllabus.md) | [4.4](lessons/04-04-consistent-hashing-and-dhts.md) owns consistent hashing, virtual nodes and Chord routing |
| Everything else here | **this course** | |

**Convention warnings**, because two of these cards may be open at once.

- **$N$, $R$, $W$ mean the same here as in `databases` 4.6** — replica count, read quorum, write quorum — but this course adds a **second** condition that lesson does not state: $2W > N$, for write-write ordering. A configuration satisfying only $R+W>N$ is not fully safe.
- **"Consistency" means linearizability** throughout Module 2 and in the CAP theorem. In `databases` it usually means the C of ACID, which is a different property entirely (integrity constraints preserved by a transaction). The two words are unrelated.
- **$f$ is the number of tolerated faults, never a failure probability.** Bounds are $n \ge 2f+1$ for crash faults and $n \ge 3f+1$ for Byzantine faults.
- **"Available" in CAP is stronger than the everyday sense**: *every* non-failing node answers. A system whose majority side serves while the minority refuses is not CAP-available, and is what almost everyone actually wants.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $d$, $p$, $\rho$ | bounds on message delay, processing time, clock drift rate | [1.1](lessons/01-01-why-distributed-systems-are-hard.md) |
| $f$ | the number of faulty nodes a protocol tolerates | [1.2](lessons/01-02-failure-models-and-the-network.md) |
| $n$ | the number of nodes in a protocol's group | [1.2](lessons/01-02-failure-models-and-the-network.md) |
| $\lambda$, $T$, $b$ | request rate, dedup retention window, bytes per dedup entry | [1.3](lessons/01-03-rpc-and-delivery-semantics.md) |
| $T_1, T_2, T_3, T_4$ | NTP's four timestamps: client send, server receive, server send, client receive | [1.4](lessons/01-04-physical-clocks-and-synchronization.md) |
| $\delta$, $\theta$ | NTP round-trip delay and estimated clock offset | [1.4](lessons/01-04-physical-clocks-and-synchronization.md) |
| $a \to b$ | $a$ happens-before $b$: $a$ could have influenced $b$ | [1.5](lessons/01-05-logical-time-lamport-and-vector-clocks.md) |
| $a \parallel b$ | $a$ and $b$ are concurrent: neither happens-before the other | [1.5](lessons/01-05-logical-time-lamport-and-vector-clocks.md) |
| $L(e)$, $V(e)$ | the Lamport timestamp and vector timestamp of event $e$ | [1.5](lessons/01-05-logical-time-lamport-and-vector-clocks.md) |
| $C = (c_1, \ldots, c_n)$ | a cut: one prefix of each process's event sequence | [1.6](lessons/01-06-consistent-cuts-and-global-snapshots.md) |
| $<_H$ | real-time order on a history: $a <_H b$ when $a$ returns before $b$ is invoked | [2.1](lessons/02-01-linearizability.md) |
| $W(v)[s,f]$, $R(v)[s,f]$ | a write of $v$, a read returning $v$, invoked at $s$ and returning at $f$ | [2.1](lessons/02-01-linearizability.md) |
| $\sqcup$ | join: the least upper bound in a semilattice, a CRDT's merge | [2.4](lessons/02-04-crdts-and-strong-eventual-consistency.md) |
| $N$, $R$, $W$ | replica count, read quorum size, write quorum size | [2.6](lessons/02-06-quorum-systems.md) |
| $\mathcal{Q}$, $\mathcal{R}$, $\mathcal{W}$ | a quorum system, and the read and write quorum families | [2.6](lessons/02-06-quorum-systems.md) |
| $P$, $S$, $\Diamond P$, $\Diamond S$ | failure-detector classes; $\Diamond$ means eventual accuracy | [3.2](lessons/03-02-failure-detectors-and-escaping-flp.md) |
| $\Omega$ | the eventual-leader failure detector | [3.2](lessons/03-02-failure-detectors-and-escaping-flp.md) |
| $n$ (Paxos) | a proposal number, totally ordered and unique per proposer | [3.3](lessons/03-03-paxos.md) |
| $L$, $\epsilon$ | leader lease duration and the clock-drift bound between replicas | [3.6](lessons/03-06-state-machine-replication.md) |
| $M$, $R$ (MapReduce) | the number of map tasks and of reduce tasks | [4.3](lessons/04-03-mapreduce-and-large-scale-processing.md) |
| $V$ | virtual nodes (tokens) per physical node on a hash ring | [4.4](lessons/04-04-consistent-hashing-and-dhts.md) |
| $q$, $z$ | an attacker's share of hash power, and confirmation depth in blocks | [4.6](lessons/04-06-nakamoto-consensus-and-blockchains.md) |

$n$ is overloaded: a node count throughout, and a Paxos proposal number in [3.3](lessons/03-03-paxos.md). $R$ is overloaded: a read quorum in [2.6](lessons/02-06-quorum-systems.md) and a reduce-task count in [4.3](lessons/04-03-mapreduce-and-large-scale-processing.md). Context separates them.

## Definitions

### Partial failure

Any subset of the machines can be down while the rest run, and the survivors cannot tell which.

This is the defining affliction. A single computer gives you all-or-nothing failure for free; a distributed system charges for it.

*Introduced:* [1.1](lessons/01-01-why-distributed-systems-are-hard.md)

### Synchronous model

Known bounds exist on message delay ($d$), processing time ($p$) and clock drift rate ($\rho$).

A timeout of $2d + p$ is then a **proof** of failure, and a perfect failure detector is buildable.

*Introduced:* [1.1](lessons/01-01-why-distributed-systems-are-hard.md)

### Asynchronous model

No bounds on anything: messages arrive eventually but arbitrarily late, processes may take arbitrarily long between steps, clocks are unusable.

No finite timeout is ever a proof. This is the model FLP and CAP are proved in.

*Introduced:* [1.1](lessons/01-01-why-distributed-systems-are-hard.md)

### Partially synchronous model

Bounds exist but are unknown, or hold only after an unknown **global stabilization time** (GST).

The honest model for a real data centre, and the assumption every working consensus protocol actually makes.

*Introduced:* [1.1](lessons/01-01-why-distributed-systems-are-hard.md)

### Indistinguishability

Two executions are indistinguishable to a process if it receives the same messages in the same order in both; it therefore behaves identically in both.

**The single most-used proof device in the course.** When a protocol claims to decide something, ask which two worlds it claims to tell apart, and check that it can.

*Used by:* [1.1](lessons/01-01-why-distributed-systems-are-hard.md), [3.1](lessons/03-01-the-consensus-problem-and-flp.md), [3.5](lessons/03-05-the-cap-theorem-and-pacelc.md), [4.1](lessons/04-01-distributed-transactions-and-2pc.md), [4.5](lessons/04-05-byzantine-fault-tolerance.md)

### Crash-stop

A faulty process executes correctly up to some step and then takes no step ever again.

The friendliest failure and what most of Module 3 assumes.

*Introduced:* [1.2](lessons/01-02-failure-models-and-the-network.md)

### Crash-recovery

A faulty process may crash and restart, retaining only what it wrote to stable storage.

The rule this forces: **anything your safety argument says a node "has already done" must be durable before the node acts on it.**

*Introduced:* [1.2](lessons/01-02-failure-models-and-the-network.md)

### Omission fault

A process runs correctly but silently drops some messages it should send (*send omission*) or receive (*receive omission*).

Worse than a crash, because a crash is honest: it withdraws the node from every interaction at once.

*Introduced:* [1.2](lessons/01-02-failure-models-and-the-network.md)

### Byzantine fault

A faulty process may deviate arbitrarily, including sending different values to different peers in the same round.

Most real instances are bugs, bit-flips and partial deploys rather than adversaries. The model is about behaviour, not intent.

*Introduced:* [1.2](lessons/01-02-failure-models-and-the-network.md); developed in [4.5](lessons/04-05-byzantine-fault-tolerance.md)

### Fail-stop

Crash-stop **plus a perfect failure detector**: every crash is reliably reported and no correct process is ever wrongly suspected.

Legitimate only in a synchronous system. Assuming it asynchronously is assuming something unbuildable.

*Introduced:* [1.2](lessons/01-02-failure-models-and-the-network.md)

### Network partition

The network splits into groups that function internally and cannot talk across the divide. Each side sees the other as crashed, and both are wrong.

**Not a bunch of simultaneous crashes:** partitioned nodes keep serving clients and accepting writes.

*Introduced:* [1.2](lessons/01-02-failure-models-and-the-network.md)

### Gray failure

A component that passes every health check and is useless for real work: a link dropping 5 percent of packets, a disk 50 times slower than spec.

The dominant cause of real outages, because it sits outside the model everyone designed against.

*Introduced:* [1.2](lessons/01-02-failure-models-and-the-network.md)

### At-most-once

Every request is executed zero or one times, achieved by never retrying. The caller is left not knowing which.

*Introduced:* [1.3](lessons/01-03-rpc-and-delivery-semantics.md)

### At-least-once

Every request is executed one or more times, achieved by retrying until a reply arrives. Safe only for idempotent operations.

*Introduced:* [1.3](lessons/01-03-rpc-and-delivery-semantics.md)

### Exactly-once

Every request has the **effect** of exactly one execution. Achieved as at-least-once delivery plus deduplicated, durable execution — never as a delivery guarantee on its own.

*Introduced:* [1.3](lessons/01-03-rpc-and-delivery-semantics.md)

### Idempotency

$f(f(s)) = f(s)$: running the operation twice leaves the same state as running it once.

A property of the *state*, not of the response. `DELETE` is idempotent even though the second call returns a different status code.

*Introduced:* [1.3](lessons/01-03-rpc-and-delivery-semantics.md)

### Two Generals

Over a channel that may lose messages, no finite protocol lets two parties reach common knowledge of a decision.

*Proof:* a shortest such protocol's last message may be lost, so the decision cannot depend on it; delete it and get a shorter one. Hence no last message is necessary, hence none is.

*Introduced:* [1.3](lessons/01-03-rpc-and-delivery-semantics.md)

### Clock skew and drift

**Skew** is how far apart two clocks read now. **Drift** is the rate at which the gap grows, bounded by $\rho$ per clock.

Skew is the problem; drift is why synchronizing once is useless.

*Introduced:* [1.4](lessons/01-04-physical-clocks-and-synchronization.md)

### Happens-before

The smallest relation with: program order within a process; send before its matching receive; and transitivity.

**In words:** "could have influenced". A partial order, and the partiality is the honest part.

*Introduced:* [1.5](lessons/01-05-logical-time-lamport-and-vector-clocks.md)

### Lamport clock

One integer per process. Increment on every event; stamp outgoing messages; on receipt take $\max(C, t) + 1$.

Satisfies $a \to b \implies L(a) < L(b)$. **The converse is false**, which is the thing to remember.

*Introduced:* [1.5](lessons/01-05-logical-time-lamport-and-vector-clocks.md)

### Vector clock

One integer per process, held by every process. Increment your own entry; send the whole vector; on receipt take the element-wise max, then increment your own.

Exact: $a \to b \iff V(a) < V(b)$, and incomparable vectors mean concurrent.

*Introduced:* [1.5](lessons/01-05-logical-time-lamport-and-vector-clocks.md)

### Concurrent events

$a \parallel b$: neither happens-before the other, so neither could have influenced the other.

**Not the same as simultaneous.** Concurrent events can be an hour apart in physical time.

*Introduced:* [1.5](lessons/01-05-logical-time-lamport-and-vector-clocks.md)

### Cut

A tuple of prefixes, one per process. Its event set is the union.

*Introduced:* [1.6](lessons/01-06-consistent-cuts-and-global-snapshots.md)

### Consistent cut

A cut closed under happens-before: if $e$ is in the cut and $f \to e$, then $f$ is in the cut.

**Visual test:** no message crosses the cut from right to left. A message crossing left to right is **in flight** and is part of the snapshot's channel state.

*Introduced:* [1.6](lessons/01-06-consistent-cuts-and-global-snapshots.md)

### Stable property

A predicate that, once true, stays true: termination, deadlock, a lost token.

A snapshot decides stable properties correctly and unstable ones not at all, because the recorded state may never have actually occurred.

*Introduced:* [1.6](lessons/01-06-consistent-cuts-and-global-snapshots.md)

### Reliable broadcast

If a **correct** process delivers $m$, every correct process delivers $m$. Implemented by re-broadcasting on first delivery.

*Introduced:* [1.7](lessons/01-07-ordered-broadcast-fifo-causal-total.md)

### Uniform reliable broadcast

If **any** process delivers $m$ — correct or not — every correct process delivers $m$.

The stronger version matters when a process can act visibly (print a receipt, ship a parcel) and then crash.

*Introduced:* [1.7](lessons/01-07-ordered-broadcast-fifo-causal-total.md)

### FIFO broadcast

Messages from a single sender are delivered in the order that sender sent them. One sequence number per sender.

*Introduced:* [1.7](lessons/01-07-ordered-broadcast-fifo-causal-total.md)

### Causal broadcast

If $\mathrm{broadcast}(m) \to \mathrm{broadcast}(m')$, no process delivers $m'$ before $m$. Costs a vector on every message.

*Introduced:* [1.7](lessons/01-07-ordered-broadcast-fifo-causal-total.md)

### Total-order broadcast

All processes deliver all messages in the same order. **Equivalent to consensus**, and therefore impossible in an asynchronous system with one crash.

Does **not** imply FIFO: a totally ordered delivery can still reverse one sender's own sequence.

*Introduced:* [1.7](lessons/01-07-ordered-broadcast-fifo-causal-total.md)

### Linearizability

Every operation appears to take effect instantaneously at one point inside its own invocation-to-response interval, with the resulting sequence legal for a single-machine object and respecting real-time order $<_H$.

**In words:** the system behaves like one machine, and an operation that has returned is in the past for everybody.

*Introduced:* [2.1](lessons/02-01-linearizability.md)

### Linearization point

The chosen instant inside an operation's interval where it is deemed to take effect.

*Introduced:* [2.1](lessons/02-01-linearizability.md)

### Composability

A history is linearizable if and only if its restriction to each object is. Linearizable objects therefore compose for free.

**Sequential consistency does not compose**, which is the reason linearizability is the industry definition of "strong".

*Introduced:* [2.1](lessons/02-01-linearizability.md); counterexample in [2.2](lessons/02-02-sequential-causal-and-session-consistency.md)

### Sequential consistency

There is one global order consistent with each process's program order, and it is legal for the object. **Real-time order is not required.**

*Introduced:* [2.2](lessons/02-02-sequential-causal-and-session-consistency.md)

### Causal consistency

Causally related writes are seen in that order by everybody; concurrent writes may be seen in different orders by different processes.

**The ceiling for an always-available system**, which is what makes it the bridge to CAP.

*Introduced:* [2.2](lessons/02-02-sequential-causal-and-session-consistency.md)

### Session guarantees

Four per-client properties: **read-your-writes**, **monotonic reads**, **monotonic writes**, **writes-follow-reads**.

Causal consistency implies all four. Cheap, client-side, and they eliminate the anomalies users actually complain about.

*Introduced:* [2.2](lessons/02-02-sequential-causal-and-session-consistency.md)

### Eventual consistency

If no new updates are made, all reachable replicas eventually converge.

Two escape hatches to notice: *if writes stop*, and *eventually* with no bound.

*Introduced:* [2.3](lessons/02-03-eventual-consistency-and-anti-entropy.md)

### Version vector

A vector clock per key, with one counter per **replica**. Dominance means supersession; incomparability means a genuine conflict and the versions are kept as **siblings**.

*Introduced:* [2.3](lessons/02-03-eventual-consistency-and-anti-entropy.md)

### Last-writer-wins

Resolve a conflict by keeping the version with the larger timestamp.

Not conflict *resolution* but conflict *deletion*: correct on causally ordered writes, lossy on concurrent ones, and it cannot tell which it is looking at.

*Introduced:* [2.3](lessons/02-03-eventual-consistency-and-anti-entropy.md)

### Join-semilattice

A set with an associative, commutative, idempotent operation $\sqcup$. The induced order is $a \le b \iff a \sqcup b = b$, and $a \sqcup b$ is the least upper bound.

*Introduced:* [2.4](lessons/02-04-crdts-and-strong-eventual-consistency.md)

### State-based CRDT

A replicated object whose state lies in a join-semilattice, whose updates are **inflationary** ($s \le \mathrm{update}(s)$), and whose merges take $\sqcup$.

**Convergence theorem:** replicas that have incorporated the same set of updates have identical states, whatever the order and multiplicity.

*Introduced:* [2.4](lessons/02-04-crdts-and-strong-eventual-consistency.md)

### Strong eventual consistency

Eventual consistency plus: replicas that have delivered the same set of updates have equivalent state. No conflict resolution, no rollback, no coordination.

*Introduced:* [2.4](lessons/02-04-crdts-and-strong-eventual-consistency.md)

### Replication lag

How far a follower trails the leader. Under asynchronous replication, a failover loses every write the new leader had not received — an amount bounded by the lag, which no client can observe.

*Introduced:* [2.5](lessons/02-05-replication-strategies.md)

### Chain replication

Replicas in a line: writes enter at the **head** and flow down, the **tail** acknowledges the client and serves all reads.

Reads at the tail are linearizable with no coordination, and no node handles more than 2 messages per write.

*Introduced:* [2.5](lessons/02-05-replication-strategies.md)

### Fencing token

A monotonically increasing number issued per leadership term, included with every request to a shared resource, which rejects anything below the highest it has seen.

**The check must happen at the resource**, the only component that sees both the old leader's and the new leader's requests.

*Introduced:* [2.5](lessons/02-05-replication-strategies.md)

### Quorum system

A family of subsets any two of which intersect. The shared member is the entire mechanism.

*Introduced:* [2.6](lessons/02-06-quorum-systems.md)

### Grid quorum

$n = d^2$ nodes in a $d \times d$ grid; read quorums are columns (size $d$), write quorums are a row plus a column (size $2d-1$).

Quorums of $O(\sqrt n)$ instead of $O(n)$, at a large cost in availability and a fatal sensitivity to correlated failure.

*Introduced:* [2.6](lessons/02-06-quorum-systems.md)

### Sloppy quorum

A write that cannot reach $W$ **home** replicas is accepted by $W$ reachable nodes, which hold a **hint** and forward it later (hinted handoff).

**Not a quorum:** while hints are outstanding the intersection property does not hold.

*Introduced:* [2.6](lessons/02-06-quorum-systems.md)

### ABD register

A linearizable register on $n > 2f$ replicas, two rounds per operation. *Read:* query a read quorum, take the highest timestamp, **write it back to a write quorum**, then return. *Write:* query for the highest timestamp, then write $(v, t+1)$.

The write-back is what upgrades "sees completed writes" to linearizable.

*Introduced:* [2.6](lessons/02-06-quorum-systems.md)

### Consensus

Every process proposes a value and may decide one. **Agreement:** no two correct processes decide differently. **Validity:** a decided value was proposed. **Termination:** every correct process eventually decides.

*Introduced:* [3.1](lessons/03-01-the-consensus-problem-and-flp.md)

### Valence

A configuration is **0-valent** if every execution from it decides 0, **1-valent** likewise, and **bivalent** if both outcomes are still reachable.

*Introduced:* [3.1](lessons/03-01-the-consensus-problem-and-flp.md)

### FLP impossibility

In an asynchronous message-passing system where at most one process may crash, no deterministic algorithm solves consensus.

**It kills termination, not safety.** Every real protocol is unconditionally safe and conditionally live.

*Introduced:* [3.1](lessons/03-01-the-consensus-problem-and-flp.md)

### Failure detector completeness

**Strong:** every crashed process is eventually permanently suspected by every correct process. **Weak:** by some correct process.

The easy half — a timeout that eventually fires gives it to you.

*Introduced:* [3.2](lessons/03-02-failure-detectors-and-escaping-flp.md)

### Failure detector accuracy

**Strong:** no correct process is ever suspected. **Weak:** some correct process is never suspected. **Eventually strong / eventually weak:** the same, after some unknown time.

The hard half, and the only column that distinguishes the classes.

*Introduced:* [3.2](lessons/03-02-failure-detectors-and-escaping-flp.md)

### Omega

The eventual-leader detector: eventually all correct processes output the same id, and it belongs to a correct process.

Equivalent to $\Diamond S$, and **the weakest failure detector with which consensus is solvable**.

*Introduced:* [3.2](lessons/03-02-failure-detectors-and-escaping-flp.md)

### Paxos

Proposers, acceptors, learners. **Phase 1:** send $\mathrm{prepare}(n)$ to a majority; each acceptor promises to ignore anything below $n$ and reports its highest accepted proposal. **Phase 2:** send $\mathrm{accept}(n, v)$ where $v$ is the highest-numbered reported value, or the proposer's own if none was reported.

A value is **chosen** when a majority has accepted it. Acceptors are the system's memory; proposers have none.

*Introduced:* [3.3](lessons/03-03-paxos.md)

### Raft term

A numbered period with at most one leader. Every message carries a term, and any server seeing a larger one steps down and adopts it.

`currentTerm` and `votedFor` must be durable before replying to any RPC.

*Introduced:* [3.4](lessons/03-04-raft.md)

### Log Matching Property

If two logs contain an entry with the same index and term, they are identical in every entry up through that index.

This is what lets a leader find one matching point and overwrite everything after it.

*Introduced:* [3.4](lessons/03-04-raft.md)

### Leader Completeness

If an entry is committed in term $T$, it is present in the log of every leader of every later term.

Follows from the election restriction plus quorum intersection, and is why overwriting a follower's log never destroys committed data.

*Introduced:* [3.4](lessons/03-04-raft.md)

### CAP theorem

In an asynchronous network where messages may be lost, no read/write object guarantees both availability and linearizable consistency.

**Not "pick two of three":** a partition is an event, not a design choice, and the theorem constrains behaviour only during one.

*Introduced:* [3.5](lessons/03-05-the-cap-theorem-and-pacelc.md)

### PACELC

If **P**artitioned, trade **A**vailability against **C**onsistency; **E**lse, trade **L**atency against **C**onsistency.

The E-branch governs almost all of a system's life and shows up in a latency histogram rather than an incident review.

*Introduced:* [3.5](lessons/03-05-the-cap-theorem-and-pacelc.md)

### Replicated state machine

One consensus instance per log slot, and every replica applies the agreed sequence to the same **deterministic** program.

Replicate the commands, never the state. Determinism is a requirement, not a consequence.

*Introduced:* [3.6](lessons/03-06-state-machine-replication.md)

### Leader lease

A leader may serve linearizable reads locally until $t + L - \epsilon$ on its own clock, provided followers will not start an election before $t + L$.

Safety condition: $\text{election timeout} > L + \epsilon$.

*Introduced:* [3.6](lessons/03-06-state-machine-replication.md)

### Atomic commitment

Participants vote yes or no; all deciders decide alike; commit requires **every** vote to be yes; every correct participant eventually decides.

**Unanimity, not majority** — which is exactly why it blocks where consensus does not.

*Introduced:* [4.1](lessons/04-01-distributed-transactions-and-2pc.md)

### Uncertainty

The interval during which a participant has voted yes and has not learned the decision. It may neither commit nor abort, and must hold its locks.

*Introduced:* [4.1](lessons/04-01-distributed-transactions-and-2pc.md)

### Blocking theorem

If the coordinator fails and **every** operational participant is uncertain, no operational participant can decide. Two-phase commit is a blocking protocol.

*Introduced:* [4.1](lessons/04-01-distributed-transactions-and-2pc.md)

### Cooperative termination protocol

An uncertain participant asks the others: adopt any known decision; if any participant has not yet voted, it votes no and the group aborts. Blocks only when all survivors are uncertain.

*Introduced:* [4.1](lessons/04-01-distributed-transactions-and-2pc.md)

### Three-phase commit

Adds a **pre-commit** phase between voting and committing, so that a survivor in pre-commit knows everyone voted yes.

Non-blocking under crash faults in a synchronous system; **violates agreement under a partition**, which is a strictly worse failure than blocking.

*Introduced:* [4.2](lessons/04-02-three-phase-commit-and-consensus-backed-commit.md)

### Consensus-backed commit

Replace the single coordinator with a consensus group, running one instance per participant whose decided value is that participant's vote. Commit iff every instance decided `prepared`.

Costs about one extra message delay and removes the coordinator as a single point of failure. It does **not** remove the unanimity requirement.

*Introduced:* [4.2](lessons/04-02-three-phase-commit-and-consensus-backed-commit.md)

### Speculative execution

Launch duplicate copies of the slowest tasks and take whichever finishes first.

Safe only because tasks are deterministic, side-effect-free, and publish output by atomic rename.

*Introduced:* [4.3](lessons/04-03-mapreduce-and-large-scale-processing.md)

### Consistent hashing

Hash keys and nodes into one circular space; a key belongs to the first node clockwise. Adding a node relocates only the arc behind it — in expectation $1/(N+1)$ of keys.

Works because the ownership rule **never mentions $N$**, which is exactly what `hash mod N` got wrong.

*Introduced:* [4.4](lessons/04-04-consistent-hashing-and-dhts.md)

### Virtual node

One physical node placed at $V$ positions on the ring, so its load is a sum of $V$ arc lengths and the relative spread shrinks like $1/\sqrt V$.

Also spreads a failed node's load across $V$ successors instead of one.

*Introduced:* [4.4](lessons/04-04-consistent-hashing-and-dhts.md)

### Chord routing

Each node keeps a **finger table** of pointers at distances $2^0, 2^1, 2^2, \ldots$ around the ring; a lookup halves the remaining distance per hop, giving $O(\log N)$ hops.

**Successor pointers are the correctness structure; fingers are only the performance structure.**

*Introduced:* [4.4](lessons/04-04-consistent-hashing-and-dhts.md)

### Byzantine Generals

A commander sends an order to $n-1$ lieutenants. **IC1:** all loyal lieutenants decide alike. **IC2:** if the commander is loyal, they decide the commander's value.

Unsolvable with oral messages when $f \ge n/3$.

*Introduced:* [4.5](lessons/04-05-byzantine-fault-tolerance.md)

### Byzantine quorum

With $n = 3f+1$ a quorum is $2f+1$, and two quorums share at least $f+1$ nodes — so **at least one is honest**.

That guaranteed honest node in every intersection is what makes Paxos's safety argument survive liars.

*Introduced:* [4.5](lessons/04-05-byzantine-fault-tolerance.md)

### PBFT

Three phases: **pre-prepare** (primary assigns a sequence number), **prepare** (collect $2f$ matching, establishing agreement within the view), **commit** (collect $2f+1$ matching, establishing that the agreement survives a view change). $O(n^2)$ messages per request.

*Introduced:* [4.5](lessons/04-05-byzantine-fault-tolerance.md)

### Sybil attack

Manufacturing unlimited identities to occupy a counted quorum. No increase in $n$ repairs it, because the adversary's identity count scales with yours at zero marginal cost.

*Introduced:* [4.6](lessons/04-06-nakamoto-consensus-and-blockchains.md)

### Proof of work

A block is valid only if its hash falls below a target, so producing one costs real computation. Votes are weighted by **hash rate** rather than by identity.

*Introduced:* [4.6](lessons/04-06-nakamoto-consensus-and-blockchains.md)

### Nakamoto consensus

Proof of work plus the longest-chain (most-work) rule. Agreement is **probabilistic and never final**: reversal probability decays exponentially in confirmation depth, provided the attacker holds under half the hash power.

*Introduced:* [4.6](lessons/04-06-nakamoto-consensus-and-blockchains.md)

## Formulas and rules

### Availability arithmetic

Series components (all required) multiply availabilities; parallel components (any suffices) multiply unavailabilities.

| structure | availability | at $p = 0.999$ |
|---|---|---|
| $k$ in series | $p^k$ | $k=5$: 0.99501, 43.7 h/yr down |
| $k$ in parallel | $1 - (1-p)^k$ | $k=3$: 0.999999999 |
| at least $m$ of $k$ | $\sum_{j=m}^{k}\binom{k}{j}p^j(1-p)^{k-j}$ | majority of 5 at $p=0.9$: 0.99144 |

**Adding a machine helps when it is an alternative and hurts when it is a dependency.**

*From* [1.1](lessons/01-01-why-distributed-systems-are-hard.md), [2.6](lessons/02-06-quorum-systems.md)

### Timeouts and dedup sizing

| quantity | formula |
|---|---|
| perfect failure-detector timeout (synchronous) | $2d + p$ |
| dedup table size | $\lambda\,T\,b$ (rate $\times$ retention window $\times$ bytes/entry) |

The expensive parameter is $T$, and it is set by the **client's** retry horizon, not the server's.

*From* [1.1](lessons/01-01-why-distributed-systems-are-hard.md), [1.3](lessons/01-03-rpc-and-delivery-semantics.md)

### Clock synchronization

| quantity | formula |
|---|---|
| resync interval to hold skew under $\delta$ | $\Delta t = \delta / (2\rho)$ |
| NTP round-trip delay | $\delta = (T_4 - T_1) - (T_3 - T_2)$ |
| NTP offset estimate | $\theta = \big[(T_2 - T_1) + (T_3 - T_4)\big]/2$ |
| guaranteed offset interval | $\theta \pm \delta/2$ |
| Cristian's algorithm | set clock to $T_s + \mathrm{RTT}/2$, accurate to $\pm(\mathrm{RTT}/2 - \ell_{\min})$ |

At 50 ppm per clock, two clocks separate by 4.3 s per day. **Total error is drift-since-last-sync plus per-sync measurement error**, and below a few milliseconds the second term dominates.

*From* [1.4](lessons/01-04-physical-clocks-and-synchronization.md)

### Logical clock updates

| clock | local event | on receiving $t$ or $W$ |
|---|---|---|
| Lamport | $C \leftarrow C + 1$ | $C \leftarrow \max(C, t) + 1$ |
| Vector at $i$ | $V[i] \leftarrow V[i]+1$ | $V[k] \leftarrow \max(V[k], W[k])\ \forall k$, then $V[i] \leftarrow V[i]+1$ |

Comparison: $a \to b \iff V(a) \le V(b)$ componentwise with at least one strict; incomparable means concurrent. For a total order, sort by $(L(a), \text{process id})$ — this extends happens-before and never contradicts it.

*From* [1.5](lessons/01-05-logical-time-lamport-and-vector-clocks.md)

### Causal delivery rule

Deliver a message from $j$ carrying vector $W$ at process $i$ when

$$W[j] = V_i[j] + 1 \quad\text{and}\quad W[k] \le V_i[k] \ \ \forall k \ne j,$$

otherwise buffer. The first condition is FIFO; the second is causality. On delivery, $V_i[j] \mathbin{+}= 1$, which may release buffered messages.

*From* [1.5](lessons/01-05-logical-time-lamport-and-vector-clocks.md), [1.7](lessons/01-07-ordered-broadcast-fifo-causal-total.md)

### Chandy-Lamport snapshot

1. The initiator records its own state, then sends a **marker** on every outgoing channel **before any further application message**.
2. On the **first** marker received on any channel: record own state, record that channel as empty, send markers on all outgoing channels.
3. On a **later** marker on channel $c$: record $c$'s state as the application messages received on $c$ since recording own state.
4. Done when a marker has arrived on every incoming channel.

Requires FIFO channels. The recorded state $S^*$ is reachable from the start state, and the final state is reachable from $S^*$ — which is why it decides stable properties correctly.

*From* [1.6](lessons/01-06-consistent-cuts-and-global-snapshots.md)

### Broadcast ladder

From weakest: **best-effort** → **reliable** → **FIFO** → **causal** → **total order**. Each implies those beneath it.

| rung | the one run it rejects |
|---|---|
| reliable | one process delivers $m$, another never does |
| FIFO | $C$ delivers $m_2$ then $m_1$, both from $A$, sent in the other order |
| causal | $C$ delivers $m_3$ before the $m_1$ that caused it |
| total order | $C$ delivers $m_1, m_2$ while $D$ delivers $m_2, m_1$ |

**Message costs:** eager reliable broadcast $n(n-1)$; sequencer-based total order $n+1$ per broadcast, at the price of a single point of failure whose replacement is itself consensus.

*From* [1.7](lessons/01-07-ordered-broadcast-fifo-causal-total.md)

### Testing a history for linearizability

1. Draw the operation intervals on a time axis.
2. Read off the forced constraints: a read returning $v$ puts $\mathrm{write}(v)$'s point before the read's; an operation that returned before another was invoked has the earlier point.
3. Try to satisfy all constraints with points inside the intervals. **Cyclic constraints means not linearizable.**

Two shortcuts that settle most histories: *a completed write followed by a read of the old value* is never linearizable; and *once a value has been observed, no later read may see its predecessor.* Overlapping operations may be ordered either way.

*From* [2.1](lessons/02-01-linearizability.md)

### The consistency ladder

| model | what it adds over the one below | what stepping out licenses |
|---|---|---|
| linearizable | real-time order | a completed write goes unseen by a later read |
| sequential | one agreed order | two nodes order concurrent writes differently |
| causal | causal order | a reply appears before the message it answers |
| eventual | convergence if writes stop | anything, until convergence |

Only **causal and below** are achievable by an always-available system.

*From* [2.2](lessons/02-02-sequential-causal-and-session-consistency.md)

### CRDT catalogue

| type | state | merge | value |
|---|---|---|---|
| G-Counter | $(c_1,\ldots,c_n)$; replica $i$ increments $c_i$ | pointwise max | $\sum_i c_i$ |
| PN-Counter | two G-Counters $P$, $N$ | pointwise max of each | $\sum P - \sum N$ |
| G-Set | a set | union | the set |
| 2P-Set | add-set $A$, remove-set $R$ | union of each | $A \setminus R$ (**cannot re-add**) |
| OR-Set | tagged adds and removes | union of each | $\{e : \exists t,\ (e,t) \in A \setminus R\}$ (add wins) |
| LWW-Register | (value, timestamp) | larger timestamp wins | the value (**lossy**) |

**A CRDT maintains any invariant preserved by joins and no invariant that is not.** One-step test: is the join of two valid states always valid? Bounded aggregates — stock, balances, quotas, seat counts — fail it.

*From* [2.4](lessons/02-04-crdts-and-strong-eventual-consistency.md)

### Anti-entropy costs

| mechanism | cost | limitation |
|---|---|---|
| read repair | free, rides on reads | repairs only what is read |
| hinted handoff | one hint per deferred write | breaks the quorum intersection while outstanding |
| Merkle anti-entropy | $O(k \log N)$ hashes for $k$ differences | degrades to $O(N)$ when differences are widespread |
| gossip | $\log_2 n + \ln n$ rounds to reach all $n$ | probabilistic, not guaranteed |

One differing key among $2^{20}$ costs about 40 hash comparisons. **Split the keyspace into many small trees** so cost stays proportional to divergence rather than to dataset size.

*From* [2.3](lessons/02-03-eventual-consistency-and-anti-entropy.md)

### Replication latency

Waiting for **all** $k$ followers is slow when any is slow: $\Pr = 1 - (1-p)^k$, which **grows** with $k$. Waiting for **one**: $\Pr = p^k$, which shrinks. Waiting for a **majority** behaves like the latter.

| $k$, at $p = 0.01$ | wait for all | wait for one |
|---|---|---|
| 2 | 1.99% | $10^{-4}$ |
| 4 | 3.94% | $10^{-8}$ |
| 8 | 7.73% | $10^{-16}$ |

Data lost on failover under async replication $=$ write rate $\times$ replication lag.

*From* [2.5](lessons/02-05-replication-strategies.md)

### Quorum conditions

$$R + W > N \quad \text{(reads see completed writes)} \qquad\text{and}\qquad 2W > N \quad \text{(writes are ordered against each other)}.$$

**Both are required**, and the second is the one usually forgotten. For odd $N$ at maximum fault tolerance the answer is always the majority, $R = W = \lceil (N+1)/2 \rceil$.

| system | read quorum | write quorum | tolerates |
|---|---|---|---|
| majority, $n$ | $\lfloor n/2 \rfloor + 1$ | same | $\lfloor (n-1)/2 \rfloor$ failures |
| grid, $n = d^2$ | $d$ | $2d - 1$ | any failure pattern leaving one column intact |

*From* [2.6](lessons/02-06-quorum-systems.md)

### Fault-tolerance bounds

| failure model | nodes needed | quorum | source of the bound |
|---|---|---|---|
| crash, crash-recovery, omission | $n \ge 2f+1$ | $f+1$ | two quorums share a node |
| Byzantine (asynchronous) | $n \ge 3f+1$ | $2f+1$ | two quorums share an **honest** node |
| crash, with a perfect failure detector | $n \ge f+1$ | — | a partition cannot masquerade as crashes |
| crash, with eventual accuracy | $n \ge 2f+1$ | majority | it can |

The Byzantine derivation in two lines: a quorum is formable without $f$ silent nodes, so $q \le n-f$; two quorums must overlap in more than $f$, so $2q - n > f$; hence $2(n-f) - n > f$, that is $n > 3f$.

| $f$ | crash $n$ | Byzantine $n$ | Byzantine quorum |
|---|---|---|---|
| 1 | 3 | 4 | 3 |
| 2 | 5 | 7 | 5 |
| 3 | 7 | 10 | 7 |
| 4 | 9 | 13 | 9 |

**Even-sized clusters are the standard waste:** 4 tolerates the same single crash as 3, and 6 the same two as 5.

*From* [1.2](lessons/01-02-failure-models-and-the-network.md), [3.2](lessons/03-02-failure-detectors-and-escaping-flp.md), [4.5](lessons/04-05-byzantine-fault-tolerance.md)

### Synchronous consensus

Flooding solves consensus in a synchronous system with at most $f$ crashes in **$f+1$ rounds**, which is tight: each crash can cost one round of uncertainty, and $f+1$ rounds guarantees one crash-free round in which everyone learns everything. Cost $(f+1)\,n(n-1)$ messages.

*From* [3.1](lessons/03-01-the-consensus-problem-and-flp.md)

### The three escapes from FLP

| assumption dropped | mechanism | used by |
|---|---|---|
| full asynchrony | partial synchrony with adaptive timeouts | Paxos, Raft, everything in production |
| determinism | randomisation, terminating with probability 1 | Ben-Or, proof of work |
| no oracle | a failure detector, which may be wrong arbitrarily often | $\Diamond S$ / $\Omega$, the weakest that works |

**Safety is unconditional in all three; only liveness is bought.**

*From* [3.1](lessons/03-01-the-consensus-problem-and-flp.md), [3.2](lessons/03-02-failure-detectors-and-escaping-flp.md)

### Running Paxos by hand

1. Choose $n$ greater than any number you have used. Send $\mathrm{prepare}(n)$ to a majority.
2. Each acceptor with $\mathrm{promised} < n$ replies with a promise and its $(\mathrm{accepted\_n}, \mathrm{accepted\_v})$; others reject.
3. If a majority promised: let $v$ be the value of the **highest-numbered** accepted proposal among the replies, or your own if none was reported.
4. Send $\mathrm{accept}(n, v)$. An acceptor accepts unless it has promised to something greater than $n$.
5. A majority of accepts means $v$ is **chosen**.

Safety needs no clock and no detector: any two majorities share an acceptor, and that acceptor's memory forces every later proposer onto a chosen value. Liveness needs a distinguished proposer ($\Omega$), or duelling proposers livelock forever.

*From* [3.3](lessons/03-03-paxos.md)

### Raft rules

**Up-to-date comparison** (for granting a vote): log $A$ beats log $B$ if $\mathrm{lastTerm}(A) > \mathrm{lastTerm}(B)$, or the terms tie and $\mathrm{lastIndex}(A) \ge \mathrm{lastIndex}(B)$. **Term first, then length.**

**AppendEntries check:** the follower rejects unless it holds an entry at `prevLogIndex` with term `prevLogTerm`. On rejection the leader decrements `nextIndex` and retries; on acceptance the follower deletes any conflicting suffix and appends — so **a follower's log can get shorter**.

**Commit rule:** an entry is committed when it is on a majority **and** its term equals the leader's current term. Entries from earlier terms commit indirectly, which is why a new leader appends a no-op in its own term.

**Durable before replying:** `currentTerm`, `votedFor`, `log[]`.

*From* [3.4](lessons/03-04-raft.md)

### Linearizable reads

| method | cost | assumption |
|---|---|---|
| log read (append a read entry) | a full consensus round with fsync | none |
| ReadIndex (confirm leadership, then read locally) | one round trip, no disk write | none |
| lease read (answer locally) | zero round trips | bounded clock drift |

Lease safety: $\text{election timeout} > L + \epsilon$, and the leader stops serving at $t + L - \epsilon$ on its own clock. **No purely local check can substitute** — leadership is a fact about the cluster.

*From* [3.6](lessons/03-06-state-machine-replication.md)

### Latency floors

Light in fibre travels at about $\tfrac{2}{3}c \approx 200{,}000$ km/s, so a round trip costs at least $2 \times \text{distance} / 200{,}000$ km/s. Real paths run about 1.3 to 1.6 times these.

| path | distance | round-trip floor |
|---|---|---|
| Oregon – Virginia | 3,900 km | 39 ms |
| Virginia – London | 5,900 km | 59 ms |
| Virginia – Sydney | 15,600 km | 156 ms |
| London – Sydney | 17,000 km | 170 ms |

**Place a leader to minimise the distance to its $\lceil n/2 \rceil$-th nearest replica**, not the average distance to all of them — a majority does not wait for the slowest.

*From* [3.5](lessons/03-05-the-cap-theorem-and-pacelc.md)

### Log growth and snapshots

Log bytes per second $=$ operation rate $\times$ entry size. Replay time for a rejoining replica $=$ entries missed $/$ apply rate, which **scales with the outage** — while with snapshots it is bounded by the snapshot interval.

At 10,000 ops/s and 120 bytes: 1.2 MB/s, 104 GB/day, and a one-day outage takes 4.8 hours to replay at 50,000 entries/s. Snapshots every $10^6$ entries cut that to about 20 seconds.

*From* [3.6](lessons/03-06-state-machine-replication.md)

### Commit protocol costs and decision rules

| protocol | round trips | messages | blocking? |
|---|---|---|---|
| 2PC | 2 | $4n$ | yes, if the coordinator fails while all survivors are uncertain |
| 3PC | 3 | $6n$ | no under crash faults; **unsafe under partition** |
| consensus-backed | $\approx 2$ (5 message delays) | $4n$ plus the consensus group's | no |

**Survivor decision rules after a coordinator crash**, in priority order:

1. any survivor knows the decision → adopt it;
2. any survivor has not voted → it votes no, so **abort**;
3. (3PC only) any survivor is in pre-commit → **commit**;
4. otherwise → **block**.

*From* [4.1](lessons/04-01-distributed-transactions-and-2pc.md), [4.2](lessons/04-02-three-phase-commit-and-consensus-backed-commit.md)

### MapReduce sizing

| quantity | formula |
|---|---|
| map tasks | input size / block size |
| shuffle transfers | $M \times R$ |
| $P(\text{at least one straggler})$ | $1 - (1-p)^M$ |
| phase duration | the **maximum** over tasks, not the mean |

At $p = 0.01$ a straggler is near-certain past 2,000 tasks, so speculative execution is required rather than optional. A **combiner** is correct exactly when reduce is associative and commutative — a count is, a mean is not (carry $(\text{sum}, \text{count})$ instead).

*From* [4.3](lessons/04-03-mapreduce-and-large-scale-processing.md)

### Partitioning costs

| scheme | fraction of keys moved when adding the $(N{+}1)$-th node |
|---|---|
| `hash mod N` | $N/(N+1)$ — 91% at $N = 10$, 99% at $N = 100$ |
| consistent hashing | $1/(N+1)$ — 9.1% at $N = 10$ |

Load imbalance against virtual nodes per physical node, measured at $N = 10$:

| $V$ | max/min load |
|---|---|
| 1 | 16.2 |
| 10 | 2.31 |
| 50 | 1.58 |
| 200 | 1.22 |

Chord lookup: $\log_2 N$ hops — 20 among a million nodes.

*From* [4.4](lessons/04-04-consistent-hashing-and-dhts.md)

### Double-spend depth

$$P(z) = 1 - \sum_{k=0}^{z} \frac{\lambda^k e^{-\lambda}}{k!}\left(1 - \left(\tfrac{q}{p}\right)^{z-k}\right), \qquad \lambda = z\,\frac{q}{p}, \quad p = 1-q.$$

Confirmations for a reversal risk below 0.1 percent:

| $q$ | $z$ | at 10 min/block |
|---|---|---|
| 10% | 5 | 50 min |
| 20% | 11 | 1.8 h |
| 25% | 15 | 2.5 h |
| 30% | 24 | 4.0 h |
| 40% | 89 | 14.8 h |
| 45% | 340 | 2.4 days |

Orphan rate $\approx \Delta/\tau$ (propagation time over block interval); a high orphan rate **splits honest hash power and lowers the 50 percent threshold**, which is why shortening the interval needs a GHOST-style fork-choice rule rather than just a smaller number.

*From* [4.6](lessons/04-06-nakamoto-consensus-and-blockchains.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| ACID, serializability, precedence graphs, two-phase locking, isolation levels | [`databases` 4.1](../databases/lessons/04-01-transactions-and-the-acid-properties.md)–[4.4](../databases/lessons/04-04-isolation-levels-and-mvcc.md) |
| Write-ahead logging, force-writing a log record, idempotent redo | [`databases` 4.5](../databases/lessons/04-05-recovery-write-ahead-logging-and-aries.md), [`operating-systems` 4.3](../operating-systems/lessons/04-03-crash-consistency-and-journaling.md) |
| The $R+W>N$ rule as practitioners state it, sharding, BASE, the NoSQL families | [`databases` 4.6](../databases/lessons/04-06-nosql-and-distributed-data.md) |
| TCP: sequence numbers, retransmission, round-trip estimation, sliding windows | [`computer-networks` 2.2](../computer-networks/lessons/02-02-building-reliable-data-transfer.md), [2.3](../computer-networks/lessons/02-03-tcp-segments-connections-flow-control.md) |
| Routing, IP addressing, why a rack-top switch failure looks like it does | [`computer-networks` 3.1](../computer-networks/lessons/03-01-forwarding-routing-and-the-ip-datagram.md) |
| Locks, condition variables, race conditions, deadlock | [`operating-systems` 2.1](../operating-systems/lessons/02-01-race-conditions-and-critical-sections.md)–[2.5](../operating-systems/lessons/02-05-deadlock.md) |
| Cache coherence, memory consistency models, fences | [`computer-architecture` 5.3](../computer-architecture/lessons/05-03-multiprocessors-cache-coherence.md) |
| Hash functions and hash tables as data structures | [`algorithms` 2.4](../algorithms/lessons/02-04-amortized-analysis-and-union-find.md) |
| Partial orders, down-sets, lattices | [`discrete-mathematics` 2.2](../discrete-mathematics/lessons/02-02-relations-equivalence-and-order.md), [`combinatorics` 5.1](../combinatorics/lessons/05-01-posets-lattices-chains-antichains.md) |
| Pigeonhole and intersecting set families | [`discrete-mathematics` 3.3](../discrete-mathematics/lessons/03-03-inclusion-exclusion-and-pigeonhole.md), [`combinatorics` 4.2](../combinatorics/lessons/04-02-pigeonhole.md) |
| Binomial and Poisson distributions, the law of large numbers | [`prob-stat-refresher` 2.2](../prob-stat-refresher/lessons/02-02-discrete-distributions.md), [3.2](../prob-stat-refresher/lessons/03-02-sums-and-law-of-large-numbers.md) |
| Random walks, gambler's ruin, first-passage times | [`probability-theory` 5.3](../probability-theory/lessons/05-03-martingales.md) |
| **Cryptographic hash functions: collision and preimage resistance; digital signatures** | `cryptography` (**unbuilt**). [4.5](lessons/04-05-byzantine-fault-tolerance.md) and [4.6](lessons/04-06-nakamoto-consensus-and-blockchains.md) use these as black boxes: a hash cannot be inverted or collided, and a signature cannot be forged. Nothing here depends on how either is built. |

## Pitfalls

### Timeouts and failure detection

- A timeout says the node has not answered *yet*, which is a statement about you, not about it — no silence proves death in an asynchronous system.
  *([1.1](lessons/01-01-why-distributed-systems-are-hard.md), [1.2](lessons/01-02-failure-models-and-the-network.md))*
- A partition is not a set of crashes: partitioned nodes keep serving clients and accepting writes, and treating them as dead is how systems lose data.
  *([1.2](lessons/01-02-failure-models-and-the-network.md))*
- "Byzantine" is the **weakest** assumption about node behaviour and therefore the safest to design against; "fail-stop" is the strongest and most dangerous.
  *([1.2](lessons/01-02-failure-models-and-the-network.md))*
- A failure detector does not have to be right to be useful: eventual accuracy permits unboundedly many mistakes, and an adaptive timeout supplies it.
  *([3.2](lessons/03-02-failure-detectors-and-escaping-flp.md))*
- A false suspicion must never change a decided value. If a timeout can affect safety rather than only liveness, the protocol is broken.
  *([3.1](lessons/03-01-the-consensus-problem-and-flp.md), [3.2](lessons/03-02-failure-detectors-and-escaping-flp.md))*

### Clocks

- A clock reading is an interval about as wide as the round trip used to obtain it. Never compare two machines' timestamps without asking whether the gap exceeds that width.
  *([1.4](lessons/01-04-physical-clocks-and-synchronization.md))*
- NTP's formula does not assume synchronised clocks — each difference is taken within one clock's own frame. What it assumes is **symmetry** of the two one-way delays, and that is what fails.
  *([1.4](lessons/01-04-physical-clocks-and-synchronization.md))*
- Never step a clock backwards; slew it. A backward step makes every lease and timeout gain apparent life and turns durations negative.
  *([1.4](lessons/01-04-physical-clocks-and-synchronization.md))*
- $L(a) < L(b)$ means *either* $a \to b$ *or* they are concurrent. Every "sort by logical timestamp and take the latest" scheme assumes the false converse.
  *([1.5](lessons/01-05-logical-time-lamport-and-vector-clocks.md))*
- Concurrent means causally unrelated, not simultaneous; and a vector clock contains no time at all, so it cannot expire anything or meet a deadline.
  *([1.5](lessons/01-05-logical-time-lamport-and-vector-clocks.md))*

### Delivery and ordering

- Exactly-once delivery is forbidden by Two Generals. Every product offering it is doing at-least-once plus deduplication somewhere, and the question is where that state lives when it fails.
  *([1.3](lessons/01-03-rpc-and-delivery-semantics.md))*
- The dedup record must be as durable as the effect it protects, and committed in the same atomic step — a crash is exactly when the client retries.
  *([1.3](lessons/01-03-rpc-and-delivery-semantics.md))*
- Receiving and delivering are different events, and every ordering guarantee is implemented in the buffer between them.
  *([1.7](lessons/01-07-ordered-broadcast-fifo-causal-total.md))*
- Total order does not imply FIFO: everyone can agree on an order that reverses one sender's own sequence.
  *([1.7](lessons/01-07-ordered-broadcast-fifo-causal-total.md))*
- Causal ordering on an unreliable broadcast converts a lost message into a permanent stall, which is why reliability sits below causality on the ladder.
  *([1.7](lessons/01-07-ordered-broadcast-fifo-causal-total.md))*

### Consistency models

- Linearizability constrains only non-overlapping operations; concurrent ones may be ordered either way, and a system is permitted, not required, to be consistent about which.
  *([2.1](lessons/02-01-linearizability.md))*
- "Strongly consistent" names at least three different guarantees in different products. Ask the operational question instead: *if I write and get an acknowledgement, is a read starting afterwards guaranteed to see it?*
  *([2.1](lessons/02-01-linearizability.md))*
- Sequential consistency is not "linearizability with a small delay" — it has no staleness bound at all, and it does not compose.
  *([2.2](lessons/02-02-sequential-causal-and-session-consistency.md))*
- Causal consistency does not make replicas agree on a *state*: two replicas may permanently order two concurrent writes differently and both be correct.
  *([2.2](lessons/02-02-sequential-causal-and-session-consistency.md))*
- Eventual consistency promises convergence *if writes stop*, with no bound. For a continuously written key, "eventually" may never arrive.
  *([2.3](lessons/02-03-eventual-consistency-and-anti-entropy.md))*

### Replication and quorums

- Last-writer-wins is not resolution; it discards one side of every conflict on the strength of a timestamp whose uncertainty usually exceeds the interval in question.
  *([1.4](lessons/01-04-physical-clocks-and-synchronization.md), [2.3](lessons/02-03-eventual-consistency-and-anti-entropy.md))*
- Being a CRDT guarantees convergence, not data preservation — the LWW-Register is a perfectly good CRDT that throws a write away.
  *([2.4](lessons/02-04-crdts-and-strong-eventual-consistency.md))*
- You cannot bolt a constraint onto a CRDT: adding "never below zero" produces a type whose join of two valid states is invalid, and merge has no failure case.
  *([2.4](lessons/02-04-crdts-and-strong-eventual-consistency.md))*
- Synchronous replication converts a durability risk into an availability risk, and waiting for **all** followers makes stalls *more* likely as you add replicas.
  *([2.5](lessons/02-05-replication-strategies.md))*
- A majority election does not remove the need for fencing: a paused leader can resume and issue a write it prepared while it still was leader.
  *([2.5](lessons/02-05-replication-strategies.md))*
- $R+W>N$ is not the whole condition; $2W>N$ is separate, and a configuration like $N=5, R=4, W=2$ passes the famous rule and admits disjoint concurrent writes.
  *([2.6](lessons/02-06-quorum-systems.md))*
- A quorum read is not a linearizable read — it needs a write-back before returning. And a sloppy quorum is not a quorum at all.
  *([2.1](lessons/02-01-linearizability.md), [2.6](lessons/02-06-quorum-systems.md))*

### Consensus protocols

- FLP does not mean consensus protocols fail. It forbids a *guarantee* of termination in the worst case, and one crash being *possible* is enough — the bad execution contains no crash at all.
  *([3.1](lessons/03-01-the-consensus-problem-and-flp.md))*
- The $n > 2f$ requirement comes from being unable to distinguish a partition from crashes, not from detector mistakes: with a perfect detector, $n > f$ suffices.
  *([3.2](lessons/03-02-failure-detectors-and-escaping-flp.md))*
- Paxos acceptors do not evaluate values; they remember two numbers and report them. A proposer may propose its own value only when no acceptor in its majority reports one.
  *([3.3](lessons/03-03-paxos.md))*
- In Raft, term beats length in the up-to-date comparison, and replicating an entry on a majority does **not** commit it unless the entry is from the leader's current term.
  *([3.4](lessons/03-04-raft.md))*
- CAP is not "pick two of three", says nothing about a healthy network, and its "available" means *every* non-failing node answers — a stricter bar than any real system aims at.
  *([3.5](lessons/03-05-the-cap-theorem-and-pacelc.md))*
- A leader must not serve a local read on the strength of believing it is the leader. Confirm with a round trip or hold a correctly sized lease.
  *([3.6](lessons/03-06-state-machine-replication.md))*
- Determinism in a replicated state machine is a requirement, not a consequence: iteration order, floating point and anything reading the environment break it silently. Add a periodic state hash.
  *([3.6](lessons/03-06-state-machine-replication.md))*

### Commit and scale

- A participant that has voted yes may never time out and abort. A timeout inside the uncertainty window is not permission to guess.
  *([4.1](lessons/04-01-distributed-transactions-and-2pc.md))*
- 2PC needs **unanimity** and therefore tolerates zero participant failures, where consensus needs a majority and tolerates a minority. That difference is the whole reason it blocks.
  *([4.1](lessons/04-01-distributed-transactions-and-2pc.md))*
- 3PC is not strictly better than 2PC: it is non-blocking under crashes and **incorrect** under partitions, and a half-committed transaction is worse than a stalled one.
  *([4.2](lessons/04-02-three-phase-commit-and-consensus-backed-commit.md))*
- Any protocol that blocks because one machine is unreachable has its critical state on one machine. The fix is replication, never more phases.
  *([4.2](lessons/04-02-three-phase-commit-and-consensus-backed-commit.md))*
- Stragglers are a statistical certainty at scale, since a job's duration is the maximum over its tasks; and a combiner is correct only when reduce is associative and commutative.
  *([4.3](lessons/04-03-mapreduce-and-large-scale-processing.md))*
- One token per node on a hash ring gives a 16-to-1 load imbalance and dumps a failed node's whole share on one neighbour. Virtual nodes are required, not a refinement.
  *([4.4](lessons/04-04-consistent-hashing-and-dhts.md))*
- The $3f+1$ bound is about two quorums sharing an **honest** node, not about outvoting liars — and signatures lower it only in a synchronous system.
  *([4.5](lessons/04-05-byzantine-fault-tolerance.md))*
- Six confirmations is one calculation for one attacker share, not a rule: against 30 percent of hash power it leaves a 13 percent reversal probability.
  *([4.6](lessons/04-06-nakamoto-consensus-and-blockchains.md))*

---

## Conventions

- **One card per course**, covering every lesson. The linter checks that every
  lesson file is cited somewhere on this card.
- **Intuition first**, same as lessons: a plain-English line before any formula.
- **Headings are anchors.** Renaming a `###` breaks inbound lesson links.
- **No prose dollar signs** — write "100 dollars", not the symbol.
- Length is not capped the way a lesson's is: this is a lookup surface, not a
  read-through.
