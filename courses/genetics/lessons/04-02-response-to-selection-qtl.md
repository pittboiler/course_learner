# Genetics · Lesson 4.2: Response to selection & QTL mapping

> ⏱ ~15 min · Module 4: Quantitative Genetics, Populations & Genomes · Builds on: [4.1](04-01-quantitative-traits-heritability.md), [2.3](02-03-three-point-mapping.md) · Unlocks: 4.3 (inbreeding & structure)

## Why this matters

[4.1](04-01-quantitative-traits-heritability.md) ended with a number, $h^2$, and a claim that it is the one that predicts something. This lesson cashes that claim: **the breeder's equation turns a heritability into a quantitative forecast of how much a population will change in one generation**, and it is the most economically consequential equation in genetics. Every dairy herd, maize hybrid and broiler line in the world is the accumulated output of running it.

The second half asks a harder question. Quantitative genetics deliberately refuses to name individual genes — it works entirely with variances. But the genes are there, and **QTL mapping** finds them, by combining Module 2's linkage logic with Module 4's statistics. That combination is the direct ancestor of the GWAS in [4.4](04-04-linkage-disequilibrium-gwas.md).

## The idea

**The breeder's equation.** Select the best individuals as parents, and their offspring shift — but not all the way.

$$\boxed{\;R = h^{2} S\;}$$

- $S$ — the **selection differential**: how much the selected parents' mean exceeds the population mean.
- $R$ — the **response**: how much the offspring's mean exceeds the previous generation's mean.
- $h^{2}$ — narrow-sense heritability, the fraction of the parental superiority that is transmissible.

*In words: you get back the fraction of the parents' advantage that was additive genetic rather than environmental or non-additive.*

**Why the response is muted, and why that is not a defect.** Extreme parents are extreme partly because of good genes and partly because of good luck — favourable environment, favourable dominance combinations. Only the genes are transmitted, and only the additive part of those. So the offspring **regress toward the mean** by exactly the fraction $1 - h^{2}$.

$$\textbf{Regression to the mean is not a statistical artefact here — it is } 1-h^{2}\textbf{, and it is measurable.}$$

**Realized heritability closes the loop.** Run the selection, measure the response, and invert:

$$h^{2}_{\text{realized}} = \frac{R}{S}$$

**This is the honest way to get $h^2$** — it is defined by what selection actually achieves, rather than estimated from correlations between relatives with all the assumptions that entails ([4.1](04-01-quantitative-traits-heritability.md)).

**Selection eventually stops.** Long-term selection experiments run for a hundred generations show the same shape: rapid initial response, then a **plateau**. Three reasons, and distinguishing them matters:

1. **Exhaustion of additive variance** — the favourable alleles have gone to fixation, $V_A \to 0$, so $h^2 \to 0$ and $R \to 0$.
2. **Opposing natural selection** — the extreme phenotype is bad for fitness (very high-yielding hens that cannot survive; broilers that cannot walk).
3. **Physiological limits** — the trait runs into a hard constraint.

Test 1 against 2 by **relaxing** selection: if the population stays put, the variance was exhausted; if it **drifts back**, natural selection was opposing you.

**QTL mapping: finding the loci.** A **quantitative trait locus** is a chromosomal region containing one or more genes affecting a continuous trait. The strategy is the same as [2.3](02-03-three-point-mapping.md)'s mapping, with a statistical test replacing the phenotype categories:

1. Cross two lines that differ in the trait and in many **markers**.
2. Produce a segregating population ($F_2$ or backcross).
3. Score every individual for the trait **and** genotype them at markers across the genome.
4. At each marker, test whether genotype predicts the trait.
5. A significant association means a QTL is **linked** to that marker.

**The logic is exactly linkage.** A marker is associated with the trait only if it is close enough to a causal locus that recombination has not separated them.

## The formal version

**Selection differential from truncation selection.** If the top fraction $p$ of a normal distribution is selected, the selection differential in standard-deviation units is the **selection intensity** $i$:

$$S = i\,\sigma_P, \qquad i = \frac{\phi(z)}{p}$$

where $z$ is the truncation point and $\phi$ the standard normal density. Useful values:

| Fraction selected $p$ | Intensity $i$ |
|---|---|
| 50 percent | 0.80 |
| 20 percent | 1.40 |
| 10 percent | 1.755 |
| 5 percent | 2.06 |
| 1 percent | 2.665 |

**Note the diminishing returns:** going from 10 percent to 1 percent selected — a tenfold tightening — raises $i$ only from 1.76 to 2.67. And selecting harder shrinks the breeding population, which accelerates inbreeding ([4.3](04-03-inbreeding-relatedness-structure.md)) and erodes $V_A$. **The optimum is not "select as hard as possible."**

