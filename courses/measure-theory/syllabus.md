# Measure Theory — Syllabus

> Mathematics · Tier 2 · ~20 lessons · Prereqs: [real-analysis](../real-analysis/syllabus.md) · Roadmap id: `measure-theory`

## Goal

Build the theory of integration that actually works. The Riemann integral is fragile: it can't integrate the indicator of the rationals, it won't commute with pointwise limits, and it gives you no space of integrable functions that is complete. This course fixes all three by measuring sets *first* and integrating *second*. You'll construct Lebesgue measure from an outer measure via the Carathéodory criterion, see why a non-measurable set must exist, build the Lebesgue integral from the ground up, and prove the three convergence theorems (monotone, Fatou, dominated) that make limits and integrals finally cooperate. From there: the $L^p$ spaces and their completeness, the ways a sequence of functions can converge and how they relate, product measures and Fubini, and the Radon–Nikodym theorem tying it all to differentiation.

Deliberately scoped: we work with abstract measure spaces and with Lebesgue measure on $\mathbb{R}^n$, and prove everything at Folland/Royden rigor. We do **not** develop topological-measure theory or Haar measure on groups, and we skip geometric measure theory (Hausdorff dimension, rectifiability). This is the rigorous floor under `probability-theory`, `functional-analysis`, and `fourier-analysis` — not a survey of everywhere measure shows up.

## Dangerous Checklist

When you finish, you can:

- [ ] Explain precisely where the Riemann integral fails and what Lebesgue's construction buys you
- [ ] Verify that a collection of sets is a σ-algebra, and generate the smallest one containing a given family (Borel sets in particular)
- [ ] Construct an outer measure and use the Carathéodory criterion to extract the measurable sets on which it is a genuine measure
- [ ] Build Lebesgue measure on $\mathbb{R}^n$ and prove it is translation-invariant and complete
- [ ] Construct a non-measurable set from the axiom of choice and say exactly which axiom forces its existence
- [ ] Prove a function measurable, and approximate any nonnegative measurable function by an increasing sequence of simple functions
- [ ] Build the Lebesgue integral in three stages and compute it for concrete functions
- [ ] Deploy the monotone convergence theorem, Fatou's lemma, and the dominated convergence theorem to justify swapping a limit and an integral — and produce a counterexample when the hypotheses fail
- [ ] Prove Hölder's and Minkowski's inequalities and use them to run computations in $L^p$
- [ ] State the modes of convergence (a.e., in measure, in $L^p$, almost uniform) and prove which ones imply which
- [ ] Apply Fubini–Tonelli to evaluate and interchange iterated integrals, and know when you may not
- [ ] Decompose a signed measure, state the Radon–Nikodym theorem, and compute a Radon–Nikodym derivative
- [ ] State the Lebesgue differentiation theorem and connect it to the Fundamental Theorem of Calculus

## Modules

### Module 1: σ-algebras and the construction of measure

From "the Riemann integral is broken" to a working, translation-invariant measure on $\mathbb{R}^n$ — and the shock that not every set can be measured.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Where the Riemann integral fails | See the three concrete failures that motivate the whole subject | Dirichlet function, limits vs. integrals, no complete space of integrable functions, "measure the sets first" |
| 1.2 | σ-algebras and measurable spaces | Verify and generate σ-algebras; meet the Borel σ-algebra | σ-algebra axioms, generated σ-algebra, Borel sets, measurable space |
| 1.3 | Measures and their properties | State the measure axioms and derive monotonicity, continuity, and subadditivity | measure, countable additivity, continuity from below/above, null sets, complete measure |
| 1.4 | Outer measure and the Carathéodory criterion | Turn a set function on intervals into a measure by carving out the measurable sets | Lebesgue outer measure, countable subadditivity, Carathéodory measurability, σ-algebra of measurable sets |
| 1.5 | Lebesgue measure on $\mathbb{R}^n$ | Assemble Lebesgue measure and prove its defining properties | boxes and volume, translation invariance, regularity (open/compact approximation), Borel ⊆ Lebesgue |
| 1.6 | A non-measurable set | Build a Vitali set and see exactly why the axiom of choice forces non-measurability | Vitali set, translation invariance + countable additivity clash, role of the axiom of choice |

**Boss problem 1:** Prove Lebesgue outer measure $m^*$ is translation-invariant and countably subadditive directly from its definition as an infimum over interval covers. Then, assuming every subset of $[0,1]$ were measurable, use a Vitali set (one representative per coset of $\mathbb{Q}$) together with translation invariance and countable additivity to derive a contradiction — pinning down the single step that requires the axiom of choice and the single step that requires countable additivity (not just finite).

### Module 2: The Lebesgue integral and the convergence theorems

Measurable functions, the integral built in three stages, and the three theorems that let limits and integrals finally commute.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Measurable functions | Prove functions measurable and build new ones from limits without leaving the class | measurable function, preimages of Borel sets, sups/infs/limits of measurable functions, a.e. equality |
| 2.2 | Simple functions and the integral of nonnegative functions | Approximate from below by simple functions and define the integral as a supremum | simple function, canonical form, simple-function approximation theorem, integral of a nonnegative function |
| 2.3 | The general Lebesgue integral | Split into positive and negative parts and define integrability | positive/negative parts, integrable ($L^1$) function, linearity, absolute integrability, comparison with Riemann |
| 2.4 | Monotone convergence and Fatou's lemma | Pass limits through the integral for increasing sequences, and bound liminfs | monotone convergence theorem, term-by-term integration of series, Fatou's lemma, strict inequality examples |
| 2.5 | The dominated convergence theorem | Swap limit and integral under a single integrable dominating function | dominated convergence theorem, uniform integrability (idea), continuity/differentiation under the integral sign |

