# Machine Learning · Lesson 2.3: Soft margins and the SVM dual

> ⏱ ~15 min · Module 2: Classification — margins, trees, and ensembles · Builds on: [2.2](02-02-maximum-margin-classifiers.md) (maximum-margin classifiers), [1.4](01-04-regularization-ridge-and-lasso.md) (regularization) · Unlocks: [2.4](02-04-the-kernel-trick.md) (the kernel trick)

## Why this matters

The hard-margin SVM of [Lesson 2.2](02-02-maximum-margin-classifiers.md) has a fatal flaw: on data that isn't linearly separable it has **no solution at all**. The constraint set is empty, and the solver returns "infeasible." One mislabelled row in a hundred thousand is enough. Real data always has that row.

The fix — let points violate the margin and charge them for it — is worth more than a bug patch. It turns the SVM into a **regularized loss minimizer** with the same shape as ridge from [Lesson 1.4](01-04-regularization-ridge-and-lasso.md), and it makes the dual problem *readable*: every training point gets a price, and the price sorts it into one of three kinds. Reading that sort is how you diagnose a fitted SVM — which points matter, which are noise you're paying for, which you could delete without moving the boundary an inch. It also exposes the structural fact that [2.4](02-04-the-kernel-trick.md) swings on: the data enters only through inner products.

## The idea

Two moves.

**Move one: slack.** Stop demanding that every point clear the margin. Give point $i$ a personal allowance $\xi_i \ge 0$ ("xi", a *slack variable*) by which it may fall short, and add $C\xi_i$ to the bill. Now every dataset is feasible — with a large enough allowance any hyperplane is legal — and the optimizer trades margin width against total allowance spent. A point that clears the margin spends nothing. A point sitting inside the band spends a little. A point on the wrong side spends more than 1.

Note what this instantly becomes: *width of margin* versus *sum of violations* is exactly a fit-versus-complexity trade-off, and $C$ is the knob. **Small $C$ means slack is cheap, so the optimizer buys a wide sloppy margin — that is heavy regularization.** Large $C$ means slack is expensive, so it contorts the boundary to avoid violations — light regularization, high variance. This is the single most commonly reversed fact in the subject, because $C$ multiplies the *error* term, not the penalty term. Say it to yourself the other way round too: $C$ is the price of a mistake.

**Move two: the dual.** Attach a multiplier $\alpha_i$ to each margin constraint and eliminate $w$, $b$ and $\xi$. Two things fall out, and both are the point of this lesson. The data appears **only through inner products** $x_i^\top x_j$. And complementary slackness — "you only pay for a constraint that binds" — sorts every point into three classes by where its $\alpha_i$ lands in $[0, C]$.

## The formal version

**The soft-margin primal.** With $f(x) = w^\top x + b$ and labels $y_i \in \{-1,+1\}$:

$$\min_{w,\,b,\,\xi}\ \tfrac12\lVert w\rVert^2 + C\sum_{i=1}^n \xi_i \quad\text{s.t.}\quad y_i f(x_i) \ge 1 - \xi_i,\ \ \xi_i \ge 0 .$$

*In words:* keep the margin wide, but let point $i$ fall $\xi_i$ short of it for a fee of $C$ per unit. This is still a convex quadratic program ([`convex-optimization` 2.2](../../convex-optimization/lessons/02-02-linear-quadratic-programs.md)), so it has a unique optimal $w$.

