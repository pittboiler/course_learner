# Genetics · Lesson 2.4: Chromosomal mutations

> ⏱ ~15 min · Module 2: Linkage, Mapping & Chromosomes · Builds on: [2.3](02-03-three-point-mapping.md), [2.1](02-01-chromosomal-basis-sex-linkage.md) · Unlocks: 3.1 (the gene as a molecule)

## Why this matters

Everything so far has assumed the chromosomes are intact and correctly counted. They frequently are not. Roughly **half of all human conceptions are chromosomally abnormal**, and the overwhelming majority of those are lost, most before the pregnancy is recognized — chromosomal error is the single largest cause of human reproductive loss.

This lesson is also where genetics stops being about genes one at a time. A chromosomal mutation changes **dosage** or **arrangement** of hundreds of genes at once, and the consequences follow from that fact rather than from any individual gene's function. It closes Module 2 because it is the failure mode of everything Module 2 described: segregation, pairing, and crossing over.

## The idea

**Two categories.** Changes in **number** (aneuploidy, polyploidy) and changes in **structure** (deletions, duplications, inversions, translocations).

**Aneuploidy comes from nondisjunction.** A pair of homologues (meiosis I) or a pair of sister chromatids (meiosis II) fails to separate, and both go to the same pole. One gamete gets two copies, one gets none. Fertilization then gives **trisomy** ($2n+1$) or **monosomy** ($2n-1$).

**Why aneuploidy is so damaging, and why the answer is not "missing genes."** A trisomy has *no missing genes at all* — it has an extra copy of every gene on one chromosome. The damage is **dosage imbalance**: 150 percent of several hundred gene products, against 100 percent of everything else. Since many of those products act in stoichiometric complexes and dose-sensitive networks ([molecular-cell-biology 4.4](../../molecular-cell-biology/lessons/04-04-protein-quality-control-degradation.md)), the whole system is thrown off.

$$\text{aneuploidy is a } \textbf{ratio} \text{ problem, not a } \textbf{quantity} \text{ problem}$$

**And this explains why polyploidy is so much milder.** A triploid ($3n$) has 150 percent of *everything*, so all ratios are preserved. Polyploid plants are usually healthy and often larger — most crop plants are polyploid (bread wheat is hexaploid). Polyploid animals are rare, mainly because sex determination in animals depends on chromosome *ratios* that polyploidy scrambles.

**The surviving human trisomies are the small, gene-poor chromosomes.** Trisomy 21, 18, 13, and the sex-chromosome aneuploidies. Chromosome 21 is the smallest human autosome — fewer genes, less dosage imbalance. **The pattern of which trisomies are survivable is itself evidence that dosage is the mechanism.**

**Structural changes: the arrangement matters more than you would guess.**

| Change | What it does | Balanced? |
|---|---|---|
| **Deletion** | segment lost | no — dosage down |
| **Duplication** | segment doubled | no — dosage up |
| **Inversion** | segment flipped 180° | **yes** — same genes, same dose |
| **Reciprocal translocation** | segments swapped between non-homologues | **yes** |
| **Robertsonian translocation** | two acrocentric chromosomes fuse at the centromere | nearly — small arms lost |

**Balanced carriers are usually healthy and produce unbalanced gametes.** This is the crucial clinical point: an inversion or translocation carrier has all their genes in the normal dose and is phenotypically normal, but their **meiosis goes wrong**, because pairing a rearranged chromosome with a normal one requires contortions that produce unbalanced products. **A healthy person can have a 100 percent risk of recurrent miscarriage from a chromosome rearrangement they will never notice otherwise.**

## The formal version

**Nondisjunction: when it happened is readable from the result.**

| Error in | Gametes produced | Signature |
|---|---|---|
| **Meiosis I** | 2 gametes with **both homologues** (different parental copies), 2 with none | trisomy carries *two different* parental haplotypes |
| **Meiosis II** | 1 with two sister chromatids (identical), 1 with none, 2 normal | trisomy carries *two identical* copies |

*In words: an MI error gives you both of the parent's chromosomes; an MII error gives you the same one twice.* Genotyping polymorphic markers on the trisomic chromosome distinguishes them directly, and this is how the maternal-age effect was pinned to meiosis I specifically.

**Inversions and the loop.** To pair with a normal homologue, an inverted chromosome must form an **inversion loop**. What happens next depends on whether the inversion includes the centromere:

- **Paracentric inversion** (centromere *outside* the loop): a crossover inside the loop produces one **dicentric** chromatid (two centromeres — torn apart at anaphase) and one **acentric** fragment (no centromere — lost). Both products are inviable.
- **Pericentric inversion** (centromere *inside* the loop): a crossover produces two chromatids each with a **duplication and a deletion**. Both are unbalanced and usually inviable.

