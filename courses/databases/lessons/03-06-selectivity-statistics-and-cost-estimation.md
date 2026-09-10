# Database Systems · Lesson 3.6: Selectivity, statistics & cost estimation

> ⏱ ~15 min · Module 3: Storage, indexing & query processing · Builds on: [3.5 (join algorithms)](03-05-query-operators-and-join-algorithms.md), [3.3 (access paths)](03-03-hashing-and-choosing-an-access-path.md) · Unlocks: [3.7 (query optimization)](03-07-query-optimization-and-join-ordering.md)

## Why this matters

Every cost formula in this module takes a row count as input. [3.3](03-03-hashing-and-choosing-an-access-path.md) decided between an index and a scan by comparing $m$ against 2.5 percent of the table; [3.5](03-05-query-operators-and-join-algorithms.md) priced five join algorithms in terms of $M$ and $N$.

For a base table those counts are known. **For everything else they are guesses.** The input to the second join in a three-way query is the output of the first, and no one has counted it — the plan has not run yet. So the optimizer estimates, and the estimate is where query optimization actually goes wrong. A cost model can be perfect and still choose a catastrophic plan if it believes an operator will emit 300 rows when it will emit 3,000,000.

Understanding the estimator is therefore the practical skill: it tells you which queries the optimizer will handle well, which it will misjudge, and what to do about the second kind.

## The idea

**Selectivity** is the fraction of rows a predicate keeps. If a predicate has selectivity $s$ over a table of $n$ rows, it emits $s \cdot n$ rows, and that number feeds every downstream cost.

Estimating $s$ without looking at the data means assuming something about it, and the two default assumptions are:

**Uniformity.** Values are spread evenly across their range, and every distinct value is equally common. So an equality on a column with 6 distinct values has selectivity $1/6$.

**Independence.** Predicates on different columns are unrelated, so their selectivities multiply.

Both are almost always false, and they are used anyway because they are cheap and often close enough. Where they fail, they fail badly — the figure shows uniformity wrong by a factor of ten in both directions on ordinary data.

**Histograms** are the fix for uniformity. Instead of one range, keep a summary of the actual distribution in buckets. Two schemes compete: **equi-width** buckets span equal value ranges, **equi-depth** buckets hold equal row counts.

The figure shows what they actually do, and the result is more interesting than the textbook claim that equi-depth is better. Equi-depth is exact where the data is dense, because that is where it puts its boundaries; it is poor in the sparse tail, which its last bucket has to swallow whole. Equi-width is the reverse. Neither dominates, and the honest summary is that equi-depth is the better default because **queries tend to land where the data is**.

Nothing fixes independence except multi-column statistics, which most systems collect only when told to.

## The formal version

Write $n_R$ for the number of rows in $R$ and $V(A, R)$ for the number of distinct values of attribute $A$ in $R$.

> **Selectivity of standard predicates**, under uniformity:
>
> | predicate | selectivity |
> |---|---|
> | $A = c$ | $\dfrac{1}{V(A,R)}$ |
> | $A > c$ | $\dfrac{\max(A) - c}{\max(A) - \min(A)}$ |
> | $A$ `BETWEEN` $c_1$ `AND` $c_2$ | $\dfrac{c_2 - c_1}{\max(A) - \min(A)}$ |
> | $A$ `IN` a list of $k$ values | $\dfrac{k}{V(A,R)}$ |
> | $A = B$, both in $R$ | $\dfrac{1}{\max\bigl(V(A,R),\,V(B,R)\bigr)}$ |

> **Combining predicates**, under independence:
> $$s(P \wedge Q) = s(P) \cdot s(Q), \qquad s(P \vee Q) = s(P) + s(Q) - s(P)s(Q), \qquad s(\neg P) = 1 - s(P)$$

> **Join cardinality.** For an equijoin of $R$ and $S$ on $A$:
> $$|R \bowtie S| \approx \frac{n_R \cdot n_S}{\max\bigl(V(A,R),\, V(A,S)\bigr)}$$

The reasoning: each row of $R$ matches, on average, $n_S / V(A,S)$ rows of $S$. Taking the maximum of the two distinct-value counts is the conservative choice, and it is exact in the common case where $A$ is a foreign key — then $V(A,S) = n_S$ and the estimate collapses to $n_R$, which is right: **every row of the referencing table matches exactly one row of the referenced one**.

> **Equi-width histogram.** $K$ buckets of equal value span. A range query's estimate sums whole buckets fully inside the range plus a *proportional slice* of each partly-overlapping bucket.

