# Neuroscience · Lesson 2.2: Neurotransmitters and receptors

> ⏱ ~15 min · Module 2: Synapses, wiring & circuits · Builds on: [2.1](02-01-chemical-synaptic-transmission.md), [1.2](01-02-resting-membrane-potential.md) · Unlocks: 2.3 (synaptic integration), 4.1 (plasticity)

## Why this matters

[2.1](02-01-chemical-synaptic-transmission.md) got a puff of transmitter into the cleft. This lesson asks the only question that remains: **what does the postsynaptic cell do with it?**

The textbook habit is to file transmitters into two bins — "glutamate is excitatory, GABA is inhibitory" — and memorize the list. That habit is wrong, and the counterexample is the most famous molecule in the field. **Acetylcholine excites skeletal muscle to contract and slows your heart down.** Same molecule, opposite signs, and nothing about the molecule explains it.

**The sign and the speed of a synapse are properties of the receptor, not of the transmitter.** The transmitter is an address; the receptor is the machine at that address, and the machine decides everything: whether the cell is pushed toward firing or away from it, whether the effect lasts one millisecond or twenty minutes, and whether the synapse changes the cell's voltage or changes the cell's *rules*. Get this one principle and the rest of the pharmacology stops being a list.

## The idea

**Two receptor architectures, and they differ in what the ligand physically does.**

An **ionotropic** receptor *is* an ion channel. Transmitter binds, the pore opens, ions flow. Nothing intervenes — the binding site and the conducting pore are parts of the same protein — so the delay from binding to current is well under a millisecond. This is how a synapse carries a *message*.

A **metabotropic** receptor is a G-protein-coupled receptor (GPCR). Transmitter binds, the receptor changes shape, and a cascade of separate proteins does the rest: G protein, effector enzyme, second messenger, kinase, target. Every step costs time and every enzymatic step multiplies the signal, so the effect starts in tens of milliseconds and can last minutes. This is how a synapse changes the cell's *operating regime*.

**The sign of an ionotropic synapse follows from one number: the reversal potential of the channel.** Recall the driving-force logic of [1.2](01-02-resting-membrane-potential.md): a conductance to a given ion doesn't push the membrane in a fixed direction, it pushes the membrane *toward that ion's equilibrium potential*. Opening a channel with reversal potential $E_{\text{syn}}$ drags $V_m$ toward $E_{\text{syn}}$, whatever direction that happens to be.

$$\boxed{\;\text{excitatory} \iff E_{\text{syn}} > V_{\text{threshold}}, \qquad \text{inhibitory} \iff E_{\text{syn}} < V_{\text{threshold}}\;}$$

*In words: a synapse is excitatory if the voltage it drags you toward is one at which you would fire, and inhibitory if it isn't.*

**Notice what the criterion is not.** It is not "does the synapse depolarize the cell." A synapse whose reversal potential is $-58$ mV depolarizes a cell resting at $-65$ mV and is still firmly inhibitory, because it clamps the cell 8 mV short of a $-50$ mV threshold and holds it there. That case is real and common, and it is the reason the sloppy version of the rule gets people into trouble.

**Now the whole periodic table of fast synapses falls out of one column of numbers.** Using the concentrations of [1.2](01-02-resting-membrane-potential.md) — $[\text{K}^+]_o = 4$, $[\text{K}^+]_i = 140$, $[\text{Na}^+]_o = 145$, $[\text{Na}^+]_i = 15$, $[\text{Cl}^-]_o = 110$ mM, all at 37 °C where $RT/F = 26.7$ mV:

| Channel opens to | Reversal potential | Effect from rest at $-65$ mV |
|---|---|---|
| Na$^+$ and K$^+$ equally (AMPA, nicotinic) | $\approx -1$ mV | strong depolarization — **excitatory** |
| Cl$^-$ (GABA-A, glycine) | $-78$ to $-59$ mV | small hyperpolarization or small depolarization — **inhibitory either way** |
| K$^+$ alone (GABA-B via GIRK) | $-95$ mV | strong hyperpolarization — **inhibitory** |

**Glutamate is not excitatory because of anything about glutamate.** It is excitatory because its ionotropic receptors happen to be non-selective cation channels, and a channel that passes Na$^+$ and K$^+$ about equally reverses roughly midway between $+61$ mV and $-95$ mV — near zero, which is far above any threshold. Build a glutamate-gated chloride channel and you get an inhibitory glutamate synapse; invertebrates did exactly that.

## The formal version

### Ionotropic receptors: fast, and the reversal potential is the whole story

The synaptic current is Ohm's law with a battery:

$$I_{\text{syn}}(t) = g_{\text{syn}}(t)\,\bigl(V_m - E_{\text{syn}}\bigr)$$

where $g_{\text{syn}}(t)$ is the transmitter-gated conductance (a brief pulse, peaking within a millisecond) and $E_{\text{syn}}$ is the reversal potential of the permeant ion mix. *In words: the transmitter sets how open the tap is; the voltage difference from $E_{\text{syn}}$ sets which way and how hard the current flows.*

For a channel permeable to several ions, $E_{\text{syn}}$ is the Goldman–Hodgkin–Katz voltage of that mix ([biophysics 4.4](../../biophysics/lessons/04-04-membrane-potentials-nernst-goldman.md) derives it):

