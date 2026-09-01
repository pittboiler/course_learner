# Physical Oceanography — Syllabus

> Earth & Space · Tier 2 · ~30 lessons · Prereqs: [fluid-dynamics](../fluid-dynamics/syllabus.md) · Roadmap id: `oceanography`

## Goal

Learn to read the ocean as a rotating, stratified, salt-driven fluid and predict how it moves — and then cash that out into the ocean's role as the climate system's flywheel. You will characterize seawater by temperature, salinity and its stubbornly nonlinear density; set it in motion with wind (Ekman transport, the Sverdrup interior, the western boundary currents that close it, and the eddies that carry most of its energy); descend into the deep ocean to assemble the overturning and confront what actually drives it; work the fast dynamics of internal waves, tides and the equatorial waveguide; and finish with the machinery the rest of the curriculum has been citing this course for — the Antarctic Circumpolar Current, ocean heat uptake, the carbon pumps, AMOC stability, and how any of it is measured.

[atmospheric-science](../atmospheric-science/syllabus.md) has already built the rotating-fluid toolkit — Coriolis, geostrophic balance, thermal wind, vorticity and potential vorticity, Rossby waves, the Ekman layer — so this course **does not re-derive it**. It builds the ocean's versions, which differ in ways that matter: the pressure gradient comes from a sloping sea surface and from salinity as well as temperature, the deformation radius is thirty times smaller, and the fluid is forced at the top by stress rather than at the bottom by friction.

Deliberately skipped: biological and chemical oceanography beyond what sets density and carbon, numerical ocean modelling (we reason with balances and scalings, not code), instrumentation engineering, and ocean acoustics.

## Scope discipline

This course sits downstream of three that overlap it, and upstream of two that have already cited it by name. One owner per topic; anything used but not derived here is cited to the course that does derive it.

| Topic | Owner | What this course does |
|---|---|---|
| Coriolis parameter, geostrophic balance, the Rossby number, the $\beta$-plane | [atmospheric-science 4.2](../atmospheric-science/lessons/04-02-coriolis-effect.md), [4.3](../atmospheric-science/lessons/04-03-geostrophic-gradient-wind.md) | **assumes all of it**; owns the ocean's pressure-gradient problem — sea-surface tilt, the dynamic method, the level of no motion |
| Thermal wind | [atmospheric-science 4.4](../atmospheric-science/lessons/04-04-thermal-wind-general-circulation.md) | owns the ocean's version, where density gradients come from temperature **and salinity**, and applies it to the ACC |
| The Ekman layer and Ekman pumping | [atmospheric-science 6.1](../atmospheric-science/lessons/06-01-atmospheric-boundary-layer.md) | cites the spiral; owns the wind-stress-driven surface version and the transport integral $\mathbf{M}_E = \boldsymbol\tau\times\hat{\mathbf z}/(\rho f)$ |
| Vorticity, potential vorticity, Rossby waves | [atmospheric-science 5.1](../atmospheric-science/lessons/05-01-vorticity-circulation.md)–[5.3](../atmospheric-science/lessons/05-03-rossby-waves-beta-effect.md) | owns PV in a **stratified, layered** ocean, PV as a water-mass tracer, and the oceanic Rossby wave's westward-only propagation |
| Baroclinic instability and the deformation radius | [atmospheric-science 4.5](../atmospheric-science/lessons/04-05-air-masses-fronts-cyclones.md) | owns the ocean case, where $L_d \approx 30$ km makes the "cyclones" mesoscale eddies that dominate the kinetic energy |
| Surface gravity waves, the dispersion relation, phase vs group velocity | [fluid-dynamics 4.1](../fluid-dynamics/lessons/04-01-surface-waves.md) | cites the derivation; owns swell sorting, forecasting, wave-driven mixing and the sea state |
| Navier–Stokes, boundary layers, vorticity, turbulence and its cascade | [fluid-dynamics](../fluid-dynamics/syllabus.md) | uses throughout; the Ekman layer **is** a rotating boundary layer |
| Buoyancy frequency and static stability | [atmospheric-science 1.4](../atmospheric-science/lessons/01-04-potential-temperature.md) | owns the ocean version, where the nonlinear equation of state permits cabbeling, thermobaricity and double diffusion |
| Ocean heat uptake **as a climate response**, TCR/ECS, committed warming | [climate-science 3.1](../climate-science/lessons/03-01-ocean-heat-uptake-thermal-inertia.md), [3.2](../climate-science/lessons/03-02-tcr-ecs-pattern-effect.md) | owns the **circulation** that does the uptake — subduction, mode-water formation, Southern Ocean ventilation |
| The Revelle factor, ocean acidification, the airborne fraction | [climate-science 4.2](../climate-science/lessons/04-02-ocean-carbon-revelle-factor.md), [4.3](../climate-science/lessons/04-03-ocean-acidification.md) | owns the **pumps** — solubility and biological — and the glacial $\mathrm{CO_2}$ problem |
| AMOC weakening under warming, tipping elements, hysteresis | [climate-science 5.5](../climate-science/lessons/05-05-circulation-regional-response.md), [5.6](../climate-science/lessons/05-06-tipping-elements-thresholds.md) | owns the **dynamics**: what sets the overturning strength, the salt-advection feedback, the Stommel model, Dansgaard–Oeschger events |
| ENSO as internal variability and detection noise | [climate-science 3.4](../climate-science/lessons/03-04-internal-variability-detection.md) | owns the mechanism: the equatorial waveguide, the Bjerknes feedback, the delayed oscillator |
| Sea ice as a climate component, ice–albedo feedback, marine ice-sheet instability | [climate-science 2.3](../climate-science/lessons/02-03-surface-albedo-cryosphere-feedback.md), [5.4](../climate-science/lessons/05-04-the-cryosphere.md) | uses brine rejection as a deep-water formation mechanism only |
| Saddle-node bifurcations and hysteresis | [dynamical-systems 3.1](../dynamical-systems/lessons/03-01-saddle-node-transcritical.md) | applies them to the Stommel two-box model |
| Ocean sediments, sea-floor spreading, coastal geomorphology | [geology](../geology/syllabus.md) | cites; runs no marine-geology lesson of its own |

