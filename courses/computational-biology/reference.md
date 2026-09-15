# Computational Biology · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Almost everything in this course is one of three moves: a **dynamic program** on the right subproblem (prefixes, trees, chains, intervals), a **log-odds score** judged against a null model, or an **index or graph** that changes a problem's cost. This card collects the recurrences, formulas, conventions and traps, grouped by the job they do.

**Conventions used throughout.** Scores are *maximized* and gap penalties are negative numbers added to the score. Affine gaps cost $d + (L-1)e$ for a gap of length $L$ (so NCBI's "open 11, extend 1", which means $11 + L$, is $d = 12$, $e = 1$ here). DP tables have sequence $x$ down the side and $y$ across the top. Logs are base 2 (bits) unless a formula says $\ln$. Branch lengths are expected substitutions per site. The Burrows–Wheeler terminator is written `#`.

**Scope and ownership.** This course cites, rather than re-derives:

| Topic | Owner | Used in |
|---|---|---|
| Prefix DP, LCS, edit distance, backtracking, Hirschberg | [algorithms 2.6](../algorithms/lessons/02-06-dp-on-sequences-lcs-and-edit-distance.md) | [1.3](lessons/01-03-needleman-wunsch-global-alignment.md) |
| Synapomorphy, long-branch attraction, tree counts, JC formula (stated), molecular clock, coalescent | [evolution-ecology 2.3](../evolution-ecology/lessons/02-03-inferring-trees-dating.md) | [2.2](lessons/02-02-tree-metrics-upgma.md)–[2.7](lessons/02-07-tree-search-and-support.md) |
| Viterbi on a code trellis (Hamming metric) | [communications 4.4](../communications/lessons/04-04-convolutional-codes-viterbi.md) | [3.2](lessons/03-02-viterbi-decoding.md) |
| EM algorithm, monotone ascent, label switching | [machine-learning 3.6](../machine-learning/lessons/03-06-the-em-algorithm.md), [statistical-learning 6.3](../statistical-learning/lessons/06-03-mixture-models-and-em.md) | [3.4](lessons/03-04-training-hmms-baum-welch.md) |
| Coverage $C = NL/G$, zero-coverage $e^{-C}$, Sanger and PCR | [genetics 3.6](../genetics/lessons/03-06-reading-editing-genes.md) | [4.1](lessons/04-01-sequencing-reads-and-errors.md) |
| Linkage disequilibrium, GWAS, the genome-wide threshold | [genetics 4.4](../genetics/lessons/04-04-linkage-disequilibrium-gwas.md) | [4.5](lessons/04-05-imputation-and-fine-mapping.md) |
| Undirected Euler theorem, Hamiltonian contrast | [graph-theory 1.4](../graph-theory/lessons/01-04-eulerian-hamiltonian.md) | [4.3](lessons/04-03-genome-assembly-de-bruijn.md) |
| Bonferroni proof, BH stated | [econometrics 2.7](../econometrics/lessons/02-07-multiple-testing-specification-search.md) | [5.2](lessons/05-02-differential-expression-multiple-testing.md) |
| Motif Z-scores against randomized networks | [systems-biology 2.2](../systems-biology/lessons/02-02-negative-autoregulation.md) | [5.5](lessons/05-05-biological-network-structure.md) |
| Protein structure levels, Anfinsen, Levinthal | [biochemistry 1.3](../biochemistry/lessons/01-03-four-levels-protein-structure.md), [1.4](../biochemistry/lessons/01-04-the-folding-problem.md) | [5.4](lessons/05-04-protein-structure-prediction-alphafold.md) |
| k-means, hierarchical clustering, PCA | [machine-learning 3.3](../machine-learning/lessons/03-03-k-means-clustering.md)–[3.4](../machine-learning/lessons/03-04-hierarchical-clustering.md), [3.2](../machine-learning/lessons/03-02-principal-component-analysis.md) | [2.2](lessons/02-02-tree-metrics-upgma.md), [5.1](lessons/05-01-rna-seq-quantification-normalization.md) |

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\Sigma$ | the alphabet: 4 bases or 20 amino acids | [1.1](lessons/01-01-sequences-alphabets-databases.md) |
| $\operatorname{rc}(x)$ | reverse complement: the other strand, read 5′→3′ | [1.1](lessons/01-01-sequences-alphabets-databases.md) |
| $p_a$, $q_{ab}$ | background frequency of residue $a$; target frequency of the aligned pair $a$ over $b$ in homologs | [1.2](lessons/01-02-substitution-matrices-log-odds.md) |
| $s(a,b)$ | substitution score, a log-odds value (BLOSUM62 is in half-bits) | [1.2](lessons/01-02-substitution-matrices-log-odds.md) |
| $\lambda$ | scale of a scoring system: $s = \frac1\lambda\log(q/pp)$; also the Karlin–Altschul constant | [1.2](lessons/01-02-substitution-matrices-log-odds.md), [1.7](lessons/01-07-alignment-statistics-e-values.md) |
| $F(i,j)$ | best score aligning prefixes $x_1..x_i$ and $y_1..y_j$ (local version: ending at $(i,j)$) | [1.3](lessons/01-03-needleman-wunsch-global-alignment.md) |
| $g$ | linear gap penalty per gap position (negative) | [1.3](lessons/01-03-needleman-wunsch-global-alignment.md) |
| $d$, $e$ | affine gap-open and gap-extend penalties (positive numbers, subtracted) | [1.5](lessons/01-05-affine-gaps-gotoh.md) |
| $M, X, Y$ | Gotoh tables: last column aligned, $x$ over gap, $y$ over gap | [1.5](lessons/01-05-affine-gaps-gotoh.md) |
| $w$, $T$ | BLAST word length and neighbourhood threshold | [1.6](lessons/01-06-blast-seeded-heuristic-search.md) |
| $X$ | X-drop: extension stops when the score falls $X$ below its best | [1.6](lessons/01-06-blast-seeded-heuristic-search.md) |
| $K$, $S'$, $E$ | Karlin–Altschul constant, bit score, E-value | [1.7](lessons/01-07-alignment-statistics-e-values.md) |
| $D_{ij}$ | distance between taxa $i$ and $j$ | [2.2](lessons/02-02-tree-metrics-upgma.md) |
| $R_i$, $Q(i,j)$ | neighbor-joining net divergence and pair criterion | [2.3](lessons/02-03-neighbor-joining.md) |
| $S_v$, $c_v$ | Fitch state set and cost at node $v$ | [2.4](lessons/02-04-parsimony-fitch-sankoff.md) |
| $Q$ (rate matrix), $P(t)$ | substitution rates; transition probabilities $e^{Qt}$ | [2.5](lessons/02-05-substitution-models.md) |
| $\alpha$, $\beta$, $\kappa$ | JC/K2P rates (transition, transversion) and their ratio $\alpha/\beta$ | [2.5](lessons/02-05-substitution-models.md) |
| $P$, $Q$ (K2P) | observed fractions of transition and transversion differences — fractions, not matrices | [2.5](lessons/02-05-substitution-models.md) |
| $L_v(x)$ | conditional likelihood: probability of data below node $v$ given base $x$ there | [2.6](lessons/02-06-tree-likelihood-felsenstein-pruning.md) |
| $\pi$, $\pi_i$ | a hidden state path and its state at position $i$ (also stationary frequencies in 2.5–2.6) | [3.1](lessons/03-01-markov-chains-to-hmms.md) |
| $a_{kl}$, $e_k(b)$ | HMM transition and emission probabilities | [3.1](lessons/03-01-markov-chains-to-hmms.md) |
| $v_k(i)$ | Viterbi score of the best path ending in state $k$ at $i$ (log) | [3.2](lessons/03-02-viterbi-decoding.md) |
| $f_k(i)$, $b_k(i)$ | forward and backward variables | [3.3](lessons/03-03-forward-backward-posterior-decoding.md) |
| $A_{kl}$, $E_k(b)$ | (expected) transition and emission counts | [3.4](lessons/03-04-training-hmms-baum-welch.md) |
| $M_k, I_k, D_k$ | profile HMM match, insert, delete states for column $k$ | [3.5](lessons/03-05-profile-hmms.md) |
| $Q$ (Phred) | quality score, $-10\log_{10}p_{\text{error}}$ | [4.1](lessons/04-01-sequencing-reads-and-errors.md) |
| $c$, $\theta$ | read coverage; minimum overlap as a fraction of read length | [4.1](lessons/04-01-sequencing-reads-and-errors.md) |
| $L$ (BWT), $C[a]$, $\text{Occ}(a,i)$, $\text{SA}$ | BWT last column; count of smaller characters; occurrences of $a$ in $L[0..i-1]$; suffix array | [4.2](lessons/04-02-read-mapping-bwt-fm-index.md) |
| $k$ (assembly) | $k$-mer length; nodes are $(k-1)$-mers | [4.3](lessons/04-03-genome-assembly-de-bruijn.md) |
| $\varepsilon_r$, $\theta$ (genetics) | error probability of read $r$; heterozygosity prior | [4.4](lessons/04-04-variant-calling-genotype-likelihoods.md) |
| $\rho$, $W$, $r$ | Li–Stephens switch probability; prior effect variance; $W/(W + \text{SE}^2)$ | [4.5](lessons/04-05-imputation-and-fine-mapping.md) |
| $c_{gj}$, $\ell_g$, $s_j$ | count of gene $g$ in sample $j$; gene length (kb); size factor | [5.1](lessons/05-01-rna-seq-quantification-normalization.md) |
| $\alpha$ (dispersion), $\pi_0$ | negative binomial overdispersion; fraction of true nulls | [5.2](lessons/05-02-differential-expression-multiple-testing.md) |
| $N(i,j)$, $h$ | Nussinov max pairs on interval $i..j$; minimum hairpin loop | [5.3](lessons/05-03-rna-secondary-structure-nussinov.md) |
| $C_{ij}$, $\text{MI}_{ij}$ | contact indicator; mutual information between alignment columns | [5.4](lessons/05-04-protein-structure-prediction-alphafold.md) |
| $k_i$, $C_i$, $Q$ (networks) | degree, clustering coefficient, modularity | [5.5](lessons/05-05-biological-network-structure.md) |
| $r_{XZ\cdot Y}$, $\Omega$ | partial correlation; precision (inverse covariance) matrix | [5.6](lessons/05-06-inferring-networks-from-data.md) |

## Definitions

### Reverse complement

The other strand of DNA, written in its own 5′→3′ direction: complement every base, then reverse.

$$\operatorname{rc}(x_1\cdots x_n) = c(x_n)\cdots c(x_1), \qquad c: A \leftrightarrow T,\ C \leftrightarrow G$$

*Introduced:* [1.1](lessons/01-01-sequences-alphabets-databases.md)

### Reading frame

One of six ways to cut DNA into codons: start at position 1, 2 or 3, on either strand.

Frames $+1, +2, +3$ read $x$; frames $-1, -2, -3$ read $\operatorname{rc}(x)$. An open reading frame is a run of codons with no stop (TAA, TAG, TGA).

*Introduced:* [1.1](lessons/01-01-sequences-alphabets-databases.md)

### FASTA format

The plain sequence file: a header line starting with `>`, then sequence lines. FASTQ adds a quality line per read ([4.1](lessons/04-01-sequencing-reads-and-errors.md)).

*Introduced:* [1.1](lessons/01-01-sequences-alphabets-databases.md)

### Expected k-mer count

How often a specific $k$-mer appears in a random genome — sets how long a seed must be to be unique.

$$\mathbb{E}[\text{occurrences}] \approx \frac{2G}{4^k} \quad\text{(both strands, uniform bases)}$$

Human ($G = 3.1\times10^9$) needs $k = 20$ for under 0.01; repeats make the real genome much worse.

*Introduced:* [1.1](lessons/01-01-sequences-alphabets-databases.md)

### Log-odds score

How much more likely an aligned pair is in homologs than by chance, on a log scale.

$$s(a,b) = \frac1\lambda\log\frac{q_{ab}}{p_ap_b}$$

Scores add along an ungapped alignment because likelihood ratios multiply.

*Introduced:* [1.2](lessons/01-02-substitution-matrices-log-odds.md)

### Expected score

The average score of an unrelated pair. It must be negative for local alignment to work.

$$\mathbb{E}_U[s] = \sum_{a,b}p_ap_b\,s(a,b) = -\frac1\lambda D(p\otimes p\,\|\,q) \le 0$$

*Introduced:* [1.2](lessons/01-02-substitution-matrices-log-odds.md)

### BLOSUM matrices

Substitution matrices counted from ungapped blocks of conserved protein regions, with sequences above $X$ percent identity clustered. **Lower $X$ = for more distant homologs.** BLOSUM62 is BLAST's default.

*Introduced:* [1.2](lessons/01-02-substitution-matrices-log-odds.md)

### PAM matrices

Substitution matrices extrapolated from close relatives by matrix powers: PAM$n$ uses $M^n$. **Higher $n$ = for more distant homologs.** Roughly, PAM250 ≈ BLOSUM45 and PAM160 ≈ BLOSUM62.

*Introduced:* [1.2](lessons/01-02-substitution-matrices-log-odds.md)

### Needleman-Wunsch

Global alignment: the best-scoring corner-to-corner path through the alignment grid.

$$F(i,0) = ig,\qquad F(0,j) = jg$$

$$F(i,j) = \max\begin{cases}F(i-1,j-1) + s(x_i,y_j)\\ F(i-1,j) + g\\ F(i,j-1) + g\end{cases}$$

Answer $F(m,n)$; $\Theta(mn)$ time. Ties in the traceback give co-optimal alignments.

*Introduced:* [1.3](lessons/01-03-needleman-wunsch-global-alignment.md)

### Smith-Waterman

Local alignment: the best-scoring pair of substrings. Add a zero option and read the maximum cell.

$$F(i,0) = F(0,j) = 0$$

$$F(i,j) = \max\begin{cases}0\\ F(i-1,j-1) + s(x_i,y_j)\\ F(i-1,j) + g\\ F(i,j-1) + g\end{cases}$$

Trace back from the maximum until a 0. Requires $\mathbb{E}[s] < 0$.

*Introduced:* [1.4](lessons/01-04-smith-waterman-local-alignment.md)

### Semi-global alignment

Alignment with only some ends free.

| variant | first row | first column | answer at |
|---|---|---|---|
| fitting ($x$ inside $y$) | 0 | $ig$ | $\max_j F(m,j)$ |
| overlap (suffix of $x$, prefix of $y$) | $jg$ | 0 | $\max_j F(m,j)$ |

*Introduced:* [1.4](lessons/01-04-smith-waterman-local-alignment.md)

### Affine gap penalty

Opening a gap costs more than extending it — one indel event of length $L$.

$$\gamma(L) = -\big(d + (L-1)e\big)$$

Equivalent to a geometric distribution of gap lengths.

*Introduced:* [1.5](lessons/01-05-affine-gaps-gotoh.md)

### Gotoh three-state recurrence

Affine gaps in $O(mn)$ by keeping the best score for each kind of last column.

$$M(i,j) = s(x_i,y_j) + \max\{M, X, Y\}(i-1,j-1)$$

$$X(i,j) = \max\{M(i-1,j) - d,\ X(i-1,j) - e\}$$

$$Y(i,j) = \max\{M(i,j-1) - d,\ Y(i,j-1) - e\}$$

*Introduced:* [1.5](lessons/01-05-affine-gaps-gotoh.md)

### BLAST neighbourhood

All words scoring at least $T$ against a query word; these seed database hits.

$$N_T(u) = \Big\{v : \sum_k s(u_k, v_k) \ge T\Big\}$$

Protein defaults: $w = 3$, $T = 11$, two-hit window 40, X-drop extension.

*Introduced:* [1.6](lessons/01-06-blast-seeded-heuristic-search.md)

### Spaced seed

A seed pattern that requires matches only at some positions within a window (e.g. `111010010100110111`). Same weight as a contiguous seed, less clumping, higher sensitivity (0.47 against 0.30 at 70 percent identity over 64 columns).

*Introduced:* [1.6](lessons/01-06-blast-seeded-heuristic-search.md)

### Karlin-Altschul lambda

The scale that turns a scoring matrix into probabilities.

$$\sum_{a,b}p_ap_b\,e^{\lambda s(a,b)} = 1,\ \lambda > 0$$

Implied target frequencies $q_{ab} = p_ap_be^{\lambda s(a,b)}$. Uniform DNA with $\pm1$ scoring: $\lambda = \ln 3$, tuned for 75 percent identity.

*Introduced:* [1.7](lessons/01-07-alignment-statistics-e-values.md)

### E-value

The expected number of chance hits at least this good in a search this big.

$$E = Kmn\,e^{-\lambda S},\qquad P(\ge 1) = 1 - e^{-E}$$

Not a probability, though $P \approx E$ for small $E$. Grows in proportion to database size.

*Introduced:* [1.7](lessons/01-07-alignment-statistics-e-values.md)

### Bit score

A raw score normalized so it means the same for every scoring system.

$$S' = \frac{\lambda S - \ln K}{\ln 2},\qquad E = mn\,2^{-S'}$$

