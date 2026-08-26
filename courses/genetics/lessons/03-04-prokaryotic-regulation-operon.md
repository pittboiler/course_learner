# Genetics · Lesson 3.4: Prokaryotic regulation — the operon

> ⏱ ~15 min · Module 3: Molecular Genetics & Gene Regulation · Builds on: [3.1](03-01-gene-as-molecule-complementation.md), [3.2](03-02-mutation.md) · Unlocks: 3.5 (eukaryotic regulatory logic)

## Why this matters

A bacterium in your gut does not know whether its next meal is glucose or lactose. Making the enzymes for lactose metabolism costs real resources — roughly 3 percent of total protein synthesis when fully induced — so making them when there is no lactose is waste, and not making them when there is lactose is starvation.

The *lac* operon is the solution, and it is worth studying for a reason beyond its own content: **Jacob and Monod worked out the entire logic genetically, before anyone had sequenced anything.** Their tool was the merodiploid — a bacterium carrying two copies of the region, one on the chromosome and one on a plasmid — and the question they asked of every mutation was whether it could be rescued by a good copy *elsewhere in the cell*. That question is the *cis*/*trans* distinction, and mastering it here is what lets you reason about regulation anywhere.

## The idea

**An operon is several genes under one promoter, transcribed as one message.** The *lac* operon has three: *lacZ* (β-galactosidase, cleaves lactose), *lacY* (permease, imports lactose), *lacA* (a transacetylase). One promoter, one mRNA, three proteins — **coordinate regulation for free.** This is why operons exist and why eukaryotes, lacking them, need other mechanisms to co-regulate genes.

**Negative control: a repressor sitting on the DNA.** The *lacI* gene, transcribed separately, makes the **Lac repressor**, which binds the **operator** — a short sequence overlapping the promoter — and physically blocks RNA polymerase.

**Induction is de-repression.** Lactose (via its isomer allolactose) binds the repressor and changes its shape so it lets go of the operator. Transcription proceeds.

$$\text{no lactose} \Rightarrow \text{repressor on operator} \Rightarrow \textbf{OFF}$$
$$\text{lactose present} \Rightarrow \text{repressor released} \Rightarrow \textbf{ON}$$

*In words: the operon is not switched on by lactose; it is un-switched-off.* The default is repression, and the inducer removes the block.

**Positive control: the cell would rather have glucose.** Even with lactose present, *lac* transcription is weak unless glucose is absent. The *lac* promoter is intrinsically poor and needs an activator: **CAP** (also called CRP) bound to **cAMP**. And cAMP levels are *inversely* related to glucose — glucose transport lowers cAMP.

$$\text{glucose low} \Rightarrow \text{cAMP high} \Rightarrow \text{CAP–cAMP binds} \Rightarrow \text{polymerase recruited}$$

**So the operon computes a logical AND**: lactose present **and** glucose absent. Full expression requires both conditions, and the two are implemented by completely different mechanisms — one removing a repressor, one recruiting an activator.

| Lactose | Glucose | Repressor | CAP–cAMP | Transcription |
|---|---|---|---|---|
| − | + | on operator | absent | **none** |
| − | − | on operator | bound | **none** (repressor still blocks) |
| + | + | released | absent | **very low** (weak promoter) |
| + | − | released | bound | **HIGH** |

**Now the crucial distinction: *cis* versus *trans*.**

- A ***trans*-acting** element makes a **diffusible product** — a protein or RNA that can find its target anywhere in the cell. The *lacI* repressor is *trans*-acting.
- A ***cis*-acting** element is a **DNA sequence** that only affects the genes physically next to it on the same molecule. The operator and promoter are *cis*-acting.

**The test is a merodiploid.** Put a wild-type copy of the region on a plasmid alongside a mutant chromosome. A *trans*-acting defect is **rescued** — the good copy's diffusible product serves both. A *cis*-acting defect is **not** — the good copy's operator sits on the wrong DNA molecule and cannot help the genes next to the bad one.

$$\textbf{Rescued in trans} \Rightarrow \text{the mutation was in a diffusible product.}$$
$$\textbf{Not rescued} \Rightarrow \text{the mutation was in a DNA site.}$$

## The formal version

**The genotype notation.** Write the chromosome, then a slash, then the plasmid (F′):

$$I^{+}\,P^{+}\,O^{+}\,Z^{-} \;/\; I^{-}\,P^{+}\,O^{+}\,Z^{+}$$

Symbols:

| Symbol | Meaning |
|---|---|
| $I^{+}$ | makes functional repressor — normal, inducible |
| $I^{-}$ | **no functional repressor** — cannot bind operator, so **constitutive** expression |
| $I^{S}$ | **super-repressor** — binds the operator but cannot bind inducer, so **never** releases; **uninducible** |
| $O^{+}$ | normal operator |
| $O^{c}$ | **operator constitutive** — mutated so the repressor cannot bind it |
| $P^{-}$ | promoter defective — no transcription regardless |
| $Z^{+}$ / $Z^{-}$ | functional / non-functional β-galactosidase |

**The three critical dominance relations**, which is what the whole exercise turns on:

1. **$I^{+}$ is dominant to $I^{-}$**, *in trans*. The repressor is a diffusible protein; one good copy makes enough repressor to bind **both** operators in the cell. A merodiploid $I^{-}/I^{+}$ is normally **inducible**.

2. **$I^{S}$ is dominant to $I^{+}$**, *in trans*. The super-repressor protein binds operators and cannot be removed by inducer. Making good repressor alongside it does not help — the bad protein still occupies operators. **A mutation that produces a poison is dominant; one that produces nothing is recessive** — the same principle as the dominant negatives of [1.2](01-02-when-dominance-breaks-down.md).

3. **$O^{c}$ is *cis*-dominant only.** An $O^{c}$ operator cannot be repressed, so the genes **on its own DNA molecule** are expressed constitutively — no amount of good repressor helps, because the repressor has nothing to bind. But the genes next to a normal $O^{+}$ operator elsewhere in the cell are regulated normally.

$$O^{c} \text{ affects only what is physically attached to it.}$$

**The procedure for any merodiploid genotype**, which you should follow mechanically:

1. **Find the repressor.** Is there an $I^{+}$ anywhere? Then repressor is present. Is there an $I^{S}$ anywhere? Then unremovable repressor is present, and it dominates.
2. **Take each operon separately.** For each copy, ask: does *its own* operator bind repressor ($O^{+}$) or not ($O^{c}$)? Does it have a working promoter and a working $Z$?
3. **Score each operon** for expression with and without inducer.
4. **Sum**: the cell makes β-galactosidase if *any* copy with a functional $Z$ is being transcribed.

**Never reason about the cell as a whole.** Reason about each operon separately, then add. This is the single technique that makes these problems easy.

**The *trp* operon: repressible, not inducible.** *lac* is switched on by its substrate; *trp* is switched **off** by its product. The *trp* repressor requires tryptophan as a **corepressor** — it can only bind the operator when tryptophan is bound to it:

$$\text{tryptophan plentiful} \Rightarrow \text{repressor active} \Rightarrow \textbf{OFF (stop making it)}$$

*In words: catabolic operons are induced by their substrate; anabolic operons are repressed by their product.* Both use a repressor; the ligand's effect is opposite.

**Attenuation, briefly — a second layer on *trp*.** The *trp* leader region encodes a short peptide containing two consecutive tryptophan codons, and the mRNA can fold into alternative stem-loops. When tryptophan is abundant, the ribosome translates the leader quickly, and the mRNA folds into a **terminator** that aborts transcription. When tryptophan is scarce, the ribosome stalls at the Trp codons, the mRNA folds differently, and transcription continues.

**This works only because bacterial transcription and translation are coupled** — a ribosome is translating the mRNA while RNA polymerase is still making it. No eukaryote can do this, since transcription is in the nucleus and translation in the cytoplasm, and this is one of the sharpest mechanistic differences between the two domains.

## Picture

![The lac operon drawn as a linear DNA map with the lacI gene and its own promoter, then the CAP site, the lac promoter, the operator overlapping it, and the structural genes lacZ, lacY and lacA. Four states are shown: no lactose with the repressor bound to the operator blocking polymerase; lactose present with allolactose bound to the repressor which has released; glucose present with low cAMP and no CAP bound giving weak transcription; and lactose present with glucose absent, CAP-cAMP bound and the repressor released, giving full transcription. Beside it, a merodiploid diagram showing a diffusible repressor reaching both operators while an operator-constitutive mutation affects only the genes physically attached to it.](assets/03-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — work three merodiploids).** For each genotype, state whether β-galactosidase is made in the **absence** and in the **presence** of lactose.

**(a) $I^{-}\,P^{+}\,O^{+}\,Z^{+}$ (haploid).**

Step 1: no functional repressor anywhere. Step 2: the operator is normal but there is nothing to bind it. Step 3: transcription proceeds regardless of lactose.

$$\text{absence: } \textbf{YES}, \qquad \text{presence: } \textbf{YES} \qquad \textbf{— constitutive.}$$

**(b) $I^{-}\,P^{+}\,O^{+}\,Z^{-} \;/\; I^{+}\,P^{+}\,O^{+}\,Z^{+}$.**

Step 1: the plasmid's $I^{+}$ makes **diffusible repressor**, which reaches both operators.
Step 2, chromosome: $O^{+}$ is repressed; $Z^{-}$ anyway, so irrelevant.
Step 2, plasmid: $O^{+}$ is repressed without inducer, released with inducer; $Z^{+}$.

$$\text{absence: } \textbf{NO}, \qquad \text{presence: } \textbf{YES} \qquad \textbf{— inducible, i.e. normal.}$$

**This is the demonstration that $I^{+}$ is *trans*-dominant to $I^{-}$**: one good copy of a diffusible protein rescues the whole cell.

**(c) $I^{+}\,P^{+}\,O^{c}\,Z^{-} \;/\; I^{+}\,P^{+}\,O^{+}\,Z^{+}$.**

Step 1: repressor present and normal.
Step 2, chromosome: $O^{c}$ **cannot be repressed**, so this operon is transcribed constitutively — but its $Z^{-}$ makes no enzyme, so nothing observable.
Step 2, plasmid: $O^{+}$ is repressed without inducer, released with it; $Z^{+}$.

$$\text{absence: } \textbf{NO}, \qquad \text{presence: } \textbf{YES} \qquad \textbf{— inducible.}$$

**And this is the demonstration that $O^{c}$ is *cis*-acting only.** The $O^{c}$ mutation is right there in the cell and does nothing, because the gene it controls is broken and the gene that works is attached to a normal operator. **Compare with the reverse arrangement** $I^{+}O^{c}Z^{+}/I^{+}O^{+}Z^{-}$, which is **constitutive** — the same two mutations, swapped between molecules, giving opposite phenotypes.

$$\textbf{That swap is the entire *cis*/*trans* test in one comparison.}$$

