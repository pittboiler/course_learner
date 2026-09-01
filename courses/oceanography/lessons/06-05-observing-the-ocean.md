# Physical Oceanography · Lesson 6.5: Observing the ocean

> ⏱ ~15 min · Module 6: The ocean in the climate system · Builds on: [2.1](02-01-geostrophy-dynamic-method.md), [6.2](06-02-ocean-heat-uptake-circulation.md), [6.4](06-04-amoc-stability-stommel-model.md) · Unlocks: completes the course

## Why this matters

Every quantitative claim in this course rests on a measurement, and the measurements are far harder than the physics. The ocean is opaque to electromagnetic radiation below a few tens of metres, so nothing can be sensed remotely at depth. It is 1.3 billion cubic kilometres. The signals that matter are small — a global-mean warming of 0.15 K, a residual overturning of a few sverdrups, an AMOC trend of a few percent per decade — and they must be extracted against natural variability of comparable size.

Twenty-five years ago this was essentially hopeless. The change since is one of the more remarkable episodes in observational science: satellite altimetry from 1992 and the Argo float array from about 2005 together took the ocean from a sparsely-sampled, seasonally-biased collection of ship tracks to a globally-mapped, continuously-monitored system. This lesson is what each instrument sees, and — more usefully — what none of them does.

## The idea

**Nothing sees the interior remotely.** Radar and visible light penetrate metres. Sound penetrates thousands of kilometres, which is why acoustic tomography exists, but it gives path-integrated averages rather than fields. **Everything we know about the ocean below 100 m comes from something that physically went there**, and that constraint shapes every observing system.

**Altimetry sees everything, at the surface.** A radar altimeter measures sea surface height to two or three centimetres. From [2.1](02-01-geostrophy-dynamic-method.md), that gives the *absolute* surface geostrophic velocity, which resolves the reference-level problem that constrained oceanography for a century. It also gives eddies, sea-level rise, and the equatorial Kelvin waves of [5.4](05-04-equatorial-waves-undercurrent.md). What it cannot give is any information about how the flow is distributed with depth.

**Argo sees the interior, everywhere, above 2000 m.** About 3900 autonomous floats drift at 1000 m, rise to the surface every ten days measuring temperature and salinity from 2000 m, transmit by satellite, and sink again. Nominal spacing 300 km, about 140,000 profiles a year — against roughly 15,000 a year from ships before it, heavily biased to the northern hemisphere in summer. **This is the single most consequential change in ocean observation and it is barely twenty years old.**

**Repeat hydrography sees everything, once a decade.** A ship occupying a full-depth section measures temperature and salinity to an accuracy Argo cannot match, plus oxygen, nutrients, carbon, alkalinity, CFCs and tracers — none of which any autonomous platform measures to research standard at full depth. **It is the only source of deep-ocean chemistry**, and the only way the carbon inventory of [6.3](06-03-ocean-carbon-pumps.md) is known at all.

**Moored arrays see one line, continuously.** RAPID at 26.5°N has measured the AMOC every twelve hours since 2004 by combining moorings at both boundaries with a cable across the Florida Strait and satellite winds for the Ekman term. It works because of the argument in [3.3](03-03-gulf-stream-kuroshio.md): a basin-wide integral cancels the recirculation and returns the net.

**And the gaps are where the arguments are.** Below 2000 m there is almost no time resolution. Under sea ice there is almost nothing. Vertical velocity has never been measured directly at climate scales anywhere. **Each of the open questions in this module lives in a gap in this figure**, which is not a coincidence.

## The formal version

**The observing system.**

