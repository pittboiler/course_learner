# Climate Physics · Lesson 5.2: Extremes and event attribution

> ⏱ ~15 min · Module 5: What actually changes · Builds on: [5.1](05-01-hydrological-cycle-response.md), [3.5](03-05-detection-attribution.md), [3.4](03-04-internal-variability-detection.md) · Unlocks: [5.6](05-06-tipping-elements-thresholds.md)

## Why this matters

Nobody is harmed by a mean. Damage comes from the tail — the heatwave, the flood, the drought — and the tail responds to a shift in the mean far more dramatically than intuition allows. **Move a Gaussian by one standard deviation and the probability of exceeding a two-sigma threshold rises sevenfold.** That single arithmetic fact explains why a warming of 1.2 K, which sounds modest, has already produced heat events that were essentially impossible before, and it is the foundation of event attribution — the discipline that can now say, within weeks of an event, how much more likely human influence made it.

## The idea

**A small shift moves a lot of tail.** The mean moves by a fraction of a standard deviation; the tail probability, which lives on the exponentially-decaying flank of the distribution, changes by a large factor. The steeper the tail, the larger the factor — so the *rarer* the event, the *greater* the proportional change in its likelihood.

**Shifting and widening are different, and both happen.** A pure shift of the distribution is the simplest model and captures most of the heat-extreme response. But variance can change too: soil-moisture depletion in a warming climate lets land surfaces heat up faster once they dry out, which *stretches* the hot tail specifically. That is why the hottest days over land often warm faster than the mean.

**Rainfall extremes obey a different scaling from mean rainfall.** [5.1](05-01-hydrological-cycle-response.md) established that global mean precipitation is limited to about 2 percent per kelvin by the atmosphere's energy budget. An individual extreme event is under no such constraint — it lasts hours, it is local, and the latent heat it releases is exported by the circulation. Its intensity is limited by the moisture available to converge, which is the Clausius–Clapeyron 7 percent per kelvin. **Mean rain rises at 2 percent per kelvin; extreme rain rises at 7 or more.**

**Attribution asks about probability, not causation.** The question is never "did climate change cause this flood". It is: how often would an event *like this* have occurred in a world without human influence, and how often does it occur now? The ratio of those two probabilities is the answer, and it requires defining the event class in advance.

## The formal version

**The shifted-Gaussian calculation.** Let summer temperature be $\mathcal{N}(0,1)$ in the reference climate and define "extreme" as exceeding $+2\sigma$. Warming shifts the mean by $\mu$ standard deviations:

$$P_0 = \Pr(Z>2) = 0.0228, \qquad P_1 = \Pr(Z>2-\mu).$$

| Shift $\mu$ | $P_1$ | Return period | Risk ratio $P_1/P_0$ |
|---|---|---|---|
| 0 | 0.0228 | 1 in 44 | 1 |
| 0.5$\sigma$ | 0.0668 | 1 in 15 | 2.9 |
| 1.0$\sigma$ | 0.1587 | 1 in 6.3 | 7.0 |
| 1.5$\sigma$ | 0.3085 | 1 in 3.2 | 13.6 |

*In words: one standard deviation of warming turns a once-in-44-years summer into a once-in-six-years summer.*

And the effect is stronger for rarer events. With a $+3\sigma$ threshold, a $1\sigma$ shift gives $\Pr(Z>2)/\Pr(Z>3) = 0.0228/0.00135 = 16.9$ — a risk ratio of 17 rather than 7. **The rarer the event, the larger the proportional change**, which is the Gaussian tail's $e^{-z^2/2}$ at work: the log-probability is quadratic, so its derivative grows linearly with $z$.

**Risk ratio and fraction of attributable risk.** Two standard metrics:

$$\mathrm{RR} = \frac{P_1}{P_0}, \qquad \mathrm{FAR} = 1 - \frac{P_0}{P_1} = 1 - \frac{1}{\mathrm{RR}}.$$

*In words: the risk ratio is how many times more likely the event has become; the fraction of attributable risk is the share of the current risk that would not exist without the forcing.* For $\mathrm{RR} = 7$, $\mathrm{FAR} = 0.857$ — 86 percent of the current risk of such a summer is attributable.

