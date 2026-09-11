# Distributed Systems · Lesson 2.6: Quorum systems

> ⏱ ~15 min · Module 2: Consistency and Replication · Builds on: [2.5 (replication strategies)](02-05-replication-strategies.md), [2.1 (linearizability)](02-01-linearizability.md), [2.3 (anti-entropy)](02-03-eventual-consistency-and-anti-entropy.md) · Unlocks: [3.3 (Paxos)](03-03-paxos.md), [3.5 (CAP)](03-05-the-cap-theorem-and-pacelc.md)

## Why this matters

[`databases` 4.6](../../databases/lessons/04-06-nosql-and-distributed-data.md) gave you the rule: $R + W > N$ and your reads see your writes. This lesson asks *why* that works, and the answer generalises a long way — because $R + W > N$ is one instance of a much simpler idea, and once you see the idea you get three things the rule alone does not give you.

You get **other shapes**: quorums that are far smaller than a majority, with a different availability profile. You get a **missing condition**: $R+W>N$ says nothing about two *writes* colliding, and the configurations people actually deploy can violate it. And you get the reason [2.1](02-01-linearizability.md)'s worked example failed — quorums alone are not enough for linearizability, and the fix is a specific extra round trip.

Everything in Module 3 runs on this machinery too. Paxos's safety argument is a quorum-intersection argument and nothing else.

## The idea

Strip the arithmetic away and a quorum is just **a set of nodes large enough that it cannot miss anything important**. Formally: a family of subsets, any two of which share at least one member.

That shared member is the whole mechanism. If a write is recorded at every node of some set $W$, and a read consults every node of some set $R$, and $R \cap W \ne \emptyset$, then the read touches at least one node that has the write. It cannot miss it. **The arithmetic $R + W > N$ is nothing more than the pigeonhole statement that two subsets of an $N$-element set with sizes summing above $N$ must overlap.**

Once stated that way, the majority stops being special. It is simply the *smallest* family where every pair of sets of the same size intersects — but if reads and writes may use sets of *different* shapes, much smaller quorums exist. Arrange 25 replicas in a 5×5 grid: let a read quorum be one full **column** (5 nodes) and a write quorum be one full **row plus one full column** (9 nodes). Every column meets every row, so every read meets every write. Against a majority's 13 for both, that is a large saving.

The saving is paid for in **availability**. A majority of 25 survives any 12 failures. The grid dies if every column has at least one failure — which can happen with as few as 5 well-placed failures, and with independent 10 percent failure rates happens about 1.2 percent of the time against a majority's 0.00002 percent. **Small quorums and robust quorums are opposite ends of one trade**, and choosing between them is a real design decision rather than a detail.

Two further things the simple rule hides. **Writes must intersect each other**, not just reads, or two concurrent writes are accepted by disjoint sets and nothing orders them. And **intersection guarantees a read sees the write's data, not that the read is linearizable** — for that the reader must also write.

## The formal version

> **Quorum system.** A family $\mathcal{Q}$ of subsets of $\{1..n\}$ such that $Q_1 \cap Q_2 \ne \emptyset$ for all $Q_1, Q_2 \in \mathcal{Q}$.

> **Read/write quorum system.** Families $\mathcal{R}, \mathcal{W}$ with
> $$R \cap W \ne \emptyset \ \ \forall R \in \mathcal{R}, W \in \mathcal{W} \qquad\text{and}\qquad W_1 \cap W_2 \ne \emptyset \ \ \forall W_1, W_2 \in \mathcal{W}.$$

In words: reads must see writes (the first condition), **and writes must be ordered against each other** (the second). For size-based quorums these become

$$R + W > N \qquad\text{and}\qquad 2W > N.$$

**The second condition is the one people forget**, and it is not implied by the first. Take $N = 5$, $R = 4$, $W = 2$: $R + W = 6 > 5$, so every read sees every completed write. But $2W = 4 \not> 5$, so two concurrent writes can land on $\{1,2\}$ and $\{3,4\}$ — **disjoint sets**, with no node holding both and therefore nothing in the system that can say which came second. A subsequent read sees both and must resolve them out of band ([2.3](02-03-eventual-consistency-and-anti-entropy.md)).

For $N = 5$, the settings satisfying **both** conditions are exactly those with $W \ge 3$ and $R \ge 6 - W$:

| $W$ | permitted $R$ |
|---|---|
| 3 | 3, 4, 5 |
| 4 | 2, 3, 4, 5 |
| 5 | 1, 2, 3, 4, 5 |

> **Grid quorum.** Arrange $n = d^2$ nodes in a $d \times d$ grid. Read quorums are the columns (size $d$); write quorums are a full row together with a full column (size $2d - 1$).

Verify the two conditions by inspection. A read quorum is a column; a write quorum contains a full row, and a row meets every column — so reads meet writes. Two write quorums each contain a full row and a full column, and any row meets any column — so writes meet writes. **Quorum sizes are $O(\sqrt n)$ rather than $O(n)$.**

> **Sloppy quorum.** A write that cannot reach $W$ of its **home** replicas is accepted by $W$ *reachable* nodes instead, which store it with a **hint** naming its true home and forward it when that node returns (hinted handoff).

This raises write availability substantially and **destroys the intersection guarantee** while the substitution is in force: a read quorum drawn from the home replicas may not include any node holding the write. Sloppy quorums buy availability by giving up exactly the property that made quorums work, and the honest description is that they provide eventual consistency with a durability boost, not strong reads.

> **The ABD register** (Attiya, Bar-Noy, Dolev). A linearizable multi-reader register on $n > 2f$ replicas, using **two rounds per operation**.
>
> - *Read:* query a read quorum; take the value with the highest timestamp; **write that value back to a write quorum**; then return it.
> - *Write:* query a read quorum for the highest timestamp $t$; write $(v, t+1)$ to a write quorum.

The write-back in the read path is the fix for [2.1](02-01-linearizability.md)'s failure. Without it, a read that happens to catch a value on one replica can return it while a later read, hitting a different quorum, misses it. With it, the first read does not return until the value is on a full write quorum, so every subsequent read quorum intersects it. **The cost is that every read may become a write** — two rounds instead of one, and write load proportional to read load.

## Picture

