# Planetary Science · Lesson 4.4: Atmospheric circulation

> ⏱ ~15 min · Module 4: Planetary atmospheres · Builds on: [4.1](04-01-atmospheric-structure.md), [4.2](04-02-energy-balance-greenhouse.md) · Unlocks: [4.6](04-06-terrestrial-planets-compared.md), [5.1](05-01-giant-ice-giant-interiors.md), [6.4](06-04-exoplanet-atmospheres.md)

## Why this matters

Every atmosphere is heated more at the equator than at the poles, and every atmosphere responds by moving heat poleward. That much is universal. **What differs — spectacularly — is the machinery each planet uses**, and the sorting parameter is almost entirely the rotation rate.

Venus, turning once every 243 days, has a single circulation cell running from equator to pole and an atmosphere that laps the planet sixty times faster than the ground does. Jupiter, turning once every ten hours, has more than a dozen alternating jets and bands. Earth is in between and has one of each: a tropical Hadley cell, and mid-latitude eddies. **Three regimes, one physical control.**

For exoplanets this is not an aesthetic matter. Most known temperate planets orbit M dwarfs closely enough to be tidally locked, with rotation periods of days to weeks — squarely in Venus's regime, not Earth's. **How heat is redistributed on such a planet decides whether its night side freezes out its atmosphere**, and that is measurable through phase curves ([6.4](06-04-exoplanet-atmospheres.md)).

## The idea

**Direct overturning is the default: hot air rises at the equator, moves poleward aloft, sinks, returns.** That is a **Hadley cell**, and on a non-rotating planet it would extend from equator to pole and be the whole story.

**Rotation breaks it, through angular momentum.** Air moving poleward conserves its angular momentum about the rotation axis. As it approaches the pole its distance from the axis shrinks, so it must speed up — dramatically. By the time equatorial air reaches 30° latitude it is moving eastward at over 100 m/s relative to the ground, and such a strong shear is unstable. **The cell cannot reach the pole; it breaks down.** On Earth it terminates near 30°, which is why the world's subtropical deserts are there — that is where Hadley air descends, warming and drying.

**Beyond the Hadley cell, heat moves by eddies instead.** Mid-latitude weather systems — the cyclones and anticyclones on any weather map — are the poleward heat transport mechanism outside the tropics. They are not a failure of the circulation; they *are* the circulation there.

**Slow rotation removes the constraint.** If a planet turns slowly enough, the angular-momentum problem never bites, and a single Hadley cell reaches the pole. **This is Venus**, and it is why Venus's surface temperature varies by only a few kelvin between equator and pole and between day and night — despite a 243-day day.

**Fast rotation goes the other way: many cells, and banded jets.** On a rapidly rotating planet the natural eddy scale is small compared with the planet, so instead of one overturning circulation you get a *ladder* of alternating east–west jets. The scale that sets their spacing is the **Rhines scale**, where the eddy turnover rate matches the planetary vorticity gradient. **Applied to Jupiter it predicts about 17 jets; Jupiter has about 17 jets.**

**Finally, superrotation, which is genuinely strange.** Venus's atmosphere at cloud level moves at 100 m/s while the solid planet's surface moves at 1.8 m/s. **The atmosphere has more angular momentum per unit mass than the surface it sits on** — which a purely axisymmetric circulation cannot produce, because you cannot spin up the atmosphere without spinning down the planet somewhere else. The resolution requires waves and eddies to transport angular momentum *up-gradient*, from the slow surface into the fast upper atmosphere. Titan superrotates too, and so, on the evidence of their phase curves, do many hot Jupiters.

## The formal version

**Angular momentum constraint on Hadley extent.** Air at the equator, at rest relative to the ground, has specific angular momentum $m = \Omega a^2$. Conserving it at latitude $\phi$, where the distance from the axis is $a\cos\phi$:

$$\Omega a^2 = (u + \Omega a\cos\phi)\,a\cos\phi \quad\Longrightarrow\quad u(\phi) = \Omega a\,\frac{\sin^2\phi}{\cos\phi}.$$

*In words: poleward-moving air must accelerate eastward, without limit as $\phi\to90^\circ$.* At $\phi = 30^\circ$ on Earth, $u = 7.292\times10^{-5}\times6.371\times10^{6}\times(0.25/0.866) = 134\ \mathrm{m\,s^{-1}}$ — a jet, and an unstable one.

