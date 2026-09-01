# Planetary Science · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Almost every number in this course is inferred from something in motion, something
radiating, or something that failed to happen. The machinery is small — hydrostatic
balance, a few scaling laws, exponentials in a ratio of energies — but the
bookkeeping is not: which temperature an escape criterion is evaluated at, whether a
flattening is hydrostatic, whether a resonance clears or protects, whether a
"detection rate" has been divided by its completeness. That is what this card is for.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $j$ | specific angular momentum, $\varpi^2\Omega$ — spin per unit mass | [1.1](lessons/01-01-protoplanetary-disk.md) |
| $R_c$ | centrifugal radius — the disk size a collapsing core delivers | [1.1](lessons/01-01-protoplanetary-disk.md) |
| $t_{\text{ff}}$ | free-fall time, $\sqrt{3\pi/32G\rho}$ | [1.1](lessons/01-01-protoplanetary-disk.md) |
| $\Sigma$ | surface density of a disk (gas or solids), mass per unit area | [1.1](lessons/01-01-protoplanetary-disk.md) |
| $\alpha$ | Shakura–Sunyaev turbulence parameter, $\nu = \alpha c_sH$ | [1.1](lessons/01-01-protoplanetary-disk.md) |
| $T_c$ | 50 percent condensation temperature of an element | [1.2](lessons/01-02-condensation-frost-line.md) |
| $\mathrm{St}$ | Stokes number — drag stopping time in units of the orbital time | [1.3](lessons/01-03-accretion-dust-to-planetesimals.md) |
| $\eta$ | fractional sub-Keplerian lag of disk gas; sets the headwind $\eta v_K$ | [1.3](lessons/01-03-accretion-dust-to-planetesimals.md) |
| $F_g$ | gravitational focusing factor, $1+v_{\text{esc}}^2/v_{\text{rel}}^2$ | [1.3](lessons/01-03-accretion-dust-to-planetesimals.md) |
| $R_H$ | Hill radius, $a(M/3M_\odot)^{1/3}$ | [1.3](lessons/01-03-accretion-dust-to-planetesimals.md) |
| $M_{\text{iso}}$ | isolation mass — where local accretion runs out of material | [1.3](lessons/01-03-accretion-dust-to-planetesimals.md) |
| $h$ | disk aspect ratio $H/r$ | [1.4](lessons/01-04-giant-planets-migration.md) |
| $t_{\text{I}}$ | Type I migration timescale | [1.4](lessons/01-04-giant-planets-migration.md) |
| $\lambda$ (decay) | decay constant, $\ln 2/t_{1/2}$ | [1.5](lessons/01-05-meteorites-isotopic-clocks.md) |
| $\varepsilon^{54}\mathrm{Cr}$ | isotopic anomaly in parts per $10^4$ relative to Earth | [1.6](lessons/01-06-cosmochemistry-volatile-delivery.md) |
| D/H | deuterium-to-hydrogen ratio, used as a provenance tracer | [1.6](lessons/01-06-cosmochemistry-volatile-delivery.md) |
| $f$ (Rayleigh) | fraction of a reservoir remaining after fractionating loss | [1.6](lessons/01-06-cosmochemistry-volatile-delivery.md) |
| $C$, $A$ | polar and equatorial moments of inertia | [2.1](lessons/02-01-differentiation-interior-structure.md) |
| $C/MR^2$ | moment-of-inertia factor; 0.4 uniform, lower = centrally condensed | [2.1](lessons/02-01-differentiation-interior-structure.md) |
| $x$ | core radius as a fraction of planet radius, $R_{\text{core}}/R$ | [2.1](lessons/02-01-differentiation-interior-structure.md) |
| $\kappa$ | thermal diffusivity, $k/\rho c_p$ | [2.2](lessons/02-02-thermal-evolution-heat-transport.md) |
| $Ra$ | Rayleigh number — buoyancy against viscosity and diffusion | [2.2](lessons/02-02-thermal-evolution-heat-transport.md) |
| $Nu$ | Nusselt number — convective over conductive heat transport | [2.2](lessons/02-02-thermal-evolution-heat-transport.md) |
| $\eta_m$ | magnetic diffusivity, $1/\mu_0\sigma$ | [2.3](lessons/02-03-magnetic-fields-dynamo.md) |
| $Rm$ | magnetic Reynolds number, $\mu_0\sigma uL$; a dynamo needs $\gtrsim40$ | [2.3](lessons/02-03-magnetic-fields-dynamo.md) |
| $\tau$ (field) | free-decay time of a field, $\mu_0\sigma L^2/\pi^2$ | [2.3](lessons/02-03-magnetic-fields-dynamo.md) |
| $N(1)$ | cumulative craters $\ge1$ km per km$^2$ | [2.4](lessons/02-04-impact-cratering-chronology.md) |
| $D_t$ | simple-to-complex crater transition diameter | [2.4](lessons/02-04-impact-cratering-chronology.md) |
| $d_{\text{lith}}$ | thermal lithosphere thickness, $k\Delta T/q$ | [2.5](lessons/02-05-volcanism-tectonics.md) |
| $q$ (flux) | surface heat flux, W m$^{-2}$ | [2.5](lessons/02-05-volcanism-tectonics.md) |
| $L_{\text{tot}}$ | total angular momentum of a planet–satellite system | [2.7](lessons/02-07-moon-earth-moon-system.md) |
| $GM$ | the gravitational parameter — what orbits actually measure | [3.1](lessons/03-01-mass-density-moment-of-inertia.md) |
| $J_2$ | dynamical form factor, $(C-A)/MR^2$ | [3.1](lessons/03-01-mass-density-moment-of-inertia.md) |
| $q$ (rotation) | rotation parameter, $\omega^2R^3/GM$ | [3.1](lessons/03-01-mass-density-moment-of-inertia.md) |
| $f$ (flattening) | $(R_{\text{eq}}-R_{\text{pol}})/R_{\text{eq}}$ | [3.1](lessons/03-01-mass-density-moment-of-inertia.md) |
| $T_e$ | **elastic** lithosphere thickness (not the thermal one) | [3.2](lessons/03-02-gravity-topography-tidal-response.md) |
| $D$ (flexure) | flexural rigidity, $ET_e^3/12(1-\nu^2)$ | [3.2](lessons/03-02-gravity-topography-tidal-response.md) |
| $\alpha$ (flexure) | flexural parameter — the width a plate can bridge | [3.2](lessons/03-02-gravity-topography-tidal-response.md) |
| $h_2$, $k_2$ | tidal Love numbers: surface displacement, and induced potential | [3.2](lessons/03-02-gravity-topography-tidal-response.md) |
| $Z(k)$ | gravity/topography admittance | [3.2](lessons/03-02-gravity-topography-tidal-response.md) |
| $\Gamma$ | thermal inertia, $\sqrt{k\rho c_p}$ | [3.3](lessons/03-03-remote-spectroscopy.md) |
| $d_s$ | thermal skin depth, $\sqrt{\kappa P/\pi}$ | [3.3](lessons/03-03-remote-spectroscopy.md) |
| $R_{\text{mp}}$ | magnetopause standoff distance | [3.4](lessons/03-04-magnetospheres-solar-wind.md) |
| $\delta$ (EM) | electromagnetic skin depth, $\sqrt{2/\mu_0\sigma\omega}$ | [3.4](lessons/03-04-magnetospheres-solar-wind.md) |
| $H$ | atmospheric scale height, $kT/\mu m_Hg$ | [4.1](lessons/04-01-atmospheric-structure.md) |
| $\mu$ | mean molecular weight, in atomic mass units | [4.1](lessons/04-01-atmospheric-structure.md) |
| $\Gamma_d$ | dry adiabatic lapse rate, $g/c_p$ | [4.1](lessons/04-01-atmospheric-structure.md) |
| $S$ | stellar flux at the planet, W m$^{-2}$ | [4.2](lessons/04-02-energy-balance-greenhouse.md) |
| $A$ (albedo) | Bond albedo — fraction of incident light reflected | [4.2](lessons/04-02-energy-balance-greenhouse.md) |
| $T_{\text{eq}}$ | equilibrium temperature — of whatever radiates to space | [4.2](lessons/04-02-energy-balance-greenhouse.md) |
| $\tau$ (optical) | infrared optical depth of an atmosphere | [4.2](lessons/04-02-energy-balance-greenhouse.md) |
| $F_{\text{crit}}$ | radiation limit, about 310 W m$^{-2}$; above it, runaway | [4.2](lessons/04-02-energy-balance-greenhouse.md) |
| $\lambda$ (Jeans) | Jeans parameter, $(v_{\text{esc}}/v_{\text{th}})^2$ | [4.3](lessons/04-03-atmospheric-escape.md) |
| $v_{\text{th}}$ | most probable thermal speed, $\sqrt{2kT/m}$ | [4.3](lessons/04-03-atmospheric-escape.md) |
| $\varepsilon$ (escape) | heating efficiency in energy-limited escape, 0.1–0.3 | [4.3](lessons/04-03-atmospheric-escape.md) |
| $Ro_T$ | thermal Rossby number, $R\Delta T_h/\Omega^2a^2$ | [4.4](lessons/04-04-atmospheric-circulation.md) |
| $\beta$ | planetary vorticity gradient, $2\Omega\cos\phi/a$ | [4.4](lessons/04-04-atmospheric-circulation.md) |
| $L_\beta$ | Rhines scale — sets the spacing of zonal jets | [4.4](lessons/04-04-atmospheric-circulation.md) |
| $s$ | superrotation index, $m/\Omega a^2-1$ | [4.4](lessons/04-04-atmospheric-circulation.md) |
| $J$ (photolysis) | photodissociation rate per molecule | [4.5](lessons/04-05-photochemistry-hazes-evolution.md) |
| $\tau_v$ | visible optical depth of a haze (the anti-greenhouse parameter) | [4.5](lessons/04-05-photochemistry-hazes-evolution.md) |
| $Q$ | tidal quality factor — radians of oscillation to dissipate the energy | [5.2](lessons/05-02-tides-resonances-orbital-evolution.md) |
| $n$ | mean motion, $\sqrt{GM_p/a^3}$ | [5.2](lessons/05-02-tides-resonances-orbital-evolution.md) |
| $d_{\text{Roche}}$ | Roche limit — inside it, debris cannot accrete | [5.4](lessons/05-04-rings-satellite-systems.md) |
| $T_J$ | Tisserand parameter with respect to Jupiter | [5.5](lessons/05-05-asteroids-comets-kuiper-belt.md) |
| $\delta$ (transit) | transit depth, $(R_p/R_\star)^2$ | [6.1](lessons/06-01-exoplanet-detection.md) |
| $K$ | radial-velocity semi-amplitude | [6.1](lessons/06-01-exoplanet-detection.md) |
| $p_{\text{tr}}$ | geometric transit probability, $R_\star/a$ | [6.1](lessons/06-01-exoplanet-detection.md) |
| $C$ (completeness) | detection efficiency, given the geometry allows a detection | [6.2](lessons/06-02-demographics-selection-effects.md) |
| $\eta_\oplus$ | fraction of stars with an Earth-sized planet in the habitable zone | [6.2](lessons/06-02-demographics-selection-effects.md) |
| $\Delta\delta$ | transmission signal — extra transit depth from the atmosphere | [6.4](lessons/06-04-exoplanet-atmospheres.md) |
| $N_H$ | number of scale heights an absorption band spans, typically 5–10 | [6.4](lessons/06-04-exoplanet-atmospheres.md) |
| $S_{\text{eff}}$ | effective stellar flux relative to Earth's, used for HZ edges | [6.5](lessons/06-05-habitability-and-its-limits.md) |

