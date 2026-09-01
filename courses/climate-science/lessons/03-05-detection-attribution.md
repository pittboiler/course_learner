# Climate Physics · Lesson 3.5: Detection and attribution

> ⏱ ~15 min · Module 3: The transient problem · Builds on: [3.4](03-04-internal-variability-detection.md), [1.5](01-05-forcing-agents.md), [1.2](01-02-gray-atmosphere-radiative-equilibrium.md) · Unlocks: [5.2](05-02-extremes-event-attribution.md), Module 4

## Why this matters

"The planet is warming" is a detection claim. "Humans caused it" is an attribution claim, and it is a much stronger statement requiring much more than a rising line. The argument that carries it is not thermodynamic bookkeeping — it is **pattern matching**. Different forcings warm the planet in measurably different ways: different vertical profiles, different land–ocean contrasts, different seasonal and diurnal signatures. Once you have several independent fingerprints and only one candidate matches all of them, the case closes. This lesson is about how that argument is actually constructed, quantitatively, and about the one fingerprint that on its own separates greenhouse gases from every natural alternative.

## The idea

**Detection: is the change bigger than the noise?** This is [3.4](03-04-internal-variability-detection.md)'s question. Establish the distribution of what internal variability alone can produce, and check whether the observation falls outside it. Detection says only "something forced it".

**Attribution: which forcing, and how much of it?** Every forcing produces a distinctive *spatiotemporal pattern* of response — a fingerprint. Simulate each pattern separately, then ask what combination of them best reproduces the observations, and whether the fitted amplitudes are consistent with the physics.

**The vertical structure is the decisive fingerprint.** Increase solar output and the whole atmosphere warms — troposphere and stratosphere alike, because you have added energy at the top and it heats everything on the way down. Increase greenhouse gases and the troposphere warms while the stratosphere **cools**, for the reasons worked out in [1.2](01-02-gray-atmosphere-radiative-equilibrium.md). Nothing else does that. The observed profile is unambiguously the second one.

**And there are half a dozen more, all agreeing.** Nights warm faster than days. Land warms faster than ocean. The Arctic warms fastest. The tropopause rises. The ocean warms from the top down, not the bottom up. Each is a separate consistency test with an independent way of failing, and greenhouse forcing passes all of them.

**The formal machinery is a regression.** Write the observed pattern as a linear combination of simulated fingerprints, estimate the coefficients by generalized least squares using an internal-variability covariance from long control runs, and check both that the coefficients are significantly nonzero (detection) and that they are consistent with one (attribution, meaning the model got not just the pattern but the amplitude right).

## The formal version

**The fingerprints.** Each forcing's characteristic response pattern:

| Forcing | Vertical | Horizontal | Temporal |
|---|---|---|---|
| Greenhouse gases | troposphere warms, **stratosphere cools** | land > ocean; Arctic amplified | steady rise, accelerating |
| Solar increase | warms at *all* levels, slightly more in the stratosphere (ozone absorbs UV) | modest land–ocean contrast | 11-yr cycle plus slow drift |
| Volcanic aerosol | troposphere cools, **stratosphere warms** (aerosols absorb near-infrared) | global, hemisphere-asymmetric | 2–3 yr spike |
| Tropospheric aerosol | cools, concentrated over and downwind of industrial regions | strongly Northern-Hemisphere weighted | peaked mid-century, then declining |
| Ozone depletion | cools the lower stratosphere; shifts the Southern Hemisphere jet poleward | polar, Southern-Hemisphere summer | 1980–2000, then recovering |

*In words: the sign of the stratospheric response alone separates greenhouse gases from both natural alternatives.*

**Why greenhouse gases cool the stratosphere.** Two mechanisms, both established in [1.2](01-02-gray-atmosphere-radiative-equilibrium.md) and [1.4](01-04-radiative-forcing-defined.md). The stratosphere is heated by ozone's absorption of ultraviolet and cooled by $\mathrm{CO_2}$ emission at 15 micrometres. Adding $\mathrm{CO_2}$ increases the cooling term far more than the heating term, because the layer is optically thin and radiates to space freely in both directions while the upwelling radiation it might absorb has already been intercepted lower down. Separately, the more opaque troposphere below sends less infrared upward. Both cool it.

