# Database Systems · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

This course is about describing data declaratively and letting a machine decide how to fetch it. The card holds what you would otherwise hunt for mid-problem: the SQL semantics that trip people up, the closure and normal-form tests, every I/O cost formula in Module 3, the selectivity rules, and the concurrency and recovery procedures — plus the crossover numbers that make a design decision one line of arithmetic instead of an argument.

## Scope and ownership

| Topic | Owned by | Note |
|---|---|---|
| Why disk-resident trees have large fan-out; height math; leaves-only storage | [`programming-foundations` 3.2](../programming-foundations/lessons/03-02-balanced-trees-the-idea.md) | assumed here; [3.2](lessons/03-02-b-plus-tree-indexes.md) owns the B⁺-tree **as an index** — split traces, clustered vs unclustered, I/O counts |
| Hash tables: chaining, open addressing, load factor | [`programming-foundations` 2.5](../programming-foundations/lessons/02-05-hash-tables.md) | [3.3](lessons/03-03-hashing-and-choosing-an-access-path.md) owns the **disk** version: static hashing with overflow, extendible hashing |
| Page replacement: LRU, Clock, OPT, Belady's anomaly | [`operating-systems` 3.4](../operating-systems/lessons/03-04-page-replacement-and-thrashing.md) | [3.1](lessons/03-01-storage-pages-and-the-buffer-manager.md) owns sequential flooding, pinning and the steal/force matrix |
| File-system journaling; commit records; idempotent replay | [`operating-systems` 4.3](../operating-systems/lessons/04-03-crash-consistency-and-journaling.md) | [4.5](lessons/04-05-recovery-write-ahead-logging-and-aries.md) owns LSNs, before/after images, fuzzy checkpoints, the ARIES passes and CLRs |
| Coffman conditions, wait-for graphs, Banker's algorithm | [`operating-systems` 2.5](../operating-systems/lessons/02-05-deadlock.md) | [4.3](lessons/04-03-two-phase-locking-deadlock-and-granularity.md) owns why 2PL **creates** deadlock, victim abort, wait-die and wound-wait |
| Seek time, rotational latency, SSD internals | [`computer-architecture` 4.4](../computer-architecture/lessons/04-04-storage-and-io.md), [`operating-systems` 4.4](../operating-systems/lessons/04-04-io-and-disk-scheduling.md) | this course counts **pages** and abstracts the device away |
| In-memory sorting; the comparison lower bound | [`algorithms` 1.4](../algorithms/lessons/01-04-sorting-and-the-comparison-lower-bound.md) | [3.4](lessons/03-04-external-sorting.md) owns **external** merge sort and the pass-count formula |
| Dynamic programming over subsets | [`algorithms` 2.5](../algorithms/lessons/02-05-dynamic-programming-and-knapsack.md) | [3.7](lessons/03-07-query-optimization-and-join-ordering.md) owns the Selinger formulation and interesting orders |
| Set operations, relations, closure of a relation | [`discrete-mathematics` 2.1](../discrete-mathematics/lessons/02-01-sets-and-set-operations.md), [2.2](../discrete-mathematics/lessons/02-02-relations-equivalence-and-order.md) | [2.3](lessons/02-03-functional-dependencies-closure-and-keys.md) owns FD closure and Armstrong's axioms |
| Consensus (Paxos, Raft), the CAP proof, FLP, distributed commit | `distributed-systems` (unbuilt) | [4.6](lessons/04-06-nosql-and-distributed-data.md) owns the practitioner's CAP, quorum arithmetic, sharding and replication trade-offs |
| The relational model, SQL, ER modeling, normalization, indexing, query processing, transactions | **this course** | |

**Convention warnings.** Two conflicts are worth flagging because you may have both cards open.

- **Page and buffer sizes are per-problem, not global.** Module 3's running figures are a 4096-byte page, `booking` at 50,000 pages and `passenger` at 2,500. Any problem may restate them, and the formulas never assume a particular size.
- **"Height" of a B⁺-tree here counts every level including the leaves**, so a point query costs $h + 1$ page reads — $h$ to reach the leaf and one to fetch the row. Some texts count only the internal levels.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $R(A_1, \ldots, A_n)$ | a relation schema: names and domains, not rows | [1.1](lessons/01-01-the-relational-model.md) |
| $r$, $\lvert r \rvert$ | a relation instance and its cardinality (row count) | [1.1](lessons/01-01-the-relational-model.md) |
| $\sigma_\theta$, $\pi_A$, $\rho$ | selection, projection, rename | [1.2](lessons/01-02-relational-algebra.md) |
| $\bowtie$, $\bowtie_\theta$, $\div$ | natural join, theta join, division | [1.2](lessons/01-02-relational-algebra.md) |
| $X \to Y$ | functional dependency: $X$ determines $Y$ | [2.3](lessons/02-03-functional-dependencies-closure-and-keys.md) |
| $X^+$ | attribute closure of $X$ under a dependency set | [2.3](lessons/02-03-functional-dependencies-closure-and-keys.md) |
| $F$, $F_c$, $F^+$ | a dependency set, its minimal cover, its closure | [2.6](lessons/02-06-minimal-cover-and-3nf-synthesis.md) |
| $P$, $r$ (Module 3) | page size in bytes; row size in bytes | [3.1](lessons/03-01-storage-pages-and-the-buffer-manager.md) |
| $N$ (Module 3) | number of pages in a file | [3.1](lessons/03-01-storage-pages-and-the-buffer-manager.md) |
| $B$ | number of buffer frames available to an operator | [3.1](lessons/03-01-storage-pages-and-the-buffer-manager.md) |
| $p$ | rows per data page | [3.2](lessons/03-02-b-plus-tree-indexes.md) |
| $E$ | entries per index page | [3.2](lessons/03-02-b-plus-tree-indexes.md) |
| $h$ | B⁺-tree height, counting root and leaf levels | [3.2](lessons/03-02-b-plus-tree-indexes.md) |
| $m$ | number of rows a query matches | [3.2](lessons/03-02-b-plus-tree-indexes.md) |
| $d$, $d_b$ | extendible hashing: global depth, a bucket's local depth | [3.3](lessons/03-03-hashing-and-choosing-an-access-path.md) |
| $M$, $N$ (joins) | page counts of the outer and inner join inputs | [3.5](lessons/03-05-query-operators-and-join-algorithms.md) |
| $s$ | selectivity: the fraction of rows a predicate keeps | [3.6](lessons/03-06-selectivity-statistics-and-cost-estimation.md) |
| $V(A, R)$ | number of distinct values of attribute $A$ in $R$ | [3.6](lessons/03-06-selectivity-statistics-and-cost-estimation.md) |
| $n_R$ | number of rows in $R$ | [3.6](lessons/03-06-selectivity-statistics-and-cost-estimation.md) |
| $T_i$, $r_i(X)$, $w_i(X)$ | transaction $i$; its read and write of item $X$ | [4.2](lessons/04-02-serializability-and-precedence-graphs.md) |
| $c_i$, $a_i$ | commit and abort of $T_i$ | [4.2](lessons/04-02-serializability-and-precedence-graphs.md) |
| $\mathrm{lp}(T)$ | a transaction's lock point under 2PL | [4.3](lessons/04-03-two-phase-locking-deadlock-and-granularity.md) |
| S, X, IS, IX | shared, exclusive, intention-shared, intention-exclusive locks | [4.3](lessons/04-03-two-phase-locking-deadlock-and-granularity.md) |
| LSN, pageLSN, recLSN | log sequence number; a page's last-change LSN; the LSN that first dirtied a page | [4.5](lessons/04-05-recovery-write-ahead-logging-and-aries.md) |
| $N$, $W$, $R$ (Module 4) | replica count; write quorum; read quorum | [4.6](lessons/04-06-nosql-and-distributed-data.md) |

