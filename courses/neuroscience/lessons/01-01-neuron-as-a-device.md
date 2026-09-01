# Neuroscience · Lesson 1.1: The neuron as a device

> ⏱ ~15 min · Module 1: The neuron & the action potential · Builds on: [molecular-cell-biology](../../molecular-cell-biology/syllabus.md) · Unlocks: 1.2 (the resting membrane potential)

## Why this matters

Everything in this course is an elaboration of one block diagram, and it is worth installing the diagram before any biology accumulates on top of it. **A neuron collects graded inputs over a dendritic tree, integrates them in space and time, and emits an all-or-none output whose only free parameter is timing.** That is the whole specification. Hodgkin–Huxley ([1.4](01-04-hodgkin-huxley-model.md)) is how the output stage works; cable theory ([1.5](01-05-cable-theory-conduction.md)) is how the wire works; synaptic integration ([2.3](02-03-synaptic-integration.md)) is how the input stage works; plasticity ([4.1](04-01-plasticity-ltp-ltd.md)) is how the input weights change.

The reason to state it as a device rather than a cell is that **the electrical constraints are unusually tight and unusually universal.** One physical fact — the thickness and dielectric constant of a lipid bilayer — fixes a parameter that is essentially the same in a squid axon, a human cortical pyramidal cell, and a plant cell. That parameter, together with how leaky the membrane is, sets the time window over which a neuron can add things up. **A neuron's computational style is set by a capacitor it cannot change and a resistance it can.**

## The idea

**Start with the function, then hang the anatomy on it.**

| Stage | Structure | Signal |
|---|---|---|
| Collect | dendrites | graded, analogue |
| Integrate | dendrites + soma | graded, analogue |
| Decide | axon hillock | threshold comparison |
| Transmit | axon | all-or-none, digital |
| Output | presynaptic terminals | chemical, quantal |

**Dendrites are an input surface, and their job is area.** Take a spherical soma of radius 10 μm: its surface is $4\pi(10)^2 = 1257$ μm². Now give it a dendritic tree of total path length 10 mm and mean diameter 1 μm — modest for a cortical pyramidal cell. The lateral surface is $\pi \times 1 \times 10{,}000 = 31{,}416$ μm², **twenty-five times the soma**, and that ratio is the point: synapses need somewhere to land. A cortical pyramidal cell carries on the order of $10^4$ synapses; a cerebellar Purkinje cell, whose dendritic tree is a flat fan crossed at right angles by a bundle of parallel fibres, carries on the order of $10^5$. **Purkinje morphology is not decoration — it is a wiring diagram that says "sample one input from each of a hundred thousand independent lines."**

**The axon hillock is where the decision happens**, and it happens there because that is where the density of voltage-gated Na⁺ channels is highest. The threshold for regenerative firing is lowest wherever those channels are densest, so **the cell's decision point is set by a channel-density gradient, not by any special geometry.** Everything upstream of the hillock is a continuously-valued vote; everything downstream is a binary commitment.

**The output carries no amplitude information.** Every spike this neuron ever emits looks the same. The only thing it can vary is *when* — so all of the information a neuron transmits lives in spike times, and the whole question of neural coding ([3.1](03-01-transduction-neural-coding.md)) is what to do with that.

**Why the split into two regimes at all?** Because a chemical wire is an appalling conductor. Axoplasm has a resistivity around 100 Ω·cm; copper is $1.7\times10^{-6}$ Ω·cm. **The cytoplasm is about $6\times10^{7}$ times more resistive than a metal wire of the same shape** (P3 does the arithmetic). Over a micron, passive spread is fine and cheap. Over a metre, it is hopeless. So evolution runs analogue where the distances are short and the precision is useful, and switches to a regenerating digital repeater the moment the distance gets long. **The two signalling regimes are one engineering trade-off, made twice.**

## The formal version

### The membrane is a capacitor, and its value is not free

A lipid bilayer is a thin sheet of hydrocarbon — a good insulator — separating two conducting salt solutions. That is a parallel-plate capacitor. Its capacitance per unit area, the **specific membrane capacitance** $c_m$, is

