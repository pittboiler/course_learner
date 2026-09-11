# Distributed Systems · Lesson 4.4: Consistent hashing and DHTs

> ⏱ ~15 min · Module 4: Fault Tolerance and Distributed Data · Builds on: [2.5 (replication strategies)](02-05-replication-strategies.md), [2.3 (anti-entropy)](02-03-eventual-consistency-and-anti-entropy.md), [4.3 (MapReduce)](04-03-mapreduce-and-large-scale-processing.md) · Unlocks: [4.6 (Nakamoto consensus)](04-06-nakamoto-consensus-and-blockchains.md)

## Why this matters

[`databases` 4.6](../../databases/lessons/04-06-nosql-and-distributed-data.md) covered *why* you shard and what it costs a query planner. This lesson is about the mechanism underneath, and specifically about the operation that breaks the obvious approach: **adding or removing a machine.**

Hash the key modulo the node count and everything works beautifully until the eleventh node arrives, at which point **91 percent of your data must move**. Consistent hashing takes that to 9 percent — the theoretical minimum — with no coordinator and no global agreement about who owns what. It is the partitioning scheme under Dynamo, Cassandra, Riak, memcached clients and every content delivery network, and the idea is small enough to draw.

## The idea

The failure of `hash(key) mod N` is worth seeing precisely. Under $N$ nodes a key lands at $h \bmod N$; under $N+1$ it lands at $h \bmod (N+1)$. Those agree only by coincidence, so the fraction of keys that keep their home is about $1/(N+1)$ and **the fraction that move is $N/(N+1)$** — 80 percent at $N=4$, 91 percent at $N=10$, 99 percent at $N=100$. Adding one machine to a hundred means re-transferring essentially the entire dataset.

Consistent hashing fixes it by removing $N$ from the arithmetic. Hash both keys and **nodes** into the same space, and treat that space as a circle. A key belongs to the first node clockwise from it.

Now add a node. It lands somewhere on the circle and takes ownership of the arc between itself and its predecessor — and **nothing else changes**, because every other key's first-node-clockwise is unaffected. The expected fraction that moves is $1/(N+1)$, which is the least any scheme could move: those keys must go somewhere for the new node to hold anything.

One problem remains. With $N$ nodes dropped at random on a circle, the arcs are wildly uneven — the largest is about $\ln N$ times the average — so one node gets far more data than another. **Virtual nodes** fix it: each physical node is hashed to the ring many times, say 200, so it owns 200 small arcs whose total length concentrates near the mean by the usual averaging argument. With 10 nodes, the max-to-min load ratio falls from about 16 at one token per node to about 1.2 at 200.

Finally, *finding* the owner. A client with the full node list computes it locally. A peer-to-peer system where no node knows all the others uses **Chord**: each node keeps a **finger table** of $\log_2 N$ pointers at exponentially increasing distances around the ring, and a lookup halves the remaining distance at every hop — **$O(\log N)$ hops**, 20 among a million nodes.

## The formal version

> **Naive modulo hashing.** With $N$ nodes, key $k$ lives at $h(k) \bmod N$. Moving from $N$ to $N+1$ nodes relocates a fraction $\frac{N}{N+1}$ of keys.

> **Consistent hashing.** Map keys and nodes into a common space $[0, 2^m)$ with a hash. Key $k$ is owned by the first node whose position is $\ge h(k)$, wrapping around. Adding a node relocates only the keys in the arc from its predecessor to itself — in expectation $\frac{1}{N+1}$ of all keys.

