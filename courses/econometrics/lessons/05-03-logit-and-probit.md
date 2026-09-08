# Econometrics · Lesson 5.3: Limited dependent variables — logit and probit

> ⏱ ~15 min · Module 5: Estimation principles and extensions · Builds on: [5.2 (GMM)](05-02-generalized-method-of-moments.md), [5.1 (maximum likelihood)](05-01-maximum-likelihood-estimation.md) · Unlocks: 5.4 (censoring and selection)

## Why this matters

Enormous numbers of economic outcomes are binary. Employed or not. Defaulted or not. Voted, migrated, enrolled, was hired, went to college. The linear model was built for a continuous outcome and applying it to a zero-one variable produces predicted probabilities above one and below zero, which is not a rounding problem but a sign the functional form is wrong.

Logit and probit fix this by pushing a linear index through a function that cannot leave the unit interval. The cost is the thing people most often get wrong: **the coefficient is no longer the effect.** In a linear model $\hat\beta$ answers the policy question directly; in a logit it does not, and reporting it as though it did is one of the most common errors in applied tables.

## The idea

Model the *probability* rather than the outcome. Build a linear index $x'\beta$ as usual, then map it through a cumulative distribution function — which by construction lands in $[0,1]$, is increasing, and flattens at both ends.

The flattening is the substantive content. A ten-point rise in a credit score moves the default probability a great deal for someone near 50 percent and almost not at all for someone already at 2 percent. That is economically sensible and the linear probability model cannot express it: LPM says the effect is the same everywhere.

The consequence is that the marginal effect $\partial P/\partial x$ depends on where you evaluate it. There is no single number, which is exactly the situation of [1.6](01-06-functional-form-logs-interactions.md)'s polynomials and interactions — you must say *at what value*, or average over the sample and say that you did.

An equivalent and often more useful framing: there is a **latent variable** $y^*$ — creditworthiness, propensity to migrate, net utility of enrolling — that follows a linear model, and you observe only whether it crossed zero. Then $\beta$ is a coefficient in the latent equation, interpretable and scale-fixed by the assumed error distribution.

## The formal version

> **Latent-variable model.** $y_i^* = x_i'\beta + \varepsilon_i$, with $y_i = \mathbf 1\{y_i^* > 0\}$.

Then
$$P(y_i = 1\mid x_i) = P(\varepsilon_i > -x_i'\beta\mid x_i) = F(x_i'\beta) ,$$
where $F$ is the cdf of $-\varepsilon_i$ (symmetric distributions make this the cdf of $\varepsilon_i$).

| Model | $F$ | Error distribution | $\operatorname{Var}(\varepsilon)$ |
|---|---|---|---|
| **Probit** | $\Phi(z)$, standard normal cdf | $\mathcal N(0,1)$ | $1$ |
| **Logit** | $\Lambda(z)=\dfrac{e^z}{1+e^z}$ | standard logistic | $\pi^2/3 \approx 3.29$ |

**Scale is not identified.** Multiplying $y^*$, $\beta$ and $\varepsilon$ by any positive constant leaves $y$ unchanged, so the variance of $\varepsilon$ must be normalised. Probit sets it to $1$; logit's is $\pi^2/3$. This is why **logit coefficients are roughly $\pi/\sqrt3 = 1.814$ times probit coefficients** for the same data — the two are reporting the same thing in different units, and neither number is comparable across models or across samples with different residual variance.

