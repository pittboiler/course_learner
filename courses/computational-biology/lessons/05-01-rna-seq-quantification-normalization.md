# Computational Biology · Lesson 5.1: RNA-seq quantification & normalization

> ⏱ ~15 min · Module 5: Expression, structure & networks · Builds on: [4.2](04-02-read-mapping-bwt-fm-index.md) (mapping reads), [molecular-cell-biology 4.2](../../molecular-cell-biology/lessons/04-02-eukaryotic-transcription-machine.md) (transcription), [machine-learning 3.4](../../machine-learning/lessons/03-04-hierarchical-clustering.md) and [3.2](../../machine-learning/lessons/03-02-principal-component-analysis.md) (clustering, PCA) · Unlocks: [5.2](05-02-differential-expression-multiple-testing.md) (differential expression), [5.6](05-06-inferring-networks-from-data.md) (co-expression networks)

## Why this matters

RNA-seq measures gene activity by sequencing the RNA in a sample and counting how many reads come from each gene. That count is **not** a measure of expression on its own. A gene gets more reads if it's longer, if the sample was sequenced more deeply, or if *other* genes in the sample happen to be less abundant. Compare raw counts across genes or samples and you'll mostly measure those artefacts.

Every expression analysis — clustering tumours into subtypes, finding genes that respond to a drug, building co-expression networks — starts with normalization. The wrong normalization produces confident, reproducible, false biology. This lesson covers the three biases, the units that correct them (CPM, TPM), and the one correction that simple scaling can't make: **composition**.

## The idea

**Reads are sampled in proportion to the RNA mass from each gene.** A transcript twice as long, at the same number of molecules, yields about twice as many fragments, and so about twice as many reads. So:

- **Depth.** Sequence a sample twice as deeply and every count doubles. Divide by the total reads, in millions: **counts per million (CPM)**.
- **Length.** Within one sample, a long gene gets more reads than a short gene at the same molecular abundance. Divide by length. Do the length correction **first**, then rescale so each sample sums to a million: **transcripts per million (TPM)**. TPM estimates each gene's share of the transcripts, so it's comparable within a sample.
- **Composition.** CPM and TPM force every sample to the same total. If one very highly expressed gene doubles in one sample, it takes a larger share of the reads, and every other gene's share *falls*, even though their molecule counts didn't change. Differential expression built on per-million scaling then reports thousands of false decreases.

**The composition fix assumes most genes don't change.** For each gene, compare its count in a sample with that gene's typical count across all samples. If most genes are unchanged, the **median** of those ratios measures the sample's true scaling. A few genes changing drastically don't move the median. That's the DESeq2 **median-of-ratios** size factor. TMM, used by edgeR, is a trimmed-mean version of the same idea.

**Then look at the matrix.** After normalization and a log transform, samples can be clustered ([machine-learning 3.4](../../machine-learning/lessons/03-04-hierarchical-clustering.md)) or projected with PCA ([machine-learning 3.2](../../machine-learning/lessons/03-02-principal-component-analysis.md)). That's how you catch outliers, batch effects and mislabelled samples before any test.

## The formal version

Let $c_{gj}$ be the read count for gene $g$ in sample $j$, $\ell_g$ the gene's effective length in kilobases, and $N_j = \sum_g c_{gj}$ the sample's total.

**Counts per million.** $\text{CPM}_{gj} = \dfrac{c_{gj}}{N_j} \times 10^6$.

**RPKM (FPKM).** $\text{RPKM}_{gj} = \dfrac{c_{gj}}{(N_j/10^6)\,\ell_g}$: reads per kilobase per million mapped reads.

**Transcripts per million.**

$$\text{TPM}_{gj} = \frac{c_{gj}/\ell_g}{\sum_{h} c_{hj}/\ell_h} \times 10^6.$$

