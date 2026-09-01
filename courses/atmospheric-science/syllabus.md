# Atmospheric Science — Syllabus

> Earth & Space · Tier 1 · ~30 lessons · Prereqs: [calc-refresher](../calc-refresher/syllabus.md), [thermodynamics-physics](../thermodynamics-physics/syllabus.md) · Roadmap id: `atmospheric-science`

## Goal

Learn to read the atmosphere as a thin, stratified, moist fluid sitting in a radiation field on a rotating planet — and to predict what it does. You will derive the hydrostatic equation and the lapse rates from thermodynamics, track moisture through phase changes to build clouds and rain, decide when air is stable or explosively unstable (CAPE), close the planet's energy budget with a greenhouse layer, and get the winds from a three-way fight between pressure, Coriolis, and friction — ending at fronts and mid-latitude cyclones on a real weather map. You then earn the machinery the descriptive story only gestures at — vorticity and potential vorticity, Rossby waves, and the quasi-geostrophic reasoning that says *why* a surface low deepens — before turning to the atmosphere you actually live in: the boundary layer, thunderstorms, hurricanes, the instruments that watch them, and the hard limit on how far ahead any of it can be forecast. Deliberately skipped: the internals of numerical weather prediction (though not its *predictability*, which is physics), and deep climate-model machinery — that belongs to [climate-science](../climate-science/syllabus.md), which this course feeds. It leans on [thermodynamics-physics](../thermodynamics-physics/syllabus.md) throughout and shares its momentum equations with [fluid-dynamics](../fluid-dynamics/syllabus.md).

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
- [ ] Plot a sounding on a skew-T log-p diagram and read the LCL, LFC, EL, CAPE and CIN off it by eye
- [ ] Name the ten cloud genera and say what each one reveals about the air that made it
- [ ] Explain why the sky is blue, sunsets red and clouds white using the size parameter and Rayleigh's $\lambda^{-4}$
- [ ] Compute the solar zenith angle, day length and daily insolation at any latitude and date
- [ ] Explain the Chapman cycle, why the ozone layer peaks near 25 km, and how catalytic cycles open the ozone hole
- [ ] Compute relative, planetary and absolute vorticity, and separate shear from curvature vorticity
- [ ] Use conservation of potential vorticity to predict lee cyclogenesis from flow over a mountain range
- [ ] Derive the beta effect, explain why Rossby waves propagate westward, and find the stationary wavelength
- [ ] Use quasi-geostrophic reasoning to say which side of a trough and which quadrant of a jet streak forces ascent
- [ ] Close the surface energy balance, sketch the diurnal cycle of the boundary layer, and compute Ekman spin-down
- [ ] Explain why deep-layer shear turns an ordinary thunderstorm into a long-lived supercell
- [ ] Treat a hurricane as a Carnot engine and estimate its potential intensity
- [ ] Read a radar reflectivity in dBZ, and say which satellite channel sees which level
- [ ] Derive the two-week predictability limit from an error-doubling time, and distinguish it from climate predictability

## Scope discipline

This course sits between several that overlap it. One owner per topic, so nothing
is taught twice and nothing is used without a pointer to where it *is* taught.

| Topic | Owner | What this course does |
|---|---|---|
| Radiative forcing, feedbacks, climate sensitivity, carbon cycle, climate models, paleoclimate | [climate-science](../climate-science/syllabus.md) | derives $T_e$, the slab greenhouse, the global energy budget and the emission level — the inputs climate-science builds on |
| Ocean circulation, gyres, thermohaline overturning, ENSO | [oceanography](../oceanography/syllabus.md) | uses the same Coriolis parameter, geostrophy and baroclinic instability, naming the parallels |
| Clausius–Clapeyron as a general phase boundary | [thermodynamics-physics](../thermodynamics-physics/syllabus.md) | specializes it to $e_s(T)$ for water vapor and derives the moist adiabat from it |
| The momentum equation, the material derivative, Stokes flow, Rayleigh–Bénard | [fluid-dynamics](../fluid-dynamics/syllabus.md) | writes the rotating-frame version and applies it at synoptic scale |
| Blackbody radiation and the Schwarzschild equation | [stat-mech](../stat-mech/syllabus.md), [astrophysics](../astrophysics/syllabus.md) | applies both to a planetary atmosphere |
| Numerical weather prediction, model engineering | not taught in this library | says where parameterization would take over, and stops |

