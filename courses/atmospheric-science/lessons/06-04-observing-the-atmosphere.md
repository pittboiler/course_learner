# Atmospheric Science · Lesson 6.4: Observing the atmosphere

> ⏱ ~15 min · Module 6: Weather systems & forecasting · Builds on: [3.3 Radiative transfer & the vertical temperature profile](03-03-radiative-transfer-vertical-profile.md), [2.5 The skew-T log-p diagram](02-05-skew-t-log-p-diagram.md) · Unlocks: 6.5 (predictability)

## Why this matters

Every number this course has used came from somewhere. A sounding is a balloon; a satellite image is a brightness temperature at a chosen wavelength; a radar echo is backscattered microwave power converted through an empirical relation into a rainfall rate. Each instrument measures one thing and infers the rest, and knowing *what is measured* versus *what is inferred* is the difference between reading data and trusting it. This lesson also closes a loop: the satellite channels that see different levels are [3.3](03-03-radiative-transfer-vertical-profile.md)'s emission-level argument turned into an engineering choice, and the radar that finds a mesocyclone is [6.2](06-02-mesoscale-convection-thunderstorms-tornadoes.md)'s physics made visible. Finally, the observing network's density and error characteristics are exactly what set the limits of [6.5](06-05-predictability-two-week-limit.md).

## The idea

**Nothing measures the atmosphere in three dimensions.** Every observing system samples a slice: a balloon gives one vertical line at one moment; a satellite gives a horizontal map of one *layer*; a radar gives a cone around one point. The three-dimensional picture is a *reconstruction*, assembled by combining them with a model that already knows the physics — a process called **data assimilation**, and it is the reason a modern analysis is far better than any single instrument.

**Balloons give truth at points.** A radiosonde ascends at about 5 m s⁻¹, reporting pressure, temperature and humidity directly and wind from GPS tracking, reaching 30 km in an hour and a half. It is the only routine *in situ* profile, so it is the reference everything else is calibrated against. It is also expensive, launched only twice a day at fixed hours, and distributed appallingly — dense over Europe and North America, almost absent over the oceans that cover most of the planet.

**Satellites give coverage, not truth.** A satellite measures radiance, and by [3.3](03-03-radiative-transfer-vertical-profile.md) the radiance at a given wavelength comes from the level where the optical depth to space reaches about 1. So the *choice of wavelength is a choice of altitude*, and a radiometer with several channels sounds the atmosphere from orbit. The catch is that each channel's contribution is a broad weighting function, not a sharp level, so satellite soundings have poor vertical resolution — excellent for the global picture, poor for the fine structure a skew-T shows.

**Radar sees the precipitation, not the air.** A weather radar transmits microwaves and measures what is scattered back by raindrops and hail. That backscatter is heavily biased toward large particles, so it says a lot about heavy rain and almost nothing about cloud. The genuine leap was **Doppler**: measuring the frequency shift of the return gives the velocity of the targets *along the beam*, and that is what reveals rotation. A tight pattern of approaching returns beside receding ones — a velocity couplet — is a mesocyclone, and it is why tornado warnings exist at all.

## The formal version

**Radiosondes.** Roughly 800 stations worldwide launch at 00 and 12 UTC, which is why those are the synoptic hours and why every chart is drawn for them. The instrument measures $p$, $T$ and relative humidity directly; wind comes from GPS positions differenced in time. Typical accuracies are 0.2 K in temperature, 1 hPa in pressure, and 5 percent in relative humidity — with humidity the weakest, and notoriously poor at low temperatures where the sensor's response time exceeds the ascent rate. The data are plotted on the skew-T of [2.5](02-05-skew-t-log-p-diagram.md).

**Weather radar and the $Z$–$R$ relation.** Backscattered power from a distribution of drops goes as the sixth power of drop diameter, so the **reflectivity factor** is

$$Z = \int N(D)\,D^6\,dD,$$

quoted in mm⁶ m⁻³. Because $Z$ spans many orders of magnitude, it is reported logarithmically:

$$\mathrm{dBZ} = 10\log_{10}Z.$$

Rainfall rate $R$ is *inferred* from $Z$ by the empirical Marshall–Palmer relation $Z = 200R^{1.6}$ (with $R$ in mm h⁻¹):

