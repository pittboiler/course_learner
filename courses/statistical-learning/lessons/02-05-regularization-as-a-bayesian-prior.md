# Statistical Learning Theory · Lesson 2.5: Regularization as a Bayesian prior

> ⏱ ~15 min · Module 2: Linear methods · Builds on: [2.3 (ridge and shrinkage)](02-03-ridge-regression-and-shrinkage.md), [2.4 (lasso)](02-04-lasso-and-the-geometry-of-sparsity.md) · Unlocks: [3.1 (the PAC framework)](03-01-the-pac-framework.md)

## Why this matters

Every penalty in this module so far was justified by a bias–variance argument: shrink, pay bias, buy back more variance. That argument works, but it leaves $\lambda$ as a dimensionless knob you tune by cross-validation and cannot otherwise discuss.

There is a second reading, and it gives $\lambda$ units. Under a Gaussian likelihood, **ridge is exactly the mode of a posterior under a Gaussian prior**, and the penalty is a ratio of two variances you can actually have opinions about: how noisy is the data, and how large do I think the coefficients are. Lasso is the same story with a Laplace prior.

The reading is genuinely useful and it is also routinely over-claimed. "Lasso is Bayesian variable selection" is false. "My ridge fit came with a 95 percent credible interval, so I have a 95 percent confidence interval for the true coefficient" is false, and [boss problem 2](../syllabus.md) turns on exactly that sentence. Deriving the correspondence is half of this lesson; fencing it is the other half, and the fence is where the value is.

## The idea

Bayes' rule ([`prob-stat-refresher` 1.2](../../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md)) says the posterior is proportional to likelihood times prior. Take logarithms and the product becomes a sum:

$$\log p(\beta \mid y) \;=\; \underbrace{\log p(y \mid \beta)}_{\text{fit}} \;+\; \underbrace{\log p(\beta)}_{\text{penalty}} \;+\; C.$$

Maximizing that is minimizing *(negative log-likelihood) plus (negative log-prior)* — which is the shape of every regularized objective you have written down. So:

> **A loss is a negative log-likelihood; a penalty is a negative log-prior.** Regularized fitting is maximum likelihood with a tax, and the tax schedule *is* a probability distribution over coefficients.

That is the whole correspondence, and it runs in both directions: any prior with a density gives you a penalty, and any penalty that is a legal negative log-density gives you a prior.

The shape reading is worth carrying around. A prior that is smooth at zero, like a Gaussian, gives a penalty that is flat at zero — it exerts no force on a coefficient that is already zero, so nothing is ever set exactly to zero. A prior with a **cusp** at zero, like a Laplace, gives a penalty with a **kink** — a jump in slope at zero, which is what can hold a coefficient pinned there. The peak becomes the kink.

## The formal version

**Setup.** Fix the design $X$ (an $n \times p$ matrix) and take the Gaussian linear model with **known** noise variance $\sigma^2$:

$$y \mid \beta \;\sim\; \mathcal N(X\beta,\ \sigma^2 I).$$

The two estimators from 2.3 and 2.4, in the scaling I will use throughout — the residual sum of squares is **not** divided by $n$, which is what fixes the constants below:

$$\hat\beta_{\text{ridge}} = \arg\min_\beta \lVert y - X\beta\rVert^2 + \lambda\lVert\beta\rVert_2^2, \qquad \hat\beta_{\text{lasso}} = \arg\min_\beta \lVert y - X\beta\rVert^2 + \lambda\lVert\beta\rVert_1.$$

