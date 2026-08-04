# Chemical Reaction Engineering — Syllabus

> Engineering · Tier 2 · ~23 lessons · Prereqs: [engineering-thermodynamics](../engineering-thermodynamics/syllabus.md) · Roadmap id: `reaction-engineering`

## Goal

This course makes you the person who can look at a reaction and say how big a reactor it needs, how hot it will run, and how much of the product you actually want comes out. You will start from the single accounting identity behind every reactor — the mole balance — and specialize it into the four ideal reactors (batch, CSTR, PFR, packed-bed), size them for a target conversion, then let the temperature move via the energy balance and confront the sharp edges: runaway, multiple steady states, and catalyst pores that starve for reactant. It closes with the reality that real reactors are neither perfectly mixed nor perfectly plug-flow, and how residence-time distributions let you predict conversion anyway. It deliberately skips full CFD reactor modeling and detailed process-control loops — here the flow field is idealized and the controller is a set point.

## Dangerous Checklist

When you finish, you can:

- [ ] Write a rate law, identify the reaction order, and use the Arrhenius law to get $k$ at any temperature
- [ ] Determine a rate law and rate constant from concentration–time or reaction-rate data
- [ ] Start from the general mole balance and derive the design equation for a batch, CSTR, PFR, or packed-bed reactor
- [ ] Size a reactor — or a train of reactors in series — for a target conversion using a Levenspiel plot
- [ ] Build a stoichiometric table and express every concentration as a function of conversion, including gas-phase volume change
- [ ] Account for pressure drop in a packed-bed reactor with the Ergun equation
- [ ] Choose the reactor type and feed conditions that maximize yield and selectivity in series and parallel reactions
- [ ] Write and solve the reactor energy balance for adiabatic operation and for operation with heat exchange
- [ ] Locate and classify the multiple steady states of a CSTR and judge which are stable
- [ ] Derive a Langmuir–Hinshelwood rate law from an assumed surface mechanism and identify the rate-limiting step
- [ ] Compute a Thiele modulus and effectiveness factor and diagnose internal- vs. external-diffusion limitation
- [ ] Read a reactor's residence-time distribution and use it to predict conversion in a nonideal reactor

## Modules

### Module 1: Rate Laws & the Ideal Reactors

Before you can size anything you need two ingredients: how fast the reaction goes (the rate law) and the bookkeeping identity that every reactor obeys (the mole balance). This module builds both, then specializes the one balance into the four ideal reactors.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The rate of reaction & the rate law | Define $-r_A$ unambiguously and write a power-law rate law | reaction rate per volume, order, molecularity, elementary vs. non-elementary, rate constant $k$ |
| 1.2 | Arrhenius & the temperature dependence of rate | Get $k(T)$ from an Arrhenius fit and interpret $E$ | Arrhenius law, activation energy $E$, pre-exponential $A$, linearized $\ln k$ vs. $1/T$ |
| 1.3 | The general mole balance | Write the one balance that every reactor is a special case of | system boundary, in − out + generation = accumulation, $\int r_A\,dV$ |
| 1.4 | The batch reactor | Derive and integrate the batch design equation | no in/out, $N_A$, $dX/dt$, constant vs. variable volume, batch time |
| 1.5 | The CSTR | Derive the algebraic CSTR design equation and the space time | perfect mixing, exit = interior, space time $\tau$, $V = F_{A0}X/(-r_A)$ |
| 1.6 | The PFR & the packed-bed reactor | Derive the differential design equation for tubular and catalytic reactors | plug flow, differential volume, catalyst weight $W$, $-r_A'$ per mass of catalyst |

**Boss problem 1:** A liquid-phase first-order reaction $A \to B$ with $k = 0.23\ \text{min}^{-1}$ is fed at $v_0 = 10\ \text{L/min}$ and $C_{A0} = 2\ \text{mol/L}$ and taken to $X = 0.80$. Find the volume of (a) a CSTR and (b) a PFR, and explain the ratio. *(Target: $F_{A0}=20$ mol/min. CSTR $V = \tfrac{v_0}{k}\tfrac{X}{1-X} = \tfrac{10}{0.23}(4) \approx 174$ L. PFR $V = \tfrac{v_0}{k}\ln\tfrac{1}{1-X} = 43.5\ln 5 \approx 70$ L. The CSTR is ~2.5× larger because it operates entirely at the low exit rate, while the PFR enjoys high rates near the inlet.)*

