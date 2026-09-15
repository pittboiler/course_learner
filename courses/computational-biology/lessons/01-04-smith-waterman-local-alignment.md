# Computational Biology · Lesson 1.4: Smith–Waterman & semi-global alignment

> ⏱ ~15 min · Module 1: Sequence alignment & database search · Builds on: [1.3](01-03-needleman-wunsch-global-alignment.md) (global alignment), [1.2](01-02-substitution-matrices-log-odds.md) (negative expected score) · Unlocks: [1.5](01-05-affine-gaps-gotoh.md) (affine gaps), [1.6](01-06-blast-seeded-heuristic-search.md) (BLAST)

## Why this matters

Most interesting similarity is partial. Two proteins share one domain in a longer chain of unrelated ones. A gene sits somewhere inside a 200-kilobase contig. Two sequencing reads overlap by 40 bases at their ends. Global alignment ([1.3](01-03-needleman-wunsch-global-alignment.md)) forces every letter into the alignment and charges for the rest, so it drowns the real signal. Problem 3 of that lesson scored a perfect embedded match at $-4$.

Smith and Waterman (1981) fixed this with one change to the recurrence: a floor of zero. That single `max(0, …)` is what BLAST approximates ([1.6](01-06-blast-seeded-heuristic-search.md)), and it only works because of a property you proved in [1.2](01-02-substitution-matrices-log-odds.md): random pairs have a negative expected score. This lesson also covers the in-between cases, where only *some* ends are free, which assembly ([4.3](04-03-genome-assembly-de-bruijn.md)) depends on.

## The idea

**Local alignment asks for the best-scoring pair of substrings**, one from each sequence, aligned to each other. In the grid picture, the path may start at any node and end at any node.

Two edits to Needleman–Wunsch achieve that:

1. **Floor at zero.** If every way of reaching a cell has a negative score, start fresh there instead. A cell holding 0 means "nothing before this point helps".
2. **Answer at the maximum cell, not the corner.** Trace back from the highest value anywhere, and stop when you reach a 0.

Why doesn't this just grab everything? Because a random stretch of alignment loses points on average. A path through unrelated sequence drifts downward, hits the floor and resets. Only a genuinely similar region climbs high enough to stand out. If your scores had a *positive* expected value, every extension would help on average. The "local" alignment would sprawl across both whole sequences, and its score would grow with length whether or not they're related (Problem 3).

**Semi-global alignment frees only some ends.** Two practical cases:

- **Fitting:** a short sequence $x$ lies somewhere inside a long one $y$ (a primer in a genome, a gene in a contig). Every letter of $x$ must align, but $y$'s overhangs are free.
- **Overlap:** the end of $x$ overlaps the start of $y$ (two reads from overlapping stretches of a genome). $x$'s prefix and $y$'s suffix are free, but the overlap must run *to the end of $x$*.

Each case is just a choice of which boundary starts free and where the answer is read off.

## The formal version

