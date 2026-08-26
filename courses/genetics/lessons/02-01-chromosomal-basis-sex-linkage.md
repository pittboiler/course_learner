# Genetics · Lesson 2.1: The chromosomal basis of inheritance & sex linkage

> ⏱ ~15 min · Module 2: Linkage, Mapping & Chromosomes · Builds on: [1.4](01-04-pedigrees-human-inheritance.md), [general-biology 2.5](../../general-biology/lessons/02-05-mitosis-meiosis.md) · Unlocks: 2.2 (linkage & recombination)

## Why this matters

Mendel's "factors" were abstractions — accounting entries that behaved in a certain way. Nothing in his work said where they were or what they were made of, and for thirty-five years nobody could say.

Sutton and Boveri noticed in 1902 that chromosomes behave in meiosis exactly as Mendel's factors behave in crosses: paired, separating, assorting independently. That was a *correlation*, and correlations are not proof. The proof came from Morgan in 1910, and it came from a single white-eyed fly — because the trait's inheritance depended on **which parent** carried it, and no autosomal model can produce that asymmetry.

**Reciprocal-cross asymmetry is the evidence**, and understanding why it works is the point of this lesson.

## The idea

**The chromosome theory, stated properly.** Genes are located on chromosomes; the behaviour of chromosomes in meiosis is the physical basis of Mendel's laws. Segregation is homologues separating at anaphase I; independent assortment is bivalents orienting at random.

**Sex determination varies, and the mechanism matters.**

| System | Female | Male | Sex determined by | Examples |
|---|---|---|---|---|
| **XX/XY** | XX | XY | presence of *SRY* on Y (mammals); X:autosome ratio (*Drosophila*) | mammals, flies |
| **ZZ/ZW** | ZW | ZZ | the **female** is heterogametic | birds, butterflies, snakes |
| **XX/XO** | XX | XO | number of X's | grasshoppers, *C. elegans* |
| Haplodiploid | diploid | haploid | ploidy | bees, ants, wasps |

The important consequence: **the heterogametic sex is hemizygous for the sex chromosome it has only one of**, and therefore shows whatever alleles it carries. In mammals that is the male; in birds it is the female — and the pedigree signatures flip accordingly.

**Now the decisive experiment.** In a normal autosomal cross, the reciprocal directions give identical results — it does not matter which parent carried which allele. For an X-linked gene they differ, dramatically:

$$\text{white-eyed mother} \times \text{red-eyed father} \;\longrightarrow\; \textbf{all daughters red, all sons white}$$
$$\text{red-eyed mother} \times \text{white-eyed father} \;\longrightarrow\; \textbf{all offspring red}$$

*In words: the sons get their single X from their mother, so they show her allele; the daughters get one X from each parent, so the father's dominant allele covers.* The first cross is called **criss-cross inheritance** — the trait passes from mother to son and from father to daughter — and it is impossible on any autosomal model.

**Dosage compensation.** A female mammal has two X's and a male one, but they need the same amount of X-encoded protein. Mammals solve this by **X-inactivation**: each female cell silences one X at random, early in development, heritably. Flies solve it the other way, by doubling transcription from the male's single X. Both work; the mechanisms are unrelated.

**And X-inactivation makes every female a mosaic.** The choice is made independently in each cell of the early embryo and inherited by all its descendants ([molecular-cell-biology 4.1](../../molecular-cell-biology/lessons/04-01-chromatin-packaging-regulation.md) supplies the chromatin mechanism). So a heterozygous female is a **patchwork of two cell types** — which is why calico cats are female, and why some carrier females of X-linked disease are symptomatic.

## The formal version

**Notation.** Write X-linked genotypes with the allele on the chromosome: $X^{w}Y$ for a white-eyed male, $X^{+}X^{w}$ for a heterozygous female. **Never write $ww$ for a male** — he has one X, and the notation should show it.

**The two crosses, worked out.**

*Cross A:* $X^{w}X^{w} \times X^{+}Y$

| | $X^{+}$ (from father) | $Y$ |
|---|---|---|
| $X^{w}$ | $X^{+}X^{w}$ — **red daughter** | $X^{w}Y$ — **white son** |
| $X^{w}$ | $X^{+}X^{w}$ — red daughter | $X^{w}Y$ — white son |

