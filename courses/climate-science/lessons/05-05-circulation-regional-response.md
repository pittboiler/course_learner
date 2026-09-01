# Climate Physics · Lesson 5.5: Circulation and regional response

> ⏱ ~15 min · Module 5: What actually changes · Builds on: [5.1](05-01-hydrological-cycle-response.md), [2.2](02-02-planck-water-vapour-lapse-rate.md), [atmospheric-science 4.4](../../atmospheric-science/lessons/04-04-thermal-wind-general-circulation.md) · Unlocks: [5.6](05-06-tipping-elements-thresholds.md)

## Why this matters

Whether a place becomes wetter or drier is not decided by its own temperature. It is decided by whether the Hadley cell's descending branch, the storm track, or the monsoon front sits over it — and all three move. This lesson is the least certain in the course, deliberately: circulation response is where models disagree most and where the signal-to-noise problem of [3.4](03-04-internal-variability-detection.md) is worst. But the robust parts are genuinely robust, and they matter enormously: **the subtropical dry zones expand poleward**, which places the Mediterranean, the American southwest, southern Africa, Chile and southern Australia on the wrong side of a moving boundary.

## The idea

**Warming does not change the temperature gradient in one direction — it changes it in two, at different heights.** The tropical *upper* troposphere warms about twice the surface rate ([2.2](02-02-planck-water-vapour-lapse-rate.md)). The Arctic *surface* warms three to four times the global rate ([2.3](02-03-surface-albedo-cryosphere-feedback.md)). So the equator-to-pole temperature gradient *strengthens* aloft and *weakens* near the surface. By thermal wind ([atmospheric-science 4.4](../../atmospheric-science/lessons/04-04-thermal-wind-general-circulation.md)), those two changes push the jet stream in opposite directions.

**The upper-level effect wins on the mean, and the result is a poleward shift.** The jet strengthens at upper levels and its core moves poleward — a result that appears in essentially every model, in both hemispheres, and in observations. What moves with it: the storm tracks, the mid-latitude rain belts, and the subtropical dry edge.

**The Hadley cell widens rather than strengthening.** [5.1](05-01-hydrological-cycle-response.md) established that the tropical overturning must *weaken* to reconcile 7 percent moisture with 2 percent rainfall. But the cell also gets *wider*, because warming increases static stability, which pushes the latitude at which baroclinic instability can grow further poleward — and that latitude is what terminates the cell.

**AMOC weakens, and that is a separate lever.** The Atlantic overturning is driven by dense water forming at high northern latitudes. Warming reduces surface density; Greenland meltwater reduces it further. Models project a 20 to 40 percent weakening this century, with collapse considered unlikely but not excluded.

**And the "wavier jet" argument is genuinely unsettled.** The claim that Arctic amplification slows and destabilizes the jet, producing more persistent extremes, is physically motivated and has substantial popular currency. The observational evidence is weak, models do not reproduce it robustly, and it remains contested. It belongs in this course as an open question, not a result.

## The formal version

**Thermal wind, and the tug of war.** From [atmospheric-science 4.4](../../atmospheric-science/lessons/04-04-thermal-wind-general-circulation.md), the vertical shear of the zonal wind is proportional to the meridional temperature gradient:

$$\frac{\partial u_g}{\partial z} = -\frac{g}{fT}\frac{\partial T}{\partial y}.$$

*In words: a stronger equator-to-pole temperature contrast means stronger westerlies aloft.* Now impose the two warming maxima:

| Level | Gradient change | Effect on jet |
|---|---|---|
| Upper troposphere (~250 hPa) | **strengthens** (tropical amplification) | accelerate, shift poleward |
| Near surface | **weakens** (Arctic amplification) | decelerate, shift equatorward |

The upper-level term dominates the jet-core response, because the jet core sits near the tropopause where the upper-level gradient is being changed. The surface term dominates the *low-level* baroclinicity that feeds storm growth — which is why the two effects can produce a stronger jet aloft and weaker low-level storm activity at the same time.

**Hadley cell expansion.** The poleward edge of the Hadley cell is set by where baroclinic eddies take over the poleward heat transport. A standard scaling (Held) puts the edge where the local baroclinic instability criterion is met, and increased **static stability** — a direct consequence of moist-adiabatic warming aloft — pushes that latitude poleward. Observed expansion is about $0.3$ to $0.5$ degrees of latitude per decade, though estimates vary widely with the metric used (tropopause height, outgoing longwave, surface wind, precipitation minus evaporation all give different answers).

**Consequence: the dry edge moves.** The descending branch of the Hadley cell creates the subtropical dry zones. Expand the cell and those zones move poleward onto regions currently at their margin:

| Region | Currently at the | Consequence |
|---|---|---|
| Mediterranean | poleward edge of the subtropical dry zone | drying, robust across models |
| Southwest North America | same | drying, robust |
| Chile, southern Africa, southern Australia | same, southern hemisphere | drying, robust |
| Sahel | equatorward edge | model disagreement — could go either way |

*In words: places at the poleward margin of a dry zone dry as the zone expands; places at the equatorward margin can go either way.* This is the most confident regional statement in the whole subject, and it comes from geometry rather than from a rainfall projection.

**Storm tracks.** Poleward shift, largest in the southern hemisphere. The southern case has an instructive complication: **ozone depletion** drove a strong poleward shift of the southern jet from 1980 to 2000 (a cold polar stratosphere strengthens the polar vortex, which couples downward), and ozone recovery now *opposes* the greenhouse-driven shift. So the southern jet trend has flattened since 2000 — an unusually clean example of two anthropogenic forcings with opposite effects on the same circulation feature.

**AMOC.** The Atlantic Meridional Overturning Circulation carries about 1 PW of heat northward and is driven by deep-water formation in the Labrador and Nordic seas, where surface water becomes dense enough to sink. Two forcings weaken it:

- **Warming** reduces surface density directly.
- **Freshening** from Greenland melt and increased high-latitude precipitation reduces salinity, and hence density.

Both act on the same buoyancy budget, and both reduce the density contrast that drives the sinking.

CMIP6 projections: 24 to 39 percent weakening by 2100 under high emissions. **Collapse is assessed as very unlikely this century (medium confidence)** — but that assessment carries a caveat worth taking seriously. There is a classic salt-advection feedback: a weaker AMOC transports less salt northward, which freshens the north, which weakens it further. Models that resolve this feedback well tend to be *less* stable, and there is an indication that most models are biased toward stability because they simulate the freshwater transport at the Atlantic's southern boundary with the wrong sign compared with observations.

Consequences of a substantial weakening or collapse:

| Effect | Magnitude |
|---|---|
| Northwest European cooling | 2–10 K (offsetting or exceeding greenhouse warming there) |
| ITCZ shift southward | tropical rainfall reorganization, Sahel and Amazon affected |
| US northeast coast sea level | $+10$ to $+30$ cm regional (geostrophic adjustment, [5.3](05-03-sea-level-rise.md)) |
| Southern hemisphere warming | the "bipolar seesaw" — heat retained in the south |

**The waviness debate, stated fairly.** The hypothesis: Arctic amplification weakens the low-level meridional temperature gradient, which slows the jet, which by Rossby-wave dynamics ([atmospheric-science 5.3](../../atmospheric-science/lessons/05-03-rossby-waves-beta-effect.md)) makes it meander more and makes those meanders more persistent — hence more blocking, more prolonged heatwaves, cold outbreaks and floods.

Against it: the observed waviness trend is sensitive to the metric and the period, and several careful analyses find no significant trend; models forced with observed Arctic warming show a weak or absent response; the tropical upper-level gradient is changing in the opposing direction and may dominate; and the mechanism requires the surface gradient to control the jet, whereas the jet is largely controlled aloft.

**The honest position: physically plausible, not established.** It is worth knowing precisely because it illustrates a general pattern — a mechanism that is easy to state, appealing, consequential if true, and empirically weak — and because it is the most cited climate claim in this course that has not converged.

## Picture

![A latitude-height cross-section from the equator to the pole. A coral shaded maximum sits in the tropical upper troposphere around 10 to 12 km, marking warming at twice the global mean from moist-adiabatic amplification. A blue shaded maximum sits at the Arctic surface, marking warming at three times the global mean. The jet, marked between them near the tropopause at about 35 degrees, is pulled poleward by the strengthened upper-level gradient and equatorward by the weakened surface gradient. Arrows show the two competing effects and the net poleward shift](assets/05-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — how far does the dry edge move?).** The Hadley cell edge expands at $0.4$ degrees of latitude per decade under current forcing, and the rate scales with global warming. Global temperature rises 2 K over the next 70 years (0.29 K per decade, against the current 0.2). (a) Compute the total expansion. (b) Convert to kilometres. (c) The Mediterranean's northern boundary is about 45°N and the current dry-zone edge about 40°N; comment.

(a) Scaling the rate by warming: $0.4\times(0.29/0.20) = 0.58$ degrees per decade, over 7 decades:

$$\Delta\phi = 0.58\times7 = 4.1\ \text{degrees}.$$

