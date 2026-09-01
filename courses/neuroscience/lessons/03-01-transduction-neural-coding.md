# Neuroscience · Lesson 3.1: Transduction and neural coding

> ⏱ ~15 min · Module 3: Sensory & motor systems · Builds on: [2.6](02-06-circuit-motifs-computation.md), [1.3](01-03-the-action-potential.md) · Unlocks: 3.2 (vision), 3.3 (audition & somatosensation)

## Why this matters

Modules 1 and 2 built a device and wired it up. Module 3 asks what the device is *for*, and the answer starts here: **the nervous system has no access to the world, only to spikes.** Everything you know about the outside arrived as a train of near-identical millisecond pulses on a bundle of axons. This lesson is about the two operations that make that work — turning physical energy into a membrane current (**transduction**), and arranging the resulting spikes so that something downstream can read the stimulus back out (**coding**).

Do this once, in general, and [3.2](03-02-vision.md) and [3.3](03-03-audition-somatosensation.md) become instances rather than new material. Three results are worth the price of admission on their own:

- **Sensory receptors run at the physical noise floor.** A rod reports a single photon; a hair cell responds to a stereocilium displacement of about 0.3 nm, roughly an atomic diameter. These are not "very sensitive" in the engineering sense — they are as sensitive as the laws of physics permit, which is why the interesting question stops being *how* and becomes *why not more*.
- **A population of broadly tuned neurons is far more precise than any one of them.** Neurons tuned 94° wide, read as a group, localize a direction to about 2°. Precision is not built by sharpening cells; it is built by pooling them.
- **What limits that pooling is not the number of neurons but the *correlations* in their noise** — which is why "noise correlations" is a phrase you will meet in every population-coding paper written since about 1994.

## The idea

**Transduction, stated once for every modality.** A stimulus — a photon, a pressure, a molecule, a temperature — modulates the conductance of some channel in a receptor cell. That conductance change produces a graded **receptor potential**, exactly the driving-force arithmetic of [1.2](01-02-resting-membrane-potential.md) and [2.2](02-02-neurotransmitters-receptors.md):

$$I_{\text{transduction}} = g(\text{stimulus})\,\big(V_m - E_{\text{rev}}\big)$$

The receptor potential is **analogue and local**. It is converted into a spike rate later — at the receptor's own spike initiation zone, or at the first synapse ([2.1](02-01-chemical-synaptic-transmission.md)) if the receptor is non-spiking, as photoreceptors and hair cells are. **Nothing in sensory transduction is new machinery.** It is [1.3](01-03-the-action-potential.md)'s ion channels with a different thing pulling on the gate.

**And there are only two ways to pull on that gate, with opposite trade-offs.**

| | **Direct gating** | **Second-messenger cascade** |
|---|---|---|
| Mechanism | force on the channel opens it | receptor → G protein → enzyme → messenger → channel |
| Latency | tens of microseconds | tens to hundreds of milliseconds |
| Gain | ~1 (no amplification) | $10^{5}$ and up |
| Examples | hair cells, mechanoreceptors | phototransduction, olfaction |

**The trade is the whole story: amplification costs time.** A hair-cell transduction channel is physically tethered to a tip link, so tension opens it within microseconds — fast enough for the auditory nerve to phase-lock to a 3 kHz tone, which is to say fast enough to follow the *waveform*, not just its envelope. A rod, by contrast, spends one photon on ~$10^{5}$ hydrolysed cGMP molecules and takes ~200 ms to reach peak response. Four orders of magnitude of latency bought four to five orders of magnitude of gain. **Neither design is better; they are different points on the same curve**, and each modality sits where its physics forces it. (The cascade machinery itself is [molecular-cell-biology 2.1](../../molecular-cell-biology/lessons/02-01-receptors-reading-outside-world.md) and [2.3](../../molecular-cell-biology/lessons/02-03-kinase-cascades-switch.md) — a sensory cascade is a GPCR cascade with a photon or an odorant as the ligand.)

