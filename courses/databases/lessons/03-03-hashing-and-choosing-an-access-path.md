# Database Systems · Lesson 3.3: Hashing & choosing an access path

> ⏱ ~15 min · Module 3: Storage, indexing & query processing · Builds on: [3.2 (B⁺-tree indexes)](03-02-b-plus-tree-indexes.md), [`programming-foundations` 2.5 (hash tables)](../../programming-foundations/lessons/02-05-hash-tables.md) · Unlocks: [3.4 (external sorting)](03-04-external-sorting.md)

## Why this matters

A B⁺-tree finds a row in 3 or 4 page reads. A hash index finds it in 2, and no amount of data growth changes that. For equality lookups — which are most lookups — that is a real win.

The cost is total: a hash index cannot answer a range query at all. Not slowly, not approximately; a good hash function destroys the ordering that a range query is asking about, so `WHERE price BETWEEN 20 AND 40` gets no help whatsoever and the plan falls back to a full scan.

So this lesson is really about **choosing**, and the choice is the practical skill the whole module is building toward: given a workload, which access path should exist, and — the question people forget — which should not.

## The idea

[`programming-foundations` 2.5](../../programming-foundations/lessons/02-05-hash-tables.md) covered in-memory hash tables: chaining, open addressing, load factor. The disk version faces a problem that memory does not.

An in-memory hash table grows by allocating a bigger array and **rehashing everything**. On disk that means rereading and rewriting the entire file, which for 50,000 pages is 100,000 I/Os during which nobody can use the index. **Static hashing** — a fixed number of buckets with overflow chains — avoids the rehash and degrades instead: as the file grows, chains lengthen, and a lookup that should cost 1 read starts costing 4.

**Extendible hashing** solves this by adding a level of indirection. A **directory** of pointers sits in front of the buckets, and when one bucket overflows, only *that bucket* splits. The directory sometimes doubles, but doubling a directory of pointers is cheap and no data pages move except the one that split.

The figure shows the two cases and the single comparison that separates them. Each bucket records a **local depth** — how many hash bits it is currently distinguishing — and the directory has a **global depth**. If a full bucket's local depth is *below* the global depth, more than one directory entry points at it, so there is a spare entry to re-point and the bucket can split on its own. If they are *equal*, no spare exists and the directory must double first.

## The formal version

> **Static hashing.** Fix $M$ buckets, each one page. Key $k$ lives in bucket $h(k) \bmod M$. A full bucket chains to an overflow page.

Cost: **1 I/O** for a lookup with no overflow, plus one per overflow page. With $n$ keys, $M$ buckets and $E$ entries per page, the average chain length grows as $n/(ME)$, so the structure decays linearly with the data and the only repair is a full rehash.

> **Extendible hashing.** A directory of $2^d$ pointers, where $d$ is the **global depth**; bucket $b$ has a **local depth** $d_b \le d$. Key $k$ is routed by the low-order $d$ bits of $h(k)$. Exactly $2^{d - d_b}$ directory entries point at bucket $b$.
>
> On overflow of bucket $b$:
> - if $d_b = d$: double the directory, $d \mathrel{{+}{=}} 1$, then split;
> - split $b$ into two buckets at local depth $d_b + 1$, redistributing its keys by bit $d_b$, and re-point the affected directory entries.

Cost: **2 I/Os** for any lookup — one directory probe, one bucket read — and it stays 2 as the file grows. If the directory is small enough to stay cached, which it usually is, the amortized cost is 1.

> **The comparison.**

| | B⁺-tree | hash index |
|---|---|---|
| equality lookup | $h + 1$, typically 4 | **2** |
| range query | descend once, then walk the leaf chain | **no help at all** |
| `ORDER BY` on the key | free, the index is already sorted | no help |
| prefix match (`LIKE 'abc%'`) | yes, a prefix is a range | no |
| growth behaviour | height grows logarithmically | constant, with occasional directory doubling |

The row that decides most real cases is the second. A B⁺-tree is *good* at equality and *unique* in what it offers for ranges and ordering, so it is the sensible default; a hash index is a specialization worth adding when a workload is provably equality-only.

> **Covering (index-only) plan.** If an index contains every column a query mentions, the query can be answered from the index alone, skipping the fetch of the data pages entirely.

This is the one case where an **unclustered** index escapes its own worst term. The $m$ row fetches from [3.2](03-02-b-plus-tree-indexes.md) disappear, leaving only the leaf-page scan, and cost drops by a factor of roughly the entries per index page.