| $R$ | $Z$ | dBZ | Character |
|---|---|---|---|
| 0.5 mm h⁻¹ | 66 | 18 | drizzle |
| 1 mm h⁻¹ | 200 | 23 | light rain |
| 10 mm h⁻¹ | 7 960 | 39 | moderate |
| 50 mm h⁻¹ | 105 000 | 50 | heavy |
| 100 mm h⁻¹ | 317 000 | 55 | torrential |
| — | — | over 60 | hail |

The $D^6$ weighting is the whole story of the relation's weaknesses: a few large stones dominate the return, so hail masquerades as extreme rainfall, and the coefficients differ between convective and stratiform rain and between snow and rain. Quantitative precipitation estimates from radar carry a factor-of-two uncertainty as a matter of course.

**Doppler and dual polarization.** The frequency shift gives radial velocity, revealing:

- **Velocity couplet** — inbound beside outbound over a few kilometres: a **mesocyclone** ([6.2](06-02-mesoscale-convection-thunderstorms-tornadoes.md)).
- **Hook echo** — reflectivity wrapped into a hook by the mesocyclone's circulation.
- **Divergence signature** near the ground — a **downburst**.

**Dual-polarization** radar transmits both horizontally and vertically polarized pulses. Since large raindrops flatten as they fall while hail tumbles, the ratio of returns distinguishes rain from hail from snow — and can even detect the debris lofted by a tornado on the ground, which is now a routine warning confirmation.

**Satellites: orbits.** Two families, and the trade-off between them is fundamental:

| | Geostationary | Polar-orbiting |
|---|---|---|
| Altitude | 35 800 km | 700–850 km |
| Period | 24 h (matching Earth's rotation) | ~100 min |
| Coverage | one hemisphere, continuously | global, twice daily per satellite |
| Resolution | coarser; poor at high latitudes | finer |
| Use | watching evolution: storms, fronts | sounding, global analysis |

The geostationary radius follows from Kepler's third law with a period of one sidereal day: $r = (\mu T^2/4\pi^2)^{1/3} = 42\,164$ km from Earth's centre, or 35 790 km above the surface ([`orbital-mechanics` 1.5](../../orbital-mechanics/lessons/01-05-keplers-laws-orbital-period.md)).

**Satellites: channels.** Each is a deliberate use of [3.3](03-03-radiative-transfer-vertical-profile.md):

| Channel | Wavelength | Sees | Note |
|---|---|---|---|
| Visible | 0.6 micrometres | reflected sunlight | cloud *thickness*; useless at night |
| Infrared window | 10.7 micrometres | surface or cloud top | brightness temperature gives cloud-top height via the lapse rate |
| Water vapour | 6.7 micrometres | mid-to-upper troposphere | shows moisture and flow **even in clear air** — the only way to see upper-level dynamics over oceans |
| $\mathrm{CO_2}$ sounding | near 15 micrometres | selectable levels | temperature profiles from the band edges |

The water-vapour channel deserves emphasis: because water vapour is opaque at 6.7 micrometres, the channel never sees the ground, and the dark and bright swirls it shows are dry and moist air being advected by the upper flow. Forecasters use it to locate the PV anomalies and jet streaks of Module 5 directly.

**Other systems.** Commercial aircraft report automatically along their routes (excellent coverage in flight corridors, none elsewhere). **GPS radio occultation** measures the bending of a GPS signal grazing the atmosphere, giving high-vertical-resolution temperature profiles, self-calibrating and global — the single most valuable satellite data type for numerical forecasting per observation. Buoys, ships and surface stations complete the picture.

**Data assimilation.** All of this is combined with a short model forecast — the **background** — weighted by their respective error statistics, to produce the **analysis** used to start the next forecast. The analysis is closer to truth than either the observations or the background alone, and its residual error is exactly the initial error whose growth [6.5](06-05-predictability-two-week-limit.md) is about.

## Picture

![Left, a vertical axis from the surface to 12 km with three satellite channel emission levels marked: the 10.7 micrometre infrared window seeing the surface, the 6.7 micrometre water-vapour channel seeing the mid-troposphere, and the 15 micrometre carbon dioxide channel seeing the upper troposphere; right, a radar reflectivity ladder in dBZ from drizzle at 18 through 1, 10, 50 and 100 mm per hour to hail above 60](assets/06-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — reading a radar).** A radar reports 47 dBZ over a town. (a) Convert to $Z$. (b) Estimate the rainfall rate. (c) A neighbouring cell reads 63 dBZ — estimate its rate and say why you should not trust the number.

(a) $$Z = 10^{47/10} = 10^{4.7} = 5.01\times10^{4}\ \mathrm{mm^6\,m^{-3}}.$$

(b) Invert $Z = 200R^{1.6}$:

$$R = \left(\frac{Z}{200}\right)^{1/1.6} = \left(\frac{5.01\times10^{4}}{200}\right)^{0.625} = (250.6)^{0.625} = 28\ \mathrm{mm\,h^{-1}}.$$

Heavy rain — flash-flood territory if sustained.

(c) $$Z = 10^{6.3} = 2.00\times10^{6}, \qquad R = \left(\frac{2.00\times10^{6}}{200}\right)^{0.625} = (10^{4})^{0.625} = 316\ \mathrm{mm\,h^{-1}}.$$

**Do not trust it.** Above about 55 dBZ the return is almost certainly contaminated by **hail**, and because $Z \propto D^6$ a single 2 cm stone returns as much power as roughly $(20/2)^6 = 10^{6}$ 2 mm raindrops. The $Z$–$R$ relation was fitted to rain and is simply the wrong function. Operational systems cap the inferred rate near 55 dBZ for exactly this reason, and dual-polarization is used to identify the hail and exclude it.

**Example 2 (why you'd care — seeing a jet streak over an empty ocean).** A forecaster needs to know whether a jet streak is approaching the west coast of Ireland from over the North Atlantic, where there are no radiosondes for 3000 km. What do they look at?

Not the visible channel, which shows cloud but says nothing about the flow above it, and nothing at all at night. Not the infrared window, which reports cloud-top temperature — useful for finding *where* the cloud is, but blind in the clear air where the jet's dynamics live.

**The water-vapour channel.** At 6.7 micrometres the atmosphere is opaque, so the emission level sits in the mid-to-upper troposphere regardless of whether there is cloud. Dry air aloft means the emission comes from *lower* and *warmer* levels, appearing dark; moist air means emission from higher and colder, appearing bright. So the imagery maps the upper-level moisture field — and moisture is advected by the flow, making it a tracer.

*What that reveals.* A sharp dark band on the poleward side of a bright zone is a **dry intrusion**: descending stratospheric air, which by [5.2](05-02-potential-vorticity.md) is a positive PV anomaly, and by [5.4](05-04-divergence-vertical-motion-quasi-geostrophic.md) will force ascent and cyclogenesis where it overruns a low-level baroclinic zone. Forecasters read the water-vapour loop as a direct picture of Module 5's dynamics — over an ocean with no other data.

*The general point.* You cannot measure PV, vorticity or divergence. You measure a radiance, choose the wavelength so the emission level lands where the dynamics are, and infer the rest from theory. Every observing system works this way, and knowing which theory is doing the inferring is what stops you over-trusting the picture.

## Watch out

- **You might think** a satellite measures temperature. **Actually** it measures *radiance*, which is converted to a **brightness temperature** — the blackbody temperature that would produce that radiance. That equals the real temperature only where the emissivity is near 1 and the emission comes from a well-defined level. Over a thin cirrus deck, or in a partly cloudy pixel, the brightness temperature is a mixture and corresponds to no real level at all.
- **You might think** high dBZ means heavy rain. **Actually** it means *large particles*, and the $D^6$ weighting makes hail dominate. Above 55 dBZ, assume hail until dual-polarization says otherwise.
- **You might think** radar sees clouds. **Actually** a standard weather radar sees precipitation-sized particles; cloud droplets at 10 micrometres return roughly $(10/1000)^6 = 10^{-12}$ of a 1 mm drop's power and are effectively invisible. Cloud radars exist but use much shorter wavelengths and are research instruments.
- **You might think** more observations always improve a forecast. **Actually** what matters is where the observation is *relative to the flow's sensitivity*. A single dropsonde released into a developing PV anomaly upstream can improve a downstream forecast more than a thousand routine reports elsewhere — which is why targeted observing missions are flown ahead of major storms.

## One-liner

> A balloon measures truth at a point, a satellite chooses its altitude by choosing its wavelength, a radar sees only what precipitates — and the three-dimensional atmosphere you think you are looking at is a reconstruction stitched together by a model.

## Problems

**P1 (🟢)** A radar reports 35 dBZ. (a) Convert to $Z$. (b) Estimate the rainfall rate using $Z = 200R^{1.6}$.

**P2 (🟡)** A satellite infrared-window channel reads a brightness temperature of 218 K over a thunderstorm anvil, in a column whose surface temperature is 302 K and whose lapse rate is 6.8 K km⁻¹ up to a tropopause at 12 km. (a) Estimate the cloud-top height. (b) Is the answer consistent with the tropopause height? (c) What would you conclude if the reading were 205 K?

**P3 (🔴, optional)** Derive the geostationary altitude. (a) Using Kepler's third law $T^2 = 4\pi^2r^3/\mu$ with $\mu = 3.986\times10^{14}\ \mathrm{m^3\,s^{-2}}$ and the sidereal day $T = 86\,164$ s, compute the orbital radius and the altitude above Earth's surface (radius 6371 km). (b) A geostationary satellite views Earth from that altitude. Compute the latitude beyond which the surface is below its horizon, and explain why polar-orbiting satellites are essential. (c) Explain why the *sidereal* day is the correct period, not the 86 400 s solar day.

<details>
<summary>Solutions</summary>

**P1** (a) $$Z = 10^{35/10} = 10^{3.5} = 3162\ \mathrm{mm^6\,m^{-3}}.$$

(b) $$R = \left(\frac{3162}{200}\right)^{0.625} = (15.81)^{0.625} = 5.8\ \mathrm{mm\,h^{-1}}.$$

Moderate rain. *Check.* The table in the lesson gives 39 dBZ for 10 mm h⁻¹ and 23 dBZ for 1 mm h⁻¹; 35 dBZ sits between them and closer to the upper, and 5.8 mm h⁻¹ is duly between 1 and 10 and closer to 10. Consistent.

**P2** (a) The brightness temperature is the cloud-top temperature (an anvil is optically thick and nearly black in the infrared, so emissivity is close to 1). Descending from the surface at 6.8 K km⁻¹:

$$z = \frac{302 - 218}{6.8} = \frac{84}{6.8} = 12.4\ \mathrm{km}.$$

(b) **Yes, and informatively so.** The tropopause is at 12 km, so a cloud top at 12.4 km means the storm's updraft has slightly **overshot** its equilibrium level ([2.4](02-04-stability-parcel-theory-cape.md)) and punched into the stratosphere. An overshooting top is a marker of a very strong updraft and is used operationally as a severe-weather indicator.

(c) A reading of 205 K would give $z = (302-205)/6.8 = 14.3$ km — more than 2 km above the tropopause, which the lapse-rate extrapolation cannot support, since above the tropopause the temperature *rises*. Two readings are possible: either the overshoot is extreme (a genuinely violent storm), or — more carefully — the extrapolation itself is invalid above 12 km and the cloud top is at the tropopause with the low brightness temperature caused by something else, such as a thin cirrus layer above whose emissivity is below 1. The honest conclusion is that **beyond the tropopause the infrared-window height estimate stops working**, which is a real operational limitation.

**P3** (a) $$r = \left(\frac{\mu T^2}{4\pi^2}\right)^{1/3} = \left(\frac{3.986\times10^{14} \times (8.6164\times10^{4})^2}{39.478}\right)^{1/3}.$$

Working it: $T^2 = 7.4242\times10^{9}$, so $\mu T^2 = 2.9594\times10^{24}$, divided by 39.478 gives $7.4964\times10^{22}$, and the cube root is $4.2164\times10^{7}$ m.

$$r = 42\,164\ \mathrm{km}, \qquad h = 42\,164 - 6371 = 35\,793\ \mathrm{km}.$$

(b) The satellite's horizon is where the line of sight is tangent to Earth's surface, so

$$\cos\phi_{\max} = \frac{R_E}{r} = \frac{6371}{42\,164} = 0.1511, \qquad \phi_{\max} = 81.3^\circ.$$

In principle it sees to 81 degrees latitude — but only at a grazing angle, where each pixel is smeared over an enormous slant footprint and the atmospheric path is many airmasses ([3.3](03-03-radiative-transfer-vertical-profile.md)). In practice geostationary data are unusable poleward of about 60 to 70 degrees. **Polar orbiters are therefore essential**: they pass over the poles every orbit and in fact give their *best* coverage exactly where geostationary satellites give their worst.

(c) Because "geostationary" means staying above a fixed point on the rotating Earth, and the Earth's rotation relative to *inertial space* — which is what orbital mechanics is written in — takes one **sidereal** day, 86 164 s. The 86 400 s solar day is longer because Earth must turn an extra degree or so to bring the Sun back overhead after moving along its orbit. Using 86 400 s would give a radius about 0.3 percent too large, and a satellite there would drift west by roughly a degree a day — a large error that would have to be corrected continuously with fuel.

*Check.* This is the same sidereal-versus-solar distinction that appears in $f = 2\Omega\sin\phi$ ([4.2](04-02-coriolis-effect.md)), and for the same reason: both are statements about rotation relative to inertial space.

</details>

## Flashback

**From Lesson 2.5 (The skew-T log-p diagram):** A sounding shows the temperature and dew-point traces lying together from the surface to 800 hPa, then splaying rapidly apart above, with the temperature trace briefly *increasing* with height between 800 and 750 hPa. (a) What is the humidity structure? (b) Name the feature between 800 and 750 hPa and say what it does. (c) What weather do you expect?

<details>
<summary>Solution</summary>

(a) Traces together from the surface to 800 hPa means **saturated or near-saturated** through that layer; splaying apart above means the air aloft is **dry**, with a large dew-point depression.

(b) Temperature *increasing* with height is an **inversion** — here a capping inversion or subsidence inversion, roughly 800 to 750 hPa. It acts as a **lid**: a parcel lifted into it arrives colder than its surroundings and sinks back, so it caps the moist layer below and prevents convection from breaking through ([2.4](02-04-stability-parcel-theory-cape.md)'s CIN).

(c) A moist, well-mixed layer trapped under an inversion is the recipe for **stratocumulus** ([2.6](02-06-cloud-classification.md)): a lumpy overcast filling the layer up to the cap, with no precipitation beyond drizzle. If the surface heats enough to erode the cap, the trapped moisture is suddenly free to convect through a deep layer — and whatever CAPE lies above is released at once. This is the "loaded gun" of [2.5](02-05-skew-t-log-p-diagram.md), and the same sounding that promises a dull grey morning can deliver severe storms by late afternoon.

*Check.* Connecting to this lesson: the stratocumulus deck would appear bright in the visible channel and *warm* in the infrared window (its top is only about 2 km up, so its brightness temperature is close to the surface value), which distinguishes it at a glance from the cold, high anvils of P2.

</details>

## Connections

- **Backward:** the choice of satellite channel is [3.3](03-03-radiative-transfer-vertical-profile.md)'s emission level turned into an engineering decision; the radar's $D^6$ weighting is [2.3](02-03-cloud-precipitation-formation.md)'s drop-size distribution; the mesocyclone signature is [6.2](06-02-mesoscale-convection-thunderstorms-tornadoes.md)'s physics; and the plotted profile is [2.5](02-05-skew-t-log-p-diagram.md)'s skew-T.
- **Forward:** [6.5](06-05-predictability-two-week-limit.md) shows that the residual error in the assimilated analysis — set by the density and accuracy of exactly these systems — is what grows and destroys a forecast.
- **Sideways (orbital mechanics):** the geostationary altitude is Kepler's third law with a one-sidereal-day period, [`orbital-mechanics` 1.5](../../orbital-mechanics/lessons/01-05-keplers-laws-orbital-period.md), and the sun-synchronous polar orbits used for sounding exploit the $J_2$ oblateness precession covered in that course.
