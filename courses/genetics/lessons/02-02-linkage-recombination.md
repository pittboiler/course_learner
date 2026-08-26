# Genetics · Lesson 2.2: Linkage & recombination

> ⏱ ~15 min · Module 2: Linkage, Mapping & Chromosomes · Builds on: [2.1](02-01-chromosomal-basis-sex-linkage.md), [1.1](01-01-mendels-laws-probability.md) · Unlocks: 2.3 (three-point mapping)

## Why this matters

Independent assortment was always a special case, and [1.1](01-01-mendels-laws-probability.md) said so. Humans have roughly 20,000 genes on 23 chromosome pairs — so on average about 900 genes share a chromosome, and *most pairs of genes in a genome are physically linked*. Mendel's second law is the exception, not the rule.

But the failure is not a problem; it is the most useful measurement in classical genetics. **Linked genes fail to assort independently by an amount that depends on how far apart they are**, so counting offspring becomes a way to measure distance along a chromosome you have never seen. Sturtevant realized this in 1913 as an undergraduate, went home, and produced the first genetic map overnight.

## The idea

**Linked genes travel together — unless a crossover separates them.** Two genes on the same chromosome enter meiosis on the same physical molecule. If nothing happens, the gametes carry the parental combinations. A **crossover** between them — a physical exchange between non-sister chromatids during prophase I — swaps the segments distal to the crossover point and produces **recombinant** gametes.

**So the recombinant frequency measures distance.** Crossovers occur at roughly random positions along a chromosome. Two genes far apart have a lot of DNA between them and a high chance that a crossover falls in the gap; two genes close together rarely do.

$$\text{far apart} \Rightarrow \text{many recombinants}, \qquad \text{close together} \Rightarrow \text{few}$$

**Coupling and repulsion matter, and they are not a property of the genes.** A dihybrid $AaBb$ can be arranged two ways on its chromosomes:

- **Coupling (*cis*):** $\dfrac{A\ \ B}{a\ \ b}$ — the two dominants together on one homologue.
- **Repulsion (*trans*):** $\dfrac{A\ \ b}{a\ \ B}$ — one dominant on each.

These have the same genotype and produce **opposite** parental and recombinant classes. **You cannot analyse a linkage cross without knowing the arrangement** — and the way you find out is to look at which classes are abundant, because *the abundant classes are the parental ones.*

**The testcross is the right experiment.** Cross the dihybrid to a fully recessive homozygote ([1.1](01-01-mendels-laws-probability.md)). The recessive parent contributes only $ab$, so **every offspring phenotype names the gamete it got from the informative parent.** No inference needed — you are reading the gamete distribution directly.

**The ceiling at 50 percent.** As two genes get further apart, recombination frequency rises — but it stops at 50 percent and never exceeds it. At 50 percent recombination, the two genes are behaving *exactly* as if unlinked. So:

$$\mathrm{RF} = 50\% \quad\text{means either "on different chromosomes" or "so far apart on the same one that it makes no difference."}$$

**This is the fundamental limitation of linkage mapping**, and it is why genetic maps are built from short intervals summed together rather than measured end to end.

## The formal version

**Recombination frequency.**

$$\boxed{\;\mathrm{RF} = \frac{\text{number of recombinant offspring}}{\text{total offspring}}\;}$$

and one **map unit** or **centimorgan (cM)** is defined as 1 percent recombination:

$$1\ \mathrm{cM} = 1\%\ \mathrm{RF} .$$

*In words: map distance is measured in recombination, not in base pairs.* The two are correlated but not proportional — recombination rate per megabase varies several-fold along a chromosome (high near telomeres, suppressed near centromeres), so 1 cM is roughly 1 Mb in humans **on average** and can be wildly different locally.

**Why 50 percent is the ceiling.** A crossover involves only **two of the four chromatids** in a bivalent. So a single crossover in the interval produces a tetrad of

$$2\ \text{parental} : 2\ \text{recombinant} \;\Longrightarrow\; 50\%\ \text{recombinant among those four gametes.}$$

Even if *every* meiosis has a crossover in the interval, only half the gametes are recombinant. Multiple crossovers do not help: a double crossover between the two genes restores the parental arrangement and is *invisible*, so more distance produces diminishing returns and the observed RF asymptotes to 0.5.

**The consequence: RF underestimates true distance for long intervals.** This is why:

- Map distances are additive only over **short** intervals (roughly under 10–15 cM).
- Long distances are built by **summing short adjacent intervals**, not by measuring the ends.
- Mapping functions (Haldane, Kosambi) correct the underestimate, and Haldane's is

$$\mathrm{RF} = \tfrac12\left(1 - e^{-2m}\right)$$