**Optimal fingerprinting.** Assemble the observations into a vector $\mathbf{y}$ — typically decadal-mean temperature anomalies over a grid, so a space–time vector of a few hundred elements. Let $\mathbf{x}_i$ be the simulated response pattern to forcing $i$. Then

$$\mathbf{y} = \sum_i \beta_i\,\mathbf{x}_i + \boldsymbol{\varepsilon}, \qquad \boldsymbol{\varepsilon} \sim \mathcal{N}(\mathbf{0}, \mathbf{C}),$$

where $\mathbf{C}$ is the covariance of internal variability, estimated from long unforced control simulations. Estimate the scaling factors by generalized least squares:

$$\hat{\boldsymbol\beta} = \left(\mathbf{X}^{\!\top}\mathbf{C}^{-1}\mathbf{X}\right)^{-1}\mathbf{X}^{\!\top}\mathbf{C}^{-1}\mathbf{y}.$$

*In words: fit the observed pattern as a weighted sum of the model's response patterns, weighting each direction in space–time by how quiet internal variability is there.* The word **optimal** refers exactly to that pre-whitening by $\mathbf{C}^{-1}$: it deliberately down-weights the regions and timescales where the climate is noisy (the tropical Pacific, the North Atlantic) and up-weights the quiet ones. That is the whole trick, and it is why the method is far more powerful than looking at a global mean.

Two tests then follow:

- **Detection:** $\beta_i$ significantly greater than zero. That forcing's pattern is present in the observations at an amplitude internal variability could not fake.
- **Attribution:** the confidence interval on $\beta_i$ includes 1, *and* the residual $\mathbf{y} - \sum\hat\beta_i\mathbf{x}_i$ is statistically consistent with $\mathbf{C}$. The first says the model got the amplitude right; the second says nothing is left over that the model cannot explain.

A $\beta$ significantly different from 1 is informative rather than fatal: it says the model's *pattern* is right but its *amplitude* is wrong, which directly constrains that forcing's magnitude. This is how attribution studies feed back into estimates of the aerosol forcing.

**The results.** AR6's assessed attribution of the observed warming of $1.06$ K (1850–1900 to 2010–2019):

| Contribution | Assessed range (K) |
|---|---|
| Well-mixed greenhouse gases | $+1.0$ to $+2.0$ |
| Other anthropogenic (mostly aerosols) | $-0.8$ to $0.0$ |
| **Total anthropogenic** | $+0.8$ to $+1.3$ |
| Natural (solar and volcanic) | $-0.1$ to $+0.1$ |
| Internal variability | $-0.2$ to $+0.2$ |

*In words: the best estimate of the human contribution to observed warming is 100 percent of it, with greenhouse gases having caused more warming than has been observed, partly masked by aerosols.* That last point is worth stating plainly: **greenhouse gases alone would have warmed the planet more than it has warmed.** The nonintuitive conclusion — that the human share can exceed 100 percent — falls straight out of the ledger in [1.5](01-05-forcing-agents.md), where the anthropogenic total is 2.72 W m⁻² but the greenhouse component alone is 3.84.

**Independent corroborating fingerprints.**

- **Diurnal temperature range narrowing.** Greenhouse warming acts at night as strongly as by day (the greenhouse effect does not sleep), while solar warming acts only by day. Observed: night-time minima have risen faster than daytime maxima.
- **Land–ocean contrast.** Land has lower heat capacity and less evaporative damping, so it warms about 1.5 times as fast. Observed, and quantitatively matched.
- **Tropopause height.** A warming, expanding troposphere beneath a cooling, contracting stratosphere pushes the boundary up. Observed: several hundred metres since 1980.
- **Ocean warming structure.** Heat entering from above produces top-down warming with a declining profile; geothermal or internal redistribution would not. Observed.
- **Sea-level rise partitioning** ([5.3](05-03-sea-level-rise.md)): thermal expansion plus ice melt closes the budget.

None of these is decisive alone. Together, with the stratospheric fingerprint, they exclude every alternative that has been proposed.

