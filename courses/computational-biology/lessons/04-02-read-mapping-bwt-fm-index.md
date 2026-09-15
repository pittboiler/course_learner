# Computational Biology · Lesson 4.2: Read mapping — the BWT & FM-index

> ⏱ ~15 min · Module 4: Genomics — from reads to variants · Builds on: [4.1](04-01-sequencing-reads-and-errors.md) (reads and errors), [1.6](01-06-blast-seeded-heuristic-search.md) (seed and extend), [1.4](01-04-smith-waterman-local-alignment.md) (fitting alignment) · Unlocks: [4.4](04-04-variant-calling-genotype-likelihoods.md) (variant calling), [5.1](05-01-rna-seq-quantification-normalization.md) (counting reads per gene)

## Why this matters

A human resequencing run produces around a billion 150-base reads, each to be placed on a 3.1-billion-base reference. Even BLAST-style hashing ([1.6](01-06-blast-seeded-heuristic-search.md)) is too slow and too memory-hungry at that scale, and Smith–Waterman is out of the question.

The mappers that made population genomics possible — BWA and Bowtie among them — rest on a surprising idea from data compression. The **Burrows–Wheeler transform** rearranges the genome into a string that compresses well and, with a little auxiliary data, answers "where does this pattern occur?" in time proportional to the **pattern's** length, not the genome's. This lesson runs that search by hand on a toy genome, and then prices the index for a real one.

## The idea

**Step 1: sort all the suffixes.** Every occurrence of a pattern $P$ in text $T$ is the start of some suffix of $T$. Sort all suffixes alphabetically, and the suffixes beginning with $P$ form one **contiguous block**. Finding $P$ means finding that block's boundaries. This sorted list of starting positions is the **suffix array**. It works, but for the human genome it takes about 12 GB.

**Step 2: keep only one column.** Append a terminator `#` (sorting before every letter), write down every rotation of $T$, and sort them. The sorted rotations are the suffixes in order. The **last column** of that matrix, $L$, is the **Burrows–Wheeler transform**. It is a permutation of $T$, and it tends to put identical letters next to each other, so it compresses.

**Step 3: the magic property (LF-mapping).** The first column $F$ is just the letters of $T$ sorted, so it's determined by letter counts. And the $k$-th A in $L$ is the **same text position** as the $k$-th A in $F$. That lets you step from a row to the row of the rotation that starts one character earlier in the text, using only counts.

**Step 4: search backwards.** Match $P$ from its last letter to its first. Start with the block of rows beginning with the last letter. Each step prepends one letter, and the new block is computed from the old block's boundaries by LF-mapping. After $|P|$ steps, the block's size is the number of occurrences. With precomputed counts, each step is constant time.

