# Distributed Systems · Lesson 2.4: CRDTs and strong eventual consistency

> ⏱ ~15 min · Module 2: Consistency and Replication · Builds on: [2.3 (eventual consistency and anti-entropy)](02-03-eventual-consistency-and-anti-entropy.md), [1.7 (ordered broadcast)](01-07-ordered-broadcast-fifo-causal-total.md) · Unlocks: [2.5 (replication strategies)](02-05-replication-strategies.md)

## Why this matters

[2.3](02-03-eventual-consistency-and-anti-entropy.md) ended by handing the hard part to the application: detect the conflict with version vectors, then merge. But an arbitrary merge function does **not** produce convergence. If merging depends on the order the updates arrived, or on how many times each arrived, then two replicas that received the same updates in different orders end up in different states — and they stay different, forever, with no error anywhere.

The fix is to stop writing merge functions and start choosing data types whose merge is a mathematical object with three properties. Get those, and convergence is a **theorem** rather than a hope: no conflict resolution, no timestamps, no coordination, no lost updates. That is a genuinely strong guarantee obtained from a genuinely weak system, and it is the nicest result in Module 2.

The price is that not every value has such a type, and knowing which do not is as important as knowing which do.

## The idea

Ask what a merge function has to satisfy for delivery order to stop mattering.

Replicas receive updates over an unreliable network, so the same update may arrive **twice** — merge must be **idempotent**, $m \sqcup m = m$. Updates may arrive in **either order** — merge must be **commutative**, $a \sqcup b = b \sqcup a$. They may arrive in **any grouping** — merge must be **associative**, $(a \sqcup b) \sqcup c = a \sqcup (b \sqcup c)$.

Those three properties have a name. A set with an associative, commutative, idempotent binary operation is a **join-semilattice**, and the operation is the **least upper bound**. The partial order comes free: define $a \le b$ to mean $a \sqcup b = b$.

Now add one more requirement: every local update must move the state **upward** in that order, never sideways or down. Then each replica is climbing a lattice, merging is taking least upper bounds, and — this is the whole theorem — **any two replicas that have seen the same set of updates hold the same state, whatever order and however many times they saw them.** The join of a set does not depend on how you bracket it or how often you repeat an element.

A data type built this way is a **conflict-free replicated data type**. The counter is the clean example: instead of one number, keep a vector with one entry per replica, each replica only ever incrementing its own entry, merge by pointwise maximum, and report the sum. Pointwise max is associative, commutative and idempotent; incrementing your own entry only ever goes up. Convergence follows without a single line of conflict-resolution logic.

**What you give up is the ability to enforce a constraint that the join does not preserve.** If the invariant is "the balance never goes below zero", two replicas can each legally decrement, and the join of two legal states is an illegal one. No CRDT saves you, because the problem is not the merge — it is that the invariant is not a property the lattice respects.

## The formal version

> **Join-semilattice.** A set $S$ with $\sqcup : S \times S \to S$ that is associative, commutative and idempotent. The induced order is $a \le b \iff a \sqcup b = b$, and $a \sqcup b$ is the least upper bound of $a$ and $b$.

> **State-based CRDT (CvRDT).** A replicated object whose state lies in a join-semilattice, whose local updates are **inflationary** ($s \le \mathrm{update}(s)$), and whose replicas periodically exchange states and take $\sqcup$.

> **Convergence theorem.** If every replica's state is in a join-semilattice, updates are inflationary, and merges use $\sqcup$, then any two replicas that have incorporated the same set of updates have identical states, independent of the order and multiplicity of delivery.

The proof is one line: the state at a replica is the join of the updates it has incorporated, and the join of a *set* is well-defined — associativity removes bracketing, commutativity removes order, idempotence removes duplicates.

> **Operation-based CRDT (CmRDT).** Replicas broadcast operations rather than states. Requires **exactly-once causal delivery** ([1.7](01-07-ordered-broadcast-fifo-causal-total.md)), and needs only that concurrent operations **commute**.

The trade is bandwidth against delivery requirements: state-based ships whole states and tolerates a lossy, duplicating, reordering channel; operation-based ships tiny deltas and demands a causal broadcast layer to be correct.