$$c_m = \frac{\varepsilon_0 \varepsilon_r}{d}$$

where $\varepsilon_0 = 8.854\times10^{-12}$ F/m is the permittivity of free space, $\varepsilon_r$ the relative permittivity of the hydrocarbon core, and $d$ its thickness.

*In words: capacitance per square centimetre is set by what the insulator is made of and how thick it is — nothing else.*

Put in the numbers. The acyl-chain core of a phospholipid bilayer is about $d = 2.3$ nm thick, and hydrocarbon has $\varepsilon_r \approx 2.1$:

$$c_m = \frac{(8.854\times10^{-12})(2.1)}{2.3\times10^{-9}\ \text{m}} = 8.08\times10^{-3}\ \text{F/m}^2 = 0.81\ \mu\text{F/cm}^2 .$$

The measured value in real cells is close to $1\ \mu\text{F/cm}^2 = 0.01$ F/m², and the gap is accounted for by the higher-dielectric headgroup region and the embedded protein. **Take $c_m = 1\ \mu\text{F/cm}^2$ and use it everywhere.**

**Here is the claim worth pausing on: every term on the right-hand side is a property of the bilayer, and every cell makes its bilayer out of the same stuff at the same thickness.** So $c_m$ is a biological constant. It does not vary with cell type, species, or physiological state — a squid giant axon and a human cortical neuron agree on it to within tens of percent. **Membrane capacitance is therefore a proxy for membrane area**, which is why patch-clamp capacitance measurements are used to watch vesicles fuse ([2.1](02-01-chemical-synaptic-transmission.md)): each fusion event adds a measurable scrap of area.

### The equivalent circuit

The membrane is a capacitance in parallel with a set of conductance branches, **each conductance in series with its own battery.** The battery is the ion's equilibrium potential — the voltage at which that ion's concentration gradient and the electric field exactly cancel. Its origin is derived in [biophysics 4.4](../../biophysics/lessons/04-04-membrane-potentials-nernst-goldman.md) and applied to real neurons in [1.2](01-02-resting-membrane-potential.md); for now, take it as given that **an ion gradient across a selectively permeable membrane is literally an EMF.**

With one lumped "leak" branch, current conservation at the membrane gives

$$C\,\frac{dV}{dt} \;=\; I_{\text{in}} \;-\; g_L\,(V - E_L)$$

where $V$ is membrane potential (inside minus outside), $C$ the total membrane capacitance, $g_L$ the leak conductance, $E_L$ its reversal potential and $I_{\text{in}}$ any injected or synaptic current.

*In words: current that does not leak out through channels goes into charging the membrane, and charging the membrane is what changes the voltage.*

**This single equation, with the leak replaced by voltage- and time-dependent Na⁺ and K⁺ branches, is the Hodgkin–Huxley model.** Nothing structural changes in [1.4](01-04-hodgkin-huxley-model.md) — only the conductances stop being constants.

### The RC time constant

Set $I_{\text{in}} = 0$ and let $v = V - E_L$. Then $C\dot v = -g_L v$, so

$$v(t) = v(0)\,e^{-t/\tau}, \qquad \boxed{\;\tau = \frac{C}{g_L} = R_m c_m\;}$$

where $R_m$ is **specific** membrane resistance (Ω·cm²) and $c_m$ specific capacitance (F/cm²).

**The area cancels, and this is not an accident.** For a sphere of radius $a$, total capacitance is $c_m \cdot 4\pi a^2$ and input resistance is $R_m /(4\pi a^2)$; their product is $R_m c_m$ regardless of $a$. *In words: $\tau$ is a property of the membrane, not of how much of it there is.* A big neuron and a small one with the same channel density have the same time constant.

With $c_m = 1\ \mu\text{F/cm}^2$ fixed, $\tau$ is set entirely by how leaky the membrane is:

| $R_m$ (Ω·cm²) | $\tau = R_m c_m$ | character |
|---|---|---|
| 1,000 | 1 ms | leaky; a coincidence detector |
| 10,000 | 10 ms | typical cortical neuron |
| 50,000 | 50 ms | tight; a long integrator |

