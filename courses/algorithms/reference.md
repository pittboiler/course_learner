# Algorithms · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Three moves run through the whole course: **design** an algorithm, **prove** it
correct, **prove** how fast it runs. Module 1 builds the measuring stick — a
notation for growth, two ways to solve a recurrence, and the one theorem that
reads most divide-and-conquer answers off in a glance. Module 2 adds the two great
optimization paradigms and, more importantly, the question of which one a problem
wants: greedy commits locally and needs a *proof*, dynamic programming keeps every
subproblem and needs a *table*. Module 3 turns both loose on graphs, where the
recurring question is which algorithm a problem's *preconditions* allow — and ends
with the course's first duality, where the answer comes with a certificate anyone
can check. Module 4 is the negative image of all of it: what to do when no
efficient algorithm exists, how to *prove* that, and the two honest responses —
give up optimality for a proved ratio, or give up determinism. Mid-problem, this
card is where the definitions, the master-theorem cases, the standard recurrences,
the greedy-proof templates, the DP recurrences, the graph-algorithm decision
tables, the reduction checklist and the recurring traps live in one place.

*This card covers the whole course (lessons 1.1–4.4).*

## Notation

| Symbol | Means | First used |
|---|---|---|
| $T(n)$ | running time on an input of size $n$ — **worst case** unless stated otherwise | [1.1](lessons/01-01-asymptotic-notation.md) |
| $f(n) = O(g(n))$ | $f$ grows **no faster** than $g$: $\exists c, n_0$ with $f(n) \le c\,g(n)$ for $n \ge n_0$ | [1.1](lessons/01-01-asymptotic-notation.md) |
| $f(n) = \Omega(g(n))$ | $f$ grows **at least as fast** as $g$ | [1.1](lessons/01-01-asymptotic-notation.md) |
| $f(n) = \Theta(g(n))$ | **same rate**: both $O$ and $\Omega$ | [1.1](lessons/01-01-asymptotic-notation.md) |
| $f(n) = o(g(n))$ | **strictly** slower: $\lim f/g = 0$ (holds for *every* $c$, not just some) | [1.1](lessons/01-01-asymptotic-notation.md) |
| $f(n) = \omega(g(n))$ | strictly faster: $\lim f/g = \infty$ | [1.1](lessons/01-01-asymptotic-notation.md) |
| $c$, $n_0$ | the witnessing constant and threshold every $O/\Omega/\Theta$ claim needs | [1.1](lessons/01-01-asymptotic-notation.md) |
| $a$, $b$, $f(n)$ | in $T(n) = a\,T(n/b) + f(n)$: **how many** subproblems, **how much smaller**, and the split-plus-combine cost | [1.2](lessons/01-02-recurrences-recursion-trees-substitution.md) |
| $n^{\log_b a}$ | the **watershed** — total work at the leaves, i.e. what the recursion alone costs | [1.3](lessons/01-03-the-master-theorem.md) |
| $H_m$ | the harmonic sum $\sum_{j=1}^m 1/j = \Theta(\log m)$ | [1.3](lessons/01-03-the-master-theorem.md) |
| $\epsilon$ | the *polynomial* gap a master-theorem case 1 or 3 requires | [1.3](lessons/01-03-the-master-theorem.md) |
| $k$ (regularity) | the constant $<1$ in $a f(n/b) \le k f(n)$, case 3's side condition | [1.3](lessons/01-03-the-master-theorem.md) |
| $\prec$ | informal "is $o$ of", used when ranking functions | [1.1](lessons/01-01-asymptotic-notation.md) |
| $[s_i, f_i)$ | an interval request: start and finish times | [2.1](lessons/02-01-the-greedy-method-and-interval-scheduling.md) |
| $w_i$, $L(C)$ | a symbol's weight; a code's expected length | [2.2](lessons/02-02-huffman-coding.md) |
| $H$ | entropy, $-\sum_i p_i\log_2 p_i$ — the floor on expected code length | [2.2](lessons/02-02-huffman-coding.md) |
| $S$, $V\setminus S$ | the two sides of a **cut** | [2.3](lessons/02-03-minimum-spanning-trees-kruskal-and-prim.md) |
| $n$, $m$ (graphs) | number of vertices, number of edges | [2.3](lessons/02-03-minimum-spanning-trees-kruskal-and-prim.md) |
| $\hat c_i$, $\Phi$ | amortized cost of operation $i$; the potential function | [2.4](lessons/02-04-amortized-analysis-and-union-find.md) |
| $\alpha(n)$ | inverse Ackermann — $\le 4$ for any real $n$, but not $O(1)$ | [2.4](lessons/02-04-amortized-analysis-and-union-find.md) |
| $\mathrm{OPT}[i,w]$ | best value from the first $i$ items within capacity $w$ | [2.5](lessons/02-05-dynamic-programming-and-knapsack.md) |
| $W$ (knapsack) | capacity — written in **binary**, hence the pseudo-polynomial trap | [2.5](lessons/02-05-dynamic-programming-and-knapsack.md) |
| $L[i,j]$, $D[i,j]$ | LCS length / edit distance of two prefixes | [2.6](lessons/02-06-dp-on-sequences-lcs-and-edit-distance.md) |
| $\delta(s,v)$ | true shortest-path distance from $s$ to $v$ (hops in 3.1, weight from 3.3 on) | [3.1](lessons/03-01-graph-search-bfs-and-dfs.md) |
| $d[v]$, $f[v]$ | DFS **discovery** and **finish** times of $v$ | [3.1](lessons/03-01-graph-search-bfs-and-dfs.md) |
| $d[v]$ (shortest paths) | *tentative* distance — the best route to $v$ found so far. Same letter, different meaning; context is the module | [3.3](lessons/03-03-dijkstras-shortest-paths.md) |
| white / grey / black | undiscovered / discovered-but-open / finished — DFS needs all three | [3.1](lessons/03-01-graph-search-bfs-and-dfs.md) |
| $G^{\mathrm{SCC}}$ | the **condensation**: one node per strongly connected component | [3.2](lessons/03-02-topological-sort-and-strongly-connected-components.md) |
| $h(v)$ | Johnson's **potential** on a vertex, used to reweight edges | [3.3](lessons/03-03-dijkstras-shortest-paths.md) |
| $D^{(k)}[i][j]$ | best $i\to j$ path with intermediates from $\{1..k\}$ (Floyd–Warshall) | [3.4](lessons/03-04-bellman-ford-and-floyd-warshall.md) |
| $c(u,v)$, $f(u,v)$ | capacity of an edge; flow on it | [3.5](lessons/03-05-max-flow-and-min-cut.md) |
| $\lvert f\rvert$ | the **value** of a flow — net outflow from $s$ | [3.5](lessons/03-05-max-flow-and-min-cut.md) |
| $\operatorname{cap}(S,T)$ | capacity of a cut: total capacity of edges from $S$ to $T$ only | [3.5](lessons/03-05-max-flow-and-min-cut.md) |
| $\mathsf P$, $\mathsf{NP}$ | solvable in polynomial time; **verifiable** in polynomial time | [4.1](lessons/04-01-p-np-and-polynomial-time-reductions.md) |
| $A \le_p B$ | $A$ reduces to $B$ in polynomial time — "$B$ is at least as hard as $A$" | [4.1](lessons/04-01-p-np-and-polynomial-time-reductions.md) |
| $x$, $y$ (verifiers) | the instance and its **certificate**; $y$ must be polynomially short | [4.1](lessons/04-01-p-np-and-polynomial-time-reductions.md) |
| $\text{OPT}$, $\text{ALG}$ | the optimum value; what your algorithm returned | [4.3](lessons/04-03-approximation-algorithms.md) |
| $\rho$ | approximation ratio — a **worst-case** bound, not an average | [4.3](lessons/04-03-approximation-algorithms.md) |
| $\varepsilon$ (approximation) | the slack in a $(1+\varepsilon)$ scheme; the dial a PTAS/FPTAS exposes | [4.3](lessons/04-03-approximation-algorithms.md) |
| $H_n$ | $\sum_{i\le n} 1/i \approx \ln n + 0.577$ — greedy set cover's ratio | [4.3](lessons/04-03-approximation-algorithms.md) |
| $p$, $\delta$, $T$ | one run's success probability; target failure probability; number of runs | [4.4](lessons/04-04-randomized-algorithms.md) |

## Definitions

### Big-O, Omega, Theta

$$f = O(g) \iff \exists c, n_0 : f(n) \le c\,g(n) \ \forall n \ge n_0,$$
$$f = \Omega(g) \iff \exists c, n_0 : f(n) \ge c\,g(n) \ \forall n \ge n_0, \qquad f = \Theta(g) \iff \text{both}.$$

Every definition has the same shape: **beyond some point $n_0$, within some factor $c$.** Roughly, $O, \Omega, \Theta, o, \omega$ are to growth rates what $\le, \ge, =, <, >$ are to numbers.

*Introduced:* [1.1](lessons/01-01-asymptotic-notation.md)

### Little-o and little-omega

$$f = o(g) \iff \forall c > 0\ \exists n_0 : f(n) < c\,g(n) \ \forall n \ge n_0 \iff \lim_{n\to\infty} f(n)/g(n) = 0.$$

The quantifier flips from "for some $c$" to "for every $c$", which is much stronger. So $2n^2 = O(n^2)$ but **not** $o(n^2)$.

*Introduced:* [1.1](lessons/01-01-asymptotic-notation.md)

### Worst, average and best case

$T(n) = \max_{|x| = n}(\text{steps on } x)$ is the **worst case** — the default here, and the only one that gives a guarantee. The **average case** is an expectation over an assumed input distribution, which must be stated. Quoting a bound without saying which is the standard error: merge sort is $\Theta(n\log n)$ worst-case, quicksort only on average.

*Introduced:* [1.1](lessons/01-01-asymptotic-notation.md); the distinction bites in [1.4](lessons/01-04-sorting-and-the-comparison-lower-bound.md)

### The accidental quadratic

A loop that looks linear but whose body costs $\Theta(i)$ — typically a membership test against a list, a string concatenation, or a remove-from-array — giving $\sum_{i} i = \Theta(n^2)$. It survives review because the nesting hides inside a library call, and survives testing because test inputs are small.

**Field test:** run at $n$ and $2n$; a ratio near 4 is quadratic, near 2 is linear.