> **Strong eventual consistency (SEC).** Eventual consistency, plus: any two replicas that have delivered the same set of updates have equivalent state. No conflict resolution, no rollback, no coordination.

**The standard catalogue:**

| type | state | merge | value |
|---|---|---|---|
| G-Counter | $(c_1, \dots, c_n)$, replica $i$ increments $c_i$ | pointwise max | $\sum_i c_i$ |
| PN-Counter | two G-Counters $P$, $N$ | pointwise max of each | $\sum P - \sum N$ |
| G-Set | a set | union | the set |
| 2P-Set | add-set $A$, remove-set $R$ | union of each | $A \setminus R$ |
| OR-Set | tagged adds $A$, tagged removes $R$ | union of each | $\{e : \exists t,\ (e,t) \in A \setminus R\}$ |
| LWW-Register | $(\text{value}, \text{timestamp})$ | larger timestamp wins | the value |

Two notes on that table. **LWW-Register is a legitimate CRDT** — max on timestamps is a join — which shows that being a CRDT guarantees *convergence*, not *not losing data*. And **2P-Set has a bug by design**: once an element is in $R$ it can never return, because union is inflationary and there is no way to take something back out. The OR-Set fixes this by giving every add a unique tag, so a re-add introduces a tag that no earlier remove could have named.

## Picture

![A Hasse diagram of the states of a two-replica grow-only counter, with nodes labelled by pairs from zero comma zero at the bottom up to two comma two at the top, and edges going upward for each increment. The states two comma one and one comma two, and their join two comma two, are highlighted. Annotations state that merging two comma one with itself returns two comma one, that merging two comma one with one comma two returns two comma two in either order, that merge is pointwise maximum, and that the resulting value is four.](assets/02-04-fig1.svg)

Every increment is a step upward, so a replica's trajectory through this diagram is monotone. Two replicas that diverge take different paths, and the merge is the unique lowest node above both of them — which is why they land on the same state no matter what route they took.

## Worked examples

**Example 1 — a counter that converges under any delivery schedule.**

Three replicas $(A, B, C)$ run a G-Counter, all starting at $(0,0,0)$. Four increments occur: three at $A$, two at $B$, five at $C$, and one more at each of $A$ and $B$.

The four update states to be merged are $(3,0,0)$, $(0,2,0)$, $(0,0,5)$ and $(1,1,0)$.

Merging them in one order: $(3,0,0) \sqcup (0,2,0) = (3,2,0)$, then $\sqcup (0,0,5) = (3,2,5)$, then $\sqcup (1,1,0) = (3,2,5)$.

In another order, with $(0,0,5)$ delivered twice: $(0,0,5) \sqcup (1,1,0) = (1,1,5)$, $\sqcup (0,0,5) = (1,1,5)$, $\sqcup (3,0,0) = (3,1,5)$, $\sqcup (0,2,0) = (3,2,5)$.

**Enumerating all 24 orders, each also with one update duplicated, gives exactly one outcome: $(3,2,5)$, value $3 + 2 + 5 = 10$.**

Now break idempotence. Replace pointwise max with pointwise **sum** — the "obvious" merge for a counter, and the one people reach for. The same enumeration produces **five distinct outcomes**: $(4,3,5)$, $(4,3,10)$, $(4,5,5)$, $(5,4,5)$ and $(7,3,5)$, with values 12, 17, 14, 14 and 15.

**One property removed, and the replicas no longer converge at all.** Note that the sum-merge is still associative and commutative — it fails only idempotence — and that single failure is enough, because the network will deliver something twice. This is the concrete content of the theorem: the three properties are not a stylistic preference, they are each load-bearing.

**Example 2 — why a set needs tags, and the seat that has no CRDT.**

**The 2P-Set failure.** A replica runs `add(x)`, then `remove(x)`, then `add(x)` again. The add-set is $\{x\}$ and the remove-set is $\{x\}$, so the value is $\{x\} \setminus \{x\} = \emptyset$. **The element cannot be re-added, ever.** The second add changed nothing, because $x$ was already in $A$ and union is idempotent.

