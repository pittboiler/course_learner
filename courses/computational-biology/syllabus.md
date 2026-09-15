# Computational Biology — Syllabus

> Life Sciences · Tier 2 · 31 lessons · Prereqs: [molecular-cell-biology](../molecular-cell-biology/syllabus.md), [algorithms](../algorithms/syllabus.md) · Roadmap id: `computational-biology`

## Goal

This course makes you fluent in the algorithms that turn raw biological sequence into biological meaning: aligning DNA and protein, searching billion-letter databases, reconstructing evolutionary trees, decoding genomes with probabilistic models, and reading the output of a modern sequencer. You will be able to hand-run the core dynamic programs (Needleman–Wunsch, Smith–Waterman, Viterbi) on small inputs, explain why the heuristics (BLAST, neighbor-joining, de Bruijn assembly) work and where they break, and reason about likelihood-based inference on molecular data. It deliberately skips wet-lab protocol detail and the deep measure-theoretic machinery of statistical genetics — enough probability to use the models correctly, not to prove their asymptotics.

## Dangerous Checklist

When you finish, you can:

- [ ] Fill a Needleman–Wunsch or Smith–Waterman DP matrix by hand and trace back the optimal alignment, then say what its score means biologically
- [ ] Choose and justify a scoring matrix (PAM vs BLOSUM) and a gap model (linear vs affine) for a given comparison
- [ ] Explain how BLAST turns an intractable search into a fast one, and estimate whether a hit's E-value is worth believing
- [ ] Build a phylogenetic tree from a distance matrix using neighbor-joining, and check it against a parsimony reconstruction
- [ ] Set up a maximum-likelihood tree inference and explain what a substitution model (Jukes–Cantor, Kimura) assumes
- [ ] Run the Viterbi algorithm on a small HMM to decode the most likely hidden-state path
- [ ] Explain how a profile HMM represents a protein family and how it beats a single-sequence search
- [ ] Reconstruct a short genome from k-mer reads via a de Bruijn graph Eulerian path
- [ ] Map short reads to a reference and reason about how a variant caller separates real SNPs from sequencing error
- [ ] Cluster an expression matrix and identify differentially expressed genes, stating the multiple-testing problem
- [ ] Describe what AlphaFold changed about structure prediction and what a contact/distance map encodes
- [ ] Read a biological network as a graph and name what its degree distribution and modules tell you

## Modules

### Module 1: Sequence alignment & database search

The foundational layer: how we represent biological sequence, turn similarity into a log-odds score, optimize it with dynamic programming, and search enormous databases fast enough to be useful — and know when a hit is real.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Sequences, alphabets & databases | Read the central-dogma alphabets and the file formats/databases the field lives in | DNA/RNA/protein alphabets, reverse complement, reading frames, FASTA, GenBank/UniProt, homology vs similarity |
| 1.2 | Substitution matrices as log-odds | Turn "how alike are two residues" into a number with a statistical meaning | log-odds, target vs background frequencies, PAM & BLOSUM, expected score < 0 |
| 1.3 | Needleman–Wunsch: global alignment | Fill the global-alignment DP matrix with a scoring scheme and trace back the optimum | recurrence with a matrix and gap penalty, alignment as a grid path, co-optimal alignments |
| 1.4 | Smith–Waterman & semi-global alignment | Find the best *local* alignment, and the end-gap-free variants | zero floor, max-cell start, overlap/fitting alignment, when to use which |
| 1.5 | Affine gaps (Gotoh) | Model realistic gaps without losing $O(mn)$ time | open vs extend, three-state recurrence, why one table fails |
| 1.6 | BLAST & heuristic search | Explain why seeded search scales and what it gives up | word neighbourhoods, threshold $T$, two-hit seeding, X-drop extension, spaced seeds |
| 1.7 | Alignment statistics & E-values | Decide whether a hit is worth believing | Karlin–Altschul, $\lambda$ and $K$, bit scores, E-value vs p-value, database-size effect |

