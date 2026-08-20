# Graph Theory · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Graph theory is dots, lines, and one recurring plot twist: **a thing you can build
is capped by a thing that blocks it, and the two are equal.** Matchings meet
covers, flows meet cuts, disjoint paths meet separators. The rest of the subject
is bookkeeping — degrees, trees, faces, colors, eigenvalues — that turns a picture
into a proof. Mid-problem, the two tables you'll actually reach for are
[Standard families at a glance](#standard-families-at-a-glance) (what is $K_{3,3}$
a counterexample *to*, again?) and
[Theorem conditions: necessary vs sufficient](#theorem-conditions-necessary-vs-sufficient)
(does Dirac failing mean anything? — no).

## Notation

| Symbol | Means | First used |
|---|---|---|
| $G=(V,E)$, $n$, $m$ | a graph: dots $V$ and joined pairs $E$; $n=\lvert V\rvert$, $m=\lvert E\rvert$ | [1.1](lessons/01-01-degree-and-handshake-lemma.md) |
| $\deg(v)$ | how many edge-ends stick out of $v$ (a loop contributes $2$) | [1.1](lessons/01-01-degree-and-handshake-lemma.md) |
| $\Delta$, $\delta$ | largest and smallest degree in the graph | [3.3](lessons/03-03-coloring-chromatic-number.md), [4.3](lessons/04-03-menger-flows-matching.md) |
| $A$ | adjacency matrix — a $0/1$ grid, $1$ where two vertices are joined | [1.2](lessons/01-02-representing-graphs-isomorphism.md) |
| $N(v)$, $N(S)$ | neighbors of $v$; the **union** of the neighbors of everything in $S$ | [1.2](lessons/01-02-representing-graphs-isomorphism.md), [2.3](lessons/02-03-bipartite-matching-hall.md) |
| $G \cong H$ | isomorphic — same graph wearing different name tags | [1.2](lessons/01-02-representing-graphs-isomorphism.md) |
| $\bar G$ | complement — same dots, "joined" and "not joined" swapped | [1.2](lessons/01-02-representing-graphs-isomorphism.md) |
| $K_n,\ P_n,\ C_n,\ K_{m,n},\ Q_n$ | the standard families — see [the table below](#standard-families-at-a-glance) | [1.2](lessons/01-02-representing-graphs-isomorphism.md) |
| $d(u,v)$ | distance — fewest **edges** on any route (not vertices); $\infty$ across components | [1.3](lessons/01-03-walks-paths-connectivity.md) |
| $c(G)$ | number of connected components | [1.3](lessons/01-03-walks-paths-connectivity.md) |
| $G-v$, $G-e$ | delete a vertex (and its edges), or delete just an edge | [1.3](lessons/01-03-walks-paths-connectivity.md) |
| $w(e)$, $w(T)$ | edge weight (cost), and the total weight of a tree | [2.2](lessons/02-02-spanning-trees-mst.md) |
| $M$, $M \mathbin{\triangle} M^{\ast}$ | a matching; the symmetric difference of two matchings (paths and even cycles) | [2.3](lessons/02-03-bipartite-matching-hall.md) |
| $\nu(G)$ | matching number — size of the largest matching (the *build*) | [2.4](lessons/02-04-konig-covers.md) |
| $\tau(G)$ | vertex-cover number — size of the smallest cover (the *block*) | [2.4](lessons/02-04-konig-covers.md) |
| $\alpha(G)$ | independence number — largest set of pairwise non-adjacent vertices | [2.4](lessons/02-04-konig-covers.md) |
| $\lvert F\rvert$, $\deg(f)$ | faces of a plane drawing (the outer one counts) and edge-sides around a face | [3.1](lessons/03-01-planar-euler-formula.md) |
| $\chi(G)$, $\omega(G)$ | chromatic number (fewest colors) and clique number (biggest complete subgraph) | [3.3](lessons/03-03-coloring-chromatic-number.md) |
| $P(G,k)$ | chromatic polynomial — the **number** of proper $k$-colorings | [3.4](lessons/03-04-chromatic-polynomial.md) |
| $G/e$ | contraction — delete $e$, fuse its endpoints, collapse parallel edges | [3.4](lessons/03-04-chromatic-polynomial.md) |
| $c(e)$, $f(e)$, $\lvert f\rvert$ | capacity of a pipe, flow through it, and the value of the whole flow | [4.1](lessons/04-01-flow-networks-maxflow-mincut.md) |
| $\mathrm{cap}(S,T)$ | capacity of an $s$–$t$ cut — **forward** crossing edges only | [4.1](lessons/04-01-flow-networks-maxflow-mincut.md) |
| $G_f$ | residual graph — bookkeeping of every legal push-forward or cancel-back move | [4.2](lessons/04-02-augmenting-paths-ford-fulkerson.md) |
| $\lambda(G)$, $\kappa(G)$ | edge connectivity (weakest cable bundle) and vertex connectivity (weakest relay set) | [4.3](lessons/04-03-menger-flows-matching.md) |
| $\lambda_1 \ge \cdots \ge \lambda_n$ | the adjacency spectrum, sorted top-down | [5.1](lessons/05-01-adjacency-spectrum.md) |
| $L = D - A$ | Laplacian: degrees on the diagonal, $-1$ per edge off it | [5.2](lessons/05-02-laplacian-matrix-tree.md) |
| $\lambda_2$ | for the **Laplacian**, sorted bottom-up: the algebraic connectivity | [5.2](lessons/05-02-laplacian-matrix-tree.md) |
| $R(s,t)$ | Ramsey number — group size that forces a red $K_s$ or a blue $K_t$ | [5.3](lessons/05-03-extremal-ramsey.md) |
| $T(n,r)$ | Turán graph — complete $r$-partite with near-equal parts | [5.3](lessons/05-03-extremal-ramsey.md) |

**Two symbols are overloaded in this course** (see [Symbol collisions](#symbol-collisions)):
$\tau$ is the vertex-cover number in Module 2 and the *spanning-tree count* in
Module 5; $\lambda$ is edge connectivity in Module 4 and an *eigenvalue* in Module 5.
Both times, the module tells you which.

## Definitions

### Graph

Dots plus a choice of which pairs of dots are joined — the minimal model of
"things and connections."

$$G = (V,E), \qquad e = \{u,v\} \in E \ \text{ with } u \neq v$$

A **simple** graph forbids loops (an edge $\{v,v\}$) and parallel edges; a
**multigraph** allows both. Unless stated otherwise, "graph" means simple.

*Introduced:* [1.1](lessons/01-01-degree-and-handshake-lemma.md)

### Degree

How many edges *touch* $v$ — not how many neighbors it has. The two coincide only
in a simple graph.

$$\deg(v) = \#\{e \in E : v \in e\}, \qquad \text{a loop at } v \text{ counts } 2$$

*Introduced:* [1.1](lessons/01-01-degree-and-handshake-lemma.md)

### Adjacency matrix

The graph's wiring table as a matrix: symmetric, zero diagonal, and each row sums
to that vertex's degree.

$$A_{ij} = \begin{cases} 1 & v_iv_j \in E \\ 0 & \text{otherwise}\end{cases}$$

A graph has one adjacency matrix **per vertex ordering**; relabeling conjugates it,
$A \mapsto PAP^{\mathsf T}$ for a permutation matrix $P$.

*Introduced:* [1.2](lessons/01-02-representing-graphs-isomorphism.md)

### Isomorphism

A perfect renaming of the vertices that carries edges onto edges and non-edges
onto non-edges.

$$\varphi: V(G) \to V(H) \text{ bijective, with } uv \in E(G) \iff \varphi(u)\varphi(v) \in E(H)$$

An **invariant** is any quantity preserved by every isomorphism: $n$, $m$, the
degree sequence, triangle count, component count, girth, the spectrum. Invariants
prove *difference*, never sameness.

*Introduced:* [1.2](lessons/01-02-representing-graphs-isomorphism.md)

### Complement

Same dots, opposite edges: every pair is joined in exactly one of $G$ and $\bar G$.

$$m(G) + m(\bar G) = \binom{n}{2}$$

*Introduced:* [1.2](lessons/01-02-representing-graphs-isomorphism.md)

### Walk, trail, path, cycle

Four levels of discipline on a journey through the graph, from "repeat anything"
to "repeat nothing and close up."

| Object | Rule | Note |
|---|---|---|
| walk | any sequence of edges end-to-end | length $=$ number of edges |
| trail | no repeated **edge** (vertices may repeat) | Euler's object |
| path | no repeated **vertex** (hence no repeated edge) | every path is a trail |
| cycle | a closed path, length $\ge 3$ | Hamilton's object |

*Introduced:* [1.3](lessons/01-03-walks-paths-connectivity.md)

### Connected, components

Reachability ("some walk joins $u$ to $v$") is an equivalence relation; its classes
are the **components**, and the graph is **connected** when there is exactly one.

*Introduced:* [1.3](lessons/01-03-walks-paths-connectivity.md)

### Cut vertex, bridge

The single point of failure: delete it and a connected piece falls apart.

$$v \text{ is a cut vertex} \iff c(G-v) > c(G), \qquad e \text{ is a bridge} \iff c(G-e) > c(G)$$

An edge is a bridge **iff** it lies on no cycle.

*Introduced:* [1.3](lessons/01-03-walks-paths-connectivity.md)

### Euler trail, Euler circuit

A route that uses every **edge** exactly once; a *circuit* is one that also returns
home. A graph with an Euler circuit is **Eulerian**.

*Introduced:* [1.4](lessons/01-04-eulerian-hamiltonian.md)

### Hamiltonian path, Hamiltonian cycle

A route that visits every **vertex** exactly once; a *cycle* is one that closes up.
Deciding this is NP-hard — there is no clean characterization, only sufficient
conditions.

*Introduced:* [1.4](lessons/01-04-eulerian-hamiltonian.md)

### Tree

Connectivity with nothing to spare: one connected piece, no cycles, exactly one
route between any two vertices. A **leaf** is a degree-1 vertex; a **forest** is a
disjoint union of trees.

$$\text{tree on } n \text{ vertices} \iff \text{connected and acyclic} \implies \lvert E\rvert = n-1$$

*Introduced:* [2.1](lessons/02-01-trees.md)

### Spanning tree

A tree that keeps **all** of $G$'s vertices and just enough of its edges to stay
connected — necessarily $n-1$ of them.

*Introduced:* [2.2](lessons/02-02-spanning-trees-mst.md)

### Minimum spanning tree (MST)

Among all spanning trees of a weighted graph, the one of least total weight.

$$w(T) = \sum_{e \in T} w(e), \qquad \text{MST} = \arg\min_T w(T)$$

*Introduced:* [2.2](lessons/02-02-spanning-trees-mst.md)

### Bipartite graph

The vertices split into two teams with every edge crossing between them — never
within one.

$$V = X \cup Y, \quad \text{every } e \in E \text{ has one end in } X \text{ and one in } Y$$

A graph is bipartite **iff** it contains no odd cycle.

*Introduced:* [2.3](lessons/02-03-bipartite-matching-hall.md)

### Matching

A set of edges, no two sharing an endpoint — a pairing where nobody is
double-booked. A vertex on a matching edge is **saturated**.

- **Perfect:** saturates every vertex.
- **Maximum:** no matching has more edges.
- **Maximal:** you can't add another edge — much weaker, and often much smaller.

*Introduced:* [2.3](lessons/02-03-bipartite-matching-hall.md)

### Augmenting path (matching)

An alternating non-$M$ / $M$ / non-$M$ … path whose **both** endpoints are
unsaturated. Flipping it raises $\lvert M\rvert$ by one, so its existence is a
certificate that $M$ is not maximum.

*Introduced:* [2.3](lessons/02-03-bipartite-matching-hall.md)

### Vertex cover

A set of **vertices** touching every edge — the blocker to a matching's builder.
(Not an *edge* cover, which is a set of edges touching every vertex.)

*Introduced:* [2.4](lessons/02-04-konig-covers.md)

### Independent set

A set of vertices with no edge between any two — exactly the complement of a
vertex cover, and exactly one color class of a proper coloring.

*Introduced:* [2.4](lessons/02-04-konig-covers.md)

### Planar graph, plane graph, face

**Planar** = *can* be drawn with no crossings. A **plane graph** is one such
drawing. The **faces** are the regions the drawing cuts the paper into — including
the unbounded **outer face**, which always counts.

*Introduced:* [3.1](lessons/03-01-planar-euler-formula.md)

### Subdivision

$H$ stretched: replace each edge of $H$ by a path through fresh degree-2
pass-through vertices. Subdividing never changes planarity.

*Introduced:* [3.2](lessons/03-02-kuratowski-wagner.md)

### Minor

$H$ carved out of $G$ by deleting edges, deleting vertices, and **contracting**
edges (fusing two adjacent vertices into one). Looser than "subgraph" — contracting
is not deleting.

$$G \text{ contains an } H\text{-subdivision} \implies H \text{ is a minor of } G \qquad (\text{converse false})$$

*Introduced:* [3.2](lessons/03-02-kuratowski-wagner.md)

### Proper coloring, chromatic number

Paint the vertices so no edge is monochromatic; $\chi(G)$ is the fewest colors that
works. Equivalently: the fewest independent sets that partition $V$.

$$c: V \to \{1,\dots,k\} \text{ with } c(u) \neq c(v) \text{ whenever } uv \in E$$

*Introduced:* [3.3](lessons/03-03-coloring-chromatic-number.md)

### Chromatic polynomial

Not "is there a coloring" but "how many" — and the count is always a polynomial
in $k$.

$$P(G,k) = \#\{\text{proper colorings of } G \text{ from a palette of } k\}$$

Colorings are **labeled**: red/blue and blue/red on one edge are two different
colorings. Never divide out by permutations of the palette.

*Introduced:* [3.4](lessons/03-04-chromatic-polynomial.md)

### Flow, value

Water through one-way pipes: never overfill a pipe, and at every junction other
than $s$ and $t$, in equals out.

$$0 \le f(e) \le c(e), \qquad \sum_{e \text{ into } v} f(e) = \sum_{e \text{ out of } v} f(e) \ \ (v \neq s,t)$$
$$\lvert f\rvert = \sum_{e \text{ out of } s} f(e) - \sum_{e \text{ into } s} f(e)$$

*Introduced:* [4.1](lessons/04-01-flow-networks-maxflow-mincut.md)

### s–t cut

A split of the vertices with $s$ on one side and $t$ on the other. Its capacity
sums **only the forward-crossing** edges; backward edges contribute nothing.

$$\mathrm{cap}(S,T) = \sum_{u \in S,\ w \in T,\ (u,w) \in E} c(u,w)$$

*Introduced:* [4.1](lessons/04-01-flow-networks-maxflow-mincut.md)

### Residual graph

A ledger, not a network: for each edge it records how much more you can push
($c(e)-f(e)$, forward) and how much you can take back ($f(e)$, backward).
A backward arc means *re-routing committed flow*, not sending water upstream.

*Introduced:* [4.2](lessons/04-02-augmenting-paths-ford-fulkerson.md)

### Augmenting path (flow)

Any directed $s \to t$ path in $G_f$. Its **bottleneck** is the smallest residual
capacity on it — that is exactly how much you push.

*Introduced:* [4.2](lessons/04-02-augmenting-paths-ford-fulkerson.md)

### Edge and vertex connectivity

How many cables, or how many relay stations, an adversary must destroy to cut the
graph.

$$\kappa(G) \le \lambda(G) \le \delta(G)$$

Local versions $\lambda(s,t)$ and $\kappa(s,t)$ ask the same for one fixed pair.
Two paths are **edge-disjoint** if they share no edge, **internally disjoint** if
they share no vertex besides $s$ and $t$ (a strictly stronger demand).

*Introduced:* [4.3](lessons/04-03-menger-flows-matching.md)

### Spectrum

The $n$ eigenvalues of $A$. Because $A$ is real symmetric they are all real, and
because relabeling only conjugates $A$ by a permutation matrix, the spectrum is a
genuine isomorphism invariant.

*Introduced:* [5.1](lessons/05-01-adjacency-spectrum.md)

### Laplacian

$L = D - A$: degrees positive on the diagonal, $-1$ for each edge off it. Every row
sums to zero, so $L\mathbf 1 = \mathbf 0$ and $0$ is always an eigenvalue.

$$x^{\mathsf T} L x = \sum_{(u,v) \in E} (x_u - x_v)^2 \ \ge 0$$

*Introduced:* [5.2](lessons/05-02-laplacian-matrix-tree.md)

### Algebraic connectivity

The second-smallest Laplacian eigenvalue $\lambda_2$ (the Fiedler value): strictly
positive exactly when the graph is connected, and larger when it is harder to cut.

*Introduced:* [5.2](lessons/05-02-laplacian-matrix-tree.md)

### Ramsey number

The group size past which order is unavoidable: $R(s,t)$ is the least $N$ such that
**every** red/blue edge-coloring of $K_N$ hides a red $K_s$ or a blue $K_t$.

*Introduced:* [5.3](lessons/05-03-extremal-ramsey.md)

## Formulas and rules

### Standard families at a glance

The cast you should name reflexively — and, in the last column, what each one is
the canonical example (or counterexample) *for*.

| Family | $\lvert V\rvert$ | $\lvert E\rvert$ | Degrees | Key facts | The example it *is* |
|---|---|---|---|---|---|
| $K_n$ (complete) | $n$ | $\binom{n}{2}$ | $(n-1)$-regular | $\chi = n$; Eulerian iff $n$ is odd; $n^{n-2}$ spanning trees; spectrum $n-1$ once and $-1$ with multiplicity $n-1$ | every bound tight at once: $\chi = \Delta+1$, $\chi = \omega$, and Brooks' first exception. $K_5$ is forbidden minor #1 |
| $K_{m,n}$ (complete bipartite) | $m+n$ | $mn$ | $n$ on the $m$-side, $m$ on the $n$-side | bipartite, so $\chi = 2$ and triangle-free; $\overline{K_{m,n}} = K_m \cup K_n$; $k$-regular bipartite always has a perfect matching | $K_{3,3}$ is forbidden minor #2 — and the graph that **passes** $\lvert E\rvert \le 3\lvert V\rvert-6$ yet is nonplanar |
| $C_n$ (cycle, $n \ge 3$) | $n$ | $n$ | $2$-regular | Euler circuit always; Hamiltonian by definition; $n$ spanning trees; $\chi = 2$ if $n$ even, $3$ if $n$ odd | odd cycles are *the* non-bipartite obstruction: König fails at $C_5$ ($\nu = 2 < 3 = \tau$), and they are Brooks' second exception |
| $P_n$ (path) | $n$ | $n-1$ | two ends of degree $1$, the rest $2$ | a tree; bipartite; $P_4$ is self-complementary | the deletion half of deletion–contraction: $C_n - e = P_n$ |
| tree on $n$ vertices | $n$ | $n-1$ | at least two leaves | unique path between any two vertices; every edge a bridge; $P(T,k) = k(k-1)^{n-1}$ | the leanest connected graph — and the base case of Euler's formula ($\lvert F\rvert = 1$) |
| $Q_n$ (hypercube) | $2^n$ | $n\,2^{n-1}$ | $n$-regular | bipartite (bit-sum parity); $Q_3$ has $8$ vertices, $12$ edges, $6$ faces | Dirac's silence: $Q_3$ has $\deg = 3 < 4 = n/2$, yet a Gray code gives a Hamiltonian cycle. No Euler circuit (all $8$ degrees odd) |
| Petersen | $10$ | $15$ | $3$-regular | girth $5$, so triangle-free; $\chi = 3$ (Brooks); nonplanar | nonplanarity the edge bound can't see ($15 \le 24$) — only Kuratowski catches it. Has a $K_5$ **minor** but no $K_5$ **subgraph** |
| $W_5$ (wheel) | $6$ | $10$ | hub $5$, rim $3$ | $\omega = 3$ but $\chi = 4$; $\alpha = 2$ | the clique bound is a floor, not the answer |
| $T(n,r)$ (Turán) | $n$ | $\le \left(1-\tfrac1r\right)\tfrac{n^2}{2}$, with equality when $r$ divides $n$ | complete $r$-partite, near-equal parts | contains no $K_{r+1}$ | the unique extremal graph for Turán; $T(n,2) = K_{\lfloor n/2\rfloor,\lceil n/2\rceil}$ is Mantel's champion |

*From* [1.2](lessons/01-02-representing-graphs-isomorphism.md), [1.4](lessons/01-04-eulerian-hamiltonian.md), [2.1](lessons/02-01-trees.md), [3.2](lessons/03-02-kuratowski-wagner.md), [3.3](lessons/03-03-coloring-chromatic-number.md), [5.3](lessons/05-03-extremal-ramsey.md)

### Theorem conditions: necessary vs sufficient

The single most misremembered thing in this course. **Necessary** = failing it kills
the property (passing proves nothing). **Sufficient** = passing it guarantees the
property (failing proves nothing). **Characterization** = both.

| Test | Statement | Direction | What people get wrong |
|---|---|---|---|
| Handshake parity | a degree sequence must sum to an even number | **necessary** only | an even sum does not make the graph exist — $(4,4,4,4)$ still needs checking |
| Euler circuit | connected **and** every degree even | **characterization** (iff) | one or three odd vertices is impossible; only $0$, $2$, or $\ge 4$ occur |
| Euler trail (open) | connected **and** exactly two odd degrees | **characterization** (iff) | the trail must start at one odd vertex and end at the other |
| Dirac | simple, $n \ge 3$, and $\deg(v) \ge n/2$ for all $v$ $\Rightarrow$ Hamiltonian | **sufficient** only | failing Dirac tells you *nothing* — $C_{100}$ is Hamiltonian with $\deg = 2$ |
| Ore | simple, $n \ge 3$, and $\deg(u)+\deg(v) \ge n$ for all non-adjacent $u,v$ | **sufficient** only | Ore generalizes Dirac; still one-directional |
| Bipartite | contains no odd cycle | **characterization** (iff) | equivalently: BFS layers 2-color it |
| Tree | connected **and** acyclic (six equivalent forms below) | **characterization** (iff) | $\lvert E\rvert = n-1$ **alone** is not a tree — you need connected *or* acyclic alongside it |
| Hall | $\lvert N(S)\rvert \ge \lvert S\rvert$ for **every** $S \subseteq X$ $\iff$ a matching saturates $X$ | **characterization** (iff) | it is not "everyone has a neighbor" — the shortage is collective, over subsets |
| Berge | $M$ is maximum $\iff$ no $M$-augmenting path exists | **characterization** (iff) | *maximal* (can't extend) is far weaker than *maximum* |
| Weak duality | $\nu(G) \le \tau(G)$ | **always**, every graph | equality is not free |
| König | $G$ bipartite $\Rightarrow \nu(G) = \tau(G)$ | **conditional equality** | bipartiteness is load-bearing: $C_5$ has $\nu = 2 < 3 = \tau$ |
| Planar edge bound | planar simple, $n \ge 3$ $\Rightarrow \lvert E\rvert \le 3\lvert V\rvert - 6$ | **necessary** only | violating it proves nonplanar; passing it proves nothing ($K_{3,3}$, Petersen) |
| Girth-4 bound | planar simple **and triangle-free** $\Rightarrow \lvert E\rvert \le 2\lvert V\rvert-4$ | **necessary** only | this, not the general bound, is what kills $K_{3,3}$ |
| Kuratowski | planar $\iff$ no subdivision of $K_5$ and none of $K_{3,3}$ | **characterization** (iff) | you must rule out **both**; and it is not a fast hand-check |
| Wagner | planar $\iff$ neither $K_5$ nor $K_{3,3}$ is a minor | **characterization** (iff) | minor $\ne$ subgraph — contracting sees what deleting can't |
| Clique bound | $\chi(G) \ge \omega(G)$ | **lower bound** only | $W_5$ has $\omega = 3$, $\chi = 4$; odd cycles have $\omega = 2$, $\chi = 3$ |
| Independence bound | $\chi(G) \ge n/\alpha(G)$ | **lower bound** only | round **up**: $\chi$ is an integer |
| Greedy bound | $\chi(G) \le \Delta(G) + 1$ | **upper bound**, always | greedy *proves the bound*; it does not compute $\chi$ (order-dependent) |
| Brooks | connected, not complete, not an odd cycle $\Rightarrow \chi \le \Delta$ | **conditional upper bound** | the two exceptions are exactly $K_n$ and odd $C_n$ |
| Five-color / four-color | planar $\Rightarrow$ $5$-colorable (indeed $4$-colorable) | **sufficient** (planarity $\Rightarrow$ bound) | non-planar graphs can still be $4$-colorable; the converse says nothing |
| $\chi$ from $P(G,k)$ | $\chi(G) = \min\{k > 0 : P(G,k) > 0\}$ | **characterization** | smallest **non**-root, not smallest root |
| Weak duality (flows) | $\lvert f\rvert \le \mathrm{cap}(S,T)$ for every flow and every cut | **always** | capacity counts forward edges only |
| Max-flow min-cut | $\max_f \lvert f\rvert = \min_{(S,T)} \mathrm{cap}(S,T)$ | **equality**, always | maximality means a **cut** is saturated, not that every pipe is full |
| Optimality certificate | $\lvert f\rvert = \mathrm{cap}(S,T)$ $\Rightarrow$ both are optimal | **sufficient** (and a complete proof) | needs no algorithm — matching numbers *are* the proof |
| Integrality | integer capacities $\Rightarrow$ some maximum flow is integral | **sufficient** | irrational capacities break Ford–Fulkerson's termination, not the theorem |
| Menger | max disjoint $s$–$t$ paths $= \lambda(s,t)$ (edge) or $\kappa(s,t)$ (vertex) | **equality**, always | edge form and vertex form give different numbers; $\kappa \le \lambda$ |
| Mantel | $m > \lfloor n^2/4 \rfloor$ $\Rightarrow$ a triangle exists | **sufficient** for a triangle | *exactly* $\lfloor n^2/4\rfloor$ can still be triangle-free — the bound is touchable |
| Turán | no $K_{r+1}$ $\Rightarrow m \le \left(1-\tfrac1r\right)\tfrac{n^2}{2}$ | **necessary** for $K_{r+1}$-freeness | equality only at $T(n,r)$ |
| Equal spectra | $G \cong H \Rightarrow$ same spectrum | **necessary** only | cospectral non-isomorphic graphs exist ($C_4 \cup K_1$ vs. $K_{1,4}$) |
| $\lambda_2 > 0$ (Laplacian) | $\lambda_2 > 0 \iff G$ is connected | **characterization** (iff) | multiplicity of $0$ counts components |

*From every lesson; the Hamiltonicity rows are* [1.4](lessons/01-04-eulerian-hamiltonian.md), *the planarity rows* [3.1](lessons/03-01-planar-euler-formula.md)–[3.2](lessons/03-02-kuratowski-wagner.md), *the flow rows* [4.1](lessons/04-01-flow-networks-maxflow-mincut.md)–[4.3](lessons/04-03-menger-flows-matching.md).

### Counting identities

Every one of these is the same move: count something two ways.

$$\text{handshake (vertices):}\quad \sum_{v \in V}\deg(v) = 2\lvert E\rvert \quad\Longrightarrow\quad \#\{v : \deg(v) \text{ odd}\} \text{ is even}$$
$$\text{handshake (faces):}\quad \sum_{f}\deg(f) = 2\lvert E\rvert$$
$$\text{complement:}\quad m(G) + m(\bar G) = \binom{n}{2}$$
$$r\text{-regular:}\quad \lvert E\rvert = \tfrac{1}{2}nr, \quad\text{so } r \text{ odd} \Rightarrow n \text{ even}$$

*From* [1.1](lessons/01-01-degree-and-handshake-lemma.md), [1.2](lessons/01-02-representing-graphs-isomorphism.md), [3.1](lessons/03-01-planar-euler-formula.md)

### Trees — the six equivalent definitions

For a graph $G$ on $n$ vertices, these all say the same thing. Pick whichever makes
your proof fall out.

1. connected and acyclic;
2. connected and $\lvert E\rvert = n-1$;
3. acyclic and $\lvert E\rvert = n-1$;
4. exactly one path between every pair of vertices;
5. connected, and deleting **any** edge disconnects it (every edge is a bridge);
6. acyclic, and adding **any** new edge creates a cycle (exactly one).

Plus: every tree with $n \ge 2$ has at least two leaves; a tree with maximum degree
$\Delta$ has at least $\Delta$ leaves; **Cayley's formula** counts labeled trees,
$n^{n-2}$.

*From* [2.1](lessons/02-01-trees.md)

### Spanning trees and the greedy rules

| Rule | Statement | Use |
|---|---|---|
| Cut property | a **lightest** edge crossing any cut lies in *some* MST; if strictly lightest, in *every* MST | why every greedy **accept** is safe |
| Cycle property | a **strictly heaviest** edge on any cycle lies in *no* MST | why every greedy **reject** is safe |
| Kruskal | sort all edges cheapest-first; accept unless it closes a cycle; stop at $n-1$ edges | needs a global sort |
| Prim | grow one tree, repeatedly absorbing the cheapest edge leaving it | needs only a priority queue |
| Uniqueness | all weights distinct $\Rightarrow$ the MST is unique | ties $\Rightarrow$ possibly several MSTs, all optimal |

*From* [2.2](lessons/02-02-spanning-trees-mst.md)

### Matchings, covers, independent sets

$$\nu(G) \le \tau(G) \ \ (\text{always}), \qquad \nu(G) = \tau(G) \ \ (\text{bipartite — König})$$
$$\alpha(G) + \tau(G) = n \ \ (\text{always — Gallai}), \qquad \nu(G) + \rho(G) = n \ \ (\text{no isolated vertex})$$

Here $\rho(G)$ is the **edge**-cover number — the fewest *edges* touching every
vertex, the mirror image of $\tau$. Each identity pairs a build number with a block
number and they fill up $n$.
$$\text{Hall:}\quad \exists\, M \text{ saturating } X \iff \lvert N(S)\rvert \ge \lvert S\rvert \ \ \forall S \subseteq X$$
$$\text{deficiency:}\quad \nu(G) = \lvert X\rvert - \max_{S \subseteq X}\big(\lvert S\rvert - \lvert N(S)\rvert\big)$$

**König–Egerváry construction** (a minimum cover from a maximum matching $M$): let
$U$ be the unmatched vertices of $X$, let $Z$ be everything reachable from $U$ by an
$M$-alternating path, and take

$$K = (X \setminus Z) \cup (Y \cap Z), \qquad \lvert K\rvert = \lvert M\rvert.$$

A perfect matching needs Hall **and** $\lvert X\rvert = \lvert Y\rvert$. Every
$k$-regular bipartite graph ($k \ge 1$) has one.

*From* [2.3](lessons/02-03-bipartite-matching-hall.md), [2.4](lessons/02-04-konig-covers.md)

### Planarity

$$\text{Euler:}\quad \lvert V\rvert - \lvert E\rvert + \lvert F\rvert = 2 \quad (\text{connected plane graph})$$

| Bound | Applies to | Comes from |
|---|---|---|
| $\lvert E\rvert \le 3\lvert V\rvert - 6$ | simple planar, $\lvert V\rvert \ge 3$ | every face has $\ge 3$ edge-sides |
| $\lvert E\rvert \le 2\lvert V\rvert - 4$ | simple planar **and triangle-free** | every face has $\ge 4$ edge-sides |
| some vertex has $\deg \le 5$ | every simple planar graph | the bound plus the handshake lemma |

The two forbidden graphs: $K_5$ ($10 > 9$ by the general bound) and $K_{3,3}$
($9 > 8$, and **only** by the triangle-free bound). Both are minimal — delete any
one edge and they become planar.

*From* [3.1](lessons/03-01-planar-euler-formula.md), [3.2](lessons/03-02-kuratowski-wagner.md)

### Chromatic numbers and polynomials

$$\omega(G) \ \le\ \chi(G) \ \le\ \Delta(G)+1, \qquad \chi(G) \ \ge\ \frac{n}{\alpha(G)}$$

| Graph | $\chi$ | $P(G,k)$ |
|---|---|---|
| edgeless on $n$ | $1$ | $k^n$ |
| $K_n$ | $n$ | $k(k-1)(k-2)\cdots(k-n+1)$ |
| tree on $n$ | $2$ (for $n \ge 2$) | $k(k-1)^{n-1}$ |
| $C_n$ | $2$ ($n$ even), $3$ ($n$ odd) | $(k-1)^n + (-1)^n(k-1)$ |
| bipartite (with an edge) | $2$ | — |
| planar | $\le 5$ (indeed $\le 4$) | — |

$$\text{deletion–contraction:}\quad P(G,k) = P(G-e,k) - P(G/e,k)$$
$$\text{shape:}\quad P(G,k) = k^n - m\,k^{n-1} + \cdots \ \ (\text{monic, degree } n, \text{ alternating signs})$$

*From* [3.3](lessons/03-03-coloring-chromatic-number.md), [3.4](lessons/03-04-chromatic-polynomial.md)

### Flows

$$\text{flow across any cut:}\quad \lvert f\rvert = \sum_{S \to T} f(e) - \sum_{T \to S} f(e)$$
$$\text{weak duality:}\quad \lvert f\rvert \le \mathrm{cap}(S,T), \qquad \text{max-flow min-cut:}\quad \max_f \lvert f\rvert = \min_{(S,T)}\mathrm{cap}(S,T)$$

**Ford–Fulkerson.** From the zero flow, while $G_f$ has an $s \to t$ path, push its
bottleneck along it. At termination let $S$ = everything still reachable from $s$
in $G_f$; then $(S,\bar S)$ **is** a minimum cut, because every $S \to \bar S$ edge is
saturated and every $\bar S \to S$ edge is empty. Shortest-path choice
(**Edmonds–Karp**) guarantees termination in $O(\lvert V\rvert\,\lvert E\rvert^2)$.

**The two reductions.** Give every edge capacity $1$:

- *Menger:* integer flows decompose into edge-disjoint $s$–$t$ paths; cuts become
  edge separators. Split each internal vertex into $v_{\text{in}} \to v_{\text{out}}$
  with capacity $1$ to get the vertex form.
- *Matching:* add $s \to x_i$ and $y_j \to t$, all capacities $1$; saturated middle
  arcs form a matching, and a minimum cut converts into a vertex cover — König.

*From* [4.1](lessons/04-01-flow-networks-maxflow-mincut.md), [4.2](lessons/04-02-augmenting-paths-ford-fulkerson.md), [4.3](lessons/04-03-menger-flows-matching.md)

### Spectra

$$(A^k)_{ij} = \#\{\text{walks of length } k \text{ from } i \text{ to } j\}, \qquad (A^2)_{ii} = \deg(i)$$
$$\operatorname{tr}(A) = \sum_i \lambda_i = 0, \qquad \operatorname{tr}(A^2) = \sum_i \lambda_i^2 = 2\lvert E\rvert, \qquad \#\text{triangles} = \tfrac16\operatorname{tr}(A^3)$$

For a **$d$-regular** graph only: $d$ is an eigenvalue (eigenvector $\mathbf 1$);
$\lvert\lambda\rvert \le d$ for all eigenvalues; the multiplicity of $d$ counts the
components; and $-d$ appears iff some component is bipartite. For an irregular
graph, "bipartite" instead reads as "the spectrum is symmetric about $0$."

**Laplacian $L = D-A$:** symmetric, positive semidefinite,
$0 = \lambda_1 \le \lambda_2 \le \cdots \le \lambda_n$, with the multiplicity of $0$
equal to the number of components.

$$\text{Matrix–Tree:}\quad \#\text{spanning trees} = \text{any cofactor of } L = \frac{1}{n}\lambda_2\lambda_3\cdots\lambda_n$$

| Graph | Adjacency spectrum | Laplacian spectrum | Spanning trees |
|---|---|---|---|
| $K_n$ | $n-1$, and $-1$ with multiplicity $n-1$ | $0$, and $n$ with multiplicity $n-1$ | $n^{n-2}$ (Cayley) |
| $C_4$ | $2,\,0,\,0,\,-2$ | $0,\,2,\,2,\,4$ | $4$ |
| $P_3$ | $\sqrt2,\,0,\,-\sqrt2$ | — | $1$ |
| $K_{2,3}$ | $\sqrt6,\,0,\,0,\,0,\,-\sqrt6$ | — | — |
| two disjoint edges | — | $0,\,0,\,2,\,2$ | $0$ (disconnected) |

*From* [5.1](lessons/05-01-adjacency-spectrum.md), [5.2](lessons/05-02-laplacian-matrix-tree.md)

### Extremal and Ramsey

$$\text{Mantel:}\quad \text{triangle-free} \implies m \le \left\lfloor \frac{n^2}{4} \right\rfloor \quad(\text{equality only at } K_{\lfloor n/2\rfloor,\lceil n/2\rceil})$$
$$\text{Turán:}\quad \text{no } K_{r+1} \implies m \le \left(1 - \frac1r\right)\frac{n^2}{2} \quad(\text{equality only at } T(n,r))$$

| Ramsey number | Value |
|---|---|
| $R(2,t)$ | $t$ |
| $R(3,3)$ | $6$ |
| $R(4,4)$ | $18$ |
| $R(5,5)$ | unknown; between $43$ and $48$ |

$R(3,3) \le 6$ is pigeonhole (five edges at a vertex, two colors, so three share a
color); $R(3,3) > 5$ is the red-pentagon / blue-pentagram coloring of $K_5$, whose
two color classes are each a triangle-free $C_5$.

*From* [5.3](lessons/05-03-extremal-ramsey.md)

## Assumed, not taught here

This is a Tier 1 course: it teaches its own subject from scratch, but leans on the
proof habits of `proofs-primer` and, in Module 5, on linear algebra it does not
re-derive.

| Fact | Where it's taught |
|---|---|
| Induction (and strong induction) — the engine of the tree edge count, Euler's formula, and the five-color theorem | [proofs-primer 3.3](../proofs-primer/lessons/03-03-induction.md) |
| Proof by contradiction and by contrapositive | [proofs-primer 2.2](../proofs-primer/lessons/02-02-contrapositive-and-contradiction.md) |
| Case analysis and "without loss of generality" | [proofs-primer 2.3](../proofs-primer/lessons/02-03-cases-and-wlog.md) |
| Bijections, injections, and "count a set two ways" | [proofs-primer 3.2](../proofs-primer/lessons/03-02-functions-injective-surjective-bijective.md) |
| Set operations, unions, and complements (the element method behind $N(S)$ and $\alpha + \tau = n$) | [proofs-primer 3.1](../proofs-primer/lessons/03-01-sets-and-element-method.md) |
| **Equivalence relations** — used unproved in 1.3 to turn reachability into components | [discrete-mathematics 2.2](../discrete-mathematics/lessons/02-02-relations-equivalence-and-order.md) |
| **Pigeonhole principle** — used in the greedy coloring bound and the whole of $R(3,3) = 6$ | [combinatorics 4.2](../combinatorics/lessons/04-02-pigeonhole.md), [discrete-mathematics 3.3](../discrete-mathematics/lessons/03-03-inclusion-exclusion-and-pigeonhole.md) |
| Binomial coefficients, $\binom{n}{2}$ | [combinatorics 1.2](../combinatorics/lessons/01-02-binomial-multinomial-coefficients.md) |
| **Cauchy–Schwarz / power-mean** — used unproved in Mantel's proof | [linalg-refresher 4.1](../linalg-refresher/lessons/04-01-inner-products-orthogonality.md) |
| Eigenvalues and eigenvectors | [linalg-refresher 3.1](../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md) |
| **Spectral theorem** (real symmetric $\Rightarrow$ real eigenvalues, orthonormal eigenbasis) and positive semidefiniteness | [linalg-refresher 5.1](../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md), [3.2](../linalg-refresher/lessons/03-02-diagonalization.md) |
| Determinants, cofactors, and minors — the whole content of "take a cofactor of $L$" | [linalg-refresher 2.3](../linalg-refresher/lessons/02-03-determinants.md) |
| Rank and null space (why $L$ has rank $n-1$ when connected) | [linalg-refresher 2.2](../linalg-refresher/lessons/02-02-inverses-and-four-subspaces.md) |
| Ramsey theory from the counting side, including the probabilistic lower bound | [combinatorics 4.3](../combinatorics/lessons/04-03-ramsey-theory.md) |

The **Robertson–Seymour** graph-minor theorem, the **four-color theorem**, and the
NP-hardness of Hamiltonicity are quoted in the lessons as facts and are not proved
anywhere in this library.

## Pitfalls

### Symbol collisions

- $\tau(G)$ is the **vertex-cover number** in [2.4](lessons/02-04-konig-covers.md) and the **spanning-tree count** in [5.2](lessons/05-02-laplacian-matrix-tree.md) — unrelated quantities, same letter. *([2.4](lessons/02-04-konig-covers.md), [5.2](lessons/05-02-laplacian-matrix-tree.md))*
- $\lambda(G)$ is **edge connectivity** in Module 4 but $\lambda_i$ is an **eigenvalue** in Module 5; and $\lambda_1$ is the *largest* adjacency eigenvalue while $\lambda_1 = 0$ is the *smallest* Laplacian one. Check which matrix and which sort order. *([4.3](lessons/04-03-menger-flows-matching.md), [5.1](lessons/05-01-adjacency-spectrum.md), [5.2](lessons/05-02-laplacian-matrix-tree.md))*
- A **cut** is three different objects: a vertex bipartition in the MST cut property, an $s$–$t$ partition with a capacity in flows, and a set of edges/vertices to delete in Menger. *([2.2](lessons/02-02-spanning-trees-mst.md), [4.1](lessons/04-01-flow-networks-maxflow-mincut.md), [4.3](lessons/04-03-menger-flows-matching.md))*

### Degrees and counting

- Degree counts **edges incident to $v$**, not neighbors — they differ in a multigraph, where a loop adds $2$. *([1.1](lessons/01-01-degree-and-handshake-lemma.md))*
- An even degree sum only clears the parity hurdle; it does not make the graph exist. *([1.1](lessons/01-01-degree-and-handshake-lemma.md))*
- The corollary says the *count* of odd-degree vertices is even — possibly zero. It says nothing about how many are even. *([1.1](lessons/01-01-degree-and-handshake-lemma.md))*

### Sameness and representation

- Matching degree sequences never certify isomorphism: $C_6$ and $K_3 \cup K_3$ agree on $n$, $m$, and every degree, yet differ in triangles and components. Invariants only ever say **no**. *([1.2](lessons/01-02-representing-graphs-isomorphism.md), [5.1](lessons/05-01-adjacency-spectrum.md))*
- Equal spectra are no better: cospectral non-isomorphic graphs exist. Different spectra, though, are a definitive "not isomorphic." *([5.1](lessons/05-01-adjacency-spectrum.md))*
- A graph has one adjacency matrix **per vertex ordering**; relabeling gives $PAP^{\mathsf T}$. *([1.2](lessons/01-02-representing-graphs-isomorphism.md))*
- $\bar G$ shares $G$'s vertex set — the complement never adds or removes dots. *([1.2](lessons/01-02-representing-graphs-isomorphism.md))*

### Getting around

- A **trail** may revisit a vertex; only a **path** may not. *([1.3](lessons/01-03-walks-paths-connectivity.md))*
- $d(u,v)$ counts **edges**, not vertices: adjacent vertices are at distance $1$. *([1.3](lessons/01-03-walks-paths-connectivity.md))*
- Cut vertices and bridges don't come as a pair — two triangles glued at a vertex have a cut vertex and no bridge at all. *([1.3](lessons/01-03-walks-paths-connectivity.md))*
- Euler is about **edges** (repeat vertices freely); Hamilton is about **vertices** (skip edges freely). A graph can be one and not the other, and the two problems live on opposite sides of the P-vs-NP divide. *([1.4](lessons/01-04-eulerian-hamiltonian.md))*
- Dirac and Ore failing means **nothing**. When they fire you're done; when they don't, go hunt by hand. *([1.4](lessons/01-04-eulerian-hamiltonian.md))*

### Trees and greedy

- $\lvert E\rvert = n-1$ **alone** is not a tree — pair it with connected *or* acyclic and each drags the other along. *([2.1](lessons/02-01-trees.md))*
- A tree is rootless; *rooting* is an extra choice, and any of the $n$ vertices can serve. *([2.1](lessons/02-01-trees.md))*
- No tree on $n \ge 2$ vertices has exactly one leaf — the longest-path argument always produces two. *([2.1](lessons/02-01-trees.md))*
- An MST minimizes **total** edge cost, not pairwise travel; it can force a long detour between a specific pair. That's the shortest-path problem, a different question. *([2.2](lessons/02-02-spanning-trees-mst.md))*
- With repeated weights the MST need not be unique, and Kruskal's tie-breaking changes which one you get (all are optimal). *([2.2](lessons/02-02-spanning-trees-mst.md))*

### Matchings and covers

- **Maximal** (can't extend) is not **maximum** (nothing bigger exists) — Berge's augmenting path is what upgrades one to the other. *([2.3](lessons/02-03-bipartite-matching-hall.md))*
- Hall's condition is about **every subset**, not about single vertices; and $N(S)$ is a **union**, so shared partners count once. That overlap is exactly how a set starves while every member looks well-connected. *([2.3](lessons/02-03-bipartite-matching-hall.md))*
- Hall saturates $X$ only; a perfect matching of the whole graph additionally needs $\lvert X\rvert = \lvert Y\rvert$. *([2.3](lessons/02-03-bipartite-matching-hall.md))*
- $\nu \le \tau$ is universal; $\nu = \tau$ needs **bipartite**. $C_5$ breaks it. *([2.4](lessons/02-04-konig-covers.md))*
- A *vertex* cover is vertices hitting edges; an *edge* cover is edges hitting vertices. Different objects, different theorems. And an independent set chooses **vertices** while a matching chooses **edges**. *([2.4](lessons/02-04-konig-covers.md))*
- The minimum cover usually **mixes sides**; "circle one whole part" is a valid cover but generally not the smallest. *([2.4](lessons/02-04-konig-covers.md))*

### Planarity and coloring

- The **outer face always counts**: a lone triangle has $\lvert F\rvert = 2$. *([3.1](lessons/03-01-planar-euler-formula.md))*
- $\lvert E\rvert \le 3\lvert V\rvert - 6$ is a one-way filter and assumes *simple* with $\lvert V\rvert \ge 3$. Passing it proves nothing — use the triangle-free bound for $K_{3,3}$, and Kuratowski for the Petersen graph. *([3.1](lessons/03-01-planar-euler-formula.md), [3.2](lessons/03-02-kuratowski-wagner.md))*
- A **minor** is not a **subgraph**: Petersen has a $K_5$ minor and no $K_5$ subgraph. And Kuratowski forbids **both** $K_5$ and $K_{3,3}$, not either one. *([3.2](lessons/03-02-kuratowski-wagner.md))*
- $\chi = \omega$ is false in general: $W_5$ has $\omega = 3$, $\chi = 4$. The clique bound is a floor. *([3.3](lessons/03-03-coloring-chromatic-number.md))*
- Greedy proves the bound $\Delta+1$; it does **not** compute $\chi$ — a bad vertex order can waste colors even on a bipartite graph. *([3.3](lessons/03-03-coloring-chromatic-number.md))*
- Colors carry no arithmetic; only the pattern of equalities matters — but $P(G,k)$ still counts **labeled** colorings, so never divide by palette permutations. *([3.3](lessons/03-03-coloring-chromatic-number.md), [3.4](lessons/03-04-chromatic-polynomial.md))*
- $\chi$ is the smallest positive **non**-root of $P(G,k)$, not its smallest root. *([3.4](lessons/03-04-chromatic-polynomial.md))*
- Contraction collapses parallel edges to one; a self-loop makes $P \equiv 0$. *([3.4](lessons/03-04-chromatic-polynomial.md))*

### Flows and connectivity

- A cut's capacity sums **forward** edges only — you never subtract the backward ones (those appear only in the *net flow* across the cut, a different quantity). *([4.1](lessons/04-01-flow-networks-maxflow-mincut.md))*
- Conservation applies to **internal** vertices only; imposing it at $s$ would force $\lvert f\rvert = 0$. *([4.1](lessons/04-01-flow-networks-maxflow-mincut.md))*
- A maximum flow saturates a **cut**, not every pipe. Slack elsewhere is fine. *([4.1](lessons/04-01-flow-networks-maxflow-mincut.md))*
- A backward arc in $G_f$ is not an edge of the network — it's permission to **cancel** committed flow. *([4.2](lessons/04-02-augmenting-paths-ford-fulkerson.md))*
- **Every** arc of an augmenting path needs positive residual, and you push the **minimum** along it, not the first edge's slack. *([4.2](lessons/04-02-augmenting-paths-ford-fulkerson.md))*
- Never hunt separately for the min cut: at termination the reachable set $S$ *is* one. *([4.2](lessons/04-02-augmenting-paths-ford-fulkerson.md))*
- $\kappa \le \lambda \le \delta$, with strict gaps possible: two triangles sharing a vertex have $\kappa = 1$, $\lambda = 2$. Internally-disjoint implies edge-disjoint, never the reverse. *([4.3](lessons/04-03-menger-flows-matching.md))*

### Spectra and extremal bounds

- The regular-graph rules ($d$ on top, multiplicity of $d$ counts components, $-d$ iff bipartite) need **regularity**. Component-counting for a general graph is the Laplacian's job. *([5.1](lessons/05-01-adjacency-spectrum.md), [5.2](lessons/05-02-laplacian-matrix-tree.md))*
- $(A^k)_{ij}$ counts **walks**, not paths — backtracking is allowed, which is why $(A^2)_{ii} = \deg(i)$. *([5.1](lessons/05-01-adjacency-spectrum.md))*
- The Laplacian is $D - A$, degrees positive and edges $-1$. Flip the sign and you lose positive semidefiniteness. *([5.2](lessons/05-02-laplacian-matrix-tree.md))*
- $\det L = 0$ always — the Matrix–Tree theorem needs a **cofactor**: delete row $i$ *and* column $i$ first. *([5.2](lessons/05-02-laplacian-matrix-tree.md))*
- Mantel forces a triangle only **past** $\lfloor n^2/4\rfloor$; sitting exactly at the bound is legal (that's $K_{\lfloor n/2\rfloor,\lceil n/2\rceil}$). *([5.3](lessons/05-03-extremal-ramsey.md))*
- $R(3,3) = 6$ guarantees three mutual friends **or** three mutual strangers. Drop the "or" and the theorem is false. *([5.3](lessons/05-03-extremal-ramsey.md))*
