# Fluid Dynamics — Syllabus

> Tier 2 · ~22 lessons · Prereqs: [`calc-refresher`](../calc-refresher/syllabus.md), [`ode-refresher`](../ode-refresher/syllabus.md), [`pdes`](../pdes/syllabus.md), [`mechanics-refresher`](../mechanics-refresher/syllabus.md) · Roadmap id: `fluid-dynamics`

## Goal

Learn to think of a fluid as a continuous field and write down the laws that move it: derive the Euler and Navier–Stokes equations from conservation of mass and momentum, and — just as important — read them, knowing what each term physically means. You will solve the canonical flows (Bernoulli, potential flow past a cylinder, Couette/Poiseuille, Stokes flow, boundary layers), reason with vorticity and circulation, estimate any flow's character from its Reynolds number, and understand where smooth flow loses stability and turns turbulent. Deliberately skipped: deep turbulence theory (we stop at a conceptual energy cascade), compressible gas dynamics beyond linear sound waves, numerical CFD, and non-Newtonian rheology.

## Dangerous Checklist

When you finish, you can:

- [ ] Convert between Lagrangian and Eulerian descriptions and compute a material derivative $\tfrac{D}{Dt} = \partial_t + \mathbf{u}\cdot\nabla$
- [ ] Derive the continuity equation and state exactly what incompressibility ($\nabla\cdot\mathbf{u}=0$) assumes
- [ ] Write the stress tensor for a Newtonian fluid and assemble the Navier–Stokes equations term by term
- [ ] Apply Bernoulli's theorem correctly — knowing its four hypotheses and when it fails
- [ ] Compute vorticity and circulation, and use Kelvin's theorem to say when circulation is conserved
- [ ] Build 2-D potential flows from a complex potential $w(z)$ and read velocity off $\mathrm{d}w/\mathrm{d}z$
- [ ] Compute the lift on a cylinder with circulation and explain d'Alembert's paradox and the Magnus effect
- [ ] Estimate the Reynolds number of a flow and predict its regime (creeping, laminar, turbulent)
- [ ] Solve Couette and Poiseuille flow exactly from Navier–Stokes
- [ ] Explain the boundary-layer idea, scale its thickness, and connect it to drag and flow separation
- [ ] Derive the dispersion relation for surface gravity and capillary waves
- [ ] Explain a hydrodynamic instability (Kelvin–Helmholtz, Rayleigh–Bénard) and sketch the route to turbulence and the Kolmogorov cascade

## Modules

### Module 1: Kinematics and the governing equations

Set up the continuum picture, then build the equations of motion from conservation laws.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The continuum hypothesis and what a fluid is | See when "a fluid is a field" is legitimate | continuum hypothesis, density/velocity/pressure fields, mean free path, no-slip preview |
| 1.2 | Lagrangian vs Eulerian, and the material derivative | Track a fluid parcel two ways and convert between them | pathlines/streamlines, Lagrangian vs Eulerian, material derivative $\tfrac{D}{Dt}=\partial_t+\mathbf{u}\cdot\nabla$, advection |
| 1.3 | Conservation of mass and the continuity equation | Write mass conservation as a PDE and read incompressibility | continuity equation, $\nabla\cdot\mathbf{u}=0$, compressible vs incompressible, streamfunction preview |
| 1.4 | Forces in a fluid and the stress tensor | Describe pressure and internal friction as a tensor field | body vs surface forces, Cauchy stress tensor, pressure, deviatoric stress, symmetry |
| 1.5 | The Euler equation | Get the inviscid equation of motion and interpret every term | Euler equation, momentum balance, pressure gradient force, $\tfrac{D\mathbf{u}}{Dt}$ |
| 1.6 | The Navier–Stokes equations | Add viscosity: the full incompressible equations, term by term | Newtonian stress, viscosity $\mu,\nu$, viscous diffusion $\nu\nabla^2\mathbf{u}$, boundary conditions |

**Boss problem 1:** Starting from conservation of mass and momentum on a control volume, derive the incompressible Navier–Stokes equations; then label each term ($\partial_t\mathbf{u}$, advection, pressure gradient, viscous diffusion, body force) with its physical meaning and its dimensions, and state precisely which assumptions turn Navier–Stokes into Euler.

### Module 2: Ideal (inviscid) flow

Drop viscosity and get a surprisingly powerful toolkit — Bernoulli, vorticity, and the complex potential.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Bernoulli's theorem | Trade pressure for speed along a streamline — and know the fine print | Bernoulli along a streamline, steady/inviscid/incompressible hypotheses, stagnation pressure, Venturi/Pitot |
| 2.2 | Vorticity and circulation | Measure local spin and its integral, and see why they matter | vorticity $\boldsymbol\omega=\nabla\times\mathbf{u}$, circulation $\Gamma$, Stokes' theorem, vortex lines |
| 2.3 | Kelvin's circulation theorem | Learn when circulation is frozen into the fluid | Kelvin's theorem, conservation of circulation, Helmholtz vortex theorems, irrotational persistence |
| 2.4 | Irrotational flow and the velocity potential | Reduce inviscid flow to a single Laplace equation | irrotational flow, velocity potential $\phi$, $\nabla^2\phi=0$, streamfunction $\psi$, harmonic conjugates |
| 2.5 | 2-D flow and the complex potential | Use complex analysis to generate flows for free | complex potential $w(z)=\phi+i\psi$, $\mathrm{d}w/\mathrm{d}z=u-iv$, uniform flow, source, vortex, dipole |
| 2.6 | Flow past a cylinder, lift, and d'Alembert's paradox | Compute the classic flow and confront a famous paradox | cylinder + doublet, adding circulation, stagnation points, zero drag paradox, Magnus effect |