**Boss problem 1:** Given two 7-letter sequences and a scoring scheme (match +1, mismatch −1, linear gap −2), fill the full Needleman–Wunsch matrix, trace back one optimal global alignment and report its score; then redo the *first row/column initialization* for Smith–Waterman, identify the single highest-scoring cell, and trace back the optimal local alignment. Explain in one sentence why the two answers differ.

### Module 2: Phylogenetics & evolutionary models

From aligning two sequences to aligning many and inferring the evolutionary tree that relates them — by distance, by parsimony, and by likelihood — and saying how much to trust the result.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Multiple sequence alignment | Explain why MSA is hard and how progressive alignment sidesteps it | sum-of-pairs, $O(2^k L^k)$ exact DP, guide trees, profile–profile alignment, "once a gap, always a gap" |
| 2.2 | Tree metrics & UPGMA | Know when a distance matrix *is* a tree, and cluster it | ultrametric & additive metrics, four-point condition, UPGMA, when UPGMA fails |
| 2.3 | Neighbor-joining | Build an unrooted tree from a non-clock distance matrix | $Q$-matrix, branch lengths, reduction step, consistency for additive data |
| 2.4 | Parsimony: Fitch & Sankoff | Score a tree by minimum changes and reconstruct ancestral states | small vs large parsimony, Fitch sets, weighted (Sankoff) parsimony, informative sites |
| 2.5 | Substitution models | Derive Jukes–Cantor and Kimura from a rate matrix | CTMC, $P(t)=e^{Qt}$, JC69 derivation, K2P, GTR and gamma rates (idea) |
| 2.6 | Tree likelihood & Felsenstein pruning | Compute the likelihood of a tree on real alignment columns | site independence, conditional likelihood vectors, pruning recursion, rooting invariance |
| 2.7 | Tree search & support | Search tree space and put error bars on clades | NNI/SPR neighbourhoods, hill-climbing, nonparametric bootstrap, Bayesian posterior (idea) |

**Boss problem 2:** From a 4-taxon distance matrix, run one full neighbor-joining step (compute the Q-matrix, pick the pair to join, compute the new branch lengths and reduced matrix). Separately, given a 4-taxon × 4-site character matrix and one candidate tree topology, use Fitch's algorithm to score its parsimony length. State whether the distance tree and the most-parsimonious topology agree, and name one reason they might not.

### Module 3: Probabilistic models — HMMs & gene finding

The probabilistic engine of the field: hidden Markov models, the three algorithms that make them usable (decode, score, train), and their two flagship applications — sequence families and gene finding.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Markov chains to HMMs | Model a sequence as hidden states emitting observed letters | Markov chain log-odds discrimination, CpG islands, transition/emission tables, the dishonest casino |
| 3.2 | Viterbi decoding | Decode the single most likely state path | trellis, back-pointers, log-space, ties |
| 3.3 | Forward, backward & posterior decoding | Compute $P(x)$ and per-position state posteriors | forward/backward recursions, scaling, posterior decoding vs Viterbi path |
| 3.4 | Training HMMs: Baum–Welch | Estimate transition and emission tables from unlabeled sequence | labeled counts + pseudocounts, expected counts, Viterbi training, local optima |
| 3.5 | Profile HMMs | Represent a whole protein family as one probabilistic model | match/insert/delete states, building from an MSA, HMMER vs BLAST |
| 3.6 | Gene finding | Turn HMMs into a genome annotator that finds coding structure | ORFs and codon statistics, splice signals, GHMM state grammar, prokaryote vs eukaryote |

**Boss problem 3:** For a 2-state HMM (fair/loaded die, or CpG/normal) with given transition and emission tables, run the Viterbi algorithm on a 4-symbol observed sequence in log-space: fill the trellis, keep back-pointers, and report the single most likely hidden-state path and its log-probability. Then state, in one sentence, how the *forward* algorithm's answer to "probability of this sequence" differs from what Viterbi computed.

