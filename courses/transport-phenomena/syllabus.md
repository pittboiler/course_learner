# Transport Phenomena — Syllabus

> Engineering · Tier 2 · ~25 lessons · Prereqs: [fluid-dynamics](../fluid-dynamics/syllabus.md), [heat-transfer](../heat-transfer/syllabus.md) · Roadmap id: `transport-phenomena`

## Goal

Momentum, heat, and mass are the same story told three times. This course makes the analogy explicit and then cashes it in: every flux is a diffusivity times a gradient, every conservation law is a shell balance taken to the limit, and every convection problem is one nondimensional group away from every other. You will read a transport property off kinetic theory, derive the four equations of change (continuity, Navier–Stokes, energy, species-continuity) from a single control-volume argument, collapse a problem onto its dimensionless groups (Re, Pr, Sc, Nu, Sh, Gr), scale a boundary layer, use the Reynolds and Chilton–Colburn analogies to get a coefficient you don't have from one you do, and handle diffusion with chemical reaction and simultaneous heat-and-mass transfer. Deliberately skipped: reaction-engineering's reactor design (that's [reaction-engineering](../reaction-engineering/syllabus.md)) and full numerical CFD — turbulence gets a conceptual taste, not the closure zoo.

## Dangerous Checklist

When you finish, you can:

- [ ] State the three molecular flux laws (Newton, Fourier, Fick) in one common "flux $=-$ diffusivity $\times$ gradient" form and say what diffuses in each
- [ ] Estimate a gas's viscosity, thermal conductivity, and diffusivity from mean-free-path kinetic theory, and predict how each scales with $T$ and $P$
- [ ] Compute and interpret the property-ratio groups $Pr=\nu/\alpha$, $Sc=\nu/D$, and $Le=\alpha/D$, and explain why they are all near 1 for gases
- [ ] Set up a shell balance and take the thin-shell limit to recover the governing differential equation
- [ ] Derive the equations of continuity, motion, energy, and species-continuity from control-volume balances and specialize each to a given problem
- [ ] Solve a laminar flow (falling film, tube, annulus, Couette) directly from the equation of motion with the correct boundary conditions
- [ ] Nondimensionalize the equations of change and read off the dimensionless groups that must match for dynamic similarity
- [ ] Scale a momentum, thermal, or concentration boundary layer and relate their thicknesses through $Pr$ and $Sc$
- [ ] Estimate friction, heat-transfer, and mass-transfer coefficients for a geometry by choosing the correct $Nu=f(Re,Pr)$ / $Sh=f(Re,Sc)$ correlation
- [ ] Use the Reynolds and Chilton–Colburn analogies to convert between friction, heat, and mass transfer coefficients
- [ ] Solve steady diffusion through a stagnant film and diffusion with chemical reaction (Thiele modulus, effectiveness factor)
- [ ] Set up a simultaneous heat-and-mass-transfer balance (e.g. the wet-bulb / evaporative-cooling problem) and solve for the coupled state

## Modules

### Module 1: The grand analogy and molecular transport

Before any equations of change, install the organizing idea: momentum, heat, and mass all move down gradients by the same molecular mechanism, so their flux laws and their transport coefficients share a form and — for a gas — nearly a value.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | One flux law, three transports | See the analogy that organizes the whole course | flux $=-(\text{diffusivity})\times(\text{gradient})$, molecular vs convective transport, conserved quantity per volume, the momentum/heat/mass correspondence table |
| 1.2 | Momentum transport and Newton's law of viscosity | Read shear stress as a flux of momentum | Newton's law $\tau_{yx}=-\mu\,d v_x/dy$, viscosity $\mu$, kinematic viscosity $\nu=\mu/\rho$, momentum-flux (stress) tensor $\boldsymbol{\tau}$, sign convention, Newtonian vs non-Newtonian |
| 1.3 | Heat and mass fluxes: Fourier and Fick in the same mold | Write the heat and species flux laws and name their diffusivities | Fourier $q''=-k\nabla T$, thermal diffusivity $\alpha=k/\rho c_p$, Fick $J_A^*=-c\,D_{AB}\nabla x_A$, diffusivity $D_{AB}$, molar vs mass basis |
| 1.4 | Where transport properties come from | Estimate $\mu,k,D$ from kinetic theory and predict their $T,P$ dependence | mean free path $\lambda$, mean speed $\bar c$, $\mu\sim\tfrac13\rho\bar c\lambda$, $\mu\propto\sqrt T$ and $\mu\neq f(P)$ for gases, liquids vs solids, Chapman–Enskog as the refinement |
| 1.5 | The three diffusivities and their ratios | Compare $\nu,\alpha,D_{AB}$ and interpret $Pr$, $Sc$, $Le$ | Prandtl $Pr=\nu/\alpha$, Schmidt $Sc=\nu/D_{AB}$, Lewis $Le=\alpha/D_{AB}=Sc/Pr$, why gases have all three $\approx1$, physical meaning of each ratio |

**Boss problem 1:** Treat a dilute monatomic gas of hard-sphere molecules (mass $m$, diameter $d$, number density $n$) at temperature $T$. (a) From mean-free-path arguments write $\mu$, $k$, and the self-diffusivity $D_{AA}$ each in the form $\tfrac13(\text{something})\bar c\lambda$, and evaluate $\bar c$ and $\lambda$ in terms of the given quantities. (b) Form $Pr=c_p\mu/k$ and $Sc=\mu/\rho D_{AA}$ and show both are order unity — quote the crude kinetic-theory numbers and compare to the "real gas" $Pr\approx0.7$. (c) Explain, using these results, why the momentum, thermal, and concentration boundary layers on a body in a gas stream nearly coincide, and what would break that coincidence in a liquid.

### Module 2: Shell balances and the equations of change

One method — conserve a quantity over a thin shell, take the limit — produces every governing equation in transport. Build the four equations of change once, together, so their shared structure (accumulation = in $-$ out $+$ generation) is unmistakable.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Shell momentum balances: the recipe | Turn a thin-shell force balance into a differential equation and solve it | control-shell bookkeeping, momentum in by flow vs by viscous transport, the falling film, parabolic profile, average vs maximum velocity |
| 2.2 | More shell balances: tube and annulus | Apply the recipe to pressure-driven internal flow | Hagen–Poiseuille from a shell balance, shear-stress distribution, annular flow, choosing the shell and the boundary conditions |
| 2.3 | The equation of continuity | Write mass conservation for a fluid at a point | control-volume mass balance, $\partial_t\rho+\nabla\!\cdot(\rho\mathbf v)=0$, substantial derivative $D/Dt$, incompressible form $\nabla\!\cdot\mathbf v=0$ |
| 2.4 | The equation of motion (Navier–Stokes) | Assemble the general momentum balance and reduce it per problem | $\rho\,D\mathbf v/Dt=-\nabla p+\nabla\!\cdot\boldsymbol\tau+\rho\mathbf g$, Newtonian $\boldsymbol\tau$, Navier–Stokes, dimensional reduction by symmetry and boundary conditions |
| 2.5 | The energy equation of change | Get the convective heat-transport PDE and its viscous-dissipation term | control-volume energy balance, $\rho c_p\,DT/Dt=\nabla\!\cdot(k\nabla T)+\mu\Phi_v+\dot q$, convection vs conduction terms, viscous dissipation $\Phi_v$ |
| 2.6 | The species-continuity equation | Write the convective-diffusion equation for a component | species mass balance, $\partial_t c_A+\nabla\!\cdot(c_A\mathbf v)=D_{AB}\nabla^2 c_A+R_A$, homogeneous reaction source, the momentum/heat/mass PDE family side by side |

**Boss problem 2:** Fluid (viscosity $\mu$, conductivity $k$) fills the gap of width $b$ between two long parallel plates; the lower plate is fixed at temperature $T_0$ and the upper plate moves at speed $V$ at temperature $T_b$ (planar Couette flow, no pressure gradient, steady). (a) Reduce the equation of motion and solve for the velocity profile $v_x(y)$, stating the boundary conditions you used. (b) Reduce the energy equation of change keeping the viscous-dissipation term, and solve for $T(y)$. (c) Show the temperature rise scales with the Brinkman number $Br=\mu V^2/[k(T_b-T_0)]$, and find the condition under which the fluid in the gap gets *hotter* than either plate — i.e. where frictional heating, not conduction, sets the interior temperature.

### Module 3: Dimensional analysis, boundary layers, and convection

Nondimensionalize the equations of change and the dimensionless groups fall out as coefficients; every geometry that shares them behaves identically. This module turns that into working estimates of $h$ and $k_c$ via the boundary layer.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Nondimensionalizing the equations of change | Derive the transport groups as the coefficients of the scaled equations | characteristic scales, $Re=\rho VL/\mu$, $Pr$, $Sc$, Péclet $Pe=Re\,Pr$, Grashof $Gr$, Froude $Fr$, dynamic similarity, $Nu=f(Re,Pr)$ and $Sh=f(Re,Sc)$ as the required form |
| 3.2 | The boundary-layer idea and the momentum boundary layer | Split a flow into an inviscid outer and a thin viscous layer, and scale it | no-slip, boundary-layer approximation, $\delta/L\sim Re^{-1/2}$, wall shear and skin friction $C_f$, laminar Blasius result (stated), separation |
| 3.3 | Thermal and concentration boundary layers by analogy | Get $\delta_T$ and $\delta_c$ from $\delta$ using $Pr$ and $Sc$ | thermal BL $\delta/\delta_T\sim Pr^{1/3}$, concentration BL $\delta/\delta_c\sim Sc^{1/3}$, $Nu_x$ and $Sh_x$ for the flat plate, the flux-from-gradient link to $h$ and $k_c$ |
| 3.4 | Forced convection and interphase transport coefficients | Choose a correlation to estimate $h$ and $k_c$ for a geometry | heat- and mass-transfer coefficients defined, $Nu=hL/k$, $Sh=k_cL/D_{AB}$, external/internal flow correlations, entry length, film vs bulk driving force |
| 3.5 | Free (natural) convection | Handle buoyancy-driven transport and its own group | buoyancy force, Grashof $Gr$, Rayleigh $Ra=Gr\,Pr$, $Nu=f(Ra,Pr)$, mixed convection ($Gr/Re^2$), the mass-transfer analogue (density-driven) |

**Boss problem 3:** Air at free-stream velocity $U_\infty$, temperature $T_\infty$, and humidity $c_{A,\infty}$ flows along a flat plate of length $L$ whose surface is a thin water film at $T_s$ with surface vapor concentration $c_{A,s}$ (laminar throughout). (a) Compute $Re_L$ and confirm laminar flow; write the momentum, thermal, and concentration boundary-layer thicknesses and order them using the given $Pr$ and $Sc$. (b) Using the flat-plate laminar results, estimate the average skin-friction coefficient, $\overline{Nu}_L$, and $\overline{Sh}_L$, and hence $\bar h$ and $\bar k_c$. (c) Show explicitly that $\overline{Nu}_L/\overline{Sh}_L=(Pr/Sc)^{1/3}$ for this flow, and state in one sentence what physical fact about air makes $\bar h$ and $\bar k_c$ nearly redundant.

### Module 4: Mass transport and multicomponent systems

Mass transfer is where the analogy earns its keep and where it also breaks in an instructive way: diffusion can drag bulk flow (Stefan flow) and can compete with chemical reaction. Build the tools for real separations.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Diffusion in binary mixtures: fluxes and frames | Keep molar/mass and diffusive/convective fluxes straight | mass-average vs molar-average velocity, $N_A=x_A(N_A+N_B)+J_A^*$, equimolar counterdiffusion vs diffusion through stagnant $B$, reference frames |
| 4.2 | Steady diffusion through a stagnant film | Solve the Stefan (evaporation) problem and read off the log-mean driving force | stagnant-film model, Stefan flow, $N_A$ with $x_{B,\text{lm}}$, film thickness, the drift-flux correction to Fick |
| 4.3 | Diffusion with chemical reaction | Couple diffusion to reaction and quantify the competition | homogeneous vs heterogeneous reaction, Thiele modulus $\phi$, concentration profile ($\cosh$), effectiveness factor $\eta=\tanh\phi/\phi$, reaction- vs diffusion-limited regimes |
| 4.4 | Transient and multidimensional diffusion | Reuse the transient-conduction machinery for concentration | $\partial_t c_A=D_{AB}\nabla^2 c_A$, penetration depth $\sqrt{D_{AB}t}$, semi-infinite erfc solution, Fourier-number analogue $Fo_m=D_{AB}t/L^2$, cross-links to [heat-transfer](../heat-transfer/syllabus.md) transient charts |
| 4.5 | Mass-transfer coefficients and correlations | Estimate $k_c$ the way you estimate $h$, and know the models behind it | film theory, penetration & surface-renewal theories ($k_c\propto D^{1/2}$ vs $D^{1}$), $Sh=f(Re,Sc)$ correlations, dilute vs concentrated flux |

**Boss problem 4:** A first-order heterogeneous reaction $A\to$ product occurs on the walls of the pores of a catalyst modeled as a flat slab of half-thickness $L$, exposed on both faces to reactant at surface concentration $c_{A,s}$; inside, $A$ diffuses (effective diffusivity $D_e$) and is consumed by a homogeneous first-order rate $k_1 c_A$. (a) Reduce the species-continuity equation to a steady 1-D form and solve for $c_A(x)$ with the symmetry and surface boundary conditions. (b) Define the Thiele modulus $\phi=L\sqrt{k_1/D_e}$ and express the effectiveness factor $\eta$ in closed form; give its limiting behavior for $\phi\ll1$ and $\phi\gg1$ and interpret each physically. (c) A colleague doubles the slab thickness expecting to double conversion per pellet — using $\eta(\phi)$, explain when that reasoning holds and when the pellet is already diffusion-limited so the extra material is nearly dead weight.

### Module 5: Interphase transport, the analogies, and turbulence

The payoff module: with all three transports in hand, the analogies let you trade one coefficient for another, two-resistance thinking handles real interfaces, and a first look at turbulence shows where the tidy laminar pictures give way to eddy transport.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | The transport analogies | Convert between friction, heat, and mass coefficients | Reynolds analogy ($St=C_f/2$, needs $Pr=Sc=1$), Chilton–Colburn $j_H=j_D=C_f/2$, $j$-factors, when the analogy fails (pressure gradients, $Pr\neq1$) |
| 5.2 | Interphase mass transfer: two-film theory | Add resistances across a phase boundary | gas-film and liquid-film coefficients, interface equilibrium (Henry's law), overall coefficients $K_G,K_L$, controlling resistance, the heat-transfer $U$ analogy |
| 5.3 | Simultaneous heat and mass transfer | Solve coupled transport where evaporation cools a surface | latent-heat coupling, the wet-bulb temperature, psychrometric balance $h(T_\infty-T_s)=k_c\,\lambda\,(c_{A,s}-c_{A,\infty})$, Lewis relation $h/k_c\rho c_p\approx Le^{2/3}$ |
| 5.4 | A taste of turbulent transport | See how eddies replace molecules as the transport mechanism | Reynolds averaging, eddy diffusivity, turbulent $\nu_t,\alpha_t,D_t$ nearly equal ($Pr_t\approx Sc_t\approx1$), why the analogies get *better* in turbulence, universal velocity profile (stated) |

**Boss problem 5:** A small wet thermometer bulb hangs in a fast dry air stream at temperature $T_\infty$ and negligible humidity; at steady state the water film on the bulb sits at the wet-bulb temperature $T_w$, where convective heat gain exactly supplies the latent heat of the water evaporating away. (a) Write the coupled steady heat and mass balances on the film, using a convective $h$ and a mass-transfer coefficient $k_c$, and combine them into one equation for $T_\infty-T_w$. (b) Use the Chilton–Colburn analogy to replace $h/k_c$ with a property group, obtaining the Lewis-relation form $T_\infty-T_w\propto (c_{A,s}(T_w)-c_{A,\infty})/Le^{2/3}$; identify every factor. (c) Given $\lambda$, air properties, and the saturation curve $c_{A,s}(T)$, describe the one-variable iteration that pins down $T_w$, and explain why $T_w$ depends on the air's humidity but not on the air speed.

## Sources of truth

- Bird, Stewart & Lightfoot, *Transport Phenomena* (primary — the analogy framing, shell-balance method, equations of change, and notation the course silently follows)
- Deen, *Analysis of Transport Phenomena* (rigorous scaling, boundary-layer, and multicomponent treatment)
- Incropera, Bergman, Lavine & DeWitt, *Fundamentals of Heat and Mass Transfer* (convection correlations and the heat–mass analogy in engineering form)
- Cussler, *Diffusion: Mass Transfer in Fluid Systems* (intuition-first mass transfer, film/penetration/surface-renewal models)

## Notes

- This course is the chemical-engineering keystone: it unifies [fluid-dynamics](../fluid-dynamics/syllabus.md) (the momentum half — continuity and Navier–Stokes are re-derived here as one member of a family) with [heat-transfer](../heat-transfer/syllabus.md) (boundary layers, dimensionless groups, and the convection correlations reappear almost verbatim, now with a mass-transfer twin), and it feeds forward into [reaction-engineering](../reaction-engineering/syllabus.md), where the diffusion-with-reaction and effectiveness-factor tools of Module 4 become the internal transport limits on catalytic reactors.
- The four equations of change in Module 2 are the same control-volume argument applied to mass, momentum, energy, and species; anyone comfortable with the heat equation from [heat-transfer](../heat-transfer/syllabus.md) should see the energy equation of change (2.5) as that equation plus convection and viscous dissipation.
- Transient diffusion (4.4) deliberately mirrors transient conduction: the $Fo$/erfc/one-term machinery is identical with $\alpha\to D_{AB}$, so lean on the [heat-transfer](../heat-transfer/syllabus.md) charts rather than re-deriving.