*Introduced:* [1.1](lessons/01-01-asymptotic-notation.md)

### Recurrence

An equation giving $T(n)$ in terms of $T$ at smaller arguments, plus a base case. Two conventions used throughout: **floors and ceilings are ignored** (they never change the $\Theta$ class here), and **the base case $T(n) = \Theta(1)$ for constant $n$ is left unwritten** (it affects only finitely many values).

*Introduced:* [1.2](lessons/01-02-recurrences-recursion-trees-substitution.md)

### Recursion-tree method

Draw the call tree, label each node with its **non-recursive** work, and sum. Usually easiest as *work per level* $\times$ *number of levels*. Three questions settle almost every recurrence: how much work per level, how many levels, and is the per-level work growing, shrinking or flat?

*Introduced:* [1.2](lessons/01-02-recurrences-recursion-trees-substitution.md)

### Substitution method

Guess a closed form; prove it by induction, assuming $T(k) \le c\,g(k)$ for $k < n$ and deriving $T(n) \le c\,g(n)$ **with the same $c$**. If the derivation ends at $(c+1)g(n)$ or $c\,g(n) + \text{something}$, the induction has failed — the constant drifts once per level and no larger $c$ repairs it.

*Introduced:* [1.2](lessons/01-02-recurrences-recursion-trees-substitution.md)

### Strengthening the hypothesis

When a substitution leaves a *lower-order* leftover, prove the **stronger** statement $T(n) \le c\,g(n) - d$. You have more to prove but also more to assume, and the extra $-d$ absorbs the leftover. Needed for $T(n) = 2T(n/2)+1$, whose true solution $2n-1$ has exactly that shape.

*Introduced:* [1.2](lessons/01-02-recurrences-recursion-trees-substitution.md)

### Master theorem

For $T(n) = a\,T(n/b) + f(n)$ with constants $a \ge 1$, $b > 1$, compare $f(n)$ against the watershed $n^{\log_b a}$:

| case | condition | result |
|---|---|---|
| 1 | $f(n) = O(n^{\log_b a - \epsilon})$, some $\epsilon>0$ | $\Theta(n^{\log_b a})$ — leaves dominate |
| 2 | $f(n) = \Theta(n^{\log_b a})$ | $\Theta(n^{\log_b a}\log n)$ — every level ties |
| 3 | $f(n) = \Omega(n^{\log_b a + \epsilon})$ **and** $a f(n/b) \le k f(n)$, $k<1$ | $\Theta(f(n))$ — root dominates |

**Extended case 2:** if $f(n) = \Theta(n^{\log_b a}\log^k n)$ then $T(n) = \Theta(n^{\log_b a}\log^{k+1} n)$.

*Introduced:* [1.3](lessons/01-03-the-master-theorem.md)

### Regularity condition

Case 3's side condition $a\,f(n/b) \le k\,f(n)$ for some constant $k < 1$ and all large $n$. It is what licenses "the root dominates". Holds for every polynomial-times-polylog $f$; fails for oscillating $f$ such as $n^2(2+\sin n)$.

*Introduced:* [1.3](lessons/01-03-the-master-theorem.md)

### Decision tree

A binary tree modelling a comparison-based algorithm: internal nodes are comparisons, edges are outcomes, leaves are outputs. The worst-case comparison count is the tree's **height**. Correctness forces at least one leaf per distinguishable output, and a binary tree of height $h$ has at most $2^h$ leaves — so $h \ge \log_2(\#\text{outputs})$.

*Introduced:* [1.4](lessons/01-04-sorting-and-the-comparison-lower-bound.md)

### Comparison lower bound for sorting

Any algorithm sorting $n$ elements using only pairwise comparisons makes $\Omega(n\log n)$ comparisons in the worst case, since it needs $n!$ leaves and $\log_2(n!) = \Theta(n\log n)$.

It constrains a **model**, not an algorithm — counting and radix sort read key structure rather than comparing, and are linear under their assumptions without violating anything.

*Introduced:* [1.4](lessons/01-04-sorting-and-the-comparison-lower-bound.md)

### Karatsuba's identity

$$ad + bc = (a+b)(c+d) - ac - bd,$$

replacing two multiplications with one multiplication and two subtractions. Turns $T(n) = 4T(n/2)+\Theta(n)$ into $T(n) = 3T(n/2)+\Theta(n)$, i.e. $\Theta(n^2) \to \Theta(n^{\log_2 3})$.

*Introduced:* [1.5](lessons/01-05-divide-and-conquer-beyond-sorting.md)

### Galactic algorithm

An algorithm with a proven better exponent whose constant puts the crossover past any input that will ever exist — the sub-cubic matrix multiplications past Strassen, now near $n^{2.37}$. A reminder that asymptotics answer one question and not every question.

*Introduced:* [1.5](lessons/01-05-divide-and-conquer-beyond-sorting.md)

### Greedy algorithm

Make the choice that looks best right now and never reconsider. Usually a sort plus one linear pass, so usually $\Theta(n\log n)$ dominated by the sort. **Usually wrong** — it needs a proof, not a benchmark, because a wrong rule can be right on almost every input.

*Introduced:* [2.1](lessons/02-01-the-greedy-method-and-interval-scheduling.md)

### Exchange argument

The workhorse greedy proof: take an optimal solution, swap greedy's choice into it, show nothing got worse; then induct on the rest. Proves interval scheduling, Huffman and the MST cut property.

**It breaks when the objective changes** — the swap must not decrease *the thing you are maximizing*, and a swap that preserves cardinality is worthless once weights appear.

*Introduced:* [2.1](lessons/02-01-the-greedy-method-and-interval-scheduling.md)

### Greedy stays ahead

The alternative greedy proof: show that after $k$ choices greedy's $k$-th is at least as good as any solution's $k$-th, by induction on $k$. Then greedy can never run out of room first.

*Introduced:* [2.1](lessons/02-01-the-greedy-method-and-interval-scheduling.md)

### Interval scheduling

Given intervals, find the largest pairwise-disjoint subset. **Earliest finish time** is optimal; earliest start, shortest, and fewest-conflicts are all wrong. Latest *start* time is also optimal, being the time-reversal of earliest finish.

$\Theta(n\log n)$, and no comparison-based method beats that (sorting reduces to it).

*Introduced:* [2.1](lessons/02-01-the-greedy-method-and-interval-scheduling.md)

### Prefix-free code

No codeword is a prefix of another, so decoding needs no delimiters. **Equivalent to a binary tree with symbols at the leaves**, where a codeword is the root-to-leaf path and its length is the leaf's depth.

*Introduced:* [2.2](lessons/02-02-huffman-coding.md)

### Huffman coding

Repeatedly merge the two lowest-weight items into one of their combined weight; the merge history is the tree. $\Theta(k\log k)$ with a heap.

**Optimal** among prefix-free, integer-length, memoryless codes — and $H \le L < H + 1$ against the entropy floor.

*Introduced:* [2.2](lessons/02-02-huffman-coding.md)

### Spanning tree and MST

A subset of edges keeping a connected graph connected with no cycles — necessarily $n-1$ edges. A **minimum** spanning tree minimizes total weight. **Unique when all edge weights are distinct.**

*Introduced:* [2.3](lessons/02-03-minimum-spanning-trees-kruskal-and-prim.md)

### Cut property

For any partition of $V$ into non-empty $S$ and $V \setminus S$, a minimum-weight edge crossing the cut is in some MST; if it is the *unique* minimum crossing edge, it is in **every** MST.

This single theorem is Kruskal, Prim and Borůvka — they differ only in which cut they examine next.

*Introduced:* [2.3](lessons/02-03-minimum-spanning-trees-kruskal-and-prim.md)

### Cycle property

A strictly-heaviest edge on any cycle is in **no** MST. This is what licenses Kruskal's rejections and the reverse-delete algorithm. (It says nothing about a **bridge**, which every spanning tree must contain however heavy.)

*Introduced:* [2.3](lessons/02-03-minimum-spanning-trees-kruskal-and-prim.md)

### Amortized cost

Total cost of $n$ operations, divided by $n$ — a **worst-case** bound on an aggregate, with no probability in it. Holds for every sequence, including adversarial ones.

*Introduced:* [2.4](lessons/02-04-amortized-analysis-and-union-find.md)

### The potential method

Pick $\Phi$ with $\Phi(D_0) = 0$ and $\Phi \ge 0$ always; define $\hat c_i = c_i + \Phi(D_i) - \Phi(D_{i-1})$. The $\Phi$ terms telescope, so $\sum \hat c_i \ge \sum c_i$ and any bound on the amortized costs bounds the total.

*Introduced:* [2.4](lessons/02-04-amortized-analysis-and-union-find.md)

### Union-find (disjoint-set forest)

`MAKE-SET`, `FIND`, `UNION` on a partition, each set a tree rooted at its representative. **Union by rank** attaches the shorter tree under the taller; **path compression** re-points a `FIND` path directly at the root.

With both: $O(m\,\alpha(n))$ amortized for $m$ operations. With either alone: $O(\log n)$.

*Introduced:* [2.4](lessons/02-04-amortized-analysis-and-union-find.md)

### Optimal substructure

An optimal solution is composed of optimal solutions to subproblems. Necessary for both greedy and DP.

*Introduced:* [2.5](lessons/02-05-dynamic-programming-and-knapsack.md)

### Overlapping subproblems

The recursion asks the same question many times. This is what distinguishes **dynamic programming** from divide-and-conquer — and it is why memoizing merge sort achieves nothing.

*Introduced:* [2.5](lessons/02-05-dynamic-programming-and-knapsack.md)

### Pseudo-polynomial

A running time polynomial in the **numeric value** of an input number but exponential in its **encoded length**. Knapsack's $\Theta(nW)$ is the standard example: $W$ is written in binary, so the input is $\Theta(n\log W)$ bits long.

*Introduced:* [2.5](lessons/02-05-dynamic-programming-and-knapsack.md)

### Longest common subsequence

Longest sequence appearing in both inputs in order, not necessarily contiguously. (Contrast **substring**, which must be contiguous — a different recurrence.) $\Theta(mn)$.

*Introduced:* [2.6](lessons/02-06-dp-on-sequences-lcs-and-edit-distance.md)

### Edit distance (Levenshtein)

