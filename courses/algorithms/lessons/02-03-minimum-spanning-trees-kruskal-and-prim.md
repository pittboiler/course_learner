# Algorithms · Lesson 2.3: Minimum spanning trees — Kruskal & Prim

> ⏱ ~15 min · Module 2: Greedy & dynamic programming · Builds on: [2.1 (the greedy method)](02-01-the-greedy-method-and-interval-scheduling.md), [2.2 (Huffman coding)](02-02-huffman-coding.md) · Unlocks: 2.4 (amortized analysis & union-find)

## Why this matters

Connect $n$ sites as cheaply as possible: lay cable between towns, wire a chip, cluster data points. The answer is a **minimum spanning tree**, and it is the rare optimization problem where greedy is not merely correct but correct in *two different ways* — Kruskal and Prim make completely different choices and always arrive at the same total.

That coincidence is not luck. Both are instances of a single theorem, the **cut property**, and seeing that is the point of the lesson. Once you have the cut property you can invent your own MST algorithm and know in advance that it works, which is a much better position than memorizing two procedures.

The practical payoff is that MST is the greedy success story people over-generalize from. Knowing exactly *which* property of the problem makes greedy safe here is what stops you assuming it in the next problem — where, as Lesson 2.5 shows, it usually is not.

## The idea

A **spanning tree** of a connected weighted graph is a subset of edges that keeps everything connected and has no cycles — necessarily $n-1$ edges on $n$ vertices. A **minimum** spanning tree minimizes the total weight.

The key fact is local, which is what makes greedy possible:

