# Econometrics · Lesson 4.5: Staggered adoption and modern DiD

> ⏱ ~15 min · Module 4: Panel data and quasi-experiments · Builds on: [4.4 (event studies)](04-04-event-studies-dynamic-did.md), [3.3 (regression anatomy)](03-03-regression-anatomy-good-and-bad-controls.md) · Unlocks: 4.6 (synthetic control), 4.7 (regression discontinuity)

## Why this matters

Almost no policy arrives everywhere at once. States adopt over a decade, firms comply on a rolling schedule, countries sign a treaty in different years. For thirty years the standard response was to run two-way fixed effects with a treatment dummy and read off the coefficient.

Between 2018 and 2021 the profession discovered that this is **wrong**, and not subtly wrong. Under staggered adoption with effects that change over time, the two-way fixed-effects coefficient can be smaller than every unit's true effect, or larger than all of them, or have the opposite sign. Hundreds of published papers are affected.

The cause is mechanical and, once seen, obvious: with staggered timing, TWFE compares late adopters against units that are **already treated**. This lesson is the single most consequential update to applied practice in the last decade, and it has a clean diagnosis and clean fixes.

## The idea

In the clean 2x2 design, the control group is untreated throughout. With staggered timing there is no single control group — TWFE assembles its estimate from many implicit 2x2 comparisons, and they are not all legitimate.

Some are fine: an early adopter compared against a unit that has *not yet* adopted is a proper DiD, since the comparison unit is genuinely untreated in both periods.

One is not. A late adopter compared against a unit that adopted **earlier** uses an already-treated unit as the control. If that earlier unit's effect is still evolving, its change over the comparison window contains *its own treatment effect*, which then gets subtracted from the late adopter's. You are differencing out a treatment effect and calling the remainder a treatment effect.

Goodman-Bacon showed that TWFE is a weighted average of all these 2x2 comparisons, and that the forbidden ones can receive **negative weights**. A weighted average with negative weights need not lie between the smallest and largest thing being averaged — which is exactly how a coefficient escapes the range of every true effect.

## The formal version

Let $G_i$ be unit $i$'s adoption period ($G_i=\infty$ for never-treated). The static specification is
$$Y_{it} = \alpha_i+\lambda_t + \beta\,D_{it}+u_{it}, \qquad D_{it}=\mathbf 1\{t\ge G_i\} .$$

> **Goodman-Bacon decomposition.** $\hat\beta_{TWFE}$ is a weighted average of all pairwise 2x2 DiD estimates, with weights proportional to each pair's group sizes and the variance of treatment within the pair. The comparisons are of three kinds:
> 1. **early-adopter vs never-treated** — clean;
> 2. **later-adopter vs not-yet-treated** — clean;
> 3. **later-adopter vs already-treated** — **contaminated**.

