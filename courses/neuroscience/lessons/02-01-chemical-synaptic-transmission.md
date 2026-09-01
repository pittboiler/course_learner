# Neuroscience · Lesson 2.1: Chemical synaptic transmission

> ⏱ ~15 min · Module 2: Synapses, wiring & circuits · Builds on: [1.3](01-03-the-action-potential.md), [1.5](01-05-cable-theory-conduction.md) · Unlocks: 2.2 (neurotransmitters & receptors), 2.3 (synaptic integration)

## Why this matters

Module 1 built a neuron that can generate a spike and shove it down an axon. That is a wire. This lesson is where the wire stops being a wire.

Start with the obvious objection. **A chemical synapse is a strictly worse transmission line than a direct electrical connection.** It costs about 0.5 ms of delay, it burns ATP loading vesicles and pumping transmitter back, it is unreliable enough that a single presynaptic spike often produces *nothing at all*, and it requires a whole molecular apparatus that can break. Gap junctions ([2.4](02-04-electrical-synapses.md)) do the job faster, cheaper, and with essentially perfect fidelity. So why is nearly every synapse in your brain chemical?

Four answers, and stating them now makes the rest of the module read as a single argument:

1. **Gain.** One presynaptic spike opens a few Ca²⁺ channels; those release thousands of transmitter molecules; those open thousands of receptor channels. A tiny presynaptic event controls a much larger postsynaptic current, so a thin axon can drive a fat dendrite.
2. **Sign inversion.** Electrical coupling can only pass current — depolarization in, depolarization out. A chemical synapse decides its own sign from the receptor at the far end, which is what makes **inhibition** possible, and inhibition is what makes computation possible.
3. **Plasticity.** Every step in the chain — how much Ca²⁺ enters, how many vesicles are ready, how many receptors are in the membrane — is separately adjustable. Memory ([4.1](04-01-plasticity-ltp-ltd.md)) lives in those adjustments.
4. **Gating and dynamics.** Because release is probabilistic and the vesicle supply is finite, a synapse's gain *changes with its recent history*. **A synapse is not a wire with a gain knob; it is a filter with memory.**

Everything below is the mechanism behind those four claims.

## The idea

**The sequence, in one breath.** An action potential invades the presynaptic terminal → voltage-gated Ca²⁺ channels open → Ca²⁺ floods in and its concentration spikes *locally*, right at the channel mouth → a Ca²⁺ sensor protein (synaptotagmin) on a docked vesicle grabs the Ca²⁺ and triggers the SNARE proteins to pull the vesicle membrane into the terminal membrane → the vesicle's contents dump into the cleft → transmitter diffuses across (fast) → receptors open → postsynaptic current.

**Ca²⁺ is the whole story, and the reason is a power law.** Release rate does not go up in proportion to Ca²⁺ influx. It goes up as roughly the **fourth power**:

$$\text{release} \;\propto\; [\text{Ca}^{2+}]^{\,4}$$

*In words: double the Ca²⁺ and you get sixteen times the release; halve it and you get one sixteenth.*

That exponent changes what kind of device the synapse is. **A linear transducer reports its input; a fourth-power transducer reports whether its input crossed a line.** Below some Ca²⁺ level, release is essentially zero; a little above it, release is reliable. So the terminal behaves like a **coincidence-and-threshold detector**, not a meter — and the extreme sensitivity means that any process which nudges Ca²⁺ entry by ten or twenty percent swings the output by a factor of two. That is the engine of short-term plasticity, and we will cash it out with numbers.

**The steepness only works because the Ca²⁺ signal is local.** Bulk resting Ca²⁺ in a terminal is 50–100 nM. Synaptotagmin needs *tens of micromolar* — it is a deliberately low-affinity sensor. Nothing the whole terminal does could raise bulk Ca²⁺ that far in a fraction of a millisecond. But within about 50 nm of an open channel's mouth, in a **nanodomain**, the concentration transiently reaches 10–100 µM. **The sensor is tuned so that only a vesicle docked within nanometres of a Ca²⁺ channel can be released.** Coupling distance is therefore a design parameter: tight coupling gives fast, high-probability release; loose coupling gives slow, unreliable, easily modulated release.

**Release is quantal, and this is not a metaphor.** Katz and del Castillo, recording from the frog neuromuscular junction in the early 1950s, found that the muscle membrane showed tiny spontaneous depolarizations of a stereotyped size even with no nerve stimulation, and that **evoked responses came only in integer multiples of that same size.** The unit was the vesicle. This is the historical origin of the whole picture, and the reason NMJ recordings appear in every textbook — but the logic is general, and the modern quantitative work is at central synapses. (The neuromuscular junction as an organ-level structure, and autonomic transmission, belong to [physiology 1.5](../../physiology/lessons/01-05-neuromuscular-autonomic-transmission.md); here it is just the preparation where the discovery happened.)

## The formal version

### The binomial model

