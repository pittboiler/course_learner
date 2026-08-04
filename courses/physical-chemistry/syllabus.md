# Physical Chemistry — Syllabus

> Chemistry · Tier 2 · ~24 lessons · Prereqs: [general-chemistry](../general-chemistry/syllabus.md), [quantum-mechanics](../quantum-mechanics/syllabus.md) · Roadmap id: `physical-chemistry`

## Goal

Rebuild chemistry from its physical foundations: **why** reactions go, how far, and how fast, and **what molecules do** when light hits them. You will move fluently between the macroscopic laws (thermodynamics, phase and reaction equilibria, kinetics) and the microscopic bookkeeping (partition functions, molecular energy levels, spectra) that explains them — the bridge that statistical thermodynamics builds. By the end you can predict spontaneity and equilibrium from tabulated data, read and construct phase diagrams, extract mechanisms and rate constants from kinetic data, and interpret a rotational, vibrational, or electronic spectrum. Deliberately kept out: full electronic-structure methods and computational quantum chemistry (that is `quantum-chemistry`, which this course feeds) and the depth of surface science and heterogeneous catalysis. This is a tier-2 course — it assumes the stoichiometry, bonding, and periodic reasoning of `general-chemistry`, and it leans hard on `quantum-mechanics` for the particle-in-a-box, oscillator, rotor, and hydrogen-atom results it applies rather than re-derives.

## Dangerous Checklist

When you finish, you can:

- [ ] Decide whether a process is spontaneous at fixed $T,p$ from $\Delta G$, and compute $\Delta G$, $\Delta H$, $\Delta S$ from tabulated data
- [ ] Derive and apply a Maxwell relation to convert an unmeasurable derivative into measurable ones
- [ ] Write the chemical potential of a species and correct it for non-ideality with an activity or fugacity
- [ ] Read a one-component phase diagram and use Clausius–Clapeyron to locate a phase boundary
- [ ] Predict boiling-point elevation, freezing-point depression, and osmotic pressure for a real solution
- [ ] Compute an equilibrium constant from $\Delta_r G^\circ$ and predict how it shifts with temperature via van 't Hoff
- [ ] Determine a rate law and its order from concentration-versus-time data
- [ ] Derive a rate law from a proposed mechanism using the steady-state or pre-equilibrium approximation
- [ ] Extract an activation energy from an Arrhenius plot and interpret it through transition-state theory
- [ ] Fit enzyme data to Michaelis–Menten and read off $K_M$ and $v_{\max}$
- [ ] Build a molecular partition function and turn it into $U$, $S$, and an equilibrium constant
- [ ] Assign lines in a rotational, vibrational, or electronic spectrum and back out bond lengths and force constants

## Modules

### Module 1: Chemical thermodynamics

The laws, the energy that governs spontaneity, and the chemical potential that makes thermodynamics about *substances* — the language for everything that follows.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The first law and enthalpy | Track energy through a chemical system and separate heat from work | state vs path functions, $\Delta U = q + w$, $pV$ work, enthalpy $H$, heat capacities, thermochemistry |
| 1.2 | Entropy and the second law | Say which way a process runs and compute the entropy that decides it | reversibility, $dS = dq_\text{rev}/T$, Clausius inequality, entropy of the surroundings, third law |
| 1.3 | Gibbs and Helmholtz energies | Turn "the universe's entropy increases" into a system-only spontaneity test | $A$ and $G$, spontaneity at fixed $T,V$ vs $T,p$, maximum non-expansion work, $\Delta G^\circ$ |
| 1.4 | Fundamental equations and Maxwell relations | Manipulate thermodynamic derivatives to reach quantities you cannot measure directly | fundamental relation $dU=TdS-pdV$, natural variables, Maxwell relations, thermodynamic equation of state |
| 1.5 | The chemical potential | Extend thermodynamics to composition change and get the driving force for matter flow | partial molar quantities, $\mu_i=(\partial G/\partial n_i)$, $\mu$ of an ideal gas, $dG=-SdT+Vdp+\sum\mu_i dn_i$ |
| 1.6 | Real substances: fugacity and activity | Keep the ideal-gas formulas but make them exact for real systems | departure from ideality, fugacity, activity, activity coefficient, standard states |

