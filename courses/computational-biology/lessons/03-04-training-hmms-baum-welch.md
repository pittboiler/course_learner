# Computational Biology · Lesson 3.4: Training HMMs — Baum–Welch

> ⏱ ~15 min · Module 3: Probabilistic models — HMMs & gene finding · Builds on: [3.3](03-03-forward-backward-posterior-decoding.md) (posteriors), [machine-learning 3.6](../../machine-learning/lessons/03-06-the-em-algorithm.md) (the EM algorithm) · Unlocks: [3.5](03-05-profile-hmms.md) (profile HMMs), [3.6](03-06-gene-finding.md) (gene finding)

## Why this matters

So far someone handed us the transition and emission tables. Where do they come from? Sometimes from **labelled** data — annotated genes, curated CpG islands — and then training is just counting. Often the labels don't exist: a new genome with no annotation, a protein family with no known structure. Then the hidden states have to be learned from the sequences alone.

The standard method is Baum–Welch, the EM algorithm ([machine-learning 3.6](../../machine-learning/lessons/03-06-the-em-algorithm.md)) specialized to HMMs. It uses the forward–backward posteriors of [3.3](03-03-forward-backward-posterior-decoding.md) as soft labels and counts them. Every iteration is guaranteed not to lower the likelihood. That's also where the danger lies: it climbs to *a* peak, and the peak it finds depends on where it started — sometimes a model that fits the data beautifully and means nothing.

## The idea

**With labels, count.** If you know which state produced each letter, the best estimate of a transition probability is the fraction of times state $k$ was followed by $l$. The best emission estimate is the fraction of times $k$ emitted $b$. Add a few **pseudocounts** so that events you happened not to see don't get probability zero.

**Without labels, count what you expect.** You don't know the states, but given the current parameters, forward–backward tells you how probable each state is at each position ([3.3](03-03-forward-backward-posterior-decoding.md)). So:

1. **E-step.** Run forward–backward. Instead of hard counts, add up *posterior probabilities*: the expected number of times $k$ emitted $b$, and the expected number of $k \to l$ transitions.
2. **M-step.** Turn those expected counts into new probabilities, exactly as if they were real counts.
3. Repeat until the likelihood stops improving.

Each round the model explains the data at least as well as before. But EM is a hill-climber. It stops at a local maximum, and if you start with two states identical, nothing ever tells them apart.

**Viterbi training** is a cruder cousin: decode the single best path with the current parameters, count along that path as if it were the truth, and repeat. It's faster and simpler. But it maximizes the probability of the best path, not of the data, so it isn't guaranteed to increase $P(x)$.

## The formal version

**Labelled estimates.** With observed counts $A_{kl}$ (transitions $k\to l$) and $E_k(b)$ (emissions of $b$ from $k$), plus pseudocounts $r_{kl}$ and $r_k(b)$:

$$\hat a_{kl} = \frac{A_{kl} + r_{kl}}{\sum_{l'}(A_{kl'} + r_{kl'})}, \qquad \hat e_k(b) = \frac{E_k(b) + r_k(b)}{\sum_{b'}(E_k(b') + r_k(b'))}.$$

Without pseudocounts these are maximum-likelihood estimates. *In words: normalized counts, padded so nothing unseen becomes impossible.*

**Baum–Welch E-step** (for sequences $x^{(j)}$, each with its own forward $f$, backward $b$ and $P(x^{(j)})$):

$$A_{kl} = \sum_j \frac{1}{P(x^{(j)})}\sum_i f^{(j)}_k(i)\,a_{kl}\,e_l\big(x^{(j)}_{i+1}\big)\,b^{(j)}_l(i+1),$$

$$E_k(b) = \sum_j \frac{1}{P(x^{(j)})}\sum_{i:\,x^{(j)}_i = b} f^{(j)}_k(i)\,b^{(j)}_k(i).$$

