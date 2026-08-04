# Circuit Analysis — Syllabus

> Engineering · Tier 0 · ~14 lessons · Prereqs: [calc-refresher](../calc-refresher/syllabus.md), [ode-refresher](../ode-refresher/syllabus.md) · Roadmap id: `circuits`

## Goal

Learn to look at a schematic and *predict what it does* — the voltage at every node, the current in every branch, the power flowing everywhere — using nothing but conservation laws and a handful of models for how components behave. The whole subject is two bookkeeping rules (charge is conserved at a node, energy is conserved around a loop) applied to increasingly interesting elements: first plain resistors, then capacitors and inductors that remember, then everything driven by a sine wave where calculus collapses into complex-number algebra. You'll master the systematic methods (nodal, mesh) and the shortcuts (Thévenin, superposition) that let you replace a tangle of components with a single equivalent, solve first- and second-order transients as the ODEs they are, and analyze AC steady state with phasors and impedance — ending with power, power factor, and a taste of resonance.

Deliberately scoped: this is the linear, lumped-element course. Transistors, op-amps, and semiconductor devices belong to `electronics`; transmission lines and distributed effects (where wavelength matters) are out entirely. Everything here assumes the circuit is small compared to the signal's wavelength, so a wire is just a wire.

## Dangerous Checklist

When you finish, you can:

- [ ] Apply the passive sign convention correctly and compute power absorbed or delivered by any element, checking that a circuit's powers sum to zero
- [ ] Reduce any series–parallel resistor network to one equivalent resistance and find any branch voltage or current with divider rules
- [ ] Write and solve the node-voltage equations for a circuit with multiple sources, including a supernode
- [ ] Write and solve the mesh-current equations for a planar circuit, including a supermesh
- [ ] Use superposition and source transformation to isolate each source's contribution
- [ ] Replace any linear two-terminal network with its Thévenin or Norton equivalent, and pick the load that draws maximum power
- [ ] Write the $i$–$v$ laws for capacitors and inductors and compute the energy each stores
- [ ] Solve any first-order RC or RL circuit from its time constant and initial/final values, without re-deriving the ODE
- [ ] Classify a second-order RLC circuit as over-, critically-, or under-damped and write its natural response
- [ ] Convert a sinusoid to a phasor, compute the impedance of R, L, and C, and solve an AC circuit with complex algebra
- [ ] Compute real, reactive, and apparent power and the power factor of an AC load, and correct the power factor with a parallel capacitor

## Modules

### Module 1: Resistive circuits and the fundamental laws

The entire grammar of circuits in four lessons: what the quantities mean, the one element law (Ohm), and the two conservation laws (Kirchhoff) that everything else is built from.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Charge, current, voltage, power | Say precisely what each quantity is and get every sign right | charge and current ($i=dq/dt$), voltage as energy-per-charge, power $p=vi$, passive sign convention, conservation of power |
| 1.2 | Ohm's law and equivalent resistance | Collapse any series–parallel resistor network to one number | resistance and conductance, Ohm's law, ideal/real sources, series and parallel resistors, short/open circuits |
| 1.3 | Kirchhoff's laws: KCL and KVL | Turn a schematic into equations you can solve | nodes/branches/loops, KCL (charge conservation), KVL (energy conservation), sign bookkeeping around a loop |
| 1.4 | Voltage and current dividers | Read off a branch voltage or current in one line | voltage divider, current divider, when dividers apply, loaded-divider caveat, ladder networks |

**Boss problem 1:** A 12 V source drives $R_1=2\,\Omega$ in series with the parallel combination of $R_2=6\,\Omega$ and $R_3=3\,\Omega$. (a) Find the source current and the voltage across the parallel pair. (b) Use the current divider to find the current in $R_2$. (c) Compute the power in each resistor and the power delivered by the source, and verify they balance. *(Answers to check against: $R_2\|R_3=2\,\Omega$, total $4\,\Omega$, source current $3\,\text{A}$, parallel voltage $6\,\text{V}$; $I_{R_2}=1\,\text{A}$; powers $P_{R_1}=18$, $P_{R_2}=6$, $P_{R_3}=12$, source $=36\,\text{W}$, and $18+6+12=36$ ✓.)*

### Module 2: Systematic analysis and network theorems

Dividers run out fast. Here are the two general algorithms that never do — nodal and mesh — plus the theorems that let you shrink a whole subcircuit to an equivalent before you even start.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Nodal analysis | Solve any circuit by writing KCL at each node | node voltages, reference node, conductance-matrix form, supernode (voltage source between nodes) |
| 2.2 | Mesh analysis | Solve any planar circuit by writing KVL around each loop | mesh currents, KVL loop equations, supermesh (current source between meshes), planar vs. nonplanar |
| 2.3 | Superposition and source transformation | Split a multi-source problem into one-source pieces you can add | linearity, superposition (one source at a time), deactivating sources, source transformation (Thévenin ↔ Norton form) |
| 2.4 | Thévenin, Norton, and maximum power transfer | Replace any two-terminal network with a source and one resistor | Thévenin equivalent ($V_\text{th}$, $R_\text{th}$), Norton equivalent, finding $R_\text{th}$, maximum power transfer $R_L=R_\text{th}$ |