**Boss problem 1:** One mole of an ideal gas is taken from $(T_1,p_1)$ to $(T_2,p_2)$. Derive general expressions for $\Delta H$, $\Delta S$, and $\Delta G$ of the change, then evaluate them for isothermal compression from 1 to 10 bar at 298 K. Separately, starting from $G$, prove the Maxwell relation $(\partial S/\partial p)_T=-(\partial V/\partial T)_p$ and use it to show why $(\partial H/\partial p)_T=0$ for an ideal gas.

### Module 2: Phase equilibria, reactions, and solutions

Where the chemical potential earns its keep: equal $\mu$ across a phase boundary, across a solution, and across a reaction arrow.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Phase stability and one-component phase diagrams | Read a $p$–$T$ diagram as a map of which $\mu$ is lowest | phase, phase boundary, triple point, critical point, Gibbs phase rule |
| 2.2 | The Clapeyron and Clausius–Clapeyron equations | Predict the slope of any phase boundary and the vapor-pressure curve | $dp/dT=\Delta S/\Delta V$, latent heat, integrated Clausius–Clapeyron, sublimation vs vaporization |
| 2.3 | Ideal solutions: Raoult's and Henry's laws | Write the chemical potential of a component in a mixture | mixing $\mu_i=\mu_i^*+RT\ln x_i$, Raoult's law, Henry's law, ideal vs ideal-dilute, Gibbs energy of mixing |
| 2.4 | Colligative properties | Compute how a solute shifts boiling, freezing, and osmotic pressure | freezing-point depression, boiling-point elevation, osmotic pressure, van 't Hoff $i$ factor, activity of the solvent |
| 2.5 | Binary phase diagrams | Interpret temperature–composition diagrams and apply the lever rule | liquid–vapor and solid–liquid diagrams, tie lines, lever rule, azeotropes, eutectics |
| 2.6 | Chemical equilibrium and the equilibrium constant | Locate a reaction's resting point from thermodynamic data | reaction Gibbs energy $\Delta_r G$, reaction quotient $Q$, $\Delta_r G^\circ=-RT\ln K$, activities in $K$ |
| 2.7 | Shifting equilibria: temperature, pressure, and van 't Hoff | Predict how $K$ moves when you change the conditions | Le Chatelier quantified, van 't Hoff equation, $\ln K$ vs $1/T$, extracting $\Delta_r H^\circ$ and $\Delta_r S^\circ$ |

**Boss problem 2:** For the equilibrium $\text{N}_2\text{O}_4(g)\rightleftharpoons 2\,\text{NO}_2(g)$ with $\Delta_r G^\circ = 4.73$ kJ/mol at 298 K, compute $K$ and the degree of dissociation at 1 bar total pressure. Then, given $\Delta_r H^\circ=57.2$ kJ/mol, use the van 't Hoff equation to find $K$ at 350 K and state which direction the equilibrium shifted and why. Confirm the pressure dependence of the dissociation is consistent with the change in moles of gas.

### Module 3: Chemical kinetics

