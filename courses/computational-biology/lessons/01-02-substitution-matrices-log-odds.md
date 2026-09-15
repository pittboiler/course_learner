# Computational Biology · Lesson 1.2: Substitution matrices as log-odds

> ⏱ ~15 min · Module 1: Sequence alignment & database search · Builds on: [1.1](01-01-sequences-alphabets-databases.md) (chance matches), [algorithms 2.6](../../algorithms/lessons/02-06-dp-on-sequences-lcs-and-edit-distance.md) (edit distance) · Unlocks: [1.3](01-03-needleman-wunsch-global-alignment.md) (global alignment)

## Why this matters

Edit distance ([algorithms 2.6](../../algorithms/lessons/02-06-dp-on-sequences-lcs-and-edit-distance.md)) charges 1 for every substitution. For proteins that's badly wrong. Swapping leucine for isoleucine barely changes a protein — both are greasy and about the same size. Swapping tryptophan for glycine usually wrecks the fold. A useful score has to know the difference.

It also has to *mean* something. The scoring matrices every aligner uses — BLOSUM62 is the default in BLAST — aren't hand-tuned tables. Each entry is a **log-likelihood ratio**: how much more likely this pair is in real homologs than by chance. Because the entries are logs, adding them along an alignment multiplies the likelihood ratios. So an alignment score is a statistical statement, and [1.7](01-07-alignment-statistics-e-values.md) can turn it into a p-value.

## The idea

Imagine two stories for an aligned pair of residues $a$ over $b$:

- **Related (R):** the two sequences share an ancestor, so $a$ and $b$ were once the same residue. Pairs turn up with *target frequencies* $q_{ab}$, measured from trusted alignments of real homologs.
- **Unrelated (U):** the residues were drawn independently, so the pair turns up with probability $p_a p_b$, where $p_a$ is how common $a$ is overall.

The score is the log of how much better R explains the pair than U. A positive score means "this pairing is more common in homologs than chance predicts". Negative means less common.

Two consequences fall straight out, and they're why BLOSUM62 looks the way it does:

1. **Matching a rare residue is worth more than matching a common one.** Tryptophan is rare. Chance almost never puts W over W, so seeing it is strong evidence. Leucine is everywhere, so L over L happens by chance all the time.
2. **Chemically similar pairs score positive even though they're mismatches.** Homologs swap I and L so often that the pair beats chance.

## The formal version

**Log-odds score.** For residues $a, b$ with target frequency $q_{ab}$ (the frequency of the ordered pair $a$-over-$b$ in aligned homologs) and background frequencies $p_a, p_b$:

$$s(a,b) = \frac{1}{\lambda}\,\log \frac{q_{ab}}{p_a\,p_b}.$$

