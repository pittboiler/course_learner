# Geophysics · Lesson 5.2: Mineral physics and the transition zone

> ⏱ ~15 min · Module 5: The deep Earth · Builds on: [5.1](05-01-free-oscillations-earth-density.md), [1.4](01-04-travel-time-curves-deep-earth.md), [4.4](04-04-mantle-convection-rayleigh-number.md) · Unlocks: [5.4](05-04-the-core.md), [4.5](04-05-plate-driving-forces.md)

## Why this matters

[1.4](01-04-travel-time-curves-deep-earth.md) located sharp discontinuities at 410 and 660 km without saying what they are, and [5.1](05-01-free-oscillations-earth-density.md) showed that self-compression cannot explain their density jumps by a factor of fifty. Something changes at those depths, and the question is what.

The answer is that **nothing changes chemically at all.** The same mineral — olivine, the dominant phase of the upper mantle — is squeezed into successively denser crystal structures. The transition zone is one rock wearing three different arrangements.

That distinction is not academic. A chemical boundary sits wherever it happens to sit; a **phase** boundary is a thermodynamic surface, so its depth responds to temperature. Cold rock moves it, and moving it exerts a buoyancy force. **That force is why some subducting slabs stall at 660 km and others do not** — and it is the physics behind the layered-convection debate of [4.4](04-04-mantle-convection-rayleigh-number.md).

## The idea

**Pressure repacks crystals.** Olivine's atomic arrangement is efficient at low pressure and wasteful at high pressure. Around 13.5 GPa — 410 km down — it becomes energetically favourable for the same atoms to sit in the denser spinel-like structure of wadsleyite, and denser still as ringwoodite. Around 23.5 GPa — 660 km — even that gives way, and ringwoodite breaks down into bridgmanite (a silicate perovskite) plus ferropericlase.

**Each repacking is a density jump and a velocity jump**, which is exactly what a seismic discontinuity is. The jumps are sharp because a phase transition happens over a narrow pressure interval, not gradually.

**And each has a Clapeyron slope, which is where the physics gets interesting.** A phase boundary in the pressure–temperature plane has a slope $dP/dT$. If the transition is *exothermic* (releases heat on compression), the slope is positive and cold material transforms at *lower* pressure — so the boundary is pushed **shallower** where it is cold. If *endothermic*, the slope is negative and the boundary is pushed **deeper** where it is cold.

**The 410 is exothermic and the 660 is endothermic**, so in the same cold slab the two boundaries deflect in **opposite directions** — the 410 up, the 660 down. That signature is observed, it is unmistakable, and no chemical boundary could produce it.

**Deflecting a boundary creates a buoyancy force.** Pushing the 660 downward inside a cold slab means the slab's interior is still made of the *less dense* upper-mantle phase while its surroundings at the same depth have already transformed. **The slab is locally buoyant, and that opposes its descent.** At 410 the effect is reversed and aids descent.

**Which resolves an old argument.** The endothermic 660 is not a wall, but it is a real impediment: it imposes a buoyancy penalty of order 10 to 20 percent of the slab's driving force. Some slabs push through and reach the core–mantle boundary; others buckle and pool above 660 for tens of millions of years before eventually sinking. **Tomography sees both** ([1.5](01-05-seismic-tomography.md)), and the phase transition is why.

## The formal version

**Pressure with depth.** Integrating hydrostatic equilibrium, $dP/dz = \rho g$:

| Depth | Pressure |
|---|---|
| 410 km | 13.4 GPa |
| 660 km | 23.4 GPa |
| 2891 km (CMB) | 136 GPa |
| 6371 km (centre) | 364 GPa |

**The olivine sequence.**

| Depth | Transition | $\Delta\rho/\rho$ | Clapeyron slope $\gamma = dP/dT$ |
|---|---|---|---|
| 410 km | olivine → wadsleyite | ~5% | $+2.9\ \mathrm{MPa\,K^{-1}}$ (exothermic) |
| 520 km | wadsleyite → ringwoodite | ~2% | $+4\ \mathrm{MPa\,K^{-1}}$ |
| 660 km | ringwoodite → bridgmanite + ferropericlase | ~8% | $-2\ \text{to}\ -3\ \mathrm{MPa\,K^{-1}}$ (endothermic) |
| ~2700 km | bridgmanite → post-perovskite | ~1.5% | $+8\ \mathrm{MPa\,K^{-1}}$ |

**The Clausius–Clapeyron relation.**

$$\gamma = \frac{dP}{dT} = \frac{\Delta S}{\Delta V},$$

