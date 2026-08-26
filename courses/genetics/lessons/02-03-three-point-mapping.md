# Genetics · Lesson 2.3: Three-point mapping

> ⏱ ~15 min · Module 2: Linkage, Mapping & Chromosomes · Builds on: [2.2](02-02-linkage-recombination.md) · Unlocks: 2.4 (chromosomal mutations)

## Why this matters

Two-point crosses give distances but not **order**. If $A$–$B$ is 9 cM and $B$–$C$ is 12 cM, is $C$ on the far side of $B$, or on the near side, overlapping back toward $A$? Two numbers cannot say, and the double-crossover problem from [2.2](02-02-linkage-recombination.md) means the $A$–$C$ measurement is unreliable exactly when you need it most.

A third marker fixes both problems at once. It makes double crossovers **visible** — because a double crossover flips the middle gene and leaves the outer two alone — and that single observation gives you the order in one step, before you compute anything. This is the workhorse technique of classical genetics, and the reason its procedure is worth knowing as a procedure.

## The idea

**One cross, eight classes.** Testcross a trihybrid to a fully recessive homozygote. The offspring fall into **eight** phenotypic classes ($2^3$), which pair up into four reciprocal pairs:

| Frequency rank | What happened | Pair |
|---|---|---|
| **most abundant** | no crossover | the two **parental** classes |
| middle | single crossover in region I | 2 classes |
| middle | single crossover in region II | 2 classes |
| **least abundant** | crossover in **both** regions | the two **double-crossover** classes |

**The rarest pair is the double crossovers**, because a double crossover requires two independent events and is therefore the product of two small probabilities.

**And now the trick that gives you the order for free.** Compare a double-crossover class with a parental class. They differ at exactly **one** gene — and that gene is the one **in the middle**.

*Why:* a double crossover puts one exchange on each side of the middle gene, so the middle gene is swapped onto the other homologue while the two flanking genes stay where they were.

$$\underbrace{A\ \ B\ \ C}_{\text{parental}} \quad\xrightarrow{\text{double crossover}}\quad \underbrace{A\ \ b\ \ C}_{\text{DCO}} \qquad\Longrightarrow\qquad B \text{ is in the middle.}$$

**That is the whole method for determining order.** No arithmetic, no comparison of distances — one look at which letter changed.

**Interference.** Once you have both distances, you can ask whether crossovers are independent. Usually they are not: **a crossover in one region reduces the chance of another nearby.** The chromosome is stiff, and a chiasma physically discourages a second one close by.

## The formal version

**Notation.** Write a trihybrid's chromosomes explicitly, e.g. $\dfrac{A\ B\ C}{a\ b\ c}$. Region I is the interval between the first two genes *in map order*, region II between the second and third.

**The procedure, in five steps.** Follow it in order and it never fails:

1. **Identify the parentals** — the two most abundant classes. They give the trihybrid parent's arrangement.
2. **Identify the double crossovers** — the two least abundant classes.
3. **Compare a DCO with a parental.** The gene that differs is the **middle** gene. Rewrite everything in map order.
4. **Compute the two distances.** For each region, count *every* offspring that is recombinant across that region — **including the double crossovers**, because a DCO involved a crossover in that region too:

$$\mathrm{RF_I} = \frac{\text{SCO}_{\mathrm I} + \text{DCO}}{N}, \qquad \mathrm{RF_{II}} = \frac{\text{SCO}_{\mathrm{II}} + \text{DCO}}{N}$$

**Forgetting to add the DCOs is the single commonest error in this calculation**, and it always makes both distances too small.

5. **Compute interference.**

$$\text{coefficient of coincidence} \quad c = \frac{\text{observed DCO frequency}}{\text{expected DCO frequency}} = \frac{\mathrm{DCO}/N}{\mathrm{RF_I}\times \mathrm{RF_{II}}}$$

$$\boxed{\;I = 1 - c\;}$$

*In words: interference is the fraction of expected double crossovers that failed to happen.*

| $I$ | $c$ | Meaning |
|---|---|---|
| $0$ | 1 | no interference — crossovers independent |
| $1$ | 0 | **complete interference** — no doubles at all |
| $0 < I < 1$ | $0<c<1$ | **positive interference** — the normal case |
| $I < 0$ | $c > 1$ | negative interference — more doubles than expected; rare and usually an artefact |

**Typical values.** Over short intervals in *Drosophila*, $I$ is close to 1 (near-complete suppression). It falls toward 0 as the intervals get longer and further apart — beyond about 40 cM, crossovers behave essentially independently. **Interference is a local, physical effect.**

