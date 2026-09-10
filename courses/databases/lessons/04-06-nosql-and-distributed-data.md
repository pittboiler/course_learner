# Database Systems · Lesson 4.6: A taste of NoSQL & distributed data

> ⏱ ~15 min · Module 4: Transactions, concurrency & beyond · Builds on: [4.5 (recovery & ARIES)](04-05-recovery-write-ahead-logging-and-aries.md), [4.4 (isolation levels & MVCC)](04-04-isolation-levels-and-mvcc.md) · Unlocks: `distributed-systems`

## Why this matters

Everything so far assumed one machine. That assumption held for thirty years and then stopped, and the systems built after it stopped — key-value stores, document databases, wide-column stores — were marketed as a replacement for the relational model. They were not. They were a set of **deliberate surrenders**, each trading a guarantee this course has spent four modules building for something a single machine cannot offer.

The value of learning them last is that you now know exactly what is being surrendered. "Eventually consistent" means little until you have seen what serializability costs and what it buys; "no joins" means little until you have priced one.

This lesson is the practitioner's version. The formal results — the CAP theorem's proof, consensus, Paxos and Raft, the FLP impossibility — belong to `distributed-systems`, and are named here rather than derived.

## The idea

Two mechanisms underlie every distributed data store, and they solve different problems.

**Sharding** (partitioning) splits the data across machines by some key. It buys capacity: ten machines hold ten times the data and serve ten times the traffic. The cost is that a query whose predicate is not the shard key must visit **every** shard, and a query joining rows on different shards has no good plan at all.

**Replication** keeps copies of the same data on several machines. It buys availability and read throughput. The cost is that copies can disagree, and deciding how much disagreement to permit is the entire subject of the rest of this lesson.

Now the constraint. Replicas communicate over a network, and networks fail. When they do — a **partition** — a write arriving at one side cannot be seen by the other. You have two options and no third:

- **Refuse the write** until the link returns. The copies stay consistent; the system is unavailable.
- **Accept it** and reconcile later. The system stays available; the copies disagree.

That is CAP, and the figure draws it as what it actually is. **"Choosing P" is not a thing** — a partition is an event that happens to you, not a design decision. The theorem constrains only what you may do *during* one. When the network is healthy you may have both consistency and availability, and well-designed systems do.

## The formal version

> **Sharding.** Rows are assigned to $S$ machines by a **shard key**, typically by hash or by range. A query with an equality predicate on the shard key touches **1** shard; any other query touches **all $S$** (a scatter-gather).

Range sharding preserves order, so range queries touch few shards, and it risks hot spots when the key is time-like and all recent writes land on one shard. Hash sharding spreads load evenly and destroys order, so every range query is a scatter-gather. The choice is the same one as [3.3](03-03-hashing-and-choosing-an-access-path.md)'s tree-versus-hash, one level up.

> **Replication.** $N$ copies of each item. A write is acknowledged after $W$ replicas confirm; a read consults $R$ replicas and takes the newest value.

> **The quorum condition.** A read is guaranteed to observe the most recent acknowledged write **if and only if**
> $$R + W > N.$$

The proof is a counting argument: a set of $R$ replicas and a set of $W$ replicas drawn from $N$ must share a member exactly when $R + W > N$, and that shared member holds the write.

For $N = 3$:

| $W$ | $R$ | $R+W$ | guarantee | tolerates |
|---|---|---|---|---|
| 1 | 1 | 2 | eventual — a read may miss the write | 2 node failures on each side |
| 2 | 2 | 4 | **strong** | 1 node failure on each side |
| 3 | 1 | 4 | **strong** | 0 write failures, 2 read failures |
| 1 | 3 | 4 | **strong** | 2 write failures, 0 read failures |

**Consistency is a dial, not a switch**, and it can be set per operation: the same store can serve a balance check at $R+W > N$ and a page-view counter at $R = W = 1$.

> **The CAP theorem.** A distributed store cannot simultaneously provide consistency (every read sees the latest write), availability (every request gets a non-error response), and partition tolerance. Since partitions occur, the real choice is **C or A during a partition**.

