# Distributed Systems · Lesson 4.2: Three-phase commit and consensus-backed commit

> ⏱ ~15 min · Module 4: Fault Tolerance and Distributed Data · Builds on: [4.1 (2PC)](04-01-distributed-transactions-and-2pc.md), [3.3 (Paxos)](03-03-paxos.md), [3.6 (state-machine replication)](03-06-state-machine-replication.md) · Unlocks: [4.3 (MapReduce)](04-03-mapreduce-and-large-scale-processing.md)

## Why this matters

[4.1](04-01-distributed-transactions-and-2pc.md) left the transaction frozen: coordinator dead, every survivor uncertain, locks held. The obvious response is to add information to the protocol so survivors can work out the answer themselves, and that is exactly what three-phase commit does.

It is worth studying for two reasons, and neither is that you should deploy it. First, **it works under the assumption it was designed for and fails under the one that actually holds**, which makes it the cleanest example in the course of a protocol undone by its system model rather than its logic. Second, **the correct fix turns out to be a sentence long**: the problem was never the number of phases, it was that the decision lived on one machine, so put it somewhere that survives a crash. That "somewhere" is a replicated state machine, and the whole of Module 3 exists to build one.

## The idea

2PC blocks because a participant that has voted yes cannot tell whether the coordinator decided commit or abort. **3PC inserts a phase whose presence carries that information.**

After collecting all yes votes, the coordinator does not commit. It first sends **pre-commit** to everyone and waits for acknowledgements; only then does it send **do-commit**. The extra round buys one clean invariant:

> A participant is in **pre-commit** only if every participant voted yes.

So a survivor can reason. *If any of us is in pre-commit, everybody voted yes, so the decision can only have been commit — commit.* *If none of us is in pre-commit, then nobody can have committed, because committing requires having been pre-committed first — abort.* **Both rules are sound, they cover every case, and no survivor ever blocks.**

And then a partition arrives. The survivors split into two groups. One group contains a pre-committed participant and applies the first rule: **commit**. The other contains none and applies the second: **abort**. Each group reasoned correctly from what it could see, and the transaction has committed on some machines and aborted on others.

