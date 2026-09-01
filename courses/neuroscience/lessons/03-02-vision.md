# Neuroscience · Lesson 3.2: Vision

> ⏱ ~15 min · Module 3: Sensory & motor systems · Builds on: [3.1](03-01-transduction-neural-coding.md), [2.6](02-06-circuit-motifs-computation.md) · Unlocks: 3.3 (audition & somatosensation), 4.3 (attention & decision-making)

## Why this matters

This is not an anatomy tour. Vision is where the two most abstract lessons in the course cash out: [3.1](03-01-transduction-neural-coding.md)'s claim that transduction is a conductance change amplified into a rate, and [2.6](02-06-circuit-motifs-computation.md)'s claim that a wiring motif *is* a computation. In the retina you can watch both claims turn into numbers.

**The retina does not send the brain a picture.** It sends about a million axons where it has a hundred million receptors, and what survives that hundredfold bottleneck is not a downsampled image — it is a set of *differences*. Uniform light, however bright, produces almost no signal at all. That is not a defect; it is the correct engineering response to the statistics of natural images, and it is the clearest case in biology of a circuit built to throw away redundancy.

Two further things about this system are worth knowing because they are counterintuitive in a way that survives: **a rod reports a single photon**, which puts it at the physical noise floor, and **a photoreceptor responds to light by hyperpolarizing** — it is depolarized in the dark and switches its transmitter *off* when the lights come on. Both facts fall out of the mechanism once you look at it.

## The idea

**Phototransduction is a G-protein cascade run backwards from the usual intuition.** In the dark, the photoreceptor's outer segment holds a high concentration of cyclic GMP, cGMP holds cyclic-nucleotide-gated (CNG) channels open, Na$^+$ and Ca$^{2+}$ pour in, and the cell sits depolarized at roughly $-40$ mV, continuously releasing glutamate. Light isomerizes retinal inside rhodopsin; activated rhodopsin activates the G protein transducin; transducin activates phosphodiesterase; PDE destroys cGMP; the CNG channels **close**; the inward "dark current" is cut off and the cell **hyperpolarizes**, releasing less glutamate.

**So the visual system's resting state is maximal transmitter release.** This looks profligate — the outer segment is among the most metabolically expensive structures in the body — but it buys something specific: a cell that is already releasing can signal a *decrease* in light as easily as an increase. A cell resting silent could only signal increments. **The OFF pathway exists because the photoreceptor pays to sit halfway up its range.**

**The cascade is the amplifier, and it is why a rod can count photons.** Each step multiplies: one activated rhodopsin activates hundreds of transducins, each transducin unlocks one PDE, and each PDE chews through thousands of cGMP molecules while it lasts. The generic version of this argument is [molecular-cell-biology 2.2](../../molecular-cell-biology/lessons/02-02-second-messengers-amplification.md); the price, as [3.1](03-01-transduction-neural-coding.md) insisted, is **time** — phototransduction takes tens to hundreds of milliseconds, which is why vision is slow compared with hearing.

**Colour is a comparison, not a measurement.** A single photoreceptor obeys the **principle of univariance**: its output depends only on how many photons it caught, not on their wavelength. A dim light at its optimal wavelength and a bright light at a poor one produce identical responses. **One receptor type therefore cannot report colour at all, however finely it is tuned** — colour only exists as a ratio across the three cone types (peaks near 420, 530 and 560 nm), and this is why colour blindness is a loss of a *comparison*, not a loss of a band.

**Then the retina's real work: it computes differences in space.** A ganglion cell's receptive field is not a patch of retina it happens to look at — it is a *weight function*, positive over a small centre and negative over a surrounding annulus, built by horizontal cells feeding lateral inhibition back onto the photoreceptor-to-bipolar synapse. This is exactly [2.6](02-06-circuit-motifs-computation.md)'s lateral inhibition motif, drawn in two dimensions. **Its consequence is that the cell has zero gain for uniform light and large gain at edges** — and, as we will see, "zero" here is not an approximation but an algebraic identity.

## The formal version

### The centre–surround field as a difference of Gaussians