> **BASE.** The alternative slogan to ACID: **B**asically **A**vailable, **S**oft state, **E**ventual consistency. A system converges on agreement once the partition heals, without promising when.

> **The four families.**

| family | model | good at | example workload |
|---|---|---|---|
| key-value | opaque value under a key | the fastest possible point lookup | session store, cache |
| document | nested JSON-like documents | fetching one aggregate whole | product catalogue |
| wide-column | rows with a very large, sparse column space | huge tables, time-series | event and metric logs |
| graph | nodes and edges as first-class | traversals of arbitrary depth | social graph, fraud rings |

The first three all give up joins and general transactions in exchange for a data model that shards cleanly. **The graph family is different**: it gives up sharding, because a graph does not partition well, in exchange for traversals that a relational database expresses only through repeated self-joins.

## Picture

![Two replicas holding one remaining seat with the network link between them broken, and the two available responses to a booking arriving at one side, refuse for consistency or accept for availability, alongside a quorum table for three replicas showing that read and write quorums guarantee freshness exactly when R plus W exceeds N](assets/04-06-fig1.svg)

The bottom band is the point most teams meet before they ever meet CAP: sharding breaks cross-shard queries, joins and transactions, and that happens on a healthy network.

## Worked examples

**Example 1 — pricing the surrender, on one query.**

The library schema of Module 1, sharded across 8 machines by `member_id`.

**(a) "All loans by member 42."** The predicate is on the shard key, so a routing layer sends it to **one** shard, which answers from its local index. **This is the case sharding is for** — cost is the same as the single-machine cost, and eight machines serve eight times the traffic.

**(b) "All loans of book B3."** The predicate is on `isbn`, not the shard key. Member 42's loans are on one shard and member 99's on another, so any member might hold B3.

**Every one of the 8 shards must be queried**, and the results merged. The total work is the same as one machine's, spread over eight, but the **latency is the slowest of eight responses**, and the coordinator waits for all of them. In practice this is worse than a single machine, because the tail latency of eight requests is far above the median of one.

**(c) "Books borrowed by members in Leeds, with publisher names."** A three-way join across `member`, `loan` and `book`. `member` and `loan` shard by member; `book` does not shard by member at all, so every shard needs the whole `book` table.

**There is no good plan.** The options are to replicate `book` to every shard, which works while it is small and fails when it is not; to ship rows between shards during the join, which is the distributed-join problem and is expensive; or to denormalize `book`'s columns into `loan` so no join is needed, which reintroduces every anomaly of [2.4](02-04-anomalies-and-the-normal-forms.md) on purpose.

**That third option is what most document-store schemas actually are**, and seeing it plainly is the point of this example. A document holding a loan *with its book details embedded* is a denormalized row, chosen because it shards cleanly and needs no join. It is the 1NF-violating design of [2.2](02-02-from-er-to-relational-schema.md) — a repeating group inside a value — accepted deliberately, with the update anomalies handled by application code.

**The honest summary: NoSQL data models are normalization run in reverse, for a reason.** The reason is good. The costs are exactly the ones Module 2 enumerated, and they do not go away because the storage engine changed.

**Example 2 — setting the dial, per operation.**

A key-value store with $N = 3$ replicas holds two kinds of data for a ticketing site.

**Seat inventory.** Selling the same seat twice is unacceptable. Set $W = 2$, $R = 2$: since $R + W = 4 > 3$, every read sees the latest acknowledged write. The system tolerates **one** replica being down on either side and refuses service when two are.

**Page-view counters.** A count that is briefly stale costs nothing. Set $W = 1$, $R = 1$: $R + W = 2 \not> 3$, so a read may miss a recent write. The system tolerates **two** replicas being down and is roughly twice as fast, since a write waits for one acknowledgement instead of two.

**The same store, the same data, two settings**, chosen by what the data is for.