**The circularity objection, and its answer.** The method needs $\mathbf{C}$, the covariance of internal variability, and that comes from models. If models understate internal variability, attribution overstates confidence. Three responses: models' variability is validated against the instrumental record and against paleo reconstructions, and is if anything slightly *over*stated in some modes; the attribution result is robust to inflating $\mathbf{C}$ by a factor of two; and the amplitude required for internal variability to produce the observed warming would need it to be roughly ten times larger than anything in the record, with no accompanying energy source — a warming from internal variability alone must take heat from somewhere, and the ocean is warming too. **Internal variability moves heat; it does not create it**, which is why the simultaneous warming of atmosphere, ocean, land and cryosphere is the observation internal variability cannot explain at all.

## Picture

![Temperature trend in K per decade plotted against altitude from the surface to 50 km. The blue greenhouse-gas fingerprint warms the troposphere by about 0.2 to 0.3 K per decade, crosses zero at the tropopause near 15 km, and cools increasingly with height in the stratosphere, reaching about minus 0.8 by 48 km. The coral solar fingerprint warms weakly and uniformly at every level, about 0.1 K per decade, with a slight increase in the stratosphere. Grey observation points follow the greenhouse-gas curve closely at all levels, including the stratospheric cooling that the solar fingerprint cannot produce](assets/03-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — reading scaling factors).** An optimal-fingerprinting study reports $\beta_{\text{GHG}} = 1.15\ [0.90, 1.40]$, $\beta_{\text{aerosol}} = 0.75\ [0.20, 1.30]$, $\beta_{\text{natural}} = 0.95\ [0.10, 1.80]$ (5–95 percent). The model's raw simulated contributions are $+1.35$ K, $-0.55$ K and $+0.02$ K. (a) Which forcings are detected? (b) Which are attributed? (c) Give the scaled contributions.

(a) Detection requires the interval to exclude zero. GHG: $[0.90,1.40]$ excludes zero — **detected**. Aerosol: $[0.20,1.30]$ excludes zero — **detected**. Natural: $[0.10,1.80]$ excludes zero — **detected**, though only just.

(b) Attribution additionally requires consistency with $\beta = 1$. All three intervals contain 1, so all three are **attributed**: the model's patterns and amplitudes are both consistent with observations.

(c) Scaled: GHG $= 1.15\times1.35 = +1.55$ K; aerosol $= 0.75\times(-0.55) = -0.41$ K; natural $= 0.95\times0.02 = +0.02$ K. Sum: $+1.16$ K.

*The point.* Look at the width of the aerosol interval: $[0.20, 1.30]$ means the observations are consistent with aerosols having done anything from a fifth to 1.3 times what the model says. That is [1.5](01-05-forcing-agents.md)'s aerosol uncertainty reappearing — and note the direction of the information flow. Attribution does not *assume* the aerosol forcing; it *estimates* it, and this is one of the few empirical handles on the quantity. A narrower $\beta_{\text{aerosol}}$ would immediately narrow the sensitivity estimate of [3.3](03-03-constraining-sensitivity-observations.md).

