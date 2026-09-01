# Physical Oceanography · Lesson 4.4: What drives the overturning — buoyancy or wind

> ⏱ ~15 min · Module 4: The deep ocean and the overturning · Builds on: [4.2](04-02-deep-water-formation-convection.md), [4.3](04-03-diapycnal-mixing-abyssal-recipe.md) · Unlocks: [4.5](04-05-meridional-heat-transport-bjerknes.md), [6.1](06-01-southern-ocean-hinge.md)

## Why this matters

The picture almost everyone carries — water cools in the North Atlantic, sinks, flows south along the bottom, and rises somewhere else, a "great ocean conveyor belt" driven by cooling — is not wrong so much as **misattributed**. Cooling determines *which* water sinks and *what properties* it has. It does not, on its own, determine how fast the circulation runs.

The argument against the naive picture is thermodynamic and old. Sandström showed in 1908 that a fluid heated and cooled at the *same* level cannot maintain a circulation against friction, and the ocean is heated and cooled at the same level: the surface. Something mechanical must supply the energy, and [4.3](04-03-diapycnal-mixing-abyssal-recipe.md) identified the candidates — tides and wind, about 2 TW.

The modern synthesis has two cells with two different closures, and it matters enormously which one you are talking about. Getting this right is the difference between "the AMOC will weaken because the North Atlantic warms" and "the AMOC's rate depends on Southern Ocean winds and abyssal mixing, both of which are changing for their own reasons." The name **thermohaline circulation** encodes the first view and should be retired; the neutral term is the **meridional overturning circulation**.

## The idea

**Sandström's objection.** Put a heat source and a heat sink at the same height in a fluid. Warm light water piles up next to cold dense water, a circulation starts — and then stops, because the fluid arranges itself into a stable stratification with the warm water on top and there is nothing left to drive it. To keep a circulation going you must either heat below the level of the cooling (which a boiler does and the ocean does not) or supply mechanical energy to stir dense water back up. **The ocean does the second.**

**A conveyor needs a motor and the motor is not the cold.** The buoyancy forcing at high latitudes creates dense water. But dense water at the bottom of a stably stratified ocean is going nowhere by itself. Getting it back up requires either mixing it across isopycnals — expensive, needing the 2 TW of [4.3](04-03-diapycnal-mixing-abyssal-recipe.md) — or lifting it along isopycnals that outcrop at the surface, which costs nothing.

**The Southern Ocean provides the free route.** Around Antarctica the isopycnals tilt so steeply ([2.2](02-02-thermal-wind-acc.md)) that surfaces which lie at 2000 to 3000 m in the Atlantic reach the sea surface. The westerlies drive a northward Ekman transport across them, and deep water rises **adiabatically** along those outcropping surfaces to replace it — no mixing required. This is the upper cell's closure, and it accounts for the bulk of the 17 Sv of the Atlantic overturning.

**The abyssal cell still needs mixing.** The densest water, AABW, lies below every isopycnal that outcrops anywhere. It cannot be lifted along a surface to the light; it can only be mixed. So the lower cell *is* diapycnally driven, and it is the one that Munk's recipe applies to.

**And eddies partly cancel the wind.** In the Southern Ocean the wind-driven (Eulerian) overturning is largely opposed by an eddy-driven circulation in the opposite sense ([3.4](03-04-mesoscale-eddies-baroclinic-instability.md)). What transports properties is the **residual** — the difference of two larger numbers. Because the two respond differently to a wind change, predicting the residual's response to strengthening westerlies is much harder than predicting either term.

## The formal version

**Sandström's theorem.** For a steady closed circulation in a fluid, integrating the thermodynamic relation around a closed streamline gives a work output proportional to $\oint T\,ds$, which for a Carnot-like cycle requires the heating to occur at higher pressure than the cooling. In the ocean both occur at $p \approx 0$, so

$$\oint \alpha\,dp \approx 0,$$

*In words: no net work is available from a circulation heated and cooled at the same pressure, so nothing can drive it against friction.* The theorem is not airtight — molecular diffusion and, more importantly, externally-supplied turbulent mixing evade it — but it correctly identifies that a purely thermally-forced ocean would be a thin warm layer over a stagnant cold abyss, which is not what we have.

