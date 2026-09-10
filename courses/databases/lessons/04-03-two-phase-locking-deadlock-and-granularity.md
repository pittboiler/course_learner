# Database Systems · Lesson 4.3: Two-phase locking, deadlock & granularity

> ⏱ ~15 min · Module 4: Transactions, concurrency & beyond · Builds on: [4.2 (serializability)](04-02-serializability-and-precedence-graphs.md) · Unlocks: [4.4 (isolation levels & MVCC)](04-04-isolation-levels-and-mvcc.md)

## Why this matters

[4.2](04-02-serializability-and-precedence-graphs.md) gave a test for whether a schedule is safe. A test is not enough: the scheduler has to decide whether to allow each operation *as it arrives*, with no knowledge of what comes next, and the last example of that lesson showed a single operation appended at the end turning a legal schedule illegal.

So what is needed is a **protocol** — a local rule that, followed by every transaction, makes a cyclic precedence graph impossible to construct. Two-phase locking is that rule, it has been the standard answer since the 1970s, and its guarantee is a theorem rather than a heuristic.

It also has a cost that is not a bug: **deadlock**. Understanding why deadlock is the unavoidable price, rather than an implementation weakness, is the point of this lesson.

## The idea

Before touching an item, take a lock on it. **Shared** for reading, **exclusive** for writing. The compatibility rule is exactly the conflict relation of [4.2](04-02-serializability-and-precedence-graphs.md): two shared locks coexist, everything else waits.

Locking alone does not give serializability. A transaction could lock A, release it, lock B, release it — and interleave with another doing the reverse, producing exactly the cycle we want to forbid. The extra rule is the two-phase discipline:

> **Once you release any lock, you may acquire no more.**

Every transaction therefore has a **growing** phase and then a **shrinking** phase, with a **lock point** between them — the instant it holds its maximum set of locks.

Why that forces acyclicity, in one sentence: if $T_i \to T_j$ is an edge, then $T_i$ released the conflicting lock before $T_j$ acquired it, so $T_i$'s lock point precedes $T_j$'s. **Ordering transactions by lock point is therefore a serial order consistent with every edge**, and a graph with such an order has no cycle.

**Strict 2PL** adds one thing: hold every *exclusive* lock until commit or abort. The shrinking phase becomes a vertical drop at the end. This costs concurrency and buys cascadelessness — nobody can read your uncommitted writes, so nobody has to be rolled back when you abort.

And the cost. If cyclic precedence graphs cannot be built, but the transactions genuinely conflict cyclically, the cycle has to appear somewhere. Under 2PL it appears in the **wait-for graph**, as deadlock. That is not a failure of the protocol; it is where the protocol puts the problem, and the wait-for graph is a much better place for it because a cycle there is detectable and repairable.

## The formal version

> **Lock modes and compatibility.**
>
> | | held S | held X |
> |---|---|---|
> | **want S** | granted | wait |
> | **want X** | wait | wait |

> **Two-phase locking (2PL).** Every transaction acquires all its locks before releasing any.

> **Theorem.** Every schedule produced by 2PL is conflict-serializable.

*Proof sketch.* Suppose the precedence graph has an edge $T_i \to T_j$. Then some operation of $T_i$ conflicts with a later one of $T_j$ on some item, so $T_i$ held a lock on it that $T_j$ then acquired — meaning $T_i$ released before $T_j$ acquired. Under 2PL $T_i$ released only after its lock point, and $T_j$ acquired only before its own, so $\mathrm{lp}(T_i) < \mathrm{lp}(T_j)$. Every edge therefore increases the lock point, and a cycle would require $\mathrm{lp}(T_i) < \mathrm{lp}(T_i)$. $\square$

Note what the theorem does **not** say: 2PL is sufficient, not necessary. Some conflict-serializable schedules cannot be produced by 2PL, and forbidding them is the concurrency 2PL gives up in exchange for a local rule.

> **Strict 2PL.** 2PL, plus: all exclusive locks are held until the transaction commits or aborts.

Strict 2PL gives serializability, recoverability and cascadelessness together. It is what essentially every lock-based system implements, and the reason the three properties come as a package is that no other transaction can see an uncommitted write at all.

> **Deadlock.** A cycle in the **wait-for graph**, whose nodes are transactions and whose edge $T_i \to T_j$ means $T_i$ is waiting for a lock $T_j$ holds.