## Dangerous Checklist

When you finish, you can:

- [ ] Convert in-situ temperature to potential temperature and explain why potential density is the right variable for stratification
- [ ] Compute seawater density from a linearized equation of state, place a sample on a T–S diagram, and explain what cabbeling and thermobaricity are
- [ ] Compute the buoyancy frequency $N$ from a density profile and judge a water column's stability
- [ ] Close an ocean heat and freshwater budget from surface fluxes, and predict how deep a storm mixes the layer
- [ ] Get a geostrophic current from a hydrographic section by the dynamic method, and say what the level-of-no-motion assumption costs you
- [ ] Use the ocean's thermal wind to estimate the transport of the Antarctic Circumpolar Current to within a factor of order one
- [ ] Derive Ekman transport and its $90^\circ$ deflection, and compute Ekman pumping from the wind-stress curl
- [ ] Track potential vorticity along an isopycnal and use it to identify where a water mass was ventilated
- [ ] Use the Sverdrup balance to get a gyre's interior transport, and explain why the return flow must be a narrow western boundary current
- [ ] Estimate the ocean's deformation radius and explain why the ocean is full of eddies and the atmosphere is not
- [ ] Identify the major water masses of a basin and name the processes that form them
- [ ] Run Munk's abyssal recipe to infer the diapycnal diffusivity the overturning requires, and explain why the measured value is ten times too small
- [ ] Argue both sides of what drives the overturning — buoyancy loss in the north or wind-driven upwelling in the Southern Ocean
- [ ] Estimate the ocean's meridional heat transport and explain Bjerknes compensation
- [ ] Derive the dispersion relation for internal waves and explain why their group velocity is perpendicular to their phase velocity
- [ ] Predict swell arrival times and explain dispersive sorting
- [ ] Explain the equilibrium and dynamical theories of tides, and why real tides rotate around amphidromic points
- [ ] Compute an equatorial Kelvin wave speed and use it to set the timescale of ENSO's delayed oscillator
- [ ] Explain the Bjerknes feedback and why it makes the tropical Pacific a coupled oscillator rather than a passive ocean
- [ ] Explain how the Southern Ocean sets the global overturning, the ocean's heat uptake and its carbon uptake at once
- [ ] Estimate how much atmospheric $\mathrm{CO_2}$ the biological pump holds down
- [ ] Find both stable states of the Stommel two-box model and relate them to abrupt climate change
- [ ] Say what Argo, satellite altimetry and a repeat hydrographic section each measure, and what none of them measures

