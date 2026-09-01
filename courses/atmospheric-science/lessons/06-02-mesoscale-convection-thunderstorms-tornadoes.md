# Atmospheric Science · Lesson 6.2: Mesoscale convection — thunderstorms to tornadoes

> ⏱ ~15 min · Module 6: Weather systems & forecasting · Builds on: [6.1 The atmospheric boundary layer](06-01-atmospheric-boundary-layer.md), [2.4 Stability, parcel theory & CAPE](02-04-stability-parcel-theory-cape.md) · Unlocks: 6.3 (tropical cyclones), 6.4 (observing the atmosphere)

## Why this matters

Lesson 2.4 computed how much energy a thunderstorm has available. It said nothing about what the storm *does* with it, and the difference between two storms with identical CAPE can be the difference between a twenty-minute shower and a tornado outbreak. The variable that decides is **vertical wind shear**, and the mechanism by which it decides is one of the most satisfying arguments in meteorology: shear separates a storm's updraft from its own downdraft, so the storm stops killing itself. Everything else — the mesocyclone, the hook echo, the tornado, the squall line — follows from that separation. This is also the scale, a few kilometres to a hundred, where the balanced dynamics of Module 5 fail entirely and buoyancy takes over.

## The idea

**An ordinary thunderstorm commits suicide.** Warm moist air rises, condenses, and makes precipitation. The precipitation then has to fall — and in a storm with no shear, it falls straight back down through the updraft that produced it. Falling rain drags air with it and, as some evaporates, cools it; the result is a cold **downdraft** occupying the same column that the updraft needs. Within twenty to forty minutes the downdraft has undercut the inflow and the storm is finished. This is the **single-cell** life cycle, and it is why fair-weather afternoon showers are brief.

**Shear saves the storm by tilting it.** Now put the storm in an environment where the wind increases and turns with height. The updraft leans downshear as it rises, so the precipitation it lofts falls out *beside* the updraft rather than through it. Inflow and outflow are now spatially separated, and the storm can run in a **steady state** for hours. That is a **supercell**, and although supercells are a small minority of thunderstorms, they produce the great majority of large hail, damaging wind and tornadoes.

**Shear also supplies the spin.** Wind changing with height is, by [5.1](05-01-vorticity-circulation.md), *horizontal* vorticity — imagine a paddle wheel with a horizontal axle, rolling in the shear. The updraft grabs those horizontal vortex tubes and **tilts** them into the vertical, converting rolling into spinning. Then it **stretches** them, and by [5.2](05-02-potential-vorticity.md)'s conservation argument, stretching amplifies spin. The result is a **mesocyclone**: a rotating updraft 3 to 10 km across, which is the defining feature of a supercell and the parent of nearly every strong tornado.

**And the tornado is stretching taken to its conclusion.** Concentrate a mesocyclone's rotation from a 3 km radius into a 300 m one and, since vorticity scales inversely with the area enclosed, the spin goes up a hundredfold. That takes $10^{-2}$ to about $1\ \mathrm{s^{-1}}$ — tornado strength. The hard part, and still an open research question, is not making the spin but getting it *down to the ground*, which requires vorticity generated at low levels rather than borrowed from aloft.

## The formal version

**The single-cell life cycle.**

| Stage | Duration | Structure |
|---|---|---|
| Cumulus | 10–15 min | updraft only, cloud growing past its LCL toward the LFC |
| Mature | 15–30 min | updraft *and* downdraft coexist; heaviest rain, lightning, anvil at the EL |
| Dissipating | 10–20 min | downdraft dominant, gust front cuts off inflow, storm decays |

Total 30 to 60 minutes, set not by the CAPE available but by how long it takes the storm's own precipitation to fall through its own updraft.

**Shear thresholds.** The standard discriminator is the magnitude of the vector wind difference between the surface and 6 km — the **deep-layer shear**:

| 0–6 km shear | Storm mode |
|---|---|
| under 10 m s⁻¹ | single cell, pulse storms |
| 10–20 m s⁻¹ | multicell clusters and lines |
| over 20 m s⁻¹ | supercells possible |

