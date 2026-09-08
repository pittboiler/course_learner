# Statistical Learning Theory · Lesson 6.2: Clustering and k-means

> ⏱ ~15 min · Module 6: Unsupervised learning · Builds on: [6.1 (PCA)](06-01-principal-component-analysis.md), [1.2 (bias–variance)](01-02-the-bias-variance-decomposition.md) · Unlocks: 6.3 (mixture models and EM)

## Why this matters

In supervised learning something outside the model can adjudicate: a label. Clustering has no label, so nothing outside the objective can say whether an answer is right — **the objective *is* the definition of what a cluster is.** Picking k-means is therefore not picking an algorithm; it is committing to a claim about what a group looks like, and that claim has consequences you can prove.

Three of them, and they are this lesson. The objective is a variance decomposition, which is what licenses reading clustering as compression. Its exact minimiser is NP-hard to compute, so — exactly as with trees in [5.1](05-01-decision-trees.md) — every clustering you have ever seen is a heuristic's output and the theory describes an optimum nobody computed. And the shape of that optimum is fixed in advance: flat boundaries, convex cells, whatever the data looks like.

[`machine-learning` 3.3](../../machine-learning/lessons/03-03-k-means-clustering.md) owns the procedure — Lloyd's algorithm, its monotone-descent proof, the initialization that lands 67 times worse than optimal, and the elbow heuristic for choosing $k$. Take all of that as given; we never run the algorithm here. We ask what the objective's *optimum* looks like, and the punchline is that the optimum is sometimes the answer you did not want — a worse kind of failure than a bad start, because no amount of searching repairs it.

## The idea

k-means asks one question: **cut the data into $k$ groups so that every point is close to its own group's centre.** "Close" means squared Euclidean distance, and "centre" turns out to mean the average.

Everything follows from a single piece of algebra you already met in [1.2](01-02-the-bias-variance-decomposition.md): the cost of summarising a set of points by *any* representative splits into the set's own spread plus a penalty for missing its mean. Add-and-subtract, cross term dies. There it gave variance plus bias-squared; here it gives within-cluster spread plus a penalty for a badly placed centre, which is why the mean wins and why the total objective reads as *variance*.

Once you see it as variance partitioning, two consequences drop out that no amount of running the algorithm would reveal:

- **The objective rewards balance as well as separation.** For $k = 2$ it maximises the product of the squared gap between the two means and a factor $n_1 n_2$ that is largest when the two clusters have equal size. The famous "k-means likes equal-sized clusters" is not folklore — it is literally a factor in the objective.
- **The optimal cells are convex.** At any minimiser each point sits with a nearest centre, so every pair of clusters is separated by a flat wall. A curved cluster boundary is not hard to find; it is **not in the objective's range at all.**

Keep these two failure modes apart, because they call for opposite responses. A bad initialization is the *algorithm's* bug, and restarts or k-means++ fix it. A Voronoi-shaped optimum is the *objective's* bug, and better search makes it **worse** — a smarter optimiser walks more confidently toward the wrong answer.

## The formal version

