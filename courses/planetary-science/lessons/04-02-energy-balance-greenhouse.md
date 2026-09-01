# Planetary Science · Lesson 4.2: Energy balance and the greenhouse

> ⏱ ~15 min · Module 4: Planetary atmospheres · Builds on: [3.3](03-03-remote-spectroscopy.md), [4.1](04-01-atmospheric-structure.md) · Unlocks: [4.4](04-04-atmospheric-circulation.md), [4.6](04-06-terrestrial-planets-compared.md), [6.5](06-05-habitability-and-its-limits.md)

## Why this matters

A planet's surface temperature is the first thing anyone wants to know about it and the last thing you can read directly off its distance from its star. Earth's equilibrium temperature is 255 K — eighteen degrees below freezing. The surface is 288 K. **The entire habitability of this planet lives in that 33-kelvin gap**, and the gap is made by the atmosphere.

Venus makes the case unanswerable. It is *closer* to the Sun than Earth, and it absorbs *less* sunlight than Earth does, because its clouds reflect 77 percent of what arrives. Its equilibrium temperature is 227 K, colder than Earth's. Its surface is 737 K. **A 510-kelvin greenhouse, on a planet receiving less absorbed sunlight than we do.** That single comparison is the strongest available demonstration that surface temperature is set by atmospheric opacity rather than by insolation.

## The idea

**Start with the energy budget, which is unavoidable.** In steady state a planet must radiate exactly what it absorbs. It absorbs sunlight over its cross-section $\pi R^2$, reflecting a fraction $A$; it radiates from its whole surface $4\pi R^2$. Setting the two equal defines the **equilibrium temperature** — the temperature a bare rock at that distance would have.

**Then note what the equilibrium temperature is actually the temperature of.** It is the temperature of *whatever layer does the radiating to space*. For an airless body that is the surface. **For a planet with an opaque atmosphere it is some level up in the atmosphere**, and the surface, sitting below that level at the bottom of a lapse rate, is necessarily warmer.

**That is the greenhouse effect, and it is worth stating this way rather than the usual way.** The atmosphere is transparent to incoming visible light and opaque to outgoing infrared, so the "photosphere" for outgoing radiation is high and cold. Whatever temperature that emitting level must have, the surface is warmer by the lapse rate times the emitting level's height:

$$T_s \approx T_{\text{eq}} + \Gamma\,z_{\text{emit}}.$$

**Read it as: the greenhouse effect is the lapse rate times the height of the emitting level.** Add more absorber, the emitting level rises, and since temperature falls with height, the surface must warm to keep the emission constant. This framing makes the whole thing a geometry problem, and it explains why the greenhouse strength depends on the *depth* of the atmosphere, not just its composition.

**Now the four planets, and the numbers are startling.**

| | Titan | Mars | Earth | Venus |
|---|---|---|---|---|
| $T_{\text{eq}}$ | 85 K | 210 K | 255 K | 227 K |
| $T_s$ | 94 K | 210 K | 288 K | 737 K |
| greenhouse | 9 K | ~0 K | 33 K | **510 K** |

**Mars has essentially no greenhouse at all** — 6 mbar of CO$_2$ is optically thin, so it radiates to space almost from the ground. Venus has 92 bar of it.

**Finally, the runaway, which is the most important idea in the lesson.** Water is a condensable greenhouse gas, and that changes everything. Warm a planet with an ocean and more water evaporates, which strengthens the greenhouse, which warms it further. Normally this feedback is stabilizing enough. But a water-saturated atmosphere has a **hard ceiling on how much infrared it can emit** — because as the surface warms, the emitting level rises into ever-wetter, ever-more-opaque air, and beyond a point the outgoing flux stops increasing. That ceiling is around $310\ \mathrm{W\,m^{-2}}$.

**If a planet absorbs more sunlight than the ceiling, no surface temperature can balance the budget.** The planet heats without limit until the entire ocean is in the atmosphere as steam — a **runaway greenhouse**. Then the water is photodissociated at altitude, the hydrogen escapes ([4.3](04-03-atmospheric-escape.md)), and the planet is left permanently dry. **This is very probably what happened to Venus**, and it is what sets the inner edge of the habitable zone ([6.5](06-05-habitability-and-its-limits.md)).

