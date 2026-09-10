# Database Systems · Lesson 3.5: Query operators & join algorithms

> ⏱ ~15 min · Module 3: Storage, indexing & query processing · Builds on: [3.4 (external sorting)](03-04-external-sorting.md), [3.3 (access paths)](03-03-hashing-and-choosing-an-access-path.md) · Unlocks: [3.6 (selectivity & cost estimation)](03-06-selectivity-statistics-and-cost-estimation.md)

## Why this matters

[1.2](01-02-relational-algebra.md) defined the join as $\sigma_\theta(r \times s)$ and immediately warned that no system computes it that way. This is the lesson that makes good on the warning.

Joining a 50,000-page table to a 2,500-page one has at least five reasonable algorithms, and the figure prices them at between 157,500 and 2,152,500 I/Os — **a factor of fourteen, on plans returning identical rows**. Choosing among them is the optimizer's most consequential decision, and understanding the choice means understanding what each algorithm does with the memory it is given.

## The idea

First, how operators fit together. Every operator implements the same three-call interface — **open**, **next**, **close** — and a plan is a tree of them, each pulling rows from its children on demand. This is the **iterator model**, and it means the plan of [1.2](01-02-relational-algebra.md) is executed by the root repeatedly calling `next` and the request cascading down.

The consequence worth holding onto is the distinction between **pipelined** and **blocking** operators. A selection is pipelined: it can emit its first output row after reading one input row. A sort is blocking: it cannot emit anything until it has seen everything. Blocking operators are where a plan materializes an intermediate result and where its memory demand peaks.

Now the joins. All five are the same idea under different constraints: **for each row of one input, find the matching rows of the other.** They differ in how they arrange to find them.

- **Nested loop** scans the inner input again for each chunk of the outer. Simple, and the only one that works for a non-equality condition.
- **Index nested loop** replaces the inner scan with an index probe.
- **Sort-merge** sorts both inputs, then walks them in lockstep. Free if they arrive sorted.
- **Hash join** partitions both inputs by the same hash, so only matching partitions can join, then hashes each pair in memory.

The last two share a structural insight worth naming: **matching rows must agree on the join key, so any function of the key that groups them will do.** Sorting and hashing are two such functions, and everything about their relative cost follows from sorting preserving order while hashing does not.

## The formal version

Let $M$ and $N$ be the page counts of the outer and inner inputs, with $B$ buffer frames.

> **Page-oriented nested loop.** For each page of the outer, scan the whole inner.
> $$\text{cost} = M + M \cdot N$$

> **Block nested loop.** Fill $B-2$ frames with outer pages, then scan the inner once for that block.
> $$\text{cost} = M + \left\lceil \frac{M}{B-2} \right\rceil \cdot N$$

The two spare frames are one for the inner scan and one for output. This is the same trick as external sorting: use all the memory, and the inner is scanned once per *block* rather than once per page. It is the fallback when nothing better applies, and it works for any join condition, including inequalities.

> **Index nested loop.** For each outer *row*, probe an index on the inner join column.
> $$\text{cost} = M + |r| \times \bigl(h + \text{cost of fetching the matches}\bigr)$$

where $|r|$ is the number of outer rows and $h$ the index height. The fetch term is where clustering decides everything, exactly as in [3.2](03-02-b-plus-tree-indexes.md): a clustered index costs $\lceil k/p \rceil$ pages for $k$ matches at $p$ rows per page, an unclustered one costs $k$.

> **Sort-merge join.** Sort both inputs on the join key, then merge.
> $$\text{cost} = \text{sort}(M) + \text{sort}(N) + M + N$$
> and if both inputs are **already sorted**, just $M + N$.

> **Grace hash join.** Partition both inputs into $B-1$ buckets with a hash function $h_1$; then for each bucket pair, build an in-memory hash table on the smaller side with a different function $h_2$ and probe with the larger.
> $$\text{cost} = 3(M + N)$$
>
> Read both, write both partitions, read both back. The requirement is that a partition of the smaller input fit in memory, which needs roughly $B > \sqrt{\min(M,N)}$.

The $\sqrt{\ }$ condition is the same one as the two-pass sort in [3.4](03-04-external-sorting.md), and for the same reason: with $B$ frames you can split into $B$ pieces, and a piece of a $B^2$-page file is $B$ pages.

