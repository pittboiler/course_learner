# Physical Oceanography — Syllabus

> Earth & Space · Tier 2 · ~18 lessons · Prereqs: [fluid-dynamics](../fluid-dynamics/syllabus.md) · Roadmap id: `oceanography`

## Goal

Learn to read the ocean as a rotating, stratified fluid and predict how it moves. You will characterize seawater by its temperature, salinity, and (nonlinear) density, close its heat and freshwater budgets, and then set the fluid in motion: derive Ekman transport and pumping from the wind stress, use the Sverdrup balance to build a subtropical gyre, and explain why its return flow is always a narrow western boundary current. From there you assemble the deep ocean — water masses, deep-water formation, and the meridional overturning that carries heat poleward — and finish with the fast surface dynamics: gravity waves, tides, coastal upwelling, and ENSO. Deliberately skipped: biological and chemical oceanography beyond what sets density, and numerical ocean modeling (we reason with balances and scalings, not code).

## Dangerous Checklist

When you finish, you can:

- [ ] Convert in-situ temperature to potential temperature and explain why potential density is the right variable for stratification
- [ ] Compute seawater density from a linearized equation of state and place a water sample on a T–S diagram
- [ ] Compute the buoyancy (Brunt–Väisälä) frequency $N$ from a density profile and judge a water column's stability
- [ ] Close an ocean heat and freshwater budget from surface fluxes and explain the sign of each term
- [ ] Write the geostrophic and thermal-wind balances and read a current off the density field
- [ ] Derive Ekman transport and its $90^\circ$ deflection from the wind, and integrate the Ekman spiral
- [ ] Compute Ekman pumping from the wind-stress curl and predict where the interior ocean converges or diverges
- [ ] Use the Sverdrup balance to get a gyre's interior transport, and explain why the return flow must be a narrow western boundary current
- [ ] Identify the major water masses of a basin and name the processes that form them
- [ ] Estimate the meridional heat transport of the overturning circulation and argue for the ocean's role in climate
- [ ] Derive the dispersion relation for deep- and shallow-water surface waves and distinguish phase from group velocity
- [ ] Explain the equilibrium and dynamical theories of tides, and the mechanism of coastal upwelling and ENSO

## Modules

### Module 1: Seawater properties and structure

Pin down what the fluid *is* — its state variables, its stubbornly nonlinear density, and the stable layering that follows — before making it move.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Temperature, salinity, and pressure: the state of seawater | Name the three variables that set everything, and how we measure them | in-situ temperature, practical/absolute salinity, pressure vs depth, CTD profiles, potential temperature $\theta$ |
| 1.2 | Density and the nonlinear equation of state | Compute density and see why the EOS refuses to be linear | equation of state, thermal expansion $\alpha$, haline contraction $\beta$, potential density $\sigma_\theta$, cabbeling and thermobaricity |
| 1.3 | T–S diagrams and water-mass identification | Read a water sample's origin off a temperature–salinity plot | T–S diagram, isopycnals on T–S axes, mixing lines, water-mass core, conservative tracers |
| 1.4 | Stratification, stability, and the buoyancy frequency | Quantify how strongly the ocean resists vertical motion | static stability, buoyancy (Brunt–Väisälä) frequency $N^2=-\tfrac{g}{\rho}\tfrac{d\rho}{dz}$, pycnocline, internal-wave preview |
| 1.5 | The ocean's heat and freshwater budgets | Balance what enters and leaves the surface, and where it goes | shortwave/longwave/latent/sensible fluxes, $E-P$ freshwater forcing, mixed layer, meridional imbalance |

**Boss problem 1:** Given surface water at $(\theta,S)=(25^\circ\mathrm{C},36.5)$ and deep water at $(3^\circ\mathrm{C},34.7)$, use a linearized equation of state to compute each density and confirm the column is statically stable; place both points and their mixing line on a T–S diagram. Then, for a pycnocline where $\sigma_\theta$ rises by $2\ \mathrm{kg\,m^{-3}}$ over $200\ \mathrm{m}$, compute the buoyancy frequency $N$ and the period $2\pi/N$ of a displaced parcel, and say what that period physically represents.

### Module 2: Wind-driven circulation

Put the ocean on a rotating planet and push it with wind: geostrophy, Ekman layers, and the gyre-scale balance that western boundary currents exist to close.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Rotation, geostrophy, and thermal wind | Reduce large-scale ocean flow to a pressure–Coriolis balance | Coriolis parameter $f$, Rossby number, geostrophic balance, thermal-wind relation, $\beta$-plane |
| 2.2 | The Ekman layer and Ekman transport | Show that wind drives water $90^\circ$ to its right (NH) | surface stress $\boldsymbol\tau$, Ekman spiral, Ekman depth, net transport $\mathbf{M}_E=\boldsymbol\tau\times\hat{\mathbf z}/(\rho f)$ |
| 2.3 | Ekman pumping and the wind-stress curl | Turn the wind's spatial pattern into vertical motion | Ekman convergence/divergence, Ekman pumping $w_E=\tfrac{1}{\rho}\,\hat{\mathbf z}\!\cdot\!\nabla\times(\boldsymbol\tau/f)$, downwelling gyres |
| 2.4 | The Sverdrup balance and the interior gyre | Get the depth-integrated interior transport from the curl alone | Sverdrup relation $\beta V=\tfrac{1}{\rho}\,\hat{\mathbf z}\!\cdot\!\nabla\times\boldsymbol\tau$, potential vorticity, interior southward flow |
| 2.5 | Western boundary currents and Stommel's intensification | Explain the Gulf Stream: why the return flow hugs the west | mass closure, Stommel's $\beta$-effect argument, boundary-layer width, Gulf Stream / Kuroshio |