> **The cost of an index.** Every index must be updated on every insert, delete, and update to an indexed column. An index is a permanent tax on writes, paid to make some reads cheaper.

## Picture

![Three panels showing an extendible hash directory of eight entries: before inserting 21 where bucket B1 is full at local depth 2 below the global depth 3, then after the split where B1 and B5 both reach local depth 3 with no directory change, then the next insert where local depth equals global depth and the directory must double](assets/03-03-fig1.svg)

Read the middle panel first. The split needed no doubling, because two directory entries already pointed at the full bucket and one of them was free to be re-aimed.

## Worked examples

**Example 1 — tracing extendible hashing.**

Buckets hold 2 keys. Global depth is 3, and keys are routed by their low-order 3 bits. The current state:

$$\text{directory: } 000 \to B_0,\ 001 \to B_1,\ 010 \to B_2,\ 011 \to B_3,\ 100 \to B_4,\ 101 \to B_1,\ 110 \to B_2,\ 111 \to B_3$$

with $B_1$ at local depth 2 holding $\{1, 5\}$ — full.

**Insert 21.** In binary 21 is $10101$, whose low-order 3 bits are $101$, routing to $B_1$. Full, so check the depths: $d_{B_1} = 2$ and $d = 3$. **Local depth is below global depth**, so no doubling.

Split $B_1$ into two buckets at local depth 3, redistributing $\{1, 5, 21\}$ by bit 2 (the third-lowest). Key 1 is $001$, bit 2 clear; keys 5 ($101$) and 21 ($10101$) have bit 2 set:

$$B_1 = \{1\} \text{ at local depth 3}, \qquad B_5 = \{5, 21\} \text{ at local depth 3}$$

Directory entry $101$ is re-pointed at $B_5$; entry $001$ keeps $B_1$. **The directory did not change size.**

**Now insert 13**, which is $1101$ — low-order 3 bits $101$, routing to $B_5$. Full again, and now $d_{B_5} = 3 = d$. Only *one* directory entry points at $B_5$, so there is nothing to re-point. **The directory doubles to global depth 4**, giving 16 entries, and only then can $B_5$ split.

The asymmetry is the whole design. A split costs one page; a doubling costs a directory rewrite and nothing else. The alternative — static hashing — would have required rereading and rewriting every page in the file.

**Example 2 — choosing an access path for a workload.**

The `booking` table: 2,000,000 rows, 40 per data page, **50,000 pages**; an index page holds 200 entries; a B⁺-tree over it has height 3.

Four queries, one decision each.

**(a) `WHERE booking_id = 88123`** — an equality lookup on the key, returning one row.

| plan | cost |
|---|---|
| full scan | 50,000 |
| B⁺-tree | 4 |
| hash index | 2 |

The hash index wins, and it wins permanently: as the table grows to 20 million rows the B⁺-tree gains a level and costs 5, while the hash index still costs 2. If this is the only query the table serves, hash is right.

**(b) `WHERE departure_date BETWEEN '2024-03-01' AND '2024-03-07'`**, matching 1 percent of rows, 20,000 of them.

The hash index contributes **nothing** — the plan is a full scan at 50,000. A clustered B⁺-tree on `departure_date` costs $3 + \lceil 20{,}000/40 \rceil = 503$. An unclustered one costs $3 + 100 + 20{,}000 = 20{,}103$, which beats the scan but only by a factor of 2.5.

**(c) `SELECT departure_date, seat FROM booking WHERE departure_date = '2024-03-04'`**, matching 6,000 rows, with an unclustered index on `(departure_date, seat)`.

Ordinarily an unclustered index would cost $3 + \lceil 6{,}000/200 \rceil + 6{,}000 = 6{,}033$ — dominated by the row fetches. But the query mentions only `departure_date` and `seat`, and both are in the index. **The fetches are unnecessary**:

$$3 + \lceil 6{,}000/200 \rceil = 3 + 30 = 33 \text{ I/Os}$$

**A factor of 183 improvement**, from adding a column to an index rather than from any change to the query. This is why practitioners add columns to indexes purely to make them cover a hot query, and why `SELECT *` on such a query destroys the benefit by mentioning columns the index does not hold.

**(d) `WHERE status = 'confirmed'`**, where 92 percent of bookings are confirmed.

