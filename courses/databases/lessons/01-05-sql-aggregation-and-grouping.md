# Database Systems · Lesson 1.5: SQL III — aggregation & grouping

> ⏱ ~15 min · Module 1: The relational model & SQL · Builds on: [1.4 (joins)](01-04-sql-joins-and-set-operations.md) · Unlocks: [1.6 (subqueries & views)](01-06-subqueries-exists-and-views.md)

## Why this matters

Almost every question a business asks a database is a question about *groups*, not rows: revenue per region, average latency per endpoint, orders per customer. Aggregation is the clause that turns a table of facts into a table of summaries.

It is also where two of this module's threads converge and cause trouble. Aggregates ignore NULL, and outer joins manufacture NULL — so a "count per group" over a left join reports a count of one for every group that has nothing. This lesson is largely about that intersection, because it produces wrong numbers rather than errors, and wrong numbers propagate.

## The idea

`GROUP BY` partitions the rows into buckets that agree on the grouping columns, and each aggregate function then collapses one bucket to one value. The result has **one row per group** — which is the single most useful thing to remember, because it tells you immediately what you are allowed to put in the `SELECT` list.

The other idea worth internalizing is **evaluation order**, which is not the written order:

$$\texttt{FROM} \;\to\; \texttt{WHERE} \;\to\; \texttt{GROUP BY} \;\to\; \texttt{HAVING} \;\to\; \texttt{SELECT} \;\to\; \texttt{ORDER BY}$$

Two consequences fall straight out. `WHERE` runs *before* the grouping, so it filters rows and cannot mention an aggregate — there are no groups yet. `HAVING` runs *after*, so it filters groups and is the only place an aggregate may appear in a condition. And because `SELECT` runs second-to-last, an alias defined there is generally not available to `WHERE` or `GROUP BY`, though most systems do allow it in `ORDER BY`.

## The formal version

> **Grouping.** `GROUP BY` $G$ partitions the input rows into blocks, one per distinct value of the tuple $G$, and emits one output row per block.

Rows with a NULL in a grouping column form their own group — grouping uses duplicate semantics, matching NULL with NULL, exactly as the set operators of [1.4](01-04-sql-joins-and-set-operations.md) do and unlike `=`.

> **The `SELECT`-list rule.** Every expression in the `SELECT` list of a grouped query must be either a grouping column or an aggregate.

In words: one output row per group, so any column not fixed within the group has no single value to report. A query asking for `title` alongside `COUNT(*)` grouped by publisher is asking for one title out of several, and standard SQL rejects it.

The five aggregates, and the rule that governs all of them:

| function | returns | NULL handling |
|---|---|---|
| `COUNT(*)` | number of rows in the group | counts rows; NULLs included |
| `COUNT(A)` | number of rows where $A$ is not null | **skips NULL** |
| `COUNT(DISTINCT A)` | number of distinct non-null values of $A$ | skips NULL |
| `SUM(A)`, `AVG(A)`, `MIN(A)`, `MAX(A)` | over the non-null values | **skips NULL** |

> **The aggregate NULL rule.** Every aggregate except `COUNT(*)` ignores NULL inputs entirely, and `AVG(A)` divides by the count of *non-null* values.

So $\mathrm{AVG}(A) \neq \mathrm{SUM}(A) / \mathrm{COUNT}(*)$ whenever $A$ has a NULL in the group. It equals $\mathrm{SUM}(A)/\mathrm{COUNT}(A)$. This is not a quirk to memorize — it is the only defensible choice, since averaging in an unknown value would require inventing one. But it means the denominator of an average is a number you did not write down anywhere.

One more: an aggregate over **zero rows** returns NULL for `SUM`, `AVG`, `MIN` and `MAX`, and **0** for `COUNT`. That asymmetry is what makes the outer-join trap below produce a plausible-looking wrong number instead of an obvious one.

## Picture

![The six clauses of a grouped query drawn as a vertical pipeline, showing five rows out of FROM, three surviving WHERE, two groups after GROUP BY and one group after HAVING, with a note that the surviving group has COUNT(*) of two but an average over one value](assets/01-05-fig1.svg)

Follow the row counts down the pipeline. The units change at `GROUP BY`: above it the currency is rows, below it groups.

## Worked examples

**Example 1 — reading the pipeline.**

```sql
SELECT   p.name, COUNT(*) AS n, AVG(b.price) AS avg_price
FROM     publisher p JOIN book b ON p.pub_id = b.pub_id
WHERE    b.year >= 2021
GROUP BY p.pub_id, p.name
HAVING   COUNT(*) >= 2;
```

Stage by stage against the library instance:

| stage | result |
|---|---|
| `FROM` | 5 rows, one per book |
| `WHERE b.year >= 2021` | 3 rows: Nine Gates (2021, 22), The Long Field (2023, 31), Ember (2023, NULL) |
| `GROUP BY` | 2 groups: Ravenwood {Nine Gates, Ember}, Holloway {The Long Field} |
| `HAVING COUNT(*) >= 2` | 1 group: Ravenwood |
| `SELECT` | 1 row |

The output row is `(Ravenwood, 2, 22)`.

**Look at that row carefully.** It reports a count of 2 and an average of 22, and the two numbers have different denominators. `COUNT(*)` counted both books; `AVG(price)` averaged the one book with a price, since Ember's is NULL. A reader who multiplies count by average to recover a total gets 44 where the actual `SUM(price)` is 22.

Note also `GROUP BY p.pub_id, p.name`. Grouping by `p.name` alone would be wrong in principle — two publishers could share a name — while grouping by `pub_id` alone leaves `p.name` in the `SELECT` list as neither a grouping column nor an aggregate. Grouping by the key *and* carrying along the attributes it determines is the standard idiom, and lesson [2.3](02-03-functional-dependencies-closure-and-keys.md) gives the reason it is safe: `pub_id` functionally determines `name`.

**Example 2 — the outer join that reports one instead of zero.**

*How many loans has each member taken?* Preserve members with none, using the left join from [1.4](01-04-sql-joins-and-set-operations.md):

```sql
SELECT   m.name, COUNT(*) AS loans
FROM     member m LEFT JOIN loan l ON m.mid = l.mid
GROUP BY m.mid, m.name;
```

| name | loans |
|---|---|
| Ada | 4 |
| Bram | 2 |
| Cyd | 3 |
| Devi | **1** |

Devi has borrowed nothing, and the report says one.

The cause is the composition of two correct behaviours. The left join emitted one NULL-padded row for Devi, so her group contains exactly one row. `COUNT(*)` counts *rows*, padded or not, and returns 1. Nothing here is a bug in isolation.

The fix is to count a column that is NULL precisely in the padded rows — a column of the right-hand table, ideally part of its key:

```sql
SELECT   m.name, COUNT(l.isbn) AS loans
FROM     member m LEFT JOIN loan l ON m.mid = l.mid
GROUP BY m.mid, m.name;
```

| name | loans |
|---|---|
| Ada | 4 |
| Bram | 2 |
| Cyd | 3 |
| Devi | **0** |

**The rule to carry away: with an outer join, never `COUNT(*)`.** Count a non-nullable column of the preserved-against side. The same reasoning applies to `SUM` — summing an outer-joined column gives NULL, not 0, for an empty group, which is arguably more honest and is certainly more likely to be noticed.

## Watch out

- **You might think `WHERE` and `HAVING` are interchangeable.** `WHERE` filters rows before grouping and cannot see an aggregate; `HAVING` filters groups after. Putting a plain row condition in `HAVING` usually works but computes groups you then discard; putting an aggregate in `WHERE` is an error.
- **You might think `COUNT(*)` and `COUNT(col)` differ only in style.** They differ whenever `col` can be NULL, and an outer join guarantees it can. This is the most common source of a report that is quietly off by one per empty group.
- **You might think `AVG` divides by the number of rows.** It divides by the number of non-null values. On the three Ravenwood books, `AVG(price)` is 18 while `SUM(price)/COUNT(*)` is 12 — the same data, a 50 percent gap, and no error message.
- **You might think a group with no rows appears with a zero.** It does not appear at all. `GROUP BY` can only emit groups that have at least one row, which is why "publishers with no books" needs an outer join and cannot be had from grouping alone.

## One-liner

> `GROUP BY` changes the unit of the answer from rows to groups — and since every aggregate but `COUNT(*)` ignores NULL, an outer join's padding turns "none" into "one" unless you count the right column.

## Problems

**P1 (🟢)** For the `book` table below, give the exact value of each expression.

| isbn | pub_id | year | price |
|---|---|---|---|
| B1 | RVN | 2019 | 14 |
| B2 | RVN | 2021 | 22 |
| B3 | HOL | 2019 | 18 |
| B4 | HOL | 2023 | 31 |
| B5 | RVN | 2023 | NULL |

(a) `SELECT COUNT(*), COUNT(price), COUNT(DISTINCT year) FROM book;`
(b) `SELECT AVG(price) FROM book WHERE pub_id = 'RVN';`
(c) `SELECT SUM(price) / COUNT(*) FROM book WHERE pub_id = 'RVN';`
(d) `SELECT MAX(price) FROM book WHERE year = 2025;`

**P2 (🟡)** An analyst reports "average books per publisher" using

