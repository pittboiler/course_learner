# Genetics · Lesson 4.4: Linkage disequilibrium, haplotypes & GWAS

> ⏱ ~15 min · Module 4: Quantitative Genetics, Populations & Genomes · Builds on: [4.3](04-03-inbreeding-relatedness-structure.md), [2.2](02-02-linkage-recombination.md) · Unlocks: 4.5 (human genome medicine)

## Why this matters

[4.2](04-02-response-to-selection-qtl.md) left QTL mapping with a resolution problem: an $F_2$ cross has been through one or two meioses, so a QTL interval spans tens of centimorgans and hundreds of genes. Getting finer resolution needs more recombination events, and more recombination needs more generations.

**A natural population is a mapping cross that has been running for thousands of generations.** Every ancestral chromosome has been shuffled tens of thousands of times, so only the very closest loci remain correlated. That correlation — **linkage disequilibrium** — is what makes it possible to scan a whole genome with a few hundred thousand markers and localize a signal to tens of kilobases rather than tens of megabases.

This lesson is Module 2's linkage logic operating at population scale, and it is the direct foundation of essentially all modern human complex-trait genetics.

## The idea

**Linkage disequilibrium is a correlation between alleles at different loci.** Not between loci — between *alleles*. Two loci are in **linkage equilibrium** when knowing which allele you have at one tells you nothing about the other; they are in **disequilibrium** when it tells you something.

**Linkage and linkage disequilibrium are different things, and confusing them is the classic error:**

| | Linkage | Linkage disequilibrium |
|---|---|---|
| A property of | **loci** — their physical positions | **alleles** — a population's history |
| Measured in | families, one or two meioses | populations, thousands of meioses |
| Two loci 1 cM apart | always linked | **may or may not** be in LD |
| Can unlinked loci show it? | no | **yes** — through structure or recent admixture |

*In words: linkage is about geography, LD is about history.* Two loci can be tightly linked and in perfect equilibrium if they have been segregating together for long enough.

**LD decays with recombination, exponentially.** Each generation, a fraction $c$ of chromosomes recombine between the two loci and break the association. After $t$ generations:

$$D_t = D_0 (1-c)^{t}$$

**So LD extends further where recombination is rare and where the population is young.** In humans, LD typically extends 10–100 kb; in populations that went through a recent bottleneck (Finnish, Icelandic, Ashkenazi Jewish) it extends much further, which is why those populations are so valuable for mapping.

**Haplotype blocks.** Because recombination is not uniform — it concentrates in **hotspots** a few kilobases wide — the genome is organized into blocks of tens of kilobases within which almost no recombination has occurred, separated by hotspots. Within a block, only a handful of distinct haplotypes are common.

**And that gives you the trick that made GWAS affordable.** If a block has only 4 common haplotypes, then genotyping **2 or 3 well-chosen SNPs** identifies which haplotype a person carries, and therefore predicts every other variant in the block. These are **tagging SNPs**, and it is why a 500,000-SNP array can capture most common variation in a 3-billion-base genome.

**GWAS, in one sentence.** Genotype a few hundred thousand tagging SNPs in tens of thousands of cases and controls, and test each one for association with the trait.

**The consequence you must internalize: the hit is almost never causal.** A significant SNP is a **tag** — it is in LD with the causal variant, which is somewhere in the same block, possibly a different variant type, possibly in a regulatory element rather than a gene.

$$\textbf{GWAS localizes; it does not identify.}$$

## The formal version

**Measuring LD.** For two loci with alleles $A/a$ and $B/b$ at frequencies $p_A, p_B$, define the haplotype frequency $p_{AB}$. The basic measure is

$$\boxed{\;D = p_{AB} - p_A p_B\;}$$

*In words: how much more common the $AB$ haplotype is than it would be if the two loci were independent.* $D = 0$ is equilibrium.

**But raw $D$ is uninterpretable, because its range depends on the allele frequencies.** Two standardized measures fix this:

$$D' = \frac{D}{D_{\max}}, \qquad D_{\max} = \begin{cases} \min(p_A p_b,\ p_a p_B) & D > 0\\ \min(p_A p_B,\ p_a p_b) & D < 0\end{cases}$$

$$r^{2} = \frac{D^{2}}{p_A p_a p_B p_b}$$

**They answer different questions, and choosing the right one matters:**

