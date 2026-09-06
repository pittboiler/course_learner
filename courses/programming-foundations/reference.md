# Programming & Data Structures · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Two questions run through the whole course: **what does this code promise**, and
**what does it cost**? Module 1 builds the tools for both — the trace table, the
contract, the loop invariant, and the operation count. Modules 2 and 3 apply them
to the classic data structures, where every choice is the same exercise: here is
an interface, here are two implementations, here are their cost vectors, now match
them against the operations your program actually performs. Module 4 covers the
operations you will run most (search, sort, traverse) and the technique for when
there is no plan at all (backtracking). Mid-problem, this card is where the
definitions, the cost tables, the growth numbers and the recurring traps live.

*This card covers the whole course (lessons 1.1–4.3).*

## Notation

| Symbol | Means | First used |
|---|---|---|
| $n$ | the size of the input — array length, node count, vertex count | [1.4](lessons/01-04-big-o-counting-operations.md) |
| $\leftarrow$ | assignment: evaluate the right, overwrite the name on the left. **Not** equality | [1.1](lessons/01-01-values-variables-and-control-flow.md) |
| $[a, b)$ | half-open range: includes $a$, excludes $b$, so its length is $b - a$ | [1.1](lessons/01-01-values-variables-and-control-flow.md) |
| $\{P\}\ f\ \{Q\}$ | if precondition $P$ holds when $f$ is called, postcondition $Q$ holds when it returns | [1.2](lessons/01-02-functions-contracts-and-invariants.md) |
| $I$ | a loop invariant — the claim that survives every iteration | [1.2](lessons/01-02-functions-contracts-and-invariants.md) |
| $T(n)$, $D(n)$ | number of calls; maximum stack depth | [1.3](lessons/01-03-recursion-and-the-call-stack.md) |
| $O$, $\Omega$, $\Theta$ | grows no faster than / no slower than / at the same rate | [1.4](lessons/01-04-big-o-counting-operations.md) |
| `size`, `capacity` | elements in use; slots allocated. **Different numbers** | [2.2](lessons/02-02-arrays-and-dynamic-arrays.md) |
| $\alpha$ | hash-table load factor, $n/m$ — items per bucket | [2.5](lessons/02-05-hash-tables.md) |
| $m$ (hashing) | number of buckets | [2.5](lessons/02-05-hash-tables.md) |
| $h$ | tree height — the length of the longest root-to-leaf path | [3.1](lessons/03-01-binary-trees-and-binary-search-trees.md) |
| $b$ (trees) | fan-out: children per node in a B-tree | [3.2](lessons/03-02-balanced-trees-the-idea.md) |
| $n$, $m$ (graphs) | vertices, edges | [4.2](lessons/04-02-graphs-representations-and-traversal.md) |
| $\deg v$ | degree: how many edges touch $v$ | [4.2](lessons/04-02-graphs-representations-and-traversal.md) |
| $b$, $d$ (search) | branching factor and depth of a search tree | [4.3](lessons/04-03-recursion-revisited-backtracking.md) |

## Definitions

### Trace table

One row per iteration, one column per variable. The technique for saying what code does without running it. Spend your attention on the **first** iteration, the **last** one, and the **ties** — the middle is never where the bug is.

*Introduced:* [1.1](lessons/01-01-values-variables-and-control-flow.md)

### Loop anatomy

Every loop has an **initialization**, a **condition**, a **body**, and an **update**. Missing the update means it never ends; a condition off by one at the boundary means reading past the end or skipping the last element. The bound on a loop is a fact about what the **body** touches, not about the array's length.

*Introduced:* [1.1](lessons/01-01-values-variables-and-control-flow.md)

### Precondition and postcondition (contract)

The **precondition** is the caller's obligation, the **postcondition** the callee's. Writing them down does not make code better — it makes failure **attributable**. A precondition nobody states is a precondition nobody obeys, and one you cannot check is a comment.

*Introduced:* [1.2](lessons/01-02-functions-contracts-and-invariants.md)

### Loop invariant

A claim true at the top of every iteration, proved in three parts: **initialization** (true before the loop), **maintenance** (preserved by one pass), **termination** (the loop stops, and $I$ plus the failed condition gives the postcondition). It is induction, and it replaces infinitely many traces with three finite checks. **Initialization is the step people skip and the step that fails.**

*Introduced:* [1.2](lessons/01-02-functions-contracts-and-invariants.md)