## Modules

### Module 1: Seawater and its structure

Pin down what the fluid *is* — its state variables, its stubbornly nonlinear density, the stable layering that follows, and the surface layer where it meets the atmosphere — before making it move.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Temperature, salinity and pressure: the state of seawater | Name the three variables that set everything, and how we measure them | in-situ vs potential temperature $\theta$, practical and absolute salinity, pressure as a depth coordinate, the CTD profile, conservative vs non-conservative properties |
| 1.2 | Density and the nonlinear equation of state | Compute density and see why the equation of state refuses to be linear | thermal expansion $\alpha$ and haline contraction $\beta$, potential density $\sigma_\theta$, why $\alpha$ triples from polar to tropical water, cabbeling, thermobaricity, neutral surfaces |
| 1.3 | T–S diagrams and water-mass identification | Read a water sample's origin off a temperature–salinity plot | the T–S plane, isopycnals on T–S axes, straight mixing lines, water-mass cores, why T–S is the ocean's fingerprint |
| 1.4 | Stratification, stability and the buoyancy frequency | Quantify how strongly the ocean resists vertical motion | $N^2 = -\tfrac{g}{\rho}\tfrac{d\rho}{dz}$ (buoyancy frequency cited to [atmospheric-science 1.4](../atmospheric-science/lessons/01-04-potential-temperature.md)), the pycnocline, double diffusion and salt fingers, stability of a doubly-stratified fluid |
| 1.5 | The mixed layer and air–sea fluxes | Balance what crosses the surface, and predict how deep the wind stirs | shortwave, longwave, latent and sensible fluxes, $E-P$ freshwater forcing, mixed-layer depth and the seasonal cycle, entrainment, the tropical-cyclone cold wake |

**Boss problem 1:** Surface water sits at $(\theta,S) = (25\,^\circ\mathrm{C}, 36.5)$ and deep water at $(3\,^\circ\mathrm{C}, 34.7)$. (a) Using a linearized equation of state about $(15\,^\circ\mathrm{C}, 35)$ with $\rho_0 = 1026\ \mathrm{kg\,m^{-3}}$, $\alpha = 2.0\times10^{-4}\ \mathrm{K^{-1}}$ and $\beta = 7.6\times10^{-4}$, compute both densities and confirm the column is statically stable. (b) Place both points and their mixing line on a T–S diagram, and mark where the mixture would be denser than either parent — the cabbeling region — explaining what the linearized equation of state cannot show you there. (c) For a pycnocline in which $\sigma_\theta$ rises by $2\ \mathrm{kg\,m^{-3}}$ over $200\ \mathrm{m}$, compute $N$ and the buoyancy period $2\pi/N$, and say what that period physically represents. (d) A tropical cyclone with a wind stress of $2\ \mathrm{N\,m^{-2}}$ passes over this column. Argue qualitatively whether it will mix through the pycnocline, and name the feedback this creates on the storm itself, citing where the storm's energetics were established.

### Module 2: Rotating, stratified dynamics — the ocean's version

The rotating-fluid toolkit already exists ([atmospheric-science](../atmospheric-science/syllabus.md) Modules 4 and 5). This module rebuilds the four pieces that behave differently in salt water: where the pressure gradient comes from, what sets the vertical shear, how stress at the *top* drives a boundary layer, and what potential vorticity does in a layered fluid.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Geostrophy in the ocean and the dynamic method | Get a current from a hydrographic section, with no current meter | sea-surface tilt as the barotropic pressure gradient, dynamic height, geostrophic velocity from density, the level of no motion and what assuming it costs, why altimetry changed this |
| 2.2 | Ocean thermal wind and the Antarctic Circumpolar Current | Turn sloping isopycnals into the largest current on Earth | thermal wind with $T$ **and** $S$ gradients, tilted isopycnals across a front, the ACC as the oceanic jet stream, Drake Passage and the absence of zonal boundaries, why Sverdrup theory fails here |
| 2.3 | The wind-driven Ekman layer and Ekman transport | Show that wind drives water 90 degrees to its right, and how much | surface stress $\boldsymbol\tau$, the Ekman spiral (cited to [atmospheric-science 6.1](../atmospheric-science/lessons/06-01-atmospheric-boundary-layer.md)), Ekman depth, the transport integral $\mathbf{M}_E = \boldsymbol\tau\times\hat{\mathbf z}/(\rho f)$ and why it is independent of the eddy viscosity |
| 2.4 | Ekman pumping and the wind-stress curl | Turn the wind's spatial pattern into vertical motion | Ekman convergence and divergence, $w_E = \tfrac{1}{\rho}\hat{\mathbf z}\cdot\nabla\times(\boldsymbol\tau/f)$, downwelling subtropical gyres and upwelling subpolar ones, the equatorial special case |
| 2.5 | Potential vorticity in a stratified ocean | Follow the ocean's most conserved quantity through a layered fluid | layered PV $q = (f+\zeta)/h$ (base machinery cited to [atmospheric-science 5.2](../atmospheric-science/lessons/05-02-potential-vorticity.md)), PV as a ventilation tracer, homogenized pools, oceanic Rossby waves and why they only go west |