- **$D' = 1$** means **no recombination** has occurred between the two loci since the mutations arose — at least one of the four possible haplotypes is entirely absent. It is a statement about **history**.
- **$r^{2}$** is the squared correlation between the two loci' genotypes — it is what determines **how well one SNP predicts another**, and therefore how much power you lose by genotyping a tag instead of the causal variant.

$$\textbf{Use } D' \textbf{ to describe recombination history; use } r^{2} \textbf{ to design a study.}$$

**The power relation, which is the practically important formula.** If the causal variant has effect size giving a required sample size $N$ when typed directly, then testing a tag SNP in LD $r^2$ with it requires

$$\boxed{\;N_{\text{tag}} = \frac{N}{r^{2}}\;}$$

*In words: a tag with $r^2 = 0.5$ needs twice the sample size.* This single relation explains most of the design of the field — why arrays are chosen to maximize the minimum $r^2$ to untyped variants, and why **imputation** (statistically inferring untyped genotypes from a reference panel of sequenced haplotypes) is universal: it effectively raises $r^2$ to nearly 1 for common variants at no genotyping cost.

**Significance thresholds and why they are so extreme.** Testing $m$ independent hypotheses at level $\alpha$ gives an expected $m\alpha$ false positives. With ~1 million effectively independent common variants in the human genome, a Bonferroni correction at $\alpha = 0.05$ gives

$$\alpha_{\text{genome-wide}} = \frac{0.05}{10^{6}} = 5\times10^{-8}.$$

**This is *the* genome-wide significance threshold**, and it is not arbitrary — it is one number divided by another, and it is why a $p$-value of $10^{-6}$, which would be spectacular in any other field, is not reportable here.

**Reading a Manhattan plot.** Position along the genome on the $x$-axis, $-\log_{10}p$ on the $y$-axis, with the threshold at 7.3. Genuine associations appear as **towers**, not single points — because the causal variant is in LD with its neighbours, all of which show correlated signal.

$$\textbf{A lone significant SNP with no supporting neighbours is usually a genotyping artefact.}$$

**Stratification, revisited.** [4.3](04-03-inbreeding-relatedness-structure.md) established that ancestry differences between cases and controls produce spurious association at any ancestry-informative SNP. The diagnostic is the **genomic inflation factor**:

$$\lambda_{GC} = \frac{\text{median observed } \chi^{2}}{0.456}$$

$\lambda \approx 1$ is clean; $\lambda \gg 1$ means the *whole distribution* of test statistics is inflated, which no single causal locus can do. Correction is by including principal components as covariates, or by mixed models that use a genetic relatedness matrix.

**The missing heritability problem.** Twin studies say human height is about 80 percent heritable. The first GWAS found ~40 loci explaining **5 percent**. Where did the rest go? Several answers, all partly true:

1. **Many more variants of smaller effect.** Raising sample sizes from thousands to millions has now found thousands of height loci explaining ~25 percent, and the curve is still rising.
2. **Rare variants**, which arrays do not tag and which need sequencing.
3. **Non-additive variance** — dominance and epistasis inflate twin-based $H^2$ but are not captured by additive GWAS models ([4.1](04-01-quantitative-traits-heritability.md)).
4. **Overestimated $H^2$** from twin studies, through violated equal-environment or gene–environment-independence assumptions.
5. **Structural variants and repeats**, poorly captured by SNP arrays.

**The problem has substantially dissolved rather than been solved** — the gap narrowed from every direction at once as sample sizes and technology improved, which is the usual fate of a discrepancy that has several small causes rather than one large one.

## Picture

![Left: an ancestral chromosome carrying a new mutation, followed over many generations as recombination progressively shortens the surrounding conserved haplotype, with a plot of D decaying exponentially as one minus c to the power t. Centre: a haplotype block structure with recombination hotspots between blocks, showing that only four common haplotypes exist within a block and that two tagging SNPs suffice to distinguish them. Right: a Manhattan plot with position on the x-axis and negative log p on the y-axis, a genome-wide threshold line at 7.3, one genuine tower of correlated signal, and a single isolated point annotated as a likely artefact.](assets/04-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — compute LD and its consequence for study design).** In a population, two SNPs have haplotype frequencies: $AB$ 0.45, $Ab$ 0.05, $aB$ 0.15, $ab$ 0.35. (a) Compute allele frequencies and $D$. (b) Compute $D'$ and $r^2$. (c) A GWAS of the causal variant $A$ would need 8000 samples. How many are needed if only SNP $B$ is genotyped?