$$E_{\text{syn}} = \frac{RT}{F}\ln\frac{P_{\text{Na}}[\text{Na}^+]_o + P_{\text{K}}[\text{K}^+]_o}{P_{\text{Na}}[\text{Na}^+]_i + P_{\text{K}}[\text{K}^+]_i}$$

**Three fast families cover almost all point-to-point signalling in the brain:**

**AMPA receptors** — glutamate-gated, non-selective cation, $E \approx 0$, open and shut within a couple of milliseconds. This is the workhorse: essentially every fast excitatory synapse in the CNS is AMPA-mediated. (Most contain the GluA2 subunit and pass no Ca$^{2+}$; the minority that lack it are Ca$^{2+}$-permeable, and are exactly the ones that turn up in plasticity and in excitotoxicity.)

**GABA-A and glycine receptors** — Cl$^-$-selective, open in about a millisecond, decaying over five to twenty. GABA-A dominates the brain, glycine the spinal cord and brainstem. Both are pentamers built on the same scaffold as the nicotinic receptor, which is why an "excitatory" ACh receptor and an "inhibitory" GABA receptor are structural cousins — **the family tree tracks architecture, not sign.**

**Nicotinic ACh receptors** — non-selective cation, $E \approx 0$, excitatory, at the neuromuscular junction ([physiology 1.5](../../physiology/lessons/01-05-neuromuscular-autonomic-transmission.md)) and sparsely in the CNS.

### The NMDA receptor: a coincidence detector built out of a pore plug

**NMDA receptors are glutamate-gated, but glutamate is not sufficient to open them.** At hyperpolarized potentials an extracellular Mg$^{2+}$ ion sits in the pore and plugs it. Depolarization pushes that positive ion out electrostatically. So the receptor conducts only when **transmitter is present AND the cell is already depolarized** — a logical AND gate made of physics, and the molecular basis of Hebbian plasticity ([4.1](04-01-plasticity-ltp-ltd.md)).

The unblocked fraction is fit empirically by

$$B(V) = \frac{1}{1 + \dfrac{[\text{Mg}^{2+}]_o}{K}\,e^{-V/V_0}}, \qquad [\text{Mg}^{2+}]_o = 1\ \text{mM},\; K = 3.6\ \text{mM},\; V_0 = 16\ \text{mV}$$

*In words: the more depolarized you are, the smaller the chance a magnesium ion is sitting in the mouth of the channel.* The current is then $I = g_{\max} B(V)(V - E)$ with $E \approx 0$ as for AMPA. Evaluating $B$ (do this yourself — it is one exponential):

| $V$ (mV) | $-70$ | $-50$ | $-30$ | $0$ | $+20$ |
|---|---|---|---|---|---|
| unblocked $B(V)$ | 0.043 | 0.137 | 0.356 | 0.783 | 0.926 |

**Multiply by the driving force and something strange happens.** From $-70$ to $-30$ mV the driving force *shrinks* from $70$ to $30$ mV, yet the current grows:

$$\frac{|I(-30)|}{|I(-70)|} = \frac{0.356 \times 30}{0.043 \times 70} = \frac{10.68}{3.01} = 3.5$$

**The NMDA current is 3.5 times larger at the more depolarized voltage.** That is a *negative slope conductance* — depolarizing the cell increases inward current — and it is visible as an N-shaped I–V curve in the figure below. AMPA over the same range does the opposite, falling by a factor of $70/30 = 2.3$.

**Three more properties, each of which matters downstream:**

- **NMDA receptors are permeable to Ca$^{2+}$**, not just Na$^+$ and K$^+$. This is why they signal rather than merely depolarize: Ca$^{2+}$ is a second messenger, and NMDA-receptor Ca$^{2+}$ entry is what triggers the kinase cascades that change synaptic strength ([4.1](04-01-plasticity-ltp-ltd.md), machinery in [molecular-cell-biology 2.3](../../molecular-cell-biology/lessons/02-03-kinase-cascades-switch.md)).
- **They are slow** — tens of milliseconds to hundreds, against AMPA's few. Slow enough to integrate a burst of spikes into one Ca$^{2+}$ signal.
- **The voltage dependence comes from a pore block, not a voltage sensor.** A voltage-gated Na$^+$ channel has a charged S4 helix that physically moves in the field and drags the gate open ([1.3](01-03-the-action-potential.md)). The NMDA receptor has no such thing. Its gate is opened by glutamate alone; the voltage dependence is a *permeant blocker* being electrostatically evicted from the pore. **Two completely different mechanisms producing curves of the same shape** — a distinction worth holding onto, because it predicts that removing Mg$^{2+}$ from the bath abolishes the voltage dependence entirely, which no manipulation of the bath does to a voltage sensor.

### Fast inhibition: chloride, and the trap in the word "inhibition"

GABA-A and glycine receptors open a Cl$^-$ conductance. Whether that hyperpolarizes depends entirely on the chloride gradient — the argument from [1.2](01-02-resting-membrane-potential.md), now doing real work. With $[\text{Cl}^-]_o = 110$ mM and $z = -1$:

$$E_{\text{Cl}} = \frac{RT}{zF}\ln\frac{[\text{Cl}^-]_o}{[\text{Cl}^-]_i} = 26.7\ \ln\frac{[\text{Cl}^-]_i}{110}\ \text{mV}$$

$$[\text{Cl}^-]_i = 6\ \text{mM} \;\Rightarrow\; E_{\text{Cl}} = 26.7\ln(0.0545) = \mathbf{-77.7\ \text{mV}}, \qquad [\text{Cl}^-]_i = 9\ \text{mM} \;\Rightarrow\; E_{\text{Cl}} = 26.7\ln(0.0818) = \mathbf{-58.9\ \text{mV}}$$

**Same receptor, same transmitter; one hyperpolarizes by 13 mV and the other *depolarizes* by 6 mV — and both are inhibitory**, because both reversal potentials sit below a threshold of $-50$ mV. What sets $[\text{Cl}^-]_i$ is the KCC2 transporter, which pumps Cl$^-$ out. Immature neurons have little KCC2, so their $[\text{Cl}^-]_i$ is high, $E_{\text{Cl}}$ climbs above threshold, and **GABA is genuinely excitatory in the developing brain** — a fact that shapes wiring ([2.5](02-05-development-and-wiring.md)) and that reappears pathologically when injury downregulates KCC2 in the adult.

**Shunting inhibition.** The deeper point is that an inhibitory synapse does not need to move the voltage at all. Steady-state voltage under several conductances is a weighted average of their batteries:

$$V_m = \frac{g_L E_L + g_e E_e + g_i E_i}{g_L + g_e + g_i}$$

*In words: each open conductance votes for its own reversal potential, with a weight equal to how open it is.* If $E_i$ equals the resting potential exactly, the inhibitory synapse casts a vote for the status quo — zero voltage deflection, invisible on an electrode — while adding its weight to the denominator and thereby **shrinking everyone else's vote**. Inhibition by increasing conductance rather than by moving voltage. Worked example 2 puts numbers on it; the consequence is that this kind of inhibition is roughly *divisive* rather than subtractive, which is the raw material of gain control in [2.6](02-06-circuit-motifs-computation.md).

### Metabotropic receptors: slow, amplifying, and they change the rules

A GPCR has no pore. Transmitter binding activates a heterotrimeric G protein, which activates an effector, which makes a second messenger, which acts. The cascade machinery belongs to [molecular-cell-biology 2.1](../../molecular-cell-biology/lessons/02-01-receptors-reading-outside-world.md)–[2.3](../../molecular-cell-biology/lessons/02-03-kinase-cascades-switch.md); take the results from there. What matters *for a neuron* is what the cascade does at the end:

1. **Modulate ion channels** — G$\beta\gamma$ opens GIRK K$^+$ channels (hyperpolarizing, $E_{\text{K}} = -95$ mV) or closes Ca$^{2+}$ channels in a presynaptic terminal (reducing release); PKA phosphorylation closes the M-type K$^+$ current (making the cell more excitable without exciting it).
2. **Modulate receptors** — phosphorylating AMPA receptors changes their conductance and their trafficking, which is one lever plasticity pulls.
3. **Change gene expression** — CREB phosphorylation, new protein, structural change lasting hours to a lifetime ([4.1](04-01-plasticity-ltp-ltd.md), [4.2](04-02-memory-systems.md)).

**The amplification consequence.** Each catalytic step is one-to-many: one receptor activates many G proteins, one adenylyl cyclase makes many cAMP molecules, one kinase phosphorylates many substrates. Multiply the stage gains and a single occupied receptor can move thousands of channels ([molecular-cell-biology 2.2](../../molecular-cell-biology/lessons/02-02-second-messengers-amplification.md) does the arithmetic). **An ionotropic receptor has a gain of exactly one — one bound transmitter, one open pore.** That is the trade: the fast system is faithful and unamplified, the slow system is amplified and blurry.

$$\boxed{\;\text{Fast transmission carries the message; slow modulation sets the operating regime.}\;}$$

**The neuromodulatory metabotropic receptors you should know by name:**

- **GABA-B** — GABA's GPCR. Postsynaptically opens GIRK channels for a slow IPSP lasting hundreds of milliseconds, reversing at $E_{\text{K}} = -95$ mV, far more hyperpolarizing than GABA-A's $-78$ mV. Presynaptically it closes Ca$^{2+}$ channels and suppresses release outright.
- **mGluRs** — glutamate's GPCRs. Group I (postsynaptic) mobilizes Ca$^{2+}$ from stores and is required for one form of LTD; Groups II/III sit presynaptically and damp release.
- **Presynaptic autoreceptors** — a terminal expressing receptors *for its own transmitter*. Release raises cleft concentration, the autoreceptor detects it, and release is suppressed. **Local negative feedback, implemented at each terminal individually**, which stabilizes release rate against fluctuations in the same way any negative feedback loop does. Blocking one (an autoreceptor antagonist) raises release — which is precisely how some antidepressant adjuncts work.

## Picture