> **Virtual nodes.** Each physical node is placed at $V$ positions, $h(\texttt{node}\#1), \ldots, h(\texttt{node}\#V)$. Its load is the sum of $V$ arc lengths, so the relative spread shrinks like $1/\sqrt{V}$.

Simulated with 10 physical nodes and 60,000 keys:

| $V$ | max/min load ratio | busiest node's share (ideal 0.100) |
|---|---|---|
| 1 | 16.2 | 0.202 |
| 10 | 2.31 | 0.143 |
| 50 | 1.58 | 0.117 |
| 200 | 1.22 | 0.110 |

**One token per node is not merely imperfect, it is unusable** — a 16-to-1 imbalance means the busiest machine saturates while the quietest idles. Virtual nodes also give a second benefit: when a node fails, its $V$ arcs are inherited by $V$ *different* successors, so the recovery load is spread over the cluster rather than dumped on one neighbour.

> **Chord.** Node $n$'s finger table holds, for $i = 0 \ldots m-1$, the first node at or after $n + 2^i$ on the ring. A lookup for key $k$ forwards to the closest preceding finger, halving the remaining arc each hop, terminating in $O(\log N)$ hops.

| $N$ | finger table entries | expected hops |
|---|---|---|
| 1,000 | 10 | 10 |
| $10^6$ | 20 | 20 |
| $10^9$ | 30 | 30 |

> **Replication and churn.** Each key is stored on its owner and the next $R-1$ nodes clockwise — the **successor list**. A node joining or leaving triggers transfers only between neighbours. A **stabilization** protocol periodically repairs successor pointers so that routing stays correct under churn, and correctness of lookup depends only on the successor pointers, with fingers being a performance optimisation.

## Picture

![On the left, a hash ring with five nodes labelled A through E placed around a circle, and a new node inserted between B and C. The arc from B clockwise to the new node is highlighted, marking the only keys that change owner. Text in the centre notes that a key goes clockwise to the next node. On the right, a comparison: for ten nodes adding an eleventh, hash-modulo-N moves 90.9 percent of keys while consistent hashing moves 9.1 percent; a table of virtual nodes per physical node against max-to-min load ratio, from 16.2 at one token to 1.22 at 200; and a note that Chord routing takes about log-base-2 of N hops, so 20 among a million nodes.](assets/04-04-fig1.svg)

The highlighted arc is the entire cost of adding a machine. Every key outside it has the same first-node-clockwise as before and does not move — and the reason is structural: **the ring's ownership rule never mentions how many nodes there are**, which is exactly what `mod N` got wrong.

## Worked examples

**Example 1 — the rebalancing bill, two ways.**

A cache holds 2 TB across 10 nodes, and an eleventh is added.

**Under `hash mod N`.** The fraction moving is $10/11 = 90.9$ percent, so about **1.82 TB** crosses the network. At 10 Gb/s of usable cluster bandwidth that is roughly

$$\frac{1.82 \times 10^{12} \times 8}{10^{10}} = 1456 \text{ s} \approx \mathbf{24 \text{ minutes}}$$

of full-rate transfer, during which cache hit rates collapse because the data is in flight. **And the same bill is due for every node added or removed, including every failure.**

**Under consistent hashing.** The fraction moving is $1/11 = 9.1$ percent: about **182 GB**, roughly 2.4 minutes — a factor of ten better, and the ratio improves as the cluster grows, since the naive scheme approaches 100 percent while consistent hashing approaches $1/N$.

**Simulation check.** Adding an eleventh node to ten, with 200 virtual nodes each, moved **8.39 percent** of 60,000 keys against the theoretical 9.09 percent — the gap being sampling variance on a finite key set. With one token per node the measured figure was 5.98 percent, and **that lower number is not better news**: it means the new node's single arc happened to be small, so it took less than its share of the data and will now hold less than its share of the load.

**Example 2 — why a lookup is 20 hops and not 500,000.**

A Chord ring of $N = 10^6$ nodes in a 32-bit identifier space. Node $n$ wants the owner of a key at ring position $t$, which is 500,000 positions ahead in node count.

Each node's finger table holds the first node at or after $n + 2^i$ for $i = 0, 1, 2, \ldots$ — pointers at distances 1, 2, 4, 8, … around the ring. The lookup forwards to the **closest preceding finger**, which by construction is at least halfway to the target.

So the remaining distance halves every hop: $2^{32} \to 2^{31} \to \cdots$, reaching a single node in at most 32 hops, and in $\log_2 N \approx \mathbf{20}$ hops in expectation, since the ring is sparsely populated with $10^6$ of $2^{32}$ positions occupied.

**What this costs and what it buys.** Twenty hops is real latency — at 1 ms per hop, 20 ms for a lookup that a client with the full membership list resolves in zero hops. So **why would anyone accept it?**

Because the full list is only cheap when membership is small and stable. A Dynamo-style cluster of a few hundred nodes gossips the whole list to every client and does one-hop routing, and that is the right design there. Chord was built for millions of unreliable peers with continuous churn, where no node can hold the list and no node is trusted to serve it. **The $O(\log N)$ hop count is the price of not having a membership list**, and if you can afford the list, do not pay it.

**The fragile part is not routing but churn.** Correctness of a lookup depends only on the **successor pointers**; the fingers merely make it fast. So the stabilization protocol repairs successors aggressively and fingers lazily, and a ring whose successor pointers are broken returns wrong answers while a ring with stale fingers merely returns slow ones. **Separating the correctness structure from the performance structure, and repairing them at different rates, is the design idea worth taking away.**

## Watch out

- **You might think one token per node is enough.** The largest of $N$ random arcs is about $\ln N$ times the mean, giving a 16-to-1 max/min ratio at $N = 10$ in simulation. Virtual nodes are not a refinement, they are required — and they also spread a failed node's load across many successors instead of one.
- **You might think consistent hashing gives you replication.** It gives you *placement*. Durability requires storing each key on the next $R-1$ successors as well, and keeping those copies in agreement is [2.3](02-03-eventual-consistency-and-anti-entropy.md)'s anti-entropy problem, unchanged.
- **You might think Chord is how production stores route.** Most do one-hop routing from a gossiped membership list, because a few hundred nodes make the list cheap. Chord's $O(\log N)$ is for the case where membership is too large or too volatile to hold — and that case is rarer than the literature suggests.

## One-liner

> `hash mod N` fails because the ownership rule mentions $N$, so changing $N$ rewrites every assignment; put keys and nodes on a common ring and let a key belong to the next node clockwise, and adding a machine disturbs only the arc behind it — provided each machine occupies enough arcs that the random ones average out.

## Problems

**P1 (🟢)** A cluster of 16 nodes holds 800 GB, and a 17th node is added.

(a) Give the fraction and volume of data that moves under `hash mod N`.
(b) Give the fraction and volume under consistent hashing.
(c) The cluster instead loses a node, going from 16 to 15. Give the fraction that moves under each scheme.
(d) State in one clause why the consistent-hashing figure cannot be improved on.

**P2 (🟡)** A ring has 8 physical nodes.

(a) With one token per node, state roughly how much larger the biggest arc is than the average, and the practical consequence.
(b) With 128 virtual nodes per physical node, state what happens to the load spread and why.
(c) Node 3 fails. State which nodes absorb its data with 1 token per node, and with 128.
(d) The team sets 4096 virtual nodes per physical node. Give one cost this incurs.

**P3 (🔴, optional)** A peer-to-peer store uses Chord over a 128-bit identifier space with roughly $2^{20}$ live nodes.

(a) Give the finger-table size and the expected hop count for a lookup.
(b) At 40 ms per hop, give the expected lookup latency, and compare with a one-hop design using a gossiped membership list.
(c) A node's finger table is entirely stale but its successor pointer is correct. State whether lookups still return the right answer, and what changes.
(d) Both the finger table and the successor pointer are stale. State what can go wrong, and give the mechanism that repairs it.

<details>
<summary>Solutions</summary>

**P1**

(a) $\frac{N}{N+1} = \frac{16}{17} = \mathbf{94.1\%}$, which is $0.941 \times 800 = \mathbf{753 \text{ GB}}$.

(b) $\frac{1}{N+1} = \frac{1}{17} = \mathbf{5.9\%}$, which is $\mathbf{47 \text{ GB}}$ — a factor of 16 less.

(c) **Removing** a node from 16 to 15:

Under `hash mod N`, keys move from $h \bmod 16$ to $h \bmod 15$, and the fraction that stays is about $1/15$, so roughly **93.3%** moves.

Under consistent hashing, the departing node's arc is inherited by its successor and **nothing else moves**: $\frac{1}{16} = \mathbf{6.25\%}$.

(d) **Because the new node must end up holding roughly its share of the data, and $1/(N+1)$ of the keys is exactly that share** — so no scheme can move less without leaving the new node underloaded.

**P2**

(a) The largest of $N$ random arcs is about $\ln N$ times the mean, so at $N = 8$ the biggest arc is roughly $\ln 8 \approx 2.1$ times the average — and the *ratio between the biggest and smallest* is far worse, measured at about 16 for $N = 10$ in the simulation above.

**The practical consequence is that the busiest node saturates while the quietest idles**, so the cluster's capacity is set by its unluckiest machine rather than by its total hardware. Provisioning for peak means over-provisioning everything by the imbalance factor.

(b) The load spread **shrinks by roughly $\sqrt{128} \approx 11$**, bringing the max/min ratio close to 1.

Why: each physical node's load is the sum of 128 independent arc lengths rather than one, and the relative standard deviation of a sum of $V$ independent identically distributed terms falls as $1/\sqrt{V}$. This is the same averaging argument as the law of large numbers in [`prob-stat-refresher` 3.2](../../prob-stat-refresher/lessons/03-02-sums-and-law-of-large-numbers.md), applied to arc lengths.

(c) **With 1 token:** node 3's single arc is inherited entirely by its single clockwise successor, which now holds roughly **twice** its previous load — and having just doubled its load, that successor becomes the next thing to fall over. This is the classic cascading failure of a ring without virtual nodes.

**With 128 tokens:** node 3's 128 arcs have 128 independently chosen successors, so with 7 surviving nodes each absorbs about $128/7 \approx 18$ arcs — roughly **1/7 extra load each**, spread evenly. The cluster degrades gracefully instead of toppling.

(d) **Metadata and gossip cost.** The ring now has $8 \times 4096 = 32{,}768$ tokens, and every node and client must hold and gossip the whole token map, so membership messages grow and a join or leave churns thousands of token entries. Lookups also become more expensive — a binary search over 32,768 entries rather than 1,024 — and the load-spread benefit past a few hundred tokens is negligible, since $1/\sqrt{V}$ has already flattened out.

**The usual range is 100 to 500 tokens per node**, which captures nearly all the smoothing at a fraction of the metadata.

**P3**

(a) The finger table has one entry per bit of the identifier space: $\mathbf{128 \text{ entries}}$ — though only the last $\log_2 N \approx 20$ of them point at distinct nodes, the rest collapsing onto the same near neighbours in a sparsely populated ring.

Expected hops: $\log_2 N = \log_2 2^{20} = \mathbf{20}$.

(b) $20 \times 40 = \mathbf{800 \text{ ms}}$ per lookup.

A one-hop design resolves the owner locally from the membership list and makes **one** 40 ms request — **twenty times faster**. The comparison is stark enough to state the rule: **if you can afford to hold the membership list, hold it.** Chord's structure exists for the case where you cannot, and 800 ms is what that case costs.

(c) **Lookups still return the right answer**, and they become **slow**.

Correctness rests only on the successor pointer: in the worst case a node forwards to its successor, which forwards to its successor, and the query walks the ring one node at a time until it reaches the owner. That terminates at the correct node, and it takes $O(N)$ hops instead of $O(\log N)$ — around a million hops here rather than 20.

**Fingers are a performance structure and successors are the correctness structure**, which is why stabilization repairs successors urgently and fingers lazily.

(d) With a stale successor pointer, a lookup can **terminate at the wrong node** — one that no longer owns the key — and return a missing or outdated value, or accept a write that the true owner never sees. Two nodes may simultaneously believe they own the same arc, which is the ring's version of split brain ([1.2](01-02-failure-models-and-the-network.md)).

**The repair mechanism is the stabilization protocol.** Periodically, each node asks its successor who *its* predecessor is. If the answer is a node between itself and its successor, that node has joined in between and the pointer is updated; the new node is also notified so it can set its own predecessor. Nodes additionally keep a **successor list** of the next $R$ nodes rather than one pointer, so a single failure is covered immediately by the next entry rather than waiting for a stabilization round.

Note what the successor list does double duty for: it is also where the $R$ replicas of each key live ([2.5](02-05-replication-strategies.md)), so the structure that provides routing robustness and the structure that provides data durability are the same list.

</details>

## Flashback

**From Lesson 4.3 (MapReduce):** A job runs 3,000 map tasks, each normally taking 90 seconds, with each task independently slow — taking 12 times as long — with probability 0.005.

(a) Give the probability the job contains at least one straggler.
(b) Give the expected map-phase duration with no speculative execution.
(c) State the property of a job's duration that makes (b) so much worse than the average task time.

<details>
<summary>Solution</summary>

(a) $1 - (1 - 0.005)^{3000} = 1 - 0.995^{3000}$.

$0.995^{3000} = e^{3000 \ln 0.995} = e^{-15.04} = 2.9 \times 10^{-7}$, so the probability is $\mathbf{99.99997\%}$ — a straggler is effectively certain.

(b) A slow task takes $12 \times 90 = 1080$ seconds, and since a straggler is present with probability essentially 1, the phase ends when it does: **about 1080 seconds, 18 minutes.**

The mean task time is barely above 90 seconds — $0.995(90) + 0.005(1080) = 95$ seconds — so the phase takes **eleven times the average task time.**

(c) **A job's duration is the maximum over its tasks, not the mean**, and the maximum of thousands of samples sits far out in the tail of the distribution.

This is why the straggler rate matters so much more than it looks: halving the average task time changes the phase duration hardly at all, while eliminating the 0.5 percent tail changes it by a factor of eleven. The same extreme-value logic governs the fan-out read of [1.3](01-03-rpc-and-delivery-semantics.md)'s flashback and the wait-for-all replication of [2.5](02-05-replication-strategies.md) — **anywhere a result waits on all of many responses, the tail is the whole story.**

</details>

## Connections

- **Backward:** the successor list that provides routing robustness is also where [2.5](02-05-replication-strategies.md)'s replicas live, and keeping those replicas in agreement is [2.3](02-03-eventual-consistency-and-anti-entropy.md)'s anti-entropy problem — with the Merkle tree built per token range precisely so that a range that did not diverge costs one hash comparison.
- **Forward:** [4.6](04-06-nakamoto-consensus-and-blockchains.md) faces the same membership problem with an adversary present, where a node may create unlimited identities to occupy the ring — the Sybil attack, which consistent hashing has no defence against and proof-of-work is designed to answer.
- **Sideways:** [`databases` 4.6](../../databases/lessons/04-06-nosql-and-distributed-data.md) owns the query-side consequences of sharding — scatter-gather, cross-shard joins, hot shards under range partitioning — and this lesson owns the placement mechanism. Both halves are needed to make a sharding decision: hash partitioning gives the even load analysed here and destroys range-query locality, which is that lesson's trade.
- **Sideways:** the $1/\sqrt{V}$ smoothing from virtual nodes is the standard-error argument of [`prob-stat-refresher` 3.2](../../prob-stat-refresher/lessons/03-02-sums-and-law-of-large-numbers.md), and the $\ln N$ largest-arc result is the same extreme-value reasoning as the straggler analysis in [4.3](04-03-mapreduce-and-large-scale-processing.md) — random partitions of an interval have a heavier maximum than intuition suggests.