Combining, the response per generation is

$$R = i\,h^{2}\,\sigma_P .$$

**Response per unit time**, which is what actually matters commercially:

$$\frac{\Delta G}{\text{year}} = \frac{i\,h^{2}\,\sigma_P}{L}$$

where $L$ is the **generation interval**. *In words: halving the generation interval doubles the annual gain, exactly as surely as doubling the heritability does.* This is why genomic selection transformed dairy breeding — not by selecting better bulls, but by allowing them to be selected as calves rather than after years of daughter performance testing, cutting $L$ roughly in half.

**LOD scores for QTL detection.** At each genomic position, compare two hypotheses:

$$\mathrm{LOD} = \log_{10}\frac{\text{likelihood(QTL here)}}{\text{likelihood(no QTL)}}$$

A LOD of 3 means the QTL hypothesis is 1000 times more likely, and 3 is the conventional threshold — chosen because with a whole genome of positions tested, a lower threshold gives too many false positives.

**Interval mapping** improves on testing markers one at a time: it evaluates the likelihood at *every position between* adjacent markers, accounting for recombination, and so localizes the QTL rather than merely detecting linkage to a marker.

**The Beavis effect, which you should know before reading any QTL paper.** In a study with limited power, a QTL is detected only when its estimated effect happens to be large — so **the effects of detected QTL are systematically overestimated**, sometimes several-fold, and the bias is worse for smaller studies.

$$\textbf{Detected effects are conditioned on having been detected, which is the same "winner's curse" that inflates early GWAS effect sizes (}[4.4](04-04-linkage-disequilibrium-gwas.md)\textbf{).}$$

**QTL resolution is poor, and that is structural.** An $F_2$ population has been through only one or two meioses, so very few recombination events separate nearby loci. A QTL interval is typically **10–30 cM**, containing hundreds of genes. Improving it requires more recombination — more generations (recombinant inbred lines, advanced intercross) or a population that has already accumulated thousands of generations of it, which is exactly what a natural population provides and what [4.4](04-04-linkage-disequilibrium-gwas.md) exploits.

## Picture

![Left: a normal phenotype distribution with the top fraction shaded as the selected parents, the selection differential S marked from the population mean to the selected mean, and the offspring distribution drawn shifted by R which is smaller than S, with the shortfall labelled as regression toward the mean by one minus h squared. Centre: a long-term selection experiment plot showing rapid early response and a plateau, with a relaxed-selection arm drifting back down to indicate opposing natural selection. Right: a LOD score trace along a chromosome with markers along the axis, a peak crossing a threshold of 3, and a wide confidence interval labelled as spanning tens of centimorgans and hundreds of genes.](assets/04-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — predict a response, then check it).** In a population of maize, ear length has mean 20 cm and $\sigma_P = 3$ cm, with $h^2 = 0.35$. A breeder selects the top 10 percent as parents. (a) Compute $S$ and predict $R$. (b) The offspring mean turns out to be 21.2 cm. Compute the realized heritability and comment. (c) Predict the mean after five generations of the same selection, assuming $h^2$ holds.

(a) At $p = 0.10$, the selection intensity is $i = 1.755$:

$$S = i\,\sigma_P = 1.755 \times 3 = 5.27\ \mathrm{cm}.$$

$$R = h^{2}S = 0.35 \times 5.27 = \mathbf{1.84\ \mathrm{cm}},$$

predicting an offspring mean of $20 + 1.84 = 21.84$ cm.

(b) Observed $R = 21.2 - 20 = 1.2$ cm:

$$h^{2}_{\text{realized}} = \frac{R}{S} = \frac{1.2}{5.27} = \mathbf{0.23}.$$

**The realized heritability is substantially below the estimate**, and the discrepancy is informative rather than an error. Possible causes: the $h^2 = 0.35$ estimate came from a different environment (heritability is environment-specific, [4.1](04-01-quantitative-traits-heritability.md)); the selected parents' advantage included a non-additive or environmental component larger than assumed; or natural selection acted against long ears between planting and harvest.

**The realized value is the one to trust going forward**, because it is defined by what selection actually achieved.

(c) Using the realized $h^2 = 0.23$ and assuming it holds:

$$\Delta\text{per generation} = 0.23 \times 5.27 = 1.21\ \mathrm{cm}, \qquad 5 \times 1.21 = 6.06\ \mathrm{cm},$$

giving a predicted mean of $\mathbf{26.1\ \mathrm{cm}}$ after five generations.

