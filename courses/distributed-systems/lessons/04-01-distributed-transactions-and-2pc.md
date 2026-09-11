# Distributed Systems · Lesson 4.1: Distributed transactions and two-phase commit

> ⏱ ~15 min · Module 4: Fault Tolerance and Distributed Data · Builds on: [3.6 (state-machine replication)](03-06-state-machine-replication.md), [1.2 (failure models)](01-02-failure-models-and-the-network.md), [`databases` 4.1 (ACID)](../../databases/lessons/04-01-transactions-and-the-acid-properties.md) · Unlocks: [4.2 (3PC and consensus-backed commit)](04-02-three-phase-commit-and-consensus-backed-commit.md)

## Why this matters

[`databases`](../../databases/syllabus.md) Module 4 gave you transactions on one machine: serializability, two-phase locking, write-ahead logging, recovery. Every bit of it assumed the data lives in one place with one log and one fate.

Split the data across machines and atomicity becomes a *distributed agreement* problem. Either every participant commits or none does, and the participants cannot see each other. Two-phase commit is the classic answer, it is what every distributed database and message broker implements, and — this is the part worth learning properly — **it has a known, unfixable flaw**, which is not a bug in an implementation but a property of the problem as posed.

Note the boundary. The mechanics of ACID, serializability and logging belong to [`databases` 4.1](../../databases/lessons/04-01-transactions-and-the-acid-properties.md) through [4.5](../../databases/lessons/04-05-recovery-write-ahead-logging-and-aries.md). This lesson owns the *distributed* part: agreement on the outcome, and what happens when a node disappears mid-decision.

## The idea

The **atomic commit** problem. Several participants each did part of a transaction. Each can vote **yes** (I have done my part durably and can commit whenever told) or **no** (I cannot). The requirements are almost consensus and not quite:

Everyone who decides must decide the same thing; the decision is **commit** only if *every* participant voted yes; and if all vote yes and nothing fails, the decision must be commit.

Notice the asymmetry. Consensus needs a *majority*; atomic commit needs **unanimity**. A single participant voting no vetoes the transaction, and — this is the expensive consequence — **a single participant being unreachable blocks it**, because the coordinator cannot conclude anything from silence ([1.1](01-01-why-distributed-systems-are-hard.md)).

Two-phase commit does the obvious thing. **Phase 1:** the coordinator asks everyone to prepare; each participant makes its work durable, force-writes a *prepared* record, and votes. **Phase 2:** the coordinator force-writes the decision — commit if all voted yes, abort otherwise — and tells everyone.

The flaw lives in the gap. A participant that has voted **yes** has given up the right to abort on its own: it promised it could commit. But it has not been told the outcome, so it cannot commit either — another participant may have voted no. It is **uncertain**, and it must hold its locks and wait.

If the coordinator crashes during that window, the participant waits for the coordinator to come back. Not for a timeout, not for a quorum — **for that one machine.** And it is holding locks the whole time, so other transactions touching the same rows queue behind it.

## The formal version

> **Atomic commitment.** Each participant votes yes or no; each may decide commit or abort.
> - **Agreement.** No two participants decide differently.
> - **Validity (abort).** If any participant votes no, or any participant fails before voting, abort is the only permitted decision.
> - **Validity (commit).** If all participants vote yes and no failures occur, the decision is commit.
> - **Termination.** Every correct participant eventually decides.

> **Two-phase commit.**
>
> *Phase 1.* Coordinator sends `PREPARE` to all $n$ participants. Each participant makes its updates durable, **force-writes a `PREPARED` record to its log**, and replies `YES`; or replies `NO` and aborts locally.
>
> *Phase 2.* If all votes are `YES`, the coordinator **force-writes a `COMMIT` record** and sends `COMMIT` to all; otherwise it force-writes `ABORT` and sends `ABORT`. Participants apply the decision, log it, and acknowledge.