**Boss problem 2:** Across the Antarctic Circumpolar Current, isopycnals tilt so that density at a fixed depth increases poleward by $\Delta\rho = 0.5\ \mathrm{kg\,m^{-3}}$ over a meridional distance of $1000\ \mathrm{km}$, from the surface down to $3000\ \mathrm{m}$, below which the current vanishes. Take $\rho_0 = 1027\ \mathrm{kg\,m^{-3}}$ and latitude $60\,^\circ\mathrm{S}$. (a) Compute $f$ and the thermal-wind shear $\partial u/\partial z$. (b) Compute the surface current speed, assuming it decays linearly to zero at $3000\ \mathrm{m}$. (c) Compute the volume transport in sverdrups and compare with the observed 137 to 173 Sv. (d) The Sverdrup balance of Module 3 predicts the transport of every other major current from the wind-stress curl alone. Explain in two sentences why it cannot be applied to the ACC, and what takes its place.

### Module 3: The wind-driven circulation

Assemble the gyres: the interior transport the wind curl demands, the narrow western currents that close the budget, the eddies that carry most of the energy, and the coastal upwelling that feeds the world's fisheries.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The Sverdrup balance and the interior gyre | Get the depth-integrated interior transport from the wind curl alone | $\beta V = \tfrac{1}{\rho}\hat{\mathbf z}\cdot\nabla\times\boldsymbol\tau$, vortex stretching against planetary vorticity, interior equatorward flow, the Sverdrup streamfunction |
| 3.2 | Western boundary currents: Stommel and Munk | Explain the Gulf Stream — why the return flow always hugs the west | mass closure, Stommel's bottom-friction layer, Munk's lateral-viscosity layer $\delta_M = (A_h/\beta)^{1/3}$, why the $\beta$-effect breaks east–west symmetry |
| 3.3 | The Gulf Stream and Kuroshio in the real ocean | Compare the theory with the current that actually exists | observed transport and its downstream growth, recirculation gyres, separation at Cape Hatteras, meanders and rings, the inertial-boundary-layer correction |
| 3.4 | Mesoscale eddies and ocean baroclinic instability | Explain why the ocean is a sea of eddies and the atmosphere is not | baroclinic instability in the ocean (mechanism cited to [atmospheric-science 4.5](../atmospheric-science/lessons/04-05-air-masses-fronts-cyclones.md)), the deformation radius $L_d = NH/f \approx 30$ km, eddy kinetic energy dominating the mean, eddy heat and tracer transport, the eddy-permitting vs eddy-resolving model divide |
| 3.5 | Coastal upwelling and eastern boundary systems | Connect an alongshore wind to nutrient-rich water at the coast | coastal Ekman divergence, upwelling-favourable winds, the coastal jet and undercurrent, the four great eastern boundary upwelling systems, why they hold the fisheries |

