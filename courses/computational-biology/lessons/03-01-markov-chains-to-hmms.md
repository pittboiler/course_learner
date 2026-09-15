# Computational Biology · Lesson 3.1: Markov chains to HMMs

> ⏱ ~15 min · Module 3: Probabilistic models — HMMs & gene finding · Builds on: [1.2](01-02-substitution-matrices-log-odds.md) (log-odds scoring), [2.5](02-05-substitution-models.md) (Markov chains), [1.5](01-05-affine-gaps-gotoh.md) (states as memory) · Unlocks: [3.2](03-02-viterbi-decoding.md) (Viterbi), [3.3](03-03-forward-backward-posterior-decoding.md) (forward–backward)

## Why this matters

Genomes aren't uniform. A stretch might be a gene or intergenic sequence, an exon or an intron, a CpG island or background. Each kind of region has its own statistics, and the boundaries aren't marked. What you observe is a string of letters; what you want is the **hidden labelling** underneath it.

Hidden Markov models (HMMs) are the tool for exactly this, and they're everywhere in the field: gene finders ([3.6](03-06-gene-finding.md)), protein family databases ([3.5](03-05-profile-hmms.md)), genotype imputation ([4.5](04-05-imputation-and-fine-mapping.md)), pair alignment. This lesson builds one from two simpler pieces you already have: a Markov chain over letters, and a log-odds test between two models ([1.2](01-02-substitution-matrices-log-odds.md)).

## The idea

**Step 1: a Markov chain for letters.** Letters in DNA aren't independent. In most of the human genome, a C followed by G (a "CpG") is rare, because the C in CpG is often methylated and mutates to T. In **CpG islands**, often near gene promoters, CpG is protected and common. So a model where each base depends on the one before it can tell the two kinds of sequence apart.

**Step 2: discrimination by log-odds.** Train one chain on known islands (+) and one on background (−). For a new sequence, add up $\log_2$ of the ratio of its transition probabilities under the two chains. Positive total: looks like an island. This is [1.2](01-02-substitution-matrices-log-odds.md)'s log-likelihood ratio, with pairs of *adjacent* letters in place of *aligned* ones.

**Step 3: the labels switch, and you can't see where.** The log-odds test scores a sequence you've already cut out. In a raw chromosome, islands start and stop at unknown places. So make the **region type itself a hidden state** that follows its own Markov chain, switching occasionally, while each state **emits** letters with its own statistics.

That's an HMM. The classic toy is a casino that secretly swaps between a fair die and a loaded one. You see every roll but never which die was used. A run of sixes *suggests* the loaded die without proving it. The three things you want from an HMM:

1. the single most likely sequence of hidden states (**Viterbi**, [3.2](03-02-viterbi-decoding.md));
2. the total probability of the observations, and the probability of each state at each position (**forward–backward**, [3.3](03-03-forward-backward-posterior-decoding.md));
3. the parameters, learned from data (**Baum–Welch**, [3.4](03-04-training-hmms-baum-welch.md)).

## The formal version

**Markov chain.** A sequence $x_1 \ldots x_L$ is a first-order Markov chain with transition probabilities $a_{st} = P(x_i = t \mid x_{i-1} = s)$ if

$$P(x) = P(x_1)\prod_{i=2}^{L} a_{x_{i-1}x_i}.$$

*In words: each letter depends only on the one before it.*

**Log-odds discrimination.** With chains $a^+$ (island) and $a^-$ (background),

$$S(x) = \log_2\frac{P(x \mid +)}{P(x \mid -)} = \sum_{i=2}^{L}\beta_{x_{i-1}x_i}, \qquad \beta_{st} = \log_2\frac{a^+_{st}}{a^-_{st}}$$