**Operationally, $\tau$ is how long the neuron remembers an input.** An EPSP arriving now has decayed to $e^{-1} = 37$ percent of its peak after one $\tau$. Two inputs separated by $0.5\tau$ still overlap at $e^{-0.5} = 61$ percent; separated by $2\tau$ they overlap at $e^{-2} = 14$ percent and effectively do not sum. **So $\tau$ *is* the temporal summation window**, and a neuron that wants to detect coincidences makes itself leaky on purpose ([2.3](02-03-synaptic-integration.md)).

### The stored energy

The device runs on ion gradients, and the gradients are maintained, not given. The **Na⁺/K⁺-ATPase** exports 3 Na⁺ and imports 2 K⁺ per ATP hydrolysed — net one positive charge out per cycle, so the pump is itself electrogenic and contributes a small hyperpolarising current. **It is the battery charger, and it never stops.**

The bill is enormous. **The human brain is about 2 percent of body mass and consumes about 20 percent of resting metabolic rate**, and the majority of that goes to pumping ions back against gradients that signalling ran down. This is the fact that explains the rest of the design: myelination, sparse firing rates, and the small size of synaptic currents are all energy economies. *In words: the brain is expensive because thinking is literally moving charge uphill, and the uphill part is paid in ATP.* The thermodynamics of that payment is [biophysics 2.1](../../biophysics/lessons/02-01-free-energy-cell-currency.md).

**A crucial corollary, developed in P1: a single action potential barely dents the gradients.** The charge needed to swing the membrane by 100 mV is a rounding error against the ion content of the cell, which is why the pump can be slow, steady, and completely decoupled from the millisecond timescale of the spike.

### Glia, in one paragraph

Three types matter here. **Astrocytes** wrap synapses and capillaries: they clear extracellular K⁺ and glutamate, supply metabolites, and set the ionic and osmotic conditions the equations above quietly assume. **Oligodendrocytes** (and Schwann cells in the periphery) make myelin, which is the single largest determinant of conduction velocity in [1.5](01-05-cable-theory-conduction.md). **Microglia** are resident immune cells that also prune synapses during development ([2.5](02-05-development-and-wiring.md)) — a structural role, not a janitorial one. Glia are roughly as numerous as neurons in the human brain. **The honest note: treating the neuron as the sole computing element is a simplification, and the field is actively revising it** — astrocytes have Ca²⁺ signalling on a seconds timescale, release gliotransmitters, and modulate synaptic strength. This course will keep the neuron-centric frame because it is the one that predicts the most with the least, but it is a modelling choice, not a settled fact.

## Picture

![The upper panel draws a neuron with a dendritic tree, soma, axon hillock, myelinated axon and presynaptic terminals. A blue bar beneath the dendrites and soma marks graded, analogue, decremental signalling, and a coral bar beneath the axon marks all-or-none, digital, regenerative signalling; the boundary between the two bars sits directly under the axon hillock, which is annotated as the decision point with the highest density of voltage-gated sodium channels. The lower panel, aligned directly beneath, redraws any patch of that membrane as an equivalent circuit: an injected current, a membrane capacitance, and a leak conductance in series with its own battery, all in parallel between an outside rail and an inside rail, with the membrane voltage marked across them and the time constant given as tau equals R times C.](assets/01-01-fig1.svg)

The two panels are the same object. **The upper is what a histologist sees; the lower is what the voltage sees**, and the rest of Module 1 consists of making the lower panel more honest.

## Worked examples

**Example 1 (mechanical — a current step into an RC membrane).** A neuron has input resistance $R_{\text{in}} = 100$ MΩ and $\tau = 10$ ms. You inject a constant $I = 0.1$ nA starting at $t=0$. (a) What is the steady-state depolarisation? (b) When does it reach 90 percent of that? (c) Threshold is 15 mV above rest. Does the cell fire, and what current would it take?

