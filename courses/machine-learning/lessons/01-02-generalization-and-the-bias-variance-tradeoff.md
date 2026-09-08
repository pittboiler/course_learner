# Machine Learning · Lesson 1.2: Generalization and the bias–variance trade-off

> ⏱ ~15 min · Module 1: Foundations and linear models · Builds on: [1.1 (the learning problem)](01-01-the-learning-problem.md) · Unlocks: [1.3 (least squares)](01-03-linear-regression-and-least-squares.md), [1.4 (regularization)](01-04-regularization-ridge-and-lasso.md)

## Why this matters

Lesson 1.1 gave you a target — minimise risk, the error on data you have never seen — and one thing you can actually compute, the empirical risk on your sample. This lesson is about the gap between them, and it is the single most useful piece of machinery in the course.

The reason is that the gap **decomposes**. Test error is not one blob of badness; it is three terms, and only two of them are yours to move. Once you can name which term a symptom belongs to, the whole rest of the course reads as a catalogue of knobs on the same trade-off: $\lambda$ in ridge and lasso ([1.4](01-04-regularization-ridge-and-lasso.md)), the cost $C$ in a soft-margin SVM ([2.3](02-03-soft-margins-and-the-svm-dual.md)), tree depth ([2.5](02-05-decision-trees.md)), the number of trees you average ([2.6](02-06-bagging-and-random-forests.md)), the kernel width $\gamma$ ([2.4](02-04-the-kernel-trick.md)), $k$ in $k$-means ([3.3](03-03-k-means-clustering.md)). They are all the same dial.

And it tells you which fixes are *not available*. "Get more data" is a real answer to one of the three terms, a useless answer to the second, and an insult to the third.

## The idea

Fix a test input $x_0$ and imagine re-running your whole pipeline many times, each time on a **fresh training set** drawn from the same world. You get a cloud of predictions at $x_0$. Two things can be wrong with that cloud:

- it can be centred in the wrong place — **bias**, the error your method makes *on average*, which is what you get for insisting the world looks like a line when it does not;
- it can be wide — **variance**, how much the answer jerks around when you swap one training set for another, which is what you pay for a method flexible enough to chase whatever noise it was handed.

And a third thing is wrong with the *world*, not with you: even a perfect prediction of $f(x_0)$ misses the observed $y$, because $y$ carries noise. That is the **irreducible error** $\sigma^2$. No model, no data budget, no cleverness touches it.

The rifle picture is the standard one and it is worth keeping: bias is a misaligned sight (every shot off in the same direction), variance is a shaky hand (shots scattered around wherever you aimed), noise is wind between the muzzle and the target that nobody can see.

The crucial and constantly-missed part: **bias and variance are properties of the procedure, not of the fit in front of you.** They are defined by averaging over training sets you never drew. You cannot look at one fitted model and read off its variance, which is exactly why [4.1](04-01-model-selection-and-cross-validation.md) has to resample and [4.3](04-03-diagnosing-models-in-practice.md) has to read curves.

## The formal version

**Setup.** Data comes from $y = f(x) + \varepsilon$, where $f$ is the unknown truth, $\mathbb E[\varepsilon] = 0$, $\operatorname{Var}(\varepsilon) = \sigma^2$, and $\varepsilon$ is independent across observations. A training set $S$ of $n$ pairs is drawn; a learning procedure turns $S$ into a predictor $\hat f = \hat f_S$. Expectations below are over the draw of $S$ **and** over the fresh noise in the test observation $y$ at $x_0$.

**The decomposition.** For squared loss at a fixed test point $x_0$,

$$\mathbb E\big[(y - \hat f(x_0))^2\big] \;=\; \underbrace{\big(\mathbb E[\hat f(x_0)] - f(x_0)\big)^2}_{\text{bias}^2} \;+\; \underbrace{\operatorname{Var}\big(\hat f(x_0)\big)}_{\text{variance}} \;+\; \underbrace{\sigma^2}_{\text{irreducible}}.$$