**Hadley cell width.** Requiring the thermal-wind shear implied by the pole-equator temperature difference to be consistent with that angular-momentum-conserving jet gives

$$\phi_H \approx \left(\frac{5\,g\,H\,\Delta_h}{3\,\Omega^2a^2}\right)^{1/2},$$

with $\Delta_h = \Delta T_h/T_0$ the fractional equator-to-pole temperature contrast and $H$ a scale height.

$$\boxed{\ \phi_H \propto \frac{1}{\Omega a}\ }$$

*In words: faster rotation confines the direct cell closer to the equator.* For Earth this gives about 30°; for Venus, with $\Omega$ 244 times smaller, the formula returns a value exceeding 90°, meaning the cell reaches the pole.

**The thermal Rossby number.** The cleanest single parameter:

$$Ro_T = \frac{R\,\Delta T_h}{\Omega^2a^2},$$

with $R$ the specific gas constant. *In words: the ratio of the thermal driving to the rotational stiffness.*

| Body | $\Omega^2a^2$ (m$^2$ s$^{-2}$) | Regime |
|---|---|---|
| Venus | 3.3 | $Ro_T\gg1$: single pole-to-pole cell, superrotation |
| Titan | 138 | $Ro_T\gg1$: single cell, superrotation |
| Mars | $5.8\times10^{4}$ | $Ro_T\sim1$: Hadley cell to ~60°, seasonal |
| Earth | $2.16\times10^{5}$ | $Ro_T\ll1$: Hadley to 30°, then eddies |
| Jupiter | $1.58\times10^{8}$ | $Ro_T\lll1$: many jets and bands |

**The Venus–Earth ratio is $6.6\times10^{4}$** — nearly five orders of magnitude in the controlling parameter, which is why the two circulations look nothing alike despite the planets being nearly twins.

**The Rhines scale and banded jets.** On a rotating sphere the planetary vorticity gradient is

$$\beta = \frac{2\Omega\cos\phi}{a},$$

and turbulence organizes into zonal jets at the scale where eddy and Rossby-wave timescales match:

$$L_\beta = \pi\sqrt{\frac{2U}{\beta}}, \qquad N_{\text{jets}} \approx \frac{\pi a}{L_\beta}.$$

| Body | $\beta$ (m$^{-1}$ s$^{-1}$) | $U$ | $L_\beta$ | $N_{\text{jets}}$ | Observed |
|---|---|---|---|---|---|
| Earth | $1.62\times10^{-11}$ | 10 m/s | 3500 km | 5.7 | 2–3 per hemisphere |
| Jupiter | $3.48\times10^{-12}$ | 30 m/s | 13,000 km | 17 | ~17 |
| Saturn | $3.98\times10^{-12}$ | 150 m/s | 27,000 km | 6.7 | ~7 |

**Three planets, one formula, no free parameters.** This is one of the more satisfying quantitative successes in comparative planetology — and note that Saturn's much *faster* jets give it *fewer* of them, which is a genuine prediction the formula gets right.

**Superrotation.** Define the local superrotation index

$$s = \frac{m}{\Omega a^2} - 1,$$

with $m$ the specific angular momentum. Venus's cloud-level atmosphere has $s\approx60$. Producing $s>0$ anywhere requires **eddy transport of angular momentum up its own gradient** — the Gierasch–Rossow–Williams mechanism, in which the mean meridional circulation carries angular momentum poleward and upward while horizontal eddies return it equatorward at altitude, maintaining a fast equatorial jet.

**Long-lived vortices.** On a giant planet, a coherent vortex survives because two-dimensional turbulence transfers energy to *larger* scales rather than dissipating it at small ones, and because $\beta$ suppresses meridional drift. The Great Red Spot has persisted for at least 190 years and possibly 360.

## Picture