**Hash join needs an equality condition**, because a hash function preserves equality and nothing else. Sort-merge and nested loop can both handle inequalities; hash cannot handle them at all.

## Picture

![On the left the two phases of a grace hash join, partitioning booking and passenger with the same function into matching numbered pairs, then building and probing each pair in memory; on the right a bar chart of five join costs from hash join at 157,500 to unclustered index nested loop at 2,152,500](assets/03-05-fig1.svg)

The left half is the mechanism, the right half is why it usually wins. Note the last line of the right panel — the one plan that beats hash join is sort-merge on inputs that were already sorted.

## Worked examples

**Example 1 — pricing all five plans on one join.**

Join `booking` (50,000 pages, 2,000,000 rows) to `passenger` (2,500 pages, 50,000 rows) on `pid`, with $B = 502$ frames. Each passenger has on average $2{,}000{,}000/50{,}000 = 40$ bookings, and `booking` holds 40 rows per page.

**Block nested loop, `passenger` as outer.** The outer block is $B - 2 = 500$ pages:

$$2{,}500 + \left\lceil \frac{2{,}500}{500} \right\rceil \times 50{,}000 = 2{,}500 + 5 \times 50{,}000 = \mathbf{252{,}500}$$

**Block nested loop, `booking` as outer.** The same algorithm, operands swapped:

$$50{,}000 + \left\lceil \frac{50{,}000}{500} \right\rceil \times 2{,}500 = 50{,}000 + 100 \times 2{,}500 = \mathbf{300{,}000}$$

**Put the smaller relation on the outside.** The number of inner rescans is $\lceil M/(B-2) \rceil$, which grows with the outer, so a small outer means few rescans. It is a 19 percent difference here and can be far larger.

**Sort-merge.** From [3.4](03-04-external-sorting.md), both sorts take two passes at this buffer size: $2 \times 50{,}000 \times 2 = 200{,}000$ and $2 \times 2{,}500 \times 2 = 10{,}000$. Then merge both once:

$$200{,}000 + 10{,}000 + 52{,}500 = \mathbf{262{,}500}$$

**Grace hash join.** $3(50{,}000 + 2{,}500) = \mathbf{157{,}500}$. The condition holds easily: $\sqrt{2{,}500} = 50 < 502$.

**Index nested loop**, `passenger` outer, using a height-3 index on `booking.pid`. Each of the 50,000 outer rows probes for its 40 matching bookings:

| index | per-probe cost | total |
|---|---|---|
| clustered | $3 + \lceil 40/40 \rceil = 4$ | $2{,}500 + 50{,}000 \times 4 = \mathbf{202{,}500}$ |
| unclustered | $3 + 40 = 43$ | $2{,}500 + 50{,}000 \times 43 = \mathbf{2{,}152{,}500}$ |

**The winner is hash join at 157,500**, and the loser is index nested loop on an unclustered index at 2,152,500 — fourteen times worse, and worse than every alternative including the plain block nested loop. An index that is genuinely useful for a point query can be actively harmful as a join's inner path, because a join probes it once per outer row and the per-row penalty is multiplied by 50,000.

**Example 2 — the plan that beats the winner.**

Hash join costs $3(M+N)$ and can never do better, because it reads and writes everything three times by construction. Sort-merge costs more than hash *only* because of the sorts. Remove them:

$$\text{sort-merge on pre-sorted inputs} = M + N = 52{,}500 \text{ I/Os}$$

**A third of the hash join's cost**, and it needs no partitioning, no hash table, and no memory beyond a few frames.

When are the inputs already sorted? More often than you would guess.

- One of them arrives from a **clustered index scan** on the join key, which emits rows in key order for free.
- One of them is the output of an **earlier sort-merge join** on the same key, so a chain of joins on one key sorts once and merges repeatedly.
- The query has an `ORDER BY` on the join key, so the sort has to happen anyway and a sort-merge join gets it at no extra charge.

This is why an optimizer tracks not just each plan's cost but the **order its output arrives in**. A plan that is more expensive in isolation can be cheaper overall because it delivers a sorted stream that a later operator would otherwise have to produce. Those are called **interesting orders**, and they are the reason [3.7](03-07-query-optimization-and-join-ordering.md)'s dynamic programming cannot simply keep the cheapest plan per subset — it must keep the cheapest plan *per subset per useful order*.

