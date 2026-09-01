# Geophysics · Lesson 4.1: Conduction and the geotherm

> ⏱ ~15 min · Module 4: Heat flow, rheology & geodynamics · Builds on: [`pdes`](../../pdes/syllabus.md), [heat-transfer 2.2](../../heat-transfer/lessons/02-02-semi-infinite-solid.md) · Unlocks: [4.2](04-02-radiogenic-heat-budget.md), [4.3](04-03-cooling-oceanic-lithosphere.md)

## Why this matters

The Earth is hot inside and cold outside, and the temperature profile between them — the **geotherm** — controls almost everything. Whether rock is brittle or ductile ([`geology` 2.4](../../geology/lessons/02-04-how-rock-deforms.md)), where earthquakes can nucleate, how thick the elastic plate is ([2.6](02-06-flexure-of-the-lithosphere.md)), where the mantle melts, and whether convection happens at all — all follow from the geotherm.

Building it is a straightforward application of Fourier's law with a source term, and it works beautifully for the top few tens of kilometres. Then it fails, spectacularly and informatively: extrapolate the conductive geotherm to the core–mantle boundary and you get 72,000 °C against a real value near 4000. **The failure is the discovery of mantle convection**, and it is the cleanest way to establish it.

## The idea

**Heat flows down the temperature gradient, at a rate set by conductivity.** That is Fourier's law, and for the Earth it means the surface heat flux $q_0$ is directly proportional to the near-surface temperature gradient. Measure the gradient in a borehole, measure the rock's conductivity in the lab, multiply: you have the heat flux.

**But the flux is not constant with depth, because rock generates heat.** Uranium, thorium and potassium decay throughout the crust, adding heat continuously. So the flux at the surface exceeds the flux at depth by everything produced in between. **A layer of rock is a distributed heat source, and the geotherm curves as a result.**

**Which gives the geotherm its characteristic shape.** In the heat-producing upper crust it is *curved* — concave, because heat is being added on the way up. Below the sources it is *straight*, because the flux is now constant and the gradient with it. The curvature is not an artefact; it is a direct readout of how much radioactivity is in the rock above.

**Granite is radioactive and basalt is not, which is why continents are different.** Continental crust is enriched in the heat-producing elements by a factor of about a hundred over the mantle, and most of that enrichment is in the upper crust. So continental heat flow has a large radiogenic component; oceanic heat flow is almost entirely heat escaping from below.

**And then the extrapolation fails, which is the point.** Carry the conductive geotherm downward past the lithosphere and it reaches absurd temperatures — well above the melting point of everything — within a few hundred kilometres. Conduction cannot be carrying the heat. Something faster is, and that something is convection. **The kink in the geotherm at about 100 km depth is the base of the plate, seen thermally.**

## The formal version

**Fourier's law.**

$$q = -k\frac{dT}{dz},$$

with $q$ the heat flux (W/m², positive upward when $T$ increases downward — sign conventions vary, so state yours), $k$ the thermal conductivity (2–3.5 W m⁻¹ K⁻¹ for crustal rock) and $z$ depth.

**Steady-state conduction with sources.** In one dimension with constant $k$ and volumetric heat production $A$ (W/m³):

$$k\frac{d^2T}{dz^2} + A = 0.$$

*In words: the divergence of the heat flux equals what is being produced.* Integrating once with surface flux $q_0$:

$$q(z) = q_0 - Az.$$

*In words: the flux decreases downward by exactly the amount produced above.* Integrating again with surface temperature $T_0$:

$$\boxed{\ T(z) = T_0 + \frac{q_0}{k}z - \frac{A}{2k}z^2\ }$$

**Two-layer version.** If heat production is confined to a layer of thickness $D$ and the rock below has $A=0$:

$$z \le D:\quad T(z) = T_0 + \frac{q_0}{k}z - \frac{A}{2k}z^2, \qquad z > D:\quad \frac{dT}{dz} = \frac{q_0 - AD}{k} = \frac{q_r}{k}.$$

The quantity $q_r = q_0 - AD$ is the **reduced heat flow** — what is coming from below the radiogenic layer.

**The linear heat-flow–heat-production relation.** Across a geological province, surface heat flow and surface heat production satisfy

$$q_0 = q_r + A_0 D.$$

*In words: plot measured heat flow against measured surface radioactivity for many sites in one province, and you get a straight line whose intercept is the heat coming from the mantle and whose slope is the thickness of the enriched layer.* This is an elegant piece of inference: two quantities measurable at the surface determine a depth you cannot see.

