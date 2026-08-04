# Computational Physics — Syllabus

> Physics · Tier 1 · ~17 lessons · Prereqs: [ode-refresher](../ode-refresher/syllabus.md), [linalg-refresher](../linalg-refresher/syllabus.md) · Roadmap id: `computational-physics`

## Goal

Turn physics you can write down but can't solve by hand into a running simulation you trust. You'll march equations of motion forward in time (Euler, Runge–Kutta 4, and symplectic Verlet), put fields on a grid to solve PDEs by finite differences (heat, wave, Poisson), sample statistical systems with Monte Carlo (culminating in the Ising model), and finish with molecular dynamics and a matrix attack on the Schrödinger equation. The spine is *trust*: every method comes with a convergence test and a conserved quantity to watch, so you always know whether the number your machine returns is physics or garbage. This course *applies* the theory from [`numerical-analysis`](../numerical-analysis/syllabus.md) and [`ode-refresher`](../ode-refresher/syllabus.md) and *simulates* the systems of [`mechanics-refresher`](../mechanics-refresher/syllabus.md), [`stat-mech`](../stat-mech/syllabus.md), and [`quantum-mechanics`](../quantum-mechanics/syllabus.md); it pairs naturally with [`dynamical-systems`](../dynamical-systems/syllabus.md). It deliberately skips production HPC and parallelism, deep numerical-analysis proofs (those live in `numerical-analysis`), and machine learning.

## Dangerous Checklist

When you finish, you can:

- [ ] Turn any equation of motion into a first-order system and march it forward with Euler and Runge–Kutta 4.
- [ ] Measure a scheme's order of accuracy empirically — halve the step, watch the error fall — and use energy drift as a running correctness check.
- [ ] Choose between RK4 and a symplectic integrator (Verlet/leapfrog) for a job, and explain why energy conservation, not local order, governs *long* simulations.
- [ ] Simulate a gravitational orbit and reproduce Kepler's ellipse, then push the driven damped pendulum into chaos and read its Poincaré section.
- [ ] Discretize spatial derivatives with finite-difference stencils and impose Dirichlet and Neumann boundary conditions on a grid.
- [ ] Step the heat and wave equations forward on a grid, derive their stability (CFL) limits, and predict when an explicit scheme will blow up.
- [ ] Solve Laplace/Poisson on a grid by Jacobi, Gauss–Seidel, and SOR relaxation, and accelerate convergence with over-relaxation.
- [ ] Estimate an integral by Monte Carlo and state why its error scales as $1/\sqrt{N}$ independent of dimension.
- [ ] Cut Monte Carlo variance with importance sampling.
- [ ] Build a Metropolis Markov chain that samples the Boltzmann distribution, and justify it with detailed balance.
- [ ] Simulate the 2D Ising model, locate its critical temperature, and measure magnetization, specific heat, and susceptibility.
- [ ] Run a Lennard-Jones molecular-dynamics simulation and extract a diffusion coefficient from the mean-square displacement, and turn the Schrödinger equation into a matrix eigenvalue problem for a particle in a well.

## Modules

### Module 1: Numerical ODEs & Simulating Mechanics

From "here is Newton's second law" to a trajectory you believe — building integrators, testing them, and unleashing them on orbits and chaos.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | From Equations of Motion to a Time-Stepper | Reduce a second-order ODE to a first-order system and take the simplest step | state vector $(x,v)$, first-order form, forward Euler, local vs. global error, order 1 |
| 1.2 | Runge–Kutta 4 | Get high accuracy per step with the workhorse integrator | midpoint sampling, RK2/RK4 stages, order 4, cost-vs-accuracy tradeoff |
| 1.3 | Convergence, Error & Validation | Prove your integrator works before trusting its answers | step-halving/Richardson, empirical order, energy drift as a diagnostic, plotting error vs. $\Delta t$ |
| 1.4 | Symplectic Integrators & Why Energy Matters | See why a 2nd-order method can beat RK4 over long runs | Verlet/leapfrog, phase-space area preservation, no secular energy drift, time-reversibility |
| 1.5 | Planetary Orbits | Simulate the two-body problem and recover Kepler | inverse-square gravity, conserved energy & angular momentum, eccentric orbits, integrator comparison |
| 1.6 | The Driven Pendulum & Onset of Chaos | Watch a simple system go chaotic and learn to see it | driven damped pendulum, sensitive dependence, Poincaré section, phase portrait |

**Boss problem 1:** Simulate the Sun–planet two-body problem for an eccentric orbit ($e \approx 0.6$) with forward Euler, RK4, and velocity Verlet at a *fixed* step size. Track total energy over many orbits: show Euler spirals outward (energy grows), RK4 tracks beautifully at first but slowly loses energy over hundreds of orbits, and Verlet's energy merely oscillates with no secular drift despite being only 2nd order. Then verify each integrator's order by halving $\Delta t$ and measuring how the one-orbit position error shrinks, and explain in one paragraph why, for a long simulation, you'd pick the "less accurate" symplectic method. (Links to [`mechanics-refresher`](../mechanics-refresher/syllabus.md) for the orbit physics.)

### Module 2: PDEs on a Grid

