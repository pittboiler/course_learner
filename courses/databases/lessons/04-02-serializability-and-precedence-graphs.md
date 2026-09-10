# Database Systems · Lesson 4.2: Serializability & precedence graphs

> ⏱ ~15 min · Module 4: Transactions, concurrency & beyond · Builds on: [4.1 (transactions & ACID)](04-01-transactions-and-the-acid-properties.md) · Unlocks: [4.3 (two-phase locking)](04-03-two-phase-locking-deadlock-and-granularity.md)

## Why this matters

[4.1](04-01-transactions-and-the-acid-properties.md) defined isolation as "the result is the same as *some* serial execution." That is the right definition and it is useless as a test — you cannot run every serial order and compare.

This lesson turns it into something you can check in about a minute with a pen. Draw a graph with one node per transaction and one edge per conflict, and **the schedule is safe exactly when the graph has no cycle.** That is the whole test, it is exact, and it is what every locking protocol in the next lesson exists to enforce.

The reason it needs care is in the figure's left panel: three transactions where no *pair* conflicts twice, so every pairwise check passes and the schedule is still illegal. The problem is only visible in the graph.

## The idea

Two operations **conflict** when they touch the same item, belong to different transactions, and at least one is a write. There are three kinds — write-read, read-write, write-write — and one non-conflict: two reads never conflict, which is the whole reason concurrent reading is free.

Why conflicts are the right thing to track: **swapping two adjacent non-conflicting operations does not change the outcome.** Two reads of different items, or two reads of the same item, can be reordered and no transaction can tell. Two operations that conflict cannot: swapping a write and a subsequent read changes what the reader sees.

So a schedule can be transformed into any other schedule reachable by swapping non-conflicting adjacent pairs, and all of them produce the same result. **If some sequence of such swaps reaches a serial schedule, the original was as good as serial.**

That is the definition, and the graph is how you decide it without doing the swaps. Draw $T_i \to T_j$ whenever an operation of $T_i$ conflicts with a later operation of $T_j$. The edge means "$T_i$ must come before $T_j$ in any equivalent serial order." A cycle means a set of transactions each of which must precede the next and itself — impossible, so no serial order exists.

## The formal version

> **Conflict.** Operations $o_i$ of $T_i$ and $o_j$ of $T_j$ conflict if $i \neq j$, they access the same data item, and at least one is a write.

> **Conflict equivalence.** Two schedules over the same transactions are conflict-equivalent if one can be obtained from the other by swapping adjacent non-conflicting operations — equivalently, if every pair of conflicting operations appears in the same relative order in both.

> **Conflict serializability.** A schedule is conflict-serializable if it is conflict-equivalent to some serial schedule.

> **Precedence graph.** Nodes are the transactions. There is an edge $T_i \to T_j$ if some operation of $T_i$ conflicts with a *later* operation of $T_j$ in the schedule.

> **The theorem.** A schedule is conflict-serializable **if and only if** its precedence graph is acyclic. When it is acyclic, every topological order of the graph is an equivalent serial order.

The proof is short in both directions and worth knowing. If the graph has a cycle $T_1 \to T_2 \to \cdots \to T_1$, then any equivalent serial order must place each before the next and hence before itself, which is impossible. If it is acyclic, a topological order exists, and running the transactions in it preserves every conflicting pair's relative order — which is precisely conflict equivalence.

Two further properties concern **aborts** rather than order, and they are independent of serializability:

> **Recoverable schedule.** A transaction commits only after every transaction whose writes it read has committed.

Without this, $T_2$ can commit having read a value from $T_1$, and $T_1$ can then abort — leaving a committed transaction whose input never existed, which cannot be repaired.

> **Cascadeless schedule.** A transaction reads only values written by already-committed transactions.

Stronger, and it rules out **cascading aborts**, where undoing one transaction forces undoing everyone who read from it, and everyone who read from them. Cascadeless implies recoverable.

**Conflict serializability says nothing about either.** A schedule can be perfectly serializable and unrecoverable, and the practical protocol of [4.3](04-03-two-phase-locking-deadlock-and-granularity.md) is chosen to deliver all three at once.

## Picture

