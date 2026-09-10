# Database Systems — Syllabus

> Computer Science · Tier 1 · 25 lessons · Prereqs: [programming-foundations](../programming-foundations/syllabus.md) · Roadmap id: `databases`

## Goal

Learn to think about data the way a database does: as *relations* you describe declaratively and let the system figure out how to fetch. You will design a schema from a plain-English domain, write SQL that answers real questions, prove a design is free of update anomalies, understand why a query is fast or slow down to the B⁺-tree it rides, and reason about what happens when thousands of transactions touch the same rows at once. Deliberately skipped: the source-level engineering of a production DBMS (lock-manager internals, storage-engine code) and big-data platform operations (Spark/Hadoop cluster tuning) — this is the *theory and design* of database systems, enough to use one expertly and to read the internals, not a build-a-DBMS course.

## Dangerous Checklist

When you finish, you can:

- [ ] Read a relational schema and name its candidate keys, primary key, and foreign keys
- [ ] Translate an English query into relational algebra and into SQL, and say why the two agree
- [ ] Write SQL with joins, `GROUP BY`/`HAVING` aggregation, correlated subqueries, and views — and predict the result set
- [ ] Model a domain as an ER diagram and mechanically translate it into normalized tables
- [ ] Compute the closure of a set of attributes, find all candidate keys, and decide which normal form a schema satisfies
- [ ] Decompose a relation into BCNF and check whether the decomposition is lossless and dependency-preserving
- [ ] Explain how a B⁺-tree answers a point query and a range query, and count the disk I/Os each costs
- [ ] Choose an index (or none) for a given query workload and justify the tradeoff
- [ ] Estimate the cost of a query plan and explain what a cost-based optimizer is choosing between
- [ ] Say what each ACID letter guarantees and give a failure it prevents
- [ ] Detect whether a schedule is conflict-serializable, and explain how two-phase locking and MVCC enforce isolation
- [ ] Read an isolation level (Read Committed, Snapshot, Serializable) off an anomaly it does or doesn't allow

## Modules

### Module 1: The relational model & SQL

Build the whole edifice on one idea — a relation is a set of tuples — then learn the two languages for querying it: relational algebra (the *what*, procedurally) and SQL (the *what*, declaratively).

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The relational model | Read any schema and name its keys | relation, tuple, attribute, domain; schema vs. instance; superkey, candidate key, primary key, foreign key; NULL |
| 1.2 | Relational algebra | Express a query as a pipeline of set operations | selection $\sigma$, projection $\pi$, union/difference/intersection, Cartesian product $\times$, rename $\rho$, natural & theta joins, division |
| 1.3 | SQL I — querying single tables | Turn a question into `SELECT–FROM–WHERE` | `SELECT`/`FROM`/`WHERE`, predicates & `NULL` three-valued logic, `DISTINCT`, `ORDER BY`, `LIKE`, `IN`/`BETWEEN` |
| 1.4 | SQL II — joins & set operations | Combine tables the way relational algebra says you can | inner/left/right/full outer joins, self-joins, `UNION`/`INTERSECT`/`EXCEPT`, join ↔ algebra correspondence |
| 1.5 | SQL III — aggregation & grouping | Answer questions about groups, not rows | `COUNT`/`SUM`/`AVG`, `GROUP BY`/`HAVING`, clause evaluation order, aggregates and `NULL` |
| 1.6 | SQL IV — subqueries, `EXISTS` & views | Nest one question inside another | scalar & correlated subqueries, `IN`/`EXISTS`/`NOT EXISTS`, the division idiom, `CREATE VIEW` |

**Boss problem 1:** Given a three-table university schema (students, courses, enrollments), answer four escalating questions — (a) list students in a named course, (b) find courses with no enrollments, (c) report each department's average class size, and (d) name the student(s) enrolled in *every* course offered by a given department. Write each in SQL, express (a) and (d) in relational algebra as well, and explain why (d) is the algebra *division* operator in disguise.

### Module 2: Database design & normalization