$N$ is overloaded: a file's page count in Module 3, an inner join input's page count in [3.5](lessons/03-05-query-operators-and-join-algorithms.md), and the replica count in [4.6](lessons/04-06-nosql-and-distributed-data.md). $R$ likewise names a relation throughout and a read quorum in [4.6](lessons/04-06-nosql-and-distributed-data.md). Context separates them.

## Definitions

### Relation

A table, and a table is a set of tuples — so no order and no duplicates.

The **schema** is the shape (attribute names, domains, constraints) and changes rarely; the **instance** is today's rows and changes constantly. Almost every design question is about the schema and almost every performance question about the instance.

*Introduced:* [1.1](lessons/01-01-the-relational-model.md)

### Superkey

A set of attributes $K$ such that no legal instance holds two distinct tuples agreeing on all of $K$.

A claim about *every instance that will ever exist*, not an observation about today's rows. An instance can **refute** a key claim (two rows agreeing on $K$) and can never establish one.

*Introduced:* [1.1](lessons/01-01-the-relational-model.md)

### Candidate key

A superkey with no proper subset that is also a superkey.

To show minimality, exhibit for each attribute a pair of rows that would collide without it. A relation may have several candidate keys; four on five attributes is not unusual.

*Introduced:* [1.1](lessons/01-01-the-relational-model.md)

### Prime attribute

An attribute belonging to *some* candidate key. Not "in the primary key."

Every normal-form test above 1NF uses this word, so finding all candidate keys is a prerequisite to classifying a relation.

*Introduced:* [2.4](lessons/02-04-anomalies-and-the-normal-forms.md)

### Foreign key

A set of attributes in $R$ whose every non-null value appears as a primary-key value in $S$. The guarantee is **referential integrity**.

NULL is exempt, so a nullable foreign key permits a row that references nothing. A foreign key is also information the optimizer uses — it makes the join-cardinality estimate exact.

*Introduced:* [1.1](lessons/01-01-the-relational-model.md)

### Three-valued logic

Comparisons return true, false or **unknown**; any comparison with NULL yields unknown, including `NULL = NULL`.

`WHERE` keeps a row only when the predicate is **true**, so unknown behaves like false at the filter — but `NOT unknown` is unknown, so a filter and its negation do not partition a table.

*Introduced:* [1.3](lessons/01-03-sql-select-from-where.md)

### Anti-join

The rows of $r$ with no partner in $s$: a left outer join filtered on a NULL in a **non-nullable** column of $s$, or equivalently a `NOT EXISTS`.

Testing a nullable column conflates "no matching row" with "matching row, no value." Test the referenced table's primary key.

*Introduced:* [1.4](lessons/01-04-sql-joins-and-set-operations.md)

### Division

The values in $r$ paired with **every** value in $s$. The only algebra operator with a universal quantifier in it.

In SQL it is written as a double negation, because there is no `FORALL`: "there is no required value that this candidate lacks."

*Introduced:* [1.2](lessons/01-02-relational-algebra.md), SQL form in [1.6](lessons/01-06-subqueries-exists-and-views.md)

### Correlated subquery

A subquery referencing a column of the outer query, so conceptually re-evaluated per outer row.

Read it as a loop. Optimizers usually rewrite it into a join or semi-join, so the loop is semantics rather than execution.

*Introduced:* [1.6](lessons/01-06-subqueries-exists-and-views.md)

### Weak entity set

An entity set with no key of its own, identified by an **owner** plus a **discriminator** that need only be unique among siblings.

The composite key is the symptom; borrowed identity is the definition. Deleting the owner must cascade, since an orphan's key is meaningless.

*Introduced:* [2.1](lessons/02-01-entity-relationship-modeling.md)

### Cardinality and participation

**Cardinality** (1:1, 1:N, M:N) bounds how many from above; **participation** (total or partial) bounds from below.

They translate into different things: cardinality decides where the foreign key goes, participation decides whether it may be NULL.

*Introduced:* [2.1](lessons/02-01-entity-relationship-modeling.md), applied in [2.2](lessons/02-02-from-er-to-relational-schema.md)

### Functional dependency

$X \to Y$ holds if any two rows agreeing on $X$ agree on $Y$. Trivial when $Y \subseteq X$.

An assertion about the domain, not a fact read off an instance — the same asymmetry as a key.

*Introduced:* [2.3](lessons/02-03-functional-dependencies-closure-and-keys.md)

### Attribute closure

$X^+$ is everything $X$ determines: start with $X$, repeatedly add the right side of any dependency whose left side is already inside, stop when nothing grows.

The single highest-leverage procedure in Module 2. It answers "is this a key," "does this dependency follow," "is this in BCNF," and "is this decomposition lossless."

*Introduced:* [2.3](lessons/02-03-functional-dependencies-closure-and-keys.md)

### Partial dependency

A non-prime attribute determined by a *proper subset* of a candidate key. What 2NF forbids.

Vacuous when every candidate key is a single attribute, which is why 2NF is usually skipped.

*Introduced:* [2.4](lessons/02-04-anomalies-and-the-normal-forms.md)

### Transitive dependency

A chain key $\to$ middle $\to$ rest, where the middle is not a superkey and the rest is not prime. What 3NF forbids.

Splits cleanly at the middle, which is why transitive dependencies almost always decompose without losing anything.

*Introduced:* [2.4](lessons/02-04-anomalies-and-the-normal-forms.md)

### Lossless-join decomposition

Splitting $R$ into $R_1$ and $R_2$ such that $\pi_{R_1}(r) \bowtie \pi_{R_2}(r) = r$ for every legal instance.

A lossy decomposition does not lose rows — it **gains** them. The join produces spurious tuples that look exactly like data, with no error and no gap.

*Introduced:* [2.5](lessons/02-05-decomposition-lossless-join-and-dependency-preservation.md)

### Dependency preservation

Every asserted dependency can still be checked on a single table.

A lost dependency does not become false; it becomes **unenforceable**, so violations enter silently. Checking one across tables requires a join, and no ordinary constraint spans tables.

