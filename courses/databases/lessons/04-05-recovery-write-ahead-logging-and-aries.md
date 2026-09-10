# Database Systems · Lesson 4.5: Recovery — write-ahead logging & ARIES

> ⏱ ~15 min · Module 4: Transactions, concurrency & beyond · Builds on: [4.1 (transactions & ACID)](04-01-transactions-and-the-acid-properties.md), [3.1 (storage & the buffer manager)](03-01-storage-pages-and-the-buffer-manager.md) · Unlocks: [4.6 (NoSQL & distributed data)](04-06-nosql-and-distributed-data.md)

## Why this matters

Two lessons have deferred their debts to this one. [3.1](03-01-storage-pages-and-the-buffer-manager.md) chose **steal** and **no-force** for the buffer manager, which means the disk may hold uncommitted changes and may lack committed ones. [4.1](04-01-transactions-and-the-acid-properties.md) promised atomicity and durability without saying how.

Both debts are paid by one structure: a **log** written before the data. The rule is a single sentence, the recovery algorithm built on it has three passes, and together they are the reason a database can be killed mid-write and come back consistent — which is not true of most software you will use today.

The algorithm is ARIES, published in 1992, and it is what essentially every relational system implements.

## The idea

The log is a sequential file of records describing every change, each with a **log sequence number** — an LSN, monotonically increasing. Every data page also records the LSN of the last change applied to it, its **pageLSN**, and that one field is what makes recovery idempotent.

Each update record holds both a **before image** and an **after image**: what the value was and what it became. Under steal you may need the before image to undo; under no-force you may need the after image to redo. Choosing both policies means logging both.

Then the rule that makes it work:

> **Write-ahead logging: the log record describing a change must reach durable storage before the changed data page does.**

That ordering is the whole guarantee. If the page made it to disk, the log record describing it is there too, so recovery can undo it. And a second rule for the other direction: **all of a transaction's log records must be durable before its commit returns**, so recovery can redo it.

The recovery algorithm then has three passes over the log, and the surprising one is the middle:

1. **Analysis** — forward, to find what was dirty and who was running.
2. **Redo** — forward, reapplying *everything*, including changes by transactions that never committed.
3. **Undo** — backward, removing the changes of transactions that never committed.

Redoing a change you are about to undo looks like waste. It is the trick that makes the algorithm correct: after redo, the database is in **exactly the state it was in at the crash**, no matter which pages happened to reach disk. Undo then operates on a known state rather than a partially-written one, and needs no special cases. ARIES calls this **repeating history**.

## The formal version

> **Log record.** $\langle \text{LSN},\ \text{txn},\ \text{page},\ \text{before},\ \text{after},\ \text{prevLSN} \rangle$. The `prevLSN` chains a transaction's records backward, so undo can walk one transaction's changes without scanning the whole log.

> **pageLSN.** Every page stores the LSN of the most recent update applied to it. Recovery skips a redo when $\text{pageLSN} \geq \text{LSN}$, which is what makes redo **idempotent** — recovery can crash and restart any number of times without double-applying.

> **The WAL rule.** Before writing page $p$ to disk, flush the log through $\text{pageLSN}(p)$.
> **The commit rule.** Before a commit returns, flush the log through that transaction's commit record.

> **Fuzzy checkpoint.** Periodically write a checkpoint record containing the **dirty page table** — each dirty page with the **recLSN**, the LSN of the update that first dirtied it — and the **transaction table** — each active transaction with its **lastLSN**.

The word *fuzzy* matters: the checkpoint does not flush any pages or stop any transactions. It merely records what is dirty, which takes microseconds. Its purpose is to bound how far back recovery must read.

> **ARIES, three passes.**
>
> **Analysis.** Scan forward from the checkpoint. Rebuild the dirty page table and the transaction table. Transactions still in the table at the end of the log are **losers**; those with a commit record are **winners**.
>
> **Redo.** Scan forward from the smallest recLSN in the dirty page table. Reapply every update — winners and losers alike — unless the page is not in the dirty page table, or its recLSN exceeds the record's LSN, or the page's pageLSN already reaches it.
>
> **Undo.** Walk the losers' records backward via `prevLSN`, restoring each before image and writing a **compensation log record** for each.

