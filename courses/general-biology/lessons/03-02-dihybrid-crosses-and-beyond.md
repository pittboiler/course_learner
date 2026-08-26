# General Biology · Lesson 3.2: Dihybrid crosses & beyond

> ⏱ ~15 min · Module 3: Genetics & the central dogma · Builds on: [3.1](03-01-mendel-monohybrid-cross.md), [2.5](02-05-mitosis-meiosis.md) · Unlocks: 3.3 (DNA structure and replication)

## Why this matters

Mendel's second law — that two traits are inherited independently — is the one that fails most often. Understanding *when* it fails, and why, is what turns genetics from a set of ratios into a tool: linkage is how genes were mapped to chromosomes decades before anyone could sequence anything.

This lesson also collects the exceptions to simple dominance. They matter because Mendel's clean cases are the minority. He chose seven traits in peas that happened to behave simply, and it was a piece of good fortune as much as good judgement.

## The idea

**Two genes at once.** Follow two traits — say seed shape and seed colour — through a cross of two double heterozygotes. If the two genes behave independently, each one on its own still gives Mendel's 3:1, and the combinations multiply:

$$\left(\tfrac34 : \tfrac14\right) \times \left(\tfrac34 : \tfrac14\right) \;\Longrightarrow\; \tfrac{9}{16} : \tfrac{3}{16} : \tfrac{3}{16} : \tfrac{1}{16}$$

That's the famous **9:3:3:1**. Notice it is not a new fact — it is 3:1 twice, multiplied, which is the whole content of independence.

**And this too is meiosis.** Independent assortment is metaphase I: each homologous pair orients toward the poles independently of every other pair ([2.5](02-05-mitosis-meiosis.md)). Which member of pair 1 goes left tells you nothing about pair 2.

**Which is exactly why it fails for genes on the same chromosome.** If two genes sit on the same chromosome, they travel together — they cannot assort independently, because there is only one chromosome to send in one direction. They are **linked**.

Linkage is not absolute, and the reason is crossing over. During prophase I, homologues swap segments, and a crossover between two linked genes separates them. The chance of that happening depends on how far apart they are: **distant genes are separated often, close genes rarely**. So the recombination frequency measures distance — and that observation, made by Sturtevant as an undergraduate in 1911, is the origin of genetic mapping.

**Beyond simple dominance.** Mendel's other assumption is that one allele completely masks the other. Often it doesn't:

- Sometimes the heterozygote is genuinely **intermediate** — red and white give pink. This is *not* blending, because the alleles are still intact and separable: cross two pinks and you get reds and whites back.
- Sometimes **both alleles show fully and separately** — the AB blood group expresses both A and B antigens, not a blend.
- Sometimes a gene has **more than two alleles** in the population, even though any individual carries only two.
- Sometimes **one gene affects many traits**, or **many genes affect one trait**.

None of these break Mendel's laws about *transmission*. Alleles still segregate and still assort; what varies is how the genotype is expressed as a phenotype.

## The formal version

**Mendel's second law — independent assortment.** Alleles of different genes segregate independently of one another during gamete formation.