**Three symbols are overloaded and it matters.** $q$ is a heat flux in Module 2 and a rotation
parameter in Module 3. $\tau$ is a magnetic decay time in 2.3, an optical depth in 4.2, and a
chemical lifetime in 4.5. $\alpha$ is disk turbulence in 1.1, a flexural parameter in 3.2, and a
fractionation factor in 1.6 and 4.3. Check the context before reaching for a formula.

## Definitions

### Centrifugal radius

The radius inside which all infalling material from a rotating collapse must land — hence the size of the disk that forms.

$$R_c = \frac{j^2}{GM}, \qquad r_{\text{land}} = R_c\sin^2\theta_0$$

*Introduced:* [1.1](lessons/01-01-protoplanetary-disk.md)

### Minimum-mass solar nebula

The least gas you could have started with and still built the observed planets — a floor reconstructed backwards, not a measurement.

$$\Sigma(r)\approx 1700\left(\frac{r}{\text{AU}}\right)^{-3/2}\ \mathrm{g\,cm^{-2}}, \qquad M\approx0.01\,M_\odot$$

*Introduced:* [1.1](lessons/01-01-protoplanetary-disk.md)

### Frost line

The disk radius beyond which water ice is stable, so ice joins rock as a building material. It swept inward from about 5.7 to 3.4 AU as the disk cooled, then parked.

$$r_{\text{frost}}:\quad T_{\text{eq}}(r) = 150\ \mathrm{K}$$

*Introduced:* [1.2](lessons/01-02-condensation-frost-line.md)

### Condensation sequence

The order in which solids appear as a gas of solar composition cools: refractory oxides near 1400 K, metal and silicates near 1300, troilite at 700, water ice at 150, supervolatiles below 30.

*Introduced:* [1.2](lessons/01-02-condensation-frost-line.md)

### Stokes number

How many orbits it takes the gas to change a particle's velocity. Much less than 1 means glued to the gas, much more means the gas is irrelevant, and about 1 is the danger zone where drift is fastest.

$$\mathrm{St} = \frac{\rho_s s\,\Omega}{\rho_g v_{\text{th}}}$$

*Introduced:* [1.3](lessons/01-03-accretion-dust-to-planetesimals.md)

### Meter barrier

The size at which growth fails twice over — collisions turn destructive, and radial drift carries the body into the star in about a century. Both failures peak at the same size because both are governed by a Stokes number near 1.

*Introduced:* [1.3](lessons/01-03-accretion-dust-to-planetesimals.md)

### Streaming instability

A positive feedback in which settled pebbles slow the local gas, reducing their own drift, so they pile up — collapsing directly into 10–100 km planetesimals **without passing through metre sizes at all.**

*Introduced:* [1.3](lessons/01-03-accretion-dust-to-planetesimals.md)

### Isolation mass

The mass at which a growing body has consumed everything in its feeding zone. About $0.07\,M_\oplus$ at 1 AU and $2\,M_\oplus$ at 5.2 AU.

$$M_{\text{iso}} = \left(\frac{4\pi b\,a^2\Sigma_{\text{solid}}}{(3M_\odot)^{1/3}}\right)^{3/2}$$

*Introduced:* [1.3](lessons/01-03-accretion-dust-to-planetesimals.md)

### Crossover mass

The point at which a giant planet's envelope mass equals its core mass and quasi-static contraction becomes runaway gas accretion. Around 10–15 $M_\oplus$ total.

*Introduced:* [1.4](lessons/01-04-giant-planets-migration.md)

### Type I and Type II migration

Type I: a low-mass planet exchanges angular momentum with the disk through spiral wakes and drifts inward, fast. Type II: a gap-opening planet is locked to the disk's own viscous evolution.

*Introduced:* [1.4](lessons/01-04-giant-planets-migration.md)

### Mean-motion resonance

Two bodies whose periods form a small-integer ratio, so conjunctions always occur at the same orbital phase and the perturbations add coherently rather than averaging away.

$$q\,n_1 - p\,n_2 \approx 0, \qquad a_r = a_m\left(\frac{q}{p}\right)^{2/3}$$

*Introduced:* [1.4](lessons/01-04-giant-planets-migration.md), developed in [5.2](lessons/05-02-tides-resonances-orbital-evolution.md)

### Isochron

A plot of daughter/reference against parent/reference for several cogenetic samples. Its slope gives the age and its intercept the initial composition — neither of which had to be assumed.

$$y = y_0 + \left(e^{\lambda t}-1\right)x, \qquad t = \frac{1}{\lambda}\ln(1+\text{slope})$$

*Introduced:* [1.5](lessons/01-05-meteorites-isotopic-clocks.md)

### Closure age

What a radiometric date actually measures: the last time the mineral stopped exchanging the relevant elements with its surroundings — not necessarily its formation.

*Introduced:* [1.5](lessons/01-05-meteorites-isotopic-clocks.md)

### Short-lived radionuclide chronology

Dating by an extinct nuclide (chiefly $^{26}$Al) through the daughter excess. Resolution of tens of thousands of years, but **purely relative** — there is no surviving parent, so no absolute zero.

*Introduced:* [1.5](lessons/01-05-meteorites-isotopic-clocks.md)

### NC/CC dichotomy

The bimodal split of all meteorites into non-carbonaceous (inner) and carbonaceous (outer) isotopic reservoirs, kept separate from about 1 to 4 Myr — the sharpest constraint on Jupiter's early growth.

*Introduced:* [1.6](lessons/01-06-cosmochemistry-volatile-delivery.md)

### Rayleigh fractionation

The isotopic evolution of a reservoir losing mass with preferential escape of the light isotope. Inverting it gives the fraction lost — but only for the fractionating channels.

$$\frac{R}{R_0} = f^{\,\alpha-1}$$

*Introduced:* [1.6](lessons/01-06-cosmochemistry-volatile-delivery.md), used in [4.3](lessons/04-03-atmospheric-escape.md) and [4.5](lessons/04-05-photochemistry-hazes-evolution.md)

### Late veneer

Roughly 0.5 percent of an Earth mass of chondritic material added after core formation, inferred from the mantle's excess highly siderophile elements, and a plausible carrier for the oceans.

*Introduced:* [1.6](lessons/01-06-cosmochemistry-volatile-delivery.md)

### Differentiation