*Cross B:* $X^{+}X^{+} \times X^{w}Y$

| | $X^{w}$ | $Y$ |
|---|---|---|
| $X^{+}$ | $X^{+}X^{w}$ — red daughter | $X^{+}Y$ — **red son** |
| $X^{+}$ | $X^{+}X^{w}$ — red daughter | $X^{+}Y$ — red son |

**Reciprocal crosses give different results, and the difference is sex-specific.** That is the entire signature. (Mitochondrial inheritance also gives reciprocal asymmetry, but there the asymmetry is not sex-specific in the offspring — *all* children of an affected mother are affected — so the two are easily distinguished.)

**Population consequences of hemizygosity.** For an X-linked recessive at allele frequency $q$:

$$P(\text{affected male}) = q, \qquad P(\text{affected female}) = q^{2}, \qquad \frac{\text{affected males}}{\text{affected females}} = \frac{1}{q} .$$

*In words: the rarer the allele, the more lopsided the sex ratio of affected individuals.* For red-green colour blindness, $q \approx 0.08$: about 8 percent of males and 0.64 percent of females, a ratio of 12.5. For haemophilia A, $q \approx 1\times10^{-4}$: a ratio of 10,000, which is why affected females are essentially never seen.

**Also note the allele-frequency asymmetry:** two-thirds of all X chromosomes in a population are in females and one-third in males, so **selection against an X-linked recessive acts on a third of the copies immediately** (all the male ones are exposed) rather than the tiny fraction exposed for an autosomal recessive ([general-biology 4.2](../../general-biology/lessons/04-02-evolution-in-populations.md)). X-linked recessives are therefore purged from populations far faster than autosomal ones of equal severity.

**The pseudoautosomal regions.** The X and Y do share small homologous regions at their tips, which pair and recombine in male meiosis — this is mechanically necessary, since the two must pair to segregate properly. Genes there are inherited **autosomally**, which is a real exception to everything above and a standard exam trap.

## Picture

![The two reciprocal crosses drawn side by side with X and Y chromosomes explicitly shown. In the first, a white-eyed mother crossed to a red-eyed father gives all red daughters and all white sons, with arrows tracing the mother's X to her sons and the father's X to his daughters, labelled criss-cross inheritance. In the second, the reciprocal cross gives all red offspring. Below, a female embryo cell dividing with random X inactivation producing two clonal patches, illustrated as a calico coat.](assets/02-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — predict both reciprocal crosses).** In cats, the orange-coat gene is X-linked: $X^{O}$ gives orange, $X^{o}$ gives black, and the heterozygote $X^{O}X^{o}$ is **calico** (patched orange and black). (a) Cross an orange female to a black male. (b) Cross a black female to an orange male. (c) Explain why calico cats are essentially always female, and what a rare calico male implies.

(a) $X^{O}X^{O} \times X^{o}Y$:

$$\text{daughters } X^{O}X^{o} = \textbf{all calico}, \qquad \text{sons } X^{O}Y = \textbf{all orange}.$$

(b) $X^{o}X^{o} \times X^{O}Y$:

$$\text{daughters } X^{O}X^{o} = \textbf{all calico}, \qquad \text{sons } X^{o}Y = \textbf{all black}.$$

**Note the asymmetry:** the daughters are the same in both crosses, but the sons are opposite — sons show their mother's allele. That is criss-cross inheritance seen in one comparison.

(c) Calico requires **two different alleles at the orange locus**, hence two X chromosomes, hence a female. It also requires X-inactivation to produce the patches; a hypothetical female with one X per cell would be uniformly one colour.

A calico **male** must therefore have at least two X's — most often $XXY$ (**Klinefelter syndrome**, from a nondisjunction event, [2.4](02-04-chromosomal-mutations.md)), occasionally a chimaera formed by fusion of two embryos, or a somatic mosaic. Such cats are typically sterile. **A single phenotype in a single animal thus diagnoses a chromosomal abnormality**, which is a nice demonstration that karyotype and coat colour are not independent observations.