Let a synapse have $n$ **independent release sites** (roughly, docked-and-primed vesicles at active zones), each of which releases with probability $p$ on a given spike, and let each released vesicle produce a postsynaptic response of amplitude $q$, the **quantal size**. The number of quanta released, $k$, is binomial:

$$P(k) = \binom{n}{k} p^{k}(1-p)^{n-k}$$

$$\boxed{\;m = np \quad\text{(mean quantal content)},\qquad \mu = mq,\qquad \sigma^{2} = np(1-p)\,q^{2}\;}$$

*In words: $m$ is the average number of vesicles released per spike, the mean response is $m$ times the size of one vesicle's effect, and the variance is the binomial variance scaled by $q^2$.*

Three parameters, and they mean different things biologically: $n$ is **structural** (how many release sites), $p$ is **presynaptic and dynamic** (how well Ca²⁺ couples to the sensor), $q$ is **postsynaptic** (how many receptors, how sensitive). Separating them is the point of the whole exercise — "the synapse got stronger" is not a finding until you say *which of the three changed*.

### The Poisson limit, and why it is beautiful

Low external Ca²⁺ makes $p$ small. In the limit $n\to\infty$, $p\to 0$ with $m = np$ fixed, the binomial becomes Poisson ([prob-stat-refresher 2.2](../../prob-stat-refresher/lessons/02-02-discrete-distributions.md)):

$$P(k) = \frac{m^{k}e^{-m}}{k!}$$

Set $k=0$. The probability that a stimulus produces **nothing at all** — a *failure* — is

$$P(0) = e^{-m} \;\;\Longrightarrow\;\; \boxed{\;m = \ln\!\left(\frac{N_{\text{trials}}}{N_{\text{failures}}}\right)\;}$$

*In words: count how often the synapse does nothing, and you have learned the average number of vesicles it releases — without measuring a single amplitude.*

**This is the elegant part.** Failures are the easiest thing to score in a noisy recording: you do not need to resolve amplitudes, calibrate anything, or trust your quantal size estimate. And you get an independent route to the same number, since $m = \mu/q$ from the mean response and the mean miniature amplitude. **The two estimates agreeing is the experiment that established the vesicle hypothesis** — it is a genuine prediction, not a curve fit.

### Separating $n$ and $p$: variance analysis

The failure method gives $m = np$ but cannot split it. Variance can, because variance is where the binomial and Poisson disagree. Divide the binomial variance by the mean:

$$\frac{\sigma^{2}}{\mu} = \frac{np(1-p)q^{2}}{npq} = q(1-p)$$

$$\text{and}\qquad \mathrm{CV}^{-2} = \frac{\mu^{2}}{\sigma^{2}} = \frac{np}{1-p}$$

*In words: the variance-to-mean ratio of the response gives you $p$ as soon as you know the quantal size, and then $n = m/p$ falls out.*

Note the direction of the tell: the Poisson would predict $\sigma^2 = mq^2$. **A real synapse with substantial $p$ is always *sub*-Poisson** — releasing all $n$ sites is a ceiling, and a ceiling suppresses variance. Observed variance below $mq^2$ is direct evidence that $p$ is not small.

### The vesicle cycle, and why it makes the synapse a filter

Fusion is one step of a loop: **dock → prime → fuse → endocytose → refill → re-dock.** The vesicles that are docked and primed *right now* are the **readily-releasable pool (RRP)** — typically only about 5–10 vesicles per active zone, against a reserve pool of a hundred or more further back.

Two numbers do the work. Let $N$ be the RRP size and $\tau_{\text{rec}}$ its refilling time constant (hundreds of milliseconds to seconds). A spike removes a fraction $p$ of the pool; refilling puts it back at rate $1/\tau_{\text{rec}}$. **If spikes arrive faster than $1/(p\,\tau_{\text{rec}})$, the pool runs down and the synapse gets weaker.**

$$\boxed{\;\text{finite pool} + \text{slow refilling} \;\Longrightarrow\; \text{gain depends on recent firing history}\;}$$

That is the formal content of "a synapse is a dynamic filter, not a wire."

### Short-term plasticity: one formula, two opposite behaviours

Two mechanisms act on the second of a pair of closely spaced spikes:

- **Depression** — the first spike consumed part of the RRP, so fewer sites are available. Sites remaining: a fraction $(1-p)$.
- **Facilitation** — Ca²⁺ from the first spike has not been fully cleared. This **residual Ca²⁺** is small in absolute terms, but it rides on top of the second nanodomain, and the fourth power amplifies it enormously. Write the resulting boost as a factor $f>1$ on the release probability: $p_2 = f\,p_1$.

The **paired-pulse ratio** (second response over first) follows immediately from the depletion model, with $N$ the pool size:

$$\text{PPR} = \frac{N(1-p_1)\,p_2}{N p_1} = \frac{(1-p_1)\,f\,p_1}{p_1} \;\Longrightarrow\; \boxed{\;\text{PPR} = (1-p_1)\,f\;}$$