**No index.** An unclustered index would cost $3 + 9{,}200 + 1{,}840{,}000 = 1{,}849{,}203$ I/Os — thirty-seven times the full scan's 50,000. Even a clustered index at $3 + 46{,}000 = 46{,}003$ barely improves on the scan, while consuming space and taxing every write.

**The general lesson from (d) is the one people skip.** The question is never "would an index help this query" but "does it help enough to justify slowing every write." A low-selectivity predicate answers no on both counts. An index on a column with three distinct values is almost always a mistake.

## Watch out

- **You might think a hash index is strictly better for lookups.** It is better for *equality* lookups only. It cannot serve a range, a prefix match, an `ORDER BY`, or a `MIN`/`MAX` — all of which a B⁺-tree gives for free, which is why the tree is the default.
- **You might think adding indexes is free if the queries are read-heavy.** Each index is updated on every insert and on every update to its columns, and each update is itself a tree descent plus a possible split. Five indexes on a table means an insert does six writes.
- **You might think a covering index is a different kind of index.** It is an ordinary index that happens to contain every column the query mentions. Covering is a property of the *pair* — this index, that query — so adding one column to the `SELECT` list can silently remove the benefit.
- **You might think extendible hashing's doubling is expensive.** It rewrites a directory of pointers, and no data page moves except the one bucket that split. The expensive alternative is static hashing's full rehash, which touches every page in the file.

## One-liner

> A hash index answers equality in two page reads forever and ranges never — so the tree is the default, and the sharper question is which indexes should not exist at all.

## Problems

**P1 (🟢)** An extendible hash index has global depth 3 and buckets holding 2 keys. Keys are routed by their low-order 3 bits.

(a) A bucket at local depth 1 is full. Give the number of directory entries pointing at it.
(b) That bucket overflows. State whether the directory doubles, and give the resulting local depth of the two buckets.
(c) A bucket at local depth 3 is full and overflows. Give the new global depth and the number of directory entries afterwards.
(d) Give the number of page reads for a lookup, before and after the doubling in (c).

**P2 (🟡)** A `shipment` table has 5,000,000 rows, 25 rows per data page. An index page holds 250 entries; a B⁺-tree over any column has height 3.

(a) Give the full-scan cost.
(b) `WHERE tracking_id = 'X9912'` returns one row. Give the cost under a full scan, a B⁺-tree, and a hash index.
(c) `SELECT tracking_id, weight FROM shipment WHERE carrier_id = 44` returns 30,000 rows, and an unclustered index exists on `(carrier_id, tracking_id, weight)`. Give the cost with and without using the index-only plan, and the ratio between them.
(d) `WHERE country = 'GB'` matches 60 percent of rows. Give the cost of an unclustered index plan and recommend an access path, with the reason in one clause.

**P3 (🔴, optional)** A team is designing indexes for an `event` table: 40,000,000 rows, 20 rows per data page, index pages holding 200 entries, B⁺-tree height 4. The workload, per hour, is 2,000,000 inserts and these three queries:

- $Q_1$: `WHERE event_id = ?` — 500,000 times per hour, returns 1 row.
- $Q_2$: `WHERE occurred_at BETWEEN ? AND ?` — 400 times per hour, returns 0.05 percent of rows each.
- $Q_3$: `SELECT event_type, COUNT(*) ... GROUP BY event_type` — 4 times per hour, over the whole table; `event_type` has 6 distinct values.

(a) Give the full-scan cost and the hourly I/O of $Q_1$, $Q_2$ and $Q_3$ if no index exists.
(b) The table can have one clustered index. Say which column should get it, with the arithmetic that decides between the candidates.
(c) Evaluate a proposed unclustered index on `event_type` for $Q_3$: give its cost and compare with (a).
(d) Give the total hourly index-maintenance cost of holding three indexes (on `event_id`, `occurred_at`, `event_type`) at 2,000,000 inserts per hour, assuming each index update costs one descent plus one leaf write. Then state which indexes you would keep and why.

<details>
<summary>Solutions</summary>

**P1**

(a) $2^{d - d_b} = 2^{3-1} = \mathbf{4}$ directory entries. A bucket at local depth 1 distinguishes only one hash bit, so all four entries agreeing on that bit route to it.

(b) **No doubling.** Local depth 1 is below global depth 3, so spare directory entries exist to re-point. The bucket splits into two buckets, both at **local depth 2**, and the four entries divide two and two.

Note the split raises the local depth by exactly one, not to the global depth. The new pair may each still be pointed at by two entries, and may each split again later without any doubling.

