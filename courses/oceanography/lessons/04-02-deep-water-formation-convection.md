# Physical Oceanography · Lesson 4.2: Deep-water formation and convection

> ⏱ ~15 min · Module 4: The deep ocean and the overturning · Builds on: [1.5](01-05-mixed-layer-air-sea-fluxes.md), [4.1](04-01-water-masses-world-ocean.md) · Unlocks: [4.4](04-04-what-drives-the-overturning.md), [6.4](06-04-amoc-stability-stommel-model.md)

## Why this matters

[4.1](04-01-water-masses-world-ocean.md) listed the deep ocean's building blocks. This lesson is the factory. The whole abyss — 90 percent of the ocean's volume, the reservoir holding fifty times the atmosphere's carbon — is manufactured on perhaps four small patches of sea surface, in winter, in the worst weather on Earth.

The conditions required are stringent, which is why so few places qualify: you need a surface that is *already* nearly as dense as the water beneath it, and then a winter that removes enough buoyancy to close the gap. The first condition is **preconditioning** and the second is **forcing**, and a place that has one without the other makes no deep water at all. Understanding which is the binding constraint matters enormously, because the projected 21st-century changes act on them differently — warming weakens the forcing modestly, while Greenland meltwater attacks the preconditioning directly ([6.4](06-04-amoc-stability-stommel-model.md)).

## The idea

**Convection needs the column to be nearly neutral already.** [1.5](01-05-mixed-layer-air-sea-fluxes.md) showed that the energy cost of mixing a stratified column goes as $N^2h^3$. Deep convection means $h$ of a kilometre or more, so unless $N$ is nearly zero the cost is prohibitive. Only where the stratification has already been stripped away — by a cyclonic gyre doming the isopycnals upward, by previous winters, by geometry that isolates the region from the warm salty surface flow — can a winter's buoyancy loss reach the bottom.

**Two very different mechanisms make dense water, and they make different water.**

*Open-ocean convection* is deep vertical mixing over a region tens to hundreds of kilometres across: the Labrador Sea, the Greenland Sea, the Gulf of Lions. It happens in plumes about a kilometre wide, it reaches 1000 to 2500 m, and the resulting water mass has the properties of the surface water it started from — cold, relatively fresh, oxygen-saturated. **Nothing actually sinks very far**; the column is homogenized in place and then the dense product spreads laterally.

*Shelf convection with brine rejection* is different in kind. Sea ice forming on a shallow Antarctic shelf expels most of its salt into the water beneath. That water becomes the densest on Earth, slides off the shelf edge, and cascades down the continental slope as a gravity current, entraining ambient water as it goes. This is how Antarctic Bottom Water is made, and it is the only process that produces water dense enough to floor the abyss.

**Cooling is a weak densifier in cold water; salt is not.** [1.2](01-02-density-equation-of-state.md) showed $\alpha$ collapses toward $0.5\times10^{-4}\ \mathrm{K^{-1}}$ near the freezing point, so a degree of cooling buys almost nothing, and there is nowhere left to cool to anyway. **All polar dense-water formation is ultimately salt-driven**, which is why freshwater input is the lever that controls it.

**It is intermittent, localized and hard to see.** Labrador Sea convection reached 2000 m in the early 1990s, nearly ceased from 1996 to 2007, and returned in 2014. The regions are tiny, the season is short, the weather is dangerous, and until Argo floats began wintering there the record was fragmentary. **The single most consequential process in the ocean's climate role is also among the least observed.**

## The formal version

**The buoyancy loss required.** To convect to depth $h$, the surface must remove enough buoyancy to erase the column's stratification. From [1.5](01-05-mixed-layer-air-sea-fluxes.md), the potential energy to homogenize is $\rho_0N^2h^3/12$; the surface buoyancy flux $B$ supplies energy at a rate that homogenizes a layer of depth $h$ in

$$t = \frac{N^2h^2}{2B}, \qquad B = \frac{g\,\alpha\,|Q_{\text{net}}|}{\rho_0 c_p} - g\beta S(E-P),$$

*In words: the time to convect to a given depth grows as the square of the depth and the square of the stratification, and falls inversely with the buoyancy loss rate.* The $h^2$ and $N^2$ dependences are why preconditioning matters so much: halving $N$ quarters the time required.

**The four sites, and what makes each work.**