*Introduced:* [2.5](lessons/02-05-decomposition-lossless-join-and-dependency-preservation.md)

### Minimal cover

An equivalent dependency set with single-attribute right sides, no extraneous left-side attributes, and no droppable dependency.

**Not unique**, and different minimal covers of one set can have different sizes. Equivalence, not size, is the correctness test.

*Introduced:* [2.6](lessons/02-06-minimal-cover-and-3nf-synthesis.md)

### Buffer pool

An array of $B$ memory frames holding copies of pages. Every read and write goes through it.

Each frame carries a **pin count** — nonzero forbids eviction — and a **dirty bit** — set means eviction requires a write first.

*Introduced:* [3.1](lessons/03-01-storage-pages-and-the-buffer-manager.md)

### Steal and force

**Steal:** may a dirty page of an *uncommitted* transaction be evicted? **Force:** must every modified page be written at commit?

Steal makes undo necessary; no-force makes redo necessary. Real systems choose steal and no-force and pay for both.

*Introduced:* [3.1](lessons/03-01-storage-pages-and-the-buffer-manager.md), discharged in [4.5](lessons/04-05-recovery-write-ahead-logging-and-aries.md)

### Clustered index

An index whose key order matches the table's physical row order. A table has at most one.

Changes point-query cost by zero and range-query cost by a factor of $p$, the rows per page. The single most consequential indexing decision in a schema.

*Introduced:* [3.2](lessons/03-02-b-plus-tree-indexes.md)

### Covering index

An index containing every column a query mentions, so the query is answered from the index alone with no row fetches.

A property of the **pair** — this index, that query — so adding one column to a `SELECT` list can silently remove the benefit.

*Introduced:* [3.3](lessons/03-03-hashing-and-choosing-an-access-path.md)

### Extendible hashing

A directory of $2^d$ pointers in front of the buckets. A full bucket splits alone if its local depth is below $d$; otherwise the directory doubles first.

Lookup stays **2 page reads** however large the file grows, which static hashing cannot maintain.

*Introduced:* [3.3](lessons/03-03-hashing-and-choosing-an-access-path.md)

### Run

A sorted stretch of pages produced by one pass of external sorting. Pass 0 makes $\lceil N/B \rceil$ runs of $B$ pages each.

*Introduced:* [3.4](lessons/03-04-external-sorting.md)

### Iterator model

Every operator implements open, next and close, and a plan is a tree of them pulling rows on demand.

**Pipelined** operators emit their first row early; **blocking** ones (sort, hash build) must consume everything first, which is where a plan materializes and where its memory peaks.

*Introduced:* [3.5](lessons/03-05-query-operators-and-join-algorithms.md)

### Selectivity

The fraction of rows a predicate keeps. Estimated under **uniformity** (values spread evenly, each equally common) and **independence** (predicates on different columns multiply).

Both assumptions are usually false. Where they fail they fail by an order of magnitude, and that is where bad plans come from.

*Introduced:* [3.6](lessons/03-06-selectivity-statistics-and-cost-estimation.md)

### Equi-depth histogram

Buckets holding equal row counts, with boundaries placed wherever that requires.

Exact where the data is dense and poor in the sparse tail its widest bucket must swallow. Equi-width is the reverse; neither dominates, and equi-depth is the better default because queries follow the data.

*Introduced:* [3.6](lessons/03-06-selectivity-statistics-and-cost-estimation.md)

### Interesting order

An output order some later operator could use — a join key still to be joined on, an `ORDER BY`, a `GROUP BY`.

The reason the optimizer's table is keyed by (subset, order) rather than subset alone: a dearer subplan that arrives sorted can give the cheaper total.

*Introduced:* [3.5](lessons/03-05-query-operators-and-join-algorithms.md), used in [3.7](lessons/03-07-query-optimization-and-join-ordering.md)

### Left-deep plan

A join tree in which every join's right input is a base table.

Most optimizers search only these: an index nested loop is available at every step, and only one intermediate is ever materialized. It can miss the optimum, as a bushy plan sometimes wins.

*Introduced:* [3.7](lessons/03-07-query-optimization-and-join-ordering.md)

### Transaction

A group of operations executed as an indivisible unit: it commits and all its effects are permanent, or it aborts and none of them happened.

*Introduced:* [4.1](lessons/04-01-transactions-and-the-acid-properties.md)

### Conflict

Two operations on the same item, from different transactions, at least one a write. Three kinds: write-read, read-write, write-write.

Two reads never conflict, which is why concurrent reading is free and why shared locks are shareable.

*Introduced:* [4.2](lessons/04-02-serializability-and-precedence-graphs.md)

### Precedence graph

One node per transaction; an edge $T_i \to T_j$ whenever an operation of $T_i$ conflicts with a *later* operation of $T_j$.

The schedule is conflict-serializable exactly when this graph is acyclic, and every topological order is an equivalent serial order.

*Introduced:* [4.2](lessons/04-02-serializability-and-precedence-graphs.md)

### Recoverable and cascadeless

**Recoverable:** a transaction commits only after every transaction it read from has committed. **Cascadeless:** a transaction reads only committed values.

Cascadeless implies recoverable. Both are about *aborts*, and conflict serializability guarantees neither.

*Introduced:* [4.2](lessons/04-02-serializability-and-precedence-graphs.md)

### Two-phase locking

Acquire all locks before releasing any, giving a growing phase, a **lock point**, and a shrinking phase.

Ordering transactions by lock point is a serial order consistent with every precedence edge, which is why the protocol cannot produce a cycle.

*Introduced:* [4.3](lessons/04-03-two-phase-locking-deadlock-and-granularity.md)

### Strict two-phase locking

2PL plus: hold every exclusive lock until commit or abort.

Delivers serializability, recoverability and cascadelessness together, because no other transaction can see an uncommitted write at all.

*Introduced:* [4.3](lessons/04-03-two-phase-locking-deadlock-and-granularity.md)

### Lock upgrade

Converting a held shared lock to exclusive. Succeeds only if no other transaction holds a shared lock on the item.

The most common deadlock in production, because read-then-write on one row is the most natural thing an application does. Fixed by `SELECT ... FOR UPDATE`.

*Introduced:* [4.3](lessons/04-03-two-phase-locking-deadlock-and-granularity.md)

### Phantom

The same *query* returns a different set of rows on re-execution, because a matching row was inserted or deleted.

Locking rows you read cannot help — the offending row did not exist to be locked. Preventing it needs predicate or next-key locking, at Serializable.

*Introduced:* [4.4](lessons/04-04-isolation-levels-and-mvcc.md)

### Snapshot isolation

Each transaction reads the state as of its start; on commit it aborts if a concurrent transaction committed a write to a row it also wrote (**first-committer-wins**).

Prevents all three classical anomalies and is **not serializable** — it permits write skew.

*Introduced:* [4.4](lessons/04-04-isolation-levels-and-mvcc.md)

