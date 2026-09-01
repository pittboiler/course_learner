# Physical Oceanography · Lesson 5.2: Surface waves, swell and the sea state

> ⏱ ~15 min · Module 5: Waves, tides and the equatorial ocean · Builds on: [fluid-dynamics 4.1](../../fluid-dynamics/lessons/04-01-surface-waves.md), [1.5](01-05-mixed-layer-air-sea-fluxes.md) · Unlocks: [5.3](05-03-tides-equilibrium-dynamical.md)

## Why this matters

The dispersion relation for surface gravity waves belongs to [fluid-dynamics 4.1](../../fluid-dynamics/lessons/04-01-surface-waves.md), which derived it from potential flow with a free surface, along with phase and group velocity. This lesson takes that result and asks what it does in an ocean.

The answer is that it acts as a **spectrometer**. Deep-water waves of different periods travel at different speeds, so a storm that generates a jumble of waves has its output sorted en route: the long ones outrun the short ones, and a beach thousands of kilometres away receives a clean, slowly-rising tone. Walter Munk exploited this in 1963 to track swell across the entire Pacific from storms south of New Zealand to Alaska, reading off the storms' distance and timing from a wave record at a single island. It remains one of the most elegant inferences in the geophysical literature.

The sea state matters for its own sake too — for ships, coasts and offshore structures — and because wave breaking and Stokes drift are a substantial part of how the atmosphere delivers momentum and turbulence to the ocean ([1.5](01-05-mixed-layer-air-sea-fluxes.md)).

## The idea

**Deep-water waves are dispersive, and long ones are fast.** Phase speed goes as the square root of wavelength, or equivalently is proportional to the period: a 20-second swell travels twice as fast as a 10-second one. This is the opposite of shallow-water waves and of sound, where all wavelengths travel together.

**Energy travels at half the phase speed.** Individual crests run forward through a group and vanish at its front, while new ones appear at the back. **The group speed is what determines arrival time**, and forgetting this is the standard factor-of-two error in swell forecasting.

**So a storm's output arrives sorted.** All periods leave together; the longest arrive first. At a distant station the wave period therefore *falls* steadily with time — 18-second swell today, 15-second tomorrow, 12-second the day after. Plot frequency against arrival time and you get a **straight line whose slope is $g/(4\pi D)$**. Measure the slope, get the distance. Extrapolate to zero frequency, get the time the storm blew.

**Locally generated sea is different: it is a broad mess.** Under the wind, waves of all periods coexist and interact, and the sea is confused and steep. Only after the waves leave the generating area does dispersion do its sorting. **"Sea" is what the local wind is making; "swell" is what a distant storm made and dispersion has cleaned up.**

**How big the sea gets depends on three limits.** The wind's *speed* sets the maximum; the *fetch* (the distance over which it blows) and the *duration* (how long) determine whether that maximum is reached. A 20 m s⁻¹ gale over a lake makes small steep waves; the same wind over 1000 km of open ocean makes an 8 m sea.

**And the waves feed back on the ocean beneath.** Breaking injects turbulence into the top few metres; the Stokes drift interacts with the wind-driven shear to produce **Langmuir circulation**, the roll vortices that line up foam into windrows and stir the upper mixed layer far more efficiently than shear alone.

## The formal version

**Dispersion relation** (from [fluid-dynamics 4.1](../../fluid-dynamics/lessons/04-01-surface-waves.md)):

$$\omega^2 = gk\tanh(kH), \qquad \text{deep water } (kH\gg1):\ \ \omega^2 = gk.$$

The deep-water limit holds when the depth exceeds about half a wavelength. Consequences:

$$c_p = \frac{\omega}{k} = \frac{g}{\omega} = \frac{gT}{2\pi}, \qquad c_g = \frac{d\omega}{dk} = \frac{1}{2}c_p = \frac{gT}{4\pi}, \qquad \lambda = \frac{gT^2}{2\pi}.$$

*In words: phase speed is proportional to period, group speed is half of it, and wavelength goes as period squared.* Useful values: $c_p \approx 1.56\,T$ m s⁻¹ and $\lambda \approx 1.56\,T^2$ m.

