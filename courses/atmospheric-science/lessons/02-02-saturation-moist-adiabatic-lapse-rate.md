# Atmospheric Science · Lesson 2.2: Saturation & the moist adiabatic lapse rate

> ⏱ ~15 min · Module 2: Moisture, clouds & stability · Builds on: [2.1 Humidity variables](02-01-humidity-variables.md), [1.3 Adiabatic parcels](01-03-adiabatic-parcels-dry-lapse-rate.md), [`thermodynamics-physics` 3.3](../../thermodynamics-physics/lessons/03-03-phase-transitions-clausius-clapeyron.md) · Unlocks: 2.3 (clouds), 2.4 (CAPE)

## Why this matters

This is the hinge of the whole course. Water changes the atmosphere from a gas that merely cools when lifted into an engine: lift moist air far enough and it starts releasing the energy that evaporated it in the first place, which slows its cooling, which keeps it buoyant, which lifts it further. That feedback is a thunderstorm. Two results do the work — the **Clausius–Clapeyron relation**, which says the atmosphere's water-holding capacity rises about 7 percent per kelvin, and the **moist adiabatic lapse rate** $\Gamma_m$, which is the dry 9.8 K km⁻¹ softened to something like 4–7 K km⁻¹ by latent heat. The first is also the single most important number in climate physics; the second is the reason the tropical troposphere has the temperature profile it does.

## The idea

**Why there is a ceiling at all.** Liquid water is constantly losing molecules to evaporation and gaining them back from the vapor. Equilibrium is when the two rates match, and that defines $e_s(T)$: the vapor pressure at which the liquid is neither growing nor shrinking. Warm the water and escape gets easier — exponentially easier, because a molecule needs a fixed energy $L_v$ to break free and the fraction of molecules with that much energy is a Boltzmann factor. Exponential in $-L/(RT)$ is exactly what Clausius–Clapeyron produces, and it is why $e_s$ roughly doubles every 10 K rather than rising gently.

**Why saturated air cools more slowly.** Lift a parcel and it cools at 9.8 K km⁻¹ — until it reaches saturation. From then on, further cooling forces water out of the vapor phase, and every gram that condenses hands back about 2500 J of latent heat directly into the parcel. The parcel is still expanding and still losing energy to that expansion, but now something is refunding part of it. Net cooling is slower.

How much slower depends on **how much water there is to condense**, which is why $\Gamma_m$ is not a constant the way $\Gamma_d$ is. Warm, wet air near the tropical surface holds 27 g kg⁻¹ and condenses vigorously: $\Gamma_m$ drops to about 3.5 K km⁻¹. Cold air near the tropopause holds almost nothing, has no refund available, and $\Gamma_m$ climbs back toward 9.8. **The moist adiabat is a curve, not a line** — steep and dry at the top, shallow and generous at the bottom. Every skew-T diagram you will ever see is drawn around that fact.

**Where the cloud starts.** A rising unsaturated parcel is chasing a moving target: its temperature falls fast (9.8 K km⁻¹), while its dew point falls slowly (about 1.8 K km⁻¹, because the pressure drop dilutes the vapor a little). They close on each other at about 8 K km⁻¹, so a parcel with an 8 K dew-point depression saturates after 1 km. That is the **lifting condensation level (LCL)**, the height of cloud base — and it is why the cumulus over a landscape all have their bases at the *same* flat altitude: they share a dew-point depression, so they share an LCL.

## The formal version

**Clausius–Clapeyron.** [`thermodynamics-physics` 3.3](../../thermodynamics-physics/lessons/03-03-phase-transitions-clausius-clapeyron.md) derives the general phase-boundary slope $dp/dT = L/(T\Delta v)$. Specialize it to water vapor over liquid: the vapor's specific volume swamps the liquid's, so $\Delta v \approx \alpha_v = R_vT/e_s$, giving the atmospheric form

$$\boxed{\ \frac{de_s}{dT} = \frac{L_v e_s}{R_v T^2}\ }$$

