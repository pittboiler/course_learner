# Programming & Data Structures · Lesson 2.5: Hash tables

> ⏱ ~15 min · Module 2: Linear structures · Builds on: [2.4 (stacks and queues)](02-04-stacks-and-queues.md) · Unlocks: 3.1 (binary trees and BSTs)

## Why this matters

Every structure so far has been priced against $n$. Finding a value in an array or a list is $\Theta(n)$; keeping it sorted to get $\Theta(\log n)$ lookups costs $\Theta(n)$ per insertion. The hash table breaks that pattern: **insert, delete and look up, all in $\Theta(1)$ expected time**, regardless of how many items it holds.

That is close to the best result in this course, and it is why the hash table is the default associative structure in every language you will use — Python's `dict`, Java's `HashMap`, Go's `map`, a JavaScript object. When someone says "just use a map", this is the thing they mean.

The judgement content is the two words the slogan drops. **Expected**, not worst case: the guarantee is over the hash function's behaviour, and it collapses to $\Theta(n)$ when keys collide — accidentally, or because someone arranged it. And **unordered**: a hash table cannot give you the smallest key, or the keys in order, or everything between two bounds, at any price. Those two limitations are exactly the openings that [Module 3's](03-01-binary-trees-and-binary-search-trees.md) trees are built to fill, so this lesson is also the setup for the next one.

## The idea

**Index by arithmetic on the key, not on the position.** An array gets $\Theta(1)$ access because `addr(a[i]) = base + i·w` turns a *position* into an address. A hash table applies the same trick to a *key*: run it through a **hash function** $h$ producing an integer, reduce that modulo the number of buckets, and store the item there.

$$\text{bucket}(k) \;=\; h(k) \bmod m.$$

Lookup does the same computation and goes straight to the right bucket. No scanning, no comparisons against other keys, no dependence on $n$.

**Collisions are certain, not exceptional.** There are vastly more possible keys than buckets, so two keys must sometimes land in the same place — that is the pigeonhole principle, not bad luck. A hash table is therefore *a bucket array plus a policy for collisions*, and the policy is half the design:

- **Chaining:** each bucket holds a small linked list of the items that landed there. Lookup finds the bucket, then scans its chain.
- **Open addressing:** each bucket holds at most one item, and a collision probes onward to the next free slot by some rule. Lookup probes the same way until it finds the key or an empty slot.