**Why interference exists.** The mechanism is crossover interference in meiotic recombination ([molecular-cell-biology 3.3](../../molecular-cell-biology/lessons/03-03-double-strand-breaks-hr-nhej.md)): a designated crossover site inhibits the maturation of nearby recombination intermediates into crossovers, apparently through a signal spreading along the chromosome axis. Biologically this matters — it helps ensure that each bivalent gets **at least one and usually only one** crossover, which is required for correct segregation ([2.4](02-04-chromosomal-mutations.md)) while limiting the disruption of favourable allele combinations.

## Picture

![A trihybrid chromosome pair with three marked genes and two crossover regions, showing four meiotic outcomes: no crossover giving the two abundant parental classes, a single crossover in region one, a single crossover in region two, and a double crossover which flips only the middle gene while leaving the flanking genes in their parental arrangement. The double-crossover products are highlighted and annotated as the rarest classes and as the key to determining gene order.](assets/02-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — a full three-point analysis).** A trihybrid is testcrossed and gives 1000 offspring:

| Phenotype | Count |
|---|---|
| $A\ B\ C$ | 348 |
| $a\ b\ c$ | 342 |
| $A\ b\ c$ | 92 |
| $a\ B\ C$ | 88 |
| $A\ B\ c$ | 58 |
| $a\ b\ C$ | 62 |
| $A\ b\ C$ | 5 |
| $a\ B\ c$ | 5 |

Find the gene order, both map distances, and the interference.

**Step 1 — parentals.** The two most abundant: $ABC$ (348) and $abc$ (342). So the trihybrid was $\dfrac{A\ B\ C}{a\ b\ c}$ — coupling for all three.

**Step 2 — double crossovers.** The two least abundant: $AbC$ (5) and $aBc$ (5).

**Step 3 — order.** Compare $ABC$ (parental) with $AbC$ (DCO):

$$A\ \mathbf{B}\ C \quad\text{vs}\quad A\ \mathbf{b}\ C$$

Only $B$ differs. **$B$ is the middle gene**, and the order is $A$–$B$–$C$ (which is how the data happened to be written, but you must always check).

**Step 4 — distances.**

*Region I ($A$–$B$):* which classes are recombinant between $A$ and $B$? Compare each class's $A$ and $B$ alleles with the parental $AB$ / $ab$ pairing:

| Class | $A$–$B$ combination | Recombinant in I? |
|---|---|---|
| $ABC$ 348 | $A$ with $B$ | no |
| $abc$ 342 | $a$ with $b$ | no |
| $Abc$ 92 | $A$ with $b$ | **yes** |
| $aBC$ 88 | $a$ with $B$ | **yes** |
| $ABc$ 58 | $A$ with $B$ | no |
| $abC$ 62 | $a$ with $b$ | no |
| $AbC$ 5 | $A$ with $b$ | **yes** (DCO) |
| $aBc$ 5 | $a$ with $B$ | **yes** (DCO) |

$$\mathrm{RF_I} = \frac{92 + 88 + 5 + 5}{1000} = \frac{190}{1000} = \mathbf{19.0\ \mathrm{cM}}.$$

*Region II ($B$–$C$):* the recombinants are the $ABc$/$abC$ pair plus both DCOs:

$$\mathrm{RF_{II}} = \frac{58 + 62 + 5 + 5}{1000} = \frac{130}{1000} = \mathbf{13.0\ \mathrm{cM}}.$$

**The map:**

$$A \;\overset{19.0\ \mathrm{cM}}{\text{———}}\; B \;\overset{13.0\ \mathrm{cM}}{\text{——}}\; C$$

**Step 5 — interference.**

$$\text{expected DCO} = \mathrm{RF_I} \times \mathrm{RF_{II}} = 0.190 \times 0.130 = 0.0247, \ \text{i.e. } 24.7 \text{ of } 1000.$$

$$\text{observed DCO} = \frac{10}{1000} = 0.010 .$$

$$c = \frac{0.010}{0.0247} = 0.405, \qquad I = 1 - 0.405 = \mathbf{0.595}.$$

**About 60 percent of the expected double crossovers did not occur** — substantial positive interference, typical for intervals of this size.

