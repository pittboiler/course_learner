# Computational Biology · Lesson 2.7: Tree search & support

> ⏱ ~15 min · Module 2: Phylogenetics & evolutionary models · Builds on: [2.6](02-06-tree-likelihood-felsenstein-pruning.md) (scoring a tree), [2.4](02-04-parsimony-fitch-sankoff.md) (parsimony scores), [2.3](02-03-neighbor-joining.md) (starting trees), [evolution-ecology 2.3](../../evolution-ecology/lessons/02-03-inferring-trees-dating.md) (tree counts, long-branch attraction) · Unlocks: [3.1](03-01-markov-chains-to-hmms.md) (probabilistic models of sequences)

## Why this matters

[Evolution-ecology 2.3](../../evolution-ecology/lessons/02-03-inferring-trees-dating.md) showed that exhaustive search is hopeless: 30 taxa already give $10^{38}$ rooted trees. So every published maximum-likelihood or parsimony tree was found by **local search**, and it comes with two questions that lesson left open. How does the search move through tree space, and how does it get stuck? And once you have a tree, how much should you believe each of its branches?

The answers are the everyday vocabulary of phylogenetics papers: NNI and SPR moves, multiple random starts, bootstrap percentages, posterior probabilities. Each has a precise meaning, and each is commonly misread. In particular, a bootstrap value of 100 does not mean a clade is true.

## The idea

**Search: hill-climbing with rearrangements.** Start from a reasonable tree, usually neighbor-joining ([2.3](02-03-neighbor-joining.md)). Repeatedly try every tree one **rearrangement** away, and move to the best if it improves the score. Stop when no neighbour improves: a **local optimum**.

- **NNI** (nearest-neighbour interchange): pick an internal edge. Four subtrees hang off its ends; swap one subtree across the edge. Two alternatives per edge. Cheap and small.
- **SPR** (subtree pruning and regrafting): cut off any subtree and reattach it on any edge of the rest. Many more neighbours, and large jumps.
- **TBR** (tree bisection and reconnection): cut any edge and reconnect the two pieces at any pair of edges. Larger still.

A bigger neighbourhood costs more per step, but it escapes local optima that trap smaller ones. Practical programs mix moves and restart from several starting trees.

**Support: resample the data.** The **nonparametric bootstrap** asks how much the result depends on which sites you happened to sample. Build a new alignment of the same length by drawing columns *with replacement*. Rebuild the tree, and repeat a few hundred times. A clade's **bootstrap support** is the fraction of replicate trees containing it.

A clade supported by 95 percent of replicates is one that the data consistently point to. Whether the data point to the *truth* is a separate question, which the bootstrap can't answer.

## The formal version

**Tree space.** The number of unrooted binary trees on $n$ labelled taxa is

$$(2n-5)!! = 1 \times 3 \times 5 \times \cdots \times (2n-5),$$

which is 3 for $n = 4$, 105 for $n = 6$ and $2{,}027{,}025$ for $n = 10$. (The rooted count in evolution-ecology 2.3 is the unrooted count for $n+1$ taxa.)

**Neighbourhood sizes** for an unrooted binary tree with $n \ge 4$ taxa:

$$|\text{NNI}| = 2(n-3), \qquad |\text{SPR}| = 2(n-3)(2n-7).$$

*In words: $n-3$ internal edges with two swaps each for NNI; SPR's count is quadratic in $n$.* These are the [tree rearrangement moves](../reference.md#tree-rearrangement-moves). For $n = 50$: 94 NNI neighbours against 8,742 SPR neighbours.

**Hill-climbing.** Given a score $f$ (parsimony length to minimize, or $\ln L$ to maximize), and neighbourhood $N(T)$:

$$T_{k+1} = \arg\operatorname{best}_{T' \in N(T_k)} f(T') \ \ \text{if it improves on } f(T_k); \text{ otherwise stop.}$$

A tree is a **local optimum** for $N$ if no neighbour improves on it. The global optimum is a local optimum for every neighbourhood, but not conversely.

