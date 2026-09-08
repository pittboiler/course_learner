# Machine Learning · Lesson 4.1: Model selection and cross-validation

> ⏱ ~15 min · Module 4: Evaluation and the road to neural nets · Builds on: [1.2 (generalization)](01-02-generalization-and-the-bias-variance-tradeoff.md), [1.4 (regularization)](01-04-regularization-ridge-and-lasso.md) · Unlocks: 4.2 (classification metrics), 4.3 (diagnosing models)

## Why this matters

Every number you report about a model is a claim about data nobody has seen yet. One rule makes such a claim trustworthy, and it is short enough to memorise:

> **Any data used to choose the model cannot also estimate its error.**

Choosing is a form of fitting. Picking $\lambda$, picking 100 features out of 5000, picking a decision threshold, picking which of forty architectures to ship — each one spends information out of your data exactly as a fitted coefficient does, and each one biases every subsequent score computed on that same data. The bias is always in the flattering direction, because you selected on the score.

This is the most expensive mistake in applied machine learning, and the reason is that it is **silent**. Nothing crashes. No warning prints. The number just comes out beautiful, you believe it, and the model fails in production at a rate nobody predicted. The rest of Module 4 is diagnosis; this lesson is the one that stops you generating the disease.

## The idea

Split the data into **three roles**, and keep the roles straight even when one physical split serves two of them:

| role | what it decides | how often it is touched |
|---|---|---|
| **training** | the parameters, at one fixed setting | every fit |
| **validation** | the settings — $\lambda$, depth, feature set, model family | once per candidate |
| **test** | the error of the single model you ship | **once, ever** |

Why three and not two? Because the winner's validation score is the *best* of many noisy estimates, and the best of many noisy estimates is optimistic even when nothing is learnable. Take forty worthless models, each with true accuracy 0.5, each measured with a standard error of 0.03. The expected maximum of forty draws is about 2.16 standard errors above the mean, so the winner reads

$$0.5 + 2.16 \times 0.03 \approx 0.565.$$

Fifty-six and a half percent, from forty coin flips dressed as models. Nobody cheated; the selection did it. (Verified by simulation: mean of the maximum over 200,000 replications, 0.5648.) That optimism is the reason the test set exists, and it is the same optimism that makes training error a biased estimate of risk in [1.2](01-02-generalization-and-the-bias-variance-tradeoff.md) — the minimum over a class chosen with the same data.

