# Programming & Data Structures · Lesson 3.2: Balanced trees — the idea

> ⏱ ~15 min · Module 3: Trees & heaps · Builds on: [3.1 (binary trees and BSTs)](03-01-binary-trees-and-binary-search-trees.md) · Unlocks: 3.3 (heaps and priority queues)

## Why this matters

[Lesson 3.1](03-01-binary-trees-and-binary-search-trees.md) left a structure with a fatal flaw: every operation costs $\Theta(\text{height})$, and nothing controls the height. Sorted input — the most ordinary input there is — produces a chain, and the tree performs like a linked list with double the memory.

This lesson is the fix, and it is the reason trees are actually usable. A **balanced** tree adds a second invariant, on top of the BST ordering, that bounds the height at $O(\log n)$ **for every insertion order**, adversarial ones included. Every ordered map you will ever use — `std::map`, Java's `TreeMap`, a database's B⁺-tree index — is one of these.

The judgement content is threefold. **One:** how a local rewiring (a *rotation*) can shorten a tree without disturbing the sorted order — the mechanism that makes rebalancing possible at all. **Two:** what the different schemes actually buy, since AVL, red-black and B-trees all reach $O(\log n)$ but with different constants and different costs on insertion, and the choice between them is a real one. **Three:** why a database uses a tree of fan-out 100 rather than 2, which is a cost-model argument rather than an algorithmic one and the clearest instance in this course of the hardware deciding the data structure.

## The idea

**The problem in one line.** All BST operations cost $\Theta(h)$; $h$ ranges from $\lfloor\log_2 n\rfloor$ to $n-1$; and the tree has no mechanism preventing the bad end. So add one.

