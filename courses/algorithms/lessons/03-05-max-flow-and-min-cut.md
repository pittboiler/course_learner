# Algorithms · Lesson 3.5: Max-flow / min-cut

> ⏱ ~15 min · Module 3: Graph algorithms · Builds on: [3.4 (Bellman–Ford & Floyd–Warshall)](03-04-bellman-ford-and-floyd-warshall.md) · Unlocks: 4.1 (P, NP & reductions)

## Why this matters

Max-flow is the closing act of Module 3 because it is the most *reusable* algorithm in the course. Bipartite matching, project selection, image segmentation, airline crew scheduling, baseball elimination, and the reliability of a network under edge failures are all max-flow problems wearing costumes — the skill is not running the algorithm, it is **recognizing the costume**.

It also gives you something the rest of the module does not: a **certificate**. Dijkstra tells you a distance and you either trust the proof or you don't. Max-flow hands you a *cut* — a set of edges whose total capacity equals your flow — and anyone can check in one pass that no more flow could possibly get through. That is a genuinely different epistemic situation, and it is the first instance in this course of a **duality**: two problems, one minimizing and one maximizing, whose optimal values are equal, each certifying the other.

The judgement content is: what makes a flow maximum (not "the algorithm stopped"), why the residual graph must allow you to **undo** flow, and how badly Ford–Fulkerson behaves if you pick augmenting paths carelessly — a case where the same algorithm is polynomial or not depending on a single unspecified choice.

## The idea

A **flow network** is a digraph with a capacity $c(u,v) \ge 0$ on each edge, a source $s$ and a sink $t$. A **flow** assigns each edge a value $0 \le f(u,v) \le c(u,v)$ such that every vertex other than $s$ and $t$ has **inflow = outflow**. Its **value** $|f|$ is the net outflow from $s$.