![Three globes side by side, each drawn with an equator line and overturning circulation cells sketched as loops with arrows. The first, Venus with its 243-day rotation, has a single enormous cell in each hemisphere running from equator to pole, drawn in coral. The second, Earth with its 24-hour rotation, has three cells per hemisphere in blue with the tropical one reaching only about 30 degrees. The third, Jupiter with its 10-hour rotation, has seven narrow cells per hemisphere. Captions beneath explain that Venus has one Hadley cell pole to pole plus a superrotating atmosphere lapping the planet in four days, sixty times faster than the ground; that Earth's Hadley cell is truncated near 30 degrees with baroclinic eddies and a mid-latitude jet doing the transport beyond it; and that Jupiter has many narrow cells and jets set by the Rhines scale, about 17 predicted and about 17 observed. Along the bottom, the controlling quantity omega squared a squared is listed for Venus at 3.3, Titan at 138, Mars at 58,000, Earth at 216,000 and Jupiter at 158 million, in metres squared per second squared](assets/04-04-fig1.svg)

Five orders of magnitude in one parameter, and every qualitative feature of the circulation follows from where a planet falls on that scale.

## Worked examples

**Example 1 (mechanical — why Venus and Earth differ).** Compute $\Omega^2a^2$ for both and interpret.

*Earth:* $\Omega = 7.292\times10^{-5}\ \mathrm{s^{-1}}$, $a = 6.371\times10^{6}$ m.

$$\Omega^2a^2 = (7.292\times10^{-5})^2\times(6.371\times10^{6})^2 = 5.317\times10^{-9}\times4.059\times10^{13} = 2.158\times10^{5}\ \mathrm{m^2\,s^{-2}}.$$

*Venus:* $\Omega = 2.99\times10^{-7}\ \mathrm{s^{-1}}$, $a = 6.052\times10^{6}$ m.

$$\Omega^2a^2 = (2.99\times10^{-7})^2\times(6.052\times10^{6})^2 = 8.940\times10^{-14}\times3.663\times10^{13} = 3.274\ \mathrm{m^2\,s^{-2}}.$$

$$\frac{2.158\times10^{5}}{3.274} = 6.59\times10^{4}.$$

**Earth's atmosphere is 66,000 times rotationally stiffer than Venus's.**

The consequences follow directly. On Earth the angular-momentum constraint truncates the Hadley cell at 30°, leaving two-thirds of each hemisphere to be served by eddies, and the resulting equator-to-pole temperature contrast is about 40 K. On Venus there is essentially no constraint: a single cell runs to the pole, heat is redistributed with almost perfect efficiency, and **the equator-to-pole surface temperature contrast is under 5 K on a planet with a 243-day day.**

The night side of Venus is as hot as the day side. That is the circulation's doing, plus the enormous thermal inertia of a 92-bar atmosphere.

**Example 2 (why you'd care — will a tidally locked exoplanet freeze out its atmosphere?).** A temperate planet orbits an M dwarf at 0.05 AU, tidally locked with a 10-day period, radius $1.2\,R_\oplus$. Its dayside is permanently illuminated and its nightside permanently dark. Does the atmosphere condense out on the night side?

*The regime.* $\Omega = 2\pi/(10\times86400) = 7.27\times10^{-6}\ \mathrm{s^{-1}}$, $a = 1.2\times6.371\times10^{6} = 7.65\times10^{6}$ m.

$$\Omega^2a^2 = (7.27\times10^{-6})^2\times(7.65\times10^{6})^2 = 5.29\times10^{-11}\times5.85\times10^{13} = 3095\ \mathrm{m^2\,s^{-2}}.$$

Against Earth's $2.16\times10^{5}$, this is **70 times smaller** — well into the slow-rotator regime, closer to Titan than to Earth. So the planet should have a broad, efficient, single-cell circulation, much like Venus's, with strong day-to-night transport.

*The competition.* Freeze-out happens if the radiative cooling timescale of the night side is shorter than the time it takes the circulation to bring warm air across. Roughly,

$$\tau_{\text{rad}} \sim \frac{P\,c_p}{g\,\sigma T^3}, \qquad \tau_{\text{adv}} \sim \frac{a}{U}.$$

For a 1-bar atmosphere at 250 K with $g = 12\ \mathrm{m\,s^{-2}}$:

$$\tau_{\text{rad}} = \frac{10^{5}\times1000}{12\times5.67\times10^{-8}\times(250)^3} = \frac{10^{8}}{12\times5.67\times10^{-8}\times1.5625\times10^{7}} = \frac{10^{8}}{10.63} = 9.4\times10^{6}\ \mathrm{s},$$

about 110 days. With a wind of $30\ \mathrm{m\,s^{-1}}$:

$$\tau_{\text{adv}} = \frac{7.65\times10^{6}}{30} = 2.6\times10^{5}\ \mathrm{s} = 3\ \mathrm{days}.$$

**Advection is 40 times faster than radiative cooling, so heat is redistributed long before the night side can freeze.** The atmosphere survives.

*The caveat that decides real cases.* $\tau_{\text{rad}}\propto P$, so the answer depends entirely on how much atmosphere there is. Repeat with 0.01 bar and $\tau_{\text{rad}}$ falls to about 1 day — now *shorter* than the advection time, and the night side does cool enough to condense CO$_2$ out, which lowers the pressure further, which shortens $\tau_{\text{rad}}$ further. **A thin atmosphere on a tidally locked planet is unstable to collapse; a thick one is safe.** That threshold, of order 0.1 bar for CO$_2$, is one of the sharpest and most testable predictions in the habitability of M-dwarf planets, and phase-curve measurements ([6.4](06-04-exoplanet-atmospheres.md)) test it directly by measuring the day–night temperature contrast.

## Watch out

- **You might think tidal locking means one hot side and one frozen side, but that depends on atmospheric mass.** A thick atmosphere redistributes heat efficiently; only a thin one collapses. The comparison to make is $\tau_{\text{rad}}$ against $\tau_{\text{adv}}$, not "is it locked".
- **You might think slow rotation means a sluggish atmosphere, but Venus's is the fastest-moving atmosphere in the inner solar system relative to its planet.** Slow rotation removes the constraint that *limits* circulation; it does not remove the driving.
- **You might think superrotation is a curiosity, but it violates the naive expectation that the atmosphere cannot exceed the surface's angular momentum** — and explaining it requires eddy transport up-gradient, which is why it took decades to model correctly and is still not fully settled.
- **You might think the Hadley cell's 30° limit is a fact about Earth, but it is a consequence of $\Omega a$** and moves with rotation rate. On Mars, with a similar day but a smaller radius and a large seasonal cycle, the cell can extend past 60° and becomes strongly cross-equatorial at solstice.
- **You might think jets are driven by heating patterns, but on the giants their spacing is set by the Rhines scale**, a turbulence-and-rotation argument that contains no reference to where the heat comes from.

## One-liner

> Heat has to get from equator to pole, and whether it travels in one cell, three, or seventeen jets is decided almost entirely by $\Omega a$.

## Problems

**P1 (🟢)** Titan has $\Omega = 4.56\times10^{-6}\ \mathrm{s^{-1}}$ and $a = 2.575\times10^{6}$ m. (a) Compute $\Omega^2a^2$. (b) Compare with Earth's $2.16\times10^{5}$ and Venus's 3.27. (c) Predict Titan's circulation regime and say whether you expect superrotation.

**P2 (🟡)** Use $u(\phi) = \Omega a\sin^2\phi/\cos\phi$ for angular-momentum-conserving poleward flow. (a) Compute $u$ at 20°, 30° and 45° for Earth. (b) Do the same for Mars ($\Omega = 7.088\times10^{-5}$, $a = 3.39\times10^{6}$ m). (c) Explain why Mars's Hadley cell extends further poleward than Earth's despite a nearly identical day length.

**P3 (🔴, optional)** Use the Rhines scale $L_\beta = \pi\sqrt{2U/\beta}$ with $\beta = 2\Omega\cos\phi/a$ at 45°. (a) Compute $L_\beta$ and $N_{\text{jets}} = \pi a/L_\beta$ for Neptune ($\Omega = 1.083\times10^{-4}\ \mathrm{s^{-1}}$, $a = 2.462\times10^{7}$ m, $U = 300\ \mathrm{m\,s^{-1}}$). (b) Neptune has about 3 broad jets. Compare and comment. (c) Neptune's winds are the fastest in the solar system despite receiving 1/900 of Earth's sunlight; state what this implies about what drives them.

<details>
<summary>Solutions</summary>

**P1** (a) $$\Omega^2a^2 = (4.56\times10^{-6})^2\times(2.575\times10^{6})^2 = 2.079\times10^{-11}\times6.631\times10^{12} = 138\ \mathrm{m^2\,s^{-2}}.$$

(b) Titan's 138 is about **1560 times smaller than Earth's** and about **42 times larger than Venus's** — much nearer the Venus end of the scale, on a logarithmic view.

(c) Titan should be in the slow-rotator regime: a **single broad Hadley cell** extending to high latitudes, with efficient pole-to-pole heat transport and a small horizontal temperature contrast. And **yes, superrotation is expected** — and observed: Titan's stratosphere superrotates at up to $190\ \mathrm{m\,s^{-1}}$ against a surface that moves at $11.7\ \mathrm{m\,s^{-1}}$, confirmed by tracking the Huygens probe's descent drift. Titan and Venus are the two solar-system cases, and they are the two slowest rotators with substantial atmospheres — which is the correlation the theory predicts.

**P2** (a) $\Omega a = 7.292\times10^{-5}\times6.371\times10^{6} = 464.6\ \mathrm{m\,s^{-1}}$.

$$u(20^\circ) = 464.6\times\frac{\sin^2 20}{\cos 20} = 464.6\times\frac{0.11698}{0.93969} = 464.6\times0.12448 = 57.8\ \mathrm{m\,s^{-1}},$$
$$u(30^\circ) = 464.6\times\frac{0.25}{0.86603} = 464.6\times0.28868 = 134.1\ \mathrm{m\,s^{-1}},$$
$$u(45^\circ) = 464.6\times\frac{0.5}{0.70711} = 464.6\times0.70711 = 328.5\ \mathrm{m\,s^{-1}}.$$

(b) $\Omega a = 7.088\times10^{-5}\times3.39\times10^{6} = 240.3\ \mathrm{m\,s^{-1}}$.

$$u(20^\circ) = 240.3\times0.12448 = 29.9\ \mathrm{m\,s^{-1}},$$
$$u(30^\circ) = 240.3\times0.28868 = 69.4\ \mathrm{m\,s^{-1}},$$
$$u(45^\circ) = 240.3\times0.70711 = 169.9\ \mathrm{m\,s^{-1}}.$$

(c) Mars's day is 24.6 hours, essentially Earth's, so $\Omega$ is nearly the same — but its radius is only 53 percent of Earth's, and the jet speed scales as $\Omega a$. **At every latitude the angular-momentum-conserving jet on Mars is about half as fast as Earth's**, so the shear instability that terminates the cell is reached further poleward.

The cell width formula $\phi_H\propto1/(\Omega a)$ makes this quantitative: halving $a$ at fixed $\Omega$ pushes $\phi_H$ from 30° toward 45°, and Mars's much larger seasonal temperature contrast (thin atmosphere, low thermal inertia, eccentric orbit) increases $\Delta_h$ and widens it further. Observed Martian Hadley cells at solstice are strongly cross-equatorial and reach past 60° in the winter hemisphere. **Same rotation rate, different planet size, qualitatively different circulation.**

**P3** (a) $$\beta = \frac{2\Omega\cos 45^\circ}{a} = \frac{2\times1.083\times10^{-4}\times0.70711}{2.462\times10^{7}} = \frac{1.5316\times10^{-4}}{2.462\times10^{7}} = 6.221\times10^{-12}\ \mathrm{m^{-1}\,s^{-1}}.$$

$$L_\beta = \pi\sqrt{\frac{2\times300}{6.221\times10^{-12}}} = \pi\sqrt{9.645\times10^{13}} = \pi\times9.821\times10^{6} = 3.086\times10^{7}\ \mathrm{m}.$$

$$N_{\text{jets}} = \frac{\pi a}{L_\beta} = \frac{\pi\times2.462\times10^{7}}{3.086\times10^{7}} = \frac{7.735\times10^{7}}{3.086\times10^{7}} = 2.5.$$

(b) Predicted about 2.5 jets, observed about 3. **Good agreement**, and the physics is clear: Neptune's very fast winds make $L_\beta$ large (since $L_\beta\propto\sqrt U$), so few jets fit across the planet. Compare Jupiter, whose slower winds and larger radius give 17.

The formula therefore reproduces the full range across the giants — 17 for Jupiter, 7 for Saturn, 3 for Neptune — with no adjustable parameters, using only each planet's rotation, radius and observed wind speed.

(c) Neptune receives about $1.5\ \mathrm{W\,m^{-2}}$ of sunlight against Earth's 1361, and yet has winds reaching $580\ \mathrm{m\,s^{-1}}$. **Solar heating cannot be what drives them.**

Neptune radiates about 2.6 times as much energy as it absorbs — the largest internal-heat excess of any planet — so its circulation is powered from below, by heat left over from formation and by ongoing contraction and possibly by helium or ice separation in the interior ([5.1](05-01-giant-ice-giant-interiors.md)). The relevant comparison is not the solar flux but the *total* flux the atmosphere must transport, and by that measure Neptune is far from starved.

There is a second reason, and it is arguably more important: **wind speed is set by the balance between forcing and damping, not by forcing alone.** Neptune has no surface, so there is no boundary-layer friction; its atmosphere is cold, so radiative damping is weak ($\tau_{\text{rad}}\propto1/T^3$, and 60 K against Earth's 290 K is a factor of 110); and its stratification is strong. A weak but persistent forcing acting against almost no dissipation accumulates into very fast winds. That is why the outer solar system's slowest-heated planets have its fastest winds — an inversion that looks paradoxical until you remember to ask about the sink as well as the source.

</details>

## Flashback

**From Lesson 4.2 (Energy balance and the greenhouse):** A planet orbits at 0.9 AU from a Sun-like star and has albedo 0.25. (a) Compute $S$ and $T_{\text{eq}}$. (b) Its surface is 310 K; compute the greenhouse and the required grey optical depth from $T_s^4 = T_{\text{eq}}^4(1+3\tau/4)$. (c) Compute the absorbed flux and compare with the $310\ \mathrm{W\,m^{-2}}$ runaway limit.

<details>
<summary>Solution</summary>

(a) $$S = \frac{1361}{(0.9)^2} = \frac{1361}{0.81} = 1680\ \mathrm{W\,m^{-2}}.$$

$$T_{\text{eq}} = \left[\frac{1680\times0.75}{4\times5.670\times10^{-8}}\right]^{1/4} = \left[\frac{1260}{2.268\times10^{-7}}\right]^{1/4} = \left[5.556\times10^{9}\right]^{1/4} = 273.1\ \mathrm{K}.$$

(b) Greenhouse $= 310 - 273.1 = 36.9$ K.

$$\left(\frac{310}{273.1}\right)^4 = (1.1351)^4 = 1.660 = 1+\frac{3\tau}{4}, \qquad \tau = \frac{4\times0.660}{3} = 0.880.$$

Almost exactly Earth's 0.85 — a very Earth-like atmosphere.

(c) $$\frac{S(1-A)}{4} = \frac{1680\times0.75}{4} = 315\ \mathrm{W\,m^{-2}}.$$

**Above the $310\ \mathrm{W\,m^{-2}}$ radiation limit** — this planet is over the runaway threshold, marginally but genuinely.

The situation is worth reading carefully. The planet currently has a perfectly ordinary 310 K surface and an Earth-like optical depth, so it looks temperate. But if it has surface liquid water, the moist-greenhouse feedback of [4.2](04-02-energy-balance-greenhouse.md) means no stable equilibrium exists: evaporation raises the opacity, the emitting level rises, and because the outgoing flux is capped near 310 while 315 is coming in, the imbalance never closes. **The ocean boils away.**

Two qualifications keep this from being a verdict. The albedo would not stay at 0.25 — a warming, evaporating planet grows reflective water clouds, and if $A$ rises above 0.262 the absorbed flux drops back under the limit. And if the planet is simply dry, with no ocean to evaporate, the moist feedback never engages and it sits stably at 310 K indefinitely. **The runaway criterion is a statement about planets with oceans**, which is precisely why the habitable zone's inner edge is so sensitive to cloud physics and to whether water is present at all.

</details>

## Connections

- **Backward:** [4.1](04-01-atmospheric-structure.md) supplied the scale height and lapse rate the circulation operates on; [4.2](04-02-energy-balance-greenhouse.md) supplied the equator-to-pole heating contrast that drives it.
- **Forward:** [4.6](04-06-terrestrial-planets-compared.md) uses Venus's single-cell circulation to explain its uniform surface temperature; [5.1](05-01-giant-ice-giant-interiors.md) connects the banded jets to what lies beneath them; [6.4](06-04-exoplanet-atmospheres.md) measures day–night heat redistribution directly through phase curves.
- **Sideways:** Coriolis, geostrophy, thermal wind and Earth's own Hadley circulation are [atmospheric-science 4.2](../../atmospheric-science/lessons/04-02-coriolis-effect.md)–[4.4](../../atmospheric-science/lessons/04-04-thermal-wind-general-circulation.md)'s, which own them; this lesson owns the comparative version where $\Omega a$ spans five orders of magnitude. The inverse energy cascade that sustains the Great Red Spot is two-dimensional turbulence from [`fluid-dynamics`](../../fluid-dynamics/syllabus.md), and the same jet-forming physics organizes the ocean's zonal flows in [`oceanography`](../../oceanography/syllabus.md).
