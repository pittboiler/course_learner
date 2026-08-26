# Molecular & Cell Biology · Lesson 4.2: The eukaryotic transcription machine

> ⏱ ~15 min · Module 4: Expression Control & Cell Identity · Builds on: [4.1](04-01-chromatin-packaging-regulation.md), [1.1](01-01-crowded-cell-condensates.md) · Unlocks: 4.3 (RNA processing)

## Why this matters

[genetics 3.4](../../genetics/lessons/03-04-prokaryotic-regulation-operon.md) will give you the *logic* of gene regulation in its cleanest form — the *lac* operon, where a repressor sits on an operator and a genotype predicts an output. That logic is beautiful and it is also, for eukaryotes, dramatically incomplete.

A bacterial promoter is bound by a sigma factor and a repressor, and the whole regulatory region is a few dozen base pairs. A human gene is controlled by enhancers that can sit **a million base pairs away**, on either side, sometimes past other genes, and the machinery that reads them involves dozens of proteins and a chromosomal loop. This lesson is about that machinery — what physically assembles, and what an enhancer actually *does* when we say it "acts at a distance."

## The idea

**Three polymerases, one of interest.** Pol I makes ribosomal RNA, Pol III makes tRNA and 5S rRNA, and **Pol II makes all the mRNA**. Everything below is Pol II.

**Pol II cannot find a promoter by itself.** It needs a set of **general transcription factors** (TFIIA, B, D, E, F, H) that assemble in order. TFIID contains TATA-binding protein, which bends the DNA sharply and nucleates the rest. The assembled complex is the **pre-initiation complex**, and TFIIH is the interesting member: it is both a helicase that melts the DNA to open the transcription bubble, and a kinase that phosphorylates Pol II's tail.

**The C-terminal domain is a moving loading dock.** Pol II's largest subunit carries a tail of 52 repeats of a seven-residue sequence in humans. Its phosphorylation state changes as transcription proceeds — Ser5-phosphorylated at initiation, Ser2-phosphorylated during elongation — and different processing machinery binds each state. **The capping enzyme, the spliceosome, and the polyadenylation machinery are all recruited by the tail, in the right order, because the tail's marks change in the right order.** This is why [4.3](04-03-rna-processing-mrna-life-cycle.md)'s processing is co-transcriptional rather than a series of separate events.

**Regulation is not mainly about recruiting Pol II.** In most human genes, Pol II is already there — it initiates, transcribes 20–60 nucleotides, and then **pauses**, held by negative elongation factors. The rate-limiting, regulated step is **pause release**, accomplished by the kinase P-TEFb phosphorylating Ser2 and the pausing factors. *In words: the polymerase is parked with the engine running, and regulation is releasing the handbrake.* This is the pre-loaded-machinery motif again ([1.4](01-04-endomembrane-trafficking.md), [3.2](03-02-dna-damage-response.md)) — build it in advance, gate it, and you can respond in seconds.

**What an enhancer does.** An enhancer is a cluster of transcription-factor binding sites. The factors bound there recruit **Mediator**, a large multi-subunit complex, and coactivators including histone acetyltransferases ([4.1](04-01-chromatin-packaging-regulation.md)). The enhancer then contacts the promoter through a **chromosomal loop**, bringing everything it has gathered into physical contact with the pre-initiation complex.

**The loop is the answer to "how does distance not matter?"** In linear sequence, an enhancer may be 500 kb from its promoter. In three dimensions they touch. Loop extrusion by cohesin, bounded by CTCF sites, organizes the genome into **topologically associating domains** — and an enhancer can generally only reach promoters *within its own domain*. **The domain boundary is the unit of regulatory insulation**, and deleting a boundary lets an enhancer activate a gene it was never meant to, which is a documented cause of both developmental malformations and cancer.

## The formal version

**Combinatorial control, and why it is the only workable design.** With $n$ transcription factors each present or absent, the number of distinguishable states is $2^{n}$. Humans have roughly 1,600 transcription factors and about 20,000 genes:

$$2^{20} = 1.05\times10^{6} \gg 20{,}000,$$

so **just twenty factors, used combinatorially, could in principle specify a unique state for every human gene.** A dedicated regulator per gene would require as many regulators as genes and then regulators for those. *In words: eukaryotic regulation is combinatorial because combinatorial is the only thing that scales.*

