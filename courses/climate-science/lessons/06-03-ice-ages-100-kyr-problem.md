# Climate Physics · Lesson 6.3: The ice ages and the 100-kyr problem

> ⏱ ~15 min · Module 6: Models, deep time and the long view · Builds on: [6.1](06-01-energy-balance-models-bistability.md), [5.4](05-04-the-cryosphere.md), [geology 3.4](../../geology/lessons/03-04-glaciers-ice-ages.md), [atmospheric-science 3.5](../../atmospheric-science/lessons/03-05-solar-geometry-seasons-insolation.md) · Unlocks: [6.4](06-04-deep-time-slow-thermostat.md)

## Why this matters

The last million years contain the only long, well-dated record of a climate system responding to a *known* forcing. That makes the ice ages the field's best natural experiment — and for fifty years they have posed a problem that looks like a refutation of the whole framework. The forcing has periods of 41 and 23 thousand years. The response has a period of 100 thousand years, at which the forcing is essentially absent. If climate simply followed forcing, this could not happen. Resolving it does not require abandoning anything; it requires taking seriously that the ice sheets are a **nonlinear, threshold-crossing system with memory**, and that $\mathrm{CO_2}$ is the amplifier that turns a Northern-Hemisphere summer signal into a global one.

## The idea

**Milankovitch supplies the pacemaker, not the power.** Orbital variations redistribute sunlight in latitude and season while barely changing the annual global total ([atmospheric-science 3.5](../../atmospheric-science/lessons/03-05-solar-geometry-seasons-insolation.md)). Eccentricity varies from 0 to 0.06, changing annual-mean global insolation by 0.18 percent — under half a watt per square metre. Precession changes high-latitude summer insolation by up to 12 percent, which is 50 W m⁻². **The forcing that matters is seasonal and regional, and it is enormous.**

**The response is a sawtooth, not a sinusoid.** Ice volume grows slowly over 80 to 100 kyr and collapses in 5 to 10 kyr. A sawtooth's Fourier spectrum is not the spectrum of its driver — the shape itself creates power at the repeat period, whatever that is. **This is the single most important move in resolving the puzzle: the 100-kyr power is in the shape, not in the forcing.**

**Terminations happen when two conditions coincide.** An ice sheet must be *large* (so it is vulnerable — extensive, low-elevation margins, isostatically depressed bed, unstable marine sectors) and the Northern-Hemisphere summer insolation must be *high*. Precession offers a high-insolation opportunity every 23 kyr, but the ice is only ready every fourth or fifth one. Skipping beats gives intervals of roughly 80, 100 or 120 kyr — which is exactly what the record shows.

**$\mathrm{CO_2}$ globalizes and amplifies.** Glacial $\mathrm{CO_2}$ was 180–190 ppm against 280 interglacial: $2.2\ \mathrm{W\,m^{-2}}$ of forcing, worth 1.7 K — about a third of the 5 K glacial cooling. The ice sheets themselves supply another 3 to 4 W m⁻² of albedo forcing. So the orbital trigger is amplified roughly threefold and, crucially, **converted from a June-at-65°N signal into a global, annual-mean one**, which is why the Southern Hemisphere cooled in step with the North despite receiving the opposite orbital forcing.

**And the whole rhythm changed a million years ago with no change in the orbit.** Before about 1.0 Myr the cycles were 41 kyr — matching obliquity, exactly as a linear response should. After, they became 100 kyr and larger in amplitude. The orbital forcing did not change. Something *internal* did, and that is the Mid-Pleistocene Transition.

## The formal version

**The orbital parameters** (geometry established in [atmospheric-science 3.5](../../atmospheric-science/lessons/03-05-solar-geometry-seasons-insolation.md) and [geology 3.4](../../geology/lessons/03-04-glaciers-ice-ages.md)):

| Parameter | Range | Periods | Effect |
|---|---|---|---|
| Eccentricity $e$ | 0 to 0.06 | 100, 400 kyr | annual-mean insolation; modulates precession amplitude |
| Obliquity $\varepsilon$ | 22.1° to 24.5° | 41 kyr | seasonality and latitudinal contrast |
| Precession | — | 19, 23 kyr | which season occurs at perihelion |

