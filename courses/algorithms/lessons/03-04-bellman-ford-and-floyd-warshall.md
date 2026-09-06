# Algorithms · Lesson 3.4: Bellman–Ford & Floyd–Warshall

> ⏱ ~15 min · Module 3: Graph algorithms · Builds on: [3.3 (Dijkstra's shortest paths)](03-03-dijkstras-shortest-paths.md) · Unlocks: 3.5 (max-flow / min-cut)

## Why this matters

[Lesson 3.3](03-03-dijkstras-shortest-paths.md) ended with a precondition and a broken repair: Dijkstra needs non-negative edges, and you cannot shift them into compliance. Negative edges are not exotic. A currency trade with a rebate, a chemical reaction that releases energy, a scheduling task that frees a resource, a log-probability, a profit-and-loss edge — all naturally negative.

This lesson buys two things with slower algorithms. **Bellman–Ford** drops the non-negativity requirement entirely and, as a bonus, is the standard way to *detect a negative cycle* — which is exactly what "is there an arbitrage opportunity?" means. **Floyd–Warshall** answers all $n^2$ source-target pairs at once in three nested loops, and its inner line is the shortest, strangest dynamic program in the course.

The judgement content is mostly **when to use which**, and the honest answer is a decision table with four entries, not one algorithm. But there are two traps worth the price of admission on their own: the number of Bellman–Ford rounds is $|V|-1$ and *cannot* be shaved by an optimistic constant, and its negative-cycle detection only sees cycles **reachable from the source** — a silent, correct-looking failure.

## The idea

**Bellman–Ford: give up on order.** Dijkstra's speed came from knowing *which* vertex to finalize next. Without that knowledge, do the dumb thing: relax **every** edge, and repeat.

Why does that terminate with the right answer? Because of one clean invariant:

> After $k$ rounds, $d[v]$ is at most the weight of the best path to $v$ using **at most $k$ edges**.

Round 1 gets every 1-edge path right, round 2 every 2-edge path, and so on. If there is no negative cycle, some shortest path has no repeated vertex, so it uses at most $|V|-1$ edges — and $|V|-1$ rounds suffice. The wavefront in the figure is that invariant made visible.

And then the elegant part. Run **one more** round. If anything still improves, some shortest "path" needs $|V|$ edges, which means it repeats a vertex, which means it goes around a cycle and *came out cheaper*. That is a negative cycle, and Bellman–Ford has just detected it.

**Floyd–Warshall: index the DP by what's allowed in the middle.** For all-pairs, the subproblem is the trick. Number the vertices $1..n$ and define

> $D^{(k)}[i][j]$ = the shortest $i \to j$ path whose **intermediate** vertices all come from $\{1,\dots,k\}$.

The endpoints are unrestricted; only what happens *between* them is limited. Then the recursion writes itself: a path allowed to use vertex $k$ either doesn't (so it is the old value) or does (so it goes $i \rightsquigarrow k \rightsquigarrow j$, and each half already avoids $k$ internally). Three loops, no queue, no graph traversal at all — just a $n\times n$ table swept $n$ times.

## The formal version

**Bellman–Ford.**

```
BELLMAN-FORD(G, s):
    d[v] <- ∞ for all v;  d[s] <- 0
    repeat |V| - 1 times:
        for each edge (u, v, w):
            if d[u] + w < d[v]:  d[v] <- d[u] + w;  parent[v] <- u
    for each edge (u, v, w):                       # one extra round
        if d[u] + w < d[v]:  report NEGATIVE CYCLE
```

**Theorem.** If no negative cycle is reachable from $s$, Bellman–Ford ends with $d[v] = \delta(s,v)$ for all $v$.

*Proof.* Claim: after round $k$, $d[v] \le$ the weight of the lightest $s\to v$ path using $\le k$ edges. Induction on $k$; the base case $k=0$ is $d[s]=0$. For the step, take such a path with $\le k+1$ edges and last edge $(u,v)$: its prefix uses $\le k$ edges, so $d[u]$ was already at most the prefix's weight after round $k$, and round $k+1$ relaxes $(u,v)$. Now, with no negative cycle, some shortest path is **simple** (deleting any cycle cannot increase the weight), hence has $\le |V|-1$ edges. $\blacksquare$

**Cost:** $\Theta(|V|\cdot|E|)$ time, $\Theta(|V|)$ space. Compare Dijkstra's $O(m\log n)$: on $n=10^5$, $m=3\times10^5$ that is $3\times 10^{10}$ against $6.6\times 10^6$ — a factor of about **4,500**. Negative edges are expensive.

**Two practical amendments.** Stop early if a round changes nothing — it is then a fixed point and further rounds do nothing. And note that the extra round detects only cycles **reachable from $s$**; to find any negative cycle anywhere, add a virtual source with weight-0 edges to every vertex and run from there.

**[Floyd–Warshall](../reference.md#floydwarshall).** Initialize $D[i][j] = w(i,j)$ (with $0$ on the diagonal, $\infty$ for non-edges), then

$$D^{(k)}[i][j] = \min\Big(D^{(k-1)}[i][j],\ \ D^{(k-1)}[i][k] + D^{(k-1)}[k][j]\Big).$$

```
for k = 1..n:
    for i = 1..n:
        for j = 1..n:
            D[i][j] <- min(D[i][j], D[i][k] + D[k][j])
```

$\Theta(n^3)$ time, $\Theta(n^2)$ space. The array can be updated **in place** — the row and column $k$ are unchanged during iteration $k$, so reading a partly-updated table is harmless.

Negative weights are fine. A **negative cycle exists iff some $D[i][i] < 0$** at the end, which is the cheapest negative-cycle test there is when you wanted all-pairs anyway.

**The [decision table](../reference.md#which-shortest-path-algorithm).**

| situation | algorithm | cost |
|---|---|---|
| one source, $w \ge 0$ | Dijkstra + heap | $O(m\log n)$ |
| one source, negative edges allowed | Bellman–Ford | $\Theta(nm)$ |
| one source, DAG (any weights) | relax in topological order | $\Theta(n+m)$ |
| all pairs, dense or small $n$ | Floyd–Warshall | $\Theta(n^3)$ |
| all pairs, sparse, negative edges | Johnson (1 Bellman–Ford + $n$ Dijkstras) | $O(nm\log n)$ |

## Picture

![On the left, a five-vertex weighted digraph with source S, vertices A and B, and C and D below. Two edges are drawn in red because their weights are negative: A to B with weight minus 3 and B to C with weight minus 2. On the right, a table of five rows, one per Bellman–Ford round, and five columns, one per vertex. Round zero is 0 and four infinities. Cells that changed in each round are outlined in blue, and the outlined cells move rightward through the table one column at a time: A and B change in round 1, B, C and D in round 2, C and D in round 3, and only D in round 4.](assets/03-04-fig1.svg)

The graph is $S\to A\,(5)$, $S\to B\,(8)$, $A\to B\,(-3)$, $A\to C\,(4)$, $B\to C\,(-2)$, $B\to D\,(6)$, $C\to D\,(3)$, $D\to A\,(7)$, and the edges are relaxed in the deliberately unhelpful order $D{\to}A$, $C{\to}D$, $B{\to}C$, $B{\to}D$, $A{\to}C$, $A{\to}B$, $S{\to}B$, $S{\to}A$.

The boxed cells drift steadily right, one column per round, and that drift **is** the correctness proof: round $k$ finalizes the vertices whose best route uses $k$ edges. Because the edge order works against us — each round processes edges roughly *backwards* along the paths — exactly one new vertex settles per pass, and all four rounds are needed. Reverse the edge list and everything would settle in round 1. **The number of rounds you need is a property of the edge ordering, and $|V|-1$ is the worst case you cannot avoid without knowing the ordering in advance.**

Watch $D$ in particular: $\infty \to 14 \to 8 \to 3$. It is assigned a finite value in round 2 and then *revised downward twice*. Anything that read $d[D]$ after round 2 would have got a wrong answer that looked entirely reasonable.

## Worked examples

**Example 1 (mechanical): Bellman–Ford with the wavefront.** Figure's graph and edge order. Round by round:

| | $S$ | $A$ | $B$ | $C$ | $D$ |
|---|---|---|---|---|---|
| round 0 | 0 | $\infty$ | $\infty$ | $\infty$ | $\infty$ |
| round 1 | 0 | **5** | **8** | $\infty$ | $\infty$ |
| round 2 | 0 | 5 | **2** | **6** | **14** |
| round 3 | 0 | 5 | 2 | **0** | **8** |
| round 4 | 0 | 5 | 2 | 0 | **3** |

Two cells worth checking by hand. $B$ in round 2: $S\to B$ directly is 8, but $S\to A\to B$ is $5 + (-3) = 2$ ✓ — the negative edge is what makes the two-edge path beat the one-edge path, which is precisely the situation Dijkstra cannot handle. And $D$ in round 4: $d[C] + 3 = 0 + 3 = 3$ ✓, realizing the path $S\to A\to B\to C\to D = 5 - 3 - 2 + 3 = 3$.

A fifth round changes nothing, so there is **no negative cycle** ✓.

**Example 2 (why you'd care): Floyd–Warshall on four vertices.** Edges $1\to2\,(4)$, $1\to3\,(11)$, $2\to3\,(2)$, $2\to4\,(6)$, $3\to1\,(3)$, $3\to4\,(-2)$, $4\to2\,(1)$.

$D^{(0)}$ (direct edges only):

| | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| **1** | 0 | 4 | 11 | $\infty$ |
| **2** | $\infty$ | 0 | 2 | 6 |
| **3** | 3 | $\infty$ | 0 | $-2$ |
| **4** | $\infty$ | 1 | $\infty$ | 0 |

After all four rounds:

| | 1 | 2 | 3 | 4 |
|---|---|---|---|---|
| **1** | 0 | 4 | 6 | 4 |
| **2** | 5 | 0 | 2 | 0 |
| **3** | 3 | $-1$ | 0 | $-2$ |
| **4** | 6 | 1 | 3 | 0 |

Trace two entries. $D[1][3]$ dropped from 11 to 6 at $k=2$: the route $1\to2\to3 = 4+2$ beats the direct edge. $D[3][2]$ went $\infty \to 7$ at $k=1$ (via $3\to1\to2 = 3+4$) and then to $-1$ at $k=4$ (via $3\to4\to2 = -2+1$) — **the very last round still changed an answer**, which is the standard reason people who stop the loop early get wrong results.

All diagonal entries are 0, so there is no negative cycle ✓.

**Where this shows up.** The internet ran on Bellman–Ford for two decades: RIP is distance-vector routing, which is Bellman–Ford executed by the routers themselves, each one relaxing its neighbours' advertised distances. Its famous "count to infinity" failure is exactly what happens when the round structure is lost and the algorithm's convergence guarantee goes with it.

## Watch out

- **You might think** you can run fewer rounds because "real paths are short" — **but actually** the required number depends on the **edge ordering**, not the graph. On the path $v_0 \to v_1 \to \cdots \to v_5$ with all weights 1 and the edge list given in *reverse*, each round advances the wavefront exactly one vertex: after 3 rounds $v_4$ and $v_5$ are still $\infty$. The safe optimization is the opposite one — stop *early* when a round changes nothing.
- **You might think** the extra round finds any negative cycle — **but actually** it finds only those **reachable from $s$**. A negative cycle in a disconnected part of the graph leaves every $d$ at $\infty$ and never relaxes. To detect any negative cycle at all, add a virtual source $z$ with weight-0 edges to every vertex and run from $z$.
- **You might think** Floyd–Warshall's loops can be nested in any order — **but actually** $k$ **must be outermost**. The recursion's correctness depends on all pairs having been solved for intermediate set $\{1..k-1\}$ before any of them uses $k$. Putting $k$ innermost gives a table that is wrong in a way no small test reliably catches.
- **You might think** a negative edge means a negative cycle — **but actually** they are unrelated; the figure's graph has two negative edges and no negative cycle. Negative *edges* cost you Dijkstra. Negative *cycles* mean the shortest path is undefined ($-\infty$), which is a different failure and needs a different response.
- **You might think** intermediate values are usable — **but actually** $d[D]$ passed through 14 and 8 before reaching 3. Bellman–Ford's guarantee is about the **final** state; there is no anytime guarantee mid-run.

## One-liner

> When you cannot tell which vertex to finalize next, relax every edge $|V|-1$ times and let the wavefront do it for you — and let one extra round tell you whether the answer even exists.

## Problems

**P1 (🟢)** Run Bellman–Ford from $S$ on the graph $S\to A\,(6)$, $S\to C\,(12)$, $A\to B\,(3)$, $A\to D\,(9)$, $B\to C\,(-1)$, $C\to D\,(2)$, relaxing edges in the order $C{\to}D$, $B{\to}C$, $A{\to}B$, $S{\to}A$, $S{\to}C$, $A{\to}D$.

(a) Give the table of $d$ after each of rounds 0–4. (b) Give the final shortest $S\to D$ path and its weight. (c) In which round did $D$ get its final value, and what were its two earlier values? (d) Does a fifth round change anything? What does that tell you?

**P2 (🟡)** Using the four-vertex Floyd–Warshall example above:

(a) Compute $D^{(1)}$ from $D^{(0)}$ by hand, naming every entry that changes and the path responsible. (b) Explain, from the definition of $D^{(k)}$, why row $k$ and column $k$ never change during round $k$. (c) The graph has 4 vertices and 7 edges. Compare Floyd–Warshall's cost with running Dijkstra from each vertex. (d) At what rough size does that comparison flip, for a graph with average degree 10?

**P3 (🔴)** A trading system detects currency arbitrage. Rates become edge weights via $w(u,v) = -\log(\text{rate}_{u\to v})$, so a profitable cycle is a negative cycle. There are 40 currencies and every ordered pair has a rate.

(a) Which algorithm detects whether a profitable cycle exists, and at what cost? Give two options and pick one. (b) The engineer runs Bellman–Ford from USD and reports "no arbitrage." A colleague points out this is not the same as "no arbitrage anywhere." Explain the gap and give the standard fix. (c) The system now must also report the *actual cycle*, not just its existence. Describe how, from either algorithm's output. (d) A quant proposes using Dijkstra with Johnson's reweighting for speed. Explain why this cannot work here, referring to what $h$ must satisfy.

<details>
<summary>Solutions</summary>

**P1** (a)

| | $S$ | $A$ | $B$ | $C$ | $D$ |
|---|---|---|---|---|---|
| round 0 | 0 | $\infty$ | $\infty$ | $\infty$ | $\infty$ |
| round 1 | 0 | 6 | $\infty$ | 12 | 15 |
| round 2 | 0 | 6 | 9 | 12 | 14 |
| round 3 | 0 | 6 | 9 | 8 | 14 |
| round 4 | 0 | 6 | 9 | 8 | 10 |

(Round 1: only $S\to A$, $S\to C$ and $A\to D$ can fire, because everything earlier in the list starts from an $\infty$ vertex. Round 2: $C\to D$ gives $12+2 = 14$, and $A\to B$ gives 9. Round 3: $B\to C$ gives $9-1 = 8$ — note $C\to D$ was processed *before* $B\to C$ this round, so $D$ cannot benefit until round 4. Round 4: $C\to D$ gives $8+2 = 10$.)

(b) $S \to A \to B \to C \to D = 6 + 3 + (-1) + 2 = \mathbf{10}$ ✓, beating $S\to C\to D = 14$ and $S\to A\to D = 15$.

(c) $D$ reached its final value 10 in **round 4** — the last one available. Its earlier values were **15** (round 1, via $A\to D$) and **14** (round 2, via $S\to C\to D$). Both looked like finished answers.

(d) **No change.** A round that changes nothing is a fixed point, and by the theorem the extra round changing nothing certifies **no negative cycle reachable from $S$** — so the values are true shortest-path distances rather than the first stage of an infinite descent.

**P2** (a) $D^{(1)}$ allows only vertex 1 as an intermediate, so we look for improvements of the form $i \to 1 \to j$. The only vertex with a finite edge *into* 1 is vertex 3 ($3\to1 = 3$), so only row 3 can change, via $3\to1\to j$:

| candidate | value | old | change? |
|---|---|---|---|
| $D[3][2]$ via $3\to1\to2$ | $3 + 4 = 7$ | $\infty$ | **yes, → 7** |
| $D[3][3]$ via $3\to1\to3$ | $3 + 11 = 14$ | 0 | no |
| $D[3][4]$ via $3\to1\to4$ | $3 + \infty$ | $-2$ | no |

So exactly **one** entry changes: $D[3][2] : \infty \to 7$, realized by the path $3\to1\to2$.

(b) Row $k$ is $D[k][j]$, and the candidate update is $D[k][k] + D[k][j]$. Since $D[k][k] = 0$ (no negative cycle), that is $D[k][j]$ itself — no improvement possible. Column $k$ is symmetric: $D[i][k] + D[k][k] = D[i][k]$. This is why the in-place update is safe: the only values round $k$ *reads* are row $k$ and column $k$, and those are exactly the values round $k$ cannot modify.

(c) $n = 4$, $m = 7$.

| | cost |
|---|---|
| Floyd–Warshall | $n^3 = 64$ |
| 4 × Dijkstra with a heap | $4 \cdot (n+m)\log_2 n = 4 \cdot 11 \cdot 2 = 88$ |

Floyd–Warshall wins, and by more than the numbers suggest once you count constants: it is three nested loops over a contiguous array with no data structure, no priority queue and no allocation. At small $n$ it is very hard to beat.

(d) With average degree 10, $m = 5n$. Compare $n^3$ against $n \cdot (n + 5n)\log_2 n = 6n^2\log_2 n$:

$$n^3 < 6n^2 \log_2 n \iff n < 6\log_2 n.$$

That holds up to about $n \approx 30$ and fails beyond. So for a sparse graph the $n$-Dijkstras approach wins from roughly $n \approx 30$ onward, and by $n = 10^4$ it is faster by a factor of $\sim 10^2$. Floyd–Warshall's regime is **dense or small**; the phrase to remember is that it is $\Theta(n^3)$ *regardless of $m$*, so it wastes nothing on a dense graph and wastes everything on a sparse one.

**P3** (a) The graph is complete on 40 vertices: $n = 40$, $m = n(n-1) = 1560$.

| option | cost | detects |
|---|---|---|
| Bellman–Ford from a virtual source | $\Theta(nm) = 6.2\times 10^4$ | any negative cycle |
| Floyd–Warshall, then check the diagonal | $\Theta(n^3) = 6.4\times 10^4$ | any negative cycle |

The two are within 5% of each other here, which is what "dense" means. **Pick Floyd–Warshall**: it is the same cost, needs no virtual-source construction, and it also hands you every pairwise best conversion rate — which a trading system wants anyway. (If the rate matrix were sparse — say only 200 quoted pairs — Bellman–Ford would win by an order of magnitude, so the choice is genuinely about density and not a matter of taste.)

(b) Bellman–Ford's extra round only relaxes edges whose tail already has a finite $d$, and $d$ is finite only for vertices **reachable from the source**. A profitable cycle among currencies that cannot be reached from USD by any sequence of quoted trades leaves every one of its $d$ values at $\infty$, so no relaxation ever fires and the algorithm truthfully reports nothing — while the arbitrage exists.

The fix: **add a virtual source $z$ with a weight-0 edge to every vertex** and run Bellman–Ford from $z$. Now every vertex starts finite, every cycle is reachable, and the extra-round test sees all of them. (With Floyd–Warshall the issue does not arise — the diagonal test is not relative to any source.)

(c) **From Bellman–Ford:** keep `parent` pointers. When the extra round relaxes some edge into $v$, that $v$ is reachable from a negative cycle. Walk $n$ steps back along `parent` — you are then guaranteed to be *on* the cycle, since each step moves back along a path and $n$ steps cannot stay on a finite acyclic prefix — then keep walking back until you revisit a vertex. The vertices between the two visits are the cycle.

**From Floyd–Warshall:** find any $i$ with $D[i][i] < 0$; that gives a currency on a profitable cycle. Recovering the trades themselves needs the standard `next[i][j]` successor table maintained alongside $D$ (set `next[i][j] <- next[i][k]` whenever the entry improves); then walk $i \to \text{next} \to \cdots \to i$.

(d) Johnson's reweighting needs a potential $h$ with $h(v) \le h(u) + w(u,v)$ for every edge, so that $w'(u,v) = w(u,v) + h(u) - h(v) \ge 0$. Summing that requirement around any cycle makes the $h$ terms telescope to zero, so it forces every cycle's original weight to be $\ge 0$: **such an $h$ exists if and only if there is no negative cycle.**

That is fatal here, and not by accident. The quant wants speed on precisely the instances that contain a negative cycle — the arbitrage is the thing being looked for. Johnson's algorithm would detect the negative cycle in its own Bellman–Ford preprocessing step and then refuse to proceed, which means the "fast path" never runs on any interesting input. The honest summary: Johnson is an algorithm for *sparse all-pairs shortest paths when no negative cycle exists*, and this problem violates the precondition by construction.

</details>

## Flashback

**From Lesson 3.2 (Topological sort & SCC):** You have a DAG of build tasks.

(a) Give the DFS-based algorithm for topologically sorting it and its cost. (b) Someone adds a dependency that creates a cycle. How does the algorithm detect it? (c) A different team's build graph turns out to have genuine cycles that must be tolerated. What do you compute instead, and why is the result orderable? (d) Which of the two topological-sort algorithms extends naturally to running independent tasks in parallel?

<details>
<summary>Solution</summary>

(a) Run a DFS recording finish times, then list the vertices by **decreasing finish time**. $\Theta(n+m)$ with adjacency lists. Correctness: in a DAG, every edge $u\to v$ has $f[u] > f[v]$, because $v$ is either white (becomes a descendant, finishes first) or black (already finished) — grey is impossible without a cycle.

(b) A cycle shows up as a **back edge**: while scanning $u$'s edges the algorithm finds a $v$ that is *grey* — discovered but not yet finished, hence an ancestor still on the recursion stack. That test needs the three-colour marking; a two-state "visited" flag reports false cycles on forward and cross edges.

(c) Compute the **strongly connected components** (Kosaraju: DFS for finish times, then DFS the reversed graph in decreasing finish order) and treat each component as one atomic unit. The **condensation is always a DAG** — a cycle between two components would make all their vertices mutually reachable, so they would already be one component — and a DAG always has a topological order. So the units are orderable even though the tasks are not.

(d) **Kahn's algorithm.** It maintains in-degrees and emits vertices as they reach zero, so at any moment the *entire* set of in-degree-zero vertices is ready and can be dispatched simultaneously; the DFS version produces a single sequential order with no visible parallelism. This is why real build tools (make -j, Bazel) use the in-degree formulation.

</details>

## Connections

- **Backward:** Bellman–Ford is a dynamic program in disguise — "best path using at most $k$ edges" is [Lesson 2.5's](02-05-dynamic-programming-and-knapsack.md) subproblem indexing applied to path length, and the rounds are the table's dimension being filled. Floyd–Warshall's "intermediate vertices from $\{1..k\}$" is the same move with a cleverer index. Both drop [Lesson 3.3's](03-03-dijkstras-shortest-paths.md) greedy commitment and pay for it.
- **Forward:** Lesson 3.5's Ford–Fulkerson also repeats a simple step until nothing improves, and also needs an argument that "nothing improves" implies optimal. Lesson 4.1's reductions will use shortest-path problems as easy targets to reduce *to*.
- **Sideways:** Floyd–Warshall's inner line is $D[i][j] \leftarrow \min(D[i][j],\, D[i][k] + D[k][j])$, which is matrix multiplication with $(\min, +)$ in place of $(+, \times)$ — the **tropical semiring**. Boolean matrix multiplication in the same slot gives transitive closure (Warshall's original algorithm), and the connection to [linalg-refresher](../../linalg-refresher/syllabus.md)'s matrix powers is exact: $D^{(n)}$ is the $n$-th tropical power of the weight matrix. Distance-vector routing protocols are Bellman–Ford run by the network on itself.
