# General Biology · Lesson 2.5: Mitosis & meiosis

> ⏱ ~15 min · Module 2: Energy, metabolism & cell division · Builds on: [2.4](02-04-the-cell-cycle.md) · Unlocks: 3.1 (Mendel and the monohybrid cross)

## Why this matters

Two divisions, two completely different purposes. Mitosis makes copies — it is how you grew from one cell and how you replace 300 billion cells a day. Meiosis makes *variation*, and it is the reason no two siblings are alike and the reason sexual reproduction exists at all.

This lesson is also the hinge into genetics. Mendel's ratios ([3.1](03-01-mendel-monohybrid-cross.md)) look like arbitrary numerology until you know what happens to chromosomes in meiosis, at which point they become inevitable. **Meiosis is the mechanism; Mendel's laws are its consequences** — and he discovered the consequences forty years before anyone saw the mechanism.

## The idea

**Mitosis: make two identical cells.** The cell has already copied its DNA in S phase ([2.4](02-04-the-cell-cycle.md)), so each chromosome is two joined sister chromatids. Mitosis lines them all up, splits every pair, and drags one of each to opposite ends. Two daughters result, each with the full chromosome number and identical genetic content.

The key structural fact is what *doesn't* happen: **homologous chromosomes never pair up**. Your maternal chromosome 7 and your paternal chromosome 7 are both present and both get copied and separated, but they ignore each other completely. Nothing is mixed. That is exactly what you want for growth and repair — a liver cell should make more liver cells, not experiments.

**Meiosis: make four different cells with half the chromosomes.** Two problems have to be solved at once.

*The counting problem.* If a sperm with 46 chromosomes fertilized an egg with 46, the child would have 92, and their children 184. The number has to be halved somewhere, and meiosis is where.

*The variation problem.* Halving alone could be done mechanically, always giving the same half. Meiosis instead halves *randomly and with mixing*, so every gamete is different.

Meiosis achieves both with **one round of DNA replication followed by two rounds of division**. The first division separates homologous *pairs* — this is the one that halves the count, and it has no counterpart in mitosis. The second division separates sister chromatids, and looks much like mitosis.

**Three sources of variation, and they compound.**

1. **Crossing over.** In meiosis I, homologous chromosomes pair up physically and swap matching segments. The chromosome your child inherits is a *mosaic* of your mother's and your father's — not either one intact.
2. **Independent assortment.** When the pairs line up, which member of each pair faces which pole is decided independently for every pair. With 23 pairs that alone gives $2^{23}$ possible gametes.
3. **Random fertilization.** Any of one parent's gametes may meet any of the other's.

**That is the answer to why sex exists.** Producing offspring sexually is expensive — you pass on only half your genes, and you need a partner. The payoff is variation, and variation is the raw material that selection acts on ([4.1](04-01-natural-selection.md)). An asexual lineage is a single genotype betting that the environment will not change.

## The formal version

**Vocabulary**, and it must be precise:

| Term | Meaning |
|---|---|
| **Homologous chromosomes** | a matching pair, one from each parent — same genes, possibly different alleles |
| **Sister chromatids** | the two identical copies of one chromosome after replication, joined at the centromere |
| **Diploid (2n)** | two of each chromosome — human somatic cells, 2n = 46 |
| **Haploid (n)** | one of each — human gametes, n = 23 |
| **Gamete** | a haploid reproductive cell (sperm or egg) |
| **Zygote** | the diploid cell formed when two gametes fuse |

**Sister chromatids are identical; homologues are not.** Sisters came from copying one chromosome moments ago. Homologues came from two different parents and may carry different alleles at the same gene. Almost every confusion in this lesson traces back to blurring those two.

**Mitosis, in four phases** (after interphase):

| Phase | What happens |
|---|---|
| **Prophase** | chromosomes condense; nuclear envelope breaks down; spindle forms |
| **Metaphase** | chromosomes line up **single file** on the cell's midline |
| **Anaphase** | centromeres split; sister chromatids are pulled to opposite poles |
| **Telophase** | nuclei re-form; chromosomes decondense |

