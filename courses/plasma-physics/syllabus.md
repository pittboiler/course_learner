# Plasma Physics — Syllabus

> Physics · Tier 2 · ~22 lessons · Prereqs: [em-refresher](../em-refresher/syllabus.md), [stat-mech](../stat-mech/syllabus.md) · Roadmap id: `plasma-physics`

## Goal

Plasma is the fourth state of matter and the state most of the visible universe is actually in — stars, the solar wind, interstellar gas, fusion reactors, neon signs. This course builds the subject from the one fact that makes it distinct: a plasma is a gas of charged particles that responds *collectively*, so its own fields talk back to its motion. You will learn the four ways physicists tame that feedback — single-particle orbits (drifts, mirrors, adiabatic invariants), kinetic theory (the distribution function and the Vlasov equation, culminating in Landau damping), the fluid/MHD picture (equilibrium, pressure balance, stability), and the wave/instability zoo — then spend the payoff on fusion confinement and space/astrophysical plasmas. It leans hard on `em-refresher` (fields, forces, Maxwell) and `stat-mech` (distributions, pressure, temperature), and borrows adiabatic invariants from `analytical-mechanics`. Deliberately skipped: full plasma turbulence and gyrokinetics, and detailed reactor engineering — those belong to the future [`fusion-plasma`](../fusion-plasma/syllabus.md) course. The emphasis is physical reasoning and the handful of equations you actually compute with.

## Dangerous Checklist

When you finish, you can:

- [ ] Compute a Debye length, plasma frequency, and plasma parameter, and say whether a given gas of charges even counts as a plasma
- [ ] Derive Debye shielding and explain why a plasma is quasineutral on large scales but not small ones
- [ ] Work out the guiding-center drifts (E×B, grad-B, curvature, polarization) for a charged particle and predict where it goes
- [ ] Explain magnetic mirror confinement using the adiabatic invariance of the magnetic moment, and compute a loss cone
- [ ] Write the Vlasov equation, take its velocity moments, and explain how the fluid equations fall out
- [ ] Explain Landau damping physically — energy exchange between a wave and resonant particles — and get its sign right
- [ ] Write the ideal-MHD equations, state the frozen-in flux theorem, and explain what it does and doesn't allow
- [ ] Balance magnetic pressure and tension against plasma pressure, and compute a plasma beta
- [ ] Derive the dispersion relations for Langmuir, ion-acoustic, and Alfvén waves and say which physics sets each speed
- [ ] Identify a plasma instability (two-stream, kink, interchange) and estimate its growth rate
- [ ] Estimate the Lawson criterion / triple product for a fusion plasma and explain what a tokamak does about confinement
- [ ] Explain a real space plasma — the solar wind, a magnetosphere, or magnetic reconnection — using the tools above

## Modules

### Module 1: Plasma basics & single-particle motion

What makes a plasma a plasma, then the orbit of one particle in given fields — the foundation everything collective is built on.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | What is a plasma? Quasineutrality & Debye shielding | Say when a gas of charges becomes a plasma, and derive how it screens a test charge | quasineutrality, Debye length $\lambda_D=\sqrt{\epsilon_0 k_B T/n e^2}$, screened potential, plasma sheath idea |
| 1.2 | Plasma frequency & the plasma parameter | Compute the two numbers that define plasma behavior | plasma oscillation, $\omega_p=\sqrt{n e^2/\epsilon_0 m}$, plasma parameter $\Lambda=n\lambda_D^3$, coupling & the three plasma criteria |
| 1.3 | Gyration & the E×B drift | Solve the motion of one charge in uniform E and B fields | Larmor radius & cyclotron frequency, guiding center, the mass-independent $\mathbf{E}\times\mathbf{B}$ drift |
| 1.4 | Grad-B, curvature & polarization drifts | Predict where a particle goes in nonuniform/time-varying fields | $\nabla B$ drift, curvature drift, polarization drift, charge separation & currents |
| 1.5 | Adiabatic invariants & magnetic mirrors | Explain mirror confinement from the invariance of $\mu$ | magnetic moment $\mu=mv_\perp^2/2B$, adiabatic invariance (from `analytical-mechanics`), mirror ratio, the loss cone |