### Module 2: Conversion, Sizing & Multiple Reactions

Now turn the design equations into numbers. Recast everything in terms of conversion $X$, size reactors graphically, handle gas-phase volume change and pressure drop, extract rate laws from data, and — the payoff — engineer for the product you *want* when more than one reaction competes.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Conversion & the design equations | Rewrite all four reactors in terms of $X$ | conversion $X$, $F_{A0}$, design equations in $X$, reaction rate as $-r_A(X)$ |
| 2.2 | Reactor sizing with Levenspiel plots | Size single reactors and reactors in series graphically | $F_{A0}/(-r_A)$ vs. $X$, area = volume, CSTR-then-PFR sequencing, reactors in series |
| 2.3 | Stoichiometry: concentration as a function of conversion | Build a stoichiometric table, including gas-phase expansion | stoichiometric table, $\Theta_i$, expansion factor $\varepsilon = y_{A0}\delta$, $C_i(X)$ |
| 2.4 | Isothermal design & pressure drop in packed beds | Couple the mole balance to the Ergun equation for a PBR | isothermal PBR, pressure ratio, Ergun equation, $dp/dW$, effect of $\Delta P$ on $X$ |
| 2.5 | Analysis of rate data | Determine reaction order and $k$ from experimental data | differential (finite-difference) method, integral method, method of initial rates, linear/nonlinear regression |
| 2.6 | Multiple reactions: yield & selectivity | Pick reactor and conditions to favor the desired product | series vs. parallel, instantaneous & overall selectivity, yield, tuning $C_A$ and $T$ |

**Boss problem 2:** The gas-phase reaction $A \to B + C$ (elementary, $-r_A = kC_A$, $k = 0.1\ \text{s}^{-1}$) runs isothermally and isobarically in a PFR. Pure $A$ enters at $C_{A0} = 0.2\ \text{mol/L}$, $v_0 = 2\ \text{L/s}$. Find the PFR volume for $X = 0.60$, and compare to the volume you'd predict ignoring the mole change. *(Target: $\delta = 1$, $y_{A0}=1$, so $\varepsilon = 1$; $C_A = C_{A0}\tfrac{1-X}{1+\varepsilon X}$. $V = \tfrac{v_0}{k}\int_0^{0.6}\tfrac{1+X}{1-X}\,dX = 20\big[-X - 2\ln(1-X)\big]_0^{0.6} = 20(1.233) \approx 24.7$ L, vs. $20\ln 2.5 \approx 18.3$ L with $\varepsilon=0$. Expansion dilutes $A$, so the reactor must be ~35% bigger.)*

### Module 3: Nonisothermal Reactors & the Energy Balance

Real reactions release or absorb heat, and $k$ is exponentially sensitive to $T$ — so temperature and conversion are coupled and must be solved together. This module adds the energy balance, walks through adiabatic and heat-exchanged operation, and meets the two dangers that emerge: multiple steady states and thermal runaway.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The reactor energy balance | Derive the steady-flow energy balance for a reactor | $\Delta H_{rx}(T)$, heat of reaction, $\sum \Theta_i C_{p,i}$, $\dot Q - \dot W_s$, coupling of $T$ and $X$ |
| 3.2 | Adiabatic reactor operation | Solve the coupled $X$–$T$ problem with no heat exchange | adiabatic energy-balance line, $T = T_0 + \tfrac{(-\Delta H_{rx})X}{\sum\Theta_i C_{p,i}}$, adiabatic $\Delta T$ |
| 3.3 | Reactors with heat exchange | Add a coolant/heating jacket and solve $T(V)$ along the reactor | $Ua(T_a-T)$, co- vs. counter-current, hot spots, interstage cooling |
| 3.4 | Multiple steady states in the CSTR | Find and interpret the intersections of heat generated vs. removed | $G(T)$ vs. $R(T)$, ignition–extinction, van Heerden diagram, hysteresis |
| 3.5 | Stability & runaway | Judge which steady states are stable and when a reactor runs away | slope condition for stability, thermal runaway, sensitivity, safe operating envelope |

