# Physical Oceanography · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

The ocean is a rotating, stratified, salt-driven fluid, and almost every result in
this course is one of four things: a **balance** (geostrophy, thermal wind, Sverdrup,
Ekman), a **conserved quantity** (potential temperature, salinity, potential
vorticity), a **budget** (heat, freshwater, mass, energy), or a **wave**. Four things
are worth checking here every single time: **which density** a statement uses
([in-situ, potential, or referenced to what pressure](#potential-density)), **which
sign convention** for $f$ and for depth-versus-$z$ ([half the errors in the subject](#sign-conventions)),
**whether a quantity is a transport or a velocity** (the units differ by a length,
and [$\mathrm{m^2\,s^{-1}}$ is a transport per unit width](#sverdrup-unit)), and
**whether you are inverting a small difference** — because [most of the contested
numbers in this course](#small-differences) come from that.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $T$, $\theta$, $\Theta$ | in-situ, potential and conservative temperature; $\theta < T$ always at depth | [1.1](lessons/01-01-temperature-salinity-pressure.md) |
| $S$, $S_A$ | practical salinity (**dimensionless**) and absolute salinity (g kg⁻¹); $S_A \approx 1.0047\,S_P$ | [1.1](lessons/01-01-temperature-salinity-pressure.md) |
| $p$ | pressure, used as the vertical coordinate; $1\ \mathrm{dbar} \approx 1\ \mathrm{m}$ | [1.1](lessons/01-01-temperature-salinity-pressure.md) |
| $\Gamma$ | adiabatic lapse rate of seawater, $\alpha gT/c_p \approx 0.1\ \mathrm{K\,km^{-1}}$ | [1.1](lessons/01-01-temperature-salinity-pressure.md) |
| $\alpha$, $\beta$ | thermal expansion (K⁻¹) and haline contraction; $\alpha$ varies **sixfold**, $\beta$ barely | [1.2](lessons/01-02-density-equation-of-state.md) |
| $\sigma_\theta$, $\sigma_2$, $\sigma_4$ | potential density minus 1000, referenced to 0, 2000, 4000 dbar | [1.2](lessons/01-02-density-equation-of-state.md) |
| $x$ (mixing fraction) | mass fraction of one end-member in a two-component mixture | [1.3](lessons/01-03-ts-diagrams-water-masses.md) |
| $N$, $N^2$ | buoyancy frequency; $N^2 = -\tfrac{g}{\rho_0}\tfrac{d\bar\rho}{dz}$ | [1.4](lessons/01-04-stratification-buoyancy-frequency.md) |
| $R_\rho$ | density ratio $\alpha\theta_z/(\beta S_z)$ — diagnoses double diffusion | [1.4](lessons/01-04-stratification-buoyancy-frequency.md) |
| $h$ | mixed-layer depth in Module 1; **layer thickness** in PV; **thermocline depth** in Module 5 | [1.5](lessons/01-05-mixed-layer-air-sea-fluxes.md) |
| $Q_{\text{net}}$, $B$ | net surface heat flux (W m⁻²) and surface buoyancy flux (m² s⁻³) | [1.5](lessons/01-05-mixed-layer-air-sea-fluxes.md) |
| $E-P-R$ | evaporation minus precipitation minus runoff (m s⁻¹); a *virtual* salt flux | [1.5](lessons/01-05-mixed-layer-air-sea-fluxes.md) |
| $\eta$ | sea-surface elevation; about 1 m across a gyre | [2.1](lessons/02-01-geostrophy-dynamic-method.md) |
| $\delta$, $\Delta\Phi$ | specific volume anomaly and geopotential anomaly (m² s⁻²) | [2.1](lessons/02-01-geostrophy-dynamic-method.md) |
| $s$ | isopycnal slope $\partial z_{\text{iso}}/\partial y$; $10^{-4}$ typically, $10^{-3}$ in the ACC | [2.2](lessons/02-02-thermal-wind-acc.md) |
| $\boldsymbol\tau$, $u_*$ | wind stress (N m⁻²) and water-side friction velocity $\sqrt{\tau/\rho_0}$ | [2.3](lessons/02-03-ekman-layer-transport.md) |
| $\mathbf{M}_E$ | Ekman transport, $\boldsymbol\tau\times\hat{\mathbf z}/(\rho_0f)$, in **m² s⁻¹** | [2.3](lessons/02-03-ekman-layer-transport.md) |
| $A_z$, $d$, $D_E$ | vertical eddy viscosity, Ekman e-folding depth $\sqrt{2A_z/f}$, Ekman depth $\pi d$ | [2.3](lessons/02-03-ekman-layer-transport.md) |
| $w_E$ | Ekman pumping, $\nabla\cdot\mathbf{M}_E$; positive **upward**; tens of m yr⁻¹ | [2.4](lessons/02-04-ekman-pumping-wind-stress-curl.md) |
| $q$ (PV) | potential vorticity $(f+\zeta)/h$; also **overturning strength** in [6.4](lessons/06-04-amoc-stability-stommel-model.md) | [2.5](lessons/02-05-potential-vorticity-stratified-ocean.md) |
| $L_d$ | first-baroclinic deformation radius, $c_1/|f|$; about 30 km at mid-latitudes | [2.5](lessons/02-05-potential-vorticity-stratified-ocean.md) |
| $\psi$, $V$ | transport streamfunction (m³ s⁻¹) and depth-integrated meridional transport (m² s⁻¹) | [3.1](lessons/03-01-sverdrup-balance-interior-gyre.md) |
| $\delta_S$, $\delta_M$, $\delta_I$ | Stommel, Munk and inertial boundary-layer widths | [3.2](lessons/03-02-western-boundary-currents-stommel-munk.md) |
| $A_h$, $r$ | lateral eddy viscosity (m² s⁻¹) and linear bottom-friction coefficient (s⁻¹) | [3.2](lessons/03-02-western-boundary-currents-stommel-munk.md) |
| $Ro$ | Rossby number $U/(fL)$; 0.2 in a western boundary current, $10^{-2}$ in the interior | [3.3](lessons/03-03-gulf-stream-kuroshio.md) |
| $K$, EKE, MKE | isopycnal eddy diffusivity ($10^{3}\ \mathrm{m^2\,s^{-1}}$) and eddy/mean kinetic energy | [3.4](lessons/03-04-mesoscale-eddies-baroclinic-instability.md) |
| $c_1$ | first-baroclinic gravity-wave speed, $\pi^{-1}\!\int N\,dz \approx 2\ \mathrm{m\,s^{-1}}$ | [3.4](lessons/03-04-mesoscale-eddies-baroclinic-instability.md) |
| AAIW, NADW, AABW, CDW, MOW | the standard water-mass abbreviations — see [Water mass](#water-mass) | [4.1](lessons/04-01-water-masses-world-ocean.md) |
| AOU, OUR | apparent oxygen utilization and its rate; a biological clock | [4.1](lessons/04-01-water-masses-world-ocean.md) |
| $S_i$, $\rho_i/\rho_w$ | sea-ice salinity (about 5) and density ratio (0.92) in brine rejection | [4.2](lessons/04-02-deep-water-formation-convection.md) |
| $\kappa$ | **diapycnal** diffusivity, $10^{-5}$ measured against $10^{-4}$ required — never confuse with $K$ | [4.3](lessons/04-03-diapycnal-mixing-abyssal-recipe.md) |
| $\varepsilon$, $\Gamma$ (mixing) | turbulent dissipation (W kg⁻¹) and mixing efficiency $\approx0.2$ | [4.3](lessons/04-03-diapycnal-mixing-abyssal-recipe.md) |
| $M_{\text{ov}}$ | overturning freshwater transport at 34°S; $<0$ is the bistability condition | [4.4](lessons/04-04-what-drives-the-overturning.md) |
| $H$ (transport) | poleward heat transport (PW); total peaks at 5.5 PW near 35° | [4.5](lessons/04-05-meridional-heat-transport-bjerknes.md) |
| $\theta$ (angle), $\beta$ (angle) | internal-wave wavevector angle from the horizontal, and beam angle | [5.1](lessons/05-01-internal-waves.md) |
| $H_s$, $m_0$ | significant wave height $4\sqrt{m_0}$ and spectral variance | [5.2](lessons/05-02-swell-and-the-sea-state.md) |
| M2, S2, K1, O1 | the principal tidal constituents — see [Tidal constituents](#tidal-constituents) | [5.3](lessons/05-03-tides-equilibrium-dynamical.md) |
| $g'$, $L_{\text{eq}}$ | reduced gravity $g\Delta\rho/\rho_0$ and equatorial deformation radius $\sqrt{c/\beta}$ | [5.4](lessons/05-04-equatorial-waves-undercurrent.md) |
| $a$, $b$, $\tau$ (ENSO) | delayed-oscillator growth rate, delayed-feedback strength, and delay | [5.5](lessons/05-05-walker-bjerknes-enso.md) |
| $\psi_{\text{res}}$ | residual overturning $= \psi_{\text{Ekman}} + \psi_{\text{eddy}}$; a few Sv from two 25 Sv terms | [6.1](lessons/06-01-southern-ocean-hinge.md) |
| $S_{\text{ann}}$ | annual subduction rate; global total 100–300 Sv | [6.2](lessons/06-02-ocean-heat-uptake-circulation.md) |
| DIC, TA | dissolved inorganic carbon ($\mathrm{\mu mol\,kg^{-1}}$) and total alkalinity ($\mathrm{\mu eq\,kg^{-1}}$) | [6.3](lessons/06-03-ocean-carbon-pumps.md) |
| $b$ (Martin) | Martin-curve exponent, $F(z) \propto z^{-b}$, $b\approx0.86$ | [6.3](lessons/06-03-ocean-carbon-pumps.md) |
| $y$, $E$ (Stommel) | non-dimensional salinity contrast and freshwater forcing; fold at $E = 1/4$ | [6.4](lessons/06-04-amoc-stability-stommel-model.md) |
| Sv | sverdrup, $10^{6}\ \mathrm{m^3\,s^{-1}}$ | [2.2](lessons/02-02-thermal-wind-acc.md) |

## Definitions

### Potential temperature

The temperature a parcel would have if brought adiabatically to a reference
pressure — the in-situ reading with the compression removed.

$$\theta(S,T,p) = T - \int_{p_{\text{ref}}}^{p}\Gamma\,dp', \qquad \Gamma = \frac{\alpha g T}{c_p}$$

*Introduced:* [1.1](lessons/01-01-temperature-salinity-pressure.md)

### Potential density

The density a parcel would have at a stated reference pressure. **The reference
pressure must be given**, and must be within about 1000 m of where the water
actually is, or the comparison is wrong ([thermobaricity](#thermobaricity)).

$$\sigma_\theta = \rho(S,\theta,0) - 1000, \qquad \sigma_2, \ \sigma_4 \ \text{likewise at 2000, 4000 dbar}$$

*Introduced:* [1.2](lessons/01-02-density-equation-of-state.md)

### Cabbeling

Mixing two parcels of *equal* density produces water denser than both, because
isopycnals are curved on the T–S plane and a straight mixing chord falls on their
dense side. Of order $0.1\ \mathrm{kg\,m^{-3}}$ for an 8 K contrast.

*Introduced:* [1.2](lessons/01-02-density-equation-of-state.md)

### Thermobaricity

$\alpha$ grows with pressure, so two parcels of equal density at one pressure are
*not* of equal density at another — the colder one becomes denser with depth. This
is why AABW underlies NADW despite identical $\sigma_\theta$.

*Introduced:* [1.2](lessons/01-02-density-equation-of-state.md)

### Water mass

A body of water identified by its $(\theta,S)$ signature, acquired at a specific
surface formation region and thereafter changed only by mixing. Named for where it
was **made**, not where it is found.

*Introduced:* [1.3](lessons/01-03-ts-diagrams-water-masses.md), catalogued in [4.1](lessons/04-01-water-masses-world-ocean.md)

### Buoyancy frequency

The frequency at which a vertically displaced parcel oscillates — the ocean's
vertical springiness.

$$N^2 = -\frac{g}{\rho_0}\frac{d\bar\rho}{dz} = g\left(\alpha\frac{d\theta}{dz} - \beta\frac{dS}{dz}\right)$$

$N^2>0$ is stable. Use **potential** density, or the second form, which has the
compression already removed.

*Introduced:* [1.4](lessons/01-04-stratification-buoyancy-frequency.md)

### Density ratio and double diffusion

$$R_\rho = \frac{\alpha\,d\theta/dz}{\beta\,dS/dz}$$

$1 < R_\rho \lesssim 2$: **salt fingering** (warm salty over cold fresh).
$0.5 \lesssim R_\rho < 1$ with both increasing downward: **diffusive convection**,
producing thermohaline staircases. A column with $N^2>0$ can still overturn.

*Introduced:* [1.4](lessons/01-04-stratification-buoyancy-frequency.md)

### Mixed layer depth

The depth at which the profile first departs from its 10 m value by
$\Delta\sigma_\theta = 0.03\ \mathrm{kg\,m^{-3}}$ (preferred) or $\Delta T = 0.2$ K.
**Always state the criterion**; different thresholds differ by tens of metres.

*Introduced:* [1.5](lessons/01-05-mixed-layer-air-sea-fluxes.md)

### Dynamic method

Getting geostrophic velocity from the density field alone, up to one unknown
constant per station pair — the **level of no motion**.

$$\bar v = \frac{\Delta\Phi_A - \Delta\Phi_B}{f\,L}, \qquad \Delta\Phi = \int_{p_2}^{p_1}\delta\,dp$$

*Introduced:* [2.1](lessons/02-01-geostrophy-dynamic-method.md)

### Ekman transport

The depth-integrated wind-driven transport, exactly 90° to the right of the wind in
the northern hemisphere and **independent of the eddy viscosity**.

$$\mathbf{M}_E = \frac{\boldsymbol\tau\times\hat{\mathbf z}}{\rho_0 f} = \frac{1}{\rho_0f}\left(\tau_y,\,-\tau_x\right)$$

*Introduced:* [2.3](lessons/02-03-ekman-layer-transport.md)

### Ekman pumping

The vertical velocity at the base of the Ekman layer. **Positive is upward.**

$$w_E = \nabla_H\cdot\mathbf{M}_E = \frac{1}{\rho_0}\hat{\mathbf z}\cdot\nabla\times\left(\frac{\boldsymbol\tau}{f}\right) \approx \frac{\hat{\mathbf z}\cdot\nabla\times\boldsymbol\tau}{\rho_0 f}$$

Downward pumping makes a subtropical (anticyclonic) gyre; upward makes a subpolar
(cyclonic) one, **in either hemisphere**, provided $f$ carries its sign.

*Introduced:* [2.4](lessons/02-04-ekman-pumping-wind-stress-curl.md)

### Potential vorticity, layered

$$q = \frac{f+\zeta}{h}, \qquad \frac{Dq}{Dt} = 0$$

In the interior $|\zeta|\ll|f|$, so $q \approx f/h$: **a column that moves poleward
must stretch.** $h$ is the thickness between two isopycnals, not the ocean's depth.

*Introduced:* [2.5](lessons/02-05-potential-vorticity-stratified-ocean.md)

### Deformation radius

$$L_d = \frac{c_1}{|f|}, \qquad c_1 = \frac{1}{\pi}\int_{-H}^{0}N\,dz \approx 2\ \mathrm{m\,s^{-1}}$$

About 20 km at 45°, 36 km at 30°, 110 km at 10°, against 1000 km in the atmosphere.
The commonly quoted $NH/f$ needs the **depth-averaged** $N$, not the pycnocline peak.

*Introduced:* [2.5](lessons/02-05-potential-vorticity-stratified-ocean.md), used in [3.4](lessons/03-04-mesoscale-eddies-baroclinic-instability.md)

### Sverdrup balance

The depth-integrated interior transport, from the wind-stress curl and nothing else.

$$\beta V = \frac{1}{\rho_0}\hat{\mathbf z}\cdot\nabla\times\boldsymbol\tau$$

$V$ is the **total** transport, Ekman included; the Ekman and geostrophic pieces
partly cancel. Valid in the steady, frictionless, flat-bottomed interior with a
closed eastern boundary — so not in boundary currents, not at the equator, not in
the Southern Ocean, and only as a decadal mean.

*Introduced:* [3.1](lessons/03-01-sverdrup-balance-interior-gyre.md)

<a id="sverdrup-unit"></a>
### Transport versus velocity

$V$ in $\mathrm{m^2\,s^{-1}}$ is a transport **per unit width**: multiply by a
zonal width to get $\mathrm{m^3\,s^{-1}}$, or divide by a depth to get a velocity.
The same applies to $\mathbf{M}_E$ and to $\psi_{\text{res}}$. Mixing the two up is
the commonest dimensional error in the subject.

*Introduced:* [3.1](lessons/03-01-sverdrup-balance-interior-gyre.md)

### Western intensification

Friction admits a boundary layer whose solution is $e^{-\beta x/r}$, which decays
only toward $+x$ — so it can attach to a western wall and not an eastern one. In
Munk's version, counting decaying roots gives two at the west (enough for no-normal-flow
plus no-slip) and one at the east (not enough). **Set $\beta = 0$ and the asymmetry
vanishes entirely.**

*Introduced:* [3.2](lessons/03-02-western-boundary-currents-stommel-munk.md)

### Recirculation

Water that leaves a western boundary current, loops back, and rejoins it — counted
twice by a mooring, not at all by the Sverdrup balance. It is why the Gulf Stream
carries 150 Sv against a Sverdrup prediction near 50.

*Introduced:* [3.3](lessons/03-03-gulf-stream-kuroshio.md)

### Diapycnal diffusivity

Mixing **across** density surfaces. $\kappa \approx 10^{-5}\ \mathrm{m^2\,s^{-1}}$
measured in the open thermocline, $10^{-4}$ required by the overturning, up to
$10^{-2}$ over rough topography. Not to be confused with the **isopycnal** eddy
diffusivity $K \approx 10^{3}\ \mathrm{m^2\,s^{-1}}$ — eight orders of magnitude
apart.

$$\kappa = \Gamma\frac{\varepsilon}{N^2}, \qquad \Gamma \approx 0.2 \ \text{(Osborn)}$$

*Introduced:* [4.3](lessons/04-03-diapycnal-mixing-abyssal-recipe.md)

### Munk's abyssal recipe

$$w\frac{\partial T}{\partial z} = \kappa\frac{\partial^2T}{\partial z^2} \;\Longrightarrow\; T\propto e^{z/h}, \quad h = \frac{\kappa}{w}$$

With $w = Q/A$ from the deep-water formation rate, this gives the $\kappa$ the
circulation requires.

*Introduced:* [4.3](lessons/04-03-diapycnal-mixing-abyssal-recipe.md)

### Residual circulation

$$\psi_{\text{res}} = \psi_{\text{Ekman}} + \psi_{\text{eddy}} = -\frac{\tau}{\rho_0 f} + K s$$

Two terms of 25 Sv giving a residual of a few. Only the residual transports
anything. **Eddy saturation**: the ACC's transport is insensitive to the wind.
**Eddy compensation**: so is the residual, largely.

*Introduced:* [4.4](lessons/04-04-what-drives-the-overturning.md), developed in [6.1](lessons/06-01-southern-ocean-hinge.md)

### Bjerknes compensation

Because the top-of-atmosphere radiation budget pins the total poleward heat
transport, a change in the ocean's transport is 60–90 percent offset by the
atmosphere's. Regional temperature responses are therefore much smaller than the
transport change implies — but regional *patterns* are not protected.

*Introduced:* [4.5](lessons/04-05-meridional-heat-transport-bjerknes.md)

### Internal-wave dispersion

$$\omega = N\cos\theta \quad (\theta = \text{wavevector angle from the horizontal}), \qquad \sin\beta = \frac{\omega}{N}$$

with $\beta$ the beam angle from the horizontal. Frequency depends on **direction,
not wavelength**; group velocity is exactly perpendicular to the wavevector; upward
phase means downward energy. With rotation, $f \le \omega \le N$.

*Introduced:* [5.1](lessons/05-01-internal-waves.md)

### Critical slope

An internal wave conserves its angle to the **horizontal**, not to the boundary. A
slope matching the beam angle focuses the reflection into a vanishing thickness and
the wave breaks — which is where most of the ocean's mixing happens.

*Introduced:* [5.1](lessons/05-01-internal-waves.md)

### Significant wave height

$$H_s = 4\sqrt{m_0}, \qquad \frac{H_{\max}}{H_s} \approx \sqrt{\frac{\ln N}{2}}$$

About the mean of the highest third. Among 10,000 waves the largest is about
$2.15\,H_s$ — reading $H_s$ as a maximum is a mariner's error.

*Introduced:* [5.2](lessons/05-02-swell-and-the-sea-state.md)

<a id="tidal-constituents"></a>
### Tidal constituents and the equilibrium tide

$$\eta = A\,P_2(\cos\psi), \qquad A = \frac{M}{M_E}\frac{R_E^4}{d^3}$$

The $1/d^3$ — a *gradient* of gravity — is why the moon (0.357 m) beats the sun
(0.164 m). Real tides are basin resonances, not bulges, and rotate about
**amphidromic points**.

*Introduced:* [5.3](lessons/05-03-tides-equilibrium-dynamical.md)

### Reduced gravity and the equatorial waveguide

$$g' = \frac{g\,\Delta\rho}{\rho_0}, \qquad c = \sqrt{g'H}, \qquad L_{\text{eq}} = \sqrt{\frac{c}{\beta}}$$

Kelvin waves go **east only** (the westward solution is unbounded); the gravest
Rossby wave goes west at $c/3$. Pacific round trip about nine months.

*Introduced:* [5.4](lessons/05-04-equatorial-waves-undercurrent.md)

### Bjerknes feedback and the delayed oscillator

Stronger trades → steeper thermocline tilt → colder east → larger SST gradient →
stronger Walker circulation → stronger trades. Reversed by the wave round trip:

$$\frac{dT}{dt} = aT - bT(t-\tau) - \varepsilon T^3, \qquad \cos\omega\tau = \frac{a}{b}, \quad \omega = b\sin\omega\tau$$

Period is $4\tau$ to $10\tau$ depending on $a/b$ — **not** $\tau$.

*Introduced:* [5.5](lessons/05-05-walker-bjerknes-enso.md)

### Subduction

$$S_{\text{ann}} = -w_{-h} - \mathbf{u}_h\cdot\nabla h$$

Lateral induction (the second term) usually dominates. Because the *deepest* winter
mixed layer is what gets sealed in, the interior remembers only late winter —
**Stommel's demon**.

*Introduced:* [4.1](lessons/04-01-water-masses-world-ocean.md), used for heat in [6.2](lessons/06-02-ocean-heat-uptake-circulation.md)

### The three carbon pumps

**Solubility** (cold water dissolves more, then sinks), **soft-tissue** (organic
particles sink and are respired), and **carbonate** — which removes 2 alkalinity per
1 DIC and therefore **raises** surface $p\mathrm{CO_2}$, opposing the other two.

*Introduced:* [6.3](lessons/06-03-ocean-carbon-pumps.md)

### Salt-advection feedback and the Stommel model

A stronger overturning imports more salt, which makes the north denser, which
strengthens the overturning.

$$q = C(\alpha\Delta T - \beta\Delta S), \qquad E = y|1-y|, \quad y = \frac{\beta\Delta S}{\alpha\Delta T}$$

Saddle-node fold at $y = 1/2$, $E = 1/4$. The ON branch weakens by at most 50
percent before collapsing.

*Introduced:* [6.4](lessons/06-04-amoc-stability-stommel-model.md)

## Formulas and rules

### Seawater properties

| Quantity | Expression | Typical value |
|---|---|---|
| Pressure to depth | $dp/dz = \rho g$ | $1.005\ \mathrm{dbar\,m^{-1}}$ |
| Adiabatic lapse rate | $\Gamma = \alpha gT/c_p$ | $0.1\ \mathrm{K\,km^{-1}}$ |
| Linearized equation of state | $\rho = \rho_0[1-\alpha(\theta-\theta_0)+\beta(S-S_0)]$ | — |
| Isopycnal slope on T–S | $dS/d\theta|_\rho = \alpha/\beta$ | 0.07 (cold) to 0.44 (warm) |
| Buoyancy frequency | $N^2 = g(\alpha\theta_z - \beta S_z)$ | see table below |
| Two-component mixing | $x = \dfrac{\theta-\theta_2}{\theta_1-\theta_2} = \dfrac{S-S_2}{S_1-S_2}$ | must agree |

*From* [1.1](lessons/01-01-temperature-salinity-pressure.md), [1.2](lessons/01-02-density-equation-of-state.md), [1.3](lessons/01-03-ts-diagrams-water-masses.md), [1.4](lessons/01-04-stratification-buoyancy-frequency.md)

### $\alpha$ at the surface, $S=35$ ($10^{-4}\ \mathrm{K^{-1}}$)

| $\theta$ (°C) | 0 | 5 | 10 | 15 | 20 | 25 | 30 |
|---|---|---|---|---|---|---|---|
| $\alpha$ | 0.52 | 1.14 | 1.67 | 2.14 | 2.57 | 2.97 | 3.34 |

$\beta \approx 7.6\times10^{-4}$ throughout. **All the nonlinearity is in $\alpha$**, and
$\beta/\alpha$ runs from 3.6 in the tropics to 15 at the freezing point — which is why
polar dense-water formation is salt-driven.

*From* [1.2](lessons/01-02-density-equation-of-state.md)

### Stratification and mixing energy

| Region | $N$ (s⁻¹) | $N$ (cph) | Buoyancy period |
|---|---|---|---|
| Seasonal thermocline | $1.4\times10^{-2}$ | 8 | 7.5 min |
| Main pycnocline | $3.1\times10^{-3}$ | 1.8 | 34 min |
| Abyss | $1.4\times10^{-3}$ | 0.8 | 75 min |
| $f$ at 45° | $1.03\times10^{-4}$ | 0.06 | 16.9 h |

$$\Delta PE\ \text{to homogenize} = \frac{\rho_0 N^2h^3}{12}, \qquad h_{\text{wind}} = \left(\frac{12\,m\,u_*^3\,t}{N^2}\right)^{1/3}, \qquad t_{\text{convect}} = \frac{N^2h^2}{2B}$$

*From* [1.4](lessons/01-04-stratification-buoyancy-frequency.md), [1.5](lessons/01-05-mixed-layer-air-sea-fluxes.md), [4.2](lessons/04-02-deep-water-formation-convection.md)

### Air–sea fluxes

| Quantity | Expression | Global mean |
|---|---|---|
| Wind stress | $\tau = \rho_a C_D U_{10}^2$ | $C_D \approx 1.3\times10^{-3}$ |
| Latent heat | $Q_{LH} = \rho_a L_v C_E U(q_s-q_a)$ | $-100\ \mathrm{W\,m^{-2}}$ |
| Evaporation from $Q_{LH}$ | $E = Q_{LH}/(\rho_w L_v)$ | $100\ \mathrm{W\,m^{-2}} = 1.26\ \mathrm{m\,yr^{-1}}$ |
| Mixed-layer heating | $dT/dt = Q_{\text{net}}/(\rho_0c_ph)$ | 100 W m⁻² over 50 m $= 1.3\ \mathrm{K\,month^{-1}}$ |
| Salinity | $dS/dt = S(E-P-R)/h$ | — |
| Buoyancy flux | $B = g[\alpha Q_{\text{net}}/(\rho_0c_p) - \beta S(E-P-R)]$ | $B<0$ convects |
| Brine rejection | $\Delta S = \dfrac{h_i}{H}\dfrac{\rho_i}{\rho_w}(S_w-S_i)$ | shallow shelf concentrates it |

*From* [1.5](lessons/01-05-mixed-layer-air-sea-fluxes.md), [4.2](lessons/04-02-deep-water-formation-convection.md)

### Rotating dynamics

| Quantity | Expression |
|---|---|
| Pressure gradient with a free surface | $\partial_y p|_z = \rho_0 g\,\partial_y\eta + g\int_z^0\partial_y\rho\,dz'$ |
| Sea-surface slope for a current | $|\partial\eta/\partial y| = |u||f|/g$; 1 m per 105 km for 1 m s⁻¹ at 40° |
| **Thermal wind** | $\dfrac{\partial u}{\partial z} = +\dfrac{g}{\rho_0f}\dfrac{\partial\rho}{\partial y} = -\dfrac{g}{f}\left(\alpha\dfrac{\partial\theta}{\partial y}-\beta\dfrac{\partial S}{\partial y}\right) = \dfrac{N^2}{f}\dfrac{\partial z_{\text{iso}}}{\partial y}$ |
| Ekman spiral | $u,v = V_0e^{z/d}\{\cos,\sin\}(z/d-\pi/4)$, $V_0 = \tau/(\rho_0\sqrt{A_zf})$ |
| Ekman transport | $\mathbf{M}_E = \boldsymbol\tau\times\hat{\mathbf z}/(\rho_0f)$ |
| Ekman pumping | $w_E = \hat{\mathbf z}\cdot\nabla\times(\boldsymbol\tau/f)/\rho_0$ |
| Planetary vorticity equation | $\beta v = f\,\partial w/\partial z$ |
| Rossby waves | $\omega = \dfrac{-\beta k}{k^2+l^2+L_d^{-2}}$; long-wave $c_p = -\beta L_d^2$ |

**Three forms of thermal wind, one relation.** The last form is the one to use when
reading a contoured section.

*From* [2.1](lessons/02-01-geostrophy-dynamic-method.md), [2.2](lessons/02-02-thermal-wind-acc.md), [2.3](lessons/02-03-ekman-layer-transport.md), [2.4](lessons/02-04-ekman-pumping-wind-stress-curl.md), [2.5](lessons/02-05-potential-vorticity-stratified-ocean.md)

### Wind-driven circulation

| Quantity | Expression | Value at 30°N |
|---|---|---|
| Sverdrup | $\beta V = \hat{\mathbf z}\cdot\nabla\times\boldsymbol\tau/\rho_0$ | — |
| Sverdrup streamfunction | $\psi(x,y) = -\dfrac{1}{\rho_0\beta}\displaystyle\int_x^{x_E}\!\!(\hat{\mathbf z}\cdot\nabla\times\boldsymbol\tau)\,dx'$ | integrate from the **east** |
| Stommel width | $\delta_S = r/\beta$ | 100 km at $r = 2\times10^{-6}$ |
| Munk width | $\delta_M = (A_h/\beta)^{1/3}$ | 100 km at $A_h = 2\times10^{4}$ |
| Inertial width | $\delta_I = (U/\beta)^{1/2}$ | 159 km at $U = 0.5$ |
| Munk profile | $V \propto e^{-\eta/2}\sin(\sqrt3\eta/2)$, $\eta = x/\delta_M$ | peak at $1.21\delta$, reverses at $3.63\delta$ |
| Coastal upwelling | $w = M_E/L_d = |\tau_\parallel|/(\rho_0c_1)$ — **$f$ cancels** | 4–5 m day⁻¹ |

$\delta_I > \delta_M$ means **inertial**: separation, meanders, rings. $\delta_I < \delta_M$
means frictional: broad, smooth, no rings.

*From* [3.1](lessons/03-01-sverdrup-balance-interior-gyre.md), [3.2](lessons/03-02-western-boundary-currents-stommel-munk.md), [3.3](lessons/03-03-gulf-stream-kuroshio.md), [3.5](lessons/03-05-coastal-upwelling-eastern-boundary.md)

### Deep ocean, mixing and overturning

| Quantity | Expression | Value |
|---|---|---|
| Abyssal scale height | $h = \kappa/w$ | 1 km |
| Required $\kappa$ | $\kappa = wh$, $w = Q/A$ | $7\times10^{-5}\ \mathrm{m^2\,s^{-1}}$ |
| Osborn | $\kappa = \Gamma\varepsilon/N^2$, $\Gamma = 0.2$ | — |
| Mixing power | $P = g\Delta\rho\,Q\,H/\Gamma$ | about 2 TW |
| Stommel–Arons interior | $v = fw_0/(\beta H)$, **poleward** | mm s⁻¹ |
| Southern Ocean Ekman upwelling | $T = \dfrac{\tau}{\rho_0|f|}\times2\pi R\cos\phi$ | 28 Sv |
| Overturning heat transport | $H = \rho_0c_pQ(\theta_u-\theta_l)$ | 1.05 PW at 17 Sv, 15 K |
| Radiation constraint | $H(\phi) = 2\pi R_E^2\displaystyle\int_{-\pi/2}^{\phi}\!R\cos\phi'\,d\phi'$ | peaks 5.5 PW at 35° |

*From* [4.3](lessons/04-03-diapycnal-mixing-abyssal-recipe.md), [4.4](lessons/04-04-what-drives-the-overturning.md), [4.5](lessons/04-05-meridional-heat-transport-bjerknes.md), [6.1](lessons/06-01-southern-ocean-hinge.md)

### Waves

| Wave | Dispersion | Speed |
|---|---|---|
| Surface gravity, deep | $\omega^2 = gk$ | $c_p = gT/2\pi = 1.56T$; $c_g = c_p/2$ |
| Surface gravity, general | $\omega^2 = gk\tanh kH$ | deep when $H>\lambda/2$ |
| Swell dispersion line | $f(t) = gt/(4\pi D)$ | slope gives $D$, intercept gives the storm time |
| Internal | $\omega = N\cos\theta$ | $\mathbf{c}_g\perp\mathbf{k}$; beam at $\sin\beta = \omega/N$ |
| Shallow-water (barotropic) | $c = \sqrt{gH}$ | 198 m s⁻¹ at 4000 m |
| Equatorial Kelvin | non-dispersive, eastward only | $c = \sqrt{g'H} \approx 2.4\ \mathrm{m\,s^{-1}}$ |
| Equatorial Rossby, mode $n$ | — | $-c/(2n+1)$ |
| Mid-latitude baroclinic Rossby | $\omega = -\beta k/(k^2+l^2+L_d^{-2})$ | $2.6\ \mathrm{cm\,s^{-1}}$ at 30°, west only |

| Sea state | Expression |
|---|---|
| Fully developed | $H_s = 0.21U^2/g$, $f_{\text{peak}} = 0.13g/U$ |
| Thresholds | $gX/U^2 = 2.3\times10^{4}$, $gt/U = 7.15\times10^{4}$ |
| Fetch-limited | $gH_s/U^2 = 0.0016(gX/U^2)^{1/2}$ |
| Stokes drift | $u_s = \omega k a^2$ |

| Tides | Value |
|---|---|
| M2 / S2 / N2 | 12.4206 / 12.0000 / 12.6583 h |
| K1 / O1 | 23.9345 / 25.8193 h |
| Critical latitude, M2 / K1 | 74.5° / 30.0° |
| Quarter-wave resonance | $T_{\text{res}} = 4L/\sqrt{gH}$ |
| Form factor | $F = (K_1+O_1)/(M_2+S_2)$ |
| Total dissipation | 3.5 TW; about 1 TW to the deep ocean |

*From* [5.1](lessons/05-01-internal-waves.md), [5.2](lessons/05-02-swell-and-the-sea-state.md), [5.3](lessons/05-03-tides-equilibrium-dynamical.md), [5.4](lessons/05-04-equatorial-waves-undercurrent.md)

### Climate machinery

| Quantity | Expression | Value |
|---|---|---|
| Equatorial thermocline tilt | $\partial h/\partial x = \tau_x/(\rho_0g'H)$ | 127 m across the Pacific |
| Sea-surface tilt from it | $\Delta\eta = (\Delta\rho/\rho_0)\Delta h$ | 0.49 m |
| Kelvin from sea level | $\Delta h = (\rho_0/\Delta\rho)\Delta\eta$ | amplification $\approx 260$ |
| Heat uptake by subduction | $H = \rho_0c_pQ\Delta T$ | 181 Sv at 0.5 K |
| Diffusive penetration | $L = \sqrt{4\kappa t}$ | 251 m in 50 yr — far too small |
| Martin curve | $F(z) = F_{100}(z/100)^{-b}$, $b\approx0.86$ | 14 percent survives to 1000 m |
| Revelle response | $\Delta\ln p\mathrm{CO_2} = R\,\Delta\ln\mathrm{DIC}$, $R\approx10$ | see [climate-science 4.2](../climate-science/lessons/04-02-ocean-carbon-revelle-factor.md) |
| Stommel steady state | $E = y|1-y|$, fold at $E = 1/4$ | present system $E\approx0.24$ |
| Critical slowing down | $\tau = 1/(2\sqrt\mu)$, $\mathrm{AC1} = e^{-\lambda\Delta t}$ | diverges at the fold |

*From* [5.4](lessons/05-04-equatorial-waves-undercurrent.md), [5.5](lessons/05-05-walker-bjerknes-enso.md), [6.2](lessons/06-02-ocean-heat-uptake-circulation.md), [6.3](lessons/06-03-ocean-carbon-pumps.md), [6.4](lessons/06-04-amoc-stability-stommel-model.md)

### Water masses

| Mass | $\theta$ (°C) | $S$ | $\sigma_\theta$ | Depth | Formed |
|---|---|---|---|---|---|
| AABW | $-0.5$ | 34.65 | 27.85 | below 4000 m | Weddell, Ross |
| NADW | 2–4 | 34.9–35.0 | 27.8 | 2000–4000 m | Labrador, Nordic |
| AAIW | 3–5 | 34.2–34.4 | 27.1 | 800–1200 m | Subantarctic Front |
| MOW | 11–13 | 36.5–38.4 | 27.8 | 1000–1200 m | Gibraltar |
| NPIW | 5–12 | 33.8–34.1 | 26.8 | 300–800 m | Okhotsk |
| CDW | 0.5–2 | 34.6–34.7 | 27.8 | 1500–3500 m | ACC blend |

**The Pacific makes no deep water**, because its surface is too fresh.

*From* [4.1](lessons/04-01-water-masses-world-ocean.md), [4.2](lessons/04-02-deep-water-formation-convection.md)

### Observing systems

| System | Depth | Repeat | Since |
|---|---|---|---|
| Satellite altimetry | surface | 10 d | 1992 |
| Argo (3900 floats, 304 km spacing) | 0–2000 m | 10 d | global 2007 |
| Repeat hydrography (GO-SHIP) | full, full chemistry | 10 yr | WOCE 1990 |
| RAPID (26.5°N) | full transport | 12 h | 2004 |
| OSNAP (subpolar) | full transport | continuous | 2014 |

$$T_{\text{AMOC}} = T_{\text{Florida}} + T_{\text{Ekman}} + T_{\text{mid-ocean}} = 31.5 + 3.5 - 17.5 = 17.5\ \mathrm{Sv}$$

*From* [6.5](lessons/06-05-observing-the-ocean.md)

### Constants and standard values

| Constant | Value |
|---|---|
| $\rho_0$ | $1025$–$1028\ \mathrm{kg\,m^{-3}}$ |
| $c_p$ (seawater) | $3990\ \mathrm{J\,kg^{-1}\,K^{-1}}$; $\rho_0c_p = 4.10\times10^{6}\ \mathrm{J\,m^{-3}\,K^{-1}}$ |
| $\Omega$ | $7.292\times10^{-5}\ \mathrm{s^{-1}}$ |
| $f = 2\Omega\sin\phi$ | $7.29\times10^{-5}$ at 30°, $1.03\times10^{-4}$ at 45°, $1.26\times10^{-4}$ at 60° |
| $\beta = 2\Omega\cos\phi/R_E$ | $2.29\times10^{-11}$ at 0°, $1.98\times10^{-11}$ at 30°, $1.62\times10^{-11}$ at 45° |
| $R_E$ | $6.371\times10^{6}\ \mathrm{m}$ |
| Ocean area / volume | $3.6\times10^{14}\ \mathrm{m^2}$ / $1.34\times10^{18}\ \mathrm{m^3}$ |
| Mean ocean $\theta$ | 3.5 °C |
| 1 Sv | $10^{6}\ \mathrm{m^3\,s^{-1}}$; 1 PW $= 10^{15}$ W |
| 1 year | $3.156\times10^{7}\ \mathrm{s}$ |

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Hydrostatic balance, Navier–Stokes, boundary layers, turbulence | [`fluid-dynamics`](../fluid-dynamics/syllabus.md) |
| Surface gravity wave dispersion, phase vs group velocity | [fluid-dynamics 4.1](../fluid-dynamics/lessons/04-01-surface-waves.md) |
| Coriolis parameter, Rossby number, the $\beta$-plane | [atmospheric-science 4.2](../atmospheric-science/lessons/04-02-coriolis-effect.md) |
| Geostrophic balance and flow along isobars | [atmospheric-science 4.3](../atmospheric-science/lessons/04-03-geostrophic-gradient-wind.md) |
| Thermal wind, in its atmospheric form | [atmospheric-science 4.4](../atmospheric-science/lessons/04-04-thermal-wind-general-circulation.md) |
| Baroclinic instability, the mechanism | [atmospheric-science 4.5](../atmospheric-science/lessons/04-05-air-masses-fronts-cyclones.md) |
| Vorticity, circulation, PV conservation, Rossby waves | [atmospheric-science 5.1](../atmospheric-science/lessons/05-01-vorticity-circulation.md), [5.2](../atmospheric-science/lessons/05-02-potential-vorticity.md), [5.3](../atmospheric-science/lessons/05-03-rossby-waves-beta-effect.md) |
| The Ekman spiral and its derivation | [atmospheric-science 6.1](../atmospheric-science/lessons/06-01-atmospheric-boundary-layer.md) |
| Potential temperature, buoyancy frequency (single-component) | [atmospheric-science 1.4](../atmospheric-science/lessons/01-04-potential-temperature.md) |
| Tropical cyclones as heat engines | [atmospheric-science 6.3](../atmospheric-science/lessons/06-03-tropical-cyclones-tropics.md) |
| Radiative forcing, feedback parameter $\lambda$, ECS and TCR | [climate-science 2.1](../climate-science/lessons/02-01-feedbacks-gain-factor.md) |
| Two-layer ocean heat uptake, $\kappa$, $\gamma$, efficacy $\varepsilon$ | [climate-science 3.1](../climate-science/lessons/03-01-ocean-heat-uptake-thermal-inertia.md) |
| Revelle factor, carbonate buffering, the airborne fraction | [climate-science 4.2](../climate-science/lessons/04-02-ocean-carbon-revelle-factor.md) |
| Ocean acidification and $\Omega$ (saturation state) | [climate-science 4.3](../climate-science/lessons/04-03-ocean-acidification.md) |
| Sea ice as a climate component | [climate-science 5.4](../climate-science/lessons/05-04-the-cryosphere.md) |
| Saddle-node bifurcations and hysteresis | [dynamical-systems 3.1](../dynamical-systems/lessons/03-01-saddle-node-transcritical.md) |
| Hopf bifurcation and limit cycles | [dynamical-systems 3.3](../dynamical-systems/lessons/03-03-hopf-bifurcation.md) |
| Simple harmonic motion | [mechanics-refresher 3.1](../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md) |
| Forced oscillators and resonance | [ode-refresher 2.3](../ode-refresher/lessons/02-03-forcing-resonance.md) |
| Determinants, conditioning of linear systems | [linalg-refresher 2.3](../linalg-refresher/lessons/02-03-determinants.md) |
| The thermodynamic cycle integral $\oint\alpha\,dp$ | [`thermodynamics-physics`](../thermodynamics-physics/syllabus.md) |
| Covariance, standard errors, trend fitting | [prob-stat-refresher 3.1](../prob-stat-refresher/lessons/03-01-joint-distributions-covariance.md) |
| Anisotropic wave dispersion | [`waves-optics`](../waves-optics/syllabus.md) |

## Pitfalls

<a id="sign-conventions"></a>
### Sign conventions

- $z$ is **upward**; depth is downward. An isopycnal that is *deeper* to the north has
  $\partial z_{\text{iso}}/\partial y < 0$. This is the single most common lost minus sign.
  *([2.1](lessons/02-01-geostrophy-dynamic-method.md))*
- Thermal wind is $\partial u/\partial z = +\dfrac{g}{\rho_0f}\dfrac{\partial\rho}{\partial y}$.
  Check it physically: dense water to the north gives a surface-intensified **eastward**
  jet. *([2.2](lessons/02-02-thermal-wind-acc.md))*
- Never memorize "90° to the right". Carry $f$ with its sign and use
  $\boldsymbol\tau\times\hat{\mathbf z}/(\rho_0f)$; the southern hemisphere flips it
  automatically. *([2.3](lessons/02-03-ekman-layer-transport.md), [2.4](lessons/02-04-ekman-pumping-wind-stress-curl.md))*
- Positive $w_E$ is **upward**, so a subtropical gyre has $w_E<0$. In the southern
  hemisphere the *curl* has the opposite sign from the northern case for the same
  gyre type, because $f$ is negative. *([3.1](lessons/03-01-sverdrup-balance-interior-gyre.md))*

### Which density, which diffusivity

- Judge stability on **potential** density referenced near the level of interest,
  never on in-situ temperature. The deep Pacific's temperature *inversion* is an
  artefact of compression. *([1.1](lessons/01-01-temperature-salinity-pressure.md), [1.2](lessons/01-02-density-equation-of-state.md))*
- $\sigma_\theta$ in the abyss gets the vertical ordering wrong. Use $\sigma_4$ below
  3000 m. *([1.2](lessons/01-02-density-equation-of-state.md))*
- $\kappa$ (diapycnal, $10^{-5}$) and $K$ (isopycnal, $10^{3}$) differ by eight orders
  of magnitude. Any statement about "ocean mixing" must say which.
  *([3.4](lessons/03-04-mesoscale-eddies-baroclinic-instability.md), [4.3](lessons/04-03-diapycnal-mixing-abyssal-recipe.md))*
- $N^2>0$ is necessary but not sufficient for stability: double diffusion overturns
  stable columns. *([1.4](lessons/01-04-stratification-buoyancy-frequency.md))*

<a id="small-differences"></a>
### Small differences of large numbers

Whenever the quantity of interest is the residual of a near-cancellation, its
fractional uncertainty is amplified by the ratio of the terms to the residual, and
no improvement in either measurement helps unless the errors are correlated.
Instances in this course:

- The **surface heat budget**: an 8 W m⁻² net from a 220 W m⁻² gross.
  *([1.5](lessons/01-05-mixed-layer-air-sea-fluxes.md))*
- The **level of no motion**: a 2 cm s⁻¹ unmeasured barotropic flow is 16 Sv.
  *([2.1](lessons/02-01-geostrophy-dynamic-method.md))*
- **Density-compensated fronts**: $\alpha\theta_y$ and $\beta S_y$ cancelling leaves a
  sharp thermal front with no current at all. *([2.2](lessons/02-02-thermal-wind-acc.md))*
- The **Southern Ocean residual**: 4 Sv from 28 minus 24.
  *([4.4](lessons/04-04-what-drives-the-overturning.md), [6.1](lessons/06-01-southern-ocean-hinge.md))*
- **Bjerknes compensation**: the regional response is $(1-c)$ times a large number.
  *([4.5](lessons/04-05-meridional-heat-transport-bjerknes.md), [6.2](lessons/06-02-ocean-heat-uptake-circulation.md))*
- The **distance to the AMOC fold**: $E = 0.24$ against $E_{\text{crit}} = 0.25$.
  *([6.4](lessons/06-04-amoc-stability-stommel-model.md))*

### Averages hiding distributions

- Munk's "missing mixing" was missing because $\kappa$ varies by two orders of
  magnitude in space and the measurement was made in the quiet 90 percent.
  *([4.3](lessons/04-03-diapycnal-mixing-abyssal-recipe.md))*
- A **CFC age** is biased young whenever waters of different ages have mixed, because
  the old fraction contributes no tracer. Tracer age is not mean age.
  *([4.1](lessons/04-01-water-masses-world-ocean.md))*
- $H_s$ is about the mean of the highest **third**; the largest of 10,000 waves is
  $2.15\,H_s$. *([5.2](lessons/05-02-swell-and-the-sea-state.md))*
- Argo's limit is **sampling**, not precision: the sensor beats the signal by a factor
  of a hundred and the trend still took seven years.
  *([6.5](lessons/06-05-observing-the-ocean.md))*

### Scope and attribution

- Observed western boundary transport **should** exceed the Sverdrup prediction; most
  of it is recirculation. They are different quantities.
  *([3.1](lessons/03-01-sverdrup-balance-interior-gyre.md), [3.3](lessons/03-03-gulf-stream-kuroshio.md))*
- The Sverdrup balance is a **decadal-mean** statement, because the adjustment time is
  the Rossby-wave crossing time — six years at 30°N, decades at 45°N.
  *([2.5](lessons/02-05-potential-vorticity-stratified-ocean.md), [3.1](lessons/03-01-sverdrup-balance-interior-gyre.md))*
- "Thermohaline circulation" asserts a mechanism this course disputes. Say
  **meridional overturning circulation**. Buoyancy forcing sets *what* sinks and
  *where*; mechanical forcing sets *how fast*.
  *([4.4](lessons/04-04-what-drives-the-overturning.md))*
- A **cooling** region in a warming ocean is almost always a redistribution signal, not
  a forcing one. *([6.2](lessons/06-02-ocean-heat-uptake-circulation.md))*
- Ocean heat uptake is limited by **ventilation**, not by heat capacity; the abyss has
  vast unused capacity and is barely warming.
  *([6.2](lessons/06-02-ocean-heat-uptake-circulation.md))*
- Calcification **raises** surface $p\mathrm{CO_2}$. More shells is not more drawdown.
  *([6.3](lessons/06-03-ocean-carbon-pumps.md))*

### Model and theory limits

- The Ekman **spiral** is a fiction (constant $A_z$); the **transport** is a theorem.
  Quote the 90° with confidence and the 45° with a caveat.
  *([2.3](lessons/02-03-ekman-layer-transport.md))*
- Boundary-layer widths are **tuned**: both $r$ and $A_h$ are chosen to give the
  observed width. The theory's content is the structure, not the number.
  *([3.2](lessons/03-02-western-boundary-currents-stommel-munk.md))*
- "Eddy-permitting" (1/4°) is not eddy-resolving; its eddies are too large and too
  weak, and no model is eddy-resolving poleward of about 55°.
  *([3.4](lessons/03-04-mesoscale-eddies-baroclinic-instability.md), [6.1](lessons/06-01-southern-ocean-hinge.md))*
- Most CMIP models have $M_{\text{ov}}>0$ and therefore **cannot** exhibit AMOC
  bistability. Their stability is a structural artefact, not a finding.
  *([6.4](lessons/06-04-amoc-stability-stommel-model.md))*
- Internal waves do **not** reflect like light: they conserve their angle to the
  horizontal, not to the boundary. *([5.1](lessons/05-01-internal-waves.md))*
- The ENSO round trip is the **delay**, not the period; the period is $4\tau$ to
  $10\tau$. *([5.4](lessons/05-04-equatorial-waves-undercurrent.md), [5.5](lessons/05-05-walker-bjerknes-enso.md))*
- Equilibrium tidal theory gets the **forcing** exactly right and the **response**
  entirely wrong. Real tides are basin resonances.
  *([5.3](lessons/05-03-tides-equilibrium-dynamical.md))*
- The Stommel ON branch weakens by at most 50 percent before collapsing, so a smooth
  unalarming decline is exactly what approaching the fold looks like.
  *([6.4](lessons/06-04-amoc-stability-stommel-model.md))*
