# Database Systems · Lesson 4.4: Isolation levels & MVCC

> ⏱ ~15 min · Module 4: Transactions, concurrency & beyond · Builds on: [4.3 (two-phase locking)](04-03-two-phase-locking-deadlock-and-granularity.md) · Unlocks: [4.5 (recovery & ARIES)](04-05-recovery-write-ahead-logging-and-aries.md)

## Why this matters

Serializability is correct and it is expensive. Strict 2PL holds every exclusive lock to commit, so a long transaction blocks everything it touches for its whole duration, and read-heavy workloads block on writers they have no real interest in.

So the SQL standard offers something unusual: a **dial**. You may ask for less isolation than serializability, in exchange for more concurrency, and the standard defines the levels by naming exactly which anomalies each one permits.

This is the one place in the course where you are handed a deliberate correctness compromise and expected to choose. Choosing well means knowing what each level lets through — and knowing that the most widely used non-serializable level, snapshot isolation, admits an anomaly the standard's ladder does not even name.

## The idea

Three anomalies define the classical ladder, in increasing order of how hard they are to prevent.

**Dirty read.** You read a value another transaction wrote and has not committed. If it aborts, you acted on a value that never existed.

**Non-repeatable read.** You read a row twice in one transaction and get different values, because someone else committed a change in between.

**Phantom.** You run the *same query* twice and get a different set of rows, because someone inserted a row matching your predicate. This is the hard one: locking the rows you read cannot help, since the offending row did not exist when you read.

Each level is then defined by which of these it permits, and the four levels are the four sensible points on that scale.

**Snapshot isolation** is a different animal and is what most systems actually run. Each transaction sees a consistent snapshot of the database as of its start, and readers never block writers or each other. It eliminates all three classical anomalies. And it permits **write skew**, shown in the figure: two transactions each read a constraint, each act to preserve it, each write a *different* row, both commit, and the constraint is broken by their combination.

**Multiversion concurrency control (MVCC)** is the mechanism behind it. A write does not overwrite; it creates a new version tagged with the writing transaction. A reader picks the newest version that was committed when it started. Since old versions remain readable, **readers never take locks and never block**, which is the property that made MVCC the default in PostgreSQL, Oracle, and most modern systems.

## The formal version

> **The three classical anomalies.**
>
> - **Dirty read:** $T_2$ reads a value written by an uncommitted $T_1$.
> - **Non-repeatable read:** $T_2$ reads item $X$ twice and sees different values, because $T_1$ committed a write between them.
> - **Phantom:** $T_2$ evaluates a predicate twice and the second evaluation returns rows the first did not, because $T_1$ inserted or deleted a matching row.

> **The four standard levels**, each defined by what it permits:

| level | dirty read | non-repeatable | phantom |
|---|---|---|---|
| Read Uncommitted | permitted | permitted | permitted |
| Read Committed | prevented | permitted | permitted |
| Repeatable Read | prevented | prevented | permitted |
| Serializable | prevented | prevented | prevented |

The lock-based implementations follow directly. Read Committed takes a shared lock for the duration of the *read* and releases it immediately, so a later read can see a change. Repeatable Read holds shared locks to commit, so no row you read can change. Serializable additionally locks the *predicate* — the index range your query scanned, called **next-key locking** — which is what stops a phantom from being inserted into it.

Note that only Serializable is a statement about outcomes; the other three are statements about specific failure modes, which is why a workload can be correct at Read Committed and broken at Read Committed depending entirely on what it does.

> **Snapshot isolation.** Each transaction reads the state as of its start time. On commit, it aborts if any concurrent transaction committed a write to a row it also wrote — the **first-committer-wins** rule.

> **Write skew.** Two transactions read an overlapping set of rows, each writes a *disjoint* subset, and both commit. Since they wrote different rows, first-committer-wins finds no conflict, and a constraint spanning the rows both read can be violated.

Snapshot isolation is **not** serializable, and write skew is the reason. The general fix, implemented as *serializable snapshot isolation* in PostgreSQL, tracks read-write dependencies as well as write-write ones and aborts on the dangerous pattern.