(ignoring the first letter). This is the [Markov chain log-odds score](../reference.md#markov-chain-log-odds-score). Dividing by length gives bits per transition, comparable across sequences.

**Hidden Markov model.** An HMM has

- hidden states $k \in \{1, \ldots, K\}$ with a path $\pi = \pi_1 \ldots \pi_L$;
- initial probabilities $a_{0k} = P(\pi_1 = k)$;
- transition probabilities $a_{kl} = P(\pi_i = l \mid \pi_{i-1} = k)$;
- emission probabilities $e_k(b) = P(x_i = b \mid \pi_i = k)$.

The **joint probability** of an observation sequence and a path is

$$P(x, \pi) = a_{0\pi_1}\, e_{\pi_1}(x_1)\prod_{i=2}^{L} a_{\pi_{i-1}\pi_i}\, e_{\pi_i}(x_i).$$

This is the [HMM joint probability](../reference.md#hmm-joint-probability). *In words: walk the hidden path, paying a transition probability for each step and an emission probability for each letter.* The path is hidden, so the probability of the observations alone is $P(x) = \sum_\pi P(x,\pi)$, a sum over $K^L$ paths.

**State durations.** Staying in state $k$ has probability $a_{kk}$ per step, so a run in $k$ has a **geometric** length with mean $1/(1 - a_{kk})$. That built-in memorylessness is an assumption, and gene finding has to work around it ([3.6](03-06-gene-finding.md)).

## Picture

![A two-state diagram. A blue circle F, the fair die, has a self-loop of 0.95 and an arrow of 0.05 to a coral circle L, the loaded die, which has a self-loop of 0.90 and an arrow of 0.10 back to F. Below the fair state, a bar chart shows six equal emission probabilities of one sixth; below the loaded state, faces 1 to 5 have probability 0.1 each and face 6 has 0.5. A note says you see only the rolls.](assets/03-01-fig1.svg)

Everything in an HMM is in this picture. The arrows between circles are the hidden chain: the casino stays with its current die most of the time and switches rarely. The bar charts are the emissions: each die has its own distribution over faces. The observations come from the bars, the hidden path from the arrows. The loaded die's bars differ from the fair die's only at face 6, so evidence about the hidden state comes almost entirely from sixes and their absence.

## Worked examples

**Example 1 (mechanical): is it a CpG island?** Log-odds values $\beta_{st}$ in bits, from island and background chains close to those Durbin et al. estimated on human sequence:

| from \\ to | A | C | G | T |
|---|---|---|---|---|
| **A** | −0.74 | 0.42 | 0.58 | −0.81 |
| **C** | −0.91 | 0.30 | **1.81** | −0.68 |
| **G** | −0.62 | 0.46 | 0.33 | −0.74 |
| **T** | −1.16 | 0.57 | 0.40 | −0.68 |

Score `CGCG`: transitions C→G, G→C, C→G give $1.81 + 0.46 + 1.81 = \mathbf{4.09}$ bits, or 1.36 bits per transition. Strongly island-like: the + chain makes this sequence $2^{4.09} \approx 17$ times more likely.

Score `TTAA`: T→T, T→A, A→A give $-0.68 - 1.16 - 0.74 = \mathbf{-2.58}$ bits. Background-like.

The single most informative entry is C→G at 1.81 bits: the CpG dinucleotide alone is about 3.5 times more likely in islands. That one depleted pair is the biology the model has learned.

**Example 2 (why you'd care): joint probability of a hidden path.** The casino (picture), starting with either die with probability $\tfrac12$. The rolls are $x = 3, 6, 6, 6$. Compare three hidden stories:

$$P(x, \text{LLLL}) = \tfrac12 \cdot \tfrac1{10}\cdot(0.90 \cdot \tfrac12)^3 = 0.05 \times 0.0911 = 0.00456,$$

$$P(x, \text{FLLL}) = \tfrac12\cdot\tfrac16\cdot 0.05\cdot\tfrac12\cdot(0.90\cdot\tfrac12)^2 = 0.000422,$$

$$P(x, \text{FFFF}) = \tfrac12\cdot\tfrac16\cdot(0.95\cdot\tfrac16)^3 = 0.000331.$$

"Loaded the whole time" is about 11 times more probable than "fair, then switched", even though a 3 is more likely from the fair die. Paying the 0.05 switch costs more than the fair die gains on one roll. Switching is rare, so the model prefers long runs.

But these are only three of the $2^4 = 16$ possible paths. Picking the best of all paths efficiently is [3.2](03-02-viterbi-decoding.md). Adding them all up to get $P(x)$ is [3.3](03-03-forward-backward-posterior-decoding.md).

## Watch out

- **You might score** a long sequence with an HMM's best path and call it "the" probability of the sequence — **but actually** $P(x, \pi^*)$ for the best path is only one term of $P(x) = \sum_\pi P(x,\pi)$. When many paths are nearly as good, the sum can be much larger than any one term.
- **You might think** the Markov chain log-odds test finds islands in a chromosome — **but actually** it scores a window you choose. Slide a window and the answer depends on its size, and boundaries blur. The HMM removes the window by making "island or not" a hidden state.
- **You might assume** an HMM state's run length can follow any distribution — **but actually** a self-transition probability fixes a geometric distribution, with the most likely run length always 1. Real exons and islands have strongly non-geometric lengths, which is why gene finders use generalized HMMs ([3.6](03-06-gene-finding.md)).

## One-liner

> A Markov chain scores sequences by adjacent-letter log-odds; an HMM hides the choice of chain inside its own Markov chain of states, and every question — best labelling, total probability, parameters — becomes a computation over hidden paths.

## Problems

**P1 (🟢)** Using the $\beta$ table in Example 1, score `ACGT` and `CAGT` in bits, give bits per transition, and classify each as island-like or background-like.

**P2 (🟡)** For the casino with rolls $x = 6, 6, 1, 6$: (a) compute $P(x, \text{LLLL})$; (b) compute $P(x, \text{LLFF})$; (c) how many times more probable is the first story, and why does the single 1 not favour a switch?

**P3 (🔴)** For the casino's hidden chain alone: (a) what is the mean length of a run with the fair die, and with the loaded die? (b) What fraction of rolls, in the long run, use the loaded die? (c) About how many switches occur in 300 rolls? (d) What does (a)–(c) predict about the shape of the most likely hidden path for a long roll sequence?

<details>
<summary>Solutions</summary>

**P1** `ACGT`: A→C $0.42$, C→G $1.81$, G→T $-0.74$. Total $\mathbf{1.49}$ bits, 0.50 bits per transition: **island-like**, driven by the one CpG.
`CAGT`: C→A $-0.91$, A→G $0.58$, G→T $-0.74$. Total $\mathbf{-1.07}$ bits, $-0.36$ per transition: **background-like**.

**P2** (a) $\tfrac12\cdot\tfrac12 \cdot (0.9\cdot\tfrac12)\cdot(0.9\cdot\tfrac1{10})\cdot(0.9\cdot\tfrac12) = 0.25 \times 0.45 \times 0.09 \times 0.45 = \mathbf{0.00456}$.

(b) $\tfrac12\cdot\tfrac12 \cdot (0.9\cdot\tfrac12)\cdot(0.10\cdot\tfrac16)\cdot(0.95\cdot\tfrac16) = 0.25 \times 0.45 \times 0.01667 \times 0.15833 = \mathbf{0.000297}$.

(c) $0.00456/0.000297 \approx \mathbf{15}$ times. A 1 is more likely from the fair die ($\tfrac16$ against $\tfrac1{10}$), a gain factor of only $1.67$. Switching costs a factor of $0.10/0.90 \approx 0.11$. And the final 6 under the fair die costs a factor of $\tfrac16/\tfrac12 = 0.33$. One roll can't pay for a switch.

**P3** (a) Fair: $1/(1 - 0.95) = \mathbf{20}$ rolls. Loaded: $1/(1 - 0.90) = \mathbf{10}$ rolls.

(b) Balance the flows: $\pi_F(0.05) = \pi_L(0.10)$ with $\pi_F + \pi_L = 1$, so $\pi_L = \mathbf{1/3}$.

(c) Expected switches per roll $= \pi_F(0.05) + \pi_L(0.10) = \tfrac23(0.05) + \tfrac13(0.10) = 0.0667$. In 300 rolls, about **20 switches**.

(d) The best path should consist of long blocks — runs of about 10 or 20 rolls — not rapid alternation. A decoded path that flips state every few rolls is suspicious: either the parameters are wrong or the evidence for each flip is overwhelming. The transition probabilities act as a smoothing prior on the labelling.

</details>

## Flashback

**From Lesson 2.6 (Tree likelihood & pruning):** Two leaves hang from a root, leaf X on a branch of 0.1 substitutions per site showing A, and leaf Y on a branch of 0.3 showing G. Use Jukes–Cantor ($P_{\text{same}}(0.1) = 0.9064$, $P_{\text{diff}}(0.1) = 0.0312$, $P_{\text{same}}(0.3) = 0.7527$, $P_{\text{diff}}(0.3) = 0.0824$). (a) Compute the root's conditional likelihood vector. (b) Compute the site likelihood. (c) With uniform base frequencies, what is the posterior probability of each base at the root, and why is A favoured over G?

<details>
<summary>Solution</summary>

(a) $L(x) = P_{x\text{A}}(0.1)\,P_{x\text{G}}(0.3)$:
$L(\text{A}) = 0.9064 \times 0.0824 = 0.0747$; $L(\text{G}) = 0.0312 \times 0.7527 = 0.0235$; $L(\text{C}) = L(\text{T}) = 0.0312 \times 0.0824 = 0.00257$.

(b) $\tfrac14(0.0747 + 0.0235 + 0.00257 + 0.00257) = \mathbf{0.0258}$.

(c) The posterior is $\pi_x L(x) / \sum_y \pi_y L(y)$, with the $\tfrac14$ cancelling: A $0.0747/0.1033 = \mathbf{0.72}$, G $\mathbf{0.23}$, C and T $\mathbf{0.025}$ each. A is favoured because X's branch is **shorter**. An ancestor matching X needs its change on the long branch, where changes are three times likelier ($0.0824$ against $0.0312$). This posterior uses only the two leaves because the root has nothing above it; for an internal node you'd need data from above too — the job of [3.3](03-03-forward-backward-posterior-decoding.md)'s backward pass.

</details>

## Connections

- **Backward:** the log-odds test is [1.2](01-02-substitution-matrices-log-odds.md)'s likelihood ratio applied to adjacent letters; the hidden chain is a discrete-time version of [2.5](02-05-substitution-models.md)'s Markov chains; Gotoh's three states ([1.5](01-05-affine-gaps-gotoh.md)) were a hidden state machine in disguise.
- **Forward:** [3.2](03-02-viterbi-decoding.md) finds the best path, [3.3](03-03-forward-backward-posterior-decoding.md) sums over all paths, [3.4](03-04-training-hmms-baum-welch.md) learns the tables; [3.5](03-05-profile-hmms.md) and [3.6](03-06-gene-finding.md) are the flagship applications; Li–Stephens imputation in [4.5](04-05-imputation-and-fine-mapping.md) is an HMM whose hidden states are reference haplotypes.
- **Sideways:** CpG depletion is the long-run footprint of the roughly tenfold faster mutation of methylated CpG sites noted in [genetics 3.2](../../genetics/lessons/03-02-mutation.md); HMMs are the discrete-state cousin of the Kalman filter in [robotics 4.5](../../robotics/lessons/04-05-localization.md), where the hidden state is continuous.
