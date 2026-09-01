# Atmospheric Science · Lesson 4.4: Thermal wind, the general circulation & wind belts

> ⏱ ~15 min · Module 4: Dynamics & weather systems · Builds on: [4.3 Geostrophic & gradient wind balance](04-03-geostrophic-gradient-wind.md), [1.2 The hydrostatic equation](01-02-hydrostatic-equation-barometric-law.md) · Unlocks: 4.5 (fronts & cyclones)

## Why this matters

Two questions have been left hanging. Lesson 1.2 showed that a warm air column is thicker than a cold one and promised the consequence would matter; Lesson 3.2 showed that the tropics absorb more energy than they radiate while the poles do the reverse, and left the resulting circulation unexplained. This lesson collects both debts at once. The **thermal wind** relation converts a horizontal temperature gradient directly into a *change of wind with height* — and since Earth's largest temperature gradient runs from equator to pole, it predicts a strong westerly wind at the tropopause. That is the jet stream, derived rather than described. Then, stepping back, the same energy imbalance organizes the whole atmosphere into three cells per hemisphere, fixing the location of every major desert, rainforest and storm track on the planet.

## The idea

**Thermal wind in one picture.** Put a warm column next to a cold one. Both start with the same surface pressure, so at the ground there is no horizontal pressure difference and no wind. But the warm column is *taller* (Lesson 1.2), so its pressure surfaces stand higher. Climb, and the height difference between the two columns' pressure surfaces grows — meaning the horizontal pressure gradient grows with altitude. And a growing pressure gradient means, by [4.3](04-03-geostrophic-gradient-wind.md), a growing geostrophic wind.

So: **a horizontal temperature gradient does not by itself create wind; it creates wind *shear*.** The wind change between two levels is set entirely by the mean temperature gradient of the layer between them. That is the thermal wind, and it is a diagnostic relation — no time evolution, no dynamics, just geometry plus hydrostatics plus geostrophy.

**Which way does it blow?** In the Northern Hemisphere, with cold air to the north, the thermal wind is **westerly** — it points with the cold air on its left. So the westerlies strengthen with height, reaching a maximum at the tropopause where the temperature gradient runs out. That maximum is the **jet stream**, and it sits above the sharpest horizontal temperature contrast: the polar front near 60 degrees for the polar jet, the Hadley cell's poleward edge near 30 degrees for the subtropical jet.

**Why three cells, not one.** The energy imbalance suggests one giant overturning per hemisphere: rise at the equator, sink at the pole. It does not happen, and [4.2](04-02-coriolis-effect.md)'s angular-momentum argument says why. Air moving poleward aloft conserves angular momentum and speeds up eastward — 58 m s⁻¹ by 20 degrees, 134 m s⁻¹ by 30. Long before it could reach the pole, that shear becomes unstable and breaks down. So the direct overturning — the **Hadley cell** — reaches only about 30 degrees, where the air sinks, warms adiabatically, and produces the subtropical belt of deserts and highs. Beyond 30 degrees, poleward heat transport is done not by a smooth cell but by **eddies**: the travelling cyclones and anticyclones of the mid-latitudes, which mix warm and cold air past each other. The "Ferrel cell" that appears in textbook diagrams is not a driven circulation at all but the *average* of that eddy activity.

## The formal version

**Deriving the thermal wind.** Start from geostrophic balance in pressure coordinates, $V_g = -(g/f)\,\partial Z/\partial n$, and differentiate with respect to pressure. The hypsometric equation of [1.2](01-02-hydrostatic-equation-barometric-law.md) says the thickness between two pressure levels is $\Delta Z = (R_d\overline{T}/g)\ln(p_1/p_2)$, so its horizontal gradient is proportional to the horizontal gradient of the layer-mean temperature. Combining,

$$\boxed{\ \mathbf{V}_T \equiv \mathbf{V}_g(p_2) - \mathbf{V}_g(p_1) = \frac{R_d}{f}\ln\!\left(\frac{p_1}{p_2}\right)\,\hat{\mathbf{k}}\times\nabla_H\overline{T}\ }$$

or, in height coordinates and one component,

