# Atmospheric Science · Lesson 2.4: Stability, parcel theory & CAPE

> ⏱ ~15 min · Module 2: Moisture, clouds & stability · Builds on: [2.2 Saturation & the moist adiabatic lapse rate](02-02-saturation-moist-adiabatic-lapse-rate.md), [1.4 Potential temperature](01-04-potential-temperature.md) · Unlocks: 3.2 (energy budget), 4.5 (fronts & cyclones)

## Why this matters

This is the payoff lesson of Module 2, and the one a forecaster uses every day. Everything so far has been machinery: two lapse rates, a moisture inventory, a condensation level. Put them on one diagram and you can answer the question that decides whether an afternoon is calm or catastrophic — *if I lift this air, does it come back?* The answer is a number, **CAPE**, measured in joules per kilogram, and it is literally the energy per unit mass available to a thunderstorm. Two thousand joules per kilogram is a severe-weather day. The same construction also explains the strangest fact about severe weather: the atmosphere usually stores that energy for hours under a lid, doing nothing at all, and then releases it in twenty minutes.

## The idea

Take a sounding — the environment's temperature at every height, from a balloon. Take a parcel from near the surface and lift it on paper, dry-adiabatically until it saturates, moist-adiabatically thereafter. Now compare parcel to environment at every level. Warmer than its surroundings means lighter, so it accelerates upward; colder means it sinks back. That comparison, level by level, is the whole of parcel theory.

Three levels come out of the comparison, and they always appear in this order on an unstable day:

- **LCL** — the *lifting condensation level*, where the parcel saturates and cloud base forms. Above it the parcel switches from cooling at 9.8 to cooling at 4–6 K km⁻¹.
- **LFC** — the *level of free convection*, where the parcel finally becomes warmer than the environment. Below it the parcel is negatively buoyant and has to be *pushed*. Above it, it goes on its own.
- **EL** — the *equilibrium level*, high up, where the parcel finally cools back to the environment's temperature. This is where the storm's anvil spreads out, typically at or just below the tropopause.

Between the surface and the LFC the parcel is heavy, and the energy you must spend pushing it there is **CIN** (convective inhibition) — the lid. Between the LFC and the EL the parcel is light, and the energy it gains is **CAPE**. A day with big CAPE and no CIN gives scattered ordinary storms all afternoon, because nothing is stored. A day with big CAPE *and* a firm CIN gives nothing at all until some trigger — a front, a mountain, a sea breeze, the last heating of the day — punches a parcel through the lid, at which point the entire stored 2000 J kg⁻¹ discharges at once. That is how the worst storms are made: the lid is not the enemy of severe weather, it is the reason severe weather exists.

**The stability classification** falls out of the same comparison, and there are only three cases worth naming, set by where the environmental lapse rate sits relative to the two adiabats:

- $\Gamma < \Gamma_m$: **absolutely stable**. Nothing rises, wet or dry.
- $\Gamma > \Gamma_d$: **absolutely unstable**. Everything rises. So violent it destroys itself in minutes; found only in shallow superheated layers near the ground.
- $\Gamma_m < \Gamma < \Gamma_d$: **conditionally unstable**. Stable to a dry parcel, unstable to a saturated one. This is the ordinary state of the troposphere, and "the condition" is whether the parcel gets lifted to its LFC.

## The formal version

**Buoyancy.** A parcel of density $\rho'$ in an environment of density $\rho$ feels, per unit mass, the net of gravity and the pressure gradient supporting the environment:

$$B = g\,\frac{\rho - \rho'}{\rho'} = g\,\frac{T_v' - T_v}{T_v},$$

where the second form follows from the gas law at equal pressure, and uses the **virtual** temperatures of [2.1](02-01-humidity-variables.md) because a moist parcel is lighter than a dry one at the same $T$ — see [virtual temperature](../reference.md#virtual-temperature). *In words: buoyant acceleration is $g$ times the fractional virtual-temperature excess.* A 2 K excess at 280 K gives $B = 9.81 \times 2/280 = 0.070\ \mathrm{m\,s^{-2}}$ — less than one percent of gravity, which is why convection is slow to start and why an inch of temperature error in a sounding matters.

**Stability criteria.** Compare a parcel's lapse rate with the environment's (the three are kept apart on the [reference card](../reference.md#the-three-lapse-rates)):

| Condition | Name | Dry parcel | Saturated parcel |
|---|---|---|---|
| $\Gamma < \Gamma_m$ | absolutely stable | stable | stable |
| $\Gamma = \Gamma_m$ | saturated neutral | stable | neutral |
| $\Gamma_m < \Gamma < \Gamma_d$ | **conditionally unstable** | stable | unstable |
| $\Gamma = \Gamma_d$ | dry neutral | neutral | unstable |
| $\Gamma > \Gamma_d$ | absolutely unstable | unstable | unstable |

Equivalently, in the language of [1.4](01-04-potential-temperature.md): $d\theta/dz > 0$ is stable to dry ascent, and $d\theta_e/dz > 0$ is stable to saturated ascent. There is one further case worth a name. If a whole *layer* has $d\theta_e/dz < 0$ — dry air above moist air — then lifting the entire layer bodily (as a front or a mountain does) saturates the bottom before the top and destabilizes it. That is **convective (potential) instability**, and it is the classic precursor to a squall line.

**CAPE and CIN.** Integrate the buoyancy over the depth where it is positive:

$$\boxed{\ \mathrm{CAPE} = \int_{\mathrm{LFC}}^{\mathrm{EL}} g\,\frac{T_v' - T_v}{T_v}\,dz\ }\qquad \boxed{\ \mathrm{CIN} = \int_{\mathrm{sfc}}^{\mathrm{LFC}} g\,\frac{T_v - T_v'}{T_v}\,dz\ }$$

both in J kg⁻¹, and both equal to *areas* on a thermodynamic diagram between the parcel path and the environment curve — which is why forecasters read them by eye off a skew-T. Rough scale:

| CAPE | Verdict |
|---|---|
| under 500 | little or no convection |
| 500–1500 | ordinary showers and thunderstorms |
| 1500–2500 | strong storms, severe possible |
| over 2500 | severe likely, given a trigger and shear |

**Updraft speed.** If all of the CAPE went into kinetic energy, then $\tfrac12 w^2 = \mathrm{CAPE}$, so

$$w_{\max} = \sqrt{2\,\mathrm{CAPE}}.$$

For CAPE = 2500 this gives 71 m s⁻¹. Observed maxima are roughly *half* that, and the discrepancy is instructive: the parcel is dragged down by the weight of the condensed water it carries (**water loading**), diluted by **entrainment** of drier environmental air across its edges, and slowed by the **pressure perturbation** it must push against as it displaces the air above. Parcel theory is an upper bound, not a prediction — but it is the right upper bound, and halving it is a serviceable forecast rule.

## Picture

![A sounding with the environment cooling at 7 K per km to a tropopause at 11 km, and a parcel lifted from 28 degrees C following the dry adiabat to the LCL at 1.1 km, then the moist adiabat, crossing the environment at the LFC near 2.3 km and returning to it at the equilibrium level near 11.4 km; the small negative area below the LFC is labelled CIN and the large positive area above it is labelled CAPE](assets/02-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — classify a sounding).** An environment has $\Gamma = 5.0$ K km⁻¹ in one layer and $\Gamma = 8.5$ K km⁻¹ in another. Taking $\Gamma_m = 6.0$ and $\Gamma_d = 9.77$ K km⁻¹, classify each.

*First layer:* $5.0 < 6.0 = \Gamma_m$, so $\Gamma < \Gamma_m < \Gamma_d$ — **absolutely stable**. Both a dry and a saturated parcel lifted here end up colder than their surroundings and sink back. Nothing convects, saturated or not.

*Second layer:* $6.0 < 8.5 < 9.77$, so $\Gamma_m < \Gamma < \Gamma_d$ — **conditionally unstable**. A dry parcel cools at 9.77 and loses (it arrives $9.77 - 8.5 = 1.3$ K colder per kilometre); a saturated parcel cools at 6.0 and wins (it arrives $8.5 - 6.0 = 2.5$ K warmer per kilometre). Whether anything happens depends entirely on whether a parcel can be lifted to saturation and then to its LFC.

**Example 2 (why you'd care — reading a severe-weather day).** A summer sounding: surface at 1000 hPa, $T = 28$ °C, $T_d = 19$ °C, environmental lapse rate 7.0 K km⁻¹ up to a tropopause at 11 km. Lift a surface parcel.

*LCL.* Depression $28 - 19 = 9$ K, so $z_{\mathrm{LCL}} = 125\times9 = 1125$ m — cloud base near 1.1 km.

*Below the LCL.* The parcel cools at 9.77 against the environment's 7.0, so it falls behind by 2.77 K km⁻¹ and is 3.1 K colder at cloud base. It is negatively buoyant the whole way. Integrating the deficit gives $\mathrm{CIN} \approx 120\ \mathrm{J\,kg^{-1}}$.

*Above the LCL.* Now the parcel cools at $\Gamma_m \approx 4.5$ K km⁻¹ (it is warm and moist), gaining 2.5 K km⁻¹ on the environment. It erases its 3.1 K deficit after about 1.2 more km, so the **LFC is near 2.3 km**. From there it accelerates, staying warmer than the environment all the way to the tropopause; numerical integration gives an **EL near 11.4 km** and

$$\mathrm{CAPE} \approx 1850\ \mathrm{J\,kg^{-1}}, \qquad w_{\max} = \sqrt{2\times1850} = 61\ \mathrm{m\,s^{-1}}.$$

*Reading it.* CAPE of 1850 is a strong-storm day. The 120 J kg⁻¹ of CIN is a modest lid — enough to hold the atmosphere quiet through the morning, but a sea breeze or a few more degrees of surface heating will break it. Once broken, a parcel has 1850 J kg⁻¹ to spend; halving the theoretical 61 m s⁻¹ for water loading and entrainment leaves a realistic 30 m s⁻¹ updraft, which is fast enough to suspend hailstones of two or three centimetres, and an anvil at 11 km. That is a severe thunderstorm, described entirely from two surface numbers and a lapse rate.

## Watch out

- **You might think** a stable environment means no clouds. **Actually** stable ascent is exactly how the vast stratiform cloud shields of a warm front form — the air is forced up a sloping isentrope by the large-scale flow, saturates, and makes a sheet of cloud that does not convect. Stability suppresses *convection*, not cloud.
- **You might think** CIN is bad for storms. **Actually** it is often what makes them severe: it lets the boundary layer accumulate heat and moisture all day without leaking it away in small showers, so that when the lid finally breaks the entire reservoir goes into a few cells. A capless, high-CAPE day fizzles into scattered afternoon showers.
- **You might think** $w_{\max} = \sqrt{2\,\mathrm{CAPE}}$ is a forecast. **Actually** it is an upper bound that ignores water loading, entrainment and the perturbation pressure field; real updrafts run near half of it. Never quote the parcel value as an expected speed.
- **You might think** you should use temperature in the buoyancy formula. **Actually** use *virtual* temperature. In the tropics the moisture contribution can be 3 K — comparable to the entire thermal excess driving the updraft — so ignoring it can change a marginal sounding's verdict.

## One-liner

> Lift a parcel on paper: the area where it is colder than its surroundings is the lid you must break (CIN), the area where it is warmer is the fuel you get (CAPE), and $\sqrt{2\,\mathrm{CAPE}}$ is the updraft you would get if nothing went wrong.

## Problems

**P1 (🟢)** A sounding has $\Gamma = 9.0$ K km⁻¹ through a deep layer. Take $\Gamma_d = 9.77$ and $\Gamma_m = 5.5$ K km⁻¹. (a) Classify the layer. (b) A parcel is lifted 2 km while saturated — how much warmer than its environment does it arrive?

**P2 (🟡)** A lifted parcel averages 2.0 K warmer (in virtual temperature) than its environment through a positive-buoyancy layer 3.0 km deep, with a mean environmental temperature of 280 K. (a) Compute the buoyant acceleration and the CAPE. (b) Compute $w_{\max}$, and give the realistic updraft estimate. (c) Classify the day.

**P3 (🔴, optional)** A morning sounding has $\mathrm{CAPE} = 2400\ \mathrm{J\,kg^{-1}}$ and $\mathrm{CIN} = 150\ \mathrm{J\,kg^{-1}}$, with the LFC at 2.6 km. (a) What vertical velocity would a surface parcel need in order to reach the LFC on its own momentum? (b) Boundary-layer thermals reach about 3 m s⁻¹. Will they break the lid? (c) Surface heating through the afternoon raises the surface temperature by 4 K with no change in dew point. Explain qualitatively what happens to the CIN, the LCL and the CAPE, and why forecasters watch the 4 p.m. sounding rather than the morning one.

<details>
<summary>Solutions</summary>

**P1** (a) $5.5 = \Gamma_m < 9.0 < 9.77 = \Gamma_d$, so the layer is **conditionally unstable** — and only just short of absolutely unstable. A steep lapse rate like this, typical of a hot dry continental afternoon, is very close to letting even unsaturated parcels run.

(b) A saturated parcel cools at 5.5 while the environment cools at 9.0, so the parcel gains

$$(9.0 - 5.5)\ \mathrm{K\,km^{-1}} \times 2\ \mathrm{km} = 7.0\ \mathrm{K}.$$

It arrives 7 K warmer than its surroundings — a very large excess, corresponding to a buoyancy of $g\times7/280 = 0.245\ \mathrm{m\,s^{-2}}$, or 2.5 percent of gravity.

*Check.* A dry parcel in the same layer would arrive $(9.77-9.0)\times2 = 1.5$ K *colder*. The 8.5 K swing between the two cases is the whole meaning of "conditional."

**P2** (a) Buoyancy:

$$B = g\,\frac{\Delta T_v}{T_v} = 9.81 \times \frac{2.0}{280} = 0.0701\ \mathrm{m\,s^{-2}}.$$

CAPE is that acceleration integrated over the depth:

$$\mathrm{CAPE} = B\,\Delta z = 0.0701 \times 3000 = 210\ \mathrm{J\,kg^{-1}}.$$

(b) $$w_{\max} = \sqrt{2\times210} = \sqrt{420} = 20.5\ \mathrm{m\,s^{-1}},$$

and halving for water loading and entrainment gives a realistic updraft near **10 m s⁻¹**.

(c) CAPE of 210 J kg⁻¹ is **weak** — below the 500 J kg⁻¹ threshold for organized convection. Expect fair-weather cumulus growing into shallow showers at most; nothing severe. Note the contrast with the intuition from (b): a 10 m s⁻¹ updraft sounds impressive, but it is the *depth* of the buoyant layer as much as its strength that makes a storm, and 3 km is shallow.

*Check.* Units: $\mathrm{m\,s^{-2}} \times \mathrm{m} = \mathrm{m^2\,s^{-2}} = \mathrm{J\,kg^{-1}}$, correct for an energy per unit mass.

**P3** (a) The parcel must convert its kinetic energy into the work of climbing against negative buoyancy, so $\tfrac12 w^2 = \mathrm{CIN}$:

$$w = \sqrt{2\times150} = \sqrt{300} = 17.3\ \mathrm{m\,s^{-1}}.$$

(b) **No, nowhere close.** Thermals at 3 m s⁻¹ carry only $\tfrac12(3)^2 = 4.5\ \mathrm{J\,kg^{-1}}$, about three percent of the 150 J kg⁻¹ needed. Ordinary boundary-layer convection cannot break this lid; something else must — a front, a dryline, orographic lift, or an outflow boundary from a distant storm.

(c) Warming the surface by 4 K with the dew point fixed does three things:

- **CIN shrinks, probably to nothing.** The parcel now starts 4 K warmer and stays warmer relative to the environment all the way up, so the negative area between it and the sounding is largely erased. This is the "cap breaks" moment.
- **The LCL rises.** The dew-point depression grew by 4 K, so $z_{\mathrm{LCL}}$ rises by $125\times4 = 500$ m — cloud bases climb through the afternoon, which is directly observable.
- **CAPE grows.** The parcel path shifts warmward at every level while the environment above the boundary layer is unchanged, so the positive area gets bigger. A morning CAPE of 2400 might be 3200 by late afternoon.

Which is why forecasters watch the afternoon sounding: the morning one shows a capped, quiet atmosphere with an intimidating CAPE, and gives no direct information about whether the lid will break. The interesting question is not how much energy is stored but whether the day's heating will be enough to release it — and that is a comparison between the surface temperature trend and the CIN, both of which change by the hour.

</details>

## Flashback

**From Lesson 2.2 (Saturation & the moist adiabatic lapse rate):** A parcel at the surface has $T = 24$ °C and $T_d = 12$ °C. (a) Find the LCL. (b) Find the parcel's temperature at the LCL, and confirm your answer using the dew point's own descent rate.

<details>
<summary>Solution</summary>

(a) Depression $= 24 - 12 = 12$ K, so $z_{\mathrm{LCL}} = 125 \times 12 = 1500\ \mathrm{m}$.

(b) Dry adiabatic ascent to 1.5 km:

$$T = 24 - 9.77\times1.5 = 24 - 14.7 = 9.3\ ^\circ\mathrm{C}.$$

Confirm via the dew point, which falls at about 1.78 K km⁻¹ as the parcel's vapor is diluted by the falling pressure:

$$T_d = 12 - 1.78\times1.5 = 12 - 2.7 = 9.3\ ^\circ\mathrm{C}.$$

The two meet exactly, as they must at the LCL — saturation is $T = T_d$.

*Check.* The convergence rate is $9.77 - 1.78 = 7.99$ K km⁻¹, and $12/7.99 = 1.50$ km, reproducing (a) independently. This is the derivation of the 125 m per kelvin rule rather than an application of it.

</details>

## Connections

- **Backward:** the parcel path is [1.3](01-03-adiabatic-parcels-dry-lapse-rate.md)'s dry adiabat below the LCL and [2.2](02-02-saturation-moist-adiabatic-lapse-rate.md)'s moist adiabat above it; the buoyancy uses [2.1](02-01-humidity-variables.md)'s virtual temperature; and the criteria restate [1.4](01-04-potential-temperature.md)'s $d\theta/dz$ test with $\theta_e$ added for the saturated case.
- **Forward:** [3.2](03-02-greenhouse-effect-energy-budget.md) shows that convection is what carries the surface's excess heat upward, keeping the troposphere near a moist adiabat rather than the much steeper profile pure radiation would produce; [4.5](04-05-air-masses-fronts-cyclones.md) supplies the frontal lift that triggers the release of stored CAPE.
- **Sideways (fluid dynamics):** the sign of $d\theta/dz$ deciding overturning is exactly the Rayleigh–Bénard criterion of [`fluid-dynamics` 4.3](../../fluid-dynamics/lessons/04-03-instability-kh-rb.md) — heat a fluid layer from below hard enough and it convects, whether it is a pan of water or a continent of air.
