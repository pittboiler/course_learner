# Neuroscience · Lesson 2.5: Neural development & wiring

> ⏱ ~15 min · Module 2: Synapses, wiring & circuits · Builds on: [2.3](02-03-synaptic-integration.md), [1.2](01-02-resting-membrane-potential.md) · Unlocks: 3.2 (vision), 4.1 (plasticity)

## Why this matters

Everything Module 2 has built assumes the wiring is already there. [2.3](02-03-synaptic-integration.md) put thousands of synapses on a dendritic tree and asked what they compute; nothing said how any of them found their partner. This lesson asks that question, and the first move is to notice that **the obvious answer cannot be right.**

A human brain has on the order of $10^{14}$ synapses. A human genome has about $2\times10^{4}$ protein-coding genes and $3.1\times10^{9}$ base pairs. **There is not remotely enough information in the genome to name the partners of even a small fraction of those synapses** — the calculation below is off by roughly a factor of a million, and no amount of clever compression closes a gap that size.

So the genome cannot be a blueprint of the connectome. **It has to encode an algorithm whose execution produces a connectome** — and the algorithm gets to use resources the genome does not have to pay for: the geometry of the growing tissue, chemical gradients that specify position without naming it, and the animal's own neural activity. The question of this lesson is what that algorithm is, and how much of the final wiring is written by genes versus selected by experience.

The payoff is immediate. Topographic maps ([3.2](03-02-vision.md)) are the product of the first half of the algorithm; the Hebbian rule that [4.1](04-01-plasticity-ltp-ltd.md) formalizes is the second half, running for the first time. And critical periods — why a treatable defect at age three is permanent at age thirty — fall straight out of it.

## The idea

**Wiring is an algorithm, and the algorithm is cheap by design.** Three tricks let a small genome specify a huge connectome:

1. **Encode position relatively, not absolutely.** Instead of giving each cell an address, lay down a smooth chemical gradient on the source and another on the target, and let each axon stop where the two readings balance. **One gradient specifies a continuum of positions with one gene.**
2. **Break long journeys into short legs.** A growth cone does not navigate 50 cm; it navigates to the nearest guidepost, re-reads its instructions, and navigates to the next. A vocabulary of maybe a dozen cue families, reused, suffices for every path in the body.
3. **Let activity finish the job.** Genes get the axon to the right *neighbourhood* — a region containing perhaps hundreds of candidate partners. Which of them it keeps is then decided by a **correlation rule** applied to the ongoing activity of the circuit. The genome specifies the rule, not the outcome, and a rule is small.

Wrapped around those, the pipeline is short: **induction** of the neural plate and its rolling into the neural tube; **proliferation** in the ventricular zone lining the tube's lumen; **migration** outward along radial glial fibres, which are both the progenitors and the scaffold; **differentiation**; then guidance, synapse formation and refinement.

**One detail of migration is worth remembering because it is so counterintuitive: the cortex is built inside-out.** The earliest-born neurons settle in the deepest layer, and every later cohort migrates *past* the ones already there to sit more superficially. Layer II/III is the last to arrive. In the *reeler* mouse, which lacks the secreted protein Reelin, the order inverts and the cortex is built outside-in — the same cells, the same numbers, in the wrong order.

**Then the big idea about the second half.** Initial connectivity is not sparse and precise; it is **exuberant** — too many axons, contacting too many targets, with wide overlap. Development proceeds substantially **by subtraction**: pruning branches, eliminating synapses, and killing entire neurons. That looks wasteful until you see what it buys: **a system that overproduces and then selects can be specified by a rule, whereas a system that builds exactly what it needs must be specified by a plan.** Selection is how you get precision without paying for it in genes.

## The formal version

### The information bound

Take the connectome as a list: for each synapse, which neuron is the partner. With $N$ neurons, naming one costs $\log_2 N$ bits ([information-theory 1.1](../../information-theory/lessons/01-01-entropy-uncertainty-surprise.md)). With $N = 8.6\times10^{10}$ neurons:

$$\log_2\!\left(8.6\times10^{10}\right) = \frac{\ln(8.6\times10^{10})}{\ln 2} = \frac{25.18}{0.693} = 36.3\ \text{bits per synapse.}$$

