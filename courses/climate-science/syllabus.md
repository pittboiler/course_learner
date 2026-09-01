# Climate Physics — Syllabus

> Earth & Space · Tier 2 · ~30 lessons · Prereqs: [atmospheric-science](../atmospheric-science/syllabus.md) · Roadmap id: `climate-science`

## Goal

Treat Earth's climate as a physical system and work out what it does when you push on it. [atmospheric-science](../atmospheric-science/syllabus.md) has already built the radiative machinery — blackbody laws, the effective emission temperature, the slab greenhouse, optical depth and the emission level — so this course **starts where that one stopped** and does not repeat it. It begins by pushing radiation further than a slab model can go, then spends its length on the question atmospheric science never asks: not *what is the climate*, but *how does it respond*.

That means feedbacks and the sensitivity they set; the ocean's heat uptake, which decides the pace rather than the destination; the carbon cycle that sets the forcing in the first place, and the ocean chemistry that absorbs a quarter of it; what actually changes when the planet warms — rainfall, extremes, sea level, ice, the circulation itself; and the models, the deep-time record and the projections that put numbers on all of it.

Deliberately skipped: the *engineering* of GCM code, and the economics and governance of mitigation. The **physics** of intervention — how much stratospheric aerosol offsets how much forcing, and what the thermodynamic floor on carbon removal is — stays in, because it is physics.

## Scope discipline

This course sits downstream of four that overlap it. One owner per topic; anything used but not derived here is cited to the course that does derive it.

| Topic | Owner | What this course does |
|---|---|---|
| Blackbody laws, $T_e$, the slab greenhouse, the global energy budget, optical depth, the emission level | [atmospheric-science 3.1–3.3](../atmospheric-science/lessons/03-03-radiative-transfer-vertical-profile.md) | **assumes all of it**, and goes further: continuous gray atmosphere, band structure, the formal definition of forcing |
| Rayleigh and Mie scattering, aerosol optical depth | [atmospheric-science 3.4](../atmospheric-science/lessons/03-04-scattering-rayleigh-mie-aerosols.md) | uses it for aerosol forcing and for solar radiation management |
| Solar geometry, insolation, the seasons | [atmospheric-science 3.5](../atmospheric-science/lessons/03-05-solar-geometry-seasons-insolation.md) | uses it as the Milankovitch forcing |
| Clausius–Clapeyron and the moist adiabat | [atmospheric-science 2.2](../atmospheric-science/lessons/02-02-saturation-moist-adiabatic-lapse-rate.md) | turns it into the water-vapour and lapse-rate feedbacks |
| The present general circulation, Hadley cells, jets, Rossby waves | [atmospheric-science 4.4](../atmospheric-science/lessons/04-04-thermal-wind-general-circulation.md), [5.3](../atmospheric-science/lessons/05-03-rossby-waves-beta-effect.md) | owns how those features **change** under warming |
| Ocean circulation, the MOC, gyres, ENSO dynamics, tides | [oceanography](../oceanography/syllabus.md) | owns ocean **heat uptake** as a climate response, and treats ENSO as noise to be detected through |
| Orbital-cycle geometry, the 100-kyr paradox, the Mid-Pleistocene Transition, δ¹⁸O and Mg/Ca proxies, ice cores | [geology 3.4](../geology/lessons/03-04-glaciers-ice-ages.md), [5.3](../geology/lessons/05-03-earth-history-phanerozoic.md) | owns the **dynamical resolution** — nonlinear ice-sheet response, CO₂ as amplifier, the paleo sensitivity constraint |
| Silicate weathering chemistry and the CO₂ thermostat | [geology 3.1](../geology/lessons/03-01-weathering-soils.md) | recasts it as a *slow feedback* with its own $\lambda$, and shows why it cannot help on human timescales |
| Faint young Sun evidence, Snowball Earth evidence, the Great Oxidation | [geology 5.2](../geology/lessons/05-02-earth-history-hadean-proterozoic.md) | owns the quantitative resolutions and the bistability that makes Snowball possible |
| Glacier mechanics, ice as a landform | [geology 3.4](../geology/lessons/03-04-glaciers-ice-ages.md) | owns ice sheets as a *climate* component — mass balance, marine ice-sheet instability, sea-level contribution |
| Comparative planetology, the habitable zone, other planets' greenhouses | [planetary-science](../planetary-science/syllabus.md) | cites it; runs no comparative-planets lesson of its own |
| Saddle-node bifurcations and hysteresis | [dynamical-systems 3.1](../dynamical-systems/lessons/03-01-saddle-node-transcritical.md) | applies them to the energy-balance model and to tipping elements |
| Acid–base equilibria and $K_a$ | [general-chemistry 4.1](../general-chemistry/lessons/04-01-acids-bases-ph-strength.md) | owns the marine carbonate system, the Revelle factor and acidification |