> **Equi-depth histogram.** $K$ buckets each holding $n/K$ rows, with boundaries placed wherever that requires. The same range formula applies, and the within-bucket uniformity assumption is now applied to a much narrower span where the data is dense.

Both are computed by scanning the table, which is why statistics are refreshed periodically rather than maintained live, and why a table that has changed a great deal since its last statistics refresh gets bad plans.

## Picture

![The true fare distribution plotted as a curve with a tall head below 120 and a long thin tail, with equi-width bucket boundaries evenly spaced beneath it and equi-depth boundaries crowded into the head, alongside a table of estimation errors showing uniformity wrong by up to 940 percent, equi-width best in the tail and equi-depth exact in the head](assets/03-06-fig1.svg)

The error table is the lesson. Read down the "uniform" column first — that is what an optimizer assumes when no histogram exists.

## Worked examples

**Example 1 — three estimators on one skewed column.**

The `booking` table has 2,000,000 rows and a `fare` column ranging from 40 to 999. The distribution is realistic rather than uniform: about 70 percent of fares fall below 120, another 23 percent between 120 and 300, and 7 percent spread thinly to 999.

| query | true rows | uniform | equi-width | equi-depth |
|---|---|---|---|---|
| `fare BETWEEN 40 AND 120` | 1,403,033 | 166,840 (**88% low**) | 1,202,463 (14% low) | 1,405,000 (**exact**) |
| `fare BETWEEN 150 AND 250` | 257,640 | 208,551 (19% low) | 242,992 (6% low) | 256,677 (**exact**) |
| `fare BETWEEN 400 AND 500` | 20,465 | 208,551 (**919% high**) | 20,214 (**1% high**) | 27,901 (36% high) |
| `fare BETWEEN 800 AND 999` | 39,900 | 415,016 (**940% high**) | 39,812 (**exact**) | 55,249 (38% high) |

Three things to take from this.

**Uniformity is not slightly wrong, it is wrong by an order of magnitude.** It underestimates the dense head by a factor of 8 and overestimates the sparse tail by a factor of 10. Either error is enough to pick the wrong plan: the first would choose an index scan where a full scan is right, and the second a full scan where an index is right.

**Equi-depth is exact where the data is dense** — both head queries come out right — because it places nine of its ten boundaries below fare 276, so within-bucket uniformity is being assumed over spans of about 12.

**Equi-depth is poor in the tail**, off by 36 percent, and equi-width is better there. Its last bucket spans 276 to 999 and holds 200,000 rows, which it then assumes are uniform across that whole width — but they are not, they cluster near the bottom. Equi-width's tail buckets are narrow enough to catch the shape.

**So the usual claim that equi-depth is better needs a qualifier**, and the qualifier is why it holds in practice: queries mostly filter where the rows are, so being exact in the dense region and sloppy in the sparse one is the right trade. It is a trade, not a dominance.

**Example 2 — where independence breaks, and by how much.**

Estimate the rows matching

```sql
WHERE origin = 'LHR' AND country = 'GB'
```

on the 2,000,000-row `booking` table, where `origin` has 200 distinct values and `country` has 50.

**The optimizer's estimate.** Each equality gets $1/V$:

$$s(\text{origin}) = \frac{1}{200} = 0.005, \qquad s(\text{country}) = \frac{1}{50} = 0.02$$

Independence multiplies them: $s = 0.005 \times 0.02 = 0.0001$, giving $2{,}000{,}000 \times 0.0001 = \mathbf{200 \text{ rows}}$.

**The truth.** London Heathrow is in Great Britain. Every row with `origin = 'LHR'` has `country = 'GB'`, so the second predicate removes nothing at all:

$$\text{true rows} = 2{,}000{,}000 \times 0.005 = \mathbf{10{,}000 \text{ rows}}$$

**The estimate is low by a factor of 50**, and the factor is exactly $V(\text{country}) = 50$ — the entire selectivity of the redundant predicate, applied as if it were informative.

**Why a 50-fold error matters more than it sounds.** Estimating 200 rows makes an index nested loop look excellent: probe the inner table 200 times, done. At 10,000 rows the same plan probes 50 times more often, and if the inner index is unclustered ([3.5](03-05-query-operators-and-join-algorithms.md)) the plan that looked like the winner becomes the one that is fourteen times worse than a scan.

And errors **compound through a plan**. If the first join's output is underestimated by 50 and that feeds a second join whose own estimate is off by 10, the top of a three-way plan can be wrong by a factor of 500. This is the standard finding about optimizers: cost models are accurate, cardinality estimates are not, and estimation error is the dominant source of bad plans.