Now the case that matters. **Seat inventory during a partition**, with the 3 replicas split 2 and 1 by a network failure.

- A request arriving at the **majority side** can still assemble $W = 2$ and $R = 2$. It proceeds normally.
- A request arriving at the **minority side** cannot reach 2 replicas. It must **refuse**.

**That is CAP, concretely.** The minority side is unavailable, and it is unavailable *because* $R + W > N$ was chosen. Lower the dial to $W = 1$ and both sides accept bookings — and the same seat is sold on both, discovered when the partition heals, with no automatic way to decide which sale was real.

**Reconciliation is where the cost lands.** The store can keep both versions and hand the conflict to the application; it can pick by timestamp, which silently discards one sale; or it can use a data type designed to merge, a conflict-free replicated data type, which works for counters and sets and not for "there is one seat." **A seat is not mergeable**, and no amount of clever data structure makes it so — which is the real reason inventory systems keep a strongly consistent core however much else they distribute.

## Watch out

- **You might think CAP means picking two of three.** Partitions are not something you choose; they happen. The theorem constrains only your behaviour *during* one, and on a healthy network a well-built system delivers both consistency and availability.
- **You might think NoSQL means no transactions.** Most of these systems offer single-key atomicity, and several now offer multi-key transactions. What they gave up was the *general* multi-object transaction across arbitrary shards, because that requires a distributed commit protocol whose cost is what they were escaping.
- **You might think denormalizing is what NoSQL requires.** It is what sharding requires, and the anomalies of [2.4](02-04-anomalies-and-the-normal-forms.md) arrive with it unchanged. A sharded relational database faces the same pressure; the data model is a consequence of the distribution, not of the query language.
- **You might think eventual consistency means "consistent after a short delay."** It means the replicas converge *if writes stop*, with no bound on when and no guarantee about what a read sees before then. Whether that is acceptable is a property of the data, not of the system.

## One-liner

> Distribution buys capacity and availability by surrendering guarantees, and the ones on offer are exactly the ones this course built — so the useful question is never "SQL or NoSQL" but "which of these am I willing to give up, and for what."

## Problems

**P1 (🟢)** A key-value store has $N = 5$ replicas.

(a) Give the smallest $W$ that guarantees strong consistency when $R = 1$.
(b) Give the smallest $R$ that guarantees strong consistency when $W = 3$.
(c) State whether $W = 2$, $R = 3$ gives strong consistency.
(d) Give the number of replica failures the setting $W = 3$, $R = 3$ tolerates on each side.

**P2 (🟡)** An events table of 4,000,000,000 rows is sharded across 16 machines.

(a) The shard key is `user_id`. Give the number of shards touched by `WHERE user_id = 91123`.
(b) Give the number touched by `WHERE occurred_at BETWEEN ... AND ...` under **hash** sharding on `user_id`.
(c) The team switches to **range** sharding on `occurred_at`. Give the number of shards touched by each of the two queries above, and name the new problem this creates for a write-heavy workload.
(d) State which sharding scheme you would choose given that 95 percent of queries filter on `user_id` and 5 percent on a time range, and give the reason in one clause.

**P3 (🔴, optional)** A payments service holds account balances in a store with $N = 3$ replicas, currently set to $W = 2$, $R = 2$. A network partition splits the replicas 2 and 1.

(a) State what happens to a transfer arriving at the majority side, and to one arriving at the minority side.
(b) The team lowers the setting to $W = 1$, $R = 1$ to keep both sides serving. Give a concrete two-transaction scenario during the partition that produces an unacceptable outcome, with the final balances.
(c) The store offers three reconciliation strategies: last-write-wins by timestamp, keep-both-and-ask-the-application, and a conflict-free replicated counter. For each, state whether it correctly resolves your scenario in (b), and why.
(d) Give the design the team should adopt, and state which of ACID's four letters the distributed setting makes hardest to deliver and why.

<details>
<summary>Solutions</summary>

**P1**

(a) Strong consistency needs $R + W > N$, so $W > 5 - 1 = 4$, giving $W = \mathbf{5}$. Every replica must acknowledge, and the write fails if any replica is down.

