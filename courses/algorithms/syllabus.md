# Algorithms — Syllabus

> Computer Science · Tier 1 · ~20 lessons · Prereqs: [discrete-mathematics](../discrete-mathematics/syllabus.md) · Recommended alongside: [programming-foundations](../programming-foundations/syllabus.md) · Roadmap id: `algorithms`

## Goal

Learn to design an algorithm, *prove* it correct, and *prove* how fast it runs — the three moves that separate an algorithmist from a coder. The spine is a small kit of design paradigms (divide-and-conquer, greedy, dynamic programming, graph search, flows) plus the analysis tools to certify each one (asymptotics, recurrences, amortization, and matching upper/lower bounds). You'll end at the frontier where cleverness runs out — NP-completeness — and learn the two honest responses to a problem you can't solve exactly: approximate it with a provable guarantee, or randomize it. Deliberately skipped: the full machinery of complexity theory (its own course, [computational-complexity](../computational-complexity/syllabus.md)) and heavy computational geometry. This is Tier 1 — it teaches as if new, leaning on the proof and counting habits of [discrete-mathematics](../discrete-mathematics/syllabus.md). Code is language-agnostic pseudocode you **read and analyse** rather than write; the point is always the idea, not the syntax, and nothing here requires you to have built the data structures first (see the revision note at the foot).

## Dangerous Checklist

When you finish, you can:

- [ ] Rank functions by growth with big-O / Ω / Θ, and prove one function is $o$ of another
- [ ] Set up the recurrence for a recursive algorithm and solve it by recursion tree, substitution, or the master theorem
- [ ] Prove the $\Omega(n\log n)$ lower bound for comparison sorting via a decision tree
- [ ] Design a divide-and-conquer algorithm that beats the naive bound (Karatsuba, Strassen, closest pair)
- [ ] Prove a greedy algorithm optimal with an exchange or "greedy stays ahead" argument — and give a counterexample where greed fails
- [ ] Build a Huffman code and a minimum spanning tree, and state the cut property that makes both safe
- [ ] Use amortized analysis (aggregate, accounting, potential) to bound union-find and dynamic-array costs
- [ ] Solve a problem by dynamic programming: name the subproblem, write the recurrence, fill the table, recover the answer (knapsack, LCS, edit distance)
- [ ] Traverse a graph with BFS/DFS and use DFS to topologically sort a DAG and extract strongly connected components
- [ ] Compute single-source shortest paths with Dijkstra and Bellman–Ford, and all-pairs with Floyd–Warshall, knowing which to reach for and why
- [ ] Compute a maximum flow, certify it with a matching minimum cut, and model bipartite matching or scheduling as a flow
- [ ] Prove a problem NP-complete by reduction, and hand back a provable approximation or randomized algorithm when exact solving is hopeless

## Modules

### Module 1: Analysis & divide-and-conquer

Build the measuring stick — asymptotics and recurrences — then wield the first great paradigm: split, recurse, combine. Along the way, prove a *lower* bound, the rarer and more satisfying half of algorithm analysis.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Asymptotic notation | Compare algorithms by growth rate, ignoring constants and small $n$ | big-O / Ω / Θ / $o$ / $\omega$, worst vs average case, why constants hide, common growth classes |
| 1.2 | Recurrences: recursion trees & substitution | Turn a recursive algorithm into a closed-form running time | recurrence relations, recursion-tree method, substitution (guess-and-verify by induction), telescoping |
| 1.3 | The master theorem | Read off the answer for divide-and-conquer recurrences in one glance | $T(n)=aT(n/b)+f(n)$, the three cases, $n^{\log_b a}$ vs $f(n)$, when the theorem does *not* apply |
| 1.4 | Sorting by divide-and-conquer & the comparison lower bound | Sort in $\Theta(n\log n)$ — and prove you can't beat it by comparisons | merge sort, quicksort (pivots, worst case), decision trees, $\log_2(n!)=\Omega(n\log n)$ |
| 1.5 | Divide-and-conquer beyond sorting | Recognize when splitting beats brute force in non-sorting problems | closest pair of points, Karatsuba integer multiply, Strassen matrix multiply, the "combine step" as the bottleneck |

