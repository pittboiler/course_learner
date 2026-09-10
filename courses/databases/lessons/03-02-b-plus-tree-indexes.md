# Database Systems · Lesson 3.2: B⁺-tree indexes

> ⏱ ~15 min · Module 3: Storage, indexing & query processing · Builds on: [3.1 (storage & the buffer manager)](03-01-storage-pages-and-the-buffer-manager.md), [`programming-foundations` 3.2 (balanced trees)](../../programming-foundations/lessons/03-02-balanced-trees-the-idea.md) · Unlocks: [3.3 (hashing & access paths)](03-03-hashing-and-choosing-an-access-path.md)

## Why this matters

The B⁺-tree is the default index in essentially every relational database, and has been for forty years. That is unusual longevity for a data structure, and the reason is that it is the only one that is simultaneously good at three things a database constantly does: find one row, scan a range of rows in order, and absorb inserts without degrading.

[`programming-foundations` 3.2](../../programming-foundations/lessons/03-02-balanced-trees-the-idea.md) already established *why the fan-out is large* — matching node size to page size is a hardware argument, and it is not repeated here. This lesson is about the B⁺-tree as an **index**: what it costs to use one, how it absorbs an insert, and the single distinction that decides whether an index helps or hurts, which is **clustered versus unclustered**.

## The idea

An index is a separate structure that maps key values to row locations. It does not hold the rows; it holds pointers to them.

The B⁺-tree's shape is three commitments, visible in the figure:

**Values live only in the leaves.** Internal nodes hold nothing but separator keys — signposts saying "keys below 63 go left." They are pure routing, so they pack tightly and the tree stays short.

**Leaves are chained.** Each leaf points to the next in key order. So a range query descends once and then walks sideways along a linked list, reading sequentially. This is the property a plain B-tree lacks, and it is why databases use the plus variant.

**Growth happens at the root.** When a node overflows, it splits and pushes a separator up. If the parent is full it splits too, and if that reaches the root the tree gains a level — at the top, never at the bottom. So every leaf stays at the same depth forever, and every lookup costs exactly the height. There is no worst case to worry about.

Now the distinction that matters most in practice. An index is **clustered** if the table's rows are physically stored in the index's key order, and **unclustered** otherwise. A table can have at most one clustered index, because it has only one physical order. The difference does not change the point-query cost by even one page — and it changes range-query cost by a factor of forty in the example below.

## The formal version

> **B⁺-tree of order $F$.** Every internal node has between $\lceil F/2 \rceil$ and $F$ children; every leaf holds between $\lceil L/2 \rceil$ and $L$ entries; all leaves are at the same depth; leaves are linked in key order.

The minimum-occupancy rule is what bounds the height. In practice pages sit around two-thirds full, so with $E$ entries per page the leaf count and height are

$$\text{leaves} = \left\lceil \frac{n}{E} \right\rceil, \qquad h = 1 + \left\lceil \log_{F} \text{leaves} \right\rceil.$$

> **Point query cost.** $h$ page reads to reach the leaf, plus **1** to fetch the data page the leaf points at.

> **Range query cost**, for a query matching $m$ rows out of $n$, with $p$ rows per data page:
>
> $$\textbf{clustered:}\quad h + \left\lceil \frac{m}{p} \right\rceil \qquad\qquad \textbf{unclustered:}\quad h + \left\lceil \frac{m}{E} \right\rceil + m$$

The two formulas differ in their last term, and that term is the whole story.

Under a **clustered** index the matching rows are physically adjacent, so $m$ rows occupy $\lceil m/p \rceil$ consecutive pages and are read in one sweep.

Under an **unclustered** index the leaf entries are in key order but the rows they point to are scattered. Each matching entry requires its own fetch, and consecutive keys land on unrelated pages, so the term is $m$ — **one page read per row**, not per page of rows. The index is in order; the table is not.

> **Insertion.** Descend to the correct leaf and insert. While the node overflows: split it at the middle, and promote a separator to the parent — for a leaf split the middle key is **copied** up and stays in the right leaf; for an internal split it is **moved** up and leaves both children.

