# Database Systems · Lesson 4.1: Transactions & the ACID properties

> ⏱ ~15 min · Module 4: Transactions, concurrency & beyond · Builds on: [3.1 (storage & the buffer manager)](03-01-storage-pages-and-the-buffer-manager.md) · Unlocks: [4.2 (serializability)](04-02-serializability-and-precedence-graphs.md)

## Why this matters

Everything so far assumed one user and no crashes. Both assumptions are false, and dropping them breaks things that nothing in Modules 1 to 3 can fix.

A schema in BCNF still ends up inconsistent if a transfer is interrupted between its two writes. A perfect query plan still returns nonsense if another transaction modifies the rows halfway through. Normalization prevents a *fact* from being stored twice; it says nothing about a *process* being half-finished.

The transaction is the abstraction that closes the gap, and it is one of the most successful abstractions in computing: it lets you write code as if you were the only user and nothing ever failed, and it makes that fiction true.

## The idea

A **transaction** is a group of operations that the system treats as a single indivisible unit. It either commits, and all of its effects are permanent, or it aborts, and none of them ever happened.

The motivating example is a transfer of 200 pounds from account A to account B. It is two writes: debit A, credit B. Individually both are fine. **The invariant lives between them** — the total across accounts is unchanged — and no single write preserves it. Crash between the two, as in the figure, and the database holds a state in which 200 pounds have simply left the system.

Note what is *not* wrong: no write was incorrect, no constraint was violated by either row, no index is corrupt. The problem is that a set of writes was incomplete, and only something that knows the writes belong together can notice.

Four guarantees are conventionally named, and it is worth seeing that they answer four different threats:

- **Atomicity** — against a failure partway through.
- **Consistency** — against a state your rules forbid.
- **Isolation** — against another transaction interfering.
- **Durability** — against a crash after you were told it worked.

They are usually recited as one word. They are four separate mechanisms, and the rest of Module 4 builds them: isolation in [4.2](04-02-serializability-and-precedence-graphs.md) to [4.4](04-04-isolation-levels-and-mvcc.md), atomicity and durability in [4.5](04-05-recovery-write-ahead-logging-and-aries.md).

## The formal version

> **Transaction.** A sequence of read and write operations ending in **commit** or **abort**, which the system guarantees to execute as an indivisible unit.

The database sees only reads and writes. It does not know what a "transfer" is; it knows that operations between `BEGIN` and `COMMIT` must succeed or fail together. That ignorance is deliberate — it is what lets one mechanism serve every application.

> **Atomicity.** Either all of a transaction's writes take effect, or none do.

The mechanism is **undo**: the system records what each value was *before* the change, so an abort can put it back. Note that a transaction can abort for three quite different reasons — the application calls `ROLLBACK`, a constraint is violated, or the system chooses to kill it (a deadlock victim, [4.3](04-03-two-phase-locking-deadlock-and-granularity.md), or a crash). All three take the same path.

> **Consistency.** A transaction moves the database from one state satisfying all declared constraints to another.

This letter is the odd one. The other three are the database's job outright; **consistency is a shared responsibility.** The system enforces what you *declared* — keys, foreign keys, `CHECK` constraints — and it will happily let a transaction that satisfies every declared constraint move a debit without its credit. The "total across accounts is unchanged" invariant is nowhere in the schema, so nothing enforces it, and what actually protects it is atomicity plus correct application code.

> **Isolation.** Concurrent execution of a set of transactions produces the same result as *some* serial execution of them.

The word "some" carries the weight. Isolation does not promise a particular order and does not forbid interleaving. It promises only that the outcome is indistinguishable from *an* order — which is exactly the definition [4.2](04-02-serializability-and-precedence-graphs.md) makes precise and [4.3](04-03-two-phase-locking-deadlock-and-granularity.md) enforces.

> **Durability.** Once a commit returns, its effects survive any subsequent crash.

