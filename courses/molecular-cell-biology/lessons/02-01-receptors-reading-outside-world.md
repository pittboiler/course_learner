# Molecular & Cell Biology · Lesson 2.1: Receptors — reading the outside world

> ⏱ ~15 min · Module 2: Signalling — How a Cell Decides · Builds on: [1.4](01-04-endomembrane-trafficking.md), [biophysics 2.3 (ligand binding & occupancy)](../../biophysics/lessons/02-03-ligand-binding-occupancy.md) · Unlocks: 2.2 (second messengers)

## Why this matters

A cell in your body is blind, deaf, and sealed inside a bilayer that almost nothing crosses. Everything it knows about the outside world — that food is available, that a neighbour was injured, that it is time to divide or to die — arrives as a molecule binding a protein on its surface.

That is a hard engineering problem, because the signals are *dilute*. A hormone circulates at $10^{-10}$ M. The cell must detect it against a background of a hundred million other molecules, distinguish it from close chemical relatives, and respond — then stop responding when the signal persists. This lesson is about the reading step; the next three are about what the cell does with what it read.

## The idea

**Four receptor families cover almost everything**, and they differ in what the ligand's arrival physically *does*:

| Family | Ligand does | Immediate output | Timescale | Example |
|---|---|---|---|---|
| **Ion-channel-coupled** | opens a pore | ion flux, voltage change | microseconds–ms | acetylcholine receptor at the neuromuscular junction |
| **G-protein-coupled (GPCR)** | shifts a 7-transmembrane helix bundle | activates a heterotrimeric G protein | ms–s | adrenaline receptor, rhodopsin, most of your senses |
| **Receptor tyrosine kinase (RTK)** | forces two receptors together | trans-autophosphorylation, a docking platform | seconds–min | insulin receptor, growth-factor receptors |
| **Nuclear (intracellular)** | crosses the membrane and binds inside | receptor becomes a transcription factor | **hours** | steroid and thyroid hormones |

**The mechanism that recurs is dimerization.** An RTK is a kinase that cannot phosphorylate itself while alone. A bivalent ligand binds two receptors and holds them together; now each phosphorylates the other. The ligand's role is not to *activate* anything chemically — it is to change a **local concentration**. Two kinases held at nanometre separation behave as though they were at molar concentration relative to each other. **Proximity is the signal.**

**Then the phosphotyrosines become an address list.** Each phosphorylated tyrosine, in the context of its neighbouring residues, is a docking site for a specific cytosolic protein carrying an **SH2 domain**. The activated receptor is a switchboard: which proteins get recruited, and therefore which downstream pathways fire, is written into which tyrosines are phosphorylated.

**And the shut-off is built in.** A receptor with a bound ligand is marked, packaged into a clathrin-coated pit ([1.4](01-04-endomembrane-trafficking.md)), and pulled inside. Some receptors recycle; some go to the lysosome and are destroyed. **Endocytosis is not housekeeping — it is the off switch**, and it explains why a sustained signal produces a *transient* response.

## The formal version

**Occupancy.** For a receptor R binding ligand L with dissociation constant $K_d$, the fraction of receptors occupied at ligand concentration $[\mathrm{L}]$ is the Langmuir isotherm from [biophysics 2.3](../../biophysics/lessons/02-03-ligand-binding-occupancy.md):

$$\boxed{\;\theta = \frac{[\mathrm{L}]}{K_d + [\mathrm{L}]}\;}$$

*In words: half the receptors are occupied when the ligand concentration equals $K_d$, and you need a tenfold change in concentration to move from 9 percent to 50 percent occupancy.*

Two consequences worth internalizing:

- **A single-site receptor is a poor detector of change.** Going from 10 percent to 90 percent occupancy takes an **81-fold** change in ligand. Biology routinely needs sharper responses than that, which is why the sharpening happens *downstream* ([2.3](02-03-kinase-cascades-switch.md)).
- **Sensitivity is set by $K_d$, not by receptor number.** Receptor number sets the *size* of the maximal response, not the concentration at which the response is half-maximal. A cell tunes what it can hear by changing $K_d$ (different receptor isoform) and how loudly it answers by changing receptor count.