The copy-versus-move asymmetry follows from the first commitment: every value must remain findable in a leaf, so a leaf split cannot give its key away, while an internal key is only a signpost and can be relocated freely.

## Picture

![A B+ tree before and after inserting the key 85, the before showing two levels with a full rightmost leaf, the after showing three levels where the leaf split promoted 77 into a full root which split in turn, with coral links chaining the leaves in key order](assets/03-02-fig1.svg)

Follow the cascade: the leaf split promotes 77, the root was already full at three keys, so it splits and 63 becomes the new root. The tree gained a level and every leaf is still at the same depth.

## Worked examples

**Example 1 — the trace, step by step.**

A tree holding at most 3 keys per node, after inserting 12, 25, 31, 44, 50, 58, 63, 70, 77:

$$\text{root } [31, 50, 63] \qquad \text{leaves } [12,25]\ [31,44]\ [50,58]\ [63,70,77]$$

Two levels. The rightmost leaf is full and the root is full.

**Insert 85.** It belongs in the rightmost leaf, which becomes $[63, 70, 77, 85]$ — four keys, one too many.

**Split the leaf** at the middle. The left keeps $[63, 70]$, the right takes $[77, 85]$, and **77 is copied up** — it remains in the right leaf, because it is a real data value that must stay findable.

The root now needs to absorb 77, becoming $[31, 50, 63, 77]$. Four keys, one too many.

**Split the root** at the middle. The left internal node keeps $[31, 50]$, the right takes $[77]$, and **63 is moved up** — it is only a separator, so it leaves both children and becomes the sole key of a brand-new root.

$$\text{root } [63] \qquad \text{internals } [31,50]\ \ [77] \qquad \text{leaves } [12,25]\ [31,44]\ [50,58]\ [63,70]\ [77,85]$$

**Three levels.** One insert added a level to the whole tree — and note where it was added. Every leaf is still at depth 3; none moved relative to another. That is what "grows at the root" buys, and it is why a B⁺-tree needs no rebalancing pass and has no degenerate case.

**Example 2 — clustered versus unclustered, in page reads.**

The `booking` table from [3.1](03-01-storage-pages-and-the-buffer-manager.md): 2,000,000 rows, 40 per page, **50,000 data pages**. An index page holds 200 entries after allowing for the header and two-thirds fill.

**Height first.** Leaves: $\lceil 2{,}000{,}000 / 200 \rceil = 10{,}000$. Above them: $\lceil 10{,}000/200 \rceil = 50$ nodes. Above that: $\lceil 50/200 \rceil = 1$, the root. So the tree has **3 levels**, and 2 million rows are three page reads deep.

**Point query.** 3 reads to the leaf, 1 to fetch the row: **4 I/Os**, against 50,000 for a full scan. Clustered or unclustered, the cost is identical — a single row is a single row.

**Range query returning 1 percent of the table**, 20,000 rows:

| plan | cost | arithmetic |
|---|---|---|
| clustered index | **503** | $3 + \lceil 20{,}000/40 \rceil = 3 + 500$ |
| unclustered index | **20,103** | $3 + \lceil 20{,}000/200 \rceil + 20{,}000 = 3 + 100 + 20{,}000$ |
| full scan | **50,000** | the whole table |

The clustered index is 40 times cheaper than the unclustered one on identical data answering an identical query. The 20,000 term dominates everything: one page read per matching *row*.

**And now the number that decides real schema design.** The unclustered index still beats the full scan here — 20,103 against 50,000 — but only just, and the margin closes fast. Setting $3 + \lceil m/200 \rceil + m \leq 50{,}000$ and solving gives

$$m \leq 49{,}748 \text{ rows} = 2.487\% \text{ of the table.}$$

**Past about 2.5 percent selectivity, an unclustered index is worse than reading the whole table.** Not marginally worse — at 10 percent it costs 201,003 I/Os against 50,000, four times the full scan. The clustered index, by contrast, wins essentially all the way: it stays cheaper until the query returns almost every row.