### Module 4: Genomics — from reads to variants

Modern high-throughput genomics: what a sequencer emits, how billions of reads get placed or assembled, how genotypes are called from noisy pileups, and how the missing ones are filled in and the causal ones localized.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Sequencing reads & their errors | Read what a sequencer actually gives you and how much to trust it | short vs long reads, Phred quality, error profiles, Lander–Waterman contigs and gaps, paired ends |
| 4.2 | Read mapping: the BWT & FM-index | Place a read on a 3-billion-letter reference in time independent of genome size | suffix arrays, Burrows–Wheeler transform, LF-mapping, backward search, seed-and-extend, MAPQ |
| 4.3 | Genome assembly | Reconstruct a genome with no reference via graph walks | overlap vs de Bruijn graphs, k-mers, directed Eulerian path, repeats & contigs, choice of $k$ |
| 4.4 | Variant calling | Separate true genetic variants from sequencing noise | pileups, genotype likelihoods from base qualities, genotype priors, strand bias & filtering |
| 4.5 | Imputation & fine-mapping | Fill in untyped genotypes and localize the causal variant | Li–Stephens haplotype-copying HMM, approximate Bayes factors, posterior inclusion probabilities, credible sets |

**Boss problem 4:** Given a short set of k-mers (k = 3) drawn from an unknown DNA string, build the de Bruijn graph (nodes = (k−1)-mers, edges = k-mers), verify it has an Eulerian path by checking node in/out-degrees, and reconstruct the original string. Then, given a tiny read pileup at one reference position (e.g. 8 reads, 6 showing A and 2 showing G, with stated base-quality), argue whether this is a real heterozygous variant or likely error, and name the single piece of information that would most change your call.

### Module 5: Expression, structure & networks

Reading function off the genome: quantifying and comparing expression, predicting RNA and protein structure, and treating the cell's interactions as graphs to be described and inferred.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | RNA-seq quantification & normalization | Turn read counts into comparable expression values | length and depth bias, CPM/TPM, size factors (median of ratios), clustering an expression matrix |
| 5.2 | Differential expression & multiple testing | Decide which genes changed, controlling false discoveries | overdispersion, negative binomial, fold change vs significance, BH and q-values, $\pi_0$ |
| 5.3 | RNA secondary structure | Predict an RNA fold with dynamic programming on intervals | base pairs, nested structures, Nussinov recurrence, energy models (idea), pseudoknots |
| 5.4 | Structure & the AlphaFold era | Explain what structure prediction now does and what it encodes | contact/distance maps, coevolution & direct coupling, AlphaFold's architecture (idea), pLDDT, limits |
| 5.5 | Biological network structure | Read a cell's interactions as a graph and say what its shape means | degree distribution, hubs, clustering coefficient, preferential attachment, modularity |
| 5.6 | Inferring networks from data | Build an interaction graph from expression data without fooling yourself | correlation vs partial correlation, indirect edges, mutual information & data-processing inequality, guilt by association |

**Boss problem 5:** Given a 6-gene count table from two conditions (three replicates each) with library sizes, compute size factors, normalized counts and log2 fold changes; given the resulting six p-values, apply Benjamini–Hochberg at $q = 0.1$ and list the discoveries. Then, for three of the genes with a stated correlation matrix, compute the partial correlation of the two that look co-expressed given the third, and say whether the edge between them survives.

## Sources of truth

- Durbin, Eddy, Krogh & Mitchison, *Biological Sequence Analysis* — the canonical reference for alignment, HMMs, and profile models (notation and rigor level).
- Jones & Pevzner, *An Introduction to Bioinformatics Algorithms* — for algorithmic framing and worked DP/graph examples.
- Felsenstein, *Inferring Phylogenies* — for tree-building conventions and likelihood methods.
- Compeau & Pevzner, *Bioinformatics Algorithms* — for assembly (de Bruijn) and modern sequencing-analysis conventions.

