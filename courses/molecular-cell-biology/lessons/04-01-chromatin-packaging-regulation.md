# Molecular & Cell Biology · Lesson 4.1: Chromatin — packaging as regulation

> ⏱ ~15 min · Module 4: Expression Control & Cell Identity · Builds on: [3.4](03-04-cancer-failure-of-control.md), [biochemistry 4.4](../../biochemistry/lessons/04-04-nucleic-acids-dna-rna-structure.md) · Unlocks: 4.2 (the transcription machine)

## Why this matters

Two metres of DNA fit into a nucleus six micrometres across. That is a packing problem with a compaction ratio of about 10,000, and solving it creates a second problem: **packed DNA cannot be read.**

The cell turned the second problem into an opportunity. Rather than packaging uniformly and unpacking on demand, it packages *differentially* — and the packaging state becomes a layer of regulation that sits *above* the sequence. A liver cell and a neuron have identical genomes and different chromatin, and that difference is most of what makes them different cells. This is the physical substrate of everything in the rest of this module.

## The idea

**The nucleosome is the unit.** 147 base pairs of DNA wrapped 1.65 times around an octamer of histone proteins — two each of H2A, H2B, H3, H4 — with a stretch of linker DNA to the next one. Beads on a string, roughly one nucleosome every 200 bp. That alone is a compaction of about 6-fold; higher-order folding and loop domains supply the rest.

**Why DNA wraps at all.** DNA is a stiff, uniformly negatively-charged polymer ([biophysics 3.2](../../biophysics/lessons/03-02-persistence-length-wlc.md)); histones are small and unusually rich in lysine and arginine, so they carry a large positive charge. Wrapping is electrostatically favourable and pays for the bending. **The interaction is sequence-independent** — which is exactly right for a packaging protein, and which means histones cannot be the thing that decides *which* genes are on.

**The histone tails are the decision surface.** Each histone has an unstructured N-terminal tail sticking out of the nucleosome, and those tails carry chemical marks: acetylation, methylation, phosphorylation, ubiquitination. The logic is:

- **Writers** add marks (histone acetyltransferases, methyltransferases).
- **Readers** are protein domains that bind specific marks (bromodomains read acetyl; chromodomains read certain methyls) and recruit further machinery.
- **Erasers** remove them (histone deacetylases, demethylases).

*In words: the tails are a post-it note system on the packaging, written by one set of enzymes, read by another, and erasable.*

**Acetylation is the clearest case and the easiest to reason about.** Acetylating a lysine removes its positive charge. Less positive histone means weaker grip on negative DNA means looser chromatin — **and** the acetyl mark is itself read by bromodomain proteins that recruit the transcription machinery. So acetylation acts twice, physically and informationally, in the same direction. Histone acetyltransferases are coactivators; deacetylases are corepressors; and HDAC inhibitors are approved cancer drugs.

**Methylation is not.** Methylating a lysine does *not* change its charge, and the effect depends entirely on **which** lysine: H3K4me3 marks active promoters, while H3K27me3 and H3K9me3 mark repressed and heterochromatic regions. **Methylation is pure information, read by readers, with no direct physical consequence** — which is why "histone methylation represses genes" is a half-truth that will lead you astray.

**Remodellers do the mechanical work.** ATP-dependent complexes (SWI/SNF and relatives) slide, eject, or exchange nucleosomes. Marks say *what should happen*; remodellers *make it happen*, and they burn ATP to do it. Note that **SWI/SNF subunits are mutated in roughly 20 percent of all human cancers** — a striking number for machinery that touches no growth-signalling gene directly, and a direct sequel to [3.4](03-04-cancer-failure-of-control.md)'s point that a tumour suppressor can be silenced rather than mutated.

## The formal version

**Compaction arithmetic.** Human diploid genome: $6.4\times10^{9}$ bp at 0.34 nm rise per bp:

$$L = 6.4\times10^{9} \times 0.34\ \mathrm{nm} = 2.2\times10^{9}\ \mathrm{nm} = \mathbf{2.2\ \mathrm{m}}.$$

