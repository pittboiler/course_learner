# Classical Thermodynamics — Syllabus

> Physics · Tier 0 · ~11 lessons · Prereqs: [calc-refresher](../calc-refresher/syllabus.md) · Roadmap id: `thermodynamics-physics`

## Goal

Thermodynamics is the physics of heat, work, and equilibrium that you can do knowing *nothing* about atoms — a handful of state variables, two laws, and a lot of leverage. This course makes you fluent in the macroscopic machinery: equations of state, the first and second laws, entropy, engines, the four potentials, the Maxwell relations, and phase transitions. It deliberately skips the microscopic story — where entropy *comes from*, why $PV = Nk_BT$ holds — which is the job of [stat-mech](../stat-mech/syllabus.md). Think of this as the classical prelude that stat-mech will later explain from below, and that [engineering-thermodynamics](../engineering-thermodynamics/syllabus.md) and physical chemistry will build on from above.

## Dangerous Checklist

When you finish, you can:

- [ ] State the zeroth law and explain why "temperature" is even well-defined
- [ ] Use the ideal-gas law (and read a van der Waals correction) to relate $P$, $V$, $T$, and $N$
- [ ] Apply the first law to compute heat, work, and internal-energy change for any process
- [ ] Compute the work done on a $P$–$V$ diagram and read off which process each curve is
- [ ] Distinguish $C_V$ from $C_P$ and derive the adiabat $PV^\gamma = \text{const}$
- [ ] Compute the efficiency of a Carnot engine and explain why no engine beats it
- [ ] State the second law in both the Kelvin and Clausius forms and show they're equivalent
- [ ] Compute the entropy change of a system and its surroundings for reversible and irreversible processes
- [ ] Write down $U$, $H$, $F$, $G$ and pick the right potential for a given set of fixed variables
- [ ] Derive and apply a Maxwell relation to convert an unmeasurable derivative into a measurable one
- [ ] Use the Clausius–Clapeyron relation to predict how a phase boundary bends in the $P$–$T$ plane
- [ ] Explain what the third law says and what a chemical potential measures

## Modules

### Module 1: State, heat, work & the first law

Build the vocabulary — temperature, state variables, heat, work — and nail energy conservation for thermal systems before any "second law" subtlety appears.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Temperature & the zeroth law | Say what temperature *is* and why equilibrium makes it measurable | thermal equilibrium, zeroth law, empirical temperature, thermometers |
| 1.2 | State variables & equations of state | Relate $P,V,T,N$ and know what "state function" buys you | state vs. path functions, ideal-gas law, van der Waals taste, $P$–$V$–$T$ surface |
| 1.3 | Heat, work & the first law | Balance energy for any process; compute $W = \int P\,dV$ | internal energy $U$, heat $Q$, work $W$, sign conventions, $dU = \delta Q - \delta W$ |
| 1.4 | Heat capacities & processes on the $P$–$V$ diagram | Classify isothermal/adiabatic/isobaric/isochoric paths and get the adiabat | $C_V$, $C_P$, $\gamma$, quasi-static processes, $PV^\gamma=\text{const}$ |

**Boss problem 1:** One mole of ideal gas is taken around a closed cycle: (A→B) isothermal expansion at $T_h$ from $V_1$ to $V_2$; (B→C) isochoric cooling to $T_c$; (C→D) isothermal compression back to $V_1$; (D→A) isochoric heating to $T_h$. Sketch the cycle on a $P$–$V$ diagram, compute $Q$ and $W$ for each leg, and verify $\oint dU = 0$ while $\oint \delta Q = \oint \delta W \neq 0$ — making the point that $U$ is a state function but $Q$ and $W$ are not.

### Module 2: Engines, the second law & entropy

Why some energy-conserving processes never happen. Introduce the Carnot bound, promote it into the second law, and let entropy fall out as the bookkeeping device that makes the law an equation.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Heat engines, refrigerators & the Carnot cycle | Diagram an engine and trace Carnot's four reversible strokes | engine/refrigerator, efficiency $\eta$, COP, reservoirs, the Carnot cycle |
| 2.2 | Carnot efficiency & the second law | Prove $\eta \le 1 - T_c/T_h$ and state the law two equivalent ways | Kelvin & Clausius statements, Carnot's theorem, reversibility, equivalence proof |
| 2.3 | Entropy | Compute $\Delta S$ for reversible and irreversible changes | Clausius inequality, $dS = \delta Q_\text{rev}/T$, entropy as a state function, $\Delta S_\text{univ}\ge 0$ |

**Boss problem 2:** A Carnot engine runs between $T_h = 500\,\text{K}$ and $T_c = 300\,\text{K}$. (a) Find its efficiency and the work per 1,000 J drawn from the hot reservoir. (b) Now hot gas is instead brought into direct thermal contact with the cold reservoir until they equilibrate (equal heat capacities $C$); compute the total entropy change and confirm it's positive, then quantify the work you *forfeited* by not running the engine — tying $\Delta S_\text{univ}>0$ directly to lost usable energy.

### Module 3: Potentials, Maxwell relations & phase transitions

Repackage the two laws into four potentials, use the equality of mixed partials to generate the Maxwell relations, then apply the whole apparatus to phases, the third law, and the chemical potential.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The four thermodynamic potentials | Choose $U$, $H$, $F$, or $G$ by which variables you hold fixed | enthalpy $H$, Helmholtz $F$, Gibbs $G$, Legendre transforms, natural variables, extremum principles |
| 3.2 | The Maxwell relations | Turn an unmeasurable derivative into a measurable one | mixed partials, the four Maxwell relations, thermodynamic-square mnemonic |
| 3.3 | Phase transitions & Clausius–Clapeyron | Predict how a coexistence line bends in the $P$–$T$ plane | first-order transitions, latent heat, coexistence, $\frac{dP}{dT}=\frac{L}{T\,\Delta v}$ |
| 3.4 | The third law & chemical potential | State the third law and read $\mu$ as energy per particle | Nernst statement, $S\to 0$ as $T\to 0$, chemical potential $\mu$, $dG=-S\,dT+V\,dP+\mu\,dN$, bridge to [stat-mech](../stat-mech/syllabus.md) |

**Boss problem 3:** Starting from $dU = T\,dS - P\,dV$, (a) derive the Maxwell relation $\left(\frac{\partial S}{\partial V}\right)_T = \left(\frac{\partial P}{\partial T}\right)_V$ and use it to show that for an ideal gas $U$ depends on $T$ alone. (b) Then derive the Clausius–Clapeyron relation from the equality of Gibbs free energies along a coexistence curve, and use it to estimate how much the boiling point of water shifts per kilometer of altitude (latent heat $L \approx 2.26\times10^6\,\text{J/kg}$). This chains a Maxwell relation into a phase-boundary prediction — the two headline tools of the module in one problem.

## Sources of truth

- **Blundell & Blundell, *Concepts in Thermal Physics*** — primary spine for the classical arc, notation, and level of rigor.
- **Callen, *Thermodynamics and an Introduction to Thermostatistics*** — the potentials, Legendre transforms, and Maxwell-relation structure.
- **Fermi, *Thermodynamics*** — for the clean, minimal statements of the laws.