**Boss problem 2:** Evaluate $\displaystyle\lim_{n\to\infty}\int_0^n \left(1-\tfrac{x}{n}\right)^n e^{x/2}\,dx$ by recognizing an increasing sequence $\big($write it as $\int_0^\infty f_n\big)$ and applying the monotone convergence theorem; then re-justify the same interchange with the dominated convergence theorem, exhibiting an explicit integrable dominator. Finally, give a sequence $g_n\ge 0$ with $\int g_n = 1$ for all $n$ but $\int \lim g_n = 0$, and identify precisely which hypothesis of MCT/DCT it violates and why Fatou still holds for it.

### Module 3: $L^p$ spaces and modes of convergence

The complete normed spaces of functions the rest of analysis runs on, and a careful map of how "$f_n\to f$" can mean five different things.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Modes of convergence | Distinguish a.e., in measure, and in $L^p$ convergence and prove the implications | a.e. convergence, convergence in measure, convergence in mean, typewriter counterexample, subsequence extraction |
| 3.2 | Egorov's and Lusin's theorems | Trade a small set for uniformity and continuity | Egorov's theorem (almost uniform convergence), Lusin's theorem (measurable ≈ continuous), finite-measure hypotheses |
| 3.3 | The $L^p$ spaces: Hölder and Minkowski | Prove the two inequalities that make $\|\cdot\|_p$ a norm | conjugate exponents, Young's inequality, Hölder's inequality, Minkowski's inequality, $L^\infty$ and essential sup |
| 3.4 | Completeness: Riesz–Fischer | Prove $L^p$ is a Banach space via absolutely-summable series | Cauchy sequences in $L^p$, completeness, Riesz–Fischer theorem, a.e.-convergent subsequence, dense subspaces |

**Boss problem 3:** Using Hölder's inequality, prove the interpolation bound $\|f\|_r \le \|f\|_p^{\,\theta}\|f\|_q^{\,1-\theta}$ for $p\le r\le q$ with the right $\theta$. Then prove that if $f_n\to f$ in $L^p$ on a space of finite measure, some subsequence converges to $f$ almost everywhere — and exhibit the "typewriter" sequence that converges to $0$ in $L^p$ while converging at *no* point, showing the full sequence need not go a.e. Say in one sentence how this subsequence fact is exactly the engine of the Riesz–Fischer completeness proof.

### Module 4: Product measures, Radon–Nikodym, and differentiation

Integrate over products, decompose one measure against another, and recover the Fundamental Theorem of Calculus in its Lebesgue form.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Product measures | Build the product σ-algebra and the product measure on it | product σ-algebra, measurable rectangles, sections, monotone class theorem, product of σ-finite measures |
| 4.2 | Fubini–Tonelli | Turn a double integral into iterated integrals — and know when you can't | Tonelli (nonnegative), Fubini ($L^1$), σ-finiteness, failure without integrability/σ-finiteness |
| 4.3 | Signed measures and decomposition | Split any signed measure into a clean positive and negative part | signed measure, Hahn decomposition, Jordan decomposition, total variation, mutual singularity |
| 4.4 | The Radon–Nikodym theorem | Represent one measure as a density times another | absolute continuity, Radon–Nikodym theorem, Radon–Nikodym derivative, Lebesgue decomposition |
| 4.5 | The Lebesgue differentiation theorem | Recover a function as the limit of its averages and reconnect to the FTC | Hardy–Littlewood maximal function, Vitali covering, Lebesgue differentiation theorem, Lebesgue points, FTC for absolutely continuous functions |

**Boss problem 4:** Use Tonelli's theorem to prove the layer-cake formula $\displaystyle\int_X |f|^p\,d\mu = p\int_0^\infty t^{p-1}\,\mu(\{|f|>t\})\,dt$ for nonnegative measurable $f$ and $1\le p<\infty$, being explicit about where σ-finiteness and nonnegativity are used. Then on $([0,1],\lambda)$ let $\nu(E)=\int_E x\,d\lambda(x)$: show $\nu\ll\lambda$, identify $\tfrac{d\nu}{d\lambda}$ by inspection, and confirm via the Lebesgue differentiation theorem that this derivative agrees $\lambda$-a.e. with the ordinary derivative $F'(x)$ of $F(x)=\nu([0,x])$ — the bridge from Radon–Nikodym back to the Fundamental Theorem of Calculus.

## Sources of truth

- Folland, *Real Analysis: Modern Techniques and Their Applications* (abstract measure spaces, product measures, Radon–Nikodym — the primary model for rigor and notation)
- Royden & Fitzpatrick, *Real Analysis* (Lebesgue measure on $\mathbb{R}$, the convergence theorems, $L^p$ spaces — ordering and problem style)
- Stein & Shakarchi, *Real Analysis: Measure Theory, Integration, and Hilbert Spaces* (motivation, the differentiation theorem, geometric intuition)
- Tao, *An Introduction to Measure Theory* (the outer-measure construction and the careful treatment of the axiom of choice)
