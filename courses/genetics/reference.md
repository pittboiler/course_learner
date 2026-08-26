# Genetics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Genetics is one probability engine applied at four scales: to gametes from one
cross, to crossovers along a chromosome, to bases within a gene, and to alleles
in a population. Use this card for the ratios and their meanings, the mapping and
population formulas, the notation that has to be exact (*cis* vs. *trans*, $F$ vs.
$r$, $D'$ vs. $r^2$), and the numbers worth looking up rather than half-remembering.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $A\_$ | "$AA$ or $Aa$" — the dominant phenotype, genotype unspecified | [1.1](lessons/01-01-mendels-laws-probability.md) |
| $I^{-}$, $I^{S}$, $O^{c}$, $P^{-}$ | *lac* alleles: no repressor / super-repressor / operator-constitutive / dead promoter | [3.4](lessons/03-04-prokaryotic-regulation-operon.md) |
| $X^{w}Y$ | a **hemizygous** male — one X, so he shows whatever it carries | [2.1](lessons/02-01-chromosomal-basis-sex-linkage.md) |
| RF, cM | recombination frequency; 1 cM = 1 percent RF | [2.2](lessons/02-02-linkage-recombination.md) |
| $c$ | coefficient of coincidence — observed DCOs over expected | [2.3](lessons/02-03-three-point-mapping.md) |
| $I$ | interference, $= 1 - c$ | [2.3](lessons/02-03-three-point-mapping.md) |
| $\mu$, $\nu$ | forward and reverse mutation rate | [3.2](lessons/03-02-mutation.md) |
| $V_P, V_G, V_E$ | phenotypic, genetic, environmental variance | [4.1](lessons/04-01-quantitative-traits-heritability.md) |
| $V_A, V_D, V_I$ | additive, dominance, epistatic genetic variance | [4.1](lessons/04-01-quantitative-traits-heritability.md) |
| $H^{2}$, $h^{2}$ | broad-sense and **narrow-sense** heritability | [4.1](lessons/04-01-quantitative-traits-heritability.md) |
| $S$, $R$, $i$ | selection differential, response, selection intensity | [4.2](lessons/04-02-response-to-selection-qtl.md) |
| $F$ | inbreeding coefficient — P(an individual's two alleles are IBD) | [4.3](lessons/04-03-inbreeding-relatedness-structure.md) |
| $r$ | coefficient of relationship — expected IBD sharing between two people | [4.3](lessons/04-03-inbreeding-relatedness-structure.md) |
| $N_e$ | effective population size | [4.3](lessons/04-03-inbreeding-relatedness-structure.md) |
| $F_{ST}$ | fraction of total variation attributable to differences between groups | [4.3](lessons/04-03-inbreeding-relatedness-structure.md) |
| $D$, $D'$, $r^{2}$ | linkage disequilibrium: raw, history-normalized, and correlation | [4.4](lessons/04-04-linkage-disequilibrium-gwas.md) |
| $\lambda_{GC}$ | genomic inflation factor — median $\chi^2$ over its expectation | [4.4](lessons/04-04-linkage-disequilibrium-gwas.md) |

## Definitions

### Testcross

A cross to a fully recessive homozygote. The recessive parent contributes only
recessive alleles, so **every offspring phenotype names the gamete it received**
from the informative parent — which is why all linkage mapping is built on it.

*Introduced:* [1.1](lessons/01-01-mendels-laws-probability.md)

### Haplosufficiency

One functional copy makes enough product for a normal phenotype. This is why most
loss-of-function alleles are recessive — dominance is a **threshold on dosage**,
not a contest between alleles.

*Introduced:* [1.2](lessons/01-02-when-dominance-breaks-down.md)

### Codominance vs. incomplete dominance

**Codominance**: both products are separately detectable — the heterozygote shows
*both*. **Incomplete dominance**: the heterozygote is *intermediate*. Both give an
$F_2$ phenotype ratio of $1{:}2{:}1$; the difference is whether the heterozygote
blends or displays two things at once.

*Introduced:* [1.2](lessons/01-02-when-dominance-breaks-down.md)

### Epistasis

One locus masking another, almost always because they act in a pathway. **The
gene whose loss masks the other acts earlier.** Distinct from dominance, which is
between alleles at *one* locus.

*Introduced:* [1.3](lessons/01-03-epistasis-pleiotropy.md)

### Penetrance vs. expressivity

**Penetrance** — the *fraction* of genotype carriers showing the phenotype at all
(yes/no, across people). **Expressivity** — how *severely* it shows in those who
do (a range, within a person). Incomplete penetrance is why a dominant condition
appears to skip a generation.

*Introduced:* [1.3](lessons/01-03-epistasis-pleiotropy.md)

### Hemizygosity

A male has one X, so he expresses whatever allele it carries — no second copy to
mask anything. This is why X-linked recessives are overwhelmingly a male disease
with female carriers, in a ratio of $1/q$.

*Introduced:* [2.1](lessons/02-01-chromosomal-basis-sex-linkage.md)

### Coupling vs. repulsion (*cis* vs. *trans* arrangement)

**Coupling**: the two dominant alleles on the same homologue, $\frac{A\ B}{a\ b}$.
**Repulsion**: one on each, $\frac{A\ b}{a\ B}$. Same genotype, opposite parental
and recombinant classes — **read the phase off the data, because the abundant
classes are the parental ones.**

*Introduced:* [2.2](lessons/02-02-linkage-recombination.md)

### Interference

A crossover suppresses another nearby. Quantified as $I = 1 - c$. Mechanistically
it is **crossover assurance** — distributing a limited number of crossovers so
every bivalent gets one, which is required for correct segregation.

*Introduced:* [2.3](lessons/02-03-three-point-mapping.md)

### Aneuploidy is a ratio problem

A trisomy is missing **no** genes — it has 150 percent of a few hundred products
against 100 percent of everything else. This is why polyploidy (150 percent of
*everything*, ratios preserved) is mild and trisomy is not.

*Introduced:* [2.4](lessons/02-04-chromosomal-mutations.md)

### Balanced rearrangement

An inversion or translocation with no gain or loss of material. The **carrier is
healthy**; roughly half their gametes are unbalanced. A healthy person with a
complete explanation for recurrent pregnancy loss.

*Introduced:* [2.4](lessons/02-04-chromosomal-mutations.md)

### Complementation test (*cis-trans* test)

Cross two recessive mutants: **wild-type offspring → different genes**; **mutant
offspring → same gene**. Requires both mutations to be recessive and the test to
be done in *trans*. Defines the **cistron**.

*Introduced:* [3.1](lessons/03-01-gene-as-molecule-complementation.md)

### Gene ≠ mutation site ≠ recombination unit

Mutations within one gene fail to complement (same function destroyed) *and*
recombine (different physical positions). Benzer's result, and the reason the gene
became a stretch of DNA rather than a point.

*Introduced:* [3.1](lessons/03-01-gene-as-molecule-complementation.md)

### Transition vs. transversion

**Transition**: purine↔purine or pyrimidine↔pyrimidine. **Transversion**: across
the classes. Transitions are commoner despite having fewer ways to occur, largely
because 5-methylcytosine deaminates to thymine — making **CpG sites hotspots**.

*Introduced:* [3.2](lessons/03-02-mutation.md)

### The frame rule

An indel of $n$ bases is in-frame iff $n \equiv 0 \pmod 3$. A frameshift scrambles
every downstream codon, hits a premature stop within ~21 codons, and the message
is then destroyed by nonsense-mediated decay. **A one-base insertion is a null; a
three-base deletion usually is not.**

*Introduced:* [3.2](lessons/03-02-mutation.md)

### BER vs. NER

**Base excision repair** is **lesion-specific** — a library of glycosylases, one
per chemical lesion, excising a single base. **Nucleotide excision repair** is
**distortion-generic** — one machine for any bulky adduct, excising 24–32 nt.

*Introduced:* [3.3](lessons/03-03-dna-repair.md)

### Strand discrimination

Mismatch repair must know which strand is **new**, or it will fix an error into
the sequence. *E. coli* uses transient hemimethylation at GATC; eukaryotes use
nicks in the new strand.

*Introduced:* [3.3](lessons/03-03-dna-repair.md)

### *cis*-acting vs. *trans*-acting

A ***trans*-acting** element makes a **diffusible product** and is rescued by a
good copy anywhere in the cell. A ***cis*-acting** element is a **DNA site** and
affects only what is physically attached to it. **The merodiploid test is the
whole of regulatory genetics.**

*Introduced:* [3.4](lessons/03-04-prokaryotic-regulation-operon.md)

### Induction is de-repression

Lactose does not switch the *lac* operon on — it removes a repressor. Which is why
a cell with no repressor at all ($I^{-}$) is **constitutive**.

*Introduced:* [3.4](lessons/03-04-prokaryotic-regulation-operon.md)

### Genomic imprinting

At ~100 human loci only one parental allele is expressed, and which one depends on
parent of origin. The locus is functionally **hemizygous**, so a loss-of-function
mutation behaves as a null — but only when transmitted by the expressing parent.

*Introduced:* [3.5](lessons/03-05-eukaryotic-regulatory-logic-epigenetics.md)

### The imprint is not inherited; the rule for setting it is

Imprints are **erased in the germ line and re-established according to the sex of
that individual**. An imprint you received from your mother becomes a paternal
imprint if you are male.

*Introduced:* [3.5](lessons/03-05-eukaryotic-regulatory-logic-epigenetics.md)

### CRISPR cuts; the cell edits

Cas9 provides **targeting**; the double-strand break is resolved by NHEJ (indels →
knockout) or HR with a donor (precise edit). Since HR needs S/G2, **editing works
in dividing cells and badly in quiescent ones** — a limitation inherited from
repair biology, which base and prime editors avoid by not making a break.

*Introduced:* [3.6](lessons/03-06-reading-editing-genes.md)

### Only $V_A$ is transmitted

Parents pass **alleles**, not genotypes. Dominance and epistasis are properties of
*combinations*, and meiosis dissolves combinations. This is why $h^2$, not $H^2$,
predicts response to selection.

*Introduced:* [4.1](lessons/04-01-quantitative-traits-heritability.md)

### Heritability is a property of a population

It is a **ratio**, so standardizing the environment lowers $V_E$ and raises $h^2$
with no genetic change at all. It says nothing about an individual and nothing
about between-group differences.

*Introduced:* [4.1](lessons/04-01-quantitative-traits-heritability.md)

### Liability threshold

A continuous polygenic liability with a cutoff produces an all-or-none phenotype.
Explains why recurrence risk rises with the number of affected relatives, why it
is $\approx\sqrt{\text{prevalence}}$ rather than Mendelian, and the **Carter
effect** — an affected member of the less-susceptible sex predicts *higher*
familial risk.

*Introduced:* [4.1](lessons/04-01-quantitative-traits-heritability.md)

### Realized heritability

$h^2_{\text{realized}} = R/S$ — heritability defined by what selection actually
achieved, rather than estimated from correlations between relatives.

*Introduced:* [4.2](lessons/04-02-response-to-selection-qtl.md)

### The Beavis effect

Detected QTL have systematically **overestimated** effects, because detection
requires the estimate to have been large. The same winner's curse inflates early
GWAS effect sizes.

*Introduced:* [4.2](lessons/04-02-response-to-selection-qtl.md)

### Identical by descent vs. identical by state

**IBS**: the same nucleotide, any origin. **IBD**: the same nucleotide *because
both are copies of one ancestral allele*. $F$ and $r$ are both IBD probabilities.

*Introduced:* [4.3](lessons/04-03-inbreeding-relatedness-structure.md)

### Inbreeding is not evolution

$F$ moves a fraction of heterozygotes into the homozygote classes and leaves
**allele frequencies exactly where they were**.

*Introduced:* [4.3](lessons/04-03-inbreeding-relatedness-structure.md)

### Wahlund effect

Pooling two subpopulations with different allele frequencies produces a
heterozygote deficit **identical in signature to inbreeding**, with nobody mating
a relative. The apparent $F$ from a pooled sample *is* $F_{ST}$.

*Introduced:* [4.3](lessons/04-03-inbreeding-relatedness-structure.md)

### Linkage vs. linkage disequilibrium

**Linkage** is a property of loci — physical position, measured in families.
**LD** is a property of alleles — population history, measured across thousands of
meioses. Tightly linked loci can be in perfect equilibrium; unlinked loci can show
LD through population structure.

*Introduced:* [4.4](lessons/04-04-linkage-disequilibrium-gwas.md)

### $D'$ vs. $r^{2}$

$D' = 1$ means **no recombination** has separated the loci — a statement about
history. $r^{2}$ is the **squared correlation** and determines how well one SNP
predicts another. **Use $D'$ to describe history; use $r^{2}$ to design a study.**

*Introduced:* [4.4](lessons/04-04-linkage-disequilibrium-gwas.md)

### GWAS localizes; it does not identify

A significant SNP is a **tag** in LD with the causal variant somewhere in the same
haplotype block. Roughly 90 percent of hits are non-coding.

*Introduced:* [4.4](lessons/04-04-linkage-disequilibrium-gwas.md)

### Variant of uncertain significance

An **absence of information**, not a weak positive. Acting on a VUS causes real
harm. VUS rates are higher for patients from ancestries under-represented in
variant databases.

*Introduced:* [4.5](lessons/04-05-human-genetics-genome-medicine.md)

### PRS portability

A polygenic score is a weighted sum of **tags**, and tags do not transfer between
populations because LD structure differs. Accuracy typically falls by half or more
across ancestries.

*Introduced:* [4.5](lessons/04-05-human-genetics-genome-medicine.md)

## Formulas and rules

### The probability engine

| Rule | Statement |
|---|---|
| Product rule | independent events "A **and** B": multiply |
| Sum rule | mutually exclusive "A **or** B": add |
| Gene-by-gene method | do each gene as a one-gene cross, then multiply |
| Binomial | $P(k \text{ of } n) = \binom{n}{k}p^{k}(1-p)^{n-k}$ |
| Chi-square | $\chi^{2} = \sum (O-E)^2/E$; crit. 3.84 (1 df), 5.99 (2), 7.81 (3) |

For $n$ independently assorting heterozygous genes selfed:

| Quantity | Formula |
|---|---|
| Gamete types | $2^{n}$ |
| Distinct genotypes | $3^{n}$ |
| Distinct phenotypes | $2^{n}$ |
| Phenotype ratio | $(3{:}1)$ multiplied by itself $n$ times |

*From* [1.1](lessons/01-01-mendels-laws-probability.md)

### Reading a ratio backwards

| Observed $F_2$ | Means |
|---|---|
| $3{:}1$ | complete dominance |
| $1{:}2{:}1$ | incomplete dominance **or** codominance |
| $2{:}1$ | **homozygous lethal** (confirm with reduced litter/seed set) |
| $9{:}3{:}3{:}1$ | two independent genes, no interaction |
| $9{:}7$ | complementary genes — both needed for one pathway |
| $15{:}1$ | duplicate genes — either suffices |
| $12{:}3{:}1$ | dominant epistasis |
| $9{:}3{:}4$ | recessive epistasis — the $\tfrac{4}{16}$ is $3+1$, so $aa$ masks $B$ |
| $13{:}3$ | dominant suppression |
| $9{:}6{:}1$ | duplicate genes with cumulative effect |

**Never memorize these — write the four dihybrid classes, pool by mechanism, add.**

*From* [1.2](lessons/01-02-when-dominance-breaks-down.md), [1.3](lessons/01-03-epistasis-pleiotropy.md)

### Pedigree fingerprints

| Mode | Tell |
|---|---|
| Autosomal dominant | every generation; **male-to-male transmission occurs** |
| Autosomal recessive | skips generations; consanguinity raises risk |
| X-linked recessive | far more males; **never father-to-son**; affected male's daughters all carriers |
| X-linked dominant | **affected father → ALL daughters affected, NO sons** |
| Mitochondrial | affected **mother → all children**; affected father → none |
| Imprinted | expressed through one parent only; ~half, both sexes |

Two decisive eliminations: **male-to-male transmission kills everything X-linked and mitochondrial**; **an affected father with an unaffected daughter kills X-linked dominant**.

| Quantity | Formula |
|---|---|
| Carrier risk, unaffected child of two carriers | $\dfrac{1/2}{3/4} = \mathbf{2/3}$ |
| Bayes | $P(H\mid E) = \dfrac{P(H)P(E\mid H)}{\sum_i P(H_i)P(E\mid H_i)}$ |
| X-linked recessive frequencies | males $q$, females $q^{2}$; ratio $1/q$ |
| New-mutation fraction, X-linked lethal | $\tfrac13$ (Haldane) |

*From* [1.4](lessons/01-04-pedigrees-human-inheritance.md), [2.1](lessons/02-01-chromosomal-basis-sex-linkage.md)

### Mapping

| Quantity | Formula |
|---|---|
| Recombination frequency | $\mathrm{RF} = \dfrac{\text{recombinants}}{\text{total}}$; $1\ \mathrm{cM} = 1\%$ |
| Ceiling | $\mathrm{RF} \le 0.5$ always — a crossover uses 2 of 4 chromatids |
| Haldane mapping function | $\mathrm{RF} = \tfrac12(1 - e^{-2m})$, $m$ in Morgans |
| Region distances (3-point) | $\mathrm{RF_I} = \dfrac{\mathrm{SCO_I} + \mathbf{DCO}}{N}$ — **always add the DCOs** |
| Coefficient of coincidence | $c = \dfrac{\text{observed DCO freq}}{\mathrm{RF_I}\times\mathrm{RF_{II}}}$ |
| Interference | $I = 1 - c$ |

**Three-point procedure:** (1) parentals = most abundant; (2) DCOs = least abundant; (3) **compare a DCO with a parental — the gene that differs is in the middle**; (4) compute both distances including DCOs; (5) compute $c$ and $I$.

*From* [2.2](lessons/02-02-linkage-recombination.md), [2.3](lessons/02-03-three-point-mapping.md)

### Mutation and repair

| Quantity | Value / formula |
|---|---|
| Human per-base rate | $\mu \approx 1.2\times10^{-8}$ per bp per generation |
| *De novo* mutations per person | $\approx 70$ |
| Frame rule | in-frame iff $n \equiv 0 \pmod 3$ |
| Expected codons to a premature stop | $64/3 \approx 21$ |
| Fraction of coding substitutions silent | $\approx 24$ percent |
| Mutation equilibrium (no selection) | $\hat q = \mu/(\mu+\nu)$ |
| Fidelity filters | base pairing $10^{-5}$ → + proofreading $10^{-7}$ → + MMR $10^{-9}$ |
| Caretaker loss | cancer risk $\propto \mu^{k}$ — a 100× rate is $100^{k}$ |

*From* [3.2](lessons/03-02-mutation.md), [3.3](lessons/03-03-dna-repair.md)

### Merodiploid procedure

1. **Find the repressor.** Any $I^{+}$ → repressor present. Any $I^{S}$ → unremovable repressor, and it dominates.
2. **Take each operon separately.** Does *its own* operator bind repressor ($O^{+}$) or not ($O^{c}$)? Working $P$? Working $Z$?
3. Score each operon with and without inducer.
4. **Sum**: enzyme is made if *any* copy with a functional $Z$ is transcribed.

| Allele | Behaviour | Dominance |
|---|---|---|
| $I^{-}$ | constitutive | **recessive** — makes nothing |
| $I^{S}$ | uninducible | ***trans*-dominant** — makes a poison |
| $O^{c}$ | constitutive | ***cis*-dominant only** |
| $P^{-}$ | uninducible | ***cis*-acting** |

*From* [3.4](lessons/03-04-prokaryotic-regulation-operon.md)

### Laboratory arithmetic

| Quantity | Formula |
|---|---|
| PCR amplification | $N_n = N_0(1+E)^{n}$; ideal $2^{n}$; 30 cycles $\approx 10^{9}$ |
| qPCR | $\dfrac{N_0^{(A)}}{N_0^{(B)}} = 2^{\,\Delta C_t}$; $\Delta C_t = 3.32$ is tenfold |
| Sequencing coverage | $C = NL/G$; fraction with zero reads $= e^{-C}$ |
| Het miscalled as hom at depth $d$ | $2 \times (1/2)^{d}$ |

*From* [3.6](lessons/03-06-reading-editing-genes.md)

### Quantitative genetics

| Quantity | Formula |
|---|---|
| Variance partition | $V_P = V_G + V_E$, $V_G = V_A + V_D + V_I$ |
| Broad-sense heritability | $H^{2} = V_G/V_P$ |
| **Narrow-sense heritability** | $h^{2} = V_A/V_P$ |
| Parent–offspring regression | slope on **midparent** $= h^{2}$ (on one parent, $h^2/2$) |
| Falconer (twins) | $H^{2} = 2(r_{MZ} - r_{DZ})$, $c^{2} = 2r_{DZ} - r_{MZ}$, $e^{2} = 1 - r_{MZ}$ |
| ADE model, when $c^2 < 0$ | $r_{MZ} = h^2 + d^2$, $r_{DZ} = \tfrac12 h^2 + \tfrac14 d^2$ |
| **Breeder's equation** | $R = h^{2}S$ |
| With truncation selection | $S = i\,\sigma_P$, so $R = i\,h^{2}\sigma_P$ |
| Response per year | $\Delta G/\text{yr} = i\,h^{2}\sigma_P/L$ — **$L$ is as powerful a lever as $h^2$** |
| Realized heritability | $h^{2} = R/S$ |
| Sibling recurrence, threshold trait | $\approx \sqrt{\text{prevalence}}$ |

Selection intensity $i$: 0.80 (top 50 percent), 1.40 (20), **1.755 (10)**, 2.06 (5), 2.665 (1).

*From* [4.1](lessons/04-01-quantitative-traits-heritability.md), [4.2](lessons/04-02-response-to-selection-qtl.md)

### Inbreeding, relatedness and structure

| Quantity | Formula |
|---|---|
| Genotype frequencies with inbreeding | $p^{2}+Fpq \ \colon\ 2pq(1-F) \ \colon\ q^{2}+Fpq$ |
| Allele frequencies | **unchanged** — $p' = p$ |
| Relative rise in affected | $1 + Fp/q \approx 1 + F/q$ for rare $q$ |
| Path counting | $F = \sum_{\text{paths}} (\tfrac12)^{n-1}(1+F_A)$, $n$ = individuals in the path |
| Offspring of related parents | $F_{\text{offspring}} = \tfrac12 r_{\text{parents}}$ |
| Inbreeding depression | $\bar X_F = \bar X_0 - BF$ |
| $F_{ST}$ | $(H_T - H_S)/H_T$ |
| $N_e$, unequal sex ratio | $N_e = \dfrac{4N_mN_f}{N_m+N_f}$ — **the rarer sex dominates** |
| Inbreeding accumulation | $\Delta F \approx 1/(2N_e)$ per generation |

Coefficients of relationship: MZ twins 1 · parent–offspring $\tfrac12$ · full sibs $\tfrac12$ · half sibs $\tfrac14$ · uncle–niece $\tfrac14$ · **first cousins $\tfrac18$** ($F_{\text{child}} = \tfrac{1}{16}$) · second cousins $\tfrac{1}{32}$.

*From* [4.3](lessons/04-03-inbreeding-relatedness-structure.md)

### Linkage disequilibrium and association

| Quantity | Formula |
|---|---|
| Raw LD | $D = p_{AB} - p_Ap_B$ |
| Normalized | $D' = D/D_{\max}$ |
| Correlation | $r^{2} = D^{2}/(p_Ap_ap_Bp_b)$ |
| Decay | $D_t = D_0(1-c)^{t}$ |
| **Sample size with a tag** | $N_{\text{tag}} = N/r^{2}$ |
| Genome-wide threshold | $0.05/10^{6} = 5\times10^{-8}$ |
| Genomic inflation | $\lambda_{GC} = (\text{median } \chi^2)/0.456$; $\approx 1$ is clean |
| Polygenic score | $\mathrm{PRS}_i = \sum_j \beta_j g_{ij}$ |
| PPV of a test | $\dfrac{\pi\,\mathrm{Se}}{\pi\,\mathrm{Se} + (1-\pi)(1-\mathrm{Sp})}$ |

*From* [4.4](lessons/04-04-linkage-disequilibrium-gwas.md), [4.5](lessons/04-05-human-genetics-genome-medicine.md)

### Numbers worth having

| Quantity | Value |
|---|---|
| Human genes / chromosomes | ~20,000 / 23 pairs — so ~900 genes share a chromosome |
| Human genetic map length | ~37 Morgans total; female map ~1.6× male |
| Recombination in male *Drosophila* | **none** |
| Human genome | $3\times10^{9}$ bp haploid; 1 cM ≈ 1 Mb *on average* |
| Human conceptions chromosomally abnormal | ~50 percent |
| Free trisomy 21 recurrence | ~1 percent, maternal-age dependent |
| Translocation Down syndrome recurrence | 10–15 percent (carrier mother), **age-independent** |
| Trisomy 21 origin | ~90 percent maternal, ~75 percent of those meiosis I |
| Genes alternatively spliced | ~95 percent of multi-exon human genes |
| Human $F_{ST}$, continental groups | 0.10–0.15 — **85–90 percent of variation is within populations** |
| Human LD extent | 10–100 kb; much longer in bottlenecked populations |
| GWAS hits that are non-coding | ~90 percent |
| Standard sequencing depth | 30× |
| X-inactivation founder cells | ~15 |

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Meiosis, chromosomes, sister chromatids vs. homologues | [general-biology 2.5](../general-biology/lessons/02-05-mitosis-meiosis.md) |
| Mendel's monohybrid and dihybrid crosses with Punnett squares | [general-biology 3.1](../general-biology/lessons/03-01-mendel-monohybrid-cross.md) · [3.2](../general-biology/lessons/03-02-dihybrid-crosses-and-beyond.md) |
| DNA structure, base pairing, semiconservative replication | [general-biology 3.3](../general-biology/lessons/03-03-dna-structure-replication.md) · [biochemistry 4.4](../biochemistry/lessons/04-04-nucleic-acids-dna-rna-structure.md) |
| The genetic code, codons, transcription and translation | [general-biology 3.4](../general-biology/lessons/03-04-central-dogma.md) · [biochemistry 4.5](../biochemistry/lessons/04-05-flow-of-genetic-information.md) |
| **Hardy–Weinberg** — derivation, carrier arithmetic, the five assumptions | [general-biology 4.2](../general-biology/lessons/04-02-evolution-in-populations.md) · [evolution-ecology 1.3](../evolution-ecology/lessons/01-03-hardy-weinberg-testable-null.md) |
| Genetic drift, gene flow, selection as evolutionary forces | [evolution-ecology 1.4](../evolution-ecology/lessons/01-04-drift-ne-gene-flow.md) |
| Mutation–selection balance, overdominance equilibrium | [evolution-ecology 1.5](../evolution-ecology/lessons/01-05-mutation-balance-of-forces.md) |
| Molecular clocks, coalescence, phylogenetic inference | [evolution-ecology 2.3](../evolution-ecology/lessons/02-03-inferring-trees-dating.md) |
| Nucleosomes, histone marks, chromatin remodelling | [molecular-cell-biology 4.1](../molecular-cell-biology/lessons/04-01-chromatin-packaging-regulation.md) |
| Pol II, Mediator, enhancer loops, topological domains, bursting | [molecular-cell-biology 4.2](../molecular-cell-biology/lessons/04-02-eukaryotic-transcription-machine.md) |
| Splicing mechanism, nonsense-mediated decay, mRNA turnover | [molecular-cell-biology 4.3](../molecular-cell-biology/lessons/04-03-rna-processing-mrna-life-cycle.md) |
| Double-strand-break repair: HR vs. NHEJ, cell-cycle gating | [molecular-cell-biology 3.3](../molecular-cell-biology/lessons/03-03-double-strand-breaks-hr-nhej.md) |
| The DNA-damage response: sensing, p53, arrest vs. apoptosis | [molecular-cell-biology 3.2](../molecular-cell-biology/lessons/03-02-dna-damage-response.md) |
| Oncogenes, tumour suppressors, caretakers, multistage carcinogenesis | [molecular-cell-biology 3.4](../molecular-cell-biology/lessons/03-04-cancer-failure-of-control.md) |
| Protein quaternary structure (why dominant negatives happen) | [biochemistry 1.3](../biochemistry/lessons/01-03-four-levels-protein-structure.md) |
| Enzyme excess capacity (why haplosufficiency is the norm) | [biochemistry 2.4](../biochemistry/lessons/02-04-allosteric-regulation-metabolic-control.md) |
| Probability: product/sum rules, binomial, Bayes, chi-square, normal tails | [prob-stat-refresher](../prob-stat-refresher/syllabus.md) |
| Regression, variance decomposition, multiple testing | [prob-stat-refresher](../prob-stat-refresher/syllabus.md) · [econometrics](../econometrics/syllabus.md) |
| Central limit theorem (why polygenic traits are normal) | [probability-theory](../probability-theory/syllabus.md) |
| Sequence alignment, imputation, fine-mapping algorithms | [computational-biology](../computational-biology/syllabus.md) |

## Pitfalls

### Crosses and ratios

- Draw a Punnett square for more than two genes and you have already lost — do each gene separately and multiply. *([1.1](lessons/01-01-mendels-laws-probability.md))*
- "Exactly $k$ of $n$" needs the binomial coefficient; without it you have computed one specific birth order. *([1.1](lessons/01-01-mendels-laws-probability.md))*
- Each conception is independent — three unaffected children do not make the fourth safer *or* "due". *([1.1](lessons/01-01-mendels-laws-probability.md))*
- Genotype ratios from $Aa\times Aa$ are **always** $1{:}2{:}1$; incomplete dominance, codominance and lethality change only how many classes you can see. *([1.2](lessons/01-02-when-dominance-breaks-down.md))*
- Incomplete dominance is not blending — the $F_2$ recovers the parental phenotypes intact. *([1.2](lessons/01-02-when-dominance-breaks-down.md))*
- Dominance is a property of an allele **pair**, for a **specific phenotype**, at a **specific assay resolution** — sickle cell behaves four ways in one genotype. *([1.2](lessons/01-02-when-dominance-breaks-down.md))*
- Derive the modified ratios; do not memorize them. And epistasis (between loci) is not dominance (within a locus). *([1.3](lessons/01-03-epistasis-pleiotropy.md))*
- Complementation asks *how many genes*; epistasis asks *what order*. *([1.3](lessons/01-03-epistasis-pleiotropy.md), [3.1](lessons/03-01-gene-as-molecule-complementation.md))*

### Pedigrees and probability

- The carrier risk of an unaffected sibling is $\tfrac23$, not $\tfrac12$ — being unaffected already removed the $aa$ class. *([1.4](lessons/01-04-pedigrees-human-inheritance.md))*
- **Unaffected children are evidence.** Leaving them out of the Bayes table roughly doubles the estimated risk. *([1.4](lessons/01-04-pedigrees-human-inheritance.md))*
- A skipped generation does not rule out dominance — incomplete penetrance does exactly that. *([1.3](lessons/01-03-epistasis-pleiotropy.md), [1.4](lessons/01-04-pedigrees-human-inheritance.md))*
- A male's X-linked genotype is $X^{w}Y$, never $ww$; and carrier females are mosaics, so skewed X-inactivation produces symptomatic carriers. *([2.1](lessons/02-01-chromosomal-basis-sex-linkage.md))*
- In birds, butterflies and snakes the **female** is heterogametic, so every signature mirrors. *([2.1](lessons/02-01-chromosomal-basis-sex-linkage.md))*
- Imprinting and mitochondrial inheritance both give parent-of-origin effects — mitochondrial transmits **only** through mothers and affects **all** her children. *([3.5](lessons/03-05-eukaryotic-regulatory-logic-epigenetics.md))*

### Mapping

- $\mathrm{RF} > 0.5$ is impossible — you mislabelled which classes are parental. The **abundant** ones are parental. *([2.2](lessons/02-02-linkage-recombination.md))*
- Phase is a property of the individual parent, not of the genes; read it off the data. *([2.2](lessons/02-02-linkage-recombination.md))*
- Map distances add; recombination frequencies do not. Build maps from short intervals summed. *([2.2](lessons/02-02-linkage-recombination.md), [2.3](lessons/02-03-three-point-mapping.md))*
- **Always include the double crossovers in both region distances** — omitting them is the standard error and always shrinks both. *([2.3](lessons/02-03-three-point-mapping.md))*
- Find the middle gene by comparing a DCO with a parental, not by comparing distances. *([2.3](lessons/02-03-three-point-mapping.md))*
- Map distance is a property of loci **in a specified sex, background and karyotype** — an inversion heterozygote measures 0 cM where her sister measures 30. *([2.3](lessons/02-03-three-point-mapping.md), [2.4](lessons/02-04-chromosomal-mutations.md))*
- An inversion does not prevent crossing over; it prevents **recovery of the products**. *([2.4](lessons/02-04-chromosomal-mutations.md))*
- A balanced carrier is healthy and their gametes are not — never quote a maternal-age recurrence risk for translocation Down syndrome. *([2.4](lessons/02-04-chromosomal-mutations.md))*

### Molecular

- Complementation needs both mutations **recessive** and the test in ***trans***; the *cis* configuration is the control and always looks wild-type. *([3.1](lessons/03-01-gene-as-molecule-complementation.md))*
- The complementation matrix breaks transitivity for informative reasons — deletions, intragenic complementation of multimers, second-site non-complementation. *([3.1](lessons/03-01-gene-as-molecule-complementation.md))*
- "Silent" refers to the amino acid, not to the phenotype — synonymous changes can wreck splice enhancers, folding, and mRNA stability. *([3.2](lessons/03-02-mutation.md))*
- A nonsense mutation usually makes **no** protein, not a truncated one — NMD gets there first, and whether it fires decides null versus dominant negative. *([3.2](lessons/03-02-mutation.md))*
- Most phenotypic "revertants" are suppressors elsewhere, not true reversions. *([3.2](lessons/03-02-mutation.md))*
- The mutation rate is not the damage rate — it is what survives three multiplicative filters, so losing one is a hundredfold. *([3.3](lessons/03-03-dna-repair.md))*
- Not all repair defects cause cancer: Cockayne (transcription-coupled NER) is neurological and **not** cancer-prone; xeroderma pigmentosum (global NER) is overwhelmingly so. *([3.3](lessons/03-03-dna-repair.md))*
- Lactose does not turn the operon on; it removes a repressor. *([3.4](lessons/03-04-prokaryotic-regulation-operon.md))*
- In a merodiploid, reason about **each operon separately** and then add — never about the cell as a whole. *([3.4](lessons/03-04-prokaryotic-regulation-operon.md))*
- $I^{-}$ (makes nothing) is recessive; $I^{S}$ (makes a poison) is dominant. Same gene, opposite dominance. *([3.4](lessons/03-04-prokaryotic-regulation-operon.md))*
- Eukaryotic regulation is mostly **activation**, because packaged DNA is off by default — the operon's logic inverts. *([3.5](lessons/03-05-eukaryotic-regulatory-logic-epigenetics.md))*
- **A normal sequence is not a normal genome** — uniparental disomy and imprinting epimutations both leave the letters intact and cause disease. *([3.5](lessons/03-05-eukaryotic-regulatory-logic-epigenetics.md))*
- Endpoint PCR is not quantitative; measure the **cycle**, not the product. *([3.6](lessons/03-06-reading-editing-genes.md))*
- CRISPR cuts; the cell edits — and ~90 percent of edited cells get an indel, i.e. a **new null allele**, not a neutral failure. *([3.6](lessons/03-06-reading-editing-genes.md))*

### Populations and prediction

- Heritability is a property of a **population in an environment**; standardize the environment and it rises with no genetic change. *([4.1](lessons/04-01-quantitative-traits-heritability.md))*
- High heritability does not mean hard to change — PKU is ~100 percent genetic and entirely preventable by diet. *([4.1](lessons/04-01-quantitative-traits-heritability.md))*
- A within-group heritability says **nothing** about a between-group difference. *([4.1](lessons/04-01-quantitative-traits-heritability.md))*
- A negative $c^2$ in a twin study is evidence about architecture (non-additive variance), not a data error. *([4.1](lessons/04-01-quantitative-traits-heritability.md))*
- Use $h^2$ in the breeder's equation, never $H^2$. *([4.2](lessons/04-02-response-to-selection-qtl.md))*
- Never read a plateau as exhausted variance without **relaxing or reversing** selection to test it. *([4.2](lessons/04-02-response-to-selection-qtl.md))*
- Selecting harder has diminishing returns *and* shrinks $N_e$, eroding the variance you need. *([4.2](lessons/04-02-response-to-selection-qtl.md), [4.3](lessons/04-03-inbreeding-relatedness-structure.md))*
- Detected QTL and early GWAS effect sizes are inflated by the winner's curse. *([4.2](lessons/04-02-response-to-selection-qtl.md), [4.4](lessons/04-04-linkage-disequilibrium-gwas.md))*
- Inbreeding does not change allele frequencies, and the consanguinity multiplier $1+F/q$ is large only for **rare** alleles. *([4.3](lessons/04-03-inbreeding-relatedness-structure.md))*
- A heterozygote deficit at one locus cannot distinguish inbreeding from structure — that needs many loci and a clustering analysis. *([4.3](lessons/04-03-inbreeding-relatedness-structure.md))*
- $N_e$, not census size: 400 cows and 8 bulls is $N_e = 31$. *([4.3](lessons/04-03-inbreeding-relatedness-structure.md))*
- Linkage is geography; LD is history. Use $r^2$ (not $D'$) for study design. *([4.4](lessons/04-04-linkage-disequilibrium-gwas.md))*
- A GWAS hit is an address, not a mechanism; $p = 10^{-6}$ is not significant; a lone significant SNP with no supporting neighbours is an artefact. *([4.4](lessons/04-04-linkage-disequilibrium-gwas.md))*
- **Never treat a screening result as diagnostic** — PPV depends on prevalence, and for rare conditions most positives are false. *([4.5](lessons/04-05-human-genetics-genome-medicine.md))*
- **Never act on a VUS.** It is an absence of information, not a weak positive. *([4.5](lessons/04-05-human-genetics-genome-medicine.md))*
- Quote **absolute** risk; a tripled risk of a 0.1 percent condition is 0.3 percent. *([4.5](lessons/04-05-human-genetics-genome-medicine.md))*
- Penetrance estimates from multi-case families are biased upward by ascertainment. *([4.5](lessons/04-05-human-genetics-genome-medicine.md))*
- A polygenic score is a sum of tags, and tags do not transfer across ancestries. *([4.5](lessons/04-05-human-genetics-genome-medicine.md))*
