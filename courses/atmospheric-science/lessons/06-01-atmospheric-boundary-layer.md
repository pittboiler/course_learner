# Atmospheric Science · Lesson 6.1: The atmospheric boundary layer

> ⏱ ~15 min · Module 6: Weather systems & forecasting · Builds on: [5.4 Divergence, vertical motion & quasi-geostrophic theory](05-04-divergence-vertical-motion-quasi-geostrophic.md), [4.3 Geostrophic & gradient wind balance](04-03-geostrophic-gradient-wind.md) · Unlocks: 6.2 (mesoscale convection), 6.3 (tropical cyclones)

## Why this matters

The bottom kilometre of the atmosphere is where you live, where every observation is taken, and where the atmosphere actually touches the planet it is sitting on. It is also the layer this course has repeatedly invoked and never explained: "friction" in [4.1](04-01-pressure-gradient-force-equations-of-motion.md), the cross-isobar inflow that fills lows in [4.3](04-03-geostrophic-gradient-wind.md), the capping inversion that makes stratocumulus in [2.6](02-06-cloud-classification.md), the surface fluxes that supply 104 W m⁻² to the atmosphere in [3.2](03-02-greenhouse-effect-energy-budget.md), and the heating that breaks the cap in [2.4](02-04-stability-parcel-theory-cape.md). All of that is the **atmospheric boundary layer**, and it has its own physics: turbulent rather than laminar, driven by the surface rather than by radiation, and running on a *daily* cycle rather than a synoptic one.

## The idea

**The atmosphere feels the ground only through turbulence.** Molecular viscosity in air is far too weak to transmit drag more than a few millimetres. What actually carries momentum, heat and moisture between the surface and the free atmosphere is **turbulent eddies** — swirls from millimetres to a kilometre across, driven by wind shear near the ground and by buoyant thermals rising off warm surfaces. The layer they reach is the boundary layer; above it, the **free atmosphere** neither knows nor cares what the surface is doing.

**It breathes on a daily cycle.** This is the boundary layer's most distinctive feature, and nothing else in the atmosphere behaves this way.

- **After sunrise** the ground warms, thermals begin, and a well-mixed **convective mixed layer** grows upward through the morning — reaching 1 to 2 km by mid-afternoon over land. Inside it, potential temperature and humidity are nearly uniform with height, because the eddies stir everything together.
- **Near sunset** the surface starts radiating away more than it receives, cooling faster than the air above it. Convection shuts off within minutes.
- **Overnight** a shallow **stable nocturnal layer**, 100 to 300 m deep, forms next to the cold ground. The air *above* it, left over from the afternoon, retains yesterday's mixed properties — the **residual layer** — but is now decoupled from the surface.
- **At sunrise** the cycle restarts, and the growing mixed layer eats first the nocturnal layer, then the residual layer.

This is why fog and pollution form overnight and burn off mid-morning, why the wind usually drops at dusk and picks up mid-morning, and why a sounding taken at 00 UTC looks nothing like one at 12 UTC in the lowest kilometre.

**The surface budget decides how.** Net radiation at the surface splits three ways: warming the *air* (sensible heat), evaporating *water* (latent heat), and conducting into the *ground*. The split is set by how wet the surface is — and it decides the character of the day. A wet surface spends its energy evaporating, so the air warms little and the boundary layer stays shallow and humid. A dry surface has nothing to evaporate, so nearly all the energy goes into sensible heat, and the boundary layer grows deep, hot and dry. That is the difference between a rainforest and a desert, expressed as a ratio.

**And friction spins cyclones down.** The cross-isobar inflow of [4.3](04-03-geostrophic-gradient-wind.md) converges into a low. By [5.1](05-01-vorticity-circulation.md), convergence *increases* vorticity — but the mass it delivers must go somewhere, and it goes up, out of the boundary layer, into the free atmosphere above. That forced ascent, **Ekman pumping**, drains the vortex's rotation from below. Left alone, a mid-latitude cyclone would spin itself down in a few days. This is why storms need continuous upper-level support ([5.4](05-04-divergence-vertical-motion-quasi-geostrophic.md)) to survive.

## The formal version

**The surface energy balance.**

$$\boxed{\ R_n = H + LE + G\ }$$

