# Neuroscience · Lesson 4.1: Synaptic plasticity — LTP and LTD

> ⏱ ~15 min · Module 4: Learning, memory & cognition · Builds on: [2.2](02-02-neurotransmitters-receptors.md), [2.3](02-03-synaptic-integration.md) · Unlocks: 4.2 (memory systems)

## Why this matters

In 1949 Donald Hebb wrote down what a learning synapse would have to do, and had no idea how a synapse could do it. There was no candidate molecule, no measured plasticity, nothing. It was a postulate about a mechanism nobody had seen.

Twenty-four years later Bliss and Lømo tetanized the perforant path in an anaesthetized rabbit and found that the response stayed enlarged for hours — **long-term potentiation**. A decade after that, the reason emerged: a receptor whose pore is plugged by a magnesium ion at rest, so that it conducts only when transmitter is present *and* the cell is already depolarized. **Hebb's conjunction, implemented by one protein, using one ion as the detector.**

This is the closest thing neuroscience has to the moment a theoretical postulate was cashed out in a molecule. It is also where every claim in the rest of Module 4 bottoms out: [4.2](04-02-memory-systems.md)'s consolidation, [3.5](03-05-motor-control-correction.md)'s cerebellar learning, [4.3](04-03-attention-decision-making.md)'s value learning — all of them assume something changes at a synapse, and this lesson is what changes and why.

## The idea

**Hebb's postulate, stated carefully.** When an axon of cell A repeatedly or persistently **takes part in firing** cell B, some change occurs such that A's efficiency in firing B is increased.

Read the verb. Hebb did not say "when A and B are active together." He said A takes part in *firing* B — a causal, **ordered** relation. The popular slogan "cells that fire together wire together" throws away the ordering, and the ordering turned out to be measurable (the STDP window in the figure below).

**Formalize it and a problem appears immediately.** The minimal Hebbian rule is

$$\frac{dw}{dt} = \eta\, u\, v$$

where $w$ is the strength of one synapse, $u$ the presynaptic activity, $v$ the postsynaptic activity, and $\eta$ a small learning rate. *In words: strengthen in proportion to the product of the two activities.*

**A product requires a detector of the product.** A synapse is a sub-micron object. It cannot consult the cell's firing rate from a distance; it can only use signals physically present at itself. Two are available: **glutamate in the cleft**, which reports $u$, and **the membrane potential of the spine**, which reports $v$ (because a spike backpropagates from the soma into the dendrites). So the mechanism has to be a molecule that responds to glutamate and voltage *conjunctively*.

**That molecule is the NMDA receptor**, and [2.2](02-02-neurotransmitters-receptors.md) already built it. Glutamate binding is necessary but not sufficient: at hyperpolarized potentials an extracellular Mg$^{2+}$ ion sits in the pore and plugs it, and depolarization expels it electrostatically. Current flows only when both conditions hold.

$$\boxed{\;\text{NMDA current} \;\propto\; \underbrace{s(t)}_{\text{glutamate bound}} \times \underbrace{B(V)}_{\text{Mg}^{2+}\text{ unblocked}}\;}$$

*In words: a logical AND built out of a pore plug, with no protein-protein signalling in between.*

**Two consequences, and the second is the one people miss.**

1. **The AND gate is a single protein.** No circuit, no cascade, no delay — the conjunction is computed by the physics of an ion sitting in a hole.
2. **The receptor is Ca$^{2+}$-permeable, so the output of the AND is a *chemical* signal, confined to one spine.** This is what makes plasticity **input-specific** — the synapse can alter *itself* without telling the rest of the neuron. Had the coincidence output been a voltage, every synapse on the cell would have received it, and the neuron rather than the synapse would be the unit of storage. **The whole capacity argument for memory rests on that one fact** (Problem 3).

**Then a second, harder question: what decides the *direction*?** Potentiation is only half of it — synapses also weaken (**long-term depression**), and a rule with no depression term saturates. The answer is that the same messenger carries both signs, distinguished by **how much of it arrives**:

| Postsynaptic Ca$^{2+}$ | Who wins | Outcome |
|---|---|---|
| baseline | nobody | no change |
| modest, prolonged | phosphatases (calcineurin/PP2B) | **LTD** |
| large, brief | kinases (CaMKII) | **LTP** |

The asymmetry is real chemistry: calcineurin binds Ca$^{2+}$/calmodulin with **higher affinity** than CaMKII, so it activates first as Ca$^{2+}$ rises; CaMKII needs a larger transient but, once it autophosphorylates, stays active after the Ca$^{2+}$ is gone. **A low-affinity, self-sustaining kinase competing against a high-affinity, non-latching phosphatase gives you a threshold with depression below it and potentiation above** — exactly the shape in panel (b) of the figure.

## The formal version

### The three properties of LTP, and why each is load-bearing

At the Schaffer collateral synapse onto hippocampal CA1 pyramidal cells — the canonical preparation — a high-frequency tetanus (say 100 Hz for one second) potentiates the response for hours. Three properties follow from the NMDA mechanism, and each is required for the memory story to work:

- **Cooperativity.** A single weak input does not potentiate; enough inputs must be co-active to depolarize the cell past the Mg$^{2+}$ block. *This is a threshold, and it is why noise does not rewrite the network.*
- **Associativity.** A weak input *does* potentiate if it is active while a strong input depolarizes the cell. *This is the associative learning primitive: an ineffective cue acquires strength by being present when something effective happens.*
- **Input specificity.** Only the synapses that were active change; the silent neighbours on the same cell do not. *This is what the Ca$^{2+}$ compartmentalization buys, and without it a neuron would store one number instead of ten thousand.*

### Why pure Hebbian learning cannot be the whole rule

Take one input, and let the postsynaptic rate be $v = w u$. Then

$$\frac{dw}{dt} = \eta\, u\, v = \eta\, u^2 w \;\;\Longrightarrow\;\; w(t) = w_0\, e^{t/\tau_{\text{grow}}}, \qquad \tau_{\text{grow}} = \frac{1}{\eta u^2}$$

*In words: strengthening makes the cell fire more, which strengthens further — the rule is pure positive feedback, and $w=0$ is its only fixed point, an unstable one.* It also cannot decrease anything. **Any workable plasticity rule needs a depression regime and a stabilizer**, and biology supplies two of the latter on very different timescales.

### BCM: the sliding threshold

Bienenstock, Cooper and Munro (1982) proposed — again, *before* the calcium story existed — a rule with a threshold that moves:

$$\frac{dw_i}{dt} = \eta\, u_i\, v\,\bigl(v - \theta_M\bigr), \qquad \theta_M = \frac{\overline{v^2}}{v_0}$$

where $\overline{v^2}$ is a slow running average of the squared postsynaptic rate and $v_0$ is a target rate. *In words: inputs active while the cell fires above $\theta_M$ get stronger, inputs active while it fires below $\theta_M$ get weaker — and $\theta_M$ chases the cell's own recent activity upward, faster than the activity itself.*

**Why the superlinear threshold stabilizes.** Because $\theta_M$ grows as $v^2$ while the drive grows as $v$, a cell that becomes too active raises its own bar out of reach. Worked example 2 shows this is a one-dimensional flow with a stable fixed point at exactly $v = v_0$ — the same stability analysis as [dynamical-systems 1.1](../../dynamical-systems/lessons/01-01-flows-on-the-line.md), applied to a synapse.

The experimental payoff: BCM predicts **metaplasticity** — that a stretch of high activity should make subsequent LTP *harder* and LTD easier, by sliding $\theta_M$ right. That is measured, and it is the dashed curve in panel (b).

### Homeostatic plasticity: the slow stabilizer

BCM regulates the rule; **synaptic scaling** regulates the weights. Over hours to days, a neuron chronically driven too hard scales **all** of its excitatory synapses down, and one chronically silenced scales them all up (Turrigiano and colleagues).

The critical detail is that the scaling is **multiplicative, not subtractive**: every weight is multiplied by the same factor. *In words: the neuron changes its overall gain without changing the relative pattern of its weights.* **Multiplication preserves the stored pattern; subtraction destroys it** (Problem 2). And because scaling acts over hours while LTP acts over minutes, the two mechanisms are separated in time and do not erase each other — the fast rule writes, the slow rule keeps the page from filling up.

### Expression and maintenance: what actually changes