The irreversible gravitational sorting of a melted body into metal core, silicate mantle and low-density crust. Requires **early formation** (to catch the $^{26}$Al) more than large size — Vesta at 263 km is fully differentiated.

*Introduced:* [2.1](lessons/02-01-differentiation-interior-structure.md)

### Moment-of-inertia factor

How a planet's mass is distributed in radius. Exactly 0.4 for a uniform sphere, lower for a centrally condensed one. **One number, two unknowns** — the curve is U-shaped in core fraction, so a value below its minimum admits two core radii.

$$\frac{C}{MR^2} = \frac{2}{5}\,\frac{\rho_c x^5 + \rho_m(1-x^5)}{\rho_c x^3 + \rho_m(1-x^3)}$$

*Introduced:* [2.1](lessons/02-01-differentiation-interior-structure.md)

### Rayleigh number

Buoyancy driving against viscosity and thermal diffusion resisting; convection above $Ra_c\approx10^3$. **Overwhelmingly a statement about viscosity**, which depends exponentially on temperature.

$$Ra = \frac{\rho\,\alpha\,g\,\Delta T\,d^3}{\kappa\,\eta}$$

*Introduced:* [2.2](lessons/02-02-thermal-evolution-heat-transport.md)

### Urey ratio

The fraction of a planet's surface heat flow currently supplied by radioactive decay. Earth's is about 0.4, which is why Earth is still cooling.

*Introduced:* [2.2](lessons/02-02-thermal-evolution-heat-transport.md)

### Magnetic Reynolds number

How much faster flow builds magnetic field than diffusion destroys it. A dynamo requires roughly $Rm > 40$, which is an undemanding threshold.

$$Rm = \frac{uL}{\eta_m} = \mu_0\sigma uL$$

*Introduced:* [2.3](lessons/02-03-magnetic-fields-dynamo.md)

### Dynamo requirements

Three, all necessary: a large volume of conducting fluid, vigorous convection to stir it, and rotation to organize the flow. **Convection is usually the binding constraint, and it is set by the mantle** — which is why Venus, with a liquid core, has no field.

*Introduced:* [2.3](lessons/02-03-magnetic-fields-dynamo.md)

### Remanent crustal magnetism

Field frozen into rock that cooled through its Curie temperature in an ambient field. Evidence a dynamo once ran, datable by which surfaces carry it — Mars's dynamo died before about 4.1 Ga.

*Introduced:* [2.3](lessons/02-03-magnetic-fields-dynamo.md)

### Chronology function

The calibrated relation between crater density and surface age, anchored on lunar samples. Nearly linear for young surfaces, **exponential before about 3.5 Gyr.**

$$N(1) = 5.44\times10^{-14}\left(e^{6.93\,T}-1\right) + 8.38\times10^{-4}\,T$$

*Introduced:* [2.4](lessons/02-04-impact-cratering-chronology.md)

### Saturation equilibrium

The crater density at which new craters destroy old ones as fast as they form. A saturated surface yields only a lower bound on age.

*Introduced:* [2.4](lessons/02-04-impact-cratering-chronology.md)

### Mobile lid and stagnant lid

The two convective regimes. A mobile lid recycles its own cold boundary layer (Earth alone); a stagnant lid is one unbroken shell that thickens as the planet cools (everything else). **Stagnant is the default.**

*Introduced:* [2.5](lessons/02-05-volcanism-tectonics.md)

### Decompression melting

Melting caused by *rising* rather than by heating, because the solidus falls with pressure about ten times faster than an adiabat cools. The dominant melting mechanism on any planet.

*Introduced:* [2.5](lessons/02-05-volcanism-tectonics.md)

### Superposition, cross-cutting, embayment

The three relative-dating rules: what lies on top is younger, what cuts is younger, what floods around is younger. They give a **partial order, and never a date.**

*Introduced:* [2.6](lessons/02-06-reading-planetary-surface.md)

### Morphology names a process, not a substance

A branching valley network establishes that a liquid flowed, not that it was water; a dune establishes that a fluid moved grains, not that the air was like ours. Identifying the substance requires spectroscopy.

*Introduced:* [2.6](lessons/02-06-reading-planetary-surface.md)

### Giant impact hypothesis

The Moon formed from silicate mantle ejected by an oblique collision with a Mars-sized body late in Earth's accretion. Uniquely explains the iron depletion, the volatile depletion and the angular momentum; **strained by the isotopic identity of Earth and Moon.**

*Introduced:* [2.7](lessons/02-07-moon-earth-moon-system.md)

### Lunar magma ocean

The globally molten early Moon, from which plagioclase floated to build the anorthosite highlands and the residual liquid froze last as the KREEP layer.

*Introduced:* [2.7](lessons/02-07-moon-earth-moon-system.md)

### Radau–Darwin relation

Gets $C/MR^2$ from shape alone — **valid only for a body in hydrostatic equilibrium.** Its failure on Mars is not an error; it is the detection of Tharsis.

$$\frac{C}{MR^2} \approx \frac{2}{3}\left[1-\frac{2}{5}\sqrt{\frac{5q}{2f}-1}\right]$$

*Introduced:* [3.1](lessons/03-01-mass-density-moment-of-inertia.md)

### Airy isostasy

Topography floating on a denser mantle with a compensating low-density root, roughly six times the height. **A perfectly compensated load produces no gravity anomaly at all.**

$$r = h\,\frac{\rho_c}{\rho_m-\rho_c}$$

*Introduced:* [3.2](lessons/03-02-gravity-topography-tidal-response.md)

### Flexural parameter

The width over which an elastic plate distributes a load. Loads narrower than $\alpha$ are carried by plate strength; much wider ones must float.

$$\alpha = \left(\frac{4D}{(\rho_m-\rho_{\text{infill}})g}\right)^{1/4}, \qquad D = \frac{E\,T_e^3}{12(1-\nu^2)}$$

*Introduced:* [3.2](lessons/03-02-gravity-topography-tidal-response.md)

### Tidal Love numbers

$h_2$ is the radial surface displacement in units of $\Phi_T/g$; $k_2$ is the induced potential in units of $\Phi_T$. Zero for a rigid body, 1.5 for a strengthless fluid. **A large $k_2$ on a small icy body means a global liquid layer** — there is no other way to make a moon that soft.

*Introduced:* [3.2](lessons/03-02-gravity-topography-tidal-response.md)

### Thermal inertia

Resistance to a change in temperature, measured from the amplitude of the diurnal swing. **Reads grain size and rock abundance, not composition** — dust and rock of identical chemistry differ twentyfold.

$$\Gamma = \sqrt{k\rho c_p}$$

*Introduced:* [3.3](lessons/03-03-remote-spectroscopy.md)

### Band depth

Absorption strength relative to a fitted continuum. Depends on grain size, viewing geometry and dark contaminants at least as strongly as on abundance.

$$D = 1 - \frac{R_b}{R_c}$$

*Introduced:* [3.3](lessons/03-03-remote-spectroscopy.md)

### Intrinsic and induced magnetospheres

Intrinsic: a planetary field holds the solar wind off at a magnetopause thousands of kilometres up. Induced: no internal field, so the wind's own field drapes around a conducting ionosphere a few hundred kilometres up.

*Introduced:* [3.4](lessons/03-04-magnetospheres-solar-wind.md)

### Magnetic induction sounding

Measuring a body's response to an externally oscillating field to detect a buried conductor. **The primary ocean detector for icy moons — and blind to a fresh-water ocean.**

*Introduced:* [3.4](lessons/03-04-magnetospheres-solar-wind.md), applied in [5.3](lessons/05-03-ocean-worlds.md)

### Scale height

The vertical distance over which pressure falls by a factor of $e$. Large for a hot, light-gas, low-gravity atmosphere. **Not a measure of how much atmosphere there is** — that is surface pressure.

$$H = \frac{kT}{\mu m_H g}$$

*Introduced:* [4.1](lessons/04-01-atmospheric-structure.md)

### Dry adiabatic lapse rate

The temperature gradient a convecting atmosphere settles to, and an **upper bound** on the observed rate, since latent heat and in-layer radiative heating both reduce it.

$$\Gamma_d = \frac{g}{c_p}$$

*Introduced:* [4.1](lessons/04-01-atmospheric-structure.md)

### Stratosphere

A layer where temperature *rises* with height. **Exists only if something up there absorbs ultraviolet** — ozone on Earth, haze on Titan, methane on Jupiter, nothing at all on Mars.

*Introduced:* [4.1](lessons/04-01-atmospheric-structure.md)

### Equilibrium temperature

The temperature of whatever layer radiates to space. Independent of planet size, and only weakly dependent on flux through the fourth root.

$$T_{\text{eq}} = \left[\frac{S(1-A)}{4\sigma}\right]^{1/4}$$

*Introduced:* [4.2](lessons/04-02-energy-balance-greenhouse.md)

### Greenhouse effect

The surface excess over $T_{\text{eq}}$, produced because opacity raises the altitude from which the planet radiates. Best read as the lapse rate times the emitting level's height.