### Representation invariant

The property that makes an instance of a data type valid — `0 ≤ size ≤ capacity`, a heap's parent-child ordering, a BST's subtree ordering. Every operation may break it mid-flight and **must restore it before returning**.

*Introduced:* [2.1](lessons/02-01-abstract-data-types-and-interfaces.md)

### Aliasing

Two names referring to the same mutable object, so a change through one is visible through the other. A function's effects then reach code that never called it. "Mutates its argument" belongs in the postcondition, not in the reader's head.

*Introduced:* [1.2](lessons/01-02-functions-contracts-and-invariants.md)

### Base case and recursive case

A recursion answers small inputs outright and reduces larger ones. Correctness is induction: base case, step, and *the input strictly decreases toward the base*. **A base case that is never reached is the same bug as no base case.**

*Introduced:* [1.3](lessons/01-03-recursion-and-the-call-stack.md)

### Call stack, call tree

A **frame** per active call, holding parameters, locals and the return address. In the **call tree**, time is the number of **nodes** and space is the length of the longest **root-to-leaf path** — two different numbers that can differ exponentially.

*Introduced:* [1.3](lessons/01-03-recursion-and-the-call-stack.md)

### Tail call

A recursive call that is the caller's *last* action, so its frame has no pending work and can be reused. `return f(n-1)` qualifies; `return n * f(n-1)` does not — the multiplication is still waiting. Whether it costs $\Theta(1)$ or $\Theta(n)$ space is a fact about your **language**, not your algorithm.

*Introduced:* [1.3](lessons/01-03-recursion-and-the-call-stack.md)

### Abstract data type (ADT)

A set of operations plus their contracts, saying nothing about memory. Buys **substitutability** — two implementations are interchangeable without changing any caller's correctness — and hides the cost, which is why the **cost vector** must be published alongside.

*Introduced:* [2.1](lessons/02-01-abstract-data-types-and-interfaces.md)

### Amortized cost

A bound on the **total** over a sequence, divided by the sequence length. Worst-case, with no probability in it. It says nothing about any individual operation: the append that triggers a reallocation copies the whole array.

*Introduced:* [2.2](lessons/02-02-arrays-and-dynamic-arrays.md)

### Dynamic array

An array plus `size` and `capacity`, reallocating when full. **Grow by a factor** and appends are $\Theta(1)$ amortized; **grow by an amount** and they are $\Theta(n^2)$ total, for any constant amount. Address arithmetic `base + i·w` is what makes indexing $\Theta(1)$ and shifting unavoidable.

*Introduced:* [2.2](lessons/02-02-arrays-and-dynamic-arrays.md)

### Linked list

Nodes holding a value and a reference. $\Theta(1)$ splicing **given a reference to the node**; $\Theta(n)$ by index, because there is no address formula. Deleting needs the **predecessor**, so it is $\Theta(n)$ singly linked and $\Theta(1)$ doubly. A **dummy head node** removes the head special case.

*Introduced:* [2.3](lessons/02-03-linked-lists.md)

### Stack and queue

**LIFO** and **FIFO**, with operations only at designated ends. Narrowing the interface this far makes **both** backings $\Theta(1)$, so the choice becomes purely about constants — and the array wins.

*Introduced:* [2.4](lessons/02-04-stacks-and-queues.md)

### Circular (ring) buffer

An array queue with `head` and `tail` advancing modulo the capacity, so a dequeue **moves the window, not the data**. `head == tail` means empty *or* full, so a separate `size` counter (or one deliberately wasted slot) is required — omitting it is the classic ring-buffer bug and only appears when the buffer first fills.

*Introduced:* [2.4](lessons/02-04-stacks-and-queues.md)

### Hash table, load factor

Index by arithmetic on the **key**: $\text{bucket}(k) = h(k) \bmod m$. Collisions are guaranteed by pigeonhole and handled by **chaining** or **open addressing**. With $\alpha = n/m$ bounded by resizing, operations are $\Theta(1)$ **expected** — over the hash function's spreading of keys, *not* over the keys.

*Introduced:* [2.5](lessons/02-05-hash-tables.md)

### Binary search tree, the BST property

For every node, **all keys in its left subtree** are smaller and **all in its right** are larger. (Not just the immediate children — the weaker version is a different, useless structure.) Every operation costs $\Theta(h)$, and an in-order walk emits the keys sorted.

