# Econometrics · Lesson 2.4: Heteroskedasticity and robust standard errors

> ⏱ ~15 min · Module 2: Inference and asymptotics · Builds on: [2.2 (consistency and asymptotic normality)](02-02-consistency-and-asymptotic-normality.md), [2.3 (tests and intervals)](02-03-hypothesis-tests-confidence-intervals.md) · Unlocks: 2.5 (clustered standard errors), 2.6 (the bootstrap)

## Why this matters

Homoskedasticity — the same error variance for everyone — is false in essentially every dataset economists use. Earnings scatter more widely among the highly educated. Firm growth scatters more widely among small firms. Test scores scatter more widely in large classes. Assuming it away is not a mild simplification; it is a claim about the world that the world usually contradicts.

The good news is that this is the *cheap* failure. Your point estimates survive intact — [1.4](01-04-gauss-markov-theorem.md) never used GM4 for unbiasedness and [2.2](02-02-consistency-and-asymptotic-normality.md) never used it for consistency. Only the standard errors break, and fixing them costs one line of code. The reason to understand rather than memorise the fix is that [2.5](02-05-clustered-standard-errors.md) generalises it, and that generalisation is where inference in applied work actually goes wrong.

## The idea

Go back to the sandwich from [2.2](02-02-consistency-and-asymptotic-normality.md):
$$\operatorname{Avar}(\hat\beta) = Q^{-1}\,\Omega\, Q^{-1}, \qquad Q = E[x_ix_i'], \quad \Omega = E[x_ix_i'u_i^2] .$$
The classical formula assumes $E[u_i^2\mid x_i]$ is a constant, which lets $\Omega$ collapse to $\sigma^2 Q$ and the whole thing to $\sigma^2 Q^{-1}$. Heteroskedasticity is exactly the statement that it does not collapse.

White's insight was that you never needed the collapse. $\Omega$ is an expectation of an observable-ish quantity, so estimate it the way you estimate any expectation — by an average, using squared residuals in place of the unobserved $u_i^2$:
$$\hat\Omega = \frac1n\sum_i x_ix_i'\hat e_i^2 .$$

This looks like it should not work. You are estimating $n$ different variances from $n$ observations, one each. And indeed you cannot estimate them individually. But you do not need to — you need only the $k\times k$ *average* $\Omega$, and an average of $n$ things is estimable from $n$ observations even when each thing is not.

## The formal version

