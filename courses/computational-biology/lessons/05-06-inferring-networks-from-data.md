# Computational Biology · Lesson 5.6: Inferring networks from data

> ⏱ ~15 min · Module 5: Expression, structure & networks · Builds on: [5.1](05-01-rna-seq-quantification-normalization.md) (expression matrices), [5.2](05-02-differential-expression-multiple-testing.md) (multiple testing), [5.5](05-05-biological-network-structure.md) (network structure), [information-theory 1.5](../../information-theory/lessons/01-05-data-processing-inequality.md) (data-processing inequality) · Unlocks: the end of the course; [systems-biology](../../systems-biology/syllabus.md) for dynamics on the networks

## Why this matters

Measured interaction networks cover only a fraction of what cells do, and only in the conditions tested. The cheaper, more common route is to **infer** a network from data you already have: expression of 20,000 genes across tumours, tissues, time points or single cells. Genes whose expression moves together are linked, and the resulting co-expression or regulatory network is used to propose functions for uncharacterized genes and to find regulators of disease programs.

It's also the easiest place in this course to fool yourself. Correlation connects genes that share a regulator, genes linked through a chain, and genes that merely vary with a batch. With 20,000 genes there are 200 million candidate edges. This lesson covers the three tools that separate **direct** relationships from coincidental ones — partial correlation, the data-processing inequality, and honest multiple testing — and the one thing none of them can give you: causal direction.

## The idea

**Correlation networks.** Compute the correlation between every pair of genes across samples and draw an edge when it's strong. Fast and interpretable, but full of **indirect edges**. If transcription factor X activates Y and Y activates Z, then X and Z correlate even though X never touches Z's promoter.

**Partial correlation asks: what's left after accounting for the others?** Remove the part of X and of Z that is explained linearly by Y, and correlate the residuals. If the X–Z relationship runs entirely through Y, nothing is left. Across all genes at once, partial correlations come from the **inverse** of the covariance matrix (the precision matrix). A zero entry means conditional independence — a missing edge in a Gaussian graphical model. With more genes than samples the covariance matrix can't be inverted, so methods like the graphical lasso estimate a sparse inverse directly.

**Mutual information catches non-linear dependence**, and the **data-processing inequality** ([information-theory 1.5](../../information-theory/lessons/01-05-data-processing-inequality.md)) gives a pruning rule. For a chain X → Y → Z, information can only degrade along the chain: $I(X;Z) \le \min(I(X;Y), I(Y;Z))$. So in every triangle of dependent genes, the **weakest** edge is the candidate indirect one. ARACNE removes it.

**Guilt by association.** Once you have a network, a gene of unknown function whose neighbours are all DNA-repair genes is probably involved in DNA repair. It's the most common use of inferred networks, and it inherits every false edge.

**What no correlation can tell you: direction.** "X and Y correlate" is equally consistent with X → Y, Y → X and a hidden common cause. Orienting edges needs intervention (knockouts, perturbation screens), time ordering, or genetic variation used as a natural experiment.

## The formal version

**Partial correlation** of $X$ and $Z$ given $Y$, from pairwise correlations $r$:

$$r_{XZ\cdot Y} = \frac{r_{XZ} - r_{XY}\,r_{YZ}}{\sqrt{(1 - r_{XY}^2)(1 - r_{YZ}^2)}}.$$