**The OR-Set fix.** Every add carries a unique tag. Replica $A$ adds $x$ with tag $t_1$, so $A = \{(x, t_1)\}$. $A$ then removes $x$, which moves every tag it currently knows for $x$ into $R$: $R = \{(x,t_1)\}$. **Concurrently**, replica $B$ adds $x$ with a fresh tag $t_2$.

Merging: $A_{\text{merged}} = \{(x,t_1), (x,t_2)\}$ and $R_{\text{merged}} = \{(x,t_1)\}$. The value is $\{x\}$, because the tag $t_2$ survives — and $B$'s add is *concurrent* with $A$'s remove, so there was no way for the remove to have named it.

**This is "add wins", and it is a decision, not a derivation.** A remove only cancels the adds it has actually seen. The opposite policy ("remove wins") is also constructible. What the CRDT machinery guarantees is that whichever you choose, every replica reaches the same answer; it does not choose for you.

**And the seat that has no CRDT.** One seat remains; two replicas each hold `available = true` and each receive a booking. Whatever lattice you embed this in, each replica's local state is legal, and the join of two legal states must be above both — so it contains both bookings. There is no join that yields "one booking succeeded, one failed", because that answer is **not determined by the two states**; it depends on which came first, and no information in either replica records that.

**The general rule: a CRDT can maintain any invariant that is preserved by joins, and no invariant that is not.** "The set contains everything anyone added" is join-preserved. "At most one booking exists" is not, and never will be. For those you need coordination, which is Module 3 — and it is why the ticketing system in [`databases` 4.6](../../databases/lessons/04-06-nosql-and-distributed-data.md) keeps a strongly consistent core however much else it distributes.

## Watch out

- **You might think a CRDT means you never lose data.** It means replicas converge. The LWW-Register is a perfectly good CRDT that discards one of every pair of concurrent writes — convergence and data preservation are different properties, and the table tells you which types give you the second.
- **You might think operation-based CRDTs are simply cheaper.** They ship less, and they are only correct on top of exactly-once causal delivery. If you have that, you have already built most of [1.7](01-07-ordered-broadcast-fifo-causal-total.md)'s machinery; if you do not, a duplicated increment is a wrong answer. State-based CRDTs work over any channel at all, which is why they are the safer default.
- **You might think you can add a constraint to a CRDT.** Adding "the counter must not go below zero" to a PN-Counter does not produce a constrained CRDT; it produces a type where the join of two valid states is invalid. The check has to move somewhere that can see both updates at once, and that somewhere is a coordination protocol.

## One-liner

> Stop writing merge functions and start choosing types whose merge is a least upper bound: associativity kills ordering, commutativity kills direction, idempotence kills duplicates, and what remains is convergence as a theorem — for exactly those invariants that survive taking joins, and no others.

## Problems

**P1 (🟢)** Four replicas $(A,B,C,D)$ run a G-Counter.

(a) Replica states are $(2,0,1,0)$, $(0,3,0,0)$ and $(2,0,0,4)$. Give the merged state and its value.
(b) State what the merged state and value would be if the same three states were merged in the reverse order.
(c) Replica $A$ receives $(0,3,0,0)$ twice. Give the resulting state after both merges, starting from $(2,0,1,0)$.
(d) A developer proposes storing a single integer per replica and merging by taking the larger integer. Give a two-replica execution where this loses an increment.

**P2 (🟡)** A PN-Counter is a pair of G-Counters $(P, N)$ over three replicas.

(a) Replica $A$ holds $P = (4,0,0)$, $N = (1,0,0)$. Give its value.
(b) Replica $B$ holds $P = (0,2,0)$, $N = (0,3,0)$. Give its value, and state what it means that this value is negative.
(c) Give the merged state of $A$ and $B$ and its value.
(d) State whether "this PN-Counter never drops below zero" can be enforced by the CRDT, with the reason.

**P3 (🔴, optional)** A collaborative shopping list is replicated with an OR-Set.