This is [TPM](../reference.md#transcripts-per-million). *In words: correct for length first, then scale so the sample sums to a million, so each value is the gene's share of transcripts.* TPMs sum to $10^6$ in every sample; RPKMs don't sum to a constant, which makes RPKM hard to compare across samples.

**Median-of-ratios size factors** (DESeq2). For each gene, take the geometric mean of its counts across the $m$ samples, $\bar c_g = \big(\prod_j c_{gj}\big)^{1/m}$, using only genes with no zero counts. Then

$$s_j = \operatorname{median}_g\ \frac{c_{gj}}{\bar c_g}, \qquad \tilde c_{gj} = \frac{c_{gj}}{s_j}.$$

This is the [median-of-ratios size factor](../reference.md#median-of-ratios-size-factor). *In words: a sample's scaling is the typical ratio of its counts to each gene's cross-sample average, and the median ignores the few genes that really changed.* The assumption, stated plainly: **most genes are not differentially expressed**, or changes are balanced.

**Log transform for exploration.** Use $\log_2(\tilde c + 1)$ or a variance-stabilizing transform before computing distances, so a handful of very high counts don't dominate.

## Picture

![A bar chart of log2 fold changes for five genes between two samples, in which genes 1 to 4 are truly unchanged and gene X rises tenfold. Under counts-per-million scaling, genes 1 to 4 each show about minus 3.09 and gene X only plus 0.23. Under median-of-ratios size factors, genes 1 to 4 show 0 and gene X shows plus 3.32, the true value.](assets/05-01-fig1.svg)

The coral bars are what per-million scaling reports. Gene X's tenfold rise swallows most of the second sample's reads, so every other gene's *share* drops by a factor of eight or so, and CPM reads that as an eightfold decrease. Gene X itself looks barely changed, because its share can't grow much beyond "most of the reads". The blue bars use median-of-ratios. Four of the five genes agree that the samples are comparably scaled, the median follows them, and both the zeros and gene X's $+3.32$ come out right.

## Worked examples

**Example 1 (mechanical): CPM, RPKM and TPM.** One sample with 2 million mapped reads:

| gene | length (kb) | count |
|---|---|---|
| A | 2 | 400,000 |
| B | 4 | 400,000 |
| C | 1 | 200,000 |
| D | 10 | 1,000,000 |

*CPM:* divide by 2 million, multiply by $10^6$. A: 200,000; B: 200,000; C: 100,000; D: 500,000. D looks the most expressed.

*Reads per kilobase:* A: 200,000; B: 100,000; C: 200,000; D: 100,000. Sum: 600,000.

*TPM:* A: $200{,}000/600{,}000 \times 10^6 = 333{,}333$; B: 166,667; C: 333,333; D: 166,667.

*RPKM:* A: $400{,}000/(2 \times 2) = 100{,}000$; B: 50,000; C: 100,000; D: 50,000.

**Once length is accounted for, A and C are the most abundant transcripts**, at twice the level of B and D. D's large count came from being 10 kb long. TPM and RPKM rank the genes the same way within this sample, but only TPM sums to a million, so only TPM shares are comparable across samples of different composition.

**Example 2 (why you'd care): composition bias.** Two samples (counts in thousands), where gene X rises tenfold and nothing else changes:

| gene | sample 1 | sample 2 |
|---|---|---|
| 1 | 100 | 100 |
| 2 | 200 | 200 |
| 3 | 300 | 300 |
| 4 | 400 | 400 |
| X | 5,000 | 50,000 |
| total | 6,000 | 51,000 |

*CPM view.* Gene 1 is $100/6{,}000$ of sample 1 and $100/51{,}000$ of sample 2. Its log2 fold change is $\log_2(6{,}000/51{,}000) = \mathbf{-3.09}$, and genes 2–4 are the same. Gene X: $\log_2\big((50{,}000/51{,}000)/(5{,}000/6{,}000)\big) = \mathbf{+0.23}$.

*Median of ratios.* Geometric means: genes 1–4 are 100, 200, 300, 400; gene X is $\sqrt{5{,}000 \times 50{,}000} = 15{,}811$. Ratios for sample 1: 1, 1, 1, 1, 0.316, median $s_1 = \mathbf{1}$. Sample 2: 1, 1, 1, 1, 3.16, median $s_2 = \mathbf{1}$. So normalized counts equal raw counts: genes 1–4 have log2 fold change **0**, gene X **+3.32**.

Per-million scaling would declare four false eightfold decreases. In real data this is not hypothetical: a few very abundant transcripts (haemoglobin in blood, secreted proteins in pancreas, rRNA left by failed depletion) routinely distort total-count normalization.

## Watch out

- **You might compare** raw counts or CPM between genes — **but actually** longer genes get more reads at equal abundance. Within-sample comparisons across genes need a length correction (TPM), and even then, differences in mappability and GC bias remain.
- **You might use** TPM or RPKM as input to differential-expression tests — **but actually** the count models of [5.2](05-02-differential-expression-multiple-testing.md) need raw counts plus size factors. TPM discards the information about how many reads the estimate rests on, and that's what the test's variance depends on.
- **You might trust** median-of-ratios unconditionally — **but actually** it assumes most genes don't change. In experiments that shut down global transcription, or that compare very different tissues, that assumption fails, and spike-in controls are needed.

## One-liner

> Read counts scale with depth, length and the rest of the sample: CPM fixes depth, TPM also fixes length so values are transcript shares, and only a robust cross-sample size factor like median-of-ratios survives a few genes dominating the library.

## Problems

**P1 (🟢)** A sample has four genes: E (1.5 kb, 3,000 reads), F (3 kb, 3,000 reads), G (0.5 kb, 1,000 reads), H (6 kb, 3,000 reads). Compute CPM and TPM for each, and rank the genes by TPM.

**P2 (🟡)** Three samples, four genes:

| gene | S1 | S2 | S3 |
|---|---|---|---|
| a | 50 | 100 | 75 |
| b | 200 | 400 | 300 |
| c | 30 | 60 | 45 |
| d | 500 | 1,000 | 2,250 |

(a) Compute each gene's geometric mean. (b) Compute the median-of-ratios size factors. (c) Compute gene d's normalized counts, and say which sample, if any, shows a change for d.

**P3 (🔴)** In Example 2, (a) what is sample 2's size factor if you use **total counts** (scaled so sample 1's factor is 1)? (b) Show that using median-of-ratios with only genes 1 and X would give an ambiguous answer, and say what that implies about how many genes the method needs. (c) Suppose instead that 60 percent of all genes truly doubled in sample 2. What would median-of-ratios estimate, and what would it do to the reported fold changes?

<details>
<summary>Solutions</summary>

**P1** Total reads $N = 10{,}000$. CPM: E 300,000; F 300,000; G 100,000; H 300,000.
Reads per kb: E $3{,}000/1.5 = 2{,}000$; F $1{,}000$; G $2{,}000$; H $500$. Sum $5{,}500$.
TPM: E $2{,}000/5{,}500 \times 10^6 = \mathbf{363{,}636}$; F $\mathbf{181{,}818}$; G $\mathbf{363{,}636}$; H $\mathbf{90{,}909}$.
Ranking by TPM: **E = G > F > H**. By CPM, G looked lowest; by length-corrected share, it ties for highest.

**P2** (a) Geometric means: a: $(50 \cdot 100 \cdot 75)^{1/3} = 375{,}000^{1/3} = 72.1$. b: $(200 \cdot 400 \cdot 300)^{1/3} = 24{,}000{,}000^{1/3} = 288.4$. c: $(30 \cdot 60 \cdot 45)^{1/3} = 81{,}000^{1/3} = 43.3$. d: $(500 \cdot 1{,}000 \cdot 2{,}250)^{1/3} = 1{,}125{,}000{,}000^{1/3} = 1{,}040$.

(b) Ratios:

| gene | S1 | S2 | S3 |
|---|---|---|---|
| a | 0.693 | 1.387 | 1.040 |
| b | 0.693 | 1.387 | 1.040 |
| c | 0.693 | 1.387 | 1.040 |
| d | 0.481 | 0.962 | 2.163 |

Medians of four values (average of the middle two): $s_1 = 0.693$, $s_2 = 1.387$, $s_3 = 1.040$. (Genes a, b and c agree exactly, so the median ignores d.)

(c) Gene d normalized: S1 $500/0.693 = 722$; S2 $1{,}000/1.387 = 721$; S3 $2{,}250/1.040 = 2{,}163$. **S3 shows d up threefold**; S1 and S2 agree once depth is removed (S2 simply had twice the depth).

**P3** (a) Total counts give $51{,}000/6{,}000 = \mathbf{8.5}$. That's exactly what produced the false $-3.09$ values.

(b) With genes 1 and X, the ratios in sample 2 are 1 and 3.16, and their median is the average, **2.08**. That's neither the truth (1) nor the total-count answer. The median is robust only when the unchanged genes are a clear majority. With thousands of genes that holds easily; with a handful, one outlier drags it.

(c) The median gene has doubled, so the method estimates $s_2 \approx 2$ (relative to sample 1). It then divides sample 2 by 2: the 60 percent of genes that really doubled appear **unchanged**, and the 40 percent that were unchanged appear **halved**. Every fold change is shifted by $\log_2 2 = 1$. The method can't tell "most genes doubled" from "the sample was sequenced twice as deeply" — only external spike-in RNA of known amount can.

</details>

## Flashback

**From Lesson 4.4 (Variant calling):** Five reads at a site, 3 showing the reference A and 2 showing G, all Q20, heterozygosity prior $\theta = 0.001$. (a) Compute $P(D \mid AA)$ and $P(D \mid AG)$. (b) Compute $P(AG \mid D)$ and the genotype quality. (c) The site is a known common SNP where about 1 in 100 people are heterozygous. Redo (b) with $\theta = 0.01$.

<details>
<summary>Solution</summary>

(a) At Q20, $\varepsilon = 0.01$. $P(D \mid AA) = 0.99^3 \times 0.00333^2 = 0.970 \times 1.11\times10^{-5} = \mathbf{1.08\times10^{-5}}$. Each read under AG: $\tfrac12(0.99) + \tfrac12(0.00333) = 0.4967$, so $P(D \mid AG) = 0.4967^5 = \mathbf{0.0302}$.

(b) AA: $0.9985 \times 1.08\times10^{-5} = 1.08\times10^{-5}$. AG: $0.001 \times 0.0302 = 3.02\times10^{-5}$. $P(AG \mid D) = 3.02/(3.02 + 1.08) = \mathbf{0.737}$. GQ $= -10\log_{10}(0.263) \approx \mathbf{6}$: a weak call.

(c) Priors $0.985$ and $0.01$: AA $1.06\times10^{-5}$, AG $3.02\times10^{-4}$. $P(AG \mid D) = \mathbf{0.966}$, GQ about 15. Population knowledge about the site is a legitimate prior, and it's why joint calling across many samples beats calling each sample alone.

</details>

## Connections

- **Backward:** reads are assigned to genes by mapping ([4.2](04-02-read-mapping-bwt-fm-index.md)); what an mRNA is and how it's made is [molecular-cell-biology 4.2](../../molecular-cell-biology/lessons/04-02-eukaryotic-transcription-machine.md); clustering and PCA on the normalized matrix are [machine-learning 3.4](../../machine-learning/lessons/03-04-hierarchical-clustering.md) and [3.2](../../machine-learning/lessons/03-02-principal-component-analysis.md).
- **Forward:** [5.2](05-02-differential-expression-multiple-testing.md) models the normalized counts with a negative binomial and tests every gene; [5.6](05-06-inferring-networks-from-data.md) builds co-expression networks from the log-normalized matrix; RNA-seq evidence also anchors gene annotation beyond [3.6](03-06-gene-finding.md)'s ab initio models.
- **Sideways:** the composition problem is the closure problem of compositional data — shares must sum to a constant, so one part rising forces others down — which also distorts microbiome abundances and geochemical proportions; the median as a robust scale estimate is the same breakdown-point idea that makes medians preferred over means in noisy measurement.