The FAR framing comes directly from epidemiology, where it answers "what fraction of lung cancers in smokers is attributable to smoking". The mathematics is identical, including the caveat: **FAR is a property of the population risk, not of any individual case.** You cannot say this particular summer was 86 percent caused by warming.

**How an attribution study is actually done.** Two families of method:

**Probabilistic (risk-based).** Define the event class precisely — a region, a season, a variable, a threshold, e.g. "the June 2021 area-average maximum temperature over the Pacific Northwest". Estimate $P_1$ from observations and from large ensembles of a model run with historical forcings, and $P_0$ from ensembles run with natural forcings only (or from a detrended observational record). Report $\mathrm{RR}$ with a confidence interval.

**Conditional (storyline).** Take the circulation pattern that actually occurred as given, and ask only how much warmer or wetter it was because of the background warming. This sidesteps the hardest question — whether the *dynamics* have changed — at the cost of answering a narrower one.

The two often disagree, and the disagreement is informative rather than embarrassing: it separates the thermodynamic contribution (well understood, robust) from the dynamic one (poorly constrained). A study reporting a large risk ratio driven by a circulation change should be read more sceptically than one driven by warming alone.

**What is well attributed and what is not.**

| Event type | Confidence | Why |
|---|---|---|
| Heat extremes | high | almost pure thermodynamics; large signal-to-noise |
| Heavy precipitation | medium-high | Clausius–Clapeyron gives a clear expectation |
| Drought | medium | depends on precipitation *and* evaporative demand *and* circulation |
| Tropical cyclone intensity | medium | theory is good, record is short and inhomogeneous |
| Tornadoes, hail | low | too small to resolve; conflicting ingredient trends |

*In words: the more an event depends on circulation rather than on temperature or moisture, the weaker the attribution.* This ranking is not a matter of effort — it follows from [3.4](03-04-internal-variability-detection.md)'s signal-to-noise argument applied event by event.

**Precipitation extreme scaling.** Observed and modelled daily precipitation extremes scale at roughly the Clausius–Clapeyron rate:

$$\frac{1}{P_{\text{ext}}}\frac{dP_{\text{ext}}}{dT} \approx 0.07\ \mathrm{K^{-1}}.$$

Sub-daily convective extremes often scale *faster* — up to 14 percent per kelvin, so-called **super-Clausius–Clapeyron** scaling. The mechanism is dynamical: a more intense storm has stronger updrafts, which converge moisture from a larger area, so the intensification is thermodynamic *and* dynamic. Since urban drainage is designed against short-duration intensity, this is where the engineering consequences are sharpest.

**Heat extremes over land can beat the mean.** Regional hot extremes in the Mediterranean, central Europe and central North America warm faster than global mean temperature by a factor of 2 to 3. Two mechanisms: land warms faster than ocean (a factor of ~1.5), and **soil-moisture feedback** — once soil dries, evaporative cooling stops and the surface energy budget must be balanced by sensible heat instead, so the surface temperature rises sharply. That converts a shift into a shift-plus-stretch and lengthens the hot tail specifically.

## Picture

![Two probability distributions of summer temperature. The blue pre-industrial curve is a standard normal; the coral curve is shifted right by one standard deviation. A vertical dashed line marks an "extreme" threshold at plus two standard deviations from the old mean. The area beyond that threshold under the blue curve is small, 2.3 percent of summers; the area under the coral curve is much larger, 15.9 percent. The mean moved by one standard deviation but the tail probability rose sevenfold](assets/05-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — a heatwave risk ratio).** Regional summer temperature has a standard deviation of $0.8$ K. The region has warmed $1.6$ K. An "extreme summer" is defined as exceeding the old $+2\sigma$ level. (a) Express the warming in standard deviations. (b) Compute $P_0$, $P_1$, the risk ratio and the FAR. (c) Express both as return periods.

(a) $$\mu = \frac{1.6}{0.8} = 2.0\sigma.$$

(b) $$P_0 = \Pr(Z>2) = 0.0228, \qquad P_1 = \Pr(Z>2-2) = \Pr(Z>0) = 0.500.$$
$$\mathrm{RR} = \frac{0.500}{0.0228} = 22.0, \qquad \mathrm{FAR} = 1-\frac{1}{22.0} = 0.955.$$