Fewest single-character insertions, deletions and substitutions turning one string into another. $\Theta(mn)$; the same table with a substitution matrix and gap penalties is Needleman–Wunsch.

*Introduced:* [2.6](lessons/02-06-dp-on-sequences-lcs-and-edit-distance.md)

### Hirschberg's algorithm

Recovers a full alignment in $\Theta(\min(m,n))$ space and $\Theta(mn)$ time, by finding where an optimal alignment crosses the middle row (two space-efficient passes) and recursing on both halves. Divide-and-conquer layered on a DP.

*Introduced:* [2.6](lessons/02-06-dp-on-sequences-lcs-and-edit-distance.md)

### Adjacency list vs adjacency matrix

**List:** for each $u$, its out-neighbours. $\Theta(n+m)$ space; neighbour iteration $\Theta(\deg u)$; edge query $O(\deg u)$. **Matrix:** an $n\times n$ bit array. $\Theta(n^2)$ space; neighbour iteration $\Theta(n)$; edge query $O(1)$. Sparse graphs want the list; dense graphs and query-heavy workloads want the matrix.

*Introduced:* [3.1](lessons/03-01-graph-search-bfs-and-dfs.md)

### BFS and DFS

The same loop with a different container. **Queue → BFS**, which discovers vertices in non-decreasing hop-distance and whose parent pointers form a shortest-*hop* tree. **Stack → DFS**, which makes no distance claim but yields discovery/finish times. Both $\Theta(n+m)$ with adjacency lists.

*Introduced:* [3.1](lessons/03-01-graph-search-bfs-and-dfs.md)

### Discovery and finish times; the parenthesis theorem

$d[u]$ is when DFS first sees $u$, $f[u]$ when $u$'s whole subtree is done. For any $u,v$ the intervals $[d_u,f_u]$ and $[d_v,f_v]$ are **disjoint or nested, never partially overlapping**, and $u$ is a descendant of $v$ iff $[d_u,f_u]\subset[d_v,f_v]$. So one integer comparison answers "is $u$ in $v$'s subtree?".

*Introduced:* [3.1](lessons/03-01-graph-search-bfs-and-dfs.md)

### Edge classification (tree / back / forward / cross)

Relative to a DFS forest. **Back edges are the only ones that mean a cycle**, and a directed graph is cyclic iff a DFS finds one. Undirected DFS produces **only tree and back edges**.

*Introduced:* [3.1](lessons/03-01-graph-search-bfs-and-dfs.md)

### Topological order

A listing of a digraph's vertices with every edge pointing forward. Exists **iff** the graph is a DAG. Usually not unique.

*Introduced:* [3.2](lessons/03-02-topological-sort-and-strongly-connected-components.md)

### Kahn's algorithm

Topological sort by in-degree: emit any vertex of in-degree 0, decrement its successors, repeat. $\Theta(n+m)$. Reports a cycle if it emits fewer than $n$ vertices. Extends directly to **parallel** scheduling, since every in-degree-0 vertex is simultaneously ready.

*Introduced:* [3.2](lessons/03-02-topological-sort-and-strongly-connected-components.md)

### Strongly connected component

A maximal set of mutually reachable vertices. The relation is an equivalence, so the SCCs partition $V$.

*Introduced:* [3.2](lessons/03-02-topological-sort-and-strongly-connected-components.md)

### Condensation

Contract each SCC to one node. **Always a DAG** — a cycle among components would merge them. This is why a cyclic dependency graph can still be ordered, at the granularity of components.

*Introduced:* [3.2](lessons/03-02-topological-sort-and-strongly-connected-components.md)

### Kosaraju's algorithm

(1) DFS $G$, recording finish times. (2) DFS $G^{\mathrm{R}}$ (**the reversed graph**), trying roots in decreasing finish order; each tree is one SCC. $\Theta(n+m)$. Works because the largest finish time lies in a *source* component, which reversal turns into a *sink* — so the first search cannot leak out of it. Components come out in condensation-topological order. **Tarjan's** algorithm gets the same in one pass with low-link numbers.

*Introduced:* [3.2](lessons/03-02-topological-sort-and-strongly-connected-components.md)

### Relaxation

The update $d[v] \leftarrow \min\big(d[v],\ d[u] + w(u,v)\big)$, with `parent[v] <- u` on success. Every shortest-path algorithm in this course is a schedule for performing relaxations; they differ only in the order and how many times.

*Introduced:* [3.3](lessons/03-03-dijkstras-shortest-paths.md)

### Dijkstra's algorithm

Repeatedly settle the **unsettled vertex of smallest tentative distance** and relax its out-edges. Correct iff all weights are $\ge 0$; the proof's one use of non-negativity is that a *prefix* of a shortest path is no longer than the whole. Running time is a property of the priority queue, not the algorithm.

*Introduced:* [3.3](lessons/03-03-dijkstras-shortest-paths.md)

### Johnson's reweighting

$w'(u,v) = w(u,v) + h(u) - h(v)$. The $h$ terms **telescope**, so every path between a fixed pair shifts by the same $h(u)-h(v)$ and the shortest path is preserved — unlike adding a constant, which penalizes by hop count. All $w' \ge 0$ requires $h(v)\le h(u)+w(u,v)$ on every edge, which is possible **iff there is no negative cycle**. Get $h$ from one Bellman–Ford run from a virtual source.

*Introduced:* [3.3](lessons/03-03-dijkstras-shortest-paths.md)

### Bellman–Ford

Relax **every** edge, $|V|-1$ times. After round $k$, $d[v]$ is at most the best path to $v$ using $\le k$ edges; with no negative cycle some shortest path is simple and so uses $\le|V|-1$ edges. $\Theta(nm)$. One **extra** round that still relaxes something proves a negative cycle — reachable from the source only.

*Introduced:* [3.4](lessons/03-04-bellman-ford-and-floyd-warshall.md)

### Floyd–Warshall

$D^{(k)}[i][j] = \min\big(D^{(k-1)}[i][j],\ D^{(k-1)}[i][k] + D^{(k-1)}[k][j]\big)$, with **$k$ as the outermost loop**. $\Theta(n^3)$ time, $\Theta(n^2)$ space, safe to update in place. Negative edges fine; a negative cycle exists iff some $D[i][i] < 0$.

*Introduced:* [3.4](lessons/03-04-bellman-ford-and-floyd-warshall.md)

### Flow network, flow, value

A digraph with capacities $c(u,v)\ge 0$, a source $s$ and a sink $t$. A **flow** obeys $0\le f(u,v)\le c(u,v)$ and conservation (inflow = outflow) at every vertex but $s,t$. Its **value** $\lvert f\rvert$ is the net outflow from $s$.

*Introduced:* [3.5](lessons/03-05-max-flow-and-min-cut.md)

### Cut (flow networks)

A partition $V = S \sqcup T$ with $s\in S$, $t\in T$. Its capacity counts only edges **from $S$ to $T$**. Weak duality: $\lvert f\rvert \le \operatorname{cap}(S,T)$ for every flow and every cut — so any cut is an upper bound and a matching pair is a proof of optimality for both.

*Introduced:* [3.5](lessons/03-05-max-flow-and-min-cut.md)

### Residual graph and augmenting path

For each edge, a **forward** residual edge of capacity $c-f$ and a **backward** residual edge of capacity $f$ (how much you may *cancel*). An **augmenting path** is any $s\to t$ path in it. The backward edges are load-bearing: without them "no augmenting path" no longer implies maximum.

*Introduced:* [3.5](lessons/03-05-max-flow-and-min-cut.md)

### Max-flow min-cut theorem

For a flow $f$, these are equivalent: $f$ is maximum; the residual graph has no augmenting path; $\lvert f\rvert = \operatorname{cap}(S,T)$ for some cut. The proof constructs the min cut: **the vertices reachable from $s$ in the residual graph at termination**.

*Introduced:* [3.5](lessons/03-05-max-flow-and-min-cut.md)

### Integrality theorem

With integer capacities, some maximum flow is integral and Ford–Fulkerson finds one. This is what makes flow a *combinatorial* tool — matchings and assignments never come out fractional.

*Introduced:* [3.5](lessons/03-05-max-flow-and-min-cut.md)

### Bipartite matching as flow

