# Molecular & Cell Biology · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Cell biology is mechanism plus arithmetic. The mechanism is a parts list you have
to have straight — which coat goes which way, which chain linkage means destroy,
which repair pathway needs a sister chromatid. The arithmetic is a surprisingly
small set of formulas that recur everywhere: production over decay, gains that
multiply, Boltzmann factors, and exponentials in a barrier height. Use this card
for the parts list, the formulas, and the numbers worth looking up rather than
half-remembering.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $c_{\text{sat}}$ | saturation concentration — above it a protein demixes into droplets | [1.1](lessons/01-01-crowded-cell-condensates.md) |
| $\gamma$ | activity coefficient — factor by which crowding raises a molecule's effective concentration | [1.1](lessons/01-01-crowded-cell-condensates.md) |
| $C_c$ | critical concentration for filament assembly — below it a filament end shrinks | [1.2](lessons/01-02-cytoskeleton-three-filaments.md) |
| $\ell_p$ | persistence length — how far a filament stays straight against thermal bending | [1.2](lessons/01-02-cytoskeleton-three-filaments.md) |
| $\langle L\rangle$, $\tau$ | motor run length and mean attachment time | [1.3](lessons/01-03-motors-cargo-logistics.md) |
| $x^{*}$ | crossover distance: below it diffusion beats a motor, above it the motor wins | [1.3](lessons/01-03-motors-cargo-logistics.md) |
| $\theta$ | fractional receptor occupancy | [2.1](lessons/02-01-receptors-reading-outside-world.md) |
| $K_d$ | dissociation constant — ligand concentration at half occupancy | [2.1](lessons/02-01-receptors-reading-outside-world.md) |
| $\mathrm{EC}_{50}$ | ligand concentration giving half-maximal *response* (not half binding) | [2.1](lessons/02-01-receptors-reading-outside-world.md) |
| $G$ | gain at one catalytic step, $= k_{\text{cat}}\tau$ | [2.2](lessons/02-02-second-messengers-amplification.md) |
| $n$, $n_{\text{eff}}$ | Hill coefficient; effective Hill coefficient of a whole cascade | [2.3](lessons/02-03-kinase-cascades-switch.md) |
| $k_{\text{on}}$, $k_{\text{off}}$, $k_{\text{tx}}$ | promoter on-rate, off-rate, and transcription rate while ON | [4.2](lessons/04-02-eukaryotic-transcription-machine.md) |
| $m_{ss}$, $P_{ss}$ | steady-state mRNA and protein abundance | [4.3](lessons/04-03-rna-processing-mrna-life-cycle.md), [4.4](lessons/04-04-protein-quality-control-degradation.md) |
| $k_{\text{dil}}$ | removal by dilution at division, $= \ln 2 / T_{\text{doubling}}$ | [4.4](lessons/04-04-protein-quality-control-degradation.md) |
| $\Delta U / D$ | barrier height in units of noise strength | [4.5](lessons/04-05-stem-cells-differentiation-reprogramming.md) |

## Definitions

### Macromolecular crowding

The cytoplasm is 20–30 percent occupied by macromolecule, so the volume actually
available to any molecule is far smaller than the total — which raises effective
concentrations and thermodynamically rewards anything that makes a molecule
smaller (binding, folding, polymerizing).

*Introduced:* [1.1](lessons/01-01-crowded-cell-condensates.md)

### Biomolecular condensate

A membraneless compartment formed when a protein with several weak sticky
patches demixes from the cytosol above a threshold concentration, like oil from
vinegar. Contents exchange freely with the outside; there is no barrier.

*Introduced:* [1.1](lessons/01-01-crowded-cell-condensates.md)

### Critical concentration

The free-subunit concentration at which a filament end neither grows nor shrinks
— just the dissociation constant for adding one subunit.

$$C_c = \frac{k_{\text{off}}}{k_{\text{on}}}$$

*Introduced:* [1.2](lessons/01-02-cytoskeleton-three-filaments.md)

### Treadmilling

The two ends of an actin filament have different critical concentrations, so at a
free concentration between them the plus end grows while the minus end shrinks —
the filament moves through the cytoplasm at constant length.

*Introduced:* [1.2](lessons/01-02-cytoskeleton-three-filaments.md)

### Dynamic instability

A microtubule switches stochastically between steady growth and rapid collapse,
with no steady intermediate, depending on whether it keeps its stabilizing
GTP-tubulin cap. Loss of the cap is a **catastrophe**; regaining one is a
**rescue**. This is the cell's search algorithm, not a defect.

*Introduced:* [1.2](lessons/01-02-cytoskeleton-three-filaments.md)

### Processivity

A motor's tendency to stay attached for many steps. Run length is set by grip,
not speed.

$$\langle L\rangle = \frac{d}{p_{\text{off}}} = v\,\tau$$

