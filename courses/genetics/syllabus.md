# Genetics — Syllabus

> Life Sciences · Tier 1 · 19 lessons · Prereqs: [general-biology](../general-biology/syllabus.md) · Roadmap id: `genetics`

## Goal

Learn to read heredity as a predictive science: from a single cross you should be able to say what the offspring will look like and with what probability, and from offspring ratios you should be able to reconstruct the genes, their interactions, and their arrangement on chromosomes. You will trace information from allele to phenotype through transmission, linkage, molecular sequence, and regulatory logic, then zoom out to variance you can partition and to the correlations between loci that let you *map* a trait in a whole population.

**Scope discipline.** This course owns the *gene* — its transmission, its position, its damage and repair, its regulatory logic, and how you locate one statistically. It does not re-derive material other courses in this library own:

| Already taught elsewhere | Owner |
|---|---|
| DNA structure, base pairing, the genetic code, replication | [general-biology](../general-biology/syllabus.md) 3.3–3.4 · [biochemistry](../biochemistry/syllabus.md) 4.4–4.5 |
| Meiosis, chromosomes, and how crossing over physically happens | [general-biology](../general-biology/syllabus.md) 2.5 |
| Hardy–Weinberg, drift, gene flow, selection as **evolutionary forces** | [general-biology](../general-biology/syllabus.md) 4.2 · [evolution-ecology](../evolution-ecology/syllabus.md) 1.3–1.5 |
| Molecular clocks, coalescence, phylogenetic inference | [evolution-ecology](../evolution-ecology/syllabus.md) 2.3 |
| Chromatin machinery, the transcription apparatus, RNA processing, protein turnover | [molecular-cell-biology](../molecular-cell-biology/syllabus.md) 4.1–4.4 |
| Sequence-alignment and phylogeny **algorithms** | [computational-biology](../computational-biology/syllabus.md) |

Hardy–Weinberg is *used* throughout Module 4 as a calculator; it is derived in `general-biology` 4.2 and pushed to Tier-1 depth in `evolution-ecology` 1.3. Every such assumption is listed on the [reference card](reference.md) with a pointer to where it is taught.

## Dangerous Checklist

When you finish, you can:

- [ ] Predict offspring phenotypic and genotypic ratios from any mono- or dihybrid cross using the product and sum rules instead of drawing Punnett squares
- [ ] Diagnose an inheritance pattern (dominant/recessive, autosomal/X-linked) from a pedigree and compute the probability an individual is a carrier or affected
- [ ] Recognize incomplete dominance, codominance, multiple alleles, lethal alleles, epistasis, and pleiotropy from modified $F_2$ ratios and explain the mechanism behind each
- [ ] Use a complementation test to decide whether two mutations lie in the same gene
- [ ] Compute recombination frequency between two loci and convert it to map distance
- [ ] Order three genes and assign map distances from a three-point testcross, and quantify interference
- [ ] Classify mutations by molecular change and phenotypic effect, and name the repair pathway that reverses each lesion
- [ ] Predict expression of the *lac* and *trp* operons for any regulatory genotype, including cis/trans reasoning in merodiploids
- [ ] Partition phenotypic variance and estimate broad- and narrow-sense heritability, and predict a trait's response to selection
- [ ] Compute an inbreeding coefficient from a pedigree and correct Hardy–Weinberg genotype frequencies for it
- [ ] Detect population structure from an excess of homozygotes and quantify it with $F_{ST}$
- [ ] Compute linkage disequilibrium between two markers and explain why LD is what makes association mapping possible
- [ ] Read a GWAS result critically — distinguish a tagging marker from a causal variant, and a significant hit from a useful one
- [ ] Outline how cloning, PCR, sequencing, and CRISPR let you read, amplify, and edit a gene

## Modules

### Module 1: Transmission Genetics — Mendel & Its Extensions

Start from Mendel's two laws as a probability engine, then watch every "exception" — dominance that isn't clean, genes that mask each other, alleles that kill — turn out to obey the same engine.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Mendel's laws as probability | Predict mono- and dihybrid outcomes with the product/sum rules | Segregation, independent assortment, alleles, homo/heterozygous, testcross, $9{:}3{:}3{:}1$ |
| 1.2 | When dominance breaks down | Read $F_2$ ratios under incomplete/codominance and multiple alleles | Incomplete dominance, codominance, allelic series, ABO blood groups, lethal alleles ($2{:}1$) |
| 1.3 | Genes interacting: epistasis & pleiotropy | Explain modified dihybrid ratios by gene interaction | Epistasis, complementary genes ($9{:}7$), duplicate genes, pleiotropy, penetrance & expressivity |
| 1.4 | Pedigrees & human inheritance | Infer mode of inheritance and compute carrier/affected probabilities | Pedigree symbols, autosomal dom/rec, conditional probability, Bayesian carrier updates |

