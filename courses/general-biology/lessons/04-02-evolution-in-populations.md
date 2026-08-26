# General Biology · Lesson 4.2: Evolution in populations

> ⏱ ~15 min · Module 4: Evolution & the diversity of life · Builds on: [4.1](04-01-natural-selection.md), [3.1](03-01-mendel-monohybrid-cross.md) · Unlocks: 4.3 (the tree of life)

## Why this matters

[4.1](04-01-natural-selection.md) gave the logic of selection qualitatively. This lesson makes it quantitative, and in doing so resolves the problem that nearly sank Darwin's theory: if selection removes unfit variants, why doesn't variation run out? And if dominant alleles mask recessive ones, why don't dominant traits take over?

Hardy and Weinberg answered the second question in 1908 with a piece of algebra so simple it is embarrassing, and in the process handed biology its most useful null model. Evolution became something you could measure rather than only narrate.

## The idea

Stop tracking individuals and track **alleles in a population**. The complete set is the **gene pool**, and evolution is nothing more than a change in the frequencies within it. That reframing is what makes the mathematics possible.

**The null model first.** Suppose nothing at all is acting on a population — mating is random, no one is selected against, no one migrates, no mutations occur, and the population is large enough that chance averages out. What happens to the allele frequencies?

**Nothing.** They stay exactly where they are, generation after generation, and the genotype frequencies settle immediately into a fixed relationship with them. That is the Hardy–Weinberg principle, and it answers the dominance worry directly: **a dominant allele does not become more common merely by being dominant.** Dominance affects which phenotype shows, not how alleles are transmitted.

**And that is precisely what makes it useful.** A null model that predicts "no change" turns evolution into a *detectable deviation*. Measure the genotype frequencies in a real population, compare with what Hardy–Weinberg predicts from the allele frequencies, and any mismatch tells you one of the five conditions is violated — and often which one.

**Then relax the conditions, one at a time.** Each violated assumption is a mechanism of evolution:

- **Selection** — non-random survival and reproduction ([4.1](04-01-natural-selection.md)). Directional, and tracks the environment.
- **Genetic drift** — random sampling error in who happens to reproduce. Aimless, and **stronger in small populations**.
- **Gene flow** — migration moving alleles between populations. Tends to make populations more alike.
- **Mutation** — the ultimate source of new alleles, but far too slow on its own to change frequencies much.
- **Non-random mating** — changes genotype frequencies without changing allele frequencies.

**Drift deserves particular attention** because it is the one people underestimate. It has no direction and no relationship to fitness — it is simply the statistics of small samples. In a population of ten, an allele can vanish through sheer bad luck regardless of how good it is. In a population of a million, the same luck averages out. **Drift is why population size is itself an evolutionary variable.**

## The formal version

**Definitions.** A **population** is a group of interbreeding individuals of one species; its **gene pool** is all the alleles present. **Evolution** is a change in allele frequencies in a gene pool over generations.

**The Hardy–Weinberg equations.** For a gene with two alleles at frequencies $p$ and $q$:

$$p + q = 1, \qquad \boxed{\;p^2 + 2pq + q^2 = 1\;}$$

where $p^2$ is the frequency of homozygous dominant, $2pq$ of heterozygotes (the 2 is because $Aa$ and $aA$ are the same genotype), and $q^2$ of homozygous recessive.