**M-step:** plug $A_{kl}$ and $E_k(b)$ into the labelled formulas. This is the [Baum–Welch algorithm](../reference.md#baum-welch-algorithm). *In words: the expected transition count is the posterior probability of that transition summed over positions; the expected emission count is the posterior probability of the state summed over positions showing that letter.*

**Guarantee.** Each iteration satisfies $P(x \mid \theta^{\text{new}}) \ge P(x \mid \theta^{\text{old}})$: EM's monotone ascent ([machine-learning 3.6](../../machine-learning/lessons/03-06-the-em-algorithm.md)). Convergence is to a stationary point, usually a local maximum, not necessarily the global one. The states are only defined up to relabelling (label switching, [statistical-learning 6.3](../../statistical-learning/lessons/06-03-mixture-models-and-em.md)).

**Viterbi training.** Replace the E-step with hard counts along $\pi^*$ from [3.2](03-02-viterbi-decoding.md). It converges in finitely many steps (the path stops changing), to a local maximum of $P(x, \pi^*)$.

## Picture

![Log base 2 of P(x) plotted against Baum–Welch iteration from 0 to 39 for a 27-base sequence, with three runs. A dashed grey run started from two identical states rises once and stays flat at about minus 53.5. A blue run started from the GC-content model rises smoothly from minus 54 to level off near minus 50.1. A coral run from a random start climbs more steeply and levels off near minus 44.9.](assets/03-04-fig1.svg)

All three curves only go up; that's EM's guarantee. But they end in different places. The grey run never moves after one step, because two identical states get identical posteriors and identical updates forever. The blue and coral runs stop at different local maxima. The coral winner turns out to be a model whose two states strictly *alternate* ($a_{HL} = a_{LH} = 1$). It has learned the `GCGCGC` stretches in this sequence as a period-2 pattern, not GC-rich versus AT-rich regions. Higher likelihood, different biology. With 27 bases and 10 free parameters, the data simply can't pin the model down.

## Worked examples

**Example 1 (mechanical): training from labels.** An annotated sequence:

```
sequence  G C G C A T A T G C
states    H H H H L L L L H H
```

*Counts.* Transitions: H→H 4, H→L 1, L→L 3, L→H 1. Emissions: H emits G 3, C 3; L emits A 2, T 2.

*Maximum likelihood.* $\hat a_{HH} = 4/5 = 0.8$, $\hat a_{HL} = 0.2$, $\hat a_{LL} = 3/4 = 0.75$, $\hat a_{LH} = 0.25$. $\hat e_H(\text{G}) = \hat e_H(\text{C}) = 0.5$, and $\hat e_H(\text{A}) = \hat e_H(\text{T}) = 0$.

That last line is a problem. This model says a GC-rich region can **never** contain an A. The first A inside a real island makes $P(x) = 0$, and Viterbi can't label it H whatever the context.

*With pseudocount 1 on every entry.* $\hat e_H = (\text{A } 1,\ \text{C } 4,\ \text{G } 4,\ \text{T } 1)/10 = (0.1, 0.4, 0.4, 0.1)$. $\hat e_L = (3, 1, 1, 3)/8 = (0.375, 0.125, 0.125, 0.375)$. Transitions: $\hat a_{HH} = 5/7 = 0.714$, $\hat a_{LL} = 4/6 = 0.667$. The estimates are pulled slightly toward uniform, and nothing is impossible.

**Example 2 (why you'd care): one Baum–Welch iteration.** Start from the GC model of [3.2](03-02-viterbi-decoding.md) and train on the single sequence `ACAA`. The posteriors $P(\pi_i = H \mid x)$ from [3.3](03-03-forward-backward-posterior-decoding.md) are 0.409, 0.530, 0.348, 0.340.

*Expected emissions from H.* A at positions 1, 3, 4: $E_H(\text{A}) = 0.409 + 0.348 + 0.340 = 1.096$. C at position 2: $E_H(\text{C}) = 0.530$. G and T never occur: 0.

*Expected transitions.* Summing pair posteriors over positions 1–2, 2–3 and 3–4 gives $A_{HH} = 0.587$, $A_{HL} = 0.700$, $A_{LH} = 0.631$, $A_{LL} = 1.082$.

*M-step.* $e_H(\text{A}) = 1.096/1.626 = 0.674$, $e_H(\text{C}) = 0.326$. $a_{HH} = 0.587/1.287 = 0.456$, $a_{LL} = 1.082/1.713 = 0.632$.

*Result.* $P(x)$ rises from $0.0040$ to $0.104$, a 26-fold jump in one step. But look at what bought it: the model now gives G and T probability zero in *both* states. It has memorized a 4-letter sequence. Real training uses many long sequences and pseudocounts — or Dirichlet priors, their Bayesian form — for exactly this reason.

## Watch out

- **You might initialize** all states identically "to be unbiased" — **but actually** identical states get identical posteriors and identical updates, and EM never separates them (the grey curve). Break the symmetry with random or informed starting values.
- **You might trust** the highest-likelihood run as the most meaningful model — **but actually** with few data, higher likelihood often means overfitting (the alternating model in the picture). Check the learned parameters against biology, compare runs, and hold out data.
- **You might switch** to Viterbi training and expect the same guarantee — **but actually** hard counts from one path can decrease $P(x)$. They tend to sharpen parameters toward the decoded labels and underestimate uncertainty. It's popular because it's fast and the result is easy to interpret, not because it's better.

## One-liner

> With labels, training is counting plus pseudocounts; without them, Baum–Welch counts *expected* transitions and emissions from forward–backward posteriors and renormalizes — never lowering the likelihood, always risking a local optimum or an overfit.

## Problems

**P1 (🟢)** An annotated DNA stretch `ATATGCGCAT` has states `LLLLHHHHLL`. (a) Give the transition and emission counts. (b) Give the maximum-likelihood estimates. (c) Give the estimates with pseudocount 1 on every transition and emission.

**P2 (🟡)** For `ACAA` under the starting GC model, the posterior probabilities of each L-row transition at positions (1,2), (2,3), (3,4) are:

| | (1,2) | (2,3) | (3,4) |
|---|---|---|---|
| L→H | 0.289 | 0.141 | 0.201 |
| L→L | 0.302 | 0.329 | 0.452 |

(a) Compute the expected counts $A_{LH}$ and $A_{LL}$. (b) Give the re-estimated $a_{LH}$ and $a_{LL}$. (c) Why do the six numbers in the table sum to exactly $\sum_{i=1}^{3} P(\pi_i = L \mid x)$?

**P3 (🔴)** (a) Prove that if an HMM starts with two states $k$ and $k'$ that have identical emission distributions, identical outgoing transitions, identical incoming transitions from every state and equal start probabilities, Baum–Welch keeps them identical forever. (b) Explain why Viterbi training has a similar problem, and what a tie-break does to it. (c) Give two practical remedies.

<details>
<summary>Solutions</summary>

**P1** (a) States `L L L L H H H H L L`. The nine adjacent pairs are LL, LL, LL, LH, HH, HH, HH, HL, LL, so transitions are L→L **4**, L→H 1, H→H 3, H→L 1. Emissions: L emits A 3, T 3 (positions 1–4 are A, T, A, T and positions 9–10 are A, T); H emits G 2, C 2.

(b) $\hat a_{LL} = 4/5$, $\hat a_{LH} = 1/5$, $\hat a_{HH} = 3/4$, $\hat a_{HL} = 1/4$. $\hat e_L = (\text{A } 0.5, \text{C } 0, \text{G } 0, \text{T } 0.5)$, $\hat e_H = (\text{A } 0, \text{C } 0.5, \text{G } 0.5, \text{T } 0)$.

(c) Transitions: $\hat a_{LL} = 5/7 = 0.714$, $\hat a_{LH} = 2/7 = 0.286$, $\hat a_{HH} = 4/6 = 0.667$, $\hat a_{HL} = 2/6 = 0.333$. Emissions: $\hat e_L = (4, 1, 1, 4)/10 = (0.4, 0.1, 0.1, 0.4)$; $\hat e_H = (1, 3, 3, 1)/8 = (0.125, 0.375, 0.375, 0.125)$.

**P2** (a) $A_{LH} = 0.289 + 0.141 + 0.201 = \mathbf{0.631}$. $A_{LL} = 0.302 + 0.329 + 0.452 = \mathbf{1.083}$.

(b) $a_{LH} = 0.631/1.714 = \mathbf{0.368}$, $a_{LL} = 1.083/1.714 = \mathbf{0.632}$.

(c) At each position $i$, the pair posteriors $P(\pi_i = L, \pi_{i+1} = l \mid x)$ summed over $l$ give the marginal $P(\pi_i = L \mid x)$ — you've summed out where the chain goes next. Summing over $i = 1, 2, 3$ gives $\sum_{i=1}^{3}P(\pi_i = L \mid x) = 0.591 + 0.470 + 0.652 = 1.713$, matching $0.631 + 1.083 = 1.714$ up to rounding.

**P3** (a) By induction on iterations. Suppose $k$ and $k'$ are interchangeable at iteration $t$: swapping their labels leaves every parameter unchanged. Then swapping the labels on any path leaves its probability unchanged. So for every position, $f_k(i) = f_{k'}(i)$ and $b_k(i) = b_{k'}(i)$, and the posteriors are equal. The expected emission counts $E_k(b)$ and $E_{k'}(b)$ are equal, and so are the expected transition counts out of, and into, the two states. The M-step then produces identical rows for $k$ and $k'$, so they're interchangeable at $t+1$.

(b) With identical states, every path has a twin of equal probability with $k$ and $k'$ swapped, so Viterbi faces ties everywhere. A deterministic tie-break always picks, say, $k$: then $k'$ is never used, gets zero counts (or only pseudocounts), and effectively disappears — one state does all the work.

(c) Initialize with **random or data-informed parameters** so the states start distinct (for example, seed them from a rough labelling). Run from **several starts** and compare the fitted models, not just their likelihoods. Adding a **prior** that encodes intended meaning (for example, that H should be GC-rich) also keeps states from collapsing or swapping roles.

</details>

## Flashback

**From Lesson 3.2 (Viterbi decoding):** Using the GC model, run Viterbi on `TACG`. Give the log₂ trellis, the back-pointers, the best path and its score. Where does the trellis produce a tie in scores, and does it matter?

<details>
<summary>Solution</summary>

| pos | base | $v_H$ (ptr) | $v_L$ (ptr) |
|---|---|---|---|
| 1 | T | $-1 - 2.322 = -3.322$ | $-1 - 1.737 = -2.737$ |
| 2 | A | $-2.322 + \max(-4.322, -4.059) = -6.381$ (L) | $-1.737 + \max(-4.322, -3.474) = -5.211$ (L) |
| 3 | C | $-1.737 + \max(-7.381, -6.533) = -8.270$ (L) | $-2.322 + \max(-7.381, -5.948) = -8.270$ (L) |
| 4 | G | $-1.737 + \max(-9.270, -9.592) = -11.007$ (H) | $-2.322 + \max(-9.270, -9.007) = -11.329$ (L) |

Best final: $v_H(4) = -11.007$. Traceback: H(4) ← H(3) ← L(2) ← L(1). **Path LLHH**, $\log_2 P = -11.007$.

At position 3, $v_H = v_L = -8.270$. It doesn't create a second optimal path: each cell has a unique pointer, and at position 4 the H cell prefers the predecessor H (staying costs 1 bit) while the L cell prefers L. The final comparison, $-11.007$ against $-11.329$, is what picks the path.

</details>

## Connections

- **Backward:** the E-step's soft counts are [3.3](03-03-forward-backward-posterior-decoding.md)'s posteriors; the monotone-ascent proof and the EM framework are [machine-learning 3.6](../../machine-learning/lessons/03-06-the-em-algorithm.md)'s; label switching and multiple maxima are [statistical-learning 6.3](../../statistical-learning/lessons/06-03-mixture-models-and-em.md)'s; Viterbi training reuses [3.2](03-02-viterbi-decoding.md).
- **Forward:** profile HMMs ([3.5](03-05-profile-hmms.md)) are usually trained from a labelled alignment with Dirichlet pseudocounts rather than by Baum–Welch from scratch; gene finders ([3.6](03-06-gene-finding.md)) combine labelled training on known genes with unsupervised self-training on new genomes.
- **Sideways:** Baum–Welch is EM for a mixture model whose latent labels are chained by a Markov process — a Gaussian mixture ([machine-learning 3.5](../../machine-learning/lessons/03-05-gaussian-mixture-models.md)) is the special case with no transitions; pseudocounts are the posterior mean under a Dirichlet prior, the same regularization-as-prior idea as [statistical-learning 2.5](../../statistical-learning/lessons/02-05-regularization-as-a-bayesian-prior.md).
