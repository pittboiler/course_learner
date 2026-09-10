# Database Systems · Lesson 1.6: SQL IV — subqueries, `EXISTS` & views

> ⏱ ~15 min · Module 1: The relational model & SQL · Builds on: [1.5 (aggregation)](01-05-sql-aggregation-and-grouping.md), [1.4 (joins)](01-04-sql-joins-and-set-operations.md) · Unlocks: [2.1 (ER modeling)](02-01-entity-relationship-modeling.md)

## Why this matters

Some questions cannot be answered in one pass. "Books priced above their own publisher's average" needs the average before it can filter, and the average depends on which publisher each row belongs to. Subqueries are how SQL nests one question inside another.

The one that repays real study is `NOT EXISTS`, for two reasons. It is the safe spelling of the anti-join — immune to the NULL trap that empties `NOT IN` ([1.3](01-03-sql-select-from-where.md)). And doubly nested, it is the only way to express the algebra's **division**, which is how you ask "who did *every* one of these." That query shape appears in every serious schema and is written wrong more often than any other.

## The idea

A subquery is a `SELECT` inside another query. The distinction that matters is whether it depends on the outer row.

An **uncorrelated** subquery mentions nothing from the outer query. It is a constant: the system evaluates it once and reuses the value for every row. `WHERE price > (SELECT AVG(price) FROM book)` computes one number.

A **correlated** subquery references a column of the outer query. Conceptually it is re-evaluated for each outer row, which makes it a loop — and reading it as a loop is the right mental model even though the optimizer will usually rewrite it into a join ([3.7](03-07-query-optimization-and-join-ordering.md)).

The difference is one word in the text and a completely different answer. `WHERE price = (SELECT MAX(price) FROM book)` finds the single most expensive book. Add `WHERE b2.pub_id = b.pub_id` to the subquery and it finds the most expensive book *of each publisher*.

**Views** are the other half of the lesson and are simpler: a view is a named query, substituted into whatever uses it. They exist so that a complicated join can be written once and referred to by name, and so that users can be granted access to a filtered slice of a table rather than the table.

## The formal version

> **Uncorrelated scalar subquery.** A subquery returning one row and one column, usable anywhere a value is. Evaluated once.

If it returns more than one row where a single value is expected, that is a runtime error, not a silent truncation. If it returns *no* rows, it evaluates to NULL — which then poisons whatever comparison it feeds, exactly as in [1.3](01-03-sql-select-from-where.md).

> **`EXISTS`.** `EXISTS (Q)` is true if $Q$ returns at least one row, false otherwise.

In words: a test of emptiness. Two properties make it well-behaved. It returns **only true or false, never unknown** — which is precisely why it escapes the `NOT IN` trap. And it never looks at the *values* $Q$ returns, only whether any row came back, which is why the idiomatic body is `SELECT 1`.

> **Anti-join via `NOT EXISTS`.**
> ```sql
> SELECT * FROM r WHERE NOT EXISTS (SELECT 1 FROM s WHERE s.k = r.k);
> ```

Compare with `NOT IN`: if `s.k` contains a NULL, `NOT IN` returns nothing at all, while `NOT EXISTS` is unaffected, because a row whose `s.k` is NULL simply fails `s.k = r.k` and does not count as a match.

> **Division.** "Every $x$ satisfies $P$" has no direct SQL syntax, so it is written as the double negation "there is no $x$ that fails $P$":
> $$\forall x\, P(x) \;\equiv\; \neg \exists x\, \neg P(x)$$

That logical identity *is* the query. The outer `NOT EXISTS` is the $\neg\exists$, the inner one is the $\neg P$, and the middle `SELECT` ranges over $x$.

> **View.** `CREATE VIEW v AS Q` names the query $Q$. A reference to `v` is replaced by $Q$; nothing is stored.

A **materialized** view does store the result, which makes reads fast and creates the problem of keeping it current when the base tables change. That trade — precomputed and stale, or derived and slow — is the same one an index makes in [3.3](03-03-hashing-and-choosing-an-access-path.md).

## Picture

