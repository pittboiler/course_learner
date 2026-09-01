# Neuroscience · Lesson 2.3: Synaptic integration

> ⏱ ~15 min · Module 2: Synapses, wiring & circuits · Builds on: [2.2](02-02-neurotransmitters-receptors.md), [1.5](01-05-cable-theory-conduction.md) · Unlocks: 2.6 (circuit motifs & computation)

## Why this matters

[2.1](02-01-chemical-synaptic-transmission.md) and [2.2](02-02-neurotransmitters-receptors.md) built one synapse. A cortical pyramidal cell has somewhere between five thousand and thirty thousand of them, and it has exactly one output. **The whole job of the cell is the map from those thousands of inputs to a binary decision, and this lesson is that map.**

The first number tells you what kind of map it has to be. A unitary excitatory synapse between two cortical pyramidal cells produces a somatic EPSP of roughly **0.2 to 1 mV**. The distance from rest to threshold is roughly **15 mV**. So a single presynaptic spike moves the cell about **one twentieth to one hundredth** of the way to firing.

$$\boxed{\;\text{No single cortical synapse decides anything. Firing is a population verdict.}\;}$$

**Contrast this with the neuromuscular junction, and the contrast is the point.** There, one motor-neuron spike releases roughly 100 to 200 quanta and produces an endplate potential of 40 to 50 mV against a threshold about 30 mV away — a safety factor of well over one. The NMJ is engineered so that **every** presynaptic spike produces exactly one postsynaptic spike ([physiology 1.5](../../physiology/lessons/01-05-neuromuscular-autonomic-transmission.md)). It is a **relay**, and it is built to be boring.

A central neuron is built to be the opposite. It is a **computing element**: unreliable per synapse, and interesting precisely because the answer depends on how many inputs arrived, when they arrived, and where they landed. Those three questions are temporal summation, spatial summation, and dendritic computation — and the fourth thing that shapes the answer, inhibition, turns out not to subtract at all.

## The idea

**Start with the naive model and then break it, because everything interesting is in the breakage.**

The naive model: each synapse contributes a fixed voltage bump; the cell adds them; if the sum exceeds threshold, it fires. Four corrections, each a real mechanism:

1. **Bumps decay, so *when* matters.** The membrane time constant $\tau$ from [1.5](01-05-cable-theory-conduction.md) is the memory of the cell. An EPSP that arrived $\tau$ ago is worth 37 percent of what it was worth on arrival. **$\tau$ is a coincidence window**, and the same input means different things to a cell with $\tau = 5$ ms and to one with $\tau = 30$ ms — the first is asking "did these arrive *together*?", the second "how many arrived *at all*?"

2. **Bumps attenuate on the way in, so *where* matters.** The length constant $\lambda$ from [1.5](01-05-cable-theory-conduction.md) says a synapse $\lambda$ out on a dendrite delivers 37 percent of its local amplitude to the soma. **What counts is electrotonic distance $d/\lambda$, not the number of synapses**, and two cells with identical synapse counts can have completely different sensitivities.

3. **Bumps interfere, and this one is not intuitive.** A synapse is a *conductance*, not a current source: $I = g(V - E)$. Every open channel that depolarizes the cell **reduces the driving force for its neighbours**. So excitation that lands in the same electrical neighbourhood sums **sublinearly** — and this is not an extra mechanism bolted on, it is an unavoidable consequence of describing a synapse as a conductance at all.

4. **Inhibition need not move the voltage to win.** An inhibitory synapse whose reversal potential sits at rest produces literally zero voltage deflection on its own ([2.2](02-02-neurotransmitters-receptors.md), Worked example 2) and still vetoes a much larger excitatory input, by adding conductance to the denominator. This is **shunting inhibition**, it is **divisive rather than subtractive**, and it is **position-dependent**: inhibition on the path from an input to the soma is far more effective than the same inhibition off the path.

And then, on top of all four, the dendrite is not passive. Clustered co-active inputs on one branch can engage NMDA receptors and voltage-gated channels and sum **supralinearly**, which turns each branch into a small thresholding unit of its own.

## The formal version

Throughout: $V_{\text{rest}} = -65$ mV, $V_{\text{th}} = -50$ mV, so the distance to threshold is $\Theta \equiv V_{\text{th}} - V_{\text{rest}} = 15$ mV. A unitary somatic EPSP has peak amplitude $V_0$ and decays as $V_0e^{-t/\tau}$.

### Temporal summation

One axon firing regularly at rate $f$ delivers EPSPs every $\Delta t = 1/f$. Just after the $n$-th, the depolarization is a geometric sum with ratio $r = e^{-\Delta t/\tau}$:

$$V_n = V_0\sum_{k=0}^{n-1} r^{k} = V_0\,\frac{1-r^{n}}{1-r} \;\xrightarrow[n\to\infty]{}\; \boxed{\;V_{\text{peak}}^{\infty} = \frac{V_0}{1 - e^{-1/(f\tau)}}\;}$$

