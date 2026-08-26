# Genetics · Lesson 3.2: Mutation

> ⏱ ~15 min · Module 3: Molecular Genetics & Gene Regulation · Builds on: [3.1](03-01-gene-as-molecule-complementation.md), [general-biology 3.4](../../general-biology/lessons/03-04-central-dogma.md) · Unlocks: 3.3 (DNA repair)

## Why this matters

Mutation is the only source of new alleles. Everything genetics studies — dominance, linkage, quantitative variation, evolution itself — is downstream of a process that changes one base into another at a rate of roughly $10^{-8}$ per base per generation.

That rate is astonishingly low and yet not low at all. Your genome is $3\times10^{9}$ bases, so **you carry roughly 60 to 70 mutations neither of your parents had.** Most do nothing. A few do something. The whole of this lesson is about classifying which is which, and the classification matters because the same chemical change can be silent, lethal, or beneficial depending entirely on *where* it lands.

## The idea

**Two classifications, and keeping them separate is most of the skill.**

**By molecular change** — what physically happened to the DNA:

| Type | Change | Note |
|---|---|---|
| **Transition** | purine↔purine (A↔G) or pyrimidine↔pyrimidine (C↔T) | **commoner**, though only 4 of 12 possible substitutions |
| **Transversion** | purine↔pyrimidine | rarer per opportunity |
| **Insertion / deletion (indel)** | bases added or removed | frame consequences if not a multiple of 3 |
| **Duplication / expansion** | repeat copy number changes | trinucleotide repeat diseases |

**By effect on the protein** — what the change does downstream:

| Type | Effect | Typical consequence |
|---|---|---|
| **Silent (synonymous)** | codon changes, amino acid does not | usually none — but see below |
| **Missense** | one amino acid substituted | anything from nothing to lethal |
| **Nonsense** | codon → stop | truncation, and usually **no protein at all** ([molecular-cell-biology 4.3](../../molecular-cell-biology/lessons/04-03-rna-processing-mrna-life-cycle.md)) |
| **Frameshift** | indel not a multiple of 3 | everything downstream scrambled — usually a null |
| **Splice-site** | disrupts an intron boundary | exon skipped or intron retained; frame often shifts |
| **Regulatory** | changes expression, not sequence | dosage effects; often subtle |

**Transitions outnumber transversions roughly 2:1** even though transversions have twice as many ways to happen — so per opportunity, transitions are about **four times** more likely. The main reason is chemical: **5-methylcytosine spontaneously deaminates to thymine**, and CpG dinucleotides are methylated in vertebrate genomes ([molecular-cell-biology 4.1](../../molecular-cell-biology/lessons/04-01-chromatin-packaging-regulation.md)). This makes CpG sites **mutational hotspots**, roughly 10-fold above background, and a large fraction of human disease point mutations sit at them.

**The genetic code buffers missense.** The code is arranged so that the third base is largely redundant, and chemically similar amino acids have similar codons. So:

- A random third-position change is very often **silent**.
- A random first- or second-position change is almost always **missense**, but frequently to a *chemically similar* amino acid.

**The code is not arbitrary — it is error-tolerant**, and there is good evidence this is a selected property.

**Forward versus reverse mutation.** A **forward** mutation breaks a gene; there are hundreds of ways to do that, so forward rates are relatively high. A **reverse** mutation (reversion) must restore function, and there is usually **one** way to do that exactly — so reversion rates are typically 10 to 100 times lower.

$$\mu_{\text{forward}} \gg \mu_{\text{reverse}}$$

*In words: there are many ways to break a machine and few ways to unbreak it.* And a phenotypic "revertant" is often not a true reversion at all but a **suppressor** — a second mutation elsewhere that compensates.

## The formal version

**Mutation rate, defined carefully.** Two different quantities that are constantly conflated:

$$\mu_{\text{site}} = \text{per base pair per generation} \approx 1.2\times10^{-8} \ \text{in humans}$$
$$\mu_{\text{locus}} = \text{per gene per generation} \approx 10^{-6}\text{–}10^{-5}$$