> **Theorem (de Chaisemartin–D'Haultfœuille; Borusyak–Jaravel–Spiess).** Under staggered adoption with heterogeneous or dynamic treatment effects, $\hat\beta_{TWFE}$ is a weighted sum of unit-period treatment effects in which **some weights are negative**. Consequently $\hat\beta_{TWFE}$ can lie outside the convex hull of all individual treatment effects, including having the opposite sign.

*In words:* TWFE does not estimate a weighted average of treatment effects in any useful sense. It estimates a weighted sum whose weights are determined by the *timing structure* of adoption, not by anything you care about.

**Why the contaminated comparison fails.** Take late adopter $B$ switching at $t=4$, using early adopter $A$ (switched at $t=2$) as control over the window $t\in\{2,3\}$ versus $t=4$. The "control" change is
$$\bigl[Y_A(4) - \overline{Y_A(2,3)}\bigr] = \text{common trend} + \bigl[\tau_A(2) - \overline{\tau_A(0),\tau_A(1)}\bigr] ,$$
where $\tau_A(k)$ is $A$'s effect $k$ periods after its own treatment. If $A$'s effect is **growing**, that second bracket is positive, and subtracting it drags the estimate down. Only if treatment effects are constant over time does the bracket vanish and the comparison become legitimate.

> **The homogeneity condition.** TWFE recovers the ATT under staggered adoption if and only if treatment effects are **constant across units and across time since treatment**. Any dynamics — a phase-in, a fade-out, a build-up — breaks it.

That condition is almost never plausible. Policies take time to bite; [4.4](04-04-event-studies-dynamic-did.md)'s Example 1 had two-thirds of the effect arriving after year one, which is typical.

**Diagnosis.** Run the Goodman-Bacon decomposition (available in standard packages): it reports the weight and estimate for each comparison type. If the "already-treated" comparisons carry substantial weight, the TWFE estimate is suspect. Also report the share of negative weights.

**Fixes.** All the modern estimators share one principle — **never use an already-treated unit as a control.**

| Estimator | Approach | Requires |
|---|---|---|
| **Callaway–Sant'Anna** | estimate $\mathrm{ATT}(g,t)$ for each cohort $g$ and period $t$ using only not-yet-treated or never-treated controls, then aggregate with chosen weights | a clean control group |
| **Sun–Abraham** | interaction-weighted event study: saturate in cohort $\times$ event time, then average | same |
| **Borusyak–Jaravel–Spiess** | impute untreated potential outcomes from never-treated and pre-treatment data, then average the residuals | parallel trends for all units |
| **de Chaisemartin–D'Haultfœuille** | estimators built on units that switch between consecutive periods | switchers exist |

They differ in aggregation and efficiency, rarely in headline conclusion. The key output is a **cohort-specific event study**: $\mathrm{ATT}(g,t)$ plotted by cohort, then aggregated by event time.

**The contaminated event study.** Even the dynamic specification of [4.4](04-04-event-studies-dynamic-did.md) is affected: with staggered timing, the coefficient at event time $k$ is contaminated by *other cohorts' effects at other event times*. A cohort-specific event study can therefore show spurious pre-trends that vanish under Sun–Abraham. **A sloping pre-period in a staggered TWFE event study may be an artefact of the estimator rather than evidence about the world.**

## Picture

![Two adoption paths over four periods with unit A switching at period 2 and unit B at period 4, alongside the two Goodman-Bacon comparisons: the clean early-versus-not-yet-treated giving plus 1.50 and the forbidden late-versus-already-treated giving minus 0.50](assets/04-05-fig1.svg)

Two units, four periods, and every true effect is positive: $A$ gains $1, 2, 3$ in its three treated periods and $B$ gains $1$ in its one. The true average over treated cells is $1.75$. Two-way fixed effects returns $0.50$. The right panel shows why — the second comparison uses $A$, whose own effect is still growing, as the control for $B$, and returns $-0.50$.

## Worked examples

**Example 1 (mechanical): eight observations that break TWFE.** Two units, four periods. Unit $A$ adopts at $t=2$; unit $B$ at $t=4$. There is no never-treated unit. The data-generating process is
$$Y_{it} = a_i + 0.5t + \tau(t-G_i)\mathbf 1\{t\ge G_i\}, \qquad \tau(k)=k+1 ,$$
with $a_A = 5$, $a_B = 8$. So the effect grows: $1$ in the first treated period, $2$ in the second, $3$ in the third.

Treated cells and their true effects: $A$ at $t=2,3,4$ gets $1, 2, 3$; $B$ at $t=4$ gets $1$. The **true ATT** averaged over treated cells is
$$\frac{1+2+3+1}{4} = \frac{7}{4} = 1.75 .$$

Running the TWFE regression of $Y$ on $D$, unit dummies and period dummies on these eight observations gives
$$\hat\beta_{TWFE} = 0.50 .$$

**Every individual effect is at least $1$, and the estimate is $0.50$** — below the minimum, a 71 percent understatement.

*The decomposition.* Two 2x2 comparisons:

- **(i) $A$ (early) vs $B$ (not yet treated), $t=1$ against $t\in\{2,3\}$.** $B$ is genuinely untreated throughout this window, so this is a clean DiD. It returns $+1.50$, correctly recovering $A$'s average effect over its first two treated periods, $(1+2)/2 = 1.5$. $\checkmark$
- **(ii) $B$ (late) vs $A$ (already treated), $t\in\{2,3\}$ against $t=4$.** $A$ is treated in every period of this window and its effect is growing from $1.5$ (average of periods 2 and 3) to $3$. The comparison returns $-0.50$.

Check what happened in (ii). $B$'s true effect at $t=4$ is $+1$. $A$'s effect *grew* by $3 - 1.5 = 1.5$ over the same window. Subtracting the control's change subtracts that growth:
$$1 - 1.5 = -0.50 .\ \checkmark$$
The comparison reports a negative number for a positive treatment, purely because the "control" was busy having its own treatment effect.

TWFE averages the two comparisons and lands at $0.50$, between $+1.50$ and $-0.50$ and below every true effect.

**Example 2 (why you'd care): what this did to a literature.** Consider a typical published design — 50 states adopting a policy across 1995–2010, a two-way fixed-effects regression, one coefficient, clustered standard errors, an event study showing flat pre-trends. By the standards of 2015 that is a well-executed paper.

Three things are now known to be wrong with it:

1. **The point estimate is contaminated.** Late-adopting states are being compared against early adopters. If the policy's effect grows over time — as most do — the estimate is biased toward zero, and if the growth is strong enough it can flip sign.
2. **The event study may be contaminated too.** The event-time coefficients mix cohorts at different points in their own response paths. A flat pre-period is not reassurance, and a *sloping* pre-period may be an artefact rather than a real violation.
3. **The bias direction is not general.** It depends on the adoption timing distribution and the shape of the dynamic response. You cannot argue "the bias is toward zero so my estimate is conservative" without doing the decomposition — sometimes it is, sometimes it is not.

When these estimators were applied to existing literatures, results moved substantially. Re-examinations of minimum-wage, family-leave, and gun-law studies found headline effects changing in magnitude and occasionally in sign.

**What to do with any staggered design.** Report (a) the Goodman-Bacon weights, so a reader sees how much rests on forbidden comparisons; (b) a Callaway–Sant'Anna or Sun–Abraham estimate as the headline; (c) the cohort-specific event study; and (d) TWFE alongside, for comparability with the older literature. When (b) and (d) agree, say so — that is genuine evidence of robustness, and it happens often when adoption is concentrated in a short window or when effects really are flat.

## Watch out

- **You might think** this only matters when adoption timing is very spread out — **but actually** any variation in timing creates already-treated comparisons. The weight on them grows with the spread, but the bias exists whenever the effects are dynamic and timing varies at all.
- **You might think** a flat pre-trend in a staggered event study clears the design — **but actually** the event-time coefficients are contaminated by other cohorts' post-treatment dynamics, so both a flat and a sloping pre-period can be artefacts. Re-estimate with a cohort-robust method before drawing any conclusion from the plot.
- **You might think** the fix is to control for unit-specific time trends — **but actually** that is a different specification with its own problems: unit-specific trends absorb part of the treatment effect when the effect itself grows linearly, biasing toward zero for a distinct reason. It is not a substitute for using clean controls.

## One-liner

> With staggered adoption, two-way fixed effects quietly uses already-treated units as controls and subtracts their own evolving effects — producing a weighted sum with negative weights that can fall outside the range of every true effect, which is why the modern estimators all share the rule: never use an already-treated unit as a control.

## Problems

**P1 (🟢)** In the Example 1 setup, verify the true ATT of $1.75$ by listing the treated cells and their effects, and verify the contaminated comparison's value of $-0.50$ by computing $B$'s effect at $t=4$ minus $A$'s effect growth over the same window. State in one sentence why the sign is negative.

**P2 (🟡)** Suppose treatment effects are constant — $\tau(k)=\tau$ for all $k$ and all units. Show that the contaminated comparison (ii) then returns $\tau$ correctly, and explain what this implies about when TWFE is safe.

**P3 (🔴, optional)** Construct a numerical example with three cohorts in which the TWFE estimate has the **opposite sign** to every unit's true treatment effect. Verify your construction, and explain which comparison carries the negative weight.

<details>
<summary>Solutions</summary>

**P1** *True ATT.* The treated cells are those with $t\ge G_i$:

| unit | $t$ | periods since treatment $k$ | effect $\tau(k)=k+1$ |
|---|---|---|---|
| $A$ ($G=2$) | $2$ | $0$ | $1$ |
| $A$ | $3$ | $1$ | $2$ |
| $A$ | $4$ | $2$ | $3$ |
| $B$ ($G=4$) | $4$ | $0$ | $1$ |

$$\mathrm{ATT} = \frac{1+2+3+1}{4} = \frac{7}{4} = 1.75 .\ \checkmark$$

*The contaminated comparison.* Over the window "$t\in\{2,3\}$ versus $t=4$", with $B$ as treated and $A$ as control:

- $B$'s effect at $t=4$ is $\tau(0) = 1$; at $t\in\{2,3\}$ it is $0$ (not yet treated). So $B$'s effect-change is $1 - 0 = 1$.
- $A$'s effect at $t=4$ is $\tau(2)=3$; over $t\in\{2,3\}$ it averages $(\tau(0)+\tau(1))/2 = (1+2)/2 = 1.5$. So $A$'s effect-change is $3-1.5 = 1.5$.

The DiD subtracts the control's change from the treated's, and the common time trend $0.5t$ and unit levels cancel:
$$\mathrm{DiD}_{(ii)} = 1 - 1.5 = -0.50 .\ \checkmark$$

*Why negative, in one sentence.* Because the "control" unit $A$ was itself in the middle of a **growing** treatment response, so subtracting its change removes $A$'s effect growth of $1.5$ from $B$'s genuine effect of $1$, and $1.5$ happens to exceed $1$.

**P2** *The constant-effect case.* Let $\tau(k)=\tau$ for every $k$ and every unit. Redo comparison (ii):

- $B$'s effect-change over the window: $\tau - 0 = \tau$ (it switches on).
- $A$'s effect-change: $A$ is treated in every period of the window, so its effect is $\tau$ at $t=4$ *and* $\tau$ on average over $t\in\{2,3\}$. Its change is $\tau - \tau = 0$.

Hence
$$\mathrm{DiD}_{(ii)} = \tau - 0 = \tau ,$$
the correct effect. $\checkmark$ The comparison is legitimate after all: an already-treated unit is a perfectly good control *provided its treatment effect is not moving*, because then its treatment status contributes the same constant to both periods and differences out exactly like a fixed effect.

*What this implies about when TWFE is safe.* Since the clean comparisons also return $\tau$, every 2x2 piece returns $\tau$, and any weighted average of them — negative weights included, since the weights sum to one — returns $\tau$. So **TWFE is consistent for the ATT under staggered adoption if and only if treatment effects are constant across units and across time since treatment.**

Two practical readings. First, this identifies exactly what to worry about: not staggered timing *per se*, but staggered timing **combined with dynamic or heterogeneous effects**. A staggered design where a cohort-specific event study shows flat, identical effect paths across cohorts is one where TWFE is fine, and showing that plot is the cleanest possible defence of a TWFE estimate.

Second, the condition is demanding in a way that is easy to underrate. It is not enough that effects be similar *across units*; they must also be flat *over time since treatment*. Almost every policy has a phase-in, so the time dimension is where the condition usually fails — and it fails in the direction that makes already-treated controls too "improved", biasing the estimate down.

**P3** *Construction.* Three cohorts, six periods, no never-treated unit. Let
$$Y_{it} = a_i + \tau(t-G_i)\,\mathbf 1\{t\ge G_i\}, \qquad \tau(k) = 1+4k ,$$
with all $a_i = 0$ and no common time trend (both would cancel anyway). Adoption dates: $G_A = 2$, $G_B = 4$, $G_C = 5$. The effect starts at $1$ and grows by $4$ each period.

The panel:

| unit | $t=1$ | $t=2$ | $t=3$ | $t=4$ | $t=5$ | $t=6$ |
|---|---|---|---|---|---|---|
| $A$ ($G=2$) | $0$ | $1$ | $5$ | $9$ | $13$ | $17$ |
| $B$ ($G=4$) | $0$ | $0$ | $0$ | $1$ | $5$ | $9$ |
| $C$ ($G=5$) | $0$ | $0$ | $0$ | $0$ | $1$ | $5$ |

The ten treated cells have effects $1,5,9,13,17$ for $A$; $1,5,9$ for $B$; $1,5$ for $C$. **Every one is strictly positive**, the smallest being $1$. The true ATT is
$$\mathrm{ATT} = \frac{1+5+9+13+17+1+5+9+1+5}{10} = \frac{66}{10} = 6.6 .$$

Running the TWFE regression $Y_{it} = \alpha_i+\lambda_t+\beta D_{it}$ on these eighteen observations gives
$$\hat\beta_{TWFE} = -\frac{27}{11} = -2.4545 .$$

**Negative, while every true effect lies between $+1$ and $+17$.** The estimate is not merely outside the range of the individual effects — it is on the wrong side of zero, so a researcher would report that the policy *reduced* the outcome.

*Which comparison carries the negative weight.* The forbidden comparisons — later cohorts evaluated against already-treated earlier ones — are the culprits, and the steep $+4$-per-period ramp makes them badly negative. Take $C$, which switches at $t=5$, using already-treated $A$ as its control over $t=4$ versus $t\in\{5,6\}$:

- $C$'s change: $\overline{(1,5)} - 0 = 3 - 0 = +3$.
- $A$'s change: $\overline{(13,17)} - 9 = 15-9 = +6$.
- DiD: $3 - 6 = \mathbf{-3}$.

$A$'s own effect grew by $6$ over a window in which $C$'s fresh effect only reached $3$, so the subtraction produces a negative number for a strictly positive treatment. The same arithmetic applies to $B$ against $A$, and to $C$ against $B$. With three cohorts there are many such pairs and they dominate the two clean comparisons available, dragging the weighted sum below zero.

*The general lesson.* Nothing here is contrived except the sample size. A linear ramp is what a phase-in looks like, and three cohorts spread over six periods is a mild degree of staggering compared with a fifty-state panel adopting over fifteen years — where the middle years offer enormous numbers of already-treated comparisons, which is precisely where TWFE draws most of its weight. Running Callaway–Sant'Anna on this panel, using only not-yet-treated controls, recovers the cohort-specific effects exactly and aggregates to $6.6$.

</details>

## Flashback

**From Lesson 4.4 (event studies and dynamic DiD):** An event study reports pre-period coefficients of $-0.15, 0.22, -0.05$ (at $k=-4,-3,-2$, normalised at $k=-1$), all with standard errors near $0.30$, and post-period coefficients of $0.40, 0.95, 1.40$. State whether the pre-trends are reassuring, compute the minimum pre-trend slope this design could detect, and assess whether the test is informative about the headline result.

<details>
<summary>Solution</summary>

*Are the pre-trends reassuring?* At first glance yes: all three coefficients are within $0.75$ standard errors of zero ($t = -0.50, 0.73, -0.17$), they show no monotone pattern, and a joint $F$-test would not come close to rejecting. There is no visible pre-trend.

*Minimum detectable slope.* Using [4.4](04-04-event-studies-dynamic-did.md) P3's calculation: a linear pre-trend of slope $s$ per period, normalised at $k=-1$, implies expected coefficients of $-3s, -2s, -s$ at $k = -4,-3,-2$. The largest in magnitude is $3s$, with standard error $0.30$. For roughly 80 percent power at the 5 percent level, that coefficient needs to be about $2.8$ standard errors from zero:
$$3s \approx 2.8\times 0.30 = 0.84 \qquad\Longrightarrow\qquad s \approx 0.28 \ \text{per period} .$$
(The joint test pools three coefficients and does somewhat better, so a more generous figure is around $s \approx 0.18$–$0.22$.)

*Is the test informative?* **No, and this is the important part.** Extrapolate a slope of $s = 0.28$ forward from $k=-1$ over the three post-periods:
$$k=0:\ 0.28, \qquad k=1:\ 0.56, \qquad k=2:\ 0.84 .$$
The reported effects are $0.40, 0.95, 1.40$. So an **undetectable** pre-trend would generate spurious effects of $0.28$, $0.56$ and $0.84$ — that is, **70, 59 and 60 percent** of the reported coefficients at each horizon. Even at the more generous $s=0.20$, a violation the test would routinely miss accounts for roughly 43 percent of the headline effect at $k=2$.

The honest statement is therefore: *"we find no evidence of pre-trends"* here means *"we could not have detected a trend that would explain about 60 percent of our result."* The plot is not reassuring once you compute what it could have caught.

*What to report.* Following [4.4](04-04-event-studies-dynamic-did.md): the joint pre-trend $p$-value **together with** the minimum detectable violation, and a Rambachan–Roth breakdown value — the multiple $\bar M$ of the largest observed pre-treatment violation at which the confidence set first includes zero. With pre-period noise this large relative to the effect, that breakdown value will be small, and reporting it converts an uninformative non-rejection into an honest statement about how much the conclusion depends on the assumption.

*The connection to this lesson.* If this design is **staggered**, there is a further problem that no amount of care with the pre-trend test addresses: the event-time coefficients are themselves contaminated by other cohorts' post-treatment dynamics, so both the flat pre-period and the rising post-period may be artefacts of the estimator. The first step is not a better pre-trend test but re-estimation with Sun–Abraham or Callaway–Sant'Anna, which produces a cohort-robust event study whose pre-period coefficients actually mean what the plot suggests they mean.

</details>

## Connections

- **Backward:** the negative-weights result is [3.3](03-03-regression-anatomy-good-and-bad-controls.md)'s warning realised — that lesson noted OLS's implicit weights are guaranteed non-negative only with saturated controls, and a staggered TWFE specification is exactly the non-saturated case. The contaminated comparison is [3.3](03-03-regression-anatomy-good-and-bad-controls.md)'s bad-control problem in time: the already-treated control's outcome is *post-treatment* for its own treatment.
- **Forward:** [4.6](04-06-synthetic-control.md) sidesteps the problem entirely by constructing a bespoke control from never-treated donors, which is one reason it has become popular for exactly these designs. [4.7](04-07-regression-discontinuity.md) offers a different escape — identification from a threshold rather than from timing.
- **Sideways:** this episode is worth remembering as methodological history, not just technique. A specification used confidently for three decades turned out to be biased in a way nobody had checked, and the discovery came from taking the estimand seriously — asking "what weighted average of what effects does this regression actually compute?" That question, asked of any estimator, is the most reliable source of this kind of finding.