*In words:* your expected error at a point is how far your method aims off-centre, plus how much it wobbles, plus the noise you were never going to predict. See the reference card's [bias–variance decomposition](../reference.md#bias-variance-decomposition) and [irreducible error](../reference.md#irreducible-error) entries for the statement in lookup form.

The proof is three lines of adding and subtracting $\mathbb E[\hat f(x_0)]$ and killing cross terms with independence; it belongs to [`statistical-learning`](../../statistical-learning/syllabus.md) (not yet built; stated here where it is used), which owns the decomposition as a theorem. What this course does with it is *arithmetic* — Example 1 computes all three terms exactly — because the decomposition only becomes a diagnostic once you have watched the numbers come out.

Two consequences to state now:

- **The first two terms sum to the reducible error.** Any comparison of two methods at the same $x_0$ under the same $\sigma^2$ is a comparison of $\text{bias}^2 + \text{variance}$; the $\sigma^2$ is a common constant and can be ignored.
- **The trade-off is not a law of nature, it is an empirical regularity.** Nothing in the algebra forbids lowering both terms at once — that is precisely what a better hypothesis class does. What the algebra *does* say is that the two terms are computed from the same cloud, so moving flexibility usually moves them in opposite directions.

**Why training error is not an estimate of risk.** The empirical risk $\hat R_S(\hat f)$ is computed on the very data used to choose $\hat f$, so it is biased *low*. For squared loss the size of the lie has a closed form, the **optimism**:

$$\mathbb E[\text{test}] - \mathbb E[\text{train}] \;=\; \frac{2}{n}\sum_{i=1}^{n} \operatorname{Cov}\big(\hat f(x_i),\, y_i\big),$$

which for a linear method fitting $d$ free parameters equals $2d\sigma^2/n$. *In words:* the more your prediction at a point is allowed to chase that point's own noise, the more flattering your training error. Example 2 checks this to the last fraction.

## Picture

![Two error curves plotted against model complexity: training error falling monotonically toward zero, test error U-shaped with its minimum marked, and a dashed horizontal line at the irreducible noise level, which the training curve drops below and the test curve never does.](assets/01-02-fig1.svg)

Read it left to right. On the left the class is too rigid: both curves are high together, and they are high *for the same reason* — the model cannot represent $f$, so it misses on data it has seen and data it has not. That is the underfitting signature: **high training error is never a variance problem.**

On the right the two curves separate. Training error keeps falling — it will go to zero and then below the noise floor, because a flexible enough model fits the noise exactly — while test error climbs. The vertical gap between the curves *is* the optimism above.

At the marked minimum, bias² and variance are close to equal (in the curves drawn here, $0.374$ against $0.379$). That is a decent rule of thumb for where the optimum sits, and it is a rule of thumb only.

One honest caveat: the U is a picture, not a theorem. Push complexity far past the interpolation point and test error can come *down* again — the double-descent phenomenon, which belongs to [`statistical-learning`](../../statistical-learning/syllabus.md) (not yet built) and gets one sentence in [4.4](04-04-a-taste-of-neural-networks.md).

## Worked examples

**Example 1 (mechanical): all three terms, exactly.**

The truth is $f(x) = x$. Every training set has exactly two points, at $x = -1$ and $x = +1$, and $y_i = x_i + \varepsilon_i$ with $\varepsilon_i$ equal to $-1$ or $+1$ with probability $1/2$ each, independently. So $\sigma^2 = 1$ and there are exactly **four** equally likely training sets:

| set | $y(-1)$ | $y(+1)$ |
|---|---|---|
| $S_1$ | $-2$ | $0$ |
| $S_2$ | $-2$ | $2$ |
| $S_3$ | $0$ | $0$ |
| $S_4$ | $0$ | $2$ |

Two procedures:

- **A (rigid):** predict the constant $\bar y$, the average of the two labels, everywhere.
- **B (flexible):** the line through the two points.