The mechanism is **redo**, and the reason it is needed is the no-force policy of [3.1](03-01-storage-pages-and-the-buffer-manager.md): commit does not write the data pages, so the durable record is in the log, not the table.

> **Transaction states.** Active → partially committed → **committed**, or Active → failed → **aborted**. A committed transaction cannot be undone; the only remedy for a mistaken commit is a **compensating transaction** that does the inverse.

## Picture

![On the left the seven steps of a transfer with a crash marked after the third, leaving A debited and B never credited; on the right the four ACID letters each paired with what it promises and the mechanism that delivers it, atomicity by undo, isolation by two-phase locking or MVCC, durability by redo](assets/04-01-fig1.svg)

Read the right panel's last column. Two of the four are delivered by the log, which is why [4.5](04-05-recovery-write-ahead-logging-and-aries.md) is the lesson that discharges most of this one's promises.

## Worked examples

**Example 1 — locating each guarantee's failure.**

The transfer again: debit A by 200, credit B by 200. Four things go wrong, one per letter.

**(a) The machine loses power after the debit.** A is 800, B is still 500. Total fell by 200.

The violated property is **atomicity**. On restart, recovery finds an uncommitted transaction with a change on disk and **undoes** it, restoring A to 1,000. Note the requirement this places on the log: it must hold the *before* image, 1,000, because the page itself no longer has it.

**(b) The credit would push B over a declared limit**, and a `CHECK` constraint rejects it.

This is **consistency** working. The write fails, the transaction aborts, and atomicity undoes the debit. The two properties compose: consistency detects, atomicity repairs.

**(c) Another transaction reads A and B between the two writes**, and reports a total 200 short.

**Isolation** violated. Nothing is corrupt and nothing crashed — the reader saw a real intermediate state that was never meant to be visible. This is the failure mode that has no trace afterwards: the money arrives, the report was wrong, and the database looks perfect. It is the hardest of the four to notice and the subject of the next three lessons.

**(d) The commit returns, and the machine loses power before the pages reach disk.**

**Durability** violated, unless the log was written first. Under no-force ([3.1](03-01-storage-pages-and-the-buffer-manager.md)) the data pages are still dirty in the buffer pool at commit, so the only durable evidence is the log record, and recovery **redoes** the change from it.

**Notice the symmetry between (a) and (d).** In (a) the disk holds a change that should not be there and undo removes it; in (d) the disk lacks a change that should be there and redo installs it. Steal makes the first possible, no-force makes the second, and a system choosing both needs both — which is the entire design brief of [4.5](04-05-recovery-write-ahead-logging-and-aries.md).

**Example 2 — the letter that is not the database's job.**

A payroll system has an invariant: the sum of all department budgets must equal the company total. A transaction moves 50,000 from Engineering to Sales.

**What the database enforces.** Suppose the schema declares `budget >= 0` and a foreign key from `department` to `company`. Then a transaction that debits Engineering to a negative figure is rejected, and one referencing a nonexistent company is rejected. Those are genuine consistency guarantees.

**What it does not enforce.** A transaction that debits Engineering by 50,000 and credits Sales by 5,000 — a typo — violates the invariant and satisfies every declared constraint. Both rows are non-negative, both companies exist. **The database commits it without complaint**, and the invariant that mattered most is the one nothing was checking.

So consistency in ACID is narrower than it sounds. It means "the constraints you declared still hold," and the sum-of-budgets rule is not among them unless you write it down. Three ways to do so, in decreasing order of how reliably they hold:

1. **Declare it**, where the constraint language can express it — a `CHECK` over a single row, an assertion over a table where the system supports one. Cheap and unbypassable.
2. **Derive rather than store.** If the company total is a `SUM` over departments rather than a stored column, the invariant is true by construction and cannot be violated. This is the same "do not store what is determined" argument as [2.4](02-04-anomalies-and-the-normal-forms.md), applied to a cross-row fact.
3. **Enforce it in application code inside a transaction.** Always available, and it holds only as long as every writer remembers — which is exactly the guarantee normalization exists to avoid relying on.

