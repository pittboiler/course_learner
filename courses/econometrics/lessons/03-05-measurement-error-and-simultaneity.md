# Econometrics · Lesson 3.5: Measurement error and simultaneity

> ⏱ ~15 min · Module 3: Endogeneity and causality · Builds on: [3.3 (regression anatomy)](03-03-regression-anatomy-good-and-bad-controls.md), [3.4 (omitted-variable bias)](03-04-omitted-variable-bias.md) · Unlocks: 3.6 (instrumental variables), 3.7 (2SLS)

## Why this matters

Endogeneity has three classical sources. [3.4](03-04-omitted-variable-bias.md) covered one. This lesson covers the other two, and they matter for different reasons.

**Measurement error** is the one whose direction you actually know. Almost every regressor economists use is measured badly — self-reported income, survey-recalled hours, imputed wealth, satellite-estimated GDP — and classical noise in a regressor biases its coefficient toward zero by a factor you can compute from a reliability ratio. That is a rare gift: a bias with a known sign and a known magnitude.

**Simultaneity** is the founding problem of the field. Working asked in 1927 why regressing quantity on price gives neither a demand curve nor a supply curve, and the answer — that both are moving and the data trace out a mixture — is why econometrics became a distinct discipline rather than applied statistics.

## The idea

**Measurement error.** Suppose the true regressor is $x^*$ but you observe $x = x^* + v$ with noise $v$. The observed regressor is now partly signal and partly garbage, and OLS cannot tell them apart. Since only the signal moves with $y$ while the noise inflates the denominator $\operatorname{Var}(x)$, the slope gets diluted. The dilution factor is the share of the observed variance that is genuine signal.

The direction is unambiguous and always the same: **toward zero**. That makes it the one bias you can honestly describe as conservative — if your noisy-regressor estimate is significant, the true effect is larger.

Two crucial asymmetries. Noise in $y$ does *not* bias anything, since it just joins the error term. And noise in a *control* variable does not attenuate that control's coefficient harmlessly — it leaks bias onto the coefficient you care about, because a partially-measured control only partially controls.

**Simultaneity.** If $y$ affects $x$ as well as the reverse, then $x$ is correlated with the error in the $y$ equation by construction. There is no omitted variable and no mismeasurement; the problem is the direction of causation running both ways at once. The scatter of price and quantity you observe is a set of *equilibria*, and which curve it traces out depends entirely on which curve was shifting.

## The formal version

### Classical measurement error

Let $y = \beta_0+\beta_1 x^* + \varepsilon$ with $E[\varepsilon\mid x^*]=0$. You observe $x = x^*+v$ where the noise is **classical**: $v$ has mean zero and is uncorrelated with $x^*$, with $\varepsilon$, and with $y$.

Substituting $x^* = x - v$:
$$y = \beta_0 + \beta_1 x + \underbrace{(\varepsilon - \beta_1 v)}_{\text{composite error}} .$$
The composite error contains $v$, and so does the regressor — so $\operatorname{Cov}(x, \varepsilon-\beta_1 v) = -\beta_1\operatorname{Var}(v)\neq 0$. Endogeneity, manufactured by measurement alone.

> **Theorem (attenuation).**
> $$\hat\beta_1 \ \xrightarrow{p}\ \beta_1\cdot\underbrace{\frac{\operatorname{Var}(x^*)}{\operatorname{Var}(x^*)+\operatorname{Var}(v)}}_{\lambda,\ \text{the reliability ratio}} , \qquad 0<\lambda<1 .$$

*In words:* the estimated slope is the true slope shrunk by the fraction of observed variance that is real signal. Since $\lambda<1$ always, the estimate is **always biased toward zero**.

| $\lambda$ | signal-to-noise $\operatorname{Var}(x^*)/\operatorname{Var}(v)$ | attenuation |
|---|---|---|
| $0.9$ | $9.0$ | 10% |
| $0.8$ | $4.0$ | 20% |
| $0.7$ | $2.33$ | 30% |
| $0.5$ | $1.0$ | 50% |

**Three important qualifications.**

*Error in $y$ is harmless.* If $y = y^* + w$ with classical $w$, then $y = \beta_0+\beta_1x^*+(\varepsilon+w)$ — the noise joins the error term, is still uncorrelated with the regressor, and OLS remains unbiased and consistent. Only the standard errors grow.