**Spare receptors.** In many systems the maximal biological response is reached when only a small fraction of receptors are occupied, because downstream amplification saturates first. Define the fraction of receptors giving half-maximal *response*, $\mathrm{EC}_{50}$, versus half-maximal *binding*, $K_d$. When amplification is large,

$$\mathrm{EC}_{50} \ll K_d ,$$

*in words: the cell responds fully to a ligand concentration far below the one that would fill its receptors.* Spare receptors buy sensitivity at low ligand and a reserve against receptor loss.

**Specificity is a shape problem, plus a context problem.** Adrenaline binds both β-adrenergic receptors (which raise cAMP) and α₂ receptors (which lower it). Same ligand, opposite outcomes, because the *receptor* — not the ligand — determines which G protein is engaged. **A signal has no intrinsic meaning; meaning is assigned by the receiver.** This is the single most important idea in signalling and the reason the same growth factor makes one cell divide and another differentiate.

## Picture

![Four receptor families side by side: an ion-channel-coupled receptor whose pore opens on ligand binding; a seven-transmembrane GPCR handing off to a heterotrimeric G protein; a receptor tyrosine kinase dimerized by a bivalent ligand and trans-autophosphorylating, with SH2-domain proteins docking on specific phosphotyrosines; and a nuclear receptor whose lipophilic ligand crosses the membrane so the complex enters the nucleus. Below, a binding curve of fractional occupancy against log ligand concentration marks the K-d at half occupancy and shows the 81-fold span from 10 to 90 percent.](assets/02-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — occupancy and the 81-fold rule).** A receptor has $K_d = 2$ nM. (a) What fraction is occupied at 0.5 nM, 2 nM, and 20 nM? (b) What concentration range spans 10 to 90 percent occupancy?

(a) $$\theta(0.5) = \frac{0.5}{2+0.5} = 0.20, \qquad \theta(2) = \frac{2}{4} = 0.50, \qquad \theta(20) = \frac{20}{22} = 0.91.$$

(b) Invert the isotherm: $[\mathrm{L}] = K_d\,\theta/(1-\theta)$.

$$\theta = 0.1 \Rightarrow [\mathrm{L}] = 2\left(\tfrac{0.1}{0.9}\right) = 0.22\ \mathrm{nM}, \qquad \theta = 0.9 \Rightarrow [\mathrm{L}] = 2\left(\tfrac{0.9}{0.1}\right) = 18\ \mathrm{nM}.$$

$$\frac{18}{0.22} = \mathbf{81}.$$

**This 81 is universal** — it does not depend on $K_d$ at all, only on the fact that binding is a single-site equilibrium. Any process whose dose–response is *sharper* than 81-fold per decade of ligand is telling you that something beyond simple binding is happening.