## The formal version

**Equilibrium temperature.**

$$\pi R^2\,\frac{L_\star}{4\pi d^2}(1-A) = 4\pi R^2\sigma T_{\text{eq}}^4$$

$$\boxed{\ T_{\text{eq}} = \left[\frac{S(1-A)}{4\sigma}\right]^{1/4}, \qquad S = \frac{L_\star}{4\pi d^2}\ }$$

*In words: the factor of 4 is the ratio of a sphere's surface area to its cross-section — a planet intercepts sunlight over a disk and radiates over a ball.* Note $R$ cancels: equilibrium temperature is independent of planet size.

The weak fourth-root dependence matters. **Halving the absorbed flux lowers $T_{\text{eq}}$ by only 16 percent**, which is why the habitable zone is wide in flux and why albedo changes are less powerful than they feel.

| Body | $S$ (W m$^{-2}$) | $A$ | $T_{\text{eq}}$ | $T_s$ | greenhouse |
|---|---|---|---|---|---|
| Venus | 2601 | 0.77 | 227 K | 737 K | 510 K |
| Earth | 1361 | 0.30 | 255 K | 288 K | 33 K |
| Mars | 586 | 0.25 | 210 K | 210 K | ~0 K |
| Titan | 14.9 | 0.22 | 85 K | 94 K | 9 K |

**The grey-atmosphere greenhouse.** Model the atmosphere as a single absorbing slab with infrared optical depth $\tau$, transparent to sunlight. Radiative equilibrium gives

$$T_s^4 = T_{\text{eq}}^4\left(1 + \frac{3\tau}{4}\right).$$

*In words: the surface temperature rises as the fourth root of the optical depth.* Inverting for the four planets:

| Body | required $\tau$ |
|---|---|
| Mars | 0.005 |
| Titan | 0.70 |
| Earth | 0.85 |
| Venus | **148** |

**The optical depth spans four orders of magnitude, while the temperatures span a factor of eight** — that is the fourth-root law protecting you, and it is why very large changes in atmospheric composition produce comparatively modest temperature changes until you get to Venus's regime.

**Optical depth and column mass.** For an absorber of mass column $m$ (kg m$^{-2}$) with absorption cross-section per unit mass $\kappa$,

$$\tau = \kappa\,m = \frac{\kappa\,P_s\,f}{g},$$

with $f$ the absorber's mass mixing ratio. *In words: doubling the surface pressure doubles the optical depth, all else equal.* This is why the greenhouse depends so strongly on how much atmosphere there is, not only on what it is made of.

**Why the emitting level matters.** The atmosphere radiates to space from roughly where $\tau\approx1$ measured downward from the top. Adding absorber pushes that level upward to altitude $z_{\text{emit}}$, and since the troposphere is on the adiabat,

$$T_s = T_{\text{eq}} + \Gamma_d\,z_{\text{emit}}.$$

Check on Earth: $\Gamma = 6.5\ \mathrm{K\,km^{-1}}$ (moist adiabat) and $z_{\text{emit}}\approx5$ km give $255 + 33 = 288$ K. **Exactly right, from two numbers.**

**The runaway greenhouse and the radiation limit.** For an atmosphere in equilibrium with a liquid-water surface, the water vapour pressure is set by Clausius–Clapeyron,

$$P_{\text{sat}}(T) = P_0\exp\left[-\frac{L}{R_v}\left(\frac1T-\frac1{T_0}\right)\right],$$

which rises *exponentially* with temperature. As $T_s$ rises, the atmosphere's water content and hence its infrared opacity rise exponentially, pushing the emitting level up as fast as the surface warms. The outgoing flux therefore **saturates**:

$$\boxed{\ F_{\text{OLR}} \to F_{\text{crit}} \approx 280\text{--}310\ \mathrm{W\,m^{-2}}\ \text{(the Simpson–Nakajima limit)}\ }$$

