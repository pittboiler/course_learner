# Power Systems — Syllabus

> Engineering · Tier 2 · ~22 lessons · Prereqs: [circuits](../circuits/syllabus.md), [em-refresher](../em-refresher/syllabus.md) · Roadmap id: `power-systems`

## Goal

Learn how the electric grid is analyzed the way a utility engineer actually analyzes it: as a three-phase, per-unit network of sources, transformers, and lines that must stay balanced, in sync, and protected. You'll model each piece (generator, transformer, transmission line), assemble them into a network, solve for the steady-state voltages and flows, decide which generators should run and at what output, and then break the system on purpose — short it, lose a line, trip a relay — to see whether it survives. The organizing trick throughout is the **per-unit system**, which flattens transformer turns ratios and lets you reason about a nationwide grid with numbers near 1.0.

Deliberately scoped: this is systems analysis, not machine design — you'll model a synchronous machine by its reactance and inertia, not design its windings. Electricity-market structure and energy policy get only the engineering core (economic dispatch, a taste of unit commitment); market bidding, ancillary-service auctions, and regulation are out of scope.

## Dangerous Checklist

When you finish, you can:

- [ ] Compute real, reactive, and complex power in a balanced three-phase system and relate line to phase quantities through the $\sqrt{3}$ factor
- [ ] Convert any quantity to per-unit, change bases correctly, and draw a single-line impedance diagram of a multi-voltage network
- [ ] Model a real transformer with its equivalent circuit and find its voltage regulation and efficiency at a given load
- [ ] Analyze the four three-phase transformer connections (Y-Y, Y-Δ, Δ-Δ, Δ-Y) and account for the 30° phase shift
- [ ] Compute transmission-line R, L, C from conductor geometry and choose the short, medium-π, or long-line model for a given length
- [ ] Find sending-end voltage, regulation, and efficiency of a line using its ABCD parameters
- [ ] Build the bus admittance matrix $Y_{bus}$ and classify each bus as slack, PV, or PQ
- [ ] Solve a small power-flow problem by Gauss–Seidel and set up the Newton–Raphson iteration with its Jacobian
- [ ] Dispatch a set of generators economically using the equal-incremental-cost criterion, and explain what unit commitment adds
- [ ] Compute the fault current for a bolted three-phase fault and, using symmetrical components, for single-line-to-ground and line-to-line faults
- [ ] Explain how overcurrent, differential, and distance relays protect a zone and coordinate with each other
- [ ] Write the swing equation and use the equal-area criterion to judge whether a generator stays in step after a fault

## Modules

### Module 1: Three-phase power and the per-unit system

Establish the two habits every later module assumes: think in balanced three-phase per-phase equivalents, and measure everything in per-unit.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | AC power: real, reactive, and complex | Decompose single-phase power into what does work and what just sloshes | RMS phasors, instantaneous vs. average power, real $P$ / reactive $Q$ / apparent $S$, power factor, complex power $S = VI^*$ |
| 1.2 | Balanced three-phase circuits | Relate line and phase voltages/currents in wye and delta connections | phase sequence, wye vs. delta, line-to-line vs. line-to-neutral, the $\sqrt{3}$ and $30°$ relationships, balanced-load symmetry |
| 1.3 | Three-phase power and the per-phase equivalent | Reduce a balanced three-phase problem to one single-phase circuit | total power $\sqrt{3}\,V_L I_L\cos\varphi$, per-phase (one-line) equivalent, Δ→Y load conversion, neutral carries no current |
| 1.4 | The per-unit system | Convert quantities to per-unit and see why it makes transformers disappear | base voltage/power/current/impedance, choosing bases, per-unit as normalization, why utilities live near $1.0$ pu |
| 1.5 | Base changes and the single-line diagram | Assemble a multi-voltage network into one impedance diagram | base-change formula, common $S_{base}$ across zones, voltage bases set by transformer ratios, one-line and impedance diagrams |