![A five-by-five grid of replica cells. One full column is outlined as a read quorum of five replicas; one full row together with one full column is outlined as a write quorum of nine replicas. The two cells where the read column crosses the write row and the write column are marked as the forced overlap. Annotations give the quorum sizes against a majority quorum's thirteen for both reads and writes, and note that with each replica down ten percent of the time a read quorum is unavailable 1.2 percent of the time against 0.00002 percent for a majority.](assets/02-06-fig1.svg)

The marked cells are the proof, drawn. A full row crosses every column exactly once, so no matter which column a reader picks, it lands on a node the writer touched. The whole of $R+W>N$ is this picture with the sets unstructured instead of gridded.

## Worked examples

**Example 1 — choosing $(R, W)$ for three workloads at $N = 5$.**

**(a) Strong reads, reads far more frequent than writes.** Take $W = 5$, $R = 1$. Both conditions hold ($6 > 5$ and $10 > 5$), and reads touch a single replica, so they are as fast and as scalable as the hardware allows.

The cost is severe and specific: a write needs **every** replica, so **one replica down stops all writes**. This is the series arithmetic of [1.1](01-01-why-distributed-systems-are-hard.md) again, and it is why $W = N$ appears in tuning guides and almost never in production.

**(b) Fast writes tolerating one down replica.** A write must complete with 4 replicas reachable, so $W \le 4$; minimising latency pushes $W$ down, and the write-ordering condition $2W > 5$ pushes it up to $W \ge 3$. **Take $W = 3$**, which tolerates 2 failures, and then $R \ge 3$.

Note what happened: the naive answer "$W = 1$, it's fastest" is *permitted by $R+W>N$* if $R = 5$, and it is wrong, because $2(1) = 2 \not> 5$ and two concurrent writes go to disjoint singletons.

**(c) Reads and writes both surviving two failures.** Surviving two failures means both quorums are at most $5 - 2 = 3$. So $R = W = 3$, which gives $R + W = 6 > 5$ ✓ and $2W = 6 > 5$ ✓.

**It is possible, and it is the majority.** This is worth stating because the question invites you to look for an impossibility: with $N = 5$, majority quorums are simultaneously the most failure-tolerant strong configuration and the only one at that failure level. For odd $N$, "$R = W = $ majority" is not one choice among many; it is the unique point where both conditions hold at maximum fault tolerance.

**Example 2 — what the grid buys and what it costs, numerically.**

Twenty-five replicas, each independently up 90 percent of the time.

**Quorum sizes.** Majority: 13 for reads and 13 for writes. Grid: **5** for reads, **9** for writes. A read touches 5 nodes instead of 13 — less than half the messages, and the latency is the maximum over 5 samples rather than 13, which matters more than the message count because tail latency grows with the number of nodes you wait for ([2.5](02-05-replication-strategies.md)).

**Availability.** A grid read quorum exists only if **some column is entirely up**. One column is fully up with probability $0.9^5 = 0.59049$, so no column is fully up with probability

$$(1 - 0.59049)^5 = 0.40951^5 = 0.0115.$$

**Reads fail about 1.2 percent of the time.**

A majority quorum exists if at least 13 of 25 are up:

$$\sum_{k=13}^{25} \binom{25}{k} (0.9)^k (0.1)^{25-k} = 0.99999984,$$

so it fails $1.6 \times 10^{-7}$ of the time — **about 70,000 times more reliable**.

**The shape of the trade.** The grid's weakness is that it needs a *structured* survivor set: five specific nodes, all in one column. The majority needs any 13. And the failure mode is worse than the probability suggests — a rack outage that takes out one node from each column leaves 20 healthy replicas and **no available read quorum at all**, because the grid's assumption of independent failures is exactly what a correlated failure violates.

**The rule that follows: grid and tree quorums are for systems where the replica count is large and failures are genuinely independent and rare.** For the 3-, 5- or 7-node clusters that run consensus, the majority is both simpler and strictly better, which is why Module 3 uses nothing else.

## Watch out

- **You might think $R+W>N$ is the whole condition.** It guarantees reads see completed writes. It says nothing about two writes, and $2W > N$ is a separate requirement. A configuration like $N=5, R=4, W=2$ passes the famous rule and admits disjoint concurrent writes.
- **You might think a quorum read is linearizable.** It returns data from a node that has any completed write, which is not the same thing — [2.1](02-01-linearizability.md)'s worked example shows successive reads going forwards and then backwards during a write in progress. Linearizability needs the read to write back before returning.
- **You might think a sloppy quorum is a quorum.** It is a durability mechanism wearing quorum vocabulary. While hints are outstanding, the write lives on nodes that no ordinary read quorum consults, so the intersection property — the only thing that made any of this work — does not hold.

## One-liner

> A quorum is any set big enough that two of them must overlap, the overlapping node is the entire mechanism, and everything else is a choice about shape: majorities are robust and large, grids are small and fragile, and sloppy quorums are not quorums at all.

## Problems

**P1 (🟢)** A store has $N = 7$ replicas.

(a) Give every $W$ satisfying the write-ordering condition $2W > N$.
(b) For $W = 4$, give the smallest $R$ giving strong reads.
(c) Give the setting that tolerates the most failures on both the read and write side while satisfying both conditions, and the number of failures it tolerates.
(d) A team deploys $N = 7$, $R = 6$, $W = 2$ and cites $R + W > N$. State what is wrong, and give a concrete two-write scenario that exhibits it.

**P2 (🟡)** Sixteen replicas are arranged in a $4 \times 4$ grid, with read quorums the columns and write quorums a row plus a column.

(a) Give the read and write quorum sizes, and the corresponding majority quorum size.
(b) Verify the read-write intersection property by stating which cells are forced to overlap.
(c) Each replica is independently up 95 percent of the time. Give the probability that no read quorum is available.
(d) A power event takes down exactly one replica in each column, 4 in total. Give the number of replicas still up, and state whether a read quorum exists.

**P3 (🔴, optional)** A store uses $N = 3$, $R = 2$, $W = 2$, with no read repair and no write-back.

(a) Give an ordered step list, naming the replicas contacted, in which two non-overlapping reads return the new value and then the old one.
(b) Rerun your scenario with the ABD read rule — query, write back to a write quorum, then return — and state at which step the anomaly is prevented.
(c) Give the number of message round trips ABD costs for a read and for a write, and state what the extra round buys in each case.
(d) The team instead enables sloppy quorums so that writes succeed when only one home replica is reachable. Give the guarantee this breaks and a concrete read that now returns a stale value.

<details>
<summary>Solutions</summary>

**P1**

(a) $2W > 7$ means $W > 3.5$, so $W \in \{\mathbf{4, 5, 6, 7}\}$.

(b) $R + W > 7$ with $W = 4$ gives $R > 3$, so $R = \mathbf{4}$.

(c) Tolerating $f$ failures on a side means that side's quorum is at most $7 - f$. To maximise $f$ on both sides, minimise both quorums subject to $R + W > 7$ and $2W > 7$: the smallest legal $W$ is 4, forcing $R \ge 4$.

**$R = W = 4$**, tolerating $7 - 4 = \mathbf{3}$ failures on each side — the majority, again.

(d) **The write-ordering condition fails**: $2W = 4 \not> 7$, so two write quorums can be disjoint.

Concretely, with replicas $1 \ldots 7$:

1. Client $P$ writes $x = \text{“red”}$, acknowledged by replicas $\{1, 2\}$.
2. Concurrently, client $Q$ writes $x = \text{“blue”}$, acknowledged by replicas $\{3, 4\}$.

The two write quorums are disjoint, so **no replica has seen both writes** and nothing in the system establishes an order between them. A later read with $R = 6$ does see both — the read condition holds — but it sees them as two unordered versions and must resolve the conflict itself, which is exactly the situation the configuration was supposed to prevent.

**The deployment is not "strongly consistent with a fast write path"; it is an eventually consistent store with expensive reads.**

**P2**

(a) Read quorum = one column = $\mathbf{4}$. Write quorum = one row plus one column = $4 + 4 - 1 = \mathbf{7}$ (the shared cell is counted once). Majority of 16 = $\mathbf{9}$.

(b) A write quorum contains a **full row**. A read quorum is a **full column**. Every row contains exactly one cell in every column, so the read column and the write row **always share exactly one cell** — the cell at their crossing. That single forced cell is what guarantees the read sees the write.

(Two write quorums likewise share at least one cell, since $W_1$'s row crosses $W_2$'s column.)

(c) One column is fully up with probability $0.95^4 = 0.81451$. No column is fully up with probability

$$(1 - 0.81451)^4 = 0.18549^4 = \mathbf{1.18 \times 10^{-3}} \approx 0.12\%.$$

For comparison, a majority of 16 at $p_{\text{up}} = 0.95$ is unavailable with probability $3.5 \times 10^{-7}$ — again a factor of several thousand.

(d) $16 - 4 = \mathbf{12}$ replicas are still up — three quarters of the cluster.

**No read quorum exists.** Every column has a failure, so no column is fully up, and the read quorums are exactly the columns.

This is the grid's characteristic failure and it is worth sitting with: **twelve healthy replicas and the system cannot serve a read.** A majority quorum would need 9 of 16 and has 12, so it would be entirely unaffected. Correlated failures — a rack, a power phase, a rolling deploy — are precisely the ones that hit one node per column, which is why grid quorums need failure independence far more than majorities do.

**P3**

*Accept criterion for (a): any step list in which a write is still in progress, the first read's quorum includes a replica holding it, and the second read's quorum does not. Which replicas are named is free.*

(a) Replicas $r_1, r_2, r_3$ all hold $x = \text{old}$.

1. Client $P$ writes $x = \text{new}$. The update reaches $r_1$; the updates to $r_2$ and $r_3$ are delayed. **$P$'s write has not returned** — it needs $W = 2$.
2. Client $B$ reads, contacting $\{r_1, r_2\}$. It sees `new` (higher version) and `old`, and **returns `new`**.
3. $B$'s read returns. Client $C$ then reads, contacting $\{r_2, r_3\}$. Both hold `old`, so it **returns `old`**.

$B$ returned before $C$ began, so real time orders them, and the values went backwards — not linearizable, with every quorum rule satisfied.

(b) Under ABD, **step 2 changes**: $B$ queries $\{r_1, r_2\}$, finds `new` is the highest version, and **writes `new` back to a write quorum of 2** before returning. Suppose it writes back to $\{r_1, r_2\}$.

Now at step 3, $C$'s quorum $\{r_2, r_3\}$ contains $r_2$, which holds `new`. $C$ returns **`new`**. The anomaly is prevented **at the write-back, before $B$ returns** — and that ordering is the essential part: a repair performed after returning would leave the window open, as [2.1](02-01-linearizability.md) noted.

(c) **Read: 2 round trips** — query a read quorum, then write back to a write quorum. **Write: 2 round trips** — query a read quorum for the highest timestamp, then write the new value with timestamp $t+1$ to a write quorum.

What the extra round buys:

- **On the read**, it makes the returned value *stable*: it is on a full write quorum before the client hears it, so no later read quorum can miss it. That is what upgrades "sees completed writes" to linearizable.
- **On the write**, it makes the new timestamp *strictly greater than anything already chosen*, so concurrent writers cannot collide on a version number. Without this round a writer would have to invent a timestamp, and [1.4](01-04-physical-clocks-and-synchronization.md) says it has no clock good enough to do so.

(d) Sloppy quorums break **the intersection property itself**, which is the only thing every guarantee in this lesson rests on.

Concretely: $r_1$ and $r_2$ are unreachable, so a write to $x$ is accepted by $r_3$ and by two **non-home** nodes $h_1, h_2$, which store it with hints. The write returns successfully. $r_1$ and $r_2$ come back.

A read now contacts $\{r_1, r_2\}$ — a legitimate read quorum of the home replicas — and **neither has the write**, because it is sitting in hinted storage on $h_1$ and $h_2$ awaiting handoff. **The read returns the stale value despite $R + W > N$ holding numerically.**

The guarantee survives only in the eventual sense: once hinted handoff completes, the home replicas have the write and reads are correct again. Sloppy quorums trade the *strong* read guarantee for write availability during failures, and that trade should be stated rather than inferred from the configuration numbers, which do not change.

</details>

## Flashback

**From Lesson 2.5 (replication strategies):** A leader replicates synchronously to $k$ followers, each responding in 4 ms with probability 0.97 and 120 ms with probability 0.03, independently.

(a) Give the probability a write is slow when the leader waits for all followers, at $k = 3$.
(b) Give the same probability when it waits for exactly one, at $k = 3$.
(c) State which of the two the leader is doing if it waits for a majority of $k = 3$, and give the probability.

<details>
<summary>Solution</summary>

(a) Slow if any follower is slow: $1 - 0.97^3 = 1 - 0.912673 = \mathbf{8.73\%}$.

(b) Slow only if all three are slow: $0.03^3 = 2.7 \times 10^{-5} = \mathbf{0.0027\%}$.

(c) A majority of 3 is 2, so the write is slow if **2 or 3** followers are slow:

$$\binom{3}{2}(0.03)^2(0.97) + (0.03)^3 = 3(0.0009)(0.97) + 0.000027 = 0.002619 + 0.000027 = \mathbf{0.26\%}$$

This **resembles waiting for one** far more than waiting for all: it is a factor of 33 better than the wait-for-all figure and only two orders of magnitude worse than wait-for-one, and crucially it *improves* as $k$ grows rather than degrading. Majority quorums take a middle order statistic rather than the maximum, which is why they give durability across failures without the tail-latency penalty of full synchrony — the same reason this lesson's quorum systems all sit at or above the majority.

</details>

## Connections

- **Backward:** the intersection argument is the reason [`databases` 4.6](../../databases/lessons/04-06-nosql-and-distributed-data.md)'s $R+W>N$ works, and the ABD write-back is the repair [2.1](02-01-linearizability.md) identified but did not build. Hinted handoff completes the availability picture [2.3](02-03-eventual-consistency-and-anti-entropy.md) began.
- **Forward:** [3.3](03-03-paxos.md)'s safety proof is a quorum-intersection argument and nothing more — any two majorities share an acceptor, and that acceptor's memory is what prevents two values from being chosen. [3.5](03-05-the-cap-theorem-and-pacelc.md) shows that when a partition makes every quorum unreachable on one side, unavailability is not a design flaw but the intersection property doing its job.
- **Sideways:** the read/write quorum conditions are a covering-design question — families of subsets required to pairwise intersect — which is the territory of [`combinatorics` 4.2](../../combinatorics/lessons/04-02-pigeonhole.md) and [`discrete-mathematics` 3.3](../../discrete-mathematics/lessons/03-03-inclusion-exclusion-and-pigeonhole.md). The grid construction is a projective-plane-style design in miniature: rows and columns as two families of lines meeting in exactly one point.