*In words: a heterozygote *RrYy* makes four gamete types — *RY*, *Ry*, *rY*, *ry* — in equal proportions.* This is metaphase I orientation ([2.5](02-05-mitosis-meiosis.md)). See [law of independent assortment](../reference.md#law-of-independent-assortment).

**The dihybrid cross** $RrYy \times RrYy$ gives a 4×4 Punnett square with 16 boxes:

$$\mathbf{9}\ R\_Y\_ : \mathbf{3}\ R\_yy : \mathbf{3}\ rrY\_ : \mathbf{1}\ rryy$$

(where an underscore means "either allele"). Checking each gene separately: $9+3 = 12$ round to $3+1 = 4$ wrinkled, which is 3:1 ✓, and likewise 12 yellow to 4 green ✓.

**Use the multiplication rule, not the square.** For more than two genes the Punnett square becomes unusable — three genes need 64 boxes, four need 256. Instead treat each gene independently and multiply:

$$P(\text{round and yellow}) = P(\text{round})\times P(\text{yellow}) = \tfrac34\times\tfrac34 = \tfrac9{16}$$

For $AaBbCc \times AaBbCc$, the probability of $A\_bbC\_$ is $\tfrac34 \times \tfrac14 \times \tfrac34 = \tfrac9{64}$ — three multiplications instead of a 64-box grid.

**Linkage.** Genes on the same chromosome violate independent assortment. Define

$$\text{recombination frequency} = \frac{\text{number of recombinant offspring}}{\text{total offspring}}$$

| RF | Interpretation |
|---|---|
| 50 percent | unlinked — different chromosomes, or so far apart on one that crossovers always intervene |
| between 0 and 50 percent | **linked**, and the value measures distance |
| near 0 | very tightly linked, almost always inherited together |

**The mapping trick:** define $1$ **map unit** (centimorgan) as $1$ percent recombination frequency. Then RF values are additive over short distances, so measuring pairwise frequencies for three genes fixes their order and spacing on the chromosome. See [recombination frequency](../reference.md#recombination-frequency).

**Why 50 percent is the ceiling:** with enough distance between two genes, at least one crossover occurs between them in essentially every meiosis, and the outcome becomes as random as if they were on different chromosomes. **You cannot distinguish "very far apart on the same chromosome" from "on different chromosomes" by breeding alone.**

**The exceptions to simple dominance:**

| Pattern | Heterozygote shows | Example | $F_2$ ratio |
|---|---|---|---|
| **Complete dominance** | the dominant phenotype | pea flower colour | 3 : 1 |
| **Incomplete dominance** | an intermediate | snapdragon: red × white → pink | **1 : 2 : 1** |
| **Codominance** | *both* phenotypes, fully and separately | AB blood type; roan cattle | 1 : 2 : 1 |
| **Multiple alleles** | (population-level) more than two variants exist | ABO blood group: $I^A$, $I^B$, $i$ | varies |
| **Pleiotropy** | one gene, many traits | sickle-cell allele | varies |
| **Polygenic** | many genes, one continuous trait | height, skin colour | bell curve |

**Incomplete dominance and codominance both give 1:2:1** — because the heterozygote is now visibly distinct, phenotype ratio equals genotype ratio. The difference is *what* the heterozygote looks like: intermediate (incomplete) versus both at once (codominant). A pink snapdragon is intermediate; an AB blood type is not a blend of A and B but genuinely both.

**The ABO system uses both mechanisms at once**, which is why it is the standard example: $I^A$ and $I^B$ are **codominant** with each other, while both are **completely dominant** over $i$. Three alleles, six genotypes, four phenotypes.

## Picture

![A four by four Punnett square for a cross between two double heterozygotes RrYy, with the sixteen genotypes shaded by phenotype, giving nine round yellow, three round green, three wrinkled yellow and one wrinkled green, and a note that each gene taken separately still shows the three to one ratio](assets/03-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — skip the square).** In a cross $AaBbCc \times AaBbCc$, what fraction of offspring show the dominant phenotype for all three traits? What fraction are homozygous recessive for all three?

Treat each gene independently and multiply.

*All three dominant.* Each gene independently gives $\tfrac34$:

$$\left(\tfrac34\right)^3 = \frac{27}{64} \approx 42\ \text{percent}.$$

*All three homozygous recessive.* Each gene independently gives $\tfrac14$:

$$\left(\tfrac14\right)^3 = \frac{1}{64} \approx 1.6\ \text{percent}.$$

**A 64-box Punnett square would give the same answer and take an hour.** The multiplication rule is not a shortcut but the correct way to think about independence — the square is just an enumeration of it.

*Check.* The eight phenotype classes must sum to 1. They come in the pattern $(3/4 \text{ or } 1/4)^3$, giving $27 + 9 + 9 + 9 + 3 + 3 + 3 + 1 = 64$ sixty-fourths ✓.

**Example 2 (why you'd care — mapping a chromosome by counting offspring).** Three genes are known to be linked. Test crosses give these recombination frequencies:

$$\text{RF}(A,B) = 12\%, \qquad \text{RF}(B,C) = 7\%, \qquad \text{RF}(A,C) = 19\%.$$

Where are the genes?

Treat RF as distance in map units. The largest value identifies the outermost pair, so *A* and *C* are the ends and *B* lies between them. Check additivity:

$$12 + 7 = 19 \quad\checkmark$$

$$\text{A}\ \underbrace{\rule{2.2cm}{0pt}}_{12\ \text{m.u.}}\ \text{B}\ \underbrace{\rule{1.4cm}{0pt}}_{7\ \text{m.u.}}\ \text{C}$$

**This is genetic mapping, and it is remarkable what it achieves.** With no microscope capable of resolving a gene and no way to read DNA, counting offspring phenotypes locates genes in linear order along a chromosome and assigns them quantitative spacing. Sturtevant did the first such map in 1911 for six *Drosophila* genes; the resulting order matched, decades later, the order found by sequencing.

**Two caveats worth carrying:**

- **Additivity breaks over long distances.** A double crossover between two distant genes returns them to their original arrangement, so it goes uncounted and RF *underestimates* true distance. That is why measured RFs saturate at 50 percent and why maps are built from many short intervals rather than a few long ones.
- **Map units are not physical distance.** Crossovers are not uniformly likely along a chromosome — they are suppressed near centromeres and elevated in hotspots — so one centimorgan corresponds to different numbers of base pairs in different regions.

## Watch out

- **You might apply independent assortment to linked genes.** It holds only for genes on *different* chromosomes (or very far apart on one). Mendel's seven pea traits happened to fall on different chromosomes or far apart — genuinely lucky, since peas have only seven chromosome pairs.
- **You might read incomplete dominance as the blending model returning.** It isn't. Pink snapdragons crossed together give red, pink and white in 1:2:1 — the alleles were carried intact and re-emerge unchanged. Blending predicts pink forever.
- **You might confuse incomplete dominance with codominance.** Incomplete gives a genuine intermediate (pink). Codominant gives both phenotypes fully and separately (AB blood expresses A antigens *and* B antigens; roan cattle have red hairs and white hairs, not pink ones).
- **You might think multiple alleles means an individual has more than two.** A diploid individual carries exactly two alleles of any gene. "Multiple alleles" describes the variety present in the *population*.
- **You might expect an RF above 50 percent.** It cannot exceed 50 percent. That value means "independent," and further distance cannot make two genes more than independent.

## One-liner

> Two genes give 9:3:3:1 when they assort independently — which is metaphase I orientation — and when they don't, the recombination frequency measures how far apart they sit on the chromosome.

## Problems

**P1 (🟢)** In a cross $RrYy \times RrYy$, what fraction of offspring are round and green? What fraction are wrinkled and yellow? (*R* = round dominant, *Y* = yellow dominant.)

**P2 (🟡)** In snapdragons, red (*C^R*) and white (*C^W*) show incomplete dominance, with heterozygotes pink. Cross two pink flowers and give the genotype and phenotype ratios. Explain why this is not evidence for blending inheritance.

**P3 (🔴)** Two genes are on the same chromosome, 20 map units apart. A test cross of a double heterozygote produces 1000 offspring. How many of each of the four phenotype classes do you expect? Contrast with the result if the genes were unlinked.

<details>
<summary>Solutions</summary>

**P1** Treat each gene separately and multiply.

*Round and green:* round is dominant ($\tfrac34$), green is homozygous recessive ($\tfrac14$):

$$\tfrac34 \times \tfrac14 = \frac{3}{16} \approx 19\ \text{percent}.$$

*Wrinkled and yellow:* wrinkled is homozygous recessive ($\tfrac14$), yellow is dominant ($\tfrac34$):

$$\tfrac14 \times \tfrac34 = \frac{3}{16} \approx 19\ \text{percent}.$$

*Check.* These are the two "3" classes of 9:3:3:1 ✓, and all four sum correctly: $\tfrac9{16}+\tfrac3{16}+\tfrac3{16}+\tfrac1{16} = 1$ ✓.

**P2** The cross is $C^RC^W \times C^RC^W$.

| | ***C^R*** | ***C^W*** |
|---|---|---|
| ***C^R*** | $C^RC^R$ red | $C^RC^W$ pink |
| ***C^W*** | $C^RC^W$ pink | $C^WC^W$ white |

$$\text{Genotype: } 1 : 2 : 1, \qquad \text{Phenotype: } \mathbf{1\ red : 2\ pink : 1\ white}$$

**Genotype and phenotype ratios are identical**, because each genotype now has its own distinguishable appearance — there is no masking, so nothing is hidden.

**Why this is not blending.** The blending model says hereditary material physically mixes and is thereafter inseparable — pink parents should give only pink offspring, and the red and white variants should be gone for good. Instead, **red and white reappear intact** in the next generation, each in a quarter of the offspring. The alleles were never mixed; they were carried side by side in the heterozygote and separated cleanly at meiosis, exactly as [3.1](03-01-mendel-monohybrid-cross.md)'s law of segregation requires.

*Check.* The distinguishing test is precisely the reappearance ✓. Incomplete dominance concerns how a genotype is *expressed* — a heterozygote making roughly half the normal pigment looks intermediate — and says nothing about how alleles are *transmitted*. Mendel's laws are laws of transmission and are untouched.

**P3** A **test cross** means crossing the double heterozygote with a homozygous recessive, so the offspring's phenotypes report the heterozygous parent's gametes directly.

**Linked, 20 map units apart.** RF = 20 percent means 20 percent of gametes are recombinant and 80 percent parental, split evenly within each category:

| Class | Fraction | Count of 1000 |
|---|---|---|
| Parental type 1 | 40% | **400** |
| Parental type 2 | 40% | **400** |
| Recombinant type 1 | 10% | **100** |
| Recombinant type 2 | 10% | **100** |

**Unlinked.** Independent assortment gives all four gamete types equally:

| Class | Fraction | Count of 1000 |
|---|---|---|
| Each of the four | 25% | **250** each |

**The contrast is the diagnostic.** Linkage shows up as a large excess of the two **parental** combinations — the allele pairings the heterozygous parent itself inherited — over the two recombinant ones. Unlinked genes give a flat 1:1:1:1. Seeing 400/400/100/100 rather than 250×4 is how you detect linkage, and the 20 percent recombinant total is how you measure the distance.

*Check.* Both distributions sum to 1000 ✓. Sanity on the limits: as RF → 50 percent the linked table converges to 250 each, correctly becoming indistinguishable from unlinked ✓; as RF → 0 it converges to 500/500/0/0, the genes always travelling together ✓.

</details>

## Flashback

**From Lesson 3.1 (Mendel & the monohybrid cross):** A dominant-phenotype individual could be homozygous or heterozygous. Describe the cross that distinguishes them and the expected outcome in each case.

<details>
<summary>Solution</summary>

Perform a **test cross** against a **homozygous recessive** individual (*bb*).

The recessive parent contributes only *b* gametes, so each offspring's phenotype is determined entirely by which allele came from the unknown parent — the offspring read out the unknown's gametes directly.

- If the unknown is **BB**: every gamete carries *B*, so **all offspring are dominant**. No recessive offspring ever appear.
- If the unknown is **Bb**: half the gametes carry *b*, so **about half the offspring show the recessive phenotype**.

*Check.* The same principle runs through this lesson's P3 — a test cross is used there for exactly the same reason, to make the offspring's phenotypes a direct readout of one parent's gametes ✓. It is the standard move whenever you need to see a genotype through a phenotype.

</details>

## Connections

- **Backward:** independent assortment is [2.5](02-05-mitosis-meiosis.md)'s metaphase I orientation, and linkage is what happens when two genes ride the same chromosome; the 3:1 that gets squared is [3.1](03-01-mendel-monohybrid-cross.md)'s.
- **Forward:** [3.3](03-03-dna-structure-replication.md) and [3.4](03-04-central-dogma.md) explain what an allele physically is and why one version can be recessive; [4.2](04-02-evolution-in-populations.md) tracks allele frequencies through whole populations.
- **Sideways (probability):** the multiplication rule for independent events is doing all the work in Example 1, and recombination frequency is an estimated proportion with sampling error — see [`prob-stat-refresher` 4.2](../../prob-stat-refresher/lessons/04-02-confidence-intervals.md) for how many offspring you need to distinguish 45 percent from 50 percent.
