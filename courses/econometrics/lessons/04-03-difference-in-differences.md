# Econometrics · Lesson 4.3: Difference-in-differences

> ⏱ ~15 min · Module 4: Panel data and quasi-experiments · Builds on: [3.8 (weak instruments and LATE)](03-08-weak-instruments-and-late.md), [4.1 (fixed effects)](04-01-panel-data-fixed-effects.md) · Unlocks: 4.4 (event studies), 4.5 (staggered adoption)

## Why this matters

A policy affects some places and not others, starting at a known date. That is the most common shape of a natural experiment in economics, and difference-in-differences is the design built for it. It is probably the single most-used causal design in the field.

Its appeal is that it fixes the two obvious flaws in the two obvious naive comparisons. Comparing treated and control units *after* the policy confounds the policy with pre-existing differences between the groups. Comparing the treated group *before and after* confounds the policy with everything else that changed over time. DiD does both subtractions, and each removes the other's problem.

What survives both subtractions is a single assumption, and it is not testable. Every serious DiD paper is an argument about that assumption.

## The idea

Take the treated group's change over time, and subtract the control group's change over the same period. The first difference removes anything permanently different about the treated group. The second removes anything that happened to everyone.

The logic is a substitution: you cannot observe what the treated group *would* have done without the policy, so you use the control group's change as a stand-in for it. If the control group's trend is the right stand-in, you have your answer.

That "if" is **parallel trends**, and stating it correctly matters. It is not that the two groups are similar, or have similar levels, or were on similar trends *before* — it is that in the absence of treatment, their *outcomes would have moved in parallel over the treatment window*. Pre-treatment parallelism is evidence about it, not a proof of it, and [4.4](04-04-event-studies-dynamic-did.md) takes up exactly how much evidence.

## The formal version

Two groups ($g\in\{T,C\}$) and two periods ($t\in\{0,1\}$). In potential-outcomes notation ([3.1](03-01-potential-outcomes-identification.md)), let $Y_{it}(0)$ and $Y_{it}(1)$ be outcomes with and without the policy.

> **Assumption (parallel trends).**
> $$E[Y_{i1}(0)-Y_{i0}(0)\mid g=T] \;=\; E[Y_{i1}(0)-Y_{i0}(0)\mid g=C] .$$

*In words:* absent treatment, the two groups' average outcomes would have changed by the same amount. Note it concerns $Y(0)$ for **both** groups, including the treated group's unobserved counterfactual — which is what makes it untestable.

> **Assumption (no anticipation).** $Y_{i0} = Y_{i0}(0)$ for the treated group: behaviour in the pre-period is not already responding to the announced policy.

> **Theorem (DiD identifies the ATT).** Under parallel trends and no anticipation,
> $$\mathrm{ATT} = \bigl(E[Y\mid T,1]-E[Y\mid T,0]\bigr) - \bigl(E[Y\mid C,1]-E[Y\mid C,0]\bigr) .$$