| System | Since | Coverage | Depth | Repeat | Measures |
|---|---|---|---|---|---|
| Satellite altimetry | 1992 | global, ice-free | surface | 10 d | sea surface height to 2–3 cm |
| Argo | 2000, global 2007 | global, ice-free, open ocean | 0–2000 m | 10 d | $T$, $S$ |
| Deep Argo | 2015, partial | sparse | 0–6000 m | 10–30 d | $T$, $S$ |
| BGC-Argo | 2016, partial | sparse | 0–2000 m | 10 d | $\mathrm{O_2}$, $\mathrm{NO_3}$, pH, chlorophyll |
| Repeat hydrography (GO-SHIP) | WOCE 1990 | lines | full | 10 yr | everything, to research accuracy |
| RAPID (26.5°N) | 2004 | one section | full | 12 h | AMOC transport |
| OSNAP (subpolar) | 2014 | one section | full | continuous | AMOC transport |
| TAO/TRITON | 1985 | equatorial Pacific | 0–500 m | hourly | $T$, currents, winds |
| Gliders | 2005 | regional | 0–1000 m | days | $T$, $S$, and more |
| Instrumented seals | 2004 | Southern Ocean, under ice | 0–2000 m | per dive | $T$, $S$ |
| GRACE / GOCE | 2002 | global | — | monthly | gravity, hence the geoid and ocean mass |

**Argo, in numbers.** With $N = 3900$ floats over an ocean area $A = 3.6\times10^{14}\ \mathrm{m^2}$:

$$\text{spacing} = \sqrt{A/N} = \sqrt{9.23\times10^{10}} = 3.04\times10^{5}\ \mathrm{m} = 304\ \mathrm{km},$$
$$\text{profiles per year} = 3900\times\frac{365}{10} = 1.42\times10^{5}.$$

Accuracies: temperature $\pm0.002$ K, salinity $\pm0.01$ after delayed-mode calibration, pressure $\pm2.4$ dbar.

**What Argo misses**, and each item is consequential:

| Missing | Why it matters |
|---|---|
| Below 2000 m | about 10 percent of the heat uptake ([6.2](06-02-ocean-heat-uptake-circulation.md)), and all of the abyssal circulation |
| Under sea ice | the Arctic and the Antarctic marginal seas, where deep water forms ([4.2](04-02-deep-water-formation-convection.md)) |
| Marginal seas and shelves | overflows, and the Mediterranean and Red Sea sources |
| Boundary currents | floats are advected out of them within days |
| Velocity | only the 1000 m drift between surfacings; no direct current measurement |
| Chemistry | except on the small BGC-Argo subset |

**Altimetry and the geoid.** The altimeter measures height above a reference ellipsoid, $h$. What matters dynamically is height above the **geoid** — the equipotential the ocean would take at rest — so the dynamic topography is

$$\eta = h - N_{\text{geoid}}.$$

The geoid departs from the ellipsoid by up to 100 m, against a dynamic signal of about 1 m ([2.1](02-01-geostrophy-dynamic-method.md)). Two consequences:

- The **time-varying** part needs no geoid at all, since the geoid is (nearly) constant and differences out. This is why altimetric work on eddies, ENSO and sea-level *change* matured immediately.
- The **mean** dynamic topography needed the dedicated gravity missions GRACE (2002) and GOCE (2009). Only since then has the mean surface circulation been measurable directly.

**The RAPID decomposition.** At 26.5°N,

$$T_{\text{AMOC}} = T_{\text{Florida Strait}} + T_{\text{Ekman}} + T_{\text{mid-ocean geostrophic}},$$