*Error in a control contaminates the treatment coefficient.* If $W$ is a confounder measured with error, controlling for the noisy version removes only $\lambda_W$ of the confounding, leaving $(1-\lambda_W)$ of the OVB from [3.4](03-04-omitted-variable-bias.md) on the treatment coefficient. This is why "we control for income" is weaker than it sounds when income is self-reported.

*Non-classical error breaks the sign.* If the error correlates with the truth — as it does for a binary mismeasured variable, where someone truly at $x^*=1$ can only be misreported downward — attenuation is not guaranteed and the bias can go either way. Binary misclassification is the common case and it is *not* covered by the theorem.

**Fixes.** An instrument for the mismeasured regressor works ([3.6](03-06-instrumental-variables.md)) — a *second independent measurement* of the same quantity is the classic choice, since it is correlated with the truth and its error is unrelated. If $\lambda$ is known from a validation study, divide by it.

### Simultaneity

Consider a market:
$$\text{demand}: \ q = \alpha_0 + \alpha_1 p + \alpha_2 z_d + u_d, \qquad \text{supply}: \ q = \gamma_0+\gamma_1 p + \gamma_2 z_s + u_s .$$
Both equations hold at once, so $p$ and $q$ are jointly determined. Solving for the **reduced form** — each endogenous variable in terms of exogenous ones only — gives $p$ as a function of $z_d$, $z_s$, $u_d$ and $u_s$. Since $p$ depends on $u_d$, regressing $q$ on $p$ has an endogenous regressor and identifies neither structural equation.

> **The identification result.** The demand curve is identified if there is a variable that shifts **supply** but not demand ($z_s$); the supply curve is identified if there is a variable that shifts **demand** but not supply ($z_d$).

*In words:* to trace out one curve you need something that moves the *other* one. Weather shifts agricultural supply, so weather identifies demand. An income shock shifts demand, so it identifies supply. This is the **order condition** in its simplest form, and it is exactly the instrumental-variables idea arriving from the simultaneous-equations tradition.

If only demand shifts, the observed equilibria trace out supply. If both shift, the cloud traces out neither, and the OLS slope is a variance-weighted mixture of the two elasticities — negative if demand shifts dominate, positive if supply shifts do, and meaningless either way.

## Picture

![On the left, the probability limit of the slope plotted against the reliability ratio as a straight line below the true value, with 50 and 20 percent attenuation marked; on the right, three parallel demand curves crossing one supply curve, with the equilibrium points tracing out the supply curve](assets/03-05-fig1.svg)

The left panel shows attenuation is exactly linear in reliability — a reliability of $0.8$ costs you exactly 20 percent of the coefficient. The right panel is Working's 1927 picture: only demand is shifting, so the observed equilibria (grey dots) lie along the *supply* curve. A regression through those dots estimates the supply elasticity while looking for all the world like a demand curve.

## Worked examples

**Example 1 (mechanical): correcting for known unreliability.** A regression of health outcomes on self-reported alcohol consumption gives $\hat\beta = -0.35$. A validation study comparing self-reports with clinical measures finds a reliability ratio of $\lambda = 0.6$.

The attenuation-corrected estimate is
$$\hat\beta_{\text{corrected}} = \frac{\hat\beta}{\lambda} = \frac{-0.35}{0.6} = -0.5833 .$$
The true relationship is about 67 percent stronger than the naive regression suggests.

Two things follow. First, the naive estimate is a **lower bound in magnitude** — if $-0.35$ is already significant and worrying, the truth is worse. Second, the correction inflates the standard error by the same factor $1/\lambda = 1.67$, so it does not manufacture significance: if the raw estimate is insignificant, the corrected one is too. Attenuation costs you precision as well as magnitude, and correcting for it recovers both distortions together.