This crossover is the single most important number in practical indexing, and it explains behaviour that otherwise looks like the optimizer misbehaving. A query that used the index yesterday does a full scan today because the data shifted and the predicate now matches 4 percent instead of 1 percent. The optimizer is right, and [3.6](03-06-selectivity-statistics-and-cost-estimation.md) is how it knows.

## Watch out

- **You might think an index always helps.** An unclustered index on a query matching more than a few percent of rows is slower than reading the table, because it pays a page read per row. Whether it helps depends on selectivity, which is a property of the *data*, not of the query text.
- **You might think a table can have several clustered indexes.** It has one physical order, so it has at most one. Every other index on it is unclustered, and the choice of which column gets clustering is one of the highest-leverage decisions in a schema.
- **You might think a leaf split moves its middle key up like an internal split does.** It copies it. Every value must remain reachable in a leaf, so the promoted separator is a duplicate of a key that stays put. Getting this backwards loses a row from every leaf split.
- **You might think a taller tree means a slower query in proportion.** Height grows logarithmically with fan-out 200, so 2 million rows and 400 million rows differ by one level — one extra page read. Index depth is almost never the problem; the fetch after the leaf almost always is.

## One-liner

> Point queries cost the height and nothing else, but a range query on an unclustered index pays one page read per row — which is why it loses to a full scan past about two and a half percent of the table.

## Problems

**P1 (🟢)** A `reading` table has 8,000,000 rows, 50 rows per data page. An index page holds 250 entries.

(a) Give the number of data pages.
(b) Give the number of leaf pages in a B⁺-tree index over all 8,000,000 keys.
(c) Give the height of the tree, counting the root and the leaf level.
(d) Give the cost of a point query returning one row.

**P2 (🟡)** Using the table from P1, a query matches 40,000 rows.

(a) Give the I/O cost using a clustered index.
(b) Give the I/O cost using an unclustered index.
(c) Give the cost of a full scan, and say which of the three plans wins.
(d) Give the number of matching rows at which the unclustered index stops beating the full scan, and express it as a percentage of the table.

**P3 (🔴, optional)** A B⁺-tree holds at most 3 keys per node. Its current state is

$$\text{root } [40] \qquad \text{internals } [18, 29]\ \ [55, 72] \qquad \text{leaves } [5,11]\ [18,24]\ [29,33]\ [40,47]\ [55,60]\ [72,80,91]$$

(a) Give the sequence of leaves visited by a range query for all keys in the closed interval from 24 to 60, and the number of leaf pages read.
(b) Insert the key 95. Give the resulting tree, level by level, and state which keys were copied up and which were moved up.
(c) Give the height before and after the insertion of (b), and state how many leaves changed depth.
(d) A colleague proposes storing the rows themselves in the internal nodes to save the final fetch. Give the effect on the tree's height for this data, and name the operation that gets worse.

<details>
<summary>Solutions</summary>

**P1**

(a) $\lceil 8{,}000{,}000 / 50 \rceil = 160{,}000$ data pages.

(b) $\lceil 8{,}000{,}000 / 250 \rceil = 32{,}000$ leaf pages.

(c) Above the leaves: $\lceil 32{,}000/250 \rceil = 128$ nodes. Above those: $\lceil 128/250 \rceil = 1$, the root. So the levels are root, one internal level, leaves: **height 3**.

Worth noticing that 8 million rows and the 2 million of Example 2 have the same height. Fan-out 250 means each level multiplies capacity by 250, so height 3 covers up to $250^3 \times$ a leaf's worth — tens of millions of rows before a fourth level is needed.

(d) **4 I/Os**: 3 to descend to the leaf, 1 to fetch the data page the leaf points at.

**P2**

(a) **Clustered:** $3 + \lceil 40{,}000 / 50 \rceil = 3 + 800 = \mathbf{803}$ I/Os. The rows are physically consecutive, so 40,000 of them occupy 800 pages read in a sweep.

