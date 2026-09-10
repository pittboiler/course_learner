# Database Systems · Lesson 3.7: Query optimization & join ordering

> ⏱ ~15 min · Module 3: Storage, indexing & query processing · Builds on: [3.6 (selectivity & cost estimation)](03-06-selectivity-statistics-and-cost-estimation.md), [3.5 (join algorithms)](03-05-query-operators-and-join-algorithms.md) · Unlocks: [4.1 (transactions & ACID)](04-01-transactions-and-the-acid-properties.md)

## Why this matters

This lesson is what Module 1 promised. SQL is declarative — you state the answer's properties and the system chooses the procedure — and the optimizer is where that choice is made. Everything since [3.1](03-01-storage-pages-and-the-buffer-manager.md) has been assembling its inputs: access paths, operator costs, cardinality estimates.

What is left is the search. And the search matters: the figure prices two join orders for one four-table query at 44,400 and 2,204,000 — **fifty times apart, for identical results**. The optimizer's job is to find the first without enumerating all of the second, and the technique it uses is one you already know from a different setting.

## The idea

Optimization runs in two stages.

**Logical rewriting** applies identities that are always improvements, with no costing needed. Push selections down toward the leaves ([1.2](01-02-relational-algebra.md)); push projections down to narrow rows early; propagate predicates through equalities, so `o.region_id = r.region_id AND o.region_id = 3` yields `r.region_id = 3` for free; flatten correlated subqueries into joins and semi-joins ([1.6](01-06-subqueries-exists-and-views.md)). These are unconditional wins and happen first.

**Cost-based search** is the hard part: choose a join order and a join method for each join. Here there is no rule, only arithmetic, because the right answer depends on sizes, indexes and buffer memory.

The search space is enormous. With $n$ tables there are $n!$ **left-deep** orders alone — plans where every join's right input is a base table — and vastly more if the shape is unconstrained. For 12 tables that is 479 million left-deep orders against 28 *trillion* plans of arbitrary shape.

Selinger's insight, from System R in 1979 and still the basis of most optimizers, is that this is a **dynamic programming** problem. The best plan for a set of tables is built from the best plan for a subset. So solve every subset once, smallest first, and there are only $2^n$ subsets — **4,096 for 12 tables**, not 479 million.

One complication spoils the clean recurrence, and it is the interesting-orders point from [3.5](03-05-query-operators-and-join-algorithms.md): the cheapest plan for a subset may not be the best *contribution* to a larger plan, if a dearer one delivers its output already sorted on a key a later join needs. So the table is keyed not by subset alone but by **subset and output order**.

## The formal version

> **The plan space.** For $n$ tables, the number of **left-deep** join orders is $n!$; the number of plans of arbitrary shape is $\dfrac{(2n-2)!}{(n-1)!}$.

| $n$ | left-deep orders | all shapes | DP subsets |
|---|---|---|---|
| 4 | 24 | 120 | 16 |
| 6 | 720 | 30,240 | 64 |
| 8 | 40,320 | 17,297,280 | 256 |
| 12 | 479,001,600 | 28,158,588,057,600 | 4,096 |

**Most optimizers restrict themselves to left-deep plans**, for two reasons. The right input of every join is then a base table, so an index nested loop is available at every step; and the left input is a pipeline, so only one intermediate ever has to be materialized. The restriction can miss the true optimum — bushy plans are sometimes better — and it is accepted because the space it prunes is where the cost lies.

> **Selinger dynamic programming.**
>
> ```
> for each table T:            best[{T}] = cheapest access path for T
> for k = 2 to n:
>     for each subset S of size k that is connected:
>         best[S] = min over splits S = L + R and join methods m of
>                       cost(best[L]) + cost(best[R]) + cost_m(|L|, |R|)
> ```
>
> The answer is `best[all tables]`.

Two details do real work.

**Connected subsets only.** A subset whose tables share no join predicate would have to be combined by Cartesian product, which is almost never right, so those subsets are skipped. On a typical query this prunes far more than the $2^n$ bound suggests.

**Keyed by interesting order.** The table holds, for each subset, the cheapest plan overall *and* the cheapest plan for each output order that some later operator could use — a join key, or an `ORDER BY` or `GROUP BY` column.

> **Cost.** Each candidate is priced with the operator costs of [3.5](03-05-query-operators-and-join-algorithms.md) applied to the cardinality estimates of [3.6](03-06-selectivity-statistics-and-cost-estimation.md).

