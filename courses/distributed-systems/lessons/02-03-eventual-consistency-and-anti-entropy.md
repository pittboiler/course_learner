# Distributed Systems · Lesson 2.3: Eventual consistency and anti-entropy

> ⏱ ~15 min · Module 2: Consistency and Replication · Builds on: [2.2 (sequential and causal consistency)](02-02-sequential-causal-and-session-consistency.md), [1.5 (logical time)](01-05-logical-time-lamport-and-vector-clocks.md) · Unlocks: [2.4 (CRDTs)](02-04-crdts-and-strong-eventual-consistency.md), [2.6 (quorum systems)](02-06-quorum-systems.md)

## Why this matters

At the bottom of [2.2](02-02-sequential-causal-and-session-consistency.md)'s hierarchy is a promise so weak it sounds like no promise at all: *if writes stop, the replicas will eventually agree.* No bound on "eventually", no statement about what a read sees before then.

But it is the guarantee that lets a system stay up when the network does not, and it is what most of the internet runs on. The engineering question is not whether to accept it but what it actually takes to deliver it — because "eventually agree" hides two separate obligations, and systems fail at each of them differently. **Every update must reach every replica**, and **when two replicas hold different values, they must pick the same answer**. This lesson is about the machinery for the first and the honest accounting of the second.

Note the boundary: [`databases` 4.6](../../databases/lessons/04-06-nosql-and-distributed-data.md) owns the practitioner's framing — BASE, the NoSQL families, the $R+W>N$ arithmetic. This lesson owns the *mechanisms* underneath it, and [2.4](02-04-crdts-and-strong-eventual-consistency.md) owns the algebra that makes reconciliation provable rather than arbitrary.

## The idea

**Getting the update everywhere** is a delivery problem, and the answer is redundancy in time rather than in the moment. Three mechanisms stack up.

**Read repair.** When a read contacts several replicas and finds disagreement, it pushes the winning version back to the stale ones. Free — it rides along on traffic you were doing anyway — but it only ever repairs data somebody reads, so cold data stays divergent indefinitely.

**Hinted handoff.** When a write cannot reach its home replica, a neighbour accepts it and holds a *hint*: "this belongs to node 3." When node 3 returns, the neighbour delivers it. This keeps writes available during a failure and is the mechanism that makes an AP store's writes succeed when a replica is down.

**Anti-entropy.** A background process that compares two replicas' whole datasets and fixes every difference. This is the one that guarantees convergence, because unlike the other two it does not depend on what clients happen to touch. Naively it costs a full scan; the trick that makes it affordable is the **Merkle tree** — hash every key, hash pairs of hashes upward to a root, and compare trees top-down, descending only where hashes differ. Matching subtrees are skipped whole.

**Choosing the same answer** is where the honesty is required. The system must decide between two versions, and it has exactly two kinds of information: whether one *causally* supersedes the other, and — if not — nothing at all.

**Version vectors** settle the first question exactly. They are [1.5](01-05-logical-time-lamport-and-vector-clocks.md)'s vector clocks applied per key, with one counter per *replica* rather than per process. If one version's vector dominates the other, the dominated one is genuinely obsolete and may be discarded with no loss. If neither dominates, the writes were **concurrent**, and the store has a real conflict.

For that conflict there are three honest responses and one dishonest one. Keep both as **siblings** and let the application choose. Merge them with a type-specific function ([2.4](02-04-crdts-and-strong-eventual-consistency.md)). Ask a human. Or — the dishonest one — **last-writer-wins**: compare wall-clock timestamps and silently discard the loser. LWW is not conflict *resolution*; it is conflict *deletion*, and [1.4](01-04-physical-clocks-and-synchronization.md) showed the timestamp it consults is an interval, not an instant.

## The formal version

> **Eventual consistency.** If no new updates are made to an object, eventually all replicas that remain reachable converge to the same value.

Note the two escape hatches in the statement. *If writes stop* — a continuously written object need never converge. *Eventually* — with no bound, so no read before convergence has any guarantee at all.

> **Version vector.** For a key replicated at nodes $1..n$, a version is tagged with $V \in \mathbb{N}^n$, where $V[i]$ counts the updates node $i$ has applied to that key. On a local update at $i$: $V[i] \mathbin{+}= 1$. On receiving a version $W$:
> - if $W \le V$: discard $W$ — it is already included;
> - if $V \le W$: replace $V$ with $W$ — it strictly supersedes;
> - otherwise: **conflict** — keep both as siblings, and a later write that resolves them carries the pointwise maximum.