> **Compensation log record (CLR).** A record describing an undo, carrying an `undoNext` pointer to the next record still needing undo.

CLRs are what make **undo itself idempotent**. If the machine crashes during recovery, the next attempt reads the CLRs, sees which undos already happened, and follows `undoNext` past them. **A CLR is never undone** — undoing an undo would be a redo, which repeating history already handles.

## Picture

![The log at the moment of a crash showing nine records from LSN 10 to LSN 90 with a checkpoint at 50 and a commit at 70, beside the three ARIES passes: analysis identifying T1 and T3 as losers, redo reapplying four updates including a loser's, and undo writing three compensation log records](assets/04-05-fig1.svg)

Note the highlighted line in the redo pass: LSN 90 belongs to $T_3$, a loser, and is redone anyway. That is repeating history, and the undo pass removes it three lines later.

## Worked examples

**Example 1 — recovering from the crash in the figure.**

The log at the crash, with a fuzzy checkpoint at LSN 50 recording dirty pages $\{P_5 \to 20,\ P_3 \to 40\}$ and active transactions $\{T_1 \to 20,\ T_2 \to 40\}$:

| LSN | record |
|---|---|
| 10 | begin $T_1$ |
| 20 | update $T_1$, $P_5$, $A \to B$ |
| 30 | begin $T_2$ |
| 40 | update $T_2$, $P_3$, $C \to D$ |
| 50 | checkpoint |
| 60 | update $T_1$, $P_5$, $B \to E$ (prevLSN 20) |
| 70 | commit $T_2$ |
| 80 | begin $T_3$ |
| 90 | update $T_3$, $P_3$, $D \to F$ |

On disk at the crash: $P_5$ has pageLSN 20; $P_3$ was never written out.

**Analysis**, forward from LSN 50. LSN 60 updates $T_1$'s lastLSN to 60. LSN 70 removes $T_2$ from the transaction table — it committed. LSN 80 adds $T_3$; LSN 90 sets its lastLSN to 90 and leaves $P_3$'s recLSN at 40, since it was already dirty.

$$\text{dirty pages: } \{P_5 \to 20,\ P_3 \to 40\} \qquad \text{losers: } T_1, T_3 \qquad \text{winner: } T_2$$

**Redo**, forward from the smallest recLSN, which is 20:

| LSN | decision |
|---|---|
| 20 | **skip** — $P_5$'s pageLSN on disk is already 20 |
| 40 | **redo** $P_3 := D$ |
| 60 | **redo** $P_5 := E$ |
| 90 | **redo** $P_3 := F$ — a loser's write, redone anyway |

After redo, $P_5 = E$ and $P_3 = F$: **exactly the state at the crash.**

**Undo**, backward over the losers' records, highest LSN first:

| new LSN | action |
|---|---|
| 100 | CLR: undo LSN 90, $P_3 := D$, undoNext = none (end of $T_3$) |
| 110 | CLR: undo LSN 60, $P_5 := B$, undoNext = 20 |
| 120 | CLR: undo LSN 20, $P_5 := A$, undoNext = none |

**Final state: $P_3 = D$, $P_5 = A$.**

Check it against what should have happened. $T_2$ committed and set $P_3$ to $D$, so $D$ must survive — it does. $T_1$ and $T_3$ never committed, so $P_5$ must return to $A$ and $P_3$ must lose $T_3$'s $F$ — both hold. **The result is exactly the state a serial execution of the winners alone would have produced**, which is the guarantee.

**Example 2 — why the write-ahead rule is not negotiable.**

Suppose the WAL rule were dropped: pages may reach disk whenever the buffer manager likes, and log records whenever the log manager likes.

**The failure.** $T_1$ updates $P_5$ from $A$ to $B$. The buffer manager steals the frame and writes $P_5 = B$ to disk. The log record describing the change is still in the log buffer. The machine loses power.

On restart, the disk holds $P_5 = B$ and the log holds no record of $T_1$ having touched $P_5$. **Recovery cannot know $B$ is wrong, and could not restore $A$ if it did — the before image existed only in the lost log buffer.** The database is silently corrupt: no error, no crash, just a value no committed transaction ever produced.

The WAL rule closes this precisely. Flushing the log through the page's pageLSN before writing the page guarantees that any change on disk has a durable before image behind it. **Every stolen page is undoable.**

**The commit rule closes the mirror hole.** Under no-force, commit does not write data pages, so a commit whose log records were still buffered would be lost entirely — durability violated. Flushing the log through the commit record before returning means the after images are durable, so redo can reconstruct the change.

**And note what this costs.** Commit becomes a synchronous write to the log. That is one **sequential** write to one file, rather than the scattered random writes that forcing every dirty page would require — which is the whole reason no-force is affordable. **The log turns many random writes into one sequential one**, and that transformation, not the algorithm's cleverness, is why write-ahead logging is fast enough to use.

Two consequences follow that are worth recognizing in practice. Commit latency is bounded below by one durable log write, which is why systems offer **group commit**, batching several transactions into one flush. And the log is the system's throughput bottleneck under write-heavy load, which is why it is conventionally given its own device.

## Watch out

- **You might think redo should skip transactions that will be undone.** Repeating history is what makes undo simple: after redo the state is exactly the crash state, so undo needs no knowledge of which pages happened to reach disk. Skipping losers would reintroduce every case ARIES exists to avoid.
- **You might think a checkpoint flushes dirty pages.** A *fuzzy* checkpoint records what is dirty and flushes nothing, which is why it costs microseconds and can run often. Its only job is to bound where the analysis pass starts.
- **You might think undo should be undone if recovery crashes.** A CLR is never undone. Recovery restarts, sees the CLRs, and follows their `undoNext` pointers past the work already done — which is how recovery survives crashing during recovery.
- **You might think the log is a debugging aid.** It is the authoritative record. Under no-force, a committed change may exist *only* in the log at commit time, so the log is the database and the data pages are a cache of it.

## One-liner

> Write the log before the page and you can always undo; flush the log at commit and you can always redo — then repeat history before undoing, so undo never has to ask which pages made it to disk.

## Problems

**P1 (🟢)** For each situation, state whether recovery must **undo**, **redo**, or do **nothing**.

(a) A transaction committed; its updated page is still dirty in memory at the crash.
(b) A transaction did not commit; its updated page reached disk before the crash.
(c) A transaction committed and its updated page reached disk before the crash.
(d) A transaction did not commit and its updated page never reached disk.

**P2 (🟡)** A log holds these records, with a fuzzy checkpoint at LSN 30 recording dirty pages $\{P_1 \to 20\}$ and active transactions $\{T_1 \to 20\}$:

| LSN | record |
|---|---|
| 10 | begin $T_1$ |
| 20 | update $T_1$, $P_1$, $10 \to 20$ |
| 30 | checkpoint |
| 40 | begin $T_2$ |
| 50 | update $T_2$, $P_2$, $5 \to 7$ |
| 60 | update $T_1$, $P_1$, $20 \to 30$ (prevLSN 20) |
| 70 | commit $T_1$ |
| 80 | update $T_2$, $P_2$, $7 \to 9$ (prevLSN 50) |

Then the machine crashes. On disk, $P_1$ has pageLSN 20 and $P_2$ has pageLSN 0.

(a) Give the dirty page table and the transaction table after analysis, and name the losers and winners.
(b) Give the LSN the redo pass starts from, and for each update record state whether it is redone or skipped, with the reason.
(c) Give the undo actions in order, with the CLR's LSN and `undoNext` value for each.
(d) Give the final values of $P_1$ and $P_2$, and justify each in one clause.

**P3 (🔴, optional)** A system uses **no-steal** and **force** instead of steal and no-force.

(a) State which of undo and redo the recovery algorithm still needs, and why the other is unnecessary.
(b) A transaction updates 400 distinct pages. Give the number of page writes its commit triggers under force, and compare with no-force.
(c) The buffer pool has 300 frames and a transaction needs to modify 400 distinct pages. State what happens under no-steal and why.
(d) A colleague proposes keeping steal and no-force but logging only after images, arguing that redo alone suffices because "we can always replay the log from the beginning." Give the precise scenario that breaks this, and state what it would cost to make the proposal work.

<details>
<summary>Solutions</summary>

**P1**

(a) **Redo.** The transaction committed, so durability requires its change to survive, and the disk does not have it. This is the case **no-force** creates.

(b) **Undo.** The transaction never committed, so its change must not survive, and the disk has it. This is the case **steal** creates.

(c) **Nothing.** The disk already holds exactly what should be there. Redo will examine the record and skip it, because the page's pageLSN already reaches the record's LSN.

(d) **Nothing.** The change never reached disk and should not survive, so the disk is already correct.

The four cases are the complete grid, and they are why a steal plus no-force system needs both operations while the other three corners of [3.1](03-01-storage-pages-and-the-buffer-manager.md)'s matrix need at most one.

**P2**

(a) Scanning forward from LSN 30:

- LSN 40 adds $T_2$ to the transaction table.
- LSN 50 sets $T_2$'s lastLSN to 50 and adds $P_2$ to the dirty page table with **recLSN 50**.
- LSN 60 sets $T_1$'s lastLSN to 60; $P_1$ is already dirty, so its recLSN stays 20.
- LSN 70 **removes $T_1$** — it committed.
- LSN 80 sets $T_2$'s lastLSN to 80.

$$\text{dirty page table: } \{P_1 \to 20,\ P_2 \to 50\} \qquad \text{transaction table: } \{T_2 \to 80\}$$

**Loser: $T_2$. Winner: $T_1$.**

(b) Redo starts at the **smallest recLSN in the dirty page table, which is 20**.

| LSN | decision | reason |
|---|---|---|
| 20 | **skip** | $P_1$'s pageLSN on disk is 20, already at or past this record |
| 50 | **redo** $P_2 := 7$ | $P_2$ is dirty, recLSN 50 is not past 50, pageLSN 0 is below 50 |
| 60 | **redo** $P_1 := 30$ | $P_1$ is dirty, recLSN 20 is below 60, pageLSN 20 is below 60 |
| 80 | **redo** $P_2 := 9$ | a **loser's** update, redone anyway — repeating history |

After redo: $P_1 = 30$, $P_2 = 9$ — the exact state at the crash.

(c) Undo covers only $T_2$, walking backward from its lastLSN of 80 via `prevLSN`:

| new LSN | action |
|---|---|
| 90 | CLR: undo LSN 80, $P_2 := 7$, **undoNext = 50** |
| 100 | CLR: undo LSN 50, $P_2 := 5$, **undoNext = none** — $T_2$ is fully undone |

(d) **$P_1 = 30$.** $T_1$ committed, so durability requires its final value to survive; redo installed it because the page had not reached disk.

**$P_2 = 5$.** $T_2$ never committed, so atomicity requires none of its writes to survive; undo restored the original value through two CLRs.

Note that $P_2$ was redone to 9 and then undone back to 5 — work that looks wasted and is what keeps the undo pass free of special cases.

**P3**

(a) **Redo is unnecessary; undo is unnecessary too.** Under **force**, every committed transaction's pages are on disk before its commit returns, so no committed change can be missing — **redo is not needed**. Under **no-steal**, no uncommitted page ever reaches disk, so no uncommitted change can be present — **undo is not needed**.

Recovery does essentially nothing: the disk is already the committed state. That is the top-left corner of [3.1](03-01-storage-pages-and-the-buffer-manager.md)'s matrix, and it is why that corner is theoretically attractive and practically unusable, as (b) and (c) show.

(b) Under **force**, commit must write all 400 modified pages to disk: **400 page writes**, and they are scattered across the file, so they are random writes.

Under **no-force**, commit writes **one** sequential flush of the log — through the commit record — and the 400 data pages are written lazily, whenever the buffer manager gets to them, possibly coalescing several changes to one page into a single write.

**The ratio is 400 random writes against 1 sequential write.** At roughly 10 milliseconds per random disk write that is 4 seconds of commit latency against a fraction of a millisecond, and the gap is why no-force is universal.

(c) **The transaction cannot complete.** Under no-steal, a dirty page belonging to an uncommitted transaction may never be evicted. After 300 pages the buffer pool is full and every frame holds a page this transaction dirtied, so there is no legal eviction candidate. The 301st page has nowhere to go.

The system must either block indefinitely or abort the transaction. **A transaction touching more pages than the buffer pool has frames simply cannot run**, which rules out every bulk update, index rebuild and nightly batch job — the transactions most likely to be long. That, more than the write cost, is what makes no-steal unusable.

(d) **The scenario that breaks it:** a transaction updates a page, the buffer manager **steals** the frame and writes the page to disk, and the transaction then aborts — or the machine crashes before it commits.

The disk now holds an uncommitted value. Recovery must restore the original, and with only after images logged, **the original value exists nowhere**. It was overwritten in the page, and the log never recorded it. The data is unrecoverable.

"Replay the log from the beginning" does not help, and the reason is worth being precise about. Replaying after images reconstructs the sequence of values a page took, so in principle the pre-transaction value could be recovered by replaying every record for that page from the start of time. But that requires the log to be retained **forever** — no truncation, no archiving — and recovery time to grow without bound with the age of the database. It also fails outright for any page whose history predates the oldest retained log record, which after the first log truncation is most of them.

**So the cost of making the proposal work is unbounded log retention and unbounded recovery time**, which is not a trade anyone accepts. Logging the before image costs a few bytes per update and bounds both.

*(The proposal would be sound under **no-steal**, where no uncommitted page can reach disk and undo is genuinely unnecessary — which is exactly the top-right corner of the matrix in [3.1](03-01-storage-pages-and-the-buffer-manager.md). The colleague has the right idea attached to the wrong buffer policy.)*

</details>

## Flashback

**From Lesson 4.4 (isolation levels & MVCC):** A hospital requires at least one doctor on call. Two doctors, Adeyemi and Bhatt, are both on call. Under **snapshot isolation**, $T_1$ removes Adeyemi and $T_2$ removes Bhatt, concurrently; each reads the roster and checks that one will remain.

(a) Give the final roster if both commit.
(b) State whether snapshot isolation aborts either transaction, with the reason in terms of its conflict rule.
(c) Name the anomaly and give one fix that does not change the isolation level.

<details>
<summary>Solution</summary>

(a) Both transactions read a snapshot showing two doctors on call, both conclude that removing one leaves one, and both write. $T_1$ writes the Adeyemi row, $T_2$ writes the Bhatt row.

**Final roster: nobody on call.**

(b) **Neither is aborted.** Snapshot isolation's first-committer-wins rule aborts a transaction only when a concurrent transaction committed a write to a **row it also wrote**. The two transactions wrote *different* rows, so there is no write-write conflict for the rule to find.

The dependency that actually matters is a read-write one — each transaction's decision depended on reading the row the other wrote — and snapshot isolation tracks only write-write dependencies.

(c) The anomaly is **write skew**.

A fix that keeps snapshot isolation: **make the reads locking reads** with `SELECT ... FOR UPDATE` over the roster. Both transactions then take exclusive locks on both doctor rows, so the second blocks until the first commits, re-reads, sees one doctor remaining, and correctly refuses.

*(A second option is to materialize the conflict — have both transactions also write a shared row such as a roster version counter — so that first-committer-wins has a write-write conflict to detect. It is a deliberate hack, and it works.)*

The shape to recognize: **read a set, check an invariant over it, write a proper subset.** Whenever a transaction does that under snapshot isolation, the invariant is not being enforced.

</details>

## Connections

- **Backward:** this lesson pays the debts of [3.1](03-01-storage-pages-and-the-buffer-manager.md), whose steal and no-force choices are precisely why undo and redo are both needed, and of [4.1](04-01-transactions-and-the-acid-properties.md), whose atomicity and durability are delivered here. The undo path is also what a deadlock victim takes in [4.3](04-03-two-phase-locking-deadlock-and-granularity.md) — an abort and a crash recovery run the same machinery.
- **Forward:** [4.6](04-06-nosql-and-distributed-data.md) asks what happens when the log lives on several machines, where the same "write the intention before the act" idea reappears as replicated logs and consensus.
- **Sideways:** write-ahead logging is the mechanism behind file-system journaling in [`operating-systems` 4.3](../../operating-systems/lessons/04-03-crash-consistency-and-journaling.md), with the commit record playing the same role. What a database adds is transaction-level scope — many pages under one atomic unit — and the LSN machinery that makes both redo and undo idempotent, which a file-system journal, needing only redo, does not require.