> **[Cut property](../reference.md#cut-property).** Take any way of splitting the vertices into two non-empty groups. The cheapest edge crossing that split belongs to some MST.

The reason is an exchange argument, and by now it should feel familiar. Suppose $T$ is an MST not containing the cheapest crossing edge $e$. Adding $e$ to $T$ makes exactly one cycle, and that cycle must cross the split a second time, on some edge $f$. Swap: $T - f + e$ is still a spanning tree, and since $e$ was the cheapest crossing edge, $w(e) \le w(f)$, so the swap did not increase the weight. So some MST contains $e$.

Everything follows. **Both algorithms are just different ways of choosing which cut to look at:**

- **Kruskal** sorts all edges and adds each one unless it would close a cycle. When it adds edge $e$, the cut is "the component containing one endpoint of $e$, versus everything else" — and $e$ is the cheapest edge crossing it, because every cheaper edge has already been considered and either used or rejected.
- **Prim** grows one tree from a start vertex, repeatedly adding the cheapest edge leaving it. The cut is "the tree so far versus the rest," and the choice is the cheapest crossing edge by construction.

Same theorem, two schedules. Kruskal builds a forest that merges into a tree; Prim keeps one tree and grows it.

## The formal version

**Setup.** $G = (V, E)$ connected and undirected, $|V| = n$, $|E| = m$, with a weight $w(e)$ on each edge.

**Theorem (cut property).** Let $S \subset V$ be non-empty with $S \ne V$, and let $e$ be a minimum-weight edge with one endpoint in $S$ and the other in $V \setminus S$. Then some MST contains $e$. If $e$ is the *unique* minimum crossing edge, then **every** MST contains it.

*Proof.* Let $T$ be an MST with $e \notin T$. Since $T$ is spanning and connected, $T + e$ contains exactly one cycle $C$, and $C$ contains $e$. Walking around $C$ from one endpoint of $e$ to the other, the walk starts in $S$ and ends outside, so some other edge $f \in C$ also crosses the cut. Then $T' = T - f + e$ has $n-1$ edges and is connected (removing an edge of a cycle cannot disconnect), so it is a spanning tree, and

$$w(T') = w(T) - w(f) + w(e) \le w(T),$$

since $w(e) \le w(f)$ by minimality. As $T$ was an MST, $w(T') = w(T)$ and $T'$ is an MST containing $e$. If $e$ is the strict minimum then $w(e) < w(f)$ would make $w(T') < w(T)$, impossible — so no MST can omit $e$. $\blacksquare$

**Corollary (cycle property).** For any cycle, a strictly-heaviest edge on it is in **no** MST. *(It is the $f$ that would be exchanged away.)* This is what licenses Kruskal's rejections.

**Kruskal's algorithm.**

```
KRUSKAL(G):
    sort edges by weight, ascending
    F <- empty set;  make a singleton set for each vertex
    for each edge (u,v) in sorted order:
        if FIND(u) != FIND(v):        -- endpoints in different components
            add (u,v) to F
            UNION(u,v)
    return F
```

Cost: $\Theta(m\log m)$ to sort, plus $m$ find/union operations. With the disjoint-set forest of [Lesson 2.4](02-04-amortized-analysis-and-union-find.md) those cost near-constant time each, so the total is $\Theta(m\log m) = \Theta(m\log n)$ — **dominated by the sort**, like most greedy algorithms.

**Prim's algorithm.**

```
PRIM(G, start):
    T <- {start};  Q <- min-priority queue of edges leaving start
    while |T| < n:
        (u,v) <- EXTRACT-MIN(Q)        -- cheapest edge leaving T
        if v in T: continue             -- stale entry, skip
        add (u,v) to the tree;  add v to T
        for each edge (v,x) with x not in T: INSERT(Q, (v,x))
    return the tree
```

Cost with a binary heap: $\Theta(m\log n)$. With a Fibonacci heap, $\Theta(m + n\log n)$ — better on dense graphs.

**Correctness of both** is immediate from the cut property plus induction: each algorithm only ever adds an edge that is minimum across some cut separating what it has built from what it has not, so every edge it adds is in some MST, and the invariant "the current edge set extends to an MST" is preserved.

**Uniqueness.** If all edge weights are **distinct**, the MST is unique — by the strict form of the cut property, every MST must contain every strict-minimum crossing edge, and that pins down the whole tree. With ties, several MSTs can exist and different algorithms may return different ones (all of equal weight).

## Picture

![A six-vertex weighted graph with vertices A through F. Five edges are highlighted as the minimum spanning tree: C-F weight 1, D-E weight 2, A-B weight 4, D-F weight 6, and A-C weight 8, totalling 21. The remaining edges C-E 7, E-F 9, B-D 10 and B-C 11 are shown unhighlighted as cycle-closing rejections.](assets/02-03-fig1.svg)

Kruskal walks the sorted list $1, 2, 4, 6, 7, 8, 9, 10, 11$ and takes an edge whenever its endpoints are in different components. Prim from $A$ visits $A, B, C, F, D, E$ and takes a different *sequence* of edges — but the same five edges, and the same total 21.

They must agree here, and the reason is worth reading off the figure: **all nine weights are distinct, so the MST is unique.** Any correct algorithm returns exactly this tree. Introduce a tie — make $B\!-\!D$ weigh 8 as well as $A\!-\!C$ — and the two could diverge while both remaining correct.

## Worked examples

**Example 1 (mechanical): Kruskal on the Picture's graph.** Edges sorted by weight, tracking components:

| edge | weight | endpoints' components | action | components after |
|---|---|---|---|---|
| $CF$ | 1 | $\{C\}, \{F\}$ | **take** | $\{A\},\{B\},\{CF\},\{D\},\{E\}$ |
| $DE$ | 2 | $\{D\},\{E\}$ | **take** | $\{A\},\{B\},\{CF\},\{DE\}$ |
| $AB$ | 4 | $\{A\},\{B\}$ | **take** | $\{AB\},\{CF\},\{DE\}$ |
| $DF$ | 6 | $\{DE\},\{CF\}$ | **take** | $\{AB\},\{CDEF\}$ |
| $CE$ | 7 | both $\{CDEF\}$ | reject (cycle) | unchanged |
| $AC$ | 8 | $\{AB\},\{CDEF\}$ | **take** | $\{ABCDEF\}$ — done |
| $EF, BD, BC$ | 9, 10, 11 | all within one component | reject | — |

Five edges, total $1+2+4+6+8 = \mathbf{21}$. (Verified against brute-force search over all $\binom{9}{5} = 126$ five-edge subsets: the minimum spanning tree weight is 21 and exactly one tree achieves it.)

**Prim from $A$**, for contrast: take $AB$ (4), then from $\{A,B\}$ the cheapest leaving edge is $AC$ (8) — note Kruskal took this *last* and Prim takes it *second* — then $CF$ (1), then $DF$ (6), then $DE$ (2). Same set, total 21, completely different order.

**Example 2 (why you'd care): the cut property as a design tool.** Suppose your graph is enormous and stored across many machines, so neither sorting all edges (Kruskal) nor maintaining one global frontier (Prim) is practical. Can you still compute an MST?

Yes, and the cut property tells you how without any new theory. **Borůvka's algorithm:**

> Each vertex simultaneously selects its own cheapest incident edge. Add all selected edges at once. Contract the resulting components and repeat.

Every selected edge is minimum across the cut "{this vertex} versus everything else," so by the cut property every one of them is in some MST — they can all be added safely, in parallel, with no coordination. Each round at least halves the number of components (every component picks an edge, and edges pair components up), so there are $O(\log n)$ rounds and the total work is $O(m\log n)$.

This is the algorithm behind distributed and parallel MST implementations, and it was invented in 1926 — before either Kruskal or Prim — for electrifying Moravia.

**The transferable point:** Kruskal and Prim are not two facts to memorize; they are two schedules over one theorem. Once you know *the cheapest edge across any cut is safe*, you can choose the schedule that fits your constraints — sorted order, a growing frontier, or all-at-once in parallel — and correctness comes free. (One caveat Borůvka needs: with tied weights, two components can each select the edge between them and you can create a cycle. Break ties by a fixed total order on edges — say by index — and the problem disappears.)

## Watch out

- **You might think** a minimum spanning tree contains the shortest path between every pair of vertices — **but actually** it usually does not. In the Picture, the MST path from $B$ to $F$ is $B\!-\!A\!-\!C\!-\!F$ costing $4+8+1 = 13$, while the direct edge $B\!-\!C$ plus $C\!-\!F$ costs $11+1 = 12$. **MST minimizes total edge weight; shortest paths minimize per-pair distance**, and those are different objectives (Lesson 3.3 does the second).
- **You might think** Prim's answer depends on the start vertex — **but actually** with distinct weights the MST is unique, so every start vertex gives the same tree (in a different order). With ties, the start vertex can change *which* MST you get, but never the total.
- **You might think** greedy works for MST because greedy usually works on graphs — **but actually** it works because of one specific structural fact, the cut property, which happens to hold here and fails elsewhere. The very similar-looking problem of finding a minimum-weight **Hamiltonian** cycle (travelling salesman) has no such property and is NP-hard (Lesson 4.2). Nothing about "it's a graph, use greedy" transfers.

## One-liner

> The cheapest edge crossing any cut is safe — that single theorem is Kruskal, Prim and Borůvka, differing only in which cut they look at next.

## Problems

**P1 (🟢)** Run Kruskal on the graph with vertices $\{P,Q,R,S,T\}$ and edges

$$PQ{:}3,\quad PR{:}1,\quad QR{:}7,\quad QS{:}5,\quad RS{:}4,\quad RT{:}6,\quad ST{:}2.$$

(a) Give the sorted edge list. (b) Give the trace as a table (edge / take or reject / components). (c) State the MST edges and total weight. (d) Run Prim from $P$ and confirm the same total.

**P2 (🟡)** (a) State the cut property. (b) Use it to prove that the globally cheapest edge of a connected graph is in some MST. (c) Use the cycle property to prove that the globally *most expensive* edge is in no MST — or explain why the claim needs a hypothesis, and supply it. (d) Give a three-vertex graph where the most expensive edge **is** in every MST.

**P3 (🔴)** A colleague proposes this algorithm: *"Sort the edges in **decreasing** weight order. Delete each edge in turn, unless deleting it would disconnect the graph. Return what remains."*

(a) Run it on the Picture's graph, whose edges are

$$AB{:}4,\ AC{:}8,\ BC{:}11,\ BD{:}10,\ CE{:}7,\ CF{:}1,\ DE{:}2,\ DF{:}6,\ EF{:}9,$$

and give the result. (b) Is the algorithm correct in general? Justify using one of the two properties from this lesson. (c) Give its running time with a naive connectivity check, and say what dominates. (d) Say one situation in which you would prefer it to Kruskal.

<details>
<summary>Solutions</summary>

**P1** (a) Sorted:

$$PR{:}1,\quad ST{:}2,\quad PQ{:}3,\quad RS{:}4,\quad QS{:}5,\quad RT{:}6,\quad QR{:}7.$$

(b)

| edge | $w$ | components before | action | components after |
|---|---|---|---|---|
| $PR$ | 1 | all singletons | **take** | $\{PR\},\{Q\},\{S\},\{T\}$ |
| $ST$ | 2 | $\{S\},\{T\}$ | **take** | $\{PR\},\{Q\},\{ST\}$ |
| $PQ$ | 3 | $\{PR\},\{Q\}$ | **take** | $\{PQR\},\{ST\}$ |
| $RS$ | 4 | $\{PQR\},\{ST\}$ | **take** | $\{PQRST\}$ — 4 edges, done |
| $QS$ | 5 | same component | reject | — |
| $RT$ | 6 | same component | reject | — |
| $QR$ | 7 | same component | reject | — |

(c) MST edges $\{PR, ST, PQ, RS\}$, total $1+2+3+4 = \mathbf{10}$.

(d) **Prim from $P$:** cheapest edge leaving $\{P\}$ is $PR$ (1) → add $R$. Cheapest leaving $\{P,R\}$: $PQ$ (3) vs $RS$ (4) vs $RT$ (6) → take $PQ$ (3), add $Q$. Cheapest leaving $\{P,Q,R\}$: $RS$ (4) vs $QS$ (5) vs $RT$ (6) → take $RS$ (4), add $S$. Cheapest leaving $\{P,Q,R,S\}$: $ST$ (2) vs $RT$ (6) → take $ST$ (2), add $T$.

Total $1+3+4+2 = \mathbf{10}$ ✓, same edge set, different order (Kruskal took $ST$ second, Prim takes it last). All weights are distinct, so the MST is unique and they had to agree.

**P2** (a) **Cut property:** for any partition of $V$ into non-empty $S$ and $V\setminus S$, a minimum-weight edge crossing the partition lies in some MST; if it is the unique minimum crossing edge, it lies in every MST.

(b) Let $e = (u,v)$ be a globally cheapest edge. Apply the cut property with $S = \{u\}$. Every edge crossing this cut is incident to $u$, and $e$ is one of them; since $e$ is cheapest in the whole graph, it is in particular cheapest among the crossing edges. So $e$ is in some MST. $\blacksquare$

(c) **The claim as stated is false and needs a hypothesis.** The cycle property says: if $f$ is the **strictly heaviest edge on some cycle**, then $f$ is in no MST. The globally heaviest edge need not lie on any cycle — if it is a **bridge** (its removal disconnects the graph), every spanning tree must contain it.

Corrected claim: *if the globally most expensive edge lies on a cycle and is strictly heaviest on it, it is in no MST.* Since the global maximum is heaviest on every cycle containing it, the hypothesis reduces to "**the edge is not a bridge**."

*Proof from the cycle property:* let $f$ be strictly heaviest on cycle $C$ and suppose some MST $T$ contains $f$. Removing $f$ splits $T$ into two components; the rest of $C$ connects $f$'s endpoints, so some other edge $g \in C$ crosses that split. Then $T - f + g$ is a spanning tree of strictly smaller weight, contradicting minimality. $\blacksquare$

(d) Take the path $X - Y - Z$ with $w(XY) = 1$ and $w(YZ) = 100$. The graph is a tree, so its only spanning tree is itself, and the most expensive edge $YZ$ (a bridge) is in every MST. **Any graph that is already a tree works** — with no cycles, the cycle property has nothing to say.

**P3** (a) Delete in decreasing order, skipping deletions that disconnect:

| edge | $w$ | delete? | reason |
|---|---|---|---|
| $BC$ | 11 | **delete** | $B$ still reachable via $AB$ |
| $BD$ | 10 | **delete** | $B$ still reachable via $AB$; $D$ via $DE, DF$ |
| $EF$ | 9 | **delete** | $E$ via $CE, DE$; $F$ via $CF, DF$ |
| $AC$ | 8 | **keep** | deleting it would cut $\{A,B\}$ off from the rest |
| $CE$ | 7 | **delete** | $E$ still reachable via $DE$ |
| $DF$ | 6 | **keep** | deleting it would cut $\{D,E\}$ off |
| $AB$ | 4 | **keep** | bridge — $B$ has no other edge left |
| $DE$ | 2 | **keep** | bridge for $E$ |
| $CF$ | 1 | **keep** | bridge for the $C\!-\!F$ link |

Remaining: $\{AC{:}8,\ DF{:}6,\ AB{:}4,\ DE{:}2,\ CF{:}1\}$ — total $\mathbf{21}$, **exactly the MST** from Example 1.

(b) **Yes, it is correct**, and the **cycle property** is why. When the algorithm considers edge $f$ in decreasing order and deleting it would *not* disconnect the graph, $f$ lies on a cycle all of whose other edges are still present — and since we are going in decreasing order, every remaining edge has weight $\le w(f)$, so $f$ is a heaviest edge on that cycle and can be discarded. When deleting *would* disconnect, $f$ is a bridge of the current graph and every spanning tree needs it, so keeping it is forced.

At the end the graph is connected (we never disconnected it) and acyclic (any remaining cycle would have had its heaviest edge deleted), hence a spanning tree — and it is minimum by the cycle property applied at each step. This is the **reverse-delete algorithm**, and it is a third instance of the same theory.

(c) Sorting is $\Theta(m\log m)$. Each of the $m$ deletion tests is a connectivity check, $\Theta(m + n)$ by BFS or DFS if done naively, so the tests total $\Theta(m(m+n))$ — which **dominates the sort**. Overall $\Theta(m^2)$ on a sparse graph and worse on a dense one, so it is markedly slower than Kruskal's $\Theta(m\log n)$.

(The asymmetry is instructive: Kruskal's *union-find* makes "would this create a cycle?" nearly free, but there is no equally cheap dynamic structure for "would this deletion disconnect?" — deletions are much harder to support than unions. That is exactly why Kruskal is the algorithm people use and reverse-delete is the one they cite.)

(d) When the graph is **already nearly a tree** — $m$ barely more than $n$ — reverse-delete does very little work, since almost every edge is a bridge and gets kept immediately. More practically: when you are handed a connected subgraph that is already close to minimal and want to prune a few heavy redundant edges, reverse-delete is the natural incremental framing, whereas Kruskal would rebuild from scratch.

</details>

## Flashback

**From Lesson 2.1 (The greedy method):** Interval scheduling's earliest-finish-time rule was proved by an exchange argument. Consider this variant: each interval now has a **weight**, and you want the compatible set of maximum total weight.

(a) Give a three-interval counterexample showing earliest-finish-time is no longer optimal. (b) Say which step of the exchange argument breaks.

<details>
<summary>Solution</summary>

(a) Take

$$A[0,2)\ \text{ with weight } 1, \qquad B[3,5)\ \text{ with weight } 1, \qquad C[0,6)\ \text{ with weight } 10.$$

Earliest-finish-time takes $A$ (finishes at 2), then $B$ (starts at $3 \ge 2$), then rejects $C$ — total weight $\mathbf{2}$. The optimum is $\{C\}$ alone, total weight $\mathbf{10}$.

(b) The exchange argument breaks at the swap. It ran: *let $o_1$ be the optimum's earliest finisher; since $f(g_1) \le f(o_1)$, replacing $o_1$ by $g_1$ keeps the set compatible and **the same size**.* That last clause is what fails — the swap preserves **cardinality**, and when the objective is total weight, preserving cardinality is worthless. Replacing a weight-10 interval by a weight-1 one keeps the set compatible and makes it much worse.

More precisely: the argument needs "the swap does not decrease the objective," and for the unweighted problem that is automatic because the objective *is* the count. Once the objective changes, the same exchange no longer certifies anything — which is [Lesson 2.1's](02-01-the-greedy-method-and-interval-scheduling.md) third Watch out, that a proof must be re-run whenever the objective changes.

(No greedy rule solves weighted interval scheduling; it needs dynamic programming, and [Lesson 2.5](02-05-dynamic-programming-and-knapsack.md) builds it.)

</details>

## Connections

- **Backward:** the cut property's proof is the third exchange argument in three lessons, after [interval scheduling](02-01-the-greedy-method-and-interval-scheduling.md) and [Huffman](02-02-huffman-coding.md) — by now the shape should be automatic: assume an optimum lacking greedy's choice, swap it in, show nothing got worse. Kruskal's cost is dominated by [Lesson 1.4's](01-04-sorting-and-the-comparison-lower-bound.md) sort.
- **Forward:** Lesson 2.4 builds the disjoint-set forest that makes Kruskal's cycle test near-constant, and Lesson 3.3's Dijkstra is structurally almost identical to Prim — same frontier, same priority queue, different key — which is a good place to check you can tell two similar algorithms apart.
- **Sideways:** MST is the basis of single-linkage clustering in [machine-learning](../../machine-learning/syllabus.md) (cut the $k-1$ heaviest MST edges to get $k$ clusters), and appears in network design in [operations-research](../../operations-research/syllabus.md). The contrast with travelling salesman — same graph, similar-sounding objective, NP-hard instead of greedy-solvable — is the sharpest illustration in the course that tractability is a property of the problem's structure, not of its surface description.
