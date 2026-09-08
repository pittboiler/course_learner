# Machine Learning · Lesson 4.3: Diagnosing models in practice

> ⏱ ~15 min · Module 4: Evaluation and the road to neural nets · Builds on: [1.2 (bias–variance)](01-02-generalization-and-the-bias-variance-tradeoff.md), [4.1 (cross-validation)](04-01-model-selection-and-cross-validation.md), [4.2 (metrics)](04-02-classification-metrics.md) · Unlocks: 4.4 (a taste of neural networks)

## Why this matters

Your model sits at 78 percent and you have one week. Five moves are on the table: label 50,000 more rows, engineer better features, use a bigger model class, regularize harder, throw features away. They cost between nothing and forty thousand dollars, they point in opposite directions — more capacity versus less — and **at most one of them is the right call**.

The temptation is to try them in order of enthusiasm. The professional move is to spend twenty minutes producing one plot that tells you which. That plot is the **learning curve**, and reading it is the single highest-leverage skill in this module: it converts "what should I do next?" from a matter of taste into a matter of measurement.

This lesson is the course's judgement lesson. Every problem below hands you a diagnostic and asks for the next action — with a reason you could defend to someone paying for it.

## The idea

Fit your model on the first $m$ rows for a ladder of sizes $m$, and each time record two numbers: the error on those $m$ training rows, and the error on a **fixed** held-out set. Plot both against $m$.

The two curves move toward each other, and they do so for reasons you can state in one sentence each:

- **Training error rises with $m$.** Ten points are easy to fit exactly; ten thousand are not. The model has to start compromising.
- **Validation error falls with $m$.** More data pins the fit down, so it stops chasing the noise in any particular sample.

They squeeze toward a common limit. That limit is what your model class can achieve *with unlimited data* — and it is not zero. So the plot separates two completely different quantities:

> **The level is bias. The gap is variance.**

That is [1.2](01-02-generalization-and-the-bias-variance-tradeoff.md)'s decomposition made visible, and it matters because bias and variance have **opposite** cures. More data shrinks a gap and does nothing to a level. A bigger model class lowers a level and widens a gap. Confuse the two and every hour you spend makes the model worse.

Hence the reading rules, which are sharp enough to be a table:

| what you see | diagnosis | what helps | what does **not** |
|---|---|---|---|
| both curves high, converged together | **high bias** (underfitting) | bigger model class, better features, less regularization | more data — it is already converged |
| big gap, validation still falling | **high variance** (overfitting) | more data, more regularization, fewer features | a bigger model — it widens the gap |
| both low, small gap, target met | **fine** | ship it | more of anything |
| validation *below* training | **leak or distribution mismatch** | audit the split | every other move, until you have |