*In words: the train climbs to a plateau where the decay in one interval exactly cancels the next EPSP, and the plateau height is the unitary EPSP divided by the fraction that leaks away between spikes.*

The **time-average** depolarization is exact and prettier. Each EPSP has area $V_0\tau$ under it, and they arrive at rate $f$:

$$\boxed{\;\bar V = V_0\, f\,\tau\;}$$

*In words: the mean depolarization is the unitary amplitude times the number of EPSPs that fit inside one time constant.* **The quantity $f\tau$ is the effective number of inputs the cell is holding in memory at any moment**, and it is the single most useful number in this lesson.

**Threshold condition for one axon.** Setting $V_{\text{peak}}^{\infty} = \Theta$ and solving:

$$f_{\min} = \frac{-1}{\tau\,\ln\!\left(1 - V_0/\Theta\right)}$$

**Threshold condition for synchrony.** If $N$ synapses fire simultaneously instead, you need $N \ge \Theta/V_0$ — with the sublinearity correction below.

**The coincidence window.** Two inputs of amplitude $V_0$ separated by lag $\Delta t$ sum, at the moment the second arrives, to $V_0(1 + e^{-\Delta t/\tau})$. Requiring that to reach $\Theta$:

$$\boxed{\;\Delta t_{\max} = \tau\,\ln\!\frac{V_0}{\Theta - V_0}\;}$$

*In words: the window inside which two inputs still count as "together" is proportional to $\tau$.* This is the formal content of the coincidence-detector/integrator distinction: **a short $\tau$ makes the cell a coincidence detector sensitive to synchrony; a long $\tau$ makes it an integrator sensitive to rate. Nothing about the input changes — the same spike trains are simply being asked a different question.** Cortical fast-spiking interneurons sit near the first end ($\tau$ of a few ms); pyramidal cells near the second (10–30 ms). Problem P3 puts numbers on it.

### Spatial summation and electrotonic distance

From the steady-state cable solution of [1.5](01-05-cable-theory-conduction.md), a synapse at distance $d$ along a dendrite of length constant $\lambda$ delivers to the soma

$$V_{\text{soma}} = V_{\text{local}}\,e^{-X}, \qquad X \equiv \frac{d}{\lambda} \;\;\text{(the electrotonic distance)}$$

With the constants of [1.5](01-05-cable-theory-conduction.md), a 1 µm dendrite has $\lambda \approx 500$ µm. So a synapse 100 µm out delivers $e^{-0.2} = 82$ percent; one at 500 µm delivers $e^{-1} = 37$ percent.

**And that steady-state figure is the optimistic one.** The cable is a *low-pass filter*, so fast signals attenuate more steeply than slow ones. Put a sinusoid $V = \hat V(x)e^{i\omega t}$ into the cable equation $\lambda^2 V_{xx} = \tau V_t + V$:

$$\lambda^{2}\hat V'' = (1 + i\omega\tau)\,\hat V \quad\Longrightarrow\quad \hat V \propto \exp\!\left(-\frac{x}{\lambda}\sqrt{1+i\omega\tau}\right)$$

$$\boxed{\;\lambda_{\text{AC}}(f) = \frac{\lambda}{\sqrt{\tfrac{1}{2}\left(1 + \sqrt{1 + (2\pi f\tau)^{2}}\right)}}\;}$$

*In words: the higher the frequency, the shorter the effective length constant, because fast current is swallowed by the membrane capacitance before it can travel.* With $\lambda = 500$ µm and $\tau = 15$ ms, the 50 Hz component sees $\lambda_{\text{AC}} = 293$ µm and the 100 Hz component sees 218 µm. **A distal EPSP's *peak* is therefore attenuated two- to fourfold more than the DC formula predicts, and it is also slowed and broadened** — which is a real trade, because a broadened EPSP summates better in time even as it summates worse in amplitude. This is a genuine transfer-function problem, and the tools are [signals-systems 2.5](../../signals-systems/lessons/02-05-transfer-functions-poles-zeros.md).

**Dendritic normalization partly compensates.** In hippocampal CA1 pyramidal cells, synaptic conductance *increases* with distance from the soma, so unitary somatic EPSP amplitude is roughly independent of where the synapse sits. This is often called synaptic democracy. **It is a partial fix, not a full one**: it equalizes amplitude, not the time course, and it does not exist in every cell type.

### Sublinearity: the price of the conductance description

Use [2.2](02-02-neurotransmitters-receptors.md)'s conductance-average form at steady state, for $N$ identical excitatory synapses of conductance $g$ each, reversing at $E_e$, on a cell of leak $g_L$ at $E_L$:

$$V = \frac{g_L E_L + N g E_e}{g_L + N g} \quad\Longrightarrow\quad \boxed{\;\Delta V(N) = \frac{N g\,(E_e - E_L)}{g_L + Ng}\;}$$

*In words: the depolarization saturates hyperbolically toward $E_e$ — the more conductance you open, the less each additional nanosiemens buys.* The ratio of the true answer to the naive linear extrapolation $N\Delta V(1)$ is

$$\frac{\Delta V(N)}{N\,\Delta V(1)} = \frac{g_L + g}{g_L + Ng} \;<\; 1 .$$

