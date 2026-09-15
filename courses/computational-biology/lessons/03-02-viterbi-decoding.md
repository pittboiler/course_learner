# Computational Biology · Lesson 3.2: Viterbi decoding

> ⏱ ~15 min · Module 3: Probabilistic models — HMMs & gene finding · Builds on: [3.1](03-01-markov-chains-to-hmms.md) (HMMs), [1.3](01-03-needleman-wunsch-global-alignment.md) (best path by DP), [communications 4.4](../../communications/lessons/04-04-convolutional-codes-viterbi.md) (Viterbi on a code trellis) · Unlocks: [3.3](03-03-forward-backward-posterior-decoding.md) (forward–backward), [3.6](03-06-gene-finding.md) (gene finding)

## Why this matters

An HMM with $K$ states has $K^L$ hidden paths for a sequence of length $L$. A gene finder with dozens of states running over a 100-kilobase contig has more paths than there are atoms in the universe. Yet it returns the single most probable annotation in a fraction of a second.

The algorithm is Viterbi's. You may have met it as a decoder for convolutional codes ([communications 4.4](../../communications/lessons/04-04-convolutional-codes-viterbi.md)), where branch metrics are Hamming distances and nothing is a probability. Here it's the same dynamic program with **log-probabilities** as the metric, and it's Boss problem 3's core skill: fill the trellis, keep back-pointers, read off the path.

## The idea

Line the positions up left to right and draw a column of $K$ nodes at each: one per hidden state. A hidden path is a route that visits one node per column. Its probability is a product of transition and emission terms along the route. Take logs and it's a *sum* of weights — exactly the setting of [1.3](01-03-needleman-wunsch-global-alignment.md)'s best path through a grid.

The DP rests on one observation. **The best path ending in state $l$ at position $i$ must extend the best path ending in some state $k$ at position $i-1$.** If a better route to $(i-1, k)$ existed, swapping it in would improve the route to $(i, l)$. So at each node, store:

- the score of the best path that ends there, and
- a **back-pointer** to the state at the previous position that achieved it.

Fill column by column. At the end, take the best final node and follow back-pointers to the start.

Work in logs. Probabilities of long paths are astronomically small — around $2^{-2700}$ for a 1,000-base sequence — and underflow ordinary floating point. Logs turn products into sums, and since log is increasing, the maximizing path doesn't change.

## The formal version