**Boss problem 3:** A subtropical basin of meridional extent $L$ centred on $30\,^\circ\mathrm{N}$ feels an idealized zonal wind stress $\tau_x(y) = -\tau_0\cos(\pi y/L)$ with $\tau_0 = 0.2\ \mathrm{N\,m^{-2}}$ — easterlies to the south, westerlies to the north. (a) Compute $\beta$ at $30\,^\circ\mathrm{N}$. (b) Compute the meridional Ekman transport and the Ekman pumping $w_E(y)$, and locate the convergence. (c) Compute the Sverdrup interior transport $V(y)$ and integrate it to get the total interior flow, in sverdrups. (d) By mass conservation, state the transport the western boundary current must return, and compare with the Gulf Stream's observed 30 Sv at the Florida Strait and 90 Sv at Cape Hatteras — explaining what accounts for the discrepancy. (e) Compute the Munk boundary-layer width for $A_h = 2\times10^{4}\ \mathrm{m^2\,s^{-1}}$ and compare with the observed Gulf Stream width.

### Module 4: The deep ocean and the overturning

Descend below the wind: where dense water forms, what mixes it back up, what actually drives the global conveyor, and how much heat it carries.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Water masses of the world ocean | Catalogue the deep ocean's building blocks and where each is made | NADW, AABW, AAIW, Mediterranean and mode waters, ventilation and subduction, spreading along isopycnals, age tracers (CFCs, $^{14}\mathrm{C}$) |
| 4.2 | Deep-water formation and convection | Understand how surface water gets dense enough to sink | buoyancy loss, preconditioning, open-ocean chimneys vs shelf convection, brine rejection under sea ice, the Labrador, Greenland and Weddell Seas |
| 4.3 | Diapycnal mixing and the abyssal recipe | Work out how much mixing the overturning needs — and find it missing | Munk's advection–diffusion balance, $\kappa \sim 10^{-4}\ \mathrm{m^2\,s^{-1}}$ required against $10^{-5}$ measured, internal-wave breaking, mixing hotspots over rough topography, the 2 TW energy budget |
| 4.4 | What drives the overturning: buoyancy or wind | Confront the two competing accounts of the conveyor | the buoyancy-driven (Stommel–Arons) picture, the Southern Ocean wind-driven upwelling picture, why "thermohaline circulation" is a loaded name, the residual-mean framework |
| 4.5 | Meridional heat transport and Bjerknes compensation | Turn the overturning into a poleward heat flux | ocean heat transport by basin, the atmosphere–ocean partition and its latitude dependence, Bjerknes compensation, the ocean's dominance in the tropics and the atmosphere's at mid-latitudes |

**Boss problem 4:** Munk's abyssal recipe. Deep water forms at a rate of about 25 Sv and must upwell through the abyssal ocean, of area $3.6\times10^{14}\ \mathrm{m^2}$, against downward diffusion of heat. (a) Compute the mean upwelling velocity $w$ in m s⁻¹ and in m yr⁻¹. (b) The abyssal temperature profile has an exponential scale height of about $1\ \mathrm{km}$. Setting the advection–diffusion balance $w\,\partial T/\partial z = \kappa\,\partial^2T/\partial z^2$, show that the scale height is $h = \kappa/w$ and hence compute the diapycnal diffusivity $\kappa$ the overturning requires. (c) Purposeful tracer-release experiments in the open thermocline measure $\kappa \approx 10^{-5}\ \mathrm{m^2\,s^{-1}}$. State the discrepancy and give the accepted resolution. (d) The mixing must be paid for energetically, at roughly 2 TW. Name the two sources that supply it and say which of Module 4's two accounts of the overturning that energy requirement supports.

### Module 5: Waves, tides and the equatorial ocean

Speed up: the ocean's fast responses, from internal waves that mix the abyss to the equatorial waveguide that makes the tropical Pacific a coupled oscillator.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Internal waves | Explain waves that travel *inside* the ocean, sideways to their own phase | the dispersion relation $\omega = N\cos\theta$, group velocity perpendicular to phase velocity, the Garrett–Munk spectrum, generation by tides and wind, breaking, and the link to 4.3 |
| 5.2 | Surface waves, swell and the sea state | Predict how swell travels, sorts, and outruns the storm that made it | the dispersion relation (cited to [fluid-dynamics 4.1](../fluid-dynamics/lessons/04-01-surface-waves.md)), phase vs group velocity, dispersive sorting, fetch and duration limits, significant wave height, wave-driven mixing |
| 5.3 | Tides: equilibrium and dynamical theory | Explain the twice-daily bulge, and why real tides refuse to obey it | the tide-generating potential and its $1/r^3$ scaling, diurnal and semidiurnal constituents, Laplace's tidal equations, amphidromic points, tidal dissipation and the lunar recession |
| 5.4 | Equatorial waves and the undercurrent | Build the waveguide that makes the equator special | vanishing $f$ at the equator, equatorial Kelvin waves (eastward only) and Rossby waves (westward, at $c/3$), the equatorial undercurrent, the thermocline tilt |
| 5.5 | The Walker circulation, the Bjerknes feedback and ENSO | Make the tropical Pacific into a coupled oscillator | the cold tongue and the warm pool, the Bjerknes feedback as a positive coupled loop, the delayed oscillator and the recharge oscillator, El Niño and La Niña, teleconnections |