**Boss problem 1:** A charged particle is launched into a magnetic mirror with mirror ratio $R_m=B_{\max}/B_{\min}=4$. Using conservation of $\mu$ and of kinetic energy, derive the loss-cone angle and the fraction of an isotropic velocity distribution that escapes; then add a perpendicular gravitational field and find the resulting drift and whether it charges up the plasma. (Loss-cone: $\sin^2\theta_{lc}=1/R_m$.)

### Module 2: Kinetic theory — Vlasov & Landau damping

Stop tracking particles one at a time; track their distribution in phase space. This module ends on Landau damping, the most beautiful surprise in the subject.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The distribution function & its moments | Describe a plasma by $f(\mathbf{x},\mathbf{v},t)$ and recover density, flow, pressure | phase space, $f$, moments → $n,\ \mathbf{u},\ P$; Maxwellian (from `stat-mech`), temperature as a moment |
| 2.2 | The Vlasov equation | Write the collisionless kinetic equation and see why it's self-consistent | Vlasov (collisionless Boltzmann), self-consistent fields, Jeans' theorem, when collisions matter (Krook/Fokker–Planck sketch) |
| 2.3 | Linearizing Vlasov: the plasma dispersion relation | Perturb a Maxwellian and get the dielectric response | linearization, Fourier–Laplace transform, the plasma dielectric function $\varepsilon(k,\omega)$, the Landau contour |
| 2.4 | Landau damping | Explain collisionless damping physically and get its rate | resonant particles $v\approx\omega/k$, the $\partial f/\partial v$ slope, damping vs growth, Landau's sign |

**Boss problem 2:** Starting from the linearized Vlasov–Poisson system for a Maxwellian, expand $\varepsilon(k,\omega)$ in the weak-damping limit to recover the Bohm–Gross frequency $\omega^2=\omega_p^2(1+3k^2\lambda_D^2)$ for the real part, and the Landau damping rate $\gamma$ for the imaginary part. Explain physically why $\gamma<0$ (damping) for a Maxwellian and what feature of $f(v)$ would flip it to growth.

### Module 3: The fluid picture & MHD

Take moments of Vlasov, close the hierarchy, and collapse two fluids into one conducting fluid: magnetohydrodynamics, the workhorse of fusion and astrophysics.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | From kinetic to fluid: the two-fluid equations | Derive fluid equations as velocity moments and see the closure problem | moment hierarchy, continuity/momentum/energy, the closure problem, two-fluid vs single-fluid |
| 3.2 | The ideal-MHD equations & frozen-in flux | Write single-fluid MHD and state Alfvén's theorem | MHD equations, generalized Ohm's law, ideal MHD, frozen-in flux, when it breaks (resistivity) |
| 3.3 | Magnetic pressure, tension & plasma beta | Balance $\mathbf{J}\times\mathbf{B}$ against pressure gradients | $\mathbf{J}\times\mathbf{B}=\nabla\!\cdot\!$ Maxwell stress, magnetic pressure $B^2/2\mu_0$, tension, plasma beta $\beta$ |
| 3.4 | MHD equilibrium: pinches & flux surfaces | Find static configurations that confine a plasma | force balance $\nabla p=\mathbf{J}\times\mathbf{B}$, θ- and Z-pinch, flux surfaces, the Grad–Shafranov idea |
| 3.5 | MHD stability & the energy principle | Judge whether an equilibrium survives a nudge | perturbation & the energy principle $\delta W$, kink & sausage modes, interchange/Rayleigh–Taylor, "good vs bad" curvature |