*In words: the same residual-Ca²⁺ boost $f$ acts at every synapse, but it is multiplied by how much of the pool survived the first spike — and that survival term depends entirely on $p_1$.*

$$\text{PPR} > 1 \iff p_1 < 1 - \frac{1}{f}$$

**So one parameter decides the sign of the effect.** A synapse with low $p$ has plenty of pool left, facilitation wins, and it *potentiates*. A synapse with high $p$ has already spent its pool, depletion wins, and it *depresses*. This is the general rule worth memorising:

> **High release probability ⇒ depression. Low release probability ⇒ facilitation.**

And the consequence is genuinely strange: **the identical presynaptic spike train, delivered to two synapses that differ only in $p$, produces opposite postsynaptic outcomes.** The information is in the presynapse; what gets read out of it is a property of the synapse, not the signal.

What each buys computationally:

| | Depressing synapse (high $p$) | Facilitating synapse (low $p$) |
|---|---|---|
| Response to a steady train | strong at onset, then fades | weak at onset, then builds |
| What it transmits | **changes** in firing rate | **sustained** firing rate |
| Signal-processing analogue | high-pass / adapting | low-pass / integrating |
| Typical use | detecting stimulus onsets and transients | reporting that an input has been on for a while |

**A depressing synapse is a differentiator; a facilitating synapse is an integrator.** A cortical axon that contacts both kinds simultaneously transmits both the derivative and the running average of its own firing rate, on the same spikes, to different targets — which is a lot of computation to get for free from vesicle bookkeeping.

### Clearance sets the clock

Transmitter must leave the cleft before the next event, by three routes:

1. **Diffusion** out of the cleft — always operating, and unavoidable.
2. **Reuptake** by transporters on the presynaptic terminal and on surrounding glia — the main mechanism for glutamate and GABA. Recycling, not destruction.
3. **Enzymatic degradation** in the cleft — acetylcholinesterase chews up ACh in well under a millisecond. Fast, but throws the molecule away.

**Clearance speed sets the synapse's temporal resolution.** If transmitter lingers for time $T$, two presynaptic events closer together than $T$ blur into one postsynaptic event, and receptors that stay bound also desensitise. A synapse cannot resolve inputs faster than it can clean up after itself — which is why the fastest synapses in the brain (auditory brainstem, where microsecond timing carries the signal) have unusually large, open geometry and heavy transporter expression.

### The numbers that make a synapse concrete

| Quantity | Value |
|---|---|
| Synaptic cleft width | 20–25 nm (a gap junction is ~3.5 nm) |
| Vesicle outer diameter | ~40 nm |
| Transmitter molecules per vesicle | ~2,000–5,000 |
| Concentration inside a vesicle | ~100–300 mM |
| Peak cleft transmitter transient | ~1 mM, lasting ~1 ms |
| Bulk resting Ca²⁺ in the terminal | 50–100 nM |
| Nanodomain Ca²⁺ near an open channel | 10–100 µM, within ~50 nm |
| Readily-releasable pool, per active zone | ~5–10 vesicles |
| Release probability, central synapses | 0.1–0.9 (often ~0.2) |
| Synaptic delay | 0.5–1 ms |
| Synapses on one cortical pyramidal cell | ~10⁴ (a hippocampal CA1 cell carries up to ~3 × 10⁴) |

**That last row is the one to sit with.** With $10^{11}$ neurons at $10^4$ synapses each, the brain holds of order $10^{15}$ synapses — and by the argument above, each one is not a number but a small dynamical system with its own $n$, $p$, $q$ and refilling kinetics.

## Picture

![Three panels. Panel a shows a presynaptic terminal with a reserve pool of vesicles, two docked vesicles, a voltage-gated calcium channel with a shaded calcium nanodomain around its mouth, a vesicle caught mid-fusion releasing transmitter into a narrow cleft, and receptors on the postsynaptic membrane producing an EPSC; six numbered steps are listed alongside, with a bracket marking steps two through four as the ones that own nearly all of the half-millisecond synaptic delay while diffusion across the cleft is negligible. Panel b is a histogram of postsynaptic response amplitudes with a tall bar of failures at zero and evenly spaced peaks at one, two, three and four quanta, with the spacing labelled as the quantal size. Panel c shows paired-pulse traces: a low-probability synapse whose second response is larger than the first, and a high-probability synapse whose second response is smaller.](assets/02-01-fig1.svg)

## Worked examples

### Example 1 (mechanical) — what the fourth power actually does

Release goes as $[\text{Ca}^{2+}]^4$. Take a synapse releasing $m = 1.0$ vesicles per spike under control conditions.

**(a) Lower external Ca²⁺ so that Ca²⁺ entry falls by 25 percent.** The influx factor is $0.75$:

$$\frac{m_{\text{new}}}{m_{\text{old}}} = 0.75^{4} = 0.5625^{2} = 0.3164 .$$

$$m_{\text{new}} = 0.32 .$$

