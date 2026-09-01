# Neuroscience · Lesson 2.6: Circuit motifs and computation

> ⏱ ~15 min · Module 2: Synapses, wiring & circuits · Builds on: [2.3](02-03-synaptic-integration.md), [2.4](02-04-electrical-synapses.md) · Unlocks: 3.1 (transduction & neural coding), 3.2 (vision)

## Why this matters

Module 2 has been building parts: a synapse that releases ([2.1](02-01-chemical-synaptic-transmission.md)), a receptor that sets the sign ([2.2](02-02-neurotransmitters-receptors.md)), a dendrite that sums ([2.3](02-03-synaptic-integration.md)), a gap junction that couples ([2.4](02-04-electrical-synapses.md)), and an algorithm that wires them together ([2.5](02-05-development-and-wiring.md)). This lesson asks the question those parts were for: **what does a circuit made of them compute?**

The usual answer is a catalogue of cell types, and it is useless. Knowing that a region contains pyramidal cells, basket cells, chandelier cells and Martinotti cells tells you nothing about what the region does. **Knowing the wiring pattern does.** A handful of connection patterns — call them motifs — recur across every brain region and every species examined, and each one implements a computation you can write down and predict.

That is the claim of this lesson, and it is stronger than it sounds: **name the motif and you can predict the transformation, without knowing a single molecule.** Feedforward inhibition sharpens timing whether it is in the cerebellum, the cortex or the auditory brainstem. Lateral inhibition detects edges whether the axis is space, frequency or orientation. The motif is the level at which the explanation lives.

## The idea

