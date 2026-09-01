# Physical Oceanography · Lesson 3.5: Coastal upwelling and eastern boundary systems

> ⏱ ~15 min · Module 3: The wind-driven circulation · Builds on: [2.3](02-03-ekman-layer-transport.md), [2.2](02-02-thermal-wind-acc.md) · Unlocks: [5.5](05-05-walker-bjerknes-enso.md), [6.3](06-03-ocean-carbon-pumps.md)

## Why this matters

Four narrow strips of ocean — off California, Peru and Chile, northwest Africa, and Namibia — occupy about **one percent** of the world ocean's area and supply roughly **twenty percent** of the global fish catch. The Peruvian anchoveta fishery alone has in some years been the largest single-species fishery on Earth. That extraordinary concentration is not biology; it is [2.3](02-03-ekman-layer-transport.md) applied at a coastline.

The chain is short and entirely mechanical. Wind blows equatorward along an eastern boundary. Ekman transport carries surface water offshore. Water rises at the coast to replace it. The water that rises comes from 50 to 100 m, below the sunlit layer where nutrients have been stripped out, so it is loaded with nitrate and phosphate. Sunlight plus nutrients equals phytoplankton, and everything else follows. Break any link — as El Niño does by deepening the thermocline so that the upwelled water is warm and barren ([5.5](05-05-walker-bjerknes-enso.md)) — and the fishery collapses within months.

## The idea

**The offshore transport must be replaced from below.** [2.3](02-03-ekman-layer-transport.md) gives the offshore Ekman transport in m² s⁻¹. A coast blocks any resupply from the landward side, so continuity forces water up. Divide the transport by the width of the band over which the upwelling occurs and you have the vertical velocity — metres per day, which is four orders of magnitude larger than open-ocean Ekman pumping.

**The band width is not arbitrary.** It is the **baroclinic Rossby radius**, 10 to 30 km, because that is the distance over which the ocean adjusts a density perturbation against rotation. This is the same $L_d$ that sets eddy size in [3.4](03-04-mesoscale-eddies-baroclinic-instability.md), doing a different job.

**Upwelling makes its own current.** Bringing dense water up at the coast tilts the isopycnals — dense inshore, light offshore — and thermal wind ([2.2](02-02-thermal-wind-acc.md)) converts that tilt into a surface-intensified **equatorward coastal jet**. So the wind does not push the jet along; it lifts the density field, and geostrophy makes the jet. The same three-step chain as the gyres in [2.4](02-04-ekman-pumping-wind-stress-curl.md).

**And underneath it, a current going the other way.** Every eastern boundary upwelling system has a **poleward undercurrent** at 100 to 300 m — the California Undercurrent, the Peru–Chile Undercurrent, the Gulf of Guinea Undercurrent. It is driven by an alongshore pressure gradient (sea level rises poleward along these coasts), which the surface wind can overcome at the surface but not at depth. It matters biogeochemically because it carries old, oxygen-poor, nutrient-rich equatorial water poleward, and it is the reason the oxygen minimum zones off Peru and California are as intense as they are.

**Upwelling is an event, not a state.** The winds are intermittent. Individual upwelling events last days; the surface layer floods back inshore within days of a relaxation. What the fishery experiences is a *sequence* of pulses, and the biological optimum turns out to be intermediate — too little wind and no nutrients arrive; too much and the plankton are flushed offshore before anything can eat them. This is Bakun's "optimal environmental window", and it is why the relationship between wind strength and fish catch is non-monotonic.

## The formal version

**The upwelling velocity.** With an alongshore wind stress $\tau_{\parallel}$, the offshore Ekman transport is $M_E = |\tau_\parallel|/(\rho_0|f|)$, and continuity over a coastal band of width $L$ gives

$$\boxed{\ w = \frac{M_E}{L} = \frac{|\tau_\parallel|}{\rho_0 |f| L}\ }$$

*In words: the offshore transport, spread over the width of the upwelling band.* Taking $L = L_d = c_1/|f|$,

$$w = \frac{|\tau_\parallel|}{\rho_0 c_1},$$

