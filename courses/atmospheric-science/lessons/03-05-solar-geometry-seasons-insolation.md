# Atmospheric Science · Lesson 3.5: Solar geometry, the seasons & insolation

> ⏱ ~15 min · Module 3: Radiation & the atmospheric energy budget · Builds on: [3.1 Solar & terrestrial radiation](03-01-solar-terrestrial-radiation.md), [3.2 The greenhouse effect & the global energy budget](03-02-greenhouse-effect-energy-budget.md) · Unlocks: 4.4 (general circulation), 6.5 (predictability)

## Why this matters

Everything Module 3 has done so far is a *global mean*: 340 W m⁻² arriving, 240 absorbed, one number for the whole planet. But the atmosphere does not respond to a global mean — it responds to the fact that the tropics get far more sunlight than the poles, and that the imbalance swings with the seasons. That geographic distribution is what creates the temperature gradient that drives the entire general circulation of [4.4](04-04-thermal-wind-general-circulation.md), and it is set by nothing more exotic than spherical geometry and a 23.4-degree tilt. This lesson computes it. It also settles two questions people get wrong for their whole lives: why we have seasons, and which pole gets more midsummer sun.

## The idea

**Two effects, one geometry.** How much sunlight a patch of ground receives depends on two things, and both come from the same angle.

*Beam spreading.* Sunlight arriving at a **zenith angle** $\theta$ — the angle from straight overhead — spreads a fixed beam over an area larger by $1/\cos\theta$. So the flux on the ground carries a factor $\cos\theta$. This is the whole reason the poles are cold: the same beam is smeared over more ground.

*Day length.* The Sun is above the horizon for a fraction of the day that also depends on latitude and season. Near a summer pole that fraction is 1 — the Sun never sets.

**Why the seasons happen.** Earth's spin axis is tilted 23.4 degrees from the perpendicular to its orbit, and — crucially — that tilt **points the same way in space all year**. So for half the year the northern hemisphere leans toward the Sun and gets both a higher noon Sun and longer days; six months later it leans away. The tilt does not change; our position around it does.

**It is not the distance.** Earth's orbit is slightly elliptical, and we are *closest* to the Sun in early January — during northern winter. The perihelion-to-aphelion flux difference is 6.9 percent, which is not nothing, but it works *against* northern seasons rather than causing them. If distance drove the seasons, the two hemispheres would have summer simultaneously. They do not.

**The surprise.** Combine the two effects at the June solstice and the North Pole receives **more** daily energy than the equator — 541 against 397 W m⁻². The Sun is low there (bad), but it never sets (very good), and 24 hours of low sun beats 12 hours of high sun. The pole is not cold in midsummer because it lacks sunlight; it is cold because it is white and reflects most of it away, and because it spends the other half of the year in darkness.

## The formal version

**Declination.** The **solar declination** $\delta$ is the latitude at which the Sun is directly overhead at noon. It varies through the year as

$$\delta \approx 23.44^\circ \times \sin\!\left(\text{orbital phase}\right),$$

running from $+23.44^\circ$ at the June solstice through $0$ at the equinoxes to $-23.44^\circ$ in December. The tropics of Cancer and Capricorn are the lines $\phi = \pm23.44^\circ$ — the extremes of the overhead Sun.

