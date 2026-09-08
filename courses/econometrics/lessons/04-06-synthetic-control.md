# Econometrics · Lesson 4.6: Synthetic control

> ⏱ ~15 min · Module 4: Panel data and quasi-experiments · Builds on: [4.5 (staggered adoption)](04-05-staggered-adoption-modern-did.md), [4.3 (difference-in-differences)](04-03-difference-in-differences.md) · Unlocks: 4.7 (regression discontinuity), 5.1 (maximum likelihood)

## Why this matters

Sometimes one unit gets treated. California adopts a tobacco tax; Germany reunifies; a single city bans something. Difference-in-differences needs a control group, and with one treated unit the choice of comparison is doing all the work — pick a different state and get a different answer, with nothing in the data to adjudicate.

Synthetic control answers this by refusing to choose. Instead of one comparison unit, build a **weighted average** of many, with weights selected so the composite tracks the treated unit closely *before* treatment. If the synthetic unit matched for ten pre-treatment years, it is a more defensible counterfactual than any single state, and the choice is made by an algorithm with a stated objective rather than by the researcher's judgement.

Abadie called it "arguably the most important innovation in the policy evaluation literature in the last 15 years", and it has the useful property of making its own weakness visible: if no weighted combination fits the pre-period, the method tells you so, and you should not run the study.

## The idea

You have one treated unit and a **donor pool** of untreated ones. Choose non-negative weights summing to one — a convex combination — so that the weighted average of donors matches the treated unit's pre-treatment outcomes and characteristics as closely as possible.

After treatment, the gap between the treated unit and its synthetic twin is the estimated effect.

Two design choices carry most of the method's credibility. The weights are restricted to be **non-negative and sum to one**, which prevents extrapolation — the synthetic unit is always inside the convex hull of the donors, so you never predict a counterfactual California by subtracting two-thirds of a Texas. And the fit is judged only on the **pre-treatment** period, so the post-treatment gap is genuinely out of sample.

Inference works differently too. With one treated unit there is no sampling variation to appeal to, so significance comes from **placebo tests**: refit the whole procedure pretending each donor was the treated one, and ask where the real gap ranks among the placebo gaps. That is [2.6](02-06-bootstrap-and-few-clusters.md)'s randomization inference, applied across units rather than across assignments.

## The formal version

Let unit $1$ be treated from period $T_0+1$, with donors $j=2,\dots,J+1$ untreated throughout. Let $X_1$ and $X_0$ collect pre-treatment predictors (outcome lags and covariates) for the treated unit and donors.

> **Definition (synthetic control weights).** Choose $W = (w_2,\dots,w_{J+1})'$ to solve
> $$\min_W\ (X_1 - X_0W)'V(X_1-X_0W) \qquad\text{subject to}\quad w_j\ge 0,\ \ \sum_j w_j = 1 ,$$
> where $V$ is a positive semidefinite matrix weighting the predictors by importance.

The estimated effect in period $t>T_0$ is the gap
$$\hat\tau_t = Y_{1t} - \sum_{j=2}^{J+1} w_j\,Y_{jt} .$$

**The constraints are the method.** Non-negativity plus the sum-to-one restriction means the synthetic unit is a convex combination — it cannot lie outside the range of the donor pool on any characteristic. Compare with ordinary regression, which would happily assign negative weights and extrapolate. The cost is that if the treated unit is extreme — the largest, richest, or most polluted — **no convex combination can match it**, and the method fails visibly rather than silently. That visible failure is a feature.

**Sparsity.** The constrained optimum typically puts positive weight on only a handful of donors, with the rest at exactly zero. This makes the counterfactual interpretable — you can name the four states doing the work and let readers judge whether they are sensible comparisons.

**Choosing $V$.** Standard practice picks $V$ to minimise pre-treatment prediction error, often by nested optimisation or cross-validation on a held-out portion of the pre-period. This is a genuine researcher degree of freedom in the sense of [2.7](02-07-multiple-testing-specification-search.md), and results should be shown to be robust to it.

**When it is identified.** The formal justification (Abadie, Diamond and Hainmueller) is a linear factor model,
$$Y_{jt}(0) = \delta_t + \theta_t Z_j + \lambda_t \mu_j + \varepsilon_{jt} ,$$
with $\mu_j$ unobserved factor loadings. If a weighting matches the treated unit on both observed $Z_j$ **and** pre-treatment outcomes over a long enough pre-period, it approximately matches the unobserved $\mu_j$ too — because matching many pre-period outcomes is only possible if the loadings agree.