**Sanity check the whole thing.** Total recombinants across the two regions: $190 + 130 = 320$, but the 10 DCOs were counted twice, so the actual number of recombinant chromosomes is $320 - 10 = 310$, and the number of non-recombinant is $690 = 348 + 342$. ✓ And note that a two-point $A$–$C$ cross would have measured only $(92+88+58+62)/1000 = 30.0$ cM against the true $19 + 13 = 32$ cM — **the DCOs would have been scored as parental for $A$ and $C$**, exactly the underestimate of [2.2](02-02-linkage-recombination.md).

**Example 2 (why you'd care — what interference is for).** In a certain organism, the interference between two adjacent 10 cM intervals is measured as $I = 0.9$. (a) How many double crossovers are expected in 10,000 gametes with no interference, and how many are observed? (b) Explain why a cell would suppress double crossovers. (c) What would go wrong if interference were *negative* — that is, if crossovers clustered?

(a) No interference:

$$0.10 \times 0.10 \times 10{,}000 = \mathbf{100\ \text{expected}}.$$

With $I = 0.9$, $c = 0.1$:

$$100 \times 0.1 = \mathbf{10\ \text{observed}}.$$

(b) Two reasons, and they pull in the same direction.

*Mechanically,* every bivalent **must** have at least one crossover to be held together until anaphase I — the chiasma, plus sister-chromatid cohesion distal to it, is what physically resists the spindle's pull. A bivalent with zero crossovers segregates at random, and that is nondisjunction ([2.4](02-04-chromosomal-mutations.md)). Interference helps distribute a limited number of crossovers so that **every** chromosome gets one, rather than letting several pile onto the same chromosome and leaving others with none. This is called **crossover assurance**, and it is the same mechanism seen from the other side.

*Evolutionarily,* recombination breaks up allele combinations. Too little and beneficial variants are permanently linked to deleterious ones; too much and every co-adapted combination is dismantled every generation. Interference caps recombination locally without abolishing it — and the observed number, close to one crossover per chromosome arm per meiosis across most eukaryotes, is a remarkably conserved compromise.

(c) If crossovers clustered, some chromosomes would receive several crossovers in one small region and **others would receive none**. Those with none have no chiasma, cannot orient stably on the metaphase plate, and segregate randomly. The result is **nondisjunction** — aneuploid gametes, which in humans means trisomies and monosomies, most of them lethal.

**This is the deep point.** Interference looks like a technical detail in a mapping calculation, and it is in fact a mechanism protecting the fidelity of chromosome segregation. Human oocytes with **too few or badly-positioned crossovers** are precisely the ones that go on to nondisjoin, and this is the leading explanation for the maternal-age effect in Down syndrome: the crossovers were established before the mother was born, and eggs whose bivalents got a poor crossover configuration are the ones most likely to fail decades later ([2.4](02-04-chromosomal-mutations.md)).

## Watch out

- **You might forget to include double crossovers in the distances.** A DCO involved a crossover in *both* regions and must be counted in both. Omitting them shrinks both distances and is the standard error in this calculation.
- **You might identify the middle gene by comparing distances.** Compare a DCO with a parental instead — one gene differs, and that is the middle one. This is faster and cannot be fooled by an underestimated outer distance.
- **You might assume the data are written in map order.** They rarely are. Determine the order first, then rewrite everything before computing anything.
- **You might expect the sum of the two distances to equal the outer distance measured directly.** It will not — the direct measurement misses the double crossovers, which is the whole reason for using three points.
- **You might treat interference as a constant.** It is a function of distance, near 1 for adjacent short intervals and decaying to 0 beyond a few tens of cM.

## One-liner

> A third marker makes double crossovers visible, and since a double crossover flips only the middle gene, one comparison between the rarest class and the commonest gives you the order before you compute anything.

## Problems

**P1 (🟢)** A three-point testcross gives these eight classes. Determine the gene order.

| Phenotype | Count |
|---|---|
| $D\ E\ F$ | 405 |
| $d\ e\ f$ | 411 |
| $D\ e\ F$ | 3 |
| $d\ E\ f$ | 4 |
| $D\ E\ f$ | 62 |
| $d\ e\ F$ | 58 |
| $D\ e\ f$ | 29 |
| $d\ E\ F$ | 28 |

**P2 (🟡)** Using the same data as P1: (a) compute both map distances and draw the map; (b) compute the coefficient of coincidence and the interference; (c) what would a two-point cross between the two **outer** genes have measured, and by how much would it have understated the true distance?

**P3 (🔴, bridges to 2.4 and to human genetics)** In human female meiosis, chromosome 21 bivalents that fail to form any chiasma, or that form one very near the telomere, are strongly over-represented among oocytes that nondisjoin. (a) Explain mechanistically why a chiasma is required for correct segregation. (b) Human oocytes complete recombination before birth but are not ovulated until decades later. Explain how this fact, combined with (a), predicts the maternal-age effect. (c) Sperm are made continuously throughout adult life. Predict whether a comparable paternal-age effect on nondisjunction should exist, and check your prediction against the known fact that paternal age raises the rate of new *point* mutations but not of aneuploidy.

<details>
<summary>Solutions</summary>

**P1** Parentals (most abundant): $DEF$ (405) and $def$ (411). Double crossovers (least abundant): $DeF$ (3) and $dEf$ (4).

Compare $DEF$ with $DeF$:

$$D\ \mathbf{E}\ F \quad\text{vs}\quad D\ \mathbf{e}\ F$$

Only $E$ differs. **$E$ is the middle gene**, so the order is $\mathbf{D\ –\ E\ –\ F}$ (as written).

**P2 (a)** Total $N = 405+411+3+4+62+58+29+28 = 1000$.

*Region I ($D$–$E$).* Parental pairing is $D$ with $E$, $d$ with $e$. Recombinant classes are those with $D$–$e$ or $d$–$E$: $DeF$ (3), $dEf$ (4), $Def$ (29), $dEF$ (28).

$$\mathrm{RF_I} = \frac{29 + 28 + 3 + 4}{1000} = \frac{64}{1000} = \mathbf{6.4\ \mathrm{cM}}.$$

*Region II ($E$–$F$).* Parental pairing is $E$ with $F$, $e$ with $f$. Recombinant classes: $DEf$ (62), $deF$ (58), $DeF$ (3), $dEf$ (4).

$$\mathrm{RF_{II}} = \frac{62 + 58 + 3 + 4}{1000} = \frac{127}{1000} = \mathbf{12.7\ \mathrm{cM}}.$$

$$D \;\overset{6.4\ \mathrm{cM}}{\text{——}}\; E \;\overset{12.7\ \mathrm{cM}}{\text{————}}\; F$$

**(b)** $$\text{expected DCO frequency} = 0.064 \times 0.127 = 0.008128, \ \text{i.e. } 8.13 \text{ of } 1000 .$$
$$\text{observed} = \frac{3+4}{1000} = 0.007 .$$
$$c = \frac{0.007}{0.008128} = \mathbf{0.861}, \qquad I = 1 - 0.861 = \mathbf{0.139}.$$

Only mild interference here — about 14 percent of expected doubles were suppressed. (Compare Example 1's $I = 0.60$ over larger intervals; interference depends on the specific chromosome region, not just on the distances.)

**(c)** A two-point $D$–$F$ cross scores recombinants between $D$ and $F$ only. The double crossovers have $D$ and $F$ in their **parental** combination ($DeF$ has $D$ with $F$; $dEf$ has $d$ with $f$), so they would be counted as non-recombinant:

$$\mathrm{RF}_{DF}^{\text{observed}} = \frac{62 + 58 + 29 + 28}{1000} = \frac{177}{1000} = 17.7\ \mathrm{cM}.$$

True distance: $6.4 + 12.7 = 19.1$ cM.

$$\text{understatement} = 19.1 - 17.7 = 1.4\ \mathrm{cM} = \mathbf{7.3\ \text{percent}}.$$

Note the shortfall is exactly $2 \times$ the DCO count ($2 \times 7 = 14$ offspring, or 1.4 percent) — each double crossover costs the outer measurement two recombinants, one from each region. **This is the double-crossover correction of [2.2](02-02-linkage-recombination.md) made completely explicit.**

**P3 (a)** A bivalent must be held together as a single physical unit until anaphase I so that the two homologues can attach to *opposite* spindle poles and be pulled apart in a coordinated way. What holds them together is a **chiasma** — the physical crossover — combined with **sister-chromatid cohesion distal to it**, which prevents the exchanged chromatid arms from sliding apart.

With no chiasma, the two homologues are two independent univalents. Each attaches to whichever pole it happens to find, independently of the other, so half the time both go to the same pole. The result is one gamete with two copies of the chromosome and one with none — **nondisjunction**, giving a trisomic and a monosomic conception.

A chiasma very near a telomere is nearly as bad: it provides little cohesive material distal to it, so it is mechanically fragile and prone to slipping before anaphase.

**(b)** Human oocytes enter meiosis in the fetal ovary and **complete recombination before the woman is born**, then arrest in prophase I. An egg ovulated at age 40 has been holding its bivalents together — by cohesion established forty years earlier — since before the woman's own birth.

Two things follow. First, the crossover configuration is **fixed at birth**: an oocyte whose chromosome 21 bivalent got no crossover, or a bad one, was already vulnerable four decades before it was used. Second, **cohesion decays over time**. Cohesin cannot be replaced in an arrested oocyte, so the older the egg, the weaker the glue holding a chiasma in place.

Combine them: eggs with marginal crossover configurations survive early in reproductive life because cohesion is still strong, and fail late in it because cohesion has degraded. **The vulnerable eggs are not created by age; they are revealed by it** — which is precisely the shape of the maternal-age curve for trisomy 21, flat and low until the mid-thirties and rising steeply thereafter.

**(c)** **Prediction: no comparable paternal-age effect on aneuploidy** — and this is correct.

Spermatogonial stem cells divide continuously and each meiosis is completed within weeks of starting. There is no decades-long arrest, so cohesion has no time to decay, and any given sperm's crossovers were made recently. The mechanism that produces the maternal-age effect simply does not apply.

**But a different age effect does apply, for a different reason.** Spermatogonial stem cells keep dividing — several hundred divisions by age 40 against roughly 30 by puberty — and each division is an opportunity for a replication error. So paternal age raises the rate of new **point mutations** roughly linearly (about two extra *de novo* mutations per year of paternal age), which is why paternal age is associated with achondroplasia, Apert syndrome and, more weakly, with autism and schizophrenia risk.

$$\textbf{Maternal age} \to \text{aneuploidy (a segregation failure in an aged, arrested cell)}$$
$$\textbf{Paternal age} \to \text{point mutations (replication errors accumulated over many divisions)}$$

**Two different age effects, two different mechanisms, and each one is predicted by the cell biology of that gamete's production.** The fact that they do not overlap is strong evidence that the mechanisms are correctly identified.

</details>

## Flashback

**From Lesson 2.2 (RF, phase, and the 50 percent ceiling):** A testcross of a dihybrid gives $AB$ 88, $ab$ 92, $Ab$ 410, $aB$ 410. (a) Identify the parental classes and the parent's phase. (b) Compute RF and the map distance. (c) A colleague reports the same two genes as 39 cM apart from a different cross. Is this a contradiction? Explain.

<details>
<summary>Solution</summary>

**(a)** Abundant classes are $Ab$ (410) and $aB$ (410), so these are **parental** and the parent was in **repulsion (*trans*)**:

$$\frac{A\ \ b}{a\ \ B}.$$

**(b)** $$\mathrm{RF} = \frac{88+92}{1000} = 0.180 = \mathbf{18.0\ \mathrm{cM}}.$$

**(c)** It is not a contradiction in principle, but 18 versus 39 cM is a large discrepancy that demands an explanation. Legitimate possibilities:

- **Different sexes.** Recombination rates differ between males and females — the human female map is about 1.6 times the male map, and in *Drosophila* males do not recombine at all ([2.2](02-02-linkage-recombination.md)). A cross using a heterozygous female and one using a heterozygous male will genuinely give different numbers for the same interval.
- **Different genetic background or temperature**, both of which modulate recombination rate.
- **A structural difference**, most importantly a heterozygous **inversion** spanning the interval in one of the stocks, which suppresses recovery of recombinants ([2.4](02-04-chromosomal-mutations.md)).

What it is *not*: sampling error. With 1000 offspring the standard error on RF is about $\sqrt{0.18 \times 0.82/1000} = 0.012$, so 18 and 39 cM are more than seventeen standard errors apart.

**The right response is to ask what differed between the two crosses**, because map distance is reproducible only within a specified sex, background and karyotype.

</details>

## Connections

- **Backward:** [2.2](02-02-linkage-recombination.md) established RF and the double-crossover problem; this lesson is the technique that solves it.
- **Forward:** [2.4](02-04-chromosomal-mutations.md) takes up nondisjunction — the failure mode that Example 2 and P3 traced back to crossover placement — and inversions, which suppress recombination outright.
- **Sideways:** the physical crossover is homologous recombination, [molecular-cell-biology 3.3](../../molecular-cell-biology/lessons/03-03-double-strand-breaks-hr-nhej.md); mapping by recombination in a *population* rather than a family, using ancestral crossovers, is [4.4](04-04-linkage-disequilibrium-gwas.md).
