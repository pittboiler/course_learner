# Atmospheric Science · Lesson 6.5: Predictability & the two-week limit

> ⏱ ~15 min · Module 6: Weather systems & forecasting · Builds on: [6.4 Observing the atmosphere](06-04-observing-the-atmosphere.md), [5.3 Rossby waves & the beta effect](05-03-rossby-waves-beta-effect.md) · Unlocks: [`climate-science`](../../climate-science/syllabus.md)

## Why this matters

Every equation in this course is deterministic. Given the state of the atmosphere now, they say what it will be later — so in principle a good enough model and a good enough measurement should forecast indefinitely. In practice no forecast has useful skill beyond about two weeks, and this is not an engineering shortfall that better computers will fix. It is a *property of the equations*, discovered by Edward Lorenz in 1963, and it can be estimated from a single number: how fast small errors double. This lesson closes the course with that estimate, with what forecasters do about it, and with the distinction that makes climate projection a legitimate enterprise despite it — which is exactly the bridge to [`climate-science`](../../climate-science/syllabus.md).

## The idea

**Small errors do not stay small.** Lorenz found that a set of three simple convection equations, integrated from initial conditions differing in the fourth decimal place, produced completely different solutions within a modest time. The trajectories separate **exponentially**, not linearly. This is **sensitive dependence on initial conditions** — the property [`dynamical-systems` 4.2](../../dynamical-systems/lessons/04-02-sensitive-dependence.md) treats in general — and the atmosphere has it in abundance.

**Exponential growth plus a ceiling gives a hard horizon.** Errors cannot grow forever: once a forecast is as different from reality as two randomly chosen days are from each other, it has *saturated* and is no better than quoting the climatological average. So the error curve rises exponentially and then flattens. The **useful forecast range** is the time from the initial error to saturation — and because the growth is exponential, that time depends only *logarithmically* on how good your starting point is.

**Which is why better observations help so little.** This is the crux, and it is counter-intuitive. Improving the initial analysis tenfold — an enormous, expensive undertaking — buys you $\log_2(10) = 3.3$ extra doubling times, or about a week. Improving it a *hundredfold* buys two weeks. There is no plausible observing system that extends deterministic weather forecasting to a month.

**So forecasters stopped trying to be deterministic.** If you cannot know the initial state exactly, run the model many times from slightly different plausible initial states and see what the *distribution* of outcomes looks like. That is **ensemble forecasting**. When the members agree, the atmosphere is in a predictable regime and you can be confident; when they diverge wildly, it is not, and the honest forecast is a probability. The spread of the ensemble is itself a forecast — of its own reliability.

**And the reason climate is still predictable.** Weather forecasting is an **initial-value problem**: where exactly is this trough going. Climate projection is a **boundary-value problem**: what is the statistical distribution of weather, given the energy budget the planet is running. You cannot say whether it will rain in Paris on 3 July 2100, and you do not need to in order to say that summers will be hotter. The distinction is the same as being unable to predict a single die roll while confidently predicting the mean of ten thousand.

## The formal version

**Error growth.** For small errors, the growth is exponential and conventionally quoted through a **doubling time** $T_d$:

$$e(t) = e_0\,2^{\,t/T_d}.$$

Observed synoptic-scale doubling times are about **1.5 to 2 days** in modern models. Setting $e = e_{\text{sat}}$ and solving,

$$\boxed{\ t_{\text{limit}} = T_d\log_2\!\left(\frac{e_{\text{sat}}}{e_0}\right)\ }$$

*In words: the useful range is the doubling time times the number of doublings needed to reach saturation.* With an initial error of one percent of the climatological variance and $T_d = 2$ days:

$$t_{\text{limit}} = 2\log_2(100) = 2 \times 6.64 = 13.3\ \text{days}.$$

**The two-week limit, derived.** And the logarithm's brutality is immediate:

| Initial error | $T_d = 2$ days | Gain |
|---|---|---|
| 1 percent | 13.3 days | — |
| 0.1 percent | 19.9 days | +6.6 days for a tenfold better analysis |
| 0.01 percent | 26.6 days | +6.6 days more, for a *hundredfold* |

To double the forecast range from 13 days to 27 you would need an analysis **one hundred times** more accurate everywhere on the planet. That is the sense in which two weeks is a limit rather than a target.

**The upscale error cascade.** Worse, the doubling time is *not* constant across scales. Convective-scale errors — a thunderstorm in slightly the wrong place, a kilometre across — double in about an hour. They grow and merge, contaminating the mesoscale in hours and the synoptic scale in a day or two. So even a *perfect* synoptic analysis is corrupted from below by unresolved small scales you could never have measured. The practical consequence is that refining the model grid does not straightforwardly extend the forecast: it resolves more scales, and those scales bring their own fast-growing errors.