(c) The bucket's local depth equals the global depth, so no spare entry exists. **The directory doubles to global depth 4**, giving $2^4 = \mathbf{16}$ entries, and then the bucket splits into two at local depth 4.

(d) **2 page reads, before and after.** One directory probe and one bucket read. That the directory got bigger is irrelevant to lookup cost — this constancy is the entire point of the structure, and it is what static hashing cannot maintain.

**P2**

(a) $\lceil 5{,}000{,}000 / 25 \rceil = \mathbf{200{,}000}$ pages.

(b)

| plan | cost |
|---|---|
| full scan | 200,000 |
| B⁺-tree | $3 + 1 = 4$ |
| hash index | 2 |

(c) **Without the index-only plan:** $3 + \lceil 30{,}000/250 \rceil + 30{,}000 = 3 + 120 + 30{,}000 = \mathbf{30{,}123}$ I/Os.

**With it:** the query mentions `tracking_id` and `weight`, both present in the index alongside `carrier_id`, so no row fetch is needed:

$$3 + \lceil 30{,}000/250 \rceil = 3 + 120 = \mathbf{123} \text{ I/Os}$$

**Ratio: about 245 to 1.** The 30,000 row fetches were the entire cost, and they vanish because the index already holds every column the query asked for.

(d) An unclustered index plan on 60 percent of 5,000,000 rows is 3,000,000 rows:

$$3 + \lceil 3{,}000{,}000/250 \rceil + 3{,}000{,}000 = 3 + 12{,}000 + 3{,}000{,}000 = 3{,}012{,}003 \text{ I/Os}$$

**Fifteen times worse than the full scan** at 200,000.

**Recommend the full scan and no index on `country`**, because a predicate matching 60 percent of a table cannot be served better than by reading the table once — and an index that will never be chosen still costs storage and a write on every insert.

**P3**

(a) Full scan: $\lceil 40{,}000{,}000/20 \rceil = \mathbf{2{,}000{,}000}$ pages.

With no index, every query is a full scan:

| query | per hour | cost each | hourly I/O |
|---|---|---|---|
| $Q_1$ | 500,000 | 2,000,000 | $1.0 \times 10^{12}$ |
| $Q_2$ | 400 | 2,000,000 | $8.0 \times 10^{8}$ |
| $Q_3$ | 4 | 2,000,000 | $8.0 \times 10^{6}$ |

$Q_1$ dominates by more than three orders of magnitude. **The workload is $Q_1$**, and any indexing decision that does not start there is answering the wrong question.

(b) The two candidates are `event_id` (for $Q_1$) and `occurred_at` (for $Q_2$).

**Clustering `event_id`** helps $Q_1$ not at all beyond what an unclustered index already gives: $Q_1$ returns a single row, and a point query costs $h + 1 = 5$ either way. Clustering changes nothing for single-row lookups.

**Clustering `occurred_at`** transforms $Q_2$. Each run matches $0.0005 \times 40{,}000{,}000 = 20{,}000$ rows:

| plan for $Q_2$ | cost each | hourly (400 runs) |
|---|---|---|
| full scan | 2,000,000 | $8.0 \times 10^8$ |
| unclustered index | $4 + 100 + 20{,}000 = 20{,}104$ | $8.0 \times 10^6$ |
| **clustered index** | $4 + \lceil 20{,}000/20 \rceil = 1{,}004$ | $4.0 \times 10^5$ |

**Cluster on `occurred_at`.** It is worth a factor of 20 on $Q_2$ over the unclustered alternative, while clustering on `event_id` is worth nothing. Give `event_id` an ordinary unclustered index — or better, a hash index, since $Q_1$ is purely equality and would then cost 2 rather than 5, saving a further $1.5 \times 10^6$ I/Os per hour.

(c) $Q_3$ scans the whole table grouped by a column with 6 distinct values, so each group is about $40{,}000{,}000/6 \approx 6{,}666{,}667$ rows. An unclustered index plan would read the leaves and then fetch every row:

$$4 + \lceil 40{,}000{,}000/200 \rceil + 40{,}000{,}000 \approx 4.02 \times 10^7 \text{ I/Os per run}$$

against the full scan's $2 \times 10^6$. **Twenty times worse.** The index is useless here, which is the low-selectivity case of Example 2(d) at its most extreme — a `GROUP BY` over every row has no selectivity at all.

