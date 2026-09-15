# Computational Biology · Lesson 5.2: Differential expression & multiple testing

> ⏱ ~15 min · Module 5: Expression, structure & networks · Builds on: [5.1](05-01-rna-seq-quantification-normalization.md) (counts and size factors), [econometrics 2.7](../../econometrics/lessons/02-07-multiple-testing-specification-search.md) (Bonferroni, Benjamini–Hochberg), [systems-biology 4.3](../../systems-biology/lessons/04-03-stochastic-gene-expression.md) (the negative binomial from bursting), [prob-stat-refresher 4.3](../../prob-stat-refresher/lessons/04-03-hypothesis-testing.md) (p-values) · Unlocks: [5.6](05-06-inferring-networks-from-data.md) (network inference)

## Why this matters

"Which genes changed?" is the most common question in genomics, and it's asked of 20,000 genes at once. Two things make the answer treacherous. First, count data from biological replicates are **far noisier than Poisson**, so a test that assumes Poisson noise flags thousands of genes that merely vary between mice. Second, testing 20,000 hypotheses at $p < 0.05$ produces about **1,000 false positives** even if nothing changed.

[Econometrics 2.7](../../econometrics/lessons/02-07-multiple-testing-specification-search.md) derived the family-wise error rate, proved Bonferroni and stated Benjamini–Hochberg, and noted that genomics adopted the false discovery rate. This lesson supplies what genomics added: the count model that makes each gene's p-value honest, the BH procedure worked through on a gene list, and the $q$-value and $\pi_0$ that papers report.

## The idea

**Counts vary more than Poisson.** A Poisson count with mean 100 has standard deviation 10. Across biological replicates the same gene might read 70, 100 and 135, because mice, cultures and patients genuinely differ, and because transcription happens in bursts ([systems-biology 4.3](../../systems-biology/lessons/04-03-stochastic-gene-expression.md)). The **negative binomial** adds a second variance term that grows with the square of the mean. At high counts, biological variability dominates, and no amount of sequencing depth removes it. **Replicates**, not reads, buy statistical power.

**Test each gene.** Model each gene's normalized counts ([5.1](05-01-rna-seq-quantification-normalization.md)) with a negative binomial whose mean depends on condition. Estimate the log fold change and its standard error, and compute a p-value. DESeq2 and edgeR also share information across genes to stabilize each gene's dispersion estimate, because three replicates can't estimate a variance well alone.

**Control the false discovery rate.** Bonferroni controls the chance of *any* false positive, which at 20,000 tests demands $p < 2.5\times10^{-6}$ and throws away most real signal. The **false discovery rate** instead controls the expected *fraction* of your discoveries that are false. That suits a screen whose output goes on to validation. Benjamini–Hochberg: sort the p-values, compare the $j$-th smallest with $jq/m$, and reject everything up to the **last** one that falls under the line.

**q-values and $\pi_0$.** A gene's $q$-value is the smallest FDR level at which it would be called. BH quietly assumes that every gene could be null. If you can estimate the fraction $\pi_0$ of genes that truly didn't change — from how flat the histogram of large p-values is — the procedure becomes less conservative by that factor.

## The formal version

**Negative binomial.** For normalized counts with mean $\mu$ and dispersion $\alpha \ge 0$,

$$\operatorname{Var}(K) = \mu + \alpha\mu^2.$$