**The gust front and the multicell.** A downdraft reaching the ground spreads out as a **cold pool**, and its leading edge — the **gust front** — is a miniature cold front that lifts the warm moist air ahead of it. That lifting can trigger a *new* cell. So a multicell cluster propagates by repeatedly seeding its own successors along the gust front, and the cluster can persist for many hours while each individual cell lives its 40 minutes. The cluster's motion is therefore partly *propagation* (where new cells form) rather than advection, which is why storm motion often departs from the mean wind.

**Mesocyclone generation: tilting and stretching.** Environmental shear of $\Delta U$ over depth $\Delta z$ gives horizontal vorticity

$$\omega_h = \frac{\Delta U}{\Delta z} = \frac{20\ \mathrm{m\,s^{-1}}}{6000\ \mathrm{m}} = 3.3\times10^{-3}\ \mathrm{s^{-1}}.$$

The updraft tilts a fraction of this into the vertical, producing mesocyclone vorticity of order $10^{-2}\ \mathrm{s^{-1}}$ — a hundred times $f$. **The Earth's rotation is irrelevant at this scale**; the spin is borrowed entirely from the environmental shear, which is why supercells can and occasionally do rotate anticyclonically.

Then stretching. Conservation of circulation gives $\zeta \propto 1/A \propto 1/r^2$, so contracting from a 3 km mesocyclone radius to a 300 m tornado radius amplifies by

$$\left(\frac{3000}{300}\right)^2 = 100 \qquad\Longrightarrow\qquad \zeta \approx 10^{-2}\times100 = 1\ \mathrm{s^{-1}}.$$

The implied tangential wind at 300 m radius, taking $\zeta \approx 2V/r$, is

$$V = \frac{\zeta r}{2} = \frac{1 \times 300}{2} = 150\ \mathrm{m\,s^{-1}},$$

which is EF5 intensity. The arithmetic works; what it does not explain is *why only a small fraction of mesocyclones produce tornadoes*, which turns on the availability of near-ground vorticity in the rear-flank downdraft — an active research problem.

**Storm-relative helicity.** Because what matters is shear *as the storm experiences it*, the operational parameter is the storm-relative helicity, essentially the shear projected onto the storm-relative wind through the lowest 1 to 3 km. Values above roughly $150\ \mathrm{m^2\,s^{-2}}$ favour mesocyclones and above $300$ favour strong tornadoes. It is computed from the **hodograph** ([2.5](02-05-skew-t-log-p-diagram.md)): a long, curved hodograph means large helicity.

**Squall lines, bow echoes and derechos.** When many cells organize along a single gust front, the result is a **squall line** — a band of convection tens to hundreds of kilometres long, with a leading convective edge and a trailing stratiform region. If the cold pool becomes strong enough to surge ahead in the middle, the line bows forward into a **bow echo**, and the rear-inflow jet behind it can bring damaging straight-line winds to the surface. A family of bow echoes producing a swath of wind damage more than 400 km long is a **derecho**.

**Downbursts.** Not all severe wind is rotational. Rain falling into a dry sub-cloud layer evaporates, cooling the air, which accelerates downward and spreads out violently on impact. The [2.5](02-05-skew-t-log-p-diagram.md) "inverted-V" sounding — dry below, moist aloft, steep low-level lapse rates — is the signature. A **microburst** (under 4 km across) produces a headwind-then-tailwind shift that has caused multiple airliner crashes, and is the reason terminal Doppler radars exist.

## Picture

![Left, a thunderstorm with no environmental shear: a vertical tower whose precipitation falls straight back down through its own updraft, undercutting the inflow and killing the storm; right, the same storm in strong shear, tilted downshear so that the precipitation falls out beside the updraft, allowing a steady-state supercell, with shear arrows increasing with height alongside](assets/06-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — from shear to mesocyclone to tornado).** A sounding has a surface wind of 5 m s⁻¹ and a 6 km wind of 30 m s⁻¹ in a different direction, with a vector difference of 28 m s⁻¹. (a) Classify the expected storm mode. (b) Compute the environmental horizontal vorticity. (c) If a mesocyclone of radius 4 km and $\zeta = 8\times10^{-3}\ \mathrm{s^{-1}}$ contracts to 400 m, find the resulting vorticity and tangential wind.