(b) One degree of latitude is 111 km, so $4.1\times111 = 450$ km.

(c) The dry-zone edge moves from about 40°N to about 44°N — placing essentially all of the Mediterranean basin, including southern France and northern Italy, inside the subtropical descending branch rather than at its margin. **The mechanism does not require any change in local rainfall physics; it moves a boundary.**

*The point.* This is why the Mediterranean drying signal is so robust across models even though regional precipitation projections generally are not: the models disagree about many things but agree that the cell expands, and the Mediterranean's fate follows from geometry. Note also the sign of the error bars — expansion estimates range from 0.2 to 1.0 degrees per decade, so the shift by 2100 could be 1.5 or 7 degrees, which is the difference between marginal and transformative.

**Example 2 (why you'd care — would an AMOC collapse cool Europe below today's temperature?).** An AMOC collapse would cool northwest Europe by 4 K. Global warming by 2100 is 3 K, and northwest Europe warms at roughly the global rate. (a) Compute the net temperature change relative to pre-industrial. (b) Compute it relative to today. (c) Comment on what makes this a bad outcome rather than a lucky cancellation.

(a) $$\Delta T = +3 - 4 = -1\ \mathrm{K}$$ relative to pre-industrial.

(b) Today is $+1.2$ K, so relative to today: $-1 - 1.2 = -2.2$ K — a substantial cooling.

(c) Several reasons this is not good news.

**The transition is fast.** AMOC collapse in models occurs over decades once triggered, so the change would be a 4 K regional cooling superimposed on a warming trend, arriving within a generation. Rate of change, not level, is what agriculture and infrastructure cannot absorb.

**It is not just temperature.** The collapse reorganizes the ITCZ southward, disrupting the West African and South Asian monsoons and the Amazon; it raises sea level on the US northeast coast by 10 to 30 cm; and it changes storm-track position and intensity over Europe. The regional cooling is one item in a list.

**The cancellation is local and temporary.** Europe would cool; the tropics and the southern hemisphere would warm *more*, because the heat the AMOC was exporting northward stays south. Global mean warming is essentially unchanged — the circulation moves heat around, it does not remove it.

**And it is irreversible on human timescales.** The AMOC's bistability means that once collapsed, restoring the pre-collapse forcing does not restore the circulation ([5.6](05-06-tipping-elements-thresholds.md)).

*The general principle.* **A regional cancellation between two large changes is not a null result.** Two effects of similar magnitude and opposite sign leave the mean unchanged and everything else different — the seasonal cycle, the variance, the spatial pattern, the rate. This is the same warning as [1.4](01-04-radiative-forcing-defined.md)'s zero-ERF agent, and it generalizes: whenever a mean is preserved by cancellation, look at what the cancelling terms did separately.

## Watch out

- **You might think** Arctic amplification unambiguously weakens the jet, since it reduces the equator-to-pole gradient. **Actually** it reduces the *surface* gradient while tropical upper-tropospheric amplification *increases* the gradient aloft, and the jet core responds mostly to the latter. The two effects compete, and their relative strength is a live research question — which is exactly why the waviness hypothesis has not been settled.
- **You might think** the Hadley cell strengthening and expanding are the same statement. **Actually** it *weakens* (the energetic constraint of [5.1](05-01-hydrological-cycle-response.md)) and *widens* (increased static stability) at the same time. Weaker overturning, over a larger area.
- **You might think** an AMOC weakening would spare Europe from warming. **Actually** the projected 20 to 40 percent weakening offsets only a fraction of a kelvin of European warming — the dramatic 4 to 10 K cooling requires a full collapse, which is assessed as unlikely this century. Meanwhile the weakening's confidently-projected effects are regional sea-level rise on the US east coast and a southward ITCZ shift.

## One-liner

> Warming pulls the jet two ways — poleward from the amplified tropical upper troposphere, equatorward from the amplified Arctic surface — and the winner is poleward, which drags the subtropical dry edge over the Mediterranean.

## Problems

**P1 (🟢)** The Hadley cell edge expands at $0.45$ degrees of latitude per decade. (a) Compute the expansion over 60 years. (b) Convert to kilometres, taking 111 km per degree. (c) If the observed expansion estimates range from 0.2 to 1.0 degrees per decade, give the corresponding range in kilometres over 60 years.

**P2 (🟡)** The AMOC transports about 1.0 PW ($10^{15}$ W) of heat northward across 26°N. (a) If it weakens by 30 percent, compute the reduction in northward heat transport. (b) Spread that reduction over the North Atlantic basin north of 45°N, area $1.5\times10^{13}\ \mathrm{m^2}$, and express it as a local energy flux in W m⁻². (c) Using a local $\lambda = 2\ \mathrm{W\,m^{-2}\,K^{-1}}$, estimate the equilibrium regional cooling and compare with the 4 K quoted for a full collapse.