**A 25 percent cut in Ca²⁺ produces a 68 percent cut in release.** This is why quantal experiments are done in low Ca²⁺: a modest, easily controlled reduction in the bath drives $p$ down into the Poisson regime where failures become common and countable.

**(b) Now the facilitation case: residual Ca²⁺ from a preceding spike raises the effective Ca²⁺ signal by only 12 percent.**

$$f = 1.12^{4} = 1.2544^{2} = 1.5735 .$$

**A 12 percent bump in Ca²⁺ gives a 57 percent bump in release.** Residual Ca²⁺ is a *tiny* perturbation to the nanodomain peak, and it still nearly doubles the output. Facilitation needs no dedicated machinery — it is what a fourth-power sensor does automatically when you fail to clear the previous signal.

**(c) Why "threshold detector" is the right description.** The ratio of release at two Ca²⁺ levels differing by a factor $r$ is $r^4$. Over a factor-of-3 range of Ca²⁺ entry, output spans $3^4 = 81$-fold. **There is no regime in which this device usefully reports the value of its input; it reports which side of a narrow band the input is on.** That is a switch, and the switch is thrown by a nanodomain that exists only when a channel is open — hence "coincidence detector": vesicle *and* open channel *and* proximity, all at once.

### Example 2 (why you'd care) — a full quantal analysis, both ways

**Part 1: recover $m$ from failures alone.** A central synapse is stimulated 200 times in low Ca²⁺. **81 trials produce no detectable response.** Separately, spontaneous miniature events recorded from the same cell have mean amplitude $q = 0.40$ mV. The mean response across all 200 trials (counting failures as zero) is $\mu = 0.362$ mV.

By the failure method:

$$m = \ln\!\left(\frac{200}{81}\right) = \ln(2.4691) = \mathbf{0.904}.$$

By the mean-and-quantal-size method:

$$m = \frac{\mu}{q} = \frac{0.362}{0.40} = \mathbf{0.905}.$$

**Agreement to three decimal places, from two measurements that share no assumptions.** One counted events that did not happen; the other averaged the ones that did. **They can only agree if the postsynaptic response really is built from integer numbers of a fixed unit** — which is the vesicle hypothesis, tested rather than assumed. If transmitter were released continuously in graded amounts, there would be no reason for $\ln(N/N_0)$ to know anything about $\mu/q$.

**Part 2: the same synapse in normal Ca²⁺ — now split $n$ from $p$.** Raise external Ca²⁺ back to physiological levels and record 500 trials. Now: mean response $\mu = 2.40$ mV, variance $\sigma^{2} = 0.24$ mV², and the quantal size is unchanged at $q = 0.40$ mV.

Quantal content:

$$m = \frac{\mu}{q} = \frac{2.40}{0.40} = 6.0 \ \text{vesicles per spike}.$$

Release probability, from the variance-to-mean ratio:

$$\frac{\sigma^{2}}{\mu} = \frac{0.24}{2.40} = 0.10 = q(1-p) = 0.40(1-p) \;\Longrightarrow\; 1-p = 0.25 \;\Longrightarrow\; \boxed{p = 0.75}$$

Number of release sites:

$$n = \frac{m}{p} = \frac{6.0}{0.75} = \boxed{8}$$

**Check it two ways.** Forward-compute from $n=8$, $p=0.75$, $q=0.40$:

$$\mu = npq = 8(0.75)(0.40) = 2.40 \ \text{mV} \;\checkmark$$
$$\sigma^{2} = np(1-p)q^{2} = 8(0.75)(0.25)(0.16) = 1.5 \times 0.16 = 0.24\ \text{mV}^{2} \;\checkmark$$

And via the CV: $\mathrm{CV}^{-2} = \mu^2/\sigma^2 = 5.76/0.24 = 24.0$, against the prediction $np/(1-p) = 6.0/0.25 = 24.0$ ✓.

**Part 3: notice that Poisson would have failed here, and how loudly.** Poisson predicts $\sigma^2 = mq^2 = 6(0.16) = 0.96$ mV² — **four times the observed variance.** And it predicts a failure rate of $e^{-6} = 0.0025$, i.e. 0.25 percent, against the true binomial value

$$(1-p)^{n} = 0.25^{8} = \frac{1}{65{,}536} = 1.5\times10^{-5},$$

**0.0015 percent — a 160-fold overestimate.** The Poisson limit is a low-$p$ tool and nothing else; used at $p = 0.75$ it would have told you this synapse fails 16 times more often than it does. Sub-Poisson variance is the fingerprint of a ceiling, and the ceiling is $n$.

**Why an experimentalist cares:** suppose this synapse doubles its response after a plasticity protocol. Redo the analysis. If $q$ doubled, the change is postsynaptic — more or better receptors. If $p$ rose, the change is presynaptic — more release. If $n$ rose, new release sites were built. **These are three different biological stories with three different molecular mechanisms, and only the variance tells them apart.** This is exactly the argument that ran for two decades over whether LTP is pre- or postsynaptic ([4.1](04-01-plasticity-ltp-ltd.md)).

