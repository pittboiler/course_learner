# Distributed Systems — Syllabus

> Computer Science · Tier 2 · ~20 lessons · Prereqs: [operating-systems](../operating-systems/syllabus.md), [computer-networks](../computer-networks/syllabus.md) · Roadmap id: `distributed-systems`

## Goal

Make you fluent in the core problem of distributed computing: getting many independent, unreliable machines that can only see each other through a lossy, delay-prone network to behave like one correct system. You'll be able to reason about time without a global clock, choose a consistency model on purpose, run a replicated state machine through a real consensus protocol, and say precisely what CAP forces you to give up. It deliberately skips production ops/SRE detail and the internals of any one framework — the aim is the timeless ideas, not this year's tooling.

## Dangerous Checklist

When you finish, you can:

- [ ] Classify a system by its timing and failure model, and explain why asynchrony makes so many problems impossible or expensive
- [ ] Order events across machines with Lamport and vector clocks, and read off which pairs are concurrent
- [ ] Design an RPC layer that survives lost, duplicated, and reordered messages, and reason about its delivery semantics
- [ ] State linearizability, sequential, causal, and eventual consistency precisely, and tell a real trace's model apart from another
- [ ] Configure read/write quorums for a target consistency-availability trade-off and prove when reads see the latest write
- [ ] Explain the FLP impossibility result and why real consensus protocols still work in practice
- [ ] Trace a full round of Paxos and a Raft leader election, and argue why each is safe
- [ ] Apply the CAP theorem to a partitioned system and decide what to sacrifice, then defend the choice
- [ ] Build a fault-tolerant service as a replicated state machine on top of a consensus log
- [ ] Run a distributed transaction through two- and three-phase commit and identify exactly where each can block
- [ ] Explain how MapReduce, consistent hashing, and Byzantine agreement scale these ideas to thousands of nodes

## Modules

### Module 1: Models, Time, and Communication

Build the vocabulary: what a distributed system is, how it fails, how nodes talk, and how to reason about "before" when there is no shared clock.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Why It's Hard | Name the sources of difficulty and pick a system model | partial failure, asynchrony, no global state, the eight fallacies, synchronous vs. asynchronous models |
| 1.2 | Failure Models | Classify failures and design against the ones you'll actually see | crash-stop, crash-recovery, omission, Byzantine, fail-stop detectors, timeouts as suspicion |
| 1.3 | RPC and Message Passing | Turn a network into something you can program against | request-reply, marshalling, at-most-once / at-least-once / exactly-once, idempotency, partial-failure semantics |
| 1.4 | Physical Clocks | Say how far apart two real clocks can drift and how to pull them together | clock skew and drift, NTP, Cristian's and Berkeley algorithms, why physical time alone can't order events |
| 1.5 | Logical Time | Order events causally with no clock at all | happens-before, Lamport timestamps, vector clocks, concurrency detection |

**Boss problem 1:** Given an event log from three processes with message sends/receives, assign Lamport and vector timestamps, list every pair of concurrent events, and exhibit a pair that Lamport clocks wrongly appear to order — then explain what delivery guarantee an RPC layer would need to make the total order real.

### Module 2: Consistency and Replication

Once you copy data onto many machines, "the value" stops being well-defined. Pin down what "consistent" means and how replication protocols deliver each level.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Linearizability | State the strongest single-object guarantee and test a trace for it | atomic/linearizable objects, real-time order, the linearization point, why it composes |
| 2.2 | Sequential and Causal Consistency | Trade real-time order for something cheaper but still sane | sequential consistency, causal consistency, session guarantees (read-your-writes, monotonic reads) |
| 2.3 | Eventual Consistency and Conflict Resolution | Let replicas diverge and still converge | eventual convergence, last-writer-wins, version vectors, anti-entropy, CRDTs (a taste) |
| 2.4 | Replication Strategies | Choose where writes go and how copies keep up | primary-backup, leader/follower, chain replication, sync vs. async replication, failover |
| 2.5 | Quorum Systems | Tune reads and writes for the consistency you need | read/write quorums, the $R + W > N$ rule, sloppy quorums, hinted handoff, Dynamo-style availability |