**What to do about it.** The practical responses, in order of how often they are the right one: keep statistics fresh, since stale statistics on a grown table are the most common cause; create **multi-column statistics** on correlated column pairs, which most systems support and none collect by default; and where the correlation is structural, remove it — `country` is functionally determined by `origin`, which is a transitive dependency of the kind [2.4](02-04-anomalies-and-the-normal-forms.md) says not to store. **A schema in third normal form gives the optimizer fewer chances to double-count**, which is a benefit of normalization that has nothing to do with anomalies.

## Watch out

- **You might think a bad plan means a bad cost model.** It usually means a bad cardinality estimate. The formulas in [3.5](03-05-query-operators-and-join-algorithms.md) are accurate given correct inputs; the inputs are the weak link.
- **You might think independence is a mild approximation.** Two perfectly correlated predicates produce an error equal to the full selectivity of the redundant one — a factor of 50 in Example 2, and larger with more distinct values. Correlated columns are the norm in real schemas, not the exception.
- **You might think equi-depth histograms are strictly better.** They are exact in dense regions and *worse* than equi-width in a sparse tail, as the table shows. They win in practice because queries follow the data, not because they dominate.
- **You might think statistics are maintained automatically as rows change.** They are computed by a scan, on a schedule or on demand. A table that has doubled since its last analysis is being optimized against a picture of a table half its size.

## One-liner

> Every cost formula takes a row count it does not know, so the optimizer assumes uniformity and independence — and when the data is skewed or the columns are correlated, that assumption is wrong by a factor of ten or fifty, which is where bad plans come from.

## Problems

**P1 (🟢)** A `flight` table has 500,000 rows. The column `carrier` has 25 distinct values, `aircraft_type` has 40, and `year` ranges from 2010 to 2024.

(a) Give the estimated rows for `WHERE carrier = 'BA'`.
(b) Give the estimated rows for `WHERE year > 2020`.
(c) Give the estimated rows for `WHERE carrier = 'BA' AND aircraft_type = 'A320'`.
(d) Give the estimated rows for `WHERE carrier = 'BA' OR carrier = 'AF'`.

**P2 (🟡)** An equi-depth histogram on `delay_minutes` over 800,000 rows has 8 buckets of 100,000 rows each, with boundaries

$$0,\; 2,\; 5,\; 9,\; 14,\; 22,\; 38,\; 95,\; 600$$

so the first bucket covers 0 to 2, the second 2 to 5, and so on.

(a) Give the estimated rows for `WHERE delay_minutes BETWEEN 0 AND 14`.
(b) Give the estimated rows for `WHERE delay_minutes BETWEEN 100 AND 200`.
(c) Give the estimate for (b) that the uniformity assumption would produce with no histogram, given the range 0 to 600.
(d) State which of the two estimates in (b) and (c) you would trust more, and name the specific structural reason the histogram estimate for (b) is still likely to be too high.

**P3 (🔴, optional)** Three tables: `customer` (100,000 rows, `cid` unique), `order` (2,000,000 rows, `cid` a foreign key to `customer`, `region_id` with 12 distinct values), and `region` (12 rows, `region_id` unique). The query is

```sql
SELECT * FROM customer c JOIN "order" o ON c.cid = o.cid
                         JOIN region r  ON o.region_id = r.region_id
WHERE  o.region_id = 3 AND o.status = 'shipped';
```

`status` has 5 distinct values, of which `'shipped'` covers 80 percent of orders.

(a) Give the optimizer's estimated row count for the two filters on `order`, under uniformity and independence.
(b) Give the true row count for those filters, assuming regions are equally sized.
(c) Estimate the cardinality of `order ⋈ customer` after the filters, using the join formula, and explain why the formula is exact here rather than approximate.
(d) The `region` join is on `region_id`, which the `WHERE` clause has already pinned to a single value. State the estimated cardinality of joining the filtered result to `region`, and name the optimizer rewrite that makes this join nearly free.

<details>
<summary>Solutions</summary>

**P1**

(a) $500{,}000 \times \frac{1}{25} = \mathbf{20{,}000}$ rows.

(b) $s = \frac{2024 - 2020}{2024 - 2010} = \frac{4}{14} \approx 0.2857$, so $500{,}000 \times 0.2857 \approx \mathbf{142{,}857}$ rows.

(c) Independence multiplies: $\frac{1}{25} \times \frac{1}{40} = \frac{1}{1000}$, so $\mathbf{500}$ rows.

