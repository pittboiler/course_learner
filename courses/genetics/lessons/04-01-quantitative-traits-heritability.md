# Genetics · Lesson 4.1: Quantitative traits & heritability

> ⏱ ~15 min · Module 4: Quantitative Genetics, Populations & Genomes · Builds on: [1.3](01-03-epistasis-pleiotropy.md), [3.6](03-06-reading-editing-genes.md) · Unlocks: 4.2 (response to selection & QTL)

## Why this matters

Everything in Modules 1 to 3 dealt with traits that come in categories: purple or white, affected or not, band present or absent. Almost nothing that actually matters about an organism is like that. Height, yield, milk production, blood pressure, and disease susceptibility are **continuous**, and Mendel's peas gave no obvious purchase on them.

This was a genuine crisis in genetics around 1900 — the biometricians measured continuous variation and saw no Mendelian ratios; the Mendelians counted ratios and dismissed continuous variation as environmental noise. Fisher resolved it in 1918 by showing that **many Mendelian genes of small effect, plus environmental variation, produce exactly the continuous distributions the biometricians measured.** The reconciliation created quantitative genetics, and it is the foundation of plant and animal breeding, of the heritability estimates that generate so much public argument, and of everything in [4.4](04-04-linkage-disequilibrium-gwas.md).

## The idea

**Many genes of small effect look continuous.** Suppose $n$ loci each contribute additively, and each has a "plus" and a "minus" allele. The number of plus alleles an individual carries is binomial, and by the central limit theorem a binomial with large $n$ is approximately normal:

| Loci | Phenotype classes | Distribution |
|---|---|---|
| 1 | 3 | clearly discrete |
| 2 | 5 | discrete, but ratios look odd ($1{:}4{:}6{:}4{:}1$) |
| 5 | 11 | nearly smooth |
| 20+ | 41+ | **indistinguishable from continuous** |

**Add environmental variation and even a two-locus trait looks continuous**, because the discrete genotype classes overlap. *In words: continuous variation is not evidence against particulate inheritance — it is what particulate inheritance looks like when there are many particles.*

**Partition the variance.** The central move of quantitative genetics is to stop tracking genotypes and start partitioning **variance**:

$$V_P = V_G + V_E$$

*In words: total phenotypic variation is genetic variation plus environmental variation.* And $V_G$ splits further:

$$V_G = V_A + V_D + V_I$$

- $V_A$ — **additive**: the part that behaves like a sum of allele effects. **This is the part that is transmitted to offspring**, because parents pass alleles, not genotypes.
- $V_D$ — **dominance**: interaction between alleles at a locus. Not transmitted, because the specific pairing is broken up by meiosis.
- $V_I$ — **epistatic (interaction)**: between loci ([1.3](01-03-epistasis-pleiotropy.md)). Also largely not transmitted.

**Two heritabilities, and confusing them is the classic error.**

$$H^{2} = \frac{V_G}{V_P} \quad \textbf{broad-sense} \qquad\qquad h^{2} = \frac{V_A}{V_P} \quad \textbf{narrow-sense}$$

*In words: $H^2$ is how much of the variation is genetic at all; $h^2$ is how much of it is passed on and therefore how much a breeder can act on.* **$h^2$ is the one that predicts anything**, and it is always the smaller.

**And heritability is a property of a population, not of a trait.** This is the point most often mangled in public discussion:

- It is a **ratio**, so it changes if either numerator or denominator changes. Standardize the environment and $V_E$ falls, so $h^2$ *rises* — with no change in genetics whatsoever.
- It says **nothing about an individual.** "Height is 80 percent heritable" does not mean 80 percent of your height came from your genes.
- It says **nothing about between-group differences.** A trait can be highly heritable within each of two groups while the difference between them is entirely environmental.

## The formal version