*Introduced:* [1.3](lessons/01-03-motors-cargo-logistics.md)

### Co-translational translocation

A secretory protein's N-terminal signal sequence is grabbed by the signal
recognition particle as it emerges, docking the ribosome on the ER so the chain
is threaded into the lumen *while it is being made*.

*Introduced:* [1.4](lessons/01-04-endomembrane-trafficking.md)

### Secretion is the default

Anything entering the ER without a further sorting signal ends up outside the
cell. Every other destination requires a signal that diverts it.

*Introduced:* [1.4](lessons/01-04-endomembrane-trafficking.md)

### GEF / GAP switch

A GTPase is a timer: a **GEF** loads GTP (on), a **GAP** triggers hydrolysis
(off). The same architecture runs Rab compartment identity, Gα signalling, and Ras.

$$\text{GTPase-GDP} \;\xrightarrow[\ \text{GEF}\ ]{}\; \text{GTPase-GTP} \;\xrightarrow[\ \text{GAP}\ ]{}\; \text{GTPase-GDP}$$

*Introduced:* [1.4](lessons/01-04-endomembrane-trafficking.md)

### Spare receptors (receptor reserve)

The maximal biological response is reached with only a small fraction of
receptors occupied, because downstream amplification saturates first. Signature:
$\mathrm{EC}_{50} \ll K_d$, and most receptors can be lost with no loss of maximum.

*Introduced:* [2.1](lessons/02-01-receptors-reading-outside-world.md)

### Second messenger

A small diffusible molecule made in bulk on demand (cAMP, IP₃, DAG) or released
from a store (Ca²⁺). It amplifies, broadcasts fast, and can be erased.

*Introduced:* [2.2](lessons/02-02-second-messengers-amplification.md)

### Ultrasensitivity

A dose–response steeper than a single binding equilibrium allows. Produced by
composing cascade layers, by multisite phosphorylation, or by zero-order
saturation — never by the receptor itself.

*Introduced:* [2.3](lessons/02-03-kinase-cascades-switch.md)

### Zero-order ultrasensitivity

When a kinase and a phosphatase acting on the same substrate are both saturated,
the fraction phosphorylated is decided by which is faster — a comparison, not a
balance, and comparisons are switches.

*Introduced:* [2.3](lessons/02-03-kinase-cascades-switch.md)

### Bistability and hysteresis

Positive feedback around a step with $n > 1$ gives two stable states with an
unstable threshold between. **Hysteresis** — a higher input needed to switch on
than to switch off — is the experimental test, and is what "memory" means for a
circuit. A steep response alone is not bistability.

*Introduced:* [2.4](lessons/02-04-circuits-feedback-adaptation.md)

### Adaptation

The response spikes and returns to baseline despite a sustained input, so the
system reports *change* rather than *level*. Built from slow negative feedback or
an incoherent feedforward loop.

*Introduced:* [2.4](lessons/02-04-circuits-feedback-adaptation.md)

### Relaxation oscillator

A bistable fast subsystem plus a slow variable that drags it back and forth
across its own saddle-node points. Long quiet phases, abrupt transitions — the
shape of the cell cycle.

*Introduced:* [2.4](lessons/02-04-circuits-feedback-adaptation.md), applied in [3.1](lessons/03-01-cell-cycle-engine-irreversibility.md)

### Restriction point

The growth-factor level at which the low-E2F (quiescent) state is annihilated in
a saddle-node bifurcation. Past it the cell divides whether or not the growth
factor remains — the hysteresis of a bistable switch, seen clinically.

*Introduced:* [3.1](lessons/03-01-cell-cycle-engine-irreversibility.md)

### Irreversibility by proteolysis

A phosphatase can undo a kinase; nothing un-hydrolyses a peptide bond. The cell's
one-way cycle transitions are made one-way by destroying the protein that defined
the previous state.

*Introduced:* [3.1](lessons/03-01-cell-cycle-engine-irreversibility.md)

### Licensing versus firing

Replication origins are loaded with MCM helicase only when CDK is **low** (G1)
and fired only when CDK is **high** (S) — two chemically incompatible states, so
once-per-cycle replication is enforced by chemistry rather than by a counter.

*Introduced:* [3.1](lessons/03-01-cell-cycle-engine-irreversibility.md)

### Dominant negative

A mutant subunit that poisons the complexes it joins. For an $n$-mer, a
heterozygote retains only $(1/2)^{n}$ fully wild-type complexes — 6.25 percent for
a tetramer like p53, which is why one hit largely disables it.

*Introduced:* [3.2](lessons/03-02-dna-damage-response.md)

### MOMP

Mitochondrial outer membrane permeabilization — BAX/BAK oligomerize, cytochrome
*c* escapes, caspases fire. The point of no return in apoptosis. The executioner
is always present and always restrained; p53 cuts a leash rather than building a
weapon.