## Watch out

- **You might think the synaptic delay is the time transmitter takes to cross the cleft.** It is not, and it is not close. A cleft is 20 nm wide; with $D \approx 4\times10^{-10}\ \text{m}^2\text{/s}$, the crossing time is $x^2/2D \approx 0.5$ **microseconds** — about one part in a thousand of the 0.5 ms total. **Almost the entire delay is the Ca²⁺ channel opening and the sensor-to-fusion step**, with receptor opening contributing a little at the end. Diffusion across the cleft is free; molecular machinery is not.
- **You might read "quantal" as "release is discrete because ions are discrete."** No — the quantum is a *vesicle*, a package of thousands of molecules. The discreteness is anatomical, not thermodynamic, and it was inferred from statistics before anyone saw a vesicle fuse.
- **You might think a stronger synapse is simply a bigger $m$.** $m = np$ hides the mechanism. Two synapses with identical $m$ but different $p$ behave in *opposite* ways during a spike train — one depresses, one facilitates. **The mean response tells you almost nothing about what the synapse does to a signal.**
- **You might expect facilitation and depression to be alternative mechanisms.** Both run at every synapse, always. What differs is which one wins, and $p$ decides it.
- **You might assume that raising Ca²⁺ improves transmission.** It raises $p$, which raises the first response and *deepens* the subsequent depression. High-fidelity single-spike transmission and high-fidelity train transmission are in direct conflict, and a synapse must be tuned for one or the other.
- **You might treat reuptake as mere cleanup.** It sets the synapse's temporal resolution and hence its bandwidth — and it is the target of a large fraction of psychoactive drugs, which act by making clearance *worse* on purpose ([2.2](02-02-neurotransmitters-receptors.md)).

## One-liner

> Release goes as the fourth power of local Ca²⁺, so a synapse is a coincidence-and-threshold detector rather than a meter; the output arrives in vesicle-sized quanta whose average number you can read off the failure rate as $m=\ln(N/N_0)$; and because the vesicle pool is small and refills slowly, the single parameter $p$ decides whether a spike train is differentiated (high $p$, depression) or integrated (low $p$, facilitation).

## Problems

**P1 (🟢)** A synapse is stimulated 240 times in low external Ca²⁺, and 88 trials give no response. Spontaneous miniature events at this synapse have mean amplitude 0.35 mV.
(a) Compute the mean quantal content $m$.
(b) Assuming Poisson statistics, predict how many of the 240 trials should contain exactly 1, 2, and 3 quanta, and how many contain 4 or more.
(c) Predict the mean response amplitude across all 240 trials.
(d) State the condition under which the Poisson treatment is legitimate, and why low Ca²⁺ enforces it.

**P2 (🟡)** Two synapses receive an identical pair of spikes 20 ms apart. Synapse A has $p_1 = 0.10$; synapse B has $p_1 = 0.60$. At both, residual Ca²⁺ raises the effective Ca²⁺ signal for the second spike by 12 percent, and release goes as the fourth power of Ca²⁺. Assume the readily-releasable pool does not refill measurably in 20 ms.
(a) Compute the facilitation factor $f$ and then the paired-pulse ratio at each synapse.
(b) Find the release probability at which the synapse switches from facilitating to depressing.
(c) A single axon contacts both synapses and fires a 3-second burst at 40 Hz. Say in one sentence each what the two postsynaptic cells learn about the input, and name the signal-processing operation each synapse is performing.

**P3 (🔴, bridges to biophysics)** A vesicle of internal radius 17.5 nm contains 4,000 glutamate molecules. It fuses and dumps them into a cleft you may model as a disc of radius 200 nm and height 20 nm. Take $D = 4\times10^{-10}\ \text{m}^2\text{/s}$ for glutamate in the cleft and $N_A = 6.022\times10^{23}\ \text{mol}^{-1}$.
(a) Compute the glutamate concentration inside the vesicle.
(b) Compute the concentration in the cleft immediately after fusion, assuming instantaneous uniform mixing and no escape.
(c) Using $t \approx x^{2}/2D$, estimate the time to cross the cleft and the time to diffuse laterally out of it. Compare both with the 0.5 ms synaptic delay.
(d) The measured transient is about 1 mM lasting about 1 ms. Both of your answers in (b) and (c) disagree with that. Explain each discrepancy.

<details>
<summary>Solutions</summary>

**P1 (a)** The failure fraction estimates $P(0) = e^{-m}$:

$$m = \ln\!\left(\frac{N_{\text{trials}}}{N_{\text{failures}}}\right) = \ln\!\left(\frac{240}{88}\right) = \ln(2.7273) = \mathbf{1.003}.$$

Round to $m = 1.00$ vesicles per spike.

**(b)** With $m = 1.00$, $P(k) = e^{-1}/k!$ and $e^{-1} = 0.36788$:

| $k$ | $P(k)$ | Expected count out of 240 |
|---|---|---|
| 0 | 0.3679 | 88.3 (matches the 88 observed ✓) |
| 1 | 0.3679 | **88.3** |
| 2 | 0.1839 | **44.1** |
| 3 | 0.0613 | **14.7** |
| ≥ 4 | 0.0190 | **4.6** |

The tail: $P(k\ge4) = 1 - (0.3679+0.3679+0.1839+0.0613) = 1 - 0.9810 = 0.0190$, giving $0.0190 \times 240 = 4.6$ trials. Total: $88.3+88.3+44.1+14.7+4.6 = 240.0$ ✓.

Note the Poisson signature at $m=1$: **failures and single-quantum events are exactly equally likely**, since $P(0) = P(1) = e^{-1}$.

**(c)** $$\mu = mq = 1.003 \times 0.35\ \text{mV} = \mathbf{0.351\ \text{mV}}.$$

This is the cross-check that validates the whole method: measure $\mu$ directly and it must equal $q\ln(N/N_0)$. Disagreement means either the quantal size is not uniform, or some "failures" were events too small to detect.

**(d)** The Poisson limit requires $n$ large and $p$ small with $m = np$ finite — operationally, $p \lesssim 0.1$, so that the ceiling imposed by having only $n$ sites is never approached. Low external Ca²⁺ enforces it because $p \propto [\text{Ca}^{2+}]^4$: a modest reduction in bath Ca²⁺ drives $p$ down steeply (Example 1a — a 25 percent cut gives a 68 percent reduction), pushing the synapse into the failure-rich regime where the method works. **The steep cooperativity that makes the synapse a threshold device is also what makes it experimentally tunable.**

---

**P2 (a)** The facilitation factor is the fourth power of the Ca²⁺ boost:

$$f = 1.12^{4} = (1.2544)^{2} = \mathbf{1.574}.$$

The paired-pulse ratio, from $\text{PPR} = (1-p_1)f$:

$$\text{Synapse A}: \quad \text{PPR} = (1-0.10)(1.574) = 0.90 \times 1.574 = \mathbf{1.42} \quad \text{(facilitation)}$$
$$\text{Synapse B}: \quad \text{PPR} = (1-0.60)(1.574) = 0.40 \times 1.574 = \mathbf{0.63} \quad \text{(depression)}$$

*(Sanity check on B: the second-spike release probability is $p_2 = 1.574 \times 0.60 = 0.94 < 1$, so the model has not gone out of range.)*

**The identical Ca²⁺ boost acts at both synapses.** It is entirely swamped at B by the fact that 60 percent of the pool is already gone.

**(b)** Set $\text{PPR} = 1$:

$$(1-p^{*})f = 1 \;\Longrightarrow\; 1-p^{*} = \frac{1}{1.574} = 0.6353 \;\Longrightarrow\; p^{*} = \mathbf{0.365}.$$

Synapses with $p$ below about 0.36 facilitate; above it, they depress. Real central synapses span $p \approx 0.1$ to $0.9$, so **both signs are common, and the crossover sits right in the middle of the physiological range** — which is presumably not an accident.

**(c) Synapse A (facilitating, low $p$).** The first few spikes of the burst produce almost nothing; the response builds over tens to hundreds of milliseconds and then holds. The postsynaptic cell learns **that the input has been firing steadily for a while** — it is nearly blind to the onset. This is **temporal integration / low-pass filtering**: it reports the sustained rate.

**Synapse B (depressing, high $p$).** The first spike produces a large response; by the tenth the response has faded to a fraction of it, and it stays low for as long as the rate stays at 40 Hz. The postsynaptic cell learns **that the rate just changed** — and if the axon steps to 80 Hz, B transmits a fresh transient while A barely notices. This is **adaptation / high-pass filtering**: it reports the derivative of the rate.

**The one-sentence version:** the same 3-second burst is reported by A as "input on" and by B as "input started" — **and there is no signal in the spike train telling you which reading is correct, because the choice was made by the synapse, not the sender.**

---

**P3 (a)** Vesicle volume:

$$V_{\text{ves}} = \tfrac{4}{3}\pi r^{3} = \tfrac{4}{3}\pi (1.75\times10^{-8}\ \text{m})^{3} = 4.1888 \times 5.359\times10^{-24} = 2.245\times10^{-23}\ \text{m}^{3}.$$

Converting ($1\ \text{m}^3 = 10^3$ L): $V_{\text{ves}} = 2.245\times10^{-20}$ L.

Moles of glutamate:

$$n_{\text{glu}} = \frac{4000}{6.022\times10^{23}} = 6.642\times10^{-21}\ \text{mol}.$$

$$c_{\text{ves}} = \frac{6.642\times10^{-21}}{2.245\times10^{-20}} = \mathbf{0.296\ \text{M} \approx 300\ \text{mM}}.$$