with the Florida Current from a submarine telephone cable (a beautiful piece of opportunism — a moving conductor in the Earth's field generates a measurable voltage), the Ekman term from scatterometer winds, and the mid-ocean term from density moorings at both boundaries via the dynamic method of [2.1](02-01-geostrophy-dynamic-method.md). Typical values: $31.5 + 3.5 - 17.5 = 17.5\ \mathrm{Sv}$.

**What nothing measures.**

- **Vertical velocity.** It is $10^{-5}$ of the horizontal speed ([2.4](02-04-ekman-pumping-wind-stress-curl.md)) and has never been measured directly at large scales. Every value quoted in this course is inferred from a budget.
- **The deep ocean at high time resolution.** Deep Argo is filling this in and is not yet global.
- **Under Antarctic ice shelves**, where the fate of the marine ice sheets is decided; a handful of boreholes and autonomous submarines exist.
- **The full-depth velocity field.** Anywhere.

**The pre-Argo dark age.** Before about 2000, the upper-ocean temperature record came from ship-based expendable bathythermographs, which had a systematic depth bias that varied by manufacturer and epoch. Correcting it in the late 2000s changed the apparent decadal variability of ocean heat content substantially, and removed a spurious 1970s–80s cooling. **The single largest revision to the ocean heat content record in the last twenty years came from re-examining a fall-rate equation**, not from new data — a useful reminder about instrument-dependent systematic errors in long records.

## Picture

![A chart of observing systems, with repeat interval on the horizontal axis from one hour to ten years and depth on the vertical axis from the surface to 6000 m. A coral box covers moored arrays: full depth and continuous, but only a few lines. A thin blue bar shows satellite altimetry: global but the surface only, every ten days. A small blue box shows Argo: global, ten-day, to 2000 m. A dashed grey box shows Deep Argo reaching 6000 m but sparse. A tall narrow blue box at the right shows repeat hydrography: full depth and full chemistry but only once a decade along lines. A large empty region in the middle is labelled as the gap — the deep ocean, globally, at monthly resolution, which nothing covers](assets/06-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — how long before Argo can see the trend?).** The global-mean 0–2000 m temperature is rising at about $0.003\ \mathrm{K\,yr^{-1}}$ ([6.2](06-02-ocean-heat-uptake-circulation.md)). Argo's floats each measure temperature to $0.002$ K, which is far better than the signal. So why did it take a decade to establish the trend?

(a) *The limit is sampling, not accuracy.* Ocean temperature varies from place to place by order 1 K at a given depth on the mesoscale. A single profile is not an estimate of the global mean; it is one draw from a distribution with a standard deviation of order 1 K.

(b) *How many independent samples?* Take a decorrelation scale of 500 km — the scale over which the mesoscale field is coherent:

$$N_{\text{indep}} = \frac{3.6\times10^{14}}{(5\times10^{5})^2} = 1440.$$

With 3900 floats, every independent region is sampled two to three times, so $N_{\text{indep}} = 1440$ is the binding number, not the float count.

(c) *Standard error of one global snapshot.*
$$\mathrm{SE} = \frac{1\ \mathrm{K}}{\sqrt{1440}} = 0.026\ \mathrm{K}.$$

(d) *And of an annual mean.* The 36 cycles in a year are not independent — the mesoscale field decorrelates in a couple of months — so allow about 6 effective independent realizations:

$$\mathrm{SE}_{\text{annual}} = \frac{0.026}{\sqrt6} = 0.011\ \mathrm{K}.$$

(e) *Years to a two-sigma detection.*
$$t = \frac{2\times0.011}{0.003} = 7\ \mathrm{years}.$$

**About seven years**, which matches the history: Argo reached full deployment around 2006 and its heat-content trend became robust in the early 2010s.

*The point.* The instrument's accuracy — 0.002 K — never entered the calculation. **The limiting factor is the spatial variance of the field divided by the number of independent samples**, and improving the sensor would have bought nothing. This is the general situation for climate-scale ocean measurement, and it is why observing-system design is an exercise in coverage rather than precision.

**Example 2 (why you'd care — three ways to measure the AMOC, and why we built the expensive one).** Suppose you want the AMOC's strength to $\pm1$ Sv on annual timescales. Evaluate three approaches.

*Approach 1: hydrographic sections.* Occupy a transatlantic section and apply the dynamic method ([2.1](02-01-geostrophy-dynamic-method.md)). This is what was done five times between 1957 and 2004, and it produced the widely-reported claim of a 30 percent AMOC decline.

The problem is aliasing. RAPID's continuous record shows the AMOC varying by $\pm5$ Sv on *sub-annual* timescales — larger than any plausible trend. Five snapshots drawn from a distribution with a 5 Sv standard deviation give a "trend" whose standard error is roughly $5/\sqrt5 = 2.2$ Sv per snapshot; fitting a line through five such points cannot resolve a 3 Sv change over 50 years. **The 30 percent decline was consistent with the data and also consistent with no change at all**, and this was only demonstrable once the continuous record existed.

*Approach 2: sea surface temperature fingerprints.* Use the North Atlantic warming hole ([6.2](06-02-ocean-heat-uptake-circulation.md)) as a proxy. Cheap, and available back to 1870.

The problem is attribution. The index responds to AMOC changes, to aerosol forcing, and to internal Atlantic variability, and no combination of surface data can separate them. It gives a long record of *something*, with an uncertain transfer function to the quantity of interest.

*Approach 3: a continuous transport array.* Instrument both boundaries and the interior density field, and integrate. Expensive — RAPID costs a few million dollars a year and requires annual ship time.

It gives the actual quantity, continuously, with an uncertainty of about 1.5 Sv on annual means. After twenty years it shows a mean of about 17 Sv, a step decrease around 2008, large interannual variability, and **no statistically significant trend** — which is itself a substantial result, since it constrains how fast the AMOC can have been declining.

*The comparison.* Approach 1 is cheap and aliased. Approach 2 is cheap, long, and ambiguous. Approach 3 is expensive, short, and unambiguous. **The decisive argument for building RAPID was not that it would detect a trend — twenty years is too short — but that it would measure the variability**, without which no other method's error bars could even be estimated.

*The general point.* This is the recurring shape of the observational problem in this course, and it is worth naming. Where a quantity varies strongly on timescales shorter than your sampling interval, **more precise snapshots do not help; only continuous sampling does.** The same logic drove the tide-gauge-to-altimeter transition, the ship-to-Argo transition, and the case for Deep Argo. And it has a corollary that is easy to miss: the value of a continuous record is partly that it lets you *retrospectively quantify the error* in every sparse record that preceded it.

## Watch out

- **You might think** better sensors would resolve small ocean signals. **Actually** the limit is sampling, not precision, and has been for decades. Argo's temperature accuracy exceeds the required precision by a factor of a hundred, and the trend still took seven years.
- **You might think** a satellite gives the ocean circulation. **Actually** it gives the surface, and only the *time-varying* part without a geoid. Everything about the vertical structure, and hence about transport, requires something in the water.
- **You might think** a 20-year continuous record settles whether the AMOC is declining. **Actually** the natural variability is comparable to the expected trend, so 20 years constrains the rate but cannot detect a slow decline. The honest RAPID result is a bound, not a detection.

## One-liner

> The ocean is opaque, so everything known about its interior came from something that went there — and because the signals are small and the natural variability is large, the binding constraint on ocean observation has always been coverage rather than precision, which is why one float array and one radar altimeter changed the field more than any improvement in instruments could.

## Problems

**P1 (🟢)** The Argo array has 3900 floats over an ocean area of $3.6\times10^{14}\ \mathrm{m^2}$, each profiling every 10 days. (a) Compute the nominal spacing between floats. (b) Compute the number of profiles per year. (c) Pre-Argo ship-based sampling produced about 15,000 profiles per year. Compute the factor of improvement, and state one bias that the factor does not capture.

**P2 (🟡)** A quantity has a spatial standard deviation of $0.8$ K and a decorrelation length of 400 km over an ocean of $3.6\times10^{14}\ \mathrm{m^2}$. (a) Compute the number of independent regions. (b) Compute the standard error of a single global snapshot. (c) An annual mean averages 4 effectively independent realizations; compute its standard error. (d) The signal is a trend of $0.004\ \mathrm{K\,yr^{-1}}$. Compute the years to a two-sigma detection. (e) The float count is doubled to 7800 but the decorrelation length is unchanged. State what happens to the answer and why.

**P3 (🔴, optional)** Aliasing in the pre-RAPID AMOC record. The AMOC has a mean of 17 Sv, an interannual standard deviation of 4 Sv, and five hydrographic estimates were made in 1957, 1981, 1992, 1998 and 2004. (a) Treating each estimate as the true value plus an independent 4 Sv error, compute the standard error of a least-squares trend fitted to the five points, taking the times as given. (Use $\mathrm{SE}(\text{slope}) = \sigma/\sqrt{\sum(t_i-\bar t)^2}$.) (b) The reported decline was 8 Sv over 47 years. Compute the implied slope and compare with the standard error; state whether the trend is significant at two sigma. (c) RAPID measures annual means with an uncertainty of 1.5 Sv. Compute how many years of RAPID data are needed to detect the same slope at two sigma. (d) Comment on what this says about the relative value of a long sparse record and a short dense one.

<details>
<summary>Solutions</summary>

**P1** (a) $$\text{spacing} = \sqrt{\frac{3.6\times10^{14}}{3900}} = \sqrt{9.231\times10^{10}} = 3.04\times10^{5}\ \mathrm{m} = 304\ \mathrm{km}.$$

(b) $$3900\times\frac{365}{10} = 3900\times36.5 = 1.42\times10^{5}\ \text{profiles per year}.$$

(c) $$\frac{142\,000}{15\,000} = 9.5,$$

a factor of about ten in raw number.

The factor does not capture the change in **bias**, which mattered more. Ship-based profiles were concentrated in the northern hemisphere, along commercial shipping lanes, and in summer — the Southern Ocean in winter was essentially unsampled, and that is exactly where the heat uptake happens ([6.1](06-01-southern-ocean-hinge.md)). A tenfold increase in a biased sample does not remove the bias; Argo's contribution was that it sampled *uniformly and year-round*, which no increase in ship time could have achieved. (Two other biases the factor misses: XBT depth errors, and the fact that ships avoid bad weather, which correlates with the surface fluxes being estimated.)

**P2** (a) $$N = \frac{3.6\times10^{14}}{(4\times10^{5})^2} = \frac{3.6\times10^{14}}{1.6\times10^{11}} = 2250.$$

(b) $$\mathrm{SE} = \frac{0.8}{\sqrt{2250}} = \frac{0.8}{47.4} = 0.0169\ \mathrm{K}.$$

(c) $$\mathrm{SE}_{\text{annual}} = \frac{0.0169}{\sqrt4} = 0.00843\ \mathrm{K}.$$

(d) $$t = \frac{2\times0.00843}{0.004} = 4.2\ \mathrm{years}.$$

(e) **Nothing changes.** The standard error depends on the number of *independent regions*, which is set by the decorrelation length and the ocean's area — not by the number of floats, provided there is at least one float per region. With 3900 floats and 2250 regions there is already better than one per region, so doubling to 7800 merely samples each region twice and the extra profiles are correlated with the ones already there.

This is the central design principle of the array and worth stating explicitly: **the target of 3000 floats was chosen to be roughly one per decorrelation scale, and beyond that the returns fall off sharply.** Additional resources are better spent extending *coverage* into the gaps — deeper (Deep Argo), under ice, into marginal seas, or adding new variables (BGC-Argo) — than on densifying where the field is already resolved. Every expansion of Argo since 2010 has followed that logic.

**P3** (a) Times relative to 1957: $t_i = 0, 24, 35, 41, 47$. Mean $\bar t = 29.4$.

Deviations: $-29.4, -5.4, 5.6, 11.6, 17.6$.

$$\sum(t_i-\bar t)^2 = 864.4 + 29.2 + 31.4 + 134.6 + 309.8 = 1369.4,$$
$$\sqrt{1369.4} = 37.0.$$

$$\mathrm{SE}(\text{slope}) = \frac{4}{37.0} = 0.108\ \mathrm{Sv\,yr^{-1}}.$$

(b) $$\text{slope} = \frac{-8}{47} = -0.170\ \mathrm{Sv\,yr^{-1}}.$$

$$\frac{|{-0.170}|}{0.108} = 1.58\ \sigma.$$

**Not significant at two sigma.** The reported decline is a 1.6-sigma result — suggestive, and entirely consistent with five draws from a stationary distribution.

(This is, in essence, what happened. A 2005 paper reporting a 30 percent AMOC decline from these sections was widely covered; the RAPID record, which began the year before, showed variability large enough to account for it, and the claim did not survive.)

(c) With annual means of uncertainty $\sigma = 1.5$ Sv over $n$ consecutive years, $\sum(t_i-\bar t)^2 \approx n^3/12$, so

$$\mathrm{SE}(\text{slope}) = \frac{1.5}{\sqrt{n^3/12}} = \frac{1.5\sqrt{12}}{n^{3/2}} = \frac{5.196}{n^{3/2}}.$$

Two-sigma detection of $0.170\ \mathrm{Sv\,yr^{-1}}$ requires

$$\frac{2\times5.196}{n^{3/2}} < 0.170 \;\Longrightarrow\; n^{3/2} > 61.1 \;\Longrightarrow\; n > 15.5\ \mathrm{years}.$$

**About sixteen years** — which RAPID passed in 2020, and it has not detected a trend of that size, which is itself the informative result: a decline as fast as the hydrographic sections suggested is now excluded.

(d) The comparison is instructive and cuts against intuition. The sparse record spans 47 years and cannot resolve the trend; the dense record spans 16 and can. The reason is that the trend's detectability goes as $\sigma/\sqrt{\sum(t_i-\bar t)^2}$, and while a long baseline helps quadratically through $\sum(t_i-\bar t)^2 \sim n^3$, it helps not at all if each point carries an error as large as the whole signal.

But the honest conclusion is not that the long record was worthless. Two things:

- **The long record established the mean and the plausible range**, which is what made the array designable — you cannot size an observing system for a quantity whose magnitude you do not know.
- **Neither record is long enough for the question actually being asked.** A 16-year record can detect $0.17\ \mathrm{Sv\,yr^{-1}}$; the projected anthropogenic decline is nearer $0.03$ to $0.06\ \mathrm{Sv\,yr^{-1}}$, which by the same formula needs $n^{3/2} > 2\times5.196/0.045 = 231$, i.e. **about 38 years** — so RAPID must run until roughly 2042 to detect the change it was built to find.

That last number is the most important one in the lesson. **Climate observing systems must outlive the careers of the people who build them**, and the commonest way they fail is not technical but institutional.

</details>

## Flashback

**From Lesson 6.3 (How the ocean takes up carbon — the pumps):** Export production at 100 m is $9\ \mathrm{PgC\,yr^{-1}}$ with a Martin exponent $b = 0.90$. (a) Compute the flux reaching 500 m and 2000 m. (b) Compute the fraction of export remineralized above 1000 m. (c) A warming ocean raises $b$ to 1.10; recompute the flux at 1000 m and give the fractional change, and state which way this feedback pushes atmospheric $\mathrm{CO_2}$.

<details>
<summary>Solution</summary>

(a) $$F(z) = 9\left(\frac{z}{100}\right)^{-0.90}.$$

$$F(500) = 9\times5^{-0.90} = 9\times0.2349 = 2.11\ \mathrm{PgC\,yr^{-1}},$$
$$F(2000) = 9\times20^{-0.90} = 9\times0.0669 = 0.60\ \mathrm{PgC\,yr^{-1}}.$$

(b) $$F(1000) = 9\times10^{-0.90} = 9\times0.1259 = 1.13\ \mathrm{PgC\,yr^{-1}},$$
$$\text{fraction remineralized above 1000 m} = \frac{9 - 1.13}{9} = 87\ \text{percent}.$$

(c) $$F(1000) = 9\times10^{-1.10} = 9\times0.0794 = 0.715\ \mathrm{PgC\,yr^{-1}},$$
$$\frac{0.715-1.132}{1.132} = -37\ \text{percent}.$$

Less carbon reaches depth, so the biological pump is weaker, so more carbon stays in the surface ocean where it can exchange with the atmosphere — **the feedback pushes atmospheric $\mathrm{CO_2}$ up**. It is a positive carbon-climate feedback, and it operates through a mechanism (faster bacterial respiration in warmer water) that is well established qualitatively and poorly constrained quantitatively.

*Check.* Note the amplification: a 22 percent increase in $b$ gave a 37 percent reduction at 1000 m, because $\delta F/F = -\ln(z/100)\,\delta b = -2.303\times0.20 = -0.46$, or $-37$ percent after exponentiating. The amplification factor is $\ln(z/100)$, so the effect is larger the deeper you look — a 22 percent rise in $b$ costs 55 percent of the flux at 3000 m. **Sequestration on the longest timescales is the most sensitive to this parameter**, which is precisely the opposite of what would be convenient.

</details>

## Connections

- **Backward:** altimetry solves [2.1](02-01-geostrophy-dynamic-method.md)'s reference-level problem; RAPID's decomposition uses [2.1](02-01-geostrophy-dynamic-method.md)'s dynamic method and [3.3](03-03-gulf-stream-kuroshio.md)'s recirculation argument; the sampling problem is [4.3](04-03-diapycnal-mixing-abyssal-recipe.md)'s heavy-tailed mixing and [6.1](06-01-southern-ocean-hinge.md)'s small residuals in a new guise.
- **Forward:** nothing in this course; this is where it ends.
- **Sideways (statistics):** the recurring result — that detectability is set by variance over independent samples, not by instrument precision — is the standard signal-in-noise problem, and the AMOC trend calculation is ordinary least squares with a known error. See [`prob-stat-refresher` 3.1](../../prob-stat-refresher/lessons/03-01-joint-distributions-covariance.md). The lesson that the *length* of a record matters more than the quality of any point in it is general to every geophysical time series.

## Closing the course

Six modules ago this course began with three numbers — temperature, salinity and pressure — and the claim that everything follows from them. It is worth checking what that came to.

**Module 1** established the fluid. Density is a nonlinear function of $\theta$ and $S$, and every departure from linearity turned out to be a mechanism: cabbeling, thermobaricity, double diffusion. The buoyancy frequency $N$ became the resistance that everything afterward had to overcome, and the mixed layer became the interface through which the ocean learns anything at all.

**Module 2** set it in motion, borrowing the rotating-fluid toolkit from [`atmospheric-science`](../../atmospheric-science/syllabus.md) and building the four pieces that behave differently in salt water: the pressure gradient from a sloping surface and a salty interior, the thermal wind with two contributors, a boundary layer driven at the top, and potential vorticity in a layered fluid.

**Module 3** assembled the wind-driven circulation. Sverdrup's two-page result gave the interior from a wind atlas; Stommel's showed that the return flow must be on the west because $\beta$ is positive; and the deformation radius, thirty times smaller than the atmosphere's, filled the ocean with eddies carrying ten times the mean flow's energy.

**Module 4** went below the wind, and found that the picture most people carry — cooling drives a conveyor — has the causation backwards. Buoyancy loss makes the dense water; tides and wind, at about two terawatts, provide the energy to bring it back up. The overturning is mechanically driven, and its rate is set in the Southern Ocean and over mid-ocean ridges rather than in the Labrador Sea.

**Module 5** sped up: internal waves that travel perpendicular to their own crests, tides that are basin resonances rather than bulges, and an equatorial waveguide fast enough to make the tropical Pacific a coupled oscillator with a nine-month memory.

**Module 6** cashed it out. One basin does most of the heat uptake, three pumps hold three hundred parts per million of $\mathrm{CO_2}$ out of the atmosphere, a two-box model shows the overturning has two stable states, and the whole edifice rests on an observing system that is younger than most of the people using it.

**Four things recur, and they are the transferable content of the course.**

*Small differences of large numbers.* The Southern Ocean residual, the surface heat budget, the Bjerknes-compensated response, the distance to the AMOC's bifurcation, the level-of-no-motion correction — again and again, the quantity that matters is the residual of a near-cancellation, and its fractional uncertainty is amplified by the ratio of the terms to the residual. Learn to spot this structure; it tells you in advance which numbers will be contested.

*Integral results survive; profile results do not.* The Ekman transport does not contain the eddy viscosity. The Sverdrup balance does not contain the friction. The tidal energy budget can be read off the length of the day. Whenever a result is the integral of a divergence, or a global sum constrained by a conservation law, it is robust to everything happening inside — and that is where to look when the interior physics is unknown.

*Boundary conditions select, not equations.* Western boundary currents, eastward-only Kelvin waves, the choice of integration constant in Sverdrup theory: in each case the differential equation admits both solutions and something else — boundedness at infinity, the direction of wave-energy radiation — picks one. When a steady problem is over-determined, the selection rule lives in how the steady state is reached.

*Averages hide distributions.* Munk's missing mixing was missing because $\kappa$ varies by two orders of magnitude in space. The same lesson recurs in ventilation ages, in wave heights, in float sampling. A mean is a poor summary of a heavy-tailed field, and the practical consequence is that you should design the survey around the tail rather than the bulk.

**What is not settled**, and it is a longer list than a finished course usually admits: what actually drives the overturning and in what proportion; how completely eddies compensate the Southern Ocean's wind; how far the AMOC is from its threshold; what accounts for the last hundred parts per million of the glacial $\mathrm{CO_2}$ drawdown; and how the biological pump's transfer efficiency responds to warming. Every one of these is limited by observation rather than by theory, which is the natural note on which to end a course whose last lesson is about what we cannot yet see.