**Adaptation is universal, and it means receptors encode change.** Hold a stimulus constant and almost every receptor's response decays. You stop feeling your shirt within seconds. **This is not fatigue** — it is an active, tunable subtraction of the running average, and it is the reason vision works over ten orders of magnitude of light intensity when a single photoreceptor's instantaneous range covers perhaps two.

**Compression is forced by arithmetic.** A neuron's usable rate range is roughly 1–200 spikes per second: two orders of magnitude, and that is generous. Natural stimulus intensities span ten or more. A linear map from stimulus to rate therefore throws away everything but the top decade. **A logarithmic map gives every decade the same number of spikes**, which is Weber–Fechner, and which is why loudness is measured in decibels and star brightness in magnitudes.

**Then coding.** Once you have spikes, the question is what carries the information: **how many** (rate), **when** (timing), or **which neurons** (population). The answer is all three, in different systems, and the deep result is about the third one.

## The formal version

**Adaptation as a high-pass filter.** Let $s(t)$ be the stimulus and $a(t)$ an internal adapted state that chases it with time constant $\tau_a$:

$$\tau_a \frac{da}{dt} = s - a, \qquad r(t) = g\big[s(t) - a(t)\big] + \beta\, s(t)$$

Here $r$ is firing rate (Hz), $g$ the phasic gain and $\beta$ the tonic gain (both in Hz per stimulus unit). Taking the Fourier transform:

$$\boxed{\;\frac{R(\omega)}{S(\omega)} = \underbrace{g\,\frac{i\omega\tau_a}{1 + i\omega\tau_a}}_{\text{high-pass}} + \underbrace{\beta}_{\text{DC pedestal}}\;}$$

*In words: a receptor is a high-pass filter with a corner at $f_c = 1/(2\pi\tau_a)$, sitting on top of a small direct-current response.* With $\tau_a = 0.5$ s the corner is at 0.32 Hz: anything slower than about a third of a hertz is attenuated toward the pedestal $\beta$.

**Set $\beta = 0$ and you have a purely phasic (rapidly adapting) receptor** — a Pacinian corpuscle, which reports vibration and nothing about sustained pressure. **Make $\beta$ a decent fraction of $g$ and you have a tonic (slowly adapting) one** — a Merkel cell, which reports how hard you are pressing. Same equation, one parameter. The transfer-function language is [signals-systems 2.5](../../signals-systems/lessons/02-05-transfer-functions-poles-zeros.md); the filter reading is [4.4](../../signals-systems/lessons/04-04-filter-design-basics.md).

**Weber–Fechner, derived rather than asserted.** Weber's law is the empirical observation that the just-noticeable difference is proportional to the level: $\Delta I = k I$, with $k$ the Weber fraction. If each JND is one equal step of sensation, then $dR = c \,dI/I$, and integrating:

$$\boxed{\;R = c\ln\!\left(\frac{I}{I_0}\right)\;}$$

*In words: constant fractional resolution is the same statement as a logarithmic encoder.* Stevens later showed that many modalities fit a power law $\psi = \kappa I^{\alpha}$ better — $\alpha \approx 0.33$ for brightness (strongly compressive), $\alpha \approx 1$ for apparent length, $\alpha \approx 3.5$ for electric shock. **The exponent above 1 is the interesting one:** pain *expands* rather than compresses, which is exactly what you would design a warning signal to do.

**Tuning curve and receptive field.** A neuron's **tuning curve** $f(s)$ is its mean firing rate as a function of a stimulus parameter; its **receptive field** is the region of stimulus space that changes its rate, together with the sign and weight of each part. Take the Gaussian form

$$f_i(s) = f_{\max}\exp\!\left(-\frac{(s - s_i)^2}{2\sigma^2}\right)$$

with $s_i$ neuron $i$'s **preferred stimulus** and $\sigma$ its tuning width.

**A warning that saves confusion later: a receptive field is a description of a computation, not an anatomical object.** Nothing in the retina is shaped like a centre-surround annulus. The field is the summed weighting that a circuit — 2.6's lateral inhibition, as it happens — imposes on its inputs, and it can change with contrast, attention or adaptation, which an anatomical structure could not.

**Three code types.**