with $L_v = 2.5\times10^{6}\ \mathrm{J\,kg^{-1}}$ the latent heat of vaporization and $R_v = 461.5\ \mathrm{J\,kg^{-1}\,K^{-1}}$. *In words: the fractional rate at which the water-holding capacity grows is $L_v/(R_vT^2)$ per kelvin.* Evaluate it:

$$\frac{1}{e_s}\frac{de_s}{dT} = \frac{2.5\times10^{6}}{461.5 \times 288^2} = 0.065\ \mathrm{K^{-1}} \approx 6.5\ \text{percent per kelvin},$$

which is *the* 7-percent-per-kelvin rule quoted throughout climate science. Doubling requires $\ln 2/0.065 = 10.6$ K — the "capacity doubles every 10 K" heuristic. Treating $L_v$ as constant and integrating,

$$e_s(T) = e_s(T_0)\exp\!\left[\frac{L_v}{R_v}\left(\frac{1}{T_0}-\frac{1}{T}\right)\right],$$

which from $e_s(0\ ^\circ\mathrm{C}) = 6.11$ hPa gives 12.3 hPa at 10 °C and 23.7 hPa at 20 °C, within 1 percent of the measured 12.27 and 23.37 hPa. (The full table is on the [reference card](../reference.md#saturation-vapor-pressure-over-water).)

**The moist adiabatic lapse rate.** Return to the first law, but now allow condensation to add heat. If the saturation mixing ratio drops by $dw_s$, latent heat $-L_v\,dw_s$ is released into the parcel:

$$c_p\,dT - \alpha\,dp = -L_v\,dw_s.$$

Dividing by $dz$, using the hydrostatic equation as in [1.3](01-03-adiabatic-parcels-dry-lapse-rate.md), and solving for $\Gamma_m = -dT/dz$ gives the standard result

$$\boxed{\ \Gamma_m = \Gamma_d\,\frac{1 + \dfrac{L_v w_s}{R_d T}}{1 + \dfrac{L_v^2 w_s\,\varepsilon}{c_p R_d T^2}}\ }$$

*In words: start from the dry lapse rate and divide by a factor bigger than one, whose size is set by how much water is available to condense.* Both correction terms vanish as $w_s \to 0$, recovering $\Gamma_m \to \Gamma_d$ for dry or very cold air. Evaluated along a real profile:

| $T$, $p$ | $w_s$ | $\Gamma_m$ |
|---|---|---|
| 30 °C, 1000 hPa | 27.6 g kg⁻¹ | 3.5 K km⁻¹ |
| 20 °C, 900 hPa | 16.6 g kg⁻¹ | 4.1 K km⁻¹ |
| 10 °C, 800 hPa | 9.7 g kg⁻¹ | 4.8 K km⁻¹ |
| 0 °C, 700 hPa | 5.5 g kg⁻¹ | 5.8 K km⁻¹ |
| −20 °C, 500 hPa | 1.6 g kg⁻¹ | 7.7 K km⁻¹ |
| −40 °C, 300 hPa | 0.4 g kg⁻¹ | 9.0 K km⁻¹ |

The commonly quoted "$\Gamma_m \approx 6$ K km⁻¹" is a mid-troposphere average, not a constant. Note that the *observed* mean tropospheric lapse rate, 6.5 K km⁻¹, sits between $\Gamma_m$ and $\Gamma_d$ — not by accident: moist convection continually drags the profile toward the moist adiabat, and the observed value is what that tug-of-war settles on.

**The LCL, derived.** The parcel's temperature falls at $\Gamma_d = 9.77$ K km⁻¹. Its dew point falls too, because $e$ is proportional to $p$ at fixed mixing ratio, so $d\ln e/dz = -1/H$; feeding that into Clausius–Clapeyron,

$$\frac{dT_d}{dz} = -\frac{R_vT_d^2}{L_vH} = -\frac{461.5\times285^2}{2.5\times10^{6}\times8426} = -1.8\ \mathrm{K\,km^{-1}}.$$

They converge at $9.77 - 1.78 = 8.0$ K km⁻¹, so closing a depression of $(T - T_d)$ takes

$$\boxed{\ z_{\mathrm{LCL}} \approx \frac{1000\ \mathrm{m}}{8.0\ \mathrm{K}}\,(T - T_d) = 125\ \mathrm{m}\ \text{per kelvin of dew-point depression}.\ }$$

*In words: divide the dew-point depression in kelvin by 8, and you have the cloud base in kilometres.*

**Equivalent potential temperature.** Since $\theta$ is destroyed by latent heating, define the variable that survives it: condense *all* the parcel's vapor and let the released heat warm it, then bring it to 1000 hPa. That gives

$$\theta_e \approx \theta\,\exp\!\left(\frac{L_v w_s}{c_p T}\right),$$

conserved along a moist adiabat as well as a dry one. A 25 °C saturated surface parcel with $\theta = 298$ K has $\theta_e = 353$ K — the 55 K difference is the latent heat it is carrying, expressed as temperature. Forecasters map $\theta_e$ to find where the fuel is.

## Picture

![A parcel lifted from 298 K at the surface following the straight dry adiabat up to the lifting condensation level at 1 km, then curving along the shallower moist adiabat above it, with the dry adiabat continued as a dashed line to show how much colder the parcel would have been without latent heat release](assets/02-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — cloud base and cloud-top temperature).** A summer afternoon reports $T = 30$ °C and $T_d = 18$ °C at the surface. (a) Where is cloud base? (b) A parcel rises to 5 km. What is its temperature, taking $\Gamma_m = 5.5$ K km⁻¹ as a layer average above the LCL?

(a) The depression is $30 - 18 = 12$ K, so

$$z_{\mathrm{LCL}} = 125 \times 12 = 1500\ \mathrm{m}.$$

(b) Dry ascent to 1.5 km: $T = 30 - 9.77\times1.5 = 30 - 14.7 = 15.3\ ^\circ\mathrm{C}$. Then moist ascent through the remaining 3.5 km:

$$T = 15.3 - 5.5\times3.5 = 15.3 - 19.3 = -4.0\ ^\circ\mathrm{C}.$$

*Check.* Had it stayed dry the whole way, the parcel would be at $30 - 9.77\times5 = -18.9\ ^\circ\mathrm{C}$. Latent heat has left it 15 K warmer than dry ascent would — which is precisely the buoyancy a thunderstorm runs on.

**Example 2 (why you'd care — the rain shadow, completed).** Lesson 1.3 left the foehn half-derived. Now finish it. Pacific air at 20 °C, dew point 15 °C, crosses a 3000 m range and descends the far side to sea level, having rained out its water above cloud base.

*Up.* LCL at $125\times5 = 625$ m, where the temperature is $20 - 9.77\times0.625 = 13.9\ ^\circ\mathrm{C}$. From there to 3000 m the ascent is moist; taking $\Gamma_m \approx 5.0$ K km⁻¹ over that layer,

$$T_{\text{summit}} = 13.9 - 5.0\times2.375 = 13.9 - 11.9 = 2.0\ ^\circ\mathrm{C}.$$

*Down.* Dry all the way (the water is gone), so it warms at the full 9.77:

$$T_{\text{leeward}} = 2.0 + 9.77\times3.0 = 2.0 + 29.3 = 31.3\ ^\circ\mathrm{C}.$$

The air arrives **11 K warmer** than it left, and far drier: it lost its moisture at 2 °C and is now at 31 °C, so its relative humidity has collapsed. The asymmetry is entirely because ascent was moist and descent was dry — the mountain skimmed off the latent heat as rain on the windward side and handed back only the sensible heat on the lee side. This is the physics of the Cascades, the Andes, and every desert that sits behind a mountain range.

## Watch out

- **You might think** $\Gamma_m$ is a constant like $\Gamma_d$. **Actually** it depends on $T$ and $p$ through $w_s$, ranging from 3.5 K km⁻¹ in warm moist air to nearly 9.8 in cold dry air. Quoting "6 K km⁻¹" is a mid-troposphere convenience; near the surface in the tropics it is badly wrong.
- **You might think** latent heat is *added* to a rising parcel from outside. **Actually** nothing enters the parcel — the parcel carried the energy up as vapor. Condensation converts the parcel's own latent energy into sensible heat. Total energy is unchanged; only its form is. That is why "moist adiabatic" is still called adiabatic.
- **You might think** the LCL is where clouds form because that is where relative humidity hits 100 percent in the *environment*. **Actually** it is the level where a *lifted parcel* reaches saturation. The environment at that height may be quite dry — indeed usually is, which is why the cloud is a discrete puffy object with clear air around it rather than a uniform haze.
- **You might think** condensation and evaporation are symmetric, so descending air just reverses the ascent. **Actually** only if the condensate is carried along (a *reversible* moist adiabat). If the rain falls out — a *pseudoadiabat*, which is what real storms do — the descent has nothing to evaporate and follows the dry adiabat instead. That irreversibility is exactly what Example 2 exploits.

## One-liner

> Saturation capacity climbs about 7 percent per kelvin, so lifting moist air releases a flood of latent heat that softens its cooling from 9.8 to as little as 3.5 K per kilometre — and cloud base sits 125 m up for every kelvin of dew-point depression.

## Problems

**P1 (🟢)** A morning sounding gives $T = 22$ °C and $T_d = 14$ °C. (a) Estimate the height of cloud base. (b) What is the parcel's temperature at cloud base?

**P2 (🟡)** Using $e_s(20\ ^\circ\mathrm{C}) = 23.4$ hPa, estimate $e_s(25\ ^\circ\mathrm{C})$ two ways: (a) with the 7-percent-per-kelvin rule; (b) with the integrated Clausius–Clapeyron formula. Compare to the measured value of 31.7 hPa and say which method is better and why.

**P3 (🔴, optional)** A saturated parcel at 15 °C and 850 hPa has $w_s = 11.5\ \mathrm{g\,kg^{-1}}$. (a) Evaluate $\Gamma_m$ from the boxed formula, using $\Gamma_d = 9.77\ \mathrm{K\,km^{-1}}$, $L_v = 2.5\times10^{6}$, $R_d = 287$, $c_p = 1004$, $\varepsilon = 0.622$. (b) State which of the two correction terms — numerator or denominator — is doing the work, and what each represents physically.

<details>
<summary>Solutions</summary>

**P1** (a) Depression $= 22 - 14 = 8$ K, so $z_{\mathrm{LCL}} = 125 \times 8 = 1000\ \mathrm{m}$.

(b) The ascent to the LCL is unsaturated, hence dry adiabatic:

$$T = 22 - 9.77 \times 1.0 = 12.2\ ^\circ\mathrm{C}.$$

*Check.* Cross-check with the dew point, which should have fallen to meet it: $14 - 1.78\times1.0 = 12.2\ ^\circ\mathrm{C}$. The two agree exactly, which is the definition of the LCL — and confirms that the 125 m per kelvin rule is just those two slopes converging.

**P2** (a) Seven percent per kelvin, compounded over 5 K:

$$e_s(25) \approx 23.4 \times (1.07)^5 = 23.4 \times 1.403 = 32.8\ \mathrm{hPa}.$$

(b) Clausius–Clapeyron with $T_0 = 293.15$ K, $T = 298.15$ K:

$$\frac{L_v}{R_v}\left(\frac{1}{293.15}-\frac{1}{298.15}\right) = 5417 \times (3.4112 - 3.3540)\times10^{-3} = 5417 \times 5.722\times10^{-5} = 0.3100,$$

$$e_s(25) = 23.4\,e^{0.3100} = 23.4 \times 1.3634 = 31.9\ \mathrm{hPa}.$$

The integrated formula (31.9) beats the rule of thumb (32.8) against the measured 31.7 hPa. The reason is that the 7-percent figure is the fractional rate evaluated at 288 K; the rate $L_v/(R_vT^2)$ *falls* with temperature (6.0 percent per kelvin at 300 K, from the $T^2$ in the denominator), so compounding at 7 percent over a warm interval overshoots. Clausius–Clapeyron handles the varying rate correctly.

**P3** (a) With $T = 288.15$ K and $w_s = 0.0115$:

Numerator term: $$\frac{L_v w_s}{R_d T} = \frac{2.5\times10^{6}\times0.0115}{287\times288.15} = \frac{28\,750}{82\,700} = 0.348.$$

Denominator term: $$\frac{L_v^2 w_s\varepsilon}{c_pR_dT^2} = \frac{(2.5\times10^{6})^2\times0.0115\times0.622}{1004\times287\times288.15^2} = \frac{4.470\times10^{10}}{2.393\times10^{10}} = 1.868.$$

$$\Gamma_m = 9.77 \times \frac{1.348}{2.868} = 9.77 \times 0.470 = 4.6\ \mathrm{K\,km^{-1}}.$$

(b) **The denominator dominates** — 1.868 against the numerator's 0.348, more than five times larger. That term carries the $L_v^2$ and is the latent-heat feedback proper: it measures how much heat is released per kelvin of cooling, because $dw_s/dT$ itself contains a factor of $L_v$ from Clausius–Clapeyron. So one $L_v$ comes from "heat released per gram condensed" and the second from "grams condensed per kelvin" — and their product is why moisture is able to halve the lapse rate. The numerator's smaller term is a correction for the fact that the parcel's mass and gas constant are slightly altered by the water it carries.

*Check.* The answer 4.6 K km⁻¹ sits between the tabulated 4.8 (10 °C, 800 hPa) and 4.1 (20 °C, 900 hPa) values, as it must for a parcel at 15 °C and 850 hPa.

</details>

## Flashback

**From Lesson 1.3 (Adiabatic parcels & the dry adiabatic lapse rate):** A parcel of unsaturated air at 291 K is forced downward from 2.2 km to the surface by subsiding air over a high-pressure system. (a) What is its temperature on arrival? (b) The surrounding surface air is at 305 K. Is the arriving parcel warmer or colder than its surroundings, and what does that imply for whether the subsidence can continue?

<details>
<summary>Solution</summary>

(a) Descent warms a dry parcel at $\Gamma_d$:

$$T = 291 + 9.77\times2.2 = 291 + 21.5 = 312.5\ \mathrm{K}.$$

(b) The parcel arrives at 312.5 K against surroundings at 305 K — **7.5 K warmer**, hence *less* dense and positively buoyant. It resists being pushed further down; the subsidence must be actively forced by the large-scale circulation rather than happening spontaneously.

This is exactly why subsidence inversions form under a high: sinking air warms so effectively that it ends up warmer than the surface air it is pressing down on, creating a lid of warm air aloft with cooler air trapped beneath. That lid is what traps haze and smog over a stagnant high-pressure system.

*Check.* Sign discipline: descending means $\Delta z < 0$, and $\Delta T = -\Gamma_d\Delta z > 0$ — warming, as it must be. The parcel's $\theta$ is unchanged at $\theta \approx 312.5$ K (it arrives near 1000 hPa), while the surroundings' surface $\theta \approx 305$ K, confirming the parcel is the lighter air.

</details>

## Connections

- **Backward:** the ceiling $e_s(T)$ makes concrete the saturation implied by [2.1](02-01-humidity-variables.md)'s relative humidity and dew point; the derivation of $\Gamma_m$ is [1.3](01-03-adiabatic-parcels-dry-lapse-rate.md)'s derivation with one extra source term, and $\theta_e$ repairs [1.4](01-04-potential-temperature.md)'s $\theta$.
- **Forward:** [2.3](02-03-cloud-precipitation-formation.md) asks what actually happens to the condensate the moment saturation is reached; [2.4](02-04-stability-parcel-theory-cape.md) compares the moist adiabat with the environment to find the CAPE that a storm converts into updraft speed.
- **Sideways (climate physics):** the 7-percent-per-kelvin rule is the origin of the water-vapor feedback, the largest positive feedback in the climate system — warming raises the atmosphere's water content, and water vapor is itself a greenhouse gas. [`climate-science`](../../climate-science/syllabus.md) takes the same Clausius–Clapeyron relation derived here and turns it into a feedback parameter.