**Example 2 (why you'd care — testing the solar hypothesis quantitatively).** Suppose someone proposes that the warming since 1950 is solar. Construct three independent tests and state what each shows.

**Test 1 — magnitude.** Solar forcing since 1750 is $+0.01\ \mathrm{W\,m^{-2}}$ ([1.5](01-05-forcing-agents.md)); even the most generous reconstructions give under $+0.2$. With $\lambda = 1.3$, the implied warming is under 0.15 K against 1.1 K observed. To close the gap you would need a solar amplification factor above 7, with no proposed mechanism.

**Test 2 — timing.** Solar activity has been flat or declining since about 1980, while warming accelerated. The correlation over the last four decades is **negative**. Any solar hypothesis must explain a forty-year anticorrelation between cause and effect.

**Test 3 — vertical structure.** This is the decisive one. A brighter Sun deposits energy throughout the column and warms the stratosphere along with everything else. Observations show the lower stratosphere **cooling** by roughly 0.3 K per decade over 1979–1995 (and levelling off thereafter, as ozone recovery began to offset the $\mathrm{CO_2}$ effect). No adjustment to solar magnitude can flip this sign, because it is a statement about *where* the energy is added.

*The general principle.* **A hypothesis that must explain away three independent observations of different kinds is not a competing hypothesis.** Note what makes this argument work: each test can fail on its own terms, and each probes a different physical quantity — energy, timing, vertical structure. This is the structure of a strong scientific argument generally, and it is why attribution rests on fingerprints rather than on a global-mean number, however good that number is.

## Watch out

- **You might think** attribution means correlating global temperature with $\mathrm{CO_2}$. **Actually** that correlation is weak evidence — many things trend upward together over a century. The evidence is the *pattern*: vertical structure, land–ocean contrast, diurnal range, Arctic amplification. Fingerprinting is a multivariate argument by construction, and the "optimal" in optimal fingerprinting is about exploiting exactly that multivariate structure.
- **You might think** the human contribution cannot exceed 100 percent of the observed warming. **Actually** it can and does: greenhouse gases have caused more warming than observed, and anthropogenic aerosols have masked part of it. The two are both human, so the *net* anthropogenic share is about 100 percent while the greenhouse share alone is larger.
- **You might think** internal variability could account for a century of warming if it were large enough. **Actually** internal variability redistributes heat and cannot create it. Atmosphere, ocean, land and ice have *all* gained energy simultaneously, which requires a top-of-atmosphere imbalance — an external cause by definition. This closes the argument in a way no statistical test can, and it is why the ocean heat content record is as important to attribution as the surface record.

## One-liner

> Warming alone proves only that something happened; what proves it was us is that the troposphere warmed while the stratosphere cooled, nights warmed faster than days, and land warmed faster than ocean — a set of signatures no natural forcing produces.

## Problems

**P1 (🟢)** A study reports scaling factors $\beta_{\text{anthro}} = 0.92\ [0.75, 1.09]$ and $\beta_{\text{natural}} = 0.4\ [-0.6, 1.4]$ (5–95 percent). (a) Which is detected? (b) Which is attributed? (c) State in one sentence what a $\beta$ of 2.0 with interval $[1.6, 2.4]$ would mean physically.

**P2 (🟡)** Observed warming 1850–1900 to 2010–2019 was 1.06 K. Using $\lambda_{\text{eff}} = 1.6\ \mathrm{W\,m^{-2}\,K^{-1}}$ and the forcing ledger of [1.5](01-05-forcing-agents.md) (greenhouse gases $+3.84$, aerosols $-1.06$, land use $-0.20$, other $+0.14$, solar $+0.01$): (a) compute the equilibrium-style warming attributable to each term as $F_i/\lambda_{\text{eff}}$; (b) compute the total and compare with the observed 1.06 K; (c) explain the discrepancy and say what it implies about the greenhouse-gas share.

**P3 (🔴, optional)** Optimal fingerprinting weights each direction in space–time by internal-variability noise. Consider a two-region caricature: region A (tropical Pacific) has forced response $x_A = 0.5$ K and noise $\sigma_A = 0.6$ K; region B (Northern Hemisphere land) has $x_B = 1.4$ K and $\sigma_B = 0.3$ K. Observations are $y_A = 0.4$ K, $y_B = 1.5$ K. (a) Estimate the scaling factor $\beta$ by *unweighted* least squares. (b) Estimate it by generalized least squares with $\mathbf{C} = \mathrm{diag}(\sigma_A^2, \sigma_B^2)$. (c) Compute the standard error of $\hat\beta$ in each case and explain why the optimal method is more powerful, quantifying the gain.

<details>
<summary>Solutions</summary>

**P1** (a) $\beta_{\text{anthro}}$: the interval $[0.75, 1.09]$ excludes zero, so the anthropogenic signal is **detected**. $\beta_{\text{natural}}$: $[-0.6, 1.4]$ includes zero, so natural forcing is **not detected** — its pattern cannot be distinguished from internal variability in this analysis.

(b) $\beta_{\text{anthro}}$ is **attributed**: the interval also contains 1, so the model's amplitude is consistent with observations. $\beta_{\text{natural}}$ is not attributed, because it is not detected — attribution presupposes detection.

(c) $\beta = 2.0\ [1.6, 2.4]$ would mean the *pattern* is present and unmistakable, but at **twice** the amplitude the model produces. Physically this says either the model underestimates that forcing's magnitude by a factor of 2, or it underestimates the climate's response to it. It is a strong constraint, not a failure — this is how attribution studies have narrowed aerosol forcing estimates.

**P2** (a) Dividing each forcing by $\lambda_{\text{eff}} = 1.6$:

| Term | $F$ (W m⁻²) | $F/\lambda_{\text{eff}}$ (K) |
|---|---|---|
| Greenhouse gases | $+3.84$ | $+2.40$ |
| Aerosols | $-1.06$ | $-0.66$ |
| Land use | $-0.20$ | $-0.13$ |
| Other anthropogenic | $+0.14$ | $+0.09$ |
| Solar | $+0.01$ | $+0.01$ |

(b) Total: $$2.40 - 0.66 - 0.13 + 0.09 + 0.01 = +1.71\ \mathrm{K},$$ against 1.06 K observed. Too large by 0.65 K.

(c) The discrepancy is the **planetary energy imbalance**: the system has not yet realized its response to the current forcing, because the ocean is still absorbing ([3.1](03-01-ocean-heat-uptake-thermal-inertia.md)). The imbalance is $N = 0.8\ \mathrm{W\,m^{-2}}$, so the unrealized warming is $0.8/1.6 = 0.50$ K, which accounts for most of the 0.65 K gap; the remainder is rounding and the difference between the total-forcing epoch (1750) and the temperature epoch (1850–1900).

Redoing it properly with the realized fraction: multiply each term by $(F_{\text{tot}} - N)/F_{\text{tot}} = 1.92/2.72 = 0.706$:

| Term | Realized (K) |
|---|---|
| Greenhouse gases | $+1.69$ |
| Aerosols | $-0.47$ |
| Land use and other | $-0.03$ |
| Solar | $+0.01$ |
| **Total** | $+1.20$ |

Close to the observed 1.06 K.

For the greenhouse-gas share: **greenhouse gases alone account for about 1.7 K of warming, more than the 1.06 K observed**, with aerosols and land use masking roughly 0.5 K. This is the quantitative content of the AR6 statement that the assessed greenhouse contribution ($+1.0$ to $+2.0$ K) exceeds the observed warming. The public-facing "humans caused about all of it" and the technical "greenhouse gases caused more than all of it" are the same finding stated at different levels of detail.

**P3** (a) Unweighted least squares minimizes $\sum(y_i - \beta x_i)^2$:

$$\hat\beta = \frac{\sum x_iy_i}{\sum x_i^2} = \frac{0.5(0.4)+1.4(1.5)}{0.5^2+1.4^2} = \frac{0.20+2.10}{0.25+1.96} = \frac{2.30}{2.21} = 1.041.$$

(b) Generalized least squares minimizes $\sum(y_i-\beta x_i)^2/\sigma_i^2$:

$$\hat\beta = \frac{\sum x_iy_i/\sigma_i^2}{\sum x_i^2/\sigma_i^2} = \frac{\dfrac{0.5\times0.4}{0.36}+\dfrac{1.4\times1.5}{0.09}}{\dfrac{0.25}{0.36}+\dfrac{1.96}{0.09}} = \frac{0.556+23.333}{0.694+21.778} = \frac{23.889}{22.472} = 1.063.$$

(c) Standard errors. For GLS, $\mathrm{Var}(\hat\beta) = \left(\sum x_i^2/\sigma_i^2\right)^{-1} = 1/22.472 = 0.0445$, so $\mathrm{SE} = 0.211$.

For unweighted LS, $\mathrm{Var}(\hat\beta) = \dfrac{\sum x_i^2\sigma_i^2}{\left(\sum x_i^2\right)^2} = \dfrac{0.25(0.36)+1.96(0.09)}{2.21^2} = \dfrac{0.09+0.1764}{4.884} = 0.0546$, so $\mathrm{SE} = 0.234$.

The GLS estimator is more precise by a factor $0.234/0.211 = 1.11$ — an 11 percent reduction in standard error, equivalent to about 23 percent more data.

Why: the unweighted fit gives region A's noisy, weak signal the same standing as region B's clean, strong one. GLS effectively discards A (its weight in the numerator is 0.556 against B's 23.3, a ratio of 42:1) and estimates $\beta$ almost entirely from where the signal-to-noise ratio is high. The gain here is modest because there are only two regions and B already dominates; with hundreds of grid cells of wildly varying noise, the same principle typically buys a factor of two or more in effective sample size, **and that factor is the difference between a detectable and an undetectable signal in most real attribution problems.**

*Check.* Note that both estimators give $\beta$ near 1.05, so the *point estimate* barely moved. The whole benefit of optimality is in the uncertainty, not the central value — which is generally true of GLS, and is worth remembering when someone claims a fancier estimator "changed the answer".

</details>

## Flashback

**From Lesson 3.2 (TCR, ECS and the pattern effect):** Observed warming to 2020 is about 1.2 K, and the total anthropogenic forcing is $2.72\ \mathrm{W\,m^{-2}}$. Take TCR $= 1.8$ K and $F_{2\times} = 3.93\ \mathrm{W\,m^{-2}}$. (a) Predict the warming to date by scaling TCR by the forcing ratio. (b) Compare with the observed value. (c) Give one reason the agreement is partly fortuitous.

<details>
<summary>Solution</summary>

(a) TCR is the warming per $F_{2\times}$ of forcing under a gradual ramp, so scaling linearly:

$$\Delta T = \mathrm{TCR}\times\frac{\Delta F}{F_{2\times}} = 1.8 \times \frac{2.72}{3.93} = 1.8\times0.692 = 1.25\ \mathrm{K}.$$

(b) Observed is 1.2 K — agreement to within 4 percent.

(c) The agreement is partly fortuitous because **TCR is defined for a specific forcing history** — a 1 percent per year $\mathrm{CO_2}$ increase, reaching a doubling at year 70 — and the actual forcing history is nothing like that. Real forcing grew slowly through the nineteenth century, was heavily offset by aerosols in the mid-twentieth, and has accelerated since 1980. A slower early ramp lets the ocean equilibrate more, giving *more* realized warming per unit forcing than TCR implies; a recent acceleration gives *less*. The two errors happen to be of comparable size and opposite sign over this particular period.

Two further reasons: the pattern effect ([3.2](03-02-tcr-ecs-pattern-effect.md)) means the historical $\lambda$ has been anomalously large, which pushes the realized warming *down*; and non-$\mathrm{CO_2}$ forcings have efficacies differing from 1, which the linear scaling ignores.

*Check.* The right way to use this comparison is not as a validation of TCR but as a consistency check that nothing is grossly wrong — and it is a strong one in that limited sense, because TCR was estimated from models and the forcing and warming from observations, so the 4 percent agreement is a genuine out-of-sample match between three independent estimates. It also shows why TCR, not ECS, is the right sensitivity metric to compare against the historical record: the equivalent calculation with ECS $= 3.0$ K would predict $3.0\times0.692 = 2.08$ K, nearly double what has been observed, and the difference is exactly the heat the ocean is still absorbing.

</details>

## Connections

- **Backward:** the noise model $\mathbf{C}$ is [3.4](03-04-internal-variability-detection.md)'s internal variability made quantitative; the stratospheric-cooling fingerprint is [1.2](01-02-gray-atmosphere-radiative-equilibrium.md)'s skin-temperature argument cashed out as an observation; the forcing ledger is [1.5](01-05-forcing-agents.md)'s.
- **Forward:** the same probabilistic machinery, applied to the tails of a distribution rather than to a mean, becomes event attribution in [5.2](05-02-extremes-event-attribution.md); Module 4 turns to where the greenhouse forcing itself comes from.
- **Sideways (linear models and inference):** optimal fingerprinting is generalized least squares with a known error covariance, and the detection/attribution pair is exactly the distinction between testing $\beta \ne 0$ and testing $\beta = 1$ — two different null hypotheses answering two different questions. See [`prob-stat-refresher` 4.3](../../prob-stat-refresher/lessons/04-03-hypothesis-testing.md).