Each bit halves the E-value.

*Introduced:* [1.7](lessons/01-07-alignment-statistics-e-values.md)

### Sum-of-pairs score

A multiple alignment's score: all induced pairwise alignment scores added (gap–gap pairs score 0).

$$\text{SP} = \sum_{\text{columns}}\ \sum_{p<q}\sigma\big(r^{(p)}_c, r^{(q)}_c\big)$$

*Introduced:* [2.1](lessons/02-01-multiple-sequence-alignment.md)

### Four-point condition

When a distance matrix is a tree: for every four leaves, the two largest of the three pair-sums are equal.

$$\{D_{ij} + D_{kl},\ D_{ik} + D_{jl},\ D_{il} + D_{jk}\}:\ \text{top two equal}$$

The smallest sum names the split; half the gap is the internal edge.

*Introduced:* [2.2](lessons/02-02-tree-metrics-upgma.md)

### Ultrametric

A clock-like distance: for every three leaves the two largest distances are equal. Every ultrametric is additive; not conversely.

*Introduced:* [2.2](lessons/02-02-tree-metrics-upgma.md)

### UPGMA

Average-linkage clustering read as a clock tree: join the closest clusters at height half their distance, and average distances weighted by cluster size.

$$D_{(A\cup B),K} = \frac{|A|D_{AK} + |B|D_{BK}}{|A| + |B|}$$