**Why only $V_A$ is transmitted.** A parent passes one allele per locus, not a genotype. Dominance is a property of the *pair*, and the pair is dissolved at meiosis and re-formed at random with the other parent's allele. So the predictable, transmissible component of a parent's phenotypic deviation is the sum of the average effects of the alleles they carry — which is exactly what $V_A$ measures.

$$\textbf{Parents transmit alleles; dominance and epistasis are properties of combinations, and combinations are not transmitted.}$$

**Estimating $h^2$ from relatives.** Two relatives share a predictable fraction of their additive genetic variance, so the covariance between them is

$$\mathrm{Cov}(\text{relatives}) = r\,V_A + \ldots$$

where $r$ is the coefficient of relationship ([4.3](04-03-inbreeding-relatedness-structure.md)):

| Relationship | $r$ | Expected correlation if $h^2 = 1$ |
|---|---|---|
| Identical twins | 1 | 1.00 |
| Parent–offspring | $\tfrac12$ | 0.50 |
| Full siblings | $\tfrac12$ | 0.50 |
| Half siblings | $\tfrac14$ | 0.25 |
| First cousins | $\tfrac18$ | 0.125 |

**Parent–offspring regression.** Plot offspring value against **midparent** value (the average of the two parents). The slope of that regression *is* $h^2$:

$$\boxed{\;b_{\text{offspring, midparent}} = h^{2}\;}$$

*In words: regress offspring on midparent and read the narrow-sense heritability straight off the slope.* This is the cleanest estimator and the reason midparent is used rather than a single parent (for a single parent the slope is $h^2/2$).

**Twin studies, and Falconer's formula.** Identical (MZ) twins share all their genes; fraternal (DZ) twins share half on average. If both types share their environment equally:

$$H^{2} \approx 2\left(r_{MZ} - r_{DZ}\right)$$

*In words: the excess similarity of identical over fraternal twins, doubled, estimates the genetic contribution.* And the shared-environment contribution is

$$c^{2} = 2r_{DZ} - r_{MZ}, \qquad e^{2} = 1 - r_{MZ}.$$

**The equal-environments assumption is the weak point** and is where twin studies are legitimately criticized: identical twins may be treated more alike than fraternal ones, which inflates $r_{MZ}$ and therefore $H^2$.

**Threshold traits — how a continuous liability produces a categorical disease.** Many conditions are all-or-none in expression (cleft palate, pyloric stenosis, type 2 diabetes) but polygenic in cause. Model an underlying continuous **liability** — the summed genetic and environmental risk — with a **threshold** above which the phenotype appears:

$$\text{affected} \iff \text{liability} > T$$

This single idea explains several observations that look Mendelian and are not:

- **Recurrence risk rises with the number of affected relatives**, because affected relatives are evidence the family's liability distribution is shifted upward.
- **Recurrence risk is higher when the affected proband is of the less-frequently-affected sex.** If a trait is commoner in males, the threshold for females is effectively higher — so an affected female must carry an unusually high liability, and her relatives inherit more of it. This is the **Carter effect**, and it is a real, measurable, and thoroughly counterintuitive prediction.
- **Recurrence risk falls off much faster than $\tfrac12$ per degree of relationship** — roughly as the square root of the population prevalence — which is why polygenic disease does not look Mendelian in pedigrees.

## Picture

![Left: histograms for a trait controlled by one, two, five and twenty additive loci, showing the distribution becoming smooth and normal as loci are added, with a note that adding environmental variance blurs even the two-locus case into continuity. Centre: a variance pie divided into additive, dominance, interaction and environmental components, with the additive slice highlighted as the only part transmitted to offspring. Right: a scatter of offspring value against midparent value with a fitted regression line whose slope is labelled as the narrow-sense heritability, and beneath it a liability-threshold diagram showing a normal liability distribution with a threshold and the shaded affected tail.](assets/04-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — partition variance and compute both heritabilities).** For a trait in a population: $V_P = 100$, $V_E = 40$, $V_D = 15$, $V_I = 5$. (a) Find $V_G$, $V_A$, $H^2$ and $h^2$. (b) The population is moved to a completely uniform environment so that $V_E = 0$. Recompute both heritabilities. (c) Comment.