$$T_s \approx T_{\text{eq}} + \Gamma\,z_{\text{emit}}, \qquad T_s^4 = T_{\text{eq}}^4\left(1+\tfrac{3\tau}{4}\right)$$

*Introduced:* [4.2](lessons/04-02-energy-balance-greenhouse.md)

### Runaway greenhouse

A wet planet cannot radiate more than about 310 W m$^{-2}$, so if it absorbs more, **no equilibrium exists** — the ocean evaporates entirely, is photodissociated, and the hydrogen escapes.

$$\frac{S(1-A)}{4} > F_{\text{crit}} \approx 310\ \mathrm{W\,m^{-2}}$$

*Introduced:* [4.2](lessons/04-02-energy-balance-greenhouse.md)

### Exobase

The altitude where the mean free path equals the scale height, so an upward-moving molecule exceeding escape velocity leaves without colliding. **Everything below it is only a reservoir.**

*Introduced:* [4.3](lessons/04-03-atmospheric-escape.md)

### Jeans parameter and the retention criterion

The ratio of gravitational binding to thermal energy per molecule. Retention over the age of the solar system requires $v_{\text{esc}}/v_{\text{th}} > 6$ — and **temperature enters as strongly as gravity**, which is why cold Titan holds nitrogen at a fifth of Earth's escape velocity.

$$\lambda = \frac{GMm}{kT\,r_{\text{exo}}} = \left(\frac{v_{\text{esc}}}{v_{\text{th}}}\right)^2$$

*Introduced:* [4.3](lessons/04-03-atmospheric-escape.md)

### Hydrodynamic escape

Bulk transonic outflow of an upper atmosphere heated by extreme ultraviolet, dragging heavy species along. Orders of magnitude faster than Jeans escape and **nearly unfractionating**, so it is invisible to isotopic reconstructions.

*Introduced:* [4.3](lessons/04-03-atmospheric-escape.md)

### Diffusion-limited escape

Escape throttled at the *bottom* by how fast a light species diffuses upward through a heavier background. Earth's water loss is limited this way by the tropopause cold trap — which protects the ocean far more than the magnetic field does.

*Introduced:* [4.3](lessons/04-03-atmospheric-escape.md)

### Thermal Rossby number

Thermal driving against rotational stiffness — the single parameter sorting circulation regimes. $\Omega^2a^2$ runs from 3.3 for Venus to $1.6\times10^{8}$ for Jupiter.

$$Ro_T = \frac{R\,\Delta T_h}{\Omega^2a^2}$$

*Introduced:* [4.4](lessons/04-04-atmospheric-circulation.md)

### Rhines scale

The turbulence scale at which eddies organize into zonal jets. Predicts about 17 jets for Jupiter, 7 for Saturn and 3 for Neptune, with no free parameters.

$$L_\beta = \pi\sqrt{\frac{2U}{\beta}}, \qquad N_{\text{jets}} \approx \frac{\pi a}{L_\beta}$$

*Introduced:* [4.4](lessons/04-04-atmospheric-circulation.md)

### Superrotation

An atmosphere carrying more specific angular momentum than the surface beneath it, which requires eddies to transport angular momentum *up*-gradient. Venus and Titan, and probably many hot Jupiters.

*Introduced:* [4.4](lessons/04-04-atmospheric-circulation.md)

### Anti-greenhouse effect

A high absorbing haze that warms the stratosphere and *shades* the surface. Removes about 9 K from Titan against a 21 K greenhouse.

$$T_s^{\text{(anti)}} \approx T_{\text{eq}}\,e^{-\tau_v/4}$$

*Introduced:* [4.5](lessons/04-05-photochemistry-hazes-evolution.md)

### Chemical lifetime

Column abundance over destruction rate. **A short lifetime plus a present-day abundance implies an active source** — the argument that Titan's methane, with a 36 Myr lifetime, must be resupplied.

$$\tau = \frac{N}{\Phi}$$

*Introduced:* [4.5](lessons/04-05-photochemistry-hazes-evolution.md)

### Faint young Sun problem

The Sun was 30 percent fainter at 4.5 Ga, so with today's atmosphere Earth would have stayed frozen until about 2 Ga — yet the rocks show liquid water at 4.3 Ga.

*Introduced:* [4.5](lessons/04-05-photochemistry-hazes-evolution.md)

### Carbonate–silicate cycle

The long-term thermostat: silicate weathering removes CO$_2$ at a rate rising with temperature, volcanism returns it at a rate set by the interior. **Requires liquid water, weatherable land and tectonic return** — and Venus fails on all three.

*Introduced:* [4.5](lessons/04-05-photochemistry-hazes-evolution.md), central to [4.6](lessons/04-06-terrestrial-planets-compared.md)

### The three dials

What decides a terrestrial planet's fate, in order of importance: **distance** (is a runaway avoidable), **mass** (retention and interior longevity), and **carbon recycling** (does a thermostat operate). A magnetic field is a distant fourth.

*Introduced:* [4.6](lessons/04-06-terrestrial-planets-compared.md)

### Metallic hydrogen

Liquid hydrogen above about 100 GPa, dissociated with delocalized electrons — electrically conducting, and the source of Jupiter's and Saturn's dynamos. About 80 percent of Jupiter's mass.

*Introduced:* [5.1](lessons/05-01-giant-ice-giant-interiors.md)

### Helium rain

Helium becoming immiscible in metallic hydrogen at Saturn's cooler interior and settling. Explains **both** Saturn's excess luminosity and its atmospheric helium depletion — two predictions from one mechanism.

*Introduced:* [5.1](lessons/05-01-giant-ice-giant-interiors.md)

### Superionic ice

Water above roughly 100 GPa and 2000 K, with a rigid oxygen lattice and mobile protons. **Conducts but cannot convect**, confining the ice giants' dynamos to a thin shell — hence their multipolar fields tilted 59 and 47 degrees.

*Introduced:* [5.1](lessons/05-01-giant-ice-giant-interiors.md)

### Tidal heating

Dissipation from the periodic flexing of a body on an eccentric orbit. **A circular synchronous orbit heats nothing**; eccentricity is necessary, and a resonance is what maintains it against damping.

$$\dot E = \frac{21}{2}\,\frac{k_2}{Q}\,\frac{G M_p^2 R_s^5\,n\,e^2}{a^6}$$

*Introduced:* [5.2](lessons/05-02-tides-resonances-orbital-evolution.md)

### Laplace resonance

The 1:2:4 lock of Io, Europa and Ganymede, satisfied to 3 parts in $10^5$. It maintains Io's eccentricity against tidal damping that would erase it in a few thousand years.

$$n_1 - 3n_2 + 2n_3 = 0$$

*Introduced:* [5.2](lessons/05-02-tides-resonances-orbital-evolution.md)

### Spin–orbit resonance

A rotation locked to a rational multiple of the orbital period. Usually 1:1, but an eccentric orbit admits higher states — Mercury is 3:2.

*Introduced:* [5.2](lessons/05-02-tides-resonances-orbital-evolution.md)

### Ocean world

A body with a global subsurface liquid-water layer, established by some combination of induced magnetic response, tidal Love number, forced libration and erupted material. **Tens of times more liquid water than Earth, all outside the habitable zone.**

*Introduced:* [5.3](lessons/05-03-ocean-worlds.md)

### High-pressure ice floor

Beyond about 200 MPa, ice polymorphs denser than water form, so a sufficiently deep ocean is floored by ice rather than rock — **cutting it off from the water–rock chemistry** that makes Enceladus and Europa interesting and Titan and Ganymede less so.

*Introduced:* [5.3](lessons/05-03-ocean-worlds.md)

### Roche limit

The distance inside which tidal shear prevents debris from accreting into a moon. **A statement about accretion, not destruction** — a body with material strength survives well inside it.

$$d_{\text{Roche}} = 2.456\,R_p\left(\frac{\rho_p}{\rho_s}\right)^{1/3}$$

*Introduced:* [5.4](lessons/05-04-rings-satellite-systems.md)

### Shepherd moon

A small satellite just outside or inside a ring edge that exchanges angular momentum with stray particles, confining the ring against viscous spreading.

*Introduced:* [5.4](lessons/05-04-rings-satellite-systems.md)

### Spiral density wave

A wave launched at a resonance whose wavelength gives the ring's local surface density directly — the measurement by which Cassini weighed Saturn's rings and concluded they may be young.

*Introduced:* [5.4](lessons/05-04-rings-satellite-systems.md)

### Kirkwood gaps

Depleted orbits in the asteroid belt at mean-motion resonances with Jupiter — 3:1, 5:2, 7:3, 2:1. **Empty orbits, not empty space**, and some resonances (3:2 Hildas, 1:1 Trojans) are *populated* instead.

*Introduced:* [5.5](lessons/05-05-asteroids-comets-kuiper-belt.md)

### Yarkovsky effect

A thermal recoil from asymmetric re-radiation on a rotating body, drifting a kilometre-sized asteroid by about $10^{-4}$ AU per Myr. **The conveyor belt that feeds the resonances**, hence the near-Earth population and the meteorite flux.