**Boss problem 1:** Solve three recurrences with the master theorem and interpret each: merge sort $T(n)=2T(n/2)+\Theta(n)$, Karatsuba $T(n)=3T(n/2)+\Theta(n)$, and naive integer multiply $T(n)=4T(n/2)+\Theta(n)$. Then prove that *no* comparison-based sort can run in $o(n\log n)$. *(Solved: with $a/b$ giving $n^{\log_b a}$ — merge is case 2 → $\Theta(n\log n)$; Karatsuba is case 1 → $\Theta(n^{\log_2 3})\approx\Theta(n^{1.585})$; naive is case 1 → $\Theta(n^2)$, exposing why Karatsuba wins. A comparison sort's decision tree has $\geq n!$ leaves, so its height is $\geq\log_2(n!)\geq\frac{n}{2}\log_2\frac{n}{2}=\Omega(n\log n)$.)*

### Module 2: Greedy & dynamic programming

Two paradigms for optimization that look alike but aren't: greedy commits locally and hopes, while DP remembers every subproblem so it never has to hope. This module teaches you to tell which one a problem wants — and to prove it.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The greedy method & interval scheduling | Prove a greedy choice optimal with an exchange argument | greedy-choice property, earliest-finish-time rule, exchange / "greedy stays ahead" proofs, where greed fails |
| 2.2 | Huffman coding | Compress optimally by growing a tree from the rarest symbols up | prefix-free codes, expected code length, Huffman's greedy merge, optimality proof |
| 2.3 | Minimum spanning trees: Kruskal & Prim | Connect everything as cheaply as possible, two greedy ways | spanning tree, the cut property, Kruskal (sort + union-find), Prim (grow from a frontier), why greedy is safe |
| 2.4 | Amortized analysis & union-find | Bound the *average* cost of an operation over a whole sequence | aggregate / accounting / potential methods, dynamic-array doubling, disjoint-set forest, union by rank + path compression |
| 2.5 | Dynamic programming & knapsack | Trade recomputation for a table: define subproblem, recurse, fill, recover | optimal substructure, overlapping subproblems, memoization vs bottom-up, 0/1 knapsack, DAG shortest paths |
| 2.6 | DP on sequences: LCS & edit distance | Align two strings and read the answer off a 2-D table | longest common subsequence, edit (Levenshtein) distance, table backtracking to recover the alignment |

**Boss problem 2:** (a) Prove the earliest-finish-time rule is optimal for interval scheduling using an exchange argument. (b) Fill the 0/1-knapsack DP table for capacity $W=10$ and items $(w,v)=(5,10),(4,40),(6,30),(3,50)$, then read off the optimal set and value. *(Solved: (a) if greedy's first pick $g$ finishes no later than any optimal first pick, swap it in without losing feasibility or count; induct on the rest. (b) $\text{OPT}[i,w]=\max(\text{OPT}[i-1,w],\,v_i+\text{OPT}[i-1,w-w_i])$; the table's corner gives value $90$ from items $(4,40)+(3,50)$ at weight $7$, beating every alternative.)*

### Module 3: Graph algorithms

Most of the algorithms people actually run are graph algorithms. Start with the two traversals everything is built on, then climb to shortest paths and the max-flow / min-cut duality that quietly solves matching, scheduling, and connectivity all at once.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Graph search: BFS & DFS | Traverse a graph two ways and know what each one reveals | adjacency list/matrix, BFS layers & shortest hops, DFS timestamps, tree/back/forward/cross edges, cycle detection |
| 3.2 | Topological sort & strongly connected components | Order a DAG's tasks and collapse a digraph into its mutual-reachability blobs | DAGs, topological order via DFS finish times, SCCs, Kosaraju / Tarjan, the condensation DAG |
| 3.3 | Dijkstra's shortest paths | Find cheapest routes from a source when edges can't be negative | non-negative weights, greedy frontier + priority queue, relaxation, why negatives break the greedy invariant |
| 3.4 | Bellman–Ford & Floyd–Warshall | Handle negative edges, detect negative cycles, and go all-pairs | Bellman–Ford relaxation over $|V|-1$ rounds, negative-cycle detection, Floyd–Warshall DP over intermediate vertices |
| 3.5 | Max-flow / min-cut | Push as much as possible source-to-sink, and certify optimality with a cut | flow networks, residual graph, augmenting paths (Ford–Fulkerson), max-flow = min-cut, bipartite matching as unit-capacity flow |

**Boss problem 3:** (a) Run Dijkstra from $s$ on the digraph with edges $s\!\to\!a\,(1),\,s\!\to\!b\,(4),\,a\!\to\!b\,(2),\,a\!\to\!c\,(6),\,b\!\to\!c\,(3),\,b\!\to\!t\,(7),\,c\!\to\!t\,(2)$ and give every distance. (b) On the network $s\!\to\!a\,(3),\,s\!\to\!b\,(2),\,a\!\to\!b\,(1),\,a\!\to\!t\,(2),\,b\!\to\!t\,(3)$, find the max flow and exhibit a min cut of equal capacity. *(Solved: (a) settling order $s,a,b,c,t$ gives $d=0,1,3,6,8$, with shortest path $s\!\to\!a\!\to\!b\!\to\!c\!\to\!t=8$. (b) augmenting paths $s\,a\,t\,(2)$, $s\,b\,t\,(2)$, $s\,a\,b\,t\,(1)$ give max flow $5$; the cut $(\{s\},\text{rest})$ has capacity $3+2=5$, certifying optimality.)*

### Module 4: Intractability & advanced algorithms

Where cleverness runs out. Meet the problems nobody knows how to solve fast, learn the reduction machinery that ties them all together — a bridge straight into [computational-complexity](../computational-complexity/syllabus.md) — then learn the two respectable ways to keep going anyway.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | P, NP & polynomial-time reductions | Say precisely what "efficiently solvable" and "efficiently checkable" mean | decision problems, P vs NP, verifiers & certificates, polynomial-time (Karp) reductions, NP-hardness / NP-completeness, Cook–Levin (stated) |
| 4.2 | The NP-complete zoo | Prove a new problem hard by reducing a known-hard one to it | 3-SAT as the root, reductions to independent set / vertex cover / clique, Hamiltonian cycle, subset-sum |
| 4.3 | Approximation algorithms | Give up optimality for a *provable* ratio | approximation ratio, vertex-cover 2-approximation, greedy set cover $(\ln n)$, metric-TSP 2-approximation, when a PTAS exists |
| 4.4 | Randomized algorithms | Let coin flips buy simplicity and speed | Las Vegas vs Monte Carlo, randomized quicksort's expected $O(n\log n)$, Karger's min-cut, hashing & fingerprinting |

**Boss problem 4:** Let $G$ have $V=\{1,\dots,7\}$ and edges $12, 23, 34, 45, 56, 67, 17, 25, 36$. (a) Give a maximum independent set, the minimum vertex cover it certifies, and a maximum clique in $\overline G$ — and name the identity that lets one computation answer all three. (b) Run the maximal-matching 2-approximation on $G$ (scanning the edges in the order listed): give its cover, the lower bound on $\text{OPT}$ the matching itself supplies, and the realized ratio. Then say what the guarantee does **and does not** promise about a graph you have not run it on. *(Solved: (a) max independent set $\{1,3,5\}$; its complement $\{2,4,6,7\}$ is a vertex cover, and $4$ is minimum, so $|\text{IS}|+|\text{VC}|=3+4=7=n$ — the identity $S$ independent $\iff V\setminus S$ a cover; $\{1,3,5\}$ is also a maximum clique of $\overline G$, since independence in $G$ is adjacency in $\overline G$. (b) Matching $\{12, 34, 56\}$ gives the cover $\{1,2,3,4,5,6\}$ of size $6$; $|M|=3$ so $\text{OPT}\ge 3$, and the realized ratio is $6/4=1.5$. The guarantee promises only $\text{ALG}\le 2\,\text{OPT}$ on **every** graph — a worst-case ceiling, not a prediction; it says nothing about which of two algorithms will do better on an untested instance, and a heuristic with no ratio at all may well beat it there.)*

## Sources of truth

- Cormen, Leiserson, Rivest & Stein, *Introduction to Algorithms* (CLRS) — canonical notation, the master theorem, and the level of rigor
- Kleinberg & Tardos, *Algorithm Design* — the design-paradigm framing and the exchange-argument / flow-modeling voice
- Erickson, *Algorithms* (free) — recurrences, backtracking-to-DP, and clean lower-bound arguments
- Dasgupta, Papadimitriou & Vazirani, *Algorithms* — compact treatment of graphs, NP-completeness, and randomization

## Notes

- Builds directly on [discrete-mathematics](../discrete-mathematics/syllabus.md) (induction for correctness proofs, graphs, counting, and the summation identities behind every recurrence). Where a DP or greedy proof needs induction, that habit is assumed, not re-taught. The handful of data structures the course *uses* — a dynamic array, a hash table, a binary heap as a priority queue — are stated with their operation costs on the reference card and built where the analysis needs them (the heap in 3.3, the disjoint-set forest in 2.4); [programming-foundations](../programming-foundations/syllabus.md) covers them as implementations, and reading it alongside is a help but not a gate.
- Module 4 is a deliberate bridge to [computational-complexity](../computational-complexity/syllabus.md): this course does the *reductions and the coping strategies*; that course does the *classes, hierarchies, and the theory of why*. It also feeds [cryptography](../cryptography/syllabus.md) (hardness assumptions, randomized algorithms, modular arithmetic under the hood) and [computational-biology](../computational-biology/syllabus.md) (edit distance and sequence alignment are the LCS lesson, applied).
- The flow/matching thread in 3.5 overlaps the network-flows module of [graph-theory](../graph-theory/syllabus.md); there the emphasis is *why the duality holds*, here it is *how to compute the flow and how fast*. A good place to name the cross-subject bridge **augmenting paths ↔ max-flow min-cut duality ↔ bipartite matching**.

---

*Revision note (2026-09-02):* **prerequisite re-scoped from
`programming-foundations` + `discrete-mathematics` to `discrete-mathematics`
alone**, with `programming-foundations` demoted to "recommended alongside."

The reason is the Computer Science field's analytical framing (see
`CS-BUILD-BRIEF.md`): this course teaches you to *analyse* an algorithm — derive
its cost, prove it correct, break it with a counterexample — not to implement one.
Under that framing the only thing it actually needs from a first programming
course is fluency with a handful of data-structure **interfaces and their costs**
(dynamic array, hash table, binary heap, and the disjoint-set forest it builds
itself in 2.4), which is a page of the reference card rather than a fifteen-lesson
dependency. What it genuinely needs is induction, summations, counting and graph
vocabulary — all of which are `discrete-mathematics`, and all of which are built.

