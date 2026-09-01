# Atmospheric Science · Lesson 1.3: Adiabatic parcels & the dry adiabatic lapse rate

> ⏱ ~15 min · Module 1: Atmospheric structure & thermodynamics · Builds on: [1.2 The hydrostatic equation](01-02-hydrostatic-equation-barometric-law.md), [`thermodynamics-physics` 1.3](../../thermodynamics-physics/lessons/01-03-heat-work-first-law.md) · Unlocks: 1.4 (potential temperature), 2.2 (moist adiabat), 2.4 (stability)

## Why this matters

Everything that happens vertically in the atmosphere — cloud, storm, inversion, clear sky — is decided by a comparison between two numbers: how fast the environment cools with height, and how fast a *lifted parcel of air* cools with height. Lesson 1.1 gave you the first. This lesson derives the second, and it is a genuinely beautiful result: a single constant, $g/c_p$, with no free parameters and no dependence on how fast the air rises, how big the parcel is, or what the weather is doing. Once you have $\Gamma_d = 9.8$ K km⁻¹ you can explain why the leeward side of a mountain range is a desert, why clouds have flat bottoms, and — from Lesson 2.4 onward — why some days the sky sits still and some days it explodes.

## The idea

Imagine a **parcel**: a blob of air, a few hundred metres across, that keeps its identity as it moves. Two idealizations define it, and both are good ones:

1. **It does not exchange heat with its surroundings.** Air is a terrible conductor and turbulent mixing across the parcel's edge is slow compared with how fast it rises. So the process is **adiabatic**: $dq = 0$.
2. **Its pressure instantly matches the surroundings.** Pressure signals travel at the speed of sound, hundreds of times faster than the parcel moves, so any pressure imbalance is erased immediately.

Now lift it. The surrounding pressure drops (Lesson 1.2), so the parcel *expands*. Expanding means pushing the surrounding air outward, which is work — energy the parcel spends. And with no heat coming in to replace it, that energy comes out of the parcel's own internal energy. Less internal energy means lower temperature.

**This is the crux, and it is the thing most people get wrong.** A rising parcel does not cool because the air up there is colder. It would cool by exactly the same amount if the environment were isothermal, or even if the environment got *warmer* with height. It cools because it expands, and it expands because the pressure holding it in has weakened. Cooling on ascent is a pressure effect, not a contact effect.

Push the reverse and you get one of the most dramatic effects in weather: a parcel forced *down* is compressed, work is done *on* it, and it warms — at the same 9.8 K per kilometre. Air dragged down 2 km off a mountain arrives about 20 K warmer than it left. That is a Chinook, a foehn, a Santa Ana.

## The formal version

**Setting up.** Work per unit mass, and let $\alpha \equiv 1/\rho$ be the **specific volume** (m³ kg⁻¹) — the volume occupied by one kilogram of air. The first law from [`thermodynamics-physics` 1.3](../../thermodynamics-physics/lessons/01-03-heat-work-first-law.md), in its enthalpy form, reads

$$dq = c_p\,dT - \alpha\,dp,$$

where $dq$ is heat added per unit mass (J kg⁻¹) and $c_p = 1004\ \mathrm{J\,kg^{-1}\,K^{-1}}$ is the specific heat at constant pressure for dry air. *In words: heat you add either raises the temperature or lets the parcel expand against the pressure, and the split is bookkept by $c_p$.*

(Where the form comes from: the familiar $dq = c_v\,dT + p\,d\alpha$ plus the product rule $d(p\alpha) = p\,d\alpha + \alpha\,dp$ and $c_p = c_v + R_d$. For dry air $c_v = 717$ and indeed $c_p - c_v = 1004 - 717 = 287 = R_d$ — the same 287 as in the gas law, which is not a coincidence.)

**The derivation.** Set $dq = 0$ for the adiabatic parcel:

$$c_p\,dT = \alpha\,dp.$$

Divide by $dz$ and substitute the hydrostatic equation $dp/dz = -\rho g$ from [1.2](01-02-hydrostatic-equation-barometric-law.md), remembering $\alpha = 1/\rho$:

$$c_p\frac{dT}{dz} = \alpha\frac{dp}{dz} = \frac{1}{\rho}\,(-\rho g) = -g.$$

The density cancels completely. Therefore

$$\boxed{\ \Gamma_d \equiv -\left.\frac{dT}{dz}\right|_{\text{parcel}} = \frac{g}{c_p} = \frac{9.81}{1004} = 9.77\times10^{-3}\ \mathrm{K\,m^{-1}} \approx 9.8\ \mathrm{K\,km^{-1}}\ }$$

*In words: a dry parcel moving vertically without exchanging heat changes temperature by 9.8 K for every kilometre, cooling on the way up and warming on the way down.*

Note carefully what is **not** in that formula: no density, no parcel size, no ascent speed, no environmental temperature. Two physical inputs went in — hydrostatic balance (the pressure the parcel expands against) and the first law (what expansion costs) — and only two constants came out.

**The two lapse rates side by side.** Keep the notation straight, because Module 2 lives on the distinction:

| Symbol | Name | What it describes | Typical value |
|---|---|---|---|
| $\Gamma$ | environmental lapse rate | the *surroundings*, measured by a balloon; varies hour to hour | $\approx 6.5$ K km⁻¹ (average) |
| $\Gamma_d$ | dry adiabatic lapse rate | a *moving unsaturated parcel*; a universal constant | 9.8 K km⁻¹ |

That $\Gamma_d > \Gamma$ on an average day is the reason the average atmosphere is stable to dry ascent: a parcel lifted from the surface cools faster than the air it moves into, so it ends up colder, denser, and sinks back.

## Picture

![Left, a parcel rising through falling pressure and swelling as it goes, cooling by expansion at constant mass; right, temperature against height showing the dry adiabat at 9.8 K per km falling away from the shallower 6.5 K per km environment, with the 6.5 K gap at 2 km marked](assets/01-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — lifting a parcel).** A parcel leaves the surface at 293 K and is lifted, unsaturated, to 1.5 km. What is its temperature?

$$T = T_0 - \Gamma_d z = 293 - 9.77\times1.5 = 293 - 14.7 = 278.3\ \mathrm{K}.$$

If the environment follows the standard 6.5 K km⁻¹ from the same 293 K, the surroundings at 1.5 km are $293 - 9.75 = 283.3$ K. The parcel is 5 K **colder** than its surroundings, hence denser, and would sink back if released. Nothing rises here on its own.