This is the [negative binomial count model](../reference.md#negative-binomial-count-model). *In words: Poisson noise plus a biological component proportional to the mean squared.* $\alpha = 0$ is Poisson; $\sqrt{\alpha}$ is the biological coefficient of variation.

**Log fold change and its standard error** (a Wald test, with $n_A$, $n_B$ replicates and group means $\mu_A$, $\mu_B$):

$$\widehat{\text{LFC}} = \log_2\frac{\hat\mu_B}{\hat\mu_A}, \qquad \text{SE} \approx \frac{1}{\ln 2}\sqrt{\frac{1/\mu_A + \alpha}{n_A} + \frac{1/\mu_B + \alpha}{n_B}}, \qquad z = \frac{\widehat{\text{LFC}}}{\text{SE}}.$$

*In words: each group's log-mean has variance (Poisson part + biological part) divided by the number of replicates.* The biological part $\alpha$ doesn't shrink with depth.

**Benjamini–Hochberg** at level $q$ for $m$ tests with sorted p-values $p_{(1)} \le \cdots \le p_{(m)}$:

$$k = \max\{\,j : p_{(j)} \le jq/m\,\}, \qquad \text{reject } H_{(1)}, \ldots, H_{(k)}.$$

This is the [Benjamini–Hochberg procedure](../reference.md#benjamini-hochberg-procedure). Under independence (or positive dependence) it guarantees $\text{FDR} \le \pi_0\,q \le q$. It's a **step-up** rule: a p-value above its own line can still be rejected if a larger p-value further along falls under the line.

**q-value.** $q_{(j)} = \min_{i \ge j}\ \pi_0\,\dfrac{m\,p_{(i)}}{i}$, with $\pi_0 = 1$ for plain BH. Calling every gene with $q \le 0.1$ reproduces BH at level 0.1. This is the [q-value](../reference.md#q-value).

**Estimating $\pi_0$** (Storey). Null p-values are uniform, so the p-values above a cutoff $\lambda$ (such as 0.5) are mostly nulls:

$$\hat\pi_0 = \frac{\#\{\,p_i > \lambda\,\}}{m\,(1 - \lambda)}.$$

## Picture

![Ten sorted p-values plotted against rank from 1 to 10, with a dashed coral line rising from 0.005 to 0.105, which is j times q over m at q equal to 0.1, and a dotted grey line at 0.01 for Bonferroni. The first six points, 0.0002, 0.004, 0.019, 0.021, 0.030 and 0.041, lie under the dashed line and are filled as BH discoveries. The seventh, 0.12, lies above it, and the last three, 0.36, 0.52 and 0.88, are off the top of the plot. Only the first two points lie below the Bonferroni line.](assets/05-02-fig1.svg)

The dashed line gets more lenient as rank increases. The sixth-smallest p-value only has to beat $6 \times 0.01 = 0.06$, not $0.01$. That's the logic of FDR. If you're already rejecting five hypotheses, adding a sixth at $p = 0.041$ adds a little expected falsehood to a larger pile of discoveries. Bonferroni's flat line at 0.01 stops at two. The gap between the lines is the discoveries an FDR screen keeps and a family-wise screen throws away.

## Worked examples

**Example 1 (mechanical): BH on a gene list.** Ten genes, $q = 0.1$, so the line is $j \times 0.01$:

| rank $j$ | p-value | line $0.01j$ | under the line? | q-value |
|---|---|---|---|---|
| 1 | 0.0002 | 0.01 | yes | 0.002 |
| 2 | 0.004 | 0.02 | yes | 0.020 |
| 3 | 0.019 | 0.03 | yes | 0.053 |
| 4 | 0.021 | 0.04 | yes | 0.053 |
| 5 | 0.030 | 0.05 | yes | 0.060 |
| 6 | 0.041 | 0.06 | **yes (last)** | 0.068 |
| 7 | 0.12 | 0.07 | no | 0.171 |
| 8 | 0.36 | 0.08 | no | 0.450 |
| 9 | 0.52 | 0.09 | no | 0.578 |
| 10 | 0.88 | 0.10 | no | 0.880 |

$k = 6$: **six discoveries.** Bonferroni at family-wise level 0.1 needs $p \le 0.01$ and finds **two**. The q-values agree: exactly six genes have $q \le 0.1$. (Rank 3's q-value is the minimum of $10\,p_{(i)}/i$ over ranks $i \ge 3$: $\min(0.063,\ 0.0525,\ 0.060,\ 0.068,\ \ldots) = 0.053$.)

**Example 2 (why you'd care): Poisson versus negative binomial.** A gene averages 100 normalized counts in control and 150 in treatment, with 3 replicates each. $\widehat{\text{LFC}} = \log_2 1.5 = 0.585$.

*Assuming Poisson* ($\alpha = 0$):

$$\text{SE} = \tfrac{1}{0.693}\sqrt{\tfrac{0.01}{3} + \tfrac{0.00667}{3}} = 1.443 \times 0.0745 = 0.108$$

$$z = 5.44,\ \ p = 5\times10^{-8}.$$

*With biological dispersion* $\alpha = 0.05$ (a biological coefficient of variation of 22 percent, typical for mouse tissue):

$$\text{SE} = 1.443\sqrt{\tfrac{0.01 + 0.05}{3} + \tfrac{0.00667 + 0.05}{3}} = 1.443 \times 0.197 = 0.285$$

$$z = 2.06,\ \ p = 0.040.$$

The Poisson test declares a near-certain change. The honest test calls it borderline, and after multiple-testing correction across 20,000 genes it wouldn't survive. Sequencing ten times deeper only shrinks the $1/\mu$ terms, which were already the small ones: with $\alpha = 0.05$ the SE stays above 0.26. Doubling the replicates halves the variance.

## Watch out

- **You might test** differential expression with a Poisson model or a t-test on raw counts — **but actually** Poisson ignores biological variability and produces floods of false positives, and t-tests on counts misbehave at low counts. Use a negative binomial model with dispersion shared across genes.
- **You might read** $q = 0.05$ as "a 5 percent chance this gene is a false positive" — **but actually** it's a property of the *list*: among all genes called at this threshold, about 5 percent are expected to be false. A gene just inside the threshold is much more likely to be false than one with $q = 10^{-20}$.
- **You might filter** genes *after* seeing which ones are significant, or pick the threshold that gives a nice number — **but actually** that breaks the error control. Independent filtering (for example, dropping genes with too few counts *before* testing, using a criterion unrelated to condition) is fine; anything that peeks at the test result isn't ([econometrics 2.7](../../econometrics/lessons/02-07-multiple-testing-specification-search.md)).

## One-liner

> Model each gene's counts as negative binomial so biological replicate noise enters the standard error, then control the false discovery rate across all genes with Benjamini–Hochberg — replicates, not depth, buy power, and a q-value describes the list, not the gene.

## Problems

**P1 (🟢)** Six genes have p-values 0.001, 0.008, 0.039, 0.041, 0.042 and 0.60. (a) Apply Benjamini–Hochberg at $q = 0.1$ and list the discoveries. (b) Apply Bonferroni at family-wise level 0.1. (c) Give the q-value of the gene with $p = 0.039$.

**P2 (🟡)** Five genes have p-values 0.004, 0.045, 0.047, 0.07 and 0.9. (a) Apply BH at $q = 0.1$, showing each comparison. (b) Which gene is rejected even though its own p-value is above its own line? (c) What would a "step-down" rule that stops at the first failure report, and why is BH's step-up behaviour legitimate?

**P3 (🔴)** A study tests $m = 10{,}000$ genes. 4,600 p-values exceed 0.5. (a) Estimate $\pi_0$. (b) BH at $q = 0.1$ gives 900 discoveries. About how many are expected to be false under the BH guarantee, and about how many under the $\pi_0$-adjusted estimate? (c) A gene has mean normalized counts of about 1,000 in each group and a true fold change of 1.2, with 3 replicates per group and $\alpha = 0.05$. Compute $z$. (d) How many replicates per group would bring $z$ to about 3?

<details>
<summary>Solutions</summary>

**P1** (a) Lines $jq/m = j \times 0.0167$: 0.0167, 0.0333, 0.05, 0.0667, 0.0833, 0.1. Compare: $0.001 \le 0.0167$ yes; $0.008 \le 0.0333$ yes; $0.039 \le 0.05$ yes; $0.041 \le 0.0667$ yes; $0.042 \le 0.0833$ yes; $0.60 \le 0.1$ no. $k = 5$: **the five genes with p = 0.001, 0.008, 0.039, 0.041 and 0.042.**

(b) Bonferroni threshold $0.1/6 = 0.0167$: **only p = 0.001 and 0.008.**

(c) $q_{(3)} = \min_{i \ge 3} 6p_{(i)}/i = \min(0.078,\ 0.0615,\ 0.0504,\ 0.60) = \mathbf{0.050}$.

**P2** (a) Lines $j \times 0.02$: 0.02, 0.04, 0.06, 0.08, 0.10.
- $j = 1$: $0.004 \le 0.02$ yes.
- $j = 2$: $0.045 \le 0.04$ **no**.
- $j = 3$: $0.047 \le 0.06$ yes.
- $j = 4$: $0.07 \le 0.08$ yes.
- $j = 5$: $0.9 \le 0.10$ no.

The largest $j$ under the line is 4: **reject the first four.**

(b) The gene with $p = 0.045$ at rank 2 is above its line (0.04) but is rejected, because rank 4 falls under its line.

(c) A step-down rule stopping at the first failure would reject only **one** gene. BH is step-up by design: its FDR guarantee is proved for the rule "reject all p-values up to the largest $j$ with $p_{(j)} \le jq/m$". Once four hypotheses are being rejected, including the second-ranked one adds a hypothesis whose p-value is smaller than the fourth's, so it can't raise the expected false fraction beyond what the fourth already accounts for.

**P3** (a) $\hat\pi_0 = 4{,}600/(10{,}000 \times 0.5) = \mathbf{0.92}$.

(b) BH bounds the expected false fraction by $q = 0.1$: at most about **90** false. Using $\pi_0$: $\pi_0 q = 0.092$, about **83**. (Equivalently, a $\pi_0$-adjusted procedure could call more genes at the same nominal level.)

(c) $\text{LFC} = \log_2 1.2 = 0.263$. $\text{SE} = 1.443\sqrt{2(0.001 + 0.05)/3} = 1.443\sqrt{0.034} = 1.443 \times 0.184 = 0.266$. $z = \mathbf{0.99}$. At 1,000 counts the Poisson term (0.001) is negligible; almost all of the uncertainty is biological.

(d) $\text{SE} \propto 1/\sqrt{n}$, so $z \propto \sqrt{n}$. From $z = 0.99$ at $n = 3$, reaching $z = 3$ needs $n = 3 \times (3/0.99)^2 \approx \mathbf{28}$ replicates per group. A 20 percent change against 22 percent biological variation is hard to detect, and deeper sequencing wouldn't help at all.

</details>

## Flashback

**From Lesson 4.5 (Imputation & fine-mapping):** Three SNPs in a region have $z = 7.0$, $6.5$ and $3.0$, all with $\text{SE} = 0.03$ and prior variance $W = 0.04$. (a) Compute $r$ and the posterior inclusion probabilities under a single causal variant. (b) Give the 95 percent credible set. (c) Compare with [4.5](04-05-imputation-and-fine-mapping.md)'s Example 2, where $z = 6.0$ and $5.8$ gave a two-SNP set. Why is this set smaller?

<details>
<summary>Solution</summary>

(a) $r = 0.04/(0.04 + 0.0009) = 0.978$. $e^{z^2 r/2}$: $e^{23.96} = 2.55\times10^{10}$, $e^{20.66} = 9.39\times10^{8}$, $e^{4.40} = 81.5$. PIPs: **0.964, 0.036, 0.000000003**.

(b) SNP1 alone has PIP 0.964, at least 0.95: **the credible set is {SNP1}**.

(c) The gap in $z$ is larger (0.5 against 0.2), and the evidence ratio is $\exp\big((z_1^2 - z_2^2)r/2\big)$. The gap between the *squares* also grows with the size of $z$: $49 - 42.25 = 6.75$ here, against $36 - 33.64 = 2.36$ before. A factor of $e^{3.3} \approx 27$ between the top two SNPs concentrates the posterior on one.

</details>

## Connections

- **Backward:** the counts and size factors are [5.1](05-01-rna-seq-quantification-normalization.md)'s; the negative binomial arises from bursty transcription in [systems-biology 4.3](../../systems-biology/lessons/04-03-stochastic-gene-expression.md); p-values are [prob-stat-refresher 4.3](../../prob-stat-refresher/lessons/04-03-hypothesis-testing.md)'s; the FWER derivation, the Bonferroni proof and BH as a procedure are [econometrics 2.7](../../econometrics/lessons/02-07-multiple-testing-specification-search.md)'s.
- **Forward:** differentially expressed genes are the nodes of the co-expression and regulatory networks in [5.5](05-05-biological-network-structure.md) and [5.6](05-06-inferring-networks-from-data.md), where multiple testing returns — a network with $n$ genes has $n(n-1)/2$ candidate edges.
- **Sideways:** the same database-scale multiplicity was already hiding in [1.7](01-07-alignment-statistics-e-values.md)'s E-values, and in the $5\times10^{-8}$ GWAS threshold of [genetics 4.4](../../genetics/lessons/04-04-linkage-disequilibrium-gwas.md), which is Bonferroni for about a million independent tests.