**Quantifying the forcing.** Annual-mean global insolation depends on eccentricity as $\bar S \propto (1-e^2)^{-1/2}$:

$$\frac{\bar S(e=0.06)}{\bar S(e=0)} = \frac{1}{\sqrt{1-0.0036}} = 1.0018,$$

so 0.18 percent, i.e. $\Delta F = 0.0018\times1361\times0.7/4 = 0.43\ \mathrm{W\,m^{-2}}$ — enough for perhaps 0.3 K. **The 100-kyr cycles involve 5 K.** That is the 100-kyr problem stated numerically: the forcing at the dominant response period is more than an order of magnitude too small.

By contrast, June insolation at 65°N varies from about 425 to 550 W m⁻² over a precession cycle at high eccentricity — a swing of 125 W m⁻², which is 30 times the entire anthropogenic forcing. **The forcing is not weak; it is weak *at 100 kyr*.**

**Resolution 1: the response is nonlinear, and a sawtooth makes its own spectrum.** Ice sheets accumulate slowly (limited by snowfall, of order 0.1 m yr⁻¹) and disintegrate fast (limited by melt and by marine instability, [5.4](05-04-the-cryosphere.md)). A system whose growth and decay timescales differ by a factor of ten produces an asymmetric sawtooth. Fourier-decomposing that sawtooth gives strong power at the *repeat interval* plus harmonics — none of which need be present in the forcing.

**Resolution 2: threshold crossing and skipped beats.** Model termination as requiring a *conjunction*:

$$\text{terminate if} \quad V_{\text{ice}} > V_c \quad\text{and}\quad I_{65\mathrm{N,June}} > I_c.$$

Ice volume grows monotonically between terminations; insolation offers an opportunity every 23 kyr. If the ice takes four or five precession cycles to reach $V_c$, terminations occur at intervals of $4\times23 = 92$ or $5\times23 = 115$ kyr. The observed intervals — roughly 90, 100, 120 kyr — are exactly these. **The 100 kyr is not a period; it is an average of skipped beats.** This is why the "100-kyr cycle" is not a clean spectral line and why individual cycles differ in length.

Eccentricity's role in this picture is real but indirect: it *modulates the amplitude of precession*, so at high eccentricity the insolation maxima are stronger and more likely to exceed $I_c$. Eccentricity therefore appears in the record as a *pacing* influence with essentially no direct radiative role.

**Resolution 3: $\mathrm{CO_2}$ as amplifier.** The forcing budget at the Last Glacial Maximum relative to pre-industrial:

| Contribution | W m⁻² |
|---|---|
| $\mathrm{CO_2}$ (280 → 185 ppm) | $-2.2$ |
| $\mathrm{CH_4}$, $\mathrm{N_2O}$ | $-0.6$ |
| Ice sheets (albedo) | $-3.2$ |
| Dust, vegetation, sea level | $-1.1$ |
| **Total** | $\approx -7.1$ |

Checking the $\mathrm{CO_2}$ term: $\Delta F = 5.35\ln(185/280) = -2.22\ \mathrm{W\,m^{-2}}$, and with $\lambda = 1.3$ that alone is $-1.7$ K of the roughly $-5$ K observed.

*In words: orbital variation triggers, and greenhouse gases plus ice albedo supply most of the actual forcing.* This also answers the standard objection that "$\mathrm{CO_2}$ lags temperature at terminations" — measured lags at Antarctic terminations are of order 0 to a few hundred years. **That is what an amplifier does.** A feedback is *supposed* to lag its trigger; if $\mathrm{CO_2}$ had led, it would have to be a forcing, and nothing was available to force it. The orbital signal starts the warming; the ocean releases $\mathrm{CO_2}$ in response; the $\mathrm{CO_2}$ then supplies most of the warming that follows.

Why the ocean releases it is [`oceanography`](../../oceanography/syllabus.md)'s question in detail — Southern Ocean stratification, sea-ice cover on the outcrop regions, iron fertilization by dust, and the efficiency of the biological pump ([4.2](04-02-ocean-carbon-revelle-factor.md)) all contribute, and the budget is not fully closed.

