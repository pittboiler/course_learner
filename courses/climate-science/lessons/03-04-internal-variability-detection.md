# Climate Physics · Lesson 3.4: Internal variability and the detection problem

> ⏱ ~15 min · Module 3: The transient problem · Builds on: [3.2](03-02-tcr-ecs-pattern-effect.md), [1.1](01-01-climate-system-timescales.md) · Unlocks: [3.5](03-05-detection-attribution.md), [5.2](05-02-extremes-event-attribution.md)

## Why this matters

Every argument about whether warming has "paused", "accelerated" or "stopped" is a statistics problem dressed as a physics problem, and it has a clean answer: **a fifteen-year global temperature trend carries almost no information, and a thirty-year one is decisive.** The factor is not two; it is more than five, because the standard error of a trend falls as $n^{-3/2}$. This lesson quantifies that, explains where the noise comes from physically, and works through the "hiatus" — the most instructive episode in the field's recent history, precisely because it was real, it was explained, and the explanation turned out to matter.

## The idea

**The climate system wanders without being pushed.** Coupled to an ocean, the atmosphere exchanges heat back and forth on timescales from years to decades. El Niño moves heat from the western Pacific's subsurface into the atmosphere and global mean temperature jumps two tenths of a kelvin; La Niña buries it again. None of this changes the planet's energy budget — it moves energy between reservoirs — but it is exactly what a thermometer at the surface measures.

**So the surface record is signal plus noise, with comparable amplitudes on short timescales.** The forced trend is about 0.2 K per decade. Interannual scatter about that trend is about 0.1 K, and it is *autocorrelated*, which makes it look like structure. Over fifteen years the trend uncertainty is comparable to the trend itself.

**The cure is length, and it works fast.** The standard error of a least-squares slope falls as $n^{-3/2}$: doubling the record length reduces trend uncertainty by a factor of 2.8. That is why 30 years is a conventional climate averaging period and 15 is not — the convention encodes a statistical fact.

**Cherry-picking a start year is the whole trick.** Start in 1998, a record El Niño, and any subsequent trend is depressed. Start in 1992, just after Pinatubo, and it is inflated. Both windows are fifteen years, both are inside the same record, and they differ by more than a factor of three.

**But the hiatus was not *only* statistics.** Real physics contributed: a strengthening of Pacific trade winds buried more heat in the ocean interior, a run of small volcanic eruptions and a weak solar cycle each shaved a few hundredths, and the observational record was undersampling the fast-warming Arctic. All of these were identified, and all of them are consistent with the forced signal being intact underneath. **Explaining a hiatus is not the same as conceding one.**

## The formal version

**The modes of variability.** Each has a characteristic timescale and a global-mean temperature signature:

| Mode | Timescale | Global-mean $T$ signature | Mechanism (owner) |
|---|---|---|---|
| ENSO | 2–7 yr | $\pm0.15$ to $0.25$ K | coupled ocean–atmosphere; [`oceanography`](../../oceanography/syllabus.md) |
| Pacific Decadal / Interdecadal Pacific Oscillation | 20–30 yr | $\pm0.1$ K | Pacific-wide, partly ENSO-integrated |
| Atlantic Multidecadal Variability | 50–70 yr | $\pm0.05$ to $0.1$ K | AMOC-related heat transport |
| Volcanic eruptions | episodic, 2–3 yr | $-0.1$ to $-0.4$ K | external but unpredictable |
| Solar cycle | 11 yr | $\pm0.05$ K | external, periodic |

Only ENSO produces a large global-mean signal, and it does so because it is the one mode that changes how much of the tropical Pacific's stored heat is exposed to the atmosphere.

**The trend uncertainty.** For $n$ annual values with independent noise of standard deviation $\sigma$, the least-squares slope has variance

$$\mathrm{Var}(\hat{b}) = \frac{\sigma^2}{\sum_i (t_i-\bar t)^2} = \frac{12\,\sigma^2}{n(n^2-1)} \quad\Longrightarrow\quad \mathrm{SE}(\hat b) = \sigma\sqrt{\frac{12}{n(n^2-1)}}.$$

*In words: the standard error of a trend falls roughly as the length to the power three-halves — one power from averaging more points, half a power from the longer lever arm.*