```sql
SELECT   p.name, COUNT(*) AS n_books
FROM     publisher p LEFT JOIN book b ON p.pub_id = b.pub_id
GROUP BY p.pub_id, p.name;
```

against the three publishers RVN (3 books), HOL (2 books) and KIN (0 books).

(a) Give the exact output table.
(b) Give the mean of the `n_books` column as reported, and the true mean books per publisher.
(c) Correct the query with a one-token change, and give the corrected output.
(d) The analyst's colleague suggests using an inner join instead. Give the resulting number of output rows and explain why the reported mean would then be *further* from the truth, not closer.

**P3 (🔴, optional)** A `reading(sensor_id, taken_at, celsius)` table logs temperature readings; `celsius` is NULL when the sensor failed to report. For one day, sensor S1 logged 4 readings of which 1 is NULL, and sensor S2 logged 2 readings, both NULL.

```sql
SELECT   sensor_id, COUNT(*) AS n,
         AVG(celsius) AS mean, COUNT(celsius) AS ok
FROM     reading
GROUP BY sensor_id;
```

(a) Give the number of output rows, and state what `mean` is for S2 and why.
(b) S1's three non-null readings are 18, 20 and 22. Give `n`, `mean` and `ok` for S1.
(c) A downstream job computes an overall mean as $\bigl(\sum_g \texttt{mean}_g\bigr) / (\text{number of groups})$ from this result. Give the number it produces and the true mean over all readings, and name the two distinct defects that separate them.
(d) Write a single query returning one row per sensor with a mean that is NULL only when the sensor reported nothing usable, plus a column flagging that case, and state what makes your flag reliable.

<details>
<summary>Solutions</summary>

**P1**

(a) **5, 4, 3.** `COUNT(*)` counts rows. `COUNT(price)` skips the one NULL. `COUNT(DISTINCT year)` sees 2019, 2021, 2023.

(b) **18.** The Ravenwood books are B1 (14), B2 (22) and B5 (NULL). `AVG` sums the two non-null values to 36 and divides by 2.

(c) **12.** `SUM(price)` is 36, `COUNT(*)` is 3, so $36/3 = 12$. Same rows as (b), different denominator: 3 instead of 2. The gap between 18 and 12 is entirely the one NULL.

(d) **NULL.** No row satisfies the filter, and `MAX` over an empty set of values is NULL. Note the contrast with `COUNT`, which would return 0 here — this is the asymmetry that lets an empty result masquerade as a real value in an arithmetic pipeline.

**P2**

(a)

| name | n_books |
|---|---|
| Ravenwood | 3 |
| Holloway | 2 |
| Kingsley | **1** |

(b) As reported the mean is $(3 + 2 + 1)/3 = 2.0$. The true mean is $(3 + 2 + 0)/3 = 5/3 \approx 1.67$. The error is one whole book spread across three publishers, and it is invisible in the output — 1 is a perfectly plausible book count.

(c) Change `COUNT(*)` to `COUNT(b.isbn)`:

| name | n_books |
|---|---|
| Ravenwood | 3 |
| Holloway | 2 |
| Kingsley | **0** |

`isbn` is `book`'s primary key, so it is NULL in exactly the rows the left join padded.

(d) An inner join gives **2 output rows**, Ravenwood and Holloway. Kingsley has no `book` row to match, so it is dropped before grouping and never becomes a group at all.

The reported mean becomes $(3+2)/2 = 2.5$, which is further from 1.67 than the original 2.0 was. The reason is that the outer join's error was to count an empty publisher as 1 instead of 0 — an error of one in the numerator. The inner join instead removes the publisher from the *denominator*, which is a larger distortion: it changes the question from "per publisher" to "per publisher that has books." Removing a zero from an average always raises it, and the more empty groups there are, the worse it gets.

**P3**

(a) **2 rows**, one per sensor. For S2, `mean` is **NULL**. Both of its readings are NULL, so `AVG` has no non-null values to average, and an aggregate over an empty set of values is NULL rather than 0. Note this is not the same as "the sensor read 0 degrees," and nothing in the output distinguishes the two without the `ok` column.

(b) **`n` = 4, `mean` = 20, `ok` = 3.** `COUNT(*)` counts all four rows including the failed one; `AVG` sums 18 + 20 + 22 = 60 over the three non-null values, giving exactly 20; `COUNT(celsius)` reports 3.

(c) The job computes $(20 + \text{NULL})/2$. In SQL that expression is NULL, so if the arithmetic happens in the database the answer is **NULL**; if the result set is pulled into a language that treats NULL as 0, the answer is $(20 + 0)/2 = 10$. Either way it is wrong.

The true mean over all readings is the mean of the three usable values, $60/3 = 20$.

