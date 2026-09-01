# Climate Physics · Lesson 5.3: Sea-level rise

> ⏱ ~15 min · Module 5: What actually changes · Builds on: [3.1](03-01-ocean-heat-uptake-thermal-inertia.md), [4.4](04-04-tcre-carbon-budgets-net-zero.md) · Unlocks: [5.4](05-04-the-cryosphere.md), [5.6](05-06-tipping-elements-thresholds.md)

## Why this matters

Sea level is the one climate consequence that is unambiguously irreversible on any human timescale, and the one whose upper tail is genuinely unbounded by current understanding. It is also the cleanest example in the course of a quantity that responds to the **time-integral** of warming rather than to its value — so it keeps rising for centuries after temperature stabilizes, and net-zero does not stop it. And it has a property that surprises almost everyone on first hearing: **melting an ice sheet makes sea level fall in its immediate vicinity.**

## The idea

**Two ways to raise the sea: warm it, or add water.** Warm water expands, and the ocean has been absorbing 91 percent of the excess energy ([3.1](03-01-ocean-heat-uptake-thermal-inertia.md)), so thermal expansion is a large and completely predictable contribution. Separately, ice that was on land becomes water in the ocean. Glaciers, Greenland and Antarctica each contribute.

**Thermal expansion is arithmetic; ice is not.** Thermosteric rise follows from a heat budget and an expansion coefficient — it is as certain as anything in this course. Ice-sheet loss depends on the mechanics of grounding lines, subglacial topography and ice-shelf buttressing, and it is the source of essentially all the projection uncertainty.

**Sea level integrates temperature.** Thermal expansion accumulates as long as the ocean is out of equilibrium; ice sheets respond over millennia. So the relevant relation is not "sea level per degree" but "sea level rate per degree" — which means stabilizing temperature stabilizes the *rate*, not the level.

**The upper tail belongs to one ice sheet.** West Antarctica is grounded below sea level on a bed that deepens inland, which makes it susceptible to a self-sustaining retreat once the grounding line passes a threshold ([5.4](05-04-the-cryosphere.md)). No other component can plausibly deliver a metre this century. Almost the entire difference between "half a metre" and "two metres" by 2100 is a question about West Antarctica.

**And it is not the same everywhere.** An ice sheet exerts gravitational attraction on the surrounding ocean, piling water toward it. Melt it and that attraction weakens, so water flows away: sea level *drops* within about 2000 km of the melting ice and rises by up to 1.3 times the global mean in the far field. Combined with vertical land motion and ocean circulation changes, local sea-level change can differ from the global mean by a factor of two either way.

## The formal version

**Thermal expansion.** For seawater with thermal expansion coefficient $\alpha = \frac{1}{V}\frac{\partial V}{\partial T}$,

$$\Delta(\mathrm{SL})_{\text{thermal}} = \int \alpha\,\Delta T\,dz.$$

Seawater's $\alpha$ is strongly temperature-dependent — about $0.5\times10^{-4}\ \mathrm{K^{-1}}$ near 0 °C and $3\times10^{-4}$ near 25 °C — so warm surface water expands six times more per kelvin than cold deep water. Take a representative $\alpha = 2\times10^{-4}\ \mathrm{K^{-1}}$.

More useful is the version in terms of *heat*, since that is what is measured:

$$\Delta(\mathrm{SL}) = \frac{\alpha\,Q}{\rho c_p},$$

with $Q$ the heat added per square metre of ocean. *In words: sea-level rise per unit of ocean heat content, independent of where in the column the heat went (to the extent $\alpha$ is constant).* Numerically, per $10^{22}$ J of ocean heat gain spread over $3.6\times10^{14}\ \mathrm{m^2}$:

$$\Delta(\mathrm{SL}) = \frac{2\times10^{-4}\times(10^{22}/3.6\times10^{14})}{4.09\times10^{6}} = 1.36\ \mathrm{mm}.$$

**This is a genuinely useful constant: about 1.4 mm of sea level per $10^{22}$ J of ocean heat.** Since ocean heat content is measured directly by Argo, thermosteric sea level can be computed from it without any model.

**The observed budget.** Rates for 2006–2018, mm per year:

| Component | Rate |
|---|---|
| Thermal expansion | 1.4 |
| Glaciers (excluding ice sheets) | 0.62 |
| Greenland ice sheet | 0.63 |
| Antarctic ice sheet | 0.37 |
| Land water storage (groundwater depletion, dams) | 0.15 |
| **Total** | **3.2** |
| Observed (altimetry) | 3.7 |

