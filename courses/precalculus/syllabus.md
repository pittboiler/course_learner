# Precalculus — Syllabus

> Foundations · Tier F · ~12 lessons · Prereqs: none · Roadmap id: `precalculus`

## Goal

Assemble the exact toolkit that [`calc-refresher`](../calc-refresher/syllabus.md) walks in assuming you already own: functions treated as objects you can transform, compose, and invert; the standard function families (polynomial, rational, exponential, logarithmic, trigonometric) and how they behave at their edges; the algebra of sequences and series; and enough analytic geometry to place curves and vectors on the plane. It ends by asking the one question calculus exists to answer — *how fast is this changing right now?* — so the handoff to derivatives feels inevitable rather than abrupt. Builds on [`algebra-foundations`](../algebra-foundations/syllabus.md) and [`trigonometry`](../trigonometry/syllabus.md); the trig module here is a calculus-framed refresher, not a re-teach. Deliberately skipped: derivatives and integrals (that's `calc-refresher`), rigorous $\varepsilon$–$\delta$ limits (that's `real-analysis`), and full trig derivations (defer to `trigonometry`).

## Dangerous Checklist

When you finish, you can:

- [ ] Read and write function notation fluently, and find a function's domain and range
- [ ] Compose and invert functions, and know exactly when an inverse exists
- [ ] Predict a graph's shape from shifts, stretches, and reflections of a parent function
- [ ] Determine a polynomial's end behavior and zeros from its factored form
- [ ] Locate the vertical, horizontal, and slant asymptotes of a rational function
- [ ] Move between exponential and logarithmic form and solve equations in either
- [ ] Build and interpret exponential growth/decay and log-scale models
- [ ] Evaluate the six trig functions on the unit circle and wield the identities calculus reuses
- [ ] Recognize arithmetic vs. geometric patterns and sum them with sigma notation, including infinite geometric series
- [ ] Identify a conic from its equation and set up curves parametrically, in polar form, or as vectors
- [ ] Estimate an instantaneous rate of change as the limit of average rates, and say what a limit means

## Modules

### Module 1: Functions and transformations

Stop seeing a function as "a formula to plug into" and start seeing it as an object you can reshape, chain, and reverse.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Functions as objects | Read function notation, and pin down a function's domain and range | function notation, domain, range, vertical-line test, piecewise functions |
| 1.2 | Composition and inverses | Chain functions together and undo them, knowing when an inverse exists | composition $f\circ g$, one-to-one, horizontal-line test, inverse $f^{-1}$, domain/range swap |
| 1.3 | Transformations of graphs | Sketch any graph as a shifted, stretched, or reflected parent function | parent functions, vertical/horizontal shifts, stretches/compressions, reflections, even/odd symmetry |

**Boss problem 1:** Start from the parent $f(x)=\sqrt{x}$ and build $g(x)=2\sqrt{x-3}+1$. Describe $g$ as an ordered sequence of transformations, state its domain and range, then find $g^{-1}$ along with the domain that makes the inverse a genuine function.

### Module 2: Polynomial, rational, exponential, and logarithmic functions

The workhorse families — what each one does far from the origin, where it blows up, and what real process it models.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Polynomial functions | Read end behavior and zeros straight off a factored polynomial | degree, leading coefficient, end behavior, real zeros, multiplicity, turning points |
| 2.2 | Rational functions | Find every asymptote and hole, and sketch the curve between them | rational function, vertical asymptotes, holes, horizontal vs. slant asymptotes, end behavior |
| 2.3 | Exponential and logarithmic functions | Convert between exponential and log form and model growth, decay, and log scales | $b^x$, $e$, $\log_b$, $\ln$, log laws, growth/decay, half-life, log scales (pH, decibels) |

**Boss problem 2:** A drug's blood concentration follows $C(t)=\dfrac{20t}{t^{2}+4}$ (mg/L, $t$ in hours). Find its zeros, its long-run behavior as $t\to\infty$, and the time of peak concentration. Then, given that a second drug decays as $A(t)=A_0 e^{-0.15t}$, use logarithms to find its half-life and the time it falls to 10% of the initial dose.

### Module 3: Trigonometric functions, sequences, and series

The last two function families calculus leans on: periodic functions read off the unit circle, and the discrete sums that foreshadow integrals and infinite series.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Trig functions for calculus | Evaluate the six trig functions on the unit circle and use the identities calculus reuses | unit circle, radians, $\sin/\cos/\tan$, Pythagorean identity, periodicity, graphs and transformations of $\sin$/$\cos$ |
| 3.2 | Sequences and sigma notation | Spot arithmetic vs. geometric patterns and sum finite runs of them | sequences, arithmetic/geometric, common difference/ratio, $\Sigma$ notation, partial sums |
| 3.3 | Series and the infinite geometric sum | Add infinitely many terms when the ratio is small enough, and see a limit hiding inside | geometric series formula, convergence when $\lvert r\rvert<1$, $\dfrac{a}{1-r}$, telescoping intuition |

**Boss problem 3:** A ball dropped from 10 m rebounds to $\tfrac{3}{4}$ of its previous height on each bounce. Using an infinite geometric series, find the total vertical distance it travels before coming to rest. Separately, evaluate $\displaystyle\sum_{k=0}^{\infty}\cos(0)\left(\tfrac{1}{2}\right)^{k}$ and explain why the same convergence condition governs both sums.

### Module 4: Conics, vectors, and the door to calculus

Place curves and directed quantities on the plane, then walk up to the doorway the whole roadmap is built around: the instantaneous rate of change.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Conic sections | Identify a parabola, ellipse, or hyperbola and read its geometry from its equation | parabola, ellipse, hyperbola, standard forms, foci, vertices, completing the square |
| 4.2 | Vectors, parametric, and polar (light) | Represent motion and direction with vectors, parametric equations, and polar coordinates | vector components, magnitude/direction, parametric curves, eliminating the parameter, polar coordinates |
| 4.3 | The door to calculus: limits and instantaneous rate | Estimate an instantaneous rate as the limit of average rates and say what a limit means | average vs. instantaneous rate, secant → tangent, limit (informal), one-sided limits, "the calculus question" |

**Boss problem 4:** A projectile follows the parametric path $x(t)=30t,\; y(t)=40t-16t^{2}$ (feet, $t$ in seconds). Eliminate the parameter to show the trajectory is a parabola (name the conic). Then estimate the projectile's instantaneous vertical velocity at $t=1$ by computing average vertical velocities over shrinking intervals $[1,\,1+h]$ as $h\to 0$ — and state the limit you're sneaking up on. (This is the exact question `calc-refresher` opens with.)

## Sources of truth

- OpenStax, *Precalculus 2e* — free, comprehensive, matches this scope module-for-module.
- Stewart, Redlin & Watson, *Precalculus: Mathematics for Calculus* — the standard calculus on-ramp; especially strong on functions and transformations.
- Paul's Online Math Notes (Precalculus / Algebra review) — concise worked examples for asymptotes, logs, and conics.
- [`trigonometry`](../trigonometry/syllabus.md) and [`algebra-foundations`](../algebra-foundations/syllabus.md) — the sibling Tier F courses this one assumes and cross-references.