A nucleus of diameter 6 μm gives a linear packing ratio of

$$\frac{2.2\ \mathrm{m}}{6\times10^{-6}\ \mathrm{m}} = 3.6\times10^{5},$$

though the meaningful figure is volumetric and organized hierarchically: nucleosomes (×6), higher-order fibre and loop domains (×~40), and mitotic condensation (×~250 further).

**Nucleosome occupancy as a competition.** Whether a site is accessible is a competition between the nucleosome and the transcription factor for the same DNA. Model it as two states with free energies $G_{\text{nuc}}$ and $G_{\text{TF}}$; the fraction of time the site is accessible is a Boltzmann factor ([biophysics 2.2](../../biophysics/lessons/02-02-boltzmann-two-state.md)):

$$P_{\text{accessible}} = \frac{1}{1 + e^{-\Delta G/k_BT}}, \qquad \Delta G = G_{\text{nuc}} - G_{\text{open}}.$$

*In words: nucleosomes do not lock DNA away absolutely; they raise the free-energy cost of exposing it, and a factor that binds tightly enough can still win.* This is why **pioneer factors** exist — transcription factors that can bind their site *within* a nucleosome and initiate opening — and why they are the ones used to establish new cell identities ([4.5](04-05-stem-cells-differentiation-reprogramming.md)).

**Two chromatin states, and why they are self-propagating.**

| | Euchromatin | Heterochromatin |
|---|---|---|
| Compaction | open | dense |
| Marks | H3K4me3, H3K27ac, acetylation | H3K9me3 (constitutive), H3K27me3 (facultative) |
| Replication timing | early | late |
| Mutation rate | lower | **higher** |
| Transcription | permitted | silenced |

The crucial property is **self-propagation**. HP1 binds H3K9me3 *and* recruits the methyltransferase that writes H3K9me3 on neighbouring nucleosomes. That is a **positive feedback loop in physical space**: a mark recruits the writer of more of itself. By [2.4](02-04-circuits-feedback-adaptation.md) that gives a bistable system — a domain is either silenced or not — and the boundary spreads until stopped by an insulator element.

**And it survives replication.** At the fork, parental histones are distributed to both daughter strands, so each daughter inherits roughly half the parental marks. The reader–writer feedback then restores the full pattern on the new histones. *In words: the mark is copied not by a template-reading polymerase but by a self-reinforcing loop, which is why epigenetic inheritance is high-fidelity but not perfect.*

**The mutation-rate note is worth pausing on.** Heterochromatin has a measurably higher somatic mutation rate — partly because it replicates late, when nucleotide pools are depleted and repair capacity is committed elsewhere, and partly because nucleotide-excision repair works less efficiently on packed DNA. This is exactly the varying background rate that makes driver-versus-passenger calling hard in [3.4](03-04-cancer-failure-of-control.md).

## Picture

![Left: DNA wrapping 1.65 turns around a histone octamer to form a nucleosome, with the four core histones labelled and unstructured N-terminal tails protruding, then beads on a string folding into a compact fibre and finally into a loop domain. Centre: the writer, reader, eraser cycle on a histone tail, with acetylation shown removing positive charge and loosening DNA while methylation is shown as charge-neutral pure information whose meaning depends on which lysine carries it. Right: the self-propagating heterochromatin loop in which HP1 binds H3K9me3 and recruits the methyltransferase that writes the same mark on the neighbouring nucleosome, spreading until an insulator stops it.](assets/04-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — nucleosome occupancy from a free-energy difference).** A transcription-factor binding site is occluded by a nucleosome. The free-energy cost of unwrapping enough DNA to expose the site is $\Delta G_{\text{unwrap}} = 4\,k_BT$. (a) What fraction of the time is the site accessible? (b) Acetylation of the underlying histones lowers the cost to $1.5\,k_BT$. Recompute. (c) By what factor has the factor's effective on-rate increased?