**Example 2 (why you'd care): the returns-to-schooling puzzle, resolved by two biases.** Instrumental-variables estimates of the return to schooling ([3.6](03-06-instrumental-variables.md)) are routinely **higher** than OLS estimates — often $0.13$ against $0.10$. This looks wrong: OLS should be biased *up* by ability bias ([3.4](03-04-omitted-variable-bias.md)), so IV ought to be lower.

The resolution is that two biases run in opposite directions:

- **Ability bias** pushes OLS *up*: $\delta\pi > 0$, worth about $+0.008$ from [3.4](03-04-omitted-variable-bias.md)'s Example 1.
- **Measurement error** pushes OLS *down*: schooling is self-reported and misremembered, with reliability around $\lambda = 0.9$, costing about 10 percent of the coefficient, roughly $-0.011$ on a true value near $0.11$.

The two nearly cancel, leaving OLS close to the truth by accident. IV, meanwhile, fixes *both* — an instrument uncorrelated with ability is also uncorrelated with measurement error — so it should land above OLS if the attenuation effect is the larger of the two. Which is what is observed.

The methodological lesson is broader than schooling: **when you sign a bias, sign all of them.** An argument that identifies one source and declares the estimate an upper bound is incomplete if a second source runs the other way, and the net direction is then an empirical question rather than a theoretical one.

## Watch out

- **You might think** measurement error always attenuates — **but actually** that is the *classical* case: additive noise uncorrelated with the truth, in the regressor of interest. Mismeasured binary variables, errors correlated with the truth, and mismeasured *controls* all break the guarantee, and the last of those biases a *different* coefficient than the one measured badly.
- **You might think** more measurements always help — **but actually** averaging repeated noisy measures raises $\lambda$ (with $m$ independent measures, $\operatorname{Var}(\bar v)=\operatorname{Var}(v)/m$), but using a second measurement as an *instrument* for the first is usually better, because it fixes the bias rather than shrinking it. Averaging never reaches $\lambda=1$; a valid instrument is consistent.
- **You might think** simultaneity requires a formal system of equations to matter — **but actually** it appears whenever the outcome feeds back into the regressor: police and crime, class size and parental sorting, aid and growth, advertising and sales. The tell is always the same question — *could $y$ have caused $x$?* — and if the answer is yes, the OLS coefficient is a mixture of two structural parameters.

## One-liner

> Classical noise in a regressor shrinks its coefficient by exactly the reliability ratio, noise in the outcome costs only precision, and simultaneity means the data trace out whichever curve stood still — so to identify one relationship you need something that moves the other.

## Problems

**P1 (🟢)** A regressor has true variance $9$ and measurement-error variance $3$. Compute the reliability ratio and the attenuation factor. If the estimated coefficient is $0.24$, what is the implied true coefficient? By what factor does correcting inflate the standard error?

**P2 (🟡)** Show that classical measurement error in the *dependent* variable leaves OLS consistent, and state precisely what it does affect. Then show that in a bivariate regression with a mismeasured regressor, the $R^2$ is also attenuated, and by what factor.

**P3 (🔴, optional)** In the supply-and-demand system above, derive the reduced form for $p$, show explicitly that $\operatorname{Cov}(p,u_d)\neq 0$, and determine what the OLS regression of $q$ on $p$ converges to when both $\operatorname{Var}(u_d)$ and $\operatorname{Var}(u_s)$ are positive. Then state the condition under which OLS happens to recover the demand curve exactly.

<details>
<summary>Solutions</summary>

**P1** *Reliability ratio.*
$$\lambda = \frac{\operatorname{Var}(x^*)}{\operatorname{Var}(x^*)+\operatorname{Var}(v)} = \frac{9}{9+3} = \frac{9}{12} = 0.75 .$$
So the attenuation is $1-0.75 = 25$ percent: the estimated coefficient is 75 percent of the truth.

*Implied true coefficient.*
$$\beta_1 = \frac{\hat\beta_1}{\lambda} = \frac{0.24}{0.75} = 0.32 .$$

*Standard error inflation.* The correction multiplies the estimate by the constant $1/\lambda = 1/0.75 = 1.3\overline{3}$, and multiplying an estimator by a constant multiplies its standard error by the same constant. So the standard error inflates by a factor of $\mathbf{1.33}$.

Consequently the $t$-statistic is **unchanged**: $t = \hat\beta/\mathrm{se}$ and both numerator and denominator scale by $1/\lambda$. The correction changes the magnitude you report and the width of the interval, never the significance. That is worth remembering as a check — if someone claims an attenuation correction turned an insignificant result significant, something else is going on (typically they corrected the coefficient and forgot the standard error).

**P2** *Consistency with error in $y$.* Let the true model be $y^* = \beta_0+\beta_1x+\varepsilon$ with $E[\varepsilon\mid x]=0$, and suppose you observe $y = y^*+w$ with $w$ mean-zero and uncorrelated with $x$ and $\varepsilon$. Then
$$y = \beta_0+\beta_1 x + (\varepsilon + w) ,$$
and the composite error satisfies $\operatorname{Cov}(x,\varepsilon+w) = 0+0 = 0$. The regressor is still exogenous, so by [2.2](02-02-consistency-and-asymptotic-normality.md)'s consistency result $\hat\beta_1\xrightarrow{p}\beta_1$. Indeed $E[\varepsilon+w\mid x]=0$ also gives unbiasedness under GM3.

*What it does affect.* The error variance grows from $\sigma^2_\varepsilon$ to $\sigma^2_\varepsilon+\sigma^2_w$, so
$$\operatorname{Var}(\hat\beta_1) = \frac{\sigma_\varepsilon^2+\sigma_w^2}{\sum_i (x_i-\bar x)^2}$$
rises: estimates are noisier, intervals wider, tests less powerful. The $R^2$ falls too, since the same explained variation is now a smaller share of a larger total. But the *location* of the estimate is untouched. This asymmetry — noise in $x$ biases, noise in $y$ only blurs — is the single most useful thing to remember about measurement error.

*Attenuation of $R^2$.* In the bivariate case with the mismeasured regressor $x = x^*+v$,
$$R^2_{\text{observed}} = \operatorname{Corr}(x,y)^2 .$$
Compute the correlation. Since $\operatorname{Cov}(x,y) = \operatorname{Cov}(x^*+v,\ \beta_1x^*+\varepsilon) = \beta_1\operatorname{Var}(x^*)$ and $\operatorname{Var}(x) = \operatorname{Var}(x^*)+\operatorname{Var}(v) = \operatorname{Var}(x^*)/\lambda$:
$$\operatorname{Corr}(x,y)^2 = \frac{\bigl(\beta_1\operatorname{Var}(x^*)\bigr)^2}{\operatorname{Var}(x)\operatorname{Var}(y)} = \frac{\beta_1^2\operatorname{Var}(x^*)^2\,\lambda}{\operatorname{Var}(x^*)\operatorname{Var}(y)} = \lambda\cdot\frac{\beta_1^2\operatorname{Var}(x^*)}{\operatorname{Var}(y)} = \lambda\, R^2_{\text{true}} ,$$
where $R^2_{\text{true}} = \operatorname{Corr}(x^*,y)^2$ is what you would get with the correctly measured regressor. So **the $R^2$ is attenuated by exactly the same factor $\lambda$ as the coefficient.** With $\lambda = 0.75$ a true $R^2$ of $0.40$ appears as $0.30$. This is one reason low $R^2$ values are so common in survey-based work, and another reason not to read anything into them ([1.5](01-05-goodness-of-fit-interpretation.md)).

**P3** *Reduced form.* Set the two equations equal at the equilibrium $(p,q)$:
$$\alpha_0+\alpha_1p+\alpha_2z_d+u_d = \gamma_0+\gamma_1p+\gamma_2z_s+u_s .$$
Solve for $p$:
$$p = \frac{(\gamma_0-\alpha_0) + \gamma_2 z_s - \alpha_2 z_d + (u_s-u_d)}{\alpha_1-\gamma_1} .$$
(With a downward-sloping demand $\alpha_1<0$ and upward-sloping supply $\gamma_1>0$, the denominator $\alpha_1-\gamma_1 < 0$.)

*The covariance.* Treating $z_d, z_s$ as exogenous and taking $u_d\perp u_s$ for clarity,
$$\operatorname{Cov}(p,u_d) = \frac{\operatorname{Cov}(u_s - u_d,\ u_d)}{\alpha_1-\gamma_1} = \frac{-\operatorname{Var}(u_d)}{\alpha_1-\gamma_1} = \frac{\operatorname{Var}(u_d)}{\gamma_1-\alpha_1} \ \neq\ 0 ,$$
which is positive under the usual slope signs. Price is endogenous in the demand equation because a demand shock *moves* the equilibrium price — the classic simultaneity mechanism, requiring no omitted variable and no mismeasurement.

*What OLS converges to.* Regressing $q$ on $p$ (suppressing $z$'s, or treating them as absorbed) gives
$$\hat\beta^{OLS} \xrightarrow{p} \frac{\operatorname{Cov}(p,q)}{\operatorname{Var}(p)} .$$
Using the reduced forms for both $p$ and $q$ with $u_d\perp u_s$, and writing $\sigma_d^2 = \operatorname{Var}(u_d)$, $\sigma_s^2=\operatorname{Var}(u_s)$ (setting the $z$ terms aside, so only the structural shocks move the equilibrium), the standard result is
$$\hat\beta^{OLS} \ \xrightarrow{p}\ \frac{\gamma_1\sigma_d^2 + \alpha_1\sigma_s^2}{\sigma_d^2+\sigma_s^2} \;=\; w\,\gamma_1 + (1-w)\,\alpha_1, \qquad w = \frac{\sigma_d^2}{\sigma_d^2+\sigma_s^2} .$$

**OLS returns a variance-weighted average of the supply and demand slopes**, with weight on the *supply* slope proportional to how much **demand** shifts. That is the mathematical version of the picture: the curve you trace out is the one that stands still, so the more demand jumps around, the more the scatter reveals supply.

*When OLS recovers demand exactly.* Set $w = 0$, i.e. $\sigma_d^2 = 0$: the demand equation has **no** stochastic shock, so demand is a fixed curve and only supply shifts. Then every observed equilibrium lies on the demand curve, and $\hat\beta^{OLS}\to\alpha_1$ exactly.

That condition is essentially never satisfied in practice, which is the point Working made. But it is also the seed of the solution: if you cannot make $\sigma_d^2$ zero, find a variable $z_s$ that shifts supply and is unrelated to $u_d$, and use it to isolate the supply-driven price variation. That variable is an **instrument**, and [3.6](03-06-instrumental-variables.md) is the next lesson.

</details>

## Flashback

**From Lesson 3.3 (regression anatomy — good and bad controls):** A researcher estimates the effect of a scholarship on college completion and controls for first-year GPA, measured after the scholarship was awarded. Classify this control, state what it does to the estimate, and say what the researcher should do instead.

<details>
<summary>Solution</summary>

*Classification: a mediator, and probably a collider too.*

The scholarship plausibly *causes* first-year GPA — money relieves the need to work part-time, reduces stress, allows a lighter course load in a hard first term. GPA in turn causes completion. So GPA sits on the causal path from treatment to outcome: it is a **post-treatment mediator**, and the diagnostic question from [3.3](03-03-regression-anatomy-good-and-bad-controls.md) — *could the treatment have changed this variable?* — returns a clear yes.

It is very likely also a **collider**. Unobserved traits (family support, academic preparation, motivation) affect both GPA and completion. Conditioning on GPA opens a non-causal path between the scholarship and those traits, which then connect to completion. So the "direct effect" that survives is contaminated in an unknown direction.

*What it does to the estimate.* Controlling for GPA asks: *among students with the same first-year GPA, did the scholarship raise completion?* This strips out the entire channel running through academic performance — likely the main one — and biases the estimate **toward zero**, plus an unsigned collider term. A scholarship that works precisely *because* it lets students study instead of working will appear to do almost nothing.

*What to do instead.* Estimate the **total effect**, controlling only for variables determined before the award: high-school record, family income, application-year characteristics, and the eligibility variables that determined the award in the first place. If the scholarship was allocated by a threshold rule on one of those, that is a regression-discontinuity design ([4.7](04-07-regression-discontinuity.md)) and is far more credible than any selection-on-observables specification here.

If the *mechanism* is genuinely the research question — "does the scholarship work through grades or through reduced work hours?" — that is a mediation analysis, which requires its own assumptions (sequential ignorability, essentially: no unmeasured confounding of the mediator-outcome relationship) and must be reported as such, not slipped in as a control. Reporting GPA as a **separate outcome** alongside completion is the cheap, honest alternative, and it usually communicates more: "the scholarship raised first-year GPA by 0.2 and completion by 6 percentage points" is a clearer finding than one contaminated coefficient.

</details>

## Connections

- **Backward:** both problems here produce $\operatorname{Cov}(x,u)\neq 0$, the endogeneity condition named in [3.4](03-04-omitted-variable-bias.md) — the same disease from different causes, which is why the same cure works on all three. The mismeasured-control result composes directly with [3.4](03-04-omitted-variable-bias.md)'s formula, and the simultaneity picture is [1.2](01-02-best-linear-predictor.md)'s BLP faithfully reporting a feature of a joint distribution that answers no structural question.
- **Forward:** [3.6](03-06-instrumental-variables.md) fixes all three at once — a valid instrument is uncorrelated with the error whatever put it there. The demand-and-supply identification argument *is* the instrument idea, and [3.7](03-07-two-stage-least-squares.md) generalises it to systems with several endogenous variables.
- **Sideways:** attenuation is why [`statistical-learning` 2.3](../../statistical-learning/lessons/02-03-ridge-regression-and-shrinkage.md)'s ridge shrinkage and measurement error look formally similar and mean opposite things: ridge shrinks deliberately to reduce prediction error, while measurement error shrinks accidentally and destroys the coefficient's interpretation. A prediction-focused analyst can be indifferent between them; anyone reporting a magnitude cannot.