**Boss problem 1:** A balanced, wye-connected load of $Z = 12 + j9\ \Omega$ per phase is supplied from a 208 V (line-to-line), 60 Hz three-phase source. (a) Find the phase voltage, line current, and the total real, reactive, and apparent power. (b) Find the power factor and state whether it is leading or lagging. (c) On bases $S_{base} = 10$ kVA (three-phase) and $V_{base} = 208$ V (line-to-line), express the load impedance in per-unit. *(Answers to check against: $V_\phi = 120.1$ V, $I_L = 8.01$ A; $P = 2.31$ kW, $Q = 1.73$ kvar, $S = 2.88$ kVA; pf $= 0.80$ lagging; $Z_{base} = 4.33\ \Omega$, so $Z = 2.77 + j2.08 = 3.47\angle 36.9°$ pu.)*

### Module 2: Transformers and transmission lines

Model the two devices that move power across the grid, and learn why per-unit was worth the trouble: in per-unit an ideal transformer is just a wire.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The ideal and real transformer | Build the equivalent circuit of a real transformer and refer impedances across it | turns ratio, referred impedance, leakage reactance and winding resistance, magnetizing branch, open- and short-circuit tests |
| 2.2 | Transformer performance in per-unit | Find voltage regulation and efficiency, and watch the turns ratio vanish in per-unit | voltage regulation, efficiency at a load, per-unit transformer = series impedance, tap changing (brief) |
| 2.3 | Three-phase transformer connections | Analyze Y-Y, Y-Δ, Δ-Δ, Δ-Y banks and their phase shift | the four connections, per-phase equivalent of a bank, the $30°$ shift and its sign, why Δ-Y is the workhorse |
| 2.4 | Transmission-line parameters | Compute series R/L and shunt C of a line from its conductor geometry | resistance and skin effect, inductance via GMR/GMD, shunt capacitance, bundling and transposition (intuition) |
| 2.5 | Short and medium-length line models | Choose and solve the short or nominal-π model and find voltage regulation | series-impedance (short) model, nominal-π (medium), ABCD parameters, sending-end voltage and regulation |
| 2.6 | The long line and surge impedance | Handle distributed parameters and read a line's natural loading | distributed-parameter (hyperbolic) solution, characteristic/surge impedance, surge-impedance loading (SIL), when length forces the long model |

**Boss problem 2:** A three-phase, 60 Hz *short* transmission line has series impedance $Z = 5 + j20\ \Omega$ per phase and delivers 40 MW at 66 kV (line-to-line), 0.85 lagging power factor, to the receiving-end bus. (a) Find the line current (magnitude and angle). (b) Find the sending-end line-to-line voltage. (c) Find the voltage regulation. *(Answers to check against: $I = 412\ \text{A}\angle{-31.8°}$; $V_{S,LL} = 77.2$ kV; VR $= 17.0\%$.)*

### Module 3: Power flow and economic dispatch

Assemble the modeled pieces into a network and answer the two operating questions: what are all the voltages and flows, and which generators should carry the load.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The bus admittance matrix | Build $Y_{bus}$ from a one-line diagram and write the network equation | node analysis on a power network, $I = Y_{bus}V$, self- and mutual admittances, sparsity of $Y_{bus}$ |
| 3.2 | The power-flow problem and bus types | State the nonlinear power-flow equations and classify every bus | injected power in terms of $Y_{bus}$, slack / PV / PQ buses, knowns vs. unknowns, why the equations are nonlinear |
| 3.3 | Gauss–Seidel power flow | Solve a small power-flow case by hand with Gauss–Seidel | iterative voltage update, acceleration factor, convergence behavior, computing slack power and line flows afterward |
| 3.4 | Newton–Raphson power flow | Set up the Newton–Raphson iteration and its Jacobian | mismatch vector, the power-flow Jacobian ($\partial P/\partial\theta$ etc.), quadratic convergence, fast-decoupled variant (brief) |
| 3.5 | Economic dispatch and a taste of unit commitment | Dispatch generators at equal incremental cost and see what commitment adds | cost curves, incremental cost, equal-$\lambda$ criterion, generation limits, penalty factors for losses (brief), unit commitment as the on/off layer |