Either way: **recombinant products die, so no recombinants are recovered.** An inversion does not prevent crossing over; it prevents the *recovery* of crossover products.

$$\textbf{Inversions are crossover suppressors} \;-\; \text{observationally, RF across the inverted region drops toward zero.}$$

This is a real experimental tool: *Drosophila* **balancer chromosomes** carry multiple overlapping inversions precisely so that a marked chromosome can be maintained intact through generations ([2.2](02-02-linkage-recombination.md) noted that fly males do not recombine; balancers solve the female half of the problem).

**Reciprocal translocations and the quadrivalent.** A carrier's meiosis must pair four chromosomes — two normal, two translocated — in a cross-shaped **quadrivalent**. Segregation can then occur three ways:

| Segregation | Products | Outcome |
|---|---|---|
| **Alternate** | both normal, or both translocated | **balanced** — viable |
| **Adjacent-1** | one normal + one translocated, non-homologous centromeres to the same pole | unbalanced |
| **Adjacent-2** | homologous centromeres to the same pole | unbalanced |

Roughly **half** the gametes are unbalanced — hence the term **semi-sterility**, and the clinical picture of recurrent pregnancy loss in an otherwise healthy couple.

**The Robertsonian special case, worked because it matters clinically.** A 14;21 Robertsonian translocation carrier has 45 chromosomes and is healthy. Their gametes:

| Gamete | Zygote with normal gamete | Outcome |
|---|---|---|
| normal 14 + normal 21 | normal | healthy |
| der(14;21) alone | balanced carrier | healthy carrier |
| der(14;21) + 21 | **translocation Down syndrome** | affected |
| der(14;21) + 14 | trisomy 14 | lethal |
| 21 alone | monosomy 21 | lethal |
| 14 alone | monosomy 14 | lethal |

Theoretically $\tfrac13$ of surviving pregnancies would have Down syndrome; observed recurrence risk is about 10–15 percent for a carrier mother and 1–2 percent for a carrier father, because unbalanced gametes are selected against before and after fertilization.

**The clinical consequence is stark.** About 4 percent of Down syndrome is translocation Down syndrome, and **its recurrence risk does not depend on maternal age at all** — it depends on whether a parent is a carrier. This is why karyotyping the parents after a Down syndrome birth is standard: it distinguishes a one-off nondisjunction (recurrence risk ~1 percent) from an inherited translocation (recurrence risk 10–15 percent).

## Picture

![Top: meiosis I nondisjunction with both homologues going to one pole, contrasted with meiosis II nondisjunction where sister chromatids fail to separate, and a note that the two are distinguishable by whether the trisomy carries two different parental copies or the same one twice. Middle: an inversion loop formed when an inverted chromosome pairs with a normal one, with a crossover inside the loop producing a dicentric and an acentric fragment in the paracentric case and duplication-deletion products in the pericentric case. Bottom: a cross-shaped quadrivalent formed by a reciprocal translocation carrier, with alternate segregation producing balanced gametes and adjacent segregation producing unbalanced ones.](assets/02-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — read the origin of a trisomy).** A child has trisomy 21. Markers on chromosome 21 are typed in the child and both parents. At a highly polymorphic locus, the mother is $A_1A_2$, the father is $A_3A_4$, and the child is $A_1A_2A_3$. (a) Which parent contributed the extra chromosome? (b) Was the error in meiosis I or meiosis II? (c) What if the child had been $A_1A_1A_3$ instead?

(a) The child has **two different maternal alleles** ($A_1$ and $A_2$) and one paternal ($A_3$). The mother contributed two chromosomes; the father one. **The error was maternal.**

(b) The mother is $A_1A_2$, and she passed **both** of her alleles. Her two homologues carry different alleles, so passing both means the two *homologues* failed to separate — **meiosis I**.

(c) $A_1A_1A_3$ means two **identical** maternal copies. The mother's two homologues carry $A_1$ and $A_2$; receiving $A_1$ twice means the two **sister chromatids** of the $A_1$ homologue failed to separate — **meiosis II**.

**Why this matters beyond bookkeeping.** Applying this analysis to hundreds of trisomy-21 cases established that roughly **90 percent are maternal, and of those about 75 percent are meiosis I errors.** Combined with [2.3](02-03-three-point-mapping.md)'s point that crossover configurations are fixed before a woman is born and cohesion decays with age, this pins the maternal-age effect to a specific event: **the failure of a chiasma established decades earlier to hold a bivalent together in an aged oocyte.** The marker analysis is what made that inference possible.