## Syllabus revisions

**2026-09-15 — built out from ~20 to 31 lessons, 4 → 5 modules.** Every change was made before writing, from two diagnostics: a lesson carrying two separable skills, or a promise another built course makes about this one.

- **Old 1.2 re-aimed** to substitution matrices as log-odds. Edit distance and the prefix DP are owned by [algorithms 2.6](../algorithms/lessons/02-06-dp-on-sequences-lcs-and-edit-distance.md), which says in prose that this course's alignment module "*is* this lesson applied".
- **Old 1.4 split into 1.4 (local and semi-global) and 1.5 (affine gaps).** The zero floor and the three-state Gotoh recurrence are different skills; semi-global (overlap) alignment is added because assembly in 4.3 needs it.
- **Old 1.5 split into 1.6 (BLAST) and 1.7 (alignment statistics).** Karlin–Altschul statistics are unowned library-wide and the checklist asks for E-value judgement.
- **Old 2.2 split into 2.2 (tree metrics, UPGMA) and 2.3 (neighbor-joining).** Additivity and the four-point condition are what make NJ make sense.
- **New 2.7, tree search & support.** [evolution-ecology 2.3](../evolution-ecology/lessons/02-03-inferring-trees-dating.md) names NNI/SPR and the bootstrap and defers "tree-search heuristics" here "developed properly".
- **Old 2.5 molecular clock** content is owned by evolution-ecology 2.3 ($T = d/2\lambda$, relaxed clocks) and is cited, not retaught; 2.5 now *derives* Jukes–Cantor, which that lesson only states.
- **Old 3.2 split into 3.2 (Viterbi) and 3.3 (forward–backward, posterior decoding); new 3.4 (Baum–Welch).** No built lesson contains an HMM algorithm; [communications 4.4](../communications/lessons/04-04-convolutional-codes-viterbi.md) owns Viterbi only as a Hamming-metric trellis search.
- **Old 4.1 split into 4.1 (reads and errors) and 4.2 (BWT/FM-index).** Coverage $C = NL/G$ and $e^{-C}$ are owned by [genetics 3.6](../genetics/lessons/03-06-reading-editing-genes.md); this course adds Phred and Lander–Waterman contig statistics.
- **New 4.5, imputation & fine-mapping.** [genetics 4.5](../genetics/lessons/04-05-human-genetics-genome-medicine.md) hands "the algorithms behind variant calling, imputation and fine-mapping" to this course; genetics 4.4 owns LD and GWAS.
- **Old 4.4 split into 5.1 (quantification/normalization) and 5.2 (differential expression).** Bonferroni and BH are owned by [econometrics 2.7](../econometrics/lessons/02-07-multiple-testing-specification-search.md); this course adds the count model, q-values and $\pi_0$.
- **New 5.3, RNA secondary structure (Nussinov).** A core interval DP of the field (Durbin ch. 10) absent from the original outline.
- **Old 4.6 split into 5.5 (network structure) and 5.6 (network inference)**; motif Z-scores stay with [systems-biology 2.2](../systems-biology/lessons/02-02-negative-autoregulation.md).
- **New Boss problem 5** for the new module.

**Boss-problem audit.** Bosses 1–3 are templates without numbers (quiz-synthesis inspiration). Boss 4's k-mer set is unspecified; its pileup example (6 A / 2 G of 8) is a legitimate borderline case, verified in 4.4 to favour the heterozygote under ordinary base qualities. No defects.

**Answer-input doctrine.** Problems resolve to a number, a filled small table, an alignment written as two gapped strings, a tree in Newick notation, a state path, or a classification with its reason — never a drawing or a program. Problems with non-unique answers (co-optimal alignments, tied tracebacks, equally parsimonious reconstructions) open their solution with a one-line **accept criterion**.