**[$k$-fold cross-validation](../reference.md#k-fold-cross-validation)** is what you do when you cannot afford to lock away a big validation set. Cut the rows into $k$ blocks; each block takes a turn as the validation set while the other $k-1$ train; average the $k$ scores. Every row is validated exactly once and trains $k-1$ times. It is data reuse without dishonesty — *provided* the loop wraps every data-dependent decision, which is the trap the rest of the lesson is about.

## The formal version

Partition the $n$ rows into folds $F_1,\dots,F_k$ of roughly equal size. For each $j$, fit $\hat f^{-j}$ on everything outside $F_j$, and score it on $F_j$:

$$e_j \;=\; \frac{1}{|F_j|}\sum_{i \in F_j} \ell\big(\hat f^{-j}(x_i),\, y_i\big), \qquad \hat R_{\mathrm{CV}} \;=\; \frac{1}{k}\sum_{j=1}^{k} e_j .$$

In words: fit $k$ times, each time on a different $(k-1)/k$ of your data, and average the $k$ held-out scores. Here $\ell$ is the loss from [1.1](01-01-the-learning-problem.md) and $\hat f^{-j}$ means "the model fitted without fold $j$".

The spread across folds gives an error bar,

$$\mathrm{SE} \;=\; \frac{s}{\sqrt{k}}, \qquad s^2 = \frac{1}{k-1}\sum_{j=1}^{k}\big(e_j - \hat R_{\mathrm{CV}}\big)^2 ,$$

the ordinary standard error of a mean ([prob-stat-refresher 3.2](../../prob-stat-refresher/lessons/03-02-sums-and-law-of-large-numbers.md)) — with a caveat in "Watch out" that matters.

**What $\hat R_{\mathrm{CV}}$ actually estimates** is the risk of the *procedure* trained on $n(k-1)/k$ rows, not of the final model you fit on all $n$. Since more data does not hurt, that makes CV mildly **pessimistic**, and the smaller $k$ is, the more so.

**Choosing $k$ is a bias–variance trade in its own right.**

- $k = n$ (**leave-one-out**) trains on $n-1$ rows, so it is nearly unbiased — but it costs $n$ fits, and the $n$ training sets differ in a single row, so the $n$ errors are strongly correlated and their average has high variance.
- $k = 5$ or $10$ costs 5 or 10 fits, buys much less correlation between folds, and pays a small pessimistic bias. This is why $k=10$ is the default.
- **The one exception worth knowing:** for a linear smoother with hat matrix $H$ ([1.3](01-03-linear-regression-and-least-squares.md)), leave-one-out has a closed form that costs a *single* fit,

$$\mathrm{LOOCV} \;=\; \frac{1}{n}\sum_{i=1}^{n}\left(\frac{y_i - \hat y_i}{1 - h_{ii}}\right)^{2},$$

  where $h_{ii}$ is row $i$'s leverage. When it applies, LOOCV is free; the moment your model is not a linear smoother, it costs $n$ fits again.

**The [one-standard-error rule](../reference.md#one-standard-error-rule).** Among models whose CV score is within one SE of the best, take the **simplest**. You are declaring that differences inside the noise band are not real, and spending that indifference on less variance — [1.2](01-02-generalization-and-the-bias-variance-tradeoff.md)'s trade, applied to the selection step itself.

**[Nested CV](../reference.md#nested-cross-validation)** is what you use when you must both tune and report. The inner loop picks the setting; the outer loop scores the *whole tuning procedure* on data the inner loop never saw. Over a grid of $G$ settings the bill is

$$\underbrace{G\,k_{\text{in}}\,k_{\text{out}}}_{\text{inner fits}} \;+\; \underbrace{k_{\text{out}}}_{\text{outer refits}} \;+\; \underbrace{1}_{\text{final model}} \ \text{ fits.}$$

**Three cases where random $k$-fold is simply the wrong split**, each with its fix:

- **Time series.** Random folds train on the future to predict the past. Use forward chaining: train on months 1–6 and test on 7, then 1–7 and test on 8, and so on.
- **Grouped rows** — repeated measurements on the same patient, several photos of one product. Split by *group*, never by row, or the model recognises the group instead of learning the task.
- **Heavy class imbalance.** A random fold can contain zero positives. Stratify so every fold carries the population's class proportions ([4.2](04-02-classification-metrics.md) on why the metric matters too).

## Picture

![Left: a five by five grid of blocks, one row per fold, with the diagonal validation block shaded coral and the other four blocks grey. Right: the same grid under a leaked protocol, with a coral selection band across the top joined by dashed lines down into every block, the validation block included.](assets/04-01-fig1.svg)

The left panel is the honest protocol: five fits, and each model's coral block is invisible to it. The right panel is the same five fits under a leak. Nothing about the folds changed — the band across the top did, and its dashed lines reach into the coral blocks. **Cross-validation protects only the steps inside the loop.** Anything drawn above the folds has already read them all.

## Worked examples

**Example 1 (mechanical): what does an honest number cost?** You want to tune ridge over a grid of $G = 12$ values of $\lambda$ *and* report an unbiased error estimate. Take $k_{\text{in}} = 5$, $k_{\text{out}} = 5$, and 40 seconds per fit.

| step | fits | time |
|---|---|---|
| inner tuning ($12 \times 5$ per outer fold, 5 outer folds) | $300$ | 3 h 20 min |
| refit the chosen $\lambda$ on each outer training set | $5$ | 3 min 20 s |
| final model on all the data | $1$ | 40 s |
| **total** | $\mathbf{306}$ | **12,240 s ≈ 3.4 h** |

Compare flat 5-fold tuning with no outer loop: $12 \times 5 + 1 = 61$ fits, about 41 minutes — five times cheaper. What the extra 2 hours 40 minutes buys is precisely one thing: the flat protocol gives you a $\lambda$ *and* a score, but its score is the minimum over twelve noisy CV estimates and is therefore optimistic by the winner's-curse argument above. Nested CV gives you a score for the tuning procedure. If you only need to *pick* $\lambda$ and will report on a separate test set, flat tuning is correct and the nested loop is waste.

**Example 2 (why you'd care): the leak that survives cross-validation.** Take $n = 50$ rows and $p = 5000$ features drawn as pure noise, with labels assigned by coin flip. There is nothing to learn — by construction, features and labels are independent — so the only honest accuracy is 50 percent.

- **Protocol A.** Rank all 5000 features by the absolute correlation of the feature with the label, using **all 50 rows**. Keep the top 100. Then run 10-fold CV of a nearest-neighbour classifier on those 100 features.
- **Protocol B.** Identical, except the ranking is redone from scratch inside each of the ten training sets.

A reports an accuracy far above chance. One draw of exactly this simulation gave **A: 0.96, B: 0.52**; across eight draws A ran 0.96 to 1.00 and B ran 0.44 to 0.64. The exact size of A's number depends on the draw and is not the point — the mechanism is, and the mechanism is deterministic.

**Why A is meaningless.** The ranking step read all 50 labels, including the labels of the rows in fold 3. Among 5000 pure-noise columns, a few will correlate with fold 3's labels by luck alone: with $n = 50$ a single noise correlation has a standard deviation of about $1/\sqrt{49} \approx 0.14$, and the largest of 5000 such is around $0.48$ (one draw; the hundredth largest was $0.33$). Selection keeps exactly those lucky columns. By the time fold 3 is "held out", the surviving feature set already encodes fold 3's labels. The fold is held out from the *fitting* step and not from the *selection* step, and the fitting step is the only one CV wrapped.

**The operational rule.** Everything data-dependent goes inside the loop: feature selection, imputation of missing values, over- and under-sampling, choice of decision threshold, standardisation. Standardising on the full training portion is the mild case — a leak, but a second-order one ([1.4](01-04-regularization-ridge-and-lasso.md) P3 quantifies it). Selecting 100 features out of 5000 on the full data is the severe case, and the two look identical in code review. What separates them is how much of the label the offending step gets to see.

## Watch out

- **You might think** you can look at the test set as long as you only report the number once — **but actually** every look is a selection. If you saw 0.81, disliked it, changed a feature and saw 0.84, you have used the test set as a validation set and 0.84 is optimistic. The test set buys you exactly one number, at the end. (The same logic condemns the Kaggle-style leaderboard reflex: a hundred submissions against one holdout turn it into a training set.)
- **You might think** the fold-to-fold standard error $s/\sqrt{k}$ is a real error bar — **but actually** it is optimistic, because the $k$ training sets overlap heavily. Two of them share $(k-2)/(k-1)$ of their rows: at $k = 10$ that is 89 percent, so $e_1,\dots,e_k$ are positively correlated and $s/\sqrt{k}$ understates the true spread. There is no unbiased estimator of $k$-fold CV's variance. Treat one SE as a soft ruler, not a significance test.
- **You might think** out-of-bag error ([2.6](02-06-bagging-and-random-forests.md)) makes cross-validation unnecessary for a forest — **but actually** it estimates something slightly different: each row is scored by only the roughly 37 percent of trees that missed it, so OOB is the error of a *smaller* forest than the one you ship, and it says nothing at all about a hyperparameter you tuned outside the bagging loop. It is a free and useful estimate; it is not a substitute for a test set you never touched.

## One-liner

> Cross-validation is honest only about the steps it wraps — every data-dependent choice, feature selection above all, has to happen inside the fold, and the test set is a single number you get to spend once.

## Problems

**P1 (🟢)** You are tuning a gradient-boosted model over a grid of 6 learning rates $\times$ 4 tree depths, and you need a defensible out-of-sample estimate as well as the chosen setting. You run nested CV with $k_{\text{in}} = 5$ and $k_{\text{out}} = 10$. One fit takes 8 seconds.

(a) How many inner fits? (b) The total, counting the outer refits and the final model. (c) The wall-clock time. (d) Flat 10-fold tuning over the same grid costs how many fits and how long — and what exactly does the nested version buy for the difference?

**P2 (🟡)** Three protocols. For each, say whether the reported number is an honest estimate of out-of-sample performance, and if not, name the **exact step** that leaked and what it saw.

(a) Split 500 rows 80/20. On the 400: standardise the columns, select features, tune $\lambda$ by 5-fold CV, refit the winner on all 400. Score the 100 held-back rows once and report that.

(b) Run 10-fold CV on all the data for each of 40 candidate architectures. Report the best architecture's mean CV accuracy as the expected accuracy in deployment.

(c) Daily sales through December 2025. Build a feature "7-day rolling mean of sales" over the whole series, shuffle the rows, run random 10-fold CV, report the mean.

**P3 (🔴)** Five nested model complexities, scored by 10-fold CV (mean squared error, lower is better):

| model | complexity | CV MSE | SE |
|---|---|---|---|
| M1 | 1 | 0.412 | 0.021 |
| M2 | 2 | 0.315 | 0.019 |
| M3 | 3 | 0.268 | 0.022 |
| M4 | 4 | **0.259** | 0.024 |
| M5 | 5 | 0.263 | 0.026 |

(a) Apply the one-standard-error rule and name the pick. (b) By what factor would the standard errors have to be understated before the rule's answer changes, and to what? (c) The second "Watch out" says they *are* understated. Say what an understated SE costs you here — in terms of which of [1.2](01-02-generalization-and-the-bias-variance-tradeoff.md)'s error components you fail to buy down.

<details>
<summary>Solutions</summary>

**P1** The grid has $G = 6 \times 4 = 24$ settings.

(a) Inner fits: $G\,k_{\text{in}}\,k_{\text{out}} = 24 \times 5 \times 10 = \mathbf{1200}$. (Each of the 10 outer folds runs its own full 5-fold tuning sweep over 24 settings.)

(b) Plus one refit of the winning setting on each outer training set ($+10$), plus the final model on all the data ($+1$): $1200 + 10 + 1 = \mathbf{1211}$ fits.

(c) $1211 \times 8 = 9688$ seconds $= \mathbf{2\ \text{h}\ 41\ \text{min}}$ (2.69 hours).

(d) Flat 10-fold tuning: $24 \times 10 + 1 = 241$ fits, $1928$ s $\approx 32$ minutes — a factor of 5.0 cheaper. Both procedures return the same *kind* of chosen setting. What the nested version adds is a **score you may quote**: the flat protocol's reported number is the minimum over 24 noisy CV estimates and is optimistic by the winner's-curse argument, whereas each outer fold in the nested run scores a tuning procedure on rows its inner loop never saw. If you have a separate untouched test set to report on, flat tuning is the right call and the extra 2 h 9 min is waste.

**P2** (a) **Honest.** Every data-dependent step — standardising, selecting, tuning — happened inside the 400, and the 100 test rows were scored once. Two footnotes: standardising on all 400 rather than inside each of the five CV folds is a genuine but second-order leak, and it affects only the *tuning* estimate, never the test score, since the test rows were never in the 400 at all; and the reported number is one draw from a 100-row test set, so its own standard error is substantial.

(b) **Leaked — by selection, not by folding.** No individual fold was misused, and each of the 40 CV numbers is individually a fair estimate of its architecture. The reported number is the **minimum over 40 such estimates**, and the minimum of noisy estimates is biased downward in error (upward in accuracy) — the forty-worthless-models calculation in "The idea" puts that at roughly 2.16 SE, so even 40 useless candidates would report about 56.5 percent. The leaking step is *the comparison itself*, which read all 40 CV scores computed on all the data. Fix: nested CV, or hold out a test set the comparison never touches.

(c) **Leaked twice.**
  1. *The feature.* The 7-day rolling mean at day $t$ was computed over the whole series, so on the trailing edge it averages in days after $t$. Every row therefore carries information from its own future — and rows in the training folds carry information about validation days. Fix: compute the feature causally, using only data up to $t$.
  2. *The split.* Random 10-fold puts future days in the training set and past days in validation, which is not the deployment problem; and consecutive days are nearly duplicates, so a validation day almost always has its own neighbours in training. Fix: forward chaining — train on a prefix, validate on the block that follows.

Either one alone would inflate the score; together the reported number says nothing about forecasting.

**P3** (a) Best CV MSE is M4 at $0.259$, with $\mathrm{SE} = 0.024$. The one-SE band is everything at or below

$$0.259 + 0.024 = 0.283.$$

M3 ($0.268$), M4 ($0.259$) and M5 ($0.263$) are inside it; M2 ($0.315$) and M1 ($0.412$) are not. The **simplest** model inside the band is **M3**. (M5 is also inside, but it is more complex, not less — the rule only ever moves you toward simplicity.)

(b) The next model down is M2 at $0.315$, which enters the band once $0.259 + c \times 0.024 \ge 0.315$, i.e.

$$c \;\ge\; \frac{0.315 - 0.259}{0.024} \;=\; \frac{0.056}{0.024} \;=\; 2.33 .$$

So the SEs would have to be understated by a factor of about **2.33** before the rule moves from M3 to M2 — check: $0.259 + 2.33 \times 0.024 = 0.315$. The answer M3 is robust to the usual scale of the problem: inflating every SE by 1.5 gives a band of $0.295$, which still admits M3 and only M3 as the simplest member.

(c) An understated SE makes the band **too narrow**, so the rule under-simplifies and you end up hugging the CV minimum. But the CV minimum is itself a selected quantity — the smallest of five noisy numbers — so it is optimistic, and the model sitting on it is the one whose luck was best on these particular folds. In [1.2](01-02-generalization-and-the-bias-variance-tradeoff.md)'s terms, the one-SE rule deliberately buys a little **bias** in exchange for a cut in **variance**; a band that is too narrow means you fail to make that purchase and keep the variance. It never touches the irreducible noise $\sigma^2$, which no choice of model can. (Note the margin from (b) is comfortable here precisely because M2 is far from the band; on a flatter CV curve the same understatement would flip the answer.)

</details>

## Flashback

**From [Lesson 3.6](03-06-the-em-algorithm.md) (The EM algorithm):** Fit a two-component, equal-weight, unit-variance 1-D Gaussian mixture to the four points $\{-1,\,0,\,3,\,4\}$, initialised at $\mu_A = 0$, $\mu_B = 2$.

(a) Run one E-step: give $r_A(x)$ for each point, using the shared-variance closed form. (b) Run the M-step for both means. (c) The observed log-likelihood rose from $-9.283$ to $-6.994$ across that iteration, and it will rise again at the next one, and the next. Say why that is not evidence of anything about new data, and name the curve you would plot instead.

<details>
<summary>Solution</summary>

(a) With equal weights and a shared $\sigma = 1$, the responsibility collapses to a logistic function of $x$:

$$r_A(x) = \frac{e^{-(x-\mu_A)^2/2}}{e^{-(x-\mu_A)^2/2} + e^{-(x-\mu_B)^2/2}} = \frac{1}{1 + e^{\,(\mu_B - \mu_A)\left(x - \frac{\mu_A+\mu_B}{2}\right)}} .$$

With $\mu_A = 0$, $\mu_B = 2$ the exponent is $2(x-1)$, so $r_A(x) = \sigma_{\text{logistic}}(2 - 2x)$:

| $x$ | $2-2x$ | $r_A$ | $r_B = 1 - r_A$ |
|---|---|---|---|
| $-1$ | $4$ | $0.9820$ | $0.0180$ |
| $0$ | $2$ | $0.8808$ | $0.1192$ |
| $3$ | $-4$ | $0.0180$ | $0.9820$ |
| $4$ | $-6$ | $0.0025$ | $0.9975$ |

Every row sums to 1 by construction.

(b) Responsibility-weighted means. Totals: $n_A = 1.8833$, $n_B = 4 - n_A = 2.1167$.

$$\mu_A \leftarrow \frac{-0.9820 + 0 + 3(0.0180) + 4(0.0025)}{1.8833} = \frac{-0.9182}{1.8833} = \mathbf{-0.4875},$$

$$\mu_B \leftarrow \frac{-0.0180 + 0 + 3(0.9820) + 4(0.9975)}{2.1167} = \frac{6.9182}{2.1167} = \mathbf{3.2683}.$$

Both lie inside the data range, as they must — each is a weighted average of the four points.

(c) **The likelihood that rises is the likelihood of the training points.** EM's monotonicity theorem says the observed-data log-likelihood never decreases from iteration to iteration on *the data it is fitting*; it says nothing whatever about a new point. The two are different quantities, and pushing one up can push the other down — that is overfitting, stated in likelihood units. Worse, [3.5](03-05-gaussian-mixture-models.md)'s degeneracy shows the training likelihood is unbounded above, so a monotone climb can head for a spike of zero variance on a single data point: the guarantee is intact, the model is worthless, and no amount of watching the training curve would tell you.

The curve to plot instead is the **held-out log-likelihood** — fit on $k-1$ folds and evaluate the fitted mixture's log density on the held-out fold, once per iteration. It typically rises, peaks, and then falls, and the peak is where you stop. This is exactly the lesson's rule applied to an unsupervised model: the number that convinces you must be computed on rows the fit never saw. (And if you also use that curve to choose $K$, the number of components, then the same held-out fold has now made a selection — so the honest report needs an outer fold it never touched.)

</details>

## Connections

- **Backward:** the one-standard-error rule is [1.2](01-02-generalization-and-the-bias-variance-tradeoff.md)'s trade applied to the act of choosing — buy a little bias, cut variance — and the $\lambda$ that CV is usually selecting is [1.4](01-04-regularization-ridge-and-lasso.md)'s. Out-of-bag error in [2.6](02-06-bagging-and-random-forests.md) is cross-validation you got for free from the bootstrap, with the caveats in "Watch out". The leverage-based LOOCV shortcut is the hat matrix of [1.3](01-03-linear-regression-and-least-squares.md) doing one more job.
- **Forward:** [4.2](04-02-classification-metrics.md) supplies the $\ell$ that CV should be averaging — a cross-validated accuracy on a 1-percent-prevalence problem is an honestly estimated useless number. [4.3](04-03-diagnosing-models-in-practice.md) reads the curves this lesson produces, and its "validation error below training error" row is almost always a leak of the kind Example 2 builds.
- **Sideways:** why selection biases the selected estimate — the optimism of an empirical minimum over a hypothesis class — is the theory side of this lesson and belongs to [`statistical-learning`](../../statistical-learning/syllabus.md) (not yet built; the consequence is stated here where it is used, as the winner's-curse calculation). The habit itself is older and wider than machine learning: it is the same object as pre-registration in experimental science and out-of-sample backtesting in finance, where fitting a trading rule to the history it was discovered in has its own name.