**Example 2 (why you'd care — the couple with recurrent miscarriage).** A healthy couple has had four first-trimester miscarriages and one healthy child. Karyotyping shows the mother carries a balanced reciprocal translocation between chromosomes 4 and 11; the father is normal. (a) Why is the mother healthy? (b) Estimate the fraction of her conceptions expected to be chromosomally unbalanced. (c) What are the couple's realistic options, and what does the healthy child tell you?

(a) She has **all her genetic material in the normal dose** — the pieces of chromosomes 4 and 11 have been swapped, not lost. Since gene *dosage* is what matters and no dosage has changed, she is phenotypically normal. (Balanced carriers occasionally have phenotypes if a breakpoint disrupts a gene or separates an enhancer from its target — the topological-domain mechanism of [molecular-cell-biology 4.2](../../molecular-cell-biology/lessons/04-02-eukaryotic-transcription-machine.md) — but most are entirely healthy.)

(b) Her meiosis forms a quadrivalent. Only **alternate segregation** gives balanced products, and the three segregation modes are roughly:

| Mode | Products | Fraction (approximate) |
|---|---|---|
| Alternate | balanced (normal or carrier) | ~50 percent |
| Adjacent-1 | unbalanced | ~40 percent |
| Adjacent-2 + 3:1 | unbalanced | ~10 percent |

So roughly **half her conceptions are chromosomally unbalanced**, and almost all unbalanced conceptions involving large autosomal segments are lost in the first trimester. Four miscarriages and one healthy child is close to what this predicts.

(c) Options, each following from the mechanism:

- **Keep trying.** Roughly half of conceptions are balanced and viable, so a healthy pregnancy is the most likely outcome of any given continuing pregnancy. Many such couples achieve a healthy family, at real emotional cost.
- **Preimplantation genetic testing** with IVF: fertilize *in vitro*, biopsy each embryo, transfer only the chromosomally balanced ones. This directly addresses the mechanism and is the standard offer.
- **Prenatal diagnosis** (CVS or amniocentesis) in a natural pregnancy.
- **Donor gametes**, which removes the translocation from the equation.

*What the healthy child tells you:* the child is either chromosomally normal or a **balanced carrier** like the mother — and the two are indistinguishable phenotypically. The child should be karyotyped, because a balanced carrier will face the same reproductive problem in adulthood and has a right to know before rather than after four miscarriages of their own. **The rearrangement is transmissible and silent, which is exactly what makes it worth finding.**

## Watch out

- **You might think trisomy is bad because of "too much DNA."** It is bad because of **imbalance**. Triploidy has 50 percent more of everything and is far milder in plants; trisomy has 50 percent more of one chromosome against everything else, and that ratio is the problem.
- **You might expect monosomy and trisomy to be equally survivable.** Monosomy is far worse — one copy of hundreds of genes exposes every recessive allele on the remaining chromosome and halves every dosage. The only survivable human autosomal monosomy is none; the only survivable one at all is monosomy X (Turner syndrome).
- **You might think an inversion prevents crossing over.** It prevents **recovery of the products**. Crossovers happen; their outputs are dicentric, acentric, or duplication-deletion, and they die.
- **You might think a balanced carrier is safe.** They are healthy and their *gametes* are not. A balanced translocation is compatible with a normal life and a 50 percent unbalanced-conception rate.
- **You might quote a maternal-age recurrence risk for translocation Down syndrome.** It does not apply — translocation Down syndrome has an age-independent recurrence risk set by carrier status, which is precisely why parental karyotyping is done.

## One-liner

> Aneuploidy is a ratio problem, not a quantity problem — which is why polyploidy is mild and trisomy is not — and a balanced rearrangement leaves its carrier healthy while making half their gametes lethal.

## Problems

**P1 (🟢)** Classify each as balanced or unbalanced, and state the immediate consequence for gene dosage: (a) pericentric inversion; (b) terminal deletion of a chromosome arm; (c) reciprocal translocation; (d) tandem duplication; (e) Robertsonian translocation.

**P2 (🟡)** A woman carries a paracentric inversion on one copy of chromosome 7 spanning a 30 cM region containing genes $P$, $Q$ and $R$. (a) Explain what happens to a crossover occurring inside the inversion loop, naming both aberrant products. (b) Predict the measured recombination frequency between $P$ and $R$ in her offspring, and explain why. (c) Her sister does not carry the inversion. Predict the RF measured in the sister's offspring, and explain in one sentence what this shows about map distance as a measurable quantity.

**P3 (🔴, bridges to 2.3 and to clinical genetics)** A couple has a child with Down syndrome. (a) The child's karyotype is 47,XY,+21. What is the recurrence risk, and what is it based on? (b) A second couple's child has karyotype 46,XY,der(14;21)(q10;q10),+21 — translocation Down syndrome. The mother is found to be 45,XX,der(14;21). Enumerate the six gamete types she can produce and their outcomes, and state the theoretical versus observed recurrence risk. (c) The observed recurrence risk differs sharply between carrier mothers (10–15 percent) and carrier fathers (1–2 percent). Propose an explanation, and connect it to something you know about the difference between oogenesis and spermatogenesis.

<details>
<summary>Solutions</summary>

**P1**

| | Balanced? | Dosage consequence |
|---|---|---|
| (a) pericentric inversion | **balanced** | none — same genes, same dose, different order and centromere position |
| (b) terminal deletion | **unbalanced** | one copy of everything distal to the break — haploinsufficiency for many genes |
| (c) reciprocal translocation | **balanced** | none in the carrier; ~50 percent of gametes unbalanced |
| (d) tandem duplication | **unbalanced** | three copies of the duplicated segment |
| (e) Robertsonian translocation | **nearly balanced** | the short arms are lost, but they carry only rRNA gene repeats present in many copies elsewhere, so the carrier is normal |

**P2 (a)** To pair with the normal homologue, the inverted chromosome forms an **inversion loop**. A crossover inside the loop, in a **paracentric** inversion (centromere outside the loop), produces:

- a **dicentric** chromatid — two centromeres, pulled toward opposite poles at anaphase, forming a bridge that breaks;
- an **acentric** fragment — no centromere, not attached to the spindle, lost.

The two non-crossover chromatids are normal. So of the four products, two are viable (both non-recombinant) and two are lost.

**(b)** $$\mathrm{RF}_{PR} \approx \mathbf{0} .$$

Not because crossovers do not occur — they occur at the normal rate — but because **every recombinant product is inviable**, so no recombinant offspring are ever recovered. The measured RF is the fraction of *surviving* offspring that are recombinant, and that is zero.

A second observable follows: her fertility is reduced, because the two dead products represent a real loss of gametes. If a crossover occurs in the loop in, say, 30 percent of meioses, then about 15 percent of her gametes are inviable.

**(c)** The sister, with two normal chromosome 7s, forms a normal bivalent, and crossovers in the region yield viable recombinants:

$$\mathrm{RF}_{PR} \approx \mathbf{30\ \mathrm{cM}} \ \text{(the true map distance, subject to the usual double-crossover underestimate)}.$$

**What this shows:** map distance is not a property of the loci alone — it is a property of the loci **in a specified karyotype**. Two sisters, same genes, same alleles, and one measures 0 cM where the other measures 30. This is the concrete version of [2.3](02-03-three-point-mapping.md)'s flashback warning that discrepant map distances usually mean something differed between the crosses, and it is why *Drosophila* balancer chromosomes work.

**P3 (a)** 47,XY,+21 is **free (standard) trisomy 21**, arising from nondisjunction. Recurrence risk is approximately **1 percent, or the maternal-age-specific risk if that is higher** — the empirical figure, slightly above the population background, reflecting a small excess presumed due to undetected gonadal mosaicism or a familial predisposition to nondisjunction. It is **not** an inherited condition; the parents' karyotypes are normal.

**(b)** She is 45,XX with one normal 14, one normal 21, and the der(14;21). Her gametes, and the zygotes formed with a normal gamete:

| Her gamete | Zygote | Outcome |
|---|---|---|
| 14 + 21 (both normal) | 46, normal | **healthy, non-carrier** |
| der(14;21) alone | 45, balanced carrier | **healthy carrier** |
| der(14;21) + 21 | 46 with effective trisomy 21 | **translocation Down syndrome** |
| der(14;21) + 14 | effective trisomy 14 | lethal, early loss |
| 21 alone | monosomy 21 | lethal, early loss |
| 14 alone | monosomy 14 | lethal, early loss |

Three of six are lethal and never seen. Among the **three surviving** types, one has Down syndrome:

$$\text{theoretical recurrence risk} = \tfrac13 = \mathbf{33\ \text{percent}}.$$

$$\text{observed} \approx \mathbf{10\text{–}15\ \text{percent}}.$$

The gap is real and is explained by selection *before* the surviving-pregnancy stage: unbalanced gametes are under-represented at fertilization (some fail to function) and unbalanced conceptions are lost at a higher rate than the simple enumeration assumes.

**Crucially, this risk is independent of maternal age** — it is set by the translocation, which is why the karyotype changes the counselling completely: 1 percent becomes 10–15 percent.

**(c)** The sex difference is large and consistent, and the explanation is **selection against unbalanced gametes, which operates far more strongly in spermatogenesis than in oogenesis.**

A man produces on the order of $10^{8}$ sperm per day, and they compete: sperm carrying unbalanced chromosome complements are less likely to be produced, to mature, and to fertilize. Spermatogenesis also has a quality-control checkpoint — the **pachytene checkpoint** — that eliminates cells with unpaired or improperly paired chromosomes, and a quadrivalent triggers it. Male germ cells that fail meiotic pairing are simply removed, which is also why translocation carriers are over-represented among men with infertility.

A woman produces a fixed, small stock of oocytes established before birth, all of which she needs. There is no competition and the equivalent checkpoint is markedly more permissive in oogenesis — unbalanced oocytes are ovulated and fertilized. **The same rearrangement therefore reaches conception far more often through an egg than through a sperm.**

This is the same asymmetry, from the other side, as [2.3](02-03-three-point-mapping.md)'s P3: **oogenesis is permissive and slow, spermatogenesis is selective and fast**, and almost every sex difference in transmission genetics — the maternal-age effect on aneuploidy, the paternal-age effect on point mutations, and this recurrence-risk gap — follows from that one contrast.

</details>

## Flashback

**From Lesson 2.3 (three-point mapping and interference):** A three-point testcross of 2000 offspring gives parentals 812 and 806, double crossovers 8 and 6, and the two single-crossover pairs 143/139 and 45/41. (a) Compute both map distances. (b) Compute the coefficient of coincidence and interference. (c) What would the outer two-point distance have measured?

<details>
<summary>Solution</summary>

Total: $812+806+8+6+143+139+45+41 = 2000$ ✓

**(a)** Each region's recombinants are its single-crossover pair **plus both double crossovers**:

$$\mathrm{RF_I} = \frac{143 + 139 + 8 + 6}{2000} = \frac{296}{2000} = \mathbf{14.8\ \mathrm{cM}}.$$

$$\mathrm{RF_{II}} = \frac{45 + 41 + 8 + 6}{2000} = \frac{100}{2000} = \mathbf{5.0\ \mathrm{cM}}.$$

**(b)** $$\text{expected DCO} = 0.148 \times 0.050 = 0.0074 \ \Rightarrow\ 14.8 \text{ of } 2000.$$
$$\text{observed DCO} = \frac{14}{2000} = 0.0070 .$$
$$c = \frac{0.0070}{0.0074} = \mathbf{0.946}, \qquad I = 1 - 0.946 = \mathbf{0.054}.$$

Essentially **no interference** here — the two regions are behaving nearly independently, which is unusual for intervals this close and worth flagging as either a real biological feature of this chromosome region or a sign the sample is too small to measure interference reliably. (With only 14 observed doubles, the Poisson standard error is $\sqrt{14} \approx 3.7$, so $c$ is uncertain to roughly $\pm 0.25$ — **this dataset genuinely cannot distinguish $I = 0$ from $I = 0.25$.**)

**(c)** A two-point cross across the outer genes misses the double crossovers:

$$\mathrm{RF}_{\text{outer}} = \frac{143+139+45+41}{2000} = \frac{368}{2000} = 18.4\ \mathrm{cM},$$

against a true $14.8 + 5.0 = 19.8$ cM — an understatement of 1.4 cM, exactly $2 \times$ the 14 double crossovers as a percentage of 2000.

</details>

## Connections

- **Backward:** [2.3](02-03-three-point-mapping.md)'s interference and crossover assurance is the mechanism that *prevents* the nondisjunction described here; [2.1](02-01-chromosomal-basis-sex-linkage.md)'s calico male was an XXY produced exactly this way.
- **Forward:** Module 3 drops to the molecular scale — [3.1](03-01-gene-as-molecule-complementation.md) asks what a gene is as a physical object, and [3.2](03-02-mutation.md) covers mutation at the level of single bases rather than whole chromosomes.
- **Sideways:** translocations produced by mis-repair of double-strand breaks are [molecular-cell-biology 3.3](../../molecular-cell-biology/lessons/03-03-double-strand-breaks-hr-nhej.md), and the same mechanism produces the oncogenic fusion genes of [molecular-cell-biology 3.4](../../molecular-cell-biology/lessons/03-04-cancer-failure-of-control.md); polyploidy as a route to speciation is [evolution-ecology 2.2](../../evolution-ecology/lessons/02-02-how-species-split.md).