**Concretely** ($g_L = 10$ nS at $E_L = -65$ mV, $g = 0.5$ nS at $E_e = 0$ mV, $\Theta = 15$ mV):

| $N$ | linear estimate | true $\Delta V$ | ratio |
|---|---|---|---|
| 1 | 3.10 mV | 3.10 mV | 1.00 |
| 5 | 15.5 mV | 13.0 mV | 0.84 |
| **6** | 18.6 mV | **15.0 mV** | 0.81 |
| 10 | 31.0 mV | 21.7 mV | 0.70 |

**Linear reasoning says five synapses fire the cell; the real answer is six.** The error grows without bound as the input does — at $N = 20$ the linear estimate is off by more than twofold.

**The essential qualifier, and the counterintuitive part.** This interference requires the synapses to be in the same *electrical* neighbourhood, because that is what makes them share a voltage. Two synapses on electrically remote branches each depolarize mainly their own branch, barely change each other's driving force, and therefore **sum almost linearly**. So:

$$\textbf{Electrically close} \Rightarrow \text{strong influence on the soma, but sublinear with each other.}$$
$$\textbf{Electrically remote} \Rightarrow \text{weak influence on the soma, but nearly independent.}$$

**A dendritic tree is a device for buying independence at the cost of amplitude**, and that trade is what makes the next section possible.

### Shunting inhibition: divisive, invisible, and positional

Add an inhibitory conductance $g_i$ with $E_i = E_L$ — exactly the resting potential, which is close to true for GABA-A in many mature neurons ([2.2](02-02-neurotransmitters-receptors.md)):

$$\Delta V_e = \frac{Ng\,(E_e - E_L)}{g_L + Ng + g_i}$$

**The inhibitory term appears only in the denominator.** It contributes nothing to the numerator because its reversal potential is the resting potential, so on its own it moves the membrane by exactly zero millivolts. What it does instead is lower the input resistance, and hence the **gain** of the conversion from synaptic conductance to voltage:

$$\left.\frac{d(\Delta V_e)}{d(Ng)}\right|_{Ng\to 0} = \frac{E_e - E_L}{g_L + g_i} \qquad \text{(reduced by the factor } \tfrac{g_L+g_i}{g_L}\text{)}$$

*In words: shunting inhibition does not raise the bar, it shrinks the ruler.* With $g_i = 8$ nS added to the example above, $N = 6$ now gives $195/21 = 9.29$ mV instead of 15.0 mV, and **it takes 11 synapses instead of 6 to fire the cell — from an inhibitory synapse an electrode would report as doing nothing at all.**

**Divisive versus subtractive, stated carefully.** A hyperpolarizing synapse ($E_i$ well below rest) adds a negative numerator term and shifts the input–output curve rightward: *subtractive*. A pure shunt scales it: *divisive*. Real synapses lie in between, and the mix is set by $E_{\text{Cl}}$ and by dendritic location. The distinction matters because **division changes a neuron's gain without changing what it is selective for**, which is exactly the operation [2.6](02-06-circuit-motifs-computation.md) needs for normalization.

**Position: inhibition works on the path.** Excitatory current injected on a dendrite must flow to the soma; a shunt placed *between* the synapse and the soma drains that current in transit, while the same shunt on a sister branch only loads the soma. Worked example 2 does the three-node arithmetic and finds a **factor of about 1.9** in favour of on-path inhibition. This is why perisomatic basket cells, sitting on the trunk line, can veto an entire cell, while a dendrite-targeting interneuron vetoes one branch and leaves the rest untouched. **Inhibitory interneuron subtypes are, to a first approximation, a catalogue of positions on that path.**

### Dendritic nonlinearity, and where the decision is actually made

Everything above treats the dendrite as passive. It is not.

- **NMDA receptors make clustered input supralinear.** Their voltage-dependent Mg²⁺ block ([2.2](02-02-neurotransmitters-receptors.md)) means that once a group of neighbouring synapses on one branch has depolarized it enough, NMDA current is *relieved* rather than reduced — a regenerative event (an "NMDA spike" or plateau potential) lasting tens to hundreds of milliseconds. **The same synapses scattered across different branches produce a linear sum; clustered on one branch they produce a spike.** Which synapses are neighbours is therefore part of the computation.
- **Dendrites also carry Na⁺ and Ca²⁺ spikes**, notably in the apical tuft of layer 5 pyramidal cells, where a coincidence of tuft input and a back-propagating somatic spike produces a Ca²⁺ event that converts a single somatic spike into a burst.
- **Hence the two-layer picture.** Each branch behaves as a semi-independent subunit that sums its own inputs and applies its own threshold; the soma sums the subunit outputs and applies a final threshold. **A pyramidal cell is better modelled as a small two-layer network than as a single summing point** — a striking convergence with the reason artificial networks need hidden layers at all ([deep-learning](../../deep-learning/syllabus.md)).

