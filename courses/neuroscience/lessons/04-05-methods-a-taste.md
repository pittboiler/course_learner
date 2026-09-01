# Neuroscience · Lesson 4.5: Methods, a taste

> ⏱ ~15 min · Module 4: Learning, memory & cognition · Builds on: [4.4](04-04-disease-a-taste.md), [1.3](01-03-the-action-potential.md) · Unlocks: nothing — this is the last lesson of the course

## Why this matters

Every claim you have met in this course arrived attached to an instrument. The gating variables of [1.4](01-04-hodgkin-huxley-model.md) exist because a feedback amplifier could hold a squid axon at a commanded voltage. The receptive fields of [3.2](03-02-vision.md) exist because a tungsten wire could isolate one cell in an anaesthetised cat. The hippocampal story of [4.2](04-02-memory-systems.md) is built on lesions that nobody designed. **Neuroscience is unusually instrument-shaped**, because the object of study is opaque, fast, and packed at a density no single technique can follow.

So this is not a catalogue. The catalogue is a search away; what is not a search away is the skill this lesson is for: **reading a result backwards to the box on the map that produced it, and asking what that box could not have seen.** Most overclaiming in this field is not fraud, it is a method being asked a question one axis outside its range.

There is one organizing fact, and everything below is a consequence of it. **No method is good at everything, and the trades are physical, not sloppy engineering** — you will derive one of them in a line of algebra. Fine in space, fast in time, brain-wide in coverage, non-invasive: pick two, sometimes three.

## The idea

Sort methods by **what they do**, not by name. There are four jobs, and they license different claims.

**1 · Measuring — buys correlation, and nothing more.**

- The **patch clamp** is the direct descendant of [1.3](01-03-the-action-potential.md)'s voltage clamp: a fire-polished glass pipette forms a gigaohm seal against the membrane, so essentially all current through the patch flows through the amplifier. Two modes: **single-channel**, which resolves one protein opening and shutting in real time, and **whole-cell**, which ruptures the patch and clamps the entire neuron. Resolution is unmatched — microseconds, sub-millivolt, one molecule — and the coverage is **one cell**. Essentially every quantitative number in Module 1 came from here, and the same instrument reading single molecules one at a time is the subject of [biophysics 4.6](../../biophysics/lessons/04-06-single-molecule-inference.md).
- **Extracellular recording** puts a wire *near* cells and reads the small voltage transients their spikes produce in the surrounding medium. It is easy, chronic, and awake-behaving — and it has a problem: an electrode hears every neuron inside a radius of roughly 100 µm, and you must **infer** which spike belonged to which cell from waveform shape. That is **spike sorting**, and it is a clustering problem with real error rates, not a measurement. High-density silicon probes (hundreds of sites on one shank) scale this to $10^2$–$10^3$ simultaneous units by giving the clustering more evidence per spike.
- **Calcium imaging** is the trade that bought coverage. A genetically encoded indicator brightens when intracellular $\text{Ca}^{2+}$ rises, and $\text{Ca}^{2+}$ rises after a spike, so a two-photon microscope can watch $10^3$–$10^5$ neurons at once — **and can restrict the indicator to a genetically defined cell type**, which no electrode can do. The cost is time. **The indicator is far slower than the spike it reports**, so what you recover is not a spike train but an estimate of one. Voltage indicators are the attempted fix — they follow the membrane potential directly and are getting good — but they trade away photons, and photons are the binding constraint.
- **EEG and MEG** read the summed synaptic currents of large, geometrically aligned populations from outside the head. Millisecond timing, no surgery, human subjects. The cost is the **inverse problem**: infinitely many internal source configurations produce the same external field, so localisation requires a head model and a regularising assumption. *The timing is measured; the location is modelled.*
- **fMRI** gives whole-brain coverage in a living human, and this is the point to be blunt about. **The BOLD signal is haemodynamic, not neural.** It tracks local blood oxygenation, which responds to metabolic demand seconds after the neural event, and it correlates best with **local field potential and synaptic input** — the processing arriving at a region — rather than with the spiking output leaving it. A voxel is not "active"; a voxel's blood supply changed. With tens of thousands of voxels tested at once, the multiple-comparisons problem is severe, which is why cluster-wise correction and preregistration became mandatory rather than optional ([prob-stat-refresher 4.3](../../prob-stat-refresher/lessons/04-03-hypothesis-testing.md)).

