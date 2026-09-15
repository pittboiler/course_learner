# Computational Biology · Lesson 3.3: Forward, backward & posterior decoding

> ⏱ ~15 min · Module 3: Probabilistic models — HMMs & gene finding · Builds on: [3.2](03-02-viterbi-decoding.md) (Viterbi), [2.6](02-06-tree-likelihood-felsenstein-pruning.md) (summing out hidden states) · Unlocks: [3.4](03-04-training-hmms-baum-welch.md) (training), [3.5](03-05-profile-hmms.md) (scoring against a family)

## Why this matters

Viterbi gives you one labelling. It doesn't tell you how sure to be, and in [3.2](03-02-viterbi-decoding.md)'s Example 2 its best path carried just 1 percent of the total probability. For most real questions you want something else:

- **"Does this sequence belong to the family?"** That's $P(x \mid \text{model})$, summed over *all* ways the model could have produced it. Profile HMM searches score sequences this way ([3.5](03-05-profile-hmms.md)).
- **"How confident is the boundary at position 40?"** That's the probability of each state at each position, given the whole sequence. Gene finders and CpG-island callers report these as confidence tracks.
- **"What are the parameters?"** Training needs expected counts of transitions and emissions, which come from the same posteriors ([3.4](03-04-training-hmms-baum-welch.md)).

All three come from two passes over the trellis: the **forward** algorithm and the **backward** algorithm. They're Viterbi with *max* replaced by *sum*, run in both directions.

## The idea

**Forward.** Replace Viterbi's "best path into this node" with "**total probability of all paths** into this node, together with everything emitted so far". The recurrence is the same shape: each node's value is its emission probability times the sum over previous states of (previous value × transition). At the last column, add everything up and you have $P(x)$, the probability of the sequence under the model.

**Backward.** Run the same idea from the right: the probability of everything emitted **after** position $i$, given the state at $i$.

**Posterior.** Multiply them. At position $i$ in state $k$, forward covers every way the model could have produced $x_1 \ldots x_i$ ending in $k$, and backward covers every way to continue from $k$ and produce the rest. Their product is the total probability of all paths that pass through $(i, k)$. Divide by $P(x)$ to get

$$P(\pi_i = k \mid x),$$

the probability that position $i$ was in state $k$, given the **whole** sequence. No single path is chosen. Every path contributes in proportion to its probability.

**Posterior decoding** picks, at each position, the state with the highest posterior. That labelling has the most positions right *on average*, which Viterbi doesn't guarantee. But it's assembled position by position, so it need not be a high-probability path — or even a possible one.

## The formal version

**Forward variable.** $f_k(i) = P(x_1\ldots x_i,\ \pi_i = k)$:

$$f_k(1) = a_{0k}\,e_k(x_1), \qquad f_l(i) = e_l(x_i)\sum_k f_k(i-1)\,a_{kl}, \qquad P(x) = \sum_k f_k(L).$$

**Backward variable.** $b_k(i) = P(x_{i+1}\ldots x_L \mid \pi_i = k)$:

$$b_k(L) = 1, \qquad b_k(i) = \sum_l a_{kl}\,e_l(x_{i+1})\,b_l(i+1), \qquad P(x) = \sum_l a_{0l}\,e_l(x_1)\,b_l(1).$$

**Posterior.**

$$P(\pi_i = k \mid x) = \frac{f_k(i)\,b_k(i)}{P(x)}.$$

