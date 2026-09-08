# Econometrics — Syllabus

> Tier 2 · 33 lessons · Prereqs: [`probability-theory`](../probability-theory/syllabus.md), [`linalg-refresher`](../linalg-refresher/syllabus.md), [`prob-stat-refresher`](../prob-stat-refresher/syllabus.md) · Roadmap id: `econometrics`

## Goal

Learn to estimate and interpret linear models, conduct valid inference when the textbook assumptions fail (heteroskedasticity, clustering, finite samples), and — the through-line of the whole course — build credible strategies for identifying *causal* effects from observational data using instruments, panels, difference-in-differences, and regression discontinuity. The organizing question is always "what does this coefficient *identify*, and under what assumptions is that a causal effect?" — the regression algebra is a means, not the end. Deliberately skipped: deep nonparametric estimation, Bayesian econometrics, and heavy time-series/macroeconometrics (stationarity and the spurious-regression trap get one lesson each, not a module); measure-theoretic asymptotics beyond the tools actually used are stated and used, not proved from scratch.

## Dangerous Checklist

When you finish, you can:

- [ ] Interpret a regression coefficient as the best linear predictor / conditional-expectation slope, and say precisely what it holds fixed
- [ ] Derive the OLS estimator and explain it as an orthogonal projection onto the column space of the regressors
- [ ] State the Gauss–Markov theorem and know exactly which assumption each conclusion rests on
- [ ] Compute the asymptotic sampling distribution of OLS and build correct confidence intervals and tests
- [ ] Choose and compute robust (White) and cluster-robust standard errors, and say when the classical ones are wrong
- [ ] Interpret a log-log, log-linear, interaction or polynomial coefficient without confusing log points with percent
- [ ] Bootstrap a standard error, and know which bootstrap survives having only a handful of clusters
- [ ] Say what a p-value means after a specification search, and what to do about it
- [ ] Diagnose omitted-variable bias and sign its direction from first principles
- [ ] Decide whether conditioning on observables can identify an effect, and check overlap before believing it
- [ ] Tell a good control from a bad one, and explain why controlling for a collider creates bias
- [ ] Sign the bias from classical measurement error and recognize a simultaneity problem when you see one
- [ ] Set up an instrumental-variables / 2SLS estimator, state the exclusion restriction, and interpret the LATE it actually recovers
- [ ] Detect weak instruments and explain why they break inference
- [ ] Estimate fixed-effects and first-differenced panel models and say what variation identifies the coefficient
- [ ] Design a difference-in-differences study, state the parallel-trends assumption, and name what would invalidate it
- [ ] Explain why two-way fixed effects is biased under staggered adoption, and name an estimator that is not
- [ ] Run and read a regression-discontinuity, event-study, or synthetic-control design
- [ ] Set up a maximum-likelihood or GMM estimator and recognize OLS/IV as special cases, and fit a logit/probit for a binary outcome
- [ ] Recognize a censored, truncated, or selected sample and say what OLS on it estimates

## Modules

### Module 1: The linear regression model

