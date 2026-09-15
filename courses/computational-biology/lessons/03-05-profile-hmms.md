# Computational Biology · Lesson 3.5: Profile HMMs

> ⏱ ~15 min · Module 3: Probabilistic models — HMMs & gene finding · Builds on: [2.1](02-01-multiple-sequence-alignment.md) (MSAs and profiles), [3.4](03-04-training-hmms-baum-welch.md) (training with pseudocounts), [1.5](01-05-affine-gaps-gotoh.md) (gap states) · Unlocks: [3.6](03-06-gene-finding.md) (gene finding), [5.4](05-04-protein-structure-prediction-alphafold.md) (family alignments for structure)

## Why this matters

BLAST compares one query to one database sequence at a time, with one substitution matrix and one gap penalty everywhere ([1.6](01-06-blast-seeded-heuristic-search.md)). But a protein family is more than any single member. Some positions never change (an active-site cysteine), some tolerate anything hydrophobic, and some loops absorb insertions freely while the core never does. A single-sequence search can't know any of that.

A **profile HMM** encodes it: one probabilistic model per family, with its own emission distribution at every column and its own insertion and deletion probabilities between columns. Pfam, the database that classifies most known proteins into families, is a library of profile HMMs. HMMER searches with them and finds homologs that BLAST misses. This lesson builds a small profile HMM from an alignment by counting, and shows why its gap penalties are position-specific.

## The idea

Start from a multiple alignment of a family ([2.1](02-01-multiple-sequence-alignment.md)) and turn each well-populated column into a **match state**. A match state emits residues with that column's frequencies: mostly C where the column is mostly C.

Real family members also have extra residues (insertions) and missing ones (deletions) relative to the consensus. So add two more kinds of state around each match state:

- an **insert state** after each match state, which emits residues at background frequencies and can loop to absorb several;
- a **delete state** for each column, which is silent and lets a sequence skip the column.

Transitions among match, insert and delete states come from counting what the aligned sequences actually did. If many family members have an insertion after column 12, the transition $M_{12} \to I_{12}$ is common and cheap. If nobody inserts after column 30, the transition is rare and expensive. That's the key difference from pairwise alignment: **gap penalties vary along the family**, learned from the family itself.

To score a new sequence, align it to the model with Viterbi ([3.2](03-02-viterbi-decoding.md)) for the best path, or sum over all paths with forward ([3.3](03-03-forward-backward-posterior-decoding.md)). Report log-odds against a background model.

## The formal version

**Architecture.** For $K$ match columns, the states are $M_1, \dots, M_K$ (emitting), $I_0, \dots, I_K$ (emitting, looping) and $D_1, \dots, D_K$ (silent), plus Begin and End. The allowed transitions are $M_k$, $I_k$ or $D_k$ to $M_{k+1}$, $I_k$ or $D_{k+1}$.

**Building from an MSA** (with pseudocounts, [3.4](03-04-training-hmms-baum-welch.md)):

1. **Match columns:** columns with at most half of their entries gaps (a common rule).
2. **Match emissions:** $e_{M_k}(a) = \dfrac{c_k(a) + 1}{\sum_b c_k(b) + |\Sigma|}$, where $c_k(a)$ counts residue $a$ in column $k$.
3. **Insert emissions:** usually the background $q_a$, so inserts add no log-odds.
4. **Transitions:** trace each sequence's state path through the alignment, count every transition, add a pseudocount to each allowed transition, and normalize over the transitions leaving each state.

**Log-odds score of a path.** For a query $x$ aligned along state path $\pi$,

$$S(x, \pi) = \sum_{\text{match emissions}} \log_2\frac{e_{M_k}(x_i)}{q_{x_i}} + \sum_{\text{transitions}} \log_2 a_{\pi_j \pi_{j+1}},$$

and the model's score for $x$ is the Viterbi maximum over paths, or the forward sum. This is the [profile HMM](../reference.md#profile-hmm) score. *In words: reward residues that fit each column, and pay a column-specific price for every insertion, deletion and transition.*

**Profile HMM versus BLAST.**

| | BLAST | profile HMM (HMMER) |
|---|---|---|
| query | one sequence | a whole family model |
| substitution scores | one matrix everywhere | a distribution per column |
| gap costs | one open/extend everywhere | per position, learned |
| speed | seeds, very fast | slower; modern HMMER adds filtering |
| sensitivity | misses distant homologs | finds many more |