**Boss problem 3:** For a cylindrical Z-pinch in equilibrium, use $\nabla p = \mathbf{J}\times\mathbf{B}$ and Ampère's law to derive the Bennett pinch relation (total current vs line density and temperature). Then argue qualitatively, via the energy principle and field-line curvature, why the Z-pinch is unstable to the $m=0$ sausage and $m=1$ kink modes — and what a stabilizing axial field does.

### Module 4: Waves & instabilities

The plasma supports a zoo of waves because it has so many restoring forces. Master the dispersion-relation method, then turn it around to find instabilities — waves that grow.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Electron waves: Langmuir & the cold-plasma dielectric | Derive the fastest plasma oscillation and set up the wave method | Langmuir waves, Bohm–Gross dispersion, cold-plasma dielectric tensor, cutoffs |
| 4.2 | Ion-acoustic waves | Explain the plasma's "sound" and why it needs two temperatures | ion-acoustic speed $c_s=\sqrt{k_B T_e/m_i}$, ion Landau damping, $T_e\gg T_i$ regime |
| 4.3 | Electromagnetic & Alfvén waves | Derive the wave that carries magnetic tension | Alfvén speed $v_A=B/\sqrt{\mu_0\rho}$, shear & compressional (magnetosonic) Alfvén waves, MHD wave triad |
| 4.4 | Instabilities: two-stream, drift & interchange | Recognize a growing mode and estimate its growth rate | two-stream/bump-on-tail, free-energy sources, drift waves, interchange/RT growth $\gamma\sim\sqrt{g/L}$ |

**Boss problem 4:** Two cold electron beams counter-stream through a fixed ion background. Write the dielectric $\varepsilon(k,\omega)=1-\omega_p^2/(\omega-kv_0)^2-\omega_p^2/(\omega+kv_0)^2$, find the range of $k$ for which $\omega$ has a positive imaginary part, and derive the maximum growth rate. Explain where the growing wave's energy comes from and connect it to the $\partial f/\partial v>0$ picture from Module 2.

### Module 5: Fusion & astrophysical plasmas

The payoff: use everything to explain how we might confine a burning plasma on Earth, and how nature confines them across the galaxy.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Fusion reactions & the Lawson criterion | Estimate what a fusion plasma must achieve to ignite | D–T reaction, cross section & reactivity $\langle\sigma v\rangle$, energy balance, Lawson criterion, triple product $nT\tau_E$ |
| 5.2 | Magnetic confinement: tokamaks & mirrors | Explain how a tokamak confines a plasma and why it's shaped that way | toroidal + poloidal field, rotational transform, why a straight solenoid leaks, bridge to [`fusion-plasma`](../fusion-plasma/syllabus.md) |
| 5.3 | The solar wind & magnetospheres | Apply MHD and single-particle drifts to the space around a star | Parker solar-wind solution, bow shock & magnetopause, ring current, trapped radiation belts |
| 5.4 | Magnetic reconnection & astrophysical plasmas | Explain how frozen-in flux breaks and releases energy | resistive MHD, Sweet–Parker reconnection, flares & substorms, dynamos, bridge to [`astrophysics`](../astrophysics/syllabus.md) |

**Boss problem 5:** For a D–T plasma at $T=15$ keV, estimate the triple product $nT\tau_E$ required for ignition by balancing fusion self-heating (alpha power) against bremsstrahlung and transport losses, using a tabulated $\langle\sigma v\rangle$. Compare your number to a modern tokamak and say, in one paragraph, which term dominates and what raising $B$ or $T$ buys you.

## Sources of truth

- Chen, *Introduction to Plasma Physics and Controlled Fusion* — primary spine for notation, drift derivations, and the wave/instability treatment.
- Bellan, *Fundamentals of Plasma Physics* — for the kinetic theory (Vlasov, Landau damping) and MHD rigor.
- Freidberg, *Ideal MHD* / *Plasma Physics and Fusion Energy* — for equilibrium, stability, and the fusion module.
- SI units throughout; KaTeX-compatible LaTeX, no custom macros.