> **MVCC.** Each row holds a chain of versions, each tagged with the transaction that created it and, when superseded, the one that removed it. A transaction reads the newest version committed before it began.

The costs are real and easy to overlook: old versions occupy space until nothing can see them, and reclaiming them is a background job whose failure is a common production problem.

## Picture

![A table of five isolation levels against four anomalies, with snapshot isolation shown preventing all three classical anomalies but permitting write skew, and beneath it a trace of two transactions each removing a different pilot from duty and both committing, leaving nobody on duty](assets/04-04-fig1.svg)

Read the bottom-right panel. Write skew is not a bug in snapshot isolation's implementation; it is what its conflict rule was never designed to catch.

## Worked examples

**Example 1 — the same code, three levels, three answers.**

A reporting transaction runs the same query twice, counting departures scheduled for tomorrow, while another transaction commits an insert between them.

$$T_1: \quad \text{count}\ \ \ldots\ \ \text{count again} \qquad\qquad T_2: \quad \text{insert a departure}\ \ \text{commit}$$

| level | first count | second count | why |
|---|---|---|---|
| Read Uncommitted | 40 | 41 | $T_1$ sees the insert even before $T_2$ commits |
| Read Committed | 40 | 41 | the insert is committed by the second read, so it is visible |
| Repeatable Read | 40 | 41 | rows already read cannot change, but a **new** row may appear |
| Serializable | 40 | 40 | the predicate itself is locked; the insert waits |
| Snapshot | 40 | 40 | $T_1$ reads its own start-time snapshot throughout |

**The Repeatable Read row is the one worth staring at.** The level's name promises reads are repeatable, and this read is not. The promise covers *rows*, not *queries*: no row $T_1$ read can change, and nothing stops a row it never read from appearing. That is exactly the phantom, and it is why the ladder needs a fourth rung.

Now change $T_2$ to *update* an existing departure's gate rather than inserting:

| level | first read | second read |
|---|---|---|
| Read Uncommitted | gate 23 | gate 25, **even if $T_2$ later aborts** |
| Read Committed | gate 23 | gate 25 |
| Repeatable Read | gate 23 | gate 23 |
| Serializable | gate 23 | gate 23 |

Read Uncommitted's failure here is the sharpest one: $T_1$ can report a gate that never existed, because $T_2$ rolled back. **No level below Read Committed is defensible for anything a person reads**, and essentially no system defaults below it.

**Example 2 — write skew, and why snapshot isolation cannot see it.**

An airline requires **at least one pilot assigned to each departure**. Departure BA117 currently has two: Reyes and Okonjo. Both request removal at the same moment.

| step | $T_1$ (removing Reyes) | $T_2$ (removing Okonjo) |
|---|---|---|
| 1 | reads the crew list: Reyes, Okonjo | |
| 2 | | reads the crew list: Reyes, Okonjo |
| 3 | checks: 2 assigned, removing 1 leaves 1. **OK** | |
| 4 | | checks: 2 assigned, removing 1 leaves 1. **OK** |
| 5 | writes the **Reyes** row: unassigned | |
| 6 | | writes the **Okonjo** row: unassigned |
| 7 | commits | |
| 8 | | commits |

**BA117 now has no pilot**, and both transactions committed.

**Why snapshot isolation permits it.** Its conflict rule is first-committer-wins on *writes*: abort if a concurrent transaction committed a write to a row you also wrote. $T_1$ wrote the Reyes row; $T_2$ wrote the Okonjo row. **Different rows, no write-write conflict, nothing to detect.**

The real dependency runs the other way. $T_1$'s decision depended on *reading* the Okonjo row, which $T_2$ then wrote — a read-write dependency, and snapshot isolation tracks only write-write ones.

**Would 2PL have caught it?** Yes. Under strict 2PL, $T_1$ holds a shared lock on both crew rows from step 1, so $T_2$'s write to Okonjo at step 6 blocks until $T_1$ commits. $T_2$ then re-reads, sees one pilot remaining, and refuses. Locking readers is exactly what snapshot isolation gave up to make readers non-blocking, and write skew is the bill.