## Picture

![A profile HMM with five columns. A row of square match states M1 to M5 runs between a Begin circle and an End circle. Above sits a row of diamond insert states I0 to I5, each with a self-loop, and below a row of circular delete states D1 to D5. Arrows connect each state to the next column's match, insert and delete states. A coral path runs Begin, M1, M2, into I2 with its self-loop, then M3, M4, M5 and End, the path for query ACTTGTA.](assets/03-05-fig1.svg)

Every alignment of a query to the family is a left-to-right path. The coral path spends its match states on A, C, G, T, A and detours through the insert diamond above M2 to emit the extra TT. A path that skipped a column would dip through a delete circle and emit nothing. The arrows are the same everywhere, but their *probabilities* aren't: that's where this family's habit of inserting after column 2 lives.

## Worked examples

**Example 1 (mechanical): build a profile from five aligned sequences.**

```
col   1 2 3 4 5 6 7
s1    A C - - G T A
s2    A G - - G T A
s3    A C T A G C A
s4    T C - - G T -
s5    A C - T G T A
```

*Match columns.* Columns 3 and 4 are 60 percent gaps: insert columns. Columns 1, 2, 5, 6, 7 have at most 20 percent gaps: match states $M_1 \ldots M_5$.

*Emissions (pseudocount 1, background 0.25).*

| state | counts | probabilities (A, C, G, T) | log₂-odds of the top residue |
|---|---|---|---|
| $M_1$ | A 4, T 1 | 5/9, 1/9, 1/9, 2/9 | A: $\log_2(0.556/0.25) = 1.15$ |
| $M_2$ | C 4, G 1 | 1/9, 5/9, 2/9, 1/9 | C: 1.15 |
| $M_3$ | G 5 | 1/9, 1/9, 6/9, 1/9 | G: 1.42 |
| $M_4$ | T 4, C 1 | 1/9, 2/9, 1/9, 5/9 | T: 1.15 |
| $M_5$ | A 4 (one delete) | 5/8, 1/8, 1/8, 1/8 | A: 1.32 |

*Transitions.* Trace each sequence: s1, s2 and s4 go $M_2 \to M_3$; s3 goes $M_2 \to I_2 \to I_2 \to M_3$; s5 goes $M_2 \to I_2 \to M_3$; s4 ends $M_4 \to D_5$. Out of $M_2$: to $M_3$ 3, to $I_2$ 2, to $D_3$ 0. With pseudocount 1 each: $a_{M_2M_3} = 4/8 = 0.5$, $a_{M_2I_2} = 3/8 = 0.375$, $a_{M_2D_3} = 1/8$. Out of $I_2$: to $I_2$ 1, to $M_3$ 2, to $D_3$ 0, so $(2, 3, 1)/6$. Out of $M_4$: to $M_5$ 4, to $D_5$ 1, to $I_4$ 0, so $a_{M_4M_5} = 5/8$, $a_{M_4D_5} = 2/8$, $a_{M_4I_4} = 1/8$. Columns where no sequence inserted get $a_{M_kI_k} = 1/8$.

**Example 2 (why you'd care): insertions cost what the family says.** Score three queries along the paths shown, ignoring the final transition to End, which is the same for all three:

| query | path | match log-odds | transitions (log₂) | total |
|---|---|---|---|---|
| `ACGTA` | $M_1M_2M_3M_4M_5$ | $1.15 + 1.15 + 1.42 + 1.15 + 1.32 = 6.19$ | $-0.42 - 0.42 - 1.00 - 0.42 - 0.68 = -2.92$ | **3.27** |
| `ACTTGTA` | $M_1M_2\,I_2I_2\,M_3M_4M_5$ | 6.19 | $-0.42 - 0.42 - 1.42 - 1.58 - 1.00 - 0.42 - 0.68 = -5.92$ | **0.27** |
| `ACGTTTA` | $M_1M_2M_3\,I_3I_3\,M_4M_5$ | 6.19 | $-0.42 - 0.42 - 1.00 - 3.00 - 1.58 - 1.58 - 0.68 = -8.68$ | **−2.49** |

Both of the last two queries carry the same core `ACGTA` plus two extra bases. The insertion after column 2, where family members insert, costs **3.0 bits**. The same-length insertion after column 3, where no family member inserts, costs **5.8 bits**. A pairwise aligner with one gap-open penalty would charge both the same. The profile has learned where this family tolerates change.

## Watch out

- **You might build** a profile from a handful of very similar sequences and expect it to find distant relatives — **but actually** its emissions will be sharply peaked on the few residues seen and will punish legitimate substitutions. Pseudocounts help a little. Real tools use Dirichlet mixture priors, and they weight sequences so near-duplicates don't dominate.
- **You might think** insert states make insertions free because they emit at background — **but actually** the emissions add no log-odds, but the *transitions* into and around insert states are charged, and those carry the whole cost (Example 2).
- **You might compare** profile HMM scores to BLAST bit scores directly — **but actually** they come from different models. Compare E-values ([1.7](01-07-alignment-statistics-e-values.md)), which HMMER computes with its own calibrated score distributions.

## One-liner

> A profile HMM turns a family alignment into match states with per-column residue distributions and insert/delete states with per-column transition costs, so aligning a query to it rewards conservation and charges gaps exactly where the family says gaps belong.

## Problems

**P1 (🟢)** Using Example 1's alignment: (a) which columns become match states under the 50-percent-gaps rule, and what if the rule were "at most 20 percent gaps"? (b) Give $e_{M_4}(\text{C})$ and its log₂-odds against background 0.25.

**P2 (🟡)** A new sequence `ACGCA` is aligned to the profile along $M_1M_2M_3M_4M_5$. (a) Compute its match log-odds and its total score, ignoring the End transition. (b) By how much does it trail `ACGTA`, and which single column is responsible? (c) Is that penalty large or small compared with inserting two bases after column 2?

**P3 (🔴)** The four-letter query `ACTA` is one residue short of the family. Compare two ways of aligning it. (a) Delete column 3: path $M_1\,M_2\,D_3\,M_4\,M_5$. Compute its score, using $a_{M_2D_3} = 1/8$, $a_{D_3M_4} = 1/3$ (no data, uniform pseudocounts), and the other transitions from Example 1. (b) Force all four letters into $M_1\,M_2\,M_3\,M_4$ and delete the last column: path $M_1\,M_2\,M_3\,M_4\,D_5$, with $a_{M_4D_5} = 1/4$ and $a_{D_5 \to \text{End}} = 1$. (c) Which alignment would Viterbi prefer between these two, and what does that say about where the family tolerates a missing residue?

<details>
<summary>Solutions</summary>

**P1** (a) Gap fractions by column: 1: 0, 2: 0, 3: 60 percent, 4: 60 percent, 5: 0, 6: 0, 7: 20 percent. Under the 50-percent rule, match columns are **1, 2, 5, 6, 7**. Under a 20-percent rule, column 7 (exactly 20 percent) still qualifies, so the answer is the same. Only a stricter rule, such as "no gaps", would drop column 7.

(b) Column 6 has T 4, C 1: $e_{M_4}(\text{C}) = (1 + 1)/9 = 2/9 = 0.222$, log₂-odds $\log_2(0.222/0.25) = \mathbf{-0.17}$ bits. Seen once in five, C is only mildly penalized.

**P2** (a) Match log-odds: $M_1$ A $1.15$, $M_2$ C $1.15$, $M_3$ G $1.42$, $M_4$ C $-0.17$, $M_5$ A $1.32$: total $4.87$. Transitions as for `ACGTA`: $-2.92$. **Score $1.95$.**

(b) It trails `ACGTA` (3.27) by **1.32 bits**, entirely from column 4 of the profile ($M_4$), where C scores $-0.17$ against T's $+1.15$.

(c) **Smaller.** The two-base insertion after column 2 cost 3.0 bits. A conservative, once-observed substitution at a variable column is cheaper than even a family-typical insertion.

**P3** (a) Path $M_1(\text{A})\,M_2(\text{C})\,D_3\,M_4(\text{T})\,M_5(\text{A})$. Emissions: $1.152 + 1.152 + 1.152 + 1.322 = 4.78$. Transitions: B→$M_1$ $-0.415$, $M_1$→$M_2$ $-0.415$, $M_2$→$D_3$ $\log_2(1/8) = -3.000$, $D_3$→$M_4$ $\log_2(1/3) = -1.585$, $M_4$→$M_5$ $-0.678$: total $-6.09$. **Score $-1.32$.**

(b) Path $M_1(\text{A})\,M_2(\text{C})\,M_3(\text{T})\,M_4(\text{A})\,D_5$. Emissions: $1.152 + 1.152 - 1.170 - 1.170 = -0.04$ (T in the G column and A in the T column both score $\log_2(1/9 \div 1/4) = -1.17$). Transitions: $-0.415 - 0.415 - 1.000 - 0.415 + \log_2(1/4) = -2.245 - 2.000 = -4.25$. **Score $-4.28$.**

(c) Viterbi prefers **(a)**, by about 3 bits. It pays for deleting column 3 rather than forcing mismatched residues into columns 3 and 4. The deletion is still expensive, 4.6 bits for $M_2 \to D_3 \to M_4$, because no family member lacks column 3; in a column that several members skip, the same deletion would be far cheaper.

</details>

## Flashback

**From Lesson 3.3 (Forward, backward & posterior decoding):** Under the GC model ($a_{HH} = a_{HL} = 0.5$, $a_{LH} = 0.4$, $a_{LL} = 0.6$; H emits A, C, G, T with 0.2, 0.3, 0.3, 0.2; L with 0.3, 0.2, 0.2, 0.3; start 0.5 each), take $x = $ `GAT`. (a) Fill the forward table and give $P(x)$. (b) Compute $b_H(1)$ and $b_L(1)$. (c) Give $P(\pi_1 = H \mid x)$. (d) Viterbi's path is HLL with $P(x, \pi) = 0.00405$. What share of $P(x)$ is that?

<details>
<summary>Solution</summary>

(a)

| $i$ | $x_i$ | $f_H$ | $f_L$ |
|---|---|---|---|
| 1 | G | $0.5 \times 0.3 = 0.15$ | $0.5 \times 0.2 = 0.1$ |
| 2 | A | $0.2\,(0.075 + 0.04) = 0.023$ | $0.3\,(0.075 + 0.06) = 0.0405$ |
| 3 | T | $0.2\,(0.0115 + 0.0162) = 0.00554$ | $0.3\,(0.0115 + 0.0243) = 0.01074$ |

$P(x) = 0.00554 + 0.01074 = \mathbf{0.01628}$.

(b) $b(3) = (1, 1)$. $b_H(2) = 0.5(0.2) + 0.5(0.3) = 0.25$, $b_L(2) = 0.4(0.2) + 0.6(0.3) = 0.26$. Then with $x_2 = $ A: $b_H(1) = 0.5(0.2)(0.25) + 0.5(0.3)(0.26) = \mathbf{0.064}$ and $b_L(1) = 0.4(0.2)(0.25) + 0.6(0.3)(0.26) = \mathbf{0.0668}$. Check: $0.5(0.3)(0.064) + 0.5(0.2)(0.0668) = 0.0096 + 0.00668 = 0.01628$.

(c) $0.15 \times 0.064 / 0.01628 = \mathbf{0.590}$.

(d) $0.00405/0.01628 = \mathbf{25}$ percent. With only three letters there are few competing paths, so the best one carries a much larger share than in longer sequences.

</details>

## Connections

- **Backward:** match columns come from [2.1](02-01-multiple-sequence-alignment.md)'s MSA; emissions and transitions are [3.4](03-04-training-hmms-baum-welch.md)'s pseudocount estimates; the match/insert/delete states are [1.5](01-05-affine-gaps-gotoh.md)'s three Gotoh states made position-specific; scoring uses [3.2](03-02-viterbi-decoding.md) and [3.3](03-03-forward-backward-posterior-decoding.md).
- **Forward:** family alignments built by profile HMMs feed the coevolution analysis behind structure prediction ([5.4](05-04-protein-structure-prediction-alphafold.md)); [3.6](03-06-gene-finding.md) uses the same idea — HMM states with learned, position-dependent statistics — for exons, introns and splice sites.
- **Sideways:** a position-specific scoring matrix (PSSM) is a profile HMM with the insert and delete states removed, which is what PSI-BLAST builds iteratively from BLAST hits ([1.6](01-06-blast-seeded-heuristic-search.md)).
