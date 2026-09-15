# Computational Biology · Lesson 4.5: Imputation & fine-mapping

> ⏱ ~15 min · Module 4: Genomics — from reads to variants · Builds on: [genetics 4.4](../../genetics/lessons/04-04-linkage-disequilibrium-gwas.md) (LD, GWAS, the $5\times10^{-8}$ threshold), [3.3](03-03-forward-backward-posterior-decoding.md) (forward–backward), [4.4](04-04-variant-calling-genotype-likelihoods.md) (genotypes and priors) · Unlocks: [5.2](05-02-differential-expression-multiple-testing.md) (testing many hypotheses)

## Why this matters

Genome-wide association studies usually genotype people on arrays that measure a few hundred thousand sites, not all ten million common variants. Yet published GWAS test millions of variants. The gap is filled by **imputation**: predicting untyped genotypes from typed ones, using a panel of fully sequenced reference haplotypes. And when a GWAS finds a signal, it's a whole block of correlated variants lighting up together. Which one is causal is a separate question, **fine-mapping**.

[Genetics 4.4](../../genetics/lessons/04-04-linkage-disequilibrium-gwas.md) explained why both problems exist, since linkage disequilibrium ties nearby variants together, and it named the solutions. [Genetics 4.5](../../genetics/lessons/04-05-human-genetics-genome-medicine.md) handed "the algorithms behind variant calling, imputation and fine-mapping" to this course. Here they are: an HMM whose hidden states are reference haplotypes, and a Bayes factor that turns a z-score into a probability of causality.

## The idea

**Imputation: everyone is a mosaic of haplotypes you've already seen.** A person's chromosome is inherited in long chunks from ancestors, and those chunks also occur, with small differences, in other people. Over a short region, your haplotype probably looks almost exactly like **some** reference haplotype. Further along, after a historical recombination, it looks like a different one.

The **Li–Stephens model** makes that an HMM:

- **Hidden state** at each site: which reference haplotype you're currently "copying".
- **Transitions:** mostly keep copying the same one; switch occasionally, more often across longer genetic distances (recombination).
- **Emissions:** your allele matches the copied haplotype's allele, except for a small mismatch probability (mutation or error).

At **typed** sites the emissions carry evidence about who you're copying. At **untyped** sites there's no observation, so the emission is 1. Run forward–backward ([3.3](03-03-forward-backward-posterior-decoding.md)) to get, at each untyped site, the posterior probability of copying each reference haplotype. Then read off the imputed allele probability.

**Fine-mapping: from "this block is associated" to "this variant, probably".** In a region with one causal variant, every variant in LD with it shows association, and the causal one tends to have the largest test statistic. Tends to, not must: noise can promote a close neighbour. Under the assumption of **exactly one causal variant**, Bayes' rule gives each variant a **posterior inclusion probability (PIP)** proportional to its Bayes factor. Variants are then collected, most probable first, until their PIPs sum to 95 percent: a **credible set**.

## The formal version

**Li–Stephens HMM.** With reference haplotypes $h_1, \ldots, h_K$ and target alleles $x_s$ at sites $s$:

$$P(\pi_{s+1} = k' \mid \pi_s = k) = \begin{cases} 1 - \rho_s & k' = k\\ \rho_s/(K-1) & k' \ne k\end{cases}$$

$$P(x_s \mid \pi_s = k) = \begin{cases} 1 - \varepsilon & x_s = h_{k,s}\\ \varepsilon & x_s \ne h_{k,s}\end{cases}$$

with emission 1 at untyped sites. Here $\rho_s$ grows with the genetic distance between sites. This is the [Li–Stephens model](../reference.md#li-stephens-model). The **imputed probability** of allele $a$ at an untyped site $s$ is

$$P(x_s = a \mid \text{typed data}) = \sum_k P(\pi_s = k \mid \text{typed data})\,P(a \mid h_{k,s}).$$

*In words: average the reference alleles at the missing site, weighted by how likely you are to be copying each haplotype there.* For a diploid individual, the imputed **dosage** is the expected number of copies of $a$ across both haplotypes, a number between 0 and 2.

**Approximate Bayes factor** (Wakefield). For a variant with effect estimate $\hat\beta$, standard error $\text{SE}$, $z = \hat\beta/\text{SE}$, and a normal prior on the true effect with variance $W$:

$$\text{ABF} = \sqrt{1 - r}\;\exp\!\Big(\frac{z^2 r}{2}\Big), \qquad r = \frac{W}{W + \text{SE}^2}.$$

This is the [approximate Bayes factor](../reference.md#approximate-bayes-factor): the evidence for "this variant has an effect" over "no effect". *In words: evidence grows like $e^{z^2/2}$, shrunk slightly by how uncertain the estimate is relative to the prior.*

**Posterior inclusion probability** under a single causal variant with equal priors:

$$\text{PIP}_j = \frac{\text{ABF}_j}{\sum_i \text{ABF}_i}.$$

**95 percent credible set:** sort variants by PIP, and take the smallest top set whose PIPs sum to at least 0.95. This is the [credible set](../reference.md#credible-set).

## Picture

![Left: three reference haplotypes h1 equal to 0010, h2 equal to 0111 and h3 equal to 1101 across four sites, each cell shaded by the posterior probability that the target copies that haplotype there; h2 is shaded strongly at every site, with posteriors about 0.89, 0.90, 0.85 and 0.81, and h3 lightly at sites 2 to 4. The target row reads 0, 1, unknown, 1, and the imputed probability of allele 1 at site 3 is 0.85. Right: four SNPs with z-scores 6.0, 5.8, 4.0 and 2.0 drawn as bars, and their posterior inclusion probabilities 0.76, 0.24, 0.00 and 0.00; a bracket marks SNP1 and SNP2 as the 95 percent credible set.](assets/04-05-fig1.svg)

On the left, the target matches h2 at every typed site, so the model is confident it copies h2 there. At the missing site h2 carries a 1, and so does the imputation, with probability 0.85. The leftover uncertainty is mostly h3, which agrees with the target at sites 2 and 4 and would supply a 0. On the right, SNP1 and SNP2 have nearly the same z-score. That small gap in $z$, squared and exponentiated, still gives SNP1 three times SNP2's evidence, but it doesn't settle the question. The credible set must hold both.

## Worked examples

**Example 1 (mechanical): imputing one site.** References $h_1 = $ `0010`, $h_2 = $ `0111`, $h_3 = $ `1101`. The target is typed at sites 1, 2 and 4 as `0`, `1`, `1`, with site 3 missing. Take $\rho = 0.1$ between adjacent sites (so a switch to each other haplotype has probability 0.05), $\varepsilon = 0.01$, and a uniform start.

*Forward, site 1* (target 0): $f_1 = f_2 = \tfrac13(0.99) = 0.33$; $f_3 = \tfrac13(0.01) = 0.0033$.

*Forward, site 2* (target 1; $h_1$ has 0, $h_2$ and $h_3$ have 1):

$$f_1 = 0.01\,[0.33(0.9) + 0.33(0.05) + 0.0033(0.05)] = 0.01 \times 0.3137 = 0.00314,$$

$$f_2 = 0.99 \times 0.3137 = 0.3105$$

$$f_3 = 0.99\,[0.33(0.05) + 0.33(0.05) + 0.0033(0.9)] = 0.99 \times 0.036 = 0.0356.$$

Continuing forward through sites 3 and 4, and running the backward pass, gives posteriors at site 3 of $P(h_1) = 0.007$, $P(h_2) = 0.849$, $P(h_3) = 0.144$.

*Imputed allele.* $h_1$ and $h_2$ carry 1 at site 3, $h_3$ carries 0:

$$P(x_3 = 1) = (0.007 + 0.849)(0.99) + 0.144(0.01) = 0.847 + 0.001 = \mathbf{0.849}.$$

**Example 2 (why you'd care): fine-mapping a GWAS peak.** Four SNPs in one LD block, all with $\text{SE} = 0.03$, and prior effect variance $W = 0.04$ (a prior standard deviation of 0.2 on the log-odds scale). Then $r = 0.04/0.0409 = 0.978$ and $\sqrt{1-r} = 0.148$, the same factor for every SNP, which cancels in the PIPs.

| SNP | $z$ | $z^2 r/2$ | $e^{z^2 r/2}$ | PIP |
|---|---|---|---|---|
| 1 | 6.0 | 17.60 | $4.42\times10^{7}$ | **0.760** |
| 2 | 5.8 | 16.45 | $1.39\times10^{7}$ | **0.240** |
| 3 | 4.0 | 7.82 | $2.50\times10^{3}$ | 0.00004 |
| 4 | 2.0 | 1.96 | 7.07 | 0.0000001 |

**95 percent credible set: {SNP1, SNP2}**, since SNP1 alone reaches only 0.76. Both pass the genome-wide threshold ($z = 5.8$ gives $p \approx 7\times10^{-9}$). A difference of 0.2 in $z$ makes SNP1 about three times as probable, which is suggestive, not decisive. The next step is biology: which of the two sits in a regulatory element, changes a protein, or alters expression.

## Watch out

- **You might treat** imputed genotypes as observed — **but actually** they're probabilities. Use dosages or genotype probabilities in association tests, and filter on imputation quality (how much the imputed dosage varies relative to what's expected). Rare variants and populations poorly represented in the reference panel impute badly.
- **You might assume** the variant with the smallest p-value is causal — **but actually** with strong LD, noise easily reorders close z-scores. The credible set, not the lead SNP, is the honest summary. Two variants in perfect LD get identical statistics and can't be separated by association data at all (Problem 3).
- **You might apply** single-causal-variant fine-mapping everywhere — **but actually** some loci have two or more independent causal variants. The single-variant assumption then spreads probability wrongly. Methods allowing several causal variants exist, and they need an accurate LD matrix from the same population.

## One-liner

> Imputation runs forward–backward over an HMM whose hidden states are the reference haplotypes a person is copying, filling untyped sites with posterior-weighted alleles; fine-mapping turns each variant's $z$ into a Bayes factor, normalizes to posterior inclusion probabilities, and reports a credible set rather than a single lead variant.

## Problems

**P1 (🟢)** A diploid individual's two haplotypes are imputed at an untyped site with $P(\text{allele }1) = 0.849$ on one and $0.20$ on the other. Treating the haplotypes as independent: (a) compute the probabilities of genotypes with 0, 1 and 2 copies of allele 1; (b) compute the imputed dosage two ways; (c) what genotype would a "best guess" call report, and what information does that discard?

**P2 (🟡)** Five SNPs in one region have $z = 5.5, 5.4, 5.3, 3.0, 1.0$, all with $\text{SE} = 0.03$ and $W = 0.04$ ($r = 0.978$). (a) Compute the PIPs. (b) Give the 95 percent credible set. (c) Compare its size with Example 2's and explain the difference.

**P3 (🔴)** Two SNPs are in perfect LD ($r^2 = 1$) in the study population, so both have $z = 7.0$. (a) What are their PIPs under equal priors? (b) One SNP disrupts a known transcription-factor binding site. An annotation-informed prior gives it prior probability 0.8 of being the causal one, and the other 0.2. What are the PIPs now? (c) A second cohort of a different ancestry, where the two SNPs have $r^2 = 0.5$, gives $z = 6.0$ for the annotated SNP and $z = 4.2$ for the other (same $\text{SE} = 0.03$, $W = 0.04$). Using only this cohort and equal priors, compute the PIPs. (d) Which kind of additional data narrowed things more here, and why?

<details>
<summary>Solutions</summary>

**P1** (a) $P(0) = 0.151 \times 0.80 = \mathbf{0.121}$. $P(1) = 0.849 \times 0.80 + 0.151 \times 0.20 = 0.679 + 0.030 = \mathbf{0.709}$. $P(2) = 0.849 \times 0.20 = \mathbf{0.170}$.

(b) From genotypes: $0(0.121) + 1(0.709) + 2(0.170) = \mathbf{1.049}$. From haplotypes: $0.849 + 0.20 = \mathbf{1.049}$. They agree, as expectations must.

(c) Best guess: **one copy** (probability 0.709). It discards the 29 percent uncertainty. Treating it as certain in an association test overstates the sample size and biases effect estimates toward zero, which is why dosages are preferred.

**P2** (a) The factor $\sqrt{1-r}$ cancels. $e^{z^2 r/2}$: $2.66\times10^{6}$, $1.56\times10^{6}$, $9.24\times10^{5}$, $81.5$, $1.63$. Sum $5.14\times10^{6}$. PIPs: **0.517, 0.303, 0.180**, 0.00002, 0.0000003.

(b) Cumulative: 0.517, 0.820, 1.000. The **credible set is SNP1, SNP2, SNP3**.

(c) Three SNPs instead of two. The z-scores here are closer together (5.5, 5.4, 5.3), so the Bayes factors are closer and the posterior spreads out. Credible-set size measures how well the data *distinguish* candidates, not how strong the association is. Example 2's signal was also stronger in $z$, which makes the same gap in $z$ a bigger ratio of Bayes factors, because the exponent is quadratic in $z$.

**P3** (a) Identical $z$ gives identical Bayes factors: **PIP 0.5 each**. The association data can't tell them apart.

(b) With unequal priors, $\text{PIP}_j \propto \pi_j\,\text{ABF}_j$, and the ABFs are equal, so the PIPs equal the priors: **0.8 and 0.2**. All the discrimination comes from annotation.

(c) $r = 0.978$. $e^{z^2 r/2}$: $z = 6.0$ gives $e^{17.60} = 4.42\times10^{7}$; $z = 4.2$ gives $e^{8.63} = 5.59\times10^{3}$. PIPs: **0.99987** for the annotated SNP and **0.00013** for the other.

(d) The **trans-ancestry cohort** narrowed it far more. In a population where LD between the two SNPs is weaker, their association statistics come apart, and the causal one keeps the stronger signal. Association data can only separate variants whose correlation isn't perfect, so populations with different LD patterns shrink credible sets. Annotation priors help too, but they encode prior belief, not new evidence about this locus.

</details>

## Flashback

**From Lesson 4.3 (Genome assembly):** The 3-mers of an unknown string are AGT, ATG, CAG, CAT, GTC, TCA, TGA. (a) Build the de Bruijn graph and give every node's in- and out-degree. (b) Identify the start and end, and reconstruct the string. (c) The start node is visited twice. Why is there still only one reconstruction?

<details>
<summary>Solution</summary>

(a) Edges: AG→GT, AT→TG, CA→AG, CA→AT, GT→TC, TC→CA, TG→GA. Degrees: CA (in 1, out 2), AG (1, 1), GT (1, 1), TC (1, 1), AT (1, 1), TG (1, 1), GA (1, 0).

(b) CA has out − in = 1: **start**. GA has in − out = 1: **end**. Walk CA → AG → GT → TC → CA → AT → TG → GA, spelling **`CAGTCATGA`**.

(c) On the first visit to CA there are two exits. Taking AT first leads straight to the end, CA → AT → TG → GA, with the cycle CA → AG → GT → TC → CA unused, so it isn't an Eulerian path. Only "cycle first, then AT" uses every edge. A repeated node creates ambiguity only when *two different completions* both use all edges; here one choice dead-ends.

</details>

## Connections

- **Backward:** LD, haplotype blocks, the GWAS threshold and the named-but-unexplained imputation and fine-mapping are [genetics 4.4](../../genetics/lessons/04-04-linkage-disequilibrium-gwas.md)'s, handed here by [genetics 4.5](../../genetics/lessons/04-05-human-genetics-genome-medicine.md); the Li–Stephens computation is [3.3](03-03-forward-backward-posterior-decoding.md)'s forward–backward; genotype priors and posteriors mirror [4.4](04-04-variant-calling-genotype-likelihoods.md).
- **Forward:** testing millions of variants, or 20,000 genes, is the multiple-testing problem of [5.2](05-02-differential-expression-multiple-testing.md); fine-mapped variants are followed up with expression and regulatory data ([5.1](05-01-rna-seq-quantification-normalization.md)).
- **Sideways:** the approximate Bayes factor is a likelihood ratio integrated over a normal prior, the same Bayesian model comparison idea as [statistical-learning 2.5](../../statistical-learning/lessons/02-05-regularization-as-a-bayesian-prior.md)'s priors; the recombination-driven mosaic that Li–Stephens approximates is the coalescent with recombination of [evolution-ecology](../../evolution-ecology/syllabus.md).