(a) At steady state $dV/dt = 0$, so all the injected current leaks out and $\Delta V_\infty = I R_{\text{in}}$:

$$\Delta V_\infty = (0.1\times10^{-9}\ \text{A})(100\times10^{6}\ \Omega) = 1.0\times10^{-2}\ \text{V} = \mathbf{10\ \text{mV}}.$$

(b) The step response of $C\dot v = I - v/R$ is $\Delta V(t) = IR\,(1 - e^{-t/\tau})$, so

$$0.9 = 1 - e^{-t/\tau} \;\Longrightarrow\; t = \tau\ln 10 = 10 \times 2.303 = \mathbf{23\ \text{ms}}.$$

(c) $\Delta V_\infty = 10$ mV $< 15$ mV, so **it never fires, no matter how long you hold the current.** The threshold current — the *rheobase* — is

$$I_{\text{rheo}} = \frac{15\times10^{-3}\ \text{V}}{100\times10^{6}\ \Omega} = 1.5\times10^{-10}\ \text{A} = \mathbf{0.15\ \text{nA}}.$$

**Two things to extract.** First, $\tau$ controls *when* but $R_{\text{in}}$ controls *whether* — the capacitor sets the speed, the resistor sets the ceiling. Second, this is exactly the RC step response from [circuits 3.2](../../circuits/lessons/03-02-first-order-rc-rl-transients.md), unchanged. **A neuron under threshold is a first-order low-pass filter and nothing more exotic.**

