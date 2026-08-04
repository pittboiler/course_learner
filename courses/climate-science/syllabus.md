# Climate Physics — Syllabus

> Earth & Space · Tier 2 · ~19 lessons · Prereqs: [atmospheric-science](../atmospheric-science/syllabus.md) · Roadmap id: `climate-science`

## Goal

Treat Earth's climate as a physical system: a planet in radiative balance, its temperature set by the fight between absorbed sunlight and emitted infrared, and modulated by feedbacks, oceans, ice, and the carbon cycle. By the end you can compute a planet's temperature from first principles, quantify the greenhouse effect and radiative forcing, reason quantitatively about feedbacks and climate sensitivity, read the paleoclimate record, and understand why models — from a single equation to a GCM — project the warming they do. It deliberately skips GCM-code engineering and the economics/policy of mitigation, staying with the physics.

## Dangerous Checklist

When you finish, you can:

- [ ] Compute a planet's equilibrium temperature from its albedo and orbit, and explain why the bare number is 33 K too cold for Earth
- [ ] Derive the greenhouse effect from a gray-atmosphere radiative model and say physically why adding CO₂ warms the surface
- [ ] Estimate the radiative forcing of a CO₂ doubling and convert a forcing into an equilibrium temperature change
- [ ] Combine feedbacks into a gain factor and explain why water vapor amplifies while the Planck response stabilizes
- [ ] Explain why climate sensitivity is uncertain and trace the uncertainty to clouds
- [ ] Sketch the carbon cycle's reservoirs and fluxes and estimate an airborne fraction
- [ ] Explain how the ocean sets the pace of warming and drives ENSO's interannual swings
- [ ] Read a paleoclimate proxy record and connect glacial cycles to Milankovitch forcing
- [ ] Build a zero-dimensional energy-balance model, find its equilibria, and diagnose ice-albedo bistability
- [ ] Attribute observed warming to human forcing and distinguish emissions scenarios and their projected outcomes
- [ ] Identify a climate tipping point and explain what makes it a threshold rather than a slope

## Modules

### Module 1: The Energy Balance & the Greenhouse Effect

Build the planet's thermostat from scratch: sunlight in, infrared out, and the atmosphere that traps some of the outgoing radiation.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The Climate System | Name the components and the energy that couples them | Atmosphere/ocean/cryosphere/land/biosphere, timescales, external vs internal forcing |
| 1.2 | Planetary Energy Balance | Compute a planet's effective temperature from albedo and solar flux | Solar constant, albedo, Stefan–Boltzmann, effective temperature, energy balance |
| 1.3 | Radiation & the Blackbody Spectrum | Explain why the Sun and Earth radiate in different bands | Planck curve, Wien's law, shortwave vs longwave, emission/absorption |
| 1.4 | The Greenhouse Effect | Derive surface warming from a gray-atmosphere model | Optical depth, gray atmosphere, absorbing layers, the 33 K gap |
| 1.5 | Radiative Transfer, Line by Line | Explain why CO₂ absorbs where it does and what "saturation" means | Absorption lines, band saturation, logarithmic forcing, window regions |

**Boss problem 1:** A gray atmosphere is modeled as N stacked isothermal layers, each perfectly absorbing in the longwave and transparent in the shortwave. Show the surface temperature scales as $T_s = T_e (N+1)^{1/4}$, evaluate it for the value of N that reproduces Earth's 288 K surface from its 255 K effective temperature, and explain physically why each added layer warms the surface less than the last.

### Module 2: The Carbon Cycle & Climate Feedbacks

Turn the static balance into a responsive system: what sets CO₂, and how the climate amplifies or damps a nudge.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The Carbon Cycle | Sketch reservoirs and fluxes and estimate an airborne fraction | Fast vs slow cycle, ocean/land sinks, airborne fraction, residence time |
| 2.2 | Radiative Forcing & Climate Sensitivity | Convert a forcing into an equilibrium temperature change | Forcing (W/m²), CO₂ doubling ≈ 3.7 W/m², sensitivity parameter, ECS |
| 2.3 | Feedbacks & the Gain Factor | Combine feedbacks into a system gain | Feedback parameter, gain, positive/negative feedback, linearization |
| 2.4 | The Big Feedbacks | Rank water-vapor, ice-albedo, Planck, and lapse-rate feedbacks | Planck response, Clausius–Clapeyron, ice-albedo, lapse-rate feedback |
| 2.5 | Clouds — the Wild Card | Explain why clouds dominate sensitivity uncertainty | Shortwave vs longwave cloud forcing, high vs low clouds, net sign uncertainty |

