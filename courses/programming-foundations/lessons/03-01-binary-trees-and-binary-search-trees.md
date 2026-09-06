# Programming & Data Structures · Lesson 3.1: Binary trees and binary search trees

> ⏱ ~15 min · Module 3: Trees & heaps · Builds on: [2.5 (hash tables)](02-05-hash-tables.md) · Unlocks: 3.2 (balanced trees)

## Why this matters

[Lesson 2.5](02-05-hash-tables.md) ended with a list of things a hash table cannot do at any price: give you the smallest key, iterate in order, answer "all keys between 100 and 200". Those are not slow operations, they are absent ones — hashing deliberately destroys order to buy its $\Theta(1)$.

A binary search tree buys the order back. It gives up $\Theta(1)$ for $\Theta(\log n)$ and gets, in exchange, sorted iteration, minimum and maximum, predecessor and successor, and range queries. That trade — **unordered and constant, or ordered and logarithmic** — is behind most real storage decisions, from which index a database builds to which map type a language offers.

The judgement content is that every one of those $\Theta(\log n)$ claims is really $\Theta(\text{height})$, and the height is not guaranteed. A BST built from sorted input is a linked list with extra pointers: $\Theta(n)$ per operation, on the most common insertion pattern there is. **Nobody ships a plain BST**, and understanding exactly why is what [Lesson 3.2](03-02-balanced-trees-the-idea.md) is for.

## The idea

**A binary tree is a node with two subtrees.** That is a recursive definition, and it is why everything about trees is naturally recursive ([Lesson 1.3](01-03-recursion-and-the-call-stack.md)):

```
Tree  =  empty
      |  Node(value, Tree left, Tree right)
```

The vocabulary is small: the **root** is the top node, a **leaf** has no children, a node's **depth** is its distance from the root, and the tree's **height** is the greatest depth. A tree of $n$ nodes has height somewhere between $\lfloor \log_2 n\rfloor$ (perfectly balanced) and $n-1$ (a chain).