**Example 2 (why you'd care — spare receptors and why blocking most of them does nothing).** A muscle cell has $10^5$ acetylcholine receptors; contraction is maximal when $10^4$ of them open. A drug irreversibly blocks receptors. (a) What fraction must be blocked before the maximal response starts to fall? (b) What happens to the $\mathrm{EC}_{50}$ as blockade increases from 0 toward that threshold?

(a) The response saturates at $10^4$ open receptors, so the cell can lose everything above that reserve:

$$\text{blocked fraction tolerated} = 1 - \frac{10^4}{10^5} = \mathbf{90\ \text{percent}}.$$

Up to 90 percent blockade, the *maximal* response is unchanged.

(b) It **rises** — the curve shifts right. With fewer receptors available, a higher ligand concentration is needed to occupy the $10^4$ that must open. So the pharmacological signature of partial irreversible blockade is a **rightward shift with no loss of maximum**, converting to a **loss of maximum** only once the reserve is exhausted.

**Why this matters clinically.** It explains myasthenia gravis, in which autoantibodies destroy acetylcholine receptors: patients are asymptomatic until the reserve is gone, then decline steeply. It also explains why the therapy is an acetylcholinesterase inhibitor — raising ligand concentration slides the cell back along the shifted dose–response curve, exactly compensating a rightward shift.

## Watch out

- **You might think a ligand "activates" its receptor by supplying energy.** It supplies *binding energy* that stabilizes a conformation or holds two proteins together. The ATP is spent downstream. A ligand is an allosteric effector, not a fuel.
- **You might read $K_d$ as "how strong the response is."** $K_d$ sets *at what concentration* the cell responds; receptor number and downstream gain set *how much*. Confusing potency with efficacy is the most common error in reading a dose–response curve.
- **You might expect one ligand to mean one thing.** It means whatever the receiving cell's receptor and downstream wiring make it mean — the same adrenaline speeds your heart and relaxes your bronchi through different receptors on different cells.
- **You might treat receptor internalization as degradation.** Some internalized receptors keep signalling *from the endosome*, and with different downstream consequences than at the surface. Location is part of the message.

## One-liner

> A receptor converts a dilute outside molecule into a change in local geometry — a pore, a G protein, two kinases held together — and the meaning of that signal is assigned entirely by the receiver, not by the ligand.

## Problems

**P1 (🟢)** A hormone receptor has $K_d = 5$ nM. (a) Compute fractional occupancy at 1, 5, and 50 nM. (b) At what concentration is occupancy 75 percent?

**P2 (🟡)** Two cell types express receptors for the same growth factor. Cell A divides in response; cell B differentiates and stops dividing. Both receptors bind the ligand with identical $K_d$. Give two distinct mechanisms, at the level of the receptor and its immediate partners, that could produce opposite outcomes from an identical input — and for each, name one experiment that would test it.

**P3 (🔴, bridges to pharmacology and to 2.3)** A cell's response to a ligand is measured and found to go from 10 percent to 90 percent of maximum over only a **9-fold** change in ligand concentration. (a) Show that this is impossible for a single-site binding equilibrium. (b) The Hill equation generalizes occupancy to $\theta = [\mathrm{L}]^n/(K^n + [\mathrm{L}]^n)$. Find the Hill coefficient $n$ consistent with a 9-fold span. (c) Name two mechanisms downstream of a non-cooperative receptor that could produce this apparent cooperativity without the receptor itself binding more than one ligand.

<details>
<summary>Solutions</summary>

**P1 (a)** $$\theta(1) = \frac{1}{6} = 0.167, \qquad \theta(5) = \frac{5}{10} = 0.500, \qquad \theta(50) = \frac{50}{55} = 0.909.$$

**(b)** $$[\mathrm{L}] = K_d\frac{\theta}{1-\theta} = 5\left(\frac{0.75}{0.25}\right) = \mathbf{15\ \mathrm{nM}} = 3K_d.$$

(Worth remembering: occupancy is 50 percent at $K_d$, 75 percent at $3K_d$, 90 percent at $9K_d$.)

**P2** Two mechanisms, each testable:

1. **Different receptor isoforms with different phosphotyrosine sites.** Identical ligand affinity says nothing about the cytoplasmic tail. If cell B's isoform lacks the tyrosine that docks the adaptor feeding the proliferation pathway, but retains one docking a differentiation-promoting phosphatase, the same binding event recruits a different set of proteins. *Test:* sequence or immunoprecipitate the receptor from each cell type and compare which SH2-domain proteins co-purify after stimulation.
2. **Different downstream context — signal duration.** The same ligand can produce *transient* kinase activation in one cell and *sustained* activation in the other, depending on the negative-feedback phosphatases and the rate of receptor internalization each cell expresses; transient versus sustained ERK activity is the classic determinant of proliferate-versus-differentiate ([2.4](02-04-circuits-feedback-adaptation.md)). *Test:* time-course western blot for phospho-ERK in both cell types over 0–6 hours, and check whether forcing sustained signalling in cell A (e.g. by inhibiting the feedback phosphatase) switches it to differentiation.

A third acceptable answer: differing expression of the transcription factors that read the pathway's output, so the same signal lands on a different set of accessible promoters ([4.1](04-01-chromatin-packaging-regulation.md)).

**P3 (a)** For single-site binding the 10-to-90 span is fixed at 81-fold, independent of $K_d$ (Example 1). A 9-fold span is nine times sharper than the tightest a simple equilibrium can be, so no choice of $K_d$ or receptor number can produce it.

**(b)** From the Hill equation, $\theta/(1-\theta) = ([\mathrm{L}]/K)^n$. At $\theta = 0.9$ the ratio is 9; at $\theta = 0.1$ it is $1/9$. Dividing:

$$\left(\frac{[\mathrm{L}]_{90}}{[\mathrm{L}]_{10}}\right)^{n} = 81 \quad\Longrightarrow\quad 9^{\,n} = 81 \quad\Longrightarrow\quad \mathbf{n = 2}.$$

(The general rule: the 10-to-90 span is $81^{1/n}$.)

**(c)** Two of:
- **A multistep cascade.** If two sequential steps each respond in a graded way, their outputs multiply, and the composite dose–response is sharper than either — the mechanism behind kinase-cascade ultrasensitivity ([2.3](02-03-kinase-cascades-switch.md)).
- **Zero-order ultrasensitivity.** When the kinase and the phosphatase acting on a substrate are both operating near saturation, the fraction of phosphorylated substrate switches steeply with a small change in their ratio (Goldbeter–Koshland).
- **Molecular titration / a stoichiometric inhibitor.** A downstream activator sequestered by an inhibitor produces no output until the inhibitor is titrated out, then rises abruptly.
- **Positive feedback** downstream of the receptor ([2.4](02-04-circuits-feedback-adaptation.md)).

The general lesson: **a sharp dose–response is evidence of processing, not of a sharper receptor.**

</details>

## Flashback

**From Lesson 1.4 (sorting signals and the default route):** A researcher engineers a normally-secreted enzyme by appending the sequence KDEL to its C-terminus. (a) Where does the enzyme accumulate, and by what route does it get there? (b) The same construct is expressed in a mutant cell line lacking the KDEL receptor — predict the outcome. (c) A second construct instead has its N-terminal signal sequence deleted. Where does *that* protein end up?

<details>
<summary>Solution</summary>

**(a)** In the **ER lumen**. It is translocated into the ER normally, escapes forward to the Golgi with bulk flow, and is there bound by the KDEL receptor and returned to the ER in **COPI** vesicles. Its steady-state ER localization is maintained by continuous retrieval, not by being held in place.

**(b)** With no receptor to read the address, the KDEL tag does nothing. The enzyme follows the default route and is **secreted** — indistinguishable from the untagged original. An address without a reader is not an address.

**(c)** With no signal sequence there is no SRP recognition, so the ribosome never docks at the ER and translation completes in the cytosol. The protein ends up **free in the cytosol** — and typically misfolded or inactive, since it will not receive its disulfide bonds or glycosylation.

</details>

## Connections

- **Backward:** the Langmuir isotherm and $K_d$ from [biophysics 2.3](../../biophysics/lessons/02-03-ligand-binding-occupancy.md); clathrin-mediated endocytosis from [1.4](01-04-endomembrane-trafficking.md), which is how signalling stops.
- **Forward:** [2.2](02-02-second-messengers-amplification.md) takes the GPCR branch and [2.3](02-03-kinase-cascades-switch.md) the RTK branch; both explain how an 81-fold-per-decade input becomes a switch.
- **Sideways:** the Hill coefficient here is the same object as cooperativity in haemoglobin ([biochemistry 1.5](../../biochemistry/lessons/01-05-oxygen-binding-myoglobin-hemoglobin.md)) and in [biophysics 2.4](../../biophysics/lessons/02-04-cooperativity-allostery.md) — one equation, three contexts.
