# Statistical Mechanics — Syllabus

> Tier 2 · 26 lessons · Prereqs: [`probability-theory`](../probability-theory/syllabus.md), [`analytical-mechanics`](../analytical-mechanics/syllabus.md) · Roadmap id: `stat-mech`

## Goal

Build the bridge from microscopic mechanics to macroscopic thermodynamics: how the statistics of ~$10^{23}$ degrees of freedom produce temperature, entropy, and pressure, and why the second law is overwhelmingly probable rather than exactly true. Master the three ensembles (microcanonical, canonical, grand canonical) and the partition function as the object that generates all thermodynamics; get the quantum gases (Bose–Einstein, Fermi–Dirac, Planck radiation, degeneracy pressure) that feed quantum mechanics and astrophysics; and understand phase transitions and critical phenomena through the Ising model and the renormalization-group idea. You will be able to write down a partition function, extract thermodynamics from it, and estimate real quantities (heat capacities, condensation temperatures, degeneracy pressures). Deliberately kept lighter: rigorous ergodic theory (motivated, not proven), the full machinery of the renormalization group (conceptual only), transport theory and the Boltzmann equation beyond a first look, and interacting-system techniques past mean field. This is a tier-2 course — it leans on `analytical-mechanics` for phase space and Liouville's theorem, and on `probability-theory` for distributions, the law of large numbers, and the central limit theorem.

## Dangerous Checklist

When you finish, you can:

- [ ] Explain how a macrostate emerges from many microstates, and state the fundamental postulate of equal a priori probabilities
- [ ] Compute the entropy $S=k_B\ln\Omega$ by counting microstates, and derive temperature, pressure, and chemical potential as entropy derivatives
- [ ] Derive the Sackur–Tetrode entropy and resolve the Gibbs paradox
- [ ] State the laws of thermodynamics and use Carnot/Clausius to reason about engines and entropy
- [ ] Construct thermodynamic potentials by Legendre transform and derive Maxwell relations
- [ ] Write the canonical partition function $Z$ and extract energy, entropy, free energy, and heat capacity from $\ln Z$
- [ ] Apply the equipartition theorem and know exactly when it fails
- [ ] Use the grand canonical ensemble and derive the Bose–Einstein and Fermi–Dirac distributions
- [ ] Compute blackbody (Planck) radiation, Fermi degeneracy pressure, and the Bose–Einstein condensation temperature
- [ ] Analyze a phase transition with the van der Waals gas and the Clausius–Clapeyron relation
- [ ] Solve the Ising model in mean-field theory, identify the critical point, and explain universality and the RG idea
- [ ] Set up the Langevin equation and state the fluctuation–dissipation theorem, and connect entropy to information

## Modules

### Module 1: Foundations and the microcanonical ensemble

From Hamiltonian phase space to the statistical postulate, and the entropy that counts microstates.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | From mechanics to statistics | See why $10^{23}$ degrees of freedom demand a statistical description | thermodynamic limit, phase space, Liouville's theorem, coarse-graining, ergodicity idea |
| 1.2 | Microstates, macrostates, and the fundamental postulate | Count the ways a macrostate can be realized | microstate vs macrostate, phase-space volume, equal a priori probabilities, statistical weight $\Omega$ |
| 1.3 | Entropy and the microcanonical ensemble | Define entropy by counting and connect it to the second law | microcanonical ensemble, $S=k_B\ln\Omega$, additivity, the second law as overwhelming probability |
| 1.4 | Temperature, pressure, and chemical potential | Derive the intensive variables from entropy derivatives | $1/T=\partial S/\partial E$, thermal/mechanical/diffusive equilibrium, $p$ and $\mu$ from $S$ |
| 1.5 | The ideal gas microcanonically | Count states for a real system and hit a famous paradox | $N$-particle phase-space volume, Sackur–Tetrode entropy, indistinguishability, Gibbs paradox |

**Boss problem 1:** Two ideal-gas subsystems with fixed total energy are placed in thermal contact; find the most probable energy split by maximizing total $\Omega$, show it corresponds to equal temperatures, and estimate the (astronomically sharp) width of the peak in the thermodynamic limit.

### Module 2: Thermodynamics — the macroscopic laws

The macroscopic scaffolding that statistical mechanics must reproduce.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The laws of thermodynamics | State the four laws and work with state functions | 0th–3rd laws, state functions, exact vs inexact differentials, internal energy |
| 2.2 | Entropy, engines, and the Carnot bound | Reason about heat, work, and irreversibility | reversible/irreversible, Carnot cycle, efficiency bound, Clausius inequality |
| 2.3 | Thermodynamic potentials and Legendre transforms | Switch variables to match what you control | Legendre transform, $U,F,H,G,\Omega$, natural variables, extremum principles |
| 2.4 | Maxwell relations and stability | Extract non-obvious identities and stability conditions | Maxwell relations, response functions ($C_V,C_p,\kappa$), convexity/stability |

**Boss problem 2:** Starting from $dU=TdS-pdV$, construct $F$, $H$, and $G$ by Legendre transform, derive all four Maxwell relations, and use them to prove $C_p-C_V=TV\alpha^2/\kappa_T$ for a general substance.

### Module 3: The canonical and grand canonical ensembles