**2 · Perturbing — the only category that buys causation.** Measurement tells you a region's activity covaries with a behaviour. It cannot distinguish a cause from a consequence from a bystander.

- **Lesions** are the oldest tool and the one [4.4](04-04-disease-a-taste.md) leaned on. They are permanent, coarse, and **confounded by compensation**: a lesioned brain reorganises for weeks, so the deficit you measure is the deficit of a *rearranged* system, not the missing contribution of the removed part.
- **Pharmacology** is exquisitely specific in molecule and hopeless in space and time — a drug reaches every cell expressing the target, for hours.
- **Optogenetics** is the method that changed the field, and it is worth being precise about *what* it bought. A microbial opsin (channelrhodopsin to excite, halorhodopsin or archaerhodopsin to silence) is expressed under a cell-type-specific promoter, and light delivered through a fibre turns those neurons — and only those neurons — on or off within a millisecond. **Cell-type specificity plus millisecond control, in a behaving animal.** That combination did not previously exist.
- **Chemogenetics** (DREADDs) trades speed for convenience: a designer receptor activated by an otherwise-inert drug, onset in minutes, duration in hours, no implanted fibre.

**3 · Mapping.** Anatomical and viral tracing (including trans-synaptic viruses that jump exactly one synapse) tell you who connects to whom. **Connectomics** is that pushed to completeness by serial electron microscopy: *C. elegans* (302 neurons) since the 1980s, the adult fly brain (about $1.4\times10^5$ neurons and $5\times10^7$ synapses) now, and a cubic millimetre of mouse cortex — roughly $2\times10^5$ cells and half a billion synapses — at a data cost near a petabyte. **A connectome constrains dynamics without determining them.** Synaptic weights, short-term dynamics ([2.1](02-01-chemical-synaptic-transmission.md)), and the neuromodulatory state that rewrites the effective circuit ([2.2](02-02-neurotransmitters-receptors.md)) are not in the wiring diagram. Meanwhile **single-cell transcriptomics** is answering the question anatomy could never settle — how many cell types there are — by clustering neurons on their expressed genes, and finding a few hundred defensible types per cortical area.

**4 · Modelling is a method, not an afterthought.** [1.4](01-04-hodgkin-huxley-model.md) is the demonstration: Hodgkin and Huxley fitted equations to voltage-clamp records, then *numerically integrated them* to predict a propagating action potential with the right shape and the right conduction velocity — a quantity the fits never saw. **A model earns its keep when it makes a measurement worth doing**, by naming a number that would falsify it.

## The formal version

Four axes. Define them once and the whole map follows.

| Axis | Definition | Range across methods |
|---|---|---|
| **Spatial resolution** $\Delta x$ | smallest distinguishable element | $10^{-9}$ m (a channel) to $10^{-1}$ m (a hemisphere) |
| **Temporal resolution** $\Delta t$ | shortest resolvable interval | $10^{-5}$ s to permanent |
| **Coverage** $N$ | units observed simultaneously | 1 to $10^{5}$ (or "all", if you accept averaging) |
| **Invasiveness** | surgery, implant, genetic access | none to terminal |

**The trade is physical, not a failure of engineering.** Here is the cleanest case. In two-photon imaging the laser power is capped by tissue heating and photodamage, so the total detected photon rate $\Phi$ (photons per second, over the whole field) is fixed. Share it among $N$ cells at frame rate $f$: photons collected per cell per frame are

$$n = \frac{\Phi}{fN}.$$

Photon arrivals are Poisson, so the noise on that count is $\sqrt{n}$. A spike changes the fluorescence by a fraction $\epsilon = \Delta F/F$, so the signal is $\epsilon n$ and

$$\boxed{\;\mathrm{SNR} = \frac{\epsilon n}{\sqrt{n}} = \epsilon\sqrt{n} = \epsilon\sqrt{\frac{\Phi}{fN}}\;}$$

*In words: signal-to-noise falls as the square root of frame rate times cell count — so quadrupling your temporal resolution, or quadrupling your coverage, each halve your ability to see a spike at all.* You cannot buy your way out with effort; you are counting photons, and there are only so many.

**The inference logic — what each design licenses.** This table is the practical payload of the lesson.

