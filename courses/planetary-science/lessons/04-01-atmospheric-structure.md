# Planetary Science · Lesson 4.1: Atmospheric structure

> ⏱ ~15 min · Module 4: Planetary atmospheres · Builds on: [3.1](03-01-mass-density-moment-of-inertia.md), [3.2](03-02-gravity-topography-tidal-response.md) · Unlocks: [4.2](04-02-energy-balance-greenhouse.md), [4.4](04-04-atmospheric-circulation.md), [6.4](06-04-exoplanet-atmospheres.md)

## Why this matters

Five atmospheres in this solar system are thick enough to have real structure — Venus, Earth, Mars, Titan and the giants — and they differ in surface pressure by a factor of $10^{4}$, in composition from hydrogen to carbon dioxide, and in gravity by a factor of 20. Yet all five have the same two-part architecture: a convecting lower region and a stably stratified upper one.

That is not a coincidence. It falls out of two equations — hydrostatic balance and the adiabatic lapse rate — that contain no free parameters, only the planet's gravity and the gas's molecular weight and heat capacity. **This lesson is the machinery that lets you sketch the vertical structure of an atmosphere you have never seen**, which is exactly what is needed for an exoplanet ([6.4](06-04-exoplanet-atmospheres.md)).

## The idea

**Hydrostatic balance sets how fast pressure falls with height.** Every layer's weight is carried by the pressure difference across it. Because the gas's density is itself proportional to pressure, the result is exponential decay, with a characteristic length — the **scale height** — of

$$H = \frac{kT}{\mu m_H g}.$$

**Read that formula physically: $H$ is large for a hot atmosphere, for a light gas, and for weak gravity.** Titan's atmosphere is freezing at 94 K, but its gravity is a seventh of Earth's and it is made of nitrogen, so its scale height is 20 km against Earth's 7. Jupiter's, being hydrogen, is 25 km despite gravity 2.5 times Earth's.

**Convection sets the temperature profile in the lower atmosphere.** If a parcel lifted adiabatically ends up warmer than its surroundings it keeps rising, and the atmosphere overturns. Convection continues until it has established exactly the profile that is neutrally stable — the **adiabatic lapse rate**,

$$\Gamma_d = \frac{g}{c_p}.$$

**Again read it physically: gravity does the cooling (a rising parcel does work against it), and heat capacity resists.** Earth gets 9.8 K/km; Jupiter, with hydrogen's enormous heat capacity, only 1.9; Titan, with feeble gravity, 1.3.

**So the troposphere is where the atmosphere is stirred, and it exists because the planet is heated from below.** Sunlight (or, for the giants, internal heat) warms the bottom, the bottom convects, and the lapse rate is pinned near $g/c_p$. Above some level the atmosphere becomes optically thin enough to radiate to space directly, convection is no longer needed, and it stops. **That level is the tropopause, and it is the coldest point.**

**Above it, whether the temperature rises again depends on one thing: is there something up there that absorbs ultraviolet light?**

- **Earth** has ozone, which absorbs hard UV and heats the stratosphere from 217 K back up to 270 K.
- **Titan** has photochemical haze ([4.5](04-05-photochemistry-hazes-evolution.md)), which does the same, warming from 70 K to 180 K.
- **Jupiter** has methane and its photochemical products.
- **Mars has nothing.** Its atmosphere is thin, cold, and has no UV absorber at altitude, so above the troposphere it simply goes isothermal. **Mars has no stratosphere at all.**

**A temperature inversion is therefore a chemical fingerprint visible in a thermal profile** — and this generalizes directly to exoplanets, where a detected inversion is evidence for a high-altitude absorber (TiO, VO, or hazes) without ever seeing its spectrum.

## The formal version