**Boss problem 3:** *(Power flow)* In a two-bus, per-unit system, bus 1 is the slack ($V_1 = 1.0\angle 0°$) and bus 2 is a PQ bus drawing $S_2 = 0.8 + j0.6$ pu. The connecting line has series impedance $z = 0.02 + j0.08$ pu (neglect shunt). (a) Find $Y_{bus}$. (b) Perform one Gauss–Seidel update of $V_2$ from a flat start $V_2^{(0)} = 1.0\angle 0°$. *(Economic dispatch)* Two units meet a 500 MW load with incremental costs $\lambda_1 = 0.02P_1 + 8$ and $\lambda_2 = 0.04P_2 + 6$ (dollars/MWh), limits 50–400 MW, losses neglected. (c) Find the economic dispatch and the system $\lambda$. *(Answers to check against: $Y_{11}=Y_{22}=2.94 - j11.76$, $Y_{12}=Y_{21}=-2.94 + j11.76$; $V_2^{(1)} = 0.936 - j0.052 = 0.937\angle{-3.18°}$ pu; $\lambda = 14$ dollars/MWh with $P_1 = 300$ MW, $P_2 = 200$ MW.)*

### Module 4: Faults, protection, and stability

Break the system on purpose. Compute the currents a short circuit produces, see how relays isolate it, and decide whether the surviving generators stay in step.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Symmetrical (three-phase) faults | Compute the bolted three-phase fault current from a Thevenin reactance | subtransient/transient/steady reactances, Thevenin equivalent at the fault bus, fault MVA, DC offset (brief) |
| 4.2 | Symmetrical components | Decompose an unbalanced set of phasors into three balanced sequences | positive/negative/zero sequence, the $a$-operator and transformation matrix, sequence impedances of machines and lines |
| 4.3 | Sequence networks and unsymmetrical faults | Connect sequence networks to solve SLG, LL, and LLG faults | building the three sequence networks, series/parallel connection per fault type, single-line-to-ground and line-to-line fault currents |
| 4.4 | Protection and relaying basics | Explain how relays detect a fault and coordinate to isolate the smallest zone | overcurrent / differential / distance relays, protection zones, coordination and time grading, instrument transformers and breakers |
| 4.5 | The swing equation and rotor dynamics | Write the swing equation and read the power–angle relationship | synchronous machine as $E\angle\delta$ behind reactance, inertia constant $H$, power–angle curve $P = \tfrac{EV}{X}\sin\delta$, per-unit swing equation |
| 4.6 | Transient stability and the equal-area criterion | Judge whether a generator survives a fault using equal areas | fault-on and post-fault power curves, accelerating/decelerating areas, critical clearing angle and time, first-swing stability |

**Boss problem 4:** At a fault bus the Thevenin sequence reactances are $X_1 = X_2 = 0.2$ pu and $X_0 = 0.05$ pu, with prefault voltage $1.0$ pu (resistances and prefault load neglected). (a) Find the per-unit fault current for a bolted three-phase fault. (b) Find the per-unit fault current for a bolted single-line-to-ground fault. (c) A generator with inertia constant $H = 4$ s carries $P_m = 1.0$ pu when a fault suddenly drops its electrical output to $P_e = 0$; find the initial rotor acceleration in electrical degrees per second squared on a 60 Hz system. *(Answers to check against: (a) $I_f = V/X_1 = 5.0$ pu; (b) $I_f = 3V/(X_1+X_2+X_0) = 6.67$ pu; (c) $\ddot\delta = \tfrac{\omega_s}{2H}P_a = \tfrac{377}{8}(1.0) = 47.1\ \text{rad/s}^2 = 2700$ electrical deg/s$^2$.)*

## Sources of truth

- Glover, Overbye & Sarma, *Power System Analysis and Design* — canonical for per-unit, transformer/line models, power flow, and fault analysis conventions.
- Bergen & Vittal, *Power Systems Analysis* — for the power-flow formulation and the swing-equation / stability treatment.
- Grainger & Stevenson, *Power System Analysis* — for symmetrical components and the sequence-network fault methods.