(a) Deep-layer shear of 28 m s⁻¹ is well above the 20 m s⁻¹ threshold: **supercells are likely**, given sufficient CAPE and a trigger.

(b) $$\omega_h = \frac{28}{6000} = 4.7\times10^{-3}\ \mathrm{s^{-1}},$$

about 45 times the Coriolis parameter at 45°N — confirming that the storm's spin comes from the shear, not the planet.

(c) Contraction by a factor of 10 in radius amplifies vorticity by $10^2 = 100$:

$$\zeta = 8\times10^{-3}\times100 = 0.8\ \mathrm{s^{-1}}, \qquad V = \frac{\zeta r}{2} = \frac{0.8\times400}{2} = 160\ \mathrm{m\,s^{-1}}.$$

*Check.* 160 m s⁻¹ is 360 mph — above the highest wind ever measured in a tornado (about 135 m s⁻¹ by mobile radar in the 1999 Bridge Creek–Moore tornado). The calculation is an upper bound, exactly as $\sqrt{2\,\mathrm{CAPE}}$ was in [2.4](02-04-stability-parcel-theory-cape.md): perfect conservation of circulation with no frictional loss, no mixing, and complete contraction. Real tornadoes achieve a fraction of it — but the fact that the fraction is of order one half, not one thousandth, is what tells you the mechanism is right.