*(An index-only plan would be different: if the index held `event_type` alone, counting could read just the $200{,}000$ leaf pages, a tenfold improvement. That is worth knowing, and it depends entirely on the query touching no other column.)*

(d) Three indexes, 2,000,000 inserts per hour, 2 I/Os per index update:

$$3 \times 2{,}000{,}000 \times 2 = \mathbf{1.2 \times 10^7} \text{ I/Os per hour}$$

Compare that with what each index earns per hour:

| index | saves per hour | costs per hour |
|---|---|---|
| `event_id` (hash) | $\approx 1.0 \times 10^{12}$ | $4 \times 10^6$ |
| `occurred_at` (clustered tree) | $\approx 8.0 \times 10^8$ | $4 \times 10^6$ |
| `event_type` (unclustered tree) | **nothing** — never chosen | $4 \times 10^6$ |

**Keep `event_id` and `occurred_at`; drop `event_type`.**

The first two repay their maintenance by five and two orders of magnitude respectively — the write tax is not close to a consideration for them. The third is pure cost: the optimizer will never choose it, so it earns nothing and charges 4 million I/Os an hour plus its storage.

**The shape of this answer is the general method.** Estimate what each index saves across the whole workload, estimate what it costs on writes, and keep the ones where the first exceeds the second. It is rarely close — an index is usually either enormously worth it or plainly not — and the ones that are plainly not are the ones that accumulate in real schemas, because nobody ever ran the arithmetic.

</details>

## Flashback

**From Lesson 3.2 (B⁺-tree indexes):** A `parcel` table has 6,000,000 rows at 30 rows per data page. An index page holds 300 entries, and a B⁺-tree over the table has height 3.

(a) Give the number of data pages and the cost of a full scan.
(b) A query matches 90,000 rows. Give the cost under a clustered index and under an unclustered one.
(c) Give the number of matching rows at which the unclustered index stops beating the full scan.

<details>
<summary>Solution</summary>

(a) $\lceil 6{,}000{,}000/30 \rceil = \mathbf{200{,}000}$ data pages, which is also the full-scan cost.

(b) **Clustered:** $3 + \lceil 90{,}000/30 \rceil = 3 + 3{,}000 = \mathbf{3{,}003}$ I/Os.

**Unclustered:** $3 + \lceil 90{,}000/300 \rceil + 90{,}000 = 3 + 300 + 90{,}000 = \mathbf{90{,}303}$ I/Os.

A factor of 30 between them, on identical data answering an identical query — and 30 is exactly the rows per data page, which is not a coincidence. The clustered plan reads one page per $p$ rows and the unclustered plan reads one page per row.

(c) Solve $3 + \lceil m/300 \rceil + m \le 200{,}000$. Dropping the ceiling, $m(1 + 1/300) \le 199{,}997$, giving $m \le 199{,}332$. Checking: $3 + 665 + 199{,}332 = 200{,}000$, exactly at the limit.

So the unclustered index wins up to about **199,332 rows**, which is $199{,}332/6{,}000{,}000 \approx 3.3\%$ of the table.

That matches the rule of thumb from [3.2](03-02-b-plus-tree-indexes.md): the crossover sits near one over the rows-per-page, here $1/30 = 3.3\%$. The entries-per-index-page barely moves it, because the leaf-scan term is small next to the per-row fetch term.

</details>

## Connections

- **Backward:** the in-memory hash table of [`programming-foundations` 2.5](../../programming-foundations/lessons/02-05-hash-tables.md) is the starting point; what disk adds is that growth cannot mean rehashing everything, which is the whole reason extendible hashing exists. The clustered-unclustered arithmetic and the crossover come straight from [3.2](03-02-b-plus-tree-indexes.md), and the page counts from [3.1](03-01-storage-pages-and-the-buffer-manager.md).
- **Forward:** hashing returns in [3.5](03-05-query-operators-and-join-algorithms.md) as the partitioning step of the hash join, where the same "route by hash bits" idea is applied to two tables at once. The selectivity that decides every choice in this lesson is estimated in [3.6](03-06-selectivity-statistics-and-cost-estimation.md), and the optimizer that makes the choice is [3.7](03-07-query-optimization-and-join-ordering.md).
- **Sideways:** a directory of pointers in front of the data, doubling when it runs out of resolution, is the same indirection that makes a multi-level page table work in [`operating-systems` 3.2](../../operating-systems/lessons/03-02-paging-and-the-os-page-table.md) — one small structure absorbing the growth so the large one does not have to move.
