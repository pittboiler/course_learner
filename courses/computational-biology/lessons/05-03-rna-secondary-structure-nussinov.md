# Computational Biology · Lesson 5.3: RNA secondary structure

> ⏱ ~15 min · Module 5: Expression, structure & networks · Builds on: [1.3](01-03-needleman-wunsch-global-alignment.md) (dynamic programming tables), [algorithms 2.5](../../algorithms/lessons/02-05-dynamic-programming-and-knapsack.md) (choosing DP subproblems), [biochemistry 4.5](../../biochemistry/lessons/04-05-flow-of-genetic-information.md) (base pairing) · Unlocks: [5.4](05-04-protein-structure-prediction-alphafold.md) (protein structure prediction)

## Why this matters

An RNA molecule is a single strand that folds back on itself. Complementary stretches pair up into helices, and the loops between them do the work: tRNAs, ribosomal RNAs, riboswitches that sense metabolites, microRNA precursors, the CRISPR guide scaffold. The **secondary structure** — which bases pair with which — is the first thing to know about a new RNA, and it can be predicted from sequence with a dynamic program.

That DP is new in shape. Alignment ([1.3](01-03-needleman-wunsch-global-alignment.md)) worked on **prefixes** of two sequences. RNA folding works on **intervals** of one sequence, because a base pair closes an interval, and pairs nest inside each other like parentheses. It's the same idea as parsing a context-free grammar, and it costs cubic time instead of quadratic.

## The idea

**Pairs nest.** Watson–Crick pairs (A–U, G–C) and the wobble pair G–U can form between distant positions. In a standard secondary structure, if base $i$ pairs with $j$ and base $k$ pairs with $l$, the pairs are either **nested** ($i < k < l < j$) or **side by side** ($i < j < k < l$), never crossing. So a structure can be written with brackets: `(((...)))` is a hairpin, with three pairs and three unpaired loop bases.

**Look at the interval's first and last base.** Take the best structure on the stretch from $i$ to $j$. There are only four possibilities for how it treats the ends:

1. $i$ is unpaired: the rest is the best structure on $i+1..j$.
2. $j$ is unpaired: the best structure on $i..j-1$.
3. $i$ pairs with $j$: one pair plus the best structure inside, on $i+1..j-1$.
4. $i$ and $j$ are both paired, but not to each other: the structure splits at some $k$ into two independent halves, $i..k$ and $k+1..j$.

Case 4 is only possible because pairs don't cross. Anything inside the left half can't reach the right half.

**Nussinov's algorithm** takes the best of the four, maximizing the number of base pairs, and fills the table from short intervals to long. Real predictors (Zuker's algorithm, as in mfold and RNAfold) use the same interval recursion but **minimize free energy**. Helices are stabilized by *stacking* between adjacent pairs, loops cost entropy, and a hairpin loop needs at least three unpaired bases to physically close. Counting pairs is the skeleton; energies are the flesh.

## The formal version