**Boss problem 1:** In sweet peas, purple pigment requires a dominant allele at *both* genes $C$ and $P$ (genotype $C\_P\_$); every other genotype is white — complementary gene action giving a $9{:}7$ ratio. (a) From $CcPp \times CcPp$, give the phenotypic ratio and $P(\text{purple})$. (b) A purple plant of unknown genotype is testcrossed to $ccpp$ and $\tfrac14$ of the offspring are purple — what was its genotype, and why? (c) Two *pure-breeding white* strains, $CCpp$ and $ccPP$, are crossed; predict the phenotype of the $F_1$ and the $F_2$ ratio, and explain what the surprising $F_1$ reveals about the two genes.

### Module 2: Linkage, Mapping & Chromosomes

Independent assortment was a special case. Here genes ride the same chromosome, recombination becomes a ruler, and a table of offspring counts becomes a map.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The chromosomal basis of inheritance & sex linkage | Predict X-linked inheritance and reciprocal-cross asymmetry | Chromosome theory, sex determination, X-linkage, hemizygosity, criss-cross inheritance, dosage compensation |
| 2.2 | Linkage & recombination | Compute recombination frequency and detect linked loci | Linked genes, coupling vs. repulsion, crossing over, RF, parental vs. recombinant classes |
| 2.3 | Three-point mapping | Order three genes and assign map distances from a testcross | Three-point testcross, gene order from double crossovers, map units (cM), interference & coincidence |
| 2.4 | Chromosomal mutations | Predict the meiotic and phenotypic consequences of chromosome changes | Nondisjunction, aneuploidy, deletions/duplications, inversions, translocations, balanced vs. unbalanced |

**Boss problem 2:** A trihybrid $ABC/abc$ is testcrossed to $abc/abc$, giving 1000 offspring: $ABC$ 340, $abc$ 348, $aBC$ 60, $Abc$ 62, $ABc$ 88, $abC$ 90, $AbC$ 6, $aBc$ 6. (a) Identify the parental and double-crossover classes and use them to determine the gene order. (b) Compute the two map distances and draw the linkage map. (c) Compute the coefficient of coincidence and the interference, and say in one sentence what interference means physically.

### Module 3: Molecular Genetics & Gene Regulation

The gene stops being an abstract "factor" and becomes a stretch of DNA that can be mutated, repaired, switched on and off — and, at the end, read, copied, and edited.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The gene as a molecule | Connect DNA sequence to the classical gene via complementation | DNA structure, one gene–one polypeptide, cistron, complementation test, gene ≠ locus vs. mutation site |
| 3.2 | Mutation | Classify mutations by molecular change and phenotypic effect | Point/frameshift, transitions/transversions, missense/nonsense/silent, forward vs. reverse, mutation rate |
| 3.3 | DNA repair | Match each lesion to the pathway that fixes it, and link repair failure to disease | Proofreading, mismatch repair, base/nucleotide excision, direct reversal, mutator phenotypes |
| 3.4 | Prokaryotic regulation: the operon | Predict operon output for any regulatory genotype | *lac* operon, induction, negative/positive control, CAP–cAMP, *trp* attenuation, cis vs. trans, merodiploids |
| 3.5 | Eukaryotic regulatory logic & epigenetic inheritance | Predict inheritance patterns that DNA sequence alone cannot explain | *cis* vs. *trans* acting elements in eukaryotes, enhancer logic, position effect, genomic imprinting, X-inactivation & mosaicism, parent-of-origin pedigrees |
| 3.6 | Reading & editing genes (a taste) | Outline how to clone, amplify, sequence, and edit a target gene | Restriction enzymes & cloning, PCR, Sanger vs. NGS sequencing, CRISPR-Cas9, reporter/knockout logic |

