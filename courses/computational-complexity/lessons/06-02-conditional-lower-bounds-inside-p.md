# Complexity Theory · Lesson 6.2: Conditional lower bounds inside P

> ⏱ ~15 min · Module 6: Fine-grained complexity · Builds on: [6.1 (ETH and SETH)](06-01-eth-seth-and-the-exponential-time-view.md) · Course complete

## Why this matters

Every hardness result so far has been about problems outside $\mathsf{P}$, or believed to be. This lesson is about problems comfortably **inside** $\mathsf{P}$, with textbook polynomial algorithms, where the question is not whether they are tractable but whether your particular algorithm is the best possible.

That is the question practitioners actually face. Edit distance has a classic $O(n^2)$ dynamic program. On two genomes of length $10^8$ that is $10^{16}$ operations — days of compute — and the natural response is to look for something faster. **How long should you look?**

The answer, since 2015, is: not at all, if you believe SETH. Backurs and Indyk proved that an $O(n^{2-\varepsilon})$ algorithm for edit distance would refute the strong exponential time hypothesis. The same holds for longest common subsequence, Fréchet distance, and a growing list of quadratic-time problems.

**This is NP-hardness's methodology transplanted into $\mathsf{P}$**: a hypothesis at the top, a web of reductions beneath it, and a verdict of "stop optimizing" for anything the web reaches. It is the part of complexity theory most likely to change what you do on a Tuesday, and it is the right place to end the course.

## The idea

**Orthogonal Vectors is the hub.** Given two sets $A, B$ of $N$ vectors each in $\{0,1\}^d$, is there a pair $a\in A$, $b\in B$ with $a\cdot b = 0$ — that is, sharing no coordinate where both are 1?

The obvious algorithm is $O(N^2 d)$: try every pair. The **OV conjecture** says that for $d = \omega(\log N)$ no $O(N^{2-\varepsilon})$ algorithm exists, for any $\varepsilon>0$.

OV is not interesting in itself. It is interesting because SETH implies it, and because it reduces to a great many problems people actually run.

**SETH implies the OV conjecture, and the reduction is three lines.** Take a CNF formula on $n$ variables and $m$ clauses. Split the variables into two halves of $n/2$ each. For each of the $2^{n/2}$ assignments to the first half, build a vector in $\{0,1\}^m$:

$$a_j \;=\; \begin{cases}0 & \text{the half-assignment already satisfies clause } j,\\ 1 & \text{it does not.}\end{cases}$$

Do the same for the second half, giving sets $A$ and $B$ of size $N = 2^{n/2}$ in dimension $d = m$.

Now read the inner product. $a\cdot b = 0$ means there is **no** clause $j$ with $a_j = b_j = 1$ — no clause left unsatisfied by *both* halves. So every clause is satisfied by at least one half, which is exactly what it means for the combined assignment to satisfy the formula.

$$\varphi \text{ satisfiable} \iff \text{some pair } (a,b) \text{ is orthogonal.}$$

**And the timing works out exactly.** An $O(N^{2-\varepsilon})$ algorithm for OV runs in $O\big((2^{n/2})^{2-\varepsilon}\big) = O(2^{n(1-\varepsilon/2)})$ — an algorithm for CNF-SAT with base $2^{1-\varepsilon/2} < 2$, uniform in the clause width. That refutes SETH.

**From OV downward.** Reductions from OV give quadratic lower bounds for edit distance, longest common subsequence, dynamic time warping, Fréchet distance, and more. Each encodes OV vectors as strings or curves so that a subquadratic algorithm for the target would solve OV subquadratically.

**A second hub: 3SUM.** Given $n$ integers, are there three summing to zero? The best known algorithm is $O(n^2)$ up to logarithmic factors, and the **3SUM conjecture** says no $O(n^{2-\varepsilon})$ exists. It implies quadratic lower bounds across computational geometry — three collinear points, polygon containment, and dozens more.

## The formal version