Let energy (and particles) fluctuate — and watch the partition function generate all of thermodynamics.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The canonical ensemble and the Boltzmann factor | Describe a system in contact with a heat bath | heat bath, Boltzmann factor $e^{-\beta E}$, canonical distribution, $\beta=1/k_BT$ |
| 3.2 | The partition function | Get every thermodynamic quantity from $\ln Z$ | partition function $Z$, $\langle E\rangle=-\partial_\beta\ln Z$, $F=-k_BT\ln Z$, factorization |
| 3.3 | Fluctuations and the equivalence of ensembles | See why the ensembles agree in the thermodynamic limit | energy variance $=k_BT^2C_V$, relative fluctuations $\sim N^{-1/2}$, ensemble equivalence |
| 3.4 | The equipartition theorem | Know when each quadratic mode carries $\tfrac12 k_BT$ | equipartition, quadratic degrees of freedom, heat capacities, breakdown (freeze-out) |
| 3.5 | The grand canonical ensemble | Let particle number fluctuate too | chemical potential, fugacity, grand partition function $\mathcal Z$, grand potential $\Omega$ |

**Boss problem 3:** For $N$ independent quantum harmonic oscillators (the Einstein solid), compute $Z$, the energy, and the heat capacity $C_V(T)$; recover $3Nk_B$ at high $T$ (equipartition) and the exponential freeze-out at low $T$, and say why classical equipartition fails there.

### Module 4: Quantum statistics

Indistinguishable particles change the counting — and produce radiation, white dwarfs, and condensates.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Quantum counting and occupation numbers | Recast statistics in terms of how many particles occupy each mode | indistinguishability, occupation-number representation, bosons vs fermions, single-mode grand ensemble |
| 4.2 | Bose–Einstein and Fermi–Dirac distributions | Derive the two quantum distributions and their classical limit | $\bar n=1/(e^{\beta(\epsilon-\mu)}\mp1)$, Fermi/Bose statistics, Maxwell–Boltzmann limit, density of states |
| 4.3 | The photon gas and blackbody radiation | Derive Planck's law and its consequences | photon gas ($\mu=0$), Planck distribution, Stefan–Boltzmann, Wien, energy density |
| 4.4 | The ideal Fermi gas | Get degeneracy pressure and the electronic heat capacity | Fermi energy/momentum, degeneracy pressure, Sommerfeld expansion, white-dwarf support |
| 4.5 | The ideal Bose gas and condensation | Find the transition where a macroscopic fraction occupies the ground state | Bose–Einstein condensation, critical temperature $T_c$, condensate fraction, $\lambda$-transition |

**Boss problem 4:** Model a white dwarf as a zero-temperature electron gas: derive the nonrelativistic degeneracy pressure $P\propto n^{5/3}$, balance it against gravity to get the mass–radius relation $R\propto M^{-1/3}$, then show the ultrarelativistic $P\propto n^{4/3}$ leads to the Chandrasekhar mass limit.

### Module 5: Interactions, phase transitions, and critical phenomena

Turn on interactions: coexistence, criticality, and the deep idea of universality.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Non-ideal gases: virial expansion and van der Waals | Handle interactions perturbatively and get a liquid–gas model | virial expansion, second virial coefficient, van der Waals equation, Maxwell construction |
| 5.2 | Phase transitions and coexistence | Read a phase diagram and quantify coexistence | first vs continuous transitions, latent heat, coexistence curve, Clausius–Clapeyron |
| 5.3 | The Ising model and mean-field theory | Solve the paradigm magnet approximately and find its critical point | Ising model, mean-field/self-consistency, spontaneous magnetization, critical temperature |
| 5.4 | Critical exponents and universality | Characterize criticality and see why microscopically different systems match | order parameter, critical exponents, universality classes, scaling hypothesis |
| 5.5 | The renormalization-group idea | Understand why scaling works, conceptually | coarse-graining, RG flow, fixed points, relevant/irrelevant couplings |

**Boss problem 5:** Solve the mean-field Ising model: derive the self-consistency equation $m=\tanh(\beta J z\, m + \beta h)$, find the critical temperature $T_c$ at $h=0$, expand near $T_c$ to get the magnetization exponent $\beta=1/2$, and compute the zero-field susceptibility to get $\gamma=1$.

### Module 6: Nonequilibrium and connections

A first look beyond equilibrium, and the information-theoretic meaning of entropy.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 6.1 | Brownian motion and the Langevin equation | Model a particle kicked by its environment and link noise to dissipation | random walk, Langevin equation, diffusion, fluctuation–dissipation theorem, Einstein relation |
| 6.2 | Entropy, information, and the arrow of time | Recast entropy as missing information and resolve Maxwell's demon | Shannon/Gibbs entropy, information, Maxwell's demon, Landauer's principle, arrow of time |

**Boss problem 6:** From the Langevin equation for a free Brownian particle, derive the velocity autocorrelation and the mean-square displacement $\langle x^2\rangle=2Dt$, obtain the Einstein relation $D=k_BT/\gamma$, and explain how it exemplifies the fluctuation–dissipation theorem.

## Sources of truth

- Kardar, *Statistical Physics of Particles* (primary; ensembles, scope, and the modern viewpoint)
- Schroeder, *An Introduction to Thermal Physics* (intuition and worked thermodynamics)
- Reif, *Fundamentals of Statistical and Thermal Physics* (the classic careful development)
- Pathria & Beale, *Statistical Mechanics* (quantum gases and phase transitions); Sethna, *Statistical Mechanics: Entropy, Order Parameters, and Complexity* (information, RG, and the big picture)