Every assumed fact is listed with its owner in the course's
[reference card](reference.md#assumed-not-taught-here).

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

Add water. Track it through its humidity variables and its phase changes, watch latent heat bend the lapse rate, grow clouds and rain, then let a lifted parcel's buoyancy decide whether the sky is calm or convecting — and finish with the two things a working meteorologist actually looks at: the diagram the whole sounding is read from, and the clouds it predicts.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Humidity variables | Convert among every way to measure water vapor | vapor pressure $e$, mixing ratio $w$, specific & relative humidity, dew point $T_d$, virtual temperature |
| 2.2 | Saturation & the moist adiabatic lapse rate | Use Clausius–Clapeyron to explain why saturated air cools slower | Clausius–Clapeyron, saturation vapor pressure $e_s(T)$, latent heat release, $\Gamma_m < \Gamma_d$, LCL |
| 2.3 | Cloud & precipitation formation | Explain how a droplet becomes a raindrop | supersaturation, Köhler curve & CCN, warm-rain collision–coalescence, Bergeron (ice) process |
| 2.4 | Stability, parcel theory & CAPE | Lift a parcel to judge instability and size up a storm | environmental lapse rate, absolute/conditional/convective instability, LFC & EL, CAPE, CIN, buoyancy |
| 2.5 | The skew-T log-p diagram | Read a whole sounding off the chart a forecaster actually uses | skewed isotherms, log-$p$ vertical axis, the five line families, plotting $T$ and $T_d$, area equals energy |
| 2.6 | Cloud classification & what clouds tell you | Name any cloud and infer the atmosphere that made it | the ten genera, étages, Latin roots, flat bases as the LCL, anvils as the EL, lenticular, mammatus |

**Boss problem 2:** A surface parcel has $T = 25^\circ\mathrm{C}$ and dew point $T_d = 15^\circ\mathrm{C}$; the environmental lapse rate is $7$ K/km, with $\Gamma_d = 9.8$ and $\Gamma_m = 6$ K/km. (a) Estimate the LCL height with the $125\ \mathrm{m}\,^\circ\mathrm{C}^{-1}\,(T - T_d)$ rule. (b) Classify the layer's stability for an unsaturated vs. a saturated parcel, and name the resulting regime. (c) If the lifted parcel averages $2$ K warmer than its surroundings through a $3$-km-deep positive-buoyancy layer, estimate CAPE via $\mathrm{CAPE} \approx g\,\overline{(\Delta T/T)}\,\Delta z$, and say in one sentence what that number buys a would-be thunderstorm.

### Module 3: Radiation & the atmospheric energy budget

Where the atmosphere's energy comes from and where it goes. Blackbody laws set the temperatures; a simple slab greenhouse explains why the surface is warmer than sunlight alone allows; then close the global budget, see how absorption sculpts the vertical profile, add the scattering that colours the sky, work out where on the planet the sunlight actually lands, and finish with the photochemistry that builds the ozone layer and reverses the temperature at the tropopause.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Solar & terrestrial radiation | Get effective temperatures from blackbody laws | blackbody, Planck curve, Wien's law, Stefan–Boltzmann, shortwave vs. longwave, albedo, $T_e$ |
| 3.2 | The greenhouse effect & the global energy budget | Quantify surface warming and balance the incoming/outgoing flux | slab-atmosphere model, emissivity, back-radiation, the Trenberth energy-flow diagram, latent & sensible heat |
| 3.3 | Radiative transfer & the vertical temperature profile | Explain how absorbers and scatterers sculpt the profile | absorption/emission/scattering, optical depth, Beer's law, greenhouse gases, why the stratosphere warms |
| 3.4 | Scattering: Rayleigh, Mie & aerosols | Explain the colour of the sky, the sunset and the cloud | size parameter $x = 2\pi r/\lambda$, Rayleigh $\lambda^{-4}$, Mie regime, aerosol optical depth, direct aerosol effect |
| 3.5 | Solar geometry, the seasons & insolation | Compute how much sun falls where, and when | declination, solar zenith angle, hour angle, day length, daily insolation, why tilt beats distance |
| 3.6 | Ozone photochemistry & the stratosphere | Derive the layer that makes the temperature reverse | Chapman cycle, why the peak sits near 25 km, Dobson units, catalytic $\mathrm{ClO}_x$ destruction, the ozone hole |

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

### Module 5: Vorticity, waves & vertical motion

Module 4 described the mid-latitude cyclone and asserted what makes it deepen. This module earns it. Spin is the natural currency of a rotating fluid, so switch from velocity to vorticity, find the quantity that is actually conserved, discover the wave it supports, and finally derive the vertical motion that turns an upper-level pattern into weather at the ground.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Vorticity & circulation | Measure a fluid's spin and track what changes it | relative vorticity $\zeta$, planetary vorticity $f$, absolute vorticity $\eta = \zeta + f$, shear vs curvature vorticity, the divergence (stretching) term |
| 5.2 | Potential vorticity | Find the quantity a moving column actually conserves | shallow-water PV $(\zeta+f)/h$, Ertel PV, PV units, the dynamic tropopause, lee cyclogenesis, invertibility |
| 5.3 | Rossby waves & the beta effect | Explain why the jet meanders and the waves go west | $\beta = df/dy$, the restoring mechanism, dispersion relation $c = \bar u - \beta/K^2$, stationary wavelength, planetary wavenumber, blocking |
| 5.4 | Divergence, vertical motion & quasi-geostrophic theory | Say which side of a trough is rising, and why | continuity and Dines compensation, the QG omega equation qualitatively, differential vorticity advection, thermal advection, the jet-streak four-quadrant model |

**Boss problem 5:** A column of air 8 km deep at $45^\circ$N crosses a north–south mountain range, is squashed to 6 km over the crest, and returns to 8 km on the lee side — by which time it has drifted to $40^\circ$N. Take $\Omega = 7.292\times10^{-5}\ \mathrm{s^{-1}}$ and assume it starts with zero relative vorticity. (a) Compute $f$ at both latitudes. (b) Using conservation of $(\zeta+f)/h$, find the relative vorticity over the crest and state its sense. (c) Find the relative vorticity back at 8 km and $40^\circ$N, state its sense, and name the feature this produces on a weather map. (d) Explain in two sentences why the answer to (c) would be different if the column had returned to $45^\circ$N instead, and what that tells you about which term — stretching or the change in $f$ — is doing the work.

### Module 6: Weather systems & forecasting

Come back down to the atmosphere you stand in. Start at the ground with the turbulent layer that couples air to surface, scale up through the thunderstorm and the hurricane, look at how any of this is actually measured, and end at the hard limit on how far ahead it can be known.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 6.1 | The atmospheric boundary layer | Close the surface energy budget and spin a cyclone down | $R_n = H + LE + G$, Bowen ratio, diurnal mixed layer and nocturnal inversion, log wind profile, Ekman pumping, spin-down time |
| 6.2 | Mesoscale convection: thunderstorms to tornadoes | Explain why shear turns a shower into a supercell | single-cell life cycle, gust front, deep-layer shear, tilted updraft, mesocyclone by tilting and stretching, squall lines, downbursts |
| 6.3 | Tropical cyclones & the tropics | Treat a hurricane as a heat engine and size it | formation criteria, eye and eyewall, warm core, WISHE, Carnot efficiency, potential intensity, monsoons, easterly waves |
| 6.4 | Observing the atmosphere | Know what each instrument is actually measuring | radiosondes, Doppler radar, reflectivity in dBZ and the $Z$–$R$ relation, hook echo, geostationary vs polar orbit, visible/infrared/water-vapour channels |
| 6.5 | Predictability & the two-week limit | Derive why forecasts fail, and why climate still doesn't | sensitive dependence, error doubling time, upscale error cascade, ensemble forecasting, spread and skill, initial-value vs boundary-value problems |

**Boss problem 6:** (a) Treat a hurricane as a Carnot engine drawing heat from a $300$ K sea surface and rejecting it at a $200$ K outflow layer; compute the thermodynamic efficiency. (b) Emanuel's potential intensity is $V_{\max}^2 = \frac{C_k}{C_D}\cdot\frac{T_s - T_o}{T_o}\cdot\Delta k$; evaluate it for $C_k/C_D = 0.9$ and an air–sea enthalpy disequilibrium $\Delta k = 10^4\ \mathrm{J\,kg^{-1}}$, and say which Saffir–Simpson category that is. (c) A forecast starts with an initial error of one percent of the climatological variance, and errors double every $2$ days. Derive how long until the error saturates, and state the number in days. (d) Explain in three sentences why a claim about the climate of 2100 is not defeated by your answer to (c).

## Sources of truth

- Wallace & Hobbs, *Atmospheric Science: An Introductory Survey* — overall scope, notation, and rigor level.
- Holton & Hakim, *An Introduction to Dynamic Meteorology* — the Module 4 dynamics (Coriolis, geostrophic and thermal wind).
- Rogers & Yau, *A Short Course in Cloud Physics* — Module 2 moisture and microphysics.
- Petty, *A First Course in Atmospheric Radiation* — Module 3 radiative transfer, scattering and the energy budget.
- Holton & Hakim, *An Introduction to Dynamic Meteorology*, chapters 4 and 6 — the Module 5 vorticity, potential vorticity and quasi-geostrophic material.
- Stull, *An Introduction to Boundary Layer Meteorology* — lesson 6.1.
- Markowski & Richardson, *Mesoscale Meteorology in Midlatitudes* — lesson 6.2.
- Emanuel, *Divine Wind* and his potential-intensity papers — lesson 6.3.

---

## Revision notes

**2026-08-30 — built out to 16 lessons, no structural change.** All four modules
were generated as originally specified; the lesson count matches the estimate in
[roadmap.json](../../roadmap.json). Two scope decisions were recorded rather than
resolved by cutting content:

- **Module 3 overlaps [climate-science](../climate-science/syllabus.md) Module 1.**
  Since atmospheric-science is its prerequisite, this course keeps ownership of
  the *basic* radiative machinery — blackbody laws, effective temperature, the
  slab greenhouse, the global energy budget, optical depth and the emission level
  — and cedes forcing, feedbacks, sensitivity and the carbon cycle. When
  climate-science is prepped, its lessons 1.2 to 1.4 should be rewritten to build
  on these rather than restate them.
- **Lesson 4.5 closes the course** with a short "Closing the course" section after
  Connections, following the precedent of geology 5.4 and electronics 4.4.