*Introduced:* [3.1](lessons/03-01-binary-trees-and-binary-search-trees.md)

### Rotation

A constant-time rewiring making a node's child its parent, reattaching the middle subtree. **The in-order walk is identical before and after**, so the BST property cannot detect it while the height changes — which is exactly what makes it the legal rebalancing move.

*Introduced:* [3.2](lessons/03-02-balanced-trees-the-idea.md)

### Balanced tree

A BST plus a **shape invariant** restored by rotations after every update, bounding the height at $O(\log n)$ **for every insertion order** — worst case, not expected. AVL is stricter and shorter; red-black is looser and cheaper to update.

*Introduced:* [3.2](lessons/03-02-balanced-trees-the-idea.md)

### Heap, heap property

Every parent's key is $\le$ both children's. **Much weaker than a BST** — siblings are unconstrained — which is why no rebalancing is ever needed. Kept **complete**, so it is an array with children at $2i{+}1, 2i{+}2$ and parent at $\lfloor(i{-}1)/2\rfloor$: no pointers, no allocation, perfect locality. Buys exactly one thing, the minimum at index 0.

*Introduced:* [3.3](lessons/03-03-heaps-and-priority-queues.md)

### Priority queue

`insert`, `peek`, `extract-min`. A heap is the standard implementation, and this is what Dijkstra's and Prim's algorithms consume.

*Introduced:* [3.3](lessons/03-03-heaps-and-priority-queues.md)

### Adaptive sort

One whose cost depends on how ordered the input already is. Insertion sort is adaptive ($n-1$ comparisons on sorted input); selection sort is not ($n(n-1)/2$ always). **Invisible in $\Theta(n^2)$**, and the reason real library sorts embed insertion sort.

*Introduced:* [4.1](lessons/04-01-searching-and-elementary-sorting.md)

### Stability

Equal keys keep their original relative order. What makes multi-key sorting work: sort by name, then *stably* by department, and names stay ordered within each department.

*Introduced:* [4.1](lessons/04-01-searching-and-elementary-sorting.md)

### Graph, adjacency list vs matrix

Vertices and edges, directed or not. The **list** stores each vertex's neighbours: $\Theta(n+m)$ space, $\Theta(\deg v)$ to iterate. The **matrix** stores every possible pair: $\Theta(n^2)$ space, $\Theta(1)$ edge query, $\Theta(n)$ to iterate. Real graphs are sparse, so the list is the default.

*Introduced:* [4.2](lessons/04-02-graphs-representations-and-traversal.md)

### BFS and DFS

The same loop with a different container. **Queue → BFS**, whose discovery order is hop-distance order. **Stack → DFS**, which makes no distance claim but exposes structure. Both $\Theta(n+m)$ with adjacency lists. The `discovered` mark is what makes them terminate on a cycle.

*Introduced:* [4.2](lessons/04-02-graphs-representations-and-traversal.md)

### Backtracking

Depth-first search over partial solutions: **choose, explore, un-choose**. The un-choose is what makes it backtracking; omitting it corrupts the sibling branches. Pruning shrinks the tree — sometimes by a factor of thousands — but **never changes the complexity class**.

*Introduced:* [4.3](lessons/04-03-recursion-revisited-backtracking.md)

## Formulas and rules

### The two summations that do most of the work

$$\sum_{i=0}^{n-1} 1 = n, \qquad \sum_{i=0}^{n-1} i = \frac{n(n-1)}{2}, \qquad \sum_{j=0}^{k} 2^j = 2^{k+1} - 1.$$

The first is a single pass, the second a triangular nested loop (**$\Theta(n^2)$**, half the work of a full one), the third the geometric sum behind every doubling argument.

### Counting a loop

| shape | exact count | class |
|---|---|---|
| `for i in 0..n-1` | $n$ | $\Theta(n)$ |
| `for i in 0..n-1: for j in 0..n-1` | $n^2$ | $\Theta(n^2)$ |
| `for i in 0..n-1: for j in 0..i-1` | $n(n-1)/2$ | $\Theta(n^2)$ |
| `while n > 1: n = n/2` | $\lfloor\log_2 n\rfloor + 1$ | $\Theta(\log n)$ |
| `for i in 0..n-1: while m > 1: m = m/2` | $n\log_2 n$ | $\Theta(n\log n)$ |

