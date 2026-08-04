# Atmospheric Science — Syllabus

> Earth & Space · Tier 1 · ~16 lessons · Prereqs: [calc-refresher](../calc-refresher/syllabus.md), [thermodynamics-physics](../thermodynamics-physics/syllabus.md) · Roadmap id: `atmospheric-science`

## Goal

Learn to read the atmosphere as a thin, stratified, moist fluid sitting in a radiation field on a rotating planet — and to predict what it does. You will derive the hydrostatic equation and the lapse rates from thermodynamics, track moisture through phase changes to build clouds and rain, decide when air is stable or explosively unstable (CAPE), close the planet's energy budget with a greenhouse layer, and get the winds from a three-way fight between pressure, Coriolis, and friction — ending at fronts and mid-latitude cyclones on a real weather map. Deliberately skipped: the internals of numerical weather prediction, and deep climate-model machinery — that belongs to [climate-science](../climate-science/syllabus.md), which this course feeds. It leans on [thermodynamics-physics](../thermodynamics-physics/syllabus.md) throughout and shares its momentum equations with [fluid-dynamics](../fluid-dynamics/syllabus.md).

## Dangerous Checklist

When you finish, you can:

- [ ] Name the atmosphere's layers and explain why temperature reverses sign at the tropopause and stratopause
- [ ] Derive the hydrostatic equation and use the barometric law to relate pressure and height
- [ ] Derive the dry adiabatic lapse rate $\Gamma_d = g/c_p$ from the first law and explain why a rising parcel cools
- [ ] Compute potential temperature $\theta$ and use its conservation to diagnose vertical motion and stability
- [ ] Convert fluently among vapor pressure, mixing ratio, specific/relative humidity, and dew point
- [ ] Use the Clausius–Clapeyron relation to explain saturation and derive why $\Gamma_m < \Gamma_d$
- [ ] Explain how cloud droplets nucleate and grow, and how collision–coalescence and the Bergeron process make rain
- [ ] Lift a parcel on a thermodynamic diagram to find the LCL, LFC, and equilibrium level
- [ ] Diagnose absolute, conditional, and convective instability, and estimate CAPE and CIN
- [ ] Compute Earth's effective emission temperature and quantify the greenhouse warming with a slab model
- [ ] Close the global energy budget and explain the roles of absorption, scattering, and emission
- [ ] Write the horizontal equations of motion and identify the pressure-gradient, Coriolis, and friction terms
- [ ] Compute the geostrophic wind from a pressure map and get its direction right in either hemisphere
- [ ] Use thermal wind to explain why the jet stream lives where it does and how winds turn with height
- [ ] Explain the three-cell general circulation and locate the global pressure belts, trade winds, and jets
- [ ] Identify air masses and fronts and describe the life cycle of a mid-latitude cyclone

## Modules

### Module 1: Atmospheric structure & thermodynamics

Establish what the atmosphere is made of and how its pressure, density, and temperature stack vertically — then earn the two workhorse results, the hydrostatic equation and the dry adiabatic lapse rate, straight from thermodynamics.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Composition & vertical structure | Name the layers and explain each temperature reversal | major/trace gases, homosphere, troposphere/stratosphere/meso/thermosphere, tropopause, ozone heating |
| 1.2 | The hydrostatic equation & the barometric law | Relate pressure to height for a fluid in vertical balance | $dp/dz = -\rho g$, ideal-gas law for air, scale height $H = RT/g$, exponential pressure profile |
| 1.3 | Adiabatic parcels & the dry adiabatic lapse rate | Derive $\Gamma_d = g/c_p$ and say why rising air cools | air parcel, adiabatic ascent, first law $dq = c_p\,dT - \alpha\,dp$, $\Gamma_d = g/c_p \approx 9.8$ K/km |
| 1.4 | Potential temperature | Build the conserved coordinate for dry adiabatic motion | $\theta = T(p_0/p)^{R/c_p}$, Poisson's equation, conservation under dry ascent, isentropic surfaces |

**Boss problem 1:** A dry air parcel leaves the surface at $p_0 = 1000$ hPa, $T_0 = 300$ K and is lifted adiabatically. (a) Using $\Gamma_d = g/c_p$, find its temperature at $z = 2$ km. (b) The environment is isothermal at $290$ K; use the barometric law to find the pressure at $2$ km (take $R = 287\ \mathrm{J\,kg^{-1}\,K^{-1}}$). (c) Compute the parcel's potential temperature at the surface and at $2$ km — using the level's ambient pressure — and confirm $\theta$ is conserved to within rounding. Explain physically *why* $\theta$ is the right bookkeeping variable and $T$ is not.

### Module 2: Moisture, clouds & stability

Add water. Track it through its humidity variables and its phase changes, watch latent heat bend the lapse rate, grow clouds and rain, then let a lifted parcel's buoyancy decide whether the sky is calm or convecting.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Humidity variables | Convert among every way to measure water vapor | vapor pressure $e$, mixing ratio $w$, specific & relative humidity, dew point $T_d$, virtual temperature |
| 2.2 | Saturation & the moist adiabatic lapse rate | Use Clausius–Clapeyron to explain why saturated air cools slower | Clausius–Clapeyron, saturation vapor pressure $e_s(T)$, latent heat release, $\Gamma_m < \Gamma_d$, LCL |
| 2.3 | Cloud & precipitation formation | Explain how a droplet becomes a raindrop | supersaturation, Köhler curve & CCN, warm-rain collision–coalescence, Bergeron (ice) process |
| 2.4 | Stability, parcel theory & CAPE | Lift a parcel to judge instability and size up a storm | environmental lapse rate, absolute/conditional/convective instability, LFC & EL, CAPE, CIN, buoyancy |