In words: the same dominance test as [1.5](01-05-logical-time-lamport-and-vector-clocks.md), with the coordinates renamed from processes to replicas. The size is $O(n)$ per key, which is affordable for a handful of replicas and is exactly why the coordinates are replicas rather than clients.

> **Merkle tree.** A binary tree over the keys of a range: each leaf holds $h(\text{key}, \text{value})$, each internal node holds $h(\text{left} \| \text{right})$. Two replicas compare roots; if equal, the ranges are identical and the exchange is over. If not, they recurse into children whose hashes differ.

**Cost.** With $N$ keys and $k$ differing, the comparison exchanges $O(k \log N)$ hashes instead of $O(N)$ keys. Concretely, with $N = 2^{20} \approx 10^6$ keys and one key differing: the tree has depth 20, the descent compares two hashes per level, so about **40 hashes** are exchanged against **a million** keys for a full scan.

> **Gossip / epidemic dissemination.** Each round, every node holding the update sends it to a randomly chosen peer. The number of rounds to reach all $n$ nodes is $\log_2 n + \ln n + O(1)$ with high probability.

The two terms are the two phases: an exponential growth phase where the informed set doubles ($\log_2 n$ rounds), and a mopping-up phase where the last few uninformed nodes must be hit by chance ($\ln n$ rounds, the coupon-collector tail). Simulated at $n = 1000$ this gives about 18 rounds against the formula's 16.9; at $n = 10{,}000$, about 24 against 22.5. **Ten times the nodes costs about six more rounds** — which is why gossip scales to clusters where a coordinator would not.

## Picture