## Dangerous Checklist

When you finish, you can:

- [ ] Solve the gray atmosphere in radiative equilibrium, find the skin temperature, and explain the surface temperature discontinuity it predicts
- [ ] Explain why CO₂ forcing is logarithmic in concentration, and estimate the 3.9 W m⁻² of a doubling from band structure rather than quoting it
- [ ] Distinguish instantaneous, stratosphere-adjusted and effective radiative forcing, and say why the distinction changes the answer
- [ ] Rank every anthropogenic forcing agent by magnitude and by uncertainty, and explain why aerosols dominate the second list
- [ ] Combine feedbacks into a gain factor and explain why the water-vapour and lapse-rate feedbacks are anticorrelated
- [ ] Explain why clouds dominate sensitivity uncertainty, and distinguish cloud radiative effect from cloud feedback
- [ ] Describe how a radiative kernel or a Gregory regression actually extracts a feedback from a model run
- [ ] Compute the transient response of a slab ocean and explain why TCR is smaller than ECS
- [ ] Estimate ECS from the historical energy budget, and explain why that estimate is biased low by the pattern effect
- [ ] Separate a forced trend from internal variability, and say why a 15-year trend proves almost nothing
- [ ] Explain how detection and attribution assigns observed warming to human forcing
- [ ] Sketch the carbon cycle's reservoirs and fluxes and estimate an airborne fraction
- [ ] Use the Revelle factor to explain why the ocean absorbs only a fraction of emitted CO₂ despite holding fifty times as much carbon
- [ ] Explain ocean acidification quantitatively, including the carbonate saturation state
- [ ] Use TCRE to convert cumulative emissions into warming, and compute a remaining carbon budget
- [ ] Explain why global precipitation rises at about 2 percent per kelvin while moisture rises at 7, and what that does to the circulation
- [ ] Reason about extremes as a shifting distribution, and explain what an event-attribution statement does and does not claim
- [ ] Decompose sea-level rise into thermal expansion, glaciers and ice sheets, and explain why the upper tail is so uncertain
- [ ] Explain Arctic amplification and marine ice-sheet instability
- [ ] Predict the sign of the Hadley-cell, jet and storm-track response to warming
- [ ] Find the equilibria of a zero-dimensional energy-balance model and diagnose ice–albedo bistability as a saddle-node bifurcation
- [ ] Place EBMs, RCMs, EMICs and GCMs on a ladder of fidelity and say what each is for
- [ ] Resolve the 100-kyr problem in terms of a nonlinear response rather than a forcing
- [ ] Resolve the faint young Sun paradox quantitatively, and explain why the silicate thermostat cannot save us
- [ ] Compare emissions scenarios, and estimate the stratospheric aerosol loading that would offset a given forcing

## Modules

### Module 1: Radiative foundations, past the slab

[atmospheric-science 3.1–3.3](../atmospheric-science/lessons/03-03-radiative-transfer-vertical-profile.md) got you the effective temperature, the slab greenhouse and the emission level. That model has a ceiling: it cannot tell you *how much* forcing a given gas produces, or why the answer is logarithmic. This module removes the ceiling — a continuous absorbing atmosphere solved properly, the band structure that makes CO₂ special, and the formal definition of forcing that everything downstream depends on.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The climate system and its timescales | Name the components and the clock each one runs on | atmosphere/ocean/cryosphere/land/biosphere, response times from days to $10^6$ yr, external vs internal forcing, why climate is a boundary-value problem |
| 1.2 | The gray atmosphere in radiative equilibrium | Solve for $T(\tau)$ properly, not in slabs | two-stream approximation, $T^4(\tau) = \tfrac{T_e^4}{2}(1+\tfrac{3}{2}\tau)$, skin temperature, the surface temperature discontinuity, why convection must intervene |
| 1.3 | Bands, saturation & why forcing is logarithmic | Derive the shape of the CO₂ forcing curve | absorption lines, pressure and Doppler broadening, band wings vs centre, why a saturated band still forces, $\Delta F \approx 5.35\ln(C/C_0)$ |
| 1.4 | Radiative forcing, properly defined | Say exactly what a forcing number means | instantaneous vs stratosphere-adjusted vs effective forcing, rapid adjustments, why the definition changes the number, the forcing–response framework |
| 1.5 | The forcing agents | Rank everything that pushes on the climate | CO₂, CH₄, N₂O, halocarbons; aerosol direct and indirect effects; land-use albedo; solar and volcanic forcing; magnitudes and uncertainty bars |

