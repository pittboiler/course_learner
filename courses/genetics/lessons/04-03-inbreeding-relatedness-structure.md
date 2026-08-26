# Genetics · Lesson 4.3: Inbreeding, relatedness & population structure

> ⏱ ~15 min · Module 4: Quantitative Genetics, Populations & Genomes · Builds on: [4.2](04-02-response-to-selection-qtl.md), [1.4](01-04-pedigrees-human-inheritance.md) · Unlocks: 4.4 (linkage disequilibrium & GWAS)

## Why this matters

Hardy–Weinberg assumes random mating. Nothing mates at random. People marry within their village, their community and their social class; plants pollinate their neighbours; a breeding programme deliberately mates the best to the best, which usually means the best to their own relatives ([4.2](04-02-response-to-selection-qtl.md)).

Non-random mating does something specific and predictable: **it does not change allele frequencies at all, and it changes genotype frequencies a great deal.** More homozygotes, fewer heterozygotes — and since recessive disease requires homozygosity, that shift is the entire quantitative content of why consanguinity matters clinically and why inbred populations exist as a category in medical genetics.

**Hardy–Weinberg itself is derived in [general-biology 4.2](../../general-biology/lessons/04-02-evolution-in-populations.md) and pushed to Tier-1 depth in [evolution-ecology 1.3](../../evolution-ecology/lessons/01-03-hardy-weinberg-testable-null.md).** This lesson uses it as a calculator and asks what happens when its mating assumption fails.

## The idea

**Two alleles can be identical for two different reasons.** This distinction is the foundation of everything below:

- **Identical by state (IBS)** — the same nucleotide, from any origin.
- **Identical by descent (IBD)** — the same nucleotide *because both are copies of one ancestral allele*.

**The inbreeding coefficient $F$ is the probability that an individual's two alleles at a locus are IBD.** It is a property of an individual, computed from their pedigree, and it says how likely they are to be homozygous *because of shared ancestry* rather than by chance.

**What $F$ does to genotype frequencies.** With probability $F$ the two alleles are IBD, so the individual is automatically homozygous — for $A$ with probability $p$, for $a$ with probability $q$. With probability $1-F$ they are independent draws, giving Hardy–Weinberg proportions. Combining:

$$\boxed{\;f(AA) = p^{2} + Fpq, \qquad f(Aa) = 2pq(1-F), \qquad f(aa) = q^{2} + Fpq\;}$$

*In words: inbreeding moves a fraction $F$ of the heterozygotes into the two homozygous classes, split according to allele frequency.*

**Check that allele frequencies are unchanged:**

$$p' = f(AA) + \tfrac12 f(Aa) = p^{2} + Fpq + pq(1-F) = p^{2} + pq = p(p+q) = p \ \checkmark$$

**Inbreeding is not evolution.** It redistributes genotypes and leaves the gene pool exactly where it was.

**The consequence for rare recessives is dramatic and asymmetric.** The *relative* increase in $aa$ is

$$\frac{q^{2} + Fpq}{q^{2}} = 1 + \frac{Fp}{q} \approx 1 + \frac{F}{q} \ \text{ for small } q .$$

*In words: the rarer the allele, the more inbreeding matters.* At $F = 0.0625$ (first cousins) and $q = 0.001$, the multiplier is $1 + 0.0625/0.001 = 63$. **A sixty-threefold increase in risk from a mating that is entirely ordinary in much of the world** — and note the effect is negligible for common recessives.

**Relatedness is the same idea between two people.** The **coefficient of relationship** $r$ is the expected fraction of the genome two individuals share IBD:

| Relationship | $r$ | $F$ of their offspring |
|---|---|---|
| Identical twins | 1 | — |
| Parent–offspring | $\tfrac12$ | $\tfrac14$ |
| Full siblings | $\tfrac12$ | $\tfrac14$ |
| Half siblings | $\tfrac14$ | $\tfrac18$ |
| Uncle–niece | $\tfrac14$ | $\tfrac18$ |
| **First cousins** | $\tfrac18$ | $\mathbf{\tfrac{1}{16} = 0.0625}$ |
| Second cousins | $\tfrac{1}{32}$ | $\tfrac{1}{64} = 0.0156$ |