**Boss problem 2:** At node $A$ (measured to ground) three things connect: a 12 V source through a $6\,\Omega$ resistor, a 3 A current source injecting current into $A$, and a $12\,\Omega$ resistor to ground. (a) Find the Thévenin voltage at $A$ by nodal analysis. (b) Confirm it by superposition (12 V source alone, then 3 A source alone). (c) Find $R_\text{th}$, then the load resistance drawing maximum power and that power. *(Answers to check against: KCL $\frac{12-V}{6}+3=\frac{V}{12}\Rightarrow V_\text{th}=20\,\text{V}$; superposition gives $8\,\text{V}+12\,\text{V}=20\,\text{V}$ ✓; $R_\text{th}=6\|12=4\,\Omega$; $R_L=4\,\Omega$, $P_\text{max}=V_\text{th}^2/4R_\text{th}=25\,\text{W}$.)*

### Module 3: Energy storage and transients

Add elements with memory. A capacitor stores charge, an inductor stores flux — and the moment a switch flips, the circuit's response is an ODE you already know how to solve. First order gives an exponential; second order gives the whole damping zoo.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Capacitors and inductors | Write the $i$–$v$ law and stored energy for each, and know what can't jump | capacitance ($i=C\,dv/dt$), inductance ($v=L\,di/dt$), energy $\tfrac12 Cv^2$ and $\tfrac12 Li^2$, continuity of $v_C$ and $i_L$, series/parallel combining |
| 3.2 | First-order circuits: RC and RL transients | Solve any single-storage circuit from three numbers | time constant $\tau=RC$ or $L/R$, natural vs. step response, $x(t)=x(\infty)+[x(0)-x(\infty)]e^{-t/\tau}$, initial and final values |
| 3.3 | Second-order circuits: the RLC response | Classify the damping and write the natural response | characteristic equation, $\alpha=R/2L$ (series), $\omega_0=1/\sqrt{LC}$, over/critical/under-damped, damped frequency $\omega_d$ |

**Boss problem 3:** *(a, first-order)* A 10 V source, $R=5\,\Omega$, and $L=2\,\text{H}$ are in series; the switch closes at $t=0$ with zero initial current. Find $\tau$, the final current, $i(t)$, and $i$ at one time constant. *(b, second-order)* A series RLC circuit has $R=2\,\Omega$, $L=1\,\text{H}$, $C=0.25\,\text{F}$. Find $\alpha$ and $\omega_0$, classify the damping, and write the form of the natural response. *(Answers to check against: (a) $\tau=L/R=0.4\,\text{s}$, $i(\infty)=2\,\text{A}$, $i(t)=2(1-e^{-2.5t})\,\text{A}$, $i(0.4)=2(1-e^{-1})\approx1.26\,\text{A}$; (b) $\alpha=R/2L=1$, $\omega_0=1/\sqrt{LC}=2$, since $\alpha<\omega_0$ it's underdamped with $\omega_d=\sqrt{\omega_0^2-\alpha^2}=\sqrt3\,\text{rad/s}$, so $v(t)=e^{-t}\!\left(A\cos\sqrt3\,t+B\sin\sqrt3\,t\right)$.)*

### Module 4: Sinusoidal steady state and AC power

Drive everything with a sine wave and wait for the transient to die. The steady-state response is another sinusoid, so represent each as a complex phasor — and every derivative becomes a multiplication by $j\omega$. Circuit analysis becomes the algebra of Module 2 with complex impedances, and power splits into the part that does work and the part that just sloshes.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Sinusoids and phasors | Turn a sinusoid into a complex number and back | amplitude/frequency/phase, $\cos(\omega t+\phi)\leftrightarrow$ phasor, complex-number arithmetic, why $d/dt\to j\omega$ in steady state |
| 4.2 | Impedance and phasor circuit analysis | Solve any AC circuit with complex Ohm's law — plus a first look at resonance | impedance of R/L/C ($R,\,j\omega L,\,1/j\omega C$), series/parallel and dividers with impedance, phasor nodal/mesh/Thévenin, resonance $\omega_0=1/\sqrt{LC}$ (taste) |
| 4.3 | AC power: real, reactive, apparent, power factor | Split AC power into working and non-working parts and correct it | instantaneous vs. average power, real $P$, reactive $Q$, apparent $S$ and the power triangle, power factor, correction with a parallel capacitor |

**Boss problem 4:** A source $v(t)=100\cos(1000t)\,\text{V}$ drives a series $R=30\,\Omega$ and $L=40\,\text{mH}$. (a) Find the impedance $Z$ in polar form and the current $i(t)$. (b) Find the real, reactive, and apparent power and the power factor (state leading or lagging). (c) Verify $P=I_\text{rms}^2R$ and $Q=I_\text{rms}^2X$. *(Answers to check against: $Z=30+j40=50\angle 53.13^\circ\,\Omega$; $I=100\angle0^\circ/50\angle53.13^\circ=2\angle{-}53.13^\circ$, so $i(t)=2\cos(1000t-53.13^\circ)\,\text{A}$; $S=\tfrac12 V_mI_m=100\,\text{VA}$, $\text{pf}=\cos53.13^\circ=0.6$ lagging, $P=60\,\text{W}$, $Q=80\,\text{VAR}$; with $I_\text{rms}=\sqrt2\,\text{A}$, $I_\text{rms}^2R=2\cdot30=60$ ✓ and $I_\text{rms}^2X=2\cdot40=80$ ✓.)*

## Sources of truth

- Alexander & Sadiku, *Fundamentals of Electric Circuits* — primary reference for notation, the passive sign convention, and the nodal/mesh/phasor conventions used throughout.
- Nilsson & Riedel, *Electric Circuits* — for the transient-analysis framing (time constant and initial/final-value method).
- Hayt, Kemmerly & Durbin, *Engineering Circuit Analysis* — for the network-theorem treatment (Thévenin/Norton, maximum power transfer).