![A binary Merkle tree of depth three over eight keys. The root hash differs between two replicas, so the comparison descends; the left subtree's hash matches and is marked equal and skipped, as are two further subtrees at the next level down. The highlighted path runs from the root through two internal nodes to a single leaf, the only key actually fetched. A caption notes that one differing key among a million costs about forty hash comparisons.](assets/02-03-fig1.svg)

The skipped subtrees are where the saving lives. Each "equal" label is a whole range of keys certified identical by a single hash comparison, and the cost of the whole exchange is proportional to the number of *differences*, not the size of the dataset.

## Worked examples

**Example 1 — version vectors on a divergent key, step by step.**

Three replicas $(A, B, C)$ hold key `cart`, all starting at version $(0,0,0)$ with value `[]`.

1. **Client writes `[book]` at A.** $A$'s vector becomes $(1,0,0)$. It propagates to $B$ and $C$, which accept it — $(0,0,0) \le (1,0,0)$, a strict supersede.
2. **A partition separates $C$ from $\{A, B\}$.**
3. **Client writes `[book, lamp]` at A**, based on reading `[book]`. $A$'s vector: $(2,0,0)$. $B$ accepts it.
4. **Client writes `[book, pen]` at C**, also based on `[book]`. $C$'s vector: $(1,0,1)$.
5. **The partition heals.** $A$ sends $(2,0,0)$ to $C$.

$C$ compares. Is $(2,0,0) \le (1,0,1)$? No — first coordinate $2 > 1$. Is $(1,0,1) \le (2,0,0)$? No — third coordinate $1 > 0$. **Neither dominates: a genuine conflict.**

$C$ stores **both siblings** and returns both on the next read. The client sees `[book, lamp]` and `[book, pen]`, merges them to `[book, lamp, pen]`, and writes that back. The resolving write carries the pointwise maximum plus its own increment: $(2, 0, 2)$ if written at $C$ — which dominates both siblings, so both are discarded and the key converges.

**Now the same run under last-writer-wins.** The two writes carry wall-clock timestamps from two machines whose clocks, per [1.4](01-04-physical-clocks-and-synchronization.md), agree only to within tens of milliseconds. Whichever number is larger wins; the other item **vanishes from the cart with no record that it existed**. The customer added a pen and it is gone, and no log anywhere says why.

**The difference is not reliability, it is honesty.** Both schemes converge. One converges to a state containing everything the users did; the other converges to a state that silently dropped an intent, chosen by a clock comparison that carries no information about which write was actually later.

**Example 2 — sizing an anti-entropy sweep.**

A replica holds $10^6$ keys averaging 200 bytes, and a peer that was down for an hour is missing 50,000 of them.

**Full scan.** Ship every key and value for comparison: $10^6 \times 200 = 200$ MB, per pair of replicas, per sweep. Run that every ten minutes across a cluster and anti-entropy becomes the dominant traffic on the network.

**Merkle exchange.** Build a tree of depth 20 over the $10^6$ keys. With $k = 50{,}000$ differing keys, the descent visits at most $k \log_2 N = 50{,}000 \times 20 = 10^6$ internal nodes — but that bound is loose, because near the root the number of nodes at level $\ell$ is capped at $2^\ell$. The differences are spread over the tree, so by level 16 or so essentially every node differs and the descent is visiting the whole level.

**This is the case where Merkle trees stop helping**, and it is worth seeing clearly: the saving is proportional to how *concentrated* the differences are. One missing key costs 40 hashes; 5 percent of the keys missing costs about as much as scanning. Real systems handle this by **splitting the keyspace into many small trees** — one per token range — so a replica that missed an hour of writes to one range rebuilds only that range, and the untouched ranges are certified identical by one root comparison each.

**The general rule to take away: Merkle anti-entropy is cheap when divergence is rare and localised, and degrades to a full scan when it is widespread.** Sizing it means asking not "how many keys?" but "how many keys differ, and are they clustered?"

## Watch out

- **You might think eventual consistency means "consistent after a short delay".** It means convergence *if writes stop*, with no bound and no guarantee about any read before then. For a hot key that is written continuously, "eventually" may never arrive, and the definition permits that.
- **You might think last-writer-wins resolves conflicts.** It discards one side of every conflict, using a timestamp whose uncertainty ([1.4](01-04-physical-clocks-and-synchronization.md)) is usually larger than the interval it is being asked to resolve. It is a legitimate choice for data where losing a concurrent update costs nothing; it is a data-loss bug everywhere else, and the loss is silent.
- **You might think read repair is enough to converge.** It repairs only what is read. A key written once, never read, and lost from one replica stays lost until an anti-entropy sweep finds it — which is precisely why the background sweep exists despite costing real bandwidth.

## One-liner

> Eventual consistency is two obligations wearing one name: get every update to every replica, which is a delivery problem solved by gossip and Merkle-guided anti-entropy, and agree on a value when two replicas differ, which version vectors can only *detect* — the resolving is a decision about your data, and last-writer-wins is the decision to throw one side away.

## Problems

**P1 (🟢)** A key is replicated at three nodes $(A, B, C)$. Two versions of the key arrive at $C$ carrying version vectors $V_1 = (3, 1, 0)$ and $V_2 = (3, 2, 0)$.

(a) State whether one supersedes the other, and what $C$ should store.
(b) Repeat for $V_1 = (3,1,0)$ and $V_2 = (2,2,0)$.
(c) Repeat for $V_1 = (3,1,0)$ and $V_2 = (3,1,0)$ with **different values**, and state what this situation indicates about the system.
(d) After resolving the case in (b) by merging, a client writes the merged value at $C$. Give the version vector the resolving write carries.

**P2 (🟡)** A replica holds $2^{22}$ keys and uses a single Merkle tree over all of them.

(a) Give the depth of the tree and the number of hash comparisons needed to locate one differing key.
(b) A peer is missing exactly 4 keys, all adjacent in key order. Give an upper bound on the internal nodes visited, and state why the true number is lower than four times the single-key cost.
(c) The peer is instead missing 10 percent of all keys, uniformly scattered. State what happens to the cost and why.
(d) Give the design change that keeps the cost proportional to the divergence in case (c), and state the new cost when only one twentieth of the keyspace was affected.

**P3 (🔴, optional)** A store uses last-writer-wins on wall-clock timestamps, with replicas whose clocks are synchronized to within 50 ms.

(a) Give an ordered step list in which a client performs a read-modify-write, another client concurrently performs a different read-modify-write, and the *earlier-issued* write survives while the later one is discarded.
(b) State the property of the timestamps that makes your scenario possible, quoting the relevant quantity from [1.4](01-04-physical-clocks-and-synchronization.md).
(c) The team replaces wall-clock timestamps with Lamport timestamps, arguing that these are monotone and clock-free. State whether this fixes the data loss, with the reason.
(d) Give the change that does prevent silent loss, and state what it costs the application.

<details>
<summary>Solutions</summary>

**P1**

(a) Compare componentwise: $3 \le 3$, $1 \le 2$, $0 \le 0$, and the vectors differ. So $V_1 < V_2$: **$V_2$ supersedes $V_1$.**

$C$ should store **only $V_2$'s value** and discard $V_1$ entirely. The discard is safe, not a choice — $V_2$'s writer had already seen everything $V_1$ contained.

(b) $(3,1,0)$ against $(2,2,0)$: first coordinate $3 > 2$, second $1 < 2$. **Neither dominates — a conflict.**

$C$ should store **both as siblings** and return both on the next read. Note that no amount of cleverness lets the store choose here: the two writers each saw something the other did not.

(c) Identical vectors with different values means **two different updates were assigned the same version**, which the version-vector scheme is supposed to make impossible — each update increments exactly one coordinate at exactly one replica.

This indicates a **bug or a violated assumption**: two replicas sharing an identity, a node reusing a counter after a crash without durable state ([1.2](01-02-failure-models-and-the-network.md)'s crash-recovery trap), or a replica id collision after a re-provision. It is not a conflict the data model can express, and the correct response is to alert rather than to pick.

(d) The resolving write must dominate both siblings, so it takes the pointwise maximum and then increments the coordinate of the replica accepting it.

$$\max\big((3,1,0), (2,2,0)\big) = (3,2,0), \qquad \text{then increment } C: \ \mathbf{(3,2,1)}$$

Now $(3,1,0) \le (3,2,1)$ and $(2,2,0) \le (3,2,1)$, so both siblings are superseded and the key converges to one version.

**P2**

(a) $2^{22}$ leaves gives depth $\mathbf{22}$. Locating one differing key means descending 22 levels, comparing the two children's hashes at each: **44 hash comparisons**.

(b) A loose upper bound is $k \log_2 N = 4 \times 22 = \mathbf{88}$ internal nodes.

The true number is lower because the four keys are **adjacent**, so their root-to-leaf paths share almost all of their length — they diverge only in the last two or three levels. The shared prefix is traversed once, not four times, giving roughly $22 + 4 \times 2 = 30$ nodes rather than 88.

**Merkle cost is proportional to the number of distinct paths, and adjacent keys share paths.** This is why anti-entropy is cheap after a short outage, which loses a contiguous window of writes, and expensive after scattered corruption.

(c) With 10 percent of keys scattered uniformly, essentially **every** internal node above some level differs, because each subtree of size $s$ contains a differing key with probability $1 - 0.9^s$, which exceeds 0.99 once $s \ge 44$ — that is, at level 16 and everything above it toward the root.

So the descent visits substantially the whole tree, and the cost approaches $O(N)$: **the Merkle tree stops saving anything and degenerates to a full scan**, plus the overhead of computing and shipping all the hashes.

(d) **Split the keyspace into many independent Merkle trees**, one per token range, and compare only the ranges that could have diverged.

If one twentieth of the keyspace was affected, then with, say, 1024 ranges, about 51 ranges contain differences and 973 are certified identical by a single root comparison each. The cost becomes $973$ hash comparisons plus a full-ish descent in 51 small trees of $2^{12}$ keys each — roughly $973 + 51 \times 2^{12} \approx 2.1 \times 10^5$ nodes against $2^{22} \approx 4.2 \times 10^6$, a factor of **20**, which is exactly the fraction of the keyspace affected.

That is the design goal restated: **cost proportional to the divergence, not the dataset**, and it is why real stores keep one tree per replication range rather than one per node.

**P3**

*Accept criterion for (a): any two concurrent read-modify-writes on the same key where the write issued earlier in real time carries the larger timestamp. Which replica is fast and which is slow is free.*

(a) Key `tags` holds `[a]`. Replica $R_1$'s clock runs 40 ms ahead of $R_2$'s, within the stated 50 ms bound.

1. At true time $t = 0$, client $P$ reads `tags` from $R_1$, gets `[a]`.
2. At true time $t = 5$ ms, client $Q$ reads `tags` from $R_2$, gets `[a]`.
3. At true time $t = 10$ ms, $P$ writes `[a, x]` to $R_1$. $R_1$ stamps it with its local clock: $10 + 40 = \mathbf{50}$ ms.
4. At true time $t = 30$ ms, $Q$ writes `[a, y]` to $R_2$. $R_2$ stamps it with its local clock: $\mathbf{30}$ ms.
5. The replicas exchange. LWW compares 50 against 30 and keeps `[a, x]`.

**$Q$'s write was issued 20 ms later in real time and was discarded**; the tag `y` is gone with no record. The concurrent structure is genuine — neither client saw the other's write — so the conflict was real and the tiebreak was noise.

(b) The timestamps are **not comparable at the resolution being asked of them**. From [1.4](01-04-physical-clocks-and-synchronization.md), two clocks synchronized to within 50 ms can differ by up to that amount, so any two writes less than 50 ms apart may be timestamped in either order. Here the true gap was 20 ms, well inside the 50 ms uncertainty, so the comparison had no information in it at all.

(c) **It does not fix the data loss, though it fixes a different problem.**

Lamport timestamps satisfy the clock condition ([1.5](01-05-logical-time-lamport-and-vector-clocks.md)): if $w_1 \to w_2$ then $L(w_1) < L(w_2)$. So a genuinely superseding write always wins, which wall-clock timestamps could not guarantee — a real improvement.

But the converse fails. Two **concurrent** writes still receive different Lamport numbers, the larger still wins, and the smaller is still discarded. The scheme has stopped being wrong about causally ordered writes and remains exactly as lossy about concurrent ones. And the loss is now *deterministic*, which makes it reproducible but no less silent.

(d) **Use version vectors and keep siblings.** Detect that the two writes are concurrent, store both, and surface them to the application on the next read.

**The cost to the application is that a read may return a set of values rather than one**, so every caller must contain merge logic — and for some types there is no sensible merge, which is the problem [2.4](02-04-crdts-and-strong-eventual-consistency.md) addresses by restricting the data types to ones where a merge provably exists.

The intermediate option worth knowing: keep siblings in the store but have the *client library* apply a registered merge function, so the application sees one value while the store never discards one. That is the design most production AP stores settle on.

</details>

## Flashback

**From Lesson 2.2 (sequential, causal and session consistency):** A user of a replicated note-taking app experiences the following on three consecutive syncs, with no other device writing: the note shows 12 items, then 9 items, then 12 items again.

(a) Name the session guarantee violated.
(b) State whether the system could still be **causally consistent**, with the reason.
(c) Give a client-side fix that costs the server nothing.

<details>
<summary>Solution</summary>

(a) **Monotonic reads.** A read returned a value, and a later read by the same client returned an earlier one — reads went backwards.

(b) **No.** Causal consistency implies all four session guarantees, monotonic reads among them, so a system exhibiting this run is not causally consistent from that client's point of view.

The mechanism is worth naming: the client was served by a fresh replica and then by a stale one. Causal delivery would have required the second replica to hold everything in the causal past of what the client had already observed before serving it — which is precisely the check the second replica failed to make.

(c) **Have the client remember the highest version it has seen and refuse an older one** — either by re-requesting from another replica or by continuing to display the cached newer value.

The token is small (a version number or a vector), it travels in the session, and the server needs no change: it simply answers with its version, and the client decides whether to accept. This is the cheapest of all the consistency fixes in Module 2, which is why session guarantees are the first thing to reach for and global consistency the last.

</details>

## Connections

- **Backward:** version vectors are [1.5](01-05-logical-time-lamport-and-vector-clocks.md)'s vector clocks with replicas as coordinates, and the reason last-writer-wins is lossy is [1.4](01-04-physical-clocks-and-synchronization.md)'s clock-uncertainty interval. Gossip is [1.7](01-07-ordered-broadcast-fifo-causal-total.md)'s reliable broadcast bought probabilistically rather than deterministically.
- **Forward:** [2.4](02-04-crdts-and-strong-eventual-consistency.md) replaces "the application must merge" with data types whose merge is proved correct, and [2.6](02-06-quorum-systems.md) puts hinted handoff and read repair in their proper setting as the Dynamo-style availability mechanisms.
- **Sideways:** the Merkle tree is the same structure that certifies a block's transactions in [4.6](04-06-nakamoto-consensus-and-blockchains.md), used for a different purpose — there it proves inclusion to a verifier, here it localises a difference between two holders. Both rely on the same property: a hash of a subtree summarises the whole subtree in constant space. The cryptographic assumptions it needs are noted as assumed on the reference card, since `cryptography` is not yet built.
- **Sideways:** the gossip round count is a coupon-collector argument — the $\ln n$ mopping-up term is exactly the expected number of extra draws to hit the last few coupons, the same calculation as in [`prob-stat-refresher` 2.1](../../prob-stat-refresher/lessons/02-01-expectation-variance-moments.md)'s expectation toolkit.