**Ensemble forecasting.** A modern operational ensemble runs 30 to 50 members, perturbing:

- **initial conditions**, along the directions the flow is most sensitive to (the fastest-growing perturbations);
- **model physics**, since parameterizations of convection, cloud and turbulence are themselves uncertain.

Products are probabilistic: "70 percent chance of measurable rain" means about 70 percent of members produced it. The **spread–skill relationship** — large spread predicting large error — is what makes an ensemble more than a hedge: it forecasts the flow's own predictability, and that varies enormously by regime. A strong zonal jet is predictable a week out; a blocking pattern's breakdown may not be predictable three days out.

**What stays predictable longest.** Skill decays fastest at small scales and slowest at large ones, so the *last* thing a model gets right is the **planetary wave pattern** of [5.3](05-03-rossby-waves-beta-effect.md) — whether there will be a ridge over the west and a trough over the east. That is why extended-range forecasts are stated as regimes and anomalies ("colder than normal in the east") rather than as weather.

**Predictability of the second kind.** Lorenz's own distinction:

| | Weather | Climate |
|---|---|---|
| Problem type | initial-value | boundary-value |
| Question | where is *this* trough going | what is the *distribution* of troughs |
| Sensitive to | initial state | forcing (solar, greenhouse gases, albedo) |
| Limit | about 2 weeks | none in principle |

A climate model run from a different initial state produces a completely different sequence of weather — and **the same climate**: the same means, variances and frequency distributions. That is precisely what makes the projection meaningful, and it is why climate models are evaluated on statistics rather than on any individual simulated day.

## Picture

![Forecast error plotted against lead time in days, rising exponentially from a one percent initial error and flattening at saturation after about 13 days, with a second curve starting from a ten times smaller initial error reaching saturation only 6.6 days later, and a third with a faster 1.5-day doubling time saturating in 10 days](assets/06-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — what a better model buys).** A forecasting centre currently has an initial error of 1.5 percent of climatological variance and a doubling time of 1.8 days. (a) Compute the current forecast limit. (b) A new satellite constellation cuts the initial error to 0.5 percent. Compute the new limit and the gain. (c) A model improvement instead extends the doubling time to 2.2 days, initial error unchanged. Compute that limit and compare.

(a) $$t = 1.8\log_2\!\left(\frac{100}{1.5}\right) = 1.8\log_2(66.7) = 1.8\times6.06 = 10.9\ \text{days}.$$

(b) $$t = 1.8\log_2(200) = 1.8\times7.64 = 13.8\ \text{days}, \qquad \text{gain} = 2.9\ \text{days}.$$

(c) $$t = 2.2\log_2(66.7) = 2.2\times6.06 = 13.3\ \text{days}, \qquad \text{gain} = 2.4\ \text{days}.$$

*The comparison is the point.* Tripling the accuracy of the observing system and improving the model's error-growth characteristics by 22 percent buy almost the same thing — around 2.5 days. But the doubling time enters as a *multiplier* while the initial error enters inside a logarithm, so **model improvement scales better**: doubling $T_d$ would double the forecast range, whereas doubling the range through observations alone needs a hundredfold accuracy gain. This is why operational centres invest more in model physics and resolution than in new observing systems, despite the latter being more visible.