(c) Before: 1 in 44 years. After: 1 in 2 years.

*The point.* Two kelvin of regional warming against a natural variability of 0.8 K converts a once-in-a-lifetime summer into an average one. This is not an exotic case — it is roughly the situation in the Mediterranean, where summer variability is small and regional warming has been large. **The relevant quantity is warming measured in units of local variability**, and that ratio is largest exactly where variability is smallest: the tropics, where interannual variability is a few tenths of a kelvin, are already outside their pre-industrial range every year, despite having warmed less than anywhere else.

**Example 2 (why you'd care — reading an attribution headline).** A study reports: "The July 2023 heatwave would have been virtually impossible without human-caused climate change; the risk ratio is at least 1000." (a) What is the FAR? (b) What does "virtually impossible" mean operationally? (c) State three things this claim does *not* assert.

(a) $$\mathrm{FAR} = 1 - \frac{1}{1000} = 0.999.$$

(b) It means $P_0$ was so small that it could not be estimated from the available ensembles — no member of the natural-forcings-only ensemble reached the threshold. The "at least 1000" is a lower bound set by the ensemble size: with, say, 3000 simulated summers and zero exceedances, the upper confidence bound on $P_0$ is about $3/3000 = 10^{-3}$, hence RR at least of order 1000. **The number is a statement about the ensemble, not a measured probability.**

(c) Three things it does not assert:

1. **It does not say the event was caused by climate change** in any single-case sense. It is a statement about the frequency of a *class* of events. The event still required the particular blocking pattern that occurred, which may have nothing to do with warming.
2. **It does not say all such events are attributable.** The event class was defined by a threshold, a region and a duration chosen by the analysts; a different definition gives a different risk ratio, sometimes by an order of magnitude. Sensitivity to event definition is the main methodological weakness of the field.
3. **It does not say the dynamics changed.** Most of the signal in heat attribution is the thermodynamic shift of the whole distribution. If the study also claims that blocking has become more likely, that is a separate and much weaker claim.

*The general principle.* An attribution statement is a **conditional probability with a stated event definition**. Read the definition before reading the number — and be aware that the same physical event, defined as a three-day regional mean rather than a one-day station maximum, can yield risk ratios differing by a factor of ten. This is a real limitation, not a criticism: the field is explicit about it, and reputable studies report sensitivity to the definition.

## Watch out

- **You might think** a 1 K shift in the mean is a small change to extremes. **Actually** the tail responds exponentially: with $\sigma = 1$ K, that shift raises the frequency of $+2\sigma$ events sevenfold and $+3\sigma$ events seventeenfold. **The rarer the event, the bigger the multiplier** — precisely the opposite of the intuition that rare things are robust.
- **You might think** heavy rainfall should rise at the global 2 percent per kelvin. **Actually** that constraint applies only to the *global time-mean*, which is limited by the atmosphere's radiative cooling. An individual extreme is limited by moisture convergence and scales at 7 percent per kelvin or more. Total rain rises slowly; the way it is delivered changes a great deal — more of it in fewer, heavier events, with longer dry spells between.
- **You might think** attribution says a particular event was caused by warming. **Actually** it gives a risk ratio for a class of events. The individual-versus-population distinction is the same one that separates "smoking causes lung cancer" (true, population-level) from "smoking caused this person's cancer" (not determinable). Treating FAR as a per-event causal fraction is the standard misreading.

## One-liner

> The mean moved a little and the tail moved a lot, because tail probability is exponential in the threshold — which is why a 1.2 K world already produces events the old climate essentially could not.

## Problems

**P1 (🟢)** A region's summer temperature is Gaussian with $\sigma = 1.1$ K. It has warmed by 1.65 K. An extreme is defined as exceeding the pre-industrial $+1.5\sigma$ level. (a) Express the warming in standard deviations. (b) Compute $P_0$ and $P_1$ using $\Pr(Z>1.5) = 0.0668$ and $\Pr(Z>0) = 0.5$. (c) Compute the risk ratio and the FAR.

**P2 (🟡)** Daily precipitation extremes scale at 7 percent per kelvin; sub-hourly convective extremes at 12 percent per kelvin. A city's drainage was designed for a 1-in-50-year hourly rainfall of 40 mm, under a climate 1.3 K cooler than today. (a) Compute today's intensity for the same return period, using the sub-hourly scaling. (b) Compute the intensity after a further 2 K of warming. (c) If the extreme-rainfall distribution has an exponential tail with $\Pr(R > r) \propto e^{-r/r_0}$ and $r_0 = 12$ mm, compute the factor by which the frequency of a 40 mm hour has increased today.

**P3 (🔴, optional)** An attribution study defines its event as the hottest 5-day mean temperature in a region. In the factual ensemble (2000 members) 84 exceed the threshold; in the counterfactual ensemble (2000 members) 3 do. (a) Compute $P_1$, $P_0$, the risk ratio and the FAR. (b) Compute an approximate 95 percent confidence interval on the risk ratio, treating the counts as Poisson so that the standard error of $\ln\mathrm{RR}$ is $\sqrt{1/n_1 + 1/n_0}$. (c) Comment on what limits the precision, and what would happen to the reported RR if the counterfactual ensemble had produced zero exceedances.

<details>
<summary>Solutions</summary>

**P1** (a) $$\mu = \frac{1.65}{1.1} = 1.5\sigma.$$

(b) $$P_0 = \Pr(Z>1.5) = 0.0668, \qquad P_1 = \Pr(Z>1.5-1.5) = \Pr(Z>0) = 0.500.$$

(c) $$\mathrm{RR} = \frac{0.500}{0.0668} = 7.49, \qquad \mathrm{FAR} = 1-\frac{1}{7.49} = 0.866.$$

What was a 1-in-15-year summer is now a 1-in-2-year summer, and 87 percent of its current risk is attributable.

**P2** (a) $$I_{\text{now}} = 40\times(1.12)^{1.3} = 40\times e^{1.3\ln 1.12} = 40\times e^{0.14733} = 40\times1.1587 = 46.3\ \mathrm{mm}.$$

(b) $$I_{\text{future}} = 40\times(1.12)^{3.3} = 40\times e^{0.37400} = 40\times1.4536 = 58.1\ \mathrm{mm}.$$

An increase of 45 percent over the design value — for infrastructure sized on a 1-in-50-year event, that is a large exceedance.

(c) With an exponential tail, the frequency of exceeding a fixed threshold $r$ when the whole distribution scales by a factor $s$ is $\Pr(R>r) \propto e^{-r/(s r_0)}$. Today $s = 1.1587$, so

$$\frac{\Pr_{\text{now}}(R>40)}{\Pr_{\text{then}}(R>40)} = \frac{e^{-40/(1.1587\times12)}}{e^{-40/12}} = \exp\left[\frac{40}{12}\left(1-\frac{1}{1.1587}\right)\right] = \exp\left[3.333\times0.1370\right] = e^{0.4566} = 1.58.$$

The design event has become **58 percent more frequent** — a 1-in-50-year rainfall is now roughly 1-in-32. Note the structure: a 16 percent increase in intensity produced a 58 percent increase in frequency, and it would produce more still for a rarer threshold. **Intensity scaling and frequency scaling are different numbers, and infrastructure standards are written in frequency.**

**P3** (a) $$P_1 = \frac{84}{2000} = 0.042, \qquad P_0 = \frac{3}{2000} = 0.0015,$$
$$\mathrm{RR} = \frac{0.042}{0.0015} = 28, \qquad \mathrm{FAR} = 1-\frac{1}{28} = 0.964.$$

(b) $$\mathrm{SE}(\ln\mathrm{RR}) = \sqrt{\frac{1}{84}+\frac{1}{3}} = \sqrt{0.0119+0.3333} = \sqrt{0.3452} = 0.5875.$$

$$\ln\mathrm{RR} = \ln 28 = 3.332, \qquad 95\ \text{percent CI} = 3.332 \pm 1.96(0.5875) = [2.181,\ 4.484].$$

Exponentiating: $$\mathrm{RR} \in [8.9,\ 88.7].$$

An order of magnitude wide.

(c) The precision is limited almost entirely by the **counterfactual** count: $1/3 = 0.333$ against $1/84 = 0.012$, so 97 percent of the variance comes from the three exceedances in the natural-forcings ensemble. This is intrinsic to the problem — the whole point is that the event is rare without forcing, so the denominator is always poorly sampled. Enlarging the *factual* ensemble does almost nothing; enlarging the counterfactual one is the only remedy, and it must be enlarged by a large factor to help, since the standard error falls as $n_0^{-1/2}$.

If the counterfactual had produced **zero** exceedances, the point estimate of RR would be infinite and undefined. The standard practice is to report a lower bound: with zero events in 2000 trials, the one-sided 95 percent upper bound on $P_0$ is $3/2000 = 0.0015$ (the "rule of three"), giving $\mathrm{RR} \ge 0.042/0.0015 = 28$. This is exactly the situation behind headlines like "virtually impossible without climate change" and "at least 150 times more likely" — **those numbers are ensemble-size artefacts reported as bounds, and they should be read as "we could not produce this event without forcing", not as measured ratios.**

*Check.* The rule of three is worth carrying: observing zero events in $n$ trials gives a 95 percent upper bound of $3/n$ on the rate. It is the reason attribution studies report lower bounds on RR that are suspiciously round numbers like 100, 150 or 1000 — those are $n/3$ for ensemble sizes of 300, 450 and 3000.

</details>

## Flashback

**From Lesson 3.5 (Detection and attribution):** Observations over land show daily minimum temperatures rising at $0.20\ \mathrm{K\,decade^{-1}}$ and daily maximum temperatures at $0.14\ \mathrm{K\,decade^{-1}}$. (a) Compute the trend in the diurnal temperature range. (b) Which forcing fingerprint does this match, and why? (c) What would a warming driven by increased solar output predict for the same quantity?

<details>
<summary>Solution</summary>

(a) Diurnal temperature range is $T_{\max} - T_{\min}$, so

$$\frac{d(\mathrm{DTR})}{dt} = 0.14 - 0.20 = -0.06\ \mathrm{K\,decade^{-1}}.$$

The range is **narrowing**.

(b) This matches the **greenhouse-gas** fingerprint. Enhanced downward longwave radiation operates continuously — the greenhouse effect does not switch off at night — so it warms night-time minima at least as strongly as daytime maxima. Meanwhile daytime warming is partly offset by increased evaporation and, historically, by aerosol dimming. The net signature is a narrowing diurnal range, which is what is observed.

(c) A solar-driven warming would act **only during the day**, since that is when the sunlight arrives. It would raise $T_{\max}$ substantially and $T_{\min}$ only indirectly, through the surface's overnight retention of the extra heat absorbed by day. The prediction is therefore a **widening** diurnal range — the opposite sign.

*Check.* This is why DTR is listed as an independent corroborating fingerprint in [3.5](03-05-detection-attribution.md): it separates the two hypotheses by a sign, not merely by a magnitude, and it uses a completely different observation from the vertical-profile fingerprint. Note the complication that keeps DTR from being decisive on its own: aerosols and increased cloud cover also narrow the range (by suppressing daytime maxima), and the observed narrowing was strongest in the mid-twentieth century when aerosols were rising fastest, slowing after 1990 as air quality improved. Attribution rests on many fingerprints precisely because each one has a confound of this kind.

</details>

## Connections

- **Backward:** the 7 percent per kelvin extreme-rainfall scaling is [5.1](05-01-hydrological-cycle-response.md)'s moisture constraint applied to a single event freed of the global energy budget; the probabilistic machinery is [3.5](03-05-detection-attribution.md)'s applied to a tail rather than a mean; the signal-to-noise ranking is [3.4](03-04-internal-variability-detection.md)'s.
- **Forward:** the distinction between a shifting distribution and a genuine threshold is what [5.6](05-06-tipping-elements-thresholds.md) turns on — most "tipping point" language in public discussion is really this lesson's tail arithmetic misdescribed.
- **Sideways (statistics):** risk ratio and fraction of attributable risk are imported wholesale from epidemiology, along with the population-versus-individual caveat; the tail arithmetic is extreme value theory, where the generalized Pareto distribution replaces the Gaussian for genuinely rare events and gives even larger multipliers. See [`prob-stat-refresher` 2.3](../../prob-stat-refresher/lessons/02-03-continuous-distributions.md).
