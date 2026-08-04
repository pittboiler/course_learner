# Fusion & Plasma Engineering — Syllabus

> Engineering · Tier 2 · ~22 lessons · Prereqs: [plasma-physics](../plasma-physics/syllabus.md), [intro-nuclear-engineering](../intro-nuclear-engineering/syllabus.md) · Roadmap id: `fusion-plasma`

## Goal

Turn "fusion is hard" into a quantitative engineering picture: why D-T wins, what the Lawson criterion and triple product actually demand, how a tokamak or stellarator holds a hundred-million-degree plasma off the wall, and what stands between a burning plasma and a power plant. You will be able to size confinement, heating, and heat-exhaust requirements on the back of an envelope and read an ITER/DEMO/SPARC design choice critically. We deliberately skip detailed gyrokinetic turbulence theory and full blanket neutronics transport — we take confinement scaling and tritium breeding ratios as inputs to reason about, not to compute from first principles.

## Dangerous Checklist

When you finish, you can:

- [ ] Explain from the binding-energy curve why D-T is the near-term fuel and estimate its energy release per reaction
- [ ] Compute a fusion power density from density, temperature, and the Maxwellian-averaged reactivity $\langle\sigma v\rangle$
- [ ] Derive the Lawson criterion and evaluate whether a given $n$, $T$, $\tau_E$ reaches the triple-product target
- [ ] Distinguish ignition from breakeven and compute the fusion gain $Q$ from a power balance
- [ ] Explain why a torus needs rotational transform, and read a Grad–Shafranov flux-surface picture
- [ ] Estimate a tokamak's safety factor $q$ and judge kink stability against the Kruskal–Shafranov limit
- [ ] Apply the Greenwald density limit and the $\beta$ limit to bound an operating point
- [ ] Compare ohmic, neutral-beam, and RF heating and say why ohmic heating alone can't reach ignition
- [ ] Use an empirical $\tau_E$ scaling law and explain the L→H transition qualitatively
- [ ] Compute a divertor target heat flux and the radiated fraction needed to keep it below material limits
- [ ] Estimate a tritium consumption rate and explain why the breeding ratio must exceed one
- [ ] Sketch the hot-spot ignition picture for inertial confinement and contrast it with magnetic confinement
- [ ] Trace fusion power to gross electric power through a blanket, energy multiplication, and thermal efficiency

## Modules

### Module 1: Fusion Reactions & Confinement Criteria

From the mass defect to the triple product — the physics that sets every downstream engineering target.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Why fusion, why D-T | Read the binding-energy curve and pick a fuel | binding energy per nucleon, mass defect, D-T vs D-D vs D-³He, neutron vs aneutronic |
| 1.2 | The Coulomb barrier & tunneling | Explain why fusion needs keV, not eV | Coulomb barrier, quantum tunneling, Gamow peak, cross-section $\sigma(E)$ |
| 1.3 | Reactivity $\langle\sigma v\rangle$ & power density | Compute fusion power per cubic metre | Maxwellian average, $\langle\sigma v\rangle(T)$, $P_{\text{fus}}=n_D n_T\langle\sigma v\rangle E_{\text{fus}}$, optimal T |
| 1.4 | The Lawson criterion & triple product | State exactly what a reactor must achieve | power balance, $\tau_E$, $n\tau_E$, triple product $nT\tau_E$, bremsstrahlung floor |
| 1.5 | Ignition, breakeven & gain $Q$ | Separate the milestones and compute $Q$ | alpha heating, scientific vs engineering breakeven, ignition, $Q=P_{\text{fus}}/P_{\text{heat}}$ |

**Boss problem 1:** A 50–50 D-T plasma sits at $T=15$ keV with $n=10^{20}\ \text{m}^{-3}$; take $\langle\sigma v\rangle\approx2.6\times10^{-22}\ \text{m}^3/\text{s}$ and $E_{\text{fus}}=17.6$ MeV. (a) Compute the fusion power density. (b) Given a triple-product ignition target of $\sim3\times10^{21}\ \text{keV}\cdot\text{s}\cdot\text{m}^{-3}$, find the energy confinement time $\tau_E$ this plasma needs, and say in one sentence why raising $T$ past ~15 keV doesn't keep helping.

### Module 2: Magnetic Confinement & MHD

Why a straight field leaks, why a torus twists, and what makes the whole configuration hold together — or violently not.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | From bottles to tori | Explain why confinement needs rotational transform | magnetic mirror recap, curvature/grad-B drifts, charge separation, why a plain torus fails |
| 2.2 | MHD equilibrium & flux surfaces | Read a Grad–Shafranov equilibrium | force balance $\mathbf{J}\times\mathbf{B}=\nabla p$, nested flux surfaces, poloidal flux, Grad–Shafranov equation |
| 2.3 | The tokamak recipe | Assemble toroidal field, plasma current, and $q$ | toroidal vs poloidal field, plasma current, safety factor $q$, plasma $\beta$ |
| 2.4 | MHD instabilities | Predict the ways a plasma tears itself apart | kink & interchange modes, Kruskal–Shafranov limit, sawteeth, tearing modes, disruptions |
| 2.5 | Stellarators | Confine in 3D without a plasma current | external rotational transform, 3D coils, quasi-symmetry, steady-state vs disruption-free |
| 2.6 | Operational limits | Bound the safe operating window | Greenwald density limit, Troyon $\beta$ limit, disruption physics, operating-space diagram |

