# Computational Biology · Lesson 2.6: Tree likelihood & Felsenstein pruning

> ⏱ ~15 min · Module 2: Phylogenetics & evolutionary models · Builds on: [2.5](02-05-substitution-models.md) (transition probabilities), [2.4](02-04-parsimony-fitch-sankoff.md) (DP on a tree) · Unlocks: [2.7](02-07-tree-search-and-support.md) (searching for the ML tree), [3.3](03-03-forward-backward-posterior-decoding.md) (sum over hidden states)

## Why this matters

Maximum likelihood is the standard for building trees from molecular data. It fixes what parsimony gets wrong on long branches ([evolution-ecology 2.3](../../evolution-ecology/lessons/02-03-inferring-trees-dating.md)), because it knows how many changes each branch should carry. It also uses the whole alignment, not a distance summary. But a tree's likelihood is a sum over **every possible assignment of bases to every ancestor**, which is $4^{n-1}$ terms per site for $n$ taxa. For 50 taxa that's $10^{29}$ terms, at every one of thousands of sites.

Felsenstein's pruning algorithm (1981) computes the same number in time linear in $n$. It's Sankoff's parsimony recursion ([2.4](02-04-parsimony-fitch-sankoff.md)) with probabilities in place of costs, and it runs millions of times inside every phylogenetics program. It's also your first sum-product algorithm, the idea behind the forward algorithm for HMMs ([3.3](03-03-forward-backward-posterior-decoding.md)).

## The idea

**Likelihood of a tree = probability of the alignment given the tree.** Treat alignment columns as independent, so the alignment's likelihood is the product of the site likelihoods. Each site's likelihood is a sum over the unknown ancestral bases: for each possible assignment, multiply the root base's prior probability by a transition probability on every branch ([2.5](02-05-substitution-models.md)), then add up.

**The trick is to sum from the leaves inward.** For each node, and each base it could have, store one number: *the probability of everything observed below this node, given that this node has that base*. For a leaf, that's 1 for the observed base and 0 for the others. For an internal node with two children, it's

