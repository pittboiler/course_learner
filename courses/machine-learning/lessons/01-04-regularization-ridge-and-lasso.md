# Machine Learning · Lesson 1.4: Regularization — ridge and lasso

> ⏱ ~15 min · Module 1: Foundations and linear models · Builds on: [1.2 (bias–variance)](01-02-generalization-and-the-bias-variance-tradeoff.md), [1.3 (least squares)](01-03-linear-regression-and-least-squares.md) · Unlocks: 1.6 (gradient descent), 2.3 (the cost $C$)

## Why this matters

Least squares has no dial. You hand it a design matrix and it hands you back the projection, take it or leave it — and when the columns are nearly collinear, or when $p > n$, what it hands back is either wildly unstable or not unique at all. [Lesson 1.3](01-03-linear-regression-and-least-squares.md) ended at that door.

Regularization is the dial. You add a penalty on the size of the coefficients, and one number $\lambda$ buys you variance at the price of bias. That much is folklore. What makes this lesson worth fifteen minutes is that **both penalties do something specific and computable** — under the right conditions each has a closed form you can evaluate in your head, and those two formulas explain every qualitative claim anyone makes about ridge and lasso.

The shape you are about to meet — *fit plus $\lambda$ times complexity* — is not confined to regression. It is the SVM's cost $C$ in [2.3](02-03-soft-margins-and-the-svm-dual.md), and it is cost-complexity pruning in [2.5](02-05-decision-trees.md). Learn it once here, where you can solve it exactly.

## The idea

Ordinary least squares will happily buy a tiny reduction in training error with an enormous coefficient. If two columns nearly agree, it can put $+400$ on one and $-397$ on the other, cancel them almost perfectly, and shave the residual by a hair. That fit is not wrong on the training set. It is wrong about the *world*, and it will swing violently the next time you collect data.

So charge for coefficient size. Minimise

$$\underbrace{\lVert y - X\beta\rVert^2}_{\text{fit}} \;+\; \lambda \cdot \underbrace{\text{(size of }\beta)}_{\text{penalty}},$$

where $\lambda \ge 0$ is the exchange rate: $\lambda = 0$ is plain least squares, and $\lambda \to \infty$ drives every coefficient to zero.

The whole lesson is that **the two natural ways to measure "size" behave completely differently**:

| penalty | name | what it does to a coefficient |
|---|---|---|
| $\sum_j \beta_j^2$ | ridge, $\ell_2$ | multiplies it by a constant factor — shrinks everything, zeroes nothing |
| $\sum_j \lvert\beta_j\rvert$ | lasso, $\ell_1$ | subtracts a constant, then clips at zero — **kills small coefficients outright** |

Multiply versus subtract. That single difference is why ridge is the stability tool and lasso is the feature-selection tool, and the next section makes it exact.

## The formal version

Fix notation: $X$ is $n \times p$ with columns $x_1,\dots,x_p$, and $y \in \mathbb R^n$. Assume throughout that $y$ and the columns of $X$ have been **centred**, so no intercept appears; see the scaling warning at the end of this section for why that matters.