Thermodynamics says whether and how far; kinetics says how fast and by what route. From empirical rate laws to mechanisms to the temperature dependence that reveals the barrier.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Rate laws and reaction order | Define reaction rate and determine the rate law from data | rate of reaction, rate constant, order, molecularity, method of initial rates, isolation method |
| 3.2 | Integrated rate laws and half-lives | Predict concentration versus time and read order off a linear plot | zero/first/second-order integrals, half-life, linearized plots, pseudo-first-order kinetics |
| 3.3 | Mechanisms: steady-state and pre-equilibrium | Derive an observed rate law from a proposed multistep mechanism | elementary steps, intermediates, rate-determining step, steady-state approximation, pre-equilibrium |
| 3.4 | Temperature dependence: Arrhenius and transition-state theory | Extract and interpret the activation energy | Arrhenius equation, activation energy, pre-exponential factor, transition state, Eyring equation, $\Delta^\ddagger G$ |
| 3.5 | Catalysis and enzyme kinetics | Explain how catalysts lower barriers and model enzyme rates | catalytic cycle, lowering $E_a$, Michaelis–Menten mechanism, $K_M$ and $v_{\max}$, Lineweaver–Burk, inhibition |

**Boss problem 3:** For the reaction $2\text{NO} + \text{O}_2 \to 2\text{NO}_2$, the proposed mechanism is a fast pre-equilibrium $2\text{NO}\rightleftharpoons \text{N}_2\text{O}_2$ followed by rate-limiting $\text{N}_2\text{O}_2+\text{O}_2\to 2\text{NO}_2$. Derive the overall rate law and show it is third order overall. Then explain how this same rate law could arise from the steady-state approximation on $\text{N}_2\text{O}_2$, and identify the limit in which the two treatments agree. Finally, given rate constants at two temperatures, extract $E_a$ from an Arrhenius plot.

### Module 4: Statistical thermodynamics and molecular spectroscopy

Close the loop: the partition function connects the quantum energy levels of a molecule to the macroscopic thermodynamics of Module 1, and spectroscopy measures those very levels.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | The Boltzmann distribution and the molecular partition function | Count how a molecule spreads its population over its energy levels | Boltzmann distribution, molecular partition function $q$, degeneracy, high- and low-$T$ limits, separability of modes |
| 4.2 | From partition functions to thermodynamics | Turn $q$ into internal energy, entropy, and an equilibrium constant | $U$ and $S$ from $q$, Sackur–Tetrode entropy, molecular vs canonical partition function, $K$ from partition functions |
| 4.3 | Molecular energy levels: box, oscillator, and rotor | Assemble the translational, vibrational, and rotational levels a molecule actually has | particle in a box, harmonic oscillator, rigid rotor, energy-level spacings, mode partition functions (leans on `quantum-mechanics`) |
| 4.4 | The hydrogen atom and atomic spectra | Read atomic line spectra from quantized electronic levels and selection rules | hydrogenic levels, quantum numbers, term symbols, selection rules, spectral series (leans on `quantum-mechanics`) |
| 4.5 | Rotational and vibrational spectroscopy | Extract bond lengths and force constants from microwave and IR spectra | rotational constant $B$, moment of inertia, $\Delta J=\pm1$, vibrational quanta, P/R branches, anharmonicity |
| 4.6 | Electronic spectroscopy | Interpret UV–visible spectra as electronic transitions dressed by vibration | electronic transitions, Franck–Condon principle, vibronic structure, chromophores, fluorescence vs phosphorescence |

**Boss problem 4:** For $^{1}\text{H}^{35}\text{Cl}$, adjacent lines in the rotational spectrum are spaced by $2B$ with $B = 10.59\ \text{cm}^{-1}$. Compute the bond length from the moment of inertia. Then build the vibrational and rotational partition functions at 300 K, decide which modes are effectively frozen and which are active, and use $q$ to estimate the molar rotational contribution to the internal energy. Comment on how the equipartition result emerges in the high-temperature limit.

## Sources of truth

- Atkins & de Paula, *Physical Chemistry* (primary; scope, notation, problem style, and the four-part thermodynamics/equilibria/kinetics/quantum arc)
- McQuarrie & Simon, *Physical Chemistry: A Molecular Approach* (statistical-thermodynamics-first viewpoint and the molecular partition function)
- Levine, *Physical Chemistry* (careful thermodynamic derivations and the chemical potential)
- Engel & Reid, *Physical Chemistry* (kinetics and spectroscopy worked examples)