**The two force-writes are the correctness of the protocol, not an optimisation.** A participant that votes yes without a durable prepared record cannot honour its promise after a crash ([1.2](01-02-failure-models-and-the-network.md)'s crash-recovery rule). A coordinator that sends a decision it has not durably recorded may, on restart, decide the opposite.

> **Uncertainty.** A participant is *uncertain* from the moment it votes yes until it learns the decision. While uncertain it may not unilaterally commit or abort, and it must hold its locks.

> **The blocking theorem.** If the coordinator fails and **every** operational participant is uncertain, no operational participant can decide. 2PC is a **blocking** protocol.

*Why.* The survivors' state is consistent with two worlds: the coordinator received all yes votes and decided commit before crashing, or it timed out on a vote it never received and decided abort. **These are indistinguishable to the survivors** ([1.1](01-01-why-distributed-systems-are-hard.md) again), and the two worlds require opposite decisions.

> **Cooperative termination protocol.** An uncertain participant asks the others. If any knows the decision, it adopts it. If any has **not yet voted**, it votes no and the group may safely abort. Only if **all** operational participants are uncertain does the group block.

This shrinks the blocking window considerably and does not eliminate it, and the residual case is exactly the theorem's.

**Costs.** For a coordinator and $n$ participants:

| quantity | value |
|---|---|
| messages | $4n$ (prepare, vote, decision, ack) |
| round trips on the critical path | 2 |
| forced log writes on the critical path | $n$ participant prepares $+ 1$ coordinator decision |

With a 0.5 ms round trip and a 1 ms fsync, a distributed commit costs roughly $2(0.5) + 2(1) = 3$ ms against about 1 ms for a single-node commit — **triple the latency, plus the locks are held for all of it**, which is the part that hurts throughput.

## Picture

![A message sequence chart with a coordinator lifeline above two participant lifelines. The coordinator sends prepare to both participants, which force-write a prepared record and reply vote yes. A dashed box drawn along participant P1's lifeline, from its vote until the decision arrives, is labelled as the uncertainty window in which P1 has voted yes and cannot decide alone. The coordinator force-writes its decision and sends commit to both, which acknowledge. A note explains that a coordinator crash anywhere inside the dashed box leaves P1 stuck, unable to abort because the decision may have been commit and unable to commit because someone may have voted no.](assets/04-01-fig1.svg)

The dashed box is the whole lesson. Everything outside it is safe — before voting, a participant may abort freely; after learning the decision, it simply applies it. **The protocol's entire fragility is the interval between a promise and its answer.**

## Worked examples

**Example 1 — four coordinator crashes, four different outcomes.**

Coordinator $C$ with participants $P_1, P_2, P_3$. In each case $C$ crashes and the survivors run the cooperative termination protocol.

**(a) $C$ crashes before sending any `PREPARE`.** No participant has voted. Each times out waiting and **aborts unilaterally** — entirely safe, because a commit decision requires all yes votes and none were cast.

**(b) $C$ crashes after $P_1$ and $P_2$ voted yes, but $P_3$ never received `PREPARE`.** $P_1$ and $P_2$ are uncertain; $P_3$ is not — it has not voted. Under cooperative termination $P_3$ **votes no**, and the group safely **aborts**. No commit decision can have been reached, since $C$ never had $P_3$'s vote.

**(c) $C$ crashes after sending `COMMIT` to $P_1$ only.** $P_1$ has committed and knows the decision. $P_2$ and $P_3$ ask around, learn from $P_1$, and **commit**. The protocol recovers cleanly.

**(d) $C$ crashes after receiving all three yes votes and force-writing `COMMIT`, but before sending any decision.** All three participants are uncertain. Nobody knows the outcome, nobody may guess, and **all three block**, holding locks, until $C$ recovers and reads its log.

**Case (d) is the blocking theorem in one sentence: the decision exists, and it exists only on the crashed machine's disk.** No survivor may abort, because the decision was commit; no survivor may commit, because from where they stand the decision could equally have been abort.

**A sharper variant, and the answer to boss problem 4.** Suppose $C$ crashes after sending `COMMIT` to $P_1$ only, **and $P_1$ crashes too.** $P_2$ and $P_3$ are uncertain and their only informed peer is gone. If they abort, they contradict $P_1$, which committed and may already have shown the result to a user. **Atomicity is broken the moment they guess**, so they must block — and the cooperative termination protocol, asking only each other, has nothing to learn.

**Example 2 — pricing the block.**

A payments service runs 2PC across an accounts shard and a ledger shard, 200 transactions per second, of which 40 per second touch the busiest account.

**Normal cost.** Two round trips and two forced log writes, roughly 3 ms against 1 ms for a local commit. Acceptable.

**A coordinator crash with a 30-second mean time to recovery**, during which every uncertain participant holds its locks. Transactions queueing on the busiest account:

$$40 \times 30 = \mathbf{1200 \text{ transactions blocked}}.$$

They do not fail fast; they wait, holding connections and thread pool slots, and the queue grows for the full 30 seconds. **The characteristic failure of 2PC in production is not data loss — it is a slow, spreading stall that looks like a capacity problem.**

**The three standard mitigations, and what each really does.**

**Make the coordinator recover fast.** A hot standby reading the coordinator's log cuts 30 seconds to perhaps 2. Note what this is: the standby must know the decision, which means the coordinator's log must be replicated, which means you have introduced a small replication problem to fix the commit problem — and if you replicate it *properly*, you have arrived at [4.2](04-02-three-phase-commit-and-consensus-backed-commit.md).

**Shorten the window.** Keep phase 1 as short as possible and prepare participants as late as possible. Helps proportionally; changes nothing structural.

**Avoid the distributed transaction.** Put the accounts and the ledger on the same shard so the commit is local, or restructure the operation as a saga — a sequence of local transactions with compensating actions — which gives up atomicity in exchange for never blocking. **This is by far the most common answer in practice**, and it is worth saying plainly: most systems solve distributed commit by arranging not to need it.

## Watch out

- **You might think a participant can time out and abort.** Before voting, yes. After voting yes, never — it has promised it can commit, and the coordinator may have counted that promise and decided commit. **A timeout in the uncertainty window is not permission to guess.**
- **You might think 2PC is consensus.** It is strictly harder in one respect and weaker in another. It needs **unanimity** rather than a majority, so it tolerates *no* participant failures at all — a crashed participant forces abort at best and blocks at worst — whereas consensus tolerates a minority. That difference is why 2PC blocks and Paxos does not.
- **You might think the cooperative termination protocol fixes blocking.** It resolves every case where some operational participant is *not* uncertain, which is most of them. The case where all survivors are uncertain is unfixable within 2PC, and it is exactly the case a coordinator crash after collecting all votes produces.

## One-liner

> Two-phase commit works by making every participant promise it can commit before anyone commits, and the promise is the problem: between giving it and hearing the answer a participant may neither commit nor abort, so if the coordinator dies in that window the transaction and its locks are frozen until that one machine comes back.

## Problems

**P1 (🟢)** A 2PC transaction has a coordinator and 5 participants.

(a) Give the number of messages in a successful commit, counting prepare, vote, decision and acknowledgement.
(b) Give the number of forced log writes on the critical path.
(c) With a 0.8 ms round trip and a 1.5 ms fsync, give the commit latency and compare it with a single-node commit needing one fsync.
(d) State what happens if one participant is unreachable when `PREPARE` is sent, and why that outcome is forced.

**P2 (🟡)** Coordinator $C$ with participants $P_1, P_2, P_3, P_4$. For each state, say whether the survivors can decide, what they decide, and the rule used. $C$ has crashed in every case.

(a) $P_1$ prepared, $P_2$ prepared, $P_3$ prepared, $P_4$ has not voted.
(b) $P_1$ committed, $P_2$ prepared, $P_3$ prepared, $P_4$ prepared.
(c) $P_1$ prepared, $P_2$ prepared, $P_3$ prepared, $P_4$ prepared.
(d) $P_1$ aborted, $P_2$ prepared, $P_3$ has not voted, $P_4$ prepared.

**P3 (🔴, optional)** A 2PC deployment runs 500 transactions per second across two shards; 120 per second contend on one hot key. The coordinator's mean time to recovery is 45 seconds.

(a) Give the number of transactions that pile up behind the held locks during one coordinator failure.
(b) Construct the log state, as an ordered step list, in which **no** survivor can safely decide even with the cooperative termination protocol, naming which nodes crashed.
(c) State precisely why the cooperative termination protocol cannot resolve your state.
(d) The team proposes that after 60 seconds of uncertainty, participants abort. Give the execution in which this loses atomicity, and state what the participants would have to know for the rule to be safe.

<details>
<summary>Solutions</summary>

**P1**

(a) $4n$ with $n = 5$: 5 prepares, 5 votes, 5 decisions, 5 acknowledgements $= \mathbf{20 \text{ messages}}$.

(b) **6**: each of the 5 participants force-writes its `PREPARED` record before voting, and the coordinator force-writes its decision before sending it. (The participants' commit records are also written, but can be written lazily after acknowledging, so they are off the critical path.)

(c) Two round trips and two sequential fsyncs on the critical path — the participants' prepares happen in parallel with each other, and the coordinator's decision write follows:

$$2(0.8) + 2(1.5) = 1.6 + 3.0 = \mathbf{4.6 \text{ ms}}$$

A single-node commit needs one fsync: **1.5 ms**. The distributed commit is about **three times slower**, and more importantly holds its locks for all 4.6 ms rather than 1.5, so the contention cost scales the same way.

(d) The transaction **aborts**.

It is forced because the coordinator cannot distinguish an unreachable participant from a crashed one ([1.1](01-01-why-distributed-systems-are-hard.md)), and a commit decision requires *every* participant's yes vote. Committing without one would risk a participant that voted no or could not prepare, which would break atomicity. **Unanimity means any single absence is a veto** — which is the sense in which 2PC tolerates zero participant failures.

**P2**

(a) **Can decide: ABORT.** $P_4$ has not voted, so it is free to vote no; a commit decision is impossible, since it would have required $P_4$'s yes. The rule is the cooperative termination protocol's second clause: **an unvoted participant can unstick the group by voting no.**

(b) **Can decide: COMMIT.** $P_1$ has already committed, so the global decision was commit; the others adopt it. The rule is the first clause: **if any operational participant knows the decision, everyone takes it.**

(c) **Cannot decide — all block.** Every survivor is uncertain: each voted yes and none learned the outcome. The coordinator may have decided either way, and the two worlds are indistinguishable. This is the blocking theorem, and it is exactly the case the cooperative termination protocol cannot touch.

(d) **Can decide: ABORT.** $P_1$ has aborted, so the global decision was abort. (Independently, $P_3$ has not voted and could force an abort by voting no — two separate routes to the same answer, which is a good sanity check.)

**P3**

(a) $120 \times 45 = \mathbf{5400 \text{ transactions}}$ pile up behind the held locks.

They do not fail — they wait, occupying connections and thread-pool slots for up to 45 seconds each, which is why a coordinator failure shows up first as connection-pool exhaustion in services that have nothing to do with the hot key.

(b) *Accept criterion: any state in which every surviving participant is uncertain, achieved either by all survivors having voted yes with no decision delivered, or by the only informed participant having crashed alongside the coordinator.*

The sharper of the two constructions:

1. Coordinator $C$ sends `PREPARE` to $P_1$ and $P_2$.
2. Both force-write `PREPARED` and vote yes.
3. $C$ force-writes `COMMIT` to its log.
4. $C$ sends `COMMIT` to $P_1$, which applies it, commits, releases its locks, and **returns success to a client**.
5. **$C$ crashes** before sending anything to $P_2$.
6. **$P_1$ crashes.**

The surviving participant is $P_2$, uncertain. The decision `COMMIT` exists on two disks, both unreachable.

(c) The cooperative termination protocol has two ways to make progress: find a participant that **knows** the decision, or find one that **has not voted**. Here $P_2$ is the only operational participant, it does not know the decision, and it has voted. There is nobody to ask and nothing to learn.

More fundamentally, $P_2$'s state is consistent with two worlds — $C$ decided commit, or $C$ decided abort after failing to hear a vote — and no message available to $P_2$ separates them. **This is [1.1](01-01-why-distributed-systems-are-hard.md)'s indistinguishability, and no protocol that asks only the survivors can resolve it.**

(d) The execution is the one just constructed: at 60 seconds $P_2$ aborts and rolls back its part, while $P_1$ **committed** at step 4 and told a client so. The transaction is now half-committed — **atomicity is lost**, and in the payments setting that means money moved on one shard and not the other, with a customer holding a success message.

For the rule to be safe, the participants would have to know that **no participant has committed**, which requires knowing the coordinator's decision — precisely the thing they lack. The honest statement: **a timeout-based abort trades a liveness problem for a correctness problem**, which is the same bad trade as [3.1](03-01-the-consensus-problem-and-flp.md)'s "decide after 10 seconds" and [3.6](03-06-state-machine-replication.md)'s undersized lease.

The correct fix is to remove the single point of failure rather than to guess around it: replicate the coordinator's decision so that it survives the crash, which is [4.2](04-02-three-phase-commit-and-consensus-backed-commit.md).

</details>

## Flashback

**From Lesson 3.6 (state-machine replication):** A replicated key-value service applies commands from a Raft log. A developer adds a command handler containing `if random() < 0.1: sample_and_log(key)`.

(a) State whether this breaks determinism, and what the observable consequence is.
(b) State whether the same objection applies to `if hash(key) % 10 == 0: sample_and_log(key)`.
(c) Give the general rule for placing nondeterminism in a replicated state machine.

<details>
<summary>Solution</summary>

(a) **It breaks determinism if the sampling has any effect on replicated state**, and is harmless if the logging is purely a side channel that no replicated value depends on.

The distinction is what makes this a good trap. If `sample_and_log` only writes to an observability pipeline, the replicas' *state machines* remain identical and nothing diverges — you simply get different samples on different replicas, which is usually what you wanted. If it increments a counter stored in the state machine, or records the sample into replicated state, then the replicas diverge silently from that moment, and nothing in the consensus layer notices, because the logs agree perfectly.

(b) **No, the same objection does not apply.** `hash(key) % 10` is a pure function of the command's own contents, so every replica computes the same answer and takes the same branch. It is deterministic sampling, and it samples the same keys everywhere — which is a different property, sometimes better (comparable across replicas) and sometimes worse (a biased fixed subset).

(c) **Nondeterminism must be resolved once, by the leader, and carried in the command; the state machine may only be a pure function of its prior state and the command.**

Everything else follows: timestamps, ids, random choices and external lookups all move into the log entry, and anything the state machine computes itself must depend only on inputs every replica has.

</details>

## Connections

- **Backward:** the durability of the `PREPARED` and decision records is [1.2](01-02-failure-models-and-the-network.md)'s crash-recovery rule and the same write-ahead discipline as [`databases` 4.5](../../databases/lessons/04-05-recovery-write-ahead-logging-and-aries.md); the blocking argument is [1.1](01-01-why-distributed-systems-are-hard.md)'s indistinguishability, and the locks held during uncertainty are [`databases` 4.3](../../databases/lessons/04-03-two-phase-locking-deadlock-and-granularity.md)'s two-phase locking extended across machines.
- **Forward:** [4.2](04-02-three-phase-commit-and-consensus-backed-commit.md) tries to unblock this with an extra phase, shows why that fails under partition, and then fixes it properly by making the coordinator a replicated state machine ([3.6](03-06-state-machine-replication.md)).
- **Sideways:** the contrast with consensus is the sharpest one in the course: 2PC requires **unanimity** and therefore tolerates no participant failures, while [3.3](03-03-paxos.md) requires a **majority** and tolerates a minority. Both are agreement problems; the difference in the required quorum is the entire difference in their fault tolerance.