**Stommel–Arons: the counterintuitive interior.** Suppose the abyss is fed by a point source at the pole and drained by uniform upwelling $w_0$ into the layer above. In an abyssal layer of thickness $H$ with $w = 0$ at the bottom,

$$\beta v = f\frac{\partial w}{\partial z} = f\frac{w_0}{H} \qquad\Longrightarrow\qquad \boxed{\ v = \frac{f\,w_0}{\beta H}\ }$$

*In words: uniform upwelling stretches abyssal columns, and a stretched column must move poleward to gain planetary vorticity.* The result is startling: **the deep interior flows toward the pole, away from the equator, even though the net transport is equatorward.** The equatorward transport happens entirely in a narrow **deep western boundary current**.

Stommel and Arons predicted this in 1960 as a theoretical curiosity. Deep western boundary currents were found — Swallow and Worthington had already detected one off South Carolina in 1957 — and they are now known in every basin. It stands as one of the most successful predictions in the subject, made from a two-term vorticity balance.

Magnitude: with $f = 10^{-4}$, $w_0 = 7\times10^{-8}\ \mathrm{m\,s^{-1}}$, $\beta = 2\times10^{-11}$, $H = 4000$ m,

$$v = \frac{10^{-4}\times7\times10^{-8}}{2\times10^{-11}\times4000} = \frac{7\times10^{-12}}{8\times10^{-8}} = 8.8\times10^{-5}\ \mathrm{m\,s^{-1}} = 2.8\ \mathrm{km\,yr^{-1}}.$$

**The Southern Ocean upwelling.** The westerlies at 55°S drive a northward Ekman transport; integrating it around the globe gives the volume of deep water that must be drawn up to replace it:

$$T = \frac{|\tau|}{\rho_0|f|}\times 2\pi R\cos\phi.$$

With $\tau = 0.15\ \mathrm{N\,m^{-2}}$, $|f| = 1.194\times10^{-4}$, $\phi = 55^\circ$:

$$T = \frac{0.15}{1025\times1.194\times10^{-4}}\times2\pi(6.371\times10^{6})(0.5736) = 1.23\times2.30\times10^{7} = 2.8\times10^{7}\ \mathrm{m^3\,s^{-1}} = 28\ \mathrm{Sv}.$$

**Twenty-eight sverdrups, from a wind calculation with no mixing in it at all.** That is the same order as the whole global overturning, and it is the single most persuasive number in favour of the mechanical picture.

**The residual-mean framework.** In the Southern Ocean, write the meridional overturning streamfunction as

$$\psi_{\text{res}} = \psi_{\text{Ekman}} + \psi_{\text{eddy}} = -\frac{\tau}{\rho_0 f} + K\,s,$$

with $s$ the isopycnal slope and $K$ the eddy diffusivity ([3.4](03-04-mesoscale-eddies-baroclinic-instability.md)). *In words: the wind drives a northward overturning and the eddies drive a southward one, and only their difference moves any water.* The two terms are each 20 to 30 Sv and the residual is a few sverdrups — **a small difference of large numbers**, which is why the Southern Ocean's response to changing winds is so uncertain.

**The two cells.**

| | Upper cell | Lower cell |
|---|---|---|
| Dense water | NADW, formed in the North Atlantic | AABW, formed on Antarctic shelves |
| Strength | about 17 Sv | about 20 Sv |
| Return route | adiabatic upwelling along outcropping isopycnals in the Southern Ocean | diapycnal mixing through the abyss |
| Energy source | Southern Ocean westerlies | tides and wind, via internal-wave breaking |
| Timescale | 100–200 yr | 1000 yr+ |
| Rate-limited by | Southern Ocean wind and eddies | abyssal mixing |

*In words: two overturning cells, sharing a basin, driven by different mechanisms, and responding to change on different timescales.*

**What buoyancy forcing does do.** It is not passive. It sets *where* the sinking occurs (the North Atlantic, not the North Pacific — [4.2](04-02-deep-water-formation-convection.md)), *what properties* the deep water has, and *how deep* it penetrates. What it does not set, on its own, is the rate. The distinction is between the *pattern* of the circulation and its *amplitude*.

## Picture