*Introduced:* [3.2](lessons/03-02-dna-damage-response.md)

### Resection

The 5′→3′ chew-back that exposes 3′ single-stranded tails and commits a
double-strand break to homologous recombination. Activated by CDK phosphorylation,
so it happens only when a sister chromatid exists.

*Introduced:* [3.3](lessons/03-03-double-strand-breaks-hr-nhej.md)

### Synthetic lethality

Two lesions each survivable alone and lethal together. PARP inhibition plus
*BRCA* loss is the worked case: the drug is not selective, the tumour's genotype is.

*Introduced:* [3.3](lessons/03-03-double-strand-breaks-hr-nhej.md)

### Oncogene / tumour suppressor / caretaker

Accelerator stuck (gain of function, one allele) / brakes gone (loss of function,
usually two alleles) / genome maintenance lost (raises the mutation rate, and
therefore raises cancer probability to the $k$-th power).

*Introduced:* [3.4](lessons/03-04-cancer-failure-of-control.md)

### Driver versus passenger

A driver was selected for; a passenger was carried along. A tumour carries
thousands of mutations and typically 2–8 drivers. The test is statistical:
mutated more often than the local background rate predicts.

*Introduced:* [3.4](lessons/03-04-cancer-failure-of-control.md)

### Nucleosome

147 bp of DNA wrapped 1.65 turns around a histone octamer. The interaction is
electrostatic and **sequence-independent**, so histones cannot be what picks
genes — the tails are.

*Introduced:* [4.1](lessons/04-01-chromatin-packaging-regulation.md)

### Writers, readers, erasers