### Write skew

Two transactions read an overlapping set, each writes a **disjoint subset**, both commit, and an invariant over the read set is broken.

No write-write conflict exists, so first-committer-wins finds nothing. The shape to recognize: read many, check an invariant, write some.

*Introduced:* [4.4](lessons/04-04-isolation-levels-and-mvcc.md)

### Write-ahead logging

The log record describing a change must reach durable storage **before** the changed data page does; and all of a transaction's log records must be durable before its commit returns.

The first rule makes every stolen page undoable; the second makes every commit redoable.

*Introduced:* [4.5](lessons/04-05-recovery-write-ahead-logging-and-aries.md)

### Fuzzy checkpoint

A record naming the dirty page table and the transaction table, flushing no pages and stopping no transactions.

Costs microseconds, and its only job is to bound where the analysis pass starts.

*Introduced:* [4.5](lessons/04-05-recovery-write-ahead-logging-and-aries.md)

### Compensation log record

A record describing an undo, carrying an `undoNext` pointer to the next record still needing undo.

Makes undo idempotent: recovery that crashes mid-undo restarts, reads the CLRs, and follows `undoNext` past the work already done. **A CLR is never undone.**

*Introduced:* [4.5](lessons/04-05-recovery-write-ahead-logging-and-aries.md)

### Sharding

Splitting rows across machines by a shard key. An equality predicate on that key touches one shard; anything else touches all of them.

*Introduced:* [4.6](lessons/04-06-nosql-and-distributed-data.md)

### Quorum

A write is acknowledged by $W$ of $N$ replicas, a read consults $R$. Reads see the last acknowledged write exactly when $R + W > N$.

Consistency is a dial set per operation, not a property of the store.

*Introduced:* [4.6](lessons/04-06-nosql-and-distributed-data.md)

## Formulas and rules

### SQL clause evaluation order

$$\texttt{FROM} \to \texttt{WHERE} \to \texttt{GROUP BY} \to \texttt{HAVING} \to \texttt{SELECT} \to \texttt{ORDER BY}$$

`WHERE` runs before grouping, so it cannot mention an aggregate. `HAVING` runs after, so it is the only place an aggregate may appear in a condition. `SELECT` is second to last, so its aliases are generally unavailable earlier.

*From* [1.5](lessons/01-05-sql-aggregation-and-grouping.md)

### Three-valued connectives

| $p$ AND $q$ | T | F | U | | $p$ OR $q$ | T | F | U | | NOT $p$ |
|---|---|---|---|---|---|---|---|---|---|---|
| **T** | T | F | U | | **T** | T | T | T | | T $\to$ F |
| **F** | F | F | F | | **F** | T | F | U | | F $\to$ T |
| **U** | U | F | U | | **U** | T | U | U | | **U $\to$ U** |

*From* [1.3](lessons/01-03-sql-select-from-where.md)

### Aggregate NULL handling

| function | over | empty input |
|---|---|---|
| `COUNT(*)` | all rows, padding included | 0 |
| `COUNT(A)`, `SUM`, `AVG`, `MIN`, `MAX` | non-null values only | 0 for `COUNT`, **NULL** for the rest |

$$\mathrm{AVG}(A) = \frac{\mathrm{SUM}(A)}{\mathrm{COUNT}(A)} \neq \frac{\mathrm{SUM}(A)}{\mathrm{COUNT}(*)}$$

**With an outer join, never `COUNT(*)`** — count a non-nullable column of the preserved-against side, or an empty group reports 1.

*From* [1.5](lessons/01-05-sql-aggregation-and-grouping.md)

### Algebra rewrite laws

| law | statement | condition |
|---|---|---|
| selection split | $\sigma_{\theta_1 \wedge \theta_2}(r) = \sigma_{\theta_1}(\sigma_{\theta_2}(r))$ | always |
| selection pushdown | $\sigma_\theta(r \bowtie s) = \sigma_\theta(r) \bowtie s$ | $\theta$ mentions only $r$'s attributes |
| projection below selection | $\sigma_\theta(\pi_A(r))$ is well-formed | only if $A$ retains every attribute in $\theta$ |
| division from primitives | $r \div s = \pi_Q(r) - \pi_Q\bigl((\pi_Q(r) \times s) - r\bigr)$ | $Q = R - S$ |

*From* [1.2](lessons/01-02-relational-algebra.md)

### ER-to-relational translation

| construct | becomes |
|---|---|
| entity set | a table, key = the entity's key |
| weak entity, owner $O$ | a table, key = key($O$) + discriminator, cascade on delete |
| M:N relationship | its own table, key = both entity keys |
| N:1 relationship | a foreign-key column on the N side |
| 1:1 relationship | a foreign key on either side; prefer the total one |
| total participation | that foreign key becomes `NOT NULL` |
| multivalued attribute | its own table, key = owner key + value |
| composite attribute | flattened into component columns |

The last two are why a faithful translation is automatically in 1NF.

*From* [2.2](lessons/02-02-from-er-to-relational-schema.md)

### Armstrong's axioms and their consequences

| rule | statement |
|---|---|
| reflexivity | $Y \subseteq X \implies X \to Y$ |
| augmentation | $X \to Y \implies XZ \to YZ$ |
| transitivity | $X \to Y,\ Y \to Z \implies X \to Z$ |
| union | $X \to Y,\ X \to Z \implies X \to YZ$ |
| decomposition | $X \to YZ \implies X \to Y$ |
| pseudotransitivity | $X \to Y,\ WY \to Z \implies WX \to Z$ |

Sound and complete, which is why closure is trustworthy: a dependency absent from $X^+$ genuinely does not follow.

*From* [2.3](lessons/02-03-functional-dependencies-closure-and-keys.md)

### Closure tests

$$X \to Y \text{ follows} \iff Y \subseteq X^+ \qquad X \text{ is a superkey} \iff X^+ = R$$

**Candidate-key shortcut.** An attribute appearing only on left sides (or in no dependency) is in **every** candidate key; one appearing only on right sides is in **none**. Compute the closure of the forced set first — if it is already $R$, that set is the unique candidate key and no search is needed.

**Counterexample recipe.** To witness that $X \to Y$ does *not* follow, build two rows agreeing on exactly $X^+$ and differing everywhere else.

*From* [2.3](lessons/02-03-functional-dependencies-closure-and-keys.md)

### The normal-form tests

| form | condition |
|---|---|
| 1NF | every value atomic |
| 2NF | no non-prime attribute depends on a *proper subset* of a candidate key |
| 3NF | for every non-trivial $X \to A$: $X$ is a superkey **or** $A$ is prime |
| BCNF | for every non-trivial $X \to Y$: $X$ is a superkey |

$\text{BCNF} \subset \text{3NF} \subset \text{2NF} \subset \text{1NF}$, each inclusion strict. Test downward until one passes.

**When testing a decomposed piece, use every dependency that holds on it, including derived ones** — a piece can carry a transitively derived dependency that is written nowhere in $F$.

