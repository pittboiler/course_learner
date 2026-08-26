# Genetics · Lesson 1.2: When dominance breaks down

> ⏱ ~15 min · Module 1: Transmission Genetics — Mendel & Its Extensions · Builds on: [1.1](01-01-mendels-laws-probability.md) · Unlocks: 1.3 (epistasis & pleiotropy)

## Why this matters

Mendel picked seven traits in peas, and every one of them happened to be cleanly dominant-recessive. That was luck as much as judgement, and it made his laws visible — but it also left a generation of biologists believing dominance was a law of nature.

It is not. Dominance is a property of a *particular pair of alleles at a particular locus for a particular phenotype*, and it is a statement about how much protein you need. Change how you measure the phenotype and the same pair of alleles can switch from dominant to codominant to incompletely dominant. This lesson is where the genotype-to-phenotype map stops being a lookup table and starts being biochemistry.

**And the transmission rules do not change at all.** Every ratio in this lesson comes out of the same probability engine from [1.1](01-01-mendels-laws-probability.md). Only the reading of the genotypes changes.

## The idea

**Complete dominance is a statement about dosage.** Most enzymes are made in excess: one functional allele produces enough product to give a normal phenotype, so $AA$ and $Aa$ look identical. This is called **haplosufficiency**, and it is why loss-of-function alleles are usually recessive. Dominance is not a competition between alleles; it is a threshold effect on the amount of a gene product.

Once you see that, the exceptions organize themselves:

- **Incomplete dominance** — one dose gives an *intermediate* phenotype, because the trait is dosage-sensitive across its whole range. $F_1$ is intermediate; **$F_2$ is $1{:}2{:}1$ for both genotype and phenotype**, because now every genotype is distinguishable.
- **Codominance** — both alleles' products are present and detectable *separately*. The heterozygote is not intermediate; it shows **both**. The tell is that you are measuring the products directly (blood-group antigens, protein electrophoresis) rather than a downstream trait.
- **Haploinsufficiency** — one dose is *not* enough, so the loss-of-function allele is **dominant**. This is why many severe human dominant disorders are loss-of-function in dosage-sensitive genes.
- **Dominant negative** — the mutant product actively poisons the normal one, which is worse than absence. You met the arithmetic in [molecular-cell-biology 3.2](../../molecular-cell-biology/lessons/03-02-dna-damage-response.md): for an $n$-mer, a heterozygote retains only $(1/2)^n$ functional complexes.

**Multiple alleles.** A gene has as many alleles as the population contains, not two. Any one diploid carries at most two, but the *allelic series* can be long, and the dominance relations within it form a hierarchy that need not be linear.

**Lethal alleles give the giveaway ratio.** If a genotype dies before birth it is simply missing from the counts. A recessive-lethal allele that is *dominant for a visible phenotype* produces the signature:

$$Ay/a \times Ay/a \;\longrightarrow\; \underbrace{1\,Ay/Ay}_{\text{dies}} : 2\,Ay/a : 1\,a/a \;\Longrightarrow\; \mathbf{2 : 1}.$$

**A $2{:}1$ ratio among live offspring is diagnostic of a homozygous-lethal allele** — and it is one of the few ratios in genetics that means only one thing.

## The formal version

**Notation for allelic series.** When there is no simple dominant/recessive pair, use a superscripted gene symbol: $c^{+}$, $c^{ch}$, $c^{h}$, $c$ for the rabbit coat-colour series, with dominance $c^{+} > c^{ch} > c^{h} > c$. The number of possible genotypes with $k$ alleles is

$$\binom{k}{2} + k = \frac{k(k+1)}{2}$$

*In words: all the heterozygous pairs, plus the homozygotes.* For $k = 4$ that is 10 genotypes.

**The ABO system, worked as the standard case.** Three alleles: $I^{A}$, $I^{B}$, $i$.

- $I^{A}$ and $I^{B}$ are **codominant** with each other — both antigens are made and both are detectable.
- Both are **dominant** to $i$, which makes no antigen.