Sequences **add**, nesting **multiplies**, and the base of a logarithm is a constant factor that vanishes in $\Theta$.

### Growth at a billion operations per second

| $n$ | $\log_2 n$ | $n$ | $n\log_2 n$ | $n^2$ |
|---|---|---|---|---|
| 1,000 | 10 ops | 1 µs | 10 µs | 1 ms |
| $10^6$ | 20 ops | 1 ms | 20 ms | **17 minutes** |
| $10^9$ | 30 ops | 1 s | 30 s | **30 years** |

**Hardware moves you along a column; algorithms move you between columns.** A machine $10^9\times$ faster moves a solvable $2^n$ from $n = 30$ to about $n = 60$.

### Recursion: two resources, counted separately

| routine | calls | stack depth |
|---|---|---|
| `FACTORIAL(n)` | $n+1$ | $n+1$ |
| binary search | $\Theta(\log n)$ | $\Theta(\log n)$ |
| naive `FIB(n)` | $2F(n{+}1)-1 \approx \varphi^n$ | $n+1$ |
| merge sort | $\Theta(n)$ calls, $\Theta(n\log n)$ work | $\Theta(\log n)$ |

`fib(40)` makes 331,160,281 calls at depth 40; memoized, 41. **Recursion that divides is always safe; recursion that decrements is not** — Python's default limit is 1,000 frames.

### Cost vector: the linear structures

| operation | array | linked list | stack/queue | hash table |
|---|---|---|---|---|
| `get(i)` | $\Theta(1)$ | $\Theta(n)$ | — | — |
| lookup by value/key | $\Theta(n)$ | $\Theta(n)$ | — | $\Theta(1)$ expected |
| insert at front | $\Theta(n)$ | $\Theta(1)$ | $\Theta(1)$ | — |
| insert at back | $\Theta(1)$ amortized | $\Theta(1)$ with a tail | $\Theta(1)$ | $\Theta(1)$ amortized |
| insert/delete at a **held node** | $\Theta(n)$ | $\Theta(1)$ (doubly) | — | — |
| insert/delete at **index $i$** | $\Theta(n)$ | $\Theta(n)$ | — | — |
| ordered iteration | $\Theta(n)$ if sorted | $\Theta(n)$ if sorted | — | **not supported** |
| memory per element | 1 slot | 1 slot + 1–2 pointers | 1 slot | $\approx 1/\alpha$ slots |

### Dynamic-array growth: factor, not amount

| policy | total copies over $n$ appends | at $n = 10^6$ | wasted capacity |
|---|---|---|---|
| $\times 1.5$ | $\approx 2n$ | $2.1\times10^6$ | 50% |
| $\times 2$ | $< 2n$ | $1.05\times10^6$ | 100% |
| $\times 4$ | $\approx n/3$ | $3.5\times10^5$ | 300% |
| $+\,c$ | $n^2/2c$ | $5\times10^{11}$ ($c=1$) | $c$ slots |

Shrink at **one quarter** full, not one half, or an alternating append/remove sequence reallocates every time.

### Hash tables: expected probes for an unsuccessful search

| $\alpha$ | chaining $(1+\alpha)$ | linear probing $\tfrac12\!\left(1+\tfrac1{(1-\alpha)^2}\right)$ |
|---|---|---|
| 0.5 | 1.5 | 2.5 |
| 0.75 | 1.75 | **8.5** |
| 0.9 | 1.9 | **50.5** |
| 0.95 | 1.95 | **200.5** |

Chaining barely moves as the table fills; open addressing explodes, which is why it must be resized at $\alpha \approx 0.5$. Successful search under chaining is $1 + \alpha/2$.

### Tree heights

| structure | height | at $n = 10^6$ |
|---|---|---|
| perfectly balanced | $\lfloor\log_2 n\rfloor$ | 19 |
| random-order BST | $\approx 1.39\log_2 n$ expected | $\approx 28$ |
| AVL | $\le 1.44\log_2 n$ | $\approx 28$ |
| red-black | $\le 2\log_2 n$ | $\approx 40$ |
| **plain BST, sorted input** | $n - 1$ | **999,999** |
| B-tree of order $b$ | $\log_b n$ | 3 at $b = 100$ |

Every BST operation costs $\Theta(h)$, so this table is the performance table.

### Heap facts

