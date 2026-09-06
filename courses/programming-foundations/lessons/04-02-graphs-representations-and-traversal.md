# Programming & Data Structures · Lesson 4.2: Graphs — representations and traversal

> ⏱ ~15 min · Module 4: Graphs, sorting, and searching · Builds on: [4.1 (searching and elementary sorting)](04-01-searching-and-elementary-sorting.md) · Unlocks: 4.3 (recursion revisited: backtracking)

## Why this matters

Every structure so far has imposed a shape on your data: a line, a tree, a bucket. A **graph** imposes none — it is just things and connections between them — which makes it the most general structure in the course and the one most real problems turn out to be.

Road networks, social connections, package dependencies, web links, circuit nets, protein interactions, file-system references, state machines: all graphs. Once you can represent one and walk it, a startling number of problems become "traverse this and see what you reach."

The judgement content is two choices. **How to store it** — adjacency list or matrix — which is a $\Theta(n+m)$ against $\Theta(n^2)$ decision that on a real sparse graph is a factor of tens of thousands. And **how to walk it** — which is the same loop from [Lesson 2.4](02-04-stacks-and-queues.md) with a queue or a stack in the middle, giving breadth-first or depth-first search. Swapping the container swaps the algorithm and its guarantees, which is the cleanest demonstration in this course that the data structure *is* the algorithm.

## The idea

**A graph is vertices and edges.** $G = (V, E)$ with $n = |V|$ and $m = |E|$. Edges may be **directed** (one-way: a dependency, a link) or **undirected** (mutual: a friendship, a road). A vertex's **degree** is how many edges touch it; a **path** is a sequence of vertices joined by edges; the graph is **connected** if every vertex is reachable from every other.

