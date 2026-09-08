# Machine Learning · Lesson 2.5: Decision trees

> ⏱ ~15 min · Module 2: Classification — margins, trees, and ensembles · Builds on: [1.2 (bias–variance)](01-02-generalization-and-the-bias-variance-tradeoff.md), [2.1 (the perceptron and XOR)](02-01-the-perceptron-and-linear-separability.md) · Unlocks: 2.6 (bagging and random forests), 2.7 (boosting)

## Why this matters

Everything in Module 2 so far draws a boundary by moving a weight vector around. A tree does something else entirely: it asks a sequence of yes/no questions about one feature at a time and carves feature space into boxes. That buys two things nothing else in this course gives you. A tree needs **no feature scaling** — it only ever compares a feature to a threshold, so measuring tenure in months or years changes nothing — and its prediction comes with **a reason you can read out loud**: "this customer churns because they called support twice and have been here four months."

It also buys the worst variance of any model in this course, which is why the next two lessons exist. And it is a **greedy** algorithm, so the habit from [algorithms 2.1](../../algorithms/lessons/02-01-the-greedy-method-and-interval-scheduling.md) applies: a greedy rule needs a proof or a counterexample. Here the counterexample wins, and the shape of the failure is exactly what 2.6 and 2.7 are built to repair.

## The idea

Twenty questions. Each internal node asks one question of the form "is feature $j$ at most $\theta$?"; you follow yes or no down to a leaf; the leaf predicts the majority label of the training rows that landed in it.

Growing the tree is where the work is, and the rule is embarrassingly simple:

> At the current node, try **every** question you could ask. Score each by how much purer it makes the children. Take the best one, split, and recurse on both sides.

"Purer" needs a number. A node holding 4 churns and 1 stay is nearly settled; a node holding 3 and 3 tells you nothing. An **impurity** function turns that feeling into a scalar that is $0$ when a node is all one class and maximal when the classes are evenly mixed. Two are standard, and they mean different things:

- **Gini** is the probability you get the label wrong if you guess by drawing a label at random from the node's own mix.
- **Entropy** is the number of bits you would need, on average, to transmit the label of a row in the node — the same quantity as in [information-theory 1.1](../../information-theory/lessons/01-01-entropy-uncertainty-surprise.md).

Both drop as a node gets lopsided. The **gain** of a split is the parent's impurity minus the size-weighted average impurity of the children — how much uncertainty the question bought you. Greedy takes the largest gain and never reconsiders it.

## The formal version

