# Computational Biology · Lesson 1.3: Needleman–Wunsch — global alignment

> ⏱ ~15 min · Module 1: Sequence alignment & database search · Builds on: [1.2](01-02-substitution-matrices-log-odds.md) (log-odds scores), [algorithms 2.6](../../algorithms/lessons/02-06-dp-on-sequences-lcs-and-edit-distance.md) (the prefix DP and backtrack) · Unlocks: [1.4](01-04-smith-waterman-local-alignment.md) (local alignment)

## Why this matters

You already know the table. [Algorithms 2.6](../../algorithms/lessons/02-06-dp-on-sequences-lcs-and-edit-distance.md) filled it for edit distance: prefixes of two strings, three predecessors per cell, a backtrack from the corner. Needleman–Wunsch (1970) is that same table with two changes. It **maximizes** a log-odds score ([1.2](01-02-substitution-matrices-log-odds.md)) instead of minimizing a count, and it charges a **gap penalty** that you choose.

Those two changes are where the biology lives. The gap penalty is a claim about how often insertions and deletions happen relative to substitutions, and different claims give genuinely different alignments of the same pair. This lesson is about reading the table as a model: what the score means, when two alignments tie, and what "global" silently assumes about the ends of your sequences.

## The idea

An **alignment** writes two sequences one above the other, inserting gap characters `-` so that every column pairs a letter with a letter, or a letter with a gap. Columns of the first kind score $s(a,b)$ from the matrix. Columns of the second kind score the gap penalty $g$, a negative number. The best alignment has the highest total.

There are a *lot* of alignments. Two 100-residue proteins have about $2\times10^{75}$ of them, so you can't enumerate. But every alignment is a **path through a grid**. Put one sequence down the side and the other across the top, and start at the top-left corner. A diagonal step aligns the next two letters. A step down uses a letter from the side sequence against a gap. A step right uses a letter from the top sequence against a gap. Every path from the top-left to the bottom-right corner is one alignment, and its score is the sum of its step weights.

So the best alignment is the **highest-scoring path** through a grid of $(m+1)(n+1)$ nodes. The DP computes, for every node, the best score of any path reaching it, then walks back from the corner. That turns $10^{75}$ alignments into $10^4$ cells.

"Global" means the path must run **corner to corner**: every letter of both sequences is in the alignment, and gaps at the ends cost the same as gaps in the middle. That's right when the two sequences are homologous end to end, and wrong otherwise. Problem 3 shows how wrong.

## The formal version