Add $s\to L$ and $R\to t$ edges of capacity 1, orient the original edges $L\to R$ with capacity 1. Max flow = **maximum matching** (by integrality); min cut = **minimum vertex cover** (König's theorem), and the source side of the cut exhibits a **Hall violator** — a set $A\subseteq L$ with $|N(A)| < |A|$ — which is the human-readable explanation of *why* no larger matching exists.

*Introduced:* [3.5](lessons/03-05-max-flow-and-min-cut.md)

### Decision problem

A problem with a yes/no answer, so equivalently a set of strings. The theory is stated for these; optimization versions are recovered by **self-reducibility** (binary-search the value with $O(\log)$ oracle calls, then fix the solution one element at a time).

*Introduced:* [4.1](lessons/04-01-p-np-and-polynomial-time-reductions.md)

### P

Decidable in time $O(|x|^c)$. Everything in Modules 1–3.

*Introduced:* [4.1](lessons/04-01-p-np-and-polynomial-time-reductions.md)

### NP, certificate, verifier

$A\in\mathsf{NP}$ iff there is a polynomial-time verifier $V$ and polynomial $p$ with $x\in A \iff \exists y,\ |y|\le p(|x|),\ V(x,y)$ accepts. **Nondeterministic polynomial**, *not* "not polynomial" — and $\mathsf P\subseteq\mathsf{NP}$. The definition constrains **yes**-instances only; short proofs of "no" is the class **co-NP**.

*Introduced:* [4.1](lessons/04-01-p-np-and-polynomial-time-reductions.md)

### Polynomial-time (Karp) reduction

$A \le_p B$: a polynomial-time $f$ with $x\in A \iff f(x)\in B$. Transitive. If $B\in\mathsf P$ then $A\in\mathsf P$ — read contrapositively, that is the hardness tool. **Both directions of the $\iff$ must be proved.**

*Introduced:* [4.1](lessons/04-01-p-np-and-polynomial-time-reductions.md)

### NP-hard vs NP-complete

**NP-hard:** every $A\in\mathsf{NP}$ reduces to it — a lower bound only, so it may be undecidable (the halting problem is NP-hard). **NP-complete:** NP-hard **and** in NP. If any NP-complete problem is in P, then $\mathsf P=\mathsf{NP}$.

*Introduced:* [4.1](lessons/04-01-p-np-and-polynomial-time-reductions.md)

### Cook–Levin theorem (stated)

SAT is NP-complete. Proved by encoding an arbitrary polynomial-time verifier's computation as a formula. It is the bootstrap — after it, every other hardness result is a reduction.

*Introduced:* [4.1](lessons/04-01-p-np-and-polynomial-time-reductions.md)

### Gadget

A local piece of a reduction. Two jobs: a **choice gadget** (per clause) lets the target pick a satisfying literal; a **consistency gadget** (per variable) forbids setting $x$ both ways. For Independent Set: a triangle per clause, an edge between contradictory literals.

*Introduced:* [4.2](lessons/04-02-the-np-complete-zoo.md)

### Independent Set / Vertex Cover / Clique

Three views of one problem. $S$ is independent in $G$ $\iff$ $V\setminus S$ is a vertex cover $\iff$ $S$ is a clique in $\overline G$. So $|\text{max IS}| + |\text{min VC}| = n$, and all three are equally hard.

*Introduced:* [4.2](lessons/04-02-the-np-complete-zoo.md)

### Approximation ratio

An algorithm is a **$\rho$-approximation** if it is polynomial-time and, on **every** input, $\text{ALG}\le\rho\,\text{OPT}$ (minimization) or $\text{ALG}\ge\text{OPT}/\rho$ (maximization). Worst case, not average — "usually within 5%" is a benchmark, not a ratio.

*Introduced:* [4.3](lessons/04-03-approximation-algorithms.md)

### The lower-bound trick

Every ratio proof compares to a **computable** lower bound $L\le\text{OPT}$, never to $\text{OPT}$: a maximal matching for vertex cover, an MST for metric TSP, the largest remaining set for set cover. Finding $L$ *is* the design problem.

*Introduced:* [4.3](lessons/04-03-approximation-algorithms.md)

### Tight example

An instance achieving the claimed ratio, proving the analysis cannot be improved. $K_{n,n}$ for vertex cover (ratio exactly 2); the doubling-block family for greedy set cover. **A ratio without a tight example may just be a loose proof.**

*Introduced:* [4.3](lessons/04-03-approximation-algorithms.md)

### PTAS and FPTAS

**PTAS:** ratio $1+\varepsilon$ for each fixed $\varepsilon$, polynomial in $n$ — but possibly $O(n^{1/\varepsilon})$. **FPTAS:** also polynomial in $1/\varepsilon$. Knapsack has an FPTAS (round values to multiples of $\varepsilon v_{\max}/n$, giving $O(n^3/\varepsilon)$); Euclidean TSP has a PTAS; general TSP has neither.

*Introduced:* [4.3](lessons/04-03-approximation-algorithms.md)

### Las Vegas vs Monte Carlo

**Las Vegas:** always correct, *running time* is random (randomized quicksort). **Monte Carlo:** fixed time, *answer* may be wrong (Karger, Freivalds, Miller–Rabin). Repetition reduces slowness in the first and wrongness in the second — and only cleanly when the error is **one-sided**.

*Introduced:* [4.4](lessons/04-04-randomized-algorithms.md)

### Amplification

$T$ independent runs of a one-sided algorithm with success $p$ all fail with probability $(1-p)^T\le e^{-pT}$, so $T\ge\frac1p\ln\frac1\delta$ reaches failure $\delta$. **Judge a Monte Carlo algorithm by $\frac1p\ln\frac1\delta$ times one run's cost, never by one run's success rate.**

*Introduced:* [4.4](lessons/04-04-randomized-algorithms.md)

### Karger's contraction algorithm

Contract a uniformly random edge until two supernodes remain; return the edges between them. A fixed min cut survives with probability $\ge 2/(n(n-1)) = \binom n2^{-1}$. Corollary: a graph has at most $\binom n2$ minimum cuts. Karger–Stein recurses instead of restarting: $O(n^2\log^3 n)$.

*Introduced:* [4.4](lessons/04-04-randomized-algorithms.md)

### Fingerprinting (Freivalds)

Check $AB=C$ in $O(n^2)$ by testing $A(Br)=Cr$ for random $r\in\{0,1\}^n$. Never rejects a true equality; accepts a false one with probability $\le 2^{-k}$ after $k$ rounds. **Verifying is cheaper than computing** — NP's asymmetry, made practical.

*Introduced:* [4.4](lessons/04-04-randomized-algorithms.md)

## Formulas and rules

### Growth facts, all provable from the definitions

| fact | use |
|---|---|
| $\log_a n = \Theta(\log_b n)$ | the base of a log never matters inside $O/\Omega/\Theta$ |
| $n^a = o(n^b)$ for $a < b$ | polynomials ordered by exponent |
| $\log^k n = o(n^\epsilon)$, every $k$, every $\epsilon>0$ | any log loses to any positive power |
| $n^k = o(c^n)$ for $c>1$ | any polynomial loses to any exponential |
| $f_1 = O(g_1), f_2 = O(g_2) \Rightarrow f_1+f_2 = O(\max(g_1,g_2))$ | only the slowest phase counts |
| $n! \le n^n$, and $\log_2(n!) = \Theta(n\log n)$ | the sorting lower bound |
| $2^{c\,n}$ vs $2^n$: a constant **multiplier** is free, a constant **in the exponent** is not | $2^{n+1}=O(2^n)$ but $2^{2n} \ne O(2^n)$ |

*From* [1.1](lessons/01-01-asymptotic-notation.md)

### Running times at a glance (1 operation per nanosecond)

| $n$ | $n$ | $n\log_2 n$ | $n^2$ | $n^3$ |
|---|---|---|---|---|
| $10^3$ | 1 µs | 10 µs | 1 ms | 1 s |
| $10^4$ | 10 µs | 133 µs | 100 ms | 16.7 min |
| $10^6$ | 1 ms | 20 ms | 16.7 min | 31.7 yr |

Three thresholds, not five columns: $n$ and $n\log n$ (size is not the limit), $n^2$ (fine at a thousand, painful at a million), $n^3$ and $2^n$ (size **is** the limit). At $n=60$, $2^n$ is ~36 years.

*From* [1.1](lessons/01-01-asymptotic-notation.md)

### Recursion-tree anatomy for $T(n) = a\,T(n/b) + f(n)$

| quantity | value |
|---|---|
| nodes at level $i$ | $a^i$ |
| subproblem size at level $i$ | $n/b^i$ |
| **work at level $i$** | $a^i f(n/b^i)$ |
| number of levels | $\log_b n$ |
| number of leaves | $a^{\log_b n} = n^{\log_b a}$ |

Flat per-level work $\Rightarrow$ multiply. Shrinking geometrically $\Rightarrow$ root wins. Growing geometrically $\Rightarrow$ leaves win. **Those three shapes are the master theorem's three cases.**

*From* [1.2](lessons/01-02-recurrences-recursion-trees-substitution.md), [1.3](lessons/01-03-the-master-theorem.md)

### Standard recurrences and their answers

| recurrence | answer | where |
|---|---|---|
| $T(n) = 2T(n/2) + \Theta(1)$ | $\Theta(n)$ | leaf-dominated |
| $T(n) = 2T(n/2) + \Theta(n)$ | $\Theta(n\log n)$ | merge sort, closest pair |
| $T(n) = 2T(n/2) + \Theta(n\log n)$ | $\Theta(n\log^2 n)$ | extended case 2 |
| $T(n) = 2T(n/2) + \Theta(n^2)$ | $\Theta(n^2)$ | root-dominated |
| $T(n) = T(n/2) + \Theta(1)$ | $\Theta(\log n)$ | binary search |
| $T(n) = T(n-1) + \Theta(n)$ | $\Theta(n^2)$ | quicksort worst case |
| $T(n) = T(n-2) + \Theta(n)$ | $\Theta(n^2)$ | subtractive |
| $T(n) = T(n/3) + T(2n/3) + \Theta(n)$ | $\Theta(n\log n)$ | unbalanced but constant-ratio |
| $T(n) = 3T(n/2) + \Theta(n)$ | $\Theta(n^{1.585})$ | Karatsuba |
| $T(n) = 7T(n/2) + \Theta(n^2)$ | $\Theta(n^{2.807})$ | Strassen |
| $T(n) = 2T(n/2) + n/\log n$ | $\Theta(n\log\log n)$ | the master-theorem **gap** |
| $T(n) = \sqrt n\,T(\sqrt n) + \Theta(n)$ | $\Theta(n\log\log n)$ | non-constant $a$ |

*From* [1.2](lessons/01-02-recurrences-recursion-trees-substitution.md), [1.3](lessons/01-03-the-master-theorem.md), [1.4](lessons/01-04-sorting-and-the-comparison-lower-bound.md), [1.5](lessons/01-05-divide-and-conquer-beyond-sorting.md)

### When the master theorem does NOT apply

| recurrence | why |
|---|---|
| $T(n) = T(n/3)+T(2n/3)+n$ | subproblems of **different sizes** |
| $T(n) = T(n-1)+n$ | **subtractive**, not divisive |
| $T(n) = \sqrt n\,T(\sqrt n)+n$ | $a$ is **not constant** |
| $T(n) = 2T(n/2) + n/\log n$ | falls in the **gap** — smaller than the watershed but not by $n^\epsilon$ |
| $T(n) = 2T(n/2) + n\log n$ | *not* case 3 — bigger, but not by $n^\epsilon$; use extended case 2 |

In every such case, draw a recursion tree.

*From* [1.3](lessons/01-03-the-master-theorem.md)

### Sorting facts

| algorithm | worst | average | space | notes |
|---|---|---|---|---|
| merge sort | $\Theta(n\log n)$ | $\Theta(n\log n)$ | $\Theta(n)$ | balanced split by construction; stable |
| quicksort (naive pivot) | $\Theta(n^2)$ | $\Theta(n\log n)$ | $O(\log n)$ | worst case on **sorted** input |
| quicksort (randomized) | $\Theta(n^2)$ | $\Theta(n\log n)$ expected | $O(\log n)$ | guarantee is over the coins, not the input |
| introsort | $\Theta(n\log n)$ | $\Theta(n\log n)$ | $O(\log n)$ | quicksort + heapsort fallback on depth |
| counting sort | $\Theta(n+k)$ | — | $\Theta(k)$ | keys in $[0,k)$; **not** a comparison sort |

Exact facts worth having: naive quicksort on a sorted array of size $n$ uses **exactly** $n(n-1)/2$ comparisons. The information floor $\lceil\log_2(n!)\rceil$ is $3, 5, 7, 10, 22, 62$ at $n = 3,4,5,6,10,20$.

*From* [1.4](lessons/01-04-sorting-and-the-comparison-lower-bound.md)

### Divide-and-conquer: which lever to pull

| algorithm | $a$ | $b$ | $f(n)$ | result | lever |
|---|---|---|---|---|---|
| naive multiply | 4 | 2 | $n$ | $\Theta(n^2)$ | — |
| **Karatsuba** | **3** | 2 | $n$ | $\Theta(n^{1.585})$ | reduce $a$ |
| Toom–Cook | 5 | 3 | $n$ | $\Theta(n^{1.465})$ | reduce $a$ |
| naive matrix | 8 | 2 | $n^2$ | $\Theta(n^3)$ | — |
| **Strassen** | **7** | 2 | $n^2$ | $\Theta(n^{2.807})$ | reduce $a$ |
| closest pair, naive combine | 2 | 2 | $n^2$ | $\Theta(n^2)$ | — |
| **closest pair** | 2 | 2 | $\mathbf{n}$ | $\Theta(n\log n)$ | reduce $f$ |

**The rule:** in case 1 the recursion dominates, so only reducing $a$ helps and optimizing the combine step buys nothing. In case 3 the combine dominates, so the reverse. **Read the case before choosing what to optimize.**

*From* [1.3](lessons/01-03-the-master-theorem.md), [1.5](lessons/01-05-divide-and-conquer-beyond-sorting.md)

### Useful logarithms

$$\log_2 3 = 1.58496, \quad \log_3 5 = 1.46497, \quad \log_2 7 = 2.80735, \quad \log_4 5 = 1.16096, \quad \log_2 5 = 2.32193.$$

*From* [1.5](lessons/01-05-divide-and-conquer-beyond-sorting.md)

### Greedy rules for interval scheduling

| rule | correct? | why / counterexample |
|---|---|---|
| **earliest finish time** | ✓ | finishing early is the only thing that helps later |
| **latest start time** | ✓ | the time-reversal of earliest finish |
| earliest start | ✗ | $A[0,20), B[1,3), C[4,6), D[7,9)$ — greedy 1, optimum 3 |
| shortest interval | ✗ | $A[0,10), B[9,11), C[10,20)$ — greedy 1, optimum 2 |
| longest interval | ✗ | $A[0,10), B[0,4), C[5,9)$ — greedy 1, optimum 2 |
| fewest conflicts | ✗ | needs a deliberate 11-interval construction; survives random testing |

**Recipe for breaking a greedy rule:** find the quantity it optimizes, then build an instance where that quantity is *anti-correlated* with the objective.

*From* [2.1](lessons/02-01-the-greedy-method-and-interval-scheduling.md)

### MST algorithms

| algorithm | strategy | cost |
|---|---|---|
| **Kruskal** | edges in weight order; skip cycle-closers (union-find) | $\Theta(m\log n)$ — dominated by the sort |
| **Prim** | grow one tree; cheapest edge leaving it (priority queue) | $\Theta(m\log n)$; $\Theta(m + n\log n)$ with a Fibonacci heap |
| **Borůvka** | every component picks its cheapest edge, all at once | $O(m\log n)$, $O(\log n)$ rounds — parallelizable |
| **reverse-delete** | edges in decreasing order; delete unless it disconnects | $\Theta(m^2)$ naively — deletions are much harder to support than unions |

All four are the cut property with a different schedule.

*From* [2.3](lessons/02-03-minimum-spanning-trees-kruskal-and-prim.md)

### The three amortized methods

| method | how |
|---|---|
| **aggregate** | bound the total for $n$ operations, then divide |
| **accounting** | charge a fixed price per operation, bank surplus as credit, never go negative |
| **potential** | $\hat c_i = c_i + \Delta\Phi$; telescoping gives the total |

Standard results: **dynamic array doubling** — $n$ appends cost $< 2n$, amortized $O(1)$ (grow by a constant *amount* instead and it is $\Theta(n^2)$). **Binary counter** — $n$ increments flip $< 2n$ bits, amortized 2, via $\Phi = $ number of 1-bits.

*From* [2.4](lessons/02-04-amortized-analysis-and-union-find.md)

### Three kinds of guarantee — do not confuse them

| bound | averaged over | an adversary can force… |
|---|---|---|
| **worst-case** $O(1)$ | nothing | never a slow operation |
| **amortized** $O(1)$ | the sequence | one slow operation, never a slow sequence |
| **expected** $O(1)$ | the algorithm's coin flips | a slow run, with small probability |

Dynamic arrays are amortized; hash tables are expected; the difference is why adversarial keys can degrade a hash table and cannot degrade a vector.

*From* [2.4](lessons/02-04-amortized-analysis-and-union-find.md) (expected cost is developed in 4.4)

### DP recurrences

**0/1 knapsack** — $\Theta(nW)$ time, $\Theta(nW)$ space (pseudo-polynomial):

$$\mathrm{OPT}[i,w] = \max\big(\mathrm{OPT}[i-1,w],\ v_i + \mathrm{OPT}[i-1,\,w-w_i]\big), \quad \text{second term only if } w_i \le w.$$

**Longest common subsequence** — $\Theta(mn)$:

$$L[i,j] = \begin{cases} L[i-1,j-1]+1 & x_i = y_j\\ \max(L[i-1,j],\ L[i,j-1]) & \text{otherwise}\end{cases}$$

**Edit distance** — $\Theta(mn)$, base cases $D[i,0] = i$ and $D[0,j] = j$:

$$D[i,j] = \min\big(D[i-1,j]+1,\ D[i,j-1]+1,\ D[i-1,j-1] + [\,x_i \ne y_j\,]\big).$$

**Backtracking** recovers the *solution* from a table of *values*, in $\Theta(m+n)$ — but the row-pair space optimization destroys the information it needs.

*From* [2.5](lessons/02-05-dynamic-programming-and-knapsack.md), [2.6](lessons/02-06-dp-on-sequences-lcs-and-edit-distance.md)

### Greedy or DP?

| ask | if yes |
|---|---|
| is there a **provably safe local choice** (exchange argument closes)? | greedy |
| do subproblems **overlap**, with no safe local choice? | dynamic programming |
| do subproblems **not** overlap? | divide-and-conquer — a table is pure overhead |

**Diagnostic:** if a greedy proof needs "swap a *bit* of $x$ for a *bit* of $y$", check whether the problem lets you take a bit of anything. Fractional knapsack does (greedy is optimal); 0/1 knapsack does not (NP-hard).

*From* [2.1](lessons/02-01-the-greedy-method-and-interval-scheduling.md), [2.5](lessons/02-05-dynamic-programming-and-knapsack.md)

### Graph representations

| operation | adjacency list | adjacency matrix |
|---|---|---|
| is $(u,v)$ an edge? | $O(\deg u)$ | $O(1)$ |
| iterate $u$'s neighbours | $\Theta(\deg u)$ | $\Theta(n)$ |
| BFS / DFS over the whole graph | $\Theta(n+m)$ | $\Theta(n^2)$ |
| space | $\Theta(n+m)$ | $\Theta(n^2)$ |

At $n = 10^5$, $m = 2\times10^5$: traversal is $3\times10^5$ steps with lists and $10^{10}$ with a matrix — **33,000×**, same algorithm. *([3.1](lessons/03-01-graph-search-bfs-and-dfs.md))*

### DFS edge classification — the mechanical test

Scanning edge $u\to v$:

| $v$ is… | class | note |
|---|---|---|
| white (undiscovered) | **tree** | recurse |
| grey (open) | **back** | $v$ is an ancestor → **cycle** |
| black and $d[u] < d[v]$ | **forward** | $v$ is a proper descendant |
| black and $d[u] > d[v]$ | **cross** | $f[v] < d[u]$: finished before $u$ started |

Two states instead of three is the classic cycle-detection bug: it reports a cycle on every forward and cross edge, e.g. on the DAG $A\to B$, $A\to C$, $B\to C$. *([3.1](lessons/03-01-graph-search-bfs-and-dfs.md))*

### Graph algorithms at a glance

| task | algorithm | cost |
|---|---|---|
| reachability, connected components | BFS or DFS | $\Theta(n+m)$ |
| shortest **hops** | BFS | $\Theta(n+m)$ |
| cycle detection (directed) | DFS, look for a back edge | $\Theta(n+m)$ |
| topological sort | DFS reverse-finish order, or Kahn | $\Theta(n+m)$ |
| strongly connected components | Kosaraju (2 passes) or Tarjan (1) | $\Theta(n+m)$ |
| minimum spanning tree | Kruskal / Prim | $O(m\log n)$ |
| max flow | Edmonds–Karp / Dinic | $O(VE^2)$ / $O(V^2E)$ |

### Which shortest-path algorithm?

| situation | algorithm | cost |
|---|---|---|
| one source, all $w \ge 0$ | Dijkstra + binary heap | $O(m\log n)$ |
| one source, negative edges | Bellman–Ford | $\Theta(nm)$ |
| one source, **DAG**, any weights | relax in topological order | $\Theta(n+m)$ |
| one source, all $w = $ same | BFS | $\Theta(n+m)$ |
| all pairs, dense or small $n$ | Floyd–Warshall | $\Theta(n^3)$ |
| all pairs, sparse, negative edges | Johnson (1 Bellman–Ford + $n$ Dijkstras) | $O(nm\log n)$ |
| detect a negative cycle anywhere | Bellman–Ford from a **virtual source** | $\Theta(nm)$ |

Rough crossover for all-pairs on a graph of average degree 10: Floyd–Warshall wins below $n\approx 30$, $n$-Dijkstras above. *([3.4](lessons/03-04-bellman-ford-and-floyd-warshall.md))*

### Dijkstra's priority queue — the running time is this choice

| queue | extract-min | decrease-key | total |
|---|---|---|---|
| unsorted array | $O(n)$ | $O(1)$ | $O(n^2 + m)$ |
| binary heap, decrease-key | $O(\log n)$ | $O(\log n)$ | $O((n+m)\log n)$ |
| binary heap, **lazy** (re-insert, skip stale) | $O(\log m)$ | — | $O(m\log n)$ |
| Fibonacci heap | $O(\log n)$ am. | $O(1)$ am. | $O(m + n\log n)$ |

The **array beats the heap** when $m > n^2/\log n$ — dense graphs. The lazy heap is what to write by default; its correctness needs the guard *skip an already-settled vertex*. Fibonacci heaps win on paper and lose on hardware. *([3.3](lessons/03-03-dijkstras-shortest-paths.md))*

### Dijkstra vs Prim — one expression apart

| | key in the priority queue | answers |
|---|---|---|
| **Prim** (MST) | $w(u,v)$ — the edge weight alone | cheapest tree connecting everything |
| **Dijkstra** | $d[u] + w(u,v)$ — distance from the source | cheapest route from one vertex |

Same loop, same queue. An MST does **not** contain shortest paths. *([2.3](lessons/02-03-minimum-spanning-trees-kruskal-and-prim.md), [3.3](lessons/03-03-dijkstras-shortest-paths.md))*

### Max-flow algorithms

| augmenting-path choice | bound | note |
|---|---|---|
| unspecified | $O(E\cdot\lvert f^\ast\rvert)$ | **pseudo-polynomial**; may not terminate on irrational capacities |
| shortest path by BFS (**Edmonds–Karp**) | $O(VE^2)$ | strongly polynomial — one line's difference |
| blocking flows (**Dinic**) | $O(V^2E)$; $O(E\sqrt V)$ on unit capacities | practical default; Hopcroft–Karp for matching |

To **exhibit** a min cut: after the algorithm stops, BFS the residual graph from $s$; the reachable set is $S^\ast$ and the cut is the edges leaving it. Saturated $\ne$ in the cut. *([3.5](lessons/03-05-max-flow-and-min-cut.md))*

### Problems that are secretly max-flow

| problem | modelling |
|---|---|
| bipartite matching | unit capacities $s\to L\to R\to t$ |
| minimum bipartite vertex cover | the min cut (König) |
| disjoint paths / network reliability | unit capacities; Menger's theorem |
| project selection, image segmentation | min cut on a profit/penalty network |
| scheduling with eligibility constraints | workers $\to$ shifts, capacities = availability |

### The reduction checklist — four obligations

To prove $B$ is NP-complete:

| # | obligation | what a broken proof does |
|---|---|---|
| 1 | $B\in\mathsf{NP}$: certificate + polynomial verifier | omits it → proves NP-hardness only |
| 2 | a map $f$ from a **known NP-complete** $A$ to $B$ | reverses the direction → proves the opposite |
| 3 | **both** $x\in A\Rightarrow f(x)\in B$ **and** the converse | proves one → proves nothing |
| 4 | $f$ polynomial-time, output polynomially sized | solves $A$ inside $f$ → a slow algorithm, not a reduction |

**The known-hard problem always goes on the LEFT.** Reducing your problem *to* SAT is how you *solve* it, not how you prove it hard. *([4.1](lessons/04-01-p-np-and-polynomial-time-reductions.md), [4.2](lessons/04-02-the-np-complete-zoo.md))*

### The zoo, by lineage

| problem | reduced from | gadget idea |
|---|---|---|
| 3-SAT | SAT | split long clauses with fresh variables |
| Independent Set | 3-SAT | triangle per clause + edge per contradiction |
| Vertex Cover | Independent Set | $(G,k)\mapsto(G,n-k)$ |
| Clique | Independent Set | complement the graph |
| Graph 3-colouring | 3-SAT | palette triangle + per-clause OR-gadget |
| Subset-Sum | 3-SAT | one decimal column per variable and per clause |
| Hamiltonian Cycle | 3-SAT / Vertex Cover | traverse-a-gadget-one-way-or-the-other |
| TSP | Hamiltonian Cycle | weight 1 on $E(G)$, 2 elsewhere, threshold $n$ |
| Set Cover | Vertex Cover | one set per vertex, holding its incident edges |

**Easy/hard pairs that look alike:** 2-SAT (linear, via SCCs) vs 3-SAT (NP-complete) · shortest path (P) vs longest simple path (NP-hard) · min cut (P) vs MAX-CUT (NP-complete) · bipartite vertex cover (P, by min cut) vs general vertex cover (NP-complete). *([4.2](lessons/04-02-the-np-complete-zoo.md))*

### Growth at $n = 100$ — why "buy a faster machine" is not a plan

| $n$ | $2^n$ | at $10^9$/s |
|---|---|---|
| 20 | $10^6$ | 1 ms |
| 40 | $1.1\times10^{12}$ | 18 minutes |
| 60 | $1.2\times10^{18}$ | 37 years |
| 100 | $1.3\times10^{30}$ | $4\times10^{13}$ years |

A machine a **billion** times faster moves the reachable $n$ from 60 to 90. *([4.1](lessons/04-01-p-np-and-polynomial-time-reductions.md))*

### Approximability — NP-hard does not say which row

| class | meaning | example |
|---|---|---|
| **FPTAS** | $1+\varepsilon$, polynomial in $n$ **and** $1/\varepsilon$ | knapsack, $O(n^3/\varepsilon)$ |
| **PTAS** | $1+\varepsilon$ for fixed $\varepsilon$; may be $O(n^{1/\varepsilon})$ | Euclidean TSP |
| **constant** | a fixed $\rho$ and no better | vertex cover (2), metric TSP (3/2, Christofides) |
| **logarithmic** | $\Theta(\log n)$, and provably no better (Feige) | set cover, $H_n$ |
| **none** | no constant factor unless $\mathsf P=\mathsf{NP}$ | general TSP, max clique |

### Standard approximation algorithms and their proofs

| problem | algorithm | lower bound used | ratio | tight on |
|---|---|---|---|---|
| vertex cover | take both ends of a maximal matching | $|M|\le\text{OPT}$ (disjoint edges) | 2 | $K_{n,n}$ |
| metric TSP | double an MST, shortcut | $\text{MST}\le\text{OPT}$ (drop a tour edge) | 2 | — |
| metric TSP | Christofides (MST + odd-degree matching) | same | 3/2 | — |
| set cover | greedy: take the set covering the most new | counting argument | $H_n\approx\ln n$ | doubling blocks |
| knapsack | round values by $\varepsilon v_{\max}/n$, run the DP | each item loses $<\mu$ | $1+\varepsilon$ | — |

**Beware the natural heuristic:** max-degree greedy vertex cover has *no* constant ratio — its ratio grows like $H(k)$ and passes 2 at about 50 vertices, losing to the two-line matching algorithm. *([4.3](lessons/04-03-approximation-algorithms.md))*

### Randomization: what the coins buy

| algorithm | class | guarantee |
|---|---|---|
| randomized quicksort | Las Vegas | $E[\text{comparisons}] = 2(n+1)H_n-4n\approx 1.39\,n\log_2 n$; worst case still $\Theta(n^2)$ but no *input* triggers it |
| Karger min cut | Monte Carlo, one-sided | $p\ge\binom n2^{-1}$ per run; $\binom n2\ln\frac1\delta$ runs give failure $\delta$ |
| Freivalds $AB\stackrel?=C$ | Monte Carlo, one-sided | $O(kn^2)$, error $\le 2^{-k}$ |
| Miller–Rabin | Monte Carlo, one-sided | error $\le 4^{-k}$; 40 rounds $\approx 8\times10^{-25}$ |
| randomly-seeded hashing | — | no **fixed key set** is bad; needs a *cryptographic* key when an adversary observes outputs |

### Who moves last

| guarantee | averaged over | can an adversary who reads your code force the bad case? |
|---|---|---|
| worst case | nothing | never |
| amortized | the operation sequence | one operation, not a sequence |
| average case | an assumed **input distribution** | **yes** — the distribution is an assumption about the world |
| expected (randomized) | the algorithm's **coin flips** | **no** — the input is committed before the coins are flipped |

A fixed RNG seed silently moves you from the last row to the third. *([2.4](lessons/02-04-amortized-analysis-and-union-find.md), [4.4](lessons/04-04-randomized-algorithms.md))*

### Four honest responses to an NP-hard problem

1. **Approximate** with a proved ratio — and check which approximability row you are in first.
2. **Randomize** — sometimes exact, sometimes a proved failure probability you can amplify away.
3. **Solve exactly anyway** with a tuned exponential method (branch-and-cut, MILP, SAT/CP solvers). NP-hardness is a *worst-case* statement; real instances have structure, and 40-stop TSPs and million-variable SAT instances are solved daily.
4. **Restrict the input** to a class where the problem is polynomial (bipartite, planar, bounded treewidth, metric weights).

## Assumed, not taught here

This is a Tier 1 course. Its only prerequisite is
[discrete-mathematics](../discrete-mathematics/syllabus.md); it also *uses* a
small number of data structures through their interfaces, without building them
(the disjoint-set forest in 2.4 and the binary heap in 3.3 are the exceptions —
those it builds). [programming-foundations](../programming-foundations/syllabus.md)
is where those structures are built; it is a sibling entry point rather than a
prerequisite, and the two can be read in either order.

| Fact | Where it's taught |
|---|---|
| Induction and strong induction — every substitution proof and every correctness argument | [discrete-mathematics 1.4](../discrete-mathematics/lessons/01-04-induction-and-strong-induction.md) |
| $\sum_{i=1}^n i = n(n+1)/2$ and the other closed forms behind every recurrence | [discrete-mathematics 3.1](../discrete-mathematics/lessons/03-01-counting-rules-permutations-combinations.md) |
| Finite and infinite geometric sums (the three recursion-tree shapes) | [precalculus 3.3](../precalculus/lessons/03-03-series-and-infinite-geometric-sum.md) |
| Sigma notation and index shifting | [precalculus 3.2](../precalculus/lessons/03-02-sequences-and-sigma-notation.md) |
| Linear recurrences by characteristic equation (a *different* family from the divide-and-conquer ones here) | [discrete-mathematics 5.1](../discrete-mathematics/lessons/05-01-recurrence-relations.md) |
| Rooted binary trees: height, leaves, the $2^h$ leaf bound | [discrete-mathematics 5.3](../discrete-mathematics/lessons/05-03-trees-and-graph-coloring.md) |
| Pigeonhole (the decision-tree leaf count, the closest-pair box argument) | [discrete-mathematics 3.3](../discrete-mathematics/lessons/03-03-inclusion-exclusion-and-pigeonhole.md) |
| Logarithm and exponent identities, change of base | [precalculus 2.3](../precalculus/lessons/02-03-exponential-and-logarithmic-functions.md) |
| **Data-structure interfaces and costs** — dynamic array (append $O(1)$ amortised, **proved in 2.4**), hash set (membership $O(1)$ expected), binary heap / priority queue (insert and extract-min $O(\log n)$, used in 2.2 and 2.3, built in 3.3), disjoint-set forest (**built in 2.4**) | [programming-foundations 2.2](../programming-foundations/lessons/02-02-arrays-and-dynamic-arrays.md) (dynamic array), [2.5](../programming-foundations/lessons/02-05-hash-tables.md) (hash table), [3.3](../programming-foundations/lessons/03-03-heaps-and-priority-queues.md) (heap) |

**Deliberately deferred to other courses:** complexity classes, hierarchies and
the theory of *why* NP-completeness works
([computational-complexity](../computational-complexity/syllabus.md) — this course
does the reductions and the coping strategies); FFT-based multiplication
([fourier-analysis](../fourier-analysis/syllabus.md)); the memory-hierarchy
reasons behind practical crossovers
([computer-architecture](../computer-architecture/syllabus.md)); heavy
computational geometry.

## Pitfalls

### Asymptotics

- $O$ is an **upper bound only** — $n = O(n^2)$ is true and useless. Say $\Theta$ when you mean "exactly this rate". *([1.1](lessons/01-01-asymptotic-notation.md))*
- "Asymptotically better" means *eventually*, and eventually can be past any $n$ you will see. Strassen's crossover is in the hundreds; $\log n \le n^{0.01}$ only past $n \approx 2^{1000}$. *([1.1](lessons/01-01-asymptotic-notation.md), [1.5](lessons/01-05-divide-and-conquer-beyond-sorting.md))*
- Constant-factor work moves you **along** a column of the growth table; algorithmic work moves you **between** columns. Know which you are doing. *([1.1](lessons/01-01-asymptotic-notation.md))*
- "One loop, therefore linear" is valid only if every operation in the body is $O(1)$ — a fact about the **data structures**, not the loop count. Nesting hides in library calls. *([1.1](lessons/01-01-asymptotic-notation.md))*
- Always say **which case** you mean. "Quicksort is $O(n\log n)$" is false as a worst-case claim. *([1.1](lessons/01-01-asymptotic-notation.md), [1.4](lessons/01-04-sorting-and-the-comparison-lower-bound.md))*

### Recurrences

- A failed substitution often means the guess is **too weak to be provable**, not wrong. Strengthen to $T(n) \le c\,g(n) - d$. *([1.2](lessons/01-02-recurrences-recursion-trees-substitution.md))*
- Enlarging $c$ fixes **base cases only**. If the inductive step needs a bigger constant than it assumed, nothing is proved. *([1.2](lessons/01-02-recurrences-recursion-trees-substitution.md))*
- A recursion tree **finds** the answer; substitution **justifies** it. The tree glosses over floors, ceilings and ragged bottoms. *([1.2](lessons/01-02-recurrences-recursion-trees-substitution.md))*
- When a bound is in doubt, tabulate $T(n)/g(n)$: converging to a positive constant suggests $\Theta(g)$; drifting names the error (a drift of $\log_2 n + 1$ says you are off by a log). *([1.2](lessons/01-02-recurrences-recursion-trees-substitution.md))*

### Master theorem

- "Smaller than the watershed" is **not enough** for case 1 — it must be smaller by a factor $n^\epsilon$. $n/\log n$ is not, and falls in the gap. *([1.3](lessons/01-03-the-master-theorem.md))*
- Symmetrically, $n^{\log_b a}\log n$ is bigger than the watershed but **not case 3** — it is extended case 2, giving an extra $\log$, not $\Theta(f)$. *([1.3](lessons/01-03-the-master-theorem.md))*
- The gap failure is **asymptotic and invisible in tables**: $n/\log n \le n^{0.9}$ holds up to about $10^{17}$. Limits are not decided by testing values. *([1.3](lessons/01-03-the-master-theorem.md))*
- Don't skip the **regularity condition** in case 3; a case-3 answer without it is unproved. *([1.3](lessons/01-03-the-master-theorem.md))*
- **$a$ is how many, $b$ is how much smaller.** Swapping them silently changes the answer by a factor of $n$. *([1.3](lessons/01-03-the-master-theorem.md))*

### Sorting and lower bounds

- The $\Omega(n\log n)$ bound constrains **comparison** sorts only. Counting and radix sort are linear because they read key structure — the bound is about a model, and models have doors. *([1.4](lessons/01-04-sorting-and-the-comparison-lower-bound.md))*
- Counting sort is linear **in $n + k$**: with $k = n^2$ it is quadratic, and its "linear" claim is bought with an assumption about the key range. *([1.4](lessons/01-04-sorting-and-the-comparison-lower-bound.md))*
- Median-of-three fixes the *common* bad cases, not the worst case — on a sorted input of 128 it drops 8128 comparisons to 649, but the $\Theta(n^2)$ worst case survives, because a **deterministic** rule is public and the adversary chooses the input afterwards. Randomizing changes who moves last. *([1.4](lessons/01-04-sorting-and-the-comparison-lower-bound.md))*
- Merge sort's $\Theta(n)$ extra space, not its asymptotics, is why quicksort is usually the default. *([1.4](lessons/01-04-sorting-and-the-comparison-lower-bound.md))*

### Divide-and-conquer

- **Splitting alone buys nothing** — the naive 4-way and 8-way splits reproduce $\Theta(n^2)$ and $\Theta(n^3)$ exactly. The win is reducing the number of subproblems. *([1.5](lessons/01-05-divide-and-conquer-beyond-sorting.md))*
- **Optimize the end that dominates.** In case 1 a faster combine step buys literally nothing; in case 3 it is the only thing that helps. *([1.3](lessons/01-03-the-master-theorem.md), [1.5](lessons/01-05-divide-and-conquer-beyond-sorting.md))*
- The closest-pair strip can hold **every** point; the bound is on how many points sit near *one* point, not on the strip's size. The adversarial input is all points on the dividing line. *([1.5](lessons/01-05-divide-and-conquer-beyond-sorting.md))*
- A better exponent with a worse constant may never pay — the crossover scales as $C^{1/\Delta}$ where $\Delta$ is the exponent gap, so for Strassen's $\Delta = 0.193$ a factor of 10 in $C$ moves the crossover by a factor of 150,000. *([1.5](lessons/01-05-divide-and-conquer-beyond-sorting.md))*

### Greedy

- A wrong greedy rule can be right on almost every input — fewest-conflicts survives 40,000 random instances. Random testing **refutes**, it never **confirms**. *([2.1](lessons/02-01-the-greedy-method-and-interval-scheduling.md))*
- Greedy returns **an** optimal solution, not **the** one; two correct implementations can disagree. *([2.1](lessons/02-01-the-greedy-method-and-interval-scheduling.md))*
- **Re-run the proof whenever the objective changes.** Adding weights to interval scheduling kills earliest-finish-time immediately, because the exchange preserved *cardinality* and cardinality stopped being the objective. *([2.1](lessons/02-01-the-greedy-method-and-interval-scheduling.md), [2.3](lessons/02-03-minimum-spanning-trees-kruskal-and-prim.md))*
- Huffman builds from the **rare** end. "Give the most frequent symbol the shortest code" is not the algorithm and is not correct as a rule. *([2.2](lessons/02-02-huffman-coding.md))*
- Huffman's tree is **not unique** (ties, and the arbitrary 0/1 assignment), which is why formats transmit the codebook. *([2.2](lessons/02-02-huffman-coding.md))*
- Huffman is optimal **within a class**: prefix-free, integer lengths, memoryless. Arithmetic coding, context models and LZ77 all beat it by leaving the class, not by breaking the theorem. *([2.2](lessons/02-02-huffman-coding.md))*
- An MST does **not** contain shortest paths — it minimizes total weight, not per-pair distance. *([2.3](lessons/02-03-minimum-spanning-trees-kruskal-and-prim.md))*
- Greedy works for MST because of the **cut property**, not because "graphs like greedy". Minimum Hamiltonian cycle looks similar and is NP-hard. *([2.3](lessons/02-03-minimum-spanning-trees-kruskal-and-prim.md))*

### Amortized analysis

- Amortized has **no probability in it** — it is a worst-case bound on a total. *Expected* is the probabilistic one. *([2.4](lessons/02-04-amortized-analysis-and-union-find.md))*
- Growth by a **factor** ($\times 2$, $\times 1.5$) gives amortized $O(1)$; growth by an **amount** ($+1$, $+1000$) gives $\Theta(n^2)$. Factor versus amount, not the particular factor. *([2.4](lessons/02-04-amortized-analysis-and-union-find.md))*
- Union-find is $O(\alpha(n))$, **not** $O(1)$ — there is a matching lower bound. "Effectively constant" is fine; "constant" is false. *([2.4](lessons/02-04-amortized-analysis-and-union-find.md))*
- A high tail latency on an amortized-$O(1)$ operation is the guarantee working as specified, not a bug. *([2.4](lessons/02-04-amortized-analysis-and-union-find.md))*

### Dynamic programming

- $\Theta(nW)$ knapsack is **pseudo-polynomial**, not polynomial — $W$ is binary-encoded, so this is exponential in the input length and does not contradict NP-hardness. *([2.5](lessons/02-05-dynamic-programming-and-knapsack.md))*
- A cache only helps if subproblems **overlap**. Memoizing divide-and-conquer is pure overhead. *([2.5](lessons/02-05-dynamic-programming-and-knapsack.md))*
- The table's corner is the **value**; the **solution** needs the backtrack — and the one-row space optimization throws the backtrack away. Use Hirschberg if you need both. *([2.5](lessons/02-05-dynamic-programming-and-knapsack.md), [2.6](lessons/02-06-dp-on-sequences-lcs-and-edit-distance.md))*
- **Subsequence ≠ substring**: subsequences may skip, substrings must be contiguous, and the two have different recurrences. *([2.6](lessons/02-06-dp-on-sequences-lcs-and-edit-distance.md))*
- The LCS is **not unique** — `ABCBDAB`/`BDCABA` has `BCBA`, `BDAB` and `BCAB` — which is why `diff` output is not canonical. *([2.6](lessons/02-06-dp-on-sequences-lcs-and-edit-distance.md))*
- $m + n - 2\ell$ equals the edit distance only when no substitution is used; in general it is an **upper bound** (`abc`/`xyz`: formula 6, true distance 3). *([2.6](lessons/02-06-dp-on-sequences-lcs-and-edit-distance.md))*

### Graph search

- BFS gives shortest **hop counts**, not shortest weighted paths. On a weighted graph it will return a heavy 2-edge path over a light 3-edge one — that is not a bug, it is a different problem. *([3.1](lessons/03-01-graph-search-bfs-and-dfs.md))*
- **DFS tree depth is not distance.** A vertex at graph-distance 1 can sit at depth 2 or deeper in the DFS tree. *([3.1](lessons/03-01-graph-search-bfs-and-dfs.md))*
- DFS needs **three** vertex states, not two. Collapsing "open" and "finished" makes every forward and cross edge look like a cycle. *([3.1](lessons/03-01-graph-search-bfs-and-dfs.md))*
- The cost of a traversal is set by the **representation**, not the traversal. Same code, $\Theta(n+m)$ or $\Theta(n^2)$. *([3.1](lessons/03-01-graph-search-bfs-and-dfs.md))*
- Subdividing weighted edges into unit edges and running BFS is **correct** and $O(n + mW)$ — a good technique with a stated precondition (small integer weights), and pseudo-polynomial otherwise. *([3.1](lessons/03-01-graph-search-bfs-and-dfs.md))*

### Ordering and components

- Sort by decreasing **finish** time, never decreasing **discovery** time. On $P\to Q$, $P\to R$, $R\to Q$ the discovery order puts $P$ last. *([3.2](lessons/03-02-topological-sort-and-strongly-connected-components.md))*
- Kosaraju's second pass **must** run on the reversed graph. On $A\to B$ (two singleton SCCs) the un-reversed version merges them. *([3.2](lessons/03-02-topological-sort-and-strongly-connected-components.md))*
- A topological order is usually **not unique**; code that depends on which one it got is a reproducibility bug. The $O(n)$ uniqueness test: every consecutive pair must be joined by an edge. *([3.2](lessons/03-02-topological-sort-and-strongly-connected-components.md))*
- Component **size** carries no ordering information. Order units by topologically sorting the condensation. *([3.2](lessons/03-02-topological-sort-and-strongly-connected-components.md))*
- "Strongly connected" is a **directed** notion; undirected graphs have plain connected components, with no reversal and no timestamps. *([3.2](lessons/03-02-topological-sort-and-strongly-connected-components.md))*

### Shortest paths

- Dijkstra needs no negative **edges**, not merely no negative **cycles**. On the DAG $S\to A\,(2)$, $S\to B\,(3)$, $B\to A\,(-2)$ it settles $A$ at 2 when the answer is 1. *([3.3](lessons/03-03-dijkstras-shortest-paths.md))*
- **Adding a constant to every edge does not remove negativity safely** — it charges $C$ per *hop*, so it reorders paths of different lengths. Johnson's potential difference is the correct reweighting, and it exists only when no negative cycle does. *([3.3](lessons/03-03-dijkstras-shortest-paths.md), [3.4](lessons/03-04-bellman-ford-and-floyd-warshall.md))*
- Bellman–Ford's round count depends on the **edge ordering**, not on how long real paths are; $|V|-1$ is unavoidable in the worst case. The safe optimization is stopping *early* when a round changes nothing. *([3.4](lessons/03-04-bellman-ford-and-floyd-warshall.md))*
- Its extra round detects only negative cycles **reachable from the source**. Add a virtual source with 0-weight edges to everything to see them all. *([3.4](lessons/03-04-bellman-ford-and-floyd-warshall.md))*
- Bellman–Ford has **no anytime guarantee**: an intermediate $d[v]$ can be finite, plausible, and wrong (in the worked example $D$ goes $\infty\to14\to8\to3$). *([3.4](lessons/03-04-bellman-ford-and-floyd-warshall.md))*
- Floyd–Warshall's $k$ loop **must be outermost**, and the last round can still change answers. *([3.4](lessons/03-04-bellman-ford-and-floyd-warshall.md))*
- Negative **edges** and negative **cycles** are unrelated problems. Edges cost you Dijkstra; cycles mean the shortest path is $-\infty$ and undefined. *([3.4](lessons/03-04-bellman-ford-and-floyd-warshall.md))*
- Neither the shortest-path tree nor the min cut nor the max flow is unique — only the **value** is. *([3.3](lessons/03-03-dijkstras-shortest-paths.md), [3.5](lessons/03-05-max-flow-and-min-cut.md))*

### Flows

- "Maximum" means **no augmenting path in the residual graph**, which includes backward edges. Test only forward capacity and you stop at 1999 on a network whose max flow is 2000. *([3.5](lessons/03-05-max-flow-and-min-cut.md))*
- **Saturated is not the same as in the cut.** A cut is defined by a vertex partition; to exhibit one, BFS the residual graph from $s$. *([3.5](lessons/03-05-max-flow-and-min-cut.md))*
- A cut only ever gives an **upper** bound. A cut of 13 does not certify a flow of 13; only a cut *equal to* your flow certifies anything. *([3.5](lessons/03-05-max-flow-and-min-cut.md))*
- Ford–Fulkerson with unspecified path choice is **pseudo-polynomial** — 2000 augmentations on a 5-edge graph. Specify BFS. *([3.5](lessons/03-05-max-flow-and-min-cut.md))*

### Intractability

- **NP does not mean "not polynomial."** It is *nondeterministic polynomial*, and $\mathsf P\subseteq\mathsf{NP}$ — sorting is in NP. "This problem is NP" as a synonym for "hard" is backwards. *([4.1](lessons/04-01-p-np-and-polynomial-time-reductions.md))*
- **NP-hard $\ne$ NP-complete.** NP-hard is a lower bound and includes undecidable problems; completeness also needs membership in NP. *([4.1](lessons/04-01-p-np-and-polynomial-time-reductions.md))*
- **Reductions have a direction and it inverts the conclusion.** "I reduced my problem to SAT, so it's NP-hard" is wrong — that is how you'd *solve* it. *([4.1](lessons/04-01-p-np-and-polynomial-time-reductions.md), [4.2](lessons/04-02-the-np-complete-zoo.md))*
- **Prove both directions.** Yes→yes alone would let $f(x) = $ (a fixed satisfiable formula) reduce everything to SAT. *([4.2](lessons/04-02-the-np-complete-zoo.md))*
- **A reduction may not simplify the instance**, and it may not solve it either — $f$ must be polynomial-time, or the whole theory collapses. *([4.2](lessons/04-02-the-np-complete-zoo.md))*
- **NP-hardness is worst case over all inputs**, not a prediction about yours. It ends the search for a *guarantee*, not for a working tool. *([4.1](lessons/04-01-p-np-and-polynomial-time-reductions.md))*
- **Failure to find an algorithm is not evidence of hardness** — primality looked hard for centuries and is in P. A reduction is evidence. *([4.2](lessons/04-02-the-np-complete-zoo.md))*
- **"Min is easy so max is easy" does not follow.** Min cut is polynomial; MAX-CUT is NP-complete. Extremal direction is not a property that transfers. *([4.1](lessons/04-01-p-np-and-polynomial-time-reductions.md))*

### Approximation

- **A ratio is worst case, not average.** "Usually within 5%" is a benchmark result and does not bound anything. *([4.3](lessons/04-03-approximation-algorithms.md))*
- **The guarantee comes from the lower bound the algorithm constructs, not from clever choices.** Max-degree greedy is smarter than arbitrary-edge matching and unbounded; the dumb one is 2-approximate. *([4.3](lessons/04-03-approximation-algorithms.md))*
- **Testing cannot establish a ratio, only refute one** — max-degree greedy beats the 2-approximation on small graphs and loses to it unboundedly at scale. *([2.1](lessons/02-01-the-greedy-method-and-interval-scheduling.md), [4.3](lessons/04-03-approximation-algorithms.md))*
- **Metric TSP's 2-approximation needs the triangle inequality**, and spends it entirely on the shortcutting step. Without it, general TSP has no constant-factor approximation at all. *([4.3](lessons/04-03-approximation-algorithms.md))*
- **A proved ratio is a floor, not a recommendation.** Ship the one with the proof, measure both, keep the guarantee as the fallback. *([4.3](lessons/04-03-approximation-algorithms.md))*
- **Instance-specific lower bounds are usually far stronger than the worst-case ratio** and cost nothing to compute. Report both. *([4.3](lessons/04-03-approximation-algorithms.md))*

### Randomization

- **Expected running time is averaged over the algorithm's coin flips, not over inputs.** Every input has expected $O(n\log n)$ in randomized quicksort; average-case analysis needs an input distribution you must justify. *([4.4](lessons/04-04-randomized-algorithms.md))*
- **A fixed RNG seed makes the algorithm deterministic again** and hands the adversary the last move. This is the hash-flooding DoS, and the fix is a per-process random key. *([4.4](lessons/04-04-randomized-algorithms.md))*
- **Judge a Monte Carlo algorithm by $\frac1p\ln\frac1\delta$ runs, not by one run's success rate.** $p = 1/1225$ plus 17,000 cheap runs is a polynomial algorithm. *([4.4](lessons/04-04-randomized-algorithms.md))*
- **One-sided error is what makes repetition work.** Two-sided error needs majority voting and a Chernoff bound. *([4.4](lessons/04-04-randomized-algorithms.md))*
- **Randomization does not remove the bad case**; it removes the bad *input*. Quicksort's $\Theta(n^2)$ is still there, now reachable only by luck you can re-roll. *([1.4](lessons/01-04-sorting-and-the-comparison-lower-bound.md), [4.4](lessons/04-04-randomized-algorithms.md))*
- **The proofs assume real independence.** A predictable PRNG is fine for quicksort's expectation and fatal for a hash seed an adversary can observe. *([4.4](lessons/04-04-randomized-algorithms.md))*
