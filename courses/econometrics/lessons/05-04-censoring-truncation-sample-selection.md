# Econometrics · Lesson 5.4: Censoring, truncation, and sample selection

> ⏱ ~15 min · Module 5: Estimation principles and extensions · Builds on: [5.3 (logit and probit)](05-03-logit-and-probit.md), [3.3 (regression anatomy)](03-03-regression-anatomy-good-and-bad-controls.md) · Unlocks: 5.5 (a taste of time series)

## Why this matters

[5.3](05-03-logit-and-probit.md) handled outcomes you can only see as zero or one. This lesson handles outcomes you can only see *sometimes*, or only *partly* — which covers a surprising amount of real data.

Hours worked are zero for everyone not employed. Charitable donations are zero for most people. Wages are observed only for those who chose to work. Insurance claims are recorded only above a deductible. In every case, running OLS on what you see gives a biased answer, and the bias has a known direction and a known mechanism.

The deeper point, which connects back to Module 3: **sample selection is collider bias**. If who appears in your sample depends on the outcome, conditioning on being in the sample opens exactly the path [3.3](03-03-regression-anatomy-good-and-bad-controls.md) warned about. That is why this material belongs in an econometrics course rather than a statistics appendix.

## The idea

Three situations that look similar and are not.

**Censoring.** The latent outcome exists for everyone, but you only observe it above (or below) a limit. Someone who would have worked $-8$ hours if that were possible works $0$; the zero is real data recorded at a corner. You see the regressors for everyone.

**Truncation.** Units below the limit are absent from the dataset entirely. A survey of donors contains no non-donors, so you do not even know how many there are or what they look like.

**Selection.** A *separate* process determines who is observed. Wages exist only for people who chose to work, and that choice depends on the wage they were offered — so the selection rule and the outcome share unobservables.

In all three, OLS on the observed data is inconsistent, and in the first two the direction is toward zero. Each has its own correction, and applying the wrong one is worse than doing nothing.

The common machinery is the **inverse Mills ratio** — the expected value of a normal error given that it exceeded a threshold. It is what converts "the observed sample is a truncated version of the population" into a term you can put on the right-hand side of a regression.

## The formal version

### Censoring (the Tobit model)

> **Tobit.** $y_i^* = x_i'\beta + \varepsilon_i$ with $\varepsilon_i\sim\mathcal N(0,\sigma^2)$, and $y_i = \max(0, y_i^*)$.

You observe $y_i$ and $x_i$ for **everyone**; the latent $y^*_i$ is hidden only where it is negative.

