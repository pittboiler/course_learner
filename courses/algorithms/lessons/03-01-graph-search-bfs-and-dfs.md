# Algorithms · Lesson 3.1: Graph search — BFS & DFS

> ⏱ ~15 min · Module 3: Graph algorithms · Builds on: [2.6 (DP on sequences)](02-06-dp-on-sequences-lcs-and-edit-distance.md) · Unlocks: 3.2 (topological sort & SCC)

## Why this matters

Almost every algorithm people actually run is a graph algorithm wearing a costume. A build system is a DAG. A social network, a road map, a dependency resolver, a garbage collector, a regex engine, a type checker — all graph traversal underneath.

Both traversals in this lesson visit every reachable vertex once and every edge once, so both cost $\Theta(n+m)$. They differ only in **which vertex they visit next**, and that single choice decides what each one can tell you. BFS learns distances. DFS learns structure — ancestry, cycles, and the ordering that the next two lessons are built on.

The judgement content is threefold, and all three recur for the rest of the course. First: **the cost of a traversal is set by the representation, not by the traversal** — the same BFS is $\Theta(n+m)$ or $\Theta(n^2)$ depending on how you stored the graph, and on a sparse graph that is a factor of thirty thousand. Second: BFS's shortest-path guarantee is about **hops**, and the most common bug in this area is quietly assuming it survives edge weights. Third: DFS's edge classification is the tool that turns "did it work?" into a proof, because *back edge* and *cycle* mean the same thing.

## The idea

Both traversals run the same loop:

```
SEARCH(s):
    mark s discovered;  put s in the BAG
    while BAG is not empty:
        u <- take one vertex out of the BAG
        for each edge u -> v:
            if v is not discovered:
                mark v discovered;  parent[v] <- u;  put v in the BAG
```

Make the bag a **queue** and you have BFS. Make it a **stack** and you have DFS. That is the whole difference.

**BFS spreads in rings.** Taking the oldest vertex first means you finish everything one hop away before you touch anything two hops away. So the order of discovery *is* distance order, and `parent` pointers form a tree whose depths are shortest hop-counts. This is the cheapest correct shortest-path algorithm there is — as long as every edge costs the same.