*Introduced:* [5.5](lessons/05-05-asteroids-comets-kuiper-belt.md)

### Tisserand parameter

A quasi-invariant under Jupiter's perturbations, used to classify comets: between 2 and 3 means Jupiter-family, below 2 means Oort cloud.

$$T_J = \frac{a_J}{a} + 2\sqrt{\frac{a}{a_J}(1-e^2)}\cos i$$

*Introduced:* [5.5](lessons/05-05-asteroids-comets-kuiper-belt.md)

### Transit depth

The fractional dimming during a transit — a ratio of areas, so it gives $R_p/R_\star$ and nothing about mass.

$$\delta = \left(\frac{R_p}{R_\star}\right)^2$$

*Introduced:* [6.1](lessons/06-01-exoplanet-detection.md)

### Radial-velocity semi-amplitude

The star's line-of-sight velocity swing. Gives $M_p\sin i$ — a **minimum** mass, until a transit or astrometry fixes the inclination.

$$K \approx 28.4\ \mathrm{m\,s^{-1}}\ \frac{M_p\sin i}{M_J}\left(\frac{M_\star}{M_\odot}\right)^{-2/3}\left(\frac{P}{\mathrm{yr}}\right)^{-1/3}$$

*Introduced:* [6.1](lessons/06-01-exoplanet-detection.md)

### Occurrence rate

The debiased fraction of stars hosting a given kind of planet. **Every term in the denominator is less than one**, so it always exceeds the raw detection fraction — by a factor of 190 for a 1 AU orbit.

$$f = \frac{N_{\text{det}}}{N_\star\,p_{\text{tr}}\,C} = \frac{1}{N_\star}\sum_i\frac{1}{p_{\text{tr},i}C_i}$$

*Introduced:* [6.2](lessons/06-02-demographics-selection-effects.md)

### Radius valley

The deficit of close-in planets near $1.8\,R_\oplus$, separating stripped rocky cores near 1.3 from envelope-bearing sub-Neptunes near 2.4. A fossil of atmospheric escape, sharp because **1 percent of hydrogen by mass is 40 percent of the radius.**

*Introduced:* [6.3](lessons/06-03-mass-radius-composition.md)

### Mass–radius relation

$R\propto M^\beta$ with $\beta$ well below $1/3$ for solid planets (0.27 for rock), so **density rises with mass.** The relation flattens above about $0.5\,M_J$ and reverses in the degenerate regime.

*Introduced:* [6.3](lessons/06-03-mass-radius-composition.md)

### Transmission spectroscopy

Measuring transit depth against wavelength. The amplitude scales as $R_pH/R_\star^2$ and hence as $1/\mu$, so **it measures the mean molecular weight** — which is what breaks the water-versus-hydrogen degeneracy that mass and radius leave open.

$$\Delta\delta \approx \frac{2R_pN_HH}{R_\star^2}$$

*Introduced:* [6.4](lessons/06-04-exoplanet-atmospheres.md)

### Phase curve

The system's flux around the orbit. Its **amplitude** gives the day–night contrast and hence redistribution efficiency; its **offset** from secondary eclipse gives the wind speed at the photosphere.

*Introduced:* [6.4](lessons/06-04-exoplanet-atmospheres.md)

### Habitable zone

The orbital range where starlight can keep liquid water on the *surface* of a planet with an Earth-like atmosphere. Conservative bounds $S_{\text{eff}} = 1.107$ to $0.356$; for the Sun, 0.95 to 1.67 AU.

$$\frac{a}{\text{AU}} = \sqrt{\frac{L/L_\odot}{S_{\text{eff}}}}$$

*Introduced:* [6.5](lessons/06-05-habitability-and-its-limits.md)

### Biosignature false positive

An abiotic route to a proposed biosignature — water photolysis plus hydrogen escape on a dry planet, or CO$_2$ photolysis around an M dwarf, both building O$_2$ without life. **Every proposed biosignature now has one.**

*Introduced:* [6.5](lessons/06-05-habitability-and-its-limits.md)

## Formulas and rules

### Solar-system constants

| Quantity | Value |
|---|---|
| $G$ | $6.674\times10^{-11}\ \mathrm{m^3\,kg^{-1}\,s^{-2}}$ |
| $\sigma$ | $5.670\times10^{-8}\ \mathrm{W\,m^{-2}\,K^{-4}}$ |
| $k$ | $1.381\times10^{-23}\ \mathrm{J\,K^{-1}}$ |
| $m_H$ (amu) | $1.661\times10^{-27}$ kg |
| AU | $1.496\times10^{11}$ m |
| $M_\odot$, $R_\odot$, $L_\odot$ | $1.989\times10^{30}$ kg, $6.957\times10^{8}$ m, $3.828\times10^{26}$ W |
| $M_\oplus$, $R_\oplus$ | $5.972\times10^{24}$ kg, $6.371\times10^{6}$ m |
| $M_J$, $R_J$ | $1.898\times10^{27}$ kg ($317.8\,M_\oplus$), $6.991\times10^{7}$ m ($11.21\,R_\oplus$) |
| solar constant at 1 AU | $1361\ \mathrm{W\,m^{-2}}$ |
| 1 yr | $3.156\times10^{7}$ s |

### Disk and formation

| Quantity | Formula |
|---|---|
| centrifugal radius | $R_c = j^2/GM$ |
| free-fall time | $t_{\text{ff}} = \sqrt{3\pi/32G\rho}$ |
| equilibrium temperature in a disk | $T = 278\ \mathrm{K}\,(L/L_\odot)^{1/4}(r/\mathrm{AU})^{-1/2}$ |
| early viscous profile | $T \approx 550\ \mathrm{K}\,(r/\mathrm{AU})^{-3/4}$ |
| solid surface density | $7.1\,r^{-3/2}$ inside, $30\,r^{-3/2}$ outside the frost line, $\mathrm{g\,cm^{-2}}$ |
| annulus solid mass | $M = 2\pi\Sigma_1a^2\left[2\sqrt r\right]_{r_1}^{r_2}$ with $\Sigma\propto r^{-3/2}$ |
| Stokes number | $\mathrm{St} = \rho_s s\Omega/(\rho_gv_{\text{th}})$ |
| radial drift speed | $v_{\text{drift}} = 2\eta v_K\,\mathrm{St}/(1+\mathrm{St}^2)$, maximal at $\mathrm{St}=1$ |
| gravitational focusing | $\sigma = \pi R^2\left(1+v_{\text{esc}}^2/v_{\text{rel}}^2\right)$ |
| Hill radius | $R_H = a(M/3M_\odot)^{1/3}$ |
| isolation mass | $M_{\text{iso}} = \left[4\pi b\,a^2\Sigma_{\text{solid}}/(3M_\odot)^{1/3}\right]^{3/2}$ |
| Type I migration | $t_{\text{I}} \sim \frac{1}{2.7}\frac{M_\star}{M_p}\frac{M_\star}{\Sigma a^2}\frac{h^2}{\Omega}$ |
| gap-opening criterion | $M_p/M_\star \gtrsim 3h^3$ |
| resonance location | $a_r = a_m(q/p)^{2/3}$ |

*From* [1.1](lessons/01-01-protoplanetary-disk.md), [1.2](lessons/01-02-condensation-frost-line.md), [1.3](lessons/01-03-accretion-dust-to-planetesimals.md), [1.4](lessons/01-04-giant-planets-migration.md)

### Radiometric dating

| System | $t_{1/2}$ | Use |
|---|---|---|
| $^{238}$U $\to$ $^{206}$Pb | 4.468 Gyr | the precision absolute clock, paired with $^{235}$U |
| $^{235}$U $\to$ $^{207}$Pb | 0.704 Gyr | as above; two decays must agree |
| $^{87}$Rb $\to$ $^{87}$Sr | 48.8 Gyr | textbook isochron |
| $^{147}$Sm $\to$ $^{143}$Nd | 106 Gyr | alteration-resistant |
| $^{26}$Al $\to$ $^{26}$Mg | 0.72 Myr | fine relative chronology; also the early heat source |
| $^{182}$Hf $\to$ $^{182}$W | 8.9 Myr | **core formation** |
| $^{129}$I $\to$ $^{129}$Xe | 15.7 Myr | early atmospheric loss |

$$D(t) = D_0 + P(t)\left(e^{\lambda t}-1\right), \qquad t = \frac{\ln(1+\text{slope})}{\lambda}, \qquad \frac{N_1}{N_2} = 2^{\Delta t/t_{1/2}}$$

**Rule of thumb:** a system resolves events from about $0.1\,t_{1/2}$ to about $5\,t_{1/2}$, and is blind outside that window.

*From* [1.5](lessons/01-05-meteorites-isotopic-clocks.md), [1.6](lessons/01-06-cosmochemistry-volatile-delivery.md)

### Interiors and thermal evolution