Replace continuous space with a lattice of points, turn derivatives into differences, and meet the stability limits that decide whether your field evolves or explodes.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Fields on a Grid & Finite-Difference Stencils | Approximate spatial derivatives and set boundary conditions on a lattice | grid spacing $\Delta x$, central/forward differences, second-derivative stencil, Dirichlet vs. Neumann |
| 2.2 | The Heat Equation: Explicit Stepping & Stability | Diffuse a field forward in time and derive when the scheme is stable | FTCS scheme, method of lines, stability limit $\alpha\,\Delta t/\Delta x^2 \le \tfrac12$, implicit alternative |
| 2.3 | The Wave Equation | Propagate a wave on a grid and respect the Courant condition | leapfrog in space & time, CFL condition $c\,\Delta t \le \Delta x$, numerical dispersion, reflecting/absorbing boundaries |
| 2.4 | Poisson's Equation & Relaxation | Solve a static field as the fixed point of an iterative sweep | Laplace/Poisson, Jacobi, Gauss–Seidel, successive over-relaxation (SOR), convergence rate |

**Boss problem 2:** Solve the steady-state temperature of a square plate (fixed edge temperatures, an internal hot spot as a source) by relaxation: implement Jacobi, Gauss–Seidel, and SOR, and empirically find the over-relaxation parameter $\omega$ that minimizes the sweep count — show SOR beats Jacobi by more than an order of magnitude. Then take the *time-dependent* 1D heat equation and run the explicit scheme just below and just above the stability limit $\alpha\,\Delta t/\Delta x^2 = \tfrac12$, exhibiting the sawtooth blow-up on the unstable side and confirming the theoretical threshold.

### Module 3: Monte Carlo & Statistical Systems

When a system has too many degrees of freedom to march deterministically, sample it. Random numbers become a computing tool — for integrals, then for the physics of phase transitions.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Random Numbers & Monte Carlo Integration | Estimate integrals by sampling and understand the $1/\sqrt{N}$ error | pseudorandom numbers, sample mean estimator, variance & standard error, dimension-independence |
| 3.2 | Importance Sampling & Variance Reduction | Spend your samples where the integrand lives | importance sampling, sampling from a density, variance reduction, weighting |
| 3.3 | Markov Chains & the Metropolis Algorithm | Sample the Boltzmann distribution without ever computing $Z$ | Markov chain, detailed balance, Metropolis accept/reject, equilibration & autocorrelation |
| 3.4 | The Ising Model | Simulate a magnet, find its phase transition, and measure it | spin lattice, energy & magnetization, critical temperature, specific heat, susceptibility |

**Boss problem 3:** Warm up by estimating $\pi$ (or a peaked 1D integral) by Monte Carlo and confirming the error falls as $1/\sqrt{N}$ on a log-log plot. Then simulate the 2D Ising model on an $L\times L$ lattice with Metropolis at a sweep of temperatures: measure the magnetization, energy, specific heat, and susceptibility, locate the critical temperature from the specific-heat peak, and compare it to Onsager's exact $k_BT_c/J = 2/\ln(1+\sqrt{2}) \approx 2.269$. Show the peak sharpening as $L$ grows and explain what that says about the transition. (Physics from [`stat-mech`](../stat-mech/syllabus.md).)

### Module 4: Molecular Dynamics & Eigenvalue Problems

Two capstone applications: many interacting particles evolved by Newton's laws, and quantum energy levels extracted by turning a differential operator into a matrix.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Molecular Dynamics | Evolve many interacting particles and read thermodynamics off their motion | Lennard-Jones potential, velocity Verlet, periodic boundaries, temperature from kinetic energy |
| 4.2 | Random Processes & Diffusion | Connect microscopic randomness to macroscopic diffusion | random walk, Brownian motion, mean-square displacement, diffusion coefficient $\langle x^2\rangle = 2Dt$ |
| 4.3 | Matrix Methods for Eigenvalue Problems | Turn the Schrödinger equation into a matrix and diagonalize for energy levels | finite-difference Hamiltonian, tridiagonal matrix, eigenvalues as energies, particle in a well |

**Boss problem 4:** Two parts, one theme — *dynamics you can validate against known answers.* (a) Simulate $N$ Lennard-Jones particles in a 2D periodic box with velocity Verlet; confirm total energy is conserved, read the temperature off the average kinetic energy, and extract the diffusion coefficient $D$ from the slope of the mean-square displacement — checking that it matches the random-walk law $\langle r^2\rangle = 4Dt$ in 2D. (b) Discretize the 1D time-independent Schrödinger equation for a particle in an infinite square well (then a harmonic well) as a tridiagonal matrix, diagonalize it, and compare the lowest few eigenvalues to the analytic $E_n$ — showing the finite-difference error shrink as you refine the grid. (Bridges to [`quantum-mechanics`](../quantum-mechanics/syllabus.md).)

## Sources of truth

- Newman, *Computational Physics* — primary; sets the scope, the method catalog, and the "simulate a real system and check it" ethos of this course.
- Giordano & Nakanishi, *Computational Physics* — for the mechanics/chaos and PDE worked examples (orbits, driven pendulum, wave/heat on a grid).
- Landau, Páez & Bordeianu, *Computational Physics: Problem Solving with Python* — for Monte Carlo, the Ising model, and molecular dynamics.
- Press et al., *Numerical Recipes* — reference for the underlying algorithms (RK, relaxation, eigenvalue routines); this course explains the physics, that book has the code.

---

*2026-08-04: Landed at 17 lessons vs. the ~16 target (+6%). The extra lesson is a standalone "Convergence, Error & Validation" (1.3) — every later module leans on step-halving and conserved-quantity checks, so it earns its own slot rather than being tucked into a footnote.*