| $T$ (s) | $\lambda$ (m) | $c_p$ (m s⁻¹) | $c_g$ (m s⁻¹) | Time to cross 5000 km |
|---|---|---|---|---|
| 8 | 100 | 12.5 | 6.24 | 222 h |
| 12 | 225 | 18.7 | 9.37 | 148 h |
| 15 | 351 | 23.4 | 11.7 | 119 h |
| 18 | 506 | 28.1 | 14.1 | 99 h |

**The dispersion line.** Arrival time at distance $D$ for frequency $f = 1/T$:

$$t = \frac{D}{c_g} = \frac{4\pi D}{gT} = \frac{4\pi D}{g}f,$$

$$\boxed{\ f(t) = \frac{g}{4\pi D}\,t\ }$$

*In words: the observed frequency rises linearly with time, at a rate inversely proportional to the distance to the storm.* This is Munk's result and it is exact for a point source in deep water. A single wave record gives $D$ from the slope and the storm's time from the intercept — and, with a directional array, its bearing too, hence a full fix.

**Sea state.** The wave field is described by its energy spectrum $S(f)$, and the practical summary is the **significant wave height**

$$H_s = 4\sqrt{m_0}, \qquad m_0 = \int S(f)\,df,$$

*In words: four times the standard deviation of the surface elevation.* Historically $H_s$ was defined as the mean height of the highest third of waves, and the two definitions agree closely.

For a **fully developed sea** (Pierson–Moskowitz), with $U$ the wind speed at 10 m:

$$H_s \approx \frac{0.21\,U^2}{g}, \qquad f_{\text{peak}} \approx \frac{0.13\,g}{U}.$$

| $U$ (m s⁻¹) | $H_s$ (m) | $T_{\text{peak}}$ (s) | Fetch needed | Duration needed |
|---|---|---|---|---|
| 10 | 2.1 | 7.8 | 234 km | 20 h |
| 15 | 4.8 | 11.8 | 528 km | 30 h |
| 20 | 8.6 | 15.7 | 938 km | 40 h |
| 25 | 13.4 | 19.6 | 1465 km | 51 h |

*In words: the wave height goes as the square of the wind speed, and the fetch needed to reach it grows as the square too.* The fetch and duration entries come from the standard non-dimensional thresholds

$$\frac{gX}{U^2} = 2.3\times10^{4}, \qquad \frac{gt}{U} = 7.15\times10^{4}.$$

If either is not met, the sea is smaller than the table says: **fetch-limited** or **duration-limited**. In that case the significant wave height follows the growth law

$$\frac{gH_s}{U^2} = 0.0016\left(\frac{gX}{U^2}\right)^{1/2},$$

which is consistent with the fully-developed value: substituting $gX/U^2 = 2.3\times10^{4}$ gives $gH_s/U^2 = 0.243$, against Pierson–Moskowitz's $0.21$ — agreement to 15 percent between two independently fitted formulae.

**Individual wave heights.** In a narrow-banded random sea the heights are Rayleigh-distributed, so among $N$ waves the expected maximum is

$$\frac{H_{\max}}{H_s} \approx \sqrt{\frac{\ln N}{2}}.$$

For $N = 1000$ (about three hours of storm waves), $H_{\max}/H_s = 1.86$. A "rogue wave" is conventionally one exceeding $2H_s$, which the Rayleigh distribution says should occur about once in 3000 waves — rare but not extraordinary. The genuinely puzzling observations are the ones far above that, and they involve nonlinear focusing or wave–current interaction (the Agulhas Current, where swell runs against a 2 m s⁻¹ opposing current, is the classic hazard).

**Stokes drift and Langmuir circulation.** Particle orbits in a wave are not quite closed; the net forward drift at the surface is

$$u_s = \omega k a^2 = \frac{4\pi^2 a^2}{T\lambda},$$

with $a$ the amplitude. For $T = 8$ s, $\lambda = 100$ m and $a = 1$ m: $u_s = 4.9\ \mathrm{cm\,s^{-1}}$, roughly 1 percent of a typical wind speed. The interaction of this drift with the wind-driven shear produces the **Craik–Leibovich instability** and hence Langmuir cells: counter-rotating rolls tens of metres across, which are a first-order contributor to mixed-layer deepening and are now routinely parameterized in ocean models.