**Three ways to fix it in practice**, in decreasing order of reliability:

1. **Use a serializable level.** PostgreSQL's serializable snapshot isolation tracks read-write dependencies and aborts one of the two. Correct, and it costs some aborts under contention.
2. **Materialize the conflict.** Have both transactions write a shared row — a `departure.crew_version` counter, say. Now they conflict on writes, first-committer-wins fires, and one aborts. This is a deliberate hack and it works.
3. **Take the locks explicitly.** `SELECT ... FOR UPDATE` on the crew rows makes the read a locking read, restoring the blocking behaviour of 2PL for exactly this query.

**The general lesson is worth more than the example.** Write skew arises whenever a transaction reads a set of rows, checks an invariant over them, and writes a *proper subset*. That shape — read many, check, write some — is extremely common: on-call rotas, seat inventory, budget approvals, uniqueness checks done in application code. If your invariant spans rows and your isolation level is snapshot, it is not being enforced.

## Watch out

- **You might think Repeatable Read makes queries repeatable.** It makes *row reads* repeatable. Re-running a query can still return new rows, which is the phantom, and preventing it needs predicate or next-key locking at the Serializable level.
- **You might think snapshot isolation is serializable because it prevents all three named anomalies.** The three anomalies are not a complete characterization of serializability. Snapshot isolation prevents all of them and still admits write skew.
- **You might think MVCC removes the cost of concurrency control.** It moves it. Readers stop blocking; in exchange, old versions accumulate and must be reclaimed by a background process, and a long-running transaction pins every version created since it started.
- **You might think the level is a per-database setting you choose once.** It is per transaction, and the right answer differs by workload: a nightly report is fine at Read Committed, while a transaction enforcing a cross-row invariant needs Serializable or explicit locks.

## One-liner

> Isolation is a dial, and each setting is defined by what it lets through — with snapshot isolation, the most popular setting, letting through an anomaly the standard's ladder never named.

## Problems

**P1 (🟢)** For each behaviour, name the anomaly and the lowest standard isolation level that prevents it.

(a) A transaction reads a balance, another transaction updates and commits, and the first reads the same row again and sees a different balance.
(b) A transaction reads a row another transaction has written but not committed; that transaction then aborts.
(c) A transaction runs `SELECT COUNT(*) FROM booking WHERE date = '2024-03-04'` twice and gets 40 then 41, with no row it read having changed.
(d) At which of the four levels is (c) still possible?

**P2 (🟡)** A bank enforces "the combined balance of a customer's current and savings accounts must stay at or above zero." Customer 7 has 100 in current and 100 in savings. Two transactions run concurrently under snapshot isolation: $T_1$ withdraws 150 from current, $T_2$ withdraws 150 from savings. Each reads both balances and checks the combined total before writing.

(a) Give what each transaction reads and the check it performs.
(b) Give the final balances if both commit, and state whether the invariant holds.
(c) State whether snapshot isolation aborts either transaction, with the reason in terms of its conflict rule.
(d) Give two distinct fixes, one that changes the isolation level and one that does not, and state what each costs.

**P3 (🔴, optional)** A system runs MVCC. The row `seat(14A)` has this version chain, where each version is tagged with the transaction that created it:

| version | created by | committed at |
|---|---|---|
| $v_1$ | $T_{10}$ | time 100 |
| $v_2$ | $T_{20}$ | time 140 |
| $v_3$ | $T_{30}$ | uncommitted |

(a) Transaction $T_{40}$ starts at time 120. Give the version it reads, and why.
(b) Transaction $T_{50}$ starts at time 160. Give the version it reads.
(c) A long-running report $T_{60}$ started at time 90 and is still running. State which versions can be reclaimed and which cannot, and name the production problem this causes.
(d) $T_{30}$ commits at time 180, and $T_{50}$ — which started at 160 and also wrote seat 14A — tries to commit at time 190. State whether it succeeds under first-committer-wins, and give the general rule you applied.

<details>
<summary>Solutions</summary>

**P1**