**Zenith angle.** For latitude $\phi$, declination $\delta$ and **hour angle** $h$ (the Sun's angular distance from local noon, 15 degrees per hour),

$$\boxed{\ \cos\theta = \sin\phi\sin\delta + \cos\phi\cos\delta\cos h\ }$$

*In words: the cosine of the zenith angle is a sum of a season term and a time-of-day term.* At local noon $h = 0$ and this reduces to $\cos\theta = \cos(\phi - \delta)$, so the noon Sun is overhead exactly when $\phi = \delta$.

**Day length.** Sunrise and sunset are where $\theta = 90^\circ$, so $\cos\theta = 0$:

$$\cos h_0 = -\tan\phi\tan\delta,$$

with the **half-day angle** $h_0$ giving a day length of $2h_0/15^\circ$ hours. Three cases matter:

- $|\tan\phi\tan\delta| < 1$: an ordinary sunrise and sunset.
- $-\tan\phi\tan\delta \le -1$: $h_0 = 180^\circ$ — the Sun never sets. **Midnight sun.**
- $-\tan\phi\tan\delta \ge 1$: $h_0 = 0$ — the Sun never rises. **Polar night.**

The boundary is $\tan\phi\tan\delta = 1$, which at $\delta = 23.44^\circ$ gives $\phi = 90^\circ - 23.44^\circ = 66.56^\circ$ — **the Arctic Circle, derived**. At the equinox $\delta = 0$, so $\cos h_0 = 0$ and $h_0 = 90^\circ$ at *every* latitude: twelve hours of daylight everywhere, which is what "equinox" means.

**Daily insolation.** Integrate $S\cos\theta$ over the daylight hours and divide by the full day:

$$\boxed{\ Q_{\text{day}} = \frac{S}{\pi}\left(\frac{\bar d}{d}\right)^{2}\Big[h_0\sin\phi\sin\delta + \cos\phi\cos\delta\sin h_0\Big]\ }$$

with $h_0$ in radians and $(\bar d/d)^2$ the orbital-distance correction (0.967 at aphelion in early July, 1.034 at perihelion in early January). Evaluated at the June solstice, ignoring the distance factor:

| Latitude | Day length | $Q_{\text{day}}$ (W m⁻²) |
|---|---|---|
| 90°N | 24 h | 541 |
| 66.6°N | 24 h | 497 |
| 45°N | 15.4 h | 499 |
| 0° | 12.0 h | 397 |
| 45°S | 8.6 h | 87 |
| 90°S | 0 h | 0 |

*In words: at the solstice the whole summer hemisphere from 40 degrees poleward receives roughly the same daily energy, and all of it beats the equator.*

**The distance correction, and an asymmetry.** Northern summer happens near aphelion, so multiply the North Pole's 541 by 0.967 to get **524** W m⁻². Southern summer happens near perihelion, so the South Pole's midsummer value is $541 \times 1.034 = $ **560** W m⁻². Antarctica receives about 7 percent more midsummer sunlight than the Arctic. (This asymmetry, and its slow drift as the orbit precesses over tens of thousands of years, is the seed of the Milankovitch theory of ice ages, which [`climate-science`](../../climate-science/syllabus.md) develops.)

**The annual mean, and why it matters here.** Averaged over a year, insolation falls from about 420 W m⁻² at the equator to about 180 W m⁻² at the poles — a ratio near 2.4. But the *outgoing* longwave radiation of [3.2](03-02-greenhouse-effect-energy-budget.md) is far more uniform, because the atmosphere and ocean move heat poleward. The result is a **surplus** between roughly 38°N and 38°S and a **deficit** poleward of that. That imbalance is the engine of Module 4: the Hadley cell and the mid-latitude eddies exist to carry the surplus to where the deficit is.

## Picture

![Left, Earth at the June solstice with sunlight arriving from the left, the spin axis tilted 23.4 degrees so the north pole leans toward the sun, the terminator dividing day from night, and the Arctic Circle drawn as a chord that just touches the terminator so the whole cap has 24-hour sun; right, daily mean insolation plotted against latitude for the June solstice, the equinox and the December solstice, showing the June curve peaking at the north pole above its equatorial value](assets/03-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — day length and noon sun).** Find the day length and the noon solar zenith angle at 45°N on the June solstice ($\delta = 23.44^\circ$).

*Day length.* $$\cos h_0 = -\tan45^\circ\tan23.44^\circ = -(1)(0.4335) = -0.4335,$$
$$h_0 = \arccos(-0.4335) = 115.7^\circ, \qquad \text{day length} = \frac{2 \times 115.7}{15} = 15.4\ \mathrm{hours}.$$

*Noon zenith angle.* At $h = 0$, $\cos\theta = \cos(\phi - \delta) = \cos(45 - 23.44)^\circ = \cos21.56^\circ = 0.9299$, so $\theta = 21.6^\circ$ — the Sun is 68.4 degrees above the horizon.

*Check.* Repeat at the December solstice ($\delta = -23.44^\circ$): $\cos h_0 = -(1)(-0.4335) = +0.4335$, giving $h_0 = 64.3^\circ$ and a day length of 8.6 hours; and the noon zenith angle becomes $\cos(45+23.44)^\circ = 68.4^\circ$ from the vertical, only 21.6 degrees above the horizon. Both effects reverse together — that is the season.

**Example 2 (why you'd care — the polar summer paradox, resolved).** At the June solstice, the North Pole gets 541 W m⁻² per day and the equator 397. So why is the pole at −5 °C and the equator at 30 °C?

Three reasons, and each is a result from earlier in the course.

1. **Albedo.** Snow and ice reflect 0.6 to 0.9 of incoming sunlight against the ocean's 0.06. Of the pole's 541 W m⁻², perhaps 80 is absorbed; of the equator's 397, perhaps 370. The *absorbed* flux ratio is the reverse of the incident one, and by [3.1](03-01-solar-terrestrial-radiation.md)'s Example 2 albedo is a powerful lever.
2. **The rest of the year.** The pole receives *zero* for six months, so its annual mean is 180 W m⁻² against the equator's 420. A surface's temperature reflects its accumulated budget, not one day's, and the ice caps carry an enormous thermal memory.
3. **Melting, not warming.** Much of the absorbed energy in polar summer goes into the latent heat of melting ice rather than raising temperature — a phase change at constant temperature, exactly the bookkeeping of [2.2](02-02-saturation-moist-adiabatic-lapse-rate.md). The surface is pinned near 0 °C while the ice melts.

*The general point.* Incident sunlight is only the first term. Absorbed sunlight, the annual integral, and where the energy goes once absorbed all intervene — which is precisely why [3.2](03-02-greenhouse-effect-energy-budget.md) needed a full budget rather than just an input.

## Watch out

- **You might think** seasons come from Earth's varying distance from the Sun. **Actually** we are nearest in January, during northern winter. The distance effect is real (6.9 percent in flux) but small, and it is *the same sign in both hemispheres*, so it cannot explain opposite seasons. Tilt can, and does.
- **You might think** the Arctic Circle's position is a cartographic convention. **Actually** it is exactly $90^\circ - 23.44^\circ$, the latitude at which $\tan\phi\tan\delta = 1$ at the solstice — the boundary of the midnight sun, derived not decreed. It moves as Earth's obliquity varies over 41,000-year cycles.
- **You might think** the longest day is the hottest day. **Actually** peak temperature lags peak insolation by four to eight weeks, because the surface keeps accumulating heat as long as input exceeds output. The same lag makes the afternoon warmer than noon. Insolation sets the *forcing*, thermal inertia sets the *response*.
- **You might think** the two hemispheres' seasons are mirror images. **Actually** the perihelion timing makes southern summer 7 percent more intense and southern winter correspondingly harsher, and the far greater ocean fraction in the south damps the response. The asymmetry is small but is the mechanism behind ice ages.

## One-liner

> A 23.4-degree tilt that stays pointed the same way all year sets both the noon sun angle and the day length — and their product makes the summer pole the sunniest place on the planet.

## Problems

**P1 (🟢)** Compute the day length at 60°N (a) on the June solstice and (b) at the equinox. Take $\delta = 23.44^\circ$ and $0$ respectively.

**P2 (🟡)** (a) Find the latitude at which the Sun is directly overhead at noon on the December solstice, and name the line. (b) At that latitude on that date, compute the day length. (c) Explain in one sentence why the day length there is *not* 24 hours even though the noon Sun is directly overhead.

**P3 (🔴, optional)** Use the daily-insolation formula to verify the polar surprise. (a) Evaluate $Q_{\text{day}}$ at the North Pole ($\phi = 90^\circ$) on the June solstice, showing that the formula collapses to $Q = S\sin\delta$ and explaining why. (b) Evaluate it at the equator on the same date. (c) Compute the ratio, then apply albedos of 0.75 (polar ice) and 0.06 (tropical ocean) and recompute the ratio of *absorbed* flux. Comment.

<details>
<summary>Solutions</summary>

**P1** (a) $$\cos h_0 = -\tan60^\circ\tan23.44^\circ = -(1.7321)(0.4335) = -0.7509,$$
$$h_0 = \arccos(-0.7509) = 138.7^\circ, \qquad \text{day length} = \frac{2\times138.7}{15} = 18.5\ \mathrm{hours}.$$

(b) At the equinox $\delta = 0$, so $\cos h_0 = -\tan60^\circ \times 0 = 0$, giving $h_0 = 90^\circ$ and a day length of exactly **12 hours**.

*Check.* The equinox answer is independent of $\phi$ — the $\tan\delta$ factor kills the latitude dependence — which is the defining property of an equinox and a useful sanity test on the formula.

**P2** (a) The Sun is overhead where $\phi = \delta = -23.44^\circ$, that is **23.44°S**, the **Tropic of Capricorn**.

(b) $$\cos h_0 = -\tan(-23.44^\circ)\tan(-23.44^\circ) = -(0.4335)^2 \times \frac{(-1)(-1)}{1} = -0.1879,$$

being careful with signs: $\tan\phi = \tan(-23.44^\circ) = -0.4335$ and $\tan\delta = -0.4335$, so $-\tan\phi\tan\delta = -(-0.4335)(-0.4335) = -0.1879$. Then

$$h_0 = \arccos(-0.1879) = 100.8^\circ, \qquad \text{day length} = \frac{2\times100.8}{15} = 13.4\ \mathrm{hours}.$$

(c) Because the two effects are **independent**: the noon Sun being overhead is a statement about the *zenith angle at one instant*, while day length is set by how much of the diurnal circle lies above the horizon. A place can have the Sun straight overhead at noon and still have a nearly ordinary 13-hour day. Only much closer to the pole does the whole circle clear the horizon.

**P3** (a) At $\phi = 90^\circ$: $\cos\phi = 0$, so the second term vanishes entirely. And $\tan\phi \to \infty$, so $\cos h_0 = -\infty$, clipped to $h_0 = \pi$ (the Sun never sets). The formula becomes

$$Q = \frac{S}{\pi}\big[\pi \times 1 \times \sin\delta + 0\big] = S\sin\delta.$$

*Why:* at the pole the Sun circles the horizon at a *constant* elevation $\delta$ all day long, so $\cos\theta = \sin\delta$ never changes and the daily mean is just $S\sin\delta$. Evaluating: $1361 \times \sin23.44^\circ = 1361 \times 0.3977 = 541\ \mathrm{W\,m^{-2}}$.

(b) At the equator: $\sin\phi = 0$ kills the first term, $\cos\phi = 1$, and $\cos h_0 = -\tan0\tan\delta = 0$ so $h_0 = \pi/2$ and $\sin h_0 = 1$:

$$Q = \frac{S}{\pi}\big[0 + 1 \times \cos23.44^\circ \times 1\big] = \frac{1361 \times 0.9175}{\pi} = \frac{1248.7}{3.1416} = 397\ \mathrm{W\,m^{-2}}.$$

(c) Incident ratio: $541/397 = 1.36$ — the pole gets 36 percent *more*.

Absorbed: pole $541 \times (1-0.75) = 135\ \mathrm{W\,m^{-2}}$; equator $397 \times (1-0.06) = 373\ \mathrm{W\,m^{-2}}$. Ratio $135/373 = 0.36$ — the pole now absorbs less than *half* what the tropics do.

*Comment.* Albedo alone flips a 36 percent surplus into a 64 percent deficit, a swing of a factor of 3.8. This is the ice–albedo feedback in its rawest form, and it explains why polar climate is so unstable: melt the ice and the same sunlight suddenly delivers three or four times the absorbed energy, which melts more ice. It also explains why the surprise of part (a) does not translate into a warm pole — incident flux is simply the wrong quantity to reason about when the surface reflectivity varies this much.

</details>

## Flashback

**From Lesson 3.2 (The greenhouse effect & the global energy budget):** From the budget table, the surface emits 398 W m⁻² of longwave radiation and receives 342 W m⁻² of back radiation, 161 W m⁻² of absorbed sunlight, and loses 84 to evaporation and 20 to thermals. (a) Verify that the surface is close to balance. (b) State which single number in the budget is the direct evidence for the greenhouse effect, and why.

<details>
<summary>Solution</summary>

(a) In: $161 + 342 = 503\ \mathrm{W\,m^{-2}}$. Out: $398 + 84 + 20 = 502\ \mathrm{W\,m^{-2}}$. The residual is about $1\ \mathrm{W\,m^{-2}}$ — not rounding error, but the measured planetary energy imbalance, which is currently going into the ocean.

(b) The **back radiation, 342 W m⁻²**. It is downward longwave radiation emitted by the atmosphere, and it is more than double the 161 W m⁻² of sunlight the surface absorbs directly. Its existence — measurable with a downward-facing pyrgeometer — is the greenhouse effect observed rather than inferred: without an atmosphere opaque in the infrared there would be nothing above the surface emitting longwave downward at all.

*Check.* Consistency with this lesson: 161 W m⁻² of absorbed solar at the surface is a *global annual mean*, which sits well below the 397 W m⁻² of equatorial solstice insolation computed above — as it must, since the global mean divides by the factor of 4 from [3.1](03-01-solar-terrestrial-radiation.md), averages over the seasons, and removes both the reflected fraction and the 79 W m⁻² absorbed by the atmosphere on the way down.

</details>

## Connections

- **Backward:** the solar constant and the factor-of-4 geometry come from [3.1](03-01-solar-terrestrial-radiation.md); this lesson replaces that global average with its actual geographic distribution, and Example 2 leans on [3.2](03-02-greenhouse-effect-energy-budget.md)'s budget and [3.1](03-01-solar-terrestrial-radiation.md)'s albedo sensitivity.
- **Forward:** the equator-to-pole insolation gradient computed here is the forcing behind the thermal wind and the three-cell circulation of [4.4](04-04-thermal-wind-general-circulation.md), and behind the seasonal migration of the ITCZ. The perihelion asymmetry seeds Milankovitch cycles in [`climate-science`](../../climate-science/syllabus.md).
- **Sideways (orbital mechanics):** the $(\bar d/d)^2$ factor and the timing of perihelion are Kepler's second law in action — Earth moves fastest when closest, so northern winter is also the *shortest* season. See [`orbital-mechanics` 1.3](../../orbital-mechanics/lessons/01-03-orbit-equation-conic-sections.md).
