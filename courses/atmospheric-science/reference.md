# Atmospheric Science · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

The whole course is four questions asked of one thin, moist, rotating fluid:
how does it stack vertically ([hydrostatic](#hydrostatic-equation) plus an
[adiabat](#dry-adiabatic-lapse-rate)), what does its water do
([Clausius–Clapeyron](#clausiusclapeyron-relation) and the
[moist adiabat](#moist-adiabatic-lapse-rate)), how does it balance its energy
([effective temperature](#effective-emission-temperature) and the
[emission level](#emission-level)), how does it move
([geostrophic](#geostrophic-wind) and [thermal wind](#thermal-wind)), and what does its
*spin* do ([potential vorticity](#potential-vorticity) and
[Rossby waves](#rossby-waves)). Three things
are worth checking here every single time: **which lapse rate you are talking
about** ([the three of them](#the-three-lapse-rates)), **which humidity variable a
formula wants** ([conversions](#humidity-conversions)), and **whether the balance
you are about to assume is legal at this scale**
([when each balance applies](#which-balance-applies)).

## Notation

| Symbol | Means | First used |
|---|---|---|
| $p$, $\rho$, $T$ | pressure (Pa; 1 hPa = 100 Pa = 1 mbar), density (kg m⁻³), absolute temperature (K) | [1.1](lessons/01-01-composition-vertical-structure.md) |
| $R_d$, $R_v$ | specific gas constant of dry air (287) and of water vapor (461.5), both J kg⁻¹ K⁻¹ | [1.1](lessons/01-01-composition-vertical-structure.md) |
| $\Gamma$ | **environmental** lapse rate, $-\partial T/\partial z$ — what a balloon measures; positive means cooling upward | [1.1](lessons/01-01-composition-vertical-structure.md) |
| $z$, $H$ | height (m) and pressure scale height $R_dT/g$ (m) — the climb that divides $p$ by $e$ | [1.2](lessons/01-02-hydrostatic-equation-barometric-law.md) |
| $Z$, $\Delta Z$ | geopotential height of a pressure surface (m); **thickness** between two of them | [1.2](lessons/01-02-hydrostatic-equation-barometric-law.md) |
| $\alpha$ | **specific volume** $1/\rho$ (m³ kg⁻¹) — collides with albedo below; read from context | [1.3](lessons/01-03-adiabatic-parcels-dry-lapse-rate.md) |
| $c_p$, $c_v$ | specific heats of dry air at constant pressure (1004) and volume (717), J kg⁻¹ K⁻¹ | [1.3](lessons/01-03-adiabatic-parcels-dry-lapse-rate.md) |
| $\Gamma_d$ | **dry adiabatic** lapse rate, $g/c_p = 9.8$ K km⁻¹ — a moving unsaturated parcel, not the air around it | [1.3](lessons/01-03-adiabatic-parcels-dry-lapse-rate.md) |
| $\theta$, $\kappa$ | potential temperature (K) and the exponent $R_d/c_p = 0.286$ | [1.4](lessons/01-04-potential-temperature.md) |
| $N$ | Brunt–Väisälä frequency (s⁻¹) — the buoyancy oscillation rate of a stable layer | [1.4](lessons/01-04-potential-temperature.md) |
| $e$, $e_s$ | vapor pressure and **saturation** vapor pressure (hPa) | [2.1](lessons/02-01-humidity-variables.md) |
| $w$, $q$ | mixing ratio (vapor mass per kg of **dry** air) and specific humidity (per kg of **total** air) | [2.1](lessons/02-01-humidity-variables.md) |
| $\varepsilon$ | $R_d/R_v = M_v/M_d = 0.622$ — a water molecule's mass relative to average air | [2.1](lessons/02-01-humidity-variables.md) |
| $T_d$, $T_v$ | dew point (K or °C) and virtual temperature $T(1+0.61w)$ (K) | [2.1](lessons/02-01-humidity-variables.md) |
| $L_v$ | latent heat of vaporization, $2.5\times10^{6}$ J kg⁻¹ | [2.2](lessons/02-02-saturation-moist-adiabatic-lapse-rate.md) |
| $\Gamma_m$ | **moist (saturated) adiabatic** lapse rate — a *function* of $T$ and $p$, roughly 3.5 to 9 K km⁻¹ | [2.2](lessons/02-02-saturation-moist-adiabatic-lapse-rate.md) |
| $\theta_e$ | equivalent potential temperature — $\theta$ repaired to survive condensation | [2.2](lessons/02-02-saturation-moist-adiabatic-lapse-rate.md) |
| $\sigma$ | **surface tension** of water, 0.0728 N m⁻¹ — collides with Stefan–Boltzmann below | [2.3](lessons/02-03-cloud-precipitation-formation.md) |
| $r_c$, $S_c$ | Köhler critical radius and critical supersaturation — the activation threshold | [2.3](lessons/02-03-cloud-precipitation-formation.md) |
| $B$ | buoyant acceleration, $g\,\Delta T_v/T_v$ (m s⁻²) | [2.4](lessons/02-04-stability-parcel-theory-cape.md) |
| LCL, LFC, EL | lifting condensation level (cloud base), level of free convection, equilibrium level (anvil) | [2.4](lessons/02-04-stability-parcel-theory-cape.md) |
| CAPE, CIN | convective available potential energy and convective inhibition, both J kg⁻¹ | [2.4](lessons/02-04-stability-parcel-theory-cape.md) |
| $\sigma$ | **Stefan–Boltzmann constant**, $5.67\times10^{-8}$ W m⁻² K⁻⁴ | [3.1](lessons/03-01-solar-terrestrial-radiation.md) |
| $S$, $\alpha$ | solar constant 1361 W m⁻² and planetary **albedo** 0.30 — this $\alpha$ is not specific volume | [3.1](lessons/03-01-solar-terrestrial-radiation.md) |
| $T_e$ | effective emission temperature (K) — 254.6 K for Earth | [3.1](lessons/03-01-solar-terrestrial-radiation.md) |
| $\epsilon$ | infrared emissivity (dimensionless, 0 to 1) — about 0.78 for Earth's atmosphere | [3.2](lessons/03-02-greenhouse-effect-energy-budget.md) |
| $\tau$ | optical depth (dimensionless) — the number of $e$-folding absorption lengths, *at a stated wavelength and along a stated path* | [3.3](lessons/03-03-radiative-transfer-vertical-profile.md) |
| $k_\lambda$ | mass absorption coefficient (m² kg⁻¹) at wavelength $\lambda$ | [3.3](lessons/03-03-radiative-transfer-vertical-profile.md) |
| $u$, $v$, $w$ | eastward, northward and vertical wind components (m s⁻¹) — note $w$ collides with mixing ratio | [4.1](lessons/04-01-pressure-gradient-force-equations-of-motion.md) |
| $n$ | the across-isobar coordinate, pointing from low toward high pressure | [4.1](lessons/04-01-pressure-gradient-force-equations-of-motion.md) |
| $\mathrm{Ro}$ | Rossby number $U/(fL)$ — inertia over rotation | [4.1](lessons/04-01-pressure-gradient-force-equations-of-motion.md) |
| $\Omega$, $f$ | Earth's angular velocity $7.292\times10^{-5}$ s⁻¹ and the Coriolis parameter $2\Omega\sin\phi$ (s⁻¹) | [4.2](lessons/04-02-coriolis-effect.md) |
| $\phi$ | latitude (signed: negative in the Southern Hemisphere, so $f$ changes sign) | [4.2](lessons/04-02-coriolis-effect.md) |
| $V_g$, $V_T$ | geostrophic wind (m s⁻¹) and **thermal wind** — a *difference* between two levels, not a wind | [4.3](lessons/04-03-geostrophic-gradient-wind.md), [4.4](lessons/04-04-thermal-wind-general-circulation.md) |
| $R$ | radius of curvature of the flow (m), positive for cyclonic curvature | [4.3](lessons/04-03-geostrophic-gradient-wind.md) |
| $L_d$ | Rossby radius of deformation $NH/f$ (m) — the natural size of a weather system | [4.5](lessons/04-05-air-masses-fronts-cyclones.md) |

| $\zeta$, $\eta$ | relative vorticity $\partial v/\partial x - \partial u/\partial y$ (s⁻¹) and absolute vorticity $\zeta + f$ | [5.1](lessons/05-01-vorticity-circulation.md) |
| $\Gamma_{\text{circ}}$ | circulation $\oint\mathbf{v}\cdot d\boldsymbol\ell$ (m² s⁻¹) — **not** a lapse rate, despite the letter | [5.1](lessons/05-01-vorticity-circulation.md) |
| $q$, PVU | Ertel potential vorticity and its unit, $10^{-6}$ K m² kg⁻¹ s⁻¹ | [5.2](lessons/05-02-potential-vorticity.md) |
| $\beta$ | $df/dy = 2\Omega\cos\phi/a$ (m⁻¹ s⁻¹) — how fast planetary vorticity grows northward | [5.3](lessons/05-03-rossby-waves-beta-effect.md) |
| $K$ (wave) | total horizontal wavenumber, $K^2 = k^2 + l^2$ | [5.3](lessons/05-03-rossby-waves-beta-effect.md) |
| $\omega$ (dynamics) | vertical velocity in pressure coordinates, $Dp/Dt$ — **negative means ascent** | [5.4](lessons/05-04-divergence-vertical-motion-quasi-geostrophic.md) |
| $x$ (optics) | size parameter $2\pi r/\lambda$ — decides Rayleigh vs Mie vs geometric | [3.4](lessons/03-04-scattering-rayleigh-mie-aerosols.md) |
| $\delta$, $h$, $h_0$ | solar declination, hour angle, and half-day angle | [3.5](lessons/03-05-solar-geometry-seasons-insolation.md) |
| $\theta_z$, $Q_{\text{day}}$ | solar zenith angle and daily mean insolation (W m⁻²) | [3.5](lessons/03-05-solar-geometry-seasons-insolation.md) |
| DU | Dobson unit, $2.687\times10^{20}$ molecules m⁻² = 0.01 mm at STP | [3.6](lessons/03-06-ozone-photochemistry-stratosphere.md) |
| $R_n$, $H$, $LE$, $G$ | net radiation, sensible, latent and ground heat fluxes (W m⁻²) | [6.1](lessons/06-01-atmospheric-boundary-layer.md) |
| $B$ (surface) | Bowen ratio $H/LE$ — **not** buoyancy, which is also $B$ | [6.1](lessons/06-01-atmospheric-boundary-layer.md) |
| $u_*$, $z_0$, $k$ | friction velocity (m s⁻¹), roughness length (m), von Kármán's constant 0.4 | [6.1](lessons/06-01-atmospheric-boundary-layer.md) |
| $K$ (turbulence) | eddy viscosity (m² s⁻¹) — **not** the wavenumber above | [6.1](lessons/06-01-atmospheric-boundary-layer.md) |
| $\omega_h$ | horizontal vorticity of the environmental shear (s⁻¹) | [6.2](lessons/06-02-mesoscale-convection-thunderstorms-tornadoes.md) |
| $T_s$, $T_o$, $\Delta k$ | hurricane sea-surface and outflow temperatures, air–sea enthalpy disequilibrium | [6.3](lessons/06-03-tropical-cyclones-tropics.md) |
| $Z$, dBZ | radar reflectivity factor (mm⁶ m⁻³) and its decibel form $10\log_{10}Z$ | [6.4](lessons/06-04-observing-the-atmosphere.md) |
| $T_d$ (forecast) | error **doubling time** (days) — **not** the dew point, which is also $T_d$ | [6.5](lessons/06-05-predictability-two-week-limit.md) |

### Symbol collisions to watch

- $\alpha$ is **specific volume** in Modules 1–2 and **albedo** in Module 3.
- $\sigma$ is **surface tension** in [2.3](lessons/02-03-cloud-precipitation-formation.md) and the **Stefan–Boltzmann constant** in Module 3.
- $w$ is **mixing ratio** in Module 2 and **vertical velocity** in Module 4.
- $N$ is the **Brunt–Väisälä frequency** in [1.4](lessons/01-04-potential-temperature.md) and a **droplet number density** in [2.3](lessons/02-03-cloud-precipitation-formation.md).
- $\phi$ is latitude here, never a velocity potential.

- $K$ is a **wavenumber** in [5.3](lessons/05-03-rossby-waves-beta-effect.md) and an **eddy viscosity** in [6.1](lessons/06-01-atmospheric-boundary-layer.md).
- $B$ is **buoyancy** in [2.4](lessons/02-04-stability-parcel-theory-cape.md) and the **Bowen ratio** in [6.1](lessons/06-01-atmospheric-boundary-layer.md).
- $T_d$ is the **dew point** in Module 2 and an error **doubling time** in [6.5](lessons/06-05-predictability-two-week-limit.md).
- $\omega$ is the **pressure vertical velocity** in [5.4](lessons/05-04-divergence-vertical-motion-quasi-geostrophic.md) and an **angular velocity** elsewhere.
- $\Gamma$ is a **lapse rate** throughout Modules 1–2 but **circulation** in [5.1](lessons/05-01-vorticity-circulation.md); this card writes the latter $\Gamma_{\text{circ}}$.
- $x$ is a **coordinate** in Module 4 and the **size parameter** in [3.4](lessons/03-04-scattering-rayleigh-mie-aerosols.md).

## Definitions

### Environmental lapse rate

How fast the *surrounding* air cools with height — what a radiosonde measures, and the thing a lifted parcel is compared against.

$$\Gamma \equiv -\frac{\partial T}{\partial z}$$

Positive means cooling upward. Global tropospheric average 6.5 K km⁻¹; negative in an inversion and throughout the stratosphere.

*Introduced:* [1.1](lessons/01-01-composition-vertical-structure.md)

### Hydrostatic equation

Pressure falls with height at exactly the rate needed to hold up the air's weight — so pressure at any level *is* the weight of everything above it, per unit area.

$$\frac{dp}{dz} = -\rho g$$

Accurate to about one part in $10^4$ everywhere except deep convective updrafts and mountain waves.

*Introduced:* [1.2](lessons/01-02-hydrostatic-equation-barometric-law.md)

### Scale height

The climb over which pressure falls by a factor of $e$ — and, equivalently, the depth the whole atmosphere would have at uniform sea-level density.

$$H \equiv \frac{R_dT}{g} \approx 8.4\ \mathrm{km\ at\ 288\ K}$$

*Introduced:* [1.2](lessons/01-02-hydrostatic-equation-barometric-law.md)

### Air parcel

An imaginary blob that keeps its identity, exchanges no heat with its surroundings (adiabatic), and matches the ambient pressure instantly.

Both idealizations are good: air conducts heat poorly, and sound travels hundreds of times faster than the parcel moves.

*Introduced:* [1.3](lessons/01-03-adiabatic-parcels-dry-lapse-rate.md)

### Dry adiabatic lapse rate

How fast an *unsaturated moving parcel* changes temperature — cooling by expansion going up, warming by compression coming down, regardless of what the surrounding air is doing.

$$\Gamma_d \equiv \frac{g}{c_p} = \frac{9.81}{1004} = 9.8\ \mathrm{K\,km^{-1}}$$

Contains no density, no parcel size, no ascent speed. A universal constant for a given planet and gas.

*Introduced:* [1.3](lessons/01-03-adiabatic-parcels-dry-lapse-rate.md)

### Potential temperature

The temperature a parcel *would* have if brought adiabatically to 1000 hPa — a tag stamped on an air mass that survives all vertical motion.

$$\theta = T\left(\frac{p_0}{p}\right)^{\kappa}, \qquad p_0 = 1000\ \mathrm{hPa},\ \kappa = \frac{R_d}{c_p} = 0.286$$

Since $c_p\,d\ln\theta = ds$, potential temperature *is* entropy relabelled into kelvin; surfaces of constant $\theta$ are **isentropic surfaces**, and adiabatic flow is confined to them.

*Introduced:* [1.4](lessons/01-04-potential-temperature.md)

### Brunt–Väisälä frequency

The rate at which a parcel displaced vertically in a stable layer oscillates about its equilibrium level.

$$N^2 = \frac{g}{\theta}\frac{d\theta}{dz}$$

About $1.06\times10^{-2}$ s⁻¹ in a standard troposphere, giving a 10-minute period. $N^2 < 0$ means the "oscillation" grows instead — that is convection.

*Introduced:* [1.4](lessons/01-04-potential-temperature.md)

### Mixing ratio and specific humidity

Two nearly identical ways to say how much water is in the air: per kilogram of dry air ($w$), or per kilogram of total air ($q$).

$$w \equiv \frac{m_v}{m_d} = \frac{\varepsilon e}{p-e}, \qquad q \equiv \frac{m_v}{m_v+m_d} = \frac{w}{1+w}$$

Both are conserved under adiabatic ascent until condensation begins. Reported in g kg⁻¹; used in formulas as kg kg⁻¹.

*Introduced:* [2.1](lessons/02-01-humidity-variables.md)

### Dew point

The temperature to which air must be cooled, at constant pressure and water content, to reach saturation. Defined by $e_s(T_d) = e$.

A property of the *water alone* — heating air changes its relative humidity but not its dew point. The **depression** $T - T_d$ is the practical dryness measure.

*Introduced:* [2.1](lessons/02-01-humidity-variables.md)

### Virtual temperature

The temperature dry air would need in order to be as light as this moist air actually is — because water vapor is lighter than average air.

$$T_v \equiv T\,(1 + 0.61w)$$

Always slightly above $T$. Use $T_v$, not $T$, in any buoyancy calculation; in the tropics the difference reaches 3 to 4 K.

*Introduced:* [2.1](lessons/02-01-humidity-variables.md)

### Clausius–Clapeyron relation

The atmosphere's water-holding capacity rises exponentially with temperature — about 7 percent per kelvin, doubling every 10 K.

$$\frac{de_s}{dT} = \frac{L_ve_s}{R_vT^2}, \qquad e_s(T) = e_s(T_0)\exp\!\left[\frac{L_v}{R_v}\left(\frac{1}{T_0}-\frac{1}{T}\right)\right]$$

The general phase-boundary form is derived in [`thermodynamics-physics` 3.3](../thermodynamics-physics/lessons/03-03-phase-transitions-clausius-clapeyron.md); this is its atmospheric specialization, using $\Delta v \approx R_vT/e_s$.

*Introduced:* [2.2](lessons/02-02-saturation-moist-adiabatic-lapse-rate.md)

### Moist adiabatic lapse rate

How fast a *saturated* parcel cools — more slowly than a dry one, because condensation keeps refunding latent heat.

$$\Gamma_m = \Gamma_d\,\frac{1 + \dfrac{L_vw_s}{R_dT}}{1 + \dfrac{L_v^2w_s\varepsilon}{c_pR_dT^2}}$$

**Not a constant.** It ranges from 3.5 K km⁻¹ in warm moist air to nearly 9.8 in cold dry air, because it depends on how much water is available to condense.

*Introduced:* [2.2](lessons/02-02-saturation-moist-adiabatic-lapse-rate.md)

### Lifting condensation level

The height at which a lifted parcel first saturates — the flat base of a cumulus cloud.

$$z_{\mathrm{LCL}} \approx 125\ \mathrm{m} \times (T - T_d)\ \mathrm{in\ kelvin}$$

The 125 m is not empirical: $T$ falls at 9.77 and $T_d$ at 1.78 K km⁻¹, converging at 8.0 K km⁻¹, and $1000/8.0 = 125$.

*Introduced:* [2.2](lessons/02-02-saturation-moist-adiabatic-lapse-rate.md)

### Equivalent potential temperature

Potential temperature repaired so that it survives condensation: condense all the parcel's vapor, let the latent heat warm it, then bring it to 1000 hPa.

$$\theta_e \approx \theta\,\exp\!\left(\frac{L_vw_s}{c_pT}\right)$$

Conserved along a moist adiabat as well as a dry one, so $\partial\theta_e/\partial z$ is the stability criterion for *saturated* ascent, as $\partial\theta/\partial z$ is for dry.

*Introduced:* [2.2](lessons/02-02-saturation-moist-adiabatic-lapse-rate.md)

### Köhler curve

The equilibrium humidity over a solution droplet: curvature raises it, dissolved salt lowers it, and the two together produce a peak.

$$S(r) - 1 \approx \frac{a}{r} - \frac{b}{r^3}, \qquad a = \frac{2\sigma}{\rho_wR_vT},\quad r_c = \sqrt{\frac{3b}{a}},\quad S_c - 1 = \sqrt{\frac{4a^3}{27b}}$$

Below $r_c$ a droplet is stable **haze**; pushed past it, the droplet is **activated** and grows without limit.

*Introduced:* [2.3](lessons/02-03-cloud-precipitation-formation.md)

### Bergeron–Findeisen process

Ice grows at the expense of supercooled water, because ice holds its molecules more tightly and so demands less vapor around it.

Air at water saturation is supersaturated with respect to ice — by 13 percent at −12 °C, where the absolute vapor-pressure gap peaks. This makes most mid-latitude precipitation, which falls as snow and melts on the way down.

*Introduced:* [2.3](lessons/02-03-cloud-precipitation-formation.md)

### CAPE and CIN

The energy a parcel gains once it is buoyant (the fuel), and the energy you must spend to get it there (the lid). Both are *areas* between the parcel path and the sounding.

$$\mathrm{CAPE} = \int_{\mathrm{LFC}}^{\mathrm{EL}}g\,\frac{T_v'-T_v}{T_v}\,dz, \qquad \mathrm{CIN} = \int_{\mathrm{sfc}}^{\mathrm{LFC}}g\,\frac{T_v-T_v'}{T_v}\,dz$$

$$w_{\max} = \sqrt{2\,\mathrm{CAPE}} \quad\text{(an upper bound; real updrafts run near half of it)}$$

*Introduced:* [2.4](lessons/02-04-stability-parcel-theory-cape.md)

### Conditional instability

The ordinary state of the troposphere: stable if the parcel stays unsaturated, unstable if it saturates. The "condition" is whether anything lifts a parcel to its LFC.

$$\Gamma_m < \Gamma < \Gamma_d$$

*Introduced:* [2.4](lessons/02-04-stability-parcel-theory-cape.md)

### Effective emission temperature

The temperature at which a planet radiates away exactly the sunlight it absorbs, averaged over its whole surface.

$$T_e = \left[\frac{S(1-\alpha)}{4\sigma}\right]^{1/4} = 254.6\ \mathrm{K\ for\ Earth}$$

The factor of 4 is the ratio of the emitting sphere ($4\pi R^2$) to the intercepting disc ($\pi R^2$) — geometry, not day and night.

*Introduced:* [3.1](lessons/03-01-solar-terrestrial-radiation.md)

### Greenhouse effect

The atmosphere is nearly transparent to incoming sunlight and nearly opaque to outgoing infrared, so it returns the surface a second copy of the energy the surface already emitted.

$$T_s = T_e\left(\frac{2}{2-\epsilon}\right)^{1/4}, \qquad T_s = 2^{1/4}T_e \ \text{for a single opaque slab}$$

Earth's gap is 33 K ($T_e = 255$ K, $T_s = 288$ K), corresponding to $\epsilon = 0.78$ or "0.64 of an opaque slab." It is a *radiative* effect, unlike a garden greenhouse, which works by stopping convection.

*Introduced:* [3.2](lessons/03-02-greenhouse-effect-energy-budget.md)

### Radiative–convective equilibrium

The troposphere's lapse rate is not set by radiation. Radiation alone would build a profile steeper than $\Gamma_d$ (surface near 333 K); that profile is convectively unstable, so convection fires and flattens it back toward a moist adiabat.

The observed 6.5 K km⁻¹ is the outcome of that negotiation. Above the tropopause, where solar heating enters *in place* rather than at the bottom, the layer is stable and radiation alone sets the profile.

*Introduced:* [3.2](lessons/03-02-greenhouse-effect-energy-budget.md), [3.3](lessons/03-03-radiative-transfer-vertical-profile.md)

### Optical depth

The number of $e$-folding absorption lengths along a path — the honest measure of how thick an absorbing medium is.

$$\tau_\lambda \equiv \int k_\lambda\rho\,ds, \qquad I = I_0e^{-\tau} \quad\text{(Beer's law)}$$

Always quote the wavelength and the path: slant paths at zenith angle $\theta$ have $\tau_{\text{slant}} = \tau_{\text{vertical}}/\cos\theta$.

*Introduced:* [3.3](lessons/03-03-radiative-transfer-vertical-profile.md)

### Emission level

The level from which radiation at a given wavelength actually escapes to space — roughly where the remaining optical depth to space falls to 1.

Earth's mean emission level sits near 5 km, where the temperature is 255 K. Adding greenhouse gas raises it into colder air, so the planet emits less and must warm. A doubling of $\mathrm{CO_2}$ raises it about 150 m.

*Introduced:* [3.3](lessons/03-03-radiative-transfer-vertical-profile.md)

### Pressure-gradient force

Pressure exerts no net force; only its *gradient* does. On a map, that means the isobar spacing, not the pressure values.

$$\mathbf{F}_{\text{PGF}} = -\frac{1}{\rho}\nabla_Hp$$

Points from high toward low pressure, perpendicular to the isobars, and is larger where the air is thinner.

*Introduced:* [4.1](lessons/04-01-pressure-gradient-force-equations-of-motion.md)

### Rossby number

Inertia over rotation — the number that tells you in advance whether rotation controls a flow.

$$\mathrm{Ro} \equiv \frac{U}{fL}$$

$\mathrm{Ro} \ll 1$: geostrophic (weather systems, 0.1). $\mathrm{Ro} \sim 1$: gradient wind (hurricanes, sea breezes). $\mathrm{Ro} \gg 1$: rotation irrelevant (tornadoes, $10^3$–$10^4$).

*Introduced:* [4.1](lessons/04-01-pressure-gradient-force-equations-of-motion.md)

### Coriolis parameter

The rate at which a rotating frame deflects a moving parcel sideways — twice the vertical component of the planet's rotation.

$$f = 2\Omega\sin\phi, \qquad \Omega = \frac{2\pi}{86\,164\ \mathrm{s}} = 7.292\times10^{-5}\ \mathrm{s^{-1}}$$

Zero at the equator, maximal at the poles, negative in the Southern Hemisphere. Acts perpendicular to the velocity, so it does **no work** and changes no speed. Note the sidereal day, not 86,400 s.

*Introduced:* [4.2](lessons/04-02-coriolis-effect.md)

### Geostrophic wind

The wind that results when the pressure-gradient force and the Coriolis force cancel exactly — blowing *along* the isobars rather than across them.

$$V_g = -\frac{1}{\rho f}\frac{\partial p}{\partial n} \qquad\text{or, on a pressure surface,}\qquad V_g = -\frac{g}{f}\frac{\partial Z}{\partial n}$$

**Buys-Ballot's law:** stand with your back to the wind and low pressure is on your left (Northern Hemisphere). Fails within about 10 degrees of the equator, where $f \to 0$.

*Introduced:* [4.3](lessons/04-03-geostrophic-gradient-wind.md)

### Gradient wind

Geostrophic balance corrected for curvature: a turning parcel needs a net inward force, so the two forces cannot cancel exactly.

$$\frac{V^2}{R} + fV = fV_g$$

**Subgeostrophic** around a low, **supergeostrophic** around a high — and no anticyclonic solution exists at all unless $V_g \le fR/4$, which is why intense tight highs do not occur.

*Introduced:* [4.3](lessons/04-03-geostrophic-gradient-wind.md)

### Thermal wind

A horizontal temperature gradient does not make wind; it makes wind **shear**. Warm columns are thicker, so pressure surfaces tilt more with height.

$$\mathbf{V}_T \equiv \mathbf{V}_g(p_2)-\mathbf{V}_g(p_1) = \frac{R_d}{f}\ln\!\left(\frac{p_1}{p_2}\right)\hat{\mathbf{k}}\times\nabla_H\overline{T} \qquad\text{or}\qquad \frac{\partial V_g}{\partial z} \approx \frac{g}{fT}\left|\frac{\partial T}{\partial n}\right|$$

Blows with cold air on its left (Northern Hemisphere). Earth's equator-to-pole gradient, accumulated over 10 km, *is* the jet stream.

*Introduced:* [4.4](lessons/04-04-thermal-wind-general-circulation.md)

### Baroclinic instability

Cold air beside warm air is a leaning wall: the centre of mass could be lowered by letting the cold slide under. That stored **available potential energy** feeds growing waves on a front.

The preferred size is set by the Rossby radius of deformation $L_d = NH/f \approx 900$ km, so weather systems are a few thousand kilometres across — not an accident of geography but a consequence of stratification, depth and rotation.

*Introduced:* [4.5](lessons/04-05-air-masses-fronts-cyclones.md)

### Skew-T log-p diagram

The chart a sounding is plotted on: pressure logarithmic on the vertical (so height is nearly linear), temperature sheared 45 degrees to the right (so isotherms and adiabats are nearly perpendicular).

Because a shear has determinant 1, **area is preserved**, and CAPE remains readable as the area between the parcel and environment curves:

$$\mathrm{CAPE} = -\int_{\ln p_{\mathrm{LFC}}}^{\ln p_{\mathrm{EL}}} R_d\,(T_v'-T_v)\,d\ln p$$

*Introduced:* [2.5](lessons/02-05-skew-t-log-p-diagram.md)

### Cloud genera

Ten names from two questions: how high (cirro- for 5–13 km, alto- for 2–7 km, no prefix below 2 km) and what shape (stratus = layered = stable, cumulus = heaped = convective, nimbus = precipitating).

A cloud reports its own LCL (the flat base), the depth of the buoyant layer (its vertical extent) and the EL (its anvil).

*Introduced:* [2.6](lessons/02-06-cloud-classification.md)

### Size parameter

The one number that decides how a particle scatters light: its circumference divided by the wavelength.

$$x = \frac{2\pi r}{\lambda}$$

$x \ll 1$ Rayleigh ($\sigma \propto \lambda^{-4}$, blue sky); $x \sim 1$ Mie (aerosol, near-colourless haze); $x \gg 1$ geometric (white cloud, rainbows, halos).

*Introduced:* [3.4](lessons/03-04-scattering-rayleigh-mie-aerosols.md)

### Daily insolation

The energy per unit area per day a latitude receives, combining beam spreading ($\cos\theta_z$) with day length.

$$Q_{\text{day}} = \frac{S}{\pi}\left(\frac{\bar d}{d}\right)^{2}\Big[h_0\sin\phi\sin\delta + \cos\phi\cos\delta\sin h_0\Big]$$

At the June solstice the North Pole receives 541 W m⁻² against the equator's 397 — more, because it never sets.

*Introduced:* [3.5](lessons/03-05-solar-geometry-seasons-insolation.md)

### Chapman layer

A layer formed where a rising supply of light meets a falling supply of absorber: production peaks where the optical depth reaches 1.

$$P \propto \tau e^{-\tau}, \qquad \frac{dP}{d\tau} = 0 \ \text{at}\ \tau = 1$$

Governs ozone production (peak near 35–40 km, though the ozone *density* peak sits near 22 km after transport) and the ionospheric layers.

*Introduced:* [3.6](lessons/03-06-ozone-photochemistry-stratosphere.md)

### Relative and absolute vorticity

Local spin: whether a tiny paddle wheel dropped into the flow would turn. Curvature and shear both count.

$$\zeta = \frac{\partial v}{\partial x} - \frac{\partial u}{\partial y} = \frac{V}{R_s} - \frac{\partial V}{\partial n}, \qquad \eta = \zeta + f$$

Positive is cyclonic in the Northern Hemisphere. $f$ *is* the planetary vorticity, and it usually exceeds $\zeta$.

*Introduced:* [5.1](lessons/05-01-vorticity-circulation.md)

### Potential vorticity

Absolute vorticity divided by the depth of the column carrying it — conserved following adiabatic, frictionless flow, so it tags an air mass the way $\theta$ does.

$$\frac{D}{Dt}\left(\frac{\zeta+f}{h}\right) = 0 \qquad\text{(shallow water)}, \qquad q = -g(\zeta_\theta+f)\frac{\partial\theta}{\partial p} \qquad\text{(Ertel)}$$

Troposphere about 0.4 PVU, stratosphere about 6; the **2 PVU surface defines the dynamic tropopause**. PV is *invertible*: given the PV field and a balance condition, the whole wind and temperature field follows.

*Introduced:* [5.2](lessons/05-02-potential-vorticity.md)

### Beta effect

The northward increase of planetary vorticity, which supplies the restoring mechanism for Rossby waves.

$$\beta = \frac{df}{dy} = \frac{2\Omega\cos\phi}{a} = 1.62\times10^{-11}\ \mathrm{m^{-1}s^{-1}}\ \text{at}\ 45^\circ$$

Largest at the **equator**, zero at the poles — the opposite of $f$.

*Introduced:* [5.3](lessons/05-03-rossby-waves-beta-effect.md)

### Rossby waves

Meanders of the jet, propagating **westward relative to the flow** at a rate that grows as the square of the wavelength.

$$c = \bar u - \frac{\beta}{K^2}, \qquad c_g = \bar u + \frac{\beta}{k^2}, \qquad L_s = 2\pi\sqrt{\frac{\bar u}{\beta}}$$

Short waves ride east with the flow; long waves march west; the stationary wavelength ($\approx 7000$ km at $\bar u = 20\ \mathrm{m\,s^{-1}}$) is anchored by mountains and fits 4 to 6 times around a latitude circle. A stalled long wave is a **block**.

*Introduced:* [5.3](lessons/05-03-rossby-waves-beta-effect.md)

### Quasi-geostrophic omega equation

The diagnostic that turns a balanced horizontal flow into a vertical motion — the ageostrophic residual that makes all the weather.

$$\sigma\nabla^2\omega + f_0^2\frac{\partial^2\omega}{\partial p^2} = f_0\frac{\partial}{\partial p}\Big[\mathbf{v}_g\!\cdot\!\nabla(\zeta_g+f)\Big] + \frac{R}{p}\nabla^2\Big[\mathbf{v}_g\!\cdot\!\nabla T\Big]$$

Read it as a checklist: **ascent** where cyclonic vorticity advection increases with height, and where warm advection is a maximum. Remember $\omega < 0$ means ascent.

*Introduced:* [5.4](lessons/05-04-divergence-vertical-motion-quasi-geostrophic.md)

### Ekman pumping

The ascent forced out of the top of the boundary layer by frictional convergence — the mechanism that spins a cyclone down.

$$w_E = \zeta_g\sqrt{\frac{K}{2f}}, \qquad \tau_E = \frac{H_v}{\sqrt{Kf/2}} \approx 4\text{–}5\ \text{days}$$

*Introduced:* [6.1](lessons/06-01-atmospheric-boundary-layer.md)

### Deep-layer shear

The vector wind difference between the surface and 6 km — the variable that decides a thunderstorm's *mode*, independently of its CAPE.

Under 10 m s⁻¹ single cells; 10–20 multicells; over 20 supercells. Shear tilts the updraft away from its own precipitation, and supplies the horizontal vorticity that tilting and stretching turn into a mesocyclone.

*Introduced:* [6.2](lessons/06-02-mesoscale-convection-thunderstorms-tornadoes.md)

### Potential intensity

The ceiling on a tropical cyclone's wind, from treating it as a Carnot engine between a warm sea and a cold outflow layer.

$$\varepsilon = \frac{T_s-T_o}{T_s}, \qquad V_{\max}^2 = \frac{C_k}{C_D}\cdot\frac{T_s-T_o}{T_o}\cdot\Delta k$$

With $T_s = 300$ K, $T_o = 200$ K, $C_k/C_D = 0.9$ and $\Delta k = 10^4$ J kg⁻¹, $V_{\max} = 67\ \mathrm{m\,s^{-1}}$ — Category 4. Storms usually fall short; shear and dry air are the usual reasons.

*Introduced:* [6.3](lessons/06-03-tropical-cyclones-tropics.md)

### Radar reflectivity

Backscattered power from precipitation, weighted by the **sixth power** of drop diameter, converted to rain rate by an empirical fit.

$$Z = \int N(D)D^6dD, \qquad \mathrm{dBZ} = 10\log_{10}Z, \qquad Z = 200R^{1.6}$$

The $D^6$ weighting is why hail masquerades as torrential rain above about 55 dBZ, and why cloud droplets are invisible.

*Introduced:* [6.4](lessons/06-04-observing-the-atmosphere.md)

### Predictability limit

Errors grow exponentially and saturate at climatology, so the useful forecast range depends only *logarithmically* on the initial error.

$$e(t) = e_0 2^{\,t/T_d}, \qquad t_{\text{limit}} = T_d\log_2\!\left(\frac{e_{\text{sat}}}{e_0}\right) = 2\log_2(100) = 13.3\ \text{days}$$

A tenfold better analysis buys 6.6 days. Weather is an **initial-value** problem and is limited; climate is a **boundary-value** problem and is not.

*Introduced:* [6.5](lessons/06-05-predictability-two-week-limit.md)

## Formulas and rules

### The three lapse rates

Keeping these apart is the single most important piece of bookkeeping in the course.

| Symbol | Applies to | Value | Constant? |
|---|---|---|---|
| $\Gamma$ | the **environment**, measured by a balloon | 6.5 K km⁻¹ average; anything from negative to over 10 | no — varies hourly |
| $\Gamma_d$ | a **moving unsaturated parcel** | $g/c_p = 9.8$ K km⁻¹ | yes |
| $\Gamma_m$ | a **moving saturated parcel** | 3.5 to 9 K km⁻¹ | no — depends on $T$, $p$ |

*From* [1.1](lessons/01-01-composition-vertical-structure.md), [1.3](lessons/01-03-adiabatic-parcels-dry-lapse-rate.md), [2.2](lessons/02-02-saturation-moist-adiabatic-lapse-rate.md)

### Stability criteria

| Condition | Name | Dry parcel | Saturated parcel |
|---|---|---|---|
| $\Gamma < \Gamma_m$ | absolutely stable | stable | stable |
| $\Gamma_m < \Gamma < \Gamma_d$ | **conditionally unstable** | stable | unstable |
| $\Gamma > \Gamma_d$ | absolutely unstable | unstable | unstable |
| $d\theta_e/dz < 0$ through a layer | convective (potential) instability | destabilizes when the whole layer is lifted | |

Equivalently: $d\theta/dz > 0$ is stable to dry ascent, $d\theta_e/dz > 0$ to saturated ascent, and

$$\frac{d\theta}{dz} = \frac{\theta}{T}(\Gamma_d - \Gamma).$$

*From* [1.4](lessons/01-04-potential-temperature.md), [2.4](lessons/02-04-stability-parcel-theory-cape.md)

### Vertical structure

| Quantity | Formula |
|---|---|
| Ideal gas, per unit mass | $p = \rho R_dT$ |
| Hydrostatic | $dp/dz = -\rho g$ |
| Barometric (isothermal) | $p = p_0e^{-z/H}$, $H = R_dT/g$ |
| Hypsometric (thickness) | $Z_2 - Z_1 = \dfrac{R_d\overline{T}}{g}\ln\dfrac{p_1}{p_2}$ |
| Constant-lapse-rate profile | $p = p_0\left(1-\dfrac{\Gamma z}{T_0}\right)^{g/(R_d\Gamma)}$ |
| Poisson | $\theta = T(p_0/p)^{\kappa}$, $\kappa = 0.286$ |

*From* [1.2](lessons/01-02-hydrostatic-equation-barometric-law.md), [1.3](lessons/01-03-adiabatic-parcels-dry-lapse-rate.md), [1.4](lessons/01-04-potential-temperature.md)

### Humidity conversions

| Have | Want | Use |
|---|---|---|
| $e$, $p$ | $w$ | $w = \varepsilon e/(p-e)$, $\varepsilon = 0.622$ |
| $w$, $p$ | $e$ | $e = wp/(\varepsilon+w)$ |
| $w$ | $q$ | $q = w/(1+w)$ |
| $e$, $T$ | RH | $\mathrm{RH} = e/e_s(T)$ |
| $e$ | $T_d$ | solve $e_s(T_d) = e$ |
| $T$, $T_d$ | $z_{\mathrm{LCL}}$ | 125 m per kelvin of depression |
| $T$, $w$ | $T_v$ | $T_v = T(1+0.61w)$ |

Approximating $w \approx \varepsilon e/p$ understates $w$ by a fraction $e/p$ — 4 percent in the tropics, negligible in mid-latitude winter.

*From* [2.1](lessons/02-01-humidity-variables.md), [2.2](lessons/02-02-saturation-moist-adiabatic-lapse-rate.md)

### Saturation vapor pressure over water

| $T$ | $e_s$ (hPa) | | $T$ | $e_s$ (hPa) |
|---|---|---|---|---|
| −10 °C | 2.87 | | 20 °C | 23.4 |
| 0 °C | 6.11 | | 25 °C | 31.7 |
| 5 °C | 8.72 | | 30 °C | 42.5 |
| 10 °C | 12.3 | | 35 °C | 56.3 |
| 15 °C | 17.0 | | 40 °C | 73.8 |

Over **ice**, $e_s$ is lower: ratios of 1.05 at −5 °C, 1.13 at −12 °C, 1.22 at −20 °C, 1.48 at −40 °C. The *absolute* difference peaks near −12 °C, which is where the Bergeron process is most vigorous.

*From* [2.2](lessons/02-02-saturation-moist-adiabatic-lapse-rate.md), [2.3](lessons/02-03-cloud-precipitation-formation.md)

### Moist adiabatic lapse rate, tabulated

| $T$, $p$ | $w_s$ | $\Gamma_m$ |
|---|---|---|
| 30 °C, 1000 hPa | 27.6 g kg⁻¹ | 3.5 K km⁻¹ |
| 20 °C, 900 hPa | 16.6 | 4.1 |
| 10 °C, 800 hPa | 9.7 | 4.8 |
| 0 °C, 700 hPa | 5.5 | 5.8 |
| −20 °C, 500 hPa | 1.6 | 7.7 |
| −40 °C, 300 hPa | 0.4 | 9.0 |

*From* [2.2](lessons/02-02-saturation-moist-adiabatic-lapse-rate.md)

### Cloud microphysics scales

| Quantity | Value |
|---|---|
| Cloud droplet radius | 5 to 15 micrometres |
| Raindrop radius | about 1 mm — a **million** cloud droplets by volume |
| CCN number density | 100 cm⁻³ maritime, 1000 cm⁻³ polluted; $r \propto N^{-1/3}$ at fixed water content |
| Collection threshold | collision efficiency becomes appreciable above about 20 micrometres radius |
| Diffusional growth | $r^2(t) = r_0^2 + 2G(S-1)t$ — 17 min to 20 micrometres, 29 **days** to 1 mm |
| Terminal velocity (Stokes) | $v_t = 2\rho_wgr^2/(9\mu)$, $\mu = 1.8\times10^{-5}$ Pa s — valid only below about 30 micrometres radius |

*From* [2.3](lessons/02-03-cloud-precipitation-formation.md)

### CAPE, read as a forecast

| CAPE (J kg⁻¹) | Verdict |
|---|---|
| under 500 | little or no convection |
| 500–1500 | ordinary showers and thunderstorms |
| 1500–2500 | strong storms, severe possible |
| over 2500 | severe likely, given a trigger and shear |

*From* [2.4](lessons/02-04-stability-parcel-theory-cape.md)

### Radiation

| Quantity | Formula / value |
|---|---|
| Stefan–Boltzmann | $F = \sigma T^4$, $\sigma = 5.67\times10^{-8}$ W m⁻² K⁻⁴ |
| Wien displacement | $\lambda_{\max} = 2898\ \mathrm{\mu m\,K}/T$ |
| Solar constant | $S = \sigma T_\odot^4(R_\odot/d)^2 = 1361$ W m⁻² |
| Effective temperature | $T_e = [S(1-\alpha)/4\sigma]^{1/4}$ |
| Any star and planet | $T_e = T_\star\sqrt{R_\star/2d}\,(1-\alpha)^{1/4}$ — planet radius drops out |
| $N$ opaque slabs | $T_s = (N+1)^{1/4}T_e$ |
| One slab, emissivity $\epsilon$ | $T_s = T_e[2/(2-\epsilon)]^{1/4}$ |
| Beer's law | $I = I_0e^{-\tau}$; airmass factor $1/\cos\theta$ |
| Emission-level shift | $\delta F = 4\sigma T_e^3\Gamma\,\delta z = 0.024\ \mathrm{W\,m^{-2}}$ per metre |

Shortwave and longwave split at 4 micrometres: the Sun peaks at 0.5, Earth at 11.

*From* [3.1](lessons/03-01-solar-terrestrial-radiation.md), [3.2](lessons/03-02-greenhouse-effect-energy-budget.md), [3.3](lessons/03-03-radiative-transfer-vertical-profile.md)

### The global energy budget

All in W m⁻², global annual means.

| Flux | Value |
|---|---|
| Incoming solar at top of atmosphere | 340 |
| Reflected | 100 |
| Absorbed by the planet | 240 |
| — by the atmosphere | 79 |
| — by the surface | 161 |
| Surface longwave emission | 398 |
| **Back radiation** | **342** |
| Net surface longwave loss | 56 |
| Latent heat (evaporation) | 84 |
| Sensible heat (thermals) | 20 |
| Outgoing longwave to space | 239 |

Three readings worth carrying: back radiation (342) is more than **double** the sunlight the surface absorbs (161); non-radiative fluxes are **21 percent** of the surface's total loss; and the atmosphere receives only 79 of its 581 W m⁻² input from sunlight — it is heated overwhelmingly *from below*.

*From* [3.2](lessons/03-02-greenhouse-effect-energy-budget.md)

### Infrared absorbers

| Absorber | Bands |
|---|---|
| $\mathrm{H_2O}$ | 6.3 micrometres, plus a rotational continuum beyond 18 — the largest contributor |
| $\mathrm{CO_2}$ | 15 micrometres, on the peak of Earth's Planck curve |
| $\mathrm{O_3}$ | 9.6 micrometres; 0.2 to 0.3 micrometres in the ultraviolet (this is what warms the stratosphere) |
| **Window** | 8 to 12 micrometres — roughly 22 percent of the surface's emission escapes straight to space |

$\mathrm{N_2}$ and $\mathrm{O_2}$ are symmetric diatomics with no dipole moment and essentially no infrared absorption, which is why 99 percent of the atmosphere is irrelevant here.

*From* [3.3](lessons/03-03-radiative-transfer-vertical-profile.md)

### Dynamics

| Quantity | Formula |
|---|---|
| Horizontal momentum | $\dfrac{Du}{Dt} = -\dfrac{1}{\rho}\dfrac{\partial p}{\partial x} + fv + F_x$, $\dfrac{Dv}{Dt} = -\dfrac{1}{\rho}\dfrac{\partial p}{\partial y} - fu + F_y$ |
| Coriolis parameter | $f = 2\Omega\sin\phi$ |
| Rossby number | $\mathrm{Ro} = U/(fL)$ |
| Geostrophic wind | $V_g = -(1/\rho f)\,\partial p/\partial n = -(g/f)\,\partial Z/\partial n$ |
| Gradient wind | $V^2/R + fV = fV_g$ |
| Cyclostrophic | $V = \sqrt{(R/\rho)\,|\partial p/\partial n|}$ |
| Inertial oscillation | $r = V/f$, period $2\pi/f$ |
| Thermal wind | $\partial V_g/\partial z \approx (g/fT)\,|\partial T/\partial n|$ |
| Deformation radius | $L_d = NH/f \approx 900$ km |

*From* [4.1](lessons/04-01-pressure-gradient-force-equations-of-motion.md), [4.2](lessons/04-02-coriolis-effect.md), [4.3](lessons/04-03-geostrophic-gradient-wind.md), [4.4](lessons/04-04-thermal-wind-general-circulation.md), [4.5](lessons/04-05-air-masses-fronts-cyclones.md)

### Coriolis parameter by latitude

| Latitude | $f$ (s⁻¹) | Inertial period |
|---|---|---|
| 0° | 0 | infinite |
| 10° | $2.53\times10^{-5}$ | 68.9 h |
| 30° | $7.29\times10^{-5}$ | 23.9 h |
| 45° | $1.031\times10^{-4}$ | 16.9 h |
| 60° | $1.263\times10^{-4}$ | 13.8 h |
| 90° | $1.458\times10^{-4}$ | 12.0 h |

*From* [4.2](lessons/04-02-coriolis-effect.md)

### Which balance applies

| Regime | $\mathrm{Ro}$ | Balance | Example |
|---|---|---|---|
| Geostrophic | $\ll 1$ (0.1) | PGF vs Coriolis | mid-latitude cyclone |
| Gradient | $\sim 1$ | PGF vs Coriolis vs curvature | hurricane, sea breeze |
| Cyclostrophic | $\gg 1$ ($10^3$–$10^4$) | PGF vs curvature only | tornado, dust devil |
| Hydrostatic | (vertical) | vertical PGF vs gravity | everywhere except deep updrafts |

Adding friction to any of these turns the wind across the isobars toward low pressure — 10 to 20 degrees over ocean, 25 to 45 over land — which is what makes lows converge and rain.

*From* [4.1](lessons/04-01-pressure-gradient-force-equations-of-motion.md), [4.3](lessons/04-03-geostrophic-gradient-wind.md)

### Wind, height and advection

| Wind with height | Name | Diagnosis |
|---|---|---|
| turns clockwise (S → W) | veering | **warm** advection |
| turns counterclockwise (W → S) | backing | **cold** advection |

*From* [4.4](lessons/04-04-thermal-wind-general-circulation.md)

### The general circulation

| Feature | Latitude | Motion | Weather |
|---|---|---|---|
| ITCZ | near 0° | rising | rainforest belt |
| Hadley cell | 0–30° | direct overturning | trade winds at the surface |
| Subtropical high | near 30° | sinking | the world's desert belt |
| Subtropical jet | near 30°, tropopause | — | angular-momentum limit of the Hadley cell |
| Westerlies | 30–60° | eddy-dominated | the mid-latitude storm track |
| Polar front | near 60° | rising | cyclogenesis |
| Polar jet | near 60°, tropopause | — | thermal wind above the polar front |
| Polar easterlies | 60–90° | sinking at the pole | polar desert |

**Rising branches are wet, sinking branches are dry** — that one rule places every major climate zone on Earth.

*From* [4.4](lessons/04-04-thermal-wind-general-circulation.md)

### Air masses and fronts

| Code | Source | Character |
|---|---|---|
| cA / cP | Arctic ice, high-latitude continents | cold, dry, stable |
| mP | high-latitude oceans | cool, moist, conditionally unstable |
| cT | subtropical deserts | hot, very dry |
| mT | subtropical oceans | warm, very moist — severe-convection fuel |

| Front | Slope | Weather |
|---|---|---|
| Warm | about 1 in 200 | shallow ascent, broad stratiform cloud 1000+ km ahead, hours of steady rain |
| Cold | about 1 in 50 | steep forced ascent, narrow convective band, sharp wind shift, passes in hours |
| Occluded | — | warm air lifted clear of the surface; the low is deepest and its fuel is gone |

*From* [4.5](lessons/04-05-air-masses-fronts-cyclones.md)

### The five skew-T line families

| Family | Appearance | Use |
|---|---|---|
| Isobars | horizontal | pressure levels |
| Isotherms | straight, 45° up-right | temperature |
| Dry adiabats | curved, steeply up-left | unsaturated parcel path |
| Moist adiabats | curved, less steep, straightening when cold | saturated parcel path |
| Saturation mixing ratio | dashed, slightly up-right | follow from $T_d$ to find the LCL |

Construction: dry adiabat from $T$ meets the mixing-ratio line from $T_d$ at the **LCL**; moist adiabat above; first crossing to the warm side is the **LFC**, the return crossing is the **EL**.

*From* [2.5](lessons/02-05-skew-t-log-p-diagram.md)

### The ten cloud genera

| Étage | Layered | Heaped | Precipitating |
|---|---|---|---|
| High, 5–13 km (ice) | cirrostratus | cirrocumulus | — (plus **cirrus**) |
| Middle, 2–7 km | altostratus | altocumulus | nimbostratus |
| Low, 0–2 km | stratus | stratocumulus, **cumulus** | cumulonimbus |

Diagnostics: 22° halo means ice ($\delta_{\min} = 2\arcsin(n\sin\tfrac{A}{2}) - A$, $n = 1.31$, $A = 60^\circ$); lenticular means a mountain wave of wavelength $\lambda = 2\pi U/N$; altocumulus castellanus means mid-level instability; warm-front sequence is cirrus → cirrostratus → altostratus → nimbostratus.

*From* [2.6](lessons/02-06-cloud-classification.md)

### Scattering

| Scatterer | $x$ at 0.5 micrometres | Regime |
|---|---|---|
| Air molecule | 0.002 | Rayleigh |
| Aerosol (0.5 micrometres) | 6.3 | Mie |
| Cloud droplet (10 micrometres) | 126 | geometric |

Rayleigh optical depth $\tau_R \approx 0.0086\lambda^{-4}$ ($\lambda$ in micrometres): 0.221 at 0.45, 0.097 at 0.55, 0.049 at 0.65. At the horizon (airmass 38) the transmitted beam is 690 times richer in red than blue. Asymmetry parameter $g = 0$ for Rayleigh, about 0.85 for cloud droplets.

*From* [3.4](lessons/03-04-scattering-rayleigh-mie-aerosols.md)

### Solar geometry

| Quantity | Formula |
|---|---|
| Zenith angle | $\cos\theta_z = \sin\phi\sin\delta + \cos\phi\cos\delta\cos h$ |
| Half-day angle | $\cos h_0 = -\tan\phi\tan\delta$ (day length $= 2h_0/15^\circ$ hours) |
| Polar circles | $\lvert\phi\rvert = 90^\circ - 23.44^\circ = 66.56^\circ$ |
| Daily insolation | $Q = \dfrac{S}{\pi}\left(\dfrac{\bar d}{d}\right)^2\big[h_0\sin\phi\sin\delta + \cos\phi\cos\delta\sin h_0\big]$ |
| At the pole | $Q = S\sin\delta$ (the sun circles at fixed elevation) |

June-solstice values: 90°N 541, 66.6°N 497, 45°N 499, 0° 397 W m⁻². Perihelion is in **January**, and the flux range over the year is 6.9 percent.

*From* [3.5](lessons/03-05-solar-geometry-seasons-insolation.md)

### Ozone

$$\mathrm{O_2} + h\nu\,(\lambda<242\ \mathrm{nm}) \to 2\mathrm{O}; \quad \mathrm{O}+\mathrm{O_2}+M \to \mathrm{O_3}; \quad \mathrm{O_3}+h\nu\,(\lambda<320\ \mathrm{nm}) \to \mathrm{O_2}+\mathrm{O}; \quad \mathrm{O}+\mathrm{O_3} \to 2\mathrm{O_2}$$

The middle pair is fast and cycles without net loss — **that is the heating**. Catalytic cycles ($\mathrm{ClO}_x$, $\mathrm{NO}_x$, $\mathrm{HO}_x$) imitate the last reaction with the catalyst returned; one Cl atom destroys about $10^5$ ozone molecules. Column 300 DU = 3 mm at STP; ozone-hole threshold 220 DU. UV-C fully absorbed, UV-B partly, UV-A barely.

*From* [3.6](lessons/03-06-ozone-photochemistry-stratosphere.md)

### Vorticity and potential vorticity

| Quantity | Formula | Typical value |
|---|---|---|
| Relative vorticity | $\zeta = \partial_x v - \partial_y u = V/R_s - \partial V/\partial n$ | $10^{-5}$ to $10^{-4}$ s⁻¹ |
| Absolute vorticity | $\eta = \zeta + f$ | dominated by $f$ |
| Circulation | $\Gamma_{\text{circ}} = \oint\mathbf{v}\cdot d\boldsymbol\ell = \iint\zeta\,dA$ | — |
| Vorticity equation | $D\eta/Dt = -\eta\,\nabla\!\cdot\!\mathbf{v}$ | — |
| Shallow-water PV | $(\zeta+f)/h$ conserved | — |
| Ertel PV | $q = -g(\zeta_\theta+f)\,\partial\theta/\partial p$ | 0.4 PVU trop., 6 PVU strat. |
| Solid-body rotation | $\zeta = 2\omega$ | — |
| Irrotational vortex | $V = k/r$ gives $\zeta = 0$ but $\Gamma_{\text{circ}} = 2\pi k$ | — |

*From* [5.1](lessons/05-01-vorticity-circulation.md), [5.2](lessons/05-02-potential-vorticity.md)

### Rossby wave speeds at 45°N ($\bar u = 20$ m s⁻¹)

| $L$ | $\beta/K^2$ | $c$ |
|---|---|---|
| 3000 km | 3.7 m s⁻¹ | +16.3 (east) |
| 4000 km | 6.6 | +13.4 (east) |
| 6000 km | 14.8 | +5.2 (east) |
| 7000 km | 20.1 | ≈ 0 (**stationary**) |
| 10 000 km | 41.0 | −21.0 (**west**) |

$L_s = 2\pi\sqrt{\bar u/\beta}$; the 45°N circumference is 28 300 km, so 4 to 6 waves fit. Winter's faster jet gives longer stationary waves (wavenumber 3) than summer's (wavenumber 5).

*From* [5.3](lessons/05-03-rossby-waves-beta-effect.md)

### Vertical motion: the forcing checklist

| Forcing | Result |
|---|---|
| Cyclonic vorticity advection increasing with height | **ascent** |
| Warm advection | **ascent** |
| Anticyclonic vorticity advection increasing with height | subsidence |
| Cold advection | subsidence |
| Jet-streak **right entrance** and **left exit** | **ascent** |
| Jet-streak left entrance and right exit | subsidence |

$w = -(\nabla\cdot\mathbf{v}_H)\Delta z$: a divergence of $10^{-5}$ s⁻¹ over 5 km gives 5 cm s⁻¹, or 2 km of lift in 12 hours. Level of non-divergence near 600 hPa. **$\omega < 0$ is ascent.**

*From* [5.4](lessons/05-04-divergence-vertical-motion-quasi-geostrophic.md)

### Boundary layer

$$R_n = H + LE + G, \qquad B = \frac{H}{LE}, \qquad u(z) = \frac{u_*}{k}\ln\frac{z}{z_0}\ (k = 0.4)$$

| Surface | Bowen ratio | Roughness $z_0$ |
|---|---|---|
| Ocean | 0.1 | 0.0002 m |
| Grassland | 0.5 | 0.01 m |
| Crops | — | 0.1 m |
| Desert | 5 | — |
| Forest, city | — | 1 m |

Ekman depth $D = \pi\sqrt{2K/f} \approx 1.4$ km; pumping $w_E = \zeta_g\sqrt{K/2f}$; spin-down $\tau_E = H_v/\sqrt{Kf/2} \approx 4$–5 days. Diurnal cycle: 200 m stable layer at dawn, 1–2 km mixed layer by mid-afternoon, residual layer aloft overnight.

*From* [6.1](lessons/06-01-atmospheric-boundary-layer.md)

### Storm mode and tropical-cyclone criteria

| 0–6 km shear | Mode |
|---|---|
| under 10 m s⁻¹ | single cell (30–60 min, self-destructs) |
| 10–20 m s⁻¹ | multicell, squall lines |
| over 20 m s⁻¹ | supercell |

Mesocyclone: shear gives $\omega_h = \Delta U/\Delta z$, tilted into the vertical by the updraft and stretched; $\zeta \propto 1/r^2$, so 3 km → 300 m amplifies a hundredfold. Four severe-weather ingredients: **moisture, instability, lift, shear**.

Tropical cyclones need the opposite of shear: SST $\ge 26.5$ °C over 50 m, $\lvert\phi\rvert \gtrsim 5^\circ$, shear $\lesssim 10$ m s⁻¹, moist mid-levels, a pre-existing disturbance.

*From* [6.2](lessons/06-02-mesoscale-convection-thunderstorms-tornadoes.md), [6.3](lessons/06-03-tropical-cyclones-tropics.md)

### Observing systems

| $R$ | dBZ | | Channel | Sees |
|---|---|---|---|---|
| 0.5 mm h⁻¹ | 18 | | visible 0.6 micrometres | cloud thickness (daytime only) |
| 1 | 23 | | IR window 10.7 | surface or cloud top |
| 10 | 39 | | water vapour 6.7 | mid-upper troposphere, **even in clear air** |
| 50 | 50 | | $\mathrm{CO_2}$ near 15 | selectable levels |
| 100 | 55 | | | |
| hail | over 60 | | | |

Geostationary: 35 790 km altitude, one hemisphere continuously, unusable poleward of about 65°. Polar-orbiting: 700–850 km, global, twice daily.

*From* [6.4](lessons/06-04-observing-the-atmosphere.md)

### Predictability

$$e(t) = e_0 2^{\,t/T_d}, \qquad t_{\text{limit}} = T_d\log_2(e_{\text{sat}}/e_0)$$

| Initial error | Limit ($T_d = 2$ d) |
|---|---|
| 1 percent | 13.3 days |
| 0.1 percent | 19.9 days |
| 0.01 percent | 26.6 days |

Doubling times: about 1 hour at the convective scale, 1.5–2 days synoptic. Errors cascade **upward** in scale. Ensembles (30–50 members) forecast their own reliability through the spread–skill relationship.

*From* [6.5](lessons/06-05-predictability-two-week-limit.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Ideal-gas equation of state | [`thermodynamics-physics` 1.2](../thermodynamics-physics/lessons/01-02-state-variables-equations-of-state.md) |
| First law, and the enthalpy form $dq = c_p\,dT - \alpha\,dp$ | [`thermodynamics-physics` 1.3](../thermodynamics-physics/lessons/01-03-heat-work-first-law.md) |
| $c_p - c_v = R$, $\gamma = c_p/c_v$, and the adiabat $pV^\gamma = \text{const}$ | [`thermodynamics-physics` 1.4](../thermodynamics-physics/lessons/01-04-heat-capacities-pv-processes.md) |
| Entropy, $ds = dq/T$ for a reversible process | [`thermodynamics-physics` 2.3](../thermodynamics-physics/lessons/02-03-entropy.md) |
| Clausius–Clapeyron in its general phase-boundary form | [`thermodynamics-physics` 3.3](../thermodynamics-physics/lessons/03-03-phase-transitions-clausius-clapeyron.md), [`physical-chemistry` 2.2](../physical-chemistry/lessons/02-02-clapeyron-clausius-clapeyron.md) |
| Vapor pressure over a solution, Raoult's law, Dalton's law | [`physical-chemistry` 2.2](../physical-chemistry/lessons/02-02-clapeyron-clausius-clapeyron.md) |
| Planck's function and the derivation of blackbody radiation | [`stat-mech` 4.3](../stat-mech/lessons/04-03-photon-gas-blackbody.md) |
| Blackbody laws applied to stars; the HR diagram | [`astrophysics` 1.2](../astrophysics/lessons/01-02-blackbody-spectra-hr-diagram.md) |
| The Schwarzschild radiative-transfer equation and the $\tau = 1$ rule | [`astrophysics` 1.3](../astrophysics/lessons/01-03-radiative-transfer-spectral-lines.md) |
| Why a vibration is infrared-active (changing dipole moment) | [`physical-chemistry` 4.5](../physical-chemistry/lessons/04-05-rotational-vibrational-spectroscopy.md) |
| Separable first-order ODEs (used to integrate the barometric law) | [`ode-refresher` 1.2](../ode-refresher/lessons/01-02-separable-and-linear-first-order.md) |
| Logarithmic differentiation for sensitivity estimates | [`calc-refresher` 1.3](../calc-refresher/lessons/01-03-linearization-and-taylor.md) |
| The material derivative $D/Dt$ and the Eulerian–Lagrangian distinction | [`fluid-dynamics` 1.2](../fluid-dynamics/lessons/01-02-lagrangian-eulerian-material-derivative.md) |
| The momentum equation for an inviscid fluid | [`fluid-dynamics` 1.5](../fluid-dynamics/lessons/01-05-euler-equation.md) |
| Reynolds number and the creeping-flow limit | [`fluid-dynamics` 3.1](../fluid-dynamics/lessons/03-01-reynolds-number.md) |
| Stokes drag on a sphere (droplet terminal velocity) | [`fluid-dynamics` 3.3](../fluid-dynamics/lessons/03-03-stokes-flow.md) |
| Rayleigh–Bénard convection — heating a layer from below | [`fluid-dynamics` 4.3](../fluid-dynamics/lessons/04-03-instability-kh-rb.md) |
| Rotating-frame kinematics and the $2\boldsymbol\Omega\times\mathbf{v}$ term | [`engineering-dynamics` 1.3](../engineering-dynamics/lessons/01-03-normal-tangential-polar-coordinates.md) |
| Simple harmonic motion (the Brunt–Väisälä oscillation) | [`mechanics-refresher` 3.1](../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md) |
| Determinants, and why a linear map scales areas by $\lvert\det M\rvert$ | [`linalg-refresher` 2.3](../linalg-refresher/lessons/02-03-determinants.md) |
| Snell's law and refraction through a prism (halos, rainbows) | [`waves-optics` 3.1](../waves-optics/lessons/03-01-reflection-refraction-snell.md) |
| Dipole radiation and the polarization of scattered light | [`waves-optics` 2.4](../waves-optics/lessons/02-04-light-as-em-wave.md), [`waves-optics` 4.3](../waves-optics/lessons/04-03-polarization.md) |
| Phase versus group velocity, and dispersion relations generally | [`waves-optics` 4.4](../waves-optics/lessons/04-04-wave-packets-dispersion-fourier.md) |
| Catalysis, and the steady-state approximation for fast/slow reaction pairs | [`physical-chemistry` 3.3](../physical-chemistry/lessons/03-03-mechanisms-steady-state-pre-equilibrium.md) |
| The Carnot cycle and its efficiency | [`thermodynamics-physics` 2.1](../thermodynamics-physics/lessons/02-01-heat-engines-carnot-cycle.md) |
| Kepler's third law (the geostationary altitude) | [`orbital-mechanics` 1.5](../orbital-mechanics/lessons/01-05-keplers-laws-orbital-period.md) |
| Sensitive dependence, Lyapunov exponents, strange attractors | [`dynamical-systems` 4.2](../dynamical-systems/lessons/04-02-sensitive-dependence.md), [`dynamical-systems` 4.3](../dynamical-systems/lessons/04-03-strange-attractors.md) |
| Elliptic boundary-value problems (the omega equation's structure) | [`pdes` 2.3](../pdes/lessons/02-03-laplace-poisson-equations.md) |
| The turbulent boundary layer and the logarithmic law of the wall | [`fluid-dynamics` 3.4](../fluid-dynamics/lessons/03-04-boundary-layers.md) |
| Kelvin's circulation theorem | [`fluid-dynamics` 2.3](../fluid-dynamics/lessons/02-03-kelvin-circulation-theorem.md) |
| Stokes' theorem | [`calc-refresher` 5.3](../calc-refresher/lessons/05-03-green-stokes-divergence.md) |

### Scope discipline — what this course cedes

| Topic | Owner | What this course still does |
|---|---|---|
| Radiative forcing, feedbacks, climate sensitivity, the carbon cycle, climate models, paleoclimate | [`climate-science`](../climate-science/syllabus.md) | derives $T_e$, the slab greenhouse, the energy budget and the emission level, which are its inputs |
| Ocean circulation, gyres, thermohaline overturning, ENSO | [`oceanography`](../oceanography/syllabus.md) | uses the same $f$, geostrophy and baroclinic instability, and names the parallels |
| Numerical weather prediction and model engineering | not taught in this library | states where parameterization would take over |
| Molecular spectroscopy and line shapes | [`physical-chemistry` 4.5](../physical-chemistry/lessons/04-05-rotational-vibrational-spectroscopy.md) | uses band positions and the dipole-moment rule without deriving them |
| The Ekman spiral in its wind-driven-ocean setting | [`oceanography`](../oceanography/syllabus.md) | derives the *atmospheric* boundary layer and its Ekman pumping, citing the ocean version |
| ENSO and coupled ocean–atmosphere modes | [`oceanography`](../oceanography/syllabus.md), [`climate-science`](../climate-science/syllabus.md) | covers monsoons, easterly waves and tropical cyclones, and cites for ENSO |
| Chaos, Lyapunov exponents and strange attractors | [`dynamical-systems`](../dynamical-systems/syllabus.md) | owns *atmospheric* predictability — the doubling time, the two-week limit, ensembles |
| Rayleigh and Mie scattering, potential vorticity, atmospheric predictability | **this course** | previously unclaimed library-wide; owned here |

## Pitfalls

### Lapse rates and parcels

- $\Gamma$ describes the **environment**, $\Gamma_d$ and $\Gamma_m$ describe a **moving parcel** — comparing the two *is* stability theory, and conflating them makes every result look arbitrary. *([1.1](lessons/01-01-composition-vertical-structure.md), [1.3](lessons/01-03-adiabatic-parcels-dry-lapse-rate.md))*
- A rising parcel cools by **expansion**, not by contact with colder air — $\Gamma_d$ contains no reference to the environment at all. *([1.3](lessons/01-03-adiabatic-parcels-dry-lapse-rate.md))*
- The right heat capacity is $c_p$, not $c_v$: the parcel expands *at whatever pressure the environment imposes*. Using $c_v$ gives 13.7 K km⁻¹, badly wrong. *([1.3](lessons/01-03-adiabatic-parcels-dry-lapse-rate.md))*
- $\Gamma_m$ is **not a constant** — quoting "6 K km⁻¹" is a mid-troposphere convenience and is badly wrong near the tropical surface. *([2.2](lessons/02-02-saturation-moist-adiabatic-lapse-rate.md))*
- Latent heat is not *added* from outside; the parcel carried it up as vapor and condensation converts it to sensible heat. That is why "moist adiabatic" is still adiabatic. *([2.2](lessons/02-02-saturation-moist-adiabatic-lapse-rate.md))*

### Vertical structure

- $p = p_0e^{-z/H}$ needs the **layer-mean** temperature, not the surface value; using a 300 K surface value for a 10 km column badly underestimates the pressure drop. *([1.2](lessons/01-02-hydrostatic-equation-barometric-law.md))*
- Hydrostatic balance does **not** mean the air is still — it means vertical accelerations are negligible. A 50 m s⁻¹ horizontal wind is perfectly hydrostatic. *([1.2](lessons/01-02-hydrostatic-equation-barometric-law.md))*
- Pressure and density fall off at the same rate only where $T$ is constant; in the stratosphere density falls faster. *([1.2](lessons/01-02-hydrostatic-equation-barometric-law.md))*
- $\theta$ is conserved only for **adiabatic** motion — latent heating, radiative cooling and mixing all change it. Use $\theta_e$ when condensation is in play. *([1.4](lessons/01-04-potential-temperature.md), [2.2](lessons/02-02-saturation-moist-adiabatic-lapse-rate.md))*
- A large $\theta$ up high means **stable**, not warm: the tropopause has $\theta \approx 330$ K while reading 217 K on a thermometer. *([1.4](lessons/01-04-potential-temperature.md))*
- The stratosphere is warm because ozone absorbs UV *in place*, not because it is closer to the Sun; and the thermosphere's 1000 K is meaningless as heat content at $10^{-9}$ of sea-level density. *([1.1](lessons/01-01-composition-vertical-structure.md), [3.3](lessons/03-03-radiative-transfer-vertical-profile.md))*

### Moisture and clouds

- Relative humidity says how **close to saturated** air is, not how much water it holds — 30 °C at 40 percent holds more than twice the water of 10 °C at 90 percent. Quote $w$, $q$ or $T_d$ for content. *([2.1](lessons/02-01-humidity-variables.md))*
- $T_d \le T$ always; the **depression** is the honest dryness measure, and heating air cannot raise its dew point. *([2.1](lessons/02-01-humidity-variables.md))*
- $w$ and $q$ are numerically interchangeable but conceptually are not — check whether the denominator is dry air or total air before trusting a formula. *([2.1](lessons/02-01-humidity-variables.md))*
- The LCL is where a **lifted parcel** saturates, not where the environment is saturated — which is why cumulus are discrete objects with clear air around them. *([2.2](lessons/02-02-saturation-moist-adiabatic-lapse-rate.md))*
- Descent does not simply reverse ascent: if the rain fell out (a **pseudoadiabat**, which real storms follow), the descent is dry adiabatic. That asymmetry is the entire foehn effect. *([2.2](lessons/02-02-saturation-moist-adiabatic-lapse-rate.md))*
- **More** condensation nuclei generally means **less** rain: the same water among more nuclei gives smaller droplets, which collide less efficiently. *([2.3](lessons/02-03-cloud-precipitation-formation.md))*
- Supercooled liquid water is the normal state between 0 and −20 °C, not an exotic one — ice nuclei are roughly $10^6$ times scarcer than CCN. *([2.3](lessons/02-03-cloud-precipitation-formation.md))*

### Stability and convection

- Use **virtual** temperature in the buoyancy formula; in the tropics the moisture contribution can be 3 K, comparable to the entire thermal excess. *([2.4](lessons/02-04-stability-parcel-theory-cape.md))*
- CIN is often what makes a day *severe*: the lid lets the boundary layer charge all morning instead of leaking into small showers. *([2.4](lessons/02-04-stability-parcel-theory-cape.md))*
- $w_{\max} = \sqrt{2\,\mathrm{CAPE}}$ is an **upper bound**, not a forecast — water loading, entrainment and perturbation pressure cut it roughly in half. *([2.4](lessons/02-04-stability-parcel-theory-cape.md))*
- A stable environment does not mean no cloud: forced isentropic ascent up a warm front makes vast stratiform sheets. Stability suppresses convection, not cloud. *([2.4](lessons/02-04-stability-parcel-theory-cape.md))*

### Radiation and the greenhouse effect

- The factor of 4 in $T_e$ is sphere-area over disc-area — **geometry**, not day and night. *([3.1](lessons/03-01-solar-terrestrial-radiation.md))*
- $T_e$ is not the temperature of anything you can touch; it is the temperature of whatever level the infrared escapes from, near 5 km. *([3.1](lessons/03-01-solar-terrestrial-radiation.md), [3.3](lessons/03-03-radiative-transfer-vertical-profile.md))*
- The atmospheric effect is **radiative**; a garden greenhouse works by stopping convection. The name is a historical accident. *([3.2](lessons/03-02-greenhouse-effect-energy-budget.md))*
- Back radiation does not violate the second law: net energy still flows upward (398 up, 342 down). The atmosphere reduces the surface's net loss; it does not heat it. *([3.2](lessons/03-02-greenhouse-effect-energy-budget.md))*
- The one-slab model **overshoots** by 15 K, for two physical reasons: the real atmosphere is not fully opaque in the infrared, and 21 percent of the surface's energy leaves as convection and evaporation. *([3.2](lessons/03-02-greenhouse-effect-energy-budget.md))*
- The $\mathrm{CO_2}$ band being "saturated" at its centre is exactly *why* more $\mathrm{CO_2}$ still works — at the band edges and by raising the emission level, giving a logarithmic rather than a vanishing response. *([3.3](lessons/03-03-radiative-transfer-vertical-profile.md))*
- Never quote an optical depth without stating the wavelength and the path. *([3.3](lessons/03-03-radiative-transfer-vertical-profile.md))*

### Dynamics

- Only the pressure **gradient** exerts force; a 1030 hPa high with slack isobars gives calm, a 1010 hPa region with tight isobars gives a gale. Read spacing, not values. *([4.1](lessons/04-01-pressure-gradient-force-equations-of-motion.md))*
- $D/Dt$ is not $\partial/\partial t$: a parcel's properties change both because conditions change and because it has moved. *([4.1](lessons/04-01-pressure-gradient-force-equations-of-motion.md))*
- The Coriolis force is a frame artifact, does **no work**, and cannot change wind speed — only direction. Anything that changes speed is pressure or friction. *([4.2](lessons/04-02-coriolis-effect.md))*
- Coriolis does not govern bathtub drains: $\mathrm{Ro} \approx 10^5$ there, so the residual swirl from filling dominates by thousands of times. *([4.2](lessons/04-02-coriolis-effect.md))*
- $f$ uses the **sidereal** day, 86,164 s — using 86,400 makes $f$ 0.3 percent too small. *([4.2](lessons/04-02-coriolis-effect.md))*
- The geostrophic wind is not the real wind: the small **ageostrophic** residual is what produces convergence, ascent and therefore all the weather. Perfect geostrophic flow does nothing. *([4.3](lessons/04-03-geostrophic-gradient-wind.md))*
- Friction's change of wind *direction* matters more than its change of speed — the cross-isobar component is what fills lows and makes them rain. *([4.3](lessons/04-03-geostrophic-gradient-wind.md))*
- The thermal wind is a **difference**, not a wind: "the thermal wind is 30 m s⁻¹" says the geostrophic wind changes by 30 m s⁻¹ across the layer, and nothing about either end. *([4.4](lessons/04-04-thermal-wind-general-circulation.md))*
- The Ferrel cell is a statistic, not machinery — mid-latitude heat transport is done by **eddies**, and their time-average happens to look like a thermally indirect cell. *([4.4](lessons/04-04-thermal-wind-general-circulation.md), [4.5](lessons/04-05-air-masses-fronts-cyclones.md))*
- Fronts slope at about 1 in 100 — a "wall of cold air" that rises 1 km over 100 km. Textbook cross-sections exaggerate the vertical by 50 times or more. *([4.5](lessons/04-05-air-masses-fronts-cyclones.md))*
- A surface low is a symptom; what deepens it is **upper-level divergence**. And occlusion is the beginning of the end, not the climax — maximum depth and terminal diagnosis arrive together. *([4.5](lessons/04-05-air-masses-fronts-cyclones.md))*

### Diagrams and clouds

- The skew is not cosmetic: it opens the angle between isotherms and adiabats to near 90 degrees, and because a shear has determinant 1 it costs no area, so CAPE is still readable. *([2.5](lessons/02-05-skew-t-log-p-diagram.md))*
- You follow the mixing-ratio line labelled with the parcel's **actual** $w$, not its saturation value — saturation is reached by the ceiling coming down, not the water going up. *([2.5](lessons/02-05-skew-t-log-p-diagram.md))*
- "The CAPE" is ambiguous: surface-based, mixed-layer and most-unstable parcels give different answers, and which one matters depends on how the storm is triggered. *([2.5](lessons/02-05-skew-t-log-p-diagram.md))*
- *Alto-* labels the **middle** étage, not the high one; the high étage takes *cirro-*. *([2.6](lessons/02-06-cloud-classification.md))*
- A flat cloud base means a uniform sub-cloud dew-point depression, not a stable atmosphere — fair-weather cumulus have famously flat bases and are entirely convective. *([2.6](lessons/02-06-cloud-classification.md))*
- Mammatus indicate a vigorous anvil, not tornadoes; greyness measures optical thickness, not altitude. *([2.6](lessons/02-06-cloud-classification.md))*

### Light, sun angle and ozone

- Scattering is **elastic**: it contributes to albedo, never to heating. Only absorption heats. *([3.4](lessons/03-04-scattering-rayleigh-mie-aerosols.md))*
- The $\lambda^{-4}$ law holds only for $x \ll 1$. Cloud droplets have $x \approx 126$, so clouds are white, not blue — and a white sky on a cloudless day means aerosol, not cloud. *([3.4](lessons/03-04-scattering-rayleigh-mie-aerosols.md))*
- Clouds are white from **multiple** scattering off many droplet surfaces, not from any colour of water — the same reason snow, foam and milk are white while ice, glass and butterfat are clear. *([3.4](lessons/03-04-scattering-rayleigh-mie-aerosols.md))*
- Seasons come from **tilt**, not distance: Earth is closest to the Sun in January, and a distance effect would give both hemispheres summer at once. *([3.5](lessons/03-05-solar-geometry-seasons-insolation.md))*
- Peak temperature lags peak insolation by four to eight weeks; insolation sets the forcing, thermal inertia sets the response. *([3.5](lessons/03-05-solar-geometry-seasons-insolation.md))*
- Ozone is **not** consumed by blocking UV — the fast photolysis-and-recombination pair cycles indefinitely, converting UV to heat. Only the slow loss reaction and its catalytic imitations destroy it. *([3.6](lessons/03-06-ozone-photochemistry-stratosphere.md))*
- The ozone hole and global warming are near-independent problems: halogen chemistry in the stratosphere versus $\mathrm{CO_2}$ radiation in the troposphere. *([3.6](lessons/03-06-ozone-photochemistry-stratosphere.md))*

### Spin, waves and vertical motion

- Vorticity does not require circular flow — straight sheared flow has plenty, and a $1/r$ vortex has none outside its core. *([5.1](lessons/05-01-vorticity-circulation.md))*
- Pressure gradients do not create vorticity: the curl of a gradient is zero, so in the barotropic equation only convergence changes $\eta$. *([5.1](lessons/05-01-vorticity-circulation.md))*
- PV is conserved only for **adiabatic, frictionless** flow; latent heating creates it below the heating maximum and destroys it above — which is how a hurricane builds its own vortex. *([5.2](lessons/05-02-potential-vorticity.md))*
- The lee trough is a **latitude-change** effect: squashing over the crest gives *anti*cyclonic vorticity, the opposite sign. *([5.2](lessons/05-02-potential-vorticity.md))*
- Rossby waves propagate **westward relative to the air**; troughs move east on a map only because the mean flow is stronger. *([5.3](lessons/05-03-rossby-waves-beta-effect.md))*
- $\beta \propto \cos\phi$ peaks at the **equator** and vanishes at the poles — the opposite of $f$. *([5.3](lessons/05-03-rossby-waves-beta-effect.md))*
- $\omega < 0$ means **ascent**; and surface convergence *fills* a low, so deepening requires divergence aloft to win. *([5.4](lessons/05-04-divergence-vertical-motion-quasi-geostrophic.md))*
- The strongest ascent is where vorticity *advection* changes fastest with height, a quarter-wavelength downstream of the trough — not at the vorticity maximum itself. *([5.4](lessons/05-04-divergence-vertical-motion-quasi-geostrophic.md))*

### The layer you stand in, and the limits of knowing it

- The boundary layer's depth swings by an order of magnitude **every day** over land; quoting one number without a time is meaningless. *([6.1](lessons/06-01-atmospheric-boundary-layer.md))*
- Friction's *turning* of the wind matters more than its slowing: the cross-isobar component is what converges air into a low and makes it rain. *([6.1](lessons/06-01-atmospheric-boundary-layer.md))*
- Updraft strength makes **hail**; tornadoes need concentrated near-ground rotation, which comes from shear. High CAPE with no shear gives giant hail and no tornadoes. *([6.2](lessons/06-02-mesoscale-convection-thunderstorms-tornadoes.md))*
- Tornadoes do not spin cyclonically because of Coriolis ($\mathrm{Ro} \sim 10^3$) but because their parent mesocyclones do. *([6.2](lessons/06-02-mesoscale-convection-thunderstorms-tornadoes.md))*
- A hurricane needs warm **water**, not warm air, and it is the *opposite* machine to a mid-latitude cyclone: warm core, strongest at the surface, killed by shear rather than created by it. *([6.3](lessons/06-03-tropical-cyclones-tropics.md))*
- A satellite measures **radiance**, not temperature; high dBZ means large particles, so above 55 dBZ assume hail. *([6.4](lessons/06-04-observing-the-atmosphere.md))*
- The two-week limit is a property of the **equations**, not of computers — and because it depends only logarithmically on the initial error, a tenfold better analysis buys under a week. *([6.5](lessons/06-05-predictability-two-week-limit.md))*
- Chaos does not mean random: the trajectory is unpredictable, the attractor's statistics are not — which is exactly why climate survives where weather does not. *([6.5](lessons/06-05-predictability-two-week-limit.md))*