**The general principle behind both examples:** a join algorithm's cost is not a property of the algorithm. It is a property of the algorithm, the sizes, the buffer, the available indexes, and what the inputs already happen to be. Which is precisely why the decision has to be made by an optimizer at runtime rather than by a programmer at write time.

## Watch out

- **You might think the outer and inner relations are interchangeable.** For nested loop they are not: the inner is rescanned $\lceil M/(B-2) \rceil$ times, so the smaller relation belongs on the outside. For hash join they genuinely are, since $3(M+N)$ is symmetric.
- **You might think hash join is always best.** It requires an **equality** condition — a hash preserves equality and destroys order, so it cannot serve `ON a.x < b.y` at all. Sort-merge and nested loop can.
- **You might think an index makes a join faster.** An unclustered index as the inner path can be the *worst* plan, because the per-probe fetch cost is multiplied by every outer row. Example 1's unclustered index nested loop is eight times worse than a plain block nested loop.
- **You might think a blocking operator is just slower.** It also changes the plan's memory profile and destroys pipelining: nothing downstream of a sort can produce its first row until the sort has consumed its entire input, which is why a query with a top-level `ORDER BY` returns nothing and then everything.

## One-liner

> Matching rows must agree on the join key, so any function that groups by key will do — sorting and hashing are the two, and hashing wins unless the input was already sorted.

## Problems

**P1 (🟢)** Join $R$ (800 pages) to $S$ (5,000 pages) with $B = 102$ frames.

(a) Give the cost of a block nested loop with $R$ as outer.
(b) Give the cost with $S$ as outer.
(c) Give the cost of a grace hash join.
(d) State which relation should be the outer in a nested-loop plan, and why in one clause.

**P2 (🟡)** A `driver` table has 20,000 rows in 1,000 pages; a `trip` table has 4,000,000 rows in 80,000 pages, 50 rows per page. They join on `driver_id`. The buffer has $B = 402$ frames, and a height-3 B⁺-tree index exists on `trip.driver_id`.

(a) Give the average number of trips per driver.
(b) Give the block nested-loop cost with `driver` as outer.
(c) Give the index nested-loop cost with `driver` as outer, for a clustered and an unclustered index on `trip.driver_id`.
(d) Give the grace hash join cost, and rank all the plans from (b) and (c).

**P3 (🔴, optional)** A query joins three tables on a common column `k`: $A$ (1,000 pages), $B$ (4,000 pages), $C$ (60,000 pages). The buffer has 202 frames. Table $C$ has a clustered B⁺-tree on `k` of height 3; $A$ and $B$ have no indexes. The query ends with `ORDER BY k`.

(a) Give the grace hash join cost of $A \bowtie B$, and of joining that 3,000-page result to $C$ by grace hash. Give the total, plus the cost of the final sort on the 12,000-page output.
(b) Now consider sorting $A$ and $B$ and sort-merge joining them, then sort-merge joining the result to $C$ read through its clustered index. Give each step's cost and the total, and state why the final `ORDER BY` is free.
(c) Give the difference between the two totals and say which wins.
(d) State the general principle your answer illustrates, and give one change to the problem that would flip the result.

<details>
<summary>Solutions</summary>

**P1**

(a) $R$ outer, block size $B - 2 = 100$:

$$800 + \left\lceil \frac{800}{100} \right\rceil \times 5{,}000 = 800 + 8 \times 5{,}000 = \mathbf{40{,}800}$$

(b) $S$ outer:

$$5{,}000 + \left\lceil \frac{5{,}000}{100} \right\rceil \times 800 = 5{,}000 + 50 \times 800 = \mathbf{45{,}000}$$

(c) $3(800 + 5{,}000) = \mathbf{17{,}400}$ — less than half of either nested-loop plan.

(d) **$R$, the smaller relation, should be the outer.** The inner is rescanned $\lceil M/(B-2) \rceil$ times, and that count grows with the outer's size, so a small outer means few rescans.

**P2**

(a) $4{,}000{,}000 / 20{,}000 = \mathbf{200}$ trips per driver.