a pleasing result in which **$f$ cancels entirely**: the upwelling velocity depends only on the wind stress and the stratification. Latitude drops out — which is consistent with the four upwelling systems spanning 15 to 45 degrees and having comparable upwelling rates.

**Upwelling-favourable geometry.** The rule, hemisphere-independent, is that the transport must be **offshore**:

| Coast | Hemisphere | Upwelling-favourable wind | Example |
|---|---|---|---|
| Eastern boundary (land to the east) | North | equatorward (southward) | California, Canary |
| Eastern boundary | South | equatorward (northward) | Peru, Benguela |
| Western boundary (land to the west) | North | poleward (northward) | rare and weak |

*In words: on an eastern boundary, an equatorward wind always upwells, in either hemisphere.* Both $f$ and the sense of "right versus left" flip together across the equator, so the geometry is preserved — which is why all four great systems are on eastern boundaries and none is on a western one. (Western boundaries would need poleward winds, which the subtropical highs do not supply, and in any case the boundary current there is fast and warm.)

**The coastal jet, from thermal wind.** Upwelling raises the isopycnals at the coast by $\Delta z$ over the band width $L$, giving a slope $s = \Delta z/L$. From [2.2](02-02-thermal-wind-acc.md)'s Form 3,

$$\frac{\partial u_\parallel}{\partial z} = \frac{N^2}{f}\,s,$$

so a jet whose speed at the surface, relative to the base of the tilted layer at depth $D$, is $N^2 s D/f$. Typical numbers ($N^2 = 10^{-4}$, $s = 5\times10^{-3}$, $D = 100$ m, $f = 8.6\times10^{-5}$) give $0.58\ \mathrm{m\,s^{-1}}$ — the right order for an observed coastal jet of 0.3 to 0.8 m s⁻¹.

**The four systems.**

| System | Boundary current | Latitudes | Note |
|---|---|---|---|
| California | California Current | 25–45°N | strongly seasonal; spring transition |
| Humboldt (Peru–Chile) | Peru Current | 5–40°S | most productive; ENSO-sensitive |
| Canary | Canary Current | 12–35°N | strong Saharan dust input |
| Benguela | Benguela Current | 15–35°S | warm-water Angola front at its north end |

All four have intense **oxygen minimum zones** beneath them, because the organic matter produced at the surface sinks and is respired in water that is already old and poorly ventilated.

**Nutrients, and how much carbon that is.** Upwelled water from 100 m typically carries nitrate at $20\ \mathrm{mmol\,m^{-3}}$. The nitrate supply rate is $w\,[\mathrm{NO_3}]$, and Redfield stoichiometry converts nitrogen to carbon at $\mathrm{C:N} = 106:16 = 6.6$:

$$\text{new production} = 6.6\,w\,[\mathrm{NO_3}]\times12\ \mathrm{g\,mol^{-1}}.$$

This is *new* production — the part of primary production supported by newly supplied nutrients rather than recycled ones — and it is the part that can be exported to depth ([6.3](06-03-ocean-carbon-pumps.md)) or harvested.

## Picture

![A cross-shore section looking north along an eastern boundary, with the coast on the right and open ocean to the left, out to 100 km, from the surface to about 250 m. A circle with a cross at the top marks the equatorward wind blowing into the page. A blue arrow at the surface points offshore, labelled with an Ekman transport of 1.14 square metres per second. At the coast a thick upward arrow marks upwelling at 3.8 m per day. Three coral isopycnals run nearly flat offshore and bend sharply upward within about 20 km of the coast. A circle with a cross near the surface at the coast marks the equatorward coastal jet, and a circle with a dot at 250 m marks the poleward undercurrent flowing out of the page](assets/03-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — from wind to fish).** Off central California at 36°N ($|f| = 8.57\times10^{-5}\ \mathrm{s^{-1}}$), an equatorward wind gives $\tau_\parallel = 0.10\ \mathrm{N\,m^{-2}}$. The baroclinic Rossby radius is 26 km. Upwelled water carries nitrate at $20\ \mathrm{mmol\,m^{-3}}$. Take $\rho_0 = 1025\ \mathrm{kg\,m^{-3}}$.