**Boss problem 5:** (a) A distant storm radiates swell of period $15\ \mathrm{s}$ across $5000\ \mathrm{km}$ of deep ocean. Using the deep-water dispersion relation, find the wavelength, phase speed and group speed, and compute the arrival time; then take a band of periods from 12 to 18 s and estimate the arrival-time spread, explaining why long-period swell arrives first. Check that the deep-water limit is genuinely satisfied in a $4000\ \mathrm{m}$ ocean. (b) Now the slow waves. Model the equatorial Pacific as two layers with an upper layer of depth $150\ \mathrm{m}$ and a density contrast of $4\ \mathrm{kg\,m^{-3}}$. Compute the reduced gravity $g'$ and the first-baroclinic Kelvin wave speed $c = \sqrt{g'H}$. (c) Compute how long a Kelvin wave takes to cross the $15\,000\ \mathrm{km}$ Pacific, and how long the gravest Rossby wave takes to return at $c/3$. (d) Add the two and comment on what the total has to do with the observed two-to-seven-year period of ENSO, and on what the delayed-oscillator model claims the round trip is doing.

### Module 6: The ocean in the climate system

Cash the dynamics out into the machinery the rest of the curriculum keeps citing: the Southern Ocean that ties everything together, the uptake of heat and carbon, the overturning's stability, and how any of it is actually measured.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 6.1 | The Southern Ocean: hinge of the global system | See why one basin controls the whole overturning | the ACC and the absence of zonal boundaries, wind-driven upwelling of deep water, the residual circulation and eddy compensation, the upper and lower overturning cells, outcropping isopycnals as the ocean's window |
| 6.2 | How the ocean takes up heat | Supply the circulation behind the climate system's thermal inertia | subduction and mode-water formation, ventilated vs unventilated volumes, why uptake concentrates in the Southern Ocean and North Atlantic, the uptake efficacy cited forward to [climate-science 3.1](../climate-science/lessons/03-01-ocean-heat-uptake-thermal-inertia.md), heat content measurement |
| 6.3 | How the ocean takes up carbon: the pumps | Explain the vertical carbon gradient and the glacial $\mathrm{CO_2}$ problem | the solubility pump, the soft-tissue and carbonate biological pumps, export production and remineralization depth, why glacial $\mathrm{CO_2}$ was 100 ppm lower, Southern Ocean stratification and iron fertilization (the Revelle buffer cited to [climate-science 4.2](../climate-science/lessons/04-02-ocean-carbon-revelle-factor.md)) |
| 6.4 | AMOC stability, the Stommel model and abrupt change | Find both stable states and connect them to the paleorecord | the salt-advection feedback, the Stommel two-box model and its bifurcation, hysteresis and the freshwater-forcing threshold, Dansgaard–Oeschger events and the bipolar seesaw, why models may be biased stable |
| 6.5 | Observing the ocean | Say what each instrument measures, and what none of them does | Argo floats and what 2000 m misses, satellite altimetry and the geoid problem, repeat hydrography (WOCE and GO-SHIP), moored arrays (RAPID, OSNAP), gliders and tagged animals, the pre-Argo dark age |

**Boss problem 6:** The biological pump holds carbon in the deep ocean that would otherwise be at the surface. Surface dissolved inorganic carbon is about $2000\ \mathrm{\mu mol\,kg^{-1}}$ and the volume-weighted ocean mean is about $2245\ \mathrm{\mu mol\,kg^{-1}}$. (a) Suppose the biological pump stopped entirely and DIC became uniform. Compute the fractional rise in *surface* DIC. (b) Using a Revelle factor of 10, compute the fractional rise in surface $p\mathrm{CO_2}$, and hence the new atmospheric concentration starting from 280 ppm. (c) Published "dead ocean" calculations give 450 to 500 ppm, well below your answer. Give the two physical reasons, one involving the carbonate pump's effect on alkalinity and one involving where the carbon ends up once the atmosphere and ocean re-equilibrate. (d) Glacial atmospheric $\mathrm{CO_2}$ was about 100 ppm lower than interglacial. Using your machinery, state what fraction of the pump's full effect that represents, and name two Southern Ocean mechanisms that could deliver it.