**[Two ways to store it](../reference.md#graph-adjacency-list-vs-matrix).**

An **adjacency list** keeps, for each vertex, the list of its neighbours. Space $\Theta(n + m)$; iterating one vertex's neighbours costs $\Theta(\deg v)$; asking "is $(u,v)$ an edge?" costs $\Theta(\deg u)$.

An **adjacency matrix** is an $n \times n$ table of bits, one per possible pair. Space $\Theta(n^2)$; the edge query is $\Theta(1)$; iterating a vertex's neighbours costs $\Theta(n)$ because you must check every entry in the row, including the zeros.

**Real graphs are sparse.** A road network, a social graph, a dependency graph — all have $m$ close to a constant times $n$, not $n^2$. At $n = 10^5$ and $m = 2\times10^5$ the list holds $5\times10^5$ entries and the matrix holds $10^{10}$ bits, 1.25 GB, almost all zeros. **The adjacency list is the default and the matrix is the exception**, reserved for dense graphs or for workloads dominated by edge-existence queries.

**[One traversal, two disciplines](../reference.md#bfs-and-dfs).** Both walks are the same loop:

```
mark s discovered;  put s in the BAG
while the BAG is not empty:
    u <- take one vertex out of the BAG
    for each neighbour v of u:
        if v is not discovered:
            mark v discovered;  parent[v] <- u;  put v in the BAG
```

Make the bag a **queue** and you get BFS; make it a **stack** and you get DFS. That is the entire difference, and it changes what the walk tells you:

- **BFS** takes the oldest vertex first, so it finishes everything one hop away before touching anything two hops away. Its discovery order *is* distance order, and the parent pointers form a **shortest-path tree in hops**.
- **DFS** takes the newest first, so it plunges down one path as far as it goes before backing up. It makes no distance claim at all — but it naturally exposes structure (cycles, connectivity, orderings) that BFS does not.

The `discovered` mark is what stops the walk looping forever on a cycle, and it is why every vertex enters the bag at most once.

## The formal version

**Representations, compared.**

| | adjacency list | adjacency matrix |
|---|---|---|
| space | $\Theta(n + m)$ | $\Theta(n^2)$ |
| is $(u,v)$ an edge? | $\Theta(\deg u)$ | $\Theta(1)$ |
| iterate $u$'s neighbours | $\Theta(\deg u)$ | $\Theta(n)$ |
| full traversal | $\Theta(n + m)$ | $\Theta(n^2)$ |

At $n = 10^5$, $m = 2\times10^5$: traversal is $5\times10^5$ steps with lists and $10^{10}$ with a matrix — **20,000× more work for the same algorithm**. At $n = 10^4$ with a complete graph ($m \approx 5\times10^7$) the two are comparable, and the matrix's contiguous bits win on constants. *(Machine-verified.)*

**Traversal cost.** Each vertex is discovered once and each adjacency list is scanned once, so both BFS and DFS run in

$$\Theta(n + m)$$

with adjacency lists — linear in the size of the graph, which is the best possible for anything that must look at the whole thing.

**BFS gives shortest hop-counts.** Because the queue holds vertices of at most two consecutive distances at a time, vertices leave it in non-decreasing distance order, and each is assigned `dist[u] + 1` by a neighbour already at its true distance. So `dist[v]` is the least number of edges from $s$ to $v$.

The load-bearing word is **hops**. On a weighted graph BFS is answering a different question, and will happily return a 2-edge path of weight 100 over a 3-edge path of weight 3. Weights need Dijkstra ([`algorithms` 3.3](../../algorithms/lessons/03-03-dijkstras-shortest-paths.md)), which is this loop with a *priority* queue.

**DFS depth is not distance.** A vertex one edge from the source can sit arbitrarily deep in the DFS tree, because DFS commits to a path rather than exploring by rings. DFS's value is elsewhere: reachability, connected components, cycle detection, and topological ordering all fall out of the order in which it finishes vertices. (The timestamp and edge-classification machinery that formalizes this is [`algorithms` 3.1](../../algorithms/lessons/03-01-graph-search-bfs-and-dfs.md)'s.)

**Recursive DFS.** DFS is naturally recursive — the call stack *is* the bag:

```
DFS(u):
    mark u discovered
    for each neighbour v of u:
        if v not discovered:  DFS(v)
```

which means its stack depth is the length of the longest path explored, up to $n$. On a graph of $10^6$ vertices that overflows ([Lesson 1.3](01-03-recursion-and-the-call-stack.md)); the explicit-stack version has the same cost and no depth limit.

**What each traversal is for.**

| question | use |
|---|---|
| fewest hops from $s$ to $t$ | BFS |
| shortest path with weights | Dijkstra (a priority queue) |
| is $t$ reachable from $s$? | either |
| connected components | either, restarted at each unvisited vertex |
| does the graph contain a cycle? | DFS |
| a valid ordering of dependencies | DFS finish order, or repeated in-degree-zero removal |

## Picture

![A seven-vertex undirected graph with vertices A through G drawn as circles joined by nine edges. To its right, the adjacency list gives A maps to B and C, B to A C and D, C to A B and E, D to B E and F, E to C D and G, F to D and G, and G to E and F. Beside it, a seven-by-seven adjacency matrix of ones and dots shows the same information. Below a dashed divider, two rows of circles give the traversal orders from A with neighbours scanned alphabetically: BFS in blue visits A, B, C, D, E, F, G with distances 0, 1, 1, 2, 2, 3, 3 written underneath; DFS in red visits A, B, C, E, D, F, G. A caption states that it is the same graph and the same loop, the only difference being whether the bag is a queue or a stack, that BFS's numbers are hop-distances from A, and that DFS's order records where the search wandered and carries no distance meaning.](assets/04-02-fig1.svg)

**The two panels on the right hold identical information at wildly different prices.** Seven vertices and nine edges: the list holds $n + 2m = 25$ entries; the matrix holds $n^2 = 49$ cells, of which 18 are ones and 31 are dots. At this size the matrix is merely wasteful. At $n = 10^5$ with the same edge density it is 1.25 GB of almost entirely zeros, and the traversal that reads it is 20,000× slower.

**Now compare the two traversal rows — same graph, same starting vertex, same alphabetical tie-breaking.** BFS goes $A, B, C, D, E, F, G$; DFS goes $A, B, C, E, D, F, G$. Nothing changed except the container.

**BFS's numbers are the point.** $d = 0, 1, 1, 2, 2, 3, 3$ — the walk discovers all of distance 1 before any of distance 2, so discovery order is distance order and the numbers come out for free. Reading them off: $G$ is 3 hops from $A$, and there is no shorter route.

**DFS's row has no numbers, and that is not an omission.** DFS reached $E$ third, via $A \to B \to C \to E$, and $E$ is 2 hops from $A$; it reached $D$ fifth even though $D$ is also 2 hops away. **The position in a DFS order tells you nothing about distance** — it records the path the search happened to commit to. What DFS gives instead is that when it finishes a vertex, everything reachable from that vertex has been finished too, which is the property [`algorithms` 3.2](../../algorithms/lessons/03-02-topological-sort-and-strongly-connected-components.md) turns into topological sort and component detection.

## Worked examples

**Example 1 (mechanical): trace both traversals.** The figure's graph, adjacency lists alphabetical, starting at $A$.

**BFS**, queue shown after each step:

| step | dequeue | discovers | queue after |
|---|---|---|---|
| 1 | $A$ | $B$ (d=1), $C$ (d=1) | $B, C$ |
| 2 | $B$ | $D$ (d=2) | $C, D$ |
| 3 | $C$ | $E$ (d=2) | $D, E$ |
| 4 | $D$ | $F$ (d=3) | $E, F$ |
| 5 | $E$ | $G$ (d=3) | $F, G$ |
| 6 | $F$ | — | $G$ |
| 7 | $G$ | — | empty |

Order $A, B, C, D, E, F, G$; distances $0, 1, 1, 2, 2, 3, 3$. Note the queue never holds vertices more than one distance apart — that is the invariant behind the shortest-path guarantee.

**DFS**, recursively: $A$ → first neighbour $B$ → first undiscovered neighbour of $B$ is $C$ → $C$'s undiscovered neighbour is $E$ → $E$'s are $D$ then $G$; take $D$ → $D$'s undiscovered neighbour is $F$ → $F$'s is $G$ → $G$ has none left, unwind.

Order $A, B, C, E, D, F, G$. *(Machine-verified.)*

**$D$ is 2 hops from $A$ and DFS reached it fifth, at depth 4** ($A \to B \to C \to E \to D$). That is the concrete form of "DFS depth is not distance".

**Example 2 (why you'd care): the representation decided the feasibility.** A social graph with $n = 10^5$ users and $m = 2\times10^5$ friendships. Compute "friends of friends" for one user, and check whether the graph is connected.

| | adjacency list | adjacency matrix |
|---|---|---|
| memory | $\approx 5\times10^5$ entries, 4 MB | $10^{10}$ bits, **1.25 GB** |
| neighbours of one user | $\Theta(\deg v) \approx 4$ | $\Theta(n) = 10^5$ |
| full traversal (connectivity) | $\Theta(n+m) = 5\times10^5$ | $\Theta(n^2) = 10^{10}$ |

The connectivity check is milliseconds with lists and **tens of seconds** with a matrix, running identical code. And the "friends of friends" query — reading one user's four neighbours — costs 4 operations against 100,000, because the matrix has no way to find the ones without scanning past all the zeros.

**When the matrix is right:** dense graphs where $m \approx n^2$ anyway (a distance matrix between every pair of cities), or workloads dominated by "is $(u,v)$ an edge?" where $\Theta(1)$ beats scanning a list — a game board's adjacency, a small state machine's transitions. The rule of thumb: **sparse graph, list; dense graph or edge-query-heavy, matrix** — and almost every graph that arises from the real world is sparse.

## Watch out

- **You might think** BFS finds shortest paths — **but actually** it finds shortest **hop counts**. With weighted edges it solves a different problem and returns heavier paths; you need a priority queue for that.
- **You might think** DFS order says something about distance — **but actually** a vertex one hop away can appear anywhere in a DFS order and at any depth. DFS gives structure, not geometry.
- **You might think** the matrix is a reasonable default — **but actually** it is $\Theta(n^2)$ space and makes every traversal $\Theta(n^2)$. On sparse graphs that is 20,000× more work and a gigabyte of zeros.
- **You might think** the `discovered` mark is an optimization — **but actually** without it any cycle makes the traversal run forever. It is what makes the walk terminate, and it is why each vertex enters the bag once.
- **You might think** recursive DFS is fine on any graph — **but actually** its stack depth is the longest path explored, up to $n$, so it overflows on large graphs. Use an explicit stack past a few thousand vertices.
- **You might think** one traversal from one vertex visits everything — **but actually** it visits only the vertices reachable from the start. Finding all connected components means restarting at every still-undiscovered vertex.
- **You might think** an undirected edge is one entry — **but actually** an adjacency list stores it twice, once in each endpoint's list, so the space is $n + 2m$ and $\sum_v \deg v = 2m$.

## One-liner

> Store the edges you have rather than the pairs you might have, then run one loop whose only free choice is the container — a queue gives you distances, a stack gives you structure.

## Problems

**P1 (🟢)** An undirected graph on $\{P, Q, R, S, T\}$ with edges $PQ$, $PR$, $QS$, $RS$, $ST$.

(a) Give the adjacency list, with neighbours alphabetical. (b) Give the adjacency matrix. (c) Give the BFS order and distances from $P$. (d) Give the DFS order from $P$, and say at what depth $T$ is reached in each traversal.

**P2 (🟡)** A dependency graph has $n = 5\times10^4$ packages and $m = 1.2\times10^5$ dependency edges.

(a) Give the memory for an adjacency list and an adjacency matrix, in entries and in bytes. (b) Give the cost of "which packages does X depend on directly?" under each. (c) Give the cost of a full traversal under each. (d) A colleague argues the matrix is better because "checking whether A depends on B is $\Theta(1)$ instead of scanning a list." Under what workload is that argument right, and is this that workload?

**P3 (🔴)** A build tool must detect circular dependencies among $10^6$ modules with $3\times10^6$ edges and report one cycle if it exists.

(a) Which traversal, and what is its cost? (b) The engineer writes it recursively and it crashes on the real graph. Diagnose, and give the fix with its cost. (c) They then propose "if we ever reach a module we've already visited, report a cycle." Give a three-module graph on which this reports a cycle that does not exist, and state the correct test. (d) A second engineer proposes detecting cycles with BFS instead. Say whether that can work, and what BFS would have to track.

<details>
<summary>Solutions</summary>

**P1** (a) Edges $PQ, PR, QS, RS, ST$; each undirected edge appears in both endpoints' lists:

$$P: [Q, R], \quad Q: [P, S], \quad R: [P, S], \quad S: [Q, R, T], \quad T: [S].$$

Check: $\sum_v \deg v = 2 + 2 + 2 + 3 + 1 = 10 = 2m$ ✓ with $m = 5$.

(b) Rows and columns in order $P, Q, R, S, T$:

| | $P$ | $Q$ | $R$ | $S$ | $T$ |
|---|---|---|---|---|---|
| $P$ | · | 1 | 1 | · | · |
| $Q$ | 1 | · | · | 1 | · |
| $R$ | 1 | · | · | 1 | · |
| $S$ | · | 1 | 1 | · | 1 |
| $T$ | · | · | · | 1 | · |

Symmetric about the diagonal, as every undirected graph's matrix is.

(c) **BFS from $P$:** dequeue $P$, discover $Q$ and $R$ at distance 1; dequeue $Q$, discover $S$ at distance 2; dequeue $R$ (nothing new); dequeue $S$, discover $T$ at distance 3.

Order $P, Q, R, S, T$; distances $0, 1, 1, 2, 3$.

(d) **DFS from $P$:** visit $P$; first neighbour $Q$; $Q$'s first undiscovered neighbour is $S$; $S$'s first undiscovered is $R$ (since $Q$ is discovered); $R$'s neighbours $P$ and $S$ are both discovered, so unwind to $S$; $S$'s next undiscovered is $T$.

Order $P, Q, S, R, T$.

**Depth of $T$:** in BFS's tree, $T$ is at depth 3 ($P \to Q \to S \to T$), which equals its true distance. In DFS's tree it is also at depth 3 here ($P \to Q \to S \to T$) — the two coincide on this small graph, but note that $R$ sits at depth 3 in the DFS tree while its true distance is 1. **The DFS depth of $R$ overstates its distance by a factor of 3**, which is the general phenomenon; $T$ happening to agree is a coincidence of this graph.

**P2** (a) $n = 5\times10^4$, $m = 1.2\times10^5$ (directed, so each edge stored once):

| | entries | bytes (4-byte ids / 1 bit per cell) |
|---|---|---|
| adjacency list | $n + m = 1.7\times10^5$ | $\approx 680$ KB |
| adjacency matrix | $n^2 = 2.5\times10^9$ | $2.5\times10^9$ bits $= \mathbf{313}$ **MB** |

A factor of about **450×** in memory, and the matrix is 99.995% zeros (density $m/n^2 = 4.8\times10^{-5}$).

(b) "Direct dependencies of X":

- **List:** $\Theta(\deg X) \approx m/n = 2.4$ entries — read the list, done.
- **Matrix:** $\Theta(n) = 5\times10^4$ — scan X's entire row, checking every one of the 50,000 cells to find the two or three ones.

About **20,000× more work** for the same answer.

(c) Full traversal:

- **List:** $\Theta(n + m) = 1.7\times10^5$ steps.
- **Matrix:** $\Theta(n^2) = 2.5\times10^9$ steps.

Roughly **15,000×**, milliseconds against seconds, running identical traversal code.

(d) **The argument is right when edge-existence queries dominate the workload and the graph is small enough that $\Theta(n^2)$ memory is affordable.**

Concretely, if the tool answered $q$ queries of the form "does A depend directly on B?" and did nothing else, the totals are $\Theta(q \cdot \deg)$ for the list against $\Theta(q)$ for the matrix — and with a mean degree of 2.4 that is a factor of about 2.4, not a factor of 20,000. **Even in its best case the matrix's advantage here is small**, because the lists are short.

**This is not that workload.** A package manager's operations are traversals — resolve the transitive closure of a dependency, detect cycles, compute a build order — every one of which iterates neighbours rather than testing specific pairs. Those are exactly the operations the matrix is worst at, by four orders of magnitude, and it costs 313 MB for the privilege.

There is also a cheap way to get both: keep the adjacency list **and** a hash set of edges. That gives $\Theta(1)$ expected edge queries and $\Theta(\deg v)$ neighbour iteration for $\Theta(n + m)$ memory — the matrix's one advantage without its cost. The matrix earns its place only on genuinely dense graphs where $n^2$ memory was going to be spent anyway.

**P3** (a) **DFS.** A cycle is a path that returns to a vertex still on the current exploration path, which is precisely what DFS tracks and BFS does not. Cost with adjacency lists:

$$\Theta(n + m) = 10^6 + 3\times10^6 = \mathbf{4\times10^6} \text{ steps.}$$

Reporting the cycle itself is free: when the offending edge is found, the vertices currently on the recursion stack from the target down to the current vertex *are* the cycle.

(b) **The recursion overflowed the stack.** DFS's recursion depth is the length of the longest path it explores, which on a dependency graph of $10^6$ modules can approach $10^6$ frames. Language limits are around $10^3$ (Python) to $10^4$–$10^5$ (native stacks), so it fails one to three orders of magnitude before the graph is exhausted.

**The fix is an explicit stack:**

```
push (s, 0) onto the stack           # vertex, index into its adjacency list
while the stack is not empty:
    (u, i) <- top of stack
    if i < deg(u):
        advance the top entry's index to i+1
        v <- u's i-th neighbour
        if v is grey:  report the cycle
        if v is white: mark v grey;  push (v, 0)
    else:
        mark u black;  pop
```

**Cost unchanged at $\Theta(n + m)$** — the same $4\times10^6$ steps. What changes is that the stack lives on the heap, where $10^6$ frames is tens of megabytes rather than a fatal overflow. (Note the entries carry an index into the adjacency list; this is what lets the loop resume where it left off, and it is exactly what the language's call stack was storing implicitly.)

(c) **A DAG the rule wrongly rejects:**

$$A \to B, \qquad A \to C, \qquad B \to C.$$

DFS from $A$: visit $B$, from $B$ visit $C$, finish $C$, finish $B$, return to $A$, then scan $A \to C$ — $C$ has "already been visited", so the rule reports a cycle. **There is none**: this is a diamond, and $C$ simply has two predecessors.

**The correct test needs three vertex states, not two:**

- **white** — undiscovered;
- **grey** — discovered, still on the current exploration path;
- **black** — finished, along with everything reachable from it.

Report a cycle **only** when an edge leads to a **grey** vertex, because grey means "still on the stack above me", so the stack path from that vertex down to the current one plus this edge closes a directed cycle. Edges into black vertices are harmless — they point into a region already fully explored and exited.

Collapsing grey and black into one "visited" flag is the classic bug, and it fires on every diamond, which real dependency graphs are full of.

(d) **BFS cannot do it by patching the visited test** — for exactly the same reason as (c). On $A \to B$, $A \to C$, $B \to C$, BFS discovers $B$ and $C$ from $A$, then dequeues $B$ and finds $C$ already discovered, reporting a cycle in a DAG.

More fundamentally, **BFS has no notion of "currently open ancestor"**. There is no recursion stack, so there is nothing corresponding to grey: a discovered vertex might be an ancestor, a sibling, or in an unrelated part of the graph, and BFS's queue does not distinguish them.

**BFS can detect cycles, but by counting rather than by marking** — Kahn's algorithm:

```
compute in-degree of every vertex
enqueue every vertex with in-degree 0
while the queue is not empty:
    u <- dequeue;  emit u;  count <- count + 1
    for each edge u -> v:  indeg[v] <- indeg[v] - 1
                           if indeg[v] = 0: enqueue v
if count < n:  the remaining vertices contain a cycle
```

**What it must track: an in-degree counter per vertex**, decremented as predecessors are emitted. Cost $\Theta(n + m)$, the same as DFS. If fewer than $n$ vertices are ever emitted, the leftovers all have a surviving predecessor, which on a finite graph forces a cycle.

This is the algorithm real build tools use, and its advantage is not cycle detection but **parallelism**: at any moment the queue holds the entire set of ready-to-build modules, so $k$ workers can each take one. DFS's stack, by design, keeps only one path's worth of work visible.

</details>

## Flashback

**From Lesson 4.1 (Searching and elementary sorting):** Binary search on a sorted array of $n$ elements.

(a) State the loop invariant. (b) Give the number of probes at $n = 10^6$ and compare with a linear scan. (c) Give the overflow bug in the midpoint calculation and its fix. (d) Insertion sort and selection sort are both $\Theta(n^2)$. Give the one property that distinguishes them.

<details>
<summary>Solution</summary>

(a) **If `x` occurs in the array, its index lies in $[lo, hi]$.** Initialization sets $[0, n-1]$, the whole array. Maintenance discards only the half that sortedness proves cannot hold `x`. Termination leaves $lo > hi$, an empty range, so `x` is absent — the invariant plus the exit condition gives the postcondition.

(b) $\lceil\log_2(10^6+1)\rceil = \mathbf{20}$ probes, against an average of $5\times10^5$ for a linear scan — a factor of 25,000.

(c) `mid <- (lo + hi) / 2` overflows when $lo + hi$ exceeds the integer range, producing a negative index. The fix is

$$\texttt{mid} \leftarrow lo + (hi - lo)/2,$$

which is algebraically identical and never forms the large intermediate sum. This bug was in Java's standard library for nine years.

(d) **Adaptivity.** Insertion sort's inner loop stops as soon as the element is in place, so its cost tracks the number of inversions: $n-1$ comparisons on sorted input, $n(n-1)/2$ on reversed. Selection sort always scans the entire remaining tail, so it makes $n(n-1)/2$ comparisons on **every** input including an already-sorted one.

The consequence is that real library sorts embed insertion sort for small subarrays, and Timsort exploits pre-existing runs — a property invisible in the shared $\Theta(n^2)$ label.

</details>

## Connections

- **Backward:** the traversal loop is [Lesson 2.4's](02-04-stacks-and-queues.md) stack and queue deciding an algorithm, in the clearest case in the course; the adjacency list is a list of [Lesson 2.3's](02-03-linked-lists.md) lists; the matrix is [Lesson 2.2's](02-02-arrays-and-dynamic-arrays.md) address arithmetic in two dimensions; recursive DFS is [Lesson 1.3's](01-03-recursion-and-the-call-stack.md) call stack, with the same depth limit.
- **Forward:** [4.3](04-03-recursion-revisited-backtracking.md) is DFS over a graph that is never built — the vertices are partial solutions and the edges are choices, generated on demand because the graph is exponentially large.
- **Sideways:** [`algorithms` 3.1](../../algorithms/lessons/03-01-graph-search-bfs-and-dfs.md) adds DFS timestamps and edge classification, and [3.2](../../algorithms/lessons/03-02-topological-sort-and-strongly-connected-components.md) turns finish order into topological sort and strongly connected components. Replacing the queue with a priority queue gives Dijkstra ([`algorithms` 3.3](../../algorithms/lessons/03-03-dijkstras-shortest-paths.md)). Routing tables in [`computer-networks`](../../computer-networks/syllabus.md) are shortest-path computations on a graph of routers, and the graph vocabulary itself is [discrete-mathematics 5.3](../../discrete-mathematics/lessons/05-03-trees-and-graph-coloring.md)'s.