![A meridional section from 60 south to 60 north, surface to 5000 m. Grey dashed isopycnals rise steeply toward the surface at the southern end and outcrop there. A coral loop shows the upper cell of about 17 sverdrups: sinking in the north, flowing south at 2000 to 3000 m, rising adiabatically along the outcropping isopycnals in the Southern Ocean, and returning northward at the surface as Ekman transport of 28 sverdrups driven by the westerlies. A blue loop shows the lower cell of about 20 sverdrups: Antarctic Bottom Water forming at the far south, spreading north along the sea floor, rising slowly through the abyss by diapycnal mixing, and returning south](assets/04-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — the interior goes the wrong way).** The deep North Atlantic below 2000 m has an area of $2.0\times10^{13}\ \mathrm{m^2}$ and is fed by 15 Sv of NADW. Take $f = 9.4\times10^{-5}$, $\beta = 1.6\times10^{-11}$ at 40°N, and an abyssal layer thickness $H = 2500\ \mathrm{m}$.

(a) *Uniform upwelling velocity.*
$$w_0 = \frac{1.5\times10^{7}}{2.0\times10^{13}} = 7.5\times10^{-7}\ \mathrm{m\,s^{-1}} = 24\ \mathrm{m\,yr^{-1}}.$$

(b) *Stommel–Arons interior velocity.*
$$v = \frac{f w_0}{\beta H} = \frac{9.4\times10^{-5}\times7.5\times10^{-7}}{1.6\times10^{-11}\times2500} = \frac{7.05\times10^{-11}}{4.0\times10^{-8}} = 1.76\times10^{-3}\ \mathrm{m\,s^{-1}},$$

**northward**, at 1.8 mm s⁻¹ or 56 km per year.

(c) *The interior transport, and the boundary current.* Across a basin 5000 km wide, over the 2500 m layer:

$$T_{\text{interior}} = 1.76\times10^{-3}\times5\times10^{6}\times2500 = 2.2\times10^{7}\ \mathrm{m^3\,s^{-1}} = 22\ \mathrm{Sv}\ \text{northward}.$$

The source supplies 15 Sv from the north. So the deep western boundary current must carry **southward**:

$$T_{\text{DWBC}} = 15 + 22 = 37\ \mathrm{Sv}.$$

More than twice the source strength. This is the Stommel–Arons signature: the boundary current is larger than the source because it must also return the poleward interior recirculation. Observed DWBC transports of 20 to 40 Sv in the North Atlantic are broadly consistent, although the real current is much more complicated.

