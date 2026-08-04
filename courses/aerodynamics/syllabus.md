# Aerodynamics — Syllabus

> Engineering · Tier 2 · ~22 lessons · Prereqs: [fluid-dynamics](../fluid-dynamics/syllabus.md) · Roadmap id: `aerodynamics`

## Goal

Learn to predict the forces air exerts on a body and, more usefully, to explain *why*: where lift actually comes from (circulation, not "longer path on top"), why a finite wing pays a drag penalty just for making lift, why a smooth wing suddenly stalls, and what changes when the flow gets fast enough to compress and form shocks. You build the toolkit in order — potential flow to get lift cleanly, then thin-airfoil and lifting-line theory for real wings, then boundary layers for the viscous truth, then compressible gas dynamics for the high-speed regime. Deliberately skipped: CFD algorithm internals (we reason with the equations, not discretize them) and hypersonic real-gas effects (we stop at supersonic linear theory).

## Dangerous Checklist

When you finish, you can:

- [ ] Nondimensionalize any aerodynamic force into $C_L$, $C_D$, $C_M$ and read what each coefficient depends on
- [ ] Build a 2-D potential flow by superposing uniform stream, source, doublet, and vortex, then extract velocity and $C_p$
- [ ] State the Kutta–Joukowski theorem and explain how circulation, not path length, produces lift
- [ ] Apply the Kutta condition and use thin-airfoil theory to predict lift-curve slope and the aerodynamic center
- [ ] Compute induced drag from a wing's lift distribution and explain why aspect ratio governs efficiency
- [ ] Estimate boundary-layer thickness and skin-friction drag for laminar and turbulent flow
- [ ] Predict flow separation and stall from the pressure gradient along a surface
- [ ] Assemble an aircraft's drag polar from skin-friction, form, and induced-drag contributions
- [ ] Use isentropic and stagnation relations to analyze compressible flow and size a nozzle
- [ ] Solve normal, oblique-shock, and Prandtl–Meyer expansion problems for supersonic flow
- [ ] Estimate the critical Mach number and explain drag divergence, wave drag, and why wings are swept

## Modules

### Module 1: Aerodynamic Forces & Potential Flow

Set the vocabulary of forces and coefficients, then build the idealized inviscid, incompressible flow field that first explains lift — culminating in circulation and Kutta–Joukowski.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Forces, moments & coefficients | Nondimensionalize any air load and know what it scales with | lift/drag/moment, dynamic pressure $q_\infty$, $C_L,C_D,C_M$, Reynolds & Mach dependence |
| 1.2 | Potential-flow foundations | Reduce the governing equations to Laplace and exploit superposition | irrotationality, velocity potential $\phi$, stream function $\psi$, $\nabla^2\phi=0$, linearity |
| 1.3 | Elementary flows | Assemble flows from a small kit of singularities | uniform stream, source/sink, doublet, superposition |
| 1.4 | Flow over a cylinder & pressure coefficient | Get the surface pressure on a body and confront a paradox | non-lifting cylinder, $C_p=1-(V/V_\infty)^2$, d'Alembert's paradox |
| 1.5 | Vortex, circulation & Kutta–Joukowski | Add a vortex to make lift, and prove where lift comes from | circulation $\Gamma$, lifting cylinder, $L'=\rho_\infty V_\infty \Gamma$, Magnus effect |

**Boss problem 1:** A uniform stream $V_\infty$ past a cylinder of radius $R$ carries circulation $\Gamma$. Locate the stagnation points as a function of $\Gamma$, find the value of $\Gamma$ at which the two stagnation points merge on the surface, and compute the lift per span at that condition. Then integrate the surface pressure to confirm the Kutta–Joukowski result and explain why the drag integrates to zero.

### Module 2: Airfoils & Finite Wings

Turn circulation into a predictive theory of real lifting surfaces: the Kutta condition fixes $\Gamma$, thin-airfoil theory gives lift and moment, and lifting-line theory extends it to wings of finite span — with induced drag as the price of lift.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Airfoil geometry & the Kutta condition | Name airfoil parts and fix circulation with a physical condition | chord, camber, thickness, angle of attack, Kutta condition, trailing-edge flow |
| 2.2 | The vortex sheet & thin-airfoil equation | Model an airfoil as a vortex sheet and write its governing integral | vortex sheet $\gamma(x)$, fundamental equation, coordinate transform $x=\tfrac{c}{2}(1-\cos\theta)$ |
| 2.3 | Symmetric thin airfoil | Derive the $2\pi$ lift slope and the quarter-chord result | $c_l = 2\pi\alpha$, $c_{m,c/4}=0$, center of pressure at $c/4$ |
| 2.4 | Cambered airfoil & aerodynamic center | Handle camber via Fourier modes and locate the aerodynamic center | Fourier coefficients $A_0,A_n$, zero-lift angle, $c_{m,c/4}$, aerodynamic center |
| 2.5 | Finite wings: downwash & lifting-line theory | Explain how trailing vortices tilt the lift and set up Prandtl's equation | trailing vortices, downwash, induced angle $\alpha_i$, lifting-line integro-differential equation |
| 2.6 | Elliptical loading, induced drag & aspect ratio | Compute induced drag and see why span efficiency rules | elliptical lift distribution, $C_{D,i}=C_L^2/(\pi e\,AR)$, aspect ratio, span efficiency |