The budget closes to within the uncertainties, which was not true twenty years ago and is a real achievement — it means every significant term has been identified and measured. Note that the total rate has roughly doubled since 1993 (2.1 mm/yr) and tripled since the mid-twentieth century, with almost all the acceleration coming from the ice sheets.

**Ice reservoirs, in sea-level equivalent.**

| Reservoir | Sea-level equivalent |
|---|---|
| Glaciers and ice caps | 0.32 m |
| Greenland ice sheet | 7.4 m |
| West Antarctic ice sheet | 5.3 m (grounded below sea level) |
| East Antarctic ice sheet | 52 m (of which ~19 m in marine basins) |

*In words: the glaciers can contribute a third of a metre and then they are gone; everything beyond that is ice sheets.* This is why glaciers dominate the early record and cannot dominate the late one.

**Projections.** AR6 for 2100 relative to 1995–2014:

| Scenario | Likely range |
|---|---|
| SSP1-1.9 (strong mitigation) | 0.28–0.55 m |
| SSP2-4.5 | 0.44–0.76 m |
| SSP5-8.5 (very high emissions) | 0.63–1.01 m |
| SSP5-8.5 with low-confidence ice-sheet processes | up to 1.6 m, and 2 m cannot be ruled out |

Note the structure: the *likely* ranges are moderate and overlap considerably between scenarios, while the *low-confidence high end* is far above all of them. That is not hedging — it reflects a genuine asymmetry in what is known. Thermal expansion and glaciers are constrained; marine ice-sheet instability is not, and it has no well-defined upper bound short of the reservoir size.

**Commitment and the integral.** Because sea level responds to accumulated heat and to slow ice dynamics, it keeps rising long after temperature stabilizes. A useful semi-empirical form:

$$\frac{d(\mathrm{SL})}{dt} = a\left(T - T_0\right),$$

*In words: the rate of rise, not the level, is proportional to how far above equilibrium the temperature is.* Integrating, sea level tracks $\int (T-T_0)\,dt$ — the time-integral of warming. Consequences:

- Stabilizing temperature stabilizes the *rate* of rise, not the level.
- An overshoot that is later reversed still leaves sea level permanently higher, because the integral has already accumulated.
- Committed sea-level rise from today's warming alone is roughly 2 to 3 m over 2000 years; from 2 K of warming, 2 to 6 m; from 5 K, 19 to 22 m.

**This is the sharpest counterexample to "temperature is reversible so warming is reversible"** ([4.4](04-04-tcre-carbon-budgets-net-zero.md)). Sea level is not.

**Regional departures from the global mean.** Four effects, all substantial:

1. **Gravitational–rotational fingerprints.** An ice sheet gravitationally attracts the ocean, raising local sea level by tens of metres relative to the far field. Remove mass and that bulge relaxes: sea level **falls** within roughly 2000 km of the melting ice, and rises by up to 1.3 times the global mean at the antipodes. Concretely: Greenland melt raises sea level *least* in northern Europe and eastern Canada and *most* in the tropical Pacific and the southern hemisphere. Each ice sheet has a distinct fingerprint, which means measuring regional sea-level patterns can identify *which* ice is melting.
2. **Glacial isostatic adjustment.** The crust is still rebounding from the last deglaciation ([geology 3.4](../../geology/lessons/03-04-glaciers-ice-ages.md)); Scandinavia and Hudson Bay are rising several millimetres per year while the peripheral forebulge collapses, sinking the US mid-Atlantic coast.
3. **Ocean dynamics.** Sea surface height varies with density and with geostrophic currents. A weakening AMOC ([5.5](05-05-circulation-regional-response.md)) raises sea level along the US northeast coast by tens of centimetres.
4. **Land subsidence.** Groundwater and hydrocarbon extraction and delta compaction produce local subsidence far exceeding the climatic signal — Jakarta at 10 to 25 cm per year, orders of magnitude larger than the global 3.7 mm.

*In words: the global mean is the least useful number for anyone actually living on a coast.* Local relative sea-level change is what floods, and it can be double the global mean or negative.

## Picture

