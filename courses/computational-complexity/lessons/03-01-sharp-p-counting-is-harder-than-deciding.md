# Complexity Theory · Lesson 3.1: #P — counting is harder than deciding

> ⏱ ~15 min · Module 3: Counting · Builds on: [1.2 (NP and nondeterministic time)](01-02-np-ntime-and-nondeterministic-time.md), [2.6 (Immerman–Szelepcsényi and the class map)](02-06-immerman-szelepcsenyi-and-the-class-map.md) · Unlocks: [3.2 (#P-completeness)](03-02-sharp-p-completeness-and-parsimonious-reductions.md)

## Why this matters

Every problem in this course so far has had a yes-or-no answer. Real questions often do not. *How many* satisfying assignments? *How many* perfect matchings? *How many* independent sets — which, in statistical physics, is the partition function of the hard-core lattice gas, and in machine learning is the normalizing constant of a graphical model.

The obvious guess is that counting is a bit harder than deciding: to count you must in some sense find them all, so perhaps one exponential worse. That guess is wrong in both directions, and the two ways it is wrong are the reason this module exists.

**Counting can be vastly harder than deciding.** There are problems whose decision version is in $\mathsf{P}$ — solvable outright, no cleverness needed — and whose counting version is as hard as anything in the polynomial hierarchy. Perfect matchings in a bipartite graph is the flagship: finding one is a classic polynomial-time algorithm, and counting them is complete for a class that contains all of PH.

**And counting is sometimes easier than it looks.** Determinants count something with signs and are computable in cubic time; permanents count the same objects without signs and are intractable. Approximate counting for DNF formulas is fully polynomial and randomized, while exact counting for the same formulas is complete. **Where a counting problem sits has almost nothing to do with where its decision version sits**, and that decoupling is the lesson.

## The idea

**$\#\mathsf{P}$ is a class of functions, not languages.** Take any NP problem and its verifier. Instead of asking whether a certificate exists, ask how many there are. The function taking $x$ to the number of accepting certificates is in $\#\mathsf{P}$ — equivalently, it counts the accepting branches of a polynomial-time nondeterministic machine.

So $\#\text{SAT}$ counts satisfying assignments, $\#\text{CLIQUE}$ counts $k$-cliques, $\#\text{PM}$ counts perfect matchings. Each is the counting version of a decision problem you already know, but as a *function* problem, and comparisons between function classes need a slightly different vocabulary: we say a language $A$ is in $\mathsf{P}^{\#\mathsf{P}}$ if a polynomial-time machine decides it with free access to a $\#\mathsf{P}$ function.

**The first surprise: decision-easy does not imply counting-easy.** Consider perfect matchings in a bipartite graph. Deciding whether one exists is the Hungarian algorithm or a max-flow computation — polynomial, and in [`graph-theory` 2.3](../../graph-theory/lessons/02-03-bipartite-matching-hall.md). Counting them is $\#\mathsf{P}$-complete, by Valiant's 1979 theorem.

The same happens for 2SAT, which is in $\mathsf{P}$ (indeed in $\mathsf{NL}$, [2.5](02-05-l-nl-and-nl-completeness.md)) while $\#2\text{SAT}$ is $\#\mathsf{P}$-complete. **Deciding is about whether the solution set is empty; counting is about its size, and emptiness is a far cruder question than size.**

**The permanent and the determinant.** The cleanest statement of the phenomenon is two formulas that differ by one factor:

$$\det M = \sum_{\sigma \in S_n} \mathrm{sgn}(\sigma)\prod_{i=1}^n M_{i,\sigma(i)}, \qquad \mathrm{per}\, M = \sum_{\sigma\in S_n}\prod_{i=1}^n M_{i,\sigma(i)}.$$

The determinant is computable in $O(n^3)$. The permanent is $\#\mathsf{P}$-complete. The only difference is $\mathrm{sgn}(\sigma)$.

Why does a sign help so much? Because signs allow **cancellation**, and cancellation is what row reduction exploits: adding a multiple of one row to another leaves the determinant unchanged, which is only true because the sign pattern makes the extra terms cancel in pairs. Strip the signs and no such operation exists — every term contributes positively, so nothing can be combined, and you are left with the sum over all $n!$ permutations. **Gaussian elimination is not a clever algorithm for a sum; it is an exploitation of an algebraic identity that the permanent does not have.**

## The formal version

**Definition ([#P](../reference.md#sharp-p)).** A function $g : \{0,1\}^* \to \mathbb{N}$ is in $\#\mathsf{P}$ if there is a polynomial-time nondeterministic TM $N$ such that $g(x)$ equals the number of accepting branches of $N$ on $x$. Equivalently, there is a polynomial-time predicate $V$ and a polynomial $p$ with

$$g(x) = \big|\{\, y : |y| \le p(|x|),\ V(x,y) = 1 \,\}\big|.$$

*In words: count the certificates instead of asking whether one exists.*

**Basic facts.**

- $g(x)$ is at most $2^{p(|x|)}$, so it has polynomially many bits — the answer is writable even when it is astronomically large.
- The decision version is recoverable: $x \in A \iff g(x) > 0$. So $\mathsf{NP} \subseteq \mathsf{P}^{\#\mathsf{P}}$, and by [Lesson 2.1](02-01-conp-and-the-shape-of-np.md)'s symmetry, $\mathsf{coNP} \subseteq \mathsf{P}^{\#\mathsf{P}}$ too.
- $\mathsf{P}^{\#\mathsf{P}} \subseteq \mathsf{PSPACE}$: enumerate all certificates, keeping only a running total and the current certificate.

**Definition ([the permanent](../reference.md#permanent)).** For an $n\times n$ matrix $M$, $\mathrm{per}\,M = \sum_{\sigma\in S_n}\prod_i M_{i,\sigma(i)}$.

**Proposition ([permanent counts matchings](../reference.md#permanent-counts-matchings)).** If $M$ is the $0/1$ biadjacency matrix of a bipartite graph, $\mathrm{per}\,M$ is exactly its number of perfect matchings.

*Proof.* A permutation $\sigma$ contributes $\prod_i M_{i,\sigma(i)}$, which is 1 if every pair $(i,\sigma(i))$ is an edge and 0 otherwise. Permutations with all pairs edges are exactly the perfect matchings, and each contributes 1. $\blacksquare$

**Theorem ([Valiant, 1979](../reference.md#valiants-theorem)).** Computing the permanent of a $0/1$ matrix is $\#\mathsf{P}$-complete. [Lesson 3.2](03-02-sharp-p-completeness-and-parsimonious-reductions.md) explains what completeness means for function classes and sketches the gadget.

**The decoupling table.**

| problem | decision version | counting version |
|---|---|---|
| bipartite perfect matching | $\mathsf{P}$ (Hungarian algorithm) | $\#\mathsf{P}$-complete |
| 2SAT | $\mathsf{NL}$ | $\#\mathsf{P}$-complete |
| DNF satisfiability | $\mathsf{P}$ (any term with no clashing literals) | $\#\mathsf{P}$-complete, but has an FPRAS ([3.3](03-03-todas-theorem-and-approximate-counting.md)) |
| 3SAT | NP-complete | $\#\mathsf{P}$-complete |
| spanning trees | $\mathsf{P}$ | **$\mathsf{P}$** — Kirchhoff's matrix-tree theorem, a determinant |

The last row is the exception that shows the rule. Counting spanning trees is easy *because* the count happens to equal a determinant, so the cancellation is available. Wherever a counting problem turns out to be tractable, there is almost always a determinant hiding in it.

## Picture

![On the left, a three by three zero-one matrix, then a six-row table listing every permutation of three elements with its product, its sign, its determinant term and its permanent term, totalling to minus one and to three respectively. On the right, three small bipartite drawings, each with three nodes on the left and three on the right, showing the three perfect matchings with the matched edges thickened.](assets/03-01-fig1.svg)

Six permutations, six terms, and the two columns on the right differ only in whether the sign column was applied. The determinant totals $1 - 1 - 1 = -1$; the permanent totals $1 + 1 + 1 = 3$.

**Read the cancellation.** The determinant's three nonzero terms are $+1, -1, -1$ and they partly annihilate. That annihilation is what row reduction is: every elimination step is a bulk cancellation of terms you never have to enumerate. The permanent's three terms all point the same way, so there is nothing to annihilate and nothing to shortcut — you are stuck with the sum.

The right-hand panels say what the permanent is counting. Each drawing is one perfect matching of the bipartite graph whose biadjacency matrix is $M$, and there are exactly three of them, matching $\mathrm{per}\,M = 3$. Finding one of these three is easy. **Counting them is, in general, complete for a class containing the whole polynomial hierarchy** — and nothing in the picture hints at why, which is rather the point.

## Worked examples

**Example 1 (mechanical): compute both quantities and read off the matchings.** Let

$$M = \begin{pmatrix} 1&1&0\\1&1&1\\0&1&1\end{pmatrix}.$$

Enumerate the six permutations of $\{1,2,3\}$, writing $\sigma$ as the image sequence:

| $\sigma$ | $\prod_i M_{i,\sigma(i)}$ | $\mathrm{sgn}$ | det term | per term |
|---|---|---|---|---|
| $(1,2,3)$ | $1\cdot1\cdot1 = 1$ | $+$ | $+1$ | $+1$ |
| $(1,3,2)$ | $1\cdot1\cdot1 = 1$ | $-$ | $-1$ | $+1$ |
| $(2,1,3)$ | $1\cdot1\cdot1 = 1$ | $-$ | $-1$ | $+1$ |
| $(2,3,1)$ | $1\cdot1\cdot0 = 0$ | $+$ | $0$ | $0$ |
| $(3,1,2)$ | $0\cdot1\cdot1 = 0$ | $+$ | $0$ | $0$ |
| $(3,2,1)$ | $0\cdot1\cdot0 = 0$ | $-$ | $0$ | $0$ |

$$\det M = 1 - 1 - 1 = -1, \qquad \mathrm{per}\,M = 1 + 1 + 1 = 3.$$

Check the determinant independently by cofactor expansion along the first row: $1(1\cdot1 - 1\cdot1) - 1(1\cdot1 - 1\cdot0) + 0 = 0 - 1 + 0 = -1$. ✓

And the three permutations with product 1 are precisely the three perfect matchings, as the proposition promised.

**Example 2 (why you'd care): counting is easy, deciding was easier, and neither tells you the other.** Take 2SAT: $(x_1 \vee x_2) \wedge (\lnot x_1 \vee x_3) \wedge (\lnot x_2 \vee \lnot x_3) \wedge (x_1 \vee \lnot x_3)$.

*Deciding.* [Lesson 2.5](02-05-l-nl-and-nl-completeness.md) does it by reachability in the implication graph, in logarithmic space and linear time. The answer is **satisfiable**.

*Counting.* The satisfying assignments are $010$ and $101$, so the count is **2**. On three variables you can check all eight by hand. On three hundred variables you cannot, and there is no known way to do better than exponential — $\#2\text{SAT}$ is $\#\mathsf{P}$-complete.

**The gap between those two paragraphs is the module.** Deciding 2SAT is a graph traversal; counting its solutions is believed intractable. Nothing about the implication graph helps: it tells you whether the constraint system is consistent, and says nothing about how many points the solution set contains.

Where this bites in practice: statistical inference. A probabilistic graphical model's normalizing constant is a weighted count of satisfying configurations, so exact inference on a model whose *consistency* is trivial can still be $\#\mathsf{P}$-hard. That is why the entire machinery of approximate inference — sampling, variational bounds, belief propagation — exists. See [`machine-learning`](../../machine-learning/syllabus.md) for the algorithms and [3.3](03-03-todas-theorem-and-approximate-counting.md) for what approximation can and cannot rescue.

## Watch out

- **You might think** $\#\mathsf{P}$ is a class of languages like NP — **but actually** it is a class of *functions*, so "is $\#\mathsf{P} = \mathsf{P}$?" is not even well-formed as stated. The comparisons that make sense are between $\mathsf{FP}$ (polynomial-time functions) and $\#\mathsf{P}$, or between $\mathsf{P}^{\#\mathsf{P}}$ and other language classes.
- **You might think** a counting problem must be at least as hard as its decision version, and at most exponentially harder — **but actually** only the first half is right. Counting perfect matchings is $\#\mathsf{P}$-complete while deciding is in $\mathsf{P}$, so the gap between the two versions of a single problem can be the entire polynomial hierarchy.
- **You might think** the permanent is hard because it is a sum over $n!$ terms — **but actually** so is the determinant, and that one is cubic. **The number of terms is not the obstacle; the absence of cancellation is.** This is the single most useful thing to remember from the lesson.
- **You might think** $\#\mathsf{P}$ functions are too big to write down — **but actually** the output has at most $p(n)$ bits, since the count is bounded by $2^{p(n)}$. The number can exceed the atoms in the universe and still be a polynomial-length string; **hardness is about computing it, not about writing it.**

## One-liner

> Deciding asks whether the solution set is empty and counting asks how big it is, and the difference between those two questions can be the whole polynomial hierarchy.

## Problems

**P1 (🟢)** Let $N = \begin{pmatrix} 1&1&1\\0&1&1\\1&0&1\end{pmatrix}$. (a) Compute $\mathrm{per}\,N$ by enumerating the six permutations, giving the product for each. (b) Compute $\det N$ from the same table. (c) State how many perfect matchings the corresponding bipartite graph has, and list them as permutations.

**P2 (🟡)** For each problem, give the complexity class of the decision version and of the counting version, from the classes $\mathsf{P}$, NP-complete, and $\#\mathsf{P}$-complete, and say in a clause what makes the pair interesting or unremarkable.

(a) 3SAT.
(b) Bipartite perfect matching.
(c) Counting spanning trees of a connected graph.
(d) DNF satisfiability.

**P3 (🔴, optional)** (a) Prove $\mathsf{P}^{\#\mathsf{P}} \subseteq \mathsf{PSPACE}$, stating what is held in memory. (b) Prove that if $\mathsf{P} = \mathsf{P}^{\#\mathsf{P}}$ then $\mathsf{P} = \mathsf{NP}$. (c) The converse — does $\mathsf{P} = \mathsf{NP}$ imply $\mathsf{P} = \mathsf{P}^{\#\mathsf{P}}$? Answer yes or no with the mechanism, referring forward to [Lesson 1.6](01-06-ladner-self-reducibility-search-vs-decision.md)'s binary-search idea.

<details>
<summary>Solutions</summary>

**P1**

(a) With $N_{1\cdot} = (1,1,1)$, $N_{2\cdot} = (0,1,1)$, $N_{3\cdot} = (1,0,1)$:

| $\sigma$ | $N_{1\sigma(1)}N_{2\sigma(2)}N_{3\sigma(3)}$ | product | sign |
|---|---|---|---|
| $(1,2,3)$ | $1\cdot1\cdot1$ | 1 | $+$ |
| $(1,3,2)$ | $1\cdot1\cdot0$ | 0 | $-$ |
| $(2,1,3)$ | $1\cdot0\cdot1$ | 0 | $-$ |
| $(2,3,1)$ | $1\cdot1\cdot1$ | 1 | $+$ |
| $(3,1,2)$ | $1\cdot0\cdot0$ | 0 | $+$ |
| $(3,2,1)$ | $1\cdot1\cdot1$ | 1 | $-$ |

$$\mathrm{per}\,N = 1 + 0 + 0 + 1 + 0 + 1 = \mathbf{3}.$$

(b) Applying the signs: $\det N = +1 - 0 - 0 + 1 + 0 - 1 = \mathbf{1}$.

Check by cofactor expansion on the first row: $1(1\cdot1 - 1\cdot0) - 1(0\cdot1 - 1\cdot1) + 1(0\cdot0 - 1\cdot1) = 1 + 1 - 1 = 1$. ✓

(c) **3 perfect matchings**, corresponding to the three permutations with product 1: $(1,2,3)$, $(2,3,1)$ and $(3,2,1)$.

**P2**

(a) 3SAT: decision **NP-complete**, counting **$\#\mathsf{P}$-complete**. Unremarkable — the hard decision problem has a hard counting problem, which is what you would expect.

(b) Bipartite perfect matching: decision **$\mathsf{P}$**, counting **$\#\mathsf{P}$-complete**. The flagship case: the decision problem has a classical polynomial algorithm and the counting problem is Valiant's theorem. Maximum gap.

(c) Spanning trees: decision **$\mathsf{P}$** (trivially yes for a connected graph), counting **$\mathsf{P}$**. Also remarkable, in the other direction — Kirchhoff's matrix-tree theorem writes the count as a determinant of the reduced Laplacian, so the cancellation is available and the count is computable in $O(n^3)$.

(d) DNF satisfiability: decision **$\mathsf{P}$** — a DNF is satisfiable iff some term contains no variable and its negation, checkable by one scan — and counting **$\#\mathsf{P}$-complete**. Another maximal gap, and the one that admits an approximation scheme ([3.3](03-03-todas-theorem-and-approximate-counting.md)), which makes it the useful case in practice.

**P3**

(a) Let $g \in \#\mathsf{P}$ with predicate $V$ and certificate bound $p(n)$. A polynomial-space machine computes $g(x)$ by looping over all $y \in \{0,1\}^{\le p(n)}$ in lexicographic order, running $V(x,y)$, and incrementing a counter when it accepts. What is held: **the current $y$** ($p(n)$ bits), **the counter** (at most $p(n)+1$ bits, since the count is below $2^{p(n)+1}$), and $V$'s own polynomial workspace. All polynomial; the exponential cost is entirely in time. A $\mathsf{P}^{\#\mathsf{P}}$ machine makes polynomially many such calls, reusing the space, so the whole computation is in $\mathsf{PSPACE}$. $\blacksquare$

(b) Let $A \in \mathsf{NP}$ with verifier $V$ and let $g(x)$ count $V$'s accepting certificates — a $\#\mathsf{P}$ function. Then $x \in A \iff g(x) > 0$, which is a single oracle query plus a comparison, so $A \in \mathsf{P}^{\#\mathsf{P}}$. Under the hypothesis $\mathsf{P} = \mathsf{P}^{\#\mathsf{P}}$ this gives $A \in \mathsf{P}$, so $\mathsf{NP} \subseteq \mathsf{P}$. $\blacksquare$

(c) **Yes.** If $\mathsf{P} = \mathsf{NP}$ then the whole polynomial hierarchy collapses to $\mathsf{P}$ ([2.2](02-02-the-polynomial-hierarchy.md)), and a $\#\mathsf{P}$ value can be extracted by **binary search on the count**: the language $\{\langle x, k\rangle : g(x) \ge k\}$ is in NP, with the $k$ certificates as witness, so under the hypothesis it is in $\mathsf{P}$; asking it $p(n)$ times pins down the $p(n)$-bit answer one bit at a time. Hence $\#\mathsf{P} \subseteq \mathsf{FP}$ and $\mathsf{P}^{\#\mathsf{P}} = \mathsf{P}$.

Note what this does **not** say. It does not say counting is only as hard as deciding — [Lesson 3.3](03-03-todas-theorem-and-approximate-counting.md)'s Toda theorem shows a counting oracle is strong enough to run all of PH, which is far more than a decision oracle is known to do. The implication here is one-directional and runs through the collapse.

</details>

## Flashback

**From Lesson 2.6 (Immerman–Szelepcsényi & the class map):** For the digraph on $\{0,\dots,5\}$ with edges $0\to3$, $3\to1$, $1\to3$, $2\to0$, $4\to5$, $5\to4$, and start vertex $s = 0$: (a) give $R_i$ and $c_i$ for $i = 0,1,2,3$; (b) list the unreachable vertices; (c) state how many path verifications a certifying branch performs when proving vertex 4 unreachable, and name the check that kills a branch which tries to skip vertex 1.

<details>
<summary>Solution</summary>

(a) From 0 the only edge is $0 \to 3$, then $3\to1$, then $1\to3$ (already there).

| $i$ | $R_i$ | $c_i$ |
|---|---|---|
| 0 | $\{0\}$ | 1 |
| 1 | $\{0,3\}$ | 2 |
| 2 | $\{0,3,1\}$ | 3 |
| 3 | $\{0,1,3\}$ | 3 |

(b) Unreachable: $\mathbf{2, 4, 5}$. Vertex 2 has an edge *into* 0 but none out of the reachable set into it, and $\{4,5\}$ is a separate component entirely.

(c) The certifying branch verifies every member of $R$, which is $\mathbf{3}$ vertices: 0 by the empty path, 3 via $0\to3$, and 1 via $0\to3\to1$. It then observes 4 was never among them.

A branch that skips vertex 1 is killed by the **count check**: it can verify at most 0 and 3, reaching a tally of 2, which falls short of $c = 3$, so the final comparison rejects that branch. (The path check is the complementary guard — it kills a branch that *claims* an unreachable vertex, since no path can be exhibited.)

</details>

## Connections

- **Backward:** $\#\mathsf{P}$ is [1.2](01-02-np-ntime-and-nondeterministic-time.md)'s verifier with the existential quantifier replaced by a tally, so the certificate-length bound carries over unchanged and is what keeps the answer polynomially many bits. The counting-as-certificate move is [2.6](02-06-immerman-szelepcsenyi-and-the-class-map.md)'s, now promoted from a proof technique to the object of study.
- **Forward:** [3.2](03-02-sharp-p-completeness-and-parsimonious-reductions.md) defines completeness for counting and shows why the reductions of [1.5](01-05-reduction-craft-and-how-reductions-break.md) mostly do not qualify. [3.3](03-03-todas-theorem-and-approximate-counting.md) places $\mathsf{P}^{\#\mathsf{P}}$ above the entire hierarchy and asks what randomized approximation can recover.
- **Sideways:** the permanent-versus-determinant contrast is the combinatorial shadow of Valiant's algebraic classes VP and VNP, and the same "counting is the partition function" identification runs through statistical mechanics — the hard-core model's partition function is the independent-set count, so [`stat-mech` 3.2](../../stat-mech/lessons/03-02-partition-function.md)'s central object is a $\#\mathsf{P}$-hard quantity for general interaction graphs.
