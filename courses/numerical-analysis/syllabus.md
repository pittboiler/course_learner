# Numerical Analysis — Syllabus

> Mathematics · Tier 1 · ~23 lessons · Prereqs: [calc-refresher](../calc-refresher/syllabus.md), [linalg-refresher](../linalg-refresher/syllabus.md) · Roadmap id: `numerical-analysis`

## Goal

This course teaches you to compute real answers to problems that have no closed form — roots, integrals, linear systems, eigenvalues, ODE trajectories — and, more importantly, to know when the answer your machine hands back is trustworthy. The through-line is *error and stability*: every method comes with a story about how error enters, how it propagates, and how to keep it from eating your result. It deliberately skips deep PDE numerics/FEM and optimization algorithms (those live in `pdes` and `convex-optimization`); we take only a taste of finite differences and mention spectral methods without developing them.

## Dangerous Checklist

When you finish, you can:

- [ ] Predict when a floating-point computation will lose significant digits, and rewrite the expression to avoid catastrophic cancellation.
- [ ] Compute the condition number of a problem and separate an ill-conditioned *problem* from an unstable *algorithm*.
- [ ] Choose between bisection, Newton, and secant for a root-finding task and state each method's convergence order and failure modes.
- [ ] Interpolate data with polynomials or splines, and explain (and dodge) the Runge phenomenon.
- [ ] Estimate a derivative numerically and pick a step size that balances truncation against round-off error.
- [ ] Integrate a function with the trapezoid, Simpson, and Gaussian rules, and bound the error of each.
- [ ] Solve $Ax=b$ by LU with partial pivoting or Cholesky, and explain why pivoting is about stability, not just feasibility.
- [ ] Use a QR factorization to solve a least-squares problem and say why it beats the normal equations.
- [ ] Run the power method to extract a dominant eigenvalue and reason about its convergence rate.
- [ ] Integrate an ODE with Euler and Runge–Kutta, and diagnose a stiff problem that demands an implicit method.
- [ ] Explain absolute stability, pick a step size inside the stability region, and say why explicit methods choke on stiffness.
- [ ] Discretize a simple boundary-value or heat problem with finite differences and check that the scheme is consistent and stable.

## Modules

### Module 1: Error, Conditioning & Root-Finding

Everything downstream inherits its trustworthiness from this module: how numbers are stored, how error is born, and the first algorithms whose convergence we can actually reason about.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Floating-Point & Round-Off | Predict how the IEEE-754 model stores reals and where digits get lost | Mantissa/exponent, machine epsilon $\varepsilon_{\text{mach}}$, rounding, overflow/underflow |
| 1.2 | Cancellation & Error Propagation | Spot and rewrite expressions that hemorrhage precision | Catastrophic cancellation, absolute vs. relative error, error accumulation |
| 1.3 | Conditioning vs. Stability | Separate a bad problem from a bad algorithm | Condition number, forward/backward error, backward stability |
| 1.4 | Bisection & Fixed-Point Iteration | Bracket a root reliably and reason about when iteration converges | Intermediate value bracketing, contraction mapping, linear convergence |
| 1.5 | Newton & Secant Methods | Get fast roots and state each method's convergence order and traps | Quadratic convergence, superlinear order, basins of attraction, divergence modes |

**Boss problem 1:** Given $f(x)=x^3 - 2x - 5$, locate its real root three ways — bisection, Newton, secant — from a stated bracket. Tabulate the error at each iteration, fit the observed convergence order for each method against theory, and then exhibit a starting point where Newton diverges or cycles and explain geometrically why. Finally, evaluate $f$ near the root in a form that suffers catastrophic cancellation and show how to reformulate it.

### Module 2: Interpolation & Quadrature

From discrete samples to a continuous model, and from a continuous model to an integral — with honest error bars on both.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Polynomial Interpolation | Build the unique interpolating polynomial and bound its error | Lagrange form, Newton divided differences, interpolation error term |
| 2.2 | Runge Phenomenon & Splines | Explain why high-degree interpolation oscillates and fix it | Runge phenomenon, Chebyshev nodes, cubic splines, piecewise smoothness |
| 2.3 | Numerical Differentiation | Approximate derivatives and choose a step size that minimizes total error | Finite differences, truncation vs. round-off tradeoff, Richardson extrapolation |
| 2.4 | Newton–Cotes Quadrature | Integrate with trapezoid and Simpson and bound each rule's error | Trapezoid/Simpson rules, degree of exactness, composite rules |
| 2.5 | Gaussian & Adaptive Quadrature | Get maximal accuracy per evaluation and refine only where needed | Gauss–Legendre nodes/weights, orthogonal polynomials, adaptive subdivision |

**Boss problem 2:** For $\int_0^1 e^{-x^2}\,dx$ (no elementary antiderivative), compute the integral with the composite trapezoid, composite Simpson, and 3-point Gauss–Legendre rules. Verify each method's error decays at its predicted rate as you refine, identify which is most accurate per function evaluation, then design a function on $[-1,1]$ whose sharp peak defeats a uniform rule and show that adaptive refinement recovers accuracy where uniform refinement wastes work.