with $\Delta S$ and $\Delta V$ the entropy and volume changes across the transition. *In words: the sign of the slope is the sign of the entropy change, since the volume change is always negative going down.*

**Boundary deflection.** A temperature anomaly $\Delta T$ shifts the transition pressure by $\Delta P = \gamma\,\Delta T$, which in depth terms is

$$\boxed{\ \Delta z = \frac{\gamma\,\Delta T}{\rho g}\ }$$

*In words: multiply the temperature anomaly by the Clapeyron slope, then divide by the pressure gradient to convert to a depth.*

**Buoyancy from a deflected boundary.** If the boundary is deflected by $\Delta z$ and the density contrast across it is $\Delta\rho$, the resulting buoyancy stress on the slab is

$$\sigma_{\text{phase}} = \Delta\rho\,g\,\Delta z,$$

opposing descent when the boundary is depressed by cold material.

**Water in the transition zone.** Wadsleyite and ringwoodite can accommodate up to about 1 to 3 weight percent H₂O in their crystal structures — far more than olivine or bridgmanite. This makes the transition zone a potential water reservoir comparable to the oceans. In 2014 a diamond from Brazil was found to contain an inclusion of **hydrous ringwoodite**, the first direct sample of transition-zone material and a direct confirmation that it is at least locally wet.

**Post-perovskite and D″.** Near 2700 km, bridgmanite transforms to a layered post-perovskite structure with a strongly positive Clapeyron slope. Because the slope is positive and steep, the transition can occur *twice* in a steep thermal boundary layer — once going down into it and once coming back out — producing a lens of post-perovskite. This is the leading explanation for the seismic discontinuity at the top of D″ ([5.4](05-04-the-core.md)).

## Picture

![Left: a stack of three shaded boxes representing the olivine system with depth. The lightest, labelled olivine, 0 to 410 kilometres, 3.3 grams per cubic centimetre. The middle, labelled wadsleyite then ringwoodite, 410 to 660 kilometres, the transition zone, 3.6 grams per cubic centimetre. The darkest, labelled bridgmanite plus ferropericlase, 660 to 2700 kilometres, the lower mantle, 4.1 grams per cubic centimetre. A note states that there is no change of composition anywhere — the same atoms repacked into denser crystal structures as pressure rises — which is why the boundaries are sharp and why they move. Right: a cross-section with horizontal lines at 410 and 660 kilometres and a thick blue cold slab descending through both. Near the slab the 410 line is bowed upward, labelled pushed up, gamma positive, exothermic; the 660 line is bowed downward, labelled pushed down, gamma negative, endothermic. Notes say that two discontinuities deflected in opposite directions in the same place is something nothing chemical does but a Clapeyron slope does automatically, and that the downward push at 660 is what makes some slabs stall there](assets/05-02-fig1.svg)

The same mineral, three structures, and a thermodynamic surface that a cold slab can bend.

## Worked examples

**Example 1 (mechanical — deflecting the discontinuities).** A subducting slab is 500 K colder than the surrounding mantle. Compute the deflection of the 410 and the 660, taking $\gamma_{410} = +2.9\ \mathrm{MPa\,K^{-1}}$, $\gamma_{660} = -2.5\ \mathrm{MPa\,K^{-1}}$, with $\rho g = 0.0366\ \mathrm{MPa\,m^{-1}}$ at 410 km and $0.0396\ \mathrm{MPa\,m^{-1}}$ at 660 km.

*The 410.*
$$\Delta P = \gamma\Delta T = 2.9\times(-500) = -1450\ \mathrm{MPa},$$
$$\Delta z = \frac{-1450}{0.0366} = -39{,}600\ \mathrm{m} = -40\ \mathrm{km}.$$

Negative: the transition occurs at *lower* pressure, so the boundary is **40 km shallower** inside the slab.

*The 660.*
$$\Delta P = (-2.5)\times(-500) = +1250\ \mathrm{MPa},$$
$$\Delta z = \frac{+1250}{0.0396} = +31{,}600\ \mathrm{m} = +32\ \mathrm{km}.$$

Positive: **32 km deeper** inside the slab.

*Against observation.* Receiver-function and precursor studies find the 410 elevated by 10 to 20 km and the 660 depressed by 20 to 30 km beneath subduction zones. The predicted magnitudes are somewhat large — because the slab's thermal anomaly is not a uniform 500 K, and because the transition occurs over a finite depth interval that smears the signal — but **the signs, the opposition and the order of magnitude are all right**, from two laboratory-measured Clapeyron slopes.

