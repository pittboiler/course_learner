# General Biology · Lesson 3.1: Mendel & the monohybrid cross

> ⏱ ~15 min · Module 3: Genetics & the central dogma · Builds on: [2.5](02-05-mitosis-meiosis.md) · Unlocks: 3.2 (dihybrid crosses)

## Why this matters

Mendel worked out the rules of inheritance in the 1860s without knowing about DNA, chromosomes, meiosis, or genes. He did it by counting peas — 28,000 of them — and noticing that the numbers came out in small whole-number ratios.

Learning this after meiosis is deliberate and makes it far easier. Mendel's laws look like arbitrary rules if you meet them cold; met after [2.5](02-05-mitosis-meiosis.md), they are **descriptions of what chromosomes do in anaphase I**. He was reading the behaviour of a mechanism he could not see, from its statistical shadow — which is one of the finest pieces of inference in the history of science.

## The idea

Before Mendel, inheritance was assumed to be **blending**: mix red and white, get pink, and the original colours are gone forever. That model has a fatal problem, which Darwin worried about — blending destroys variation every generation, and selection needs variation to act on ([4.1](04-01-natural-selection.md)).

Mendel's peas said otherwise. Cross a tall plant with a short one and you get **all tall** offspring — not medium. Let those interbreed and shortness **reappears** in the next generation, in about a quarter of the plants. Nothing was blended and nothing was lost; something was hidden and came back intact.

That forces a specific model:

- Each trait is controlled by a **pair** of hereditary factors, one inherited from each parent.
- The factors come in variants (**alleles**). One can **mask** the other: the masking one is **dominant**, the masked one **recessive**.
- The pair **separates** when gametes are made, so each gamete carries only one.
- Fertilization restores the pair, at random.

Every one of those statements is now a statement about chromosomes. The "pair of factors" is a pair of homologous chromosomes. The "separating" is anaphase I. The "restored at random" is fertilization. **Mendel's abstractions turned out to be physical objects**, which is why his work was so completely vindicated when it was rediscovered in 1900.

The reappearance-of-shortness observation is the crux. If shortness had been diluted or blended away in generation one, it could not come back unchanged in generation two. **Inheritance is particulate, not fluid** — and that is exactly what makes evolution by natural selection workable.

## The formal version

**Vocabulary**, used precisely from here on:

| Term | Meaning |
|---|---|
| **Gene** | a heritable unit determining a trait; a stretch of DNA at a particular chromosome location |
| **Allele** | one version of a gene (e.g. *B* for dark, *b* for light) |
| **Locus** | the position on the chromosome where a gene sits |
| **Genotype** | the alleles an individual carries (*BB*, *Bb*, *bb*) |
| **Phenotype** | the observable trait (dark, light) |
| **Homozygous** | two identical alleles (*BB* or *bb*) |
| **Heterozygous** | two different alleles (*Bb*) |
| **Dominant** | the allele expressed in a heterozygote — written capital |
| **Recessive** | the allele masked in a heterozygote — written lowercase |

**A recessive phenotype requires two recessive alleles**, so it identifies the genotype uniquely: a light individual must be *bb*. A dominant phenotype is ambiguous — *BB* and *Bb* look identical. That asymmetry drives most genetics problems.

**Mendel's first law — segregation.** The two alleles of a gene separate during gamete formation, so each gamete receives exactly one.

