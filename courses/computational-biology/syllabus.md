# Computational Biology — Syllabus

> Life Sciences · Tier 2 · ~20 lessons · Prereqs: [molecular-cell-biology](../molecular-cell-biology/syllabus.md), [algorithms](../algorithms/syllabus.md) · Roadmap id: `computational-biology`

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

The foundational layer: how we represent biological sequence, measure similarity with dynamic programming, and search enormous databases fast enough to be useful.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Sequences, alphabets & databases | Read the central-dogma alphabets and the file formats/databases the field lives in | DNA/RNA/protein alphabets, FASTA, GenBank/UniProt, homology vs similarity |
| 1.2 | Scoring similarity | Turn "how alike are two sequences" into a number you can optimize | edit distance, match/mismatch scores, PAM & BLOSUM matrices, log-odds |
| 1.3 | Needleman–Wunsch: global alignment | Fill the global-alignment DP matrix and trace back the optimum | DP recurrence, initialization, traceback, gap penalties |
| 1.4 | Smith–Waterman & affine gaps | Find the best *local* alignment and model realistic gaps | local vs global, zero-floor, affine gap (Gotoh), open vs extend |
| 1.5 | BLAST & heuristic search | Explain why seeded heuristic search scales and how to trust a hit | seeding/extension, word hits, E-value & bit score, sensitivity trade-off |

**Boss problem 1:** Given two 7-letter sequences and a scoring scheme (match +1, mismatch −1, linear gap −2), fill the full Needleman–Wunsch matrix, trace back one optimal global alignment and report its score; then redo the *first row/column initialization* for Smith–Waterman, identify the single highest-scoring cell, and trace back the optimal local alignment. Explain in one sentence why the two answers differ.

### Module 2: Phylogenetics & evolutionary models

From aligning two sequences to aligning many and inferring the evolutionary tree that relates them — by distance, by parsimony, and by likelihood.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Multiple sequence alignment | Explain why MSA is hard and how progressive alignment sidesteps it | sum-of-pairs cost, NP-hardness, guide trees, progressive/iterative (Clustal-style) |
| 2.2 | Trees & distance methods | Build a tree from a distance matrix and know what the branches mean | rooted/unrooted trees, additivity, UPGMA, neighbor-joining |
| 2.3 | Parsimony | Score a tree by minimum changes and reconstruct ancestral states | maximum parsimony, Fitch algorithm, small vs large parsimony, homoplasy |
| 2.4 | Substitution models | Model how sequences change over time to enable likelihood | Jukes–Cantor, Kimura 2-parameter, rate matrices, multiple-hit correction |
| 2.5 | Maximum likelihood & molecular clocks | Set up ML tree inference and reason about clock-based dating | tree likelihood, Felsenstein pruning (idea), bootstrap support, molecular clock |

**Boss problem 2:** From a 4-taxon distance matrix, run one full neighbor-joining step (compute the Q-matrix, pick the pair to join, compute the new branch lengths and reduced matrix). Separately, given a 4-taxon × 4-site character matrix and one candidate tree topology, use Fitch's algorithm to score its parsimony length. State whether the distance tree and the most-parsimonious topology agree, and name one reason they might not.

### Module 3: Probabilistic models — HMMs & gene finding

The probabilistic engine of the field: hidden Markov models, the algorithms that make them usable, and their two flagship applications — sequence families and gene finding.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Markov chains to HMMs | Model a sequence as hidden states emitting observed letters | Markov property, transition/emission probabilities, the CpG-island / dishonest-casino setup |
| 3.2 | Viterbi & forward algorithms | Decode the most likely state path and compute sequence probability | Viterbi DP, forward algorithm, log-space, posterior decoding (idea) |
| 3.3 | Profile HMMs | Represent a whole protein family as one probabilistic model | match/insert/delete states, Pfam profiles, HMMER vs BLAST |
| 3.4 | Gene finding | Turn HMMs into a genome annotator that finds coding structure | exons/introns/splice signals, GHMM state grammar, prokaryote vs eukaryote |

**Boss problem 3:** For a 2-state HMM (fair/loaded die, or CpG/normal) with given transition and emission tables, run the Viterbi algorithm on a 4-symbol observed sequence in log-space: fill the trellis, keep back-pointers, and report the single most likely hidden-state path and its log-probability. Then state, in one sentence, how the *forward* algorithm's answer to "probability of this sequence" differs from what Viterbi computed.

### Module 4: Genomics, transcriptomics & structure

Modern high-throughput biology: reconstructing and reading genomes from short reads, quantifying expression, and a taste of structure prediction and biological networks.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | NGS & read mapping | Explain how billions of short reads get placed on a reference fast | sequencing reads, BWT/FM-index intuition, seed-and-extend mapping, coverage |
| 4.2 | Genome assembly | Reconstruct a genome with no reference via graph walks | overlap vs de Bruijn graphs, k-mers, Eulerian path, repeats & contigs |
| 4.3 | Variant calling | Separate true genetic variants from sequencing noise | pileups, SNPs/indels, genotype likelihoods, base-quality & filtering |
| 4.4 | Transcriptomics & expression | Turn RNA-seq counts into biology: what's on, what's different | read counts, normalization, clustering, differential expression, multiple testing |
| 4.5 | Structure & the AlphaFold era | Explain what structure prediction now does and what it encodes | primary→tertiary, contact/distance maps, coevolution, AlphaFold's leap, limits |
| 4.6 | Biological networks | Read a cell's interactions as a graph and mine it | PPI/regulatory/metabolic networks, degree distribution, hubs, modules/motifs |

**Boss problem 4:** Given a short set of k-mers (k = 3) drawn from an unknown DNA string, build the de Bruijn graph (nodes = (k−1)-mers, edges = k-mers), verify it has an Eulerian path by checking node in/out-degrees, and reconstruct the original string. Then, given a tiny read pileup at one reference position (e.g. 8 reads, 6 showing A and 2 showing G, with stated base-quality), argue whether this is a real heterozygous variant or likely error, and name the single piece of information that would most change your call.

## Sources of truth

- Durbin, Eddy, Krogh & Mitchison, *Biological Sequence Analysis* — the canonical reference for alignment, HMMs, and profile models (notation and rigor level).
- Jones & Pevzner, *An Introduction to Bioinformatics Algorithms* — for algorithmic framing and worked DP/graph examples.
- Felsenstein, *Inferring Phylogenies* — for tree-building conventions and likelihood methods.
- Compeau & Pevzner, *Bioinformatics Algorithms* — for assembly (de Bruijn) and modern sequencing-analysis conventions.