**Example 2 (why you'd care — does the 660 stop a slab?).** Compute the buoyancy stress produced by the 32 km depression of the 660, and compare it with the slab's driving stress.

*Phase buoyancy.* Across the 660, $\Delta\rho \approx 200\ \mathrm{kg\,m^{-3}}$ (8 percent of 4000 minus some for the finite width; take 200 as a working figure). With the boundary depressed by 32 km, a 32 km thickness of the slab's interior is still the *lighter* upper-mantle phase while its surroundings have already transformed:

$$\sigma_{\text{phase}} = \Delta\rho\,g\,\Delta z = 200\times9.9\times3.16\times10^{4} = 6.3\times10^{7}\ \mathrm{Pa} = 63\ \mathrm{MPa}.$$

This acts **upward**, opposing descent.

*Slab driving stress.* From [4.5](04-05-plate-driving-forces.md), a slab of excess density $70\ \mathrm{kg\,m^{-3}}$ extending 600 km:

$$\sigma_{\text{slab}} = \Delta\rho\,g\,L = 70\times10\times6.0\times10^{5} = 4.2\times10^{8}\ \mathrm{Pa} = 420\ \mathrm{MPa}.$$

*Ratio.*
$$\frac{63}{420} = 15\%.$$

**The 660 resists with about a sixth of the slab's driving force.** So it is not a barrier — it cannot stop a slab outright — but it is a substantial impediment, and it is enough to change the behaviour qualitatively rather than merely slowing things down.

*Why a 15 percent penalty produces such varied behaviour.* Because whether a slab crosses is not a simple force comparison. The slab arrives at 660 with some downward momentum and some accumulated stress, it must also bend to get through, and the phase resistance is concentrated in a narrow depth range. A slab that is old, thick and steeply dipping has more driving force per unit width and pushes through; a young, thin, shallowly dipping slab does not, and instead **buckles and pools horizontally above 660**, sometimes for tens of millions of years, before the accumulated pile becomes heavy enough to founder.

Tomography sees exactly this dichotomy. Slabs beneath the Americas and Indonesia are imaged continuous to the core–mantle boundary; slabs beneath Japan and the Izu-Bonin arc are flattened and stagnant above 660. **The same physics, two outcomes, decided by parameters that vary from arc to arc.**

*And this is what dissolved the layered-convection controversy.* The debate ([4.4](04-04-mantle-convection-rayleigh-number.md)) had been framed as "is the 660 a barrier or not?", with geochemistry saying yes and tomography saying no. The Clapeyron calculation says the question is badly posed: **it is a partial impediment whose effectiveness depends on the slab**, so both camps were describing real observations of different slabs. The modern picture — whole-mantle circulation, sluggish and incompletely mixed, with intermittent stagnation at 660 — accommodates the geochemical evidence for long-lived heterogeneity *and* the seismic evidence for material crossing, without either side having been wrong about what they measured.

## Watch out

- **You might think** the 410 and 660 are compositional boundaries between different rocks. **Actually** they are phase transitions in the *same* material, and the strongest evidence is precisely the opposite-signed deflection of Example 1 — a chemical interface has no reason to care about temperature at all, let alone to care in opposite directions at two depths.
- **You might think** an endothermic transition means the slab is heated as it crosses. **Actually** the thermodynamic sign convention here refers to the transition consuming heat when it proceeds in the downward (densifying) direction; the dynamically important consequence is the *negative Clapeyron slope*, which deflects the boundary and creates buoyancy. Focus on the slope, not on the heat.
- **You might think** the transition zone is a distinct chemical layer because it holds water. **Actually** its water capacity is a property of the wadsleyite and ringwoodite *structures* — the same atoms in a different arrangement happen to have sites that accommodate hydrogen. The water content is a consequence of the phase, not evidence for a separate reservoir of different composition.

## One-liner

> The 410 and 660 are the same mineral repacked, not different rocks — and because a phase boundary is a thermodynamic surface, a cold slab bends it, which is why some slabs stall there and others do not.

## Problems

**P1 (🟢)** A mantle upwelling is 300 K hotter than ambient. Using $\gamma_{410} = +2.9\ \mathrm{MPa\,K^{-1}}$ with $\rho g = 0.0366\ \mathrm{MPa\,m^{-1}}$, and $\gamma_{660} = -2.5\ \mathrm{MPa\,K^{-1}}$ with $\rho g = 0.0396\ \mathrm{MPa\,m^{-1}}$. (a) Compute the deflection of the 410. (b) Compute the deflection of the 660. (c) State the resulting change in the apparent thickness of the transition zone, and say whether a hot plume thickens or thins it.

**P2 (🟡)** Receiver functions beneath a subduction zone find the transition zone 45 km thicker than the global average. (a) Explain qualitatively how a cold slab produces this. (b) Assuming the thickening is shared equally between the two boundaries and using the slopes and gradients of P1, estimate the temperature anomaly. (c) Comment on whether your answer is physically reasonable for a slab.

**P3 (🔴, bridges to [5.4](05-04-the-core.md))** The post-perovskite transition near 2700 km has $\gamma = +8\ \mathrm{MPa\,K^{-1}}$, a density contrast of about $60\ \mathrm{kg\,m^{-3}}$, and $\rho g \approx 0.055\ \mathrm{MPa\,m^{-1}}$ there. (a) Compute the deflection produced by a $-400$ K anomaly. (b) In the hot thermal boundary layer above the core, temperature rises steeply downward. Explain why a strongly positive Clapeyron slope allows the transition to occur twice within such a layer, and sketch in words the resulting structure. (c) State what seismic observation would confirm a double crossing. (d) Explain why this makes post-perovskite a **thermometer** for the core–mantle boundary, and why that matters for the geodynamo.

<details>
<summary>Solutions</summary>

**P1** (a) $$\Delta P = 2.9\times(+300) = +870\ \mathrm{MPa}, \qquad \Delta z = \frac{870}{0.0366} = +23{,}800\ \mathrm{m} = +24\ \mathrm{km}.$$

The 410 is **24 km deeper** in the hot region.

(b) $$\Delta P = (-2.5)\times(+300) = -750\ \mathrm{MPa}, \qquad \Delta z = \frac{-750}{0.0396} = -18{,}900\ \mathrm{m} = -19\ \mathrm{km}.$$

The 660 is **19 km shallower**.

(c) The top boundary moves down 24 km and the bottom moves up 19 km, so the transition zone is

$$24 + 19 = 43\ \mathrm{km\ thinner}.$$

**A hot plume thins the transition zone**; a cold slab thickens it. Because the two boundaries always move in opposite senses, transition-zone *thickness* is a far more robust thermometer than either boundary alone — an absolute depth measurement is contaminated by velocity structure above it, while the thickness is a differential measurement in which much of that error cancels.

**P2** (a) A cold slab elevates the 410 (positive slope, cold transforms at lower pressure) and depresses the 660 (negative slope). Top up, bottom down — **the transition zone thickens.**

(b) Thickening shared equally: 22.5 km from each boundary.

*From the 410:*
$$\Delta P = \Delta z\times\rho g = (-2.25\times10^{4})\times0.0366 = -823.5\ \mathrm{MPa}, \qquad \Delta T = \frac{-823.5}{2.9} = -284\ \mathrm{K}.$$

*From the 660:*
$$\Delta P = (+2.25\times10^{4})\times0.0396 = +891\ \mathrm{MPa}, \qquad \Delta T = \frac{891}{-2.5} = -356\ \mathrm{K}.$$

Averaging, $\Delta T \approx -320$ K.

(c) **Reasonable, and if anything conservative.** Slab interiors can be 500 to 800 K colder than ambient mantle at these depths, but the seismically observed deflection is an *average* over the region sampled by the wave, which includes the slab's warmer margins and the surrounding normal mantle. A recovered anomaly of $-320$ K from a slab whose core is $-600$ K is exactly what a smoothed, finite-resolution measurement should give.

The equal-sharing assumption is also worth flagging as the weakest step: the two slopes differ in magnitude, so an equal split is a convenience rather than a physical statement, and the 15 percent difference between the two recovered temperatures is a direct consequence of it.

**P3** (a) $$\Delta P = 8\times(-400) = -3200\ \mathrm{MPa}, \qquad \Delta z = \frac{-3200}{0.055} = -58{,}200\ \mathrm{m} = -58\ \mathrm{km}.$$

The transition occurs **58 km shallower** where the material is 400 K cold — a very large deflection, because the slope is steep.

(b) In the D″ boundary layer the temperature rises steeply with depth — perhaps 1000 K over a few hundred kilometres — as the mantle approaches the much hotter core. A phase boundary with a strongly positive slope requires *higher* pressure to transform at *higher* temperature.

Descending through the layer, pressure rises steadily, and at first it wins: the transition to post-perovskite occurs at the top of the layer. But temperature is rising too, and rising fast; deeper in the layer, the temperature has risen enough that the required transition pressure has climbed *above* the actual pressure, and the material reverts to bridgmanite. **The boundary is crossed twice — downward into post-perovskite near the top of D″, and back upward out of it just above the core.**

The resulting structure is a **lens of post-perovskite** sandwiched between ordinary bridgmanite above and below, thickest where the boundary layer is coldest and thinning to nothing where it is hottest — vanishing entirely beneath the hot LLSVPs.

(c) **A pair of seismic discontinuities within D″, with opposite impedance contrasts** — a velocity increase at the top of the lens and a decrease at its base — bracketing a few hundred kilometres of the lowermost mantle, present in cold regions beneath ancient subduction and absent beneath the hot low-velocity provinces. The discontinuity at the top of D″ has been observed for decades; the elusive lower one, the "reverse" crossing, is the harder and more diagnostic observation.

(d) Because the *thickness* of the lens depends on how steeply temperature rises through the boundary layer. Given the Clapeyron slope from the laboratory and the pressure gradient from PREM ([5.1](05-01-free-oscillations-earth-density.md)), measuring the two discontinuity depths fixes the temperature at both crossings — and hence the temperature gradient, and by extrapolation the temperature at the core–mantle boundary itself.

**That is a measurement of the one number the core's energy budget most badly needs.** The heat flowing out of the core sets how much power is available to the geodynamo ([3.2](03-02-the-geodynamo.md)), how fast the inner core has grown, and whether the dynamo could have run before the inner core existed ([5.4](05-04-the-core.md)). Estimates of core–mantle boundary heat flow span a factor of three, and the resulting uncertainty in inner-core age spans a factor of five. A phase transition in a mineral nobody had synthesized before 2004 turns out to be one of the few ways to narrow it.

</details>

## Flashback

**From Lesson 5.1 (Free oscillations and the Earth's density):** At 2000 km depth, $v_p = 12.5\ \mathrm{km\,s^{-1}}$, $v_s = 6.8\ \mathrm{km\,s^{-1}}$, $\rho = 5100\ \mathrm{kg\,m^{-3}}$, $g = 9.9\ \mathrm{m\,s^{-2}}$. (a) Compute the seismic parameter. (b) Compute the bulk modulus. (c) Compute the density increase over the next 300 km of depth from self-compression alone.

<details>
<summary>Solution</summary>

(a) $$\Phi = 156.25 - \tfrac43(46.24) = 156.25 - 61.65 = 94.60\ \mathrm{km^2\,s^{-2}} = 9.460\times10^{7}\ \mathrm{m^2\,s^{-2}}.$$

(b) $$K = \rho\Phi = 5100\times9.460\times10^{7} = 4.82\times10^{11}\ \mathrm{Pa} = 482\ \mathrm{GPa}.$$

(c) $$\frac{d\rho}{dr} = -\frac{\rho g}{\Phi} = -\frac{5100\times9.9}{9.460\times10^{7}} = -5.337\times10^{-4}\ \mathrm{kg\,m^{-4}},$$
$$\Delta\rho = 5.337\times10^{-4}\times3.0\times10^{5} = 160\ \mathrm{kg\,m^{-3}}.$$

About 3 percent over 300 km — and in the lower mantle, unlike at the discontinuities, this self-compression estimate matches the observed gradient closely, which is what makes the lower mantle a chemically homogeneous layer to a good approximation.

</details>

## Connections

- **Backward:** the discontinuities located by travel times are [1.4](01-04-travel-time-curves-deep-earth.md)'s; the density jumps that self-compression could not explain are [5.1](05-01-free-oscillations-earth-density.md)'s, and the Bullen parameter there is the diagnostic that sent us here.
- **Forward:** [5.4](05-04-the-core.md) uses the post-perovskite thermometer to constrain core–mantle boundary heat flow; [4.5](04-05-plate-driving-forces.md)'s slab-pull budget is modified by the phase buoyancy computed here, and [4.4](04-04-mantle-convection-rayleigh-number.md)'s layering debate is resolved by it.
- **Sideways:** the Clausius–Clapeyron relation is [`thermodynamics-physics`](../../thermodynamics-physics/syllabus.md)'s, and the polymorphic phase transitions are the same crystallography as [materials-science 1.2](../../materials-science/lessons/01-02-crystal-structures-unit-cells.md) and the phase diagrams of [materials-science 3.1](../../materials-science/lessons/03-01-phase-diagrams-lever-rule.md) — allotropy in iron and repacking in olivine are the same phenomenon. [`geology` 5.1](../../geology/lessons/05-01-earths-internal-structure.md) names the 410 and 660 and points here for what they are.
