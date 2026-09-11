# Distributed Systems — Syllabus

> Computer Science · Tier 2 · ~25 lessons · Prereqs: [operating-systems](../operating-systems/syllabus.md), [computer-networks](../computer-networks/syllabus.md) · Roadmap id: `distributed-systems`

## Goal

Make you fluent in the core problem of distributed computing: getting many independent, unreliable machines that can only see each other through a lossy, delay-prone network to behave like one correct system. You'll be able to reason about time without a global clock, choose a consistency model on purpose, run a replicated state machine through a real consensus protocol, and say precisely what CAP forces you to give up. It deliberately skips production ops/SRE detail and the internals of any one framework — the aim is the timeless ideas, not this year's tooling.

## Dangerous Checklist

When you finish, you can:

- [ ] Classify a system by its timing and failure model, and explain why asynchrony makes so many problems impossible or expensive
- [ ] Order events across machines with Lamport and vector clocks, and read off which pairs are concurrent
- [ ] Cut a consistent global state out of a running system and say which cuts are meaningless
- [ ] Design an RPC layer that survives lost, duplicated, and reordered messages, and reason about its delivery semantics
- [ ] Place a broadcast abstraction on the FIFO / causal / total-order ladder and say what each costs
- [ ] State linearizability, sequential, causal, and eventual consistency precisely, and tell a real trace's model apart from another
- [ ] Prove a replicated data type converges, and say why some values have no merge function at all
- [ ] Configure read/write quorums for a target consistency-availability trade-off and prove when reads see the latest write
- [ ] Explain the FLP impossibility result, and name exactly which assumption each real protocol adds to escape it
- [ ] Trace a full round of Paxos and a Raft leader election, and argue why each is safe
- [ ] Prove the CAP theorem from a two-partition argument and decide what to sacrifice in a real deployment
- [ ] Build a fault-tolerant service as a replicated state machine on top of a consensus log
- [ ] Run a distributed transaction through two- and three-phase commit and identify exactly where each can block
- [ ] Explain how MapReduce, consistent hashing, and Byzantine agreement scale these ideas to thousands of nodes
- [ ] Size a Byzantine cluster, and say what proof-of-work buys and what it gives up

## Scope: what this course owns

Four built courses already touch this material, and the boundary is deliberate. Full detail in [reference.md](reference.md).

| Already owned elsewhere | This course instead owns |
|---|---|
| The $R + W > N$ rule, sharding, practitioner CAP, BASE, NoSQL families ([`databases` 4.6](../databases/lessons/04-06-nosql-and-distributed-data.md)) | Quorums as **intersecting set systems** (2.6) and the **CAP proof** with PACELC (3.5) |
| ACID, serializability, 2PL, WAL/ARIES ([`databases`](../databases/syllabus.md) Module 4) | **Atomic commit across machines**: uncertainty, blocking, the coordinator log (4.1–4.2) |
| Cache coherence and shared-memory sequential consistency ([`computer-architecture` 5.3](../computer-architecture/lessons/05-03-multiprocessors-cache-coherence.md)) | Consistency models for **replicated objects over a network** (2.1–2.4) |
| Reliable delivery over one link: sequence numbers, timeouts, duplicate detection ([`computer-networks` 2.2](../computer-networks/lessons/02-02-building-reliable-data-transfer.md)) | **RPC semantics** under partial failure, and broadcast ordering (1.3, 1.7) |
| Deadlock and the Coffman conditions ([`operating-systems` 2.5](../operating-systems/lessons/02-05-deadlock.md)) | **Blocking**: a correct participant stuck because it cannot learn a decision (4.1) |

## Modules

### Module 1: Models, Time, and Global State

Build the vocabulary: what a distributed system is, how it fails, how nodes talk, and how to reason about "before" and "the state of the system" when there is no shared clock.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Why It's Hard | Name the sources of difficulty and pick a system model | partial failure, asynchrony, no global state, the eight fallacies, synchronous vs. asynchronous models |
| 1.2 | Failure Models | Classify failures and design against the ones you'll actually see | crash-stop, crash-recovery, omission, Byzantine, fail-stop, the failure-model lattice, network faults |
| 1.3 | RPC and Delivery Semantics | Turn a network into something you can program against | request-reply, marshalling, at-most-once / at-least-once / exactly-once, idempotency, partial-failure semantics |
| 1.4 | Physical Clocks | Say how far apart two real clocks can drift and how to pull them together | clock skew and drift, NTP, Cristian's and Berkeley algorithms, uncertainty intervals, why physical time alone can't order events |
| 1.5 | Logical Time | Order events causally with no clock at all | happens-before, Lamport timestamps, vector clocks, concurrency detection |
| 1.6 | Consistent Cuts and Global Snapshots | Photograph a running system without stopping it | global state, consistent vs. inconsistent cuts, Chandy–Lamport, channel state, stable properties |
| 1.7 | Ordered Broadcast | Place a delivery guarantee on the ordering ladder and price it | best-effort / reliable / FIFO / causal / total-order broadcast, the causal-delivery rule, why total order is consensus |

