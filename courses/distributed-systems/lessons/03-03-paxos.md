# Distributed Systems · Lesson 3.3: Paxos

> ⏱ ~15 min · Module 3: Consensus and the CAP Theorem · Builds on: [3.2 (failure detectors)](03-02-failure-detectors-and-escaping-flp.md), [2.6 (quorum systems)](02-06-quorum-systems.md), [3.1 (consensus and FLP)](03-01-the-consensus-problem-and-flp.md) · Unlocks: [3.4 (Raft)](03-04-raft.md), [3.6 (state-machine replication)](03-06-state-machine-replication.md), [4.2 (consensus-backed commit)](04-02-three-phase-commit-and-consensus-backed-commit.md)

## Why this matters

Paxos is the protocol that does what [3.1](03-01-the-consensus-problem-and-flp.md) said cannot be done — safely, always, with no assumption about timing whatsoever — and then admits it may never terminate, exactly as the theorem requires.

Its reputation for difficulty is mostly a reputation for *terse presentation*. The algorithm is two round trips and one rule about which value you are allowed to propose, and its entire safety proof is the quorum intersection of [2.6](02-06-quorum-systems.md) applied once. Understanding it is worth the effort for a reason beyond Paxos itself: **Raft, Zab, Viewstamped Replication and every consensus-backed commit protocol are the same argument with different names**, and once you have seen the intersection do its work, they all read as variations.

## The idea

Three roles, which in practice are the same machines wearing three hats. **Proposers** suggest values. **Acceptors** vote, and are the system's memory. **Learners** find out what was chosen.

Say a value is **chosen** when a majority of acceptors have accepted it. The whole problem is to prevent two different values from ever being chosen, given that proposers do not coordinate and messages may be delayed arbitrarily.

The naive protocol fails immediately: if acceptors simply accept the first thing they hear, two proposers can each collect a different majority... except they cannot, because two majorities intersect, and the shared acceptor cannot accept both. So the naive protocol is *safe* and hopelessly *stuck* — acceptors that refuse to change their minds can end up split 2–2–1 with no majority anywhere and no way forward.

So acceptors must be allowed to accept a second value. And the moment they are, safety is in danger, and one rule rescues it:

> **A proposer may not propose whatever it likes. If any acceptor in its majority has already accepted something, it must re-propose the value accepted with the highest proposal number.**

That is the entire protocol. To apply the rule a proposer must first *find out* what has been accepted, and it must ensure nothing sneaks in behind it while it acts — which is why there are two phases. **Phase 1 asks a majority two questions at once**: "what have you accepted?" and "will you promise to ignore anything older than me?" **Phase 2 then proposes the value the answers force.**

Why this is safe: if some value $v$ was already chosen, it sits on a majority. Any later proposer's phase-1 majority intersects that one, so it hears about $v$, and the rule forces it to propose $v$ again. **A chosen value can only be re-chosen.** Every proposal number after the first successful one proposes the same value, forever.

## The formal version

Proposal numbers are unique per proposer and totally ordered — typically a counter paired with a proposer id.

> **Phase 1 (prepare).** A proposer picks a number $n$ higher than any it has used and sends $\mathrm{prepare}(n)$ to a majority of acceptors.
>
> An acceptor receiving $\mathrm{prepare}(n)$: if $n$ is greater than every proposal number it has already promised, it **promises** never to accept any proposal numbered below $n$, and replies with the highest-numbered proposal it has **accepted**, if any. Otherwise it ignores or rejects.

