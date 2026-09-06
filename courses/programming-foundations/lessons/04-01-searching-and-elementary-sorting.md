# Programming & Data Structures · Lesson 4.1: Searching and elementary sorting

> ⏱ ~15 min · Module 4: Graphs, sorting, and searching · Builds on: [3.3 (heaps and priority queues)](03-03-heaps-and-priority-queues.md) · Unlocks: 4.2 (graphs: representations and traversal)

## Why this matters

Searching and sorting are the operations you will perform more than any other, and they are also where the abstract machinery of this course pays out in the most concrete way. Binary search is [Lesson 1.2's](01-02-functions-contracts-and-invariants.md) loop invariant in its sharpest form — a four-line loop that is famously hard to get right and trivially provable once you state the invariant. Elementary sorting is where [Lesson 1.4's](01-04-big-o-counting-operations.md) "the class is not the whole story" stops being a caution and becomes a decision you have to make.

The judgement content is that **two $\Theta(n^2)$ sorts are not interchangeable**. Selection sort makes exactly $n(n-1)/2$ comparisons on every input; insertion sort makes $n-1$ on sorted input and $n(n-1)/2$ on reversed. Same class, and one of them is *adaptive* — which is why real library sorts, which are $\Theta(n\log n)$, still contain insertion sort inside them.

The other thing to take away is the $\Omega(n\log n)$ wall: **no comparison-based sort can beat it**, so the gap between $n^2$ and $n\log n$ is closable and the gap below $n\log n$ is not. That is a theorem rather than an absence of cleverness, and knowing it stops you looking. ([`algorithms` 1.4](../../algorithms/lessons/01-04-sorting-and-the-comparison-lower-bound.md) proves it; this lesson states it and shows what it rules out.)

## The idea

**Linear search** scans until it finds the key: $\Theta(n)$, and it needs nothing of the data.

**Binary search** requires sorted data and exploits it. Look at the middle; if the key is smaller, everything from the middle rightward is irrelevant, so discard it. Each comparison **halves** the remaining range, so the cost is $\lceil\log_2(n+1)\rceil$ — 20 probes at $n = 10^6$ against 500,000 for an average linear scan.

The loop is four lines and the correctness is not obvious, which is why it is the standard example of an invariant:

> **If `x` is present, it lies in `a[lo..hi]`.**

Initialization sets `lo, hi = 0, n−1`, so the claim is about the whole array — trivially true. Maintenance discards only the half the ordering proves cannot contain `x`. Termination happens when `lo > hi`, at which point the invariant says `x` is in an empty range: absent.

**Sorting is what makes binary search available**, and the elementary methods share one shape — grow a sorted region one element at a time — while differing in how:

- **Selection sort** finds the smallest of what remains and puts it next. It always scans the entire remaining tail, so its comparison count does not depend on the data at all.
- **Insertion sort** takes the next element and slides it back into the sorted prefix until it fits. It stops sliding as soon as it fits, so **it does less work on data that is already nearly in order**.

That difference — *adaptive* against *oblivious* — does not appear in $\Theta(n^2)$ and decides which one real code uses.

**The wall.** Any algorithm that learns about its input only by comparing pairs of elements needs $\Omega(n\log n)$ comparisons in the worst case. Merge sort and heapsort meet it; quicksort meets it on average. **Nothing beats it** — unless it stops being a comparison sort, which is how counting sort and radix sort achieve $\Theta(n)$ by reading the keys' structure instead.

## The formal version

**Binary search.**

```
BSEARCH(a, n, x):
    lo, hi <- 0, n - 1
    while lo <= hi:
        mid <- lo + (hi - lo) / 2         # NOT (lo + hi) / 2
        if a[mid] = x:   return mid
        if a[mid] < x:   lo <- mid + 1
        else:            hi <- mid - 1
    return -1
```

*Invariant:* if `x` occurs in `a`, its index lies in $[lo, hi]$.

*Initialization:* $[0, n-1]$ is the whole array ✓. *Maintenance:* if `a[mid] < x` then by sortedness every index $\le mid$ holds a value $\le$ `a[mid]` $<$ `x`, so `x` cannot be there and discarding is sound; symmetrically for the other branch ✓. *Termination:* $hi - lo$ strictly decreases, so the loop ends; it ends with $lo > hi$, an empty range, so by the invariant `x` is absent ✓. $\Theta(\log n)$.