Correct for ultrametric data; fails under unequal rates.

*Introduced:* [2.2](lessons/02-02-tree-metrics-upgma.md)

### Neighbor-joining Q-criterion

Join the pair that is close *relative to how far each is from everyone else*.

$$R_i = \sum_k D_{ik},\qquad Q(i,j) = (n-2)D_{ij} - R_i - R_j$$

Branch lengths: $\delta_i = \frac{D_{ij}}{2} + \frac{R_i - R_j}{2(n-2)}$. Reduction: $D_{uk} = \frac12(D_{ik} + D_{jk} - D_{ij})$. Exact for additive data; output unrooted.

*Introduced:* [2.3](lessons/02-03-neighbor-joining.md)

### Fitch algorithm

Small parsimony for one site: intersect children's state sets if possible, otherwise take the union and add one change.

$$S_v = \begin{cases}S_a\cap S_b & \text{if non-empty}\\ S_a \cup S_b & \text{otherwise (+1)}\end{cases}$$

*Introduced:* [2.4](lessons/02-04-parsimony-fitch-sankoff.md)

### Sankoff algorithm

Weighted parsimony: each node stores a cost per possible state.

$$S_v(i) = \min_j[c(i,j) + S_a(j)] + \min_k[c(i,k) + S_b(k)]$$

*Introduced:* [2.4](lessons/02-04-parsimony-fitch-sankoff.md)