**Boss problem 1:** Given an event log from three processes with message sends/receives, assign Lamport and vector timestamps, list every pair of concurrent events, and exhibit a pair that Lamport clocks wrongly appear to order — then explain what delivery guarantee an RPC layer would need to make the total order real, and mark one consistent and one inconsistent cut on the same log.

### Module 2: Consistency and Replication

Once you copy data onto many machines, "the value" stops being well-defined. Pin down what "consistent" means and how replication protocols deliver each level.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Linearizability | State the strongest single-object guarantee and test a trace for it | atomic/linearizable objects, real-time order, the linearization point, composability |
| 2.2 | Sequential, Causal and Session Consistency | Trade real-time order for something cheaper but still sane | sequential consistency, causal consistency, session guarantees (read-your-writes, monotonic reads, writes-follow-reads) |
| 2.3 | Eventual Consistency and Anti-Entropy | Let replicas diverge and still converge | eventual convergence, last-writer-wins and lost updates, version vectors, siblings, gossip, Merkle-tree anti-entropy, read repair |
| 2.4 | CRDTs and Strong Eventual Consistency | Make merge a mathematical guarantee rather than a hope | join-semilattices, monotone updates, state- vs. operation-based, G-counter / PN-counter / OR-set, what has no merge |
| 2.5 | Replication Strategies | Choose where writes go and how copies keep up | primary-backup, leader/follower, chain replication, sync vs. async replication, failover, split brain, fencing |
| 2.6 | Quorum Systems | Tune reads and writes for the consistency you need | quorums as intersecting set systems, majority and grid quorums, load and availability, sloppy quorums, hinted handoff, why quorums alone aren't linearizable |

**Boss problem 2:** For a replicated store with $N = 5$, pick $(R, W)$ pairs that give (a) strong reads, (b) fast writes tolerating one down replica, (c) reads and writes both surviving two failures — or prove the last is impossible. Then take an interleaved client trace and decide the strongest consistency model it satisfies, justifying each rejection.

### Module 3: Consensus and the CAP Theorem

The heart of the course: getting nodes to agree despite failures — why it's provably impossible in the worst case, exactly which extra assumption each real protocol buys its way out with, and what the CAP theorem says you must surrender.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The Consensus Problem and FLP | State consensus precisely and explain why it can't be solved in the worst case | agreement/validity/termination, bivalent and univalent configurations, the critical step, why one crash is enough |
| 3.2 | Failure Detectors and Escaping FLP | Name the extra assumption every working protocol adds | completeness and accuracy, $\Diamond P$ and $\Omega$, partial synchrony, randomized consensus, the eventual-leader abstraction |
| 3.3 | Paxos | Trace how a value gets chosen and argue it's safe | proposers/acceptors/learners, prepare/promise/accept, majority intersection, why only one value is chosen |
| 3.4 | Raft | Run leader election and log replication a human can actually follow | terms, leader election, log matching, commit index, safety via up-to-date votes |
| 3.5 | The CAP Theorem and PACELC | Prove it, then decide what a partition forces you to give up | the two-partition argument, CP vs. AP systems, what CAP does not say, PACELC's latency corollary |
| 3.6 | State-Machine Replication | Turn a consensus log into a fault-tolerant service | deterministic state machines, replicating the log not the state, linearizable reads and leases, snapshots and log compaction |

**Boss problem 3:** Two Paxos acceptors have promised proposal numbers and one has accepted an old value; walk a new proposer through prepare→accept and show which value it is forced to re-propose and why safety holds. Then, for the same cluster hit by a partition, state whether a Raft-based and a Dynamo-based deployment stay available, and map each onto CP/AP.

### Module 4: Fault Tolerance and Distributed Data