Real mappers use this to find exact **seeds**, then extend each seed with a local alignment that tolerates errors ([1.4](01-04-smith-waterman-local-alignment.md)'s fitting alignment), exactly BLAST's seed-and-extend pattern with a much better index.

## The formal version

**Suffix array.** For $T$ ending in `#`, $\text{SA}[r]$ is the starting position of the $r$-th smallest suffix.

**Burrows–Wheeler transform.** $L[r] = T[\text{SA}[r] - 1]$ (with $T[-1] = $ `#`). This is the [Burrows–Wheeler transform](../reference.md#burrows-wheeler-transform). *In words: for each sorted suffix, the character just before it.*

**Counts.** $C[a]$ is the number of characters in $T$ smaller than $a$, and $\text{Occ}(a, i)$ is the number of occurrences of $a$ in $L[0..i-1]$.

**LF-mapping.** $\text{LF}(r) = C[L[r]] + \text{Occ}(L[r], r)$ is the row whose rotation starts one text position earlier than row $r$'s.

**Backward search** for $P = p_1 \ldots p_m$, over half-open row ranges $[\text{lo}, \text{hi})$:

$$\text{start: } \text{lo} = 0,\ \text{hi} = n$$

$$\text{for } a = p_m, p_{m-1}, \ldots, p_1:\quad \text{lo} \leftarrow C[a] + \text{Occ}(a, \text{lo}),\quad \text{hi} \leftarrow C[a] + \text{Occ}(a, \text{hi}).$$

The number of occurrences is $\text{hi} - \text{lo}$ (zero if the range empties), and their positions are $\text{SA}[\text{lo}..\text{hi}-1]$. This is [backward search](../reference.md#fm-index-backward-search). *In words: the block of rows starting with $aX$ consists of the rows starting with $a$ whose predecessor-row lies in the block for $X$ — and counting the $a$'s before each boundary tells you exactly where that is.*

**FM-index.** The BWT plus $C$, plus $\text{Occ}$ stored at checkpoints, plus a sampled suffix array for reporting positions. Time per pattern $O(m)$ to count occurrences, independent of genome length $n$.

**Mapping quality.** Mappers report $\text{MAPQ} = -10\log_{10}P(\text{mapped position is wrong})$. A read that aligns equally well to two places has $P(\text{wrong}) \approx \tfrac12$, so MAPQ is about 3. A unique, well-matching read gets MAPQ near 60.

## Picture

![The eight sorted rotations of GATTACA followed by the hash terminator, with row numbers 0 to 7 and suffix-array values 7, 6, 4, 1, 5, 0, 3, 2. The first column F reads hash, A, A, A, C, G, T, T and is outlined in blue. The last column L reads A, C, T, G, A, hash, T, A and is outlined in coral. On the right, brackets show backward search for ACA: A matches rows 1 to 3, CA matches row 4, and ACA matches row 2, whose suffix-array value 4 is where ACA starts in the text.](assets/04-02-fig1.svg)

$F$ (blue) is just sorted letters, and $L$ (coral) is the transform. Watch the brackets shrink from right to left. All rows starting with A (1–3); of those, the ones preceded by C, which lead to the row starting with CA (4); of that, the one preceded by A, which leads to the row starting with ACA (2). The algorithm never looks at the middle columns. They exist in this picture only to show why the answer is right.

## Worked examples

**Example 1 (mechanical): backward search in `GATTACA#`.** From the picture, $L = $ `ACTGA#TA`. Counting letters in $T$: one `#`, three A, one C, one G, two T, so $C[\#] = 0$, $C[A] = 1$, $C[C] = 4$, $C[G] = 5$, $C[T] = 6$.

The Occ values needed, counting in $L[0..i-1]$:

| $i$ | 0 | 1 | 4 | 5 | 8 |
|---|---|---|---|---|---|
| $\text{Occ}(A, i)$ | 0 | 1 | 1 | 2 | 3 |
| $\text{Occ}(C, i)$ | 0 | 0 | 1 | 1 | 1 |

Search for $P = $ `ACA`, last letter first:

1. $a = $ A: $\text{lo} = 1 + \text{Occ}(A, 0) = 1$, $\text{hi} = 1 + \text{Occ}(A, 8) = 4$. Rows $[1, 4)$ start with A.
2. $a = $ C: $\text{lo} = 4 + \text{Occ}(C, 1) = 4$, $\text{hi} = 4 + \text{Occ}(C, 4) = 5$. Row $[4, 5)$ starts with CA.
3. $a = $ A: $\text{lo} = 1 + \text{Occ}(A, 4) = 2$, $\text{hi} = 1 + \text{Occ}(A, 5) = 3$. Row $[2, 3)$ starts with ACA.

**One occurrence**, at $\text{SA}[2] = 4$: `GATT`**`ACA`**. Three steps for a three-letter pattern, whatever the genome's length.

**Example 2 (why you'd care): repeats, and what the index costs.** In $T = $ `ATTACATTAC#` the transform is $L = $ `CTTC#AATTAA`, with $C[A] = 1$, $C[C] = 5$, $C[T] = 7$. Search `ATT`:

1. T: $[7, 11)$.
2. T: $\text{lo} = 7 + \text{Occ}(T, 7) = 7 + 2 = 9$, $\text{hi} = 7 + \text{Occ}(T, 11) = 7 + 4 = 11$. Rows $[9, 11)$.
3. A: $\text{lo} = 1 + \text{Occ}(A, 9) = 1 + 2 = 3$, $\text{hi} = 1 + \text{Occ}(A, 11) = 1 + 4 = 5$. Rows $[3, 5)$.

**Two occurrences**, at positions 5 and 0: the text is `ATTAC` twice. A read made entirely of a repeat maps equally well to both copies, and the mapper can only report MAPQ ≈ 3. This is [4.1](04-01-sequencing-reads-and-errors.md)'s repeat problem showing up in mapping instead of assembly.

*Pricing a human index* ($n = 3.1\times10^9$):

| structure | per base | total |
|---|---|---|
| plain suffix array (4-byte integers) | 4 bytes | 12.4 GB |
| BWT, 2 bits per base | 0.25 byte | 0.78 GB |
| Occ checkpoints (4 counts every 64 bases) | 0.25 byte | 0.78 GB |
| suffix array sampled every 32 rows | 0.125 byte | 0.39 GB |

The FM-index needs about **2 GB**, a sixth of the suffix array, and it fits on a laptop.

## Watch out

- **You might search** the pattern left to right — **but actually** LF-mapping moves one character *earlier* in the text, so backward search prepends letters and must start from the pattern's **last** character.
- **You might think** the FM-index solves mapping with errors — **but actually** backward search finds exact matches. Mismatches are handled by searching exact seeds and extending with dynamic programming, or by backtracking over substitutions (which blows up with more than a couple of errors). That's why reads with many errors or indels are hard for short-read mappers.
- **You might treat** a mapped read as placed — **but actually** reads from repeats map equally well to several places. Low-MAPQ reads should be filtered or down-weighted before calling variants ([4.4](04-04-variant-calling-genotype-likelihoods.md)), or false variants appear wherever paralogous copies differ.

## One-liner

> The Burrows–Wheeler transform keeps the last column of the sorted rotations of the genome; with letter counts and LF-mapping, backward search finds every exact occurrence of a read's seed in time set by the seed's length, in about 2 GB for a human genome.

## Problems

**P1 (🟢)** Compute the Burrows–Wheeler transform of `CATTAG#`: list the sorted rotations, the suffix array and $L$.

**P2 (🟡)** Using your transform from P1 ($L = $ `GTC#ATA`), (a) give the $C$ table; (b) run backward search for `ATT`, showing each range, and report the number of occurrences and their text positions; (c) run backward search for `TAC` and show where it stops.

**P3 (🔴)** (a) Invert the transform $L = $ `GC#AAAC` to recover the text, using LF-mapping from the row that begins with `#`. (b) A read aligns perfectly at three places in a genome and nowhere else. Estimate its MAPQ. (c) Its best alignment is unique, but the second-best has only one more mismatch, at a Q30 base. Roughly how does that change the picture, and why do mappers look at the second-best hit at all?

<details>
<summary>Solutions</summary>

**P1**

| row | rotation | SA |
|---|---|---|
| 0 | `#CATTAG` | 6 |
| 1 | `AG#CATT` | 4 |
| 2 | `ATTAG#C` | 1 |
| 3 | `CATTAG#` | 0 |
| 4 | `G#CATTA` | 5 |
| 5 | `TAG#CAT` | 3 |
| 6 | `TTAG#CA` | 2 |

$L$ is the last column: **`GTC#ATA`**. Check $L[r] = T[\text{SA}[r] - 1]$: row 1 has SA 4 and $T[3] = $ T.

**P2** (a) $T$ has one `#`, two A, one C, one G, two T: $C[\#] = 0$, $C[A] = 1$, $C[C] = 3$, $C[G] = 4$, $C[T] = 5$.

(b) $L = $ G T C `#` A T A, indexed 0–6.
1. T: $[5, 7)$.
2. T: $\text{lo} = 5 + \text{Occ}(T, 5) = 5 + 1 = 6$; $\text{hi} = 5 + \text{Occ}(T, 7) = 5 + 2 = 7$. $[6, 7)$.
3. A: $\text{lo} = 1 + \text{Occ}(A, 6) = 1 + 1 = 2$; $\text{hi} = 1 + \text{Occ}(A, 7) = 1 + 2 = 3$. $[2, 3)$.

**One occurrence**, at $\text{SA}[2] = 1$: `C`**`ATT`**`AG`.

(c) 1. C: $[3, 4)$. 2. A: $\text{lo} = 1 + \text{Occ}(A, 3) = 1 + 0 = 1$; $\text{hi} = 1 + \text{Occ}(A, 4) = 1 + 0 = 1$. The range $[1, 1)$ is **empty**: no text position has A followed by C, so the search stops with 0 occurrences without looking at T.

**P3** (a) $L$ = G C `#` A A A C (rows 0–6). Counts in the text: one `#`, three A, two C, one G, so $C[\#] = 0$, $C[A] = 1$, $C[C] = 4$, $C[G] = 6$. Start at row 0, whose rotation begins with `#`; $L[0]$ is the character before `#`, the last letter of the text.

| row $r$ | $L[r]$ | $\text{LF}(r) = C[L[r]] + \text{Occ}(L[r], r)$ |
|---|---|---|
| 0 | G | $6 + 0 = 6$ |
| 6 | C | $4 + 1 = 5$ |
| 5 | A | $1 + 2 = 3$ |
| 3 | A | $1 + 0 = 1$ |
| 1 | C | $4 + 0 = 4$ |
| 4 | A | $1 + 1 = 2$ |
| 2 | `#` | stop |

Characters collected: G, C, A, A, C, A. They were read from the end of the text backwards, so reverse them: **`ACAACG#`**.

(b) Three equally good placements give $P(\text{wrong}) \approx 2/3$, so $\text{MAPQ} = -10\log_{10}(2/3) \approx \mathbf{1.8}$, reported as 1 or 2. Effectively unplaceable.

(c) The next-best hit differs by one Q30 mismatch, so it is less likely by a factor of roughly 1,000 (the probability that the base was misread). $P(\text{wrong}) \approx 1/1001$, giving MAPQ about 30. Mappers look at the second-best hit because MAPQ is about *distinguishability*: a perfect match next to an almost-perfect one elsewhere is much less certain than a perfect match with no competitor.

</details>

## Flashback

**From Lesson 3.6 (Gene finding):** A predicted gene starts at ATG and has four exons with 52, 97, 120 and 89 coding bases. (a) Give the phase of each of the three introns. (b) At which codon position does the third exon begin? (c) Is the model valid? If not, what is the smallest change to the last exon's length that fixes it?

<details>
<summary>Solution</summary>

(a) Cumulative coding bases before each intron: 52, 149, 269. Phases: $52 \bmod 3 = \mathbf{1}$, $149 \bmod 3 = \mathbf{2}$, $269 \bmod 3 = \mathbf{2}$.

(b) Intron 2 has phase 2: exon 2 ended two bases into a codon, so exon 3 **begins at codon position 3**, finishing that codon with its first base.

(c) Total $52 + 97 + 120 + 89 = 358$, and $358 \bmod 3 = 1$: **not valid**. Shortening the last exon by 1 base (to 88, total 357) or lengthening it by 2 (to 91, total 360) restores a whole number of codons. Either way the new end must be a stop codon in frame, with no earlier in-frame stop.

</details>

## Connections

- **Backward:** seed-and-extend is [1.6](01-06-blast-seeded-heuristic-search.md)'s design; the extension is [1.4](01-04-smith-waterman-local-alignment.md)'s fitting alignment; the reads and their repeat problem are [4.1](04-01-sequencing-reads-and-errors.md)'s.
- **Forward:** mapped reads stacked at each reference position form the pileups of [4.4](04-04-variant-calling-genotype-likelihoods.md); counts of reads per gene are the raw data of [5.1](05-01-rna-seq-quantification-normalization.md).
- **Sideways:** the BWT is the core of the `bzip2` compressor, where runs of identical letters in $L$ are what compression exploits; suffix sorting is the same sorting problem as [algorithms 1.4](../../algorithms/lessons/01-04-sorting-and-the-comparison-lower-bound.md), with specialized linear-time algorithms because suffixes share structure.