(b) Block size $B - 2 = 400$:

$$1{,}000 + \left\lceil \frac{1{,}000}{400} \right\rceil \times 80{,}000 = 1{,}000 + 3 \times 80{,}000 = \mathbf{241{,}000}$$

Note the ceiling: $1{,}000/400 = 2.5$ rounds to 3 rescans, so the last block is only 200 pages and still costs a full inner scan. Sizing the outer to a multiple of $B-2$ matters at these ratios.

(c) 20,000 outer rows, each probing for 200 matches with $h = 3$:

| index | per probe | total |
|---|---|---|
| clustered | $3 + \lceil 200/50 \rceil = 3 + 4 = 7$ | $1{,}000 + 20{,}000 \times 7 = \mathbf{141{,}000}$ |
| unclustered | $3 + 200 = 203$ | $1{,}000 + 20{,}000 \times 203 = \mathbf{4{,}061{,}000}$ |

(d) Grace hash: $3(80{,}000 + 1{,}000) = \mathbf{243{,}000}$. Check the condition: $\sqrt{1{,}000} \approx 32 < 402$, so it is legal.

**Ranking:**

| plan | cost |
|---|---|
| index NL, clustered | 141,000 |
| block NL | 241,000 |
| grace hash | 243,000 |
| index NL, unclustered | 4,061,000 |

**The clustered index nested loop wins here**, which reverses Example 1's outcome. The reason is the ratio of table sizes: `driver` at 1,000 pages against `trip` at 80,000 is 1 to 80, against Example 1's 1 to 20. With few outer rows and a clustered inner index, the per-probe cost of 7 is multiplied by only 20,000, while hash join must still read and write all 81,000 pages three times.

Also worth seeing: block nested loop and grace hash are within 1 percent of each other here, which is coincidence rather than principle — at $B = 802$ the block plan would need only 2 rescans and cost 161,000, beating hash comfortably.

**P3**

(a) **$A \bowtie B$ by grace hash:** $3(1{,}000 + 4{,}000) = 15{,}000$ I/Os. Check: $\sqrt{1{,}000} \approx 32 < 202$, legal.

**Result joined to $C$ by grace hash:** the intermediate is 3,000 pages, so $3(3{,}000 + 60{,}000) = 189{,}000$ I/Os.

**Final sort** of the 12,000-page output at $B = 202$: $\lceil 12{,}000/202 \rceil = 60$ runs, and $60 \leq 201$, so two passes — $2 \times 12{,}000 \times 2 = 48{,}000$ I/Os.

$$\textbf{Total: } 15{,}000 + 189{,}000 + 48{,}000 = \mathbf{252{,}000}$$

(b) **Sort $A$:** $\lceil 1{,}000/202 \rceil = 5$ runs, two passes, $2 \times 1{,}000 \times 2 = 4{,}000$.
**Sort $B$:** $\lceil 4{,}000/202 \rceil = 20$ runs, two passes, $2 \times 4{,}000 \times 2 = 16{,}000$.
**Merge them:** $1{,}000 + 4{,}000 = 5{,}000$. The 3,000-page result **comes out sorted on `k`**.

**Join to $C$:** read $C$ through its clustered index, which emits rows in `k` order for the cost of a scan, 60,000 I/Os. Both inputs are now sorted, so the join is a merge alone: $3{,}000 + 60{,}000 = 63{,}000$.

$$\textbf{Total: } 4{,}000 + 16{,}000 + 5{,}000 + 63{,}000 = \mathbf{88{,}000}$$

**The final `ORDER BY` is free** because the last sort-merge join emits its output in `k` order, which is exactly the order requested. No sort operator is needed at the top of the plan at all.

(c) $252{,}000 - 88{,}000 = \mathbf{164{,}000}$ I/Os of difference. **The sort-merge plan wins by a factor of 2.9.**

(d) **The principle: a plan's output order is part of its value, not just its cost.**

Compare the two branches join by join:

| step | hash branch | sort-merge branch |
|---|---|---|
| $A \bowtie B$ | **15,000** | 25,000 |
| result $\bowtie\, C$ | 189,000 | **63,000** |
| final `ORDER BY` | 48,000 | **0** |
| total | 252,000 | **88,000** |