*Why OLS fails.* Conditional on $x$, the observed mean is
$$E[y\mid x] = \Phi\!\left(\frac{x'\beta}{\sigma}\right)x'\beta + \sigma\,\phi\!\left(\frac{x'\beta}{\sigma}\right) ,$$
a nonlinear function of $x'\beta$ — not $x'\beta$ itself. OLS on the censored $y$ estimates the slope of *that* function, which is flatter, so the coefficient is **attenuated toward zero**. The rough rule is that OLS recovers about $\Phi(x'\beta/\sigma)\cdot\beta$ — scaled down by the uncensored fraction. With 40 percent of observations at zero, expect roughly a 40 percent understatement.

*The fix.* Maximum likelihood on the correct likelihood, which mixes a discrete mass at zero with a continuous density above it:
$$\ell = \sum_{y_i=0}\log\left[1-\Phi\!\left(\frac{x_i'\beta}{\sigma}\right)\right] + \sum_{y_i>0}\log\left[\frac1\sigma\phi\!\left(\frac{y_i-x_i'\beta}{\sigma}\right)\right] .$$

*Three marginal effects, and you must say which.* In Tobit, $\beta_j$ is the effect on the **latent** variable, which is often not the quantity of interest:
$$\frac{\partial E[y^*\mid x]}{\partial x_j} = \beta_j, \qquad \frac{\partial E[y\mid x]}{\partial x_j} = \Phi\!\left(\frac{x'\beta}{\sigma}\right)\beta_j, \qquad \frac{\partial E[y\mid x, y>0]}{\partial x_j} = \beta_j\Bigl[1-\lambda(c)\bigl(\lambda(c)-c\bigr)\Bigr] ,$$
with $c = x'\beta/\sigma$ and $\lambda$ the inverse Mills ratio below. The second — the effect on the observed unconditional mean — is usually what a policy question wants.

*Tobit's fragility.* The model forces **one** parameter vector to govern both whether $y$ is positive and how large it is. If the decision to donate and the amount donated respond differently to income, Tobit is misspecified — and unlike OLS, a misspecified Tobit is inconsistent for everything, because MLE inherits its distributional assumption ([5.1](05-01-maximum-likelihood-estimation.md)). Tobit is also not robust to non-normality or heteroskedasticity. **Two-part models** (a probit for participation, then a regression on positives) relax the single-index restriction and are usually preferable.

### Truncation

Units with $y^*\le 0$ are absent. Now even the fraction censored is unknown.

> **Inverse Mills ratio.** For $Z\sim\mathcal N(0,1)$, $E[Z\mid Z>c] = \dfrac{\phi(c)}{1-\Phi(c)} \equiv \lambda(c)$.

| $c$ | $\lambda(c) = E[Z\mid Z>c]$ |
|---|---|
| $-1$ | $0.2876$ |
| $0$ | $0.7979$ |
| $+1$ | $1.5251$ |

*In words:* conditioning on a normal exceeding a threshold raises its mean, by more the higher the threshold. That upward shift is exactly what contaminates a truncated regression, and the truncated-sample slope is $\beta_j[1-\lambda(c)(\lambda(c)-c)]$, with the bracket strictly between 0 and 1 — attenuation again.

### Sample selection (the Heckman model)

> **Selection model.** Outcome: $y_i = x_i'\beta + u_i$, observed only when the selection equation $d_i^* = z_i'\gamma + v_i > 0$. Errors $(u,v)$ are jointly normal with correlation $\rho$.

The key quantity is
$$E[y_i\mid x_i,\ d_i=1] = x_i'\beta + \rho\sigma_u\,\lambda(-z_i'\gamma) .$$

*In words:* regressing $y$ on $x$ in the selected sample omits the term $\rho\sigma_u\lambda(\cdot)$. **The bias is omitted-variable bias** ([3.4](03-04-omitted-variable-bias.md)) with the inverse Mills ratio as the omitted variable — so it vanishes exactly when $\rho = 0$, i.e. when selection is unrelated to the outcome's unobservables.

> **Heckman two-step.** (1) Probit of $d_i$ on $z_i$; compute $\hat\lambda_i = \lambda(-z_i'\hat\gamma)$. (2) Regress $y_i$ on $x_i$ and $\hat\lambda_i$ in the selected sample. The coefficient on $\hat\lambda_i$ estimates $\rho\sigma_u$, so testing it against zero is a **test for selection bias**.

**The exclusion restriction is essential.** Formally the model is identified without one, purely through $\lambda$'s nonlinearity — but $\lambda$ is close to linear over much of its range, so identification-by-functional-form is fragile and produces wildly unstable estimates. You need a variable in $z$ but **not** in $x$: something affecting the probability of being observed but not the outcome. This is exactly [3.6](03-06-instrumental-variables.md)'s exclusion restriction, with the same status — an argument, not a statistic. Classic choices are the number of young children or non-labour income in a wage equation, and both have been challenged on the grounds that they plausibly affect wages directly.

Standard errors from step 2 are wrong, since $\hat\lambda$ is estimated; use the analytic correction or a bootstrap.

## Picture

![A scatter with a dashed blue line through the latent values and a flatter coral line fitted to the censored data, where points below zero are shown faintly and their recorded values sit stacked on the horizontal axis, beside a panel distinguishing censored, truncated and selected samples](assets/05-04-fig1.svg)

The faint grey points are latent values you never see; the coral points on the axis are what gets recorded. Piling the negative values at zero flattens the fitted line — that is attenuation, visible directly. The right panel is the classification that decides which correction applies, and getting it wrong is the most common error in this area.

## Worked examples

**Example 1 (mechanical): the inverse Mills ratio and truncation attenuation.** A wage equation is estimated on workers earning above a reporting threshold, corresponding to a standardised cutoff $c = 1$ in the error distribution.

The inverse Mills ratio is
$$\lambda(1) = \frac{\phi(1)}{1-\Phi(1)} = \frac{0.241971}{0.158655} = 1.525135 .$$

The truncated-regression slope is $\beta$ times
$$1 - \lambda(c)\bigl(\lambda(c)-c\bigr) = 1 - 1.525135(1.525135-1) = 1 - 1.525135(0.525135) = 1 - 0.800902 = 0.199098 .$$

**The observed slope is only 20 percent of the truth** — an 80 percent attenuation. Truncating at a threshold one standard deviation into the distribution destroys four-fifths of the coefficient.

Compare with a milder cutoff, $c=-1$ (truncating only the bottom tail): $\lambda(-1)=0.287600$, and the factor is $1-0.2876(0.2876+1) = 1-0.370 = 0.630$ — still a 37 percent attenuation. **Truncation bias is severe even when little is truncated**, which is the reason a truncated regression should never be run by OLS.

**Example 2 (why you'd care): the female wage equation, and why the correction is contested.** The canonical application. You want the return to education for women, but wages are observed only for women who work — perhaps 60 percent of the sample.

*The selection problem.* Women work when their offered wage exceeds their reservation wage. Two mechanisms with opposite signs:

- A woman with high *unobserved* productivity gets a high offer and is more likely to work, so the observed sample is positively selected on unobservables. Then $\rho > 0$, the omitted $\lambda$ term is positive and correlated with the regressors, and OLS on workers is biased.
- But education raises the participation probability too, so among the *less* educated only the unusually productive work — which compresses the observed education-wage gradient and biases the return **downward**.

The net direction is not determined by theory, which is precisely why a correction is wanted rather than a sign argument.

*The Heckman procedure.* Estimate a probit of working on education, experience, non-labour income and number of young children; compute $\hat\lambda_i$; regress log wage on education, experience and $\hat\lambda_i$ among workers. The coefficient on $\hat\lambda_i$ estimates $\rho\sigma_u$; a significant value is evidence of selection.

*Why it is contested, and this is the useful part.* The whole thing rests on the exclusion restriction — that young children and non-labour income affect participation but **not** the wage offer. Both are attackable. Having young children may reduce accumulated experience and employer perceptions of commitment, affecting the offered wage directly. Non-labour income correlates with family background and hence with unobserved skill.

If the exclusion restriction fails, the Heckman correction is **worse than doing nothing**: $\hat\lambda_i$ is then a near-linear function of the same regressors already in the outcome equation, the model is identified only by $\lambda$'s mild curvature, and estimates become extremely unstable — coefficients swinging by factors of several across specifications, with standard errors to match.

The modern practice is honest about this. Report OLS on the selected sample *and* the Heckman estimate; state the exclusion restriction explicitly and defend it; show sensitivity to dropping it. And note that a *bounds* approach — Manski-style, as in [3.1](03-01-potential-outcomes-identification.md) P3 — is often more informative than a point estimate resting on an indefensible exclusion. **A wide honest bound beats a precise estimate whose identifying assumption nobody believes.**

## Watch out

- **You might think** censoring and truncation are the same problem — **but actually** censoring keeps the units (with $y$ recorded at the limit) while truncation deletes them, and they need different likelihoods. Applying a Tobit to truncated data, or a truncated regression to censored data, is a real and common error.
- **You might think** a zero outcome always means censoring — **but actually** many zeros are genuine corner solutions, not censored latent negatives. Nobody wants $-5$ cigarettes; a non-smoker's true consumption is zero. Tobit's latent-variable story is a *modelling choice* that must be argued for, and where it is implausible, a two-part model is both more flexible and more honest.
- **You might think** the Heckman correction is a free fix — **but actually** without a credible exclusion restriction it can be far less reliable than uncorrected OLS, since identification then rests entirely on the functional form of $\lambda$. Always report both, and always state what is excluded and why.

## One-liner

> Censoring records the outcome at a limit, truncation deletes the unit, and selection lets a separate rule decide who is seen — all three attenuate OLS, all three are corrected with the inverse Mills ratio, and the correction for the third is only as good as an exclusion restriction you must argue for.

## Problems

**P1 (🟢)** A Tobit model has $x'\beta/\sigma = 0.5$ at the sample mean and $\hat\beta_j = 2.4$. Compute the marginal effect on the latent variable and on the observed unconditional mean. What fraction of observations would you expect to be at the censoring point?

**P2 (🟡)** Compute the inverse Mills ratio at $c = -0.5, 0, 0.5$ and the corresponding truncation attenuation factors $1-\lambda(c)(\lambda(c)-c)$. Describe the pattern and explain what it implies about how much truncation you can tolerate.

**P3 (🔴, optional)** Show that sample selection is a form of omitted-variable bias, identify the omitted variable precisely, and state the condition under which OLS on the selected sample is consistent. Then explain why the Heckman correction needs an exclusion restriction even though the model is technically identified without one.

<details>
<summary>Solutions</summary>

**P1** *Latent marginal effect.* By definition $\partial E[y^*\mid x]/\partial x_j = \beta_j = \mathbf{2.4}$. This is the effect on the *unobserved* latent variable — desired hours, willingness to donate — and is rarely the policy-relevant quantity.

*Observed unconditional marginal effect.* Scale by $\Phi(x'\beta/\sigma)$:
$$\frac{\partial E[y\mid x]}{\partial x_j} = \Phi(0.5)\times 2.4 = 0.691462\times 2.4 = 1.6595 .$$
So the effect on the actually-observed outcome is about **1.66**, or 69 percent of the latent coefficient. Reporting $2.4$ as "the effect" would overstate it by 45 percent.

*Fraction at the censoring point.* An observation is censored when $y^* \le 0$, i.e. when $\varepsilon/\sigma \le -x'\beta/\sigma = -0.5$:
$$P(y = 0\mid x) = 1-\Phi(0.5) = \Phi(-0.5) = 0.308538 \approx \mathbf{31\%} .$$

Note the tidy relationship: the scaling factor on the marginal effect, $\Phi(0.5)=0.691$, is exactly the *uncensored* fraction. That is the rule of thumb from the lesson — OLS on censored data attenuates roughly by the share of observations at the limit — arriving as an exact statement about the Tobit marginal effect.

**P2** The inverse Mills ratio is $\lambda(c) = \phi(c)/(1-\Phi(c))$, and the attenuation factor is $1-\lambda(c)(\lambda(c)-c)$:

| $c$ | $\phi(c)$ | $1-\Phi(c)$ | $\lambda(c)$ | $\lambda(c)-c$ | attenuation factor |
|---|---|---|---|---|---|
| $-0.5$ | $0.352065$ | $0.691462$ | $0.509160$ | $1.009160$ | $0.486175$ |
| $0$ | $0.398942$ | $0.500000$ | $0.797885$ | $0.797885$ | $0.363380$ |
| $0.5$ | $0.352065$ | $0.308538$ | $1.141078$ | $0.641078$ | $0.268480$ |

*The pattern.* The attenuation factor falls steadily as the truncation point rises: from $0.486$ at $c=-0.5$ to $0.268$ at $c=+0.5$. Truncating higher into the distribution keeps a smaller, more homogeneous slice, and less variation in the error means less of the true relationship survives.

The striking feature is the **level**, not just the trend. Even at $c=-0.5$ — where about 69 percent of the distribution is retained, so only a modest bottom tail is removed — the observed slope is under half the truth. At $c=0$ (half the sample retained) it is 36 percent, and by $c=0.5$ (31 percent retained) it is 27 percent.

*What it implies.* **Almost no truncation is tolerable.** Unlike heteroskedasticity, which leaves point estimates alone, or clustering, which affects only standard errors, truncation attacks the coefficient itself and does so aggressively. Dropping "just the bottom 30 percent" of observations — which sounds like a modest sample restriction and is often done casually, to remove implausible values or focus on a subpopulation — already halves the coefficient if the restriction is on the *outcome*.

The operative distinction: truncating on the **regressor** is harmless (it changes the estimand's weighting, as in [1.2](01-02-best-linear-predictor.md), but the conditional relationship is unaffected). Truncating on the **outcome** is what does the damage, because it conditions on the error. Any sample restriction should be checked against that test, and it is the same test as [3.3](03-03-regression-anatomy-good-and-bad-controls.md)'s collider rule.

**P3** *Selection as omitted-variable bias.* In the selected sample, take the expectation of the outcome equation conditional on being observed:
$$E[y_i\mid x_i, d_i = 1] = x_i'\beta + E[u_i\mid x_i,\ v_i > -z_i'\gamma] .$$
With $(u,v)$ jointly normal, correlation $\rho$, and $v$ standardised, the conditional mean of $u$ given a truncated normal $v$ is
$$E[u_i\mid v_i > -z_i'\gamma] = \rho\sigma_u\,E[v_i\mid v_i>-z_i'\gamma] = \rho\sigma_u\,\lambda(-z_i'\gamma) ,$$
using the inverse Mills ratio. Hence
$$E[y_i\mid x_i, d_i=1] = x_i'\beta + \rho\sigma_u\lambda(-z_i'\gamma) .$$

**The omitted variable is $\lambda(-z_i'\gamma)$, the inverse Mills ratio, entering with coefficient $\rho\sigma_u$.** Regressing $y$ on $x$ alone in the selected sample omits it, and by [3.4](03-04-omitted-variable-bias.md)'s formula the bias is
$$\text{bias} = \rho\sigma_u \cdot \pi_\lambda , \qquad \pi_\lambda = \frac{\operatorname{Cov}(x_j,\lambda)}{\operatorname{Var}(x_j)} \ \text{(in the selected sample)} ,$$
the product of "how much the omitted variable matters" ($\rho\sigma_u$) and "how much it moves with the regressor" ($\pi_\lambda$) — the same two factors as always.

*Condition for OLS consistency.* The bias vanishes if either factor is zero:

1. **$\rho = 0$**: the unobservables driving selection are uncorrelated with those driving the outcome. Then selection is "on observables" and conditioning on $x$ suffices — this is [3.2](03-02-selection-on-observables-propensity-score.md)'s CIA in a different costume.
2. **$\pi_\lambda = 0$**: $\lambda$ is uncorrelated with the regressors in the selected sample. Since $\lambda$ is a function of $z'\gamma$, this holds if $z$ and $x$ share nothing — but $x$ is usually a subset of $z$, so this essentially never holds in practice.

So the operative condition is **$\rho = 0$**, and that is exactly what the $t$-test on $\hat\lambda$ in the Heckman second step is testing.

*Why an exclusion restriction is needed despite technical identification.* Suppose $z = x$ — every variable in the selection equation also appears in the outcome equation. The second-stage regression is
$$y_i = x_i'\beta + \theta\,\lambda(-x_i'\hat\gamma) + \text{error} ,$$
so the "extra" regressor $\lambda(-x_i'\hat\gamma)$ is a **deterministic function of the regressors already present**. Identification of $\theta$ therefore rests entirely on $\lambda$ being *nonlinear* — if $\lambda$ were exactly linear in its argument, $\lambda(-x'\hat\gamma)$ would be a linear combination of the columns of $x$, and the design matrix would be perfectly collinear with nothing identified at all.

The problem is that **$\lambda$ is nearly linear over much of its range.** Over $c\in[-1,1]$, which covers most of a typical selection probability range, $\lambda$ is close to a straight line — so the second-stage design matrix is near-collinear. That is [1.5](01-05-goodness-of-fit-interpretation.md)'s multicollinearity in its most severe form: technically identified, practically hopeless. The symptoms are the familiar ones — enormous standard errors on both $\hat\theta$ and $\hat\beta$, and estimates that swing wildly with small specification changes, including which functional form the first-stage probit uses.

An **exclusion restriction** — a variable in $z$ but not in $x$ — breaks the collinearity properly. Then $\lambda$ varies across observations for reasons unrelated to $x$, and $\theta$ is identified by genuine independent variation rather than by curvature. This is structurally identical to [3.6](03-06-instrumental-variables.md)'s relevance requirement, and it carries the same warning from [3.8](03-08-weak-instruments-and-late.md): a *weak* excluded variable leaves you near-collinear anyway, so the exclusion restriction must be both valid and strong. Reporting the first-stage probit's coefficient on the excluded variable is the analogue of reporting a first-stage $F$, and it should be standard practice.

</details>

## Flashback

**From Lesson 5.3 (limited dependent variables — logit and probit):** A probit reports $\hat\beta = 0.6$ on a binary treatment dummy. The average fitted probability in the sample is $0.25$. Estimate the average partial effect two ways — with the Amemiya rule of thumb, and by the correct discrete difference — and say which you would report and why.

<details>
<summary>Solution</summary>

*Amemiya rule of thumb.* For probit, APE $\approx 0.4\hat\beta$:
$$0.4\times 0.6 = 0.24 .$$

*Why that is wrong here.* The rule uses $\phi(0)=0.399$, the density at an index of zero, which corresponds to a fitted probability of $0.5$. This sample averages $0.25$, well below the halfway point, where the normal density is substantially lower. At $P=0.25$ the index is $\Phi^{-1}(0.25)=-0.6745$, and $\phi(-0.6745) = 0.3178$ — about 80 percent of the peak. So the rule of thumb overstates the effect.

*The correct calculation: a discrete difference.* The regressor is **binary**, so differentiating is the wrong operation altogether — you cannot make a marginal change to a dummy. Take the difference in predicted probabilities:
$$\mathrm{APE} = \frac1n\sum_i\Bigl[\Phi(\tilde x_i'\tilde\beta + 0.6) - \Phi(\tilde x_i'\tilde\beta)\Bigr] ,$$
where $\tilde x_i'\tilde\beta$ is each observation's index excluding the treatment term. Evaluated at a representative index of $\Phi^{-1}(0.25) = -0.6745$:
$$\Phi(-0.6745+0.6) - \Phi(-0.6745) = \Phi(-0.0745) - 0.25 = 0.470 - 0.250 = 0.220 .$$

So the effect is about **22 percentage points** — treatment raises the probability from 25 percent to about 47 percent.

*Which to report and why.* The **discrete difference**, computed as an average over the sample rather than at a single representative point, for three reasons:

1. **The regressor is binary.** The derivative formula $\phi(x'\beta)\beta$ answers "what happens for an infinitesimal change", which does not exist for a dummy. The difference answers the actual question.
2. **The effect is large relative to the curvature.** With $\hat\beta = 0.6$ the index moves a substantial distance, so the density is not constant over the move and a derivative-based approximation is poor. The gap here ($0.220$ against $0.24$) is modest, but with a larger coefficient or a more extreme baseline it grows quickly.
3. **The rule of thumb is calibrated for a balanced sample.** At an average probability of $0.25$ it is systematically too large, and at a genuinely rare outcome ($P = 0.05$, say) it would be badly so — [5.3](05-03-logit-and-probit.md) P1 makes the same point for logit.

The general discipline from [5.3](05-03-logit-and-probit.md): report an average partial effect, computed by averaging over the sample's actual covariate distribution rather than evaluating at the mean, and use differences rather than derivatives for discrete regressors. And say explicitly which convention you used — MEM and APE differ, and readers cannot tell from a table which is which.

</details>

## Connections

- **Backward:** the latent-variable structure is [5.3](05-03-logit-and-probit.md)'s, extended from "did it cross zero" to "how far past zero", and the inverse Mills ratio is the probit hazard glimpsed in that lesson's score. Selection bias is [3.3](03-03-regression-anatomy-good-and-bad-controls.md)'s collider bias — conditioning on sample membership when membership depends on the outcome — and its correction is [3.4](03-04-omitted-variable-bias.md)'s formula with $\lambda$ as the omitted variable. The exclusion restriction is [3.6](03-06-instrumental-variables.md)'s, with [3.8](03-08-weak-instruments-and-late.md)'s weakness warning attached.
- **Forward:** [5.5](05-05-a-taste-of-time-series.md) closes the course with a different way for a regression to mislead — dependence over time rather than selection in who is observed.
- **Sideways:** attrition in a randomised trial is exactly this problem: randomisation guarantees balance at assignment and guarantees nothing about who remains at follow-up. This is why trials report differential attrition by arm and often present Lee bounds, which are the Manski-style bounds of [3.1](03-01-potential-outcomes-identification.md) adapted to selection — and, as there, a wide honest bound is frequently more informative than a point estimate resting on an exclusion restriction nobody believes.