They are related by gene size — a 1 kb coding sequence at $1.2\times10^{-8}$ per base gives $1.2\times10^{-5}$ per gene, but only a fraction of those changes destroy function.

**The whole-genome number, which is worth carrying:**

$$3\times10^{9}\ \text{bp} \times 2\ (\text{diploid}) \times 1.2\times10^{-8} = \mathbf{\sim 70\ \textit{de novo}\ \text{mutations per person}}.$$

Of these, roughly **1–2 land in coding sequence**, and typically **fewer than one** is expected to be seriously deleterious per individual.

**The reading-frame arithmetic, which is the single most useful rule.** For an indel of $n$ bases:

$$n \equiv 0 \pmod 3 \;\Rightarrow\; \text{in-frame; } n/3 \text{ residues added or removed}$$
$$n \not\equiv 0 \pmod 3 \;\Rightarrow\; \textbf{frameshift}$$

A frameshift scrambles every codon downstream, hits a premature stop within roughly 20 codons on average (since 3 of 64 codons are stops, the expected run length is $64/3 \approx 21$), and the resulting premature stop usually triggers nonsense-mediated decay. **A one-base insertion is therefore almost always a null allele; a three-base deletion frequently is not.** This is the arithmetic behind the Duchenne-versus-Becker distinction and the exon-skipping therapy of [molecular-cell-biology 4.3](../../molecular-cell-biology/lessons/04-03-rna-processing-mrna-life-cycle.md).

**Silent mutations are not always silent**, and this is the modern correction to the textbook table. Synonymous changes can:

- alter **splice enhancer** sequences, causing exon skipping;
- change **codon usage**, altering translation speed and therefore co-translational folding;
- disrupt **miRNA binding sites** or mRNA secondary structure, changing half-life.

*In words: "silent" refers to the amino acid, not to the phenotype.*

**Trinucleotide repeat expansion — the mutation type that breaks the rules.** A repeat like $(\mathrm{CAG})_n$ can expand during replication when the nascent strand slips and mispairs. Three properties make this class distinctive:

1. The mutation rate **depends on the current allele length** — longer repeats expand faster. There is a threshold below which the allele is stable.
2. It produces **anticipation**: the disease appears earlier and more severely in each successive generation, because the repeat grows as it is transmitted.
3. Expansion is often **sex-biased** in transmission — for Huntington disease, large expansions come overwhelmingly through the father.

**Anticipation was dismissed as an artefact of ascertainment for decades** before repeat expansion explained it. It is a genuine violation of the assumption that alleles are transmitted unchanged, and there was no mechanism for it until 1991.

**Spontaneous versus induced.** Spontaneous mutations arise from replication error, tautomeric shifts, depurination (about 10,000 per cell per day), and deamination. Induced mutations come from mutagens:

| Mutagen | Mechanism | Signature |
|---|---|---|
| Base analogues (5-BU) | mispair as a different base | transitions |
| Deaminating agents (nitrous acid) | C→U, A→hypoxanthine | transitions |
| Alkylating agents (EMS) | add alkyl groups, altering pairing | mostly G:C→A:T transitions |
| Intercalators (acridines) | slot between bases | **single-base indels → frameshifts** |
| UV | pyrimidine dimers | C→T at dipyrimidines |
| Ionizing radiation | strand breaks | deletions, translocations ([2.4](02-04-chromosomal-mutations.md)) |

**Each mutagen leaves a characteristic signature**, and this is now used at scale: the mutational spectrum of a tumour identifies the carcinogen that caused it — a UV signature in melanoma, a tobacco signature in lung cancer.

## Picture

