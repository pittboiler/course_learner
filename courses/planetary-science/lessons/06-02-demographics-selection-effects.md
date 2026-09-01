# Planetary Science · Lesson 6.2: Demographics and selection effects

> ⏱ ~15 min · Module 6: Exoplanets and habitability · Builds on: [5.5](05-05-asteroids-comets-kuiper-belt.md), [6.1](06-01-exoplanet-detection.md) · Unlocks: [6.3](06-03-mass-radius-composition.md), [6.5](06-05-habitability-and-its-limits.md)

## Why this matters

The first exoplanet found around a Sun-like star was a Jupiter-mass planet orbiting in four days. Then came dozens more. For several years the reasonable-sounding conclusion was that hot Jupiters are common and that our own solar system is unusual.

**Both halves of that were wrong, and for the same reason.** Hot Jupiters are the easiest planets in the universe to detect — deep transits, huge radial-velocity amplitudes, short periods, high transit probability — and correcting for that puts their true occurrence around **1 percent** of Sun-like stars. They are among the *rarest* planet types known.

This is the lesson where exoplanet science becomes a statistical discipline rather than a discovery discipline. **The correction is not a refinement; in the hot-Jupiter case it is a factor of twenty, and it reverses the conclusion.**

## The idea

**A catalogue is not a sample.** What a survey finds is the product of what exists, what geometry permits it to see, and what its instrument is sensitive to. Recovering the first from the third requires dividing out the other two — and both are computable.

**Correction one: geometry.** A transit requires alignment, with probability $R_\star/a$. For an Earth-analogue that is 0.47 percent, so **for every one detected, 212 exist and are invisible.** For a hot Jupiter at 0.05 AU it is 9.3 percent, only a factor of 11. **The geometric correction alone differs by a factor of 20 between the two**, which is most of why hot Jupiters seemed common.

**Correction two: detection efficiency.** Even a transiting planet is found only if its signal beats the noise. Signal-to-noise grows as the depth times the square root of the number of transits observed, so

$$\mathrm{S/N} \propto \left(\frac{R_p}{R_\star}\right)^2\sqrt{\frac{T_{\text{obs}}}{P}}.$$

**Small planets and long periods are doubly penalized**, and completeness must be computed as a function of *both* radius and period, then applied bin by bin. A single average correction is not good enough, because the bias varies by orders of magnitude across the plane.

**Correction three, the one most often forgotten: the stellar sample.** A survey monitors $N$ stars but is not equally sensitive to all of them. Faint stars, large stars, and magnetically active stars all have worse noise. **The effective number of stars searchable for a given signal is smaller than the number surveyed**, sometimes by a large factor, and using the raw $N$ systematically underestimates occurrence.

**Put together, the debiased picture looks nothing like the raw catalogue.**

- **Small planets vastly outnumber large ones.** Planets between 1 and 4 $R_\oplus$ — a class absent from our solar system — orbit at least half of all Sun-like stars.
- **Hot Jupiters are rare**, about 1 percent.
- **Compact multi-planet systems are the norm**, especially around M dwarfs, which average around 2.5 planets each with periods under 200 days.
- **The most common planet size is around 1–3 $R_\oplus$**, and it has a sharp feature in it — the radius valley ([6.3](06-03-mass-radius-composition.md)).

**And the headline number, $\eta_\oplus$ — the fraction of stars with an Earth-sized planet in the habitable zone — is the least well determined of all**, precisely because it sits in the corner of parameter space where every correction is largest. Published values range from about 2 percent to over 50 percent, and the spread is dominated by extrapolation, not by measurement.

## The formal version