**And the decision point is not the soma.** The **axon initial segment**, roughly 20–50 µm of axon just past the soma, carries the highest density of voltage-gated Na⁺ channels in the neuron and therefore the lowest threshold. The spike starts there and propagates both down the axon and backwards into the dendrites. **"Reaching threshold" always means reaching threshold at the initial segment**, which is why perisomatic inhibition, and axo-axonic inhibition right on the initial segment itself, are so disproportionately powerful.

**The input–output function.** Sum all of it and a neuron implements a rate map $f_{\text{out}} = F(\text{input})$ that is threshold-linear in the idealization, softened at the foot by background synaptic noise (which lets fluctuations cross threshold below the mean threshold), and flattened at the top by spike-frequency adaptation. **Its slope — the gain — is set by shunting inhibition and by neuromodulators ([2.2](02-02-neurotransmitters-receptors.md)), not fixed by the anatomy.** That is the sense in which the same circuit computes different things in different states.

## Picture

![Three panels on synaptic integration. Panel a plots depolarization against time for one axon firing at two rates onto a cell with an 8 mV unitary EPSP and a 15 ms time constant: at 30 Hz each EPSP decays almost fully before the next arrives and the trace plateaus near 9 mV, well under the 15 mV threshold, while at 100 Hz the EPSPs pile up and the fourth one crosses threshold at 30 ms and triggers a spike. Panel b draws a neuron with a soma, an axon initial segment marked below it, and a dendrite carrying two identical 8 mV synapses, one 100 micrometres out and one 500 micrometres out on a cable whose length constant is 500 micrometres; bars to the right show the resulting somatic EPSPs of 6.6 and 2.9 millivolts, and a shunting synapse is marked on the dendrite between the distal synapse and the soma. Panel c plots somatic EPSP against the number of co-active excitatory synapses for three cases: a dashed straight line extrapolated from a single synapse, a saturating blue curve for the true conductance summation, and a lower red curve with an added 8 nanosiemens shunt; the three cross the 15 millivolt threshold at 5, 6 and 11 synapses respectively.](assets/02-03-fig1.svg)

## Worked examples

### Example 1 — mechanical: can one axon ever fire a cortical cell?

A pyramidal cell has $\tau = 15$ ms, rest $-65$ mV, threshold $-50$ mV (so $\Theta = 15$ mV). One presynaptic axon makes a single synapse producing a $V_0 = 0.5$ mV somatic EPSP.

**(a) The axon fires steadily at 50 Hz. What is the plateau depolarization?**

$$\Delta t = 20\ \text{ms}, \qquad r = e^{-20/15} = e^{-1.3333} = 0.2636$$

$$V_{\text{peak}}^{\infty} = \frac{0.5}{1 - 0.2636} = \frac{0.5}{0.7364} = \mathbf{0.68\ \text{mV}}$$

**Under 5 percent of the way to threshold**, from an axon firing at a rate most cortical cells rarely sustain.

**(b) Mean depolarization.** $\bar V = V_0 f\tau = (0.5)(50)(0.015) = \mathbf{0.375\ \text{mV}}$. Equivalently, $f\tau = 0.75$ — **the cell is holding less than one EPSP in memory at a time**, which is exactly why there is essentially no summation.

**(c) What rate would this one axon need?**

$$f_{\min} = \frac{-1}{\tau\ln(1 - 0.5/15)} = \frac{-1}{(0.015)\ln(0.96667)} = \frac{1}{(0.015)(0.033902)} = \mathbf{1966\ \text{Hz}}$$

**About 2 kHz.** The absolute refractory period alone caps a cortical neuron near 500 Hz, and its real sustained rates are 1–50 Hz. **It is not that one axon is unlikely to fire the cell; it is arithmetically impossible.**

**(d) So how many axons?** Using the mean, each axon at 50 Hz contributes 0.375 mV, so

$$N = \frac{15\ \text{mV}}{0.375\ \text{mV}} = \mathbf{40\ \text{axons}},$$

i.e. about 2000 EPSPs per second arriving. **That is the population verdict made quantitative** — and it is a lower bound, since the sublinearity of the next example makes the true number larger, and since a real cell also receives inhibition it must overcome.

### Example 2 — why you'd care: the veto, and why its position matters

**(a) The veto.** Cell as in the figure: $g_L = 10$ nS at $E_L = -65$ mV, threshold $-50$ mV ($\Theta = 15$ mV), excitatory synapses of $g = 0.5$ nS at $E_e = 0$ mV. An inhibitory synapse contributes $g_i = 8$ nS at $E_i = -65$ mV.

Six excitatory synapses, no inhibition:

$$V = \frac{10(-65) + 3(0)}{10 + 3} = \frac{-650}{13} = \mathbf{-50.0\ \text{mV}}$$

Exactly threshold: the cell fires. The inhibitory synapse alone:

$$V = \frac{10(-65) + 8(-65)}{18} = \frac{-1170}{18} = \mathbf{-65.0\ \text{mV}}$$

Zero deflection. Both together:

$$V = \frac{10(-65) + 8(-65) + 3(0)}{10 + 8 + 3} = \frac{-1170}{21} = \mathbf{-55.7\ \text{mV}}$$

