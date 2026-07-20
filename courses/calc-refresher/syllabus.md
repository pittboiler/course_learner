# Calculus Refresher — Syllabus

> Tier 0 · 15 lessons · Prereqs: none · Roadmap id: `calc-refresher`

## Goal

Reactivate single- and multivariable calculus to the point where downstream courses (mechanics, E&M, micro, real analysis) can use it without pausing. Emphasis on meaning and fluent computation; deliberately skips rigorous foundations (that's `real-analysis`), numerical methods, and exotic integration tricks.

## Dangerous Checklist

When you finish, you can:

- [ ] Differentiate and integrate standard functions fluently, without a reference
- [ ] Linearize a function at a point and estimate the error with a Taylor term
- [ ] Set up and solve unconstrained and constrained optimization problems (Lagrange multipliers)
- [ ] Judge whether a series or improper integral converges, and roughly how fast
- [ ] Compute a gradient and explain why it points in the direction of steepest ascent
- [ ] Set up double/triple integrals over non-rectangular regions and pick good coordinates
- [ ] Compute line integrals and flux through a surface
- [ ] State Green's, Stokes', and the divergence theorem and explain each physically
- [ ] Translate a physics or economics word problem into a calculus problem and back

## Modules

### Module 1: Differentiation

Rebuild the derivative from meaning up, then make it mechanical.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The derivative as sensitivity | Read $f'(a)$ as "how hard output responds to input" and compute it from the limit | limit definition, tangent line, instantaneous rate |
| 1.2 | The rules, and why the chain rule is the big one | Differentiate any elementary function by composing rules | product/quotient rule, chain rule, implicit differentiation |
| 1.3 | Linearization and Taylor's idea | Replace a function by a polynomial and know how wrong you are | linear approximation, Taylor polynomial, error term |
| 1.4 | Optimization | Find and classify extrema; translate "best" into $f'=0$ | critical points, second-derivative test, global vs local |

**Boss problem 1:** A profit function with a parameter — optimize, linearize around the optimum, and interpret the second-order condition economically.

### Module 2: Integration

| # | Lesson | Goal | Key concepts |
|---|---|---|---|
| 2.1 | The integral as accumulation, and the FTC | Explain why differentiation and accumulation are inverse operations | Riemann sums, FTC I & II, signed area |
| 2.2 | Techniques that matter | Recognize which of substitution / parts / partial fractions a given integral wants | u-substitution, integration by parts, partial fractions |
| 2.3 | Improper integrals and integrals as models | Handle infinite limits/integrands; set up integrals from physical descriptions | convergence, comparison, density → total via slicing |

**Boss problem 2:** Work done against gravity assembling a mass distribution — slicing, an improper integral, and a convergence check.

### Module 3: Series

| # | Lesson | Goal | Key concepts |
|---|---|---|---|
| 3.1 | Convergence and how to test it | Decide convergence with the right test on the first try | geometric/p-series, comparison, ratio test |
| 3.2 | Power series and Taylor series | Expand the standard functions and manipulate series like polynomials | radius of convergence, Taylor series of $e^x,\sin,\cos,\frac{1}{1-x}$ |

**Boss problem 3:** Derive a small-angle approximation with error bound and use it on a pendulum period.

### Module 4: Multivariable calculus

| # | Lesson | Goal | Key concepts |
|---|---|---|---|
| 4.1 | Partial derivatives and the gradient | Compute and interpret $\nabla f$ as steepest ascent and local linear model | partials, gradient, directional derivative, level sets |
| 4.2 | Multivariable optimization and Lagrange | Optimize with and without constraints; read the multiplier as a shadow price | Hessian test, Lagrange multipliers, shadow price |
| 4.3 | Multiple integrals | Integrate over 2D/3D regions; choose polar/cylindrical/spherical wisely | iterated integrals, order of integration, Jacobian |

**Boss problem 4:** Constrained utility maximization — solve, and interpret the multiplier against a budget increase.

### Module 5: Vector calculus

| # | Lesson | Goal | Key concepts |
|---|---|---|---|
| 5.1 | Vector fields, div, and curl | Look at a field and estimate the sign of div and curl by eye | vector fields, divergence, curl, flow intuition |
| 5.2 | Line integrals and flux | Compute work along a path and flux through a surface | line integrals, conservative fields, surface integrals |
| 5.3 | The big three theorems | Use Green/Stokes/divergence to trade a hard integral for an easy one | Green's, Stokes', divergence theorem, boundary ↔ interior |

**Boss problem 5:** Verify the divergence theorem on a concrete field and sphere; explain what Gauss's law is saying.

## Sources of truth

- Stewart, *Calculus* (conventions and problem style)
- 3Blue1Brown *Essence of Calculus* (intuition register)
