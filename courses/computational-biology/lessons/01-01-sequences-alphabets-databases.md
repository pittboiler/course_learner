# Computational Biology · Lesson 1.1: Sequences, alphabets & databases

> ⏱ ~15 min · Module 1: Sequence alignment & database search · Builds on: [general-biology 3.3](../../general-biology/lessons/03-03-dna-structure-replication.md) (antiparallel strands), [general-biology 3.4](../../general-biology/lessons/03-04-central-dogma.md) (the genetic code) · Unlocks: [1.2](01-02-substitution-matrices-log-odds.md) (scoring similarity)

## Why this matters

Every algorithm in this course takes strings as input. Before we align, search, assemble or decode anything, we need to be precise about **which** string a stretch of DNA actually is — because one double helix is two strings, and it encodes six different protein readings. Get that wrong and a perfectly good search returns nothing.

The second job of this lesson is a warning about vocabulary that the whole field depends on. Two sequences can be **similar** (a measurement) or **homologous** (a historical claim). Alignment scores measure the first; biology wants the second. Everything in Module 1 is machinery for deciding when the first licenses the second.

## The idea

**A sequence is a string over a small alphabet.** DNA uses four letters, RNA swaps T for U, and proteins use twenty amino acids. The algorithms don't care about chemistry. They care about alphabet size, because that sets how often letters match by chance.

**DNA has two strands that run in opposite directions.** Each strand is written 5′ to 3′, the direction polymerases read it. The partner strand pairs A–T and C–G but runs the other way. To write the partner as a proper 5′→3′ string, you **complement every base and reverse the order**. A database stores one strand, and your gene might sit on the other one.

**Translation reads non-overlapping triplets, so where you start matters.** A strand can be cut into codons starting at position 1, 2 or 3. Do that on both strands and you get **six reading frames**. Usually only one of them encodes the real protein; the other five are mostly gibberish punctuated by stop codons.

**Similarity is not homology.** Homology means "descended from a common ancestor". It's yes-or-no, like pregnancy — two genes are not "40 percent homologous". Similarity is a number you compute. High similarity over a long stretch is strong evidence of homology, because chance can't produce it. Low similarity proves nothing either way, because homologs drift apart. This lesson ends by working out how much similarity chance alone produces.

## The formal version

**Alphabets and sequences.** Let $\Sigma$ be a finite alphabet: $\Sigma_{\text{DNA}} = \{A, C, G, T\}$ ($|\Sigma| = 4$) or $\Sigma_{\text{prot}}$, the 20 amino acids. A sequence of length $n$ is $x = x_1 x_2 \cdots x_n$ with each $x_i \in \Sigma$.