*In words: a heterozygote *Bb* makes half *B* gametes and half *b* gametes.* This **is** anaphase I of meiosis: the homologous chromosomes carrying the two alleles are pulled to opposite poles ([2.5](02-05-mitosis-meiosis.md)). See [law of segregation](../reference.md#law-of-segregation).

**The Punnett square** enumerates the possible fertilizations. For $Bb \times Bb$:

| | **B** | **b** |
|---|---|---|
| **B** | *BB* | *Bb* |
| **b** | *Bb* | *bb* |

$$\text{Genotype ratio } 1\ BB : 2\ Bb : 1\ bb, \qquad \text{Phenotype ratio } \mathbf{3\ dark : 1\ light}$$

**The 3:1 ratio is the signature of a heterozygous cross** for a simple dominant trait. Recognizing it in data is how you infer the genotypes that produced it.

**The other standard crosses:**

| Cross | Genotypes | Phenotypes |
|---|---|---|
| $BB \times bb$ | all *Bb* | all dominant |
| $Bb \times Bb$ | 1 : 2 : 1 | **3 : 1** |
| $Bb \times bb$ | 1 *Bb* : 1 *bb* | **1 : 1** |
| $BB \times Bb$ | 1 : 1 | all dominant |

**The test cross.** To determine whether a dominant-phenotype individual is *BB* or *Bb*, cross it with a **homozygous recessive** (*bb*):

- If it is *BB*: **all** offspring show the dominant phenotype.
- If it is *Bb*: about **half** show the recessive phenotype.

*In words: breed it against a known recessive and see whether any recessive offspring appear.* The recessive parent contributes only *b*, so the offspring's phenotype reads the unknown parent's gametes directly. See [test cross](../reference.md#test-cross).

**The ratios are probabilities, not guarantees.** A 3:1 expectation means each offspring independently has probability $3/4$ of the dominant phenotype. Four offspring from $Bb\times Bb$ will often *not* be exactly three and one — that's sampling noise. Mendel's ratios are clean because he counted thousands.

## Picture

![A two by two Punnett square for a cross between two heterozygotes, showing genotypes BB, Bb, Bb and bb, giving a three to one ratio of dark to light phenotypes and a one to two to one genotype ratio, with a note that segregation is literally homologous chromosomes separating at anaphase one](assets/03-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — read the ratio backwards).** Two dark-coated mice are crossed and produce 9 dark and 3 light pups. What are the parents' genotypes?

The appearance of **light** offspring from two dark parents is decisive. Light must be recessive (it was masked in both parents), so a light pup is *bb* and must have received one *b* from each parent. Both parents therefore carry a *b*. Since both parents are dark, neither can be *bb*, so both are **heterozygous *Bb***.

Confirm against the ratio: $9 : 3 = 3 : 1$ ✓, the signature of $Bb \times Bb$.

*Check.* The logic runs in one direction only. Two dark parents producing *only* dark offspring would be consistent with $BB\times BB$, $BB\times Bb$, **or** $Bb\times Bb$ with a small sample — you cannot conclude. It is the *recessive* offspring that pins things down, which is the general rule: **recessive phenotypes are informative, dominant ones often aren't.**

**Example 2 (why you'd care — carriers and genetic counselling).** Cystic fibrosis is caused by a recessive allele. Two healthy parents have a child with the disease. What are the parents' genotypes, and what is the risk for their next child?

The affected child is *cc*, so each parent contributed a *c*. Both parents are healthy, so neither is *cc*. **Both are carriers, *Cc*.**

The cross is $Cc\times Cc$:

$$\tfrac14\ CC \ (\text{unaffected}), \qquad \tfrac12\ Cc\ (\text{unaffected carrier}), \qquad \tfrac14\ cc\ (\text{affected})$$

**Risk for each subsequent child: 1 in 4.** Three points that counsellors have to make repeatedly:

1. **Each pregnancy is independent.** Having one affected child does not "use up" the risk — the next child's probability is still $1/4$. The coin has no memory.
2. **Among the unaffected children, two-thirds are carriers.** Of the $3/4$ who are unaffected, $1/2$ out of the full distribution are *Cc*, and $\tfrac{1/2}{3/4} = \tfrac23$. This is a conditional probability, and it matters when those children later have children of their own.
3. **A recessive allele hides in carriers indefinitely.** This is why recessive diseases persist even when severe: selection can only act on the $1/4$ who are affected, while the allele travels invisibly in the far more numerous heterozygotes — a point that returns quantitatively in [4.2](04-02-evolution-in-populations.md).

## Watch out

- **You might think dominant means common or better.** It means only that it is expressed in a heterozygote. Polydactyly (extra fingers) is dominant and rare; the allele for the common blood group O is recessive. Frequency and dominance are unrelated.
- **You might think the recessive allele is destroyed or weakened in a heterozygote.** It is carried intact and passed on unchanged — which is precisely the observation that killed the blending model.
- **You might expect exactly 3:1 in a small family.** These are probabilities. Four children from $Bb\times Bb$ have a good chance of showing 4:0 or 2:2. Ratios emerge in large samples.
- **You might treat genotype and phenotype as interchangeable.** Two-thirds of the dominant-phenotype offspring of a heterozygous cross are heterozygous — the phenotype does not tell you the genotype, which is exactly why the test cross exists.
- **You might assume every trait works this way.** Most don't. Height, skin colour and most disease risks involve many genes and the environment. Mendel deliberately chose traits with clean two-allele, complete-dominance behaviour — [3.2](03-02-dihybrid-crosses-and-beyond.md) is largely about what happens when they don't.

## One-liner

> Alleles come in pairs, separate cleanly into gametes at anaphase I, and recombine at random — which makes a heterozygous cross give 3:1 and makes inheritance particulate rather than blended.

## Problems

**P1 (🟢)** In pea plants, purple flowers (*P*) are dominant to white (*p*). Cross a heterozygous purple plant with a white plant. Give the genotype and phenotype ratios of the offspring.

**P2 (🟡)** A dark-coated animal is either *BB* or *Bb*. Describe the cross you would perform to distinguish them, and state the expected results in each case.

**P3 (🔴)** Two brown-eyed parents have a blue-eyed child (blue is recessive). Give both parents' genotypes with reasoning. If they have three more children, what is the probability that all three are brown-eyed? What is the probability that at least one is blue-eyed?

<details>
<summary>Solutions</summary>

**P1** The cross is $Pp \times pp$. The heterozygote makes $\tfrac12\ P$ and $\tfrac12\ p$ gametes; the white parent makes only $p$.

| | **P** | **p** |
|---|---|---|
| **p** | *Pp* | *pp* |
| **p** | *Pp* | *pp* |

$$\text{Genotype: } 1\ Pp : 1\ pp, \qquad \text{Phenotype: } \mathbf{1\ purple : 1\ white}$$

*Check.* The 1:1 ratio is the signature of a heterozygote crossed with a homozygous recessive ✓ — and this cross is exactly the test cross of P2, seen from the other side.

**P2** Perform a **test cross**: mate the unknown dark animal with a **homozygous recessive** (*bb*, light).

The light parent can contribute only *b*, so every offspring's phenotype is decided entirely by which allele the unknown parent contributed. The offspring therefore report the unknown's gametes directly.

| Unknown is | Cross | Offspring |
|---|---|---|
| ***BB*** | $BB \times bb$ | **all *Bb*, all dark** — no light offspring, ever |
| ***Bb*** | $Bb \times bb$ | $\tfrac12\ Bb$ dark, $\tfrac12\ bb$ light — **about half light** |

**The diagnostic is the appearance of even one light offspring**, which proves the unknown carries a *b* and is therefore *Bb*.

*Check.* Note the asymmetry in how much evidence each conclusion needs. One light offspring settles *Bb* immediately. Concluding *BB* is statistical: with $n$ dark offspring and no light ones, the chance of that happening if the parent were really *Bb* is $(1/2)^n$ — so 5 dark offspring leaves a 3 percent chance of error, and 10 leaves 0.1 percent ✓. You can never prove *BB* outright, only make *Bb* implausible.

**P3** **Both parents are heterozygous, *Bb*.** The blue-eyed child is *bb* and must have received a *b* from each parent, so each parent carries a *b*. Both parents are brown-eyed, so neither is *bb*. Therefore both are *Bb*.

The cross $Bb \times Bb$ gives each child, independently:

$$P(\text{brown}) = \tfrac34, \qquad P(\text{blue}) = \tfrac14.$$

**All three brown:**

$$\left(\tfrac34\right)^3 = \frac{27}{64} = \mathbf{0.422}.$$

**At least one blue** — use the complement rather than summing cases:

$$1 - P(\text{none blue}) = 1 - \frac{27}{64} = \frac{37}{64} = \mathbf{0.578}.$$

*Check.* The two must sum to 1: $27/64 + 37/64 = 64/64$ ✓. Sanity: "at least one" should exceed the single-child probability of $1/4$, since three chances are better than one, and $0.578 > 0.25$ ✓.

**The independence assumption is doing real work here** and is worth stating explicitly: each fertilization is a fresh random draw of one allele from each parent, so the existing blue-eyed child changes nothing about the next three. This is the point counsellors have to repeat most often, because the intuition that risk is "used up" is very strong and completely wrong.

</details>

## Flashback

**From Lesson 2.5 (Mitosis & meiosis):** In which division of meiosis do homologous chromosomes separate, and in which do sister chromatids separate? Why does the distinction matter for the chromosome count?

<details>
<summary>Solution</summary>

**Homologues separate in anaphase I; sister chromatids separate in anaphase II.**

The distinction sets where the chromosome number halves. Anaphase I sends one member of each homologous pair to each pole, so a cell that had 2n chromosomes produces two cells with n each — **the reduction happens here**. Each of those chromosomes still consists of two sister chromatids, so the DNA content is not yet halved. Anaphase II then separates the sisters, halving the DNA content but leaving the chromosome number at n.

*Check.* This is exactly Mendel's law of segregation in mechanical form ✓. A heterozygote *Bb* carries *B* on one homologue and *b* on the other; anaphase I pulls them apart, so half the gametes get *B* and half get *b*. Mendel inferred that 1:1 split from counting offspring; anaphase I is what he was counting.

</details>

## Connections

- **Backward:** segregation is [2.5](02-05-mitosis-meiosis.md)'s anaphase I, and the randomness of fertilization is the third source of variation listed there.
- **Forward:** [3.2](03-02-dihybrid-crosses-and-beyond.md) adds a second gene and the exceptions to simple dominance; [3.4](03-04-central-dogma.md) explains what an allele physically *is* and why one can be recessive; [4.2](04-02-evolution-in-populations.md) tracks these allele frequencies across whole populations.
- **Sideways (probability):** Punnett squares are enumerated sample spaces and the ratios are probabilities of independent events — the machinery of [`prob-stat-refresher` 1.1](../../prob-stat-refresher/lessons/01-01-sample-spaces-events-axioms.md), with the multiplication rule for "all three" and the complement rule for "at least one."
