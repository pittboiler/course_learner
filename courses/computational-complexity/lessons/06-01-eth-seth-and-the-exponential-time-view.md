# Complexity Theory · Lesson 6.1: ETH, SETH & the exponential-time view

> ⏱ ~15 min · Module 6: Fine-grained complexity · Builds on: [5.5 (hardness of approximation)](05-05-hardness-of-approximation.md), [1.5 (reduction craft)](01-05-reduction-craft-and-how-reductions-break.md) · Unlocks: [6.2 (conditional lower bounds inside P)](06-02-conditional-lower-bounds-inside-p.md)

## Why this matters

$\mathsf{P}\ne\mathsf{NP}$ says 3SAT has no algorithm running in $n^{100}$ steps. It does not say 3SAT has no algorithm running in $2^{\sqrt n}$ steps — which would be a spectacular practical result and is entirely consistent with everything Modules 1 through 5 established.

**P versus NP is a question about the base of the exponent; this module is about its exponent.** And that finer question is the one that decides whether a particular instance finishes. If SAT took $2^{\sqrt n}$ steps, formulas with ten thousand variables would be routine and the security of every deployed cryptosystem would need rethinking, all without disturbing $\mathsf{P}\ne\mathsf{NP}$ at all.

The **exponential time hypothesis** and its strong form are the hypotheses that pin this down, and they have turned out to be far more useful than their modest-looking statements suggest. They rule out subexponential algorithms for NP-hard problems, they fix the right parameter dependence for parameterized algorithms, and — the subject of [Lesson 6.2](06-02-conditional-lower-bounds-inside-p.md) — they produce lower bounds *inside* $\mathsf{P}$, telling you that your quadratic algorithm is optimal.

This is also the honest response to [Lesson 5.6](05-06-relativization-natural-proofs-algebrization.md)'s barriers. Unconditional lower bounds are out of reach; conditional ones on a stronger hypothesis are not, and the results they yield are sharp.

## The idea

**What is actually known about solving 3SAT.** Brute force is $2^n$ up to polynomial factors. Real algorithms do better — the best known 3SAT algorithms run in about $1.307^n$ — but the improvement is a change of *base*, not of shape.

| algorithm | running time | at $n = 100$ |
|---|---|---|
| brute force | $2^n$ | $10^{30.1}$ |
| best known 3-SAT | $\approx1.307^n$ | $10^{11.6}$ |
| best known 4-SAT | $\approx1.469^n$ | $10^{16.7}$ |
| best known 5-SAT | $\approx1.569^n$ | $10^{19.6}$ |

Two things stand out. The base is genuinely below 2, so the exponential can be shaved. And **the base creeps back toward 2 as the clause width $k$ grows** — which is the observation SETH turns into a hypothesis.

**ETH.** The exponential time hypothesis: there is a constant $\delta > 0$ such that 3SAT cannot be solved in $2^{\delta n}$ time. Equivalently, 3SAT has no $2^{o(n)}$ algorithm — no running time like $2^{\sqrt n}$ or $2^{n/\log n}$.

**SETH.** The strong form: for every $\varepsilon > 0$ there is a $k$ such that $k$-SAT cannot be solved in $(2-\varepsilon)^n$ time. In words, **as clauses get wider the best base tends to 2, and brute force is essentially optimal in the limit.**

SETH implies ETH, and both imply $\mathsf{P}\ne\mathsf{NP}$. Both are strictly stronger, and both could be false while $\mathsf{P}\ne\mathsf{NP}$ holds. Confidence in them is correspondingly lower — ETH is widely believed; SETH is believed by many and doubted by a substantial minority, partly because it has been refuted in closely related settings.

**Why $n$ and not $m$?** A subtlety worth getting right. A 3CNF formula on $n$ variables can have up to $\binom{n}{3}\cdot 8 = \Theta(n^3)$ clauses, so "time $2^{o(n)}$" and "time $2^{o(m)}$" are different claims. The **sparsification lemma** (Impagliazzo, Paturi, Zane) reconciles them: any 3CNF can be written, in time $2^{\varepsilon n}$, as an OR of $2^{\varepsilon n}$ formulas each with $O(n)$ clauses. So a $2^{o(m)}$ algorithm yields a $2^{o(n)}$ one, and **ETH in terms of $n$ and in terms of $m$ are equivalent.** Without this the hypothesis would be much weaker than it looks.

**Reductions must now preserve the exponent.** Consider a polynomial-time reduction mapping a 3SAT instance on $n$ variables to a target instance of size $N$. It is a perfectly good NP-hardness reduction whatever the blow-up, and it is nearly useless here unless the blow-up is linear.