**P3 (🔴, optional)** Consider the two competing gradient changes. In the tropics, the surface warms 2 K and the 250 hPa level warms 4 K. At the pole, the surface warms 6 K and the 250 hPa level warms 2 K. Take the equator-to-pole distance as $10^{7}$ m, $f = 10^{-4}\ \mathrm{s^{-1}}$, $T = 250$ K, $g = 9.81\ \mathrm{m\,s^{-2}}$. (a) Compute the change in $\partial T/\partial y$ at the surface and at 250 hPa. (b) Using thermal wind, compute the implied change in vertical shear at each level over a 1 km layer. (c) Explain which one determines the jet-core response and why, and state what the surface change does instead.

<details>
<summary>Solutions</summary>

**P1** (a) $$0.45\times6 = 2.7\ \text{degrees}.$$

(b) $$2.7\times111 = 300\ \mathrm{km}.$$

(c) $0.2$ per decade: $0.2\times6\times111 = 133\ \mathrm{km}$. $1.0$ per decade: $1.0\times6\times111 = 666\ \mathrm{km}$.

So somewhere between 130 and 670 km — a factor of five, which is an honest statement of how well this is known. The *sign* is robust across every estimate and every model; the magnitude is not.

**P2** (a) $$\Delta Q = 0.30\times1.0\times10^{15} = 3.0\times10^{14}\ \mathrm{W}.$$

(b) $$\frac{3.0\times10^{14}}{1.5\times10^{13}} = 20\ \mathrm{W\,m^{-2}}.$$

(c) $$\Delta T = -\frac{20}{2} = -10\ \mathrm{K}.$$

That is much larger than the 4 K quoted for a *full* collapse, from only a 30 percent weakening — so the calculation must be overstating something. Three reasons it does. The heat transport reduction is not all deposited north of 45°N; much of the change occurs further south, and the atmosphere compensates by increasing its own poleward transport (the **Bjerknes compensation**, a strongly damping response). The local $\lambda$ of 2 is too small for a region that also exchanges heat laterally with the rest of the atmosphere. And the ocean's heat capacity means the equilibrium value is approached over many decades, during which the compensating adjustments act.

**The lesson is that a local energy-budget estimate without lateral compensation gives an upper bound, often several times too large.** The correct framing is that the atmosphere and ocean together transport a total that is far more constrained than either component — reduce one and the other largely takes over.

**P3** (a) Surface: the equator-to-pole temperature *difference* changes by $2 - 6 = -4$ K, so

$$\Delta\left(\frac{\partial T}{\partial y}\right)_{\text{sfc}} = \frac{-(-4)}{10^{7}}$$

— careful with sign. Define $y$ poleward, so $\partial T/\partial y$ is negative (colder poleward). The pole warmed 4 K more than the equator, so the magnitude of the gradient *decreased* by $4/10^{7} = 4\times10^{-7}\ \mathrm{K\,m^{-1}}$.

At 250 hPa: the equator warmed 4 K and the pole 2 K, so the equator warmed 2 K more; the magnitude of the gradient *increased* by $2/10^{7} = 2\times10^{-7}\ \mathrm{K\,m^{-1}}$.

(b) Thermal wind: $\Delta(\partial u/\partial z) = -\frac{g}{fT}\Delta(\partial T/\partial y)$, and

$$\frac{g}{fT} = \frac{9.81}{10^{-4}\times250} = 392\ \mathrm{m\,s^{-2}\,K^{-1}}\cdot\mathrm{s}.$$

Surface (gradient weakened by $4\times10^{-7}$): $\Delta(\partial u/\partial z) = -392\times4\times10^{-7} = -1.57\times10^{-4}\ \mathrm{s^{-1}}$, i.e. over 1 km, $-0.157\ \mathrm{m\,s^{-1}}$ of shear.

At 250 hPa (gradient strengthened by $2\times10^{-7}$): $+392\times2\times10^{-7} = +7.8\times10^{-5}\ \mathrm{s^{-1}}$, i.e. $+0.078\ \mathrm{m\,s^{-1}}$ per km.

(c) The **jet core** sits near 250 hPa, and its speed is the integral of the shear from the surface up to that level. The near-surface shear change is larger in magnitude but applies over a shallow layer; the upper-level change applies through the deep layer where the jet actually is, and — crucially — the *cumulative* effect of the gradient change through the depth of the troposphere is dominated by the tropical amplification, which extends from about 5 km up to the tropopause. So the jet core accelerates and shifts poleward.