## Sources of truth

- Marshall & Plumb, *Atmosphere, Ocean, and Climate Dynamics* — primary for level, voice, and the budget/Ekman/gyre development
- Cushman-Roisin & Beckers, *Introduction to Geophysical Fluid Dynamics* — rotating-fluid mechanics, Ekman and geostrophic dynamics
- Talley, Pickard, Emery & Swift, *Descriptive Physical Oceanography* — water masses, T–S analysis, observational grounding
- Vallis, *Atmospheric and Oceanic Fluid Dynamics* — rigor, the wind-driven and overturning theory, the residual-mean framework
- Munk & Wunsch, "Abyssal recipes II" — Module 4's mixing energetics
- Sarmiento & Gruber, *Ocean Biogeochemical Dynamics* — the carbon pumps in 6.3

## Notes

- This course is the ocean's chapter of geophysical fluid dynamics, so it leans hard on [`fluid-dynamics`](../fluid-dynamics/syllabus.md): the governing equations, the boundary-layer idea (the Ekman layer *is* a rotating boundary layer), vorticity, and surface-wave dispersion all carry straight over — here with rotation and stratification switched on.
- It runs in close parallel with [`atmospheric-science`](../atmospheric-science/syllabus.md), and the scope table above says exactly where. The productive framing for every Module 2 lesson is "the same balance, in a fluid a thousand times denser, a thousand times slower, and stratified by salt as well as heat."
- Modules 4 and 6 discharge obligations the finished courses have already incurred: [`climate-science`](../climate-science/syllabus.md) cites this course by name for AMOC dynamics, the Stommel model, the Bjerknes feedback, ENSO mechanism, glacial $\mathrm{CO_2}$ release and the circulation behind ocean heat uptake, and [`atmospheric-science`](../atmospheric-science/syllabus.md) cites it for the ACC, mesoscale eddies and the tropical-cyclone cold wake. Those citations point at this syllabus; once the lessons exist they can be sharpened to specific targets.

---

## Revision notes

**2026-08-31 — re-scoped against the three courses built since, and grown from 18 to 30 lessons.**
The original spine was written before `geology` (29), `atmospheric-science` (30) and
`climate-science` (30) existed. Auditing it against them found four lessons that would have
re-derived owned material and six explicit promises those courses had made that the 18 lessons
did not deliver. Changes:

- **Re-scoped, not cut.** Original 2.1 (rotation, geostrophy, thermal wind) duplicated
  [atmospheric-science 4.2](../atmospheric-science/lessons/04-02-coriolis-effect.md)–[4.4](../atmospheric-science/lessons/04-04-thermal-wind-general-circulation.md)
  and became two lessons that do what those cannot: 2.1 on the ocean's pressure-gradient problem
  (the dynamic method) and 2.2 on thermal wind with salinity, applied to the ACC. Original 2.2
  (Ekman) now cites [atmospheric-science 6.1](../atmospheric-science/lessons/06-01-atmospheric-boundary-layer.md),
  which already derives the spiral and pumping, and owns the wind-stress transport integral.
  Original 4.1 (surface waves) cites [fluid-dynamics 4.1](../fluid-dynamics/lessons/04-01-surface-waves.md)
  for the dispersion relation and becomes a lesson about swell and the sea state. Original 3.4
  ceded thermal inertia, carbon uptake and AMOC stability to `climate-science` and became 4.5, on
  present-day heat transport and Bjerknes compensation.
- **Split what was overloaded.** Original 4.4 carried the equatorial waveguide, the undercurrent,
  Kelvin and Rossby waves, the Bjerknes feedback and ENSO in one lesson; it is now 5.4 and 5.5.