Hash wins the first join and loses everything after it. By the second join the sort-merge branch holds a sorted intermediate and $C$ supplies its side sorted for free through the clustered index, so the join is a bare merge. Then hash pays a further 48,000 for an ordering that sort-merge never owed.

An optimizer that kept only the cheapest plan for $A \bowtie B$ would keep the hash plan at 15,000, discard the sorted 25,000 plan, and never find the 88,000 total. **That is exactly why interesting orders exist**: the search must retain the cheapest plan for each useful output order, not merely the cheapest plan.

**A change that flips the result:** remove the `ORDER BY k` and remove $C$'s clustered index. Then the sort-merge branch loses both of its advantages — $C$ must be sorted explicitly, at $\lceil 60{,}000/202 \rceil = 298$ runs and thus three passes for $2 \times 60{,}000 \times 3 = 360{,}000$ I/Os, and the free ordering at the top is worth nothing. The hash plan drops to $15{,}000 + 189{,}000 = 204{,}000$ and wins comfortably.

Either single change alone narrows the gap; both together reverse it. That sensitivity is the honest reason join-order and join-method selection is left to a cost-based optimizer rather than to a rule.

</details>

## Flashback

**From Lesson 3.4 (external sorting):** A file of 40,000 pages is sorted with $B$ buffer frames.

(a) Give the number of passes and the I/O cost at $B = 150$.
(b) Give the smallest $B$ at which the sort completes in two passes.
(c) Give the cost saved by moving from $B - 1$ to $B$ at that threshold, as a percentage.

<details>
<summary>Solution</summary>

(a) $\lceil 40{,}000/150 \rceil = 267$ initial runs. The fan-in is 149, so merge pass 1 gives $\lceil 267/149 \rceil = 2$ runs and merge pass 2 gives 1. **3 passes**, costing $2 \times 40{,}000 \times 3 = \mathbf{240{,}000}$ I/Os.

(b) Two passes require $\lceil N/B \rceil \leq B - 1$, so roughly $B(B-1) \geq 40{,}000$, giving $B \gtrsim 200.5$.

Check $B = 201$: $\lceil 40{,}000/201 \rceil = 200$ runs against a fan-in of 200. Since $200 \leq 200$, **two passes**.
Check $B = 200$: $\lceil 40{,}000/200 \rceil = 200$ runs against a fan-in of 199. Since $200 > 199$, three passes.

**Smallest $B$ is 201.**

(c) At $B = 200$: $2 \times 40{,}000 \times 3 = 240{,}000$. At $B = 201$: $2 \times 40{,}000 \times 2 = 160{,}000$.

$$\frac{240{,}000 - 160{,}000}{240{,}000} = \mathbf{33.3\%}$$

One additional buffer frame removes a third of the cost, and the margin at $B = 200$ is a single run — 200 runs against a 199-way merge. The saving is always exactly $1/\text{passes}$ at such a boundary, and always exactly zero between boundaries.

</details>

## Connections

- **Backward:** sort-merge is [3.4](03-04-external-sorting.md)'s algorithm applied twice, and the $\sqrt{\ }$ memory condition for hash join is that lesson's two-pass condition in different clothing. The index nested loop's clustered-versus-unclustered gap is [3.2](03-02-b-plus-tree-indexes.md)'s, multiplied by the outer cardinality. The join being priced is the theta join of [1.2](01-02-relational-algebra.md), finally computed rather than defined.
- **Forward:** every cost here needs the *sizes* of its inputs, and for anything but a base table those sizes are estimates — which is [3.6](03-06-selectivity-statistics-and-cost-estimation.md). [3.7](03-07-query-optimization-and-join-ordering.md) searches over these algorithms and over join orders, and the interesting orders of Example 2 are why its dynamic programming needs a richer state than "cheapest plan per subset."
- **Sideways:** grace hash join's partition-then-conquer is the same shape as the divide-and-conquer of [`algorithms` 1.5](../../algorithms/lessons/01-05-divide-and-conquer-beyond-sorting.md), with the split chosen so that each piece fits in memory rather than to balance recursion depth. And the iterator model's open-next-close is a coroutine protocol — a generator, in the sense any language with lazy sequences would recognize.