![Two precedence graphs: on the left three nodes T1, T2, T3 with edges on items X, Y and Z forming a three-cycle so the schedule is not conflict-serializable, and on the right three nodes with two edges forming a chain from T1 to T2 to T3, acyclic, with the topological order T1 T2 T3 as its equivalent serial schedule](assets/04-02-fig1.svg)

The left graph's three edges are on three different items, so no two transactions conflict more than once. That is what makes it a case a pairwise check cannot find.

## Worked examples

**Example 1 — a cycle no pairwise check can see.**

$$S_1: \quad r_1(X)\ \ w_2(Y)\ \ r_3(Z)\ \ r_3(Y)\ \ w_2(X)\ \ w_1(Z)$$

Find every conflicting pair. Scan each operation against every later one, keeping those on the same item, from different transactions, with at least one write:

| earlier | later | item | kind | edge |
|---|---|---|---|---|
| $r_1(X)$ | $w_2(X)$ | X | read-write | $T_1 \to T_2$ |
| $w_2(Y)$ | $r_3(Y)$ | Y | write-read | $T_2 \to T_3$ |
| $r_3(Z)$ | $w_1(Z)$ | Z | read-write | $T_3 \to T_1$ |

Three edges, and they close a loop: $T_1 \to T_2 \to T_3 \to T_1$.

**Not conflict-serializable.** No serial order exists, because $T_1$ would have to precede $T_2$, which precedes $T_3$, which precedes $T_1$.

**Why a pairwise check misses it.** Look at any two transactions in isolation. $T_1$ and $T_2$ conflict once, on X, so their order is forced but consistent. $T_2$ and $T_3$ conflict once, on Y — fine. $T_1$ and $T_3$ conflict once, on Z — fine. **Every pair is individually consistent, and the three together are not.** A cycle of length 3 is invisible to any check that examines two transactions at a time, which is the practical argument for drawing the whole graph.

**Example 2 — an interleaved schedule that is nonetheless serial in effect.**

$$S_2: \quad r_3(Z)\ \ r_1(X)\ \ w_1(X)\ \ r_2(X)\ \ w_2(Y)\ \ r_3(Y)$$

The conflicts:

| earlier | later | item | kind | edge |
|---|---|---|---|---|
| $w_1(X)$ | $r_2(X)$ | X | write-read | $T_1 \to T_2$ |
| $w_2(Y)$ | $r_3(Y)$ | Y | write-read | $T_2 \to T_3$ |

Note that $r_1(X)$ and $r_2(X)$ do **not** conflict — both are reads. And $r_3(Z)$ conflicts with nothing, since no other transaction touches Z.

Two edges, a chain, no cycle. **Conflict-serializable**, and the topological order is unique: $T_1, T_2, T_3$.

Look at what the schedule actually does, though. $T_3$ begins before $T_1$ has done anything and finishes after $T_2$ has finished — it is interleaved with both. Yet the outcome is identical to running $T_1$ to completion, then $T_2$, then $T_3$. **That is the entire point of the definition:** correctness is not "no interleaving" but "no interleaving that a serial order could not have produced."

**Now change one thing.** Make $T_3$'s first operation a write, $w_3(Z)$, and add $r_1(Z)$ at the end of $T_1$:

$$S_3: \quad w_3(Z)\ \ r_1(X)\ \ w_1(X)\ \ r_2(X)\ \ w_2(Y)\ \ r_3(Y)\ \ r_1(Z)$$

The conflict $w_3(Z)$ before $r_1(Z)$ adds the edge $T_3 \to T_1$. Combined with $T_1 \to T_2 \to T_3$, that closes a cycle and the schedule becomes illegal — from one operation appended at the very end.

**Two lessons from that.** A schedule's legality is not decided incrementally in a way you can eyeball; one late operation can invalidate everything before it. And a scheduler cannot simply check at the end — it must prevent the bad edge from arising, which is what a *protocol* does and why [4.3](04-03-two-phase-locking-deadlock-and-granularity.md) exists.

## Watch out