A **cut** is a partition of the vertices into $S \ni s$ and $T \ni t$; its **capacity** is the total capacity of the edges from $S$ to $T$ (edges going back don't count).

The first observation is easy and does all the work. Every unit of flow must cross from $S$ to $T$ at some point, so

$$|f| \le \operatorname{cap}(S,T) \quad\text{for every flow } f \text{ and every cut } (S,T).$$

So *any* cut is an upper bound on *any* flow. If you ever find a flow and a cut with the same number, both are optimal and you are done — no further search needed. The max-flow min-cut theorem says this always happens.

**Finding the flow.** Push flow along a path from $s$ to $t$ with spare capacity, and repeat. The catch is that greedy path choices can paint you into a corner, so the algorithm must be able to **take flow back**. That is what the **[residual graph](../reference.md#residual-graph-and-augmenting-path)** is for: after sending $f(u,v)$ units along $u\to v$, record

- a **forward** residual edge $u\to v$ with capacity $c(u,v) - f(u,v)$ — how much more you could send;
- a **backward** residual edge $v\to u$ with capacity $f(u,v)$ — how much you could *cancel*.

An **augmenting path** is any $s\to t$ path in the residual graph. Push its bottleneck along it and update. Repeat until no augmenting path exists — and at that moment, the vertices still reachable from $s$ in the residual graph are exactly the min cut.

The backward edges are not bookkeeping. Without them the algorithm is simply wrong, as the worked example shows.

## The formal version

**Definitions.** Flow conservation: for all $v \ne s,t$, $\ \sum_u f(u,v) = \sum_w f(v,w)$. Value: $|f| = \sum_v f(s,v) - \sum_v f(v,s)$.

**Lemma (weak duality).** For any flow $f$ and any cut $(S,T)$: $|f| = f(S,T) - f(T,S) \le f(S,T) \le \operatorname{cap}(S,T)$.

*Why:* summing conservation over all vertices of $S$ cancels every edge internal to $S$ and leaves the net flow crossing the boundary, which equals $|f|$. Then drop the non-negative $f(T,S)$ and bound $f(S,T)$ by capacity. $\blacksquare$

**Theorem ([max-flow min-cut](../reference.md#max-flow-min-cut-theorem)).** The following are equivalent for a flow $f$:

1. $f$ is a maximum flow.
2. The residual graph has no augmenting path.
3. $|f| = \operatorname{cap}(S,T)$ for some cut $(S,T)$.

*Proof sketch.* $1 \Rightarrow 2$: an augmenting path would let you push more. $2 \Rightarrow 3$: let $S^\ast$ be the vertices reachable from $s$ in the residual graph; $t \notin S^\ast$, so $(S^\ast, V\setminus S^\ast)$ is a cut. Every edge out of $S^\ast$ must be **saturated** (or its forward residual edge would extend $S^\ast$), and every edge into $S^\ast$ must carry **zero** flow (or its backward residual edge would). So $|f| = f(S^\ast,T) - 0 = \operatorname{cap}(S^\ast,T)$. $3 \Rightarrow 1$: weak duality. $\blacksquare$

That proof also *constructs* the min cut: one BFS in the residual graph after the algorithm stops.

**Ford–Fulkerson and its running time.**

```
FORD-FULKERSON(G, s, t):
    f <- 0
    while there is an s->t path P in the residual graph:
        b <- min residual capacity along P
        push b along P;  update residual capacities both ways
    return f
```

| path choice | bound | note |
|---|---|---|
| unspecified ("any path") | $O(E \cdot \lvert f^\ast \rvert)$ | only terminates for integer capacities; irrational capacities can loop forever |
| **shortest** path, by BFS (**Edmonds–Karp**) | $O(V E^2)$ | strongly polynomial — independent of capacities |
| Dinic's (blocking flows by level graph) | $O(V^2 E)$, and $O(E\sqrt{V})$ on unit capacities | the practical default |

Edmonds–Karp is Ford–Fulkerson with **one line specified**: find the augmenting path with BFS rather than DFS. That single choice converts a bound that depends on the *numeric values* of the capacities into one that does not.

**[Integrality theorem](../reference.md#integrality-theorem).** With integer capacities, some maximum flow is integral, and Ford–Fulkerson finds one. This is what makes flow a *combinatorial* tool: it means "half a worker assigned to half a shift" never comes out.

**[Bipartite matching as flow](../reference.md#bipartite-matching-as-flow).** Given a bipartite graph with parts $L, R$: add $s$ with capacity-1 edges to every $L$ vertex, capacity-1 edges $L\to R$ for each original edge, and capacity-1 edges from every $R$ vertex to $t$. By integrality, a max flow is a set of edge-disjoint paths, i.e. **a maximum matching**; and the min cut is a **minimum vertex cover** of the bipartite graph — that is König's theorem, obtained for free.

## Picture

![A flow network with source S on the left, vertices A and B in a middle column, C and D in a second middle column, and sink T on the right. Each edge is labelled with flow over capacity: S to A 6 of 8, S to B 6 of 6, A to B 1 of 3, A to C 5 of 5, B to D 7 of 7, C to D 0 of 2, C to T 5 of 6, D to T 7 of 8. A dashed vertical curve separates the source side S, A, B from the sink side C, D, T. The two edges crossing it, A to C and B to D, are drawn in red and are both saturated, with capacities 5 and 7 summing to 12.](assets/03-05-fig1.svg)

The network: $S\to A\,(8)$, $S\to B\,(6)$, $A\to B\,(3)$, $A\to C\,(5)$, $B\to D\,(7)$, $C\to D\,(2)$, $C\to T\,(6)$, $D\to T\,(8)$.

**The flow is 12 and the cut is 12, so both are optimal — and you can check that without trusting the algorithm.** Add the capacities of the two red edges: $5 + 7 = 12$. Every drop of flow must cross that boundary, so no flow can exceed 12. Separately, verify conservation at $A$, $B$, $C$, $D$ and read $|f| = 6+6 = 12$ off $S$. Two independent one-minute checks, and together they are a proof.

Two subtleties the picture makes concrete. **$S\to B$ is saturated (6/6) but is not in the cut**, because both its endpoints lie on the source side — saturation is a property of an edge, being *in the cut* is a property of an edge relative to a partition, and confusing them is the most common error when people are asked to exhibit a min cut. And **$C \to D$ carries no flow at all** despite having spare capacity; there is simply nothing upstream that can use it, which is what "the bottleneck is elsewhere" looks like.

## Worked examples

**Example 1 (mechanical): why the backward edges exist.** Take $s\to a\,(1000)$, $s\to b\,(1000)$, $a\to b\,(1)$, $a\to t\,(1000)$, $b\to t\,(1000)$. The max flow is obviously 2000: send 1000 down each side.

Now suppose the algorithm's first augmenting path is $s\to a\to b\to t$, bottleneck 1 (the middle edge). Flow is 1, and $a\to b$ is saturated. Without backward residual edges the algorithm can still push $999$ more along $s\to a\to t$ and $999$ along $s\to b \to t$ — total $1999$ — and then stop, one unit short, because $s\to a$ and $b\to t$ each have 1 unit left but no path connects them. **A wrong answer that terminates cleanly.**

With backward edges, the residual graph after that first push contains $b \to a$ with capacity 1, and the path $s \to b \to a \to t$ exists. Pushing 1 along it *cancels* the $a\to b$ flow and reroutes it. Total 2000 ✓.

The lesson generalizes: **the residual graph's backward edges are what make "no augmenting path" equivalent to "maximum"**. Drop them and the algorithm becomes a greedy heuristic with no guarantee.

Worse, the same instance shows Ford–Fulkerson's speed depends on choices nobody wrote down. If it alternates $s\,a\,b\,t$ and $s\,b\,a\,t$ forever, each augmentation pushes exactly **1 unit**, so it takes **2000 augmentations** on a 5-edge graph. Edmonds–Karp's BFS finds the 2-edge paths first and finishes in **2**.

**Example 2 (why you'd care): scheduling as matching.** Five engineers must cover five on-call shifts; each can only take shifts they are trained for:

$$w_1{:}\{A,B\},\quad w_2{:}\{B\},\quad w_3{:}\{B\},\quad w_4{:}\{C,D\},\quad w_5{:}\{D,E\}.$$

Build the flow network ($s \to w_i$, $w_i \to$ their shifts, shift $\to t$, all capacities 1) and the max flow is **4**, not 5 — for example $w_1{\to}A$, $w_2{\to}B$, $w_4{\to}C$, $w_5{\to}D$, with $w_3$ unassigned and shift $E$ uncovered.

The interesting part is **why you should believe 4 is the best possible**, and the min cut says it in one line. The residual-reachable set is $\{s, w_2, w_3, B\}$, giving a cut of capacity 4. Read it as a statement about the problem: **$w_2$ and $w_3$ are both qualified only for shift $B$**, so at most one of them can ever be scheduled. That is a **Hall violator** — a set of workers whose combined skills cover fewer shifts than there are workers — and the min cut *found it for you*. You can hand that sentence to a manager; you cannot hand them "the algorithm returned 4."

## Watch out

- **You might think** a flow is maximum when no *simple* path from $s$ to $t$ has spare capacity — **but actually** the test is in the **residual** graph, which contains backward edges. The 2000-unit example above stalls at 1999 under the wrong test.
- **You might think** saturated edges form the min cut — **but actually** a cut is defined by a *vertex partition*; every cut edge is saturated at optimum, but not every saturated edge is a cut edge ($S\to B$ in the figure). To exhibit a min cut, BFS the residual graph from $s$ and take the edges leaving the reachable set.
- **You might think** Ford–Fulkerson is polynomial — **but actually** with unspecified path choice it is $O(E\cdot|f^\ast|)$, which is **pseudo-polynomial** in exactly [Lesson 2.5's](02-05-dynamic-programming-and-knapsack.md) sense: multiply every capacity by 1000 and it does 1000× the work on the same-shaped problem. Specify BFS (Edmonds–Karp) and the dependence on capacities vanishes entirely.
- **You might think** flow values could come out fractional — **but actually** with integer capacities the integrality theorem guarantees an integral maximum flow, which is what licenses every combinatorial application. Fractional capacities break the *termination* argument, not just the neatness: there are famous 10-vertex networks with irrational capacities on which Ford–Fulkerson runs forever and converges to the wrong value.
- **You might think** the max flow is unique — **but actually** typically neither the flow nor the min cut is unique; only the **value** is. Code that depends on which maximum flow it received has an undiagnosed bug.

## One-liner

> Push flow along any residual path until none remains; the vertices still reachable from the source then form a cut whose capacity equals your flow — which is a proof, not a promise.

## Problems

**P1 (🟢)** For the network $S\to A\,(7)$, $S\to B\,(6)$, $A\to B\,(2)$, $A\to C\,(4)$, $B\to C\,(4)$, $B\to T\,(8)$, $C\to T\,(10)$:

(a) Find a maximum flow by augmenting paths, listing each path and its bottleneck. (b) State its value. (c) Give a minimum cut and its capacity. (d) The cut $(\{S\}, \text{rest})$ has capacity 13. Explain why that does *not* certify a flow of 13.

**P2 (🟡)** A colleague implements Ford–Fulkerson but omits the backward residual edges, "since flow only ever moves forward."

(a) On $s\to a\,(1000)$, $s\to b\,(1000)$, $a\to b\,(1)$, $a\to t\,(1000)$, $b\to t\,(1000)$, give a run of their code that returns 1999, and say why it cannot continue. (b) Show how the correct residual graph reaches 2000. (c) Their next version has backward edges but picks augmenting paths by DFS. On the same network, give a path choice that takes 2000 iterations. (d) State the one-line change that fixes (c) and the bound it buys.

**P3 (🔴)** A hospital must assign 5 residents to 5 rotations. Resident $r_1$ is qualified for rotations $\{A,B\}$; $r_2$ for $\{B\}$; $r_3$ for $\{B\}$; $r_4$ for $\{C,D\}$; $r_5$ for $\{D,E\}$.

(a) Model this as a flow network and state the maximum number of residents that can be placed. (b) Exhibit a minimum cut and translate it into a sentence a hospital administrator would understand. (c) The administrator asks: "if we can retrain exactly one resident for exactly one extra rotation, can we place all five?" Answer it, using the cut. (d) A second administrator proposes instead solving this by brute force over all assignments, "since 5 residents is tiny." Give the count, then say at what size that stops being reasonable and what the flow formulation costs by comparison.

<details>
<summary>Solutions</summary>

**P1** (a) One valid run (BFS order, shortest paths first):

| path | bottleneck | why |
|---|---|---|
| $S\to B\to T$ | 6 | $\min(6, 8) = 6$; saturates $S\to B$ |
| $S\to A\to C\to T$ | 4 | $\min(7, 4, 10) = 4$; saturates $A\to C$ |
| $S\to A\to B\to T$ | 2 | $\min(3, 2, 2) = 2$; saturates $A\to B$, and $B\to T$ now carries $6+2 = 8$ of 8 |

No residual $S\to t$ path remains: from $S$ we can still reach $A$ (residual $7-6 = 1$), but $A$'s outgoing edges $A\to B$ and $A\to C$ are both saturated.

(b) $|f| = 6 + 4 + 2 = \mathbf{12}$.

(c) Residual-reachable from $S$: $\{S, A\}$. The edges leaving it are

$$S\to B\ (6), \qquad A\to B\ (2), \qquad A\to C\ (4), \qquad\text{capacity } 6+2+4 = \mathbf{12}.$$

Flow 12 = cut 12, so both are optimal ✓.

(d) Because a cut is an **upper bound**, not a lower one: $|f| \le \operatorname{cap}(S,T)$ for *every* cut. A cut of capacity 13 says only "no flow exceeds 13" — perfectly true and not tight. Certification requires a cut whose capacity **equals** the flow you found, and by the theorem the *minimum* cut is the one that does. Finding a cut of 13 tells you to keep looking (either for more flow or for a smaller cut), not that you are finished.

**P2** (a) Their run: first augment along $s\to a\to b\to t$ with bottleneck $\min(1000,1,1000) = 1$. Now $a\to b$ is saturated. Then $s\to a\to t$ with bottleneck $\min(999, 1000) = 999$, and $s\to b\to t$ with bottleneck $\min(1000, 999) = 999$. Total $1 + 999 + 999 = \mathbf{1999}$.

It cannot continue because the only remaining capacities are $s\to a$: 0 left... precisely, $s\to a$ has $1000 - 1000 = 0$, $s\to b$ has $1000-999 = 1$, $b\to t$ has $1000 - 1000 = 0$, $a\to t$ has 1 left, and $a\to b$ has 0. So from $s$ the only forward move is to $b$, and $b$'s only out-edge $b\to t$ is full. No forward path exists, and their code stops — one unit short of optimal, with no error and no warning.

(b) With backward edges, after the first augmentation the residual graph contains $b\to a$ with capacity 1 (the flow currently on $a\to b$). At the stuck state above, the path

$$s \to b \ (1 \text{ left}) \ \to a \ (\text{backward, } 1) \ \to t \ (1 \text{ left})$$

exists and has bottleneck 1. Pushing it **cancels** the single unit on $a\to b$ and reroutes it, giving $|f| = 2000$ ✓ — the obvious answer of 1000 down each branch.

(c) Alternate the two paths that go through the middle edge:

$$s\to a\to b\to t \ (\text{bottleneck } 1), \qquad s\to b\to a\to t \ (\text{bottleneck } 1, \text{ using the backward } b\to a),$$

over and over. Each pair of augmentations moves 2 units and restores $a\to b$ to its previous state, so reaching 2000 takes **2000 augmentations** on a graph with 5 edges. The algorithm is correct and its running time is proportional to the *capacity value*, not the graph size — pseudo-polynomial, exactly as in knapsack.

(d) **Find the augmenting path by BFS instead of DFS** — that is Edmonds–Karp. BFS always returns a *shortest* residual path, so it takes $s\to a\to t$ and $s\to b\to t$ (2 edges) before it would ever consider the 3-edge detour, and finishes in **2 augmentations**. The bound becomes $O(VE^2)$, which mentions no capacity at all: multiplying every capacity by $10^6$ changes nothing.

**P3** (a) Network: $s \to r_i$ with capacity 1 for each resident; $r_i \to$ each qualified rotation with capacity 1; rotation $\to t$ with capacity 1. By integrality, a maximum flow is a maximum matching.

**Maximum = 4.** One optimum: $r_1{\to}A$, $r_2{\to}B$, $r_4{\to}C$, $r_5{\to}D$. Resident $r_3$ is unplaced and rotation $E$ is uncovered.

(b) After the flow above, the residual-reachable set from $s$ is $\{s,\ r_2,\ r_3,\ B\}$, and the cut edges are

$$s\to r_1,\qquad s\to r_4,\qquad s\to r_5,\qquad B\to t,$$

capacity $1+1+1+1 = \mathbf{4}$ = the flow ✓.

In English: **residents $r_2$ and $r_3$ are qualified for rotation $B$ and nothing else, so at most one of them can ever be placed — and no scheduling cleverness will change that.** The cut is a Hall violator ($|\{r_2,r_3\}| = 2 > 1 = |N(\{r_2,r_3\})|$) dressed as a set of edges. That sentence, not the number 4, is the useful output.

(c) **Yes — retrain $r_2$ or $r_3$ for rotation $E$** (or any rotation other than $B$, $C$ or $D$). Say $r_3$ gains $E$. Then $r_1{\to}A$, $r_2{\to}B$, $r_3{\to}E$, $r_4{\to}C$, $r_5{\to}D$ places all five.

The cut told you where to spend the retraining budget: the bottleneck is exactly the deficiency $|\{r_2,r_3\}| - |N(\{r_2,r_3\})| = 1$, so **one** new qualification, given to a resident *inside* the violating set and pointing at a rotation *outside* its neighbourhood, closes it. Retraining $r_1$, or retraining $r_3$ for $C$ (already covered by $r_4$, freeing nothing), would not help — which is precisely the kind of question a bare matching size cannot answer.

(d) Brute force over injective assignments of 5 residents to 5 rotations is $5! = 120$ — trivially fine. But the count is $n!$, and $n!$ is worse than exponential:

| $n$ | $n!$ | flow, $O(VE^2)$ with $V = 2n+2$, $E \le n^2 + 2n$ |
|---|---|---|
| 5 | 120 | $1.5\times 10^4$ |
| 12 | $4.8\times 10^8$ | $7.3\times 10^5$ |
| 20 | $2.4\times 10^{18}$ | $8.1\times 10^6$ |
| 60 | $8.3\times 10^{81}$ | $1.7\times 10^9$ |

Brute force is *cheaper* at $n=5$ — the flow machinery has real constant-factor overhead, and the administrator is not being silly about this instance. It becomes hopeless somewhere around $n = 12$ to $15$, i.e. one small department. Meanwhile the flow formulation is polynomial and, for unit capacities, Dinic's algorithm gives $O(E\sqrt V)$ — the Hopcroft–Karp bound — which handles thousands of residents.

And the asymptotics are not even the main argument. Brute force returns a number; the flow returns **a certificate and a diagnosis** ("retrain one of $r_2, r_3$"), which is what the problem was actually for.

</details>

## Flashback

**From Lesson 3.3 (Dijkstra's shortest paths):** You must compute single-source shortest paths.

(a) State Dijkstra's precondition and where the correctness proof uses it. (b) Give a three-vertex graph with no cycle at all on which Dijkstra returns a wrong distance. (c) A colleague proposes making the weights non-negative by adding a constant. Say why that fails and what the correct reweighting is. (d) What does the correct reweighting require of the graph?

<details>
<summary>Solution</summary>

(a) **Every edge weight must be $\ge 0$.** The proof uses it at exactly one step: it needs $\delta(s,y) \le \delta(s,u)$ where $y$ lies on a shortest path to $u$ — i.e. **a prefix of a shortest path is no longer than the whole path**. With a negative edge downstream, a prefix can be *longer* than the whole, and the greedy commitment to the minimum tentative distance becomes unjustified.

(b) $S\to A\,(2)$, $S\to B\,(3)$, $B\to A\,(-2)$. This is a DAG — no cycle, negative or otherwise. Dijkstra extracts $A$ at 2 (the smallest tentative distance) and seals it; the true distance is $3 - 2 = 1$ via $B$. The reported answer is wrong by 1 and the algorithm reports no problem.

(c) Adding a constant $C$ to every edge adds $C \times (\text{hop count})$ to a path, so it penalizes long paths more than short ones and can change which path is shortest — e.g. on $S\to A\,(1)$, $A\to T\,(-2)$, $S\to T\,(0)$ a shift of 2 makes the direct edge win when it should not.

The correct move is **Johnson's reweighting**: pick a potential $h$ on vertices and set $w'(u,v) = w(u,v) + h(u) - h(v)$. The $h$ terms telescope along any path, so every path from $u$ to $v$ shifts by the same $h(u)-h(v)$ regardless of its length, and the ranking is preserved.

(d) It requires $h(v) \le h(u) + w(u,v)$ on every edge (so that $w' \ge 0$), and summing that around a cycle forces every cycle to have non-negative weight. So Johnson's reweighting exists **iff the graph has no negative cycle** — and $h$ is obtained by one Bellman–Ford run from a virtual source joined to every vertex with weight-0 edges.

</details>

## Connections

- **Backward:** Ford–Fulkerson's loop is [Lesson 3.1's](03-01-graph-search-bfs-and-dfs.md) traversal used as a subroutine, and Edmonds–Karp's whole improvement is *which* traversal. The pseudo-polynomial trap is [Lesson 2.5's](02-05-dynamic-programming-and-knapsack.md), and the "repeat a local improvement until nothing improves, then argue optimality" shape is [Lesson 3.4's](03-04-bellman-ford-and-floyd-warshall.md) Bellman–Ford with a duality proof attached.
- **Forward:** Module 4 opens with problems that have *no* known efficient algorithm, and max-flow is the last and best example of the opposite — a problem that looked combinatorially hopeless until the right dual object was found. Lesson 4.3's vertex-cover 2-approximation lives right next to the *exact* minimum vertex cover that min-cut gives you on bipartite graphs, and the contrast between those two is worth holding onto: bipartite is easy, general is NP-hard.
- **Sideways:** max-flow min-cut is the combinatorial case of **linear-programming duality**, the organizing theorem of [operations-research](../../operations-research/syllabus.md); the flow LP's dual is literally the cut LP, and integrality here is what makes the fractional optimum integral. The same duality is [graph-theory](../../graph-theory/syllabus.md)'s Menger's theorem (max edge-disjoint paths = min edge cut), and in [machine-learning](../../machine-learning/syllabus.md) it is the basis of graph-cut image segmentation, where pixels are vertices and the min cut is the object boundary.