Let a node $t$ hold $n$ training rows, a fraction $p_k$ of them in class $k$. The two [impurities](../reference.md#gini-impurity) are

$$I_{\mathrm{Gini}}(t) = 1 - \sum_k p_k^2, \qquad I_{\mathrm{ent}}(t) = -\sum_k p_k \log_2 p_k .$$

*In words:* both are $0$ exactly when the node is pure and largest when the classes are balanced. For two classes the maxima differ — Gini tops out at $1/2$, [entropy](../reference.md#entropy) at $1$ bit — so **the two numbers are not on the same scale.**

A split $s$ sends $n_c$ rows into each child $c$. Its [information gain](../reference.md#information-gain) is

$$\Delta(s) \;=\; I(t) \;-\; \sum_c \frac{n_c}{n}\, I(c).$$

*In words:* impurity before, minus the average impurity after, with each child weighted by how many rows it got — so a large impure child hurts more than a small one. With entropy, $\Delta$ is exactly the mutual information between the label and the answer to the question ([information-theory 1.3](../../information-theory/lessons/01-03-mutual-information.md)).

$\Delta(s) \ge 0$ always, for either impurity: both are concave in $p$, and Jensen's inequality ([information-theory 1.4](../../information-theory/lessons/01-04-relative-entropy-kl-jensen.md)) says the average of a concave function over the children never exceeds the function of the average. **A split can never make things worse by this yardstick** — which, as P3 shows, is precisely the problem.

**The growth rule.**

```
GROW(S):
    if S is pure, or |S| < min_size, or depth limit hit:
        return leaf(majority label of S)
    (j, theta) <- argmax over all features j and thresholds theta of gain(S, j, theta)
    if gain(j, theta) <= 0:  return leaf(majority label of S)
    L <- {rows of S with x_j <= theta};  R <- S \ L
    return node(j, theta, GROW(L), GROW(R))
```

Candidate thresholds are the midpoints between consecutive distinct values of a feature, so with $n$ rows and $d$ features there are at most $d(n-1)$ questions to try at a node. Sweeping a presorted feature and updating class counts incrementally makes each candidate $O(1)$, so a node costs $O(dn)$; every row appears in exactly one node per level, so a whole level costs $O(dn)$ and a depth-$D$ tree costs $O(dnD)$ after an initial $O(dn\log n)$ sort.

**Pruning.** Grown to purity a tree memorises. So grow deep, then cut back by [cost-complexity](../reference.md#cost-complexity-pruning):

$$R_\alpha(T) \;=\; R(T) + \alpha\,\lvert T\rvert,$$

where $R(T)$ is the training misclassification rate and $\lvert T\rvert$ the number of leaves. *In words:* pay $\alpha$ for every leaf you keep. This is [1.4's](01-04-regularization-ridge-and-lasso.md) penalised objective with leaf count as the complexity measure, and $\alpha$ is chosen the same way $\lambda$ was — by cross-validation ([4.1](04-01-model-selection-and-cross-validation.md)).

## Picture

![A two-panel figure. Left: ten customers plotted with support calls on the horizontal axis and tenure in months on the vertical, three numbered coral lines carving the plane into four rectangular regions. Right: the matching decision tree, its three internal nodes numbered to match the lines.](assets/02-05-fig1.svg)

Read the two panels together and the recursion becomes visible. Cut 1 runs the full height of the plot, because the root sees every row. Cut 2 only runs to the *right* of cut 1 — it is asked inside one child, so it cannot touch the other. Cut 3 is shorter still. **Each split is a cut inside a box, never across the whole plane**, which is why a tree can express interactions a single linear boundary cannot, and why its boundary is always a staircase of axis-parallel steps.

## Worked examples

**Example 1 (mechanical): one full split search.** Ten customers; features are support calls last month and tenure in months; the label is whether they churned.

| id | calls | tenure | outcome | | id | calls | tenure | outcome |
|---|---|---|---|---|---|---|---|---|
| 1 | 2 | 2 | churn | | 6 | 2 | 30 | stay |
| 2 | 3 | 6 | churn | | 7 | 1 | 18 | stay |
| 3 | 3 | 18 | churn | | 8 | 0 | 30 | stay |
| 4 | 1 | 2 | churn | | 9 | 0 | 6 | stay |
| 5 | 1 | 6 | churn | | 10 | 0 | 18 | stay |

Five churn, five stay, so the root has $p = (\tfrac12,\tfrac12)$ and

$$I_{\mathrm{Gini}} = 1 - \tfrac14 - \tfrac14 = \tfrac12, \qquad I_{\mathrm{ent}} = 1 \text{ bit}.$$

Calls take the distinct values $0,1,2,3$ and tenure takes $2,6,18,30$, so there are $3 + 3 = 6$ candidate questions. Two of them, in full:

*Calls $\le 0.5$.* Left gets rows 8, 9, 10 — all stay, so $I = 0$. Right gets the other seven, 5 churn and 2 stay:

$$I_{\mathrm{Gini}}(\text{right}) = 1 - \left(\tfrac57\right)^2 - \left(\tfrac27\right)^2 = 1 - \tfrac{25}{49} - \tfrac{4}{49} = \tfrac{20}{49}.$$

$$\Delta_{\mathrm{Gini}} = \tfrac12 - \left[\tfrac{3}{10}\cdot 0 + \tfrac{7}{10}\cdot\tfrac{20}{49}\right] = \tfrac12 - \tfrac27 = \tfrac{3}{14} \approx 0.2143.$$

*Tenure $\le 12$.* Left gets rows 1, 2, 4, 5, 9 — 4 churn, 1 stay; right gets 3, 6, 7, 8, 10 — 1 churn, 4 stay. Both children have the same mix up to relabelling, so both have $I_{\mathrm{Gini}} = 1 - \tfrac{16}{25} - \tfrac1{25} = \tfrac{8}{25}$, and

$$\Delta_{\mathrm{Gini}} = \tfrac12 - \tfrac{8}{25} = \tfrac{9}{50} = 0.18.$$

All six, sorted by Gini gain (children written as churn/stay counts):

| question | left | right | wtd. Gini | $\Delta_{\mathrm{Gini}}$ | wtd. entropy | $\Delta_{\mathrm{ent}}$ |
|---|---|---|---|---|---|---|
| **calls $\le 0.5$** | (0, 3) | (5, 2) | **0.2857** | **0.2143** | **0.6042** | **0.3958** |
| tenure $\le 12$ | (4, 1) | (1, 4) | 0.3200 | 0.1800 | 0.7219 | 0.2781 |
| calls $\le 2.5$ | (3, 5) | (2, 0) | 0.3750 | 0.1250 | 0.7636 | 0.2364 |
| tenure $\le 4$ | (2, 0) | (3, 5) | 0.3750 | 0.1250 | 0.7636 | 0.2364 |
| tenure $\le 24$ | (5, 3) | (0, 2) | 0.3750 | 0.1250 | 0.7636 | 0.2364 |
| calls $\le 1.5$ | (2, 4) | (3, 1) | 0.4167 | 0.0833 | 0.8755 | 0.1245 |

Winner: **calls $\le 0.5$**, and the entropy column ranks all six identically. Note the three-way tie in the middle — three completely different questions, all worth exactly $1/8$ under Gini, because all three produce a 2-row pure child and an 8-row (3, 5) child up to relabelling.

**Example 2 (why you'd care): finishing the tree, then cutting it back.** The left child of the root is pure — rows 8, 9, 10, all stay — so it becomes a leaf. The right child holds the other seven rows, 5 churn and 2 stay, impurity $20/49 \approx 0.4082$. Re-running the search *inside that node only*:

| question | left | right | wtd. Gini | $\Delta_{\mathrm{Gini}}$ | $\Delta_{\mathrm{ent}}$ |
|---|---|---|---|---|---|
| **tenure $\le 12$** | (4, 0) | (1, 2) | **0.1905** | **0.2177** | **0.4696** |
| tenure $\le 24$ | (5, 1) | (0, 1) | 0.2381 | 0.1701 | 0.3060 |
| calls $\le 2.5$ | (3, 2) | (2, 0) | 0.3429 | 0.0653 | 0.1696 |
| tenure $\le 4$ | (2, 0) | (3, 2) | 0.3429 | 0.0653 | 0.1696 |
| calls $\le 1.5$ | (2, 1) | (3, 1) | 0.4048 | 0.0034 | 0.0060 |

Tenure $\le 12$ wins with gain $32/147 \approx 0.2177$ — **larger than the root's gain of $3/14 \approx 0.2143$.** Gain is not monotone as you descend; a question that looked mediocre globally can be decisive inside one box. That is the whole reason a tree beats a stump.

Its left child (rows 1, 2, 4, 5) is pure churn. Its right child is rows 3, 6, 7 — one churn, two stay — and `calls <= 2.5` splits it perfectly. Three questions, four leaves, **zero training error on all ten rows**, which should make you suspicious rather than pleased: the last leaf contains exactly one customer.

Cost-complexity says so too. Collapsing the deepest split first, and writing $R$ as the training error rate:

| subtree | leaves $\lvert T\rvert$ | errors | $R(T)$ | $R_\alpha(T)$ |
|---|---|---|---|---|
| full tree | 4 | 0 | 0.0 | $4\alpha$ |
| drop split 3 | 3 | 1 | 0.1 | $0.1 + 3\alpha$ |
| drop splits 2, 3 | 2 | 2 | 0.2 | $0.2 + 2\alpha$ |
| root only | 1 | 5 | 0.5 | $0.5 + \alpha$ |

The full tree wins for $\alpha < 0.1$; the two-leaf tree for $0.1 < \alpha < 0.3$; the bare root beyond that. And notice the three-leaf tree: it beats the full tree only when $\alpha > 0.1$ and beats the two-leaf tree only when $\alpha < 0.1$, so **it is never optimal for any $\alpha$** and never appears on the pruning path. That is generic — cost-complexity produces a *nested sequence* of subtrees, and most subtrees are not in it.

## Watch out

- **You might think** a gain of $0.40$ beats a gain of $0.22$ — **but actually** check which impurity produced each. Binary Gini maxes out at $0.5$ and binary entropy at $1$ bit, so entropy gains run roughly twice as large across the board. In Example 1 the winning split scores $0.2143$ by Gini and $0.3958$ by entropy; same split, same ranking, different scale. **Compare gains only within one impurity.**
- **You might think** information gain measures how useful a feature is — **but actually** it is badly biased toward features with many distinct values. Add a customer-ID column and it splits every row into its own pure leaf, scoring the maximum possible gain (the entire parent impurity) while predicting nothing about a new customer. The standard fixes are the *gain ratio* — divide $\Delta$ by the entropy of the split itself, penalising many-way partitions — or restricting to binary splits, as above.
- **You might think** zero training error means the tree found the structure — **but actually** an unpruned tree reaches zero training error on almost any dataset, since it keeps splitting until every leaf is pure. Depth is this model's variance knob, playing exactly the role $C$ played in [2.3](02-03-soft-margins-and-the-svm-dual.md) and $\gamma$ in [2.4](02-04-the-kernel-trick.md). Trees are the highest-variance model in this course — move one row across a threshold near the root and every split beneath it can change — which is what [1.2's](01-02-generalization-and-the-bias-variance-tradeoff.md) decomposition (proved in [`statistical-learning`](../../statistical-learning/syllabus.md), not yet built; stated here where it is used) says you should attack by averaging, and 2.6 does.

## One-liner

> A tree asks the locally purest question it can and never reconsiders — which is why it needs no scaling and no kernel to be nonlinear, and why on XOR it cannot even take the first step.

## Problems

**P1 (🟢)** A node holds 12 rows, 6 positive and 6 negative. Two candidate splits:

- **A** sends 6 rows with counts (5 pos, 1 neg) left, and (1, 5) right.
- **B** sends 8 rows with counts (6, 2) left, and (0, 4) right.

Compute the parent's Gini and entropy, the weighted child impurity of each split under each measure, and the four gains. Which split wins under Gini? Under entropy? Do they agree?

**P2 (🟡)** Gini and entropy agreed in P1 and on all six candidates in Example 1. Do they *always*? Either construct a parent node and two candidate binary splits on which **Gini prefers one split and entropy prefers the other**, giving all four weighted impurities — or, if honest effort finds none, prove they must always agree on binary splits of a two-class parent. Eight rows and two binary features are enough for whichever answer is right; give the data table.

**P3 (🔴)** Two binary features, four rows, label $y = x_1 \oplus x_2$ (exclusive or) — the dataset that defeated the perceptron in [2.1](02-01-the-perceptron-and-linear-separability.md), now handed to a tree.

(a) Compute the Gini and entropy gain of the split on $x_1$ and of the split on $x_2$. What does `GROW` return?
(b) Exhibit a depth-2 tree with zero error. So the hypothesis class contains the answer — what failed?
(c) Name one change to the split search that finds the depth-2 tree, give its cost as a factor of the ordinary search at $d = 50$ features and $n = 1000$ rows, and give one reason nobody uses it.

<details>
<summary>Solutions</summary>

**P1** Parent: $p = (\tfrac12, \tfrac12)$, so $I_{\mathrm{Gini}} = 1 - \tfrac14 - \tfrac14 = \tfrac12$ and $I_{\mathrm{ent}} = 1$ bit.

*Split A.* Both children are 6 rows with mix $(\tfrac56, \tfrac16)$, so both have the same impurity and the weighted average is just that impurity:

$$I_{\mathrm{Gini}} = 1 - \tfrac{25}{36} - \tfrac1{36} = \tfrac{10}{36} = \tfrac{5}{18} \approx 0.2778,$$

$$I_{\mathrm{ent}} = -\tfrac56\log_2\tfrac56 - \tfrac16\log_2\tfrac16 \approx 0.6500.$$

Gains: $\Delta_{\mathrm{Gini}} = \tfrac12 - \tfrac5{18} = \tfrac29 \approx 0.2222$ and $\Delta_{\mathrm{ent}} \approx 0.3500$.

*Split B.* The right child is pure, $I = 0$. The left child, 8 rows at $(\tfrac34,\tfrac14)$, has $I_{\mathrm{Gini}} = 1 - \tfrac9{16} - \tfrac1{16} = \tfrac38 = 0.375$ and $I_{\mathrm{ent}} \approx 0.8113$. Weighting by $8/12 = 2/3$:

$$\text{wtd. Gini} = \tfrac23\cdot\tfrac38 = \tfrac14 = 0.25, \qquad \text{wtd. entropy} \approx 0.5409.$$

Gains: $\Delta_{\mathrm{Gini}} = \tfrac12 - \tfrac14 = \tfrac14 = 0.25$ and $\Delta_{\mathrm{ent}} \approx 0.4591$.

**B wins under both** ($0.25 > 0.2222$; $0.4591 > 0.3500$), so here the two agree. Worth noticing *why* B wins: it buys a pure child outright, and purity is what the objective is denominated in — a split that half-solves both sides is worth less than one that fully solves a third of the data.

**P2** They do **not** always agree, and eight rows suffice. Features $u, v$ binary, label $y$:

| row | $u$ | $v$ | $y$ | | row | $u$ | $v$ | $y$ |
|---|---|---|---|---|---|---|---|---|
| 1 | 1 | 1 | + | | 5 | 0 | 0 | − |
| 2 | 0 | 1 | + | | 6 | 0 | 0 | − |
| 3 | 0 | 1 | − | | 7 | 0 | 0 | − |
| 4 | 0 | 1 | − | | 8 | 0 | 0 | − |

The parent is (2 pos, 6 neg): $I_{\mathrm{Gini}} = 1 - \tfrac1{16} - \tfrac9{16} = \tfrac38 = 0.375$, $I_{\mathrm{ent}} \approx 0.8113$.

*Split on $u$*: children (1, 0) — one row, pure — and (1, 6).

$$\text{wtd. Gini} = \tfrac18\cdot 0 + \tfrac78\left(1 - \tfrac1{49} - \tfrac{36}{49}\right) = \tfrac78\cdot\tfrac{12}{49} = \tfrac3{14} \approx 0.2143,$$

$$\text{wtd. entropy} = \tfrac78 \cdot H(\tfrac17) \approx \tfrac78(0.5917) \approx 0.5177.$$

*Split on $v$*: children (2, 2) and (0, 4).

$$\text{wtd. Gini} = \tfrac12\cdot\tfrac12 + \tfrac12\cdot 0 = 0.25, \qquad \text{wtd. entropy} = \tfrac12(1) + \tfrac12(0) = 0.5.$$

**Gini picks $u$** ($0.2143 < 0.25$). **Entropy picks $v$** ($0.5 < 0.5177$). Same node, same two candidates, opposite winners.

*Why:* the two measures charge differently for a nearly-pure leftover. On the (1, 6) node, Gini is $12/49 \approx 0.2449$ but entropy is $0.5917$ — a ratio of $2.42$, whereas on the balanced (2, 2) node entropy is exactly twice Gini. In general, as a node's minority fraction $p \to 0$, Gini behaves like $2p$ while entropy behaves like $p\log_2(1/p)$, so the ratio $\log_2(1/p)/2$ grows without bound. Entropy therefore hates the surviving impure region more than Gini does, and prefers the split that clears a *large* region completely; Gini is happier to shave off a small perfectly-pure sliver.

*A check worth reporting:* an exhaustive search over every two-class parent with $n \le 14$ and every binary split of it finds **no disagreement at all below $n = 7$**, and the first ones appear at exactly $n = 7$. So the two impurities do agree on every instance small enough to doodle, which is why the folklore that they "practically always agree" survives — it is true, but it is not a theorem.

**P3** (a) The parent is (2 pos, 2 neg): $I_{\mathrm{Gini}} = \tfrac12$, $I_{\mathrm{ent}} = 1$.

Splitting on $x_1$: the $x_1 = 0$ side holds $(0,0) \mapsto 0$ and $(0,1) \mapsto 1$, one of each; the $x_1 = 1$ side holds $(1,0) \mapsto 1$ and $(1,1) \mapsto 0$, also one of each. So both children have $I_{\mathrm{Gini}} = \tfrac12$, $I_{\mathrm{ent}} = 1$, and

$$\Delta_{\mathrm{Gini}} = \tfrac12 - \left(\tfrac12\cdot\tfrac12 + \tfrac12\cdot\tfrac12\right) = 0, \qquad \Delta_{\mathrm{ent}} = 1 - 1 = 0.$$

By symmetry the split on $x_2$ gives $0$ as well. Every candidate has gain **exactly zero**, so the guard `if gain <= 0: return leaf` fires at the root and `GROW` returns a single leaf, which is right on 2 of 4 rows — a coin flip. The tree cannot take its first step.

(b) Split on $x_1$ at the root; inside each child split on $x_2$. Four pure leaves, zero error. The class was never the problem — **the greedy search was.** XOR's features are individually uninformative and jointly decisive, and the gain criterion scores each question *alone*, so it cannot see a payoff that only exists two questions deep. This is greedy myopia in its purest form: no exchange argument exists to save the rule, so the counterexample is what you get.

(c) **Two-step lookahead** — score a candidate not by its own gain but by the best total gain achievable after also making the best split in each of its children. On XOR every first split then scores the full $0.5$ (Gini), the tie is broken arbitrarily, and the perfect tree is found.

*Cost.* The ordinary search evaluates $O(dn)$ candidates per node. Lookahead re-runs a full search inside both children for each of those candidates, so it evaluates $O\big((dn)^2\big)$ — a blow-up by a factor of $dn$. At $d = 50$ and $n = 1000$ that is $dn = 5\times10^4$ candidates becoming $2.5\times 10^9$: **fifty thousand times the work**, at the root alone.

*Why nobody does it.* Pick any one: (i) two-step lookahead only defers the problem — three-way parity defeats it, $k$-step lookahead costs $(dn)^k$, and building the exactly optimal tree is NP-hard; (ii) with 50 features it finds interactions in noise and overfits, since the number of two-step combinations it maximises over is quadratic in the search space; (iii) the cheap fix works better — [bagging](02-06-bagging-and-random-forests.md) and [boosting](02-07-boosting.md) recover interactions by combining many myopic trees, for a constant factor rather than a quadratic one.

*The honest caveat.* The zero-gain deadlock is exact only because the four rows are exactly balanced. Sample 100 noisy XOR points and the counts jitter, some split shows a small positive gain, and greedy gets a foothold. Implementations that grow to a depth limit and prune afterwards — rather than stopping the moment no split improves purity — will also take an arbitrary zero-gain split here and recover. Neither rescues the general case: bury XOR among 50 irrelevant features and an arbitrary zero-gain choice almost never lands on a relevant one.

</details>

## Flashback

**From Lesson 2.4 (The kernel trick):** You have $d = 200$ raw features and want the quadratic kernel $K(x,z) = (x^\top z)^2$.

(a) How many coordinates does the explicit degree-2 feature map have, and how many multiplications does each of the two routes need to produce one entry of the Gram matrix? (b) At $n = 2\times 10^4$ training points, how much memory does the Gram matrix occupy at float64? (c) In one sentence: why does a tree need no kernel at all to be nonlinear?

<details>
<summary>Solution</summary>

(a) Degree-$p$ monomials in $d$ variables number $\binom{d+p-1}{p}$, so

$$\binom{201}{2} = \frac{201\cdot 200}{2} = 20{,}100 \text{ coordinates}.$$

*Explicit route:* build $\phi(x)$ and $\phi(z)$ — about 20,100 multiplications each — then take a 20,100-term dot product, so roughly $6\times 10^4$ multiplications and 20,100 stored numbers per point. *Kernel route:* $x^\top z$ costs 200 multiplications, then one squaring: **201**. The ratio is about $100 = (d+1)/2$, and it grows without bound in $d$ — that is the trick.

(b) $n^2 = 4\times 10^8$ entries at 8 bytes each is $3.2\times 10^9$ bytes = **3.2 GB**. Comfortable. But the cost is quadratic in $n$, so $n = 10^5$ would be 80 GB and $n = 2\times10^5$ would be 320 GB — the kernel saves you on $d$ and bills you on $n$.

(c) A kernel buys nonlinearity by **embedding** — it moves the points into a richer space where one hyperplane suffices — whereas a tree buys it by **partitioning**, never leaving the original coordinates and instead stacking many axis-aligned cuts, so its boundary is already a nonlinear staircase with no feature map, no Gram matrix, and no $O(n^2)$ memory bill.

The mirror image is the price: the kernel SVM's boundary is smooth in *any* direction, while the tree's can only ever be built from axis-parallel steps, so a boundary at 45 degrees costs a tree an unbounded number of splits to approximate and costs the SVM nothing.

</details>

## Connections

- **Backward:** the growth rule is the greedy method of [algorithms 2.1](../../algorithms/lessons/02-01-the-greedy-method-and-interval-scheduling.md) — locally best, never reconsidered — and P3 is the counterexample that the exchange argument's failure predicts. The impurity is [information-theory 1.1's](../../information-theory/lessons/01-01-entropy-uncertainty-surprise.md) entropy, the gain is its [mutual information](../../information-theory/lessons/01-03-mutual-information.md), and $R_\alpha(T) = R(T) + \alpha\lvert T\rvert$ is [1.4's](01-04-regularization-ridge-and-lasso.md) fit-plus-penalty with leaf count in place of $\lVert w\rVert$.
- **Forward:** [2.6](02-06-bagging-and-random-forests.md) attacks the variance by averaging many deep trees; [2.7](02-07-boosting.md) attacks the bias by summing many shallow ones. Both leave the myopic split search exactly as it is — they fix the tree by using more of them, not by making one smarter. Choosing $\alpha$, or the depth, is [4.1's](04-01-model-selection-and-cross-validation.md) cross-validation.
- **Sideways:** building the *optimal* decision tree is NP-hard, so this is the same greedy-heuristic-for-an-intractable-problem move as [algorithms 4.3](../../algorithms/lessons/04-03-approximation-algorithms.md) — with the difference that greedy trees carry no approximation guarantee at all, only an empirical track record. The exact alternative, searching subtrees with memoisation, is [dynamic programming](../../algorithms/lessons/02-05-dynamic-programming-and-knapsack.md) and is affordable only for tiny depth budgets.
