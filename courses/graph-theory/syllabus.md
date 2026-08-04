# Graph Theory — Syllabus

> Mathematics · Tier 1 · ~18 lessons · Prereqs: [proofs-primer](../proofs-primer/syllabus.md) · Roadmap id: `graph-theory`

## Goal

Learn to model a network — friendships, roads, circuits, dependencies, matchings — as a *graph* (dots and lines) and then prove sharp things about it. The through-line is that almost every deep result is a **duality**: something you can build is capped by something that blocks it, and the two turn out to be equal (max matching = min cover, max flow = min cut, connectivity = disjoint paths). By the end you should reflexively reach for the right invariant — degree, a spanning tree, the chromatic number, an eigenvalue — and know which theorem turns a picture into a proof. Deliberately skipped: heavy algorithms and complexity (a future CS track), deep algebraic graph theory, and random-graph rigor beyond a taste. This is Tier 1 — it teaches as if new, leaning only on the proof habits of [proofs-primer](../proofs-primer/syllabus.md). Graphs are visual: nearly every lesson carries a hand-drawn SVG or a Mermaid diagram, and you should sketch as you read.

## Dangerous Checklist

When you finish, you can:

- [ ] Model a real situation as a graph and use the handshake lemma to rule out impossible degree sequences (e.g. "9 people each shake exactly 3 hands")
- [ ] Decide whether a graph is connected, find its components, and tell whether it admits an Euler circuit or a Hamiltonian cycle
- [ ] Prove a graph is a tree using any of its equivalent characterizations, and count or find its spanning trees
- [ ] Run Kruskal's and Prim's algorithms to build a minimum spanning tree and say why the greedy choice is safe
- [ ] Use Hall's marriage theorem to decide when a bipartite graph has a perfect matching — and exhibit the obstruction when it doesn't
- [ ] Find a maximum matching and a minimum vertex cover in a bipartite graph and verify König's duality between them
- [ ] Apply Euler's formula to bound edge counts and prove a graph is nonplanar, recognizing the $K_5$ / $K_{3,3}$ obstructions (Kuratowski–Wagner)
- [ ] Bound and compute a graph's chromatic number, and invoke the five-color theorem for planar graphs
- [ ] Compute a chromatic polynomial by deletion–contraction and read structural facts off its coefficients and roots
- [ ] Compute a maximum flow and a minimum cut, and use their equality (and Menger's theorem) to count edge-disjoint paths
- [ ] Compute adjacency and Laplacian eigenvalues of small graphs and read off connectivity and spanning-tree counts
- [ ] Estimate extremal quantities — a Turán-type edge bound and a small Ramsey number such as $R(3,3)=6$

## Modules

### Module 1: Foundations, paths & connectivity

Fix the language, prove the first theorem everyone should know (the handshake lemma), then ask the two oldest questions in the subject: can you walk every *edge* once, or visit every *vertex* once?

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | What is a graph? Degree & the handshake lemma | Speak the language and prove the parity of degrees | vertices, edges, simple vs multigraph, degree, $\sum_v \deg(v)=2\lvert E\rvert$, even number of odd-degree vertices |
| 1.2 | Representing graphs: adjacency, isomorphism & special families | Move between pictures, lists, and matrices, and tell graphs apart | adjacency matrix/list, isomorphism & invariants, subgraphs, complement, $K_n$, $C_n$, $P_n$, $K_{m,n}$, $Q_n$ |
| 1.3 | Walks, paths, cycles, connectivity & components | Formalize "getting from here to there" and cut a graph into pieces | walk/trail/path, cycle, connectedness, components, distance, cut vertices & bridges |
| 1.4 | Eulerian & Hamiltonian graphs | Contrast an easy traversal problem with a famously hard one | Euler circuit ⇔ connected + all even degree, Königsberg, Hamiltonian cycle, Dirac/Ore sufficient conditions |

**Boss problem 1:** First prove no graph has an odd number of odd-degree vertices, and use it to explain why 9 people cannot each shake exactly 3 hands. Then take the 3-cube $Q_3$ (8 vertices, every degree 3): decide, with reasons, whether it has an Euler circuit and whether it has a Hamiltonian cycle. *(Solved: $\sum\deg=9\cdot3=27$ is odd, impossible; $Q_3$ has 8 odd-degree vertices so no Euler circuit, but a Gray-code ordering gives a Hamiltonian cycle.)*

### Module 2: Trees & matchings

Trees are the leanest connected graphs — the backbone of spanning-tree algorithms. Matchings are the first great duality theorem, and Hall's marriage theorem is the payoff.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Trees and their many faces | Recognize a tree by any of its equivalent definitions | acyclic + connected, $\lvert E\rvert=\lvert V\rvert-1$, unique paths, leaves, rooted trees, Cayley's count $n^{n-2}$ (stated) |
| 2.2 | Spanning trees & the minimum spanning tree | Extract a skeleton and make it cheapest with a greedy rule | spanning tree, weighted graphs, Kruskal & Prim, the cut property, why greedy is optimal |
| 2.3 | Bipartite graphs & matchings: Hall's theorem | Decide when everyone can be paired off | bipartite test (no odd cycle), matching, perfect/maximum matching, augmenting paths, Hall's condition $\lvert N(S)\rvert\ge\lvert S\rvert$ |
| 2.4 | König's theorem: matchings meet covers | See the first max–min duality in full | vertex cover, independent set, König $\;\max\text{ matching}=\min\text{ cover}$ (bipartite), connection to Hall |

**Boss problem 2:** On the complete bipartite graph $K_{3,3}$ with given edge weights, run Kruskal to find a minimum spanning tree (5 edges) and confirm no cycle sneaks in. Then, ignoring weights, exhibit a perfect matching and a minimum vertex cover of the *same* size, verifying König. *(Solved: $K_{3,3}$ is 3-regular bipartite, so Hall holds and a perfect matching of size 3 exists; König forces the minimum cover to size 3 as well.)*

### Module 3: Planarity & coloring

When can a graph be drawn with no crossings — and how few colors keep neighbors distinct? Euler's formula is the hinge that both questions swing on.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Planar graphs & Euler's formula | Count faces and derive the master edge bound | plane drawings, faces, $\lvert V\rvert-\lvert E\rvert+\lvert F\rvert=2$, $\lvert E\rvert\le 3\lvert V\rvert-6$, girth-4 bound $\lvert E\rvert\le 2\lvert V\rvert-4$ |
| 3.2 | Kuratowski & Wagner: what forbids a flat drawing | Characterize nonplanarity by two forbidden pieces | subdivision, minor, $K_5$ and $K_{3,3}$ as the only obstructions, Wagner's minor form |
| 3.3 | Coloring & the chromatic number | Bound how many colors a graph really needs | proper coloring, $\chi(G)$, greedy bound $\chi\le\Delta+1$, Brooks' theorem, five-color theorem (four-color stated) |
| 3.4 | The chromatic polynomial | Turn "how many colorings" into an algebraic object | $P(G,k)$, deletion–contraction, $\chi(G)$ as smallest root-free $k$, coefficients & structure |

**Boss problem 3:** Use Euler's formula to prove both $K_5$ and $K_{3,3}$ are nonplanar (the edge bound $\lvert E\rvert\le 3\lvert V\rvert-6$ for $K_5$, the triangle-free bound $\lvert E\rvert\le 2\lvert V\rvert-4$ for $K_{3,3}$). Then compute the chromatic polynomial of the 5-cycle $C_5$ by deletion–contraction and read off both $\chi(C_5)=3$ and the number of proper 3-colorings. *(Solved: $K_5$ has $10>9$ edges, $K_{3,3}$ has $9>8$; $P(C_5,k)=(k-1)^5-(k-1)$, giving $\chi=3$ and $P(C_5,3)=30$.)*

### Module 4: Network flows

Push as much as you can from source to sink. The single most useful theorem in the subject — max-flow min-cut — quietly contains matchings, connectivity, and Menger's theorem as special cases.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Flow networks & the max-flow min-cut theorem | State the master duality of the module | capacities, flow conservation, value of a flow, $s$–$t$ cut, $\max\text{ flow}=\min\text{ cut}$ |
| 4.2 | Finding a maximum flow: augmenting paths | Actually compute the optimum and certify it | residual graph, augmenting path, Ford–Fulkerson, integrality of flows, the min-cut certificate |
| 4.3 | Menger's theorem & flows behind matching | Recover connectivity and matching as flow problems | edge/vertex connectivity, Menger (max disjoint paths = min separator), bipartite matching via unit-capacity flow |

**Boss problem 4:** On a given network with source $s$ and sink $t$, use augmenting paths to compute the maximum flow, then exhibit a cut whose capacity equals it — certifying optimality by max-flow min-cut. Finally, reinterpret the same graph with unit capacities as a question about edge-disjoint $s$–$t$ paths and state exactly what Menger's theorem guarantees. *(Solved by construction: the saturated cut's capacity matches the flow value; with unit capacities the max flow equals the number of edge-disjoint paths, which equals the size of a minimum edge separator.)*