**The [occurrence-rate](../reference.md#occurrence-rate) estimator.**

$$\boxed{\ f = \frac{N_{\text{det}}}{N_\star\,p_{\text{tr}}\,C}\ }$$

*In words: divide the detections by the number of stars, the probability of alignment, and the probability of detection given alignment.* Every factor in the denominator is less than one, so **$f$ always exceeds the raw detection fraction.**

Done properly this is a sum over each detected planet, since $p_{\text{tr}}$ and $C$ differ from planet to planet:

$$f = \frac{1}{N_\star}\sum_{i=1}^{N_{\text{det}}}\frac{1}{p_{\text{tr},i}\,C_i}.$$

*In words: each detection stands for $1/(p_{\text{tr}}C)$ planets that exist.* This "inverse detection efficiency" method is standard, and it fails when any single planet has a very small $p_{\text{tr}}C$ — one lucky detection then dominates the estimate.

**Geometric transit probability.**

$$p_{\text{tr}} = \frac{R_\star}{a}, \qquad\text{or with eccentricity}\qquad p_{\text{tr}} = \frac{R_\star}{a}\frac{1}{1-e^2}.$$

| Orbit around the Sun | $p_{\text{tr}}$ | planets per detection |
|---|---|---|
| 0.05 AU (3 d) | 9.3% | 11 |
| 0.4 AU (90 d) | 1.16% | 86 |
| 1 AU (365 d) | 0.47% | **212** |
| 1.6 AU (2 yr) | 0.29% | 344 |

**Detection efficiency.** For a survey of duration $T_{\text{obs}}$ with per-point photometric precision $\sigma$ and $n$ points in transit:

$$\mathrm{S/N} = \frac{\delta}{\sigma}\sqrt{n\,N_{\text{tr}}}, \qquad N_{\text{tr}} = \frac{T_{\text{obs}}}{P},$$

so $\mathrm{S/N}\propto R_p^2P^{-1/2}$ at fixed star and survey. **A planet half the radius has a quarter the depth and needs sixteen times the observing time** to reach the same significance.

**The debiased occurrence rates.** Approximate values for Sun-like (FGK) stars:

| Planet class | $R_p$ | $P$ | Occurrence |
|---|---|---|---|
| hot Jupiter | $>8\,R_\oplus$ | $<10$ d | **~1%** |
| warm/cold giant | $>4\,R_\oplus$ | $<10$ yr | ~10–20% |
| sub-Neptune | 2–4 $R_\oplus$ | $<100$ d | ~30% |
| super-Earth | 1.25–2 $R_\oplus$ | $<100$ d | ~30% |
| Earth-sized | 0.8–1.25 $R_\oplus$ | $<100$ d | ~20% |
| $\eta_\oplus$ (HZ, Earth-sized) | ~1 $R_\oplus$ | HZ | **2%–50%, badly constrained** |

**For M dwarfs the numbers are higher across the board**, with roughly 2.5 planets per star inside 200 days, and about 0.2–0.4 Earth-sized planets per star in the habitable zone.

**The three systematic traps.**

1. **Using the surveyed rather than the searchable stellar sample.** Inflates the denominator, deflates $f$.
2. **Applying one completeness correction across a bin in which it varies by orders of magnitude.** The correction must be finer than the structure it is correcting.
3. **Extrapolating.** $\eta_\oplus$ requires extending measured rates from the periods a survey actually probes (typically $<200$ d for Kepler's small planets) out to a year, and the extrapolation is where the factor-of-20 spread in published values comes from — **not from the data, but from the functional form assumed.**

**Radius uncertainty propagates into occurrence.** Since occurrence is quoted in radius bins and the bins are narrow, a systematic error in stellar radii shifts planets between bins. **Gaia's parallaxes revised thousands of stellar radii, and with them the radius distribution — which is how the radius valley of [6.3](06-03-mass-radius-composition.md) became visible.** It was always there; the earlier radii were too imprecise to resolve it.

## Picture

![Left, a log-log plot of planet radius in Earth radii against orbital period in days, showing where transit surveys can detect planets. Three curves rise gently to the right, labelled easy, marginal and out of reach, marking successively harder detection thresholds — larger planets and shorter periods are easier. A blue dot at 3 days and 12 Earth radii marks hot Jupiters, annotated as about 20 percent of detections but about 1 percent of planets. A coral dot at 365 days and 1 Earth radius marks Earth analogues, annotated as almost none detected. Right, the debiasing formula displayed as occurrence f equals the number detected divided by the product of the number of searchable stars, the transit probability and the completeness, with each term explained: the stellar count must be the searchable rather than the surveyed sample, the transit probability is the stellar radius over the semi-major axis and is 0.47 percent at 1 AU, and completeness depends on both radius and period so must be applied bin by bin. A note observes every term is less than one so the debiased rate always exceeds the raw fraction. A worked case follows: 20 detections among 150,000 stars at a transit probability of 0.530 percent gives a raw fraction of 0.013 percent but a debiased occurrence of 2.5 percent, a factor of 190, from geometry alone. A closing caption records that hot Jupiters were the first exoplanets found and looked ubiquitous, but debiased they orbit about 1 percent of Sun-like stars — rarer than Neptunes, super-Earths and almost everything else — so the discovery order was a map of detectability, not of nature](assets/06-02-fig1.svg)

The left panel is the bias; the right panel is the correction. The gap between the raw and debiased numbers in the worked case is a factor of 190.

## Worked examples

**Example 1 (mechanical — the boss-problem debiasing).** A survey of 150,000 Sun-like stars finds 20 planets with 300-day periods and 1 percent transit depth. Estimate the occurrence rate.

From [6.1](06-01-exoplanet-detection.md), $a = 0.877$ AU and

$$p_{\text{tr}} = \frac{R_\odot}{a} = \frac{6.957\times10^{8}}{0.877\times1.496\times10^{11}} = 5.30\times10^{-3}.$$

Ignoring completeness for the moment:

$$f = \frac{N_{\text{det}}}{N_\star\,p_{\text{tr}}} = \frac{20}{150{,}000\times5.30\times10^{-3}} = \frac{20}{795} = 0.0252 = 2.5\%.$$

**Compare the raw fraction: $20/150{,}000 = 0.013$ percent.** The geometric correction alone is a factor of 190.

**And 2.5 percent is a lower bound**, for three reasons that all push the same way. Completeness $C<1$ divides further, raising $f$. The searchable stellar sample is smaller than 150,000, raising $f$. And a 300-day period requires at least three transits in the baseline, so any survey shorter than about 2.5 years cannot detect these at all — meaning the effective $N_\star$ is only those stars observed for long enough.

**Example 2 (why you'd care — how the hot-Jupiter story was corrected).** Suppose a radial-velocity survey of 1000 nearby Sun-like stars finds 10 hot Jupiters (3-day periods) and 10 Jupiter-analogues (12-year periods) over a 15-year baseline. Are the two classes equally common?

*Hot Jupiters.* $K = 141\ \mathrm{m\,s^{-1}}$ ([6.1](06-01-exoplanet-detection.md)) — detectable around essentially every target, and 15 years covers 1800 orbits. **Completeness is near 100 percent**, and radial velocity has no geometric requirement (only a mild $\sin i$ effect, since only near-face-on orbits are missed). So

$$f_{\text{HJ}} \approx \frac{10}{1000} = 1.0\%.$$

*Jupiter analogues.* $K = 12.5\ \mathrm{m\,s^{-1}}$ — still detectable, but a 12-year period against a 15-year baseline means only about 1.25 orbits are covered. **Detecting a planet from a single incomplete cycle is much harder**: the period and amplitude are degenerate with a linear trend, and typical completeness for such orbits is perhaps 30–50 percent. Take 40 percent:

$$f_{\text{J}} \approx \frac{10}{1000\times0.40} = 2.5\%.$$

**Equal detection counts, occurrence rates differing by a factor of 2.5** — and the real published contrast is sharper still, because longer-baseline surveys find giant-planet occurrence rising steeply with period out to several AU, reaching 10–20 percent for giants inside 10 years.

**The structural lesson is that equal detection counts almost never mean equal abundance.** Any comparison between two classes of planet must divide each by its own completeness, and when the completenesses differ by more than a factor of a few — as they almost always do across period — the raw counts carry no information about relative abundance at all.

This is exactly the trap [5.5](05-05-asteroids-comets-kuiper-belt.md) flagged for asteroid surveys, where completeness is a steep function of size, and it is why "we have found more X than Y" is a statement about instruments rather than about nature until both have been corrected.

## Watch out

- **You might think more detections means more common, but detections measure abundance times detectability**, and detectability varies by orders of magnitude across the parameter space. Hot Jupiters dominated early catalogues and are rare.
- **You might think the correction is a modest refinement, but for a 1 AU orbit it is a factor of 212 from geometry alone.** The debiased and raw numbers are not the same measurement to different precision; they are different quantities.
- **You might think $N_\star$ is the number of stars observed, but it is the number for which the given signal was detectable.** Using the survey size inflates the denominator and deflates the answer.
- **You might think $\eta_\oplus$ is measured, but it is extrapolated** from shorter periods and smaller radii than any survey has fully probed. Published values span more than an order of magnitude, and the spread comes from the assumed functional form of the extrapolation rather than from the data.
- **You might think a planet radius is a measurement, but it is $R_p/R_\star$ times a stellar radius** ([6.1](06-01-exoplanet-detection.md)). Improvements in stellar parameters have moved thousands of planets between occurrence bins.

## One-liner

> Every detection stands for $1/(p_{\text{tr}}C)$ planets you could not see, and until you have divided by both, a catalogue tells you about your telescope rather than about the galaxy.

## Problems

**P1 (🟢)** A survey of 50,000 stars finds 12 transiting planets at 0.2 AU around Sun-like stars. (a) Compute $p_{\text{tr}}$. (b) Compute the raw detection fraction. (c) Compute the geometrically debiased occurrence rate, assuming complete detection.

**P2 (🟡)** Two planet classes are detected 15 times each in the same survey. Class A has $p_{\text{tr}} = 5\%$ and $C = 0.9$; class B has $p_{\text{tr}} = 0.5\%$ and $C = 0.25$. (a) Compute the ratio of their occurrence rates. (b) State which is more common and by how much. (c) Explain in one sentence what a reader would conclude from the raw counts alone.

**P3 (🔴, optional)** A survey measures occurrence for planets of $1\,R_\oplus$ at periods 10–200 d and finds $f = 0.15$ per star per natural-log interval in period, roughly flat. (a) Estimate the occurrence for periods 200–400 d by extrapolating the flat rate. (b) Repeat assuming instead that $df/d\ln P \propto P^{-0.5}$ beyond 200 d. (c) Compute the ratio of the two answers and explain what this implies for published values of $\eta_\oplus$.

<details>
<summary>Solutions</summary>

**P1** (a) $$p_{\text{tr}} = \frac{R_\odot}{a} = \frac{6.957\times10^{8}}{0.2\times1.496\times10^{11}} = \frac{6.957\times10^{8}}{2.992\times10^{10}} = 0.02325 = 2.33\%.$$

(b) $$\frac{12}{50{,}000} = 2.4\times10^{-4} = 0.024\%.$$

(c) $$f = \frac{12}{50{,}000\times0.02325} = \frac{12}{1162.5} = 0.01032 = 1.03\%.$$

A factor of 43 above the raw fraction — smaller than the 190 of Example 1 because this orbit is five times closer in and therefore five times more likely to transit.

**P2** (a) $$\frac{f_A}{f_B} = \frac{N/(N_\star p_A C_A)}{N/(N_\star p_B C_B)} = \frac{p_BC_B}{p_AC_A} = \frac{0.005\times0.25}{0.05\times0.90} = \frac{1.25\times10^{-3}}{4.5\times10^{-2}} = 0.0278.$$

(b) $$\frac{f_B}{f_A} = \frac{1}{0.0278} = 36.$$

**Class B is 36 times more common than class A**, despite identical detection counts.

(c) A reader looking at the raw counts would conclude the two classes are **equally common** — and would be wrong by a factor of 36, in the direction of overestimating the abundance of the easier-to-detect class.

**P3** (a) A flat rate in $\ln P$ means occurrence is proportional to the logarithmic width of the interval:

$$\Delta\ln P = \ln\frac{400}{200} = \ln 2 = 0.693,$$
$$f = 0.15\times0.693 = 0.104.$$

For comparison, the measured range 10–200 d spans $\ln 20 = 3.00$, giving $f = 0.45$ over that whole range.

(b) With $df/d\ln P = 0.15\,(P/200)^{-0.5}$:

$$f = \int_{200}^{400}0.15\left(\frac{P}{200}\right)^{-0.5}\frac{dP}{P} = 0.15\times200^{0.5}\int_{200}^{400}P^{-1.5}\,dP.$$

$$\int_{200}^{400}P^{-1.5}\,dP = \left[-2P^{-0.5}\right]_{200}^{400} = 2\left(\frac{1}{\sqrt{200}}-\frac{1}{\sqrt{400}}\right) = 2(0.07071-0.05) = 0.04142.$$

$$f = 0.15\times14.142\times0.04142 = 0.0879.$$

(c) $$\frac{0.104}{0.0879} = 1.18.$$

Only 18 percent apart — **which looks reassuring, and is misleading.** The two assumptions agree over one factor of two in period because the extrapolation has barely begun.

Push the extrapolation further and the gap widens without bound. From 200 d to 2000 d the flat model gives $0.15\ln 10 = 0.345$ and the declining model $0.205$ — a ratio of 1.68 rather than 1.18. And the two models diverge qualitatively rather than merely quantitatively: **the flat model's integral over period diverges logarithmically, while the declining model's converges**, so the disagreement between them grows without limit as the extrapolation lengthens.

This is why published $\eta_\oplus$ values range from about 2 percent to over 50 percent. **The disagreement is not about the data — all groups fit the same Kepler catalogue — it is about the functional form assumed beyond where the data run out**, and about where exactly the habitable zone's edges are placed ([6.5](06-05-habitability-and-its-limits.md)). Since Kepler's completeness for $1\,R_\oplus$ planets falls off sharply beyond about 200 days, essentially every $\eta_\oplus$ estimate rests on extrapolation into a region the survey could not probe.

**The honest statement is that $\eta_\oplus$ is not currently a measured quantity**, and any argument depending on its precise value — including estimates of how many habitable planets exist in the galaxy — inherits an order-of-magnitude uncertainty that no amount of reanalysis of existing data can remove. It needs a longer-baseline survey, which is what the proposed direct-imaging missions are partly designed to provide.

</details>

## Flashback

**From Lesson 5.5 (Asteroids, comets and the Kuiper belt):** Using $N(>D)\propto D^{-1.8}$ for near-Earth objects, normalized to 1000 objects larger than 1 km: (a) Estimate the number larger than 300 m. (b) Estimate the number larger than 30 m. (c) Surveys have found essentially all objects above 1 km but only a few percent above 30 m; state what this illustrates about survey completeness.

<details>
<summary>Solution</summary>

(a) $$N = 1000\times(0.3)^{-1.8} = 1000\times e^{1.8\times1.20397} = 1000\times e^{2.16715} = 1000\times8.734 = 8.7\times10^{3}.$$

(b) $$N = 1000\times(0.03)^{-1.8} = 1000\times e^{1.8\times3.50656} = 1000\times e^{6.31181} = 1000\times551 = 5.5\times10^{5}.$$

(c) It illustrates that **completeness is a steep function of the quantity being surveyed**, and that the population rises steeply in exactly the regime where completeness collapses. There are about 550 times more 30 m objects than 1 km ones, and they are roughly $(1000/30)^2\approx1100$ times fainter at the same distance — so the two effects compound, and a survey that is essentially complete at 1 km is a few percent complete at 30 m.

The transferable point is the one this lesson makes for exoplanets: **the raw count of known objects in a size bin is the product of the true population and a detectability that varies by orders of magnitude**, and comparing counts across bins without dividing by completeness gives an answer that reflects the survey rather than the population. In both fields the correction is computable, and in both it changes the conclusion qualitatively rather than marginally.

</details>

## Connections

- **Backward:** [6.1](06-01-exoplanet-detection.md) supplied the transit probability and signal-to-noise scalings that this lesson divides out; [5.5](05-05-asteroids-comets-kuiper-belt.md) met the same problem for asteroid surveys, and [3.3](03-03-remote-spectroscopy.md) met it for asteroid taxonomies.
- **Forward:** [6.3](06-03-mass-radius-composition.md) uses the debiased radius distribution, in which the radius valley is only visible once stellar radii are precise enough; [6.5](06-05-habitability-and-its-limits.md) inherits $\eta_\oplus$ and its order-of-magnitude uncertainty.
- **Sideways:** the inverse-detection-efficiency estimator is a Horvitz–Thompson estimator from survey sampling, and the completeness function is a likelihood-weighting problem of exactly the kind treated in [`statistical-learning`](../../statistical-learning/syllabus.md) and [`prob-stat-refresher`](../../prob-stat-refresher/syllabus.md), which own the inference machinery. Malmquist bias in astronomy and length-biased sampling in epidemiology are the same structure.