**The general point:** atomicity, isolation and durability are properties of the *mechanism* and hold whatever you write. Consistency is a property of what you *declared*, and the gap between "invariants my business has" and "constraints my schema states" is where correctness quietly leaks out.

## Watch out

- **You might think ACID's C means the database keeps your data sensible.** It means the database enforces the constraints you declared. An invariant you never wrote down is not protected, and the ones people care most about are usually the ones the constraint language cannot express.
- **You might think isolation means transactions do not interleave.** It means the result is indistinguishable from *some* serial order. Heavy interleaving is normal and desirable; what is forbidden is an outcome no serial order could produce.
- **You might think an abort is an error case.** It is a normal outcome. Deadlock victims ([4.3](04-03-two-phase-locking-deadlock-and-granularity.md)) and constraint violations abort routinely, and correct application code retries rather than treating it as a failure.
- **You might think a committed transaction can be rolled back.** It cannot, by definition of the D. The remedy is a **compensating transaction** — a new transaction performing the inverse — which is a different thing with different visibility: the erroneous state was real and other transactions may have seen it.

## One-liner

> A transaction lets you write code as if you were alone and nothing ever failed — atomicity and durability are delivered by the log, isolation by the scheduler, and consistency only to the extent that you declared it.

## Problems

**P1 (🟢)** For each scenario, name the ACID property violated and the mechanism that prevents it.

(a) A transaction deletes a customer, and the machine crashes before its orders are deleted, leaving orders pointing at nothing.
(b) A commit returns to the client; the machine loses power one second later and the change is gone.
(c) A reporting query sums a column while a transfer is halfway through, and reports a total that was never true.
(d) An insert supplies a `department_id` that no department has, and it is rejected.

**P2 (🟡)** A booking transaction does: read `seats_left` (currently 3), compute $3 - 1 = 2$, write `seats_left = 2`, insert a `booking` row, commit.

(a) The machine crashes after the write to `seats_left` and before the insert. Give the state on disk and the property violated.
(b) Give what recovery must do, and state which of undo and redo it uses.
(c) A second transaction runs the identical sequence concurrently, and both read `seats_left = 3` before either writes. Give the final value of `seats_left`, the number of booking rows, and the property violated.
(d) State whether the anomaly in (c) would be caught by a `CHECK (seats_left >= 0)` constraint, and say what that tells you about the relationship between consistency and isolation.

**P3 (🔴, optional)** A ticketing system holds `event(event_id, capacity, sold)` and `ticket(ticket_id, event_id)`. The business invariant is that `sold` equals the number of `ticket` rows for that event, and that `sold` never exceeds `capacity`.

(a) State which part of the invariant a `CHECK (sold <= capacity)` constraint enforces and which part it does not.
(b) Give a two-transaction interleaving in which both transactions satisfy every declared constraint at commit and the invariant is nonetheless violated. State the final values.
(c) Give the schema change that makes the first half of the invariant true by construction, and name the cost it introduces.
(d) The team instead keeps `sold` and enforces the invariant in application code inside a transaction. Name the isolation level at which this is still unsafe and the one at which it becomes safe, and give the reason in one clause. (You may answer in terms of "reads must not go stale between the read and the write" if you have not yet met isolation levels.)

<details>
<summary>Solutions</summary>

**P1**

(a) **Atomicity.** The delete of the customer and the deletes of its orders are one unit, and half of it happened. Prevented by **undo**: recovery removes the uncommitted customer delete, restoring the referenced row.

(b) **Durability.** A commit that does not survive is not a commit. Prevented by **redo** from the write-ahead log, which was made durable before the commit returned.