Detection is cycle detection by depth-first search — the same machinery as [4.2](04-02-serializability-and-precedence-graphs.md)'s precedence graph and as [`algorithms` 3.2](../../algorithms/lessons/03-02-topological-sort-and-strongly-connected-components.md). The Coffman conditions and the general theory of deadlock belong to [`operating-systems` 2.5](../../operating-systems/lessons/02-05-deadlock.md) and are not repeated here.

**What is database-specific is the response.** An operating system faced with deadlocked processes has bad options, because a process cannot be rolled back. A database **aborts a victim**, undoes its work, releases its locks, and restarts it — and because atomicity ([4.1](04-01-transactions-and-the-acid-properties.md)) makes rollback safe and routine, this is a clean repair rather than a disaster. Rollback is a preemption a process cannot offer.

Two prevention schemes use transaction age instead of detection, and both work by ensuring waits only ever go one way through time:

> **Wait-die.** An older transaction requesting a lock held by a younger one waits; a younger one requesting from an older **dies** (aborts and restarts with its original timestamp).
> **Wound-wait.** An older transaction **wounds** (aborts) the younger holder; a younger one waits.

Keeping the original timestamp on restart is what prevents starvation: a transaction that keeps aborting keeps getting older, and eventually it is the oldest and cannot be aborted again.

> **Granularity and intention locks.** Locking whole tables is cheap to manage and kills concurrency; locking individual rows is the reverse. Systems lock at several levels at once, using **intention locks** — IS and IX — on the coarse levels to announce a finer lock below.

The point of an intention lock is that a transaction wanting an exclusive lock on a whole table can tell in one check whether any row of it is locked, instead of examining every row.

## Picture

![The lock compatibility matrix showing only shared-shared is granted, a plot of locks held over time rising through a growing phase to a lock point then falling through a shrinking phase, and a wait-for graph of three transactions forming a cycle on items A, B and C](assets/04-03-fig1.svg)

The middle panel is the theorem in one picture: the lock point is a single instant per transaction, and sorting transactions by it produces the serial order.

## Worked examples

**Example 1 — strict 2PL serializing an interleaving, and refusing another.**

**A schedule it allows, by delaying.** The application submits

$$w_1(A)\ \ r_2(A)\ \ w_2(B)\ \ c_1\ \ c_2$$

Trace it under strict 2PL:

| step | action |
|---|---|
| 1 | $T_1$ takes X(A), writes A |
| 2 | $T_2$ requests S(A) — **blocked**, X is held |
| 3 | $T_1$ commits, releases X(A) |
| 4 | $T_2$ takes S(A), reads A |
| 5 | $T_2$ takes X(B), writes B, commits |

The protocol did not reject anything. It **reordered** by making $T_2$ wait, and the schedule that actually executed is serial: $T_1$ entirely, then $T_2$. Note also that $T_2$'s read now sees a *committed* value — cascadelessness, delivered by holding X locks to commit.

**A schedule it refuses.** Now the two-cycle from [4.2](04-02-serializability-and-precedence-graphs.md):

$$r_1(A)\ \ r_2(B)\ \ w_1(B)\ \ w_2(A)$$

| step | action |
|---|---|
| 1 | $T_1$ takes S(A), reads A |
| 2 | $T_2$ takes S(B), reads B |
| 3 | $T_1$ requests X(B) — **blocked** by $T_2$'s S(B) |
| 4 | $T_2$ requests X(A) — **blocked** by $T_1$'s S(A) |

**Deadlock.** The wait-for graph is $T_1 \to T_2 \to T_1$, and neither can proceed.

**This is the protocol working correctly.** That schedule is not conflict-serializable ([4.2](04-02-serializability-and-precedence-graphs.md) P1(c)), so no correct scheduler may produce it. 2PL's way of not producing it is to block, and the block is mutual. **The cycle that would have been in the precedence graph is now in the wait-for graph instead** — and that is strictly better, because a precedence-graph cycle is a wrong answer already delivered, while a wait-for cycle is a stall the system can detect and fix by aborting one side.

**Example 2 — two transactions, one item, and a deadlock anyway.**

$$r_1(A)\ \ r_2(A)\ \ w_1(A)\ \ c_1\ \ w_2(A)\ \ c_2$$