**Boss problem 3:** For each *E. coli* genotype below, state whether functional β-galactosidase (the *lacZ* product) is made in the **absence** and in the **presence** of lactose, and justify in one phrase: (a) $I^{+}\,P^{+}\,O^{+}\,Z^{+}$; (b) $I^{-}\,P^{+}\,O^{+}\,Z^{+}$; (c) $I^{S}\,P^{+}\,O^{+}\,Z^{+}$; (d) merodiploid $I^{-}\,O^{+}\,Z^{-}\,/\,I^{+}\,O^{+}\,Z^{+}$; (e) merodiploid $I^{+}\,O^{c}\,Z^{-}\,/\,I^{+}\,O^{+}\,Z^{+}$. For (d) name which allele is dominant and why; for (e) explain why $O^{c}$ behaves differently from $I^{-}$.

### Module 4: Quantitative Genetics, Populations & Genomes

Zoom out from one cross to a whole population. Single genes give way to variance you partition statistically; single loci give way to correlations between loci, which is exactly the handle that lets you *find* a gene you have never seen.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Quantitative traits & heritability | Partition phenotypic variance and estimate heritability | Polygenic/continuous traits, $V_P = V_G + V_E$, additive variance, $H^2$ vs. $h^2$, twin and parent–offspring estimates |
| 4.2 | Response to selection & QTL mapping | Predict a trait's response to selection and locate the loci behind it | Breeder's equation $R = h^2 S$, selection differential, realized heritability, QTL mapping, marker–trait association, LOD scores |
| 4.3 | Inbreeding, relatedness & population structure | Compute an inbreeding coefficient and correct genotype frequencies for it | Path counting, inbreeding coefficient $F$, kinship & coefficient of relationship, $q^2 + Fpq$, inbreeding depression, Wahlund effect, $F_{ST}$ |
| 4.4 | Linkage disequilibrium, haplotypes & GWAS | Compute LD between markers and explain how it makes association mapping work | $D$ and $D'$, $r^2$, decay $D_t = D_0(1-c)^t$, haplotype blocks, tagging SNPs, GWAS design, Manhattan plots, population stratification |
| 4.5 | Human genetics: risk, testing & genome medicine | Turn genetic information into a calibrated statement about one person's risk | Polygenic risk scores, penetrance vs. relative risk, variant classification (VUS), carrier & prenatal screening, pharmacogenomics, gene therapy |

**Boss problem 4:** A recessive metabolic disorder afflicts 1 in 10,000 newborns in a large, randomly mating population. (a) Compute the allele and carrier frequencies under Hardy–Weinberg, and state the carriers-per-affected ratio. (b) In an isolated village within that population, first-cousin marriages are common enough that the average inbreeding coefficient is $F = 0.01$. Recompute the frequency of affected births there using $q^2 + Fpq$, and state the fold-increase — this is the quantitative core of why consanguinity matters. (c) A GWAS in the wider population finds a SNP associated with the disorder at $p = 3\times10^{-9}$, but the SNP lies in an intergenic region 40 kb from the known causal gene. Explain, using linkage disequilibrium, why this is exactly what you should expect and why the SNP is almost certainly not causal. (d) A quantitative trait in the same population has $h^2 = 0.5$; breeders select parents whose mean exceeds the population mean by $S = 10$. Predict $R$, and explain in one sentence why extreme parents give a muted response.

> Note (2026-08-26): revised from a 17-lesson draft that duplicated `general-biology` 4.2 and `evolution-ecology` 1.3–1.5. Hardy–Weinberg and the four evolutionary forces now belong to `evolution-ecology`, which builds a whole module on them; molecular clocks and coalescence go there too. In their place Module 4 takes the material that is genuinely genetics' own and appears nowhere else in the library: inbreeding and population structure (4.3), linkage disequilibrium and association mapping (4.4) — the direct sequel to Module 2's linkage — and human genome medicine (4.5). Lesson 3.5 was narrowed to regulatory *logic* and epigenetic inheritance patterns; the chromatin and transcription *machinery* is owned by `molecular-cell-biology` 4.1–4.2. Still 19 lessons.

## Sources of truth

- Griffiths et al., *Introduction to Genetic Analysis* — problem style, three-point mapping and operon conventions.
- Hartwell et al., *Genetics: From Genes to Genomes* — molecular-to-population narrative arc.
- Hartl & Clark, *Principles of Population Genetics* — inbreeding, $F$-statistics, and linkage-disequilibrium notation.
- Pierce, *Genetics: A Conceptual Approach* — pedigree and probability worked-example style.