**Boss problem 1:** A gray atmosphere in radiative equilibrium satisfies $T^4(\tau) = \tfrac{T_e^4}{2}\left(1+\tfrac{3}{2}\tau\right)$ for the air and $T_g^4 = \tfrac{T_e^4}{2}\left(2+\tfrac{3}{2}\tau_s\right)$ for the ground, with $T_e = 254.6$ K. (a) Evaluate the **skin temperature** at $\tau = 0$ and compare with the observed lower stratosphere. (b) For a surface optical depth $\tau_s = 1$, evaluate the air temperature at the ground and the ground temperature itself, and state the size of the discontinuity between them. (c) Explain physically why this jump exists and what removes it in the real atmosphere, naming the process and citing where it was established. (d) Using $\Delta F = 5.35\ln(C/C_0)$ and a feedback parameter $\lambda = 1.3\ \mathrm{W\,m^{-2}\,K^{-1}}$, compute the warming from doubling CO₂ and comment on whether the gray model could have given you the 5.35.

### Module 2: Feedbacks & climate sensitivity

A forcing is a push; the response depends on how the system answers back. This module builds the feedback formalism, ranks the individual feedbacks, and confronts the one — clouds — that has kept the sensitivity range stubbornly wide for forty years.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Feedbacks and the gain factor | Combine feedbacks into one number | feedback parameter $\lambda$, gain, linearization about a state, why gains add and effects multiply, runaway condition |
| 2.2 | Planck, water vapour and lapse rate | Rank the three that do most of the work | Planck response $\lambda_0 \approx 3.2$, Clausius–Clapeyron and constant relative humidity, the lapse-rate feedback, why the last two are anticorrelated |
| 2.3 | Surface albedo and the cryosphere feedback | Quantify the ice–albedo amplification | snow and ice albedo, seasonal vs permanent ice, Arctic amplification, why the feedback is strongly state-dependent |
| 2.4 | Clouds — the wild card | Explain why clouds still dominate the uncertainty | shortwave vs longwave cloud effects, high thin vs low thick, cloud-top height and optical-depth feedbacks, the low-cloud problem |
| 2.5 | How feedbacks are actually diagnosed | Extract a $\lambda$ from a model run | radiative kernels, cloud radiative effect vs cloud feedback, Gregory regression, why models disagree |

**Boss problem 2:** Start from a no-feedback Planck response $\lambda_0 = 3.2\ \mathrm{W\,m^{-2}\,K^{-1}}$ and add a water-vapour feedback of $+1.8$, a lapse-rate feedback of $-0.6$, an ice–albedo feedback of $+0.3$ and a cloud feedback of $+0.4$, all in $\mathrm{W\,m^{-2}\,K^{-1}}$. (a) Compute the net feedback parameter and the equilibrium warming from a $3.7\ \mathrm{W\,m^{-2}}$ forcing. (b) Vary the cloud feedback by $\pm0.4$ and recompute; show that the resulting sensitivity range is **asymmetric** and explain, algebraically, why the high tail is longer than the low tail. (c) Explain why the water-vapour and lapse-rate feedbacks are conventionally quoted together, and what would be misleading about citing $+1.8$ alone. (d) State the value of net $\lambda$ at which the system runs away, and how far the real climate sits from it.

### Module 3: The transient problem — heat uptake, variability and attribution