Data $x_1,\dots,x_n \in \mathbb R^p$. A clustering is a partition $C = (C_1,\dots,C_k)$ of the indices together with centres $\mu_1,\dots,\mu_k \in \mathbb R^p$. The objective is the [within-cluster sum of squares](../reference.md#within-cluster-sum-of-squares)

$$W(C,\mu) \;=\; \sum_{j=1}^{k}\sum_{i \in C_j}\bigl\lVert x_i - \mu_j\bigr\rVert^2 .$$

*In words:* add up the squared distance from every point to the centre of its own cluster.

### The centre-of-mass identity

**Lemma.** For any finite set $C$ with mean $\bar x_C = \frac{1}{|C|}\sum_{i\in C} x_i$ and any point $c \in \mathbb R^p$,

$$\sum_{i\in C}\lVert x_i - c\rVert^2 \;=\; \sum_{i\in C}\lVert x_i - \bar x_C\rVert^2 \;+\; |C|\,\lVert \bar x_C - c\rVert^2 .$$

*Proof.* Write $x_i - c = (x_i - \bar x_C) + (\bar x_C - c)$ and expand. The cross term is

$$2\,(\bar x_C - c)^\top \sum_{i \in C}(x_i - \bar x_C) \;=\; 0,$$

because $\sum_{i\in C}(x_i - \bar x_C) = 0$ *by the definition of the mean*. $\blacksquare$

*In words:* the cost of using any centre at all splits into the set's irreducible spread plus a pure penalty for missing its mean. This is the same add-and-subtract as [1.2's](01-02-the-bias-variance-decomposition.md) [bias–variance decomposition](../reference.md#bias-variance-decomposition), with $|C|\lVert \bar x_C - c\rVert^2$ in the bias-squared role.

**Corollary 1 (the mean minimises).** The second term is $\ge 0$ and vanishes only at $c = \bar x_C$, so the mean is the *unique* minimiser of within-cluster squared distance. So we may profile the centres out and write the objective as a function of the partition alone:

$$W(C) \;=\; \sum_{j=1}^{k}\sum_{i\in C_j}\lVert x_i - \bar x_j\rVert^2 \;=\; \sum_{j=1}^{k}\lvert C_j\rvert\, s_j^2 ,$$

where $s_j^2$ is cluster $j$'s own variance. **k-means minimises size-weighted within-cluster variance** — that is the whole objective, and it is why the method is a compression scheme rather than a similarity heuristic.

### Variance partitioning

**Theorem.** With $\bar x$ the grand mean and $\mathrm{TSS} = \sum_i \lVert x_i - \bar x\rVert^2$,

$$\mathrm{TSS} \;=\; \underbrace{W(C)}_{\text{within}} \;+\; \underbrace{\sum_{j}\lvert C_j\rvert\,\lVert \bar x_j - \bar x\rVert^2}_{B(C),\ \text{between}} .$$

*Proof.* Apply the Lemma to each cluster with $c = \bar x$ and sum over $j$. $\blacksquare$

*In words:* the data's total spread is a constant the partition cannot touch, so **minimising within-cluster spread is exactly maximising between-cluster spread.** That is the licence for reading $W$ as distortion and $B/\mathrm{TSS}$ as "variance explained."

For $k = 2$ the between term collapses to a formula worth memorising:

$$B \;=\; \frac{n_1 n_2}{n}\,\lVert \bar x_1 - \bar x_2\rVert^2 .$$

Read it aloud: k-means maximises **separation times balance**. The factor $n_1n_2$ is maximised at $n_1 = n_2 = n/2$ and collapses to $n-1$ for a singleton split, so the objective is actively willing to trade away a large gap for a more even split. Worked example 2 makes it bite.

### The optimum is a Voronoi partition

**Theorem.** Let $(C^*,\mu^*)$ minimise $W$. Then every point is assigned to a nearest centre.

*Proof.* Suppose $x_i \in C_a$ but $\lVert x_i - \mu_b\rVert < \lVert x_i - \mu_a\rVert$ for some $b$. Moving $i$ into $C_b$ with the centres held fixed changes only that point's term and strictly lowers it, so $W$ strictly falls; re-optimising the centres to the new cluster means cannot raise it (Corollary 1). So $(C^*,\mu^*)$ was not a minimiser. $\blacksquare$

Now unfold "nearest": $x$ goes with $\mu_a$ rather than $\mu_b$ exactly when $\lVert x-\mu_a\rVert^2 \le \lVert x-\mu_b\rVert^2$, and expanding both sides kills the $\lVert x\rVert^2$ terms to leave

$$2\,(\mu_b - \mu_a)^\top x \;\le\; \lVert\mu_b\rVert^2 - \lVert\mu_a\rVert^2 ,$$

a **half-space** whose boundary is the perpendicular bisector of the two centres. Each optimal cluster is therefore an intersection of $k-1$ half-spaces cut with the data — a [Voronoi partition](../reference.md#voronoi-partition): **convex cells with flat walls.**

This is the sentence the course exists to say precisely: *that* is a property of the objective, not of Lloyd's algorithm. It is proved above without ever mentioning an initialization, an iteration, or a stopping rule.

### Nobody computes the minimum

Exactly minimising $W$ is NP-hard, in two independent directions:

- with $k = 2$ fixed and the dimension $p$ part of the input (Dasgupta 2008; Aloise et al. 2009);
- in the plane, $p = 2$, with $k$ part of the input (Mahajan et al. 2012).

Both bites are needed, because when $k$ **and** $p$ are *both* held fixed the problem is polynomial — you can enumerate the $O(n^{kp})$ candidate Voronoi partitions and check each. On a line ($p=1$) it is polynomial for every $k$ by dynamic programming.

So the guarantees above describe an optimum you never compute, and Lloyd's algorithm is a heuristic for it. This is the same admission [5.1](05-01-decision-trees.md) makes about greedy tree growing, and the repetition is deliberate: *theory bounds the object you defined, and practice hands you the output of a search.* See [algorithms 4.1](../../algorithms/lessons/04-01-p-np-and-polynomial-time-reductions.md) for what NP-hardness means and [4.3](../../algorithms/lessons/04-03-approximation-algorithms.md) for what one does about it.

**What would change the assumption.** Replace the metric (an $\ell_1$ cost gives $k$-medians and medians, not means); apply a [kernel](04-01-feature-maps-and-the-kernel-trick.md) so the flat walls live in feature space and bend in the original one; or replace the fixed spherical cost by a fitted covariance per component, which is a Gaussian mixture and is [6.3](06-03-mixture-models-and-em.md). Each changes the *definition of a cluster*, which is the only thing that could have helped.

## Picture

![Two panels showing the same eight points arranged in two long horizontal rows. In the left panel a vertical dashed line splits them into left and right halves, the k-means global optimum with objective 16. In the right panel a horizontal dashed line splits them into the two rows, objective 40.](assets/06-02-fig1.svg)

Eight points, two obvious rows, $k = 2$. The grouping any human draws is top-versus-bottom, and it costs $W = 40$. The **global minimiser** of the k-means objective is left-versus-right, at $W = 16$.

Both partitions are Voronoi, and both are Lloyd fixed points, so the algorithm can land on either. The objective breaks the tie for the wrong one — and it does so from every starting point, since it is scoring configurations, not searching. Restarts and k-means++ make this *worse*: they are machinery for finding low $W$, and low $W$ is what is misleading you.

## Worked examples

**Example 1 (mechanical): the identity on real numbers.** Six points in the plane,

$$(0,0),\ (4,0),\ (2,3)\ \ \text{and}\ \ (10,0),\ (14,0),\ (12,3),$$

partitioned into the obvious left triple $C_1$ and right triple $C_2$.

Means: $\bar x_1 = (2,1)$ and $\bar x_2 = (12,1)$. Within-cluster sums, cluster 1:

$$(0\!-\!2)^2+(0\!-\!1)^2 \,+\, (4\!-\!2)^2+(0\!-\!1)^2 \,+\, (2\!-\!2)^2+(3\!-\!1)^2 \;=\; 5+5+4 \;=\; 14,$$

and by the translation symmetry cluster 2 gives $14$ too. So $W = 28$.

Now the audit. The grand mean is $\bar x = (7,1)$, and $\mathrm{TSS} = 178$ (the $x$-coordinates contribute $166$, the $y$-coordinates $12$). The between term is

$$B \;=\; 3\lVert(2,1)-(7,1)\rVert^2 + 3\lVert(12,1)-(7,1)\rVert^2 \;=\; 75+75 \;=\; 150,$$

and $28 + 150 = 178 = \mathrm{TSS}$ — the theorem, on the nose. The $k=2$ shortcut agrees: $\frac{3\cdot3}{6}\cdot 10^2 = 150$. Exhaustive search over all $2^5 - 1 = 31$ two-way partitions confirms $W^* = 28$, so here the objective and your eye agree.

**Example 2 (why you'd care): the balance factor overrules a clean outlier.** Ten points on a line: nine spread evenly at $-4,-3,\dots,4$, and one far away at $10$. The structure is not in doubt — a wide cluster and a lone outlier.

The nine-versus-one split gives $W = 60 + 0 = 60$, with

$$B \;=\; \frac{9\cdot 1}{10}\,(0-10)^2 \;=\; 0.9 \times 100 \;=\; 90 .$$

Big separation, terrible balance. Now cut the wide cluster instead, taking $\{-4,\dots,1\}$ against $\{2,3,4,10\}$: the means are $-1.5$ and $4.75$, so

$$B \;=\; \frac{6\cdot 4}{10}\,(6.25)^2 \;=\; 2.4 \times 39.0625 \;=\; 93.75 ,$$

and $W = 150 - 93.75 = 56.25$. **The absurd partition wins**, because a balance factor of $2.4$ beats one of $0.9$ by more than the separation loses. Exhaustive search over all $2^9-1 = 511$ splits confirms it: two partitions beat the natural one ($56.25$ and $170/3 \approx 56.67$), two more tie with it at $60$, and both winners cut the wide cluster and swallow the outlier.

Nothing here is a local minimum, an initialization or a tie-break. The global optimum of the stated objective refuses to isolate an obvious outlier, because isolating it costs balance — and balance is a factor the objective was always multiplying by.

## Watch out

- **You might think** the round-cluster complaint about k-means is Lloyd's fault, curable by restarts or k-means++ — **but actually** it lives in the objective, and the two failures pull in opposite directions. Bad initialization means the search stopped short of the optimum, so *better search helps*. A Voronoi-shaped optimum means the optimum is wrong, so *better search hurts*: on the Picture's instance, the more thoroughly you minimise $W$ the more reliably you get the partition you did not want.
- **You might think** "minimise $W$" is a complete specification of the clustering problem — **but actually** it never chooses $k$: the optimal $W$ is non-increasing in $k$ and hits exactly $0$ at $k = n$. Compare [1.3](01-03-overfitting-and-train-validation-test.md), where held-out risk *turns back up* and so decides. Nothing here turns back up, which is why choosing $k$ is a heuristic ([`machine-learning` 3.3](../../machine-learning/lessons/03-03-k-means-clustering.md)) and not an optimisation.
- **You might think** NP-hardness is a practitioner's inconvenience — **but actually** it is a statement about what the theory covers. Every result above is about $\min_C W(C)$; the thing on your screen is the output of a heuristic that stops at a fixed point. "The k-means clusters of this dataset" is not a well-defined object without naming the algorithm, the seed, and the restart count.

## One-liner

> k-means does not find groups, it minimises size-weighted within-cluster variance — so it will always answer with convex cells of similar size separated by flat walls, and the times that is wrong are the objective's failure, not the algorithm's.

## Problems

**P1 (🟢)** Four points in the plane, $(0,0)$ and $(0,2)$ in $C_1$, $(6,1)$ and $(8,3)$ in $C_2$.

(a) Use the centre-of-mass identity to prove the mean minimises within-cluster squared distance, then verify it on $C_1$ by comparing the cost of the centre $c = (0,0)$ with the cost of $\bar x_1$.
(b) Give $W$ for this partition.
(c) Compute $\mathrm{TSS}$ and $B$, check $\mathrm{TSS} = W + B$, and confirm $B$ against the $k=2$ formula.

**P2 (🟡)** (a) Show that the set of points equidistant from two distinct centres $\mu_a,\mu_b$ is a hyperplane with normal $\mu_b-\mu_a$ passing through the midpoint $\tfrac12(\mu_a+\mu_b)$ — i.e. the perpendicular bisector. (b) Conclude that every cluster of a k-means optimum is the intersection of the data with a convex set. (c) Hence prove: if two groups $A$ and $B$ in your data are such that $\mathrm{conv}(A)$ lies in the interior of $\mathrm{conv}(B)$, then **no** k-means optimum, at any $k$, returns $A$ and $B$ as two of its clusters.

**P3 (🔴)** Build the counterexample the Picture shows, and find the exact threshold. Take eight points: $(\pm1, h)$, $(\pm3, h)$, $(\pm1, -h)$, $(\pm3, -h)$ for a half-gap $h > 0$, with $k = 2$.

(a) Compute $W$ for the top-versus-bottom partition and for the left-versus-right partition, as functions of $h$.
(b) Find the exact $h$ at which the objective switches its preference, and say in one sentence what that threshold compares.
(c) At $h = 1$ both partitions are Lloyd fixed points. Say which of the two a practitioner running 100 random restarts and keeping the lowest $W$ will report, and what that shows about restarts as a remedy.

<details>
<summary>Solutions</summary>

**P1** (a) The identity is
$$\sum_{i\in C}\lVert x_i-c\rVert^2 = \sum_{i\in C}\lVert x_i-\bar x_C\rVert^2 + |C|\,\lVert\bar x_C-c\rVert^2,$$
proved by writing $x_i-c=(x_i-\bar x_C)+(\bar x_C-c)$, expanding, and noting the cross term carries the factor $\sum_{i\in C}(x_i-\bar x_C)=0$. The first term does not involve $c$ and the second is non-negative and zero only at $c=\bar x_C$, so the mean is the unique minimiser.

Check on $C_1$: $\bar x_1 = (0,1)$, so the cost at the mean is $1+1 = 2$. At $c=(0,0)$ the direct cost is $0 + 4 = 4$. The identity predicts $2 + 2\lVert(0,1)-(0,0)\rVert^2 = 2 + 2 = 4$. ✓

(b) $\bar x_2 = (7,2)$, and $C_2$'s cost is
$$(6-7)^2+(1-2)^2 \;+\; (8-7)^2+(3-2)^2 \;=\; 2+2 \;=\; 4 .$$
So $W = 2 + 4 = 6$.

(c) Grand mean $\bar x = (3.5, 1.5)$. Then
$$\mathrm{TSS} = (12.25+2.25)+(12.25+0.25)+(6.25+0.25)+(20.25+2.25) = 56.$$
Between:
$$2\lVert(0,1)-(3.5,1.5)\rVert^2 + 2\lVert(7,2)-(3.5,1.5)\rVert^2 \;=\; 25+25 \;=\; 50 ,$$
and $6 + 50 = 56$. ✓ The $k=2$ formula agrees:
$$\frac{2\cdot 2}{4}\,\lVert(0,1)-(7,2)\rVert^2 \;=\; 1\cdot(49+1) \;=\; 50 . \ \checkmark$$

**P2** (a) $\lVert x-\mu_a\rVert^2 = \lVert x-\mu_b\rVert^2$ expands to
$$\lVert x\rVert^2 - 2\mu_a^\top x + \lVert\mu_a\rVert^2 = \lVert x\rVert^2 - 2\mu_b^\top x + \lVert\mu_b\rVert^2,$$
and the $\lVert x\rVert^2$ terms cancel, leaving
$$2(\mu_b-\mu_a)^\top x = \lVert\mu_b\rVert^2 - \lVert\mu_a\rVert^2 .$$
This is linear in $x$ with normal vector $\mu_b-\mu_a$, hence a hyperplane perpendicular to the segment joining the centres. The midpoint satisfies it: putting $x=\tfrac12(\mu_a+\mu_b)$ makes the left side
$$(\mu_b-\mu_a)^\top(\mu_a+\mu_b) \;=\; \lVert\mu_b\rVert^2-\lVert\mu_a\rVert^2 ,$$
which is the right side exactly. So it is *the* perpendicular bisector.

(b) By the Voronoi theorem, at an optimum every $x_i\in C_a$ satisfies $\lVert x_i-\mu_a\rVert \le \lVert x_i-\mu_b\rVert$ for all $b$, i.e. $x_i$ lies in the closed half-space cut by each of the $k-1$ bisectors. A finite intersection of closed half-spaces is convex, so $C_a = \{\text{data}\} \cap V_a$ with $V_a$ convex.

(c) Suppose some optimum returns $A$ and $B$ as two clusters, with cells $V_A, V_B$. They come from a single bisector, so $V_A$ and $V_B$ lie in opposite closed half-spaces of one hyperplane $H$. Then $\mathrm{conv}(A)\subseteq V_A$ and $\mathrm{conv}(B)\subseteq V_B$ (both convex sets contain the hulls of the points they contain), so $H$ separates $\mathrm{conv}(A)$ from $\mathrm{conv}(B)$ and their intersection lies inside $H$ — a set with empty interior. But $\mathrm{conv}(A)$ is contained in the *interior* of $\mathrm{conv}(B)$, so $\mathrm{conv}(A)\cap\mathrm{conv}(B) = \mathrm{conv}(A)$, which has non-empty interior unless $A$ is degenerate. Contradiction.

*The point:* the obstruction is purely geometric and never mentions initialization, iteration count or seeding. Nesting is unreachable for the objective, so it is unreachable full stop.

**P3** (a) *Top versus bottom.* Each cluster is one row; its mean is $(0,\pm h)$, and the $y$-coordinates contribute nothing. Each row costs $2(1^2) + 2(3^2) = 20$, so
$$W_{\text{tb}} = 40, \quad \text{independent of } h .$$

*Left versus right.* The left cluster is $(-1,\pm h)$ and $(-3,\pm h)$ with mean $(-2,0)$. Each of its four points is at squared distance $1 + h^2$ from that mean, so the cluster costs $4(1+h^2)$ and
$$W_{\text{lr}} = 8 + 8h^2 .$$

(b) The wrong split wins exactly when $8 + 8h^2 < 40$, i.e. $h^2 < 4$, i.e. $\boldsymbol{h < 2}$ — with equality at $h = 2$, where the two cost $40$ apiece. (Exhaustive search over all $2^7-1 = 127$ two-way partitions confirms that no third partition intrudes: for $h<2$ the global optimum is left-versus-right, for $h>2$ it is top-versus-bottom.) At $h=1$ the two numbers are $16$ and $40$, the Picture's instance.

The threshold compares the **gap between the rows** ($2h$) with the **spread along them**: the rows are $6$ units long and $2h$ apart, and the objective prefers to cut along the length whenever the gap is under $4$. Squared Euclidean distance has no notion of "these two points belong to the same streak" — only "these two points are close" — so a cluster that is long is a cluster the objective wants to split.

(c) It will report **left-versus-right**, and it will report it more reliably the more restarts you buy: restarts are a device for finding low $W$, and left-versus-right *is* the low-$W$ answer. This is the exact inverse of [`machine-learning` 3.3's](../../machine-learning/lessons/03-03-k-means-clustering.md) failure, where the restarts are the fix. The diagnosis a practitioner needs is therefore a question, not a procedure: *is my low-$W$ answer wrong, or did I fail to reach a low-$W$ answer?* Restarts address only the second. The first is repaired by changing the objective — a fitted covariance per cluster ([6.3](06-03-mixture-models-and-em.md)) buys the elongated shape directly, and single-linkage agglomeration ([`machine-learning` 3.4](../../machine-learning/lessons/03-04-hierarchical-clustering.md)) replaces "tight around a centre" with "connected".

</details>

## Flashback

**From [Lesson 5.5](05-05-why-does-deep-learning-generalize.md) (Why does deep learning generalize?):** minimum-norm interpolation, then a bridge.

(a) One observation, two features: $x = (1,2)^\top$ and $y = 3$, fit by $\beta\in\mathbb R^2$ with $\beta^\top x = y$. The interpolating set is a whole line. Give the minimum-$\ell_2$-norm interpolator and its squared norm, and compare it with the interpolator $(3,0)^\top$.

(b) k-means with $k = n$ achieves $W = 0$ — every point is its own cluster and its own centre. Name the analogous failure in supervised learning, and the mechanism that stops it there but has no counterpart here.

<details>
<summary>Solution</summary>

(a) Every $\beta$ with $\beta_1 + 2\beta_2 = 3$ interpolates. Minimising $\lVert\beta\rVert^2$ on that line means taking the point closest to the origin, which is the one *parallel to* $x$ — the residual must be orthogonal to the constraint direction. Writing $\beta = x\alpha$ and solving $x^\top x\,\alpha = y$ gives $\alpha = 3/5$, so

$$\beta_{\min} = \tfrac35\,(1,2)^\top = (0.6,\ 1.2)^\top, \qquad \lVert\beta_{\min}\rVert^2 = 0.36+1.44 = 1.8 .$$

This is the pseudoinverse solution $\beta = X^+y$. Against it, $(3,0)^\top$ also interpolates but has squared norm $9$ — five times larger, on identical training error of zero. Training error cannot tell the two apart; **the norm can**, which is the whole content of "gradient descent from zero implicitly regularizes."

(b) The analogue is **interpolation**: a $1$-nearest-neighbour rule, or any model with $p \ge n$, drives training error to zero and thereby makes "minimise training error" a criterion that always answers "maximum capacity" — the same degeneracy as "minimise $W$" always answering $k = n$.

What stops it in supervised learning is a **held-out estimand**: population risk is a quantity training error is a biased estimate of, and a validation set gives an unbiased estimate of it that *turns back up* as capacity grows ([1.3](01-03-overfitting-and-train-validation-test.md)). Clustering has no counterpart, because $W$ is not an estimate of anything external — hold out a point and its contribution to $W$ still falls monotonically in $k$. That is why choosing $k$ is a matter of judgement in a way that choosing model complexity is not, and why the honest fixes (a stability criterion, a likelihood under a generative model, an external validation task) all work by *supplying* the missing external quantity rather than by optimising $W$ harder.

</details>

## Connections

- **Backward:** the centre-of-mass identity is [1.2's](01-02-the-bias-variance-decomposition.md) add-and-subtract move applied to a finite set, and the variance-partitioning theorem is its ANOVA form; [6.1](06-01-principal-component-analysis.md) solves a variational problem for the same second-moment reasons and inherits the same blindness to structure that is not variance. The "the theory bounds an optimum the algorithm does not compute" admission is [5.1's](05-01-decision-trees.md), repeated on purpose.
- **Forward:** [6.3](06-03-mixture-models-and-em.md) replaces the fixed spherical cost with a fitted covariance per component and the hard assignment with a responsibility, which is exactly the two assumptions this lesson isolated; [`machine-learning` 3.6](../../machine-learning/lessons/03-06-the-em-algorithm.md) proves k-means is its hard-assignment limit. Boss problem 6 in the [syllabus](../syllabus.md) asks you to build the dataset that separates them.
- **Sideways:** the objective is a **rate-distortion** problem — $k$ codewords, squared-error distortion — which is the vector-quantization view from [information-theory](../../information-theory/syllabus.md), and it is why "compression" is the right word rather than a metaphor. The NP-hardness pattern (define a clean objective, prove things about its optimum, then run a heuristic and quietly hope) is the one [algorithms 4.3](../../algorithms/lessons/04-03-approximation-algorithms.md) is built to handle, and it is the same gap [5.1](05-01-decision-trees.md) reports between greedy trees and ERM.