(a) $$V_G = V_P - V_E = 100 - 40 = 60.$$
$$V_A = V_G - V_D - V_I = 60 - 15 - 5 = 40.$$
$$H^{2} = \frac{60}{100} = \mathbf{0.60}, \qquad h^{2} = \frac{40}{100} = \mathbf{0.40}.$$

(b) With $V_E = 0$, $V_P = V_G = 60$:

$$H^{2} = \frac{60}{60} = \mathbf{1.00}, \qquad h^{2} = \frac{40}{60} = \mathbf{0.67}.$$

(c) **The genetics did not change at all** — $V_A$, $V_D$ and $V_I$ are exactly what they were. Only the environment changed, and both heritabilities rose substantially.

**This is the single most important property of heritability and the source of most misuse of it.** A heritability estimate is a statement about a *population in an environment*, and the same genes in a different environment give a different number. A trait can be 90 percent heritable in a homogeneous population and 30 percent heritable in a heterogeneous one, with identical underlying biology.

The corollary is worth stating too: **high heritability does not mean the trait is hard to change by environmental means.** Height in wealthy countries is highly heritable *and* rose by 10 cm over the twentieth century through nutrition. Heritability describes the sources of *existing variation*; it does not bound what a *new* intervention can do.

**Example 2 (why you'd care — reading a twin study honestly).** For a behavioural trait, identical-twin correlation is $r_{MZ} = 0.72$ and fraternal-twin correlation is $r_{DZ} = 0.44$. (a) Estimate $H^2$, $c^2$ and $e^2$. (b) Check the estimates for internal consistency. (c) State two assumptions the estimate depends on and how each could fail.

(a) $$H^{2} = 2(r_{MZ} - r_{DZ}) = 2(0.72 - 0.44) = \mathbf{0.56}.$$
$$c^{2} = 2r_{DZ} - r_{MZ} = 2(0.44) - 0.72 = 0.88 - 0.72 = \mathbf{0.16}.$$
$$e^{2} = 1 - r_{MZ} = 1 - 0.72 = \mathbf{0.28}.$$

(b) The three should sum to 1:

$$0.56 + 0.16 + 0.28 = 1.00 \ \checkmark$$

Both $c^2$ and $H^2$ are non-negative, which is also a real check — **twin data frequently give a *negative* $c^2$**, which happens whenever $r_{MZ} > 2 r_{DZ}$, and is a signal that the additive model is wrong. The usual culprit is **dominance or epistasis**: non-additive genetic effects are fully shared by MZ twins and only partly shared by DZ twins, so they inflate $r_{MZ}$ relative to $2r_{DZ}$ and push the apparent $c^2$ below zero. A negative $c^2$ is therefore not a data error but evidence about genetic architecture.

(c) Two assumptions, each with a real failure mode:

**1. Equal environments.** The model assumes MZ and DZ twins share their environments to the same degree. If identical twins are dressed alike, kept in the same class, and treated as a unit more than fraternal twins are, then $r_{MZ}$ is inflated by *environment*, and the excess is misattributed to genes.

*How it fails:* $H^2$ is overestimated. Tests of this assumption include comparing MZ twins reared apart, comparing DZ same-sex with DZ opposite-sex pairs, and using twins whose zygosity was mistaken by their parents — all of which suggest the violation is real but modest for most traits.

**2. No gene–environment correlation or interaction.** The model assumes $V_P = V_G + V_E$ with no covariance term. But children partly **select and evoke** their environments — a child with a genetic propensity for reading is given more books, which raises the trait further.

*How it fails:* the environmental amplification is counted as genetic, since it tracks genotype. The full model is $V_P = V_G + V_E + 2\,\mathrm{Cov}(G,E) + V_{G\times E}$, and twin designs cannot separate $\mathrm{Cov}(G,E)$ from $V_G$.

**The honest summary of a twin study is therefore narrow:** "in this population, in this environment, roughly 56 percent of the observed variation tracks genetic similarity, under assumptions that are approximately but not exactly true." It is not "this trait is 56 percent genetic," and it says nothing about any individual or about differences between populations.

## Watch out

- **You might treat heritability as a property of the trait.** It is a property of a **population in an environment**, and it changes when either does. The same trait has different heritabilities in different populations with identical genetics.
- **You might confuse $H^2$ with $h^2$.** $H^2$ includes dominance and epistasis; $h^2$ does not. Only $h^2$ predicts response to selection ([4.2](04-02-response-to-selection-qtl.md)), because only additive effects are transmitted.
- **You might read high heritability as "hard to change."** These are unrelated. Phenylketonuria is essentially 100 percent genetic and completely preventable by diet; height is highly heritable and rose sharply with nutrition.
- **You might apply a within-group heritability to a between-group difference.** This does not follow, at all. Two genetically identical seed lots grown in rich and poor soil give high heritability *within* each pot and a between-pot difference that is entirely environmental.
- **You might expect a continuous distribution to mean non-Mendelian inheritance.** Fisher's whole point was the opposite: many Mendelian loci of small effect **produce** a normal distribution, by the central limit theorem.

## One-liner

> Fisher's reconciliation: many Mendelian genes of small effect plus environmental noise gives exactly a normal distribution — and of the genetic variance, only the additive part is transmitted, which is why $h^2$ and not $H^2$ predicts anything.

## Problems

**P1 (🟢)** A trait has $V_P = 200$, $V_A = 60$, $V_D = 20$, $V_I = 10$. (a) Find $V_G$ and $V_E$. (b) Compute $H^2$ and $h^2$. (c) Which would a breeder use, and why?

**P2 (🟡)** A twin study of a metabolic trait finds $r_{MZ} = 0.80$, $r_{DZ} = 0.30$. (a) Estimate $H^2$, $c^2$ and $e^2$. (b) One of these is negative — interpret it rather than dismissing it. (c) Propose a modified model that accommodates the result, and say what it implies about the trait's genetic architecture.

**P3 (🔴, bridges to 4.4 and to clinical genetics)** A congenital malformation has a population prevalence of 1 in 1000 and is three times commoner in males than in females. It is a threshold trait on a polygenic liability. (a) Explain, using the liability-threshold model, why the recurrence risk for siblings of an affected **female** proband is higher than for siblings of an affected **male** proband. (b) Explain why the recurrence risk for siblings is roughly $\sqrt{\text{prevalence}}$ rather than a Mendelian fraction, and compute it for this trait. (c) Compare the resulting number to the Mendelian expectations for an autosomal dominant and an autosomal recessive condition, and say what an empirical recurrence risk of 3 percent would tell you.

<details>
<summary>Solutions</summary>

**P1 (a)** $$V_G = V_A + V_D + V_I = 60 + 20 + 10 = \mathbf{90}.$$
$$V_E = V_P - V_G = 200 - 90 = \mathbf{110}.$$

**(b)** $$H^{2} = \frac{90}{200} = \mathbf{0.45}, \qquad h^{2} = \frac{60}{200} = \mathbf{0.30}.$$

**(c)** The breeder uses **$h^2 = 0.30$**. Selection works by choosing parents and letting them transmit alleles; dominance and epistatic effects depend on *combinations* that are broken up by meiosis and reassembled at random. Only the additive component is predictably passed on, so only $h^2$ predicts the response to selection ([4.2](04-02-response-to-selection-qtl.md)). Using $H^2 = 0.45$ would overpredict the gain by 50 percent.

**P2 (a)** $$H^{2} = 2(0.80 - 0.30) = \mathbf{1.00}.$$
$$c^{2} = 2(0.30) - 0.80 = 0.60 - 0.80 = \mathbf{-0.20}.$$
$$e^{2} = 1 - 0.80 = \mathbf{0.20}.$$

**(b)** A negative shared-environment component is **impossible as a variance**, so the model is misspecified rather than the data being wrong. The signature — $r_{MZ}$ more than *twice* $r_{DZ}$ — is diagnostic.

The cause is **non-additive genetic variance**. MZ twins are genetically identical, so they share **all** of $V_A$, $V_D$ and $V_I$. DZ twins share half of $V_A$ but only a quarter of $V_D$ and less of $V_I$. So dominance and epistasis raise $r_{MZ}$ much more than $r_{DZ}$, and Falconer's formula — which assumes purely additive genetics — absorbs the excess as a negative $c^2$.

$$r_{MZ} = h^{2} + d^{2} + c^{2}, \qquad r_{DZ} = \tfrac12 h^{2} + \tfrac14 d^{2} + c^{2}$$

**(c)** Fit an **ADE model** (additive, dominance, unique environment) instead of ACE, dropping $c^2$ to zero since the data give no evidence for it:

$$r_{MZ} = h^{2} + d^{2} = 0.80, \qquad r_{DZ} = \tfrac12 h^{2} + \tfrac14 d^{2} = 0.30 .$$

Solve: from the second, $2h^2 + d^2 = 1.20$. Subtracting the first: $h^2 = 0.40$, and then $d^2 = 0.40$.

$$h^{2} = \mathbf{0.40}, \qquad d^{2} = \mathbf{0.40}, \qquad e^{2} = \mathbf{0.20}.$$

**Implication for architecture:** half the genetic variance is **non-additive** — dominance, and by extension possibly epistasis, is substantial. Practical consequences:

- **Selection response will be much weaker than $H^2 = 1.00$ suggests**, because only $h^2 = 0.40$ is transmitted ([4.2](04-02-response-to-selection-qtl.md)).
- **A GWAS will find less than the twin study implies**, since GWAS with additive models captures $V_A$ and largely misses $V_D$ — one documented contributor to the "missing heritability" problem ([4.4](04-04-linkage-disequilibrium-gwas.md)).
- **Sibling correlations will exceed parent–offspring correlations**, since siblings share dominance variance and parents and offspring do not. That is a testable prediction and a good way to confirm the model.

**P3 (a)** The trait is commoner in males, so on the liability scale **the threshold for females sits further out in the tail** — a female needs more accumulated liability than a male to be affected.

Therefore an **affected female is, on average, a more extreme case**: she must have crossed a higher threshold, so she carries more risk alleles and comes from a family whose liability distribution is shifted further up. Her relatives inherit half of that above-average liability, so their risk is higher.

$$\textbf{Affected member of the less-susceptible sex} \Rightarrow \textbf{more extreme genotype} \Rightarrow \textbf{higher recurrence risk in relatives.}$$

This is the **Carter effect**, and it is genuinely counterintuitive — the *rarer* presentation predicts the *higher* familial risk. It is well documented in pyloric stenosis (commoner in males; siblings of affected girls are at higher risk than siblings of affected boys) and is one of the strongest confirmations of the liability-threshold model, because no single-gene model predicts it.

**(b)** For a polygenic threshold trait, a first-degree relative shares half the additive liability, so their liability distribution is shifted halfway toward the proband's. Working through the normal-tail arithmetic gives the widely-used approximation

$$\text{sibling recurrence risk} \approx \sqrt{\text{population prevalence}} .$$

For prevalence $= 10^{-3}$:

$$\sqrt{10^{-3}} = \mathbf{0.032} \approx \mathbf{3\ \text{percent}}.$$

**Why a square root rather than a Mendelian fraction:** the risk is not "inherit an allele or not" but "how far up the liability distribution does the family sit." Sharing half the liability moves a relative partway into the tail, and because the tail is exponentially thin, a partial shift produces a large *relative* risk while remaining a small *absolute* one. The relative risk here is $0.032/0.001 = 32$-fold, and yet 97 percent of siblings are unaffected.

**(c)**

| Model | Sibling recurrence risk |
|---|---|
| Autosomal dominant (affected parent) | **50 percent** |
| Autosomal recessive (carrier parents) | **25 percent** |
| **Polygenic threshold, prevalence $10^{-3}$** | **~3 percent** |

An observed recurrence risk of **3 percent** is roughly 30 times the population risk — so the condition is clearly familial and clearly not sporadic — while being nowhere near either Mendelian expectation.

**That combination is the signature of polygenic inheritance**, and it is what a clinical geneticist uses the number for: it says the family is at genuinely raised risk, that no single causative gene is likely to be found by testing one locus, and that the counselling figure comes from empirical family studies rather than from a Punnett square. It also predicts that the risk will rise further if a *second* relative is affected — which no Mendelian model predicts, since a Mendelian risk is fixed by the genotype of the parents regardless of how many children are already affected.

</details>

## Flashback

**From Lesson 3.6 (sequencing coverage and qPCR):** (a) A 3 Gb genome is sequenced with $4\times10^{8}$ reads of 100 bp. Compute the coverage and the expected fraction of bases with zero reads. (b) At that coverage, what is the probability that a heterozygous site is called homozygous because every read came from one allele? (c) Two qPCR samples differ by $\Delta C_t = 6.6$. What is the fold-difference in starting template?

<details>
<summary>Solution</summary>

**(a)** $$C = \frac{NL}{G} = \frac{4\times10^{8} \times 100}{3\times10^{9}} = \frac{4\times10^{10}}{3\times10^{9}} = \mathbf{13.3\times}.$$

$$P(0 \text{ reads}) = e^{-13.3} = \mathbf{1.7\times10^{-6}},$$

so about $3\times10^{9} \times 1.7\times10^{-6} = 5000$ bases would be uncovered by chance alone — a small number, though real sequencing misses far more than this because reads are not uniformly placed.

**(b)** At a site with 13 reads (rounding the mean):

$$P = 2 \times \left(\tfrac12\right)^{13} = \frac{2}{8192} = \mathbf{2.4\times10^{-4}}.$$

Across roughly $3\times10^{6}$ heterozygous sites in a human genome, that is about **730 miscalled heterozygotes** — small in proportion, but a real number of errors, and the reason clinical sequencing uses 30× or more rather than 13×.

**(c)** $$2^{6.6} = \mathbf{97}\text{-fold}, \ \text{i.e. about 100-fold.}$$

(Using the shortcut that $\Delta C_t = 3.32$ is exactly tenfold: $6.6 \approx 2 \times 3.32$, so two orders of magnitude.)

</details>

## Connections

- **Backward:** [1.3](01-03-epistasis-pleiotropy.md)'s epistasis is the $V_I$ term; the reason it is not transmitted is the meiotic reshuffling of [1.1](01-01-mendels-laws-probability.md).
- **Forward:** [4.2](04-02-response-to-selection-qtl.md) uses $h^2$ to predict the response to selection and then goes looking for the individual loci; [4.4](04-04-linkage-disequilibrium-gwas.md) is the modern attempt to find them, and the gap between $h^2$ and what GWAS recovers is the missing-heritability problem.
- **Sideways:** the variance partition and regression machinery is [prob-stat-refresher 4.1–4.3](../../prob-stat-refresher/syllabus.md) and [econometrics 1.2](../../econometrics/syllabus.md); the central limit theorem doing the work in Fisher's argument is [probability-theory 3.3](../../probability-theory/syllabus.md); selection acting on this variance is [evolution-ecology 1.2](../../evolution-ecology/lessons/01-02-modes-of-selection.md).