**Early LTP (minutes to a couple of hours)** is expressed mainly by **AMPA receptor trafficking**: CaMKII phosphorylation drives exocytosis of AMPA receptors into the spine membrane, raising the conductance of an already-existing synapse. LTD runs it backwards — calcineurin-dependent dephosphorylation and clathrin-mediated **internalization** of AMPA receptors. (There is a long-running argument about presynaptic contributions — changes in release probability, which [2.1](02-01-chemical-synaptic-transmission.md)'s quantal analysis is the tool for. The honest answer is that both occur and the mix depends on the synapse.)

**Late LTP (hours and beyond)** requires **new protein synthesis and gene transcription** — block translation with anisomycin and potentiation decays back to baseline after an hour or two, leaving early LTP intact. The transcriptional arm runs through CREB ([molecular-cell-biology 4.2](../../molecular-cell-biology/lessons/04-02-eukaryotic-transcription-machine.md)), and the kinase cascade that gets there is the standard machinery of [molecular-cell-biology 2.3](../../molecular-cell-biology/lessons/02-03-kinase-cascades-switch.md).

**This creates a genuine paradox: transcription happens in the nucleus, which is cell-wide, but plasticity must remain synapse-specific.** How do cell-wide gene products reach only the synapses that earned them?

**Synaptic tagging and capture** (Frey and Morris, 1997) is the resolution and it is elegant: strong stimulation does two things — it sets a **local molecular "tag"** at the active synapse *and* it triggers somatic transcription. Weak stimulation sets a tag but triggers no transcription. Plasticity-related proteins are then dispatched throughout the cell and **captured only by tagged synapses**. *In words: the neuron broadcasts the goods and the synapses that were active hold up their hands.* Specificity is preserved by making the *address* local even though the *delivery* is global.

Structurally, potentiated spines enlarge and depressed spines shrink or retract, on a timescale of tens of minutes — so the weight change is eventually written into geometry.

### STDP, derived rather than declared

Now run the mechanism forward in time and the spike-timing rule falls out. Let $\Delta t = t_{\text{post}} - t_{\text{pre}}$.

**Pre before post ($\Delta t > 0$).** Glutamate binds and NMDA receptors are occupied but blocked. A few milliseconds later the backpropagating action potential invades the spine, strips the Mg$^{2+}$ out while glutamate is *still bound*, and Ca$^{2+}$ floods in. **Large, brief transient → CaMKII → LTP.**

**Post before pre ($\Delta t < 0$).** The backpropagating spike arrives and unblocks the receptors — but there is no glutamate yet, so nothing conducts. By the time glutamate arrives the spine has repolarized and the block is back. What Ca$^{2+}$ does enter comes in at rest, slowly, over the NMDA receptor's long decay. **Modest, prolonged rise → calcineurin → LTD.**

The empirical fit (Bi and Poo, 1998, hippocampal culture) is a pair of exponentials:

$$\Delta w(\Delta t) = \begin{cases} A_+ \, e^{-\Delta t/\tau_+}, & \Delta t > 0 \\[4pt] -A_-\, e^{\Delta t/\tau_-}, & \Delta t < 0\end{cases} \qquad \tau_+ \approx 17\ \text{ms},\;\; \tau_- \approx 34\ \text{ms}$$

*In words: potentiation is tall and narrow, depression is shallow and wide, and the two lobes meet at a discontinuity — swapping the order of two spikes a millisecond apart flips the sign of the change.*

**The rule is causal, not merely correlational, and that is the point.** It strengthens inputs that arrived *before* the spike — inputs that could have caused it — and weakens inputs that arrived after, which could not have. A network under this rule learns to **predict**: repeated exposure to a sequence strengthens the early elements onto the late ones, so the response migrates earlier in the sequence over training. That is a temporal-difference learning rule appearing in the physics of a channel block.

**Two honest caveats.** First, $\tau_+ \approx 17$ ms is much shorter than the NMDA receptor's own decay of fifty to a couple of hundred milliseconds — because what matters is not whether *some* Ca$^{2+}$ enters but whether the *peak* clears $\theta_p$, and the boost from a backpropagating spike weakens as glutamate unbinds. Second, the clean exponential window is an idealization: shape, width, and even sign vary with synapse type, dendritic distance, firing rate and neuromodulatory state. At high rates, rate-dependence dominates timing entirely.

## Picture

![Two panels. The left panel plots the spike-timing-dependent plasticity window: percent weight change per spike pair against the interval between the postsynaptic and presynaptic spike, from minus eighty to plus eighty milliseconds. A tall narrow potentiation lobe decays from plus one percent for presynaptic-first pairings, and a shallower, wider depression lobe reaching minus half a percent covers postsynaptic-first pairings, with a discontinuity at zero. Small spike-pair diagrams above each lobe show the spike ordering. The right panel plots weight change against the peak postsynaptic calcium transient in the spine: flat at low calcium, dipping negative between a lower threshold theta-d and an upper threshold theta-p, then rising positive above theta-p, with a dashed copy of the same curve shifted rightwards showing how the threshold slides after a period of high activity.](assets/04-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — the coincidence, in numbers).** Use the Mg$^{2+}$ unblock function from [2.2](02-02-neurotransmitters-receptors.md),

$$B(V) = \Bigl[1 + \tfrac{1}{3.6}\,e^{-V/16}\Bigr]^{-1},$$

and let the fraction of NMDA receptors with glutamate bound decay as $s(t) = e^{-t/\tau_s}$ with $\tau_s = 60$ ms after a presynaptic spike. Take the spine at rest at $-65$ mV, and a backpropagating action potential that brings it to $-10$ mV for about 3 ms. (a) Find $E_{\text{Ca}}$. (b) Compare the peak Ca$^{2+}$ influx for $\Delta t = +10$ ms and $\Delta t = -10$ ms. (c) Compare the *time-integrated* influx and interpret.

**(a)** With $[\text{Ca}^{2+}]_o = 2$ mM, $[\text{Ca}^{2+}]_i \approx 100$ nM $= 10^{-4}$ mM, $z = 2$, and $RT/F = 26.7$ mV:

$$E_{\text{Ca}} = \frac{26.7}{2}\ln\frac{2}{10^{-4}} = 13.35 \times \ln(2\times10^{4}) = 13.35 \times 9.90 = \mathbf{+132\ \text{mV}}$$

**Ca$^{2+}$ is the ion with by far the largest driving force in the cell**, because its intracellular concentration is held four orders of magnitude below the extracellular one. Call it $+130$ mV. The Ca$^{2+}$ influx through NMDA receptors is then proportional to $s\,B(V)\,(E_{\text{Ca}} - V)$.

**(b)** *Pre before post, $\Delta t = +10$ ms.* At the moment the backpropagating spike arrives, glutamate occupancy is $s = e^{-10/60} = 0.847$, and the spine sits at $-10$ mV:

$$B(-10) = \Bigl[1 + \tfrac{1}{3.6}e^{10/16}\Bigr]^{-1} = \bigl[1 + 0.2778 \times 1.868\bigr]^{-1} = \frac{1}{1.519} = 0.658$$

$$\text{influx} \propto 0.847 \times 0.658 \times (130 - (-10)) = 0.847 \times 0.658 \times 140 = \mathbf{78.0}$$

*Post before pre, $\Delta t = -10$ ms.* When the spike arrived there was no glutamate, so nothing conducted. Glutamate arrives 10 ms later, by which time the spine is back at $-65$ mV:

$$B(-65) = \bigl[1 + 0.2778\,e^{65/16}\bigr]^{-1} = \bigl[1 + 0.2778 \times 58.1\bigr]^{-1} = \frac{1}{17.15} = 0.0583$$

$$\text{influx} \propto 1.00 \times 0.0583 \times (130 + 65) = 0.0583 \times 195 = \mathbf{11.4}$$

$$\frac{\text{peak influx, pre-first}}{\text{peak influx, post-first}} = \frac{78.0}{11.4} = \mathbf{6.8}$$

**Reversing the order of two spikes 20 ms apart changes the peak calcium signal by nearly sevenfold** — enough to move across a threshold, which is all the rule requires.

**(c)** Now integrate. The boosted influx lasts only the $\approx 3$ ms of the spike; the unboosted influx persists for the $\approx 60$ ms of glutamate binding.

$$\text{pre-first} \approx \underbrace{78.0 \times 3}_{\text{boost}} + \underbrace{11.4 \times 0.847 \times 60}_{\text{baseline tail}} \approx 234 + 579 = 813$$

$$\text{post-first} \approx 11.4 \times 60 = 684$$

$$\text{ratio of total charge} = \frac{813}{684} = 1.19$$

**The peaks differ by a factor of 6.8; the totals differ by 19 percent.** So the cell cannot be integrating total calcium — if it were, the two orderings would be nearly indistinguishable. **It must be reading the peak concentration**, which is exactly what a cooperative, low-affinity kinase does: CaMKII activation requires calmodulin with four Ca$^{2+}$ bound and neighbouring subunits activated together, making it a steeply nonlinear function of concentration rather than of dose. **The amplitude hypothesis is not an arbitrary choice among equally good readouts; it is the only one consistent with the arithmetic.**

*(Caveat: this is a deliberately stripped model. Voltage-gated Ca$^{2+}$ channels and IP$_3$-mediated release from internal stores also contribute, and buffering and extrusion in the tiny spine head shape the transient. The conclusion survives all of them.)*

**Example 2 (why you'd care — the runaway, and the fix).** A neuron receives one input firing at $u = 10$ Hz, with output $v = wu$. Take $\eta = 10^{-4}$ in units that make $\eta u^2$ a rate in s$^{-1}$. (a) Under the pure Hebbian rule, how long until the weight doubles? (b) Under BCM with $\theta_M = v^2/v_0$ and $v_0 = 5$ Hz, find the fixed points in $w$ and their stability. (c) Repeat with $u = 20$ Hz and interpret.

**(a)** $\dfrac{dw}{dt} = \eta u^2 w$ with $\eta u^2 = 10^{-4} \times 100 = 10^{-2}\ \text{s}^{-1}$, so $\tau_{\text{grow}} = 100$ s and

$$t_{\text{double}} = \tau_{\text{grow}}\ln 2 = 100 \times 0.693 = \mathbf{69\ \text{s}}.$$

**The weight doubles every 69 seconds and never stops** — after an hour it is up by a factor of $e^{36} \approx 4\times10^{15}$. The rule is not merely unstable in principle; it is violently unstable on the timescale of a single experiment.

**(b)** Substitute $v = 10w$ and $\theta_M = v^2/5 = 20w^2$:

$$\frac{dw}{dt} = \eta\,u\,v\,(v-\theta_M) = \eta\,(10)(10w)\bigl(10w - 20w^2\bigr) = 1000\,\eta\,w^2\,(1 - 2w)$$

Fixed points: $w^* = 0$ and $w^* = 0.5$. Since $w^2 > 0$, the sign of $dw/dt$ is the sign of $(1-2w)$:

| region | $dw/dt$ | motion |
|---|---|---|
| $0 < w < 0.5$ | $> 0$ | grows toward 0.5 |
| $w > 0.5$ | $< 0$ | shrinks toward 0.5 |

**$w^* = 0.5$ is stable; $w^*=0$ is a degenerate fixed point that is unstable from the right.** This is a flow on the line with the phase-portrait logic of [dynamical-systems 1.1](../../dynamical-systems/lessons/01-01-flows-on-the-line.md), and the output rate at the stable point is

$$v^* = 10 \times 0.5 = \mathbf{5\ \text{Hz}} = v_0 .$$

**(c)** With $u = 20$ Hz: $v = 20w$, $\theta_M = 400w^2/5 = 80w^2$, and

$$\frac{dw}{dt} = \eta(20)(20w)\bigl(20w - 80w^2\bigr) = 8000\,\eta\,w^2(1-4w) \;\Longrightarrow\; w^* = 0.25, \quad v^* = 20 \times 0.25 = \mathbf{5\ \text{Hz}}.$$

**Doubling the input halved the weight and left the output rate exactly where it was.** *In words: the sliding threshold is automatic gain control — it does not fix the weights, it fixes the cell's firing rate, and lets the weights land wherever they must to achieve it.*

That is worth pausing on, because it is what makes BCM a *learning* rule rather than a clamp. The output rate is pinned, but with many inputs the *pattern* of weights is free, and the rule drives it toward whichever input pattern best drives the cell — selectivity emerges while total drive stays regulated. This is why BCM was proposed for ocular dominance plasticity ([2.5](02-05-development-and-wiring.md)) in the first place: it explains how a cortical cell becomes selective for one eye without becoming either silent or saturated.

## Is LTP actually memory?

The mechanism is beautiful, which is a reason to be careful rather than a reason to relax. LTP was discovered in an anaesthetized animal under electrical stimulation no natural circuit delivers. Four criteria are usually demanded, and it is worth knowing where each stands:

- **Detectability** — learning should produce synaptic change. Supported: training produces LTP-like changes in the relevant pathway.
- **Anterograde alteration** — blocking the mechanism should block learning. Strong: NMDA-receptor antagonists and CaMKII manipulations impair hippocampus-dependent learning. **But this shows the mechanism is necessary for *induction*, not that the synapse is where the memory is stored.**
- **Occlusion** — if learning uses up the available potentiation, saturating LTP first should prevent further learning. Demonstrated, though the experiment is technically delicate and the literature is mixed.
- **Retrograde alteration** — erasing the change should erase the memory, and restoring it should restore the memory. The strongest evidence: optogenetic protocols that inactivate a conditioned fear memory with an LTD-inducing pattern and reactivate it with an LTP-inducing one, and engram-tagging experiments in which reactivating the labelled cells reinstates the behaviour.

**Where the argument still has gaps:** nobody has read a specific memory out of a set of measured synaptic weights, the stimulation patterns used to induce plasticity are not the patterns circuits actually produce, and "a memory" is a behavioural category that may not map onto any single set of synapses. The case is strong and it is not closed.

## Watch out

- **You might read Hebb as "fire together, wire together."** He wrote that A *takes part in firing* B — a causal, ordered claim. STDP is that ordering, measured; the slogan is the one thing STDP shows to be wrong.
- **You might think LTD is just the absence of LTP.** It is an actively induced, separately signalled process with its own machinery (calcineurin, AMPA receptor endocytosis) and its own Ca$^{2+}$ band. Below $\theta_d$ nothing happens at all — no change is a third outcome, not the low end of a continuum.
- **You might quote a sign convention without stating it.** Half the literature plots $t_{\text{post}} - t_{\text{pre}}$ and half plots $t_{\text{pre}} - t_{\text{post}}$, and the window is asymmetric, so the two figures are mirror images. Always name the convention. This lesson uses $\Delta t = t_{\text{post}} - t_{\text{pre}}$, potentiation for $\Delta t > 0$.
- **You might think the exponential STDP window is a law.** It is a curve fit from one preparation. Sign, width and shape vary with synapse type, dendritic location, firing rate and neuromodulator; at high rates, rate-dependence overrides timing entirely.
- **You might think purely Hebbian learning is stable if the learning rate is small enough.** A small $\eta$ slows the explosion; it does not remove it. Positive feedback with no restoring term has no stable fixed point at any rate.
- **You might conclude from "NMDA blockade prevents learning" that the memory lives in NMDA receptors.** Blocking induction blocks learning — that is a claim about the *gate*, not about the *store*.

## One-liner

> Hebb predicted a synapse that strengthens when it takes part in firing its target; the NMDA receptor turned out to be exactly that, a logical AND computed by a magnesium ion whose output is calcium — which makes the change chemical and therefore local, and whose *amount* rather than its presence decides whether the synapse goes up or down.

## Problems

**P1 (🟢)** Use the STDP window with $A_+ = 1.00$ percent, $\tau_+ = 17$ ms, $A_- = 0.53$ percent, $\tau_- = 34$ ms, and $\Delta t = t_{\text{post}} - t_{\text{pre}}$. (a) Compute $\Delta w$ for $\Delta t = +8$ ms and for $\Delta t = -8$ ms. (b) A protocol delivers 60 pairings at $\Delta t = +8$ ms, each changing the weight multiplicatively. By what factor is the synapse potentiated? (c) Compute the area under each lobe. Which is larger, and what does that predict for a synapse whose pre- and postsynaptic cells fire independently as Poisson processes at 10 Hz? Give the timescale, and repeat for 1 Hz.

**P2 (🟡, bridges to information storage)** A neuron has three excitatory synapses with weights 1.0, 2.0 and 4.0 nS, and a homeostatic mechanism must cut the total excitatory drive by 30 percent. (a) Compute the new weights under multiplicative scaling. (b) Compute them under subtractive scaling that removes the same total conductance, split equally. (c) State the ratio of the largest to the smallest weight in each case, and say which scheme preserves what LTP wrote. (d) Synaptic scaling operates over hours to days while LTP takes minutes. Why is that separation of timescales necessary rather than incidental?

**P3 (🔴, optional — bridges to [4.2](04-02-memory-systems.md) and to information capacity)** A cortical pyramidal neuron has about $10^4$ excitatory synapses, and suppose each weight can be reliably held at one of 4 distinguishable levels. (a) Compare the storage capacity, in bits, if plasticity is synapse-specific versus if the whole neuron is scaled uniformly. (b) Late LTP requires proteins made in the soma and distributed cell-wide. Explain why that does not destroy the specificity you just quantified. (c) A weak stimulus at synapse X produces early LTP only, and decays within 90 minutes. Thirty minutes after it, a strong stimulus is delivered to an unrelated synapse Y on the same cell. Predict what happens to X, and state what the same mechanism predicts for behavioural memory.

<details>
<summary>Solutions</summary>

**P1 (a)**

$$\Delta t = +8:\quad \Delta w = 1.00 \times e^{-8/17} = 1.00 \times e^{-0.4706} = 1.00 \times 0.6247 = \mathbf{+0.625\ \text{percent}}$$

$$\Delta t = -8:\quad \Delta w = -0.53 \times e^{-8/34} = -0.53 \times e^{-0.2353} = -0.53 \times 0.7903 = \mathbf{-0.419\ \text{percent}}$$

**Swapping the order of the two spikes — a 16 ms change in relative timing — flips a 0.63 percent increase into a 0.42 percent decrease.**

**(b)** Multiplicatively:

$$\frac{w_{60}}{w_0} = (1.00625)^{60} = e^{60\ln(1.00625)} = e^{60 \times 0.0062305} = e^{0.3738} = \mathbf{1.453}$$

**A 45.3 percent potentiation from 60 spike pairs**, which at 5 Hz pairing takes 12 seconds. (The additive estimate, $60 \times 0.625 = 37.5$ percent, undershoots by 8 points — compounding is not negligible over this many pairs.)

**(c)** Integrating each exponential to infinity:

$$\int_0^{\infty} A_+ e^{-\Delta t/\tau_+}\,d(\Delta t) = A_+\tau_+ = 1.00 \times 17 = 17.0\ \text{percent}\cdot\text{ms}$$

$$\int_{-\infty}^{0} A_- e^{\Delta t/\tau_-}\,d(\Delta t) = A_-\tau_- = 0.53 \times 34 = 18.02\ \text{percent}\cdot\text{ms}$$

**The depression lobe has the larger area, by 6 percent.** This is not an accident of the fit — it is a designed-in stabilizer.

For independent Poisson spike trains at rates $r_{\text{pre}}$ and $r_{\text{post}}$, every pre-spike pairs with every post-spike, so the number of pairs per unit time with separation in $d(\Delta t)$ is $r_{\text{pre}}r_{\text{post}}\,d(\Delta t)$, and

$$\frac{1}{w}\frac{dw}{dt} = r_{\text{pre}}\,r_{\text{post}}\int_{-\infty}^{\infty}\Delta w(\Delta t)\,d(\Delta t) = r_{\text{pre}}r_{\text{post}}\bigl(A_+\tau_+ - A_-\tau_-\bigr)$$

At $r = 10$ Hz $= 0.01$ ms$^{-1}$, with the net area $-1.02$ percent$\cdot$ms $= -0.0102$ ms:

$$\frac{1}{w}\frac{dw}{dt} = (0.01)^2 \times (-0.0102\ \text{ms}) = -1.02\times10^{-6}\ \text{ms}^{-1} = -1.02\times10^{-3}\ \text{s}^{-1}$$

$$\tau_{\text{decay}} = \frac{1}{1.02\times10^{-3}} = 980\ \text{s} \approx \mathbf{16\ \text{minutes}}$$

At $r = 1$ Hz the rate is 100 times smaller (it scales as $r^2$), giving $\tau \approx 9.8\times10^{4}$ s $\approx \mathbf{27\ \text{hours}}$.

**Interpretation.** Uncorrelated activity does not leave a synapse alone — it slowly erases it, and quadratically faster at higher rates. **Only correlated, causally ordered activity keeps a synapse alive.** That is a built-in forgetting mechanism and a built-in normalizer: a synapse must keep earning its strength.

*(Honest caveat: this all-to-all additive model overstates the collapse. Real STDP is weight-dependent — potentiation shrinks as the weight grows — and pairs interact only with near neighbours, both of which slow the drift substantially.)*

**P2 (a)** Total is $1.0 + 2.0 + 4.0 = 7.0$ nS; a 30 percent cut means multiplying every weight by 0.70:

$$\mathbf{0.70,\; 1.40,\; 2.80\ \text{nS}} \qquad (\text{total } 4.90\ \text{nS})$$ ✓

**(b)** The same total reduction is $0.30 \times 7.0 = 2.10$ nS, split equally as $0.70$ nS from each:

$$\mathbf{0.30,\; 1.30,\; 3.30\ \text{nS}} \qquad (\text{total } 4.90\ \text{nS})$$ ✓

**(c)**

| scheme | weights | largest : smallest |
|---|---|---|
| original | 1.0, 2.0, 4.0 | **4.0** |
| multiplicative | 0.70, 1.40, 2.80 | **4.0** — unchanged |
| subtractive | 0.30, 1.30, 3.30 | **11.0** — distorted |

**Multiplicative scaling preserves every ratio, so it preserves the pattern LTP wrote; subtractive scaling does not.** The information a neuron stores is in the *relative* weights — which inputs are strong compared to which — and multiplication is the unique operation that changes total drive while leaving all such comparisons intact.

The subtractive scheme has a second, fatal problem: **it can drive weak synapses negative.** Had the smallest weight been 0.5 nS, subtraction would demand $-0.2$ nS, which is not a thing. Multiplication cannot cross zero.

**(d)** **Because the two mechanisms want opposite things and must not be able to argue.** LTP raises a synapse's weight; homeostasis, seeing the raised firing rate, wants to lower it. If they operated on the same timescale, homeostasis would undo learning as fast as learning occurred, and the neuron would be a leaky integrator with no memory.

Separating them by two to three orders of magnitude in time (minutes versus hours to days) makes homeostasis effectively **blind to individual learning events** and responsive only to the slow average. It corrects the drift accumulated over a day without touching what was learned in the last ten minutes. **Slow, multiplicative, and global is exactly the combination that stabilizes without erasing** — change any one of the three and it stops working.

**P3 (a)** Four distinguishable levels is $\log_2 4 = 2$ bits per synapse.

$$\text{synapse-specific: } 10^{4} \times 2 = \mathbf{2\times10^{4}\ \text{bits}} \approx 2.5\ \text{kilobytes per neuron}$$

$$\text{uniform cell-wide scaling: one gain parameter} = \mathbf{2\ \text{bits per neuron}}$$

**A factor of $10^{4}$.** Scaled to $10^{11}$ neurons the difference is between roughly $10^{15}$ bits and $10^{11}$ bits — between something that could plausibly hold a life and something that could not hold a photograph. **Input specificity is not a detail of the mechanism; it is the entire reason the storage capacity argument works**, and it exists because the NMDA receptor's output is a calcium ion confined to a spine rather than a voltage shared by the whole cell.

**(b)** **Synaptic tagging and capture.** Strong stimulation sets a transient local **tag** at the active synapse and, separately, triggers somatic transcription and translation. The resulting plasticity-related proteins diffuse throughout the dendritic tree — genuinely cell-wide — but they are **captured only where a tag is present**. Delivery is global; the address is local. Specificity is preserved not by restricting the goods but by restricting who can take them.

**(c)** **X becomes late LTP and persists**, even though the weak stimulus alone could not have produced it. X's tag is still present (tags last on the order of an hour or two), the strong stimulus at Y has triggered protein synthesis, and X captures those proteins. This is the classic **"weak-before-strong" tagging result**, and it is a real prediction the model made and won.

**What it predicts for behaviour: behavioural tagging.** A weak experience — one that would normally be forgotten within a couple of hours — should become long-lasting if a strong, novel, or arousing experience occurs at the same neurons within the tag's lifetime, *even though the two events are unrelated*. That is observed: novelty exposure around the time of weak learning converts a fading memory into a persistent one.

**Two things to notice.** First, this dissolves the paradox that made late LTP look impossible — you do not need a private courier to each synapse, only a local flag. Second, it means **whether a memory lasts is not settled at the moment it is formed**; it depends on what else happens in the following hour. [4.2](04-02-memory-systems.md) picks this up as synaptic consolidation, and it is the mechanistic seed of why interleaved, spaced experience consolidates better than massed experience.

</details>

## Flashback

**From Lesson 2.2 (neurotransmitters and receptors — divisive versus subtractive inhibition):** A neuron has a leak conductance $g_L = 10$ nS at $E_L = -65$ mV and a spike threshold of $-50$ mV. Excitatory synapses have $E_e = 0$ mV. Steady-state voltage under several conductances is the conductance-weighted average of their reversal potentials.

(a) Find $V_m$ for an excitatory conductance of $g_e = 4$ nS and again for $g_e = 12$ nS. Does the cell fire in each case? (b) Now add an inhibitory conductance $g_i = 25$ nS with $E_i = -65$ mV (purely shunting). Recompute both cases and express the effect as a factor multiplying the depolarization. (c) Instead add $g_i = 25$ nS with $E_i = -80$ mV (hyperpolarizing). Recompute both. (d) Which inhibition blocks the large input, and what is the general principle?

<details>
<summary>Solution</summary>

**(a)** $$V_m = \frac{g_L E_L + g_e E_e}{g_L + g_e}$$

$$g_e = 4:\quad V_m = \frac{10(-65) + 4(0)}{14} = \frac{-650}{14} = \mathbf{-46.4\ \text{mV}} \quad (\Delta V = +18.6\ \text{mV}) \;\Rightarrow\; \textbf{fires}$$

$$g_e = 12:\quad V_m = \frac{-650}{22} = \mathbf{-29.5\ \text{mV}} \quad (\Delta V = +35.5\ \text{mV}) \;\Rightarrow\; \textbf{fires}$$

**(b)** With $E_i = E_L = -65$ mV the inhibitory synapse contributes $25(-65) = -1625$ to the numerator and $25$ to the denominator:

$$g_e = 4:\quad V_m = \frac{-650 + 0 - 1625}{39} = \frac{-2275}{39} = \mathbf{-58.3\ \text{mV}} \quad (\Delta V = +6.7\ \text{mV}) \;\Rightarrow\; \text{blocked}$$

$$g_e = 12:\quad V_m = \frac{-2275}{47} = \mathbf{-48.4\ \text{mV}} \quad (\Delta V = +16.6\ \text{mV}) \;\Rightarrow\; \textbf{still fires}$$

The factor is the ratio of total conductance without to with the shunt:

$$g_e = 4: \;\; \frac{14}{39} = 0.359 \quad\text{and}\quad 18.6 \times 0.359 = 6.7\ \text{mV}$$ ✓

$$g_e = 12: \;\; \frac{22}{47} = 0.468 \quad\text{and}\quad 35.5 \times 0.468 = 16.6\ \text{mV}$$ ✓

**Shunting inhibition multiplies the EPSP** — and note that the factor is not constant: it is $0.359$ for the small input and $0.468$ for the large one, because $g_e$ itself sits in the denominator. Shunting is divisive *and* mildly saturating, which is why it is the natural substrate for gain control ([2.6](02-06-circuit-motifs-computation.md)) rather than a perfect divider.

**(c)** With $E_i = -80$ mV the numerator contribution is $25(-80) = -2000$:

$$g_e = 4:\quad V_m = \frac{-650 - 2000}{39} = \frac{-2650}{39} = \mathbf{-67.9\ \text{mV}} \quad\Rightarrow\; \text{blocked (below rest)}$$

$$g_e = 12:\quad V_m = \frac{-2650}{47} = \mathbf{-56.4\ \text{mV}} \quad\Rightarrow\; \textbf{blocked}$$

**(d)** **Only the hyperpolarizing synapse blocks the large input.** Comparing the two cases algebraically, the hyperpolarizing synapse gives the shunting result *plus* an extra offset:

$$\Delta V_{\text{extra}} = \frac{g_i\,(E_i - E_L)}{G_{\text{total}}} = \frac{25 \times (-15)}{39} = -9.6\ \text{mV} \quad\text{and}\quad \frac{25 \times (-15)}{47} = -8.0\ \text{mV}$$

**Roughly the same offset regardless of how strong the excitation is — that is the subtractive component.**

**The principle:** a shunting synapse (reversal potential at rest) contributes only to the denominator, so it **scales** the response and a large enough input survives it proportionally. A hyperpolarizing synapse also contributes to the numerator, so it **offsets** the response by an amount that barely depends on the drive, and it raises the effective threshold for everything. A circuit that needs to change a neuron's gain without changing what it is selective for wants the first; a circuit that needs to veto regardless of input size wants the second.

</details>

## Connections

- **Backward:** [2.2](02-02-neurotransmitters-receptors.md) built the NMDA receptor's Mg$^{2+}$ block and the $B(V)$ curve this entire lesson runs on, and supplied the reversal-potential logic behind $E_{\text{Ca}}$; [2.3](02-03-synaptic-integration.md) supplies the summation that gets the cell depolarized enough to unblock it in the first place, and the dendritic compartmentalization that makes a spine a private chemical volume; [1.3](01-03-the-action-potential.md)'s action potential is what backpropagates into the dendrite and serves as the postsynaptic term in the Hebbian product; [2.5](02-05-development-and-wiring.md)'s activity-dependent refinement stated the Hebbian rule informally and handed the mechanism here.
- **Forward:** [4.2](04-02-memory-systems.md) takes late LTP as synaptic consolidation and asks which memory systems use it and over what timescales; [4.3](04-03-attention-decision-making.md) needs value learning built on the same machinery; [3.5](03-05-motor-control-correction.md)'s cerebellar parallel-fibre LTD is this rule with a climbing fibre supplying the postsynaptic term as an error signal, and the basal ganglia use dopamine to gate it as a reward signal; [4.4](04-04-disease-a-taste.md) reads several conditions off plasticity gone wrong.
- **Sideways:** the CaMKII autophosphorylation switch and the calcineurin arm are the bistable-kinase and phosphatase logic of [molecular-cell-biology 2.3](../../molecular-cell-biology/lessons/02-03-kinase-cascades-switch.md), and the Ca$^{2+}$/calmodulin amplification is [molecular-cell-biology 2.2](../../molecular-cell-biology/lessons/02-02-second-messengers-amplification.md); the CREB-dependent transcription of late LTP is [molecular-cell-biology 4.2](../../molecular-cell-biology/lessons/04-02-eukaryotic-transcription-machine.md); the BCM stability analysis is a one-dimensional flow in the sense of [dynamical-systems 1.1](../../dynamical-systems/lessons/01-01-flows-on-the-line.md); and the Hebbian rule's tendency to extract the principal component of its input, plus the normalization needed to tame it, is the unsupervised-learning material of [machine-learning](../../machine-learning/syllabus.md) — STDP's causal asymmetry is a temporal-difference rule appearing in ion-channel biophysics rather than in an algorithm.