*Proof.* The treated group's observed change is $E[Y(1)\mid T,1]-E[Y(0)\mid T,0]$. Add and subtract the counterfactual $E[Y(0)\mid T,1]$:
$$= \underbrace{\bigl(E[Y(1)\mid T,1]-E[Y(0)\mid T,1]\bigr)}_{\mathrm{ATT}} + \underbrace{\bigl(E[Y(0)\mid T,1]-E[Y(0)\mid T,0]\bigr)}_{\text{treated group's untreated trend}} .$$
Parallel trends says the second term equals the control group's observed change, so subtracting the control change leaves the ATT. $\square$

**Note the estimand: the ATT, not the ATE.** DiD tells you the effect on the units that got treated. Nothing in the design speaks to what the policy would have done in the control states.

**Regression form.** With $D_{it}=1$ for treated units in the post period,
$$Y_{it} = \alpha + \gamma\,\text{Treat}_i + \lambda\,\text{Post}_t + \beta\,D_{it} + u_{it} ,$$
and $\hat\beta$ is the DiD estimate. Equivalently, with unit and time fixed effects,
$$Y_{it} = \alpha_i + \lambda_t + \beta D_{it} + u_{it} ,$$
which is [4.1](04-01-panel-data-fixed-effects.md)'s two-way fixed effects. In the 2x2 case these are identical, and $\hat\beta$ is exactly the four-cell difference of differences.

**The DiD estimate is an interaction coefficient.** $D_{it} = \text{Treat}_i\times\text{Post}_t$, so the design is [1.6](01-06-functional-form-logs-interactions.md)'s interaction term doing causal work.

**Standard errors: cluster by unit.** Not by unit-period. [2.5](02-05-clustered-standard-errors.md)'s Bertrand–Duflo–Mullainathan result was demonstrated on exactly this design, with a 45 percent rejection rate for true nulls when serial correlation was ignored. With few treated clusters, add [2.6](02-06-bootstrap-and-few-clusters.md)'s wild cluster bootstrap.

**What breaks parallel trends.**

- **Differential pre-trends.** The groups were already diverging. Checkable, and [4.4](04-04-event-studies-dynamic-did.md)'s subject.
- **Contemporaneous shocks.** Something else hit one group at the same time. This is the hardest threat, because it is invisible in pre-period data.
- **Compositional change.** The groups' membership changed between periods (migration, entry, attrition) — so you are comparing different people, not the same ones responding.
- **Ashenfelter's dip.** Units are selected into treatment *because* of a temporary downturn, so their outcome was unusually low just before treatment and would have rebounded anyway. Common in job-training evaluation, and it makes the pre-period look misleadingly flat or downward-sloping.
- **Functional form.** Parallel trends in levels and parallel trends in logs are different assumptions, and both cannot hold unless the effect is zero. Choosing the scale is a substantive decision, not a robustness check.

## Picture

![Four points connected by lines: the control group falling from 23.0 to 21.5, the treated group rising from 20.0 to 21.0, and a dashed counterfactual line from 20.0 falling to 18.5 parallel to the control, with the gap of 2.5 between the treated endpoint and the counterfactual marked as the DiD estimate](assets/04-03-fig1.svg)

The treated group rose by $1.0$ and the control fell by $1.5$, so the estimate is $1.0-(-1.5) = 2.5$. Two things to read off. First, the treated group's *level* is below the control's throughout, and that never matters — DiD compares changes, so a permanent level gap is exactly what the first difference removes. Second, the dashed counterfactual is drawn parallel to the control by assumption; it is the one line in the figure with no data behind it, and the entire estimate is the vertical distance to it.

## Worked examples

**Example 1 (mechanical): the four-cell computation.** A state raises its minimum wage; a neighbouring state does not. Employment in fast-food restaurants, in full-time-equivalent workers per store:

| | before | after | change |
|---|---|---|---|
| Treated state | $20.0$ | $21.0$ | $+1.0$ |
| Control state | $23.0$ | $21.5$ | $-1.5$ |
| | | | **DiD $= +2.5$** |

The treated state's employment *rose* by 1.0 while the control's *fell* by 1.5, giving a DiD estimate of $+2.5$ workers per store.

Three readings you should be able to give instantly:

- The **before-after** comparison alone would say $+1.0$ — it attributes to the policy whatever regional trend was also happening.
- The **after-only cross-section** would say $21.0-21.5 = -0.5$ — it attributes to the policy the permanent level gap between the states.
- The **DiD** says $+2.5$, and is right *if* the treated state would have fallen by 1.5 too.

Note that the DiD estimate here is larger than either naive comparison, and of the opposite sign to one of them. That is normal; the naive comparisons are not bounds.

**Example 2 (why you'd care): the log-versus-levels problem is a real choice.** Suppose treated-group employment goes from $100$ to $110$ and control from $200$ to $216$.

*In levels:* treated change $+10$, control change $+16$, DiD $= 10-16 = -6$. The policy **reduced** employment by 6.
*In logs:* treated change $\log(110/100) = 0.0953$, control $\log(216/200) = 0.0770$, DiD $= 0.0953-0.0770 = +0.0183$ log points, or about $+1.85$ percent. The policy **increased** employment by nearly 2 percent.

**Opposite signs from the same four numbers.** Neither is a computational error. Parallel trends in levels says both groups would have gained the same *number* of jobs; parallel trends in logs says both would have gained the same *percentage*. Those are different assumptions about the world, and the control group grew by 8 percent while the treated group grew by 10 percent — so in proportional terms the treated group did better, and in absolute terms it did worse.

The two can only agree when the groups have the same baseline level, which is why DiD is most credible when treated and control units are similar in scale. **The remedy is not a robustness check but an argument**: state which scale the economics implies before you look. If the policy plausibly affects a *proportion* of jobs, logs is the right specification and you should say so in advance. Reporting whichever gives the cleaner result is [2.7](02-07-multiple-testing-specification-search.md)'s specification search in one of its most consequential forms.

## Watch out

- **You might think** similar pre-treatment levels support parallel trends — **but actually** levels are irrelevant; DiD differences them away. Two groups at wildly different levels can have perfectly parallel trends, and two groups at identical levels can be diverging. Look at the *trends*, not the gap.
- **You might think** parallel pre-trends prove the assumption — **but actually** they are evidence about the pre-period, and the assumption concerns the post-period counterfactual. A shock coinciding with treatment leaves pre-trends untouched and destroys the design. Pre-trend tests are also frequently underpowered, so "we cannot reject parallel trends" often means "we could not have detected a violation".
- **You might think** the choice between levels and logs is a robustness check — **but actually** it changes the identifying assumption and can change the sign. Pick the scale from the economics, state it before estimating, and report the other one only as a transparent sensitivity, not as an alternative headline.

## One-liner

> Difference the treated group over time to remove what is permanent about it, difference the control group over the same window to remove what happened to everyone, and subtract — leaving the ATT under a parallel-trends assumption that concerns a counterfactual trend you will never observe.

## Problems

**P1 (🟢)** Treated group: $48$ before, $57$ after. Control: $61$ before, $64$ after. Compute the DiD estimate in levels and in logs. Do they agree in sign? Which naive comparison would have been furthest from the DiD answer?

**P2 (🟡)** Show that the DiD estimate equals the coefficient $\hat\beta$ on the interaction $\text{Treat}\times\text{Post}$ in the saturated regression, by writing out the four fitted cell means in terms of $\alpha,\gamma,\lambda,\beta$.

**P3 (🔴, optional)** A DiD study has 2 treated states and 18 control states, observed over 10 years, and reports a clustered standard error using 20 clusters. Explain the three separate inference problems here, and describe what you would report instead.

<details>
<summary>Solutions</summary>

**P1** *Levels.*
$$\text{treated change} = 57-48 = +9, \qquad \text{control change} = 64-61 = +3, \qquad \mathrm{DiD} = 9-3 = +6 .$$

*Logs.*
$$\log(57/48) = \log(1.1875) = 0.171850, \qquad \log(64/61) = \log(1.049180) = 0.048017 ,$$
$$\mathrm{DiD}_{\log} = 0.171850-0.048017 = 0.123833 \ \text{log points} \approx 13.2\% \ \text{using } 100(e^{0.1238}-1) .$$

*Do they agree in sign?* **Yes**, both are positive. That happens here because the treated group grew faster in *both* absolute ($+9$ vs $+3$) and proportional ($+18.75\%$ vs $+4.92\%$) terms. Unlike Example 2, the two rankings coincide, so the scale choice affects the magnitude and the interpretation but not the sign.

*Which naive comparison is furthest?* Compute both:

- **Before-after on the treated group:** $+9$, which is $3$ away from the DiD estimate of $6$.
- **After-only cross-section:** $57-64 = -7$, which is $13$ away, and of the **opposite sign**.

The cross-sectional comparison is far worse, because the treated state's permanent level disadvantage (it starts $13$ below) swamps the effect. This is the general pattern: level differences between groups are usually much larger than either the treatment effect or the common time trend, so the cross-section is typically the more misleading of the two naive comparisons.

**P2** Write the regression $Y_{it} = \alpha + \gamma\,\text{Treat}_i + \lambda\,\text{Post}_t + \beta\,(\text{Treat}_i\times\text{Post}_t) + u_{it}$. Because the four cells are exactly saturated by the four parameters, OLS fits each cell mean perfectly:

| cell | Treat | Post | fitted mean |
|---|---|---|---|
| control, before | $0$ | $0$ | $\alpha$ |
| control, after | $0$ | $1$ | $\alpha+\lambda$ |
| treated, before | $1$ | $0$ | $\alpha+\gamma$ |
| treated, after | $1$ | $1$ | $\alpha+\gamma+\lambda+\beta$ |

Now compute the difference of differences:
$$\underbrace{\bigl[(\alpha+\gamma+\lambda+\beta)-(\alpha+\gamma)\bigr]}_{\text{treated change} \,=\, \lambda+\beta} - \underbrace{\bigl[(\alpha+\lambda)-\alpha\bigr]}_{\text{control change}\,=\,\lambda} = (\lambda+\beta)-\lambda = \beta . \ \checkmark$$

So $\hat\beta$ **is** the difference of differences, exactly and by construction.

The parameter interpretations are worth naming, since they are routinely misread. $\gamma$ is the permanent level gap between the groups — differenced away, and never of causal interest. $\lambda$ is the common time trend — the control group's change, which serves as the counterfactual. $\beta$ is everything the treated group did in the post period *beyond* the common trend. And since the model is saturated, this is an algebraic identity that holds regardless of whether parallel trends is true: the regression always returns the four-cell difference of differences. **Parallel trends is what makes that number the ATT, not what makes the algebra work.**

**P3** Three distinct problems, often conflated:

**1. The effective number of clusters is 2, not 20.** The asymptotics for cluster-robust standard errors run in the number of clusters, but more precisely in the number of clusters *with variation in the treatment*. With 2 treated states, all the identifying variation comes from 2 units. Conley and Taber showed that standard cluster-robust inference is invalid in this regime — it is not merely imprecise, it is inconsistent, because the treated-group residual variance cannot be estimated from two draws. Reporting "clustered at the state level, $G=20$" gives a false impression of robustness.

**2. Even at $G=20$, small-$G$ corrections would be needed.** Setting the treated-count problem aside, [2.5](02-05-clustered-standard-errors.md) and [2.6](02-06-bootstrap-and-few-clusters.md) say cluster-robust standard errors are biased downward below roughly 30–40 clusters, and the reference distribution should be near $t_{G-1}=t_{19}$ (critical value $2.093$) rather than the normal. The conventional interval is too narrow on this count alone.

**3. Serial correlation over 10 years within a state.** This is the Bertrand–Duflo–Mullainathan problem directly. Clustering by state is the correct response and appears to have been done — but with only 2 treated clusters, the correction has nothing to estimate from, so the right fix cannot actually be applied.

*What to report instead.*

- **Conley–Taber inference**, which is designed for exactly this case: it uses the distribution of the *control* states' residuals to build a reference distribution for the treated states' estimate, rather than trying to estimate a variance from two treated units.
- **Randomization inference / placebo-in-space**, following [2.6](02-06-bootstrap-and-few-clusters.md) and the synthetic-control tradition of [4.6](04-06-synthetic-control.md): re-estimate the design pretending each of the 18 control states was treated, and rank the true estimate against the 18 placebo estimates. With 18 placebos the finest attainable one-sided $p$-value is $1/19 = 0.053$ — so a 5 percent test is right at the boundary of feasibility, which is itself worth stating.
- **The wild cluster bootstrap**, with Webb weights given the small $G$ — though with 2 treated clusters even this is known to perform poorly, and it should be reported as one of several rather than as the fix.
- **The raw picture.** With 2 treated and 18 control states, plot every state's outcome path. A reader can assess parallel trends by eye far better than any statistic can summarise, and with 20 units the plot is legible.

The honest framing: this design has 2 independent treated observations. It may still be the best available evidence, and the paper can be worth writing — but the write-up should present it as a case study with quantified uncertainty rather than as a regression with a standard error, and [4.6](04-06-synthetic-control.md)'s methods are built for precisely this situation.

</details>

## Flashback

**From Lesson 3.8 (weak instruments and LATE):** An IV study reports a first stage of $0.08$ and an estimate of $\hat\beta^{IV} = 14.2$ with a first-stage $F$ of $7.4$. State what fraction of the population the estimate describes, assess the reliability of the reported confidence interval, and say what a direct effect of the instrument worth $0.30$ outcome units would contribute to the estimate.

<details>
<summary>Solution</summary>

*Fraction of the population.* With a binary instrument, the first stage **is** the complier share ([3.8](03-08-weak-instruments-and-late.md)), so the estimate describes the **8 percent** of the population who are compliers. The other 92 percent — always-takers and never-takers — contribute nothing to either the numerator or the denominator, and their treatment effects are entirely unidentified. Reporting $14.2$ as "the effect" without naming this is a serious overstatement of scope.

*Reliability of the confidence interval.* Poor. With $F = 7.4$:

- The relative bias toward OLS is roughly $1/F = 1/7.4 = 0.135$, so 2SLS retains about **14 percent** of the OLS bias — below Stock–Yogo's $16.38$ threshold for 10 percent bias.
- Far more seriously, valid $t$-inference requires roughly $F > 104.7$ (Lee, McCrary, Moreira and Porter). At $F=7.4$ the true size of a nominal 5 percent test is well above 5 percent and the interval's coverage is well below 95 percent. **The reported interval does not mean what it says.**

The right report is an **Anderson–Rubin** confidence set, valid at any instrument strength, together with the reduced form and first stage separately — both of which are ordinary OLS regressions on an exogenous variable and are perfectly well estimated even though their ratio is not.

*Contribution of a direct effect of $0.30$.* From [3.6](03-06-instrumental-variables.md) P3, an exclusion violation $\eta$ contributes an asymptotic bias of $\eta/\pi_1$. Here
$$\frac{\eta}{\pi_1} = \frac{0.30}{0.08} = 3.75 .$$

So a direct effect of only $0.30$ outcome units — small enough that most researchers would not think to mention it, and far too small to detect — contributes $3.75$ to an estimate of $14.2$, or about **26 percent of the reported effect**. A direct effect of $1.1$ would account for the entire estimate.

This is the compounding [3.8](03-08-weak-instruments-and-late.md) insists on: weakness does not merely widen the interval, it multiplies every exclusion violation by $1/\pi_1 = 12.5$. With a first stage this small, the exclusion restriction would need to hold to a precision no institutional argument can deliver. The estimate of $14.2$ should be treated as uninformative about the parameter, and the design as one that cannot answer the question — which is a more useful conclusion than a large number with a stated interval.

</details>

## Connections

- **Backward:** the 2x2 design is [4.1](04-01-panel-data-fixed-effects.md)'s two-way fixed effects with a treatment indicator, and by [4.2](04-02-first-differencing-random-effects.md)'s $T=2$ equivalence it is also first differencing. The estimand is [3.1](03-01-potential-outcomes-identification.md)'s ATT, and the regression form is [1.6](01-06-functional-form-logs-interactions.md)'s interaction term.
- **Forward:** [4.4](04-04-event-studies-dynamic-did.md) unpacks the single $\beta$ into period-by-period coefficients so pre-trends become visible and the effect's timing is traced. [4.5](04-05-staggered-adoption-modern-did.md) shows that when units adopt at different times, the two-way fixed-effects regression stops estimating the ATT — the single most important caveat to everything in this lesson. [4.6](04-06-synthetic-control.md) handles the case where no control unit is credible on its own.
- **Sideways:** the log-versus-levels problem is [1.6](01-06-functional-form-logs-interactions.md)'s functional-form choice with unusually high stakes, since here it changes an identifying assumption rather than just a coefficient's units. It is also why the minimum-wage literature spent decades arguing about specification: with treated and control areas of different sizes, the scale choice can determine the sign.