**Example 2 (why you'd care — what "70 percent chance of rain" actually means).** An ensemble of 50 members is run. Thirty-five produce measurable rain at a location; fifteen do not. The forecast is issued as 70 percent.

*What it does **not** mean.* It does not mean rain over 70 percent of the area, and it does not mean the forecaster is 70 percent confident in a yes/no answer.

*What it does mean.* Given the uncertainty in today's analysis, 70 percent of the equally plausible atmospheres that are consistent with our observations produce rain there. The number is a statement about *the ensemble of possible atmospheres*, not about the weather.

*How to check whether it is any good.* Take every occasion the centre said 70 percent. If it rained on close to 70 percent of them, the forecast is **reliable** — well calibrated. Reliability is verifiable over many forecasts even though no single probabilistic forecast can be right or wrong, and it is the standard by which ensembles are judged.

*And the deeper point.* On a day when the ensemble members all agree, the forecast is issued as 5 percent or 95 percent, and the atmosphere is in a predictable regime. On a day when they scatter, it is 50 percent — and that *is* useful information: it says today's atmosphere is on a knife edge. A deterministic forecast throws that away, which is why probabilistic forecasting was not a retreat but a genuine advance.

## Watch out

- **You might think** the two-week limit is a computing limitation. **Actually** it is a property of the equations. A perfect model on an infinite computer, started from an imperfect analysis, still loses skill on the same timescale — and the analysis can never be perfect, because the atmosphere has structure below any observing resolution.
- **You might think** chaos means the atmosphere is random. **Actually** it is entirely deterministic, and its *attractor* — the set of states it visits and how often — is stable and predictable. What is unpredictable is the trajectory *on* the attractor. This is exactly why climate (a statement about the attractor) survives while weather (a statement about the trajectory) does not.
- **You might think** the ensemble spread is a measure of forecast error. **Actually** it is a forecast *of* the error, and only a useful one if the ensemble is well calibrated. Under-dispersive ensembles — too confident — are a persistent operational problem, and diagnosing them requires verification over hundreds of cases, not one.
- **You might think** a longer-range forecast is just a shorter one continued. **Actually** it is a *different product*: beyond about a week the useful output is regime and anomaly, not weather. Reading a day-12 map as if it were a day-2 map is the most common misuse of extended-range output.

## One-liner

> Errors double every couple of days and saturate at climatology, so a one-percent analysis gives about thirteen days — and because the limit depends only logarithmically on that one percent, no observing system will ever extend it much; you can only forecast the distribution instead.

## Problems

**P1 (🟢)** A model has an initial error of 2 percent of climatological variance and a doubling time of 2 days. Compute the forecast limit.

**P2 (🟡)** Convective-scale errors double every hour, synoptic-scale errors every 2 days. A thunderstorm is misplaced by an amount corresponding to a 5 percent error at its own scale. (a) How long until that error saturates at the convective scale? (b) Explain why this matters for a 5-day synoptic forecast even though the storm itself is irrelevant by then.

**P3 (🔴, optional)** A research group claims that a new data-assimilation scheme will extend useful forecasts from 13 to 20 days, with the doubling time unchanged at 2 days and saturation at 100 percent. (a) What initial error does their claim require? (b) By what factor must they improve on the current 1 percent? (c) Comment on whether the claim is plausible, and identify which assumption in the error-growth model is the weakest link in evaluating it.

<details>
<summary>Solutions</summary>

**P1** $$t = T_d\log_2\!\left(\frac{e_{\text{sat}}}{e_0}\right) = 2\log_2\!\left(\frac{100}{2}\right) = 2\log_2(50) = 2\times5.64 = 11.3\ \text{days}.$$

*Check.* Slightly less than the 13.3 days for a 1 percent initial error, and the difference is exactly one doubling time (2 days) for a factor-of-2 worse analysis — the logarithm at work.

**P2** (a) $$t = 1\ \mathrm{hour} \times \log_2\!\left(\frac{100}{5}\right) = \log_2(20) = 4.3\ \text{hours}.$$

(b) Because of the **upscale cascade**. The convective error saturates in four hours, but it does not then vanish — it has become a fully developed error at the convective scale, and the errors it induces in the *surrounding* flow (a displaced cold pool, a misplaced latent heat release, a slightly wrong mid-level moisture field) then grow at the mesoscale, and those in turn contaminate the synoptic scale.

So an error you could never have measured — a thunderstorm's exact position, well below any observing network's resolution — propagates upward through the scales and pollutes the day-5 synoptic forecast. **This is why the synoptic forecast limit is not set by synoptic-scale observing errors alone**, and why simply measuring the large scale better cannot fix it. The atmosphere leaks unpredictability upward from scales nobody can observe.

**P3** (a) Solve $20 = 2\log_2(100/e_0)$ for $e_0$:

$$\log_2\!\left(\frac{100}{e_0}\right) = 10 \qquad\Longrightarrow\qquad \frac{100}{e_0} = 2^{10} = 1024 \qquad\Longrightarrow\qquad e_0 = 0.098\ \text{percent}.$$

(b) From 1 percent to 0.098 percent is an improvement by a factor of about **10**.

(c) A tenfold reduction in analysis error, globally and across all variables, is an **extraordinary** claim — decades of satellite and assimilation development have improved analyses by considerably less than that. So the claim should be treated with heavy scepticism on those grounds alone.

But the weakest link is elsewhere: **the assumption that the doubling time stays constant at 2 days as the initial error shrinks.** It does not. As errors get smaller they project increasingly onto *smaller scales*, which have *shorter* doubling times (P2: an hour at the convective scale). So a tenfold better analysis is eaten away faster than the synoptic $T_d = 2$ days suggests, and the real gain would fall well short of 6.6 days. This is the phenomenon of **finite-time predictability**: because the error growth rate accelerates as the scale shrinks, there is a genuine *asymptotic* limit — recent estimates put it near 15 days even for a perfect model with a perfect analysis of everything observable.

*The general lesson.* The simple exponential model gets the shape and the logarithmic scaling right, and it is the correct tool for the order-of-magnitude argument. But it treats error growth as scale-independent, and the atmosphere's most important predictability property is precisely that it is not.

</details>

## Flashback

**From Lesson 5.3 (Rossby waves & the beta effect):** At 45°N with $\beta = 1.62\times10^{-11}\ \mathrm{m^{-1}s^{-1}}$, a wave of wavelength 8000 km sits in a mean westerly of 25 m s⁻¹. (a) Compute the phase speed and state its direction. (b) Compute the stationary wavelength for that mean flow. (c) Relate your answers.

<details>
<summary>Solution</summary>

(a) $$k = \frac{2\pi}{8\times10^{6}} = 7.854\times10^{-7}\ \mathrm{m^{-1}}, \qquad k^2 = 6.169\times10^{-13},$$

$$c = \bar u - \frac{\beta}{k^2} = 25 - \frac{1.62\times10^{-11}}{6.169\times10^{-13}} = 25 - 26.3 = -1.3\ \mathrm{m\,s^{-1}},$$

a slow **westward** drift — essentially stationary.

(b) $$L_s = 2\pi\sqrt{\frac{\bar u}{\beta}} = 2\pi\sqrt{\frac{25}{1.62\times10^{-11}}} = 2\pi\sqrt{1.543\times10^{12}} = 2\pi\times1.242\times10^{6} = 7810\ \mathrm{km}.$$

(c) The 8000 km wave is just longer than the 7810 km stationary wavelength, so it drifts slowly westward — consistent with the small negative $c$ in (a). Waves shorter than $L_s$ move east, longer ones west, and this one sits essentially on the boundary.

*Connecting to this lesson:* a near-stationary long wave is precisely a **blocking** configuration, and blocks are among the hardest features to forecast — their onset and, especially, their breakdown are poorly predicted even at short range. Since the planetary wave pattern is the *last* thing to lose skill, a forecast that gets the block right can be useful at two weeks, and one that gets it wrong is useless at four days. Predictability is not a single number; it depends on which regime the atmosphere happens to be in.

</details>

## Connections

- **Backward:** the initial error whose growth this lesson tracks is the residual of [6.4](06-04-observing-the-atmosphere.md)'s data assimilation; the planetary wave that stays predictable longest is [5.3](05-03-rossby-waves-beta-effect.md)'s; and the small ageostrophic residual whose errors matter most is [5.4](05-04-divergence-vertical-motion-quasi-geostrophic.md)'s.
- **Forward:** [`climate-science`](../../climate-science/syllabus.md) rests on the initial-value versus boundary-value distinction drawn here — it is the reason a projection for 2100 is not defeated by the failure of a forecast for next month.
- **Sideways (dynamical systems):** sensitive dependence, the Lyapunov exponent behind the doubling time, and the strange attractor whose statistics are stable while its trajectories are not, are all developed in [`dynamical-systems` 4.2](../../dynamical-systems/lessons/04-02-sensitive-dependence.md) and [4.3](../../dynamical-systems/lessons/04-03-strange-attractors.md) — using, as it happens, the very Lorenz system that was derived as a caricature of atmospheric convection.

## Closing the course

You began with a thin shell of gas and the hydrostatic equation. You now have, from first principles: why the atmosphere has layers and where each temperature reversal comes from, including the ozone photochemistry that builds one of them; why a rising parcel cools at exactly $g/c_p$; how water bends that number, how much energy it stores, and how a droplet becomes rain; how to plot a sounding on a skew-T and read the afternoon's weather off it; why the surface is 33 K warmer than sunlight alone allows, why the sky is blue and the sunset red, and where on the planet the sunlight actually lands.

Then the dynamics: why the wind blows along the isobars rather than across them, why the jet stream sits where it does, why spin rather than velocity is the natural currency of a rotating fluid, why a conserved potential vorticity delivers the lee trough and the dynamic tropopause, why the jet meanders in a handful of great waves, and — the debt Module 4 left outstanding — exactly what makes a surface low deepen.

And finally the atmosphere you stand in: the turbulent layer that couples air to ground, the shear that turns a shower into a supercell, the heat engine that is a hurricane, the instruments that watch all of it, and the hard two-week wall beyond which none of it can be known.

What is deliberately not here: the numerical machinery of forecasting, which is a computational subject; and the feedbacks, carbon cycle, paleoclimate and model hierarchy of climate — which [`climate-science`](../../climate-science/syllabus.md) is waiting to take up, using exactly the radiation, thermodynamics and dynamics built here.