![Two panels. On the left, a stacked bar decomposing the 3.7 mm per year of sea-level rise over 2006 to 2018: thermal expansion 1.4, glaciers 0.6, Greenland 0.6, Antarctica 0.4 and land water storage 0.2. On the right, the gravitational fingerprint: a schematic ice sheet with a curve showing relative sea-level change against distance from it. Close to the melting ice, sea level falls below the pre-melt level because the ice sheet's gravitational pull on the ocean is removed; far away it rises to about 1.3 times the global mean](assets/05-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — thermosteric rise from ocean heat).** Ocean heat content in the top 2000 m rose by $3.8\times10^{23}$ J over 1993–2022. (a) Compute the thermosteric sea-level rise. (b) Compare with the observed thermosteric contribution of about 45 mm. (c) Compute the implied mean warming of the top 2000 m and comment.

(a) Ocean area $3.6\times10^{14}\ \mathrm{m^2}$, so $Q = 3.8\times10^{23}/3.6\times10^{14} = 1.06\times10^{9}\ \mathrm{J\,m^{-2}}$:

$$\Delta(\mathrm{SL}) = \frac{\alpha Q}{\rho c_p} = \frac{2\times10^{-4}\times1.06\times10^{9}}{4.09\times10^{6}} = 0.0518\ \mathrm{m} = 52\ \mathrm{mm}.$$

(b) Observed 45 mm — agreement to 15 percent, and the discrepancy is mostly that $\alpha$ is smaller than $2\times10^{-4}$ in the cold deep water where much of the heat went.

(c) $$\Delta T = \frac{Q}{\rho c_p h} = \frac{1.06\times10^{9}}{4.09\times10^{6}\times2000} = 0.129\ \mathrm{K}.$$

*The point.* Thirteen hundredths of a kelvin of warming in the upper ocean produced 5 cm of sea-level rise. The expansion coefficient is small, but the column is 2 km deep, and that leverage is why thermal expansion is the largest single term despite being invisible as a temperature signal. It also means **sea level is a sensitive integrator of ocean heat** — 5 cm is easy to measure by satellite altimetry, 0.13 K is very hard to measure in the ocean, so altimetry provided a useful check on the ocean heat record before Argo existed.

**Example 2 (why you'd care — where does Greenland's water go?).** Greenland loses 100 Gt of ice in a year. (a) Compute the global-mean sea-level rise. (b) Explain, quantitatively in outline, why sea level in Iceland falls. (c) Explain where the water ends up.

(a) $100\ \mathrm{Gt} = 10^{14}$ kg $= 10^{11}\ \mathrm{m^3}$ of water. Over $3.6\times10^{14}\ \mathrm{m^2}$:

$$\Delta(\mathrm{SL}) = \frac{10^{11}}{3.6\times10^{14}} = 2.8\times10^{-4}\ \mathrm{m} = 0.28\ \mathrm{mm}.$$

(Handy rule: **360 Gt of ice equals 1 mm of global sea level.**)

(b) The Greenland ice sheet's mass exerts a gravitational pull that raises the local sea surface. Removing mass reduces that pull, so the geoid — the equipotential surface the ocean follows — drops locally. Simultaneously the crust beneath rebounds elastically, raising the land. Both push relative sea level down. Within about 2000 km the two effects exceed the 0.28 mm of added water, so **relative sea level falls** despite the ocean gaining water.

(c) The water redistributes globally, but not uniformly: the far field gains more than the global mean, up to about 1.3 times it. So for a given amount of Greenland melt, the tropical Pacific, the Indian Ocean and the southern hemisphere receive roughly 30 percent more rise than the global-mean number implies, while the North Atlantic receives less or none.

*The general principle.* **Sea-level change is a redistribution problem on a self-gravitating, deforming planet, not a bathtub-filling problem.** The consequence is politically pointed: Greenland melt hits the tropical Pacific island states hardest and northern Europe least, which is close to the inverse of who caused it. It is also scientifically useful — the fingerprints are distinct enough that the regional pattern of sea-level change is an independent constraint on which ice sheet is losing mass.

## Watch out

- **You might think** melting sea ice raises sea level. **Actually** floating ice already displaces its own weight of water, so its melting changes sea level almost not at all (there is a tiny effect from salinity: fresh meltwater is less dense than the seawater it displaced, worth about 0.05 mm/yr globally). Only **land** ice matters. Arctic sea-ice loss is a serious problem for other reasons ([2.3](02-03-surface-albedo-cryosphere-feedback.md), [5.4](05-04-the-cryosphere.md)) but not for sea level.
- **You might think** stabilizing temperature stops sea-level rise. **Actually** sea level responds to the time-integral of warming, so a stable temperature gives a *steady rate* of rise, not a stable level. Even at today's warming, the committed multi-century rise is metres.
- **You might think** the global-mean projection tells you what your coastline faces. **Actually** local relative sea level differs from the global mean by up to a factor of two, from gravitational fingerprints, land motion, ocean dynamics and subsidence — and in many of the most exposed cities, subsidence exceeds the climate signal by an order of magnitude.

## One-liner

> Sea level integrates warming rather than tracking it, so it does not stop when temperature does — and it is not a bathtub: melting Greenland lowers the sea in Iceland and raises it most in the tropical Pacific.

## Problems

**P1 (🟢)** Using the conversion that 360 Gt of land ice equals 1 mm of global sea level: (a) Greenland lost an average of 270 Gt per year over 2010–2019; compute its contribution in mm per year. (b) Antarctica lost 150 Gt per year; compute its contribution. (c) If Greenland's entire 7.4 m were lost over 1000 years, compute the mean rate in mm per year and compare with the current total rate of 3.7.

**P2 (🟡)** Take $\alpha = 1.5\times10^{-4}\ \mathrm{K^{-1}}$ for the deeper ocean and $\rho c_p = 4.09\times10^{6}\ \mathrm{J\,m^{-3}\,K^{-1}}$. Suppose the planetary energy imbalance holds at $0.9\ \mathrm{W\,m^{-2}}$ for the next 100 years, with 91 percent going into the ocean. (a) Compute the total heat added to the ocean per square metre of ocean. (b) Compute the thermosteric sea-level rise. (c) Comment on how this compares with the AR6 likely range for total 2100 rise and what it implies about the ice contribution.

**P3 (🔴, optional)** A semi-empirical model gives $d(\mathrm{SL})/dt = a(T-T_0)$ with $a = 3.4\ \mathrm{mm\,yr^{-1}\,K^{-1}}$ and $T_0 = 0$ (temperatures measured relative to pre-industrial equilibrium). (a) Check the model against today: with $T = 1.2$ K, what rate does it predict, and how does that compare with the observed 3.7 mm/yr? (b) Compute the total rise from 2020 to 2120 for a scenario where $T$ rises linearly from 1.2 to 2.5 K. (c) Compute it for a scenario where $T$ rises to 2.5 K by 2060 and then falls linearly back to 1.5 K by 2120, and compare the two totals. Comment on what this says about overshoot.

<details>
<summary>Solutions</summary>

**P1** (a) $$\frac{270}{360} = 0.75\ \mathrm{mm\,yr^{-1}}.$$

(b) $$\frac{150}{360} = 0.42\ \mathrm{mm\,yr^{-1}}.$$

(c) $$\frac{7400\ \mathrm{mm}}{1000\ \mathrm{yr}} = 7.4\ \mathrm{mm\,yr^{-1}},$$

**twice the current total rate from all sources combined**, sustained for a millennium. That is what complete Greenland loss looks like as a rate — not a catastrophe in any single year, and an entirely different world by the end.

**P2** (a) Over 100 years $= 3.156\times10^{9}$ s, the imbalance delivers $0.9\times3.156\times10^{9} = 2.84\times10^{9}\ \mathrm{J}$ per square metre of *Earth*. Ninety-one percent goes to the ocean, which covers 71 percent of the surface, so per square metre of ocean:

$$Q = \frac{0.91\times2.84\times10^{9}}{0.71} = 3.64\times10^{9}\ \mathrm{J\,m^{-2}}.$$

(b) $$\Delta(\mathrm{SL}) = \frac{\alpha Q}{\rho c_p} = \frac{1.5\times10^{-4}\times3.64\times10^{9}}{4.09\times10^{6}} = 0.134\ \mathrm{m} = 13\ \mathrm{cm}.$$

(c) The AR6 likely range for 2100 is 0.44 to 0.76 m under SSP2-4.5. So thermal expansion supplies only about 13 to 15 cm of that — roughly a quarter — and **the ice contributions must supply the rest**. This is the arithmetic reason ice-sheet uncertainty dominates the projection: the term we can compute confidently is a minority of the total, and the terms we cannot compute confidently are the majority. Note also that the thermosteric estimate is a lower bound in a different sense — the imbalance is likely to grow, not hold at 0.9.

**P3** (a) $$\frac{d(\mathrm{SL})}{dt} = 3.4\times1.2 = 4.1\ \mathrm{mm\,yr^{-1}},$$

against the observed 3.7 — about 10 percent high, which is respectable for a one-parameter model, and the sign is consistent with the model being calibrated on a period that includes accelerating ice loss.

(b) With $T$ linear from 1.2 to 2.5 over 100 years, the mean is $(1.2+2.5)/2 = 1.85$ K:

$$\Delta(\mathrm{SL}) = 3.4\times1.85\times100 = 629\ \mathrm{mm} = 0.63\ \mathrm{m}.$$

(c) Overshoot scenario: $T$ rises 1.2 → 2.5 over 40 years (mean 1.85), then falls 2.5 → 1.5 over 60 years (mean 2.0).

$$\Delta(\mathrm{SL}) = 3.4\times1.85\times40 + 3.4\times2.0\times60 = 252 + 408 = 660\ \mathrm{mm} = 0.66\ \mathrm{m}.$$

**The overshoot scenario gives *more* sea-level rise (0.66 m) than the monotonic one (0.63 m)** — despite ending at a temperature a full kelvin *cooler*. The reason is the integral: sea level does not care where temperature ends up, only about the area under the curve, and the overshoot path spends more time hot.

*Check.* This is the cleanest possible demonstration of the difference between a stock variable and a rate variable. Temperature responds to cumulative emissions ([4.4](04-04-tcre-carbon-budgets-net-zero.md)) and is therefore reversible by removing carbon. Sea level responds to cumulative *warming* and is not reversible at all on these timescales — bringing the temperature back down merely slows the rise. Any policy framing that treats an overshoot-and-return pathway as equivalent to a no-overshoot pathway is implicitly assuming every impact is a function of the instantaneous temperature, and sea level is the clearest case where that is false. (It is also conservative here: the model is linear and therefore misses the possibility that the overshoot triggers a marine ice-sheet instability that the return does not undo, which is [5.4](05-04-the-cryosphere.md)'s concern.)

</details>

## Flashback

**From Lesson 4.4 (TCRE, carbon budgets and net zero):** Country A emits $6\ \mathrm{GtCO_2}$ per year, holds it flat, and reaches net zero abruptly in 2060. Country B emits $2\ \mathrm{GtCO_2}$ per year and reaches net zero in 2100. Take the present year as 2025 and TCRE $= 0.45$ K per 1000 GtCO₂. (a) Compute each country's cumulative emissions from 2025. (b) Compute each one's contribution to peak warming. (c) Comment on what this says about net-zero-date pledges.

<details>
<summary>Solution</summary>

(a) Country A: 35 years at 6 GtCO₂ per year:

$$E_A = 6\times35 = 210\ \mathrm{GtCO_2}.$$

Country B: 75 years at 2 GtCO₂ per year:

$$E_B = 2\times75 = 150\ \mathrm{GtCO_2}.$$

(b) $$\Delta T_A = 0.45\times\frac{210}{1000} = 0.0945\ \mathrm{K}, \qquad \Delta T_B = 0.45\times\frac{150}{1000} = 0.0675\ \mathrm{K}.$$

(c) **Country A reaches net zero forty years earlier and contributes 40 percent more warming.** Under TCRE, peak warming depends on the area under the emissions curve, and a net-zero *date* says nothing about that area — it constrains only the endpoint. A high emitter with an early date can easily out-emit a low emitter with a late one.

The corollary is that the meaningful pledge is a **cumulative budget**, not a date, and the second-most-meaningful is a *trajectory* (which determines the area). A country announcing "net zero by 2050" while holding emissions flat until 2045 emits nearly twice as much as one declining linearly from today to the same date.

*Check.* This is exactly [4.4](04-04-tcre-carbon-budgets-net-zero.md)'s Example 1 point, and it is the single most useful thing TCRE contributes to reading policy: **the date is nearly irrelevant, the integral is everything.** Note the connection to this lesson — sea level cares about the integral of *temperature*, which is the integral of the integral of emissions, so a delayed-then-abrupt path is penalized twice over.

</details>

## Connections

- **Backward:** the ocean heat content that drives thermal expansion is [3.1](03-01-ocean-heat-uptake-thermal-inertia.md)'s; the irreversibility contrasts directly with the reversibility of temperature in [4.4](04-04-tcre-carbon-budgets-net-zero.md); the isostatic rebound is [geology 3.4](../../geology/lessons/03-04-glaciers-ice-ages.md)'s.
- **Forward:** the ice-sheet mechanics that set the upper tail are [5.4](05-04-the-cryosphere.md)'s; the AMOC contribution to regional sea level is [5.5](05-05-circulation-regional-response.md)'s; marine ice-sheet instability as a threshold is [5.6](05-06-tipping-elements-thresholds.md)'s.
- **Sideways (potential theory):** the gravitational fingerprint is a self-gravitating equipotential problem — remove a mass and the geoid deforms — and it is solved with the same spherical-harmonic machinery as any gravitational potential problem, with the extra complication that the ocean's own redistributed mass feeds back on the potential. See [`em-refresher` 1.3](../../em-refresher/lessons/01-03-electric-potential.md) for the identical mathematics with charge in place of mass.