(b) $R > 5 - 3 = 2$, so $R = \mathbf{3}$.

(c) $R + W = 3 + 2 = 5$, which is **not** greater than 5. **No strong consistency** — a read quorum of 3 and a write quorum of 2 can be disjoint, and then the read misses the write entirely.

The boundary case is worth noticing: $R + W = N$ is *not* sufficient. Two sets from a universe of 5 with sizes summing to exactly 5 can be disjoint; overlap requires the sum to exceed $N$.

(d) $W = 3$ means the write needs 3 of 5, so it survives **2** failures. $R = 3$ likewise survives **2**. And $R + W = 6 > 5$, so this setting is strongly consistent while tolerating two failures on each side — the standard majority-quorum choice for $N = 5$.

**P2**

(a) **1 shard.** The predicate is an equality on the shard key, so the routing layer computes the hash and sends the query to exactly one machine.

(b) **All 16.** A hash on `user_id` scatters rows with adjacent timestamps across every shard, so a time-range predicate has no locality at all and every shard must be scanned. This is a scatter-gather, and its latency is the slowest of 16 responses.

(c) Under range sharding on `occurred_at`:

- `WHERE occurred_at BETWEEN ...`: **1 shard**, or a few if the range spans boundaries. The range predicate now has perfect locality.
- `WHERE user_id = 91123`: **all 16**. One user's events are spread across all of time and therefore across every shard.

The two queries have swapped places exactly.

**The new problem is a hot shard.** With `occurred_at` as a range shard key, every new event has a timestamp near now, so **every write goes to the single shard holding the newest range**. Fifteen machines idle while one absorbs the entire write load, and the cluster's write capacity is that of one machine.

This is the time-like-key hot spot, and it is the standard failure of range sharding on an append-heavy table.

(d) **Choose hash sharding on `user_id`.**

**The reason:** 95 percent of queries then touch one shard instead of sixteen, and the 5 percent that scatter are a cost worth paying — whereas range sharding inverts the ratio *and* concentrates all writes on one machine.

*(The usual refinement, worth knowing: shard by hash of `user_id` and add a local index on `occurred_at` within each shard. The time-range query is still a scatter-gather, but each shard answers its part from an index rather than a scan, which cuts the work per shard by orders of magnitude and leaves only the fan-out cost.)*

**P3**

(a) **Majority side (2 replicas):** a transfer can assemble $W = 2$ and $R = 2$ from the two reachable replicas. It **proceeds normally**, with full consistency.

**Minority side (1 replica):** it can reach only one replica, so neither the write quorum of 2 nor the read quorum of 2 can be formed. Every request **fails**. That side is unavailable for the duration of the partition.

This is CAP made concrete: consistency was chosen, and the minority side's unavailability is the price.

(b) With $W = R = 1$, both sides accept everything. Account X holds 100.

| step | majority side | minority side |
|---|---|---|
| 1 | reads X = 100 | reads X = 100 |
| 2 | withdraws 80, writes X = 20 | withdraws 80, writes X = 20 |
| 3 | acknowledges to the customer | acknowledges to the customer |

**Both withdrawals succeed. 160 has been paid out of an account holding 100**, and after the partition heals both replicas agree that X = 20.

The database is internally consistent and the money is gone. Note that no replica ever held a wrong value — each applied a legitimate write to a legitimate prior value.

(c)

**Last-write-wins by timestamp: does not resolve it.** It picks one of the two writes — both are `X = 20` — and discards the other. The surviving value is 20, which is exactly the wrong answer: the second withdrawal is silently forgotten while the cash has already been handed over. LWW resolves a *conflict of values*; here both values agree and the conflict is in the **operations**.

**Keep-both-and-ask-the-application: resolves it, at a cost.** The store surfaces two concurrent versions and the application decides. It has enough information — two withdrawals of 80 against a balance of 100 — to compute the correct outcome and to trigger the business process for an overdraft. This works, and it means every reader of this data must be able to handle a conflict, which is a substantial burden across a codebase.

