# Distributed Systems · Lesson 2.2: Sequential, causal and session consistency

> ⏱ ~15 min · Module 2: Consistency and Replication · Builds on: [2.1 (linearizability)](02-01-linearizability.md), [1.5 (logical time)](01-05-logical-time-lamport-and-vector-clocks.md), [1.7 (ordered broadcast)](01-07-ordered-broadcast-fifo-causal-total.md) · Unlocks: [2.3 (eventual consistency)](02-03-eventual-consistency-and-anti-entropy.md), [3.5 (CAP)](03-05-the-cap-theorem-and-pacelc.md)

## Why this matters

Linearizability is the guarantee everybody wants and almost nobody buys, because paying for it means a round of coordination on the critical path of every operation, and losing availability the moment the network splits.

So the interesting question is what lives below it. The answer is a hierarchy, and it is not a smooth gradient of "a bit stale" — each step down removes one *specific* requirement, and knowing which one tells you exactly which application bugs become possible. This lesson walks the hierarchy and then introduces the guarantees that matter most in practice: the **session guarantees**, which are weak globally but strong from the point of view of a single user, and which are what most systems should be buying.

Note the division of labour with the rest of the library. [`computer-architecture` 5.3](../../computer-architecture/lessons/05-03-multiprocessors-cache-coherence.md) owns sequential consistency as a *memory model* for cores sharing physical memory. Here it is a guarantee about replicated objects reached over a network — same definition, different machinery and different costs.

## The idea

Linearizability had two ingredients: there is **one order** everybody agrees on, and that order **respects real time**. Drop them one at a time.

**Drop real time, keep the single order.** That is **sequential consistency**. There is still exactly one global sequence that every process agrees on, and each process's own operations appear in it in program order — but an operation that finished long ago may be placed *after* one that started later. Concretely: you write, and a read that starts afterwards on another machine may legally return the old value, as long as everybody's view can be reconciled into one consistent story.

**Drop the single order too, keep causality.** That is **causal consistency**. Operations that are causally related — one could have influenced the other, in exactly [1.5](01-05-logical-time-lamport-and-vector-clocks.md)'s sense — must be seen in that order by everybody. Operations that are concurrent may be seen in **different orders by different processes**, and that is not a bug. Two nodes can permanently disagree about which of two concurrent posts came first, and the system is still correct.

**Drop causality.** That is **eventual consistency**, where the only promise is convergence if writes stop, and which [2.3](02-03-eventual-consistency-and-anti-entropy.md) takes up.

Cutting across this hierarchy are the **session guarantees**, and they are the practical hero of this lesson. They ask nothing about the global order and everything about what *one client* sees over time: your own writes are visible to you, your reads never go backwards, and so on. A system can be globally eventually consistent and still give every individual user an experience indistinguishable from a single machine — which is usually what the user actually cared about.

## The formal version

> **Sequential consistency** (Lamport, 1979). A history is sequentially consistent if there is a single sequential order $S$ of all operations such that $S$ is legal for the object, and each process's operations appear in $S$ in that process's program order.

The contrast with [2.1](02-01-linearizability.md) is one clause: linearizability additionally requires $<_H \subseteq <_S$. **Sequential consistency drops exactly that.**

> **Non-composability.** Sequential consistency is **not** a local property: a system in which every object is individually sequentially consistent need not be sequentially consistent as a whole.

This is the reason linearizability is the standard despite costing more, and the counterexample is Example 1 below.

> **Causal consistency.** Writes that are causally related ($w_1 \to w_2$ under happens-before, including through a read that returned $w_1$) are observed in that order by every process. Concurrent writes may be observed in any order, independently by each process.

In words: causal consistency is exactly what you get if replicas apply updates in the order delivered by **causal broadcast** ([1.7](01-07-ordered-broadcast-fifo-causal-total.md)). The mechanism and the guarantee are the same object seen from two sides.