**Definition ([Orthogonal Vectors](../reference.md#orthogonal-vectors)).** $\text{OV}$: given $A, B\subseteq\{0,1\}^{d}$ with $|A| = |B| = N$, decide whether some $a\in A, b\in B$ have $\sum_{j} a_j b_j = 0$.

**Definition ([the OV conjecture](../reference.md#ov-conjecture)).** For every $\varepsilon>0$ there is no algorithm solving OV in $O(N^{2-\varepsilon}\mathrm{poly}(d))$ time.

**Theorem ([SETH implies the OV conjecture](../reference.md#seth-implies-ov)).** If OV has an $O(N^{2-\varepsilon})$ algorithm for some $\varepsilon>0$ and $d = \mathrm{poly}\log N$, then CNF-SAT is solvable in $O(2^{n(1-\varepsilon/2)}\mathrm{poly}(m))$ time, refuting SETH.

*Proof.* Given a CNF $\varphi$ with variables $x_1,\dots,x_n$ and clauses $C_1,\dots,C_m$, split the variables as $V_1 = \{x_1,\dots,x_{n/2}\}$ and $V_2$ the rest. For each assignment $\alpha$ to $V_1$ define $v(\alpha)\in\{0,1\}^m$ by $v(\alpha)_j = 0$ if $\alpha$ satisfies $C_j$ and 1 otherwise; define $w(\beta)$ likewise for assignments $\beta$ to $V_2$. Set $A = \{v(\alpha)\}$, $B = \{w(\beta)\}$, so $N = 2^{n/2}$ and $d = m$.

*Correctness.* For any $\alpha,\beta$,

$$v(\alpha)\cdot w(\beta) = 0 \iff \nexists j:\ v(\alpha)_j = w(\beta)_j = 1 \iff \forall j:\ \alpha \text{ or } \beta \text{ satisfies } C_j \iff (\alpha,\beta) \text{ satisfies } \varphi.$$

So $\varphi$ is satisfiable iff an orthogonal pair exists.

*Timing.* Building the sets takes $O(2^{n/2} m)$. Running the assumed algorithm costs $O(N^{2-\varepsilon}\mathrm{poly}(d)) = O(2^{n(1-\varepsilon/2)}\mathrm{poly}(m))$. The base $2^{1-\varepsilon/2}$ is strictly below 2 and does not depend on the clause width, contradicting SETH. $\blacksquare$

*(By the sparsification lemma of [6.1](06-01-eth-seth-and-the-exponential-time-view.md), $m = O(n)$ may be assumed, so $d = O(\log N)$ as required.)*

**Theorem ([Backurs-Indyk, 2015](../reference.md#edit-distance-hardness)).** If edit distance on two strings of length $n$ is computable in $O(n^{2-\varepsilon})$ time for some $\varepsilon>0$, then SETH is false. The same holds for longest common subsequence (Abboud–Backurs–Williams; Bringmann–Künnemann) and for discrete Fréchet distance (Bringmann).

**Definition ([3SUM conjecture](../reference.md#3sum-conjecture)).** There is no $O(n^{2-\varepsilon})$ algorithm deciding whether $n$ given integers contain three summing to zero.

**The consequences web.**

| hypothesis | implies a quadratic lower bound for |
|---|---|
| SETH | Orthogonal Vectors, edit distance, LCS, dynamic time warping, Fréchet distance, graph diameter |
| 3SUM | three collinear points, polygon containment, many geometry problems |
| all-pairs shortest paths (no truly subcubic) | negative triangle, second shortest path, replacement paths |

**What these results are not.** They are **conditional**, on hypotheses weaker-confidence than $\mathsf{P}\ne\mathsf{NP}$; they are **worst-case**, so structured instances may be far easier; and they concern **exact** computation — edit distance has subquadratic approximation algorithms, and that is the standard escape route.

## Picture

![A diagram with SETH in a coral box at the top, an arrow down labelled split the variables in half leading to a blue box labelled Orthogonal Vectors, and three arrows fanning out below to boxes labelled edit distance, longest common subsequence, and Frechet distance, each annotated no order n to the two minus epsilon. Below, a separate coral box labelled 3SUM conjecture with an arrow to a note about three collinear points, polygon containment and much of geometry.](assets/06-02-fig1.svg)

The shape is the same as NP-completeness: a hypothesis at the top, a hub beneath it, and a fan of consequences. What differs is the currency. An NP-hardness reduction must preserve polynomial time; a **fine-grained reduction must preserve the exponent**, so a subquadratic algorithm at the bottom propagates all the way up and refutes SETH.

That is why each arrow is a stronger commitment than an ordinary reduction. It is not enough that a solver for the target solves the source — it must do so with the same exponent, which typically means the reduction runs in near-linear time and blows up the instance by a constant factor at most.

**Read the fan as a portfolio.** Every arrow that leaves OV adds a problem whose quadratic algorithm is now certified optimal, and simultaneously adds a way to refute SETH: find a subquadratic algorithm for *any* of them and the hypothesis falls. So the hypothesis becomes better tested as the web grows, which is the same self-reinforcing structure that makes $\mathsf{P}\ne\mathsf{NP}$ credible — thousands of problems, one shared fate.

The 3SUM branch is drawn separately because it is a genuinely independent hypothesis. Neither implies the other, and a world where SETH fails and 3SUM holds is consistent with everything known.

## Worked examples

**Example 1 (mechanical): run the SETH-to-OV reduction.** Take

$$\varphi = (x_1\vee x_2\vee\lnot x_3)\wedge(\lnot x_1\vee x_3\vee x_4)\wedge(x_2\vee\lnot x_3\vee\lnot x_4)\wedge(\lnot x_1\vee\lnot x_2\vee x_4),$$

with $n = 4$ and $m = 4$. Split into $V_1 = \{x_1,x_2\}$ and $V_2 = \{x_3,x_4\}$, giving $N = 2^2 = 4$ vectors on each side in dimension $d = 4$.

Coordinate $j$ is 1 when the half-assignment does **not** satisfy clause $j$:

| $x_1x_2$ | vector | | $x_3x_4$ | vector |
|---|---|---|---|---|
| 00 | 1010 | | 00 | 0101 |
| 01 | 0000 | | 01 | 0000 |
| 10 | 0110 | | 10 | 1001 |
| 11 | 0101 | | 11 | 1010 |

Read one row to see the encoding working. The half-assignment $x_1x_2 = 01$ sets $x_2$ true, and $x_2$ appears positively in clauses 1 and 3; it also makes $\lnot x_1$ true, satisfying clauses 2 and 4. All four clauses are satisfied by this half alone, so its vector is $0000$ — and $0000$ is orthogonal to everything, as it should be.

Now count orthogonal pairs by hand or by search: there are exactly **10**. And $\varphi$ has exactly **10** satisfying assignments. Every orthogonal pair decodes to a satisfying assignment and conversely, which is the correctness claim made concrete.

A negative case, to see the other direction. Take $\psi = (x_1\vee x_2)\wedge(\lnot x_1\vee x_2)\wedge(x_1\vee\lnot x_2)\wedge(\lnot x_1\vee\lnot x_2)$, splitting one variable to each side. The vectors are $A = \{1010, 0101\}$ and $B = \{1100, 0011\}$, and **no pair is orthogonal** — each pair collides in some coordinate. Correct: $\psi$ is unsatisfiable, since its four clauses forbid all four assignments.

**Example 2 (why you'd care): deciding whether to optimize.** You are aligning two DNA sequences of length $n = 10^8$ with the standard edit-distance dynamic program, $O(n^2)$ time. That is $10^{16}$ cell updates: at $10^9$ per second, about four months.

The instinct is to find a faster exact algorithm. What does the theory say?

**Backurs–Indyk: an $O(n^{2-\varepsilon})$ exact algorithm refutes SETH.** So searching for one is equivalent to attacking a major open problem, and you will not succeed on a deadline.

What remains, and this is the useful part, is everything the theorem does not cover:

- **Approximate.** Subquadratic approximation algorithms for edit distance exist, with constant-factor and better guarantees. The lower bound is for exact computation only.
- **Exploit structure.** If the true distance is small, the banded dynamic program runs in $O(nk)$ where $k$ bounds the distance — and for two genomes of the same species, $k \ll n$. **This is the winning move in practice**, and it is available precisely because the hardness is worst case.
- **Change the problem.** Seed-and-extend heuristics, which is what real aligners do, solve a different problem that happens to answer the biological question.
- **Parallelize.** The dynamic program has an anti-diagonal wavefront and parallelizes well; the lower bound is about total work, not depth.

**The theorem's value is the redirection.** Without it you might spend months on an exact subquadratic algorithm; with it you know that month is better spent on the banded variant or on approximation. That is exactly what NP-completeness does for exact optimization, delivered one class down — and it is the most directly actionable thing in this course.

## Watch out

- **You might think** a conditional lower bound inside $\mathsf{P}$ is weak because $\mathsf{P}$ is the tractable class — **but actually** it is the most practically binding kind of result here. Knowing your $O(n^2)$ algorithm is optimal is more useful on a Tuesday than knowing a different problem is NP-hard.
- **You might think** these results rest on $\mathsf{P}\ne\mathsf{NP}$ — **but actually** they rest on SETH or 3SUM, which are **strictly stronger** and correspondingly less certain. A refutation of SETH would remove the lower bounds without disturbing $\mathsf{P}\ne\mathsf{NP}$ at all.
- **You might think** the edit-distance bound rules out fast alignment — **but actually** it rules out exact subquadratic computation in the worst case. Approximation, small-distance instances and heuristics are all untouched, and all are what production tools use.
- **You might think** an ordinary polynomial-time reduction suffices to transfer these bounds — **but actually** it does not: the reduction must preserve the *exponent*, which usually means near-linear time and constant-factor blow-up. A quadratic-time reduction between quadratic-time problems proves nothing.
- **You might think** SETH implying OV means the two are equivalent — **but actually** the implication is one-way and known to be strict in no direction: OV could be hard while SETH fails. That is why "under the OV conjecture" is a weaker assumption than "under SETH", and papers state which they use.

## One-liner

> Split the variables in half and a satisfying assignment becomes an orthogonal pair — so the same hypothesis that makes SAT exponential makes edit distance quadratic, and your dynamic program is already optimal.

## Problems

**P1 (🟢)** Apply the SETH-to-OV reduction to $\varphi = (x_1\vee x_2)\wedge(\lnot x_1\vee x_2)$, splitting $V_1 = \{x_1\}$, $V_2 = \{x_2\}$. (a) Give $N$ and $d$. (b) Give the four vectors, two per side. (c) List the orthogonal pairs and check the count against the number of satisfying assignments.

**P2 (🟡)** For each proposed result, say whether it would refute SETH, refute the 3SUM conjecture, refute neither, or refute $\mathsf{P}\ne\mathsf{NP}$.

(a) Edit distance in $O(n^{1.9})$ time, exactly.
(b) Edit distance in $O(n^{1.5})$ time, within a factor of 2.
(c) Orthogonal Vectors in $O(N^2/\log^{100} N)$ time.
(d) Three collinear points among $n$ given points in $O(n^{1.8})$ time.

**P3 (🔴, optional)** This is Boss problem 6. Prove that SETH implies the OV conjecture. (a) Give the construction, defining the two vector sets explicitly. (b) Prove the correctness claim in both directions. (c) Give the running-time calculation showing an $O(N^{2-\varepsilon})$ OV algorithm yields a CNF-SAT algorithm with base below 2, and state where the sparsification lemma is needed.

<details>
<summary>Solutions</summary>

**P1**

(a) Each half has one variable, so $N = 2^1 = \mathbf{2}$ vectors per side, and the dimension is the clause count, $d = \mathbf{2}$.

(b) Coordinate $j$ is 1 iff the half-assignment fails to satisfy clause $j$. Clauses: $C_1 = (x_1\vee x_2)$, $C_2 = (\lnot x_1\vee x_2)$.

| $x_1$ | satisfies $C_1$? | satisfies $C_2$? | vector |
|---|---|---|---|
| 0 | no | yes ($\lnot x_1$) | $\mathbf{10}$ |
| 1 | yes ($x_1$) | no | $\mathbf{01}$ |

| $x_2$ | satisfies $C_1$? | satisfies $C_2$? | vector |
|---|---|---|---|
| 0 | no | no | $\mathbf{11}$ |
| 1 | yes | yes | $\mathbf{00}$ |

So $A = \{10, 01\}$ and $B = \{11, 00\}$.

(c) Check all four pairs:

| pair | inner product | orthogonal? | decodes to |
|---|---|---|---|
| $10\cdot11$ | $1$ | no | — |
| $10\cdot00$ | $0$ | **yes** | $x_1=0, x_2=1$ |
| $01\cdot11$ | $1$ | no | — |
| $01\cdot00$ | $0$ | **yes** | $x_1=1, x_2=1$ |

**2 orthogonal pairs.** And $\varphi = (x_1\vee x_2)\wedge(\lnot x_1\vee x_2)$ is satisfied exactly when $x_2 = 1$, so it has **2** satisfying assignments ($01$ and $11$). ✓ The counts match, and each orthogonal pair decodes to one of them.

**P2**

(a) **Refutes SETH.** This is exactly Backurs–Indyk with $\varepsilon = 0.1$: an exact $O(n^{2-\varepsilon})$ edit-distance algorithm gives a subquadratic OV algorithm and hence a CNF-SAT algorithm with base below 2.

(b) **Refutes neither.** The lower bound is for **exact** edit distance; constant-factor approximations in subquadratic time are known and contradict nothing.

(c) **Refutes neither.** The OV conjecture forbids $O(N^{2-\varepsilon})$ for a constant $\varepsilon > 0$; shaving polylogarithmic factors leaves the exponent at 2 and is consistent with it. Such "log-shaving" results are a real and active line of work, and they are deliberately outside what the conjecture claims.

(d) **Refutes the 3SUM conjecture.** Three collinear points is 3SUM-hard by a fine-grained reduction, so a subquadratic algorithm for it gives a subquadratic 3SUM algorithm. It says nothing about SETH — the two hypotheses are independent.

**P3**

(a) *Construction.* Let $\varphi$ be a CNF on variables $x_1,\dots,x_n$ with clauses $C_1,\dots,C_m$. Split the variables into $V_1 = \{x_1,\dots,x_{n/2}\}$ and $V_2 = \{x_{n/2+1},\dots,x_n\}$. Define

$$A = \big\{\,v(\alpha) : \alpha \text{ an assignment to } V_1\,\big\}, \qquad v(\alpha)_j = \begin{cases}0 & \alpha \text{ satisfies } C_j,\\ 1 & \text{otherwise,}\end{cases}$$

and $B = \{w(\beta)\}$ defined identically for assignments $\beta$ to $V_2$. Then $|A| = |B| = N = 2^{n/2}$ and both live in $\{0,1\}^{d}$ with $d = m$. Building them takes $O(2^{n/2}\,m)$ time — scan every clause once per half-assignment.

(b) *Correctness, both directions.* Fix $\alpha$ and $\beta$, and let $\gamma$ be the combined assignment.

($\Rightarrow$) Suppose $v(\alpha)\cdot w(\beta) = 0$. Since all entries are 0 or 1, the sum $\sum_j v(\alpha)_j w(\beta)_j$ vanishes iff **no** index $j$ has both entries equal to 1. So for every clause $C_j$, at least one of $v(\alpha)_j, w(\beta)_j$ is 0, meaning at least one of $\alpha, \beta$ satisfies $C_j$. A clause satisfied by a partial assignment is satisfied by any extension, so $\gamma$ satisfies every $C_j$, hence $\gamma$ satisfies $\varphi$.

($\Leftarrow$) Suppose $\gamma$ satisfies $\varphi$. Each clause $C_j$ contains a literal made true by $\gamma$; that literal's variable lies in $V_1$ or in $V_2$, so $\alpha$ or $\beta$ already satisfies $C_j$, giving $v(\alpha)_j = 0$ or $w(\beta)_j = 0$. Hence no index contributes to the inner product and $v(\alpha)\cdot w(\beta) = 0$.

Therefore $\varphi$ is satisfiable iff some pair in $A\times B$ is orthogonal. $\blacksquare$

(c) *Timing.* Suppose OV is solvable in $O(N^{2-\varepsilon}\mathrm{poly}(d))$ for some $\varepsilon>0$. Substituting $N = 2^{n/2}$:

$$\big(2^{n/2}\big)^{2-\varepsilon} = 2^{\frac n2 (2-\varepsilon)} = 2^{n\left(1 - \frac\varepsilon2\right)} = \Big(2^{1-\varepsilon/2}\Big)^{n}.$$

Adding the $O(2^{n/2}m)$ construction cost and the $\mathrm{poly}(d) = \mathrm{poly}(m)$ factor, the total is $O\big(2^{n(1-\varepsilon/2)}\mathrm{poly}(m)\big)$.

The base is $2^{1-\varepsilon/2}$, which is strictly less than 2 for $\varepsilon>0$, and — crucially — **does not depend on the clause width $k$.** SETH asserts that for every $\delta>0$ some $k$-SAT resists base $2-\delta$; setting $\delta = 2 - 2^{1-\varepsilon/2} > 0$ contradicts it. So SETH implies the OV conjecture. $\blacksquare$

*Where sparsification is needed.* The OV conjecture is stated for dimension $d$ small relative to $N$ — typically $d = \mathrm{poly}\log N$ — because for $d$ as large as $N$ the problem is trivially quadratic for uninteresting reasons. Here $d = m$ and $N = 2^{n/2}$, so $d = \mathrm{poly}\log N$ requires $m = \mathrm{poly}(n)$, and more tightly $d = O(\log N)$ requires $m = O(n)$.

The **sparsification lemma** of [Lesson 6.1](06-01-eth-seth-and-the-exponential-time-view.md) supplies exactly that: it converts an arbitrary $k$-CNF into $2^{\varepsilon' n}$ formulas each with $O(n)$ clauses, at a cost of $2^{\varepsilon' n}$, which for small $\varepsilon'$ is absorbed into the base. Without it the reduction would produce instances of dimension $m = \Theta(n^k)$, outside the regime the conjecture speaks about.

</details>

## Flashback

**From Lesson 6.1 (ETH, SETH & the exponential-time view):** For each claimed algorithm, state which of $\mathsf{P}\ne\mathsf{NP}$, ETH and SETH it would refute.

(a) 4-SAT in $2^{O(\sqrt{n})}$ time.
(b) $k$-SAT in $O(1.95^n)$ for every $k$.
(c) Vertex Cover in $O(1.28^k n)$ time, where $k$ is the cover size.

<details>
<summary>Solution</summary>

(a) **ETH and SETH.** A $2^{O(\sqrt n)}$ algorithm for 4-SAT gives one for 3SAT (a 3-clause is a 4-clause with a repeated literal, or reduce directly with linear blow-up), so 3SAT would be solvable in $2^{o(n)}$, refuting ETH — and SETH implies ETH, so it falls too. $\mathsf{P}\ne\mathsf{NP}$ survives, since $2^{\sqrt n}$ is not polynomial.

(b) **SETH only.** A uniform base of 1.95 across all clause widths is exactly what SETH forbids. ETH survives, since $1.95^n$ is still $2^{\Theta(n)}$ and not subexponential; so does $\mathsf{P}\ne\mathsf{NP}$.

(c) **None.** This is a real algorithm, not a hypothetical one — vertex cover has a bounded-search-tree algorithm with this running time. It refutes nothing because the exponential dependence is on the **solution size $k$**, not on the instance size $n$, and ETH constrains only the dependence on $n$. When $k$ is large, say $k = n/2$, the bound is $1.28^{n/2}$, which is exponential in $n$ and consistent with everything.

This is exactly the redirection [6.1](06-01-eth-seth-and-the-exponential-time-view.md) describes: ETH forbids a subexponential dependence on the vertex count and leaves a good dependence on a different parameter wide open.

</details>

## Connections

- **Backward:** the hypotheses are [6.1](06-01-eth-seth-and-the-exponential-time-view.md)'s, the sparsification lemma that keeps the dimension small is that lesson's too, and the split-the-variables trick is the same meet-in-the-middle idea that gives SUBSET-SUM its $O(2^{n/2})$ algorithm, which [1.5](01-05-reduction-craft-and-how-reductions-break.md)'s reduction produces instances of.
- **Sideways:** the edit-distance dynamic program is [`algorithms` 2.6](../../algorithms/lessons/02-06-dp-on-sequences-lcs-and-edit-distance.md)'s, and this lesson certifies it optimal; the banded variant that escapes the bound is the standard tool in [`computational-biology`](../../computational-biology/syllabus.md)'s sequence alignment, which is the single largest consumer of these algorithms in practice.

## Closing the course

You started with a definition that looked like bookkeeping — $\mathsf{P}$ as a union over exponents — and the reason for it turned out to be the whole shape of the subject: **classes are drawn at the coarsest resolution where the answer stops depending on the machine.** Everything since has been a study of what each resource buys at that resolution.

What you can now do that you could not at the start:

- **Prove a separation.** The hierarchy theorems are the only unconditional tool, and you know both how they work and precisely why they stop short of P versus NP.
- **Place a problem.** Count quantifier alternations for the polynomial hierarchy, count resources for the space classes, read an error profile for the randomized ones, and check a decision version before believing a counting problem is approximable.
- **Read a reduction critically.** Which structure does it preserve — the answer, the count, the ratio, the exponent? Four different questions, four different notions, and a reduction proves only what it was built to preserve.
- **Recognize the standard argumentative moves.** "Otherwise the hierarchy collapses" in three variants; "a soundness gap is an approximation gap"; "counting certifies a negative"; "a resource that is reusable is cheap to search with".
- **Know what is not known, and why.** Not one containment in $\mathsf{L}\subseteq\mathsf{NL}\subseteq\mathsf{P}\subseteq\mathsf{NP}\subseteq\mathsf{PH}\subseteq\mathsf{PSPACE}\subseteq\mathsf{EXP}$ is proved strict, three barrier theorems rule out every technique anyone has, and the field's response has been to get sharper conditional results rather than weaker unconditional ones.

That last point is the one worth carrying. The subject's central question has been open for fifty years and the honest position is not pessimism but precision: **we know exactly which arguments cannot work, which is a more useful thing to know than a list of arguments that have not yet been tried.**

Where to go next. [`cryptography`](../../cryptography/syllabus.md) takes the hardness assumptions seriously and builds on them, with the crucial shift from worst case to average case that [1.6](01-06-ladner-self-reducibility-search-vs-decision.md) flagged. [`quantum-computing` 6.1](../../quantum-computing/lessons/06-01-bqp-and-the-complexity-landscape.md) adds BQP to the map you drew in [2.6](02-06-immerman-szelepcsenyi-and-the-class-map.md). And [`algorithms`](../../algorithms/syllabus.md) Module 4, which handed this course its questions, reads differently now that you know where its coping strategies sit.