### Module 5: Spectral & extremal — a taste

Two windows into "global" structure. Eigenvalues of a graph's matrices encode connectivity and even count spanning trees; extremal and Ramsey theory ask how much structure is *forced* once a graph is dense or large enough.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | The adjacency spectrum | Read a graph's shape off its eigenvalues | adjacency matrix eigenvalues, largest eigenvalue & regularity, walks $=$ matrix powers, cospectral graphs |
| 5.2 | The Laplacian & the Matrix–Tree theorem | Use $L=D-A$ to measure connectivity and count trees | Laplacian, $\lambda_2$ (algebraic connectivity), number of zero eigenvalues $=$ components, Matrix–Tree theorem |
| 5.3 | Extremal graphs & Ramsey theory | Force structure from density and from size | Turán's theorem, Mantel's triangle bound, Ramsey numbers, $R(3,3)=6$ (pigeonhole proof) |

**Boss problem 5:** For $K_4$: compute the adjacency eigenvalues ($3,-1,-1,-1$) and the Laplacian eigenvalues ($0,4,4,4$), and confirm the Matrix–Tree theorem's spanning-tree count against Cayley's formula. Then prove the Ramsey bound $R(3,3)=6$ — that every red/blue coloring of $K_6$'s edges contains a monochromatic triangle, while some coloring of $K_5$ avoids one. *(Solved: Matrix–Tree gives $\tfrac{1}{4}(4\cdot4\cdot4)=16=4^{4-2}$, matching Cayley; the $K_6$ half is the classic pigeonhole-on-five-incident-edges argument, and the $C_5$-based two-coloring shows $K_5$ suffices to fail.)*

## Sources of truth

- West, *Introduction to Graph Theory* (primary voice: definitions, standard notation, and the level of rigor)
- Diestel, *Graph Theory* (canonical statements of the deep theorems — Menger, Kuratowski, flows)
- Bondy & Murty, *Graph Theory* (breadth, applications, and the spectral/extremal taste)
- Trudeau, *Introduction to Graph Theory* (gentle, intuition-first framing for the early modules)

## Notes

- Built directly on the proof habits of [proofs-primer](../proofs-primer/syllabus.md) — induction on vertices/edges, extremal ("take a longest path") arguments, and duality proofs recur throughout. This course overlaps the graph material in [discrete-mathematics](../discrete-mathematics/syllabus.md); here it is deeper and proof-first.
- The spectral thread in Module 5 leans on eigenvalues and symmetric matrices from [linalg-refresher](../linalg-refresher/syllabus.md) — a good place to name the cross-subject bridge *adjacency/Laplacian spectrum ↔ symmetric-matrix diagonalization*.
- Flows, matchings, and connectivity (Modules 2 & 4) are the graph-theoretic core the future CS/networks track will build algorithms on; this course does the *why*, that track will do the *how fast*.