Practical consequence: **`algorithms` no longer waits on the unbuilt Tier 0 root**,
which matters because it is the most-cited unbuilt course in the library and the
gate on `cryptography`, `programming-languages` and `computational-biology`.
Module and lesson structure are unchanged at 20; `roadmap.json`'s `prereqs` should
be updated to match.


*Revision note (2026-09-05):* **boss problem 4 re-aimed.** As written it asked
for two proofs — Independent Set $\le_p$ Vertex Cover, and the maximal-matching
2-approximation bound — both of which are now stated with full proofs in the body
of lessons 4.2 and 4.3 and summarised on the reference card. Since quizzes are
**open book** and boss problems seed the app's quiz synthesis, that made it a
recall exercise against a page the learner has open, which the `OPEN_BOOK` clause
in `server.js` explicitly forbids. The replacement keeps both topics but asks for
them on a concrete instance plus a judgement about what a proved ratio does and
does not promise. The stated answers are machine-verified.

Modules 3 and 4 were otherwise built exactly as specified — module structure,
lesson list and count unchanged at 20 — and the boss instances in problems 3 and 4
appear in no lesson. Archetype mix as built: cost derivation and hand-trace carry
Module 3; counterexample construction and design-under-constraint carry Module 4,
with reduction-and-impossibility concentrated in 4.1–4.2 (including a problem that
asks the learner to *judge four claimed reductions* rather than produce one).