Right on the measured 100–300 mM. **A synaptic vesicle is a concentrated brine of neurotransmitter** — which is why loading one costs real ATP: the vesicular transporter is pushing glutamate up a ~100-fold gradient using the proton-motive force across the vesicle membrane.

**(b)** Cleft volume:

$$V_{\text{cleft}} = \pi r^{2} h = \pi (2\times10^{-7})^{2}(2\times10^{-8}) = \pi (4\times10^{-14})(2\times10^{-8}) = 2.513\times10^{-21}\ \text{m}^{3} = 2.513\times10^{-18}\ \text{L}.$$

$$c_{\text{cleft}} = \frac{6.642\times10^{-21}\ \text{mol}}{2.513\times10^{-18}\ \text{L}} = 2.64\times10^{-3}\ \text{M} = \mathbf{2.6\ \text{mM}}.$$

The dilution factor is just the volume ratio, $2.513\times10^{-18}/2.245\times10^{-20} = 112$: 300 mM / 112 ≈ 2.6 mM ✓. **The cleft is so thin that one vesicle nearly fills it** — which is the geometric reason a single quantum can saturate the receptors directly opposite it.

**(c)** Across the cleft, $x = 20$ nm:

$$t = \frac{x^{2}}{2D} = \frac{(2\times10^{-8})^{2}}{2(4\times10^{-10})} = \frac{4\times10^{-16}}{8\times10^{-10}} = 5\times10^{-7}\ \text{s} = \mathbf{0.5\ \mu s}.$$

Laterally out of the cleft, $x = 200$ nm — ten times the distance, so a hundred times the time:

$$t = \frac{(2\times10^{-7})^{2}}{8\times10^{-10}} = 5\times10^{-5}\ \text{s} = \mathbf{50\ \mu s}.$$

Against a 0.5 ms (500 µs) synaptic delay: crossing the cleft takes **0.1 percent** of the delay, and escaping it takes **10 percent**. **The delay is not transport — it is machinery**: Ca²⁺ channels taking ~0.2 ms to activate, then the Ca²⁺-binding-to-fusion step. Diffusion at these length scales is essentially instantaneous, exactly as the $x^2$ scaling of the random walk predicts ([biophysics 1.3](../../biophysics/lessons/01-03-diffusion-ficks-laws.md)) — halving the distance quarters the time, and 20 nm is a very short distance.

**(d) Two separate discrepancies, with two separate causes.**

*Concentration (2.6 mM computed vs ~1 mM measured).* The calculation assumed instantaneous uniform mixing with no escape, but from (c) the escape time is only ~50 µs and fusion is not instantaneous — the pore opens over tens of microseconds, so molecules are already leaving while the vesicle is still emptying. The true peak is therefore lower than the well-mixed bound, and it is also non-uniform: concentration directly under the fusion pore is much higher than at the cleft rim. **The 2.6 mM is a correct upper bound, and the factor-of-2 gap to reality is the escape happening during release.**

*Duration (50 µs computed vs ~1 ms measured).* Free diffusion is a lower bound on clearance time, because glutamate does not travel freely. It binds and rebinds to receptors and to transporters, each capture removing it from the diffusing population and later returning it; the extracellular space outside the cleft is tortuous and crowded; and the final removal step is transporter-limited, not diffusion-limited. **Buffered diffusion is much slower than free diffusion**, and the ~1 ms figure reflects the transporters, not the geometry.

**The payoff:** the temporal resolution of the synapse — roughly 1 ms, not 50 µs — is set by *biochemistry that evolution can tune*, not by physics that it cannot. Synapses that need microsecond precision, like those in the auditory brainstem, achieve it partly by changing that biochemistry and partly by using receptors that unbind fast enough not to care.

</details>

## Flashback

**From Lesson 1.3 (the action potential):** Threshold is not a voltage written into the membrane; it is the point where inward and outward current balance. Consider a patch of membrane held at $V = -55$ mV, with $E_{\text{Na}} = +60$ mV and a combined K⁺-plus-leak reversal potential of $-75$ mV. At this voltage the outward conductance is $g_{\text{K,leak}} = 1.0$ nS and does not change appreciably on the timescale below.

(a) The activated Na⁺ conductance at this instant is $g_{\text{Na}} = 0.15$ nS. Compute both currents and the net current, and say whether the patch fires.
(b) A brief synaptic input drives $g_{\text{Na}}$ to 0.30 nS. Recompute, and state what happens next.
(c) Find the threshold value of $g_{\text{Na}}$ at this voltage.
(d) Immediately after a spike, Na⁺ inactivation has removed most available Na⁺ channels and $g_{\text{K,leak}}$ has risen to 3.0 nS. Compute the new threshold conductance and explain the refractory period in these terms.

<details>
<summary>Solution</summary>

Use $I = g(V - E)$, with the sign convention that inward (negative) current depolarizes. Note the unit convenience: nS × mV = pA.