Before any estimation, pin down what a regression coefficient *is* — a feature of the joint distribution — then derive OLS as the tool that recovers it.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The conditional expectation function | See regression as approximating $E[Y\mid X]$ | conditional expectation function, CEF decomposition, why the CEF is the best predictor under squared loss |
| 1.2 | The best linear predictor | Understand the coefficient you get even when the CEF is nonlinear | best linear predictor, population regression, projection coefficient, what a slope "controls for" |
| 1.3 | OLS algebra and the geometry of projection | Derive $\hat\beta=(X'X)^{-1}X'y$ and see it as a projection | normal equations, hat matrix, residual orthogonality, column space, FWL (partialling-out) |
| 1.4 | The Gauss–Markov theorem | Know when OLS is BLUE and which assumption buys what | linearity, strict exogeneity, spherical errors, unbiasedness, BLUE, the role of each assumption |
| 1.5 | Goodness of fit and what a coefficient means | Read $R^2$, added-variable plots, and multivariate slopes honestly | $R^2$ and adjusted $R^2$, omitted vs included variables, multicollinearity, interpretation traps |
| 1.6 | Functional form: logs, polynomials, interactions | Say what a coefficient means when the model is not linear in levels | log-log elasticity, log-linear semi-elasticity, log points vs percent, dummy variables, saturated models, interaction terms |

**Boss problem 1:** For a two-regressor model, use the Frisch–Waugh–Lovell theorem to show the coefficient on $x_1$ equals the simple regression of $y$ on the part of $x_1$ orthogonal to $x_2$; verify numerically on a small dataset and interpret what "controlling for $x_2$" geometrically means.

### Module 2: Inference and asymptotics

Estimates are random; this module makes their randomness precise so tests and intervals mean something — including when the classical error assumptions fail.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The sampling distribution of OLS | Treat $\hat\beta$ as a random variable and find its mean and variance | sampling distribution, finite-sample vs asymptotic, exact normality under normal errors |
| 2.2 | Consistency and the CLT for estimators | Prove $\hat\beta\to\beta$ and derive its limiting normal law | law of large numbers, consistency, asymptotic normality, the sandwich intuition, delta method |
| 2.3 | Hypothesis tests and confidence intervals | Build $t$- and $F$-tests and read them correctly | $t$-test, $F$-test, Wald test, confidence intervals, $p$-values, joint vs single restrictions |
| 2.4 | Heteroskedasticity and robust standard errors | Fix inference when error variance is not constant | heteroskedasticity, White/HC standard errors, why point estimates survive but SEs don't |
| 2.5 | Clustered standard errors | Handle within-group correlation in the data | clustering, correlated errors, cluster-robust variance, the "few clusters" problem |
| 2.6 | The bootstrap and inference with few clusters | Get valid inference when the asymptotics you relied on have not arrived | pairs bootstrap, wild bootstrap, wild cluster bootstrap, randomization inference, refinement |
| 2.7 | Multiple testing and specification search | Keep a p-value meaningful after you have looked at the data | family-wise error, Bonferroni, false discovery rate, researcher degrees of freedom, pre-registration, publication bias |

**Boss problem 2:** Given a model with heteroskedastic and within-group-correlated errors, compute classical, White-robust, and cluster-robust standard errors for the same coefficient; explain which is valid, why the others mislead, and how the choice would change your confidence interval and conclusion.

### Module 3: Endogeneity and causality

The heart of the course: OLS estimates a correlation — this module builds the framework and tools for turning it into a causal claim.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Potential outcomes and the identification problem | State causality precisely and see why it's hard | potential outcomes, treatment effect, selection bias, the fundamental problem of causal inference |
| 3.2 | Selection on observables | Fix selection by conditioning — when that is even possible | conditional independence, overlap/common support, matching, the propensity score, inverse-probability weighting |
| 3.3 | Regression anatomy: good and bad controls | See what regression actually averages when you "control for" something | saturated regression, variance-weighted average of CATEs, bad controls, collider bias, post-treatment variables |
| 3.4 | Omitted-variable bias | Derive and sign the bias from a missing regressor | endogeneity, OVB formula, direction of bias, proxy variables |
| 3.5 | Measurement error and simultaneity | Recognize the two endogeneity sources that are not omitted variables | classical measurement error, attenuation bias, reliability ratio, simultaneous equations, the supply-and-demand identification problem |
| 3.6 | Instrumental variables | Use an instrument to isolate exogenous variation | instrument, relevance, exclusion restriction, the IV estimator, reduced form and first stage |
| 3.7 | Two-stage least squares | Generalize IV to multiple instruments and controls | 2SLS, overidentification, the just-identified case, Sargan/Hansen $J$-test |
| 3.8 | Weak instruments and LATE | Know what IV actually estimates and when it fails | local average treatment effect, monotonicity/compliers, weak-instrument bias, first-stage $F$ |

**Boss problem 3:** For a concrete endogeneity problem (e.g. returns to schooling with an instrument for years of education), set up the IV/2SLS estimator, state and defend the exclusion restriction, compute the first-stage $F$ to check instrument strength, and interpret the estimate as a LATE — say precisely *whose* treatment effect it recovers and why that differs from the ATE. Then argue the case *against* your own design: name the selection-on-observables specification you would have run instead, say what would have to be true for it to work, and explain which of the three endogeneity sources (omitted variables, measurement error, simultaneity) your instrument is actually solving.

### Module 4: Panel data and quasi-experiments

The modern applied toolkit: use repeated observations and natural experiments to difference away the confounders you can't measure.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Panel data and fixed effects | Control for everything time-invariant about a unit | panel/longitudinal data, unit fixed effects, within transformation, what variation is used |
| 4.2 | First differencing and random effects | Choose between the estimators and know the tradeoff | first differencing, random effects, Hausman test, fixed vs random effects assumptions |
| 4.3 | Difference-in-differences | Identify effects from a policy change over time | treatment/control groups, parallel trends, two-way fixed effects, the DiD estimator |
| 4.4 | Event studies and dynamic DiD | Trace an effect's timing and pre-test parallel trends | event-study plot, leads and lags, pre-trends, normalization choice |
| 4.5 | Staggered adoption and modern DiD | See why two-way fixed effects breaks when units switch at different times | forbidden comparisons, Goodman-Bacon decomposition, negative weights, Callaway-Sant'Anna, Sun-Abraham |
| 4.6 | Synthetic control | Build a comparison unit when no single control will do | donor pool, weights on the pre-period, sparse convex combination, placebo-in-space inference |
| 4.7 | Regression discontinuity | Exploit a threshold rule for local randomization | running variable, sharp vs fuzzy RD, local linear fit, bandwidth, continuity assumption, McCrary density test |

**Boss problem 4:** Design a difference-in-differences analysis of a policy that took effect in some states and not others; write the two-way fixed-effects regression, state the parallel-trends identifying assumption, describe the event-study plot you'd use to defend it, and name two distinct threats (e.g. differential pre-trends, contemporaneous policy) that would invalidate the causal interpretation. Then suppose states adopted in *different years*: show on a small numerical example that the two-way fixed-effects coefficient can fall outside the range of every unit's true effect, identify which 2x2 comparison is responsible, and say what you would estimate instead.

### Module 5: Estimation principles and extensions

Step back to the general machinery — likelihood and moments — that generates every estimator so far, then apply it to binary outcomes and glance at time series.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Maximum likelihood estimation | Estimate by making the observed data most probable | likelihood, log-likelihood, score, information matrix, asymptotic efficiency, consistency of MLE |
| 5.2 | The generalized method of moments | See OLS, IV, and MLE as one moment-matching idea | moment conditions, GMM objective, optimal weighting, over-identification, the unifying view |
| 5.3 | Limited dependent variables: logit and probit | Model binary outcomes and read the coefficients right | latent-variable model, logit/probit, marginal effects, why OLS coefficients mislead here |
| 5.4 | Censoring, truncation, and sample selection | Handle an outcome that is only partly observed | corner solution, Tobit, truncated regression, inverse Mills ratio, Heckman selection correction |
| 5.5 | A taste of time series | Handle serial dependence and avoid the classic trap | stationarity, autocorrelation, AR/MA models, spurious regression, unit roots (warning, not theory) |

**Boss problem 5:** Take the just-identified IV estimator and show it as a method-of-moments estimator from the moment condition $E[z(y-x'\beta)]=0$; then write the log-likelihood for a probit model, derive the marginal effect of a regressor, and explain why it is not simply the coefficient — connecting the module's two unifying frameworks to a concrete model.

## Sources of truth

- Hansen, *Econometrics* (primary; modern, projection- and asymptotics-forward treatment)
- Wooldridge, *Econometric Analysis of Cross Section and Panel Data* (panel methods, limited dependent variables, GMM)
- Angrist & Pischke, *Mostly Harmless Econometrics* (the causal-identification philosophy driving Modules 3–4)
- Greene, *Econometric Analysis* (encyclopedic reference for MLE and extensions)

## Notes

- This is the empirical counterpart to [`grad-micro`](../grad-micro/syllabus.md) and [`grad-macro`](../grad-macro/syllabus.md): where those courses derive what agents and economies *should* do, this course tests those predictions against data and estimates the structural parameters they contain.
- The causal-inference material in Module 3 is econometrics' analogue of experimental design — potential outcomes, identification, and LATE are the observational-data version of randomization and treatment effects; the difference-in-differences and RD designs are quasi-experiments that manufacture the missing randomization.
- Shares its regression and regularization foundations with [`statistical-learning`](../statistical-learning/syllabus.md), but with the opposite goal: statistical learning optimizes *prediction* (minimize out-of-sample error, bias–variance tradeoff, regularize freely), while econometrics optimizes *identification* (get one coefficient's causal meaning right, and never bias it for a better fit). Reading them side by side sharpens both.

---

## Revision note — 2026-09-08

Extended from 24 to 33 lessons before the first build. Every addition closes a
place where the course *used* or *promised* machinery it never delivered, rather
than adding breadth for its own sake:

| Added | Why it was a defect, not a gap |
|---|---|
| **1.6** Functional form | The checklist promises "interpret a regression coefficient", but essentially every applied specification is in logs, and nothing in the course defined a log point, an elasticity, or an interaction term. |
| **2.6** Bootstrap and few clusters | 2.5 names the "few clusters problem" and offered no machinery to fix it. The wild cluster bootstrap is the standard answer and had nowhere to live. |
| **2.7** Multiple testing and specification search | A course whose through-line is *credible* inference cannot stop at a single t-test computed once. |
| **3.2** Selection on observables | The module jumped potential outcomes → OVB → IV, skipping the workhorse design of applied work. It also makes 3.3's "good vs bad controls" statable. |
| **3.3** Regression anatomy | "What a slope controls for" (1.2) is answered only loosely until you know OLS returns a $\operatorname{Var}(D\mid X)$-weighted average of conditional effects, which is neither the ATE nor the ATT. |
| **3.5** Measurement error and simultaneity | Two of the three classical sources of endogeneity were absent; simultaneity is the *founding* identification problem of the field. |
| **4.5** Staggered adoption and modern DiD | Was one bullet ("staggered adoption caveats") inside an already-full event-study lesson, despite being the single most consequential applied-econometrics result of the last decade. |
| **4.6** Synthetic control | Completes the DiD family: what to do when no single control unit is credible. |
| **5.4** Censoring, truncation, and sample selection | The module is titled "limited dependent variables" and covered only the binary case. |

Boss problems 3 and 4 were extended to reach the new material. Boss problems 1, 2
and 5 were reproduced numerically before the build and needed no correction.

Module 3's internal order changed (selection-on-observables and regression anatomy
now precede omitted-variable bias, so that OVB reads as *the algebra of what fails
when conditioning fails*). No lesson files existed yet, so nothing was renumbered
against live links.