$$I_{\text{connectome}} \approx 10^{14} \times 36.3 = 3.6\times10^{15}\ \text{bits.}$$

The genome holds at most 2 bits per base pair (four bases, equiprobable — a generous ceiling, since real genomes are compressible):

$$I_{\text{genome}} \le 2 \times 3.1\times10^{9} = 6.2\times10^{9}\ \text{bits} \approx 775\ \text{MB.}$$

$$\boxed{\;\frac{I_{\text{connectome}}}{I_{\text{genome}}} \approx \frac{3.6\times10^{15}}{6.2\times10^{9}} \approx 6\times10^{5}\;}$$

*In words: specifying the wiring cell-by-cell would take about half a million times more information than the entire genome contains — and that is before spending a single base on anything but the brain.*

Turn it around for the version that sticks: **the genome can afford about $6\times10^{-5}$ bits per synapse.** That is the budget the algorithm has to work within, and it is why every trick above exists.

**The bound is not universal — it is a statement about scale.** In *C. elegans*, with 302 neurons and a few thousand synapses, the same arithmetic comes out the *other* way (P1), and the biological correlate is exactly what you would predict: **worm wiring is stereotyped neuron by neuron between individuals**, with named, identified cells, while no two human cortices are wired alike at the level of individual synapses.

### Axon guidance: the growth cone and its cues

The tip of a growing axon is a **growth cone** — a motile sensor of filopodia and lamellipodia, extending and retracting continuously, sampling the chemical environment across its own width (a few micrometres) and steering by biasing actin polymerization toward the favourable side.

Four cue families do most of the work, acting at short range (surface-bound) and long range (diffusible):

| Family | Receptor | Canonical role |
|---|---|---|
| Netrins | DCC, UNC-5 | long-range attraction to the ventral midline (repulsion with UNC-5) |
| Slits | Robo | midline repulsion; prevents re-crossing |
| Semaphorins | Neuropilin / plexin | mostly repulsion, short and long range |
| Ephrins | Eph receptors | contact repulsion; graded, hence maps |

**The single most important fact here is that the list is not a list of attractants and repellents.** The *same* cue attracts or repels depending on what the growth cone is: which receptors it expresses, and its internal biochemical state. The canonical demonstration is netrin-1, which attracts a growth cone with normal cytoplasmic cAMP and **repels the same growth cone when cAMP is lowered** — the ligand unchanged, the sign flipped by a second messenger ([molecular-cell-biology 2.2](../../molecular-cell-biology/lessons/02-02-second-messengers-amplification.md)). Co-expressing UNC-5 alongside DCC does the same thing structurally.

*In words: the meaning of a guidance cue is assigned by the receiver, not carried by the signal.* This is the same principle as [2.2](02-02-neurotransmitters-receptors.md)'s "the receptor sets the sign, not the transmitter," reappearing one level up — and it is what lets four cue families specify thousands of distinct trajectories.

**Guideposts** are the other half of the economy. A commissural axon in the spinal cord does not navigate to the brain; it navigates to the floor plate. On arrival it changes its receptor complement, becomes repelled by the very midline that attracted it, turns, and navigates to the next landmark. **Long paths are chains of short legs, each solvable with the same small vocabulary.**

### Chemoaffinity: how two gradients make a map

Sperry's experiments — cutting the optic nerve of a frog, rotating the eye, and finding that regenerated axons returned to their original tectal targets, producing systematically inverted vision the animal never corrected — established that axons carry **chemical identity tags** matched to their targets, not that they learn where to go.

The modern mechanism is graded, not lock-and-key. Along the retina's nasal–temporal axis, **EphA receptor** expression rises smoothly. Along the tectum's anterior–posterior axis, **ephrin-A ligand** rises smoothly. Ephrin-A is repulsive to EphA, so an axon advances until repulsion balances its drive to extend:

$$\text{terminate where}\quad [\text{EphA}]_{\text{axon}} \times [\text{ephrin-A}]_{\text{target}} \approx \text{constant.}$$

