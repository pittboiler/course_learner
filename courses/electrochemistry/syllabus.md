# Electrochemistry — Syllabus

> Chemistry · Tier 2 · ~18 lessons · Prereqs: [physical-chemistry](../physical-chemistry/syllabus.md) · Roadmap id: `electrochemistry`

## Goal

Electrochemistry is chemistry with a wire attached: reactions that would normally just trade electrons in a flask are split in two, forced to send those electrons through an external circuit, and thereby made to do — or be driven by — electrical work. The whole subject is one measured quantity, the cell voltage, read at two different depths. Read at equilibrium it is pure thermodynamics — a voltmeter that reports Gibbs energy, and through it the equilibrium constant, via $\Delta G = -nFE$ and the Nernst equation. Read while current flows it becomes kinetics and transport — the voltage now sags below its ideal value by *overpotentials* that encode how fast electrons cross the interface (Butler–Volmer, Tafel) and how fast reactant can diffuse to it (the diffusion layer, the Cottrell equation). You will leave able to balance and stage any redox reaction into a cell, predict its voltage and how concentration moves it, extract rate constants from a Tafel plot, read a cyclic voltammogram, and explain — quantitatively — why a battery droops under load, why a fuel cell wastes a third of its fuel, and why iron rusts where it does. It leans hard on `physical-chemistry` for chemical potential, activity, and $\Delta G$–$K$ thermodynamics, and hands corrosion to `materials-science`/`nuclear-materials` and cell chemistry to energy-systems courses. Deliberately skipped: spectroelectrochemistry and the engineering depth of industrial electrolysis plants.

## Dangerous Checklist

When you finish, you can:

- [ ] Balance any redox reaction by half-reactions in acid or base, and assign oxidation states to name the electron bookkeeping
- [ ] Diagram a galvanic and an electrolytic cell, write its line notation, and label anode/cathode/electron-flow without second-guessing the signs
- [ ] Compute a standard cell EMF from a table of reduction potentials and relate it to the electrochemical series
- [ ] Convert between $E^\circ$, $\Delta G^\circ$, and the equilibrium constant $K$, and pull $\Delta S$ and $\Delta H$ from the temperature dependence of a cell
- [ ] Apply the Nernst equation to predict how concentration, pH, and partial pressure shift a cell voltage — including a concentration cell that runs on nothing but a gradient
- [ ] Use Faraday's laws to convert between charge passed and moles reacted or mass deposited
- [ ] Explain the electrical double layer and why the interface behaves like a capacitor in series with a reaction
- [ ] Write the Butler–Volmer equation, interpret the exchange current density and transfer coefficient, and take its Tafel and linear limits
- [ ] Read a Tafel plot to extract $j_0$ and $\alpha$, and separate activation, concentration, and ohmic overpotential in a measured polarization curve
- [ ] Predict a diffusion-limited current, apply the Cottrell equation to a potential step, and estimate diffusion-layer thickness
- [ ] Interpret a cyclic voltammogram — peak positions, separations, and reversibility — for a simple redox couple
- [ ] Analyze real systems quantitatively: battery energy density and voltage droop, fuel-cell efficiency, and the mixed-potential picture of corrosion

## Modules

### Module 1: Redox, cells & the thermodynamics of voltage

Build the cell from scratch and learn to read its voltage as a thermometer for Gibbs energy — the equilibrium half of electrochemistry.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Redox & balancing half-reactions | Split any redox reaction into balanced oxidation and reduction halves | oxidation states, oxidant/reductant, half-reactions, electron/charge/mass balance, balancing in acid vs base |
| 1.2 | Galvanic & electrolytic cells; Faraday's laws | Assemble both cell types, write line notation, and count charge into moles | anode/cathode by definition, spontaneous vs driven cells, cell notation $\text{Zn}\mid\text{Zn}^{2+}\parallel\text{Cu}^{2+}\mid\text{Cu}$, salt bridge, Faraday's laws $Q=nF\xi$ |
| 1.3 | Electrode potentials, the SHE & the series | Rank electrodes by a single reference and predict cell direction | half-cell potential, standard hydrogen electrode, standard reduction potentials $E^\circ$, sign conventions (IUPAC), the electrochemical series |
| 1.4 | Cell EMF, Gibbs energy & the equilibrium constant | Turn a voltage into $\Delta G^\circ$ and $K$, and back | $\Delta G=-nFE$, cell EMF $E^\circ_{\text{cell}}=E^\circ_{\text{cat}}-E^\circ_{\text{an}}$, spontaneity from sign of $E$, $\ln K = nFE^\circ/RT$ |
| 1.5 | The Nernst equation & concentration cells | Predict how concentration, pH, and pressure move a cell voltage | Nernst $E=E^\circ-\frac{RT}{nF}\ln Q$, the $0.0592/n$ shortcut at 298 K, concentration cells, pH/pressure dependence, $\Delta S,\Delta H$ from $\partial E/\partial T$ |