**Estimation by maximum likelihood.** The log-likelihood is
$$\ell(\beta) = \sum_i\Bigl[y_i\log F(x_i'\beta) + (1-y_i)\log\bigl(1-F(x_i'\beta)\bigr)\Bigr] ,$$
which is globally concave for both logit and probit, so the optimum is unique and easy to find. The score is
$$\sum_i \frac{\bigl(y_i - F(x_i'\beta)\bigr)f(x_i'\beta)}{F(x_i'\beta)\bigl(1-F(x_i'\beta)\bigr)}\,x_i = 0 ,$$
and for logit this simplifies beautifully to $\sum_i\bigl(y_i-\Lambda(x_i'\beta)\bigr)x_i = 0$ — a residual orthogonal to the regressors, exactly like OLS's normal equations.

> **Marginal effects.** For a continuous regressor $x_j$,
> $$\frac{\partial P(y=1\mid x)}{\partial x_j} = f(x'\beta)\,\beta_j ,$$
> the coefficient scaled by the density at the index.

*In words:* the effect is largest where the density is largest — near $P=0.5$ — and shrinks toward the tails. Two conventions, and you must say which you used:

- **MEM** (marginal effect at the mean): evaluate at $\bar x$. Easy, but "the average person" may not exist.
- **APE** (average partial effect): $\frac1n\sum_i f(x_i'\beta)\beta_j$. Averages over the actual sample. **Preferred.**

They differ, sometimes materially, because $f$ is nonlinear and averaging a nonlinear function is not the function of the average.

For a **discrete** regressor, do not differentiate — take the difference:
$$F(\bar x'\beta \text{ with } d=1) - F(\bar x'\beta\text{ with } d=0) .$$

**Rules of thumb.** For a roughly balanced sample, $f(0)$ is $\phi(0)=0.399$ for probit and $0.25$ for logit, so
$$\text{probit APE}\approx 0.4\,\hat\beta, \qquad \text{logit APE}\approx 0.25\,\hat\beta .$$
These are Amemiya's rules; they are approximations for quick sanity checks, not substitutes for computing the APE.

**The linear probability model.** Regressing $y$ on $x$ by OLS estimates $E[y\mid x] = P(y=1\mid x)$ linearly. Its faults are real: predictions outside $[0,1]$, and heteroskedasticity that is *guaranteed* rather than incidental, since $\operatorname{Var}(y\mid x)=p(x)(1-p(x))$ moves with the mean — so robust standard errors are mandatory, not optional.

But it has genuine advantages, and its use in applied causal work is deliberate rather than lazy. The coefficient *is* the marginal effect, with no post-estimation step. It handles fixed effects without the incidental-parameters problem below. It extends to IV and DiD trivially. And when the fitted probabilities lie in a moderate range, LPM and logit APEs typically agree closely. **For a causal estimand with a binary outcome, LPM with robust standard errors is a defensible default**; for prediction near the tails, it is not.

**Two traps specific to nonlinear models.**

*The incidental-parameters problem.* Adding unit fixed effects to a nonlinear panel model is **not** like the linear case. With $T$ fixed, the $\alpha_i$ are estimated inconsistently, and that inconsistency contaminates $\beta$ — for logit with $T=2$ the bias is a factor of two. Conditional logit (Chamberlain) avoids it by conditioning on $\sum_t y_{it}$, at the price of dropping units with no within variation and providing no marginal effects. **Probit has no such fix.** This is a strong practical argument for LPM in panel settings.

*Coefficients are not comparable across models.* Because scale is normalised by the residual variance, adding a regressor rescales *all* coefficients even if it is orthogonal to them. Comparing $\hat\beta$ across nested logits, or across groups, is invalid. **Compare marginal effects instead** — they are scale-free.

## Picture

![Probability plotted against a linear index: a coral probit S-curve and a blue dashed logit curve both confined between zero and one, with a grey dashed straight line for the linear probability model rising above one and falling below zero, alongside a panel showing the probit marginal effect peaking at the middle against the LPM's constant effect](assets/05-03-fig1.svg)

The left panel is the functional-form argument: the straight line leaves the unit interval at both ends. The right panel is the interpretation argument, and it is the more important of the two — the probit marginal effect peaks where the probability is one half and falls away in both tails, while the LPM's is constant by construction. Which matters depends on whether your data live in the middle or the tails.

## Worked examples

**Example 1 (mechanical): computing marginal effects three ways.** A probit gives $\hat\beta_0 = -0.5$ and $\hat\beta_1 = 0.8$, with $x\sim\mathcal N(0,1)$ in the sample.

*Probabilities and marginal effects at three points:*

| $x$ | index $-0.5+0.8x$ | $P = \Phi(\cdot)$ | $\partial P/\partial x = \phi(\cdot)\times 0.8$ |
|---|---|---|---|
| $0$ | $-0.50$ | $0.3085$ | $0.2817$ |
| $1$ | $+0.30$ | $0.6179$ | $0.3051$ |
| $2$ | $+1.10$ | $0.8643$ | $0.1743$ |

The effect **rises then falls**, peaking where the index crosses zero (probability one half) and decaying in the tails. At $x=2$ it is 43 percent smaller than at $x=1$, despite the same coefficient.

*MEM* (at $x = E[x]=0$): $\phi(-0.5)\times 0.8 = 0.3521\times 0.8 = 0.2817$.
*APE* (averaged over $x\sim\mathcal N(0,1)$): $E[\phi(-0.5+0.8x)]\times 0.8 = 0.2311$.

**The two differ by 18 percent** ($0.2817$ against $0.2311$), because $\phi$ is concave near its peak and averaging pulls the result down. Report the APE and say so.

*Rule-of-thumb check:* $0.4\times 0.8 = 0.32$, which overstates the APE of $0.231$ here — the rule assumes a balanced sample, and with a mean index of $-0.5$ this sample sits below the halfway point where the density is lower.

**Example 2 (why you'd care): a coefficient comparison that means nothing.** A researcher fits two logits of employment on a training dummy — one for men, one for women — and finds $\hat\beta_{\text{men}}=0.62$ and $\hat\beta_{\text{women}}=0.41$. They conclude training helps men more.

**The comparison is invalid.** Logit coefficients are identified only up to the scale normalisation $\operatorname{Var}(\varepsilon)=\pi^2/3$. If unobserved determinants of employment are *more variable* among women — more heterogeneous care responsibilities, more variable local labour markets — then the women's model has a larger true residual variance, and normalising it to $\pi^2/3$ shrinks all their coefficients relative to the men's. The difference of $0.62$ against $0.41$ could be entirely a difference in residual variance, with identical underlying effects.

*The fix.* Compare **marginal effects**, which are scale-free because the normalisation cancels between $f(x'\beta)$ and $\beta$. Suppose the APEs come out at $0.11$ for men and $0.13$ for women. **The ranking reverses**, and the marginal effects are the ones that answer the policy question: how many more people are employed per person trained.

This is a general and under-appreciated hazard, sometimes called the problem of comparing coefficients across nonlinear models. It also invalidates comparing $\hat\beta$ across nested specifications on the same data — adding a regressor reduces the residual variance and rescales every other coefficient upward, so a coefficient that "grows when controls are added" may have done nothing of the sort. **Anything you want to compare, compare in marginal effects.**

## Watch out

- **You might think** a logit coefficient of $0.62$ means a 62 percent effect, or even a $0.62$ effect on the probability — **but actually** it is a latent-index coefficient in units fixed by an arbitrary normalisation. Exponentiating gives an **odds ratio** ($e^{0.62}=1.86$), which is a legitimate quantity but is not a probability effect and is routinely misreported as one.
- **You might think** you can add fixed effects to a probit as you would to OLS — **but actually** the incidental-parameters problem makes $\hat\beta$ inconsistent for fixed $T$, with bias of order $1/T$ that is a factor of two at $T=2$. Conditional logit is the fix for logit; probit has none, and LPM sidesteps the issue entirely.
- **You might think** the linear probability model is simply wrong — **but actually** it is a deliberate and often correct choice for causal work: the coefficient is the marginal effect, fixed effects and IV work without complication, and its predictions misbehave only when fitted probabilities approach the boundaries. Check the fitted range; if it stays well inside $[0.05,0.95]$, LPM and logit will usually agree closely.

## One-liner

> Push a linear index through a cdf so probabilities stay in $[0,1]$ — and accept that the coefficient is then a latent-scale quantity, not an effect, so report average partial effects and never compare raw coefficients across models or groups.

## Problems

**P1 (🟢)** A logit gives $\hat\beta = 0.9$ on a continuous regressor. Compute the odds ratio, the Amemiya rule-of-thumb marginal effect, and the exact marginal effect at a point where the fitted probability is $0.20$. Explain why the last is so much smaller than the rule of thumb.

**P2 (🟡)** Show that the logit score simplifies to $\sum_i(y_i-\Lambda(x_i'\beta))x_i = 0$, and explain what this implies about the fitted probabilities when the model contains a constant. Then explain why the same simplification does not occur for probit.

**P3 (🔴, optional)** Derive the marginal effect formula $\partial P/\partial x_j = f(x'\beta)\beta_j$, and show that the *ratio* of two marginal effects equals the ratio of the corresponding coefficients. Explain why this makes ratios comparable across logit and probit even though levels are not, and what that implies for reporting.

<details>
<summary>Solutions</summary>

**P1** *Odds ratio.* For logit, $e^{\hat\beta}$ is the multiplicative effect on the odds $p/(1-p)$:
$$e^{0.9} = 2.4596 .$$
A one-unit increase multiplies the odds by about $2.46$ — **not** a 146 percent increase in the probability.

*Amemiya rule of thumb.* For logit, APE $\approx 0.25\hat\beta$:
$$0.25\times 0.9 = 0.225 .$$

*Exact marginal effect at $p = 0.20$.* For logit the density at the index is $f = p(1-p)$, so
$$\frac{\partial P}{\partial x} = p(1-p)\hat\beta = 0.20(0.80)(0.9) = 0.16\times 0.9 = 0.144 .$$

*Why so much smaller.* The rule of thumb $0.25\hat\beta$ uses $f$ evaluated at $p=0.5$, where $p(1-p) = 0.25$ takes its **maximum**. At $p=0.20$ the density is $0.16$, only 64 percent of the maximum, so the marginal effect is correspondingly $0.144$ rather than $0.225$ — a 36 percent reduction.

The general point: the logit marginal effect is $p(1-p)\beta$, and $p(1-p)$ falls off sharply away from one half. At $p=0.05$ it is $0.0475$, so the effect is $0.043$ — less than a fifth of the rule-of-thumb value. **The rule of thumb is a check on a balanced sample, and badly misleading for a rare outcome**, which is exactly the setting (default, mortality, take-up of an unusual program) where binary models are most used.

**P2** *Simplifying the logit score.* The general score from the lesson is
$$\sum_i\frac{\bigl(y_i-F(x_i'\beta)\bigr)f(x_i'\beta)}{F(x_i'\beta)\bigl(1-F(x_i'\beta)\bigr)}x_i .$$
For logit, $F = \Lambda$ and the logistic density satisfies the identity
$$\lambda(z) = \Lambda(z)\bigl(1-\Lambda(z)\bigr) .$$
(Check: $\Lambda(z) = e^z/(1+e^z)$, so $\Lambda' = e^z/(1+e^z)^2 = \Lambda(1-\Lambda)$.) Substituting, the density in the numerator cancels the entire denominator:
$$\frac{(y_i-\Lambda_i)\,\Lambda_i(1-\Lambda_i)}{\Lambda_i(1-\Lambda_i)} = y_i - \Lambda_i ,$$
leaving
$$\sum_i\bigl(y_i-\Lambda(x_i'\beta)\bigr)x_i = 0 .\ \checkmark$$

*What it implies with a constant.* The equation corresponding to the constant regressor reads
$$\sum_i\bigl(y_i - \hat p_i\bigr) = 0 \qquad\Longrightarrow\qquad \frac1n\sum_i \hat p_i = \bar y .$$
**The average fitted probability equals the sample proportion of ones**, exactly. This is the logit analogue of [1.3](01-03-ols-algebra-geometry-projection.md)'s result that OLS residuals sum to zero and the regression passes through the means — and it extends: for any regressor $x_j$, $\sum_i(y_i-\hat p_i)x_{ij}=0$, so the "residuals" $y_i-\hat p_i$ are orthogonal to every regressor, precisely as in OLS.

In [5.2](05-02-generalized-method-of-moments.md)'s language, the logit score is the moment function $g = (y-\Lambda(x'\beta))x$, structurally identical to OLS's $(y-x'\beta)x$ with the linear fitted value replaced by the logistic one. Logit is a GMM estimator whose moment condition is the natural generalisation of the normal equations.

*Why probit does not simplify.* The normal density and cdf satisfy no such identity: $\phi(z)\neq\Phi(z)(1-\Phi(z))$. The probit score retains the ratio
$$\frac{\phi(x_i'\beta)}{\Phi(x_i'\beta)\bigl(1-\Phi(x_i'\beta)\bigr)} ,$$
which is a genuine weight varying across observations (it is related to the inverse Mills ratio of [5.4](05-04-censoring-truncation-sample-selection.md)). So probit residuals are **not** orthogonal to the regressors and the average fitted probability does **not** equal $\bar y$.

The identity $\lambda = \Lambda(1-\Lambda)$ is the logistic distribution's special feature — it is why logit has closed-form scores, why it is the canonical link in generalised linear models, and why conditional logit's fixed-effects fix exists while probit's does not. Practically, the two models give near-identical fitted probabilities and marginal effects; logit's advantages are all computational and structural.

**P3** *Deriving the marginal effect.* With $P(y=1\mid x)=F(x'\beta)$, apply the chain rule:
$$\frac{\partial P}{\partial x_j} = F'(x'\beta)\cdot\frac{\partial (x'\beta)}{\partial x_j} = f(x'\beta)\,\beta_j ,\ \checkmark$$
where $f = F'$ is the density. The effect is the coefficient scaled by the density at the index — largest where the density peaks (at the index zero, i.e. $P=0.5$) and vanishing in the tails.

*Ratio of marginal effects.* For two continuous regressors $x_j$ and $x_k$, evaluated at the **same** point $x$:
$$\frac{\partial P/\partial x_j}{\partial P/\partial x_k} = \frac{f(x'\beta)\beta_j}{f(x'\beta)\beta_k} = \frac{\beta_j}{\beta_k} .$$
**The density cancels**, so the ratio of marginal effects equals the ratio of coefficients — and, crucially, it is the same at *every* evaluation point, even though the individual effects vary enormously across points.

*Why ratios are comparable across models.* The scale normalisation enters multiplicatively: if the true latent coefficients are $\beta^*$ and the model normalises $\operatorname{Var}(\varepsilon)=\sigma^2_F$, then the estimated $\beta = \beta^*/\sigma_F$. In a ratio,
$$\frac{\beta_j}{\beta_k} = \frac{\beta_j^*/\sigma_F}{\beta_k^*/\sigma_F} = \frac{\beta^*_j}{\beta^*_k} ,$$
**the normalisation cancels.** So the ratio is a property of the underlying latent model, not of the arbitrary scale choice — and logit and probit fitted to the same data should give nearly identical coefficient *ratios* even though logit's levels are about $1.814$ times probit's.

That is a useful diagnostic in itself: if logit and probit ratios differ noticeably, the two error distributions are fitting the data differently, which usually signals that the tail behaviour matters (the logistic has fatter tails than the normal) and that neither functional form should be trusted far from the middle.

*What it implies for reporting.* Three practical consequences.

1. **Ratios are safe; levels are not.** "The effect of education is twice the effect of experience" is a scale-free statement, comparable across models, samples and groups. "The coefficient on education is $0.8$" is not.
2. **Willingness-to-pay and trade-off calculations are ratios**, which is why they are the standard output of discrete-choice models: dividing a coefficient by the price coefficient gives a money value in which the normalisation cancels. That is the entire reason logit is the workhorse of demand estimation.
3. **For levels, report average partial effects with a stated evaluation convention.** The APE is scale-free too (the $\sigma_F$ in $\beta$ cancels against the $1/\sigma_F$ inside $f$), which is the deeper reason [Example 2](#worked-examples)'s cross-group comparison must be done in marginal effects: they, unlike coefficients, are estimating the same object in both groups.

</details>

## Flashback

**From Lesson 5.2 (the generalized method of moments):** A GMM estimation uses 5 moment conditions to estimate 2 parameters and reports $J = 3.1$. State the degrees of freedom, the 5 percent critical value, and your conclusion. Then say what the $J$-statistic would necessarily be if two of the moment conditions were dropped.

<details>
<summary>Solution</summary>

*Degrees of freedom and critical value.* With $q = 5$ moments and $k=2$ parameters,
$$\mathrm{df} = q-k = 5-2 = 3, \qquad \chi^2_{3,\,0.95} = 7.815 .$$

*Conclusion.* Since $J = 3.1 < 7.815$, **do not reject** the over-identifying restrictions at 5 percent (the $p$-value is about $0.38$). The five moment conditions are mutually consistent: they do not disagree by more than sampling noise.

Two caveats worth attaching, both from [5.2](05-02-generalized-method-of-moments.md). First, this tests only the **three surplus** restrictions — two of the five conditions are used up estimating the parameters and are maintained as assumptions, untested. Second, and more important, if all five conditions derive from the same economic theory, they will fail *together* when that theory is wrong, and the $J$-test has little power against exactly that failure. A passing $J$ is weak evidence of validity, not a certificate.

*If two conditions were dropped.* Then $q = 3$ and $k = 2$, so $\mathrm{df} = 1$ and the test would still exist — but it would have only one restriction's worth of content, and its critical value would be $\chi^2_{1,0.95} = 3.841$.

The question's phrasing points at the sharper case: if **three** were dropped, leaving $q = k = 2$, the model becomes **just-identified** and
$$J \equiv 0$$
identically, for any dataset. With exactly enough moments to pin down the parameters, there is a $\hat\theta$ setting all sample moments to zero exactly, so the minimised objective is zero and $\mathrm{df} = q-k = 0$ leaves nothing to test.

This is the point [5.2](05-02-generalized-method-of-moments.md) P1 and [3.7](03-07-two-stage-least-squares.md) P2 both make: **over-identification is the only source of testable content about moment conditions.** Dropping surplus moments does not make a model more robust — it makes its assumptions unfalsifiable, which is the opposite. If you have a valid extra instrument, including it buys you both efficiency and the ability to check yourself.

</details>

## Connections

- **Backward:** logit and probit are MLE ([5.1](05-01-maximum-likelihood-estimation.md)) and hence GMM with score moments ([5.2](05-02-generalized-method-of-moments.md)) — the logit score is literally the OLS normal equations with a logistic fitted value. The "no single marginal effect" problem is [1.6](01-06-functional-form-logs-interactions.md)'s nonlinearity issue, and the LPM's guaranteed heteroskedasticity is why [2.4](02-04-heteroskedasticity-robust-standard-errors.md)'s robust errors are mandatory here.
- **Forward:** [5.4](05-04-censoring-truncation-sample-selection.md) extends the latent-variable idea to outcomes that are censored or selected rather than merely binary, and the inverse Mills ratio appearing there is the probit hazard glimpsed in P2. The incidental-parameters problem is the nonlinear counterpart of [4.1](04-01-panel-data-fixed-effects.md)'s fixed effects, and the reason panel causal work so often stays linear.
- **Sideways:** logistic regression is the same estimator as [`machine-learning` 1.5](../../machine-learning/lessons/01-05-logistic-regression-and-classification.md) and [`statistical-learning` 2.2](../../statistical-learning/lessons/02-02-logistic-regression-and-classification.md), fitted identically and used for an opposite purpose: those courses want accurate classification and are indifferent to what $\beta$ means, while this one wants an interpretable marginal effect and is largely indifferent to classification accuracy. Note also that those courses typically add a regularisation penalty, which biases $\hat\beta$ deliberately — harmless for prediction, fatal for the marginal effects reported here.