| Site | Mechanism | Depth reached | Product | Rate |
|---|---|---|---|---|
| Labrador Sea | open-ocean convection | 1000–2400 m | Labrador Sea Water (upper NADW) | 2–6 Sv |
| Nordic Seas (Greenland, Iceland) | open convection + overflow across sills | 1000–2000 m, then overflow | Denmark Strait / Iceland–Scotland overflows (lower NADW) | 6 Sv |
| Weddell Sea | shelf brine rejection + slope cascade | to the sea floor | AABW | 5–10 Sv |
| Ross Sea | same | to the sea floor | AABW | 3–5 Sv |
| Mediterranean | evaporative densification, Gulf of Lions | 2000 m, then Gibraltar overflow | MOW | 1 Sv |

*In words: the North Atlantic makes its deep water by convecting in the open ocean; Antarctica makes its by freezing sea water on a shelf.*

**Brine rejection, quantitatively.** Sea ice retains only 10 to 30 percent of the salt in the water it freezes from — take an ice salinity $S_i = 5$ from a water salinity $S_w = 34.5$. Freezing a thickness $h_i$ of ice over a water column of depth $H$ raises its salinity by

$$\boxed{\ \Delta S = \frac{h_i}{H}\,\frac{\rho_i}{\rho_w}\left(S_w - S_i\right)\ }$$

*In words: the salt excluded from the ice is dumped into the water below, diluted over the column's depth.* With $\rho_i/\rho_w = 0.92$. Note the leverage: a *shallow* shelf concentrates the brine, which is exactly why AABW is made on continental shelves 300 to 500 m deep and not in the deep Weddell basin.

**Overflows and entrainment.** Dense water formed in a marginal sea must cross a sill to reach the open ocean, and as it descends it entrains ambient water — typically doubling or tripling its volume flux and substantially diluting its properties. The Denmark Strait overflow leaves the sill at about 3 Sv and arrives at the deep Atlantic at 5 to 6 Sv; the Mediterranean outflow at Gibraltar leaves at about 1 Sv and reaches its equilibrium depth at 3 Sv. **What is measured downstream is not what was made**, and the entrainment ratio is one of the things ocean models get worst, because it depends on turbulence in a plume a few tens of kilometres wide.

**Why the North Pacific does not do this.** Its surface is too fresh — salinity around 32.8 against the North Atlantic's 35 — because the Pacific receives net precipitation while the Atlantic loses moisture to the Pacific across the low Central American isthmus. At $-1\ ^\circ\mathrm{C}$ that salinity deficit is worth about $1.7\ \mathrm{kg\,m^{-3}}$ of density, which no amount of cooling can make up ($\alpha$ having collapsed). So the North Pacific caps itself with a permanent halocline, convection cannot penetrate it, and no deep water forms anywhere in the Pacific. **A basin-scale asymmetry in the freshwater budget determines the shape of the global overturning** — and that dependence is what makes the whole system vulnerable in [6.4](06-04-amoc-stability-stommel-model.md).

## Picture

![Two panels. On the left, open-ocean convection in the Labrador Sea: coral arrows leaving the surface mark a buoyancy loss of 250 watts per square metre, two grey isopycnals dome upward beneath the region as preconditioning, and three blue downward arrows show narrow plumes about 1 km wide reaching 2000 m. On the right, shelf convection in the Weddell Sea: a thick grey bar at the surface is forming sea ice, a coral arrow marks brine rejected beneath it, and a blue plume slides off a 400 m shelf and descends the continental slope, entraining ambient water as it goes](assets/04-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — how much ice does it take?).** An Antarctic shelf 400 m deep has $S_w = 34.50$ and $\theta = -1.9\,^\circ\mathrm{C}$. Sea ice of salinity $S_i = 5$ forms to a thickness of $1.2\ \mathrm{m}$ over the winter. Take $\rho_i/\rho_w = 0.92$, $\beta = 7.9\times10^{-4}$, $\rho_0 = 1028$.

(a) *Salinity increase.*
$$\Delta S = \frac{1.2}{400}\times0.92\times(34.50-5) = 3.0\times10^{-3}\times0.92\times29.5 = 0.0814.$$

(b) *Density increase.*
$$\Delta\rho = \rho_0\beta\,\Delta S = 1028\times7.9\times10^{-4}\times0.0814 = 0.0661\ \mathrm{kg\,m^{-3}}.$$