with $R_n$ the net radiation (down minus up, both shortwave and longwave), $H$ the **sensible** heat flux into the air, $LE$ the **latent** heat flux (evaporation), and $G$ the ground heat flux, all in W m⁻². *In words: whatever radiation delivers to the surface must leave as warm air, water vapor, or heat conducted downward.* The **Bowen ratio** $B = H/LE$ sets the partition:

| Surface | $B$ | With $R_n = 500$, $G = 50$ W m⁻² |
|---|---|---|
| Ocean | 0.1 | $H = 41$, $LE = 409$ |
| Grassland | 0.5 | $H = 150$, $LE = 300$ |
| Desert | 5 | $H = 375$, $LE = 75$ |

The desert converts nine times as much energy into sensible heat as the ocean does from the same radiation — which is exactly why continental interiors have hot, deep, dry boundary layers and steep lapse rates ([2.4](02-04-stability-parcel-theory-cape.md)'s severe-weather ingredient), while maritime air is cool, moist and shallow.

**The logarithmic wind profile.** In the lowest tens of metres — the **surface layer** — turbulent momentum flux is nearly constant with height, and dimensional analysis gives

$$\boxed{\ u(z) = \frac{u_*}{k}\ln\!\frac{z}{z_0}\ }$$

where $u_*$ is the **friction velocity** (the momentum flux expressed as a speed), $k = 0.4$ is von Kármán's constant, and $z_0$ is the **roughness length** — the height at which the extrapolated profile reaches zero. *In words: wind speed grows logarithmically with height above a rough surface.* Roughness length is a property of the terrain and spans four orders of magnitude:

| Surface | $z_0$ | $u$ at 10 m with $u_* = 0.3\ \mathrm{m\,s^{-1}}$ |
|---|---|---|
| Open ocean | 0.0002 m | 8.1 m s⁻¹ |
| Short grass | 0.01 m | 5.2 m s⁻¹ |
| Crops | 0.1 m | 3.5 m s⁻¹ |
| Forest, city | 1 m | 1.7 m s⁻¹ |

For the same momentum flux, a city's 10 m wind is a fifth of the ocean's. This is why wind turbines are tall, why urban heat islands are calm, and why the standard anemometer height of 10 m must always be quoted alongside the terrain.

**The Ekman layer and Ekman pumping.** Above the surface layer, friction competes with Coriolis and the pressure gradient. Modelling the turbulent stress as a diffusion with eddy viscosity $K$ gives the **Ekman spiral** — the wind turning with height from cross-isobar near the ground to geostrophic at the top of the layer, over a depth

$$D = \pi\sqrt{\frac{2K}{f}} \approx 1.4\ \mathrm{km} \quad\text{for } K = 10\ \mathrm{m^2\,s^{-1}},\ f = 10^{-4}\ \mathrm{s^{-1}}.$$

(The oceanic version, where wind stress drives the spiral from above, belongs to [`oceanography` 2.2](../../oceanography/syllabus.md); the atmospheric version, driven by drag from below, is this one.)

Integrating the cross-isobar flow over the layer gives the vertical velocity it pumps into the free atmosphere:

$$\boxed{\ w_E = \zeta_g\sqrt{\frac{K}{2f}}\ }$$

*In words: the ascent out of the boundary layer is proportional to the geostrophic vorticity above it.* For $\zeta_g = 10^{-5}\ \mathrm{s^{-1}}$, $w_E = 2.2\ \mathrm{mm\,s^{-1}}$ — a hundredth of the synoptic ascent computed in [5.4](05-04-divergence-vertical-motion-quasi-geostrophic.md), but acting continuously and always in the sense that destroys the vortex.

**Spin-down time.** A vortex of depth $H_v$ losing vorticity to Ekman pumping decays exponentially with time constant

$$\tau_E = \frac{H_v}{\sqrt{Kf/2}} = \frac{10^{4}}{\sqrt{10\times10^{-4}/2}} = \frac{10^{4}}{0.0224} = 4.5\times10^{5}\ \mathrm{s} \approx 5\ \mathrm{days}.$$

*In words: friction alone would kill a mid-latitude cyclone in about five days.* Two things follow. Observed cyclones live 2 to 5 days, consistent with friction being the dominant sink once the upper-level forcing stops. And any storm that lasts longer — a hurricane, a blocking high — must have a continuous energy source, because five days is what you get for free.

## Picture

![The diurnal cycle of boundary-layer depth over land: a shallow stable nocturnal layer of about 200 m overnight, a convective mixed layer growing rapidly after sunrise to about 1.6 km by mid-afternoon, its collapse near sunset leaving a residual layer aloft, and the surface energy balance equation labelled](assets/06-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — wind at turbine height).** An anemometer at 10 m over crops ($z_0 = 0.1$ m) reads 6 m s⁻¹. Estimate the wind at a 90 m turbine hub.

First get $u_*$ from the measurement:

$$6 = \frac{u_*}{0.4}\ln\!\frac{10}{0.1} = \frac{u_*}{0.4}\times4.605 \qquad\Longrightarrow\qquad u_* = \frac{6\times0.4}{4.605} = 0.521\ \mathrm{m\,s^{-1}}.$$

Then at 90 m:

$$u(90) = \frac{0.521}{0.4}\ln\!\frac{90}{0.1} = 1.303 \times \ln(900) = 1.303\times6.802 = 8.86\ \mathrm{m\,s^{-1}}.$$

*Why this matters commercially.* Turbine power goes as $u^3$, so the ratio of power at 90 m to power at 10 m is $(8.86/6)^3 = 3.2$. **Tripling the power by tripling the tower height** is the whole economic argument for tall turbines, and it comes straight out of the logarithm. (The estimate assumes a neutral boundary layer; at night, under a stable nocturnal layer, the shear is far stronger and the ratio larger still.)

**Example 2 (why you'd care — why a cyclone needs help).** A mid-latitude cyclone has $\zeta_g = 2\times10^{-5}\ \mathrm{s^{-1}}$ and a depth of 8 km. Take $K = 10\ \mathrm{m^2\,s^{-1}}$ and $f = 10^{-4}\ \mathrm{s^{-1}}$.

*Ekman pumping:*
$$w_E = 2\times10^{-5}\sqrt{\frac{10}{2\times10^{-4}}} = 2\times10^{-5} \times \sqrt{5\times10^{4}} = 2\times10^{-5}\times223.6 = 4.5\times10^{-3}\ \mathrm{m\,s^{-1}}.$$

*Spin-down time:*
$$\tau_E = \frac{8\times10^{3}}{\sqrt{10\times10^{-4}/2}} = \frac{8\times10^{3}}{0.02236} = 3.6\times10^{5}\ \mathrm{s} = 4.1\ \mathrm{days}.$$

*Now compare with the upper-level forcing.* [5.4](05-04-divergence-vertical-motion-quasi-geostrophic.md)'s Example 1 found synoptic ascent of about 6 cm s⁻¹ from divergence aloft — thirteen times the 0.45 cm s⁻¹ of Ekman pumping. So while upper-level support is present, it overwhelms friction and the low deepens. When the system occludes and that support collapses ([5.4](05-04-divergence-vertical-motion-quasi-geostrophic.md), P2c), friction is all that remains and the four-day clock takes over.

**The whole cyclone life cycle in one comparison:** birth and intensification are upper-level divergence beating Ekman pumping; decay is Ekman pumping winning by default. The observed 2-to-5-day lifetime of a mid-latitude cyclone is the spin-down time, and it agrees.

## Watch out

- **You might think** the boundary layer has a fixed depth. **Actually** it swings by an order of magnitude *every day* over land — 200 m at dawn, 2 km at mid-afternoon. Quoting "the boundary layer is 1 km deep" without a time of day is meaningless, and it is why radiosondes are launched at fixed synoptic hours.
- **You might think** molecular viscosity provides the drag. **Actually** it is negligible above a millimetre or so; **turbulence** does essentially all the transport. This is why the drag depends on surface roughness (which generates eddies) rather than on any property of air itself.
- **You might think** friction just slows the wind near a low. **Actually** its more important effect is the cross-isobar *turning*, which converges air into the low and forces ascent out of the boundary layer. Friction is therefore simultaneously the cyclone's executioner (spin-down) and the source of its rain (forced ascent).
- **You might think** the residual layer is part of the boundary layer at night. **Actually** it is *decoupled* — the stable nocturnal layer beneath insulates it from the surface, so it neither exchanges momentum with the ground nor knows the surface has cooled. Pollutants emitted into it in the evening can travel hundreds of kilometres before the next morning's mixed layer reaches up and brings them back down.

## One-liner

> The bottom kilometre is turbulent, breathes on a daily cycle set by the surface energy balance, carries a logarithmic wind profile, and drains a cyclone's spin in about five days unless something aloft keeps feeding it.

## Problems

**P1 (🟢)** A surface has net radiation $R_n = 600\ \mathrm{W\,m^{-2}}$, ground heat flux $G = 60\ \mathrm{W\,m^{-2}}$, and a Bowen ratio of 2.0. Compute the sensible and latent heat fluxes, and say what kind of surface this suggests.

**P2 (🟡)** Wind over open ocean ($z_0 = 2\times10^{-4}$ m) is 12 m s⁻¹ at 10 m. (a) Find $u_*$. (b) Find the wind at 50 m. (c) The same $u_*$ blows over a city ($z_0 = 1$ m) — find the 10 m wind there, and comment on what this means for comparing wind records between stations.

**P3 (🔴, optional)** A tropical cyclone has a depth of 15 km, $f = 5\times10^{-5}\ \mathrm{s^{-1}}$ at 20°N, and an eddy viscosity of $K = 25\ \mathrm{m^2\,s^{-1}}$ in its rough, violently turbulent boundary layer. (a) Compute the Ekman spin-down time. (b) Compare with the observed lifetime of a hurricane, which is a week or more. (c) Resolve the discrepancy, and identify what this implies about the hurricane's boundary layer that distinguishes it from a mid-latitude cyclone's.

<details>
<summary>Solutions</summary>

**P1** The energy available to the atmosphere is $R_n - G = 600 - 60 = 540\ \mathrm{W\,m^{-2}}$, split by $B = H/LE = 2.0$:

$$H + LE = 540, \qquad H = 2LE \quad\Longrightarrow\quad 3LE = 540,$$

$$LE = 180\ \mathrm{W\,m^{-2}}, \qquad H = 360\ \mathrm{W\,m^{-2}}.$$

A Bowen ratio of 2 means twice as much energy goes into heating the air as into evaporation — a **dry surface**: semi-arid grassland, bare soil, or a drought-stressed crop. Expect a deep, hot mixed layer, steep lapse rates, a high LCL, and — by [2.6](02-06-cloud-classification.md) — either clear skies or high-based cumulus.

*Check.* Compare the ocean's $B = 0.1$, where $LE$ would be 491 and $H$ only 49. The same radiation produces a seven-fold difference in air heating depending only on surface wetness.

**P2** (a) $$12 = \frac{u_*}{0.4}\ln\!\frac{10}{2\times10^{-4}} = \frac{u_*}{0.4}\ln(5\times10^{4}) = \frac{u_*}{0.4}\times10.820,$$

$$u_* = \frac{12\times0.4}{10.820} = 0.444\ \mathrm{m\,s^{-1}}.$$

(b) $$u(50) = \frac{0.444}{0.4}\ln\!\frac{50}{2\times10^{-4}} = 1.109\times\ln(2.5\times10^{5}) = 1.109\times12.429 = 13.8\ \mathrm{m\,s^{-1}}.$$

(c) Over the city with the same $u_*$:

$$u(10) = \frac{0.444}{0.4}\ln\!\frac{10}{1} = 1.109\times2.303 = 2.55\ \mathrm{m\,s^{-1}}.$$

**The same momentum flux gives 12 m s⁻¹ over ocean and 2.6 m s⁻¹ over the city** — a factor of nearly 5.

*What this means for records.* Two anemometers at the identical standard height, in the identical synoptic flow, will disagree by a factor of several if their surroundings differ. So a long wind record is corrupted if trees grow up or buildings go in near the station — a real and well-documented problem in climatology, and one reason wind trends are much harder to establish than temperature trends. Comparisons must be made in terms of $u_*$ or corrected to a standard roughness, never raw.

**P3** (a) $$\tau_E = \frac{H_v}{\sqrt{Kf/2}} = \frac{1.5\times10^{4}}{\sqrt{25\times5\times10^{-5}/2}} = \frac{1.5\times10^{4}}{\sqrt{6.25\times10^{-4}}} = \frac{1.5\times10^{4}}{0.025} = 6.0\times10^{5}\ \mathrm{s} = 6.9\ \mathrm{days}.$$

(b) Observed hurricanes last a week to two weeks, and can maintain peak intensity for days — so the spin-down estimate is of the right order but does not by itself explain the storm's *persistence*, and in particular says nothing about how it intensifies against this drain.

(c) The resolution is that **the hurricane's boundary layer is its fuel supply, not merely its brake**. In a mid-latitude cyclone, friction is a pure loss: it converges air and drains vorticity, giving nothing back. In a hurricane, the same violent surface turbulence over an 300 K ocean drives enormous evaporation — the latent heat flux under an eyewall can exceed 1000 W m⁻² — and that moist air is precisely what fuels the eyewall convection, whose latent heat release generates the PV that *is* the vortex ([5.2](05-02-potential-vorticity.md), P3).

So the hurricane runs a feedback that the mid-latitude cyclone cannot: stronger winds, more evaporation, more latent heat, a stronger vortex, stronger winds. That is **WISHE**, the subject of [6.3](06-03-tropical-cyclones-tropics.md), and it is why a hurricane over warm water can persist far beyond its frictional spin-down time — and why it dies within a day of landfall, when the moisture source is removed but the friction, now over rough land, gets *worse*.

*Check.* The distinction is testable and observed: a hurricane weakens over cold water (fuel removed, friction unchanged) about as fast as over land, confirming that it is the loss of the surface enthalpy flux and not the change in roughness that kills it.

</details>

## Flashback

**From Lesson 4.3 (Geostrophic & gradient wind balance):** At 35°N, sea-level pressure falls by 5 hPa over 350 km toward the west. Take $\rho = 1.2\ \mathrm{kg\,m^{-3}}$. (a) Compute the geostrophic wind speed. (b) State the wind direction using Buys-Ballot's law.

<details>
<summary>Solution</summary>

(a) $$f = 1.4584\times10^{-4}\sin35^\circ = 1.4584\times10^{-4}\times0.5736 = 8.365\times10^{-5}\ \mathrm{s^{-1}},$$

$$\left|\frac{\partial p}{\partial n}\right| = \frac{500\ \mathrm{Pa}}{3.5\times10^{5}\ \mathrm{m}} = 1.429\times10^{-3}\ \mathrm{Pa\,m^{-1}},$$

$$V_g = \frac{1.429\times10^{-3}}{1.2\times8.365\times10^{-5}} = \frac{1.429\times10^{-3}}{1.004\times10^{-4}} = 14.2\ \mathrm{m\,s^{-1}}.$$

(b) Pressure falls toward the **west**, so low pressure lies to the west. Buys-Ballot: in the Northern Hemisphere, low pressure must be on the wind's **left**. Standing with low pressure to the left and facing along the wind means facing **south** — so the wind blows from the north: a **northerly** of about 14 m s⁻¹.

*Check.* Connecting to this lesson: that is the *geostrophic* wind, at the top of the boundary layer. At 10 m over land, friction reduces the speed to perhaps 60 percent of it and backs the direction 25 to 45 degrees toward the low — so the observed surface wind would be roughly 8 to 9 m s⁻¹ from the north-northeast. Reporting a geostrophic wind as if it were a surface wind overstates the speed by half and misses the direction by up to 45 degrees.

</details>

## Connections

- **Backward:** this quantifies the "friction" term written down in [4.1](04-01-pressure-gradient-force-equations-of-motion.md) and the cross-isobar inflow of [4.3](04-03-geostrophic-gradient-wind.md); the surface fluxes are the 104 W m⁻² of [3.2](03-02-greenhouse-effect-energy-budget.md)'s budget; the capping inversion explains [2.6](02-06-cloud-classification.md)'s stratocumulus and [2.4](02-04-stability-parcel-theory-cape.md)'s CIN.
- **Forward:** [6.2](06-02-mesoscale-convection-thunderstorms-tornadoes.md) uses the mixed layer as the reservoir a thunderstorm draws on and its gust front as a new trigger; [6.3](06-03-tropical-cyclones-tropics.md) turns the surface enthalpy flux into a heat engine.
- **Sideways (fluid dynamics):** the logarithmic profile and the constant-stress layer are the turbulent boundary layer of [`fluid-dynamics` 3.4](../../fluid-dynamics/lessons/03-04-boundary-layers.md), with the atmosphere's addition being *rotation*, which turns Blasius's simple shear layer into a spiral.