> **The four session guarantees.**
>
> - **Read-your-writes.** A read by a process sees every write that process previously performed.
> - **Monotonic reads.** If a process reads a value, any later read by it returns that value or a later one — reads never go backwards.
> - **Monotonic writes.** A process's writes are applied at every replica in the order the process issued them.
> - **Writes-follow-reads.** If a process reads $v$ and then writes $w$, then $w$ is ordered after the write that produced $v$ at every replica.

In words: the first two are about what you see, the last two about how your writes are placed relative to what you saw. **Causal consistency implies all four**, which is the cleanest way to remember them — and the reason a system that already does causal delivery gets them for free.

> **Attiya–Welch / Mahajan et al.** Causal consistency is the strongest model that can be provided by an **always-available** system — one that never blocks a read or a write, even under partition.

This result is the bridge to [3.5](03-05-the-cap-theorem-and-pacelc.md). It is not merely that causal is *a* choice available under partitions; it is the **ceiling**. Anything stronger requires blocking somewhere.

## Picture

![Four nested rounded rectangles labelled from the outside in: eventual consistency, causal consistency, sequential consistency, and linearizable at the centre. Arrows from the right edge of each boundary point to a note naming what is lost by stepping outward: real-time order, so a completed write may go unseen by a later read; a single agreed order, so two nodes may order concurrent writes differently; and causal order, so a reply may appear before the message it answers. A caption notes that only causal consistency and weaker remain available during a network partition.](assets/02-02-fig1.svg)

Read the notes rather than the rings. "Weaker consistency" is not a dial labelled *more stale*; each step out licenses one **specific** observable anomaly, and the design question is always which of those three anomalies your application can survive.

## Worked examples

**Example 1 — sequentially consistent objects that do not compose.**

Two registers $x$ and $y$, both starting at 0. Two processes:

$$P_1: \quad W(x, 1); \ \ R(y) \to 0 \qquad\qquad P_2: \quad W(y, 1); \ \ R(x) \to 0$$

**Each object in isolation is sequentially consistent.** Restrict to $x$: the operations are $P_1$'s $W(x,1)$ and $P_2$'s $R(x) \to 0$. The order $R(x) \to 0$, then $W(x,1)$ is legal and respects both processes' program orders (each has only one $x$-operation). Same for $y$ by symmetry.

**Together they are not.** Any global order $S$ must contain:

- $W(x,1)$ before $R(y) \to 0$ — $P_1$'s program order;
- $W(y,1)$ before $R(x) \to 0$ — $P_2$'s program order;
- $R(y) \to 0$ before $W(y,1)$ — or the read would return 1;
- $R(x) \to 0$ before $W(x,1)$ — likewise.

Chain them: $W(x,1) \prec R(y){\to}0 \prec W(y,1) \prec R(x){\to}0 \prec W(x,1)$. **A cycle**, so no such $S$ exists.

**Why this matters more than it looks.** It means you cannot build a sequentially consistent system by assembling sequentially consistent parts — there is no local reasoning, and correctness must be argued globally over the whole system. Linearizability's composability theorem says exactly the opposite: verify each object once, and the system is correct by construction. **That single property is why linearizability, and not the cheaper sequential consistency, became the industry definition of "strong".**