| Design | Observation | Licenses | Does **not** license |
|---|---|---|---|
| Measure while behaving | activity in X covaries with behaviour B | X carries information about B | X causes B |
| Silence X | B stops | **necessity** of X (as wired now) | X is where B is computed |
| Silence X | B continues | — | X is irrelevant (redundancy, compensation) |
| Activate X | B appears | **sufficiency of this drive pattern** | the natural pattern does this |
| Activate X | nothing | — | X is uninvolved (wrong pattern, wrong timing) |

**Read the bottom-right column twice.** The two "—" rows are the ones people quietly convert into claims. A null perturbation result is almost uninterpretable on its own, because redundancy is everywhere in the brain and compensation is fast.

**And the limit of optogenetics specifically.** Driving a labelled population with a light pulse makes them fire *together*, which is not a pattern the circuit ever produces. Showing that synchronous drive of neurons in X is sufficient for behaviour B is a real result, and it is **weaker than it sounds**: it shows the downstream machinery can be triggered, not that X normally triggers it that way. Sufficiency established by an unnatural input is sufficiency of the input, not of the code.

## Picture

![A method map with logarithmic axes: spatial resolution from one nanometre to ten centimetres along the bottom, and temporal resolution from ten microseconds to one day up the side. Each technique is a rectangle covering the range it spans rather than a point. Patch clamp occupies the fine and fast bottom-left corner, extracellular arrays sit beside it, calcium and voltage imaging in the middle, EEG and MEG are fast but coarse at the lower right, fMRI is slow and coarse above them, optogenetics is a fast coarse perturbation, and lesions sit at the permanent coarse top right. Solid outlines mark invasive methods and dashed outlines non-invasive ones; blue marks measurement and coral marks perturbation.](assets/04-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — can a calcium indicator see a doublet?).** GCaMP6f responds to a single action potential with about $\epsilon = \Delta F/F \approx 0.19$ and decays with a half-time near 140 ms; imaging runs at 30 Hz. **Two spikes arrive 20 ms apart.** Can you distinguish that from one spike of double amplitude?

First convert the half-time to a time constant, treating the indicator as a linear filter:

$$\tau = \frac{t_{1/2}}{\ln 2} = \frac{140\ \text{ms}}{0.693} = 202\ \text{ms} \approx 200\ \text{ms}.$$

Each spike contributes $A\,e^{-t/\tau}$. Measure at the moment of the second spike, $t = 20$ ms after the first:

$$F_{\text{doublet}} = A e^{-20/200} + A = A(0.9048 + 1) = 1.905\,A,$$

against $F_{\text{coincident}} = 2A$ if the two spikes had landed together. The difference is

$$\frac{2 - 1.905}{2} = 0.048 = 4.8\ \text{percent of the peak}.$$

**Now compare that to the noise.** From the SNR formula, a typical single-cell single-trial measurement has $\mathrm{SNR} \approx 4$ for one spike, i.e. a noise level around 25 percent of a single-spike amplitude — five times larger than the 4.8 percent signal you are trying to detect. **Not resolvable, and not close.**

Two things to notice. First, **the frame rate was never the limit**: 30 Hz gives 33 ms per frame, comparable to the 20 ms interval, but even an infinitely fast camera would face the same 4.8 percent. **The indicator's 200 ms decay is the bottleneck, and no amount of imaging speed fixes a slow molecule.** Second, this is exactly why spike inference from fluorescence is *inference*: a deconvolution algorithm can recover approximate spike counts over tens of milliseconds, with a real false-negative rate, and cannot recover the millisecond timing that [4.1](04-01-plasticity-ltp-ltd.md)'s STDP window or [3.1](03-01-transduction-neural-coding.md)'s temporal codes actually run on.