| Code | Read out from | Time needed | Where it dominates |
|---|---|---|---|
| **Rate** | spike count in a window | 50–200 ms | most cortical and motor signals |
| **Temporal** | phase locking, first-spike latency | 1 ms or less | auditory ITDs, whisker touch, olfaction |
| **Population** | which cells are active, jointly | one short window | anywhere precision matters |

**The trade between rows 1 and 3 is the point.** A rate code buys precision with *time*; a population code buys the same precision with *neurons*. Since a fleeing animal cannot spend 200 ms, evolution generally bought neurons.

**The population vector.** For $N$ neurons with preferred directions $\mathbf{c}_i$ (unit vectors) and rates $r_i$,

$$\boxed{\;\mathbf{P} = \sum_{i=1}^{N} \left(r_i - \bar{r}\right)\mathbf{c}_i, \qquad \hat{s} = \arg(\mathbf{P})\;}$$

*In words: let every neuron vote for its own preferred stimulus with a weight equal to how much above average it is firing, and take the direction of the sum.* Subtracting $\bar r$ matters — without it the baseline rates drag the estimate toward the centroid of the preferred directions.

**Fisher information and the precision bound.** For an unbiased estimator $\hat s$ built from the population response, the Cramér–Rao bound says $\mathrm{Var}(\hat s) \ge 1/J(s)$, where for independent Poisson spike counts over a window $T$,

