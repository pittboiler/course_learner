# Molecular & Cell Biology · Lesson 3.3: Double-strand breaks — HR vs. NHEJ

> ⏱ ~15 min · Module 3: Division, Damage & Cancer · Builds on: [3.2](03-02-dna-damage-response.md), [3.1](03-01-cell-cycle-engine-irreversibility.md) · Unlocks: 3.4 (cancer)

## Why this matters

A double-strand break is the worst thing that can happen to a chromosome. Every other lesion leaves one intact strand to copy from; a clean break leaves nothing, and if it is not rejoined the cell loses everything distal to it at the next division. Ten unrepaired breaks will kill a cell.

The cell has two repair strategies and they are radically different in character — one accurate and conditional, one fast and lossy. Which one it uses is not a matter of chance: it is **decided by the cell-cycle phase**, for a reason that follows directly from the mechanism. And that dependence, which looks like a piece of mechanistic trivia, turns out to be the basis of one of the few genuinely rational cancer therapies ever designed.

## The idea

**Non-homologous end joining (NHEJ): just stick them back together.** A ring-shaped protein (Ku) clamps both broken ends, a kinase holds them near each other, nucleases trim the ragged ends until they can be ligated, and a ligase seals them. It works in any phase, takes minutes, and requires no template.

It also **loses a few base pairs** at almost every junction, because the trimming is necessary and imprecise. In non-coding DNA that is nothing. Inside a gene it is a frameshift.

**Homologous recombination (HR): copy the answer from the other one.** The broken ends are chewed back in the 5′→3′ direction to expose long single-stranded 3′ tails (**resection**). RAD51 coats a tail and searches the genome for a homologous sequence. When it finds one it **invades** the intact duplex, base-pairs with the complementary strand, and uses it as a template for new synthesis across the break. The information lost at the break is *recovered from the copy*, and repair is essentially error-free.

**Now the constraint that decides everything.** HR needs an identical template. The homologous chromosome is not identical — it is the other parent's allele, and using it would convert a heterozygote to a homozygote across the repaired region (loss of heterozygosity, a real event and usually a bad one). The genuinely identical template is the **sister chromatid**, and a sister chromatid exists only *after replication*.

$$\text{HR is available in S and G2. In G1 there is no sister, so NHEJ is the only option.}$$

**And the cell enforces it with the same machinery that runs the cycle.** The committing step of HR is resection, and resection is activated by **CDK phosphorylation** of the resection machinery. CDK activity is low in G1 and high in S/G2 ([3.1](03-01-cell-cycle-engine-irreversibility.md)). *In words: the cell does not need to know whether a sister chromatid exists — it asks the cyclin–CDK clock, which is high exactly when the sister is there.* The pathway choice is a readout of the cell-cycle oscillator.

## The formal version

**The two pathways, compared:**

| | NHEJ | HR |
|---|---|---|
| Template | none | sister chromatid |
| Available in | **all phases** | **S and G2 only** |
| Committing step | Ku binding the ends | 5′→3′ **resection** |
| Gatekeeper | Ku (and 53BP1, which blocks resection) | CDK-phosphorylated resection machinery; BRCA1 removes 53BP1 |
| Speed | minutes | hours |
| Fidelity | loses a few bp; can join wrong ends | essentially error-free |
| Key proteins | Ku70/80, DNA-PKcs, LIG4, Artemis | MRN, CtIP, BRCA1, BRCA2, RAD51 |
| Failure mode | small indels; **chromosomal translocations** | loss of heterozygosity if the homologue is used |

**The choice is a competition at the break, resolved by a switch.** 53BP1 protects the ends from resection (favouring NHEJ); BRCA1 removes 53BP1 and licenses resection (favouring HR). BRCA2 then loads RAD51 onto the resected tail. So:

$$\text{BRCA1 lost} \Rightarrow \text{no resection} \Rightarrow \text{NHEJ by default}; \qquad \text{BRCA2 lost} \Rightarrow \text{resection but no RAD51 loading} \Rightarrow \text{HR fails midway}.$$