The noise is not independent: annual global-mean anomalies have lag-1 autocorrelation of roughly $r = 0.5$. The effective sample size is $n_{\text{eff}} \approx n(1-r)/(1+r)$, and the standard error inflates by about $\sqrt{(1+r)/(1-r)} = \sqrt{3} = 1.73$.

With $\sigma = 0.10$ K:

| $n$ (yr) | SE (K/decade) | $t$ for a 0.20 K/decade trend |
|---|---|---|
| 10 | 0.19 | 1.1 |
| 15 | 0.10 | 1.9 |
| 20 | 0.067 | 3.0 |
| 30 | 0.037 | 5.5 |
| 40 | 0.024 | 8.4 |

*In words: at fifteen years you cannot distinguish the real trend from zero at 95 percent confidence; at thirty years you can distinguish it from zero at better than five sigma.* This is not a claim about climate — it is arithmetic that follows from the $n^{-3/2}$ law, and it is why "no statistically significant warming since [recent year]" was, for a decade, a true statement that carried no information.

**The hiatus, 1998–2013.** Trends over the record used here:

| Window | Trend (K/decade) |
|---|---|
| 1992–2006 | 0.27 |
| 1998–2012 | 0.08 |
| 1970–2024 | 0.19 |

The two fifteen-year windows overlap by nine years and differ by a factor of 3.4.

Four contributions to the slow window, each verified independently:

1. **Endpoint selection.** 1998 was the largest El Niño on record to that point, worth roughly $+0.2$ K at the start of the window.
2. **Ocean heat redistribution.** Pacific trade winds strengthened markedly, deepening the warm pool and subducting heat below 700 m. Ocean heat content *kept rising throughout* — the planetary imbalance never paused, only its surface expression did. This is the decisive observation: **if a hiatus were a real slowdown in forcing or a real drop in sensitivity, ocean heat content would have flattened, and it did not.**
3. **Small forcings.** A cluster of moderate volcanic eruptions plus an unusually deep solar minimum contributed perhaps $-0.05$ K.
4. **Coverage bias.** HadCRUT4 left the Arctic largely unsampled, and the Arctic warmed fastest ([2.3](02-03-surface-albedo-cryosphere-feedback.md)). Infilled datasets raised the hiatus-period trend substantially.

And then 2015, 2016 and 2023 happened, and the fifteen-year window that included them showed an *accelerated* trend. The hiatus literature is a lesson in the asymmetry of scientific attention: an unusually slow window drew hundreds of papers; the equally-anomalous fast windows before and after drew almost none.

**Time of emergence.** Generalize: a forced signal is *detectable* when its cumulative magnitude exceeds the noise. Define the time of emergence as when the signal-to-noise ratio exceeds 2. For global-mean temperature that happened around 1980. For regional temperature it is later (noise is larger locally). For **precipitation** it is much later — often after 2050, and in many regions not this century — because precipitation's interannual variability is enormous relative to its forced trend. *In words: we are far more confident about how warm it will be than about how wet.* This is a physical statement about signal-to-noise ratios, not a hedge, and it is the honest framing for [5.1](05-01-hydrological-cycle-response.md).

## Picture

![Global mean surface temperature anomaly relative to 1850 to 1900, from 1970 to 2024, showing a rising but noisy record. Two overlapping fifteen-year windows are highlighted: 1992 to 2006 in blue, whose fitted trend is 0.27 K per decade, and 1998 to 2012 in coral, starting at the 1998 El Niño spike, whose fitted trend is only 0.08 K per decade. A dashed line shows the full 1970 to 2024 trend of 0.19 K per decade. The two short windows overlap by nine years yet differ by more than a factor of three](assets/03-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — how long do you need?).** Interannual noise in global-mean temperature is $\sigma = 0.10$ K with lag-1 autocorrelation 0.5. How many years are needed to detect a forced trend of 0.15 K per decade at the 95 percent level (two-sided, $t = 2$)?

Requirement: $\mathrm{SE} \le 0.075$ K/decade $= 0.0075$ K/yr.

$$\mathrm{SE} = 1.73\,\sigma\sqrt{\frac{12}{n(n^2-1)}} \le 0.0075.$$