$$J(s) = T\sum_{i} \frac{\big[f_i'(s)\big]^2}{f_i(s)}$$

For Gaussian tuning curves at density $\rho$ neurons per stimulus unit, the sum becomes an integral and collapses to a remarkably clean result:

$$\boxed{\;J = \frac{\sqrt{2\pi}\,\rho\, f_{\max} T}{\sigma}, \qquad \sigma_{\text{est}} \ge \sqrt{\frac{\sigma}{\sqrt{2\pi}\,\rho\, f_{\max} T}}\;}$$

*In words: precision improves as the square root of the number of neurons and of the time you watch, and — in one dimension — narrower tuning helps.* The estimator language here is [prob-stat-refresher 4.1](../../prob-stat-refresher/lessons/04-01-estimation-and-mle.md).

**Correlated noise, and why it changes everything.** The $1/\sqrt{N}$ above assumed independent noise. Suppose instead each neuron's estimate has variance $\sigma_1^2$ and every pair is correlated by $c$. Then the pooled estimate has

$$\mathrm{Var} = \frac{\sigma_1^2}{N}\big[1 + (N-1)c\big] \;\xrightarrow[N\to\infty]{}\; c\,\sigma_1^2$$

$$\boxed{\;\text{Averaging cannot beat } \sigma_1\sqrt{c}, \text{ no matter how many neurons you add.}\;}$$

**A correlation of 0.15 puts a floor at $0.39\,\sigma_1$** — you get a factor of 2.6 of improvement and then nothing, forever. This is why measuring noise correlations is not a technical detail: **a shared fluctuation that mimics a stimulus change is indistinguishable from one**, and no downstream reader can remove it. (The covariance machinery is [prob-stat-refresher 3.1](../../prob-stat-refresher/lessons/03-01-joint-distributions-covariance.md).)

**Sparse coding and the metabolic argument.** The brain is about 2 percent of body mass and consumes about 20 percent of resting energy, most of it on spikes and synaptic transmission. So spikes are the currency, and the right figure of merit is **bits per spike**. Discretize a neuron's output into bins of width $\Delta t$ with spike probability $p = \bar r \Delta t$:

$$\frac{H}{p} = \frac{-p\log_2 p - (1-p)\log_2(1-p)}{p} \;\xrightarrow[p \to 0]{}\; \log_2\frac{1}{p} + \log_2 e$$

*In words: the rarer a spike, the more each one tells you — but only logarithmically.* Sparse codes are metabolically efficient; the cost is that you need proportionally more neurons, which is a linear cost in volume and wiring against a logarithmic gain. **That trade-off is why cortex is sparse but not arbitrarily sparse.**

**Efficient coding.** Barlow's proposal: sensory systems are adapted to the *statistics* of natural stimuli, and their job is **redundancy reduction** — recode the input so that neurons carry independent information. Natural images have power spectra falling as roughly $1/f^2$, meaning neighbouring points are highly correlated, meaning **transmitting raw intensities wastes most of your channel on repeating what the neighbouring axon already said.** The optimal fix is to transmit local *differences*, and the filter that does that is centre-surround — which is to say, [2.6](02-06-circuit-motifs-computation.md)'s lateral inhibition. **The motif is not an accident of retinal wiring; it is the right filter for a spatially correlated world**, and 3.2 will build it explicitly. Mutual information $I(S;R)$ is the tool for measuring how much a code actually carries: [information-theory 1.3](../../information-theory/lessons/01-03-mutual-information.md), with the channel-capacity framing in [3.1](../../information-theory/lessons/03-01-discrete-channels-capacity.md).

## Picture

![Three panels. Panel a shows six broad overlapping bell-shaped tuning curves across a stimulus direction axis, with the true stimulus at 150 degrees marked by a dashed line, the six evoked firing rates drawn as green bars forming a population activity profile, and an annotation noting that 100 such neurons read over 250 milliseconds give an estimate about nineteen times sharper than the width of any one tuning curve. Panel b shows a step stimulus above two responses, a slowly adapting one that peaks and settles to a sustained plateau and a rapidly adapting one that fires only at the onset and offset. Panel c plots firing rate against stimulus intensity over ten decades, comparing a logarithmic code that assigns ten hertz to each decade against a linear code that leaves nine of the ten decades below ten hertz.](assets/03-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — reading a population).** Four neurons have cosine tuning to movement direction, $f_i(s) = 20 + 15\cos(s - s_i)$ Hz, with preferred directions $s_i = 0°, 90°, 180°, 270°$. On one trial their rates are 33.0, 27.5, 7.0 and 12.5 Hz. (a) Recover the direction with the population vector. (b) With 100 neurons of Gaussian tuning ($\sigma = 40°$, $f_{\max} = 50$ Hz) uniformly tiling 360°, read over $T = 250$ ms, how precise is the estimate? (c) Compare to one neuron's tuning width and say what that means.

**(a)** Mean rate: $\bar r = (33.0 + 27.5 + 7.0 + 12.5)/4 = 20.0$ Hz. Deviations: $+13.0,\; +7.5,\; -13.0,\; -7.5$ Hz. Now weight each unit vector:

$$\mathbf{P} = 13.0\,(1,0) + 7.5\,(0,1) - 13.0\,(-1,0) - 7.5\,(0,-1) = (26.0,\; 15.0)$$

$$\hat s = \arctan\!\frac{15.0}{26.0} = \arctan(0.577) = \mathbf{30°}, \qquad |\mathbf{P}| = \sqrt{26^2 + 15^2} = 30.0$$

**Notice both cells that fired *below* average contributed correctly**, by voting against their own preferred direction — the subtraction of $\bar r$ is doing real work, not cosmetic centring.

**(b)** Density $\rho = 100/360° = 0.278$ neurons per degree.

$$J = \frac{\sqrt{2\pi}\,\rho f_{\max} T}{\sigma} = \frac{2.5066 \times 0.278 \times 50 \times 0.25}{40} = \frac{8.70}{40} = 0.2176\ \text{deg}^{-2}$$

$$\sigma_{\text{est}} \ge \frac{1}{\sqrt{0.2176}} = \mathbf{2.14°}$$

**(c)** A single neuron's tuning curve has $\sigma = 40°$, i.e. a full width at half maximum of $2\sqrt{2\ln 2}\,\sigma = 94°$. **The population estimate is 19 times sharper than the width of any curve contributing to it.**

**This is the result that makes population coding worth the name.** The intuition: no single neuron needs to be sharp, because what carries information is not any one rate but the *pattern of relative rates*, and a broad curve has a large derivative $f'(s)$ over a wide range of $s$ — which is exactly what $J$ rewards. A neuron with an extremely sharp tuning curve is uninformative almost everywhere, because $f'(s) = 0$ off its peak. **Broad tuning is not sloppiness; it is coverage.**

**Example 2 (why you'd care — the dynamic-range problem, and what compression buys).** Human vision operates from starlight to noon sunlight, a range of about $10^{10}$ in intensity. A retinal ganglion cell can sustain at most about 100 Hz. (a) Suppose the retina used a linear code, $r = 100\,(I/I_{\max})$ with $I_{\max} = 10^{10}I_0$. What rate does a room-lit scene at $I = 10^{4}I_0$ evoke? (b) Now a logarithmic code, $r = 10\log_{10}(I/I_0)$. Same question, plus: what rate change does a 10 percent intensity change produce, and does the answer depend on the level? (c) How many neurons must be pooled to reach a Weber fraction of 2 percent?

**(a)** $$r = 100 \times \frac{10^{4}}{10^{10}} = 10^{-4}\ \text{Hz}$$

**One spike every three hours.** A linear code spends its entire 100 Hz budget on the top decade and represents the other nine at rates indistinguishable from silence. This is not a small inefficiency — **it is a total failure over 90 percent of the operating range.**

**(b)** $$r = 10\log_{10}(10^{4}) = \mathbf{40\ \text{Hz}}$$

Every decade gets 10 Hz. For a fractional change $I \to (1+f)I$:

$$\Delta r = 10\log_{10}(1+f)$$

which contains no $I$. At $f = 0.1$: $\Delta r = 10\log_{10}(1.1) = \mathbf{0.41\ \text{Hz}}$ — **the same 0.41 Hz whether you are in starlight or sunlight.** That is Weber's law, and it is not an extra assumption; it is what a logarithmic encoder *does*.

**(c)** Here is the sting. Spike counts are approximately Poisson ([1.3](01-03-the-action-potential.md)'s threshold is deterministic, but channel noise and synaptic failure are not), so a rate estimated from one neuron over $T$ has standard deviation $\sqrt{r/T}$. At $r = 40$ Hz and $T = 200$ ms:

$$\delta r = \sqrt{\frac{40}{0.2}} = 14.1\ \text{Hz}$$

A 2 percent Weber fraction demands resolving $\Delta r = 10\log_{10}(1.02) = 0.086$ Hz. Pooling $N$ independent neurons scales $\delta r$ by $1/\sqrt N$:

$$N = \left(\frac{14.1}{0.086}\right)^{2} \approx \mathbf{2.7\times10^{4}}$$

**Roughly thirty thousand independent samples to support ordinary visual contrast discrimination.** The human optic nerve carries about a million axons, so this is comfortable — *if* the noise is independent. It is not: with a correlation of only 0.15, the previous section's floor $\sigma_1\sqrt{c}$ says pooling stalls after a factor of 2.6, and thirty thousand neurons buy you no more than about seven. **This is the whole reason noise correlations are measured, and it follows from two lines of algebra.**

## Watch out

- **You might think a receptive field is a piece of anatomy.** It is a description of a computation — the effective weighting a circuit applies to its inputs. It can be measured, it can change with contrast or attention, and it has no fixed physical boundary. Cells do not "have" receptive fields the way they have axons.
- **You might read adaptation as fatigue or as a limitation.** It is a deliberate high-pass filter that trades away absolute-level information to buy dynamic range. The cost is real, and it is the reason you cannot judge absolute light level or absolute temperature, only changes.
- **You might think sharper tuning always means better coding.** In one dimension it helps, but only up to the point where curves stop overlapping — and a neuron with a very narrow curve is silent and uninformative for almost every stimulus. What Fisher information rewards is a large $f'(s)$ where the stimulus actually is, and broad overlapping curves deliver that everywhere.
- **You might expect precision to keep improving as $1/\sqrt{N}$.** Only under independent noise. Correlated fluctuations put a hard floor at $\sigma_1\sqrt{c}$, and adding neurons past that point buys nothing at all.
- **You might think a spike carries information about *what* kind of stimulus it is.** It does not. Spikes in the optic nerve and spikes in the auditory nerve are the same event; **the modality is set by which pathway is active — "labelled lines".** Press on your closed eye and you see light, because the only thing the visual pathway can report is light, whatever actually excited it. This is Müller's law of specific nerve energies, and it is the most important negative result in sensory neuroscience: **there is no information in the spike about its own meaning.**

## One-liner

> Transduction is a conductance change dressed as a photon or a push, and the trade is always amplification against speed; coding is the art of getting ten decades of world through two decades of firing rate, which forces compression, forces adaptation, and forces the precision to live in the population rather than in any cell — up to the floor set by shared noise.

## Problems

**P1 (🟢)** A subject's just-noticeable difference for lifted weight is 2 g at a reference of 50 g. A cortical neuron encodes weight as $r = c\ln(W/W_0)$ Hz with $W_0 = 1$ g, and fires at 30 Hz for a 50 g weight. (a) Find the Weber fraction and the JND at 400 g. (b) Find $c$ and the neuron's rate at 400 g. (c) Show that one JND produces the same rate change at both references, and say why that is the point.

**P2 (🟡)** A population of neurons each yields an independent estimate of stimulus direction with standard deviation $\sigma_1 = 20°$. (a) With independent noise, what is the pooled standard deviation for $N = 100$? (b) Now suppose every pair of neurons has noise correlation $c = 0.15$. Recompute for $N = 100$ and for $N = 10^{4}$. (c) State the ceiling as $N \to \infty$, and say in one sentence what an experimenter should therefore measure before claiming a population code is precise.

**P3 (🔴, bridges to information theory)** A cortical neuron's spike train is read in 5 ms bins as a binary word. (a) At a mean rate of 20 Hz, compute the entropy per bin, the bits per second and the bits per spike. (b) Repeat at a mean rate of 1 Hz. (c) Metabolic cost is dominated by spikes. Compare a *dense* code — one neuron at 20 Hz — with a *sparse* code of equal energy cost — twenty neurons at 1 Hz — in bits per second. (d) Given that sparse wins, why does cortex not push the rate arbitrarily low?

<details>
<summary>Solutions</summary>

**P1 (a)** Weber fraction:

$$k = \frac{\Delta I}{I} = \frac{2}{50} = \mathbf{0.04}$$

At 400 g: $\Delta W = 0.04 \times 400 = \mathbf{16\ \text{g}}$. **The same physical 2 g that was detectable at 50 g is invisible at 400 g** — you need eight times more.

**(b)** Fit $c$ from the anchor point:

$$30 = c\ln\!\left(\frac{50}{1}\right) = c\,(3.9120) \;\Longrightarrow\; c = \mathbf{7.67\ \text{Hz}}$$

$$r(400) = 7.67 \times \ln 400 = 7.67 \times 5.9915 = \mathbf{45.9\ \text{Hz}}$$

Note how little the rate moved: an eightfold increase in weight bought 16 Hz.

**(c)** One JND multiplies the weight by $(1+k)$, so

$$\Delta r = c\ln\big[(1+k)W\big] - c\ln W = c\ln(1+k) = 7.67 \times \ln(1.04) = 7.67 \times 0.03922 = \mathbf{0.301\ \text{Hz}}$$

with no $W$ anywhere. Check directly at 400 g: $c\ln(416/400) = 7.67 \times 0.03922 = 0.301$ Hz ✓.

**Why this is the point:** the rate resolution the readout must achieve is *the same at every stimulus level*. A linear encoder would demand impossibly fine rate discrimination at low levels and waste resolution at high ones; the logarithmic encoder makes one fixed rate step the unit of perception across the whole range. **Weber's law and logarithmic encoding are not two facts — they are one fact stated psychophysically and physiologically.**

**P2 (a)** Independent noise:

$$\sigma_{\text{pooled}} = \frac{\sigma_1}{\sqrt N} = \frac{20°}{10} = \mathbf{2.0°}$$

**(b)** With equicorrelated noise, $\mathrm{Var} = \dfrac{\sigma_1^2}{N}\big[1 + (N-1)c\big]$.

$N = 100$:

$$\mathrm{Var} = \frac{400}{100}\big[1 + 99(0.15)\big] = 4 \times 15.85 = 63.4 \;\Longrightarrow\; \sigma = \mathbf{7.96°}$$

$N = 10^{4}$:

$$\mathrm{Var} = \frac{400}{10^{4}}\big[1 + 9999(0.15)\big] = 0.04 \times 1500.85 = 60.0 \;\Longrightarrow\; \sigma = \mathbf{7.75°}$$

**A hundredfold increase in population size improved precision by 2.7 percent.**

**(c)** The ceiling:

$$\lim_{N\to\infty}\sigma_{\text{pooled}} = \sigma_1\sqrt{c} = 20\sqrt{0.15} = \mathbf{7.75°}$$

| $N$ | independent | $c = 0.15$ |
|---|---|---|
| 100 | 2.0° | 7.96° |
| $10^{4}$ | 0.2° | 7.75° |
| $\infty$ | 0° | **7.75°** |

**What to measure:** the **noise correlations** — the trial-to-trial covariance of rates for a *fixed* stimulus, specifically the component aligned with the direction in which the stimulus changes the mean response. A shared fluctuation along that direction is mathematically indistinguishable from a stimulus change, so no decoder, however clever, can remove it. Reporting single-neuron tuning and population size without correlations overstates the achievable precision by more than an order of magnitude here.

**P3 (a)** Bin width $\Delta t = 5$ ms gives 200 bins per second and $p = \bar r \Delta t = 20 \times 0.005 = 0.1$.

$$H = -0.1\log_2 0.1 - 0.9\log_2 0.9 = 0.3322 + 0.1368 = \mathbf{0.469\ \text{bits/bin}}$$

$$0.469 \times 200 = \mathbf{93.8\ \text{bits/s}}, \qquad \frac{H}{p} = \frac{0.469}{0.1} = \mathbf{4.69\ \text{bits/spike}}$$

**(b)** $p = 1 \times 0.005 = 0.005$.

$$H = -0.005\log_2 0.005 - 0.995\log_2 0.995 = 0.03822 + 0.00720 = \mathbf{0.0454\ \text{bits/bin}}$$

$$0.0454 \times 200 = \mathbf{9.08\ \text{bits/s}}, \qquad \frac{H}{p} = \mathbf{9.08\ \text{bits/spike}}$$

(Sanity check against the limit: $\log_2(1/p) + \log_2 e = 7.644 + 1.443 = 9.09$ ✓)

**(c)** Both options emit 20 spikes per second in total, so both cost the same energy.

| | spikes/s | bits/s |
|---|---|---|
| Dense: 1 neuron at 20 Hz | 20 | 93.8 |
| **Sparse: 20 neurons at 1 Hz** | 20 | **181.7** |

$$\text{ratio} = \frac{9.08}{4.69} = \mathbf{1.94\times}$$

**The sparse population carries nearly twice the information for the same metabolic cost**, and the entire advantage is the bits-per-spike term. This is the quantitative form of the argument that cortical codes should be sparse — and it is the same accounting a communications engineer does when choosing a symbol alphabet ([information-theory 2.2](../../information-theory/lessons/02-02-source-coding-theorem.md)).

**(d)** Three reasons, and the first is the decisive one.

1. **The gain is logarithmic, the cost is linear.** Bits per spike grows as $\log_2(1/p)$, so dropping from 1 Hz to 0.1 Hz gains a factor of $9.09/12.4 \approx 1.36$ in bits per spike — while holding total information fixed requires ten times as many neurons, at full linear cost in volume, myelin, vasculature and resting metabolism (which does not scale down with firing rate).
2. **Latency.** At 1 Hz a single neuron emits 0.1 spikes in a 100 ms decision window. A code that sparse can only be read by pooling a large population *simultaneously*, which requires the convergence to exist and the readout to be fast — [2.3](02-03-synaptic-integration.md)'s integration problem, at scale.
3. **Robustness.** With very low $p$, losing a few neurons or a few spikes destroys a proportionally larger share of the message. Real cortex sits at low but not extreme sparseness, which is roughly where these three curves cross.

</details>

## Flashback

**From Lesson 2.6 (circuit motifs and computation):** A cortical pyramidal cell has membrane time constant $\tau_m = 12$ ms and rests 8 mV below threshold. Each of two converging excitatory inputs produces a 5 mV EPSP that decays as $5e^{-t/\tau_m}$ mV, and the two sum linearly. (a) What is the widest interval $\Delta t$ between the two inputs that still reaches threshold, if the cell receives excitation alone? (b) The same afferents also drive a feedforward interneuron whose IPSP arrives 2.5 ms after the EPSP and clamps the cell at rest. What is the integration window now, and by what factor has it narrowed? (c) Name the computation the circuit has been converted to, and say what sets the window in each case.

<details>
<summary>Solution</summary>

**(a)** The second EPSP rides on whatever remains of the first. Peak depolarization at the moment the second input lands:

$$\Delta V_{\text{peak}} = 5 + 5e^{-\Delta t/\tau_m} \ \ \text{mV} \;\ge\; 8\ \text{mV}$$

$$e^{-\Delta t/12} \ge 0.6 \;\Longrightarrow\; \Delta t \le 12\ln\!\left(\frac{1}{0.6}\right) = 12 \times 0.5108 = \mathbf{6.13\ \text{ms}}$$

**(b)** The IPSP truncates summation 2.5 ms after the first EPSP, so any second input arriving later than that finds the cell clamped at rest and contributes nothing to a joint depolarization:

$$\Delta t \le \mathbf{2.5\ \text{ms}}, \qquad \text{narrowing} = \frac{6.13}{2.5} = \mathbf{2.45\times}$$

**(c)** Excitation alone makes the cell an **integrator**: its window is set by $\tau_m$, a passive membrane property ([1.5](01-05-cable-theory-conduction.md)), and it will happily sum inputs spread over several milliseconds. Adding feedforward inhibition converts it into a **coincidence detector**: the window is now set by the *disynaptic delay* of the inhibitory limb — an active, circuit-level parameter — and only inputs that are genuinely near-synchronous count.

**Two things worth carrying forward.** First, **the same cell computes different things depending on the circuit it sits in**, with no change to the neuron itself. Second, **the window is now under circuit control**: modulating the interneuron's strength or delay retunes the cell's temporal precision on the fly, which a membrane time constant cannot do. This is exactly the mechanism [3.3](03-03-audition-somatosensation.md) needs for interaural time differences, where the required window is a hundred times narrower still.

</details>

## Connections

- **Backward:** transduction is [1.2](01-02-resting-membrane-potential.md)'s driving-force arithmetic with the gate pulled by a photon instead of a voltage, and the underlying electrochemistry is [biophysics 4.4](../../biophysics/lessons/04-04-membrane-potentials-nernst-goldman.md); the amplifying cascades are [2.2](02-02-neurotransmitters-receptors.md)'s metabotropic pathway used for sensing instead of modulation; the efficient-coding argument explains *why* [2.6](02-06-circuit-motifs-computation.md)'s lateral inhibition is the filter sensory systems actually build.
- **Forward:** [3.2](03-02-vision.md) is this lesson instantiated in light — a cascade with $10^{5}$ gain, centre-surround as redundancy reduction, and adaptation over ten decades; [3.3](03-03-audition-somatosensation.md) is the direct-gating branch, where microsecond transduction makes a temporal code possible; [3.4](03-04-motor-systems.md) runs the population vector *backwards*, decoding motor cortex with the identical construction — which is, historically, where population coding was first made convincing; [4.3](04-03-attention-decision-making.md) treats attention as a change in the gain and the noise correlations defined here.
- **Sideways:** mutual information as the measuring stick for any code is [information-theory 1.3](../../information-theory/lessons/01-03-mutual-information.md), with capacity in [3.1](../../information-theory/lessons/03-01-discrete-channels-capacity.md) and the lossy-compression view of adaptation in [4.3](../../information-theory/lessons/04-03-rate-distortion.md); adaptation as a high-pass filter is [signals-systems 2.5](../../signals-systems/lessons/02-05-transfer-functions-poles-zeros.md); Fisher information, Cramér–Rao and the estimator framing are the statistical side of [prob-stat-refresher 4.1](../../prob-stat-refresher/lessons/04-01-estimation-and-mle.md), and the correlation ceiling is [3.1](../../prob-stat-refresher/lessons/03-01-joint-distributions-covariance.md) applied to spike counts.