**Example 2 (why you'd care — Queen Victoria and the arithmetic of a royal pedigree).** Haemophilia A is X-linked recessive with a population allele frequency of about $q = 1\times10^{-4}$. Queen Victoria was a carrier; neither of her parents was affected and there is no family history. (a) Estimate how often a carrier arises by new mutation rather than by inheritance. (b) Her daughter Alice was unaffected — what was Alice's carrier probability, before any of her children were born? (c) Alice had one affected son and two carrier daughters out of seven children. Comment on whether that is consistent.

(a) At mutation–selection balance for an X-linked recessive, the allele is exposed to selection in every male, so it is purged efficiently and a large fraction of cases are new mutations. Quantitatively, for a lethal or near-lethal X-linked recessive the expected fraction of affected individuals arising from **new mutation** is $\tfrac13$ — because a third of the population's X chromosomes are in males, where the allele is removed each generation, and mutation must replace exactly what selection removes. (Haldane's 1935 result, and the reasoning is developed properly in [evolution-ecology 1.5](../../evolution-ecology/lessons/01-05-mutation-balance-of-forces.md).)

For Victoria specifically, with no family history at all, a **new mutation in one of her parents' germ lines** is by far the most likely explanation — most probably in her father Edward, who was 51 at her conception, since paternal germline mutation rate rises steeply with age.

(b) Victoria was $X^{H}X^{h}$; Alice received one of those two X's at random:

$$P(\text{Alice is a carrier}) = \mathbf{\tfrac12},$$

with no further evidence available at that point — carrier females are unaffected, so being unaffected is not evidence either way.

(c) A carrier mother married to an unaffected man gives each child:

$$\tfrac14 \text{ affected son}, \quad \tfrac14 \text{ unaffected son}, \quad \tfrac14 \text{ carrier daughter}, \quad \tfrac14 \text{ unaffected daughter}.$$

Expected in seven children: 1.75 of each class. Observed: 1 affected son, 2 carrier daughters, and four others. **Entirely consistent** — with $n = 7$ the sampling noise is large, and a $\chi^2$ against $1{:}1{:}1{:}1$ would not come close to significance.

**The historically interesting part is what happened next.** Alice's carrier daughters married into the Russian and Prussian royal houses, and the allele reached the Tsarevich Alexei — whose haemophilia brought Rasputin to the Russian court. **A single X-linked recessive allele, arising by mutation in one German duke's germ line around 1818, propagated through exactly the pattern this lesson predicts**: silent through carrier daughters, expressed in sons, and invisible to anyone reading a pedigree of affected individuals alone.

## Watch out

- **You might write a male's X-linked genotype as a homozygote.** He is **hemizygous** — $X^{w}Y$, not $ww$. The notation matters because it is what reminds you he has no second copy to mask anything.
- **You might expect reciprocal crosses to agree.** For autosomal genes they do; for X-linked (and mitochondrial) genes they do not, and that disagreement is the diagnostic test.
- **You might assume the male is always heterogametic.** In birds, butterflies and snakes the **female** is ZW, so every pedigree signature is mirrored — Z-linked recessives are commoner in females.
- **You might think X-inactivation makes carrier females phenotypically normal.** It makes them **mosaics**, and skewed inactivation produces symptomatic carriers. It also means a carrier's tissues genuinely differ from each other.
- **You might forget the pseudoautosomal regions.** Genes at the X and Y tips pair, recombine, and are inherited autosomally — a real exception with real examples (short stature homeobox *SHOX*).

## One-liner

> Reciprocal crosses disagree only when the gene is on a sex chromosome, so one white-eyed fly proved genes ride chromosomes — and hemizygous males show whatever their single X carries, which is why X-linked recessives are a male disease with female carriers.

## Problems

**P1 (🟢)** In *Drosophila*, vestigial wings ($vg$) is autosomal recessive and white eyes ($w$) is X-linked recessive. Predict the $F_1$ of: (a) vestigial female × wild-type male; (b) wild-type female × vestigial male; (c) white-eyed female × red-eyed male; (d) red-eyed female × white-eyed male. Which pair of crosses shows the diagnostic asymmetry, and why?

**P2 (🟡)** Red-green colour blindness is X-linked recessive with $q = 0.08$ in a population. (a) What fraction of males and of females are affected? (b) What fraction of females are carriers? (c) A colour-blind man marries a woman from this population with no family history. What is the probability their first son is colour blind? Their first daughter?