(b) **Unclustered:** $3 + \lceil 40{,}000/250 \rceil + 40{,}000 = 3 + 160 + 40{,}000 = \mathbf{40{,}163}$ I/Os. The 160 leaf pages are cheap; the 40,000 individual row fetches are not.

(c) **Full scan: 160,000** I/Os.

**The clustered plan wins** at 803, by a factor of 50 over the unclustered plan and 200 over the scan. Note that here the unclustered index is still the second-best plan — 40,163 against 160,000 — which is not always true, as (d) shows.

(d) Solve $3 + \lceil m/250 \rceil + m \leq 160{,}000$. Ignoring the ceiling for a moment, $m(1 + 1/250) \leq 159{,}997$, giving $m \leq 159{,}359$. Checking that value: $3 + 638 + 159{,}359 = 160{,}000$, exactly at the limit.

So the unclustered index beats a full scan up to about **159,359 rows**, which is

$$\frac{159{,}359}{8{,}000{,}000} \approx 1.99\%$$

**About 2 percent of the table** — the same order as Example 2's 2.5 percent, and for the same reason. The crossover fraction is governed almost entirely by rows per data page: the unclustered plan pays 1 I/O per row while the scan pays 1 per $p$ rows, so the break-even is near $1/p$, here $1/50 = 2\%$ and there $1/40 = 2.5\%$.

**That is the rule of thumb worth carrying:** an unclustered index stops paying off at roughly one over the rows-per-page. Wide rows pack fewer per page and make indexes useful over a broader range; narrow rows pack tightly and make full scans competitive sooner.

**P3**

(a) The interval runs from 24 to 60 inclusive. Descend to the leaf containing 24 — that is $[18, 24]$ — then follow the sibling links forward until the keys exceed 60:

$$[18,24] \;\to\; [29,33] \;\to\; [40,47] \;\to\; [55,60]$$

**4 leaf pages read**, plus the 2 pages of descent (root and one internal node) for 6 I/Os in total. The scan stops after $[55,60]$ because the next leaf begins at 72, which is outside the interval.

This is the property the leaf chain exists for: after the single descent, the remaining three leaves cost one sequential read each, with no return to the root.

(b) Insert 95 into the rightmost leaf, which becomes $[72, 80, 91, 95]$ — one over the limit.

**Split the leaf.** Left keeps $[72, 80]$, right takes $[91, 95]$, and **91 is copied up**, remaining in the right leaf.

The parent $[55, 72]$ absorbs it, becoming $[55, 72, 91]$ — three keys, which is exactly the limit. **No further split.**

$$\text{root } [40] \qquad \text{internals } [18,29]\ \ [55,72,91] \qquad \text{leaves } [5,11]\ [18,24]\ [29,33]\ [40,47]\ [55,60]\ [72,80]\ [91,95]$$

**Copied up: 91** (leaf split). **Moved up: nothing** — the cascade stopped before any internal node split.

(c) Height **3 before and 3 after**. **Zero leaves changed depth.**

This is the ordinary case, and the contrast with Example 2 is the point: there the parent was already full, so the cascade continued to the root and added a level. Here it had one slot free and stopped immediately. A B⁺-tree grows a level only when a split cascades all the way to a full root, which is why the height increases very rarely — roughly once per factor of $F$ in table size.

(d) Storing rows in internal nodes makes it a **B-tree** rather than a B⁺-tree, and the effect on height is driven by node capacity. Internal entries would grow from a key plus a pointer to a key plus a whole row. With 250 entries per index page against 50 rows per data page, the fan-out collapses by roughly a factor of 5, from 250 to about 50.

Recomputing for the 8,000,000 rows of P1 at fan-out 50: level sizes $\lceil 8{,}000{,}000/50 \rceil = 160{,}000$, then 3,200, then 64, then 2, then 1. **Height 5**, up from 3 — so the point query costs 5 reads instead of 4, since the final fetch is now saved. Roughly a wash for point queries, which is the honest answer to the colleague's proposal.