### Parsimony-informative site

A site where at least two states each occur in at least two taxa. Only these can prefer one tree over another.

*Introduced:* [2.4](lessons/02-04-parsimony-fitch-sankoff.md)

### Jukes-Cantor distance

Substitutions per site from observed differences, correcting for multiple hits (all changes equally likely).

$$p = \tfrac34\big(1 - e^{-4d/3}\big) \quad\Longleftrightarrow\quad d = -\tfrac34\ln\!\big(1 - \tfrac43p\big)$$

Derived from $P_0(t) = \frac14 + \frac34e^{-4\alpha t}$ with $d = 3\alpha t$. Undefined at $p \ge \frac34$.

*Introduced:* [2.5](lessons/02-05-substitution-models.md)

### Kimura two-parameter distance

Separate rates for transitions ($\alpha$) and transversions ($\beta$ each).

$$d = -\tfrac12\ln(1 - 2P - Q) - \tfrac14\ln(1 - 2Q)$$

$4\beta t = -\ln(1 - 2Q)$ and $2(\alpha + \beta)t = -\ln(1 - 2P - Q)$.

*Introduced:* [2.5](lessons/02-05-substitution-models.md)

### Felsenstein pruning

A tree's likelihood by passing "probability of the data below, for each base here" from leaves to root.

$$L_v(x) = \Big[\sum_y P_{xy}(b_a)L_a(y)\Big]\Big[\sum_z P_{xz}(b_b)L_b(z)\Big],\qquad L_{\text{site}} = \sum_x\pi_xL_{\text{root}}(x)$$

Reversible models: root position doesn't matter (pulley principle).

*Introduced:* [2.6](lessons/02-06-tree-likelihood-felsenstein-pruning.md)

### Tree rearrangement moves

Local-search neighbourhoods on unrooted binary trees with $n$ taxa.

$$|\text{NNI}| = 2(n-3),\qquad |\text{SPR}| = 2(n-3)(2n-7)$$

Number of unrooted trees: $(2n-5)!!$.

*Introduced:* [2.7](lessons/02-07-tree-search-and-support.md)

### Bootstrap support

The fraction of trees built from column-resampled alignments that contain a clade. Measures consistency, not correctness.

*Introduced:* [2.7](lessons/02-07-tree-search-and-support.md)

### Markov chain log-odds score

Discriminating two sequence classes by adjacent-letter statistics.

$$S(x) = \sum_i \log_2\frac{a^+_{x_{i-1}x_i}}{a^-_{x_{i-1}x_i}}$$

CpG islands: C→G is worth about 1.8 bits.

*Introduced:* [3.1](lessons/03-01-markov-chains-to-hmms.md)

### HMM joint probability

The probability of a sequence together with one hidden path.

$$P(x,\pi) = a_{0\pi_1}e_{\pi_1}(x_1)\prod_{i\ge2}a_{\pi_{i-1}\pi_i}e_{\pi_i}(x_i)$$

State run lengths are geometric with mean $1/(1 - a_{kk})$.

*Introduced:* [3.1](lessons/03-01-markov-chains-to-hmms.md)

### Viterbi algorithm

The single most probable hidden path, in log space.

$$v_l(i) = \log e_l(x_i) + \max_k[v_k(i-1) + \log a_{kl}]$$

Keep back-pointers; trace back from $\max_k v_k(L)$. $O(LK^2)$.

*Introduced:* [3.2](lessons/03-02-viterbi-decoding.md)

### Forward-backward algorithm

Sums over all paths from the left and from the right.

$$f_l(i) = e_l(x_i)\sum_kf_k(i-1)a_{kl},\qquad b_k(i) = \sum_la_{kl}e_l(x_{i+1})b_l(i+1)$$

$P(x) = \sum_kf_k(L)$, and both passes must give the same $P(x)$.

*Introduced:* [3.3](lessons/03-03-forward-backward-posterior-decoding.md)

### Posterior decoding

The most probable state at each position separately.

$$P(\pi_i = k\mid x) = \frac{f_k(i)\,b_k(i)}{P(x)}$$

Maximizes expected correct positions; the result may not be a valid path.

*Introduced:* [3.3](lessons/03-03-forward-backward-posterior-decoding.md)

### Baum-Welch algorithm

EM for HMMs: count expected transitions and emissions from posteriors, renormalize, repeat.

$$A_{kl} = \frac{1}{P(x)}\sum_if_k(i)\,a_{kl}\,e_l(x_{i+1})\,b_l(i+1)$$

$$E_k(b) = \frac{1}{P(x)}\sum_{i:\,x_i = b}f_k(i)\,b_k(i)$$

Never lowers the likelihood; finds local optima; needs pseudocounts.

*Introduced:* [3.4](lessons/03-04-training-hmms-baum-welch.md)

### Profile HMM

A family model with per-column match emissions and per-column insert/delete transition costs, built by counting an MSA with pseudocounts.

$$e_{M_k}(a) = \frac{c_k(a) + 1}{\sum_bc_k(b) + |\Sigma|}$$

Match columns: at most half gaps. Inserts emit background (zero log-odds).

*Introduced:* [3.5](lessons/03-05-profile-hmms.md)

### Coding potential

Codon-position-specific log-odds of a stretch read in frame $f$.

$$S_f(x) = \sum_i\log_2\frac{p_{c(i)}(x_i)}{q(x_i)}$$

*Introduced:* [3.6](lessons/03-06-gene-finding.md)

### Generalized HMM

An HMM whose states emit whole segments with arbitrary length distributions $\rho_k(d)$ — how gene finders model exon lengths. Intron phase $= $ coding bases so far $\bmod 3$.

*Introduced:* [3.6](lessons/03-06-gene-finding.md)

### Phred quality score

A base call's error probability on a decibel scale.

$$Q = -10\log_{10}p,\qquad p = 10^{-Q/10}$$

Q20 = 1 in 100, Q30 = 1 in 1,000. FASTQ character code $= Q + 33$.

*Introduced:* [4.1](lessons/04-01-sequencing-reads-and-errors.md)

### Lander-Waterman contig count

Expected number of contigs for random reads on a repeat-free genome.

$$\mathbb{E}[\text{contigs}] = N\,e^{-c(1-\theta)},\qquad c = NL/G,\ \theta = T/L$$

*Introduced:* [4.1](lessons/04-01-sequencing-reads-and-errors.md)

### Burrows-Wheeler transform

The last column of the sorted rotations of the text: $L[r] = T[\text{SA}[r] - 1]$.

LF-mapping: $\text{LF}(r) = C[L[r]] + \text{Occ}(L[r], r)$ steps one character back in the text.

*Introduced:* [4.2](lessons/04-02-read-mapping-bwt-fm-index.md)