The consequence for reading a promoter: no single factor means anything by itself. The same factor activates one gene and represses another depending on which other factors are bound nearby — which is why "transcription factor X is an activator" is nearly always the wrong sentence.

**Transcription is bursty.** Single-molecule imaging shows genes do not transcribe steadily; they fire in **bursts** separated by silence. Model the promoter as two states:

$$\text{OFF} \;\xrightarrow{k_{\text{on}}}\; \text{ON} \;\xrightarrow{k_{\text{off}}}\; \text{OFF}, \qquad \text{ON transcribes at rate } k_{\text{tx}} .$$

Then the mean expression is

$$\langle m \rangle \;\propto\; \underbrace{\frac{k_{\text{on}}}{k_{\text{on}}+k_{\text{off}}}}_{\text{fraction of time ON}} \times k_{\text{tx}},$$

with **burst frequency** $\approx k_{\text{on}}$ and **burst size** $\approx k_{\text{tx}}/k_{\text{off}}$.

*In words: a gene's output can be raised either by firing more often or by firing bigger, and these are different molecular knobs.* Experimentally, **enhancers mostly change burst frequency** while promoter strength mostly sets burst size — which is a real and non-obvious division of labour, and it means two genes with identical mean expression can have completely different cell-to-cell variability.

**Noise follows from burstiness.** For a bursty gene the Fano factor (variance over mean) is approximately

$$\frac{\sigma^{2}}{\langle m\rangle} \approx 1 + \text{burst size},$$

so a gene expressed in rare large bursts is far noisier than one expressed in frequent small ones at the same mean. **A cell that needs a protein at a reliable level must use frequent small bursts**, and genes whose products are dosage-sensitive do exactly that.

**Condensates, revisited.** Mediator and many transcriptional activators carry large intrinsically disordered regions with multivalent weak interactions — precisely the recipe from [1.1](01-01-crowded-cell-condensates.md). At strong enhancer clusters ("super-enhancers") these appear to form **condensates** that concentrate Pol II and coactivators at the promoter. This is the current best physical account of what a super-enhancer *is*, and it explains why they are so sensitive to inhibitors that disrupt weak multivalent binding — the basis of BET-bromodomain inhibitors in cancer.

## Picture

![A chromosomal loop bringing a distal enhancer into contact with a promoter. At the enhancer, several transcription factors bind adjacent sites and recruit Mediator and a histone acetyltransferase. Cohesin extrudes the loop and is halted at CTCF sites that bound a topologically associating domain, with an arrow showing that an enhancer cannot reach a promoter in the neighbouring domain. At the promoter, TFIID with TATA-binding protein bends the DNA, the general transcription factors and Pol II assemble, TFIIH melts the bubble, and Pol II transcribes 40 nucleotides and pauses until P-TEFb phosphorylates the C-terminal domain at serine 2 and releases it. Below, a time trace of transcription showing discrete bursts separated by silence, annotated with burst frequency and burst size.](assets/04-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — burst frequency versus burst size).** Two genes have the same mean mRNA output. Gene A: $k_{\text{on}} = 0.5\ \mathrm{min^{-1}}$, $k_{\text{off}} = 0.5\ \mathrm{min^{-1}}$, $k_{\text{tx}} = 4\ \mathrm{min^{-1}}$. Gene B: $k_{\text{on}} = 0.05\ \mathrm{min^{-1}}$, $k_{\text{off}} = 0.5\ \mathrm{min^{-1}}$, $k_{\text{tx}} = 22\ \mathrm{min^{-1}}$. (a) Verify their means are similar. (b) Compute burst size and frequency for each. (c) Compare their noise.

(a) Fraction of time ON, times $k_{\text{tx}}$:

$$\text{A: } \frac{0.5}{1.0}\times 4 = 2.0\ \mathrm{min^{-1}}, \qquad \text{B: } \frac{0.05}{0.55}\times 22 = 0.0909 \times 22 = 2.0\ \mathrm{min^{-1}}. \ \checkmark$$

(b)

| | burst frequency $\approx k_{\text{on}}$ | burst size $\approx k_{\text{tx}}/k_{\text{off}}$ |
|---|---|---|
| **A** | $0.5\ \mathrm{min^{-1}}$ — every 2 min | $4/0.5 = 8$ transcripts |
| **B** | $0.05\ \mathrm{min^{-1}}$ — every 20 min | $22/0.5 = 44$ transcripts |