(a) **Non-repeatable read.** Prevented from **Repeatable Read** upward. Under lock-based implementation, the fix is holding the shared lock on the row until commit rather than releasing it after the read.

(b) **Dirty read.** Prevented from **Read Committed** upward. This is the only anomaly Read Uncommitted permits that the others do not, and it is the reason Read Uncommitted is essentially never used.

(c) **Phantom.** A row was *inserted* that matches the predicate, so no row the transaction read changed — the count changed because the set of matching rows grew. Prevented only at **Serializable**.

(d) Possible at **Read Uncommitted, Read Committed and Repeatable Read** — all three. Only Serializable prevents it, because only Serializable locks the predicate (or the index range) rather than the rows returned.

The reason Repeatable Read fails is worth restating: it can lock only what it has seen, and the phantom row did not exist to be locked.

**P2**

(a) Both transactions read a snapshot as of their start, so **both see current = 100 and savings = 100**, a combined total of 200.

- $T_1$ checks: withdrawing 150 from current leaves $-50$ current and 100 savings, combined $50 \geq 0$. **Passes.**
- $T_2$ checks: withdrawing 150 from savings leaves 100 current and $-50$ savings, combined $50 \geq 0$. **Passes.**

(b) $T_1$ writes current $= -50$; $T_2$ writes savings $= -50$.

**Final: current $-50$, savings $-50$, combined $-100$.**

**The invariant is violated.** Each transaction's check was correct against what it read, and each was invalidated by the other's write.

(c) **Neither is aborted.** Snapshot isolation's first-committer-wins rule aborts a transaction only when a concurrent transaction committed a write to a **row it also wrote**. $T_1$ wrote the current-account row; $T_2$ wrote the savings row. **Different rows, so no write-write conflict exists to detect.**

The dependency that actually matters is a read-write one — each read the row the other wrote — and snapshot isolation does not track those. This is textbook **write skew**: read a set, check an invariant over it, write a proper subset.

(d)

**Fix 1, change the level: run at Serializable.** A serializable scheduler must produce an outcome equivalent to some serial order, and in either order the second transaction reads the first's write and fails its check. In PostgreSQL, serializable snapshot isolation detects the read-write dependency cycle and aborts one transaction with a serialization failure.

**Cost:** aborts under contention, which the application must retry. Throughput falls on workloads where the pattern is frequent, and the retry logic is code someone has to write and test.

**Fix 2, without changing the level: make the reads locking reads.**

```sql
SELECT balance FROM account WHERE customer_id = 7 FOR UPDATE;
```

This takes exclusive locks on **both** account rows, so the second transaction blocks until the first commits, then reads the updated balances and correctly fails its check.

**Cost:** readers now block, which is precisely the property snapshot isolation was chosen to avoid — and it is easy to get wrong, since the lock must cover *every* row the invariant spans, not just the one being written. Miss one and the skew returns.

*(A third option, materializing the conflict by having both transactions write a shared `customer.version` row, also works and is the least honest of the three: it manufactures a write-write conflict so the existing rule fires. It is worth knowing because it is sometimes the only option available.)*

**P3**

(a) $T_{40}$ started at time 120 and reads the newest version **committed before its start**.

- $v_3$ is uncommitted — invisible to everyone but its creator.
- $v_2$ committed at 140, which is **after** 120 — invisible to $T_{40}$.
- $v_1$ committed at 100, before 120 — **visible**.

**$T_{40}$ reads $v_1$.** And it will read $v_1$ for its entire lifetime, however long that is, which is what makes its view a consistent snapshot.

(b) $T_{50}$ started at 160. $v_2$ committed at 140, before 160, and $v_3$ is still uncommitted. **$T_{50}$ reads $v_2$.**

(c) **$v_1$ cannot be reclaimed.** $T_{60}$ started at time 90 and therefore sees the newest version committed before 90 — which is $v_1$, or something older. As long as $T_{60}$ runs, $v_1$ must remain readable.

$v_2$ cannot be reclaimed either, since $T_{40}$ and later transactions may still need it, and $v_3$ is the live version. **Nothing can be reclaimed while $T_{60}$ runs.**