**Resolution 4: the Mid-Pleistocene Transition.** Before 1.0 Myr: 41-kyr cycles, small amplitude, roughly linear response to obliquity. After 0.8 Myr: 100-kyr cycles, larger amplitude, strongly nonlinear. No orbital change occurred. Two internal explanations, probably both:

- **Regolith hypothesis.** Early Pleistocene ice sheets sat on a thick weathered regolith layer left by the preceding hundreds of millions of years. Regolith deforms easily, so ice sheets on it are thin, fast-flowing and responsive — they track obliquity. Repeated glaciations scraped the regolith off, exposing hard crystalline bedrock. Ice sheets on bedrock are thicker, slower, and have longer response times, so they can survive a precession maximum and accumulate across several.
- **Declining $\mathrm{CO_2}$.** A gradual Cenozoic $\mathrm{CO_2}$ decline ([6.4](06-04-deep-time-slow-thermostat.md)) lowered the baseline climate, so ice sheets grew larger before becoming vulnerable.

Both amount to the same structural statement: **the system's own response time lengthened past the precession period, so it began skipping beats.** No change in the driver is required, which is exactly what a nonlinear oscillator with a threshold does when its parameters drift.

**The paleo constraint on sensitivity.** From the budget above, and $\Delta T \approx -5.0$ K:

$$\lambda = \frac{7.1}{5.0} = 1.42\ \mathrm{W\,m^{-2}\,K^{-1}} \quad\Longrightarrow\quad \mathrm{ECS} = \frac{3.93}{1.42} = 2.8\ \mathrm{K}.$$

This is one of the three legs of the sensitivity assessment ([3.3](03-03-constraining-sensitivity-observations.md)). Its weaknesses are specific: the forcing decomposition depends on reconstructed ice-sheet extent; $\Delta T$ from proxies carries $\pm1$ K; and feedbacks are state-dependent, so a glacial $\lambda$ is not exactly the modern one — the ice–albedo feedback was stronger then ([2.3](02-03-surface-albedo-cryosphere-feedback.md)), which biases the inferred modern sensitivity *high* if not corrected.

## Picture

![Two time series over the last 500 thousand years. The upper blue curve, June insolation at 65 degrees north, oscillates rapidly with the 23 thousand year precession period, its amplitude modulated on a 100 thousand year eccentricity envelope. The lower coral curve, global ice volume, shows a sawtooth: slow growth over roughly 100 thousand years followed by abrupt collapse at each termination, marked by dashed vertical lines. The forcing has no 100 thousand year component of any size, yet the response does](assets/06-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — how much of the glacial cooling was $\mathrm{CO_2}$?).** Glacial $\mathrm{CO_2}$ was 185 ppm against 280 pre-industrial. (a) Compute the forcing. (b) With $\lambda = 1.3\ \mathrm{W\,m^{-2}\,K^{-1}}$, compute the implied cooling. (c) Express as a fraction of the observed 5 K, and state what supplies the rest.

(a) $$\Delta F = 5.35\ln\!\left(\frac{185}{280}\right) = 5.35\times(-0.4145) = -2.22\ \mathrm{W\,m^{-2}}.$$

(b) $$\Delta T = \frac{-2.22}{1.3} = -1.71\ \mathrm{K}.$$

(c) $$\frac{1.71}{5.0} = 34\ \text{percent}.$$

The rest: ice-sheet albedo about $-3.2\ \mathrm{W\,m^{-2}}$ (roughly 2.5 K), other greenhouse gases $-0.6$, and dust plus vegetation plus lowered sea level about $-1.1$.

*The point.* $\mathrm{CO_2}$ supplied a third of the glacial cooling and *none* of the trigger. That combination is the definition of an amplifier, and it disposes of the "$\mathrm{CO_2}$ lagged the warming so it cannot have caused it" argument in one line: **a feedback lags by construction, and supplying a third of the signal while lagging is exactly what a strong feedback looks like.** The same logic applies to water vapour today ([2.2](02-02-planck-water-vapour-lapse-rate.md)) — it supplies as much extra forcing as $\mathrm{CO_2}$ does and drives nothing.