(a) Replica $A$ adds `milk` with tag $t_1$ and replica $B$ adds `milk` with tag $t_2$, concurrently. Give the merged state and the value.
(b) $A$ then removes `milk`, having seen only its own add. Give $A$'s add-set and remove-set, then the state after merging with $B$, and the value.
(c) State which policy — add-wins or remove-wins — the OR-Set implements, and give the smallest change to the *remove* operation that would implement the other.
(d) The team wants the list to hold at most 20 items, enforced across all replicas. State whether an OR-Set can enforce this, and give the one sentence that decides it.

<details>
<summary>Solutions</summary>

**P1**

(a) Pointwise maximum across the three:

$$\max\big((2,0,1,0), (0,3,0,0), (2,0,0,4)\big) = \mathbf{(2,3,1,4)}$$

Value $= 2 + 3 + 1 + 4 = \mathbf{10}$.

(b) **Identical: $(2,3,1,4)$, value 10.** Pointwise max is commutative and associative, so the join of a set of states does not depend on the order they are combined in. That is the entire content of the convergence theorem, and it is what makes the merge safe to run whenever two replicas happen to gossip.

(c) $(2,0,1,0) \sqcup (0,3,0,0) = (2,3,1,0)$, and merging the same state again gives $(2,3,1,0) \sqcup (0,3,0,0) = \mathbf{(2,3,1,0)}$.

Idempotence means the duplicate is free. This is why a CRDT tolerates a channel that retries blindly — a duplicated merge is a no-op rather than a double count.

(d) *Accept criterion: any execution where two replicas increment concurrently and the larger-integer merge keeps only one of the increments.*

1. Both replicas start at 0.
2. $A$ increments twice: $A = 2$.
3. $B$ increments twice: $B = 2$.
4. They merge by taking the larger: $\max(2,2) = 2$.

**Four increments happened and the counter reads 2.** The failure is that a single integer cannot say *who* incremented, so two replicas' independent progress is indistinguishable from one replica's, and the max discards half of it. The per-replica vector exists precisely to make the contributions separable — each coordinate is owned by one writer, so max never has to choose between two independent claims.

**P2**

(a) Value $= \sum P - \sum N = 4 - 1 = \mathbf{3}$.

(b) $\sum P - \sum N = 2 - 3 = \mathbf{-1}$.

It means replica $B$ has locally observed more decrements than increments. **This is not an error** — $B$ has simply not yet received $A$'s increments. A replica's local value is a partial view, and a PN-Counter makes no promise that a partial view is non-negative even when the merged value is.

(c) Merge each G-Counter pointwise:

$$P = \max\big((4,0,0),(0,2,0)\big) = (4,2,0), \qquad N = \max\big((1,0,0),(0,3,0)\big) = (1,3,0)$$

Value $= (4+2) - (1+3) = 6 - 4 = \mathbf{2}$.

(d) **It cannot.**

The reason is that the constraint is not preserved by joins. Suppose the true merged value is 1 and two replicas each concurrently decrement. Each replica's local state is legal — each sees the value go from 1 to 0 — and the join of the two states has $\sum N$ two larger than before, giving $-1$. The join of two valid states is invalid, and a semilattice offers no mechanism to reject it, because merge is a total function with no failure case.

**Any invariant of the form "some aggregate stays within a bound" fails this way**, and that is exactly the class of constraint — inventory, balances, quotas, seat counts — that forces a system to coordinate. It is the reason a bank with globally replicated balances still runs the debit path through consensus.

**P3**

(a) Merging: $A_{\text{merged}} = \{(\text{milk}, t_1), (\text{milk}, t_2)\}$, $R_{\text{merged}} = \emptyset$.

Value $= \{\text{milk}\}$. **Two concurrent adds of the same element collapse to one element in the value but two tags in the state** — the tags are bookkeeping, not duplicates in the user's view.

(b) $A$ removes `milk`, moving every tag for `milk` that $A$ currently knows into $R$. $A$ has seen only $t_1$, so:

$$A_{\text{adds}} = \{(\text{milk}, t_1)\}, \qquad A_{\text{removes}} = \{(\text{milk}, t_1)\}$$