Then **cytokinesis** divides the cytoplasm — by a pinching contractile ring in animals, by building a new cell plate in plants (which have a wall in the way).

**Meiosis, in two rounds:**

*Meiosis I — the reduction division, and the one that differs.*

| Phase | What happens |
|---|---|
| **Prophase I** | homologues **pair up** (synapsis) and **cross over**, exchanging segments |
| **Metaphase I** | homologous **pairs** line up — two abreast, not single file |
| **Anaphase I** | **homologues separate**; sister chromatids stay together |
| **Telophase I** | two haploid cells, each chromosome still two chromatids |

*Meiosis II — mechanically like mitosis, with no DNA replication first.* Sister chromatids separate, giving **four haploid cells**.

**The single most useful contrast:** in **anaphase I** homologues separate; in **anaphase II** (and in mitotic anaphase) sisters separate. If you remember only one thing, remember that.

**Side by side:**

| | Mitosis | Meiosis |
|---|---|---|
| Divisions | 1 | 2 |
| Daughters | 2 | 4 |
| Chromosome number | unchanged (2n → 2n) | **halved** (2n → n) |
| Genetically | identical to parent | all four different |
| Homologues pair? | **no** | yes, in prophase I |
| Crossing over? | no | yes |
| Purpose | growth, repair, asexual reproduction | gametes |

**Counting the variation.** Independent assortment alone gives $2^n$ gamete types for $n$ chromosome pairs:

$$2^{23} = 8{,}388{,}608\ \text{possible gametes per person}$$