![A codon table region illustrating the third-base redundancy, with a single gene sequence shown four times: unchanged, with a silent third-base substitution, with a missense first-base substitution, and with a single-base insertion producing a frameshift that scrambles every downstream codon and reaches a premature stop. Alongside, a diagram of 5-methylcytosine deaminating to thymine to explain why CpG sites are transition hotspots, and a plot of trinucleotide repeat length against generation showing expansion and anticipation.](assets/03-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — classify four changes in one sequence).** A coding sequence begins

$$5'\text{-}\texttt{ATG GCA TCG AAG CTA TGG}\text{-}3' \;\longrightarrow\; \text{Met-Ala-Ser-Lys-Leu-Trp}$$

Classify each change and give the resulting peptide. Use: GCA/GCG = Ala, TCG = Ser, AAG = Lys, AAC = Asn, CTA = Leu, TGG = Trp, TGA = stop, ATG = Met.

**(a) GCA → GCG (codon 2, third base).** Both encode Ala.

$$\text{Met-Ala-Ser-Lys-Leu-Trp — unchanged. } \textbf{Silent (transition, A}\to\textbf{G).}$$

**(b) AAG → AAC (codon 4, third base).** Lys → Asn.

$$\text{Met-Ala-Ser-}\mathbf{Asn}\text{-Leu-Trp. } \textbf{Missense (transversion, G}\to\textbf{C).}$$

Note that a *third-base* change is usually silent but not always — the third position is redundant for most amino acids but not for the two-codon families like Lys (AAA/AAG) where only two of the four third bases are synonymous.

**(c) TGG → TGA (codon 6).** Trp → stop.

$$\text{Met-Ala-Ser-Lys-Leu — truncated. } \textbf{Nonsense (transition, G}\to\textbf{A).}$$

**(d) Insert a single T after position 6** (after `ATG GC`):

$$\texttt{ATG GCT ATC GAA GCT ATG G...}$$

$$\text{Met-Ala-Ile-Glu-Ala-Met... } \textbf{Frameshift.}$$

Every codon from position 3 onward is different. **One inserted base changed four amino acids and counting, where a substitution changed one.**

**The comparison is the point.** Four chemically comparable events — each a change of one nucleotide — with outcomes ranging from nothing at all to complete destruction of the product. **Position and reading frame matter more than chemistry.**