**Ridge.** Minimise
$$J_{\text{ridge}}(\beta) = \lVert y - X\beta\rVert^2 + \lambda\lVert\beta\rVert_2^2 .$$
Setting the gradient to zero gives $-2X^\top(y - X\beta) + 2\lambda\beta = 0$, i.e.
$$\hat\beta_\lambda = (X^\top X + \lambda I)^{-1} X^\top y .$$
*In words: the normal equations with $\lambda$ added down the diagonal.* (Card entry: [ridge regression](../reference.md#ridge-regression).) And that addition is not cosmetic — $X^\top X$ is positive semi-definite, so every eigenvalue of $X^\top X + \lambda I$ is at least $\lambda > 0$. **The inverse always exists, even when $p > n$.** Ridge does not merely stabilise the $p > n$ case; it makes it well-posed.

**Lasso.** Minimise
$$J_{\text{lasso}}(\beta) = \lVert y - X\beta\rVert^2 + \lambda\lVert\beta\rVert_1 .$$
This has no closed form in general, because $\lVert\beta\rVert_1$ is not differentiable at zero — which is exactly the property that produces sparsity. Its optimality condition is a *subgradient* condition: at the solution,
$$2\,x_j^\top(y - X\hat\beta) = \lambda\,\operatorname{sign}(\hat\beta_j) \ \text{ if } \hat\beta_j \ne 0,$$
$$\bigl\lvert 2\,x_j^\top(y - X\hat\beta)\bigr\rvert \le \lambda \ \text{ if } \hat\beta_j = 0.$$
*In words: an active feature's correlation with the residual is pinned to exactly $\lambda/2$ in magnitude; an inactive one is merely allowed to be smaller.* These are the KKT conditions for the problem — see [`convex-optimization` 3.3](../../convex-optimization/lessons/03-03-kkt-conditions.md) for the derivation.

One immediate consequence: at $\beta = 0$ the condition holds for every $j$ as long as $\lambda \ge 2\max_j\lvert x_j^\top y\rvert$. So there is a finite $\lambda_{\max}$ above which **every** coefficient is zero, and as $\lambda$ comes down from it, the first feature to enter is the one with the largest $\lvert x_j^\top y\rvert$. Tracing the solution as $\lambda$ falls is the **regularization path**.

### The orthonormal case, where both are explicit

Suppose the design is orthonormal: $X^\top X = I$. Then $\hat\beta^{\text{OLS}} = X^\top y$, and expanding the residual,
$$\lVert y - X\beta\rVert^2 = \lVert y\rVert^2 - 2\beta^\top\hat\beta^{\text{OLS}} + \lVert\beta\rVert^2,$$
which up to a constant is $\sum_j (\beta_j - \hat\beta_j^{\text{OLS}})^2$. **The problem separates into $p$ one-dimensional problems**, and each solves in a line:

- **Ridge:** minimise $(\beta_j - b_j)^2 + \lambda\beta_j^2$ where $b_j = \hat\beta_j^{\text{OLS}}$. Differentiate: $2(\beta_j - b_j) + 2\lambda\beta_j = 0$, so
  $$\hat\beta_j^{\text{ridge}} = \frac{\hat\beta_j^{\text{OLS}}}{1+\lambda}.$$
  *Proportional shrinkage.* Every coefficient is scaled by the same factor $1/(1+\lambda) < 1$. Nothing ever reaches zero for finite $\lambda$.

- **Lasso:** minimise $(\beta_j - b_j)^2 + \lambda\lvert\beta_j\rvert$. Away from zero the derivative is $2(\beta_j - b_j) + \lambda\operatorname{sign}(\beta_j)$, giving $\beta_j = b_j - \tfrac{\lambda}{2}\operatorname{sign}(\beta_j)$; and $\beta_j = 0$ is optimal whenever $\lvert b_j\rvert \le \lambda/2$. Together:
  $$\hat\beta_j^{\text{lasso}} = \operatorname{sign}\bigl(\hat\beta_j^{\text{OLS}}\bigr)\Bigl(\bigl\lvert\hat\beta_j^{\text{OLS}}\bigr\rvert - \tfrac{\lambda}{2}\Bigr)_+ ,$$
  where $(u)_+ = \max(u, 0)$. This is **[soft thresholding](../reference.md#soft-thresholding)**: move each coefficient $\lambda/2$ toward the origin and stop when you get there.

**The $\lambda/2$ is a convention, not a fact.** It comes from writing the fit term as $\lVert y - X\beta\rVert^2$ rather than $\tfrac12\lVert y - X\beta\rVert^2$; with the half out front the threshold is $\lambda$. Always check which scaling a formula or a library is using before you compare two $\lambda$ values.

Two numbers to fix the picture, at $\lambda = 2$ (threshold $\lambda/2 = 1$):

| $\hat\beta^{\text{OLS}}$ | ridge | lasso |
|---|---|---|
| $3$ | $3/3 = 1$ | $3 - 1 = 2$ |
| $0.5$ | $0.5/3 = 1/6$ | $\mathbf{0}$ |

The large coefficient is cut by two-thirds under ridge but only by a third under lasso; the small one survives under ridge and is **deleted** under lasso. Lasso is harsher on the small and gentler on the large. That is the whole personality difference.

**Why zero, geometrically?** The $\ell_1$ ball has corners on the coordinate axes, and the level sets of the squared error touch a corner far more often than they touch a smooth face. That argument belongs to [`convex-optimization` 5.1](../../convex-optimization/lessons/05-01-least-squares-lasso.md) — read it there; this lesson gives you the algebraic version of the same fact.

### Ridge through the SVD

Write the thin SVD $X = U\Sigma V^\top$ with singular values $\sigma_1 \ge \dots \ge \sigma_p > 0$ ([`linalg-refresher` 5.2](../../linalg-refresher/lessons/05-02-svd.md)). Then $X^\top X = V\Sigma^2 V^\top$ and $X^\top X + \lambda I = V(\Sigma^2 + \lambda I)V^\top$, so
$$\hat\beta_\lambda = V(\Sigma^2 + \lambda I)^{-1}\Sigma\,U^\top y, \qquad \hat y_\lambda = X\hat\beta_\lambda = \sum_{i=1}^{p} u_i\,\frac{\sigma_i^2}{\sigma_i^2 + \lambda}\,\bigl(u_i^\top y\bigr).$$
*In words: OLS keeps each left-singular direction in full; ridge keeps a fraction of it, and the fraction is $\sigma_i^2/(\sigma_i^2+\lambda)$.*

Read that fraction. For a direction with $\sigma_i^2 \gg \lambda$ it is essentially 1 — ridge leaves the well-determined directions alone. For a direction with $\sigma_i^2 \ll \lambda$ it is essentially 0 — ridge all but deletes the directions the data barely pins down. **Ridge is not a uniform haircut on the fit; it is a targeted attack on the low-variance directions of the design**, which are precisely the ones responsible for collinearity blowing up OLS. (The sum of those fractions is the model's *effective degrees of freedom*, developed in [`statistical-learning`](../../statistical-learning/syllabus.md) — not yet built.)

### Scale: the caveat that is not optional

Neither penalty is scale-invariant. Measure a column in centimetres instead of metres and its OLS coefficient shrinks by a factor of 100 — so its *penalty* shrinks by $10^4$ under ridge and by $10^2$ under lasso, and it becomes almost free to use. The units of your features silently decide which features get regularized. Hence the standing procedure: **standardise every column to mean 0 and variance 1 first, and leave the intercept unpenalised** (penalising it would mean the fit depends on where you put the origin of $y$). With $y$ centred too, the intercept is just $\bar y$.

There is one more reading worth a sentence: ridge is the posterior mode under a Gaussian prior on $\beta$, and lasso under a Laplace prior. That equivalence is [`statistical-learning`](../../statistical-learning/syllabus.md)'s (not yet built; stated here where it is used) — it is a genuinely useful way to *interpret* $\lambda$, and it is not needed to compute anything below.

## Picture

![Two transfer functions drawn on the same axes, with the OLS coefficient on the horizontal axis and the penalised estimate on the vertical. The ridge estimate is a straight line through the origin with slope one third. The lasso estimate is flat at zero between minus one and one, then rises parallel to the dashed identity line.](assets/01-04-fig1.svg)

At $\lambda = 2$: ridge is the blue line of slope $1/(1+\lambda) = 1/3$ through the origin, lasso is the coral kinked line with a flat dead zone of half-width $\lambda/2 = 1$, and the dashed grey diagonal is OLS.

Three things are visible at a glance and are each worth naming:

1. **Ridge never touches the axis.** Its line passes through the origin with positive slope, so a nonzero input gives a nonzero output. No feature is ever selected out.
2. **Lasso has a flat segment of width $\lambda$.** Everything inside it is set to exactly zero, and this is what "sparsity" means operationally.
3. **Outside the dead zone, lasso runs *parallel* to the identity** — it subtracts a constant $\lambda/2$ no matter how large the coefficient. Ridge's gap from the identity keeps growing. So for very large coefficients **lasso is the gentler penalty**, which is the opposite of most people's intuition.

## Worked examples

**Example 1 (mechanical): soft thresholding, and checking it with the KKT condition.** Orthonormal design, $\hat\beta^{\text{OLS}} = (2.4,\ -0.8,\ 0.3)$, $\lambda = 1$, so the threshold is $\lambda/2 = 0.5$.

| $j$ | $\hat\beta_j^{\text{OLS}}$ | ridge: $\hat\beta_j/(1+\lambda)$ | lasso: $\operatorname{sign}\cdot(\lvert\hat\beta_j\rvert - 0.5)_+$ |
|---|---|---|---|
| 1 | $2.4$ | $1.2$ | $+(2.4 - 0.5) = 1.9$ |
| 2 | $-0.8$ | $-0.4$ | $-(0.8 - 0.5) = -0.3$ |
| 3 | $0.3$ | $0.15$ | $0.3 < 0.5 \Rightarrow \mathbf{0}$ |

Now verify with the subgradient condition, which is the check worth learning because it works on *any* design. Orthonormality gives $x_j^\top(y - X\hat\beta) = \hat\beta_j^{\text{OLS}} - \hat\beta_j$, so:

- $j=1$: $2(2.4 - 1.9) = 1.0 = \lambda$, and $\operatorname{sign}(1.9) = +1$. Pinned exactly, as required. ✓
- $j=2$: $2(-0.8 + 0.3) = -1.0 = \lambda\cdot\operatorname{sign}(-0.3)$. ✓
- $j=3$: $\lvert 2(0.3 - 0)\rvert = 0.6 \le \lambda = 1$. The inequality is *slack*, and that slack is why the coordinate is allowed to sit at zero. ✓

Notice the pattern: **every active coefficient has residual correlation exactly $\lambda/2$**, whatever its size. The lasso does not rank features by coefficient magnitude — it equalises their correlation with what is left over.

**Example 2 (why you'd care): ridge as a collinearity fix.** A design with singular values $\sigma = (4,\ 2,\ 0.5)$ and response projections $u_i^\top y = (8,\ 4,\ 3)$. Take $\lambda = 1$.

| $i$ | $\sigma_i$ | $\sigma_i^2$ | factor $\dfrac{\sigma_i^2}{\sigma_i^2+1}$ | OLS coef. $\dfrac{u_i^\top y}{\sigma_i}$ | ridge coef. $\dfrac{\sigma_i\,u_i^\top y}{\sigma_i^2+1}$ |
|---|---|---|---|---|---|
| 1 | $4$ | $16$ | $16/17 \approx 0.941$ | $2$ | $32/17 \approx 1.88$ |
| 2 | $2$ | $4$ | $4/5 = 0.8$ | $2$ | $1.6$ |
| 3 | $0.5$ | $0.25$ | $1/5 = 0.2$ | $\mathbf{6}$ | $\mathbf{1.2}$ |

Read the last column against the second-to-last. Directions 1 and 2 lose 6% and 20% of their weight. Direction 3 — the one the design barely measures, $\sigma_3 = 0.5$ — carried an OLS coefficient of **6**, three times either of the others, entirely because a modest projection ($u_3^\top y = 3$) was divided by a tiny singular value. Ridge cuts it by a factor of 5, to 1.2.

That is the mechanism behind "ridge helps with multicollinearity", stated as arithmetic instead of as a slogan: a near-collinear design has a small $\sigma_i$; small $\sigma_i$ means dividing by something small; dividing by something small is where the variance comes from; and $\sigma_i^2/(\sigma_i^2+\lambda)$ is a filter that switches off exactly there. **One value of $\lambda$ spends almost all of its effect on one direction.**

## Watch out

- **You might think** more regularization is safer, so when in doubt turn $\lambda$ up — **but actually** test error is U-shaped in $\lambda$ exactly as it is in model complexity ([1.2](01-02-generalization-and-the-bias-variance-tradeoff.md)), because bias² grows while variance falls. The optimum is interior, it depends on the data, and the only honest way to find it is cross-validation ([4.1](04-01-model-selection-and-cross-validation.md)). Both $\lambda = 0$ and $\lambda = \infty$ are bad, and neither is bad for the same reason.
- **You might think** a coefficient the lasso set to zero means "this feature does not matter" — **but actually** it means "given the other features retained, this one bought too little." With two correlated features the lasso picks one nearly at random and reports the other as zero (P2). A zero is a statement about the fitted model, never about the world.
- **You might think** regularization is a property of your model — **but actually** it is a property of your model *and your units*. Rescale a column and you have silently changed how hard that column is penalised. If you did not standardise, your $\lambda$ means something different for every feature, and comparing coefficient magnitudes across features is meaningless too.

## One-liner

> Under an orthonormal design ridge **divides** every coefficient by $1+\lambda$ and lasso **subtracts** $\lambda/2$ and clips at zero — multiply versus subtract is the entire difference between shrinkage and selection.

## Problems

**P1 (🟢)** An orthonormal design gives $\hat\beta^{\text{OLS}} = (4,\ -1.5,\ 0.6,\ -0.2)$.

(a) Tabulate the ridge and lasso estimates at $\lambda = 1$ and at $\lambda = 3$.
(b) At each $\lambda$, say which coefficients the lasso sets to zero.
(c) One coefficient at $\lambda = 3$ lands on the threshold exactly. Which, and what does the subgradient condition say about that case?

**P2 (🟡)** Two identical columns. Take $x_1 = x_2 = (1,\ 1,\ -1,\ -1)^\top$ and $y = (2,\ 2,\ -2,\ -2)^\top$, with $\lambda = 4$. (Useful: $x_1^\top y = 8$, $\lVert x_1\rVert^2 = 4$, $\lVert y\rVert^2 = 16$.)

(a) Show the fit depends on $\beta$ only through $s = \beta_1 + \beta_2$, and find the lasso's optimal $s$. Then show that *every* split of that $s$ into two non-negative parts is an exact minimiser.
(b) Find the ridge solution, and show it is unique.
(c) Now suppose the second column is perturbed by a hair, so that $x_2^\top y = 8 + \eta$ for some tiny $\eta \ne 0$. Which feature does the lasso bring in first as $\lambda$ comes down from $\lambda_{\max}$, and what happens if $\eta$ changes sign? Say which estimator you want when the deliverable is a stable claim about *which* feature matters.

**P3 (🔴)** A colleague standardises every feature column using the mean and standard deviation of the **whole** dataset, and only then runs 10-fold cross-validation to pick $\lambda$.

(a) Is this a leak? Say precisely what information crosses the boundary.
(b) Quantify it. For a column with population standard deviation $\sigma$, $n$ rows and $k$ folds, show that the centring constant used differs from the honest training-fold one by a random amount with standard deviation $\sigma/\sqrt{n(k-1)}$, and evaluate it at $n = 1000, k = 10$ and at $n = 50, k = 10$.
(c) Contrast it with a leak that is *not* small, and state your recommendation in one sentence.

<details>
<summary>Solutions</summary>

**P1** Ridge is $\hat\beta_j/(1+\lambda)$; lasso is soft thresholding at $\lambda/2$.

(a) At $\lambda = 1$ the threshold is $0.5$; at $\lambda = 3$ it is $1.5$.

| $\hat\beta_j^{\text{OLS}}$ | ridge $\lambda{=}1$ | lasso $\lambda{=}1$ | ridge $\lambda{=}3$ | lasso $\lambda{=}3$ |
|---|---|---|---|---|
| $4$ | $2$ | $3.5$ | $1$ | $2.5$ |
| $-1.5$ | $-0.75$ | $-1$ | $-0.375$ | $\mathbf{0}$ |
| $0.6$ | $0.3$ | $0.1$ | $0.15$ | $\mathbf{0}$ |
| $-0.2$ | $-0.1$ | $\mathbf{0}$ | $-0.05$ | $\mathbf{0}$ |

(b) At $\lambda = 1$: only the fourth ($\lvert -0.2\rvert < 0.5$). At $\lambda = 3$: the second, third and fourth — three of four features are dropped and the model keeps one.

Note that ridge's four estimates at $\lambda = 3$ are just the OLS vector divided by 4: the *ratios* between coefficients are untouched, at every $\lambda$. The lasso's ratios change at every $\lambda$, which is exactly why it can reorder and delete.

(c) The second coefficient: $\lvert -1.5\rvert - \lambda/2 = 1.5 - 1.5 = 0$, so it is set to exactly zero and $\lambda = 3$ is precisely the value at which it leaves the model. The subgradient condition at that point holds with **equality on the inactive branch**: $\lvert 2 x_2^\top(y - X\hat\beta)\rvert = 2(1.5) = 3 = \lambda$. This is a knot of the regularization path — the boundary case where the "may be zero" inequality is tight, and $\hat\beta_2$ is continuous but its slope in $\lambda$ is not.

**P2** (a) Since $x_1 = x_2 = x$, the fitted vector is $\beta_1 x + \beta_2 x = s\,x$ with $s = \beta_1+\beta_2$. So
$$\lVert y - sx\rVert^2 = \lVert y\rVert^2 - 2s\,x^\top y + s^2\lVert x\rVert^2 = 16 - 16s + 4s^2 .$$
For $\beta_1,\beta_2 \ge 0$ the penalty is $\lambda(\beta_1+\beta_2) = 4s$, so the objective is $16 - 12s + 4s^2$. Setting the derivative $-12 + 8s$ to zero gives
$$s^\ast = \tfrac{3}{2}, \qquad J_{\text{lasso}} = 16 - 18 + 9 = 7 .$$
A mixed-sign pair is strictly worse: it has the same $s$ but $\lvert\beta_1\rvert + \lvert\beta_2\rvert > \lvert s\rvert$, so it pays more penalty for the same fit. Hence the minimisers are exactly
$$\{(\beta_1,\beta_2) : \beta_1 + \beta_2 = \tfrac32,\ \beta_1,\beta_2 \ge 0\},$$
a whole segment. Checked directly: $(1.5, 0)$, $(0.75, 0.75)$ and $(0, 1.5)$ all give objective exactly $7$, while $(0.8, 0.8)$ — same split, wrong $s$ — gives $7.04$. **The lasso's answer here includes "use only feature 1" and "use only feature 2" as equally optimal, and a solver returns whichever its tie-breaking rule happens to reach.**

(b) Ridge pays $\lambda(\beta_1^2 + \beta_2^2)$. For fixed $s$ that is minimised at $\beta_1 = \beta_2 = s/2$, where it equals $\lambda s^2/2 = 2s^2$ — and it is *strictly* larger for any unequal split, since $\beta_1^2+\beta_2^2$ is strictly convex on the line $\beta_1+\beta_2 = s$. So the objective is $16 - 16s + 6s^2$, minimised at
$$s^\ast = \tfrac{16}{12} = \tfrac43, \qquad \hat\beta = \bigl(\tfrac23,\ \tfrac23\bigr), \qquad J_{\text{ridge}} = \tfrac{16}{3} \approx 5.333 .$$
Uniqueness is immediate from strict convexity: for $\lambda > 0$ the ridge objective is strictly convex in $\beta$ even when $X^\top X$ is singular, as it is here. (Compare $(4/3,\ 0)$, the same $s$ split unevenly: objective $80/9 \approx 8.889$, much worse.)

(c) The entry order is governed by $\lambda_{\max} = 2\max_j\lvert x_j^\top y\rvert$: the first feature to become nonzero is the one with the largest $\lvert x_j^\top y\rvert$. With $\eta > 0$ that is feature 2; with $\eta < 0$ it is feature 1. **An arbitrarily small perturbation flips which feature the sparse model reports** — the selection is not merely unstable, it is decided by noise. Ridge's estimate, by contrast, moves continuously: perturbing the data by $\eta$ moves $(\,2/3,\ 2/3\,)$ by $O(\eta)$ and never reassigns the weight.

So if the deliverable is "which feature matters", **ridge** (or an elastic net, which mixes both penalties precisely to restore the grouping) is what you want; the lasso's zero is a modelling choice, not evidence. If the deliverable is a short model you have to deploy or explain, the lasso's arbitrariness is a price you may be willing to pay — but say out loud that you paid it.

**P3** (a) **Yes, technically.** The held-out fold's rows contributed to $\bar x_j$ and $s_j$, the constants used to transform the training rows, so the model scored on that fold was built using a function of it. The CV estimate is therefore optimistically biased.

(b) Let $\bar x_f$ be the held-out fold's mean and $\bar x_{-f}$ the training folds' mean. Since the fold is a fraction $1/k$ of the data,
$$\bar x = \tfrac{1}{k}\bar x_f + \tfrac{k-1}{k}\bar x_{-f} \quad\Longrightarrow\quad \bar x - \bar x_{-f} = \tfrac{1}{k}\bigl(\bar x_f - \bar x_{-f}\bigr).$$
The two means are independent, over $n/k$ and $n(k-1)/k$ rows respectively, so
$$\operatorname{Var}(\bar x - \bar x_{-f}) = \frac{1}{k^2}\left(\frac{k\sigma^2}{n} + \frac{k\sigma^2}{n(k-1)}\right) = \frac{\sigma^2}{kn}\cdot\frac{k}{k-1} = \frac{\sigma^2}{n(k-1)} .$$
Hence the standard deviation is $\sigma/\sqrt{n(k-1)}$. At $n = 1000$, $k = 10$: $\sigma/\sqrt{9000} \approx 0.0105\,\sigma$ — about **1% of one standard deviation**. At $n = 50$, $k = 10$: $\sigma/\sqrt{450} \approx 0.047\,\sigma$, about 4.7%. (Simulation agrees: 0.0105 and 0.0467.) The scale constant is off by the same order. So each standardised feature value is displaced by roughly $0.01$ in the large case, and the prediction by $0.01$ times a coefficient — swamped by the residual noise. **The bias is real and it is negligible at any respectable $n$.**

(c) The contrast is a leak that touches $y$. Screen 50 features out of 5000 by their correlation with $y$ on the full dataset, *then* cross-validate the fit on the survivors, and you can report near-zero CV error on data that is pure noise — because the selection step already saw every label. That is a difference of kind, not of degree: the standardisation leak uses only the marginal distribution of $x$ and shrinks like $1/\sqrt n$, while the selection leak uses the labels and does not shrink at all. [Lesson 4.1](04-01-model-selection-and-cross-validation.md) has the full treatment.

**Recommendation:** standardise inside the fold anyway — it costs one line and removes the argument — but if your CV error looks too good to be true, do not go looking for the explanation here; go looking for a step that touched $y$.

</details>

## Flashback

**From Lesson 1.2 (Generalization and the bias–variance trade-off):** Recall the decomposition, which we state here and use as given: for a fixed test point, expected squared error splits as
$$\mathbb E\bigl[(y - \hat f(x_0))^2\bigr] = \bigl(\mathbb E\hat f(x_0) - f(x_0)\bigr)^2 + \operatorname{Var}\hat f(x_0) + \sigma^2,$$
bias² plus variance plus irreducible noise. (Proof: [`statistical-learning`](../../statistical-learning/syllabus.md), not yet built; stated here where it is used.)

Take the simplest possible ridge problem: one orthonormal column, true coefficient $\beta = 2$, and an OLS estimate $\hat\beta^{\text{OLS}}$ that is unbiased with variance $\tau^2 = 4$. The ridge estimate is $\hat\beta_\lambda = \hat\beta^{\text{OLS}}/(1+\lambda)$.

(a) **Before computing anything:** which of the three terms does $\lambda$ move, and in which direction as $\lambda$ grows?
(b) Give bias², variance and their sum as functions of $\lambda$, and evaluate at $\lambda = 0,\ 1,\ 2$.
(c) Find the optimal $\lambda$ in general, in terms of $\beta$ and $\tau^2$. What does its sign tell you about whether OLS is ever the best choice here?

<details>
<summary>Solution</summary>

(a) Ridge cannot touch $\sigma^2$ — irreducible noise is a property of the world, not of the estimator, and no amount of shrinkage reaches it. It **raises bias²** (shrinking a correct estimate toward zero makes it wrong on average) and **lowers variance** (a scaled-down random variable has scaled-down spread). Both monotonically in $\lambda$. That the sum can go *down* is the entire case for regularization.

(b) With $\mathbb E\hat\beta^{\text{OLS}} = \beta$ and $\operatorname{Var}\hat\beta^{\text{OLS}} = \tau^2$:
$$\text{bias} = \frac{\beta}{1+\lambda} - \beta = -\frac{\lambda\beta}{1+\lambda}, \qquad \text{bias}^2 = \frac{\lambda^2\beta^2}{(1+\lambda)^2}, \qquad \operatorname{Var} = \frac{\tau^2}{(1+\lambda)^2}.$$
So the estimation error is
$$\text{MSE}(\lambda) = \frac{\lambda^2\beta^2 + \tau^2}{(1+\lambda)^2}.$$
With $\beta = 2$, $\tau^2 = 4$:

| $\lambda$ | bias² | variance | MSE |
|---|---|---|---|
| $0$ | $0$ | $4$ | $4$ |
| $1$ | $1$ | $1$ | $\mathbf{2}$ |
| $2$ | $16/9 \approx 1.78$ | $4/9 \approx 0.44$ | $20/9 \approx 2.22$ |

$\lambda = 1$ **halves** the error of OLS, and it does it by giving up a full unit of bias² to buy back three units of variance. (Note $\lambda = 0.5$ also gives $20/9$ — the curve is flat-bottomed around its minimum, which is why cross-validation can afford to be imprecise about $\lambda$.)

(c) Differentiate $\text{MSE}(\lambda)$. The numerator of the derivative is proportional to $\lambda\beta^2(1+\lambda) - (\lambda^2\beta^2 + \tau^2) = \lambda\beta^2 - \tau^2$, so
$$\lambda^\ast = \frac{\tau^2}{\beta^2},$$
which is $4/4 = 1$ here — matching the table. In words: shrink more when the noise is large or the true signal is small.

And the punchline: $\lambda^\ast > 0$ whenever $\tau^2 > 0$. **For any nonzero noise there is a positive $\lambda$ that beats OLS**, so OLS is never the MSE-optimal member of this family. You cannot use that in practice — $\lambda^\ast$ depends on the $\beta$ you are trying to estimate — but it is the reason the search for a good $\lambda$ is worth running at all, rather than a heuristic you apply when a fit looks unstable.

</details>

## Connections

- **Backward:** the objective is [1.3's](01-03-linear-regression-and-least-squares.md) least-squares problem plus one term, and the ridge solution is its normal equations with $\lambda$ on the diagonal; the SVD reading is [`linalg-refresher` 5.2](../../linalg-refresher/lessons/05-02-svd.md) doing all the work. The flashback is [1.2's](01-02-generalization-and-the-bias-variance-tradeoff.md) decomposition with $\lambda$ as the complexity dial, and the U-shaped curve there is the U-shaped curve here.
- **Forward:** [1.6](01-06-gradient-descent-for-learning.md) has to confront the fact that $\lVert\beta\rVert_1$ is not differentiable at zero, which is why coordinate descent exists; [1.5](01-05-logistic-regression-and-classification.md) needs an $\ell_2$ penalty just to make the fit *exist* on separable data; [2.3](02-03-soft-margins-and-the-svm-dual.md) is this same fit-plus-penalty trade with the cost $C$ playing $1/\lambda$; [2.5](02-05-decision-trees.md) prunes trees with $R(T) + \alpha\lvert T\rvert$, the identical shape with "number of leaves" as the size measure; and [4.1](04-01-model-selection-and-cross-validation.md) is where $\lambda$ actually gets chosen.
- **Sideways:** the lasso is a convex program and everything sharp about it — the corner geometry that produces zeros, the KKT conditions that produce the path — lives in [`convex-optimization` 5.1](../../convex-optimization/lessons/05-01-least-squares-lasso.md) and [3.3](../../convex-optimization/lessons/03-03-kkt-conditions.md). The Bayesian reading of $\lambda$ as a prior belongs to [`statistical-learning`](../../statistical-learning/syllabus.md). And the shrinkage-versus-selection choice is the same tension an economist meets choosing between a dense structural model and a parsimonious reduced form: both fit, only one of them is a story.