**Nonparametric bootstrap** (Felsenstein, 1985). For $B$ replicates: resample $L$ columns with replacement from the $L$-column alignment; infer a tree; record its clades. The [bootstrap support](../reference.md#bootstrap-support) of clade $C$ is

$$\text{BS}(C) = \frac{1}{B}\,\#\{\,b : C \in T_b\,\}.$$

*In words: the fraction of resampled datasets whose best tree contains the clade.* It estimates how often the method would recover $C$ if the data were redrawn from the same site distribution. It isn't the probability that $C$ is true.

**Bayesian posterior probability.** Put a prior on trees and branch lengths, and sample trees in proportion to $P(\text{tree} \mid \text{data}) \propto P(\text{data} \mid \text{tree})\,P(\text{tree})$ by Markov chain Monte Carlo, using the likelihood of [2.6](02-06-tree-likelihood-felsenstein-pruning.md). A clade's posterior probability is the fraction of sampled trees containing it. It *is* a probability of truth — but only under the model and prior, and it tends to run higher than bootstrap support for the same clade.

## Picture

![A current unrooted tree drawn with four subtrees S1 and S2 on one side of a highlighted internal edge and S3 and S4 on the other. Below, its two nearest-neighbour interchange alternatives: one swaps S2 with S3, giving S1 S3 against S2 S4; the other swaps S2 with S4, giving S1 S4 against S3 S2. A caption notes that n taxa give n minus 3 internal edges and so 2 times n minus 3 NNI neighbours, while SPR reaches 2 times n minus 3 times 2n minus 7.](assets/02-07-fig1.svg)

The four triangles can be single taxa or huge subtrees, so an NNI can move a lot of the tree. But it only ever rearranges around **one** edge, by one step. The three ways of splitting four subtrees into two pairs are the current tree and its two neighbours. A search that needs to change two edges at once, with the intermediate tree worse than both endpoints, can never get there by NNI alone (Example 1).

## Worked examples

**Example 1 (mechanical): a local optimum.** Five taxa A–E and five binary sites. Each site groups two taxa (state G) against three (state A):

| site | 1 | 2 | 3 | 4 | 5 |
|---|---|---|---|---|---|
| taxa showing G | A, B | C, E | B, E | A, B | A, C |

For a 5-taxon unrooted tree, write it by its two internal splits, e.g. $((A,B),D,(C,E))$ has splits AB and CE. A site whose G-pair is one of the tree's splits costs **1** change; any other pair costs **2**. So

$$\text{length} = 5 + \#\{\text{sites whose pair is not a split of the tree}\}.$$

- $T^* = ((A,B),D,(C,E))$: pairs AB, CE, AB fit, and BE, AC don't. **Length 7**, the global minimum.
- $T_0 = ((A,C),D,(B,E))$: AC and BE fit, and AB, CE, AB don't. **Length 8**.

$T_0$'s four NNI neighbours each keep one of its splits and replace the other: $((A,C),E,(B,D))$, $((A,C),B,(D,E))$, $((A,D),C,(B,E))$ and $((B,E),A,(C,D))$. Each keeps at most one fitting pair and fits no new one: every neighbour has **length 9**. So $T_0$ is a strict **local optimum under NNI**, one step worse than the best tree.

Getting from $T_0$ to $T^*$ requires replacing *both* splits, and every tree on the way is worse. SPR's larger neighbourhood contains $((A,B),C,(D,E))$, which *ties* $T_0$ at length 8 but fits the AB pair twice. A search that accepts equal-score moves can step there, and one NNI further reaches $T^*$. This is why programs use SPR or TBR moves, accept sideways steps, and restart from many starting trees.

**Example 2 (why you'd care): bootstrap support, computed exactly.** Take the four-taxon data of [2.6](02-06-tree-likelihood-felsenstein-pruning.md) P3: 100 sites, of which 6 show the pattern xxyy (supporting AB | CD), 3 show xyxy (AC | BD), 1 shows xyyx (AD | BC), and 90 are uninformative. A replicate draws 100 sites with replacement, so the informative counts are multinomial with probabilities 0.06, 0.03, 0.01. The replicate's parsimony (and here likelihood) tree is whichever pattern count is largest, with ties split evenly. Summing the multinomial exactly:

| clade | bootstrap support |
|---|---|
| AB \| CD | **84 percent** |
| AC \| BD | 15 percent |
| AD \| BC | 1 percent |

Six sites against three is decent evidence, but not overwhelming: one replicate in six picks the other tree.

Now scale the data up at the **same proportions**. Simulation gives 92 percent support at 200 sites and 98 percent at 400. Support climbs toward 100 as data accumulate. Good, if the site pattern proportions reflect the true tree. But suppose long-branch attraction ([evolution-ecology 2.3](../../evolution-ecology/lessons/02-03-inferring-trees-dating.md)) inflates the xyxy patterns, so the true tree is AB | CD while the data run 3 percent xxyy and 5 percent xyxy. Then support for the **wrong** tree AC | BD is 75 percent at 100 sites, 94 percent at 500, and 99 percent at 1,000. **The bootstrap measures consistency, not correctness.**

## Watch out

- **You might read** 95 percent bootstrap support as "95 percent probability the clade is true" — **but actually** it's the fraction of resampled datasets that give the clade. A systematic bias (long-branch attraction, a wrong model, alignment error) is resampled right along with the data and can produce 100 percent support for a wrong clade.
- **You might trust** one search run's tree as the optimum — **but actually** it's a local optimum for the moves used. Run several starts (random or perturbed trees). If they reach different scores, the reported tree is only the best one found.
- **You might compare** bootstrap percentages and posterior probabilities as if on one scale — **but actually** posteriors typically run higher than bootstrap values for the same clade, and they can be overconfident when the model is wrong. Report which one you mean.

## One-liner

> Trees are found by hill-climbing through NNI, SPR or TBR rearrangements, which stops at local optima, and their branches are judged by bootstrap resampling — which measures how consistently the data point to a clade, and climbs just as happily toward a wrong one.

## Problems

**P1 (🟢)** For $n = 6$ and $n = 20$ taxa, give (a) the number of unrooted binary trees, (b) the number of NNI neighbours of any tree, and (c) the number of SPR neighbours. (d) At $n = 20$, what fraction of all trees is one SPR neighbourhood?

**P2 (🟡)** In Example 1: (a) verify that $((A,B),C,(D,E))$ has length 8; (b) give the NNI neighbour of $((A,B),C,(D,E))$ that is $T^*$, and name the swap; (c) verify that $((A,D),C,(B,E))$, an NNI neighbour of $T_0$, has length 9.

**P3 (🔴)** A clade receives 99 percent bootstrap support from a 2,000-site alignment. (a) Explain precisely what that number estimates. (b) Give two different reasons the clade could still be wrong. (c) Propose one analysis that could detect each, and say what result would worry you.

<details>
<summary>Solutions</summary>

**P1**

| | $n = 6$ | $n = 20$ |
|---|---|---|
| (a) unrooted trees $(2n-5)!!$ | $7!! = 105$ | $35!! \approx 2.2\times10^{20}$ |
| (b) NNI $2(n-3)$ | 6 | 34 |
| (c) SPR $2(n-3)(2n-7)$ | 30 | $2(17)(33) = 1{,}122$ |

(d) $1{,}122 / 2.2\times10^{20} \approx 5\times10^{-18}$. Even SPR, the "large" move, sees a vanishing sliver of tree space per step. Search works only because good trees tend to have good neighbours.

**P2** (a) Splits AB and DE. Site pairs: AB fits (sites 1 and 4), CE doesn't, BE doesn't, AC doesn't. That's 3 misfits: $5 + 3 = \mathbf{8}$.

(b) The tree $((A,B),C,(D,E))$ has internal edges AB | CDE and ABC | DE. Around the edge ABC | DE, the four subtrees are (A,B) and C on one side, D and E on the other. Swapping **C with E** gives $((A,B),E,(C,D))$; swapping **C with D** gives $((A,B),D,(C,E))$, which is **$T^*$**, with length 7.

(c) $((A,D),C,(B,E))$ has splits AD and BE. Only BE fits (site 3); AB, CE, AB, AC don't. That's 4 misfits: $5 + 4 = \mathbf{9}$.

**P3** (a) It estimates the fraction of alignments of 2,000 columns, drawn from the same distribution of site patterns as the observed one, whose inferred tree (by this method and model) contains the clade. It measures how *stable* the inference is to sampling variation among sites.

(b) Any systematic error survives resampling. Two examples: **long-branch attraction** or another model violation, where fast-evolving lineages share convergent states the model doesn't account for; and **incomplete lineage sorting or gene-tree discordance**, where the 2,000 sites come from one gene whose history differs from the species tree ([evolution-ecology 2.3](../../evolution-ecology/lessons/02-03-inferring-trees-dating.md)). Alignment errors are a third.

(c) For long-branch attraction: remove one long-branch taxon, or remove the fastest-evolving sites, or rerun under a richer model (GTR+Γ). Worry if the clade collapses or the remaining long branch moves. For gene-tree discordance: infer trees from many independent loci and look at their distribution. Worry if a substantial fraction of loci disagree with the clade, whatever each one's bootstrap.

</details>

## Flashback

**From Lesson 2.5 (Substitution models):** A lineage accumulates $d = 0.5$ substitutions per site. (a) Under Jukes–Cantor, what fraction of sites differ from the ancestor? (b) Under Kimura with $\kappa = \alpha/\beta = 2$, find $\alpha t$ and $\beta t$, and then the fractions $P$ (transitions) and $Q$ (transversions). (c) Plug $P$ and $Q$ into the K2P distance formula and confirm that it returns 0.5.

<details>
<summary>Solution</summary>

(a) $p = \tfrac34\big(1 - e^{-4(0.5)/3}\big) = 0.75(1 - 0.5134) = \mathbf{0.365}$.

(b) $d = (\alpha + 2\beta)t = (2\beta + 2\beta)t = 4\beta t = 0.5$, so $\beta t = \mathbf{0.125}$ and $\alpha t = \mathbf{0.25}$.
$P = \tfrac14 - \tfrac12 e^{-2(0.375)} + \tfrac14 e^{-0.5} = 0.25 - 0.5(0.4724) + 0.25(0.6065) = 0.25 - 0.2362 + 0.1516 = \mathbf{0.1654}$.
$Q = \tfrac12 - \tfrac12 e^{-0.5} = 0.5 - 0.3033 = \mathbf{0.1967}$.
Total difference $0.362$, slightly below JC's $0.365$.

(c) $1 - 2P - Q = 1 - 0.3309 - 0.1967 = 0.4724$ and $1 - 2Q = 0.6065$. $d = -\tfrac12\ln 0.4724 - \tfrac14\ln 0.6065 = 0.375 + 0.125 = \mathbf{0.500}$. The two pieces are exactly $2(\alpha+\beta)t/2$ and $4\beta t/4$.

</details>

## Connections

- **Backward:** the scores being climbed are [2.4](02-04-parsimony-fitch-sankoff.md)'s parsimony length and [2.6](02-06-tree-likelihood-felsenstein-pruning.md)'s log-likelihood; the starting tree is [2.3](02-03-neighbor-joining.md)'s; the tree counts and the failure modes being guarded against are [evolution-ecology 2.3](../../evolution-ecology/lessons/02-03-inferring-trees-dating.md)'s.
- **Forward:** Module 3 moves from trees to chains: [3.1](03-01-markov-chains-to-hmms.md)'s hidden Markov models use the same likelihood-and-hidden-states logic on one sequence at a time; MCMC over hidden structure reappears in [4.5](04-05-imputation-and-fine-mapping.md)'s fine-mapping.
- **Sideways:** the bootstrap is the resampling procedure of [econometrics 2.6](../../econometrics/lessons/02-06-bootstrap-and-few-clusters.md), applied to alignment columns as the independent units; NNI and SPR hill-climbing is local search on a discrete space with no convexity, so nothing like [convex-optimization 2.1](../../convex-optimization/lessons/02-01-convex-problem-local-global.md)'s "every local optimum is global" can rescue it.
