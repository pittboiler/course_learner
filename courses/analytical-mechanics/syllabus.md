# Analytical Mechanics — Syllabus

> Tier 1 · 16 lessons · Prereqs: [`mechanics-refresher`](../mechanics-refresher/syllabus.md), [`ode-refresher`](../ode-refresher/syllabus.md) · Roadmap id: `analytical-mechanics`

## Goal

Reformulate mechanics from forces to **variational principles** — Lagrangian then Hamiltonian — and extract the structural payoffs: symmetry ⇒ conservation (Noether), phase-space geometry (Liouville, Poisson brackets, canonical transformations), and the Hamilton–Jacobi bridge to wave mechanics. This is the gateway to quantum mechanics, statistical mechanics, and field theory: the Poisson bracket becomes the commutator, the action becomes the phase, the Hamiltonian becomes the energy operator. A tier-1 course — it assumes fluency with `mechanics-refresher` (Newtonian dynamics, oscillations, rigid bodies) and `ode-refresher` (2nd-order ODEs, phase portraits) and moves faster and deeper than a refresher. Deliberately kept lighter: the rigorous functional-analysis foundations of the variational calculus, chaos/KAM theory beyond a mention, and full continuum/field theory (only a first look).

## Dangerous Checklist

When you finish, you can:

- [ ] Derive the Euler–Lagrange equation from a variational principle
- [ ] Write the Lagrangian of a mechanical system in generalized coordinates and get its equations of motion
- [ ] Handle holonomic constraints, including with Lagrange multipliers for constraint forces
- [ ] Identify cyclic coordinates and their conserved momenta
- [ ] Apply Noether's theorem to turn a continuous symmetry into a conservation law
- [ ] Say when the Hamiltonian equals the energy, and construct it via the Legendre transform
- [ ] Write and solve Hamilton's equations, and read a phase portrait
- [ ] Compute Poisson brackets and use them to test constants of motion and canonical transformations
- [ ] Use a generating function to perform a canonical transformation
- [ ] Solve a system with Hamilton–Jacobi / action–angle variables, find normal modes, and write Euler's rigid-body equations

## Modules

### Module 1: From Newton to Lagrange

Replace $\mathbf F = m\mathbf a$ with "nature extremizes the action."

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The calculus of variations and the Euler–Lagrange equation | Extremize a functional and derive the E–L equation | functional, variation $\delta$, Euler–Lagrange equation, boundary terms |
| 1.2 | The principle of least action and Lagrange's equations | Get equations of motion from $L=T-V$ | action, Hamilton's principle, $L=T-V$, equivalence to Newton |
| 1.3 | Generalized coordinates and constraints | Choose coordinates that fit the constraints; handle constraint forces | generalized coordinates, holonomic constraints, D'Alembert's principle, Lagrange multipliers |
| 1.4 | Applications of the Lagrangian formalism | Set up and solve nontrivial systems fluently | pendula, bead on a wire, central force, coupled systems |

**Boss problem 1:** Derive the equations of motion of a bead sliding on a rotating hoop (or a double pendulum), identify the effective potential, and find its equilibria and their stability.

### Module 2: Symmetry and conservation

Why conserved quantities exist at all.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Cyclic coordinates and conserved momenta | Read conservation straight off the Lagrangian | cyclic (ignorable) coordinate, conjugate momentum, conservation |
| 2.2 | Noether's theorem | Turn any continuous symmetry into a conserved current | continuous symmetry, Noether's theorem, translation/rotation/time invariance |
| 2.3 | The energy function and the Hamiltonian | Build the energy function; know when it is conserved and equals energy | energy (Jacobi) function, when $H = E$, Legendre transform preview |

**Boss problem 2:** For a charged particle in a static electromagnetic field (or a rotating-frame Lagrangian), find the conserved quantities via Noether, and determine whether the energy function equals the mechanical energy.

### Module 3: Hamiltonian mechanics

Double the coordinates, and the structure blossoms.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The Legendre transform and Hamilton's equations | Pass to $(q,p)$ and the first-order canonical equations | Legendre transform, Hamiltonian, Hamilton's equations, phase space |
| 3.2 | Phase space and Liouville's theorem | Read the flow in phase space and see volume preservation | phase portrait, Hamiltonian flow, Liouville's theorem, incompressibility |
| 3.3 | Poisson brackets | Encode dynamics algebraically; test constants of motion | Poisson bracket, $\dot f = \{f,H\}$, fundamental brackets, Jacobi identity |
| 3.4 | Canonical transformations | Change phase-space coordinates while preserving the structure | canonical transformation, generating functions, symplectic condition |

**Boss problem 3:** Put the harmonic oscillator in Hamiltonian form, verify the fundamental Poisson brackets, and find a canonical transformation to variables in which the Hamiltonian is trivial (action–angle preview).

### Module 4: Advanced formulations

The tools that reach into quantum and continuum physics.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Hamilton–Jacobi theory | Solve mechanics by finding the action as a function of coordinates | Hamilton–Jacobi equation, Hamilton's principal function, the QM bridge |
| 4.2 | Action–angle variables and integrability | Use conserved actions to solve periodic systems | action–angle variables, integrable systems, adiabatic invariants |
| 4.3 | Small oscillations and normal modes | Linearize about equilibrium and diagonalize | mass/stiffness matrices, generalized eigenvalue problem, normal modes |
| 4.4 | Rigid-body dynamics | Describe rotation with the inertia tensor and Euler's equations | inertia tensor, principal axes, Euler angles, Euler's equations, the free top |
| 4.5 | Classical fields: the Lagrangian density | Take the continuum limit to a field theory | continuum limit, Lagrangian density, field Euler–Lagrange, gateway to QFT |

**Boss problem 4:** For two coupled oscillators, form the mass and stiffness matrices, solve the generalized eigenvalue problem for the normal-mode frequencies and shapes, and express the general motion as a superposition.

## Sources of truth

- Goldstein, Poole & Safko, *Classical Mechanics* (the standard; notation and scope)
- Landau & Lifshitz, *Mechanics* (economy and the variational viewpoint)
- Taylor, *Classical Mechanics* (accessible derivations); José & Saletan for the geometric Hamiltonian view