Two parents combining gives $(2^{23})^2 \approx 7.0\times10^{13}$ — about **70 trillion** genetically distinct children, **before** crossing over is counted. Crossing over makes the true number effectively unbounded, since the crossover points vary continuously. See [sources of genetic variation](../reference.md#sources-of-genetic-variation).

## Picture

![Mitosis and meiosis compared for a cell with four chromosomes: mitosis performs one division giving two identical diploid daughters, while meiosis performs two divisions - the first separating homologous pairs after they cross over, the second separating sister chromatids - giving four genetically distinct haploid gametes](assets/02-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — track a cell through both).** A cell has 2n = 8. Give the number of cells, chromosomes per cell, and chromatids per cell at each stage.

*Mitosis:*

| Stage | Cells | Chromosomes each | Chromatids each |
|---|---|---|---|
| G1 | 1 | 8 | 8 |
| After S | 1 | 8 | 16 |
| After mitosis | **2** | **8** | 8 |

*Meiosis:*

| Stage | Cells | Chromosomes each | Chromatids each |
|---|---|---|---|
| G1 | 1 | 8 | 8 |
| After S | 1 | 8 | 16 |
| After meiosis I | **2** | **4** | 8 |
| After meiosis II | **4** | **4** | 4 |

**The reduction happens at meiosis I, not meiosis II.** After the first division each cell already has 4 chromosomes — it is haploid — but each chromosome still has two chromatids. Meiosis II just tidies that up.

*Check.* Total chromatid count is conserved across each division: 16 before mitosis, 8 in each of 2 daughters ✓; 16 before meiosis I, 8 in each of 2 cells, then 4 in each of 4 ✓.

**Example 2 (why you'd care — nondisjunction).** If chromosomes fail to separate properly, a gamete gets the wrong number. This is **nondisjunction**, and it is the leading cause of chromosomal disorders.

*What goes wrong.* In anaphase I a homologous pair fails to separate, or in anaphase II sister chromatids fail to. Either way some gametes get an extra chromosome and others get none.

*Result after fertilization.* An n+1 gamete meeting a normal one gives a **trisomic** zygote (2n+1); an n−1 gamete gives a **monosomic** one (2n−1). Trisomy 21 — three copies of chromosome 21 — produces Down syndrome. Most other autosomal trisomies are not viable, since chromosome 21 is the smallest human autosome and carries the fewest genes to be over-dosed.

*The maternal-age effect, and why it exists.* The risk of trisomy 21 rises from roughly 1 in 1400 at maternal age 20 to about 1 in 100 at 40. The reason is a striking piece of biology: **human oocytes begin meiosis before birth and then arrest in prophase I**, staying suspended there for decades until ovulation. An egg released at 40 has been holding its homologues paired, with its spindle-attachment proteins slowly degrading, for forty years. The cohesion holding chromosomes together decays with time, so separation errors become more likely.

Sperm show no comparable effect, because spermatogenesis runs continuously from puberty and each sperm's meiosis takes about 64 days start to finish. **The asymmetry is not about age as such; it is about how long a cell has been sitting mid-division** — a direct consequence of the timing described above, and a good example of a clinical fact that is only explicable from mechanism.

## Watch out

- **You might confuse sister chromatids with homologous chromosomes.** Sisters are identical copies made in S phase; homologues are the maternal and paternal versions of the same chromosome and can carry different alleles. Mitosis separates sisters; meiosis I separates homologues.
- **You might think meiosis II halves the chromosome number.** Meiosis I does. After meiosis I the cells are already haploid; meiosis II only separates the chromatids.
- **You might expect homologues to pair in mitosis.** They never do. Pairing is unique to prophase I, and it is what makes crossing over possible.
- **You might think crossing over happens between sister chromatids.** It occurs between **non-sister** chromatids of homologous chromosomes. Between sisters it would achieve nothing — they're identical.
- **You might think meiosis always produces four usable gametes.** In males, yes — four sperm. In females, the cytoplasm divides unequally: one large egg gets nearly all of it and three **polar bodies** are discarded. The egg must supply the zygote's entire cytoplasm, so hoarding it is the point.

## One-liner

> Mitosis copies a cell by separating sisters; meiosis halves and shuffles by separating homologues first — and crossing over plus independent assortment is why no two of your gametes are alike.

## Problems

**P1 (🟢)** A cell with 2n = 10 undergoes meiosis. How many cells result, and how many chromosomes does each contain? How many would result from mitosis, with how many chromosomes?

**P2 (🟡)** An organism has 6 chromosome pairs. How many genetically distinct gametes can independent assortment alone produce? How does crossing over change the answer, qualitatively?

**P3 (🔴)** A gamete is produced with an extra copy of chromosome 21. Explain the two distinct meiotic errors that could cause this, and describe how the resulting gametes differ between the two cases.

<details>
<summary>Solutions</summary>

**P1** With 2n = 10, the cell has 10 chromosomes in 5 homologous pairs.

**Meiosis: 4 cells, 5 chromosomes each.** Two rounds of division from one cell gives $2^2 = 4$ products, and the chromosome number is halved from 10 to 5 (one of each pair) at meiosis I.

**Mitosis: 2 cells, 10 chromosomes each.** One division, and the number is conserved — each daughter is genetically identical to the parent.

*Check.* Meiosis's defining outcome is $4 \times n$ from $1 \times 2n$; mitosis's is $2 \times 2n$ from $1 \times 2n$ ✓. Total chromosome count across the products: meiosis $4\times5 = 20$, mitosis $2\times10 = 20$ — both equal the 20 chromatid-sets present after replication ✓.

**P2** With 6 pairs, each pair orients independently at metaphase I, giving two equally likely choices per pair:

$$2^6 = \mathbf{64}\ \text{genetically distinct gametes.}$$

**Crossing over makes the number effectively unbounded.** Independent assortment shuffles *whole* chromosomes — every gamete gets some intact maternal and some intact paternal ones, and there are only 64 ways to deal them. Crossing over shuffles *within* each chromosome, producing chromosomes that are mosaics of both parents. Because the crossover points can fall almost anywhere along the length, and multiple crossovers occur per chromosome per meiosis, the number of distinct chromosome compositions is astronomically larger than 64 and not usefully countable.

*Check.* The two mechanisms are complementary: assortment gives variation *between* chromosomes and crossing over gives variation *within* them ✓. Note the practical consequence — genes far apart on the same chromosome are separated so often by crossing over that they assort almost independently, while genes very close together are nearly always inherited as a unit. That is **linkage**, and it is the subject of [3.2](03-02-dihybrid-crosses-and-beyond.md).

**P3** Two distinct errors, both called nondisjunction but occurring at different divisions:

**Case 1 — nondisjunction in meiosis I.** The two homologous copies of chromosome 21 fail to separate, so both travel to the same pole.

- After meiosis II: **2 gametes with 2 copies of chromosome 21, and 2 gametes with none.**
- The two copies in an affected gamete are the **maternal and paternal homologues** — genetically *different* chromosomes.

**Case 2 — nondisjunction in meiosis II.** Homologues separated correctly at meiosis I, but in one of the two resulting cells the sister chromatids of chromosome 21 fail to separate.

- Final result: **1 gamete with 2 copies, 1 with none, and 2 completely normal.**
- The two copies are **sister chromatids** — genetically *identical* (apart from any crossover segments).

**How the gametes differ:**

| | Meiosis I error | Meiosis II error |
|---|---|---|
| Abnormal gametes | 4 of 4 (2 extra, 2 missing) | 2 of 4 (1 extra, 1 missing) |
| Normal gametes | 0 | 2 |
| The extra copies are | homologues — one maternal, one paternal | sister chromatids — identical |

*Check.* This distinction is not academic: it is testable. Because meiosis-I errors deliver both parental homologues, the resulting trisomic child carries **three distinguishable versions** of chromosome 21 (two from one parent, one from the other), while a meiosis-II error delivers two identical copies plus one from the other parent. Genotyping polymorphic markers along the chromosome tells the two cases apart ✓ — and studies doing exactly that find the great majority of trisomy 21 arises from **maternal meiosis I**, precisely the division that spends decades arrested, as Example 2 predicted.

</details>

## Flashback

**From Lesson 2.4 (The cell cycle):** A human cell has 46 chromosomes in G1. How many chromosomes and how many chromatids does it have at the end of S phase, and why do those two numbers differ?

<details>
<summary>Solution</summary>

At the end of S phase: **46 chromosomes, 92 chromatids.**

They differ because replication copies the DNA but the two copies **stay joined at the centromere**. A structure with two chromatids held at a single centromere is counted as **one** chromosome — chromosome number is defined by centromeres, not by DNA content. The count changes only when the centromeres split and the sisters are pulled apart, which happens in mitotic anaphase or in anaphase II.

*Check.* This lesson makes the definition earn its keep. In meiosis I the homologues separate while each chromosome keeps both of its chromatids, so the cell goes from 46 chromosomes (92 chromatids) to 23 chromosomes (46 chromatids) — the chromosome number halves even though no centromere has split ✓. Counting centromeres rather than DNA is what makes both divisions come out right.

</details>

## Connections

- **Backward:** meiosis and mitosis both occupy the M phase of [2.4](02-04-the-cell-cycle.md)'s cycle, and both depend on the S phase that preceded them; the spindle that moves chromosomes is [1.4](01-04-tour-of-the-organelles.md)'s cytoskeleton.
- **Forward:** [3.1](03-01-mendel-monohybrid-cross.md) shows that Mendel's law of segregation *is* anaphase I, and [3.2](03-02-dihybrid-crosses-and-beyond.md) shows that independent assortment *is* metaphase I orientation; [4.1](04-01-natural-selection.md) needs the variation produced here as its raw material.
- **Sideways (probability):** the $2^{23}$ count and the ratios of [3.1](03-01-mendel-monohybrid-cross.md) are straightforward combinatorics — independent binary choices multiplying — which is the counting framework of [`prob-stat-refresher` 1.1](../../prob-stat-refresher/lessons/01-01-sample-spaces-events-axioms.md).
