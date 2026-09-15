# Computational Biology · Lesson 1.6: BLAST & heuristic search

> ⏱ ~15 min · Module 1: Sequence alignment & database search · Builds on: [1.4](01-04-smith-waterman-local-alignment.md) (local alignment), [1.5](01-05-affine-gaps-gotoh.md) (affine gaps), [1.1](01-01-sequences-alphabets-databases.md) (k-mer counts) · Unlocks: [1.7](01-07-alignment-statistics-e-values.md) (E-values), [4.2](04-02-read-mapping-bwt-fm-index.md) (read mapping)

## Why this matters

Smith–Waterman is exact and slow. A 300-residue query against a protein database of a billion residues is about $3\times10^{11}$ DP cells, and people run such searches thousands of times a day. BLAST (Altschul et al., 1990) returns essentially the same hits in seconds. It's among the most cited papers in all of science.

It gets that speed by **giving up the guarantee**. BLAST can miss a real homolog that Smith–Waterman would find. So using it well means knowing exactly what it trades away: which alignments slip through its filter, how the tuning knobs move the line between speed and sensitivity, and why a cleverly *gapped* seed pattern beats a contiguous one for free.

## The idea

Almost every alignment worth finding contains a **short, high-scoring, ungapped stretch**. A good alignment scores well because many of its columns score well, and some of those columns sit next to each other. So don't align everything against everything:

1. **Seed.** Break the query into short overlapping words (3 residues for protein). For each word, list every word that would score at least $T$ against it — its **neighbourhood**. Put them all in a lookup table. Scanning the database is then a series of table lookups, not DP.
2. **Filter.** Keep a seed only if a second one lands on the same diagonal nearby (the **two-hit** rule). Random seeds are common, but two random seeds close together on one diagonal are rare.
3. **Extend.** Grow each surviving seed in both directions without gaps, and stop once the running score has fallen $X$ below the best seen so far (**X-drop**). If the result scores well, redo the extension with gaps (Gotoh, [1.5](01-05-affine-gaps-gotoh.md)), again with an X-drop cutoff.
4. **Judge.** Convert the score to an E-value ([1.7](01-07-alignment-statistics-e-values.md)).

Every step discards candidates cheaply. The only candidates that get dynamic programming are the ones that already look promising. The price: a homolog with **no** word pair scoring $T$ or more, or with seeds that don't survive the filter, is never examined.

## The formal version