*From* [2.4](lessons/02-04-anomalies-and-the-normal-forms.md)

### Decomposition tests and algorithms

**Lossless-join, binary test.** Splitting $R$ into $R_1, R_2$ is lossless iff

$$(R_1 \cap R_2)^+ \supseteq R_1 \quad\text{or}\quad (R_1 \cap R_2)^+ \supseteq R_2$$

The shared columns must key **at least one** piece. Either one suffices.

**BCNF decomposition.** While some $R_i$ has a violating $X \to Y$: replace $R_i$ with $(X \cup Y)$ and $(R_i - (Y - X))$. Every step is lossless by construction. **Termination and BCNF are guaranteed; dependency preservation is not**, and which dependencies survive depends on the arbitrary order violations are picked.

**Minimal cover**, three passes, in this order and each using the set *as updated*:

1. split right sides to single attributes;
2. strip extraneous left-side attributes ($A \in (X - B)^+$ under the current set);
3. drop redundant dependencies ($A \in X^+$ under the set **without** that dependency).

**3NF synthesis.** Compute $F_c$; make one relation per distinct left side, merged; if none contains a candidate key, add one containing a candidate key; delete any relation contained in another.

> **Theorem.** 3NF synthesis is always lossless **and** dependency-preserving. No such guarantee exists for BCNF.

*From* [2.5](lessons/02-05-decomposition-lossless-join-and-dependency-preservation.md), [2.6](lessons/02-06-minimal-cover-and-3nf-synthesis.md)

### Page and file sizing

$$\text{rows per page } p = \left\lfloor \frac{P}{r} \right\rfloor, \qquad N = \left\lceil \frac{\text{rows}}{p} \right\rceil$$

Scan cost is $N$. Row width matters more than it looks: the floor makes page count a step function of row size.

**Latency scale**, for intuition: memory about 100 nanoseconds, SSD about 100 microseconds, disk about 10 milliseconds. If memory took one second, an SSD read would take 17 minutes and a disk read 28 hours.

*From* [3.1](lessons/03-01-storage-pages-and-the-buffer-manager.md)

### B⁺-tree costs

$$\text{leaves} = \left\lceil \frac{n}{E} \right\rceil, \qquad h = 1 + \left\lceil \log_{F} \text{leaves} \right\rceil$$

| operation | clustered | unclustered |
|---|---|---|
| point query | $h + 1$ | $h + 1$ |
| range query, $m$ matches | $h + \left\lceil m/p \right\rceil$ | $h + \left\lceil m/E \right\rceil + m$ |
| index-only (covering) scan | $h + \left\lceil m/E \right\rceil$ | $h + \left\lceil m/E \right\rceil$ |

> **The crossover.** An **unclustered** index stops beating a full scan at roughly
> $$m \approx \frac{N}{1 + 1/E} \approx N \quad\text{rows, that is about } \frac{1}{p} \text{ of the table.}$$
> Rows per page 40 gives about 2.5 percent; 50 gives about 2 percent; 25 gives about 4 percent. **A clustered index wins almost all the way to a full scan.**

**Splits.** A leaf split **copies** its middle key up (the value must stay findable in a leaf); an internal split **moves** it up. Growth is at the root, so all leaves stay at equal depth.

*From* [3.2](lessons/03-02-b-plus-tree-indexes.md)

### Access-path comparison

| | B⁺-tree | hash index |
|---|---|---|
| equality lookup | $h + 1$ | **2** |
| range query | descend once, walk the leaf chain | **no help at all** |
| `ORDER BY` on the key | free | no help |
| prefix match | yes | no |

**Extendible hashing on overflow.** If local depth $<$ global depth: split the bucket alone. If equal: double the directory, then split. Lookup stays 2 reads either way; $2^{d - d_b}$ directory entries point at a bucket of local depth $d_b$.

**The cost of an index** is one update per insert and per change to an indexed column. An index earns its place only when its saving across the whole workload exceeds that.

*From* [3.3](lessons/03-03-hashing-and-choosing-an-access-path.md)

### External sorting

$$\text{passes} = 1 + \left\lceil \log_{B-1} \left\lceil \frac{N}{B} \right\rceil \right\rceil, \qquad \text{cost} = 2N \times \text{passes}$$

Every pass costs $2N$ regardless of how many runs it merges.

> **The two-pass condition.** Two passes suffice exactly when $\lceil N/B \rceil \leq B-1$, that is when $N \lesssim B(B-1) \approx B^2$.

**The cost is a step function of $B$.** One extra frame at a boundary removes a whole pass — for $N = 50{,}000$, going from $B = 224$ to $B = 225$ cuts the cost from 300,000 to 200,000 I/Os, and going from 225 to 5,000 saves nothing.

**Replacement selection** makes runs of about $2B$ pages instead of $B$. It saves a pass only when halving the run count crosses the fan-in boundary.

*From* [3.4](lessons/03-04-external-sorting.md)

### Join costs

| algorithm | cost | requires |
|---|---|---|
| page nested loop | $M + M \cdot N$ | any condition |
| block nested loop | $M + \left\lceil \frac{M}{B-2} \right\rceil N$ | any condition |
| index nested loop | $M + \lvert r \rvert \bigl(h + \text{fetch}\bigr)$ | an index on the inner join column |
| sort-merge | $\mathrm{sort}(M) + \mathrm{sort}(N) + M + N$ | equality or inequality |
| sort-merge, pre-sorted | $M + N$ | both inputs already ordered |
| grace hash | $3(M+N)$ | **equality only**, and $B > \sqrt{\min(M,N)}$ |

The index nested loop's fetch term is $\lceil k/p \rceil$ for a clustered index and $k$ for an unclustered one, with $k$ matches per outer row — and it is multiplied by every outer row, which is why an unclustered inner index can be the *worst* plan available.

**Put the smaller relation on the outside** of a nested loop: the inner is rescanned $\lceil M/(B-2) \rceil$ times. Hash join is symmetric and does not care.

*From* [3.5](lessons/03-05-query-operators-and-join-algorithms.md)

### Selectivity estimation

| predicate | selectivity |
|---|---|
| $A = c$ | $1 / V(A,R)$ |
| $A > c$ | $\bigl(\max(A) - c\bigr) / \bigl(\max(A) - \min(A)\bigr)$ |
| $A$ between $c_1$ and $c_2$ | $(c_2 - c_1) / \bigl(\max(A) - \min(A)\bigr)$ |
| $A$ in a list of $k$ values | $k / V(A,R)$ |
| $P \wedge Q$ | $s(P) \, s(Q)$ |
| $P \vee Q$ | $s(P) + s(Q) - s(P)s(Q)$ |
| $\neg P$ | $1 - s(P)$ |

$$\lvert R \bowtie S \rvert \approx \frac{n_R \cdot n_S}{\max\bigl(V(A,R),\, V(A,S)\bigr)}$$

