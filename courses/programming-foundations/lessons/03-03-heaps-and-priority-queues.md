# Programming & Data Structures · Lesson 3.3: Heaps and priority queues

> ⏱ ~15 min · Module 3: Trees & heaps · Builds on: [3.2 (balanced trees)](03-02-balanced-trees-the-idea.md) · Unlocks: 4.1 (searching and elementary sorting)

## Why this matters

[Lesson 3.2](03-02-balanced-trees-the-idea.md) kept a tree short by repairing a strict ordering after every update — rotations, colour flips, a repair procedure walking back to the root. That is a lot of machinery, and you only need it if you want *full* sorted order.

A great many problems do not. "Which job runs next?", "which is the nearest unvisited city?", "which event fires soonest?" all ask for the **single smallest** item, repeatedly. The heap is the structure for exactly that question, and it gets there by demanding much less: not a total ordering, just that every parent beats its children. That weaker invariant is cheap enough to restore that no rebalancing is needed at all — and it is enough to keep the minimum at a known place, always.

The judgement content is **matching the invariant to the question**. A heap cannot search, cannot iterate in order, cannot find the median — and in exchange it costs nothing to maintain. Recognizing that you only need the extremum, and taking the structure that provides only that, is the same move as [Lesson 2.4's](02-04-stacks-and-queues.md) narrowing of an interface. There is also a genuinely surprising result here: building a heap from $n$ items costs $\Theta(n)$, not $\Theta(n\log n)$, and the reason is worth the derivation.

## The idea

**The [heap property](../reference.md#heap-heap-property) is weaker than the BST property.** In a **min-heap**:

> every node's key is $\le$ both of its children's keys.

That is all. There is **no** left-versus-right ordering — siblings are unconstrained, and a node's key says nothing about its cousins. Compare the BST's demand that *entire subtrees* be ordered.

What survives is exactly one guarantee: **the minimum is at the root.** Every path from the root downward is non-decreasing, so nothing anywhere can be smaller than the top. Peeking at the minimum is $\Theta(1)$.

**The tree is an array, and no pointers exist.** A heap is kept *complete* — every level full except possibly the last, which fills left to right — and a complete binary tree has a canonical numbering:

$$\text{children of } i: \ 2i+1,\ 2i+2, \qquad \text{parent of } i: \ \left\lfloor \frac{i-1}{2} \right\rfloor.$$

So the "tree" is arithmetic on array indices. No node objects, no pointers, perfect cache locality, no allocation per element. **The tree is a way of reading the array, not a thing in memory** — which is why heaps have far better constants than any pointer-based structure in this course.

**Two repairs, both walking one path.**

- **Insert:** append at the end of the array (keeping it complete), then **sift up** — while the new element is smaller than its parent, swap. Stops when the heap property holds. At most $\log_2 n$ swaps.
- **Extract-min:** the root is the answer. Move the last element to the root (keeping it complete), shrink, then **sift down** — while it is bigger than its smallest child, swap with that child. At most $\log_2 n$ swaps.

Each walks a single root-to-leaf path, so both are $\Theta(\log n)$, and the completeness invariant means that path is $\lfloor\log_2 n\rfloor$ long **by construction**. There is no way to build an unbalanced heap, which is why there are no rotations.

## The formal version

**Representation invariants.** For an array $a[0..n-1]$:

1. **Shape:** the tree is complete — which is automatic, since the array has no gaps.
2. **Order:** $a[\lfloor (i-1)/2 \rfloor] \le a[i]$ for all $i \ge 1$.

Shape is free; only the order invariant needs repairing, and only along one path.

**Sift-down.**

```
SIFT-DOWN(a, i, n):
    loop:
        l, r <- 2i+1, 2i+2
        m <- i
        if l < n and a[l] < a[m]:  m <- l
        if r < n and a[r] < a[m]:  m <- r
        if m = i:  return
        swap a[i], a[m];  i <- m
```

**Costs.**

| operation | cost |
|---|---|
| `peek` (find min) | $\Theta(1)$ |
| `insert` | $\Theta(\log n)$ |
| `extract-min` | $\Theta(\log n)$ |
| `build-heap` from $n$ items | $\boldsymbol{\Theta(n)}$ |
| search for an arbitrary key | $\Theta(n)$ |
| sorted iteration | **not supported** without destroying the heap |

**[Build-heap](../reference.md#heap-facts) is linear, and this is the surprising one.** Inserting $n$ items one at a time costs $\Theta(n\log n)$. But given the array already, run `SIFT-DOWN` on every index from $\lfloor n/2\rfloor - 1$ down to 0 — bottom-up — and the total is $\Theta(n)$.

*Why.* A node at height $h$ above the leaves costs $O(h)$ to sift down, and a complete tree has at most $n/2^{h+1}$ nodes at height $h$. Summing:

$$\sum_{h=0}^{\lfloor\log_2 n\rfloor} \frac{n}{2^{h+1}} \cdot h \;=\; \frac n2 \sum_{h\ge0} \frac{h}{2^{h}} \;=\; \frac n2 \cdot 2 \;=\; n.$$

The series $\sum h/2^h$ converges to 2, so the whole construction is $O(n)$. **The intuition: half the nodes are leaves and cost nothing, a quarter are one level up and cost at most 1, and the expensive nodes near the root are vanishingly few.** *(Verified: at $n = 2^{20}$ the bound sums to 1,048,555, just under $n$.)*

At $n = 10^6$ that is $10^6$ operations against $2\times10^7$ for repeated insertion — a **20×** saving whenever you have all the items up front.

**The priority queue ADT.** `insert(x, priority)`, `extract-min()`, `peek()`. A heap is its standard implementation, and this is what [`algorithms`](../../algorithms/syllabus.md) consumes in Dijkstra's shortest paths and Prim's minimum spanning tree — both of which are "repeatedly take the cheapest remaining thing", which is precisely `extract-min` in a loop.

**Heapsort.** Build a heap ($\Theta(n)$), then extract the minimum $n$ times ($\Theta(n\log n)$): a $\Theta(n\log n)$ **worst-case** sort using $\Theta(1)$ extra space. In practice quicksort's better constants usually win, but heapsort's guaranteed bound makes it the fallback that stops introsort from ever degrading.

## Picture

![An array of eight values — 1, 3, 2, 4, 8, 7, 6, 9 — drawn as blue boxes labelled with indices 0 through 7, above the index arithmetic: children of i are 2i plus 1 and 2i plus 2, parent of i is floor of i minus 1 over 2. Below, the same values as a binary tree: 1 at the root with children 3 and 2; 3 has children 4 and 8; 2 has children 7 and 6; and 4 has a single child 9. Each node is annotated with its array index. Captions state that every parent is at most both children, that this is much weaker than a BST since 3 and 2 sit on the same level out of order and nothing is wrong, that it buys exactly one thing — the minimum at index 0 in constant time — and that insert sifts up while extract-min sifts down, each walking one root-to-leaf path.](assets/03-03-fig1.svg)

**The array and the tree are the same object.** There are no pointers anywhere; `a[1]` and `a[2]` are the root's children because $2\cdot0+1 = 1$ and $2\cdot0+2 = 2$, and that is the entire linkage. A heap of a million integers is a million integers — no node overhead, no allocation, contiguous memory.

**Look at 3 and 2, at indices 1 and 2.** They are siblings, and the larger one is on the left. **In a BST that would be a corruption; here nothing is wrong**, because the heap property constrains only parent-to-child. That is the weakening, and everything the heap gains comes from it: there is no ordering between subtrees to repair, so an update disturbs only one path, so no rotations are ever needed.

**And it is exactly why a heap cannot search.** Looking for the value 7, standing at the root holding 1, you learn only that 7 is somewhere below — but the heap gives no reason to prefer the left child over the right. You must examine both, then all four grandchildren, and searching costs $\Theta(n)$: you scan the whole array. A BST answers that question in $\Theta(\log n)$ because its stronger invariant lets you *discard* a subtree, and discarding is what the heap gave up.

**The completeness invariant is doing quiet work.** Because the array has no gaps, the tree is automatically as short as $n$ nodes permit — height exactly $\lfloor\log_2 n\rfloor$, always. A heap cannot become unbalanced, so the $\Theta(\log n)$ bounds hold with no maintenance at all. That is the contrast with [Lesson 3.2](03-02-balanced-trees-the-idea.md), where keeping the height bounded required an entire repair apparatus.

## Worked examples

**Example 1 (mechanical): build a heap bottom-up.** Turn $[9, 4, 7, 1, 8, 2, 6, 3]$ into a min-heap.

Start at index $\lfloor 8/2 \rfloor - 1 = 3$ and work down to 0, sifting each:

| $i$ | node | children | swaps performed | array after |
|---|---|---|---|---|
| 3 | 1 | 3 (idx 7) | none — $1 \le 3$ ✓ | $[9,4,7,1,8,2,6,3]$ |
| 2 | 7 | 2 (idx 5), 6 (idx 6) | swap 7↔2 | $[9,4,2,1,8,7,6,3]$ |
| 1 | 4 | 1 (idx 3), 8 (idx 4) | swap 4↔1, then 4↔3 | $[9,1,2,4,8,7,6,3]$ → $[9,1,2,3,8,7,6,4]$ |
| 0 | 9 | 1 (idx 1), 2 (idx 2) | swap 9↔1, 9↔3, 9↔4 | $[1,3,2,4,8,7,6,9]$ |

Result: $[1, 3, 2, 4, 8, 7, 6, 9]$ — the array in the figure. Check the invariant: $a[0]=1 \le a[1]=3, a[2]=2$ ✓; $a[1]=3 \le a[3]=4, a[4]=8$ ✓; $a[2]=2 \le a[5]=7, a[6]=6$ ✓; $a[3]=4 \le a[7]=9$ ✓. *(Machine-verified.)*

**Seven swaps total for eight elements** — under one per element, which is the linear bound in miniature. Note that indices 4–7 were never sifted at all: they are leaves, half the array, and leaves are trivially heaps.

Now insert 0: append at index 8, then sift up — $0 < a[3]=4$ swap, $0 < a[1]=3$ swap, $0 < a[0]=1$ swap. Three swaps, and the array is $[0,1,2,3,8,7,6,9,4]$. **One path, $\log_2 9 \approx 3$ steps.**

**Example 2 (why you'd care): top-$k$ from a stream.** A monitoring service must report the 100 slowest requests out of $10^8$ per day, and cannot hold them all in memory.

| approach | time | memory |
|---|---|---|
| sort everything, take the last 100 | $\Theta(n\log n) = 2.7\times10^9$ | $\Theta(n) = 10^8$ records |
| **max-heap of size 100** | $\Theta(n\log k) = 6.6\times10^8$ | $\Theta(k) = \mathbf{100}$ records |

The heap approach: keep a min-heap of the 100 largest seen so far. For each new request, compare against the heap's minimum — if it is smaller, discard it in $\Theta(1)$; otherwise extract-min and insert, $\Theta(\log 100) \approx 7$.

**The memory difference is the point.** $10^8$ records at 200 bytes is 20 GB and does not fit; 100 records is 20 KB and fits in cache. And because the vast majority of requests fail the $\Theta(1)$ comparison against the root immediately, the real cost is far below the $\Theta(n\log k)$ bound — typically close to $n$ comparisons.

This is the canonical use of a heap and worth recognizing on sight: **"the top $k$ of a large or unbounded stream" is a heap of size $k$**, not a sort. Sorting computes a total order you then throw away.

## Watch out

- **You might think** a heap is sorted — **but actually** the array is not in sorted order and reading it left to right gives nonsense. Only the *root* is guaranteed; $[1,3,2,4,8,7,6,9]$ is a perfectly valid heap.
- **You might think** you can search a heap in $\Theta(\log n)$ — **but actually** it is $\Theta(n)$. With no left-right ordering there is no subtree you may discard, so you scan everything.
- **You might think** building a heap costs $\Theta(n\log n)$ — **but actually** bottom-up `build-heap` is $\Theta(n)$, because half the nodes are leaves and cost nothing while the expensive nodes near the root are few. A 20× saving at $n = 10^6$.
- **You might think** a heap needs rebalancing like a BST — **but actually** completeness makes the height $\lfloor\log_2 n\rfloor$ automatically. There are no rotations because there is nothing to rebalance.
- **You might think** min-heaps and max-heaps need different code — **but actually** they differ by one comparison operator, and many libraries only give you one. Negate the keys, or supply a comparator.
- **You might think** a heap can give you the second smallest in $\Theta(1)$ — **but actually** it is one of the root's two children, so that costs a comparison; the *third* smallest requires real work. Only the extremum is cheap, and only one of them: a min-heap knows nothing about its maximum beyond "it is one of the leaves".

## One-liner

> Demand only that every parent beats its children, keep the tree complete so it is an array with no pointers, and the minimum sits at index 0 forever — for $\Theta(\log n)$ per update and no rebalancing at all.

## Problems

**P1 (🟢)** Build a min-heap from $[5, 9, 3, 8, 1, 6]$ using bottom-up `build-heap`.

(a) Give the starting index and the order in which nodes are sifted. (b) Show the array after each sift-down. (c) Give the final array and verify the heap property at every internal node. (d) Now `extract-min`. Give the returned value and the resulting array.

**P2 (🟡)** A scheduler holds $10^6$ pending jobs and repeatedly runs the highest-priority one.

(a) Give the cost per `extract-min` and per `insert` under a heap, a sorted array, and an unsorted array. (b) Which structure would you choose, and how does the answer change if jobs are inserted far more often than they are run? (c) The scheduler is initialized with all $10^6$ jobs at once. Give the cost of building the heap two ways and the saving. (d) A feature request asks for "cancel job by id". Give the cost on a plain heap and say what auxiliary structure fixes it.

**P3 (🔴)** A log-processing service must find the 1,000 largest values in a stream of $5\times10^9$ numbers that does not fit in memory.

(a) Give the time and memory of sorting everything, and say why it is not viable. (b) Give the heap-based approach, its time, its memory, and which kind of heap it uses. (c) In the common case a new value is smaller than everything in the heap. Give the cost of that case and the resulting realistic total. (d) A colleague proposes a balanced BST of size 1,000 instead, arguing it also supports "the 1,000 largest" and additionally gives them in sorted order. Compare the two on time, memory and constants, and say when the BST is actually the better choice.

<details>
<summary>Solutions</summary>

**P1** (a) $n = 6$, so start at index $\lfloor 6/2 \rfloor - 1 = \mathbf{2}$ and work down: indices **2, 1, 0**. Indices 3, 4, 5 are leaves and are already heaps.

(b) Array $[5, 9, 3, 8, 1, 6]$, indices 0–5.

| $i$ | node | children | action | array after |
|---|---|---|---|---|
| 2 | 3 | index 5 = 6 | $3 \le 6$ ✓, no swap | $[5, 9, 3, 8, 1, 6]$ |
| 1 | 9 | index 3 = 8, index 4 = 1 | smallest child is 1; swap 9↔1 | $[5, 1, 3, 8, 9, 6]$ |
| 0 | 5 | index 1 = 1, index 2 = 3 | smallest child is 1; swap 5↔1, then at index 1 children are 8 and 9, both $> 5$, stop | $[1, 5, 3, 8, 9, 6]$ |

(c) Final: $\mathbf{[1, 5, 3, 8, 9, 6]}$.

| node | index | children | check |
|---|---|---|---|
| 1 | 0 | 5 (idx 1), 3 (idx 2) | $1 \le 5$, $1 \le 3$ ✓ |
| 5 | 1 | 8 (idx 3), 9 (idx 4) | $5 \le 8$, $5 \le 9$ ✓ |
| 3 | 2 | 6 (idx 5) | $3 \le 6$ ✓ |

Valid min-heap. Three swaps for six elements.

(d) `extract-min` returns the root, **1**. Move the last element (6) to the root, shrink to $n = 5$, and sift down:

- Array becomes $[6, 5, 3, 8, 9]$.
- At index 0: children are 5 (idx 1) and 3 (idx 2); the smallest is 3; swap → $[3, 5, 6, 8, 9]$.
- At index 2: child would be index 5, out of range. Stop.

Result: $\mathbf{[3, 5, 6, 8, 9]}$, and $3$ is indeed the new minimum ✓.

**P2** (a)

| structure | `insert` | `extract-min` |
|---|---|---|
| heap | $\Theta(\log n)$ | $\Theta(\log n)$ |
| sorted array | $\Theta(n)$ — shift to make room | $\Theta(1)$ — take the front (or the back, if sorted descending) |
| unsorted array | $\Theta(1)$ — append | $\Theta(n)$ — scan for the minimum |

(b) **The heap**, because it is the only one without a $\Theta(n)$ operation. At $n = 10^6$, $\log_2 n = 20$, so both heap operations cost 20 while the other structures each have one operation costing $10^6$ — a factor of 50,000 on whichever operation they are bad at.

**If insertions vastly outnumber extractions**, the unsorted array becomes competitive: $\Theta(1)$ inserts and a $\Theta(n)$ scan only occasionally. With $I$ inserts and $E$ extracts the totals are

$$\text{heap: } \Theta((I + E)\log n), \qquad \text{unsorted: } \Theta(I + En).$$

The unsorted array wins when $E \cdot n < (I + E)\log n$, roughly when $E < I\log n / n$ — at $n = 10^6$, when fewer than about 1 in 50,000 operations is an extraction. That is a narrow regime, and the heap's constants are good enough that it is usually still the right default; but if the "queue" is really a bag that is drained once, the array is simpler and faster.

(c) Building from $10^6$ jobs:

| method | cost |
|---|---|
| $n$ successive inserts | $\Theta(n\log n) = 10^6 \times 20 = 2\times10^7$ |
| bottom-up `build-heap` | $\Theta(n) = 10^6$ |

**A 20× saving**, and it is free — the same array, a different loop. Whenever all the items are available up front, sifting down from $\lfloor n/2\rfloor - 1$ to 0 strictly dominates inserting one at a time.

(d) **Cancel by id costs $\Theta(n)$ on a plain heap** — the heap has no ordering by id, so finding the job means scanning all $10^6$ entries. (Once found, removing it is $\Theta(\log n)$: swap in the last element and sift *either* up or down, since the replacement may violate the invariant in either direction.)

**The fix is an auxiliary hash table** mapping job id → current array index, maintained by every swap:

| operation | cost |
|---|---|
| locate by id | $\Theta(1)$ expected (hash lookup) |
| remove / change priority | $\Theta(\log n)$ (sift up or down) |

The cost is that **every swap in `sift-up` and `sift-down` must update two hash-table entries**, which roughly doubles the constant on the heap's hot path and adds a consistency invariant that is easy to break — a swap that updates the array but not the map leaves a job permanently uncancellable. This is exactly the "indexed priority queue" that Dijkstra's algorithm needs for `decrease-key` ([`algorithms` 3.3](../../algorithms/lessons/03-03-dijkstras-shortest-paths.md)), and the same reason many implementations avoid it by using lazy deletion instead: mark the job cancelled, leave it in the heap, and discard it when it surfaces.

**P3** (a) Sorting $5\times10^9$ numbers:

- **Time:** $\Theta(n\log n) = 5\times10^9 \times 32 \approx 1.6\times10^{11}$ comparisons.
- **Memory:** $5\times10^9$ values at 8 bytes = **40 GB**.

Not viable because **the data does not fit in memory** — the problem states so. An external merge sort would work but requires multiple full passes over 40 GB of disk, hours of I/O, to compute a total order of which 99.99998% is immediately discarded.

(b) **Keep a min-heap of size $k = 1000$ holding the largest 1,000 values seen so far.**

The min-heap is the right choice — counter-intuitively, since we want the *largest* values. Its root is the **smallest of the current top 1,000**, which is exactly the threshold a new value must beat to belong in the set. For each incoming value $v$:

- if $v \le$ root: discard, $\Theta(1)$;
- else: `extract-min` and `insert(v)`, $\Theta(\log k)$.

| | cost |
|---|---|
| time (worst case) | $\Theta(n\log k) = 5\times10^9 \times 10 \approx 5\times10^{10}$ |
| memory | $\Theta(k) = \mathbf{1000}$ values $\approx$ 8 KB |

The stream is processed in a single pass and never stored.

(c) **The common case costs one comparison, $\Theta(1)$.**

Once the heap holds the top 1,000 of a large prefix, the probability that the next value beats the current threshold falls rapidly: after $m$ values, it is about $k/m$. So the expected number of heap updates over the whole stream is

$$\sum_{m=k}^{n} \frac{k}{m} \;\approx\; k\ln\frac{n}{k} \;=\; 1000 \times \ln(5\times10^6) \;\approx\; 1000 \times 15.4 \;\approx\; \mathbf{15{,}400 \text{ updates}}$$

for a randomly ordered stream. Realistic total:

$$5\times10^9 \text{ comparisons} + 15{,}400 \times 10 \approx \mathbf{5\times10^9 \text{ operations}}$$

— essentially **one comparison per element**, a factor of 10 below the worst-case bound and 32× below sorting. The $\log k$ term is real but paid vanishingly rarely.

(Caveat worth stating: this assumes the stream is not sorted ascending. On an ascending stream every element beats the threshold and the full $\Theta(n\log k)$ is paid — the same "input order defeats the average" phenomenon as [Lesson 3.1's](03-01-binary-trees-and-binary-search-trees.md) sorted BST insertion.)

(d) **Balanced BST of size 1,000 versus min-heap of size 1,000.**

| | min-heap | balanced BST |
|---|---|---|
| threshold check (the hot path) | $\Theta(1)$ — read index 0 | $\Theta(\log k)$ — descend to the minimum |
| insert + evict | $\Theta(\log k)$, ~10 swaps | $\Theta(\log k)$, plus rotations |
| memory | $k$ values, contiguous, no overhead | $k$ values + 2–3 pointers each, scattered |
| final output in sorted order | $\Theta(k\log k)$ — extract all | $\Theta(k)$ — in-order walk |
| constants | excellent (array, cache-resident) | poor (pointer chasing, allocation) |

*Time:* both are $\Theta(n\log k)$ worst case, but the BST loses the $\Theta(1)$ fast path — it must walk $\log k \approx 10$ nodes just to find its minimum for the comparison, and that comparison happens $5\times10^9$ times. **That is $5\times10^{10}$ pointer-chasing steps instead of $5\times10^9$ array reads**, a 10× difference on the operation that dominates.

*Memory:* 8 KB against roughly 32 KB — both trivial, but the heap stays in L1 cache while the BST's scattered nodes may not.

*The sorted output:* genuinely cheaper on the BST, $\Theta(k)$ against $\Theta(k\log k)$. But $k = 1000$, so that is 1,000 operations against 10,000 — a saving of 9,000 operations, once, against a loss of $4.5\times10^{10}$ on the stream. **The colleague has optimized the output step, which happens once, at the cost of the input step, which happens five billion times.**

*When the BST is actually better:* when the maintained set must answer questions a heap cannot, **during** the stream rather than at the end — a running median, "how many of the current top-$k$ exceed $x$", or a top-$k$ that must be readable in sorted order continuously rather than once. If the only ordered operation needed is at the very end, sorting the heap's 1,000 values then is trivially cheap and the heap wins.

</details>

## Flashback

**From Lesson 3.2 (Balanced trees — the idea):** A subtree has root $x$, left subtree $A$, right child $y$ with subtrees $B$ and $C$.

(a) Give the in-order traversal before and after a left rotation at $x$. (b) What happens to the height, and to the BST property? (c) Give the height guarantees for AVL and red-black trees at $n = 10^6$. (d) Why does a database index use a tree of fan-out 200 rather than 2, when both are $\Theta(\log n)$?

<details>
<summary>Solution</summary>

(a) Before: $A,\ x,\ B,\ y,\ C$. After: $A,\ x,\ B,\ y,\ C$ — **identical**, which is exactly what makes the rotation legal.

(b) The right side loses a level and the left gains one, so a right-heavy subtree gets shorter. The **BST property is preserved**, because the in-order sequence is unchanged; the rotation is invisible to the ordering invariant and visible only to the shape. $B$ must move from $y$'s left to $x$'s right, since its keys are greater than $x$ and less than $y$.

(c) At $n = 10^6$ ($\log_2 10^6 \approx 20$):

- **AVL:** $\le 1.44\log_2 n \approx 28$
- **red-black:** $\le 2\log_2 n \approx 40$

Against a plain BST on sorted input, which reaches $999{,}999$.

(d) Because on disk **each level costs a page read (~0.1 ms) regardless of how many keys that page holds**, and the number of levels is $\log_b n$. Going from $b = 2$ to $b = 200$ divides the height by $\log_2 200 \approx 7.6$: at $n = 10^9$ that is 30 levels against 5, so 30 seeks against 5.

The asymptotics are identical — the two differ by a constant factor — but when a level costs a millisecond and a comparison costs a nanosecond, that constant is the entire performance story. The order is chosen so one node exactly fills a page, because a page is what the hardware transfers whether you read one byte of it or all of it.

</details>

## Connections

- **Backward:** the heap's two invariants are [Lesson 1.2's](01-02-functions-contracts-and-invariants.md) representation invariants, and the array-as-tree is [Lesson 2.2's](02-02-arrays-and-dynamic-arrays.md) address arithmetic doing the job [Lesson 2.3's](02-03-linked-lists.md) pointers would otherwise do — which is where its constants come from. It answers [Lesson 3.2](03-02-balanced-trees-the-idea.md)'s problem the other way: rather than repairing a strict order, demand less and get balance for free.
- **Forward:** [4.1](04-01-searching-and-elementary-sorting.md) meets heapsort as the $\Theta(n\log n)$ worst-case sort with $\Theta(1)$ extra space, and [4.2](04-02-graphs-representations-and-traversal.md)'s traversals become weighted shortest paths the moment the queue is replaced by a priority queue.
- **Sideways:** the priority queue is the engine of Dijkstra's algorithm and Prim's ([`algorithms` 3.3](../../algorithms/lessons/03-03-dijkstras-shortest-paths.md), [2.3](../../algorithms/lessons/02-03-minimum-spanning-trees-kruskal-and-prim.md)), where the choice of heap decides the running time; Huffman coding ([`algorithms` 2.2](../../algorithms/lessons/02-02-huffman-coding.md)) is repeated `extract-min` on symbol frequencies. Process schedulers in [`operating-systems`](../../operating-systems/syllabus.md) and event queues in discrete-event simulation are the same structure under different names.