where $m$ is the true map distance in Morgans, assuming crossovers occur as a Poisson process with no interference. *In words: RF saturates exponentially at 0.5 as real distance grows.*

**Detecting linkage: the chi-square.** A testcross of a dihybrid predicts $1{:}1{:}1{:}1$ under independent assortment. Compute

$$\chi^{2} = \sum \frac{(O-E)^{2}}{E}, \qquad \mathrm{df} = 3, \qquad \text{critical value } 7.81 \text{ at } p = 0.05 .$$

*In words: a significant departure from equal classes, with the departure taking the form "two classes over-represented and two under-represented," is linkage.*

**Recombination in males and females is not equal.** In humans, the female genetic map is about 1.6 times longer than the male map — women have more crossovers per meiosis. In *Drosophila* males there is **no crossing over at all**, which is enormously convenient experimentally and is why classical fly mapping crosses always use heterozygous females.

## Picture

![A bivalent in prophase one with two genes marked, showing a chiasma between them involving only two of the four chromatids, and the resulting tetrad of two parental and two recombinant chromatids, establishing the fifty percent ceiling. Beside it, a testcross of a coupling-phase dihybrid to a recessive homozygote with the four offspring classes shown and the two abundant classes labelled parental and the two rare ones labelled recombinant. Below, a plot of observed recombination frequency against true map distance showing the curve rising linearly at first and saturating at 0.5.](assets/02-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — RF, phase, and a map).** A testcross of a dihybrid gives 1000 offspring:

| Phenotype | Count |
|---|---|
| $A\ B$ | 43 |
| $a\ b$ | 47 |
| $A\ b$ | 452 |
| $a\ B$ | 458 |

(a) Which classes are parental? (b) What was the dihybrid parent's arrangement? (c) Compute RF and the map distance. (d) Confirm linkage with a chi-square.

(a) **The abundant classes are parental**: $A\,b$ (452) and $a\,B$ (458).

(b) Parental gametes reflect the parent's chromosome arrangement, so the dihybrid was

$$\frac{A\ \ b}{a\ \ B} \qquad \textbf{repulsion (}\textit{trans}\textbf{)}.$$

**Note how easy it would have been to get this wrong.** If you had assumed coupling — because $A$ and $B$ are both "dominant" and look like they belong together — you would have labelled the rare classes as parental and computed $\mathrm{RF} = 0.91$, which is impossible. **An RF above 0.5 is always a sign that you assigned the phases backwards.**

(c) $$\mathrm{RF} = \frac{43 + 47}{1000} = 0.090 = \mathbf{9.0\ \mathrm{cM}}.$$

(d) Expected under independent assortment: 250 each.

$$\chi^{2} = \frac{(43-250)^2}{250} + \frac{(47-250)^2}{250} + \frac{(452-250)^2}{250} + \frac{(458-250)^2}{250}$$
$$= \frac{42849 + 41209 + 40804 + 43264}{250} = \frac{168126}{250} = \mathbf{672.5}.$$

Against 7.81 at 3 df: **linkage confirmed**, overwhelmingly.