**Two bugs worth naming.** `(lo + hi) / 2` overflows when $lo + hi$ exceeds the integer range — this sat in Java's standard library for nine years. And `lo <- mid` instead of `mid + 1` fails to shrink the range when $hi = lo + 1$, giving an infinite loop.

**Selection sort.**

```
for i in 0 .. n-1:
    m <- index of the smallest element in a[i..n-1]
    swap a[i], a[m]
```

Comparisons: $(n-1) + (n-2) + \cdots + 1 = n(n-1)/2$, **always** — best, average and worst case are identical, because the inner scan never stops early. Swaps: at most $n-1$, which is its one virtue.

**Insertion sort.**

```
for i in 1 .. n-1:
    k <- a[i];  j <- i - 1
    while j >= 0 and a[j] > k:
        a[j+1] <- a[j];  j <- j - 1
    a[j+1] <- k
```

*Invariant:* `a[0..i−1]` is sorted and holds the same elements it started with.

| case | comparisons |
|---|---|
| best (already sorted) | $n - 1$ |
| average | $\approx n^2/4$ |
| worst (reversed) | $n(n-1)/2$ |

**[Comparison](../reference.md#sorting-and-searching).**

| | comparisons | swaps/moves | adaptive? | stable? | in place? |
|---|---|---|---|---|---|
| selection | $n(n-1)/2$ always | $O(n)$ | no | no | yes |
| insertion | $n-1$ to $n(n-1)/2$ | $O(n^2)$ | **yes** | yes | yes |
| merge | $\Theta(n\log n)$ | $\Theta(n\log n)$ | no | yes | **no** — $\Theta(n)$ extra |
| heapsort | $\Theta(n\log n)$ | $\Theta(n\log n)$ | no | no | yes |
| quicksort | $\Theta(n\log n)$ avg, $\Theta(n^2)$ worst | — | no | no | yes |

**Stable** means equal keys keep their original relative order — which matters whenever you sort by one field after another.

**The lower bound.** A comparison sort must distinguish $n!$ possible orderings, and each comparison yields one bit, so it needs at least $\log_2(n!) = \Omega(n\log n)$ comparisons in the worst case. ([`algorithms` 1.4](../../algorithms/lessons/01-04-sorting-and-the-comparison-lower-bound.md) gives the decision-tree argument.) At $n = 10^6$: $n(n-1)/2 \approx 5\times10^{11}$ against $n\log_2 n \approx 2\times10^7$ — a factor of **25,000**.

## Picture

![Six rows showing an array of six values at successive stages of insertion sort. The first row, labelled start, is 5 2 9 1 6 3 with only the first cell blue. Each subsequent row is labelled insert 2, insert 9, insert 1, insert 6, insert 3, and has one more cell blue on the left, marking the sorted prefix; the arrays are 2 5 9 1 6 3, then 2 5 9 1 6 3 again, then 1 2 5 9 6 3, then 1 2 5 6 9 3, then 1 2 3 5 6 9. To the right of each row is the number of comparisons that step took: a dash, then 1, 1, 3, 2 and 4. A caption notes eleven comparisons in total, that on already-sorted input insertion sort makes n minus 1 equals 5 and stops early, that on reversed input it makes n times n minus one over two equals 15, that selection sort makes 15 on all three because it scans the whole remaining tail whatever the data looks like, and that adaptivity is the difference and never shows up in the Theta of n squared label.](assets/04-01-fig1.svg)

**The blue prefix is the loop invariant, drawn.** At every row, `a[0..i−1]` is sorted and contains exactly the elements it started with. That claim is true before the loop (a one-element prefix is sorted), preserved by each row, and at the last row covers the whole array — which *is* the postcondition. The picture is a proof with the rows as the induction.

**Read the comparison column: 1, 1, 3, 2, 4.** Inserting 9 into `[2, 5]` costs one comparison because 9 is already bigger than everything and the loop stops immediately. Inserting 3 into `[1, 2, 5, 6, 9]` costs four because it has to travel almost the whole way back. **The cost of each step is how far the element has to move**, which is why insertion sort's total cost is the number of *inversions* in the input, and why nearly-sorted data is nearly free.

**Now the sentence at the bottom.** Eleven comparisons here, 5 on sorted input, 15 on reversed. Selection sort makes **15 on all three** — it cannot do better on sorted data because its inner loop scans the whole remaining tail to find a minimum it could have known was already in place.

Both are $\Theta(n^2)$. On sorted input one of them is $\Theta(n)$ and the other is not, and the $\Theta(n^2)$ label is identical for both. This is [Lesson 1.4's](01-04-big-o-counting-operations.md) point at its sharpest: **the class tells you how the cost grows, and says nothing about which input you have.**

## Worked examples

**Example 1 (mechanical): binary search, and the probe count.** Search for 23 in the sorted array $[2, 5, 8, 12, 16, 23, 38, 41, 55]$, indices 0–8.

| step | `lo` | `hi` | `mid` | `a[mid]` | comparison | action |
|---|---|---|---|---|---|---|
| 1 | 0 | 8 | 4 | 16 | $16 < 23$ | `lo ← 5` |
| 2 | 5 | 8 | 6 | 38 | $38 > 23$ | `hi ← 5` |
| 3 | 5 | 5 | 5 | 23 | equal | **return 5** |

Three probes for nine elements, and $\lceil\log_2 10\rceil = 4$ is the bound.

Now search for 30: step 1 gives `lo ← 5`; step 2 gives `hi ← 5`; step 3 compares $a[5] = 23 < 30$, so `lo ← 6`; now $lo = 6 > hi = 5$ and the loop exits, returning $-1$. **Four probes, and the invariant delivers the conclusion**: `x` would have to be in the empty range $[6, 5]$, so it is absent.

At $n = 10^6$ the same routine takes **20 probes**. A linear scan averages 500,000.

**Example 2 (why you'd care): why a $\Theta(n\log n)$ library sort contains a $\Theta(n^2)$ one.** Sorting small arrays:

| $n$ | insertion sort (avg comparisons) | merge sort ($n\log_2 n$) |
|---|---|---|
| 8 | $\approx 16$ | 24 |
| 16 | $\approx 64$ | 64 |
| 32 | $\approx 256$ | 160 |
| 1000 | $\approx 250{,}000$ | 9{,}966 |

The crossover is around $n = 16$–32, and below it insertion sort wins outright — not marginally. It allocates nothing (merge sort needs a $\Theta(n)$ scratch buffer), touches memory sequentially, has a tiny inner loop, and on partially-ordered data does far less than its average.

So real library sorts are **hybrids**. Timsort (Python, Java) and introsort (C++) recurse with a $\Theta(n\log n)$ method down to subarrays of about 16–32 elements and then switch to insertion sort. Timsort goes further and detects already-sorted *runs* in the input, which is insertion sort's adaptivity turned into a first-class feature — on nearly-sorted data it approaches $\Theta(n)$.

**The lesson is not that $\Theta(n^2)$ is fine. It is that the asymptotic decides the algorithm and the constants decide the implementation** — and a production sort makes both decisions rather than one.

## Watch out

- **You might think** binary search works on any array — **but actually** it requires **sorted** data, and on unsorted input it returns wrong answers silently rather than failing. That precondition is the caller's obligation ([Lesson 1.2](01-02-functions-contracts-and-invariants.md)).
- **You might think** `(lo + hi) / 2` is fine — **but actually** it overflows for large arrays. Write `lo + (hi - lo) / 2`. This bug was in Java's library for nine years and in Bentley's *Programming Pearls* for twenty.
- **You might think** two $\Theta(n^2)$ sorts are interchangeable — **but actually** insertion sort is $\Theta(n)$ on sorted input and selection sort is $\Theta(n^2)$ on everything. Adaptivity is invisible in the class.
- **You might think** sorting first always pays for itself — **but actually** sorting costs $\Theta(n\log n)$ to enable $\Theta(\log n)$ lookups. For a handful of searches a linear scan is cheaper; the sort pays off only past roughly $n\log n / \log n = n$ queries, or when the data is searched repeatedly.
- **You might think** $\Omega(n\log n)$ is a limit on sorting — **but actually** it is a limit on **comparison** sorting. Counting sort and radix sort are $\Theta(n)$ because they read the keys' structure instead of comparing, and the bound does not apply to them.
- **You might think** stability is a detail — **but actually** it is what makes multi-key sorting work: sort by name, then stably by department, and within each department the names stay ordered. With an unstable sort the first pass is destroyed.

## One-liner

> Halving needs sortedness and gives you $\log_2 n$ probes; sorting to get there costs $\Omega(n\log n)$ by comparisons alone — and between two quadratic sorts, the adaptive one is the one that survives into real libraries.

## Problems

**P1 (🟢)** Binary search on $[3, 7, 11, 15, 19, 23, 27]$, indices 0–6.

(a) Trace the search for 19, giving `lo`, `hi`, `mid` and the comparison at each step. (b) Trace the search for 12. (c) How many probes does each take, and what is the bound for $n = 7$? (d) State the loop invariant and say what it tells you at the moment the search for 12 exits.

**P2 (🟡)** Sort $[4, 1, 5, 2]$ by hand.

(a) Give the array after each pass of selection sort, and the total comparisons. (b) Same for insertion sort, with per-step comparison counts. (c) Give both totals for the inputs $[1,2,4,5]$ and $[5,4,2,1]$. (d) Both are $\Theta(n^2)$. Give the one property that distinguishes them and the consequence for a real library sort.

**P3 (🔴)** A service holds $10^6$ product records and answers "is this SKU in stock?" It currently scans a list.

(a) Give the cost per query and for $10^5$ queries a day. (b) Give the cost of sorting once and binary searching, including the sort, and the break-even number of queries. (c) A hash table gives $\Theta(1)$ expected. Give the daily cost and say why you might still choose the sorted array. (d) The service adds "list all SKUs between two codes, in order", about 50 times a day returning 500 results each. Give the cost of that query on each of the three structures, and state which you would ship.

<details>
<summary>Solutions</summary>

**P1** (a) Searching for 19 in $[3, 7, 11, 15, 19, 23, 27]$:

| step | `lo` | `hi` | `mid` | `a[mid]` | comparison | action |
|---|---|---|---|---|---|---|
| 1 | 0 | 6 | 3 | 15 | $15 < 19$ | `lo ← 4` |
| 2 | 4 | 6 | 5 | 23 | $23 > 19$ | `hi ← 4` |
| 3 | 4 | 4 | 4 | 19 | equal | **return 4** |

(b) Searching for 12:

| step | `lo` | `hi` | `mid` | `a[mid]` | comparison | action |
|---|---|---|---|---|---|---|
| 1 | 0 | 6 | 3 | 15 | $15 > 12$ | `hi ← 2` |
| 2 | 0 | 2 | 1 | 7 | $7 < 12$ | `lo ← 2` |
| 3 | 2 | 2 | 2 | 11 | $11 < 12$ | `lo ← 3` |
| — | 3 | 2 | — | — | $lo > hi$ | **return −1** |

(c) Three probes for 19, three for 12. The bound is $\lceil\log_2(7+1)\rceil = \mathbf{3}$, so both hit it exactly.

(d) **Invariant:** if `x` occurs in the array, its index lies in $[lo, hi]$.

At the moment the search for 12 exits, $lo = 3$ and $hi = 2$, so the range $[3, 2]$ is **empty**. The invariant then says: if 12 occurs, its index is in an empty set — which is impossible, so 12 does not occur. **The absence is proved, not merely unobserved**: the invariant plus the exit condition gives the postcondition, which is exactly the termination step of [Lesson 1.2's](01-02-functions-contracts-and-invariants.md) method.

**P2** (a) **Selection sort** on $[4, 1, 5, 2]$:

| pass | scan | minimum found | swap | array after | comparisons |
|---|---|---|---|---|---|
| $i=0$ | `a[0..3]` | 1 (idx 1) | 4↔1 | $[1, 4, 5, 2]$ | 3 |
| $i=1$ | `a[1..3]` | 2 (idx 3) | 4↔2 | $[1, 2, 5, 4]$ | 2 |
| $i=2$ | `a[2..3]` | 4 (idx 3) | 5↔4 | $[1, 2, 4, 5]$ | 1 |
| $i=3$ | `a[3..3]` | — | — | $[1, 2, 4, 5]$ | 0 |

Total: $3+2+1 = \mathbf{6}$ comparisons $= n(n-1)/2 = 4\cdot3/2$ ✓.

(b) **Insertion sort** on $[4, 1, 5, 2]$:

| step | insert | into prefix | comparisons | array after |
|---|---|---|---|---|
| $i=1$ | 1 | $[4]$ | 1 ($4 > 1$) | $[1, 4, 5, 2]$ |
| $i=2$ | 5 | $[1, 4]$ | 1 ($4 > 5$? no, stop) | $[1, 4, 5, 2]$ |
| $i=3$ | 2 | $[1, 4, 5]$ | 3 ($5>2$, $4>2$, $1>2$? no) | $[1, 2, 4, 5]$ |

Total: $1 + 1 + 3 = \mathbf{5}$ comparisons.

(c) On the two extreme inputs:

| input | selection | insertion |
|---|---|---|
| $[1,2,4,5]$ (sorted) | **6** | **3** ($n-1$) |
| $[5,4,2,1]$ (reversed) | **6** | **6** ($n(n-1)/2$) |

Selection sort makes 6 comparisons on every input of size 4, including the already-sorted one. Insertion sort ranges from 3 to 6.

(d) **The distinguishing property is adaptivity**: insertion sort's inner loop stops as soon as the element is in place, so its cost is proportional to the number of **inversions** in the input, while selection sort's inner loop always scans the entire remaining tail and cannot stop early.

**The consequence:** real library sorts are hybrids that use insertion sort — never selection sort — for small subarrays, and Timsort goes further by detecting already-sorted runs in the input, which makes it approach $\Theta(n)$ on nearly-ordered data. Selection sort's one advantage is that it performs at most $n-1$ swaps, which matters only when *writing* is far more expensive than reading (flash memory with limited write cycles, for instance). Otherwise it has no niche.

**P3** (a) Linear scan over $10^6$ records: $\Theta(n)$, averaging $5\times10^5$ comparisons per query (and $10^6$ for a miss).

$$10^5 \text{ queries} \times 5\times10^5 = \mathbf{5\times10^{10}} \text{ comparisons per day.}$$

(b) Sort once, then binary search:

- **Sort:** $\Theta(n\log n) = 10^6 \times 20 = 2\times10^7$, paid once (or once per rebuild).
- **Each query:** $\lceil\log_2 10^6\rceil = 20$ probes.
- **Daily:** $2\times10^7 + 10^5 \times 20 = 2\times10^7 + 2\times10^6 = \mathbf{2.2\times10^7}$.

A factor of about **2,300** better than scanning.

**Break-even:** sorting pays for itself once the saved query cost exceeds the sort cost:

$$q \times (5\times10^5 - 20) \;>\; 2\times10^7 \quad\Longrightarrow\quad q > 40.$$

**About 40 queries.** Past that, sorting wins; below it, just scan. (At $10^5$ queries a day the sort is amortized over 2,500× its break-even, so it is not close.)

(c) **Hash table:** $\Theta(1)$ expected, so $10^5$ queries cost $\approx 10^5$–$2\times10^5$ probes plus a $\Theta(n)$ build — around $1.2\times10^6$ daily, another **18×** better than the sorted array.

**Why you might still choose the sorted array:**

- **Memory.** A sorted array is exactly $n$ records, contiguous. A hash table needs $n/\alpha$ buckets plus chain pointers — typically 1.3–2× the memory, scattered.
- **Locality and predictability.** Binary search's 20 probes are $\Theta(\log n)$ **worst case**; a hash table is $\Theta(1)$ *expected* with a $\Theta(n)$ worst case reachable by adversarial or structured keys ([Lesson 2.5](02-05-hash-tables.md)).
- **It supports ordered queries**, which is part (d).
- **Simplicity.** A sorted array is an array; there is no hash function to choose, no load factor to tune, no resize pause.

At $10^5$ queries a day, both are far below any budget that matters — $1.2\times10^6$ against $2.2\times10^7$ is milliseconds against milliseconds — so the choice should be made on the other axes, not on speed.

(d) **Range query: 50 calls a day, 500 results each.**

| structure | cost per range query | daily |
|---|---|---|
| unsorted list | $\Theta(n)$ scan + $\Theta(k\log k)$ sort $= 10^6 + 4{,}500$ | $5\times10^7$ |
| **sorted array** | $\Theta(\log n + k) = 20 + 500$ | $2.6\times10^4$ |
| hash table | **not supported** — scan all buckets, then sort: $\approx 10^6 + 4{,}500$ | $5\times10^7$ |

The sorted array is about **2,000× cheaper** on this query, and the hash table is no better than the unsorted list because hashing destroys exactly the ordering the query needs ([Lesson 2.5](02-05-hash-tables.md), [3.1](03-01-binary-trees-and-binary-search-trees.md)).

**What I would ship: the sorted array** (or, if the catalogue changes frequently, a balanced tree — [Lesson 3.2](03-02-balanced-trees-the-idea.md)).

The reasoning: point lookups cost $2.2\times10^7$ daily against the hash table's $1.2\times10^6$ — an 18× loss on an operation whose absolute cost is already negligible — while range queries cost $2.6\times10^4$ against $5\times10^7$, a 2,000× win on an operation the hash table cannot do at all. One structure serves both workloads, with no second index to keep consistent.

The choice would flip if point lookups were $10^9$ a day rather than $10^5$, at which point the 18× starts to matter and a hash table plus a secondary ordered index becomes worth its consistency burden — the design discussed in [Lesson 3.1's](03-01-binary-trees-and-binary-search-trees.md) P3. **The deciding question is always the operation mix, not which structure is fastest at any single operation.**

</details>

## Flashback

**From Lesson 3.2 (Balanced trees — the idea):** A plain BST is fed $10^6$ keys in sorted order.

(a) Give the resulting height and the cost of a lookup. (b) Give the height under an AVL tree and a red-black tree. (c) What structural operation makes balancing possible, and why does it not break the search order? (d) Why does a disk-based index use fan-out 200 rather than 2?

<details>
<summary>Solution</summary>

(a) Every key is larger than all its predecessors, so each insertion goes right and the tree becomes a **right-descending chain of height $999{,}999$**. A lookup for the largest key costs up to $10^6$ comparisons — the structure performs exactly like a linked list, with double the memory.

(b) **AVL:** $\le 1.44\log_2 10^6 \approx 28$. **Red-black:** $\le 2\log_2 10^6 \approx 40$. Both bounds are worst-case and hold for *every* insertion order, which is the whole point — sorted input is not a special case for them.

(c) A **rotation**: a constant-time rewiring that makes a node's child into its parent, reattaching the middle subtree. It does not break the search order because the **in-order traversal is identical before and after** — $A, x, B, y, C$ either way — so the BST property cannot detect it, while the height changes. That invisibility is precisely what makes it the legal move.

(d) Because on disk **each level costs a page read regardless of how many keys the page holds**, and the height is $\log_b n$. Raising $b$ from 2 to 200 divides the height by $\log_2 200 \approx 7.6$ — at $n = 10^9$, 5 seeks instead of 30. Both are $\Theta(\log n)$; the constant is the entire performance story when a level costs a millisecond and a comparison costs a nanosecond. The order is chosen so one node exactly fills a page, because the page is what the hardware transfers whether you read one byte of it or all of it.

</details>

## Connections

- **Backward:** binary search is [Lesson 1.2's](01-02-functions-contracts-and-invariants.md) loop invariant at its most useful, and the insertion-sort prefix is the same picture. The comparison counts are [Lesson 1.4's](01-04-big-o-counting-operations.md) $\sum i$, and the adaptivity point is that lesson's warning about what the class discards. Heapsort is [Lesson 3.3's](03-03-heaps-and-priority-queues.md) heap drained one `extract-min` at a time.
- **Forward:** [4.2](04-02-graphs-representations-and-traversal.md) searches a structure with no order to exploit, so binary search's halving has no analogue and traversal is $\Theta(n + m)$. [4.3](04-03-recursion-revisited-backtracking.md) searches a space too large to enumerate, where the analogue of "discard half" is pruning.
- **Sideways:** the $\Omega(n\log n)$ lower bound and its decision-tree proof are [`algorithms` 1.4](../../algorithms/lessons/01-04-sorting-and-the-comparison-lower-bound.md)'s, along with merge sort, quicksort and the linear-time non-comparison sorts. Binary search on a sorted file is the seek-minimizing ancestor of the B⁺-tree index in [`databases`](../../databases/syllabus.md), and "sort once, query many" is the reasoning behind every index a database builds.
