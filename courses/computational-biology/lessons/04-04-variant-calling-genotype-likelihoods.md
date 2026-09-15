# Computational Biology · Lesson 4.4: Variant calling

> ⏱ ~15 min · Module 4: Genomics — from reads to variants · Builds on: [4.1](04-01-sequencing-reads-and-errors.md) (Phred qualities), [4.2](04-02-read-mapping-bwt-fm-index.md) (mapping and MAPQ), [genetics 3.6](../../genetics/lessons/03-06-reading-editing-genes.md) (heterozygote miss at low coverage), [prob-stat-refresher 1.2](../../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md) (Bayes' rule) · Unlocks: [4.5](04-05-imputation-and-fine-mapping.md) (imputation), [5.1](05-01-rna-seq-quantification-normalization.md) (counting reads)

## Why this matters

Line up the mapped reads at one position of the genome and you get a **pileup**: a column of observed bases, each with a quality score. Most columns agree with the reference. A few don't. The question behind every clinical genome, cancer panel and population study is whether a disagreeing column is a **real genetic variant** or **sequencing error**.

[Genetics 3.6](../../genetics/lessons/03-06-reading-editing-genes.md) showed one side of the risk: at low coverage a heterozygote can go unseen. This lesson builds the calculation modern callers actually do. For each possible genotype, compute the probability of the observed bases from their qualities, then combine that with a prior using Bayes' rule. That's the second half of Boss problem 4, and it answers the boss's closing question: which single fact would most change the call?

## The idea

**A diploid genome has two copies of each site.** With reference base A and candidate alternative G, the true genotype is AA, AG or GG.

**Each read samples one copy, then may misread it.** Under AG, a read comes from the A copy or the G copy with probability ½ each. Whichever copy it came from, the sequencer reports the right base with probability $1 - \varepsilon$, where $\varepsilon$ comes from the base's Phred quality ([4.1](04-01-sequencing-reads-and-errors.md)). So:

- Under **AA**, seeing G requires an error: probability about $\varepsilon/3$ (the error must happen *and* land on G).
- Under **AG**, seeing either base has probability about ½.
- Under **GG**, seeing A requires an error.

**Multiply across reads.** Treat reads as independent given the genotype, and multiply their probabilities to get the **genotype likelihood**: the probability of the whole pileup under that genotype. Two high-quality G reads are almost impossible under AA (two independent errors) and ordinary under AG.

**Then apply a prior.** Most sites aren't variable: in humans roughly 1 site in 1,000 differs between a person's two copies. Bayes' rule combines this prior with the likelihoods to give a **posterior** for each genotype. A call is reported with its posterior, often as a Phred-scaled quality.

**The model is only as good as its inputs.** Wrong base qualities, PCR duplicates counted as independent reads, reads mapped to the wrong copy of a repeat, or errors concentrated on one strand all break the independence and error assumptions. Filters and recalibration exist to protect the likelihood.

## The formal version

Let the site have reads $r = 1, \ldots, n$ showing bases $b_r$ with error probabilities $\varepsilon_r = 10^{-Q_r/10}$. For a single allele $a$,

$$P(b \mid a) = \begin{cases} 1 - \varepsilon & b = a,\\ \varepsilon/3 & b \ne a.\end{cases}$$

**Genotype likelihood** for a diploid genotype $G = a_1a_2$:

$$P(D \mid G) = \prod_{r=1}^{n}\Big[\tfrac12 P(b_r \mid a_1) + \tfrac12 P(b_r \mid a_2)\Big].$$

This is the [genotype likelihood](../reference.md#genotype-likelihood). *In words: for each read, average over which chromosome copy it sampled, account for a possible misread, and multiply over reads.*

**Prior.** With heterozygosity $\theta$ (about $10^{-3}$ in humans) and reference allele A:

$$P(AA) = 1 - \tfrac32\theta, \qquad P(AG) = \theta, \qquad P(GG) = \tfrac12\theta.$$

**Posterior.**

$$P(G \mid D) = \frac{P(D \mid G)\,P(G)}{\sum_{G'} P(D \mid G')\,P(G')}.$$

The call is the genotype with the highest posterior. Its **genotype quality** is $\text{GQ} = -10\log_{10}\big(1 - P(G^* \mid D)\big)$.

**Assumptions to check.** Reads are independent (no PCR or optical duplicates). Base qualities are calibrated. Reads are correctly mapped (high MAPQ). The sample is diploid, with a 50 percent allele fraction for heterozygotes. Errors show no strand bias. Tumour samples and mosaics violate the last one by design, and that needs a different model.

## Picture

![Left: a pileup of eight reads over a reference stretch, with one highlighted column where six reads show A and two show G. Right: posterior genotype probabilities under three scenarios. With all bases at Q30, AA is 0.028 and AG is 0.972. If the two G bases are Q10 instead, AA is 0.997 and AG is 0.003. If the two G reads are PCR duplicates counted once, AA is 0.977 and AG is 0.023. GG is negligible throughout.](assets/04-04-fig1.svg)

The pileup is the same in all three scenarios; only the metadata changes. With trustworthy G bases, two independent G reads can't plausibly be errors, and heterozygous wins despite a 1-in-1,000 prior. Drop the G bases to Q10 and "two errors" becomes plausible enough that the prior takes over. Collapse the two G reads into one duplicate and a single G read, even at Q30, can't overcome the prior. The call doesn't depend on "six versus two" at all. It depends on **how independent and how trustworthy the two G observations are**.

## Worked examples

**Example 1 (mechanical): Boss problem 4's pileup.** Eight reads: six A and two G, all Q30 ($\varepsilon = 0.001$). Reference A, $\theta = 0.001$.

*Per-read probabilities:*

| read shows | under AA | under AG | under GG |
|---|---|---|---|
| A | $0.999$ | $\tfrac12(0.999) + \tfrac12(0.000333) = 0.4997$ | $0.000333$ |
| G | $0.000333$ | $0.4997$ | $0.999$ |

*Likelihoods:*

$$P(D \mid AA) = 0.999^6 \times 0.000333^2 = 0.994 \times 1.11\times10^{-7} = 1.10\times10^{-7},$$

$$P(D \mid AG) = 0.4997^8 = 3.89\times10^{-3}$$

$$P(D \mid GG) = 0.000333^6 \times 0.999^2 \approx 1.4\times10^{-21}.$$

*Posterior,* with priors $0.9985$, $0.001$, $0.0005$:

$$\text{AA: } 0.9985 \times 1.10\times10^{-7} = 1.10\times10^{-7}$$

$$\text{AG: } 0.001 \times 3.89\times10^{-3} = 3.89\times10^{-6}.$$

$$P(AG \mid D) = \frac{3.89\times10^{-6}}{3.89\times10^{-6} + 1.10\times10^{-7}} = \mathbf{0.972}.$$

**Call: heterozygous AG**, GQ $= -10\log_{10}(0.028) \approx 16$. The likelihood ratio of about 35,000 in favour of AG overwhelms prior odds of 1 to 1,000 against it.

**Example 2 (why you'd care): what changes the call.** Keep the pileup and change one fact at a time.

*The two G bases are Q10* ($\varepsilon = 0.1$). A G read now has probability $0.1/3 = 0.0333$ under AA and $\tfrac12(0.9) + \tfrac12(0.0333) = 0.467$ under AG. Then $P(D\mid AA) = 0.994 \times 0.0333^2 = 1.10\times10^{-3}$ and $P(D \mid AG) = 0.4997^6 \times 0.467^2 = 3.39\times10^{-3}$. The likelihood ratio collapses to about 3, and with the prior, $P(AA \mid D) = \mathbf{0.997}$. **Call flips to homozygous reference.**

*The two G reads are PCR duplicates of one molecule.* Counted once, $P(D \mid AA) = 0.999^6 \times 0.000333 = 3.3\times10^{-4}$ and $P(D \mid AG) = 0.4997^7 = 7.8\times10^{-3}$. The ratio is about 23, and $P(AA \mid D) = \mathbf{0.977}$. **Also flips.**

So the single most informative missing fact is the **quality and independence of the two G observations**: their base qualities, and whether they are distinct molecules (duplicate marking), mapped confidently (MAPQ) and on both strands. Adding more reads helps too, but fixing a wrong assumption helps more.

## Watch out

- **You might call** a variant when the alternative-allele fraction passes a threshold such as 20 percent — **but actually** the fraction ignores base quality, duplicates and depth. Two Q30 reads out of eight and two Q10 reads out of eight have the same fraction and opposite calls.
- **You might ignore** the prior because it "biases" the call — **but actually** at a random site a true heterozygote is a 1-in-1,000 event. Without the prior every modest cluster of errors becomes a variant, and across 3 billion sites that means millions of false calls.
- **You might apply** the diploid model to a tumour or a mixed sample — **but actually** it assumes heterozygous alleles at 50 percent. A subclonal mutation present in 10 percent of cells shows up as 3 alternative reads in 30. The diploid model calls it reference with high confidence (Problem 3), which is why somatic callers model allele fractions explicitly.

## One-liner

> A variant call weighs genotype likelihoods — each read averaged over which chromosome copy it sampled and corrected for a quality-derived error rate — against a heterozygosity prior, so the verdict turns on how trustworthy and independent the disagreeing reads are, not on their count.

## Problems

**P1 (🟢)** A site has 4 reads, 3 showing A and 1 showing G, all Q30, reference A, $\theta = 0.001$. (a) Compute $P(D \mid AA)$ and $P(D \mid AG)$. (b) Compute $P(AG \mid D)$. (c) What would you report?

**P2 (🟡)** A site has 8 reads, 4 A and 4 G, all Q20. (a) Compute the three genotype likelihoods. (b) Without any arithmetic beyond (a), explain why the posterior is essentially 1 for AG whatever reasonable prior you choose. (c) Why is this 4/4 split at Q20 more convincing than Example 1's 6/2 split at Q30?

**P3 (🔴)** A tumour sample has 30 reads at a site: 27 A and 3 G, all Q30. (a) Compute $\log_{10}P(D \mid AA)$ and $\log_{10}P(D \mid AG)$. (b) With $\theta = 0.001$, what does the diploid model call, and with what posterior? (c) Suppose instead the site is modelled as a mixture with alternative-allele fraction $f$, with each read showing G with probability $f(1-\varepsilon) + (1-f)\varepsilon/3$. Compute the likelihood at $f = 0.1$ and compare it with $f = 0$. (d) What biological situation does this represent, and why does the diploid model miss it?

<details>
<summary>Solutions</summary>

**P1** (a) $P(D\mid AA) = 0.999^3 \times 0.000333 = 0.997 \times 3.33\times10^{-4} = \mathbf{3.32\times10^{-4}}$. $P(D\mid AG) = 0.4997^4 = \mathbf{0.0623}$.

(b) AA: $0.9985 \times 3.32\times10^{-4} = 3.32\times10^{-4}$. AG: $0.001 \times 0.0623 = 6.23\times10^{-5}$. $P(AG\mid D) = 6.23\times10^{-5}/(6.23\times10^{-5} + 3.32\times10^{-4}) = \mathbf{0.158}$.

(c) Homozygous reference with low confidence (GQ $\approx -10\log_{10}0.158 = 8$), or "no confident call". A single alternative read at 4× coverage can't establish a heterozygote, but it's not strong evidence against one either. More depth is the answer.

**P2** (a) At Q20, $\varepsilon = 0.01$, so $\varepsilon/3 = 0.00333$ and $1 - \varepsilon = 0.99$.
$P(D\mid AA) = 0.99^4 \times 0.00333^4 = 0.961 \times 1.23\times10^{-10} = \mathbf{1.19\times10^{-10}}$.
$P(D\mid AG) = [\tfrac12(0.99) + \tfrac12(0.00333)]^8 = 0.4967^8 = \mathbf{3.7\times10^{-3}}$.
$P(D\mid GG) = \mathbf{1.19\times10^{-10}}$ by symmetry.

(b) AG's likelihood exceeds both homozygotes' by a factor of about $3\times10^{7}$. Even a prior of $10^{-5}$ on AG against $\approx 1$ on AA leaves posterior odds of about 300 to 1 for AG. No sensible prior is strong enough to overturn a likelihood ratio that large.

(c) Four independent alternative reads each require an error under AA, so $P(D\mid AA)$ carries $(\varepsilon/3)^4$; Example 1 had only $(\varepsilon/3)^2$. Each additional error-requiring read multiplies the evidence by about $1/(\varepsilon/3)$, which is 300 at Q20 — more than the tenfold difference in per-base quality gives back. A 50/50 split is also exactly what a heterozygote predicts.

**P3** (a) $\log_{10}P(D\mid AA) = 27\log_{10}0.999 + 3\log_{10}(3.33\times10^{-4}) = -0.0117 + 3(-3.477) = \mathbf{-10.44}$.
$\log_{10}P(D\mid AG) = 30\log_{10}0.49967 = 30(-0.3013) = \mathbf{-9.04}$.

(b) Likelihood ratio AG to AA $= 10^{1.40} \approx 25$. Prior odds $0.001/0.9985 \approx 10^{-3}$. Posterior odds $\approx 0.025$, so $P(AG\mid D) \approx 0.025$: the model calls **AA with posterior about 0.975**. Under AG you'd expect about 15 G reads, not 3, and under AA three errors are rare but the prior makes them the better story.

(c) At $f = 0.1$: $P(\text{G}) = 0.1(0.999) + 0.9(0.000333) = 0.1002$, $P(\text{A}) = 0.8998$. $\log_{10}L = 27\log_{10}0.8998 + 3\log_{10}0.1002 = 27(-0.0459) + 3(-0.999) = -1.239 - 2.997 = -4.24$. At $f = 0$ (pure AA) it is $-10.44$. The mixture explains the data about $10^{6}$ times better.

(d) A **subclonal somatic mutation**: present in a fraction of tumour cells, or on one copy in 20 percent of cells. The diploid germline model allows allele fractions of only 0, ½ and 1, so a 10 percent signal falls between its options, and the prior pushes it to "reference". Somatic callers estimate $f$ and compare tumour with matched normal tissue.

</details>

## Flashback

**From Lesson 4.2 (Read mapping):** For $T = $ `ATTACATTAC#`, the transform is $L = $ `CTTC#AATTAA` with $C[\#] = 0$, $C[A] = 1$, $C[C] = 5$, $C[T] = 7$, and the suffix array is 10, 8, 3, 5, 0, 9, 4, 7, 2, 6, 1. (a) Run backward search for `CAT`, showing each range. (b) Report the number of occurrences and the text position. (c) Would a read consisting of `CATTAC` map uniquely? Explain using the text.

<details>
<summary>Solution</summary>

(a)
1. T: $[7, 11)$.
2. A: $\text{lo} = 1 + \text{Occ}(A, 7) = 1 + 2 = 3$; $\text{hi} = 1 + \text{Occ}(A, 11) = 1 + 4 = 5$. $[3, 5)$.
3. C: $\text{lo} = 5 + \text{Occ}(C, 3) = 5 + 1 = 6$; $\text{hi} = 5 + \text{Occ}(C, 5) = 5 + 2 = 7$. $[6, 7)$.

(b) **One occurrence**, at $\text{SA}[6] = 4$: `ATTA`**`CAT`**`TAC`.

(c) **Yes.** `CATTAC` starts at position 4 and runs to the end before the terminator; it contains `CAT`, which occurs only once. Although `ATTAC` is repeated, the C at position 4 is the junction between the two copies, and any read spanning it is unique. That is the general rule: reads mapping inside a repeat are ambiguous, and reads that cross its boundary aren't.

</details>

## Connections

- **Backward:** the error probabilities are [4.1](04-01-sequencing-reads-and-errors.md)'s Phred qualities; mapping confidence is [4.2](04-02-read-mapping-bwt-fm-index.md)'s MAPQ; the coverage-driven miss rate is [genetics 3.6](../../genetics/lessons/03-06-reading-editing-genes.md)'s; the posterior is Bayes' rule from [prob-stat-refresher 1.2](../../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md).
- **Forward:** genotype likelihoods from many individuals feed population-scale calling and imputation ([4.5](04-05-imputation-and-fine-mapping.md)); allele-specific read counts are the raw material of expression analysis ([5.1](05-01-rna-seq-quantification-normalization.md)).
- **Sideways:** the heterozygosity prior is genetics' Hardy–Weinberg logic applied to one person's two copies ([genetics 4.3](../../genetics/lessons/04-03-inbreeding-relatedness-structure.md)); the calculation is the same diagnostic-test Bayes that turned a positive screen into a low positive predictive value in [genetics 4.5](../../genetics/lessons/04-05-human-genetics-genome-medicine.md).