**Example 2 (why you'd care — why the map is built from short intervals).** Three genes lie in the order $A$–$B$–$C$ with true distances $A$–$B$ = 18 cM and $B$–$C$ = 22 cM. (a) What would you predict for the $A$–$C$ recombination frequency by simple addition? (b) What would you actually measure, and why is it less? (c) Use Haldane's mapping function to estimate the observed $A$–$C$ RF, and comment.

(a) Naive addition: $18 + 22 = \mathbf{40}$ percent.

(b) You would measure **less than 40 percent**, because **double crossovers — one in each interval — restore the parental arrangement of $A$ and $C$ and are counted as non-recombinant.** Every such meiosis is invisible in a two-point cross between $A$ and $C$.

Estimating the loss directly: if the two intervals are independent, the frequency of double crossovers among gametes is roughly $0.18 \times 0.22 = 0.0396$. Each double crossover removes *two* recombinants from the count (one that would have been scored from each interval), so

$$\mathrm{RF}_{AC} \approx 0.18 + 0.22 - 2(0.0396) = 0.40 - 0.079 = \mathbf{0.32}.$$

(c) Haldane with $m = 0.40$ Morgans:

$$\mathrm{RF} = \tfrac12\left(1 - e^{-2(0.40)}\right) = \tfrac12\left(1 - e^{-0.8}\right) = \tfrac12(1 - 0.4493) = \mathbf{0.275}.$$

The two estimates bracket the truth (Haldane assumes no interference and so over-corrects; real data usually falls between). Either way the conclusion is the same:

$$\text{measured } 0.28\text{–}0.32 \quad\text{versus}\quad \text{true } 0.40 .$$

**A 40 cM interval measures as roughly 30 cM, an underestimate of a quarter.** This is why genetic maps are constructed as chains of short intervals — each under about 10 cM, where the double-crossover correction is negligible — summed to give total map length. And it is why a genome's total map length in Morgans can exceed 30 (the human genome is about 37 Morgans) even though no single measured RF can exceed 0.5.

## Watch out

- **You might compute RF above 50 percent.** It is impossible. If you get one, you have mislabelled which classes are parental — check that the *abundant* classes are the parental ones.
- **You might assume coupling.** Phase is a property of the *individual parent*, not of the genes. Read it off the data: parental classes reveal the arrangement.
- **You might treat map distance as physical distance.** Recombination rate varies several-fold along a chromosome — suppressed at centromeres, elevated at telomeres and at hotspots — so cM per Mb is a local quantity.
- **You might add long distances.** Additivity holds only for short intervals; beyond ~15 cM the double-crossover correction matters and the sum overstates what you would measure.
- **You might forget that $\mathrm{RF} = 0.5$ is ambiguous.** It means unlinked *or* very far apart on the same chromosome. Distinguishing them requires a third marker in between — which is [2.3](02-03-three-point-mapping.md).

## One-liner

> A crossover uses two of four chromatids, so even constant crossing over gives only 50 percent recombinants — which caps every measurement, hides double crossovers, and forces genetic maps to be built by summing short intervals.

## Problems

**P1 (🟢)** A testcross of a dihybrid gives: $AB$ 355, $ab$ 339, $Ab$ 156, $aB$ 150. (a) Identify the parental classes and the parent's phase. (b) Compute RF and map distance. (c) State whether the genes are linked and how you know without a formal test.

**P2 (🟡)** Two genes are 12 cM apart. A plant of genotype $\dfrac{A\ \ B}{a\ \ b}$ is testcrossed and 500 offspring are scored. (a) Predict the expected number in each of the four classes. (b) Repeat for a plant of genotype $\dfrac{A\ \ b}{a\ \ B}$. (c) A student reports 500 offspring split 220 : 218 : 31 : 31 but does not record which phenotype had which count. What can and cannot be concluded?

**P3 (🔴, bridges to 2.3 and to human genetics)** Two loci are truly 35 cM apart. (a) Use Haldane's function to predict the observed RF, and compute the percentage underestimate. (b) A researcher instead types a marker exactly halfway between them and measures each half separately, getting the Haldane-predicted RF for a 17.5 cM interval each time. Sum the two measured halves and compare with (a). (c) Explain what this demonstrates about map construction, and state the general principle.

<details>
<summary>Solutions</summary>

**P1 (a)** Abundant classes are $AB$ (355) and $ab$ (339), so these are **parental** and the parent was in **coupling (*cis*)**:

$$\frac{A\ \ B}{a\ \ b}.$$

**(b)** $$\mathrm{RF} = \frac{156 + 150}{1000} = 0.306 = \mathbf{30.6\ \mathrm{cM}}.$$

**(c)** **Linked** — the four classes are far from the $1{:}1{:}1{:}1$ that independent assortment predicts (250 each), with two classes at ~347 and two at ~153. You do not need the formal test: a departure of this size in 1000 offspring, with the characteristic two-high-two-low pattern, is unambiguous. (For completeness, $\chi^2 = 2[(97)^2 + (97)^2]/250 \approx 150$, far above 7.81.)

Worth noting: at 30.6 cM this pair is near the range where the RF starts underestimating the true distance appreciably, so 30.6 cM is a **lower bound** on the real separation.

**P2 (a)** RF = 0.12, so 12 percent of 500 = 60 recombinants total, 440 parental. Each pair splits evenly:

| Class | Type | Count |
|---|---|---|
| $AB$ | parental | 220 |
| $ab$ | parental | 220 |
| $Ab$ | recombinant | 30 |
| $aB$ | recombinant | 30 |

**(b)** For the repulsion parent $\dfrac{A\ b}{a\ B}$, the **same numbers** apply but to the **opposite classes**:

| Class | Type | Count |
|---|---|---|
| $Ab$ | parental | 220 |
| $aB$ | parental | 220 |
| $AB$ | recombinant | 30 |
| $ab$ | recombinant | 30 |

**(c)** What **can** be concluded: the genes are linked, and

$$\mathrm{RF} = \frac{31+31}{500} = 0.124 = 12.4\ \mathrm{cM},$$

which is a property of the two loci and is entirely independent of phase.

What **cannot** be concluded: the parent's phase. Without knowing which phenotypes were abundant, coupling and repulsion are indistinguishable — the two arrangements give identical *numbers* and differ only in which classes carry them.

**The general point:** map distance is a property of the chromosome; phase is a property of the individual. Losing the phenotype labels loses the second and keeps the first.

**P3 (a)** Haldane with $m = 0.35$ Morgans:

$$\mathrm{RF} = \tfrac12\left(1 - e^{-0.70}\right) = \tfrac12(1 - 0.4966) = \mathbf{0.2517}.$$

$$\text{underestimate} = \frac{0.35 - 0.2517}{0.35} = \mathbf{28\ \text{percent}}.$$

**(b)** Each half is 17.5 cM, $m = 0.175$:

$$\mathrm{RF}_{\text{half}} = \tfrac12\left(1 - e^{-0.35}\right) = \tfrac12(1 - 0.7047) = 0.1476 .$$

Summing the two measured halves:

$$0.1476 + 0.1476 = \mathbf{0.2953} = 29.5\ \mathrm{cM},$$

versus **25.2 cM** measured directly across the whole interval, against a true 35 cM.

**(c)** Subdividing recovers part of the lost distance — 29.5 cM instead of 25.2 — because each shorter interval hides fewer double crossovers. It does not recover *all* of it, because 17.5 cM is still long enough to conceal some.

**The general principle: map distance is additive, recombination frequency is not.** Distances measured over short intervals and summed approach the true map length; a single measurement over a long interval always underestimates it. Formally, RF is a *concave* function of distance that saturates at 0.5, so by Jensen's inequality the sum of parts always exceeds the whole measured directly.

$$\text{The finer you subdivide, the closer the sum gets to the truth.}$$

In the limit of infinitely dense markers, the sum of the tiny intervals *is* the map distance — which is exactly how modern high-density human maps are built (from tens of thousands of markers), and why the total human genetic map length is about 37 Morgans, a figure no single measurement could ever have produced given the 0.5 ceiling.

</details>

## Flashback

**From Lesson 2.1 (sex linkage and reciprocal crosses):** In *Drosophila*, miniature wings ($m$) is X-linked recessive. (a) Predict the $F_1$ of a miniature female × wild-type male, and of the reciprocal cross. (b) In the first cross, the $F_1$ females are crossed to $F_1$ males. Give the $F_2$ phenotypes by sex. (c) Why do fly geneticists always use heterozygous *females* — never males — as the informative parent in a linkage cross?

<details>
<summary>Solution</summary>

**(a)** *Miniature female × wild-type male*, $X^{m}X^{m} \times X^{+}Y$:

$$\text{daughters } X^{+}X^{m} = \textbf{all wild-type}, \qquad \text{sons } X^{m}Y = \textbf{all miniature}.$$

*Reciprocal*, $X^{+}X^{+} \times X^{m}Y$: **all offspring wild-type** (daughters $X^{+}X^{m}$, sons $X^{+}Y$).

**(b)** $F_1$ from the first cross: females $X^{+}X^{m}$, males $X^{m}Y$. Crossing them:

| | $X^{m}$ (from father) | $Y$ |
|---|---|---|
| $X^{+}$ | $X^{+}X^{m}$ wild-type &female; | $X^{+}Y$ wild-type &male; |
| $X^{m}$ | $X^{m}X^{m}$ **miniature** &female; | $X^{m}Y$ **miniature** &male; |

$$\text{Females: } \tfrac12 \text{ wild-type}, \tfrac12 \text{ miniature.} \qquad \text{Males: } \tfrac12 \text{ wild-type}, \tfrac12 \text{ miniature.}$$

Both sexes 1:1 — note that once the mother is heterozygous, the sex bias disappears.

**(c)** Because **there is no crossing over in male *Drosophila***. A heterozygous male produces only parental gametes, so a cross using him as the informative parent yields no recombinants at all and measures nothing.

This is not merely a nuisance to be worked around — it is genuinely useful. It means a male can transmit an entire chromosome intact, which lets fly geneticists maintain balancer chromosomes and complex marked stocks without them being scrambled by recombination each generation. **The absence of male recombination is one of the reasons *Drosophila* became the workhorse of classical genetics.**

</details>

## Connections

- **Backward:** [1.1](01-01-mendels-laws-probability.md)'s testcross is the experiment used here, and the chi-square that detected linkage in its P3 is now the standard tool; [general-biology 2.5](../../general-biology/lessons/02-05-mitosis-meiosis.md) supplied the crossover.
- **Forward:** [2.3](02-03-three-point-mapping.md) adds a third marker, which makes double crossovers visible and turns two-point distances into an ordered map.
- **Sideways:** the *molecular* mechanism of crossing over is homologous recombination, [molecular-cell-biology 3.3](../../molecular-cell-biology/lessons/03-03-double-strand-breaks-hr-nhej.md); the population-scale version — correlations between loci decaying with recombination — is linkage disequilibrium, [4.4](04-04-linkage-disequilibrium-gwas.md).