**Reverse complement.** Define the complement map $c: A \leftrightarrow T,\ C \leftrightarrow G$. The [reverse complement](../reference.md#reverse-complement) of $x$ is

$$\operatorname{rc}(x) = c(x_n)\, c(x_{n-1}) \cdots c(x_1).$$

*In words: the other strand, written in its own 5′→3′ direction.* Note $\operatorname{rc}(\operatorname{rc}(x)) = x$.

**Reading frames.** The [reading frame](../reference.md#reading-frame) $+f$ (for $f = 1,2,3$) groups $x$ into codons $x_f x_{f+1} x_{f+2},\ x_{f+3}x_{f+4}x_{f+5}, \dots$; frame $-f$ does the same to $\operatorname{rc}(x)$. The genetic code maps each of the $4^3 = 64$ codons to one of 20 amino acids or to **stop** (TAA, TAG, TGA — written `*`). An **open reading frame (ORF)** is a run of codons with no stop.

**Chance matches.** If letters are drawn independently with frequencies $p_a$, two random letters are identical with probability

$$P(\text{match}) = \sum_{a \in \Sigma} p_a^2 .$$

*In words: pick a letter, then the chance the other sequence picked the same one, summed over letters.* Uniform DNA gives $4 \times \tfrac{1}{16} = 0.25$. Real amino-acid frequencies give about $0.058$.

**Expected k-mer count.** A **k-mer** is a length-$k$ substring. In a random genome of length $G$ with uniform bases, a specific k-mer is expected to occur

$$\mathbb{E}[\text{occurrences}] = \frac{2(G - k + 1)}{4^k} \approx \frac{2G}{4^k}$$

times, counting both strands. *In words: there are about $G$ starting positions per strand, and each one matches with probability $4^{-k}$.* This [expected k-mer count](../reference.md#expected-k-mer-count) sets how long a probe or seed must be before it's likely unique. You'll use it constantly in BLAST (1.6), read mapping (4.2) and assembly (4.3).

**Where sequences live.** Files come in [FASTA format](../reference.md#fasta-format): a header line starting with `>`, then the sequence on one or more lines. Read files add quality scores in FASTQ ([4.1](04-01-sequencing-reads-and-errors.md)). The big archives:

| Database | Holds | Note |
|---|---|---|
| GenBank / ENA / DDBJ | all submitted nucleotide sequence | redundant, unreviewed |
| RefSeq | curated, non-redundant genomes, transcripts, proteins | the usual reference |
| UniProtKB/Swiss-Prot | manually reviewed proteins | about half a million entries |
| UniProtKB/TrEMBL | automatically annotated proteins | hundreds of millions |
| PDB | experimentally solved 3D structures | the source for [5.4](05-04-protein-structure-prediction-alphafold.md) |
| Pfam | protein families as profile HMMs | built in [3.5](03-05-profile-hmms.md) |

## Picture

![Eighteen bases of double-stranded DNA with the top strand running five-prime to three-prime left to right and the complementary strand below running the opposite way. Three forward reading frames are bracketed above, translating to MKRIST, a frame starting with a stop, and ETH stop H. Three reverse frames are bracketed below and read right to left, translating to GANAFH, VLMRF and a frame containing a stop.](assets/01-01-fig1.svg)

Two things to read off the figure. First, the bottom strand's letters sit under their partners, but **its protein readings run right to left**, because the bottom strand's 5′ end is on the right. Second, three of the six frames (+1, −1, −2) have no stop codon in this 18-base window. So "no stop" in a short window tells you almost nothing about which frame is real. Example 2 says how long a window has to be before it does.

## Worked examples

**Example 1 (mechanical): six-frame translation.** Take $x = $ 5′-`ATGAAACGCATTAGCACC`-3′, the sequence in the picture.

*Reverse complement.* Complement each base: `TACTTTGCGTAATCGTGG`. Then reverse: $\operatorname{rc}(x) = $ `GGTGCTAATGCGTTTCAT`.

*Forward frames.*

| Frame | Codons | Protein |
|---|---|---|
| +1 | ATG AAA CGC ATT AGC ACC | M K R I S T |
| +2 | TGA AAC GCA TTA GCA (CC) | \* N A L A |
| +3 | GAA ACG CAT TAG CAC (C) | E T H \* H |

*Reverse frames* (codons taken from $\operatorname{rc}(x)$):

| Frame | Codons | Protein |
|---|---|---|
| −1 | GGT GCT AAT GCG TTT CAT | G A N A F H |
| −2 | GTG CTA ATG CGT TTC (AT) | V L M R F |
| −3 | TGC TAA TGC GTT TCA (T) | C \* C V S |

Frame +1 starts with ATG (methionine, the usual start codon) and runs open. That fits a real gene start, but frames −1 and −2 are open too. A leftover one or two bases at the end simply doesn't make a codon.

**Example 2 (why you'd care): how long must an ORF be to mean something?** In random DNA with uniform bases, 3 of the 64 codons are stops, so each codon is a non-stop with probability $61/64$. A particular stop-free run survives 100 codons with probability

$$\left(\tfrac{61}{64}\right)^{100} = e^{100\ln(0.953125)} \approx 0.0082 .$$

That sounds rare. Now count opportunities. A 1 Mb random sequence has 6 frames, each about $10^6/3$ codons long. A new stop-free run begins after each stop, and stops occur at a rate of $3/64$ per codon, so

$$\mathbb{E}[\text{ORFs} \ge 100 \text{ codons}] \approx 6 \times \frac{10^6}{3} \times \frac{3}{64} \times 0.0082 \approx 770 .$$

*E. coli* packs roughly 930 genes into each megabase. **Random sequence produces nearly as many 100-codon ORFs as there are real genes**, so ORF length alone is a terrible gene finder at that threshold. Raise the bar to 300 codons: $(61/64)^{300} \approx 5.6\times10^{-7}$, and the random count falls to about $0.05$ per Mb. But plenty of real proteins are shorter than 300 residues. The fix, codon-usage statistics inside an HMM, is [3.6](03-06-gene-finding.md).

**The same logic tells you why we search with proteins.** Two unrelated DNA sequences agree at about 25 percent of aligned positions by chance. Unrelated proteins agree at only about 6 percent. The 20-letter alphabet makes chance agreement four times rarer. Many DNA differences are also *synonymous* (they don't change the amino acid), so they add noise without adding evolutionary signal. That's why distant homologs are found by comparing proteins. The rule of thumb: above about 30 percent identity over 100+ residues, protein homology is near-certain; the "twilight zone" is 20–30 percent.

## Watch out

- **You might think** the reverse strand is just the complement, read left to right — **but actually** you must also *reverse* it. The complement alone runs 3′→5′. Translating it gives a protein no ribosome makes, and searching with it finds nothing.
- **You might say** two sequences are "70 percent homologous" — **but actually** homology is a yes-or-no statement about ancestry. Say "70 percent identical", and treat that as *evidence* for homology whose strength depends on alignment length and alphabet ([1.7](01-07-alignment-statistics-e-values.md) makes it quantitative).
- **You might think** a uniform-base calculation is conservative — **but actually** real genomes are full of repeats and skewed composition. A k-mer that "should" be unique by $2G/4^k$ can occur thousands of times if it lies in a transposon. Treat the formula as a best case.

## One-liner

> DNA is two antiparallel strings and six reading frames, and chance produces a lot of similarity — 25 percent identity and hundreds of long ORFs per megabase — so similarity only becomes evidence once you know what chance would give.

## Problems

**P1 (🟢)** For $x = $ 5′-`ATGTGCTTAGAACGCTAA`-3′: (a) give $\operatorname{rc}(x)$; (b) translate frames +1 and −1; (c) which of the two frames is open (no internal stop), if either?

**P2 (🟡)** Using the both-strands expected count $2G/4^k$ with uniform bases: (a) find the smallest $k$ for which a given k-mer is expected fewer than $0.01$ times in the human genome ($G = 3.1\times10^9$); (b) do the same for *E. coli* ($G = 4.6\times10^6$); (c) give one reason the real human answer is worse than your estimate.

**P3 (🔴)** A genome has GC content 60 percent (so $p_G = p_C = 0.3$ and $p_A = p_T = 0.2$). (a) What fraction of aligned positions do two unrelated sequences from it share by chance? (b) Stop codons TAA, TAG and TGA are AT-rich. Compute the probability that a random codon is a stop in this genome and compare it with $3/64$. (c) Qualitatively, are long random ORFs more or less common here than in uniform DNA?

<details>
<summary>Solutions</summary>

**P1** (a) Complement: `TACACGAATCTTGCGATT`; reverse: $\operatorname{rc}(x) = $ `TTAGCGTTCTAAGCACAT`.

(b) Frame +1: ATG TGC TTA GAA CGC TAA → **M C L E R \***. Frame −1 (from $\operatorname{rc}(x)$): TTA GCG TTC TAA GCA CAT → **L A F \* A H**.

(c) Frame +1 is open from ATG to the stop that ends it — a complete miniature ORF. Frame −1 has an internal stop (TAA at codon 4), so it isn't open.

**P2** (a) Need $2(3.1\times10^9)/4^k < 0.01$, i.e. $4^k > 6.2\times10^{11}$. Try values: $k = 19$ gives $6.2\times10^9/2.75\times10^{11} = 0.023$, and $k = 20$ gives $6.2\times10^9/1.10\times10^{12} = 0.0056$. **$k = 20$.**

(b) Need $4^k > 9.2\times10^{8}$. $k = 14$ gives $9.2\times10^6/2.68\times10^8 = 0.034$, and $k = 15$ gives $9.2\times10^6/1.07\times10^9 = 0.0086$. **$k = 15$.**

(c) About half the human genome is repeats — transposons like Alu, present in about a million copies — plus segmental duplications. A 20-mer inside an Alu element occurs hundreds of thousands of times, however large $4^{20}$ is. (Skewed base composition and CpG depletion also break the uniform assumption.) This is why read mappers report *mapping quality* ([4.2](04-02-read-mapping-bwt-fm-index.md)): uniqueness is a property of the actual genome, not of $k$.

**P3** (a) $\sum p_a^2 = 0.3^2 + 0.3^2 + 0.2^2 + 0.2^2 = 0.09 + 0.09 + 0.04 + 0.04 = \mathbf{0.26}$. Skewed composition raises chance identity slightly above 0.25.

(b) $P(\text{TAA}) = 0.2^3 = 0.008$, $P(\text{TAG}) = 0.2\cdot0.2\cdot0.3 = 0.012$, $P(\text{TGA}) = 0.012$. Total $= \mathbf{0.032}$, against $3/64 = 0.0469$ for uniform DNA — about a third fewer stops.

(c) **More common.** With fewer stops, stop-free runs last longer: a run survives 100 codons with probability $0.968^{100} \approx 0.039$, against $0.0082$ for uniform DNA. That's why ORF length is an even weaker gene signal in GC-rich genomes such as *Streptomyces* — spurious long ORFs, often on the opposite strand of real genes, are everywhere.

</details>

## Connections

- **Backward:** antiparallel strands are [general-biology 3.3](../../general-biology/lessons/03-03-dna-structure-replication.md); the 64-codon code and start/stop codons are [general-biology 3.4](../../general-biology/lessons/03-04-central-dogma.md).
- **Forward:** [1.2](01-02-substitution-matrices-log-odds.md) replaces "identical or not" with a graded, statistically meaningful score; the expected k-mer count reappears as BLAST's word size ([1.6](01-06-blast-seeded-heuristic-search.md)), as seed uniqueness in read mapping ([4.2](04-02-read-mapping-bwt-fm-index.md)), and as the choice of $k$ in assembly ([4.3](04-03-genome-assembly-de-bruijn.md)); the ORF statistics in Example 2 are why [3.6](03-06-gene-finding.md) needs a probabilistic model.
- **Sideways:** the length of a random stop-free run is a geometric waiting time — "trials until the first success", with a stop codon as the success ([prob-stat-refresher 2.2](../../prob-stat-refresher/lessons/02-02-discrete-distributions.md)) — and "how often does chance produce a pattern this long" is the seed of the multiple-testing problem that [5.2](05-02-differential-expression-multiple-testing.md) confronts head-on.