- **New, closing an explicit promise.** 2.2 (the ACC, promised by atmospheric-science 4.4),
  3.4 (mesoscale eddies and the 30 km deformation radius, promised by atmospheric-science 4.5),
  6.2 (the circulation behind ocean heat uptake, promised by climate-science 3.1), 6.3 (the carbon
  pumps and glacial $\mathrm{CO_2}$, promised by climate-science 6.3), 6.4 (AMOC stability and the
  Stommel model, promised by climate-science 5.5), and the tropical-cyclone cold wake folded into
  1.5 (promised by atmospheric-science 6.3).
- **New, filling a library-wide gap.** A tree-wide ownership grep found Sverdrup, Kelvin waves,
  western boundary currents, diapycnal mixing, double diffusion, tides, the ACC and ocean observing
  all **unclaimed** across 108 courses. Hence 2.5 (PV in a stratified ocean), 3.3 (the Gulf Stream
  as observed), 4.3 (diapycnal mixing and the abyssal recipe), 4.4 (what actually drives the
  overturning), 5.1 (internal waves), 6.1 (the Southern Ocean) and 6.5 (observing the ocean).
  Note that `climate-science` cites Argo four times and satellite altimetry twice without either
  ever being explained anywhere in the curriculum; 6.5 fixes that.
- Four modules became six, and `lessons_estimate` in [roadmap.json](../../roadmap.json) was updated
  from 18 to 30.
- All six boss problems were verified numerically before being written down: the ACC thermal-wind
  transport comes out at 170 Sv against an observed 137 to 173; Munk's recipe gives
  $\kappa = 7\times10^{-5}\ \mathrm{m^2\,s^{-1}}$ against the canonical $10^{-4}$; the ocean and
  atmospheric deformation radii come out at 30 km and 1000 km, matching the figures
  atmospheric-science 4.5 already quotes; the Sverdrup interior transport is 19.6 Sv; the
  equatorial Kelvin wave crosses the Pacific in 73 days and the Rossby wave returns in 7.2 months;
  and the dead-ocean estimate gives 623 ppm as the crude upper bound the problem then asks the
  reader to correct.

**2026-08-31 (later the same day) — all 30 lessons and the reference card built.**
The spine above was followed exactly: 6 modules, 30 lessons, filenames as listed in the
module tables, no renumbering. Every figure is hand-authored SVG on the theme-safe
palette except lesson 5.5, whose Bjerknes/delayed-oscillator loop is a Mermaid graph.
All six boss problems were reproduced numerically before any prose was written, and the
lesson worked examples are built on the same verified numbers — the ACC thermal-wind
transport at 170 Sv, Munk's required diffusivity at $6.9\times10^{-5}\ \mathrm{m^2\,s^{-1}}$,
the equatorial Kelvin crossing at 73 days, the dead-ocean upper bound at 623 ppm.

One defect in the spine surfaced during the build and is worth recording. **Boss problem 3
part (c)** asks for "the total interior flow, in sverdrups" from an integral of $V(y)$, but
$V$ has units of m² s⁻¹, so a sverdrup answer needs a zonal width that the problem does not
supply. The quantity the phrasing yields, $\int|V|\,dy = 2\tau_0/(\rho\beta) = 19.7$ Sv, is
independent of the basin's meridional extent and is not the gyre transport. Lesson 3.1
therefore states the geometry in full (meridional extent 3000 km, zonal width 5000 km) and
computes the gyre transport properly as $\psi_{\max} = |V|_{\max}L_x = 51.5$ Sv, which sits
between the Gulf Stream's observed 30 Sv at the Florida Strait and 90 Sv at Cape Hatteras and
supports the recirculation discussion the boss problem's part (d) asks for. **When setting
this quiz, supply a zonal width.**

Two other scope notes. Lesson 6.5 carries a `## Closing the course` section, following the
precedent of the other completed courses. And [`climate-science`](../climate-science/syllabus.md)'s
outstanding citations are all now discharged: 3.1's ocean-heat-uptake circulation by 6.2 (where
the efficacy $\varepsilon \approx 1.3$ is *derived* from where the ventilated volume is rather
than fitted), 4.2's carbon pumps by 6.3, 5.5 and 5.6's AMOC stability by 6.4, and 3.4's ENSO
mechanism by 5.4 and 5.5; [`atmospheric-science`](../atmospheric-science/syllabus.md)'s by 2.2
(the ACC), 3.4 (mesoscale eddies and the 30 km deformation radius) and 1.5 (the tropical-cyclone
cold wake).