- **You might think two reads of the same item conflict.** They do not, and this is load-bearing: it is why any number of readers proceed concurrently with no coordination, and why the shared lock of [4.3](04-03-two-phase-locking-deadlock-and-granularity.md) is shareable.
- **You might think checking each pair of transactions is enough.** Example 1 is three transactions, three edges, every pair consistent, and a cycle. Cycles of length three or more are invisible pairwise.
- **You might think conflict serializability is the same as "produces a correct result."** It is *sufficient* and not *necessary*. A schedule where two transactions blindly overwrite the same value can be non-conflict-serializable and still yield a defensible final state — the broader notion, **view serializability**, admits such cases, but testing it is NP-complete, so real systems use the conflict version.
- **You might think a serializable schedule is safe to commit.** Serializability governs *order*, not *aborts*. A serializable schedule can still be unrecoverable, which is a separate property needing its own guarantee.

## One-liner

> Draw one node per transaction and one edge per conflict; the schedule is as good as serial exactly when that graph has no cycle, and every topological order tells you which serial order it matches.

## Problems

**P1 (🟢)** For each schedule, list the edges of the precedence graph and state whether it is conflict-serializable. If it is, give an equivalent serial order.

(a) $r_1(A)\ \ r_2(A)\ \ w_1(B)\ \ w_2(B)$
(b) $r_1(A)\ \ w_1(A)\ \ r_2(A)\ \ w_2(A)$
(c) $w_1(A)\ \ r_2(A)\ \ w_2(B)\ \ r_1(B)$
(d) $r_1(A)\ \ r_2(B)\ \ r_3(C)$

**P2 (🟡)** Consider

$$S: \quad r_1(X)\ \ r_2(X)\ \ w_1(X)\ \ r_3(Y)\ \ w_2(X)\ \ w_3(X)$$

(a) List every conflicting pair, with its item and kind.
(b) Give the precedence graph's edges.
(c) State whether $S$ is conflict-serializable, and give the cycle if there is one.
(d) Delete exactly one operation so that the result becomes conflict-serializable. Give the operation you deleted, the new edges, and the equivalent serial order.

**P3 (🔴, optional)** Four transactions run this schedule:

$$S: \quad r_1(A)\ \ w_2(B)\ \ r_3(C)\ \ w_4(A)\ \ r_2(A)\ \ w_3(B)\ \ w_1(D)\ \ r_4(C)$$

(a) Give the full list of conflicting pairs and the precedence graph's edges.
(b) State whether $S$ is conflict-serializable. If it is, give every equivalent serial order; if not, give a cycle.
(c) Now suppose the schedule ends with $c_2\ c_1\ c_3\ c_4$ and that $T_2$ read $A$ from $T_4$'s write. State whether the schedule is **recoverable**, and whether it is **cascadeless**, justifying each.
(d) Give the smallest change to the commit order that makes the schedule recoverable, and state whether that change also makes it cascadeless.

<details>
<summary>Solutions</summary>

**P1**

(a) $r_1(A)$ and $r_2(A)$ are both reads — no conflict. $w_1(B)$ before $w_2(B)$ is write-write on B: edge $T_1 \to T_2$.

**Edges: $T_1 \to T_2$. Conflict-serializable**, equivalent serial order $T_1, T_2$.

(b) Conflicts on A: $r_1(A)$ before $w_2(A)$ gives $T_1 \to T_2$; $w_1(A)$ before $r_2(A)$ gives $T_1 \to T_2$; $w_1(A)$ before $w_2(A)$ gives $T_1 \to T_2$. All the same edge.

**Edges: $T_1 \to T_2$. Conflict-serializable**, order $T_1, T_2$. This is in fact already serial — $T_1$ finishes before $T_2$ starts.

(c) $w_1(A)$ before $r_2(A)$: $T_1 \to T_2$. $w_2(B)$ before $r_1(B)$: $T_2 \to T_1$.

**Edges: $T_1 \to T_2$ and $T_2 \to T_1$ — a two-cycle. Not conflict-serializable.**

This is the classic two-transaction deadlock-shaped conflict, and it is the one case a pairwise check *does* find.

(d) No two operations touch the same item, and all three are reads besides.

**No edges. Conflict-serializable**, and *every* order works: $T_1 T_2 T_3$, $T_1 T_3 T_2$, and the four others. An empty precedence graph means all $3! = 6$ serial orders are equivalent.

**P2**

(a) Conflicting pairs, scanning each operation against every later one:

| earlier | later | item | kind |
|---|---|---|---|
| $r_2(X)$ | $w_1(X)$ | X | read-write |
| $r_1(X)$ | $w_2(X)$ | X | read-write |
| $r_2(X)$ | $w_3(X)$ | X | read-write |
| $r_1(X)$ | $w_3(X)$ | X | read-write |
| $w_1(X)$ | $w_2(X)$ | X | write-write |
| $w_1(X)$ | $w_3(X)$ | X | write-write |
| $w_2(X)$ | $w_3(X)$ | X | write-write |

$r_3(Y)$ conflicts with nothing — no other transaction touches Y.

(b) Collapsing the pairs to distinct edges:

$$T_2 \to T_1, \quad T_1 \to T_2, \quad T_2 \to T_3, \quad T_1 \to T_3$$

(c) **Not conflict-serializable.** The cycle is $T_1 \to T_2 \to T_1$, from $r_1(X)$ preceding $w_2(X)$ and $r_2(X)$ preceding $w_1(X)$.

Both transactions read X before either wrote it, and each then wrote it. Neither can be placed first: whichever goes first, the other's read would have seen its write.

(d) **Delete $r_2(X)$.**

The remaining schedule is $r_1(X)\ w_1(X)\ r_3(Y)\ w_2(X)\ w_3(X)$. The edges become:

| pair | edge |
|---|---|
| $r_1(X)$ before $w_2(X)$ | $T_1 \to T_2$ |
| $w_1(X)$ before $w_2(X)$ | $T_1 \to T_2$ |
| $r_1(X)$ before $w_3(X)$ | $T_1 \to T_3$ |
| $w_1(X)$ before $w_3(X)$ | $T_1 \to T_3$ |
| $w_2(X)$ before $w_3(X)$ | $T_2 \to T_3$ |

**Edges: $T_1 \to T_2$, $T_1 \to T_3$, $T_2 \to T_3$.** Acyclic, so conflict-serializable, and the topological order is unique: **$T_1, T_2, T_3$.**

*Accept criterion:* any single deletion that leaves an acyclic precedence graph, stated together with the resulting edges and a topological order of them.

**Deleting $r_1(X)$ instead does not work**, and the near-symmetry is a trap worth checking rather than assuming. Without it the schedule is $r_2(X)\ w_1(X)\ r_3(Y)\ w_2(X)\ w_3(X)$, and the conflicts are $r_2(X)$ before $w_1(X)$ giving $T_2 \to T_1$, and $w_1(X)$ before $w_2(X)$ giving $T_1 \to T_2$ — still a two-cycle. The asymmetry comes from the write order: $w_1(X)$ precedes $w_2(X)$, so removing $T_1$'s read leaves $T_2$'s read stranded before a write it must now follow.

**P3**

(a) Scanning for same-item, different-transaction, at-least-one-write pairs:

| earlier | later | item | kind | edge |
|---|---|---|---|---|
| $r_1(A)$ | $w_4(A)$ | A | read-write | $T_1 \to T_4$ |
| $w_4(A)$ | $r_2(A)$ | A | write-read | $T_4 \to T_2$ |
| $w_2(B)$ | $w_3(B)$ | B | write-write | $T_2 \to T_3$ |
| $r_3(C)$ | $r_4(C)$ | C | — | **no conflict**, both reads |

$w_1(D)$ conflicts with nothing; no other transaction touches D.

**Edges: $T_1 \to T_4$, $T_4 \to T_2$, $T_2 \to T_3$.**

(b) **Conflict-serializable** — the graph is a chain $T_1 \to T_4 \to T_2 \to T_3$ with no cycle.

The topological order is **unique**, since a chain admits only one: $\mathbf{T_1, T_4, T_2, T_3}$. There is exactly one equivalent serial order.

Worth noticing that the schedule's apparent order by first operation is $T_1, T_2, T_3, T_4$, which is *not* the equivalent serial order. Which transaction started first tells you nothing.

(c) With the commit order $c_2\ c_1\ c_3\ c_4$ and $T_2$ having read A from $T_4$'s write:

**Not recoverable.** $T_2$ commits first, and the transaction it read from, $T_4$, commits last. If $T_4$ aborted after $c_2$, the system would hold a committed $T_2$ whose input value never existed — and there is no repair, because a committed transaction cannot be rolled back ([4.1](04-01-transactions-and-the-acid-properties.md)).