**Boss problem 3:** A liquid-phase exothermic reaction $A \to B$ ($-r_A = kC_A$) runs adiabatically with feed at $T_0 = 300$ K and $C_{A0} = 2$ M. Take $\Delta H_{rx} = -40{,}000\ \text{J/mol}$ and $\sum\Theta_i C_{p,i} = 200\ \text{J/(mol·K)}$. (a) What is the adiabatic temperature rise at complete conversion, and the exit temperature at $X = 0.70$? (b) At that temperature $k = 1.5\ \text{min}^{-1}$; find the CSTR volume for $X=0.70$ at $v_0 = 5$ L/min. *(Target: $\Delta T_{ad} = 40{,}000/200 = 200$ K, so $T(X{=}1)=500$ K and $T(0.70)=300+200(0.7)=440$ K. CSTR $V = \tfrac{v_0 X}{k(1-X)} = \tfrac{5(0.7)}{1.5(0.3)} \approx 7.8$ L. The lesson: read $T$ off the energy balance, then use it to evaluate $k$ in the mole balance.)*

### Module 4: Catalysis, Diffusion & Nonideal Reactors

Most industrial reactions run on solid catalysts, where the rate law comes from surface chemistry and the reactant must first diffuse into a porous pellet. Then the flow itself misbehaves. This module derives heterogeneous rate laws, quantifies diffusion limits with the Thiele modulus, and uses the residence-time distribution to predict conversion when a reactor is neither ideal reactor.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Catalysis & the Langmuir adsorption isotherm | Model coverage of a surface and read an adsorption isotherm | active sites, adsorption/desorption equilibrium, Langmuir isotherm, fractional coverage $\theta$ |
| 4.2 | Heterogeneous rate laws & rate-limiting steps | Build an LHHW rate law from a surface mechanism | adsorption–surface reaction–desorption, rate-limiting step, LHHW form, dual-site vs. single-site |
| 4.3 | Internal diffusion: the Thiele modulus & effectiveness factor | Quantify how pore diffusion throttles a catalytic rate | effective diffusivity, Thiele modulus $\phi$, effectiveness factor $\eta$, reaction- vs. diffusion-limited pellet |
| 4.4 | External mass transfer & the disguise of kinetics | Add the film resistance and see how diffusion hides the true kinetics | mass-transfer coefficient, external film, falsified order & activation energy, overall rate |
| 4.5 | Residence-time distribution | Measure and characterize how long fluid actually stays in a reactor | tracer pulse/step, $E(t)$, $F(t)$, mean residence time, variance, ideal-reactor RTDs |
| 4.6 | Nonideal reactor models & a taste of bio/polymer reactors | Predict conversion in a real reactor and meet two specialized reactors | tanks-in-series, dispersion model, segregation vs. maximum mixedness; Monod kinetics, chain polymerization |

**Boss problem 4:** A first-order catalytic reaction runs in spherical porous pellets of radius $R = 0.5$ cm with volumetric rate constant $k = 2\ \text{s}^{-1}$ and effective diffusivity $D_e = 5\times10^{-3}\ \text{cm}^2/\text{s}$. Compute the Thiele modulus and the effectiveness factor $\eta = \tfrac{3}{\phi^2}(\phi\coth\phi - 1)$, and say whether the pellet is diffusion-limited. *(Target: $\phi = R\sqrt{k/D_e} = 0.5\sqrt{400} = 10$. $\coth 10 \approx 1$, so $\eta = \tfrac{3}{100}(10 - 1) = 0.27$. With $\phi \gg 1$ and $\eta \approx 3/\phi \ll 1$, the pellet is strongly internal-diffusion-limited — the core is starved of reactant, so only a shell reacts and making the catalyst more active would barely help.)*

## Sources of truth

- **Fogler, *Elements of Chemical Reaction Engineering*** — the primary spine: notation ($X$, $\varepsilon$, $-r_A'$), the mole-balance-first ordering, stoichiometric tables, LHHW rate laws, the Thiele/effectiveness treatment, and the CRE Web modules.
- **Levenspiel, *Chemical Reaction Engineering*** — for graphical reactor sizing, residence-time distribution, and the nonideal-reactor (tanks-in-series / dispersion) models.
- **Davis & Davis, *Fundamentals of Chemical Reaction Engineering*** — for a cleaner derivation of heterogeneous kinetics and diffusion–reaction in catalysts.
- **Cross-links:** the energy balance and $\Delta H_{rx}$ conventions follow `engineering-thermodynamics`; the elementary kinetics connect to `general-chemistry`; the diffusion, film, and mass-transfer coefficients pair with `transport-phenomena`.