Enzymes that add, bind, and remove histone marks. Acetylation acts *physically*
(removes lysine's positive charge) and informationally; methylation is
**information only**, and its meaning depends entirely on which residue carries it.

*Introduced:* [4.1](lessons/04-01-chromatin-packaging-regulation.md)

### Pioneer factor

A transcription factor that can engage its motif on a nucleosome surface in
closed chromatin and recruit remodellers to open it. The only kind of factor that
can *start* changing a cell's chromatin state.

*Introduced:* [4.1](lessons/04-01-chromatin-packaging-regulation.md), used in [4.5](lessons/04-05-stem-cells-differentiation-reprogramming.md)

### Topologically associating domain

A cohesin-extruded, CTCF-bounded loop domain. An enhancer generally reaches only
promoters inside its own domain, so a boundary deletion lets the wrong enhancer
find the wrong gene.

*Introduced:* [4.2](lessons/04-02-eukaryotic-transcription-machine.md)

### Promoter-proximal pausing

Pol II initiates, transcribes ~20–60 nt, and stops. The regulated step for most
human genes is **pause release** by P-TEFb, not polymerase recruitment.

*Introduced:* [4.2](lessons/04-02-eukaryotic-transcription-machine.md)

### Transcriptional bursting

Genes fire in bursts, not steadily. **Burst frequency** ($\approx k_{\text{on}}$)
is tuned mainly by enhancers and accessibility; **burst size**
($\approx k_{\text{tx}}/k_{\text{off}}$) by the promoter. Two genes with identical
means can differ several-fold in noise.

*Introduced:* [4.2](lessons/04-02-eukaryotic-transcription-machine.md)

### Nonsense-mediated decay

Splicing deposits a complex upstream of each exon junction; if a ribosome
terminates before the last one, the message is destroyed. Whether a nonsense
mutation gives a null or a dominant-negative truncated protein depends on this.

*Introduced:* [4.3](lessons/04-03-rna-processing-mrna-life-cycle.md)

### Ubiquitin code

Ubiquitin is an alphabet, not a verdict. **K48** chains mean destroy; **K63**
chains and monoubiquitin mean signalling, repair, trafficking, histone regulation.
Specificity lives in the E3 ligase — over 600 in humans.

*Introduced:* [4.4](lessons/04-04-protein-quality-control-degradation.md)

### Degron

A sequence or modification an E3 recognizes. Conditional degrons couple
degradation to state: **phosphodegrons** to signalling, the **oxygen-dependent
degron** of HIF-1α to oxygen, **N-degrons** to the identity of the N-terminal residue.

*Introduced:* [4.4](lessons/04-04-protein-quality-control-degradation.md)

### PROTAC

A bifunctional molecule with a target ligand, an E3 ligand, and a linker. It
inhibits nothing — it forces a ternary complex so a ligase destroys a protein it
was never designed to see. The target ligand need only bind *somewhere*, which is
why undruggable targets become druggable.

*Introduced:* [4.4](lessons/04-04-protein-quality-control-degradation.md)

### Potency

Totipotent (every type plus placenta) → pluripotent (all germ layers) →
multipotent (one lineage) → unipotent. A **stem cell** is defined by a behaviour —
self-renewal plus potency — not by a marker, and often by its niche.

*Introduced:* [4.5](lessons/04-05-stem-cells-differentiation-reprogramming.md)

### Toggle switch

Two mutually repressing, self-activating factors. For $n > 1$ this has two stable
states (the two fates) and an unstable symmetric one (the ridge). Progenitors
transiently occupy the middle and then resolve.

*Introduced:* [4.5](lessons/04-05-stem-cells-differentiation-reprogramming.md)

## Formulas and rules

### Crowding and phase separation

| Quantity | Formula |
|---|---|
| Excluded volume per crowder | $v_{\text{ex}}(r) = \tfrac43\pi(R+r)^3$ |
| Activity coefficient (first order) | $\gamma(r) \approx \exp[n_c v_{\text{ex}}(r)]$ |
| Crowding effect on association | $\dfrac{K_{\text{cell}}}{K_{\text{dilute}}} \approx \exp\!\big[n_c(v^A_{\text{ex}}+v^B_{\text{ex}}-v^{AB}_{\text{ex}})\big] > 1$ always |
| Dense-phase volume fraction | $f = \dfrac{c_{\text{tot}}-c_{\text{sat}}}{c_{\text{dense}}-c_{\text{sat}}}$ |
| Free concentration above $c_{\text{sat}}$ | pinned at $c_{\text{sat}}$ — adding protein makes more droplets, not a stronger solution |

*From* [1.1](lessons/01-01-crowded-cell-condensates.md)

### Filaments and motors

| Quantity | Formula |
|---|---|
| Net elongation at an end | $dn/dt = k_{\text{on}}[\mathrm S] - k_{\text{off}}$ |
| Critical concentration | $C_c = k_{\text{off}}/k_{\text{on}}$ |
| Treadmilling window | $C_c^{+} < [\mathrm S] < C_c^{-}$ |
| Mean microtubule reach | $\langle L\rangle = v_g / f_{\text{cat}}$ |
| Motor run length | $\langle L\rangle = d/p_{\text{off}} = v\tau$ |
| Diffusion vs. transport time | $t_{\text{diff}} = x^2/2D$ · $t_{\text{motor}} = x/v$ |
| **Crossover distance** | $x^{*} = 2D/v$ — about 40 μm for typical values |

*From* [1.2](lessons/01-02-cytoskeleton-three-filaments.md), [1.3](lessons/01-03-motors-cargo-logistics.md)

### The trafficking parts list

| Coat | Route | Direction |
|---|---|---|
| COPII | ER → *cis*-Golgi | forward |
| COPI | Golgi → ER, and between cisternae | **retrieval** |
| Clathrin + AP-1 | *trans*-Golgi → endosome/lysosome | forward, off the default |
| Clathrin + AP-2 | plasma membrane → early endosome | endocytic |

| Signal | Read by | Destination |
|---|---|---|
| N-terminal hydrophobic signal sequence | SRP | ER lumen (co-translational) |
| KDEL (C-term, lumenal) | KDEL receptor | back to ER via COPI |
| KKXX (C-term, cytosolic) | COPI coat | back to ER |
| **Mannose-6-phosphate** (a *sugar*) | M6P receptor | lysosome |
| Tyrosine / dileucine motifs | AP complexes | endocytosis |
| Nuclear localization signal (basic) | importin | nucleus |

*From* [1.4](lessons/01-04-endomembrane-trafficking.md)

### Receptors, gain and steepness

| Quantity | Formula |
|---|---|
| Occupancy (Langmuir) | $\theta = [\mathrm L]/(K_d + [\mathrm L])$ |
| Ligand for a given occupancy | $[\mathrm L] = K_d\,\theta/(1-\theta)$ — 50% at $K_d$, 75% at $3K_d$, 90% at $9K_d$ |
| **10-to-90 span, single site** | **81-fold**, independent of $K_d$ |
| Hill occupancy | $\theta = [\mathrm L]^n/(K^n + [\mathrm L]^n)$ |
| 10-to-90 span, Hill | $81^{1/n}$ |
| Gain at one catalytic step | $G = k_{\text{cat}}\tau$ |
| Total cascade gain | $G_{\text{total}} = \prod_i k_{\text{cat},i}\tau_i$ |
| Effective Hill coefficient | $n_{\text{eff}} \approx \prod_i n_i$ |
| Messenger steady state | $[\mathrm M]_{ss} = V_{\text{synth}}/k_{\text{deg}}$, time constant $1/k_{\text{deg}}$ |

*From* [2.1](lessons/02-01-receptors-reading-outside-world.md), [2.2](lessons/02-02-second-messengers-amplification.md), [2.3](lessons/02-03-kinase-cascades-switch.md)

Quick table for reading a dose–response:

| $n_{\text{eff}}$ | 1 | 2 | 5 | 10 |
|---|---|---|---|---|
| 10-to-90 span | 81× | 9× | 2.4× | 1.6× |
| behaves like | a dial | responsive | nearly a switch | a switch |

### Circuits

| Motif | Steady state / behaviour |
|---|---|
| Strong negative feedback, $\dot x = \alpha u/(1+kx) - \beta x$ | $x_{ss} \approx \sqrt{\alpha u/\beta k} \propto \sqrt{u}$ — compressed, robust, faster |
| Positive feedback, $\dot x = \alpha x^n/(K^n+x^n) + b - \beta x$ | $n \ge 2$ gives three roots: stable / unstable / stable |
| Stability test | production crosses decay **from above** → stable; from below → unstable |
| Incoherent feedforward, $\dot y = \gamma u - \delta y$, $x \propto u/y$ | $x_{ss} = \delta/\gamma$, independent of $u$ — perfect adaptation |
| Bistable + slow negative arm | relaxation oscillator |

*From* [2.4](lessons/02-04-circuits-feedback-adaptation.md)

### Genome maintenance and cancer

| Quantity | Formula / rule |
|---|---|
| Fully wild-type fraction, $n$-mer heterozygote | $(1/2)^{n}$ |
| Protein stabilization | $P_{ss} \propto 1/k_d$; rise factor = ratio of half-lives; approach governed by the **new** $k_d$ |
| Mis-join opportunities from $n$ breaks | $\binom{n}{2} \approx n^2/2$ — quadratic in dose, hence fractionation |
| Armitage–Doll incidence | $I(t) \propto t^{\,k-1}$ |
| Caretaker effect | risk $\propto \mu^{k}$ — a 100× mutation rate is $100^{k}$ |
| Pre-existing resistant cells | $\approx N \times (\text{number of routes}) \times \mu$ |
| Doubly-resistant cells | product of the two — vanishing, **but only if given simultaneously** |

*From* [3.1](lessons/03-01-cell-cycle-engine-irreversibility.md), [3.2](lessons/03-02-dna-damage-response.md), [3.3](lessons/03-03-double-strand-breaks-hr-nhej.md), [3.4](lessons/03-04-cancer-failure-of-control.md)

| Repair pathway | NHEJ | HR |
|---|---|---|
| Template | none | sister chromatid |
| Phases | all | **S and G2 only** |
| Committing step | Ku binding | **resection** (CDK-activated) |
| Fidelity | loses a few bp; can make **translocations** | error-free |
| Blocked by losing | Ku70/80, DNA-PKcs, LIG4 | BRCA1 (no resection), BRCA2 (no RAD51 loading) |

### Expression control

| Quantity | Formula |
|---|---|
| Nucleosome accessibility | $P_{\text{acc}} = e^{-\Delta G/k_BT}/(1+e^{-\Delta G/k_BT})$ |
| Combinatorial capacity | $2^{n}$ states from $n$ factors — 20 factors cover 20,000 genes |
| Mean expression (bursty) | $\langle m\rangle \propto \dfrac{k_{\text{on}}}{k_{\text{on}}+k_{\text{off}}}\,k_{\text{tx}}$ |
| Burst frequency / size | $\approx k_{\text{on}}$ / $\approx k_{\text{tx}}/k_{\text{off}}$ |
| Noise | Fano $= \sigma^2/\langle m\rangle \approx 1 + \text{burst size}$ |
| mRNA steady state | $m_{ss} = k_{\text{tx}}/k_{\text{deg,m}}$, response time $1/k_{\text{deg,m}}$ |
| Protein steady state | $P_{ss} = \dfrac{k_{\text{tx}}}{k_{\text{deg,m}}}\times\dfrac{k_{\text{tl}}}{k_{\text{deg,p}}}$ |
| Removal with division | $k_{\text{eff}} = k_d + k_{\text{dil}}$, $k_{\text{dil}} = \ln 2/T_{\text{doubling}}$ |
| Time to fraction $f$ of a step | $\ln(1/f)/k$; 90% takes $3.32$ half-lives, 95% takes $4.32$ |
| Isoforms from $n$ cassette exons | $2^{n}$; mutually exclusive clusters multiply |
| Frame preserved iff | skipped length $\equiv 0 \pmod 3$ |
| Escape from a stable state | $\langle T\rangle \sim \tau_0\,e^{\Delta U/D}$ |

*From* [4.1](lessons/04-01-chromatin-packaging-regulation.md), [4.2](lessons/04-02-eukaryotic-transcription-machine.md), [4.3](lessons/04-03-rna-processing-mrna-life-cycle.md), [4.4](lessons/04-04-protein-quality-control-degradation.md), [4.5](lessons/04-05-stem-cells-differentiation-reprogramming.md)

### Numbers worth having

| Quantity | Value |
|---|---|
| Cytoplasmic protein concentration | 300–400 g/L; 20–30 percent of volume occupied |
| Kinesin-1 step / speed / run | 8 nm · ~800 nm/s · ~1 μm |
| Myosin V step / speed / run | 36 nm · ~400 nm/s · ~1.8 μm |
| Microtubule growth / shrink | ~2 μm/min · ~20 μm/min |
| Persistence length: actin / microtubule | ~17 μm · ~5 mm |
| Tubulin dimers per μm of microtubule | 1625 |
| ATP hydrolysis | $\approx 20\,k_BT$ |
| Cytosolic Ca²⁺ resting / stores | ~100 nM · 1–2 mM (10,000-fold gradient) |
| cAMP diffusion coefficient | ~300 μm²/s |
| Nucleosome | 147 bp, ~200 bp repeat, ~6-fold compaction |
| Human genome length | 2.2 m diploid; nucleus ~6 μm |
| p53 half-life, normal / after damage | ~20 min · hours |
| Genes alternatively spliced | ~95 percent of multi-exon human genes |
| mRNA–protein correlation, genome-wide | $R^2 \approx 0.4$ |
| Human E1 / E2 / E3 counts | 2 · ~40 · **>600** |
| Reprogramming efficiency | 0.1–1 percent, over ~3 weeks |

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Four levels of protein structure; the fold is set by sequence | [biochemistry 1.3](../biochemistry/lessons/01-03-four-levels-protein-structure.md) |
| Folding funnel, chaperones, amyloid, marginal stability | [biochemistry 1.4](../biochemistry/lessons/01-04-the-folding-problem.md) |
| Enzyme catalysis, $k_{\text{cat}}$, $K_M$, saturation | [biochemistry 2.2](../biochemistry/lessons/02-02-michaelis-menten-kinetics.md) |
| Allostery and cooperative binding, the Hill equation's origin | [biochemistry 2.4](../biochemistry/lessons/02-04-allosteric-regulation-metabolic-control.md) · [biophysics 2.4](../biophysics/lessons/02-04-cooperativity-allostery.md) |
| Bilayer self-assembly, fluidity, $\Delta G$ of transport, pumps and symporters | [biochemistry 4.3](../biochemistry/lessons/04-03-membranes-membrane-transport.md) |
| Membrane bending modulus and mechanics | [biophysics 3.5](../biophysics/lessons/03-05-membrane-mechanics.md) |
| Nernst and Goldman equations, resting and action potentials | [biophysics 4.4](../biophysics/lessons/04-04-membrane-potentials-nernst-goldman.md) · [biophysics 4.5](../biophysics/lessons/04-05-excitable-membranes-action-potential.md) |
| How a motor rectifies thermal noise into a step (the ratchet) | [biophysics 4.3](../biophysics/lessons/04-03-molecular-motors-ratchet.md) |
| $k_BT$ as the ruler of the cell; Boltzmann two-state occupancy | [biophysics 1.1](../biophysics/lessons/01-01-kbt-ruler-scales.md) · [biophysics 2.2](../biophysics/lessons/02-02-boltzmann-two-state.md) |
| Ligand binding, $K_d$, the Langmuir isotherm | [biophysics 2.3](../biophysics/lessons/02-03-ligand-binding-occupancy.md) |
| Diffusion, Fick's laws, the $x^2 = 2Dt$ scaling | [biophysics 1.3](../biophysics/lessons/01-03-diffusion-ficks-laws.md) |
| Persistence length and the worm-like chain | [biophysics 3.2](../biophysics/lessons/03-02-persistence-length-wlc.md) |
| DNA and RNA structure, base pairing, grooves, melting | [biochemistry 4.4](../biochemistry/lessons/04-04-nucleic-acids-dna-rna-structure.md) · [general-biology 3.3](../general-biology/lessons/03-03-dna-structure-replication.md) |
| The genetic code, codons, reading frame, semiconservative replication | [biochemistry 4.5](../biochemistry/lessons/04-05-flow-of-genetic-information.md) · [general-biology 3.4](../general-biology/lessons/03-04-central-dogma.md) |
| Cell-cycle phases, mitosis and meiosis, the organelle inventory | [general-biology 2.4](../general-biology/lessons/02-04-the-cell-cycle.md) · [general-biology 2.5](../general-biology/lessons/02-05-mitosis-meiosis.md) · [general-biology 1.4](../general-biology/lessons/01-04-tour-of-the-organelles.md) |
| Mutation classes: missense, nonsense, frameshift, mutation rate | [genetics 3.2](../genetics/lessons/03-02-mutation.md) |
| Which repair pathway fixes which lesion (the chemistry) | [genetics 3.3](../genetics/lessons/03-03-dna-repair.md) |
| Operon logic, cis versus trans, merodiploid analysis | [genetics 3.4](../genetics/lessons/03-04-prokaryotic-regulation-operon.md) |
| Imprinting, X-inactivation, parent-of-origin inheritance patterns | [genetics 3.5](../genetics/lessons/03-05-eukaryotic-regulatory-logic-epigenetics.md) |
| Meiotic recombination and crossing over as map distance | [genetics 2.2](../genetics/lessons/02-02-linkage-recombination.md) |
| Pedigrees, dominance, two-hit inheritance patterns | [genetics 1.4](../genetics/lessons/01-04-pedigrees-human-inheritance.md) |
| Saddle-node bifurcation, limit cycles, fast–slow systems, attractors | [dynamical-systems 3.1](../dynamical-systems/lessons/03-01-saddle-node-transcritical.md) · [dynamical-systems 2.3](../dynamical-systems/lessons/02-03-limit-cycles.md) · [dynamical-systems 1.4](../dynamical-systems/lessons/01-04-linearization-hartman-grobman.md) |
| Arrhenius / transition-state rates over a barrier | [physical-chemistry 3.4](../physical-chemistry/lessons/03-04-arrhenius-transition-state-theory.md) |
| Fitness, selection, and populations evolving under pressure | [evolution-ecology 1.1](../evolution-ecology/lessons/01-01-fitness-quantitative.md) |
| Poisson distribution, exponential decay, Markov chains | [prob-stat-refresher](../prob-stat-refresher/syllabus.md) · [probability-theory](../probability-theory/syllabus.md) |

## Pitfalls

### Compartments and structure

- Crowding is *thermodynamic* (favours compact states) and also slows diffusion — a crowded cell binds tighter **and** mixes slower; these are different effects. *([1.1](lessons/01-01-crowded-cell-condensates.md))*
- A condensate has no wall; contents exchange in seconds, and above $c_{\text{sat}}$ adding protein makes more droplets rather than raising the free concentration. *([1.1](lessons/01-01-crowded-cell-condensates.md))*
- "Dynamic" means filaments live for *minutes* — a spindle is a standing wave, not a structure. *([1.2](lessons/01-02-cytoskeleton-three-filaments.md))*
- Plus and minus are fixed chemical identities, not descriptions of current behaviour; a shrinking plus end is still the plus end. Intermediate filaments have neither, which is why no motor walks on them. *([1.2](lessons/01-02-cytoskeleton-three-filaments.md))*
- Treadmilling (steady flux, constant length) is not dynamic instability (bistable switching). *([1.2](lessons/01-02-cytoskeleton-three-filaments.md))*
- Compartment identity is chemical and dynamic — a Rab, a lipid composition, a SNARE set — not structural. Blocking the *return* line destroys the compartment, not just the cargo. *([1.4](lessons/01-04-endomembrane-trafficking.md))*

### Signalling

- Run length is $v\tau$: a faster motor does not go further; distance is bought with grip. *([1.3](lessons/01-03-motors-cargo-logistics.md))*
- A mutation in a motor breaks everything it carries; cargo-selective defects come from **adaptors**. *([1.3](lessons/01-03-motors-cargo-logistics.md))*
- Secretion is the **default**; every other destination needs a signal, and a signal is worthless without its receptor. *([1.4](lessons/01-04-endomembrane-trafficking.md))*
- $K_d$ is potency (at what concentration), not efficacy (how much). Receptor number sets the maximum; $K_d$ sets the position. *([2.1](lessons/02-01-receptors-reading-outside-world.md))*
- A ligand has no intrinsic meaning — the receiver's receptor and downstream wiring assign it. *([2.1](lessons/02-01-receptors-reading-outside-world.md))*
- Count *catalytic* steps, not pathway steps; a stoichiometric step like 4 cAMP per PKA **divides** the gain. *([2.2](lessons/02-02-second-messengers-amplification.md))*
- Most signalling pathologies are broken **timers** (GAPs, phosphodiesterases, internalization), not broken switches. *([2.2](lessons/02-02-second-messengers-amplification.md))*
- A dose–response sharper than 81-fold per decade is evidence of downstream *processing*, not of a cooperative receptor. *([2.1](lessons/02-01-receptors-reading-outside-world.md), [2.3](lessons/02-03-kinase-cascades-switch.md))*
- A scaffold raises specificity and typically **lowers** gain; overexpressing one inhibits signalling by splitting the components. *([2.3](lessons/02-03-kinase-cascades-switch.md))*
- Phosphorylation activates some targets and inhibits others — there is no rule, and the same enzyme carries both kinds of site. *([2.3](lessons/02-03-kinase-cascades-switch.md))*
- Negative feedback *speeds up* the approach to steady state; slowness comes from delay, and delay plus negative feedback gives oscillation. *([2.4](lessons/02-04-circuits-feedback-adaptation.md))*
- A steep response is not bistability — test for **hysteresis**. *([2.4](lessons/02-04-circuits-feedback-adaptation.md), [3.1](lessons/03-01-cell-cycle-engine-irreversibility.md))*

### Cycle, damage and cancer

- CDK **protein** is roughly constant; cyclin oscillates and activity follows. Measuring CDK abundance tells you nothing about the cycle. *([3.1](lessons/03-01-cell-cycle-engine-irreversibility.md))*
- Checkpoints are brakes and are dispensable in an unperturbed cell; the primary control is the oscillator itself. *([3.1](lessons/03-01-cell-cycle-engine-irreversibility.md))*
- "Irreversible" here means the reactant no longer exists, not that a barrier is high. Checkpoints therefore **inhibit** rather than destroy — destruction is the mechanism of progression. *([3.1](lessons/03-01-cell-cycle-engine-irreversibility.md), [3.2](lessons/03-02-dna-damage-response.md))*
- p53 is not transcriptionally induced by damage; its **destruction** changes. Looking for mRNA induction misses the mechanism entirely. *([3.2](lessons/03-02-dna-damage-response.md))*
- Arrest and apoptosis are the same pathway at different doses and durations — a dose meter, not a switchboard. *([3.2](lessons/03-02-dna-damage-response.md))*
- Apoptotic machinery is constitutively present and restrained; p53 cuts a leash rather than building a weapon. *([3.2](lessons/03-02-dna-damage-response.md))*
- NHEJ is the **dominant** pathway in humans, not a defective backup — most cells are in G1 and have no alternative. *([3.3](lessons/03-03-double-strand-breaks-hr-nhej.md))*
- HR uses the **sister chromatid**, never the homologue; using the homologue gives loss of heterozygosity. *([3.3](lessons/03-03-double-strand-breaks-hr-nhej.md))*
- A PARP inhibitor targets nothing tumour-specific — the genotype supplies the selectivity. *([3.3](lessons/03-03-double-strand-breaks-hr-nhej.md))*
- Cancer is not fast division; it is division without permission. A single activated oncogene usually triggers **senescence**. *([3.4](lessons/03-04-cancer-failure-of-control.md))*
- Resistance was pre-existing — the drug selected it, and sequential therapy converts a two-simultaneous-mutation requirement into two easy sequential ones. *([3.4](lessons/03-04-cancer-failure-of-control.md))*

### Expression

- Histone **methylation** has no charge effect and no universal meaning — H3K4me3 activates, H3K9me3 silences. Only acetylation acts physically. *([4.1](lessons/04-01-chromatin-packaging-regulation.md))*
- Nucleosomes raise a free-energy barrier, they do not lock DNA away; pioneer factors bind through them. *([4.1](lessons/04-01-chromatin-packaging-regulation.md))*
- Chromatin marks are not copied by a template — they are restored by reader–writer feedback, so inheritance is high-fidelity but imperfect. *([4.1](lessons/04-01-chromatin-packaging-regulation.md))*
- Eukaryotic regulation is not an operon; the regulated step is usually **pause release**, and enhancers act through loops, so the nearest gene is frequently not the target. *([4.2](lessons/04-02-eukaryotic-transcription-machine.md))*
- Two genes with identical mean expression can differ five-fold in noise — bulk RNA-seq cannot tell them apart. *([4.2](lessons/04-02-eukaryotic-transcription-machine.md))*
- RNA processing is **co-transcriptional**, ordered by the changing marks on the Pol II tail. *([4.3](lessons/04-03-rna-processing-mrna-life-cycle.md))*
- A premature stop usually gives **no protein**, not a truncated one — NMD destroys the message first, and whether it fires decides null versus dominant-negative. *([4.3](lessons/04-03-rna-processing-mrna-life-cycle.md))*
- mRNA level is production over decay, and so is protein level; a two-fold rise is as likely stabilization as induction. Together this is why transcriptomes explain under half of proteomes. *([4.3](lessons/04-03-rna-processing-mrna-life-cycle.md), [4.4](lessons/04-04-protein-quality-control-degradation.md))*
- Ubiquitin does not mean "destroy" — only K48 does. *([4.4](lessons/04-04-protein-quality-control-degradation.md))*
- In a dividing cell, dilution removes stable proteins faster than proteolysis; no protein's effective half-life can exceed the cell cycle. *([4.4](lessons/04-04-protein-quality-control-degradation.md))*
- Differentiation removes no genetic information — identity is a network and chromatin state, and both are reversible in principle. *([4.5](lessons/04-05-stem-cells-differentiation-reprogramming.md))*
- A master regulator is sufficient only where the target chromatin permits it; "stem cell" is a behaviour, often conferred by the niche. *([4.5](lessons/04-05-stem-cells-differentiation-reprogramming.md))*
- Epigenetic stability is a barrier, not a wall, and escape time is *exponential* in its height — so a modest reduction is dangerous out of proportion to its size. *([4.5](lessons/04-05-stem-cells-differentiation-reprogramming.md))*