**P3 (🔴, bridges to 2.4 and to evolution)** A rare X-linked recessive lethal condition kills affected males before reproduction. (a) Explain why the allele frequency in the population cannot reach equilibrium through inheritance alone, and state where the replacement copies come from. (b) Derive the fraction of affected boys expected to be new mutations, given that a fraction $\tfrac13$ of X chromosomes are in males and mutation must exactly balance selection at equilibrium. (c) A mother of an affected boy is tested and found **not** to carry the mutation in her blood cells, yet she has a second affected son by a different father. Explain, and name the phenomenon.

<details>
<summary>Solutions</summary>

**P1 (a)** Autosomal: $vg/vg \times +/+$ gives **all $F_1$ wild-type**, both sexes.

**(b)** $+/+ \times vg/vg$ gives **all $F_1$ wild-type**, both sexes — **identical to (a)**.

**(c)** $X^{w}X^{w} \times X^{+}Y$: **daughters all red** ($X^{+}X^{w}$), **sons all white** ($X^{w}Y$).

**(d)** $X^{+}X^{+} \times X^{w}Y$: **all offspring red** — daughters $X^{+}X^{w}$, sons $X^{+}Y$.

**The X-linked pair (c) and (d) shows the asymmetry.** The autosomal pair (a) and (b) is symmetric because each parent contributes one autosome of each pair regardless of sex. For the X-linked gene, sons receive their only X from their mother, so the mother's allele is expressed in sons without any possibility of masking — and reversing which parent carries the allele therefore reverses which offspring show it.

**P2 (a)** $$P(\text{affected male}) = q = \mathbf{0.08} \ (8\ \text{percent}), \qquad P(\text{affected female}) = q^{2} = \mathbf{0.0064} \ (0.64\ \text{percent}).$$

A ratio of $1/q = 12.5$ affected males per affected female.

**(b)** $$P(\text{carrier female}) = 2pq = 2(0.92)(0.08) = \mathbf{0.147} \ (14.7\ \text{percent}).$$

Note that carriers outnumber affected females 23-fold — the same carriers-versus-affected lopsidedness as any recessive ([general-biology 4.2](../../general-biology/lessons/04-02-evolution-in-populations.md)), and the reason colour-blindness alleles persist so readily.

**(c)** Her genotype is unknown; from the population she is $X^{+}X^{+}$ with probability $p^2 = 0.846$, a carrier with probability $2pq = 0.147$, and affected with probability $q^2 = 0.0064$. Take her to be unaffected (stated implicitly), so renormalize over the first two:

$$P(\text{carrier} \mid \text{unaffected}) = \frac{0.147}{0.147 + 0.846} = 0.148 .$$

*Son:* a son gets his X from his mother only; the father's colour blindness is irrelevant to sons.

$$P(\text{colour-blind son}) = 0.148 \times \tfrac12 = \mathbf{0.074}.$$

*Daughter:* she gets $X^{c}$ from her father with certainty, so she is affected exactly when she also gets $X^{c}$ from her mother:

$$P(\text{colour-blind daughter}) = 0.148 \times \tfrac12 = \mathbf{0.074}.$$

**The two are equal here, which is worth noticing** — an affected father raises his daughters' risk to the same level as his sons', because he guarantees one of their two copies. This is the general rule that affected fathers make carrier daughters, and it is why X-linked disease can appear to jump sexes in a single generation.

**P3 (a)** Every copy of the allele that lands in a male is expressed and removed (the male dies before reproducing), and a third of all X chromosomes in the population are in males. So each generation, roughly a third of the existing copies are eliminated by selection. Inheritance alone can only pass on copies that already exist and is a strictly losing proposition here — the frequency would decline to zero. The replacement copies come from **new mutation** in the germ line.

**(b)** At equilibrium, the number of copies removed by selection must equal the number added by mutation.

Let the allele frequency be $q$ and suppose a fraction $\tfrac13$ of the X chromosomes are in males, where the allele is fully exposed and removed. Copies lost per generation:

$$\text{lost} = \tfrac13 q \times (\text{total X chromosomes}).$$