**Typical values.**

| Quantity | Continental | Oceanic |
|---|---|---|
| surface heat flow $q_0$ | 65 mW/m² | 100 mW/m² (age-dependent) |
| reduced heat flow $q_r$ | 25–35 mW/m² | — |
| upper-crustal $A$ | 1–3 μW/m³ | ~0.5 μW/m³ |
| mantle $A$ | ~0.02 μW/m³ | ~0.02 μW/m³ |
| conductivity $k$ | 2.5–3.0 W m⁻¹ K⁻¹ | 2.5–3.5 |

Global total heat loss: about **46 TW**.

**Where conduction stops.** Below the lithosphere the mantle convects, and a vigorously convecting fluid is nearly **adiabatic** — its temperature rises with depth only because of compression:

$$\left(\frac{dT}{dz}\right)_{\text{ad}} = \frac{\alpha g T}{c_p} \approx 0.3\ \mathrm{K\,km^{-1}},$$

against a conductive gradient of 15–25 K/km. *In words: the convecting mantle is nearly isothermal compared with the lithosphere.* The base of the lithosphere is where the conductive geotherm meets the mantle adiabat, at about 1300 °C.

## Picture

![Left: a plot of temperature against depth. The blue geotherm is curved in the top 10 kilometres, labelled curved because radiogenic heat is being added, then straight below, labelled straight because there are no more sources so the flux is constant. Dashed lines mark 10 km and 35 km depth, and the profile reaches 210 degrees at 10 km and 610 at the Moho. A note gives q of z equals q-zero minus A z, the flux falling as you descend past the heat-producing layer. Right: the same profile continued deeper. A dashed coral line continues the conductive gradient and is labelled as reaching 1650 degrees at 100 km and 72,000 at the core. The solid blue line instead bends sharply at a marked point at 100 km and 1300 degrees, labelled base of the plate, and continues nearly flat along an adiabat of 0.3 degrees per kilometre. A closing note says the kink is not a fudge but where conduction stops and convection takes over](assets/04-01-fig1.svg)

The conductive calculation is right, and the fact that it gives an impossible answer is the result.

## Worked examples

**Example 1 (mechanical — building a continental geotherm).** Take $T_0 = 10$ °C, $q_0 = 60\ \mathrm{mW\,m^{-2}}$, $k = 2.5\ \mathrm{W\,m^{-1}\,K^{-1}}$, and heat production $A = 2.0\ \mathrm{\mu W\,m^{-3}}$ confined to the top 10 km. Find the temperature at 10 km and at the Moho (35 km), and the reduced heat flow.

*Top layer.*
$$T(10\ \mathrm{km}) = 10 + \frac{0.060}{2.5}\times10^{4} - \frac{2.0\times10^{-6}}{2\times2.5}\times(10^{4})^2$$
$$= 10 + 0.024\times10^{4} - 4.0\times10^{-7}\times10^{8} = 10 + 240 - 40 = 210\ ^\circ\mathrm{C}.$$

Note the size of the curvature term: 40 °C out of 250, a 16 percent effect. Ignoring heat production would overestimate the temperature at 10 km by that much.

*Reduced heat flow.*
$$q_r = q_0 - AD = 0.060 - 2.0\times10^{-6}\times10^{4} = 0.060 - 0.020 = 0.040\ \mathrm{W\,m^{-2}} = 40\ \mathrm{mW\,m^{-2}}.$$

**A third of the surface heat flow is generated in the top 10 km of rock.**

*Below the layer.*
$$\frac{dT}{dz} = \frac{q_r}{k} = \frac{0.040}{2.5} = 0.016\ \mathrm{K\,m^{-1}} = 16\ \mathrm{K\,km^{-1}}.$$
$$T(35\ \mathrm{km}) = 210 + 16\times25 = 210 + 400 = 610\ ^\circ\mathrm{C}.$$

A Moho temperature of about 600 °C is typical of stable continental crust, and it matters: it is well below the wet granite solidus, which is why stable shields do not melt.