$$\sqrt{\frac{12}{n(n^2-1)}} \le \frac{0.0075}{1.73\times0.10} = 0.0434 \quad\Longrightarrow\quad n(n^2-1) \ge \frac{12}{0.0434^2} = 6370.$$

Try $n = 20$: $20\times399 = 7980$. ✓ Try $n = 19$: $19\times360 = 6840$. ✓ Try $n = 18$: $18\times323 = 5814$. ✗

So **$n = 19$ years**.

*The point.* Detecting a 0.15 K/decade trend takes about 19 years; a 0.20 K/decade trend takes about 16; a 0.10 K/decade trend takes about 24. The requirement scales as roughly $b^{-2/3}$ — weaker signals need disproportionately longer records, but not catastrophically so. This is the calculation that should be run before anyone comments on a short trend, and it takes two minutes.

**Example 2 (why you'd care — did the hiatus falsify anything?).** During 1998–2012 the observed surface trend was 0.08 K/decade while models projected about 0.21 K/decade. Was this a model failure?

Three questions to ask, in order.

*Is the discrepancy significant?* The trend standard error over 15 years is 0.10 K/decade. The gap is $0.21-0.08 = 0.13$, i.e. $1.3\sigma$. **Not significant.** A single realization of a model would show excursions this large routinely; the comparison should be against the *ensemble spread of individual runs*, not against the ensemble mean, and the observations sat comfortably inside that spread.

*Was the forcing right?* No — the models used forcing scenarios prepared before the volcanic eruptions and solar minimum of that period. Re-running with observed forcings closes perhaps a third of the gap.

*Was the observation right?* Partly not — coverage bias in the temperature record accounted for another substantial share.

*The general principle.* **Compare like with like.** An ensemble mean has had internal variability averaged out of it; a single observed realization has not. Comparing them and concluding that models are wrong is a category error, and it recurs constantly — in the hiatus, in regional trends, in extremes. The valid comparison is observation against the *distribution* of model realizations. When that was done properly, the hiatus was inside the distribution the whole time — while simultaneously being a real, physically interesting redistribution of heat that taught the field something about Pacific decadal variability.

## Watch out

- **You might think** a statistically insignificant trend means no trend. **Actually** it means the record is too short to tell, which is a statement about the record, not about the climate. Over 15 years, a true 0.2 K/decade trend fails to reach significance about half the time. "Not significant" and "zero" are different claims.
- **You might think** internal variability averages out and so can be ignored for long-term projections. **Actually** it does average out of the *forced response*, but it never averages out of any single realization — including the one we live in. This is why projections are given as distributions and why a specific decade's warming will differ from the trend line even if the model is perfect.
- **You might think** a hiatus in surface temperature implies a hiatus in global warming. **Actually** the surface holds about 1 percent of the system's heat capacity ([3.1](03-01-ocean-heat-uptake-thermal-inertia.md)). Ocean heat content rose monotonically through the hiatus, which is the definitive statement that the planetary energy imbalance never wavered. **Measure the reservoir that holds the energy, not the one that fluctuates.**

## One-liner

> The standard error of a trend falls as the length to the three-halves, so fifteen years of global temperature proves essentially nothing and thirty years proves it beyond doubt — and any claim built on a hand-picked start year is testing the picker, not the climate.

## Problems

**P1 (🟢)** Annual global-mean temperature has $\sigma = 0.11$ K about the trend, with lag-1 autocorrelation 0.4. (a) Compute the effective sample size inflation factor for the trend standard error. (b) Compute the trend standard error, in K per decade, for a 25-year record. (c) Is a trend of 0.18 K/decade significant at $t = 2$?

**P2 (🟡)** Two studies analyse the same 40-year record. Study A reports a trend of $0.19 \pm 0.02$ K/decade using ordinary least squares with white-noise errors. Study B reports $0.19 \pm 0.035$ using an AR(1) error model. (a) What lag-1 autocorrelation is Study B implicitly assuming? (b) Which is right, and what error does the other make? (c) If the true trend were 0.19 and Study A's error bar were used to test the null hypothesis of no trend, would the conclusion change? Comment on when the distinction *does* change a conclusion.

**P3 (🔴, optional)** Time of emergence. A region's forced warming is $b = 0.25$ K/decade with interannual noise $\sigma_T = 0.6$ K; its forced precipitation trend is $2$ percent per decade with interannual noise $\sigma_P = 12$ percent. Define emergence as the year the forced change since 1990 exceeds $2\sigma$. (a) Compute the time of emergence for temperature and for precipitation. (b) Explain the ratio in terms of the two signal-to-noise ratios. (c) A policymaker asks why projections of regional rainfall are so much less confident than projections of regional temperature. Answer in three sentences using your numbers, and name one *physical* reason (beyond the statistics) that reinforces the conclusion.

<details>
<summary>Solutions</summary>

**P1** (a) $$\sqrt{\frac{1+r}{1-r}} = \sqrt{\frac{1.4}{0.6}} = \sqrt{2.333} = 1.53.$$

(b) $$\mathrm{SE} = 1.53 \times 0.11 \times \sqrt{\frac{12}{25\times624}} = 1.53\times0.11\times\sqrt{\frac{12}{15600}}.$$

$\sqrt{7.692\times10^{-4}} = 0.02773$ per year, so $\mathrm{SE} = 1.53\times0.11\times0.02773 = 4.67\times10^{-3}$ K/yr $= 0.047$ K/decade.

(c) $$t = \frac{0.18}{0.047} = 3.85 > 2.$$ **Yes, comfortably significant.**

**P2** (a) The inflation factor is $0.035/0.02 = 1.75$, so

$$\frac{1+r}{1-r} = 1.75^2 = 3.06 \quad\Longrightarrow\quad r = \frac{3.06-1}{3.06+1} = \frac{2.06}{4.06} = 0.51.$$

(b) **Study B is right.** Global-mean annual temperature anomalies are strongly autocorrelated — ENSO alone imposes a multi-year memory — so treating successive years as independent overstates the information content of the record. Study A's error bar is too small by 75 percent, which means its confidence intervals under-cover and its $p$-values are anti-conservative.

(c) With a true trend of 0.19 and Study A's SE of 0.02, $t = 9.5$; with Study B's 0.035, $t = 5.4$. Both overwhelmingly reject no trend, so **the conclusion is unchanged**.

The distinction changes conclusions precisely when $t$ lands near the threshold, which happens for short records, weak signals or noisy variables. Concretely: a 15-year global temperature trend, any regional trend, and almost any precipitation or extremes analysis. It is also why the autocorrelation correction is not a pedantic detail but the difference between a defensible and an indefensible claim in exactly the cases people most want to make claims about.

**P3** (a) Emergence when $b\,t = 2\sigma$.

Temperature: $$t = \frac{2\times0.6}{0.25} = 4.8\ \text{decades} = 48\ \mathrm{yr} \quad\Longrightarrow\quad \text{emerges around 2038}.$$

Precipitation: $$t = \frac{2\times12}{2} = 12\ \text{decades} = 120\ \mathrm{yr} \quad\Longrightarrow\quad \text{emerges around 2110}.$$

(b) The signal-to-noise ratios per decade are $0.25/0.6 = 0.42$ for temperature and $2/12 = 0.167$ for precipitation — a factor of 2.5. Emergence time is inversely proportional to that ratio, hence $120/48 = 2.5$. Everything is in the ratio; the units cancel.

(c) *For the policymaker:* regional temperature has a forced trend about 40 percent as large as its year-to-year swings each decade, so it accumulates past the noise within a human career; regional rainfall has a forced trend only about 17 percent as large as its swings, so it takes more than a century to do the same. The consequence is that a projected regional warming is a statement you can plan around by mid-century, while a projected regional rainfall change of a few percent will remain buried in natural variability for most of that period — not because the physics is unknown, but because the noise is large.

*Physical reason beyond the statistics:* the temperature response is set by the global energy budget, which is a robust constraint that every model obeys; the precipitation response at a *given place* is set by where the circulation puts the moisture, and circulation changes are the least agreed-upon part of any projection ([5.5](05-05-circulation-regional-response.md)). So regional rainfall is doubly disadvantaged — larger noise *and* larger model disagreement about the signal. The global-mean hydrological response, by contrast, is tightly constrained by energetics ([5.1](05-01-hydrological-cycle-response.md)), which is why "wet gets wetter" is confidently stated at large scales and cautiously at small ones.

*Check.* Note the structure: emergence time scales as $\sigma/b$, so halving the noise and doubling the signal each help equally. It also means emergence is *later* for a smaller region (noise grows as you shrink the averaging area) — which is exactly backwards from what decision-makers need, and is the fundamental tension in regional climate services.

</details>

## Flashback

**From Lesson 2.4 (Clouds — the wild card):** Aviation contrail cirrus covers about 0.2 percent of Earth's surface, with emissivity 0.2 (it is thin), and raises the local albedo by 0.02. Cloud-top temperature is 220 K, the surface is at 288 K, and mean insolation is 340 W m⁻². (a) Compute the shortwave and longwave contributions to its cloud radiative effect. (b) Compute the net, and compare with the AR6 assessed contrail-cirrus ERF of $+0.06\ \mathrm{W\,m^{-2}}$. (c) Name one reason the real number is smaller than this estimate.

<details>
<summary>Solution</summary>

(a) Shortwave: $$\mathrm{CRE_{SW}} = -0.002 \times 0.02 \times 340 = -0.0136\ \mathrm{W\,m^{-2}}.$$

Longwave: $\sigma(288)^4 = 390.1$, $\sigma(220)^4 = 132.8$, so the brightness contrast is $257.3\ \mathrm{W\,m^{-2}}$, reduced by the emissivity:

$$\mathrm{CRE_{LW}} = 0.002 \times 0.2 \times 257.3 = +0.103\ \mathrm{W\,m^{-2}}.$$

(b) Net: $$-0.014 + 0.103 = +0.089\ \mathrm{W\,m^{-2}},$$ a **warming**, and within about 50 percent of the assessed $+0.06$. The longwave term dominates by a factor of 7.5 — contrails are the textbook high-thin-cloud case from [2.4](02-04-clouds-the-wild-card.md), where the greenhouse effect wins outright.

(c) Several possible answers, any one sufficient:

- **Day–night asymmetry.** The longwave effect operates 24 hours a day, but the shortwave offset only during daylight — which *increases* the net warming, so this is not the answer. The correct version is the reverse asymmetry: contrails formed at night are pure warming, while daytime contrails partly self-cancel, and the flight schedule is daylight-weighted, so the daytime population contributes less than the naive average.
- **Overlap with natural cirrus.** A contrail forming in a region already covered by natural cirrus adds far less than the full brightness contrast, because the radiation escaping there was already coming from a cold level.
- **Spreading and thinning.** Contrail cirrus spreads and its emissivity drops well below 0.2 as it ages, so an area-weighted mean emissivity is lower than the value used here.

*Check.* This is a good illustration of why aviation's climate effect is contested: the contrail forcing is comparable to aviation's $\mathrm{CO_2}$ forcing (about $+0.03\ \mathrm{W\,m^{-2}}$) but has a lifetime of *hours* rather than centuries. Under a stock-versus-flow framing ([1.3](01-03-bands-saturation-logarithmic-forcing.md), Example 2), contrails are a flow that stops the day flights stop, while aviation $\mathrm{CO_2}$ is a stock that persists — which is why route-and-altitude changes to avoid ice-supersaturated regions are among the cheapest available climate interventions, and also why quoting the two under a single "aviation forcing" number is misleading.

</details>

## Connections

- **Backward:** the ocean's dominance of the heat budget ([3.1](03-01-ocean-heat-uptake-thermal-inertia.md)) is what makes ocean heat content the arbiter of the hiatus; the eastern-Pacific pattern question of [3.2](03-02-tcr-ecs-pattern-effect.md) is precisely a forced-versus-internal question of the kind this lesson frames.
- **Forward:** [3.5](03-05-detection-attribution.md) turns "can we see a trend" into "can we assign it a cause"; [5.2](05-02-extremes-event-attribution.md) applies the same signal-to-noise reasoning to the tails of a distribution rather than the mean.
- **Sideways (time-series statistics):** the $n^{-3/2}$ law and the AR(1) variance inflation are standard results for regression with serially correlated errors — the same corrections that appear in econometrics as Newey–West standard errors, and the same trap ("my $t$-statistic is 9") that autocorrelated data always sets. See [`prob-stat-refresher` 4.3](../../prob-stat-refresher/lessons/04-03-hypothesis-testing.md). The ENSO dynamics generating the noise belong to [`oceanography`](../../oceanography/syllabus.md).
