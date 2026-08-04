# Heat Transfer — Syllabus

> Engineering · Tier 1 · ~19 lessons · Prereqs: [engineering-thermodynamics](../engineering-thermodynamics/syllabus.md), [ode-refresher](../ode-refresher/syllabus.md) · Roadmap id: `heat-transfer`

## Goal

Thermodynamics tells you *whether* heat flows and how much energy is available; heat transfer tells you *how fast*. This course gives you the three transport modes — conduction, convection, radiation — as quantitative tools: derive the heat equation from an energy balance, collapse conduction problems into thermal-resistance circuits, size a fin, decide in one number (Biot) whether an object heats up uniformly, read a convection problem off its Reynolds and Prandtl numbers, account for radiation between real surfaces, and design a heat exchanger two independent ways (LMTD and effectiveness–NTU). Deliberately skipped: numerical/CFD methods beyond hand estimates, and the full heat–mass-transfer analogy (that lives in [transport-phenomena](../transport-phenomena/syllabus.md)) — boiling and condensation get a conceptual taste, not the full correlation zoo.

## Dangerous Checklist

When you finish, you can:

- [ ] State Fourier's law, Newton's law of cooling, and the Stefan–Boltzmann law, and say which mode dominates in a given situation
- [ ] Derive the heat equation from an energy balance on a control volume and reduce it to the right steady/transient/1-D form
- [ ] Solve 1-D steady conduction in plane walls, cylinders, and spheres, with and without heat generation
- [ ] Build a thermal-resistance network (series, parallel, contact resistance) and compute heat rate and interface temperatures
- [ ] Analyze a fin: get the temperature profile, fin efficiency, and effectiveness, and say when a fin is worth adding
- [ ] Use the Biot number to justify lumped capacitance, and solve the resulting exponential cooling
- [ ] Solve transient conduction in semi-infinite and finite bodies (error-function and one-term/Heisler solutions)
- [ ] Estimate a convection coefficient by picking the correct Nu = f(Re, Pr) correlation for the geometry and flow regime
- [ ] Distinguish forced from natural convection and internal from external flow, and scale a boundary layer
- [ ] Compute radiation exchange between real (gray, diffuse) surfaces using emissivity, view factors, and the radiosity network
- [ ] Size or rate a heat exchanger with both the LMTD and the effectiveness–NTU methods, and know which to reach for

## Modules

### Module 1: Conduction and thermal resistance