(If this run looks familiar, it is Dekker's algorithm's core, and it is the same execution that a processor's store buffer permits on x86 — which is why [`computer-architecture` 5.3](../../computer-architecture/lessons/05-03-multiprocessors-cache-coherence.md) needs fences. The failure is identical; only the scale differs.)

**Example 2 — four session guarantees, four user-visible bugs.**

A user, Ana, uses a globally replicated social app. Each anomaly below is legal under plain eventual consistency, and each is excluded by one named guarantee.

**(a) Ana posts a comment, the page refreshes, and the comment is gone.** Her read was routed to a replica that had not yet received her write. This violates **read-your-writes**.

The standard fix is *sticky sessions* — pin Ana to one replica — or have the client carry the version it wrote and require any serving replica to be at least that fresh.

**(b) Ana refreshes again, sees the comment, refreshes a third time, and it disappears again.** She was served by a fresh replica and then a stale one. This violates **monotonic reads**, and it is the more upsetting bug of the two, because the system has demonstrably had the data and then denied it.

Fix: the client remembers the highest version it has observed and never accepts an older one.

**(c) Ana edits her profile to "Berlin" and then to "Munich"; a friend sees "Munich" and later "Berlin".** Her two writes were applied in different orders at different replicas. This violates **monotonic writes**.

Fix: per-client sequence numbers, applied in order — which is FIFO delivery from [1.7](01-07-ordered-broadcast-fifo-causal-total.md), per client rather than per process.

**(d) Ana reads Ben's post "the meeting is cancelled" and replies "thanks for letting me know"; a third user sees Ana's reply above Ben's post.** This violates **writes-follow-reads**, and it is [1.5](01-05-logical-time-lamport-and-vector-clocks.md)'s comment-before-reply bug under its proper name.

Fix: causal delivery, which orders Ana's write after the write she read.

**The engineering point is that (a) through (c) are fixable on the client alone**, with a version token carried in the session, and cost the system nothing. (d) requires the replication layer to track causality. So the pragmatic recipe most systems land on is: eventual consistency in the store, session guarantees in the client library, and causal delivery only where the application genuinely has conversations in it.

## Watch out

- **You might think sequential consistency is "linearizability with a small delay".** It has no bound at all. A sequentially consistent system may serve a read from a replica that is arbitrarily far behind, forever, as long as every process's view can be woven into one consistent story. What you lose is not freshness but the *guarantee* of freshness.
- **You might think causal consistency means everyone agrees on the order eventually.** It does not: two replicas may permanently disagree about the order of two concurrent writes, and both are correct. Convergence to a common *state* is a separate requirement, and it needs a deterministic merge — which is [2.4](02-04-crdts-and-strong-eventual-consistency.md).
- **You might think session guarantees are weaker than causal consistency and therefore less useful.** They are weaker and usually *more* useful, because they are cheap, client-side, and they eliminate the anomalies users actually complain about. A system with strong session guarantees and weak global consistency feels correct to every individual user.

## One-liner

> Below linearizability the hierarchy is not a staleness dial but a list of specific anomalies you are licensing — a completed write going unseen, two nodes ordering concurrent writes differently, a reply preceding its cause — and the cheapest useful answer is usually to fix none of them globally and all of them per session.

## Problems

**P1 (🟢)** For each history on a single register starting at 0, state the **strongest** model it satisfies among linearizable, sequentially consistent, and neither. Notation is $W(v)[s,f]$ and $R(v)[s,f]$.

(a) $A{:}\,W(1)[0,2]$, $B{:}\,R(1)[3,5]$
(b) $A{:}\,W(1)[0,2]$, $B{:}\,R(0)[3,5]$
(c) $A{:}\,W(1)[0,2]$, $A{:}\,R(0)[3,5]$ — both operations by the same process $A$
(d) $A{:}\,W(1)[0,2]$, $B{:}\,R(0)[3,5]$, $B{:}\,R(1)[6,8]$, $B{:}\,R(0)[9,11]$

**P2 (🟡)** Name the session guarantee violated in each scenario, and give a client-side or replication-side fix in one clause.

(a) A user uploads an avatar, and the profile page shows the old one.
(b) A dashboard shows 48 orders, then 45, then 48 again on three consecutive refreshes with no new orders placed.
(c) A user sets a reminder for 9am, then changes it to 10am; the notification fires at 9am and the settings page shows 10am.
(d) A support agent reads a customer's message, replies, and the transcript shows the reply above the message for the customer.

**P3 (🔴, optional)** Two registers $p$ and $q$, both starting at 0, on a store that guarantees each register is sequentially consistent.

(a) Construct a two-process history in which each register alone is sequentially consistent but the combination is not, and give the cycle.
(b) State whether your history could occur on a store that is **linearizable** per register, and justify the answer with the composability theorem.
(c) A team observes your history in production and concludes a replica is faulty. State whether that conclusion is warranted.
(d) The team wants to forbid this history without buying linearizability. Give one mechanism that does so, and state what it costs.

<details>
<summary>Solutions</summary>

**P1**

(a) **Linearizable.** The write returns at 2, the read starts at 3 and returns the written value. Nothing to reconcile.

(b) **Sequentially consistent, not linearizable.** The write returned before the read began, so real time forbids the read returning 0 — but $A$ and $B$ have one operation each, so the order $R(0), W(1)$ respects both program orders and is legal. This is the canonical separating example: **exactly one requirement, real time, is what fails.**

(c) **Neither.** Both operations belong to $A$, so any valid order must place $W(1)$ before $R(0)$ — that is $A$'s own program order, which sequential consistency still enforces. Then the read cannot return 0.

The contrast with (b) is the point: **the identical pair of operations is legal when performed by two processes and illegal when performed by one.** Sequential consistency protects you from yourself and nobody else, which is also, in session terms, exactly read-your-writes.

(d) **Neither.** $B$'s three reads are its own program order, so any valid sequence places them in the order $R(0), R(1), R(0)$. The only write is $W(1)$, so after it takes effect the register holds 1 forever — no legal sequence produces a 0 after a 1.

This is a **monotonic reads** violation, and note that it is ruled out even by sequential consistency: reads going backwards within one process is not a weak-consistency artefact, it is illegal at every level above eventual.

**P2**

(a) **Read-your-writes.** Fix: have the client send the version returned by its write and require the serving replica to be at least that fresh, or pin the session to the replica that accepted the write.

(b) **Monotonic reads.** Fix: the client records the highest version it has seen and rejects or re-requests any response older than it.

(c) **Monotonic writes.** Fix: per-client sequence numbers on writes, with replicas applying a client's writes strictly in order.

The detail worth noticing is that the *settings page* is right and the *notification scheduler* is wrong — the two subsystems applied the same two writes in different orders, which is exactly what monotonic writes forbids.

(d) **Writes-follow-reads.** Fix: causal delivery in the replication layer, so the reply's write is ordered after the write it read; concretely, attach the version the agent read to the write the agent makes.

**P3**

*Accept criterion: any two-process, two-register history whose four required orderings form a cycle. The standard construction is below; symmetric variants are equally correct.*

(a) Both registers start at 0.

$$P_1: \quad W(p, 1); \ \ R(q) \to 0 \qquad\qquad P_2: \quad W(q, 1); \ \ R(p) \to 0$$

Per register: restricted to $p$, the operations are $W(p,1)$ and $R(p) \to 0$, and the order $R(p){\to}0, W(p,1)$ is legal and respects both program orders. Restricted to $q$, symmetric. **Each register alone is sequentially consistent.**

The cycle for the combination:

$$W(p,1) \prec R(q){\to}0 \prec W(q,1) \prec R(p){\to}0 \prec W(p,1)$$

The first and third links are program order; the second and fourth are forced by the reads returning 0. No total order contains a cycle, so the combined history is not sequentially consistent.

(b) **No, it could not occur.** Linearizability is **composable**: if every object in a system is individually linearizable, the whole history is linearizable, hence also sequentially consistent. Since this history is not sequentially consistent, at least one register's restricted history must be non-linearizable.

Concretely, on a linearizable store $P_1$'s $W(p,1)$ returns before $P_2$'s $R(p)$ is invoked (or the two overlap), and in the non-overlapping case the read must return 1.

(c) **Not warranted.** Every replica behaved exactly as the stated contract permits: each register was sequentially consistent, which is what the store promised. The anomaly comes from the *composition*, and composition is precisely what sequential consistency does not guarantee.

This is the practical sting of non-composability: the failure is real, user-visible, and reproducible, and there is no component to blame. Debugging it means re-reading the contract, not the logs.

(d) **Make the two registers one object.** Put $p$ and $q$ in the same consistency domain — the same shard, the same replicated log, the same transaction — so that the single agreed order covers both. Then the cycle cannot form, because there is one sequence containing all four operations.

**The cost is that $p$ and $q$ can no longer be placed or scaled independently**: every write to either must go through the same ordering mechanism, so they share a throughput ceiling and a failure domain. That is the trade every sharded system makes, and it is why "which keys must be consistent with each other?" is the first question in a partitioning design and the hardest one to revisit later.

(An alternative that also works and costs differently: forbid the *reads* from being served locally, routing them through the write path. That restores the ordering at the price of turning every read into a coordinated operation, which is buying linearizability for reads under another name.)

</details>

## Flashback

**From Lesson 2.1 (linearizability):** A register starts at 0. Client $A$ runs $W(7)[0,5]$. Client $B$ runs $R(7)[1,3]$. Client $C$ runs $R(0)[6,8]$.

(a) State whether the history is linearizable, with the constraint that decides it.
(b) Give the linearization order and a valid point for each operation if it is linearizable, or the conflicting pair if it is not.
(c) Change $C$'s returned value to make the history linearizable, and give the resulting points.

<details>
<summary>Solution</summary>

(a) **Not linearizable.**

The deciding constraint is the simplest one available: **$A$'s write returns at 5 and $C$'s read is invoked at 6**, so real time forces the write's point before the read's, and the read cannot then return the pre-write value.

$B$'s read is not needed for the verdict, though it gives the same answer independently — returning 7 pins the write's point at or before 3, and $C$ starts well after that.

(b) **Conflicting pair: $B{:}\,R(7)$ and $C{:}\,R(0)$** — equivalently $A{:}\,W(7)$ and $C{:}\,R(0)$, since the write completes at 5 and $C$ starts at 6. Either pair is a correct answer; the second is the simpler one to state.

(c) Change $C$'s return to **7**. Then:

| operation | point |
|---|---|
| $A{:}\,W(7)$ | 2 |
| $B{:}\,R(7)$ | 2.5 |
| $C{:}\,R(7)$ | 7 |

Each point lies inside its own interval, the order $W(7), R(7), R(7)$ is legal for a register, and the only real-time constraint — $A$ and $B$ both before $C$ — is respected.

</details>

## Connections

- **Backward:** sequential consistency is [2.1](02-01-linearizability.md)'s definition with the real-time clause deleted, and causal consistency is [1.5](01-05-logical-time-lamport-and-vector-clocks.md)'s happens-before promoted from a bookkeeping device to a correctness requirement — delivered by [1.7](01-07-ordered-broadcast-fifo-causal-total.md)'s causal broadcast.
- **Forward:** [2.3](02-03-eventual-consistency-and-anti-entropy.md) takes the last step down and asks what remains when even causality is dropped; [2.4](02-04-crdts-and-strong-eventual-consistency.md) supplies the deterministic merge that turns "causally consistent" into "and the replicas also agree on a state"; and [3.5](03-05-the-cap-theorem-and-pacelc.md) proves that the boundary this lesson's last theorem describes — causal is the ceiling under partition — is forced.
- **Sideways:** [`computer-architecture` 5.3](../../computer-architecture/lessons/05-03-multiprocessors-cache-coherence.md) owns the same hierarchy for cores and physical memory, and Example 1 is literally the execution a store buffer permits. The instructive difference is the fix: hardware inserts a fence costing tens of nanoseconds, and a distributed system inserts a coordination round costing milliseconds — six orders of magnitude, which is why processors ship relaxed memory models and distributed systems ship relaxed consistency models for the very same reason.