> **Definition (heteroskedasticity-robust variance).** With $\hat Q = \frac1n X'X$ and $\hat\Omega = \frac1n\sum_i x_ix_i'\hat e_i^2$,
> $$\widehat{\operatorname{Var}}_{\text{HC0}}(\hat\beta) = \frac1n\hat Q^{-1}\hat\Omega\hat Q^{-1} = (X'X)^{-1}\Bigl(\sum_i \hat e_i^2\,x_ix_i'\Bigr)(X'X)^{-1} .$$

*In words:* the same bread as always, but the meat is now the actual observed spread of $x_i\hat e_i$ rather than a single assumed $\sigma^2$. These are variously called **White**, **Eicker–Huber–White**, **robust**, or **HC** standard errors.

> **Theorem (White).** Under A1–A4, $\hat\Omega\xrightarrow{p}\Omega$, so $\widehat{\operatorname{Var}}_{\text{HC0}}$ is consistent for the asymptotic variance *whether or not* the errors are homoskedastic.

Notice what is being claimed and what is not. It is **not** claimed that $\hat e_i^2$ estimates $\sigma_i^2$ — it does not, and cannot. It is claimed that the sample average of $x_ix_i'\hat e_i^2$ converges to the population average of $x_ix_i'u_i^2$, which is all the formula needs.

**Small-sample corrections.** HC0 is biased downward in finite samples, because residuals are systematically smaller than errors ($\hat e = Mu$ shrinks $u$). Standard adjustments, with $h_{ii}$ the leverage of observation $i$:

| Name | Uses in place of $\hat e_i^2$ | Comment |
|---|---|---|
| HC0 | $\hat e_i^2$ | White's original; biased down |
| HC1 | $\dfrac{n}{n-k}\hat e_i^2$ | simple degrees-of-freedom scale-up; the Stata default |
| HC2 | $\dfrac{\hat e_i^2}{1-h_{ii}}$ | exactly unbiased under homoskedasticity |
| HC3 | $\dfrac{\hat e_i^2}{(1-h_{ii})^2}$ | approximates a leave-one-out jackknife; best in small samples |

Use **HC1** by default and **HC3** when $n$ is small or a few observations have high leverage. The differences are negligible past a few hundred observations and can be substantial below that.

**Testing for heteroskedasticity.** The Breusch–Pagan test regresses $\hat e_i^2$ on the regressors and tests joint significance; White's test adds squares and cross-products. Both work. Both are also largely beside the point — the modern default is simply to use robust standard errors always, since they are correct either way and the cost of the insurance is one line and a slight efficiency loss.

**A caution about direction.** It is folklore that classical standard errors are "too small". They are not always. The sandwich can be larger or smaller than $\sigma^2(X'X)^{-1}$ depending on whether the high-variance observations sit at high or low leverage. Robust errors are usually larger in practice because the two tend to coincide (extreme $x$ often comes with extreme noise), but it is a tendency, not a theorem.

## Picture

![On the left a fan-shaped scatter with growing vertical spread and an unbiased fitted line through it; on the right three horizontal confidence intervals for the same slope of increasing width labelled classical, White HC1 and cluster CR1, with only the widest covering the true value](assets/02-04-fig1.svg)

The left panel is the disease: variance grows with $x$, and the fitted line is nonetheless fine. The right panel is the cost of ignoring it, computed on a real simulated dataset — the same coefficient $\hat\beta_1 = 1.375$, three standard errors, three verdicts. The classical interval confidently excludes the true value of $1.0$. The cluster interval, which [2.5](02-05-clustered-standard-errors.md) explains, is the only one that covers it.

## Worked examples

**Example 1 (mechanical): computing HC0 by hand in the bivariate case.** With a single regressor and no constant, $\hat\beta = \sum x_iy_i/\sum x_i^2$, and the general formula reduces to
$$\widehat{\operatorname{Var}}_{\text{HC0}}(\hat\beta) = \frac{\sum_i x_i^2\hat e_i^2}{\bigl(\sum_i x_i^2\bigr)^2} \qquad\text{versus}\qquad \widehat{\operatorname{Var}}_{\text{classical}}(\hat\beta) = \frac{s^2}{\sum_i x_i^2} = \frac{\sum_i \hat e_i^2}{(n-1)\sum_i x_i^2}.$$
Take four observations with $x = (1,2,3,4)$ and residuals $\hat e = (0.5,-1.0,1.5,-2.0)$. Then $\sum x_i^2 = 30$, $\sum \hat e_i^2 = 0.25+1+2.25+4 = 7.5$, and
$$\sum_i x_i^2\hat e_i^2 = 1(0.25)+4(1)+9(2.25)+16(4) = 0.25+4+20.25+64 = 88.5 .$$
So
$$\widehat{\operatorname{Var}}_{\text{HC0}} = \frac{88.5}{900} = 0.098333, \qquad \widehat{\operatorname{Var}}_{\text{classical}} = \frac{7.5}{3(30)} = 0.083333 .$$
Standard errors $0.3136$ versus $0.2887$ — robust is 8.6 percent larger here, because the big residuals sit at the big $x$ values. Reverse the residual order to $\hat e = (-2.0, 1.5, -1.0, 0.5)$ and $\sum x_i^2\hat e_i^2 = 4+9+9+4 = 26$, giving $\widehat{\operatorname{Var}}_{\text{HC0}} = 0.028889$ — now *smaller* than classical. That is the direction caveat, made concrete.

**Example 2 (why you'd care): the running dataset.** Simulate $n=600$ observations in $G=20$ groups of $30$, with $y_i = 0.5 + x_i + e_i$ where the error contains both a group-level shock and idiosyncratic noise whose spread grows with $|x_i|$. The true slope is $1.0$, and OLS returns $\hat\beta_1 = 1.3747$.

| Variance estimator | $\mathrm{se}(\hat\beta_1)$ | 95% interval | Covers $\beta_1=1$? |
|---|---|---|---|
| Classical | $0.0750$ | $[1.228,\ 1.522]$ | **No** |
| White HC1 | $0.1107$ | $[1.158,\ 1.592]$ | **No** |
| Cluster CR1 | $0.2877$ | $[0.811,\ 1.939]$ | Yes |

Two things to read off. First, the robust correction is real but not enough: it inflates the standard error by a factor of $1.48$, and still produces an interval that confidently excludes the truth. Second, the remaining factor of $2.6$ comes from something White's formula does not address at all — the *group* structure. HC standard errors fix non-constant variance but assume observations are independent, and here they are not.

That gap is the entire subject of [2.5](02-05-clustered-standard-errors.md), and it is worth internalising the ordering: robust standard errors are necessary, routine, and frequently insufficient.

## Watch out

- **You might think** you should test for heteroskedasticity and use robust errors only if you reject — **but actually** this is a pre-test procedure that distorts the size of your eventual test, and it buys nothing: robust errors are valid under homoskedasticity too, costing only a little efficiency. Just use them.
- **You might think** robust standard errors fix a biased coefficient — **but actually** they fix nothing about $\hat\beta$. If the regressor is endogenous, robust errors give you a correctly-measured interval around the wrong number. The word "robust" is doing less work than it sounds like; it means robust to a *variance* assumption, not to a *mean* assumption.
- **You might think** heteroskedasticity means you should use weighted least squares — **but actually** WLS ([1.6](01-06-functional-form-logs-interactions.md)'s flashback) is more efficient only if you model the variance function correctly, and gets you a *different estimand* if the model is misspecified in the mean. Modern practice keeps OLS and fixes the standard errors, precisely because that separates the two questions.

## One-liner

> Heteroskedasticity breaks the collapse of the sandwich, not the estimator — so estimate the meat $E[x_ix_i'u_i^2]$ with squared residuals instead of assuming it away, and remember the fix says nothing about independence across observations.

## Problems

**P1 (🟢)** With five observations, $x = (2,-1,3,-2,1)$ (single regressor, no constant) and residuals $\hat e = (1,2,-1,1,-3)$, compute the classical and HC0 standard errors of $\hat\beta$. Which is larger, and can you say why from the pattern of the numbers?

**P2 (🟡)** Show that if $E[u_i^2\mid x_i]=\sigma^2$, the HC0 estimator converges to the same limit as the classical one, so robust standard errors are valid (not merely conservative) under homoskedasticity. Then explain the efficiency cost of using them anyway.

**P3 (🔴, optional)** Explain why $\hat e_i^2$ is a poor estimator of $\sigma_i^2$ for any single $i$, yet $\frac1n\sum_i x_ix_i'\hat e_i^2$ is a good estimator of $E[x_ix_i'u_i^2]$. Then use $E[\hat e_i^2] = (1-h_{ii})\sigma^2$ under homoskedasticity to justify the HC2 correction.

<details>
<summary>Solutions</summary>

**P1** First the ingredients: $\sum_i x_i^2 = 4+1+9+4+1 = 19$ and $\sum_i\hat e_i^2 = 1+4+1+1+9 = 16$. With $k=1$, the classical variance uses $s^2 = \sum\hat e_i^2/(n-k) = 16/4 = 4$:
$$\widehat{\operatorname{Var}}_{\text{classical}} = \frac{s^2}{\sum x_i^2} = \frac{4}{19} = 0.210526, \qquad \mathrm{se} = 0.458832 .$$
For HC0,
$$\sum_i x_i^2\hat e_i^2 = 4(1) + 1(4) + 9(1) + 4(1) + 1(9) = 4+4+9+4+9 = 30 ,$$
$$\widehat{\operatorname{Var}}_{\text{HC0}} = \frac{30}{19^2} = \frac{30}{361} = 0.083102, \qquad \mathrm{se} = 0.288274 .$$

**Classical is larger** here (0.4588 against 0.2883). Reading it off the numbers: the largest residual in absolute value, $\hat e_5 = -3$, sits at the *smallest* $x_5^2 = 1$, while the observation with the largest $x^2 = 9$ has the small residual $\hat e_3 = -1$. So the noise is concentrated where the regressor carries little weight, and the honest variance is smaller than the classical formula's assumption of uniform noise. This is exactly the case that falsifies "robust errors are always bigger" — and note the HC0 downward bias makes it worse, which is why HC1 ($\times\, n/(n-k) = 5/4$) would give $\mathrm{se} = 0.322$ instead.

**P2** *Consistency under homoskedasticity.* By the LLN applied to the i.i.d. terms $x_ix_i'\hat e_i^2$ (with $\hat e_i \to u_i$ since $\hat\beta\xrightarrow{p}\beta$),
$$\hat\Omega = \frac1n\sum_i x_ix_i'\hat e_i^2 \ \xrightarrow{p}\ E[x_ix_i'u_i^2] = E\bigl[x_ix_i'E[u_i^2\mid x_i]\bigr] = \sigma^2 E[x_ix_i'] = \sigma^2 Q ,$$
using the law of iterated expectations at the third step and homoskedasticity at the fourth. Meanwhile $\hat Q\xrightarrow{p}Q$. So
$$\hat Q^{-1}\hat\Omega\hat Q^{-1} \ \xrightarrow{p}\ Q^{-1}\sigma^2 Q Q^{-1} = \sigma^2 Q^{-1} ,$$
which is exactly the limit of the classical estimator $s^2\hat Q^{-1}$. Both are consistent for the same thing, so robust standard errors are **valid**, not conservative — they are not systematically too big; they converge to the right answer.

*The efficiency cost.* The two estimators have the same probability limit but different sampling variability. The classical estimator pools information: it uses all $n$ residuals to estimate one number $\sigma^2$. The robust estimator estimates a $k\times k$ matrix from the same data without imposing that structure, so $\hat\Omega$ is noisier than $s^2\hat Q$ when homoskedasticity actually holds. Practically this means robust standard errors are themselves more variable, so tests based on them have slightly worse size in small samples — the true rejection rate of a nominal 5 percent robust $t$-test can be 6–8 percent at $n=50$. That is the price of the insurance, it shrinks quickly with $n$, and it is almost always worth paying.

**P3** *Why $\hat e_i^2$ is a poor estimator of $\sigma_i^2$.* You have exactly one observation informative about $\sigma_i^2$, and $\hat e_i^2$ is a single squared draw. Even if $\hat e_i$ were exactly $u_i$, the estimator $u_i^2$ of $\sigma_i^2$ has variance $E[u_i^4]-\sigma_i^4$, which for normal errors is $2\sigma_i^4$ — a relative standard deviation of $\sqrt2$, over 140 percent. It does not shrink with $n$, because more observations do not give you more information about *this* observation's variance. The estimator is consistent for nothing.

*Why the average works anyway.* The target is not $n$ separate numbers but the single $k\times k$ matrix $\Omega = E[x_ix_i'u_i^2]$. The sample average $\frac1n\sum_i x_ix_i'\hat e_i^2$ is an average of $n$ i.i.d. terms, so the LLN applies and its sampling variability shrinks at rate $1/\sqrt n$ — the individual noise averages out. The general principle: **averages of bad estimators can be good estimators of averages.** Nothing in the sandwich formula ever requires knowing an individual $\sigma_i^2$.

*Justifying HC2.* Under homoskedasticity, $\hat e = Mu$ gives
$$E[\hat e_i^2] = E[(e_i'Mu)^2] = \sigma^2 (MM')_{ii} = \sigma^2 M_{ii} = \sigma^2(1-h_{ii}) ,$$
using symmetry and idempotency of $M$ and $M = I - H$. So each squared residual is biased *downward* by the factor $1-h_{ii}$ — high-leverage observations are fitted too well, and their residuals understate the true error. The correction is immediate: define
$$\tilde e_i^2 = \frac{\hat e_i^2}{1-h_{ii}} \qquad\Longrightarrow\qquad E[\tilde e_i^2] = \sigma^2 ,$$
so HC2 replaces $\hat e_i^2$ by $\tilde e_i^2$ and is **exactly unbiased under homoskedasticity** (and approximately so otherwise). HC3 squares the correction, $\hat e_i^2/(1-h_{ii})^2$, which over-corrects on purpose: it approximates the jackknife leave-one-out residual, is conservative, and performs best in the small-sample simulations. The practical rule of thumb: with $\max_i h_{ii}$ below about $2k/n$ the corrections barely matter; with one observation at $h_{ii}=0.5$, HC0 can understate that term's contribution by a factor of two.

</details>

## Flashback

**From Lesson 2.2 (consistency and the CLT for estimators):** An estimator satisfies $\sqrt n(\hat\theta - \theta)\xrightarrow{d}\mathcal N(0, 9)$ and you report $\hat\phi = \log\hat\theta$ with $\hat\theta = 3.0$ from $n = 400$. Give the asymptotic distribution of $\hat\phi$, its standard error, and a 95 percent interval for $\phi$. Then state one situation in which you should distrust this interval.

<details>
<summary>Solution</summary>

*Standard error of $\hat\theta$.* From $\sqrt n(\hat\theta-\theta)\xrightarrow{d}\mathcal N(0,9)$, the approximate variance of $\hat\theta$ is $9/n = 9/400 = 0.0225$, so $\mathrm{se}(\hat\theta) = 0.15$.

*Delta method.* With $g(\theta)=\log\theta$ and $g'(\theta) = 1/\theta$, evaluated at $\hat\theta = 3.0$ we get $g'= 1/3$. So
$$\sqrt n(\hat\phi - \phi) \ \xrightarrow{d}\ \mathcal N\Bigl(0,\ \tfrac{1}{\theta^2}\cdot 9\Bigr) = \mathcal N(0,\ 1) \quad\text{at } \theta = 3 ,$$
and $\mathrm{se}(\hat\phi) = |g'|\cdot\mathrm{se}(\hat\theta) = \tfrac13(0.15) = 0.05$. Equivalently $\sqrt{1/400} = 0.05$. $\checkmark$

*Point estimate and interval.* $\hat\phi = \log 3.0 = 1.098612$, so
$$1.098612 \pm 1.96(0.05) = 1.098612\pm 0.098 = [1.000612,\ 1.196612] .$$
(Exponentiating gives $[2.720, 3.308]$ for $\theta$ itself, against the direct interval $3.0\pm 1.96(0.15) = [2.706, 3.294]$ — close, since $\log$ is nearly linear over this narrow range.)

*When to distrust it.* The delta method needs $g$ to be well approximated by its tangent line over the region where $\hat\theta$ plausibly lands, and it needs $g'(\theta)\neq 0$. Both can fail:

1. **$\hat\theta$ near a singularity of $g$.** Here $g'=1/\theta$ blows up as $\theta\to 0$. If instead $\hat\theta = 0.30$ with the same $\mathrm{se}=0.15$, the interval for $\theta$ would be $[0.006, 0.594]$ — nearly touching zero, where $\log$ is unbounded. The linearisation is worthless there, the interval for $\log\theta$ would be wildly asymmetric in truth, and the delta method would report a tidy symmetric one anyway. (This is the same failure as the $1/\hat\beta$ example in [2.2](02-02-consistency-and-asymptotic-normality.md) P1.)
2. **$g'(\theta)=0$.** If the derivative vanishes at the true value, the first-order term is zero and the limiting distribution is not normal at all — it is a scaled chi-square from the second-order term. Reporting a normal interval there is simply wrong.

The practical habit: when $g$ is monotone, transform the interval endpoints rather than the standard error, and when the coefficient's own interval comes close to a point where $g$ misbehaves, say so instead of reporting a number.

</details>

## Connections

- **Backward:** this estimates the $\Omega$ that [2.2](02-02-consistency-and-asymptotic-normality.md) defined and [1.4](01-04-gauss-markov-theorem.md) assumed away. The leverage $h_{ii}$ in the HC2/HC3 corrections is the diagonal of the hat matrix from [1.3](01-03-ols-algebra-geometry-projection.md), and $\sum_i h_{ii}=k$ is why average leverage is $k/n$.
- **Forward:** [2.5](02-05-clustered-standard-errors.md) keeps the bread and enlarges the meat to allow correlation *within groups* — the same formula with sums taken over clusters instead of observations. [2.6](02-06-bootstrap-and-few-clusters.md) handles the case where even that is not enough. All of them plug into [2.3](02-03-hypothesis-tests-confidence-intervals.md)'s Wald statistic unchanged.
- **Sideways:** heteroskedasticity is guaranteed rather than incidental for binary outcomes, since a Bernoulli variable's variance $p(1-p)$ moves with its mean. That is why the linear probability model of [5.3](05-03-logit-and-probit.md) *must* use robust standard errors — there, homoskedasticity is not merely doubtful but impossible.
