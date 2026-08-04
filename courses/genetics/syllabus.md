# Genetics — Syllabus

> Life Sciences · Tier 1 · ~19 lessons · Prereqs: [general-biology](../general-biology/syllabus.md) · Roadmap id: `genetics`

## Goal

Learn to read heredity as a predictive science: from a single cross you should be able to say what the offspring will look like and with what probability, and from offspring ratios you should be able to reconstruct the genes, their interactions, and their arrangement on chromosomes. You will trace information from allele to phenotype through transmission, linkage, molecular sequence, and regulation, then zoom out to whole populations to predict how allele frequencies drift and shift under selection. This is the *inheritance-to-population* backbone; it deliberately skips deep molecular lab technique and bioinformatics algorithms (that's `computational-biology`) — recombinant-DNA and genomics tools appear only as a working taste.

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
- [ ] Test a population for Hardy–Weinberg equilibrium and estimate allele frequencies from phenotype counts
- [ ] Predict how selection, drift, migration, and mutation change allele frequencies over generations
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
| 3.5 | Eukaryotic regulation | Explain how eukaryotes control expression across many layers | Chromatin & histone modification, enhancers/TFs, RNA splicing, epigenetics, imprinting |
| 3.6 | Reading & editing genes (a taste) | Outline how to clone, amplify, sequence, and edit a target gene | Restriction enzymes & cloning, PCR, Sanger vs. NGS sequencing, CRISPR-Cas9, reporter/knockout logic |

**Boss problem 3:** For each *E. coli* genotype below, state whether functional β-galactosidase (the *lacZ* product) is made in the **absence** and in the **presence** of lactose, and justify in one phrase: (a) $I^{+}\,P^{+}\,O^{+}\,Z^{+}$; (b) $I^{-}\,P^{+}\,O^{+}\,Z^{+}$; (c) $I^{S}\,P^{+}\,O^{+}\,Z^{+}$; (d) merodiploid $I^{-}\,O^{+}\,Z^{-}\,/\,I^{+}\,O^{+}\,Z^{+}$; (e) merodiploid $I^{+}\,O^{c}\,Z^{-}\,/\,I^{+}\,O^{+}\,Z^{+}$. For (d) name which allele is dominant and why; for (e) explain why $O^{c}$ behaves differently from $I^{-}$.

### Module 4: Quantitative & Population Genetics

Zoom out. Single genes give way to variance you partition statistically, and single crosses give way to whole populations whose allele frequencies you can track forward in time.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Quantitative traits & heritability | Partition phenotypic variance and estimate heritability | Polygenic/continuous traits, $V_P = V_G + V_E$, additive variance, $H^2$ vs. $h^2$, twin/parent-offspring estimates |
| 4.2 | Response to selection & QTL | Predict a trait's response to selection and locate the loci behind it | Breeder's equation $R = h^2 S$, selection differential, QTL mapping, marker–trait association |
| 4.3 | Hardy–Weinberg equilibrium | Estimate allele frequencies and test a population for equilibrium | $p^2{:}2pq{:}q^2$, HW assumptions, allele-frequency estimation, X-linked & multiple-allele HW |
| 4.4 | Evolutionary forces | Predict how selection, drift, migration & mutation move allele frequencies | Selection coefficient, $\Delta q$, genetic drift & effective population size, gene flow, mutation–selection balance |
| 4.5 | Human & evolutionary genetics (a taste) | Read genetic variation as a record of ancestry and disease risk | GWAS logic, linkage disequilibrium, coalescence intuition, polygenic risk, molecular clocks |

**Boss problem 4:** A recessive metabolic disorder afflicts 1 in 10,000 newborns in a large, randomly mating population. (a) Assuming Hardy–Weinberg equilibrium, compute the allele frequencies and the carrier frequency, and state the striking ratio of carriers to affected individuals. (b) The disorder is effectively lethal before reproduction (selection coefficient $s = 1$ against the homozygote); at mutation–selection balance, what mutation rate $\mu$ sustains the observed allele frequency? (c) In the same population a quantitative trait has narrow-sense heritability $h^2 = 0.5$, and breeders select parents whose mean exceeds the population mean by $S = 10$; predict the response $R$ in the next generation and explain in one sentence why extreme parents still give a muted response.

> Note (2026-08-04): landed at 17 lessons vs. the ~16 target (within tolerance). Module 3 carries an extra lesson so the recombinant-DNA/genomics "taste" isn't crammed into regulation, and Module 4 closes with a short human/evolutionary-genetics capstone that bridges to `evolution-ecology` and `computational-biology`.

## Sources of truth

- Griffiths et al., *Introduction to Genetic Analysis* — problem style, three-point mapping and operon conventions.
- Hartwell et al., *Genetics: From Genes to Genomes* — molecular-to-population narrative arc.
- Hartl & Clark, *Principles of Population Genetics* — Hardy–Weinberg and evolutionary-force notation.
- Pierce, *Genetics: A Conceptual Approach* — pedigree and probability worked-example style.