## Picture

![Swell frequency plotted against hours after a storm 5000 km away. The data lie on a straight blue line rising from about 0.04 Hz at 71 hours to 0.10 Hz at 178 hours. Individual points are marked: 18 second swell arriving at 99 hours, 15 second at 119 hours, 12 second at 148 hours. A dashed extension of the line passes through the origin, where zero frequency corresponds to the moment the storm blew. Annotations note that the slope equals g over 4 pi D, so a longer record locates the storm](assets/05-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — swell arrival and sorting).** A distant storm radiates swell across 5000 km of deep ocean. The ocean is 4000 m deep.

(a) *For $T = 15$ s.*
$$\lambda = \frac{gT^2}{2\pi} = \frac{9.81\times225}{6.2832} = 351\ \mathrm{m}, \quad c_p = \frac{gT}{2\pi} = 23.4\ \mathrm{m\,s^{-1}}, \quad c_g = 11.7\ \mathrm{m\,s^{-1}}.$$
$$t = \frac{5\times10^{6}}{11.7} = 4.27\times10^{5}\ \mathrm{s} = 119\ \mathrm{h} = 4.94\ \mathrm{days}.$$

(b) *Deep-water check.* $\lambda/2 = 176\ \mathrm{m} \ll 4000\ \mathrm{m}$. Comfortably deep; $\tanh(kH) = \tanh(71.5) = 1$ to 60 decimal places.

(c) *The spread from 12 to 18 s.*
$$t(18) = \frac{5\times10^{6}}{14.05} = 98.8\ \mathrm{h}, \qquad t(12) = \frac{5\times10^{6}}{9.37} = 148.3\ \mathrm{h},$$
$$\Delta t = 49.4\ \mathrm{h} \approx 2\ \text{days}.$$

(d) *Why the long ones come first.* Group speed is proportional to period, so an 18-second wave travels 50 percent faster than a 12-second one and arrives two days earlier over 5000 km. **The ocean sorts the storm's output by period**, which is why distant swell arrives as a slowly-rising tone rather than as a burst.