![A grid with members as rows and the three required Ravenwood books as columns, where Ada has all three cells filled and Bram and Cyd each have missing cells marked in coral, alongside a note listing the four missing pairs and how projecting them gives the disqualified members](assets/01-06-fig1.svg)

Division asks for rows with **no gap**. The four coral cells are what the query hunts for, and finding none in a member's row is what qualifies her.

## Worked examples

**Example 1 — one word turns a global question into a per-group one.**

Uncorrelated:

```sql
SELECT title, pub_id, price FROM book b
WHERE  price = (SELECT MAX(price) FROM book);
```

The subquery mentions no outer column, so it evaluates once to 31 and the query returns **1 row**: *The Long Field*.

Now correlate it:

```sql
SELECT title, pub_id, price FROM book b
WHERE  price = (SELECT MAX(b2.price) FROM book b2
                WHERE  b2.pub_id = b.pub_id);
```

The added condition ties the subquery to the current outer row. For a Ravenwood book it computes 22, for a Holloway book 31, and the query returns **2 rows**:

| title | pub_id | price |
|---|---|---|
| Nine Gates | RVN | 22 |
| The Long Field | HOL | 31 |

Read the correlated form as a loop: for each book $b$, compute the maximum over $b$'s own publisher, and keep $b$ if it matches. Note the aliases are doing real work — `b` and `b2` name two independent scans of the same table, exactly as in the self-join of [1.4](01-04-sql-joins-and-set-operations.md).

**A trap in the same shape.** *Ember* has a NULL price. For it, the subquery still returns 22, but `NULL = 22` is unknown and the row is dropped. Had every Ravenwood price been NULL, the subquery would return NULL and the comparison would again be unknown. Correlated subqueries do not repair NULL behaviour; they inherit it.

**Example 2 — the division query, built from its logic.**

*Which members have borrowed every Ravenwood book?*

Start from the English and rewrite it into the double negative, which is the actual construction step:

> members $m$ such that **there is no** Ravenwood book $b$ **that** $m$ **has not borrowed**

Each phrase becomes one layer:

```sql
SELECT m.name
FROM   member m
WHERE  NOT EXISTS (                                    -- there is no
         SELECT 1 FROM book b WHERE b.pub_id = 'RVN'  -- Ravenwood b
         AND NOT EXISTS (                              -- that m has not
           SELECT 1 FROM loan l
           WHERE  l.mid = m.mid AND l.isbn = b.isbn    -- borrowed
         )
       );
```

**1 row: Ada.**

Trace it with the figure. The middle query ranges over the three Ravenwood ISBNs B1, B2, B5. For Bram it finds B2 — he never borrowed it — so the inner `NOT EXISTS` is true, the middle query returns a row, and the outer `NOT EXISTS` is false. Bram is out. Cyd fails the same way on B1. For Ada, every one of the three is matched by a loan, the middle query returns nothing, and the outer `NOT EXISTS` is true.

Two details worth pinning down.

**Extra loans do not disqualify.** Ada also borrowed B3, a Holloway book, and it is irrelevant — the middle query only ever ranges over the required set. Division asks for *at least* every required value.

**The empty-divisor case is where this differs from the algebra.** If Ravenwood published nothing, the middle query returns no rows for anybody, so the outer `NOT EXISTS` is true for every member and the query returns all four — including Devi, who has borrowed nothing at all. That is the correct reading of "borrowed every Ravenwood book" when there are none to borrow, and it is vacuous truth doing its job. The algebra's $\div$ in [1.2](01-02-relational-algebra.md) would exclude Devi even then, because it draws its candidates from the `loan` relation, in which she does not appear. **The two constructs agree except when the divisor is empty**, and the SQL version is the one that matches the English.

**A view, to put it to use.**

```sql
CREATE VIEW active_loan AS
  SELECT * FROM loan WHERE returned IS NULL;

SELECT m.name, v.isbn FROM active_loan v JOIN member m ON m.mid = v.mid;
```

**3 rows**: Ada with B5, Cyd with B2 and B4. Nothing is stored — the view's text is substituted and the optimizer sees one query, so the filter can be pushed and combined exactly as in [1.2](01-02-relational-algebra.md).