**Boss problem 2:** A subtropical basin (width $L$, spanning latitudes with Coriolis $f$ and gradient $\beta$) feels an idealized zonal wind stress $\tau_x(y)=-\tau_0\cos(\pi y/L)$, easterlies to the south and westerlies to the north. Compute the meridional Ekman transport, the Ekman pumping $w_E(y)$ and locate the convergence, the Sverdrup interior transport $V(y)$, and — by demanding the basin conserve mass — the total transport the western boundary current must carry back north. Report it in sverdrups ($1\ \mathrm{Sv}=10^6\ \mathrm{m^3\,s^{-1}}$) and compare to the observed Gulf Stream.

### Module 3: Thermohaline circulation and water masses

Descend from the wind-driven surface into the deep ocean: where dense water forms, how the global overturning links the basins, and how much heat it moves.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Water masses of the world ocean | Catalog the deep ocean's building blocks and their formation regions | NADW, AABW, AAIW, Mediterranean/Mode waters, ventilation, spreading along isopycnals |
| 3.2 | Deep-water formation and convection | Understand how surface water gets dense enough to sink | buoyancy loss, open-ocean vs shelf convection, preconditioning, brine rejection, Labrador/Weddell Seas |
| 3.3 | The meridional overturning circulation | Assemble the conveyor: upper and deep limbs, upwelling, and its drivers | AMOC, upwelling and mixing, wind-driven (Southern Ocean) vs buoyancy-driven views, overturning strength |
| 3.4 | Meridional heat transport and the ocean's role in climate | Turn the overturning into a poleward heat flux and a climate lever | ocean heat transport, ocean–atmosphere partition, heat capacity and thermal inertia, carbon uptake, AMOC stability |

**Boss problem 3:** Build Stommel's two-box thermohaline model: two well-mixed boxes (low- and high-latitude) exchanging water at a rate proportional to their density difference, with temperature relaxed fast and salinity forced by $E-P$. Nondimensionalize, find the steady overturning states, and show the system admits two stable circulation modes (a strong thermally-driven mode and a weak/reversed salinity-driven mode). Then, taking a $\sim 18\ \mathrm{Sv}$ overturning with a $\sim 15^\circ\mathrm{C}$ contrast between the warm upper limb and cold deep return, estimate the poleward heat transport in petawatts and compare it to the atmosphere's.

### Module 4: Waves, tides, and the coastal ocean

Speed up: the ocean's fast surface response — dispersive gravity waves, the tides, and the equatorial and coastal dynamics behind upwelling and ENSO.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Surface gravity waves: dispersion and groups | Predict how swell travels, sorts, and outruns the storm that made it | dispersion relation $\omega^2=gk\tanh(kh)$, deep vs shallow water, phase vs group velocity, wave groups |
| 4.2 | Tides: equilibrium and dynamical theory | Explain the twice-daily bulge and why real tides defy it | tide-generating potential, equilibrium tide, diurnal/semidiurnal constituents, Laplace tidal equations, amphidromes |
| 4.3 | Coastal upwelling and boundary dynamics | Connect an alongshore wind to nutrient-rich water at the coast | coastal Ekman transport, upwelling/downwelling favorable winds, coastal jets, eastern boundary systems |
| 4.4 | Equatorial dynamics and ENSO | See how equatorial waves and coupling produce El Niño | vanishing $f$ at the equator, equatorial undercurrent, Kelvin and Rossby waves, Bjerknes feedback, ENSO |

**Boss problem 4:** A distant storm radiates swell of period $T=15\ \mathrm{s}$ across $5000\ \mathrm{km}$ of deep ocean. Using the deep-water dispersion relation, find the wavelength, phase speed, and group speed, and compute how long the swell takes to arrive. Then take a band of periods from $12$–$18\ \mathrm{s}$ and estimate the arrival-time spread of the group — explaining why long-period swell reaches the coast first (dispersive sorting), and check whether the waves are genuinely in the deep-water limit for a $4000\ \mathrm{m}$ ocean.

## Sources of truth

- Marshall & Plumb, *Atmosphere, Ocean, and Climate Dynamics* (primary — level, voice, and the budget/Ekman/gyre development)
- Cushman-Roisin & Beckers, *Introduction to Geophysical Fluid Dynamics* (rotating-fluid mechanics; Ekman and geostrophic dynamics)
- Talley, Pickard, Emery & Swift, *Descriptive Physical Oceanography* (water masses, T–S analysis, and observational grounding)
- Vallis, *Atmospheric and Oceanic Fluid Dynamics* (rigor and the wind-driven/overturning theory when we need it)

## Notes

- This course is the ocean's chapter of geophysical fluid dynamics, so it leans hard on [`fluid-dynamics`](../fluid-dynamics/syllabus.md): the governing equations, the boundary-layer idea (the Ekman layer *is* a rotating boundary layer), vorticity and potential vorticity, and surface-wave dispersion all carry straight over — here with rotation and stratification switched on.
- It runs in close parallel with [`atmospheric-science`](../atmospheric-science/syllabus.md): geostrophy, thermal wind, Ekman pumping, and Rossby waves are the same dynamics in the other fluid — the ocean is just denser, slower, and salt-stratified. Where the two touch (air–sea fluxes, ENSO's coupling) is called out explicitly.
- Module 3 and lesson 4.4 feed directly into [`climate-science`](../climate-science/syllabus.md): the overturning's heat transport, the ocean's thermal inertia and carbon uptake, and ENSO are the ocean's main levers on climate.