![Panel a plots synaptic current against membrane voltage for two glutamate receptors. AMPA gives a straight line crossing zero current near zero millivolts, so its inward current shrinks steadily as the cell depolarizes. NMDA gives an N-shaped curve: almost no current near minus eighty millivolts because magnesium plugs the pore, growing inward current as the cell depolarizes to a maximum near minus twenty-six millivolts, then back through zero and outward. The rising inward limb is the region of negative slope conductance that makes the receptor a coincidence detector. Panel b compares three response time courses on a logarithmic time axis from one millisecond to about three hours: a narrow ionotropic spike lasting milliseconds, a broad metabotropic hump lasting a tenth of a second to ten seconds, and a very broad gene expression response spanning minutes to hours.](assets/02-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — why an EPSC is inward, and why it gets weaker as it works).** An AMPA receptor channel passes Na$^+$ and K$^+$ with equal permeability, $P_{\text{Na}} = P_{\text{K}}$. (a) Find its reversal potential. (b) Find the driving force at rest ($-65$ mV) and at $-40$ mV, and interpret.

**(a)** With $P_{\text{Na}} = P_{\text{K}}$ the permeabilities cancel out of the GHK expression:

$$E_{\text{AMPA}} = 26.7\,\ln\frac{145 + 4}{15 + 140} = 26.7\,\ln\frac{149}{155} = 26.7 \times (-0.0395) = \mathbf{-1.1\ \text{mV}}$$

Sanity check against the individual Nernst potentials, $E_{\text{Na}} = 26.7\ln(145/15) = +60.6$ mV and $E_{\text{K}} = 26.7\ln(4/140) = -95.0$ mV: the mixed reversal potential sits between them, as it must, and lands near zero because the two gradients are of comparable strength and opposite sign. **A "sodium channel" it is not — Na$^+$ flows in and K$^+$ flows out simultaneously, and the reversal potential is where the two currents cancel.**

**(b)**

$$V - E \big|_{-65} = -65 - (-1.1) = \mathbf{-63.9\ \text{mV}}, \qquad V - E\big|_{-40} = -40 - (-1.1) = \mathbf{-38.9\ \text{mV}}$$

Both negative, so the current is inward (depolarizing) in both cases. But the second is only $38.9/63.9 = 61$ percent of the first: **the same open channel delivers 39 percent less current once the cell has been depolarized 25 mV.** An EPSP is self-limiting — every millivolt it gains reduces the drive producing it, which is why summing EPSPs is sublinear ([2.3](02-03-synaptic-integration.md)) and why an excitatory synapse can never by itself push the cell past $E_{\text{syn}} \approx 0$ mV.