(c) *Is that enough?* AABW must be denser than the Circumpolar Deep Water it displaces, by roughly $0.1$ to $0.2\ \mathrm{kg\,m^{-3}}$. **One winter's ice is not quite enough.**

That is the correct and interesting answer. Two things close the gap in reality. First, the ice does not simply sit there: **katabatic winds blow it away from the coast in polynyas**, so the same patch of water freezes repeatedly through the winter, producing effective ice thicknesses of 5 to 10 m rather than 1.2 m. Second, **cabbeling and thermobaricity** ([1.2](01-02-density-equation-of-state.md)) add a further increment when the shelf water mixes with CDW at the shelf break. Coastal polynyas are therefore not a curiosity but the essential machinery: the Ross Sea and Cape Darnley polynyas produce a large share of the world's bottom water from areas of a few thousand square kilometres.

**Example 2 (why you'd care — how much freshwater shuts the Labrador Sea down).** The Labrador Sea in late winter has $\theta = 3.0\,^\circ\mathrm{C}$, $S = 34.85$, and convection reaches 2000 m. The water just below is $0.05\ \mathrm{kg\,m^{-3}}$ denser than the convecting layer at the end of a strong winter. Take $\alpha = 1.0\times10^{-4}\ \mathrm{K^{-1}}$, $\beta = 7.9\times10^{-4}$, $\rho_0 = 1027$. How much freshwater, spread over the top 2000 m, would prevent convection from reaching that depth?

*The density deficit to create.* Convection stops when the surface layer can no longer become denser than the water below, i.e. when we add a buoyancy anomaly of $0.05\ \mathrm{kg\,m^{-3}}$ in the *light* direction — plus whatever the winter's cooling would have supplied. Take the target as $0.05\ \mathrm{kg\,m^{-3}}$.

*Salinity change needed:*
$$\Delta S = -\frac{\Delta\rho}{\rho_0\beta} = -\frac{0.05}{1027\times7.9\times10^{-4}} = -\frac{0.05}{0.8113} = -0.0616.$$

*Freshwater thickness.* Diluting a column of depth $H$ from $S$ to $S+\Delta S$ requires adding freshwater of thickness

$$h_{\text{fw}} = H\,\frac{|\Delta S|}{S} = 2000\times\frac{0.0616}{34.85} = 3.54\ \mathrm{m}.$$

*How much water is that?* Over a convection region of $3\times10^{5}\ \mathrm{km^2} = 3\times10^{11}\ \mathrm{m^2}$:

$$V = 3.54\times3\times10^{11} = 1.06\times10^{12}\ \mathrm{m^3}.$$

Delivered over one year ($3.156\times10^{7}$ s):

$$Q = \frac{1.06\times10^{12}}{3.156\times10^{7}} = 3.4\times10^{4}\ \mathrm{m^3\,s^{-1}} = 0.034\ \mathrm{Sv}.$$

*Context.* Greenland's current net mass loss is about 270 Gt yr⁻¹, which is $270\times10^{12}\ \mathrm{kg\,yr^{-1}} = 2.7\times10^{11}\ \mathrm{m^3\,yr^{-1}} = 0.0086\ \mathrm{Sv}$ — **a quarter of what this calculation says is needed**, and rising.

*The point.* The number is uncomfortably small, and the reason is worth stating. Density is an extraordinarily sensitive function of salinity in cold water, because $\alpha$ has collapsed and $\beta$ has not: the ratio $\beta/\alpha$ here is $7.9$, meaning one salinity unit is worth 8 kelvin. The system's stability therefore rests on a *small difference* between a salt supply from the south and a freshwater supply from the north, and small differences are fragile ([6.4](06-04-amoc-stability-stommel-model.md)).

Two honest caveats. This calculation assumes the freshwater stays in the convection region, whereas much of Greenland's melt is exported around the boundary currents without ever reaching the interior — which is one reason the observed Labrador Sea has not yet stopped convecting. And it treats one winter in isolation, whereas the real system integrates over years and can recover. **The calculation gives the right order of magnitude and the right sensitivity; it does not give a date.**

## Watch out

- **You might think** deep convection means water sinking from the surface to the sea floor. **Actually** open-ocean convection *homogenizes a column in place* — the plumes are narrow and the net vertical mass flux is small. The dense product then spreads laterally along its density surface. "Sinking" in the conveyor-belt sense is a poor description of what actually happens.
- **You might think** the deep-water formation rate is set by how cold the winter is. **Actually** it is usually set by preconditioning, i.e. by how weakly stratified the column was to begin with. A brutal winter over a strongly stratified column produces nothing; a mild one over a preconditioned column produces a great deal.
- **You might think** the water leaving a marginal sea is what arrives in the deep ocean. **Actually** overflows entrain two to three times their own volume descending the slope, so the downstream transport is much larger and the properties much diluted than at the sill. Attributing a measured deep transport entirely to a source region overstates that source badly.

## One-liner

> The entire abyssal ocean is manufactured on four small patches of winter sea surface — by open-ocean convection in the North Atlantic and by brine rejection on Antarctic shelves — and because cold water's density responds far more to salt than to temperature, all of it is ultimately controlled by freshwater rather than by cold.

## Problems

**P1 (🟢)** A shelf 300 m deep with $S_w = 34.60$ grows sea ice of salinity $S_i = 6$ to a thickness of $2.5\ \mathrm{m}$. Take $\rho_i/\rho_w = 0.92$, $\beta = 7.9\times10^{-4}$, $\rho_0 = 1028$. (a) Compute $\Delta S$. (b) Compute $\Delta\rho$. (c) The same ice growth occurs over a 1500 m deep basin instead. Recompute $\Delta\rho$ and state in one sentence why bottom water forms on shelves.

**P2 (🟡)** A convection site has $N = 1.2\times10^{-3}\ \mathrm{s^{-1}}$ and a winter buoyancy loss corresponding to $Q_{\text{net}} = -300\ \mathrm{W\,m^{-2}}$, with $\alpha = 1.0\times10^{-4}\ \mathrm{K^{-1}}$, $\rho_0 = 1027$, $c_p = 3990$, and negligible freshwater flux. (a) Compute the buoyancy flux $B$. (b) Using $t = N^2h^2/(2B)$, compute how long it takes to convect to 1000 m and to 2000 m. (c) A winter provides 90 days of this forcing. State the maximum depth reached. (d) Preconditioning halves $N$. Recompute the maximum depth and comment.

**P3 (🔴, optional)** The Denmark Strait overflow leaves the sill at $2.9\ \mathrm{Sv}$ with $\theta = 0.3\,^\circ\mathrm{C}$ and $S = 34.90$. By the time it reaches 2000 m in the Irminger Basin it has entrained ambient water with $\theta = 4.5\,^\circ\mathrm{C}$, $S = 35.00$. The downstream transport is $5.2\ \mathrm{Sv}$. (a) Compute the entrained transport and the entrainment ratio. (b) Compute the downstream $\theta$ and $S$ by conservation. (c) Using $\alpha = 1.1\times10^{-4}$, $\beta = 7.8\times10^{-4}$, $\rho_0 = 1028$ and a reference of $(2.0\,^\circ\mathrm{C}, 34.95)$, compute the density anomaly of the source, the entrained water, and the product, and verify that the product is intermediate. (d) Explain in two sentences why entrainment matters for the *depth* at which the overflow settles, and what it implies about modelling overflows on a coarse grid.

<details>
<summary>Solutions</summary>

**P1** (a) $$\Delta S = \frac{2.5}{300}\times0.92\times(34.60-6) = 8.333\times10^{-3}\times0.92\times28.60 = 0.2193.$$

(b) $$\Delta\rho = 1028\times7.9\times10^{-4}\times0.2193 = 0.178\ \mathrm{kg\,m^{-3}}.$$

Comfortably enough to make bottom water.

(c) Over 1500 m, $\Delta S$ is smaller by the factor $300/1500 = 0.2$:

$$\Delta S = 0.0439, \qquad \Delta\rho = 0.0356\ \mathrm{kg\,m^{-3}},$$

five times too small.

Bottom water forms on shelves because the brine from a given thickness of ice is diluted over the water column beneath it, so the density increase goes as $1/H$ — a shallow shelf concentrates the same salt into a fifth of the water and gets five times the effect.

**P2** (a) $$B = \frac{g\alpha|Q_{\text{net}}|}{\rho_0 c_p} = \frac{9.81\times1.0\times10^{-4}\times300}{1027\times3990} = \frac{0.2943}{4.098\times10^{6}} = 7.18\times10^{-8}\ \mathrm{m^2\,s^{-3}}.$$

(b) $$t(1000) = \frac{\left(1.2\times10^{-3}\right)^2\left(10^{3}\right)^2}{2\times7.18\times10^{-8}} = \frac{1.44\times10^{-6}\times10^{6}}{1.437\times10^{-7}} = \frac{1.44}{1.437\times10^{-7}} = 1.002\times10^{7}\ \mathrm{s} = 116\ \mathrm{days}.$$

$$t(2000) = 4\times1.002\times10^{7} = 4.01\times10^{7}\ \mathrm{s} = 464\ \mathrm{days}.$$

(c) With 90 days $= 7.776\times10^{6}\ \mathrm{s}$ available, invert for $h$:

$$h = \sqrt{\frac{2Bt}{N^2}} = \sqrt{\frac{2\times7.18\times10^{-8}\times7.776\times10^{6}}{1.44\times10^{-6}}} = \sqrt{\frac{1.117}{1.44\times10^{-6}}} = \sqrt{7.76\times10^{5}} = 881\ \mathrm{m}.$$

Under 900 m — respectable but not deep convection.

(d) Halving $N$ to $6.0\times10^{-4}$ divides $N^2$ by four, so $h$ doubles:

$$h = 1762\ \mathrm{m}.$$

**Halving the stratification doubles the convection depth from the same winter.** This is why preconditioning is the binding constraint rather than the forcing: doubling the heat loss instead would give only $\sqrt2 = 1.41$ times the depth. A cyclonic gyre that domes the isopycnals, or a run of previous cold winters that has already weakened $N$, is worth more than a severe winter — and it is why Labrador Sea convection switches on and off in multi-year regimes rather than tracking the annual weather.

**P3** (a) $$T_{\text{entrained}} = 5.2 - 2.9 = 2.3\ \mathrm{Sv}, \qquad \text{ratio} = \frac{2.3}{2.9} = 0.79.$$

The plume entrains about 80 percent of its own volume.

(b) Conserving heat and salt (volume-weighted, since densities are nearly equal):

$$\theta = \frac{2.9\times0.3 + 2.3\times4.5}{5.2} = \frac{0.87 + 10.35}{5.2} = \frac{11.22}{5.2} = 2.158\,^\circ\mathrm{C},$$
$$S = \frac{2.9\times34.90 + 2.3\times35.00}{5.2} = \frac{101.21 + 80.50}{5.2} = \frac{181.71}{5.2} = 34.944.$$

(c) With $\rho' = \rho_0[-\alpha(\theta-2.0) + \beta(S-34.95)]$:

Source $(0.3, 34.90)$:
$$\rho' = 1028\left[-1.1\times10^{-4}(-1.7) + 7.8\times10^{-4}(-0.05)\right] = 1028\left[1.87\times10^{-4} - 3.90\times10^{-5}\right] = 1028\times1.48\times10^{-4} = +0.152\ \mathrm{kg\,m^{-3}}.$$

Entrained $(4.5, 35.00)$:
$$\rho' = 1028\left[-1.1\times10^{-4}(2.5) + 7.8\times10^{-4}(0.05)\right] = 1028\left[-2.75\times10^{-4}+3.90\times10^{-5}\right] = 1028\times(-2.36\times10^{-4}) = -0.243\ \mathrm{kg\,m^{-3}}.$$

Product $(2.158, 34.944)$:
$$\rho' = 1028\left[-1.1\times10^{-4}(0.158) + 7.8\times10^{-4}(-0.006)\right] = 1028\left[-1.738\times10^{-5} - 4.68\times10^{-6}\right] = -0.0227\ \mathrm{kg\,m^{-3}}.$$

Intermediate between $+0.152$ and $-0.243$. $\checkmark$ (And close to the volume-weighted mean of the two, $ (2.9\times0.152 + 2.3\times(-0.243))/5.2 = -0.0227$, exactly as a linear equation of state requires.)

(d) Entrainment sets the settling depth because a plume comes to rest where its density matches the ambient — and entrainment moves that density steadily toward the ambient value as the plume descends. A plume that entrains heavily equilibrates high in the water column; one that entrains little runs all the way to the sea floor. The Denmark Strait overflow's product ends up as *lower* NADW at 2500 to 3500 m rather than on the bottom, precisely because it has been diluted on the way down.

For modelling this is a serious difficulty. The entrainment happens in a plume tens of kilometres wide descending a slope over a vertical scale of hundreds of metres, and it is controlled by shear-driven turbulence at the plume's upper interface — none of which a model with 1° horizontal grid and 50 vertical levels can represent. Such models typically produce overflows that are either far too diluted (numerical mixing on the staircase of grid cells) or not diluted at all, and the resulting deep-water properties are wrong by tenths of a kelvin, which propagates into the whole deep Atlantic's stratification. **Dedicated overflow parameterizations exist and are among the more consequential and least satisfying components of a climate ocean model.**

</details>

## Flashback

**From Lesson 3.5 (Coastal upwelling and eastern boundary systems):** Off Namibia at 25°S ($|f| = 6.16\times10^{-5}\ \mathrm{s^{-1}}$), an equatorward wind gives $\tau_\parallel = 0.12\ \mathrm{N\,m^{-2}}$, and the first-baroclinic wave speed is $c_1 = 1.9\ \mathrm{m\,s^{-1}}$. Take $\rho_0 = 1025$. (a) Compute the offshore Ekman transport. (b) Compute the width of the upwelling band as the baroclinic Rossby radius. (c) Compute the upwelling velocity in m per day, both from $M_E/L_d$ and from the simplified $\tau/(\rho_0c_1)$, and confirm they agree.

<details>
<summary>Solution</summary>

(a) $$M_E = \frac{0.12}{1025\times6.16\times10^{-5}} = \frac{0.12}{6.314\times10^{-2}} = 1.90\ \mathrm{m^2\,s^{-1}}.$$

(b) $$L_d = \frac{c_1}{|f|} = \frac{1.9}{6.16\times10^{-5}} = 3.08\times10^{4}\ \mathrm{m} = 30.8\ \mathrm{km}.$$

(c) $$w = \frac{M_E}{L_d} = \frac{1.90}{3.08\times10^{4}} = 6.17\times10^{-5}\ \mathrm{m\,s^{-1}} = 5.33\ \mathrm{m\,day^{-1}},$$

$$w = \frac{\tau}{\rho_0 c_1} = \frac{0.12}{1025\times1.9} = \frac{0.12}{1947.5} = 6.16\times10^{-5}\ \mathrm{m\,s^{-1}} = 5.32\ \mathrm{m\,day^{-1}}. \quad\checkmark$$

They agree to rounding, as the algebra of [3.5](03-05-coastal-upwelling-eastern-boundary.md)'s P2 guarantees.

*Check.* Note that Benguela's 5.3 m per day exceeds California's 3.8 despite a comparable wind, because the lower latitude gives a larger $L_d$ *and* a larger $M_E$ — but the two effects cancel in the simplified form, so the real cause is the weaker stratification ($c_1 = 1.9$ against California's $2.2$). Weakly stratified water is easier to lift, which is the same statement as [1.5](01-05-mixed-layer-air-sea-fluxes.md)'s and this lesson's: **stratification is the resistance, and everywhere in this course the interesting number is how much of it there is.**

</details>

## Connections

- **Backward:** the convection-depth criterion is [1.5](01-05-mixed-layer-air-sea-fluxes.md)'s mixing-energy budget with buoyancy loss instead of wind work; the reason salt rather than cold does the work is [1.2](01-02-density-equation-of-state.md)'s collapsing $\alpha$; the products are [4.1](04-01-water-masses-world-ocean.md)'s water masses.
- **Forward:** these sources are the deep limb of the overturning in [4.4](04-04-what-drives-the-overturning.md), and the freshwater sensitivity computed in Example 2 is precisely the salt-advection feedback that makes the Stommel model bistable in [6.4](06-04-amoc-stability-stommel-model.md); brine rejection under sea ice links to [climate-science 5.4](../../climate-science/lessons/05-04-the-cryosphere.md).
- **Sideways (convection):** open-ocean convection is Rayleigh–Bénard convection under rotation, where rotation constrains the plumes to a horizontal scale of order $(B/f^3)^{1/2}$ — about 270 m for the numbers here, against observed plume widths of a few hundred metres to a kilometre — rather than to the layer depth. That rotational constraint is why the plumes are so narrow, and it is the same physics as the columnar convection of [`fluid-dynamics`](../../fluid-dynamics/syllabus.md).