**A binary search tree adds [one invariant](../reference.md#binary-search-tree-the-bst-property)**, and it is the entire content of the structure:

> For every node, **all keys in its left subtree are less** than the node's key, and **all keys in its right subtree are greater**.

Note "all keys in the subtree", not "the immediate children". The weaker local version is a genuinely different and useless structure, and confusing them is the standard error.

**Why the invariant pays.** Searching for $k$ at a node: if $k$ equals the node's key you are done; if $k$ is smaller, the invariant guarantees it can only be in the left subtree, so you go left and **discard the entire right subtree without looking at it**; symmetrically for larger. Each comparison eliminates a whole branch, so the search follows one root-to-leaf path and costs $\Theta(\text{height})$.

**Insertion is search plus one link.** Search for the key; you fall off the bottom at exactly the place it belongs; attach a new leaf there. The invariant is preserved by construction, because the search path is precisely the sequence of constraints the new key must satisfy.

**In-order traversal reads the tree sorted.** Visit the left subtree, then the node, then the right subtree. The invariant says everything left is smaller and everything right is larger, so this emits keys in increasing order — $\Theta(n)$, and the thing a hash table cannot do.

## The formal version

**Representation invariant (the BST property).** For every node $x$:

$$\forall\,y \in \text{left}(x):\ y.\text{key} < x.\text{key}, \qquad \forall\,z \in \text{right}(x):\ z.\text{key} > x.\text{key}.$$

**Search.**

```
SEARCH(t, k):
    if t = null:        return null
    if k = t.key:       return t
    if k < t.key:       return SEARCH(t.left, k)
    else:               return SEARCH(t.right, k)
```

$\Theta(h)$ where $h$ is the height, and $\Theta(h)$ stack depth — though the recursion is tail-recursive, so it becomes a loop with $\Theta(1)$ space.

**Insert** is the same descent, attaching a leaf where the search fails. Also $\Theta(h)$.

**Delete** has three cases, and they are the reason deletion is the fiddly one:

| the node has | what to do |
|---|---|
| no children | detach it |
| one child | splice the child into its place |
| two children | replace its key with its **in-order successor** (the minimum of its right subtree), then delete that successor — which has at most one child, so it is one of the easier cases |

All $\Theta(h)$.

**Minimum, maximum, successor.** The minimum is the leftmost node — follow `left` until null, $\Theta(h)$. Maximum is symmetric. The in-order successor of $x$ is the minimum of $x$'s right subtree if there is one, otherwise the nearest ancestor from whose left subtree $x$ descends.

**[Height bounds](../reference.md#tree-heights), and why they matter.**

| shape | height | operations |
|---|---|---|
| perfectly balanced | $\lfloor\log_2 n\rfloor$ | $\Theta(\log n)$ |
| random insertion order | $\Theta(\log n)$ expected ($\approx 4.3\ln n$) | $\Theta(\log n)$ expected |
| **sorted insertion order** | $n - 1$ | $\boldsymbol{\Theta(n)}$ |

At $n = 10^6$ that is a height of 19 against 999,999 — a factor of 50,000 on every single operation.

**The cost table, against a hash table.**

| operation | hash table | BST (height $h$) |
|---|---|---|
| insert / lookup / delete | $\Theta(1)$ expected | $\Theta(h)$ |
| minimum / maximum | **not supported** | $\Theta(h)$ |
| sorted iteration | **not supported** | $\Theta(n)$ |
| predecessor / successor | **not supported** | $\Theta(h)$ |
| range query $[a, b]$ | **not supported** | $\Theta(h + \text{output})$ |

## Picture

![Two binary search trees built from the same seven keys. On the left, inserted in the order 50, 30, 70, 20, 40, 60, 80, the tree is perfectly balanced: 50 at the root with 30 and 70 below it, and 20, 40, 60, 80 as leaves; it is annotated height 2, a search visits at most 3 nodes. On the right, inserted in sorted order 20, 30, 40, 50, 60, 70, 80, the tree is a single descending chain drawn in red, annotated height 6, a search visits up to 7 nodes. Captions state that both satisfy the BST property and both give 20 30 40 50 60 70 80 on an in-order walk, that only the height differs, that for n nodes the height ranges from floor log two n to n minus 1, and that at a million nodes that is 19 versus 999,999.](assets/03-01-fig1.svg)

**Same keys, same invariant, same in-order output — and a factor of 50,000 in cost at scale.** Everything a BST promises is conditional on a shape that the BST itself does not control.

**The right-hand tree is not a pathological curiosity.** Inserting keys in sorted order is what happens when you load a table ordered by id, replay a log by timestamp, or insert anything that arrives naturally sequenced — which is most things. The degenerate case is not the unlucky case; it is a common case, and it produces a structure with all the memory overhead of a tree and all the performance of a linked list.

**Read the annotations carefully: "a search visits at most 3 nodes" versus "up to 7".** For $n = 7$ the difference is unimpressive, and that is exactly why the problem escapes testing. The gap is $\log_2 n$ against $n$, so it is invisible at 7, mildly annoying at 1,000, and fatal at $10^6$ — a shape you should now recognize from [Lesson 1.4](01-04-big-o-counting-operations.md).

**One thing the picture does not show.** Random insertion order gives an expected height of about $4.3\ln n \approx 1.39\log_2 n$ — close to balanced, and this is why a naive BST often behaves acceptably in practice. But "expected over insertion orders" is a claim about the *input*, not about the algorithm's own choices, so it is exactly the kind of guarantee an adversary or an ordered data source destroys. That distinction — expected over inputs versus guaranteed — is why [Lesson 3.2](03-02-balanced-trees-the-idea.md) exists.

## Worked examples

**Example 1 (mechanical): build, search, traverse.** Insert 6, 2, 8, 1, 4, 3, 5, 7 into an empty BST, in that order.

Each insertion searches from the root and attaches where the search falls off:

- **6** becomes the root.
- **2** < 6 → left of 6.
- **8** > 6 → right of 6.
- **1** < 6, < 2 → left of 2.
- **4** < 6, > 2 → right of 2.
- **3** < 6, > 2, < 4 → left of 4.
- **5** < 6, > 2, > 4 → right of 4.
- **7** > 6, < 8 → left of 8.

```
            6
          /   \
        2       8
       / \     /
      1   4   7
         / \
        3   5
```

Height **3**. In-order traversal — left, node, right — gives $1, 2, 3, 4, 5, 6, 7, 8$ ✓ sorted, as the invariant guarantees.

Searching for 5: $5 < 6$ go left, $5 > 2$ go right, $5 > 4$ go right, found. **4 comparisons**, one per level. Searching for 9: $9 > 6$ right, $9 > 8$ right → null, absent, 2 comparisons.

*(Machine-verified: this insertion order gives height 3 and the in-order walk above.)*

**Example 2 (why you'd care): the load that turned a tree into a list.** A service keeps user records in a BST keyed by user id and loads them at startup from a database.

The initial version reads them in arbitrary order, and the tree comes out roughly balanced: height about 40 for $10^6$ users, so lookups cost 40 comparisons.

Someone then adds `ORDER BY user_id` to the loading query — for reproducibility, entirely reasonably. Now the ids arrive sorted, every insertion goes right, and the tree is a chain of $10^6$ nodes:

| | height | comparisons per lookup | build cost |
|---|---|---|---|
| arbitrary order | $\approx 40$ | 40 | $\approx 4\times10^7$ |
| sorted order | $10^6 - 1$ | up to $10^6$ | $\approx 5\times10^{11}$ |

Startup goes from under a second to hours, and every subsequent lookup is 25,000× slower. **The change that caused it added ordering to a query and touched no data-structure code at all** — which is what makes it hard to find, and why the fragility belongs to the structure rather than to the person who tripped it.

Three real responses: use a **balanced** tree ([3.2](03-02-balanced-trees-the-idea.md)) so no input order can degrade it; insert in a deliberately shuffled order, which fixes this instance and not the general problem; or, if ordered operations are not actually needed, use a hash table and get $\Theta(1)$ with no shape to worry about.

## Watch out

- **You might think** the BST property is about a node and its immediate children — **but actually** it is about *entire subtrees*. A tree where every node beats its two children but not its whole left subtree is not a BST, and search on it silently returns wrong answers.
- **You might think** BST operations are $\Theta(\log n)$ — **but actually** they are $\Theta(\text{height})$, and the height is between $\log_2 n$ and $n-1$. The logarithm is a property of the *shape*, not of the structure.
- **You might think** the degenerate case is rare — **but actually** sorted insertion is one of the most common patterns in practice: loading by id, replaying by timestamp, inserting anything already ordered.
- **You might think** a nearly-sorted input is nearly fine — **but actually** height degrades smoothly toward $n$, so "mostly sorted with some noise" gives you a mostly-linear tree.
- **You might think** deletion is symmetric with insertion — **but actually** it has three cases, and the two-child case needs the in-order successor. Getting it wrong usually breaks the invariant somewhere deep, where nothing detects it until a later search returns the wrong answer.
- **You might think** in-order traversal is a convenience — **but actually** it is the whole reason to pay $\Theta(\log n)$ instead of using a hash table. If you never need order, you are buying something you do not use.

## One-liner

> One invariant — everything left is smaller, everything right is larger — turns search into a single root-to-leaf descent, and every cost in the structure is $\Theta(\text{height})$ rather than $\Theta(\log n)$.

## Problems

**P1 (🟢)** Insert 40, 20, 60, 10, 30, 50, 70 into an empty BST in that order.

(a) Draw the tree. (b) Give its height. (c) Give the in-order traversal. (d) How many comparisons does searching for 30 cost? For 45?

**P2 (🟡)** A team stores timestamped events in a BST keyed by timestamp, inserting each event as it arrives.

(a) Describe the tree's shape after $n$ events and give its height. (b) Give the cost of inserting the $n$-th event, and the total cost of inserting all $n$. (c) At $n = 10^5$, give the total and compare it against a balanced tree. (d) The team also needs "all events between two timestamps". Explain why they cannot simply switch to a hash table, and give the cost of the range query on a balanced tree.

**P3 (🔴)** A service offers a key-value store and must support: `get(k)`, `put(k, v)`, `delete(k)`, and `range(a, b)` returning all pairs with keys in $[a, b]$ in sorted order. It handles $10^7$ keys, $10^8$ `get` calls a day, and 100 `range` calls a day each returning about 1,000 pairs.

(a) Give the daily operation count under a hash table and under a balanced BST, for the `get` traffic alone. (b) Give the cost of one `range` call under each. (c) The team proposes a hash table plus, for `range`, sorting all keys on demand. Give that cost per call and per day, and evaluate. (d) Give the design you would ship, with its costs, and state what it costs in memory and complexity relative to the simplest option.

<details>
<summary>Solutions</summary>

**P1** (a) Inserting 40, 20, 60, 10, 30, 50, 70:

- 40 is the root; 20 < 40 → left; 60 > 40 → right.
- 10 < 40, < 20 → left of 20. 30 < 40, > 20 → right of 20.
- 50 > 40, < 60 → left of 60. 70 > 40, > 60 → right of 60.

```
            40
          /    \
        20      60
       /  \    /  \
     10   30  50   70
```

(b) **Height 2** — the root is depth 0, and the leaves are at depth 2. This is a perfectly balanced tree on 7 nodes, the minimum possible height $\lfloor\log_2 7\rfloor = 2$.

(c) In-order (left, node, right): $10, 20, 30, 40, 50, 60, 70$ ✓ — sorted, as the invariant requires regardless of insertion order.

(d) Searching **30**: $30 < 40$ go left; $30 > 20$ go right; found at 30. **3 comparisons** (one per node visited).

Searching **45**: $45 > 40$ go right; $45 < 60$ go left; $45 < 50$ go left → null, absent. **3 comparisons.**

Both take one comparison per level down to depth 2 or the null below it — the height controls both successful and unsuccessful searches.

**P2** (a) Timestamps arrive in **increasing** order, so every new key is larger than every key already in the tree. The search therefore goes right at every node and the new node attaches as the right child of the current rightmost node.

The tree is a **right-descending chain** — a linked list — of height $n - 1$.

(b) Inserting the $n$-th event requires descending the entire existing chain: $\Theta(n)$ comparisons. Over all $n$ insertions:

$$\sum_{i=0}^{n-1} i = \frac{n(n-1)}{2} = \Theta(n^2).$$

(c) At $n = 10^5$:

| | height | total insertion cost |
|---|---|---|
| BST, sorted input | $10^5 - 1$ | $\approx 5\times10^9$ comparisons |
| balanced tree | $\approx 17$ | $\approx 10^5 \times 17 = 1.7\times10^6$ |

A factor of about **2,900** — seconds against milliseconds, and the gap widens linearly with $n$.

(d) **They cannot switch to a hash table because a range query is not a supported operation at any cost.** Hashing deliberately destroys order: keys adjacent in value land in unrelated buckets, so there is no way to enumerate $[a,b]$ without examining every bucket in the table, $\Theta(m + n)$ per query, and then sorting the survivors. The structure has thrown away exactly the information the query needs.

On a balanced BST the range query is:

$$\Theta(\log n + k)$$

for $k$ results — descend to the first key $\ge a$ in $\Theta(\log n)$, then walk in-order emitting keys until you pass $b$, at $\Theta(1)$ amortized per result. At $n = 10^5$ with $k = 100$ results that is about 117 operations against the hash table's $10^5$ plus a sort.

**P3** (a) $10^8$ `get` calls per day:

| | per `get` | daily |
|---|---|---|
| hash table | $\Theta(1)$, ≈1–2 probes | $\approx 1.5\times10^8$ |
| balanced BST | $\Theta(\log n) = \log_2 10^7 \approx 23$ | $\approx 2.3\times10^9$ |

The hash table is about **15× cheaper** on the read path, and the read path is 99.9999% of the traffic.

(b) One `range(a, b)` returning $k \approx 1000$ pairs:

| | cost |
|---|---|
| hash table | **not supported** — must scan all $10^7$ keys and sort the matches: $\Theta(n + k\log k) \approx 10^7$ |
| balanced BST | $\Theta(\log n + k) = 23 + 1000 \approx 10^3$ |

A factor of about **10,000** per call.

(c) Hash table plus sort-on-demand:

- Per call: extract all $10^7$ keys ($\Theta(n)$), sort them ($\Theta(n\log n) \approx 2.3\times10^8$), then binary search and slice. Roughly $2.4\times10^8$ operations.
- Per day: $100 \times 2.4\times10^8 = \mathbf{2.4\times10^{10}}$.

**Evaluate: it is a bad design, and the reason is that it is 10× more expensive than the entire `get` workload it was meant to protect.** The team optimized for the 99.9999% and then spent more than that optimization saved on the remaining 0.0001%. Worse, each call has a multi-second latency and, if the store is mutable, the sort must be redone every time because the snapshot is stale immediately.

(It would be defensible only if `range` were called *very* rarely — a handful of times a day on a store that is otherwise read-only — and even then a cached sorted array with invalidation is strictly better.)

(d) **Ship both: a hash table as the primary index, plus a balanced BST (or a sorted structure) as a secondary index on the key.**

| operation | daily volume | cost |
|---|---|---|
| `get(k)` | $10^8$ | hash table, $\Theta(1)$ → $\approx 1.5\times10^8$ |
| `put` / `delete` | — | update **both**: $\Theta(1) + \Theta(\log n)$ |
| `range(a, b)` | 100 | BST, $\Theta(\log n + k)$ → $\approx 10^5$ total |

Daily total $\approx 1.5\times10^8$ — the read traffic dominates and the range queries are free by comparison.

*What it costs.*

- **Memory:** roughly 2× the index overhead, since every key is stored in two structures. The values are stored once and referenced from both, so the real overhead is the key plus pointers per entry — meaningful at $10^7$ keys but not prohibitive.
- **Complexity:** every mutation must update two structures, and they must stay consistent. That is a real correctness burden — a `put` that updates the hash table and fails before updating the tree leaves the two disagreeing, and no single operation's invariant catches it. Mutations become transactional in spirit even if not in mechanism.

*The honest alternative:* **ship only the balanced BST.** It costs $2.3\times10^9$ daily instead of $1.5\times10^8$ — 15× more, but still a small number in absolute terms (seconds of CPU spread over a day) — and it is one structure, one invariant, no consistency problem. If $10^8$ gets a day is comfortably within budget, this is the better engineering decision, and the two-index design is premature.

The judgement being exercised: **a secondary index buys asymptotic performance and costs you a consistency invariant**, and that trade is worth making only when the primary structure's cost is actually near a limit. This is precisely the choice a relational database exposes when you add an index, and it is why adding one is never free.

</details>

## Flashback

**From Lesson 2.4 (Stacks and queues):** A queue is implemented over an array with the front fixed at index 0.

(a) Give the cost of `enqueue` and `dequeue`. (b) Give the total cost of $n$ enqueues followed by $n$ dequeues. (c) Give the fix and the state it requires. (d) Why do `head == tail` need extra information to interpret?

<details>
<summary>Solution</summary>

(a) `enqueue` appends at the back: $\Theta(1)$ amortized. `dequeue` removes index 0 and shifts every remaining element down one slot: **$\Theta(n)$**.

(b) The enqueues cost $\Theta(n)$ in total. The dequeues shift $n, n-1, \dots, 1$ elements:

$$\sum_{k=1}^{n} k = \frac{n(n+1)}{2} = \Theta(n^2).$$

(c) **A circular buffer**: keep `head` and `tail` indices and advance them modulo the capacity, so `dequeue` moves the window rather than the data. Both operations become $\Theta(1)$ and the drain becomes $\Theta(n)$.

**State required:** a `head` index (the naive version implicitly fixed it at 0) plus a `size` counter — two integers.

(d) Because `head == tail` holds in **two** different situations: when the queue is empty (the window has zero width) and when it is completely full (the window has wrapped all the way round). The indices alone cannot distinguish them, so you need either the `size` counter or the convention of leaving one slot permanently unused so that "full" means `(tail + 1) mod capacity == head`. Omitting this is the classic ring-buffer bug, and it only manifests the first time the buffer fills.

</details>

## Connections

- **Backward:** the BST property is a **representation invariant** in exactly [Lesson 1.2's](01-02-functions-contracts-and-invariants.md) sense, restored by every operation before it returns; the recursive definition and the recursive traversals are [Lesson 1.3](01-03-recursion-and-the-call-stack.md); the nodes-with-references machinery is [Lesson 2.3](02-03-linked-lists.md) with two pointers instead of one. This lesson is the answer to what [Lesson 2.5](02-05-hash-tables.md) could not do.
- **Forward:** [3.2](03-02-balanced-trees-the-idea.md) fixes the height problem this lesson exposes, which is the only thing standing between a BST and a shippable structure. [3.3](03-03-heaps-and-priority-queues.md) is a tree with a *weaker* invariant that buys a different operation, and [4.3](04-03-recursion-revisited-backtracking.md)'s search trees are this shape used to organize a search rather than to store data.
- **Sideways:** the ordered/unordered trade recurs as the choice between a hash index and a B⁺-tree index in [`databases`](../../databases/syllabus.md), where the B⁺-tree is this structure widened for disk pages; tree height as $\log_2 n$ is [discrete-mathematics 5.3](../../discrete-mathematics/lessons/05-03-trees-and-graph-coloring.md)'s counting argument, and the expected height of a randomly built BST is a probabilistic analysis of the same kind as [`algorithms` 4.4](../../algorithms/lessons/04-04-randomized-algorithms.md)'s randomized quicksort — the two are, in fact, the same recurrence.