Which is the honest limitation of the whole enterprise: **the search is exact and the objective function is a guess.** An optimizer finds the true minimum of an estimated cost, and estimation error is the reason bad plans happen ([3.6](03-06-selectivity-statistics-and-cost-estimation.md)).

## Picture

![The dynamic programming table built level by level: four base tables at size one, three connected pairs at size two with FA cheapest at 400 and BF most expensive at 2,000,000, two size-three subsets each keeping the cheaper of two alternatives, and the final four-table answer at 44,400 against a worst legal order of 2,204,000](assets/03-07-fig1.svg)

Each size-3 cell shows the alternative it discarded. Those discards are what makes the algorithm polynomial: a bad subplan is eliminated once and never reconsidered inside any larger plan.

## Worked examples

**Example 1 — running the DP by hand.**

Four tables, with filters already pushed down:

| table | rows after filters |
|---|---|
| B — `booking` | 2,000,000 |
| P — `passenger`, filtered to `country = 'GB'` | 5,000 of 50,000 |
| F — `flight` | 20,000 |
| A — `airport`, filtered to `city = 'London'` | 6 of 300 |

Join predicates: B–P on `pid`, B–F on `flight_no`, F–A on `origin`. There is no P–F or P–A or B–A predicate, so those pairs are disconnected.

Cost model, simplified for tracing: **the cost of a plan is the sum of the sizes of the intermediates it produces**, which is the classic Selinger simplification and captures what actually matters.

**Size 2.** Only three pairs are connected. Cardinalities come from the join formula of [3.6](03-06-selectivity-statistics-and-cost-estimation.md):

| pair | cardinality | why |
|---|---|---|
| FA | $20{,}000 \times 6 / 300 = 400$ | flights from a London airport |
| BP | $2{,}000{,}000 \times 5{,}000/50{,}000 = 200{,}000$ | bookings by a GB passenger |
| BF | $2{,}000{,}000 \times 20{,}000/20{,}000 = 2{,}000{,}000$ | every booking has a flight — no filter reaches it |

**Size 3.** Each connected triple is built from a size-2 answer plus one table, and the DP keeps only the cheaper option:

| subset | option | cost | kept |
|---|---|---|---|
| ABF | $(F \bowtie A) \bowtie B$ | $400 + 40{,}000 = 40{,}400$ | **yes** |
| | $(B \bowtie F) \bowtie A$ | $2{,}000{,}000 + 40{,}000 = 2{,}040{,}000$ | no |
| BFP | $(B \bowtie P) \bowtie F$ | $200{,}000 + 200{,}000 = 400{,}000$ | **yes** |
| | $(B \bowtie F) \bowtie P$ | $2{,}000{,}000 + 200{,}000 = 2{,}200{,}000$ | no |

The other two triples, ABP and AFP, are disconnected and never considered.

**Size 4.** The final answer, at 4,000 output rows:

| split | cost | |
|---|---|---|
| $ABF \bowtie P$ | $40{,}400 + 4{,}000 = \mathbf{44{,}400}$ | **best** |
| $BP \bowtie FA$ | $200{,}000 + 400 + 4{,}000 = 204{,}400$ | |
| $BFP \bowtie A$ | $400{,}000 + 4{,}000 = 404{,}000$ | |

**Best plan: $((F \bowtie A) \bowtie B) \bowtie P$ at 44,400.**

Now compare with the worst *legal* left-deep order, $((B \bowtie F) \bowtie P) \bowtie A$, at **2,204,000** — fifty times worse, returning exactly the same 4,000 rows.

**The difference is entirely where the filters land.** The good plan starts with the two smallest inputs, so the six-airport filter propagates immediately and every subsequent intermediate is small. The bad plan joins the two largest tables first, building a 2,000,000-row intermediate before any filter has narrowed anything, and then filters it down to 4,000. **A filter is worth nothing until it is applied**, and join order decides when.

**Example 2 — why the cheapest subplan is not always the right one to keep.**

Suppose the size-3 subset ABF has two candidate plans:

| plan | cost | output order |
|---|---|---|
| $(F \bowtie A) \bowtie B$ by hash join | 40,400 | none |
| $(F \bowtie A) \bowtie B$ by sort-merge on `pid` | 61,000 | **sorted on `pid`** |