## Watch out

- **You might think `NOT IN` and `NOT EXISTS` are interchangeable.** They agree until a NULL appears in the subquery's column, at which point `NOT IN` returns zero rows and `NOT EXISTS` returns the right answer. Prefer `NOT EXISTS` by default; the cost is identical after optimization.
- **You might think a correlated subquery is slow because it runs once per row.** That is the semantics, not usually the execution — optimizers rewrite most correlated subqueries into joins or semi-joins. Write the clearest form and check the plan if it matters ([3.7](03-07-query-optimization-and-join-ordering.md)).
- **You might think a scalar subquery returning nothing is an error.** It returns NULL, which then makes its comparison unknown and drops the outer row silently. Returning *two* rows is the error. The failure modes are opposite and only one of them tells you.
- **You might think a view is a snapshot.** An ordinary view is a stored query, re-evaluated every time, so it always reflects the current tables. A *materialized* view is a snapshot, and is stale by exactly as much as its refresh policy allows.

## One-liner

> "Every" has no keyword in SQL, so it is written as "there is none that isn't" — and that double negation is why the division query has two nested `NOT EXISTS`.

## Problems

**P1 (🟢)** Using `book(isbn, title, pub_id, year, price)` with B1 (RVN, 2019, 14), B2 (RVN, 2021, 22), B3 (HOL, 2019, 18), B4 (HOL, 2023, 31), B5 (RVN, 2023, NULL), give the exact output of each query.

(a) `SELECT title FROM book WHERE year = (SELECT MIN(year) FROM book);`
(b) `SELECT title FROM book b WHERE year = (SELECT MIN(b2.year) FROM book b2 WHERE b2.pub_id = b.pub_id);`
(c) `SELECT title FROM book b WHERE EXISTS (SELECT 1 FROM book b2 WHERE b2.pub_id = b.pub_id AND b2.price > b.price);`
(d) State which of (a) to (c) are correlated.

**P2 (🟡)** A `staff(sid, name, manager_sid)` table has four rows: Rao (1, manager NULL), Silva (2, manager 1), Tan (3, manager 1), Umar (4, manager 2). The task is to list everyone who manages nobody.

```sql
-- attempt A
SELECT name FROM staff WHERE sid NOT IN (SELECT manager_sid FROM staff);

-- attempt B
SELECT name FROM staff s
WHERE  NOT EXISTS (SELECT 1 FROM staff e WHERE e.manager_sid = s.sid);
```

(a) Give the exact row count and output of attempt A.
(b) Give the exact row count and output of attempt B.
(c) Explain the difference by unfolding attempt A's predicate for Tan.
(d) Give a one-clause repair to attempt A, and state which of the two you would ship and why.

**P3 (🔴, optional)** A `qualification(staff_id, skill)` table records which skills each staff member holds, and `required(skill)` lists the skills a job needs. `required` holds three skills: welding, rigging, inspection.

| staff_id | skill |
|---|---|
| 1 | welding |
| 1 | rigging |
| 1 | inspection |
| 1 | driving |
| 2 | welding |
| 2 | rigging |
| 3 | inspection |

(a) Write the division query returning the staff who hold every required skill, and give its output.
(b) Give the set of "missing pairs" the algebra formulation subtracts, and confirm it predicts your answer.
(c) Staff member 4 exists in a `staff` table but has no row in `qualification`. State whether she appears in your answer, and whether that is correct.
(d) The job is re-scoped so that `required` becomes empty. Give the output of your query from (a), give what the algebra's $r \div s$ would return, and say which behaviour you would want in a hiring tool.

<details>
<summary>Solutions</summary>

**P1**

(a) **Tidewater, Saltmarsh.** The subquery is uncorrelated and evaluates once to 2019. Both 2019 books qualify.

(b) **Tidewater, Saltmarsh.** Now correlated: for Ravenwood books the subquery gives 2019, for Holloway books 2019. Both publishers happen to have their earliest book in 2019, so the answer coincides with (a). Worth noticing that *coincidence of output does not mean coincidence of meaning* — change Holloway's earliest year to 2020 and (a) returns one row while (b) still returns two.