| Quantity | Formula |
|---|---|
| hydrostatic balance | $dP/dr = -\rho g$ |
| uniform central pressure | $P_c = 3GM^2/(8\pi R^4)$ — **low by about 2× for real planets** |
| two-layer mean density | $x^3 = (\bar\rho-\rho_m)/(\rho_c-\rho_m)$ |
| two-layer $C/MR^2$ | $\frac{2}{5}\left[\rho_cx^5+\rho_m(1-x^5)\right]/\left[\rho_cx^3+\rho_m(1-x^3)\right]$ |
| conduction timescale | $t = L^2/\kappa$, $\kappa\approx10^{-6}\ \mathrm{m^2\,s^{-1}}$ for rock |
| Rayleigh number | $Ra = \rho\alpha g\Delta T d^3/(\kappa\eta)$, critical $\sim10^3$ |
| Nusselt number | $Nu \sim (Ra/Ra_c)^{1/3}$ |
| surface-to-volume | $3/R$ — geological lifetime scales roughly with radius |
| field free-decay | $\tau = \mu_0\sigma L^2/\pi^2$ |
| magnetic Reynolds | $Rm = \mu_0\sigma uL > 40$ |
| lithosphere thickness | $d_{\text{lith}} = k\Delta T/q$ |
| max volcano height | $h_{\max}\propto1/g$; Mauna Loa 9 km $\to$ Olympus Mons 22 km |

*From* [2.1](lessons/02-01-differentiation-interior-structure.md), [2.2](lessons/02-02-thermal-evolution-heat-transport.md), [2.3](lessons/02-03-magnetic-fields-dynamo.md), [2.5](lessons/02-05-volcanism-tectonics.md)

### Observed interior and thermal values

| Body | $\bar\rho$ | $C/MR^2$ | $g$ | surface flux |
|---|---|---|---|---|
| Mercury | 5427 | 0.346 | 3.70 | — |
| Venus | 5243 | — | 8.87 | — |
| Earth | 5513 | 0.3307 | 9.81 | 90 mW m$^{-2}$ (46 TW) |
| Moon | 3346 | 0.3931 | 1.62 | 16 mW m$^{-2}$ |
| Mars | 3932 | 0.3644 | 3.71 | ~20 mW m$^{-2}$ |
| Io | 3528 | — | 1.80 | **2500 mW m$^{-2}$** (104 TW) |
| Europa | 3013 | 0.346 | 1.31 | ~50 mW m$^{-2}$ |
| Jupiter | 1326 | ~0.254 | 24.8 | — |
| Saturn | 687 | ~0.210 | 10.4 | — |
| Uranus | 1271 | ~0.23 | 8.87 | — |
| Neptune | 1638 | ~0.23 | 11.2 | — |

*From* [2.1](lessons/02-01-differentiation-interior-structure.md), [2.2](lessons/02-02-thermal-evolution-heat-transport.md), [5.1](lessons/05-01-giant-ice-giant-interiors.md)

### Cratering and surface dating

| Quantity | Formula |
|---|---|
| lunar chronology | $N(1) = 5.44\times10^{-14}(e^{6.93T}-1)+8.38\times10^{-4}T$ |
| simple-to-complex | $D_t\approx31\ \mathrm{km}/g$ (rocky); ten times smaller for ice |
| crater scaling | $D\propto(\rho_i/\rho_t)^{1/3}d_i^{0.78}v^{0.44}g^{-0.22}$ |
| production function | $N(>D)\propto D^{-1.8}$ at km scales |
| counting statistics | $\sigma_N/N = 1/\sqrt N$ |

| $T$ (Gyr) | 1.0 | 3.0 | 3.5 | 3.8 | 4.1 | 4.4 |
|---|---|---|---|---|---|---|
| $N(1)$ | $8.4\times10^{-4}$ | $2.6\times10^{-3}$ | $4.8\times10^{-3}$ | $1.8\times10^{-2}$ | $1.2\times10^{-1}$ | $9.5\times10^{-1}$ |

**Highlands carry about 200 times the maria's density**, not the 1.26 a constant flux would give.

*From* [2.4](lessons/02-04-impact-cratering-chronology.md), [2.6](lessons/02-06-reading-planetary-surface.md), [2.7](lessons/02-07-moon-earth-moon-system.md)

### Remote measurement

| Quantity | Formula |
|---|---|
| mass from an orbit | $GM = 4\pi^2a^3/P^2$ |
| flyby deflection | $\tan(\theta/2) = GM/(bv_\infty^2)$ |
| gravitational potential | $V = -\frac{GM}{r}\left[1-\sum_nJ_n(R/r)^nP_n(\cos\theta)\right]$ |
| combining for $C$ | $C/MR^2 = J_2\big/\left[(C-A)/C\right]$ |
| Radau–Darwin | $C/MR^2\approx\frac23\left[1-\frac25\sqrt{5q/2f-1}\right]$ |
| Airy root | $r = h\rho_c/(\rho_m-\rho_c)$ |
| flexural rigidity | $D = ET_e^3/\left[12(1-\nu^2)\right]$ |
| flexural parameter | $\alpha = \left[4D/(\Delta\rho g)\right]^{1/4}$ |
| tidal amplitude | $\Delta r\approx3eh_2(M_p/M_s)(R_s/a)^3R_s$ |
| thermal inertia | $\Gamma = \sqrt{k\rho c_p}$; skin depth $\sqrt{\kappa P/\pi}$ |
| band depth | $D = 1-R_b/R_c$ |
| magnetopause | $R_{\text{mp}} = R\left[B_0^2/(2\mu_0\rho v^2)\right]^{1/6}$ |
| EM skin depth | $\delta = \sqrt{2/(\mu_0\sigma\omega)}$ |

**Diagnostic band positions (μm):** 0.95 and 2.0 pyroxene; 1.05 olivine; 1.5 and 2.0 water ice; 2.2–2.3 clays; 3.0 O–H; 3.4 organics; 4.26 CO$_2$.

**Typical $\Gamma$:** fine dust 110, coarse sand 350, solid rock 2450, water ice 1800 $\mathrm{J\,m^{-2}\,K^{-1}\,s^{-1/2}}$.

**Typical $k_2$:** rigid rock 0.02, Mars 0.17, Earth 0.30, Titan 0.6, Europa (with ocean) ~1.2, fluid limit 1.5.

*From* [3.1](lessons/03-01-mass-density-moment-of-inertia.md), [3.2](lessons/03-02-gravity-topography-tidal-response.md), [3.3](lessons/03-03-remote-spectroscopy.md), [3.4](lessons/03-04-magnetospheres-solar-wind.md)

### Atmospheres

| Quantity | Formula |
|---|---|
| scale height | $H = kT/(\mu m_Hg)$ |
| barometric law | $P = P_0\exp\left(-\int dz/H\right)$ |
| dry adiabat | $\Gamma_d = g/c_p$ |
| atmospheric mass | $M_{\text{atm}} = P_s\,4\pi R^2/g$ |
| equilibrium temperature | $T_{\text{eq}} = \left[S(1-A)/4\sigma\right]^{1/4}$ |
| grey greenhouse | $T_s^4 = T_{\text{eq}}^4(1+3\tau/4)$ |
| emitting-level form | $T_s\approx T_{\text{eq}}+\Gamma z_{\text{emit}}$ |
| runaway condition | $S(1-A)/4 > F_{\text{crit}}\approx310\ \mathrm{W\,m^{-2}}$ |
| thermal speed | $v_{\text{th}} = \sqrt{2kT/m}$ |
| retention criterion | $v_{\text{esc}}/v_{\text{th}} > 6$ |
| Jeans flux | $\Phi_J = \frac{n_{\text{exo}}v_{\text{th}}}{2\sqrt\pi}(1+\lambda)e^{-\lambda}$ |
| energy-limited escape | $\dot M = \varepsilon\pi R_p^3F_{\text{XUV}}/(GM_p)$ |
| Hadley jet speed | $u(\phi) = \Omega a\sin^2\phi/\cos\phi$ |
| Rhines scale | $L_\beta = \pi\sqrt{2U/\beta}$, $\beta = 2\Omega\cos\phi/a$ |
| radiative timescale | $\tau_{\text{rad}}\sim Pc_p/(g\sigma T^3)$ |
| anti-greenhouse | $T_s\approx T_{\text{eq}}e^{-\tau_v/4}$ |

### Atmospheric reference values

| Body | $H$ | $\Gamma_d$ | $S$ | $A$ | $T_{\text{eq}}$ | $T_s$ | greenhouse | $\Omega^2a^2$ |
|---|---|---|---|---|---|---|---|---|
| Venus | 15.8 km | 9.9 | 2601 | 0.77 | 227 K | 737 K | **510 K** | 3.3 |
| Earth | 7.3 km | 9.8 | 1361 | 0.30 | 255 K | 288 K | 33 K | $2.16\times10^{5}$ |
| Mars | 10.9 km | 4.8 | 586 | 0.25 | 210 K | 210 K | ~0 K | $5.8\times10^{4}$ |
| Titan | 20.2 km | 1.3 | 14.9 | 0.22 | 85 K | 94 K | 9 K | 138 |
| Jupiter | 24.9 km | 1.9 | — | — | — | — | — | $1.6\times10^{8}$ |