Take $N = n^2$. A $2^{o(N)}$ algorithm for the target would give a $2^{o(n^2)}$ algorithm for 3SAT — which permits $2^n$ and therefore contradicts nothing. All you can extract is that the target has no $2^{o(\sqrt N)}$ algorithm, a much weaker conclusion than the $2^{o(N)}$ you wanted. With $N = O(n)$ the two coincide and the bound transfers intact.

So the new obligation on every reduction in this module is a **linear parameter blow-up**, checked explicitly. Most standard reductions from 3SAT happen to satisfy it, which is why ETH yields so many consequences for free — but not all do, and the ones that do not give correspondingly weaker bounds.

## The formal version

**Definition ([ETH](../reference.md#exponential-time-hypothesis)).** Let $s_k = \inf\{\delta : k\text{-SAT is solvable in } 2^{\delta n}\mathrm{poly}(m)\text{ time}\}$. The **exponential time hypothesis** is $s_3 > 0$.

*Equivalently: 3SAT has no algorithm running in $2^{o(n)}$ time.*

**Definition ([SETH](../reference.md#strong-exponential-time-hypothesis)).** The **strong exponential time hypothesis** is $\lim_{k\to\infty} s_k = 1$ — equivalently, for every $\varepsilon>0$ there is a $k$ with $k$-SAT not solvable in $(2-\varepsilon)^n$ time.

**Proposition ([the implication chain](../reference.md#eth-seth-chain)).**

$$\text{SETH} \;\Longrightarrow\; \text{ETH} \;\Longrightarrow\; \mathsf{P}\ne\mathsf{NP},$$

and no implication is known to reverse.

*Second implication.* If $\mathsf{P} = \mathsf{NP}$ then 3SAT is solvable in $n^c$ time, and $n^c = 2^{c\log n} = 2^{o(n)}$, contradicting ETH. $\blacksquare$

**Theorem ([sparsification lemma](../reference.md#sparsification-lemma)).** For every $\varepsilon>0$ and $k$ there is a constant $C$ and an algorithm running in $2^{\varepsilon n}\mathrm{poly}(n)$ time that converts a $k$-CNF $\varphi$ on $n$ variables into formulas $\psi_1,\dots,\psi_t$ with $t \le 2^{\varepsilon n}$, each a $k$-CNF on the same variables with at most $Cn$ clauses, such that $\varphi$ is satisfiable iff some $\psi_i$ is.

**Corollary.** ETH holds for $n$ iff it holds for $m$: 3SAT has a $2^{o(n)}$ algorithm iff it has a $2^{o(m)}$ one.

**Definition ([subexponential reduction](../reference.md#serf-reduction)).** A reduction from $\Pi$ to $\Pi'$ is **parameter-preserving** for these purposes if it maps instances with parameter $n$ to instances with parameter $O(n)$, in time $2^{o(n)}$. Only such reductions transfer ETH lower bounds.

**Consequences of ETH ([the payoff](../reference.md#eth-consequences)).** Because the standard NP-hardness reductions from 3SAT are linear in the parameter, ETH immediately gives:

| problem | ETH rules out |
|---|---|
| 3SAT | $2^{o(n)}$ |
| Vertex Cover, Independent Set, Clique | $2^{o(n)}$ on $n$-vertex graphs |
| Hamiltonian Path | $2^{o(n)}$ |
| $k$-Clique (parameterized) | $n^{o(k)}$ |
| Planar Vertex Cover | $2^{o(\sqrt n)}$ — and $2^{O(\sqrt n)}$ **is** achievable, so this is tight |

The last row is the one that shows the hypothesis is doing real work. Planar problems genuinely admit $2^{O(\sqrt n)}$ algorithms via treewidth, and ETH says that square root cannot be improved. **A matching upper and lower bound, from a hypothesis rather than a theorem — but sharp.**

## Picture

![A plot with the number of variables n on the horizontal axis from 0 to 120 and operations on a logarithmic vertical axis from 1 to ten to the fortieth. A coral curve labelled brute force two to the n rises steeply; a blue curve labelled best known 3-SAT about 1.307 to the n rises less steeply; a dashed grey curve labelled n cubed stays near the bottom. A horizontal dotted line marks a year of computation at ten to the twelve operations per second.](assets/06-01-fig1.svg)

Three curves and one deadline. The dotted line is roughly what a year of computing buys at $10^{12}$ operations per second, and where each curve crosses it is the largest instance you can actually solve.

**The gap between the coral and blue curves is what fifty years of SAT-algorithm research bought**: a change of base from 2 to about 1.307, which moves the crossing point out by a factor of roughly $\log 2/\log 1.307 \approx 2.6$. Real, valuable, and not a change of kind.

ETH says the blue curve can never flatten into the grey one — no base of 1, no $2^{\sqrt n}$, nothing subexponential. SETH says something sharper that the picture can only gesture at: **draw the same blue curve for $k$-SAT as $k$ grows and it creeps back up toward the coral one**, with no constant-factor saving in the exponent surviving in the limit.

Notice how far apart the grey polynomial curve and the two exponentials are, and then notice that $\mathsf{P}\ne\mathsf{NP}$ is only the claim that blue never becomes grey. It says nothing about *where* between them the truth sits, and that is the entire space this module works in.

## Worked examples

**Example 1 (mechanical): read a running time against the hypotheses.** For each claimed algorithm, say which hypothesis it would refute.

| claimed algorithm | refutes |
|---|---|
| 3SAT in $O(1.2^n)$ | **nothing.** A better base is consistent with ETH and SETH; the current record is $1.307^n$ and improving it is normal research. |
| 3SAT in $2^{O(\sqrt n)}$ | **ETH**, and hence SETH. Subexponential in $n$ is exactly what ETH forbids. |
| 3SAT in $O(n^{10})$ | **$\mathsf{P} = \mathsf{NP}$**, and therefore ETH and SETH too. |
| $k$-SAT in $O(1.9^n)$ for **every** $k$ | **SETH**, but not ETH: a uniform base of 1.9 is subexponential in no sense, so ETH survives. |
| CNF-SAT in $O(1.9^n)$ with unbounded clause width | **SETH**, immediately — SETH is precisely the claim that no such uniform base exists. |

Row four is the one to understand, because it isolates what SETH adds. **ETH is about whether the exponential can be escaped; SETH is about whether its base can be shaved uniformly in $k$.** They are different claims and the second is much stronger.

**Example 2 (why you'd care): sizing an exact algorithm.** You must solve vertex cover exactly on graphs with $n = 60$ vertices, and you have a day on a machine doing $10^{9}$ useful operations per second — about $10^{14}$ operations.

*Brute force.* $2^{60} \approx 1.15\times10^{18}$ subsets. Ten thousand times too slow.

*A better exponential.* Vertex cover has a branching algorithm running in about $1.28^k$ where $k$ is the cover size, times a polynomial. If the cover you need is at most $k = 30$, that is $1.28^{30} \approx 1.4\times10^{3}$, times polynomial overhead — **trivial.** The parameter that matters is $k$, not $n$.

*What ETH tells you.* It rules out $2^{o(n)}$, so no algorithm is subexponential in the vertex count. But it says nothing against $2^{O(k)}$ for the solution size, and that is exactly the gap parameterized algorithms live in.

**The practical reading is that ETH tells you which parameter to attack.** It forbids a subexponential dependence on $n$ and leaves the door open for a good dependence on a *different* parameter — the solution size, the treewidth, the number of distinct values. Choosing that parameter is the whole craft of exact algorithms, and ETH is what tells you the choice is not futile.

And it prunes: ETH also says $k$-Clique has no $n^{o(k)}$ algorithm, so if your problem is $k$-Clique in disguise, **no parameterization rescues it** and you should stop looking.

## Watch out

- **You might think** ETH follows from $\mathsf{P}\ne\mathsf{NP}$ — **but actually** the implication runs the other way. $\mathsf{P}\ne\mathsf{NP}$ is consistent with 3SAT solvable in $2^{\sqrt n}$ time, which would be a dramatic practical result and would refute ETH.
- **You might think** ETH and SETH are equally believed — **but actually** SETH is considerably more contested. It has been refuted for closely related problems, and a substantial minority expect it to fall. Results conditioned on SETH are weaker evidence than those conditioned on ETH.
- **You might think** an ordinary NP-hardness reduction transfers an ETH bound — **but actually** only reductions with **linear** parameter blow-up do. A reduction mapping $n$ variables to $n^2$ vertices converts a $2^{o(n)}$ bound into a useless $2^{o(\sqrt N)}$ statement about the target. **Checking the blow-up is the new obligation**, and most textbook reductions happen to satisfy it — but not all.
- **You might think** ETH in terms of clauses and in terms of variables are obviously the same — **but actually** a 3CNF can have $\Theta(n^3)$ clauses, so they are different statements, reconciled only by the sparsification lemma. That lemma is doing real work, not bookkeeping.
- **You might think** improving the best base for 3SAT from $1.307$ to $1.2$ would be evidence against ETH — **but actually** it would be evidence of nothing beyond better algorithm design. ETH is about the *shape* of the running time, and no constant base, however small, contradicts it.

## One-liner

> P versus NP asks whether the exponential can be escaped; ETH asks whether it can be made subexponential, SETH asks whether its base can be shaved, and only the last two say anything about whether your instance finishes.

## Problems

**P1 (🟢)** For each claimed algorithm, state which of $\mathsf{P}\ne\mathsf{NP}$, ETH, SETH it would refute, listing all that apply.

(a) 3SAT in $O(1.1^n)$.
(b) 3SAT in $2^{O(n/\log n)}$.
(c) CNF-SAT with unbounded width in $O(1.99^n)$.
(d) Independent Set in $O(n^5)$ on $n$-vertex graphs.

**P2 (🟡)** A reduction maps a 3SAT instance on $n$ variables to a graph problem on $N$ vertices. For each blow-up, say whether an ETH lower bound of $2^{o(n)}$ for 3SAT transfers to a $2^{o(N)}$ bound for the graph problem, with the reason.

(a) $N = 3n$.
(b) $N = n^2$.
(c) $N = n\log n$.
(d) $N = 2^{\sqrt n}$.

**P3 (🔴, optional)** (a) Prove that ETH implies $\mathsf{P}\ne\mathsf{NP}$, and state in one sentence why the converse is not available. (b) Explain in two sentences why the sparsification lemma is needed to make "ETH" unambiguous, giving the maximum number of clauses a 3CNF on $n$ variables can have. (c) ETH implies planar vertex cover has no $2^{o(\sqrt n)}$ algorithm, and a $2^{O(\sqrt n)}$ algorithm exists. Explain what it means for a lower bound to be *tight* when it rests on a hypothesis.

<details>
<summary>Solutions</summary>

**P1**

(a) **None.** $1.1^n$ is still exponential in $n$, so ETH survives; it concerns 3SAT only, so SETH — a statement about $k$-SAT as $k\to\infty$ — survives too. This would be a major algorithmic advance and no complexity-theoretic upset.

(b) **ETH and SETH.** $2^{O(n/\log n)} = 2^{o(n)}$, which is exactly what ETH forbids; SETH implies ETH, so it falls too. $\mathsf{P}\ne\mathsf{NP}$ survives — $2^{n/\log n}$ is not polynomial.

(c) **SETH only.** SETH says that for every $\varepsilon>0$ some $k$-SAT resists $(2-\varepsilon)^n$; an algorithm for unbounded-width CNF-SAT at base $1.99$ handles every $k$ at once and refutes it directly. ETH is about 3SAT specifically and survives, as does $\mathsf{P}\ne\mathsf{NP}$.

(d) **All three.** Independent Set is NP-complete, so a polynomial algorithm gives $\mathsf{P} = \mathsf{NP}$, which kills ETH (a polynomial is $2^{o(n)}$) and hence SETH.

**P2**

(a) **Yes.** With $N = 3n$, a $2^{o(N)}$ algorithm for the graph problem gives a $2^{o(3n)} = 2^{o(n)}$ algorithm for 3SAT, contradicting ETH. Linear blow-up is exactly the condition that makes the transfer work.

(b) **No.** With $N = n^2$, a $2^{o(N)} = 2^{o(n^2)}$ algorithm is far too weak to conclude anything: $2^{o(n^2)}$ includes $2^{n}$ itself, so the target algorithm might be no better than brute force on the source. The most you can extract is that the graph problem has no $2^{o(\sqrt N)}$ algorithm — a genuine but much weaker statement.

(c) **No**, not directly. With $N = n\log n$, a $2^{o(N)} = 2^{o(n\log n)}$ algorithm gives $2^{o(n\log n)}$ for 3SAT, which does not contradict ETH since $2^{o(n\log n)}$ includes $2^{n}$. You do get the weaker conclusion that the graph problem has no $2^{o(N/\log N)}$ algorithm. **Even a near-linear blow-up degrades the bound**, which is why "linear" is stated strictly.

(d) **No**, and catastrophically. An exponential blow-up destroys everything: $2^{o(N)}$ with $N = 2^{\sqrt n}$ is a statement about enormously larger instances and implies nothing about 3SAT. Such a reduction is also not polynomial-time, so it is not a valid reduction at all in the sense of [Lesson 1.5](01-05-reduction-craft-and-how-reductions-break.md).

**P3**

(a) Suppose $\mathsf{P} = \mathsf{NP}$. Then 3SAT, being in NP, is decidable in time $n^c$ for some constant $c$. Now

$$n^c = 2^{c\log_2 n} = 2^{o(n)},$$

since $c\log_2 n / n \to 0$. So 3SAT has a $2^{o(n)}$ algorithm, contradicting ETH. Hence ETH implies $\mathsf{P}\ne\mathsf{NP}$. $\blacksquare$

The converse is not available because $\mathsf{P}\ne\mathsf{NP}$ leaves open every subexponential running time — an algorithm for 3SAT in $2^{\sqrt n}$ or $2^{n/\log n}$ steps is not polynomial, so it is compatible with $\mathsf{P}\ne\mathsf{NP}$ while refuting ETH.

(b) A 3CNF on $n$ variables has at most $\binom{n}{3}\cdot 2^3 = \Theta(n^3)$ distinct clauses (choose three variables, then a sign pattern), so $m$ can be cubic in $n$ and "time $2^{o(n)}$" and "time $2^{o(m)}$" are genuinely different claims — the second is far weaker, since $2^{o(m)}$ with $m = n^3$ permits $2^{n}$.

The sparsification lemma closes the gap by converting any 3CNF into $2^{\varepsilon n}$ formulas each with $O(n)$ clauses, so on the sparse instances $m = \Theta(n)$ and the two formulations coincide up to the $2^{\varepsilon n}$ overhead, which is absorbed by taking $\varepsilon$ small.

(c) A lower bound is **tight** when a matching algorithm exists: here ETH forbids $2^{o(\sqrt n)}$ and a $2^{O(\sqrt n)}$ algorithm is known (by planar separators and treewidth dynamic programming), so the exponent $\sqrt n$ is exactly right and no further improvement in the exponent is possible.

What the hypothesis changes is the *status* of the claim, not its sharpness. The statement is "if ETH holds, $\sqrt n$ is the truth", and the alternative is not "maybe a better algorithm exists" but "a better algorithm would refute ETH, and hence give a subexponential 3SAT algorithm." **Tightness under a hypothesis still closes the question for practical purposes** — it tells you that further effort on the exponent is equivalent to a major open problem, which is the same guidance an unconditional bound would give.

</details>

## Flashback

**From Lesson 5.5 (hardness of approximation):** (a) State the approximability threshold for MAX-3SAT and name the algorithm and the hardness result that meet there. (b) Suppose $\text{GAP-3SAT}_{1,0.9}$ is NP-hard; give the ratio it rules out. (c) Explain in one sentence why a matching algorithm and hardness result close a question in a way that exact NP-hardness does not.

<details>
<summary>Solution</summary>

(a) The threshold is $\mathbf{7/8}$. The algorithm is the uniformly random assignment, which satisfies $\tfrac78 m$ clauses in expectation and is derandomized by the method of conditional expectations ([5.4](05-04-approximation-as-a-class-apx-and-max-3sat.md)). The hardness is **Håstad's theorem**: approximating within $7/8+\varepsilon$ is NP-hard for every $\varepsilon>0$, proved from the PCP theorem.

(b) It rules out any ratio better than $s/c = 0.9/1 = \mathbf{0.9}$: no polynomial-time algorithm achieves $0.9+\varepsilon$ unless $\mathsf{P}=\mathsf{NP}$.

(c) Because exact NP-hardness says only that *some* polynomial algorithm does not exist, leaving the whole space of approximations open, whereas a matching pair pins the achievable guarantee to a single number — so further work on the worst case is provably wasted rather than merely unpromising.

</details>

## Connections

- **Backward:** the reductions that must now preserve the parameter are [1.5](01-05-reduction-craft-and-how-reductions-break.md)'s, examined under a new obligation — polynomial time is no longer enough, the blow-up must be linear. The move to conditional results on a stronger hypothesis is the response to [5.6](05-06-relativization-natural-proofs-algebrization.md)'s barriers.
- **Forward:** [6.2](06-02-conditional-lower-bounds-inside-p.md) uses SETH to prove that specific quadratic-time algorithms are optimal, which is the payoff that makes the hypothesis worth its lower confidence.
- **Sideways:** the parameter-choosing craft this lesson points at is the subject of parameterized complexity, and its bread-and-butter techniques — branching, kernelization, treewidth dynamic programming — are the exact-algorithm counterparts of the design paradigms in [`algorithms`](../../algorithms/syllabus.md) Modules 1 and 2. The $1.28^k$ vertex-cover branching is a bounded search tree, which is backtracking with a proved depth bound.
