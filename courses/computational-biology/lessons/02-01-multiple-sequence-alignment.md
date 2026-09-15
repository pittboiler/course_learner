# Computational Biology · Lesson 2.1: Multiple sequence alignment

> ⏱ ~15 min · Module 2: Phylogenetics & evolutionary models · Builds on: [1.3](01-03-needleman-wunsch-global-alignment.md) (pairwise DP), [1.7](01-07-alignment-statistics-e-values.md) (choosing homologs) · Unlocks: [2.2](02-02-tree-metrics-upgma.md) (trees from distances), [2.4](02-04-parsimony-fitch-sankoff.md) (parsimony on columns), [3.5](03-05-profile-hmms.md) (profile HMMs)

## Why this matters

Almost everything downstream in this course takes a **multiple sequence alignment (MSA)** as input. Tree building, parsimony and likelihood all work column by column. So do profile HMMs, conservation scores and the coevolution signal behind AlphaFold. An MSA's columns are hypotheses of **positional homology**: these residues in these proteins all descend from one residue in the ancestor. Get a column wrong and every method downstream inherits the error, confidently.

And the exact problem is hopeless. Extending pairwise DP to many sequences is exponential in the number of sequences, and the standard objective is NP-hard. Every MSA you'll ever use was built by a heuristic. This lesson is about which heuristic, and the specific way it fails.

## The idea

**Scoring many sequences at once.** The usual objective is **sum-of-pairs (SP)**: score every pair of rows in every column with the pairwise scheme, and add everything up. An alignment of $k$ sequences with a good SP score makes all $\binom{k}{2}$ induced pairwise alignments good at once.

**Exact DP doesn't scale.** Pairwise alignment is a path through a 2D grid. Three sequences need a 3D grid, and each cell has 7 predecessors: every non-empty subset of the three sequences can advance by one letter. Ten sequences of length 300 would need about $6\times10^{27}$ cell-updates.

**Progressive alignment** (Feng–Doolittle, Clustal) sidesteps the explosion:

1. Align all pairs and turn their scores into distances.
2. Build a **guide tree** from the distances ([2.2](02-02-tree-metrics-upgma.md), [2.3](02-03-neighbor-joining.md)).
3. Merge following the tree, from the leaves up. Align the two closest sequences, then align that pair (as a **profile**, a block of columns) to the next sequence or profile, and so on.

Each merge is an ordinary 2D dynamic program, so the whole thing is fast. The cost is **"once a gap, always a gap"**: an alignment made at an early merge is frozen. When a later sequence shows the early choice was wrong, nothing can undo it. Iterative refinement (MUSCLE, MAFFT) breaks the alignment into two groups, realigns the groups, and keeps any improvement, clawing back some of the damage.

## The formal version

**Sum-of-pairs score.** For an MSA with rows $r^{(1)},\dots,r^{(k)}$ over columns $c = 1,\dots,\ell$,

$$\text{SP} = \sum_{c=1}^{\ell}\ \sum_{1 \le p < q \le k} \sigma\big(r^{(p)}_c, r^{(q)}_c\big),\qquad \sigma(a,b) = \begin{cases} s(a,b) & a,b \text{ letters}\\ g & \text{exactly one is a gap}\\ 0 & \text{both are gaps.}\end{cases}$$