**Example 2 (why you'd care — will the AMOC weaken because the north warms?).** The standard concern is that Arctic warming and Greenland melt will weaken North Atlantic deep-water formation and hence the AMOC. Evaluate this against the two-cell picture.

*What the naive chain says.* Less buoyancy loss and more freshwater in the north means less dense water formed, means less sinking, means a weaker AMOC. The chain is not wrong — but each arrow deserves examination.

*Where the mechanism actually bites.* The upper cell's rate is set by how fast water is drawn up in the Southern Ocean, which depends on the Southern Hemisphere westerlies and the eddy field, not on North Atlantic conditions. If the Southern Ocean keeps pulling 28 Sv upward, that water has to come from somewhere, and reducing North Atlantic sinking does not by itself reduce the demand.

*So what does happen?* Three effects, and they act on different timescales.

1. **Immediately (years to a decade)**, reducing North Atlantic buoyancy loss reduces the *density* of the water formed, so it settles shallower. The overturning becomes shallower before it becomes weaker — which is exactly what most climate models show, and what the paleorecord shows for the Last Glacial Maximum.
2. **On decades to a century**, the reduced density contrast between the deep Atlantic and the Southern Ocean reduces the pressure gradient driving the deep southward flow, and the upper cell does weaken. This is the mechanism in most model projections, and it gives a 20 to 30 percent reduction by 2100 under strong forcing.
3. **On longer timescales**, the salt-advection feedback of [6.4](06-04-amoc-stability-stommel-model.md) can amplify a weakening into a collapse — and *that* feedback is genuinely a buoyancy-forcing instability, so the naive picture is right about the long-term risk even where it is wrong about the mechanism.

*The point.* **"What drives it" and "what changes it" are different questions, and confusing them is the standard error here.** The Southern Ocean sets the upper cell's rate, so it is what *drives* the circulation. But the North Atlantic sets the density contrast that the deep flow runs down, so a change there *does* change the rate — indirectly, with a lag, and through a mechanism the conveyor-belt picture describes incorrectly.

The practical consequence is that the observable to watch is not just North Atlantic convection. It is the deep density contrast between the North Atlantic and the Southern Ocean, and the Southern Ocean's wind and eddy field. This is why the AMOC observing system is designed the way it is ([6.5](06-05-observing-the-ocean.md)) and why Southern Ocean observation became a priority once the mechanical picture took hold.

## Watch out

- **You might think** the overturning is a "conveyor belt" of water going round a loop. **Actually** the diagram is a *streamfunction in latitude and depth*, averaged zonally. Individual water parcels take wildly different, much longer, and much less orderly routes; the ventilation-age distribution is broad rather than peaked at a transit time.
- **You might think** "thermohaline circulation" and "meridional overturning circulation" are synonyms. **Actually** the first asserts a mechanism (thermal and haline forcing drives it) that this lesson disputes. The second is a description of the flow field and asserts nothing. Use the second.
- **You might think** the Southern Ocean argument makes buoyancy forcing irrelevant. **Actually** buoyancy forcing sets which water sinks, where, and how dense it is — and hence the *depth* and *properties* of the whole cell. Removing it does not slow the circulation; it changes what is circulating.

## One-liner

> Cooling makes dense water but cannot by itself drive a circulation, because the ocean is heated and cooled at the same level — so the overturning's rate is set mechanically: the upper cell by Southern Ocean winds drawing water up along outcropping isopycnals, the lower cell by two terawatts of tidal and wind energy mixing the abyss.

## Problems

**P1 (🟢)** A deep basin below 3000 m has an area of $1.2\times10^{13}\ \mathrm{m^2}$ and is fed by 8 Sv. At 30°N, $f = 7.29\times10^{-5}$, $\beta = 1.98\times10^{-11}$, and the abyssal layer is 1500 m thick. (a) Compute the uniform upwelling velocity. (b) Compute the Stommel–Arons interior meridional velocity, with direction. (c) Comment in one sentence on why this direction is surprising.

**P2 (🟡)** Southern Ocean upwelling. At 60°S, $|f| = 1.263\times10^{-4}\ \mathrm{s^{-1}}$, $\rho_0 = 1027$, and the circumpolar circumference is $2\pi R\cos60^\circ$ with $R = 6.371\times10^{6}\ \mathrm{m}$. (a) Compute the circumference. (b) Compute the total northward Ekman transport for $\tau = 0.18\ \mathrm{N\,m^{-2}}$. (c) The residual circulation is this minus an eddy-driven return of $K s$ per unit length, with $K = 1000\ \mathrm{m^2\,s^{-1}}$ and $s = 1.2\times10^{-3}$. Compute the eddy transport and the residual. (d) The wind strengthens by 30 percent while $K$ also rises by 30 percent (eddy compensation). Recompute the residual and comment.

**P3 (🔴, optional)** Sandström's argument, made quantitative. (a) A heat engine operating between the ocean's warmest surface water (302 K) and its coldest (271 K) would have a Carnot efficiency $1 - T_c/T_h$. Compute it. (b) The ocean absorbs and releases about $2\times10^{15}\ \mathrm{W}$ of heat in its meridional overturning. If the Carnot efficiency of (a) applied, compute the mechanical power available. (c) Compare with the 2 TW required for mixing, and explain why this apparently reassuring comparison is misleading — i.e. why Sandström's theorem still bites. (d) State the one change to the ocean's geometry that would make it a genuine thermal engine, and say whether it occurs anywhere.

<details>
<summary>Solutions</summary>

**P1** (a) $$w_0 = \frac{8\times10^{6}}{1.2\times10^{13}} = 6.67\times10^{-7}\ \mathrm{m\,s^{-1}} = 21\ \mathrm{m\,yr^{-1}}.$$

(b) $$v = \frac{f w_0}{\beta H} = \frac{7.29\times10^{-5}\times6.67\times10^{-7}}{1.98\times10^{-11}\times1500} = \frac{4.862\times10^{-11}}{2.97\times10^{-8}} = 1.64\times10^{-3}\ \mathrm{m\,s^{-1}},$$

**northward** (poleward), at 1.6 mm s⁻¹.

(c) It is surprising because the deep water enters from the north and must ultimately leave toward the equator, yet the interior flow is toward the pole — the equatorward transport is confined entirely to a narrow deep western boundary current, which the interior calculation never sees.

**P2** (a) $$L = 2\pi\times6.371\times10^{6}\times0.5 = 2.002\times10^{7}\ \mathrm{m}.$$

(b) $$M_E = \frac{0.18}{1027\times1.263\times10^{-4}} = \frac{0.18}{0.1297} = 1.388\ \mathrm{m^2\,s^{-1}},$$
$$T_{\text{Ekman}} = 1.388\times2.002\times10^{7} = 2.78\times10^{7}\ \mathrm{m^3\,s^{-1}} = 27.8\ \mathrm{Sv}.$$

(c) $$\psi_{\text{eddy}} = K s = 1000\times1.2\times10^{-3} = 1.2\ \mathrm{m^2\,s^{-1}},$$
$$T_{\text{eddy}} = 1.2\times2.002\times10^{7} = 2.40\times10^{7} = 24.0\ \mathrm{Sv}\ \text{southward},$$
$$T_{\text{residual}} = 27.8 - 24.0 = 3.8\ \mathrm{Sv}\ \text{northward}.$$

**A 3.8 Sv residual from two terms of 28 and 24.** The residual is 14 percent of either term.

(d) With both up 30 percent:
$$T_{\text{residual}} = 1.3(27.8) - 1.3(24.0) = 1.3\times3.8 = 4.9\ \mathrm{Sv}.$$

The residual also rises by 30 percent — from 3.8 to 4.9 Sv.

The comment worth making is about **sensitivity rather than the answer**. If the eddies had not compensated at all ($K$ fixed), the residual would have been $1.3(27.8) - 24.0 = 12.1\ \mathrm{Sv}$, a **220 percent increase**. So the difference between full compensation and none is a factor of three in the response, from a 30 percent change in forcing. Because the residual is a small difference of large numbers, its fractional error is amplified by the ratio of the terms to the residual — here a factor of seven. **This is why the Southern Ocean's response to the observed strengthening of the westerlies is among the least well-constrained quantities in ocean climate science**, and why models that cannot resolve eddies ([3.4](03-04-mesoscale-eddies-baroclinic-instability.md)) get it systematically wrong.

**P3** (a) $$\eta = 1 - \frac{271}{302} = 1 - 0.8974 = 0.1026,$$

about 10 percent.

(b) $$P = 0.1026\times2\times10^{15} = 2.05\times10^{14}\ \mathrm{W} = 205\ \mathrm{TW}.$$

(c) That is a hundred times the 2 TW required, which appears to settle the matter comfortably in favour of a thermally driven ocean. **It does not, and the reason is that the Carnot efficiency is unattainable here in principle, not merely in practice.**

A Carnot engine requires the working fluid to absorb heat at high pressure and reject it at low pressure — that is what makes $\oint p\,dV$ non-zero. In the ocean, both the heating and the cooling occur at the sea surface, at essentially the same pressure. The relevant integral is $\oint\alpha\,dp$ around a closed circuit, and if all the heat exchange happens at one pressure, that integral vanishes regardless of how large the temperature difference is. **The available work is set by the pressure difference between where heat enters and where it leaves, not by the temperature difference.**

Put another way: the 205 TW figure answers the question "how much work could you extract if you could run a proper engine between these reservoirs?" The ocean cannot run that engine, because it has no way to carry heat downward to high pressure except by the very mixing whose energy budget is in question. The argument is circular unless a separate mechanical source is supplied.

(d) The ocean would be a genuine thermal engine if it were **heated from below and cooled from above** — that is, if the heat source lay at higher pressure than the sink. Geothermal heat flux through the sea floor does exactly this, and it is not zero: about $0.03\ \mathrm{TW}$ of mechanical energy is estimated to be available from it, roughly 1.5 percent of the requirement. Real but small.

The only other candidate is more interesting: the heating of *sinking* water by compression is adiabatic and does no net work around a cycle, but the **nonlinear equation of state** — specifically thermobaricity ([1.2](01-02-density-equation-of-state.md)) — does permit a small net conversion, because a parcel's expansion coefficient differs on the descending and ascending legs of the loop. Estimates put this at well under 0.1 TW. Neither route comes close, which is why the mechanical argument stands.

</details>

## Flashback

**From Lesson 4.3 (Diapycnal mixing and the abyssal recipe):** Deep water forms at 20 Sv and upwells through an abyssal area of $3.0\times10^{14}\ \mathrm{m^2}$; the abyssal temperature scale height is 1200 m. (a) Compute $w$ in m yr⁻¹. (b) Compute the required diapycnal diffusivity. (c) A microstructure survey over a smooth abyssal plain returns $\varepsilon = 2.0\times10^{-10}\ \mathrm{W\,kg^{-1}}$ with $N = 1.0\times10^{-3}\ \mathrm{s^{-1}}$. Compute $\kappa$ there with $\Gamma = 0.2$ and state the shortfall.

<details>
<summary>Solution</summary>

(a) $$w = \frac{2.0\times10^{7}}{3.0\times10^{14}} = 6.67\times10^{-8}\ \mathrm{m\,s^{-1}} = 2.10\ \mathrm{m\,yr^{-1}}.$$

(b) $$\kappa_{\text{required}} = wh = 6.67\times10^{-8}\times1200 = 8.0\times10^{-5}\ \mathrm{m^2\,s^{-1}}.$$

(c) $$\kappa_{\text{measured}} = \Gamma\frac{\varepsilon}{N^2} = 0.2\times\frac{2.0\times10^{-10}}{1.0\times10^{-6}} = 0.2\times2.0\times10^{-4} = 4.0\times10^{-5}\ \mathrm{m^2\,s^{-1}}.$$

Shortfall: $8.0/4.0 = 2.0$, a factor of **two**.

That is a much smaller discrepancy than the canonical factor of ten, and the reason is instructive: the stratification here is weak ($N = 10^{-3}\ \mathrm{s^{-1}}$, a 105-minute buoyancy period, typical of the abyss) rather than thermocline-like, and $\kappa \propto 1/N^2$ means the *same* dissipation produces a much larger diffusivity in weakly stratified water. NATRE's famous $1.2\times10^{-5}$ was measured at 300 m where $N$ is five times larger, so the same $\varepsilon$ would give 25 times less $\kappa$.

**The abyss is easier to mix than the thermocline, and by a large factor.** This partly reconciles Munk's requirement without appealing to topography at all — and it is a reminder that "the diffusivity is too small" is a statement about a particular depth, and that quoting a single $\kappa$ for the whole ocean discards the $1/N^2$ dependence that does much of the work.

</details>

## Connections

- **Backward:** the dense water being circulated is [4.2](04-02-deep-water-formation-convection.md)'s; the 2 TW mixing requirement and its energy sources are [4.3](04-03-diapycnal-mixing-abyssal-recipe.md)'s; the outcropping isopycnals that permit adiabatic upwelling are [2.2](02-02-thermal-wind-acc.md)'s ACC structure; the eddy term in the residual is [3.4](03-04-mesoscale-eddies-baroclinic-instability.md)'s.
- **Forward:** the overturning's heat transport is [4.5](04-05-meridional-heat-transport-bjerknes.md)'s; the Southern Ocean's controlling role is developed fully in [6.1](06-01-southern-ocean-hinge.md); and the buoyancy-driven instability that the mechanical picture does *not* remove is [6.4](06-04-amoc-stability-stommel-model.md)'s salt-advection feedback.
- **Sideways (thermodynamics):** Sandström's theorem is the second law applied to a fluid loop, and the key quantity $\oint\alpha\,dp$ is the same cycle integral that gives the work output of any heat engine — see [`thermodynamics-physics`](../../thermodynamics-physics/syllabus.md). The ocean's difficulty is geometric: its reservoirs are at the same pressure, so the loop encloses no area in the $p$–$\alpha$ plane.