The last row deserves the dwelling. **A validation score better than your training score is almost never good news.** Your model was optimized on the training rows and merely measured on the validation rows; the optimized set should win. When it loses, the usual causes are [4.1's](04-01-model-selection-and-cross-validation.md) leak — the validation rows are not really held out — or a mismatch that makes the validation set an *easier* sample than the training set. Both make every other diagnosis on this page meaningless, which is why the audit comes first and everything else waits.

## The formal version

Fix a validation set $V$ and a ladder of training sizes. For each $m$, let $\hat f_m$ be the model fitted on the first $m$ rows, and define the two branches of the [learning curve](../reference.md#learning-curve):

$$\hat R_{\text{tr}}(m) = \frac1m\sum_{i=1}^{m}\ell\big(\hat f_m(x_i), y_i\big), \qquad \hat R_{\text{val}}(m) = \frac{1}{|V|}\sum_{i \in V}\ell\big(\hat f_m(x_i), y_i\big).$$

In words: same model, same fixed yardstick, only the amount of training data changes.

**The asymptote.** For squared loss, the expected error of a fitted model at a point $x_0$ splits three ways:

$$\mathbb E\big[(y - \hat f(x_0))^2\big] = \underbrace{\big(\mathbb E \hat f(x_0) - f(x_0)\big)^2}_{\text{bias}^2} + \underbrace{\operatorname{Var}\hat f(x_0)}_{\text{variance}} + \underbrace{\sigma^2}_{\text{noise}}.$$

In words: how wrong your class is on average, plus how much your fit jitters from sample to sample, plus the noise nobody can remove. (This is a theorem of [`statistical-learning`](../../statistical-learning/syllabus.md) (not yet built; stated here where it is used); the proof is an expand-and-cancel over $\mathbb E\hat f$.)

As $m \to \infty$ the variance term goes to zero while bias and noise do not. So both branches of the learning curve converge to the same limit,

$$\lim_{m\to\infty}\hat R_{\text{tr}}(m) = \lim_{m\to\infty}\hat R_{\text{val}}(m) = \text{bias}^2 + \sigma^2,$$

which is exactly why the **level** measures bias (given the noise floor) and the **gap** measures variance. Everything in the reading table is a corollary of this one limit.

**Three curves, three questions — do not confuse them.** All three have "error" on the vertical axis, and that is the entire source of the confusion:

| curve | horizontal axis | the question it answers |
|---|---|---|
| **loss curve** | optimizer iteration | is the optimizer converging? ([1.6](01-06-gradient-descent-for-learning.md)) |
| **learning curve** | training-set size $m$ | would more data help? |
| **[validation curve](../reference.md#validation-curve)** | one hyperparameter, e.g. $\lambda$ | which setting do I ship? ([4.1](04-01-model-selection-and-cross-validation.md)) |

A validation curve is U-shaped in $\lambda$ and tells you nothing about whether to buy data. A learning curve is monotone in $m$ and tells you nothing about which $\lambda$. Reaching for the wrong one is the standard mistake in this material.

**Order of operations.** Diagnosis is sequential, and skipping ahead poisons everything downstream:

1. **Audit the split.** Leaks, duplicate rows, grouped rows, time running backwards ([4.1](04-01-model-selection-and-cross-validation.md)). A leaked split makes every curve below it fiction.
2. **Check the metric.** Accuracy on a 1-percent-prevalence problem is flat at 0.99 no matter what the model does ([4.2](04-02-classification-metrics.md)). A dead metric makes every curve flat.
3. **Then read the curve.** Only now is the shape evidence about the model.

## Picture

![Two panels of learning curves plotted against training-set size. On the left, the training and validation curves converge high above a dashed irreducible-error floor, the high-bias signature. On the right, a wide gap with validation still falling and training sitting below the floor, the high-variance signature.](assets/04-03-fig1.svg)

Left: the curves have met, and they met a long way above the noise floor. Every extra row you buy lands in the flat part of both curves. **More data is money spent on nothing**; the distance from the merged level down to the floor is bias, and only a richer class or better features closes it.

Right: the curves have not met, and validation is still descending at the right edge. That descent *is* the promise — extrapolating it tells you what another doubling buys. Note that the training curve sits **below** the dashed floor: a model fitting the noise achieves an error smaller than the noise, which is a tidy sign that the gap is variance and not something profound.

## Worked examples

**Example 1 (mechanical): a learning curve you can compute exactly.** Ordinary least squares with $p$ parameters, fitted on $n$ rows whose true model is linear with noise variance $\sigma^2$ — so bias is exactly zero and only variance is in play. Two classical identities give the whole curve in closed form:

$$\mathbb E\big[\hat R_{\text{tr}}\big] = \sigma^2\Big(1 - \frac pn\Big), \qquad \mathbb E\big[\hat R_{\text{val}}\big] = \sigma^2\Big(1 + \frac pn\Big).$$

The first is the residual-sum-of-squares fact $\mathbb E[\mathrm{RSS}] = \sigma^2(n-p)$ divided by $n$; the second adds, rather than subtracts, the same fitting variance $\sigma^2 p / n$. The asymptote $\sigma^2$ sits exactly **midway** between the branches. With $\sigma^2 = 1$ and $p = 10$:

| $n$ | training | validation | gap | variance |
|---|---|---|---|---|
| 20 | 0.500 | 1.500 | 1.000 | 0.500 |
| 40 | 0.750 | 1.250 | 0.500 | 0.250 |
| 80 | 0.875 | 1.125 | 0.250 | 0.125 |
| 160 | 0.938 | 1.063 | 0.125 | 0.063 |
| 320 | 0.969 | 1.031 | 0.063 | 0.031 |

Three readings, and all three generalize far beyond OLS:

- **The gap is exactly twice the variance**, $2\sigma^2 p/n$ — the bias-free case in its purest form.
- **The gap halves every time you double the data.** So a learning curve is *extrapolable*: measure the gap at two sizes, and you can price the next one. Getting validation within 5 percent of the floor needs $p/n \le 0.05$, i.e. $n \ge 200$ — twenty rows per parameter.
- **The level is 1 and no $n$ moves it.** Here that level is pure noise, so nothing at all should be spent on the model. In a real problem the level is bias plus noise and you cannot tell the two apart from this plot alone — which is the honest limitation of the instrument, and the reason for the third Watch out.

**Example 2 (why you'd care): validation beats training, and nobody cheated.** A fraud classifier reports **training accuracy 0.790** and **validation accuracy 0.942**. Row four of the table says audit the split. Here is what the audit finds, and how you would separate the two candidate stories.

The per-class accuracies are identical on both splits: 0.98 on the legitimate class, 0.60 on the fraud class. What differs is the *mix*. Someone balanced the classes by discarding legitimate rows **before** splitting, so training is 50/50 while validation kept the natural 90/10:

$$\text{train} = 0.5(0.98) + 0.5(0.60) = 0.790, \qquad \text{val} = 0.9(0.98) + 0.1(0.60) = 0.942 .$$

The model is *identical* on both sets. The 15-point "improvement" is entirely composition: the validation set is simply richer in the class the model handles well. Accuracy is a prevalence-weighted average, and you changed the weights ([4.2](04-02-classification-metrics.md)).

**The diagnostic that separates the two stories.** Compute the **balanced accuracy** — the unweighted mean of the per-class recalls — on both splits:

$$\tfrac12(0.98 + 0.60) = 0.790 \quad \text{on training}, \qquad \tfrac12(0.98 + 0.60) = 0.790 \quad \text{on validation}.$$

Identical. A metric that does not depend on the class mix shows no inversion at all, so the model does *not* mysteriously perform better on held-out data — the split composition does. That is **mismatch, not leak**, and the fix is to stratify the split and rebalance inside the training fold only.

Had balanced accuracy *also* come out higher on validation, composition would be exonerated and you would be looking at a genuine leak: duplicated rows straddling the split, or a feature computed from the future. Same symptom, two causes, one cheap test that tells them apart.

## Watch out

- **You might think** a converged learning curve means you have hit the Bayes error — **but actually** it means you have hit *this model class's* asymptote, which is bias plus noise. The plot cannot separate those two terms, so "more data will not help" is a sound conclusion while "nothing will help" is not. The way to probe it is to fit a deliberately larger class and see whether its level lands lower; if it does, the old level was bias.
- **You might think** a 3-point gap between the curves is a diagnosis — **but actually** it may be the validation set's own noise. At accuracy 0.90 on 200 validation rows the standard error is $\sqrt{0.9(0.1)/200} \approx 0.021$, so a two-standard-error band is about $\pm 4$ points and any gap smaller than that is unreadable. Hold the validation set **fixed** across the whole ladder (otherwise two things change at once) and make it big enough that its error bar is smaller than the effects you intend to read.
- **You might think** validation below training always means a leak — **but actually** there are benign causes worth ruling out first, because they cost nothing to check. Dropout and data augmentation are active while training error is measured and off while validation error is measured; a training loss averaged *over* an epoch reports a model that no longer exists by the end of it. Example 2's composition artifact is a third. Rule those out before you go hunting for a leak — and rule the leak out before you trust any other row of the table.

## One-liner

> The level of a learning curve is bias and the gap is variance, so the level tells you whether to grow the model and the gap tells you whether to buy data — but read neither until you have audited the split and checked the metric.

## Problems

**P1 (🟢)** Four projects, four learning curves. For each: name the diagnosis, name the **single next action**, and give one sentence of justification.

| project | training | validation | shape | target |
|---|---|---|---|---|
| A | 0.48 MSE | 0.51 MSE | both flat since $m = 2{,}000$; $m$ is now 20,000 | 0.15 MSE |
| B | 0.990 acc | 0.830 acc | validation still climbing at $m = 40{,}000$ | 0.920 acc |
| C | 0.884 acc | 0.871 acc | both flat, gap flat | 0.850 acc |
| D | 0.912 acc | 0.947 acc | validation above training at every $m$ | 0.900 acc |

Then: a vendor offers 100,000 labelled rows for 40,000 dollars. Which of the four projects should buy, and which would be setting the money on fire?

**P2 (🟡)** A validation curve for ridge, by 10-fold CV (mean squared error, lower is better):

| $\lambda$ | 0.01 | 0.1 | 1 | 10 | 100 |
|---|---|---|---|---|---|
| CV MSE | 0.442 | 0.395 | **0.381** | 0.402 | 0.511 |
| SE | 0.031 | 0.028 | 0.030 | 0.026 | 0.022 |

(a) Which $\lambda$ does the raw minimum pick? (b) Apply the [one-standard-error rule](../reference.md#one-standard-error-rule) — be careful about which direction along this axis counts as "simpler" — and say whether it changes your pick. (c) Name **two** things you would check before trusting this table at all, and say what each would look like if it were wrong. (d) Someone proposes reading this same table to decide whether to buy more data. What is wrong with that?

**P3 (🔴)** A classifier reports **91 percent training accuracy and 90 percent validation accuracy** — a small gap at a respectable level, which row three of the table calls "fine, ship it". It is deployed and is worthless.

(a) Construct **two distinct** situations, each fully consistent with those two numbers, in which the model is useless in production. Give the numbers that make each one work. (b) For each, name the one measurement that would have caught it *before* deployment. (c) Give a single diagnostic that distinguishes the two from each other, and say what result points to which.

<details>
<summary>Solutions</summary>

**P1**

- **A — high bias.** The curves have converged (flat since $m = 2{,}000$) at 0.48/0.51, which is more than three times the 0.15 target. **Next action: enlarge the class or the feature set** — a richer model, interaction terms, less regularization. Justification: the gap is 0.03 out of a 0.33 shortfall, so essentially all the error is level, and the level is bias plus noise, which no amount of data touches.
- **B — high variance.** A 16-point gap with validation still improving at 40,000 rows. **Next action: more data** (or, free of charge while you wait for it, more regularization). Justification: the gap is what data buys down, and the still-descending curve is direct evidence the purchase has not yet run out of value — extrapolate the last two points to price the next doubling.
- **C — fine.** Both curves flat, gap 1.3 points, validation 0.871 clears the 0.850 target. **Next action: ship it**, then spend the effort on monitoring rather than modelling. Justification: nothing on the plot is broken; further tuning optimizes a number you have already exceeded, and each additional look at held-out data costs you honesty ([4.1](04-01-model-selection-and-cross-validation.md)).
- **D — leak or mismatch.** Validation is 3.5 points *above* training at every $m$, and consistency across the ladder rules out a lucky fold. **Next action: audit the split** — duplicated or grouped rows straddling it, class mixes that differ (Example 2), a feature built from the future, or the benign explanations in the third Watch out. Justification: until the inversion is explained, 0.947 is not an estimate of anything, and the fact that it clears the 0.900 target is worthless information.

**The vendor.** **B should buy** — it is the only project whose curve shows unspent value in more data. **A would be setting the money on fire**: its curves converged at $m = 2{,}000$ and it is already at 20,000, so 100,000 more rows land in the flat region and change the level by nothing. C has already met its target and needs no data; D cannot know what it needs until the split is audited, and buying data to fix a leak is the most expensive way to not fix a leak.

**P2** (a) The raw minimum is at $\lambda = 1$, CV MSE 0.381.

(b) The one-SE band is everything at or below

$$0.381 + 0.030 = 0.411 .$$

Inside it: $\lambda = 0.1$ (0.395), $\lambda = 1$ (0.381), $\lambda = 10$ (0.402). Outside: $\lambda = 0.01$ (0.442) and $\lambda = 100$ (0.511).

Now the direction. **"Simplest" means the most regularized model, so along this axis it is the *largest* $\lambda$ in the band, not the smallest.** (The trap is importing the habit from a table indexed by model number, where simpler meant a smaller index — here the index runs the other way.) So the rule moves the pick from $\lambda = 1$ to $\boldsymbol{\lambda = 10}$: same performance to within the noise, less variance, a flatter and more stable fit ([1.4](01-04-regularization-ridge-and-lasso.md)).

(c) Two of the following three, with what failure looks like:

1. **Is the minimum bracketed?** It is: the curve rises at both ends of the grid ($0.442$ at $\lambda = 0.01$, $0.511$ at $\lambda = 100$). If the best value had sat at an *endpoint*, the grid would not have contained the minimum and the honest response is to extend it, not to report the edge.
2. **Was standardization done inside the fold?** $\lambda$ penalizes coefficients, so its meaning depends on feature scale; scaling on the full data before the CV loop is a (mild) leak, and scaling inconsistently makes the whole $\lambda$ axis meaningless ([4.1](04-01-model-selection-and-cross-validation.md)).
3. **Are the error bars the right ruler?** Fold-to-fold SEs are *understated* because the $k$ training sets overlap heavily ([4.1](04-01-model-selection-and-cross-validation.md)). The true band is wider than 0.411, which pushes the one-SE answer further toward $\lambda = 10$ and possibly beyond — so the direction of that error is conveniently on the side of the pick already made.

Notice also that the top three entries span 0.014, less than half of one SE. **The ranking among them is not resolved by this table**, which is precisely the situation the one-SE rule exists to handle: since the data cannot tell them apart, choose on a different criterion (simplicity).

(d) It is the wrong curve. This is a **validation curve** — the horizontal axis is a hyperparameter, and the whole table was computed at one fixed sample size. It answers "which $\lambda$", and it contains no information about $m$. "Would more data help" is a question for a **learning curve**, whose axis is $m$; you would have to re-run this CV at several training sizes to answer it.

**P3** (a) Two situations, both consistent with 91 percent training and 90 percent validation accuracy.

**Situation 1 — the metric is dead (class imbalance).** 90 percent of rows are the negative class. The model predicts negative for essentially everything: recall 0.995 on the negatives and 0.05 on the positives. Its accuracy is

$$0.9(0.995) + 0.1(0.05) = 0.8955 + 0.005 = 0.9005 \approx 0.90 ,$$

with the training figure a point higher for the ordinary reason. The trivial "always negative" classifier scores **0.900** on the same data, so the model has added essentially nothing — and if the positives are the fraud, the disease, or the churn, "essentially nothing" is the entire product. Both curves are flat, converged and healthy-looking, because accuracy cannot see the 10 percent that matters.

**Situation 2 — the split is not the deployment distribution.** Training and validation are a random split of one historical pool, so they are exchangeable *with each other* and the curves are honest about that pool. Deployment is not that pool: the traffic mix moved, a feature is populated differently by the live system than by the backfill job that built the training table, or the rows are grouped (many rows per customer) and the random split put the same customers on both sides, so 90 percent measures recognizing known customers rather than predicting new ones. Accuracy on genuinely new data can be at chance while the internal numbers stay at 0.90 forever.

The moral: **rows three and four of the reading table are claims about your validation set, not about the world.** A learning curve is honest only about the distribution it was computed on.

(b) The catch, in each case:

- **Situation 1:** the confusion matrix, or equivalently per-class recall — and the comparison every classification report should open with, **the model's accuracy against the majority-class baseline** ([4.2](04-02-classification-metrics.md)). Here they are 0.900 and 0.900. A model that does not beat the trivial classifier has not been evaluated, it has been flattered.
- **Situation 2:** a split that mirrors deployment — forward-chaining by time, or splitting by customer group rather than by row ([4.1](04-01-model-selection-and-cross-validation.md)) — plus a check that each feature is computed the same way at training and at serving time.

(c) **The distinguishing diagnostic: compute per-class recall and the majority-class baseline on the validation set you already have.**

- If the model's accuracy is at or barely above the baseline and positive-class recall is near zero, it is **Situation 1**. No new data is needed to establish this; it is a re-reading of numbers already in hand, which is why it comes first — it is free.
- If the model clearly beats the baseline and both classes' recalls are healthy, Situation 1 is excluded and you are looking at **Situation 2**. Confirming it costs a new split: re-fit with a time-forward or group-wise split and watch validation accuracy fall. A large drop confirms the mismatch and simultaneously gives you the honest number.

Run them in that order — cheap test first — and note that this is exactly the lesson's order of operations run backwards from a symptom: metric, then split, and only then anything about the model.

</details>

## Flashback

**From Lesson 4.2 (Classification metrics):** A test for a condition with prevalence 2 percent has sensitivity 0.90 and specificity 0.96.

(a) Out of 10,000 screened, build the four confusion-matrix counts and compute precision, accuracy, and the accuracy of the trivial "always negative" classifier. (b) You now plot a learning curve for this classifier with **accuracy** on the vertical axis, on a problem with 1 percent prevalence. Say what the plot will look like and why, and name what you would plot instead.

<details>
<summary>Solution</summary>

(a) Out of 10,000: $0.02 \times 10{,}000 = 200$ have the condition and 9,800 do not.

| | condition | no condition | total |
|---|---|---|---|
| **test +** | $\mathrm{TP} = 0.90(200) = 180$ | $\mathrm{FP} = 0.04(9800) = 392$ | 572 |
| **test −** | $\mathrm{FN} = 20$ | $\mathrm{TN} = 0.96(9800) = 9408$ | 9,428 |

$$\text{precision} = \frac{180}{180 + 392} = \frac{180}{572} = 0.3147, \qquad \text{recall} = \frac{180}{200} = 0.90 .$$

Accuracy is $(180 + 9408)/10{,}000 = 0.9588$, and the trivial "always negative" classifier scores $1 - 0.02 = \mathbf{0.98}$ — higher.

Bayes gives the same precision without the table ([prob-stat-refresher 1.2](../../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md)):

$$\frac{0.02(0.90)}{0.02(0.90) + 0.98(0.04)} = \frac{0.018}{0.0572} = 0.3147 .$$

So a test that catches 90 percent of cases and clears 96 percent of healthy people still produces **fewer than one true positive in three flags**, and still loses to doing nothing on accuracy. Precision moved with prevalence; recall did not.

(b) **The plot will be two nearly flat lines at about 0.99, almost touching, from the very first training size** — the textbook "converged, small gap, ship it" signature. It says nothing about the model, because the constant classifier already scores 0.99 on a 1-percent-prevalence problem, and the entire range of interesting behaviour is compressed into the last percentage point. Worse, the plot is *stable*: a model that gets strictly better at the positives moves this curve by amounts smaller than the validation set's own error bar, so the curve will look identical whether the model is excellent or worthless.

**Plot instead a metric that is not prevalence-weighted**, so that the curve actually moves with $m$: average precision (area under the precision–recall curve) for rare positives, or recall at a fixed operating precision if the deployment constraint names one, or balanced accuracy / $F_1$ on the positive class. Any of these has room to fall and rise; accuracy here has none.

**The general point, and it is the lesson's step 2:** you must fix the metric *before* you read the curve. A dead metric flattens every learning curve into the "everything is fine" shape, and that shape is the one you are least likely to question.

</details>

## Connections

- **Backward:** this is [1.2](01-02-generalization-and-the-bias-variance-tradeoff.md) turned into an instrument — the level of the curve is that lesson's bias term and the gap is its variance term, now measurable rather than merely decomposable. Step 1 of the order of operations is [4.1](04-01-model-selection-and-cross-validation.md) and step 2 is [4.2](04-02-classification-metrics.md), which is why this lesson comes third: it is the only one of the three that assumes the other two were done. The choice of *what* to plot on the vertical axis is [1.1's](01-01-the-learning-problem.md) loss decision all over again.
- **Forward:** [4.4](04-04-a-taste-of-neural-networks.md) and [`deep-learning`](../../deep-learning/syllabus.md) live on these plots — network width, depth, and dataset size are chosen almost entirely by reading learning curves, since the models are far too expensive to select by exhaustive cross-validation. One caveat to carry there: in the heavily overparameterized regime the validation curve is **not** always U-shaped in capacity, and the *double descent* phenomenon is [`statistical-learning`](../../statistical-learning/syllabus.md)'s (not yet built) — a second descent after the interpolation threshold, which the classical reading table above does not predict.
- **Sideways:** the "measure before you optimize" discipline is the profiler's, not the modeller's — the same reflex that makes you count operations before rewriting a loop ([algorithms 1.1](../../algorithms/lessons/01-01-asymptotic-notation.md)). And the third curve in the table, loss against iteration, belongs to [convex-optimization 4.1](../../convex-optimization/lessons/04-01-first-order-methods.md): a flat loss curve means your optimizer stalled, which is a completely different failure from a flat learning curve, and the two are routinely confused because they are drawn on identical axes.