This is a **stronger** justification than DiD's parallel trends: it allows the unobserved confounders to have *time-varying* effects ($\lambda_t$ changes), which parallel trends forbids. The price is a long pre-period and a good fit.

**Inference by placebo.** Compute the treated unit's post/pre ratio of root-mean-squared prediction error,
$$\mathrm{RMSPE\ ratio} = \frac{\text{post-treatment RMSPE}}{\text{pre-treatment RMSPE}} ,$$
then repeat the entire procedure treating each donor as if it were treated. The $p$-value is the treated unit's rank among all $J+1$ ratios:
$$p = \frac{\text{number of units with a ratio at least as large}}{J+1} .$$

The ratio, rather than the raw gap, is the right statistic: a donor that fits badly pre-treatment will show a large post-treatment gap for reasons unrelated to any policy, and dividing by pre-period fit penalises that. The finest attainable $p$-value is $1/(J+1)$ — with 20 donors, $1/21 = 0.048$, just under 5 percent, which is the same discreteness constraint as [2.6](02-06-bootstrap-and-few-clusters.md)'s randomization inference.

**Diagnostics to report.** The pre-treatment fit (RMSPE), the weights and which donors carry them, the gap plot, all placebo gap paths overlaid, and the distribution of RMSPE ratios. Standard practice also drops donors with poor pre-treatment fit from the placebo distribution, since their large ratios are noise.

## Picture

