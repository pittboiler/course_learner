# Climate Physics · Lesson 2.5: How feedbacks are actually diagnosed

> ⏱ ~15 min · Module 2: Feedbacks & climate sensitivity · Builds on: [2.4](02-04-clouds-the-wild-card.md), [2.1](02-01-feedbacks-gain-factor.md), [1.4](01-04-radiative-forcing-defined.md) · Unlocks: [3.2](03-02-tcr-ecs-pattern-effect.md), [3.3](03-03-constraining-sensitivity-observations.md)

## Why this matters

So far the feedbacks have been quoted. Where do the numbers come from? Nobody measures $c_{\text{wv}}$ directly; it is *diagnosed* from model output, by two techniques that between them define how the entire field talks about sensitivity. **Radiative kernels** decompose a model's response into contributions from each variable. **Gregory regression** extracts forcing and total feedback from a single abrupt-forcing run, on one plot. Understanding both is necessary to read the literature at all — and the moment you plot a Gregory regression carefully, you discover that $\lambda$ is *not constant*, which is the discovery that Module 3 is built on.

## The idea

**Kernels separate "how much did the variable change" from "how much radiation does that cost".** The second half is pure radiative transfer and can be computed once, offline, with a line-by-line code: perturb the humidity in one layer by a small amount, recompute the top-of-atmosphere flux, and record the sensitivity. Do that for every layer and every variable and you have a set of **kernels** $K_x = \partial R/\partial x$. Then any model's feedback is a simple weighted sum of *its own* climate changes against those fixed weights. The great advantage is that two models can be compared on the part that actually differs — their $dx/dT$ — without the comparison being contaminated by differences in their radiation codes.

**Gregory regression gets forcing and feedback from one experiment.** Slam a model with an abrupt quadrupling of $\mathrm{CO_2}$ and watch it for 150 years. Plot the top-of-atmosphere imbalance $N$ against the surface warming $\Delta T$. Since $N = F - \lambda\Delta T$, the points should fall on a line whose intercept is the forcing and whose slope is minus the feedback, with the $x$-intercept — where the imbalance reaches zero — being the equilibrium warming. Three quantities from one plot, no need to run to equilibrium.

**And then the line turns out to be curved.** Every model shows a steeper slope in the first two decades than afterwards. The system's apparent $\lambda$ *decreases* over time — the climate becomes more sensitive as it warms. The reason is not that the physics changes but that the *spatial pattern* of warming changes: the early response is concentrated where feedbacks are stabilizing, and the late response reaches regions where they are not. This is the **pattern effect**, and it means that any sensitivity estimated from a short record is an underestimate ([3.2](03-02-tcr-ecs-pattern-effect.md)).

**Clouds need a correction that is as large as the answer.** Because clouds hide part of the atmosphere and surface from space, the observed change in cloud radiative effect is not the cloud feedback — it also contains the *masking* of the other feedbacks. Correcting for that shifts the cloud feedback by roughly $+0.3\ \mathrm{W\,m^{-2}\,K^{-1}}$, comparable to the assessed value itself.

## The formal version

**Radiative kernels.** Write the change in top-of-atmosphere net radiation as a sum over responding variables $x \in \{T, q, \alpha, \dots\}$ and over model levels:

$$\Delta R = \sum_x \sum_{\text{levels}} \frac{\partial R}{\partial x}\,\Delta x + \Delta R_{\text{cloud}} + F.$$

Divide by $\Delta T_s$ to get feedbacks:

$$c_x = \sum_{\text{levels}} K_x \,\frac{\Delta x}{\Delta T_s}, \qquad K_x \equiv \frac{\partial R}{\partial x}.$$

*In words: the kernel says what a unit change in a variable at a given level is worth radiatively; the model supplies how much that variable actually changed per kelvin; multiply and sum.*