(a) Allele frequencies:

$$p_A = 0.45 + 0.05 = 0.50, \qquad p_a = 0.50$$
$$p_B = 0.45 + 0.15 = 0.60, \qquad p_b = 0.40$$

$$D = p_{AB} - p_A p_B = 0.45 - (0.50)(0.60) = 0.45 - 0.30 = \mathbf{0.15}.$$

(b) $D > 0$, so $D_{\max} = \min(p_A p_b,\ p_a p_B) = \min(0.50 \times 0.40,\ 0.50 \times 0.60) = \min(0.20, 0.30) = 0.20$.

$$D' = \frac{0.15}{0.20} = \mathbf{0.75}.$$

$$r^{2} = \frac{D^{2}}{p_A p_a p_B p_b} = \frac{(0.15)^{2}}{(0.5)(0.5)(0.6)(0.4)} = \frac{0.0225}{0.06} = \mathbf{0.375}.$$

(c) $$N_{\text{tag}} = \frac{N}{r^{2}} = \frac{8000}{0.375} = \mathbf{21{,}333}.$$

**Nearly three times the sample size, for the same statistical power, purely because the tag is an imperfect proxy.**

**And note that $D'$ and $r^2$ disagree sharply here** — 0.75 versus 0.375. $D'$ is high because relatively little recombination has separated these loci; $r^2$ is low because the *allele frequencies differ* (0.50 versus 0.60), and two loci with different allele frequencies can never be perfectly correlated no matter how little recombination has occurred. **This is why $r^2$, not $D'$, is the measure used for study design**: it is the one that reflects how much information the tag actually carries.