**Example 2 (why you'd care — inhibition that changes nothing and vetoes everything).** A cell has resting leak $g_L = 10$ nS with $E_L = -65$ mV and a threshold of $-50$ mV. An excitatory synapse contributes $g_e = 4$ nS with $E_e = 0$ mV. An inhibitory synapse contributes $g_i = 10$ nS with $E_i = -65$ mV — *exactly the resting potential*. (a) Does the excitatory input alone reach threshold? (b) What does the inhibitory input alone do? (c) What do they do together?

**(a)**

$$V = \frac{10(-65) + 4(0)}{10 + 4} = \frac{-650}{14} = \mathbf{-46.4\ \text{mV}}$$

An 18.6 mV EPSP; threshold is $-50$ mV, so **the cell fires.**

**(b)**

$$V = \frac{10(-65) + 10(-65)}{10 + 10} = \frac{-1300}{20} = \mathbf{-65.0\ \text{mV}}$$

**Nothing. Zero millivolts of deflection.** An experimenter recording voltage would report that this synapse does absolutely nothing — and would be wrong.

**(c)**

$$V = \frac{10(-65) + 4(0) + 10(-65)}{10 + 4 + 10} = \frac{-1300}{24} = \mathbf{-54.2\ \text{mV}}$$

The EPSP is now 10.8 mV instead of 18.6 mV — **cut to $14/24 = 58$ percent, and the cell no longer fires.** The inhibition vetoed the spike while producing no voltage change of its own.

**Why the ratio is exactly $14/24$.** Write the EPSP amplitude directly:

$$\Delta V_e = \frac{g_e (E_e - E_L)}{g_L + g_e + g_i}$$

The inhibitory conductance appears *only in the denominator*. It does not subtract from the EPSP; it **divides** it. That is the formal content of "shunting": a synapse at $E_i = E_L$ contributes no numerator term and pure denominator, so its whole effect is a change of gain. Two consequences worth carrying forward:

- **Shunting inhibition is divisive, hyperpolarizing inhibition is subtractive.** A circuit that needs to scale a neuron's input–output curve without changing what it is selective for wants the first; a circuit that needs to raise the bar wants the second. Real inhibitory synapses lie somewhere between, and where they lie is set by $E_{\text{Cl}}$ and by *where on the dendrite they land* — perisomatic basket-cell synapses shunt everything, distal dendritic synapses shunt one branch ([2.3](02-03-synaptic-integration.md), [2.6](02-06-circuit-motifs-computation.md)).
- **Conductance is the hidden variable.** Voltage recordings are what we can easily measure and they systematically underreport inhibition. Whenever someone says "inhibition was unchanged," ask whether they measured conductance.

## Watch out

- **You might say "glutamate is excitatory."** Glutamate is excitatory *at AMPA, NMDA and kainate receptors*, because those are cation channels reversing near 0 mV. It is inhibitory at the glutamate-gated chloride channels of invertebrates, and its metabotropic receptors do something that is neither. **Sign lives in the receptor.**
- **You might equate "depolarizing" with "excitatory."** The criterion is $E_{\text{syn}}$ versus *threshold*, not versus rest. A synapse reversing at $-58$ mV depolarizes a cell resting at $-65$ mV and still prevents it firing, because it clamps the membrane below $-50$ mV. Conversely, in a neuron whose KCC2 is down, GABA — unchanged, at unchanged GABA-A receptors — becomes excitatory.
- **You might think the NMDA receptor is voltage-gated.** It is *ligand*-gated with a voltage-dependent *block*. Glutamate opens the gate; Mg$^{2+}$ physically occludes the open pore and depolarization evicts it. Remove Mg$^{2+}$ from the extracellular solution and the voltage dependence vanishes — which is a routine experiment, and impossible for a genuine voltage sensor.
- **You might expect an inhibitory synapse to show up as a hyperpolarization.** Shunting inhibition can produce exactly zero voltage change while halving every EPSP that arrives with it.
- **You might treat neuromodulators as slow neurotransmitters.** They are not doing the same job slowly; they are doing a *different* job. Dopamine does not tell a cortical neuron what to fire — it tells it how strongly to respond to whatever else is telling it.

## The modulatory systems: a few thousand neurons that reset the whole brain

Five diffuse systems, each a small brainstem or basal-forebrain nucleus of a few thousand to a few tens of thousands of cells, each projecting axons that branch enormously and innervate most of the forebrain. **A single locus coeruleus neuron contacts targets across multiple cortical areas.** They act overwhelmingly through GPCRs, so their effect is slow and modulatory, and their anatomy makes it *global*: this is a broadcast channel, not a wire.

| System | Source | Best understood as broadcasting |
|---|---|---|
| **Dopamine** | ventral tegmental area, substantia nigra pars compacta | reward *prediction error* — better or worse than expected — plus vigour and movement initiation |
| **Norepinephrine** | locus coeruleus | arousal and gain; a "something unexpected happened, reconsider" reset signal |
| **Serotonin** | raphe nuclei | patience, behavioural inhibition, mood — the least settled of the five |
| **Acetylcholine** | basal forebrain, brainstem tegmentum | attention and expected uncertainty; gates cortical plasticity; desynchronizes cortex |
| **Histamine** | tuberomammillary nucleus | wakefulness (which is why antihistamines make you sleepy) |

**These one-line summaries are genuinely contested, and you should hold them loosely.** Dopamine as reward prediction error is the best-supported and still argued over — incentive salience and movement vigour are live alternative readings, and the dopamine neurons are not homogeneous. Serotonin's is worse: it has a dozen receptor subtypes with opposing actions and no consensus function. **What is not contested is the anatomy and the pharmacology**, and those are what make the systems important.

**Volume transmission.** Many of these terminals release into the extracellular space rather than into a tight cleft — dopamine release sites often lack a postsynaptic specialization altogether. Transmitter escapes, diffuses over micrometres, and reaches high-affinity extrasynaptic receptors on many cells. **This is why a nucleus of a few thousand neurons can reshape a cortex of billions:** it is not addressing them individually. It is changing the chemical composition of the medium they sit in. The signal is a scalar broadcast to a region, and the cost of that reach is that it carries almost no information — a state, not a message.

**Co-transmission and the peptides.** Nearly every neuron releases more than one thing. The classical transmitter is packed in small clear vesicles docked at the active zone, right next to the Ca$^{2+}$ channels; neuropeptides are packed in large dense-core vesicles sitting farther away, where they see only the residual Ca$^{2+}$ that builds up when spikes arrive faster than the cell can clear it. The consequence is a **rate-dependent switch in what the synapse says**: at low firing rates the terminal releases its fast transmitter alone; at high rates it releases the peptide too, and the postsynaptic effect changes qualitatively — usually adding a slow GPCR-mediated component on top of the fast one. **Firing rate is not just an intensity code; past a threshold it changes the message.**

## Excitation–inhibition balance

About 80 percent of cortical neurons are glutamatergic and 20 percent are GABAergic, and that ratio hides how tightly the two are coupled. **Inhibition tracks excitation, both in amplitude and within a few milliseconds in time.** Give a cortical circuit a stimulus and the excitatory and inhibitory conductances a cell receives rise together, roughly in proportion, with inhibition lagging by a couple of milliseconds — because the same feedforward input drives both the pyramidal cell and the interneurons that inhibit it ([2.6](02-06-circuit-motifs-computation.md)).

**Why the network needs this.** Cortex is massively recurrent: excitatory cells excite each other. Consider what an unbalanced network does.

- **Too little inhibition** and recurrent excitation is a positive feedback loop with gain above one. Activity grows until every cell in the region is firing together. That is a **seizure**, and epilepsy is in large part a disorder of E/I balance ([4.4](04-04-disease-a-taste.md)).
- **Too much inhibition** and the loop gain falls below one and dies. The network is silent and computes nothing.

**Balance is the knife-edge between the two, and holding it is what buys the useful properties:** the cell sits near threshold rather than far from it, so it responds *fast* to new input; its membrane voltage fluctuates rather than sitting still, so its firing is temporally precise; and the brief window between excitation arriving and inhibition catching up becomes a **narrow integration window** that enforces coincidence detection at the circuit level, exactly as Mg$^{2+}$ does at the molecular level. A balanced network is not a compromise between two failures. **It is the only regime in which a recurrent network is both stable and sensitive.**

**Where the drugs act** — almost all of them at receptors, which is the practical payoff of this whole lesson:

| Class | Target | Action |
|---|---|---|
| Benzodiazepines, barbiturates, alcohol | GABA-A | positive allosteric modulators — boost inhibition (anxiolytic, sedative, anticonvulsant) |
| Ketamine, PCP; memantine | NMDA | open-channel blockers, sitting where Mg$^{2+}$ sits |
| SSRIs; cocaine, amphetamine | reuptake transporters ([2.1](02-01-chemical-synaptic-transmission.md)) | prolong or flood transmitter in the cleft |
| Antipsychotics | D2 dopamine GPCRs | antagonists |
| Opioids | μ-opioid GPCRs | close Ca$^{2+}$ channels, open K$^+$ channels — inhibitory |
| Nicotine; curare | nicotinic ACh | agonist; antagonist |
| Antihistamines | H1 histamine GPCRs | antagonists (hence sedation) |

## One-liner

> The transmitter is the address and the receptor is the machine: sign is set by whether the receptor's reversal potential lies above threshold, speed by whether the receptor is a channel or a cascade — and the brain uses the fast channels to send messages and the slow cascades to decide how loudly they are heard.

## Problems

**P1 (🟢)** A neuron rests at $-65$ mV with threshold $-52$ mV. Extracellular chloride is 110 mM and $RT/F = 26.7$ mV at 37 °C. (a) A mature neuron has $[\text{Cl}^-]_i = 8$ mM. Compute $E_{\text{Cl}}$, state which way GABA-A moves the membrane from rest, and say whether the synapse is inhibitory. (b) An immature neuron with little KCC2 has $[\text{Cl}^-]_i = 26$ mM. Repeat. (c) State in one sentence the general criterion you used.

**P2 (🟡, bridges to 4.1)** Use $B(V) = \bigl[1 + (1/3.6)e^{-V/16}\bigr]^{-1}$ for the fraction of NMDA receptors not blocked by Mg$^{2+}$, and take $E = 0$ mV for both AMPA and NMDA. A synapse is activated when the postsynaptic cell is at $-70$ mV, and again when a separate input has already depolarized it to $-30$ mV. (a) Compute the unblocked fraction at each voltage. (b) Compute the ratio of NMDA currents at the two voltages, and the ratio of AMPA currents. (c) By what factor does the NMDA-to-AMPA current ratio change between the two conditions, and what does that buy a plasticity rule?

**P3 (🔴, optional — bridges to gain control in 2.6)** A neuron's resting conductances are $g_{\text{K}} = 6$ nS at $E_{\text{K}} = -90$ mV and a cation leak $g_c = 2$ nS at $E_c = +10$ mV. Threshold is $-50$ mV. Each excitatory synapse adds $0.2$ nS at $E_e = 0$ mV. (a) Verify the resting potential. (b) Acetylcholine acting on a muscarinic GPCR closes 30 percent of the K$^+$ conductance. Find the new resting potential and the new input resistance. (c) How many simultaneous excitatory synapses are needed to reach threshold, before and after modulation? (d) Interpret: what did the modulator do to the cell as a computing device?

<details>
<summary>Solutions</summary>

**P1 (a)** For an anion, $z = -1$, so

$$E_{\text{Cl}} = \frac{RT}{-F}\ln\frac{[\text{Cl}^-]_o}{[\text{Cl}^-]_i} = 26.7\ln\frac{[\text{Cl}^-]_i}{[\text{Cl}^-]_o} = 26.7\ln\frac{8}{110} = 26.7\ln(0.07273) = 26.7 \times (-2.6210) = \mathbf{-70.0\ \text{mV}}$$

$E_{\text{Cl}} = -70.0$ mV is **below** rest ($-65$ mV), so opening the channel drags the membrane down: **hyperpolarizing**, with a driving force of only $-65 - (-70) = 5$ mV, so the IPSP is small. It is **inhibitory**, since $-70 < -52$.

**(b)**

$$E_{\text{Cl}} = 26.7\ln\frac{26}{110} = 26.7\ln(0.23636) = 26.7 \times (-1.4424) = \mathbf{-38.5\ \text{mV}}$$

Now $E_{\text{Cl}} = -38.5$ mV is **above** rest, so GABA **depolarizes** by up to 26.5 mV — and it is above threshold ($-38.5 > -52$), so it is genuinely **excitatory**. The same receptor, the same transmitter, the opposite sign, purely from a transporter's expression level.

**(c)** **A synapse is inhibitory if and only if its reversal potential lies below threshold.** Direction of voltage change (relative to rest) is a separate and less important question.

**P2 (a)** At $V = -70$: $e^{70/16} = e^{4.375} = 79.44$, so

$$B(-70) = \frac{1}{1 + 79.44/3.6} = \frac{1}{1 + 22.07} = \frac{1}{23.07} = \mathbf{0.043}$$

At $V = -30$: $e^{30/16} = e^{1.875} = 6.521$, so

$$B(-30) = \frac{1}{1 + 6.521/3.6} = \frac{1}{1 + 1.811} = \frac{1}{2.811} = \mathbf{0.356}$$

**Eight times more receptors are conducting** at the depolarized voltage.

**(b)** $I = g_{\max}B(V)(V - 0)$, so with $g_{\max}$ common:

$$\frac{|I_{\text{NMDA}}(-30)|}{|I_{\text{NMDA}}(-70)|} = \frac{0.356 \times 30}{0.043 \times 70} = \frac{10.68}{3.01} = \mathbf{3.5}$$

$$\frac{|I_{\text{AMPA}}(-30)|}{|I_{\text{AMPA}}(-70)|} = \frac{30}{70} = \mathbf{0.43}$$

The NMDA current is 3.5 times **larger** at $-30$ mV; the AMPA current is 0.43 times as large, i.e. 2.3 times **smaller**. The 8-fold relief of block beats the 2.3-fold loss of driving force.

**(c)**

$$\frac{3.5}{0.43} = \mathbf{8.2}$$

— which is just the ratio of unblocked fractions, $0.356/0.043$, since the common driving force cancels.

**What it buys:** the AMPA component reports *that a presynaptic spike occurred*, essentially independent of postsynaptic state. The NMDA component reports **the conjunction** of presynaptic release and postsynaptic depolarization, and reports it with an eightfold contrast between the two cases. Because the NMDA channel passes Ca$^{2+}$, that conjunction is delivered as a chemical signal that kinases can act on. **A Hebbian rule — strengthen a synapse when pre and post are active together — needs a molecule that is high only when both are true, and this is it** ([4.1](04-01-plasticity-ltp-ltd.md)). Note also that the same detector, run weakly, gives a *small* Ca$^{2+}$ rise, which is the standard account of why weak pairing produces depression rather than potentiation.

**P3 (a)** Rest is the conductance-weighted average of the batteries with no synaptic input:

$$V_{\text{rest}} = \frac{6(-90) + 2(+10)}{6 + 2} = \frac{-540 + 20}{8} = \frac{-520}{8} = \mathbf{-65.0\ \text{mV}}\ \checkmark$$

Input resistance $R_{\text{in}} = 1/(8\ \text{nS}) = \mathbf{125\ \text{M}\Omega}$.

**(b)** Closing 30 percent of $g_{\text{K}}$ leaves $g_{\text{K}} = 0.7 \times 6 = 4.2$ nS:

$$V_{\text{rest}}' = \frac{4.2(-90) + 2(10)}{4.2 + 2} = \frac{-378 + 20}{6.2} = \frac{-358}{6.2} = \mathbf{-57.7\ \text{mV}}$$

$$R_{\text{in}}' = \frac{1}{6.2\ \text{nS}} = \mathbf{161\ \text{M}\Omega}$$

**A 7.3 mV depolarization and a 29 percent rise in input resistance**, from a receptor that opened no excitatory channel at all — it merely removed some of the K$^+$ conductance that was holding the cell down.

**(c)** With $n$ synapses of 0.2 nS each at $E_e = 0$, set the weighted average equal to threshold $-50$ mV.

*Before:*

$$\frac{-520 + 0}{8 + 0.2n} = -50 \;\Longrightarrow\; -520 = -400 - 10n \;\Longrightarrow\; 10n = 120 \;\Longrightarrow\; n = \mathbf{12}$$

*After:*

$$\frac{-358 + 0}{6.2 + 0.2n} = -50 \;\Longrightarrow\; -358 = -310 - 10n \;\Longrightarrow\; 10n = 48 \;\Longrightarrow\; n = \mathbf{4.8}$$

**Twelve coincident inputs before, five after — a 2.5-fold increase in sensitivity.**

**(d)** The modulator **did not carry a message; it changed the exchange rate between input and output.** Three effects compounded, and it is worth separating them because they are usually conflated:

1. **Rest moved 7.3 mV closer to threshold**, shrinking the gap from 15 mV to 7.7 mV.
2. **Input resistance rose 29 percent**, so each unit of synaptic conductance produces a bigger voltage swing (this is the same denominator effect as shunting inhibition, run in reverse — removing conductance is anti-shunting).
3. **Working against those, the driving force fell**, because rest is now nearer $E_e = 0$. This is why the sensitivity gain is 2.5-fold rather than the naive $15/7.7 = 1.9$ from effect 1 alone combined with 1.29 from effect 2 — the three interact, and the conductance-average calculation handles them exactly while a "sum the EPSPs" shortcut does not.

**This is the design point of the whole lesson.** Fast glutamatergic input decides *whether* the cell fires on this millisecond. Slow cholinergic modulation decides *how much evidence* it takes — and a system that can move the requirement from twelve coincident inputs to five has changed the computation the circuit performs without sending a single bit of content. That is what attention, arousal and reward signals are doing ([4.3](04-03-attention-decision-making.md)), and it is why the modulatory nuclei can be so small.

</details>

## Flashback

**From Lesson 1.5 (cable theory and conduction):** A dendrite has diameter $d = 2\ \mu$m, specific membrane resistance $R_m = 20{,}000\ \Omega\,\text{cm}^2$, intracellular resistivity $R_i = 100\ \Omega\,\text{cm}$, and specific capacitance $C_m = 1\ \mu\text{F}/\text{cm}^2$. The length constant of a cylindrical cable is $\lambda = \sqrt{R_m d/(4R_i)}$ and the time constant is $\tau_m = R_m C_m$.

(a) Compute $\lambda$ and $\tau_m$. (b) A 12 mV synaptic potential is generated 400 μm out on this dendrite. How much of it reaches the soma at steady state, and how far out would a synapse have to sit for only 2 mV to arrive? (c) Wrapping this process in myelin multiplies $R_m$ by 50 and divides $C_m$ by 50. What happens to $\lambda$, to $\tau_m$, and to conduction velocity (which scales as $\lambda/\tau_m$)?

<details>
<summary>Solution</summary>

**(a)** Convert to consistent units: $d = 2\ \mu\text{m} = 2\times10^{-4}$ cm.

$$\lambda = \sqrt{\frac{R_m d}{4R_i}} = \sqrt{\frac{(2\times10^{4})(2\times10^{-4})}{4(100)}} = \sqrt{\frac{4}{400}} = \sqrt{0.01} = 0.1\ \text{cm} = \mathbf{1000\ \mu\text{m}}$$

$$\tau_m = R_m C_m = (2\times10^{4}\ \Omega\,\text{cm}^2)(1\times10^{-6}\ \text{F}/\text{cm}^2) = 2\times10^{-2}\ \text{s} = \mathbf{20\ \text{ms}}$$

Note that $\tau_m$ depends only on the *specific* membrane properties — not on diameter — while $\lambda$ grows as $\sqrt{d}$.

**(b)** Steady-state decay along an infinite cable is $V(x) = V_0 e^{-x/\lambda}$:

$$V(400\ \mu\text{m}) = 12\,e^{-400/1000} = 12\,e^{-0.4} = 12 \times 0.6703 = \mathbf{8.0\ \text{mV}}$$

**A third of the signal is lost over 0.4 mm** — and this is a generously thick, high-resistance dendrite. For 2 mV to arrive:

$$2 = 12\,e^{-x/1000} \;\Longrightarrow\; \frac{x}{1000} = \ln 6 = 1.7918 \;\Longrightarrow\; x = \mathbf{1792\ \mu\text{m} \approx 1.8\ \text{mm}}$$

**(c)** $\lambda \propto \sqrt{R_m}$, so

$$\lambda' = \sqrt{50}\,\lambda = 7.07 \times 1000\ \mu\text{m} = \mathbf{7.1\ \text{mm}}$$

$$\tau_m' = (50R_m)(C_m/50) = R_m C_m = \mathbf{20\ \text{ms} - unchanged}$$

$$\text{velocity} \propto \frac{\lambda}{\tau_m} \;\Rightarrow\; \text{increases by } \sqrt{50} = \mathbf{7.1\times}$$

**The non-obvious part is that $\tau_m$ does not move.** The two effects of myelin — sealing the leak and thinning the capacitor — pull the time constant in exactly opposite directions and cancel. All of the speed-up comes through $\lambda$: the signal is not made faster locally, it is made to *reach further* before it needs regenerating, so the nodes can be spaced further apart and the spike hops between them. That is saltatory conduction stated as a cable-theory result rather than as a picture.

</details>

## Connections

- **Backward:** [1.2](01-02-resting-membrane-potential.md) supplied the driving-force machinery — every reversal potential in this lesson is the same GHK/Nernst calculation applied to a different set of permeant ions; [2.1](02-01-chemical-synaptic-transmission.md) delivered the transmitter this lesson decodes; [1.3](01-03-the-action-potential.md) supplies the contrast between a voltage sensor and the NMDA receptor's voltage-dependent pore block.
- **Forward:** [2.3](02-03-synaptic-integration.md) sums the EPSPs and IPSPs defined here and asks whether threshold is crossed, using the conductance-average arithmetic of Worked example 2; [2.6](02-06-circuit-motifs-computation.md) builds gain control and lateral inhibition out of shunting and out of E/I balance; [4.1](04-01-plasticity-ltp-ltd.md) is essentially one long consequence of NMDA coincidence detection plus AMPA trafficking; [4.4](04-04-disease-a-taste.md) reads epilepsy and Parkinson's off broken E/I balance and a broken modulatory nucleus.
- **Sideways:** the GPCR cascade itself — G proteins, cAMP, IP₃, kinase amplification — is [molecular-cell-biology 2.1](../../molecular-cell-biology/lessons/02-01-receptors-reading-outside-world.md) through [2.3](../../molecular-cell-biology/lessons/02-03-kinase-cascades-switch.md); the nicotinic synapse at the neuromuscular junction and the muscarinic slowing of the heart are [physiology 1.5](../../physiology/lessons/01-05-neuromuscular-autonomic-transmission.md), which is the cleanest place to see one transmitter with two signs; the ion-permeation physics underneath every reversal potential here is [biophysics 4.4](../../biophysics/lessons/04-04-membrane-potentials-nernst-goldman.md).