Kernels are computed once by perturbing a base climate — typically $\pm1$ K in temperature at each level, or the humidity change corresponding to 1 K at constant relative humidity — and re-running a radiative transfer code. Key properties:

- The **temperature kernel** is largest in the mid-troposphere and near the surface, and near zero in the stratosphere (which contributes almost nothing to the surface energy budget under the SARF convention).
- The **water-vapour kernel** peaks in the upper troposphere, because that is where the vapour is cold enough for its emission to differ sharply from the surface's. Per *fractional* change in $q$, the kernel is remarkably flat with height — a consequence of the logarithmic dependence of absorption on absorber amount.
- The **surface-albedo kernel** is just insolation times atmospheric transmission, largest in the sunny subtropics and small in the polar regions, which is [2.3](02-03-surface-albedo-cryosphere-feedback.md)'s seasonal-mismatch argument in kernel form.

**The cloud masking correction.** The naive quantity available from any model run is the change in cloud radiative effect, $\Delta\mathrm{CRE}/\Delta T$. This is not $c_{\text{cl}}$, because CRE is a difference between all-sky and clear-sky fluxes, and the *clear-sky* fluxes respond to water vapour and temperature too. The Soden–Held correction is

$$c_{\text{cl}} = \frac{\Delta\mathrm{CRE}}{\Delta T} + \sum_x\left(c_x^{\text{clear}} - c_x^{\text{all-sky}}\right) + \left(F^{\text{clear}} - F^{\text{all-sky}}\right).$$

*In words: add back the amount by which clouds were hiding the other feedbacks and the forcing.* Numerically the correction is about $+0.3\ \mathrm{W\,m^{-2}\,K^{-1}}$ — so a model with $\Delta\mathrm{CRE}/\Delta T = +0.1$ has a cloud feedback near $+0.4$. **Comparing an uncorrected $\Delta\mathrm{CRE}$ against a corrected cloud feedback is a live source of confusion in the literature, and the sign of the error is always the same.**

**Gregory regression.** Apply an abrupt forcing (the standard protocol is abrupt $4\times\mathrm{CO_2}$) and record annual means of $N$ and $\Delta T$. Fit

$$N = F - \lambda\,\Delta T.$$

| Quantity | Where it appears |
|---|---|
| Effective radiative forcing $F$ | $y$-intercept |
| Feedback parameter $\lambda$ | minus the slope |
| Equilibrium warming | $x$-intercept, $\Delta T = F/\lambda$ |

*In words: the regression line runs from "all forcing, no warming" at the start to "no imbalance, full warming" at equilibrium, and its slope is the feedback.*

For a typical CMIP6 model: intercept $\approx 7.9\ \mathrm{W\,m^{-2}}$ (which, halved, recovers $F_{2\times}\approx 3.9$), slope over years 21–150 $\approx -0.95$, giving an $x$-intercept near 7.0 K for $4\times$ and hence ECS $\approx 3.5$ K per doubling.

**The curvature, and the two numbers it creates.** Fit only the first twenty years and the slope is steeper — say $-1.35$, giving an apparent sensitivity of 2.9 K. Two named quantities result:

- **Effective climate sensitivity** ($S$ or $\mathrm{EffCS}$): from the early regression, or from any finite-length record. This is what the historical observations can give you.
- **Equilibrium climate sensitivity** (ECS): the true $x$-intercept, from the late-time slope or from running to equilibrium.

$\mathrm{EffCS} < \mathrm{ECS}$, systematically, by roughly 0.5 K in most models. Both are legitimate; they answer different questions, and conflating them was for years a genuine source of disagreement between observational and model-based sensitivity estimates ([3.3](03-03-constraining-sensitivity-observations.md)).