**Boss problem 2:** Starting from a no-feedback Planck response of $\lambda_0 \approx 3.2\ \mathrm{W\,m^{-2}\,K^{-1}}$, combine a water-vapor feedback of $+1.8$, a lapse-rate feedback of $-0.6$, an ice-albedo feedback of $+0.3$, and a cloud feedback of $+0.4$ (all in $\mathrm{W\,m^{-2}\,K^{-1}}$) to find the equilibrium warming from a $3.7\ \mathrm{W/m^2}$ forcing. Then show how a cloud feedback uncertainty of $\pm0.4$ produces an asymmetric sensitivity range, and explain why the high tail is longer than the low tail.

### Module 3: The Ocean, Variability & the Paleoclimate Record

The ocean sets the tempo and stores the memory; the past is the only laboratory for a whole planet.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The Ocean's Role | Explain thermal inertia and why warming lags forcing | Heat capacity, mixed layer, thermohaline circulation, heat uptake, committed warming |
| 3.2 | ENSO & Coupled Variability | Describe the ocean–atmosphere loop behind El Niño | Walker circulation, Bjerknes feedback, El Niño/La Niña, delayed oscillator |
| 3.3 | Reading the Past — Proxies | Reconstruct temperature and CO₂ from proxy records | Ice cores, δ¹⁸O, foraminifera, dating, proxy calibration |
| 3.4 | Milankovitch & the Glacial Cycles | Connect orbital forcing to the ice-age rhythm | Eccentricity/obliquity/precession, insolation, 100-kyr problem, phase lags |

**Boss problem 3:** Model the surface as a slab ocean of depth $h$ with heat capacity $C = \rho c_p h$ forced by a step $\Delta F$ against a restoring feedback $\lambda$. Derive the response $\Delta T(t) = \frac{\Delta F}{\lambda}\bigl(1 - e^{-t/\tau}\bigr)$, express $\tau$ in terms of $C$ and $\lambda$, and estimate $\tau$ for a 70 m mixed layer. Then explain, using this timescale, why the deep ocean makes the *full* equilibrium response slower than this slab estimate — and what "warming in the pipeline" means.

### Module 4: Climate Models & Anthropogenic Change

Assemble the pieces into models of increasing ambition, then point them at the human-driven present and the projected future.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Energy-Balance Models & Bistability | Find equilibria of a 0-D model and diagnose ice-albedo bistability | Zero-dimensional EBM, stability, hysteresis, Snowball Earth, saddle-node bifurcation |
| 4.2 | The Model Hierarchy | Place EBMs, RCMs, EMICs, and GCMs on a ladder of fidelity | Radiative–convective models, grid & parameterization, resolution, ensembles |
| 4.3 | Attribution — the Human Fingerprint | Attribute observed warming to anthropogenic forcing | Fingerprinting, natural vs anthropogenic forcing, detection, internal variability |
| 4.4 | Scenarios & Projections | Compare emissions pathways and their projected warming | Emissions scenarios (SSPs), transient vs equilibrium response, carbon budget |
| 4.5 | Impacts, Tipping Points & Mitigation | Identify a tipping element and reason about thresholds | Tipping points, ice-sheet & AMOC thresholds, sea-level rise, mitigation & the net-zero idea |

**Boss problem 4:** Take the 0-D energy-balance model with a temperature-dependent albedo $\alpha(T)$ that drops sharply as ice melts. Show graphically that the outgoing-longwave and absorbed-shortwave curves can intersect three times, identify which equilibria are stable, and explain why slowly increasing the solar constant produces a discontinuous jump out of the Snowball state with hysteresis. Connect this saddle-node structure to the general notion of a climate tipping point, and name one real tipping element it plausibly describes.

## Sources of truth

- Marshall & Plumb, *Atmosphere, Ocean and Climate Dynamics* — for the energy-balance and radiative framing and notation.
- Pierrehumbert, *Principles of Planetary Climate* — for radiative transfer and the gray-atmosphere treatment (rigor level and conventions).
- Dennis Hartmann, *Global Physical Climatology* — for feedbacks, the carbon cycle, and the observational record.
- IPCC AR6 (WG1) — for forcing values, sensitivity ranges, attribution, and scenario definitions.