![A treated unit's outcome path in coral diverging downward after the treatment year from a dashed blue synthetic control that tracked it closely beforehand, with faint grey donor-pool paths in the background and dotted vertical segments marking the post-treatment gap](assets/04-06-fig1.svg)

The blue dashed line is fitted to the coral one using **only the years left of the vertical marker**. Its agreement after that point is out-of-sample, and the growing gap is the estimate. The faint grey paths are the donor pool: no single one tracks the treated unit, which is exactly the situation that makes a weighted combination worth building.

## Worked examples

**Example 1 (mechanical): computing a placebo $p$-value.** A study has one treated unit and 29 donors, so $J+1 = 30$ units in total. The RMSPE ratios come back as:

- treated unit: $8.4$
- the four largest donor ratios: $6.1$, $5.2$, $4.8$, $4.4$
- all remaining donors: below $4.0$

The treated unit has the **largest** ratio, so exactly one unit (itself) has a ratio at least as large:
$$p = \frac{1}{30} = 0.033 .$$

Significant at 5 percent — and note that $1/30 = 0.033$ is the smallest $p$-value this design can produce. With 9 donors instead of 29 the floor would be $1/10 = 0.10$, and no result however dramatic could reach 5 percent. **Donor-pool size determines the finest attainable $p$-value**, which is a design decision to make before collecting data.

If the treated unit had ranked third, the $p$-value would be $3/30 = 0.10$, not significant. The procedure is a rank test, so only ordering matters — the magnitude $8.4$ against $6.1$ carries no extra weight.

**Example 2 (why you'd care): what a bad pre-treatment fit means.** Two studies, same structure, different pre-period fits.

*Study A.* Pre-treatment RMSPE of $0.8$ on an outcome with a standard deviation of $15$. The synthetic unit tracks the treated one almost exactly for twelve years. The post-treatment gap grows to $-9$, an RMSPE ratio above $10$, and the treated unit ranks first among 35.

*Study B.* Pre-treatment RMSPE of $6.2$ on the same scale. The synthetic unit wanders around the treated one, sometimes above and sometimes below. The post-treatment gap reaches $-9$ as well, but the ratio is only $1.6$ and eleven donors rank higher.

**The two studies report the same gap and mean completely different things.** In Study A, a gap of $-9$ is unprecedented relative to a pre-period where the fit never erred by more than about $1$. In Study B, a gap of $-9$ is within the range the fit produces routinely with no treatment at all.

This is why the RMSPE *ratio* is the statistic and why the pre-treatment fit must be reported. It also gives the method's honest stopping rule: **if no convex combination of donors fits the pre-period, the study should not be run.** That happens when the treated unit is extreme on some dimension — the largest economy, the highest baseline rate — and no combination of others can reach it. Abadie's advice is explicit: report the fit, and if it is poor, report that the method does not apply rather than presenting a gap plot anyway.

The comparison with DiD is instructive. A conventional DiD with a badly-chosen control group produces a confident-looking coefficient and standard error, and nothing in the output flags the problem. Synthetic control makes the same problem visible in the first figure.

## Watch out

- **You might think** a large post-treatment gap is evidence of an effect — **but actually** it must be judged against the pre-treatment fit. A method that could not match the unit before treatment has no standing to claim the post-treatment divergence is the treatment's doing.
- **You might think** more donors always help — **but actually** a larger pool improves the achievable fit but risks **overfitting the pre-period**: with enough donors you can match any pre-treatment path, including its noise, and the resulting weights generalise poorly. Keep the pool restricted to units plausibly subject to the same underlying process, and validate on held-out pre-periods.
- **You might think** the method needs no parallel-trends-style assumption — **but actually** it needs the factor structure to be stable across the treatment date, and it needs the donors to be genuinely untreated. Spillovers onto donor units (a neighbouring state absorbing displaced activity) bias the synthetic control in the opposite direction to the true effect, and nothing in the diagnostics detects it.

## One-liner

> Build the counterfactual as a convex combination of untreated units chosen to match the treated one before treatment, read the effect off the post-treatment gap, and get your $p$-value by refitting the whole thing on each donor in turn — a design whose central weakness, a pre-period it cannot fit, is visible in the first plot rather than hidden in a standard error.

## Problems

**P1 (🟢)** A synthetic control study has 15 donors. The treated unit's RMSPE ratio ranks second among all units. Compute the $p$-value and the smallest $p$-value this design could have produced. How many donors would be needed for a 5 percent result to be attainable at rank two?

**P2 (🟡)** Explain why the weights are restricted to be non-negative and to sum to one, and describe concretely what could go wrong if you dropped each restriction separately. Then say what it means when the optimiser puts weight on only three donors out of forty.

**P3 (🔴, optional)** Compare synthetic control's identifying assumption with difference-in-differences' parallel trends, using the factor model $Y_{jt}(0)=\delta_t+\lambda_t\mu_j+\varepsilon_{jt}$. Show that DiD requires $\lambda_t$ to be constant, and explain precisely how matching a long pre-period substitutes for that restriction.

<details>
<summary>Solutions</summary>

**P1** *The $p$-value.* With 15 donors there are $J+1 = 16$ units. Ranking second means two units (the treated one and one donor) have ratios at least as large:
$$p = \frac{2}{16} = 0.125 .$$
Not significant at 5 percent.

*Smallest attainable $p$-value.* Rank one gives
$$p_{\min} = \frac{1}{16} = 0.0625 .$$
**Even a first-place ranking cannot reach 5 percent with 15 donors.** This design could not have produced a significant result no matter how dramatic the effect — a fact worth knowing before running it, and structurally identical to [2.6](02-06-bootstrap-and-few-clusters.md)'s $2^G$ grid limit and [3.1](03-01-potential-outcomes-identification.md)'s randomization-inference floor.

*Donors needed for 5 percent at rank two.* We need $2/(J+1)\le 0.05$, i.e.
$$J+1 \ge 40 \qquad\Longrightarrow\qquad J \ge 39 \ \text{donors} .$$
So 39 donors would make a second-place ranking significant at exactly 5 percent ($2/40 = 0.05$), and 40 or more would clear it. For a first-place ranking the requirement is only $J\ge 19$ ($1/20 = 0.05$).

The practical implication: **donor-pool size is a power decision made at the design stage.** A study of a US state policy has at most 49 donors and is comfortable; a study of a country policy with 12 plausible comparison countries has a floor of $1/13 = 0.077$ and cannot produce a conventionally significant result at all.

**P2** *Why the restrictions exist.*

**Non-negativity** prevents the synthetic unit from being constructed by *subtracting* donors. Without it, the optimiser could set $w_{\text{Texas}} = 2.4$ and $w_{\text{Vermont}} = -1.4$, which fits the pre-period arithmetic but has no interpretation — there is no sense in which "2.4 Texases minus 1.4 Vermonts" is a plausible California. More importantly it enables **extrapolation**: the synthetic unit can be placed outside the range of anything ever observed, on any characteristic, and its post-treatment behaviour is then a pure model prediction rather than a weighted average of things that actually happened.

**Summing to one** fixes the scale and makes the synthetic unit a genuine average rather than a scaled one. Without it, the optimiser could match a level difference by scaling ($w$ summing to $1.3$, say) rather than by finding genuinely similar units, and the resulting composite would respond to shocks at the wrong magnitude — a 10 percent national shock would move the synthetic unit by 13 percent.

Together the two restrictions confine the synthetic unit to the **convex hull** of the donor pool. That is the interpolation-versus-extrapolation guarantee, and it is what makes a poor fit informative: if the treated unit lies outside the hull, no weighting can reach it, the pre-period RMSPE stays large, and the method reports its own inapplicability.

*What sparsity means.* Three positive weights out of forty says the pre-treatment path of the treated unit is well approximated by a combination of just three donors, and that the other thirty-seven add nothing once those three are included. Two readings, and both are worth stating in a paper:

- **Interpretability, which is a genuine advantage.** You can name the three units and let a reader assess whether they are sensible comparisons. A DiD with forty controls offers no such account of where the counterfactual comes from.
- **Fragility, which is the corresponding risk.** The estimate rests on three units, so it inherits anything idiosyncratic about them — including any policy *they* adopted during the post-period, which would contaminate the counterfactual. Standard practice is a **leave-one-out** robustness check: re-estimate dropping each positively-weighted donor in turn, and show the gap path is stable. If dropping one donor changes the conclusion, say so.

Sparsity is not an accident: it is a known consequence of optimising a quadratic objective over a simplex, whose solutions sit at or near vertices and low-dimensional faces.

**P3** *Setup.* Write the untreated potential outcome as
$$Y_{jt}(0) = \delta_t + \lambda_t\mu_j + \varepsilon_{jt} ,$$
where $\delta_t$ is a common time effect, $\mu_j$ is unit $j$'s vector of unobserved **factor loadings**, and $\lambda_t$ is the time-varying **factor** — the return to those loadings in period $t$.

*What DiD requires.* Difference-in-differences assumes parallel trends: for treated unit $1$ and control $c$,
$$E[Y_{1t}(0)-Y_{1s}(0)] = E[Y_{ct}(0)-Y_{cs}(0)] .$$
Substituting the factor model, the common $\delta$ terms cancel and this becomes
$$(\lambda_t-\lambda_s)\mu_1 = (\lambda_t-\lambda_s)\mu_c \qquad\Longleftrightarrow\qquad (\lambda_t-\lambda_s)(\mu_1-\mu_c) = 0 .$$
So parallel trends holds only if **either** $\mu_1 = \mu_c$ (the units have identical unobserved loadings — which is exactly what a confounder means they do not) **or** $\lambda_t = \lambda_s$ for all $t,s$, i.e. **the factor is constant over time**.

A constant $\lambda$ means the unobserved heterogeneity enters as a fixed unit effect $\lambda\mu_j$, which the unit fixed effects of [4.1](04-01-panel-data-fixed-effects.md) absorb. **This is precisely the restriction that panel fixed effects imposes: unobserved confounders may differ across units but their influence may not change over time.** A state's "industrial structure" may make it permanently different, but not differentially responsive to a national recession.

*How synthetic control substitutes for it.* Choose weights $W$ with $\sum_j w_j = 1$ such that the synthetic unit matches the treated one on **every pre-treatment period**:
$$Y_{1t} = \sum_j w_j Y_{jt} \quad\text{for } t=1,\dots,T_0 .$$
Substituting the factor model and cancelling $\delta_t$ (which the sum-to-one constraint permits):
$$\lambda_t\mu_1 + \varepsilon_{1t} = \lambda_t\Bigl(\sum_j w_j\mu_j\Bigr) + \sum_j w_j\varepsilon_{jt} \quad\text{for each } t\le T_0 .$$

Ignoring the noise terms, this is a system of $T_0$ equations in the unknown discrepancy $\mu_1 - \sum_j w_j\mu_j$, each of the form $\lambda_t\bigl(\mu_1-\sum_j w_j\mu_j\bigr) = 0$. **If the $\lambda_t$ vectors span the factor space** — which requires the pre-period to be long enough and the factors to actually vary over it — the only solution is
$$\mu_1 = \sum_j w_j\,\mu_j ,$$
so the synthetic unit matches the treated unit's *unobserved* loadings, not merely its observed characteristics. Matching then continues to hold after $T_0$ for any $\lambda_t$ whatsoever, and the post-treatment gap isolates the treatment effect.

*The comparison, stated precisely.* DiD restricts the **world** ($\lambda_t$ must be constant) and needs only two periods. Synthetic control restricts the **data requirement** (a long pre-period with variation in $\lambda_t$, and a donor pool rich enough to contain the treated unit's loadings in its convex hull) and permits $\lambda_t$ to vary freely. So synthetic control's assumption is weaker where it matters — it allows unobserved confounders to have time-varying effects, which is the most common way parallel trends fails — at the cost of a demand the data may not meet.

Two caveats that follow from the derivation. The argument is **approximate**: the noise terms $\varepsilon_{jt}$ mean the match is never exact, and Abadie and coauthors show the bias is bounded by a term that shrinks as $T_0$ grows and as the pre-treatment fit improves — which is the formal reason a good pre-period RMSPE is not merely reassuring but load-bearing. And $\lambda_t$ must genuinely **vary** over the pre-period: if the factor happens to be constant before treatment and then changes afterwards, matching the pre-period pins down nothing about $\mu$, and the method inherits exactly the failure it was built to avoid.

</details>

## Flashback

**From Lesson 4.5 (staggered adoption and modern DiD):** Two units, four periods. Unit $A$ adopts at $t=2$, unit $B$ at $t=4$, with no never-treated unit. The treatment effect $k$ periods after adoption is $\tau(k)=k+1$. Compute the true ATT over treated cells, and compute the two-by-two comparison that uses $A$ as a control for $B$ over the window $t\in\{2,3\}$ versus $t=4$. Explain the sign.

<details>
<summary>Solution</summary>

*True ATT.* The treated cells are $A$ at $t=2,3,4$ (so $k=0,1,2$, effects $1,2,3$) and $B$ at $t=4$ ($k=0$, effect $1$):
$$\mathrm{ATT} = \frac{1+2+3+1}{4} = \frac{7}{4} = 1.75 .$$

*The contaminated comparison.* Treating $B$ as the switcher and $A$ as the "control", over pre-window $t\in\{2,3\}$ and post-period $t=4$. Because unit fixed effects and the common time trend difference out, work directly with the treatment-effect components:

- **$B$'s change.** $B$ is untreated at $t=2,3$ (effect $0$) and treated at $t=4$ with effect $\tau(0)=1$. Change $= 1-0 = +1$.
- **$A$'s change.** $A$ is already treated throughout: its effect averages $(\tau(0)+\tau(1))/2 = (1+2)/2 = 1.5$ over $t\in\{2,3\}$, and is $\tau(2)=3$ at $t=4$. Change $= 3-1.5 = +1.5$.

$$\mathrm{DiD} = 1 - 1.5 = -0.50 .$$

*Explaining the sign.* The comparison is negative even though **both** units have strictly positive treatment effects in every treated cell. The reason is that $A$, used as the control, is not holding still — it is in the middle of its own **growing** response, gaining $1.5$ units of treatment effect over exactly the window in which $B$'s fresh effect only reaches $1$. Subtracting the control's change therefore subtracts $A$'s effect growth from $B$'s effect, and since $1.5 > 1$, the result is negative.

This is the forbidden comparison of [4.5](04-05-staggered-adoption-modern-did.md) in its simplest form. The clean comparison in the same panel — $A$ against not-yet-treated $B$, over $t=1$ versus $t\in\{2,3\}$ — correctly returns $+1.5$, which is $A$'s average effect over its first two treated periods. Two-way fixed effects averages the clean $+1.5$ and the contaminated $-0.50$ and lands at $0.50$, below every individual effect.

The connection to this lesson: synthetic control avoids the problem structurally, because its donor pool is restricted to **never-treated** units by construction. There is no mechanism by which an already-treated unit can enter the counterfactual, so the contamination cannot arise. That is one reason synthetic control and its extensions (synthetic difference-in-differences, and the generalised synthetic control estimator) became popular at the same moment the staggered-DiD problem was recognised — they were already immune to it.

</details>

## Connections

- **Backward:** this generalises [4.3](04-03-difference-in-differences.md) from one control unit to a weighted combination, and it sidesteps [4.5](04-05-staggered-adoption-modern-did.md)'s contamination by using only never-treated donors. The placebo inference is [2.6](02-06-bootstrap-and-few-clusters.md)'s randomization inference with donors playing the role of alternative assignments, and it inherits the same discreteness floor.
- **Forward:** [4.7](04-07-regression-discontinuity.md) offers the other main route to a credible single-unit comparison — identification from a threshold rule rather than from a matched trajectory. The convex-weight optimisation is a constrained least-squares problem, and its estimation by minimising a fit criterion previews the general principle of [5.1](05-01-maximum-likelihood-estimation.md) and [5.2](05-02-generalized-method-of-moments.md).
- **Sideways:** the constrained-weight construction is a shrinkage estimator in disguise — the simplex constraint plays the role of a penalty, which is why the solution is sparse for the same reason lasso solutions are sparse in [`statistical-learning` 2.4](../../statistical-learning/lessons/02-04-lasso-and-the-geometry-of-sparsity.md). Note the two courses use different penalty normalisations, so compare the geometry rather than the formulas.