Take $S_2$, where $y(-1) = -2$ and $y(+1) = 2$. Model A predicts $\bar y = 0$ at every $x_0$. Model B fits slope $(2-(-2))/2 = 2$ and intercept $(-2+2)/2 = 0$, so it predicts $2x_0$: that is $-2$ at $x_0 = -1$, $0$ at $x_0 = 0$, $2$ at $x_0=+1$, $4$ at $x_0=+2$. Do that for all four sets and average:

| $x_0$ | model | predictions over $S_1,S_2,S_3,S_4$ | $\mathbb E\hat f$ | bias² | var | reducible |
|---|---|---|---|---|---|---|
| $-1$ | A | $-1,\ 0,\ 0,\ 1$ | $0$ | $1$ | $1/2$ | $3/2$ |
| $-1$ | B | $-2,\ -2,\ 0,\ 0$ | $-1$ | $0$ | $1$ | $1$ |
| $0$ | A | $-1,\ 0,\ 0,\ 1$ | $0$ | $0$ | $1/2$ | $1/2$ |
| $0$ | B | $-1,\ 0,\ 0,\ 1$ | $0$ | $0$ | $1/2$ | $1/2$ |
| $+1$ | A | $-1,\ 0,\ 0,\ 1$ | $0$ | $1$ | $1/2$ | $3/2$ |
| $+1$ | B | $0,\ 2,\ 0,\ 2$ | $1$ | $0$ | $1$ | $1$ |
| $+2$ | A | $-1,\ 0,\ 0,\ 1$ | $0$ | $4$ | $1/2$ | $9/2$ |
| $+2$ | B | $1,\ 4,\ 0,\ 3$ | $2$ | $0$ | $5/2$ | $5/2$ |

Every entry is exact, and the total MSE is the last column plus $\sigma^2 = 1$.

Three things to take from it.

1. **At $x_0 = \pm 1$ the flexible model wins, and you can see the trade it made.** B gives up nothing to bias and pays $1$ in variance; A buys variance down to $1/2$ and pays $1$ in bias. $1 < 3/2$, so B wins — but *narrowly*, and it is a genuine trade, not a free lunch.
2. **At $x_0 = 0$ they tie exactly**, and not by luck: model B's prediction at $0$ *is* its intercept, which is $\bar y$. The two procedures are literally the same estimator at the centre of the design, so any difference between A and B is a statement about behaviour away from the centre.
3. **At $x_0 = +2$ you are extrapolating and both degrade** — A's reducible error triples ($3/2 \to 9/2$, all of it bias), B's more than doubles ($1 \to 5/2$, all of it variance). A wrong slope costs you more the further you go, and so does an uncertain one.