**Boss problem 1:** For the cell $\text{Zn}\mid\text{Zn}^{2+}(0.10\ \text{M})\parallel\text{Cu}^{2+}(1.0\ \text{M})\mid\text{Cu}$ with $E^\circ(\text{Cu}^{2+}/\text{Cu})=+0.34$ V and $E^\circ(\text{Zn}^{2+}/\text{Zn})=-0.76$ V ($n=2$, $T=298$ K): (a) write the two half-reactions and find $E^\circ_{\text{cell}}$ and $\Delta G^\circ$. (b) Find the equilibrium constant $K$. (c) Use the Nernst equation to get the actual EMF at the stated concentrations, and say whether the dilution of $\text{Zn}^{2+}$ helped or hurt. *(Solve it yourself first — $E^\circ=1.10$ V; $\Delta G^\circ=-nFE^\circ\approx-212$ kJ/mol; $\ln K=nFE^\circ/RT\approx85.7\Rightarrow K\approx1.6\times10^{37}$; $Q=0.10\Rightarrow E=1.10-\tfrac{0.0592}{2}\log(0.10)=1.13$ V, so lowering $[\text{Zn}^{2+}]$ helps.)*

### Module 2: Electrode kinetics & overpotential

Let current flow. The voltage now falls short of the Nernst value, and the shortfall is a rate law for electrons crossing the interface.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The interface & the electrical double layer | Picture the charged interface and why it stores charge like a capacitor | electrical double layer, Helmholtz/Gouy–Chapman/Stern pictures, double-layer capacitance, potential drop across the interface, ideally polarizable electrode |
| 2.2 | From equilibrium to current: activation & $j_0$ | See the resting electrode as balanced forward/back currents and define exchange current | dynamic equilibrium at $E_{\text{eq}}$, exchange current density $j_0$, activation barrier and its potential dependence, transfer coefficient $\alpha$ (Arrhenius $\leftrightarrow$ Tafel bridge) |
| 2.3 | The Butler–Volmer equation | Write the master current–overpotential law and read each term | overpotential $\eta=E-E_{\text{eq}}$, Butler–Volmer $j=j_0[e^{\alpha_a F\eta/RT}-e^{-\alpha_c F\eta/RT}]$, anodic vs cathodic branches, symmetry factor |
| 2.4 | Overpotential regimes & Tafel analysis | Take the high- and low-field limits and mine a Tafel plot for kinetics | Tafel high-field limit, Tafel slope $b=2.303RT/\alpha F$, Tafel intercept $\to j_0$, linear low-field limit, charge-transfer resistance $R_{ct}=RT/nFj_0$ |

**Boss problem 2:** A one-electron electrode ($n=1$) has $j_0=1.0\times10^{-3}\ \text{A/cm}^2$, anodic transfer coefficient $\alpha_a=0.5$, at $T=298$ K. (a) Compute the anodic Tafel slope $b$ in mV/decade. (b) Using the high-field (Tafel) approximation, find the anodic current density at $\eta=+0.20$ V. (c) What overpotential drives $j=0.10\ \text{A/cm}^2$? *(Solve it yourself first — $b=2.303RT/\alpha_aF\approx118$ mV/dec; $j=j_0e^{\alpha_aF\eta/RT}=10^{-3}e^{3.89}\approx0.049\ \text{A/cm}^2\approx49$ mA/cm²; $\eta=b\log(j/j_0)=0.118\times2=0.237$ V.)*

### Module 3: Mass transport & voltammetry

Even infinitely fast electron transfer can't beat the speed limit of getting reactant to the surface. This module is the physics of the diffusion layer and the experiments that read it.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Three modes of transport & the diffusion layer | Separate diffusion, migration, and convection and picture the Nernst diffusion layer | flux and the three transport modes, supporting electrolyte (killing migration), Nernst diffusion layer $\delta$, concentration profile at the surface |
| 3.2 | Diffusion-limited current & concentration overpotential | Find the current ceiling set by transport and the voltage penalty near it | limiting current density $j_L=nFDC^*/\delta$, surface depletion, concentration (mass-transport) overpotential, when transport vs kinetics controls |
| 3.3 | Mixed control: kinetics + transport together | Combine Butler–Volmer with a finite diffusion layer into one polarization curve | total overpotential $\eta_{\text{act}}+\eta_{\text{conc}}+\eta_{\text{ohmic}}$, the full polarization curve, kinetic vs limiting-current regions (Koutecký–Levich taste) |
| 3.4 | Potential-step chronoamperometry & the Cottrell equation | Predict the current after a step and the diffusion layer's growth in time | potential step to diffusion control, Cottrell $i(t)=nFAC^*\sqrt{D/\pi t}$, $i\propto t^{-1/2}$, growing $\delta(t)=\sqrt{\pi Dt}$, chronoamperometry |
| 3.5 | Linear-sweep & cyclic voltammetry | Read a voltammogram — peaks, separation, and reversibility | LSV/CV, sweeping potential, peak current & Randles–Ševčík (scaling), peak separation $\Delta E_p\approx59/n$ mV for a reversible couple, diagnosing reversibility |

