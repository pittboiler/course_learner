# Algorithms · Lesson 3.2: Topological sort & strongly connected components

> ⏱ ~15 min · Module 3: Graph algorithms · Builds on: [3.1 (graph search)](03-01-graph-search-bfs-and-dfs.md) · Unlocks: 3.3 (Dijkstra's shortest paths)

## Why this matters

Two questions come up constantly about directed graphs, and both are answered by the timestamps [Lesson 3.1](03-01-graph-search-bfs-and-dfs.md) taught DFS to record.

*In what order can I do these tasks?* — `make`, Bazel, `npm`, Terraform, a spreadsheet recalculating cells, a compiler ordering initializers, a course catalogue. That is **topological sort**, and it exists exactly when the dependency graph is acyclic.

*Which parts of this system are mutually entangled?* — the modules in a codebase that import each other, the pages in a link farm, the accounts in a money-laundering ring, the clauses in a 2-SAT formula, the states of a Markov chain you cannot leave. That is **strongly connected components**, and collapsing each one to a single node turns *any* digraph into a DAG — so the first question becomes answerable again.

The judgement content is a pair. First, **which order does a DFS actually produce?** Reverse *finish* order works; reverse *discovery* order does not, and the difference is one word in the code. Second, Kosaraju's algorithm reverses the graph between its two passes, and if you skip that reversal you get an answer that looks plausible and is wrong. Both are cases where the algorithm is four lines long and the *reason* is the entire content.

## The idea

**Topological sort.** A **topological order** of a digraph lists its vertices so that every edge points forward. It exists iff the graph is a DAG — a cycle would need an edge pointing back.

The DFS insight is one sentence: **in a DAG, if there is an edge $u \to v$, then $u$ finishes after $v$.** Either $v$ is undiscovered when we scan the edge, so we recurse into $v$ and it finishes first; or $v$ is already finished. It cannot be open, because an open $v$ means $v$ is an ancestor of $u$, and an edge $u\to v$ to an ancestor is a back edge, i.e. a cycle. So finish times *decrease* along every edge, and **listing vertices by decreasing finish time is a topological order.** One DFS, $\Theta(n+m)$, and you get cycle detection for free — a back edge means no order exists.

There is a second algorithm with a different personality: **[Kahn's](../reference.md#kahns-algorithm)**. Repeatedly emit a vertex of in-degree zero and delete it, decrementing its successors' counts. It is BFS-flavoured, needs no recursion, and detects cycles by counting — if it stalls before emitting all $n$ vertices, whatever is left has a cycle. It is what most build tools actually run, because it extends naturally to parallel scheduling: everything currently at in-degree zero can run *at the same time*.

**Strongly connected components.** Vertices $u$ and $v$ are **mutually reachable** if there is a path each way. This is an equivalence relation, and its classes are the SCCs. Contract each class to a single node and you get the **[condensation](../reference.md#condensation)**, which is always a DAG — if two components had a cycle between them they would be mutually reachable, hence one component.

Computing SCCs looks like it should need a path search from every vertex ($\Theta(n(n+m))$). **[Kosaraju's algorithm](../reference.md#kosarajus-algorithm)** does it in two passes:

1. DFS the graph, recording finish times.
2. DFS the **reverse** graph, trying roots in decreasing finish order. Each tree is one SCC.

The reversal is the whole trick, and it is worth being able to say why. In pass 1, the vertex with the largest finish time lies in a **source** component of the condensation — one with no incoming condensation edges. In the *reverse* graph, that component becomes a **sink**: everything reachable from its vertices is inside it and nowhere else. So the first pass-2 tree is exactly that component, no more. Remove it and repeat. Without reversing, that first search would leak into every component downstream and merge them all.

## The formal version

**Theorem (DFS topological sort).** If $G$ is a DAG, listing $V$ by decreasing $f[\,\cdot\,]$ is a topological order.

*Proof.* Let $(u,v) \in E$. When the DFS scans this edge, $v$ is white, grey, or black. Grey is impossible: a grey $v$ is an ancestor of $u$, so $u\to v$ is a back edge and $G$ has a cycle. If $v$ is white it becomes a descendant of $u$, so $f[v] < f[u]$. If $v$ is black, $v$ already finished while $u$ has not, so again $f[v] < f[u]$. Hence $f[u] > f[v]$ across every edge, and sorting by decreasing $f$ puts $u$ before $v$. $\blacksquare$

Note the proof uses **all three** vertex colours — the same three states that [Lesson 3.1](03-01-graph-search-bfs-and-dfs.md)'s cycle detection needed.

**Kahn's algorithm.**

```
KAHN(G):
    compute indeg[v] for all v
    Q <- all v with indeg[v] = 0
    while Q not empty:
        u <- Q.pop();  emit u
        for each edge u -> v:
            indeg[v] <- indeg[v] - 1
            if indeg[v] = 0:  Q.push(v)
    if fewer than n vertices emitted:  report a cycle
```

$\Theta(n+m)$: each edge is decremented once.

**Uniqueness.** A DAG's topological order is unique **iff** every consecutive pair in it is joined by an edge — equivalently, iff the DAG has a Hamiltonian path. If some consecutive pair $x, y$ has no edge, they are incomparable and swapping them gives a second valid order. Checking uniqueness therefore costs $O(n)$ extra after the sort, which matters when "the build order" needs to be reproducible.

**Definition (SCC).** $u \sim v$ iff $u \rightsquigarrow v$ and $v \rightsquigarrow u$. The classes of $\sim$ are the strongly connected components; the condensation $G^{\mathrm{SCC}}$ has one node per class and an edge $[u]\to[v]$ when some edge of $G$ runs between them.

**Lemma.** $G^{\mathrm{SCC}}$ is a DAG. *Proof.* A cycle $[C_1]\to\cdots\to[C_k]\to[C_1]$ would make every vertex of every $C_i$ mutually reachable with every other, so all the $C_i$ would be one class. $\blacksquare$

**Kosaraju's cost.** Two DFS traversals plus building the reverse adjacency: $\Theta(n+m)$. **Tarjan's algorithm** gets the same in a *single* pass using a stack and low-link numbers; it is faster in practice but harder to prove. Kosaraju is the one to understand first, because its correctness argument is a sentence about the condensation rather than an invariant about a stack.

Kosaraju also emits the components in **topological order of the condensation** — a useful freebie, since it means the two halves of this lesson compose in one run.

## Picture

![A directed graph of eight vertices in three dashed boxes. The first box holds A, B and C in a directed triangle; the second holds D, E and F in a directed triangle; the third holds G and H pointing at each other. Red arrows run from C to D, from B to G and from F to G, always leaving a box and never returning. Each vertex is labelled with a DFS finish time. Below, the condensation is drawn as three boxes labelled with the component sets, with red arrows from the first to the second, the second to the third, and the first to the third.](assets/03-02-fig1.svg)

The graph is $A\to B$, $B\to C$, $B\to G$, $C\to A$, $C\to D$, $D\to E$, $E\to F$, $F\to D$, $F\to G$, $G\to H$, $H\to G$.

Read the red arrows first: **every one of them leaves a box and none returns.** That is the condensation being a DAG, drawn rather than proved.

Now read the finish times. $f[A] = 16$ is the largest in the graph, and $A$ sits in SCC 1, which has no incoming red arrows — a source of the condensation. That is the fact Kosaraju runs on. Reverse every arrow and SCC 1 becomes a sink: from $A$, the reversed graph reaches only $C$ and $B$, so the first pass-2 tree is exactly $\{A,B,C\}$.

Compare that with what happens **without** the reversal: a DFS from $A$ in the original graph reaches all eight vertices, and you would report one giant component. The reversal is not bookkeeping; it is the algorithm.

## Worked examples

**Example 1 (mechanical): topologically sort a DAG.** Take $P\to Q$, $P\to R$, $Q\to S$, $R\to S$, $R\to T$, $S\to U$, $T\to U$, $V\to P$, $V\to T$, scanning neighbours alphabetically and trying roots in alphabetical order.

DFS: $P$(1) → $Q$(2) → $S$(3) → $U$(4), $U$ finishes (5), $S$ (6), $Q$ (7). Back at $P$, scan $P\to R$: $R$(8) → $S$ black, → $T$(9) → $U$ black, $T$ finishes (10), $R$ (11), $P$ (12). Then root $V$(13); both its neighbours are black, so $V$ finishes (14).

| $v$ | $P$ | $Q$ | $R$ | $S$ | $T$ | $U$ | $V$ |
|---|---|---|---|---|---|---|---|
| $d$ | 1 | 2 | 8 | 3 | 9 | 4 | 13 |
| $f$ | 12 | 7 | 11 | 6 | 10 | 5 | 14 |

Decreasing $f$ gives

$$V(14),\quad P(12),\quad R(11),\quad T(10),\quad Q(7),\quad S(6),\quad U(5),$$

that is, the order

$$V,\ P,\ R,\ T,\ Q,\ S,\ U.$$

Check all nine edges point forward ✓. No back edge appeared, so the graph is acyclic ✓.

Kahn's algorithm on the same graph emits $V, P, Q, R, S, T, U$ — a **different, equally valid** order. There are 5 topological orders in total here, which already tells you the order is not unique; the $O(n)$ test confirms it, since the consecutive pair $T, Q$ has no edge between them.

**Example 2 (why you'd care): Kosaraju by hand.** On the figure's graph, pass 1 (roots alphabetical) gives finish times

$$H{:}9,\quad G{:}10,\quad F{:}11,\quad E{:}12,\quad D{:}13,\quad C{:}14,\quad B{:}15,\quad A{:}16,$$

so the decreasing order is $A, B, C, D, E, F, G, H$.

Reverse graph: $A{:}[C]$, $B{:}[A]$, $C{:}[B]$, $D{:}[C,F]$, $E{:}[D]$, $F{:}[E]$, $G{:}[B,F,H]$, $H{:}[G]$.

| pass-2 root | reachable in reverse graph | component |
|---|---|---|
| $A$ | $A \to C \to B \to A$ (seen) | $\{A, B, C\}$ |
| $D$ | $D \to C$ (seen), $D \to F \to E \to D$ (seen) | $\{D, E, F\}$ |
| $G$ | $G \to B, F$ (seen), $G \to H \to G$ (seen) | $\{G, H\}$ |

Three components, emitted in condensation-topological order ✓. Every root's search stops at the boundary of its own component, because in the reverse graph the earlier components are already black and the later ones are unreachable.

**Where this shows up.** Deadlock detection is SCC detection on the wait-for graph — a set of processes deadlocks precisely when it forms a cycle. **2-SAT** is the prettiest application: build the implication graph on $2n$ literals, and the formula is satisfiable iff no variable has $x$ and $\lnot x$ in the same SCC — a linear-time algorithm for a problem whose 3-variable cousin is NP-complete (Lesson 4.2). Google's original PageRank ran on the condensation because the SCC structure of the web is what makes the random-surfer chain behave.

## Watch out

- **You might think** you can sort by decreasing *discovery* time — **but actually** it is wrong, and the counterexample is three vertices. On $P\to Q$, $P\to R$, $R\to Q$: DFS gives $d[P]=1, d[Q]=2, d[R]=4$, so decreasing discovery is $R, Q, P$ — which puts $P$ last, violating $P\to Q$. Decreasing *finish* gives $P, R, Q$ ✓. Discovery order records where the search wandered; finish order records where it *ran out*, and only the second respects dependencies.
- **You might think** Kosaraju's second pass can skip the reversal — **but actually** it merges components. On the two-vertex graph $A \to B$ (two singleton SCCs), pass 1 gives $f[A]=4 > f[B]=3$, so pass 2 starts at $A$; in the *original* graph that search reaches $B$ and reports one component $\{A,B\}$, which is wrong. In the reverse graph $A$ has no out-edge and the answer is $\{A\}, \{B\}$ ✓.
- **You might think** a topological order is *the* build order — **but actually** there are usually many, and code that depends on which one you got is a reproducibility bug waiting to happen. If you need determinism, break ties explicitly (e.g. alphabetically) rather than relying on a hash-table iteration order.
- **You might think** an undirected graph has SCCs — **but actually** "strongly connected" is a directed notion. The undirected analogue is plain connected components, computable by one BFS or DFS per unvisited vertex, with no reversal and no timestamps.

## One-liner

> Finish times decrease along every edge of a DAG, so reverse-finish order sorts it — and running the same trick on the reversed graph peels off strongly connected components one source at a time.

## Problems

**P1 (🟢)** For the DAG $J\to K$, $J\to L$, $K\to M$, $L\to M$, $L\to N$, $M\to O$, $N\to O$ (neighbours alphabetical, roots alphabetical):

(a) Give DFS discovery and finish times. (b) Give the topological order from decreasing finish time. (c) Give the order Kahn's algorithm produces, popping the alphabetically smallest available vertex. (d) Is the topological order unique? Justify with the $O(n)$ test.

**P2 (🟡)** For the digraph $U\to V$, $V\to U$, $V\to W$, $W\to X$, $W\to Z$, $X\to Y$, $Y\to Z$, $Z\to X$:

(a) Run pass 1 of Kosaraju (roots and neighbours alphabetical) and give the finish times. (b) Write the reverse adjacency lists. (c) Run pass 2 and give the SCCs in the order they are emitted. (d) Draw the condensation and give a topological order of it.

**P3 (🔴)** A package manager resolves dependencies. Its engineer proposes: *"Cycles among packages are legal — Python has them. So instead of rejecting cycles, compute SCCs, install each component as an atomic unit, and order the units."*

(a) Explain why this is well defined — specifically, why the units can always be ordered. (b) The engineer wants to also report, for each package, every package that could possibly be affected by changing it. Describe how to answer all $n$ such queries, and give the cost. (c) A reviewer objects: "SCC computation is two DFS passes plus building a reversed graph — that's 3× the work of a simple cycle check. On our 50,000-package graph with 200,000 edges that's too slow." Evaluate the objection quantitatively. (d) The engineer's implementation computes SCCs correctly but then orders the units by **decreasing size**, reasoning that "big components are foundational." Say what breaks and give a two-component counterexample.

<details>
<summary>Solutions</summary>

**P1** Adjacency: $J{:}[K,L]$, $K{:}[M]$, $L{:}[M,N]$, $M{:}[O]$, $N{:}[O]$, $O{:}[\,]$.

(a) $J$(1) → $K$(2) → $M$(3) → $O$(4), $O$ fin 5, $M$ fin 6, $K$ fin 7. Back at $J$: $L$(8) → $M$ black; → $N$(9) → $O$ black, $N$ fin 10, $L$ fin 11, $J$ fin 12.

| $v$ | $J$ | $K$ | $L$ | $M$ | $N$ | $O$ |
|---|---|---|---|---|---|---|
| $d$ | 1 | 2 | 8 | 3 | 9 | 4 |
| $f$ | 12 | 7 | 11 | 6 | 10 | 5 |

(b) Decreasing $f$ gives

$$J(12),\quad L(11),\quad N(10),\quad K(7),\quad M(6),\quad O(5),$$

that is,

$$J,\ L,\ N,\ K,\ M,\ O.$$

All seven edges point forward ✓.

(c) In-degrees: $J{:}0$, $K{:}1$, $L{:}1$, $M{:}2$, $N{:}1$, $O{:}2$. Emit $J$; $K$ and $L$ drop to 0. Emit $K$ (alphabetically first); $M$ drops to 1. Emit $L$; $M \to 0$, $N \to 0$. Emit $M$; $O \to 1$. Emit $N$; $O \to 0$. Emit $O$.

$$J,\ K,\ L,\ M,\ N,\ O.$$

Also valid ✓ — and different from (b), which is the point.

(d) **Not unique.** Test consecutive pairs of the order in (b): $J\to L$ ✓, but $L \to N$ ✓, $N \to K$ — **no such edge**. So $N$ and $K$ are incomparable and can be swapped: $J, L, K, N, M, O$ is also valid. (Equivalently, the DAG has no Hamiltonian path.)

**P2** (a) Pass 1: $U$(1) → $V$(2) → $U$ grey (back edge); $V\to W$(3) → $X$(4) → $Y$(5) → $Z$(6) → $X$ grey (back), $Z$ fin 7, $Y$ fin 8, $X$ fin 9; back at $W$, $W\to Z$ black; $W$ fin 10, $V$ fin 11, $U$ fin 12.

| $v$ | $U$ | $V$ | $W$ | $X$ | $Y$ | $Z$ |
|---|---|---|---|---|---|---|
| $f$ | 12 | 11 | 10 | 9 | 8 | 7 |

Decreasing order: $U, V, W, X, Y, Z$.

(b) Reverse adjacency:

$$U{:}[V], \quad V{:}[U], \quad W{:}[V], \quad X{:}[W,Z], \quad Y{:}[X], \quad Z{:}[W,Y].$$

(c) Pass 2 on the reverse graph:

| root | reaches | component |
|---|---|---|
| $U$ | $U \to V \to U$ (seen) | $\{U, V\}$ |
| $W$ | $W \to V$ (seen) | $\{W\}$ |
| $X$ | $X \to W$ (seen), $X\to Z \to Y \to X$ (seen) | $\{X, Y, Z\}$ |

Emitted: $\{U,V\}$, $\{W\}$, $\{X,Y,Z\}$.

(d) Condensation: $\{U,V\} \to \{W\} \to \{X,Y,Z\}$, plus $\{W\} \to \{X,Y,Z\}$ again from $W\to Z$ (the same condensation edge). It is a three-node path, and its unique topological order is

$$\{U,V\},\ \{W\},\ \{X,Y,Z\}$$

— which is exactly the order Kosaraju emitted them in, as promised.

**P3** (a) Because **the condensation is always a DAG**. Contract each SCC to one unit; if the resulting graph had a cycle, all the units on that cycle would be mutually reachable and would therefore already be a single SCC — a contradiction. A DAG always has a topological order, so the units can always be ordered, no matter how tangled the original graph is. (Inside a unit there is no valid order, which is exactly why it must be installed atomically.)

(b) "Everything possibly affected by changing $p$" is the set of packages **reachable from $p$** in the dependency graph. Two honest answers, and choosing between them is the actual question:

| approach | cost | when |
|---|---|---|
| one DFS/BFS per package | $\Theta(n(n+m))$ | few queries, or you need the answer only for a handful of packages |
| transitive closure of the condensation, processed in reverse topological order, unioning successors' sets | $O(n \cdot c / 64)$ with bitsets over $c$ components | all $n$ queries wanted at once |

The second works because every vertex in an SCC has the *same* answer — so you compute one reachability set per component, not per package, and the DAG structure lets you build each set from its successors' sets, already computed. With $n = 50{,}000$ the per-package version is $\approx 1.25\times 10^{10}$ steps; the component version is a few hundred million bit operations.

(c) **The objection is quantitatively wrong.** All the candidates are $\Theta(n+m)$; the constant is the entire dispute.

| | passes over the graph | steps at $n{=}5\times10^4$, $m{=}2\times10^5$ |
|---|---|---|
| cycle check (one DFS) | 1 | $2.5\times 10^5$ |
| Kosaraju (2 DFS + build reverse) | 3 | $7.5\times 10^5$ |

Half a million extra steps — under a millisecond, against a package install that takes seconds at best and involves network I/O. The reviewer has correctly identified a 3× constant factor and incorrectly concluded it matters. The right question is not "how many passes" but "how many passes *relative to the rest of the operation*", and here the traversal is not remotely the bottleneck. (Tarjan's one-pass algorithm would close the gap anyway, at the cost of a harder correctness proof.)

(d) **Component size has nothing to do with dependency order**, so ordering by size ignores the constraints entirely. Two components suffice:

$$\text{unit } X = \{a\} \quad\text{(a single logging package)}, \qquad \text{unit } Y = \{b, c, d\}\ \text{with}\ b\to c \to d \to b,$$

and one dependency edge $c \to a$ — the tangled trio needs the logger. The condensation is $Y \to X$, so $X$ must be installed **first**. Ordering by decreasing size gives $Y$ then $X$: the install fails because $c$'s dependency is missing.

The general failure is that the size order is a total order chosen without reference to the edges, and it will violate the constraints whenever a small component is a dependency of a large one — which is the common case, since foundational libraries tend to be *small* and singleton. The fix is to topologically sort the condensation and use *that* order, which is available for free from the same Kosaraju run.

</details>

## Flashback

**From Lesson 2.6 (DP on sequences):** You are aligning two sequences of lengths $m$ and $n$ with the standard edit-distance table.

(a) Write the recurrence. (b) State the time and space. (c) Your teammate needs only the distance, not the alignment, and $m = n = 10^6$. What do you tell them, and what is the resulting space? (d) They then say they *do* want the alignment after all. What changes?

<details>
<summary>Solution</summary>

(a) With $D[i,j]$ the distance between the length-$i$ and length-$j$ prefixes, $D[i,0]=i$, $D[0,j]=j$, and

$$D[i,j] = \min\big(D[i-1,j]+1,\ D[i,j-1]+1,\ D[i-1,j-1] + [\,x_i \ne y_j\,]\big).$$

(b) $\Theta(mn)$ time and $\Theta(mn)$ space for the full table.

(c) Each row depends only on the previous one, so keep **two rows** and index the shorter sequence across: $\Theta(\min(m,n))$ space, time unchanged at $\Theta(mn)$. Concretely, the full table would be $10^{12}$ cells — impossible — while two rows is $2\times 10^6$ cells, a few megabytes. (The $10^{12}$ *time* is still a serious problem; the space fix does not rescue that, which is worth saying out loud rather than declaring victory.)

(d) The two-row version destroys exactly the information the backtrack needs: the decision at each cell requires comparing neighbours in rows that have been overwritten. Use **Hirschberg's algorithm** — find the optimal crossing point of the middle row with two space-efficient passes, then recurse on the two halves. It recovers the full alignment in $\Theta(\min(m,n))$ space and $\Theta(mn)$ time, roughly a factor of 2 slower in practice.

</details>

## Connections

- **Backward:** this lesson is [Lesson 3.1](03-01-graph-search-bfs-and-dfs.md) cashed in. The three-colour argument that made cycle detection correct is the same one that proves finish times decrease along edges, and Kahn's algorithm is that lesson's BFS answer to cycle detection, delivered.
- **Forward:** Lesson 3.3's Dijkstra processes vertices in a *computed* order rather than a structural one, and on a DAG you can skip the priority queue entirely — relax edges in topological order and you get shortest paths in $\Theta(n+m)$, even with negative weights. Lesson 2.5's DP tables are shortest paths on a DAG of subproblems, and "fill the table in an order where dependencies come first" *is* topological sort.
- **Sideways:** SCC-collapsing is the standard move for turning a cyclic structure into an acyclic one so a DAG algorithm applies — the same move as taking the quotient by an equivalence relation in [abstract-algebra](../../abstract-algebra/syllabus.md), and as lumping communicating states in a Markov chain in [probability-theory](../../probability-theory/syllabus.md), where the SCCs are exactly the communicating classes and the sink components are where the chain ends up.