Equilibrium sensitivity answers *where* the climate ends up. Almost every question anyone actually asks is about *when* — and the answer is set by the ocean, which absorbs over ninety percent of the extra energy and takes centuries to finish. This module is about the difference between the two, and about extracting a forced signal from a noisy record.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Ocean heat uptake and thermal inertia | Compute how fast the surface can warm | slab-ocean response, effective heat capacity, mixed layer vs deep ocean, the two-layer model, committed warming |
| 3.2 | TCR, ECS and the pattern effect | Explain why the transient response is the smaller number | transient climate response, ocean heat uptake efficacy, the pattern effect, why $\lambda$ itself drifts with the warming pattern |
| 3.3 | Constraining sensitivity from observations | Get a number out of the historical record | the energy-budget constraint $\mathrm{ECS} = F_{2\times}\Delta T/(\Delta F - \Delta N)$, paleo constraints, emergent constraints, why the assessed range narrowed |
| 3.4 | Internal variability and the detection problem | Separate the signal from the noise | ENSO and decadal modes as noise (dynamics cited to [oceanography](../oceanography/syllabus.md)), signal-to-noise, trend significance, the "hiatus" episodes |
| 3.5 | Detection and attribution | Assign observed change to a cause | fingerprinting, optimal detection, natural vs anthropogenic forcing, the stratospheric-cooling fingerprint |

**Boss problem 3:** Model the surface as a slab ocean of depth $h$ with heat capacity $C = \rho c_p h$, forced by a step $\Delta F$ against a restoring feedback $\lambda$. (a) Derive $\Delta T(t) = \frac{\Delta F}{\lambda}\left(1 - e^{-t/\tau}\right)$ and identify $\tau = C/\lambda$. (b) Evaluate $\tau$ for a 70 m mixed layer and for a 2000 m deep ocean, with $\lambda = 1.3\ \mathrm{W\,m^{-2}\,K^{-1}}$, and say which sets the decadal pace and which the centennial one. (c) Now use the energy-budget constraint with $F_{2\times} = 3.93\ \mathrm{W\,m^{-2}}$, $\Delta T = 1.03$ K, $\Delta F = 2.7\ \mathrm{W\,m^{-2}}$ and $\Delta N = 0.8\ \mathrm{W\,m^{-2}}$ to estimate ECS. (d) Your answer to (c) is well below the assessed best estimate of about 3 K. Give the physical reason, and state what it implies about using the historical period to constrain the future.

### Module 4: The carbon cycle & ocean chemistry

Everything upstream took the forcing as given. This module asks where it comes from: what sets atmospheric CO₂, why the ocean absorbs only a quarter of what we emit despite holding fifty times as much carbon, what that absorption does to seawater, and the remarkable near-linear relation between cumulative emissions and warming that makes a "carbon budget" a meaningful idea at all.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | The carbon cycle | Sketch the reservoirs and fluxes and close the budget | fast vs slow cycle, land and ocean sinks, airborne fraction, residence time vs adjustment time, the long tail |
| 4.2 | Ocean carbon and the Revelle factor | Explain why a huge reservoir absorbs so little | dissolved inorganic carbon, alkalinity, the carbonate buffer, Revelle factor $\approx 10$, solubility vs biological pumps |
| 4.3 | Ocean acidification | Quantify the other CO₂ problem | pH change since 1750, carbonate saturation state $\Omega$, aragonite vs calcite, saturation horizons, thresholds |
| 4.4 | TCRE, carbon budgets and net zero | Convert cumulative emissions into warming | the near-linearity of warming in cumulative emissions, TCRE, remaining budget, why net zero stabilizes temperature, zero-emissions commitment |

**Boss problem 4:** (a) The ocean holds about 38 000 PgC against the atmosphere's 875 PgC, yet absorbs only about a quarter of anthropogenic emissions. Use the Revelle factor $R \approx 10$, defined by $R = (\delta p_{\mathrm{CO_2}}/p_{\mathrm{CO_2}})/(\delta\,\mathrm{DIC}/\mathrm{DIC})$, to explain the discrepancy quantitatively. (b) Take TCRE $= 1.65\ ^\circ\mathrm{C}$ per 1000 PgC and warming to date of 1.1 °C. Compute the remaining carbon budget for 1.5 °C in PgC, in GtCO₂, and in years at current emissions of about 10 PgC yr⁻¹. (c) Repeat with the TCRE range 1.0 to 2.3 and give the budget range. (d) The IPCC's assessed remaining budget is smaller than your central estimate. Name two physical reasons why.

### Module 5: What actually changes