Let $x = x_1\cdots x_m$ and $y = y_1\cdots y_n$, let $s(a,b)$ be a substitution score, and let $g < 0$ be a linear gap penalty per gap position. Define $F(i,j)$ as the best score of any alignment of the prefixes $x_1\cdots x_i$ and $y_1\cdots y_j$. The [Needleman–Wunsch recurrence](../reference.md#needleman-wunsch) is

$$F(0,0) = 0,\qquad F(i,0) = i\,g,\qquad F(0,j) = j\,g,$$

$$F(i,j) = \max\begin{cases} F(i-1,j-1) + s(x_i,y_j) & \text{align } x_i \text{ with } y_j\\ F(i-1,j) + g & x_i \text{ against a gap}\\ F(i,j-1) + g & y_j \text{ against a gap}\end{cases}$$

*In words: the best alignment of two prefixes ends in one of three kinds of column; try all three, each built on the best alignment of what's left.* The answer is $F(m,n)$. Time and space are $\Theta(mn)$. The first row and column aren't zero, as they are for LCS, because aligning a prefix against nothing costs one gap per letter.

**Traceback.** From $(m,n)$, step to whichever predecessor achieves the max, emitting the corresponding column. If more than one predecessor achieves it, there are **co-optimal alignments** — several different alignments with the same best score. They're equally good under the model, so reporting one is a choice, not a discovery.

**How many alignments?** The number of global alignments of lengths $m$ and $n$ is the Delannoy number

$$D(m,n) = \sum_{k=0}^{\min(m,n)} \binom{m}{k}\binom{n}{k}2^k,$$

which gives $D(7,7) = 48{,}639$ and $D(100,100) \approx 2.05\times10^{75}$. *In words: choose which $k$ letters of each sequence are paired, then how the unpaired ones interleave.* The DP never looks at them one by one.

**What the score means.** With a log-odds matrix, the aligned columns contribute log-likelihood ratios. The gap penalty is then a log-probability-like cost for an indel. So $F(m,n)$ approximates the log-odds that $x$ and $y$ are related *along this particular path*. It is the best single path, not the sum over all paths. That distinction comes back as Viterbi versus forward in [3.3](03-03-forward-backward-posterior-decoding.md).

## Picture

![The filled Needleman–Wunsch matrix for TGCATA down the side and TCATGA across the top with match plus one, mismatch minus one and gap minus two. The bottom-right cell holds 1. A traceback path of highlighted cells runs from the bottom-right corner to the top-left, with one vertical step and one horizontal step, spelling the alignment T G C A T gap A over T gap C A T G A.](assets/01-03-fig1.svg)

Each arrow points from a cell back to the neighbour that produced its value. Diagonal arrows are aligned columns, the single vertical arrow is a gap in the top string, and the single horizontal arrow is a gap in the side string. The first row and column climb by $-2$ per step — the cost of aligning a prefix entirely against gaps. The corner holds 1, and this is the only path that reaches it: the traceback never meets a tie.

## Worked examples

**Example 1 (mechanical): fill and trace.** Align $x = $ `TGCATA` (side) with $y = $ `TCATGA` (top), match $+1$, mismatch $-1$, gap $g = -2$.

| | − | T | C | A | T | G | A |
|---|---|---|---|---|---|---|---|
| **−** | 0 | −2 | −4 | −6 | −8 | −10 | −12 |
| **T** | −2 | 1 | −1 | −3 | −5 | −7 | −9 |
| **G** | −4 | −1 | 0 | −2 | −4 | −4 | −6 |
| **C** | −6 | −3 | 0 | −1 | −3 | −5 | −5 |
| **A** | −8 | −5 | −2 | 1 | −1 | −3 | −4 |
| **T** | −10 | −7 | −4 | −1 | 2 | 0 | −2 |
| **A** | −12 | −9 | −6 | −3 | 0 | 1 | 1 |

Two cells by hand:

- $F(2,1)$, G against T: diagonal $F(1,0) + s(G,T) = -2 - 1 = -3$; up $F(1,1) + g = 1 - 2 = -1$; left $F(2,0) + g = -4 - 2 = -6$. Max is **−1**, from above.
- $F(5,4)$, T against T: diagonal $F(4,3) + 1 = 1 + 1 = 2$; up $F(4,4) - 2 = -3$; left $F(5,3) - 2 = -3$. Max is **2**, from the diagonal.

Traceback from $F(6,6) = 1$: diagonal (A/A) to $(5,5)$; left (−/G) to $(5,4)$; diagonal (T/T), diagonal (A/A), diagonal (C/C) to $(2,1)$; up (G/−) to $(1,1)$; diagonal (T/T) to $(0,0)$. Reading forward:

```
T G C A T - A
T - C A T G A
```

Five matches and two gaps: $5 - 4 = 1$. The best *ungapped* alignment has only 2 matches and 4 mismatches, scoring $-2$. The model prefers "a G was lost here and a G was gained there" over "four substitutions in a row".

**Example 2 (why you'd care): the gap penalty is a biological claim.** Align `MKWVTFI` with `MKVTWFI` using BLOSUM62. Two stories compete:

```
story A (two indels)      story B (substitutions)
M K W V T - F I           M K W V T F I
M K - V T W F I           M K V T W F I
```

Story A pairs M, K, V, T, F, I as identities ($5 + 5 + 4 + 5 + 6 + 4 = 29$) and pays two gaps: score $29 + 2g$. Story B pays no gaps, but W/V $= -3$ and V/T $= 0$ and T/W $= -2$, for $5 + 5 - 3 + 0 - 2 + 6 + 4 = 15$.

| gap penalty $g$ | story A | story B | NW reports |
|---|---|---|---|
| −4 | 21 | 15 | A |
| −7 | 15 | 15 | both (tie) |
| −8 | 13 | 15 | B |

Neither alignment is "correct" in the abstract. Story A says the tryptophan moved by a deletion and an insertion. Story B says three residues mutated. Which is more likely depends on how common indels are relative to substitutions in this protein family, and that is exactly what $g$ encodes. A cheap gap lets the aligner shuffle residues around to chase identities. Real aligners also charge more to *open* a gap than to extend one, which is [1.5](01-05-affine-gaps-gotoh.md).

## Watch out

- **You might think** the traceback finds *the* alignment — **but actually** ties are common, especially in repeats. `GAATTC` against `GATTA` has two optimal alignments differing only in which A is deleted. Nothing in the data can decide between them, so tools use a fixed convention (for indels, left-align) to make output reproducible ([4.4](04-04-variant-calling-genotype-likelihoods.md)).
- **You might initialize** the first row and column to 0 out of LCS habit — **but actually** that makes leading gaps free, which is a different algorithm (semi-global, [1.4](01-04-smith-waterman-local-alignment.md)). For global alignment, $F(i,0) = ig$.
- **You might read** a negative global score as "unrelated" — **but actually** global scores penalize length differences. A perfect 4-letter match inside an 8-letter sequence still scores $-4$ below (Problem 3). A global score only compares alignments of the *same* pair; it doesn't measure evidence across different pairs (that is [1.7](01-07-alignment-statistics-e-values.md)).

## One-liner

> Needleman–Wunsch is the highest-scoring corner-to-corner path through the alignment grid — an edit-distance table run as a maximization with log-odds steps — and the gap penalty you pick is a claim about how often indels happen.

## Problems

**P1 (🟢)** Align $x = $ `AGCTA` (side) with $y = $ `ACTA` (top) using match $+1$, mismatch $-1$, gap $-2$. (a) Fill the matrix. (b) Give the score. (c) Trace back the optimal alignment.

**P2 (🟡)** Align $x = $ `GAATTC` (side) with $y = $ `GATTA` (top), same scoring. (a) Fill the matrix and give the score. (b) Give *every* optimal alignment. (c) In one sentence, why can no scoring scheme that treats both A's identically break this tie?

**P3 (🔴)** A 4-letter fragment `CATG` is known to lie wholly inside `GGCATGGG`. Same scoring. (a) Compute the Needleman–Wunsch score. (b) Give all optimal global alignments. (c) Score the "biologically right" alignment, `--CATG--` over `GGCATGGG`, and say whether NW found it. (d) If gaps before and after `CATG` were free, what would the best score be, and would the answer be unique?

<details>
<summary>Solutions</summary>

**P1** (a)

| | − | A | C | T | A |
|---|---|---|---|---|---|
| **−** | 0 | −2 | −4 | −6 | −8 |
| **A** | −2 | 1 | −1 | −3 | −5 |
| **G** | −4 | −1 | 0 | −2 | −4 |
| **C** | −6 | −3 | 0 | −1 | −3 |
| **T** | −8 | −5 | −2 | 1 | −1 |
| **A** | −10 | −7 | −4 | −1 | 2 |

(b) Score **2**.

(c) From $(5,4)$: A/A diagonal ($1+1=2$) to $(4,3)$; T/T diagonal ($0+1$) to $(3,2)$; C/C diagonal ($-1+1=0$) to $(2,1)$; there $F(2,1) = -1$ comes from above ($F(1,1) - 2 = -1$; the diagonal gives $-2-1=-3$), so G/− to $(1,1)$; A/A diagonal to $(0,0)$.

```
A G C T A
A - C T A
```

Four matches, one gap: $4 - 2 = 2$. It is the unique optimum.

**P2** *Accept criterion: score 1, and both alignments below listed.*

(a)

| | − | G | A | T | T | A |
|---|---|---|---|---|---|---|
| **−** | 0 | −2 | −4 | −6 | −8 | −10 |
| **G** | −2 | 1 | −1 | −3 | −5 | −7 |
| **A** | −4 | −1 | 2 | 0 | −2 | −4 |
| **A** | −6 | −3 | 0 | 1 | −1 | −1 |
| **T** | −8 | −5 | −2 | 1 | 2 | 0 |
| **T** | −10 | −7 | −4 | −1 | 2 | 1 |
| **C** | −12 | −9 | −6 | −3 | 0 | 1 |

Score **1**.

(b) At $(3,2)$, the cell for AA against GA, $F = 0$ is reached both from the diagonal ($F(2,1) + s(A,A) = -1 + 1$) and from above ($F(2,2) - 2 = 0$). Those two routes give

```
G A A T T C        G A A T T C
G - A T T A        G A - T T A
```

Each has four matches (G, A, T, T), one mismatch (C/A) and one gap: $4 - 1 - 2 = 1$.

(c) The two alignments differ only in *which* of two identical adjacent A's is deleted. They have the same multiset of columns, so any scheme that scores columns by their letters gives them the same score.

**P3** (a) Score **−4**.

(b) *Accept criterion: all three listed.*

```
- - C A T - - G    - - C A T - G -    - - C A T G - -
G G C A T G G G    G G C A T G G G    G G C A T G G G
```

Each has four matches and four gaps: $4 - 8 = -4$.

(c) `--CATG--` over `GGCATGGG` also scores $4 - 8 = -4$. It's one of the three co-optimal alignments, but NW has no reason to prefer it over the two that tear the final G away from `CAT`. With four end gaps forced anyway, moving one gap inside costs nothing extra.

(d) With free end gaps the best score is **+4**: all four letters matched, no gaps charged. It's **unique** — `CATG` occurs once in `GGCATGGG`, and any internal gap costs 2. This is semi-global alignment, the subject of [1.4](01-04-smith-waterman-local-alignment.md).

</details>

## Flashback

**From Lesson 1.1 (Sequences, alphabets & databases):** A database search reports that your query matches the *minus* strand of the subject 5′-`GCATTACGGATGCCTTAA`-3′. (a) Write the strand your query actually matches as a 5′→3′ string. (b) Translate its frame −3. (c) Which of the six frames contain no stop codon anywhere in this window?

<details>
<summary>Solution</summary>

(a) Complement (`CGTAATGCCTACGGAATT`), then reverse: **`TTAAGGCATCCGTAATGC`**.

(b) Frame −3 starts at the third base of the reverse complement: AAG GCA TCC GTA ATG (C left over) → **K A S V M**.

(c) Translate all six:

| frame | protein |
|---|---|
| +1 | A L R M P \* |
| +2 | H Y G C L |
| +3 | I T D A L |
| −1 | L R H P \* C |
| −2 | \* G I R N |
| −3 | K A S V M |

**Frames +2, +3 and −3** have no stop codon. In an 18-base window that is unremarkable — [1.1](01-01-sequences-alphabets-databases.md)'s Example 2 shows why open frames only become informative once they are hundreds of codons long.

</details>

## Connections

- **Backward:** the table, the three predecessors and the backtrack are [algorithms 2.6](../../algorithms/lessons/02-06-dp-on-sequences-lcs-and-edit-distance.md) with max for min; the step weights are [1.2](01-02-substitution-matrices-log-odds.md)'s log-odds scores, so the path score is a log-likelihood ratio.
- **Forward:** [1.4](01-04-smith-waterman-local-alignment.md) changes the boundary conditions to get local and semi-global alignment; [1.5](01-05-affine-gaps-gotoh.md) makes the gap penalty depend on gap length; [2.1](02-01-multiple-sequence-alignment.md) generalizes the grid to $k$ dimensions; the "best path versus sum over paths" distinction becomes Viterbi versus forward in [3.2](03-02-viterbi-decoding.md) and [3.3](03-03-forward-backward-posterior-decoding.md).
- **Sideways:** a highest-scoring path through a DAG of grid nodes is a longest-path problem on a DAG, solvable in topological order just as [algorithms 3.2](../../algorithms/lessons/03-02-topological-sort-and-strongly-connected-components.md) orders any DAG; the same "max over predecessors" is the Bellman equation of [reinforcement-learning](../../reinforcement-learning/syllabus.md) on a deterministic grid world.