This is the [sum-of-pairs score](../reference.md#sum-of-pairs-score). *In words: the SP score of an MSA is the total score of all the pairwise alignments it induces.* A gap–gap pair scores 0, because deleting both rows' gap characters from that column leaves the pair's own alignment unchanged.

**Exact cost.** The $k$-dimensional DP over lengths $L_1,\dots,L_k$ has $\prod_i(L_i + 1)$ cells and $2^k - 1$ predecessors per cell:

$$\text{time} = \Theta\big((2^k - 1)\,L^k\big) \quad\text{for equal lengths } L.$$

Minimizing SP cost is NP-hard (Wang & Jiang, 1994). *In words: you can't beat exponential in $k$ in general, so large MSAs are always heuristic.*

**Profile–profile alignment.** Treat an existing alignment $A$ of $k_A$ rows as a sequence of columns, and likewise $B$. Aligning $A$ to $B$ is Needleman–Wunsch over columns, with the score of pairing column $a$ with column $b$ equal to the sum of $\sigma$ over all $k_A k_B$ cross pairs. Inserting a gap column into $A$ puts a gap in *every* row of $A$ at once. The rows within $A$ stay exactly as they were aligned, which is what freezes earlier choices.

**Guide trees.** Distances come from pairwise alignments, e.g. $d = 1 - (\text{fraction identical})$ or a corrected distance ([2.5](02-05-substitution-models.md)). The tree only fixes the **merge order**. It isn't meant as a phylogeny, and using it as one is circular.

## Picture

![Left: a guide tree joining TCGGG and TTCGG first, then CGG. Middle top: the closest pair aligned on its own with no gaps, pair score plus one. Middle bottom: CGG added to the frozen pair, giving rows TCGGG, TTCGG and gap gap CGG with SP score minus three. Right: the exact three-way optimum, with rows gap TCGGG, TTCGG gap, gap gap CGG gap, SP score minus two, where the second sequence is shifted one position so all three share C G G in register.](assets/02-01-fig1.svg)

On its own, the closest pair prefers two mismatches to two gaps, and that choice gets frozen. When `CGG` arrives, it clearly wants `TTCGG` shifted one place right so that `CGG` lines up across all three rows. But shifting would mean re-opening the pair alignment, which profile alignment never does. The exact optimum gives up one point on the first pair (+1 becomes 0) and gains two on the first–third pair (−3 becomes −1). **The best MSA need not contain the best pairwise alignment of every pair** — here it sacrifices the closest pair, the one progressive alignment trusted most.

## Worked examples

**Example 1 (mechanical): scoring a column-by-column SP.** Score the progressive result from the picture with match $+1$, mismatch $-1$, gap $-2$:

```
T C G G G
T T C G G
- - C G G
```

Each column has three pairs, (row 1, row 2), (row 1, row 3), (row 2, row 3):

| column | letters | pair scores | column total |
|---|---|---|---|
| 1 | T, T, − | $+1, -2, -2$ | −3 |
| 2 | C, T, − | $-1, -2, -2$ | −5 |
| 3 | G, C, C | $-1, -1, +1$ | −1 |
| 4 | G, G, G | $+1, +1, +1$ | +3 |
| 5 | G, G, G | $+1, +1, +1$ | +3 |

$\text{SP} = -3 - 5 - 1 + 3 + 3 = \mathbf{-3}$.

Cross-check by pairs: rows 1–2 are ungapped with 3 matches and 2 mismatches ($+1$). Rows 1–3 (`TCGGG` over `--CGG`) have 2 gaps, one mismatch and two matches ($-4 - 1 + 2 = -3$). Rows 2–3 (`TTCGG` over `--CGG`) have 2 gaps and three matches ($-4 + 3 = -1$). Total $+1 - 3 - 1 = -3$. The two ways of counting always agree.

**Example 2 (why you'd care): the cost of freezing.** The exact 3D DP on the same sequences finds SP $= -2$ with, for example,

```
- T C G G G
T T C G G -
- - C G G -
```

Induced pair scores: 0, −1, −1. Each pair with `CGG` now reaches its own pairwise optimum of $-1$. The first pair drops from its pairwise optimum of $+1$ to 0.

Biologically, the exact alignment tells a cleaner story: `TTCGG` has a one-base insertion at its front, and all three share `CGG` at homologous positions. The progressive alignment instead claims that the C of `TCGGG` and the C of `CGG` are *not* homologous. Every tree or conservation score built on its columns inherits that claim. On real data this failure concentrates exactly where you care most: around indels in the most similar sequences, which get aligned first and are trusted most.

## Watch out

- **You might read** an MSA's columns as observed facts — **but actually** each column is a homology hypothesis made by a heuristic. Alignment uncertainty is real and usually ignored downstream. Regions full of gaps are commonly trimmed before building trees.
- **You might use** the guide tree as your phylogeny — **but actually** it was built from rough pairwise distances only to set the merge order. Then the MSA was built to agree with it. Inferring a tree from that MSA and calling the match "confirmation" is circular.
- **You might think** a bigger SP score is always better biology — **but actually** SP counts closely related pairs many times over. Ten near-identical sequences plus one distant one make the objective mostly about the ten. Tools down-weight redundant sequences for this reason.

## One-liner

> Multiple alignment maximizes a sum of pairwise scores whose exact DP is exponential in the number of sequences, so everyone aligns progressively up a guide tree — fast, but every early gap is frozen, and the best MSA can require worse alignments of its closest pairs.

## Problems

**P1 (🟢)** Compute the SP score of this MSA with match $+1$, mismatch $-1$, gap $-2$, gap–gap $0$:

```
A C - G T
A C C G T
A - - G T
T C - G A
```

**P2 (🟡)** (a) How many cell updates (cells × predecessors) does exact SP alignment need for 3 sequences of length 100? For 5 of length 200? For 10 of length 300? (b) At $10^9$ updates per second, how long does each take? (c) Which of the three is feasible?

**P3 (🔴)** Three sequences: `CCCTT`, `CCTTG`, `CATT`. Pairwise NW scores (match $+1$, mismatch $-1$, gap $-2$) are $+1$ for `CCCTT`/`CCTTG`, $0$ for `CCCTT`/`CATT`, $0$ for `CCTTG`/`CATT`, and the unique optimal pairwise alignment of the first pair is ungapped. (a) Which pair does a guide tree merge first? (b) After freezing that pair, the best way to add `CATT` is `-CATT` under the frozen `CCCTT` / `CCTTG`. Compute its SP. (c) Compute the SP of the alternative below, and say which is better.

```
C C C T T -
- C C T T G
- C A T T -
```

(d) What does the better alignment claim about the evolutionary relationship of `CCCTT` and `CCTTG` that the progressive one doesn't?

<details>
<summary>Solutions</summary>

**P1** Six pairs per column:

| column | letters | matches | mismatches | letter–gap | gap–gap | total |
|---|---|---|---|---|---|---|
| 1 | A, A, A, T | 3 | 3 | 0 | 0 | 0 |
| 2 | C, C, −, C | 3 | 0 | 3 | 0 | $3 - 6 = -3$ |
| 3 | −, C, −, − | 0 | 0 | 3 | 3 | $-6$ |
| 4 | G, G, G, G | 6 | 0 | 0 | 0 | $+6$ |
| 5 | T, T, T, A | 3 | 3 | 0 | 0 | 0 |

$\text{SP} = 0 - 3 - 6 + 6 + 0 = \mathbf{-3}$.

**P2** (a) Cells $(L+1)^k$ times predecessors $2^k - 1$:
- $k = 3$, $L = 100$: $101^3 \times 7 = \mathbf{7.2\times10^6}$.
- $k = 5$, $L = 200$: $201^5 \times 31 = \mathbf{1.0\times10^{13}}$.
- $k = 10$, $L = 300$: $301^{10} \times 1023 = \mathbf{6.2\times10^{27}}$.

(b) $0.007$ seconds; $1.0\times10^4$ seconds, about **2.8 hours**; $6.2\times10^{18}$ seconds, about **$2\times10^{11}$ years**.

(c) Three sequences is trivial and five is an overnight job. Ten is impossible, and ten sequences is a small alignment.

**P3** (a) The pair with the highest score, **`CCCTT` and `CCTTG`** (+1).

(b)

```
C C C T T
C C T T G
- C A T T
```

Pairs: rows 1–2 are ungapped, C/C, C/C, C/T, T/T, T/G: 3 matches and 2 mismatches, $+1$. Rows 1–3: C/−, C/C, C/A, T/T, T/T, i.e. one gap, 3 matches, 1 mismatch: $-2 + 3 - 1 = 0$. Rows 2–3: C/−, C/C, T/A, T/T, G/T: one gap, 2 matches, 2 mismatches: $-2 + 2 - 2 = -2$. $\text{SP} = 1 + 0 - 2 = \mathbf{-1}$.

(c) Pairs, ignoring gap–gap columns: rows 1–2 are C/−, C/C, C/C, T/T, T/T, −/G: two gaps and 4 matches, $-4 + 4 = 0$. Rows 1–3 are C/−, C/C, C/A, T/T, T/T: $-2 + 3 - 1 = 0$. Rows 2–3 (column 1 is gap–gap) are C/C, C/A, T/T, T/T, G/−: $3 - 1 - 2 = 0$. $\text{SP} = 0 + 0 + 0 = \mathbf{0}$, better by 1. (It is the exact optimum.)

(d) The better alignment says `CCTTG` is `CCCTT` with **one leading C deleted and a G appended** — two indels, with the `CCTT` cores homologous letter for letter. The progressive alignment says they differ by **two substitutions** in place. The third sequence tips the balance toward the indel story, but only a method that can revisit the first pair can act on it.

</details>

## Flashback

**From Lesson 1.6 (BLAST & heuristic search):** A 500-residue query is searched against $2\times10^9$ residues with $w = 3$. The random-word-pair probability is $\pi_{12} = 0.0012$ at $T = 12$ and $\pi_{11} = 0.0021$ at $T = 11$. (a) Estimate the number of random single seed hits at $T = 12$. (b) Estimate the number surviving a two-hit filter with window $A = 40$. (c) By what factor does lowering $T$ to 11 multiply the two-hit count, and why is the factor bigger than for single hits?

<details>
<summary>Solution</summary>

(a) $498 \times 2\times10^9 \times 0.0012 \approx \mathbf{1.2\times10^9}$.

(b) Multiply by $\pi_{12} A = 0.0012 \times 40 = 0.048$: about $\mathbf{5.7\times10^7}$.

(c) Single hits scale like $\pi_T$, but two-hit events scale like $\pi_T^2$ (one factor for each hit). The factor is $(0.0021/0.0012)^2 = 1.75^2 \approx \mathbf{3.1}$, against $1.75$ for single hits. Lowering $T$ costs quadratically more *filtered* work, which is part of why BLAST's defaults sit where they do.

</details>

## Connections

- **Backward:** each merge is [1.3](01-03-needleman-wunsch-global-alignment.md)'s DP over columns instead of letters; which sequences are homologous enough to include is [1.7](01-07-alignment-statistics-e-values.md)'s E-value judgement.
- **Forward:** guide trees are built with [2.2](02-02-tree-metrics-upgma.md)'s UPGMA or [2.3](02-03-neighbor-joining.md)'s neighbor-joining; parsimony ([2.4](02-04-parsimony-fitch-sankoff.md)) and likelihood ([2.6](02-06-tree-likelihood-felsenstein-pruning.md)) score MSA columns as independent characters; a profile HMM ([3.5](03-05-profile-hmms.md)) is the probabilistic version of a profile, and coevolving columns feed structure prediction ([5.4](05-04-protein-structure-prediction-alphafold.md)).
- **Sideways:** SP alignment's NP-hardness means what [algorithms 4.1](../../algorithms/lessons/04-01-p-np-and-polynomial-time-reductions.md) says it means — no polynomial algorithm unless P = NP — which is why the field settled for heuristics rather than waiting for a faster exact method; "commit greedily along a tree, never revisit" is the same trade that makes agglomerative clustering fast and myopic ([machine-learning 3.4](../../machine-learning/lessons/03-04-hierarchical-clustering.md)).