*In words: a wet planet cannot radiate more than about $300\ \mathrm{W\,m^{-2}}$, no matter how hot its surface gets.*

**The runaway condition** is then simply

$$\frac{S(1-A)}{4} > F_{\text{crit}}.$$

For Earth today, $1361\times0.7/4 = 238\ \mathrm{W\,m^{-2}}$ — comfortably below. **Move Earth to 0.87 AU and the absorbed flux exceeds 310, and no equilibrium exists.** Venus at 0.72 AU, with a plausible early albedo, was over the line from the start.

**The aftermath.** In a runaway, water reaches the upper atmosphere in quantity, where UV photodissociates it. Hydrogen — the lightest gas there is — escapes readily ([4.3](04-03-atmospheric-escape.md)), and the oxygen is consumed oxidizing the crust. **The water is destroyed, not merely relocated**, which is why the process is irreversible and why Venus's D/H is 150 times Earth's ([1.6](01-06-cosmochemistry-volatile-delivery.md)) — the residue of an ocean that boiled off and leaked away.

## Picture

![Left panel, a logarithmic temperature scale showing four planets. For each, a blue dot marks the equilibrium temperature and a coral dot the actual surface temperature, joined by a coral bar. Titan runs from 85 to 94 kelvin, a gap of 9; Mars from 210 to 210, essentially no gap; Earth from 255 to 288, a gap of 33; and Venus from 227 to 737, a gap of 510. A note points out that Venus is colder at equilibrium than Earth because its clouds reflect 77 percent of the sunlight, so it is hot entirely because of the greenhouse, while Mars's 6 millibars of carbon dioxide is optically thin. Right panel, outgoing infrared flux in watts per square metre against surface temperature. A blue curve rises steeply and then flattens against a dashed horizontal radiation limit near 310 watts per square metre. A solid coral line at 240 marks what Earth absorbs, safely below; a dashed coral line at 340 marks what early Venus absorbed, above the limit. A note explains that if absorbed sunlight exceeds the radiation limit, no surface temperature balances the budget and the ocean boils entirely away in a runaway greenhouse](assets/04-02-fig1.svg)

The left panel is the greenhouse effect measured; the right panel is the greenhouse effect running out of control.

## Worked examples

**Example 1 (mechanical — Earth's budget, and Venus's).** (a) Compute Earth's equilibrium temperature and greenhouse. (b) Do the same for Venus and compare the absorbed fluxes.

(a) $$T_{\text{eq}} = \left[\frac{1361\times0.70}{4\times5.670\times10^{-8}}\right]^{1/4} = \left[\frac{952.7}{2.268\times10^{-7}}\right]^{1/4} = \left[4.201\times10^{9}\right]^{1/4}.$$

$$T_{\text{eq}} = 254.6\ \mathrm{K}, \qquad \text{greenhouse} = 288 - 254.6 = 33.4\ \mathrm{K}.$$

(b) $$T_{\text{eq}} = \left[\frac{2601\times0.23}{2.268\times10^{-7}}\right]^{1/4} = \left[\frac{598.2}{2.268\times10^{-7}}\right]^{1/4} = \left[2.638\times10^{9}\right]^{1/4} = 226.6\ \mathrm{K}.$$

Absorbed fluxes:

$$\text{Earth: } \frac{1361\times0.70}{4} = 238\ \mathrm{W\,m^{-2}}, \qquad \text{Venus: } \frac{2601\times0.23}{4} = 150\ \mathrm{W\,m^{-2}}.$$

**Venus absorbs 37 percent less energy per square metre than Earth does**, and is 449 K hotter at the surface. There is no reading of this in which insolation explains Venus's temperature. It is the atmosphere, and only the atmosphere.

**Example 2 (why you'd care — how close is Earth to a runaway?).** Earth absorbs $238\ \mathrm{W\,m^{-2}}$ against a radiation limit near $310$. How much would the Sun have to brighten, or how much closer would Earth have to be, to cross it? And when does this happen naturally?

*By solar constant.* Need $S(1-A)/4 > 310$, so with $A = 0.30$:

$$S > \frac{4\times310}{0.70} = 1771\ \mathrm{W\,m^{-2}}, \qquad \frac{1771}{1361} = 1.30.$$

**A 30 percent brighter Sun.**

*By distance.* $S\propto1/d^2$, so

$$d = 1\ \mathrm{AU}\times\frac{1}{\sqrt{1.30}} = 0.877\ \mathrm{AU}.$$

**Move Earth inside 0.88 AU and it runs away** — which, note, is inside Venus's 0.72 AU by a comfortable margin, consistent with Venus having crossed the line long ago.

*When it happens naturally.* The Sun brightens on the main sequence as its core's mean molecular weight rises ([astrophysics 2.5](../../astrophysics/lessons/02-05-main-sequence.md)), at roughly 10 percent per billion years. Reaching 1.30 takes

$$\frac{0.30}{0.10} = 3\ \mathrm{Gyr}.$$

**Earth has about three billion years before the oceans are lost.** The habitable period ends long before the Sun leaves the main sequence.

*Two caveats that matter, in opposite directions.* This estimate treats albedo as fixed, and it will not be: a warming Earth grows more water clouds, which are reflective, and cloud feedback could plausibly delay the runaway by a billion years or more — it is the single largest uncertainty in the calculation. Pushing the other way, the "moist greenhouse" limit, at which the stratosphere becomes wet enough to leak hydrogen to space steadily without a full runaway, is reached at a *lower* flux than the Simpson–Nakajima limit, perhaps around $280\ \mathrm{W\,m^{-2}}$. **So the ocean may begin to be lost well before it boils**, and the honest range for Earth's remaining habitable lifetime is roughly 1–3 Gyr.

## Watch out

- **You might think a planet closer to its star is hotter at the surface, but Venus absorbs less than Earth and is 449 K hotter.** Insolation sets $T_{\text{eq}}$; the atmosphere sets everything above it.
- **You might think the greenhouse effect works by trapping heat like a blanket, but the useful mechanism is that it raises the altitude from which the planet radiates.** Since temperature falls with height, a higher emitting level forces a warmer surface. This framing predicts that the greenhouse strength depends on the lapse rate as well as on opacity, which the blanket picture does not.
- **You might think doubling the greenhouse gas doubles the warming, but $T_s\propto\tau^{1/4}$ in the grey model, and real gases saturate their strong bands** so that forcing goes roughly as $\ln$(concentration). Both effects make the response far weaker than linear — which is exactly why Venus needs $\tau = 148$ rather than $\tau = 4$.
- **You might think a runaway greenhouse is just "very hot", but its defining feature is that no equilibrium exists.** Below the limit a planet finds a stable temperature however hot; above it, there is no solution at all until the entire ocean has evaporated.

## One-liner

> Sunlight sets the temperature of whatever radiates to space; the atmosphere sets how far below that level the surface lies — and if the ocean can push the emitting level up faster than the surface warms, there is no equilibrium at all.

## Problems

**P1 (🟢)** A planet orbits at 1.5 AU from a star of luminosity $2\,L_\odot$, with albedo 0.35. Take $S_\odot(1\ \mathrm{AU}) = 1361\ \mathrm{W\,m^{-2}}$. (a) Compute $S$ at the planet. (b) Compute $T_{\text{eq}}$. (c) Its surface is 305 K; compute the greenhouse and the required grey optical depth.

**P2 (🟡)** Use $T_s = T_{\text{eq}} + \Gamma z_{\text{emit}}$. (a) For Earth with $\Gamma = 6.5\ \mathrm{K\,km^{-1}}$ and a 33 K greenhouse, find $z_{\text{emit}}$. (b) Doubling CO$_2$ raises the emitting level by about 150 m; estimate the resulting surface warming. (c) Compare with the accepted climate sensitivity of 2–4.5 K per doubling and explain the discrepancy in one sentence.

**P3 (🔴, optional)** A planet has $A = 0.30$ and orbits a star whose luminosity grows as $L(t) = L_0(1 + 0.1\,t)$ with $t$ in Gyr. It starts with $S = 1200\ \mathrm{W\,m^{-2}}$. Take the runaway threshold as $F_{\text{crit}} = 300\ \mathrm{W\,m^{-2}}$. (a) Compute the absorbed flux today. (b) Find when it crosses the threshold. (c) Suppose instead that as the planet warms, cloud cover raises $A$ from 0.30 toward 0.45 linearly over that interval. Recompute, and comment on which effect dominates and what that implies for the reliability of habitable-zone inner edges.

<details>
<summary>Solutions</summary>

**P1** (a) $$S = 1361\times\frac{2}{(1.5)^2} = 1361\times\frac{2}{2.25} = 1361\times0.8889 = 1210\ \mathrm{W\,m^{-2}}.$$

(b) $$T_{\text{eq}} = \left[\frac{1210\times0.65}{4\times5.670\times10^{-8}}\right]^{1/4} = \left[\frac{786.5}{2.268\times10^{-7}}\right]^{1/4} = \left[3.468\times10^{9}\right]^{1/4} = 242.7\ \mathrm{K}.$$

(c) Greenhouse $= 305 - 242.7 = 62.3$ K. For the optical depth:

$$\left(\frac{305}{242.7}\right)^4 = (1.2567)^4 = 2.494 = 1 + \frac{3\tau}{4},$$
$$\tau = \frac{4\times1.494}{3} = 1.99.$$

About twice Earth's — a substantially thicker or more absorbing atmosphere, but nowhere near Venus's 148.

**P2** (a) $$z_{\text{emit}} = \frac{33}{6.5} = 5.1\ \mathrm{km}.$$

(b) $$\Delta T_s = \Gamma\,\Delta z = 6.5\ \mathrm{K\,km^{-1}}\times0.150\ \mathrm{km} = 0.98\ \mathrm{K}.$$

About 1 K.

(c) The accepted 2–4.5 K is larger because this calculation gives only the **direct radiative forcing** and omits all feedbacks — principally water vapour (a warmer atmosphere holds exponentially more of it, which is itself a strong greenhouse gas), ice–albedo, and clouds, which together amplify the direct response by a factor of roughly two to four.

**P3** (a) $$\frac{S(1-A)}{4} = \frac{1200\times0.70}{4} = 210\ \mathrm{W\,m^{-2}}.$$

(b) Need $\frac{1200(1+0.1t)\times0.70}{4} = 300$:

$$210(1+0.1t) = 300, \qquad 1+0.1t = 1.4286, \qquad t = 4.29\ \mathrm{Gyr}.$$

(c) With albedo rising linearly from 0.30 at $t=0$ to 0.45 at $t=4.29$, so $A(t) = 0.30 + 0.03497\,t$:

$$F(t) = \frac{1200(1+0.1t)\left[1 - 0.30 - 0.03497t\right]}{4} = 300(1+0.1t)(0.70 - 0.03497t).$$

Set $F = 300$:

$$(1+0.1t)(0.70-0.03497t) = 1.$$
$$0.70 - 0.03497t + 0.070t - 0.003497t^2 = 1,$$
$$-0.003497t^2 + 0.03503t - 0.30 = 0,$$
$$0.003497t^2 - 0.03503t + 0.30 = 0.$$

Discriminant: $(0.03503)^2 - 4(0.003497)(0.30) = 1.227\times10^{-3} - 4.196\times10^{-3} = -2.97\times10^{-3}$.

**Negative — there is no solution.** With this cloud feedback the planet *never* crosses the runaway threshold: the rising albedo removes absorbed flux faster than the brightening star adds it. Evaluating $F(t)$ directly confirms it — 210, 220, 227, 232, 235, 236, 235 W m$^{-2}$ at $t = 0,1,2,3,4,5,6$ Gyr — so the absorbed flux peaks near $236\ \mathrm{W\,m^{-2}}$ around $t = 5$ Gyr and then declines, never approaching 300.

**Which effect dominates is therefore the entire question, and the answer flips the conclusion from "runaway in 4.3 Gyr" to "never".** That is not a subtlety at the margins; it is a qualitative change of outcome from a plausible variation in one poorly constrained feedback.

The implication for habitable-zone inner edges is uncomfortable and worth stating plainly. **The inner edge is not a robust boundary but a model output whose position depends on cloud behaviour that three-dimensional climate models still disagree about.** Some models find that a slowly rotating planet approaching the inner edge develops a thick, highly reflective cloud deck at its substellar point, which stabilizes it and pushes the inner edge substantially inward — perhaps to 0.95 AU-equivalent for Earth or closer. Others find the clouds thin out. **Quoted habitable-zone boundaries carry an uncertainty comparable to the width of the zone itself**, and [6.5](06-05-habitability-and-its-limits.md) treats this as one of the framework's central weaknesses rather than a detail.

</details>

## Flashback

**From Lesson 4.1 (Atmospheric structure):** A planet has $g = 4.0\ \mathrm{m\,s^{-2}}$ and a CO$_2$ atmosphere ($\mu = 44$, $c_p = 850\ \mathrm{J\,kg^{-1}\,K^{-1}}$) at 250 K. (a) Compute the scale height. (b) Compute the dry adiabatic lapse rate. (c) Its surface pressure is 0.8 bar and its radius 3800 km; compute the total atmospheric mass.

<details>
<summary>Solution</summary>

(a) $$H = \frac{kT}{\mu m_H g} = \frac{1.381\times10^{-23}\times250}{44\times1.6605\times10^{-27}\times4.0} = \frac{3.453\times10^{-21}}{2.922\times10^{-25}} = 1.182\times10^{4}\ \mathrm{m} = 11.8\ \mathrm{km}.$$

(b) $$\Gamma_d = \frac{g}{c_p} = \frac{4.0}{850} = 4.71\times10^{-3}\ \mathrm{K\,m^{-1}} = 4.7\ \mathrm{K\,km^{-1}}.$$

(c) $$M_{\text{atm}} = \frac{P_s\,4\pi R^2}{g} = \frac{0.8\times10^{5}\times4\pi(3.8\times10^{6})^2}{4.0}.$$

$$4\pi(3.8\times10^{6})^2 = 4\pi\times1.444\times10^{13} = 1.815\times10^{14}\ \mathrm{m^2},$$
$$M_{\text{atm}} = \frac{8.0\times10^{4}\times1.815\times10^{14}}{4.0} = \frac{1.452\times10^{19}}{4.0} = 3.63\times10^{18}\ \mathrm{kg}.$$

About two-thirds of Earth's atmospheric mass, on a planet with 36 percent of Earth's surface area — so nearly twice Earth's column mass per square metre. Combined with CO$_2$'s strong infrared absorption, this would be a planet with a substantial greenhouse, unlike Mars whose 6 mbar is optically thin.

</details>

## Connections

- **Backward:** [4.1](04-01-atmospheric-structure.md) supplied the lapse rate and the vertical structure that turn optical depth into a surface temperature; [3.3](03-03-remote-spectroscopy.md) supplied albedo, emissivity and the spectroscopy that identifies the absorbers.
- **Forward:** [4.3](04-03-atmospheric-escape.md) explains how the hydrogen leaves after a runaway; [4.5](04-05-photochemistry-hazes-evolution.md) covers the faint young Sun problem, which is this budget run backwards; [4.6](04-06-terrestrial-planets-compared.md) uses the runaway to explain Venus; [6.5](06-05-habitability-and-its-limits.md) turns the radiation limit into the habitable zone's inner edge.
- **Sideways:** Earth's own greenhouse, radiative forcing, feedbacks and climate sensitivity belong to [`climate-science`](../../climate-science/syllabus.md), which owns them and does the carbon cycle properly; [climate-science 1.4](../../climate-science/lessons/01-04-radiative-forcing-defined.md) already uses the Venus comparison made here. Radiative transfer and the grey approximation are [atmospheric-science 3.3](../../atmospheric-science/lessons/03-03-radiative-transfer-vertical-profile.md)'s, and Clausius–Clapeyron is [`thermodynamics-physics`](../../thermodynamics-physics/syllabus.md)'s.