| Phenotype | Genotypes |
|---|---|
| A | $I^{A}I^{A}$, $I^{A}i$ |
| B | $I^{B}I^{B}$, $I^{B}i$ |
| **AB** | $I^{A}I^{B}$ |
| **O** | $ii$ |

**ABO shows both relationships in one locus**, which is exactly why it is the textbook example: whether a pair of alleles looks codominant or dominant depends on which pair you compare.

**The $F_2$ ratios, side by side.** Same cross, $F_1 \times F_1$ from a pure-breeding parental cross:

| Dominance relation | $F_1$ | $F_2$ genotype | $F_2$ **phenotype** |
|---|---|---|---|
| Complete | like one parent | $1{:}2{:}1$ | $3{:}1$ |
| **Incomplete** | intermediate | $1{:}2{:}1$ | $\mathbf{1{:}2{:}1}$ |
| **Codominant** | shows both | $1{:}2{:}1$ | $\mathbf{1{:}2{:}1}$ |
| Complete + homozygous lethal | like one parent | $1{:}2{:}1$, one class dies | $\mathbf{2{:}1}$ |

**The genotype ratio is always $1{:}2{:}1$.** Transmission never changed. What changed is how many genotype classes you can *see* — and that is the single most useful sentence in this lesson.

**Reading a phenotype ratio backwards** is therefore a well-posed inference:

$$3{:}1 \Rightarrow \text{complete dominance}, \qquad 1{:}2{:}1 \Rightarrow \text{incomplete or codominant}, \qquad 2{:}1 \Rightarrow \text{homozygous lethal}.$$

**Why "dominant" depends on the assay.** Sickle-cell disease is the cleanest demonstration. Take the same genotype $HbA/HbS$ and three assays:

| Assay | $HbA/HbS$ appears | Relation |
|---|---|---|
| Clinical disease | unaffected | $HbS$ is **recessive** |
| Protein electrophoresis (both haemoglobins visible) | both bands present | **codominant** |
| Red-cell sickling under low oxygen | some sickling | **incomplete dominance** |
| Malaria resistance | resistant, more than either homozygote | **overdominant** |

**One genotype, four dominance relations, all correct.** Dominance is a property of the phenotype you chose to measure, not of the alleles.

## Picture

![A three-panel comparison of the same F1 cross under complete dominance, incomplete dominance, and codominance. Each panel shows the same one-to-two-to-one genotype distribution, with complete dominance collapsing two classes into a three-to-one phenotype ratio, incomplete dominance giving three visibly distinct phenotypes in one-to-two-to-one, and codominance giving a heterozygote that displays both products rather than a blend. A fourth panel shows a lethal allele removing the homozygous class entirely to give two-to-one among survivors.](assets/01-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — read the mechanism from the ratio).** In snapdragons, red-flowered ($C^{R}C^{R}$) crossed to white ($C^{W}C^{W}$) gives all pink $F_1$. (a) Give the $F_2$ genotype and phenotype ratios. (b) A pink plant is crossed to a white one — predict the offspring. (c) How would you distinguish incomplete dominance from codominance here, given only the flowers?

(a) $F_1$ is $C^{R}C^{W}$ (pink). Selfing gives the usual $1{:}2{:}1$:

$$1\,C^{R}C^{R}\ (\text{red}) : 2\,C^{R}C^{W}\ (\text{pink}) : 1\,C^{W}C^{W}\ (\text{white}),$$

so the **phenotype ratio is also $1{:}2{:}1$** — every genotype is visible.

(b) $C^{R}C^{W} \times C^{W}C^{W}$ is a testcross in disguise:

$$\tfrac12\,C^{R}C^{W}\ (\text{pink}) : \tfrac12\,C^{W}C^{W}\ (\text{white}) = \mathbf{1\ \text{pink} : 1\ \text{white}}.$$