**Hydrostatic equilibrium**, giving the [scale height](../reference.md#scale-height).

$$\frac{dP}{dz} = -\rho g.$$

With the ideal gas law $P = \rho kT/(\mu m_H)$, where $\mu$ is the mean molecular weight in atomic mass units:

$$\frac{dP}{dz} = -\frac{\mu m_H g}{kT}P \quad\Longrightarrow\quad \boxed{\ P(z) = P_0\exp\left(-\int_0^z\frac{dz'}{H(z')}\right), \qquad H = \frac{kT}{\mu m_H g}\ }$$

*In words: pressure falls by a factor of $e$ every scale height.* For isothermal, constant-$g$ conditions this is the barometric law $P = P_0e^{-z/H}$.

| Body | $T$ (K) | $\mu$ | $g$ | $H$ |
|---|---|---|---|---|
| Venus | 730 | 43.4 (CO$_2$) | 8.87 | 15.8 km |
| Earth | 250 | 29.0 | 9.81 | 7.3 km |
| Mars | 210 | 43.3 (CO$_2$) | 3.71 | 10.9 km |
| Titan | 94 | 28.6 (N$_2$) | 1.35 | 20.2 km |
| Jupiter | 165 | 2.22 (H$_2$/He) | 24.8 | 24.9 km |

**Note that Mars's scale height exceeds Earth's** despite being far colder — low gravity wins. Scale height is not a measure of how much atmosphere there is; that is surface pressure.

**The dry adiabatic lapse rate.** For a parcel rising without exchanging heat, the first law plus hydrostatic balance give

$$\Gamma_d \equiv -\frac{dT}{dz} = \frac{g}{c_p}.$$

| Body | $g$ | $c_p$ (J kg$^{-1}$ K$^{-1}$) | $\Gamma_d$ | Observed |
|---|---|---|---|---|
| Venus | 8.87 | 900 | 9.9 K/km | ~8 |
| Earth | 9.81 | 1005 | 9.8 K/km | ~6.5 (moist) |
| Mars | 3.71 | 770 | 4.8 K/km | ~2.5 |
| Titan | 1.35 | 1040 | 1.3 K/km | ~1.0 |
| Jupiter | 24.8 | 13,000 | 1.9 K/km | ~2.0 |