Both transactions touch exactly one item. There is no lock ordering to get wrong — with a single resource, the classic advice to acquire locks in a global order is vacuous.

| step | action |
|---|---|
| 1 | $T_1$ takes S(A), reads A |
| 2 | $T_2$ takes S(A), reads A — **granted**, shared locks are compatible |
| 3 | $T_1$ requests X(A) to write — **blocked**, $T_2$ holds S(A) |
| 4 | $T_2$ requests X(A) to write — **blocked**, $T_1$ holds S(A) |

**Deadlock**, with the wait-for graph $T_1 \to T_2 \to T_1$, on one item.

The mechanism is the **lock upgrade**: each transaction already holds a shared lock and needs to convert it to exclusive, and neither can while the other's shared lock stands. It is the single most common deadlock in production systems, because the pattern that causes it is the most natural thing an application does — read a row, decide, write it back.

**Two practical consequences.**

The application-level fix is to **take the exclusive lock up front** rather than upgrading. In SQL that is `SELECT ... FOR UPDATE`, which acquires X immediately: the second transaction then blocks at step 2 instead of deadlocking at step 4, waits, and proceeds.

The deeper point is that this deadlock is the **lost update** of [4.1](04-01-transactions-and-the-acid-properties.md) being prevented. Without locking, both transactions read the same value and one write is silently discarded. With locking, they deadlock, one is aborted, and it retries and reads the current value. **A deadlock is a lost update that got caught** — noisy, but the noise is the mechanism reporting that it did its job.

## Watch out

- **You might think deadlock means the protocol is broken.** It means the transactions genuinely conflict in a cycle. 2PL relocates that cycle from the precedence graph, where it would be silent corruption, to the wait-for graph, where it is a detectable stall.
- **You might think locking in a consistent order prevents all deadlocks.** It prevents ordering deadlocks. Example 2 has one item and still deadlocks, because the conflict is between shared and exclusive modes on the same lock, not between two locks.
- **You might think holding locks longer is always safer.** Strict 2PL's hold-to-commit buys cascadelessness and costs concurrency in direct proportion to transaction length — one long transaction can block everything it touches for its whole duration.
- **You might think 2PL produces every safe schedule.** It produces only a subset of the conflict-serializable ones. That lost concurrency is the price of a rule each transaction can follow locally, with no view of the whole schedule.

## One-liner

> Two-phase locking makes a cyclic precedence graph impossible to build, so the cycle reappears in the wait-for graph as deadlock — which is the better place for it, because a transaction can be rolled back and a wrong answer cannot.

## Problems

**P1 (🟢)** State whether each lock request is **granted** or **waits**.

(a) $T_2$ requests S(A); $T_1$ holds S(A).
(b) $T_2$ requests X(A); $T_1$ holds S(A).
(c) $T_2$ requests S(A); $T_1$ holds X(A).
(d) $T_1$ holds S(A) and requests X(A), with no other transaction holding anything.

**P2 (🟡)** Trace this schedule under **strict** 2PL, giving for each step the lock requested, whether it is granted or blocked, and by whom.

$$w_1(X)\ \ w_2(Y)\ \ r_1(Y)\ \ r_2(X)\ \ c_1\ \ c_2$$

(a) Give the step-by-step trace as an ordered list.
(b) Give the wait-for graph at the point where progress stops.
(c) State whether a deadlock occurs, and give the cycle if so.
(d) The system aborts $T_2$ as victim. Give what happens next, through to both transactions completing, and state the serial order the execution turns out to be equivalent to.

**P3 (🔴, optional)** Three transactions run under strict 2PL:

$$w_1(A)\ \ w_2(B)\ \ w_3(C)\ \ r_1(B)\ \ r_2(C)\ \ r_3(A)$$

(a) Give the trace to the point where no transaction can proceed, and the wait-for graph.
(b) State whether a deadlock occurs and give the cycle.
(c) The system uses **wound-wait** with timestamps $ts(T_1) = 10$, $ts(T_2) = 20$, $ts(T_3) = 30$ (smaller is older). Give what happens at each of the three blocked requests, and state which transactions survive.
(d) Repeat (c) under **wait-die** with the same timestamps. Give which transactions abort, and state which of the two schemes aborts fewer transactions here — then say what would change if the timestamps were reversed.

<details>
<summary>Solutions</summary>