**Example 2 (why you'd care — the four-ingredient forecast).** Why do forecasters check *four* things rather than just CAPE?

Because CAPE alone predicts almost nothing about the outcome. The four ingredients, each from a different lesson:

1. **Moisture** ([2.1](02-01-humidity-variables.md), [2.2](02-02-saturation-moist-adiabatic-lapse-rate.md)) — a high surface dew point gives a low LCL, which matters enormously: tornadoes are far more likely with cloud bases below about 1 km, because a deep dry sub-cloud layer lets the rear-flank downdraft become too cold and negatively buoyant to be lifted into the mesocyclone.
2. **Instability** ([2.4](02-04-stability-parcel-theory-cape.md)) — CAPE sets the updraft's potential strength, and by $w_{\max} = \sqrt{2\,\mathrm{CAPE}}$ the hail size it can suspend.
3. **Lift** ([4.5](04-05-air-masses-fronts-cyclones.md), [5.4](05-04-divergence-vertical-motion-quasi-geostrophic.md)) — something must push a parcel through the CIN to its LFC: a front, a dryline, a gust front, or synoptic ascent.
4. **Shear** (this lesson) — decides whether the released energy makes a 30-minute shower or a 6-hour supercell.

*The point.* CAPE of 4000 with 5 m s⁻¹ of shear gives disorganized pulse storms that produce brief heavy rain and little else. CAPE of 1200 with 30 m s⁻¹ of shear gives long-lived supercells and a tornado watch. **The second is more dangerous than the first**, which is why "CAPE was high" is never by itself a severe-weather forecast, and why the composite indices used operationally always multiply an instability term by a shear term.

## Watch out

- **You might think** a stronger updraft makes a tornado. **Actually** it makes *hail* — updraft speed sets how large a stone can be suspended. Tornadoes need concentrated near-ground **rotation**, which comes from shear and stretching. Storms with enormous CAPE and no shear produce giant hail and no tornadoes at all.
- **You might think** tornadoes spin cyclonically because of the Coriolis force. **Actually** $f$ is a hundred times too small at this scale ([4.1](04-01-pressure-gradient-force-equations-of-motion.md): $\mathrm{Ro} \sim 10^{3}$). They spin cyclonically because their parent mesocyclones do, and mesocyclones inherit their sense from the *curvature of the environmental hodograph*, which climatologically favours cyclonic. Roughly one to two percent of Northern-Hemisphere tornadoes are anticyclonic.
- **You might think** a squall line moves with the wind. **Actually** it **propagates**: new cells form continually on the gust front, so the line advances at the speed of the cold pool's leading edge, which can be considerably faster than the mean wind and in a different direction. Forecasting storm motion by advection alone is a classic error.
- **You might think** the mesocyclone rotation extends to the ground. **Actually** the mid-level mesocyclone typically forms 20 to 60 minutes before any low-level rotation, and most mesocyclones never produce a tornado. The bottleneck is generating and concentrating vorticity in the lowest few hundred metres, and that is why tornado warnings have a false-alarm rate near 70 percent.

## One-liner

> Shear is what turns a thunderstorm from a self-extinguishing cell into a steady rotating machine: it tilts the updraft away from its own rain, and supplies the horizontal vorticity that tilting and stretching turn into a mesocyclone.

## Problems

**P1 (🟢)** A sounding has a surface wind of 8 m s⁻¹ from the south and a 6 km wind of 18 m s⁻¹ from the southwest, with a vector difference of 13 m s⁻¹. (a) Classify the likely storm mode. (b) Compute the environmental horizontal vorticity.

**P2 (🟡)** A mesocyclone of radius 5 km rotates with $\zeta = 6\times10^{-3}\ \mathrm{s^{-1}}$. (a) Compute its tangential wind at the edge. (b) It contracts to 600 m radius, conserving circulation. Find the new vorticity and tangential wind. (c) Compute the ratio of the centrifugal to the Coriolis term at 40°N for the contracted vortex, and state which balance applies.

**P3 (🔴, optional)** A downburst forms when rain evaporates into a dry sub-cloud layer. A parcel at 700 hPa and 5 °C, saturated, descends to the surface at 1000 hPa. (a) If it descended *dry* adiabatically, what would its surface temperature be? Take the 700 hPa level as 3000 m. (b) Instead, enough rain evaporates into it to keep it saturated the whole way, so it follows a moist adiabat with $\Gamma_m \approx 5\ \mathrm{K\,km^{-1}}$. Find its surface temperature. (c) The environment at the surface is 32 °C. Compute the buoyancy in each case and say which produces a damaging downburst.

<details>
<summary>Solutions</summary>

**P1** (a) 13 m s⁻¹ falls in the 10 to 20 m s⁻¹ band: **multicell clusters or lines**, not supercells. Expect organized convection lasting several hours with heavy rain and possibly marginal hail and gusty winds, but rotation is unlikely.

(b) $$\omega_h = \frac{13}{6000} = 2.2\times10^{-3}\ \mathrm{s^{-1}}.$$

*Check.* Still 20 times $f$, so the storm-scale spin budget is dominated by shear rather than planetary rotation even in this modest case — the threshold for *supercells* is not a threshold for shear mattering at all, but for shear being strong enough to keep the updraft and downdraft apart.

**P2** (a) Using $\zeta \approx 2V/r$:

$$V = \frac{\zeta r}{2} = \frac{6\times10^{-3}\times5000}{2} = 15\ \mathrm{m\,s^{-1}}.$$

(b) Contraction from 5000 m to 600 m is a radius ratio of 8.33, so vorticity amplifies by $8.33^2 = 69.4$:

$$\zeta = 6\times10^{-3}\times69.4 = 0.417\ \mathrm{s^{-1}}, \qquad V = \frac{0.417\times600}{2} = 125\ \mathrm{m\,s^{-1}}.$$

(An equivalent and quicker route: conserving circulation $\Gamma = 2\pi rV$ means $V \propto 1/r$, so $V = 15\times8.33 = 125\ \mathrm{m\,s^{-1}}$ directly.)

(c) At 40°N, $f = 9.374\times10^{-5}\ \mathrm{s^{-1}}$:

$$\frac{V^2/r}{fV} = \frac{V}{fr} = \frac{125}{9.374\times10^{-5}\times600} = \frac{125}{0.0562} = 2220.$$

The centrifugal term exceeds Coriolis by a factor of over two thousand, so the **cyclostrophic** balance of [4.3](04-03-geostrophic-gradient-wind.md) applies — pressure gradient against centrifugal force, with rotation entirely negligible. This ratio is the Rossby number, and at $\mathrm{Ro} \approx 2000$ the hemisphere has no say in which way the vortex turns.

**P3** (a) Dry descent from 3000 m warms at $\Gamma_d = 9.77\ \mathrm{K\,km^{-1}}$:

$$T = 5 + 9.77\times3 = 5 + 29.3 = 34.3\ ^\circ\mathrm{C}.$$

(b) Saturated descent warms at only 5 K km⁻¹, because energy is being consumed evaporating rain:

$$T = 5 + 5\times3 = 5 + 15 = 20\ ^\circ\mathrm{C}.$$

(c) Against a 32 °C environment:

*Dry descent:* the parcel arrives at 34.3 °C — **2.3 K warmer** than its surroundings, hence **positively** buoyant. It resists descending; this is the subsidence-inversion case of [2.2](02-02-saturation-moist-adiabatic-lapse-rate.md)'s flashback, and it produces no downburst at all.

*Evaporating descent:* the parcel arrives at 20 °C — **12 K colder** than its surroundings, strongly negatively buoyant, with a downward acceleration of

$$B = g\frac{\Delta T}{T} = 9.81\times\frac{12}{305} = 0.386\ \mathrm{m\,s^{-2}}.$$

Over the 3 km descent, that gives an impact speed of order $\sqrt{2\times0.386\times3000} = 48\ \mathrm{m\,s^{-1}}$ (an upper bound, since the parcel does not stay 12 K cold the whole way). **The evaporating case is the damaging downburst.**

*The general lesson.* Evaporation is what makes downdrafts dangerous, and evaporation needs *dry* air to evaporate into. That is why the inverted-V sounding — with its deep dry sub-cloud layer — is the downburst signature, and why the most dangerous downbursts occur on days that look, from the rainfall totals, entirely unremarkable.

</details>

## Flashback

**From Lesson 2.4 (Stability, parcel theory & CAPE):** A sounding gives $\mathrm{CAPE} = 3200\ \mathrm{J\,kg^{-1}}$ and $\mathrm{CIN} = 60\ \mathrm{J\,kg^{-1}}$. (a) Compute the theoretical maximum updraft and a realistic estimate. (b) What vertical velocity would a parcel need to break the cap unaided? (c) Classify the day.

<details>
<summary>Solution</summary>

(a) $$w_{\max} = \sqrt{2\times3200} = \sqrt{6400} = 80\ \mathrm{m\,s^{-1}},$$

and halving for water loading, entrainment and perturbation pressure gives a realistic **40 m s⁻¹**.

(b) $$w = \sqrt{2\,\mathrm{CIN}} = \sqrt{120} = 11\ \mathrm{m\,s^{-1}}.$$

Boundary-layer thermals reach about 3 m s⁻¹ ([6.1](06-01-atmospheric-boundary-layer.md)), so they cannot break this cap alone — but 60 J kg⁻¹ is a weak lid, easily eroded by a few more degrees of afternoon heating or broken by a front.

(c) CAPE above 2500 with weak CIN: **severe likely, given a trigger**. And connecting to this lesson, a 40 m s⁻¹ updraft can suspend hailstones of 5 cm or more. Whether this day produces tornadoes, however, depends entirely on the shear — which CAPE says nothing about, and which is exactly the point of Example 2.

</details>

## Connections

- **Backward:** the energy is [2.4](02-04-stability-parcel-theory-cape.md)'s CAPE, the sounding shapes are [2.5](02-05-skew-t-log-p-diagram.md)'s, the cloud is [2.6](02-06-cloud-classification.md)'s cumulonimbus, the mixed layer supplying the inflow is [6.1](06-01-atmospheric-boundary-layer.md)'s, and the tilting-and-stretching argument is [5.1](05-01-vorticity-circulation.md) and [5.2](05-02-potential-vorticity.md) applied at a scale where $f$ no longer matters.
- **Forward:** [6.3](06-03-tropical-cyclones-tropics.md) is what happens when organized convection becomes large enough for rotation to matter again; [6.4](06-04-observing-the-atmosphere.md) covers the Doppler radar that detects the mesocyclone and the hook echo.
- **Sideways (fluid dynamics):** the vortex-stretching amplification is the same mechanism that intensifies a bathtub vortex or a smoke ring, and it is the vortex-tube stretching of [`fluid-dynamics` 2.2](../../fluid-dynamics/lessons/02-02-vorticity-circulation.md) — with the tornado being the most violent naturally occurring example on the planet.