**Example 2 (why you'd care — skipped beats).** Suppose an ice sheet grows at a constant rate and requires $V_c$ to become terminable, reaching $V_c$ after $\tau_g$ years. Precession supplies a termination opportunity every 23 kyr. (a) For $\tau_g = 85$ kyr, find the termination interval. (b) For $\tau_g = 95$ kyr. (c) For $\tau_g = 35$ kyr, characteristic of the early Pleistocene, and comment on the Mid-Pleistocene Transition.

(a) Termination occurs at the first insolation maximum after $\tau_g$. Maxima at 23, 46, 69, 92, 115... The first after 85 kyr is at **92 kyr**.

(b) The first after 95 kyr is at **115 kyr**.

(c) The first after 35 kyr is at **46 kyr** — two precession cycles, which is close to the obliquity period of 41 kyr and would be hard to distinguish from a linear obliquity response in a noisy record.

*The general principle.* A 12 percent change in the growth time (85 → 95 kyr) changed the cycle length by 25 percent (92 → 115 kyr), discontinuously. **A threshold system quantizes its response to the driver's periods, so small parameter drifts produce jumps between integer multiples.** That is precisely the Mid-Pleistocene Transition's signature: a gradual internal change (regolith removal, $\mathrm{CO_2}$ decline) lengthened $\tau_g$ past a critical value and the system jumped from two beats to four or five. The transition looks abrupt in the record because the *response* is quantized even though the *cause* was gradual — a general and underappreciated feature of driven threshold oscillators, and a caution about inferring an abrupt cause from an abrupt effect.

## Watch out

- **You might think** the 100-kyr cycles are driven by the 100-kyr eccentricity cycle. **Actually** eccentricity's direct radiative effect is $0.43\ \mathrm{W\,m^{-2}}$, about a tenth of what is needed. Its role is to modulate the *amplitude* of precession, so it paces which insolation maxima are strong enough to trigger a termination. Pacing and forcing are different jobs.
- **You might think** the $\mathrm{CO_2}$ lag at terminations undermines the greenhouse explanation. **Actually** it confirms the causal structure: orbital forcing triggers, the ocean responds by releasing $\mathrm{CO_2}$, and the $\mathrm{CO_2}$ then supplies about a third of the warming. A feedback that led its trigger would be a forcing, and would need its own explanation.
- **You might think** the Mid-Pleistocene Transition requires an external cause. **Actually** the orbital forcing is unchanged across it; the change is internal, and a threshold system with a slowly drifting response time will jump between integer multiples of the driver's period without any change in the driver at all.

## One-liner

> The orbit paces and the ice sheets decide: a system that grows for a hundred thousand years and collapses in ten makes its own hundred-thousand-year spectrum, and $\mathrm{CO_2}$ turns a June-in-the-Arctic signal into a global five-kelvin one.

## Problems

**P1 (🟢)** Eccentricity varies between 0 and 0.058. Annual-mean insolation scales as $(1-e^2)^{-1/2}$. (a) Compute the fractional change in annual-mean insolation. (b) Convert to a radiative forcing with $S = 1361$ and $\alpha = 0.3$. (c) With $\lambda = 1.3$, compute the implied temperature change and compare with the 5 K glacial–interglacial range.

**P2 (🟡)** At the Last Glacial Maximum the forcing components were: $\mathrm{CO_2}$ $-2.2$, other greenhouse gases $-0.6$, ice sheets $-3.2$, dust and vegetation $-1.1\ \mathrm{W\,m^{-2}}$, and the cooling was $-5.0$ K. (a) Compute $\lambda$ treating ice sheets as a forcing, and the implied ECS with $F_{2\times}=3.93$. (b) Repeat treating ice sheets as a feedback, giving Earth system sensitivity. (c) The proxy temperature has an uncertainty of $\pm1.0$ K; compute the ECS range from (a) and comment on which uncertainty dominates.

**P3 (🔴, optional)** Model terminations as occurring at the first precession maximum (every 23 kyr) after the ice sheet has grown for $\tau_g$. Suppose $\tau_g$ increases linearly from 35 kyr at 1.4 Myr ago to 100 kyr at 0.4 Myr ago. (a) Compute the termination interval at 1.4, 1.0, 0.8 and 0.4 Myr ago. (b) Sketch in words how the observed cycle length evolves. (c) Explain why the transition appears abrupt in the record even though $\tau_g$ changed smoothly, and state what this implies for interpreting abrupt transitions generally.

<details>
<summary>Solutions</summary>

**P1** (a) $$\frac{1}{\sqrt{1-0.058^2}} - 1 = \frac{1}{\sqrt{1-0.003364}}-1 = \frac{1}{0.998317}-1 = 0.00169,$$

0.169 percent.

(b) $$\Delta F = 0.00169\times\frac{1361\times0.7}{4} = 0.00169\times238.2 = 0.40\ \mathrm{W\,m^{-2}}.$$

(c) $$\Delta T = \frac{0.40}{1.3} = 0.31\ \mathrm{K},$$

against a glacial–interglacial range of 5 K — **a factor of 16 too small.** This is the 100-kyr problem in one calculation, and it is why no amount of refining the orbital computation will solve it: the direct forcing at that period simply is not there.

**P2** (a) Total forcing: $$-2.2-0.6-3.2-1.1 = -7.1\ \mathrm{W\,m^{-2}}.$$
$$\lambda = \frac{7.1}{5.0} = 1.42\ \mathrm{W\,m^{-2}\,K^{-1}}, \qquad \mathrm{ECS} = \frac{3.93}{1.42} = 2.77\ \mathrm{K}.$$

(b) Removing the ice-sheet term from the forcing (moving it into the response):
$$\lambda_{\mathrm{ESS}} = \frac{7.1-3.2}{5.0} = \frac{3.9}{5.0} = 0.78, \qquad \mathrm{ESS} = \frac{3.93}{0.78} = 5.04\ \mathrm{K}.$$

(c) With $\Delta T = 5.0 \pm 1.0$ K:

$\Delta T = 4.0$: $\lambda = 7.1/4.0 = 1.775$, ECS $= 2.21$ K.
$\Delta T = 6.0$: $\lambda = 7.1/6.0 = 1.183$, ECS $= 3.32$ K.

So ECS $\in [2.2, 3.3]$ K — a range of 1.1 K from the temperature uncertainty alone.

Which uncertainty dominates? The forcing components carry roughly $\pm1\ \mathrm{W\,m^{-2}}$ combined (the ice-sheet albedo term alone is uncertain by $\pm0.5$), which propagates to about $\pm0.4$ K in ECS. So the **proxy temperature** dominates, contributing about $\pm0.55$ K against $\pm0.4$ K from forcing. That ranking is why paleoclimate sensitivity work has concentrated on improving global-mean temperature reconstructions — assimilating proxies into models to produce a physically consistent field rather than averaging site records — and why LGM temperature estimates have moved substantially (from $-4$ K to $-6$ K and back toward $-5$ K) over the last two decades.

**P3** (a) The termination occurs at the first multiple of 23 kyr exceeding $\tau_g$.

| Time (Myr ago) | $\tau_g$ (kyr) | Multiples of 23 | Interval (kyr) |
|---|---|---|---|
| 1.4 | 35 | 46 | 46 |
| 1.0 | 61 | 69 | 69 |
| 0.8 | 74 | 92 | 92 |
| 0.4 | 100 | 115 | 115 |

(b) The observed cycle length steps through the discrete values 46, 69, 92, 115 kyr — that is, $2\times23$, $3\times23$, $4\times23$, $5\times23$. It cannot take intermediate values. In a real record with noise, the 46-kyr cycles would be read as "41-kyr obliquity-paced" (they are indistinguishable given dating uncertainty) and the 92- and 115-kyr cycles as "100-kyr", with the record spending relatively little time at 69 — so the *apparent* history is a fairly sharp switch from 41 to 100 kyr.

(c) The transition looks abrupt because **the response is quantized while the parameter is continuous.** $\tau_g$ crosses each multiple of 23 kyr at some moment, and at that moment the cycle length jumps discontinuously. The record therefore contains genuine step changes produced by a perfectly smooth underlying drift.

The general implication is important and applies well beyond this problem: **an abrupt change in an observed record does not imply an abrupt change in its cause.** Any threshold or phase-locked system converts a smooth parameter drift into a staircase. The converse trap — inferring a smooth cause from a smooth effect — is safer but not guaranteed either. This is the same structure as [5.6](05-06-tipping-elements-thresholds.md)'s folds, and the same reason that identifying the *mechanism* matters more than characterizing the *transition*.

*Check.* Note the model's own limitation: it predicts intervals that are exact multiples of 23 kyr, whereas the observed intervals are roughly 80 to 120 kyr and not obviously quantized. Real terminations depend on precession *and* obliquity (41 kyr) and on the eccentricity envelope, so the available "opportunities" are not evenly spaced. The quantization is smeared, but the mechanism — a threshold system skipping beats of a quasi-periodic driver — survives.

</details>

## Flashback

**From Lesson 5.4 (The cryosphere):** The Last Glacial Maximum ice sheets held about 120 m of sea-level equivalent beyond today's ice. Take 360 Gt of ice per mm of sea level. (a) Compute the excess ice mass in Gt. (b) Deglaciation took about 10 000 years; compute the mean melt rate in Gt per year and the mean sea-level rate in mm per year. (c) Compare with today's total rate of 3.7 mm per year and with Meltwater Pulse 1A, in which about 16 m arrived in 350 years.

<details>
<summary>Solution</summary>

(a) $$120\ \mathrm{m} = 120\,000\ \mathrm{mm} \times 360\ \mathrm{Gt\,mm^{-1}} = 4.32\times10^{7}\ \mathrm{Gt},$$

43 million gigatonnes — about 160 times the mass of the present Greenland ice sheet.

(b) $$\frac{4.32\times10^{7}}{10^{4}} = 4320\ \mathrm{Gt\,yr^{-1}}, \qquad \frac{120\,000}{10\,000} = 12\ \mathrm{mm\,yr^{-1}}.$$

(c) Today's total rate is 3.7 mm per year from all sources, so the mean deglacial rate was **3.2 times today's, sustained for ten thousand years**. Greenland and Antarctica together currently lose about 420 Gt per year; the deglacial mean was 4320 Gt per year, ten times that.

Meltwater Pulse 1A: $$\frac{16\,000\ \mathrm{mm}}{350\ \mathrm{yr}} = 46\ \mathrm{mm\,yr^{-1}},$$

**twelve times today's rate** and four times the deglacial mean — a genuine episode of rapid ice-sheet collapse, most likely from the marine-based sectors of the North American and Antarctic ice sheets by the mechanism of [5.4](05-04-the-cryosphere.md).

*Check.* Two things are worth carrying from this. First, the deglaciation demonstrates that the ice-sheet system *can* deliver 40 to 50 mm per year when the marine sectors go — which bounds from below what is physically possible, and it is far above any current projection. Second, the deglacial rates required roughly ten times more ice than exists in the marine-vulnerable sectors today, so a repeat of Meltwater Pulse 1A is not available: the reservoir is smaller. The relevant question for the future is not whether 46 mm per year is possible (it demonstrably is) but whether the West Antarctic and Greenland reservoirs can be mobilized fast enough to approach it — which is exactly the marine ice-cliff question of [5.4](05-04-the-cryosphere.md).

</details>

## Connections

- **Backward:** the threshold and hysteresis machinery is [6.1](06-01-energy-balance-models-bistability.md)'s and [5.6](05-06-tipping-elements-thresholds.md)'s; the ice-sheet dynamics that make terminations fast are [5.4](05-04-the-cryosphere.md)'s; the orbital geometry and the proxy record are [geology 3.4](../../geology/lessons/03-04-glaciers-ice-ages.md)'s and [atmospheric-science 3.5](../../atmospheric-science/lessons/03-05-solar-geometry-seasons-insolation.md)'s.
- **Forward:** [6.4](06-04-deep-time-slow-thermostat.md) supplies the Cenozoic $\mathrm{CO_2}$ decline that set up the Pleistocene in the first place, and the weathering thermostat that regulates it.
- **Sideways (dynamical systems):** a threshold system driven by a quasi-periodic forcing, responding at integer multiples of the driver's period and jumping between them as a parameter drifts, is **mode locking** — the same phenomenon as the devil's staircase in the circle map. See [`dynamical-systems` 5.4](../../dynamical-systems/lessons/05-04-intermittency-routes.md). The ocean's role in releasing glacial $\mathrm{CO_2}$ belongs to [`oceanography`](../../oceanography/syllabus.md).