Note the asymmetry: losing BRCA2 is arguably worse, because a resected end that cannot complete HR is a *toxic intermediate* — long single-stranded DNA with nowhere to go — rather than merely a break routed down a lossy pathway.

**Translocations are NHEJ's characteristic failure.** With two simultaneous breaks on different chromosomes, NHEJ has four ends and no information telling it which pairs belong together. Joining the wrong pair produces a **reciprocal translocation** — the mechanism behind the Philadelphia chromosome of chronic myeloid leukaemia, and behind essentially every oncogenic fusion gene. **HR cannot make this mistake**, because the template tells it exactly what the sequence should be.

**Synthetic lethality: the therapeutic payoff.** Two genes are **synthetically lethal** when losing either alone is survivable and losing both is not. PARP1 is required for repairing single-strand breaks; block it and unrepaired single-strand breaks are converted, at the next replication fork, into double-strand breaks. In a normal cell, HR fixes those. In a *BRCA*-mutant cell, HR is unavailable and the breaks accumulate.

$$\underbrace{\text{PARP inhibitor}}_{\text{drug}} + \underbrace{\textit{BRCA} \text{ mutation}}_{\text{tumour-only}} = \text{death}$$

**The selectivity comes for free.** The tumour is *BRCA*-null in both alleles; the patient's normal tissue is heterozygous and therefore HR-proficient. **The drug is not selective; the genotype is.** This is a genuinely different logic from classical chemotherapy — instead of exploiting that cancer cells divide faster, it exploits a repair pathway the tumour has already lost, which is why PARP inhibitors have far gentler side-effect profiles than the microtubule poisons of [1.2](01-02-cytoskeleton-three-filaments.md).

## Picture

![Left: a double-strand break in G1, with Ku clamping both ends, 53BP1 blocking resection, ends trimmed and ligated, and a note that a few base pairs are lost. Right: the same break in S or G2, where CDK-activated resection produces long 3-prime single-stranded tails, RAD51 coats one and invades the sister chromatid, new synthesis copies across the break, and the repair is error-free. Below, a panel showing two simultaneous breaks on different chromosomes and how NHEJ can join the wrong pair to produce a reciprocal translocation. At right, the synthetic-lethality square: PARP inhibitor alone survivable, BRCA mutation alone survivable, both together lethal.](assets/03-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — predict the outcome from phase and genotype).** For each cell, state which pathway repairs a double-strand break and what the likely outcome is.

| Cell | Pathway | Outcome |
|---|---|---|
| (a) Normal cell in G1 | **NHEJ** (no sister chromatid; CDK low, so no resection) | rejoined, few bp lost — usually harmless |
| (b) Normal cell in G2 | **HR** (sister present, CDK high) | error-free |
| (c) *BRCA1*-null cell in G2 | **NHEJ** — 53BP1 is not removed, so resection never starts | rejoined but mutagenic; translocation risk despite being in G2 |
| (d) *LIG4*-null cell in G1 | **neither** — NHEJ cannot ligate, HR unavailable | break persists → p53 → apoptosis ([3.2](03-02-dna-damage-response.md)) |
| (e) *BRCA2*-null cell in G2 | **HR initiated, stalls** — resection proceeds, RAD51 never loads | toxic resected intermediate; eventually resolved by error-prone routes |

**Read (c) and (e) together.** Both are *BRCA*-mutant and both are HR-deficient, but they fail at different steps and therefore have different intermediates — which is why *BRCA1*- and *BRCA2*-mutant tumours, though clinically grouped, are not biochemically identical. In particular, a *BRCA1*-mutant tumour can regain HR by *also* losing 53BP1 (removing the block that BRCA1 would have removed), and this is a documented mechanism of PARP-inhibitor resistance that has no counterpart in *BRCA2* tumours.