**Example 2 (why you'd care — why the summation window is a design choice).** Two neurons receive identical input: two excitatory synapses, each producing a 6 mV EPSP, firing 8 ms apart. Neuron A has $R_m = 2{,}000$ Ω·cm²; neuron B has $R_m = 40{,}000$ Ω·cm². Threshold is 10 mV above rest for both. Who fires?

Time constants first, using $\tau = R_m c_m$ with $c_m = 10^{-6}$ F/cm²:

$$\tau_A = (2{,}000)(10^{-6}) = 2\times10^{-3}\ \text{s} = 2\ \text{ms}, \qquad \tau_B = (40{,}000)(10^{-6}) = 40\ \text{ms}.$$

When the second EPSP arrives, the first has decayed to $6\,e^{-8/\tau}$:

$$\text{A}: \; 6\,e^{-4} = 6(0.0183) = 0.11\ \text{mV} \;\Rightarrow\; \text{peak} = 6.11\ \text{mV} < 10. \quad \textbf{No spike.}$$

$$\text{B}: \; 6\,e^{-0.2} = 6(0.8187) = 4.91\ \text{mV} \;\Rightarrow\; \text{peak} = 10.91\ \text{mV} > 10. \quad \textbf{Spike.}$$

**Same synapses, same inputs, same threshold, opposite outputs.** The only difference is leak conductance.

Now read it as a specification rather than an accident. Neuron A fires only if its inputs arrive within a couple of milliseconds of each other — it reports *coincidence* and is nearly blind to rate. Neuron B sums over tens of milliseconds — it reports *how much input arrived recently* and is nearly blind to fine timing. **Auditory brainstem neurons that localise sound by comparing microsecond arrival times between the ears are built like A, with extremely low $R_m$; cortical neurons that pool evidence over a stimulus are built like B.**

**The general point: since $c_m$ is fixed by physics, the only knob a neuron has for setting its integration window is how many leak channels it leaves open.** Channel expression is the tuning parameter, and $\tau$ is what it buys.

## Watch out

- **You might think the membrane potential is a chemical property, "how many ions are inside."** It is a capacitor voltage — a function of the tiny charge *separated across* the membrane, not of the bulk concentrations. P1 shows a full 100 mV swing moves about 0.03 percent of the cell's Na⁺. Bulk concentrations set the *batteries*; the capacitor sets the *voltage*.
- **You might think the spike carries the signal's magnitude.** It carries nothing but its own occurrence. A strong stimulus does not make a bigger spike; it makes more spikes, or earlier ones. **Amplitude information is destroyed at the hillock by design** — that is what "all-or-none" means, and it is the price of noise immunity.
- **You might think a bigger neuron is a slower one.** Total capacitance and total conductance both scale with area, so $\tau = R_m c_m$ is area-independent. Size changes input resistance (and hence how much a given synaptic current moves you), not the time constant.
- **You might read $\tau$ as "how fast the neuron responds."** It is symmetric: the same $\tau$ governs the rise toward steady state and the decay afterwards. A long $\tau$ neuron is sluggish *and* has a long memory, and the second is usually the useful half.
- **You might treat the equivalent circuit's battery as a metaphor.** It is not. $E_L$ is a real EMF with a real sign and a real magnitude, sourced by an ion gradient, and the pump does real work to maintain it ([biophysics 4.4](../../biophysics/lessons/04-04-membrane-potentials-nernst-goldman.md)).

## One-liner

> A neuron is a leaky capacitor with batteries: the bilayer fixes $c_m \approx 1\ \mu\text{F/cm}^2$ for every cell alive, the number of open channels fixes $\tau = R_m c_m$ and hence the window over which inputs can sum, and at the axon hillock all that graded analogue integration is thrown away in favour of a single bit whose only content is when it happened.

## Problems

**P1 (🟢)** A spherical soma has radius 10 μm; specific membrane capacitance is $1\ \mu\text{F/cm}^2$. (a) Compute its total membrane capacitance. (b) How much charge must cross the membrane to depolarise it by 100 mV, and how many monovalent ions is that? (c) The soma contains Na⁺ at 12 mM. Compute the total number of intracellular Na⁺ ions and express the answer to (b) as a fraction of it. What does this tell you about how quickly the pump has to work? *(Take $e = 1.602\times10^{-19}$ C, $N_A = 6.022\times10^{23}$.)*

**P2 (🟡)** A neuron has $R_m = 20{,}000$ Ω·cm² and $c_m = 1\ \mu\text{F/cm}^2$. A single presynaptic axon fires a regular 100 Hz train; each spike produces a 2 mV EPSP that decays as $2e^{-t/\tau}$ mV, and EPSPs sum linearly. (a) Find $\tau$. (b) Find the steady-state peak depolarisation reached by the train. (c) Threshold is 15 mV above rest. How many such independent axons, firing at 100 Hz, are needed?

**P3 (🔴, bridges to cable theory and to circuits)** A fine neural process is 1 μm in diameter; axoplasmic resistivity is 100 Ω·cm. (a) Compute the longitudinal resistance of a 1 m length of its core, and compare with a copper wire of the same geometry ($\rho_{\text{Cu}} = 1.7\times10^{-6}$ Ω·cm). (b) The passive length constant for such a process is $\lambda = 500$ μm. What fraction of a voltage signal survives 1 mm of passive spread? Over 1 m? (c) Use (a) and (b) to state, in two sentences, why long-distance signalling must be regenerative, and name the two costs that regeneration imposes.

<details>
<summary>Solutions</summary>

**P1 (a)** Radius $10\ \mu\text{m} = 10^{-3}$ cm, so the surface area is

$$A = 4\pi r^2 = 4\pi(10^{-3})^2 = 1.2566\times10^{-5}\ \text{cm}^2 .$$

$$C = c_m A = (10^{-6}\ \text{F/cm}^2)(1.2566\times10^{-5}\ \text{cm}^2) = 1.257\times10^{-11}\ \text{F} = \mathbf{12.6\ \text{pF}}.$$

**(b)** From $Q = C\,\Delta V$ with $\Delta V = 0.1$ V:

$$Q = (1.257\times10^{-11})(0.1) = 1.257\times10^{-12}\ \text{C} = \mathbf{1.26\ \text{pC}}.$$

$$N = \frac{Q}{e} = \frac{1.257\times10^{-12}}{1.602\times10^{-19}} = \mathbf{7.8\times10^{6}\ \text{ions}}.$$

**(c)** Volume:

$$V = \tfrac{4}{3}\pi r^3 = \tfrac{4}{3}\pi(10^{-3}\ \text{cm})^3 = 4.189\times10^{-9}\ \text{cm}^3 = 4.189\times10^{-12}\ \text{L}.$$

$$n_{\text{Na}} = (12\times10^{-3}\ \text{mol/L})(4.189\times10^{-12}\ \text{L})(6.022\times10^{23}) = \mathbf{3.03\times10^{10}\ \text{ions}}.$$

$$\frac{7.8\times10^{6}}{3.03\times10^{10}} = 2.6\times10^{-4} \approx \mathbf{0.026\ \text{percent}}.$$

**Interpretation.** A full 100 mV excursion — a whole action potential's worth — moves about one Na⁺ ion in four thousand. **The concentrations that set the batteries are, to excellent approximation, unchanged by signalling.**

This is why the two timescales decouple completely. The spike is a millisecond event that redistributes a negligible amount of matter; the pump is a slow housekeeper that only has to keep up with the *average* rate, not the instantaneous one. A cell could fire thousands of times with the pump switched off before its gradients noticeably ran down — which is exactly what is observed when the Na⁺/K⁺-ATPase is blocked with ouabain: firing continues for a long while, then fails.

**Caveat worth carrying forward:** this argument uses the cell's whole volume. In a thin dendritic spine or a fine axon, the surface-to-volume ratio is far worse and local ion accumulation is real — which is exactly why Ca²⁺ signalling in spines works at all ([4.1](04-01-plasticity-ltp-ltd.md)).

**P2 (a)** $$\tau = R_m c_m = (2\times10^{4}\ \Omega\cdot\text{cm}^2)(10^{-6}\ \text{F/cm}^2) = 2\times10^{-2}\ \text{s} = \mathbf{20\ \text{ms}}.$$

**(b)** At 100 Hz the interval is $\Delta t = 10$ ms, so between successive EPSPs the accumulated depolarisation is multiplied by

$$r = e^{-\Delta t/\tau} = e^{-10/20} = e^{-0.5} = 0.6065 .$$

Let $V_n$ be the peak just after the $n$-th EPSP. Then $V_{n} = 2 + rV_{n-1}$, a geometric series summing to

$$V_\infty = \frac{2}{1-r} = \frac{2}{1 - 0.6065} = \frac{2}{0.3935} = \mathbf{5.08\ \text{mV}}.$$

**Note how little the train buys.** An infinite train of 2 mV EPSPs at 100 Hz plateaus at 5.1 mV — only 2.5 times a single EPSP. Temporal summation saturates fast, because the decay between events is exponential and $\Delta t$ is a substantial fraction of $\tau$.

**(c)** Independent axons sum linearly (spatial summation), so $n$ axons give $n \times 5.083$ mV:

$$n \ge \frac{15}{5.083} = 2.95 \;\Longrightarrow\; \mathbf{n = 3\ \text{axons}}.$$

**The lesson: one axon firing as fast as it can cannot drive this cell, but three can.** A cortical neuron with 10,000 synapses needing a few dozen coactive ones to fire is a coincidence detector over its input population, not an amplifier of any single input — the fact that Module 2 is built on.

**P3 (a)** Cross-sectional area of a 1 μm-diameter core ($r = 0.5\ \mu\text{m} = 0.5\times10^{-4}$ cm):

$$A = \pi r^2 = \pi(0.5\times10^{-4})^2 = 7.854\times10^{-9}\ \text{cm}^2 .$$

$$R_{\text{axo}} = \frac{\rho L}{A} = \frac{(100\ \Omega\cdot\text{cm})(100\ \text{cm})}{7.854\times10^{-9}\ \text{cm}^2} = 1.27\times10^{12}\ \Omega = \mathbf{1.3\ \text{T}\Omega}.$$

$$R_{\text{Cu}} = \frac{(1.7\times10^{-6})(100)}{7.854\times10^{-9}} = 2.16\times10^{4}\ \Omega = \mathbf{22\ \text{k}\Omega}.$$

$$\frac{R_{\text{axo}}}{R_{\text{Cu}}} = \frac{100}{1.7\times10^{-6}} = \mathbf{5.9\times10^{7}} .$$

**A metre of axoplasm is a 1.3 teraohm resistor.** Nothing useful travels down that passively.

**(b)** Passive spread decays as $e^{-x/\lambda}$ with $\lambda = 500\ \mu\text{m} = 0.5$ mm:

$$\text{1 mm}: \quad e^{-1/0.5} = e^{-2} = 0.135 \;\Rightarrow\; \mathbf{13.5\ \text{percent survives}} .$$

$$\text{1 m}: \quad e^{-1000/0.5} = e^{-2000} \approx 10^{-869} \;\Rightarrow\; \textbf{nothing.}$$

For scale: a 100 mV signal attenuated by $e^{-2000}$ is smaller than one elementary charge's worth of anything, by hundreds of orders of magnitude. **The number is not "small," it is meaningless** — which is the honest way to see that passive transmission is not merely inefficient over long distances but categorically unavailable.

**(c)** *Two sentences.* Because the intracellular conductor is roughly $10^{8}$ times worse than metal and the membrane leaks in parallel with it, a passive signal loses 63 percent of its amplitude every half millimetre and is annihilated within a few millimetres — so any signal that must travel centimetres or metres has to be **rebuilt from local stored energy at closely spaced intervals** rather than conducted.

The two costs of regeneration:

1. **Amplitude information is destroyed.** A regenerating amplifier with a threshold necessarily emits a fixed-size output, so the only surviving degree of freedom is timing. Everything about neural coding follows from this.
2. **Energy and speed.** Each regeneration event dumps Na⁺ in and K⁺ out that the ATPase must pump back, and each one takes time. The regeneration interval is the direct target of myelination: insulating the internodes raises $R_m$ and lowers membrane capacitance so the passive spread between nodes is long and fast, and the cell only pays the regeneration cost at the nodes ([1.5](01-05-cable-theory-conduction.md)).

**Sideways:** part (a) is nothing but $R = \rho L/A$ from [circuits 1.2](../../circuits/lessons/01-02-ohms-law-equivalent-resistance.md), and the leaky-cable structure of (b) is the distributed RC line — an infinite ladder of the panel-(b) circuit — which is where [1.5](01-05-cable-theory-conduction.md) starts.

</details>

## Connections

- **Backward:** the bilayer whose thickness fixes $c_m$ is the self-assembled structure of [biophysics 3.4](../../biophysics/lessons/03-04-self-assembly-hydrophobic.md) and [biophysics 3.5](../../biophysics/lessons/03-05-membrane-mechanics.md); the screened electrostatics that make the two sides of it independent conductors are [biophysics 3.6](../../biophysics/lessons/03-06-electrostatics-salt-water.md). The dendritic tree is built and supplied by the cytoskeleton and motor traffic of [molecular-cell-biology 1.2](../../molecular-cell-biology/lessons/01-02-cytoskeleton-three-filaments.md) and [1.3](../../molecular-cell-biology/lessons/01-03-motors-cargo-logistics.md) — an axon a metre long is a serious logistics problem before it is an electrical one.
- **Forward:** [1.2](01-02-resting-membrane-potential.md) puts real values on the batteries $E_L$; [1.3](01-03-the-action-potential.md) and [1.4](01-04-hodgkin-huxley-model.md) replace the single leak branch with voltage-dependent Na⁺ and K⁺ conductances and turn this circuit into a spike generator; [1.5](01-05-cable-theory-conduction.md) strings copies of the circuit along a cable; [2.3](02-03-synaptic-integration.md) uses $\tau$ directly as the summation window.
- **Sideways:** the governing equation is the first-order RC transient of [circuits 3.2](../../circuits/lessons/03-02-first-order-rc-rl-transients.md) with a Thévenin source, and a subthreshold neuron is exactly the RC low-pass filter of that lesson — the neuroscience is entirely in what $g_L$ does next. The same membrane physics, framed for the organism rather than the cell, is [physiology 1.3](../../physiology/lessons/01-03-resting-membrane-potential.md).