### FM-index backward search

Count exact occurrences of $P$ in $O(|P|)$, matching from the last character.

$$\text{lo} \leftarrow C[a] + \text{Occ}(a, \text{lo}),\qquad \text{hi} \leftarrow C[a] + \text{Occ}(a, \text{hi})$$

Start $[0, n)$; occurrences $= \text{hi} - \text{lo}$ at $\text{SA}[\text{lo}..\text{hi}-1]$. Human FM-index about 2 GB.

*Introduced:* [4.2](lessons/04-02-read-mapping-bwt-fm-index.md)

### De Bruijn graph

Nodes are $(k-1)$-mers; each $k$-mer is an edge from its prefix to its suffix. The genome is an Eulerian path.

*Introduced:* [4.3](lessons/04-03-genome-assembly-de-bruijn.md)

### Directed Eulerian path condition

A connected directed graph has an Eulerian path iff all nodes balance in-degree and out-degree, except possibly one start (out − in = 1) and one end (in − out = 1). Hierholzer finds it in $O(|E|)$.

*Introduced:* [4.3](lessons/04-03-genome-assembly-de-bruijn.md)

### k-mer coverage

Expected error-free copies of each genomic $k$-mer.

$$c_k = c\,\frac{L-k+1}{L}\,(1-e)^k$$

Larger $k$ resolves longer repeats but lowers $c_k$.

*Introduced:* [4.3](lessons/04-03-genome-assembly-de-bruijn.md)

### Genotype likelihood

The probability of a pileup under a diploid genotype $a_1a_2$.

$$P(D\mid a_1a_2) = \prod_r\Big[\tfrac12P(b_r\mid a_1) + \tfrac12P(b_r\mid a_2)\Big]$$

$$P(b\mid a) = \begin{cases}1-\varepsilon & b = a\\ \varepsilon/3 & b\ne a\end{cases}$$

Prior: $P(AA) = 1 - \frac32\theta$, $P(AG) = \theta$, $P(GG) = \frac12\theta$.

*Introduced:* [4.4](lessons/04-04-variant-calling-genotype-likelihoods.md)

### Li-Stephens model

An HMM whose hidden states are the reference haplotypes being copied: switch with probability $\rho$, mismatch with probability $\varepsilon$, emission 1 at untyped sites.

$$P(x_s = a\mid\text{data}) = \sum_kP(\pi_s = k\mid\text{data})\,P(a\mid h_{k,s})$$

*Introduced:* [4.5](lessons/04-05-imputation-and-fine-mapping.md)

### Approximate Bayes factor

Wakefield's evidence for an effect at one variant.

$$\text{ABF} = \sqrt{1-r}\,\exp\!\Big(\frac{z^2r}{2}\Big),\qquad r = \frac{W}{W + \text{SE}^2}$$

Single causal variant, equal priors: $\text{PIP}_j = \text{ABF}_j/\sum_i\text{ABF}_i$.

*Introduced:* [4.5](lessons/04-05-imputation-and-fine-mapping.md)

### Credible set

The smallest set of variants, taken in order of PIP, whose PIPs sum to at least 0.95.

*Introduced:* [4.5](lessons/04-05-imputation-and-fine-mapping.md)

### Transcripts per million

Length-corrected share of transcripts.

$$\text{TPM}_{gj} = \frac{c_{gj}/\ell_g}{\sum_hc_{hj}/\ell_h}\times10^6$$

Sums to $10^6$ per sample; CPM $= c/N \times 10^6$ ignores length.

*Introduced:* [5.1](lessons/05-01-rna-seq-quantification-normalization.md)

### Median-of-ratios size factor

A sample's scaling as the median ratio of its counts to each gene's cross-sample geometric mean. Robust when most genes don't change.

$$s_j = \operatorname{median}_g\frac{c_{gj}}{\big(\prod_{j'}c_{gj'}\big)^{1/m}},\qquad \tilde c_{gj} = c_{gj}/s_j$$

*Introduced:* [5.1](lessons/05-01-rna-seq-quantification-normalization.md)

### Negative binomial count model

Counts with biological variability on top of Poisson noise.

$$\operatorname{Var}(K) = \mu + \alpha\mu^2$$

$$\text{SE}(\text{LFC}) \approx \frac{1}{\ln 2}\sqrt{\frac{1/\mu_A + \alpha}{n_A} + \frac{1/\mu_B + \alpha}{n_B}}$$

*Introduced:* [5.2](lessons/05-02-differential-expression-multiple-testing.md)

### Benjamini-Hochberg procedure

Control the false discovery rate at $q$ over $m$ tests.

$$k = \max\{j : p_{(j)} \le jq/m\},\quad\text{reject the } k \text{ smallest}$$

Step-up: a p-value above its own line can still be rejected.

*Introduced:* [5.2](lessons/05-02-differential-expression-multiple-testing.md)

### q-value

The smallest FDR level at which a test would be called.