**Boss problem 3:** A planar electrode ($A=1\ \text{cm}^2$) is stepped to a diffusion-limiting potential in a quiescent solution: $n=1$, $D=1.0\times10^{-5}\ \text{cm}^2/\text{s}$, bulk concentration $C^*=1.0$ mM $=1.0\times10^{-6}\ \text{mol/cm}^3$. (a) Use the Cottrell equation to find the current at $t=1$ s. (b) What is the current at $t=4$ s, and why? (c) Estimate the diffusion-layer thickness at $t=1$ s. *(Solve it yourself first — $i(1)=nFAC^*\sqrt{D/\pi t}=96485\times10^{-6}\sqrt{10^{-5}/\pi}\approx1.7\times10^{-4}$ A $=172\ \mu$A; at $t=4$ s it halves to $\approx86\ \mu$A since $i\propto t^{-1/2}$; $\delta=\sqrt{\pi Dt}\approx5.6\times10^{-3}$ cm $\approx56\ \mu$m.)*

### Module 4: Electrochemistry in the wild

Point the whole machine at real devices: storage, conversion, decay, and deposition. Every "loss" here is an overpotential or a transport limit you can now name.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Batteries: primary, secondary & energy density | Read a discharge curve and estimate what a cell can store and deliver | primary vs secondary cells, theoretical vs practical energy density (Wh/kg), C-rate, IR droop and polarization under load, lithium-ion in one page |
| 4.2 | Fuel cells & electrolyzers | Trace the hydrogen round-trip and account for every lost volt | $\text{H}_2/\text{O}_2$ cell, thermodynamic efficiency $\Delta G/\Delta H$, voltage efficiency, activation/ohmic/transport losses, electrolysis as the cell run backwards |
| 4.3 | Corrosion & the mixed potential | Explain why metals dissolve and predict the corrosion rate | mixed-potential theory, corrosion potential & current from an Evans diagram, galvanic couples, passivation, cathodic/anodic protection (bridge to `materials-science`) |
| 4.4 | Electrodeposition & electroanalytical sensors | Plate metal to spec and turn an electrode into a measuring instrument | Faradaic mass balance for plating, current efficiency & throwing power, amperometric/potentiometric sensors, ion-selective electrodes, reference electrodes |

**Boss problem 4:** A hydrogen–oxygen fuel cell runs $\text{H}_2+\tfrac12\text{O}_2\to\text{H}_2\text{O(l)}$, $E^\circ=1.23$ V, $n=2$, with $\Delta H^\circ=-286$ kJ/mol. (a) Find $\Delta G^\circ$ and the maximum (thermodynamic) efficiency $\Delta G/\Delta H$. (b) The cell actually operates at $0.70$ V under load; give the voltage efficiency and a combined efficiency estimate. (c) How many moles of $\text{H}_2$ does it consume delivering $1.0$ A for $1.0$ hour, and what does the shortfall from $1.23$ V physically represent? *(Solve it yourself first — $\Delta G^\circ=-nFE^\circ\approx-237$ kJ/mol, $\eta_{\text{thermo}}=237/286\approx0.83$; voltage efficiency $0.70/1.23\approx0.57$, combined $\approx0.47$; $n_{\text{H}_2}=Q/nF=3600/(2\times96485)\approx0.019$ mol; the missing $0.53$ V is the sum of activation, ohmic, and concentration overpotentials.)*

## Sources of truth

- **Bard & Faulkner, *Electrochemical Methods*** — kinetics, Butler–Volmer, voltammetry, and the Cottrell/diffusion-layer conventions this course follows.
- **Atkins, *Physical Chemistry*** — the $\Delta G$–$E$–$K$ thermodynamics, Nernst equation, and activity conventions inherited from `physical-chemistry`.
- **Newman & Thomas-Alyea, *Electrochemical Systems*** — transport, migration/diffusion/convection, and mass-transport-limited currents.
- **Bockris & Reddy, *Modern Electrochemistry*** — the double layer and interfacial-structure picture.