(a) $$P_{\text{acc}} = \frac{e^{-4}}{1 + e^{-4}} = \frac{0.0183}{1.0183} = \mathbf{0.018}, \quad \text{about 1.8 percent of the time}.$$

(b) $$P_{\text{acc}} = \frac{e^{-1.5}}{1 + e^{-1.5}} = \frac{0.2231}{1.2231} = \mathbf{0.182}, \quad \text{about 18 percent}.$$

(c) $$\frac{0.182}{0.018} = \mathbf{10\times}.$$

**Read the magnitude.** A change of $2.5\,k_BT$ — roughly the energy of a couple of hydrogen bonds, and well within what removing four positive charges can supply — produces a tenfold change in accessibility and therefore a tenfold change in the rate at which a factor finds its site. **Chromatin regulation does not need large energies; it needs energies comparable to $k_BT$, because that is where a Boltzmann factor has leverage** ([biophysics 1.1](../../biophysics/lessons/01-01-kbt-ruler-scales.md)).

**Example 2 (why you'd care — silencing a tumour suppressor without mutating it).** In many colorectal cancers, the mismatch-repair gene *MLH1* is intact in sequence but not expressed: its promoter is densely methylated (on the DNA, at CpG dinucleotides) and the surrounding chromatin carries H3K9me3. (a) Explain how this achieves the same result as a mutation. (b) Why is this route *easier* for a tumour to acquire than two mutations? (c) What therapeutic opportunity does it create that a mutation would not?

(a) [3.4](03-04-cancer-failure-of-control.md) required two hits to eliminate a tumour suppressor. Epigenetic silencing supplies a "hit" that changes no base: the promoter is packaged into heterochromatin, the transcription machinery of [4.2](04-02-eukaryotic-transcription-machine.md) cannot assemble on it, and no MLH1 protein is made. The cell is functionally mismatch-repair deficient — a **caretaker** loss, with its mutation rate up roughly 100-fold and the multiplicative consequences of [3.4](03-04-cancer-failure-of-control.md).

(b) Because the silenced state is **self-propagating and heritable** but does not require a rare chemical event at a specific base. A stochastic fluctuation that nucleates enough H3K9me3 at the promoter will be amplified and locked in by the reader–writer feedback loop, and DNA methylation is then copied faithfully at each replication by a maintenance methyltransferase that reads the hemimethylated CpG. **The cell has a mechanism for making states heritable, and a tumour can hijack it.** The per-cell-generation rate of epigenetic silencing is orders of magnitude higher than the point-mutation rate.

(c) **It is reversible.** A mutation deletes information; silencing merely hides it, and the gene is still there and still intact. DNA-methyltransferase inhibitors (azacitidine, decitabine) and HDAC inhibitors can re-express epigenetically silenced genes, and both classes are approved — azacitidine for myelodysplastic syndrome, several HDAC inhibitors for lymphomas. **This is the only category of cancer lesion that can be *undone* rather than worked around**, which is why the epigenetic layer attracts so much therapeutic attention despite its modest track record so far.

## Watch out

- **You might think histone methylation represses.** It depends entirely on the residue. H3K4me3 is the classic *active* promoter mark; H3K27me3 and H3K9me3 repress. Unlike acetylation, methylation has no direct physical effect at all — it is a label, and its meaning is whatever the reader that binds it does.
- **You might think nucleosomes block transcription factors absolutely.** They raise a free-energy barrier. A pioneer factor binds its site inside a nucleosome, and even ordinary factors win the competition when their site is strong and the nucleosome is marginally positioned.
- **You might expect chromatin state to be copied like DNA.** There is no template-reading polymerase for histone marks. Parental histones are split between daughters and the pattern is *restored* by reader–writer positive feedback — high fidelity, but a fundamentally different and less reliable mechanism than base pairing.
- **You might treat "epigenetic" as meaning "not genetic and therefore soft."** An epigenetically silenced tumour suppressor is exactly as silent as a deleted one, and the state is inherited through hundreds of cell divisions.

## One-liner

> Packaging is regulation: histone tails carry marks written, read and erased by enzymes, acetylation loosens DNA by neutralizing charge while methylation is pure information — and a mark that recruits its own writer becomes a heritable, self-propagating state.

## Problems

**P1 (🟢)** A binding site is occluded with an unwrapping cost of $3\,k_BT$. (a) What fraction of the time is it accessible? (b) A remodeller ejects the nucleosome entirely, taking the cost to $0$. What is the fold-increase in accessibility?

**P2 (🟡)** For each mark, state whether it is associated with active or repressed chromatin, and whether its effect is primarily *physical* (charge) or *informational* (read by a reader): (a) H3K27ac; (b) H3K4me3; (c) H3K9me3; (d) global histone hypoacetylation caused by an overactive HDAC. Then explain in two sentences why HDAC inhibitors are broadly active drugs while a hypothetical "H3K4 methyltransferase inhibitor" would be expected to have narrower effects.

**P3 (🔴, bridges to 2.4 and to 4.5)** Heterochromatin spreads because HP1 binds H3K9me3 and recruits the methyltransferase SUV39H1, which writes H3K9me3 on adjacent nucleosomes. (a) Identify the circuit motif and state, using [2.4](02-04-circuits-feedback-adaptation.md), what dynamic behaviour it produces. (b) Explain what an insulator element must do, mechanistically, to stop the spread — and why a *boundary* is needed at all rather than the spread simply petering out. (c) In *Drosophila*, position-effect variegation occurs when a gene is moved next to heterochromatin: individual cells either fully silence it or fully express it, and the choice is clonally inherited, producing a mottled eye. Explain this observation completely in terms of your answers to (a) and (b).

<details>
<summary>Solutions</summary>

**P1 (a)** $$P_{\text{acc}} = \frac{e^{-3}}{1+e^{-3}} = \frac{0.0498}{1.0498} = \mathbf{0.047}, \ \text{about 4.7 percent}.$$

**(b)** With $\Delta G = 0$ the two states are equally likely, $P_{\text{acc}} = 1/2$:

$$\frac{0.5}{0.047} = \mathbf{10.6\times}.$$

(Notice that even complete nucleosome ejection only gets you to 50 percent in this two-state model, because the "closed" state is now merely equally favourable — the model's ceiling. In a real cell, ejection plus a bound pioneer factor holds the site open far longer than this suggests.)

**P2**

| Mark | State | Effect type |
|---|---|---|
| (a) H3K27ac | **active** | **physical** (removes lysine's positive charge, loosening DNA) *and* informational (read by bromodomains) |
| (b) H3K4me3 | **active** | **informational** only — no charge change |
| (c) H3K9me3 | **repressed** | **informational** — read by HP1, which then recruits more writer |
| (d) global hypoacetylation | **repressed** | **physical** — histones retain full positive charge, grip DNA tightly |

**Why HDAC inhibitors are broad:** acetylation acts on every histone tail across the genome and works through charge as well as through readers, so inhibiting its removal loosens chromatin globally and de-represses a very wide set of genes (and, since HDACs also deacetylate non-histone proteins including p53 and tubulin, the effects reach beyond chromatin entirely). An H3K4 methyltransferase inhibitor would remove a purely informational mark at one specific residue, affecting only the genes whose readers depend on it — a narrower, more surgical, and probably better-tolerated intervention. **Breadth of effect tracks whether the mark works through bulk physics or through a specific reader.**

**P3 (a)** The motif is **positive feedback** — the product (H3K9me3) recruits the machinery that makes more of itself, here operating in physical space along the chromosome rather than in concentration. By [2.4](02-04-circuits-feedback-adaptation.md), positive feedback with a nonlinear step gives **bistability**: a region is either fully silenced or fully open, with no stable intermediate, and the state is maintained once established.

**(b)** An insulator must **break the feedback loop locally** — for example by recruiting a histone acetyltransferase that competes with the methyltransferase, by binding a protein (CTCF and cohesin) that physically blocks the propagating complex, or by anchoring the chromatin into a separate loop domain so the spreading front has nowhere adjacent to go.

**Why a boundary is needed:** because a self-reinforcing spread has no intrinsic stopping point. Each newly-marked nucleosome recruits the writer for the next one, so the process is self-sustaining rather than decaying — it will run until it hits something that stops it or runs out of chromosome. **Positive feedback does not peter out; that is what distinguishes it from diffusion.** Any genome that uses spreading silencing must therefore also encode explicit boundaries, and it does.

**(c)** Position-effect variegation is bistability plus stochastic initiation plus epigenetic inheritance, and each observation maps to one of those:

- **Individual cells are either fully on or fully off, never intermediate** → the spreading loop is **bistable** (part a). There is no stable partial state to occupy.
- **Which state a cell adopts is random** → in early development the spreading front stops at a **stochastically determined** position relative to the relocated gene, because the gene has been placed near a boundary rather than safely inside or outside a domain. Whether the front happens to engulf the promoter before the domain stabilizes is a coin flip.
- **The choice is clonally inherited, producing patches** → the mark is **restored after replication** by the same reader–writer feedback that established it (parental histones split between daughters, then the loop refills the pattern), so every descendant of a silenced cell is silenced and every descendant of an expressing cell expresses. The mottling is a map of the clones.

**And the diagnostic prediction:** mutating *Su(var)* genes — the writers and readers themselves — should shift the proportion of silenced patches, because it changes the gain of the feedback loop. It does, and that genetic screen is how HP1 and SUV39H1 were discovered in the first place.

</details>

## Flashback

**From Lesson 3.4 (multistage carcinogenesis and caretakers):** A cancer requires 5 rate-limiting driver events. (a) A caretaker lesion raises the per-division mutation rate 50-fold. By what factor does it raise the probability of completing the driver set, and state the general scaling. (b) The same caretaker gene is instead silenced epigenetically rather than mutated. Does the arithmetic change? (c) Using the age-incidence relation $I \propto t^{k-1}$, by what factor does incidence rise between ages 35 and 70 for this cancer?

<details>
<summary>Solution</summary>

**(a)** The probability of acquiring $k$ independent events scales as $\mu^{k}$, so

$$50^{5} = 3.1\times10^{8},$$

a rise of roughly **300 million-fold**. The general scaling: **a caretaker lesion raises cancer probability to the $k$-th power of the mutation-rate increase**, which is why caretakers are so disproportionately represented among hereditary cancer syndromes despite having no direct role in growth control.

**(b)** **No.** What matters is the functional loss of repair capacity, not how it was achieved. An epigenetically silenced *MLH1* raises $\mu$ exactly as a mutated one does. The two routes differ in how easily they arise (silencing is far more frequent per cell generation) and in whether they can be reversed (silencing can), not in their downstream arithmetic.

**(c)** $$\frac{I(70)}{I(35)} = \left(\frac{70}{35}\right)^{k-1} = 2^{4} = \mathbf{16\text{-fold}}.$$

</details>

## Connections

- **Backward:** [3.4](03-04-cancer-failure-of-control.md) needed a second route to silencing a tumour suppressor and a reason the mutation background rate varies across the genome; both are here.
- **Forward:** [4.2](04-02-eukaryotic-transcription-machine.md) assembles the transcription machinery on chromatin that this lesson made accessible; [4.5](04-05-stem-cells-differentiation-reprogramming.md) shows that reprogramming a cell means overwriting these marks.
- **Sideways:** the Boltzmann two-state accessibility calculation is [biophysics 2.2](../../biophysics/lessons/02-02-boltzmann-two-state.md); the *inheritance patterns* produced by epigenetic states — imprinting, X-inactivation, parent-of-origin effects — belong to [genetics 3.5](../../genetics/lessons/03-05-eukaryotic-regulatory-logic-epigenetics.md).