**P1**

(a) **Granted.** Shared locks are compatible with each other, which is the one entry in the matrix that permits sharing, and the reason concurrent readers never block.

(b) **Waits.** Exclusive is incompatible with anything, including shared.

(c) **Waits.** Symmetric to (b): a held exclusive lock excludes everything.

(d) **Granted.** A transaction's requests never conflict with its own locks. This is a **lock upgrade**, and it succeeds precisely because no *other* transaction holds a shared lock — the case where another one does is Example 2's deadlock.

**P2**

(a) Trace:

| step | request | outcome |
|---|---|---|
| 1 | $T_1$ wants X(X) | **granted**; writes X |
| 2 | $T_2$ wants X(Y) | **granted**; writes Y |
| 3 | $T_1$ wants S(Y) | **blocked** by $T_2$'s X(Y) |
| 4 | $T_2$ wants S(X) | **blocked** by $T_1$'s X(X) |

Under strict 2PL both X locks are held to commit, and neither transaction reaches its commit.

(b) **Wait-for graph:** $T_1 \to T_2$ (waiting for Y) and $T_2 \to T_1$ (waiting for X).

(c) **Yes, deadlock.** The cycle is $T_1 \to T_2 \to T_1$.

(d) Aborting $T_2$ undoes its write to Y and **releases X(Y)**. Then:

| step | action |
|---|---|
| 5 | $T_1$'s pending S(Y) is granted; reads Y |
| 6 | $T_1$ commits, releasing X(X) and S(Y) |
| 7 | $T_2$ restarts: takes X(Y), writes Y |
| 8 | $T_2$ takes S(X), reads X |
| 9 | $T_2$ commits |

**Equivalent serial order: $T_1$, then $T_2$.** The execution that actually happened is serial — $T_1$ ran to completion before $T_2$'s successful attempt began — which is the strongest form of the guarantee.

Note the cost: $T_2$'s first attempt was wasted work, and its write to Y had to be undone. That waste is the standard price of optimistic progress under locking, and it is why systems with high deadlock rates are tuned by shortening transactions rather than by changing the protocol.

**P3**

(a) Trace:

| step | request | outcome |
|---|---|---|
| 1 | $T_1$ wants X(A) | granted; writes A |
| 2 | $T_2$ wants X(B) | granted; writes B |
| 3 | $T_3$ wants X(C) | granted; writes C |
| 4 | $T_1$ wants S(B) | **blocked** by $T_2$ |
| 5 | $T_2$ wants S(C) | **blocked** by $T_3$ |
| 6 | $T_3$ wants S(A) | **blocked** by $T_1$ |

**Wait-for graph:** $T_1 \to T_2$ (on B), $T_2 \to T_3$ (on C), $T_3 \to T_1$ (on A).

(b) **Yes.** The cycle is $T_1 \to T_2 \to T_3 \to T_1$ — a three-cycle, invisible to any pairwise check, exactly as in [4.2](04-02-serializability-and-precedence-graphs.md) Example 1.

(c) **Wound-wait:** an older requester *wounds* (aborts) a younger holder; a younger requester waits.

The requests are processed **in schedule order**, and this matters: a transaction that is wounded aborts at once and never issues its own later requests. Evaluating all three blocked requests as if they happened simultaneously gives a different (and wrong) count.

| request | requester | holder | ages | action |
|---|---|---|---|---|
| $T_1$ wants B | 10, older | $T_2$, 20 | requester older | **$T_1$ wounds $T_2$** — $T_2$ aborts |
| $T_2$ wants C | 20 | $T_3$, 30 | — | $T_2$ has been aborted; on restart it will wait or wound as its age dictates |
| $T_3$ wants A | 30, younger | $T_1$, 10 | requester younger | **$T_3$ waits** |

**One transaction aborts: $T_2$.** With $T_2$ gone, its X(B) is released, $T_1$ takes S(B), reads B, commits, releases X(A), and then $T_3$'s wait on A is satisfied. $T_2$ restarts afterwards.

**Survivors: $T_1$ and $T_3$**, plus $T_2$ on its retry.

(d) **Wait-die:** an older requester waits; a younger requester *dies*.