**Boss problem 2:** Build the complex potential for uniform flow past a circular cylinder of radius $a$ with circulation $\Gamma$; find the velocity field and stagnation points, then use the Blasius theorem (or a pressure integral) to show the drag is zero and the lift is $L=\rho U\Gamma$ per unit span — the Kutta–Joukowski result behind the Magnus effect.

### Module 3: Viscous flow

Restore viscosity and let the Reynolds number organize everything from creeping bacteria to boundary layers.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The Reynolds number and dynamical similarity | Nondimensionalize Navier–Stokes and read off the one number that matters | nondimensionalization, Reynolds number $Re=UL/\nu$, dynamical similarity, inertial vs viscous |
| 3.2 | Exact solutions: Couette and Poiseuille flow | Solve the two flows you can solve exactly | plane/pipe Couette & Poiseuille flow, parabolic profile, shear stress, flow rate |
| 3.3 | Stokes flow and low-Reynolds-number life | Understand the world where viscosity dominates inertia | creeping flow, linearity & reversibility, Stokes drag $6\pi\mu a U$, "life at low $Re$", scallop theorem |
| 3.4 | Boundary layers and Prandtl's idea | Reconcile inviscid outer flow with the no-slip wall | boundary layer, Prandtl's scaling, thickness $\delta\sim\sqrt{\nu x/U}$, Blasius solution (sketch) |
| 3.5 | Separation and drag | Explain why real bodies feel drag and wakes form | adverse pressure gradient, boundary-layer separation, form vs skin-friction drag, drag crisis |

**Boss problem 3:** Solve steady laminar flow in a circular pipe from the Navier–Stokes equations to get the Hagen–Poiseuille parabolic profile and the flow-rate law $Q=\tfrac{\pi a^4 \Delta p}{8\mu L}$; then compute the Reynolds number and estimate the flow rate at which the pipe flow is expected to transition to turbulence.

### Module 4: Waves, instability, and turbulence

Let the equations oscillate and destabilize — waves, the onset of chaos, and a conceptual look at turbulence.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Surface gravity and capillary waves | Derive how water waves move and disperse | linearized free surface, dispersion relation, deep vs shallow water, phase vs group velocity, capillarity |
| 4.2 | Sound waves | Linearize compressible flow to get acoustics | compressibility, linear acoustics, wave equation, sound speed $c=\sqrt{\partial p/\partial\rho}$, Mach number |
| 4.3 | Hydrodynamic instability: Kelvin–Helmholtz and Rayleigh–Bénard | See how smooth flows lose stability | shear-layer (Kelvin–Helmholtz) instability, thermal convection, Rayleigh number, critical thresholds |
| 4.4 | The transition to turbulence | Track the route from laminar order to chaos | instability cascade, critical $Re$, sensitivity to initial conditions, laminar–turbulent transition |
| 4.5 | Turbulence: the energy cascade and Kolmogorov scaling | Get the conceptual picture and the famous scaling law | energy cascade, integral vs dissipation scales, Kolmogorov $-5/3$ spectrum, dissipation rate $\varepsilon$ |

**Boss problem 4:** For small-amplitude waves on deep water, derive the dispersion relation $\omega^2=gk+\tfrac{\sigma}{\rho}k^3$ combining gravity and surface tension; identify the wavelength of minimum phase speed, and explain physically which restoring force dominates at long vs short wavelengths.

## Sources of truth

- Acheson, *Elementary Fluid Dynamics* (primary — voice, level, and the inviscid/vortex development)
- Kundu, Cohen & Dowling, *Fluid Mechanics* (comprehensive reference; viscous flow, boundary layers, waves)
- Batchelor, *An Introduction to Fluid Dynamics* (rigor and the careful continuum/kinematics foundations)
- Landau & Lifshitz, *Fluid Mechanics* (Vol. 6) (compact derivations; sound, instability, and turbulence framing)

## Notes

- This course leans hard on [`pdes`](../pdes/syllabus.md): the governing equations *are* PDEs (Laplace's equation for potential flow, the diffusion equation for viscous/vorticity spreading, the wave equation for sound and surface waves), and on the vector calculus from [`calc-refresher`](../calc-refresher/syllabus.md) (divergence, curl, gradient, Stokes' and divergence theorems).
- The 2-D potential-flow material in Module 2 is applied [`complex-analysis`](../complex-analysis/syllabus.md) — conformal maps and analytic functions as flow generators; a good bridge to see that machinery pay off physically.
- Instability and the transition to turbulence (Module 4) connect directly to [`dynamical-systems`](../dynamical-systems/syllabus.md): bifurcations, loss of stability, and sensitive dependence are the same phenomena in a fluid dress.
- This course feeds [`astrophysics`](../astrophysics/syllabus.md) — stellar structure, winds, and accretion flows are fluid dynamics (often with gravity and, beyond our scope, magnetic fields) applied on astronomical scales.