### Module 3: Numerical Linear Algebra

The computational core of nearly all applied math: solving $Ax=b$, factoring $A$, and finding eigenvalues — every step watched for stability.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | LU Factorization & Pivoting | Solve linear systems by elimination and see why pivoting is about stability | Gaussian elimination, LU, partial pivoting, growth factor |
| 3.2 | Cholesky & Conditioning of $Ax=b$ | Exploit symmetry, and quantify how errors in $A$, $b$ amplify | SPD matrices, Cholesky, matrix condition number $\kappa(A)$, error bounds |
| 3.3 | QR Factorization | Orthogonalize a basis stably and prepare for least-squares | Gram–Schmidt vs. Householder, orthogonal matrices, numerical loss of orthogonality |
| 3.4 | Iterative Methods | Solve large sparse systems without ever forming a factorization | Jacobi, Gauss–Seidel, spectral radius, convergence conditions |
| 3.5 | Power Method for Eigenvalues | Extract a dominant eigenpair and reason about its convergence rate | Power iteration, Rayleigh quotient, eigenvalue-ratio convergence, deflation idea |

**Boss problem 3:** Take a moderately ill-conditioned matrix (e.g. a small Hilbert matrix) and solve $Ax=b$ by LU with partial pivoting. Perturb $b$ slightly and measure how much $x$ moves; check that the observed sensitivity is consistent with $\kappa(A)$. Then run the power method on a symmetric matrix with a known spectrum, confirm the iterates converge at the rate set by the ratio of the two largest eigenvalues, and explain what happens when those eigenvalues are nearly equal.

### Module 4: Numerical ODEs & Stability

Marching a differential equation forward in time — where a "correct" method can still blow up if the step size sits outside its stability region.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Euler's Method & Local vs. Global Error | Take the simplest time step and separate one-step error from accumulated error | Forward Euler, local truncation error, global error, order of a method |
| 4.2 | Runge–Kutta Methods | Get high accuracy per step with the workhorse RK4 | RK2/RK4, stage evaluations, order conditions, embedded error estimates |
| 4.3 | Multistep Methods | Reuse past values for cheap high-order steps | Adams–Bashforth/Moulton, explicit vs. implicit, predictor–corrector |
| 4.4 | Absolute Stability & Stiffness | Diagnose stiff problems and know when to go implicit | Test equation $y'=\lambda y$, stability region, A-stability, implicit Euler |

**Boss problem 4:** Integrate a stiff linear system (widely separated decay rates) with forward Euler, RK4, and implicit (backward) Euler. Find, for each explicit method, the largest step size that stays stable and show it is dictated by the *fastest* mode even when that mode has long since decayed; then demonstrate that implicit Euler remains stable at step sizes an order of magnitude larger, and explain the accuracy-vs-stability trade you just made. Connect the stability region you compute to the eigenvalues of the system (a callback to Module 3).

### Module 5: Least-Squares & a Taste of PDEs

Two payoffs of the whole toolkit: fitting overdetermined data the right way, and taking the first honest step into discretizing a PDE.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Least-Squares & the Normal Equations | Fit an overdetermined system and see why the naive route is unstable | Overdetermined $Ax=b$, normal equations, $\kappa(A^\top A)=\kappa(A)^2$ |
| 5.2 | QR & SVD for Least-Squares | Solve least-squares stably and read off rank and sensitivity | QR least-squares, SVD, pseudo-inverse, effective rank |
| 5.3 | Finite Differences for BVPs | Turn a boundary-value ODE into a linear system and solve it | Central differences, discretization stencil, boundary conditions, tridiagonal solve |
| 5.4 | The Heat Equation: Explicit vs. Implicit | Step a PDE in time and meet the stability constraint that governs it | Method of lines, explicit scheme + CFL-type limit, implicit stability, consistency |

**Boss problem 5:** Fit a degree-5 polynomial to noisy samples of a smooth function two ways — via the normal equations and via QR/SVD — and show the normal-equations route loses accuracy exactly as $\kappa(A)^2$ predicts. Then discretize the 1-D heat equation on a coarse grid: run the explicit scheme just above and just below its stability limit to watch it go unstable, switch to the implicit scheme to remove the limit, and confirm both give the same answer where the explicit one is stable.

## Sources of truth

- Trefethen & Bau, *Numerical Linear Algebra* — for conditioning, stability, and the QR/SVD viewpoint (the source of this course's error-and-stability framing).
- Burden & Faires, *Numerical Analysis* — for the standard method catalog (root-finding, quadrature, ODE integrators) and error-term derivations.
- Süli & Mayers, *An Introduction to Numerical Analysis* — for rigor level and clean proofs of the interpolation and convergence results.

---

*2026-08-04: Landed at 23 lessons vs. the ~18 target (+28%). The extra breadth is deliberate — numerical analysis is method-dense, and each lesson holds one method plus its error/stability story rather than cramming two. Splitting kept every lesson inside the ~10-min read budget.*