Now count affected boys. Affected boys arise either by inheriting an existing copy from a carrier mother, or from a new mutation. At equilibrium the new mutations must exactly replace the losses, and the losses are precisely the affected boys themselves. Writing $\mu$ for the mutation rate per X per generation, equilibrium requires

$$\underbrace{\tfrac13 q}_{\text{removed}} = \underbrace{\mu}_{\text{added}} \quad\Longrightarrow\quad q = 3\mu .$$

An affected boy's X is a new mutation with probability $\mu / q$:

$$\frac{\mu}{q} = \frac{\mu}{3\mu} = \boxed{\tfrac13}$$

**One-third of affected boys with a lethal X-linked recessive carry a brand-new mutation** and have a non-carrier mother. This is Haldane's result, and it has a direct clinical consequence: **a mother of an affected boy has only about a two-thirds prior probability of being a carrier**, so a first affected child in a family with no history is genuinely uninformative about recurrence risk until she is tested.

**(c)** She is a **germline mosaic** (gonadal mosaicism). The mutation arose in one of her own primordial germ cells during her embryonic development, so a fraction of her oocytes carry it while her somatic tissues — including the blood cells that were sequenced — do not.

The second affected son by a different father confirms it: the mutation must be coming from her, and a *de novo* event in two independent conceptions is far too unlikely.

**Clinically this is a serious matter.** A negative maternal blood test is standardly reported as "not a carrier, recurrence risk is the population risk," and germline mosaicism makes that wrong — recurrence risk for a mosaic mother can be several percent, since it is set by the fraction of her germ line carrying the mutation. It is the reason such families are counselled on the possibility rather than fully reassured, and it is why prenatal testing may still be offered after a negative maternal result. (Germline mosaicism is well documented in Duchenne muscular dystrophy and osteogenesis imperfecta, with recurrence risks in the range of 5–15 percent.)

</details>

## Flashback

**From Lesson 1.4 (Bayes and the $\tfrac23$ rule):** Phenylketonuria is autosomal recessive. A man's brother is affected; their parents are unaffected. He marries a woman whose carrier risk is $1/50$. They have three unaffected children. (a) What was his prior carrier probability? (b) Compute the posterior probability that both are carriers. (c) What is the risk to a fourth child?

<details>
<summary>Solution</summary>

**(a)** His parents are obligate carriers, and he is unaffected, so by the $\tfrac23$ rule: $P = \mathbf{\tfrac23}$.

**(b)** Joint prior that both are carriers:

$$\tfrac23 \times \tfrac1{50} = \tfrac{2}{150} = 0.01333 .$$

| | both carriers | not both |
|---|---|---|
| Prior | 0.01333 | 0.98667 |
| $P(\text{3 unaffected}\mid H)$ | $(3/4)^3 = 0.4219$ | 1 |
| Joint | 0.005625 | 0.98667 |
| **Posterior** | $\dfrac{0.005625}{0.99229} = \mathbf{0.00567}$ | 0.99433 |

**(c)** $$P(\text{fourth child affected}) = 0.00567 \times \tfrac14 = \mathbf{0.00142}, \ \text{about 1 in 705}.$$

Without the three unaffected children the estimate would have been $\tfrac23 \times \tfrac1{50} \times \tfrac14 = 0.00333$, about 1 in 300 — so the evidence cuts the risk by a factor of 2.4.

</details>

## Connections

- **Backward:** [general-biology 2.5](../../general-biology/lessons/02-05-mitosis-meiosis.md) supplied the meiotic behaviour that the chromosome theory identifies with Mendel's laws; [1.4](01-04-pedigrees-human-inheritance.md) gave the pedigree signatures this lesson now explains mechanistically.
- **Forward:** [2.2](02-02-linkage-recombination.md) asks what happens to genes on the *same* chromosome; [2.4](02-04-chromosomal-mutations.md) covers nondisjunction, which is what produced the calico male.
- **Sideways:** X-inactivation as chromatin is [molecular-cell-biology 4.1](../../molecular-cell-biology/lessons/04-01-chromatin-packaging-regulation.md) and as an inheritance pattern is [3.5](03-05-eukaryotic-regulatory-logic-epigenetics.md); the mutation–selection balance behind Haldane's one-third is [evolution-ecology 1.5](../../evolution-ecology/lessons/01-05-mutation-balance-of-forces.md).