**Example 2 (why you'd care — the rain shadow, half of it).** Air is forced over a 2500 m coastal range and descends the far side back to sea level. Suppose that on the way up it rained out its moisture, so it descends dry. How much warmer does it arrive?

$$\Delta T = \Gamma_d \times 2500\ \mathrm{m} = 9.77\times2.5 = 24.4\ \mathrm{K}.$$

The descending air is 24 K warmer than the air that started up the windward slope at the same level. That is the Chinook — a wind that can raise a prairie town's temperature by 20 K in an hour and strip the snow off the ground without melting it into puddles. It is also why the interior side of a mountain range is dry: the air arrives hot, and hot air is far from saturation. (The other half of the rain-shadow story is that the *ascent* is not dry — latent heat release makes it cool more slowly than 9.8, so the descent recovers more heat than the ascent lost. Lesson 2.2 completes it.)

## Watch out

- **You might think** a rising parcel cools by mixing with the colder air around it. **Actually** mixing is excluded by assumption, and the result would be wrong if it weren't: $\Gamma_d$ contains no reference whatever to the environment's temperature. The cooling is expansion work, full stop.
- **You might think** the right heat capacity is $c_v$, since the parcel's volume is what changes. **Actually** it is $c_p$. The parcel changes volume *at whatever pressure the environment imposes*, and the enthalpy form $dq = c_p\,dT - \alpha\,dp$ is the one that takes pressure as the controlled variable. Using $c_v$ would give $g/c_v = 13.7$ K km⁻¹, badly wrong.
- **You might think** $\Gamma_d$ applies to the atmosphere at large. **Actually** it applies only to a parcel *in vertical motion*. The environment sits at whatever profile radiation, convection and advection have left it with — usually about 6.5 K km⁻¹, sometimes inverted, occasionally steeper than 9.8 near a hot desert surface.

## One-liner

> An unsaturated parcel changes temperature by $g/c_p = 9.8$ K per kilometre of vertical motion — cooling by expansion going up, warming by compression coming down, regardless of what the air around it is doing.

## Problems

**P1 (🟢)** A parcel at the surface has $T = 305$ K. It is lifted, remaining unsaturated, to 800 m. Find its temperature. If the environmental lapse rate is 8.0 K km⁻¹, is the parcel warmer or colder than its surroundings at 800 m?

**P2 (🟡)** Mars has $g = 3.71\ \mathrm{m\,s^{-2}}$ and an atmosphere of nearly pure $\mathrm{CO_2}$ with $c_p \approx 860\ \mathrm{J\,kg^{-1}\,K^{-1}}$. (a) Compute the Martian dry adiabatic lapse rate. (b) Explain in one sentence which of the two differences from Earth — the gravity or the heat capacity — does more to change the answer, and in which direction each pushes.

**P3 (🔴, optional)** Show that the dry adiabatic process obeys $T p^{-R_d/c_p} = \text{constant}$, starting from $dq = c_p\,dT - \alpha\,dp = 0$ and the gas law. Do **not** use the hydrostatic equation — the point is that this relation is a property of the parcel's thermodynamics alone, true whether or not the surroundings are hydrostatic.

<details>
<summary>Solutions</summary>

**P1** Parcel: $T = 305 - 9.77\times0.8 = 305 - 7.8 = 297.2$ K.

Environment at 800 m, starting from the same surface temperature: $305 - 8.0\times0.8 = 305 - 6.4 = 298.6$ K.

The parcel is $1.4$ K **colder** than its surroundings — denser, negatively buoyant, and it sinks back. The general rule this illustrates: whenever $\Gamma < \Gamma_d$, a lifted dry parcel ends up colder than the environment, and the layer is stable to dry ascent.

*Check.* The gap should be $(\Gamma_d - \Gamma)z = (9.77 - 8.0)\times0.8 = 1.4$ K, which matches — a useful shortcut worth remembering.

**P2** (a) $\Gamma_{d,\mathrm{Mars}} = g/c_p = 3.71/860 = 4.31\times10^{-3}\ \mathrm{K\,m^{-1}} = 4.3\ \mathrm{K\,km^{-1}}$, less than half of Earth's.

(b) **Gravity dominates.** Mars's gravity is 38 percent of Earth's, a factor of 2.6 reduction; its $c_p$ is 86 percent of Earth's, which *raises* the lapse rate by only a factor of 1.17. Weaker gravity means less work is needed to lift a parcel and less pressure drop per kilometre, so less expansion and less cooling; the slightly smaller heat capacity of $\mathrm{CO_2}$ pushes the other way (a given energy loss buys more cooling) but is far too small to compete.

*Check.* $9.77 \times (3.71/9.81) \times (1004/860) = 9.77 \times 0.378 \times 1.167 = 4.31$ — the two factors reproduce the direct calculation.

**P3** Start from $c_p\,dT = \alpha\,dp$ and eliminate $\alpha$ with the gas law $\alpha = R_dT/p$:

$$c_p\,dT = \frac{R_dT}{p}\,dp \qquad\Longrightarrow\qquad \frac{dT}{T} = \frac{R_d}{c_p}\frac{dp}{p}.$$

Both sides are exact differentials of logarithms, so integrating gives

$$\ln T = \frac{R_d}{c_p}\ln p + \text{const} \qquad\Longrightarrow\qquad \ln\!\left(T p^{-R_d/c_p}\right) = \text{const},$$

and exponentiating, $T p^{-R_d/c_p} = \text{constant}$.

*Check.* Writing $\kappa \equiv R_d/c_p = 287/1004 = 0.286$, this says $T \propto p^{\kappa}$: drop the pressure and the temperature falls with it, as a power law. It is Poisson's equation, and rearranged with a fixed reference pressure it *is* the definition of potential temperature — which is exactly [1.4](01-04-potential-temperature.md). Note that the hydrostatic equation never appeared: $Tp^{-\kappa}$ is conserved by any adiabatic pressure change, in a laboratory piston as much as in the sky. The hydrostatic equation was only needed to convert "per unit pressure change" into "per kilometre."

</details>

## Flashback

**From Lesson 1.1 (Composition & vertical structure):** A balloon reports 283 K at 1 km and 262 K at 4 km. (a) Compute the environmental lapse rate for that layer. (b) The same balloon reports 216 K at 12 km and 219 K at 16 km. Compute the lapse rate there and name the layer it is in.

<details>
<summary>Solution</summary>

(a) $\Gamma = -(262 - 283)/(4 - 1) = 21/3 = 7.0\ \mathrm{K\,km^{-1}}$ — an ordinary tropospheric value, a little steeper than the 6.5 K km⁻¹ average.

(b) $\Gamma = -(219 - 216)/(16 - 12) = -3/4 = -0.75\ \mathrm{K\,km^{-1}}$. The lapse rate is **negative**: temperature rises with height. This is the **stratosphere**, warmed from within by ozone absorbing ultraviolet, and the tropopause must lie somewhere between 4 and 12 km — near 12 km, given the temperature minimum.

*Check.* Sign discipline: in (b) $\Delta T$ is positive over a rise in height, so $\Gamma = -\Delta T/\Delta z$ must come out negative. Any inversion has $\Gamma < 0$, and since $\Gamma_d = +9.8$ always, an inversion is about as far from neutral as a layer can get — it is the most stable arrangement there is.

</details>

## Connections

- **Backward:** the hydrostatic equation from [1.2](01-02-hydrostatic-equation-barometric-law.md) supplied $dp/dz$, and the first law from [`thermodynamics-physics` 1.3](../../thermodynamics-physics/lessons/01-03-heat-work-first-law.md) supplied what expansion costs. The whole derivation is those two facts and one cancellation of $\rho$.
- **Forward:** P3's $Tp^{-\kappa} = \text{const}$ becomes the potential temperature of [1.4](01-04-potential-temperature.md). Adding water vapor's latent heat bends 9.8 down to about 6 K km⁻¹ in [2.2](02-02-saturation-moist-adiabatic-lapse-rate.md), and comparing $\Gamma_d$ with $\Gamma$ is the whole of stability in [2.4](02-04-stability-parcel-theory-cape.md).
- **Sideways (thermodynamics):** the adiabatic relation here is the atmospheric face of the reversible adiabat $pV^{\gamma} = \text{const}$ from [`thermodynamics-physics` 1.4](../../thermodynamics-physics/lessons/01-04-heat-capacities-pv-processes.md), with $\gamma = c_p/c_v = 1004/717 = 1.40$ for diatomic air. The exponent $\kappa = R_d/c_p = (\gamma-1)/\gamma$ is the same number wearing a different hat.