After merging with $B$ (which holds $\{(\text{milk},t_2)\}$ and no removes):

$$\text{adds} = \{(\text{milk},t_1), (\text{milk},t_2)\}, \qquad \text{removes} = \{(\text{milk},t_1)\}$$

Value $= \{\text{milk}\}$ — the element **survives**, because $t_2$ is not in the remove set.

(c) The OR-Set implements **add-wins**: a remove cancels only the adds it has observed, so a concurrent add always survives.

The smallest change for **remove-wins** is to make the remove operation record the *element*, not the observed tags — a tombstone on `milk` itself, which then suppresses every tag including ones added later. That is the 2P-Set behaviour, and it brings back the 2P-Set's permanence problem unless the tombstone is itself versioned. **Remove-wins is genuinely harder to build, which is one reason add-wins is the common default** — the other being that silently deleting something a user just added is worse than silently keeping something they just removed.

(d) **It cannot.**

The deciding sentence: *a cap on the list's size is not preserved by union, because two replicas each holding 20 items merge to a set of up to 40, and the join is a total function with nowhere to signal a violation.*

This is P2(d) again in a different costume, and the pattern is worth carrying: **CRDTs maintain invariants that are closed under join — monotone accumulations, "contains everything added" — and no invariant that bounds an aggregate.** The distinction is mechanical enough that you can check it in one step: ask whether the join of two valid states is always valid.

</details>

## Flashback

**From Lesson 2.3 (eventual consistency and anti-entropy):** A key is replicated at four nodes $(A,B,C,D)$. Node $D$ receives two versions carrying version vectors $(2,1,0,1)$ and $(2,1,1,0)$.

(a) State whether one supersedes the other, and what $D$ stores.
(b) A client reads, merges the values by hand, and writes the result at $D$. Give the version vector of that write.
(c) A third version now arrives carrying $(2,1,0,1)$. State what $D$ does with it.

<details>
<summary>Solution</summary>

(a) Compare $(2,1,0,1)$ and $(2,1,1,0)$: the third coordinate gives $0 < 1$ and the fourth gives $1 > 0$. **Neither dominates — a conflict**, so $D$ stores **both as siblings**.

(b) The resolving write takes the pointwise maximum of the siblings and then increments the coordinate of the replica accepting it, which is $D$ (index 4):

$$\max\big((2,1,0,1),(2,1,1,0)\big) = (2,1,1,1), \qquad \text{increment } D: \ \mathbf{(2,1,1,2)}$$

This dominates both siblings, so both are discarded and the key converges to a single version.

(c) $(2,1,0,1) \le (2,1,1,2)$ componentwise, so the arriving version is **already included** in what $D$ holds. $D$ **discards it** — no conflict, no sibling, nothing to do.

This is the third branch of the version-vector rule and it is the one that makes anti-entropy safe to run repeatedly: re-delivering an old version is a no-op rather than a regression, which is the same idempotence property that makes the CRDT merges in this lesson safe.

</details>

## Connections

- **Backward:** [2.3](02-03-eventual-consistency-and-anti-entropy.md) detected conflicts with version vectors and left resolution to the application; this lesson removes the resolution step by restricting the type. Operation-based CRDTs depend on [1.7](01-07-ordered-broadcast-fifo-causal-total.md)'s causal broadcast for correctness.
- **Forward:** [2.5](02-05-replication-strategies.md) shows the alternative design — route every write through one leader, so concurrent writes never happen and no merge is needed. CRDTs and leader-based replication are the two ways out of the same problem, and they sit on opposite sides of the CAP boundary drawn in [3.5](03-05-the-cap-theorem-and-pacelc.md).
- **Sideways:** a join-semilattice is the order-theoretic structure of [`discrete-mathematics` 2.2](../../discrete-mathematics/lessons/02-02-relations-equivalence-and-order.md), and the convergence theorem is the observation that the join of a *set* is well-defined — bracketing, ordering and repetition all drop out of the axioms. The same three properties appear as the conditions for a fold to be parallelisable, which is not a coincidence: both are asking when a computation may be reassociated across machines.