(c) $$\frac{\sigma^2}{\langle m\rangle}\Big|_{A} \approx 1 + 8 = 9, \qquad \frac{\sigma^2}{\langle m\rangle}\Big|_{B} \approx 1 + 44 = 45.$$

**Gene B is about five times noisier at identical mean expression.** Two cells side by side, both "expressing gene B at level 2," will in fact differ enormously depending on how recently each last burst — and a population measurement (a bulk RNA-seq experiment) cannot tell A from B at all. **This is the strongest single argument for single-cell measurement**: the mean is the same and the biology is not.

**Example 2 (why you'd care — a boundary deletion causes a limb malformation).** In a family with a limb malformation, sequencing finds no mutation in any coding gene. Instead, a ~100 kb deletion removes a CTCF-bound domain boundary between two neighbouring regulatory landscapes. Explain the mechanism and why this class of mutation was invisible until recently.

**Mechanism.** Before the deletion, a limb enhancer sits in domain 1 with its normal target gene, and an unrelated developmental gene sits in domain 2. The boundary prevents any contact between them: loop extrusion by cohesin halts at the CTCF sites, so the enhancer's loops never reach into domain 2. Deleting the boundary fuses the two domains. The limb enhancer can now loop to the domain-2 gene and activates it **in the limb, where it has no business being expressed**. The result is ectopic expression of a normal gene under a normal enhancer — and a malformed limb.

**Why it was invisible.** Every base of every coding sequence is normal. Exome sequencing, which reads only coding regions and covers about 1.5 percent of the genome, sees nothing. Even whole-genome sequencing reports the deletion but cannot interpret it without a map of domain boundaries, which only became available with chromosome-conformation-capture methods. **This is a whole class of disease mutation — "enhancer adoption" — that is invisible to the standard diagnostic and requires a three-dimensional map of the genome to read.**

**The cancer version is the same mechanism.** Deletion or mutation of a CTCF boundary near a proto-oncogene lets a strong enhancer from the neighbouring domain drive it, producing overexpression with no mutation in the oncogene itself. This is documented for *TAL1* in T-cell leukaemia and for *PDGFRA* in glioma — and it is an oncogene activated purely by a change in genome topology.

## Watch out

- **You might expect eukaryotic regulation to work like an operon.** The *lac* operon's cis-regulatory region is a few dozen base pairs and its logic is a repressor on an operator ([genetics 3.4](../../genetics/lessons/03-04-prokaryotic-regulation-operon.md)). A human gene's regulatory input can be a megabase away and requires a loop. The bacterial picture is right in its own domain and misleading if extrapolated.
- **You might think regulation acts on Pol II recruitment.** For most human genes Pol II is *already engaged and paused*. The regulated step is pause release, which is why so many transcriptional inhibitors target the kinase P-TEFb rather than the polymerase.
- **You might read "enhancer" as "the nearest one."** An enhancer acts on promoters within its topological domain, and the nearest gene in linear sequence is frequently not the target. Assigning enhancers to genes by proximity is a standard and standardly wrong shortcut.
- **You might treat mean expression as the whole story.** Two genes with identical means can differ five-fold in noise depending on burst structure, and for a gene controlling a cell-fate decision that difference is the biology ([4.5](04-05-stem-cells-differentiation-reprogramming.md)).

## One-liner

> A eukaryotic promoter is a parked polymerase waiting for a handbrake release, and an enhancer is a distant cluster of factors that reaches it through a chromosomal loop — bounded by domain boundaries whose deletion lets the wrong enhancer find the wrong gene.

## Problems

**P1 (🟢)** A gene has $k_{\text{on}} = 0.2\ \mathrm{min^{-1}}$, $k_{\text{off}} = 1.0\ \mathrm{min^{-1}}$, $k_{\text{tx}} = 15\ \mathrm{min^{-1}}$. Compute (a) the fraction of time the promoter is ON, (b) the mean transcription rate, (c) the burst size, and (d) the approximate Fano factor.

**P2 (🟡)** A cell must express a dosage-sensitive protein at a reliable level. (a) Given a fixed mean output, should it use high burst frequency with small bursts, or low frequency with large bursts? Justify with the Fano relation. (b) Enhancers mostly tune burst frequency and promoters mostly tune burst size. Which element should evolution have optimized for a dosage-sensitive gene, and what would you predict about its promoter? (c) Explain why bulk RNA-seq could not distinguish the two designs.

**P3 (🔴, bridges to 1.1 and to cancer therapy)** Super-enhancers are large enhancer clusters that drive the identity genes of a cell type, and tumours frequently acquire a super-enhancer at an oncogene. BET-bromodomain inhibitors, which block a reader of acetylated histones ([4.1](04-01-chromatin-packaging-regulation.md)), suppress super-enhancer-driven genes far more strongly than ordinary genes. (a) Propose a mechanism for this selectivity in terms of the condensate picture of [1.1](01-01-crowded-cell-condensates.md). (b) Using the phase-separation relation $f = (c_{\text{tot}} - c_{\text{sat}})/(c_{\text{dense}} - c_{\text{sat}})$, explain why a system just above $c_{\text{sat}}$ is far more drug-sensitive than one far above it. (c) Predict one mechanism of resistance and one class of tumour where you would expect this drug class to fail.

<details>
<summary>Solutions</summary>

**P1 (a)** $$\frac{k_{\text{on}}}{k_{\text{on}}+k_{\text{off}}} = \frac{0.2}{1.2} = \mathbf{0.167}.$$

**(b)** $$0.167 \times 15 = \mathbf{2.5\ \text{transcripts/min}}.$$

**(c)** $$\frac{k_{\text{tx}}}{k_{\text{off}}} = \frac{15}{1.0} = \mathbf{15\ \text{transcripts per burst}}.$$

**(d)** $$\frac{\sigma^2}{\langle m\rangle} \approx 1 + 15 = \mathbf{16}.$$

(A Poisson process would give 1; this gene is 16 times noisier than Poisson, purely from burstiness.)

**P2 (a)** **High frequency, small bursts.** The Fano factor is $\approx 1 + \text{burst size}$, so at fixed mean the noise is minimized by making bursts as small as possible and compensating with frequency. In the limit of very small, very frequent bursts the gene approaches Poisson behaviour, which is the noise floor for a process producing discrete molecules.

**(b)** Since burst size is set mainly by the **promoter** ($k_{\text{tx}}/k_{\text{off}}$), that is the element evolution should have optimized for a dosage-sensitive gene. Prediction: such genes should have promoters that produce **short bursts** — high $k_{\text{off}}$ or modest $k_{\text{tx}}$ — and compensate with many enhancers or high $k_{\text{on}}$ to maintain the mean. Empirically, housekeeping and dosage-sensitive genes do tend to have CpG-island promoters that fire frequently and weakly, while highly regulated developmental genes have TATA-box promoters that fire in large bursts.

**(c)** Bulk RNA-seq averages over millions of cells, and both designs have the *same mean*. Averaging destroys exactly the quantity — the cell-to-cell variance — that distinguishes them. Only single-cell or single-molecule measurement can see burst structure.

**P3 (a)** Super-enhancers recruit Mediator, BRD4 and coactivators at high local density, and these proteins carry large intrinsically disordered regions with weak multivalent interactions — the recipe for **liquid–liquid phase separation** ([1.1](01-01-crowded-cell-condensates.md)). The super-enhancer's output depends on maintaining a condensate that concentrates Pol II and coactivators at the promoter.

A BET inhibitor competes for BRD4's bromodomain, reducing the number of productive multivalent contacts. Because condensate formation depends **cooperatively** on valency, a modest reduction in effective valency raises $c_{\text{sat}}$ steeply. Ordinary enhancers, which do not depend on a condensate, lose only a proportionate amount of BRD4 recruitment. **The selectivity comes from the nonlinearity of phase separation, not from any selectivity of the drug.**

**(b)** Recall from [1.1](01-01-crowded-cell-condensates.md) that the drug acts by *raising $c_{\text{sat}}$*, and the condensate disappears entirely once $c_{\text{sat}}$ exceeds $c_{\text{tot}}$. Consider two systems with $c_{\text{dense}} = 5$ mM:

| System | $c_{\text{tot}}$ | $c_{\text{sat}}$ | $f$ before | $c_{\text{sat}}$ after 2× rise | $f$ after |
|---|---|---|---|---|---|
| just above | 12 μM | 10 μM | $2/4990 = 4.0\times10^{-4}$ | 20 μM | **0 — dissolves** |
| far above | 100 μM | 10 μM | $90/4990 = 1.8\times10^{-2}$ | 20 μM | $80/4980 = 1.6\times10^{-2}$ |

A twofold rise in $c_{\text{sat}}$ **abolishes** the marginal condensate and barely touches the robust one — an 11 percent reduction. **Proximity to the phase boundary is what makes a system drug-sensitive**, and a tumour that has recently acquired a super-enhancer is, almost by construction, sitting near its boundary rather than far above it.

**(c)** *Resistance:* upregulation of the condensate components themselves — raising $c_{\text{tot}}$ back above the drug-elevated $c_{\text{sat}}$ — which is the transcriptional analogue of the gene-amplification resistance of [2.3](02-03-kinase-cascades-switch.md). (Documented mechanisms also include loss of the ubiquitin ligase that degrades BRD4, which raises BRD4 abundance, and activation of bypass pathways such as WNT signalling that drive the oncogene independently of the super-enhancer.)

*Where it should fail:* a tumour whose driver is **not** transcriptionally addicted — one driven by a constitutively active kinase ([2.3](02-03-kinase-cascades-switch.md)) or by loss of a tumour suppressor rather than by overexpression of an identity transcription factor. BET inhibitors work best on tumours addicted to a super-enhancer-driven oncogene such as *MYC*; a *BRAF*-driven melanoma has no such dependency to remove.

</details>

## Flashback

**From Lesson 4.1 (accessibility as a Boltzmann competition):** A promoter's TATA box is occluded by a nucleosome with an unwrapping cost of $5\,k_BT$. (a) What fraction of the time can TFIID reach it? (b) A pioneer factor binds nearby and recruits a histone acetyltransferase, lowering the cost to $2\,k_BT$. Recompute, and give the fold-change. (c) In terms of the burst model of this lesson, which kinetic parameter has the acetylation most likely changed, and what does that predict for the gene's noise?

<details>
<summary>Solution</summary>

**(a)** $$P_{\text{acc}} = \frac{e^{-5}}{1+e^{-5}} = \frac{0.00674}{1.00674} = \mathbf{0.0067}, \ \text{about 0.67 percent}.$$

**(b)** $$P_{\text{acc}} = \frac{e^{-2}}{1+e^{-2}} = \frac{0.1353}{1.1353} = \mathbf{0.119}, \ \text{about 12 percent}.$$

$$\text{fold-change} = \frac{0.119}{0.0067} = \mathbf{18\times}.$$

**(c)** Accessibility controls how often the promoter can be **entered** — how frequently the pre-initiation complex can assemble — which is $k_{\text{on}}$, the **burst frequency**. It says nothing about how many transcripts are produced once the promoter is ON, which is burst size $k_{\text{tx}}/k_{\text{off}}$.

**Prediction:** mean expression rises about 18-fold, burst size is unchanged, and therefore the Fano factor $\approx 1 + \text{burst size}$ is **unchanged** — the gene gets much louder without getting relatively noisier. This matches the experimental finding quoted in the lesson that enhancers and chromatin accessibility tune burst *frequency* while the promoter sets burst *size*, and it is the reason a cell can upregulate a dosage-sensitive gene through chromatin without paying a noise penalty.

</details>

## Connections

- **Backward:** [4.1](04-01-chromatin-packaging-regulation.md) made the DNA accessible; this lesson builds the machine on it. [1.1](01-01-crowded-cell-condensates.md) supplied the physics of what a super-enhancer hub probably is.
- **Forward:** [4.3](04-03-rna-processing-mrna-life-cycle.md) follows the transcript, and the Pol II C-terminal domain introduced here is what recruits every processing step in the right order.
- **Sideways:** the *logic* of gene regulation in its cleanest form — cis versus trans, operators, merodiploid analysis — is [genetics 3.4](../../genetics/lessons/03-04-prokaryotic-regulation-operon.md), and eukaryotic regulatory logic and its inheritance patterns are [genetics 3.5](../../genetics/lessons/03-05-eukaryotic-regulatory-logic-epigenetics.md). Two-state promoter kinetics is a Markov chain of the kind in [probability-theory 5.1](../../probability-theory/syllabus.md).