**Conflict-free replicated counter: resolves the arithmetic and not the problem.** A CRDT counter merges by summing the increments, so the two withdrawals of $-80$ combine correctly to give $100 - 160 = -20$. **The balance is right.** But the *decision* each side made — "this withdrawal is permitted because the balance covers it" — was wrong on one side, and the counter cannot undo a payout. A CRDT guarantees the replicas converge; it cannot guarantee the converged value satisfies a constraint that was checked before the merge.

**The general shape:** a balance is mergeable, an overdraft check is not. This is [4.4](04-04-isolation-levels-and-mvcc.md)'s write skew again — read a value, check an invariant, write — with the network partition playing the role of the missing isolation.

(d) **Keep the strongly consistent setting ($W = R = 2$) for balances and accept minority-side unavailability.**

The concrete design: run balances on a majority-quorum store, or better a single-primary replicated relational database, so that all the machinery of [4.3](04-03-two-phase-locking-deadlock-and-granularity.md) and [4.5](04-05-recovery-write-ahead-logging-and-aries.md) applies unchanged. Distribute the things that genuinely tolerate it — transaction history, notifications, analytics, page views — at $W = R = 1$. **Availability during a partition is worth having for most of the system and worth refusing for the part that moves money.**

**The hardest ACID letter to deliver in the distributed setting is I, isolation** — with C, in its "declared constraints still hold" sense, hard for the same reason.

The argument: **A** and **D** survive distribution reasonably well, because the log techniques of [4.5](04-05-recovery-write-ahead-logging-and-aries.md) extend to a replicated log, and a two-phase commit protocol delivers atomicity across nodes at a cost in latency. **I** is different. Isolation requires a global order on conflicting operations, and establishing a global order across machines requires them to communicate — which is exactly what a partition prevents. There is no local rule, no analogue of the lock point, that two disconnected nodes can each follow to guarantee serializability between them.

**That is why isolation is the guarantee the distributed stores surrendered first**, and why the ones that have since won it back — the systems offering distributed serializability — did so by buying a global order outright, through consensus or through synchronized clocks. Both are expensive, and both are the subject of `distributed-systems`.

</details>

## Flashback

**From Lesson 4.5 (recovery — write-ahead logging & ARIES):** A log holds, with a fuzzy checkpoint at LSN 40 recording dirty pages $\{P_7 \to 30\}$ and active transactions $\{T_5 \to 30\}$:

| LSN | record |
|---|---|
| 20 | begin $T_5$ |
| 30 | update $T_5$, $P_7$, $1 \to 2$ |
| 40 | checkpoint |
| 50 | update $T_5$, $P_7$, $2 \to 3$ (prevLSN 30) |
| 60 | begin $T_6$ |
| 70 | update $T_6$, $P_8$, $8 \to 9$ |
| 80 | commit $T_6$ |

Then the machine crashes. On disk, $P_7$ has pageLSN 30 and $P_8$ has pageLSN 0.

(a) Give the dirty page table and the losers after analysis.
(b) Give the redo start LSN and which records are redone.
(c) Give the undo actions with CLR LSNs.
(d) Give the final values of $P_7$ and $P_8$.

<details>
<summary>Solution</summary>

(a) Scanning forward from LSN 40: LSN 50 sets $T_5$'s lastLSN to 50, and $P_7$ is already dirty so its recLSN stays 30. LSN 60 adds $T_6$; LSN 70 sets its lastLSN to 70 and adds $P_8$ with recLSN 70. LSN 80 removes $T_6$ — it committed.

$$\text{dirty page table: } \{P_7 \to 30,\ P_8 \to 70\} \qquad \textbf{loser: } T_5 \qquad \textbf{winner: } T_6$$

(b) Redo starts at the smallest recLSN, **30**.

| LSN | decision |
|---|---|
| 30 | **skip** — $P_7$'s pageLSN on disk is already 30 |
| 50 | **redo** $P_7 := 3$ |
| 70 | **redo** $P_8 := 9$ |