$$\frac{\partial V_g}{\partial z} \approx \frac{g}{fT}\left|\frac{\partial T}{\partial n}\right|.$$

*In words: the vector difference between the geostrophic wind at two levels is proportional to the layer's mean horizontal temperature gradient, and blows at right angles to it with cold air on the left in the Northern Hemisphere.* Note what this is and is not: it gives the *shear*, not the wind. A layer with no temperature gradient has no shear, whatever the wind speed.

**Building the jet.** Take a realistic mid-latitude troposphere: a 40 K temperature drop from 30 degrees to 70 degrees latitude (about 5000 km), a layer-mean temperature of 250 K, and $f = 1.03\times10^{-4}\ \mathrm{s^{-1}}$ at 45°N:

$$\frac{\partial V_g}{\partial z} = \frac{9.81}{1.03\times10^{-4}\times250}\times\frac{40}{5\times10^{6}} = 380.5 \times 8.0\times10^{-6} = 3.04\times10^{-3}\ \mathrm{s^{-1}}.$$

Over the 10 km depth of the troposphere that accumulates to

$$\Delta V = 3.04\times10^{-3}\times10^{4} = 30\ \mathrm{m\,s^{-1}}.$$

Add a light surface westerly and you have a 35 to 40 m s⁻¹ westerly at the tropopause — the observed jet, from one temperature gradient. And the reason the jet *stops* at the tropopause is equally clean: above it, in the stratosphere, the meridional temperature gradient reverses in summer and weakens generally, so the shear reverses sign and the wind falls off.

**Warm and cold advection from a wind profile.** Because $\mathbf{V}_T$ is perpendicular to $\nabla_H\overline{T}$, watching how the wind direction changes with height diagnoses the temperature advection without a single thermometer:

| Wind with height | Name | Diagnosis |
|---|---|---|
| turns clockwise (e.g. southerly → westerly) | **veering** | warm advection |
| turns counterclockwise (e.g. westerly → southerly) | **backing** | cold advection |

*In words: a veering wind profile means warm air is moving in.* Forecasters read this off a single sounding, and it is one of the most-used practical consequences of the whole of Module 4.

**The three-cell circulation.** Driven by the equator-to-pole imbalance of [3.2](03-02-greenhouse-effect-energy-budget.md)'s budget:

| Feature | Latitude | What happens |
|---|---|---|
| **ITCZ** | near 0° (migrating with the season) | trade winds converge, air rises, heavy rain — the rainforest belt |
| **Hadley cell** | 0–30° | direct thermal circulation: rise at the ITCZ, poleward aloft, sink near 30° |
| **Subtropical highs** | near 30° | descending, warming, drying air — the world's desert belt, and the horse latitudes |
| **Trade winds** | 0–30° | the Hadley cell's low-level return flow, turned westward by Coriolis: northeasterlies in the north, southeasterlies in the south |
| **Subtropical jet** | near 30°, at the tropopause | where the Hadley cell's poleward flow has accumulated its angular momentum |
| **Westerlies** | 30–60° | the surface signature of the deep thermal wind; the mid-latitude storm track |
| **Polar front** | near 60° | sharp boundary between polar and tropical air; the birthplace of cyclones |
| **Polar jet** | near 60°, at the tropopause | the thermal wind above the polar front — stronger and more variable than the subtropical jet |
| **Polar easterlies** | 60–90° | shallow, cold outflow from the polar high |

The single most useful pattern here: **rising branches are wet, sinking branches are dry**. The ITCZ and the polar front are rising, and they hold the world's rainforests and its temperate storm tracks; 30 degrees and the poles are sinking, and they hold the Sahara, the Kalahari, the Atacama, the Australian outback, and the polar deserts. Every major climate zone on Earth is a consequence of this diagram.

## Picture

![Top, pressure surfaces from 1000 to 300 hPa tilting progressively more steeply between a cold pole and a warm equator, with the westerly wind out of the page growing with height; bottom, the three-cell meridional circulation with the Hadley, Ferrel and polar cells, the ITCZ, subtropical high and polar front marked at the surface, the trade winds, westerlies and polar easterlies labelled, and the subtropical and polar jets at the cell boundaries](assets/04-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — shear from a thickness chart).** Between two stations 800 km apart at 45°N, the 1000-to-500 hPa thickness differs by 240 m, with the thicker (warmer) column to the south. Find the thermal wind.