(c) **Look at the petals closely, or measure the pigment.** True incomplete dominance means each cell makes roughly half the normal pigment, so the flower is uniformly pale — a *blend*. Codominance would mean each allele's product appears separately, giving red and white **patches or streaks** on the same flower rather than a uniform pink. Quantitatively, incomplete dominance predicts pigment concentration in the heterozygote at about half the red homozygote's; codominance predicts full-strength pigment in some cells and none in others.

**The general test:** *is the heterozygote intermediate, or is it both at once?* Resolution of the assay decides which you see — measure finely enough and many "incomplete dominance" cases turn out to be codominance at the cellular level.

**Example 2 (why you'd care — a $2{:}1$ ratio and what it costs).** In mice, the $A^{Y}$ (yellow) allele gives yellow coat and is dominant to $a$ (agouti). Two yellow mice are crossed repeatedly and produce, across many litters, 96 yellow and 48 agouti. Litter sizes from yellow × yellow crosses average 25 percent smaller than from yellow × agouti crosses. (a) What is the ratio, and what does it mean? (b) Predict the outcome of yellow × agouti. (c) Explain the litter-size observation and say what it proves.

(a) $$96 : 48 = \mathbf{2 : 1},$$ not $3:1$. The missing class is the **yellow homozygote $A^{Y}A^{Y}$**, which dies *in utero*. So $A^{Y}$ is **dominant for coat colour and recessive for lethality** — and every living yellow mouse is a heterozygote $A^{Y}a$.

Working it out: $A^{Y}a \times A^{Y}a$ gives $1\,A^{Y}A^{Y} : 2\,A^{Y}a : 1\,aa$, and removing the lethal class leaves $2$ yellow : $1$ agouti among survivors. ✓

(b) $A^{Y}a \times aa$ is a testcross. No $A^{Y}A^{Y}$ can be produced, so nothing dies:

$$\tfrac12\,A^{Y}a\ (\text{yellow}) : \tfrac12\,aa\ (\text{agouti}) = \mathbf{1 : 1},\ \text{with normal litter size.}$$

(c) The litter-size observation is the **independent confirmation**, and it is what makes the inference airtight. In a yellow × yellow cross, one quarter of conceptions are $A^{Y}A^{Y}$ and die before birth, so litters should be about 25 percent smaller. That is precisely what is observed — and it rules out the alternative explanation that yellow homozygotes are simply *born agouti* (which would also give a $2{:}1$ appearance but would leave litter size unchanged).

**This is the shape of a good genetic argument.** A ratio tells you what to suspect; a second, independent measurement — here a count of pups, not of coat colours — tells you whether you were right. The $A^{Y}$ allele was the first lethal allele described (Cuénot, 1905) and its identification rested on exactly this pair of observations.

## Watch out

- **You might think the transmission rules changed.** They did not. Genotype ratios from $Aa \times Aa$ are always $1{:}2{:}1$; incomplete dominance, codominance and lethality only change how many classes are visible.
- **You might read incomplete dominance as blending inheritance.** Blending was Darwin's problem — variation should disappear in a generation. It does not: the $F_2$ recovers the parental phenotypes intact, because the *alleles* never blended. Only the phenotype is intermediate.
- **You might call a heterozygote "codominant" whenever it looks unusual.** Codominance means **both products detectably present**, not intermediate. If the heterozygote is halfway, that is incomplete dominance.
- **You might treat dominance as a property of an allele.** It is a property of an allele *pair*, for a *specific phenotype*, at a *specific assay resolution* — the sickle-cell table has one genotype behaving four ways.
- **You might forget lethal classes when counting.** A $2{:}1$ ratio is not a strange $3{:}1$; it is a $1{:}2{:}1$ with a class removed, and the missing quarter should show up as reduced litter or seed set.

## One-liner

> Dominance is a threshold on gene dosage, not a contest between alleles — so the genotype ratio is always $1{:}2{:}1$ and every "exception" is just a change in how many of those three classes you can see.

## Problems

**P1 (🟢)** In shorthorn cattle, $C^{R}C^{R}$ is red, $C^{W}C^{W}$ is white, and $C^{R}C^{W}$ is **roan** — a coat with intermingled red and white hairs. (a) Is this incomplete dominance or codominance? Justify from the description. (b) Give the $F_2$ phenotype ratio from a roan × roan cross. (c) A breeder wants only roan calves. What cross should they use, and what does the answer tell you about breeding true for a heterozygous phenotype?

**P2 (🟡)** A woman with blood type B whose mother was type O has a child with a man of type AB. (a) Give the woman's genotype and justify it. (b) List the possible blood types of the child with their probabilities. (c) A man of type O is accused of being the father of an AB child. Can he be excluded? What about a type-A man being accused of fathering an O child?

**P3 (🔴, bridges to molecular-cell-biology and to 1.4)** A human gene encodes a protein that functions as a **tetramer**. Two different mutations are found: mutation 1 produces no protein at all (a nonsense allele destroyed by nonsense-mediated decay); mutation 2 produces a full-length protein that folds and tetramerizes normally but has no catalytic activity. (a) For each, compute the fraction of functional tetramers in a heterozygote. (b) Which mutation gives a dominant disease and which a recessive one? (c) The disease caused by mutation 2 is more severe in a homozygote than in a heterozygote, but the heterozygote is already severely affected. Explain both facts, and state what this predicts about the pedigree pattern you would see.

<details>
<summary>Solutions</summary>

**P1 (a)** **Codominance.** The description is the tell: roan is *intermingled red and white hairs*, not uniformly pink hair. Each hair follicle expresses one allele's product, so both are present and separately detectable — which is the definition of codominance. (Contrast the snapdragon of Example 1, where every cell makes half the pigment and the flower is uniformly pale.)

**(b)** Transmission is unchanged, and all three genotypes are visible:

$$\mathbf{1\ \text{red} : 2\ \text{roan} : 1\ \text{white}}.$$

**(c)** **They cannot get a pure roan herd from roan parents** — roan × roan always gives half roan, a quarter red, a quarter white. The cross that gives 100 percent roan is

$$C^{R}C^{R} \times C^{W}C^{W} \;\longrightarrow\; \text{all } C^{R}C^{W} \ \text{(roan)},$$

i.e. **red × white**. This is the general and slightly counterintuitive rule: **a heterozygous phenotype can never breed true**, so the way to produce it reliably is to cross the two homozygotes — which is exactly why $F_1$ hybrid seed is sold to farmers annually rather than saved, and why the seed company keeps the two inbred parental lines.

**P2 (a)** She is type B, so she carries at least one $I^{B}$. Her mother was type O ($ii$), so her mother could only have given her an $i$. Therefore she is $\mathbf{I^{B}i}$.

**(b)** Cross $I^{B}i \times I^{A}I^{B}$. Her gametes: $\tfrac12 I^{B}$, $\tfrac12 i$. His: $\tfrac12 I^{A}$, $\tfrac12 I^{B}$.

| | $\tfrac12\,I^{A}$ | $\tfrac12\,I^{B}$ |
|---|---|---|
| $\tfrac12\,I^{B}$ | $\tfrac14\ I^{A}I^{B}$ = **AB** | $\tfrac14\ I^{B}I^{B}$ = **B** |
| $\tfrac12\,i$ | $\tfrac14\ I^{A}i$ = **A** | $\tfrac14\ I^{B}i$ = **B** |

$$P(\text{AB}) = \tfrac14, \qquad P(\text{A}) = \tfrac14, \qquad P(\text{B}) = \tfrac12, \qquad P(\text{O}) = 0.$$

**(c)** *Type-O man, AB child:* an $ii$ man can contribute only $i$, and an AB child needs both $I^{A}$ and $I^{B}$ — one from each parent, and neither is $i$. **He is excluded.**

*Type-A man, O child:* an O child is $ii$ and needs an $i$ from each parent. A type-A man is either $I^{A}I^{A}$ or $I^{A}i$; if he is $I^{A}i$ he can contribute $i$. **He is not excluded.**

**The asymmetry is the point.** Blood typing can *exclude* a man definitively but can never *identify* one — it eliminates rather than confirms, which is why it was used for paternity for most of the twentieth century and was replaced entirely once DNA markers made positive identification possible ([3.6](03-06-reading-editing-genes.md)).

**P3 (a)** *Mutation 1 (no protein).* The mutant allele contributes nothing to the subunit pool, so every tetramer assembled is made from wild-type subunits: **100 percent of the tetramers that exist are functional**, though the cell makes only about half as many as normal.

*Mutation 2 (folds, tetramerizes, inactive).* The subunit pool is half wild-type and half mutant, and assembly is random, so the fraction of tetramers made entirely of wild-type subunits is

$$\left(\tfrac12\right)^{4} = \frac{1}{16} = \mathbf{6.25\ \text{percent}}.$$

**(b)** Mutation 1 gives a **recessive** disease if the gene is haplosufficient — 50 percent of normal protein is usually enough, so the heterozygote is healthy and only the homozygote is affected. (If the gene happens to be dosage-sensitive, mutation 1 would instead cause a *haploinsufficient* dominant disease — worth noting, because the same null allele can be recessive or dominant depending on the gene.)

Mutation 2 gives a **dominant** disease. It is a **dominant negative**: the heterozygote has only 6.25 percent function, far below the ~50 percent that mutation 1 leaves. **Producing a broken protein is worse than producing none**, because the broken one occupies the complexes.

**(c)** *Why the homozygote is worse:* a mutation-2 homozygote has **zero** functional tetramers rather than 6.25 percent, so there is still a real difference between one and two copies.

*Why the heterozygote is already severe:* 6.25 percent is far below any plausible functional threshold. Recall from [1.2](01-02-when-dominance-breaks-down.md)'s opening that dominance is a threshold on dosage — most genes are haplosufficient because 50 percent clears the threshold comfortably. Nothing clears a threshold at 6 percent.

*Pedigree prediction:* a clean **autosomal dominant** pattern — affected individuals in every generation, roughly half the children of an affected parent affected, and both sexes equally ([1.4](01-04-pedigrees-human-inheritance.md)). Homozygotes will essentially never be seen, because they require two affected parents and the allele is rare; when a dominant disease *does* produce an observed homozygote it is typically far more severe, which is a recognized pattern in achondroplasia and familial hypercholesterolaemia.

*One further prediction worth stating:* mutation 1 and mutation 2 in the same gene will be reported as two different diseases with different inheritance patterns, and the sequence data alone will not explain why. **The explanation is the quaternary structure**, which is a fact from [biochemistry 1.3](../../biochemistry/lessons/01-03-four-levels-protein-structure.md) rather than from genetics — one of the clearest cases where you cannot read inheritance off a pedigree without knowing the protein.

</details>

## Connections

- **Backward:** [1.1](01-01-mendels-laws-probability.md)'s probability engine is used unchanged; only the genotype-to-phenotype reading differs.
- **Forward:** [1.3](01-03-epistasis-pleiotropy.md) keeps the same engine again and adds a second gene interacting with the first; [1.4](01-04-pedigrees-human-inheritance.md) uses the dominance vocabulary to read human pedigrees.
- **Sideways:** the dominant-negative arithmetic is [molecular-cell-biology 3.2](../../molecular-cell-biology/lessons/03-02-dna-damage-response.md) applied to p53; the reason haplosufficiency is the norm is enzyme excess capacity from [biochemistry 2.4](../../biochemistry/lessons/02-04-allosteric-regulation-metabolic-control.md); heterozygote advantage in sickle cell is developed quantitatively in [evolution-ecology 1.5](../../evolution-ecology/lessons/01-05-mutation-balance-of-forces.md).