**Words and neighbourhoods.** For query $x$ and word length $w$, the query words are $u_i = x_i \cdots x_{i+w-1}$. The [neighbourhood](../reference.md#blast-neighbourhood) of $u$ at threshold $T$ is

$$N_T(u) = \Big\{\, v \in \Sigma^w : \sum_{k=1}^{w} s(u_k, v_k) \ge T \,\Big\}.$$

*In words: all words close enough to $u$ under the substitution matrix to be worth a look.* A **seed hit** is a pair $(i, j)$ with the database word starting at $j$ in $N_T(u_i)$. Protein BLAST defaults are $w = 3$, $T = 11$, BLOSUM62. Nucleotide BLAST uses exact matches ($T = $ perfect) with $w = 11$; megablast uses $w = 28$.

**Cost of seeding.** With background frequencies $p_a$, let $\pi_T = P\big(\sum_k s(a_k,b_k) \ge T\big)$ for random words. Scanning $n$ database positions for a query of $m$ words gives about $m\,n\,\pi_T$ random seed hits. Raising $T$ shrinks $\pi_T$ (speed), but it also removes true seeds (sensitivity).

**Two-hit filter.** Require a second non-overlapping hit on the same diagonal ($j - i$ fixed) within distance $A$ (default 40). Under independence, the expected number of random two-hit events is about $m\,n\,\pi_T \cdot (\pi_T A)$.

**X-drop extension.** Along a diagonal, track the running score $R_k$ and its maximum $R^* = \max_{k' \le k} R_{k'}$. Stop at the first $k$ with

$$R_k < R^* - X,$$

and report the segment ending where $R^*$ was attained. *In words: stop once the score has sagged more than $X$ below its peak, and throw away the sag.* The extended ungapped segment is a **high-scoring segment pair (HSP)**.

**Seed sensitivity (DNA).** Model an ungapped homologous region of length $L$ as independent columns, each identical with probability $p$. A contiguous seed of weight $w$ hits if the region contains a run of at least $w$ identities. For a [spaced seed](../reference.md#spaced-seed) such as `111010010100110111` (weight 11, span 18), it hits if some window has identities at every `1`. Both have the same per-window hit probability $p^{11}$, but not the same probability of hitting *at least once*.

## Picture

![Left: a bar chart of the words closest to the query word PQG under BLOSUM62, from PQG itself at 18 down through PEG at 15, PRG and PKG at 14, and six words at 13, with a dashed threshold line at 13 separating these nine from words scoring 12. Right: a running extension score starting at 15, rising to a peak of 22 at position 5, then falling to 13 at position 8, where it crosses the dashed line at 22 minus X equals 14 and extension stops.](assets/01-06-fig1.svg)

On the left, the substitution matrix decides what counts as "close". PEG scores 15 against PQG because Q/E is a conservative swap, while PAG scores only 12. Lowering $T$ from 13 to 11 grows the neighbourhood from 9 words to 21. On the right, the extension climbs, dips at position 4, recovers to its peak of 22, then sags. When it drops below $22 - 8 = 14$ at position 8, BLAST stops and keeps the alignment only up to position 5. The dip at position 4 didn't stop it, because it never fell more than $X$ below the best so far.

## Worked examples

**Example 1 (mechanical): how many seeds?** Under BLOSUM62 with Robinson–Robinson background frequencies, the probability that a random pair of 3-residue words scores at least $T$ is

| $T$ | 11 | 12 | 13 |
|---|---|---|---|
| $\pi_T$ | 0.0021 | 0.0012 | 0.00063 |

For a 300-residue query (298 words) against a $10^9$-residue database at $T = 11$:

$$298 \times 10^{9} \times 0.0021 \approx 6.3\times10^{8}\ \text{random seed hits}.$$

Extending each one would cost more than the seeding saved. The two-hit rule with $A = 40$ multiplies by roughly $\pi_T A = 0.0021 \times 40 = 0.084$, leaving about $5\times10^{7}$ — about one-twelfth. A real homolog's alignment produces seeds at a far higher rate than $\pi_T$, so it usually gets its two hits and passes. That asymmetry is the whole trick.

**Example 2 (why you'd care): contiguous versus spaced seeds.** Take a DNA homologous region of $L = 64$ columns at 70 percent identity. The exact probabilities, computed with a small dynamic program over the columns, are:

| seed | weight | P(at least one hit) |
|---|---|---|
| contiguous `11111111111` | 11 | **0.30** |
| spaced `111010010100110111` | 11 | **0.47** |

Both seeds need 11 identities, so each window hits with probability $0.7^{11} \approx 0.020$. The contiguous seed even has *more* windows (54 against the spaced seed's 47, because its span is shorter), so it expects slightly more hits. The difference is **clumping**. If a contiguous 11-mer hits at one position, the window one step right shares 10 of its 11 positions and very likely hits too. Hits pile up in runs, so many regions get several hits while others get none. The spaced pattern's shifted copies overlap far less, so its hits spread across more regions. Same cost, more homologs found. This is PatternHunter's result (2002), and modern read mappers use spaced seeds for the same reason.

The same calculation shows why megablast is fast and blunt. At 80 percent identity over $L = 100$, an 11-mer seed hits with probability 0.87, a 28-mer with only 0.03. Megablast is for near-identical sequences, full stop.

## Watch out

- **You might think** "no BLAST hit" means "no homolog in the database" — **but actually** BLAST is a heuristic. A distant homolog with no 3-word pair scoring $T$ or more, or with no two seeds near each other, is never extended. For weak similarity, use a more sensitive method: Smith–Waterman, or profile search ([3.5](03-05-profile-hmms.md)).
- **You might lower** $T$ to find more homologs and expect a proportionate slowdown — **but actually** neighbourhood size and random hits grow much faster than true hits as $T$ falls (Example 1: $\pi_T$ triples from 13 to 11). Sensitivity is bought at a steep and increasing price.
- **You might read** the extension's stopping point as the alignment's true end — **but actually** X-drop quits when the score sags by $X$. A region that dips further than $X$ and then recovers is lost (Problem 3). The reported alignment is only as long as $X$ allows.

## One-liner

> BLAST replaces exhaustive dynamic programming with lookups for high-scoring short words, a two-hit filter, and X-drop extension — fast because random seeds rarely line up, fallible because a real homolog without a good seed is never looked at.

## Problems

**P1 (🟢)** The query contains the word `PQG`. Under BLOSUM62 at $T = 13$, which of these database words produce a seed hit: `PEG`, `PAG`, `PKG`, `AQG`, `PQS`? (Scores you need: P-P 7, Q-Q 5, G-G 6, Q-E 2, Q-A −1, Q-K 1, A-P −1, G-S 0.)

**P2 (🟡)** A contiguous DNA seed of weight 11 is used on a 50-column ungapped homologous region. The exact hit probabilities are 0.95 at 90 percent identity and 0.23 at 70 percent identity. (a) What is the per-window probability $p^{11}$ in each case? (b) Roughly how many windows are there? (c) Explain in two sentences why the sensitivity falls so much faster than the identity.

**P3 (🔴)** An ungapped extension starts from a seed scoring 10. The column scores to the right are $+3, -2, -3, -4, -2, +6, +5, +4$. (a) With $X = 8$, at which column does extension stop, and what score and length are reported? (b) What is the smallest integer $X$ for which the extension reaches the end and reports the higher score? Give that score. (c) Why doesn't BLAST just set $X$ very large?

<details>
<summary>Solutions</summary>

**P1** Score each word against `PQG`:

| word | columns | score | hit at $T = 13$? |
|---|---|---|---|
| `PEG` | $7 + 2 + 6$ | 15 | **yes** |
| `PAG` | $7 - 1 + 6$ | 12 | no |
| `PKG` | $7 + 1 + 6$ | 14 | **yes** |
| `AQG` | $-1 + 5 + 6$ | 10 | no |
| `PQS` | $7 + 5 + 0$ | 12 | no |

**PEG and PKG** seed hits. `PQS` keeps two identities but loses the heavily weighted G-G.

**P2** (a) $0.9^{11} = 0.314$ and $0.7^{11} = 0.0198$.

(b) $50 - 11 + 1 = 40$ windows.

(c) The per-window probability is the identity raised to the 11th power, so a modest drop in identity (0.9 to 0.7) shrinks it by a factor of about 16. And adjacent windows overlap in 10 of 11 positions, so hits cluster instead of spreading out. The 40 windows behave like far fewer independent chances, and the probability of at least one hit falls from near-certain to under a quarter.

**P3** Running scores: $10 \to 13 \to 11 \to 8 \to 4 \to 2 \to 8 \to 13 \to 17$.

(a) The best so far is 13 after column 1. At column 4 the score is 4, and $4 < 13 - 8 = 5$, so extension **stops at column 4**. It reports score **13**, extending **1 column** past the seed.

(b) The lowest point after the peak of 13 is 2, at column 5. The extension survives iff $2 \ge 13 - X$, i.e. $X \ge 11$. So the smallest integer is **$X = 11$**, and the reported score is **17** after all 8 columns.

(c) A large $X$ makes every random seed extend a long way through unrelated sequence before giving up, and there are tens of millions of random seeds (Example 1). The extension cost would swamp the savings from seeding. $X$ trades recovery of alignments with deep internal dips against wasted extension of noise, and since random segments drift down at a steady rate ([1.4](01-04-smith-waterman-local-alignment.md)), a moderate $X$ throws out noise quickly.

</details>

## Flashback

**From Lesson 1.4 (Smith–Waterman & semi-global alignment):** Fit the whole of $x = $ `GTAC` into $y = $ `CGTTACA` (every letter of $x$ aligned, overhangs of $y$ free), using match $+1$, mismatch $-1$, gap $-2$. (a) State the boundary conditions and where you read the answer. (b) Give the best score and every optimal fitting alignment. (c) What does *local* alignment report instead, and why is that the wrong answer for this task?

<details>
<summary>Solution</summary>

*Accept criterion: score 2 with all three alignments.*

(a) First row $F(0,j) = 0$ (free leading overhang of $y$), first column $F(i,0) = -2i$ (every letter of $x$ must be paid for), answer $\max_j F(4,j)$ on the bottom row.

(b) The bottom row is $-8, -5, -5, -2, -1, 0, 2, 0$, so the best score is **2**, at $j = 6$. Three alignments achieve it:

```
- - G T A C -    - G - T A C -    - G T - A C -
C G T T A C A    C G T T A C A    C G T T A C A
```

(dashes above $y$'s overhangs are free). The first has three matches and a G/T mismatch: $3 - 1 = 2$. The other two have four matches and one gap: $4 - 2 = 2$.

(c) Local alignment reports `TAC` over `TAC` with score **3**, and drops the G. That's a higher score for a different question. The task says all of `GTAC` must be placed, and local alignment is free to trim ends that don't pay for themselves.

</details>

## Connections

- **Backward:** the neighbourhood threshold uses [1.2](01-02-substitution-matrices-log-odds.md)'s matrix; extension is [1.4](01-04-smith-waterman-local-alignment.md)'s local alignment restricted to a band, with [1.5](01-05-affine-gaps-gotoh.md)'s affine gaps; word length versus uniqueness is [1.1](01-01-sequences-alphabets-databases.md)'s $2G/4^k$.
- **Forward:** [1.7](01-07-alignment-statistics-e-values.md) turns an HSP score into an E-value; read mappers ([4.2](04-02-read-mapping-bwt-fm-index.md)) keep the seed-and-extend design but replace the lookup table with a compressed index of the whole genome; profile HMM search ([3.5](03-05-profile-hmms.md)) is what you reach for when BLAST's sensitivity isn't enough.
- **Sideways:** running a cheap filter first and expensive verification only on the survivors is the same design as answering a query through an index instead of a full scan ([databases](../../databases/syllabus.md)); seed clumping is why the probability of a long success run doesn't scale linearly with the number of windows, a Poisson-clumping effect beyond the independent-trials picture of [prob-stat-refresher 2.2](../../prob-stat-refresher/lessons/02-02-discrete-distributions.md).