Start from the single microscopic law (Fourier's), build the governing PDE, then learn the engineer's shortcut — treating conduction as a circuit of resistances — and apply it to walls and fins.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The three modes and Fourier's law | Name the transport modes and write the flux law for conduction | conduction/convection/radiation, Fourier's law $q''=-k\nabla T$, thermal conductivity $k$, Newton's law of cooling preview |
| 1.2 | The heat equation | Derive the governing PDE from an energy balance and specialize it | control-volume energy balance, $\rho c_p\,\partial_t T=\nabla\!\cdot(k\nabla T)+\dot q$, thermal diffusivity $\alpha=k/\rho c_p$, boundary conditions |
| 1.3 | 1-D steady conduction | Solve the plane wall, cylinder, and sphere, with heat generation | steady 1-D forms, plane/radial conduction, $\ln$ and $1/r$ profiles, uniform generation $\dot q$, symmetry BCs |
| 1.4 | Thermal-resistance networks | Turn conduction + convection into a circuit and solve by inspection | conduction/convection resistance, series & parallel, overall $U$, contact resistance, critical insulation radius |
| 1.5 | Fins and extended surfaces | Analyze a fin and decide whether it earns its keep | fin equation, $m=\sqrt{hP/kA_c}$, tip conditions, fin efficiency $\eta_f$, effectiveness, fin arrays |

**Boss problem 1:** A furnace wall is firebrick ($L_1$, $k_1$) bonded to insulation ($L_2$, $k_2$); hot gas at $T_{\infty,i}$ with coefficient $h_i$ is inside, ambient at $T_{\infty,o}$ with $h_o$ outside. (a) Draw the per-unit-area resistance network and find the steady heat flux $q''$ and the brick–insulation interface temperature. (b) To shed more heat, an array of $N$ straight rectangular aluminum fins is added to the outer surface — write the new outer-side resistance in terms of the fin efficiency $\eta_f$ and unfinned area, and explain quantitatively why $q''$ rises and where the added conductance came from.

### Module 2: Transient conduction

Let temperature change in time. The whole module is organized by one question — is the object thin enough to have a single temperature, or must you resolve gradients inside it?

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Lumped capacitance and the Biot number | Justify "one temperature for the whole body" and solve the exponential cooling | Biot number $Bi=hL_c/k$, $Bi\ll1$ criterion, time constant $\tau=\rho V c_p/hA_s$, $\theta/\theta_i=e^{-t/\tau}$ |
| 2.2 | The semi-infinite solid | Solve a body too thick for its far side to feel the surface yet | error-function solution, penetration depth $\sim\sqrt{\alpha t}$, surface-temperature / surface-flux / convection cases |
| 2.3 | Finite bodies: one-term and Heisler solutions | Handle the middle ground — real slabs, cylinders, spheres in finite time | dimensionless $\theta^*,\;Fo=\alpha t/L^2,\;Bi$; one-term approximation; Heisler/Gröber charts; Fourier-series origin |

**Boss problem 2:** A thick steel slab initially at uniform $T_i$ is suddenly exposed on one face to a fluid at $T_\infty$ with coefficient $h$. (a) Compute the Biot number and use it to decide whether lumped capacitance is legitimate. (b) For the early time before the far face responds, treat the slab as semi-infinite and find how long until a point at depth $x$ reaches a target temperature, using the convective-surface erfc solution. (c) Once the Fourier number grows past $\approx0.2$, redo the surface temperature with the one-term approximation and reconcile the two estimates.

### Module 3: Convection

Convection is conduction into a moving fluid, so its physics lives in the boundary layer and its bookkeeping lives in three dimensionless groups. Build those, then walk the four canonical configurations and end with a taste of phase-change.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The convection coefficient and boundary layers | See where $h$ comes from and why it is not a material property | velocity & thermal boundary layers, no-slip, $h$ from wall gradient, laminar vs turbulent, local vs average $h$ |
| 3.2 | Dimensionless groups: Re, Pr, Nu | Nondimensionalize and reduce every convection problem to $Nu=f(Re,Pr)$ | Reynolds $Re$, Prandtl $Pr$, Nusselt $Nu=hL/k$, dynamic similarity, why correlations are universal |
| 3.3 | External forced convection | Estimate $h$ for flow over plates, cylinders, and spheres | flat-plate laminar/turbulent $Nu_x$, transition $Re$, cylinder/sphere correlations, drag–heat analogy |
| 3.4 | Internal forced convection | Handle pipe and duct flow, entry lengths, and wall conditions | hydrodynamic/thermal entry length, fully developed flow, constant-$q''$ vs constant-$T_s$, mean temperature, Dittus–Boelter |
| 3.5 | Natural convection | Get heat transfer with no pump — flow driven by buoyancy | buoyancy, Grashof $Gr$, Rayleigh $Ra$, $Nu=f(Ra,Pr)$, vertical plates & horizontal cylinders, mixed convection |
| 3.6 | Boiling and condensation (a taste) | Read the boiling curve and know why phase change moves so much heat | pool-boiling curve, nucleate/critical-heat-flux/film regimes, latent heat, filmwise condensation, why $h$ is huge |

**Boss problem 3:** Water at inlet temperature $T_i$ flows at mean velocity $u_m$ through a heated tube of diameter $D$ held at constant wall temperature $T_s$. (a) Compute $Re$ and $Pr$, classify the flow, and pick the correct internal correlation to get $Nu$ and hence $h$. (b) Using the constant-$T_s$ analysis, find the tube length needed to raise the water to a target outlet temperature. (c) As a sanity check, estimate the natural-convection $h$ that would act on the same tube in still water and argue from the ratio why forced convection was worth the pump.

### Module 4: Radiation and heat exchangers

Two capstones. Radiation is the mode that needs no medium and scales as $T^4$; heat exchangers are where the whole course pays off, and where two clean design methods let you size real hardware.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Blackbody radiation | Establish the ideal emitter and the laws that govern it | blackbody, Planck distribution (qualitatively), Stefan–Boltzmann $E_b=\sigma T^4$, Wien's displacement law, spectral vs total |
| 4.2 | Real surfaces: emissivity and Kirchhoff | Correct the ideal picture for real, gray, diffuse surfaces | emissivity $\varepsilon$, absorptivity, reflectivity, transmissivity, Kirchhoff's law, gray/diffuse assumptions, solar vs IR |
| 4.3 | View factors and radiation exchange | Account for geometry and solve exchange between surfaces | view factor $F_{ij}$, summation & reciprocity rules, radiosity $J$, surface & space resistances, two-surface enclosure, radiation shields |
| 4.4 | Heat exchangers I: the LMTD method | Rate or size an exchanger when the terminal temperatures are known | parallel/counter/cross flow, overall $UA$, log-mean temperature difference, correction factor $F$, energy balances |
| 4.5 | Heat exchangers II: effectiveness–NTU | Handle the case where outlet temperatures are unknown | heat-capacity rates $C_{\min},C_r$, effectiveness $\varepsilon$, NTU $=UA/C_{\min}$, $\varepsilon$–NTU relations, when to prefer it over LMTD |

**Boss problem 4:** Hot oil ($\dot m_h$, $c_{p,h}$, inlet $T_{h,i}$) heats water ($\dot m_c$, $c_{p,c}$, inlet $T_{c,i}$) in a counterflow exchanger with known $UA$. (a) With both outlet temperatures unknown, use effectiveness–NTU to find $\varepsilon$, the heat rate $q$, and both outlet temperatures. (b) Now feed those outlet temperatures back into the LMTD method and confirm it reproduces the same $q$ and $UA$ — verifying the two methods are consistent. (c) The exchanger's uninsulated hot header (surface area $A_s$, temperature $\approx T_{h,i}$, emissivity $\varepsilon_s$) also loses heat by radiation to surroundings at $T_{sur}$; estimate that loss with $q_{rad}=\varepsilon_s\sigma A_s(T_{h,i}^4-T_{sur}^4)$ and judge whether it is negligible against $q$.

## Sources of truth

- Incropera, Bergman, Lavine & DeWitt, *Fundamentals of Heat and Mass Transfer* (primary — notation, correlations, LMTD/ε-NTU development, and problem style)
- Cengel & Ghajar, *Heat and Mass Transfer: Fundamentals and Applications* (intuition-first explanations and worked engineering examples)
- Lienhard & Lienhard, *A Heat Transfer Textbook* (free; careful derivations of the heat equation, boundary layers, and radiation exchange)

## Notes

- This course leans directly on [engineering-thermodynamics](../engineering-thermodynamics/syllabus.md): every convection and heat-exchanger analysis is an application of the steady-flow energy balance ($\dot q=\dot m c_p\,\Delta T$), and radiation revisits the blackbody ideas from the thermodynamics of radiation.
- The heat equation and its transient solutions are ODE/PDE work — separation of variables, characteristic times, and error-function solutions all rest on [ode-refresher](../ode-refresher/syllabus.md); the Fourier-series origin of the Heisler charts is worth flagging as a bridge to any Fourier-analysis study.
- Heat transfer is one half of transport phenomena: the boundary-layer, dimensionless-group, and diffusion machinery here reappears almost verbatim for momentum and mass in [transport-phenomena](../transport-phenomena/syllabus.md), and the conduction/convection foundations feed [reactor-thermal-hydraulics](../reactor-thermal-hydraulics/syllabus.md).