*In words: a high-EphA (temporal) axon is stopped early, in low-ephrin anterior tectum; a low-EphA (nasal) axon runs on to the high-ephrin posterior end.* The map is produced, and inverted, by two monotone gradients and one repulsive interaction.

**Two consequences make it clear this is a relative code, not an address book.** First, no axon needs a unique label — position along a continuum is encoded by a scalar concentration. Second, and this is the observation no lock-and-key scheme survives: **remove half the retina and the remaining half-retina expands to fill the whole tectum**, rescaling its map; remove half the tectum and a whole retina compresses onto it. Axons are competing for target space and settling into rank order, and rank order is preserved under rescaling in a way absolute labels never could be.

### What gradients cannot do

A gradient is smooth, and reading it is noisy. Worked Example 1 estimates the positional resolution at roughly 15–20 μm — a couple of cell diameters — which is **coarse compared with the final map**. Steepening the gradient does not help much, because resolution improves only with the *logarithm* of the fold-change.

So the initial projection is approximately right and locally wrong: **coarse, overlapping, and exuberant.** The rest is done by activity, under a correlation rule:

$$\Delta w_i \;\propto\; \big\langle a_i \, y \big\rangle - \big\langle \text{average over inputs} \big\rangle$$

where $a_i$ is the activity of input $i$ and $y$ the postsynaptic activity, and the subtraction enforces a fixed total synaptic resource so inputs must **compete**.

*In words: an input whose activity predicts the postsynaptic cell's activity better than its rivals do takes territory from them; the losers are withdrawn.* That is Hebb's rule with normalization — [4.1](04-01-plasticity-ltp-ltd.md) supplies the molecular machinery; here it is enough that the rule exists and that it is competitive.

**Crucially, the activity need not be sensory.** Before the eyes open, the retina generates **spontaneous waves** — slow bursts of correlated firing that sweep across it. Neighbouring ganglion cells fire together; cells in the two eyes do not. That is exactly the correlation structure the rule needs, and blocking the waves pharmacologically disrupts refinement. **The developing brain manufactures its own training data.**

Worked Example 2 runs the rule on ocular dominance and recovers the classic result: a symmetric binocular start is *unstable*, so eye-specific stripes form spontaneously, and closing one eye is far more damaging than closing both.

### Two developmental facts worth carrying forward

**GABA is depolarizing in immature neurons**, and this is the payoff of [1.2](01-02-resting-membrane-potential.md)'s chloride discussion. An immature neuron expresses NKCC1, which loads Cl⁻ inward, holding $[\text{Cl}^-]_{\text{in}}$ near 25–30 mM and $E_{Cl}$ around $-35$ mV — *above* rest and above threshold. Opening a GABA-A channel then **depolarizes** the cell, opening voltage-gated Ca²⁺ channels and relieving the NMDA receptor's Mg²⁺ block. **The "inhibitory" transmitter is the brain's main source of developmental Ca²⁺ signalling before glutamatergic synapses mature.** The switch to hyperpolarizing GABA comes when KCC2 is upregulated and pumps Cl⁻ back out (P3).

**Pruning and death are quantitative, not incidental.** In many neuronal populations roughly half the cells produced die, in competition for a limited supply of target-derived neurotrophins — a mechanism that automatically matches the number of neurons to the size of the target they must innervate, with no counting required. Synapse density in human cortex rises steeply in infancy, peaks in early childhood and then declines substantially into adulthood. **Microglia are not bystanders**: complement proteins tag weak synapses and microglia engulf them, making immune signalling a structural participant in wiring ([1.1](01-01-neuron-as-a-device.md) flagged this).

### Critical periods

Hubel and Wiesel's monocular deprivation experiments: suture one eyelid of a kitten for a few weeks after eye opening, and cortical cells become almost exclusively driven by the open eye, with the deprived eye's columns shrunken — permanently. Do the identical deprivation in an adult and essentially nothing happens. **The same manipulation, at two ages, has entirely different consequences.**

The old reading was that plasticity simply runs out. The modern reading is sharper and more useful: **the window is actively opened and actively closed.** It opens when inhibitory circuitry — particularly parvalbumin-expressing interneurons — matures enough to give the cortex a functioning excitation–inhibition balance; the GABA switch above is part of that maturation. It closes when **structural brakes** engage: perineuronal nets condense around interneurons, and myelin-associated inhibitors accumulate. Both are removable in animals, and removing them reopens plasticity in adults.