**Exact when $A$ is a foreign key**: then $V(A,S) = n_S$ and the estimate collapses to $n_R$, because every referencing row matches exactly one referenced row.

**Independence error.** Two perfectly correlated predicates produce an error equal to the full selectivity of the redundant one — a factor of $V$ of that column.

*From* [3.6](lessons/03-06-selectivity-statistics-and-cost-estimation.md)

### Plan space and the optimizer

$$\text{left-deep orders} = n!, \qquad \text{all shapes} = \frac{(2n-2)!}{(n-1)!}, \qquad \text{DP subsets} = 2^n$$

| $n$ | left-deep | all shapes | subsets |
|---|---|---|---|
| 4 | 24 | 120 | 16 |
| 8 | 40,320 | 17,297,280 | 256 |
| 12 | 479,001,600 | 28,158,588,057,600 | 4,096 |

**Selinger DP.** Solve every *connected* subset smallest-first; the best plan for a set is built from the best plans for its subsets, keyed by (subset, interesting order).

**Logical rewrites**, applied before costing: selection pushdown, projection pushdown, **predicate transitivity** (`o.k = r.k` with `o.k = 3` yields `r.k = 3`), subquery flattening.

*From* [3.7](lessons/03-07-query-optimization-and-join-ordering.md)

### ACID and its mechanisms

| letter | promises | delivered by |
|---|---|---|
| Atomicity | all writes or none | **undo**, from the log |
| Consistency | declared constraints hold | constraint checks plus your code |
| Isolation | equivalent to *some* serial order | 2PL or MVCC |
| Durability | a commit survives a crash | **redo**, from the log |

Only C is not the system's job alone: it enforces what you declared and nothing you did not.

*From* [4.1](lessons/04-01-transactions-and-the-acid-properties.md)

### Lock compatibility and deadlock schemes

| | held S | held X |
|---|---|---|
| **want S** | granted | wait |
| **want X** | wait | wait |

**Wait-die:** older requester waits, younger requester dies. **Wound-wait:** older requester wounds the younger holder, younger requester waits. Both restart with the **original** timestamp, which is what prevents starvation.

Wound-wait tends to abort fewer transactions but later; wait-die aborts earlier and can abort more.

*From* [4.3](lessons/04-03-two-phase-locking-deadlock-and-granularity.md)

### Isolation levels against anomalies

| level | dirty read | non-repeatable | phantom | write skew |
|---|---|---|---|---|
| Read Uncommitted | permitted | permitted | permitted | permitted |
| Read Committed | prevented | permitted | permitted | permitted |
| Repeatable Read | prevented | prevented | permitted | permitted |
| Serializable | prevented | prevented | prevented | prevented |
| Snapshot isolation | prevented | prevented | prevented | **permitted** |

The three classical anomalies are not a complete characterization of serializability, which is exactly why snapshot isolation prevents all three and is still not serializable.

*From* [4.4](lessons/04-04-isolation-levels-and-mvcc.md)

### The ARIES three passes

| pass | direction | from | does |
|---|---|---|---|
| analysis | forward | the checkpoint | rebuild the dirty page and transaction tables; identify **losers** |
| redo | forward | the smallest recLSN | reapply **every** update, winners and losers alike |
| undo | backward | each loser's lastLSN, via `prevLSN` | restore before images, writing a CLR for each |

**Redo skips a record** when the page is not in the dirty page table, or its recLSN exceeds the record's LSN, or the page's pageLSN already reaches it.

**Repeating history** — redoing even a loser's writes — is what puts the database in exactly its crash state, so undo needs no knowledge of which pages reached disk.

*From* [4.5](lessons/04-05-recovery-write-ahead-logging-and-aries.md)

### Recovery decision grid

| | committed | not committed |
|---|---|---|
| **page reached disk** | nothing | **undo** (the steal case) |
| **page did not** | **redo** (the no-force case) | nothing |

*From* [4.1](lessons/04-01-transactions-and-the-acid-properties.md), [4.5](lessons/04-05-recovery-write-ahead-logging-and-aries.md)

### Quorums and sharding

$$\text{a read sees the last acknowledged write} \iff R + W > N$$

Note $R + W = N$ is **not** sufficient — two sets summing to exactly $N$ can be disjoint. A setting tolerates $N - W$ failures on writes and $N - R$ on reads.

**Sharding.** Equality on the shard key touches 1 shard; anything else touches all $S$. Hash sharding spreads load and destroys order; range sharding preserves order and risks a hot shard when the key is time-like.