The EPSP is $9.29$ mV instead of $15.0$ mV, a factor of $13/21 = 0.62$, and **the cell does not fire.** To fire it now needs

$$\frac{0.5N(65)}{18 + 0.5N} \ge 15 \;\Longrightarrow\; 32.5N \ge 270 + 7.5N \;\Longrightarrow\; N \ge 10.8 \;\Rightarrow\; \mathbf{11\ \text{synapses}}.$$

**An 8 nS conductance that produces no measurable voltage change nearly doubled the excitation required.** A voltage electrode reports nothing; a conductance measurement reports everything. This is the vetoing interneuron of the syllabus's [Boss problem 2](../syllabus.md), and it is why "inhibition was unchanged" is a claim that has to be interrogated.

**(b) Position: on the path versus off it.** Now give the cell two dendritic branches. Model each branch as a lumped tip with leak $g_d = 2$ nS, joined to the soma by an axial conductance $g_c = 20$ nS; the soma has $g_s = 10$ nS. Measure all voltages from rest and inject a fixed excitatory current $I_e$ at the tip of branch A. Solving the three-node network (KCL at each node, [circuits 2.1](../../circuits/lessons/02-01-nodal-analysis.md)):

| Condition | Somatic voltage | Fraction of control |
|---|---|---|
| No inhibition | $I_e/15.0$ | 1.00 |
| $g_i = 20$ nS **on branch A** (on the path) | $I_e/46.8$ | **0.32** |
| $g_i = 20$ nS **on branch B** (off the path) | $I_e/24.5$ | **0.61** |

*Working, for the on-path case:* node B gives $22V_B = 20V_S$, node S gives $(10 + 20 + 20 - 18.18)V_S = 20V_A$ so $V_A = 1.591V_S$, and node A with the shunt gives $I_e = (2+20+20)V_A - 20V_S = (42)(1.591)V_S - 20V_S = 46.8\,V_S$. Off the path, the shunt instead loads branch B, which raises $V_A/V_S$ to $2.024$ and leaves $I_e = 24.5\,V_S$.

**The same 20 nS is nearly twice as effective when it sits between the excitation and the soma.** Two consequences worth carrying:

1. **Inhibition is not a scalar the cell "receives."** Where it lands determines what it can block, so an interneuron that targets distal dendrites and one that targets the soma are performing different computations even with identical transmitter, receptor and conductance.
2. **This is a veto with an address.** A dendrite-targeting interneuron can gate one branch's contribution while the rest of the tree carries on — which, combined with the branch-as-subunit picture above, is how a single neuron gets to have selectively switchable inputs rather than one summed drive.

## Watch out

- **You might expect a strong synapse to matter on its own.** At a cortical unitary EPSP of 0.2–1 mV against a 15 mV threshold, no single input decides. The exceptions are engineered for reliability and are worth knowing as exceptions: the neuromuscular junction, the calyx of Held, the climbing fibre onto a Purkinje cell.
- **You might add EPSPs linearly.** Synapses in the same electrical neighbourhood sum **sublinearly** because each one steals its neighbours' driving force; clustered synapses that recruit NMDA receptors or dendritic spikes sum **supralinearly**. Linear is the one thing real summation reliably is not — though remote synapses on different branches come close.
- **You might equate inhibition with hyperpolarization.** A shunt at the resting potential produces zero voltage change and can still double the excitation required. **Inhibition is a conductance, and conductance is the hidden variable.**
- **You might treat inhibition as subtractive.** Shunting inhibition is *divisive*: it changes gain, not threshold. Subtractive inhibition shifts what the cell requires; divisive inhibition scales what the cell reports.
- **You might count synapses.** What matters is electrotonic distance $d/\lambda$, and the peak of a fast EPSP attenuates two- to fourfold more than the steady-state length constant suggests, because the dendrite is a low-pass filter.
- **You might place the decision at the soma.** It happens at the axon initial segment, which is why inhibition there is so effective and why somatic voltage is a proxy for the decision variable rather than the decision variable itself.

## One-liner

> A neuron does not add up votes — it solves a conductance-weighted average on a leaky cable: $\tau$ sets how long a vote still counts, $\lambda$ sets how much it counts, driving force makes neighbouring excitation interfere, and an inhibitory conductance sitting on the path divides the whole tally while moving the voltage not at all.

## Problems

**P1 (🟢)** A neuron has $\tau = 20$ ms, rest $-70$ mV and threshold $-54$ mV. One axon produces a $2$ mV somatic EPSP. (a) It fires at 50 Hz — find the plateau peak depolarization and say whether the cell fires. (b) Find the mean depolarization and the value of $f\tau$. (c) What firing rate would this single axon need to reach threshold on its own? (d) Instead, how many such synapses firing simultaneously would do it, ignoring sublinearity?