**Example 2 (why you'd care — the extrapolation that discovered convection).** Continue the geotherm of Example 1 downward at 16 K/km. What temperature does it predict at 100 km, at 400 km, and at the core–mantle boundary?

$$T(100\ \mathrm{km}) = 610 + 16\times65 = 610 + 1040 = 1650\ ^\circ\mathrm{C}.$$
$$T(400\ \mathrm{km}) = 610 + 16\times365 = 610 + 5840 = 6450\ ^\circ\mathrm{C}.$$
$$T(2891\ \mathrm{km}) = 610 + 16\times2856 = 610 + 45{,}700 = 46{,}300\ ^\circ\mathrm{C}.$$

*Compare with reality.* The mantle at 100 km is about 1300 °C; at 400 km about 1500 °C; the core–mantle boundary about 4000 °C. **The prediction is wrong by an order of magnitude by 400 km and by more than a factor of ten at the core.** It also exceeds the melting point of mantle rock — about 1600 °C at 100 km, rising with pressure — before it even leaves the upper mantle, which would liquefy the entire planet.

*What has gone wrong.* Nothing, in the physics. The calculation correctly states what the temperature would be **if conduction were the only mechanism**. Since the answer is impossible, conduction is not the only mechanism, and the alternative is convection: the mantle physically moves, carrying heat with it far more efficiently than conduction ever could.

*And convection has a signature the calculation can predict.* A vigorously convecting fluid is stirred so effectively that its temperature profile approaches the **adiabat** — the profile a parcel would follow if moved up and down without exchanging heat, which for the mantle is about 0.3 K/km. That is fifty times flatter than the conductive gradient. Splicing the two profiles together:

- conduction from the surface to about 100 km, steep, rising to roughly 1300 °C;
- the adiabat below, nearly flat, rising only $0.3\times2800 \approx 840$ °C over the whole rest of the mantle.

Total at the core–mantle boundary: about 2100 °C from this crude splice, against a real 4000 — now the right order of magnitude, with the remaining discrepancy coming from a thermal boundary layer at the base of the mantle, which is a real and important feature ([5.4](05-04-the-core.md)).

*The general lesson is worth stating explicitly.* **A model that fails by an order of magnitude is more useful than one that fails by ten percent**, because the failure identifies a missing mechanism rather than a missing correction. And the depth at which the failure sets in — where the conductive geotherm would exceed the adiabat — is not arbitrary: it *is* the base of the lithosphere. The plate's thickness is a thermal boundary layer, which is why it thickens as $\sqrt{t}$ as the ocean floor ages ([4.3](04-03-cooling-oceanic-lithosphere.md)) and why the elastic thickness of [2.6](02-06-flexure-of-the-lithosphere.md) tracks an isotherm.

## Watch out

- **You might think** heat flow is measured directly. **Actually** it is a product of two measurements — the temperature gradient in a borehole and the thermal conductivity of the recovered core — each with its own errors, and both are vulnerable to disturbance. Groundwater flow, recent erosion or sedimentation, and past climate change all perturb the shallow gradient, which is why heat-flow measurements are made below a few hundred metres wherever possible.
- **You might think** the curvature of the geotherm is a small correction. **Actually** in radiogenic continental crust it accounts for tens of degrees within the first 10 km and half the surface heat flow in some provinces. Ignoring $A$ in a continental setting is a first-order error.
- **You might think** the mantle adiabat means the mantle is nearly isothermal, so temperature does not matter down there. **Actually** the adiabat is flat only in *potential* temperature; the absolute temperature still rises by roughly 800–900 K across the mantle, which changes viscosity by orders of magnitude ([4.6](04-06-mantle-rheology-post-glacial-rebound.md)) and controls where phase transitions occur ([5.2](05-02-mineral-physics-transition-zone.md)).

## One-liner

> Fourier's law plus radiogenic heating gives a geotherm that curves through the crust and straightens below it — and the fact that extrapolating it to the core gives 46,000 °C is how you know the mantle convects.

## Problems

**P1 (🟢)** A site has $T_0 = 5$ °C, $q_0 = 75\ \mathrm{mW\,m^{-2}}$, $k = 3.0\ \mathrm{W\,m^{-1}\,K^{-1}}$, and $A = 1.5\ \mathrm{\mu W\,m^{-3}}$ in the top 12 km. (a) Compute the temperature at 12 km. (b) Compute the reduced heat flow. (c) Compute the gradient and the temperature at 40 km.

**P2 (🟡)** Across a geological province, heat-flow and surface heat-production measurements give the following pairs: $(A_0 = 0.8\ \mathrm{\mu W\,m^{-3}},\ q_0 = 42\ \mathrm{mW\,m^{-2}})$, $(2.0,\ 54)$, $(3.5,\ 69)$. (a) Fit the linear relation $q_0 = q_r + A_0D$ and find $q_r$ and $D$. (b) Interpret both numbers physically. (c) A fourth site gives $A_0 = 2.6$, $q_0 = 78\ \mathrm{mW\,m^{-2}}$. Comment on whether it fits, and give two possible explanations if not.

**P3 (🔴, bridges to [4.4](04-04-mantle-convection-rayleigh-number.md))** (a) A conductive geotherm has a gradient of 20 K/km below the radiogenic layer. Compute the depth at which it reaches 1300 °C, starting from 400 °C at 20 km. (b) Compute the temperature this conductive profile would predict at 660 km. (c) Compute the temperature the mantle adiabat (0.3 K/km) predicts at 660 km, starting from 1300 °C at your answer to (a). (d) The observed temperature at 660 km is about 1600 °C. Comment on which model matches, and state what the near-agreement implies about how much of the mantle is convecting.

<details>
<summary>Solutions</summary>

**P1** (a) $$T(12\ \mathrm{km}) = 5 + \frac{0.075}{3.0}\times1.2\times10^{4} - \frac{1.5\times10^{-6}}{2\times3.0}\times(1.2\times10^{4})^2$$
$$= 5 + 0.025\times1.2\times10^{4} - 2.5\times10^{-7}\times1.44\times10^{8} = 5 + 300 - 36 = 269\ ^\circ\mathrm{C}.$$

(b) $$q_r = q_0 - AD = 0.075 - 1.5\times10^{-6}\times1.2\times10^{4} = 0.075 - 0.018 = 0.057\ \mathrm{W\,m^{-2}} = 57\ \mathrm{mW\,m^{-2}}.$$

(c) $$\frac{dT}{dz} = \frac{0.057}{3.0} = 0.019\ \mathrm{K\,m^{-1}} = 19\ \mathrm{K\,km^{-1}},$$
$$T(40\ \mathrm{km}) = 269 + 19\times28 = 269 + 532 = 801\ ^\circ\mathrm{C}.$$

Notably hotter than Example 1's Moho — this is a warmer province, with both higher surface flux and higher reduced heat flow.

**P2** (a) Fit a straight line through the three points. Using the first and third:

$$D = \frac{\Delta q_0}{\Delta A_0} = \frac{(69-42)\times10^{-3}}{(3.5-0.8)\times10^{-6}} = \frac{27\times10^{-3}}{2.7\times10^{-6}} = 1.0\times10^{4}\ \mathrm{m} = 10\ \mathrm{km}.$$

$$q_r = q_0 - A_0D = 42\times10^{-3} - 0.8\times10^{-6}\times10^{4} = 0.042 - 0.008 = 0.034\ \mathrm{W\,m^{-2}} = 34\ \mathrm{mW\,m^{-2}}.$$

Check the middle point: $q_r + A_0D = 34 + 2.0\times10 = 54\ \mathrm{mW\,m^{-2}}$. ✓ All three are collinear.

(b) $D = 10$ km is the **thickness of the enriched upper-crustal layer** — the depth over which the surface heat production persists before dropping to background. $q_r = 34\ \mathrm{mW\,m^{-2}}$ is the **reduced heat flow**: the heat arriving from below the crust, which is the mantle's contribution plus whatever the lower crust supplies.

The elegance is worth pausing on. Two surface measurements, repeated across a province, have determined a depth of 10 km and separated the crustal and mantle contributions to the planet's heat loss — without a borehole reaching anywhere near 10 km.

(c) Predicted for $A_0 = 2.6$: $q_0 = 34 + 2.6\times10 = 60\ \mathrm{mW\,m^{-2}}$, against the observed 78. **A discrepancy of 18 mW/m², far outside the scatter of the other three.**

Two explanations:

- **This site belongs to a different province.** The relation $q_0 = q_r + A_0D$ holds within a province with a common tectonic history; a site with a higher reduced heat flow — younger, thinner lithosphere, or recent tectonic activity — lies on a different line with the same slope but a larger intercept. Plotting it with the others silently merges two populations.
- **The surface sample is not representative of the enriched layer.** The relation assumes surface heat production stands in for the whole layer above $D$. A site where a thin, unusually depleted unit overlies more radiogenic rock at depth would show low $A_0$ and high $q_0$ — the reverse here — while an unrepresentative outcrop of any kind breaks the correlation.

A third, more prosaic possibility deserves mention: **the heat-flow measurement is disturbed** by groundwater circulation or recent erosion. Since the residual is positive and large, an advective addition of heat is a live candidate. Distinguishing these requires the regional context, not more precision at the site.

**P3** (a) $$\Delta T = 1300 - 400 = 900\ \mathrm{K}, \qquad \Delta z = \frac{900}{20} = 45\ \mathrm{km},$$
$$z = 20 + 45 = 65\ \mathrm{km}.$$

(b) $$T(660) = 400 + 20\times(660-20) = 400 + 12{,}800 = 13{,}200\ ^\circ\mathrm{C}.$$

(c) From 1300 °C at 65 km, along an adiabat:
$$T(660) = 1300 + 0.3\times(660-65) = 1300 + 178 = 1478\ ^\circ\mathrm{C}.$$

(d) The observed 1600 °C is close to the **adiabatic** prediction of 1478 and nowhere near the conductive 13,200. The conductive model is wrong by nearly a factor of ten; the adiabatic model is low by 8 percent.

**So the mantle between roughly 65 km and 660 km is convecting**, and convecting vigorously enough that its temperature profile is close to adiabatic. That is a strong statement: a fluid layer only follows its adiabat if convective stirring overwhelms conduction throughout, which requires a large Rayleigh number ([4.4](04-04-mantle-convection-rayleigh-number.md)).

The 122 K shortfall is not noise, and it is worth naming rather than shrugging at. Three contributions: the assumed base-of-lithosphere temperature of 1300 °C is itself uncertain by ±100 K; the adiabatic gradient is not exactly 0.3 K/km, since $\alpha$, $g$ and $c_p$ all vary with depth; and, most interestingly, phase transitions release or absorb latent heat as material passes through them, offsetting the adiabat at 410 and 660 km ([5.2](05-02-mineral-physics-transition-zone.md)). A model that gets within 8 percent while omitting all three is doing well.

</details>

## Flashback

**From Lesson 3.5 (Plate kinematics on a sphere):** Two plates rotate about an Euler pole at $\omega = 0.72^\circ/\mathrm{Myr}$. (a) Compute the relative velocity at 45° from the pole. (b) At 80°. (c) A transform fault at the 45° site trends 118°; give the two possible bearings to the pole.

<details>
<summary>Solution</summary>

(a) $$\omega = 0.72\times\frac{\pi}{180} = 1.2566\times10^{-2}\ \mathrm{rad\,Myr^{-1}}, \qquad \omega R = 1.2566\times10^{-2}\times6371 = 80.1\ \mathrm{km\,Myr^{-1}}.$$
$$v = 80.1\sin45^\circ = 80.1\times0.7071 = 56.6\ \mathrm{km\,Myr^{-1}} = 5.7\ \mathrm{cm\,yr^{-1}}.$$

(b) $$v = 80.1\sin80^\circ = 80.1\times0.9848 = 78.9\ \mathrm{km\,Myr^{-1}} = 7.9\ \mathrm{cm\,yr^{-1}}.$$

(c) The transform lies along a small circle about the pole, so the great circle to the pole is perpendicular to it:

$$118^\circ \pm 90^\circ \;\Rightarrow\; 028^\circ \text{ or } 208^\circ.$$

Resolving the ambiguity needs a second fracture zone elsewhere on the boundary (the two great circles intersect at the pole) or the sense of relative motion across the transform.

</details>

## Connections

- **Backward:** Fourier's law and the steady heat equation are [`pdes`](../../pdes/syllabus.md) and [heat-transfer 2.2](../../heat-transfer/lessons/02-02-semi-infinite-solid.md); the radiogenic source term comes from the decay law of [intro-nuclear-engineering 1.3](../../intro-nuclear-engineering/lessons/01-03-radioactivity-decay-law.md).
- **Forward:** [4.2](04-02-radiogenic-heat-budget.md) accounts for where the 46 TW comes from and how much of it is primordial; [4.3](04-03-cooling-oceanic-lithosphere.md) makes the geotherm time-dependent and derives the $\sqrt{t}$ law; [4.4](04-04-mantle-convection-rayleigh-number.md) makes the convection that Example 2 forced upon us quantitative.
- **Sideways:** [`geology` 5.1](../../geology/lessons/05-01-earths-internal-structure.md) runs exactly this extrapolation argument qualitatively and cites this lesson for the conductive geotherm; the brittle–ductile transition that the geotherm controls is [`geology` 2.4](../../geology/lessons/02-04-how-rock-deforms.md), and the elastic thickness that tracks an isotherm is [2.6](02-06-flexure-of-the-lithosphere.md).