*From* [4.6](lessons/04-06-nosql-and-distributed-data.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Why a disk-resident tree uses fan-out 200, not 2; height math; why values live in leaves | [`programming-foundations` 3.2](../programming-foundations/lessons/03-02-balanced-trees-the-idea.md) |
| Hash tables: chaining, open addressing, load factor, collision behaviour | [`programming-foundations` 2.5](../programming-foundations/lessons/02-05-hash-tables.md) |
| Abstract data types: separating an interface from its implementation | [`programming-foundations` 2.1](../programming-foundations/lessons/02-01-abstract-data-types-and-interfaces.md) |
| Asymptotic notation and the habit of counting a cost model's unit | [`programming-foundations` 1.4](../programming-foundations/lessons/01-04-big-o-counting-operations.md) |
| Heaps and priority queues, used inside run generation and the merge | [`programming-foundations` 3.3](../programming-foundations/lessons/03-03-heaps-and-priority-queues.md) |
| Graph representations; why a general graph needs an edge list, not a field | [`programming-foundations` 4.2](../programming-foundations/lessons/04-02-graphs-representations-and-traversal.md) |
| Comparison sorting and the $n \log n$ lower bound (used inside pass 0) | [`algorithms` 1.4](../algorithms/lessons/01-04-sorting-and-the-comparison-lower-bound.md) |
| Cycle detection and topological sort by depth-first search | [`algorithms` 3.2](../algorithms/lessons/03-02-topological-sort-and-strongly-connected-components.md) |
| Dynamic programming: optimal substructure and overlapping subproblems | [`algorithms` 2.5](../algorithms/lessons/02-05-dynamic-programming-and-knapsack.md) |
| Divide and conquer, the shape behind grace hash partitioning | [`algorithms` 1.5](../algorithms/lessons/01-05-divide-and-conquer-beyond-sorting.md) |
| Sets, subsets, Cartesian products, and the algebra of set operations | [`discrete-mathematics` 2.1](../discrete-mathematics/lessons/02-01-sets-and-set-operations.md) |
| Relations as subsets of a product; closure of a relation | [`discrete-mathematics` 2.2](../discrete-mathematics/lessons/02-02-relations-equivalence-and-order.md) |
| Classical propositional logic and the law of excluded middle (which SQL breaks) | [`discrete-mathematics` 1.1](../discrete-mathematics/lessons/01-01-propositional-logic-boolean-algebra.md) |
| Quantifier negation, $\forall x P(x) \equiv \neg \exists x \neg P(x)$ | [`discrete-mathematics` 1.2](../discrete-mathematics/lessons/01-02-predicate-logic-quantifiers-negation.md) |
| Soundness and completeness of a proof system | [`discrete-mathematics` 1.3](../discrete-mathematics/lessons/01-03-proof-techniques.md) |
| Graphs, paths and connectivity, for reading an ER diagram or a join graph | [`discrete-mathematics` 5.2](../discrete-mathematics/lessons/05-02-graphs-paths-connectivity-euler-hamilton.md) |
| Page replacement policies: LRU, Clock, OPT; Belady's anomaly | [`operating-systems` 3.4](../operating-systems/lessons/03-04-page-replacement-and-thrashing.md) |
| Journaling as write-ahead logging; commit records; idempotent replay | [`operating-systems` 4.3](../operating-systems/lessons/04-03-crash-consistency-and-journaling.md) |
| Deadlock: the Coffman conditions, detection, prevention, avoidance | [`operating-systems` 2.5](../operating-systems/lessons/02-05-deadlock.md) |
| Race conditions and critical sections; the racy counter | [`operating-systems` 2.1](../operating-systems/lessons/02-01-race-conditions-and-critical-sections.md) |
| Multi-level indirection: the page table as a directory in front of storage | [`operating-systems` 3.2](../operating-systems/lessons/03-02-paging-and-the-os-page-table.md) |
| Disk seek and rotational latency; SSD behaviour; I/O scheduling | [`operating-systems` 4.4](../operating-systems/lessons/04-04-io-and-disk-scheduling.md) |
| Cache locality; why sequential access beats pointer chasing | [`computer-architecture` 4.2](../computer-architecture/lessons/04-02-associativity-misses-write-policy.md) |
| Storage device characteristics and the memory hierarchy | [`computer-architecture` 4.4](../computer-architecture/lessons/04-04-storage-and-io.md) |
| Continuous distributions and why a skewed density resists equal-width binning | [`prob-stat-refresher` 2.3](../prob-stat-refresher/lessons/02-03-continuous-distributions.md) |
| Agreeing on state each node observes only locally | [`computer-networks` 3.3](../computer-networks/lessons/03-03-routing-algorithms-link-state-and-distance-vector.md) |
| Consensus, Paxos and Raft, the CAP proof, FLP, distributed commit | `distributed-systems` (unbuilt) |

## Pitfalls

### Keys and constraints

- A key is asserted about the domain, not observed in the data — distinct values in today's rows establish nothing. *([1.1](lessons/01-01-the-relational-model.md))*
- "Prime" means in *some* candidate key, not in the primary key; a relation with four candidate keys can have every attribute prime. *([2.4](lessons/02-04-anomalies-and-the-normal-forms.md))*
- A weak entity's owner key propagates into every table that references it, which is a real cost worth seeing before you commit. *([2.2](lessons/02-02-from-er-to-relational-schema.md))*
- A key constrains one row of one table. A rule spanning two tables cannot be expressed as a key, however you arrange the columns. *([2.2](lessons/02-02-from-er-to-relational-schema.md))*
- Replacing a composite key with a surrogate silently drops the uniqueness constraint the composite was enforcing — declare it separately or lose it. *([2.1](lessons/02-01-entity-relationship-modeling.md))*

### NULL

- `WHERE x = NULL` finds nothing, ever. Use `IS NULL`. *([1.3](lessons/01-03-sql-select-from-where.md))*
- A filter and its negation do not partition a table: `NOT unknown` is unknown, so rows with a NULL fail both. *([1.3](lessons/01-03-sql-select-from-where.md))*
- One NULL anywhere in a `NOT IN` list makes the predicate incapable of being true, so the result is empty regardless of the data. `IN` is unaffected. *([1.3](lessons/01-03-sql-select-from-where.md))*
- Set operations (`UNION`, `INTERSECT`, `EXCEPT`) treat NULL as equal to NULL; `=` does not. The same two NULLs match under `INTERSECT` and fail under `ON a.x = b.x`. *([1.4](lessons/01-04-sql-joins-and-set-operations.md))*
- `AVG` divides by the count of non-null values, so it is not `SUM` over `COUNT(*)`. On three rows with one NULL the two differ by 50 percent. *([1.5](lessons/01-05-sql-aggregation-and-grouping.md))*

### Joins and query writing

- A condition on the right table belongs in `ON`, not `WHERE` — in `WHERE` it converts an outer join into an inner one, because padded rows have NULL there. *([1.4](lessons/01-04-sql-joins-and-set-operations.md))*
- An anti-join must test a column that is non-nullable **in the source table**, or it conflates "no matching row" with "matching row, no value." *([1.4](lessons/01-04-sql-joins-and-set-operations.md))*
- With an outer join, `COUNT(*)` reports 1 for a group with nothing in it. Count a key column of the other side. *([1.5](lessons/01-05-sql-aggregation-and-grouping.md))*
- `GROUP BY` cannot emit a group with no rows, which is why "publishers with no books" needs an outer join and cannot come from grouping. *([1.5](lessons/01-05-sql-aggregation-and-grouping.md))*
- A scalar subquery returning *no* rows evaluates to NULL and silently drops the outer row; returning *two* rows is a loud error. The failure modes are opposite and only one tells you. *([1.6](lessons/01-06-subqueries-exists-and-views.md))*
- A natural join joins on *every* shared attribute name, so an incidental shared column silently empties the result. Prefer an explicit condition. *([1.2](lessons/01-02-relational-algebra.md))*
- A self-join needs an ordering condition on the key, or every row pairs with itself and every pair appears twice. *([1.4](lessons/01-04-sql-joins-and-set-operations.md))*
- Nothing promises an order without `ORDER BY`. A report that looks sorted today reorders when the optimizer changes access path. *([1.3](lessons/01-03-sql-select-from-where.md))*

### Dependencies and decomposition

- The three minimal-cover passes cannot be reordered, and passes 2 and 3 must each use the set **as updated** — batching the redundancy tests removes too much. *([2.6](lessons/02-06-minimal-cover-and-3nf-synthesis.md))*
- A minimal cover is not unique, and two correct answers can have different numbers of dependencies. Equivalence is the test, not size. *([2.6](lessons/02-06-minimal-cover-and-3nf-synthesis.md))*
- A lossy decomposition *gains* rows rather than losing them, and the extra tuples look exactly like data. *([2.5](lessons/02-05-decomposition-lossless-join-and-dependency-preservation.md))*
- The lossless test needs the shared columns to key **one** piece, not both — requiring both rejects many correct decompositions. *([2.5](lessons/02-05-decomposition-lossless-join-and-dependency-preservation.md))*
- Testing a decomposed piece for BCNF must include dependencies *derived* on it, not only those written in $F$. *([2.5](lessons/02-05-decomposition-lossless-join-and-dependency-preservation.md))*
- The 3NF synthesis candidate-key relation is what makes the result lossless. It often looks redundant and is not optional. *([2.6](lessons/02-06-minimal-cover-and-3nf-synthesis.md))*
- Higher normal form is not automatically better: BCNF can cost you an enforceable constraint, and that is a worse trade than bounded redundancy. *([2.4](lessons/02-04-anomalies-and-the-normal-forms.md))*

### Storage, indexing and cost

- LRU on a cyclic scan gives a **zero** hit rate when the buffer is one frame short of the file, and near 100 percent when it fits. There is no graceful degradation. *([3.1](lessons/03-01-storage-pages-and-the-buffer-manager.md))*
- An unclustered index on a query matching more than about $1/p$ of the table is slower than a full scan, because it pays one page read per matching **row**. *([3.2](lessons/03-02-b-plus-tree-indexes.md))*
- A leaf split *copies* its middle key up; an internal split *moves* it. Getting this backwards loses a row from every leaf split. *([3.2](lessons/03-02-b-plus-tree-indexes.md))*
- A hash index cannot serve a range, a prefix match, an `ORDER BY` or a `MIN`. It is a specialization, not an upgrade. *([3.3](lessons/03-03-hashing-and-choosing-an-access-path.md))*
- Every index taxes every insert and every update to its columns. An index the optimizer will never choose is pure cost. *([3.3](lessons/03-03-hashing-and-choosing-an-access-path.md))*
- Doubling the sort buffer changes nothing unless it crosses a $B^2$ boundary, and then it removes a whole pass. Tune toward the boundary, not upward. *([3.4](lessons/03-04-external-sorting.md))*
- A merge pass costs $2N$ whether it merges two runs or five hundred, including runs merely copied through. *([3.4](lessons/03-04-external-sorting.md))*
- An unclustered index as a join's inner path can be the **worst** plan available, because its per-probe penalty is multiplied by every outer row. *([3.5](lessons/03-05-query-operators-and-join-algorithms.md))*
- Hash join needs an equality condition; it cannot serve an inequality at all. *([3.5](lessons/03-05-query-operators-and-join-algorithms.md))*

### Estimation and optimization

- A bad plan usually means a bad cardinality estimate, not a bad cost model. The formulas are accurate given correct inputs. *([3.6](lessons/03-06-selectivity-statistics-and-cost-estimation.md))*
- Independence is not a mild approximation: two perfectly correlated predicates give an error equal to the redundant one's full selectivity. *([3.6](lessons/03-06-selectivity-statistics-and-cost-estimation.md))*
- Equi-depth histograms are worse than equi-width in a sparse tail, which is exactly where a tail query lands. They win on average, not always. *([3.6](lessons/03-06-selectivity-statistics-and-cost-estimation.md))*
- Statistics are computed by a scan on a schedule, not maintained live. A table that has doubled since its last analysis is planned against a picture of a smaller table. *([3.6](lessons/03-06-selectivity-statistics-and-cost-estimation.md))*
- Keeping only the cheapest plan per subset is wrong: a dearer subplan that arrives sorted can give the cheaper total. Key the table by interesting order too. *([3.7](lessons/03-07-query-optimization-and-join-ordering.md))*
- The optimizer finds the cheapest plan **in a restricted space under estimated costs**. All three qualifiers matter and the third matters most. *([3.7](lessons/03-07-query-optimization-and-join-ordering.md))*

### Transactions and concurrency

- ACID's C enforces the constraints you *declared*. An invariant you never wrote down is unprotected, and the important ones usually cannot be expressed as constraints. *([4.1](lessons/04-01-transactions-and-the-acid-properties.md))*
- A lost update leaves a state that passes every declared constraint. Constraints check a *state*; an isolation anomaly is a property of a *history*. *([4.1](lessons/04-01-transactions-and-the-acid-properties.md))*
- Isolation means "equivalent to *some* serial order," not "no interleaving." Heavy interleaving is normal and desirable. *([4.1](lessons/04-01-transactions-and-the-acid-properties.md))*
- Checking each *pair* of transactions is not enough: a three-cycle is invisible pairwise. Draw the whole precedence graph. *([4.2](lessons/04-02-serializability-and-precedence-graphs.md))*
- Which transaction started first tells you nothing about the equivalent serial order. Only the conflicts do. *([4.2](lessons/04-02-serializability-and-precedence-graphs.md))*
- Conflict serializability governs order, not aborts. A serializable schedule can still be unrecoverable. *([4.2](lessons/04-02-serializability-and-precedence-graphs.md))*
- Deadlock is not a flaw in 2PL. It is where the protocol puts a cycle it refuses to build in the precedence graph — and the wait-for graph is the better place for it. *([4.3](lessons/04-03-two-phase-locking-deadlock-and-granularity.md))*
- Consistent lock ordering does not prevent all deadlocks: two transactions on **one** item deadlock through a lock upgrade. *([4.3](lessons/04-03-two-phase-locking-deadlock-and-granularity.md))*
- Repeatable Read makes *row reads* repeatable, not *queries*. Re-running a query can still return new rows. *([4.4](lessons/04-04-isolation-levels-and-mvcc.md))*
- Snapshot isolation prevents all three classical anomalies and is still not serializable. Write skew is the gap. *([4.4](lessons/04-04-isolation-levels-and-mvcc.md))*
- MVCC moves the cost of concurrency rather than removing it: old versions accumulate, and one long-running transaction pins every version created since it started. *([4.4](lessons/04-04-isolation-levels-and-mvcc.md))*

### Recovery and distribution

- Redo must reapply even a loser's writes. Skipping them reintroduces every case repeating history exists to avoid. *([4.5](lessons/04-05-recovery-write-ahead-logging-and-aries.md))*
- A fuzzy checkpoint flushes nothing. Its only job is to bound where analysis starts. *([4.5](lessons/04-05-recovery-write-ahead-logging-and-aries.md))*
- A CLR is never undone. That is how recovery survives crashing during recovery. *([4.5](lessons/04-05-recovery-write-ahead-logging-and-aries.md))*
- Under no-force the log is the authoritative record and the data pages are a cache of it, not the other way round. *([4.5](lessons/04-05-recovery-write-ahead-logging-and-aries.md))*
- "Choose P" is not a design decision — a partition is an event. CAP constrains only what you do *during* one. *([4.6](lessons/04-06-nosql-and-distributed-data.md))*
- $R + W = N$ is not enough for strong consistency; the sum must **exceed** $N$ or the quorums can be disjoint. *([4.6](lessons/04-06-nosql-and-distributed-data.md))*
- Eventual consistency means replicas converge *if writes stop*, with no bound on when and no guarantee about what a read sees before then. *([4.6](lessons/04-06-nosql-and-distributed-data.md))*
- Denormalizing to avoid a cross-shard join brings back every anomaly of Module 2 unchanged. The storage engine changing does not repeal them. *([4.6](lessons/04-06-nosql-and-distributed-data.md))*
