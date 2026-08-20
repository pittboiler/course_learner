# Differential Equations — Syllabus

> Tier 0 · 12 lessons · Prereqs: [`calc-refresher`](../calc-refresher/syllabus.md) · Roadmap id: `ode-refresher`

## Goal

Learn to read a differential equation as a *rule for change* and get its behavior back out — by exact solution when possible, and by qualitative reasoning (equilibria, phase portraits, stability) when not. Covers first-order equations and modeling, second-order linear equations and the driven oscillator, linear systems via eigenvalues, the Laplace transform for initial-value problems, and a first taste of PDEs through separation of variables. This is the toolkit `mechanics-refresher`, `em-refresher`, and `analytical-mechanics` assume. Deliberately skipped: existence/uniqueness proofs (stated, not proved — that's `real-analysis`), series solutions / special functions, and serious numerical analysis (Euler's method appears only as intuition).

## Dangerous Checklist

When you finish, you can:

- [ ] Read an ODE's order and linearity, and sketch its slope field / guess long-run behavior
- [ ] Solve separable and first-order linear equations (integrating factor) cleanly
- [ ] Set up an ODE from a word problem (growth, mixing, cooling, logistic) and interpret equilibria
- [ ] Solve constant-coefficient second-order equations in all three root cases
- [ ] Analyze a damped, driven oscillator: transient vs. steady state, and resonance
- [ ] Apply undetermined coefficients to find a particular solution
- [ ] Recognize an exact equation, recover its potential, and repair a non-exact one with an integrating factor
- [ ] Use variation of parameters to get a particular solution for a forcing no guess can match
- [ ] Convert a linear system to matrix form and solve it with eigenvalues/eigenvectors
- [ ] Draw a phase portrait and classify an equilibrium (node, saddle, spiral, center) and its stability
- [ ] Solve an initial-value problem with the Laplace transform, including discontinuous forcing
- [ ] Separate variables to solve the heat/wave equation on an interval and read the Fourier picture

## Modules

### Module 1: First-order equations

Change described one derivative at a time — and the modeling that makes it matter.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | ODEs, solutions, and slope fields | Read order/linearity, verify a solution, and picture solutions without solving | ODE, order, solution/IVP, slope (direction) field, existence–uniqueness (stated) |
| 1.2 | Separable and first-order linear equations | Solve the two first-order types you'll actually meet | separation of variables, integrating factor, general vs. particular solution |
| 1.3 | First-order models | Turn a word problem into an ODE and read its equilibria | growth/decay, Newton cooling, mixing tanks, logistic equation, equilibria & stability |
| 1.4 | Exact equations | Spot a hidden potential $F$ and read the solutions off as its level curves | differential form $M\,dx + N\,dy = 0$, exactness test $M_y = N_x$, potential function, integrating factor (general form) |

**Boss problem 1:** A mixing-tank (or logistic-population) scenario — set up the ODE, solve it, find the equilibrium, and say how fast the system approaches it.

### Module 2: Second-order linear equations

The oscillator: the single most important ODE in physics.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Constant-coefficient homogeneous equations | Solve $ay''+by'+cy=0$ via the characteristic equation, all three cases | characteristic equation, real/repeated/complex roots, superposition, Wronskian (light) |
| 2.2 | Oscillations and damping | Read a spring/RLC system as an ODE and classify its damping | simple harmonic motion, over/critical/underdamping, transient decay |
| 2.3 | Forcing, undetermined coefficients, and resonance | Add a driving term, find the steady state, and locate resonance | nonhomogeneous equations, undetermined coefficients, steady state, resonance |
| 2.4 | Variation of parameters | Find $y_p$ for *any* continuous forcing, not just the guessable menu | Wronskian, varying the constants, the $u_1', u_2'$ formula, standard form |

**Boss problem 2:** A driven, damped oscillator (mechanical or RLC) — solve homogeneous + particular, separate transient from steady state, and find the driving frequency that maximizes the response.

### Module 3: Linear systems and phase portraits

Several coupled quantities, and the geometry of how they evolve.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Linear systems via eigenvalues | Write $\mathbf x'=A\mathbf x$ and solve it with eigenvalues/eigenvectors | system of ODEs, matrix form, eigen-solutions $e^{\lambda t}\mathbf v$, real/complex eigenvalues |
| 3.2 | Phase portraits and stability | Classify an equilibrium from the eigenvalues and sketch the flow | phase plane, node/saddle/spiral/center, stability, trace–determinant |

**Boss problem 3:** For a given 2×2 system, solve it with eigenvalues, classify the origin's type and stability, and sketch the phase portrait — then read off the long-run fate of a trajectory.

### Module 4: Transforms and partial differential equations

Two power tools: an algebraic shortcut, and the door to PDEs.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | The Laplace transform for IVPs | Turn an IVP into algebra, solve, and invert — even with jumps/impulses | Laplace transform, transforms of derivatives, partial fractions, step/impulse forcing |
| 4.2 | Intro to PDEs: separation of variables | Solve the heat/wave equation on an interval and meet Fourier series | PDE, boundary/initial conditions, separation of variables, Fourier series (intro) |

**Boss problem 4:** Solve the heat equation on a rod with fixed-temperature ends (or an IVP with a switched-on force via Laplace) — separate variables, match the initial condition with a Fourier series, and describe how the solution decays/propagates.

## Sources of truth

- Boyce & DiPrima, *Elementary Differential Equations* (methods, conventions, problem style)
- Strogatz, *Nonlinear Dynamics and Chaos* (the phase-portrait / stability register)
- 3Blue1Brown, *Differential Equations* series (intuition, especially phase space and $e^{At}$)

## Syllabus changes

- **2026-08-20** — Added **1.4 Exact equations** and **2.4 Variation of parameters**
  (10 lessons → 12). Both were listed on the course's
  [reference card](reference.md#which-method-for-which-equation) decision table as
  methods this refresher skipped, which meant the table routed you to techniques
  with nowhere to learn them. 1.4 also gives the general home for the integrating
  factor that 1.2 introduces in its linear-equation special case; 2.4 completes
  Module 2 by covering the forcings undetermined coefficients cannot guess.