A schema can be *correct* and still be *bad* — storing the same fact twice invites contradictions. This module makes "good design" precise: model the domain, then prove the tables can't drift out of sync.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Entity–relationship modeling | Draw a domain as entities and relationships | entity sets, attributes, relationship sets, cardinality (1:1, 1:N, M:N), participation, weak entities, ER diagrams |
| 2.2 | From ER to relational schema | Translate a diagram into tables mechanically | entity → table, relationship → table or foreign key, weak-entity keys, folding 1:N relationships |
| 2.3 | Functional dependencies, closure & keys | Compute what a set of attributes determines | functional dependency $X \to Y$, Armstrong's axioms, attribute closure $X^+$, finding all candidate keys, FD-set equivalence |
| 2.4 | Anomalies and the normal forms | Name the highest normal form a schema satisfies | update/insert/delete anomalies, 1NF, 2NF, 3NF, BCNF, prime attributes, the NF hierarchy |
| 2.5 | Decomposition: lossless join & dependency preservation | Split a table without losing anything | the BCNF decomposition algorithm, the lossless-join test, dependency preservation, why BCNF can lose an FD |
| 2.6 | Minimal cover & 3NF synthesis | Get a decomposition that keeps every dependency | extraneous attributes, minimal (canonical) cover, the 3NF synthesis algorithm, 3NF vs. BCNF as a deliberate trade |

**Boss problem 2:** Start from a plain-English description of a small business (orders, customers, line items, products) and a supplied set of functional dependencies on an intentionally denormalized "one big table." Find every candidate key via attribute closure, identify the highest normal form the table satisfies and the exact anomaly that breaks the next one, decompose it into BCNF, and then check — with a lossless-join test — that no information was lost, noting whether any dependency was sacrificed in the process.

### Module 3: Storage, indexing & query processing

Descend below the query language to the disk. A query is fast or slow because of *how many pages it touches*; this module is the machinery — access paths, the B⁺-tree, the sort and join operators, and the optimizer that picks a plan — that turns declarative SQL into I/O.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Storage & the buffer manager | Explain why databases count disk I/Os, not instructions | memory hierarchy, blocks/pages, records & files, heap vs. sorted files, the buffer pool & replacement |
| 3.2 | B⁺-tree indexes | Trace a point and a range query through a balanced tree | B⁺-tree structure, fan-out & height, clustered vs. unclustered, insertion/splitting, range scans |
| 3.3 | Hashing & choosing an index | Pick the right access path for a workload | static & extendible hashing, hash vs. tree tradeoffs, primary/secondary indexes, covering indexes, when *not* to index |
| 3.4 | External sorting | Sort more data than fits in memory, and count the passes | two-phase multiway merge sort, run generation, pass count from $B$ buffers, replacement selection |
| 3.5 | Query operators & join algorithms | Read a physical plan as a tree of operators | iterator model & pipelining, selection/projection methods, block nested-loop / sort-merge / hash join and their I/O cost |
| 3.6 | Selectivity, statistics & cost estimation | Predict how many rows an operator emits | selectivity factors, histograms, distinct-value estimates, join cardinality, the independence and uniformity assumptions and where they break |
| 3.7 | Query optimization & join ordering | Understand what the optimizer is searching over | logical rewrites, left-deep plan space, Selinger dynamic programming, interesting orders, heuristic vs. cost-based |

**Boss problem 3:** You are handed a query joining a large `orders` table to a small `customers` table with a selective filter on `orders`, plus the table sizes, available indexes, and page counts. Enumerate three candidate plans (full scan + hash join, index scan + nested-loop join, sort-merge join), estimate the disk-I/O cost of each using the given statistics, pick the winner, and then state one change to the indexes or statistics that would make a *different* plan win — explaining the crossover.

### Module 4: Transactions, concurrency & beyond

Now let many users hit the same data at once, and let the machine crash mid-write. Transactions are the abstraction that makes both survivable; the module ends with a look past the relational world to NoSQL and distributed stores, where these same guarantees get renegotiated.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Transactions & the ACID properties | State what a transaction promises and why | transaction, atomicity, consistency, isolation, durability; commit/abort/rollback; the anomalies ACID rules out |
| 4.2 | Serializability & precedence graphs | Decide if concurrent execution is "as good as serial" | serial vs. serializable schedules, conflicting operations, conflict serializability, the precedence graph test, recoverable & cascadeless schedules |
| 4.3 | Two-phase locking, deadlock & granularity | Enforce serializability with a protocol, and pay for it | shared/exclusive locks, 2PL and its theorem, strict 2PL, transaction deadlock & victim selection, wait-die/wound-wait, intention locks |
| 4.4 | Isolation levels & MVCC | Trade correctness for concurrency deliberately | dirty/non-repeatable/phantom reads, Read Uncommitted → Serializable, snapshot isolation, write skew, multiversion concurrency control |
| 4.5 | Recovery: write-ahead logging & ARIES | Survive a crash without losing or corrupting data | failure model, LSNs, the steal/no-force matrix, undo & redo, fuzzy checkpoints, the ARIES analysis/redo/undo passes, CLRs |
| 4.6 | A taste of NoSQL & distributed data | Name what you give up to scale out | key-value/document/column/graph stores, sharding & replication, the CAP theorem, eventual vs. strong consistency, BASE |