A naive DP keeps only the first and discards the second. But the remaining join is to P on `pid`, and P is small enough to sort cheaply. With the sorted input in hand, that final join is a bare merge; without it, the plan must sort or hash.

If sorting for the final join costs 30,000, the two totals are

$$\text{hash subplan: } 40{,}400 + 30{,}000 + 4{,}000 = 74{,}400 \qquad \text{sorted subplan: } 61{,}000 + 4{,}000 = 65{,}000$$

**The dearer subplan produces the cheaper total.** A DP keyed on subset alone cannot find this, because it threw the winner away at size 3 as "not cheapest."

The fix is the one Selinger's paper introduced along with the DP: **keep the cheapest plan per (subset, interesting order) pair.** An order is *interesting* if some remaining operator could use it — a join key still to be joined on, an `ORDER BY`, a `GROUP BY`, a `DISTINCT`. Since a query has few such columns, the table grows by a small constant factor and the algorithm stays polynomial.

**And this is the general shape of the whole optimizer.** It is a search over a space that has been deliberately narrowed — left-deep only, connected subsets only, cheapest-per-order only — using a cost function that is a guess. Every one of those narrowings can in principle exclude the true optimum, and all are accepted because the alternative is not searching at all. When the plan is bad, the cause is almost always the guess rather than the search ([3.6](03-06-selectivity-statistics-and-cost-estimation.md)), which is why the practical remedy is better statistics rather than a better optimizer.

## Watch out

- **You might think the optimizer finds the best plan.** It finds the cheapest plan in a restricted space under estimated costs. All three qualifiers matter, and the third matters most.
- **You might think join order is a detail next to choosing the join method.** Example 1's spread from join order alone is fifty-fold, and it grows with the number of tables. Method selection rarely spans more than a factor of ten.
- **You might think dynamic programming works because it prunes bad plans.** It works because it *shares* work: each subset is solved once and reused in every larger plan containing it. Pruning is a consequence, not the mechanism.
- **You might think keeping only the cheapest plan per subset is obviously correct.** It is exactly the assumption Example 2 breaks. Optimal substructure holds only once "best" is defined to include output order.

## One-liner

> The best plan for a set of tables is built from the best plans for its subsets, so solve all $2^n$ subsets instead of enumerating $n!$ orders — and key the table by output order too, or you will discard the subplan that wins.

## Problems

**P1 (🟢)** A query joins 6 tables.

(a) Give the number of left-deep join orders.
(b) Give the number of subsets the DP must consider.
(c) Give the ratio between them.
(d) A seventh table is added. Give the factor by which each of (a) and (b) grows.

**P2 (🟡)** Three tables with filters applied: $X$ (100 rows), $Y$ (50,000 rows), $Z$ (1,000,000 rows). Join predicates exist between $X$ and $Y$, and between $Y$ and $Z$; there is none between $X$ and $Z$. The join cardinalities are $|X \bowtie Y| = 2{,}000$ and $|Y \bowtie Z| = 800{,}000$, and the three-way result is 5,000 rows.

Using "cost = sum of intermediate sizes":

(a) List the connected two-table subsets and their cardinalities.
(b) Give the cost of $(X \bowtie Y) \bowtie Z$.
(c) Give the cost of $(Y \bowtie Z) \bowtie X$.
(d) Give the winner, the ratio between the two, and the one-sentence reason.

**P3 (🔴, optional)** A four-table query over $R$ (500 rows), $S$ (200,000), $T$ (3,000,000), $U$ (80 rows), with join predicates $R$–$S$, $S$–$T$, and $T$–$U$. The cardinalities are

$$|RS| = 4{,}000, \quad |ST| = 3{,}000{,}000, \quad |TU| = 6{,}000, \quad |RST| = 60{,}000, \quad |STU| = 6{,}000, \quad |RSTU| = 120$$

Cost is the sum of intermediate sizes.

(a) Give the connected subsets of size 2 and size 3, with any that are disconnected named and excluded.
(b) Fill in the DP table for size 3, showing every option considered and which is kept.
(c) Give the final answer: the best cost and the best plan.
(d) Give the cost of the worst connected left-deep order, the ratio to your answer, and state which single structural feature of this query makes the ratio so large.

<details>
<summary>Solutions</summary>

**P1**

(a) $6! = \mathbf{720}$ left-deep orders.

(b) $2^6 = \mathbf{64}$ subsets.