(c) **Tidewater, Saltmarsh.** Read it as "books that are not the most expensive of their publisher." For B1 (14, RVN), B2 at 22 is dearer, so `EXISTS` is true. For B3 (18, HOL), B4 at 31 is dearer, true. For B2 (22, RVN), the only dearer candidate would have to be a Ravenwood book above 22; B5's price is NULL so `NULL > 22` is unknown and it does not count as a match, giving false. For B4 (31, HOL), nothing is dearer, false. For B5 (NULL, RVN), every comparison `b2.price > NULL` is unknown, so `EXISTS` is false.

Note B5's exclusion is the NULL rule, not a statement about *Ember* being expensive — a reminder that `EXISTS` is immune to NULL only in the sense that it returns true or false; the predicates *inside* it still use three-valued logic.

(d) **(b) and (c) are correlated** — each references the outer alias `b`. (a) is uncorrelated and could be evaluated before the main query begins.

**P2**

(a) **0 rows.** The subquery `SELECT manager_sid FROM staff` returns `{NULL, 1, 1, 2}`. One NULL in a `NOT IN` list makes the predicate unknown for every row, so nothing is returned.

(b) **2 rows: Tan and Umar.** Neither appears as anyone's `manager_sid`.

(c) Unfolding attempt A for Tan, whose `sid` is 3:

$$\text{NOT}\bigl(3 = \text{NULL} \;\text{OR}\; 3 = 1 \;\text{OR}\; 3 = 1 \;\text{OR}\; 3 = 2\bigr) = \text{NOT}(\text{unknown OR false OR false OR false}) = \text{NOT}(\text{unknown}) = \text{unknown}$$

`WHERE` requires true, so Tan is dropped. The same computation drops every row, since the NULL disjunct is present regardless of which row is being tested. Attempt B has no such problem: its inner query asks whether any row has `e.manager_sid = 3`, and Rao's NULL simply fails that comparison rather than contaminating it.

(d) The repair is to exclude NULLs from the subquery:

```sql
SELECT name FROM staff
WHERE  sid NOT IN (SELECT manager_sid FROM staff
                   WHERE  manager_sid IS NOT NULL);
```

which returns Tan and Umar.

**Ship attempt B.** The repair works, but it is a guard that has to be remembered every time and that becomes necessary the day a column *becomes* nullable — a schema change three tables away can silently empty a `NOT IN` that has been correct for years. `NOT EXISTS` needs no guard, expresses the intent directly, and optimizes to the same anti-join plan.

**P3**

(a)

```sql
SELECT s.staff_id
FROM   (SELECT DISTINCT staff_id FROM qualification) s
WHERE  NOT EXISTS (
         SELECT 1 FROM required r
         WHERE  NOT EXISTS (
                  SELECT 1 FROM qualification q
                  WHERE  q.staff_id = s.staff_id AND q.skill = r.skill
                )
       );
```

**Output: staff_id 1.** Staff 1 holds all three required skills, plus driving, which is irrelevant. Staff 2 lacks inspection; staff 3 lacks welding and rigging.

(b) The candidate set is $\{1, 2, 3\}$ and the required set is $\{$welding, rigging, inspection$\}$, so all pairings number $3 \times 3 = 9$. Subtracting the rows actually present in `qualification` (restricted to required skills) leaves the **missing pairs**:

$$\{(2, \text{inspection}),\; (3, \text{welding}),\; (3, \text{rigging})\}$$

Projecting onto `staff_id` gives the disqualified set $\{2, 3\}$; removing it from $\{1,2,3\}$ leaves $\{1\}$, matching (a).

(c) **She does not appear**, because the candidate set is drawn from `qualification`, where she has no row. That is correct for this query as written, and it is the same limitation noted in [1.2](01-02-relational-algebra.md): someone with no rows in the relation being divided is invisible to the operator.

Whether it is correct *for the task* is a modelling question. If the tool is meant to report on every employee, the candidates must come from `staff`, not from `qualification`:

```sql
FROM staff s
```

in place of the derived table. She would then be evaluated and correctly excluded, because she is missing all three skills — the same verdict by a sounder route.

(d) With `required` empty, the middle query returns no rows for anybody, so the outer `NOT EXISTS` is true for every candidate.

- **The SQL query returns all candidates** — staff 1, 2 and 3 as written, or all four including her if the candidates come from `staff`.
- **The algebra's $r \div s$ also returns every candidate present in $r$**, namely $\{1,2,3\}$, since the universal condition is vacuously satisfied. The two agree on the qualifying rule and differ only on who is offered as a candidate.

**For a hiring tool, "everyone qualifies" is the right answer**, and it is what both formulations give. A job with no required skills genuinely excludes nobody. The behaviour to guard against is not the vacuous truth but the silent candidate set: a tool that reports three qualified people when the company employs four has answered a different question than the one asked, and it will do so with no NULL, no error and no empty result to warn anyone.

</details>

## Flashback

**From Lesson 1.4 (SQL II — joins & set operations):** A `course` table has 20 rows and an `enrollment(student_id, course_id)` table has 300 rows covering 17 distinct courses. Every `enrollment.course_id` is a valid course.

(a) Give the exact row count of `SELECT * FROM course c JOIN enrollment e ON c.course_id = e.course_id;`
(b) Give the exact row count of `SELECT * FROM course c LEFT JOIN enrollment e ON c.course_id = e.course_id;`
(c) Give the exact row count of `SELECT c.course_id FROM course c LEFT JOIN enrollment e ON c.course_id = e.course_id WHERE e.student_id IS NULL;`
(d) A colleague writes the query in (c) but tests `WHERE e.course_id IS NULL` instead. Give its row count and say whether it is equally valid.

<details>
<summary>Solution</summary>

(a) **300.** Every enrollment matches exactly one course, so the inner join emits one row per enrollment. The 20 courses do not multiply anything — the relationship is many-to-one from `enrollment` to `course`.

(b) **303.** All 300 matched rows, plus one NULL-padded row for each of the $20 - 17 = 3$ courses that no enrollment references.

(c) **3.** The padded rows are exactly the unmatched courses, and `e.student_id` is NULL only in those. This is the anti-join, and 3 is the number of courses with no enrollments.

(d) **3, and it is equally valid here.** Both `student_id` and `course_id` are part of `enrollment`'s key — a row cannot exist with either missing — so a NULL in either column can only have come from the join's padding.

The general rule is unchanged and worth restating precisely: the tested column must be non-nullable *in the source table*. Which table it belongs to is irrelevant; what matters is that no stored row can carry a NULL there. Testing a nullable column such as a `grade` would report every unenrolled course *and* every course whose only enrollments are ungraded.

</details>

## Connections

- **Backward:** the double `NOT EXISTS` is the algebra's division from [1.2](01-02-relational-algebra.md), and its two nestings are that lesson's two subtractions. `NOT EXISTS` is the anti-join of [1.4](01-04-sql-joins-and-set-operations.md) written without the NULL hazard, and the correlated subquery in Example 1 does what the self-join did, with the aggregate of [1.5](01-05-sql-aggregation-and-grouping.md) inside.
- **Forward:** Module 1 ends here, and Module 2 turns from querying a schema to designing one — [2.1](02-01-entity-relationship-modeling.md) starts from a plain-English domain. Optimizers rewrite correlated subqueries into semi-joins and anti-joins, which is [3.7](03-07-query-optimization-and-join-ordering.md); the choice between a view and a materialized view is the same precompute-versus-derive trade as an index in [3.3](03-03-hashing-and-choosing-an-access-path.md).
- **Sideways:** $\forall x\, P(x) \equiv \neg \exists x\, \neg P(x)$ is quantifier negation from [`discrete-mathematics` 1.2](../../discrete-mathematics/lessons/01-02-predicate-logic-quantifiers-negation.md), applied to get a universal quantifier out of a language that only has an existential one. SQL's `EXISTS` is $\exists$; there is no `FORALL`, and the identity is the whole workaround.