**But that extrapolation is the least reliable part of the calculation**, and you should say so. Selection consumes $V_A$ by driving favourable alleles toward fixation, so $h^2$ falls as the programme proceeds and the per-generation gain shrinks. Five generations of constant response is optimistic; a decelerating curve approaching a plateau is what actually happens.

**Example 2 (why you'd care — the Illinois long-term selection experiment).** Selection for oil content in maize kernels began in 1896 and has continued for over 100 generations. The high line rose from 4.7 percent oil to over 20 percent; the low line fell from 4.7 percent to under 0.5 percent and then effectively stopped. (a) What does 100 generations of continued response in the high line tell you? (b) Why did the low line plateau and the high line not? (c) A "reverse selection" line was started from the high line in 1948 and responded immediately downward. What does that establish?

(a) **That additive variance was not exhausted after a century** — which is the genuinely surprising result. Naively, a hundred generations of selecting the top 20 percent should fix every favourable allele. Two things explain the persistence:

- **The trait is highly polygenic.** With hundreds of loci of small effect, and the population never enormous, drift and selection together fix alleles slowly, and many loci are still segregating after 100 generations.
- **Mutation replenishes variance.** New mutations arise each generation, and for a highly polygenic trait the mutational input to $V_A$ is measurable — enough to sustain a response indefinitely at a reduced rate.

The high line now sits roughly **30 standard deviations** above the original mean, far outside any phenotype present in the founding population. **Selection did not merely sort existing variation; it built combinations that had never existed.**

(b) The low line hit a **physiological floor**. Oil content cannot go below zero, and well before zero the kernel cannot form a viable embryo — the oil is the embryo's energy store. This is limit type 3 from the lesson: a hard constraint rather than exhausted variance.

**Note the asymmetry is itself diagnostic.** If additive variance had been the limiting factor, both directions would have plateaued at similar times. One direction plateauing and the other not points to an external constraint on that direction specifically.

(c) **That the plateau in the high line — where it slowed — was not caused by exhausted additive variance.**

Reverse selection responding immediately means $V_A$ was still present: there were still segregating alleles for the trait, and selection in the opposite direction could act on them at once. Had the variance genuinely been exhausted, reverse selection would have had nothing to work with and would have produced no response.

$$\textbf{The reverse-selection test distinguishes "no variance left" from "natural selection opposing you."}$$

This is exactly the diagnostic named in the lesson, applied to the longest-running biological experiment in existence. It is also a warning for any breeding programme that stalls: the correct next step is to *relax or reverse* selection and see what happens, rather than assuming the genetic potential is spent.

## Watch out

- **You might use $H^2$ in the breeder's equation.** It must be $h^2$. Dominance and epistasis contribute to resemblance between relatives but not to what parents transmit, so using $H^2$ overpredicts the response.
- **You might expect the response to continue at a constant rate.** Selection consumes $V_A$, so $h^2$ falls and the response decelerates. A linear extrapolation over many generations is always optimistic.
- **You might read a plateau as exhausted variance.** Test it: relax selection. If the population drifts back, natural selection was opposing you and the variance is still there.
- **You might select as hard as possible.** Intensity has diminishing returns ($i$ rises from 1.76 at 10 percent to only 2.67 at 1 percent) and hard selection shrinks the breeding population, accelerating inbreeding and eroding the very variance you need ([4.3](04-03-inbreeding-relatedness-structure.md)).
- **You might take a published QTL effect size at face value.** The Beavis effect inflates the estimated effects of detected QTL, badly in small studies — the same winner's curse that afflicted early GWAS.
- **You might expect a QTL to name a gene.** A typical QTL interval spans 10–30 cM and hundreds of genes. Detection and identification are different problems.

## One-liner

> $R = h^{2}S$: you get back the additive fraction of your parents' advantage, and the rest is regression to the mean — which is why selection works, why it decelerates, and why a plateau should always be tested by relaxing it.

## Problems

**P1 (🟢)** A population of chickens has mean egg production 250 eggs/year with $\sigma_P = 30$ and $h^2 = 0.25$. The top 20 percent are selected ($i = 1.40$). (a) Compute $S$ and predict $R$. (b) What is the expected mean of the next generation? (c) If selection intensity is doubled to $i = 2.8$ (impossible in practice — explain why), what would $R$ become?

**P2 (🟡)** A breeder selects for growth rate. Over ten generations $S$ is held constant at 8 units per generation, and the cumulative response is: gen 1–3, 3.0 units each; gen 4–6, 1.8 units each; gen 7–10, 0.4 units each. (a) Compute the realized $h^2$ in each phase. (b) Interpret the trend. (c) Design an experiment to distinguish exhausted additive variance from opposing natural selection, and state what each outcome would look like.

**P3 (🔴, bridges to 4.4 and to breeding practice)** A dairy programme has $i = 2.0$, $h^2 = 0.30$ for milk yield, $\sigma_P = 900$ kg, and a generation interval of 5 years (bulls must wait for their daughters to lactate before being evaluated). (a) Compute the annual genetic gain. (b) Genomic selection lets bulls be evaluated from a DNA sample as calves, cutting $L$ to 2 years, but the accuracy of prediction from markers is lower — effectively reducing the usable $h^2$ to 0.20. Compute the new annual gain and the fold-improvement. (c) Explain why this trade — worse accuracy, shorter interval — is worth making, and identify the one quantity in the equation that genomic selection does *not* improve and why that matters for the long run.

<details>
<summary>Solutions</summary>

**P1 (a)** $$S = i\,\sigma_P = 1.40 \times 30 = \mathbf{42\ \text{eggs}}.$$
$$R = h^{2}S = 0.25 \times 42 = \mathbf{10.5\ \text{eggs}}.$$

**(b)** $$250 + 10.5 = \mathbf{260.5\ \text{eggs/year}}.$$

**(c)** $$R = 0.25 \times 2.8 \times 30 = \mathbf{21\ \text{eggs}}.$$

**Why $i = 2.8$ is not achievable:** an intensity of 2.8 corresponds to selecting roughly the top **0.7 percent**. In a flock of a few thousand that leaves a handful of breeders, and the consequences are severe: the effective population size collapses, inbreeding accumulates fast ([4.3](04-03-inbreeding-relatedness-structure.md)), inbreeding depression reduces fitness and fertility, and $V_A$ itself erodes — so $h^2$ falls and the *long-run* response is worse than under moderate selection. **The equation says "select harder"; the population says "not too hard."**

**P2 (a)** $h^2_{\text{realized}} = R/S$ with $S = 8$ throughout:

| Phase | $R$ per gen | Realized $h^2$ |
|---|---|---|
| Gen 1–3 | 3.0 | $3.0/8 = \mathbf{0.375}$ |
| Gen 4–6 | 1.8 | $1.8/8 = \mathbf{0.225}$ |
| Gen 7–10 | 0.4 | $0.4/8 = \mathbf{0.050}$ |

**(b)** The realized heritability has fallen by a factor of 7.5. Since $h^2 = V_A/V_P$ and $S$ was held constant, either $V_A$ has been consumed by driving favourable alleles toward fixation, or something is opposing the response. The population is approaching a **plateau**.

**(c)** **The relaxed-selection experiment.** Split the gen-10 population into three lines and maintain them for several generations:

| Line | Treatment |
|---|---|
| A | continue selecting as before (control for drift and environment) |
| **B** | **relax selection entirely** — breed at random |
| C | **reverse selection** — select for *lower* growth rate |

The two hypotheses make sharply different predictions:

| Outcome | Exhausted $V_A$ | Opposing natural selection |
|---|---|---|
| Line B (relaxed) | stays at its new mean — nothing pushes it | **drifts back down** toward the original mean |
| Line C (reversed) | **no response** — nothing to select on | **rapid response** downward |

**Line C is the more decisive of the two**, because a strong immediate reverse response is possible only if segregating additive variance remains. If both B and C are flat, the variance really is spent and the programme's options are to introduce new germplasm or wait for mutation.

*A useful additional check:* measure $V_P$ directly in the gen-10 population and compare with gen 0. If total phenotypic variance has fallen sharply, that supports exhausted genetic variance; if it is unchanged, the flat response is more likely to be opposing selection or a physiological limit.

**P3 (a)** $$\frac{\Delta G}{\text{year}} = \frac{i\,h^{2}\,\sigma_P}{L} = \frac{2.0 \times 0.30 \times 900}{5} = \frac{540}{5} = \mathbf{108\ \mathrm{kg/year}}.$$

**(b)** $$\frac{\Delta G}{\text{year}} = \frac{2.0 \times 0.20 \times 900}{2} = \frac{360}{2} = \mathbf{180\ \mathrm{kg/year}}.$$

$$\text{fold-improvement} = \frac{180}{108} = \mathbf{1.67\times}.$$

**(c)** **Why the trade is worth it.** The equation has $h^2$ in the numerator and $L$ in the denominator, so they are exactly equally powerful levers — a factor of 2 shorter generation interval is worth precisely as much as a factor of 2 higher heritability. Here accuracy fell by a factor of 1.5 while the interval fell by a factor of 2.5, so the net is a 1.67-fold gain.

$$\frac{0.20}{0.30} \times \frac{5}{2} = 0.667 \times 2.5 = 1.67$$

**The general principle: in any selection programme, the generation interval is as important as the heritability and is usually far easier to change.** Improving prediction accuracy requires better science; shortening the interval only requires evaluating animals earlier — which is exactly what genotyping permits. This is why genomic selection roughly doubled the rate of genetic gain in dairy cattle within a decade of its introduction in 2009, one of the fastest and largest changes in the history of animal breeding.

**The quantity genomic selection does not improve is $\sigma_P$ — and more importantly, it does not protect $V_A$.** In fact it makes the erosion *worse*: because young bulls can now be selected accurately from DNA alone, the industry converged rapidly on a small number of elite sires, and the effective population size of Holstein cattle **fell** as genomic selection was adopted, with inbreeding accumulating faster than before.

**So the long-run concern is exactly the one from P1(c) and [4.3](04-03-inbreeding-relatedness-structure.md):** a method that raises short-term gain by intensifying selection on fewer animals consumes the additive variance that makes future gain possible, and accelerates inbreeding depression. Modern programmes therefore use **optimal contribution selection**, which explicitly constrains the rate of inbreeding while maximizing gain — trading a few percent of annual response for the ability to keep responding for decades. **The breeder's equation is a one-generation equation, and running a programme means optimizing something it does not contain.**

</details>

## Flashback

**From Lesson 4.1 (variance partition and twin estimates):** A trait has $V_P = 80$, $V_A = 24$, $V_D = 8$, $V_I = 0$. (a) Compute $V_E$, $H^2$ and $h^2$. (b) A breeder applies a selection differential of $S = 10$. Predict the response, and state what the response would be if you mistakenly used $H^2$. (c) A twin study of the same trait gives $r_{MZ} = 0.40$ and $r_{DZ} = 0.19$. Estimate $H^2$ by Falconer's formula and compare with your answer in (a).

<details>
<summary>Solution</summary>

**(a)** $$V_G = 24 + 8 + 0 = 32, \qquad V_E = 80 - 32 = \mathbf{48}.$$
$$H^{2} = \frac{32}{80} = \mathbf{0.40}, \qquad h^{2} = \frac{24}{80} = \mathbf{0.30}.$$

**(b)** $$R = h^{2}S = 0.30 \times 10 = \mathbf{3.0}.$$

Using $H^2$ by mistake:

$$R_{\text{wrong}} = 0.40 \times 10 = 4.0,$$

a **33 percent overprediction**. The error is exactly the dominance variance: $V_D/V_P = 8/80 = 0.10$, and $0.10 \times 10 = 1.0$ unit of phantom response. Dominance makes relatives resemble each other without making the resemblance transmissible — parents pass alleles, and dominance is a property of pairs.

**(c)** $$H^{2} = 2(r_{MZ} - r_{DZ}) = 2(0.40 - 0.19) = 2(0.21) = \mathbf{0.42},$$

against the true $H^2 = 0.40$ from the variance components — a good match, within what sampling error would explain.

Checking the other components: $c^2 = 2(0.19) - 0.40 = -0.02$, essentially zero (and slightly negative, consistent with the small dominance variance present, [4.1](04-01-quantitative-traits-heritability.md) P2). And $e^2 = 1 - 0.40 = 0.60$, matching $V_E/V_P = 48/80 = 0.60$ exactly.

**The twin estimate recovered $H^2$, not $h^2$** — which is the point. A twin study tells you how much variation is genetic; it does not tell you how much a breeder can act on, and the gap between 0.42 and 0.30 is entirely dominance.

</details>

## Connections

- **Backward:** [4.1](04-01-quantitative-traits-heritability.md) defined $h^2$ and explained why only $V_A$ is transmitted; this lesson is the equation that makes that definition do work. QTL mapping is [2.3](02-03-three-point-mapping.md)'s linkage logic with a statistical test replacing discrete phenotype classes.
- **Forward:** [4.3](04-03-inbreeding-relatedness-structure.md) quantifies the inbreeding cost that hard selection incurs; [4.4](04-04-linkage-disequilibrium-gwas.md) replaces the designed cross with a natural population that has already accumulated thousands of generations of recombination, buying resolution QTL mapping cannot reach.
- **Sideways:** truncation selection and the intensity $i$ are the same normal-tail arithmetic as [prob-stat-refresher 3.4](../../prob-stat-refresher/syllabus.md); the selection differential and gradient reappear as the machinery of natural selection in [evolution-ecology 1.2](../../evolution-ecology/lessons/01-02-modes-of-selection.md); the LOD score is a likelihood ratio in the sense of [probability-theory](../../probability-theory/syllabus.md).