**Boss problem 2:** A surface parcel has $T = 25^\circ\mathrm{C}$ and dew point $T_d = 15^\circ\mathrm{C}$; the environmental lapse rate is $7$ K/km, with $\Gamma_d = 9.8$ and $\Gamma_m = 6$ K/km. (a) Estimate the LCL height with the $125\ \mathrm{m}\,^\circ\mathrm{C}^{-1}\,(T - T_d)$ rule. (b) Classify the layer's stability for an unsaturated vs. a saturated parcel, and name the resulting regime. (c) If the lifted parcel averages $2$ K warmer than its surroundings through a $3$-km-deep positive-buoyancy layer, estimate CAPE via $\mathrm{CAPE} \approx g\,\overline{(\Delta T/T)}\,\Delta z$, and say in one sentence what that number buys a would-be thunderstorm.

### Module 3: Radiation & the atmospheric energy budget

Where the atmosphere's energy comes from and where it goes. Blackbody laws set the temperatures; a simple slab greenhouse explains why the surface is warmer than sunlight alone allows; then close the global budget and see how absorption and scattering shape the vertical profile.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Solar & terrestrial radiation | Get effective temperatures from blackbody laws | blackbody, Planck curve, Wien's law, Stefan–Boltzmann, shortwave vs. longwave, albedo, $T_e$ |
| 3.2 | The greenhouse effect & the global energy budget | Quantify surface warming and balance the incoming/outgoing flux | slab-atmosphere model, emissivity, back-radiation, the Trenberth energy-flow diagram, latent & sensible heat |
| 3.3 | Radiative transfer & the vertical temperature profile | Explain how absorbers and scatterers sculpt the profile | absorption/emission/scattering, optical depth, Beer's law, greenhouse gases, why the stratosphere warms |

**Boss problem 3:** Take solar constant $S = 1361\ \mathrm{W\,m^{-2}}$, albedo $\alpha = 0.30$, $\sigma = 5.67\times10^{-8}$. (a) Derive and compute Earth's effective emission temperature $T_e$ from $\pi R^2 S(1-\alpha) = 4\pi R^2 \sigma T_e^4$, and explain where the factor of $4$ comes from. (b) Add a single perfectly absorbing longwave slab and show the surface temperature becomes $T_s = 2^{1/4} T_e$; evaluate it. (c) Compare both to the observed mean surface temperature ($\approx 288$ K) and say what the leftover gap tells you about the one-slab model.

### Module 4: Dynamics & weather systems

Set the air in motion. Write the horizontal momentum equations, add the fictitious Coriolis force from the rotating frame, and reach the balances that give the winds — geostrophic, gradient, and thermal — before assembling them into the general circulation and the fronts and cyclones of daily weather.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | The pressure-gradient force & the equations of motion | Write Newton's second law for a rotating air parcel | horizontal PGF $-\tfrac{1}{\rho}\nabla p$, momentum equations, friction, scale analysis |
| 4.2 | The Coriolis effect | Derive the deflection that rotation adds to every wind | rotating frame, Coriolis parameter $f = 2\Omega\sin\phi$, deflection right/left by hemisphere, inertial motion |
| 4.3 | Geostrophic & gradient wind balance | Get the wind by balancing pressure against Coriolis (and curvature) | geostrophic balance, $V_g = -\tfrac{1}{\rho f}\partial p/\partial n$, Buys-Ballot's law, gradient wind, cyclostrophic limit |
| 4.4 | Thermal wind, the general circulation & wind belts | Explain how winds turn with height and organize globally | thermal wind, jet streams, Hadley/Ferrel/polar cells, ITCZ, trade winds, subtropical highs, westerlies |
| 4.5 | Air masses, fronts & mid-latitude cyclones | Read a synoptic map and trace a cyclone's life cycle | air masses, cold/warm/occluded fronts, baroclinic instability, cyclone life cycle, boundary-layer & mesoscale taste |

**Boss problem 4:** At $45^\circ$N the sea-level pressure falls by $4$ hPa over $200$ km; take $\rho = 1.2\ \mathrm{kg\,m^{-3}}$ and $\Omega = 7.29\times10^{-5}\ \mathrm{s^{-1}}$. (a) Compute the Coriolis parameter $f$ and the geostrophic wind speed, and state its direction relative to the isobars using Buys-Ballot's law. (b) Redo $f$ at the equator and explain what breaks about geostrophic balance there. (c) A warm-over-cold temperature gradient points from the tropics toward the pole through the depth of the troposphere; use the thermal-wind idea to argue, in words, why the westerly jet strengthens with height and sits where it does.

## Sources of truth

- Wallace & Hobbs, *Atmospheric Science: An Introductory Survey* — overall scope, notation, and rigor level.
- Holton & Hakim, *An Introduction to Dynamic Meteorology* — the Module 4 dynamics (Coriolis, geostrophic and thermal wind).
- Rogers & Yau, *A Short Course in Cloud Physics* — Module 2 moisture and microphysics.
- Petty, *A First Course in Atmospheric Radiation* — Module 3 radiative transfer and the energy budget.
