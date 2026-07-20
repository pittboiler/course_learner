# Real Analysis — Syllabus

> Tier 1 · 25 lessons · Prereqs: [proofs-primer](../proofs-primer/syllabus.md), [calc-refresher](../calc-refresher/syllabus.md) · Roadmap id: `real-analysis`

## Goal

Take the calculus you can *compute* and rebuild it on foundations you can *prove*. This course answers the questions calc-refresher deliberately skipped: what is a real number, why does a bounded increasing sequence have to converge, when can you swap a limit and an integral, and why does "the function goes to zero" not settle anything. You'll work in the ε–δ / ε–N language throughout, proving every major result of single-variable analysis from the completeness of $\mathbb{R}$ up through uniform convergence and power series. By the end you can read a page of Rudin or Abbott and write a correct proof of your own.

Deliberately scoped: single-variable, on the real line. We build the point-set topology of $\mathbb{R}$ (open/closed/compact) because continuity needs it and `topology` will generalize it — but we do **not** do general metric or topological spaces here. We use the Riemann (Darboux) integral, not Lebesgue — that's `probability-theory`'s job. No multivariable analysis, no measure theory, no functional analysis; those are downstream.

## Dangerous Checklist

When you finish, you can:

- [ ] State the completeness axiom (least upper bound property) and use sup/inf to prove existence results
- [ ] Prove a sequence converges (or doesn't) straight from the ε–N definition, and negate convergence cleanly
- [ ] Deploy the monotone convergence theorem, Bolzano–Weierstrass, and the Cauchy criterion as your three completeness workhorses
- [ ] Decide whether a series converges — and whether *absolutely* — with the right test, and explain why rearrangement can change a conditional sum
- [ ] Prove a set open, closed, or compact, and state Heine–Borel and what it's good for
- [ ] Prove a function continuous from ε–δ, and prove the EVT, IVT, and uniform continuity from compactness/connectedness
- [ ] Prove the Mean Value Theorem and use it to control a function from its derivative
- [ ] Write Taylor's theorem with an explicit remainder and bound the error
- [ ] Define the Riemann integral via Darboux sums, prove continuous functions are integrable, and prove the FTC
- [ ] Tell pointwise from uniform convergence, and know exactly which one lets you swap limits with continuity, integration, and differentiation
- [ ] Find the radius of convergence of a power series and differentiate/integrate it term by term where it's legal

## Modules

### Module 1: The real number system

Analysis stands on one axiom the rationals fail: completeness. Everything downstream is a consequence.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The gap in the rationals | See concretely why $\mathbb{Q}$ is inadequate and what property $\mathbb{R}$ must add | $\sqrt{2}\notin\mathbb{Q}$, ordered field, a bounded set with no rational sup, "holes" |
| 1.2 | Suprema, infima, and completeness | State and use the least upper bound property as the defining axiom of $\mathbb{R}$ | upper/lower bound, supremum, infimum, completeness axiom, the ε-characterization of sup |
| 1.3 | Consequences of completeness | Derive the Archimedean property, density of $\mathbb{Q}$, and nested intervals from the axiom | Archimedean property, density of rationals, nested interval theorem, existence of $\sqrt{2}$ |
| 1.4 | Countable and uncountable | Prove $\mathbb{Q}$ is countable and $\mathbb{R}$ is not, and say why it matters | countable/uncountable, bijections with $\mathbb{N}$, Cantor's diagonal argument |

**Boss problem 1:** Given a nonempty set $A\subseteq\mathbb{R}$ bounded above, prove $\sup A$ exists and is unique, then prove there is a sequence in $A$ converging to $\sup A$. Separately, show the set of numbers with terminating decimal expansions is countable but $[0,1]$ is not — and connect the second fact to why "most" reals are irrational.

### Module 2: Sequences

The convergent sequence is the atom of analysis; the three big completeness theorems all live here.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Convergence: the ε–N definition | Prove a sequence converges (and negate it) directly from the definition | sequence, limit, ε–N, uniqueness of limits, boundedness of convergent sequences |
| 2.2 | Limit laws and the squeeze | Compute limits rigorously via the algebra of limits, squeeze, and the monotone convergence theorem | algebra of limits, squeeze theorem, monotone convergence theorem, divergence to $\infty$ |
| 2.3 | Subsequences and Bolzano–Weierstrass | Extract convergent subsequences; use limsup/liminf to tame non-convergent sequences | subsequence, Bolzano–Weierstrass, $\limsup$/$\liminf$, subsequential limits |
| 2.4 | Cauchy sequences | Recognize convergence without knowing the limit, and see completeness restated | Cauchy sequence, Cauchy criterion, completeness of $\mathbb{R}$, contractive sequences |

**Boss problem 2:** Let $x_1=1$ and $x_{n+1}=\tfrac12\left(x_n+\tfrac{2}{x_n}\right)$ (Newton's iteration for $\sqrt2$). Prove the sequence is bounded and eventually monotone, hence converges, and find its limit — then re-prove convergence a second way using the Cauchy criterion, and say which argument you'd trust when you don't already know the answer is $\sqrt2$.

### Module 3: Series

A series is a sequence of partial sums — but the questions (absolute vs. conditional, rearrangement) are new.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Series and the Cauchy criterion | Define convergence via partial sums; use the term test and Cauchy criterion | partial sums, geometric/telescoping series, $n$th-term test, Cauchy criterion for series |
| 3.2 | Convergence tests | Pick the right test on the first try for a series of positive terms | comparison, limit comparison, ratio, root, integral test |
| 3.3 | Absolute vs. conditional convergence | Distinguish the two, prove the alternating series test, and see rearrangement break | absolute convergence, alternating series test, conditional convergence, Riemann rearrangement theorem |

**Boss problem 3:** Prove the alternating harmonic series $\sum(-1)^{n+1}/n$ converges but not absolutely, bound the error after $N$ terms, then exhibit a rearrangement that sums to a different value — and explain in one paragraph why absolute convergence is exactly the property that forbids this.

### Module 4: Topology of the real line

Open, closed, compact — the vocabulary continuity is actually about, and the seed of `topology`.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Open sets, closed sets, limit points | Prove sets open or closed; characterize closed sets by limit points | open/closed set, interior, limit (accumulation) point, closure, closed ⟺ contains its limit points |
| 4.2 | Compactness and Heine–Borel | State compactness two equivalent ways and prove $[a,b]$ is compact | open cover, compactness, sequential compactness, Heine–Borel theorem |

**Boss problem 4:** Prove directly from the open-cover definition that $[0,1]$ is compact but $(0,1)$ is not, exhibiting an explicit cover with no finite subcover for the second. Then prove that a nested sequence of nonempty compact sets has nonempty intersection, and connect this back to the nested interval theorem of 1.3.

### Module 5: Continuity

The payoff: what continuity plus compactness plus connectedness actually buys you.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Limits of functions and continuity | Prove continuity from ε–δ and via the sequential criterion | functional limit, ε–δ continuity, sequential criterion, algebra of continuous functions |
| 5.2 | Continuity on compact sets | Prove the Extreme Value Theorem and that continuity on a compact set is uniform | image of a compact set, Extreme Value Theorem, uniform continuity, Heine–Cantor |
| 5.3 | The Intermediate Value Theorem | Prove the IVT and connect it to connectedness and root-finding | Intermediate Value Theorem, connectedness of intervals, fixed points, bisection |

**Boss problem 5:** Prove that every continuous $f:[0,1]\to[0,1]$ has a fixed point (IVT on $g(x)=f(x)-x$). Then prove that a continuous function on $[a,b]$ is uniformly continuous, and give an explicit example on the open interval $(0,1)$ showing continuity alone is not enough — pinpoint exactly where compactness entered the first proof.

### Module 6: Differentiation

The derivative, rebuilt as a limit you can prove things with — the Mean Value Theorem is the engine.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 6.1 | The derivative, rigorously | Prove differentiability implies continuity and re-derive the rules from the limit | derivative as a limit, differentiable ⟹ continuous, product/chain rule proofs, Carathéodory's formulation |
| 6.2 | The Mean Value Theorem | Prove Rolle and the MVT and use them to read a function off its derivative | Fermat's interior extremum, Rolle's theorem, Mean Value Theorem, monotonicity from $f'$ |
| 6.3 | Taylor's theorem with remainder | Write the Taylor polynomial with an explicit, bounded error term | Taylor's theorem, Lagrange remainder, error bounds, when Taylor series converge to the function |

**Boss problem 6:** Use the MVT to prove that if $f'=0$ on an interval then $f$ is constant, and that $|\sin x-\sin y|\le|x-y|$ for all $x,y$. Then write the degree-2 Taylor expansion of $\sqrt{1+x}$ at $0$ with Lagrange remainder, and bound the error at $x=0.1$ — comparing your rigorous bound to the actual error.

### Module 7: The Riemann integral

Where "area under the curve" becomes a definition with theorems, not a picture.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 7.1 | Darboux sums and integrability | Define the integral via upper/lower sums and prove the integrability criterion | partition, upper/lower Darboux sums, the ε-criterion for integrability, non-integrable example |
| 7.2 | Which functions are integrable | Prove continuous (and monotone) functions are integrable; state the measure-zero criterion | integrability of continuous functions, monotone functions, Riemann–Lebesgue criterion (stated), sets of measure zero |
| 7.3 | The Fundamental Theorem of Calculus | Prove both halves of the FTC rigorously and see exactly what each requires | FTC part I (differentiating the integral), FTC part II (evaluation), integration by parts/substitution justified |

**Boss problem 7:** Prove from the Darboux definition that the function equal to $0$ on irrationals and $1$ on rationals is not Riemann integrable on $[0,1]$, while $f(x)=x$ is (compute both integrals from partitions). Then state precisely which hypothesis of the FTC fails for a function with a jump, and why.

### Module 8: Sequences and series of functions

The subtlety calc waved away: convergence of functions has two speeds, and only one is safe.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 8.1 | Pointwise vs. uniform convergence | Distinguish the two modes and prove uniform convergence with the sup norm | pointwise convergence, uniform convergence, sup norm, Cauchy criterion for uniform convergence |
| 8.2 | What uniform convergence preserves | Prove the limit theorems: continuity, integrability, and (with care) differentiability pass to the limit | uniform limit of continuous functions, swapping limit and integral, term-by-term differentiation, Weierstrass M-test |
| 8.3 | Power series | Find the radius of convergence and manipulate power series like polynomials inside it | radius of convergence, uniform convergence on compact subsets, term-by-term differentiation/integration, analytic functions |

**Boss problem 8:** Show that $f_n(x)=x^n$ converges pointwise but not uniformly on $[0,1]$, and that the limit is discontinuous — pinpointing why. Then use the Weierstrass M-test to prove $\sum x^n/n^2$ converges uniformly on $[-1,1]$, and justify differentiating $\sum x^n/n!$ term by term to prove $\exp'=\exp$ — the bridge that hands `complex-analysis` its starting point.

## Sources of truth

- Abbott, *Understanding Analysis* (motivation, ordering of topics, problem style — the primary model for this course's voice)
- Rudin, *Principles of Mathematical Analysis* (rigor level and the topology/compactness treatment)
- Tao, *Analysis I* (the careful construction of $\mathbb{R}$ and the sequence-first ordering)