**Boss problem 2:** A tokamak has major radius $R=6$ m, minor radius $a=2$ m, toroidal field $B_t=5$ T, and plasma current $I_p=7.5$ MA. (a) Using the cylindrical estimate $q_a=\dfrac{2\pi a^2 B_t}{\mu_0 R I_p}$, compute the edge safety factor and state whether it clears the $q>2$ kink rule of thumb. (b) Using the Greenwald limit $n_G[10^{20}\,\text{m}^{-3}]=I_p[\text{MA}]/(\pi a^2[\text{m}^2])$, find the density limit and compare it to a typical operating density of $10^{20}\ \text{m}^{-3}$.

### Module 3: Heating, Transport & Plasma–Wall Interaction

Getting to ignition temperature, understanding why heat leaks faster than theory says it should, and surviving the exhaust.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Ohmic heating & its ceiling | Explain why resistive heating stalls out | Spitzer resistivity, $\eta\propto T^{-3/2}$, ohmic power, the ~keV ceiling |
| 3.2 | Neutral-beam injection | Heat and drive current with fast neutrals | ionization/charge exchange, beam deposition, momentum input, NBI current drive |
| 3.3 | RF heating & current drive | Match a wave to a resonance | ICRH, ECRH, lower-hybrid current drive, cyclotron resonances, non-inductive current |
| 3.4 | Transport & confinement scaling | Use a $\tau_E$ scaling law and explain H-mode | classical/neoclassical/anomalous transport, turbulence, ITER-98 scaling, L→H transition, edge pedestal |
| 3.5 | The scrape-off layer & divertor | Route exhaust power to a target you can cool | separatrix, SOL width $\lambda_q$, divertor geometry, detachment, radiative dissipation |
| 3.6 | First-wall & plasma–wall interaction | Pick a wall material and justify it | sputtering, erosion/redeposition, tungsten vs carbon vs beryllium, ELM & disruption loads |

**Boss problem 3:** 100 MW of power crosses the separatrix into the scrape-off layer and is deposited on two divertor targets, each with a wetted area of $2\pi R\times w$ where $R=6$ m and $w=0.05$ m. (a) Compute the average target heat flux and compare it to the ~10 MW/m² engineering limit. (b) Find the radiated fraction $f_{\text{rad}}$ needed to bring the target flux under that limit, and name the operating regime that achieves this.

### Module 4: Tritium, Inertial Fusion & Reactor Engineering

Closing the fuel cycle, the other path to ignition, and everything between a burning plasma and electricity on the grid.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Tritium breeding & the fuel cycle | Explain how a reactor makes its own fuel | tritium scarcity, ⁶Li/⁷Li breeding reactions, breeding ratio (TBR), fuel-cycle inventory |
| 4.2 | Neutrons, blankets & activation | Follow the 14 MeV neutron's energy and damage | neutron wall loading, energy multiplication, moderation, activation, shielding basics |
| 4.3 | Inertial confinement I: implosion | Reach ignition by compression instead of confinement | Lawson for ICF, implosion, areal density $\rho R$, hot-spot ignition, Rayleigh–Taylor |
| 4.4 | Inertial confinement II: drivers & NIF | Compare direct/indirect drive and read the NIF result | lasers, direct vs indirect drive, hohlraum, ignition milestone, gain for ICF |
| 4.5 | From burning plasma to power plant | Trace fusion power to grid electricity | ITER vs DEMO vs SPARC, balance of plant, availability, recirculating power, LCOE |

**Boss problem 4:** A DEMO-class reactor burns D-T at $P_{\text{fus}}=3$ GW; take $E_{\text{fus}}=17.6$ MeV and tritium mass $m_T=5.01\times10^{-27}$ kg. (a) Each reaction consumes one triton — compute the tritium burn rate in kg/day. (b) Explain in one sentence why the breeding ratio must exceed 1, not merely equal it. (c) Neutrons carry $14.1/17.6$ of the fusion energy into a blanket with energy multiplication $M=1.2$; the alphas ($3.5/17.6$) also thermalize. With thermal-to-electric efficiency $\eta=0.35$, estimate the gross electric power.

## Sources of truth

- Freidberg, *Plasma Physics and Fusion Energy* — confinement criteria, MHD, and reactor-level reasoning (primary spine and notation).
- Wesson, *Tokamaks* — tokamak equilibrium, stability limits, and empirical scalings.
- Atzeni & Meyer-ter-Vehn, *The Physics of Inertial Fusion* — ICF implosion and hot-spot ignition.
- ITER Physics Basis / recent SPARC and NIF results — for canonical parameters and milestone figures.