This is [partial correlation](../reference.md#partial-correlation). *In words: subtract the correlation that the path through $Y$ would produce, then rescale.* For a linear chain $X \to Y \to Z$ with independent noise, $r_{XZ} = r_{XY} r_{YZ}$ exactly, so $r_{XZ\cdot Y} = 0$.

**All at once: the precision matrix.** With correlation matrix $R$ and $\Omega = R^{-1}$,

$$r_{ij\cdot\text{rest}} = -\frac{\Omega_{ij}}{\sqrt{\Omega_{ii}\,\Omega_{jj}}}.$$

For jointly Gaussian variables, $\Omega_{ij} = 0$ exactly when $i$ and $j$ are independent given all other variables. The graph of non-zero $\Omega_{ij}$ is the **Gaussian graphical model**. With $p$ genes and $n < p$ samples, $R$ is singular, and the graphical lasso estimates a sparse $\Omega$ by penalizing $\sum_{i \ne j}|\Omega_{ij}|$.

**Data-processing inequality.** If $X \to Y \to Z$ is a Markov chain, then $I(X;Z) \le I(X;Y)$ and $I(X;Z) \le I(Y;Z)$. **ARACNE** estimates mutual information for every pair, removes pairs below a significance threshold, and in each remaining triangle deletes the edge with the smallest MI.

**How many edges are you testing?** With $p$ genes there are $p(p-1)/2$ candidate edges. Under no true association, the sample correlation of $n$ independent samples satisfies $t = r\sqrt{n-2}/\sqrt{1-r^2} \sim t_{n-2}$. Any edge threshold must be judged against that count ([5.2](05-02-differential-expression-multiple-testing.md)).

## Picture

![Two three-gene networks for a regulatory chain in which X regulates Y and Y regulates Z. Left, the correlation network at threshold 0.5 has edges X-Y with r 0.80, Y-Z with r 0.70, and a dashed coral edge X-Z with r 0.56, noted as exactly 0.80 times 0.70. Right, the partial correlation network keeps X-Y at 0.69 and Y-Z at 0.51, and drops X-Z, whose partial correlation given Y is zero.](assets/05-06-fig1.svg)

The left network looks like a triangle: three genes all co-regulated. The numbers give it away: $0.56 = 0.80 \times 0.70$, exactly what a chain through Y predicts for X and Z. Conditioning on Y removes the X–Z edge and reveals the chain. The remaining partial correlations are smaller than the raw ones, because each of those edges also shared some variance with the third gene. Note that the partial network still doesn't say whether the chain runs X → Y → Z or Z → Y → X, or whether Y regulates both.

## Worked examples

**Example 1 (mechanical): is the X–Z edge direct?** Across 60 tumours, three genes have correlations $r_{XY} = 0.80$, $r_{YZ} = 0.70$ and $r_{XZ} = 0.56$.

$$r_{XZ\cdot Y} = \frac{0.56 - 0.80 \times 0.70}{\sqrt{(1 - 0.64)(1 - 0.49)}} = \frac{0.56 - 0.56}{\sqrt{0.36 \times 0.51}} = \mathbf{0}.$$

$$r_{XY\cdot Z} = \frac{0.80 - 0.56 \times 0.70}{\sqrt{(1 - 0.3136)(1 - 0.49)}} = \frac{0.408}{\sqrt{0.3501}} = \frac{0.408}{0.592} = \mathbf{0.69}.$$

$$r_{YZ\cdot X} = \frac{0.70 - 0.80 \times 0.56}{\sqrt{(1 - 0.64)(1 - 0.3136)}} = \frac{0.252}{\sqrt{0.2471}} = \frac{0.252}{0.497} = \mathbf{0.51}.$$

X–Z vanishes; X–Y and Y–Z survive. Inverting the $3 \times 3$ correlation matrix and applying $-\Omega_{ij}/\sqrt{\Omega_{ii}\Omega_{jj}}$ gives the same three numbers. A correlation network would report a triangle; the conditional-independence network reports a chain centred on Y.

**Example 2 (why you'd care): how many edges are noise?** A study has $n = 20$ samples and $p = 1{,}000$ genes, and draws an edge wherever $|r| > 0.5$.

*Null distribution.* $t = 0.5\sqrt{18}/\sqrt{0.75} = 2.12/0.866 = 2.45$, and with 18 degrees of freedom, $P(|r| > 0.5) = 0.025$ for a pair with no true association.

*Candidate edges:* $1{,}000 \times 999/2 = 499{,}500$.

*Expected false edges:* $499{,}500 \times 0.025 \approx \mathbf{12{,}400}$, even if **no gene truly co-varies with any other**. At average degree $2 \times 12{,}400/1{,}000 \approx 25$, the resulting network has hubs, modules and high clustering, all built from sampling noise and whatever batch effects correlate genes. With 20 samples, a threshold that controls false discoveries must be far higher. Better, collect more samples before trusting any network statistic from [5.5](05-05-biological-network-structure.md).

## Watch out

- **You might read** a co-expression edge as regulation — **but actually** correlation also arises from common regulators, chains, cell-type mixture (a tissue sample with more immune cells raises all immune genes together) and batch effects. Correct for known confounders and cell composition before inferring edges.
- **You might compute** partial correlations by inverting the sample covariance with fewer samples than genes — **but actually** that matrix is singular and the inverse doesn't exist, or is numerically meaningless when $n$ is barely above $p$. Use regularized estimators (graphical lasso, shrinkage) and report how the network changes with the penalty.
- **You might orient** an edge from a correlation, or from which gene is a known transcription factor — **but actually** association is symmetric. Known TF status is a prior, not evidence about this edge. Direction needs perturbation, time-course or genetic-anchor data.

## One-liner

> Correlation networks draw edges for chains, shared regulators and noise; partial correlation (the precision matrix) and the data-processing inequality remove indirect edges, multiple testing sets honest thresholds, and only interventions can say which way an edge points.

## Problems

**P1 (🟢)** Three genes have $r_{XY} = 0.90$, $r_{YZ} = 0.70$, $r_{XZ} = 0.65$. (a) Compute $r_{XZ\cdot Y}$, $r_{XY\cdot Z}$ and $r_{YZ\cdot X}$. (b) Which edges would you keep, and what structure do they suggest?

**P2 (🟡)** Mutual information estimates (bits) for four genes: $I(A;B) = 0.62$, $I(B;C) = 0.48$, $I(A;C) = 0.31$, $I(C;D) = 0.55$, $I(B;D) = 0.12$, $I(A;D) = 0.05$. Suppose MI below 0.10 isn't significant. (a) Draw the significant network as an edge list. (b) Apply ARACNE's data-processing-inequality pruning to every triangle. (c) Give the final network. (d) Why can't pruning tell whether the true chain is A → B → C or C → B → A?

**P3 (🔴)** An experiment profiles $p = 2{,}000$ genes in $n = 50$ samples. (a) How many candidate edges are there? (b) What Bonferroni significance level per edge controls the family-wise error at 0.05? (c) The corresponding critical $|t|$ with 48 degrees of freedom is about 6.65. Convert it to a critical $|r|$ using $r = t/\sqrt{t^2 + \text{df}}$. (d) What does (c) imply about detecting moderate correlations such as $r = 0.4$, and what would you do instead?

<details>
<summary>Solutions</summary>

**P1** (a)
$r_{XZ\cdot Y} = \dfrac{0.65 - 0.90 \times 0.70}{\sqrt{(1 - 0.81)(1 - 0.49)}} = \dfrac{0.02}{\sqrt{0.0969}} = \dfrac{0.02}{0.311} = \mathbf{0.064}$.

$r_{XY\cdot Z} = \dfrac{0.90 - 0.65 \times 0.70}{\sqrt{(1 - 0.4225)(1 - 0.49)}} = \dfrac{0.445}{\sqrt{0.2945}} = \dfrac{0.445}{0.543} = \mathbf{0.82}$.

$r_{YZ\cdot X} = \dfrac{0.70 - 0.90 \times 0.65}{\sqrt{(1 - 0.81)(1 - 0.4225)}} = \dfrac{0.115}{\sqrt{0.1097}} = \dfrac{0.115}{0.331} = \mathbf{0.35}$.

(b) Keep **X–Y** (0.82) and **Y–Z** (0.35). Drop **X–Z** (0.06, near zero). The structure is a **chain through Y**: X and Z are connected only via Y. Whether 0.064 is truly zero depends on sample size, but it's an order of magnitude below the raw 0.65.

**P2** (a) Significant edges (MI at least 0.10): A–B 0.62, B–C 0.48, A–C 0.31, C–D 0.55, B–D 0.12. (A–D at 0.05 is dropped.)

(b) Triangles: **A–B–C** has edges 0.62, 0.48, 0.31; the weakest is A–C (0.31), **removed**. **B–C–D** has edges 0.48, 0.55, 0.12; the weakest is B–D (0.12), **removed**. (A–B–D isn't a triangle, since A–D was never significant.)

(c) Final edges: **A–B, B–C, C–D**, a chain A–B–C–D.

(d) Mutual information is symmetric, and the data-processing inequality holds in both directions of a chain. A → B → C and C → B → A generate the same pattern of pairwise dependence, and so does B being a common cause of both A and C. Distinguishing them needs intervention or time order.

**P3** (a) $2{,}000 \times 1{,}999/2 = \mathbf{1{,}999{,}000}$.

(b) $0.05/1{,}999{,}000 = \mathbf{2.5\times10^{-8}}$ per edge.

(c) $|r| = 6.65/\sqrt{6.65^2 + 48} = 6.65/\sqrt{44.2 + 48} = 6.65/9.60 = \mathbf{0.69}$.

(d) Only correlations stronger than about 0.69 survive family-wise control with 50 samples, so a genuine $r = 0.4$ relationship is **undetectable** edge by edge. Better options: control the FDR rather than the family-wise error; reduce the number of tests with prior structure (test only transcription factor–target pairs, or genes within a pathway); summarize genes into modules first and test fewer, stronger module-level associations; or collect more samples, since the critical $|r|$ shrinks roughly like $1/\sqrt{n}$.

</details>

## Flashback

**From Lesson 5.4 (Structure & the AlphaFold era):** Six homologs have residues D D E E K K at column $i$ and K K R R E E at column $j$. (a) Compute $\text{MI}_{ij}$ in bits. (b) What is the largest MI any pair of columns with three equally frequent residues could have? (c) If column $j$ read K R R K E E instead, recompute MI and say what changed.

<details>
<summary>Solution</summary>

(a) The pairs (D,K), (E,R), (K,E) each occur twice: joint frequency $\tfrac13$ each. Each column's marginals are $\tfrac13$ for three residues. $\text{MI} = 3 \times \tfrac13\log_2\frac{1/3}{(1/3)(1/3)} = \log_2 3 = \mathbf{1.585}$ bits.

(b) $\log_2 3 = 1.585$ bits, the entropy of a column with three equally likely residues. Column $i$ determining column $j$ completely attains it.

(c) Pairs: (D,K), (D,R), (E,R), (E,K), (K,E) twice. Column $j$'s marginals are still $\tfrac13$ each. Contributions: (K,E) gives $\tfrac13\log_2 3 = 0.528$; each of the four single pairs gives $\tfrac16\log_2\frac{1/6}{1/9} = \tfrac16\log_2 1.5 = 0.0975$, four of them 0.390. Total **0.918 bits**. Knowing $i$ = K still pins $j$ = E, but D and E at $i$ no longer say whether $j$ is K or R, so the coupling has weakened.

</details>

## Connections

- **Backward:** the expression matrix and its normalization are [5.1](05-01-rna-seq-quantification-normalization.md)'s; significance per edge and across edges is [5.2](05-02-differential-expression-multiple-testing.md)'s; degree, clustering and modularity of the inferred graph are [5.5](05-05-biological-network-structure.md)'s; the data-processing inequality is [information-theory 1.5](../../information-theory/lessons/01-05-data-processing-inequality.md)'s; direct-versus-indirect coupling is [5.4](05-04-protein-structure-prediction-alphafold.md)'s coevolution problem in a new setting.
- **Forward:** dynamic models on inferred regulatory networks — feedback, bistability, oscillation — are [systems-biology](../../systems-biology/syllabus.md)'s; causal orientation from genetic variation connects to fine-mapping in [4.5](04-05-imputation-and-fine-mapping.md) and to the identification logic of [econometrics 3.6](../../econometrics/lessons/03-06-instrumental-variables.md).
- **Sideways:** partial correlation is the coefficient in a regression of one variable on the others, and "controlling for Y" is regression anatomy from [econometrics 3.3](../../econometrics/lessons/03-03-regression-anatomy-good-and-bad-controls.md), including its warning that conditioning on the wrong variable can *create* dependence.

## Closing the course

You started with strings and a question: when does similarity mean shared history? The course answered it in layers, each built from a small set of reusable ideas:

- **Dynamic programming on the right subproblem** — prefixes for alignment ([1.3](01-03-needleman-wunsch-global-alignment.md)–[1.5](01-05-affine-gaps-gotoh.md)), trees for parsimony and likelihood ([2.4](02-04-parsimony-fitch-sankoff.md), [2.6](02-06-tree-likelihood-felsenstein-pruning.md)), chains for HMMs ([3.2](03-02-viterbi-decoding.md), [3.3](03-03-forward-backward-posterior-decoding.md)), intervals for RNA ([5.3](05-03-rna-secondary-structure-nussinov.md)). Max-plus gives the best explanation; sum-product gives the probability of all explanations.
- **Log-odds against a null** — substitution matrices ([1.2](01-02-substitution-matrices-log-odds.md)), E-values ([1.7](01-07-alignment-statistics-e-values.md)), CpG detection ([3.1](03-01-markov-chains-to-hmms.md)), profile scores ([3.5](03-05-profile-hmms.md)), genotype and fine-mapping posteriors ([4.4](04-04-variant-calling-genotype-likelihoods.md), [4.5](04-05-imputation-and-fine-mapping.md)). Every score in the field is evidence relative to something, and the something is where the mistakes hide.
- **Indexes and graphs that change the problem's cost** — seeds ([1.6](01-06-blast-seeded-heuristic-search.md)), the Burrows–Wheeler transform ([4.2](04-02-read-mapping-bwt-fm-index.md)), de Bruijn graphs ([4.3](04-03-genome-assembly-de-bruijn.md)).
- **Honesty about scale** — database size, genome-wide tests, gene-by-gene tests, pairwise edges: the more you look, the more chance finds ([5.2](05-02-differential-expression-multiple-testing.md), and this lesson).

With the checklist done, the natural next steps in this library are [systems-biology](../../systems-biology/syllabus.md) for dynamics on the networks, [deep-learning](../../deep-learning/syllabus.md) for the architectures now replacing hand-built models, and [evolution-ecology](../../evolution-ecology/syllabus.md) for the population processes that generate the sequence variation every lesson here has been reading.