The **surface** gradient change does something different and equally important: it reduces low-level **baroclinicity**, which is what feeds the growth of mid-latitude cyclones ([atmospheric-science 4.5](../../atmospheric-science/lessons/04-05-air-masses-fronts-cyclones.md)). So the expected response is a *faster jet aloft* with *weaker low-level storm growth* in the Arctic-adjacent latitudes — not a contradiction, but two different quantities responding to two different gradients.

*Check.* This decomposition is why the waviness debate is hard to settle: the hypothesis rests on the surface gradient controlling jet behaviour, and the surface gradient is indeed changing in the direction claimed and by the larger amount. The counterargument is that the jet is set aloft, where the change has the opposite sign. Both facts are correct; which one dominates the *waviness* (as opposed to the speed) of the flow is not settled by this calculation, and that is exactly the state of the literature.

</details>

## Flashback

**From Lesson 5.3 (Sea-level rise):** A tide gauge in western Scotland records a relative sea-level trend of $-0.5\ \mathrm{mm\,yr^{-1}}$ while global-mean sea level rises at $+3.7\ \mathrm{mm\,yr^{-1}}$. Glacial isostatic uplift there is $3.5\ \mathrm{mm\,yr^{-1}}$, and the gravitational fingerprint of Greenland melt reduces local sea-level rise by $0.7\ \mathrm{mm\,yr^{-1}}$ relative to the global mean. (a) Compute the expected local relative trend. (b) Compare with the observation. (c) Explain why a tide gauge cannot measure absolute sea level, and name the instrument that can.

<details>
<summary>Solution</summary>

(a) $$\text{local relative} = 3.7 - 3.5 - 0.7 = -0.5\ \mathrm{mm\,yr^{-1}}.$$

(b) Exactly the observed value. Both corrections are essential: without the isostatic uplift the prediction would be $+3.0$, and without the fingerprint $+0.2$ — either alone gets the sign wrong.

(c) A tide gauge is bolted to the land, so it measures the sea surface **relative to the land it stands on**. If the land is rising at 3.5 mm per year, the gauge reports a falling sea even while the ocean is gaining water. Separating the two requires knowing the land's vertical motion independently — which is why modern tide gauges are co-located with continuous **GNSS** receivers that measure the benchmark's absolute vertical velocity.

The instrument that measures absolute sea surface height is **satellite altimetry** (TOPEX/Poseidon from 1992, then the Jason and Sentinel-6 series), which ranges to the sea surface from an orbit determined in a geocentric reference frame and is therefore blind to land motion. Its record is short (since 1992) but global and unambiguous; the tide-gauge record is long (some gauges go back to the 1700s) but local and contaminated. Reconstructing twentieth-century global sea level required combining them, and the disagreements over how to do that were a substantial part of why pre-2000 estimates of historical sea-level rise varied so much.

*Check.* This is the concrete version of [5.3](05-03-sea-level-rise.md)'s point that "the global mean is the least useful number for anyone living on a coast". Scotland's sea is falling; the Chesapeake's is rising at nearly twice the global rate, because the forebulge from the same ice sheet that is lifting Scotland is collapsing there. Same deglaciation, opposite signs, 5000 km apart.

</details>

## Connections

- **Backward:** the weakening overturning is [5.1](05-01-hydrological-cycle-response.md)'s energetic constraint; the two amplification maxima are [2.2](02-02-planck-water-vapour-lapse-rate.md)'s and [2.3](02-03-surface-albedo-cryosphere-feedback.md)'s; thermal wind and the general circulation are [atmospheric-science 4.4](../../atmospheric-science/lessons/04-04-thermal-wind-general-circulation.md)'s.
- **Forward:** AMOC bistability is the best-studied candidate tipping element in [5.6](05-06-tipping-elements-thresholds.md); the AMOC's role in past abrupt change (Dansgaard–Oeschger events, the bipolar seesaw) returns in [6.3](06-03-ice-ages-100-kyr-problem.md).
- **Sideways (oceanography):** the AMOC's dynamics — where deep water forms, what sets the overturning strength, the salt-advection feedback and the Stommel two-box model — belong to [`oceanography`](../../oceanography/syllabus.md); this course owns only how it *changes* and what that does radiatively and to sea level. The Rossby-wave dynamics behind the waviness argument are [atmospheric-science 5.3](../../atmospheric-science/lessons/05-03-rossby-waves-beta-effect.md)'s.