**The hinge form.** At the optimum each $\xi_i$ is pushed down to the smallest legal value, so $\xi_i = \max(0,\,1 - y_i f(x_i))$ — the [hinge loss](../reference.md#hinge-loss). Substituting turns the constrained problem into an unconstrained one:

$$\min_{w,\,b}\ \sum_{i=1}^n \max\!\big(0,\ 1 - y_i f(x_i)\big) \;+\; \frac{1}{2C}\lVert w\rVert^2 .$$

*In words:* the SVM is hinge loss plus an $\ell_2$ penalty. Comparing with ridge's $\text{loss} + \lambda\lVert w\rVert^2$ from [1.4](01-04-regularization-ridge-and-lasso.md) reads off the dictionary $\lambda = 1/(2C)$: **$C$ small $\Leftrightarrow$ $\lambda$ large $\Leftrightarrow$ heavy shrinkage.**

**The dual.** Forming the Lagrangian and applying the KKT conditions gives

$$\max_{\alpha}\ \sum_{i}\alpha_i - \tfrac12\sum_{i,j}\alpha_i\alpha_j\,y_i y_j\,x_i^\top x_j \quad\text{s.t.}\quad 0 \le \alpha_i \le C,\quad \sum_i \alpha_i y_i = 0,$$

with $w = \sum_i \alpha_i y_i x_i$. **The derivation is [`convex-optimization` 3.3](../../convex-optimization/lessons/03-03-kkt-conditions.md) and [5.2](../../convex-optimization/lessons/05-02-support-vector-machines.md) — that course owns it and we do not repeat it.** What we add is how to read the answer. Two features:

- The training points appear **only** as inner products $x_i^\top x_j$, and so does the prediction $f(x) = \sum_i \alpha_i y_i\,(x_i^\top x) + b$. Nothing else about $x$ is ever touched. That is the slot [2.4](02-04-the-kernel-trick.md) plugs into.
- The dual has **$n$ variables** — one per training point — no matter how many features there are. Hold on to that; it decides which formulation you actually solve (P3).

**The three-way sort.** Complementary slackness on both the margin constraint and $\xi_i \ge 0$ forces, for every $i$:

| $\alpha_i$ | $y_i f(x_i)$ | $\xi_i$ | reading |
|---|---|---|---|
| $0$ | $\ge 1$ | $0$ | outside the margin — **delete it and nothing moves** |
| $(0,\,C)$ | $= 1$ | $0$ | exactly **on** the margin line |
| $C$ | $\le 1$ | $\ge 0$ | inside the band, or on the wrong side — **you are paying for it** |

*In words:* $\alpha_i$ is the shadow price of point $i$'s margin constraint. Zero price means the constraint is slack and the point is irrelevant. A price strictly inside the box means the constraint is exactly tight. A price pinned at the ceiling means the point broke through and is buying slack at the maximum rate. Points with $\alpha_i > 0$ are the **support vectors**; $w$ is a combination of those alone.

## Picture

![A two-dimensional scatter of six labelled points with a soft-margin decision boundary drawn as a solid diagonal line and the two margin lines drawn dashed on either side, shading the band between them. Two points sit outside the band, two sit exactly on the margin lines, and two are drawn as crosses inside or past the band with arrows showing how far short of their margin line they fall.](assets/02-03-fig1.svg)

Everything the fitted model knows about this dataset is in the legend: two points priced at zero, two at an interior price, two at the ceiling. The last two are the ones you'd go and look at by hand — a point at $\alpha_i = C$ is the model telling you it could not fit that row and chose to pay instead.

## Worked examples

**Example 1 (mechanical): sorting the six points.** Take $C = 2$ and the solution $w = (1,1)$, $b = -5$, so $f(x) = x_1 + x_2 - 5$. The margin lines are $x_1 + x_2 = 6$ (where $f = +1$) and $x_1 + x_2 = 4$ (where $f = -1$). Compute $f$, then $y f$, then $\xi = \max(0, 1 - yf)$:

| point | $y$ | $f(x)$ | $y f(x)$ | $\xi$ | class |
|---|---|---|---|---|---|
| $(4,4)$ | $+1$ | $3$ | $3$ | $0$ | $\alpha = 0$ |
| $(1,1)$ | $-1$ | $-3$ | $3$ | $0$ | $\alpha = 0$ |
| $(3,3)$ | $+1$ | $1$ | $1$ | $0$ | $0 < \alpha < C$ |
| $(1,3)$ | $-1$ | $-1$ | $1$ | $0$ | $0 < \alpha < C$ |
| $(3,\,2.5)$ | $+1$ | $\tfrac12$ | $\tfrac12$ | $\tfrac12$ | $\alpha = C$ |
| $(4,2)$ | $-1$ | $1$ | $-1$ | $2$ | $\alpha = C$ |

Read the last two rows. $(3,\,2.5)$ is classified **correctly** — $f > 0$ and $y = +1$ — but sits inside the band, so it still pays. $(4,2)$ is the noisy row: a negative point sitting on the $f = +1$ line, misclassified, $\xi = 2 > 1$. **$\xi_i > 1$ is exactly the condition for a training error.** One error in six.

The bill: $\tfrac12\lVert w\rVert^2 + C\sum_i \xi_i = 1 + 2\cdot\tfrac52 = 6$.

The multipliers here are $\alpha = (0,\ 0,\ \tfrac32,\ \tfrac32,\ 2,\ 2)$, and it is worth checking that they reproduce everything — this is the whole primal–dual dictionary on one line:

$$\sum_i \alpha_i y_i x_i = \tfrac32(3,3) - \tfrac32(1,3) + 2(3,2.5) - 2(4,2) = (1,1) = w,\qquad \sum_i \alpha_i y_i = 0 .$$

And the dual objective, which for the SVM simplifies to $\sum_i\alpha_i - \tfrac12\lVert w\rVert^2$, gives $7 - 1 = 6$ — equal to the primal bill, as strong duality promises.

**Example 2 (why you'd care): $C$ is a shrinkage knob, and it bites even on separable data.** One dimension, two points: $x = -1$ with $y = -1$, and $x = +1$ with $y = +1$. As separable as data gets.

The problem is symmetric under $(x, y) \mapsto (-x, -y)$, which maps $b \mapsto -b$, so $b = 0$ is optimal and both hinges are equal. For $w \ge 0$ the objective is

$$J(w) = \tfrac12 w^2 + 2C\max(0,\ 1 - w).$$

On $[0,1]$ this is $\tfrac12 w^2 + 2C(1-w)$, with derivative $w - 2C$; on $[1,\infty)$ it is $\tfrac12 w^2$, increasing. So

$$w^*(C) = \min(2C,\ 1).$$

Three readings, and they are the lesson:

- **$C \ge \tfrac12$: the hard margin, exactly.** $w^* = 1$, [geometric margin](../reference.md#geometric-margin) $1/\lVert w\rVert = 1$, both $\xi_i = 0$. Not "in the limit" — the hard-margin solution is reached at a *finite* $C$, namely $C \ge \max_i \alpha_i^{\text{hard}} = \tfrac12$, above which the box constraint stops binding.
- **$C = \tfrac14$: the regularizer wins on separable data.** $w^* = \tfrac12$, so the margin doubles to $2$ — and both points now sit *inside* their own margin band with $\xi_i = 1 - \tfrac12 = \tfrac12$ and $\alpha_i = C$. The optimizer deliberately violated a margin it could have satisfied for free, because a wider band was worth more than the slack it cost. Objective $\tfrac12\cdot\tfrac14 + 2\cdot\tfrac14\cdot\tfrac12 = 0.375$, against $0.5$ for the hard-margin fit.
- **The dual agrees.** With $\sum_i\alpha_i y_i = 0$ forcing $\alpha_1 = \alpha_2 = \alpha$, the dual is $\max\ 2\alpha - 2\alpha^2$ subject to $0 \le \alpha \le C$, unconstrained optimum $\alpha = \tfrac12$, so $\alpha^* = \min(C, \tfrac12)$ and $w = 2\alpha^*$ — the same answer. At $C = \tfrac14$ its value is $2(\tfrac14) - 2(\tfrac14)^2 = 0.375$, matching the primal.

This is why $C$ belongs in your cross-validation grid ([4.1](04-01-model-selection-and-cross-validation.md)) and why the grid should be logarithmic: the interesting action is at $C$ small.

## Watch out

- **You might think** big $C$ means "more regularization" because $C$ looks like a penalty coefficient — **but actually** $C$ prices the *errors*, so big $C$ means *less* regularization. Keep the dictionary $\lambda = 1/(2C)$ in your head, or the mnemonic: $C$ is the cost of a mistake, and a firm that charges a lot for mistakes tries very hard not to make any.
- **You might think** "support vector" means "point sitting on the margin line" — **but actually** with slack it means $\alpha_i > 0$, which includes every point inside the band and every misclassified point. And the implications in the table run one way only. $y_i f(x_i) > 1$ *forces* $\alpha_i = 0$ and $y_i f(x_i) < 1$ *forces* $\alpha_i = C$, but a point sitting exactly on the margin line is only guaranteed $\alpha_i \in [0, C]$ — it may legitimately be priced at either end.
- **You might think** any support vector recovers $b$ via $b = y_i - w^\top x_i$ — **but actually** that identity needs $y_i f(x_i) = 1$, which only the $0 < \alpha_i < C$ points satisfy. In Example 1, $(3,3)$ gives $b = 1 - 6 = -5$ and $(1,3)$ gives $b = -1 - 4 = -5$, both right; the ceiling point $(4,2)$ gives $b = -1 - 6 = -7$, wrong. If *every* support vector sits at the ceiling, $b$ is genuinely not pinned down by the margin conditions — it is only determined up to an interval.

## One-liner

> Slack turns "separate the data" into "pay for what you can't separate," and the dual hands you the bill itemised: a price $\alpha_i \in [0, C]$ per point that sorts it into ignored, exactly on the margin, or paid for — with the data itself appearing only through inner products.

## Problems

**P1 (🟢)** A solver is run at $C = 4$ on the six points below and returns $w = (1,2)$, $b = -7$, so $f(x) = x_1 + 2x_2 - 7$.

$$(5,3)_{+},\quad (2,1)_{-},\quad (2,3)_{+},\quad (0,3)_{-},\quad (2.5,\,2.5)_{+},\quad (4,2)_{-}$$

(a) Tabulate $f(x_i)$, $y_i f(x_i)$ and $\xi_i$ for all six, and sort each into $\alpha_i = 0$, $0 < \alpha_i < C$, or $\alpha_i = C$. (b) Give the total training bill $\tfrac12\lVert w\rVert^2 + C\sum_i\xi_i$ and the number of training errors. (c) Which points could you delete from the training set without moving the boundary at all? (d) The point with the largest $\xi_i$ — how far is it, *geometrically*, from its own margin line?

**P2 (🟡)** Two limits of the cost knob.

(a) Show that as $C \to 0$ the optimal $\lVert w\rVert \to 0$, and say what classifier you are left with. *Hint: compare the optimal value with the value at $w = 0$, $b = 0$, and bound $\lVert w^*\rVert$ from the $\tfrac12\lVert w\rVert^2$ term alone.*

(b) Show that on **separable** data the soft-margin solution coincides *exactly* with the hard-margin solution for every $C$ above a finite threshold, and identify that threshold in terms of the hard-margin dual solution $\alpha^{\text{hard}}$. Then compute it for the one-dimensional data $x = 0$ (labelled $-1$) and $x = 4$ (labelled $+1$).

(c) On **non-separable** data, no such threshold exists. Say in two sentences what large $C$ does instead, and why the soft-margin problem still has a solution when the hard-margin problem does not.

**P3 (🔴)** The dual has $n$ variables regardless of the number of features $p$. Two deployments:

- **A — text.** $n = 20{,}000$ documents, $p = 2{,}000{,}000$ sparse tf-idf features.
- **B — click prediction.** $n = 50{,}000{,}000$ rows, $p = 40$ dense features.

(a) How many variables does the dual have in each, and how much memory does a dense kernel matrix in 8-byte floats take in each? (b) Which formulation — dual or the unconstrained hinge form of the primal — do you solve in each case, and what is the *first* thing that breaks if you pick the other one? (c) State in one sentence what this says about the reach of the kernel trick you are about to meet in [2.4](02-04-the-kernel-trick.md).

<details>
<summary>Solutions</summary>

**P1** (a) With $f(x) = x_1 + 2x_2 - 7$, margin lines $x_1 + 2x_2 = 8$ and $x_1 + 2x_2 = 6$:

| point | $y$ | $f(x)$ | $y f(x)$ | $\xi$ | class |
|---|---|---|---|---|---|
| $(5,3)$ | $+1$ | $4$ | $4$ | $0$ | $\alpha = 0$ |
| $(2,1)$ | $-1$ | $-3$ | $3$ | $0$ | $\alpha = 0$ |
| $(2,3)$ | $+1$ | $1$ | $1$ | $0$ | $0 < \alpha < C$ |
| $(0,3)$ | $-1$ | $-1$ | $1$ | $0$ | $0 < \alpha < C$ |
| $(2.5,\,2.5)$ | $+1$ | $\tfrac12$ | $\tfrac12$ | $\tfrac12$ | $\alpha = C$ |
| $(4,2)$ | $-1$ | $1$ | $-1$ | $2$ | $\alpha = C$ |

(b) $\lVert w\rVert^2 = 1 + 4 = 5$, so the bill is $\tfrac52 + 4\cdot\tfrac52 = 12.5$. Training errors are the points with $\xi_i > 1$: just $(4,2)$, so **one** error in six.

*Worth checking, and it is the non-obvious step: this really is the optimum.* The multipliers are $\alpha = (0,\,0,\,\tfrac72,\,\tfrac72,\,4,\,4)$. They satisfy the box $0 \le \alpha_i \le 4$ and $\sum_i\alpha_i y_i = \tfrac72 - \tfrac72 + 4 - 4 = 0$, and they reproduce $w$:

$$\tfrac72\big[(2,3) - (0,3)\big] + 4\big[(2.5,\,2.5) - (4,2)\big] = \tfrac72(2,0) + 4(-1.5,\,0.5) = (7,0) + (-6,2) = (1,2).$$

The dual value $\sum_i\alpha_i - \tfrac12\lVert w\rVert^2 = 15 - 2.5 = 12.5$ matches the primal bill, so the duality gap is zero and both are optimal.

(c) Only the $\alpha_i = 0$ points: $(5,3)$ and $(2,1)$. Note that $(2.5,\,2.5)$ and $(4,2)$ **cannot** be deleted even though they are "badly fitted" — they sit at $\alpha_i = C$ and each contributes $C y_i x_i$ to $w$. Deleting them is precisely the thing that would move the boundary most.

(d) $(4,2)$, with $\xi = 2$. Slack is measured in *functional* units, so divide by $\lVert w\rVert = \sqrt5$: the geometric distance is $2/\sqrt5 \approx 0.894$. Check it directly — its own margin line is $x_1 + 2x_2 = 6$ and the point has $x_1 + 2x_2 = 8$, giving $|8-6|/\sqrt5 = 2/\sqrt5$. ✓

**P2** (a) Evaluate the objective at $(w,b) = (0,0)$: every hinge is $\max(0, 1-0) = 1$, so the value is $Cn$. The optimum $J^*$ can be no worse, so $J^* \le Cn$. But $J^* \ge \tfrac12\lVert w^*\rVert^2$, since the slack term is nonnegative. Hence

$$\lVert w^*\rVert \le \sqrt{2Cn} \xrightarrow[C\to 0]{} 0 .$$

With $w = 0$ the score is the constant $b$, so you are left with a **constant classifier**. Minimizing $n_+\max(0,1-b) + n_-\max(0,1+b)$ over $b$ sends $b$ to $+1$ when $n_+ > n_-$ and to $-1$ when $n_+ < n_-$: you predict the **majority class everywhere**. That is the maximally regularized end of the path, and it confirms the direction — small $C$ is heavy regularization.

(b) Let $\alpha^{\text{hard}}$ solve the hard-margin dual, which is the same objective with the constraints $\alpha_i \ge 0$, $\sum_i\alpha_i y_i = 0$ and **no ceiling**. The soft dual's feasible set is that set intersected with $\alpha_i \le C$ — a *subset*. So if $\alpha^{\text{hard}}$ happens to lie in the subset, i.e. if

$$C \ \ge\ \max_i\,\alpha^{\text{hard}}_i ,$$

then it maximizes over the subset too (a maximizer over a larger set that lies in a smaller one is a maximizer over the smaller one), and the recovered $w = \sum_i\alpha_i y_i x_i$ is the hard-margin $w$. Above that threshold the ceiling is simply inactive.

For $x = 0$ ($y=-1$) and $x = 4$ ($y=+1$): $\sum_i\alpha_i y_i = 0$ gives $\alpha_1 = \alpha_2 = \alpha$, and since $x_1 = 0$ kills every term it appears in, the dual is $2\alpha - \tfrac12(16\alpha^2) = 2\alpha - 8\alpha^2$, maximized at $\alpha = \tfrac18$. So the threshold is $C = \tfrac18$. (Sanity check: $w = \alpha(4) - \alpha(0) = \tfrac12$, $b = -1$, both functional margins $= 1$, and the dual value $2(\tfrac18) - 8(\tfrac18)^2 = \tfrac18$ equals the primal $\tfrac12(\tfrac12)^2 = \tfrac18$. ✓)

(c) On non-separable data at least one point has $\xi_i > 0$ at every $C$, so its constraint stays at the ceiling forever and no threshold can exist. Raising $C$ shrinks the effective regularizer $1/(2C)$ toward zero, so the fit chases the smallest achievable total hinge loss: $\lVert w\rVert$ grows, the margin narrows, and the boundary contorts around exactly the noisy rows you wish it would ignore — textbook variance. The soft-margin problem is nevertheless feasible for every finite $C$ because *any* $(w,b)$ can be made legal by taking $\xi_i$ large enough, whereas the hard-margin constraint set is empty and there is nothing to optimize over.

**P3** (a) The dual has one variable per training point, so **A: 20,000 variables; B: 50,000,000 variables**. A dense kernel matrix has $n^2$ entries at 8 bytes:

- A: $2\times10^4$ squared $= 4\times10^8$ entries $\times\,8 = 3.2\times10^9$ bytes $\approx$ **3.2 GB** — large but it fits on one machine.
- B: $5\times10^7$ squared $= 2.5\times10^{15}$ entries $\times\,8 = 2\times10^{16}$ bytes $\approx$ **20 petabytes** — not a tuning problem, a physics problem.

(b) **A: solve the dual.** With $p = 100\times n$ the primal carries two million weights while the dual carries twenty thousand, and the dual is the only formulation that gives you nonlinear kernels. If you insisted on the primal you would still be fine for a *linear* SVM (sparse features make hinge-loss subgradient steps cheap), but you would have given up kernels entirely — the first thing that breaks is expressiveness, not memory.

**B: solve the primal in hinge form**, with stochastic gradient descent ([1.6](01-06-gradient-descent-for-learning.md)) over its $p + 1 = 41$ parameters. If you reached for the dual, the first thing to break is not the $\alpha$ vector — that is only $4\times10^8$ bytes, about 400 MB — but the kernel matrix at 20 PB, and it breaks before you have looked at a single data point.

(c) The kernel trick makes $p$ free and makes $n$ expensive: it buys you arbitrarily rich — even infinite-dimensional — feature spaces at a cost that scales like $n^2$ in memory and worse in time, which is exactly why kernel SVMs dominate wide-and-short problems like genomics and text and lose to linear models and trees on tall-and-thin ones.

</details>

## Flashback

**From Lesson 2.2 (Maximum-margin classifiers):** Positives at $(3,3)$ and $(4,5)$; negatives at $(1,2)$ and $(3,1)$. The maximum-margin classifier is $w = (\tfrac12,\,1)$, $b = -\tfrac72$.

(a) Verify this is the canonical scaling, give the geometric margin, and list the support vectors. (b) Rescale to $w' = (2,4)$, $b' = -14$. What are the functional and geometric margins of $(3,3)$ now, and which of the two is a property of the *classifier* rather than of the parameterization? (c) A new point $(3,4)$ arrives labelled $-1$. Holding the classifier from (a) fixed, compute its slack $\xi$ and the geometric distance from it to its own margin line.

<details>
<summary>Solution</summary>

(a) With $f(x) = \tfrac12 x_1 + x_2 - \tfrac72$, the functional margins $y_i f(x_i)$ are $1$ at $(3,3)$, $\tfrac72$ at $(4,5)$, $1$ at $(1,2)$ and $1$ at $(3,1)$. The minimum is $1$, so the scaling is canonical. Then

$$\lVert w\rVert = \sqrt{\tfrac14 + 1} = \frac{\sqrt5}{2}, \qquad \text{geometric margin} = \frac{1}{\lVert w\rVert} = \frac{2}{\sqrt5} \approx 0.894 .$$

Support vectors: $(3,3)$, $(1,2)$, $(3,1)$ — the three achieving functional margin $1$. Not $(4,5)$, which is comfortably outside. (Their multipliers are $\tfrac58$, $\tfrac14$, $\tfrac38$, and indeed $\tfrac58(3,3) - \tfrac14(1,2) - \tfrac38(3,1) = (\tfrac12, 1) = w$ with $\tfrac58 - \tfrac14 - \tfrac38 = 0$.)

(b) $f'(3,3) = 6 + 12 - 14 = 4$, so the **functional** margin quadrupled to $4$. But $\lVert w'\rVert = \sqrt{20} = 2\sqrt5$, so the **geometric** margin is $4/(2\sqrt5) = 2/\sqrt5$ — unchanged. The geometric one is the classifier's property: $\operatorname{sign}(f')= \operatorname{sign}(f)$ everywhere, so $(w',b')$ and $(w,b)$ are the *same rule*, and any quantity that changes under the rescaling is describing the coordinates you wrote it in, not the rule.

(c) $f(3,4) = \tfrac32 + 4 - \tfrac72 = 2$, and $y = -1$, so $y f = -2$ and

$$\xi = \max(0,\ 1 - yf) = 3 .$$

$\xi > 1$, confirming the point is misclassified. Slack lives in functional units, so its geometric distance from the $f = -1$ line is $\xi/\lVert w\rVert = 3/(\sqrt5/2) = 6/\sqrt5 \approx 2.68$. Check directly: that line is $x_1 + 2x_2 = 5$ and the point has $x_1 + 2x_2 = 11$, so the distance is $6/\sqrt5$. ✓

**The connection to this lesson.** In 2.2 the canonical scaling looked like a convenience — a way to pin down an arbitrary constant. Once slack enters it becomes load-bearing: the "$1$" in $y_i f(x_i) \ge 1 - \xi_i$ is the unit $\xi_i$ is denominated in, so unlike the geometric margin, $\xi_i$ is **not** scale-free. Rescale by $4$ and this point's slack reads $9$, not $3$, because the margin band shrank by $4$ at the same time. Comparing $\sum_i\xi_i$ across fits with different $\lVert w\rVert$ compares two different currencies — which is exactly why the objective has to carry both terms at once.

</details>

## Connections

- **Backward:** this is [2.2's](02-02-maximum-margin-classifiers.md) quadratic program with its infeasibility repaired, and the hinge form makes it a sibling of [1.4's](01-04-regularization-ridge-and-lasso.md) ridge regression — same $\ell_2$ penalty, different loss. The hinge is also the natural comparison for [1.5's](01-05-logistic-regression-and-classification.md) cross-entropy: both are convex surrogates for the 0–1 loss, but the hinge is exactly zero once a point clears the margin, which is *why* most points end up with $\alpha_i = 0$ and logistic regression has no analogue of a support vector.
- **Forward:** [2.4](02-04-the-kernel-trick.md) needs only one sentence from this lesson — the dual touches the data only through $x_i^\top x_j$ — and replaces that inner product with a kernel. The cost accounting of P3 is what makes the trick a real choice rather than a free lunch, and $C$ joins the kernel's own parameters in the cross-validation grid of [4.1](04-01-model-selection-and-cross-validation.md).
- **Sideways:** the multiplier $\alpha_i$ is a **shadow price**, the same object as a budget constraint's multiplier in constrained utility maximization, and "you only pay for a constraint that binds" is complementary slackness in [`convex-optimization` 3.3](../../convex-optimization/lessons/03-03-kkt-conditions.md) exactly as stated there. Whether the resulting margin actually buys you generalization — as opposed to merely looking safe — is a theorem, and it belongs to [`statistical-learning`](../../statistical-learning/syllabus.md) (not yet built; the mechanics and the cost are what this course owns).