- Children of $i$: $2i{+}1$, $2i{+}2$. Parent of $i$: $\lfloor (i-1)/2 \rfloor$.
- `peek` $\Theta(1)$; `insert` and `extract-min` $\Theta(\log n)$; **search $\Theta(n)$**.
- **`build-heap` bottom-up is $\Theta(n)$**, not $\Theta(n\log n)$: $\sum_h (n/2^{h+1})\,h = n\sum_h h/2^h \cdot \tfrac12 = n$. A **20×** saving at $n = 10^6$ over repeated insertion.
- Heapsort: $\Theta(n\log n)$ worst case in $\Theta(1)$ extra space.

### Sorting and searching

| | comparisons | adaptive | stable | in place |
|---|---|---|---|---|
| selection sort | $n(n-1)/2$ **always** | no | no | yes |
| insertion sort | $n-1$ … $n(n-1)/2$ | **yes** | yes | yes |
| merge sort | $\Theta(n\log n)$ | no | yes | no ($\Theta(n)$ extra) |
| heapsort | $\Theta(n\log n)$ | no | no | yes |
| quicksort | $\Theta(n\log n)$ avg, $\Theta(n^2)$ worst | no | no | yes |

**Binary search:** $\lceil\log_2(n+1)\rceil$ probes — 20 at $n = 10^6$, against 500,000 for an average linear scan. Requires sorted input, and `mid ← lo + (hi−lo)/2` to avoid overflow.

**The wall:** any comparison sort needs $\Omega(n\log n)$ comparisons in the worst case, since it must distinguish $n!$ orderings. Counting and radix sort beat it only by *not comparing*.

### Which structure?

| what you need | use |
|---|---|
| index by position | array |
| insert/delete at a node you already hold | linked list (doubly) |
| add and remove at one end | stack |
| add at one end, remove at the other | queue (circular buffer) |
| lookup by key, no ordering | hash table |
| lookup by key **plus** ordering, min/max, range | balanced BST |
| repeatedly take the smallest | heap / priority queue |
| relationships between things | graph (adjacency list) |
| search a space with no formula | backtracking |

### Graphs

| | adjacency list | adjacency matrix |
|---|---|---|
| space | $\Theta(n+m)$ | $\Theta(n^2)$ |
| is $(u,v)$ an edge? | $\Theta(\deg u)$ | $\Theta(1)$ |
| iterate $u$'s neighbours | $\Theta(\deg u)$ | $\Theta(n)$ |
| full traversal | $\Theta(n+m)$ | $\Theta(n^2)$ |

At $n = 10^5$, $m = 2\times10^5$: $5\times10^5$ steps against $10^{10}$ — **20,000×**, same code. Undirected edges appear **twice** in a list, so $\sum_v \deg v = 2m$.

### Backtracking: what pruning buys

| $n$-queens | raw space $n^n$ | permutations $n!$ | nodes explored |
|---|---|---|---|
| 4 | 256 | 24 | 17 |
| 6 | 46,656 | 720 | 153 |
| 8 | 16,777,216 | 40,320 | **2,057** |

A factor of 8,000 at $n = 8$ — and the node count still grows about $3\times$ per step, so it is **still exponential**. Pruning changes the base, not the class. Space is $\Theta(\text{depth})$, not $\Theta(\text{nodes})$.

## Assumed, not taught here

This is a Tier 0 course with **no prerequisites** — everything it uses, it builds.
What appears below is not assumed knowledge but **ceded scope**: topics this course
uses and points elsewhere for, under the one-owner rule declared in the syllabus.