Let $s_1 \ldots s_n$ be an RNA sequence, let $\delta(i,j) = 1$ if $(s_i, s_j)$ is A–U, G–C or G–U and 0 otherwise, and require at least $h = 3$ unpaired bases in a hairpin loop. Define $N(i,j)$ as the maximum number of nested base pairs in $s_i \ldots s_j$. The [Nussinov recurrence](../reference.md#nussinov-recurrence) is

$$N(i,j) = 0 \quad \text{if } j - i \le h,$$

$$N(i,j) = \max\begin{cases} N(i+1, j)\\ N(i, j-1)\\ N(i+1, j-1) + \delta(i,j)\\ \max_{i < k < j}\ \big[N(i,k) + N(k+1, j)\big]\end{cases}$$

The answer is $N(1, n)$, and traceback recovers the structure. *In words: the best structure on an interval either leaves an end unpaired, pairs the two ends, or splits into two independent halves.*

**Cost.** $O(n^2)$ cells, each with an $O(n)$ loop over $k$: **$O(n^3)$ time**, $O(n^2)$ space. Fill cells in order of increasing interval length $j - i$.

**Energy minimization (Zuker).** The same interval decomposition with free energies in place of pair counts: negative stacking energies for adjacent pairs (G–C stacks are the most stable), positive penalties for hairpin, bulge, interior and multibranch loops. The minimum-free-energy structure is typically a better prediction than the maximum-pair structure, and a partition-function version (McCaskill) gives base-pair probabilities, just as forward–backward gave state posteriors ([3.3](03-03-forward-backward-posterior-decoding.md)).

**Pseudoknots.** Crossing pairs ($i < k < j < l$) occur in real RNAs, but the recurrence can't represent them: case 4's independence assumption is exactly what they violate. Allowing general pseudoknots makes structure prediction NP-hard.

## Picture

![Top: the 19-base sequence GGGAAACCCAGGGAAACCC with six arcs drawn above it — blue arcs pairing bases 1 with 9, 2 with 8 and 3 with 7, and coral arcs pairing 11 with 19, 12 with 18 and 13 with 17 — forming two side-by-side hairpins, written in dot-bracket as three opens, three dots, three closes, one dot, then the same again. Bottom: four small diagrams of the recurrence's cases for an interval from i to j: i unpaired, j unpaired, i paired with j, and a split at k into two halves each with its own arcs.](assets/05-03-fig1.svg)

The arcs never cross, which is what "secondary structure" means here. The blue hairpin lives entirely in positions 1–9 and the coral one in 11–19, so the best structure on the whole sequence is the best on $1..9$ plus the best on $10..19$: case 4, a split at $k = 9$ or $k = 10$. Within each hairpin, cases 3 and 1 alternate: pair the ends, move inward, and leave the last three loop bases unpaired. The bottom row is the entire algorithm — every cell of the table asks those four questions.

## Worked examples

**Example 1 (mechanical): fill the table for `GCAUAGC`.** Positions 1–7: G C A U A G C. With $h = 3$, only intervals with $j - i \ge 4$ can hold a pair, so six cells need work, in order of length.

*Length 5* ($j - i = 4$):
- $N(1,5)$: G…A can't pair. Leaving an end unpaired gives $N(2,5) = N(1,4) = 0$, and every split gives 0. **0**.
- $N(2,6)$: C…G pairs. $N(3,5) + 1 = 0 + 1 = $ **1** (loop A U A, three bases).
- $N(3,7)$: A…C can't pair; everything inside is too short. **0**.

*Length 6:*
- $N(1,6)$: G…G can't pair. $N(2,6) = 1$, $N(1,5) = 0$, and splits give at most $1$. **1**.
- $N(2,7)$: C…C can't pair. $N(2,6) = 1$. **1**.

*Length 7:*
- $N(1,7)$: G…C pairs, so $N(2,6) + 1 = 2$. The other cases give at most 1. **2**.

*Traceback.* $N(1,7) = 2$ came from pairing 1–7. Inside, $N(2,6) = 1$ came from pairing 2–6, leaving 3–5 unpaired:

$$\texttt{GCAUAGC} \quad\to\quad \texttt{((...))}$$

A two-pair stem with an A U A hairpin loop.

**Example 2 (why you'd care): where the split case earns its keep.** For `GGGAAACCCAGGGAAACCC` (the picture), $N(1, 19) = 6$ with structure `(((...))).(((...)))`. No single pair enclosing the whole molecule helps: $s_1 = $ G and $s_{19} = $ C *can* pair, but pairing them forces every other pair to nest inside positions 2–18, where the best possible is 4 more pairs: 5 in total, one short of splitting. The maximum comes from case 4, splitting between the hairpins, $N(1,9) + N(10,19) = 3 + 3$.

The price is time: every cell loops over all split points. A 100-nucleotide RNA needs about $100^3/6 \approx 1.7\times10^5$ split evaluations. A 10,000-nucleotide viral genome needs about $1.7\times10^{11}$, which is why long RNAs are folded in windows or with a cap on how far apart paired bases may lie.

## Watch out

- **You might maximize** base pairs and call the result the structure — **but actually** pair counting ignores that G–C pairs are stronger than A–U or G–U, that stacked pairs stabilize each other, and that loops cost energy. Maximum-pair structures are often unrealistic; energy-based folding is the standard.
- **You might forget** the minimum hairpin loop — **but actually** without $h \ge 3$ the recurrence happily pairs adjacent bases (`()`), which is sterically impossible. Many textbook versions of Nussinov omit it for simplicity; real predictors never do.
- **You might expect** the DP to find pseudoknots — **but actually** its split case assumes the two halves are independent, which crossing pairs violate. Pseudoknotted RNAs (many viral frameshift elements, telomerase RNA) need specialized, much costlier algorithms.

## One-liner

> Because RNA base pairs nest like brackets, the best structure on any interval either leaves an end unpaired, pairs the ends, or splits into two independent halves — an $O(n^3)$ interval DP that maximizes pairs (Nussinov) or minimizes free energy (Zuker), and can't see pseudoknots.

## Problems

**P1 (🟢)** Fold `GGACUUCC` (positions 1–8) with the Nussinov recurrence, allowing A–U, G–C and G–U pairs and at least 3 unpaired bases in a hairpin. (a) Fill every cell with $j - i \ge 4$. (b) Give the maximum number of pairs. (c) Give every optimal structure in dot-bracket.

**P2 (🟡)** (a) How many table cells does Nussinov fill for a sequence of length $n$, and roughly how many split-point evaluations does it make? Evaluate both for $n = 300$. (b) An RNA of 3,000 nucleotides takes 2 seconds. Estimate the time for 30,000 nucleotides. (c) Why is folding in windows of 300 nucleotides a reasonable approximation for some purposes and not others?

**P3 (🔴)** (a) Two base pairs are $(i, j) = (2, 20)$ and $(k, l) = (10, 30)$. Are they nested, side by side or crossing? Can any single dot-bracket string represent both? (b) Explain precisely which step of the Nussinov recurrence fails for these pairs. (c) An RNA's maximum-pair structure has 12 pairs, all A–U or G–U, spread over four short helices. Another structure has 10 pairs, all G–C, in two long helices. Which would an energy-based predictor likely prefer, and why?

<details>
<summary>Solutions</summary>

**P1** (a) Positions: G G A C U U C C.

- $N(1,5)$: G…U pairs (wobble), $N(2,4) + 1 = 0 + 1 = $ **1**.
- $N(2,6)$: G…U pairs, $N(3,5) + 1 = $ **1**.
- $N(3,7)$: A…C doesn't pair, everything inside too short: **0**.
- $N(4,8)$: C…C doesn't: **0**.
- $N(1,6)$: G…U pairs, $N(2,5) + 1 = 1$; also $N(2,6) = 1$. **1**.
- $N(2,7)$: G…C pairs, $N(3,6) + 1 = 1$; $N(2,6) = 1$. **1**.
- $N(3,8)$: A…C doesn't; $N(3,7) = 0$, $N(4,8) = 0$. **0**.
- $N(1,7)$: G…C pairs, $N(2,6) + 1 = $ **2**.
- $N(2,8)$: G…C pairs, $N(3,7) + 1 = 1$; $N(2,7) = 1$. **1**.
- $N(1,8)$: G…C pairs, $N(2,7) + 1 = $ **2**; $N(1,7) = 2$ also.

(b) **2 pairs.**

(c) *Accept criterion: all three structures below.*
`((....))` (pairs 1–8 and 2–7), `((...)).` (pairs 1–7 and 2–6) and `((...).)` (pairs 1–8 and 2–6). All have two pairs; the recurrence can't prefer one. An energy model would: the first stacks G–C on G–C, while the others use a G–U wobble.

**P2** (a) Cells: $n(n+1)/2 \approx n^2/2$, so $45{,}150$ for $n = 300$. Split evaluations: for each interval of length $L$ there are about $L$ split points, summing to about $n^3/6 = \mathbf{4.5\times10^6}$.

(b) Time scales as $n^3$: $(30{,}000/3{,}000)^3 = 1{,}000$, so about **2,000 seconds** (half an hour).

(c) Windowing assumes no base pairs span more than the window. That's good enough for finding local hairpins, such as a riboswitch or a microRNA precursor, but it misses long-range pairs that close large domains or bring the two ends of an mRNA together, and it can split a helix across a window boundary.

**P3** (a) $2 < 10 < 20 < 30$: **crossing**. No: in dot-bracket, the `)` at 20 must close the most recent unmatched `(`, which is 10, not 2. So a single bracket string can't encode both pairs (pseudoknot notation needs a second bracket type, such as `[ ]`).

(b) Case 4, the split. To contain both pairs, a structure on the whole interval would have to split at some $k$ with $(2,20)$ entirely in one half and $(10,30)$ entirely in the other, but they overlap on $10..20$. Case 3 doesn't help either: after pairing $(2,20)$, the inner interval $3..19$ can't contain position 30. Every case assumes pairs lie entirely inside or entirely outside each subinterval, and crossing pairs do neither.

(c) The **10-pair G–C structure**. G–C pairs form three hydrogen bonds and stack much more favourably than A–U or G–U pairs, and two long helices have many stacks and few loop penalties, while four short helices pay for four hairpin or interior loops. Pair counting prefers 12 over 10; free energy prefers the stable helices.

</details>

## Flashback

**From Lesson 5.1 (RNA-seq quantification):** Three genes of length 1, 2 and 4 kb have counts 100, 400, 800 in sample 1 and 700, 400, 200 in sample 2 (1,300 reads each). (a) Compute RPKM for gene 2 in both samples. (b) Compute TPM for gene 2 in both samples. (c) RPKM says gene 2 is unchanged, TPM says it fell by nearly half. Which is right, and what would you need to decide?

<details>
<summary>Solution</summary>

(a) $N = 1{,}300$ reads, so $N/10^6 = 0.0013$. Gene 2: $400/(0.0013 \times 2) = \mathbf{153{,}846}$ in **both** samples.

(b) Reads per kb, sample 1: 100, 200, 200 (sum 500), so gene 2's TPM is $200/500 \times 10^6 = \mathbf{400{,}000}$. Sample 2: 700, 200, 50 (sum 950), so $200/950 \times 10^6 = \mathbf{210{,}526}$.

(c) **Neither can be trusted on its own.** RPKM ties gene 2 to total reads, TPM to total transcript share, and gene 1's rise changes both totals. If gene 1's increase is real and everything else is constant, gene 2's molecule count is unchanged and TPM is misled by composition. If the cell's total RNA stayed fixed while gene 1 took over, gene 2's share really did fall. Deciding needs a cross-sample normalization built on many genes, such as median-of-ratios ([5.1](05-01-rna-seq-quantification-normalization.md)), or spike-in controls if many genes change.

</details>

## Connections

- **Backward:** the table-filling and traceback are [1.3](01-03-needleman-wunsch-global-alignment.md)'s, re-indexed from prefix pairs to intervals, and choosing subproblems so optimal substructure holds is [algorithms 2.5](../../algorithms/lessons/02-05-dynamic-programming-and-knapsack.md)'s lesson; the pairing rules are [biochemistry 4.5](../../biochemistry/lessons/04-05-flow-of-genetic-information.md)'s nucleic-acid chemistry.
- **Forward:** [5.4](05-04-protein-structure-prediction-alphafold.md) moves from RNA pairs to protein contacts, where no nesting rule exists and prediction needs evolutionary information; the partition-function version of this recursion parallels [3.3](03-03-forward-backward-posterior-decoding.md)'s forward–backward.
- **Sideways:** the interval DP is the CYK parsing algorithm for context-free grammars, and nested pairs are exactly the balanced-bracket language of [theory-of-computation 2.1](../../theory-of-computation/lessons/02-01-context-free-grammars-derivations-parse-trees.md); pseudoknots are what pushes RNA structure beyond context-free.