**P2 (🟡)** A cell has $g_L = 8$ nS at $E_L = -70$ mV and threshold $-52$ mV. Each excitatory synapse contributes $0.4$ nS at $E_e = 0$ mV. A shunting synapse contributes $g_i = 12$ nS at $E_i = -70$ mV. (a) How many co-active excitatory synapses are needed to reach threshold with no inhibition? (b) What does the inhibitory synapse do to the membrane potential on its own? (c) How many excitatory synapses are needed once the shunt is on? (d) Holding the excitation at the number from (a), by what factor is the EPSP reduced, and what quantity is that factor?

**P3 (🔴, bridges to circuit motifs in 2.6 and to coincidence detection generally)** Two excitatory inputs, A and B, each produce a 9 mV somatic EPSP decaying as $e^{-t/\tau}$. Threshold is 15 mV above rest. (a) For a fast-spiking interneuron with $\tau = 5$ ms, find the maximum lag between A and B for which the pair still reaches threshold. (b) Repeat for a pyramidal cell with $\tau = 30$ ms. (c) Now let A and B each fire as independent Poisson trains at 40 Hz. Compute the mean depolarization for each cell and say what each one is measuring. (d) For the fast cell, estimate its output rate from chance coincidences alone, and say what happens to that rate if the two inputs become synchronized.

<details>
<summary>Solutions</summary>

**P1** $\Theta = -54 - (-70) = 16$ mV, $V_0 = 2$ mV, $\tau = 20$ ms.

**(a)** $\Delta t = 1/50 = 20$ ms, so $\Delta t/\tau = 1$ exactly and $r = e^{-1} = 0.36788$.

$$V_{\text{peak}}^{\infty} = \frac{2}{1 - 0.36788} = \frac{2}{0.63212} = \mathbf{3.16\ \text{mV}}$$

Peak membrane potential $-70 + 3.16 = -66.8$ mV, against a threshold of $-54$ mV. **It does not fire — it covers 20 percent of the distance.**

**(b)** $$\bar V = V_0 f\tau = (2)(50)(0.020) = \mathbf{2.00\ \text{mV}}, \qquad f\tau = (50)(0.020) = \mathbf{1.0}.$$

$f\tau = 1$ means **the cell is holding exactly one EPSP's worth of memory** — the next EPSP arrives just as the last has decayed to 37 percent. This is the boundary of useful temporal summation; below it the train is a series of separate events, above it a rising plateau.

**(c)** $$f_{\min} = \frac{-1}{\tau\ln(1 - V_0/\Theta)} = \frac{-1}{(0.020)\ln(1 - 2/16)} = \frac{-1}{(0.020)\ln(0.875)}$$

$$\ln(0.875) = -0.133531 \;\Longrightarrow\; f_{\min} = \frac{1}{(0.020)(0.133531)} = \frac{1}{0.0026706} = \mathbf{374\ \text{Hz}}$$

**Sustained 374 Hz is out of reach for essentially any cortical projection neuron.** Even here, where the unitary EPSP is a generous 2 mV, one axon cannot do it.

**(d)** $$N \ge \frac{\Theta}{V_0} = \frac{16}{2} = \mathbf{8\ \text{synapses}}.$$

**Eight in synchrony versus 374 Hz from one: this is the whole reason cortical neurons are convergence devices.** (Sublinearity pushes the real answer above 8 — see P2.)

**P2** Conductance average: $V = \dfrac{g_LE_L + g_iE_i + Ng E_e}{g_L + g_i + Ng}$ with $g_L = 8$, $g = 0.4$, $E_e = 0$, $E_L = E_i = -70$ mV.

**(a)** No inhibition: numerator $= 8(-70) = -560$; set $V = -52$:

$$\frac{-560}{8 + 0.4N} = -52 \;\Longrightarrow\; 8 + 0.4N = \frac{560}{52} = 10.769 \;\Longrightarrow\; N = \frac{2.769}{0.4} = 6.92 \;\Rightarrow\; \mathbf{7\ \text{synapses}}$$

Check: $N=7$ gives $-560/10.8 = -51.85$ mV (fires); $N=6$ gives $-560/10.4 = -53.85$ mV (does not).

**(b)** Since $E_i = E_L = -70$ mV, it contributes to numerator and denominator in the same proportion as the leak:

$$V = \frac{8(-70) + 12(-70)}{8 + 12} = \frac{-1400}{20} = \mathbf{-70.0\ \text{mV}}$$

**Exactly the resting potential — no deflection whatsoever.** On a voltage trace this synapse is invisible.

**(c)** Now numerator $= -1400$:

$$\frac{-1400}{20 + 0.4N} = -52 \;\Longrightarrow\; 20 + 0.4N = \frac{1400}{52} = 26.923 \;\Longrightarrow\; N = \frac{6.923}{0.4} = 17.3 \;\Rightarrow\; \mathbf{18\ \text{synapses}}$$

Check: $N=18$ gives $-1400/27.2 = -51.47$ mV (fires); $N=17$ gives $-1400/26.8 = -52.24$ mV (does not). **Seven synapses became eighteen — a 2.6-fold increase in required excitation, purchased with a synapse that moves the voltage by zero.**

**(d)** At $N = 7$:

$$\Delta V_{\text{no inh}} = -51.85 - (-70) = 18.15\ \text{mV}, \qquad \Delta V_{\text{inh}} = \frac{-1400}{20 + 2.8} - (-70) = -61.40 + 70 = 8.60\ \text{mV}$$

$$\text{factor} = \frac{8.60}{18.15} = \mathbf{0.474}$$

And that factor is exactly the **ratio of total conductances**:

$$\frac{g_L + Ng}{g_L + Ng + g_i} = \frac{8 + 2.8}{8 + 2.8 + 12} = \frac{10.8}{22.8} = 0.474$$

**The inhibition divides rather than subtracts**, and the divisor is a ratio of conductances — which is why the effect is a change of gain, and why it will reappear in [2.6](02-06-circuit-motifs-computation.md) as the raw material of normalization.

**P3 (a)** At the instant B arrives with lag $\Delta t$, the sum is $9(1 + e^{-\Delta t/\tau})$. Requiring $\ge 15$:

$$e^{-\Delta t/\tau} \ge \frac{15 - 9}{9} = \frac{2}{3} \;\Longrightarrow\; \Delta t \le \tau\ln\frac{3}{2} = \tau(0.4055)$$

$$\tau = 5\ \text{ms}: \quad \Delta t_{\max} = 5(0.4055) = \mathbf{2.03\ \text{ms}}$$

**(b)** $$\tau = 30\ \text{ms}: \quad \Delta t_{\max} = 30(0.4055) = \mathbf{12.2\ \text{ms}}$$

**Six times the window, from nothing but the passive membrane.** The two cells are receiving identical inputs and applying different definitions of "simultaneous."

**(c)** $\bar V = 2 V_0 f \tau$ (two inputs, each at 40 Hz):

$$\tau = 5\ \text{ms}: \quad \bar V = 2(9)(40)(0.005) = \mathbf{3.6\ \text{mV}} \quad(\text{threshold } 15\ \text{mV})$$

$$\tau = 30\ \text{ms}: \quad \bar V = 2(9)(40)(0.030) = \mathbf{21.6\ \text{mV}} \quad(\text{above threshold})$$

**The slow cell fires from the *rate* alone, with no synchrony required at all — its mean depolarization already exceeds threshold. The fast cell's mean sits at 24 percent of threshold and it can only fire on chance coincidences.**

$$\boxed{\;\text{Same two spike trains: the } \tau = 30 \text{ ms cell measures rate, the } \tau = 5 \text{ ms cell measures synchrony.}\;}$$

**(d)** For two independent Poisson processes at rates $\lambda_A = \lambda_B = 40$ s⁻¹, the rate of pairs falling within $\pm W$ of each other is $2W\lambda_A\lambda_B$. With $W = 2.03$ ms $= 2.03\times10^{-3}$ s:

$$\text{rate} = 2(2.03\times10^{-3})(40)(40) = \mathbf{6.5\ \text{s}^{-1}}$$

So the coincidence detector idles at roughly **6.5 Hz** on chance alone (an upper estimate, since its refractory period discards some coincidences).

**Now synchronize the inputs.** If every A spike is accompanied by a B spike inside the window, every one of the 40 events per second is a coincidence, and the output rate jumps toward **40 Hz — a sixfold increase with no change in either input's firing rate.** The slow integrator, meanwhile, would barely notice: its mean depolarization $2V_0f\tau$ depends only on $f$, so synchronizing the inputs leaves it almost where it was.

**This is the point of the whole lesson.** Two cells, identical inputs, identical synapses, differing only in a passive membrane property — and one of them is reporting *how much* while the other reports *how together*. A downstream circuit that wants to read synchrony builds fast, leaky, low-$\tau$ interneurons; one that wants to read rate builds slow ones. [2.6](02-06-circuit-motifs-computation.md) shows that feedforward inhibition can impose the first regime on a cell that would otherwise be in the second, by cutting the integration window short — which means **a circuit can change what a neuron is measuring without changing the neuron.**

</details>

## Flashback

**From Lesson 1.4 (the Hodgkin–Huxley model):** In modern sign convention the K⁺ activation gate has rate constants (in ms⁻¹, with $V$ in mV)

$$\alpha_n(V) = \frac{0.01(V+55)}{1 - e^{-(V+55)/10}}, \qquad \beta_n(V) = 0.125\,e^{-(V+65)/80}$$

and the K⁺ conductance is $g_K = \bar g_K n^4$. The membrane is stepped from $-65$ mV to $-45$ mV and held there.

(a) Compute $n_\infty$ and $\tau_n$ at both voltages. (b) Find the time for $n$ to reach halfway to its new value, and the time for $n^4$ to reach halfway to *its* new value. (c) Explain in one sentence why the two differ, and what that has to do with the exponent being 4.

<details>
<summary>Solution</summary>

**(a)** Use $n_\infty = \alpha_n/(\alpha_n + \beta_n)$ and $\tau_n = 1/(\alpha_n + \beta_n)$.

At $V = -65$ mV:

$$\alpha_n = \frac{0.01(-10)}{1 - e^{10/10}} = \frac{-0.1}{1 - 2.71828} = \frac{-0.1}{-1.71828} = 0.05820\ \text{ms}^{-1}, \qquad \beta_n = 0.125\,e^{0} = 0.125\ \text{ms}^{-1}$$

$$n_\infty(-65) = \frac{0.05820}{0.18320} = \mathbf{0.3177}, \qquad \tau_n(-65) = \frac{1}{0.18320} = \mathbf{5.46\ \text{ms}}$$

At $V = -45$ mV:

$$\alpha_n = \frac{0.01(10)}{1 - e^{-10/10}} = \frac{0.1}{1 - 0.36788} = \frac{0.1}{0.63212} = 0.15820\ \text{ms}^{-1}, \qquad \beta_n = 0.125\,e^{-20/80} = 0.125(0.77880) = 0.09735\ \text{ms}^{-1}$$

$$n_\infty(-45) = \frac{0.15820}{0.25555} = \mathbf{0.6190}, \qquad \tau_n(-45) = \frac{1}{0.25555} = \mathbf{3.91\ \text{ms}}$$

**Note the pattern: depolarization raises $n_\infty$ and *lowers* $\tau_n$** — the gate both wants to be open and gets there faster.

**(b)** During the step, $n$ relaxes exponentially with the *new* time constant:

$$n(t) = 0.6190 - (0.6190 - 0.3177)\,e^{-t/3.91} = 0.6190 - 0.3013\,e^{-t/3.91}$$

Halfway for $n$ is $n = (0.3177 + 0.6190)/2 = 0.4684$, which is just one $\ln 2$:

$$t_{1/2}(n) = \tau_n\ln 2 = 3.91(0.6931) = \mathbf{2.71\ \text{ms}}$$

For the conductance, the endpoints are $n^4$: initial $(0.3177)^4 = 0.01019$, final $(0.6190)^4 = 0.14681$. Halfway is $0.07850$, so

$$n = (0.07850)^{1/4} = 0.5294 \;\Longrightarrow\; e^{-t/3.91} = \frac{0.6190 - 0.5294}{0.3013} = 0.2974 \;\Longrightarrow\; t_{1/2}(n^4) = 3.91(1.2128) = \mathbf{4.74\ \text{ms}}$$

**(c)** The gate variable relaxes as a single exponential, but the conductance is the **fourth power** of it, so it rises with a **sigmoidal delay**: at early times $n$ has barely moved from its small starting value and $n^4$ has moved even less, so the conductance lags — here by 75 percent, 4.74 ms against 2.71 ms.

**The exponent is not a fitting fudge.** $n^4$ is the probability that **four independent subunits are all permissive at once**, and requiring all four is exactly what produces a delayed, S-shaped rise that no single exponential can. Hodgkin and Huxley needed that delay to fit the voltage-clamp K⁺ current, chose the smallest exponent that gave it, and thereby predicted from curve shape alone that the channel is a tetramer — confirmed structurally decades later.

</details>

## Connections

- **Backward:** [1.5](01-05-cable-theory-conduction.md) supplied both constants this lesson runs on — $\tau$ became the coincidence window and $\lambda$ the currency of spatial summation, and the cable's low-pass character is why $\lambda_{\text{AC}} < \lambda$. [2.2](02-02-neurotransmitters-receptors.md) supplied the conductance-average formula and the reversal-potential criterion; every "shunting" argument here is that formula with $E_i = E_L$. [2.1](02-01-chemical-synaptic-transmission.md) supplied the unreliable, low-amplitude quantal release that makes the population verdict necessary in the first place.
- **Forward:** [2.6](02-06-circuit-motifs-computation.md) builds every motif out of what is here — feedforward inhibition narrows the integration window, feedback inhibition uses shunting division for gain control, lateral inhibition uses position-dependent inhibition in space. [4.1](04-01-plasticity-ltp-ltd.md) needs the dendritic Ca²⁺ signals that clustered supralinear summation produces. [3.4](03-04-motor-systems.md) uses input resistance and passive summation in the size principle, where recruitment order falls straight out of the same passive properties.
- **Sideways:** the conductance-average formula is a Thévenin equivalent of parallel branches and nothing more ([circuits 2.4](../../circuits/lessons/02-04-thevenin-norton-max-power.md)), and the three-node shunting calculation is plain nodal analysis ([circuits 2.1](../../circuits/lessons/02-01-nodal-analysis.md)); the frequency-dependent length constant is a transfer-function problem ([signals-systems 2.5](../../signals-systems/lessons/02-05-transfer-functions-poles-zeros.md)); the driving-force physics behind $I = g(V-E)$ is [biophysics 4.4](../../biophysics/lessons/04-04-membrane-potentials-nernst-goldman.md); the reliability-engineered contrast case, the neuromuscular junction with its enormous safety factor, is [physiology 1.5](../../physiology/lessons/01-05-neuromuscular-autonomic-transmission.md); and the branch-as-subunit picture is the biological cousin of a hidden layer ([deep-learning](../../deep-learning/syllabus.md)).
