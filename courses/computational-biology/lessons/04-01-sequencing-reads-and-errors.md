# Computational Biology · Lesson 4.1: Sequencing reads & their errors

> ⏱ ~15 min · Module 4: Genomics — from reads to variants · Builds on: [genetics 3.6](../../genetics/lessons/03-06-reading-editing-genes.md) (coverage $C = NL/G$, zero-coverage $e^{-C}$), [1.1](01-01-sequences-alphabets-databases.md) (FASTA, k-mer uniqueness) · Unlocks: [4.2](04-02-read-mapping-bwt-fm-index.md) (read mapping), [4.3](04-03-genome-assembly-de-bruijn.md) (assembly), [4.4](04-04-variant-calling-genotype-likelihoods.md) (variant calling)

## Why this matters

Everything in genomics starts from what the sequencer emits, and a sequencer doesn't emit a genome. It emits hundreds of millions of **short, noisy, unordered fragments**, each with a confidence value on every base. [Genetics 3.6](../../genetics/lessons/03-06-reading-editing-genes.md) covered the sampling side: coverage $C = NL/G$, and the chance a base is missed, $e^{-C}$.

This lesson covers the rest of what downstream algorithms need to know about their input. What the per-base quality numbers mean. How errors differ between short-read and long-read platforms. And why the classic coverage theory of assembly says a bacterial genome should close at modest coverage — while real short-read assemblies stay in hundreds of pieces. Mapping ([4.2](04-02-read-mapping-bwt-fm-index.md)), assembly ([4.3](04-03-genome-assembly-de-bruijn.md)) and variant calling ([4.4](04-04-variant-calling-genotype-likelihoods.md)) are all built around these numbers.

## The idea

**A read is a guess with error bars.** Each base call comes with a **quality score**, the sequencer's estimate of the probability that the call is wrong, on a logarithmic scale. Q30 means 1 error in 1,000; Q20 means 1 in 100. Downstream tools use these numbers as probabilities: a mismatch at a Q10 base is weak evidence of a variant, and a mismatch at Q40 is strong.

**Platforms fail differently.**

- **Short reads** (Illumina; typically 100–300 bases) are very accurate, mostly above 99.9 percent per base. Errors are mostly **substitutions**, and quality usually declines toward the end of the read.
- **Long reads** (PacBio, Oxford Nanopore; tens of thousands of bases) span repeats that short reads can't. Raw reads historically carried errors of several percent, dominated by **insertions and deletions**, especially in homopolymer runs. Consensus methods (PacBio HiFi) and improved chemistry now reach 99.9 percent or better.

**Pairs add long-range information cheaply.** In **paired-end** sequencing, both ends of a DNA fragment are read, and the fragment length (a few hundred bases) is roughly known. Two reads that must lie a known distance apart help place reads in repeats and detect structural rearrangements.

**Coverage theory promises more than assembly delivers.** If reads landed at random on a genome with no repeats, gaps between overlapping reads would vanish quickly as coverage rose. Real genomes have repeats longer than a read, and **no amount of short-read coverage resolves a repeat longer than the read**. Read length, not coverage, sets the ceiling.

## The formal version

**Phred quality.** For a base call with error probability $p$,

$$Q = -10\log_{10} p, \qquad p = 10^{-Q/10}.$$