(c) **Isolation.** The reader observed an intermediate state that no serial order produces. Prevented by the concurrency-control mechanism — **two-phase locking or MVCC** ([4.3](04-03-two-phase-locking-deadlock-and-granularity.md), [4.4](04-04-isolation-levels-and-mvcc.md)).

(d) **Consistency**, and this one is the mechanism *working* rather than failing. The declared **foreign-key constraint** rejected the write, and atomicity then undoes anything the transaction had already done.

**P2**

(a) Disk holds `seats_left = 2` with **no corresponding booking row**. A seat has been consumed and nobody holds it.

**Atomicity violated** — the two writes are one unit and only the first happened.

(b) Recovery must **undo** the write, restoring `seats_left = 3`. The transaction never committed, so none of its effects may survive.

It uses **undo only**. Redo applies to committed transactions whose changes have not reached disk; this one is uncommitted, and the direction of repair is the opposite.

(c) Both read 3, both compute 2, both write 2. **Final `seats_left` is 2, and there are 2 booking rows.**

**Isolation violated.** Two seats were sold and only one was deducted. No serial order produces this: running them one after the other gives `seats_left = 1` with 2 bookings. This is the **lost update** anomaly, and it is the canonical reason isolation is not optional.

(d) **No, the `CHECK` would not catch it.** The constraint tests `seats_left >= 0`, and 2 is comfortably non-negative. Every declared constraint holds at both commits.

**What this tells you:** consistency constraints are evaluated **per transaction against the state it produces**, so they cannot see that another transaction's work was overwritten. A constraint checks a *state*; an isolation anomaly is about a *history*. The two properties are genuinely independent, and no amount of declared constraints substitutes for isolation.

This is worth holding onto, because "we validate everything in the database" is a common and false sense of safety. The lost update leaves a state that passes every check.

**P3**

(a) `CHECK (sold <= capacity)` enforces **the second half** — that `sold` never exceeds capacity — and only as a property of the `event` row it is attached to.

It **does not** enforce the first half, that `sold` equals the number of `ticket` rows. That is a cross-table count, and a row-level `CHECK` cannot see another table. A transaction that increments `sold` without inserting a ticket, or inserts a ticket without incrementing `sold`, passes the constraint and breaks the invariant.

(b) Start from `capacity = 100`, `sold = 98`, 98 ticket rows.

| step | $T_1$ | $T_2$ |
|---|---|---|
| 1 | read `sold` = 98 | |
| 2 | | read `sold` = 98 |
| 3 | insert ticket | |
| 4 | | insert ticket |
| 5 | write `sold` = 99 | |
| 6 | | write `sold` = 99 |
| 7 | commit | |
| 8 | | commit |

**Final state: `sold` = 99, and 100 ticket rows.**

Both transactions satisfy `sold <= capacity` at commit — 99 is under 100 — and both inserts are valid. Every declared constraint holds, and the invariant is violated: the count and the stored figure disagree by one.

This is the lost update of P2(c) again, and it shows the general shape: a **read-modify-write on a stored aggregate** is unsafe under any isolation level that permits the two reads to see the same value.

(c) **Drop the `sold` column and derive it**, replacing every reference with

```sql
SELECT COUNT(*) FROM ticket WHERE event_id = ?
```

or a view over that count. The first half of the invariant then holds **by construction** — there is no second copy of the fact to disagree with the first — which is the [2.4](02-04-anomalies-and-the-normal-forms.md) argument applied to a cross-row aggregate.

**The cost is query time.** The count is no longer one column read but an aggregation over the tickets of that event, which needs an index on `ticket(event_id)` and still costs more than a single lookup. Worse, the `sold <= capacity` check now has to be expressed against a computed value rather than a stored one, which most systems cannot do in a `CHECK` at all — so it moves into the transaction or a trigger.

That trade is the general one for every derived-versus-stored decision, and it is the same one a materialized view makes in [1.6](01-06-subqueries-exists-and-views.md): correct and slower, or fast and requiring discipline to stay true.