**Example 2 (why you'd care — anticipation, and a prediction it makes).** Huntington disease is caused by CAG expansion in *HTT*. Alleles under 27 repeats are normal and stable; 27–35 are normal but unstable; 36–39 give reduced penetrance; 40 and above are fully penetrant. Age of onset correlates inversely with repeat length. (a) Explain anticipation mechanistically. (b) A man with 42 repeats has three children. Predict what happens to their repeat lengths and why the paternal route matters. (c) The disease is dominant, late-onset and fatal — explain why selection has not eliminated it.

(a) The repeat **expands during transmission** because the polymerase slips on the repetitive template and the nascent strand mispairs, adding copies. Longer repeats slip more, so expansion is self-accelerating past a threshold. Since onset age falls as repeat length rises, each generation inherits a longer allele and develops the disease **earlier and more severely** — which is exactly the definition of anticipation.

**And this explains why anticipation looked like an artefact.** Before 1991 there was no mechanism by which an allele could change on transmission, so earlier onset in later generations was attributed to ascertainment bias (later generations are watched more closely). The repeat mechanism made it a real, measurable, molecular phenomenon.

(b) Expansions are far larger through the **male** germ line. The reason is the difference in germ-cell biology from [2.4](02-04-chromosomal-mutations.md): spermatogonial stem cells divide continuously through adult life, so a repeat passes through hundreds of replication events, each an opportunity to slip. Oocytes complete their replication before birth.

So his three children are likely to inherit alleles **longer than 42**, sometimes substantially — expansions of 5 to 10 repeats are common through the paternal line, and the largest expansions producing juvenile-onset Huntington disease are almost exclusively paternally transmitted.

$$\textbf{Paternal transmission} \Rightarrow \text{large expansion} \Rightarrow \text{earlier onset} \Rightarrow \text{juvenile Huntington}$$

(c) Because **onset is typically after age 40, and reproduction is typically before it.** Selection can only act on differences in reproductive success, and a disease that strikes after most childbearing is nearly invisible to it. The selection coefficient against a Huntington allele is small — carriers have close to normal numbers of children.

This is a general and important principle: **the strength of selection against a deleterious allele scales with how much reproduction it prevents, not with how bad it is.** Late-onset dominant diseases persist because they arrive after the gene has already been transmitted; early-onset recessive ones persist for a completely different reason (heterozygote hiding, [general-biology 4.2](../../general-biology/lessons/04-02-evolution-in-populations.md)). The persistence has to be explained, and the explanation differs by class.

## Watch out

- **You might think "silent" means "no phenotype."** It means the amino acid is unchanged. Synonymous changes can disrupt splice enhancers, alter translation speed and folding, and change mRNA stability — and some are pathogenic.
- **You might expect a nonsense mutation to make a truncated protein.** Usually it makes **none**, because nonsense-mediated decay destroys the message first ([molecular-cell-biology 4.3](../../molecular-cell-biology/lessons/04-03-rna-processing-mrna-life-cycle.md)). Whether it does depends on where the stop sits relative to the last exon junction.
- **You might treat all indels alike.** Divisibility by three is everything: a 3-base deletion removes one residue, a 1-base deletion destroys the protein.
- **You might assume reversion restores the original base.** Most phenotypic revertants are **suppressors** — a second mutation elsewhere that compensates — which is why a revertant should always be tested by crossing it out and seeing whether the mutant phenotype reappears.
- **You might treat the mutation rate as uniform.** CpG sites mutate ~10-fold faster; heterochromatin mutates faster than euchromatin ([molecular-cell-biology 4.1](../../molecular-cell-biology/lessons/04-01-chromatin-packaging-regulation.md)); late-replicating regions faster than early. "Background rate" is a local quantity.

## One-liner

> The same single-base change can be silent, missense, nonsense or nothing — the chemistry is identical and the position decides — and a one-base insertion is worse than any substitution because it destroys the frame rather than a codon.

## Problems

**P1 (🟢)** A codon reads `TGC` (Cys) in the coding strand. Using TGC/TGT = Cys, TGG = Trp, TAC = Tyr, TGA = stop, CGC = Arg: classify each single-base change and name the transition/transversion status: (a) TGC→TGT; (b) TGC→TGG; (c) TGC→TAC; (d) TGC→TGA; (e) TGC→CGC.

**P2 (🟡)** A gene's coding sequence is 1500 bp. (a) At $\mu = 1.2\times10^{-8}$ per bp per generation, what is the per-gene mutation rate? (b) Roughly what fraction of random single-base substitutions in coding sequence are expected to be silent, given that the third position is usually redundant? Estimate and justify. (c) In a population of 100,000 individuals, roughly how many carry a *de novo* mutation somewhere in this gene?

**P3 (🔴, bridges to 2.4 and to evolution)** A researcher measures the forward mutation rate at a locus as $2\times10^{-5}$ per generation and the reverse rate as $4\times10^{-7}$. (a) Explain the 50-fold asymmetry mechanistically. (b) At mutation equilibrium with no selection, allele frequencies satisfy $\hat{q} = \mu/(\mu + \nu)$ where $\mu$ is forward and $\nu$ reverse. Compute the equilibrium frequency of the mutant allele. (c) The observed frequency in a real population is $10^{-4}$, far below your answer. What does this tell you, and what would you need to measure to test it?

<details>
<summary>Solutions</summary>

**P1**

| | Change | Base change | Type | Effect |
|---|---|---|---|---|
| (a) TGC→TGT | Cys→Cys | C→T, pyrimidine↔pyrimidine | **transition** | **silent** |
| (b) TGC→TGG | Cys→Trp | C→G | **transversion** | **missense** |
| (c) TGC→TAC | Cys→Tyr | G→A, purine↔purine | **transition** | **missense** |
| (d) TGC→TGA | Cys→stop | C→A | **transversion** | **nonsense** |
| (e) TGC→CGC | Cys→Arg | T→C, pyrimidine↔pyrimidine | **transition** | **missense** |

Note (b) and (c): both missense, but Cys→Trp and Cys→Tyr are chemically rather different substitutions from Cys→Arg in (e) — swapping a small thiol-bearing residue for a large positively-charged one is far more disruptive. **Missense severity is a property of the amino acids, not of the base change.**

**P2 (a)** $$\mu_{\text{gene}} = 1500 \times 1.2\times10^{-8} = \mathbf{1.8\times10^{-5}}\ \text{per gene per gamete per generation}.$$

**(b)** Estimate from the code's structure. Of the three positions in a codon:

- **Third position:** for most amino acids all four bases are synonymous (fourfold degenerate families like Ala, Val, Pro, Thr, Gly), and for the rest two of the three possible changes are synonymous (twofold families like Lys, Phe). Call it roughly **70 percent silent** at position 3.
- **Second position:** essentially **0 percent** silent — a second-base change always changes the amino acid.
- **First position:** a small fraction silent (Leu and Arg have six codons split across two first bases), call it **5 percent**.

Averaging over the three positions:

$$\frac{0.70 + 0.00 + 0.05}{3} = 0.25 .$$

So roughly **25 percent of random coding substitutions are silent** — and the standard figure quoted from actual codon-table enumeration is about **24 percent**, so the estimate is sound. **A quarter of coding mutations are invisible to the protein, purely because of how the code is arranged.**

**(c)** Each individual has two copies of the gene, and each was transmitted through a gamete carrying $\mu_{\text{gene}}$:

$$100{,}000 \times 2 \times 1.8\times10^{-5} = \mathbf{3.6\ \text{individuals}}.$$

So in a town of 100,000, expect about **4 people** with a brand-new mutation in this one gene. Scaled to all ~20,000 genes, that is why *de novo* dominant disease is not rare in aggregate even though each specific condition is.

**P3 (a)** **There are many ways to break a gene and few ways to fix one.**

A forward mutation just has to destroy function, and any of hundreds of positions will do it — a nonsense codon anywhere in the first 90 percent, a frameshift anywhere, a missense at any critical residue, a splice-site disruption at any of the intron boundaries. The forward rate is a sum over all of these targets.

A true reverse mutation must restore function, which typically means **changing exactly the base that was changed, back**. That is one specific event at one specific site — a target roughly a hundred-fold smaller.

$$\mu_{\text{forward}} \propto (\text{number of ways to break}), \qquad \nu_{\text{reverse}} \propto (\text{number of ways to fix}) \approx 1$$

The observed 50-fold ratio is squarely in the usual 10–100 range.

**(b)** $$\hat{q} = \frac{\mu}{\mu + \nu} = \frac{2\times10^{-5}}{2\times10^{-5} + 4\times10^{-7}} = \frac{2\times10^{-5}}{2.04\times10^{-5}} = \mathbf{0.980}.$$

**Mutation alone drives the mutant allele almost to fixation** — which is the correct and slightly startling conclusion. Mutation pressure is directional (breaking is easier than fixing), and with nothing opposing it the broken allele wins.

**(c)** The observed frequency of $10^{-4}$ is **four orders of magnitude below** the mutation equilibrium, so something is removing the mutant allele. That something is **selection**: the mutant allele is deleterious and is purged faster than mutation supplies it.

The system is at **mutation–selection balance**, not mutation equilibrium. For a deleterious recessive with selection coefficient $s$, the balance is

$$\hat{q} = \sqrt{\frac{\mu}{s}} \quad\Longrightarrow\quad s = \frac{\mu}{\hat{q}^{2}} = \frac{2\times10^{-5}}{(10^{-4})^{2}} = \frac{2\times10^{-5}}{10^{-8}} = 2000,$$

which exceeds 1 and is therefore impossible — telling you immediately that the allele **cannot be recessive**. Retrying for a dominant (or a recessive whose heterozygotes are also selected against), the balance is $\hat{q} = \mu/s$:

$$s = \frac{\mu}{\hat q} = \frac{2\times10^{-5}}{10^{-4}} = 0.2 .$$

**A 20 percent fitness reduction, acting on heterozygotes.** That is a self-consistent answer, and the failed recessive calculation is what pointed to it.

*What you would measure to test it:* the fitness of heterozygotes directly — their number of surviving offspring relative to homozygous wild-type individuals. A 20 percent deficit is large enough to detect in a demographic study of a few thousand families. You would also check that the allele frequency is stable across generations (confirming equilibrium rather than a declining allele caught mid-purge) and, ideally, look for the same frequency in an independent population, since two populations arriving at the same $\hat q$ is strong evidence for a balance rather than a historical accident. The full machinery for this is [evolution-ecology 1.5](../../evolution-ecology/lessons/01-05-mutation-balance-of-forces.md).

</details>

## Flashback

**From Lesson 3.1 (complementation and recombination):** Two recessive mutants $u$ and $v$ with identical phenotypes are crossed. (a) The offspring are wild-type — what do you conclude, and what $F_2$ ratio would confirm it? (b) In a different pair, $w$ and $z$, the offspring are mutant, but screening $2\times10^{6}$ offspring of a $w \times z$ cross yields 5 wild-type. Compute the recombination frequency and interpret. (c) A third mutant $y$ fails to complement both $w$ and $z$ and yields **no** wild-type recombinants with either. What is $y$?

<details>
<summary>Solution</summary>

**(a)** They **complement**, so $u$ and $v$ are in **different genes**. The confirming observation is the $F_2$ from intercrossing the $F_1$: if both gene products are required for the wild-type phenotype, the ratio is

$$\mathbf{9\ \text{wild-type} : 7\ \text{mutant}}$$

— complementary gene action ([1.3](01-03-epistasis-pleiotropy.md)).

**(b)** They fail to complement, so $w$ and $z$ are in the **same gene**. But they recombine:

$$\mathrm{RF} = 2 \times \frac{5}{2\times10^{6}} = 5\times10^{-6} = 0.0005\ \text{map units},$$

(the factor of 2 accounting for the undetected reciprocal double mutant).

**Interpretation:** two distinct mutable sites within one gene. They destroy the same function and are physically separable — the central result of [3.1](03-01-gene-as-molecule-complementation.md), and the reason the gene had to be redefined as a stretch rather than a point.

**(c)** $y$ is a **deletion** spanning both the $w$ and $z$ sites.

It fails to complement because no gene product is made; it fails to recombine because there is no DNA at those positions for a crossover to restore. **Only a deletion produces both failures simultaneously** — a point mutation anywhere would still recombine with a point mutation at a different site.

And $y$ is now a tool: crossed against any new mutant in the region, a yes/no answer on whether wild-type recombinants appear places that mutation inside or outside $y$'s interval, with no frequency measurement required. That is deletion mapping.

</details>

## Connections

- **Backward:** [3.1](03-01-gene-as-molecule-complementation.md) established the gene as a stretch of mutable sites; this lesson says what happens at one of them.
- **Forward:** [3.3](03-03-dna-repair.md) covers how the cell prevents and reverses these changes; [3.6](03-06-reading-editing-genes.md) shows how to make them deliberately.
- **Sideways:** frameshift arithmetic and nonsense-mediated decay are [molecular-cell-biology 4.3](../../molecular-cell-biology/lessons/04-03-rna-processing-mrna-life-cycle.md); mutation as the raw material of evolution and mutation–selection balance are [evolution-ecology 1.5](../../evolution-ecology/lessons/01-05-mutation-balance-of-forces.md); mutation rate raised by a caretaker defect is [molecular-cell-biology 3.4](../../molecular-cell-biology/lessons/03-04-cancer-failure-of-control.md).