Scale the ideas up: commit transactions across machines, then survey how MapReduce, DHTs, and blockchains push replication and agreement to internet scale — including adversarial failures.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Distributed Transactions and 2PC | Commit one transaction atomically across many nodes | atomic commit, coordinator/participants, prepare/commit, uncertainty, the blocking window, the coordinator log |
| 4.2 | Three-Phase Commit and Beyond | See how to unblock 2PC, and why consensus is the honest fix | 3PC's pre-commit phase, non-blocking under crashes, its network-partition weakness, Paxos/Raft-backed commit |
| 4.3 | MapReduce and Large-Scale Processing | Structure a computation so failures are just retries | map/shuffle/reduce, data locality, re-execution as fault tolerance, determinism, stragglers, where the model breaks down |
| 4.4 | Consistent Hashing and DHTs | Spread data over thousands of nodes with no coordinator | consistent hashing, the ring, virtual nodes, Chord routing, churn and replication for durability |
| 4.5 | Byzantine Fault Tolerance | Agree when some nodes lie | Byzantine generals, the $3f+1$ bound and why it is tight, quorum intersection with liars, a PBFT sketch |
| 4.6 | Nakamoto Consensus and Blockchains | Trade certainty for openness | proof-of-work, longest-chain rule, probabilistic finality, the double-spend calculation, what Sybil resistance buys |

**Boss problem 4:** A 2PC coordinator crashes after some participants voted yes but before any commit message; show which participants block and construct the log state where no survivor can safely decide, then explain what 3PC or a consensus-backed commit changes. Finally, size a Byzantine cluster: how many nodes tolerate two liars, and why proof-of-work relaxes the assumption behind that bound.

## Sources of truth

- Van Steen & Tanenbaum, *Distributed Systems* — for terminology and the overall map.
- Cachin, Guerraoui & Rodrigues, *Introduction to Reliable and Secure Distributed Programming* — for failure models, broadcast abstractions and failure detectors.
- Lamport, "Time, Clocks, and the Ordering of Events" and Ongaro & Ousterhout, "In Search of an Understandable Consensus Algorithm (Raft)" — for the primary-source treatment of time and consensus.
- Kleppmann, *Designing Data-Intensive Applications* — for the practical framing of consistency, replication, and partitioning.

---

## Revision notes

**2026-09-10 — extended from 20 to 25 lessons; modules re-aimed against four built neighbours.**

*Answer-input doctrine (standing rule for every CS course on this platform).* Every problem in this
course resolves to a **number**, a **vector timestamp or bit string**, a **classification with its
named reason**, an **explicit interleaving or protocol trace as an ordered step list**, a **concrete
counterexample instance**, or a **hand derivation**. Never "draw the space-time diagram" — the app
has no drawing input, and diagrams appear *in* lessons, never as the deliverable. Because so many
correct answers here are non-unique (interleavings, partition scenarios, counterexample traces,
schedules that block), **every such problem's solution opens with a one-line accept criterion before
the worked exemplar**, so self-grading in the app is possible.

*Five lessons added.* Three fill machinery the original syllabus **consumed without teaching**:

- **1.6 Consistent Cuts and Global Snapshots** — 1.1 asserts "no global state" and nothing showed
  how to capture one. Chandy–Lamport is also the cleanest payoff of happens-before.
- **1.7 Ordered Broadcast** — boss problem 1 asks what delivery guarantee makes a total order real,
  2.2's causal consistency needs causal delivery, and 3.1's "total-order broadcast is equivalent to
  consensus" had nowhere to stand.
- **3.2 Failure Detectors and Escaping FLP** — the original 3.1 listed "randomness, timing, failure
  detectors" as circumventions and taught none of them, leaving Paxos's liveness argument ungrounded.

Two split a lesson that carried two separable skills:

- **2.3 / 2.4** — converging by merging (version vectors, anti-entropy, read repair) is a different
  skill from the algebra that makes merging *provably* work (join-semilattices, CRDT proofs).
- **4.5 / 4.6** — the $3f+1$ bound under a fixed membership and Nakamoto's probabilistic agreement
  under open membership are different results with different assumptions, and running them together
  is what makes people think proof-of-work "solves Byzantine generals".

*Scope re-aimed, not cut* (the `systems-biology` / `computer-architecture` precedent). The
ownership grep found [`databases` 4.6](../databases/lessons/04-06-nosql-and-distributed-data.md)
already owns $R+W>N$, sharding and the practitioner's CAP, and
[`computer-architecture` 5.3](../computer-architecture/lessons/05-03-multiprocessors-cache-coherence.md)
owns shared-memory sequential consistency. Accordingly 2.6 was re-aimed onto quorums as intersecting
set systems, 3.5 onto the CAP *proof*, and 2.2 onto replicated objects. The cessions are listed in
the scope table above and on the reference card.

*Boss problem 2(c) is a decision, not a hint.* It is **possible**: with $N = 5$, $R = W = 3$
survives two failures on each side and still satisfies $R + W = 6 > 5$. The "or prove the last is
impossible" phrasing is deliberate, and the correct answer is to exhibit the setting.