The closed form, the SVD shrinkage picture and the [soft threshold](../reference.md#soft-thresholding) are [`machine-learning` 1.4](../../machine-learning/lessons/01-04-regularization-ridge-and-lasso.md)'s and 2.3–2.4's; I use them, I do not re-derive them.

### Gaussian prior gives ridge

Put an independent Gaussian prior on each coefficient, $\beta \sim \mathcal N(0, \tau^2 I)$. The log-posterior is

$$\log p(\beta\mid y) = -\frac{1}{2\sigma^2}\lVert y - X\beta\rVert^2 \;-\; \frac{1}{2\tau^2}\lVert\beta\rVert_2^2 \;+\; C,$$

with $C$ free of $\beta$. Maximizing this is minimizing its negative; multiply by the positive constant $2\sigma^2$, which changes the argmax not at all:

$$\arg\max_\beta \log p(\beta\mid y) = \arg\min_\beta \ \lVert y - X\beta\rVert^2 + \frac{\sigma^2}{\tau^2}\lVert\beta\rVert_2^2.$$

**In words: the [MAP estimate](../reference.md#map-estimation) under a Gaussian prior is the ridge estimate, with**

$$\lambda = \frac{\sigma^2}{\tau^2}.$$

Read it aloud: **the penalty is a variance ratio.** Noisy data (large $\sigma^2$) or a confident prior (small $\tau^2$) both push $\lambda$ up. And $\lambda \to 0$ is the flat, opinion-free prior $\tau^2 \to \infty$, which returns OLS — regularization off means "I will believe anything about $\beta$."

This closes a loop from 2.3, which found the MSE-optimal penalty in the scalar orthonormal case to be $\lambda^* = \sigma^2/\beta_j^2$. That is $\lambda = \sigma^2/\tau^2$ with $\tau^2 = \beta_j^2$: **the best possible ridge penalty is the one whose implied prior variance is the true coefficient scale.** The frequentist optimum and the Bayesian translation agree, which is not obvious and is a good reason to trust both.

### Laplace prior gives lasso

Now take an independent Laplace (double-exponential) prior with scale $b > 0$:

$$p(\beta) = \prod_{j=1}^{p} \frac{1}{2b}\exp\!\left(-\frac{|\beta_j|}{b}\right), \qquad \log p(\beta) = -\frac{1}{b}\lVert\beta\rVert_1 + C.$$

The same two moves — negate, multiply by $2\sigma^2$ — give

$$\arg\max_\beta \log p(\beta\mid y) = \arg\min_\beta \ \lVert y - X\beta\rVert^2 + \frac{2\sigma^2}{b}\lVert\beta\rVert_1, \qquad \lambda = \frac{2\sigma^2}{b}.$$

**In words: the MAP estimate under a Laplace prior is the lasso.** The extra factor of $2$ against the ridge constant is pure bookkeeping, not content: the Gaussian log-density carries $\tfrac{1}{2\tau^2}$ and the Laplace carries $\tfrac{1}{b}$, and the $2\sigma^2$ we multiplied by cancels the one and does not cancel the other. Change the convention on the objective and the constant moves; the *structure* — penalty equals negative log-prior — does not.

| prior on each $\beta_j$ | negative log-prior | penalty | MAP estimator | $\lambda$ |
|---|---|---|---|---|
| $\mathcal N(0,\tau^2)$ | $\beta_j^2/(2\tau^2)$ | $\lVert\beta\rVert_2^2$ | ridge | $\sigma^2/\tau^2$ |
| Laplace$(0,b)$ | $\lvert\beta_j\rvert/b$ | $\lVert\beta\rVert_1$ | lasso | $2\sigma^2/b$ |
| flat (improper) | constant | none | OLS / MLE | $0$ |

### MAP is not the posterior

This is the part worth being precise about, because everything above invites an over-reading. Four distinct statements, in increasing order of how badly they are usually got wrong.

**1. The mode is one number; the posterior is a distribution.** In the Gaussian case the posterior is Gaussian, so we can write down everything it knows:

$$\beta \mid y \ \sim\ \mathcal N\Bigl((X^\top X + \lambda I)^{-1}X^\top y,\ \ \sigma^2 (X^\top X + \lambda I)^{-1}\Bigr).$$

The mean is the ridge estimate — so here the mode *is* the mean, and MAP loses nothing but the covariance. That covariance is the entire uncertainty statement, and reporting $\hat\beta_{\text{ridge}}$ alone throws it away.

**2. Outside the Gaussian case, the mode is not even the mean.** The posterior mean is the Bayes estimator for squared loss; the mode is not the Bayes estimator for any loss you would have chosen for a continuous parameter — it is the limit of an all-or-nothing loss on shrinking balls. Under a Laplace prior the posterior mean and the lasso solution are different estimators, and the mean is never sparse.

**3. MAP is not invariant to reparameterization; the MLE is.** If you refit in terms of $\gamma = g(\beta)$ for a smooth invertible $g$, the MLE simply transports: $\hat\gamma_{\text{MLE}} = g(\hat\beta_{\text{MLE}})$. The MAP does not, because the prior density picks up a Jacobian factor under the change of variables and the location of the peak moves. So "the most probable parameter value" is a statement about your coordinates as much as about your beliefs.

**4. The lasso is not Bayesian variable selection.** The posterior under a Laplace prior has a density with respect to Lebesgue measure on $\mathbb R^p$. The event $\{\beta_j = 0\}$ is a hyperplane, which has Lebesgue measure zero, so

$$\Pr(\beta_j = 0 \mid y) = 0 \quad\text{exactly, for every dataset.}$$

Yet the MAP sets $\hat\beta_j = 0$ outright, and does so with positive probability over datasets. Both are true and they are not in conflict: a **mode** of a continuous density is not an **atom** of probability. The cusp in the prior makes zero the argmax of the density without putting any mass there. A prior that genuinely believes coefficients can be exactly zero needs a point mass at zero — a spike-and-slab prior — and its posterior *does* report $\Pr(\beta_j = 0\mid y)$ as a number you can quote. The lasso is a sparse *point estimate*, not a sparse *belief*.

### Credible is not confidence

A **credible interval** is a statement about the posterior with the data held fixed: $\Pr(\beta \in C \mid y) = 0.95$, where $\beta$ is random and $C$ is fixed once $y$ is in hand. A **confidence interval** is a statement about a procedure with a fixed unknown true $\beta_0$: $\Pr\bigl(C(Y) \ni \beta_0\bigr) = 0.95$, where $\beta_0$ is fixed and the data $Y$ is random.

These are different probability statements about different random objects, and they do not imply one another. The Gaussian-prior credible interval has exactly 95 percent coverage **averaged over the prior**, and can have far less than that at any particular $\beta_0$ the prior considers unlikely — Worked example 2 computes 2.8 percent. The identification of the two is [`econometrics`](../../econometrics/syllabus.md)'s distinction to own; this course's job is to know that ridge's Bayesian pedigree buys you no frequentist guarantee at all.

## Picture

![Two panels. Top: a Gaussian prior density and a Laplace prior density with the same variance drawn on one coefficient axis, the Laplace visibly peaked at zero with heavier tails crossing the Gaussian near 2.37. Bottom: the penalties they induce, a smooth parabola and a V with a kink at zero.](assets/02-05-fig1.svg)

Matched variance, so the two priors are equally confident on average — the only difference is *shape*. The Laplace puts more mass very near zero and more mass far away, and buys it by emptying out the middle. That is the sparsity assumption of 2.4, stated as a belief rather than as a geometry: most coefficients are negligible, a few are large, and almost none are middling.

The lower panel is the same picture after $-\log$. The Gaussian's smooth peak becomes a parabola whose slope at zero is zero, so a coefficient sitting at zero feels no restoring force and drifts off it at the first whiff of correlation. The Laplace's cusp becomes a kink whose slope jumps from $-1$ to $+1$, and that jump is a finite force pinning the coefficient at zero until the data pushes hard enough — the soft threshold, seen from above.

## Worked examples

**Example 1 (mechanical): reading $\lambda$ as a belief, and back.** Take the orthonormal case, $X^\top X = I$, so with $z = X^\top y$ the objective separates coordinate by coordinate into $(z_j - \beta_j)^2 + \lambda\beta_j^2$ and $z_j \sim \mathcal N(\beta_j, \sigma^2)$.

You estimate the noise variance at $\sigma^2 = 5$ and believe coefficients have standard deviation about $\tau = 1$. Then

$$\lambda = \frac{\sigma^2}{\tau^2} = \frac{5}{1} = 5, \qquad \hat\beta_j = \frac{z_j}{1+\lambda} = \frac{z_j}{6},$$

so every coefficient is shrunk to $1/6 \approx 16.7$ percent of its OLS value. An OLS coefficient of $z_j = 3$ reports as $\hat\beta_j = 0.5$.

Now the posterior, which the MAP discarded. Its variance is $\sigma^2/(1+\lambda) = 5/6$, so the standard deviation is $0.9129$ and the 95 percent credible interval is

$$0.5 \pm 1.96(0.9129) = (-1.289,\ 2.289).$$

The point estimate says "small and positive." The posterior says "we do not know the sign." That gap is the cost of quoting a mode.

**Inverting.** A colleague hands you $\lambda = 0.2$ on the same problem. Then $\tau^2 = \sigma^2/\lambda = 5/0.2 = 25$, so $\tau = 5$: they are asserting a prior under which coefficients of $\pm 10$ are unremarkable. Whether that is a sane belief is a question about the problem, and it is a question you could not even ask before the translation.

**Example 2 (why you'd care): a 95 percent credible interval with 2.8 percent coverage.** Same setup, $\sigma^2 = 5$, $\tau^2 = 1$, $\lambda = 5$. The interval from Example 1 is $z/6 \pm 1.7892$, and it is a perfectly correct 95 percent credible interval. Ask the frequentist question instead: fix a true $\beta_0$, draw $z \sim \mathcal N(\beta_0, 5)$, and ask how often the interval covers $\beta_0$.

The interval covers when $|z/6 - \beta_0| \le 1.7892$, i.e. when $z$ lands within $6(1.7892)$ of $6\beta_0$, while $z$ is centred at $\beta_0$ — an offset of $5\beta_0$ that the shrinkage put there. Writing $\Phi$ for the standard normal CDF, the coverage is

$$\Phi\left(\tfrac{5\beta_0}{\sqrt 5} + 4.8\right) - \Phi\left(\tfrac{5\beta_0}{\sqrt 5} - 4.8\right).$$

| true $\beta_0$ | 0 | 1 | 2 | 3 |
|---|---|---|---|---|
| coverage of the "95 percent" interval | 1.0000 | 0.9948 | 0.6289 | 0.0282 |

At $\beta_0 = 3$ — three prior standard deviations out, unlikely under the prior but perfectly possible in the world — the interval covers the truth 2.8 percent of the time. Nothing is broken: average that coverage column against the prior $\mathcal N(0,1)$ and you get exactly $0.95000$. **A credible interval promises calibration averaged over the prior, and nothing whatsoever at a fixed truth.** If you did not mean the prior, you do not get the guarantee.

## Watch out

- You might think the Bayesian reading gives you error bars for free — but the posterior spread is only as trustworthy as the prior and the assumed $\sigma^2$. Here $\sigma^2$ was treated as known; a real analysis puts a prior on it too, which widens every interval. Cross-validating $\lambda$ and then quoting the matching posterior as if the prior had been chosen in advance is double-dipping in the data.
- You might think "lasso does variable selection, so the posterior thinks those coefficients are zero" — but the posterior gives the event $\beta_j = 0$ probability exactly zero, and the posterior mean under a Laplace prior is never sparse. The zeros are a property of the mode, which is an artifact of the prior's cusp. Say "the lasso selects" and not "the model believes."
- You might think the prior is scale-free — but $\beta \sim \mathcal N(0,\tau^2 I)$ says every coefficient has the *same* prior scale, which is a claim about the units of your columns. Rescale a predictor and you have silently changed your prior. This is the Bayesian version of why 2.3 and 2.4 standardize first, and why the intercept is left unpenalized: no one believes the mean of $y$ is near zero.

## One-liner

> A penalty is a negative log-prior and $\lambda$ is a variance ratio — but the mode of a posterior is not the posterior, and its credible interval is not a confidence interval.

## Problems

**P1 (🟢)** Working in the orthonormal case, where the ridge estimate is $\hat\beta_j = z_j/(1+\lambda)$:

(a) You estimate $\sigma^2 = 12$ and believe coefficients have standard deviation $\tau = 2$. Give $\lambda$, the shrinkage factor, and what an OLS coefficient of $z_j = 4$ becomes.
(b) Invert: a colleague cross-validates to $\lambda = 0.75$ on data with $\sigma^2 = 12$. What prior standard deviation are they implicitly asserting, and state their belief in one sentence about the size of coefficients.

**P2 (🟡)** Derive the Laplace ↔ lasso correspondence from scratch, including the constant. Start from $y\mid\beta \sim \mathcal N(X\beta, \sigma^2 I)$ and the prior with density $\prod_j \frac{1}{2b}e^{-|\beta_j|/b}$, and show that the MAP estimate minimizes $\lVert y-X\beta\rVert^2 + \lambda\lVert\beta\rVert_1$ with $\lambda = 2\sigma^2/b$. Then say precisely which step would have to change to make the constant $\sigma^2/b$ instead, and why that is bookkeeping rather than a different model.

**P3 (🔴)** Under the Laplace prior, show both of the following and then reconcile them.

(a) For every dataset $y$, $\Pr(\beta_j = 0 \mid y) = 0$.
(b) Over the randomness in the data, $\Pr(\hat\beta_j^{\text{MAP}} = 0) > 0$. Do this concretely in the scalar orthonormal case with $\sigma^2 = 1$, $b = 1$ and true coefficient $\beta_j^0 = 0.5$, using the soft-threshold solution of $\min_\beta (z-\beta)^2 + \lambda|\beta|$; give the number.

Then explain in two sentences why (a) and (b) are not a contradiction, and name the change to the prior that would let the posterior itself report a coefficient as exactly zero.

<details>
<summary>Solutions</summary>

**P1**

(a) $\lambda = \sigma^2/\tau^2 = 12/4 = 3$. The shrinkage factor is $1/(1+\lambda) = 1/4$, so every coefficient is reported at 25 percent of its OLS value, and $z_j = 4$ becomes $\hat\beta_j = 4/4 = 1$.

(b) $\tau^2 = \sigma^2/\lambda = 12/0.75 = 16$, so $\tau = 4$. In words: they are asserting a prior under which a coefficient of $\pm 8$ (two prior standard deviations) is entirely ordinary — a nearly opinion-free prior, given that the noise standard deviation is only $\sqrt{12} \approx 3.46$. Compared with (a) they have moved from "coefficients are small relative to the noise" to "coefficients may well be larger than the noise," and the fit will barely shrink.

**P2** The log-likelihood of the Gaussian model is
$$\log p(y\mid\beta) = -\frac{1}{2\sigma^2}\lVert y - X\beta\rVert^2 + C_1,$$
with $C_1 = -\tfrac n2\log(2\pi\sigma^2)$ free of $\beta$. The log-prior is
$$\log p(\beta) = \sum_{j=1}^p\Bigl(-\frac{|\beta_j|}{b} - \log 2b\Bigr) = -\frac{1}{b}\lVert\beta\rVert_1 + C_2.$$
By Bayes,
$$\log p(\beta\mid y) = \log p(y\mid\beta) + \log p(\beta) - \log p(y),$$
and the evidence $\log p(y)$ is free of $\beta$, so
$$\arg\max_\beta \log p(\beta\mid y) = \arg\max_\beta \Bigl[-\frac{1}{2\sigma^2}\lVert y-X\beta\rVert^2 - \frac1b\lVert\beta\rVert_1\Bigr].$$
Negate to turn the max into a min, then multiply by the positive constant $2\sigma^2$ (which preserves the argmin):
$$\hat\beta_{\text{MAP}} = \arg\min_\beta\ \lVert y - X\beta\rVert^2 + \frac{2\sigma^2}{b}\lVert\beta\rVert_1,$$
so $\lambda = 2\sigma^2/b$.

The constant is set by *which multiple of the log-posterior you call the objective*. If instead you define the lasso with the half-RSS convention, $\min \tfrac12\lVert y-X\beta\rVert^2 + \lambda\lVert\beta\rVert_1$, you multiply by $\sigma^2$ rather than $2\sigma^2$ and get $\lambda = \sigma^2/b$. Nothing about the model, the prior or the fitted $\hat\beta$ changed — only the units of the symbol $\lambda$. This is why quoting a $\lambda$ without its objective is meaningless, and why the *ratio* structure (noise variance over prior scale) is the part worth remembering.

**P3**

(a) The posterior density is
$$p(\beta\mid y) \propto \exp\Bigl(-\tfrac{1}{2\sigma^2}\lVert y - X\beta\rVert^2\Bigr)\prod_j \tfrac{1}{2b}e^{-|\beta_j|/b},$$
a strictly positive, integrable function of $\beta \in \mathbb R^p$. So the posterior is absolutely continuous with respect to Lebesgue measure: any set of Lebesgue measure zero has posterior probability zero. The set $\{\beta : \beta_j = 0\}$ is a hyperplane in $\mathbb R^p$, which has Lebesgue measure zero. Hence $\Pr(\beta_j = 0\mid y) = 0$, for every $y$, for every $b > 0$.

(b) With $\sigma^2 = 1$ and $b = 1$ the penalty is $\lambda = 2\sigma^2/b = 2$, and the scalar problem is $\min_\beta (z-\beta)^2 + 2|\beta|$. The minimizer is the soft threshold at $\lambda/2$:
$$\hat\beta = \operatorname{sign}(z)\,\bigl(|z| - \lambda/2\bigr)_+ = \operatorname{sign}(z)\,(|z| - 1)_+,$$
so $\hat\beta = 0$ exactly when $|z| \le 1$. (Note $\lambda/2 = \sigma^2/b$ — the threshold is the noise variance over the prior scale, which is the same ratio again.) Under the truth $\beta^0 = 0.5$ we have $z \sim \mathcal N(0.5, 1)$, so
$$\Pr(\hat\beta = 0) = \Phi(1 - 0.5) - \Phi(-1 - 0.5) = \Phi(0.5) - \Phi(-1.5) = 0.6915 - 0.0668 = 0.6247.$$
So about 62 percent of datasets return an exact zero for a coefficient that is genuinely nonzero — positive probability, and not a small one.

**Reconciliation.** (a) is about *where the posterior puts mass*; (b) is about *where the posterior density peaks*. A continuous density can attain its maximum at a point that carries no mass at all — the Laplace prior's cusp at zero makes the posterior density spike there, and a spike in a density is not an atom of probability. The two statements are about different objects, and MAP reports the second while people read it as the first.

To let the posterior itself say "this coefficient is zero," the prior needs an actual point mass at zero: a spike-and-slab prior, $\beta_j \sim \pi\,\delta_0 + (1-\pi)\,g(\cdot)$, mixing an atom $\delta_0$ with a continuous slab. Then $\Pr(\beta_j = 0\mid y)$ is a genuine posterior probability you can quote, and *that* is Bayesian variable selection. The lasso gives a sparse point estimate; it does not give a sparse belief.

</details>

## Flashback

**From Lesson 2.3 (Ridge regression and shrinkage):** A centred, standardized design has $X^\top X$ with eigenvalues (squared singular values) $\sigma_i^2 = (10,\ 5,\ 2,\ 1)$.

(a) Compute the [effective degrees of freedom](../reference.md#effective-degrees-of-freedom) $\mathrm{df}(\lambda) = \sum_i \sigma_i^2/(\sigma_i^2+\lambda)$ at $\lambda = 0$, $\lambda = 2$ and $\lambda = 5$, as exact fractions.
(b) Your noise variance is estimated at $\sigma^2 = 6$. Express $\lambda = 2$ as a prior-to-noise variance ratio: what prior standard deviation on the coefficients does it encode, and what does that belief say relative to the noise?

<details>
<summary>Solution</summary>

(a) $\mathrm{df}(0) = 4$ — with no penalty the fit is free in all four directions.

$$\mathrm{df}(2) = \tfrac{10}{12} + \tfrac{5}{7} + \tfrac{2}{4} + \tfrac{1}{3} = \tfrac56 + \tfrac57 + \tfrac12 + \tfrac13 = \tfrac{50}{21} \approx 2.381.$$

$$\mathrm{df}(5) = \tfrac{10}{15} + \tfrac{5}{10} + \tfrac{2}{7} + \tfrac{1}{6} = \tfrac23 + \tfrac12 + \tfrac27 + \tfrac16 = \tfrac{34}{21} \approx 1.619.$$

Four parameters, but at $\lambda = 2$ the fit spends only about 2.4 of them: the high-variance direction $\sigma_1^2 = 10$ is kept almost intact (factor $5/6$) while the weakest, $\sigma_4^2 = 1$, is cut to a third. It is not an integer because shrinkage is continuous — a direction can be *partly* fitted.

(b) $\lambda = \sigma^2/\tau^2$ gives $\tau^2 = \sigma^2/\lambda = 6/2 = 3$, so $\tau = \sqrt3 \approx 1.732$. The noise standard deviation is $\sqrt6 \approx 2.449$. The belief encoded is that a typical coefficient is around $1.7$ in size — smaller than one noise standard deviation, so a fairly sceptical prior: it will not let a single direction move far unless the data insists.

</details>

## Connections

- **Backward:** this is 2.3 and 2.4 re-read. 2.3's MSE-optimal penalty $\lambda^* = \sigma^2/\beta_j^2$ is exactly $\sigma^2/\tau^2$ with the prior variance set to the truth, and 2.4's kink at the origin — the geometry [`convex-optimization` 5.1](../../convex-optimization/lessons/05-01-least-squares-lasso.md) draws as a diamond corner — is the Laplace cusp seen through $-\log$. The likelihood side is [`prob-stat-refresher` 4.1](../../prob-stat-refresher/lessons/04-01-estimation-and-mle.md) on MLE, with the Gaussian from [2.3 there](../../prob-stat-refresher/lessons/02-03-continuous-distributions.md).
- **Forward:** [3.1](03-01-the-pac-framework.md) makes the contrast that gives this lesson its edge. A prior is an assumption you are allowed to be wrong about, and the guarantee it buys is averaged over that assumption — Worked example 2 is the whole story in one table. PAC bounds hold **for every distribution**, with no prior anywhere, which is a different and stronger kind of statement. Module 3 is what you reach for when you cannot defend a prior.
- **Sideways:** [`econometrics`](../../econometrics/syllabus.md) owns the credible-versus-confidence distinction and the machinery for valid standard errors on a fixed true parameter; this course only needs to know that shrinkage buys prediction and costs coverage. [Boss problem 2](../syllabus.md) part (c) is exactly that trade, and the Bayesian reading of $\lambda$ from this lesson is what part (b) runs on.