*In words: a critical period is a regulated state, not the passive expiry of a clock* — which is why the therapeutic interest is real. **Amblyopia** — the human case, where an eye deprived of clear input in childhood remains functionally impaired long after the optics are corrected — is the condition that motivates it.

## Picture

![Panel a shows a retina and a tectum drawn as vertical bars carrying opposing smooth gradients: the EphA receptor rises from nasal to temporal in the retina, and the ephrin-A ligand rises from anterior to posterior in the tectum. Three axons cross between them, so the temporal high-EphA axon terminates anterior where ephrin is low, the central axon terminates centrally, and the nasal low-EphA axon runs on to the posterior end, illustrating a relative rather than an address-based code. Panel b contrasts an initial exuberant projection, in which axons from both eyes contact the whole target territory, with the refined outcome, in which correlated within-eye inputs have segregated into alternating left and right stripes and the losing branches have been pruned.](assets/02-05-fig1.svg)

**Panel (a) is what genes can do; panel (b) is what they cannot.** Read left to right and you have the whole algorithm: gradients deliver the axon to a neighbourhood, activity selects among the partners it finds there.

## Worked examples

**Example 1 (mechanical — how precisely can a gradient specify position?).** A tectum is 2.0 mm long along the anterior–posterior axis, and ephrin-A varies exponentially by a factor of 10 across it. A growth cone can resolve concentration differences of 2 percent. (a) What positional resolution does that buy? (b) What sets the 2 percent? (c) How much would steepening the gradient help?

**(a)** Write the gradient as $c(x) = c_0 e^{x/\lambda}$ over a length $L$ with total fold-change $F$, so $F = e^{L/\lambda}$ and

$$\lambda = \frac{L}{\ln F} = \frac{2000\ \mu\text{m}}{\ln 10} = \frac{2000}{2.303} = 868\ \mu\text{m}.$$

Differentiating, $\dfrac{dc}{c} = \dfrac{dx}{\lambda}$, so a resolvable fractional difference $\epsilon$ corresponds to a positional step

$$\Delta x = \epsilon\,\lambda = 0.02 \times 868 = \mathbf{17\ \mu\text{m}}.$$

**About two cell-body diameters.** A gradient read this way locates an axon to within a few cells — good enough to define a neighbourhood, not good enough to define a partner.

**(b)** The 2 percent is a **counting limit**. The growth cone estimates concentration from the number $N$ of occupied receptors, and Poisson counting noise gives a fractional uncertainty of about $1/\sqrt N$:

$$\epsilon = \frac{1}{\sqrt N} = 0.02 \;\Longrightarrow\; N = 2500\ \text{bound receptors.}$$

To reach $\epsilon = 0.005$ would need $N = 40{,}000$ — sixteen times as many receptors for a fourfold improvement, since precision improves only as $\sqrt N$.

**(c)** Since $\Delta x = \epsilon L/\ln F$, resolution improves only with the **logarithm** of the fold-change. To sharpen from 17 μm to 4.3 μm you need $\ln F$ four times larger, i.e.

$$F \to 10^{4}.$$

**A ten-thousand-fold concentration range across 2 mm** — which no receptor's dynamic range can read at both ends, since one end saturates while the other falls below detection.

**This is the quantitative reason activity-dependent refinement is not optional.** Gradients are cheap in genes and intrinsically coarse; sharpening them is prohibitively expensive; so the remaining precision has to come from somewhere else.