These are the [forward–backward algorithm](../reference.md#forward-backward-algorithm) and its [posterior decoding](../reference.md#posterior-decoding). *In words: all the ways to reach state $k$ at $i$, times all the ways to finish from there, as a share of all the ways there are.* Both passes cost $O(LK^2)$, the same as Viterbi. The two expressions for $P(x)$ must agree, which is a useful check.

**Numerics.** Sums can't simply be taken in log space. Use either $\log(e^a + e^b) = \max(a,b) + \log(1 + e^{-|a-b|})$ or rescale each column of $f$ to sum to 1 and accumulate the log scale factors.

**Two decodings compared.**

| | Viterbi | posterior decoding |
|---|---|---|
| maximizes | $P(x, \pi)$ over whole paths | expected number of correctly labelled positions |
| output | one valid path | a state per position, possibly no valid path |
| confidence | none | $P(\pi_i = k \mid x)$ at every position |

## Picture

![A bar chart of the posterior probability of state H at each of the nine positions of G G C A C T G A A. The bars read 0.61, 0.57, 0.55, 0.37, 0.53, 0.36, 0.53, 0.35 and 0.34, with a dashed line at 0.5. Beneath the bases, the Viterbi path reads H H H L L L L L L.](assets/03-03-fig1.svg)

Look how close the bars sit to 0.5. Viterbi drew one sharp boundary after position 3 and declared everything after it L, but the posteriors say the model is barely more than a coin flip anywhere. At positions 5 and 7, the C and the G, the posterior even leans H (0.53) inside Viterbi's L block. Posterior decoding would read **HHHLHLHLL**, flipping back and forth. Neither labelling is wrong. They answer different questions, and the bars show that this short sequence carries little information about its own segmentation.

## Worked examples

**Example 1 (mechanical): forward, backward and a posterior for `ACAA`.** Same GC model as [3.2](03-02-viterbi-decoding.md): $a_{HH} = a_{HL} = 0.5$, $a_{LH} = 0.4$, $a_{LL} = 0.6$; H emits A, C, G, T with 0.2, 0.3, 0.3, 0.2; L emits 0.3, 0.2, 0.2, 0.3; start 0.5 each.

*Forward.*

| $i$ | $x_i$ | $f_H(i)$ | $f_L(i)$ |
|---|---|---|---|
| 1 | A | $0.5 \times 0.2 = 0.1$ | $0.5 \times 0.3 = 0.15$ |
| 2 | C | $0.3\,(0.1 \cdot 0.5 + 0.15 \cdot 0.4) = 0.033$ | $0.2\,(0.1 \cdot 0.5 + 0.15 \cdot 0.6) = 0.028$ |
| 3 | A | $0.2\,(0.033 \cdot 0.5 + 0.028 \cdot 0.4) = 0.00554$ | $0.3\,(0.033 \cdot 0.5 + 0.028 \cdot 0.6) = 0.00999$ |
| 4 | A | $0.2\,(0.00277 + 0.003996) = 0.001353$ | $0.3\,(0.00277 + 0.005994) = 0.002629$ |

$P(x) = 0.001353 + 0.002629 = \mathbf{0.003982}$.

*Backward.*

| $i$ | $b_H(i)$ | $b_L(i)$ |
|---|---|---|
| 4 | 1 | 1 |
| 3 | $0.5(0.2) + 0.5(0.3) = 0.25$ | $0.4(0.2) + 0.6(0.3) = 0.26$ |
| 2 | $0.5(0.2)(0.25) + 0.5(0.3)(0.26) = 0.064$ | $0.4(0.2)(0.25) + 0.6(0.3)(0.26) = 0.0668$ |
| 1 | $0.5(0.3)(0.064) + 0.5(0.2)(0.0668) = 0.01628$ | $0.4(0.3)(0.064) + 0.6(0.2)(0.0668) = 0.015696$ |

*Check:* $0.5(0.2)(0.01628) + 0.5(0.3)(0.015696) = 0.001628 + 0.002354 = 0.003982$. Same $P(x)$.

*Posterior at position 2:* $P(\pi_2 = H \mid x) = \dfrac{0.033 \times 0.064}{0.003982} = \dfrac{0.002112}{0.003982} = \mathbf{0.530}$.

The four posteriors for H are 0.41, **0.53**, 0.35, 0.34. So posterior decoding gives **LHLL**, while Viterbi gives **LLLL** ($P(x,\text{LLLL}) = 0.000583$, just 15 percent of $P(x)$). The lone C at position 2 tips that one position toward H once all paths are counted, even though no single high-scoring path switches just for it.

**Example 2 (why you'd care): expected counts from posteriors.** How many positions of `ACAA` are GC-rich? Neither decoding answers that well. Viterbi says 0, posterior decoding says 1. The honest answer is an expectation:

$$\mathbb{E}[\#\{i : \pi_i = H\}] = \sum_i P(\pi_i = H \mid x) = 0.41 + 0.53 + 0.35 + 0.34 = \mathbf{1.63}.$$

Summing posteriors, instead of counting states on one path, is exactly what training needs. [3.4](03-04-training-hmms-baum-welch.md)'s Baum–Welch re-estimates emissions from expected emission counts like this one, and transitions from the analogous expected transition counts, $P(\pi_i = k, \pi_{i+1} = l \mid x) = f_k(i)\,a_{kl}\,e_l(x_{i+1})\,b_l(i+1)/P(x)$.

## Watch out

- **You might compute** the forward table and report $\max_k f_k(L)$ — **but actually** that's neither the Viterbi score nor $P(x)$. Forward sums at every step, so the answer is the **sum** of the final column.
- **You might trust** a posterior-decoded labelling as a valid annotation — **but actually** it's chosen position by position. In a gene model where exon phases must cycle 0→1→2, the per-position winners can form a sequence the model forbids. If you need a coherent structure, use Viterbi; if you need per-position confidence, use posteriors.
- **You might think** the posteriors "correct" Viterbi — **but actually** each optimizes a different loss (whole-path correctness vs per-position correctness). When posteriors near 0.5 disagree with Viterbi, the right conclusion is that the data don't determine the labelling there.

## One-liner

> Forward sums over all paths into each state from the left, backward from the right; their product over $P(x)$ is the posterior probability of each state at each position — the confidence track Viterbi never gives, and the expected counts training needs.

## Problems

**P1 (🟢)** For the GC model and $x = $ `GC`: (a) run the forward algorithm and give $P(x)$; (b) verify it by listing all four paths with their joint probabilities.

**P2 (🟡)** Using Example 1's tables for `ACAA`: (a) compute $P(\pi_3 = L \mid x)$; (b) compute the posterior probability of the *transition* $\pi_2 = H,\ \pi_3 = L$; (c) explain why (b) is not simply $P(\pi_2 = H \mid x) \times P(\pi_3 = L \mid x)$.

**P3 (🔴)** For `GGCACTGAA` under the GC model, $P(x) = 3.79\times10^{-6}$. Viterbi's path HHHLLLLLL has $P(x, \pi) = 4.25\times10^{-8}$, and the posterior-decoded labelling HHHLHLHLL has $P(x, \pi) = 2.95\times10^{-8}$. (a) What fraction of $P(x)$ does each carry? (b) Which labelling would you expect to have more positions correct if the model were true, and why, even though its joint probability is lower? (c) A colleague wants to report "the CpG island boundary is at position 3". Using the picture's posteriors, write one sentence they could defend instead.

<details>
<summary>Solutions</summary>

**P1** (a) $f_H(1) = 0.5 \times 0.3 = 0.15$, $f_L(1) = 0.5 \times 0.2 = 0.1$.
$f_H(2) = 0.3\,(0.15 \times 0.5 + 0.1 \times 0.4) = 0.3 \times 0.115 = 0.0345$.
$f_L(2) = 0.2\,(0.15 \times 0.5 + 0.1 \times 0.6) = 0.2 \times 0.135 = 0.027$.
$P(x) = 0.0345 + 0.027 = \mathbf{0.0615}$.

(b)
- HH: $0.5(0.3)(0.5)(0.3) = 0.0225$
- HL: $0.5(0.3)(0.5)(0.2) = 0.015$
- LH: $0.5(0.2)(0.4)(0.3) = 0.012$
- LL: $0.5(0.2)(0.6)(0.2) = 0.012$

Sum $= 0.0615$. Forward added these four without listing them.

**P2** (a) $f_L(3)\,b_L(3)/P(x) = 0.00999 \times 0.26 / 0.003982 = 0.002597/0.003982 = \mathbf{0.652}$.

(b) $f_H(2)\,a_{HL}\,e_L(x_3)\,b_L(3)/P(x) = 0.033 \times 0.5 \times 0.3 \times 0.26 / 0.003982 = 0.001287/0.003982 = \mathbf{0.323}$.

(c) The states at positions 2 and 3 are **not independent** given $x$: they're linked by the transition. The product of marginals, $0.530 \times 0.652 = 0.346$, treats them as independent and gets 0.346 instead of 0.323. The pair posterior must be computed from forward, one transition and emission, and backward.

**P3** (a) Viterbi: $4.25\times10^{-8}/3.79\times10^{-6} = \mathbf{1.1}$ percent. Posterior decoding: $2.95\times10^{-8}/3.79\times10^{-6} = \mathbf{0.78}$ percent.

(b) **Posterior decoding.** At each position it picks the state with the higher posterior, and the expected number of correct positions is the sum of the chosen posteriors — which is as large as any labelling can make it. Viterbi maximizes the chance that the *entire* path is exactly right, a different goal. Its whole-path advantage doesn't translate into more correct positions.

(c) For example: "Under this model, positions 1–3 lean GC-rich (posteriors 0.55–0.61), the rest lean AT-rich, but no position's posterior exceeds 0.66 for either state, so the sequence does not locate a boundary with any confidence."

</details>

## Flashback

**From Lesson 3.1 (Markov chains to HMMs):** Using that lesson's CpG log-odds table (G→C $0.46$, C→G $1.81$, G→A $-0.62$), (a) score `GCGCGA` in bits and in bits per transition; (b) how many times more likely is it under the island chain; (c) why does the score ignore the first base, and when would that matter?

<details>
<summary>Solution</summary>

(a) Transitions G→C, C→G, G→C, C→G, G→A: $0.46 + 1.81 + 0.46 + 1.81 - 0.62 = \mathbf{3.92}$ bits over 5 transitions, **0.78 bits per transition**.

(b) $2^{3.92} \approx \mathbf{15}$ times.

(c) A first-order chain scores each letter given the previous one, and the first letter has no predecessor. Its probability under each model is just a base frequency, which differs little between islands and background compared with the transition terms, so it's commonly dropped. It matters for very short sequences, where one extra term is a large share of the score, and whenever the two models' base compositions differ strongly (islands are GC-rich, so a leading G or C is itself weak evidence).

</details>

## Connections

- **Backward:** Viterbi ([3.2](03-02-viterbi-decoding.md)) is this with max for sum; summing out hidden states with a recursion is [2.6](02-06-tree-likelihood-felsenstein-pruning.md)'s pruning on a chain, and backward + forward is the upward + downward pass that gives posteriors at internal tree nodes.
- **Forward:** [3.4](03-04-training-hmms-baum-welch.md) turns posterior state and transition probabilities into expected counts; [3.5](03-05-profile-hmms.md) scores a sequence against a family by $P(x)$ from the forward algorithm; [4.5](04-05-imputation-and-fine-mapping.md) imputes genotypes from posterior state probabilities of the Li–Stephens HMM.
- **Sideways:** forward–backward is Kalman smoothing for discrete states (the filter is the forward pass alone, [robotics 4.5](../../robotics/lessons/04-05-localization.md)); the choice between Viterbi and posterior decoding is the choice between 0–1 loss on the whole path and Hamming loss per position — the same "which error do you pay for?" question that separates exact-match accuracy from per-label accuracy in multi-label classification.