*In words: the log of "how much likelier under relatedness than under chance", in units set by $\lambda$.* This is the [log-odds score](../reference.md#log-odds-score). With $\lambda = \ln 2$ the unit is bits; with $\lambda = \tfrac{\ln 2}{2}$ it's **half-bits**, the unit BLOSUM62 is nominally written in (then rounded to integers).

**Scores add because likelihoods multiply.** For an ungapped alignment of $x_1\cdots x_n$ with $y_1\cdots y_n$, treating positions as independent,

$$S = \sum_{i=1}^n s(x_i,y_i) = \frac{1}{\lambda}\log \prod_{i=1}^{n}\frac{q_{x_iy_i}}{p_{x_i}p_{y_i}} = \frac{1}{\lambda}\log\frac{P(x,y \mid R)}{P(x,y\mid U)}.$$

*In words: an alignment score is the log-likelihood ratio of "related" against "unrelated" for the whole alignment.*

**The expected score under chance is negative.** Averaging $s$ over random pairs,

$$\mathbb{E}_{U}[s] = \frac{1}{\lambda}\sum_{a,b} p_a p_b \log\frac{q_{ab}}{p_ap_b} = -\frac{1}{\lambda}\, D\big(p\otimes p \,\big\|\, q\big) \le 0,$$

where $D$ is relative entropy (KL divergence, [information-theory 1.4](../../information-theory/lessons/01-04-relative-entropy-kl-jensen.md)). *In words: random pairs lose points on average, and they lose more the more the matrix can tell homologs from noise.* This [expected score](../reference.md#expected-score) condition is not decoration. [1.4](01-04-smith-waterman-local-alignment.md) needs it, or local alignment degenerates into aligning everything.

**The two matrix families.**

- **[BLOSUM matrices](../reference.md#blosum-matrices)** (Henikoff & Henikoff, 1992) count pairs directly in ungapped *blocks* of conserved protein regions. Sequences more than $X$ percent identical are first merged into clusters, so near-duplicates don't dominate. That gives BLOSUM$X$. **Lower $X$ = built from more distant relatives = better for distant searches.**
- **[PAM matrices](../reference.md#pam-matrices)** (Dayhoff, 1978) estimate a one-step substitution matrix $M$ from very close relatives, with 1 accepted change per 100 residues. They then extrapolate by matrix powers: $\text{PAM}n$ uses $M^n$. **Higher $n$ = more distant.** Rough equivalences: PAM250 ≈ BLOSUM45, PAM160 ≈ BLOSUM62.

The PAM extrapolation is a Markov chain — the same object [2.5](02-05-substitution-models.md) uses to derive Jukes–Cantor. To see what "250 PAMs" means, take a toy DNA version where each base changes with probability $0.01$ per step, uniformly to the other three. After $n$ steps the probability a base still matches its ancestor is

$$\tfrac14 + \tfrac34\left(1 - \tfrac{4}{3}(0.01)\right)^{n}:$$

$$n = 100 \to 0.446, \quad n = 250 \to 0.276, \quad n = 500 \to 0.251.$$

At 250 PAMs, 250 substitutions per 100 sites, the toy sequences are barely above the 25 percent chance floor. Most sites have changed more than once.

## Picture

![An eleven by eleven grid of BLOSUM62 scores for the residues C, W, I, L, V, M, K, R, D, E and G, with positive scores in blue, negative in coral and the diagonal highlighted. The diagonal ranges from 11 for W and 9 for C down to 4 for I, L and V. Positive off-diagonal blocks appear among the hydrophobic residues I, L, V, M, between K and R, and between D and E.](assets/01-02-fig1.svg)

Read the diagonal first. It isn't constant — W-W is 11, C-C is 9, and the common hydrophobics sit at 4 or 5. That is consequence 1: the rarer the residue, the more a match is worth. Then look at the blue blocks off the diagonal. They trace chemistry: I/L/V/M, K/R, D/E. These pairs are mismatches in edit-distance terms and *evidence of homology* in log-odds terms. The coral everywhere else is the negative expected score made visible.

## Worked examples

**Example 1 (mechanical): build a matrix from a block.** Four aligned sequences over a three-letter alphabet:

```
WLIL
WLIL
WLLL
WILW
```

*Count ordered pairs column by column.* A column of 4 sequences has $4 \times 3 = 12$ ordered pairs. Column 1 (`WWWW`) gives 12 W/W. Column 2 (`LLLI`) gives 6 L/L, 3 L/I and 3 I/L. Column 3 (`IILL`) gives 2 I/I, 2 L/L, 4 I/L and 4 L/I. Column 4 (`LLLW`) gives 6 L/L, 3 L/W and 3 W/L. Total: 48 pairs.

| pair | count | $q_{ab}$ |
|---|---|---|
| W/W | 12 | 0.2500 |
| L/L | 14 | 0.2917 |
| I/I | 2 | 0.0417 |
| L/I and I/L | 7 each | 0.1458 each |
| L/W and W/L | 3 each | 0.0625 each |

*Background frequencies* are the row sums of $q$: $p_W = 0.25 + 0.0625 = 0.3125$, $p_L = 0.2917 + 0.1458 + 0.0625 = 0.5$, $p_I = 0.0417 + 0.1458 = 0.1875$.

*Scores in half-bits,* $s = 2\log_2\big(q_{ab}/(p_ap_b)\big)$:

| pair | $q_{ab}/(p_ap_b)$ | $s$ | rounded |
|---|---|---|---|
| W/W | $0.25/0.0977 = 2.56$ | 2.71 | **3** |
| L/I | $0.1458/0.0938 = 1.56$ | 1.27 | **1** |
| L/L | $0.2917/0.25 = 1.17$ | 0.45 | **0** |
| I/I | $0.0417/0.0352 = 1.19$ | 0.49 | **0** |
| L/W | $0.0625/0.1563 = 0.40$ | −2.64 | **−3** |
| I/W | $0/\ldots$ | $-\infty$ | needs a pseudocount |

Notice that L/I outscores L/L. In this tiny block I and L swap so freely that *mismatching* them is better evidence than matching the common L. Also notice the I/W entry: never observed, so its score is $-\infty$. Real matrix construction adds pseudocounts so that a pair unseen in the training blocks isn't declared impossible.

**Example 2 (why you'd care): what a score says.** Score the ungapped protein match

```
P W H E A G
P W Y E S G
```

with BLOSUM62: $7 + 11 + 2 + 5 + 1 + 6 = 32$ half-bits $= 16$ bits. As a likelihood ratio, the "related" story explains this pairing $2^{16} \approx 65{,}000$ times better than chance (nominally — rounding the matrix to integers shifts the true unit slightly; [1.7](01-07-alignment-statistics-e-values.md) handles that exactly). Two of the six columns are mismatches, H/Y and A/S, and both *add* to the score, because they're conservative swaps. An identity count would call this 67 percent identical and stop there; the log-odds score says how surprising it is.

But one short segment scoring 16 bits isn't yet evidence of homology. A database search tries billions of segment pairs. [1.7](01-07-alignment-statistics-e-values.md) shows that the score has to be judged against the size of the search.

## Watch out

- **You might think** the diagonal of a substitution matrix is constant, like identity scoring — **but actually** it tracks rarity. In BLOSUM62 W-W = 11 but L-L = 4, because a match of a common residue is weaker evidence.
- **You might think** a higher BLOSUM number means "for more distant proteins", like PAM — **but actually** the two scales run in opposite directions. BLOSUM80 is for close relatives and BLOSUM45 for distant ones; PAM30 is for close relatives and PAM250 for distant ones.
- **You might compute** the off-diagonal expected frequency as $p_ap_b$ when your counts are *unordered* pairs — **but actually** an unordered pair {a,b} with $a \ne b$ has chance probability $2p_ap_b$. Mixing conventions shifts every off-diagonal score by exactly 1 bit. Pick ordered pairs throughout (as here), or use $2p_ap_b$ with unordered counts.

## One-liner

> A substitution score is a log-likelihood ratio — homologs against chance — so rare matches and conservative swaps score high, random pairs score negative on average, and an alignment's total score is the log-odds that the two sequences are related.

## Problems

**P1 (🟢)** From a large set of trusted alignments: $p_W = 0.013$ and the W/W target frequency is $q_{WW} = 0.0065$; $p_L = 0.10$, $p_I = 0.05$, and the ordered-pair frequency is $q_{LI} = 0.0085$. Compute $s(W,W)$ and $s(L,I)$ in half-bits, rounded to the nearest integer.

**P2 (🟡)** A query segment `KWDL` has two candidate ungapped matches in a database: `RWEI` and `KGDL`. Using BLOSUM62 (K-R = 2, W-W = 11, D-E = 2, L-I = 2, K-K = 5, W-G = −2, D-D = 6, L-L = 4): (a) score both; (b) count identities in each; (c) explain the disagreement in one sentence.

**P3 (🔴)** A two-letter alphabet has $p_A = p_B = 0.5$ and target frequencies $q_{AA} = q_{BB} = 0.4$, $q_{AB} = q_{BA} = 0.1$. (a) Give $s(A,A)$ and $s(A,B)$ in bits. (b) Compute the expected score per position for *unrelated* sequences, and check it equals $-D(p\otimes p\,\|\,q)$. (c) Compute the expected score per position for *related* sequences (drawn from $q$). (d) Roughly how long must a related, ungapped alignment be before its expected score reaches 30 bits?

<details>
<summary>Solutions</summary>

**P1** $s(W,W) = 2\log_2\dfrac{0.0065}{0.013^2} = 2\log_2\dfrac{0.0065}{0.000169} = 2\log_2(38.5) = 2(5.27) = 10.53 \to \mathbf{11}$ (matching BLOSUM62's W-W).

$s(L,I) = 2\log_2\dfrac{0.0085}{0.10 \times 0.05} = 2\log_2(1.7) = 2(0.766) = 1.53 \to \mathbf{2}$ (matching BLOSUM62's L-I).

**P2** (a) `KWDL`/`RWEI`: $2 + 11 + 2 + 2 = \mathbf{17}$. `KWDL`/`KGDL`: $5 + (-2) + 6 + 4 = \mathbf{13}$.

(b) `RWEI` shares **1** identity (W); `KGDL` shares **3** (K, D, L).

(c) The three identities in `KGDL` come at the cost of losing the rare, heavily weighted tryptophan, while `RWEI` keeps W and makes three conservative swaps (K/R, D/E, L/I) that each count as evidence — so the log-odds score prefers the match with fewer identities.

**P3** (a) $s(A,A) = \log_2(0.4/0.25) = \log_2 1.6 = \mathbf{0.678}$ bits. $s(A,B) = \log_2(0.1/0.25) = \log_2 0.4 = \mathbf{-1.322}$ bits.

(b) Unrelated pairs match with probability 0.5, so $\mathbb{E}_U[s] = 0.5(0.678) + 0.5(-1.322) = \mathbf{-0.322}$ bits. Check: $D(p\otimes p\,\|\,q) = \sum p_ap_b\log_2\frac{p_ap_b}{q_{ab}} = 2(0.25)\log_2\frac{0.25}{0.4} + 2(0.25)\log_2\frac{0.25}{0.1} = 0.5(-0.678) + 0.5(1.322) = 0.322$. So $\mathbb{E}_U[s] = -D$, as the formal section says.

(c) Related pairs match with probability $0.8$: $\mathbb{E}_R[s] = 0.8(0.678) + 0.2(-1.322) = 0.542 - 0.264 = \mathbf{0.278}$ bits per position. This is $D(q\,\|\,p\otimes p)$, the matrix's **relative entropy** — the average evidence each aligned position contributes.

(d) $30/0.278 \approx \mathbf{108}$ positions. A weak matrix like this one needs about a hundred aligned positions for 30 bits. BLOSUM62 carries about 0.6 bits per position, so it needs about 50. That's why short segments can't establish homology on their own.

</details>

## Connections

- **Backward:** [algorithms 2.6](../../algorithms/lessons/02-06-dp-on-sequences-lcs-and-edit-distance.md)'s unit substitution cost is the special case of a matrix with one value on the diagonal and one off it; chance identity $\sum p_a^2$ from [1.1](01-01-sequences-alphabets-databases.md) is exactly the probability mass of the diagonal under $U$.
- **Forward:** [1.3](01-03-needleman-wunsch-global-alignment.md)–[1.5](01-05-affine-gaps-gotoh.md) maximize sums of these scores; [1.7](01-07-alignment-statistics-e-values.md) finds the exact scale $\lambda$ of a rounded integer matrix; PAM's matrix powers become the continuous-time models of [2.5](02-05-substitution-models.md); the likelihood-ratio reading returns as the CpG-island discriminator in [3.1](03-01-markov-chains-to-hmms.md).
- **Sideways:** the expected score is a negative KL divergence and the per-position evidence is a positive one ([information-theory 1.4](../../information-theory/lessons/01-04-relative-entropy-kl-jensen.md)); summing log-likelihood ratios until evidence accumulates is the same arithmetic as the LOD score in linkage mapping ([genetics 4.2](../../genetics/lessons/04-02-response-to-selection-qtl.md)).