**DFS plunges.** Taking the newest vertex first means you follow one path as deep as it goes, then back up one step and try the next branch. What makes DFS powerful is not the order it visits things but the **two timestamps** it can record: $d[u]$ when $u$ is first discovered, $f[u]$ when its entire subtree is finished. Those intervals nest exactly like brackets, and that nesting is a complete picture of the [ancestry relation](../reference.md#discovery-and-finish-times-the-parenthesis-theorem) — which is what Lessons 3.2's topological sort and SCC decomposition both run on.

Given the DFS tree, every edge of the graph falls into one of [four classes](../reference.md#edge-classification-tree-back-forward-cross):

| class | goes to | tells you |
|---|---|---|
| **tree** | an undiscovered vertex | it built the forest |
| **back** | an ancestor (still open) | **a cycle** |
| **forward** | a proper descendant (already finished) | a shortcut down the tree |
| **cross** | neither — a finished vertex elsewhere | the two subtrees are separate |

Only one of those four rows is a theorem you will use over and over: **a directed graph has a cycle if and only if a DFS finds a back edge.**

## The formal version

Let $G=(V,E)$ with $n = |V|$, $m = |E|$.

**Representations.** An **adjacency list** stores, for each $u$, the list of its out-neighbours: $\Theta(n+m)$ space. An **adjacency matrix** stores an $n \times n$ array of bits: $\Theta(n^2)$ space.

| operation | adjacency list | adjacency matrix |
|---|---|---|
| is $(u,v)$ an edge? | $O(\deg u)$ | $O(1)$ |
| iterate $u$'s neighbours | $\Theta(\deg u)$ | $\Theta(n)$ |
| full traversal (BFS/DFS) | $\Theta(n+m)$ | $\Theta(n^2)$ |
| space | $\Theta(n+m)$ | $\Theta(n^2)$ |

**BFS correctness.** Let $\delta(s,v)$ be the least number of edges on any $s\to v$ path.

> **Theorem.** BFS from $s$ sets $\mathrm{dist}[v] = \delta(s,v)$ for every reachable $v$, and the parent pointers form a tree of shortest paths.

*Proof sketch.* Induct on $k$. The queue always holds vertices of at most two consecutive distances, $k$ and $k+1$, in that order — dequeuing a vertex at distance $k$ can only enqueue vertices at distance $k+1$, and never a smaller one, because a vertex at distance $k+1$ has some neighbour at distance $k$ which was dequeued first. So vertices leave the queue in non-decreasing distance order, and each is assigned $\mathrm{dist}[u]+1$ by a neighbour on a shortest path. $\blacksquare$

The load-bearing phrase is **"least number of edges."** BFS optimizes hop count. With weighted edges it will happily return a 2-hop path of weight 100 over a 3-hop path of weight 3 — that is not a bug, it is a different problem, and it is Lesson 3.3's.

**The parenthesis theorem.** For any two vertices $u,v$ in a DFS, exactly one of these holds:

$$[d_u, f_u] \cap [d_v, f_v] = \varnothing, \qquad [d_u, f_u] \subset [d_v, f_v], \qquad [d_v, f_v] \subset [d_u, f_u],$$

and containment is precisely descendancy: $u$ is a descendant of $v$ iff $[d_u,f_u] \subset [d_v,f_v]$. The intervals never partially overlap, because the recursion is a stack. This is why the timestamps are worth recording — one comparison of two integers answers "is $u$ inside $v$'s subtree?".

**Cost.** Both traversals mark each vertex once and scan each adjacency list once: $\Theta(n+m)$ with lists.

**Undirected graphs classify more simply.** An undirected DFS produces **only tree and back edges** — never forward, never cross. Reason: if $\{u,v\}$ were a cross edge explored from $u$, then $v$ was finished before $u$ was discovered; but the *same* undirected edge would have been available from $v$ while $v$ was open, so $u$ would have been discovered from $v$ first. Contradiction. The forward case collapses the same way.

## Picture

![A DFS forest for a seven-vertex directed graph. Vertex A is the root of a tree containing B, C, D, E and F; G is a second root. Tree edges are solid; a red back edge runs from D up to A, a blue forward edge from A down to D, and three grey cross edges run from C to D, from G to C and from G to F. Each vertex is labelled with its discovery and finish times. Below, a strip shows the BFS layers from A: distance 0 is A, distance 1 is B, C and D, distance 2 is E, distance 3 is F, and G is unreachable.](assets/03-01-fig1.svg)

The graph is $A\to B$, $A\to C$, $A\to D$, $B\to D$, $C\to D$, $C\to E$, $D\to A$, $E\to F$, $G\to C$, $G\to F$, with neighbours scanned alphabetically and roots tried in alphabetical order.

Three things to read off it.

**The same edge $A\to D$ is a tree edge for BFS and a forward edge for DFS.** BFS, standing at $A$, takes it immediately, so $D$ sits at distance 1. DFS reaches $D$ first through $B$, so by the time it gets back to consider $A\to D$, $D$ is already finished — the edge is a shortcut down a tree it did not build. **DFS tree depth is not distance:** $D$ is at depth 2 in the DFS tree and distance 1 in the graph.

**The back edge $D\to A$ is the cycle $A\to B\to D\to A$**, and it is the only edge in the picture that proves anything about cycles. Note $d_A = 1 < d_D = 3 < f_D = 4 < f_A = 12$: $D$'s interval nests inside $A$'s, which is exactly the parenthesis theorem saying $D$ is a descendant of $A$ — so an edge from $D$ to $A$ points at an ancestor.

**Cross edges always point left in time.** $C \to D$ has $f_D = 4 < d_C = 6$: $D$ was finished before $C$ was even discovered. That inequality is the mechanical test, and it is why classification costs $O(1)$ per edge once you have timestamps.

## Worked examples

**Example 1 (mechanical): classify every edge.** Run DFS on the graph above. Discovery order $A, B, D, C, E, F, G$; the timestamps are in the figure. Now classify each non-tree edge by comparing integers:

| edge | test | class |
|---|---|---|
| $D \to A$ | $A$ discovered ($d_A=1$), not yet finished when $D\to A$ is scanned | **back** |
| $A \to D$ | $D$ finished, and $d_A = 1 < d_D = 3$ | **forward** |
| $C \to D$ | $D$ finished, and $d_C = 6 > d_D = 3$ | **cross** |
| $G \to C$ | $C$ finished ($f_C = 11 < d_G = 13$) | **cross** |
| $G \to F$ | $F$ finished ($f_F = 9 < d_G = 13$) | **cross** |

One back edge exists, so the graph is cyclic ✓. Note that no vertex ever had to be re-examined: each edge is looked at once and classified by two comparisons.

**Example 2 (why you'd care): the representation is the whole cost.** A citation graph with $n = 100{,}000$ papers and $m = 200{,}000$ citations. You want to BFS from one paper.

| | adjacency list | adjacency matrix |
|---|---|---|
| traversal steps | $n + m = 300{,}000$ | $n^2 = 10^{10}$ |
| space | $\approx 2.4$ MB | $10^{10}$ bits $= 1.25$ GB |

The matrix version does **33,333× more work** and needs 500× the memory, running the identical algorithm. Nothing about the traversal changed; the inner loop `for each neighbour of u` became `for each of the n vertices, is it a neighbour?`.

The matrix is not always wrong. It wins on two axes: $O(1)$ edge-existence queries (the list needs a scan), and density — when $m = \Theta(n^2)$ the two agree asymptotically and the matrix's contiguous memory is often faster in practice. The rule of thumb ([full table](../reference.md#graph-representations)): **sparse graph, list; dense graph or lots of "is this an edge?" queries, matrix.** Real-world graphs are overwhelmingly sparse, which is why the list is the default.

## Watch out

- **You might think** BFS gives shortest paths — **but actually** it gives shortest *hop counts*. On a weighted graph BFS is simply solving a different problem, and it will return a heavy 2-edge path over a light 3-edge one. Use it only when every edge costs the same; otherwise Lesson 3.3.
- **You might think** the DFS tree's depth of $v$ is the distance to $v$ — **but actually** it can be arbitrarily larger, as $D$ shows above (depth 2, distance 1). DFS makes no distance claim at all; its output is ancestry, not geometry.
- **You might think** finding a back edge requires knowing you are in a cycle — **but actually** the test is purely local: while scanning $u$'s edges, $v$ is *discovered but not finished*. Two booleans. This is the entire cycle-detection algorithm, and it runs in $\Theta(n+m)$.
- **You might think** "already visited" is one state — **but actually** DFS needs **three**: undiscovered, discovered-but-open, finished. Collapsing the last two is the classic cycle-detection bug: it reports a cycle on every forward and cross edge, so a DAG like $A\to B$, $A\to C$, $B\to C$ is wrongly called cyclic.

## One-liner

> Same loop, different bag: a queue gives you distances, a stack gives you ancestry — and the timestamps DFS leaves behind are what the next two lessons compute with.

## Problems

**P1 (🟢)** For the digraph $S\to A$, $S\to B$, $A\to C$, $B\to A$, $B\to D$, $C\to E$, $D\to C$, $D\to E$, $E\to B$, $F\to D$, $F\to E$ (neighbours scanned alphabetically, roots tried in the order $S, A, B, C, D, E, F$):

(a) Give the BFS layers from $S$. (b) Give the DFS discovery and finish times. (c) Classify every non-tree edge. (d) Is the graph acyclic? Justify from your answer to (c), not by inspection.

**P2 (🟡)** A colleague needs single-source shortest paths on a road network with $n = 100{,}000$ junctions and $m = 200{,}000$ roads, where each road has an integer length. They propose: *"Just replace every road of length $w$ with a chain of $w$ unit-length edges, then run BFS — it's simpler than Dijkstra and BFS is linear."*

(a) Is the result correct? (b) Give the size $n', m'$ of the subdivided graph in terms of $n$, $m$ and the maximum length $W$. (c) Compare the cost against Dijkstra's $O((n+m)\log n)$ for $W = 10$ and for $W = 10^6$ (road lengths in millimetres). (d) Name the phenomenon this is an instance of, and the earlier lesson where you met it.

**P3 (🔴)** A build tool must reject circular dependencies. An engineer writes: *"DFS the dependency graph; if we ever reach a vertex we've already visited, report a cycle."*

(a) Give a three-vertex dependency graph on which this reports a cycle that does not exist. (b) State the fix precisely, in terms of vertex states. (c) The engineer's next version instead runs, from every vertex $u$, a fresh DFS looking for a path back to $u$. It is correct. Give its running time and compare it to the fix in (b) on the $n = 100{,}000$, $m = 200{,}000$ graph. (d) A third engineer proposes detecting cycles with BFS instead: "if BFS ever encounters an already-discovered vertex, there's a cycle." Decide whether this works, and say what BFS would need to record to make a correct test.

<details>
<summary>Solutions</summary>

**P1** Adjacency lists: $S{:}[A,B]$, $A{:}[C]$, $B{:}[A,D]$, $C{:}[E]$, $D{:}[C,E]$, $E{:}[B]$, $F{:}[D,E]$.

(a) **BFS from $S$:**

| distance | vertices |
|---|---|
| 0 | $S$ |
| 1 | $A, B$ |
| 2 | $C, D$ |
| 3 | $E$ |

$F$ is unreachable from $S$ (it has no in-edges).

(b) **DFS.** Start at $S$ (time 1). $S\to A$ (2), $A\to C$ (3), $C\to E$ (4), $E\to B$ (5), $B\to A$ — $A$ is open, so nothing new; $B\to D$ (6), $D\to C$ — finished? no, $C$ is *open*; $D\to E$ — $E$ is open. $D$ finishes (7), $B$ finishes (8), $E$ finishes (9), $C$ finishes (10), $A$ finishes (11), $S$ finishes (12). Then $F$ (13), whose neighbours are both finished, so $F$ finishes (14).

| $v$ | $S$ | $A$ | $C$ | $E$ | $B$ | $D$ | $F$ |
|---|---|---|---|---|---|---|---|
| $d$ | 1 | 2 | 3 | 4 | 5 | 6 | 13 |
| $f$ | 12 | 11 | 10 | 9 | 8 | 7 | 14 |

Tree edges: $S\to A$, $A\to C$, $C\to E$, $E\to B$, $B\to D$.

(c)

| edge | test | class |
|---|---|---|
| $B\to A$ | $A$ open ($d_A=2$, unfinished) | **back** |
| $D\to C$ | $C$ open ($d_C=3$, unfinished) | **back** |
| $D\to E$ | $E$ open ($d_E=4$, unfinished) | **back** |
| $S\to B$ | $B$ finished, $d_S=1 < d_B=5$ | **forward** |
| $F\to D$ | $D$ finished, $f_D=7 < d_F=13$ | **cross** |
| $F\to E$ | $E$ finished, $f_E=9 < d_F=13$ | **cross** |

(d) **Cyclic.** Three back edges, and one is enough: $B\to A$ closes the cycle $A\to C\to E\to B\to A$. The justification is the theorem, not the picture — a back edge points to an open vertex, i.e. one still on the recursion stack, and the stack path from that ancestor down to the current vertex plus the back edge is a directed cycle.

**P2** (a) **Yes, it is correct.** Subdividing an edge of length $w$ into $w$ unit edges makes hop-count in the new graph equal path-weight in the old one, and BFS is exactly right for hop-count. It is a genuine reduction, not a hack — the proposal is not *wrong*, which is what makes it worth analysing rather than dismissing.

(b) An edge of length $w$ becomes $w$ edges and introduces $w-1$ new vertices. So

$$m' = \sum_e w_e \le mW, \qquad n' = n + \sum_e (w_e - 1) \le n + m(W-1),$$

and BFS costs $\Theta(n' + m') = O(n + mW)$.

(c)

| | subdivide + BFS | Dijkstra $(n+m)\log_2 n$ |
|---|---|---|
| $W = 10$ | $n' \approx 1.9\times10^6$, $m' = 2\times10^6$ → $\approx 3.9\times 10^6$ steps | $\approx 5.0\times 10^6$ steps |
| $W = 10^6$ | $m' = 2\times 10^{11}$ → $\approx 4\times 10^{11}$ steps | $\approx 5.0\times 10^6$ steps |

At $W = 10$ the colleague is **right** — the subdivided BFS is slightly *faster* than Dijkstra and much simpler, because it has no priority queue and no $\log$ factor. At $W = 10^6$ it is about **80,000× slower**, and the graph alone needs hundreds of gigabytes.

The honest verdict: it is a good technique with a stated precondition, not a bad idea. Use it when weights are small integers; it is the standard trick behind 0–1 BFS and its relatives.

(d) It is **pseudo-polynomial**: the running time is polynomial in the *numeric value* $W$ of the input, not in the number of bits needed to write $W$ down. Doubling the length of the input (one more bit of $W$) doubles the running time. You met this in [Lesson 2.5](02-05-dynamic-programming-and-knapsack.md), where the knapsack DP ran in $O(nW)$ for exactly the same reason — and the unit conversion here (metres to millimetres) changes nothing about the problem while multiplying the cost by 1000, which is the diagnostic symptom.

**P3** (a) **A DAG that the rule wrongly rejects:**

$$A \to B, \qquad A \to C, \qquad B \to C.$$

DFS from $A$: visit $B$, from $B$ visit $C$, finish $C$, finish $B$, return to $A$, and now scan $A\to C$ — $C$ is "already visited", so the rule reports a cycle. There is none; this is a forward edge. (The same failure happens on any cross edge.)

(b) **Three states, not two.** A vertex is *white* (undiscovered), *grey* (discovered, still on the recursion stack), or *black* (finished). Report a cycle **only** when an edge $u \to v$ leads to a **grey** $v$ — that is the back-edge test. Edges into black vertices are forward or cross edges and are harmless.

(c) The $n$-fresh-DFS version costs $\Theta(n(n+m))$: one traversal per starting vertex.

| version | cost | on $n = 10^5$, $m = 2\times10^5$ |
|---|---|---|
| three-colour DFS | $\Theta(n+m)$ | $3\times 10^5$ steps |
| DFS from every vertex | $\Theta(n(n+m))$ | $3\times 10^{10}$ steps |

A factor of $n$ — five orders of magnitude here, seconds against roughly a day. Both are correct; one is a build-system pre-check that finishes instantly and one is not usable. This is the everyday version of the point: correctness is the floor, not the finish line.

(d) **It does not work as stated** — for the same reason as (a). BFS on $A\to B$, $A\to C$, $B\to C$ discovers $B$ and $C$ from $A$, then dequeues $B$ and finds $C$ already discovered, and would report a cycle in a DAG.

BFS *can* be made to work, but not by patching the visited test, because BFS has no recursion stack and therefore no notion of "currently open ancestor" to test against. The standard correct BFS approach is different in kind: maintain **in-degrees** and repeatedly dequeue vertices of in-degree zero, decrementing their neighbours' counts (Kahn's algorithm). If fewer than $n$ vertices ever get dequeued, the leftovers contain a cycle. That is $\Theta(n+m)$ and it is Lesson 3.2's other topological-sort algorithm — so the answer to "can BFS detect cycles?" is *yes, by counting rather than by marking*.

</details>

## Flashback

**From Lesson 2.5 (Dynamic programming & knapsack):** You are given $n$ items with integer weights and values and a knapsack of integer capacity $W$.

(a) State the DP recurrence and its running time. (b) Is $O(nW)$ polynomial in the input size? Justify. (c) A colleague reports that their knapsack solver "got 1000× slower after we switched the weights from kilograms to grams, even though nothing else changed." Explain. (d) What does this predict about a solver for the same problem with *real-valued* weights?

<details>
<summary>Solution</summary>

(a) With $\mathrm{OPT}[i,w]$ the best value using the first $i$ items in capacity $w$:

$$\mathrm{OPT}[i,w] = \max\big(\mathrm{OPT}[i-1,w],\ v_i + \mathrm{OPT}[i-1,\,w-w_i]\big),$$

taking the second branch only when $w_i \le w$. The table has $n(W+1)$ cells, each filled in $O(1)$: $\Theta(nW)$ time.

(b) **No.** The input is written in $\Theta(n\log W)$ bits — $W$ takes $\log_2 W$ bits, not $W$ of them. So $O(nW)$ is exponential in the *length* of the input while being polynomial in its *value*: **pseudo-polynomial**. Adding one bit to $W$ doubles the run time.

(c) Switching kilograms to grams multiplies every weight and the capacity by 1000, so $W$ becomes $1000W$ and the table grows by a factor of 1000 — exactly the reported slowdown. The problem instance is *identical* in every respect a person would care about; only its numeric encoding changed. This is the clean diagnostic for a pseudo-polynomial algorithm: **a change of units changes the run time.**

(d) It predicts that the DP **cannot be run at all** on real-valued weights. The table is indexed by capacity, and real capacities have no finite index set — there is no "next" capacity to step to. In practice you must either discretize (round to a grid, accepting an approximation, which is the technique behind the knapsack PTAS in Lesson 4.3) or switch to a different method entirely, such as branch-and-bound. Continuous knapsack, where items may be split, is a *different and easier* problem that greedy solves exactly by value-density — the connection back to [Lesson 2.1](02-01-the-greedy-method-and-interval-scheduling.md).

</details>

## Connections

- **Backward:** the queue-versus-stack framing makes the traversal a design choice, exactly like [Lesson 2.1's](02-01-the-greedy-method-and-interval-scheduling.md) choice of greedy rule — and, exactly as there, the choice has to be *justified against the guarantee you want*, not by which is faster. The graph vocabulary (degree, path, DAG, connectivity) is [discrete-mathematics](../../discrete-mathematics/syllabus.md)'s.
- **Forward:** everything in Module 3 is this loop with the bag upgraded. Lesson 3.2 reads DFS's finish times to sort a DAG and to peel off strongly connected components; Lesson 3.3 replaces the queue with a **priority** queue and gets Dijkstra; Lesson 3.5 runs a BFS inside a loop to find augmenting paths.
- **Sideways:** the three-colour marking is exactly a tracing garbage collector's white/grey/black, and for the same reason — you must distinguish "reachable and still being explored" from "reachable and done". Web crawlers are BFS with a politeness delay; regular-expression engines are DFS over an NFA's state graph, which is [theory-of-computation 1.2](../../theory-of-computation/lessons/01-02-nfa-and-the-subset-construction.md) made executable.