| Fact | Where it's taught |
|---|---|
| Formal $O$ / $\Omega$ / $\Theta$ / $o$ / $\omega$ definitions with witnesses $c, n_0$; proving one function is $o$ of another | [algorithms 1.1](../algorithms/lessons/01-01-asymptotic-notation.md) |
| Recurrences, recursion trees, the master theorem — turning a recursive routine into a closed form | [algorithms 1.2–1.3](../algorithms/lessons/01-02-recurrences-recursion-trees-substitution.md) |
| Amortized analysis as a technique: aggregate, accounting, potential methods | [algorithms 2.4](../algorithms/lessons/02-04-amortized-analysis-and-union-find.md) |
| The $\Omega(n\log n)$ comparison lower bound and its decision-tree proof; merge sort, quicksort, and the linear-time non-comparison sorts | [algorithms 1.4](../algorithms/lessons/01-04-sorting-and-the-comparison-lower-bound.md) |
| DFS timestamps, tree/back/forward/cross edge classification, the BFS shortest-path proof | [algorithms 3.1](../algorithms/lessons/03-01-graph-search-bfs-and-dfs.md) |
| Topological sort and strongly connected components from DFS finish order | [algorithms 3.2](../algorithms/lessons/03-02-topological-sort-and-strongly-connected-components.md) |
| Weighted shortest paths — the priority queue put to work | [algorithms 3.3](../algorithms/lessons/03-03-dijkstras-shortest-paths.md) |
| Why an exponential search space resists polynomial solution at all (P, NP, NP-completeness) | [algorithms 4.1](../algorithms/lessons/04-01-p-np-and-polynomial-time-reductions.md) |
| Rotation-by-rotation AVL and red-black insertion; B⁺-tree implementation | [algorithms](../algorithms/syllabus.md) / [databases](../databases/syllabus.md) |
| Why a contiguous scan beats pointer-chasing by 5–10×: caches, prefetching, memory hierarchy | [computer-architecture](../computer-architecture/syllabus.md) |
| Induction and strong induction — the proof shape behind every invariant here | [discrete-mathematics 1.4](../discrete-mathematics/lessons/01-04-induction-and-strong-induction.md) |
| $\sum i = n(n-1)/2$, geometric sums, counting arguments behind search-space sizes | [discrete-mathematics 3.1](../discrete-mathematics/lessons/03-01-counting-rules-permutations-combinations.md) |
| Pigeonhole — why hash collisions are guaranteed | [discrete-mathematics 3.3](../discrete-mathematics/lessons/03-03-inclusion-exclusion-and-pigeonhole.md) |
| Graph vocabulary, trees, the $2^h$ leaf bound | [discrete-mathematics 5.3](../discrete-mathematics/lessons/05-03-trees-and-graph-coloring.md) |

**Deliberately skipped:** language-specific syntax; systems programming; clever
algorithm design ([algorithms](../algorithms/syllabus.md)); concurrency and memory
management ([operating-systems](../operating-systems/syllabus.md)).

## Pitfalls

### Tracing and control flow

- `x ← y` is an instruction, not an equation. After it, changing `y` does not change `x`. *([1.1](lessons/01-01-values-variables-and-control-flow.md))*
- The failures live at $n = 0$, $n = 1$, **ties**, and the last index — not in the middle. *([1.1](lessons/01-01-values-variables-and-control-flow.md))*
- The bound on a loop is a fact about what the **body** touches. A body reading `a[i+1]` must stop at $n-2$. *([1.1](lessons/01-01-values-variables-and-control-flow.md))*
- Fixed-width integers wrap: `(lo + hi) / 2` overflows, `lo + (hi - lo) / 2` does not. This was in Java's library for nine years. *([1.1](lessons/01-01-values-variables-and-control-flow.md), [4.1](lessons/04-01-searching-and-elementary-sorting.md))*
- Short-circuiting makes `i < n and a[i] > 0` safe and the reverse a crash. The guard comes first. *([1.1](lessons/01-01-values-variables-and-control-flow.md))*
- `0.1 + 0.2 == 0.3` is false. Never use a float as a loop counter. *([1.1](lessons/01-01-values-variables-and-control-flow.md))*

### Contracts and invariants

- **Initialization is where invariants fail**, because it is the only step that inspects the setup rather than the body. `max ← 0` is false for an all-negative array. *([1.2](lessons/01-02-functions-contracts-and-invariants.md), [1.4](lessons/01-04-big-o-counting-operations.md))*
- All three obligations are needed. Maintenance alone is satisfied by a loop that never runs and by one that never stops. *([1.2](lessons/01-02-functions-contracts-and-invariants.md))*
- Partial and total correctness are independent claims: an infinite loop satisfies **every** postcondition. *([1.2](lessons/01-02-functions-contracts-and-invariants.md))*
- A parameter holding a reference lets the callee mutate what the caller sees. "Mutates its argument" is a postcondition. *([1.2](lessons/01-02-functions-contracts-and-invariants.md))*
- A precondition you cannot check is a comment. If it matters, make it assertable. *([1.2](lessons/01-02-functions-contracts-and-invariants.md))*

### Recursion