Let $v_k(i)$ be the log-probability of the most probable path that emits $x_1 \ldots x_i$ and ends in state $k$. The [Viterbi recurrence](../reference.md#viterbi-algorithm) is

$$v_k(1) = \log a_{0k} + \log e_k(x_1),$$

$$v_l(i) = \log e_l(x_i) + \max_k\big[\,v_k(i-1) + \log a_{kl}\,\big]$$

$$\text{ptr}_i(l) = \arg\max_k\big[\,v_k(i-1) + \log a_{kl}\,\big].$$

**Termination and traceback.**

$$\log P(x, \pi^*) = \max_k v_k(L), \qquad \pi^*_L = \arg\max_k v_k(L), \qquad \pi^*_{i-1} = \text{ptr}_i(\pi^*_i).$$

*In words: the best score into a state is its emission plus the best (score + transition) from any previous state; remember which previous state won; at the end, start from the best state and follow the pointers back.*

**Cost.** Time $O(LK^2)$, space $O(LK)$ for the pointers. Compare $K^L$ paths by brute force.

**Ties.** If two predecessors tie for the same cell, both paths through them are optimal. Two *states* in the same column having equal scores is not a tie of this kind; it only matters if both then feed an optimal continuation.

## Picture

![A trellis for the sequence G G C A with two rows of nodes, H (GC-rich) on top and L (AT-rich) below, and four columns. Node scores in log base 2 are minus 2.74 and minus 3.32 at position 1, minus 5.47 and minus 6.06 at position 2, minus 8.21 and minus 8.80 at position 3, and minus 11.53 and minus 10.95 at position 4. Back-pointer arrows from every node point to the H node of the previous column. The best path, H H H L, is highlighted in coral, ending at minus 10.95.](assets/03-02-fig1.svg)

Every surviving back-pointer points to H. Staying in H costs 1 bit ($a_{HH} = \tfrac12$) and switching L→H costs 1.32, and H starts ahead. So at each step the best route into either state comes from H. The final A tips the balance: L emits A with probability 0.3 against H's 0.2, and the best path makes a single switch at the very end. Notice that the path isn't chosen greedily column by column. At position 4 you can only know that L wins by comparing complete scores, which the trellis has been accumulating all along.

## Worked examples

**Example 1 (mechanical): the trellis for `GGCA`.** A two-state GC-content model:

| | $\to$ H | $\to$ L | emits A | C | G | T |
|---|---|---|---|---|---|---|
| **H** (GC-rich) | 0.5 | 0.5 | 0.2 | 0.3 | 0.3 | 0.2 |
| **L** (AT-rich) | 0.4 | 0.6 | 0.3 | 0.2 | 0.2 | 0.3 |

Start in either state with probability 0.5. The $\log_2$ values needed: $\log_2 0.5 = -1$, $\log_2 0.3 = -1.737$, $\log_2 0.2 = -2.322$, $\log_2 0.6 = -0.737$, $\log_2 0.4 = -1.322$.

*Position 1 (G).* $v_H = -1 - 1.737 = -2.737$; $v_L = -1 - 2.322 = -3.322$.

*Position 2 (G).*
$v_H = -1.737 + \max(-2.737 - 1,\ -3.322 - 1.322) = -1.737 + \max(-3.737, -4.644) = \mathbf{-5.474}$, pointer H.
$v_L = -2.322 + \max(-2.737 - 1,\ -3.322 - 0.737) = -2.322 + \max(-3.737, -4.059) = \mathbf{-6.059}$, pointer H.

*Position 3 (C).*
$v_H = -1.737 + \max(-6.474, -7.381) = \mathbf{-8.211}$, pointer H.
$v_L = -2.322 + \max(-6.474, -6.796) = \mathbf{-8.796}$, pointer H.

*Position 4 (A).*
$v_H = -2.322 + \max(-9.211, -10.118) = \mathbf{-11.533}$, pointer H.
$v_L = -1.737 + \max(-9.211, -9.533) = \mathbf{-10.948}$, pointer H.

*Traceback.* The best final score is $v_L(4) = -10.948$. Follow pointers: L at 4 ← H at 3 ← H at 2 ← H at 1. **Path HHHL**, $\log_2 P(x, \pi^*) = -10.948$, so $P(x,\pi^*) = 2^{-10.948} = 0.000506$. Brute force over all 16 paths confirms it.

**Example 2 (why you'd care): segmentation and its limits.** Run the same model on `GGCACTGAA`. Viterbi returns **HHHLLLLLL**, with $\log_2 P(x,\pi^*) = -24.49$. It's a clean segmentation: a GC-rich block, then an AT-rich block, one boundary.

Now compare with the total probability of the sequence summed over all 512 paths, $P(x) = 3.79\times10^{-6}$. The best path has $P(x,\pi^*) = 4.25\times10^{-8}$, so it carries only **1.1 percent** of the total. The data are consistent with a great many labellings, and Viterbi reports one of them without a hint of that uncertainty. Whether the boundary really falls after position 3 is a question for posterior probabilities ([3.3](03-03-forward-backward-posterior-decoding.md)).

## Watch out

- **You might pick** the best state in each column independently — **but actually** that ignores transitions and can produce a sequence of states that no single high-probability path passes through. Viterbi keeps the whole path's score, which is why it needs back-pointers.
- **You might run** Viterbi in probability space on a real genome — **but actually** products of thousands of factors below 1 underflow to 0.0, and every path then "ties". Use log-probabilities (Problem 3). As a bonus, log-space turns every multiplication into an addition.
- **You might read** the Viterbi path as "the answer" — **but actually** it can hold a tiny fraction of the probability (1.1 percent in Example 2). It's the best single guess, not a confident one. When confidence matters, use posteriors.

## One-liner

> Viterbi fills a trellis with the best log-score into each state at each position — emission plus the best (previous score + transition) — and follows back-pointers from the best final state, turning $K^L$ paths into $O(LK^2)$ work.

## Problems

**P1 (🟢)** Using Example 1's model, run Viterbi on `GCAT`. Give every trellis entry (log₂), every back-pointer, the best path and its log-probability.

**P2 (🟡)** On `TGCC` the trellis gives, at position 2, $v_H(2) = v_L(2) = -5.796$. (a) Complete positions 3 and 4 with back-pointers. (b) Give the best path. (c) Does the equality at position 2 create a second optimal path? Explain.

**P3 (🔴)** (a) Example 2's best path scores about $-24.5$ bits over 9 bases. Estimate $\log_2 P(x,\pi^*)$ for a 1,000-base sequence with similar statistics, and compare with the smallest positive double-precision number, about $2^{-1074}$. (b) Explain why taking logs changes Viterbi's arithmetic but not its answer. (c) The forward algorithm ([3.3](03-03-forward-backward-posterior-decoding.md)) needs *sums* of probabilities. Show that $\log_2(2^a + 2^b) = \max(a,b) + \log_2\!\big(1 + 2^{-|a-b|}\big)$, and evaluate it for $a = -10.948$, $b = -11.533$.

<details>
<summary>Solutions</summary>

**P1** Log values as in Example 1.

| pos | base | $v_H$ (ptr) | $v_L$ (ptr) |
|---|---|---|---|
| 1 | G | $-1 - 1.737 = -2.737$ | $-1 - 2.322 = -3.322$ |
| 2 | C | $-1.737 + \max(-3.737, -4.644) = -5.474$ (H) | $-2.322 + \max(-3.737, -4.059) = -6.059$ (H) |
| 3 | A | $-2.322 + \max(-6.474, -7.381) = -8.796$ (H) | $-1.737 + \max(-6.474, -6.796) = -8.211$ (H) |
| 4 | T | $-2.322 + \max(-9.796, -9.533) = -11.855$ (L) | $-1.737 + \max(-9.796, -8.948) = -10.685$ (L) |

Best final: $v_L(4) = -10.685$. Traceback: L(4) ← L(3) ← H(2) ← H(1). **Path HHLL**, $\log_2 P = -10.685$ ($P = 0.000608$).

**P2** Position 1 (T): $v_H = -3.322$, $v_L = -2.737$. Position 2 (G): both $-5.796$, both with pointer L.

(a) Position 3 (C): $v_H = -1.737 + \max(-5.796 - 1,\ -5.796 - 1.322) = -1.737 - 6.796 = -8.533$ (pointer H). $v_L = -2.322 + \max(-5.796 - 1,\ -5.796 - 0.737) = -2.322 - 6.533 = -8.855$ (pointer L).
Position 4 (C): $v_H = -1.737 + \max(-9.533,\ -10.177) = -11.270$ (pointer H). $v_L = -2.322 + \max(-9.533,\ -9.592) = -11.855$ (pointer H).

(b) Best final $v_H(4) = -11.270$. Traceback: H(4) ← H(3) ← H(2) ← L(1). **Path LHHH**.

(c) **No.** Equal scores in two different states only say that the best path ending in H and the best path ending in L at position 2 are equally good. Each still has a unique predecessor, and later steps choose between them: position 3's $v_H$ comes from H(2), because staying in H (cost 1) beats switching from L (cost 1.32). A second optimal path would need a tie *within one cell's max*, where two predecessors give the same value for the same state.

**P3** (a) $-24.5/9 \approx -2.7$ bits per base, so about $-2{,}700$ bits for 1,000 bases: $P \approx 2^{-2700}$. That's far below $2^{-1074}$; in probability space the computation returns exactly 0.

(b) $\log$ is strictly increasing, so $\arg\max$ of a product equals $\arg\max$ of the sum of logs. Every comparison Viterbi makes has the same winner, and only the numbers stored change.

(c) Factor out the larger term. If $a \ge b$: $2^a + 2^b = 2^a(1 + 2^{b-a})$, so $\log_2(2^a + 2^b) = a + \log_2(1 + 2^{-(a-b)})$, and symmetrically otherwise. With $a = -10.948$, $b = -11.533$: $|a - b| = 0.585$, $2^{-0.585} = 0.667$, $\log_2 1.667 = 0.737$. Result $-10.948 + 0.737 = \mathbf{-10.211}$. That is the log of the summed probability of ending in L or H at position 4 *along those two best paths*, a first taste of the forward algorithm.

</details>

## Flashback

**From Lesson 2.7 (Tree search & support):** Five taxa, five binary sites whose G-states group the pairs AB, AB, CD, CE, DE. Use the rule from that lesson: a site costs 1 if its pair is a split of the tree, 2 otherwise. (a) Score $((A,B),C,(D,E))$, $((A,B),E,(C,D))$ and $((A,B),D,(C,E))$. (b) Can any 5-taxon tree have length below 7? Prove it. (c) A bootstrap analysis of these data would report what, roughly, for the clade (C, D)?

<details>
<summary>Solution</summary>

(a) Each tree contains the split AB, fitting two sites, and exactly one of CD, CE, DE:
- $((A,B),C,(D,E))$: AB, AB, DE fit; CD, CE don't. Length $5 + 2 = \mathbf{7}$.
- $((A,B),E,(C,D))$: AB, AB, CD fit. Length **7**.
- $((A,B),D,(C,E))$: AB, AB, CE fit. Length **7**.

(b) A 5-taxon unrooted binary tree has exactly two splits of the form "pair versus triple", and its two pairs must be **disjoint** (they sit on opposite sides of the central node). CD, CE and DE pairwise share a taxon, so at most one of them can be a split, and AB counts for at most the two AB sites. The most sites that can fit is $2 + 1 = 3$, so the length is at least $5 + (5 - 3) = 7$. It's attained three ways: a **three-way tie**.

(c) Three trees tie on the full data, and resampling shifts the counts of the CD, CE and DE sites at random. Each of the three trees wins about equally often, so the clade (C, D) gets **one-third** support (an exact count over all $5^5$ replicates gives 33 percent). Meanwhile (A, B) appears in all three optimal trees and gets about **95 percent**, losing only in replicates that happen to draw too few AB sites.

</details>

## Connections

- **Backward:** the model is [3.1](03-01-markov-chains-to-hmms.md)'s; "best path through a DAG of subproblems with back-pointers" is [1.3](01-03-needleman-wunsch-global-alignment.md)'s traceback; the trellis and add–compare–select are [communications 4.4](../../communications/lessons/04-04-convolutional-codes-viterbi.md)'s, with Hamming metrics replaced by log-probabilities.
- **Forward:** [3.3](03-03-forward-backward-posterior-decoding.md) replaces max with sum to get $P(x)$ and posteriors; Viterbi training in [3.4](03-04-training-hmms-baum-welch.md) re-estimates parameters from decoded paths; gene finders ([3.6](03-06-gene-finding.md)) are Viterbi on a structured state graph; profile HMM alignment ([3.5](03-05-profile-hmms.md)) is Viterbi through match, insert and delete states.
- **Sideways:** the max-plus recursion is the Bellman equation for a deterministic shortest-path problem ([reinforcement-learning](../../reinforcement-learning/syllabus.md)); speech recognizers use the same trellis to decode words from acoustic frames.