**3PC converted a liveness failure into a safety failure.** That is a strictly worse trade — a blocked transaction is recoverable when the coordinator returns, and a half-committed one is not — and it is why 3PC is almost never deployed despite being non-blocking on paper. It assumes a synchronous system with reliable failure detection ([3.2](03-02-failure-detectors-and-escaping-flp.md)'s $P$, the class you cannot build), and real networks partition.

**The honest fix.** The problem in 2PC was never the phase count. It was that the decision was a piece of state on **one** machine, so losing that machine lost the decision. Store the decision on a **majority** instead — a Paxos or Raft group — and a coordinator crash costs nothing, because a new coordinator reads the decision out of the replicated log. The minority side of a partition cannot decide anything, so there is no second answer for it to disagree with.

## The formal version

> **Three-phase commit** (Skeen, 1981).
>
> 1. **canCommit?** Coordinator asks; participants reply yes or no. A yes here does **not** yet commit the participant to anything irrevocable.
> 2. **preCommit.** If all said yes, the coordinator sends `PRE-COMMIT`; participants record it, acknowledge, and are now committed to committing.
> 3. **doCommit.** After a majority — in the original, all — acknowledge, the coordinator sends `DO-COMMIT`.
>
> **Termination rule for survivors:** if any operational participant is in `PRE-COMMIT`, decide commit; otherwise decide abort.

> **Non-blocking, conditionally.** Under **crash faults in a synchronous system with a perfect failure detector**, 3PC is non-blocking: every operational participant decides without waiting for the coordinator.

> **Failure under partition.** With two groups, one containing a pre-committed participant and one not, the termination rule yields commit on one side and abort on the other. **Agreement is violated.**

**Costs.** Against 2PC's 2 round trips and $4n$ messages, 3PC needs **3 round trips** and $6n$ messages, plus an extra forced log write per participant — for a protocol that is unsafe in the model that describes real networks.

> **Consensus-backed commit (Paxos Commit; Gray and Lamport, 2006).** Replace the single coordinator with a consensus group. Run one consensus instance per participant, whose decided value is that participant's vote (`prepared` or `aborted`). The transaction commits if and only if every instance decides `prepared`.

**Why this is non-blocking.** The decision is a function of $n$ consensus outcomes, each stored on a majority of the consensus group. A coordinator crash loses nothing: any node may read the instances and compute the same answer. A participant that is uncertain asks the consensus group rather than the coordinator, and gets an answer as long as a majority of that group is reachable.

**What it still cannot do.** Atomic commit requires **unanimity among participants** ([4.1](04-01-distributed-transactions-and-2pc.md)), and no amount of consensus changes that: if a participant crashes before voting, the only safe decision is abort. What consensus fixes is the *coordinator's* single point of failure, not the participants'. **The fault tolerance you gain is exactly the coordinator's, and that is the one that was causing the blocking.**

**Cost.** Naively this looks expensive — $n$ consensus instances — but the instances run in parallel and the participants can send their votes directly to the acceptors, so the number of **message delays** is 5 against 2PC's 4, with one extra delay to learn the outcome. **One extra message delay, and blocking is gone.** That is the trade, and it is why every modern distributed database does it: Spanner's participants are Paxos groups, and its coordinator is one too.

## Picture

![Two panels. The upper panel shows three-phase commit under a partition: on the left, participants P1 and P2 are in pre-commit, so everyone must have voted yes and the group decides commit; on the right, P3 and P4 are only prepared, so nobody can have committed and the group decides abort. A note states that both rules are sound and applying them on two sides of a partition produces disagreement, destroying atomicity. The lower panel shows consensus-backed commit: participants send votes into a replicated log that holds the decision on a majority, with a note that a minority partition cannot decide anything so there is no second answer to disagree with.](assets/04-02-fig1.svg)

The contrast is the lesson. 3PC gives both sides of a partition enough information to decide, which is exactly the wrong thing to give them. Consensus gives the minority side **nothing** — it cannot form a quorum, so it cannot conclude anything — and that deliberate withholding is what preserves agreement.

## Worked examples

**Example 1 — 3PC recovering from a crash, then failing on a partition.**

Coordinator $C$ with participants $P_1 \ldots P_4$.

**The crash case, which 3PC handles.**

1. `canCommit?` to all four; all reply yes.
2. $C$ sends `PRE-COMMIT` to $P_1$ and $P_2$, which record it and acknowledge.
3. **$C$ crashes** before reaching $P_3$ and $P_4$.
4. The survivors run the termination rule. $P_1$ is in pre-commit, so the group decides **commit** — and it is right, since $C$ would only have sent pre-commit after four yes votes.

**2PC would have blocked here.** All four participants had voted yes and none knew the decision; under 2PC that is the unresolvable case. 3PC resolves it, and this is the whole point of the extra phase.

**The partition case, which it does not handle.** Same start, but at step 3 the network splits $\{P_1, P_2\}$ from $\{P_3, P_4\}$ and $C$ is unreachable from both.

- $\{P_1, P_2\}$: someone is in pre-commit, so **commit**. Locks released, changes durable, results returned to clients.
- $\{P_3, P_4\}$: nobody is in pre-commit, so **abort**. Changes rolled back.

**Atomicity is broken.** Half the transaction committed and half aborted, and when the partition heals there is no record of an error anywhere — each side has a clean log showing a correctly terminated transaction.

**Why no patch fixes this.** A group could require a majority of participants before applying the rule. Then the $\{P_3, P_4\}$ side, being 2 of 4, would refuse — and would **block**, which is what 3PC was invented to avoid. **Any rule strong enough to be safe under partition is strong enough to block**, which is CAP ([3.5](03-05-the-cap-theorem-and-pacelc.md)) arriving in commit protocols: agreement plus availability under partition is not on offer.

**Example 2 — the same failure with a replicated coordinator.**

Coordinator role held by a Raft group $\{C_1, \ldots, C_5\}$, participants $P_1 \ldots P_4$.

1. Participants prepare and send votes; the votes are appended to the Raft log and committed on a majority of the group.
2. The leader computes the decision — all prepared, so commit — and appends `COMMIT` to the log. It commits on a majority.
3. **The leader crashes** before telling any participant.
4. The Raft group elects a new leader ([3.4](03-04-raft.md)). Its log contains the committed `COMMIT` entry — by Leader Completeness, it must — and it sends the decision to the participants.

**No participant ever blocked.** The crash cost one election timeout, typically a few hundred milliseconds, against 2PC's mean time to repair a machine.

**Now the partition**, splitting the Raft group 3–2 with the old leader in the minority.

- The **majority side** elects a leader, which holds the committed decision and delivers it. Participants reachable from that side proceed.
- The **minority side** cannot elect a leader and cannot commit anything. It answers nothing.

**No disagreement is possible, because only one side can ever produce an answer.** Participants stranded with the minority wait — they are *unavailable*, not *wrong* — and resume when the partition heals.

**The general lesson, worth stating as a rule: a protocol that blocks because one machine is unreachable is a protocol whose critical state lives on one machine.** The fix is never more phases; it is to replicate the state. 3PC is the instructive wrong turn, and it is instructive precisely because its logic is sound and its model is not.

## Watch out

- **You might think 3PC is strictly better than 2PC.** It is non-blocking under crash faults and **incorrect** under partitions, where 2PC merely stalls. A stalled transaction recovers when the coordinator returns; a half-committed one requires manual reconciliation and may already have been acted on externally.
- **You might think consensus-backed commit removes the need for unanimity.** It does not. Every participant must still vote yes, so a participant crashing before its vote still forces abort. What consensus removes is the **coordinator** as a single point of failure.
- **You might think replicating the coordinator is expensive.** It adds roughly one message delay, since the votes can go directly to the consensus acceptors and the instances run in parallel. Against 2PC's blocking window — measured in a machine's recovery time — one message delay is not a close call.

## One-liner

> Three-phase commit buys non-blocking by letting both sides of a failure reason their way to an answer, which is fatal the moment a partition gives them different evidence; the real fix is not another phase but moving the decision off the coordinator's disk and onto a majority, which costs one message delay.

## Problems

**P1 (🟢)** A 3PC transaction has a coordinator and 4 participants.

(a) Give the number of round trips and the message count, and compare with 2PC.
(b) The coordinator crashes after sending `PRE-COMMIT` to two of the four participants, with no partition. Give the decision the survivors reach and the rule used.
(c) The coordinator crashes after collecting all yes votes but before sending any `PRE-COMMIT`. Give the decision and the rule.
(d) State what 2PC would have done in case (c).

**P2 (🟡)** A 3PC deployment with participants $P_1 \ldots P_6$ is partitioned into $\{P_1, P_2, P_3\}$ and $\{P_4, P_5, P_6\}$, with the coordinator unreachable from both.

(a) $P_2$ is in `PRE-COMMIT`; nobody else is. Give each group's decision.
(b) State the property violated and what an operator would observe after the partition heals.
(c) The team patches the termination rule to require a majority of all participants before deciding. Give what each group does now, and the new failure mode.
(d) State the general result that (c) illustrates, naming the theorem.

**P3 (🔴, optional)** A team replaces its 2PC coordinator with a 5-node Raft group, keeping 3 participants.

(a) Give the number of coordinator-node failures the deployment now tolerates without blocking, and the number of participant failures.
(b) The Raft group is partitioned 3–2 while all participants remain reachable from both sides. State what happens.
(c) One participant crashes after voting yes; the Raft group is healthy. State what happens to the transaction and to that participant's locks.
(d) State which single point of failure remains, and give the design change that would remove it, with what that change costs.

<details>
<summary>Solutions</summary>

**P1**

(a) 3PC: **3 round trips**, $6n = \mathbf{24 \text{ messages}}$ with $n = 4$.

2PC: 2 round trips and $4n = 16$ messages. So 3PC costs **one more round trip and 50 percent more messages**, plus an extra forced log write per participant for the pre-commit record.

(b) **Commit.** The rule is the termination rule's first clause: if any operational participant is in `PRE-COMMIT`, decide commit — sound because the coordinator sends pre-commit only after every participant has voted yes.

(c) **Abort.** No participant is in `PRE-COMMIT`, so by the second clause nobody can have committed, since committing requires having been pre-committed first. Aborting is safe.

(d) **2PC would have blocked.** All four participants had voted yes and none had learned the decision — [4.1](04-01-distributed-transactions-and-2pc.md)'s unresolvable case, where the survivors cannot distinguish a coordinator that decided commit from one that decided abort.

**This pair, (c) and (d), is exactly what the extra phase buys**, and it is a real gain under crash faults.

**P2**

(a) $\{P_1, P_2, P_3\}$ contains $P_2$ in pre-commit, so it decides **COMMIT**. $\{P_4, P_5, P_6\}$ contains nobody in pre-commit, so it decides **ABORT**.

(b) **Agreement is violated** — the atomicity of the transaction is destroyed, with three participants committed and three rolled back.

After the heal, an operator observes **nothing wrong in any log**. Each side recorded a correctly terminated transaction according to a sound rule; there is no error, no exception and no retry. The inconsistency is only visible in the data — an order recorded with no payment, or an inventory decrement with no shipment — and is typically found days later by a reconciliation job.

**This is the reason 3PC is worse than 2PC in practice, not better:** a blocked transaction is loud and recoverable; this is silent and is not.

(c) With a majority-of-participants requirement, each group is 3 of 6, which is **not** a majority. **Neither group decides, and both block.**

**The new failure mode is exactly the one 3PC was designed to eliminate.** The protocol is now safe under partition and blocking under partition — which is to say, it has become 2PC with two extra round trips.

(d) This is **CAP** ([3.5](03-05-the-cap-theorem-and-pacelc.md)). During a partition, a protocol may be available (both sides answer) or consistent (all sides agree), not both. 3PC's original rule chooses availability and loses agreement; the patched rule chooses agreement and loses availability. **There is no third setting**, and the appearance of one in the unpatched protocol came from assuming a model — synchronous, with perfect failure detection — in which partitions do not occur.

**P3**

(a) **Coordinator-node failures tolerated: 2.** A 5-node Raft group needs a majority of 3, so it survives 2 failures and continues to decide and to answer participants' queries.

**Participant failures tolerated: 0.** Atomic commit requires unanimity — a participant that crashes before voting forces abort, and one that crashes after voting yes leaves its own recovery to do. Consensus does not change this, and it is worth being precise about: **the replication fixed the coordinator, and the participants were never the thing it could fix.**

(b) The **3-node side elects a leader** and continues: it holds the committed log, can decide, and can deliver the decision to all three participants, which are reachable from it. The **2-node side** cannot elect a leader and does nothing.

The transaction proceeds normally. Note the contrast with (P2): the participants being reachable from both sides is harmless, because only one side can produce an answer.

(c) The transaction's outcome depends on when the participant crashed relative to its vote.

If it crashed **before** its vote reached the group, the decision is **abort** — the group waits, times out, and records abort, since a commit requires all votes.

If it crashed **after** its vote was recorded, the group may still decide **commit**, because the vote is durable in the replicated log. The crashed participant, on restart, reads its own `PREPARED` record, asks the consensus group for the outcome, gets it immediately, and completes.

**Its locks are held from the crash until it restarts and recovers**, which is the participant's own recovery time. That window is unavoidable — only that node holds the data — but note the difference from 2PC: it blocks **that participant's rows**, not every participant in the transaction.

(d) **The participants themselves remain single points of failure.** Each holds a unique shard of the data, so its failure stalls any transaction touching it, for the duration of its recovery.

The change that removes it: **make every participant a replicated state machine too**, so that a participant is a Raft group rather than a machine, and a single node's failure is absorbed by its peers. This is Spanner's design — every shard is a Paxos group, and the commit protocol runs between groups rather than between machines.

**What it costs:** every data write now pays a consensus round inside its own group before the commit protocol even begins, so write latency rises by a quorum round trip ([3.5](03-05-the-cap-theorem-and-pacelc.md)'s E-branch), and the hardware bill multiplies by the replication factor. It also does not remove the unanimity requirement: if a whole participant *group* loses its majority, the transaction still cannot commit.

</details>

## Flashback

**From Lesson 4.1 (2PC):** A 2PC transaction has a coordinator and 3 participants. The coordinator crashes, and the survivors' states are: $P_1$ prepared, $P_2$ prepared, $P_3$ committed.

(a) State whether the survivors can decide, what they decide, and the rule.
(b) Now $P_3$ also crashes, leaving $P_1$ and $P_2$. State whether they can decide.
(c) State what $P_1$ and $P_2$ must do with their locks in case (b), and for how long.

<details>
<summary>Solution</summary>

(a) **They can decide: COMMIT.**

$P_3$ has already committed, which is possible only if the coordinator's decision was commit. The rule is the cooperative termination protocol's first clause: **if any operational participant knows the decision, everyone adopts it.** $P_1$ and $P_2$ ask around, learn from $P_3$, and commit.

(b) **They cannot decide.** Both are uncertain — each voted yes and neither learned the outcome — and there is no operational participant who knows the decision or who has yet to vote. Their state is consistent with the coordinator having decided either way.

This is [4.1](04-01-distributed-transactions-and-2pc.md)'s blocking theorem, and the sting is that the decision *was* commit and $P_3$ *did* commit, possibly returning success to a client. If $P_1$ and $P_2$ guessed abort they would break atomicity irreversibly.

(c) They must **hold their locks**, blocking every other transaction that touches those rows.

For how long: **until either the coordinator or $P_3$ recovers** — whichever comes first — since both hold the decision durably. That is a machine's recovery time, not a timeout, and it is why [4.1](04-01-distributed-transactions-and-2pc.md) priced the blocking window in mean time to repair rather than in milliseconds.

</details>

## Connections

- **Backward:** the blocking that 3PC attacks is [4.1](04-01-distributed-transactions-and-2pc.md)'s, and the partition failure is [3.5](03-05-the-cap-theorem-and-pacelc.md)'s theorem in a commit protocol's clothing. The fix is [3.6](03-06-state-machine-replication.md) applied to one specific piece of state — the decision.
- **Forward:** [4.3](04-03-mapreduce-and-large-scale-processing.md) takes the opposite approach to failure: instead of agreeing on an outcome, make every unit of work idempotent and simply re-run it, which removes the need for a commit protocol at all.
- **Sideways:** 3PC's history is a useful warning about system models. Its proof is correct in the synchronous model with perfect failure detection, and that model is precisely the one [3.2](03-02-failure-detectors-and-escaping-flp.md) says cannot be implemented asynchronously. **The protocol is not wrong; the assumption is unavailable** — the same relationship as a numerical method that is stable only under a step-size condition nobody checks.