(a) *Offshore transport.*
$$M_E = \frac{0.10}{1025\times8.57\times10^{-5}} = \frac{0.10}{8.784\times10^{-2}} = 1.14\ \mathrm{m^2\,s^{-1}}.$$

(b) *Upwelling velocity.*
$$w = \frac{1.14}{2.6\times10^{4}} = 4.38\times10^{-5}\ \mathrm{m\,s^{-1}} = 3.8\ \mathrm{m\,day^{-1}}.$$

(c) *Nitrate supply.*
$$F_N = w\,[\mathrm{NO_3}] = 4.38\times10^{-5}\times20 = 8.76\times10^{-4}\ \mathrm{mmol\,m^{-2}\,s^{-1}} = 75.7\ \mathrm{mmol\,m^{-2}\,day^{-1}}.$$

(d) *New production in carbon.*
$$= 6.6\times75.7 = 500\ \mathrm{mmol\,C\,m^{-2}\,day^{-1}} = 500\times12\times10^{-3} = 6.0\ \mathrm{g\,C\,m^{-2}\,day^{-1}}.$$

That is at the very top of the observed range (peak upwelling-season values in these systems run 1 to 5 g C m⁻² day⁻¹), which is as it should be: this calculation is for an **active upwelling event** at full wind, not an annual mean. Upwelling-favourable winds blow perhaps half the days of half the year, and much of the nitrate supplied is advected offshore before it can be used, so the annual mean is several times smaller. For comparison, the open subtropical gyre manages about $0.1\ \mathrm{g\,C\,m^{-2}\,day^{-1}}$.