Model the receptive-field weight at retinal position $\mathbf{x}$ (measured from the field's centre, in degrees of visual angle) as

$$w(\mathbf{x}) = \frac{A_c}{2\pi\sigma_c^{2}}\,e^{-|\mathbf{x}|^{2}/2\sigma_c^{2}} \;-\; \frac{A_s}{2\pi\sigma_s^{2}}\,e^{-|\mathbf{x}|^{2}/2\sigma_s^{2}}, \qquad \sigma_s > \sigma_c ,$$

where $A_c$ and $A_s$ are the total centre and surround strengths and $\sigma_c,\sigma_s$ their spatial spreads. The cell's response to an image $I(\mathbf{x})$ is the linear filter

$$R \;=\; \int w(\mathbf{x})\,I(\mathbf{x})\,d^{2}\mathbf{x} .$$

*In words: the cell multiplies the image by its weight map and adds up — an inner product, and nothing more, in the linear regime.*

**Now take the Fourier transform**, since each Gaussian transforms to a Gaussian ([signals-systems 2.3](../../signals-systems/lessons/02-03-continuous-time-fourier-transform.md)):

$$\hat{w}(\mathbf{f}) = A_c\,e^{-2\pi^{2}\sigma_c^{2}|\mathbf{f}|^{2}} - A_s\,e^{-2\pi^{2}\sigma_s^{2}|\mathbf{f}|^{2}} .$$

$$\boxed{\;\hat{w}(\mathbf{0}) = A_c - A_s = 0 \ \text{ when the surround exactly balances the centre.}\;}$$

*In words: the DC gain of a balanced centre–surround cell is exactly zero — it is physically incapable of reporting the mean brightness of a scene.* Since $\hat{w}$ also decays at high $|\mathbf{f}|$ (the centre Gaussian's own width), the filter is **band-pass in space**, peaking at

$$f_{\text{peak}} = \frac{1}{\pi}\sqrt{\frac{\ln(\sigma_s/\sigma_c)}{\sigma_s^{2}-\sigma_c^{2}}} .$$

For a foveal-ish cell with $\sigma_c = 0.03^\circ$ and $\sigma_s = 0.15^\circ$: $f_{\text{peak}} = \frac{1}{\pi}\sqrt{1.609/0.0216} = 2.8$ cycles per degree — close to where human contrast sensitivity peaks, which is not a coincidence.

### Why this is the right filter: redundancy reduction

Natural images are extremely correlated: neighbouring points have nearly the same luminance. Suppose adjacent receptors see values with variance $\sigma^{2}$ and correlation $r$. Transmit the difference instead of the raw value:

$$\mathrm{Var}(x_i - x_j) = 2\sigma^{2}(1-r) .$$

At $r = 0.9$ this is $0.2\sigma^{2}$ — a fivefold variance reduction. For Gaussian signals, the entropy saving per sample is

$$\Delta H = \tfrac{1}{2}\log_2\!\frac{\sigma^{2}}{0.2\,\sigma^{2}} = \tfrac{1}{2}\log_2 5 = 1.16 \ \text{bits} .$$

*In words: sending differences rather than intensities costs about 1.2 fewer bits per sample, for free, purely because the world is smooth.* This is **efficient coding** ([information-theory 1.3](../../information-theory/lessons/01-03-mutual-information.md)), and it is why the bottleneck matters: roughly $10^{8}$ rods and $5\times10^{6}$ cones converge onto about $10^{6}$ optic nerve axons — **a hundredfold compression**. A system forced to compress that hard should spend its bandwidth on what is unpredictable, and lateral inhibition is the cheapest circuit that does so.

### ON and OFF: the receptor sets the sign

The photoreceptor releases *less* glutamate in light. Two bipolar cell classes read the same signal with opposite sign, exactly as [2.2](02-02-neurotransmitters-receptors.md) predicted:

| Bipolar type | Glutamate receptor | Effect of glutamate | Response to light |
|---|---|---|---|
| **OFF** | ionotropic AMPA/kainate | opens cation channel — **sign-conserving** | hyperpolarizes |
| **ON** | metabotropic mGluR6 → closes TRPM1 | closes cation channel — **sign-inverting** | depolarizes |

**One transmitter, one presynaptic signal, two opposite outputs, and the difference is entirely in the receptor.** The retina then keeps the two streams separate all the way to cortex, so increments and decrements each get a dedicated, rectified channel rather than sharing one noisy line.

The ganglion cells sort further into **parasol (magnocellular)** — large fields, transient, achromatic, high contrast sensitivity — and **midget (parvocellular)** — small fields, sustained, red–green opponent, high acuity. **The retina is not transmitting a signal; it is decomposing one.**

### Retina to cortex

About 90 percent of ganglion axons go to the **lateral geniculate nucleus** (six layers: 1–2 magnocellular, 3–6 parvocellular, koniocellular leaflets between); the rest go to superior colliculus (orienting), pretectum (pupillary reflex) and suprachiasmatic nucleus (circadian).

**At the chiasm, fibres from the nasal hemiretina cross and those from the temporal hemiretina do not.** The result is the single most-misremembered fact in visual neuroanatomy:

$$\boxed{\;\text{each visual \textbf{hemifield}, not each \textbf{eye}, is represented in the contralateral hemisphere.}\;}$$

That is why lesion site maps cleanly onto field defect: optic nerve → monocular blindness; midline chiasm → bitemporal hemianopia; optic tract or V1 → contralateral homonymous hemianopia.

**Cortical magnification.** V1 is retinotopic, but wildly non-uniform. An empirical fit for human V1 gives the linear magnification factor

$$M(E) = \frac{17.3}{E + 0.75}\ \ \text{mm of cortex per degree}, \qquad E = \text{eccentricity in degrees}.$$

$M(0^\circ) = 23$ mm/deg and $M(20^\circ) = 0.83$ mm/deg — a **28-fold** difference in linear magnification, and roughly $28^2 \approx 800$-fold in area. Integrating, the central $10^\circ$ occupies about 55 percent of the cortical distance along the horizontal meridian (Problem 2). **Acuity is a property of sampling density, not of optics**, and the cortex allocates by information demand.

### V1: selectivity and invariance, alternating

**Simple cells** have elongated ON and OFF subregions and respond best to a bar or grating at a particular orientation. Hubel and Wiesel's model: pool a *row of aligned* centre–surround LGN inputs, and orientation selectivity appears without any new mechanism — see the figure. Typical tuning is 30–40° wide at half height. (**This is a model, not a settled fact**: intracortical inhibition and recurrent amplification sharpen the tuning, and pure feedforward pooling is now known to be incomplete.)

**Complex cells** are equally orientation-selective but **position- and phase-invariant** within their field — modelled as pooling over simple cells of the same orientation at different positions.

$$\text{simple} \;\xrightarrow[\text{selectivity}]{\text{aligned pooling}}\; \text{orientation} \;\xrightarrow[\text{invariance}]{\text{position pooling}}\; \text{complex}$$

**That alternation — build selectivity for a more complex feature, then discard the detail that does not matter — is the whole architecture of the visual hierarchy**, and it is what convolutional networks borrowed wholesale (convolution builds selectivity, pooling builds invariance; see [deep-learning](../../deep-learning/syllabus.md)). Whether cortex actually works this way past V2 is a live question; that the *design principle* transferred is not in doubt.

V1 is tiled into **ocular dominance** stripes and **orientation** pinwheels, with roughly a square millimetre — a "hypercolumn" — covering all orientations for both eyes at one field location. Cells tuned to **binocular disparity** — small mismatches in the two eyes' images — give stereopsis; with an interpupillary separation near 6.5 cm, the best observers discriminate disparities of a few arc seconds, far finer than a single cone's width.

Beyond V1, the crude but useful division is **ventral ("what") versus dorsal ("where/how")**. Treat it as an organizing sketch under active revision, not a fact. **Blindsight** — V1-lesioned patients reliably guessing the location of stimuli they deny seeing, via surviving collicular and pulvinar routes — shows how much visual processing never reaches report at all.

## Picture

![Panel a shows an ON-centre retinal ganglion cell receptive field as concentric circles, an excitatory centre with total weight plus eight and an inhibitory surround with total weight minus eight, with the same weights drawn beneath as a bar profile across seven sampled positions that sums to zero. To the right, three stimuli are shown as square patches with the receptive field outlined on top, each with the cell's response as a horizontal bar: a bright spot filling the centre gives plus eighty, uniform full-field illumination gives exactly zero at any intensity, and a light-dark edge gives plus forty. Panel b shows four centre-surround inputs arranged along a tilted line, each sending an arrow into one simple cell, alongside the resulting bell-shaped orientation tuning curve peaked at the preferred orientation and about forty degrees wide at half height.](assets/03-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — the edge response, computed).** Take a one-dimensional slice through an ON-centre field, sampled at seven positions $k = -3,\dots,+3$ with weights

$$w = (-2,\,-2,\,+2,\,+4,\,+2,\,-2,\,-2), \qquad \textstyle\sum_k w_k = 0 .$$

Centre total $+8$, surround total $-8$. Bright light has intensity $I = 10$ (arbitrary units), dark is $0$. Compute the response $R = \sum_k w_k I_k$ to (a) uniform light, (b) a spot covering only the centre, (c) an edge, slid across the field.

**(a) Uniform bright.** $R = 10\sum_k w_k = 10 \times 0 = \mathbf{0}$. **And this holds for any intensity** — double the lamp and you still get zero. The zero is structural, not tuned.

**(b) Spot on the centre** (positions $-1,0,+1$ bright, rest dark):

$$R = 10\,(2 + 4 + 2) = \mathbf{80}.$$

**(c) Edge**, bright at all positions $\ge k$, dark below. Then $R = 10\sum_{j\ge k} w_j$:

| boundary at $k$ | $-2$ | $-1$ | $0$ | $+1$ | $+2$ | $+3$ |
|---|---|---|---|---|---|---|
| bright weights summed | $2$ | $4$ | $2$ | $-2$ | $-4$ | $-2$ |
| **response** | $+20$ | $\mathbf{+40}$ | $+20$ | $-20$ | $\mathbf{-40}$ | $-20$ |

**The response is biphasic as the edge sweeps through: strongly positive just on the light side, strongly negative just on the dark side, zero far from the edge on either side.** That is a **Mach band** — the illusory bright and dark stripes you see flanking a luminance step, discovered by Mach in the 1860s and explained by exactly this arithmetic in *Limulus* eyes a century later. **The illusion is not an error; it is the filter's impulse response made visible.**

Compare the three: **spot 80, edge 40, uniform 0.** The isolated spot is the optimal stimulus, but natural images contain almost no isolated spots and are full of edges — so in practice this cell is an edge detector that spends nothing on flat regions.

**Example 2 (why you'd care — a rod at the physical limit).** Baylor and colleagues recorded a rod's response to a single absorbed photon: roughly $1$ pA of current suppressed, lasting on the order of $1$ s. (a) How many elementary charges does that represent? (b) Compare with the energy of the photon. (c) Why does the rod not drown in its own false alarms?

**(a)** Charge suppressed:

$$Q = I\,\Delta t = (1\times10^{-12}\ \text{A})(1\ \text{s}) = 1\times10^{-12}\ \text{C}$$

$$N = \frac{Q}{e} = \frac{1\times10^{-12}}{1.602\times10^{-19}} = \mathbf{6.2\times10^{6}\ \text{elementary charges}} .$$

**(b)** A 500 nm photon carries

$$E = \frac{hc}{\lambda} = \frac{(6.626\times10^{-34})(3.00\times10^{8})}{500\times10^{-9}} = 3.98\times10^{-19}\ \text{J} = 2.5\ \text{eV} .$$

**One photon, one isomerization, six million charges of electrical consequence.** Cross-check against the cascade: one activated rhodopsin activates of order $10^{2}$–$10^{3}$ transducins, each unlocking one PDE that hydrolyses cGMP at $10^{3}$–$10^{4}$ s$^{-1}$, giving $10^{5}$–$10^{6}$ cGMP molecules destroyed per photon. Two independent accountings, same order of magnitude. **This is [3.1](03-01-transduction-neural-coding.md)'s trade at its most extreme: enormous gain, bought with a response that takes hundreds of milliseconds.**

**(c) The false-alarm problem is real and the answer is chemistry.** A rod holds about $10^{8}$ rhodopsin molecules, and spontaneous thermal isomerization occurs at roughly $0.006$ events per rod per second at body temperature. Per molecule:

$$k_{\text{thermal}} = \frac{0.006\ \text{s}^{-1}}{10^{8}} = 6\times10^{-11}\ \text{s}^{-1} \;\Longrightarrow\; \tau = \frac{1}{k} = 1.7\times10^{10}\ \text{s} \approx \mathbf{530\ \text{years}} .$$

**Rhodopsin has a thermal half-life of centuries while being triggered by a single quantum of visible light** — a discrimination between thermal and photon activation of extraordinary quality, and precisely what a single-photon detector needs. Barlow called the residual events "dark light," and they set the absolute threshold of human vision.

## Watch out

- **You might think each eye projects to the opposite hemisphere.** It does not. **Each visual *hemifield* does**, because only nasal fibres cross at the chiasm. A right optic *tract* lesion blinds the left half of the field *in both eyes*; a right optic *nerve* lesion blinds one whole eye. Getting this backwards makes every lesion localization wrong.
- **You might expect a photoreceptor to depolarize to light.** Every other receptor in the body does. This one is depolarized in the dark, releases glutamate continuously, and **hyperpolarizes** when light closes its CNG channels. The whole ON/OFF architecture depends on it.
- **You might read "detects edges" as an approximation.** For a balanced field it is an identity: $\hat{w}(\mathbf{0}) = A_c - A_s = 0$, so the cell's response to uniform light is exactly zero at any intensity. Real cells are only approximately balanced and keep a maintained discharge, but the design intent is exact.
- **You might think a single cone reports a colour.** Univariance forbids it: a cone's output confounds wavelength with intensity. **Colour is a ratio across cone types**, which is why you need at least two.
- **You might take the Hubel–Wiesel feedforward model as established.** It is the right first model and it is demonstrably incomplete — intracortical inhibition and recurrent excitation ([2.6](02-06-circuit-motifs-computation.md)) do much of the sharpening, and orientation tuning survives manipulations pure feedforward pooling says it should not.
- **You might treat "what" and "where" as two clean streams.** They are heavily interconnected, and the dorsal stream is now better described as "how" — vision for action — than as a location channel.

## One-liner

> The retina spends a hundredfold bottleneck on differences, not intensities: a balanced centre–surround field has exactly zero gain for uniform light, so the optic nerve carries edges and ignores the flat, and V1 then alternates selectivity and invariance — aligned pooling for orientation, position pooling for tolerance — which is the architecture convolutional networks borrowed.

## Problems

**P1 (🟢)** An ON-centre ganglion cell has a circular centre of radius 1 unit with weight density $+4$ per unit area, and a surround annulus from radius 1 to radius 3 with weight density $-0.4$ per unit area. (a) Compute the total centre and surround weights. (b) Compute the response to uniform illumination of intensity 20. (c) Compute the response to a centred spot of radius 1 at intensity 20, and take the ratio to (b). (d) What surround density would make the cell exactly blind to uniform light?

**P2 (🟡, bridges to cortical map design)** Human V1's linear cortical magnification is well fit by $M(E) = 17.3/(E+0.75)$ mm per degree, with $E$ the eccentricity in degrees. (a) Evaluate $M$ at $E = 0^\circ$ and $E = 10^\circ$ and give the ratio. (b) Integrate $M$ to obtain the cortical distance $d(E)$ from the foveal representation, then evaluate $d(10^\circ)$ and $d(90^\circ)$. What fraction of the cortical extent serves the central $10^\circ$? (c) Compare that with the fraction of the visual field's *radius* the central $10^\circ$ occupies, and say what the mismatch buys and what it costs.

**P3 (🔴, bridges to information theory)** (a) Peak foveal cone density is about $2\times10^{5}$ mm$^{-2}$ in a triangular lattice, for which density $= 2/(\sqrt{3}s^{2})$ with $s$ the centre-to-centre spacing. Find $s$, convert to degrees using 1° ≈ 288 µm on the retina, and apply the Nyquist criterion to get the highest resolvable spatial frequency in cycles per degree. Compare with 20/20 acuity (resolving 1 arcmin of detail). (b) Adjacent photoreceptors in natural scenes see luminances with variance $\sigma^{2}$ and correlation $r = 0.95$. How many bits per sample does transmitting the *difference* save, treating the signals as Gaussian? (c) Given the roughly hundredfold convergence from receptors to optic nerve axons, argue in two or three sentences why a decorrelating spatial filter is the right thing to put in front of that bottleneck — and name the cost it incurs.

<details>
<summary>Solutions</summary>

**P1 (a)** Centre area $= \pi(1)^{2} = \pi$, so

$$W_c = 4\pi = \mathbf{12.57}.$$

Surround area $= \pi(3^{2}-1^{2}) = 8\pi$, so

$$W_s = -0.4 \times 8\pi = -3.2\pi = \mathbf{-10.05}.$$

Net weight $= 4\pi - 3.2\pi = 0.8\pi = 2.51$. **The surround falls 20 percent short of balancing the centre.**

**(b)** Uniform illumination multiplies the *net* weight:

$$R_{\text{uniform}} = 20 \times 0.8\pi = 16\pi = \mathbf{50.3}.$$

**(c)** A spot of radius 1 covers the centre only:

$$R_{\text{spot}} = 20 \times 4\pi = 80\pi = \mathbf{251.3}, \qquad \frac{R_{\text{spot}}}{R_{\text{uniform}}} = \frac{4\pi}{0.8\pi} = \mathbf{5.0}.$$

**(d)** Balance requires $W_s = -W_c = -4\pi$ over an area of $8\pi$:

$$\text{density} = \frac{-4\pi}{8\pi} = \mathbf{-0.5}\ \text{per unit area}.$$

**The point of the comparison:** at $-0.5$ the ratio in (c) would be infinite — the cell would be blind to flat light and respond only to structure. At $-0.4$ it is 5. **A 20 percent imbalance costs an order of magnitude of contrast selectivity**, which is why real cells are tightly balanced, and why "approximately zero" and "exactly zero" are worth distinguishing.

**P2 (a)**

$$M(0) = \frac{17.3}{0.75} = \mathbf{23.1\ \text{mm/deg}}, \qquad M(10) = \frac{17.3}{10.75} = \mathbf{1.61\ \text{mm/deg}}.$$

$$\text{ratio} = 23.1/1.61 = \mathbf{14.3}.$$

**(b)**

$$d(E) = \int_{0}^{E}\frac{17.3}{e+0.75}\,de = 17.3\,\ln\!\frac{E+0.75}{0.75}.$$

$$d(10^\circ) = 17.3\ln\frac{10.75}{0.75} = 17.3\ln(14.33) = 17.3(2.663) = \mathbf{46.1\ \text{mm}},$$

$$d(90^\circ) = 17.3\ln\frac{90.75}{0.75} = 17.3\ln(121) = 17.3(4.796) = \mathbf{83.0\ \text{mm}}.$$

$$\text{fraction} = \frac{46.1}{83.0} = \mathbf{0.555}$$

**About 55 percent of the cortical extent serves the central $10^\circ$.**

**(c)** The central $10^\circ$ is $10/90 = \mathbf{11}$ **percent of the field's radius but 55 percent of the cortical distance** — a fivefold linear over-representation. (Carrying the same $M(E)$ through the areal integral $\int M^{2}\,2\pi E\,dE$ gives about 46 percent of V1's *surface* devoted to 1.2 percent of the field's *area*.)

**What it buys:** acuity is limited by sampling density, so the fovea's receptor density is useless unless cortex supplies matching processing hardware. Fine detail is expensive, so it is bought only where it is being looked at.

**What it costs:** peripheral vision is genuinely coarse, and the cost is paid by **making the eye move**. Roughly three saccades a second exist to drag the high-resolution patch onto whatever matters — a hardware saving converted into a motor problem. It also means "what the visual field looks like" is a reconstruction across fixations, not a rendered image, which is a large part of why change blindness works ([4.3](04-03-attention-decision-making.md)).

**P3 (a)** From $n = 2/(\sqrt{3}s^{2})$ with $n = 2\times10^{5}$ mm$^{-2}$:

$$s^{2} = \frac{2}{\sqrt{3}\,n} = \frac{2}{1.732 \times 2\times10^{5}} = 5.77\times10^{-6}\ \text{mm}^{2} \;\Longrightarrow\; s = 2.40\times10^{-3}\ \text{mm} = \mathbf{2.4\ \mu\text{m}}.$$

In degrees:

$$s = \frac{2.40\ \mu\text{m}}{288\ \mu\text{m/deg}} = 8.33\times10^{-3}\ \text{deg} = 0.50\ \text{arcmin}.$$

Nyquist requires at least two samples per cycle, so the finest resolvable grating has period $2s = 0.0167^\circ$:

$$f_{\max} = \frac{1}{2s} = \mathbf{60\ \text{cycles/deg}} .$$

20/20 acuity resolves 1 arcmin of detail, i.e. a grating of period 2 arcmin $=1/30$ deg, so **30 cycles/deg**. **The optics and the sampling lattice are matched: the cone mosaic is built to just barely out-resolve what normal vision delivers, and measured foveal acuity of 50–60 cycles/deg sits right at the lattice limit.** Building denser cones would gain nothing — the eye's optics and the aliasing limit ([signals-systems 3.1](../../signals-systems/lessons/03-01-sampling-nyquist-shannon.md)) would waste them.

**(b)** With $r = 0.95$:

$$\mathrm{Var}(x_i - x_j) = 2\sigma^{2}(1-r) = 2\sigma^{2}(0.05) = 0.1\,\sigma^{2}.$$

For Gaussians, differential entropy is $\tfrac12\log_2(2\pi e\,\text{Var})$, so the saving is

$$\Delta H = \tfrac{1}{2}\log_2\!\frac{\sigma^{2}}{0.1\sigma^{2}} = \tfrac{1}{2}\log_2 10 = \tfrac{1}{2}(3.322) = \mathbf{1.66\ \text{bits per sample}} .$$

(At $r=0.9$ it was 1.16 bits; **the saving grows as $-\tfrac12\log_2(1-r)$, so it blows up exactly where the world is smoothest.**)

**(c)** About $10^{8}$ receptors feed about $10^{6}$ axons, so nearly all of the raw signal must be discarded. **The right thing to discard is whatever is predictable from its neighbours**, since predictable content carries no information the receiver could not have reconstructed — and in natural images, with neighbour correlations near 0.9, that is most of it. A centre–surround filter is the cheapest circuit that subtracts a local prediction and forwards the residual, so the surviving million channels carry edges, motion and texture rather than a hundred million redundant copies of the local mean.

**The cost is that absolute luminance is thrown away.** A balanced field cannot report how bright the scene is at all; brightness must be re-inferred downstream from context, which is exactly why simultaneous-contrast illusions work — two patches of identical luminance look different because the retina never sent the luminance, only the differences. **Every efficient code makes something unrecoverable, and here it is the DC term.**

</details>

## Flashback

**From Lesson 3.1 (transduction and neural coding):** Four direction-tuned neurons have preferred directions $0^\circ, 90^\circ, 180^\circ, 270^\circ$ and a common baseline rate of 40 spikes/s. On one trial their rates are measured as 66, 55, 14 and 25 spikes/s respectively. (a) Compute the population vector and the decoded direction. (b) Give its magnitude, and say in one sentence why the population estimate is far sharper than any one neuron's tuning. (c) A shared modulatory gain now multiplies every neuron's *deviation from baseline* by 1.2. What happens to the decoded direction and to the vector's length, and what does that tell you about which noise correlations hurt this code?

<details>
<summary>Solution</summary>

**(a)** Subtract the baseline to get each cell's signed contribution, then weight its unit vector:

| preferred direction | rate | $r_i - 40$ | unit vector $\hat{u}_i$ | contribution |
|---|---|---|---|---|
| $0^\circ$ | 66 | $+26$ | $(1,0)$ | $(26,\,0)$ |
| $90^\circ$ | 55 | $+15$ | $(0,1)$ | $(0,\,15)$ |
| $180^\circ$ | 14 | $-26$ | $(-1,0)$ | $(26,\,0)$ |
| $270^\circ$ | 25 | $-15$ | $(0,-1)$ | $(0,\,15)$ |

$$\mathbf{v} = \sum_i (r_i - 40)\,\hat{u}_i = (52,\ 30).$$

$$\theta = \arctan\!\frac{30}{52} = \arctan(0.577) = \mathbf{30^\circ}.$$

Note that the two "silenced" neurons ($180^\circ$ and $270^\circ$, firing *below* baseline) contribute just as much as the two active ones — **suppression is signal**, which is why the baseline has to be subtracted before the vectors are summed.

**(b)**

$$|\mathbf{v}| = \sqrt{52^{2} + 30^{2}} = \sqrt{2704 + 900} = \sqrt{3604} = \mathbf{60.0}.$$

**Why it beats any single cell:** each neuron's cosine tuning is enormously broad — half-width around $90^\circ$ — so no single rate pins the direction down. But the *pattern* across cells does: the estimate uses the ratio of activities, and averaging independent noise across $N$ cells shrinks the angular error roughly as $1/\sqrt{N}$. **A population of broadly-tuned neurons is precise even though none of its members is.**

**(c)** Multiplying every deviation by 1.2 scales the whole vector:

$$\mathbf{v}' = 1.2(52,\,30) = (62.4,\,36), \qquad \theta' = \arctan\!\frac{36}{62.4} = \mathbf{30^\circ}\ \text{(unchanged)}, \qquad |\mathbf{v}'| = \mathbf{72.0}.$$

**A shared multiplicative gain is invisible to this readout.** The decoded direction depends only on the *ratios* between contributions, and a common factor cancels; only the magnitude moves — which is why $|\mathbf{v}|$ can be read as something like confidence rather than direction.

**The general lesson, and the reason [3.1](03-01-transduction-neural-coding.md) insisted on it:** what limits a population code is not whether noise is correlated but **whether the correlation lies along the direction the code varies in**. Shared gain fluctuations are orthogonal to the decoded angle here and cost nothing. Correlated fluctuations that push activity *around* the tuning ring would be indistinguishable from a genuine change of direction and could not be averaged away by any number of neurons.

</details>

## Connections

- **Backward:** the centre–surround field is [2.6](02-06-circuit-motifs-computation.md)'s lateral inhibition motif in two dimensions, and the ON/OFF split is [2.2](02-02-neurotransmitters-receptors.md)'s "the receptor sets the sign" with one transmitter and two answers. The cascade gain and the adaptation over ten log units of light are [3.1](03-01-transduction-neural-coding.md)'s amplification-costs-time and adaptation-buys-range, at their most extreme.
- **Forward:** [3.3](03-03-audition-somatosensation.md) runs the same argument with a map of a *stimulus property* rather than of space, and with mechanotransduction fast enough to skip the cascade entirely. [4.3](04-03-attention-decision-making.md) uses V1 and its normalization as the substrate for attention, and change blindness as evidence for how little the periphery actually represents.
- **Sideways:** the receptive field is a linear filter, so it is a convolution kernel and has a transfer function ([signals-systems 1.4](../../signals-systems/lessons/01-04-convolution-continuous-time.md), [2.3](../../signals-systems/lessons/02-03-continuous-time-fourier-transform.md)); the cone lattice's acuity limit is Nyquist sampling ([signals-systems 3.1](../../signals-systems/lessons/03-01-sampling-nyquist-shannon.md)); redundancy reduction is efficient coding ([information-theory 1.3](../../information-theory/lessons/01-03-mutual-information.md)); and the selectivity-then-invariance stack is the convolution-then-pooling architecture of [deep-learning](../../deep-learning/syllabus.md). The phototransduction cascade is the amplification argument of [molecular-cell-biology 2.2](../../molecular-cell-biology/lessons/02-02-second-messengers-amplification.md) with an unusually well-measured gain.
