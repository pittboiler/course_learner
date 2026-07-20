# Probability Theory — Syllabus

> Tier 1 · 23 lessons · Prereqs: [prob-stat-refresher](../prob-stat-refresher/syllabus.md), [real-analysis](../real-analysis/syllabus.md) · Roadmap id: `probability-theory`

## Goal

Rebuild probability on the only foundation that survives contact with infinity: measure theory. The refresher gave you distributions, expectation, and the CLT as computational facts; this course makes them theorems. You'll learn why "probability" must be a measure on a σ-algebra (not on all subsets), what a random variable really is, how the Lebesgue integral makes expectation and its convergence theorems work, the four modes in which random variables converge, and the two crown jewels — the strong law of large numbers and the central limit theorem — with honest proofs. The last third builds conditional expectation as a projection and develops martingales through optional stopping and the convergence theorem, the gateway to stochastic processes.

Scope is "measure-theoretic-lite," as the roadmap promises: we build exactly the measure theory probability needs and no more. Carathéodory's extension theorem and the deepest weak-convergence results (Prokhorov) are **stated and used**, not proved; the Radon–Nikodym theorem is stated and used to define conditional expectation. We stay in discrete time — martingales, not stochastic calculus; Brownian motion and Itô integration are named as the sequel, not built. This course is the prerequisite spine for `grad-game-theory` (Bayesian games, existence proofs), `stat-mech` (ensembles as measures), and any serious econometrics or mathematical finance.

## Dangerous Checklist

When you finish, you can:

- [ ] Explain why not every subset of $[0,1]$ can have a probability, and what a σ-algebra fixes
- [ ] Set up a probability space and prove basic facts from the measure axioms (continuity, inclusion–exclusion, subadditivity)
- [ ] Show a function is a random variable (measurable) and push a measure forward to its distribution
- [ ] Build the Lebesgue integral and wield the monotone convergence, Fatou, and dominated convergence theorems to swap limits and expectations
- [ ] Apply Jensen, Markov, Chebyshev, Hölder, and Cauchy–Schwarz, and work in $L^p$
- [ ] Prove events or random variables independent, use Fubini on product spaces, and apply both Borel–Cantelli lemmas
- [ ] Tell apart convergence almost surely, in probability, in $L^p$, and in distribution — and know which implies which
- [ ] Prove the weak law, state and use the strong law, and compute with characteristic functions
- [ ] State and apply the central limit theorem, and prove it via characteristic functions
- [ ] Define conditional expectation as a projection / Radon–Nikodym derivative and compute with its properties
- [ ] Recognize a martingale, apply the optional stopping theorem, and state the martingale convergence theorem

## Modules

### Module 1: Measure-theoretic foundations

Probability *is* measure theory with total mass one — build the foundation, and see why the naive version breaks.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Why probability needs measure theory | See the naive theory fail and know what must replace it | non-measurable set (Vitali), countable additivity, the limits of "probability of any subset" |
| 1.2 | σ-algebras and measurable spaces | Choose the right collection of "events" and generate it | σ-algebra, generated σ-algebra, Borel sets, measurable space, π–λ systems (brief) |
| 1.3 | Measures and probability spaces | State the axioms and derive the everyday properties | measure, probability measure, $(\Omega,\mathcal F,\mathbb P)$, monotonicity, continuity of measure, subadditivity |
| 1.4 | Constructing Lebesgue measure | Build a real example and trust the extension machinery | outer measure, Carathéodory extension (stated), Lebesgue measure, "almost everywhere" |

**Boss problem 1:** Prove the continuity-of-measure theorems (for increasing and decreasing sequences of events) from countable additivity, and use them to establish the first Borel–Cantelli direction in miniature: if $\sum \mathbb P(A_n)<\infty$ then $\mathbb P(\limsup A_n)=0$. Separately, sketch why the Vitali construction produces a subset of $[0,1]$ that cannot be assigned any translation-invariant probability — and say exactly which axiom it would violate.

### Module 2: Random variables and expectation

A random variable is a measurable function; expectation is its Lebesgue integral. Everything computational rests here.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Random variables and measurability | Prove a function is a random variable and generate its σ-algebra | measurable function, random variable, $\sigma(X)$, measurability of limits and compositions |
| 2.2 | Distributions, CDFs, and pushforward | Move from the abstract space to the distribution on $\mathbb R$ | distribution (pushforward) measure, CDF and its properties, density, law of a random variable |
| 2.3 | The Lebesgue integral and expectation | Build $\mathbb E[X]$ in three stages and know why it beats Riemann | simple functions, integral of nonnegative then general measurable $X$, $\mathbb E[X]=\int X\,d\mathbb P$, change of variables |
| 2.4 | The convergence theorems | Swap limit and expectation legally | monotone convergence, Fatou's lemma, dominated convergence, counterexamples |
| 2.5 | $L^p$ spaces and the key inequalities | Control expectations with the workhorse inequalities | $L^p$ norms, Markov/Chebyshev, Jensen, Hölder, Cauchy–Schwarz, Minkowski |