**Retention ratios at a 1000 K exobase:** Earth ($v_{\text{esc}} = 11.2$) gives 2.8 for H, 5.5 for He, 14.5 for N$_2$; Mars ($5.0$) gives 1.2 for H and 6.5 for N$_2$.

*From* [4.1](lessons/04-01-atmospheric-structure.md), [4.2](lessons/04-02-energy-balance-greenhouse.md), [4.3](lessons/04-03-atmospheric-escape.md), [4.4](lessons/04-04-atmospheric-circulation.md), [4.5](lessons/04-05-photochemistry-hazes-evolution.md), [4.6](lessons/04-06-terrestrial-planets-compared.md)

### Tides, resonances and rings

| Quantity | Formula |
|---|---|
| mean motion | $n = \sqrt{GM_p/a^3}$ |
| tidal heating | $\dot E = \frac{21}{2}\frac{k_2}{Q}\frac{GM_p^2R_s^5\,n\,e^2}{a^6}$ |
| tidal migration | $\dot a\propto a^{-11/2}$, so $a^{13/2}\propto t$ and $t = \frac{2}{13}(a/\dot a)$ |
| Roche limit (fluid) | $d = 2.456R_p(\rho_p/\rho_s)^{1/3}$; rigid version uses 1.26 |
| resonance location | $a_r = a_m(q/p)^{2/3}$ |
| ice-shell thickness | $d = \frac{567}{q}\ln(T_m/T_s)$ with $k(T) = 567/T$ |

**Key numbers:** Io $k_2/Q\approx0.017$ and 104 TW; Laplace resonance exact to $3\times10^{-5}$; Saturn's Roche limit 135,276 km against the A ring's edge at 136,775; Cassini Division at the 2:1 with Mimas, 116,883 predicted against 117,580 observed; Kirkwood gaps at 2.50, 2.82, 2.96, 3.28 AU.

*From* [5.2](lessons/05-02-tides-resonances-orbital-evolution.md), [5.3](lessons/05-03-ocean-worlds.md), [5.4](lessons/05-04-rings-satellite-systems.md), [5.5](lessons/05-05-asteroids-comets-kuiper-belt.md)

### Exoplanets

| Quantity | Formula |
|---|---|
| transit depth | $\delta = (R_p/R_\star)^2$ |
| transit duration | $T\approx(P/\pi)(R_\star/a)$ for a central transit |
| transit probability | $p_{\text{tr}} = R_\star/a$ |
| RV amplitude | $K\approx28.4\ \mathrm{m\,s^{-1}}\,(M_p\sin i/M_J)(M_\star/M_\odot)^{-2/3}(P/\mathrm{yr})^{-1/3}$ |
| astrometric signal | $\alpha = (M_p/M_\star)(a/d)$, arcsec with $a$ in AU and $d$ in pc |
| signal-to-noise | $\mathrm{S/N}\propto(R_p/R_\star)^2\sqrt{T_{\text{obs}}/P}$ |
| occurrence rate | $f = N_{\text{det}}/(N_\star p_{\text{tr}}C)$ |
| mass–radius (rock) | $R/R_\oplus = (M/M_\oplus)^{0.27}$; iron $0.80M^{0.24}$; 50% water $1.42M^{0.30}$ |
| density | $\bar\rho = 5513\,(M/M_\oplus)/(R/R_\oplus)^3\ \mathrm{kg\,m^{-3}}$ |
| transmission signal | $\Delta\delta\approx2R_pN_HH/R_\star^2$ |
| eclipse depth (R–J) | $F_p/F_\star\approx(R_p/R_\star)^2(T_p/T_\star)$ |
| habitable zone | $a = \sqrt{(L/L_\odot)/S_{\text{eff}}}$ |
| tidal locking radius | $a_{\text{lock}}\approx0.5(M_\star/M_\odot)^{1/3}$ AU |

**Signal scales:** Jupiter/Sun transit 1.01%, Earth/Sun 84 ppm, Earth/M-dwarf 2100 ppm. Jupiter $K = 12.5$ m/s, Earth 8.9 cm/s. Transit probability 0.47% at 1 AU, 9.3% at 0.05 AU.

**HZ boundaries:** $S_{\text{eff}} = 1.776$ (recent Venus), $1.107$ (runaway), $0.356$ (max greenhouse), $0.320$ (early Mars) — for the Sun, 0.75, 0.95, 1.67, 1.77 AU.

**Debiased occurrence (FGK):** hot Jupiters ~1%, giants ~10–20%, sub-Neptunes ~30%, super-Earths ~30%, $\eta_\oplus$ 2%–50% and badly constrained.