$$q_{(j)} = \min_{i\ge j}\ \pi_0\,\frac{m\,p_{(i)}}{i},\qquad \hat\pi_0 = \frac{\#\{p > \lambda\}}{m(1-\lambda)}$$

*Introduced:* [5.2](lessons/05-02-differential-expression-multiple-testing.md)

### Nussinov recurrence

Maximum nested base pairs on an interval.

$$N(i,j) = \max\begin{cases}N(i+1,j)\\ N(i,j-1)\\ N(i+1,j-1) + \delta(i,j)\\ \max_{i<k<j}N(i,k) + N(k+1,j)\end{cases}$$

$N(i,j) = 0$ when $j - i \le h$ (usually $h = 3$). $O(n^3)$. No pseudoknots.

*Introduced:* [5.3](lessons/05-03-rna-secondary-structure-nussinov.md)

### Contact map

Which residue pairs sit within a distance cutoff (commonly 8 Å), excluding near neighbours along the chain.

Helix: bands at $(i, i+3)$ and $(i, i+4)$. Antiparallel strands: anti-diagonal stripe. Parallel strands: stripe parallel to the diagonal.

*Introduced:* [5.4](lessons/05-04-protein-structure-prediction-alphafold.md)

### Column mutual information

How much one alignment column tells you about another.

$$\text{MI}_{ij} = \sum_{a,b}f_{ij}(a,b)\log_2\frac{f_{ij}(a,b)}{f_i(a)f_j(b)}$$

Picks up direct contacts *and* chains of contacts; direct coupling analysis separates them.

*Introduced:* [5.4](lessons/05-04-protein-structure-prediction-alphafold.md)

### Clustering coefficient

The fraction of pairs of a node's neighbours that are themselves connected.

$$C_i = \frac{2e_i}{k_i(k_i-1)}$$

Random graph expectation: $p$, the edge density.

*Introduced:* [5.5](lessons/05-05-biological-network-structure.md)

### Network modularity

Edges inside communities, beyond what degree-preserving chance predicts.

$$Q = \sum_c\left[\frac{L_c}{m} - \left(\frac{d_c}{2m}\right)^2\right]$$

*Introduced:* [5.5](lessons/05-05-biological-network-structure.md)

### Partial correlation

The correlation of two variables after removing what a third explains.

$$r_{XZ\cdot Y} = \frac{r_{XZ} - r_{XY}r_{YZ}}{\sqrt{(1-r_{XY}^2)(1-r_{YZ}^2)}}$$

All at once: $r_{ij\cdot\text{rest}} = -\Omega_{ij}/\sqrt{\Omega_{ii}\Omega_{jj}}$ with $\Omega = R^{-1}$.

*Introduced:* [5.6](lessons/05-06-inferring-networks-from-data.md)

## Formulas and rules

### Choosing an alignment

| task | use | why |
|---|---|---|
| sequences homologous end to end | global (NW) | every letter belongs |
| shared domain, database search | local (SW) or BLAST | only part is related |
| read or gene into a longer sequence | fitting | all of the short one must align |
| joining overlapping reads | overlap | match must reach both read ends |
| realistic indels | affine gaps (Gotoh) | one event, many residues |
| a whole protein family | profile HMM | per-column statistics |

*From* [1.3](lessons/01-03-needleman-wunsch-global-alignment.md), [1.4](lessons/01-04-smith-waterman-local-alignment.md), [1.5](lessons/01-05-affine-gaps-gotoh.md), [3.5](lessons/03-05-profile-hmms.md)

### Scoring numbers worth having

| item | value |
|---|---|
| BLOSUM62 diagonal | W 11, C 9, L 4, I 4, A 4 (half-bits) |
| BLOSUM62 ungapped | $\lambda = 0.3176$, $K = 0.134$, relative entropy about 0.58 bits |
| BLOSUM62, gaps $11 + L$ | $\lambda = 0.267$, $K = 0.041$ |
| DNA $\pm1$ / $+1{-}2$ / $+2{-}3$ | target identity 75 / 95 / 89 percent |
| chance identity | DNA 0.25; proteins about 0.06 |
| E-value trust | below $10^{-3}$ usually homolog; above 1 noise |
| alignments of two length-$n$ sequences | Delannoy $D(n,n)$; $D(100,100) \approx 2\times10^{75}$ |

*From* [1.2](lessons/01-02-substitution-matrices-log-odds.md), [1.3](lessons/01-03-needleman-wunsch-global-alignment.md), [1.7](lessons/01-07-alignment-statistics-e-values.md)

### Costs of the core algorithms

| algorithm | time | space |
|---|---|---|
| NW, SW, Gotoh | $O(mn)$ | $O(mn)$, or linear with Hirschberg |
| exact $k$-sequence SP alignment | $O(2^kL^k)$ | $O(L^k)$ |
| UPGMA, neighbor-joining | $O(n^3)$ | $O(n^2)$ |
| Fitch / Sankoff per site | $O(n)$ / $O(nk^2)$ | $O(n)$ |
| Felsenstein pruning per site | $O(nk^2)$ | $O(nk)$ |
| Viterbi, forward, backward | $O(LK^2)$ | $O(LK)$ |
| FM-index count | $O(\lvert P\rvert)$ | about 2 GB for a human genome |
| Hierholzer | $O(\lvert E\rvert)$ | $O(\lvert E\rvert)$ |
| Nussinov / Zuker | $O(n^3)$ | $O(n^2)$ |

*From* [1.3](lessons/01-03-needleman-wunsch-global-alignment.md), [2.1](lessons/02-01-multiple-sequence-alignment.md), [2.3](lessons/02-03-neighbor-joining.md), [2.4](lessons/02-04-parsimony-fitch-sankoff.md), [2.6](lessons/02-06-tree-likelihood-felsenstein-pruning.md), [3.2](lessons/03-02-viterbi-decoding.md), [4.2](lessons/04-02-read-mapping-bwt-fm-index.md), [4.3](lessons/04-03-genome-assembly-de-bruijn.md), [5.3](lessons/05-03-rna-secondary-structure-nussinov.md)

### Seed and search arithmetic

Random 3-word pair scores at least $T$ under BLOSUM62: $\pi_{11} = 0.0021$, $\pi_{12} = 0.0012$, $\pi_{13} = 0.00063$.

$$\text{random seeds} \approx mn\,\pi_T,\qquad \text{two-hit survivors} \approx mn\,\pi_T\cdot\pi_TA$$

Contiguous seed hit probability: probability of a run of at least $w$ identities (a DP over run length). Each 100-fold larger database costs $\log_2 100 = 6.6$ bits.

*From* [1.6](lessons/01-06-blast-seeded-heuristic-search.md), [1.7](lessons/01-07-alignment-statistics-e-values.md)

### Jukes-Cantor and Kimura numbers

| observed $p$ | JC distance $d$ |
|---|---|
| 0.10 | 0.107 |
| 0.25 | 0.304 |
| 0.30 | 0.383 |
| 0.552 | 1.000 |
| 0.75 | undefined |

Sampling error: $\text{SE}(d) \approx \sqrt{p(1-p)/L}\,/\,(1 - \frac43p)$, which explodes near saturation.

*From* [2.5](lessons/02-05-substitution-models.md), [2.6](lessons/02-06-tree-likelihood-felsenstein-pruning.md)

### HMM decode, score, train

| question | algorithm | combine with |
|---|---|---|
| best single labelling | Viterbi | max, log space |
| $P(x)$ under the model | forward | sum |
| per-position confidence | forward–backward | $f\cdot b/P(x)$ |
| parameters from labels | counting + pseudocounts | normalize |
| parameters without labels | Baum–Welch | expected counts |

Log-space addition: $\log_2(2^a + 2^b) = \max(a,b) + \log_2(1 + 2^{-\lvert a-b\rvert})$.

*From* [3.1](lessons/03-01-markov-chains-to-hmms.md), [3.2](lessons/03-02-viterbi-decoding.md), [3.3](lessons/03-03-forward-backward-posterior-decoding.md), [3.4](lessons/03-04-training-hmms-baum-welch.md)

### Gene-structure bookkeeping

Intron phase $\phi = (\text{coding bases before the intron}) \bmod 3$; the next exon starts at codon position $\phi + 1$. A valid gene has total coding length divisible by 3, an ATG start, a terminal stop and no internal in-frame stop. Random DNA gives about 770 open frames of 100+ codons per Mb.

*From* [1.1](lessons/01-01-sequences-alphabets-databases.md), [3.6](lessons/03-06-gene-finding.md)

### Read and mapping arithmetic

$$\mathbb{E}[\text{errors in a read}] = \sum_i10^{-Q_i/10},\qquad P(\text{error-free}) \approx e^{-\mathbb{E}[\text{errors}]}$$

$$\text{MAPQ} = -10\log_{10}P(\text{wrong position})$$

Two equally good placements give MAPQ about 3. Empirical recalibration: $Q = -10\log_{10}(\text{observed error rate})$.

*From* [4.1](lessons/04-01-sequencing-reads-and-errors.md), [4.2](lessons/04-02-read-mapping-bwt-fm-index.md)

### Variant and fine-mapping posteriors

$$P(G\mid D) = \frac{P(D\mid G)P(G)}{\sum_{G'}P(D\mid G')P(G')}$$

$$\text{GQ} = -10\log_{10}\big(1 - P(G^*\mid D)\big)$$

Imputed dosage $= \sum$ of haplotype allele probabilities, between 0 and 2. PIPs are proportional to $\pi_jABF_j$ when priors differ.

*From* [4.4](lessons/04-04-variant-calling-genotype-likelihoods.md), [4.5](lessons/04-05-imputation-and-fine-mapping.md)

### Expression and testing arithmetic

| quantity | formula |
|---|---|
| CPM | $c/N \times 10^6$ |
| RPKM | $c/\big((N/10^6)\,\ell_{\text{kb}}\big)$ |
| log2 fold change | $\log_2(\tilde\mu_B/\tilde\mu_A)$ |
| expected false positives at level $\alpha$ | $m\alpha$ |
| Bonferroni per-test level | $\alpha/m$ |
| critical correlation from $t$ | $\lvert r\rvert = t/\sqrt{t^2 + \text{df}}$, $\text{df} = n - 2$ |
| candidate network edges | $p(p-1)/2$ |

*From* [5.1](lessons/05-01-rna-seq-quantification-normalization.md), [5.2](lessons/05-02-differential-expression-multiple-testing.md), [5.6](lessons/05-06-inferring-networks-from-data.md)

### Network numbers

Average degree $2m/N$. Random-graph degrees are Poisson; largest power-law degree $k_{\max} \approx k_{\min}N^{1/(\gamma-1)}$ ($N = 5{,}000$, $k_{\min} = 2$: 585 at $\gamma = 2.5$, 141 at $\gamma = 3$). Data-processing inequality: $X \to Y \to Z$ implies $I(X;Z) \le \min(I(X;Y), I(Y;Z))$; ARACNE drops each triangle's weakest edge.

*From* [5.5](lessons/05-05-biological-network-structure.md), [5.6](lessons/05-06-inferring-networks-from-data.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| DNA is antiparallel; the genetic code and start/stop codons | [general-biology 3.3](../general-biology/lessons/03-03-dna-structure-replication.md), [3.4](../general-biology/lessons/03-04-central-dogma.md) |
| Prefix DP for edit distance, backtracking, Hirschberg | [algorithms 2.6](../algorithms/lessons/02-06-dp-on-sequences-lcs-and-edit-distance.md) |
| Relative entropy (KL divergence) is non-negative | [information-theory 1.4](../information-theory/lessons/01-04-relative-entropy-kl-jensen.md) |
| Mutual information; data-processing inequality | [information-theory 1.3](../information-theory/lessons/01-03-mutual-information.md), [1.5](../information-theory/lessons/01-05-data-processing-inequality.md) |
| Geometric and Poisson distributions | [prob-stat-refresher 2.2](../prob-stat-refresher/lessons/02-02-discrete-distributions.md) |
| Bayes' rule; p-values | [prob-stat-refresher 1.2](../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md), [4.3](../prob-stat-refresher/lessons/04-03-hypothesis-testing.md) |
| Maximum likelihood estimation | [econometrics 5.1](../econometrics/lessons/05-01-maximum-likelihood-estimation.md) |
| Synapomorphy, long-branch attraction, $T = d/2\lambda$, tree counts | [evolution-ecology 2.3](../evolution-ecology/lessons/02-03-inferring-trees-dating.md) |
| Coverage $C = NL/G$; heterozygote miss at low coverage | [genetics 3.6](../genetics/lessons/03-06-reading-editing-genes.md) |
| Linkage disequilibrium and GWAS | [genetics 4.4](../genetics/lessons/04-04-linkage-disequilibrium-gwas.md) |
| Undirected Euler theorem; handshake lemma | [graph-theory 1.4](../graph-theory/lessons/01-04-eulerian-hamiltonian.md), [1.1](../graph-theory/lessons/01-01-degree-and-handshake-lemma.md) |
| EM algorithm and its monotone ascent | [machine-learning 3.6](../machine-learning/lessons/03-06-the-em-algorithm.md) |
| Hierarchical clustering; PCA | [machine-learning 3.4](../machine-learning/lessons/03-04-hierarchical-clustering.md), [3.2](../machine-learning/lessons/03-02-principal-component-analysis.md) |
| Bonferroni and Benjamini–Hochberg as procedures | [econometrics 2.7](../econometrics/lessons/02-07-multiple-testing-specification-search.md) |
| Negative binomial from bursty transcription; motif Z-scores | [systems-biology 4.3](../systems-biology/lessons/04-03-stochastic-gene-expression.md), [2.2](../systems-biology/lessons/02-02-negative-autoregulation.md) |
| Splicing and splice sites | [molecular-cell-biology 4.3](../molecular-cell-biology/lessons/04-03-rna-processing-mrna-life-cycle.md) |
| Protein structure levels; Anfinsen and Levinthal | [biochemistry 1.3](../biochemistry/lessons/01-03-four-levels-protein-structure.md), [1.4](../biochemistry/lessons/01-04-the-folding-problem.md) |
| Self-attention | [deep-learning 3.4](../deep-learning/lessons/03-04-self-attention-queries-keys-values.md) |
| Viterbi as a trellis decoder | [communications 4.4](../communications/lessons/04-04-convolutional-codes-viterbi.md) |

## Pitfalls

### Alignment traps

- The reverse strand is the complement **reversed**, not just the complement. *([1.1](lessons/01-01-sequences-alphabets-databases.md))*
- "70 percent homologous" is meaningless: homology is yes or no; similarity is the number. *([1.1](lessons/01-01-sequences-alphabets-databases.md))*
- Substitution matrix diagonals aren't constant: rare residues score higher. *([1.2](lessons/01-02-substitution-matrices-log-odds.md))*
- BLOSUM and PAM numbers run in opposite directions for distant homologs. *([1.2](lessons/01-02-substitution-matrices-log-odds.md))*
- Unordered pair counts need $2p_ap_b$ off the diagonal, or scores shift by a bit. *([1.2](lessons/01-02-substitution-matrices-log-odds.md))*
- A traceback gives *an* optimal alignment; ties are common in repeats. *([1.3](lessons/01-03-needleman-wunsch-global-alignment.md))*
- A zero first row makes end gaps free — that's semi-global, not global. *([1.3](lessons/01-03-needleman-wunsch-global-alignment.md))*
- Lenient scoring with a non-negative expected score makes local alignment of noise grow linearly. *([1.4](lessons/01-04-smith-waterman-local-alignment.md))*
- Joining reads needs overlap alignment; local alignment can report a spurious internal match. *([1.4](lessons/01-04-smith-waterman-local-alignment.md))*
- Affine gaps can't be done with one table plus a flag; keep three. *([1.5](lessons/01-05-affine-gaps-gotoh.md))*
- Gap parameter conventions differ between tools ($a + bL$ versus $d + (L-1)e$). *([1.5](lessons/01-05-affine-gaps-gotoh.md))*
- No BLAST hit doesn't mean no homolog; X-drop can cut through deep dips. *([1.6](lessons/01-06-blast-seeded-heuristic-search.md))*
- Multiple-alignment columns are hypotheses; guide trees aren't phylogenies. *([2.1](lessons/02-01-multiple-sequence-alignment.md))*

### Significance traps

- Raw scores aren't comparable across scoring systems; use bit scores or E-values. *([1.7](lessons/01-07-alignment-statistics-e-values.md))*
- An E-value is an expected count, not the probability this hit is false. *([1.7](lessons/01-07-alignment-statistics-e-values.md))*
- Low-complexity regions inflate scores; mask them. *([1.7](lessons/01-07-alignment-statistics-e-values.md))*
- A q-value describes the called list, not one gene. *([5.2](lessons/05-02-differential-expression-multiple-testing.md))*
- Filtering after seeing results breaks error control. *([5.2](lessons/05-02-differential-expression-multiple-testing.md))*
- A network from few samples and many genes is mostly noise edges. *([5.6](lessons/05-06-inferring-networks-from-data.md))*

### Phylogenetics traps

- "Closest pair = sisters" holds only under a clock; UPGMA fails with unequal rates. *([2.2](lessons/02-02-tree-metrics-upgma.md))*
- UPGMA merges must weight by cluster size. *([2.2](lessons/02-02-tree-metrics-upgma.md))*
- Neighbor-joining picks the most negative $Q$, not the smallest $D$; its tree is unrooted, and negative branch lengths signal non-tree data. *([2.3](lessons/02-03-neighbor-joining.md))*
- Every Fitch union counts, including at the root; ancestral reconstructions are often not unique. *([2.4](lessons/02-04-parsimony-fitch-sankoff.md))*
- Under JC the total substitution rate is $3\alpha$, so $d = 3\alpha t$. *([2.5](lessons/02-05-substitution-models.md))*
- Near saturation, distance uncertainty explodes. *([2.5](lessons/02-05-substitution-models.md))*
- Multiply site likelihoods in log space; likelihood with reversible models doesn't place the root. *([2.6](lessons/02-06-tree-likelihood-felsenstein-pruning.md))*
- Bootstrap support measures consistency, not truth; searches stop at local optima. *([2.7](lessons/02-07-tree-search-and-support.md))*

### HMM traps

- The best path's probability is not $P(x)$; the forward final column is summed, not maximized. *([3.1](lessons/03-01-markov-chains-to-hmms.md), [3.3](lessons/03-03-forward-backward-posterior-decoding.md))*
- Self-loops force geometric durations; real exons need GHMMs. *([3.1](lessons/03-01-markov-chains-to-hmms.md), [3.6](lessons/03-06-gene-finding.md))*
- Picking each column's best state isn't Viterbi; work in logs. *([3.2](lessons/03-02-viterbi-decoding.md))*
- Posterior-decoded labellings can be invalid paths. *([3.3](lessons/03-03-forward-backward-posterior-decoding.md))*
- Identical initial states never separate under Baum–Welch; highest likelihood can mean overfitting. *([3.4](lessons/03-04-training-hmms-baum-welch.md))*
- Uniform pseudocounts over-reward rare unseen residues; profiles from near-duplicates are too sharp. *([3.5](lessons/03-05-profile-hmms.md))*
- Long ORFs aren't genes; intron phase must carry the frame. *([3.6](lessons/03-06-gene-finding.md))*

### Genomics traps

- Phred is logarithmic; average error probabilities, not Q values. *([4.1](lessons/04-01-sequencing-reads-and-errors.md))*
- More coverage doesn't resolve repeats longer than the reads. *([4.1](lessons/04-01-sequencing-reads-and-errors.md))*
- Backward search starts from the pattern's last character and finds exact matches only; low-MAPQ reads are ambiguous. *([4.2](lessons/04-02-read-mapping-bwt-fm-index.md))*
- In de Bruijn graphs, $k$-mers are edges; duplicate $k$-mers are separate edges; an Eulerian path is *a* genome. *([4.3](lessons/04-03-genome-assembly-de-bruijn.md))*
- Variant calls depend on quality and independence of the reads, not their count; the diploid model misses subclonal variants. *([4.4](lessons/04-04-variant-calling-genotype-likelihoods.md))*
- Imputed genotypes are probabilities; the lead SNP isn't necessarily causal; single-causal-variant fine-mapping can fail. *([4.5](lessons/04-05-imputation-and-fine-mapping.md))*

### Expression and network traps

- Compare genes with TPM, not counts; test with counts and size factors, not TPM. *([5.1](lessons/05-01-rna-seq-quantification-normalization.md))*
- Per-million scaling suffers composition bias; median-of-ratios assumes most genes don't change. *([5.1](lessons/05-01-rna-seq-quantification-normalization.md))*
- Poisson tests ignore biological replicate variability; replicates buy power, depth doesn't. *([5.2](lessons/05-02-differential-expression-multiple-testing.md))*
- Maximum-pair RNA folds ignore energy; forgetting the hairpin minimum pairs adjacent bases; pseudoknots are invisible. *([5.3](lessons/05-03-rna-secondary-structure-nussinov.md))*
- Mutual information isn't contact; low pLDDT often means disorder; AlphaFold predicts folds, not dynamics or mutation effects. *([5.4](lessons/05-04-protein-structure-prediction-alphafold.md))*
- Eyeballed log-log lines don't establish power laws; hubs can reflect study bias; use degree-preserving nulls. *([5.5](lessons/05-05-biological-network-structure.md))*
- Correlation isn't regulation, can't be oriented, and needs regularization when genes outnumber samples. *([5.6](lessons/05-06-inferring-networks-from-data.md))*