Use the geopotential form applied to the *thickness*:

$$V_T = \frac{g}{f}\frac{\partial(\Delta Z)}{\partial n} = \frac{9.81}{1.031\times10^{-4}}\times\frac{240}{8\times10^{5}} = 9.513\times10^{4}\times3.0\times10^{-4} = 28.5\ \mathrm{m\,s^{-1}}.$$

*Direction:* with the cold (thin) air on the left, so the thermal wind is **westerly**. If the 1000 hPa wind is a 5 m s⁻¹ southwesterly, the 500 hPa geostrophic wind is that vector plus a 28.5 m s⁻¹ westerly — dominated by the thermal component, hence a strong westerly of about 32 m s⁻¹. Note the wind *veered* from southwest toward west with height, so this profile is diagnosing warm advection.

**Example 2 (why you'd care — why the winter jet is stronger, and why it wanders).** In winter the pole cools far more than the tropics do, so the equator-to-pole temperature contrast roughly doubles, from about 25 K in summer to about 50 K in winter across the same 5000 km.

$$\frac{\partial V_g}{\partial z}\bigg|_{\text{winter}} = \frac{9.81}{1.03\times10^{-4}\times245}\times\frac{50}{5\times10^{6}} = 388.6\times1.0\times10^{-5} = 3.89\times10^{-3}\ \mathrm{s^{-1}},$$

giving $\Delta V = 39\ \mathrm{m\,s^{-1}}$ over 10 km, against roughly 19 m s⁻¹ for the summer contrast. **The winter jet is about twice as fast**, which is exactly observed, and it is why transatlantic flights eastbound are shortest in January.

*The second consequence.* A stronger meridional temperature gradient also stores more available potential energy in the tilted isentropic surfaces, and that reservoir is what feeds **baroclinic instability** — the growth of mid-latitude cyclones, which [4.5](04-05-air-masses-fronts-cyclones.md) takes up. So the winter jet is both faster and more unstable, buckling into large-amplitude Rossby waves that carry Arctic air far south and warm maritime air far north. The strong, straight summer jet and the strong, wavy winter jet are the same physics at two amplitudes.

## Watch out

- **You might think** the thermal wind is a wind. **Actually** it is a *difference* between winds at two levels — a shear vector, with units of velocity but the meaning of a change. Saying "the thermal wind is 30 m s⁻¹" means the geostrophic wind changes by 30 m s⁻¹ across the layer, and says nothing about the wind at either end.
- **You might think** the Ferrel cell is driven like the Hadley cell. **Actually** it is an artifact of averaging. There is no coherent overturning at 45 degrees; there are travelling eddies that transport heat poleward, and their time-average happens to look like a thermally *indirect* cell (rising cold air, sinking warm air), which no direct heat engine could produce. The Hadley cell is real machinery; the Ferrel cell is a statistic.
- **You might think** the jet stream is a river of air that particular parcels travel along. **Actually** it is a *pattern* — a band of maximum wind. Air enters and exits it constantly, accelerating into the jet entrance and decelerating at the exit, and it is exactly those entrance and exit regions, where the flow is out of geostrophic balance, that force the ascent that spawns surface cyclones.
- **You might think** Coriolis "causes" the trade winds to blow from the east. **Actually** Coriolis deflects the equatorward-moving return flow of the Hadley cell to the right in the Northern Hemisphere, turning a northerly into a *north-easterly*. The driver is the Hadley circulation; Coriolis only sets the angle. Without the cell there would be no trades to deflect.

## One-liner

> A horizontal temperature gradient does not make wind — it makes wind *shear*, and Earth's equator-to-pole gradient accumulated over 10 km of troposphere is precisely the jet stream.

## Problems

**P1 (🟢)** At 40°N the 1000-to-500 hPa thickness falls by 180 m over 600 km toward the north. Compute the thermal wind magnitude and give its direction.

**P2 (🟡)** A sounding at 50°N shows a 10 m s⁻¹ southerly at 850 hPa and a 30 m s⁻¹ westerly at 300 hPa. (a) Find the thermal wind vector for the layer (magnitude and direction). (b) Is the wind veering or backing? (c) What temperature advection is occurring, and on which side does the cold air lie?

**P3 (🔴, optional)** Mars has $\Omega = 7.09\times10^{-5}\ \mathrm{s^{-1}}$, $R_d^{\mathrm{M}} = 192\ \mathrm{J\,kg^{-1}\,K^{-1}}$, and an equator-to-pole temperature contrast of about 60 K across roughly 5000 km in southern winter. Taking $g = 3.71\ \mathrm{m\,s^{-2}}$, a mean temperature of 200 K, and a scale height of 10.9 km: (a) compute $f$ at 45 degrees latitude; (b) compute the vertical shear of the geostrophic wind; (c) estimate the jet speed at one scale height, and comment on why Mars's Hadley cell reaches much further poleward than Earth's.

<details>
<summary>Solutions</summary>

**P1** $$f = 2\times7.292\times10^{-5}\times\sin40^\circ = 1.4584\times10^{-4}\times0.6428 = 9.374\times10^{-5}\ \mathrm{s^{-1}},$$

$$V_T = \frac{g}{f}\frac{\partial(\Delta Z)}{\partial n} = \frac{9.81}{9.374\times10^{-5}}\times\frac{180}{6\times10^{5}} = 1.0465\times10^{5}\times3.0\times10^{-4} = 31.4\ \mathrm{m\,s^{-1}}.$$

*Direction:* thickness falling northward means the cold, thin air is to the north. The thermal wind blows with cold air on its left, so it points **east** — a westerly thermal wind of 31 m s⁻¹, meaning the geostrophic westerly at 500 hPa exceeds that at 1000 hPa by 31 m s⁻¹.

*Check.* Converting to a temperature gradient: $\Delta Z = (R_d\overline{T}/g)\ln 2$, so $\delta(\Delta Z) = (R_d\ln2/g)\,\delta\overline{T} = 20.3\,\delta\overline{T}$ metres per kelvin. A 180 m thickness change is therefore $180/20.3 = 8.9$ K over 600 km — a sharp gradient, appropriate to a frontal zone, and consistent with a 31 m s⁻¹ shear.

**P2** (a) Work in components, with $x$ east and $y$ north. A 10 m s⁻¹ southerly (blowing *from* the south, i.e. toward the north) is $(u,v) = (0, 10)$. A 30 m s⁻¹ westerly (blowing toward the east) is $(30, 0)$.

$$\mathbf{V}_T = \mathbf{V}(300) - \mathbf{V}(850) = (30 - 0,\ 0 - 10) = (30, -10)\ \mathrm{m\,s^{-1}},$$

$$|\mathbf{V}_T| = \sqrt{900 + 100} = \sqrt{1000} = 31.6\ \mathrm{m\,s^{-1}},$$

pointing east-southeast (18.4 degrees south of due east).

(b) The wind goes from southerly to westerly with height — south, then southwest, then west — which is a **clockwise** turn, so the wind is **veering**.

(c) Veering means **warm advection**. Mechanically: the thermal wind has cold air on its left, and $\mathbf{V}_T$ points east-southeast, so the cold air lies to the **north-northeast** and the warm air to the south-southwest. Since the low-level wind is southerly, it is carrying that warm air northward — warm advection, confirming the veering rule.

*Check.* The two routes to the answer are independent: one uses the empirical veering-equals-warm-advection rule, the other computes where the cold air must be from the thermal wind's direction and then asks what the low-level wind does to it. They agree, which is the point of the rule.

**P3** (a) $$f = 2\times7.09\times10^{-5}\times\sin45^\circ = 1.418\times10^{-4}\times0.7071 = 1.003\times10^{-4}\ \mathrm{s^{-1}},$$

essentially identical to Earth's — Mars's day is only 40 minutes longer than ours.

(b) $$\frac{\partial V_g}{\partial z} = \frac{g}{fT}\left|\frac{\partial T}{\partial n}\right| = \frac{3.71}{1.003\times10^{-4}\times200}\times\frac{60}{5\times10^{6}} = 184.9 \times 1.2\times10^{-5} = 2.22\times10^{-3}\ \mathrm{s^{-1}}.$$

(c) Over one scale height, $\Delta V = 2.22\times10^{-3}\times1.09\times10^{4} = 24\ \mathrm{m\,s^{-1}}$; over two or three scale heights, which is where Mars's jets are observed, this accumulates to 50 to 70 m s⁻¹ — matching the observed Martian winter jet.

Why the Hadley cell reaches further: the cell's poleward extent is set by how far angular-momentum-conserving air can travel before the winds it generates become unstable, and by the strength of the thermal driving. Mars's atmosphere has a tiny thermal inertia (no ocean, and a surface pressure less than one percent of Earth's), so its equator-to-pole contrast is larger and its response to seasonal forcing is much more extreme. Its Hadley circulation is correspondingly stronger and, in solstice seasons, becomes a single cross-equatorial cell reaching from mid-southern to mid-northern latitudes — nothing like Earth's tidy symmetric pair. The physics is identical; the parameter regime is not.

*Check.* Using [4.2](04-02-coriolis-effect.md)'s P3 formula with Martian values, $\Omega a = 7.09\times10^{-5}\times3.39\times10^{6} = 240\ \mathrm{m\,s^{-1}}$, so angular-momentum-conserving air reaching 30 degrees would have $u = 240\times0.2887 = 69\ \mathrm{m\,s^{-1}}$ — only half of Earth's 134 m s⁻¹, because Mars is smaller. Less shear at a given latitude means the instability threshold is reached further poleward, which is the second half of the answer.

</details>

## Flashback

**From Lesson 4.2 (The Coriolis effect):** A parcel at 55°S moves with a speed of 25 m s⁻¹. (a) Compute the Coriolis parameter and the magnitude of the Coriolis acceleration. (b) State the direction of deflection. (c) Find the radius of the inertial circle the parcel would trace with no pressure gradient.

<details>
<summary>Solution</summary>

(a) $$f = 2\times7.292\times10^{-5}\times\sin(-55^\circ) = 1.4584\times10^{-4}\times(-0.8192) = -1.195\times10^{-4}\ \mathrm{s^{-1}},$$

$$|a| = |f|V = 1.195\times10^{-4}\times25 = 2.99\times10^{-3}\ \mathrm{m\,s^{-2}}.$$

(b) $f < 0$, so the deflection is to the **left** of the motion — the Southern-Hemisphere sense. A parcel launched northward from 55°S curves west.

(c) $$r = \frac{V}{|f|} = \frac{25}{1.195\times10^{-4}} = 2.09\times10^{5}\ \mathrm{m} = 209\ \mathrm{km},$$

traced counterclockwise (leftward turning) with period $2\pi/|f| = 5.26\times10^{4}\ \mathrm{s} = 14.6$ h.

*Check.* The sign of $f$ carries the entire hemispheric difference: the same speed at 55°N would give $r = 209$ km traced *clockwise* with the identical period. The magnitude of $f$ at 55 degrees is larger than at 45 degrees ($1.20$ against $1.03\times10^{-4}$), so both the acceleration and the tightness of the circle increase poleward — one reason Southern Ocean weather systems are so tightly wound.

</details>

## Connections

- **Backward:** the thermal wind is [1.2](01-02-hydrostatic-equation-barometric-law.md)'s hypsometric equation differentiated horizontally and fed into [4.3](04-03-geostrophic-gradient-wind.md)'s geostrophic balance; the three-cell structure answers the latitudinal imbalance found in [3.2](03-02-greenhouse-effect-energy-budget.md)'s budget, with the cell's poleward limit set by [4.2](04-02-coriolis-effect.md)'s angular-momentum argument.
- **Forward:** [4.5](04-05-air-masses-fronts-cyclones.md) shows how the vertical shear derived here becomes *unstable*, breaking into the travelling cyclones that actually do the mid-latitude heat transport.
- **Sideways (oceanography):** the ocean has its own thermal wind, in which horizontal density gradients (from temperature *and* salinity) set the vertical shear of the currents; the Antarctic Circumpolar Current is the oceanic jet stream, driven by the same relation across the same latitudes. See [`oceanography`](../../oceanography/syllabus.md).