**The [load factor](../reference.md#hash-table-load-factor) controls everything.** Write $\alpha = n/m$, items per bucket. With chaining the expected chain length is exactly $\alpha$, so a lookup costs $1 + \alpha$ probes on average. Keep $\alpha$ bounded — resize when it exceeds, say, 0.75 — and $1 + \alpha$ is a constant. **That is the whole $\Theta(1)$ argument**, and it depends on resizing, which is [Lesson 2.2's](02-02-arrays-and-dynamic-arrays.md) doubling all over again.

**What "expected" is averaged over.** Not over inputs. The claim is that *for a good hash function*, keys spread evenly over buckets. If they do not — because the function is poor, or the keys are structured, or an adversary chose them — every key lands in one bucket, the chain is length $n$, and lookup is $\Theta(n)$. The hash table has quietly become a linked list.

## The formal version

**What a hash function must do.** Deterministic (the same key always hashes the same), fast (or the $\Theta(1)$ is a lie), and **uniform** — spreading keys evenly over $[0, m)$ regardless of their structure. The third is the hard one: `h(name) = length(name)` is deterministic and fast and puts almost everything in buckets 3–10.

Equal keys must hash equally: $k_1 = k_2 \Rightarrow h(k_1) = h(k_2)$. Violating this — by hashing an object's memory address while comparing by value, or by mutating a key after inserting it — makes items *unfindable*, still present and permanently invisible. **Never mutate a key while it is in a hash table.**

**Chaining costs.** With $n$ items in $m$ buckets and $\alpha = n/m$:

| | expected probes |
|---|---|
| unsuccessful search | $1 + \alpha$ |
| successful search | $1 + \alpha/2$ |
| insert | $\Theta(1)$ |
| delete (given the key) | $1 + \alpha$ |

**Open addressing with linear probing** is more sensitive, because probe sequences merge into clusters:

$$\text{unsuccessful search} \;\approx\; \frac12\left(1 + \frac{1}{(1-\alpha)^2}\right).$$

| $\alpha$ | chaining, unsuccessful | linear probing, unsuccessful |
|---|---|---|
| 0.5 | 1.5 | 2.5 |
| 0.75 | 1.75 | 8.5 |
| 0.9 | 1.9 | 50.5 |
| 0.95 | 1.95 | 200.5 |

*(Machine-verified.)* **Open addressing degrades catastrophically as the table fills**, which is why implementations that use it resize aggressively — typically at $\alpha = 0.5$ — while chaining tolerates $\alpha = 1$ or more. In exchange, open addressing stores everything in one contiguous array with no per-item allocation, so its constants are much better at low load. That trade is the reason both designs are in wide use.

**Resizing.** When $\alpha$ exceeds the threshold, allocate a bucket array of double the size and **rehash every item** — the bucket index depends on $m$, so nothing can simply be copied. That is $\Theta(n)$, and by the doubling argument of [Lesson 2.2](02-02-arrays-and-dynamic-arrays.md) it amortizes to $\Theta(1)$ per insertion. As always, the amortized bound says nothing about the individual insertion that triggers it, which pauses for $\Theta(n)$.

**Cost summary, and the fine print.**

| operation | expected | worst case |
|---|---|---|
| `insert` | $\Theta(1)$ amortized | $\Theta(n)$ |
| `lookup` | $\Theta(1)$ | $\Theta(n)$ |
| `delete` | $\Theta(1)$ | $\Theta(n)$ |
| minimum, sorted iteration, range query | — | **not supported at any cost** |

## Picture

![On the left, five keys — ada, grace, alan, edsger and barbara — feed through a box labelled h of key mod 6 into a column of six numbered buckets. Bucket 1 holds a chain of three blue boxes labelled ada, alan and barbara, joined by arrows; bucket 3 holds grace and bucket 4 holds edsger; buckets 0, 2 and 5 are empty. An annotation reads: three keys, one bucket — a collision chain. Below, a caption defines the load factor alpha as items over buckets, notes that with chaining the expected chain length is alpha so a lookup costs one plus alpha probes, and warns that this expectation is over the hash function, not over the keys. A table gives expected probes for unsuccessful search at three load factors under chaining and linear probing: 1.5 and 2.5 at alpha one half, 1.75 and 8.5 at alpha three quarters, and 2.0 and infinity at alpha one.](assets/02-05-fig1.svg)

**The left half is the mechanism and the right-hand column of the table is the warning.**

Look at bucket 1. Three of five keys landed there — with six buckets and five keys, $\alpha = 0.83$, and a chain of three is well above the expected 0.83. **Collisions are normal at any load factor**, and a table that is on average fine can have individual buckets that are not.

Now read the probe table across. At $\alpha = 0.75$ chaining costs 1.75 probes and linear probing costs **8.5** — nearly five times more, for the same occupancy. At $\alpha = 0.9$ it is 1.9 against 50.5. The chaining column barely moves as the table fills; the open-addressing column explodes, because probes collide with *other probes* and clusters merge into longer clusters, a feedback effect chaining does not have.

**The word to keep is "expected".** Every number in that table assumes keys are spread uniformly. Hand the same table $n$ keys that all hash to bucket 1 and the chain is length $n$: lookup becomes a linear scan of a linked list, and the structure you chose *because* it was $\Theta(1)$ is now $\Theta(n)$ with pointer-chasing overhead on top. Nothing in the interface changes, nothing errors, and the only symptom is that everything is slow.

## Worked examples

**Example 1 (mechanical): trace insertions and read the load factor.** A table with $m = 5$ buckets, chaining, keys hashing as shown.

| key | $h(k)$ | $h(k) \bmod 5$ |
|---|---|---|
| 12 | 12 | 2 |
| 27 | 27 | 2 |
| 8 | 8 | 3 |
| 45 | 45 | 0 |
| 17 | 17 | 2 |

After inserting all five:

| bucket | contents |
|---|---|
| 0 | 45 |
| 1 | — |
| 2 | 12 → 27 → 17 |
| 3 | 8 |
| 4 | — |

Load factor $\alpha = 5/5 = 1$, so the *expected* chain length is 1 — and the actual longest chain is 3. Looking up 17 costs 3 comparisons; looking up 45 costs 1; looking up 30 (bucket 0) costs 1 and fails.

The reason is visible in the hash: `h(k) = k` and three of the keys are $\equiv 2 \pmod 5$. **A hash function that is the identity inherits every pattern in the keys** — and real keys are full of patterns (sequential ids, aligned addresses, timestamps at fixed intervals). This is why real hash functions scramble bits rather than passing them through, and why the *number of buckets* is usually a prime or a power of two with a bit-mixing step, never a value that shares a factor with the keys' natural stride.

**Example 2 (why you'd care): the lookup that was quadratic.** A service checks $10^5$ order ids against a list of $10^5$ known ids:

```
for id in orders:
    if id in known_list:  ...       # linear scan
```

$10^5 \times 10^5 = 10^{10}$ comparisons — minutes. Replacing `known_list` with a hash set:

```
known <- hash set built from known_list        # Θ(n) = 10^5
for id in orders:
    if id in known:  ...                       # Θ(1) each = 10^5
```

$2\times10^5$ operations, a factor of **50,000**. This is the single most common performance fix in practice, and it is worth recognizing on sight: **a membership test inside a loop over a collection is $\Theta(nm)$ unless the tested collection is a hash set.**

The trade is $\Theta(m)$ memory for the table, and it is almost always worth it — but note what it also gives up. The list could answer "what is the smallest known id?" in one pass; the hash set cannot answer it at all without examining every bucket. That loss is the subject of the next lesson.

## Watch out

- **You might think** hash tables are $\Theta(1)$ — **but actually** they are $\Theta(1)$ **expected**, over the hash function's spreading of keys. The worst case is $\Theta(n)$ and it is reachable, not theoretical.
- **You might think** a bad case needs an adversary — **but actually** structured keys do it by accident: sequential ids modulo a bucket count that shares a factor with the stride, or pointers that are all 16-byte aligned, will cluster with no malice involved.
- **You might think** collisions indicate a bug — **but actually** they are guaranteed by pigeonhole and are handled by design. What indicates a bug is *all* the keys colliding.
- **You might think** you can mutate a key after inserting it — **but actually** its hash changes, so it is now in the wrong bucket: present in the table, unfindable by lookup, and undeleteable. Treat keys as immutable.
- **You might think** a hash table can replace a sorted structure — **but actually** it supports **no** ordered operation: no minimum, no sorted iteration, no range query, no predecessor. Those are not slow, they are absent.
- **You might think** iteration order is arbitrary-but-stable — **but actually** it can change on resize, and some languages randomize it deliberately per process. Code that depends on it is a reproducibility bug.
- **You might think** open addressing and chaining are interchangeable — **but actually** at $\alpha = 0.9$ they cost 1.9 and 50.5 probes. Open addressing must be resized far more aggressively.

## One-liner

> Turn the key into an index by arithmetic and you get $\Theta(1)$ — expected, over the hash function's spreading, and only for questions that do not involve order.

## Problems

**P1 (🟢)** A hash table with $m = 7$ buckets and chaining, $h(k) = k$.

(a) Insert 15, 22, 8, 29, 3 and give the contents of each bucket. (b) Give the load factor and the length of the longest chain. (c) How many key comparisons does looking up 29 cost? Looking up 10? (d) Explain in one sentence why 15, 22 and 29 collided.

**P2 (🟡)** A service caches $10^6$ user records keyed by user id, using chaining with a resize threshold of $\alpha = 0.75$.

(a) How many buckets does the table have at that load factor? (b) Give the expected number of probes for a successful and an unsuccessful lookup. (c) The team reduces memory by raising the threshold to $\alpha = 4$. Give the new expected probe counts and the memory saved. (d) Say whether the trade is a good one, and identify the workload characteristic that decides it.

**P3 (🔴)** A public web service stores incoming request parameters in a hash table keyed by parameter name, using chaining. An attacker sends a single request containing $10^4$ parameters whose names have been chosen to all hash to the same bucket.

(a) Give the cost of building the table for that request, and compare it against the intended cost. (b) Explain why the service's other defences — rate limiting, request size limits — do not help. (c) State the fix, and say precisely what property of the hash function it restores. (d) A colleague proposes instead switching to a balanced tree keyed by parameter name, arguing "$\Theta(\log n)$ worst case beats $\Theta(1)$ expected when there is an adversary." Evaluate this, giving the cost under both structures for the attack and for normal traffic.

<details>
<summary>Solutions</summary>

**P1** (a) $h(k) = k$, $m = 7$:

| key | $k \bmod 7$ |
|---|---|
| 15 | 1 |
| 22 | 1 |
| 8 | 1 |
| 29 | 1 |
| 3 | 3 |

| bucket | contents |
|---|---|
| 0 | — |
| 1 | 15 → 22 → 8 → 29 |
| 2 | — |
| 3 | 3 |
| 4, 5, 6 | — |

(b) $\alpha = 5/7 \approx 0.71$; **longest chain 4**, against an expected chain length of 0.71. Five items and two buckets used out of seven.

(c) Looking up **29** requires walking bucket 1's chain to its end: **4 comparisons** (15, 22, 8, 29). Looking up **10** goes to bucket 3, compares against 3, and fails: **1 comparison**.

(d) Because $15, 22, 8$ and $29$ are all $\equiv 1 \pmod 7$ — they differ by multiples of 7, and the identity hash passes that arithmetic structure straight through to the bucket index.

**P2** (a) At $\alpha = n/m = 0.75$ with $n = 10^6$:

$$m = n/\alpha = 10^6 / 0.75 \approx \mathbf{1.33 \times 10^6 \text{ buckets}}.$$

(In practice the table would hold the next power of two, $2^{21} = 2{,}097{,}152$, giving $\alpha \approx 0.48$.)

(b) With chaining at $\alpha = 0.75$:

- unsuccessful: $1 + \alpha = \mathbf{1.75}$ probes
- successful: $1 + \alpha/2 = \mathbf{1.375}$ probes

(c) At $\alpha = 4$: $m = 10^6/4 = 2.5\times10^5$ buckets.

- unsuccessful: $1 + 4 = \mathbf{5}$ probes
- successful: $1 + 2 = \mathbf{3}$ probes

**Memory saved:** the bucket array shrinks from $1.33\times10^6$ to $2.5\times10^5$ entries — about $1.08\times10^6$ pointers, or roughly **8.6 MB** at 8 bytes each.

Crucially, this saves nothing on the records themselves, which dominate: $10^6$ user records at even 200 bytes each is 200 MB. **The bucket array was about 4% of the table's memory, and the change reclaims 4% of that 4%.**

(d) **The trade is bad, and the deciding characteristic is the ratio of lookups to memory pressure — here, overwhelmingly lookups.**

The costs: probes roughly **triple** (1.375 → 3 on the common successful path), and each probe is a pointer dereference to a scattered chain node, so the real slowdown is worse than 3× once cache misses are counted. In exchange, 8.6 MB is saved out of ~208 MB — about 4%.

For a cache serving reads, that is trading the structure's entire purpose for a rounding error in memory. The threshold $\alpha \approx 0.75$ exists because it sits at the knee: below it, extra buckets buy almost no speed; above it, chains lengthen linearly and every lookup pays.

**When it *would* be defensible:** if the table were memory-bound rather than latency-bound — many tables, each rarely queried, with total footprint the binding constraint. Then $\alpha = 4$ trades cheap CPU for scarce RAM. The question to ask is always *which resource is actually scarce*, and here it is neither obviously nor measurably memory.

**P3** (a) With all $10^4$ parameter names in one bucket, inserting the $i$-th requires scanning the chain of $i-1$ already there (to check for a duplicate name), so building the table costs

$$\sum_{i=1}^{10^4} i = \frac{10^4 \cdot (10^4+1)}{2} \approx \mathbf{5\times10^7 \text{ comparisons}}$$

— each a string comparison, so tens of milliseconds to seconds of CPU **for one request**.

Intended cost: $\Theta(n) = 10^4$ operations, microseconds. The attack costs the server roughly **5,000×** what the same request should.

(b) **Because the request is legitimate by every measure those defences check.**

- **Rate limiting** counts requests. This is *one* request; an attacker needs only a handful per second to saturate a core, far below any plausible rate threshold.
- **Request size limits** count bytes. $10^4$ short parameter names is a few hundred kilobytes — an ordinary form submission, well within normal limits.

The asymmetry is the point: the attacker spends bytes and the server spends CPU **quadratically** in those bytes. Defences calibrated on a linear relationship between request size and work cannot see a quadratic one. This is the general shape of an **algorithmic complexity attack** — the input is small and valid, and it drives the data structure into its worst case.

(This is not hypothetical: it is the hash-flooding denial-of-service disclosed against PHP, Python, Ruby, Java, and Node in 2011–2012, and it took all of them down.)

(c) **The fix is a keyed hash: seed the hash function with a random value chosen per process at startup** (SipHash is the standard choice), so that

$$h_{\text{seed}}(k) = \text{SipHash}(\text{seed}, k).$$

**What it restores: unpredictability of the bucket assignment.** The uniformity guarantee behind $\Theta(1)$ expected is not "keys are random" — the attacker chooses the keys — it is "the *mapping* from keys to buckets is not known to whoever chose them." A fixed public hash function lets the attacker compute colliding keys offline, once, and reuse them forever. A per-process random seed means the attacker cannot compute a colliding set without knowing the seed, so the expectation holds against a key set chosen in advance.

Note the ordering of moves, which is the same argument as [`algorithms` 4.4](../../algorithms/lessons/04-04-randomized-algorithms.md)'s randomized quicksort: with a fixed function the attacker moves last (sees your code, then picks keys); with a random seed you move last (they pick keys, then you flip). The seed must come from a cryptographically secure source and the function must resist key-recovery from observed timings — an ordinary fast hash with a seed bolted on is not enough.

(d) **The colleague has correctly identified the problem and chosen a solution that costs more than the right one.**

| | attack ($10^4$ colliding names) | normal traffic ($\sim$20 parameters) |
|---|---|---|
| unseeded hash table | $5\times10^7$ string comparisons | $\approx 20$, $\Theta(1)$ each |
| balanced tree | $10^4 \log_2 10^4 \approx 1.3\times10^5$ comparisons | $20 \times \log_2 20 \approx 86$ comparisons |
| **seeded hash table** | $\approx 10^4$, $\Theta(1)$ each | $\approx 20$, $\Theta(1)$ each |

*Where they are right:* a balanced tree does defeat the attack. Its $\Theta(\log n)$ is worst-case, with no distributional assumption, so no choice of keys degrades it — $1.3\times10^5$ comparisons instead of $5\times10^7$, a 400× improvement, and the service survives.

*Where they are wrong:* the seeded hash table defeats the attack **too**, and is faster on the 99.999% of traffic that is not an attack. Against the tree it wins on the normal path (no comparisons at all versus $\log n$ string comparisons, which for strings means repeated character-by-character work), on memory (no per-node pointers), and on locality.

*The general principle:* **choosing a structure with a worse average case to defend against an adversary is a real and sometimes correct move — but only when no fix restores the guarantee you wanted.** Here randomization restores it exactly, at essentially zero cost, so paying $\Theta(\log n)$ forever to insure against a threat that a random seed already handles is over-paying.

The tree does become the right answer if the application *also* needs ordered operations — sorted iteration of parameters, or range queries — because then you are buying the ordering and getting the worst-case guarantee free. That is the trade [Lesson 3.1](03-01-binary-trees-and-binary-search-trees.md) opens with.

</details>

## Flashback

**From Lesson 2.3 (Linked lists):** A singly linked list `head → 4 → 8 → 15 → 16 → null`.

(a) Give the pointer writes to insert 11 after the node holding 8, and say why the order matters. (b) Give the cost of deleting the node holding 15, assuming you hold a reference to it. (c) What changes if the list is doubly linked? (d) A loop does `for i in 0..n-1: emit(list.get(i))`. Give its cost and the one-line fix.

<details>
<summary>Solution</summary>

(a) With `b` = node(8) and `x` = new node(11):

$$\texttt{x.next} \leftarrow \texttt{b.next}, \qquad \texttt{b.next} \leftarrow \texttt{x}.$$

**The order matters** because `b.next` is the only reference to node(15) and the rest of the list behind it. Doing `b.next ← x` first overwrites that reference before `x` has captured it, orphaning everything from 15 onward — a leak in a manually managed language and unrecoverable corruption in any.

(b) **$\Theta(n)$.** Holding a reference to node(15) is not enough: unlinking it requires setting `predecessor.next ← 15.next`, and a singly linked node has no way back to its predecessor, so you must walk from `head` to find it. This is the qualifier that the phrase "linked lists have $\Theta(1)$ deletion" always hides.

(c) With `prev` pointers it becomes genuinely **$\Theta(1)$**: `p.prev.next ← p.next` and `p.next.prev ← p.prev`, no searching. The cost is one extra pointer per node and one more invariant to maintain (`p.next.prev = p` everywhere).

(d) The loop is **$\Theta(n^2)$** — each `get(i)` restarts at the head and follows $i$ links, totalling $\sum_i i = n(n-1)/2$. At $n = 10^5$ that is $5\times10^9$ link-follows.

The fix is to iterate with a cursor instead of by index:

```
p <- head
while p != null:  emit(p.value);  p <- p.next
```

$\Theta(n)$ on the same structure — a factor of 50,000 at that size. The indexed loop discarded its position after every element; the cursor keeps it.

</details>

## Connections

- **Backward:** the bucket array is [Lesson 2.2's](02-02-arrays-and-dynamic-arrays.md) array indexed by arithmetic on the key rather than the position, and resizing is its doubling argument verbatim. Each chain is [Lesson 2.3's](02-03-linked-lists.md) linked list, which is why a degenerate hash table performs exactly like one. The immutable-key rule is [Lesson 1.2's](01-02-functions-contracts-and-invariants.md) aliasing hazard with teeth.
- **Forward:** [3.1](03-01-binary-trees-and-binary-search-trees.md) opens by asking for precisely what a hash table cannot do — minimum, sorted order, range queries — and pays $\Theta(\log n)$ to get it. That trade, $\Theta(1)$ unordered against $\Theta(\log n)$ ordered, is the choice behind most real storage decisions.
- **Sideways:** the adversarial-key attack and its randomized fix are [`algorithms` 4.4](../../algorithms/lessons/04-04-randomized-algorithms.md)'s "who moves last" argument applied to a data structure; the pigeonhole guarantee that collisions must exist is [discrete-mathematics 3.3](../../discrete-mathematics/lessons/03-03-inclusion-exclusion-and-pigeonhole.md). Hash indexes versus B-tree indexes in [`databases`](../../databases/syllabus.md) are this same $\Theta(1)$-unordered versus $\Theta(\log n)$-ordered decision, made about disk pages, and cryptographic hash functions in [`cryptography`](../../cryptography/syllabus.md) add collision-*resistance* to the uniformity demanded here.