(c) Undo covers $T_5$ only, walking backward from its lastLSN of 50:

| new LSN | action |
|---|---|
| 90 | CLR: undo LSN 50, $P_7 := 2$, undoNext = 30 |
| 100 | CLR: undo LSN 30, $P_7 := 1$, undoNext = none |

(d) **$P_7 = 1$** — $T_5$ never committed, so atomicity requires every one of its writes to be undone, back to the value before it began.

**$P_8 = 9$** — $T_6$ committed, so durability requires its write to survive; redo installed it because the page never reached disk.

</details>

## Connections

- **Backward:** every surrender here is of something built earlier. Denormalizing to avoid a join reintroduces the anomalies of [2.4](02-04-anomalies-and-the-normal-forms.md); eventual consistency abandons the isolation of [4.2](04-02-serializability-and-precedence-graphs.md) to [4.4](04-04-isolation-levels-and-mvcc.md); the quorum dial is snapshot isolation's trade taken further; and the replicated log of a distributed store is [4.5](04-05-recovery-write-ahead-logging-and-aries.md)'s log with more than one reader.
- **Forward:** `distributed-systems` takes over here. The CAP theorem's proof, consensus by Paxos and Raft, the FLP impossibility result, and distributed commit protocols are its subject; this lesson names them so that they arrive as answers to questions you already have.
- **Sideways:** the hash-versus-range sharding trade is [3.3](03-03-hashing-and-choosing-an-access-path.md)'s hash-versus-tree decision at cluster scale, with the same conclusion — hashing gives even distribution and destroys order; ordering gives locality and risks hot spots. And the partition scenario is a network version of the split-brain problem any replicated system faces, which [`computer-networks` 3.3](../../computer-networks/lessons/03-03-routing-algorithms-link-state-and-distance-vector.md) meets as the difficulty of agreeing on state that each node can only observe locally.

## Closing the course

Twenty-five lessons ago a relation was a set of tuples. Four things were built on it, and it is worth naming what each one actually was.

**Module 1 built a language and proved it composes.** Relational algebra's operators are closed — relations in, relations out — which is why queries form trees, and why the identities that reshape those trees are identities rather than approximations. That is what makes a declarative language possible: you can state what you want because the system can rewrite *how* without changing *what*.

**Module 2 made "good design" decidable.** Normal forms turned a matter of taste into a property you can check with one three-line algorithm, and the closure computation of [2.3](02-03-functional-dependencies-closure-and-keys.md) answers essentially every question in the module. The deeper lesson is the one 3NF's escape hatch encodes: BCNF removes redundancy and may cost you an enforceable constraint, and knowing which you are buying is the actual skill.

**Module 3 changed the unit and everything reorganized.** Count pages instead of instructions and the B⁺-tree's fan-out, external sorting's pass structure, the hash join's three-times-everything and the optimizer's whole search all follow. The number to carry away is the 2.5 percent crossover from [3.2](03-02-b-plus-tree-indexes.md) — an unclustered index stops paying at roughly one over the rows-per-page — because it explains more real performance behaviour than any other single fact here.

**Module 4 defended it all against reality.** Serializability made "correct concurrency" precise, two-phase locking enforced it, the isolation levels priced the alternatives, and the log delivered atomicity and durability with one rule about write ordering. The recurring shape is that every guarantee has a mechanism and every mechanism has a bill, and the bills are all visible.

**What the course deliberately skipped**, in case you go looking: the engineering of a production DBMS — lock manager internals, storage engine code, the parser — and the operation of big-data platforms. It also names rather than derives the distributed results, which are `distributed-systems`'s.

**The habit worth keeping** is the one Module 3 forces: when something is slow, count the pages. When something is wrong under concurrency, draw the precedence graph. When a schema smells, compute a closure. Each is a five-minute mechanical procedure that replaces an argument with an answer, and having them in your hands is most of what separates using a database from being used by one.