The two defects:

1. **Averaging averages.** Even with no NULLs, the mean of per-group means is not the overall mean unless the groups are equal in size. It weights a 2-reading sensor as heavily as a 4-reading one. The correct overall figure comes from `SUM(celsius) / COUNT(celsius)` over the un-grouped table.
2. **Treating an empty aggregate as a number.** S2's NULL mean is not a temperature. It must be excluded from the calculation, not coerced — and the choice to exclude it is a modelling decision that has to be made explicitly, since silently dropping a whole sensor from a fleet average is also a defect.

(d)

```sql
SELECT   sensor_id,
         AVG(celsius)                          AS mean,
         CASE WHEN COUNT(celsius) = 0
              THEN 'no usable readings' END    AS flag
FROM     reading
GROUP BY sensor_id;
```

**What makes the flag reliable:** it tests `COUNT(celsius)`, which counts non-null values and is 0 exactly when every reading in the group was NULL. It is not derived from `mean` itself — testing `mean IS NULL` would work here but conflates "no usable readings" with any other route to a NULL, and `COUNT` states the actual condition.

`COUNT(*)` would be wrong for this flag: it is 2 for S2, since the rows exist and only their values are missing. The distinction between "no rows" and "rows with no values" is exactly what the two `COUNT` forms are for.

</details>

## Flashback

**From Lesson 1.3 (SQL I — querying single tables):** A `part(pid, name, weight_kg, supplier)` table holds 12 rows. Three parts have a NULL `weight_kg`. An engineer runs

```sql
SELECT COUNT(*) FROM part WHERE weight_kg <= 5;      -- returns 4
SELECT COUNT(*) FROM part WHERE weight_kg > 5;       -- returns 5
```

(a) Account for the discrepancy between $4 + 5$ and 12.
(b) Give the row count of `SELECT COUNT(*) FROM part WHERE NOT (weight_kg <= 5);` and say whether it repairs the discrepancy.
(c) Write a single query returning three counts — light, heavy, and unweighed — that sum to 12.

<details>
<summary>Solution</summary>

(a) $4 + 5 = 9$, three short of 12, and the three missing rows are exactly the three with a NULL `weight_kg`. For each of them `weight_kg <= 5` is unknown and `weight_kg > 5` is unknown, and `WHERE` keeps a row only when the predicate is **true**. So they fail both filters and appear in neither count.

(b) **5 rows**, and it does not repair anything. `NOT(unknown)` is unknown, so the three NULL rows are dropped by the negation exactly as they were by the original predicate. The result is identical to `weight_kg > 5`. Negation never rescues a row whose predicate is unknown.

(c)

```sql
SELECT SUM(CASE WHEN weight_kg <= 5 THEN 1 ELSE 0 END)   AS light,
       SUM(CASE WHEN weight_kg >  5 THEN 1 ELSE 0 END)   AS heavy,
       SUM(CASE WHEN weight_kg IS NULL THEN 1 ELSE 0 END) AS unweighed
FROM   part;
```

Returning 4, 5 and 3, which sum to 12.

The `CASE` expressions work because a `CASE` whose `WHEN` is unknown falls through to `ELSE`, so each NULL row contributes 0 to the first two counts and 1 to the third. `IS NULL` is the only one of the three predicates that returns true or false for every row, which is why it is the one that catches the remainder.

The general lesson, which the counts make quantitative: any pair of complementary-looking filters over a nullable column leaves a residue, and the size of the residue is the number of NULLs. Reconciling two reports that disagree by exactly the NULL count is the diagnostic.

</details>

## Connections

- **Backward:** the grouping in this lesson has no counterpart among the six primitive operators of [1.2](01-02-relational-algebra.md) — aggregation is a genuine extension to the algebra, usually written $_{G}\mathcal{G}_{F}(r)$, because collapsing many tuples to one is not expressible with selection, projection and products. The NULL behaviour, by contrast, is inherited unchanged from [1.3](01-03-sql-select-from-where.md).
- **Forward:** [1.6](01-06-subqueries-exists-and-views.md) puts an aggregate inside a subquery, which is how "the publisher with the most books" gets written. Computing a group is a sort or a hash, and [3.4](03-04-external-sorting.md) and [3.5](03-05-query-operators-and-join-algorithms.md) price both. The `GROUP BY pub_id, name` idiom is justified by the functional dependency machinery of [2.3](02-03-functional-dependencies-closure-and-keys.md).
- **Sideways:** the average-of-averages defect in P3 is Simpson-style aggregation bias, the same failure that makes an unweighted mean of group rates misrepresent a population rate. It is not a SQL problem; SQL merely makes it a one-line query.