Global mean temperature is a scalar and nobody lives in it. This module works out what a given amount of warming does to the things that are actually experienced: rainfall, extremes, sea level, ice, and the position of the circulation features that decide a region's climate.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | The hydrological cycle response | Explain why rain rises slower than moisture | Clausius–Clapeyron at 7 percent per K vs the energetic constraint at 2, wet-gets-wetter, the implied circulation weakening, monsoon response |
| 5.2 | Extremes and event attribution | Reason about the tails, not the mean | shifting the distribution vs widening it, return periods, heat and precipitation extremes scaling differently, fraction of attributable risk |
| 5.3 | Sea-level rise | Decompose it and bound the tail | thermal expansion, glaciers, Greenland and Antarctica, commitment and lag, why the upper tail is dominated by one ice sheet |
| 5.4 | The cryosphere | Treat ice as a climate component | sea ice vs land ice, Arctic amplification, mass balance, marine ice-sheet instability, permafrost carbon |
| 5.5 | Circulation and regional response | Predict how the wind belts move | polar amplification and the weakened meridional gradient, Hadley expansion, poleward jet and storm-track shift, the wavier-jet debate, AMOC weakening |
| 5.6 | Tipping elements and thresholds | Tell a threshold from a slope | what makes a system bistable, candidate tipping elements ranked by evidence, early-warning signals, why "tipping point" is often misused |

**Boss problem 5:** Atmospheric moisture rises at about 7 percent per kelvin (Clausius–Clapeyron), but global precipitation is constrained by the atmosphere's radiative cooling rate and rises at only about 2 percent per kelvin. (a) For 3 K of warming, compute the fractional change in column moisture and in global precipitation. (b) Global precipitation equals the mass circulation times the moisture it carries; deduce the implied fractional change in the strength of the overturning circulation, and state its sign. (c) Name the observed circulation feature this predicts a weakening of, and cite where its present-day structure was established. (d) Explain why *extreme* precipitation nevertheless scales closer to 7 percent per kelvin than to 2, and why that is not a contradiction.

### Module 6: Models, deep time and the long view

Assemble everything into models of increasing ambition, test them against the only whole-planet laboratory there is — the past — and then point them forward.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 6.1 | Energy-balance models and bistability | Find the equilibria of a climate in one equation | zero-dimensional EBM, temperature-dependent albedo, three intersections, stability, hysteresis, Snowball Earth as a saddle-node bifurcation |
| 6.2 | The model hierarchy | Place every model on a ladder and say what it is for | EBMs, radiative–convective models, EMICs, GCMs and ESMs, grid resolution, parameterization, why more complexity is not always more skill |
| 6.3 | The ice ages and the 100-kyr problem | Resolve why the weakest forcing sets the rhythm | nonlinear and threshold ice-sheet response, CO₂ as amplifier and its share of glacial cooling, phase lags, the paleo constraint on sensitivity (geometry and proxies cited to [geology 3.4](../geology/lessons/03-04-glaciers-ice-ages.md)) |
| 6.4 | Deep time and the slow thermostat | Explain how the climate stayed habitable for 4 Gyr | the faint young Sun resolved, silicate weathering as a slow feedback with its own $\lambda$, hothouse and icehouse states, the PETM as a carbon-release analogue |
| 6.5 | Scenarios, projections and the physics of intervention | Put numbers on the futures, including the engineered ones | emissions scenarios, projected ranges and their sources of spread, stratospheric aerosol injection and the forcing it buys, termination shock, the thermodynamic floor on carbon removal |

**Boss problem 6:** At 3.8 Ga the Sun was about 75 percent as luminous as today, yet the geologic record shows liquid water. (a) Compute the effective emission temperature then, and the drop relative to today's 254.6 K. (b) Assuming the greenhouse effect had today's strength of 33 K, show that the surface would have been below freezing — the faint young Sun paradox. (c) Using $\Delta F = 5.35\ln(C/C_0)$ and $\lambda = 1.3\ \mathrm{W\,m^{-2}\,K^{-1}}$, compute the CO₂ concentration, as a multiple of pre-industrial, needed to close the gap, and convert it to ppm. (d) The silicate weathering thermostat is the mechanism usually invoked to have supplied and then removed that CO₂. Given that it operates on a timescale of order $10^5$ years, state precisely why it is irrelevant to the present problem, and cite where its chemistry was established.

## Sources of truth