*In words: if alleles combine at random, genotype frequencies are just the expansion of $(p+q)^2$.* See [Hardy-Weinberg principle](../reference.md#hardy-weinberg-principle).

**The five conditions** it requires, each the absence of one evolutionary mechanism:

1. No selection
2. No mutation
3. No gene flow
4. Random mating
5. A large population (no drift)

**No real population satisfies all five**, which is the point — Hardy–Weinberg is a reference against which reality is measured, like a frictionless plane.

**The practical trick.** You usually cannot see genotypes, only phenotypes — and a dominant phenotype hides two genotypes. But the **recessive phenotype identifies its genotype uniquely** ([3.1](03-01-mendel-monohybrid-cross.md)), so:

$$q = \sqrt{q^2} = \sqrt{\text{frequency of the recessive phenotype}}$$

and everything else follows. **This is the standard route into any Hardy–Weinberg problem: count the recessives, square-root, and unpack.**

**Carriers are far more common than affected individuals.** For a rare recessive allele, the ratio of heterozygotes to homozygous recessives is

$$\frac{2pq}{q^2} = \frac{2p}{q} \approx \frac{2}{q}\ \text{ when } q \text{ is small.}$$

| $q$ | Affected ($q^2$) | Carriers ($2pq$) | Carriers per affected |
|---|---|---|---|
| 0.05 | 1 in 400 | 9.5 percent | 38 |
| 0.02 | 1 in 2500 | 3.9 percent | 98 |
| 0.01 | 1 in 10,000 | 2.0 percent | 198 |

**The rarer the disease, the more lopsided the ratio.** This is why selection against a recessive disease is so ineffective — almost every copy of the allele is sitting safely in a heterozygote where selection cannot see it, and it explains the persistence of severe recessive conditions.

**The mechanisms, compared:**

| Mechanism | Direction | Effect on variation | Depends on population size? |
|---|---|---|---|
| **Selection** | tracks the environment | usually reduces (can maintain) | no |
| **Drift** | random | reduces, by losing alleles | **yes — strong when small** |
| **Gene flow** | toward the source population | increases locally | no |
| **Mutation** | random | increases, very slowly | no |

**Two special cases of drift** worth naming:

- **Bottleneck** — a population is drastically reduced, so the survivors' allele frequencies are a small random sample of the original. Cheetahs show extremely low genetic diversity from a probable bottleneck.
- **Founder effect** — a few individuals colonize a new area and carry an unrepresentative sample. This is why some rare alleles reach high frequency in isolated communities.

**Selection can preserve variation, not only remove it.** In **heterozygote advantage**, the heterozygote is fittest, so both alleles persist indefinitely. The classic case is sickle cell ([1.2](01-02-four-biomolecules.md)): $HbA/HbA$ is vulnerable to malaria, $HbS/HbS$ has sickle-cell disease, and the heterozygote resists malaria without severe disease. In malarial regions the allele stays common — selection actively maintaining an allele that is lethal in double dose.

**Speciation.** Populations become separate species when they can no longer interbreed. The usual route is **allopatric**: a geographic barrier splits a population, the two halves accumulate different mutations and experience different selection, and eventually they are reproductively incompatible even if reunited. **Sympatric** speciation happens without geographic separation and is rarer.

## Picture

![The Hardy-Weinberg genotype distribution shown as a bar split into p squared, two pq and q squared with the five conditions listed beside it, and a plot contrasting selection driving an allele steadily upward with drift wandering aimlessly around its starting value](assets/04-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — work a Hardy–Weinberg problem).** In a population, 16 percent of beetles are light-coloured (recessive *bb*). Find the allele frequencies and all three genotype frequencies.

Start from the recessive phenotype, the only one that names its genotype:

$$q^2 = 0.16 \;\Longrightarrow\; q = \sqrt{0.16} = 0.4, \qquad p = 1 - 0.4 = 0.6.$$

$$p^2 = 0.36\ (BB), \qquad 2pq = 2(0.6)(0.4) = 0.48\ (Bb), \qquad q^2 = 0.16\ (bb).$$

*Check.* Genotypes sum to 1: $0.36 + 0.48 + 0.16 = 1.00$ ✓. Phenotypes: dark $= 0.36 + 0.48 = 0.84$, matching the stated 84 percent ✓. **Note that most dark beetles are heterozygous** — 0.48 against 0.36 — which is typical when $q$ is substantial and is why culling the dominant phenotype removes recessive alleles too.

**Example 2 (why you'd care — why you cannot breed out a recessive disease).** Cystic fibrosis affects about 1 in 2500 people of European descent. Suppose you could prevent every affected person from reproducing. How fast would the allele decline?

$$q^2 = \frac{1}{2500} = 0.0004 \;\Longrightarrow\; q = 0.02, \qquad p = 0.98.$$

$$\text{Carriers} = 2pq = 2(0.98)(0.02) = 0.0392 \approx \mathbf{3.9\ \text{percent, about 1 in 26.}}$$

$$\frac{\text{carriers}}{\text{affected}} = \frac{0.0392}{0.0004} = \mathbf{98.}$$

**Ninety-eight carriers for every affected individual.** Now count where the alleles actually are. Each affected person carries 2 copies and each carrier 1, so per 10,000 people: affected contribute $4 \times 2 = 8$ copies, carriers contribute $392 \times 1 = 392$ copies.

$$\text{fraction of alleles visible to selection} = \frac{8}{400} = \mathbf{2\ \text{percent.}}$$

**Ninety-eight percent of the allele copies are hidden in healthy heterozygotes**, completely invisible to any selection acting on the disease phenotype. Removing all affected individuals removes 2 percent of the copies per generation — and because $q$ falls, the hiding gets *more* effective each generation, not less.

Working the recursion, going from $q = 0.02$ to $q = 0.01$ takes about 50 generations of complete selection against affected individuals — roughly **1250 years** — and halving it again takes 100 more generations. **The allele can never be eliminated**, only asymptotically reduced.

**Two conclusions:**

- *Scientifically:* this is exactly why severe recessive diseases persist at stable low frequencies. Selection is weak against them by construction, and new mutations replenish the pool.
- *Historically:* it is also a decisive refutation of eugenic sterilization programmes on their own terms. The policies pursued in the early twentieth century could not have achieved their stated aim even in principle, and the arithmetic showing this was published in 1917 — before most of them were enacted.

## Watch out

- **You might expect dominant alleles to become more common.** Dominance concerns expression, not transmission. A dominant allele at 1 percent stays at 1 percent absent some evolutionary force — which is exactly what Hardy–Weinberg proves.
- **You might treat Hardy–Weinberg as a description of real populations.** It is a null model. Its value lies in the deviations.
- **You might think drift only matters for tiny populations.** It matters *most* there, but it acts everywhere, and it is the dominant force for alleles with little or no fitness effect — which is most of the genome.
- **You might read drift as a weak version of selection.** They are unrelated. Drift is aimless sampling error and can drive a beneficial allele to extinction or a harmful one to fixation.
- **You might apply $q = \sqrt{q^2}$ to the dominant phenotype.** Only the recessive phenotype maps to a single genotype. There is no way to get $p$ directly from the dominant phenotype's frequency.
- **You might think two populations are different species because they look different.** The criterion is reproductive isolation, not appearance — Great Dane and Chihuahua are one species; two identical-looking insects may be two.

## One-liner

> Track alleles, not individuals: without selection, drift, gene flow, mutation or assortative mating, frequencies never move — so every real change is a measurable deviation from $p^2 + 2pq + q^2 = 1$.

## Problems

**P1 (🟢)** In a plant population, 9 percent have white flowers (recessive *aa*). Find $q$, $p$, and the frequencies of all three genotypes.

**P2 (🟡)** A recessive allele has frequency $q = 0.05$. Compute the fraction of the population that is affected and the fraction that are carriers. What fraction of all copies of the allele are in carriers?

**P3 (🔴)** In malarial regions the sickle-cell allele reaches frequencies near 0.1, despite $HbS/HbS$ being frequently lethal before reproduction. Explain how selection maintains it, compute the three genotype frequencies at $q = 0.1$, and predict what happens to the allele frequency in a population that migrates to a malaria-free region.

<details>
<summary>Solutions</summary>

**P1** The white phenotype is recessive, so it identifies the genotype:

$$q^2 = 0.09 \;\Longrightarrow\; q = 0.3, \qquad p = 0.7.$$

$$p^2 = 0.49\ (AA), \qquad 2pq = 2(0.7)(0.3) = 0.42\ (Aa), \qquad q^2 = 0.09\ (aa).$$

*Check.* Sums to 1: $0.49+0.42+0.09 = 1.00$ ✓. Coloured flowers are $0.49+0.42 = 0.91 = 91$ percent ✓, complementing the 9 percent white.

**P2** With $q = 0.05$ and $p = 0.95$:

$$\text{affected} = q^2 = 0.0025 = \mathbf{0.25\ \text{percent, or 1 in 400.}}$$
$$\text{carriers} = 2pq = 2(0.95)(0.05) = 0.095 = \mathbf{9.5\ \text{percent, about 1 in 11.}}$$

**Fraction of allele copies in carriers.** Per 10,000 individuals there are 20,000 allele copies. Affected individuals number 25 and carry 2 copies each; carriers number 950 and carry 1 each:

$$\text{copies in affected} = 25\times2 = 50, \qquad \text{copies in carriers} = 950\times1 = 950.$$

$$\frac{950}{950+50} = \frac{950}{1000} = \mathbf{95\ \text{percent of all }a\text{ copies sit in carriers.}}$$

*Check.* The general formula gives the same thing: the fraction in heterozygotes is $\frac{2pq}{2pq + 2q^2} = \frac{p}{p+q} = p = 0.95$ ✓ — a pleasingly clean result, **the fraction of recessive alleles hidden in carriers is just $p$.** So the rarer the allele, the closer that fraction is to 1, and the less selection can reach it.

**P3** **How selection maintains it: heterozygote advantage** (balancing selection). The three genotypes have different fitness *in a malarial environment*:

| Genotype | Phenotype | Fitness where malaria is endemic |
|---|---|---|
| $HbA/HbA$ | normal haemoglobin | vulnerable to malaria — **reduced** |
| $HbA/HbS$ | sickle-cell **trait** | resists malaria, no severe disease — **highest** |
| $HbS/HbS$ | sickle-cell **disease** | often fatal before reproduction — **lowest** |

Because the heterozygote is fittest, selection cannot eliminate either allele: driving $HbS$ down produces too many malaria-vulnerable homozygotes, and driving it up produces too many with the disease. The frequency settles at a **stable equilibrium** determined by the relative fitnesses — a balance between death from malaria and death from sickle-cell disease.

**Genotype frequencies at $q = 0.1$** ($p = 0.9$):

$$p^2 = 0.81\ (HbA/HbA), \qquad 2pq = 2(0.9)(0.1) = 0.18\ (HbA/HbS), \qquad q^2 = 0.01\ (HbS/HbS).$$

So **18 percent carry the protective trait** while only **1 percent** have the disease — an 18:1 ratio, which is why the arrangement is sustainable at the population level despite being lethal for the few.

**After migrating to a malaria-free region:** the heterozygote's advantage disappears — there is no malaria to resist — while the homozygote's disadvantage remains in full. Fitnesses become:

$$HbA/HbA \approx HbA/HbS > HbS/HbS$$

This is now **ordinary directional selection against a recessive allele**, so $q$ declines. But it declines *slowly*, for exactly the reason in Example 2: at $q = 0.1$ the fraction of $HbS$ copies hidden in heterozygotes is $p = 90$ percent, so selection sees only a tenth of them each generation.

*Check.* The prediction is testable and holds: African-American populations, roughly 15 generations removed from a malarial environment, show a sickle-cell allele frequency around 0.05 — reduced from the ancestral ~0.1 but far from gone ✓, and the decline rate is consistent with the weak selection the arithmetic predicts.

</details>

## Flashback

**From Lesson 4.1 (Natural selection):** A population shows no change in a trait over many generations despite strong selection acting on it. Name the mode of selection and explain how strong selection produces no change.

<details>
<summary>Solution</summary>

**Stabilizing selection.** Selection acts from *both* directions, penalizing individuals at each extreme of the trait distribution and favouring the middle. The two pressures balance, so the mean does not move — but selection is unambiguously acting, and hard.

The visible signature is a change in **variance**, not in mean: the distribution narrows as extremes are removed each generation. Absence of directional change is not absence of selection; a well-adapted population at its optimum is being actively held there.

*Check.* This lesson gives the population-genetic reading: stabilizing selection is one way frequencies can be *maintained* rather than shifted, and heterozygote advantage is another — both are forms of **balancing selection**, which preserves variation instead of eroding it ✓. That matters because the naive expectation is that selection always reduces variation, and the sickle-cell case in P3 shows it can do exactly the opposite.

</details>

## Connections

- **Backward:** the $p^2 + 2pq + q^2$ expansion is [3.1](03-01-mendel-monohybrid-cross.md)'s Punnett square applied to a whole gene pool instead of two parents; selection is [4.1](04-01-natural-selection.md)'s mechanism made quantitative.
- **Forward:** [4.3](04-03-tree-of-life.md) takes the long view — populations diverging for billions of years produce the tree of life, and sequence differences between species are accumulated allele-frequency changes.
- **Sideways (probability):** Hardy–Weinberg is the binomial expansion $(p+q)^2$ applied to random allele pairing, and genetic drift is sampling error whose magnitude scales as $1/\sqrt{N}$ — which is exactly why small populations drift hard. See [`prob-stat-refresher` 2.2](../../prob-stat-refresher/lessons/02-02-discrete-distributions.md).