This is exactly the shape of Example 2's error. If BA flies only A320s, the true answer is 20,000, and the estimate is low by a factor of 40.

(d) The two disjuncts are mutually exclusive — a flight has one carrier — so the true selectivity is $\frac{2}{25}$, giving 40,000 rows.

The formula, however, does not know they are exclusive. It computes

$$s = \frac{1}{25} + \frac{1}{25} - \frac{1}{25}\cdot\frac{1}{25} = 0.08 - 0.0016 = 0.0784$$

giving $\mathbf{39{,}200}$ rows. The 800-row shortfall is the inclusion-exclusion term subtracting an overlap that cannot exist.

Note this error is small and in the *safe* direction. An `IN` list is recognized as a special case by most optimizers and estimated as $k/V(A,R)$, giving the exact 40,000 — which is a reason to write `carrier IN ('BA','AF')` rather than a chain of `OR`s.

**P2**

(a) The boundaries 0, 2, 5, 9, 14 are exactly the first four bucket edges, so the range 0 to 14 covers **four whole buckets**:

$$4 \times 100{,}000 = \mathbf{400{,}000} \text{ rows}$$

No interpolation is needed, and the estimate is as good as the histogram itself. Half the rows have a delay under 15 minutes, which the boundaries alone tell you.

(b) Nine boundaries define **eight** buckets, so the last one spans 95 to 600 and holds 100,000 rows. The query range 100 to 200 lies inside it, overlapping 100 of its 505 units:

$$100{,}000 \times \frac{200 - 100}{600 - 95} = 100{,}000 \times \frac{100}{505} \approx \mathbf{19{,}802} \text{ rows}$$

No other bucket overlaps the range, since every other bucket ends at or below 95.

(c) With no histogram, uniformity over the full range 0 to 600:

$$800{,}000 \times \frac{200 - 100}{600 - 0} = 800{,}000 \times \frac{1}{6} \approx \mathbf{133{,}333} \text{ rows}$$

(d) **Trust the histogram estimate**, by a wide margin. The uniform figure of 133,333 assumes delays spread evenly out to 600 minutes, and the boundaries flatly contradict that: seven of the eight lie below 40, so 87.5 percent of rows have a delay under 38 minutes. A ten-hour delay is not as common as a two-minute one, and the uniform estimate is high by roughly a factor of 7.

**The structural reason the histogram's 19,802 is still likely too high** is the equi-depth tail weakness in its purest form. That last bucket spans 505 minutes and the estimate applies within-bucket uniformity across all of it — but the rows inside it are not uniform, they cluster near the bottom, exactly as the seven narrow buckets below it demonstrate the distribution does at every other scale. A distribution that is heavily right-skewed in each of its first seven buckets is right-skewed inside the eighth too.

**And the last bucket is always the widest**, because equi-depth places boundaries by row count and the tail is where rows are scarce. So a tail query always lands in the single bucket over which the uniformity assumption is least defensible. That is the trade Example 1 quantified at 36 to 38 percent error, and it is the price of being exact where the data is dense.

**P3**

(a) $s(\text{region\_id} = 3) = \frac{1}{12}$ and $s(\text{status} = \text{'shipped'}) = \frac{1}{5}$, since the optimizer sees 5 distinct values and assumes uniformity. Independence multiplies:

$$2{,}000{,}000 \times \frac{1}{12} \times \frac{1}{5} = \mathbf{33{,}333} \text{ rows}$$

(b) Regions are equally sized, so the region filter is genuinely $\frac{1}{12}$. But `'shipped'` covers 80 percent, not 20:

$$2{,}000{,}000 \times \frac{1}{12} \times 0.8 = \mathbf{133{,}333} \text{ rows}$$

**The estimate is low by a factor of 4**, and the entire error is the uniformity assumption on `status`. A column with 5 values where one covers 80 percent is exactly the case a histogram — or the "most common values" list most systems keep — would fix, and exactly the case uniformity cannot.

(c) Applying the join formula to the filtered `order` (call it 133,333 rows) and `customer`:

$$\frac{133{,}333 \times 100{,}000}{\max\bigl(V(\text{cid}, \text{order}),\ V(\text{cid}, \text{customer})\bigr)} = \frac{133{,}333 \times 100{,}000}{100{,}000} = \mathbf{133{,}333}$$

**The formula is exact rather than approximate because `cid` is a foreign key.** Referential integrity ([1.1](01-01-the-relational-model.md)) guarantees every `order.cid` matches exactly one `customer` row, so the join is many-to-one and cannot change the row count of the referencing side. $V(\text{cid}, \text{customer}) = 100{,}000$ because `cid` is unique there, the maximum is that value, and the customer count cancels.