- A base case that is never *reached* is the same bug as no base case: `f(n) = f(n-2)` with base 0 loops forever on odd $n$. *([1.3](lessons/01-03-recursion-and-the-call-stack.md))*
- **Time and space are different numbers.** `fib(40)`: 331 million calls, depth 40. *([1.3](lessons/01-03-recursion-and-the-call-stack.md))*
- A "correct, linear-time" recursion with linear **depth** crashes. Python gives up at 1,000 frames. *([1.3](lessons/01-03-recursion-and-the-call-stack.md))*
- Raising the recursion limit relocates the failure into the OS stack, where it is a segfault. Change the algorithm. *([1.3](lessons/01-03-recursion-and-the-call-stack.md))*
- `return n * f(n-1)` is **not** a tail call — the multiplication is pending, so the frame must be kept. *([1.3](lessons/01-03-recursion-and-the-call-stack.md))*
- **Memoization fixes redundant work, not unbounded depth** — the cache fills on the way back up, and the stack is consumed on the way down. *([1.3](lessons/01-03-recursion-and-the-call-stack.md))*

### Counting cost

- $O$ is an upper bound only. "Binary search is $O(n^2)$" is true and useless — say $\Theta$. *([1.4](lessons/01-04-big-o-counting-operations.md))*
- "One loop, therefore linear" holds only if the body is $\Theta(1)$. `for x in list: if x in other_list` is $\Theta(n^2)$ — **the cost hides in the library call**. *([1.4](lessons/01-04-big-o-counting-operations.md))*
- A running time is a function of the **input**, not of $n$ alone. Always say which case. *([1.4](lessons/01-04-big-o-counting-operations.md))*
- **Halving a quadratic looks like progress and is not.** Moving down a row of the growth table is the win. *([1.4](lessons/01-04-big-o-counting-operations.md))*
- Constants decide small $n$: insertion sort beats merge sort below ≈16–32, which is why real sorts are hybrids. *([1.4](lessons/01-04-big-o-counting-operations.md), [4.1](lessons/04-01-searching-and-elementary-sorting.md))*

### Linear structures

- An ADT's substitutability preserves **correctness, not performance**. The swap that keeps every test green can multiply runtime by $n$. *([2.1](lessons/02-01-abstract-data-types-and-interfaces.md))*
- **Amortized $\Theta(1)$ is not "no operation is slow."** The reallocating append copies the whole array, and that worst case grows with $n$. Pre-allocate if tail latency binds. *([2.2](lessons/02-02-arrays-and-dynamic-arrays.md))*
- Growing by a fixed amount is $\Theta(n^2)$ for **any** amount, including 1000. Factor, not amount. *([2.2](lessons/02-02-arrays-and-dynamic-arrays.md))*
- Deleting in a loop is $\Theta(n^2)$; compact with two pointers in one pass. Mutating a container while indexing it also **skips elements**. *([2.2](lessons/02-02-arrays-and-dynamic-arrays.md))*
- "$\Theta(1)$ insertion and deletion" needs the qualifier **given a reference to the node**. By index it is $\Theta(n)$, exactly like an array. *([2.3](lessons/02-03-linked-lists.md))*
- Deleting needs the **predecessor** — $\Theta(n)$ singly linked even when you hold the node. *([2.3](lessons/02-03-linked-lists.md))*
- Pointer-write order is load-bearing: `x.next ← b.next` **before** `b.next ← x`, or the rest of the list is orphaned. *([2.3](lessons/02-03-linked-lists.md))*
- `for i in 0..n-1: get(i)` on a linked list is $\Theta(n^2)$. Iterate with a cursor. *([2.3](lessons/02-03-linked-lists.md))*
- A naive array queue is $\Theta(n)$ per dequeue and **degrades exactly when the backlog grows**. Use a ring buffer. *([2.4](lessons/02-04-stacks-and-queues.md))*
- `head == tail` means empty **or** full. Carry a `size` counter or waste a slot. *([2.4](lessons/02-04-stacks-and-queues.md))*

### Hashing

