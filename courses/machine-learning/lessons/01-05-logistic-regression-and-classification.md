# Machine Learning · Lesson 1.5: Logistic regression and classification

> ⏱ ~15 min · Module 1: Foundations and linear models · Builds on: [1.3 (least squares)](01-03-linear-regression-and-least-squares.md), [1.4 (ridge & lasso)](01-04-regularization-ridge-and-lasso.md) · Unlocks: [1.6 (gradient descent)](01-06-gradient-descent-for-learning.md), [2.3 (hinge loss)](02-03-soft-margins-and-the-svm-dual.md), [4.4 (neural nets)](04-04-a-taste-of-neural-networks.md)

## Why this matters

A huge share of applied prediction is a yes/no question — will this loan default, will this patient relapse, is this transaction fraud — and what you actually want back is a **number between 0 and 1**, not a verdict. The verdict belongs to whoever pays for the mistakes; the model's job is to hand them a probability and let them pick the threshold ([4.2](04-02-classification-metrics.md)).

Least squares cannot do that job. Point [1.3's](01-03-linear-regression-and-least-squares.md) machinery at labels in $\{0,1\}$ and it will happily predict $-0.1$ and $1.1$, and — worse — a far-away point that it already classifies correctly will drag the boundary, because squared loss keeps charging you for being *too right*. The Flashback makes that concrete with numbers.

Logistic regression is the minimal repair, and it is the model this whole course keeps coming back to: [2.3's](02-03-soft-margins-and-the-svm-dual.md) hinge loss is its nearest rival, [3.6's](03-06-the-em-algorithm.md) E-step turns out to *be* it, and [4.4](04-04-a-taste-of-neural-networks.md) closes the course by showing that a neural network with one sigmoid unit is exactly this lesson.

## The idea

Keep the linear score $z = w^\top x + b$. Just stop pretending it is a probability.

A probability lives in the closed interval from 0 to 1; a linear function ranges over all of the real line. So run the probability through two transforms that fix the mismatch:

- **odds**: $p/(1-p)$, which maps the interval to $(0,\infty)$ — the gambler's scale, "3 to 1 on";
- **log-odds**: $\log\bigl(p/(1-p)\bigr)$, which maps it onto the whole real line.

Now the ranges match, so we can be linear *there*:

> **Logistic regression is a linear model of the log-odds.** Nothing else about it is new.

Everything follows from that sentence. A weight $w_j$ is the change in log-odds per unit of feature $j$, so $e^{w_j}$ is the factor its odds get multiplied by — an **odds ratio**. The decision boundary is where the log-odds are zero, i.e. $w^\top x + b = 0$: a hyperplane, exactly as in [1.3](01-03-linear-regression-and-least-squares.md). The curvature you see when you plot $p$ against $x$ is entirely an artefact of un-doing the log-odds transform.

## The formal version

The inverse of the log-odds map is the [sigmoid](../reference.md#sigmoid) (or logistic) function:

$$\sigma(z) = \frac{1}{1+e^{-z}},\qquad \sigma(-z) = 1-\sigma(z),\qquad \sigma'(z) = \sigma(z)\bigl(1-\sigma(z)\bigr).$$

*In words:* $\sigma$ squashes the real line into the interval from 0 to 1, it is symmetric about $\sigma(0)=\tfrac12$, and its derivative is a product of the two class probabilities — the identity that makes every calculation below short.

**The model.** With parameters $\theta = (b, w)$ and $p(x) = \Pr(y=1\mid x)$:

$$\log\frac{p(x)}{1-p(x)} = w^\top x + b \qquad\Longleftrightarrow\qquad p(x) = \sigma\bigl(w^\top x + b\bigr).$$

*In words:* the [log-odds](../reference.md#log-odds) are linear; the probability is the sigmoid of the score.

**The fit: maximum likelihood.** Each label is one Bernoulli draw with its own success probability $p_i = \sigma(z_i)$, $z_i = w^\top x_i + b$. Independence across rows gives $\prod_i p_i^{y_i}(1-p_i)^{1-y_i}$, and the log of that is

$$\ell(\theta) = \sum_{i=1}^n \Bigl[\,y_i\log p_i + (1-y_i)\log(1-p_i)\,\Bigr].$$

Maximising $\ell$ is minimising $L(\theta) = -\ell(\theta)$, which is the **[cross-entropy loss](../reference.md#cross-entropy-loss)** — the same quantity, renamed by whoever is speaking. (For the MLE framing see [`prob-stat-refresher` 4.1](../../prob-stat-refresher/lessons/04-01-estimation-and-mle.md).)

**The gradient.** Differentiate one term with respect to its score $z_i$, using $\sigma' = \sigma(1-\sigma)$:

$$\frac{\partial}{\partial z_i}\Bigl[y_i\log\sigma(z_i) + (1-y_i)\log\bigl(1-\sigma(z_i)\bigr)\Bigr] = y_i(1-p_i) - (1-y_i)p_i = y_i - p_i.$$

Every $\sigma(1-\sigma)$ cancels. Chaining through $z = X\theta$, where $X$ is the design matrix with a leading column of ones:

$$\boxed{\;\nabla_\theta L = X^\top (p - y)\;}$$

*In words:* the gradient is the design matrix transposed, times the vector of prediction errors. **This is the same shape as least squares' $X^\top(\hat y - y)$** — only the meaning of "the model's output" has changed. Two consequences worth holding on to:

- At the optimum $X^\top(p-y) = 0$: the error vector is orthogonal to every column of $X$, which is [1.3's](01-03-linear-regression-and-least-squares.md) normal-equation reading verbatim. Because the first column is all ones, $\sum_i p_i = \sum_i y_i$ — **the fitted probabilities average to the observed base rate.** Least squares satisfies the same identity, but its "probabilities" can sit outside the interval from 0 to 1; here they cannot. That is the "calibrated" in this lesson's syllabus goal — calibration *on average*, the weakest useful form of it, and still more than most classifiers hand you.
- Unlike least squares there is **no closed form**: $p$ depends on $\theta$ nonlinearly, so $X^\top(p-y)=0$ cannot be solved by linear algebra. You iterate — which is what [1.6](01-06-gradient-descent-for-learning.md) is for. Each gradient costs $O(np)$.

**Convexity.** The Hessian is $\nabla^2 L = X^\top D X$ with $D = \operatorname{diag}\bigl(p_i(1-p_i)\bigr)$, and it is positive semidefinite:

$$v^\top X^\top D X v = \sum_i d_i\,(Xv)_i^2 \;\ge\; 0 \qquad\text{for every } v,$$

since every $d_i = p_i(1-p_i) > 0$. So $L$ is convex ([`convex-optimization` 1.3](../../convex-optimization/lessons/01-03-convex-functions-epigraph.md)): no local minima to get stuck in, and gradient descent is guaranteed to find the optimum — *if one exists*, a caveat that turns out to matter enormously.

## Picture

![Two panels. Left: the logistic curve at weight 1, its 0.5 crossing marked as the decision boundary, with one negative point at x equals minus 1 and one positive point at x equals plus 1. Right: the same two points at weight 8, where the curve has steepened almost into a step and the log-likelihood has climbed to nearly zero.](assets/01-05-fig1.svg)

Both panels show the same two training points and the same decision boundary at $x=0$ — the classifier does not change between them. What changes is **confidence**: at $w = 1$ the model gives the positive point probability $0.731$; at $w = 8$ it gives it $0.9997$. The likelihood rewards that, and nothing in it pushes back. Worked example 2 is that observation taken seriously.

## Worked examples

**Example 1 (mechanical): one gradient step, by hand.** Four rows, one feature $x$ (a centred score), labels $y\in\{0,1\}$:

$$x = (-2,\ -1,\ 1,\ 2), \qquad y = (1,\ 0,\ 1,\ 1).$$

The labels overlap — the $y=0$ row sits *between* two $y=1$ rows — and that is deliberate: no line separates these, which (Example 2) is exactly what makes the maximum-likelihood fit exist.

Start at $\theta = (b, w) = (0,0)$. Then every $z_i = 0$, so every $p_i = \tfrac12$ and

$$\ell = 4\log\tfrac12 = -4\log 2 \approx -2.7726.$$

Now the gradient. The error vector is

$$p - y = \bigl(-\tfrac12,\ \tfrac12,\ -\tfrac12,\ -\tfrac12\bigr),$$

and $X^\top(p-y)$ has two entries — the sum, and the sum weighted by $x$:

$$\sum_i (p_i-y_i) = -1, \qquad \sum_i x_i(p_i-y_i) = 1 - \tfrac12 - \tfrac12 - 1 = -1.$$

So $\nabla L = (-1, -1)$, and a step $\theta \leftarrow \theta - \eta\nabla L$ at $\eta = \tfrac12$ lands on $\theta = (0.5,\ 0.5)$. Both coordinates rise: the intercept because three of four labels are 1, the slope because the 1s sit further right on average.

| $x_i$ | $y_i$ | $z_i = 0.5 + 0.5x_i$ | $p_i$ | contribution to $\ell$ |
|---|---|---|---|---|
| $-2$ | 1 | $-0.5$ | $0.3775$ | $\log 0.3775 = -0.9741$ |
| $-1$ | 0 | $0$ | $0.5$ | $\log 0.5 = -0.6931$ |
| $1$ | 1 | $1$ | $0.7311$ | $\log 0.7311 = -0.3133$ |
| $2$ | 1 | $1.5$ | $0.8176$ | $\log 0.8176 = -0.2014$ |

Total $\ell = -2.1819$, up from $-2.7726$. The step helped.

Two things this trace is quietly teaching. First, the step size is not free: $\eta = 2$ from the same start lands at $\theta = (2,2)$ with $\ell = -2.8407$ — **worse than doing nothing**. That is [1.6](01-06-gradient-descent-for-learning.md)'s entire subject. Second, this is not convergence: running it to the optimum gives $\theta^* \approx (1.325,\ 0.607)$ with $\ell = -1.9657$, and there $\sum_i p_i = 3 = \sum_i y_i$ exactly, as the orthogonality condition promised.

**Example 2 (why you'd care): on separable data the MLE does not exist.** Take the two points in the Picture — $x = -1$ with $y = 0$ and $x = +1$ with $y = 1$ — and fit $p = \sigma(wx)$ with no intercept. Both points get probability $\sigma(w)$ of their own label, so

$$\ell(w) = 2\log\sigma(w).$$

| $w$ | 1 | 2 | 4 | 8 | 16 |
|---|---|---|---|---|---|
| $\ell(w)$ | $-0.6265$ | $-0.2539$ | $-0.0363$ | $-0.00067$ | $-2\times10^{-7}$ |

$\ell$ is strictly increasing and its supremum is $0$, **which is never attained.** There is no maximiser: the likelihood pushes $\lVert w\rVert \to \infty$, the sigmoid steepens toward a step function, and the fitted probabilities go to 0 and 1. An optimiser run on this data reports enormous coefficients, an enormous standard error on every one of them, and a "converged" flag that means only that it hit an iteration cap.

The geometry is the point: **whenever the data is linearly separable, some direction of $w$ can be scaled up forever, and every scaling increases the likelihood.** Convexity does not save you — a convex function can perfectly well have no minimiser (think $e^{-w}$).

The cure is [1.4's](01-04-regularization-ridge-and-lasso.md). Maximise $\ell(w) - \tfrac{\lambda}{2}\lVert w\rVert^2$ instead: $\ell$ is bounded above by 0 while the penalty runs off to $-\infty$, so the penalised objective *must* attain its maximum at a finite $w$. Regularization here is not a bias-variance nicety — it is what makes the problem well-posed at all. P3 puts a number on the finite answer.

## Watch out

- **You might think** squared loss would work fine on 0/1 labels — **but actually** it fails twice over, in two different ways. On a *linear* model it charges you for confident-correct predictions: a training point far on the right side of the boundary has a big residual, so it drags the fit toward itself (the Flashback shows this flipping a correct classification). On a *sigmoid* model $\bigl(y - \sigma(z)\bigr)^2$ is not even convex in $z$ — its second derivative at $z=-2$ (with $y=1$) is $-0.119$ — and its gradient collapses exactly where you need it: at $z = -5$ with $y = 1$, cross-entropy pushes with $\lvert\sigma - y\rvert = 0.993$ while squared loss musters $0.0132$, seventy-five times weaker. **The model is as wrong as it can be and the loss barely notices.**
- **You might think** a bigger coefficient means a more important feature — **but actually** a coefficient is per *unit*, and units are your choice (P2). Compare magnitudes only after standardising the columns — the same standardisation [1.4](01-04-regularization-ridge-and-lasso.md) needs before penalising them, and for the same reason.
- **You might think** $e^{w_j}$ multiplies the *probability* — **but actually** it multiplies the **odds**. Those coincide only when $p$ is small. Doubling the odds takes $p = 0.4$ to $0.571$, not to $0.8$; and no odds ratio can ever push $p$ past 1, which is the whole reason we work on this scale.
- **You might think** logistic regression outputs a class — **but actually** it outputs a probability, and "$p > 0.5$" is a *separate decision* someone made. Moving the threshold changes precision and recall without refitting anything ([4.2](04-02-classification-metrics.md)); for the symmetric cost, threshold 0.5 is right, and for the churn problem in [1.1](01-01-the-learning-problem.md) it is not.

## One-liner

> Logistic regression is a straight line drawn in log-odds space: $e^{w_j}$ multiplies the odds, the gradient is the same $X^\top(\text{prediction} - y)$ as least squares, and the only thing that can go wrong is data so clean that the weights run to infinity.

## Problems

**P1 (🟢)** A churn model, fitted, reports log-odds of leaving as

$$z = -1.2 + 0.8\,x_{\text{complaints}} - 0.5\,x_{\text{tenure}} + 1.5\,x_{\text{offer}},$$

with tenure in years and $x_{\text{offer}} \in \{0,1\}$ recording a competitor's offer. (a) Give the odds ratio for each of the three features and say in one phrase what each means. (b) A customer with 2 complaints, 3 years of tenure and a competitor offer: compute $z$ and $p$. (c) Recompute $p$ for the same customer with no competitor offer, and verify that the *odds* changed by exactly the factor from (a).

**P2 (🟡)** A model uses a feature measured in metres and reports $w_1 = 0.7$. (a) Restate the weight for the identical model with that feature measured in centimetres, and give both odds ratios. (b) The metre version's odds ratio is $2.01$ and the centimetre version's is $1.007$ — explain why these describe the *same* model, using the 100-cm check. (c) A colleague ranks feature importance by $\lvert w_j\rvert$. Say what has to be true of the data for that ranking to mean anything.

**P3 (🔴)** Three points on a line: $x = (-1,\ 1,\ 3)$ with $y = (0,\ 1,\ 1)$, model $p = \sigma(wx)$ (no intercept). (a) The data is separable. Show that along the ray $w = t$, $t > 0$, the log-likelihood is $\ell(t) = 2\log\sigma(t) + \log\sigma(3t)$, and evaluate it at $t = 1, 2, 4, 10$ to confirm it climbs toward a supremum it never reaches. (b) Now add an $\ell_2$ penalty and maximise $g(t) = \ell(t) - \tfrac{\lambda}{2}t^2$ with $\lambda = 0.1$. Write the stationarity condition using $\sigma'=\sigma(1-\sigma)$, and find $t^*$ to two decimals (a bisection by hand on $g'$ is enough: check $t=2$ and $t=3$). (c) In one sentence, say what happens to $t^*$ as $\lambda \to 0$, and what that says about the *shape* of the penalised objective as opposed to its optimum.

<details>
<summary>Solutions</summary>

**P1** (a) Exponentiate each weight — that is the whole trick.

| feature | $w_j$ | $e^{w_j}$ | reading |
|---|---|---|---|
| complaints | $0.8$ | $2.2255$ | each extra complaint multiplies the odds of churn by $2.23$ |
| tenure (years) | $-0.5$ | $0.6065$ | each extra year multiplies them by $0.61$, i.e. cuts them by about 39 percent |
| competitor offer | $1.5$ | $4.4817$ | an offer multiplies the odds by $4.48$ |

The intercept $-1.2$ is the log-odds for a customer with all features zero, so baseline odds $e^{-1.2} = 0.301$, i.e. $p = 0.231$.

(b) The score, then the sigmoid:

$$z = -1.2 + 0.8(2) - 0.5(3) + 1.5(1) = 0.4, \qquad p = \sigma(0.4) = \frac{1}{1+e^{-0.4}} = 0.5987.$$

(c) Without the offer, $z = -1.1$ and $p = \sigma(-1.1) = 0.2497$. The odds are $0.5987/0.4013 = 1.4918$ with the offer and $0.2497/0.7503 = 0.3329$ without, and

$$\frac{1.4918}{0.3329} \approx 4.48 = e^{1.5}.\ \checkmark$$

Note what the *probabilities* did: $0.2497 \to 0.5987$, a factor of $2.40$, nothing like $4.48$. The odds ratio is constant across the range; the probability ratio is not. That is the third Watch out, in numbers.

**P2** (a) One metre is 100 centimetres, so a feature value $x_{\text{m}}$ becomes $x_{\text{cm}} = 100\,x_{\text{m}}$. For the score $w x$ to be unchanged, $w_{\text{cm}} = 0.7/100 = 0.007$. Odds ratios: $e^{0.7} = 2.0138$ per metre, $e^{0.007} = 1.00702$ per centimetre.

(b) $(e^{0.007})^{100} = e^{0.7} = 2.0138$ — 100 centimetres of increase multiply the odds by exactly what one metre does. Every fitted probability, every prediction, the decision boundary and the log-likelihood are identical; only the unit attached to the number changed. **The coefficient moved by a factor of 100 while the model did not move at all.**

(c) The ranking is meaningless unless the columns are on a common scale — standardise each to unit standard deviation first, and then $\lvert w_j\rvert$ ranks features by effect per standard deviation, which is a defensible (if still imperfect) notion. Two further caveats: correlated columns split their weight arbitrarily between themselves ([1.4](01-04-regularization-ridge-and-lasso.md)'s lasso instability), and a large weight on a feature that never varies in your data moves no predictions.

**P3** (a) With $z_i = t x_i$: the point $x=-1,\ y=0$ contributes $\log\bigl(1-\sigma(-t)\bigr) = \log\sigma(t)$ (using $1-\sigma(-t)=\sigma(t)$); the point $x=1,\ y=1$ contributes $\log\sigma(t)$; the point $x=3,\ y=1$ contributes $\log\sigma(3t)$. Summing gives $\ell(t) = 2\log\sigma(t) + \log\sigma(3t)$.

| $t$ | 1 | 2 | 4 | 10 |
|---|---|---|---|---|
| $\ell(t)$ | $-0.6751$ | $-0.2563$ | $-0.0363$ | $-0.000091$ |

Strictly increasing, bounded above by $0$, never equal to it. (Sanity check on the direction: every $z_i$ has the same sign as its label demands, which is what "separable" means, so scaling $t$ up can only push each $p_i$ further toward its own label.) There is no maximiser, so the unpenalised MLE does not exist.

(b) The derivative of $\log\sigma(u)$ is $1-\sigma(u)$, i.e. $\sigma(-u)$, so the chain rule gives

$$g'(t) = 2\sigma(-t) + 3\sigma(-3t) - \lambda t.$$

The first two terms are positive and shrink to zero; $-\lambda t$ grows without bound; so $g'$ crosses zero exactly once and $g$ has a unique maximiser. Bisecting with $\lambda = 0.1$:

- $t = 2$: $2\sigma(-2) + 3\sigma(-6) - 0.2$, i.e. $0.2384 + 0.0074 - 0.2 = +0.0458$ (still climbing);
- $t = 3$: $0.0949 + 0.0004 - 0.3 = -0.2047$ (past the top);
- $t = 2.1$: $0.2182 + 0.0055 - 0.21 = +0.0137$; $t = 2.2$: $0.1995 + 0.0041 - 0.22 = -0.0164$.

So $t^* \approx 2.14$ (the exact root is $2.1447$), with $g(t^*) = -0.2231 - 0.2300 = -0.4531$. Compare $g(1) = -0.7251$ and $g(4) = -0.8363$: a genuine interior maximum, where the unpenalised problem had none.

(c) As $\lambda \to 0$, $t^* \to \infty$ — the penalty recovers a finite answer for every $\lambda > 0$, but the answer it recovers runs away in the limit. So the fix is not continuous in $\lambda$ at zero: **any positive $\lambda$ changes the objective's *shape* from "no maximiser" to "unique maximiser", which is a categorical change, not a small perturbation of the optimum.** This is the strongest form of the argument for regularization in the course — stronger than the variance argument of [1.4](01-04-regularization-ridge-and-lasso.md), because without it there is no estimate at all.

</details>

## Flashback

**From Lesson 1.3 (Linear regression and least squares):** Fit the four points $(1,1),\ (2,4),\ (3,4),\ (4,7)$ by least squares.

(a) Give the slope and intercept, the residuals, and verify both orthogonality identities $\sum_i r_i = 0$ and $\sum_i x_i r_i = 0$. (b) Now point the same machinery at labels: fit $y$ on $x$ for the data $x = (1,2,3,4)$, $y = (0,0,1,1)$, and say what is wrong with the four fitted values. Then add a fifth row $(20,\ 1)$ — a point the first fit already classifies correctly and confidently — refit, and report what happens to the point $x = 3$.

<details>
<summary>Solution</summary>

(a) $\bar x = 2.5$ and $\bar y = 4$, so

$$S_{xy} = \sum_i(x_i-\bar x)(y_i-\bar y) = (-1.5)(-3) + (-0.5)(0) + (0.5)(0) + (1.5)(3) = 9,$$

and $S_{xx} = 2.25+0.25+0.25+2.25 = 5$. Hence

$$\hat\beta_1 = \frac{9}{5} = 1.8, \qquad \hat\beta_0 = 4 - 1.8(2.5) = -0.5.$$

Fitted values $\hat y = (1.3,\ 3.1,\ 4.9,\ 6.7)$ and residuals $r = (-0.3,\ 0.9,\ -0.9,\ 0.3)$.

$$\textstyle\sum_i r_i = -0.3+0.9-0.9+0.3 = 0,\qquad \sum_i x_i r_i = -0.3 + 1.8 - 2.7 + 1.2 = 0.\ \checkmark$$

Both hold exactly — they *are* the two normal equations, one per column of $X$. (For the record, $\mathrm{SSE} = 1.8$, $\mathrm{SST} = 18$, $R^2 = 0.9$.)

(b) On $x=(1,2,3,4)$, $y=(0,0,1,1)$: $\bar y = 0.5$, $S_{xy} = 2$, $S_{xx} = 5$, so $\hat y = -0.5 + 0.4x$, giving fitted values

$$(-0.1,\ 0.3,\ 0.7,\ 1.1).$$

Two of them are not probabilities. The classifier is fine — thresholding at $0.5$ puts the boundary at $x = 2.5$ and gets all four rows right — but the *numbers* are uninterpretable, and there is no threshold-free way to report them to anyone.

Now add $(20, 1)$. Then $\bar x = 6$, $\bar y = 0.6$, $S_{xy} = 9$, $S_{xx} = 250$, so $\hat y = 0.384 + 0.036x$ and the fitted values are

$$(0.420,\ 0.456,\ \mathbf{0.492},\ 0.528,\ 1.104).$$

The boundary has slid from $x = 2.5$ to $x = 3.22$, and **the point $x = 3$, whose label is 1, is now predicted $0.492$ and misclassified.** Nothing about it changed. It was broken by a new point that the old fit already got right, with room to spare.

The mechanism is squared loss: the new row at $x=20$ had a residual of $1 - (-0.5+0.4\cdot 20) = -6.5$, and squared loss charges $42.25$ for that. To shrink it, the line flattens, and the flattening costs the honest rows their margin. Logistic regression cannot do this — its per-row loss $-\log p_i$ is *bounded below by nothing but zero* for a correctly and confidently classified point, so the row at $x = 20$ contributes essentially no gradient. **Squared loss punishes you for being too right; cross-entropy simply stops paying attention.**

</details>

## Connections

- **Backward:** the gradient $X^\top(p-y)$ is [1.3's](01-03-linear-regression-and-least-squares.md) $X^\top(\hat y - y)$ with a sigmoid inserted, and its vanishing at the optimum is the same orthogonality statement. The separability cure is [1.4's](01-04-regularization-ridge-and-lasso.md) ridge penalty, used here for existence rather than for variance. The choice of cross-entropy over squared loss is [1.1's](01-01-the-learning-problem.md) "the loss is a modelling decision" arriving with consequences attached; the bounded per-row loss is why logistic regression is far less outlier-sensitive than the fit in [1.2](01-02-generalization-and-the-bias-variance-tradeoff.md).
- **Forward:** [1.6](01-06-gradient-descent-for-learning.md) supplies the optimiser this lesson cannot do without, and Example 1's $\eta = 2$ failure is its opening question. [2.1's](02-01-the-perceptron-and-linear-separability.md) perceptron is what you get if you replace the smooth loss with a hard one, and [2.3's](02-03-soft-margins-and-the-svm-dual.md) hinge loss is cross-entropy's closest competitor — same linear score, different penalty for being wrong. [4.2](04-02-classification-metrics.md) takes the probabilities seriously and asks where to put the threshold. [4.4](04-04-a-taste-of-neural-networks.md) closes the loop: one sigmoid unit *is* this model, and a hidden layer is what happens when you stack them.
- **Sideways:** cross-entropy is the KL divergence between the empirical label distribution and the model's, so minimising it is minimising [`information-theory` 1.4's](../../information-theory/lessons/01-04-relative-entropy-kl-jensen.md) relative entropy — the loss was an information-theoretic object all along. The convexity argument is [`convex-optimization` 1.3's](../../convex-optimization/lessons/01-03-convex-functions-epigraph.md) second-order test, and the "convex but no minimiser" trap is why that course insists on coercivity separately. Economists know this model as the **logit choice model**, where the same $e^{w_j}$ is a marginal effect on the odds of choosing an option, and where the guarantee that it generalises is stated and proved in [`statistical-learning`](../../statistical-learning/syllabus.md) (not yet built; the facts used here are stated where they are used).