**Example 2 (why you'd care — the arithmetic of a translocation).** Ionizing radiation produces breaks at random. Suppose a dose creates on average $\lambda = 4$ double-strand breaks per cell, repaired by NHEJ with a per-pair mis-joining probability $q = 0.02$ when two breaks are open simultaneously. (a) What is the chance a given cell has at least two breaks open at once? (b) Given two or more breaks, roughly what is the chance of at least one mis-join? (c) Why does this scale so badly with dose?

(a) Breaks are Poisson with $\lambda = 4$:

$$P(\ge 2) = 1 - P(0) - P(1) = 1 - e^{-4} - 4e^{-4} = 1 - 5e^{-4} = 1 - 5(0.0183) = \mathbf{0.908}.$$

(b) With $n$ breaks there are $\binom{n}{2}$ pairs that could be mis-joined. At the mean $n = 4$:

$$\binom{4}{2} = 6 \ \text{pairs}, \qquad P(\text{at least one mis-join}) = 1 - (1-0.02)^{6} = 1 - 0.98^{6} = 1 - 0.886 = \mathbf{0.114}.$$

(c) Because the number of *pairs* grows as $\binom{n}{2} \approx n^2/2$ while the number of breaks grows as $n$. Doubling the dose doubles $n$ and **quadruples** the opportunities for a mis-join:

| Breaks $n$ | Pairs $\binom{n}{2}$ | $P(\text{mis-join})$ at $q = 0.02$ |
|---|---|---|
| 2 | 1 | 0.020 |
| 4 | 6 | 0.114 |
| 8 | 28 | 0.432 |
| 16 | 120 | 0.912 |

**This quadratic is one of the foundational results in radiation biology.** It is why the dose–response for chromosome aberrations has a linear-quadratic form (the linear term from single tracks producing both breaks, the quadratic from two independent tracks), why **fractionating** a radiotherapy dose over many sessions spares normal tissue — fewer breaks are open simultaneously in each session, so the quadratic term is suppressed — and why the same total dose delivered slowly is far less clastogenic than delivered at once. The clinical practice of fractionation is this table.

## Watch out

- **You might think NHEJ is a defective backup.** It is the **dominant** pathway in human cells, because most cells in your body are in G1 or G0 and have no other option. It is fast, it works, and the base pairs it loses are usually in non-coding DNA. Calling it "error-prone" is accurate and misleading in the same breath.
- **You might expect HR to use the homologous chromosome.** It uses the **sister chromatid**. Using the homologue would give loss of heterozygosity — converting one mutant allele into two — which is itself a common step in tumour development.
- **You might think a PARP inhibitor targets something cancer-specific.** PARP is entirely normal and present in every cell. The drug is not selective at all; the *tumour's genotype* supplies the selectivity by having already deleted the backup. This is a fundamentally different drug-design logic from "find something only the tumour has."
- **You might read the cell-cycle dependence as a limitation.** It is a *control*. The cell uses CDK activity as a proxy for "does a sister chromatid exist," which is a question it cannot otherwise easily answer, and the proxy is exact.

## One-liner

> HR needs a sister chromatid, so the cell asks its cyclin–CDK clock whether one exists — and a tumour that has lost HR can be killed by a drug that merely makes the backup pathway necessary.

## Problems

**P1 (🟢)** A cell is irradiated in G0 (quiescent, CDK low). (a) Which pathway repairs its breaks? (b) Why is HR unavailable, and give both reasons — the template reason and the regulatory reason. (c) Is this cell more or less likely to acquire a translocation than an identical cell irradiated in G2? Explain.

**P2 (🟡)** A dose of radiation produces on average $\lambda = 2$ double-strand breaks per cell. (a) Find $P(0)$, $P(1)$, and $P(\ge 2)$. (b) Given exactly 3 breaks and a per-pair mis-joining probability of 0.03, find the probability of at least one mis-join. (c) The same total dose is split into two equal fractions separated by 6 hours (enough time for complete repair). Compute the probability of at least one mis-join per fraction, and compare with the single-dose case at $\lambda = 4$ from Example 2. State what this demonstrates about radiotherapy scheduling.

**P3 (🔴, bridges to genetics and to therapy)** A patient carries a germline *BRCA2* mutation and develops an ovarian tumour. (a) Explain, using Knudson's two-hit logic and [3.2](03-02-dna-damage-response.md)'s discussion of oligomeric state, why the germline carrier's normal cells are healthy while the tumour is HR-deficient. (b) The tumour responds to a PARP inhibitor and then relapses. Sequencing finds a *second* mutation in *BRCA2* — a small insertion downstream of the original frameshift. Explain how a second mutation could **restore** function. (c) Propose one therapeutic strategy for the relapsed tumour and justify it mechanistically.

<details>
<summary>Solutions</summary>

**P1 (a)** **NHEJ**.

**(b)** *Template reason:* a quiescent cell has not replicated, so there is no sister chromatid to copy from — the only homologous sequence available is the homologous chromosome, which is not identical. *Regulatory reason:* CDK activity is low in G0, so the resection machinery is unphosphorylated and resection — the committing step of HR — never initiates. The two reasons are linked by design: the cell uses CDK as an accurate proxy for template availability.

**(c)** **More likely.** NHEJ is the pathway that can mis-join ends from different chromosomes, because it has no template to tell it which ends belong together. A G2 cell repairing by HR copies from the sister and cannot produce a translocation by this route. (This is one reason radiation-induced leukaemias arise from long-lived quiescent stem cells: they are exactly the population that must use NHEJ.)

**P2 (a)** Poisson with $\lambda = 2$, $e^{-2} = 0.1353$:

$$P(0) = 0.135, \qquad P(1) = 2e^{-2} = 0.271, \qquad P(\ge 2) = 1 - 3e^{-2} = 1 - 0.406 = \mathbf{0.594}.$$

**(b)** With 3 breaks, $\binom{3}{2} = 3$ pairs:

$$P = 1 - (0.97)^{3} = 1 - 0.9127 = \mathbf{0.087}.$$

**(c)** Split dose: each fraction gives $\lambda = 2$. Using the mean break number of 2 per fraction, $\binom{2}{2} = 1$ pair and $q = 0.02$:

$$P(\text{mis-join in one fraction}) = 0.02, \qquad P(\text{at least one over two fractions}) = 1 - 0.98^{2} = \mathbf{0.0396}.$$

Single dose at $\lambda = 4$ (Example 2): $\binom{4}{2} = 6$ pairs, $P = \mathbf{0.114}$.

$$\frac{0.114}{0.0396} = \mathbf{2.9\times}\ \text{more damage from the undivided dose.}$$

**What it demonstrates:** the same total dose produces roughly three times fewer mis-joins when fractionated, because the mis-join probability scales with the number of *pairs* of simultaneously-open breaks — quadratically in dose per fraction — while the killing of tumour cells by simple unrepaired breaks scales roughly linearly. Fractionation therefore suppresses the quadratic (chromosomal-aberration, normal-tissue-damaging) term far more than the linear (tumour-killing) one. **This is the entire rationale for delivering radiotherapy in daily fractions over weeks rather than in one session.**

**P3 (a)** The carrier inherits **one** mutant *BRCA2* allele in every cell and retains one wild-type allele. BRCA2 is not an oligomer whose function a mutant subunit could poison — unlike p53 ([3.2](03-02-dna-damage-response.md)) — so a single functional allele supports normal HR and the carrier's tissues are healthy. The tumour arises from a cell that suffered a **second hit** somatically, losing the remaining wild-type allele (typically by loss of heterozygosity). That cell, and its descendants, are HR-null. Knudson's two-hit model exactly: dominant inheritance of *predisposition*, recessive behaviour at the cellular level.

**(b)** The original mutation is a **frameshift**, so its damage is not the missing bases themselves but the destroyed reading frame — every codon downstream is garbage and a premature stop truncates the protein ([biochemistry 4.5](../../biochemistry/lessons/04-05-flow-of-genetic-information.md)). A second small insertion downstream can **restore the original reading frame** if the two indels' lengths sum to a multiple of three. The protein then has a short scrambled stretch between the two lesions but a correct sequence everywhere else, including the RAD51-binding domains — and that is enough for partial HR function. These are called **reversion mutations**, they are observed clinically, and they are the commonest route to PARP-inhibitor resistance. Note the irony: the tumour is rescued by acquiring a *second* mutation in the same gene, which is only possible because frameshifts destroy information by shifting a frame rather than by deleting a function.

**(c)** Reasonable strategies, each with a mechanism:

- **Platinum agents (cisplatin, carboplatin).** These create interstrand crosslinks whose repair also requires HR. But a reverted tumour has *regained* HR, so this would likely fail too — worth stating explicitly, because the resistance is pathway-level, not drug-level.
- **Target a different vulnerability the tumour still has.** Reversion restores HR but does not restore whatever else the tumour lost; most *BRCA*-mutant tumours are also p53-null ([3.2](03-02-dna-damage-response.md)) and therefore lack the G1 checkpoint. Agents that abolish the *remaining* G2 checkpoint — WEE1 or ATR inhibitors — force a p53-null, checkpoint-less cell into mitosis with damaged DNA, which is lethal. This is synthetic lethality again, aimed at a different lost gene.
- **Immunotherapy.** The tumour's long history of HR deficiency has left it with a high mutational burden and therefore many neoantigens, which reversion does not undo.

The general principle worth taking away: **when resistance arises by restoring the targeted pathway, look for a second lesion the tumour cannot revert**, because the tumour's accumulated genome is full of them.

</details>

## Flashback

**From Lesson 3.2 (p53 stabilization and dominant negatives):** A transcription factor works as a tetramer and is held at low abundance by a ubiquitin ligase. Its half-life is 30 minutes; a stress signal blocks the ligase and extends it to 5 hours. (a) By what factor does its steady-state level rise? (b) In a cell heterozygous for a dominant-negative missense allele, what fraction of tetramers are fully wild-type? (c) Combining the two: a heterozygous cell mounts a full stabilization response. Roughly what fraction of the *functional* tetramer level of a homozygous wild-type cell does it reach, and what does this say about the adequacy of the response?

<details>
<summary>Solution</summary>

**(a)** $$\frac{300\ \mathrm{min}}{30\ \mathrm{min}} = \mathbf{10\text{-fold}}.$$

**(b)** $$\left(\tfrac12\right)^{4} = \frac{1}{16} = \mathbf{6.25\ \text{percent}}.$$

**(c)** Stabilization is a property of the protein pool as a whole and applies equally to mutant and wild-type subunits, so both cells rise 10-fold in total protein. But only 6.25 percent of the heterozygote's tetramers are functional, against 100 percent in the wild-type cell:

$$\frac{10 \times 0.0625}{10 \times 1} = \mathbf{6.25\ \text{percent}}.$$

**The response is essentially inadequate.** A ten-fold stabilization sounds like a strong reaction, and it leaves the heterozygous cell with roughly one-sixteenth the functional transcription factor of a normal cell — well below what an unstressed normal cell carries at baseline. This is why a single dominant-negative allele in a tetrameric tumour suppressor is so consequential: **the regulatory response is intact and simply cannot compensate, because it scales the wrong quantity.**

</details>

## Connections

- **Backward:** [3.1](03-01-cell-cycle-engine-irreversibility.md) supplied the CDK clock that gates resection; [3.2](03-02-dna-damage-response.md) supplied ATM, the sensor that calls this pathway into being.
- **Forward:** [3.4](03-04-cancer-failure-of-control.md) puts HR deficiency in context as one of several routes to genome instability, and picks up synthetic lethality as a therapeutic strategy.
- **Sideways:** the *meiotic* use of homologous recombination — deliberate breaks, deliberate use of the homologue, and crossing over as the source of genetic map distance — is [genetics 2.2](../../genetics/lessons/02-02-linkage-recombination.md); the same machinery, used for the opposite purpose.