**Boss problem 2:** For a replicated store with $N = 5$, pick $(R, W)$ pairs that give (a) strong reads, (b) fast writes tolerating one down replica, (c) reads and writes both surviving two failures — or prove the last is impossible. Then take an interleaved client trace and decide the strongest consistency model it satisfies, justifying each rejection.

### Module 3: Consensus and the CAP Theorem

The heart of the course: getting nodes to agree despite failures — why it's provably impossible in the worst case, how real protocols dodge that, and what the CAP theorem says you must surrender.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The Consensus Problem and FLP | State consensus precisely and explain why it can't be solved in the worst case | agreement/validity/termination, FLP impossibility, the role of a single crash, circumventions (randomness, timing, failure detectors) |
| 3.2 | Paxos | Trace how a value gets chosen and argue it's safe | proposers/acceptors/learners, prepare/promise/accept, majority intersection, why only one value is chosen |
| 3.3 | Raft | Run leader election and log replication a human can actually follow | terms, leader election, log matching, commit index, safety via up-to-date votes |
| 3.4 | The CAP Theorem | Decide what a partition forces you to give up | consistency vs. availability under partition, CP vs. AP systems, PACELC's latency corollary |
| 3.5 | State-Machine Replication | Turn a consensus log into a fault-tolerant service | deterministic state machines, replicating the log not the state, linearizability from SMR, snapshots and log compaction |

**Boss problem 3:** Two Paxos acceptors have promised proposal numbers and one has accepted an old value; walk a new proposer through prepare→accept and show which value it is forced to re-propose and why safety holds. Then, for the same cluster hit by a partition, state whether a Raft-based and a Dynamo-based deployment stay available, and map each onto CP/AP.

### Module 4: Fault Tolerance and Distributed Data

Scale the ideas up: commit transactions across machines, then survey how MapReduce, DHTs, and blockchains push replication and agreement to internet scale — including adversarial failures.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Distributed Transactions and 2PC | Commit one transaction atomically across many nodes | ACID across machines, coordinator/participants, prepare/commit, the blocking window and coordinator failure |
| 4.2 | Three-Phase Commit and Beyond | See how to unblock 2PC, and why consensus is the honest fix | 3PC's pre-commit phase, non-blocking under crashes, its network-partition weakness, Paxos/Raft-backed commit |
| 4.3 | MapReduce and Large-Scale Processing | Structure a computation so failures are just retries | map/shuffle/reduce, data locality, re-execution as fault tolerance, stragglers, where the model breaks down |
| 4.4 | Distributed Hash Tables | Spread data over thousands of nodes with no coordinator | consistent hashing, the ring, virtual nodes, Chord routing, churn and replication for durability |
| 4.5 | Byzantine Fault Tolerance and Blockchains | Agree when some nodes lie | Byzantine generals, the $3f+1$ bound, PBFT sketch, Nakamoto consensus, proof-of-work as probabilistic agreement |

**Boss problem 4:** A 2PC coordinator crashes after some participants voted yes but before any commit message; show which participants block and construct the log state where no survivor can safely decide, then explain what 3PC or a consensus-backed commit changes. Finally, size a Byzantine cluster: how many nodes tolerate two liars, and why proof-of-work relaxes the assumption behind that bound.

## Sources of truth

- Van Steen & Tanenbaum, *Distributed Systems* — for terminology and the overall map.
- Cachin, Guerraoui & Rodrigues, *Introduction to Reliable and Secure Distributed Programming* — for failure models and consistent abstractions.
- Lamport, "Time, Clocks, and the Ordering of Events" and Ongaro & Ousterhout, "In Search of an Understandable Consensus Algorithm (Raft)" — for the primary-source treatment of time and consensus.
- Kleppmann, *Designing Data-Intensive Applications* — for the practical framing of consistency, replication, and partitioning.