**Why models disagree, in kernel terms.** Decompose the intermodel spread in $\lambda$ into contributions from each $c_x$. The result, consistently across CMIP generations: the Planck, water-vapour and lapse-rate terms contribute little spread (Planck because it is nearly thermodynamic; the other two because they anticorrelate, [2.2](02-02-planck-water-vapour-lapse-rate.md)); surface albedo contributes a little; **clouds contribute the majority**, and within clouds, the low-cloud shortwave term in the subtropics dominates. That is not a new finding — it has been the finding since the 1980s — but the kernel method is what makes it a *quantitative* statement rather than an impression.

## Picture

![A Gregory plot for an abrupt quadrupling of carbon dioxide: annual-mean top-of-atmosphere imbalance on the vertical axis against global-mean surface warming on the horizontal. Blue points curve downward from about 6.6 watts per square metre at 0.9 K of warming to near zero at 6.3 K. A coral dashed line fitted to the first twenty years has slope minus 1.35 and reaches zero imbalance at 5.8 K, corresponding to 2.9 K per doubling. A blue solid line fitted to years 21 to 150 has the shallower slope minus 0.95 and reaches zero at 7.0 K, corresponding to 3.5 K per doubling. The vertical intercept, 7.9 watts per square metre, is the effective radiative forcing for the quadrupling](assets/02-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — a kernel calculation).** A coarse two-layer water-vapour kernel gives $K_{\text{low}} = 1.0$ and $K_{\text{high}} = 1.6\ \mathrm{W\,m^{-2}}$ per 10 percent increase in specific humidity in the lower and upper troposphere respectively. (a) Check the kernel against the constant-relative-humidity case. (b) A model moistens at 6.5 percent per kelvin below and 9.5 percent per kelvin aloft; compute its water-vapour feedback. (c) Comment.

(a) Constant relative humidity gives about 7 percent per kelvin at all levels ([2.2](02-02-planck-water-vapour-lapse-rate.md)), so

$$c_{\text{wv}} = (1.0 + 1.6)\times\frac{7.0}{10} = 2.6\times0.70 = 1.82\ \mathrm{W\,m^{-2}\,K^{-1}},$$

which recovers the standard $+1.8$. The kernel is calibrated.

(b) $$c_{\text{wv}} = 1.0\times\frac{6.5}{10} + 1.6\times\frac{9.5}{10} = 0.65 + 1.52 = 2.17\ \mathrm{W\,m^{-2}\,K^{-1}}.$$

(c) Nineteen percent larger than the uniform case, from a moistening profile that is *drier* than uniform in the lower troposphere and only modestly wetter aloft. The upper-tropospheric kernel is 1.6 times the lower one, and the Clausius–Clapeyron rate is itself larger up there ([2.2](02-02-planck-water-vapour-lapse-rate.md): 10 percent per kelvin at 230 K against 6.5 at 288 K), so the two effects reinforce.

*The point.* **Where a model moistens matters more than how much.** A model that preferentially moistens the cold upper troposphere gets a substantially larger water-vapour feedback for the same column-integrated water, because the kernel weights toward the levels whose emission is coldest and therefore most different from the surface. This is also the mechanism behind the water-vapour/lapse-rate anticorrelation, now visible as a kernel weighting rather than as an empirical curiosity: a model with strong upper-tropospheric warming moistens preferentially aloft *and* has a strongly negative lapse-rate feedback, because both follow from the same amplified upper-level temperature response.