**Boss problem 4:** Given two interleaved transactions and their read/write schedule, build the precedence graph and decide whether the schedule is conflict-serializable; then show which single lock the strict-2PL protocol would make one transaction wait on, and identify whether a deadlock arises. Finally, re-run the same two transactions under snapshot isolation and state whether the outcome differs and why — connecting the answer to the CAP-theorem tradeoff a distributed version of this database would face.

## Sources of truth

- Silberschatz, Korth & Sudarshan, *Database System Concepts* (primary — the relational model, SQL, normalization, and transactions, at this course's rigor level)
- Ramakrishnan & Gehrke, *Database Management Systems* (storage, indexing, and query processing — the systems-side machinery of Module 3)
- Garcia-Molina, Ullman & Widom, *Database Systems: The Complete Book* (relational algebra and functional-dependency theory, treated formally)
- CMU 15-445/645 *Database Systems* (Andy Pavlo) — for the buffer-manager, B⁺-tree, and concurrency-control intuition and vocabulary

## Notes

- This course is the applied, single-node counterpart to two neighbors. It builds directly on [`programming-foundations`](../programming-foundations/syllabus.md): the B⁺-tree of Module 3 is the on-disk cousin of the balanced search trees and hash tables you already know, and the same Big-O / cost-of-access thinking carries over — only now the currency is disk pages, not comparisons.
- Module 4 is the on-ramp to `distributed-systems`. Serializability, two-phase locking, and MVCC are exactly the local-consistency machinery that consensus (Paxos/Raft) and the CAP theorem generalize once the data is spread across machines — the final lesson (4.5) names that bridge explicitly so the concepts are already in hand when that course begins.

## Revision note — 2026-09-10

Extended from 19 to 25 lessons while prepping the course. Four of the original lessons
were carrying two or three separable ideas each, and one piece of standard machinery was
missing outright. Nothing was renumbered above the split point, and no module was cut.

- **1.5 split into 1.5 + 1.6.** Aggregation and nesting are different skills with different
  failure modes (`HAVING` vs. `WHERE`; correlated vs. uncorrelated). Boss problem 1(d) is a
  division query, which needs the doubly-nested `NOT EXISTS` idiom to get its own treatment
  rather than a paragraph.
- **2.4 split into 2.4 + 2.5, and 2.6 added.** Naming a normal form and *decomposing* into
  one are separate procedures, and the original lesson also owed a lossless-join test and a
  dependency-preservation check. **3NF synthesis** was missing entirely — it is the only
  decomposition algorithm that guarantees dependency preservation, it needs minimal cover as
  its input, and it is exactly the kind of by-hand procedure this course's practice model is
  built for.
- **3.4 external sorting added; old 3.5 split into 3.6 + 3.7.** Sort-merge join, `ORDER BY`,
  `GROUP BY`, `DISTINCT` and index building all rest on the two-phase multiway merge, and the
  pass-count formula was being used without ever being derived. Separately, cost *estimation*
  (selectivity, histograms, join cardinality) is what an optimizer is arguing about; plan
  *enumeration* is how it searches. Cramming both into one lesson left neither traceable.
- **4.2 split into 4.2 + 4.3.** Conflict serializability is a test you run on a schedule;
  two-phase locking is a protocol that guarantees you pass it. The precedence-graph test and
  the 2PL/deadlock/granularity machinery each need a full worked trace.

**Problem format (standing for every Computer Science course, per 2026-09-09).** The study
app has no drawing surface and no code execution, so every problem here resolves to a number,
a classification *with its named reason*, an ordered step list (a schedule, a trace, a
decomposition sequence), a short table, a concrete counterexample instance, or a handwritten
derivation. No problem asks for a diagram. Where the correct answer is not unique — a
serializable interleaving, a BCNF decomposition, a counterexample schema — the solution block
opens with a one-line **accept criterion** before the worked exemplar, so the answer can be
self-graded in the app.

**Ownership.** Three neighbours already own machinery this course uses.
[`programming-foundations` 3.2](../programming-foundations/lessons/03-02-balanced-trees-the-idea.md)
owns the fan-out argument for disk-resident trees and 2.5 owns in-memory hash tables;
[`operating-systems`](../operating-systems/syllabus.md) owns page replacement (3.4),
file-system journaling (4.3) and OS-level deadlock (2.5); and
[`algorithms`](../algorithms/syllabus.md) owns in-memory sorting and the dynamic-programming
idiom. Lessons 3.1–3.4, 3.7, 4.3 and 4.5 cite these rather than re-deriving them, and own the
database-specific half instead. The reference card's scope table states each split.