(d) **Unsafe at any level that permits a stale read between the read and the write** — concretely, at Read Committed and at Snapshot Isolation, both transactions read 98 and neither is told the other wrote it.

**Safe at Serializable**, because a serializable scheduler must produce an outcome equivalent to running one transaction entirely before the other, and in every such order the second reads 99 and writes 100.

**The reason in one clause:** the invariant depends on the value read still being current when the write lands, and only serializability guarantees that no other transaction changed it in between.

*(A practical alternative, available at weaker levels, is to make the update read-free: `UPDATE event SET sold = sold + 1 WHERE ...` performs the read and write as one atomic operation under the row's lock, so no stale value can intervene. This is the standard fix and it costs nothing — the anomaly comes from splitting the read from the write, not from the weak isolation as such.)*

</details>

## Flashback

**From Lesson 3.7 (query optimization & join ordering):** Three tables after filters: $D$ (40 rows), $E$ (600,000), $G$ (5,000,000). Join predicates connect $D$–$E$ and $E$–$G$. The cardinalities are $|DE| = 1{,}200$, $|EG| = 5{,}000{,}000$, and $|DEG| = 10{,}000$. Cost is the sum of intermediate sizes.

(a) Name the two-table subset that is disconnected and excluded.
(b) Give the cost of $(D \bowtie E) \bowtie G$ and of $(E \bowtie G) \bowtie D$.
(c) Give the winner, the ratio, and the reason in one clause.

<details>
<summary>Solution</summary>

(a) **$DG$.** No join predicate connects $D$ and $G$, so combining them would require a Cartesian product of $40 \times 5{,}000{,}000 = 2 \times 10^8$ rows. The DP skips such subsets entirely.

(b) $(D \bowtie E) \bowtie G$: intermediate 1,200, result 10,000.

$$1{,}200 + 10{,}000 = \mathbf{11{,}200}$$

$(E \bowtie G) \bowtie D$: intermediate 5,000,000, result 10,000.

$$5{,}000{,}000 + 10{,}000 = \mathbf{5{,}010{,}000}$$

(c) **$(D \bowtie E) \bowtie G$ wins**, by a ratio of $5{,}010{,}000 / 11{,}200 \approx \mathbf{447}$.

**The reason:** joining the 40-row table first collapses $E$ from 600,000 rows to 1,200 before $G$ is touched, while the other order builds a 5,000,000-row intermediate — the full size of $G$, since that join is unfiltered — and then discards 99.8 percent of it.

The shape is the chain $D - E - G$ with the selective table at one end, which is the case from [3.7](03-07-query-optimization-and-join-ordering.md) where join order matters most.

</details>

## Connections

- **Backward:** the no-force policy chosen in [3.1](03-01-storage-pages-and-the-buffer-manager.md) is exactly why durability needs redo, and steal is why atomicity needs undo — that lesson's two-by-two matrix is this lesson's A and D. The consistency discussion is the normalization argument of [2.4](02-04-anomalies-and-the-normal-forms.md) applied to invariants that span rows rather than columns.
- **Forward:** [4.2](04-02-serializability-and-precedence-graphs.md) makes "equivalent to some serial order" precise and gives the test; [4.3](04-03-two-phase-locking-deadlock-and-granularity.md) gives the protocol that guarantees it; [4.4](04-04-isolation-levels-and-mvcc.md) is what happens when you trade some of it away deliberately; [4.5](04-05-recovery-write-ahead-logging-and-aries.md) builds the log that delivers A and D.
- **Sideways:** a transaction is a critical section with a rollback, and the lost update in P2(c) is the racy counter of [`operating-systems` 2.1](../../operating-systems/lessons/02-01-race-conditions-and-critical-sections.md) — two readers, one stale value, one increment silently discarded. What a database adds is that the critical section can span many objects, can be abandoned safely, and survives the machine dying.
