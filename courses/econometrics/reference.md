# Econometrics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Econometrics is regression algebra in the service of one question: *what does this
coefficient identify, and under what assumptions is that a causal effect?* This card
holds the notation, the estimators, the assumptions each one rests on, and — most
usefully mid-problem — the formulas for the biases, so you can sign and size a
problem rather than only naming it.

## Scope and ownership

Three courses fit models to the same $X$ and $y$ and want different things. The
split is worth knowing before you look anything up here.

| Topic | Owned by | Note |
|---|---|---|
| Identification, causal parameters, valid standard errors | **this course** | the whole point |
| Prediction, generalization, bias-variance, regularization | [`statistical-learning`](../statistical-learning/syllabus.md) | ridge and lasso as tools for prediction |
| Fitting mechanics of regression, classification algorithms | [`machine-learning`](../machine-learning/syllabus.md) | normal equations, gradient descent, metrics |

**Convention warnings when two cards are open at once.**

- **Logistic regression** appears in all three. Here it is *unpenalized* maximum likelihood, and the object of interest is a marginal effect. The sibling courses typically add a regularization penalty, which biases $\hat\beta$ deliberately — harmless for classification, fatal for the marginal effects reported here.
- **The hat matrix** $H = X(X'X)^{-1}X'$ is identical in all three. Here $\operatorname{tr}(H)=k$ is a degrees-of-freedom count; in `statistical-learning` the same trace measures the optimism of training error.
- **Gauss-Markov** is stated identically and read oppositely: this course treats unbiasedness as the goal, the sibling courses treat it as a constraint worth abandoning.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $m(x) = E[Y\mid X=x]$ | conditional expectation function — average outcome among units with characteristics $x$ | [1.1](lessons/01-01-conditional-expectation-function.md) |
| $\varepsilon$ | CEF error, $Y - m(X)$; mean-independent of $X$ by construction | [1.1](lessons/01-01-conditional-expectation-function.md) |
| $\beta$ | projection (best linear predictor) coefficient, or the structural parameter when a model is asserted | [1.2](lessons/01-02-best-linear-predictor.md) |
| $u$ | projection or structural error; only $E[Xu]=0$ is guaranteed, not $E[u\mid X]=0$ | [1.2](lessons/01-02-best-linear-predictor.md) |
| $H$, $M$ | hat matrix $X(X'X)^{-1}X'$ and residual maker $I-H$ | [1.3](lessons/01-03-ols-algebra-geometry-projection.md) |
| $h_{ii}$ | leverage of observation $i$, the $i$-th diagonal of $H$; $\sum_i h_{ii}=k$ | [1.3](lessons/01-03-ols-algebra-geometry-projection.md) |
| $n$, $k$ | observations and estimated parameters (including the constant) | [1.3](lessons/01-03-ols-algebra-geometry-projection.md) |
| $s^2$ | unbiased error-variance estimate $\hat e'\hat e/(n-k)$ | [1.4](lessons/01-04-gauss-markov-theorem.md) |
| $Q$, $\Omega$ | $E[x_ix_i']$ and $E[x_ix_i'u_i^2]$ — the bread and meat of the sandwich | [2.2](lessons/02-02-consistency-and-asymptotic-normality.md) |
| $G$ | number of clusters. The asymptotics run in $G$, not $n$ | [2.5](lessons/02-05-clustered-standard-errors.md) |
| $\bar n$ | average cluster size | [2.5](lessons/02-05-clustered-standard-errors.md) |
| $\rho_u$, $\rho_x$ | within-cluster correlation of the error and of the regressor | [2.5](lessons/02-05-clustered-standard-errors.md) |
| $m$ (Module 2) | number of hypotheses tested in a family | [2.7](lessons/02-07-multiple-testing-specification-search.md) |
| $Y_i(1)$, $Y_i(0)$ | potential outcomes under treatment and control | [3.1](lessons/03-01-potential-outcomes-identification.md) |
| $D_i$ | binary treatment indicator | [3.1](lessons/03-01-potential-outcomes-identification.md) |
| $\tau_i$, $\tau(x)$ | individual treatment effect $Y_i(1)-Y_i(0)$; conditional average effect at $X=x$ | [3.1](lessons/03-01-potential-outcomes-identification.md) |
| $e(x)$ | propensity score $P(D=1\mid X=x)$ | [3.2](lessons/03-02-selection-on-observables-propensity-score.md) |
| $\delta$, $\pi$ | in the OVB formula: effect of the omitted variable on $y$, and its regression on the included one | [3.4](lessons/03-04-omitted-variable-bias.md) |
| $\lambda$ (Module 3) | reliability ratio $\operatorname{Var}(x^*)/(\operatorname{Var}(x^*)+\operatorname{Var}(v))$ | [3.5](lessons/03-05-measurement-error-and-simultaneity.md) |
| $Z$, $z_i$ | instrument | [3.6](lessons/03-06-instrumental-variables.md) |
| $\pi_1$ | first-stage coefficient; for a binary instrument, the complier share | [3.6](lessons/03-06-instrumental-variables.md) |
| $P_Z$ | projection onto the instrument space, $Z(Z'Z)^{-1}Z'$ | [3.7](lessons/03-07-two-stage-least-squares.md) |
| $\alpha_i$, $\lambda_t$ | unit and time fixed effects | [4.1](lessons/04-01-panel-data-fixed-effects.md) |
| $\ddot z_{it}$ | within-transformed variable, $z_{it}-\bar z_i$ | [4.1](lessons/04-01-panel-data-fixed-effects.md) |
| $\theta$ (Module 4) | quasi-demeaning parameter in random effects | [4.2](lessons/04-02-first-differencing-random-effects.md) |
| $G_i$, $k$ (Module 4) | unit $i$'s adoption period; event time $t-G_i$ | [4.5](lessons/04-05-staggered-adoption-modern-did.md) |
| $h$ | bandwidth in a local linear fit | [4.7](lessons/04-07-regression-discontinuity.md) |
| $\ell(\theta)$, $s_i(\theta)$ | log-likelihood and score | [5.1](lessons/05-01-maximum-likelihood-estimation.md) |
| $I(\theta)$ | Fisher information, $E[ss']$ | [5.1](lessons/05-01-maximum-likelihood-estimation.md) |
| $g(w_i,\theta)$ | GMM moment function; $q$ moments, $k$ parameters | [5.2](lessons/05-02-generalized-method-of-moments.md) |
| $\Phi$, $\phi$ | standard normal cdf and density | [5.3](lessons/05-03-logit-and-probit.md) |
| $\Lambda$ | logistic cdf $e^z/(1+e^z)$ | [5.3](lessons/05-03-logit-and-probit.md) |
| $\lambda(c)$ (Module 5) | inverse Mills ratio $\phi(c)/(1-\Phi(c))$ | [5.4](lessons/05-04-censoring-truncation-sample-selection.md) |
| $\phi$ (Module 5, time series) | AR(1) persistence parameter | [5.5](lessons/05-05-a-taste-of-time-series.md) |

Two symbols are overloaded across modules — $\lambda$ (reliability ratio, time
effect, inverse Mills ratio) and $\phi$ (normal density, AR persistence). The
"first used" column disambiguates; context always does.

## Definitions

### Conditional expectation function

The average outcome among units sharing the same characteristics — a feature of the population, not a model.

$$m(x) = E[Y\mid X=x]$$

It is the best predictor of $Y$ under squared loss among **all** functions of $X$.

*Introduced:* [1.1](lessons/01-01-conditional-expectation-function.md)

### CEF decomposition

Any outcome splits, with no assumptions at all, into the CEF plus an error that averages to zero within every group.

$$Y = m(X)+\varepsilon, \qquad E[\varepsilon\mid X]=0$$

A tautology, which is why it is safe to build on. Consequently $E[h(X)\varepsilon]=0$ for **every** function $h$ — far stronger than $\operatorname{Cov}(X,\varepsilon)=0$.

*Introduced:* [1.1](lessons/01-01-conditional-expectation-function.md)

### Law of iterated expectations

Averaging a conditional average over the conditioning variable gives the unconditional average.

$$E[Y] = E\bigl[E[Y\mid X]\bigr], \qquad E[h(X)Y] = E\bigl[h(X)\,E[Y\mid X]\bigr]$$

The second form is the workhorse: anything that is a function of $X$ passes through the inner expectation untouched.

*Introduced:* [1.1](lessons/01-01-conditional-expectation-function.md) · used throughout

### Best linear predictor

The straight line closest to $Y$ under squared loss — defined whether or not the CEF is linear.

$$\beta = \bigl(E[XX']\bigr)^{-1}E[XY] = \bigl(E[XX']\bigr)^{-1}E[X\,m(X)]$$

It is a weighted average of the CEF's local slopes, weighted toward where $X$ has mass and spread. Two populations with the same CEF but different $X$ distributions have different BLPs.

*Introduced:* [1.2](lessons/01-02-best-linear-predictor.md)

### Projection error

What the BLP leaves behind, $u = Y - X'\beta$.

$$E[Xu]=0 \quad\text{by construction, but generally } E[u\mid X]\neq 0$$

Because it holds by construction, "my residuals are uncorrelated with my regressors" is never evidence of anything.

*Introduced:* [1.2](lessons/01-02-best-linear-predictor.md)

### Normal equations

The first-order condition of least squares, and geometrically a right angle.

$$X'X\hat\beta = X'y \qquad\Longleftrightarrow\qquad X'\hat e = 0$$

With a constant included, this forces $\sum_i\hat e_i = 0$ and makes the fitted line pass through the sample means.

*Introduced:* [1.3](lessons/01-03-ols-algebra-geometry-projection.md)

### Hat matrix

The orthogonal projection onto the column space of the regressors.

$$H = X(X'X)^{-1}X', \qquad M = I_n - H$$

Both symmetric and idempotent, with $HX=X$, $MX=0$, $HM=0$, $\operatorname{tr}(H)=k$ and $\operatorname{tr}(M)=n-k$. Those two traces are the degrees of freedom in every test in the course.

*Introduced:* [1.3](lessons/01-03-ols-algebra-geometry-projection.md)

### Frisch-Waugh-Lovell theorem

"Controlling for" **is** "residualising against".

$$\hat\beta_1 = \bigl(X_1'M_2X_1\bigr)^{-1}X_1'M_2\,y$$

Residualising $X_1$ alone gives the same coefficient; residualising both gives the added-variable plot. When $X_2$ is a full set of group dummies, $M_2$ is the demeaning operator — which is why fixed effects is demeaning.

*Introduced:* [1.3](lessons/01-03-ols-algebra-geometry-projection.md)

### Gauss-Markov theorem

Among estimators linear in $y$ and unbiased for $\beta$, OLS has the smallest variance.

$$\operatorname{Var}(\tilde\beta\mid X) - \operatorname{Var}(\hat\beta\mid X) = \sigma^2 DD' \succeq 0$$

Needs GM1-GM4; **not** normality. "Best" means best within a class you were allowed to enter — biased estimators routinely beat OLS in mean squared error.

*Introduced:* [1.4](lessons/01-04-gauss-markov-theorem.md)

### Strict exogeneity

The error is mean-independent of the regressors in **every** period.

$$E[u_i \mid x_1,\dots,x_n] = 0$$

Much stronger than the contemporaneous condition $E[x_iu_i]=0$ that consistency needs. It is structurally impossible in a model with a lagged dependent variable.

*Introduced:* [1.4](lessons/01-04-gauss-markov-theorem.md)

### Spherical errors

Constant conditional variance and no correlation across observations.

$$\operatorname{Var}(u\mid X) = \sigma^2 I_n$$

Its failure is a standard-error problem, never a bias problem. Contrast strict exogeneity, whose failure is fatal.

*Introduced:* [1.4](lessons/01-04-gauss-markov-theorem.md)

### R-squared

The share of the outcome's sample variance the fitted values reproduce.

$$R^2 = \frac{\mathrm{ESS}}{\mathrm{TSS}} = 1-\frac{\mathrm{RSS}}{\mathrm{TSS}}$$

It never falls when a regressor is added, is not comparable across different left-hand sides, and is unrelated to whether a coefficient means what you claim.

*Introduced:* [1.5](lessons/01-05-goodness-of-fit-interpretation.md)

### Added-variable plot

The scatter your coefficient is actually computed from: residualise both $y$ and $x_1$ against everything else, and plot.

The OLS slope of that scatter equals the multiple-regression coefficient, and its spread is the honest picture of the identifying variation.

*Introduced:* [1.5](lessons/01-05-goodness-of-fit-interpretation.md)

### Multicollinearity

Regressors that overlap leave little independent variation to identify a coefficient.

$$\operatorname{Var}(\hat\beta_j\mid X) = \frac{\sigma^2}{\mathrm{TSS}_j(1-R_j^2)}, \qquad \mathrm{VIF}_j = \frac{1}{1-R_j^2}$$

It inflates variance and biases nothing. Dropping a collinear regressor that belongs in the model trades an honest wide interval for a biased narrow one.

*Introduced:* [1.5](lessons/01-05-goodness-of-fit-interpretation.md)

### Elasticity

Percent per percent — the coefficient in a log-log specification.

$$\beta_1 = \frac{\partial\log y}{\partial\log x} = \frac{\partial y/y}{\partial x/x}$$

Unit-free, so comparable across countries and currencies.

*Introduced:* [1.6](lessons/01-06-functional-form-logs-interactions.md)

### Semi-elasticity

Proportional change in $y$ per one-unit change in $x$ — the coefficient when only the outcome is logged.

$$\beta_1 = \frac{\partial\log y}{\partial x}, \qquad \text{exact discrete effect} = e^{\beta_1}-1$$

The approximation $e^{\beta_1}-1\approx\beta_1$ is harmless below about $0.1$ and a reporting error above $0.2$.

*Introduced:* [1.6](lessons/01-06-functional-form-logs-interactions.md)

### Saturated regression

A full set of dummies for every distinct value of $X$ — no functional form imposed.

Its fitted values are exactly the group means, so a saturated regression **is** the sample CEF. This is why saturated controls guarantee non-negative implicit weights in [3.3](lessons/03-03-regression-anatomy-good-and-bad-controls.md).

*Introduced:* [1.6](lessons/01-06-functional-form-logs-interactions.md)

### Sampling distribution

The distribution of an estimate over the samples the world could have dealt you.

Under GM1-GM5, $\hat\beta\mid X\sim\mathcal N(\beta,\ \sigma^2(X'X)^{-1})$ **exactly**, at any sample size. You never see this distribution; you see one draw from it.

*Introduced:* [2.1](lessons/02-01-sampling-distribution-of-ols.md)

### Consistency

The estimator settles on the right number as the sample grows.

$$\hat\beta \xrightarrow{p}\beta \quad\text{whenever } E[x_iu_i]=0$$

Neither implies nor is implied by unbiasedness: IV is consistent and biased; using only the first observation is unbiased and inconsistent.

*Introduced:* [2.2](lessons/02-02-consistency-and-asymptotic-normality.md)

### Asymptotic normality

Rescale the error by exactly enough to stop it collapsing, and the limit is normal.

$$\sqrt n(\hat\beta-\beta)\ \xrightarrow{d}\ \mathcal N\bigl(0,\ Q^{-1}\Omega Q^{-1}\bigr)$$

*Introduced:* [2.2](lessons/02-02-consistency-and-asymptotic-normality.md)

### Delta method

The standard error of a smooth function of an estimate: linearise, and the slope scales the standard deviation.

$$\sqrt n\bigl(g(\hat\theta)-g(\theta)\bigr)\xrightarrow{d}\mathcal N(0,\ GVG'), \qquad \mathrm{se}\bigl(g(\hat\theta)\bigr)\approx |g'(\hat\theta)|\,\mathrm{se}(\hat\theta)$$

When $g$ is monotone, prefer transforming the interval **endpoints** — it respects the nonlinearity and cannot produce impossible values.

*Introduced:* [2.2](lessons/02-02-consistency-and-asymptotic-normality.md)

### Sandwich variance

The general variance formula. Every familiar simplification is this expression under an assumption that usually fails.

$$\operatorname{Avar}(\hat\beta) = Q^{-1}\,\Omega\,Q^{-1}$$

Collapses to $\sigma^2Q^{-1}$ only under homoskedasticity. The same structure appears as $A^{-1}BA^{-1}$ for maximum likelihood and $(G'WG)^{-1}G'WSWG(G'WG)^{-1}$ for GMM — one theorem, three costumes.

*Introduced:* [2.2](lessons/02-02-consistency-and-asymptotic-normality.md) · estimated in [2.4](lessons/02-04-heteroskedasticity-robust-standard-errors.md)

### Wald statistic

The squared distance from a restriction, measured in the estimator's own covariance.

$$W = (R\hat\beta - r)'\bigl[R\widehat{\operatorname{Var}}(\hat\beta)R'\bigr]^{-1}(R\hat\beta-r) \ \xrightarrow{d}\ \chi^2_q$$

For one restriction $W = t^2$, so a single-restriction $F$-test and $t$-test never disagree. Every test in Modules 3-5 is this form with a different variance plugged in.

*Introduced:* [2.3](lessons/02-03-hypothesis-tests-confidence-intervals.md)

### Confidence interval by inversion

An interval is the set of null values a test would not reject.

$$\bigl\{c : |\hat\beta_j - c|\le c_\alpha\,\mathrm{se}(\hat\beta_j)\bigr\} = \bigl[\hat\beta_j \pm c_\alpha\mathrm{se}\bigr]$$

Reading it this way generalises to cases with no estimate-plus-or-minus formula, such as Anderson-Rubin sets under weak instruments.

*Introduced:* [2.3](lessons/02-03-hypothesis-tests-confidence-intervals.md)

### Heteroskedasticity

Error variance that depends on the regressors.

Leaves $\hat\beta$ unbiased and consistent; breaks only the variance formula. Guaranteed rather than incidental for binary outcomes, since $\operatorname{Var}(y\mid x)=p(x)(1-p(x))$ moves with the mean.

*Introduced:* [2.4](lessons/02-04-heteroskedasticity-robust-standard-errors.md)

### Cluster-robust variance

Sum the scores **within** each cluster before squaring, which preserves the within-cluster correlation.

$$\widehat{\operatorname{Var}}_{\text{CR}}(\hat\beta) = c\,(X'X)^{-1}\Bigl(\sum_{g=1}^G s_gs_g'\Bigr)(X'X)^{-1}, \qquad s_g = \sum_{i\in\mathcal G_g}x_i\hat e_i$$

Setting every cluster to size one recovers White exactly. The asymptotics run in $G$, so report $G$ alongside $n$.

*Introduced:* [2.5](lessons/02-05-clustered-standard-errors.md)

### Moulton factor

How much ignoring clustering understates the variance.

$$\frac{\operatorname{Var}_{\text{CR}}}{\operatorname{Var}_{\text{classical}}} = 1+\rho_x\rho_u(\bar n - 1)$$

Three factors multiply: error correlation, regressor correlation, and cluster size. If the treatment is assigned at the cluster level then $\rho_x = 1$ and only the other two protect you.

*Introduced:* [2.5](lessons/02-05-clustered-standard-errors.md)

### Effective sample size

How many independent observations a correlated cluster is actually worth.

$$n_{\text{eff}} = \frac{n_g}{1+\rho_u(n_g-1)} \ \longrightarrow\ \frac{1}{\rho_u} \quad\text{as } n_g\to\infty$$

A cluster is never worth more than $1/\rho_u$ observations however large it grows. Buy precision with **more clusters, not bigger ones**.

*Introduced:* [2.5](lessons/02-05-clustered-standard-errors.md)

### Wild cluster bootstrap

Flip the sign of every residual in a cluster together, imposing the null, and bootstrap the $t$-statistic.

Preserves within-cluster correlation because $v_g^2=1$ leaves all within-cluster products untouched. Report it whenever $G < 40$. Hard limit: only $2^G$ sign vectors exist, so the finest two-sided $p$-value is $2/2^G$.

*Introduced:* [2.6](lessons/02-06-bootstrap-and-few-clusters.md)

### Randomization inference

Re-run the assignment mechanism and rank the observed statistic among the alternatives it could have produced.

$$p = \frac{\text{assignments at least as extreme}}{\text{total assignments}}$$

Exact, assumption-free, and defined directly on potential outcomes under the sharp null. Its floor is $2/\binom{n}{n_1}$ — with 3 versus 3 the smallest attainable $p$ is $0.10$.

*Introduced:* [2.6](lessons/02-06-bootstrap-and-few-clusters.md)

### Family-wise error rate

The probability of **any** false rejection across a family of tests.

$$P(\text{at least one}) = 1-(1-\alpha)^m$$

Controlled by Bonferroni ($\alpha/m$) or, uniformly better at no cost, Holm's step-down. Romano-Wolf uses the bootstrap to exploit correlation between tests and recovers most of the lost power.

*Introduced:* [2.7](lessons/02-07-multiple-testing-specification-search.md)

### False discovery rate

The expected **share** of your rejections that are false.

Benjamini-Hochberg: sort $p$-values ascending, find the largest $j$ with $p_{(j)}\le jq/m$, reject up to it. Far more powerful than family-wise control when many alternatives are true, and the right target when screening.

*Introduced:* [2.7](lessons/02-07-multiple-testing-specification-search.md)

### Potential outcomes

Two numbers per unit: what would happen if treated, and if not. The effect is their difference.

$$\tau_i = Y_i(1)-Y_i(0), \qquad Y_i = D_iY_i(1)+(1-D_i)Y_i(0)$$

You only ever observe one of the two. Causal inference is a missing-data problem, and every method here is a strategy for borrowing the missing half from a comparable unit.

*Introduced:* [3.1](lessons/03-01-potential-outcomes-identification.md)

### SUTVA

No interference between units, and a single version of the treatment.

Fails for vaccines, for job training that shifts who gets hired, and for anything with equilibrium effects — and when it fails, $Y_i(1)$ is not even well defined.

*Introduced:* [3.1](lessons/03-01-potential-outcomes-identification.md)

### ATE, ATT and ATC

Three averages of the same individual effects over different populations.

$$\mathrm{ATE} = E[\tau_i], \qquad \mathrm{ATT} = E[\tau_i\mid D_i=1], \qquad \mathrm{ATC} = E[\tau_i\mid D_i=0]$$

They differ whenever people select into treatment on their expected gains — which, for a voluntary program, they do. Which one a policy question wants is a substantive decision.

*Introduced:* [3.1](lessons/03-01-potential-outcomes-identification.md)

### Selection bias

The gap between a naive comparison and the effect, written exactly.

$$\underbrace{E[Y\mid D=1]-E[Y\mid D=0]}_{\text{computable}} = \mathrm{ATT} + \underbrace{E[Y(0)\mid D=1]-E[Y(0)\mid D=0]}_{\text{selection bias}}$$

The bias term compares the two groups on their **untreated** outcome. Randomisation does not make confounders irrelevant to the outcome; it makes them independent of treatment, which sets this term to zero.

*Introduced:* [3.1](lessons/03-01-potential-outcomes-identification.md)

### Identification

A parameter is identified if the distribution of observable data determines it uniquely.

A property of the population problem, prior to estimation. Sampling error shrinks with $n$; identification failure does not. A hundred million observations of an unidentified parameter give a very precise estimate of the wrong thing.

*Introduced:* [3.1](lessons/03-01-potential-outcomes-identification.md)

### Conditional independence assumption

Within cells of $X$, who got treated is unrelated to how they would have responded.

$$\bigl(Y(1),Y(0)\bigr)\ \perp\ D \ \bigm|\ X$$

Also called unconfoundedness, ignorability, or selection on observables. **Untestable** — it concerns the variables you did not measure, and balance tests speak only to the ones you did.

*Introduced:* [3.2](lessons/03-02-selection-on-observables-propensity-score.md)

### Overlap

At every value of the covariates, both treatment and control must be possible.

$$0 < e(x) < 1$$

Where it fails there is nothing to compare and any estimate is extrapolation from functional form. **Always plot the overlap before reporting anything.**

*Introduced:* [3.2](lessons/03-02-selection-on-observables-propensity-score.md)

### Propensity score

The probability of treatment given covariates, $e(x)=P(D=1\mid X=x)$.

By Rosenbaum-Rubin, conditioning on $e(X)$ alone suffices if conditioning on $X$ does — a reduction from many dimensions to one. Inverse-probability weighting uses $1/e$ for treated and $1/(1-e)$ for controls, so a unit at $e=0.01$ carries the weight of a hundred typical ones.

*Introduced:* [3.2](lessons/03-02-selection-on-observables-propensity-score.md)

### Regression anatomy

What OLS actually averages when you "control for" something.

$$\hat\beta_D \xrightarrow{p} \frac{E\bigl[\sigma_D^2(X)\,\tau(X)\bigr]}{E\bigl[\sigma^2_D(X)\bigr]}, \qquad \sigma^2_D(X)=e(X)\bigl(1-e(X)\bigr)$$

A $\operatorname{Var}(D\mid X)$-weighted average of conditional effects — neither the ATE (cell sizes) nor the ATT (treated counts). Weights are non-negative only when the controls are **saturated**; otherwise they can be negative and the estimate can fall outside the range of every conditional effect.

*Introduced:* [3.3](lessons/03-03-regression-anatomy-good-and-bad-controls.md)

### Good and bad controls

Regression cannot tell a cause from a consequence; you must.

| Type | Structure | Effect of controlling |
|---|---|---|
| confounder | $W$ causes $D$ and $Y$ | removes bias — include |
| mediator | $D$ causes $W$ causes $Y$ | removes the effect you wanted |
| collider | $D$ and $Y$ both cause $W$ | creates bias from nothing |

The test before adding any control: **could the treatment have changed this variable?** If yes, it is not a control.

*Introduced:* [3.3](lessons/03-03-regression-anatomy-good-and-bad-controls.md)

### Collider bias

Conditioning on a common effect of two independent causes makes them dependent.

If both raise the chance of an event, then among cases where it occurred, learning one cause was absent makes the other more likely. Sample selection **is** collider bias: conditioning on being observed, when observation depends on the outcome, is the same operation.

*Introduced:* [3.3](lessons/03-03-regression-anatomy-good-and-bad-controls.md)

### Omitted-variable bias

Short equals long plus the omitted variable's effect times its regression on the included one.

$$\gamma_1 = \beta_1 + \delta\,\pi , \qquad \pi = \frac{\operatorname{Cov}(D,W)}{\operatorname{Var}(D)}$$

Sign both factors before arguing about magnitude. Either being zero kills the bias, which is why randomising $D$ works regardless of how large $\delta$ is.

*Introduced:* [3.4](lessons/03-04-omitted-variable-bias.md)

### Classical measurement error

Additive noise in a regressor, uncorrelated with the truth, shrinks its coefficient by exactly the reliability ratio.

$$\hat\beta_1 \xrightarrow{p} \lambda\beta_1, \qquad \lambda = \frac{\operatorname{Var}(x^*)}{\operatorname{Var}(x^*)+\operatorname{Var}(v)} \in (0,1)$$

**Always toward zero** — the one bias with a known direction. Noise in the *outcome* costs only precision. Noise in a *control* leaks bias onto the coefficient of interest. Non-classical error (binary misclassification, error correlated with the truth) breaks the guarantee.

*Introduced:* [3.5](lessons/03-05-measurement-error-and-simultaneity.md)

### Simultaneity

When $y$ affects $x$ as well as the reverse, the observed scatter traces out whichever relationship stood still.

$$\hat\beta^{OLS}\xrightarrow{p} w\gamma_1+(1-w)\alpha_1, \qquad w = \frac{\sigma^2_d}{\sigma^2_d+\sigma^2_s}$$

A variance-weighted mixture of the two structural slopes. To identify demand you need something that shifts **supply**, and conversely — which is the instrumental-variables idea arriving from the structural-equations tradition.

*Introduced:* [3.5](lessons/03-05-measurement-error-and-simultaneity.md)

### Instrumental variable

A source of variation in the treatment with no other route to the outcome.

$$\beta_1 = \frac{\operatorname{Cov}(Z,Y)}{\operatorname{Cov}(Z,D)} = \frac{\text{reduced form}}{\text{first stage}}$$

Fixes all three endogeneity sources at once, because the exclusion restriction is agnostic about what put the correlation in the error.

*Introduced:* [3.6](lessons/03-06-instrumental-variables.md)

### Exclusion restriction

The instrument affects the outcome only through the treatment, and is unrelated to the confounders.

**Not testable.** It is an argument from institutional knowledge, and no statistic in your output substitutes for it. Relevance, by contrast, is a first-stage regression you can look at — and the asymmetry is the thing to internalise.

*Introduced:* [3.6](lessons/03-06-instrumental-variables.md)

### Wald estimator

The binary-instrument form of IV: scale the intention-to-treat by the take-up it induced.

$$\hat\beta^{Wald} = \frac{E[Y\mid Z=1]-E[Y\mid Z=0]}{E[D\mid Z=1]-E[D\mid Z=0]}$$

*Introduced:* [3.6](lessons/03-06-instrumental-variables.md)

### Two-stage least squares

Project the endogenous regressors onto the instrument space, then run OLS on the projection.

$$\hat\beta_{2SLS} = (X'P_ZX)^{-1}X'P_Zy, \qquad P_Z = Z(Z'Z)^{-1}Z'$$

The clean part of the treatment is kept and the contaminated residual discarded. Do **not** run the two stages by hand — the coefficient is right and the standard error is wrong, because the residuals must be $y-X\hat\beta$, not $y-\hat X\hat\beta$.

*Introduced:* [3.7](lessons/03-07-two-stage-least-squares.md)

### Order and rank conditions

Counting instruments is necessary; independent relevance is what is sufficient.

$$\text{order: } m\ge k_1 \qquad \text{rank: } E[Z_iX_i'] \text{ has full column rank } k$$

The order condition can hold while the rank condition fails — for instance if every instrument moves only one of two endogenous regressors. Check a first-stage $F$ for **each** endogenous regressor separately.

*Introduced:* [3.7](lessons/03-07-two-stage-least-squares.md)

### J-test

With more moments than parameters, their residual disagreement is a test.

$$J = n\,\bar g_n(\hat\theta)'\hat S^{-1}\bar g_n(\hat\theta) \ \xrightarrow{d}\ \chi^2_{q-k}$$

Tests only the **surplus** restrictions, taking $k$ of them as maintained. Identically zero when just-identified, so **over-identification is the only source of testable content**. Passing proves nothing if all instruments are invalid the same way; rejecting may signal heterogeneous effects rather than invalidity.

*Introduced:* [3.7](lessons/03-07-two-stage-least-squares.md) · generalised in [5.2](lessons/05-02-generalized-method-of-moments.md)

### Weak instrument

A first stage small relative to noise, which breaks the point estimate and the interval separately.

$$\text{relative bias toward OLS}\approx\frac1F, \qquad \text{bias from an exclusion violation} = \frac{\eta}{\pi_1}$$

$F>10$ is a **bias** rule; valid $t$-inference needs roughly $F>104.7$. Weakness and invalidity compound — a weak instrument multiplies any exclusion violation by $1/\pi_1$.

*Introduced:* [3.8](lessons/03-08-weak-instruments-and-late.md)

### LATE

Even a strong, valid instrument identifies only the effect for the people it moved.

$$\frac{E[Y\mid Z=1]-E[Y\mid Z=0]}{E[D\mid Z=1]-E[D\mid Z=0]} = E\bigl[Y_i(1)-Y_i(0)\ \big|\ \text{complier}\bigr]$$

The first stage **is** the complier share, so a first stage of $0.05$ means the estimate describes 5 percent of the population. There is no general direction to the LATE-versus-ATE gap. **Describe your compliers.**

*Introduced:* [3.8](lessons/03-08-weak-instruments-and-late.md)

### Monotonicity

The instrument pushes everyone the same direction, or not at all — no defiers.

$$D_i(1)\ \ge\ D_i(0) \quad\text{for all } i$$

Load-bearing, not a regularity condition: with defiers the Wald ratio is a *difference* of complier and defier effects over a *difference* of shares, and can fall outside the range of every individual effect.

*Introduced:* [3.8](lessons/03-08-weak-instruments-and-late.md)

### Complier

A unit treated when the instrument pushes and untreated otherwise.

| Type | $D(0)$ | $D(1)$ | Contributes to IV? |
|---|---|---|---|
| never-taker | $0$ | $0$ | no |
| always-taker | $1$ | $1$ | no |
| complier | $0$ | $1$ | **yes** |
| defier | $1$ | $0$ | ruled out by monotonicity |

Always-takers and never-takers have identical outcomes under both instrument values, so they cancel from numerator and denominator alike.

*Introduced:* [3.8](lessons/03-08-weak-instruments-and-late.md)

### Unit fixed effect

An unobserved time-invariant term $\alpha_i$, allowed to be arbitrarily correlated with the regressors.

Removing it is the whole appeal of panel data: you never have to measure the confounder, only assume it does not change.

*Introduced:* [4.1](lessons/04-01-panel-data-fixed-effects.md)

### Within transformation

Subtract each unit's own mean; the fixed effect cancels.

$$y_{it}-\bar y_i = (x_{it}-\bar x_i)'\beta + (u_{it}-\bar u_i)$$

**Numerically identical** to including a dummy per unit (FWL), which is what makes it computable on millions of units. It also annihilates every time-invariant regressor, and it amplifies measurement error, because demeaning removes signal and keeps noise.

*Introduced:* [4.1](lessons/04-01-panel-data-fixed-effects.md)

### First differencing

Subtract the previous period rather than the unit mean.

$$\Delta y_{it} = \Delta x_{it}'\beta + \Delta u_{it}$$

**Identical to within at $T=2$.** Beyond that: fixed effects is efficient if $u_{it}$ is serially uncorrelated, first differencing if $u_{it}$ is a random walk. A large disagreement between them is a specification warning, not a menu.

*Introduced:* [4.2](lessons/04-02-first-differencing-random-effects.md)

### Random effects

Assume $\alpha_i$ is uncorrelated with the regressors, and quasi-demean by a fraction.

$$y_{it}-\theta\bar y_i = (x_{it}-\theta\bar x_i)'\beta + \text{error}, \qquad \theta = 1-\sqrt{\frac{\sigma^2_u}{\sigma^2_u+T\sigma^2_\alpha}}$$

$\theta=0$ is pooled OLS, $\theta=1$ is fixed effects, and $\theta\to 1$ as $T$ grows. Buys efficiency and coefficients on time-invariant regressors; costs an assumption economics usually refuses. The case where it helps most (short $T$) is the case where it is most dangerous.

*Introduced:* [4.2](lessons/04-02-first-differencing-random-effects.md)

### Hausman test

If the two estimators disagree by more than sampling noise, the random-effects assumption is rejected.

$$H = (\hat\beta_{FE}-\hat\beta_{RE})'\bigl[\widehat{\operatorname{Var}}(\hat\beta_{FE})-\widehat{\operatorname{Var}}(\hat\beta_{RE})\bigr]^{-1}(\hat\beta_{FE}-\hat\beta_{RE})\ \xrightarrow{d}\ \chi^2_q$$

The variance difference can be non-positive-definite in finite samples; prefer the Mundlak regression-based version, which adds $\bar x_i$ to the RE specification and tests its coefficients jointly. A rejection is diagnosis, not prescription.

*Introduced:* [4.2](lessons/04-02-first-differencing-random-effects.md)

### Difference-in-differences

Subtract the control group's change from the treated group's.

$$\mathrm{ATT} = \bigl(E[Y\mid T,1]-E[Y\mid T,0]\bigr)-\bigl(E[Y\mid C,1]-E[Y\mid C,0]\bigr)$$

Identifies the **ATT**, nothing more. The regression form $Y_{it}=\alpha_i+\lambda_t+\beta D_{it}+u_{it}$ is two-way fixed effects, and $\hat\beta$ is an interaction coefficient. **Cluster by unit, always.**

*Introduced:* [4.3](lessons/04-03-difference-in-differences.md)

### Parallel trends

Absent treatment, the two groups would have moved in parallel.

$$E[Y_{i1}(0)-Y_{i0}(0)\mid T] = E[Y_{i1}(0)-Y_{i0}(0)\mid C]$$

Untestable, because it concerns the treated group's unobserved counterfactual. Levels are irrelevant — DiD differences them away. Note that parallel trends **in levels** and **in logs** are different assumptions, and both cannot hold unless the effect is zero.

*Introduced:* [4.3](lessons/04-03-difference-in-differences.md)

### Event study

One coefficient per period relative to treatment, with $k=-1$ normalised to zero.

$$Y_{it}=\alpha_i+\lambda_t+\sum_{k\neq -1}\beta_k\mathbf 1\{t-E_i=k\}+u_{it}$$

Makes pre-trends visible and dynamics readable. Only differences between coefficients are identified, so the normalisation period matters — an Ashenfelter dip at $k=-1$ shifts the whole plot.

*Introduced:* [4.4](lessons/04-04-event-studies-dynamic-did.md)

### Minimum detectable violation

What a pre-trend test could have caught — the number to report alongside its $p$-value.

For a linear pre-trend of slope $s$ with $J$ pre-periods and standard error $\sigma_{\text{pre}}$, roughly $J\,s \approx 2.8\,\sigma_{\text{pre}}$ for 80 percent power. Extrapolate that $s$ over the post-periods: if the implied spurious effect is comparable to your estimate, "no evidence of pre-trends" establishes very little.

*Introduced:* [4.4](lessons/04-04-event-studies-dynamic-did.md)

### Goodman-Bacon decomposition

Two-way fixed effects is a weighted average of all pairwise 2x2 comparisons, of three kinds.

| Comparison | Status |
|---|---|
| early adopter vs never-treated | clean |
| later adopter vs not-yet-treated | clean |
| later adopter vs **already-treated** | **contaminated** |

The third subtracts the control unit's own evolving treatment effect, and can receive a **negative weight**.

*Introduced:* [4.5](lessons/04-05-staggered-adoption-modern-did.md)

### Negative weights under staggered adoption

With staggered timing and dynamic effects, TWFE is a weighted sum whose weights are set by the timing structure, not by anything you care about.

It can therefore fall **outside the range of every individual treatment effect**, including the opposite sign. TWFE recovers the ATT if and only if effects are constant across units **and** across time since treatment — which a phase-in already breaks.

The modern estimators (Callaway and Sant Anna, Sun and Abraham, Borusyak and coauthors, de Chaisemartin and DHaultfoeuille) share one rule: **never use an already-treated unit as a control.**

*Introduced:* [4.5](lessons/04-05-staggered-adoption-modern-did.md)

### Synthetic control

Build the counterfactual as a convex combination of never-treated donors matched on the pre-period.

$$\min_W\ (X_1-X_0W)'V(X_1-X_0W) \quad\text{s.t.}\quad w_j\ge 0,\ \sum_j w_j = 1$$

The constraints prevent extrapolation, so the method **fails visibly** — a poor pre-treatment fit means the treated unit lies outside the donor pool's convex hull and the study should not be run. Its identifying assumption is weaker than parallel trends: it allows unobserved confounders to have time-varying effects.

*Introduced:* [4.6](lessons/04-06-synthetic-control.md)

### Placebo inference

Refit the whole procedure pretending each donor was treated, and rank the real result.

$$p = \frac{\text{units with an RMSPE ratio at least as large}}{J+1}$$

The **ratio** of post- to pre-treatment RMSPE is the statistic, not the raw gap, because a badly-fitting donor shows a large gap for reasons unrelated to treatment. Floor: $1/(J+1)$, so 19 donors are needed for a 5 percent result at rank one.

*Introduced:* [4.6](lessons/04-06-synthetic-control.md)

### Regression discontinuity

Read the effect off the jump at an administrative cutoff.

$$\tau_{RD} = \lim_{x\downarrow c}E[Y\mid X=x]-\lim_{x\uparrow c}E[Y\mid X=x] = E\bigl[Y_i(1)-Y_i(0)\mid X_i=c\bigr]$$

Identifies the effect **for units exactly at the cutoff**. Rests on continuity of the potential-outcome CEFs, which is weaker than parallel trends and much weaker than conditional independence.

*Introduced:* [4.7](lessons/04-07-regression-discontinuity.md)

### Bandwidth and the RD bias-variance trade

Narrow the window to cut bias, at the cost of precision.

$$\text{bias} = -\frac{(c_1-c_0)h^2}{6}, \qquad \operatorname{Var}\propto\frac{1}{nh}, \qquad h^*\propto n^{-1/5}$$

Halving the bandwidth quarters the bias. Note the bias depends on the **difference** in curvature across the cutoff, so a design with matching curvature has no bias at any bandwidth — which is why a **flat bandwidth-sensitivity plot** is genuine evidence of robustness.

*Introduced:* [4.7](lessons/04-07-regression-discontinuity.md)

### Fuzzy RD

The cutoff shifts the *probability* of treatment; divide the outcome jump by the treatment jump.

$$\tau_{\text{fuzzy}} = \frac{\text{jump in } E[Y]}{\text{jump in } P(D=1)}$$

This is IV with the threshold indicator as the instrument, so it identifies a LATE for compliers at the cutoff and inherits every weak-instrument warning.

*Introduced:* [4.7](lessons/04-07-regression-discontinuity.md)

### McCrary density test

If units manipulate the running variable, the **density** of $X$ jumps at the cutoff.

The rare case in this course of a genuinely testable identifying assumption. Run it first — it costs nothing and tells you before any analysis whether the design exists.

*Introduced:* [4.7](lessons/04-07-regression-discontinuity.md)

### Log-likelihood and score

Pick the parameters making the observed data most probable; the first-order condition sets the average score to zero.

$$\ell(\theta)=\sum_i\log f(y_i\mid x_i;\theta), \qquad s_i(\theta)=\frac{\partial\log f}{\partial\theta}, \qquad \sum_i s_i(\hat\theta)=0$$

"Set the average score to zero" is a moment condition — the bridge to GMM.

*Introduced:* [5.1](lessons/05-01-maximum-likelihood-estimation.md)

### Fisher information

The curvature of the log-likelihood at its peak, which **is** the precision.

$$I(\theta)=E[s_is_i'], \qquad \sqrt n(\hat\theta-\theta_0)\xrightarrow{d}\mathcal N\bigl(0,I(\theta_0)^{-1}\bigr)$$

Sharp peak, precise estimate; flat peak, many parameter values explain the data nearly as well. The variance attains the Cramer-Rao bound, so MLE is asymptotically efficient among all consistent estimators — provided the distributional family is right.

*Introduced:* [5.1](lessons/05-01-maximum-likelihood-estimation.md)

### Information matrix equality

The variance of the score equals minus the expected curvature — but only if the model is correct.

$$I(\theta_0) = E[s_is_i'] = -E\left[\frac{\partial^2\log f}{\partial\theta\,\partial\theta'}\right]$$

Its failure is what turns $I^{-1}$ back into a sandwich, and the gap between the two sides is White's information-matrix test.

*Introduced:* [5.1](lessons/05-01-maximum-likelihood-estimation.md)

### Quasi-maximum likelihood

Under misspecification the MLE converges to the Kullback-Leibler minimiser, with a sandwich variance.

$$\operatorname{Avar}(\hat\theta)=A^{-1}BA^{-1}, \qquad A = -E\Bigl[\tfrac{\partial^2\log f}{\partial\theta\partial\theta'}\Bigr], \quad B = E[ss']$$

The important exception: for a **linear exponential family** (normal, Poisson, binomial, gamma), a correctly specified conditional **mean** suffices for consistency of the mean parameters. This is why Poisson pseudo-MLE with robust standard errors is the standard tool for exponential-mean models — it delivers an elasticity and handles zeros natively.

*Introduced:* [5.1](lessons/05-01-maximum-likelihood-estimation.md)

### Generalized method of moments

Choose the parameter making a sample average as close to zero as possible.

$$\hat\theta_{GMM}=\arg\min_\theta\ \bar g_n(\theta)'W_n\bar g_n(\theta), \qquad E[g(w_i,\theta_0)]=0$$

Every estimator in this course is a special case: OLS with $g = x(y-x'\beta)$, IV and 2SLS with $g=z(y-x'\beta)$, MLE with $g = s(\theta)$. When $q=k$ the weight matrix is irrelevant and the moments are solved exactly.

*Introduced:* [5.2](lessons/05-02-generalized-method-of-moments.md)

### Optimal weighting

Weight each moment by the inverse of its variance, so noisy conditions count less.

$$W = S^{-1}, \qquad \operatorname{Avar}(\hat\theta)=(G'S^{-1}G)^{-1}, \qquad S = E[gg'],\ G=E[\partial g/\partial\theta']$$

2SLS is GMM with $W=(Z'Z/n)^{-1}$, optimal only under homoskedasticity; two-step efficient GMM improves on it otherwise. Two-step GMM is biased with many moments, for the same reason 2SLS is biased with many weak instruments.

*Introduced:* [5.2](lessons/05-02-generalized-method-of-moments.md)

### Latent-variable model

An unobserved continuous variable crosses a threshold, and you see only whether it did.

$$y_i^* = x_i'\beta+\varepsilon_i, \qquad y_i = \mathbf 1\{y_i^*>0\}, \qquad P(y_i=1\mid x_i)=F(x_i'\beta)$$

Scale is not identified, so $\operatorname{Var}(\varepsilon)$ must be normalised: probit sets it to $1$, logit to $\pi^2/3$. Hence **logit coefficients are about $\pi/\sqrt3 = 1.814$ times probit coefficients** on the same data.

*Introduced:* [5.3](lessons/05-03-logit-and-probit.md)

### Marginal effect

The coefficient is not the effect; the effect depends on where you evaluate it.

$$\frac{\partial P(y=1\mid x)}{\partial x_j}=f(x'\beta)\,\beta_j$$

Report the **average partial effect** $\frac1n\sum_i f(x_i'\beta)\beta_j$ rather than the effect at the mean, and say which you used. For a **discrete** regressor take a difference, not a derivative. Ratios of marginal effects equal ratios of coefficients and are scale-free, which is why willingness-to-pay calculations are robust while coefficient comparisons are not.

*Introduced:* [5.3](lessons/05-03-logit-and-probit.md)

### Linear probability model

OLS on a binary outcome — with real faults and real advantages.

Faults: predictions outside $[0,1]$, and heteroskedasticity that is guaranteed rather than incidental, so robust standard errors are mandatory. Advantages: the coefficient **is** the marginal effect, fixed effects work without the incidental-parameters problem, and IV and DiD extend trivially. **A defensible default for a causal estimand with a binary outcome**, provided fitted probabilities stay away from the boundaries.

*Introduced:* [5.3](lessons/05-03-logit-and-probit.md)

### Incidental-parameters problem

Unit fixed effects in a **nonlinear** panel model do not behave as they do in the linear case.

With $T$ fixed, the $\alpha_i$ are estimated inconsistently and contaminate $\beta$ — for logit at $T=2$ the bias is a factor of two. Conditional logit avoids it; **probit has no such fix**. A strong practical argument for the linear probability model in panel settings.

*Introduced:* [5.3](lessons/05-03-logit-and-probit.md)

### Tobit

A latent outcome observed only above a limit, with the rest recorded at the corner.

$$y_i = \max(0,\ y_i^*), \qquad \frac{\partial E[y\mid x]}{\partial x_j}=\Phi\!\left(\frac{x'\beta}{\sigma}\right)\beta_j$$

$\beta_j$ is the effect on the **latent** variable; the observed marginal effect is scaled by the uncensored fraction. Tobit forces one parameter vector to govern both participation and amount, and being MLE it is inconsistent if that is wrong — two-part models are usually preferable.

*Introduced:* [5.4](lessons/05-04-censoring-truncation-sample-selection.md)

### Inverse Mills ratio

The expected value of a standard normal given that it exceeded a threshold.

$$\lambda(c)=\frac{\phi(c)}{1-\Phi(c)} = E[Z\mid Z>c], \qquad \text{truncated slope} = \beta_j\bigl[1-\lambda(c)(\lambda(c)-c)\bigr]$$

The attenuation factor is severe even for mild truncation: $0.63$ at $c=-1$, $0.36$ at $c=0$, $0.20$ at $c=1$. Truncating on the **outcome** is what does the damage; truncating on a regressor is harmless.

*Introduced:* [5.4](lessons/05-04-censoring-truncation-sample-selection.md)

### Heckman selection correction

Sample selection is omitted-variable bias with the inverse Mills ratio as the omitted variable.

$$E[y_i\mid x_i, d_i=1]=x_i'\beta+\rho\sigma_u\,\lambda(-z_i'\gamma)$$

Two steps: probit for selection, then add $\hat\lambda_i$ to the outcome regression. The bias vanishes exactly when $\rho=0$, so the $t$-test on $\hat\lambda$ is a test for selection bias. **Needs an exclusion restriction** — a variable in $z$ but not $x$ — because $\lambda$ is nearly linear over most of its range, so identification by functional form alone is fragile.

*Introduced:* [5.4](lessons/05-04-censoring-truncation-sample-selection.md)

### Stationarity

A stable mean and variance, with correlations depending only on the distance between observations.

$$E[y_t]=\mu, \quad \operatorname{Var}(y_t)=\sigma^2<\infty, \quad \operatorname{Cov}(y_t,y_{t-h})=\gamma_h$$

Required for the LLN and CLT of [2.2](lessons/02-02-consistency-and-asymptotic-normality.md) to apply at all — a nonstationary series has no population mean for an average to converge to.

*Introduced:* [5.5](lessons/05-05-a-taste-of-time-series.md)

### Unit root

An AR(1) with $\phi=1$: shocks are permanent and the variance grows without bound.

$$y_t = y_{t-1}+\varepsilon_t, \qquad \operatorname{Var}(y_t)=t\sigma^2_\varepsilon\to\infty$$

Dickey-Fuller tests it, with the unit root as the **null** — so failing to reject is not evidence of stationarity, and these tests have poor power against $\phi$ near one.

*Introduced:* [5.5](lessons/05-05-a-taste-of-time-series.md)

### Spurious regression

Two independent random walks appear strongly related, and more data makes it worse.

At $T=120$, over 4,000 replications: the nominal 5 percent test rejects **79.6 percent** of the time, median $R^2 = 0.175$, median $|t| = 5.04$. After differencing the rejection rate is $0.056$. The $t$-statistic diverges like $\sqrt T$ because the residuals are themselves nonstationary.

*Introduced:* [5.5](lessons/05-05-a-taste-of-time-series.md)

### Cointegration

Two nonstationary series tied together by a stationary linear combination.

$$y_t,\ x_t \sim I(1) \quad\text{but}\quad u_t = y_t-\beta x_t \sim I(0)$$

Then the levels regression is **not** spurious and $\hat\beta$ is **superconsistent**, converging at rate $T$ rather than $\sqrt T$. Test with Engle-Granger (unit root in the residuals, using cointegration critical values, not standard ones). Differencing a cointegrated pair discards the long-run relationship, which is what the error-correction model exists to retain.

*Introduced:* [5.5](lessons/05-05-a-taste-of-time-series.md)

## Formulas and rules

### Estimators at a glance

| Estimator | Formula | Consistent when |
|---|---|---|
| OLS | $(X'X)^{-1}X'y$ | $E[x_iu_i]=0$ |
| IV (just-identified) | $(Z'X)^{-1}Z'y$ | $E[z_iu_i]=0$, $E[z_ix_i']$ invertible |
| 2SLS | $(X'P_ZX)^{-1}X'P_Zy$ | as above, with the rank condition |
| Fixed effects | OLS on $\ddot y$, $\ddot x$ | strict exogeneity given $\alpha_i$ |
| First differences | OLS on $\Delta y$, $\Delta x$ | same |
| Random effects | OLS on quasi-demeaned data | additionally $E[\alpha_i\mid x]=0$ |
| GLS / WLS | $(X'\Omega^{-1}X)^{-1}X'\Omega^{-1}y$ | $\Omega$ known or correctly modelled |
| MLE | $\arg\max\ \ell(\theta)$ | the distributional family is correct |
| GMM | $\arg\min\ \bar g_n'W\bar g_n$ | $E[g(w_i,\theta_0)]=0$ |

*From* [1.3](lessons/01-03-ols-algebra-geometry-projection.md), [3.6](lessons/03-06-instrumental-variables.md), [3.7](lessons/03-07-two-stage-least-squares.md), [4.1](lessons/04-01-panel-data-fixed-effects.md), [4.2](lessons/04-02-first-differencing-random-effects.md), [5.1](lessons/05-01-maximum-likelihood-estimation.md), [5.2](lessons/05-02-generalized-method-of-moments.md)

### Variance estimators

| Name | Meat of the sandwich | Use when |
|---|---|---|
| Classical | $s^2\,(X'X)$ | never, in practice |
| White HC0 | $\sum_i \hat e_i^2\,x_ix_i'$ | heteroskedasticity, large $n$ |
| HC1 | $\frac{n}{n-k}\sum_i\hat e_i^2x_ix_i'$ | default |
| HC2 | $\sum_i \frac{\hat e_i^2}{1-h_{ii}}x_ix_i'$ | small $n$; exactly unbiased under homoskedasticity |
| HC3 | $\sum_i \frac{\hat e_i^2}{(1-h_{ii})^2}x_ix_i'$ | small $n$ or high leverage |
| Cluster CR1 | $\frac{G}{G-1}\frac{n-1}{n-k}\sum_g s_gs_g'$ | grouped data; $G\ge 40$ |
| Wild cluster bootstrap | — | $G<40$ |

All share the bread $(X'X)^{-1}$. Robust standard errors can be **larger or smaller** than classical ones — the direction depends on whether high-variance observations sit at high or low leverage.

*From* [2.4](lessons/02-04-heteroskedasticity-robust-standard-errors.md), [2.5](lessons/02-05-clustered-standard-errors.md), [2.6](lessons/02-06-bootstrap-and-few-clusters.md)

### Log points to percent

| $\beta$ | exact $100(e^\beta-1)$ | shortcut $100\beta$ | error |
|---|---|---|---|
| $0.02$ | $2.02\%$ | $2\%$ | $0.02$ pp |
| $0.10$ | $10.52\%$ | $10\%$ | $0.52$ pp |
| $0.20$ | $22.14\%$ | $20\%$ | $2.14$ pp |
| $0.50$ | $64.87\%$ | $50\%$ | $14.87$ pp |
| $0.693$ | $100.00\%$ | $69.3\%$ | $30.7$ pp |

A coefficient of $\log 2$ means the outcome **doubles**, not that it rises 69 percent.

*From* [1.6](lessons/01-06-functional-form-logs-interactions.md)

### Critical values worth knowing

| Distribution | 5% two-sided | Note |
|---|---|---|
| $\mathcal N(0,1)$ | $1.960$ | |
| $t_5$ | $2.571$ | 31% wider than normal |
| $t_{10}$ | $2.228$ | 14% wider |
| $t_{30}$ | $2.042$ | 4% wider |
| $t_{100}$ | $1.984$ | 1.2% wider |
| $\chi^2_1$ | $3.841$ | $=1.96^2$ |
| $\chi^2_2$ | $5.991$ | |
| $\chi^2_3$ | $7.815$ | |
| $\chi^2_4$ | $9.488$ | |

Using $1.96$ at $n-k=10$ gives a test whose true size is $0.078$, not $0.05$.

*From* [2.1](lessons/02-01-sampling-distribution-of-ols.md), [2.3](lessons/02-03-hypothesis-tests-confidence-intervals.md)

### Multiple-testing arithmetic

| $m$ independent tests at 5% | $P(\text{at least one false positive})$ | Bonferroni level |
|---|---|---|
| $1$ | $0.050$ | $0.0500$ |
| $5$ | $0.226$ | $0.0100$ |
| $10$ | $0.401$ | $0.0050$ |
| $20$ | $0.642$ | $0.0025$ |
| $100$ | $0.994$ | $0.0005$ |

Expected false positives among $m$ true nulls is $m\alpha$: at $m=20$, exactly one.

*From* [2.7](lessons/02-07-multiple-testing-specification-search.md)

### Instrument-strength thresholds

| First-stage $F$ | Meaning |
|---|---|
| $\approx 1/F$ | relative bias of 2SLS toward OLS |
| $10$ | old rule of thumb — a **bias** rule |
| $16.38$ | Stock-Yogo, 10 percent maximal bias, one instrument |
| $104.7$ | needed for a conventional 5 percent $t$-test to have true size 5 percent |

Between $10$ and $104.7$ the point estimate is tolerable and the confidence interval is not. Report Anderson-Rubin sets, which are valid at any strength and may legitimately be unbounded.

*From* [3.8](lessons/03-08-weak-instruments-and-late.md)

### Discreteness floors on p-values

| Design | Smallest attainable two-sided $p$ |
|---|---|
| randomization inference, $n_1$ vs $n_0$ | $2/\binom{n}{n_1}$ — at 3 vs 3, $0.10$ |
| wild cluster bootstrap, $G$ clusters | $2/2^G$ — at $G=5$, $0.0625$ |
| synthetic control, $J$ donors | $1/(J+1)$ — 19 donors needed for 5 percent |

These are **design decisions**, fixed before any data exist. Check them at the planning stage, not after.

*From* [2.6](lessons/02-06-bootstrap-and-few-clusters.md), [3.1](lessons/03-01-potential-outcomes-identification.md), [4.6](lessons/04-06-synthetic-control.md)

### Signing a bias

| Source | Formula | Direction |
|---|---|---|
| Omitted variable | $\delta\pi$ | sign of the product; either factor zero kills it |
| Classical error in a regressor | $\lambda\beta$, $\lambda\in(0,1)$ | **always toward zero** |
| Classical error in the outcome | none | unbiased; variance rises |
| Simultaneity | $w\gamma_1+(1-w)\alpha_1$ | mixture of both structural slopes |
| Exclusion violation with IV | $\eta/\pi_1$ | amplified by a weak first stage |
| Censoring (Tobit, on observed mean) | $\Phi(x'\beta/\sigma)\beta_j$ | toward zero |
| Truncation on the outcome | $\beta_j[1-\lambda(c)(\lambda(c)-c)]$ | toward zero, severely |
| Fixed effects with mismeasured $x$ | $\lambda_{FE}<\lambda_{\text{levels}}$ | worse toward zero than in levels |

*From* [3.4](lessons/03-04-omitted-variable-bias.md), [3.5](lessons/03-05-measurement-error-and-simultaneity.md), [3.6](lessons/03-06-instrumental-variables.md), [4.1](lessons/04-01-panel-data-fixed-effects.md), [5.4](lessons/05-04-censoring-truncation-sample-selection.md)

### Nonlinear-model marginal effects

| Model | Marginal effect | Rule of thumb |
|---|---|---|
| LPM | $\beta_j$ | exact |
| Probit | $\phi(x'\beta)\beta_j$ | APE $\approx 0.4\beta_j$ (balanced sample only) |
| Logit | $\Lambda(1-\Lambda)\beta_j = p(1-p)\beta_j$ | APE $\approx 0.25\beta_j$ (balanced sample only) |
| Tobit (observed mean) | $\Phi(x'\beta/\sigma)\beta_j$ | scaled by the uncensored share |

The rules of thumb use the density at $p=0.5$ and are badly wrong for a rare outcome: at $p=0.05$ the logit effect is $0.0475\beta$, less than a fifth of $0.25\beta$.

*From* [5.3](lessons/05-03-logit-and-probit.md), [5.4](lessons/05-04-censoring-truncation-sample-selection.md)

### AR(1) persistence

| $\phi$ | half-life of a shock | $\operatorname{Var}(y_t)/\sigma^2_\varepsilon$ |
|---|---|---|
| $0.5$ | $1.00$ | $1.33$ |
| $0.8$ | $3.11$ | $2.78$ |
| $0.9$ | $6.58$ | $5.26$ |
| $0.95$ | $13.51$ | $10.26$ |
| $0.99$ | $68.97$ | $50.25$ |

Half-life is $\log(0.5)/\log\phi$; variance is $1/(1-\phi^2)$. Finite-sample bias of $\hat\phi$ is about $-(1+3\phi)/T$.

*From* [5.5](lessons/05-05-a-taste-of-time-series.md)

## Assumed, not taught here

| Fact | Where it is taught |
|---|---|
| Conditional expectation as an $L^2$ projection; law of iterated expectations | [`probability-theory` 5.1](../probability-theory/lessons/05-01-conditional-expectation.md), [5.2](../probability-theory/lessons/05-02-conditional-expectation-properties.md) |
| Law of large numbers; convergence in probability | [`probability-theory` 4.2](../probability-theory/lessons/04-02-laws-of-large-numbers.md) |
| Central limit theorem; convergence in distribution | [`probability-theory` 4.5](../probability-theory/lessons/04-05-central-limit-theorem.md) |
| Slutsky's theorem and the continuous mapping theorem | [`probability-theory` 4.1](../probability-theory/lessons/04-01-modes-of-convergence.md) |
| Orthogonal projection, normal equations, idempotent matrices | [`linalg-refresher` 4.2](../linalg-refresher/lessons/04-02-projection-least-squares.md) |
| Matrix inverses, rank, and the four fundamental subspaces | [`linalg-refresher` 2.2](../linalg-refresher/lessons/02-02-inverses-and-four-subspaces.md) |
| Positive definiteness and quadratic forms (used for the Wald ellipse) | [`linalg-refresher` 5.1](../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md) |
| $t$, $\chi^2$ and $F$ distributions and how they arise | [`prob-stat-refresher` 4.4](../prob-stat-refresher/lessons/04-04-sampling-distributions-t-and-chi-square.md) |
| Hypothesis testing, size, power and $p$-values | [`prob-stat-refresher` 4.3](../prob-stat-refresher/lessons/04-03-hypothesis-testing.md) |
| Confidence intervals for a mean | [`prob-stat-refresher` 4.2](../prob-stat-refresher/lessons/04-02-confidence-intervals.md) |
| Maximum likelihood basics; Cramer-Rao bound | [`prob-stat-refresher` 4.1](../prob-stat-refresher/lessons/04-01-estimation-and-mle.md) |
| Covariance, variance of a sum, joint distributions | [`prob-stat-refresher` 3.1](../prob-stat-refresher/lessons/03-01-joint-distributions-covariance.md) |
| Ridge and lasso as regularizers, and the bias-variance trade | [`statistical-learning` 2.3](../statistical-learning/lessons/02-03-ridge-regression-and-shrinkage.md), [2.4](../statistical-learning/lessons/02-04-lasso-and-the-geometry-of-sparsity.md) |
| Fitting mechanics of linear and logistic regression | [`machine-learning` 1.3](../machine-learning/lessons/01-03-linear-regression-and-least-squares.md), [1.5](../machine-learning/lessons/01-05-logistic-regression-and-classification.md) |
| Cross-validation and held-out data (needed for cross-fitting) | [`statistical-learning` 1.3](../statistical-learning/lessons/01-03-overfitting-and-train-validation-test.md) |
| Kernel smoothing and the nonparametric bias-variance trade | [`statistical-learning` 6.4](../statistical-learning/lessons/06-04-density-estimation.md) |
| Elasticities and comparative statics from optimising behaviour | [`micro-refresher` 1.4](../micro-refresher/lessons/01-04-slutsky-comparative-statics.md) |
| Euler equations and consumption-based asset pricing | [`grad-macro` 5.4](../grad-macro/lessons/05-04-consumption-based-asset-pricing.md) |

## Pitfalls

### What a coefficient means

- **You might think** $E[Xu]=0$ shows the model is right — **but** it holds by construction for any joint distribution. Test $E[h(X)u]=0$ for functions you did not force to zero. *([1.2](lessons/01-02-best-linear-predictor.md), [1.5](lessons/01-05-goodness-of-fit-interpretation.md))*
- **You might think** the regression slope is the CEF slope at the mean — **but** it is a specific weighted average of local slopes, with weights set by where $X$ has mass. Two samples with the same CEF and different $X$ distributions should be *expected* to differ. *([1.2](lessons/01-02-best-linear-predictor.md))*
- **You might think** a coefficient on a logged variable of $0.4$ is a 40 percent effect — **but** it is 49 percent. Report log points or exponentiate. *([1.6](lessons/01-06-functional-form-logs-interactions.md))*
- **You might think** $\beta_1$ in a model with an interaction is the main effect — **but** it is the effect at $D=0$ (or $x=0$). Centre your variables or state the evaluation point. *([1.6](lessons/01-06-functional-form-logs-interactions.md))*
- **You might think** a large $t$-statistic means a large effect — **but** $t$ grows with $\sqrt n$ for a fixed effect. Report the coefficient in its units and ask whether the interval excludes sizes you care about. *([2.1](lessons/02-01-sampling-distribution-of-ols.md))*

### Fit statistics

- **You might think** a high $R^2$ means the model is well specified — **but** it means the regressors predict $y$ in this sample. A regression on an unrelated trending series routinely exceeds $0.9$. *([1.5](lessons/01-05-goodness-of-fit-interpretation.md), [5.5](lessons/05-05-a-taste-of-time-series.md))*
- **You might think** adjusted $R^2$ protects against overfitting — **but** it rises whenever an added regressor has $|t|>1$, which is far too lax to be a selection rule. *([1.5](lessons/01-05-goodness-of-fit-interpretation.md), [2.1](lessons/02-01-sampling-distribution-of-ols.md))*
- **You might think** multicollinearity biases coefficients — **but** it inflates variance and nothing else, and dropping a collinear regressor that belongs in the model reintroduces omitted-variable bias. *([1.5](lessons/01-05-goodness-of-fit-interpretation.md))*
- **You might think** you can compare $R^2$ across specifications with different left-hand sides — **but** they are shares of different totals. Put both on the same scale first. *([1.6](lessons/01-06-functional-form-logs-interactions.md))*

### Standard errors

- **You might think** heteroskedasticity biases your estimates — **but** it breaks only the variance formula. Endogeneity breaks the estimate; the two failures need different responses. *([1.4](lessons/01-04-gauss-markov-theorem.md), [2.4](lessons/02-04-heteroskedasticity-robust-standard-errors.md))*
- **You might think** you should test for heteroskedasticity first — **but** robust errors are valid either way, so the pre-test only distorts the size of your eventual test. Just use them. *([2.4](lessons/02-04-heteroskedasticity-robust-standard-errors.md))*
- **You might think** robust standard errors are always larger — **but** the sandwich has no built-in direction; it reports what the residual pattern says. *([2.4](lessons/02-04-heteroskedasticity-robust-standard-errors.md))*
- **You might think** a large $n$ means comfortable inference — **but** with clustered data the asymptotics run in $G$. Two million individuals in twelve states is a twelve-observation problem. *([2.5](lessons/02-05-clustered-standard-errors.md))*
- **You might think** clustering more finely is safer — **but** clusters must be at least as coarse as the level at which errors are correlated. Clustering by state-year when policy varies by state misses the serial correlation entirely. *([2.5](lessons/02-05-clustered-standard-errors.md))*
- **You might think** more bootstrap replications overcome few clusters — **but** the $2^G$ grid is a hard information limit that no amount of computation moves. *([2.6](lessons/02-06-bootstrap-and-few-clusters.md))*
- **You might think** the pairs bootstrap is the safe default with clustered data — **but** with few clusters it performs *worse* than the analytic estimator. Use the wild cluster bootstrap, imposing the null. *([2.6](lessons/02-06-bootstrap-and-few-clusters.md))*

### Testing

- **You might think** overlapping confidence intervals mean an insignificant difference — **but** that ignores the covariance between the estimates, which is the one number determining the answer. Test the difference directly. *([2.3](lessons/02-03-hypothesis-tests-confidence-intervals.md))*
- **You might think** failing to reject means the null is true — **but** $[-8,9]$ and $[-0.01,0.02]$ both fail to reject zero, and only one is evidence of a small effect. Report the interval, not the star. *([2.3](lessons/02-03-hypothesis-tests-confidence-intervals.md))*
- **You might think** a corrected $p$-value fixes a specification search — **but** the count that matters includes every specification you ran and discarded, which only you can report. *([2.7](lessons/02-07-multiple-testing-specification-search.md))*
- **You might think** a robustness table of 20 significant specifications is reassuring — **but** if the 20 were chosen after seeing which worked, it is a selected sample of a larger garden. *([2.7](lessons/02-07-multiple-testing-specification-search.md))*
- **You might think** a passing $J$-test validates your instruments — **but** it tests whether they agree with each other, and instruments from one institutional story fail together. *([3.7](lessons/03-07-two-stage-least-squares.md), [5.2](lessons/05-02-generalized-method-of-moments.md))*

### Identification strategies

- **You might think** identification is about having enough data — **but** it is about whether the population distribution pins the parameter down at all. Infinite data does not help if it does not. *([3.1](lessons/03-01-potential-outcomes-identification.md))*
- **You might think** SUTVA is a technicality — **but** it fails wherever treating some units affects others, and then $Y_i(1)$ is not even well defined. *([3.1](lessons/03-01-potential-outcomes-identification.md))*
- **You might think** balance tests confirm the conditional independence assumption — **but** they speak only to the covariates you have; the assumption is about the ones you do not. Use standardised differences, not balance $t$-tests, which improve mechanically as you drop observations. *([3.2](lessons/03-02-selection-on-observables-propensity-score.md), [2.7](lessons/02-07-multiple-testing-specification-search.md))*
- **You might think** a propensity score near 0 or 1 is an efficiency problem — **but** it is an identification problem: there is nothing to compare, and the estimator will still return a number produced by extrapolation. *([3.2](lessons/03-02-selection-on-observables-propensity-score.md))*
- **You might think** adding more controls always reduces bias — **but** mediators remove the effect you wanted and colliders create bias from independence. Ask whether the treatment could have changed the variable. *([3.3](lessons/03-03-regression-anatomy-good-and-bad-controls.md))*
- **You might think** restricting the sample is not "controlling" — **but** conditioning on sample membership is conditioning on a variable, and if membership depends on the outcome it is collider conditioning. *([3.3](lessons/03-03-regression-anatomy-good-and-bad-controls.md), [5.4](lessons/05-04-censoring-truncation-sample-selection.md))*
- **You might think** OLS with controls estimates the ATE — **but** it returns a $\operatorname{Var}(D\mid X)$-weighted average that overweights cells with treatment near one half. Compute the ATE if you want it. *([3.3](lessons/03-03-regression-anatomy-good-and-bad-controls.md))*
- **You might think** a stable coefficient across specifications proves robustness — **but** stability is informative only relative to how much the controls moved the $R^2$. Report the Oster-style breakdown value. *([3.4](lessons/03-04-omitted-variable-bias.md))*
- **You might think** signing one bias settles the direction — **but** ability bias and measurement error run opposite ways in a schooling regression and nearly cancel. **Sign all of them.** *([3.5](lessons/03-05-measurement-error-and-simultaneity.md))*
- **You might think** measurement error always attenuates — **but** that is the *classical* case in the regressor of interest. Binary misclassification and mismeasured controls both break the guarantee, and the latter biases a *different* coefficient. *([3.5](lessons/03-05-measurement-error-and-simultaneity.md))*

### Instruments

- **You might think** a significant first stage validates the instrument — **but** it validates only relevance. A strong instrument violating exclusion is *more* precisely wrong. *([3.6](lessons/03-06-instrumental-variables.md))*
- **You might think** you can test exclusion by regressing $Y$ on $Z$ — **but** that is the reduced form, and a nonzero coefficient is exactly what a valid instrument produces. *([3.6](lessons/03-06-instrumental-variables.md))*
- **You might think** more instruments are better — **but** weak ones drag 2SLS toward OLS in proportion to their number. Report LIML alongside when $m$ is large. *([3.7](lessons/03-07-two-stage-least-squares.md))*
- **You might think** $F>10$ means you are fine — **but** that is a bias threshold; valid $t$-inference needs roughly $F>104.7$. *([3.8](lessons/03-08-weak-instruments-and-late.md))*
- **You might think** a wide insignificant IV interval is a null result — **but** with a weak instrument its coverage is not what it claims, so it is not evidence of a small effect either. *([3.8](lessons/03-08-weak-instruments-and-late.md))*
- **You might think** LATE equals ATE when effects look similar — **but** you cannot check that: the effects for always-takers and never-takers are never observed. *([3.8](lessons/03-08-weak-instruments-and-late.md))*

### Panels and quasi-experiments

- **You might think** fixed effects controls for unobservables — **but** only *time-invariant* ones. Time-varying confounders, which usually drive the timing of treatment, pass through untouched. *([4.1](lessons/04-01-panel-data-fixed-effects.md))*
- **You might think** a regressor with little within variation is fine to include — **but** the estimate rests on a few switchers, the standard error explodes, and measurement error is amplified. Report the within share of variance and the number of switchers. *([4.1](lessons/04-01-panel-data-fixed-effects.md))*
- **You might think** a failure to reject Hausman justifies random effects — **but** the test has low power exactly when the choice matters most. *([4.2](lessons/04-02-first-differencing-random-effects.md))*
- **You might think** similar pre-treatment levels support parallel trends — **but** levels are differenced away; look at the trends. *([4.3](lessons/04-03-difference-in-differences.md))*
- **You might think** the choice between levels and logs is a robustness check — **but** it changes the identifying assumption and can change the sign. Pick the scale from the economics, in advance. *([4.3](lessons/04-03-difference-in-differences.md), [4.4](lessons/04-04-event-studies-dynamic-did.md))*
- **You might think** flat pre-trends validate a design — **but** they are a weakly powered check on the *pre*-period, and the assumption concerns the post-period counterfactual. Report the minimum violation your test could have detected. *([4.4](lessons/04-04-event-studies-dynamic-did.md))*
- **You might think** staggered adoption is a minor complication — **but** two-way fixed effects can return an estimate outside the range of every true effect, including the opposite sign. Run the Goodman-Bacon decomposition and a cohort-robust estimator. *([4.5](lessons/04-05-staggered-adoption-modern-did.md))*
- **You might think** unit-specific time trends fix staggered DiD — **but** they absorb part of a growing treatment effect, biasing toward zero for a different reason. *([4.5](lessons/04-05-staggered-adoption-modern-did.md))*
- **You might think** a large post-treatment gap is evidence of an effect — **but** it must be judged against the pre-treatment fit; a method that could not match the unit before treatment has no standing afterward. *([4.6](lessons/04-06-synthetic-control.md))*
- **You might think** a high-order global polynomial fits an RD better — **but** it gives poor coverage and lets far-away observations determine the value at the cutoff. Use local linear within a data-driven bandwidth. *([4.7](lessons/04-07-regression-discontinuity.md))*
- **You might think** covariate balance validates an RD — **but** the McCrary density test is more fundamental, because manipulation of any kind moves the density. Run it first. *([4.7](lessons/04-07-regression-discontinuity.md))*

### Likelihood and nonlinear models

- **You might think** a higher likelihood means a better model — **but** it always rises with more parameters, exactly as $R^2$ does. *([5.1](lessons/05-01-maximum-likelihood-estimation.md))*
- **You might think** MLE is unbiased — **but** it is only consistent; $\hat\sigma^2_{MLE}=\hat e'\hat e/n$ understates by the factor $(n-k)/n$. Invariance and finite-sample unbiasedness cannot both hold. *([5.1](lessons/05-01-maximum-likelihood-estimation.md))*
- **You might think** the likelihood-ratio test is safe under misspecification — **but** it relies on the information equality. Use a robust Wald test built on the sandwich. *([5.1](lessons/05-01-maximum-likelihood-estimation.md))*
- **You might think** more moment conditions are always better — **but** each must be *true*, and one invalid condition contaminates everything. *([5.2](lessons/05-02-generalized-method-of-moments.md))*
- **You might think** a logit coefficient of $0.62$ is an effect — **but** it is a latent-index quantity in units fixed by an arbitrary normalisation. Exponentiating gives an odds ratio, which is not a probability effect. *([5.3](lessons/05-03-logit-and-probit.md))*
- **You might think** you can compare coefficients across nonlinear models or groups — **but** the scale normalisation makes them incomparable; even adding an orthogonal regressor rescales all of them. **Compare marginal effects.** *([5.3](lessons/05-03-logit-and-probit.md))*
- **You might think** you can add fixed effects to a probit as you would to OLS — **but** the incidental-parameters problem makes it inconsistent for fixed $T$, and probit has no conditional-likelihood fix. *([5.3](lessons/05-03-logit-and-probit.md))*
- **You might think** the linear probability model is simply wrong — **but** it is often the right choice for causal work, provided fitted probabilities stay away from the boundaries. *([5.3](lessons/05-03-logit-and-probit.md))*
- **You might think** censoring and truncation are the same problem — **but** censoring keeps the units and truncation deletes them, and they need different likelihoods. *([5.4](lessons/05-04-censoring-truncation-sample-selection.md))*
- **You might think** every zero outcome means censoring — **but** many zeros are genuine corner solutions, and Tobit's latent-variable story is a modelling choice to be argued for. *([5.4](lessons/05-04-censoring-truncation-sample-selection.md))*
- **You might think** the Heckman correction is a free fix — **but** without a credible exclusion restriction it is less reliable than uncorrected OLS, since $\lambda$ is nearly linear and identification rests on curvature alone. *([5.4](lessons/05-04-censoring-truncation-sample-selection.md))*

### Time series

- **You might think** a high $t$-statistic with a large $T$ is decisive — **but** with nonstationary series it *diverges* with $T$. This is the one place where more data makes inference worse. *([5.5](lessons/05-05-a-taste-of-time-series.md))*
- **You might think** failing to reject a unit root establishes one — **but** the unit root is the null, and these tests have poor power against $\phi$ near one. *([5.5](lessons/05-05-a-taste-of-time-series.md))*
- **You might think** differencing is always safe — **but** if the series are cointegrated it discards the long-run relationship. Test for cointegration first, then use an error-correction model. *([5.5](lessons/05-05-a-taste-of-time-series.md))*