| request | requester | holder | action |
|---|---|---|---|
| $T_1$ (10) wants B | older than $T_2$ (20) | | **waits** |
| $T_2$ (20) wants C | older than $T_3$ (30) | | **waits** |
| $T_3$ (30) wants A | younger than $T_1$ (10) | | **$T_3$ dies** — aborts and restarts |

**One transaction aborts: $T_3$.**

**Both schemes abort exactly one transaction here**, so neither is better on this instance. The difference is *which* one and what it costs: wound-wait aborted $T_2$, which had done one write; wait-die aborted $T_3$, which had also done one write. Symmetric.

**If the timestamps were reversed** — $ts(T_1) = 30$, $ts(T_2) = 20$, $ts(T_3) = 10$, so $T_3$ is now oldest — the picture changes:

- **Wound-wait:** $T_1$ (30, youngest) wanting B from $T_2$ (20) waits; $T_2$ (20) wanting C from $T_3$ (10) waits; $T_3$ (10, oldest) wanting A from $T_1$ (30) **wounds $T_1$**. One abort, and it is $T_1$.
- **Wait-die:** $T_1$ (30) requesting from older $T_2$ (20) **dies**; $T_2$ (20) requesting from older $T_3$ (10) **dies**; $T_3$ (10) requesting from younger $T_1$ waits. **Two aborts.**

**So the schemes are not equivalent in general**, and the difference is structural rather than accidental. Wait-die aborts the *requester*, so a young transaction can be killed repeatedly as it works its way through a chain of older holders; wound-wait aborts the *holder*, so it kills at most the transactions actually standing in an older transaction's way.

The general characterization: **wound-wait tends to abort fewer transactions but aborts them later**, after they have done work; **wait-die aborts earlier**, before the requester has acquired anything further, but can abort more. Both are starvation-free because a restarted transaction keeps its original timestamp and therefore ages, and neither requires the detection machinery that a wait-for graph needs.

</details>

## Flashback

**From Lesson 4.2 (serializability & precedence graphs):** Give the precedence-graph edges of

$$S: \quad r_1(P)\ \ w_2(Q)\ \ r_2(P)\ \ w_1(Q)$$

and state whether it is conflict-serializable, with the cycle or the equivalent serial order.

<details>
<summary>Solution</summary>

Scan each operation against every later one, keeping same-item, different-transaction pairs with at least one write:

| earlier | later | item | kind | edge |
|---|---|---|---|---|
| $r_1(P)$ | — | | | $r_2(P)$ is also a read, so no conflict on P from this pair |
| $w_2(Q)$ | $w_1(Q)$ | Q | write-write | $T_2 \to T_1$ |
| $r_2(P)$ | — | | | nothing later touches P |

The two reads of P do not conflict, so P contributes no edge at all.

**Edges: $T_2 \to T_1$ only. Acyclic, so conflict-serializable**, with equivalent serial order $T_2, T_1$.

**The trap the schedule sets** is that $T_1$ appears first and $T_2$ appears to be interleaved into the middle of it, which suggests $T_1, T_2$. The graph says otherwise: the only conflict is on Q, where $T_2$ writes before $T_1$ does, so $T_2$ must come first. **Which transaction started earlier tells you nothing about the equivalent serial order** — only the conflicts do.

</details>

## Connections

- **Backward:** the compatibility matrix is [4.2](04-02-serializability-and-precedence-graphs.md)'s conflict relation made operational, and the theorem is what converts that lesson's test into a rule a scheduler can follow one operation at a time. The abort that resolves a deadlock is atomicity from [4.1](04-01-transactions-and-the-acid-properties.md), which is what makes rollback a routine repair rather than a crisis.
- **Forward:** [4.4](04-04-isolation-levels-and-mvcc.md) is what you get by relaxing this protocol on purpose — releasing shared locks early, or abandoning locking for readers entirely — and what each relaxation lets through. [4.5](04-05-recovery-write-ahead-logging-and-aries.md) supplies the undo that an aborted victim needs.
- **Sideways:** the Coffman conditions, wait-for graphs and the Banker's algorithm are [`operating-systems` 2.5](../../operating-systems/lessons/02-05-deadlock.md)'s subject and hold here unchanged. What differs is the fourth Coffman condition, no preemption: an operating system cannot take a resource back from a process, while a database *can*, because a transaction can be rolled back. That single extra capability is why databases detect and recover from deadlock as a matter of routine while kernels mostly prevent it by discipline.