- Pierrehumbert, *Principles of Planetary Climate* — the radiative-transfer backbone, the gray atmosphere, and Modules 1 and 6.
- Dennis Hartmann, *Global Physical Climatology* — feedbacks, the observational record, and the hydrological cycle.
- Marshall & Plumb, *Atmosphere, Ocean and Climate Dynamics* — the ocean heat-uptake and circulation framing.
- IPCC AR6 (WG1), especially Chapters 5–7 and the Technical Summary — forcing values, feedback and sensitivity assessments, attribution, carbon budgets and scenario definitions.
- Sarmiento & Gruber, *Ocean Biogeochemical Dynamics* — Module 4's carbonate system and the Revelle factor.
- Emanuel's and Held's review papers on the hydrological cycle and its energetic constraint — Module 5.

---

## Revision notes

**2026-08-30 — re-scoped against the expanded atmospheric-science, and grown from 19 to 30 lessons.**
The prerequisite course was extended to 30 lessons the same day, which made three of this
syllabus's original five Module 1 lessons redundant and revealed how much of the original plan
was owned elsewhere. Changes:

- **Deleted as duplicates.** Original 1.2 (planetary energy balance), 1.3 (blackbody spectrum) and
  1.4 (the greenhouse effect) are now fully covered by
  [atmospheric-science 3.1](../atmospheric-science/lessons/03-01-solar-terrestrial-radiation.md) and
  [3.2](../atmospheric-science/lessons/03-02-greenhouse-effect-energy-budget.md) — including the
  original Boss problem 1, whose $T_s = T_e(N+1)^{1/4}$ result is derived there. Original 1.5
  (line-by-line transfer) was largely covered by
  [atmospheric-science 3.3](../atmospheric-science/lessons/03-03-radiative-transfer-vertical-profile.md).
  Original 3.3 (proxies) is covered by [geology 5.3](../geology/lessons/05-03-earth-history-phanerozoic.md).
- **Replaced with genuine depth.** Module 1 now does what a slab model cannot: the continuous gray
  atmosphere in radiative equilibrium, band structure and the *derivation* of logarithmic forcing,
  the formal forcing definitions, and a survey of all forcing agents.
- **Re-scoped rather than cut.** The ocean lesson became *heat uptake as a climate response*, ceding
  circulation mechanics to [oceanography](../oceanography/syllabus.md); the ENSO lesson became
  *internal variability and the detection problem*; the Milankovitch lesson became *resolving the
  100-kyr problem*, ceding orbital geometry and the paradox statement to
  [geology 3.4](../geology/lessons/03-04-glaciers-ice-ages.md).
- **New material, previously absent.** Diagnosing feedbacks (kernels, Gregory regression); TCR vs ECS
  and the pattern effect; the observational sensitivity constraint; ocean carbonate chemistry, the
  Revelle factor and acidification; TCRE and carbon budgets; the hydrological-cycle response;
  extremes and event attribution; sea-level rise; the cryosphere; the circulation response; deep-time
  climate and the slow thermostat; and the physics of intervention.
- Four modules became six, and `lessons_estimate` in [roadmap.json](../../roadmap.json) was updated
  from 19 to 30.

**2026-08-31 — all 30 lessons generated,** plus 30 figures and the course
[reference card](reference.md). The syllabus structure was followed exactly: no lessons were
split, merged or renumbered. Two things worth recording for later revision. Boss problems 1
through 6 were used as the design targets for the corresponding modules' worked examples and
problems, and their stated numbers all check out (the gray-atmosphere jump at
$\tau_s = 1$ is 23.6 K; the feedback sum gives $\lambda = 1.3$ and 2.85 K; the two-layer
timescales are 7.0 and 200 yr and the energy-budget ECS is 2.13 K; the 1.5 K budget is
242 PgC = 889 GtCO2 = 24 years; the 3 K hydrological numbers are +22.5, +6.1 and $-13.4$
percent; and the faint-young-Sun gap closes at 81 times pre-industrial CO2 = 22 700 ppm).
And [1.4](lessons/01-04-radiative-forcing-defined.md) adopts ERF ($F_{2\times} = 3.93$) as the
course-wide convention while retaining 3.71 where a lesson is deliberately reproducing the
older SARF-based literature — the reference card flags this explicitly, because it is the
single most common source of inconsistency in this material.