**The operation that gets worse is the range scan**, and it gets much worse. Values now live at every level, so visiting keys in order means repeatedly ascending and descending between levels rather than walking a linked list. The 4-leaf sequential walk of part (a) becomes a tree traversal touching internal nodes between every leaf, and each of those visits is a separate random read. For a scan of $m$ rows the cost goes from roughly $m/p$ sequential pages to something approaching one random read per row — the same collapse as clustered versus unclustered in Example 2, and for the same underlying reason.

Since range scans and ordered full-index scans are the common case in a relational database, that trade is not close. It is why essentially every database index is a B⁺-tree rather than a B-tree.

</details>

## Flashback

**From Lesson 2.6 (minimal cover & 3NF synthesis):** $F = \{X \to Y,\ Y \to Z,\ XY \to Z,\ X \to Z\}$ over $R(W, X, Y, Z)$.

(a) Give the result of pass 1 and pass 2, naming any extraneous attribute with the closure that proves it.
(b) Give the minimal cover.
(c) Give the 3NF synthesis, and state whether a candidate-key table was required.

<details>
<summary>Solution</summary>

(a) **Pass 1** changes nothing: every right side is already a single attribute.

**Pass 2** examines $XY \to Z$, the only multi-attribute left side. Is $Y$ extraneous? Compute $\{X\}^+$ under the current set: $X \to Y$ gives $Y$, $X \to Z$ gives $Z$. The closure contains $Z$, so **$Y$ is extraneous** and $XY \to Z$ becomes $X \to Z$.

$$X \to Y, \quad Y \to Z, \quad X \to Z, \quad X \to Z$$

(b) **Pass 3.** The duplicate $X \to Z$ is redundant given the other copy — drop one. Then test the survivor $X \to Z$: without it, $\{X\}^+$ is $X \to Y$ then $Y \to Z$, which reaches $Z$. **Redundant, drop it too.** Testing what remains: without $X \to Y$, $\{X\}^+ = \{X\}$; without $Y \to Z$, $\{Y\}^+ = \{Y\}$. Both stay.

$$F_c = \{X \to Y,\ Y \to Z\}$$

(c) One table per left side: $X \to Y$ gives $\{X, Y\}$ and $Y \to Z$ gives $\{Y, Z\}$.

**A candidate-key table is required.** The attribute $W$ appears in no dependency at all, so it must be in every candidate key; $\{W, X\}^+ = \{W, X, Y, Z\} = R$, making $\{W, X\}$ the unique candidate key. Neither $\{X,Y\}$ nor $\{Y,Z\}$ contains it, so step 3 adds it:

$$R_1(X, Y) \qquad R_2(Y, Z) \qquad R_3(W, X)$$

Without $R_3$ the decomposition would be **lossy** — and it would also have lost $W$ entirely, which is the clearest possible symptom. That is the case step 3 exists for, and the reason it is not optional.

</details>

## Connections

- **Backward:** [`programming-foundations` 3.2](../../programming-foundations/lessons/03-02-balanced-trees-the-idea.md) established why the fan-out is large and why leaves-only storage makes range scans sequential; this lesson takes both as given and prices the index in the page units of [3.1](03-01-storage-pages-and-the-buffer-manager.md). The tree is the sorted file of that lesson without the insertion catastrophe.
- **Forward:** [3.3](03-03-hashing-and-choosing-an-access-path.md) compares this against hashing and turns the 2.5 percent crossover into a decision procedure. [3.5](03-05-query-operators-and-join-algorithms.md) uses the index as the inner access path of a nested-loop join, where the clustered-unclustered gap reappears multiplied by the outer cardinality, and [3.6](03-06-selectivity-statistics-and-cost-estimation.md) is how the optimizer estimates the $m$ that decides everything here.
- **Sideways:** the clustered-unclustered distinction is a locality argument, the same one that separates a sequential array walk from chasing pointers through a linked list in [`computer-architecture` 4.2](../../computer-architecture/lessons/04-02-associativity-misses-write-policy.md). In both cases the algorithm's operation count is unchanged and the memory system's behaviour differs by more than an order of magnitude.