This is the single most reliable estimate an optimizer makes, and it is reliable because the schema declared a constraint. **A foreign key is not only a correctness device; it is information the optimizer uses.** Dropping foreign-key declarations "for performance" removes that information and reliably produces worse plans.

(d) The `WHERE` clause pins `region_id = 3`, so the filtered result joins to **exactly one** `region` row:

$$\text{estimated cardinality} = \mathbf{133{,}333} \text{ rows} \text{ — unchanged.}$$

Applying the formula mechanically gives $\frac{133{,}333 \times 12}{\max(12, 12)} = 133{,}333$, which agrees.

**The rewrite that makes it nearly free is predicate transitivity** — sometimes called transitive closure or predicate propagation. The optimizer observes that `o.region_id = r.region_id` and `o.region_id = 3` together imply `r.region_id = 3`, and adds that predicate to the `region` side. Now the `region` scan returns one row rather than twelve, and the join becomes a single-row lookup that any algorithm handles in essentially no I/O.

The same rewrite is what lets a predicate on one table restrict another it was never written against, and it is one of the standard logical rewrites applied before costing begins in [3.7](03-07-query-optimization-and-join-ordering.md).

</details>

## Flashback

**From Lesson 3.5 (query operators & join algorithms):** Join $P$ (600 pages, 30,000 rows) to $Q$ (24,000 pages, 1,200,000 rows) on a key of $P$, with $B = 202$ frames. A height-3 clustered index exists on $Q$'s join column, and $Q$ holds 50 rows per page.

(a) Give the block nested-loop cost with $P$ as outer.
(b) Give the grace hash join cost.
(c) Give the index nested-loop cost with $P$ as outer, given 40 matching $Q$ rows per $P$ row.
(d) Rank the three.

<details>
<summary>Solution</summary>

(a) Block size $B - 2 = 200$:

$$600 + \left\lceil \frac{600}{200} \right\rceil \times 24{,}000 = 600 + 3 \times 24{,}000 = \mathbf{72{,}600}$$

(b) $3(600 + 24{,}000) = \mathbf{73{,}800}$. The condition holds: $\sqrt{600} \approx 25 < 202$.

(c) Each of the 30,000 outer rows probes for 40 matches; clustered, so the matches occupy $\lceil 40/50 \rceil = 1$ page:

$$600 + 30{,}000 \times (3 + 1) = 600 + 120{,}000 = \mathbf{120{,}600}$$

(d)

| plan | cost |
|---|---|
| block nested loop | 72,600 |
| grace hash | 73,800 |
| index nested loop, clustered | 120,600 |

**Block nested loop wins, narrowly.** The reason it beats hash here is that $P$ is small enough to need only 3 passes over $Q$, while hash must read and write all 24,600 pages three times regardless.

And the clustered index nested loop loses despite the index being a good one — 30,000 probes at 4 I/Os each is 120,000, and no index can be cheap when it is probed 30,000 times. The general shape is that index nested loop wins when the *outer* is small, and here 30,000 rows is not small enough.

Worth noticing that (a) and (b) differ by 1.7 percent, which is close enough that the choice would flip on a small change in $B$: at $B = 302$ the block plan needs only 2 passes and costs 48,600, winning comfortably.

</details>

## Connections

- **Backward:** the $m$ that decided index-versus-scan in [3.3](03-03-hashing-and-choosing-an-access-path.md) and the $M$ and $N$ that priced joins in [3.5](03-05-query-operators-and-join-algorithms.md) are the quantities this lesson produces. The correlation error in Example 2 is a transitive dependency of the kind [2.4](02-04-anomalies-and-the-normal-forms.md) forbids, and the exactness of the foreign-key join estimate is referential integrity from [1.1](01-01-the-relational-model.md) paying an unexpected dividend.
- **Forward:** [3.7](03-07-query-optimization-and-join-ordering.md) searches a plan space using these estimates as its objective function, which is why the search can be perfect and the answer still wrong. The predicate transitivity of P3(d) is one of its logical rewrites.
- **Sideways:** a histogram is a density estimate, and the equi-width versus equi-depth choice is fixed-bin versus quantile binning — the same trade as in [`prob-stat-refresher` 2.3](../../prob-stat-refresher/lessons/02-03-continuous-distributions.md), where a skewed density is badly summarized by equal-width bins and a quantile summary hides the tail's shape. The independence assumption is the same one that makes a naive Bayes classifier tractable and wrong in the same way.