*From* [6.1](lessons/06-01-exoplanet-detection.md), [6.2](lessons/06-02-demographics-selection-effects.md), [6.3](lessons/06-03-mass-radius-composition.md), [6.4](lessons/06-04-exoplanet-atmospheres.md), [6.5](lessons/06-05-habitability-and-its-limits.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Conservation of angular momentum, free-fall, rigid-body precession | [`mechanics-refresher`](../mechanics-refresher/syllabus.md) |
| Two-body orbits, orbital elements, Kepler's laws, the restricted three-body problem, Lagrange points, transfers | [`orbital-mechanics`](../orbital-mechanics/syllabus.md) |
| Cloud collapse, the Jeans criterion, star formation, the initial mass function | [astrophysics 3.1](../astrophysics/lessons/03-01-star-formation-jeans.md) |
| Main-sequence structure and the Sun's brightening | [astrophysics 2.5](../astrophysics/lessons/02-05-main-sequence.md) |
| Blackbody radiation, radiative transfer, line formation, opacity | [astrophysics 1.2](../astrophysics/lessons/01-02-blackbody-spectra-hr-diagram.md), [1.3](../astrophysics/lessons/01-03-radiative-transfer-spectral-lines.md) |
| The radioactive decay law and decay chains | [intro-nuclear-engineering 1.3](../intro-nuclear-engineering/lessons/01-03-radioactivity-decay-law.md) |
| Thermodynamic potentials, adiabats, Clausius–Clapeyron | [`thermodynamics-physics`](../thermodynamics-physics/syllabus.md) |
| The Maxwell–Boltzmann distribution and its tail integrals | [`stat-mech`](../stat-mech/syllabus.md) |
| Hydrostatic balance, the barometric law, potential temperature, convective stability | [atmospheric-science 1.2](../atmospheric-science/lessons/01-02-hydrostatic-equation-barometric-law.md)–[1.4](../atmospheric-science/lessons/01-04-potential-temperature.md) |
| Coriolis, geostrophy, thermal wind, the Hadley circulation | [atmospheric-science 4.2](../atmospheric-science/lessons/04-02-coriolis-effect.md)–[4.4](../atmospheric-science/lessons/04-04-thermal-wind-general-circulation.md) |
| Earth's greenhouse, radiative forcing, feedbacks, climate sensitivity, the carbon cycle | [`climate-science`](../climate-science/syllabus.md) |
| Rayleigh–Bénard convection, boundary-layer scaling, Stokes and Epstein drag | [fluid-dynamics 4.3](../fluid-dynamics/lessons/04-03-instability-kh-rb.md), [3.3](../fluid-dynamics/lessons/03-03-stokes-flow.md) |
| The diffusion equation and periodic heating of a half-space | [heat-transfer 2.2](../heat-transfer/lessons/02-02-semi-infinite-solid.md) |
| The induction equation, frozen flux, the solar wind, reconnection | [plasma-physics 5.3](../plasma-physics/lessons/05-03-solar-wind-magnetospheres.md), [5.4](../plasma-physics/lessons/05-04-magnetic-reconnection.md) |
| Earth's seismology, gravity reductions, isostasy, flexure, mantle convection, the geodynamo, the deep Earth | [`geophysics`](../geophysics/syllabus.md) |
| Rocks and minerals, stratigraphy as field practice, terrestrial impact structures, weathering reactions | [`geology`](../geology/syllabus.md) |
| Elastic moduli, the thin-plate equation, viscoelastic damping | [`mechanics-of-materials`](../mechanics-of-materials/syllabus.md) |
| Phase diagrams and high-pressure polymorphs | [materials-science 3.1](../materials-science/lessons/03-01-phase-diagrams-lever-rule.md) |
| Photochemical kinetics, equilibrium constants, vibrational and crystal-field transitions | [`physical-chemistry`](../physical-chemistry/syllabus.md) |
| Poisson statistics, likelihood, survey debiasing, inverse problems | [`prob-stat-refresher`](../prob-stat-refresher/syllabus.md), [`statistical-learning`](../statistical-learning/syllabus.md) |
| Legendre polynomials and potential expansions | [`mathematical-methods-physics`](../mathematical-methods-physics/syllabus.md) |
| Adiabatic invariants, resonance capture, libration versus circulation | [`analytical-mechanics`](../analytical-mechanics/syllabus.md), [`dynamical-systems`](../dynamical-systems/syllabus.md) |
| Serpentinization, chemosynthesis, metabolism, the origin of life | [`biochemistry`](../biochemistry/syllabus.md), [`evolution-ecology`](../evolution-ecology/syllabus.md) |
| Degenerate matter and the white-dwarf mass–radius relation | [`stat-mech`](../stat-mech/syllabus.md), [`astrophysics`](../astrophysics/syllabus.md) |

## Pitfalls

### One number is not two unknowns

- Mean density gives bulk composition and says nothing about arrangement; a mixed ball and a differentiated planet are identical in it. *([2.1](lessons/02-01-differentiation-interior-structure.md))*
- $C/MR^2$ is one equation in two unknowns and its curve is **not monotonic** — values below the minimum admit two core radii. *([2.1](lessons/02-01-differentiation-interior-structure.md))*
- $J_2 = (C-A)/MR^2$ contains the *difference* of the moments; getting $C$ needs a second, independent measurement. *([3.1](lessons/03-01-mass-density-moment-of-inertia.md))*
- Mass plus radius leaves water-rich and hydrogen-envelope solutions degenerate; only the mean molecular weight separates them. *([6.3](lessons/06-03-mass-radius-composition.md), [6.4](lessons/06-04-exoplanet-atmospheres.md))*

### Exponentials and thresholds

- Crater density is **exponential** in age before 3.5 Gyr, so a tenfold difference is a few hundred Myr, not a factor of ten. *([2.4](lessons/02-04-impact-cratering-chronology.md))*
- Escape goes as $e^{-\lambda}$, so the transition from "keeps it forever" to "loses it at once" spans a narrow range and the outcome is near-binary. *([4.3](lessons/04-03-atmospheric-escape.md))*
- Mantle viscosity is exponential in temperature, so quoting a Rayleigh number without stating $\eta$ is close to meaningless. *([2.2](lessons/02-02-thermal-evolution-heat-transport.md))*
- The magnetopause goes as the **sixth root** of pressure: a tenfold change moves it only 32 percent. *([3.4](lessons/03-04-magnetospheres-solar-wind.md))*
- $T_s\propto\tau^{1/4}$ and real gas bands saturate logarithmically, so doubling a greenhouse gas does far less than doubling the warming. *([4.2](lessons/04-02-energy-balance-greenhouse.md))*

### Present rates do not extrapolate

- The Moon's 3.8 cm/yr recession run backwards gives 1.56 Gyr for a 4.5 Gyr system, because today's ocean basins are near tidal resonance. *([2.7](lessons/02-07-moon-earth-moon-system.md))*
- Present ion escape at Mars, extrapolated over 4 Gyr, delivers under 2 percent of an early bar — the loss was early and hydrodynamic. *([3.4](lessons/03-04-magnetospheres-solar-wind.md), [4.3](lessons/04-03-atmospheric-escape.md))*
- An isotopic enrichment measures loss **times fractionation efficiency**, and unfractionating channels — blow-off, impact erosion — are invisible to it. Every such estimate is a lower bound. *([1.6](lessons/01-06-cosmochemistry-volatile-delivery.md), [4.5](lessons/04-05-photochemistry-hazes-evolution.md))*

### What a measurement is actually of

- Orbits measure $GM$, not $M$; planetary masses are limited by $G$ to 2 parts in $10^{5}$. *([3.1](lessons/03-01-mass-density-moment-of-inertia.md))*
- A transit gives $R_p/R_\star$, so every planet radius inherits its stellar radius's errors. *([6.1](lessons/06-01-exoplanet-detection.md))*
- Radial velocity gives $M_p\sin i$ — a minimum. *([6.1](lessons/06-01-exoplanet-detection.md))*
- A radiometric date is a **closure** age, not a formation age; discordant systems in one rock are recording different events. *([1.5](lessons/01-05-meteorites-isotopic-clocks.md))*
- Spectroscopy characterizes a **skin** — tens of microns in the near-infrared, centimetres in the thermal. A millimetre of dust hides everything below. *([3.3](lessons/03-03-remote-spectroscopy.md))*
- Band depth is not abundance: grain size, geometry and dark contaminants all move it, and intimate mixing is non-linear. *([3.3](lessons/03-03-remote-spectroscopy.md))*
- Elastic thickness is not lithosphere thickness, and it records conditions when the load was emplaced. *([3.2](lessons/03-02-gravity-topography-tidal-response.md))*
- Relative dating gives a **partial order**; features that never touch cannot be ordered, and morphology names a process, not a substance. *([2.6](lessons/02-06-reading-planetary-surface.md))*

### Selection effects

- Detections measure abundance **times** detectability. Hot Jupiters dominated early catalogues and orbit about 1 percent of stars. *([6.2](lessons/06-02-demographics-selection-effects.md))*
- $N_\star$ is the number of stars for which the signal was detectable, not the number surveyed. *([6.2](lessons/06-02-demographics-selection-effects.md))*
- $\eta_\oplus$ is extrapolated, not measured; published values span more than an order of magnitude because of the assumed functional form. *([6.2](lessons/06-02-demographics-selection-effects.md))*
- Crater counts are comparable only between images of comparable resolution; asteroid taxonomies lump physically unrelated bodies when spectra are featureless. *([2.6](lessons/02-06-reading-planetary-surface.md), [3.3](lessons/03-03-remote-spectroscopy.md), [5.5](lessons/05-05-asteroids-comets-kuiper-belt.md))*

### Things that are not what they sound like

- The Roche limit is about **accretion**, not destruction; a body with strength survives well inside it. *([5.4](lessons/05-04-rings-satellite-systems.md))*
- A resonance clears **or protects** depending on libration geometry: Kirkwood gaps versus Hildas, Trojans and Pluto. *([5.4](lessons/05-04-rings-satellite-systems.md), [5.5](lessons/05-05-asteroids-comets-kuiper-belt.md))*
- Kirkwood gaps are empty **orbits**, not empty space. *([5.5](lessons/05-05-asteroids-comets-kuiper-belt.md))*
- "Ice giant" names a formation composition; the interior is a hot ionic fluid at thousands of kelvin. *([1.2](lessons/01-02-condensation-frost-line.md), [5.1](lessons/05-01-giant-ice-giant-interiors.md))*
- Conductivity is not enough for a dynamo — superionic ice conducts and cannot convect. *([2.3](lessons/02-03-magnetic-fields-dynamo.md), [5.1](lessons/05-01-giant-ice-giant-interiors.md))*
- A large scale height means a *puffy* atmosphere, not a thick one; Mars beats Earth on $H$ and has 1/160 the surface pressure. *([4.1](lessons/04-01-atmospheric-structure.md))*
- The habitable zone is a statement about **starlight and a bare surface**, which excludes every ocean world by construction. *([5.3](lessons/05-03-ocean-worlds.md), [6.5](lessons/06-05-habitability-and-its-limits.md))*

### Claims this course pushes back on

- **"A magnetic field protects an atmosphere."** Earth, Venus and Mars all lose ions at about 1 kg s$^{-1}$. Mars's failure was gravity and the young Sun, not the dynamo. *([3.4](lessons/03-04-magnetospheres-solar-wind.md), [4.6](lessons/04-06-terrestrial-planets-compared.md))*
- **"Venus is hot because it is close to the Sun."** It absorbs 37 percent *less* energy per square metre than Earth. *([4.2](lessons/04-02-energy-balance-greenhouse.md))*
- **"Earth has less carbon than Venus."** The inventories are comparable; Earth's is in limestone. *([4.6](lessons/04-06-terrestrial-planets-compared.md))*
- **"Faster rotation makes a stronger field."** Field strength tracks the buoyancy flux; rotation controls the *geometry*. *([2.3](lessons/02-03-magnetic-fields-dynamo.md))*
- **"The Late Heavy Bombardment happened."** Contested — the Apollo sample bias toward Imbrium ejecta undermines the key evidence. *([2.4](lessons/02-04-impact-cratering-chronology.md))*
- **"Saturn's rings are primordial."** The measured mass and cleanliness suggest 10–100 Myr, though the pollution rate is uncertain. *([5.4](lessons/05-04-rings-satellite-systems.md))*
- **"The giant impact is settled."** It explains everything except why the Moon is isotopically identical to Earth. *([2.7](lessons/02-07-moon-earth-moon-system.md))*
- **"Being in the habitable zone means habitable."** It means a runaway is avoidable now; staying temperate needs a thermostat the framework does not check for. *([6.5](lessons/06-05-habitability-and-its-limits.md))*

---

## Conventions

- **One card per course**, covering every lesson. The linter checks that every
  lesson file is cited somewhere on this card.
- **Intuition first**, same as lessons: a plain-English line before any formula.
- **Headings are anchors.** Renaming a `###` breaks inbound lesson links; the
  linter catches it, but prefer not to rename.
- **No prose dollar signs** — write "10 dollars", not the symbol (see CLAUDE.md).
- Length is not capped the way a lesson's is: this is a lookup surface, not a
  read-through. But every line still has to earn its place.