**A [rotation](../reference.md#rotation) is the mechanism.** Take a node $x$ whose right child is $y$. A **left rotation** at $x$ makes $y$ the parent and $x$ its left child, reattaching subtrees so the ordering still holds:

$$x(A,\ y(B, C)) \quad\longrightarrow\quad y(x(A, B),\ C).$$

Read the in-order walk of each: $A, x, B, y, C$ in both. **The rotation is invisible to the BST property and visible to the height** — the right side loses a level and the left gains one. It is a constant number of pointer writes, $\Theta(1)$, and it is the only structural move any of these schemes needs.

**Then add a shape invariant and restore it after every update.** The schemes differ in what they demand:

- **AVL:** the heights of a node's two subtrees differ by at most 1. Strict, so trees stay very short; costs more rotations on insert.
- **Red-black:** every node is red or black, no red node has a red child, and every root-to-leaf path has the same number of black nodes. Looser, so trees are up to twice as tall; costs at most 2 rotations per insertion, which makes updates cheaper.
- **B-tree:** not binary at all — each node holds many keys and has many children, and all leaves sit at the same depth. Built for disk.

Each is an invariant plus a repair procedure. After an insert or delete breaks the shape locally, the repair rotates and recolours along the path back to the root — $O(\log n)$ work, since the path is $O(\log n)$ long.

**The payoff.** Height is $O(\log n)$ **guaranteed**, not expected, not on-average-over-inputs. No insertion order degrades it, so the structure is safe against sorted data and against an adversary alike.

## The formal version

**Rotation, precisely.**

```
ROTATE-LEFT(x):
    y <- x.right
    x.right <- y.left          # B moves from y's left to x's right
    y.left  <- x               # x becomes y's left child
    return y                   # y is now the subtree's root
```

Three pointer writes, $\Theta(1)$. `ROTATE-RIGHT` is the mirror image. **Both preserve the BST property**, because the in-order sequence $A, x, B, y, C$ is unchanged — which is the fact that makes the whole rebalancing enterprise possible.

**Height guarantees.**

| scheme | invariant | height bound | at $n = 10^6$ |
|---|---|---|---|
| perfectly balanced | — | $\lfloor\log_2 n\rfloor$ | 19 |
| **AVL** | subtree heights differ by $\le 1$ | $\le 1.44\log_2 n$ | $\approx 28$ |
| **red-black** | no red-red; equal black-height | $\le 2\log_2 n$ | $\approx 40$ |
| plain BST, sorted input | none | $n - 1$ | 999,999 |

*(Machine-verified.)* AVL trees are shorter, so lookups are faster; red-black trees rebalance with fewer rotations, so updates are faster. **That is the trade, and it is why both are in wide use** — AVL where reads dominate, red-black where updates do. (Java's `TreeMap`, C++'s `std::map` and the Linux kernel's scheduler all use red-black.)

**Cost summary.**

| operation | cost |
|---|---|
| search | $\Theta(\log n)$ **worst case** |
| insert | $\Theta(\log n)$ search + $O(1)$ rotations (red-black) or $O(\log n)$ (AVL) |
| delete | $\Theta(\log n)$ |
| min / max / successor | $\Theta(\log n)$ |
| in-order traversal | $\Theta(n)$ |
| range query | $\Theta(\log n + k)$ for $k$ results |

Same operations as [Lesson 3.1](03-01-binary-trees-and-binary-search-trees.md)'s BST, with $h$ replaced by $\log n$ *unconditionally*.

**B-trees, and why fan-out is a hardware argument.** A binary tree of $10^9$ keys has height $\approx 30$. If the tree lives on disk, each level is a separate random read — and a disk seek costs milliseconds while a comparison costs nanoseconds. So the cost is 30 seeks, and the comparisons are free by comparison.

A **B-tree of order $b$** stores $b-1$ keys per node and has $b$ children, so its height is $\log_b n$:

| structure | height at $n = 10^9$ | disk reads |
|---|---|---|
| binary tree | 30 | 30 |
| B-tree, order 100 | $\lceil\log_{100}10^9\rceil = 5$ | 5 |
| B-tree, order 200 | 4 | 4 |

*(Machine-verified.)* **Six times fewer seeks**, for the same asymptotic class — $\log_b n$ and $\log_2 n$ differ by the constant $\log_2 b$. The order is chosen so that one node exactly fills a disk page (4–16 KB), because a page is what the hardware transfers whether you want one byte of it or all of it. This is the clearest case in the course of **the cost model, not the asymptotics, choosing the data structure**, and it is why [`databases`](../../databases/syllabus.md) is built on B⁺-trees rather than red-black trees.

## Picture

![On the left, a tree that is right-heavy at x: node x has a triangular subtree A as its left child and node y as its right child, and y has triangular subtrees B and C. It is annotated height 3 on the right spine. A blue arrow labelled rotate left points to the right-hand tree, where y is now the root with x as its left child; x has subtrees A and B, and y has subtree C directly. It is annotated one level shorter. Below, the in-order walk is given as A, x, B, y, C both before and after, noted as identical so the BST property survives. A table lists height guarantees: perfectly balanced floor log two n, giving 19 at a million nodes; AVL at most 1.44 log two n, about 28; red-black at most 2 log two n, about 40; and a plain BST on sorted input at n minus 1, or 999,999.](assets/03-02-fig1.svg)

**The in-order line under the two trees is the entire justification for rotations.** $A, x, B, y, C$ before and $A, x, B, y, C$ after — the sorted order is untouched, so every BST guarantee survives, while the shape has changed. A rotation is a rewiring that the ordering invariant cannot detect.

**Look at where $B$ went.** It was $y$'s left subtree and became $x$'s right subtree. That is the one non-obvious step, and it is forced: everything in $B$ is greater than $x$ and less than $y$, so after $y$ rises above $x$, the only position satisfying both constraints is $x$'s right. **The rotation has exactly one degree of freedom and the invariant uses it up**, which is why there is a single correct way to write those three assignments.

**The table is the argument for using one of these rather than a plain BST.** At $10^6$ nodes: 28 for AVL, 40 for red-black, 999,999 for a BST fed sorted data. Note that AVL and red-black are within 1.5× of each other and both within about 2× of perfect — so the choice between them is a constant-factor question about read-heavy versus write-heavy workloads, while the choice between *either* of them and a plain BST is a change of complexity class on the inputs that matter most.

## Worked examples

**Example 1 (mechanical): rebalance a chain.** Insert 10, 20, 30 into an AVL tree.

After 10 and 20 the tree is fine: 10 with a right child 20, heights differing by 1.

Inserting 30 gives the chain $10 \to 20 \to 30$. At node 10 the left subtree has height $-1$ (empty) and the right has height 1 — a difference of 2, so the AVL invariant is violated **at node 10**, the lowest unbalanced ancestor.

Rotate left at 10, with $x = 10$, $y = 20$, and $A = B = C = $ empty:

```
   10                     20
     \        ──►        /  \
      20               10    30
        \
         30
```

Height drops from 2 to 1; both subtrees of 20 now have height 0 ✓. In-order before: $10, 20, 30$. After: $10, 20, 30$ ✓.

Continue inserting 40, 50, 60, …: each triggers exactly one rotation, and the tree stays at height $\Theta(\log n)$ forever. **The same input that turns a plain BST into a chain of length $n$ leaves an AVL tree perfectly balanced** — verified in [Lesson 3.1's](03-01-binary-trees-and-binary-search-trees.md) figure, where sorted input gave height 6 on seven keys; here it gives height 2.

**Example 2 (why you'd care): choosing the fan-out.** A database indexes $10^9$ rows. Pages are 8 KB; a key plus a child pointer is about 40 bytes, so a node holds about 200 children.

| index structure | height | disk reads per lookup | time at 0.1 ms/read |
|---|---|---|---|
| red-black tree | $\approx 60$ | 60 | 6 ms |
| B-tree, order 200 | 4 | 4 | 0.4 ms |

**15× faster, and both are $\Theta(\log n)$.** The asymptotics are identical — $\log_{200} n = \log_2 n / \log_2 200$, a constant factor of about 7.6 — and the constant is the whole difference between an index that meets a latency budget and one that does not.

The reasoning generalizes, and is worth stating as a rule: **when one level of a structure costs a fixed amount regardless of how much you read from it, make the levels as wide as the fixed amount allows.** A disk page is transferred whole; so is a cache line; so is a network round trip. That is why B-trees have fan-out 200 on disk, why cache-conscious in-memory trees use fan-out 16, and why a chatty API is slow even when each call is fast.

(Real databases use **B⁺-trees**, which keep all values in the leaves and link the leaves together, so a range scan walks the leaf list without re-descending. That is the same range-query advantage from [Lesson 3.1](03-01-binary-trees-and-binary-search-trees.md), engineered for sequential disk access.)

## Watch out

- **You might think** a rotation might break the search order — **but actually** it cannot: the in-order sequence is identical before and after, which is precisely why it is the legal move.
- **You might think** balancing makes trees as short as possible — **but actually** it makes them $O(\log n)$, not optimal. An AVL tree can be 44% taller than perfect and a red-black tree twice as tall, and that is by design: a stricter invariant costs more to maintain.
- **You might think** AVL is simply better because it is shorter — **but actually** it does more rotations per insertion. Red-black does at most 2 and is the standard choice for update-heavy workloads; the two exist because the trade is real.
- **You might think** "balanced" means the tree is rebuilt — **but actually** repair is local: $O(1)$ rotations at $O(\log n)$ points along one path. Nothing is ever rebuilt from scratch.
- **You might think** $O(\log n)$ makes fan-out irrelevant — **but actually** $\log_2$ versus $\log_{200}$ is a factor of 7.6 in *levels*, and when a level costs a disk seek that factor is the entire performance story.
- **You might think** a balanced tree beats a hash table — **but actually** it is $\Theta(\log n)$ where a hash table is $\Theta(1)$. You pay that logarithm for ordering, and if you never call `range`, `min` or sorted iteration, you are paying for nothing.

## One-liner

> A rotation is invisible to the sorted order and visible to the height — so add a shape invariant, repair it with rotations after every update, and $\Theta(\text{height})$ becomes $\Theta(\log n)$ against every input.

## Problems

**P1 (🟢)** A subtree has root $x$ with left subtree $A$, right child $y$, and $y$ has subtrees $B$ and $C$.

(a) Write the in-order traversal before a left rotation at $x$. (b) Draw the result of the rotation. (c) Write the in-order traversal after. (d) Explain in one sentence why $B$ must become $x$'s right subtree rather than $y$'s.

**P2 (🟡)** A team inserts $10^6$ keys in sorted order.

(a) Give the resulting height under a plain BST, an AVL tree and a red-black tree. (b) Give the cost of a single lookup under each. (c) Give the total insertion cost under a plain BST and under a balanced tree. (d) The team argues that shuffling the input before insertion is simpler than implementing balancing. Evaluate: what does shuffling fix, what does it not, and what does it cost?

**P3 (🔴)** A service must index $2\times10^9$ records on disk. Pages are 4 KB; a key plus pointer is 32 bytes. A random page read costs 0.1 ms; a comparison in memory costs 1 ns. The service must answer point lookups and range scans returning about $10^4$ records.

(a) Give the fan-out that fills a page, and the resulting B-tree height. (b) Give the lookup latency, and compare with a red-black tree stored on the same disk. (c) A colleague notes both are $\Theta(\log n)$ and proposes the red-black tree as "simpler, same complexity." Respond quantitatively. (d) For the range scan, give the cost under a B-tree and under a B⁺-tree, and say which structural difference accounts for the gap.

<details>
<summary>Solutions</summary>

**P1** (a) Before: the subtree is $x$ with left $A$ and right $y(B, C)$. In-order visits left, node, right recursively:

$$A,\ x,\ B,\ y,\ C.$$

(b) After `ROTATE-LEFT(x)`, $y$ becomes the subtree root, $x$ becomes $y$'s left child, and $B$ moves to $x$'s right:

```
      x                        y
     / \                      / \
    A   y        ──►         x   C
       / \                  / \
      B   C                A   B
```

(c) After: visit $y$'s left subtree ($x$ with $A$ and $B$), then $y$, then $C$:

$$A,\ x,\ B,\ y,\ C.$$

**Identical** — which is the point.

(d) Because every key in $B$ is **greater than $x$ and less than $y$**, and after the rotation the only position in the tree satisfying both constraints is $x$'s right subtree. (Placing it as $y$'s left would put it above $x$, and placing it under $A$ would put it below $x$ — both violate the BST property.) The rotation has one free subtree and the invariant determines where it goes, which is why there is exactly one correct implementation.

**P2** (a) At $n = 10^6$:

| structure | height |
|---|---|
| plain BST, sorted input | $999{,}999$ |
| AVL | $\le 1.44\log_2 10^6 \approx \mathbf{28}$ |
| red-black | $\le 2\log_2 10^6 \approx \mathbf{40}$ |

Both balanced schemes are unaffected by the input order — that is the guarantee they buy.

(b) A lookup costs one comparison per level:

- plain BST: up to $10^6$ comparisons
- AVL: $\le 28$
- red-black: $\le 40$

Roughly a **25,000× to 36,000×** difference.

(c) Total insertion cost:

- **Plain BST:** the $i$-th insertion descends the existing chain of length $i$, so $\sum_{i<n} i = n(n-1)/2 \approx \mathbf{5\times10^{11}}$ comparisons — around ten minutes of pure comparison at $10^9$/s, before any memory effects.
- **Balanced tree:** $\Theta(n\log n) \approx 10^6 \times 20 = \mathbf{2\times10^7}$, plus $O(1)$ rotations per insertion for red-black. Milliseconds.

A factor of about **25,000**.

(d) **Shuffling fixes this instance and not the problem, and it costs more than it looks.**

*What it fixes.* A randomly ordered insertion sequence gives an expected height of about $4.3\ln n \approx 1.39\log_2 n \approx 28$ at $n = 10^6$ — comparable to AVL. So for a one-shot bulk load, shuffling genuinely works.

*What it does not fix.*

1. **Incremental insertion.** Shuffling requires having all the keys up front. A service that inserts as data arrives cannot shuffle a stream, and arriving data is exactly what tends to be ordered (timestamps, sequential ids).
2. **The guarantee.** Random order gives $O(\log n)$ **expected**, over insertion orders. It is a claim about the input distribution, so an adversary who controls key order — or a data source that happens to be sorted — defeats it. A balanced tree's bound is worst-case and holds against any input.
3. **Deletions.** Even from a well-shaped tree, a long sequence of deletions can degrade the shape, and shuffling has nothing to say about that.

*What it costs.* Buffering all $n$ keys in memory before inserting any ($\Theta(n)$ extra space, which for $10^6$ keys may exceed the tree itself), plus $\Theta(n)$ to shuffle, plus the loss of any ability to serve queries during the load.

*Verdict:* shuffling is a legitimate technique for a one-time bulk load into a structure that is thereafter read-only — and it is genuinely simpler. For anything incremental or adversary-exposed, it is a fix that appears to work until the day the input is ordered. Note also that nobody has to *implement* balancing: every standard library ships a balanced tree, so the comparison is between "shuffle and use a plain BST" and "call `TreeMap`."

**P3** (a) A 4 KB page holding 32-byte entries fits

$$\frac{4096}{32} = \mathbf{128 \text{ children per node}}.$$

Height for $n = 2\times10^9$ keys:

$$\lceil \log_{128}(2\times10^9)\rceil = \left\lceil \frac{\ln(2\times10^9)}{\ln 128} \right\rceil = \lceil 4.42 \rceil = \mathbf{5 \text{ levels}}.$$

(b) **B-tree lookup:** 5 page reads $\times$ 0.1 ms = **0.5 ms**. The in-memory work is $5 \times \log_2 128 \approx 35$ comparisons at 1 ns each — 35 ns, entirely negligible.

**Red-black tree on the same disk:** height $\le 2\log_2(2\times10^9) \approx 62$, and each node is a separate small object at an unrelated disk address, so each level is a page read:

$$62 \times 0.1\text{ ms} = \mathbf{6.2 \text{ ms}}.$$

A factor of **12.4×**.

(c) **The colleague is right that both are $\Theta(\log n)$ and wrong that this makes them interchangeable, because the constant hidden by $\Theta$ is $\log_2 b$ — and here that constant is the entire cost.**

$$\log_{128} n = \frac{\log_2 n}{\log_2 128} = \frac{\log_2 n}{7},$$

so the B-tree's height is seven times smaller *by construction*, and the observed 12.4× includes red-black's additional 2× slack over perfect balance.

Concretely: 0.5 ms versus 6.2 ms per lookup. At a modest 1,000 lookups per second that is 0.5 seconds of disk time per second versus 6.2 — the red-black version needs six disks' worth of I/O to keep up and the B-tree needs half of one. **The complexity class is identical and one design works while the other does not.**

The deeper point is that the constant is not incidental here — it is *chosen*, by matching the node size to the page size. The B-tree is not a cleverer algorithm; it is the same algorithm parameterized against the hardware's transfer unit. Ignoring the cost model is what makes "same complexity" a misleading statement.

(d) **Range scan returning $k = 10^4$ records.**

**B-tree.** Keys and values live in *internal* nodes as well as leaves, so an in-order walk must repeatedly ascend and descend between levels to visit them in order. Each of the $10^4$ records may sit in a different node reached by a separate descent, so the cost approaches

$$\Theta(\log_b n + k \cdot \log_b n) \;\approx\; 5 + 10^4 \times \text{a few page reads} \;\approx\; \mathbf{10^4 \text{–} 5\times10^4 \text{ page reads}} \;=\; \text{seconds.}$$

**B⁺-tree.** All values live in the **leaves**, and the leaves are **linked together in sorted order**. So a range scan descends once to find the first key, then walks the leaf chain sequentially:

$$\Theta(\log_b n) + \frac{k}{\text{records per leaf}} = 5 + \frac{10^4}{128} \approx 5 + 79 = \mathbf{84 \text{ page reads}} \approx 8.4 \text{ ms.}$$

Roughly **100–500× fewer reads**, and the reads are *sequential*, which on a spinning disk is another order of magnitude cheaper per page than the random reads the B-tree needs.

**The structural difference that accounts for it: values in leaves only, plus sibling links between leaves.** Together they turn "traverse in order" from a tree walk that revisits internal nodes into a linear scan of a linked list. That is the reason essentially every relational database and file system uses B⁺-trees rather than plain B-trees — range scans and full index scans are the common case, and this is the design that makes them sequential.

</details>

## Flashback

**From Lesson 3.1 (Binary trees and binary search trees):** Keys 40, 20, 60, 10, 30, 50, 70 are inserted into an empty BST in that order.

(a) Give the height. (b) Give the in-order traversal. (c) The same keys are inserted in sorted order instead. Give the height and the cost of a lookup. (d) State the invariant that both trees satisfy, and the one property that differs.

<details>
<summary>Solution</summary>

(a) The insertion order 40, 20, 60, 10, 30, 50, 70 places 40 at the root, 20 and 60 as its children, and 10, 30, 50, 70 as leaves — a perfectly balanced tree of **height 2**, the minimum for 7 nodes.

(b) In-order (left, node, right): $10, 20, 30, 40, 50, 60, 70$.

(c) Inserted sorted, every key is larger than all its predecessors, so each goes right: a chain of **height 6**. A lookup for the largest key costs **7 comparisons** — one per node — against 3 in the balanced tree.

(d) Both satisfy the **BST property**: for every node, all keys in its left subtree are smaller and all keys in its right subtree are larger. That is why both produce the same sorted in-order walk.

What differs is the **height**, and since every operation costs $\Theta(\text{height})$, that single property is the whole performance difference — 2 versus 6 here, and 19 versus 999,999 at a million nodes. The BST property says nothing about shape, which is exactly the gap balanced trees close.

</details>

## Connections

- **Backward:** this closes the hole [Lesson 3.1](03-01-binary-trees-and-binary-search-trees.md) opened, and the shape invariant is another instance of [Lesson 1.2's](01-02-functions-contracts-and-invariants.md) representation invariant — one that every operation must restore before returning. The fan-out argument is [Lesson 1.4's](01-04-big-o-counting-operations.md) warning about hidden constants, in its most consequential form.
- **Forward:** [3.3](03-03-heaps-and-priority-queues.md) takes the opposite approach to the same problem — instead of repairing a strict ordering after every update, it uses a *weaker* invariant that is automatically maintainable, and gets a structure with no rebalancing at all.
- **Sideways:** the B⁺-tree is the structure [`databases`](../../databases/syllabus.md) is built on, and choosing its order to match a page is the same cost-model reasoning that governs cache lines in [`computer-architecture`](../../computer-architecture/syllabus.md) and round trips in [`computer-networks`](../../computer-networks/syllabus.md). [`algorithms`](../../algorithms/syllabus.md) consumes balanced trees through their interface — "an ordered map costs $O(\log n)$ per operation" — which is what lets it state a bound and move on.