**Example 2 (why you'd care — locating a storm you never saw).** A wave recorder on a Pacific island observes the peak swell frequency rising steadily: $0.050\ \mathrm{Hz}$ on day 4.0, $0.075\ \mathrm{Hz}$ on day 6.5, both measured from an arbitrary zero. Find the distance to the storm and when it blew.

*The slope.*
$$\frac{df}{dt} = \frac{0.075-0.050}{(6.5-4.0)\times86\,400} = \frac{0.025}{2.16\times10^{5}} = 1.157\times10^{-7}\ \mathrm{Hz\,s^{-1}}.$$

*The distance.* From $f = gt/(4\pi D)$, the slope is $g/(4\pi D)$:
$$D = \frac{g}{4\pi\,(df/dt)} = \frac{9.81}{4\pi\times1.157\times10^{-7}} = \frac{9.81}{1.454\times10^{-6}} = 6.75\times10^{6}\ \mathrm{m} = 6750\ \mathrm{km}.$$

*When it blew.* Extrapolate to $f = 0$:
$$t_0 = 4.0 - \frac{0.050}{1.157\times10^{-7}\times86\,400} = 4.0 - \frac{0.050}{9.996\times10^{-3}} = 4.0 - 5.00 = -1.0\ \mathrm{days}.$$

The storm blew **one day before the arbitrary zero**, i.e. five days before the first observation.

*Checking it.* The 0.050 Hz (20 s) swell should have taken $D/c_g = 6.75\times10^{6}/15.6 = 4.33\times10^{5}\ \mathrm{s} = 5.0$ days, and it arrived 5.0 days after the inferred storm time. $\checkmark$

*The point.* **Dispersion turns a single-point time series into a remote-sensing instrument.** No satellite, no ship, no second station: a pressure sensor on one island reports where a storm was and when, thousands of kilometres away. Munk's group did exactly this in 1963, tracking swell from storms near Antarctica to Alaska — a propagation distance approaching half the Earth's circumference — and finding the waves lost remarkably little energy on the way, which was itself a significant result about how weakly deep-water swell dissipates.

The general structure is worth naming: **whenever a medium is dispersive and the source is impulsive, the arrival-time-versus-frequency relation encodes the propagation distance.** Seismology uses the same logic on surface waves to locate earthquakes, and pulsar dispersion measures use it on the interstellar medium to get distances to pulsars. Same equation, different $g$.

## Watch out

- **You might think** swell arrives at the phase speed. **Actually** energy travels at the group speed, half the phase speed in deep water. Using $c_p$ halves every arrival time and doubles every inferred distance.
- **You might think** a longer fetch always means bigger waves. **Actually** once the sea is fully developed, additional fetch does nothing — the waves have reached the maximum the wind speed permits, at which point they travel nearly as fast as the wind and stop extracting energy from it. That saturation is what Pierson–Moskowitz describes.
- **You might think** significant wave height is the height of a typical wave. **Actually** it is about the mean of the *highest third*, so most waves are smaller and about one in a thousand is nearly twice as big. A forecast of $H_s = 4$ m implies individual waves of 7 to 8 m, and mariners who read $H_s$ as a maximum have been badly surprised.

## One-liner

> Deep-water waves travel at a speed proportional to their period, so a storm's output arrives sorted — longest first — and the straight line of frequency against arrival time gives the distance from its slope and the storm's timing from its intercept, turning one wave recorder into an instrument that sees across an ocean.

## Problems

**P1 (🟢)** Swell of period 14 s crosses 3500 km of deep ocean. (a) Compute the wavelength, phase speed and group speed. (b) Compute the arrival time in hours. (c) Verify that a 3000 m deep ocean satisfies the deep-water condition.

**P2 (🟡)** A wave recorder sees the peak swell period fall from 20 s to 13 s over 76 hours. (a) Convert to frequencies and compute $df/dt$. (b) Compute the distance to the storm. (c) Compute the arrival time of the 20 s swell after the storm, and hence how long before the first observation the storm occurred. (d) The record shows $H_s$ falling from 3.0 m to 1.2 m over the same period. Comment on whether that is consistent with dispersive spreading alone.

**P3 (🔴, optional)** A 22 m s⁻¹ wind blows for 30 hours over a fetch of 600 km. Use the thresholds and growth law given above. (a) Compute the fully developed $H_s$ and peak period. (b) Compute the fetch and duration required for full development, and state which conditions are not met. (c) Compute the fetch-limited $H_s$. (d) Convert the available duration into an equivalent non-dimensional fetch using $\dfrac{gt}{U} = 68.8\left(\dfrac{gX}{U^2}\right)^{2/3}$, and hence identify which limit actually binds. (e) Compute $H_{\max}$ expected over the 30 hours, taking a mean period of 10 s.

<details>
<summary>Solutions</summary>

**P1** (a) $$\lambda = \frac{gT^2}{2\pi} = \frac{9.81\times196}{6.2832} = 306\ \mathrm{m},$$
$$c_p = \frac{gT}{2\pi} = \frac{9.81\times14}{6.2832} = 21.9\ \mathrm{m\,s^{-1}}, \qquad c_g = 10.9\ \mathrm{m\,s^{-1}}.$$

(b) $$t = \frac{3.5\times10^{6}}{10.9} = 3.21\times10^{5}\ \mathrm{s} = 89.1\ \mathrm{h} = 3.7\ \mathrm{days}.$$

(c) Deep water requires $H > \lambda/2 = 153\ \mathrm{m}$. With $H = 3000$ m, $kH = (2\pi/306)\times3000 = 61.6$ and $\tanh(61.6) = 1$ to machine precision. Comfortably deep. $\checkmark$

**P2** (a) $$f_1 = \frac{1}{20} = 0.0500\ \mathrm{Hz}, \qquad f_2 = \frac{1}{13} = 0.0769\ \mathrm{Hz},$$
$$\frac{df}{dt} = \frac{0.0769 - 0.0500}{76\times3600} = \frac{0.0269}{2.736\times10^{5}} = 9.84\times10^{-8}\ \mathrm{Hz\,s^{-1}}.$$

(b) $$D = \frac{g}{4\pi\,(df/dt)} = \frac{9.81}{4\pi\times9.84\times10^{-8}} = \frac{9.81}{1.2365\times10^{-6}} = 7.93\times10^{6}\ \mathrm{m} = 7930\ \mathrm{km}.$$

(c) The 20 s swell has $c_g = gT/(4\pi) = 9.81\times20/12.566 = 15.61\ \mathrm{m\,s^{-1}}$:

$$t = \frac{7.93\times10^{6}}{15.61} = 5.08\times10^{5}\ \mathrm{s} = 141\ \mathrm{h} = 5.9\ \mathrm{days}.$$

So the storm blew about **5.9 days before the first observation**.

(d) The energy in a dispersing swell train spreads in two ways: **radially**, so energy density falls as $1/D$ for a point source (or as $1/\sqrt{D}$ in amplitude), and **along the propagation direction**, as the group spreads in time. Over the 76 hours of the record, $D$ is fixed — the station has not moved — so radial spreading cannot explain a change *during* the record.

What can: the storm's spectrum was not flat. The peak of the source spectrum passes the station at one moment; frequencies far from the peak carry less energy and arrive earlier and later. So $H_s$ should rise to a maximum as the spectral peak arrives and fall afterwards. A monotonic fall from 3.0 to 1.2 m over 76 hours is consistent with the station having caught the tail of the arrival, after the peak.

A useful cross-check: $H_s \propto \sqrt{E}$, so a factor of 2.5 in height is a factor of 6.25 in energy. That is a large but unremarkable fraction of a storm spectrum's width. **Dispersion alone does not set the amplitude envelope — the source spectrum does — so an amplitude record constrains the storm's severity while the frequency record constrains its position.** The two are independent pieces of information, which is why Munk's method used both.

**P3** (a) $$H_s = \frac{0.21\times22^2}{9.81} = \frac{101.6}{9.81} = 10.4\ \mathrm{m},$$
$$f_{\text{peak}} = \frac{0.13\times9.81}{22} = 0.0580\ \mathrm{Hz} \;\Longrightarrow\; T_{\text{peak}} = 17.3\ \mathrm{s}.$$

(b) $$X_{\text{req}} = \frac{2.3\times10^{4}U^2}{g} = \frac{2.3\times10^{4}\times484}{9.81} = 1.135\times10^{6}\ \mathrm{m} = 1135\ \mathrm{km},$$
$$t_{\text{req}} = \frac{7.15\times10^{4}U}{g} = \frac{7.15\times10^{4}\times22}{9.81} = 1.603\times10^{5}\ \mathrm{s} = 44.5\ \mathrm{h}.$$

Available: 600 km against 1135 km, and 30 h against 44.5 h. **Neither condition is met** — the sea is not fully developed, and both fetch and duration are candidates for the binding limit.

(c) $$\frac{gX}{U^2} = \frac{9.81\times6\times10^{5}}{484} = 1.216\times10^{4},$$
$$\frac{gH_s}{U^2} = 0.0016\left(1.216\times10^{4}\right)^{1/2} = 0.0016\times110.3 = 0.1764,$$
$$H_s = \frac{0.1764\times484}{9.81} = 8.71\ \mathrm{m}.$$

(d) $$\frac{gt}{U} = \frac{9.81\times30\times3600}{22} = 4.816\times10^{4},$$
$$\left(\frac{gX}{U^2}\right)_{\text{equiv}} = \left(\frac{4.816\times10^{4}}{68.8}\right)^{3/2} = (700.0)^{3/2} = 1.852\times10^{4}.$$

The duration is equivalent to a fetch of $1.85\times10^{4}$ in non-dimensional units, against an actual fetch of $1.22\times10^{4}$. The **smaller** of the two governs, so **fetch binds** — the wind has blown long enough to develop whatever the 600 km of fetch permits, and the answer is (c)'s 8.71 m.

Against the fully-developed 10.4 m, that is 16 percent smaller. The penalty is modest because $H_s \propto X^{1/4}$ once fetch-limited: halving the fetch again would cost only another 16 percent, and reaching full development would require nearly doubling it.

(e) Over 30 hours at a mean period of 10 s:

$$N = \frac{30\times3600}{10} = 10\,800\ \text{waves},$$
$$\frac{H_{\max}}{H_s} = \sqrt{\frac{\ln 10\,800}{2}} = \sqrt{\frac{9.287}{2}} = 2.155,$$
$$H_{\max} = 2.155\times8.71 = 18.8\ \mathrm{m}.$$

**Nearly nineteen metres**, from a "significant" wave height of under nine. This is the practical content of the Rayleigh distribution and the reason offshore structures are designed against $H_{\max}$ over a design storm rather than against $H_s$. Note also how weakly $H_{\max}/H_s$ depends on $N$ — it goes as $\sqrt{\ln N}$, so a storm ten times longer raises the ratio only from 2.16 to 2.40. **The extreme is set by the sea state, not by patience.**

</details>

## Flashback

**From Lesson 4.5 (Meridional heat transport and Bjerknes compensation):** An overturning cell carries $Q = 14\ \mathrm{Sv}$ northward at $\theta_u = 17\,^\circ\mathrm{C}$ and returns it at $\theta_l = 2.5\,^\circ\mathrm{C}$, with $\rho_0c_p = 4.10\times10^{6}\ \mathrm{J\,m^{-3}\,K^{-1}}$. (a) Compute the heat transport in PW. (b) The cell weakens to 9 Sv. Compute the change. (c) With 85 percent Bjerknes compensation, a receiving region of area $1.6\times10^{13}\ \mathrm{m^2}$ and $\lambda = 1.25\ \mathrm{W\,m^{-2}\,K^{-1}}$, compute the regional cooling.

<details>
<summary>Solution</summary>

(a) $$H = 4.10\times10^{6}\times1.4\times10^{7}\times14.5 = 8.32\times10^{14}\ \mathrm{W} = 0.83\ \mathrm{PW}.$$

(b) $$H_{\text{new}} = 4.10\times10^{6}\times9\times10^{6}\times14.5 = 5.35\times10^{14}\ \mathrm{W} = 0.535\ \mathrm{PW},$$
$$\Delta H = -0.297\ \mathrm{PW}.$$

(c) With 85 percent compensated, the realized deficit is $0.15\times2.97\times10^{14} = 4.46\times10^{13}\ \mathrm{W}$:

$$\Delta F = \frac{4.46\times10^{13}}{1.6\times10^{13}} = 2.79\ \mathrm{W\,m^{-2}}, \qquad \Delta T = -\frac{2.79}{1.25} = -2.2\ \mathrm{K}.$$

A regional cooling of about 2.2 K — substantial, and about a seventh of the 14.8 K the uncompensated calculation would have given ($2.97\times10^{14}/1.6\times10^{13}/1.25 = 14.8$ K).

*Check.* Notice the leverage. The compensation fraction enters as $(1 - c)$, so moving it from 0.85 to 0.90 changes the answer by a third, from 2.2 K to 1.5 K. **The regional response is governed by the small residual of a near-cancellation, so it is far more uncertain than either of the terms being cancelled** — the same structure as the Southern Ocean residual circulation in [4.4](04-04-what-drives-the-overturning.md), and the same warning applies.

</details>

## Connections

- **Backward:** the dispersion relation and the group-velocity result are [fluid-dynamics 4.1](../../fluid-dynamics/lessons/04-01-surface-waves.md)'s; the wave-driven turbulence and Langmuir circulation feed the mixed-layer deepening of [1.5](01-05-mixed-layer-air-sea-fluxes.md).
- **Forward:** [5.3](05-03-tides-equilibrium-dynamical.md) treats waves of a very different kind — forced rather than free, and shallow-water rather than deep — and the contrast between the two dispersion regimes is the reason tides and swell behave so differently.
- **Sideways (signals):** the frequency-versus-arrival-time line is a **chirp**, and reading a distance off its slope is dispersion analysis in exactly the sense used in seismology and radio astronomy. The matched-filter machinery for detecting such a signal in noise is [`signals-systems`](../../signals-systems/syllabus.md)'s, and Munk's swell work is one of the earliest geophysical applications of it.