- $\Theta(1)$ is **expected**, over the hash function's spreading — not worst case. The $\Theta(n)$ worst case is reachable. *([2.5](lessons/02-05-hash-tables.md))*
- Structured keys collide **by accident**: sequential ids modulo a bucket count sharing a factor with the stride, aligned pointers, identity hashes. *([2.5](lessons/02-05-hash-tables.md))*
- **Never mutate a key while it is in the table** — it is then present, unfindable and undeleteable. *([2.5](lessons/02-05-hash-tables.md))*
- A hash table supports **no** ordered operation. Those are absent, not slow. *([2.5](lessons/02-05-hash-tables.md))*
- Iteration order can change on resize and is randomized per process in some languages. Depending on it is a reproducibility bug. *([2.5](lessons/02-05-hash-tables.md))*
- A fixed public hash function lets an adversary precompute colliding keys — the hash-flooding DoS. The fix is a per-process **random seed**. *([2.5](lessons/02-05-hash-tables.md))*

### Trees and heaps

- The BST property is about **entire subtrees**, not immediate children. The weaker version silently returns wrong answers. *([3.1](lessons/03-01-binary-trees-and-binary-search-trees.md))*
- BST operations are $\Theta(\text{height})$, **not** $\Theta(\log n)$ — the logarithm is a property of the shape. *([3.1](lessons/03-01-binary-trees-and-binary-search-trees.md))*
- **Sorted insertion is the common case, not the unlucky one** — loading by id, replaying by timestamp — and it produces a linked list with extra pointers. *([3.1](lessons/03-01-binary-trees-and-binary-search-trees.md))*
- Balancing gives $O(\log n)$, not optimal: AVL is up to 44% taller than perfect, red-black twice. A stricter invariant costs more to maintain. *([3.2](lessons/03-02-balanced-trees-the-idea.md))*
- $\log_2$ versus $\log_{200}$ is a factor of 7.6 in **levels**, and when a level costs a disk seek that constant is the whole story. *([3.2](lessons/03-02-balanced-trees-the-idea.md))*
- A heap is **not sorted** — reading the array left to right gives nonsense. Only the root is guaranteed. *([3.3](lessons/03-03-heaps-and-priority-queues.md))*
- Searching a heap is $\Theta(n)$: with no left-right ordering there is no subtree you may discard. *([3.3](lessons/03-03-heaps-and-priority-queues.md))*
- `build-heap` bottom-up is $\Theta(n)$, not $\Theta(n\log n)$ — half the nodes are leaves and cost nothing. *([3.3](lessons/03-03-heaps-and-priority-queues.md))*

### Searching, sorting, graphs, search

- Binary search on unsorted data returns **wrong answers silently** rather than failing. *([4.1](lessons/04-01-searching-and-elementary-sorting.md))*
- Two $\Theta(n^2)$ sorts are not interchangeable: insertion sort is $\Theta(n)$ on sorted input, selection sort is never. *([4.1](lessons/04-01-searching-and-elementary-sorting.md))*
- Sorting to enable binary search pays off only past roughly $n$ queries. For a handful, just scan. *([4.1](lessons/04-01-searching-and-elementary-sorting.md))*
- $\Omega(n\log n)$ constrains **comparison** sorts only — the bound is about a model, and models have doors. *([4.1](lessons/04-01-searching-and-elementary-sorting.md))*
- BFS gives shortest **hop counts**, not shortest weighted paths. With weights it solves a different problem. *([4.2](lessons/04-02-graphs-representations-and-traversal.md))*
- DFS order and depth carry **no distance meaning**. *([4.2](lessons/04-02-graphs-representations-and-traversal.md))*
- Without the `discovered` mark, a cycle makes the traversal run forever. *([4.2](lessons/04-02-graphs-representations-and-traversal.md))*
- Two vertex states are not enough for cycle detection — you need **white / grey / black**, and only grey means a cycle. *([4.2](lessons/04-02-graphs-representations-and-traversal.md))*
- Recursive DFS overflows on large graphs; its depth is the longest path, up to $n$. *([4.2](lessons/04-02-graphs-representations-and-traversal.md), [1.3](lessons/01-03-recursion-and-the-call-stack.md))*
- Omitting the **un-choose** corrupts sibling branches and the search explores a space that is not the problem. *([4.3](lessons/04-03-recursion-revisited-backtracking.md))*
- Pruning changes the **base** of the exponential, never the class. Check by measuring the ratio between successive sizes. *([4.3](lessons/04-03-recursion-revisited-backtracking.md))*
- **Doubling the timeout on an exponential search buys less than one extra level.** *([4.3](lessons/04-03-recursion-revisited-backtracking.md))*
- A timeout means "I did not finish", **not** "no solution exists". Degrade to a weaker guarantee, never to a false one. *([4.3](lessons/04-03-recursion-revisited-backtracking.md))*
