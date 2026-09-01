# Atmospheric Science · Lesson 2.1: Humidity variables

> ⏱ ~15 min · Module 2: Moisture, clouds & stability · Builds on: [1.1 Composition & vertical structure](01-01-composition-vertical-structure.md), [1.4 Potential temperature](01-04-potential-temperature.md) · Unlocks: 2.2 (moist adiabat), 2.4 (CAPE)

## Why this matters

Water is the only substance in the atmosphere that changes phase at ordinary temperatures, and that single fact powers essentially all of weather: clouds, rain, thunderstorms, hurricanes, and roughly half the poleward heat transport of the planet. But water vapor is also, notoriously, measured six different ways — vapor pressure, mixing ratio, specific humidity, relative humidity, dew point, virtual temperature — and the six are used interchangeably in the literature without apology. This lesson is the conversion table (and the [reference card](../reference.md#humidity-conversions) keeps a copy for mid-problem lookup). It is the least conceptually deep lesson in the course and one of the most used: get fluent here and Module 2 is bookkeeping; stay muddled and every later result will feel arbitrary.

## The idea

Two genuinely different questions hide inside the word "humidity."

**How much water is actually in this air?** That is an *absolute* question, and it has three near-identical answers depending on what you divide by. Divide the vapor's contribution to pressure and you get **vapor pressure** $e$. Divide the vapor's mass by the mass of the *dry* air carrying it and you get **mixing ratio** $w$. Divide by the mass of the *total* air and you get **specific humidity** $q$. Because vapor is at most a few percent of the air, $w$ and $q$ are numerically within a percent of each other and are casually swapped; the reason to prefer $w$ is that it is conserved when a parcel expands or is compressed, since neither the vapor nor the dry air goes anywhere.

**How close is this air to condensing?** That is a *relative* question, and it needs a ceiling to compare against. At any temperature there is a maximum vapor pressure the air can hold, the **saturation vapor pressure** $e_s(T)$ — beyond it, vapor condenses. Compare the actual $e$ with that ceiling and you get **relative humidity**. Or ask the equivalent question backwards: how far would you have to *cool* this air, holding its water fixed, before the ceiling comes down to meet it? That temperature is the **dew point** $T_d$.

The relationship between the two families is the source of nearly all confusion, and one picture fixes it: plot $e_s$ against $T$, mark your air as a point, and read horizontally for dew point, vertically for relative humidity. Because $e_s(T)$ rises steeply — roughly a doubling every 10 K, as Lesson 2.2 will derive — warm air can hold enormously more water than cold air. Tropical air at 35 °C can hold 37 g of vapor per kilogram of dry air; polar air at −10 °C can hold 1.8 g. That factor of twenty is why the tropics rain and the Arctic is a desert.

## The formal version

Let $e$ be the **vapor pressure** — the partial pressure of water vapor (hPa) — and $p$ the total pressure. The dry air's partial pressure is then $p - e$. Water vapor obeys its own gas law $e = \rho_v R_v T$ with $R_v = R_u/M_v = 8314/18.02 = 461.5\ \mathrm{J\,kg^{-1}\,K^{-1}}$, and the ratio that appears everywhere is

$$\varepsilon \equiv \frac{R_d}{R_v} = \frac{M_v}{M_d} = \frac{18.02}{28.96} = 0.622.$$

*In words: a water molecule is 0.622 times as heavy as an average air molecule — which is why moist air is lighter than dry air, the fact that makes virtual temperature necessary below.*

**Absolute measures.**

$$w \equiv \frac{m_v}{m_d} = \frac{\varepsilon e}{p - e}, \qquad q \equiv \frac{m_v}{m_v + m_d} = \frac{\varepsilon e}{p - (1-\varepsilon)e} = \frac{w}{1+w}.$$

*In words: mixing ratio is grams of vapor per kilogram of dry air; specific humidity is grams per kilogram of total air.* Both are reported in g kg⁻¹ but must be used as kg kg⁻¹ in formulas. Since $w \lesssim 0.04$, $q \approx w$ to within four percent, and both are **conserved under adiabatic ascent** as long as no condensation occurs — they are ratios of masses, and neither mass changes.

**Relative measures.**

$$\mathrm{RH} \equiv \frac{e}{e_s(T)} \times 100 \text{ percent} \;\approx\; \frac{w}{w_s(T,p)} \times 100 \text{ percent},$$

$$T_d \equiv \text{the temperature at which } e_s(T_d) = e.$$

*In words: relative humidity is how full the air is, as a fraction of what it could hold; dew point is how far you would have to cool it to fill it exactly.* The dew-point **depression** $T - T_d$ is the practical dryness measure — zero means saturated fog, 20 K means bone dry — and it is what Lesson 2.2 converts into a cloud-base height.

Note the asymmetry that trips everyone: **RH depends on temperature even when the water content does not change.** Warm a parcel and its $e$ is unchanged, its $w$ is unchanged, its $T_d$ is unchanged — but $e_s(T)$ rose, so RH falls. This is why a heated house in winter is desperately dry: outdoor air at −5 °C and 90 percent RH, warmed to 20 °C with no water added, arrives at about 17 percent RH.

**Virtual temperature.** Moist air is *less* dense than dry air at the same $p$ and $T$, because each water molecule that joins the mix displaces a heavier average molecule. To keep using the dry gas law $p = \rho R_d T_v$ unchanged, define the **virtual temperature**

$$T_v \equiv T\,(1 + 0.61w),$$

where the coefficient is $(1-\varepsilon)/\varepsilon = 0.378/0.622 = 0.61$. *In words: $T_v$ is the temperature dry air would need in order to have the density that this moist air actually has* — always a little higher than $T$, since moist air is lighter and lightness looks like warmth to the gas law. The correction is small (2–4 K in the tropics, a few tenths in mid-latitudes) but it is not negligible for buoyancy: 3 K of virtual-temperature excess is a substantial push, and Lesson 2.4 uses $T_v$, not $T$, in the buoyancy formula.

## Picture

![The saturation vapor pressure curve rising steeply with temperature, with a sample air parcel at 20 degrees C and 14 hPa marked; a horizontal dashed line back to the curve gives the dew point of 12 degrees C, and the vertical gap up to the curve at 23.4 hPa gives the 60 percent relative humidity](assets/02-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — the full conversion).** Air at $p = 1000$ hPa and $T = 20$ °C has $\mathrm{RH} = 60$ percent. Find $e$, $w$, $q$, and $T_d$. Take $e_s(20\ ^\circ\mathrm{C}) = 23.4$ hPa and $e_s(12\ ^\circ\mathrm{C}) = 14.0$ hPa.

Vapor pressure, straight from the definition of RH:

$$e = 0.60 \times 23.4 = 14.0\ \mathrm{hPa}.$$

Mixing ratio:

$$w = \frac{\varepsilon e}{p - e} = \frac{0.622 \times 14.0}{1000 - 14.0} = \frac{8.71}{986} = 8.84\times10^{-3} = 8.8\ \mathrm{g\,kg^{-1}}.$$

Specific humidity:

$$q = \frac{w}{1+w} = \frac{0.00884}{1.00884} = 8.77\times10^{-3} = 8.8\ \mathrm{g\,kg^{-1}}.$$

The two differ by under one percent, as promised. Dew point: we need the temperature where $e_s = 14.0$ hPa, and we are told that is $T_d = 12\ ^\circ\mathrm{C}$. The dew-point depression is $20 - 12 = 8$ K.

*Check.* A useful rule of thumb from the shape of $e_s(T)$: near room temperature, RH near 60 percent corresponds to a depression of roughly 8 K, and each further 10 percent drop in RH adds about 2 K. Our numbers fit.

**Example 2 (why you'd care — moist air is lighter, and buoyancy notices).** A tropical parcel has $T = 303$ K and $w = 20\ \mathrm{g\,kg^{-1}}$; the dry air around it is also at 303 K. Which is denser, and by how much?

$$T_v = 303\,(1 + 0.61\times0.020) = 303 \times 1.0122 = 306.7\ \mathrm{K}.$$

The moist parcel has a virtual temperature 3.7 K above the dry environment's. At the same pressure, density goes as $1/T_v$, so the parcel is lighter by a factor $303/306.7$, that is, by 1.2 percent. In buoyancy terms it is as though the parcel were 3.7 K warmer than its surroundings — a real, usable push, comparable to the thermal excess that starts a thermal off a hot field.

This is not a curiosity. It is why moist convection prefers to start in humid air, why the vapor-rich boundary layer under a tropical thunderstorm is buoyant before it is even warm, and why hurricane forecasters watch mid-level moisture as closely as sea-surface temperature.

## Watch out

- **You might think** relative humidity tells you how much water is in the air. **Actually** it tells you how *close to saturated* the air is, which is a different question entirely. Air at 30 °C and 40 percent RH holds more than twice the water of air at 10 °C and 90 percent RH. When you want water content, quote $w$, $q$, or $T_d$ — all three are properties of the water alone, independent of temperature.
- **You might think** dew point can exceed temperature. **Actually** it cannot (except transiently in supersaturated air, which is a Lesson 2.3 story). $T_d \le T$ always, with equality exactly at saturation, and the *depression* $T - T_d$ is the honest dryness measure.
- **You might think** $w$ and $q$ are interchangeable everywhere. **Actually** they are interchangeable *numerically* but not conceptually: $w$ has dry air in the denominator, so it is conserved when vapor is added or removed only if you track the dry mass, and it is the variable that appears in the mixing-ratio form of the moist adiabat. Some textbooks write $q$ where they mean $w$; check the denominator before you trust a formula.

## One-liner

> Vapor pressure, mixing ratio and specific humidity say how much water is there; relative humidity and dew point say how close it is to condensing — and virtual temperature says how much lighter that water makes the air.

## Problems

**P1 (🟢)** Air at $p = 900$ hPa has $e = 12.0$ hPa. Compute the mixing ratio in g kg⁻¹, and the specific humidity. If the temperature is 15 °C with $e_s = 17.0$ hPa, compute the relative humidity.

**P2 (🟡)** Outdoor air at $-5\ ^\circ\mathrm{C}$ has $\mathrm{RH} = 90$ percent; $e_s(-5\ ^\circ\mathrm{C}) = 4.2$ hPa and $e_s(20\ ^\circ\mathrm{C}) = 23.4$ hPa. It is drawn into a house and heated to 20 °C with no water added or removed. (a) What is the indoor relative humidity? (b) What is the indoor dew point, and how do you know without any further calculation?

**P3 (🔴, optional)** Derive $w = \varepsilon e/(p-e)$ from the two gas laws. Then show that the *approximation* $w \approx \varepsilon e/p$ is in error by a fraction $e/p$, and evaluate that error for a tropical case ($e = 40$ hPa, $p = 1000$ hPa) and a mid-latitude winter case ($e = 3$ hPa, $p = 1000$ hPa).

<details>
<summary>Solutions</summary>

**P1** Mixing ratio:

$$w = \frac{0.622 \times 12.0}{900 - 12.0} = \frac{7.464}{888} = 8.41\times10^{-3} = 8.4\ \mathrm{g\,kg^{-1}}.$$

Specific humidity: $q = w/(1+w) = 0.00841/1.00841 = 8.34\times10^{-3} = 8.3\ \mathrm{g\,kg^{-1}}$.

Relative humidity: $\mathrm{RH} = e/e_s = 12.0/17.0 = 0.706$, that is **71 percent**.

*Check.* Note that $w$ here is essentially the same as the 8.8 g kg⁻¹ of Example 1 despite the lower vapor pressure — because the total pressure is lower too, and $w$ depends on the *ratio*. This is exactly why mixing ratio and not vapor pressure is the conserved quantity on ascent.

**P2** (a) Outdoors, $e = 0.90 \times 4.2 = 3.78$ hPa. Heating changes neither the water nor the pressure, so $e$ indoors is still 3.78 hPa. But now the ceiling is $e_s(20\ ^\circ\mathrm{C}) = 23.4$ hPa:

$$\mathrm{RH} = \frac{3.78}{23.4} = 0.162 \approx 16\ \text{percent}.$$

(b) The indoor dew point is **the same as the outdoor dew point**, which is just below −5 °C (specifically, the temperature at which $e_s = 3.78$ hPa, about −6 °C). No calculation is needed because dew point is a property of the *water content* alone, and heating added no water. This is the whole reason winter indoor air is so dry: you cannot raise the dew point by turning up the thermostat, only by adding water.

*Check.* Sanity: 16 percent RH is the classic number for a heated northern house in winter, matching cracked lips, static shocks, and shrinking floorboards.

**P3** Water vapor: $e = \rho_v R_v T$, so $\rho_v = e/(R_vT)$. Dry air occupies the same volume at its own partial pressure: $p - e = \rho_d R_d T$, so $\rho_d = (p-e)/(R_dT)$. Then

$$w = \frac{m_v}{m_d} = \frac{\rho_v}{\rho_d} = \frac{e/(R_vT)}{(p-e)/(R_dT)} = \frac{R_d}{R_v}\frac{e}{p-e} = \frac{\varepsilon e}{p-e}.$$

(The temperatures cancel, and the volumes cancel because vapor and dry air share the same volume — that is Dalton's law doing the work.)

For the approximation, factor:

$$w = \frac{\varepsilon e}{p}\cdot\frac{1}{1 - e/p} \approx \frac{\varepsilon e}{p}\left(1 + \frac{e}{p}\right),$$

so dropping the $e$ in the denominator *understates* $w$ by a fractional amount $e/p$ to first order.

- Tropical: $e/p = 40/1000 = 4.0$ percent — a real error, enough to matter in a moisture budget.
- Mid-latitude winter: $e/p = 3/1000 = 0.3$ percent — utterly negligible.

*Check.* Direct evaluation of the tropical case: exact $w = 0.622\times40/960 = 0.02592$; approximate $0.622\times40/1000 = 0.02488$. The ratio is $1.0417$, confirming the 4.2 percent understatement predicted by $1/(1 - 0.04)$.

</details>

## Flashback

**From Lesson 1.4 (Potential temperature):** A parcel at 600 hPa has $T = 262$ K. (a) Compute its potential temperature. (b) A second parcel, at 900 hPa, has $\theta = 295$ K. Which of the two would end up on top if they were brought side by side, and why?

<details>
<summary>Solution</summary>

(a) $$\theta = 262\left(\frac{1000}{600}\right)^{0.286} = 262 \times (1.6667)^{0.286} = 262 \times 1.1573 = 303.2\ \mathrm{K}.$$

(b) The first parcel, with $\theta = 303.2$ K, sits **on top**. Air arranges itself with $\theta$ increasing upward — that is the stable configuration, since a parcel carries its $\theta$ with it and will float to the level where the environment's $\theta$ matches its own. The parcel with the larger $\theta$ is the lighter one at any common pressure, so it ends up above the $\theta = 295$ K parcel.

*Check.* Bring both to 1000 hPa: the first would be at 303.2 K, the second at 295 K, and at equal pressure the warmer is the less dense. The whole point of $\theta$ is that this comparison can be made without actually moving either parcel.

</details>

## Connections

- **Backward:** the ideal-gas bookkeeping and the constant $R_d$ come from [1.1](01-01-composition-vertical-structure.md); $w$ and $q$ join $\theta$ from [1.4](01-04-potential-temperature.md) as the conserved labels a dry-ascending parcel carries.
- **Forward:** [2.2](02-02-saturation-moist-adiabatic-lapse-rate.md) derives the shape of $e_s(T)$ from Clausius–Clapeyron and uses the dew-point depression to locate cloud base; [2.4](02-04-stability-parcel-theory-cape.md) uses virtual temperature in the buoyancy formula.
- **Sideways (physical chemistry):** vapor pressure over a liquid, Dalton's law of partial pressures and the mole-fraction bookkeeping here are the same machinery as solution equilibria in [`physical-chemistry` 2.2](../../physical-chemistry/lessons/02-02-clapeyron-clausius-clapeyron.md) — the atmosphere is a two-component system whose minor component happens to sit at its own phase boundary.