**Example 2 (why you'd care — why more wind is not more fish).** Bakun's hypothesis holds that greenhouse warming heats continents faster than oceans, strengthening the land–sea pressure contrast and hence the alongshore winds, and therefore intensifying upwelling. Evaluate what that would do to the fishery.

*The naive chain.* $w \propto \tau_\parallel$, so stronger wind means proportionally more nutrients, more new production, more fish. Under a 30 percent wind increase, 30 percent more production.

*Three things that break it.*

1. **Offshore advection.** The same wind that lifts nutrients also carries the surface water offshore, at $M_E \propto \tau$. The residence time of a water parcel in the productive coastal band is $L/(M_E/h) = Lh/M_E$, which *decreases* as $\tau$ grows. Phytoplankton take two to three days to bloom and zooplankton a week or more to respond; if the parcel is flushed out in three days instead of five, the nutrients are exported to the open ocean and the food chain never closes. **Production rises; production that is available to fish may fall.**

2. **Turbulence.** Stronger winds mix the surface layer deeper ([1.5](01-05-mixed-layer-air-sea-fluxes.md)), and mixing depth scales as $\tau^{3/2}$ through $u_*^3$. Deeper mixing pushes phytoplankton below the light they need. The critical-depth criterion is a hard threshold, not a gradual penalty.

3. **Stratification.** Warming also stratifies the upper ocean, which *deepens* the nutricline. Upwelling that lifts water from 100 m brings up less nitrate if the nitrate has retreated to 150 m. This is the same mechanism by which El Niño destroys the Peruvian fishery, operating slowly instead of abruptly.

*The synthesis.* Effects (1) and (2) mean the response to wind is **non-monotonic** — Bakun's own "optimal environmental window". Effect (3) can reverse the sign of the whole thing. The observational record is genuinely mixed: some systems show intensifying upwelling-favourable winds (the Benguela and Humboldt most clearly), others do not, and the biological response has not tracked the physical trend cleanly in any of them.

*The point.* **A single-link causal chain (more wind → more nutrients → more fish) is almost always wrong for a system where the same forcing appears in several terms.** Here $\tau$ enters the nutrient supply, the residence time, and the mixing depth, with different powers and opposite signs. The diagnostic question to ask of any such argument is: *does the proposed cause appear anywhere else in the problem?* If it does, the sign of the net effect is an empirical question, not a deducible one.

## Watch out

- **You might think** the upwelling band's width is set by the shelf or the wind's spatial scale. **Actually** it is the baroclinic Rossby radius, 10 to 30 km, because that is the scale on which a density perturbation adjusts under rotation. This is why upwelling fronts are so sharp and why satellite images of them show a band of nearly constant width along thousands of kilometres of coast.
- **You might think** upwelling brings up cold water and that is the whole story. **Actually** the biologically important variable is nitrate, not temperature — they are correlated but not identical. During El Niño the thermocline deepens so that upwelling draws from *within* the warm, nutrient-stripped layer: the water is warm **and** barren, and it is the second that kills the fishery.
- **You might think** the poleward undercurrent contradicts the equatorward wind. **Actually** the wind's direct influence is confined to the Ekman layer. Below it, the alongshore pressure gradient — which is set remotely, by the large-scale density field — takes over, and it points the other way.

## One-liner

> An equatorward wind on an eastern boundary drives surface water offshore, and the nitrate-rich water that rises to replace it at a few metres a day makes one percent of the ocean produce a fifth of the world's fish — a chain so mechanical that El Niño can break it in a season by moving the nutrients a hundred metres deeper.

## Problems

**P1 (🟢)** Off Peru at 15°S ($|f| = 3.77\times10^{-5}\ \mathrm{s^{-1}}$), an equatorward wind gives $\tau_\parallel = 0.08\ \mathrm{N\,m^{-2}}$, and the upwelling band is 40 km wide. Take $\rho_0 = 1025$. (a) Compute the offshore Ekman transport. (b) Compute the upwelling velocity in m per day. (c) State the wind direction that is upwelling-favourable here, and check it against the northern-hemisphere California case.

**P2 (🟡)** Use the simplified form $w = |\tau_\parallel|/(\rho_0 c_1)$, in which $f$ cancels because the band width is taken as $L_d = c_1/|f|$. (a) Verify the cancellation algebraically. (b) Evaluate $w$ in m per day for $\tau_\parallel = 0.10\ \mathrm{N\,m^{-2}}$, $\rho_0 = 1025$, and $c_1 = 2.2\ \mathrm{m\,s^{-1}}$. (c) Compare with Example 1's answer of 3.8 m per day and account for the difference. (d) The result says the upwelling rate is independent of latitude but depends on stratification. State what this predicts for how upwelling changes as the upper ocean warms and stratifies, and give the sign.

**P3 (🔴, optional)** A coastal parcel enters the upwelling band and is carried offshore by the Ekman transport in a layer $h = 20\ \mathrm{m}$ deep. The band is $L = 25\ \mathrm{km}$ wide. Phytoplankton double every 1.5 days once nutrients arrive; zooplankton grazers respond with a further 6-day lag; anchoveta feed on the zooplankton. (a) Compute the parcel's offshore velocity and residence time in the band for $\tau_\parallel = 0.05$, $0.10$ and $0.20\ \mathrm{N\,m^{-2}}$ at $|f| = 5\times10^{-5}$, $\rho_0 = 1025$. (b) For each, state whether the phytoplankton bloom and the zooplankton response have time to complete within the band. (c) Sketch in words the shape of "fish production versus wind stress" implied, identify the optimum, and explain why both weak and strong winds are bad. (d) Comment on what this implies for interpreting a multi-decadal trend in upwelling-favourable winds.

<details>
<summary>Solutions</summary>

**P1** (a) $$M_E = \frac{0.08}{1025\times3.77\times10^{-5}} = \frac{0.08}{3.864\times10^{-2}} = 2.07\ \mathrm{m^2\,s^{-1}}.$$

Note it is nearly double California's from a *weaker* wind — the $1/f$ factor, since 15°S is much closer to the equator.

(b) $$w = \frac{2.07}{4\times10^{4}} = 5.18\times10^{-5}\ \mathrm{m\,s^{-1}} = 4.5\ \mathrm{m\,day^{-1}}.$$

(c) Peru is in the **southern** hemisphere on an **eastern** boundary, so equatorward means **northward**. Ekman transport is 90 degrees to the *left* of the wind ($f<0$), and 90 degrees left of northward is westward — which is offshore. $\checkmark$

Against California: northern hemisphere, eastern boundary, equatorward means **southward**, transport 90 degrees to the *right*, which is westward, offshore. $\checkmark$ Both hemispheres give offshore transport for an equatorward wind on an eastern boundary, because the hemisphere flips the handedness and the direction of "equatorward" at the same time. **The rule is geometric and needs no hemisphere bookkeeping** — which is exactly why all four great systems share it.

**P2** (a) $$w = \frac{M_E}{L_d} = \frac{|\tau_\parallel|/(\rho_0|f|)}{c_1/|f|} = \frac{|\tau_\parallel|}{\rho_0|f|}\cdot\frac{|f|}{c_1} = \frac{|\tau_\parallel|}{\rho_0 c_1}. \quad\checkmark$$

(b) $$w = \frac{0.10}{1025\times2.2} = \frac{0.10}{2255} = 4.43\times10^{-5}\ \mathrm{m\,s^{-1}} = 3.83\ \mathrm{m\,day^{-1}}.$$

(c) Identical to Example 1, as it must be: Example 1 used $L = 26$ km, and $c_1/|f| = 2.2/8.57\times10^{-5} = 25.7$ km. The two calculations are the same one.

(d) Warming increases the near-surface stratification, which increases $N$ and hence $c_1 = \pi^{-1}\int N\,dz$. Since $w \propto 1/c_1$, **the upwelling velocity falls**.

The sign is negative — a stratifying ocean upwells *more slowly* for the same wind. There is a second, reinforcing effect: $L_d = c_1/|f|$ grows, so the same offshore transport is spread over a wider band. And a third, already noted in Example 2: the nutricline deepens, so the water that does arrive carries less nitrate.

**All three point the same way, and all three oppose the Bakun mechanism.** That is worth stating plainly, because the Bakun hypothesis is often presented as the expected response of upwelling systems to warming, and it is only one of at least four effects, the other three of which are negative.

**P3** (a) Offshore velocity $u = M_E/h$; residence time $t = L/u = Lh/M_E$.

| $\tau_\parallel$ (N m⁻²) | $M_E$ (m² s⁻¹) | $u$ (m s⁻¹) | $t$ (days) |
|---|---|---|---|
| 0.05 | 0.976 | 0.0488 | 5.9 |
| 0.10 | 1.951 | 0.0976 | 3.0 |
| 0.20 | 3.902 | 0.195 | 1.5 |

(Working for the middle row: $M_E = 0.10/(1025\times5\times10^{-5}) = 1.951\ \mathrm{m^2\,s^{-1}}$; $u = 1.951/20 = 0.0976\ \mathrm{m\,s^{-1}}$; $t = 2.5\times10^{4}/0.0976 = 2.56\times10^{5}\ \mathrm{s} = 3.0$ days.)

(b) The phytoplankton bloom needs about 1.5 days (one doubling, and realistically 3 to 4 days for several); the zooplankton response needs a further 6 days, so about 7.5 days total.

| $\tau_\parallel$ | Residence | Bloom completes? | Grazers respond? |
|---|---|---|---|
| 0.05 | 5.9 d | yes | **no** |
| 0.10 | 3.0 d | marginally | no |
| 0.20 | 1.5 d | **no** | no |

At none of these does the full chain complete *within the band* — which is realistic and important: in real systems the production is exported offshore and the food web closes in the transition zone tens to hundreds of kilometres out, not at the coast.

(c) The implied curve rises from zero at zero wind (no nutrients at all), reaches a maximum, and falls at high wind. The **optimum** is where the residence time roughly matches the biological response time — from the table, around $\tau_\parallel = 0.04$ to $0.06\ \mathrm{N\,m^{-2}}$, giving 6 to 7 days.

Weak winds are bad because nutrient supply is proportional to $\tau$ and simply too small. Strong winds are bad for two independent reasons: the parcel is flushed out before the food chain closes, and the mixed layer deepens as $\tau^{3/2}$, pushing the phytoplankton below the light. Note that the second reason has a steeper power than the nutrient supply's linear one, so at high wind the negative term must eventually win regardless of the details.

(d) A monotonic trend in wind stress does **not** imply a monotonic trend in fishery productivity, and it does not even imply a consistent sign across systems — a system sitting below its optimum will improve while one sitting above it will decline, under the identical forcing change. Interpreting a wind trend therefore requires knowing where on the curve each system currently sits, which requires the biological response times and the band geometry, neither of which is well constrained.

Two further cautions follow. First, the optimum itself moves: warming shifts the curve down and to the left through the stratification effects of P2(d), so a system can decline even while sitting at what was its optimum. Second, the observable that is easiest to measure — an upwelling index computed from wind stress — is a poor proxy for the thing that matters, which is nitrate flux times residence time. **Trends in an index are not trends in the quantity the index was built to stand in for**, and this is one of the clearer cases in ocean science where that distinction has practical consequences.

</details>

## Flashback

**From Lesson 3.3 (The Gulf Stream and Kuroshio in the real ocean):** At 30°N, $\beta = 1.982\times10^{-11}\ \mathrm{m^{-1}\,s^{-1}}$ and $A_h = 2\times10^{4}\ \mathrm{m^2\,s^{-1}}$. The Canary Current, an eastern boundary current, has $U = 0.08\ \mathrm{m\,s^{-1}}$. (a) Compute $\delta_M$ and $\delta_I$. (b) State the regime and what it predicts about whether the Canary Current sheds rings. (c) Explain in two sentences why the eastern boundary current is slow in the first place, referring to what returns the gyre's transport.

<details>
<summary>Solution</summary>

(a) $$\delta_M = \left(\frac{2\times10^{4}}{1.982\times10^{-11}}\right)^{1/3} = 1.00\times10^{5}\ \mathrm{m} = 100\ \mathrm{km},$$
$$\delta_I = \left(\frac{0.08}{1.982\times10^{-11}}\right)^{1/2} = \left(4.036\times10^{9}\right)^{1/2} = 6.35\times10^{4}\ \mathrm{m} = 64\ \mathrm{km}.$$

(b) $\delta_I/\delta_M = 0.64 < 1$: **frictional**. The prediction is that the Canary Current does not behave as an unstable free jet — it should be broad, smooth, and should not shed rings the way the Gulf Stream does.

That is largely right and worth qualifying honestly. Eastern boundary currents do not produce anything like Gulf Stream rings. They *do* produce eddies and filaments, but from a different mechanism: the sharp upwelling front of this lesson is itself baroclinically unstable at the much smaller coastal deformation radius, giving submesoscale filaments 10 to 50 km across rather than 200 km rings. Different scale, different generation, different lifetime.

(c) The eastern boundary current is slow because it is **not** the gyre's return flow — the return is the western boundary current ([3.2](03-02-western-boundary-currents-stommel-munk.md)), which is where $\beta$ forces it. The eastern side carries only part of the broad, slow Sverdrup interior flow, spread over hundreds of kilometres rather than concentrated into a hundred, so its speed is smaller by roughly that ratio.

</details>

## Connections

- **Backward:** the offshore transport is [2.3](02-03-ekman-layer-transport.md)'s Ekman integral applied at a wall; the coastal jet is [2.2](02-02-thermal-wind-acc.md)'s thermal wind; the band width is [3.4](03-04-mesoscale-eddies-baroclinic-instability.md)'s deformation radius; and the mixing-depth limit invokes [1.5](01-05-mixed-layer-air-sea-fluxes.md).
- **Forward:** the same upwelling operates along the equator and is what makes the cold tongue in [5.4](05-04-equatorial-waves-undercurrent.md); its shutdown during El Niño is [5.5](05-05-walker-bjerknes-enso.md); and the export production it drives is a substantial part of the biological pump in [6.3](06-03-ocean-carbon-pumps.md).
- **Sideways (ecology):** the "optimal environmental window" is a hump-shaped response to a forcing that enters the problem with opposite signs in two terms — supply and residence time. The same structure governs the intermediate-disturbance hypothesis and grazing-pressure optima in [`evolution-ecology`](../../evolution-ecology/syllabus.md), and recognizing it is more useful than any of the specific mechanisms.