**Example 2 (why you'd care — interpreting a real GWAS hit).** A GWAS of type 2 diabetes in 100,000 individuals finds its strongest signal at rs7903146, $p = 10^{-50}$, odds ratio 1.35. The SNP lies in **intron 3** of *TCF7L2*, a transcription factor gene. (a) Is this SNP the causal variant? (b) The odds ratio is 1.35 — what does that mean for prediction? (c) What follow-up work would identify the actual mechanism?

(a) **Almost certainly not, and it should not be assumed either way.** The SNP is a **tag** for a haplotype block. The causal variant is somewhere in the associated interval, and the tag is simply the array SNP that happened to be in highest LD with it.

That said, this is one of the relatively few cases where the tag SNP does appear to be causal or very near it — fine-mapping and functional work have converged on rs7903146 itself, which lies in an enhancer that is open in pancreatic islets. **But that conclusion required a decade of additional work, not the GWAS.**

**The general principle stands:** a GWAS hit is a genomic address, not a mechanism. Roughly 90 percent of GWAS hits lie in **non-coding** sequence, which was itself a major and unexpected finding — it says that most common complex-trait variation acts through **regulation** rather than through protein-coding changes, and it is why the enhancer and topological-domain machinery of [molecular-cell-biology 4.2](../../molecular-cell-biology/lessons/04-02-eukaryotic-transcription-machine.md) turned out to matter so much for human disease.

(b) An odds ratio of 1.35 is **large for a GWAS hit and small for anything else.** *TCF7L2* is the strongest common variant signal for type 2 diabetes, and it raises risk by 35 percent per allele.

For prediction: if population risk is 10 percent, a homozygote for the risk allele has roughly $1.35^{2} = 1.82$ times the odds, so about 17 percent risk. **Useful epidemiologically and nearly useless clinically for an individual** — 83 percent of high-risk homozygotes will not develop the disease, and plenty of non-carriers will.

**This gap between statistical significance and predictive value is the central practical fact about GWAS**, and it is what [4.5](04-05-human-genetics-genome-medicine.md) has to grapple with when polygenic scores are proposed for clinical use.

(c) A programme of follow-up, in the order it would actually be done:

1. **Fine-map.** Sequence or densely impute the whole associated interval in a large sample, and use statistical fine-mapping to narrow the credible set of variants. **Populations with shorter LD** — African-ancestry populations, whose greater age means more accumulated recombination — narrow the interval far faster, which is one of the strongest scientific arguments for ancestrally diverse study populations.
2. **Annotate functionally.** Ask whether the candidate variants sit in regions that are open, enhancer-marked, or bound by transcription factors *in the relevant tissue* ([molecular-cell-biology 4.1](../../molecular-cell-biology/lessons/04-01-chromatin-packaging-regulation.md)). Islet chromatin, not lymphocyte chromatin.
3. **Find the target gene.** A variant in an intron of *TCF7L2* need not act on *TCF7L2* — enhancers act within topological domains and skip genes routinely ([molecular-cell-biology 4.2](../../molecular-cell-biology/lessons/04-02-eukaryotic-transcription-machine.md)). Chromosome-conformation data and **eQTL** analysis (asking which genes' expression correlates with the genotype, in the right tissue) identify the target.
4. **Test causality experimentally.** Edit the variant in a relevant cell type with CRISPR or a base editor ([3.6](03-06-reading-editing-genes.md)) and measure the effect on target-gene expression and on cell function.

**Steps 1 to 3 are statistics and annotation; only step 4 establishes causation** — and the whole chain, from a $p$-value to a mechanism, has been completed for a small minority of the tens of thousands of published GWAS associations.

## Watch out

- **You might treat LD and linkage as the same thing.** Linkage is a property of loci (physical distance); LD is a property of alleles in a population (history). Tightly linked loci can be in equilibrium, and unlinked loci can show LD through population structure.
- **You might use $D'$ where $r^2$ belongs.** $D' = 1$ only says no recombination has occurred; $r^2$ says how well one SNP predicts another, and it is $r^2$ that determines statistical power.
- **You might read a GWAS hit as the causal variant.** It is a tag for a block, and roughly 90 percent of hits are non-coding. Localization is not identification.
- **You might report $p = 10^{-6}$ as significant.** The genome-wide threshold is $5\times10^{-8}$, and it is $0.05$ divided by a million independent tests. A $10^{-6}$ result is expected by chance in every study.
- **You might trust a lone significant SNP.** Real signals produce towers of correlated significance because of LD. An isolated point is usually a genotyping artefact.
- **You might ignore stratification because your cohort "looks homogeneous."** [4.3](04-03-inbreeding-relatedness-structure.md) showed that structure is invisible at one locus and obvious across many. Compute $\lambda_{GC}$ and the principal components, always.

## One-liner

> A natural population is a mapping cross that has run for thousands of generations, so LD extends only tens of kilobases — which lets a few hundred thousand tagging SNPs scan a genome, and guarantees that the hit is an address rather than a mechanism.

## Problems

**P1 (🟢)** Two SNPs have haplotype frequencies $AB$ 0.36, $Ab$ 0.24, $aB$ 0.24, $ab$ 0.16. (a) Compute $p_A$ and $p_B$. (b) Compute $D$. (c) What does your answer say about these two loci?

**P2 (🟡)** LD between two loci starts at $D_0 = 0.20$ and the recombination fraction between them is $c = 0.01$. (a) Compute $D$ after 10, 50 and 200 generations. (b) How many generations until $D$ falls below 0.01? (c) A second pair of loci has $c = 0.001$ — repeat (b) and explain the practical consequence for mapping resolution.

**P3 (🔴, bridges to 4.5 and to study design)** A GWAS of 50,000 cases and 50,000 controls finds a variant with $p = 3\times10^{-9}$ and odds ratio 1.08. (a) Is this genome-wide significant? (b) The disease has a lifetime risk of 2 percent. Compute the absolute risk for a homozygous carrier and comment on clinical utility. (c) The study was conducted entirely in European-ancestry individuals. Give two distinct scientific reasons — not ethical ones, though those exist — why replicating in a population with African ancestry would be valuable, and explain the mechanism of each.

<details>
<summary>Solutions</summary>

**P1 (a)** $$p_A = 0.36 + 0.24 = \mathbf{0.60}, \qquad p_B = 0.36 + 0.24 = \mathbf{0.60}.$$

**(b)** $$D = p_{AB} - p_A p_B = 0.36 - (0.60)(0.60) = 0.36 - 0.36 = \mathbf{0}.$$

**(c)** $D = 0$ means the two loci are in **perfect linkage equilibrium** — the alleles are distributed independently, and knowing someone's genotype at one locus tells you nothing about the other.

**Note what this does *not* say.** It says nothing about whether the loci are physically linked. They could be on different chromosomes, or they could be 1 cM apart and simply have been segregating together long enough for recombination to randomize them completely. **Equilibrium is a statement about history, not geography** — and it also means that if the causal variant were at locus $A$, genotyping locus $B$ would provide *no* information about it whatsoever ($r^2 = 0$, so the required sample size is infinite).

**P2 (a)** $D_t = D_0(1-c)^{t}$ with $D_0 = 0.20$, $c = 0.01$:

$$D_{10} = 0.20(0.99)^{10} = 0.20(0.9044) = \mathbf{0.181}$$
$$D_{50} = 0.20(0.99)^{50} = 0.20(0.6050) = \mathbf{0.121}$$
$$D_{200} = 0.20(0.99)^{200} = 0.20(0.1340) = \mathbf{0.0268}$$

**(b)** Solve $0.20(0.99)^{t} = 0.01$:

$$(0.99)^{t} = 0.05 \;\Longrightarrow\; t = \frac{\ln 0.05}{\ln 0.99} = \frac{-2.996}{-0.01005} = \mathbf{298\ \text{generations}}.$$

At roughly 25 years per human generation, about **7500 years**.

**(c)** With $c = 0.001$:

$$t = \frac{\ln 0.05}{\ln 0.999} = \frac{-2.996}{-0.0010005} = \mathbf{2994\ \text{generations}} \approx 75{,}000\ \text{years}.$$

**Practical consequence: mapping resolution is set by how much recombination the population has accumulated.** Loci close enough that $c$ is small stay correlated for tens of thousands of years, so LD blocks in a young population are long and a GWAS hit implicates a large interval.

Two corollaries the field runs on:

- **Older populations give finer resolution.** African populations are the oldest human populations and have accumulated the most recombination, so their LD blocks are shorter and a GWAS signal localizes to a smaller interval. This is a purely technical advantage, independent of any other consideration.
- **Younger, bottlenecked populations give more power but less resolution.** Finnish or Icelandic populations have long LD blocks, so fewer markers capture more variation and rare variants are enriched — excellent for *finding* signals, poor for *localizing* them.

**P3 (a)** **Yes.** The genome-wide threshold is $5\times10^{-8}$, and $3\times10^{-9}$ is about 17 times more extreme.

Worth noting what makes this possible: an odds ratio of 1.08 is a very small effect, and detecting it required 100,000 individuals. **Power comes almost entirely from sample size at these effect sizes**, which is why the field consolidated into consortia of hundreds of thousands.

**(b)** Population lifetime risk 2 percent. Per-allele odds ratio 1.08, so for a homozygote the odds ratio is

$$1.08^{2} = 1.166 .$$

At low absolute risk, odds and risk are nearly equal, so:

$$\text{risk} \approx 0.02 \times 1.166 = \mathbf{0.0233}, \ \text{i.e. } 2.33\ \text{percent versus } 2\ \text{percent}.$$

**Clinical utility: essentially none, for this variant alone.** An absolute risk difference of 0.33 percentage points is far below any threshold that would change management, screening frequency, or a patient's decision. A carrier's risk is 2.3 percent and a non-carrier's is about 1.9 percent, and no clinical action distinguishes those.

**The distinction that matters is between statistical significance and effect size**, and GWAS separates them completely: $p = 3\times10^{-9}$ is a statement about how confident we are that the effect is non-zero, and the odds ratio of 1.08 is a statement about how small it is. Both are true. **The scientific value of such a hit is that it names a gene or pathway worth studying, not that it predicts anything about a person** — and combining thousands of such variants into a polygenic score is the attempt to make them collectively useful ([4.5](04-05-human-genetics-genome-medicine.md)).

**(c)** Two scientific reasons:

**1. Finer fine-mapping, because African populations have shorter LD.**

*Mechanism:* African populations are the oldest human populations, having accumulated the most generations of recombination since the out-of-Africa bottleneck reduced diversity elsewhere. From P2, LD decays as $(1-c)^{t}$, so more elapsed generations means shorter blocks. A signal that spans 100 kb in a European sample may span 20 kb in an African one, narrowing the credible set of candidate causal variants several-fold.

**This is the single most effective technique for turning a GWAS address into a shortlist**, and it works purely because of demographic history.

**2. Distinguishing the causal variant from the tag, via different LD structure.**

*Mechanism:* the *causal* variant has the same biological effect in every population — that is what causal means. The *tag* is only associated with the trait to the extent it is in LD with the causal variant, and LD patterns differ between populations. So:

- A signal that **replicates** across ancestries, with the association centred on the same variant, points at that variant being causal or very close.
- A signal that **fails to replicate**, or replicates with the peak shifted to a different SNP, indicates the original hit was a tag whose LD relationship does not hold in the new population.

**Trans-ancestry meta-analysis exploits this systematically**, using the fact that only the causal variant is consistently associated everywhere.

*(A third good answer: portability of polygenic scores. Scores derived in European samples perform dramatically worse in other ancestries — typically losing half or more of their predictive accuracy — precisely because the tag-to-causal LD relationships do not transfer. Establishing whether a score works in a population requires testing it there, and this is a serious equity problem in clinical genomics as well as a scientific one.)*

</details>

## Flashback

**From Lesson 4.3 (inbreeding, structure and $F_{ST}$):** Two subpopulations of equal size have allele frequencies $q = 0.1$ and $q = 0.5$ at a SNP. (a) Compute $H_S$, $H_T$ and $F_{ST}$. (b) If a researcher pools them and tests Hardy–Weinberg, what apparent $F$ would they infer from the heterozygote deficit? (c) State the relationship between your two answers and what it means for a GWAS conducted in this pooled sample.

<details>
<summary>Solution</summary>

**(a)** Within-subpopulation heterozygosities:

$$2(0.1)(0.9) = 0.18, \qquad 2(0.5)(0.5) = 0.50, \qquad H_S = \frac{0.18 + 0.50}{2} = \mathbf{0.34}.$$

Pooled allele frequency: $\bar q = (0.1 + 0.5)/2 = 0.3$.

$$H_T = 2(0.3)(0.7) = \mathbf{0.42}.$$

$$F_{ST} = \frac{H_T - H_S}{H_T} = \frac{0.42 - 0.34}{0.42} = \frac{0.08}{0.42} = \mathbf{0.190}.$$

**(b)** The pooled sample's observed heterozygosity is $H_S = 0.34$ (each subpopulation contributes its own). Hardy–Weinberg on the pooled allele frequency predicts $H_T = 0.42$. From $f(Aa) = 2pq(1-F)$:

$$0.34 = 0.42(1 - F) \;\Longrightarrow\; 1 - F = 0.810 \;\Longrightarrow\; F = \mathbf{0.190}.$$

**(c)** **The two answers are identical**, and that is not a coincidence — it is an algebraic identity. The apparent inbreeding coefficient inferred from a pooled sample's heterozygote deficit **is** $F_{ST}$:

$$F_{\text{apparent}} = \frac{H_T - H_S}{H_T} = F_{ST}$$

**What it means for a GWAS in this sample:** this SNP differs enormously in frequency between the two subpopulations (0.1 versus 0.5). If cases and controls are drawn even slightly unevenly from them — which happens through recruitment site, referral pattern, or volunteer bias — this SNP will show a strong spurious association with the disease, with no causal involvement whatsoever ([4.3](04-03-inbreeding-relatedness-structure.md), P3).

And it will not be alone. **Every ancestry-informative SNP in the genome behaves the same way**, which is precisely why the inflation shows up genome-wide as $\lambda_{GC} > 1$, and why the correction has to be genome-wide too — principal components computed from all markers, included as covariates, or a mixed model using the full relatedness matrix.

</details>

## Connections

- **Backward:** [2.2](02-02-linkage-recombination.md)'s recombination fraction is the $c$ that decays LD; [4.2](04-02-response-to-selection-qtl.md)'s QTL mapping is the same logic in a designed cross, and this lesson is what you gain by using a natural population instead; [4.3](04-03-inbreeding-relatedness-structure.md) supplied the stratification confounder.
- **Forward:** [4.5](04-05-human-genetics-genome-medicine.md) asks what to do with thousands of small-effect associations — polygenic scores, their portability problem, and whether any of it helps a patient.
- **Sideways:** the finding that ~90 percent of GWAS hits are non-coding is what made [molecular-cell-biology 4.1–4.2](../../molecular-cell-biology/lessons/04-02-eukaryotic-transcription-machine.md)'s enhancer and chromatin machinery central to human disease genetics; the demographic history that sets LD length is [evolution-ecology 1.4](../../evolution-ecology/lessons/01-04-drift-ne-gene-flow.md); the multiple-testing correction is [prob-stat-refresher 5.3](../../prob-stat-refresher/syllabus.md).