**(a)** $$I_{\text{Na}} = (0.15\ \text{nS})(-55 - 60\ \text{mV}) = 0.15 \times (-115) = -17.25\ \text{pA} \quad \text{(inward)}$$
$$I_{\text{K,leak}} = (1.0\ \text{nS})(-55 - (-75)\ \text{mV}) = 1.0 \times 20 = +20.0\ \text{pA} \quad \text{(outward)}$$
$$I_{\text{net}} = -17.25 + 20.0 = \mathbf{+2.75\ \text{pA}}, \ \text{net outward}.$$

Net outward current **repolarizes** the patch. It drifts back toward rest; **no spike.** The patch is below threshold even though it is 10 mV depolarized from $-65$ mV.

**(b)** $$I_{\text{Na}} = 0.30 \times (-115) = -34.5\ \text{pA}, \qquad I_{\text{K,leak}} = +20.0\ \text{pA}$$
$$I_{\text{net}} = \mathbf{-14.5\ \text{pA}}, \ \text{net inward}.$$

Net inward current depolarizes the patch further, which opens more Na⁺ channels, which increases the inward current, and so on. **The positive feedback loop has closed: this is a spike.** Nothing about the membrane changed except one conductance crossing a value.

**(c)** Threshold is $I_{\text{net}} = 0$:

$$g_{\text{Na}}^{*}(115) = (1.0)(20) \;\Longrightarrow\; g_{\text{Na}}^{*} = \frac{20}{115} = \mathbf{0.174\ \text{nS}}.$$

So (a) at 0.15 nS was just *below* threshold and (b) at 0.30 nS was comfortably above it — a difference of 0.15 nS in one conductance separating "decays quietly" from "full action potential." **This is the mechanistic content of all-or-none.**

**(d)** With $g_{\text{K,leak}} = 3.0$ nS:

$$g_{\text{Na}}^{*} = \frac{(3.0)(20)}{115} = \frac{60}{115} = \mathbf{0.522\ \text{nS}},$$

**three times higher.** The refractory period is a squeeze from both sides at once:

- **Numerator side (relative refractoriness):** the outward conductance is elevated because delayed-rectifier K⁺ channels are still open, so more inward current is needed to break even.
- **Available-Na⁺ side (absolute refractoriness):** inactivation gates are shut, so a large fraction of Na⁺ channels *cannot* open no matter how far you depolarize. If the maximum achievable $g_{\text{Na}}$ is below 0.522 nS, **no stimulus of any size can fire the cell** — that is absolute refractoriness, and it is why a spike cannot propagate backwards into the membrane it just came from ([1.5](01-05-cable-theory-conduction.md)).

As inactivation recovers and K⁺ channels close, $g_{\text{Na}}^{*}$ slides back down to 0.174 nS. **Threshold is not a constant; it is a moving current-balance point, and its recent history is written into the gating variables.**

</details>

## Connections

- **Backward:** the spike from [1.3](01-03-the-action-potential.md) is the input to this lesson — and the invasion of the terminal depends on the passive spread and safety factor from [1.5](01-05-cable-theory-conduction.md), since a terminal that fails to depolarize fully opens fewer Ca²⁺ channels and, by the fourth power, releases far less. The docking-and-fusion machinery is the same SNARE-based membrane trafficking as in [molecular-cell-biology 1.4](../../molecular-cell-biology/lessons/01-04-endomembrane-trafficking.md); a synapse is a specialised secretory cell.
- **Forward:** [2.2](02-02-neurotransmitters-receptors.md) takes over at the receptor and decides the *sign* and *speed* of the postsynaptic response; [2.3](02-03-synaptic-integration.md) sums many of these currents in a dendrite and asks whether the cell fires; [2.4](02-04-electrical-synapses.md) is the counterfactual — what you get when you skip all of this; [2.6](02-06-circuit-motifs-computation.md) uses depressing and facilitating synapses as circuit elements for gain control; [4.1](04-01-plasticity-ltp-ltd.md) makes $p$, $q$ and $n$ into the variables that store memory, and the variance analysis of Example 2 is the tool that argued out where LTP lives.
- **Sideways:** the fourth-power Ca²⁺ dependence is a Hill coefficient — the same cooperative-binding mathematics as hemoglobin and allosteric enzymes ([biophysics 2.4](../../biophysics/lessons/02-04-cooperativity-allostery.md)); the cleft calculations are the random walk of [biophysics 1.3](../../biophysics/lessons/01-03-diffusion-ficks-laws.md) at 20 nm; the binomial-to-Poisson limit and the variance-to-mean trick are straight out of [prob-stat-refresher 2.2](../../prob-stat-refresher/lessons/02-02-discrete-distributions.md), used here as a *measuring instrument* for structure you cannot see; and the depressing/facilitating dichotomy is a high-pass/low-pass filter pair, which is the language [2.6](02-06-circuit-motifs-computation.md) will use directly. The organ-level version of everything here — endplate potentials, the safety factor, and autonomic transmission — is [physiology 1.5](../../physiology/lessons/01-05-neuromuscular-autonomic-transmission.md).