**Smith–Waterman.** With substitution score $s$ and linear gap penalty $g < 0$, the [Smith–Waterman recurrence](../reference.md#smith-waterman) is

$$F(i,0) = F(0,j) = 0,$$

$$F(i,j) = \max\begin{cases} 0\\ F(i-1,j-1) + s(x_i,y_j)\\ F(i-1,j) + g\\ F(i,j-1) + g\end{cases}$$

The local alignment score is $\max_{i,j} F(i,j)$. Trace back from a maximizing cell until a cell with $F = 0$. *In words: each cell holds the best score of an alignment that ends exactly here and may start anywhere; "start here" is worth 0.*

**Requirement.** The scheme must satisfy $\mathbb{E}[s(a,b)] < 0$ under the background frequencies, and at least one pair must score positive. Otherwise local alignment is meaningless: no score, or a score that grows linearly with length for unrelated sequences.

**Semi-global variants.** All four are the same recurrence, differing only in boundary rows and in where the answer is read ($x$ runs down the side, $y$ across the top):

| alignment | first row $F(0,j)$ | first column $F(i,0)$ | read answer at | use |
|---|---|---|---|---|
| global | $jg$ | $ig$ | $F(m,n)$ | homologous end to end |
| local | $0$ | $0$ | max over all cells (with 0 floor) | shared domains, database search |
| [fitting](../reference.md#semi-global-alignment) ($x$ inside $y$) | $0$ | $ig$ | $\max_j F(m,j)$ | read or gene into a longer sequence |
| [overlap](../reference.md#semi-global-alignment) (suffix of $x$, prefix of $y$) | $jg$ | $0$ | $\max_j F(m,j)$ | joining overlapping reads |

*In words: a zero first row makes $y$'s leading letters free; taking the max along the bottom row makes $y$'s trailing letters free; the same logic on columns frees $x$'s ends.*

**Cost.** All variants are $\Theta(mn)$ time and space, like Needleman–Wunsch. Local alignment of a 300-residue query against a database of $10^9$ residues is therefore about $3\times10^{11}$ cell updates. That's feasible on a GPU and too slow for everyday use, which is why [1.6](01-06-blast-seeded-heuristic-search.md) exists.

## Picture

![Left: the Smith–Waterman matrix for AACGTGCC down the side and TTCGAGCA across the top, mostly zeros, with a highlighted diagonal path climbing 0, 1, 2, 1, 2, 3 to the maximum cell. Right: four small square schematics showing where alignment paths may start and end — global from the top-left corner to the bottom-right corner, local anywhere to anywhere, fitting from the top row to the bottom row, and overlap from the left column to the bottom row.](assets/01-04-fig1.svg)

Look at how *empty* the matrix is. Unrelated stretches keep resetting to 0, and the only structure is short diagonal runs where letters happen to agree. The highlighted run climbs to 3, dips to 1 at the T/A mismatch, and climbs back. The local alignment tolerates one mismatch because the matches on either side are worth more. The four schematics on the right are the table above as geometry: blue marks where a path may begin for free, coral where it may end for free.

## Worked examples

**Example 1 (mechanical): local versus global.** Align $x = $ `AACGTGCC` (side) with $y = $ `TTCGAGCA` (top): match $+1$, mismatch $-1$, gap $-2$.

| | − | T | T | C | G | A | G | C | A |
|---|---|---|---|---|---|---|---|---|---|
| **−** | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 | 0 |
| **A** | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 |
| **A** | 0 | 0 | 0 | 0 | 0 | 1 | 0 | 0 | 1 |
| **C** | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 1 | 0 |
| **G** | 0 | 0 | 0 | 0 | 2 | 0 | 1 | 0 | 0 |
| **T** | 0 | 1 | 1 | 0 | 0 | 1 | 0 | 0 | 0 |
| **G** | 0 | 0 | 0 | 0 | 1 | 0 | 2 | 0 | 0 |
| **C** | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 3 | 1 |
| **C** | 0 | 0 | 0 | 1 | 0 | 0 | 0 | 1 | 2 |

Two cells by hand:

- $F(5,5)$, T against A: diagonal $F(4,4) + s(T,A) = 2 - 1 = 1$; up $F(4,5) - 2 = -2$; left $F(5,4) - 2 = -2$; floor 0. Max is **1**. The mismatch costs a point but doesn't reset the run.
- $F(5,4)$, T against G: diagonal $F(4,3) - 1 = -1$; up $F(4,4) - 2 = 0$; left $F(5,3) - 2 = -2$; floor 0. Max is **0**.

The unique maximum is $F(7,7) = 3$. Trace back diagonally through $(6,6) = 2$, $(5,5) = 1$, $(4,4) = 2$, $(3,3) = 1$, and stop at $(2,2) = 0$:

```
C G T G C
C G A G C
```

Four matches and a mismatch: $4 - 1 = 3$. The global alignment of the same pair scores 0 and aligns all eight letters against each other, mostly as mismatches. It has no way to say "only this middle part is related".

**Example 2 (why you'd care): joining reads needs overlap, not local.** Two reads from a genome: $x = $ `GATTACAGT` and $y = $ `CAGTTCCA`. We want to know whether the end of $x$ overlaps the start of $y$.

*Clean reads.* The overlap alignment (first column 0, first row $jg$, answer on the bottom row) scores **4**:

```
G A T T A C A G T
          C A G T T C C A
```

`CAGT` matches `CAGT`. Local alignment finds the same four letters here.

*One sequencing error.* Suppose the last base of $x$ was misread, so $x = $ `GATTACAGA`. The **overlap** alignment still reports the right join, scoring $3 - 1 = 2$:

```
C A G A
C A G T
```

**Local** alignment scores 3, and it has *two* optimal answers. One is `CAG`/`CAG`, which stops before the error, so it no longer shows that the reads join end to end. The other is `TTACA`/`TTCCA`, from the *middle* of $x$ against the *end* of $y$ — not an overlap at all. The local score is higher, and it answers the wrong question. An assembler needs "does $x$'s suffix match $y$'s prefix", which is a constraint on the boundaries, and only the overlap variant enforces it. That's why overlap-based assemblers use it ([4.3](04-03-genome-assembly-de-bruijn.md)).

## Watch out

- **You might think** local alignment just drops the negative ends of a global alignment — **but actually** the best local alignment can come from a different region with a different path altogether. In Example 2 the second co-optimal local alignment isn't part of the global or overlap answer at all.
- **You might use** local alignment whenever sequences differ in length — **but actually** local alignment is free to leave out the ends even when they're homologous. Mapping a read that must align completely calls for *fitting*; joining reads calls for *overlap*. Choose the variant whose free ends match the question.
- **You might choose** match $+1$, mismatch $0$ to "be lenient" — **but actually** that makes the expected score positive. Local alignment of unrelated sequences then grows linearly with length, and every pair looks related (Problem 3).

## One-liner

> Floor the scores at zero and read the answer at the best cell, and Needleman–Wunsch becomes Smith–Waterman — which works only because random alignment drifts negative; freeing just some of the ends gives fitting and overlap alignment.

## Problems

**P1 (🟢)** Find the local alignment of $x = $ `TCGAT` (side) and $y = $ `ACGA` (top) with match $+1$, mismatch $-1$, gap $-2$. (a) Fill the Smith–Waterman matrix. (b) Give the maximum score and its cell. (c) Trace back the alignment.

**P2 (🟡)** Choose global, local, fitting or overlap for each task, and give the reason in one clause. (a) Find where a 150-base read came from in a 5-million-base bacterial genome. (b) Decide whether two full-length orthologous enzymes from mouse and rat are aligned correctly end to end. (c) Find a shared kinase domain in two otherwise unrelated multidomain proteins. (d) Decide whether the last 60 bases of one long read continue into the first 60 bases of another.

**P3 (🔴)** A simulation computes the best local-alignment score of two random, unrelated DNA sequences of length $n$ (uniform bases), averaged over a few trials, under two schemes (gap $-2$ in both):

| $n$ | match +1, mismatch −1 | match +1, mismatch 0 |
|---|---|---|
| 100 | about 8 | about 35 |
| 200 | about 10 | about 70 |
| 400 | about 12 | about 140 |
| 800 | about 14 | about 272 |

(a) Compute the expected score of an aligned random column under each scheme. (b) Using only the ungapped diagonal alignment, prove a lower bound on the expected best local score under the second scheme, and compare it with the table. (c) Describe the growth pattern in each column. (d) Explain why only one scheme can distinguish related from unrelated sequences.

<details>
<summary>Solutions</summary>

**P1** (a)

| | − | A | C | G | A |
|---|---|---|---|---|---|
| **−** | 0 | 0 | 0 | 0 | 0 |
| **T** | 0 | 0 | 0 | 0 | 0 |
| **C** | 0 | 0 | 1 | 0 | 0 |
| **G** | 0 | 0 | 0 | 2 | 0 |
| **A** | 0 | 1 | 0 | 0 | 3 |
| **T** | 0 | 0 | 0 | 0 | 1 |

(b) Maximum **3** at $(4,4)$, A against A. It's unique.

(c) Diagonal back through $(3,3) = 2$ and $(2,2) = 1$ to $(1,1) = 0$, then stop:

```
C G A
C G A
```

**P2** (a) **Fitting** — every base of the read must align, while the genome's flanks are free.
(b) **Global** — the claim to be checked is that the proteins correspond end to end.
(c) **Local** — only one region is homologous, and its position in each protein is unknown.
(d) **Overlap** — the match must reach the end of one read and the start of the other; a local hit in the middle would be a false join (Example 2).

**P3** (a) Two uniform random bases match with probability $\tfrac14$. Scheme 1: $\tfrac14(+1) + \tfrac34(-1) = \mathbf{-0.5}$. Scheme 2: $\tfrac14(+1) + \tfrac34(0) = \mathbf{+0.25}$.

(b) The best local score is at least the score of any particular alignment. Take the full ungapped diagonal: $x_1$ with $y_1$, …, $x_n$ with $y_n$. Its score is the number of matching positions, with expected value $n/4$. The expected maximum is at least the expected value of this one candidate, so $\mathbb{E}[\text{best}] \ge n/4$. The table (35 at $n = 100$, 272 at $n = 800$) sits above $n/4$ (25, 200), since gaps and diagonal offsets let the optimum do better still.

(c) Scheme 1 adds roughly **2 per doubling of $n$** — logarithmic growth. Scheme 2 **doubles when $n$ doubles** — linear growth, about $0.34n$.

(d) Under scheme 1 the score of *unrelated* sequences stays small and grows only like $\log n$. A real homologous region, whose columns score positive on average, climbs linearly in its own length and stands out. Under scheme 2 unrelated sequences already score linearly in $n$, so a large score is what you get anyway; no threshold separates signal from noise. [1.7](01-07-alignment-statistics-e-values.md) makes the logarithmic law exact: the best random score concentrates near $\ln(mn)/\lambda$.

</details>

## Flashback

**From Lesson 1.2 (Substitution matrices as log-odds):** In BLOSUM62, C-C scores 9 half-bits. (a) What likelihood ratio $q_{CC}/p_C^2$ does that correspond to, nominally? (b) If $p_C = 0.025$, what target frequency $q_{CC}$ does the score imply? (c) You're searching for a homolog expected to share only about 25 percent identity with your query. Should you prefer BLOSUM45 or BLOSUM80, and why?

<details>
<summary>Solution</summary>

(a) 9 half-bits $= 4.5$ bits, so the ratio is $2^{4.5} \approx \mathbf{22.6}$: a C/C pair is about 23 times more common in homologous alignments than chance predicts.

(b) $q_{CC} = 22.6 \times p_C^2 = 22.6 \times 0.000625 \approx \mathbf{0.0141}$.

(c) **BLOSUM45.** BLOSUM$X$ is built from blocks clustered at $X$ percent identity. BLOSUM45's target frequencies therefore come from distantly related sequences, and its scores reward the substitutions that distant homologs actually make. BLOSUM80 is tuned for close relatives: it rewards identities heavily and penalizes substitutions that are common at 25 percent identity, so real distant homologs score poorly. (The numbers run opposite to PAM, where *higher* is more distant.)

</details>

## Connections

- **Backward:** the recurrence is [1.3](01-03-needleman-wunsch-global-alignment.md)'s with a zero option; the requirement $\mathbb{E}[s] < 0$ is the negative-KL result of [1.2](01-02-substitution-matrices-log-odds.md).
- **Forward:** [1.5](01-05-affine-gaps-gotoh.md) adds affine gaps to every variant here; [1.6](01-06-blast-seeded-heuristic-search.md) approximates local alignment by seeding and extending; [1.7](01-07-alignment-statistics-e-values.md) turns P3's logarithmic growth into the Karlin–Altschul E-value; overlap alignment builds the overlap graph in [4.3](04-03-genome-assembly-de-bruijn.md), and fitting alignment is the "extend" step of read mapping in [4.2](04-02-read-mapping-bwt-fm-index.md).
- **Sideways:** "best contiguous segment with a reset at zero" is Kadane's maximum-subarray algorithm run along every diagonal at once. Along one diagonal, the zero-floored running score $W \leftarrow \max(0, W + s)$ is Lindley's recursion for a queue's waiting time, and negative drift is exactly what keeps that queue stable — the same drift condition that makes the ruin probabilities of [probability-theory 5.4](../../probability-theory/lessons/05-04-stopping-times-optional-stopping.md) less than one.