(c) $720/64 = \mathbf{11.25}$.

(d) Left-deep orders grow by a factor of $7$ (from $6!$ to $7!$), since $n! \to (n+1)!$ multiplies by $n+1$. Subsets grow by a factor of $\mathbf{2}$ ($64 \to 128$).

**That difference is the whole argument.** Adding a table multiplies the enumeration by $n+1$ and the DP by 2, so the gap widens with every table. By $n = 12$ it is a factor of 117,000; by $n = 15$ the enumeration is over a trillion orders and the DP has 32,768 subsets.

**P2**

(a) The connected pairs are **$XY$ at 2,000** and **$YZ$ at 800,000**. The pair $XZ$ is disconnected — no join predicate — so joining them would need a Cartesian product of $100 \times 1{,}000{,}000 = 10^8$ rows, and the DP skips it.

(b) $(X \bowtie Y) \bowtie Z$: the intermediate is 2,000 and the result 5,000.

$$2{,}000 + 5{,}000 = \mathbf{7{,}000}$$

(c) $(Y \bowtie Z) \bowtie X$: the intermediate is 800,000 and the result 5,000.

$$800{,}000 + 5{,}000 = \mathbf{805{,}000}$$

(d) **$(X \bowtie Y) \bowtie Z$ wins**, by a ratio of $805{,}000/7{,}000 \approx \mathbf{115}$.

**The reason:** joining the 100-row table first collapses $Y$ from 50,000 rows to 2,000 before $Z$ is ever touched, whereas the other order builds an 800,000-row intermediate that the $X$ join then discards 99 percent of.

The general heuristic behind it — start from the most selective input and let the restriction propagate — is what a cost-based optimizer rediscovers arithmetically on every query, and it is why a small filtered dimension table belongs at the start of a plan rather than the end.

**P3**

(a) **Connected pairs:** $RS$ (4,000), $ST$ (3,000,000), $TU$ (6,000).

**Excluded pairs:** $RT$, $RU$, $SU$ — no join predicate connects any of them, so each would require a Cartesian product.

**Connected triples:** $RST$ (60,000) and $STU$ (6,000).

**Excluded triple:** $RTU$ — it contains $R$, $T$ and $U$, and $R$'s only predicate is to $S$, which is absent, so $R$ is isolated within the set. Also $RSU$, where $U$'s only predicate is to $T$, absent.

(b) Size-3 table:

| subset | option | cost | kept |
|---|---|---|---|
| $RST$ | $(R \bowtie S) \bowtie T$ | $4{,}000 + 60{,}000 = \mathbf{64{,}000}$ | **yes** |
| | $(S \bowtie T) \bowtie R$ | $3{,}000{,}000 + 60{,}000 = 3{,}060{,}000$ | no |
| $STU$ | $(T \bowtie U) \bowtie S$ | $6{,}000 + 6{,}000 = \mathbf{12{,}000}$ | **yes** |
| | $(S \bowtie T) \bowtie U$ | $3{,}000{,}000 + 6{,}000 = 3{,}006{,}000$ | no |

Both triples reject the option that starts with $ST$, and for the same reason: $S \bowtie T$ produces 3,000,000 rows, as large as $T$ itself, because no filter reaches it.

(c) Size-4 splits, with the final result at 120 rows:

| split | cost |
|---|---|
| $STU \bowtie R$ | $12{,}000 + 120 = \mathbf{12{,}120}$ |
| $RST \bowtie U$ | $64{,}000 + 120 = 64{,}120$ |
| $RS \bowtie TU$ | $4{,}000 + 6{,}000 + 120 = 10{,}120$ |

The third is cheapest at **10,120** — but it is a **bushy** plan, joining two two-table results. A left-deep-only optimizer cannot produce it and would return $STU \bowtie R$ at **12,120**.

**Best plan overall: $(R \bowtie S) \bowtie (T \bowtie U)$ at 10,120.**
**Best left-deep plan: $((T \bowtie U) \bowtie S) \bowtie R$ at 12,120.**

This is a clean instance of the left-deep restriction costing something — 20 percent here, which is typical: the restriction usually loses a little and occasionally loses a lot, and it is kept because it shrinks the search space by orders of magnitude.

(d) The connected left-deep orders and their costs, taking the intermediates in sequence:

| order | intermediates | cost |
|---|---|---|
| $((T \bowtie U) \bowtie S) \bowtie R$ | 6,000 + 6,000 + 120 | 12,120 |
| $((R \bowtie S) \bowtie T) \bowtie U$ | 4,000 + 60,000 + 120 | 64,120 |
| $((S \bowtie T) \bowtie U) \bowtie R$ | 3,000,000 + 6,000 + 120 | 3,006,120 |
| $((S \bowtie T) \bowtie R) \bowtie U$ | 3,000,000 + 60,000 + 120 | 3,060,120 |

**Worst: 3,060,120**, a ratio of $3{,}060{,}120 / 10{,}120 \approx \mathbf{302}$ against the best plan.

**The structural feature responsible is that $S \bowtie T$ is unfiltered.** Both $S$ and $T$ are large, their join predicate is a foreign key so it removes nothing, and the result is 3,000,000 rows — the size of $T$. The only two things that shrink this query are the 500-row $R$ and the 80-row $U$, and they sit at opposite ends of the join graph $R - S - T - U$.

So a plan either reaches one of the small tables first and stays small, or starts in the middle and pays for a 3,000,000-row intermediate it will later discard 99.996 percent of. **A chain-shaped join graph with the selective tables at its ends is exactly the case where join order matters most**, and it is why an optimizer's advantage over a fixed rule grows with the shape of the query rather than merely its size.

</details>

## Flashback

**From Lesson 3.6 (selectivity, statistics & cost estimation):** A `sale` table has 900,000 rows. The column `store_id` has 300 distinct values, `channel` has 3, and `quarter` has 8.

(a) Give the estimated rows for `WHERE store_id = 42 AND channel = 'web'`.
(b) In fact store 42 is web-only. Give the true row count and the factor by which the estimate is wrong.
(c) Name the assumption that failed and the two practical remedies.

<details>
<summary>Solution</summary>

(a) Under uniformity each equality gets $1/V$, and independence multiplies:

$$900{,}000 \times \frac{1}{300} \times \frac{1}{3} = \mathbf{1{,}000} \text{ rows}$$

(b) If store 42 is web-only, the `channel` predicate removes nothing from the rows already selected by `store_id = 42`:

$$900{,}000 \times \frac{1}{300} = \mathbf{3{,}000} \text{ rows}$$

The estimate is low by a factor of **3**, which is exactly $V(\text{channel}) = 3$ — the full selectivity of the redundant predicate, applied as though it were informative.

(c) **The independence assumption failed**: `channel` is functionally determined by `store_id`, so the two predicates carry the same information rather than independent information.

Two remedies:

1. **Multi-column statistics** on `(store_id, channel)`, which most systems support and none collect by default. The optimizer then knows the pair's true joint selectivity rather than multiplying marginals.
2. **Normalize the dependency away.** A store's channel is a fact about the store, not about a sale, and storing it on `sale` is the transitive dependency [2.4](02-04-anomalies-and-the-normal-forms.md) warns against. Moving `channel` to a `store` table means the query joins rather than double-filtering, and the join estimate — being on a foreign key — is one the optimizer gets exactly right.

Note the error factor is bounded by $V$ of the redundant column, so it is mild here at 3 and would be severe on a column with 200 distinct values. **The damage from a correlation scales with how selective the redundant predicate appears to be.**

</details>

## Connections

- **Backward:** the logical rewrites are the algebra identities of [1.2](01-02-relational-algebra.md), now applied by a machine rather than by hand. Every cost the search evaluates comes from [3.5](03-05-query-operators-and-join-algorithms.md), and every cardinality from [3.6](03-06-selectivity-statistics-and-cost-estimation.md) — which is why the search being exact does not make the answer right.
- **Forward:** Module 3 ends here, and Module 4 changes the question from "how fast" to "how correct when many users and a crash are involved." Plans are also where isolation shows up in practice: the locks a plan acquires depend on the access paths it chose, which is [4.3](04-03-two-phase-locking-deadlock-and-granularity.md).
- **Sideways:** this is dynamic programming over subsets, the same idiom as [`algorithms` 2.5](../../algorithms/lessons/02-05-dynamic-programming-and-knapsack.md) — optimal substructure plus overlapping subproblems, solved bottom-up in a table. The interesting-orders complication is what happens when the naive state is not quite a sufficient statistic for the future, and the fix, enriching the state until substructure holds, is the standard repair in every dynamic program that needs it.