**The production problem is version bloat.** In PostgreSQL it appears as tables that grow without bound while holding the same number of live rows, because the background reclamation process cannot advance past the oldest running transaction's snapshot. One forgotten transaction — an idle session that opened a transaction and never committed, a report left running overnight — pins every version created since it began, across the whole database.

The practical shape of the failure is worth recognizing: disk usage climbs, sequential scans get slower because they read dead versions, and the fix is to find and terminate the oldest transaction rather than to add disk.

(d) **$T_{50}$ fails to commit and is aborted.**

The rule: under first-committer-wins, a transaction aborts if any **concurrent** transaction has committed a write to a row it also wrote. Two transactions are concurrent when neither committed before the other started.

Applying it: $T_{50}$ started at 160 and $T_{30}$ committed at 180, so $T_{30}$ had not committed when $T_{50}$ began — they are concurrent. Both wrote seat 14A. $T_{30}$ committed first, at 180, against $T_{50}$'s attempt at 190. **$T_{30}$ wins; $T_{50}$ aborts.**

Note this is snapshot isolation working exactly as designed. Allowing $T_{50}$ to commit would produce a lost update — it computed its new value from $v_2$, unaware of $v_3$ — and the write-write conflict rule exists precisely to catch that. What the rule cannot catch is P2's write skew, where the transactions write *different* rows and no conflict arises.

</details>

## Flashback

**From Lesson 4.3 (two-phase locking, deadlock & granularity):** Trace

$$r_1(M)\ \ r_2(M)\ \ w_2(M)\ \ w_1(M)$$

under strict 2PL.

(a) Give the lock requested at each step and whether it is granted or blocked.
(b) State whether a deadlock occurs and give the wait-for cycle if so.
(c) Name the mechanism responsible and the standard application-level fix.

<details>
<summary>Solution</summary>

(a)

| step | request | outcome |
|---|---|---|
| 1 | $T_1$ wants S(M) | **granted** |
| 2 | $T_2$ wants S(M) | **granted** — shared locks are compatible |
| 3 | $T_2$ wants X(M) | **blocked** by $T_1$'s S(M) |
| 4 | $T_1$ wants X(M) | **blocked** by $T_2$'s S(M) |

(b) **Yes, deadlock**, with the wait-for cycle $T_1 \to T_2 \to T_1$.

Both transactions touch a single item, so there is no lock ordering to have got wrong — the usual advice about acquiring locks in a consistent global order is vacuous when there is one lock.

(c) The mechanism is the **lock upgrade**: each transaction holds a shared lock and needs to convert it to exclusive, and neither conversion can proceed while the other's shared lock stands.

**The standard fix is to take the exclusive lock up front** rather than upgrading, which in SQL is `SELECT ... FOR UPDATE`. The second transaction then blocks at step 2 instead of deadlocking at step 4, waits for the first to commit, and proceeds against the current value.

This is the most common deadlock in production systems, because read-then-write on the same row is the most natural thing an application does.

</details>

## Connections

- **Backward:** every level here is a relaxation of the strict 2PL of [4.3](04-03-two-phase-locking-deadlock-and-granularity.md) — Read Committed releases shared locks early, Repeatable Read holds them, Serializable adds predicate locking, and MVCC abandons read locks altogether. Write skew is a cycle in the sense of [4.2](04-02-serializability-and-precedence-graphs.md) that snapshot isolation's conflict rule cannot see, because it inspects only write-write edges.
- **Forward:** [4.5](04-05-recovery-write-ahead-logging-and-aries.md) supplies the log that makes any of these survivable, and MVCC's version chains are close cousins of the log's before-images. [4.6](04-06-nosql-and-distributed-data.md) takes the same "trade correctness for performance, deliberately and with your eyes open" argument and applies it across machines.
- **Sideways:** MVCC is copy-on-write with readers pinned to a snapshot, the same structure as a persistent data structure or a filesystem snapshot — and it has the same characteristic failure, that old versions cannot be freed while any reader might still want them. The version-bloat problem in P3 is a reachability problem, and its fix is the same as for any leak: find the root that is holding on.