**Not cascadeless** either, and for a stronger reason: $r_2(A)$ occurs while $T_4$ is still uncommitted, so $T_2$ read *dirty* data. Cascadeless requires reading only committed values, and this read violates it regardless of what the commit order turns out to be.

Note the two failures are distinct. Cascadeless is about *when the read happened*; recoverable is about *when the commits happened*. Cascadeless implies recoverable, so failing cascadeless does not by itself imply failing recoverable — here it fails both, but a schedule with the commit order $c_4$ before $c_2$ would be recoverable and still not cascadeless.

(d) **Move $c_4$ before $c_2$**, giving $c_1\ c_3\ c_4\ c_2$ or simply $c_4\ c_2\ c_1\ c_3$ — the only requirement is that $T_4$ commits before $T_2$ does.

That makes the schedule **recoverable**: every transaction now commits after the transactions it read from.

**It does not make it cascadeless.** $r_2(A)$ still happens before $c_4$, so $T_2$ still reads an uncommitted value. If $T_4$ aborts before committing, $T_2$ must be aborted too — a cascade — and the only thing recoverability guarantees is that this cascade is still *possible* to carry out, because $T_2$ has not yet committed.

**Making it cascadeless requires moving the read, not the commit**: $r_2(A)$ would have to occur after $c_4$. That is a change to the schedule's interleaving rather than to its commit order, which is why cascadelessness is a property a *protocol* must enforce as operations are scheduled — and why strict two-phase locking, which holds write locks until commit, delivers it as a by-product ([4.3](04-03-two-phase-locking-deadlock-and-granularity.md)).

</details>

## Flashback

**From Lesson 4.1 (transactions & the ACID properties):** A transaction reads `stock` (currently 10), computes $10 - 3 = 7$, writes `stock = 7`, inserts a shipment row, and commits.

(a) The machine crashes after the write and before the insert. Give the state on disk, the ACID property violated, and whether recovery uses undo or redo.
(b) Two such transactions run concurrently and both read 10 before either writes. Give the final `stock`, the number of shipment rows, and the property violated.
(c) State whether `CHECK (stock >= 0)` would catch (b).

<details>
<summary>Solution</summary>

(a) Disk holds `stock = 7` with **no shipment row** — stock was consumed and nothing was shipped.

**Atomicity** violated: the two writes are one unit and only the first happened.

Recovery uses **undo**, restoring `stock = 10`. The transaction never committed, so none of its effects may survive. Redo is the opposite case, for committed changes that have not reached disk.

(b) Both read 10, both compute 7, both write 7. **Final `stock` is 7, with 2 shipment rows.**

**Isolation** violated. Six units were shipped and only three deducted. A serial execution gives `stock = 4` with 2 shipment rows, and no serial order produces 7. This is the **lost update** anomaly.

(c) **No.** The constraint tests whether `stock` is non-negative, and 7 passes comfortably. Every declared constraint holds at both commits.

Constraints are evaluated per transaction against the state it produces, so they cannot detect that another transaction's write was overwritten. A constraint checks a **state**; an isolation anomaly is a property of a **history**. The lost update leaves a state that passes every check, which is why declared constraints are not a substitute for isolation.

</details>

## Connections

- **Backward:** this is the precise version of [4.1](04-01-transactions-and-the-acid-properties.md)'s "equivalent to *some* serial execution," and the lost update of that lesson is a two-cycle in the graph — each transaction reads before the other writes, so neither can go first.
- **Forward:** [4.3](04-03-two-phase-locking-deadlock-and-granularity.md) gives two-phase locking, a protocol that makes cyclic schedules impossible to construct rather than detecting them afterwards, and its strict variant adds recoverability and cascadelessness. [4.4](04-04-isolation-levels-and-mvcc.md) is what you get by deliberately permitting some cycles in exchange for concurrency.
- **Sideways:** the acyclicity test and the topological order are exactly the machinery of [`algorithms` 3.2](../../algorithms/lessons/03-02-topological-sort-and-strongly-connected-components.md) — a directed acyclic graph admits a topological order, and depth-first search finds a cycle if one exists. The database is running a topological sort on its own execution history.