**Example 2 (why you'd care — why closing one eye is worse than closing both).** Take a cortical cell with inputs from both eyes, weights $w_L + w_R = 1$ held fixed by a limited synaptic resource. The inputs fluctuate with zero mean and variances $\sigma_L^2, \sigma_R^2$, and the two eyes are **uncorrelated** with each other: $\langle a_L a_R\rangle = 0$. The output is $y = w_L a_L + w_R a_R$, and the rule is competitive Hebbian:

$$\dot w_i = \eta\left(\langle a_i y\rangle - \tfrac{1}{2}\textstyle\sum_j \langle a_j y\rangle\right).$$

Since $\langle a_L y\rangle = w_L\sigma_L^2$ and $\langle a_R y\rangle = w_R\sigma_R^2$, evaluate three rearing conditions from the symmetric start $w_L = w_R = 0.5$.

*(a) Normal rearing, $\sigma_L^2 = \sigma_R^2 = \sigma^2$.* Both drives are $0.5\sigma^2$ and equal, so $\dot w = 0$: the symmetric point is a fixed point. But perturb it, $w_L = 0.5+\delta$ and $w_R = 0.5-\delta$:

$$\dot w_L = \eta\sigma^2\!\left(w_L - \tfrac{w_L+w_R}{2}\right) = \eta\sigma^2\delta .$$

**The perturbation grows exponentially — the fixed point is unstable.** Any local fluctuation in the initial mix drives that patch of cortex to one eye or the other, and the result is the alternating stripe pattern of **ocular dominance columns**. *The columns do not need to be specified; they are what an unstable competitive rule does to a symmetric start.*

*(b) Monocular deprivation: right eye closed, so $\sigma_R^2 = 0.1\sigma^2$.*

$$\langle a_L y\rangle = 0.5\sigma^2, \qquad \langle a_R y\rangle = 0.5(0.1\sigma^2) = 0.05\sigma^2, \qquad \text{mean} = 0.275\sigma^2 .$$

$$\dot w_L = +0.225\,\eta\sigma^2, \qquad \dot w_R = -0.225\,\eta\sigma^2 .$$

**A large, immediate, systematic loss for the deprived eye**, and one that does not stop at the symmetric point because the asymmetry is in the inputs, not the weights.

*(c) Binocular deprivation: both eyes closed, $\sigma_L^2 = \sigma_R^2 = 0.1\sigma^2$.* Both drives are $0.05\sigma^2$, equal again, so $\dot w_L = \dot w_R = 0$ — and the instability growth rate becomes $0.1\eta\sigma^2\delta$, **ten times slower** than in normal rearing. Neither eye is systematically disadvantaged, and segregation proceeds feebly if at all.

**The prediction, which is the observed result:** monocular deprivation devastates the closed eye, while binocular deprivation leaves cells binocularly driven, with degraded tuning but no eye-specific loss. **Depriving both eyes is *less* damaging to either eye than depriving one.**

That makes no sense at all under a disuse model — twice the deprivation should be twice the harm. It falls out immediately under a **competition** model, because what the deprived eye loses in the monocular case, it loses *to the open eye*. **A one-line inequality about which experiment is worse is enough to distinguish two mechanisms**, and it is the reason clinical practice patches the *good* eye in amblyopia.

## Watch out

- **You might read "chemoaffinity" as each axon having a unique molecular address.** Sperry's result is real, but the implementation is two smooth gradients read against each other. That is why a half-retina expands to fill a whole tectum: the code is **relative position**, and relative position rescales.
- **You might classify a cue as attractive or repulsive.** The sign lives in the growth cone, not the ligand. Netrin attracts or repels the same cell depending on cytoplasmic cAMP, and a crossing axon becomes repelled by the midline that attracted it minutes earlier.
- **You might assume activity means sensory experience.** Retinal waves refine the visual projection **before the eyes open**. What the rule needs is correlation structure, and the nervous system generates its own.
- **You might treat GABA as inhibitory throughout development.** In immature neurons NKCC1 puts $E_{Cl}$ above threshold, so GABA is depolarizing and is a principal driver of developmental Ca²⁺ signalling. The switch is a cotransporter swap, not a receptor swap ([1.2](01-02-resting-membrane-potential.md)).
- **You might think binocular deprivation is twice as bad as monocular.** It is milder for either eye, because the damage is competitive. If you take one thing from this lesson as a diagnostic for "competition versus disuse," take that.
- **You might think a critical period closes because plasticity is used up.** It opens when inhibition matures and closes when structural brakes engage — both are manipulable, which is precisely why the finding matters therapeutically.
- **You might expect development to add structure monotonically.** Roughly half the neurons in many populations die, and synapse density peaks in childhood and then falls. **Overproduce-and-select is the design, because selection can be specified by a rule and construction cannot.**

## One-liner

> The genome is about $10^{6}$ times too small to name the partner of every synapse, so it encodes an algorithm instead: gradients read against each other place an axon within a few cell diameters of the right target, and a competitive correlation rule running on activity the brain generates for itself — retinal waves before the eyes ever open — selects among the partners it finds there.

## Problems

**P1 (🟢, bridges to information theory)** *C. elegans* has 302 neurons, roughly 7,000 chemical synapses, and a genome of about $1.0\times10^{8}$ base pairs. (a) How many bits would it take to specify its connectome as a partner list? (b) How many bits does its genome hold at 2 bits per base pair? (c) Compare the surplus or deficit with the human figure from the lesson, and state one testable biological prediction the comparison makes.

**P2 (🟡)** A tectum is 1.2 mm long and its ephrin-A concentration varies exponentially by a factor of 8 from end to end. A growth cone resolves 3 percent concentration differences. (a) Find the gradient length constant and the positional resolution. (b) Express that resolution in cell-body diameters, taking a cell body as 10 μm. (c) The animal needs the map twice as precise. Compute the fold-change that would be required if precision came from a steeper gradient alone, and say in one sentence why evolution took a different route.

**P3 (🔴, bridges to 1.2 and 4.1)** Extracellular chloride is 110 mM and $RT/F = 26.7$ mV at 37 °C. An immature neuron expressing NKCC1 holds $[\text{Cl}^-]_{\text{in}} = 30$ mM; after KCC2 is upregulated the mature cell holds $[\text{Cl}^-]_{\text{in}} = 6$ mM. Rest is $-70$ mV with resting input conductance 8 nS, and threshold is $-50$ mV. (a) Compute $E_{Cl}$ in each case. (b) A GABA-A synapse opens a 16 nS chloride conductance. Using the chord-conductance formula, find the steady-state membrane potential in each case and say whether the cell fires. (c) State what the depolarizing phase is *for*, and name one consequence of the switch beyond changing GABA's sign.

<details>
<summary>Solutions</summary>

**P1 (a)** Naming one partner among 302 neurons costs

$$\log_2 302 = \frac{\ln 302}{\ln 2} = \frac{5.710}{0.693} = 8.24\ \text{bits.}$$

$$I_{\text{connectome}} = 7000 \times 8.24 = 5.8\times10^{4}\ \text{bits} \approx \mathbf{7.2\ \text{kB}}.$$

**The entire wiring diagram of a nervous system fits in a few kilobytes.**

**(b)** $$I_{\text{genome}} = 2 \times 1.0\times10^{8} = 2.0\times10^{8}\ \text{bits} = \mathbf{25\ \text{MB}}.$$

**(c)** $$\frac{I_{\text{genome}}}{I_{\text{connectome}}} = \frac{2.0\times10^{8}}{5.8\times10^{4}} = \mathbf{3.5\times10^{3}}.$$

The worm's genome has a **3,500-fold surplus**; the human genome has a $6\times10^{5}$-fold **deficit**. The ratio between the two situations is about $2\times10^{9}$ — nine orders of magnitude, which is not a quantitative difference in degree but a change in what kind of solution is available.

**Prediction: worm wiring should be individually stereotyped, and human wiring should not.** If the genome can afford to name every partner, natural selection can fix the whole list, and two individuals raised apart should have the same connectome; if it cannot, the fine structure must be set by an algorithm with stochastic and activity-dependent steps, so two individuals — even genetically identical ones — must differ synapse by synapse.

**This is what is observed.** *C. elegans* neurons are individually named and identifiable across animals, and its connectome was published once as *the* connectome. No such claim is made, or could be made, for a vertebrate cortex. *(The stereotypy is not perfect — there is documented variability between individual worms — but the contrast in kind is exactly as predicted.)*

**P2 (a)** $$\lambda = \frac{L}{\ln F} = \frac{1200\ \mu\text{m}}{\ln 8} = \frac{1200}{2.079} = \mathbf{577\ \mu\text{m}}.$$

$$\Delta x = \epsilon\lambda = 0.03 \times 577 = \mathbf{17.3\ \mu\text{m}}.$$

**(b)** $$\frac{17.3}{10} = \mathbf{1.7\ \text{cell diameters.}}$$

The axon knows which two or three cells it is next to, and no more.

**(c)** Halving $\Delta x$ at fixed $\epsilon$ and $L$ requires doubling $\ln F$:

$$\ln F' = 2\ln 8 = \ln(8^2) \;\Longrightarrow\; F' = \mathbf{64}\text{-fold across 1.2 mm.}$$

And the *next* doubling would cost $F = 4096$. **Precision from a gradient is logarithmically expensive**, and a concentration range that large cannot be read at both ends by one receptor — the high end saturates, the low end vanishes into noise. So evolution buys the last factor of a few from activity-dependent refinement instead, where the cost is one rule rather than an unbuildable gradient.

**P3 (a)** For Cl⁻, $z = -1$, so $E_{Cl} = 26.7\,\ln\!\big([\text{Cl}^-]_{\text{in}}/[\text{Cl}^-]_{\text{out}}\big)$:

$$\text{immature: } E_{Cl} = 26.7\ln\frac{30}{110} = 26.7\,(-1.2993) = \mathbf{-34.7\ \text{mV}}.$$

$$\text{mature: } E_{Cl} = 26.7\ln\frac{6}{110} = 26.7\,(-2.9087) = \mathbf{-77.7\ \text{mV}}.$$

**(b)** The chord formula weights each battery by its conductance:

$$V = \frac{g_{\text{rest}}E_{\text{rest}} + g_{\text{GABA}}E_{Cl}}{g_{\text{rest}} + g_{\text{GABA}}}.$$

*Immature:*

$$V = \frac{(8)(-70) + (16)(-34.7)}{8+16} = \frac{-560 - 555.2}{24} = \frac{-1115.2}{24} = \mathbf{-46.5\ \text{mV}}.$$

Threshold is $-50$ mV, so **the cell is driven past threshold and fires.** GABA is not merely depolarizing here; it is frankly excitatory.

*Mature:*

$$V = \frac{(8)(-70) + (16)(-77.7)}{24} = \frac{-560 - 1243.2}{24} = \frac{-1803.2}{24} = \mathbf{-75.1\ \text{mV}}.$$

**Hyperpolarized 5 mV below rest, and firmly inhibitory.** Same transmitter, same receptor, same channel, same conductance — a 29 mV swing in the outcome, produced entirely by a cotransporter swap.

**(c)** **What the depolarizing phase is for:** it is the developing brain's principal source of **Ca²⁺ signalling** before glutamatergic synapses are mature. Depolarization to $-46$ mV opens voltage-gated Ca²⁺ channels and relieves the NMDA receptor's Mg²⁺ block ([4.1](04-01-plasticity-ltp-ltd.md)), and the resulting Ca²⁺ transients drive neurite outgrowth, survival and synapse stabilization. **The activity that refines the circuit has to be generated by something, and early on that something is GABA.**

**A consequence of the switch beyond sign:** the maturation of GABAergic inhibition — of which the KCC2 switch is one component — is part of what **opens the critical period**, since a functioning excitation–inhibition balance is what makes competitive plasticity possible in the first place. A second consequence, clinically relevant: KCC2 is **downregulated again** after injury and in some epileptic tissue, so adult neurons can revert to depolarizing GABA — which is one reason GABAergic anticonvulsants can fail, or worsen matters, in exactly the tissue that needs them.

</details>

## Flashback

**From Lesson 1.1 (the neuron as a device):** A newly-differentiated cortical neuron is a bare sphere of radius 6 μm with essentially no dendritic tree, and its immature membrane is unusually tight: $R_m = 30{,}000$ Ω·cm², with $c_m = 1\ \mu\text{F/cm}^2$ as always. (a) Find its total membrane capacitance, input resistance and time constant. (b) A single small synaptic current of 2 pA arrives. What steady-state depolarization does it produce? (c) A mature pyramidal cell of the same type has $R_{\text{in}} = 100$ MΩ. Compare, and say what this implies about how much wiring an immature circuit needs in order to be active.

<details>
<summary>Solution</summary>

**(a)** Radius $6\ \mu\text{m} = 6\times10^{-4}$ cm, so

$$A = 4\pi r^2 = 4\pi(6\times10^{-4})^2 = 4.524\times10^{-6}\ \text{cm}^2 .$$

$$C = c_m A = (10^{-6})(4.524\times10^{-6}) = 4.52\times10^{-12}\ \text{F} = \mathbf{4.5\ \text{pF}}.$$

$$R_{\text{in}} = \frac{R_m}{A} = \frac{3\times10^{4}}{4.524\times10^{-6}} = 6.63\times10^{9}\ \Omega = \mathbf{6.6\ \text{G}\Omega}.$$

$$\tau = R_m c_m = (3\times10^{4})(10^{-6}) = 3\times10^{-2}\ \text{s} = \mathbf{30\ \text{ms}}.$$

*(Check the area-independence claim from 1.1: $R_{\text{in}}C = (6.63\times10^{9})(4.52\times10^{-12}) = 3.0\times10^{-2}$ s — the same 30 ms, as it must be, since the area cancels.)*

**(b)** $$\Delta V = I R_{\text{in}} = (2\times10^{-12}\ \text{A})(6.63\times10^{9}\ \Omega) = 1.33\times10^{-2}\ \text{V} = \mathbf{13.3\ \text{mV}}.$$

**(c)** $$\Delta V_{\text{mature}} = (2\times10^{-12})(10^{8}) = 2\times10^{-4}\ \text{V} = \mathbf{0.2\ \text{mV}}, \qquad \text{a ratio of } \mathbf{66}\times.$$

**The same synaptic current is a near-threshold event in the immature cell and a negligible one in the mature cell**, for two compounding reasons: the immature cell is small (little area, so little total conductance) and its membrane is tight (few channels per unit area). A long $\tau$ of 30 ms makes it an integrator on top of that, so even sparse, slow, poorly-timed inputs sum.

**The implication:** an immature circuit does not need much wiring to be active. A handful of synapses — including depolarizing GABAergic ones (P3) — can drive a young neuron to fire, which is exactly what the activity-dependent refinement rule requires as its input. **High input resistance is a developmental design feature: it bootstraps the activity that the wiring algorithm then feeds on.** As the dendritic tree grows and channel density rises, $R_{\text{in}}$ falls by orders of magnitude and the cell converts from something a single input can drive into the population-verdict device of [2.3](02-03-synaptic-integration.md).

*(Caveat carried from 1.2: treating the synapse as a current source is a convenience. A real synaptic conductance saturates at its reversal potential, so the 13.3 mV figure is an upper bound rather than a literal prediction — but the 66-fold contrast between the two stages survives intact.)*

</details>

## Connections

- **Backward:** [2.3](02-03-synaptic-integration.md) assumed a finished dendritic tree with its synapses in place; this lesson says where they came from and why there were once far more of them. [1.2](01-02-resting-membrane-potential.md)'s chloride cotransporters turn out to be a developmental switch, not a footnote. [2.2](02-02-neurotransmitters-receptors.md)'s "the receptor sets the sign" reappears one level up, as "the growth cone sets the sign of a guidance cue."
- **Forward:** [3.2](03-02-vision.md) is the mature product of the retinotectal and ocular-dominance machinery built here — retinotopy, eye-specific layers and orientation columns are all outputs of the same two-stage algorithm. [4.1](04-01-plasticity-ltp-ltd.md) supplies the molecular implementation of the correlation rule used informally in this lesson, and explains why Hebbian learning needs the normalization term that made the competition work.
- **Sideways:** the information bound is a straight application of [information-theory 1.1](../../information-theory/lessons/01-01-entropy-uncertainty-surprise.md); the receptor and second-messenger machinery that lets one ligand mean two opposite things is [molecular-cell-biology 2.1](../../molecular-cell-biology/lessons/02-01-receptors-reading-outside-world.md) and [2.2](../../molecular-cell-biology/lessons/02-02-second-messengers-amplification.md); the progenitor logic behind proliferation and differentiation is [molecular-cell-biology 4.5](../../molecular-cell-biology/lessons/04-05-stem-cells-differentiation-reprogramming.md).