**Example 2 (why you'd care — take apart a real-shaped claim).** A paper reports: *"Neurons in region X drive behaviour B. Optogenetic activation of X-neurons elicited B in mice; fMRI shows X activates during B in humans; we conclude X generates B."* Evaluate it with the map.

**(a) The fMRI leg.** Take a 2 mm isotropic voxel and a cortical neuron density of about $5\times10^4$ per mm³:

$$V = (2\ \text{mm})^3 = 8\ \text{mm}^3, \qquad N_{\text{neurons}} = 8 \times 5\times10^4 = 4\times10^{5}.$$

**Four hundred thousand neurons per voxel**, and roughly $10^9$ synapses among them. Whatever the excitatory and inhibitory populations of [2.6](02-06-circuit-motifs-computation.md) are doing in there, the voxel reports one number — and that number is blood oxygenation, arriving 4–6 s late, weighted toward synaptic input rather than spiking output. **This leg establishes correlation at a spatial scale $10^5$ times coarser than the computation and a temporal scale $10^3$ times slower.** It cannot distinguish X computing B from X receiving news that B happened.

**(b) The optogenetic leg.** A 200 µm fibre delivers enough irradiance out to roughly 0.5 mm. Neurons illuminated:

$$V = \tfrac{4}{3}\pi (0.5\ \text{mm})^3 = 0.524\ \text{mm}^3, \qquad N = 0.524 \times 5\times10^4 \approx 2.6\times10^{4}.$$

**Twenty-six thousand neurons of the labelled type, all firing in lockstep.** That is a genuine causal result — and by the table above it licenses exactly one sentence: *synchronous activation of this cell type in this region is sufficient to elicit B.* It does not show that X is necessary (no silencing was done), and it does not show the natural code in X resembles the drive that was applied.

**(c) What the paper is entitled to say.** "X-neuron activity is sufficient to trigger B, and X activity covaries with B in humans." The word doing the illegitimate work is **generates** — it smuggles in necessity (untested) and a claim about the natural code (untestable by this design). **The fix is one experiment**: silence X during B. If B survives, the sufficiency result was about a downstream trigger, not about where B is computed.

**This is the habit the lesson is for.** Not scepticism as a pose — the individual results are fine. The move is: name the box, read off what it could not have seen, and check whether the conclusion lives inside it.

## Watch out

- **You might think fMRI measures neural activity.** It measures blood oxygenation, several seconds late, and correlates best with **synaptic input and local processing** rather than spike output. Inhibitory input is metabolically expensive too, so a "more active" voxel can contain a region being *suppressed*.
- **You might think a null perturbation result shows a region is uninvolved.** Redundancy and compensation make null results nearly uninterpretable — this is precisely the trap [4.4](04-04-disease-a-taste.md) flagged for lesion evidence.
- **You might read a calcium trace as a spike train.** It is a slow, non-linear, saturating function of spike rate, and the spikes are recovered by a fitted model with a real false-negative rate. Report it as inferred rate, never as timing.
- **You might think optogenetic sufficiency settles the mechanism.** Synchronous drive of a labelled population is not a pattern the circuit generates; sufficiency shown that way is weaker than it appears.
- **You might think finer is always better.** A patch clamp cannot see a population code, and the population code of [3.1](03-01-transduction-neural-coding.md) is the level at which many quantities are actually represented. **Resolution and coverage are different virtues, and the question decides which one you need.**
- **You might think a connectome would settle how a circuit computes.** Weights, short-term plasticity, and neuromodulatory state are not in the wiring, and they are what make the same anatomy compute different things in different states.

## One-liner

> Every result in this course was shaped by an instrument that traded space against time against coverage — so the first question to ask of any claim is not "is it true?" but "could the method that produced it have seen it be false?"

## Problems

**P1 (🟢)** A whole-brain fMRI analysis uses 3 mm isotropic voxels; take the brain's volume as 1200 cm³. (a) How many voxels? (b) Testing every voxel independently at $p < 0.001$ uncorrected, how many false positives should you expect under the null? (c) What Bonferroni threshold would hold the family-wise error rate at 0.05? (d) In one sentence, what does this say about a single-voxel result reported at $p < 0.001$?

**P2 (🟡, bridges to machine learning)** An extracellular electrode picks up spikes from neurons within about 100 µm; take cortical density as $5\times10^4$ neurons per mm³. (a) How many neurons are inside that listening sphere? (b) A typical experiment reports 5–15 well-isolated units from that electrode. What happened to the rest, and why is spike sorting therefore a clustering problem rather than a measurement? (c) A silicon probe with 100 recording sites spanning the same tissue reports far more units without listening to more neurons. What extra information does it give the clustering algorithm?

**P3 (🔴)** You want to test whether hippocampal place cells are *used* by an animal navigating, not merely correlated with position. (a) Using the SNR formula $\mathrm{SNR}=\epsilon\sqrt{\Phi/(fN)}$, explain why you cannot simply image $10^5$ cells at 1 kHz and settle it by measurement. (b) Choose a perturbation and state precisely what a positive and a negative result would each license, using the inference table. (c) Name the one methodological feature that makes your design better than a lesion of the hippocampus, and connect it to why [4.2](04-02-memory-systems.md)'s lesion evidence, though decisive about *systems*, was silent about *mechanism*.

<details>
<summary>Solutions</summary>

**P1 (a)** Voxel volume $= 3^3 = 27$ mm³; brain volume $=1200$ cm³ $= 1.2\times10^{6}$ mm³.

$$N_{\text{vox}} = \frac{1.2\times10^{6}}{27} = 4.44\times10^{4} \approx 44{,}000\ \text{voxels}.$$

**(b)** Under the null, each test is positive with probability $10^{-3}$:

$$E[\text{false positives}] = 4.44\times10^{4} \times 10^{-3} = \mathbf{44}.$$

**Forty-four "significant" voxels in a brain where nothing is happening**, and because the BOLD signal is spatially smooth they will not be scattered — they will form plausible-looking clusters.

**(c)** $$\alpha_{\text{Bonf}} = \frac{0.05}{4.44\times10^{4}} = 1.1\times10^{-6}.$$

Three orders of magnitude stricter than the uncorrected threshold.

**(d)** **On its own it is worth almost nothing**: it is the expected yield of pure noise. Whole-brain imaging is a mass-univariate test and must be corrected — by Bonferroni, by cluster-extent inference under a spatial-smoothness model, or by false-discovery-rate control — and the correction has to be fixed in advance, which is the point of preregistration ([prob-stat-refresher 4.3](../../prob-stat-refresher/lessons/04-03-hypothesis-testing.md)).

**P2 (a)** $$V = \tfrac{4}{3}\pi r^{3} = \tfrac{4}{3}\pi (0.1\ \text{mm})^{3} = 4.19\times10^{-3}\ \text{mm}^{3},$$

$$N = 4.19\times10^{-3} \times 5\times10^{4} = \mathbf{210\ \text{neurons}}\ (\text{order }10^{2}).$$

**(b)** Extracellular spike amplitude falls steeply with distance — roughly as $1/r$ to $1/r^{2}$ depending on the source geometry — so of those ~210 neurons only the handful nearest the tip produce waveforms that rise clearly above the background. The rest contribute the "hash": a continuous low-amplitude noise floor made of hundreds of unresolvable spikes.

**Why that makes it a clustering problem.** What the electrode measures is a sum. To report "unit 3 fired at $t$" you must assign each detected waveform to a latent source using waveform shape as a feature — i.e. fit a mixture model to a point cloud. That is an unsupervised clustering task with all the usual failure modes: **merges** (two neurons with similar waveforms called one unit), **splits** (one neuron whose waveform drifts as the electrode moves called two), and **missed spikes** during bursts, when amplitude fades. The output is a hypothesis with an error rate, not a reading off a dial.

**(c)** The probe gives each spike a **spatial signature**: the same event is seen simultaneously on many sites with an amplitude profile set by the cell's position relative to the array. A single-channel waveform is a handful of features; a 100-site footprint adds an effective 3-D location, so two neurons with near-identical waveform shape but different positions become separable. **Higher-dimensional features make the clusters separable** — the same reason a classifier improves with informative features rather than more samples ([machine-learning](../../machine-learning/syllabus.md)). Drift correction also becomes possible, because a slow shift of the amplitude profile across sites is recognisable as movement rather than as a new cell.

**P3 (a)** The photon budget forbids it. With $\Phi$ fixed by photodamage limits,

$$\mathrm{SNR} = \epsilon\sqrt{\frac{\Phi}{fN}},$$

so going from $N = 10^{3}$ cells at $f = 30$ Hz to $N = 10^{5}$ cells at $f = 10^{3}$ Hz multiplies $fN$ by

$$\frac{10^{5}\times10^{3}}{10^{3}\times 30} = \frac{10^{8}}{3\times10^{4}} = 3.3\times10^{3},$$

and divides the SNR by $\sqrt{3.3\times10^{3}} = 58$. A measurement that had $\mathrm{SNR} = 4$ now has $\mathrm{SNR} = 0.07$ — **single spikes are invisible.** The deeper point is that no measurement, however good, answers the question: **correlation between place-cell firing and position is guaranteed by the definition of a place cell.** "Is it used?" is a causal question and needs a perturbation.

**(b) The design.** Express an inhibitory opsin in hippocampal pyramidal cells under a cell-type-specific promoter and **silence them only during a specific epoch** — say, only while the animal is at the choice point, and only on half the trials, interleaved.

| Result | Licenses | Does not license |
|---|---|---|
| Navigation fails on silenced trials | **necessity of hippocampal activity in that epoch** — and, because the manipulation is seconds long, no time for reorganisation | that the place code specifically was the signal used; you silenced everything those cells were doing |
| Navigation is unimpaired | **nothing clean** | that the hippocampus is uninvolved — redundant parallel strategies, incomplete opsin expression, or the wrong epoch all produce this |

A stronger variant, if available: drive a *known* place-cell sequence at a moment when the animal is not there, and see whether the choice shifts accordingly. That would probe sufficiency of the code rather than necessity of the tissue — and it still carries the synchrony caveat from the lesson.

**(c) The feature is reversible, temporally targeted, cell-type-restricted perturbation.** Three advantages over a lesion, and they matter in different ways:

1. **Each animal is its own control.** Silenced and control trials are interleaved minutes apart, so between-animal variability and slow learning drift cancel.
2. **No compensation.** A one-second silencing gives the brain no time to reorganise, which is the confound that makes chronic lesion deficits hard to attribute ([4.4](04-04-disease-a-taste.md)).
3. **Epoch specificity separates roles.** A lesion removes the structure during encoding, retrieval, *and* consolidation at once. Silencing only during retrieval separates them.

**The tie to [4.2](04-02-memory-systems.md):** H.M.'s surgery was decisive at the level of *systems* — it proved that declarative memory depends on the medial temporal lobe and that working memory and procedural learning do not, a dissociation nothing else could have shown at the time. But it was permanent, anatomically coarse, and cell-type blind, so it could not say **when** the structure is needed, **which** cells carry the trace, or **how** it is stored. **That is the general shape of the whole lesson: a method can be decisive about the level it resolves and silent about every level below it** — and progress in this field has mostly been new boxes on the map, not new arguments.

</details>

## Flashback

**From Lesson 1.4 (the Hodgkin–Huxley model):** At an instant during the rising phase of a spike, a patch of squid axon membrane has gating variables $m = 0.5$, $h = 0.3$, $n = 0.6$, and sits at $V = -20$ mV. Take $\bar g_{\text{Na}} = 120$ mS/cm², $\bar g_{\text{K}} = 36$ mS/cm², $E_{\text{Na}} = +50$ mV, $E_{\text{K}} = -77$ mV, $C_m = 1$ µF/cm², and ignore the leak. (a) Compute the two conductances. (b) Compute the two ionic currents, with sign, and the net ionic current. (c) Compute $dV/dt$ and say what the membrane does next. (d) One sentence: which instrument produced $\bar g_{\text{Na}}$ and the exponents on $m$ and $n$, and how do you know the exponents were not derived from theory?

<details>
<summary>Solution</summary>

**(a)** The gating variables enter as $m^{3}h$ and $n^{4}$:

$$g_{\text{Na}} = \bar g_{\text{Na}}\,m^{3}h = 120 \times (0.5)^{3} \times 0.3 = 120 \times 0.125 \times 0.3 = \mathbf{4.5\ \text{mS/cm}^2}.$$

$$g_{\text{K}} = \bar g_{\text{K}}\,n^{4} = 36 \times (0.6)^{4} = 36 \times 0.1296 = \mathbf{4.67\ \text{mS/cm}^2}.$$

**(b)** Each current is conductance times driving force, $I = g(V - E)$:

$$I_{\text{Na}} = 4.5 \times (-20 - 50) = 4.5 \times (-70) = \mathbf{-315\ \mu\text{A/cm}^2} \quad (\text{inward}),$$

$$I_{\text{K}} = 4.67 \times (-20 + 77) = 4.67 \times 57 = \mathbf{+266\ \mu\text{A/cm}^2} \quad (\text{outward}).$$

$$I_{\text{ion}} = -315 + 266 = \mathbf{-49\ \mu\text{A/cm}^2}\ (\text{net inward}).$$

**(c)** With no injected current, $C_m\,dV/dt = -I_{\text{ion}}$:

$$\frac{dV}{dt} = \frac{-(-49\ \mu\text{A/cm}^2)}{1\ \mu\text{F/cm}^2} = \mathbf{+49\ \text{mV/ms}}.$$

**Still depolarising, and fast** — this is the middle of the upstroke. Notice how *nearly balanced* the two currents already are: the conductances are within 4 percent of each other and the net is only 16 percent of the sodium current alone. As $h$ falls and $n$ rises over the next fraction of a millisecond, that small residual flips sign and the spike repolarises. **The upstroke is a large inward current only barely winning.**

**(d)** The **voltage clamp** ([1.3](01-03-the-action-potential.md)) — and its modern descendant the patch clamp — produced every one of those constants: it held $V$ fixed so conductance could be measured as a function of a variable that was no longer free to run away, and ion substitution and selective blockers separated the sodium and potassium components.

**How you know the exponents were fitted, not derived:** the potassium conductance rises with a sigmoidal delay, which no single exponential can produce; Hodgkin and Huxley found that raising a first-order variable to the **fourth** power reproduced the observed delay, and tried other integers first. **The exponent is the smallest integer that fit the curve.** They said so explicitly, and offered the "four particles must all be in place" reading as an interpretation rather than a claim. Structural biology later found that the potassium channel is a **tetramer** of four identical subunits and the sodium channel has **four** homologous domains — a spectacular retrospective vindication of a number that was, at the time, a curve-fitting parameter. **A model bought thirty years of correct predictions on a parameter nobody could yet justify — which is exactly what makes modelling a method.**

</details>

## Connections

- **Backward:** the whole course. [1.3](01-03-the-action-potential.md)'s voltage clamp is the ancestor of the patch clamp; [1.4](01-04-hodgkin-huxley-model.md) is modelling used as an instrument; [3.1](03-01-transduction-neural-coding.md)'s codes were defined by what an electrode can resolve; [4.2](04-02-memory-systems.md) and [4.4](04-04-disease-a-taste.md) are lesion inference, with the compensation caveat now made explicit.
- **Sideways:** the voltage clamp is a servo loop ([control-systems 1.1](../../control-systems/lessons/01-01-feedback-and-the-control-problem.md)); "how much does this signal tell you about that stimulus" is mutual information ([information-theory 1.3](../../information-theory/lessons/01-03-mutual-information.md)); the multiple-comparisons correction is [prob-stat-refresher 4.3](../../prob-stat-refresher/lessons/04-03-hypothesis-testing.md); single-channel records read as molecular state sequences are [biophysics 4.6](../../biophysics/lessons/04-06-single-molecule-inference.md).

### Where the course ends

Stated without inflation, because the honest version is more interesting than the promotional one:

| Status | What |
|---|---|
| **Essentially settled** | Module 1. Resting potential, the ionic mechanism of the spike, the HH formalism, cable theory and conduction. Quantitative, predictive, closed. |
| **Strong** | Synaptic transmission and its molecular machinery; sensory transduction and early sensory coding; the cellular mechanisms of LTP and LTD; the systems-level anatomy of memory. |
| **Genuinely open** | How circuits compute — [2.6](02-06-circuit-motifs-computation.md) gave motifs, not a theory. How a memory is written, stored, and *read out* by the circuits that use it. What the diffuse modulatory systems of [2.2](02-02-neurotransmitters-receptors.md) actually signal. Everything in [4.3](04-03-attention-decision-making.md). And the disease mechanisms of [4.4](04-04-disease-a-taste.md), where symptomatic treatment has run far ahead of causal understanding. |
| **Method-limited** | Reading many identified cells at spike timescale in a behaving animal; perturbing a *pattern* rather than a population; connectomes with weights and state attached. |

**The pattern is worth naming.** What is settled is what one instrument could resolve completely — the patch clamp closed out single-channel biophysics. What is open is what falls between boxes on the map. That is not a coincidence, and it is the best available guide to where the next decade of results will come from.

**Where to go next, in this library.** [Computational biology](../../computational-biology/syllabus.md) and [systems biology](../../systems-biology/syllabus.md) build the modelling side — networks, dynamics, and inference over biological data. [Information theory](../../information-theory/lessons/01-03-mutual-information.md) makes "neural code" a quantity rather than a metaphor. [Machine learning](../../machine-learning/syllabus.md) and [deep learning](../../deep-learning/syllabus.md) are where the spike-sorting, deconvolution, and decoding problems above actually get solved — and where the strange loop closes, since the architectures came partly from this course's Module 3. [Reinforcement learning](../../reinforcement-learning/syllabus.md) is the direct continuation of the dopamine prediction-error story. [Control systems](../../control-systems/lessons/01-01-feedback-and-the-control-problem.md) is the right language for [3.5](03-05-motor-control-correction.md)'s cerebellum. The [syllabus](../syllabus.md) has the full map of what was covered.