**Boss problem 2:** A wing has a symmetric airfoil, aspect ratio $AR=8$, span efficiency $e=0.9$, and a 2-D lift-curve slope of $2\pi$ per radian. (a) Correct the lift-curve slope for finite span and find $C_L$ at $\alpha=5^\circ$. (b) Compute the induced drag coefficient there. (c) Now halve the aspect ratio to 4 and recompute both — by what factor does induced drag change at the *same* $C_L$, and by what factor at the *same* geometric $\alpha$? Explain the difference physically.

### Module 3: Boundary Layers & Viscous Drag

Reintroduce viscosity where it lives — a thin layer on the surface. This layer sets skin-friction drag, decides laminar vs. turbulent, and, when it separates, causes stall and pressure drag that inviscid theory can never see.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The boundary-layer concept & laminar skin friction | Estimate layer thickness and laminar friction from Blasius | boundary-layer approximation, $\delta \sim x/\sqrt{Re_x}$, Blasius solution, $c_f$ |
| 3.2 | Integral thicknesses & momentum-integral method | Get drag from a control-volume balance without solving the PDE | displacement thickness $\delta^*$, momentum thickness $\theta$, von Kármán momentum integral |
| 3.3 | Transition & turbulent boundary layers | Predict where flow trips and how turbulent friction differs | transition Reynolds number, turbulent profile, turbulent $c_f$, roughness |
| 3.4 | Adverse gradients, separation, stall & the drag polar | Predict separation and assemble total drag | adverse pressure gradient, separation, stall, form/pressure drag, drag polar $C_D=C_{D,0}+C_L^2/(\pi e\,AR)$ |

**Boss problem 3:** A flat-plate wing section of chord $c=1.5\text{ m}$ flies at $V_\infty=60\text{ m/s}$ in sea-level air. (a) Compute the chord Reynolds number and locate the laminar-to-turbulent transition point assuming $Re_{x,\text{tr}}=5\times10^5$. (b) Estimate the average skin-friction drag coefficient treating the plate as laminar up to transition and turbulent after. (c) The airfoil is then flown at high $\alpha$ and the upper-surface flow separates at 40% chord — explain qualitatively how $C_L$ and $C_D$ change, and which term of the drag polar now dominates.

### Module 4: Compressible & Supersonic Flow

At high speed, density stops being constant and the flow can carry shocks and expansions. Build the gas-dynamics toolkit — isentropic relations, shocks, nozzles, expansion fans — and use it to explain transonic drag rise and supersonic wing design.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Compressibility, sound speed & the energy equation | Know when compressibility matters and carry energy along a streamline | Mach number, $a=\sqrt{\gamma RT}$, compressible energy equation, stagnation enthalpy |
| 4.2 | Isentropic & stagnation relations | Relate local and stagnation properties through Mach number | isentropic $p/p_0$, $T/T_0$, $\rho/\rho_0$ vs. $M$, stagnation state |
| 4.3 | Normal shock waves | Jump across a normal shock and quantify the losses | Rankine–Hugoniot, $M_2(M_1)$, stagnation-pressure loss, entropy rise |
| 4.4 | Oblique shocks & Prandtl–Meyer expansion | Turn supersonic flow into or away from itself | $\theta$–$\beta$–$M$ relation, oblique shock, expansion fan, Prandtl–Meyer function $\nu(M)$ |
| 4.5 | Quasi-1-D nozzle flow | Size a converging–diverging nozzle and read its operating states | area–Mach relation, choking, throat, over/underexpansion |
| 4.6 | Subsonic compressibility & the transonic barrier | Correct incompressible results and explain drag divergence | Prandtl–Glauert rule, critical Mach number, drag-divergence, area rule |
| 4.7 | Supersonic airfoils, wave drag & wing sweep | Predict supersonic lift and the drag that only shocks create | linearized (Ackeret) theory, wave drag, Mach cone, swept wings |

**Boss problem 4:** A thin flat-plate airfoil flies at $M_\infty=2.0$ and angle of attack $\alpha=4^\circ$. (a) Use an oblique shock on the lower surface and a Prandtl–Meyer expansion on the upper surface to find the pressure on each face. (b) From these, compute the section lift and wave-drag coefficients and compare $c_l$ to the linearized (Ackeret) prediction $c_l=4\alpha/\sqrt{M_\infty^2-1}$. (c) Explain where the wave drag comes from physically, and why sweeping the wing back reduces it.

## Sources of truth

- Anderson, *Fundamentals of Aerodynamics* — primary spine for notation, coefficient conventions, and the potential-flow → thin-airfoil → compressible arc.
- Katz & Plotkin, *Low-Speed Aerodynamics* — vortex-sheet and lifting-line rigor.
- Anderson, *Modern Compressible Flow* — shock, expansion, and nozzle conventions in Module 4.