**Every motif in this catalogue is built from three ingredients you already have**: a sign (excitatory or inhibitory, set by the postsynaptic receptor's reversal potential — [2.2](02-02-neurotransmitters-receptors.md)), a delay (synaptic, and one extra synapse costs a couple of milliseconds — [2.1](02-01-chemical-synaptic-transmission.md)), and a topology (who connects to whom). Combine three ingredients a few ways and you get the whole repertoire.

**The organizing distinction is feedforward versus feedback.** A feedforward motif transforms a signal on its way past; a feedback motif closes a loop, and closing a loop changes the *character* of the system, not just its gain — it can stabilize, oscillate, amplify without bound, or latch. Everything below is one of those four outcomes.

**And one preview of the punchline.** The two most important circuits in the catalogue are algebraically the *same* circuit with opposite signs:

$$r = \frac{gI}{1+L}\quad \text{(negative loop: gain control)}, \qquad r = \frac{gI}{1-L}\quad\text{(positive loop: amplification)}$$

*In words: closing a loop divides the response by one plus the loop gain if the loop is inhibitory, and by one minus it if the loop is excitatory.* The first is bounded and stabilizing for any $L$; the second blows up as $L \to 1$. **That single sign is the difference between gain control and a seizure.**

## The formal version

Notation used throughout: $r$ is a principal cell's firing rate (Hz), $I$ an input drive (pA), $g$ the cell's open-loop gain (Hz/pA), $\tau$ the membrane time constant (ms), and $\theta$ the depolarization needed to reach threshold from rest (mV).

### 1. Feedforward excitation: convergence plus threshold is coincidence detection

Many axons converge on one cell; each EPSP is a fraction of $\theta$; the cell fires only when enough arrive close enough together. **The threshold is what turns summation into a computation** — without it, convergence would just be addition.

Take [2.3](02-03-synaptic-integration.md)'s numbers: rest $-65$ mV, threshold $-50$ mV so $\theta = 15$ mV, and $\tau = 15$ ms. Two inputs of $a = 8$ mV arrive $\delta$ apart. The second sits on the decayed remains of the first:

$$V_{\text{peak}} = a + a\,e^{-\delta/\tau} \ \ge\ \theta \quad\Longrightarrow\quad \boxed{\;\delta \le \tau \ln\!\frac{a}{\theta - a}\;}$$

$$\delta_{\max} = 15\ln\frac{8}{7} = 15 \times 0.1335 = \mathbf{2.0\ \text{ms}}$$

**Notice what just happened.** The membrane time constant is 15 ms, but the coincidence window is 2 ms. **The window is not $\tau$; it is set by $\tau$ *and* by how much margin the inputs have over threshold**, and it collapses toward zero as the inputs get weaker. A cell that barely reaches threshold on a synchronous pair is an exquisite coincidence detector; the same cell with a lower threshold is a sluggish integrator. Sanity check the formula: with $a = 10$ mV, $\delta_{\max} = 15\ln 2 = 10.4$ ms — five times longer, from a 25 percent change in EPSP size.

### 2. Feedforward inhibition: a delay line that clamps the window shut

**Wiring.** The same input excites a principal cell *and* an interneuron, which inhibits that principal cell one synapse later — a disynaptic delay of roughly $\Delta = 2$ ms.

**Computation.** The excitation gets a $\Delta$-millisecond head start and is then cancelled. Model both as decaying exponentials of the same amplitude $A$:

$$V(t) = A\,e^{-t/\tau} - A\,e^{-(t-\Delta)/\tau}\,\Theta(t-\Delta)$$

*In words: net depolarization exists only during the window between excitation arriving and inhibition catching up.* **The integration window is no longer $\tau$; it is $\Delta$** — and $\Delta$ is a property of the circuit, not of the membrane. That is the whole point: **the circuit overrides the biophysics.**

Work the veto. Volleys of 3 inputs (12 mV total) arrive every 5 ms, each volley also driving the interneuron to deliver a matched $-12$ mV IPSP 2 ms later.

- **Without inhibition** the cell integrates: at $t=5$ ms the sum is $12 + 12e^{-5/15} = 12 + 8.60 = 20.6$ mV, past $\theta = 15$ mV. **It fires on the second volley.**
- **With inhibition**, the residue left by volley 1 at $t = 5$ ms is $12e^{-5/15} - 12e^{-3/15} = 8.60 - 9.83 = -1.23$ mV. The sum is $12 - 1.23 = \mathbf{10.8}$ mV. **It never fires**, no matter how long the train runs.
- **But a synchronous volley of 4 inputs** puts 16 mV on the membrane at $t=0$, inside the 2 ms window, and fires.

**The same cell, the same synapses, the same total input — and the addition of one interneuron converts a rate detector into a synchrony detector.** This is the vetoing interneuron of the syllabus's [Boss problem 2](../syllabus.md), and it is why cortical inhibition arrives 1–3 ms after excitation almost everywhere it has been measured.

### 3. Feedback inhibition: gain control, and oscillation when it is late

**Wiring.** The principal cell excites an interneuron that inhibits it back. Negative feedback.

Let the interneuron's rate be $i = kr$ and its synapse have weight $w$, so the principal cell sees $r = g(I - wi)$. Substituting:

$$r = \frac{gI}{1 + gwk} \equiv \frac{gI}{1+L}, \qquad L \equiv gwk$$

*In words: the loop divides the cell's gain by one plus the loop gain.* With $g = 0.5$ Hz/pA and $wk = 6$ pA/Hz, $L = 3$: an input sweeping 0–800 pA would drive 0–400 Hz open loop (impossible — cells saturate) but drives 0–100 Hz closed loop. **Feedback buys dynamic range: the circuit reports a wide input range inside a narrow output range.** This is *normalization* in its simplest form.

The second, subtler payoff is **robustness**. Differentiating,

$$\frac{d\ln r}{d\ln g} = \frac{1}{1+L}$$

*In words: a fractional change in the cell's intrinsic gain produces a fractional change in output four times smaller when $L=3$.* Neuromodulators, temperature and channel expression all wobble $g$; the loop absorbs them.

**Now the cost.** Real inhibition is late — a disynaptic delay plus a GABA-A conductance that decays over 5–10 ms. Delayed negative feedback overshoots, and past a critical loop gain the fixed point loses stability to a limit cycle. This is a **Hopf bifurcation** ([dynamical-systems 3.3](../../dynamical-systems/lessons/03-03-hopf-bifurcation.md)), and the resulting oscillation is a genuine limit cycle, not ringing ([dynamical-systems 2.3](../../dynamical-systems/lessons/02-03-limit-cycles.md)). The frequency follows from the lag: the loop oscillates near the frequency at which the total phase lag reaches half a cycle, so with a dominant lag of 10–12 ms the period is 20–25 ms — **35–50 Hz, which is the gamma band.** Cortical gamma is widely modelled as exactly this loop. Control theory calls the same calculation a phase-margin problem ([control-systems 3.4](../../control-systems/lessons/03-04-gain-and-phase-margins.md)).

### 4. Lateral inhibition: a high-pass filter in space

**Wiring.** Neighbouring units inhibit each other, so a cell's output is its own drive minus a weighted average of its neighbours'.

Take the smallest possible kernel, $(-1, +2, -1)$, applied to a row of receptor intensities. Two facts fall straight out.

**Uniform illumination gives exactly zero.** For any constant intensity $S$: $-S + 2S - S = 0$. **The cell reports nothing about absolute light level — at any level.**

**An edge gives a matched pair.** For intensities $\dots, 20, 20, \mathbf{20\,|\,50}, 50, 50, \dots$:

| cell | neighbours, centre | response |
|---|---|---|
| deep in the dark | 20, 20, 20 | $0$ |
| last dark cell | 20, **20**, 50 | $\mathbf{-30}$ |
| first bright cell | 20, **50**, 50 | $\mathbf{+30}$ |
| deep in the light | 50, 50, 50 | $0$ |

**A dark band on the dark side and a bright band on the light side, with nothing anywhere else.** Those are **Mach bands** — you see them at any edge, and they are not in the world. Hartline's *Limulus* eye was where this was first measured, and the arithmetic above is essentially what he found.

**The general form.** A centre–surround kernel is a difference of Gaussians, and its spatial Fourier transform ([signals-systems 2.3](../../signals-systems/lessons/02-03-continuous-time-fourier-transform.md)) is a difference of Gaussians too:

$$K(x) = \frac{w_c}{\sqrt{2\pi}\,\sigma_c}e^{-x^2/2\sigma_c^2} - \frac{w_s}{\sqrt{2\pi}\,\sigma_s}e^{-x^2/2\sigma_s^2} \;\;\Longrightarrow\;\; \hat K(k) = w_c e^{-\sigma_c^2k^2/2} - w_s e^{-\sigma_s^2k^2/2}$$

*In words: the response to a sinusoidal grating of spatial frequency $k$ is $\hat K(k)$.* Since $\hat K(0) = w_c - w_s$, **a balanced surround has exactly zero DC gain** — the algebraic version of "uniform light gives zero". Because $\sigma_s > \sigma_c$, the surround term dies off faster in $k$, so $\hat K$ is positive at high $k$: **the motif is a band-pass filter, peaking at**

$$k^* = \sqrt{\frac{4\ln(\sigma_s/\sigma_c)}{\sigma_s^2 - \sigma_c^2}}$$

With $\sigma_c = 0.1°$ and $\sigma_s = 0.3°$: $k^* = \sqrt{4(1.099)/0.08} = 7.4$ rad/deg, i.e. $7.4/2\pi = 1.2$ cycles per degree — the right order for a retinal ganglion cell. **[3.2](03-02-vision.md)'s centre–surround receptive field is this motif and nothing more**, and the reason the retina bothers is in [3.1](03-01-transduction-neural-coding.md): natural images are spatially correlated, so the flat component is redundant and the optic nerve is narrow ([information-theory 1.3](../../information-theory/lessons/01-03-mutual-information.md)).

### 5. Divisive normalization: dividing by the neighbourhood

Generalize feedback inhibition from one cell to a pool. Each neuron's response is divided by the pooled activity of its neighbours:

$$\boxed{\;R_i = \gamma\,\frac{D_i^{\,n}}{\sigma^{\,n} + \sum_{j \in \text{pool}} D_j^{\,n}}\;}$$

*In words: a neuron reports its share of the total drive in its neighbourhood, not its absolute drive.* Here $D_i$ is neuron $i$'s excitatory drive, $\sigma$ a semi-saturation constant that keeps the denominator finite at low drive, and $n \approx 2$.

Work it, with $\gamma = 100$ Hz, $n = 2$, $\sigma = 10$, and a pool with drives $(40, 20, 10, 10)$:

$$R_1 = 100\cdot\frac{1600}{100 + 2200} = 69.6\ \text{Hz}$$

**Halve every contrast**, giving $(20, 10, 5, 5)$ — the linear drive falls fourfold in $D^2$:

$$R_1 = 100\cdot\frac{400}{100+550} = 61.5\ \text{Hz}$$

**A 12 percent change in response for a twofold change in contrast.** And in the high-contrast limit where $\sigma^n$ is negligible, both give $1600/2200 = 400/550 = 0.727$ exactly: **perfect contrast invariance**, because scaling every $D_j$ cancels top and bottom. Meanwhile, presenting neuron 1's stimulus *alone* ($40,0,0,0$) gives $100 \cdot 1600/1700 = 94.1$ Hz — **adding stimuli the neuron does not prefer suppresses it**, which is the experimental signature that made normalization famous.

Normalization is one of the few genuinely **canonical computations**: the same equation fits contrast responses in V1, odour responses in the fly antennal lobe, multisensory integration, value coding, and attention ([4.3](04-03-attention-decision-making.md)). It also implements redundancy reduction — dividing out the common component of a correlated population.

### 6. Recurrent excitation: amplification, memory, and the edge

**Wiring.** Principal cells excite each other. Cortex is dominated by this: most excitatory synapses onto a cortical pyramidal cell come from other cortical pyramidal cells, not from the thalamus.

$$r = g(I + wr) \quad\Longrightarrow\quad r = \frac{gI}{1 - gw}$$

With $gw = 0.9$ the circuit amplifies by $1/(1-0.9) = \mathbf{10\times}$. **A weak, sparse feedforward input can dominate a cortical area because the local network multiplies it** — which is why thalamic afferents can be a small minority of synapses and still drive the region.

Two consequences. First, with a saturating nonlinearity, a loop with $gw > 1$ has a stable high-activity state that persists after $I$ returns to zero: **an attractor**, and the standard account of working-memory delay activity ([4.2](04-02-memory-systems.md), [4.3](04-03-attention-decision-making.md)). The circuit has become a memory element with no synaptic change at all. Second, $gw \ge 1$ without a matching brake is a positive feedback loop with gain above one — **that is a seizure** ([4.4](04-04-disease-a-taste.md)), and it is why the next section is not optional.

### 7. Winner-take-all: recurrence plus global inhibition is selection

**Wiring.** Two (or many) self-exciting populations, all driving and all inhibited by one shared inhibitory pool. With self-excitation $a$, global inhibition $b$, and $g=1$:

$$r_i = I_i + a\,r_i - b\sum_j r_j$$

**The trick is to look at the sum and the difference separately.** The inhibition term is identical for both units, so it cancels from the difference:

$$d = r_1 - r_2 = \frac{\Delta I}{1-a}, \qquad s = r_1 + r_2 = \frac{I_1+I_2}{1-a+2b}$$

*In words: recurrent excitation amplifies the difference between the units; global inhibition suppresses their sum.* **Do both at once and the ratio between winner and loser diverges.**

Numbers, with $a = 0.9$, $b = 0.5$, $I = (10, 8)$ — a 25 percent input difference:

$$d = \frac{2}{0.1} = 20, \qquad s = \frac{18}{1 - 0.9 + 1.0} = 16.4 \;\Longrightarrow\; r_1 = 18.2,\;\; r_2 = -1.8$$

Rates cannot be negative, so $r_2$ rectifies to 0 and we re-solve for the winner alone: $r_1 = 10 + 0.9r_1 - 0.5r_1 \Rightarrow r_1 = 10/0.6 = 16.7$ Hz. Check consistency — unit 2's net drive is $8 - 0.5(16.7) = -0.3 < 0$, so it stays silent. ✓

$$\textbf{Input } 10 : 8 \;\longrightarrow\; \textbf{output } 16.7 : 0$$

**A 25 percent difference in evidence becomes a categorical choice.** This is the natural circuit implementation of selection, and it reappears as attentional selection ([4.3](04-03-attention-decision-making.md)), saccade target choice, and basal-ganglia action selection ([3.5](03-05-motor-control-correction.md)).

### The regime all of this runs in: excitation–inhibition balance

Sections 6 and 7 required inhibition matched to excitation, and [2.2](02-02-neurotransmitters-receptors.md) showed why: a recurrent network is stable only if inhibition tracks excitation. In cortex the tracking is remarkably tight — a cell receives large excitatory and large inhibitory currents that nearly cancel, leaving a small fluctuating net drive.

**That looks wasteful, and it is a design choice with three payoffs.**

1. **Speed.** The cell sits just below threshold rather than far from it, so it responds to new input in milliseconds instead of waiting to charge through $\tau$.
2. **Temporal precision.** Firing is driven by *fluctuations* crossing threshold rather than by a slow mean drift, so spike times are sharp and the cell is sensitive to input synchrony — exactly the regime section 1's coincidence-window formula describes.
3. **Dynamic range.** The cancellation is what implements normalization at the network level: excitation and inhibition scale together, so the net stays in range across orders of magnitude of input.

**Balance is not a compromise between two failure modes. It is the only regime in which a recurrent network is simultaneously stable, fast and sensitive.**

## Picture

![A catalogue of four circuit motifs drawn in a single visual language, each with a miniature plot of the computation it performs. Panel a, feedforward inhibition: an input excites both a principal cell and an interneuron, and the interneuron inhibits the principal cell about two milliseconds later; beneath it a plot of net drive against time shows a synchronous volley crossing threshold inside that brief window while an asynchronous train of the same inputs never does. Panel b, feedback inhibition: the principal cell excites an interneuron that inhibits it back; beneath it a plot of firing rate against input drive shows a steep open-loop line running off scale and a shallow saturating closed-loop curve whose gain is divided by one plus the loop gain. Panel c, lateral inhibition: three receptors feed one output cell with weight plus two from the centre and minus one from each neighbour, a kernel summing to zero; beneath it a step of light produces zero response on both uniform sides and a paired undershoot and overshoot at the edge, the Mach bands. Panel d, winner-take-all: two self-exciting principal cells both drive a shared inhibitory interneuron that inhibits them both; beneath it two input bars of ten and eight become one output bar of sixteen point seven and one of zero.](assets/02-06-fig1.svg)

## Worked examples

**Example 1 (mechanical — the surround does not have to be balanced).** A row of photoreceptors sees intensities $\dots, 30, 30, 30, 30, 30, \dots$ with a single bright point of intensity 90 at one position. Compute the responses of the ganglion cells for (a) the balanced kernel $(-1, +2, -1)$ and (b) an unbalanced kernel $(-0.7, +2, -0.7)$. (c) Interpret the difference.

**(a)** Label the bright receptor position 0.

$$\text{cell } {-2}: \; -30 + 60 - 30 = 0$$
$$\text{cell } {-1}: \; -30 + 60 - 90 = \mathbf{-60}$$
$$\text{cell } 0: \; -30 + 180 - 30 = \mathbf{+120}$$
$$\text{cell } {+1}: \; -90 + 60 - 30 = \mathbf{-60}$$
$$\text{cell } {+2}: \; 0$$

**A large positive response flanked by two negative ones, and zero everywhere else.** Total response summed over all cells: $-60 + 120 - 60 = 0$. **The population's total output is zero — the kernel sums to zero, so however you illuminate the array, the total activity is unchanged.** All the information is in *where* the activity is, none in how much there is.

**(b)** Now the kernel sums to $2 - 1.4 = +0.6$.

$$\text{cell } {-2}: \; -21 + 60 - 21 = \mathbf{+18}$$
$$\text{cell } {-1}: \; -21 + 60 - 63 = \mathbf{-24}$$
$$\text{cell } 0: \; -21 + 180 - 21 = \mathbf{+138}$$
$$\text{cell } {+1}: \; -63 + 60 - 21 = \mathbf{-24}$$
$$\text{cell } {+2}: \; +18$$

**(c)** The unbalanced kernel has DC gain $\hat K(0) = 0.6$, so uniform illumination at 30 now produces $0.6 \times 30 = 18$ Hz everywhere — the cell reports background luminance as well as structure. **Real retinal ganglion cells are unbalanced in exactly this direction**: the surround is slightly weaker than the centre, so some absolute-level information survives, at the cost of spending part of the cell's limited firing range on a mostly-redundant signal. The balance is a tunable trade between *reporting the level* and *reporting the structure*, and it shifts with adaptation state — surrounds strengthen in bright light, when structure is worth more than level.

**Example 2 (why you'd care — a circuit that changes its computation without changing a synapse).** A cortical pyramidal cell has $\tau = 20$ ms, $\theta = 15$ mV, and receives 8 mV EPSPs. It also receives feedforward inhibition through an interneuron with a 2 ms disynaptic delay. A neuromodulator ([2.2](02-02-neurotransmitters-receptors.md)) suppresses the interneuron's output — a common action of acetylcholine on some cortical interneuron classes. (a) What is the coincidence window with the interneuron intact? (b) Without it? (c) What has the modulator done, computationally?

**(a)** With feedforward inhibition intact, net excitatory drive exists only between excitation arriving and inhibition catching up. **The window is the disynaptic delay: $\Delta = 2$ ms**, independent of $\tau$ and of the EPSP size.

**(b)** With the interneuron silenced, the window reverts to the membrane's own:

$$\delta_{\max} = \tau\ln\frac{a}{\theta-a} = 20\ln\frac{8}{7} = 20 \times 0.1335 = \mathbf{2.7\ \text{ms}}$$

for a *pair* of inputs — but with more inputs available the margin grows and the window opens further. Three 8 mV inputs (24 mV synchronous, 9 mV of headroom) summate to threshold as long as the last arrives before the first two have decayed below 7 mV; solving $8 + 8x + 8x^2 = 15$ for $x = e^{-\delta/\tau}$ (equally spaced) gives $8x^2+8x-7=0$, $x = 0.561$, and $\delta = 20\ln(1/0.561) = \mathbf{11.6\ \text{ms}}$. **The unconstrained cell integrates over roughly $\tau$; the constrained cell is locked to 2 ms regardless.**

**(c)** **The modulator has switched the cell from a coincidence detector to an integrator, and it did so without touching a single synaptic weight.** In the inhibited state the cell reports *synchrony* among its inputs; in the disinhibited state it reports their *rate*. Same neurons, same connections, different computation.

This is the single most important caveat about the whole catalogue, and it is worth stating twice: **the motif constrains what a circuit can compute; the modulatory state selects which of those computations it is doing right now.** It is also the mechanism behind attention-like gain changes ([4.3](04-03-attention-decision-making.md)) and behind the cholinergic switch between encoding and consolidation regimes ([4.2](04-02-memory-systems.md)).

## Watch out

- **You might think the coincidence window is the membrane time constant.** It is $\tau\ln\!\big(a/(\theta-a)\big)$ — set jointly by $\tau$ *and* the margin over threshold, and typically several times shorter than $\tau$. A circuit with feedforward inhibition overrides it entirely with the disynaptic delay.
- **You might think "inhibition" means "less output."** Feedback inhibition *rescales* output — it is divisive, and the circuit's job is to keep the output in range, not to reduce it. Lateral inhibition's job is not suppression at all: it discards the flat component and keeps the structure, and a zero-sum kernel leaves the population's *total* activity unchanged.
- **You might read a wiring diagram as a functional diagram.** **A motif's presence does not prove its function.** The same three-cell pattern computes different things depending on synaptic strengths, kinetics, and where on the dendrite the synapses land ([2.3](02-03-synaptic-integration.md)) — none of which is in the wiring. A connectome constrains dynamics; it does not determine them ([4.5](04-05-methods-a-taste.md)).
- **You might treat these motifs as separate mechanisms.** Feedback inhibition and recurrent excitation are the same equation with one sign flipped; divisive normalization is feedback inhibition over a pool; winner-take-all is recurrent excitation plus normalization. **There are fewer things here than the list suggests.**
- **You might expect negative feedback to be unconditionally stabilizing.** Delayed negative feedback with high loop gain oscillates — it is a Hopf bifurcation, not a malfunction, and cortical gamma is arguably that oscillation put to work.

## One-liner

> Closing a loop divides the response by $1 \pm L$ — minus for excitation, which amplifies and can run away, plus for inhibition, which controls gain — while a delayed feedforward inhibitory branch replaces the membrane's integration window with its own two-millisecond one, and a zero-sum surround throws away everything except the edges.

## Problems

**P1 (🟢)** A row of receptors reports intensities $20, 20, 20, 20, 50, 50, 50$ at positions 0–6. Each ganglion cell applies the kernel $(-1, +2, -1)$ to its own receptor and its two neighbours.

(a) Compute the responses of cells 1 through 5.
(b) The whole scene is now brightened to $60, 60, 60, 60, 150, 150, 150$ — every intensity tripled. Recompute cell 4's response and comment.
(c) A cell reports 0. Name two completely different stimuli that produce this.

**P2 (🟡)** A principal cell has open-loop gain $g = 0.5$ Hz/pA and is embedded in a feedback-inhibitory loop whose combined interneuron-plus-synapse strength is $wk = 6$ pA/Hz.

(a) Compute the loop gain $L$ and the firing rate at an input drive of 200 pA, with and without the loop.
(b) A neuromodulator raises the cell's intrinsic gain $g$ by 20 percent. Compute the new closed-loop rate at 200 pA and express the change as a percentage. Compare it to the prediction of $d\ln r/d\ln g = 1/(1+L)$.
(c) In one sentence, say what property of the circuit this robustness costs.

**P3 (🔴, bridges to [3.3](03-03-audition-somatosensation.md))** A neuron has rest $-65$ mV, threshold $-50$ mV, $\tau = 12$ ms, and receives 5 mV EPSPs that sum linearly. Volleys of **2** inputs (10 mV) arrive every 6 ms. Feedforward inhibition delivers an IPSP equal and opposite to each volley's excitation, 3 ms after it.

(a) Without the inhibitory branch, does the cell fire, and on which volley?
(b) With the branch intact, find the steady-state peak depolarization reached by a long train, and state whether the cell ever fires.
(c) What is the smallest *synchronous* volley that does fire, and what does the comparison of (b) and (c) say about what this circuit measures?

<details>
<summary>Solutions</summary>

**P1 (a)** Each cell's response is $-(\text{left}) + 2(\text{own}) - (\text{right})$:

| cell | left, own, right | response |
|---|---|---|
| 1 | 20, 20, 20 | $-20+40-20 = \mathbf{0}$ |
| 2 | 20, 20, 20 | $-20+40-20 = \mathbf{0}$ |
| 3 | 20, 20, 50 | $-20+40-50 = \mathbf{-30}$ |
| 4 | 20, 50, 50 | $-20+100-50 = \mathbf{+30}$ |
| 5 | 50, 50, 50 | $-50+100-50 = \mathbf{0}$ |

**Zero everywhere except a $\pm 30$ pair straddling the edge** — Mach bands.

**(b)** Cell 4 now sees $60, 150, 150$:

$$-60 + 300 - 150 = \mathbf{+90}.$$

**The response tripled, exactly as the stimulus did.** The kernel is linear, so it is *scale-covariant*, not scale-invariant — it discards the additive DC component, not multiplicative contrast. Making a scene brighter multiplies both the mean and the step, and only the mean is thrown away. (Contrast *invariance* is a different motif — divisive normalization, §5 — and this is a good demonstration of why the retina needs both.)

**(c)** Two stimuli giving zero: **uniform illumination at any intensity whatsoever** (cells 1, 2 and 5 above), and **a linear intensity ramp**. Check the ramp with intensities $10, 20, 30$: $-10 + 40 - 30 = 0$. The kernel $(-1,+2,-1)$ is a discrete second derivative, so it annihilates anything with zero curvature — constants *and* linear gradients. **The cell is not reporting brightness or even brightness difference; it is reporting curvature.** This is why a gently shaded wall looks flat while a sharp edge pops.

**P2 (a)** $$L = g\,wk = 0.5 \times 6 = \mathbf{3}.$$

$$r_{\text{open}} = gI = 0.5 \times 200 = \mathbf{100\ \text{Hz}}, \qquad r_{\text{closed}} = \frac{gI}{1+L} = \frac{100}{4} = \mathbf{25\ \text{Hz}}.$$

**(b)** New $g = 0.6$ Hz/pA, so $L' = 0.6 \times 6 = 3.6$:

$$r' = \frac{0.6 \times 200}{1+3.6} = \frac{120}{4.6} = \mathbf{26.09\ \text{Hz}}.$$

$$\text{change} = \frac{26.09-25}{25} = \mathbf{+4.3\ \text{percent}}.$$

The linearized prediction is $\dfrac{\Delta g}{g}\cdot\dfrac{1}{1+L} = 20\% \times \dfrac{1}{4} = 5$ percent — close, and slightly high because $L$ itself grew, which the linearization does not capture. **A 20 percent perturbation of the cell's intrinsic gain became a 4.3 percent perturbation of its output.**

**(c)** It costs **sensitivity**: the same factor $1/(1+L)$ that suppresses unwanted gain changes also suppresses wanted ones, so the circuit is four times less responsive to any genuine change in drive — and, if the loop is delayed, high $L$ is exactly what pushes it into oscillation.

**P3** Threshold requires $\theta = -50 - (-65) = 15$ mV. Each volley contributes $A = 10$ mV, decaying as $e^{-t/12}$; each IPSP contributes $-10$ mV starting 3 ms later.

**(a)** Without inhibition, the peak after the $n$-th volley (at $t = 6n$) is $10\sum_{j=0}^{n}e^{-6j/12} = 10\sum x^j$ with $x = e^{-0.5} = 0.6065$:

$$n=0: \; 10.0 \ \text{mV} \qquad n=1: \; 10 + 10(0.6065) = \mathbf{16.07\ \text{mV}} > 15.$$

**It fires on the second volley**, about 6 ms after the train starts. This is an integrator.

**(b)** With inhibition, each past volley $j$ leaves a *net* residue at the moment of the current volley of

$$10\,e^{-6j/12} - 10\,e^{-(6j-3)/12} = 10\,e^{-j/2}\left(1 - e^{1/4}\right).$$

Since $e^{1/4} = 1.2840$, the bracket is $-0.2840$: **every past volley now leaves a net hyperpolarization.** Summing over all past volleys of an infinitely long train:

$$\sum_{j=1}^{\infty} e^{-j/2} = \frac{e^{-1/2}}{1-e^{-1/2}} = \frac{0.6065}{0.3935} = 1.5415$$

$$V_{\text{ss}} = 10 + 10(-0.2840)(1.5415) = 10 - 4.38 = \mathbf{5.6\ \text{mV}}$$

Check against the first volley: $10 + 10(-0.2840)(0.6065) = 8.28$ mV ✓ — the train *decreases* the peak as it proceeds. **The steady-state peak is 5.6 mV against a 15 mV threshold, so the cell never fires — not after 10 volleys, not after 10,000.** No amount of rate gets through.

**(c)** A synchronous volley of $n$ inputs puts $5n$ mV on the membrane at $t=0$, three milliseconds before any inhibition arrives:

$$5n \ge 15 \quad\Longrightarrow\quad n = \mathbf{3}.$$

**Three inputs arriving together fire the cell; two inputs arriving together, repeated forever at 167 Hz, never do.** The circuit is completely insensitive to input *rate* and exquisitely sensitive to input *synchrony* — the feedforward inhibitory branch has removed rate from the cell's vocabulary.

**Why this matters downstream:** this is the design of the auditory brainstem's coincidence detectors ([3.3](03-03-audition-somatosensation.md)), which localize sound by comparing arrival times at the two ears. The interaural time differences involved are tens of microseconds — far finer than a spike is wide — and it is achievable only because the circuit, not the membrane, sets the integration window. A cell with a 12 ms membrane time constant and no feedforward inhibition could not do this at all.

</details>

## Flashback

**From Lesson 2.3 (synaptic integration):** A pyramidal cell rests at $-70$ mV with threshold $-52$ mV. A synapse on a thin distal dendrite generates a **6 mV** EPSP *locally*, but the branch attenuates signals reaching the soma by a factor of **0.35**.

(a) What is the somatic EPSP?
(b) Assuming linear summation, how many such synchronous distal inputs are needed to fire the cell?
(c) A shunting inhibitory synapse sits on the dendritic trunk, between those synapses and the soma. When active it divides the signal passing it by 3, while producing almost no voltage change on its own. How many inputs are now needed — and why is "almost no voltage change" not a contradiction?

<details>
<summary>Solution</summary>

**(a)** $$6\ \text{mV} \times 0.35 = \mathbf{2.1\ \text{mV}\ \text{at the soma}}.$$

**Electrotonic distance, not synapse count, is the first thing that matters.** A synapse that looks large where it lives can be nearly invisible at the axon initial segment, where the decision is actually made.

**(b)** Threshold is $-52 - (-70) = 18$ mV above rest:

$$N = \frac{18}{2.1} = 8.57 \;\Longrightarrow\; \mathbf{9\ \text{inputs}}.$$

**This is a lower bound.** Summation of nearby synapses is *sublinear* — each open conductance reduces the driving force $(V - E_{\text{syn}})$ for its neighbours — so 9 is optimistic and the true number is higher, increasingly so as the synapses cluster.

**(c)** The shunt divides:

$$\frac{2.1}{3} = 0.7\ \text{mV per input} \;\Longrightarrow\; N = \frac{18}{0.7} = \mathbf{26\ \text{inputs}}.$$

**Nine becomes twenty-six from a synapse that by itself does essentially nothing to the membrane potential.** There is no contradiction because a shunting synapse's effect is not a voltage — it is a **conductance**. Opening a channel whose reversal potential sits at rest produces no driving force and therefore no current *at rest*, so no visible IPSP. But it lowers the local input resistance, and by Ohm's law every *other* current arriving at that point produces a proportionally smaller voltage.

**Two consequences worth keeping.** The effect is **divisive, not subtractive** — it scales excitation rather than offsetting it, which is why it can veto inputs of any size rather than only small ones. And it is **positional**: this shunt works because it sits *on the path* to the soma. Placed on a sister branch it would do almost nothing to these inputs. Inhibition's location is part of its meaning.

</details>

## Connections

- **Backward:** every motif here is assembled from [2.2](02-02-neurotransmitters-receptors.md)'s receptor-determined sign, [2.1](02-01-chemical-synaptic-transmission.md)'s synaptic delay and [2.3](02-03-synaptic-integration.md)'s summation arithmetic; [2.4](02-04-electrical-synapses.md)'s gap-junction coupling is how the inhibitory populations in §3 and §7 synchronize with each other; [1.5](01-05-cable-theory-conduction.md)'s $\tau$ is the quantity the feedforward-inhibition motif exists to override.
- **Forward:** [3.1](03-01-transduction-neural-coding.md) asks what code these circuits operate on and why lateral inhibition is the *right* filter for natural stimulus statistics; [3.2](03-02-vision.md)'s centre–surround and orientation-selective fields are §4 applied twice; [3.3](03-03-audition-somatosensation.md)'s interaural coincidence detectors are §2; [3.5](03-05-motor-control-correction.md)'s basal ganglia are §7 with a dopaminergic bias term; [4.3](04-03-attention-decision-making.md) is §5 and §7 doing the work of attention and choice; [4.4](04-04-disease-a-taste.md) reads epilepsy off §6.
- **Sideways:** the loop-gain algebra of §3 and §6 is [control-systems 1.1](../../control-systems/lessons/01-01-feedback-and-the-control-problem.md), and the oscillation condition is its phase-margin criterion ([control-systems 3.4](../../control-systems/lessons/03-04-gain-and-phase-margins.md)); the instability that ends it is the Hopf bifurcation of [dynamical-systems 3.3](../../dynamical-systems/lessons/03-03-hopf-bifurcation.md). §4 is a convolution with a band-pass kernel — [signals-systems 1.4](../../signals-systems/lessons/01-04-convolution-continuous-time.md) and [2.3](../../signals-systems/lessons/02-03-continuous-time-fourier-transform.md) — and its purpose is redundancy reduction in the sense of [information-theory 1.3](../../information-theory/lessons/01-03-mutual-information.md).