$$F_{\text{offspring}} = \tfrac12 r_{\text{parents}}$$

**Structure produces the same signature without any relatives.** If a "population" is really two subpopulations with different allele frequencies, and you sample and analyse them together, you find **fewer heterozygotes than Hardy–Weinberg predicts** — even though each subpopulation mates entirely at random internally. This is the **Wahlund effect**, and it is the reason unrecognized population structure looks exactly like inbreeding.

## The formal version

**Computing $F$ from a pedigree by path counting.** For each **common ancestor** of the two parents:

1. Trace every distinct **path** from one parent up to the common ancestor and back down to the other parent.
2. Count $n$ = the number of individuals in the path, **including** the common ancestor and both parents.
3. Each path contributes $\left(\tfrac12\right)^{n-1}$, times $(1 + F_A)$ where $F_A$ is the common ancestor's own inbreeding coefficient.

$$\boxed{\;F = \sum_{\text{paths}} \left(\tfrac12\right)^{n-1}(1 + F_A)\;}$$

*In words: each step of transmission is a coin flip, and you add up all the ways a copy could travel from the ancestor down both sides.*

**First cousins, worked to fix the method.** Two first cousins share **two** common ancestors — a grandmother and a grandfather. Take one path: cousin A → A's parent → grandparent → B's parent → cousin B. That is $n = 5$ individuals, contributing $(1/2)^{4} = 1/16$. There are two such paths (one per shared grandparent), so the two cousins' **kinship** is $2 \times 1/16 = 1/8$, which is their $r$. Their child's inbreeding coefficient is half that:

$$F_{\text{child of first cousins}} = \tfrac12 \times \tfrac18 = \mathbf{\tfrac{1}{16} = 0.0625}.$$

**Inbreeding depression.** Inbred individuals have reduced fitness — smaller, less fertile, less viable. Two mechanisms, and they make different predictions:

- **Partial dominance** — inbreeding exposes recessive deleterious alleles that were hidden in heterozygotes. Predicts that **purging** works: sustained inbreeding should remove the deleterious alleles by exposing them to selection, and depression should decline.
- **Overdominance** — heterozygotes are genuinely superior at some loci, so losing heterozygosity is intrinsically costly. Predicts that purging does **not** work.

Evidence supports partial dominance as the main contributor, which is why some plant lineages (and a few animal ones) tolerate long-term selfing: they have purged their load.

**Quantitatively**, a trait's mean under inbreeding declines linearly in $F$:

$$\bar{X}_F = \bar{X}_0 - B F$$

where $B$ is the **inbreeding depression coefficient** — a directly measurable slope.

**$F_{ST}$: quantifying structure.** Compare the heterozygosity actually observed in subpopulations with what you would see if they were pooled and mated at random:

$$\boxed{\;F_{ST} = \frac{H_T - H_S}{H_T}\;}$$

where $H_S$ is the average expected heterozygosity **within** subpopulations and $H_T$ is the expected heterozygosity of the **total** pooled population.

*In words: what fraction of the total genetic variation is accounted for by differences between groups rather than within them?*

| $F_{ST}$ | Interpretation |
|---|---|
| 0 | no differentiation — one panmictic population |
| 0.05 | modest |
| 0.15 | substantial |
| 1 | fixed for different alleles; no shared variation |