> **Phase 2 (accept).** If the proposer receives promises from a majority, it sends $\mathrm{accept}(n, v)$ to those acceptors, where
> $$v = \begin{cases} \text{the value of the highest-numbered accepted proposal among the promises}, \\ \text{the proposer's own value, if no promise reported one.} \end{cases}$$
>
> An acceptor receiving $\mathrm{accept}(n, v)$ accepts it unless it has already promised to a number greater than $n$.

> **Chosen.** A value is chosen when a majority of acceptors have accepted a proposal carrying it. Learners find out by having acceptors announce their accepts.

**The safety argument, in full.** Suppose proposal $(m, v)$ is chosen: a majority $M$ accepted it. We show every proposal numbered $n > m$ that is ever *issued* carries value $v$, by induction on $n$.

Assume every issued proposal numbered in $(m, n)$ carries $v$. The proposer of $n$ completed phase 1 with some majority $M'$. Since $M$ and $M'$ are both majorities, **$M \cap M' \ne \emptyset$** — pick $a$ in the intersection. Acceptor $a$ accepted $(m, v)$, and $a$ promised to $n$.

Now, either $a$ promised to $n$ before or after accepting $(m,v)$. If after, $a$'s promise reports $(m,v)$ or something higher-numbered, which by the induction hypothesis also carries $v$. If before, $a$ would have had to accept $(m,v)$ *after* promising to a higher number $n$ — which the acceptor rule forbids. **So the highest-numbered proposal reported to the proposer of $n$ carries $v$, and the rule forces it to propose $v$.** $\square$

**Nowhere in that argument does a clock, a timeout or a failure detector appear.** Safety is unconditional. It holds under arbitrary message delay, reordering, loss and duplication, and under any number of crashes.

> **Liveness.** Two proposers can livelock: $P_1$ completes phase 1 with $n=1$; $P_2$ prepares with $n=2$, invalidating $P_1$'s phase 2; $P_1$ retries with $n=3$, invalidating $P_2$'s phase 2; and so on forever.

This is FLP arriving on schedule, and the standard remedy is to elect a **distinguished proposer** so that only one proposer is active — which is exactly the $\Omega$ failure detector of [3.2](03-02-failure-detectors-and-escaping-flp.md). It cannot be made perfect, and it does not have to be: two proposers active at once costs *progress*, never *correctness*.

> **Multi-Paxos.** To decide a *sequence* of values, run one instance per slot. Since a stable distinguished proposer's phase 1 result carries over, phase 1 can be run **once** for all future slots, leaving one round trip per decision.

That optimisation is what makes Paxos practical, and it is also what turns it into [3.4](03-04-raft.md): a stable leader, a log of slots, and one round trip per entry.

## Picture

![A message sequence chart with a proposer lifeline above three acceptor lifelines. A1 is annotated as having accepted proposal 3 with value X, A2 as having accepted nothing, and A3 as unreachable. The proposer sends prepare with number 7 to A1 and A2, which reply with promises, A1 reporting its earlier accepted value X and A2 reporting nothing. A box records that the highest accepted value is X, so the proposer must propose X. The proposer then sends accept with number 7 and value X to both, and both acknowledge.](assets/03-03-fig1.svg)

Notice what the proposer wanted and what it did. It arrived intending to propose its own value and left having proposed somebody else's, because one acceptor's memory said so. **The acceptors are not voting on a value; they are collectively remembering, and the proposer is obliged to read that memory before it may speak.**

## Worked examples

**Example 1 — a proposer forced to abandon its own value.**

Three acceptors. $A_1$ has promised to 5 and accepted proposal 3 with value X. $A_2$ has promised to 4 and accepted nothing. $A_3$ is unreachable. A new proposer wants to propose Z.

**Phase 1** with $n = 7$, sent to $A_1$ and $A_2$:

- $A_1$: $7 > 5$, so it promises, and reports its accepted proposal $(3, \text{X})$.
- $A_2$: $7 > 4$, so it promises, and reports nothing accepted.

Two promises out of three acceptors is a majority. The highest accepted proposal reported is $(3, \text{X})$, so **the proposer must propose X, not Z.**

**Phase 2:** $\mathrm{accept}(7, \text{X})$ to both, both accept. X is now on a majority — **chosen**.

**Why the rule was necessary here.** The proposer does not know whether X was already chosen. Maybe proposal 3 reached only $A_1$ and no majority ever accepted it; maybe it reached $A_1$ and $A_3$, in which case X *was* chosen and a learner may already have been told so. **The proposer cannot distinguish these**, and the rule makes the distinction unnecessary: proposing X is correct in both worlds. In the first it chooses a value nobody had chosen; in the second it re-chooses the value already chosen.

**That is the shape of the whole protocol** — not "find out what happened", which [1.1](01-01-why-distributed-systems-are-hard.md) says is impossible, but "act in a way that is correct in every world consistent with what you observed".

**A variant worth working.** Suppose instead $A_1$ had accepted $(2, \text{red})$ and $A_2$ had accepted $(4, \text{blue})$. The proposer must take the **higher-numbered** one and propose **blue**. Taking red would be a disaster: proposal 4 may have been chosen, and re-proposing red would choose a second value. The number, not the arrival order or the timestamp, is what ranks them — and it is why proposal numbers must be totally ordered and unique.

**Example 2 — the livelock, and why it is a liveness problem only.**

Proposers $P$ and $Q$ both want to decide, and each retries with a higher number when rejected.

1. $P$ completes phase 1 with $n = 1$; acceptors promise to 1.
2. Before $P$'s accept arrives, $Q$ completes phase 1 with $n = 2$; acceptors now promise to 2.
3. $P$'s $\mathrm{accept}(1, \cdot)$ arrives and is **rejected** — the acceptors have promised to 2.
4. $P$ retries phase 1 with $n = 3$; acceptors promise to 3.
5. $Q$'s $\mathrm{accept}(2, \cdot)$ arrives and is **rejected**.
6. $Q$ retries with $n = 4$. Return to step 3.

**Nothing is ever chosen, and nothing is ever wrong.** No acceptor accepts anything, so no value is chosen, so agreement and validity are trivially satisfied — only termination fails. This is FLP's non-terminating execution, produced here by an adversary that merely has to interleave two proposers.

**The remedies, in ascending order of what they assume.** Randomised backoff before retrying makes the collision unlikely, and assumes nothing — this is the randomisation escape. A **distinguished proposer**, elected by a failure detector, makes it rare and assumes partial synchrony ([3.2](03-02-failure-detectors-and-escaping-flp.md)).

And note what the distinguished proposer is *not*: it is not required for safety, and there may be two of them at once without harm. **The election can be wrong as often as it likes**, which is precisely why an unreliable detector suffices — the only thing an extra leader costs is another round of livelock.

## Watch out

- **You might think acceptors vote on which value is best.** They do not evaluate values at all. An acceptor's entire job is to remember two things — the highest number it has promised to and the highest-numbered proposal it has accepted — and to report them honestly. **The acceptors are the durable memory of the system, and the proposer is a coordinator with no memory of its own.**
- **You might think a proposer can propose its own value if it is "newer".** It may propose its own value only when *no* acceptor in its majority reports an accepted proposal. Otherwise it is compelled, and "newer" is not a notion Paxos has — proposal numbers rank proposals, and they carry no time information at all.
- **You might think the promise is redundant given the accept phase.** It is what stops an older proposal from being accepted *after* the proposer has read the state. Without it, a proposer reads "nothing accepted", and while it prepares its accept, a slower proposal from long ago lands and is accepted — so the proposer's reading was stale and the induction in the safety proof breaks.

## One-liner

> A Paxos acceptor remembers the highest number it has promised to and the highest-numbered value it has accepted; a proposer must ask a majority for both before it may speak, and because any two majorities share an acceptor, a value that was chosen is the only value anyone can ever propose again.

## Problems

**P1 (🟢)** Five acceptors $A_1 \ldots A_5$. Their state: $A_1$ promised 4, accepted $(4, \text{P})$; $A_2$ promised 4, accepted $(4, \text{P})$; $A_3$ promised 2, accepted $(2, \text{Q})$; $A_4$ promised 0, accepted nothing; $A_5$ promised 0, accepted nothing.

(a) State whether any value is already chosen, with the reason.
(b) A proposer runs $\mathrm{prepare}(6)$ to $\{A_3, A_4, A_5\}$. Give each acceptor's reply and the value the proposer must propose.
(c) The same proposer instead runs $\mathrm{prepare}(6)$ to $\{A_1, A_4, A_5\}$. Give the value it must propose.
(d) State what (b) and (c) together show about the protocol, in one sentence.

**P2 (🟡)** Three acceptors. Trace the following, giving each acceptor's promised number and accepted proposal after every step.

1. Proposer $P$ sends $\mathrm{prepare}(1)$ to all three; all reply.
2. $P$ sends $\mathrm{accept}(1, \text{“a”})$ to $A_1$ only, which accepts.
3. Proposer $Q$ sends $\mathrm{prepare}(2)$ to $A_2$ and $A_3$; both reply.
4. $Q$ sends $\mathrm{accept}(2, v)$ to $A_2$ and $A_3$, for the $v$ the rules require.

(a) Give the state after each of the four steps.
(b) Give the value $v$ in step 4, with the reason.
(c) State whether "a" was ever chosen, and whether the outcome in (b) would change if it had been.
(d) A fifth step has $P$ sending $\mathrm{accept}(1, \text{“a”})$ to $A_2$. Give $A_2$'s response and the rule that produces it.

**P3 (🔴, optional)** A team runs Paxos over five acceptors with three proposers, all active.

(a) Give an ordered step list producing a livelock among two of them, and state which consensus property fails.
(b) State why no acceptor can detect the livelock and break it by choosing a value itself.
(c) The team adds a leader election so that normally one proposer is active. Give the failure scenario in which two proposers are active simultaneously, and state the consequence.
(d) A colleague proposes that acceptors reject any proposal number more than 10 above the highest they have seen, "to stop runaway retries". State what this breaks, with an execution.

<details>
<summary>Solutions</summary>

**P1**

(a) **No value is chosen.**

Proposal $(4, \text{P})$ has been accepted by $A_1$ and $A_2$, and $(2, \text{Q})$ by $A_3$ alone. A majority of five is **three**, and no value sits on three acceptors.

The trap is worth naming: "two acceptors agree" is not "chosen", and a learner must see a majority before it may report a decision. P is one acceptor short, which is exactly the situation parts (b) and (c) exploit.

(b) $\mathrm{prepare}(6)$ to $\{A_3, A_4, A_5\}$:

| acceptor | check | reply |
|---|---|---|
| $A_3$ | $6 > 2$ | promise, reports $(2, \text{Q})$ |
| $A_4$ | $6 > 0$ | promise, reports nothing |
| $A_5$ | $6 > 0$ | promise, reports nothing |

Three promises is a majority. The only reported accepted proposal is $(2, \text{Q})$, so the proposer must propose **Q**.

(c) $\mathrm{prepare}(6)$ to $\{A_1, A_4, A_5\}$: $A_1$ promises and reports $(4, \text{P})$; $A_4$ and $A_5$ report nothing. The highest is $(4, \text{P})$, so the proposer must propose **P**.

(d) **Because nothing was chosen yet, two different majorities can force two different values — and that is safe precisely because neither value was on a majority to begin with.**

The protocol only constrains proposers once a value is genuinely chosen. Before then it is free to settle on any proposed value, and the phase-1 rule is what makes the *transition* irreversible: whichever of (b) or (c) runs first puts its value on a majority, and every later proposer's phase-1 majority then intersects it.

**P2**

(a) State after each step, written as (promised, accepted):

| step | $A_1$ | $A_2$ | $A_3$ |
|---|---|---|---|
| initial | $(0, -)$ | $(0, -)$ | $(0, -)$ |
| 1. prepare(1) to all | $(1, -)$ | $(1, -)$ | $(1, -)$ |
| 2. accept(1,"a") to $A_1$ | $(1, (1,\text{“a”}))$ | $(1, -)$ | $(1, -)$ |
| 3. prepare(2) to $A_2, A_3$ | $(1, (1,\text{“a”}))$ | $(2, -)$ | $(2, -)$ |
| 4. accept(2, $v$) to $A_2, A_3$ | $(1, (1,\text{“a”}))$ | $(2, (2, v))$ | $(2, (2, v))$ |

(b) **$v$ is $Q$'s own value.** The promises in step 3 came from $A_2$ and $A_3$, **neither of which had accepted anything**, so no accepted proposal was reported and the proposer is free to propose its own value.

(c) **"a" was never chosen** — only $A_1$ accepted it, and a majority of three is two.

**If it had been chosen, the outcome would change.** A majority holding "a" would mean at least two of the three acceptors had it, so $Q$'s phase-1 majority (any two acceptors) would necessarily include one of them, and $Q$ would have been forced to propose "a". That is the intersection argument doing its work, and this problem is the near-miss case: one acceptor short of a majority is exactly one acceptor short of constraining every future proposer.

(d) $A_2$ **rejects** it.

The rule: an acceptor accepts $\mathrm{accept}(n, v)$ only if it has not promised to a number **greater than** $n$. $A_2$ promised to 2 in step 3, and $2 > 1$, so the stale accept is refused.

This is exactly the case the promise exists to catch. Without it, $A_2$ would accept "a" at number 1, and with $A_1$ that would put "a" on a majority — while $A_2$ and $A_3$ simultaneously hold $v$ at number 2, also potentially on a majority. **Two chosen values, from one delayed message.**

**P3**

*Accept criterion for (a): any interleaving in which each proposer's phase 1 invalidates the other's pending phase 2, repeatedly. The specific numbers are free.*

(a)

1. $P_1$ completes phase 1 with $n = 10$; a majority promises to 10.
2. $P_2$ completes phase 1 with $n = 11$ before $P_1$'s accept arrives; the same majority now promises to 11.
3. $P_1$'s $\mathrm{accept}(10, \cdot)$ arrives and is rejected.
4. $P_1$ retries phase 1 with $n = 12$; the majority promises to 12.
5. $P_2$'s $\mathrm{accept}(11, \cdot)$ arrives and is rejected.
6. $P_2$ retries with $n = 13$. Return to step 3.

**Termination fails.** Agreement and validity hold trivially, since nothing is ever accepted, let alone chosen.

(b) An acceptor sees only its own messages, and the livelock is a property of the *interleaving across acceptors*. More fundamentally, an acceptor choosing a value on its own initiative would destroy the protocol: the safety proof relies on acceptors being purely reactive memory, reporting what they hold and never originating a value. An acceptor that decided to "settle things" would be a proposer, and adding a third proposer makes the livelock more likely, not less.

The deeper answer is FLP ([3.1](03-01-the-consensus-problem-and-flp.md)): **no deterministic rule an acceptor could apply would break the livelock in every execution**, because such a rule would solve consensus in an asynchronous system.

(c) Two proposers are active whenever the leader election is wrong, which by [3.2](03-02-failure-detectors-and-escaping-flp.md) it may be arbitrarily often. Concretely: the leader is briefly unreachable, a second proposer's failure detector suspects it and takes over, and the first proposer — never having crashed — continues proposing.

**The consequence is a period of livelock and nothing worse.** No value is chosen during it, no conflicting value is ever chosen, and when the detector stabilises one proposer wins. This is why an unreliable detector is sufficient: **a wrong election costs latency, not correctness.**

(d) It breaks **liveness permanently**, and it can do so in a way no retry recovers from.

Execution: a proposer with a stale view retries aggressively during a partition and reaches $n = 500$, while the acceptors on the other side have only seen numbers up to 12. When the partition heals, the proposer's $\mathrm{prepare}(501)$ is rejected by the cap — $501 > 12 + 10$ — and the proposer, seeing a rejection, does what proposers do: retries with a **higher** number, which is rejected again. **The proposer can never again make progress, and the cap ensures its retries move it further from acceptance rather than closer.**

Worse, the cap gives the acceptors a way to reject a proposal that has nothing to do with what they have promised, which means a proposer can no longer conclude anything from a rejection. The lesson generalises: **in Paxos, proposal numbers are an ordering device, not a resource.** They may be arbitrarily large and arbitrarily sparse, and any mechanism that treats them as a budget breaks the protocol.

</details>

## Flashback

**From Lesson 3.2 (failure detectors):** A Paxos deployment on 7 acceptors uses an eventually accurate failure detector to elect its distinguished proposer.

(a) Give the maximum number of acceptor crashes the deployment tolerates, with the bound used.
(b) State what happens to safety and to liveness during a period in which the detector is wrong, and name the property of the detector that guarantees the period ends.
(c) State the maximum tolerable crashes if a perfect failure detector were somehow available, and explain the difference in one clause.

<details>
<summary>Solution</summary>

(a) With an eventually accurate detector, consensus requires $n > 2f$, so $7 > 2f$ gives $f \le 3$: **$f = 3$**.

This is the same majority requirement Paxos uses directly — a phase-1 or phase-2 majority of 7 is 4 acceptors, so the protocol works as long as 4 remain, which is exactly 3 crashes tolerated.

(b) **Safety is untouched.** Paxos's safety proof uses only quorum intersection and the acceptor rules, and mentions no detector; a wrong suspicion can cause a second proposer to become active, and two active proposers cannot choose two values.

**Liveness is lost for the duration.** With duelling proposers the livelock of Example 2 runs, and nothing is chosen.

The property guaranteeing the period ends is **eventual accuracy**: after some unknown time, some correct process is never again suspected, so a single distinguished proposer emerges and its round completes.

(c) With a perfect detector, $n > f$ suffices, so at $n = 7$ the maximum would be **$f = 6$** — consensus among the survivors down to a single acceptor.

The difference is that a perfect detector never mistakes a partitioned-but-live node for a crashed one, **so a partition cannot masquerade as a set of crashes and two groups cannot each believe they are the only survivors** — which is the indistinguishability that forces the majority in the first place.

</details>

## Connections

- **Backward:** the safety proof is [2.6](02-06-quorum-systems.md)'s intersection property used exactly once, and the liveness requirement is [3.2](03-02-failure-detectors-and-escaping-flp.md)'s $\Omega$ under its operational name, "distinguished proposer". The livelock is [3.1](03-01-the-consensus-problem-and-flp.md)'s non-terminating execution made concrete.
- **Forward:** [3.4](03-04-raft.md) is Multi-Paxos with the leader made explicit and the log made primary, designed so that the same argument is easier to follow; [3.6](03-06-state-machine-replication.md) turns a sequence of instances into a service; and [4.2](04-02-three-phase-commit-and-consensus-backed-commit.md) replaces the two-phase commit coordinator with a Paxos group, which is how a commit protocol stops blocking.
- **Sideways:** the pattern "act correctly in every world consistent with what you observed" is the same move as [1.3](01-03-rpc-and-delivery-semantics.md)'s idempotent retry — in both cases the system stops trying to learn what happened, which [1.1](01-01-why-distributed-systems-are-hard.md) forbids, and instead makes the next action safe under every possibility.