This is the [Phred quality score](../reference.md#phred-quality-score). *In words: every 10 points of Q is a tenfold drop in error probability.* In FASTQ files, each read has a sequence line and a quality line with one ASCII character per base, encoding $Q$ as the character with code $Q + 33$.

**Expected errors in a read.** Treating errors as independent, a read with qualities $Q_1, \ldots, Q_L$ has

$$\mathbb{E}[\text{errors}] = \sum_{i=1}^{L} 10^{-Q_i/10}, \qquad P(\text{error-free}) = \prod_{i=1}^{L}\big(1 - 10^{-Q_i/10}\big) \approx e^{-\mathbb{E}[\text{errors}]}.$$

Quality filters often discard reads with more than one or two expected errors.

**Lander–Waterman statistics.** With $N$ reads of length $L$ on a genome of size $G$, coverage $c = NL/G$, and a minimum detectable overlap of $T$ bases ($\theta = T/L$), the expected number of **contigs** (islands of overlapping reads) is

$$\mathbb{E}[\text{contigs}] = N\,e^{-c(1-\theta)}.$$

This is the [Lander–Waterman contig count](../reference.md#lander-waterman-contig-count). *In words: a read ends a contig when no other read starts within its last $L - T$ bases, which by Poisson arrivals happens with probability $e^{-c(1-\theta)}$.* The fraction of the genome covered at least once, $1 - e^{-c}$, is genetics 3.6's result. Lander–Waterman assumes reads land uniformly and **the genome has no repeats**. Both assumptions fail in practice, and the second one matters most.

**Base-quality recalibration.** Reported qualities are model estimates. Recalibration compares mismatches at known non-variant sites with the qualities reported there, and replaces each reported $Q$ with the **empirical** $Q = -10\log_{10}(\text{observed error rate})$.

## Picture

![Left: Phred quality plotted against position along a 250-base read, falling in a straight line from about Q38 at the start to Q20 at the end, crossing a dashed Q30 line near position 110; the expected number of errors in this read is 0.60. Right: expected number of Lander–Waterman contigs for a 5 megabase genome with 150-base reads, on a log scale against coverage from 0 to 30; the curve peaks at low coverage, passes about 112 contigs at coverage 10, and falls below 1 near coverage 17. A dashed horizontal line near a few hundred contigs is labelled as the level where repeats keep real assemblies.](assets/04-01-fig1.svg)

On the left, most of this read is better than Q30, but the tail contributes most of the expected errors: the last 50 bases, around Q22, account for about 0.34 of the 0.60 expected errors, the first 100 for barely 0.04. Trimming low-quality tails is the cheapest error removal there is. On the right, the Lander–Waterman curve plunges once coverage passes about 10, predicting a single contig by coverage 20. The dashed line is schematic, but its message is real: short-read assemblies of bacteria typically stall in the tens to hundreds of contigs whatever the coverage, because every repeat longer than a read breaks them ([4.3](04-03-genome-assembly-de-bruijn.md)).

## Worked examples

**Example 1 (mechanical): reading qualities.** A 150-base read has Q30 at its first 100 bases and Q20 at its last 50.

*Per-base error probabilities:* $10^{-3} = 0.001$ at Q30 and $10^{-2} = 0.01$ at Q20.

*Expected errors:* $100(0.001) + 50(0.01) = 0.1 + 0.5 = \mathbf{0.6}$.

*Probability the read is error-free:* $0.999^{100} \times 0.99^{50} = 0.9048 \times 0.6050 = \mathbf{0.547}$, close to the approximation $e^{-0.6} = 0.549$.

So nearly half of such reads carry at least one error, and five-sixths of the expected errors sit in the last third of the read. Trimming the last 50 bases would raise $P(\text{error-free})$ to $0.905$, at the cost of a third of the sequence.

**Example 2 (why you'd care): when will an assembly close?** A bacterial genome of $G = 5\times10^6$ bases is sequenced with 150-base reads, and the assembler needs at least $T = 30$ bases of overlap ($\theta = 0.2$).

At coverage $c = 10$: $N = cG/L = 10 \times 5\times10^6 / 150 = 333{,}333$ reads, and

$$\mathbb{E}[\text{contigs}] = 333{,}333 \times e^{-10(0.8)} = 333{,}333 \times 3.35\times10^{-4} \approx \mathbf{112}.$$

At $c = 20$: $666{,}667 \times e^{-16} \approx \mathbf{0.08}$ — essentially one contig, the whole genome.

The theory says 20× coverage should finish the job. In practice, a short-read assembly of such a genome at 100× typically still has dozens to hundreds of contigs. The difference is repeats: rRNA operons (about 5 kilobases, often 7 copies), transposons, duplicated genes. A 150-base read that falls entirely inside a 5-kilobase repeat can't say which copy it came from. Rerun the calculation with 15-kilobase reads at the same $c = 10$: $N = 3{,}333$ and $\mathbb{E}[\text{contigs}] = 3{,}333 \times e^{-8} \approx 1.1$, and those reads also span the repeats. That's why bacterial genomes are now finished with long reads.

## Watch out

- **You might read** Q as a percentage or treat it linearly — **but actually** it's logarithmic. Q40 isn't "a bit better" than Q30 but ten times fewer errors, and averaging Q values across bases understates error. Average the *probabilities* instead.
- **You might trust** reported qualities as calibrated — **but actually** they're the instrument's model, and systematic biases exist (by sequence context, cycle, position in the read). Variant callers depend on recalibrated qualities ([4.4](04-04-variant-calling-genotype-likelihoods.md)); Problem 3 shows why.
- **You might expect** more coverage to fix a fragmented assembly — **but actually** Lander–Waterman gaps close quickly, and the remaining breaks are repeats longer than the reads. Past modest coverage, read length (or pairing distance) is what matters.

## One-liner

> A read is a string of base calls with Phred qualities $Q = -10\log_{10}p$; short reads err by substitution and long reads by indels, and coverage theory closes a repeat-free genome quickly — but every repeat longer than a read still breaks the assembly.

## Problems

**P1 (🟢)** (a) Convert Q10, Q25 and Q37 to error probabilities. (b) What Phred score corresponds to 1 error in 5,000? (c) A 100-base read has Q40 at 60 bases and Q15 at 40. How many errors do you expect, and what fraction come from the low-quality bases?

**P2 (🟡)** A 5-megabase genome is sequenced with 250-base reads, with minimum overlap $T = 50$. (a) At 10× coverage, how many reads are there and how many contigs does Lander–Waterman predict? (b) What coverage is needed for an expected single contig? (c) Give one reason the real assembly will have more contigs than predicted, and one reason it might have fewer gaps than predicted in parts of the genome.

**P3 (🔴)** At known non-variant positions of a run, 1,000,000 bases were reported as Q30, and 4,000 of them disagree with the reference. (a) What is the empirical quality of those bases? (b) A pileup at one site has 3 of 30 reads showing an alternative base, all reported at Q30. If you trust the reported quality, how many mismatches do you expect from sequencing error at this site, and does 3 look surprising? (c) Redo (b) with the empirical quality. (d) What does this say about why variant callers recalibrate?

<details>
<summary>Solutions</summary>

**P1** (a) Q10: $10^{-1} = \mathbf{0.1}$. Q25: $10^{-2.5} = \mathbf{0.0032}$. Q37: $10^{-3.7} = \mathbf{0.0002}$.

(b) $Q = -10\log_{10}(1/5000) = 10\log_{10}5000 = \mathbf{37.0}$.

(c) Q40 is $10^{-4}$ and Q15 is $10^{-1.5} = 0.0316$. Expected errors $= 60(0.0001) + 40(0.0316) = 0.006 + 1.265 = \mathbf{1.27}$. The low-quality bases contribute $1.265/1.271 = \mathbf{99.5}$ percent.

**P2** (a) $N = cG/L = 10 \times 5\times10^6/250 = \mathbf{200{,}000}$ reads. $\theta = 50/250 = 0.2$, so $\mathbb{E}[\text{contigs}] = 200{,}000\,e^{-10 \times 0.8} = 200{,}000 \times 3.35\times10^{-4} \approx \mathbf{67}$.

(b) Solve $N e^{-0.8c} = 1$ with $N = cG/L = 20{,}000\,c$: $20{,}000\,c\,e^{-0.8c} = 1$. Try $c = 15$: $300{,}000 \times e^{-12} = 1.84$. $c = 16$: $320{,}000 \times e^{-12.8} = 0.88$. So about **$c \approx 16$**. (With log-scale thinking: each extra 1× of coverage divides the count by $e^{0.8} \approx 2.2$.)

(c) *More contigs:* repeats longer than 250 bases (rRNA operons, transposons, duplicated genes) can't be resolved, and each breaks the assembly; so do regions sequencing covers poorly, such as extreme GC content. *Fewer gaps in places:* paired-end reads with a known insert size can bridge a gap or a short repeat between contigs, joining them into scaffolds, which Lander–Waterman's single-read model ignores.

**P3** (a) Observed error rate $4{,}000/10^6 = 0.004$, so $Q_{\text{emp}} = -10\log_{10}0.004 = \mathbf{24.0}$.

(b) Trusting Q30 ($p = 0.001$): the expected number of error mismatches among 30 reads is $30 \times 0.001 = 0.03$. Three mismatches would be about 100 times the expectation — very surprising, and strong apparent evidence for a real variant.

(c) With $p = 0.004$: expected $30 \times 0.004 = 0.12$. Three is still unusual (the Poisson probability of at least 3 is about $0.12^3/6 \approx 0.0003$), but the apparent evidence is weaker by a factor of roughly $4^3 = 64$ in likelihood ratio terms.

(d) Variant callers convert qualities directly into error probabilities in their genotype likelihoods ([4.4](04-04-variant-calling-genotype-likelihoods.md)). Miscalibrated qualities misstate how surprising a mismatch is, systematically, across the genome. Overconfident qualities produce false variant calls in bulk. Recalibration fixes the input rather than hoping every downstream threshold absorbs the error.

</details>

## Flashback

**From Lesson 3.5 (Profile HMMs):** A protein profile column contains K in 3 sequences, R in 2 and a gap in 1. Background frequencies are $q_K = 0.057$, $q_R = 0.051$, $q_W = 0.013$. (a) With a pseudocount of 1 for each of the 20 amino acids, compute $e(K)$, $e(R)$, $e(W)$ and their log₂-odds. (b) What is wrong with the result for W? (c) Recompute $e(W)$ and $e(K)$ with background-proportional pseudocounts of total weight 20, i.e. $e(a) = (c_a + 20q_a)/(5 + 20)$.

<details>
<summary>Solution</summary>

(a) The column has 5 residues; with 20 pseudocounts the denominator is 25. $e(K) = 4/25 = 0.16$, log₂-odds $\log_2(0.16/0.057) = \mathbf{1.48}$. $e(R) = 3/25 = 0.12$, $\log_2(0.12/0.051) = \mathbf{1.23}$. $e(W) = 1/25 = 0.04$, $\log_2(0.04/0.013) = \mathbf{1.59}$.

(b) Tryptophan never appears in this column, yet it gets the **highest** log-odds of the three. A uniform pseudocount gives every residue 1/25 = 4 percent, three times W's background frequency. The profile would reward a W here more than the K that actually dominates the column.

(c) $e(W) = (0 + 20 \times 0.013)/25 = 0.26/25 = 0.0106$, log₂-odds $\log_2(0.0106/0.013) = \mathbf{-0.32}$. $e(K) = (3 + 1.15)/25 = 0.166$, log₂-odds $\mathbf{1.53}$. Now an unseen residue is mildly penalized and the observed K keeps its reward. Real tools go further, with Dirichlet mixture priors that also know K and R substitute for each other.

</details>

## Connections

- **Backward:** coverage $C = NL/G$, zero-coverage $e^{-C}$ and Sanger versus short-read sequencing are [genetics 3.6](../../genetics/lessons/03-06-reading-editing-genes.md)'s; k-mer uniqueness against read length is [1.1](01-01-sequences-alphabets-databases.md)'s $2G/4^k$.
- **Forward:** [4.2](04-02-read-mapping-bwt-fm-index.md) places these reads on a reference, tolerating the errors described here; [4.3](04-03-genome-assembly-de-bruijn.md) assembles them without one and meets the repeat limit head-on; [4.4](04-04-variant-calling-genotype-likelihoods.md) turns base qualities into genotype likelihoods.
- **Sideways:** Phred is a decibel scale for error probability, the same logarithmic bookkeeping as signal-to-noise ratios in [communications 1.3](../../communications/lessons/01-03-noise-snr-filtering.md); Lander–Waterman's islands are gaps in a Poisson process, the same object as [prob-stat-refresher 2.2](../../prob-stat-refresher/lessons/02-02-discrete-distributions.md)'s Poisson counts.