**Example 2 (why you'd care — a diagnostic problem with no obvious answer).** A mutant strain makes **no** β-galactosidase whether or not lactose is present. Three hypotheses: (i) $Z^{-}$, (ii) $P^{-}$, (iii) $I^{S}$. Design experiments to distinguish them.

**Test 1 — introduce an F′ carrying $I^{+}P^{+}O^{+}Z^{+}$ and test for induction.**

| Original defect | Result | Why |
|---|---|---|
| $Z^{-}$ | **inducible** | the plasmid supplies a good $Z$ under a normal operator |
| $P^{-}$ | **inducible** | same reason — the chromosome's dead promoter is irrelevant |
| $I^{S}$ | **still uninducible** | the super-repressor is diffusible and shuts down the plasmid's operon too |

**So Test 1 identifies $I^{S}$ immediately**, by the fact that it is the only one of the three that is *dominant in trans*.

**Test 2 — distinguish $Z^{-}$ from $P^{-}$: assay the permease, *lacY*.**

The operon is polycistronic, so a promoter defect kills **all three** gene products, while a $Z^{-}$ point mutation kills only β-galactosidase.

| Defect | β-gal | permease |
|---|---|---|
| $Z^{-}$ | absent | **present and inducible** |
| $P^{-}$ | absent | **absent** |

**The polycistronic structure is itself the diagnostic**, which is a nice illustration of why operons are worth their design cost — one promoter failure takes out a whole pathway, and one structural gene failure does not.

**Test 3 — confirm, by measuring mRNA.** $P^{-}$ produces **no *lac* mRNA at all**; $Z^{-}$ produces normal, inducible mRNA that simply encodes a broken enzyme. A Northern blot or RT-PCR settles it directly.

**The shape of the argument is worth extracting.** Three hypotheses that are indistinguishable by the original phenotype are separated by asking three different questions: *is the defect rescued in trans?* (finds the diffusible product), *does it affect the neighbouring genes?* (finds the shared promoter), and *is the message made at all?* (separates transcription from translation). **Every one of Jacob and Monod's conclusions came from questions of exactly this form**, and none of them required knowing a single base of sequence.

## Watch out

- **You might say lactose "turns on" the operon.** It removes a repressor. The distinction matters because it predicts that a cell with no repressor at all is **constitutive**, which is exactly the $I^{-}$ phenotype.
- **You might reason about the cell as a whole in a merodiploid.** Take each operon separately, decide whether *its own* operator is occupied, then add up the enzyme. This is the only reliable procedure.
- **You might expect $O^{c}$ to be dominant.** It is ***cis*-dominant only** — it affects the genes physically attached to it and nothing else. Whether a merodiploid carrying it is constitutive depends entirely on whether $Z^{+}$ is on the same molecule.
- **You might think $I^{S}$ and $I^{-}$ are both loss-of-function and therefore both recessive.** $I^{-}$ makes nothing and is recessive; $I^{S}$ makes a **poison** — a repressor that cannot be removed — and is dominant. Same gene, opposite dominance ([1.2](01-02-when-dominance-breaks-down.md)).
- **You might expect eukaryotic genes to work this way.** They do not: no operons, no coupled transcription and translation, and therefore no attenuation. [3.5](03-05-eukaryotic-regulatory-logic-epigenetics.md) is a different world.

## One-liner

> The operon is not switched on by lactose — it is un-switched-off — and every regulatory element sorts into diffusible products that rescue in *trans* or DNA sites that only affect what is attached to them.

## Problems

**P1 (🟢)** For each haploid genotype, state whether β-galactosidase is made without and with lactose: (a) $I^{+}P^{+}O^{+}Z^{+}$; (b) $I^{-}P^{+}O^{+}Z^{+}$; (c) $I^{S}P^{+}O^{+}Z^{+}$; (d) $I^{+}P^{-}O^{+}Z^{+}$; (e) $I^{+}P^{+}O^{c}Z^{+}$.

**P2 (🟡)** For each merodiploid, state expression without and with lactose, and name the principle it demonstrates: (a) $I^{S}P^{+}O^{+}Z^{+} / I^{+}P^{+}O^{+}Z^{+}$; (b) $I^{+}P^{+}O^{c}Z^{+} / I^{+}P^{+}O^{+}Z^{-}$; (c) $I^{-}P^{+}O^{c}Z^{-} / I^{+}P^{+}O^{+}Z^{+}$.

**P3 (🔴, bridges to 3.5 and to synthetic biology)** The *lac* operon computes "lactose AND NOT glucose." (a) Write out the truth table and identify which molecular event implements each input. (b) An engineer wants a strain that expresses a gene **only when glucose is present**, inverting one input. Propose a genetic design and explain how it works. (c) Explain why eukaryotes cannot use an operon, and name the two mechanisms they use instead to co-regulate genes that must be expressed together.

<details>
<summary>Solutions</summary>

**P1**

| | Genotype | No lactose | With lactose | Phenotype |
|---|---|---|---|---|
| (a) | $I^{+}P^{+}O^{+}Z^{+}$ | **no** | **yes** | inducible (wild-type) |
| (b) | $I^{-}P^{+}O^{+}Z^{+}$ | **yes** | **yes** | constitutive — no repressor made |
| (c) | $I^{S}P^{+}O^{+}Z^{+}$ | **no** | **no** | uninducible — repressor cannot release |
| (d) | $I^{+}P^{-}O^{+}Z^{+}$ | **no** | **no** | uninducible — no transcription at all |
| (e) | $I^{+}P^{+}O^{c}Z^{+}$ | **yes** | **yes** | constitutive — operator cannot be bound |

Note (c) and (d) have the **same phenotype** and completely different causes — which is exactly the diagnostic problem of Example 2.

**P2 (a) $I^{S}P^{+}O^{+}Z^{+} / I^{+}P^{+}O^{+}Z^{+}$**

The $I^{S}$ product is diffusible and binds both operators, and inducer cannot remove it. The $I^{+}$ repressor is also present but adds nothing — the operators are already occupied by protein that will not leave.

$$\text{no lactose: } \textbf{NO}, \qquad \text{lactose: } \textbf{NO} \qquad \textbf{— uninducible.}$$

**Principle: $I^{S}$ is *trans*-dominant to $I^{+}$**, because it produces a poison rather than nothing — the operon analogue of a dominant-negative allele ([1.2](01-02-when-dominance-breaks-down.md)).

**(b) $I^{+}P^{+}O^{c}Z^{+} / I^{+}P^{+}O^{+}Z^{-}$**

Chromosome: $O^{c}$ cannot be repressed → constitutively transcribed, and it carries $Z^{+}$ → **enzyme made always**.
Plasmid: $O^{+}$ repressed without inducer; $Z^{-}$ anyway.

$$\text{no lactose: } \textbf{YES}, \qquad \text{lactose: } \textbf{YES} \qquad \textbf{— constitutive.}$$

**Principle: $O^{c}$ is *cis*-dominant.** Compare with Example 1(c), which has the *same two mutations swapped between molecules* and is **inducible**. One comparison, two opposite phenotypes, and the only difference is which DNA molecule each mutation sits on.

**(c) $I^{-}P^{+}O^{c}Z^{-} / I^{+}P^{+}O^{+}Z^{+}$**

Step 1: the plasmid's $I^{+}$ makes diffusible repressor, so repressor is present in the cell.
Chromosome: $O^{c}$ is unrepressible and constitutively transcribed — but $Z^{-}$, so no enzyme.
Plasmid: $O^{+}$ is bound by the repressor without inducer, released with it; $Z^{+}$.

$$\text{no lactose: } \textbf{NO}, \qquad \text{lactose: } \textbf{YES} \qquad \textbf{— inducible.}$$

**Principle: both dominance relations at once.** $I^{+}$ rescues $I^{-}$ *in trans* (diffusible product), while $O^{c}$ fails to have any effect because it is *cis*-acting and the gene attached to it is dead. A genotype carrying two constitutive-looking mutations behaves entirely normally.

**P3 (a)**

| Lactose | Glucose | Repressor state | cAMP / CAP | Output |
|---|---|---|---|---|
| 0 | 0 | bound to operator | high / bound | **0** |
| 0 | 1 | bound to operator | low / unbound | **0** |
| 1 | 0 | released | high / bound | **1** |
| 1 | 1 | released | low / unbound | **~0** (basal only) |

That is `lactose AND (NOT glucose)`.

*Implementation of each input:*
- **Lactose** acts through **allolactose binding the LacI repressor**, changing its conformation so it releases the operator — an allosteric effect on a DNA-binding protein.
- **Glucose** acts indirectly, through **cAMP**: glucose transport lowers cAMP, and without cAMP the CAP activator cannot bind or recruit polymerase. Note this is the *inverting* input — glucose's presence is signalled by the *absence* of a second messenger.

**(b)** The design problem is to invert the glucose input, turning `NOT glucose` into `glucose`.

*Simplest design — two-stage inverter.* Put a **repressor** gene under CAP–cAMP control, and put the target gene under that repressor's operator:

$$\text{glucose absent} \Rightarrow \text{cAMP high} \Rightarrow \text{CAP on} \Rightarrow \text{repressor made} \Rightarrow \text{target } \textbf{OFF}$$
$$\text{glucose present} \Rightarrow \text{cAMP low} \Rightarrow \text{CAP off} \Rightarrow \text{no repressor} \Rightarrow \text{target } \textbf{ON}$$

Use a repressor orthogonal to the host's own regulation — TetR or LacI from a different operon — so the circuit does not cross-talk with native genes. **A NOT gate in a genetic circuit is just a repressor**, and chaining two of them inverts twice and gets you back where you started, which is why inverter count matters in circuit design.

*Alternative:* use a naturally glucose-activated promoter directly, if one is available in the host — but the inverter is the general solution and works for any input.

**(c) Why eukaryotes cannot use operons.** Two reasons, and both are structural rather than incidental:

1. **Eukaryotic ribosomes initiate at the 5′ cap and scan to the first AUG** ([molecular-cell-biology 4.3](../../molecular-cell-biology/lessons/04-03-rna-processing-mrna-life-cycle.md)). A polycistronic message would be translated only for its first gene; the downstream ones would never be reached. Bacterial ribosomes bind internal Shine–Dalgarno sequences and can initiate at each gene independently.

2. **Transcription and translation are spatially separated** by the nuclear envelope, so the transcription-translation coupling that attenuation depends on is impossible.

*What they use instead:*

- **Shared transcription-factor binding sites.** Genes scattered across the genome carry the same regulatory motifs and are bound by the same factors, so they respond together — a **regulon** rather than an operon. This is combinatorial control ([molecular-cell-biology 4.2](../../molecular-cell-biology/lessons/04-02-eukaryotic-transcription-machine.md)).

- **Coordinated chromatin domains.** Physically clustered genes can share an accessible chromatin domain or a locus control region, so opening the domain opens them all — the β-globin locus is the standard example ([molecular-cell-biology 4.1](../../molecular-cell-biology/lessons/04-01-chromatin-packaging-regulation.md), [3.5](03-05-eukaryotic-regulatory-logic-epigenetics.md)).

**Both eukaryotic solutions are more expensive than an operon and more flexible.** An operon co-regulates genes only if they are adjacent; a shared transcription factor co-regulates genes anywhere in the genome and can put the same gene in several different regulons at once. **The trade is compactness for combinatorial reach**, and it is the recurring theme of the prokaryote/eukaryote comparison.

</details>

## Flashback

**From Lesson 3.3 (repair pathways and the fidelity filters):** (a) Replication fidelity is $10^{-5}$ from base pairing, $10^{-7}$ with proofreading, $10^{-9}$ with mismatch repair. A bacterium loses MMR. What is its new per-base error rate, and by what factor has it risen? (b) *E. coli* has a $4.6\times10^{6}$ bp genome. How many mutations per genome per replication before and after? (c) Name the strand-discrimination mechanism MMR uses in *E. coli* and explain why it is needed.

<details>
<summary>Solution</summary>

**(a)** Losing MMR removes the last hundredfold filter:

$$10^{-9} \;\longrightarrow\; 10^{-7}\ \text{per base per replication}, \qquad \text{a } \mathbf{100\text{-fold}} \text{ rise}.$$

**(b)** $$\text{normal: } 4.6\times10^{6} \times 10^{-9} = \mathbf{0.0046}\ \text{mutations per genome per replication},$$

i.e. about one mutation every 220 replications.

$$\text{MMR-null: } 4.6\times10^{6} \times 10^{-7} = \mathbf{0.46},$$

i.e. roughly one mutation every other replication — a **mutator strain**, and easily detectable by measuring the frequency of reversion or of resistance mutations.

**(c)** *E. coli* MMR uses **DNA methylation at GATC sites**. The parental strand is methylated by Dam methylase; the newly-synthesized strand is transiently **unmethylated** for a few minutes after replication. MMR corrects the **unmethylated** strand.

**Why it is needed:** a mismatch means one of the two paired bases is wrong, and the repair machinery has no way to tell which from the chemistry alone. Correcting the *parental* strand would take a correct sequence and change it to match a replication error — converting a transient mismatch into a permanent mutation on both strands. Strand discrimination is what makes mismatch repair a repair mechanism rather than a coin flip.

</details>

## Connections

- **Backward:** the *cis*/*trans* logic here is the same distinction as the complementation test of [3.1](03-01-gene-as-molecule-complementation.md) — both ask whether a defect can be rescued by a good copy elsewhere in the cell; $I^{S}$ versus $I^{-}$ is [1.2](01-02-when-dominance-breaks-down.md)'s dominant-negative versus null.
- **Forward:** [3.5](03-05-eukaryotic-regulatory-logic-epigenetics.md) asks what changes when there are no operons and the DNA is packaged; [3.6](03-06-reading-editing-genes.md) uses inducible promoters as laboratory tools.
- **Sideways:** the *machinery* of eukaryotic transcription — Pol II, Mediator, enhancer loops, pausing — is [molecular-cell-biology 4.2](../../molecular-cell-biology/lessons/04-02-eukaryotic-transcription-machine.md); the CAP–cAMP arm is the same second-messenger logic as [molecular-cell-biology 2.2](../../molecular-cell-biology/lessons/02-02-second-messengers-amplification.md), and the AND-gate structure is the circuit reasoning of [molecular-cell-biology 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md).