**Example 2 (why you'd care): the training error lies, and by exactly how much.**

Same toy. Model B *interpolates* — it passes through both training points — so its training error is $0$ on every one of the four sets. Its actual expected error at a training location is $2$ (reducible $1$ plus $\sigma^2 = 1$, from the table). Model A's training error, averaged over the four sets, is $3/2$; its expected error at $x_0=\pm1$ is $5/2$.

| model | free parameters $d$ | $\mathbb E[\text{train}]$ | $\mathbb E[\text{test}]$ | optimism |
|---|---|---|---|---|
| A (constant) | $1$ | $3/2$ | $5/2$ | $1$ |
| B (line) | $2$ | $0$ | $2$ | $2$ |

Check against the formula $2d\sigma^2/n$ with $n = 2$ and $\sigma^2 = 1$: model A gives $2\cdot1\cdot1/2 = 1$, model B gives $2\cdot2\cdot1/2 = 2$. Both match the measured gap exactly. (Computed two ways — directly from the four training sets, and from the covariance form of the optimism — and they agree to the fraction.)

Now the point. **A model with zero training error has told you nothing.** B's perfect fit is not evidence of a good model; it is arithmetic, because two points determine a line. And the model that overfits more is the one whose training error is the bigger liar — the optimism is proportional to $d$. Comparing two models by training error therefore does not merely fail to help, it is **actively biased toward the more flexible one**. That is why [4.1](04-01-model-selection-and-cross-validation.md) exists.

## Watch out

- **You might think** bias and variance are things you can measure on your fitted model — **but actually** both are averages over training sets you did not draw. Nothing about one fit reveals its variance; the only handle you have in practice is resampling ([4.1](04-01-model-selection-and-cross-validation.md)) or reading how error moves with sample size ([4.3](04-03-diagnosing-models-in-practice.md)). "This model has high variance" is always a claim about a procedure.
- **You might think** the gap between training and test error is the overfitting signal — **but actually** every model has a gap, including badly underfitting ones. Model A above underfits at $x_0 = \pm 1$ and still shows train $3/2$ against test $5/2$. The signal is not the existence of a gap but its *size relative to the training error itself*, and a high training error rules variance out entirely.
- **You might think** more data is the universal fix — **but actually** it drives variance toward zero and leaves the other two terms exactly where they were. In this toy, averaging $m$ replicates at each design point takes model A's reducible error to $1 + 1/(2m)$, which floors at $1$ no matter how large $m$ gets. Against bias, more data is worthless; against $\sigma^2$, more data is not even the right kind of object.

## One-liner

> Test error is bias² plus variance plus noise: aim, wobble, and wind — you can trade the first two against each other, more data only shrinks the second, and nothing touches the third, so every hyperparameter in this course is the same dial and the training error is a biased witness about where to set it.

## Problems

**P1 (🟢)** Add a third procedure to Example 1: **model Z**, which ignores the data entirely and predicts $0$ at every $x_0$.

(a) Give Z's row of the table at $x_0 = -1, 0, +1, +2$: its predictions over the four training sets, $\mathbb E\hat f$, bias², and variance.
(b) Compare Z with model A at each of the four points. What do you notice, and what specific feature of this setup causes it?
(c) Z beats A everywhere and is still not the model you want. Justify that with one number from the table.

**P2 (🟡)** Three proposed fixes for a model that is performing badly. For each, name which term of the decomposition it moves and in which direction, and say which of the three fixes does anything at all about $\sigma^2$.

(a) Collect ten times as much data, same hypothesis class.
(b) Drop half the features.
(c) Replace lines with degree-9 polynomials.

Then make (a) exact. In Example 1's toy, suppose you may take $m$ independent noisy replicates at each of $x = -1$ and $x = +1$, and fit each procedure to the two group averages. Give A's and B's **reducible** error at $x_0 = +1$ as a function of $m$, and the limit of each as $m \to \infty$.

**P3 (🔴)** Model P has training MSE $0.20$ and test MSE $1.80$. Model Q has training MSE $0.90$ and test MSE $1.10$.

(a) State precisely what you can conclude and what you cannot. Give at least two things a reader would be tempted to conclude that this data does not support.
(b) Now construct the case where the higher-bias model is right. Rerun Example 1's toy with $\varepsilon \in \{-c, +c\}$, so $\sigma^2 = c^2$. Find the exact value of $\sigma^2$ at which A and B tie at $x_0 = +1$, say which one wins on each side of it, and name in one sentence what "large $\sigma^2$" corresponds to in a real dataset.

<details>
<summary>Solutions</summary>

**P1**

(a) Z's prediction is $0$ on every training set, so the "predictions over the four sets" entry is $0, 0, 0, 0$ at every $x_0$, and $\mathbb E\hat f = 0$. Bias is $0 - f(x_0) = -x_0$, so bias² $= x_0^2$; variance is $0$ because the prediction never varies.

| $x_0$ | predictions | $\mathbb E\hat f$ | bias² | var | reducible |
|---|---|---|---|---|---|
| $-1$ | $0,0,0,0$ | $0$ | $1$ | $0$ | $1$ |
| $0$ | $0,0,0,0$ | $0$ | $0$ | $0$ | $0$ |
| $+1$ | $0,0,0,0$ | $0$ | $1$ | $0$ | $1$ |
| $+2$ | $0,0,0,0$ | $0$ | $4$ | $0$ | $4$ |

This is the zero-variance extreme: all of the reducible error is bias, by construction.

(b) **Z has exactly A's bias² at every point and strictly less variance** ($0$ against $1/2$), so Z dominates A at all four test points: $1 < 3/2$, $0 < 1/2$, $1 < 3/2$, $4 < 9/2$.

The cause is visible in the table: $\mathbb E[\bar y] = 0$. Model A is spending data to estimate a constant whose true expected value is $0$ — a number Z already knew — and the entire fee is $\sigma^2/2 = 1/2$ of variance. That happens because this design is symmetric about the origin and $f(0) = 0$, so $\bar y$ is an unbiased estimator of $0$. It is a fact about **this** setup, not a general one: shift the design or the truth so that $\mathbb E[\bar y] \ne 0$ and A's estimation immediately earns its keep, because Z's fixed guess is then wrong on average too.

(c) At $x_0 = +2$, Z's bias² is $4$ against B's $0$, giving reducible errors of $4$ and $5/2$. Z is beaten by B at every point except $x_0 = 0$. Buying variance down to zero by refusing to look at the data pays for it entirely in bias — and bias is precisely the term that no amount of extra data will shrink (P2). Dominating a bad model is not the same as being a good one.

**P2**

(a) **More data → variance down.** Bias is unchanged (it is a property of the hypothesis class and the procedure, not the sample size), and $\sigma^2$ is a property of the world.
(b) **Fewer features → variance down, bias up.** You have shrunk the hypothesis class, so the procedure wobbles less and can be further from the truth on average.
(c) **Degree-9 polynomials → bias down, variance up.** A richer class, so the reverse trade.

**None of the three does anything to $\sigma^2$**, and that is not a shortcoming of the list — $\sigma^2$ is the variance of $\varepsilon$, defined before any model exists. The only thing that ever moves it is measuring a different $y$, or measuring the same $y$ better (a new instrument, a new feature that was previously part of the "noise"). Reducing $\sigma^2$ is a data-collection act, never a modelling act.

**The exact version.** With $m$ replicates at each design point, the group average $\bar y_{+1}$ has mean $1$ and variance $\sigma^2/m = 1/m$; likewise at $-1$.

- **Model B** at $x_0 = +1$ predicts the fitted line's value there, which is the group average $\bar y_{+1}$ itself. So bias² $= 0$ and variance $= 1/m$: reducible error $\boxed{1/m}$, tending to $\mathbf 0$.
- **Model A** predicts the grand average $(\bar y_{-1} + \bar y_{+1})/2$, which has mean $0$ and variance $\tfrac14(1/m + 1/m) = 1/(2m)$. Bias² $= (0 - 1)^2 = 1$. Reducible error $\boxed{1 + 1/(2m)}$, tending to $\mathbf 1$.

So at $m = 1$ the two are $1$ and $3/2$ (the table's numbers, as they must be); at $m = 10$ they are $0.1$ and $1.05$; in the limit, B's reducible error vanishes and A's floors at $1$. **Data cures variance and is powerless against bias**, and this is the whole of that sentence in arithmetic. Total MSE floors at $\sigma^2 = 1$ for B and $1 + \sigma^2 = 2$ for A.

**P3**

(a) What you *can* conclude: on this test set, Q predicts better than P ($1.10 < 1.80$), and P's train-to-test gap ($1.60$) is much larger than Q's ($0.20$), which is consistent with P being the more flexible procedure of the two.

What you cannot conclude, and would be tempted to:

- **Not "P overfits and Q does not."** Both gaps are positive and both must be — training error is optimistically biased for *every* procedure. Q's smaller gap is a difference of degree.
- **Not "Q has lower variance."** Variance is defined over resampled training sets and these are two single fits. The gap is suggestive, not a measurement; an honest answer needs the resampling of [4.1](04-01-model-selection-and-cross-validation.md).
- **Not "Q is the better model."** You are given no test-set size and no standard error, so you cannot say whether $1.10$ versus $1.80$ is a real difference or a sampling accident.
- **Nothing at all about $\sigma^2$.** Both test errors include the same irreducible floor, so the *reducible* difference could be $0.70$ out of $0.75$ or $0.70$ out of $1.75$ — a decisive win or a marginal one, and the numbers given do not distinguish them.
- And if the test set was consulted while choosing between P and Q, $1.10$ is itself an optimistic number, for the same reason training error is.

(b) With $\varepsilon \in \{-c, +c\}$ the noise is still mean zero and $\sigma^2 = c^2$; every prediction formula is unchanged, only the noise scale moves. At $x_0 = +1$:

- **Model A** predicts $\bar y = (\varepsilon_{-1} + \varepsilon_{+1})/2$, so $\mathbb E\hat f_A = 0$, bias² $= (0-1)^2 = 1$, and variance $= \tfrac14(\sigma^2 + \sigma^2) = \sigma^2/2$. Reducible error $1 + \sigma^2/2$.
- **Model B** predicts $y(+1) = 1 + \varepsilon_{+1}$, so $\mathbb E\hat f_B = 1$, bias² $= 0$, variance $= \sigma^2$. Reducible error $\sigma^2$.

They tie when $1 + \sigma^2/2 = \sigma^2$, i.e. at $\boxed{\sigma^2 = 2}$. For $\sigma^2 < 2$ the flexible line wins; for $\sigma^2 > 2$ the constant wins. Spot checks: $\sigma^2 = 1$ gives $3/2$ against $1$ (B, matching Example 1); $\sigma^2 = 4$ gives $3$ against $4$ (A); $\sigma^2 = 9$ gives $11/2$ against $9$ (A, and not close).

Notice B's error is *linear in $\sigma^2$ with slope 1* while A's has slope $1/2$: the extra parameter B estimates is estimated entirely from noise, so its cost scales with the noise while its benefit — killing a fixed bias of $1$ — does not.

**What large $\sigma^2$ means in practice:** a low signal-to-noise ratio — labels that are genuinely uncertain (human-annotated sentiment, next-quarter returns, medical outcomes) rather than nearly deterministic ones. That is why the same algorithm that should be run flexible on clean measurement data should be run heavily regularised on noisy human data, and it is the argument [1.4](01-04-regularization-ridge-and-lasso.md) formalises: deliberately adding bias to buy a larger reduction in variance.

</details>

## Connections

- **Backward:** [1.1](01-01-the-learning-problem.md) defined risk and empirical risk; this lesson explains why the second is not an estimate of the first, and puts a number on the discrepancy. The variance calculations are ordinary variance-of-an-estimator arguments from [prob-stat-refresher 2.1](../../prob-stat-refresher/lessons/02-01-expectation-variance-moments.md) — nothing here needs machinery beyond $\mathbb E$ and $\operatorname{Var}$.
- **Forward:** [1.3](01-03-linear-regression-and-least-squares.md) builds the flexible model of Example 1 properly, and [1.4](01-04-regularization-ridge-and-lasso.md) is this lesson made into a knob: ridge adds bias on purpose to buy a bigger cut in variance, and $\lambda$ is where you sit on the U. [2.6](02-06-bagging-and-random-forests.md) attacks the variance term alone by averaging, [2.7](02-07-boosting.md) attacks the bias term alone by sequencing, and [4.1](04-01-model-selection-and-cross-validation.md) and [4.3](04-03-diagnosing-models-in-practice.md) are how you find out where on the curve you are without a table of four training sets to average over.
- **Sideways:** the decomposition **as a theorem**, and the guarantees that say when the U-curve minimum can be found from data, belong to [`statistical-learning`](../../statistical-learning/syllabus.md) (not yet built; the statement is given in full above where it is used). The same $\text{bias}^2 + \text{variance}$ split is the estimator's mean-squared-error decomposition in statistics, where the shrinkage-beats-unbiasedness result is Stein's phenomenon — and it is the same trade a numerical analyst makes choosing a step size, where truncation error plays bias and rounding error plays variance.