**The human number, and what it does and does not mean.** Across human continental groups, $F_{ST} \approx 0.10$–$0.15$. So roughly **85 to 90 percent of human genetic variation is within populations** and 10 to 15 percent between them (Lewontin's 1972 result, repeatedly confirmed with far more data).

**Two things follow, and both matter.** First, any two people from the same population differ at nearly as many sites as any two people from different populations — variation is overwhelmingly individual. Second, $F_{ST}$ is a **per-locus average**, and the *correlated* structure across many loci is real and detectable: this is precisely why population stratification is a serious confounder in association studies ([4.4](04-04-linkage-disequilibrium-gwas.md)), and why principal components computed from genome-wide markers separate populations cleanly despite the low per-locus $F_{ST}$.

**Effective population size, and why it is the number that matters.** $N_e$ is the size of an idealized randomly-mating population that would lose heterozygosity at the same rate as the real one. It is almost always **smaller** than the census size, because of unequal sex ratios, variance in family size, and fluctuations over time. For unequal sex ratios:

$$N_e = \frac{4 N_m N_f}{N_m + N_f}$$

*In words: the rarer sex dominates.* A herd of 1000 cows and 5 bulls has $N_e = 4(5)(1000)/1005 = 20$ — not 1005. **Inbreeding accumulates at the rate set by $N_e$, at roughly $\Delta F = 1/(2N_e)$ per generation**, which is why the dairy-breeding concern of [4.2](04-02-response-to-selection-qtl.md) is real. (The drift consequences of $N_e$ are developed in [evolution-ecology 1.4](../../evolution-ecology/lessons/01-04-drift-ne-gene-flow.md).)

## Picture

![Left: a pedigree showing two first cousins mating, with the two paths through the shared grandmother and grandfather traced and each labelled as contributing one-sixteenth, summing to a kinship of one-eighth and an offspring inbreeding coefficient of one-sixteenth. Centre: three bars showing genotype frequencies at F equals zero, F equals 0.0625 and F equals 0.25, with the heterozygote class shrinking and both homozygote classes growing while the allele frequencies stay fixed. Right: the Wahlund effect, with two subpopulations each in Hardy-Weinberg internally but with different allele frequencies, and the pooled sample showing a heterozygote deficit that mimics inbreeding.](assets/04-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — consanguinity and a rare recessive).** A recessive disorder has a population incidence of 1 in 40,000 in a large randomly-mating population. (a) Find $q$ and the carrier frequency. (b) What is the risk of an affected child to a first-cousin couple from this population, with no family history? (c) What is the fold-increase over the population risk?

(a) $$q^{2} = \frac{1}{40{,}000} \;\Longrightarrow\; q = \frac{1}{200} = 0.005, \qquad p = 0.995 .$$

$$\text{carriers} = 2pq = 2(0.995)(0.005) = 0.00995 \approx \mathbf{1\ \text{in}\ 100}.$$

(b) First cousins: $F = 1/16 = 0.0625$.

$$f(aa) = q^{2} + Fpq = (0.005)^{2} + 0.0625(0.995)(0.005) = 2.5\times10^{-5} + 3.11\times10^{-4} = 3.36\times10^{-4},$$

or about **1 in 2980**.

(c) $$\frac{3.36\times10^{-4}}{2.5\times10^{-5}} = \mathbf{13.4\text{-fold}}.$$

Cross-check against the approximation $1 + Fp/q = 1 + 0.0625(0.995)/0.005 = 1 + 12.4 = 13.4$ ✓.

**Read the two terms of $q^2 + Fpq$ separately, because that is the insight.** For this couple, $2.5\times10^{-5}$ of the risk comes from both parents independently being carriers by chance, and $3.11\times10^{-4}$ — **twelve times more** — comes from both alleles descending from one shared grandparent. **Almost all the excess risk in a consanguineous mating is IBD risk, not chance-carrier risk**, which is why the effect is so much stronger for rarer alleles: the chance-carrier term shrinks as $q^2$ while the IBD term shrinks only as $q$.

**Example 2 (why you'd care — the Wahlund effect, and mistaking structure for inbreeding).** A researcher samples 1000 people from a region and genotypes one locus. Observed: 350 $AA$, 300 $Aa$, 350 $aa$. (a) Compute allele frequencies and test against Hardy–Weinberg. (b) Estimate $F$ from the heterozygote deficit. (c) The region turns out to contain two communities that rarely intermarry, with $q = 0.2$ and $q = 0.8$. Show that this alone explains the result, and compute $F_{ST}$.

(a) $$p = \frac{2(350) + 300}{2000} = \frac{1000}{2000} = 0.5, \qquad q = 0.5 .$$

Hardy–Weinberg expects $p^2 = 0.25$, $2pq = 0.50$, $q^2 = 0.25$, i.e. 250 : 500 : 250.

$$\chi^{2} = \frac{(350-250)^{2}}{250} + \frac{(300-500)^{2}}{500} + \frac{(350-250)^{2}}{250} = 40 + 80 + 40 = \mathbf{160}.$$

With 1 df (critical value 3.84), **reject Hardy–Weinberg decisively** — a large heterozygote deficit.

(b) From $f(Aa) = 2pq(1-F)$:

$$0.300 = 2(0.5)(0.5)(1-F) = 0.5(1-F) \;\Longrightarrow\; 1 - F = 0.6 \;\Longrightarrow\; F = \mathbf{0.40}.$$

**An $F$ of 0.40 would be extraordinary** — higher than the offspring of full siblings ($F = 0.25$). Taken at face value it would suggest systematic close-kin mating across an entire region, which should have been obvious to anyone who looked.

(c) Two subpopulations of 500 each, each internally in Hardy–Weinberg:

| | $q$ | $AA$ | $Aa$ | $aa$ | counts (of 500) |
|---|---|---|---|---|---|
| Community 1 | 0.2 | 0.64 | 0.32 | 0.04 | 320 : 160 : 20 |
| Community 2 | 0.8 | 0.04 | 0.32 | 0.64 | 20 : 160 : 320 |
| **Pooled** | 0.5 | | | | **340 : 320 : 340** |

That is essentially the observed 350 : 300 : 350 — **and each community is in perfect Hardy–Weinberg internally, with nobody marrying a relative.**

$$F_{ST} = \frac{H_T - H_S}{H_T}, \qquad H_T = 2(0.5)(0.5) = 0.50, \qquad H_S = \frac{0.32 + 0.32}{2} = 0.32 .$$

$$F_{ST} = \frac{0.50 - 0.32}{0.50} = \mathbf{0.36}.$$

**The heterozygote deficit is entirely structure, and the apparent $F$ of 0.40 was an artefact of pooling.** Notice how close the computed $F_{ST} = 0.36$ is to the spurious $F = 0.40$ — that is not a coincidence. **The Wahlund effect and inbreeding produce mathematically indistinguishable signatures at a single locus.**

**How to tell them apart:** inbreeding affects the *whole genome* of an individual roughly uniformly, and produces long runs of homozygosity; population structure produces heterozygote deficits that are **correlated across loci in a way that clusters individuals into groups**. Genotype many markers, run a principal-components analysis, and structure appears as clusters while true inbreeding appears as individuals with genome-wide excess homozygosity within a single cluster. **This is exactly the correction that every modern GWAS applies** ([4.4](04-04-linkage-disequilibrium-gwas.md)), and it is here because the confounding was first recognized in this form.

## Watch out

- **You might think inbreeding changes allele frequencies.** It does not — the algebra above confirms $p' = p$. It redistributes genotypes only. Inbreeding is not evolution.
- **You might apply the consanguinity multiplier to a common recessive.** The relative increase is $1 + Fp/q$, which is large only for small $q$. For $q = 0.3$, first cousins raise the risk by a factor of just 1.15.
- **You might read a heterozygote deficit as inbreeding.** Population structure gives the identical signature at a single locus. Distinguishing them requires many loci and a clustering analysis.
- **You might conflate $F$ and $r$.** $F$ is an individual's probability of IBD at a locus; $r$ is the expected IBD sharing between two individuals. The offspring's $F$ is half the parents' $r$.
- **You might use census size where $N_e$ belongs.** Unequal sex ratios and family-size variance make $N_e$ far smaller — a herd of 1005 animals with 5 sires has $N_e = 20$.
- **You might read "85 percent of variation is within populations" as meaning structure is undetectable.** Per-locus $F_{ST}$ is low; the *correlation* of small differences across hundreds of thousands of loci is strong, and it is exactly what stratification correction handles.

## One-liner

> Inbreeding leaves allele frequencies untouched and moves a fraction $F$ of heterozygotes into the homozygous classes — which multiplies rare-recessive risk by $1 + F/q$ — and unrecognized population structure produces the identical signature with nobody marrying a relative.

## Problems

**P1 (🟢)** A recessive allele has $q = 0.02$. (a) Compute the three genotype frequencies under random mating. (b) Recompute for a population with $F = 0.05$. (c) What is the fold-increase in affected individuals, and check it against $1 + Fp/q$.

**P2 (🟡)** An uncle marries his niece. (a) Draw the relationship and compute their coefficient of relationship $r$ by path counting. (b) What is $F$ for their child? (c) A recessive disorder has an incidence of 1 in 10,000. Compute the couple's risk of an affected child and the fold-increase over the population risk.

**P3 (🔴, bridges to 4.4 and to study design)** A case-control study of a disease genotypes 2000 cases and 2000 controls at one SNP and finds a highly significant association ($p = 10^{-12}$). The samples come from a city with two large communities: community X ($q_{\text{SNP}} = 0.15$) and community Y ($q_{\text{SNP}} = 0.55$). The disease is three times commoner in community Y for entirely environmental reasons, and cases were recruited from hospitals serving mostly community Y while controls were volunteers from a university mostly in community X. (a) Explain how a completely non-causal SNP produces $p = 10^{-12}$. (b) Compute $F_{ST}$ between the two communities at this SNP. (c) Name two methods that would have prevented this, and explain the mechanism of each.

<details>
<summary>Solutions</summary>

**P1 (a)** $q = 0.02$, $p = 0.98$:

$$f(AA) = p^{2} = \mathbf{0.9604}, \quad f(Aa) = 2pq = \mathbf{0.0392}, \quad f(aa) = q^{2} = \mathbf{0.0004}.$$

**(b)** With $F = 0.05$, and $pq = 0.0196$ so $Fpq = 9.8\times10^{-4}$:

$$f(AA) = 0.9604 + 0.00098 = \mathbf{0.9614}$$
$$f(Aa) = 2pq(1-F) = 0.0392(0.95) = \mathbf{0.03724}$$
$$f(aa) = 0.0004 + 0.00098 = \mathbf{0.00138}$$

Check they sum to 1: $0.9614 + 0.03724 + 0.00138 = 1.0000$ ✓

**(c)** $$\frac{0.00138}{0.0004} = \mathbf{3.45\text{-fold}}.$$

Check: $1 + Fp/q = 1 + 0.05(0.98)/0.02 = 1 + 2.45 = 3.45$ ✓

**P2 (a)** An uncle and his niece: the niece's parent is the uncle's **sibling**, so they share the two grandparents (the uncle's parents) — but the uncle is one generation closer to them.

Path through one shared ancestor: uncle → grandparent → uncle's sibling (the niece's parent) → niece. That is $n = 4$ individuals, contributing $(1/2)^{3} = 1/8$. There are **two** such paths (one per shared grandparent):

$$r = 2 \times \tfrac18 = \mathbf{\tfrac14}.$$

(Sanity check: uncle–niece has the same $r$ as half-siblings, $\tfrac14$ — one step further apart than the $\tfrac12$ of full siblings, and one step closer than the $\tfrac18$ of first cousins.)

**(b)** $$F_{\text{child}} = \tfrac12 r = \tfrac12 \times \tfrac14 = \mathbf{\tfrac18 = 0.125}.$$

**(c)** $$q^{2} = \frac{1}{10{,}000} \;\Longrightarrow\; q = 0.01, \qquad p = 0.99 .$$

$$f(aa) = q^{2} + Fpq = 1\times10^{-4} + 0.125(0.99)(0.01) = 1\times10^{-4} + 1.2375\times10^{-3} = \mathbf{1.34\times10^{-3}},$$

about **1 in 749**.

$$\text{fold-increase} = \frac{1.34\times10^{-3}}{1\times10^{-4}} = \mathbf{13.4\text{-fold}}.$$

Check: $1 + Fp/q = 1 + 0.125(0.99)/0.01 = 1 + 12.375 = 13.4$ ✓

Note that the IBD term ($1.24\times10^{-3}$) is again more than twelve times the chance-carrier term ($1\times10^{-4}$) — the same lesson as Example 1.

**P3 (a)** The SNP is a **marker of ancestry**, and ancestry is a marker of disease risk here for reasons that have nothing to do with genetics. The chain is:

$$\text{community Y} \;\to\; \text{higher environmental disease risk} \;\to\; \text{over-represented among cases}$$
$$\text{community Y} \;\to\; \text{higher } q_{\text{SNP}} \;\to\; \text{SNP over-represented among cases}$$

Both arrows start from the same place, so the SNP and the disease are correlated **without any causal link between them**. The study design made it worse: cases were recruited from hospitals serving community Y and controls from a university drawing on community X, so the case-control comparison is very nearly a community X versus community Y comparison wearing a disguise.

**Why the $p$-value is so extreme:** significance depends on sample size and effect size, and both are large. With allele frequencies of 0.15 and 0.55 the difference between groups is enormous, and with 4000 individuals the standard error is tiny. **A $p$-value of $10^{-12}$ measures how confident you are that the two groups differ, not whether the difference is causal** — and here they genuinely do differ, for the wrong reason.

This is **population stratification**, and it is the reason a generation of candidate-gene association studies in the 1990s failed to replicate.

**(b)** $$H_S = \frac{2(0.15)(0.85) + 2(0.55)(0.45)}{2} = \frac{0.255 + 0.495}{2} = 0.375 .$$

Pooled allele frequency (equal-sized communities): $\bar q = (0.15 + 0.55)/2 = 0.35$.

$$H_T = 2(0.35)(0.65) = 0.455 .$$

$$F_{ST} = \frac{H_T - H_S}{H_T} = \frac{0.455 - 0.375}{0.455} = \frac{0.080}{0.455} = \mathbf{0.176}.$$

That is **substantial** differentiation — well above the 0.10–0.15 seen between human continental groups, so this SNP is unusually ancestry-informative. Any such SNP will produce a spurious association whenever cases and controls are drawn differently from the two communities.

**(c)** Two methods, with mechanisms:

**1. Principal-components analysis of genome-wide markers, included as covariates.** Genotype tens of thousands of SNPs across the genome and compute the leading principal components. Because ancestry affects allele frequencies at **many loci in a correlated way**, the top PCs capture the ancestry axis directly — community X and community Y separate along PC1. Including PC1 (and typically the top 5–10 PCs) as covariates in the association model removes the variance attributable to ancestry, so the SNP is tested only against the *residual* disease variation.

**Mechanism: it works because stratification is a genome-wide correlated signal, and a single causal locus is not.** A true causal SNP survives the correction; an ancestry marker does not.

*A related diagnostic:* **genomic control** computes the inflation factor $\lambda$ — the median observed chi-square divided by the expected — across all SNPs. A $\lambda$ well above 1 (say 1.3) says the whole distribution of test statistics is inflated, which no single causal locus can do. It flags the problem even without correcting it.

**2. Family-based association testing (the transmission disequilibrium test).** Instead of comparing unrelated cases and controls, genotype affected individuals and **both their parents**, and ask: among heterozygous parents, is the risk allele transmitted to the affected child more than the 50 percent Mendel predicts?

**Mechanism: the control is the untransmitted allele from the same parent**, so cases and controls are perfectly matched for ancestry by construction — they are literally from the same individual. Population structure cannot produce a transmission distortion, because a heterozygous parent transmits each allele with probability $\tfrac12$ regardless of what community they belong to.

The TDT is immune to stratification and correspondingly expensive (it needs trios), which is why PCA correction became the standard for large studies and the TDT is reserved for settings where structure is severe or unknown.

*A third answer, worth crediting:* **match cases and controls on ancestry by design** — recruit both from the same communities in the same proportions. Cheapest of all, and it fails silently if the relevant structure is finer than the categories you matched on, which is why genotypic correction is preferred even when matching was attempted.

</details>

## Flashback

**From Lesson 4.2 (the breeder's equation and effective population size):** A cattle herd has 400 cows and 8 bulls. (a) Compute $N_e$. (b) The per-generation increase in inbreeding is $\Delta F \approx 1/(2N_e)$ — compute it, and find $F$ after 10 generations (using $F_t \approx 1 - (1-\Delta F)^t$). (c) The breeder wants to double the rate of genetic gain by using only 2 bulls. Compute the new $N_e$ and $\Delta F$, and comment on the trade.

<details>
<summary>Solution</summary>

**(a)** $$N_e = \frac{4 N_m N_f}{N_m + N_f} = \frac{4(8)(400)}{408} = \frac{12{,}800}{408} = \mathbf{31.4}.$$

**Note how brutally the rarer sex dominates:** a herd of 408 animals behaves, genetically, like a population of 31.

**(b)** $$\Delta F = \frac{1}{2N_e} = \frac{1}{62.7} = \mathbf{0.0159}\ \text{per generation}.$$

$$F_{10} = 1 - (1 - 0.0159)^{10} = 1 - (0.9841)^{10} = 1 - 0.8515 = \mathbf{0.149}.$$

After ten generations the average animal is more inbred than the child of first cousins ($F = 0.0625$) and approaching the child of full siblings ($F = 0.25$).

**(c)** With 2 bulls:

$$N_e = \frac{4(2)(400)}{402} = \frac{3200}{402} = \mathbf{7.96}, \qquad \Delta F = \frac{1}{15.9} = \mathbf{0.0629}\ \text{per generation}.$$

$$F_{10} = 1 - (0.9371)^{10} = 1 - 0.5222 = \mathbf{0.478}.$$

**The trade is bad.** Cutting from 8 bulls to 2 raises the inbreeding rate **fourfold**, and after ten generations the herd's average $F$ is 0.48 — beyond full-sib mating, deep into severe inbreeding depression. Fertility, calf survival and disease resistance all decline measurably at that level, and the additive variance that the breeder's equation depends on is being consumed at the same time.

**This is precisely the tension of [4.2](04-02-response-to-selection-qtl.md) P3.** The breeder's equation is a one-generation equation and rewards intensity; the population's long-run capacity to respond is set by $N_e$, which intensity destroys. **Optimal contribution selection exists exactly to manage this trade** — maximizing gain subject to an explicit constraint on $\Delta F$, typically holding it below about 0.5 to 1 percent per generation.

</details>

## Connections

- **Backward:** [1.4](01-04-pedigrees-human-inheritance.md)'s pedigrees are the input to path counting; [4.2](04-02-response-to-selection-qtl.md)'s selection intensity is what drives $N_e$ down and $F$ up in a breeding programme.
- **Forward:** [4.4](04-04-linkage-disequilibrium-gwas.md) inherits population stratification as its central confounder, and the correction methods in P3 are standard practice there.
- **Sideways:** Hardy–Weinberg itself is [general-biology 4.2](../../general-biology/lessons/04-02-evolution-in-populations.md) and [evolution-ecology 1.3](../../evolution-ecology/lessons/01-03-hardy-weinberg-testable-null.md); $N_e$ as the determinant of genetic drift is [evolution-ecology 1.4](../../evolution-ecology/lessons/01-04-drift-ne-gene-flow.md); inbreeding depression as a conservation problem is [evolution-ecology 4.5](../../evolution-ecology/lessons/04-05-behavior-conservation.md).