**The observed rate is always at or below the dry adiabat**, for two reasons: condensation releases latent heat (Earth's water, Titan's methane), and radiative heating within the layer (Mars's suspended dust) warms it aloft.

**Stability criterion.** An atmosphere is convectively unstable where the actual lapse rate exceeds the adiabatic one:

$$-\frac{dT}{dz} > \Gamma_d \quad\Longrightarrow\quad \text{convection}.$$

Equivalently, potential temperature $\theta = T(P_0/P)^{R/c_p}$ decreases with height. *In words: an atmosphere cannot sustain a steeper gradient than the adiabat, because convection would erase it.*

**Layers, in order upward.**

| Layer | Defined by | Present when |
|---|---|---|
| troposphere | $T$ falls with height, convecting | always, if heated from below |
| tropopause | temperature minimum | always |
| stratosphere | $T$ *rises* with height, stable | **only with a UV absorber** |
| mesosphere | $T$ falls again | above the absorber |
| thermosphere | $T$ rises steeply | EUV absorption; leads to the exobase of [4.3](04-03-atmospheric-escape.md) |

**Column mass and surface pressure.** Integrating hydrostatic balance over the whole atmosphere,

$$P_s = \frac{M_{\text{atm}}\,g}{4\pi R^2},$$

*In words: surface pressure is just the weight of the column above a square metre.* Inverting for Earth gives $M_{\text{atm}} = 5.3\times10^{18}$ kg, one part in $10^{6}$ of the planet.

## Picture

![A plot of temperature in kelvin on the horizontal axis against pressure in bar on a logarithmic vertical axis, inverted so that high pressure is at the bottom. Five profiles are drawn. Venus starts at 737 kelvin at 92 bar and falls steeply to a tropopause near 230 kelvin at 0.1 bar before flattening. Earth starts at 288 kelvin at 1 bar, reaches a tropopause minimum of 217 kelvin at 0.1 bar, then warms back to 270 kelvin at 0.001 bar before cooling again. Mars starts at 210 kelvin at 6 millibar and cools monotonically to about 140 kelvin, then goes isothermal with no warming at all. Titan starts at 94 kelvin at 1.5 bar, dips to 70 kelvin at 0.13 bar and then warms strongly to 180 kelvin. Jupiter passes 165 kelvin at 1 bar, dips to 110 kelvin at 0.1 bar and warms again above. Dots mark each tropopause. Annotations note that profiles which rise above the tropopause have a UV absorber — ozone on Earth, haze on Titan, methane on Jupiter — while Mars has none and simply goes isothermal, and that below the tropopause convection enforces a lapse rate close to g over c-p: 9.8 kelvin per kilometre on Earth, 9.9 on Venus, 4.8 on Mars, 1.9 on Jupiter and 1.3 on Titan](assets/04-01-fig1.svg)

Five worlds spanning four orders of magnitude in surface pressure, and the same architecture in every one — plus one instructive exception.

## Worked examples

**Example 1 (mechanical — building a profile from scratch).** An exoplanet has $g = 15\ \mathrm{m\,s^{-2}}$, an atmosphere of pure N$_2$ ($\mu = 28$, $c_p = 1040$), surface temperature 400 K and surface pressure 3 bar. (a) Compute the scale height. (b) Compute the lapse rate. (c) At what altitude does the pressure fall to 0.1 bar, assuming an isothermal atmosphere at 400 K, and what would the temperature actually be there?

(a) $$H = \frac{kT}{\mu m_H g} = \frac{1.381\times10^{-23}\times400}{28\times1.6605\times10^{-27}\times15} = \frac{5.524\times10^{-21}}{6.974\times10^{-25}} = 7921\ \mathrm{m} = 7.9\ \mathrm{km}.$$

(b) $$\Gamma_d = \frac{g}{c_p} = \frac{15}{1040} = 0.01442\ \mathrm{K\,m^{-1}} = 14.4\ \mathrm{K\,km^{-1}}.$$

(c) Isothermal: $$z = H\ln\frac{P_0}{P} = 7.921\ \mathrm{km}\times\ln\frac{3}{0.1} = 7.921\times\ln 30 = 7.921\times3.401 = 26.9\ \mathrm{km}.$$

And the temperature there, on the adiabat:

$$T = 400 - 14.4\times26.9 = 400 - 387 = 13\ \mathrm{K}.$$

**Which is absurd** — and the absurdity is the point. The isothermal calculation and the adiabatic calculation are inconsistent, and treating them as independent produces nonsense. Doing it self-consistently, with $T$ falling on the adiabat so $H$ shrinks with height, the pressure falls faster than the isothermal estimate and the 0.1 bar level is reached lower down, around 19 km, where $T\approx125$ K. **The lesson is that $H$ is not a constant** — it is proportional to the local temperature, and in a convecting troposphere the temperature is dropping fast. Use the isothermal barometric law only over a scale height or two.

**Example 2 (why you'd care — reading composition off a thermal profile).** Two exoplanets of the same size and temperature are observed. Planet A's thermal emission spectrum implies a temperature that *falls* with height throughout; planet B's implies a temperature *inversion* above the 100 mbar level. What does this tell you, without any compositional measurement?

**Planet B has a high-altitude ultraviolet or optical absorber; planet A does not.** That is a direct, model-light inference, and it is one of the most useful diagnostics in exoplanet science.

The reasoning is exactly the solar-system reasoning of this lesson. Above the tropopause an atmosphere is heated only by absorbing radiation locally. If it absorbs nothing at altitude, the layer relaxes toward a temperature set by the radiation passing through it and either stays isothermal (Mars) or slowly cools. To get warmer with height, something up there must be intercepting energy that would otherwise have passed by.

For hot Jupiters the candidate absorbers are **titanium oxide and vanadium oxide**, which are strong optical absorbers and are gaseous above roughly 1800 K; for cooler planets, **photochemical hazes**. So detecting an inversion immediately partitions the population, and the presence or absence of TiO becomes testable: it should appear only above a threshold temperature, because below it TiO condenses out and rains down — the "cold trap" problem.

**The generalization worth carrying is that a temperature profile is a chemistry measurement in disguise.** You are not seeing the absorber; you are seeing where energy is being deposited, and that localizes the absorber in altitude even when the spectrum is too noisy to identify it. Applied in the solar system, the same argument says: Earth has ozone, Titan has haze, Mars has neither — and every one of those was inferred from a temperature profile before it was confirmed spectroscopically.

## Watch out

- **You might think a large scale height means a thick atmosphere, but it means a *puffy* one.** Mars has a bigger scale height than Earth and $1/160$ of the surface pressure. Total atmospheric mass is $P_s\cdot4\pi R^2/g$, which is a different quantity entirely.
- **You might think the barometric law holds over any height range, but $H\propto T$ and $T$ varies enormously.** Over a troposphere the temperature can halve, halving $H$. Integrate $dz/H(z)$ rather than assuming a constant.
- **You might think every atmosphere has a stratosphere, but Mars does not.** A stratosphere requires an absorber at altitude, and a temperature inversion in an observed profile is evidence that one exists.
- **You might think the observed lapse rate should equal $g/c_p$, but it is almost always smaller** — latent heat release from condensing water, methane or ammonia, and in-layer radiative heating by dust or haze, both reduce it. The dry adiabat is an upper bound on a convecting atmosphere's lapse rate.

## One-liner

> Gravity and molecular weight fix how fast pressure falls; gravity and heat capacity fix how fast temperature falls; and whether temperature ever rises again tells you whether anything up there absorbs ultraviolet.

## Problems

**P1 (🟢)** Titan has $T = 94$ K near the surface, $\mu = 28.6$, $g = 1.35\ \mathrm{m\,s^{-2}}$, $c_p = 1040\ \mathrm{J\,kg^{-1}\,K^{-1}}$. (a) Compute the scale height. (b) Compute the dry adiabatic lapse rate. (c) Titan's surface pressure is 1.47 bar and its radius is 2575 km; compute the total atmospheric mass and compare with Earth's $5.3\times10^{18}$ kg.

**P2 (🟡)** A CO$_2$ atmosphere ($\mu = 44$, $c_p = 850$) sits on a planet with $g = 6.0\ \mathrm{m\,s^{-2}}$, surface $T = 320$ K, surface $P = 0.5$ bar. (a) Compute $H$ at the surface. (b) Compute $H$ at 200 K. (c) Estimate the altitude of the 0.05 bar level by splitting the column into two isothermal slabs, one at 320 K down to 260 K and one at 260 K down to 200 K, using the adiabat to relate temperature to height. Comment on the method.

**P3 (🔴, optional)** Jupiter has no surface. Its "1 bar level" is used as the reference radius. (a) Given $T = 165$ K at 1 bar, $\mu = 2.22$, $g = 24.8$, compute $H$. (b) Jupiter radiates 1.67 times as much energy as it absorbs from the Sun; explain in two sentences what this implies about its tropospheric structure and how deep the convecting region extends. (c) Explain why the concept of a tropopause still makes sense on Jupiter even though there is no solid lower boundary, and identify what plays the role that a surface plays on Earth.

<details>
<summary>Solutions</summary>

**P1** (a) $$H = \frac{1.381\times10^{-23}\times94}{28.6\times1.6605\times10^{-27}\times1.35} = \frac{1.298\times10^{-21}}{6.412\times10^{-26}} = 2.024\times10^{4}\ \mathrm{m} = 20.2\ \mathrm{km}.$$

(b) $$\Gamma_d = \frac{1.35}{1040} = 1.298\times10^{-3}\ \mathrm{K\,m^{-1}} = 1.30\ \mathrm{K\,km^{-1}}.$$

(c) $$M_{\text{atm}} = \frac{P_s\,4\pi R^2}{g} = \frac{1.47\times10^{5}\times4\pi(2.575\times10^{6})^2}{1.35}.$$

$$4\pi(2.575\times10^{6})^2 = 4\pi\times6.631\times10^{12} = 8.332\times10^{13}\ \mathrm{m^2},$$
$$M_{\text{atm}} = \frac{1.47\times10^{5}\times8.332\times10^{13}}{1.35} = \frac{1.225\times10^{19}}{1.35} = 9.07\times10^{18}\ \mathrm{kg}.$$

**Titan's atmosphere is 1.7 times more massive than Earth's**, on a body with 2 percent of Earth's mass. Per unit surface area it carries about ten times Earth's column mass — the combination of higher surface pressure and much weaker gravity.

**P2** (a) $$H = \frac{1.381\times10^{-23}\times320}{44\times1.6605\times10^{-27}\times6.0} = \frac{4.419\times10^{-21}}{4.383\times10^{-25}} = 1.008\times10^{4}\ \mathrm{m} = 10.1\ \mathrm{km}.$$

(b) $H\propto T$, so $$H(200) = 10.1\times\frac{200}{320} = 6.3\ \mathrm{km}.$$

(c) $$\Gamma_d = \frac{6.0}{850} = 7.06\times10^{-3}\ \mathrm{K\,m^{-1}} = 7.06\ \mathrm{K\,km^{-1}}.$$

*Slab 1*, 320 K to 260 K: thickness $= 60/7.06 = 8.50$ km, mean $T = 290$ K, so $\bar H = 10.1\times(290/320) = 9.15$ km.

$$\frac{P}{P_0} = e^{-8.50/9.15} = e^{-0.929} = 0.395, \qquad P = 0.5\times0.395 = 0.198\ \mathrm{bar}.$$

*Slab 2*, 260 K to 200 K: thickness $= 8.50$ km again, mean $T = 230$ K, $\bar H = 10.1\times(230/320) = 7.26$ km.

$$\frac{P}{P_1} = e^{-8.50/7.26} = e^{-1.171} = 0.310, \qquad P = 0.198\times0.310 = 0.0614\ \mathrm{bar}.$$

Total height so far: 17.0 km, at 0.061 bar. To reach 0.05 bar needs a little more: with $\bar H\approx7$ km,

$$\Delta z = 7\ln\frac{0.0614}{0.05} = 7\times0.205 = 1.4\ \mathrm{km}, \qquad z \approx 18.4\ \mathrm{km}.$$

**On the method:** splitting into isothermal slabs is the practical way to integrate $\int dz/H(z)$ by hand, and two slabs already capture most of the effect. Note that a single isothermal slab at the surface temperature would have given $z = 10.1\ln(0.5/0.05) = 23.3$ km — an overestimate by 27 percent, because it ignores the shrinking of $H$ as the atmosphere cools. **The error is always in the same direction**, since a cooling atmosphere is always more compressed than an isothermal one.

**P3** (a) $$H = \frac{1.381\times10^{-23}\times165}{2.22\times1.6605\times10^{-27}\times24.8} = \frac{2.279\times10^{-21}}{9.142\times10^{-26}} = 2.493\times10^{4}\ \mathrm{m} = 24.9\ \mathrm{km}.$$

(b) Radiating 1.67 times what it absorbs means Jupiter has a large **internal** heat source — residual heat of formation plus ongoing gravitational contraction — so it is heated from below far more strongly than a purely solar-heated planet. That heat must be carried outward, and since radiative transport is hopeless through the deep, opaque interior, **the convecting region extends from the visible cloud tops all the way down through the molecular envelope to the metallic hydrogen layer** — thousands of kilometres, not the tens of kilometres of a terrestrial troposphere.

(c) The tropopause is defined by physics, not by geometry: it is the level above which the atmosphere becomes optically thin enough to radiate its heat directly to space, so convection is no longer required to carry the flux. **That definition never mentions a surface.** Jupiter's tropopause sits near 0.1 bar and 110 K, exactly where the atmosphere becomes transparent in the thermal infrared.

What plays the surface's role is the **internal heat flux itself**. On Earth the ground absorbs sunlight and delivers heat to the atmosphere's base; on Jupiter the deep interior delivers heat to the base of the radiative region. In both cases the requirement is the same — a flux of heat arriving from below that exceeds what radiation alone can carry — and in both cases the response is the same: convection, pinning the lapse rate to the adiabat.

This matters directly for exoplanets, where most observed atmospheres have no surface either. The 1-bar reference level is a convention, but the tropopause is a real physical boundary, and it is where transmission spectra in [6.4](06-04-exoplanet-atmospheres.md) are most sensitive.

</details>

## Flashback

**From Lesson 3.2 (Gravity, topography and tidal response):** A moon has a measured $k_2 = 0.9$ and a mean density of $1900\ \mathrm{kg\,m^{-3}}$. (a) State what the $k_2$ value implies. (b) A second moon of the same size and density has $k_2 = 0.03$; state what that implies. (c) Both show fresh, sparsely cratered surfaces. Explain which piece of evidence is decisive for a subsurface ocean and why.

<details>
<summary>Solution</summary>

(a) $k_2 = 0.9$ is close to the fluid limit of 1.5 and far above what any solid body can produce. It means the outer shell is **mechanically decoupled from the interior by a global liquid layer** — for a body of this density, a rock–ice mixture, that means a global subsurface ocean beneath an ice shell.

(b) $k_2 = 0.03$ is the rigid-body value: the moon deforms only as much as solid rock and ice allow. It is **solid throughout**, with no global liquid layer.

(c) **The $k_2$ measurement is decisive; the surface age is not.**

$k_2$ is a direct mechanical measurement of the body's global rigidity, and a value near unity has no explanation other than a decoupling liquid layer. A young surface, by contrast, only says the surface has been renewed recently, and warm convecting *solid* ice can do that — as can tectonic resurfacing, cryovolcanism from isolated melt pockets, or simply a high recent impactor flux mis-estimated in the crater count ([2.4](02-04-impact-cratering-chronology.md)).

That the two moons here have *the same* surface appearance but $k_2$ values differing by a factor of thirty makes the point sharply: the geology cannot distinguish them and the tidal response separates them completely. This is why [3.2](03-02-gravity-topography-tidal-response.md) insisted that breaking an interior degeneracy requires a measurement sensitive to rigidity, and why the case for Europa's ocean leans on induction and tidal response rather than on its spectacular surface.

</details>

## Connections

- **Backward:** [3.1](03-01-mass-density-moment-of-inertia.md) supplied the surface gravity every formula here needs; [3.2](03-02-gravity-topography-tidal-response.md) established the general strategy of using a body's *response* to infer what it is made of, which this lesson applies to temperature profiles.
- **Forward:** [4.2](04-02-energy-balance-greenhouse.md) explains why the surface is warmer than the equilibrium temperature; [4.3](04-03-atmospheric-escape.md) picks up at the top of the thermosphere; [4.4](04-04-atmospheric-circulation.md) sets this structure in motion; [6.4](06-04-exoplanet-atmospheres.md) applies scale height directly, since the transmission signal is proportional to it.
- **Sideways:** hydrostatic balance, the barometric law, potential temperature and convective stability are [atmospheric-science 1.2](../../atmospheric-science/lessons/01-02-hydrostatic-equation-barometric-law.md)–[1.4](../../atmospheric-science/lessons/01-04-potential-temperature.md)'s, developed there for Earth; this lesson owns the comparative version where $g$, $\mu$ and $c_p$ vary by an order of magnitude each. The hydrostatic equation is the same one used for planetary interiors in [2.1](02-01-differentiation-interior-structure.md) — the difference is only whether density is nearly constant or nearly proportional to pressure.