**Example 2 (why you'd care — reading a Gregory plot from a paper).** A model's abrupt-$4\times\mathrm{CO_2}$ regression gives intercept $8.2\ \mathrm{W\,m^{-2}}$, slope $-1.10$ over years 1–150, and slope $-0.88$ over years 21–150. (a) Report $F_{2\times}$, ECS from each fit. (b) Which should be compared with an observational estimate from the historical period, and why?

(a) $$F_{2\times} = \frac{8.2}{2} = 4.1\ \mathrm{W\,m^{-2}}.$$

Full-period fit: $\Delta T_{4\times} = 8.2/1.10 = 7.45$ K, so ECS $= 3.73$ K per doubling.

Years 21–150: $\Delta T_{4\times} = 8.2/0.88 = 9.32$ K, so ECS $= 4.66$ K.

(b) **Neither, ideally — but the *first twenty years* if you must.** An observational estimate from 1850–2020 samples a system that has warmed about 1.2 K with a forcing that grew gradually; the warming pattern it has realized is the early, ocean-uptake-dominated one, not the equilibrium pattern. The right comparison target is the model's *effective* climate sensitivity computed over a comparable period and with a comparable forcing history, which will be *lower* than either number above. Comparing an observational EffCS against a model's late-time ECS and concluding that "observations say sensitivity is lower than models" was, for about a decade, exactly the mistake being made — and reconciling it is the subject of [3.2](03-02-tcr-ecs-pattern-effect.md) and [3.3](03-03-constraining-sensitivity-observations.md).

*The general principle.* The number a diagnostic gives you depends on the window it is computed over, whenever the underlying quantity is not constant. Always ask what period a quoted $\lambda$ came from, and never compare two $\lambda$s from different windows.

## Watch out

- **You might think** the change in cloud radiative effect is the cloud feedback. **Actually** it differs by the cloud-masking correction, about $+0.3\ \mathrm{W\,m^{-2}\,K^{-1}}$ and always in the same direction. A model reporting $\Delta\mathrm{CRE}/\Delta T \approx 0$ does not have a zero cloud feedback; it has a moderately positive one.
- **You might think** the Gregory regression's $x$-intercept is the equilibrium warming. **Actually** it is the equilibrium warming *of the linear extrapolation*, and because the true relation curves upward, the extrapolation from any finite record undershoots. Models run to genuine equilibrium in slab-ocean or millennial configurations give higher values still — typically another 10 to 20 percent above the late-time regression.
- **You might think** kernels are model-independent. **Actually** they depend on the base climate they were computed in — its temperature profile, humidity and cloud distribution. Kernels from different base states differ by 5 to 10 percent, which is small compared with the intermodel spread in $dx/dT$ but not negligible, and it is why published kernel sets (from several different base models) are usually applied as an ensemble.

## One-liner

> Kernels split a feedback into "how much the variable moved", which is the model's business, and "what that costs radiatively", which is physics — and a Gregory plot gives forcing, feedback and sensitivity from one line, except that the line is curved, which is the whole of Module 3.

## Problems

**P1 (🟢)** A Gregory regression on abrupt $4\times\mathrm{CO_2}$ gives $N = 7.4 - 1.18\,\Delta T$ (W m⁻², K). (a) Report the effective radiative forcing for $4\times$ and for a doubling. (b) Report $\lambda$. (c) Report ECS per doubling.

**P2 (🟡)** A model reports $\Delta\mathrm{CRE}/\Delta T = -0.15\ \mathrm{W\,m^{-2}\,K^{-1}}$. Kernel analysis gives clear-sky feedbacks (excluding clouds and Planck) totalling $+2.05$ and all-sky totalling $+1.65\ \mathrm{W\,m^{-2}\,K^{-1}}$, and the clear-sky minus all-sky forcing difference is $+0.05\ \mathrm{W\,m^{-2}\,K^{-1}}$. (a) Compute the cloud feedback. (b) State whether this model's clouds amplify or damp warming, and contrast with the naive reading of $\Delta\mathrm{CRE}$. (c) With $\lambda_0 = 3.2$ and the all-sky non-cloud feedbacks above, compute this model's $\lambda$ and ECS for $F_{2\times}=3.93$.

**P3 (🔴, optional)** Two models are run to abrupt $4\times\mathrm{CO_2}$. Model P: intercept 7.6, slope $-1.45$ in years 1–20, $-1.05$ in years 21–150. Model Q: intercept 8.0, slope $-1.10$ in years 1–20, $-1.02$ in years 21–150. (a) Compute EffCS (from years 1–20) and ECS (from years 21–150) per doubling for each. (b) Compute each model's "pattern effect", defined as $\lambda_{\text{early}}-\lambda_{\text{late}}$. (c) An observational study estimates EffCS $= 2.2$ K. Which model does it favour, and would the answer change if the study's number were compared with ECS instead? Comment on what this means for the practice of "constraining models with observations".

<details>
<summary>Solutions</summary>

**P1** (a) $\mathrm{ERF}_{4\times} = 7.4\ \mathrm{W\,m^{-2}}$ (the intercept). Per doubling, $7.4/2 = 3.7\ \mathrm{W\,m^{-2}}$.

(b) $\lambda = 1.18\ \mathrm{W\,m^{-2}\,K^{-1}}$ (minus the slope).

(c) $$\mathrm{ECS} = \frac{3.7}{1.18} = 3.14\ \mathrm{K}.$$

(Equivalently, the $x$-intercept is $7.4/1.18 = 6.27$ K for $4\times$, halved to 3.14 K per doubling under the assumption of logarithmic forcing.)

**P2** (a) $$c_{\text{cl}} = \frac{\Delta\mathrm{CRE}}{\Delta T} + \left(\sum c^{\text{clear}} - \sum c^{\text{all-sky}}\right) + \left(F^{\text{clear}}-F^{\text{all-sky}}\right)$$
$$= -0.15 + (2.05 - 1.65) + 0.05 = -0.15 + 0.40 + 0.05 = +0.30\ \mathrm{W\,m^{-2}\,K^{-1}}.$$

(b) The clouds **amplify**: $c_{\text{cl}} = +0.30$. The naive reading of $\Delta\mathrm{CRE}/\Delta T = -0.15$ would have said they damp — the sign is wrong, not merely the magnitude. The masking correction of $+0.45$ is three times the raw signal.

(c) $$\lambda = \lambda_0 - \left(\sum c^{\text{all-sky}}_{\text{non-cloud}} + c_{\text{cl}}\right) = 3.2 - (1.65 + 0.30) = 3.2 - 1.95 = 1.25\ \mathrm{W\,m^{-2}\,K^{-1}},$$
$$\mathrm{ECS} = \frac{3.93}{1.25} = 3.14\ \mathrm{K}.$$

**P3** (a) Model P: $F_{2\times} = 3.8$.
EffCS $= 3.8/1.45 = 2.62$ K. ECS $= 3.8/1.05 = 3.62$ K.

Model Q: $F_{2\times} = 4.0$.
EffCS $= 4.0/1.10 = 3.64$ K. ECS $= 4.0/1.02 = 3.92$ K.

(b) Model P: $1.45 - 1.05 = 0.40\ \mathrm{W\,m^{-2}\,K^{-1}}$ — a large pattern effect.
Model Q: $1.10 - 1.02 = 0.08$ — almost none.

(c) Compared with **EffCS**, the observational 2.2 K is much closer to Model P (2.62) than to Model Q (3.64), so it favours P.

Compared with **ECS**, P gives 3.62 and Q gives 3.92 — nearly identical, and both far from 2.2. On that comparison the observation appears to reject both models equally, which would be the wrong conclusion: the observation never measured ECS.

What this means in practice: **an observational constraint is a constraint on the quantity it actually estimated, and models must be interrogated for the same quantity, computed over the same period, with the same forcing history.** The apparent "models are too sensitive" result of the 2010s largely dissolved once this was done properly — and the residual, after correcting for the pattern effect, is small. It also means models can be discriminated by their pattern effect, which is an *additional* observable, not a nuisance: Model P and Model Q differ dramatically in $\lambda_{\text{early}}-\lambda_{\text{late}}$ even though their ECS values are close, and the historical record contains information about which is right.

*Check.* Notice that ranking the models by ECS (P 3.62, Q 3.92) and by EffCS (P 2.62, Q 3.64) gives the same order but wildly different gaps — 0.30 K versus 1.02 K. Any model-weighting scheme applied to the wrong quantity will therefore get the *weights* badly wrong even when it gets the ranking right.

</details>

## Flashback

**From Lesson 2.1 (Feedbacks and the gain factor):** Model A has $\lambda = 1.6$ and Model B has $\lambda = 1.0\ \mathrm{W\,m^{-2}\,K^{-1}}$; both have $\lambda_0 = 3.2$ and $F_{2\times}=3.93$. (a) Compute each model's ECS. (b) Express each as a gain $g$. (c) The models differ by $0.6\ \mathrm{W\,m^{-2}\,K^{-1}}$ in $\lambda$ — state the difference in $g$ and in ECS, and say which space is the right one to average a model ensemble in.

<details>
<summary>Solution</summary>

(a) $$\mathrm{ECS}_A = \frac{3.93}{1.6} = 2.46\ \mathrm{K}, \qquad \mathrm{ECS}_B = \frac{3.93}{1.0} = 3.93\ \mathrm{K}.$$

(b) $$g = 1 - \frac{\lambda}{\lambda_0}: \qquad g_A = 1 - \frac{1.6}{3.2} = 0.500, \qquad g_B = 1 - \frac{1.0}{3.2} = 0.6875.$$

(c) Difference in $g$: $0.1875$. Difference in ECS: $1.47$ K.

Average in **$\lambda$-space** (equivalently $g$-space — they are linearly related). Two reasons. First, $\lambda$ is the quantity that is *additive over the physics*: $\lambda = \lambda_0 - \sum c_i$, so averaging $\lambda$ across models is averaging the individual feedbacks, which is what you actually want. ECS is a nonlinear function of $\lambda$, so the mean of the ECS values is not the ECS of the mean feedbacks:

$$\frac{\mathrm{ECS}_A+\mathrm{ECS}_B}{2} = \frac{2.46+3.93}{2} = 3.20\ \mathrm{K}, \qquad \text{but} \qquad \frac{3.93}{(1.6+1.0)/2} = \frac{3.93}{1.30} = 3.02\ \mathrm{K}.$$

The two differ by 0.18 K, and by Jensen's inequality the ECS-space average is always the larger, because $1/\lambda$ is convex.

Second, model errors and observational uncertainties are much closer to symmetric in $\lambda$ than in ECS — which is exactly [2.1](02-01-feedbacks-gain-factor.md)'s Roe–Baker point. AR6's assessment was built in $\lambda$-space for precisely this reason, and that methodological choice is a substantial part of why the assessed range narrowed.

*Check.* The gap between the two averaging routes grows with the spread: for models at $\lambda = 2.0$ and $0.6$, the ECS-space mean is $(1.97+6.55)/2 = 4.26$ K against $3.93/1.30 = 3.02$ K from $\lambda$-space — a 1.2 K discrepancy from nothing but the order of operations.

</details>

## Connections

- **Backward:** kernels are the operational form of the linearization introduced in [2.1](02-01-feedbacks-gain-factor.md); the masking correction is the machinery that makes [2.4](02-04-clouds-the-wild-card.md)'s cloud feedback a well-defined quantity; the Gregory intercept is [1.4](01-04-radiative-forcing-defined.md)'s ERF measured a second way, and the two agree, which is a real consistency check.
- **Forward:** the curvature of the Gregory plot is the entire content of [3.2](03-02-tcr-ecs-pattern-effect.md); the distinction between effective and equilibrium sensitivity is what reconciles the observational and model estimates in [3.3](03-03-constraining-sensitivity-observations.md).
- **Sideways (regression and inference):** the Gregory method is ordinary least squares used to extract two physical parameters from an autocorrelated, non-stationary time series — every caveat about fitting a line to serially correlated data applies, including the fact that the intercept's standard error is badly understated by the naive formula. See [`analytical-chemistry` 1.4](../../analytical-chemistry/lessons/01-04-significance-tests-calibration.md).