**Boss problem 2:** Give a single sequence $X_n$ for which $\mathbb E[X_n]\not\to \mathbb E[\lim X_n]$ (the "escaping mass" example), then show precisely which hypothesis of MCT, Fatou, and DCT each fails. Use Jensen's inequality to prove $\mathbb E[X]^2\le \mathbb E[X^2]$ and identify equality; then use Markov/Chebyshev to bound $\mathbb P(|X-\mathbb E X|\ge k\sigma)$.

### Module 3: Independence and sums

Independence is the structural assumption that makes limit theorems possible.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Independence | Define independence at the level of σ-algebras and use it | independent events / σ-algebras / random variables, independence via factorization, grouping |
| 3.2 | Product measures and Fubini | Build the space where independent variables live, and swap integrals | product σ-algebra, product measure, Fubini–Tonelli, joint vs. marginal |
| 3.3 | Borel–Cantelli and the 0–1 law | Decide whether infinitely many events occur | Borel–Cantelli I & II, tail σ-algebra, Kolmogorov's 0–1 law |
| 3.4 | Sums of independent random variables | Add randomness: variances, convolutions, and tail control | linearity/variance of sums, convolution of distributions, $\mathbb E$ and $\operatorname{Var}$ under independence |

**Boss problem 3:** Prove both Borel–Cantelli lemmas and apply them to the record-values / infinite-monkey setup (an event with $\mathbb P=p>0$ repeated independently occurs infinitely often almost surely). Then, for independent $X_i$, prove $\operatorname{Var}(\sum X_i)=\sum \operatorname{Var}(X_i)$ from the definition, and explain via Kolmogorov's 0–1 law why "the series $\sum X_i$ converges" is a tail event with probability $0$ or $1$.

### Module 4: Convergence and the limit theorems

The payoff: the laws of large numbers and the central limit theorem, proved.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Modes of convergence | Distinguish the four convergences and map the implications | convergence a.s., in probability, in $L^p$, in distribution; the implication diagram; subsequence trick |
| 4.2 | The laws of large numbers | Prove the weak law and deploy the strong law | weak LLN (Chebyshev proof), strong LLN (statement + proof sketch), sample mean |
| 4.3 | Characteristic functions | Trade convolutions for products via the Fourier transform of a measure | characteristic function, inversion & uniqueness, continuity theorem (Lévy), moments |
| 4.4 | Weak convergence | Make "convergence in distribution" rigorous | weak convergence, portmanteau theorem, tightness, Prokhorov (stated) |
| 4.5 | The Central Limit Theorem | Prove why the normal distribution is universal | CLT statement, characteristic-function proof, Lindeberg condition (stated), Berry–Esseen (named) |

**Boss problem 4:** Prove the weak law of large numbers for i.i.d. finite-variance $X_i$ two ways — via Chebyshev, and via characteristic functions — and explain what the strong law adds. Then prove the central limit theorem for i.i.d. finite-variance variables by expanding the characteristic function of the normalized sum to second order and invoking Lévy's continuity theorem, being explicit about where finiteness of the variance is used.

### Module 5: Conditional expectation and martingales

Conditioning done right, and the process theory it unlocks.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Conditional expectation | Define $\mathbb E[X\mid\mathcal G]$ as a projection / Radon–Nikodym derivative | conditioning on a σ-algebra, existence via Radon–Nikodym (stated), $L^2$ projection picture |
| 5.2 | Properties of conditional expectation | Compute with the tower, taking-out-what-is-known, and Jensen | tower property, pull-out property, conditional Jensen, independence ⟹ conditioning drops out |
| 5.3 | Martingales | Recognize fair games and build examples | filtration, adapted process, martingale / sub- / supermartingale, canonical examples |
| 5.4 | Stopping times and optional stopping | Freeze a process at a random time — legally | stopping time, stopped martingale, optional stopping theorem, gambler's ruin |
| 5.5 | Martingale convergence and what's next | Prove martingales settle down, and see the road ahead | upcrossing inequality, martingale convergence theorem, applications; bridge to Markov chains & Brownian motion |

**Boss problem 5:** Prove the tower property of conditional expectation and use it to show a martingale has constant expectation. Set up the symmetric random walk as a martingale, apply the optional stopping theorem to solve gambler's ruin (exit probabilities and expected duration), and state precisely which integrability/boundedness hypothesis of optional stopping each step needs. Finish by explaining, via the martingale convergence theorem, why a nonnegative martingale must converge almost surely.

## Sources of truth

- Williams, *Probability with Martingales* (the spine — measure-theoretic-lite ordering, conditional expectation and martingales)
- Durrett, *Probability: Theory and Examples* (limit theorems, characteristic functions, rigor level)
- Billingsley, *Probability and Measure* (measure-theoretic foundations and weak convergence)
- Çınlar, *Probability and Stochastics* (the bridge to processes named in Module 5)