$$(\text{chance the left child's subtree comes out as observed}) \times (\text{same for the right}),$$

where each factor sums over the child's possible bases, weighted by the transition probability along the branch. The two subtrees are independent given the parent's base, and that's why they multiply.

Each node's four numbers depend only on its children's four numbers, so one pass up the tree finishes the job. At the root, weight by the base frequencies and add.

## The formal version

Fix a rooted binary tree with branch lengths $b$ (expected substitutions per site), a substitution model with transition probabilities $P_{xy}(b)$ and stationary frequencies $\pi$, and one alignment column with observed leaf bases.

**Conditional likelihood vectors.** For each node $v$ and base $x$, let $L_v(x) = P(\text{leaf data below } v \mid v \text{ has base } x)$:

$$\text{leaf: } L_v(x) = \begin{cases}1 & x = \text{observed}\\ 0 & \text{otherwise}\end{cases}$$

$$\text{internal, children } a, b: \ \ L_v(x) = \Big[\sum_y P_{xy}(b_a)\,L_a(y)\Big]\Big[\sum_z P_{xz}(b_b)\,L_b(z)\Big].$$

**Site and alignment likelihood.**

$$L_{\text{site}} = \sum_x \pi_x\,L_{\text{root}}(x), \qquad \ln L = \sum_{\text{sites}} \ln L_{\text{site}} .$$

This is [Felsenstein pruning](../reference.md#felsenstein-pruning). *In words: pass "probability of the data below, for each possible base here" up the tree, multiplying independent subtrees and summing over each child's hidden base.* Cost: $O(n\,k^2)$ per site for $k$ states, against $k^{n-1}$ for brute force.

**Pulley principle.** For a *reversible* model ($\pi_x P_{xy}(b) = \pi_y P_{yx}(b)$, true of JC, K2P and GTR), the likelihood doesn't depend on where the root sits on the tree. Sliding the root along a branch changes nothing. So likelihood scores **unrooted** trees, and the root must come from elsewhere (an outgroup or a clock).

**Maximum likelihood.** Topology and branch lengths are estimated by maximizing $\ln L$: branch lengths by numerical optimization for a fixed topology, topologies by search ([2.7](02-07-tree-search-and-support.md)). For two sequences under JC, the ML branch length has a closed form, and it's exactly the Jukes–Cantor distance (Example 2).

## Picture

![A rooted tree with leaves A and B joined at a node AB, and that node joined with leaf C at the root; all branches have length 0.1. The leaves show one-hot vectors: A for the first two leaves and G for leaf C. Node AB's vector, drawn as four bars on a log scale, is 0.822 for A and about 0.00097 for C, G and T. The root's vector is 0.023 for A, 0.024 for G and about 0.00083 for C and T. The site likelihood is one quarter of the sum of the root vector, 0.01225.](assets/02-06-fig1.svg)

Read the vectors as evidence flowing upward. Node AB is very confident it was A: both children are A and the branches are short. The root is torn between A and G, the two stories "A at the root, C changed on its branch" and "G at the root, the AB lineage changed". Their probabilities are almost equal, 0.023 and 0.024. C and T at the root would need two changes and are about 30 times less likely. The final number sums over all four stories at once, never committing to one.

## Worked examples

**Example 1 (mechanical): one site by hand.** Tree $((A{:}0.1,\ B{:}0.1){:}0.1,\ C{:}0.1)$ under Jukes–Cantor; site: A = A, B = A, C = G. For a branch of length $b$,

$$P_{\text{same}}(b) = \tfrac14 + \tfrac34 e^{-4b/3}, \qquad P_{\text{diff}}(b) = \tfrac14 - \tfrac14 e^{-4b/3}.$$

At $b = 0.1$: $e^{-0.1333} = 0.8752$, so $P_{\text{same}} = 0.9064$ and $P_{\text{diff}} = 0.0312$.

*Node AB.* Both children are one-hot on A, so each factor is just $P_{x\text{A}}$:
$L_{AB}(\text{A}) = 0.9064^2 = 0.8215$; for $x \in \{\text{C},\text{G},\text{T}\}$, $L_{AB}(x) = 0.0312^2 = 0.000974$.

*Root, base A.* Left factor: $\sum_y P_{\text{A}y}L_{AB}(y) = 0.9064(0.8215) + 3(0.0312)(0.000974) = 0.7446 + 0.0001 = 0.7447$. Right factor (leaf C = G): $P_{\text{AG}} = 0.0312$. Product $= 0.02324$.

*Root, base G.* Left: $0.0312(0.8215) + 0.9064(0.000974) + 2(0.0312)(0.000974) = 0.02564 + 0.00088 + 0.00006 = 0.02658$. Right: $P_{\text{GG}} = 0.9064$. Product $= 0.02409$.

*Root, base C* (and, by symmetry, T). Left: the same sum as for G, $0.02658$. Right: $P_{\text{CG}} = 0.0312$. Product $= 0.00083$.

$$L_{\text{site}} = \tfrac14\,(0.02324 + 0.00083 + 0.02409 + 0.00083) = \mathbf{0.01225}.$$

Brute force over the 16 assignments of bases to the two internal nodes gives the same 0.012248. So does moving the root anywhere on the tree: the pulley principle, checked numerically.

**Example 2 (why you'd care): the JC distance is the ML distance.** Two sequences of length $n$ differ at $k$ sites. Under JC with branch length $d$ between them, a matching site has probability $\tfrac14 P_{\text{same}}(d)$, and a differing site (one specific other base) $\tfrac14 P_{\text{diff}}(d)$. So

$$\ln L(d) = (n-k)\ln P_{\text{same}}(d) + k\ln P_{\text{diff}}(d) + \text{const}.$$

Write $u = e^{-4d/3}$. Maximizing over $u$ gives $\frac{n-k}{1/4 + 3u/4}\cdot\frac34 = \frac{k}{1/4 - u/4}\cdot\frac14$. Solving yields $\tfrac34(1 - u) = k/n$. That's $p = \hat p$, the observed fraction, so

$$\hat d = -\tfrac34\ln\!\Big(1 - \tfrac43\,\frac{k}{n}\Big).$$

With $n = 200$ and $k = 50$: $\hat d = -0.75\ln(2/3) = \mathbf{0.304}$. A numerical maximization of $\ln L$ lands on the same value. The distance formula of [2.5](02-05-substitution-models.md) isn't just an inversion trick. It's the maximum-likelihood estimate, and likelihood extends it to trees of any size, where no closed form exists.

## Watch out

- **You might multiply** site likelihoods directly — **but actually** a product of thousands of numbers around 0.01 underflows to zero in floating point. Programs sum log site likelihoods, and rescale conditional likelihood vectors at internal nodes to keep them in range.
- **You might think** likelihood picks a root — **but actually** with reversible models it's invariant to root position, so ML trees are unrooted. Rooting needs an outgroup, or a non-reversible or clock model.
- **You might treat** $L_v(x)$ as the probability that node $v$ *is* base $x$ — **but actually** it's the probability of the data *below* $v$, given $x$. Turning it into a posterior for the ancestral base needs the data above $v$ as well (a second, downward pass) and the prior — the same forward–backward structure as [3.3](03-03-forward-backward-posterior-decoding.md).

## One-liner

> Felsenstein pruning computes a tree's likelihood by passing, for every node and every base, the probability of the data below it up the tree — Sankoff's recursion with sums and products — turning a $4^{n-1}$-term sum into linear time.

## Problems

**P1 (🟢)** Under Jukes–Cantor with a branch of length $b = 0.2$: (a) compute $P_{\text{same}}$ and $P_{\text{diff}}$; (b) two leaves joined at a node by branches of 0.2 each show T and C. Compute the node's conditional likelihood vector $(L(\text{A}), L(\text{C}), L(\text{G}), L(\text{T}))$.

**P2 (🟡)** (a) Continuing P1, treat that node as the root with $\pi = \tfrac14$ each. What is the site likelihood? (b) Show that it equals $\tfrac14 P_{\text{diff}}(0.4)$ — the likelihood of the same two leaves joined directly by a single branch of length 0.4 — and say which principle this illustrates.

**P3 (🔴)** Four taxa, 100 sites. Under fixed branch lengths, each site pattern's likelihood on three topologies is:

| pattern (A B C D) | count | on AB \| CD | on AC \| BD | on AD \| BC |
|---|---|---|---|---|
| all four the same | 70 | 0.1530 | 0.1530 | 0.1530 |
| one taxon differs | 20 | 0.005467 | 0.005467 | 0.005467 |
| x x y y | 6 | 0.005653 | 0.000377 | 0.000377 |
| x y x y | 3 | 0.000377 | 0.005653 | 0.000377 |
| x y y x | 1 | 0.000377 | 0.000377 | 0.005653 |

(a) Which rows can be ignored when *comparing* topologies, and why? (b) Compute $\ln L(\text{AB|CD}) - \ln L(\text{AC|BD})$ and $\ln L(\text{AB|CD}) - \ln L(\text{AD|BC})$. (c) Parsimony on the same data would prefer AB | CD as well. Give one situation in which the two methods would disagree.

<details>
<summary>Solutions</summary>

**P1** (a) $e^{-4(0.2)/3} = e^{-0.2667} = 0.7659$. $P_{\text{same}} = 0.25 + 0.75(0.7659) = \mathbf{0.8244}$, $P_{\text{diff}} = 0.25 - 0.25(0.7659) = \mathbf{0.0585}$.

(b) $L(x) = P_{x\text{T}}(0.2)\,P_{x\text{C}}(0.2)$:
- $L(\text{A}) = 0.0585 \times 0.0585 = 0.00342$
- $L(\text{C}) = 0.0585 \times 0.8244 = 0.0482$
- $L(\text{G}) = 0.00342$
- $L(\text{T}) = 0.8244 \times 0.0585 = 0.0482$

**P2** (a) $\tfrac14(0.00342 + 0.0482 + 0.00342 + 0.0482) = \tfrac14(0.1033) = \mathbf{0.0258}$.

(b) $e^{-4(0.4)/3} = e^{-0.5333} = 0.5866$, so $P_{\text{diff}}(0.4) = 0.25 - 0.25(0.5866) = 0.1034$, and $\tfrac14 P_{\text{diff}}(0.4) = \mathbf{0.0258}$. Same number. This is the **pulley principle**: under a reversible model the root can slide to a leaf, and the two branches of 0.2 act like one branch of 0.4. (It's also Chapman–Kolmogorov: $P(0.2)\,P(0.2) = P(0.4)$.)

**P3** (a) The "all the same" and "one taxon differs" rows have **identical likelihoods on all three trees**, so they add the same amount to every $\ln L$ and cancel in any difference. Only the three informative pattern rows matter.

(b) Let $r = \ln(0.005653/0.000377) = \ln 15.0 = 2.708$.
- AB | CD vs AC | BD: the xxyy row gains $r$ per site on AB | CD and the xyxy row loses $r$. $\Delta = (6 - 3)\,r = 3(2.708) = \mathbf{8.12}$.
- AB | CD vs AD | BC: $\Delta = (6 - 1)\,r = \mathbf{13.54}$.

AB | CD is the ML tree, by a wide margin.

(c) They disagree in the **long-branch attraction** zone. Suppose A and C sit on very long branches and the internal branch is short. Chance parallel changes on the two long branches then produce many xyxy sites. Parsimony counts each one as support for AC | BD. Likelihood, with the branch lengths in hand, recognizes that xyxy patterns are *expected* on long branches under AB | CD and doesn't treat them as evidence of grouping ([evolution-ecology 2.3](../../evolution-ecology/lessons/02-03-inferring-trees-dating.md)).

</details>

## Flashback

**From Lesson 2.4 (Parsimony):** Five taxa, one site: A = A, B = G, C = G, D = A, E = A. (a) Run Fitch's algorithm on $((A,B),(C,(D,E)))$, giving the set at every internal node and the length. (b) Give one optimal reconstruction of ancestral states, and say on which branches the changes fall. (c) What is the length of the same site on $((B,C),(A,(D,E)))$? Is the site informative?

<details>
<summary>Solution</summary>

(a) Node AB: $\{A\} \cap \{G\} = \varnothing$, so $\{A,G\}$, +1. Node DE: $\{A\}$. Node C(DE): $\{G\} \cap \{A\} = \varnothing$, so $\{A,G\}$, +1. Root: $\{A,G\} \cap \{A,G\} = \{A,G\}$. **Length 2.**

(b) *Accept criterion: any assignment with exactly two changes.* Root A: node AB takes A (A is in its set), so A→G falls on the branch to B; node C(DE) and node DE take A, so A→G falls on the branch to C. Root G works equally well: node AB = G puts G→A on the branch to A, and node C(DE) = G puts G→A on the branch down to node DE.

(c) On $((B,C),(A,(D,E)))$: node BC is $\{G\}$, node A(DE) is $\{A\}$, root union: **length 1**. The site is **informative** (A appears three times, G twice), and it prefers the second tree by one step.

</details>

## Connections

- **Backward:** the transition probabilities are [2.5](02-05-substitution-models.md)'s $e^{Qt}$; the recursion is [2.4](02-04-parsimony-fitch-sankoff.md)'s Sankoff with $(\min, +)$ replaced by $(+, \times)$; long-branch attraction, which likelihood repairs, is [evolution-ecology 2.3](../../evolution-ecology/lessons/02-03-inferring-trees-dating.md)'s.
- **Forward:** [2.7](02-07-tree-search-and-support.md) maximizes this likelihood over topologies and puts support values on the result; the forward algorithm of [3.3](03-03-forward-backward-posterior-decoding.md) is pruning on a chain instead of a tree, and posterior decoding is its two-pass version.
- **Sideways:** summing out hidden variables node by node on a tree is belief propagation in a tree-structured graphical model; the ML-equals-closed-form result of Example 2 is the same maximum-likelihood machinery as [econometrics 5.1](../../econometrics/lessons/05-01-maximum-likelihood-estimation.md), where a sufficient statistic (here $k/n$) carries all the information.
