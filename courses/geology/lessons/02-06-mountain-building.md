# Geology · Lesson 2.6: Mountain Building

> ⏱ ~15 min · Module 2: Plate Tectonics & the Deforming Crust · Builds on: [2.5](02-05-folds-faults-structures.md), [2.2](02-02-plate-boundaries.md), [1.6](01-06-metamorphic-rocks-rock-cycle.md) · Unlocks: 2.7 (earthquakes & seismic hazard)

## Why this matters

Mountains are the one geologic structure everybody has looked at, and almost every intuition about them is wrong. A range is not rock heaped onto the surface. **It is a slab of low-density crust floating in denser mantle, and most of it is underground.** The 5 km of Tibet you can see rests on about 28 km of crustal root you cannot — the mountain is an iceberg, and the visible part is 15 percent of the excess.

Two consequences follow, and both are checkable against real data. First, **elevation is a proxy for crustal thickness**: measure the mean height of a range and you can predict where seismologists will find its Moho, to within a few kilometres. Second, **erosion is largely self-defeating** — strip a kilometre of rock off a range and the summit drops only about 150 m, because the root floats up to replace most of what you removed. That is why the Appalachians are still 2 km high 270 million years after the last continent hit them, and why you can walk across gneiss that crystallized 30 km down.

This is the synthesis lesson for Module 2. [2.2](02-02-plate-boundaries.md) said continents collide; [2.4](02-04-how-rock-deforms.md) said rock fractures shallow and flows deep; [2.5](02-05-folds-faults-structures.md) gave the thrusts and folds; [1.6](01-06-metamorphic-rocks-rock-cycle.md) said the mineral assemblage records pressure. Mountain building is where all four cash out at once.

## The idea

**An orogen is assembled by convergence and governed by buoyancy.** Convergence supplies the shortening; buoyancy decides what happens to it.

**Three ways to build one**, distinguished by what is colliding rather than memorized as types:

- **Andean-type (subduction).** Ocean under continent. The down-going slab dehydrates and flux-melts the wedge ([1.3](01-03-how-the-earth-melts.md)), so the range is topped by an active volcanic arc, fronted by an accretionary wedge of scraped-off trench sediment, and thickened moderately by arc magma added from below plus shortening behind the arc. **Diagnostic: active andesitic volcanoes sitting on the range.**
- **Collisional (Himalayan-type).** Continent meets continent. Continental crust is too buoyant to subduct, so convergence has nowhere to go but *into the crust itself*. The crust roughly doubles in thickness, the margin of the lower plate is stacked into a **fold-and-thrust belt** — a wedge of thrust sheets vergent toward the undeformed foreland — and everything deep enough is regionally metamorphosed. **Diagnostic: a suture with slivers of ocean floor along it, and no arc volcanism once subduction stops.**
- **Accretionary.** Convergence rafts in whatever the ocean plate carries: island arcs, oceanic plateaus, seamount chains, microcontinents. Each arrives, jams in the trench, and welds on as a **terrane** — a fault-bounded crustal block whose stratigraphy, fossils and palaeomagnetic latitude have nothing to do with its neighbours.

**That last one is genuinely startling: most of western North America is not North American.** More than a hundred terranes have been mapped between the Rockies and the Pacific, and a large fraction of the crust west of the Rockies is exotic, docked over the last 200 million years. Wrangellia — now split between Alaska, the Yukon, British Columbia and Vancouver Island — records a palaeomagnetic latitude thousands of kilometres south of where it sits. You detect a terrane by finding a fault across which the geologic history simply does not join up.

**Now the buoyancy half, which is the lesson's spine.** Continental crust has density about $2.8\ \text{g/cm}^3$; the mantle beneath it is peridotite at about $3.3\ \text{g/cm}^3$. The crust floats, and like any floating body it sits with most of itself submerged. **Isostasy** is that statement: below some depth of compensation, every vertical column of rock weighs the same per unit area.

So a mountain range must have a **root**, and the root is far bigger than the peak. This is not a metaphor — it is Archimedes with the same arithmetic an iceberg obeys, and the ratio comes straight out of the two densities.

## The formal version

**Airy isostasy.** Take a reference column of normal continental crust, thickness $T_0$, surface at sea level, floating on mantle. Beside it, a mountain column with elevation $h$ above sea level and a root of thickness $r$ projecting below the normal Moho. Let $\rho_c$ be crustal density and $\rho_m$ mantle density. Equate the mass per unit area of the two columns down to a common depth of compensation:

$$\rho_c\,(h + T_0 + r) + \rho_m\,(D - T_0 - r) \;=\; \rho_c T_0 + \rho_m (D - T_0)$$

Everything with $D$ and $T_0$ cancels, leaving $\rho_c h = (\rho_m - \rho_c)\, r$, so

$$\boxed{\;r = \frac{\rho_c}{\rho_m - \rho_c}\,h \;=\; \frac{2.8}{0.5}\,h \;=\; 5.6\,h\;}$$

*In words: every kilometre of mountain standing above the plain is held up by 5.6 km of crustal root hanging below it.*

The **total excess crust** — root plus relief — is therefore

$$h + r = \frac{\rho_m}{\rho_m - \rho_c}\,h = 6.6\,h, \qquad T = T_0 + 6.6\,h .$$

*In words: crustal thickness is a linear readout of elevation. Rearranged, $h = (T - T_0)/6.6$ — give me a Moho depth and I will give you the mean elevation.*

**Erosion and rebound.** Now strip a thickness $\Delta e$ of rock off the top. The crust is thinner by $\Delta e$, so the new elevation follows from the same relation, and the surface lowering is

$$\boxed{\;\Delta h = \frac{\rho_m - \rho_c}{\rho_m}\,\Delta e = \frac{\Delta e}{6.6} = 0.152\,\Delta e\;}$$

*In words: erode a kilometre and the summit falls 152 metres. The other 848 metres are handed back by the root floating up.*

**This is the most important number in the lesson.** Removing rock removes buoyancy support and mass in a fixed ratio, and the mantle inflow beneath the root undoes 85 percent of the work. Equivalently: **to erase a range with $h = 5\ \text{km}$ you must remove $6.6 \times 5 = 33\ \text{km}$ of rock** — the entire excess crust — not 5 km.

**Exhumation follows immediately.** If the summit has come down by $\Delta h$, then $6.6\,\Delta h$ of rock has been removed from above whatever is now at the surface. Rock that equilibrated at 30 km depth is exposed once the range has lost about 4.5 km of elevation. **That is why the cores of ancient orogens are gneiss and migmatite** ([1.6](01-06-metamorphic-rocks-rock-cycle.md)) — the metamorphic facies you can hammer at the surface is a direct measure of how much crust used to be on top of it, via the lithostatic gradient

$$P = \rho_c\, g\, z \;\approx\; (2800)(9.81)\,z \;\approx\; 27.5\ \text{MPa per km of depth},$$

so $1\ \text{GPa}$ of metamorphic pressure means roughly 36 km of former overburden.

**Erosion is not the only way up.** Deep rock also reaches the surface by **tectonic denudation** — normal faulting that thins the section above it — and by ductile flow of weak lower crust. The cleanest example is the South Tibetan Detachment, a *normal* fault sitting on top of the Himalaya, extending the range while India is still ramming into it. An orogen can be shortening at its toe and pulling apart at its crest simultaneously.

**Crust cannot thicken indefinitely.** Over-thickened crust carries excess gravitational potential energy, and its lower part is hot and weak enough to creep ([materials-science 4.4](../../materials-science/lessons/04-04-failure-fracture-fatigue-creep.md)). Past a certain thickness the plateau spreads sideways under its own weight — **gravitational collapse** — and the upper crust responds with normal faults. **The empirical signature is a hard ceiling: no continental plateau on Earth stands much above 5 km.** Tibet is at 5.0, the Altiplano at about 3.8, and both are laced with active extensional structures. The quantitative force balance (potential-energy differences of order $3\times10^{12}\ \text{N/m}$, comparable to ridge push) belongs to [`geophysics`](../../geophysics/syllabus.md) 4.5.

**The orogenic life cycle**, with a live example at each stage:

| Stage | What is happening | Example |
|---|---|---|
| Convergence and shortening | thrust stacking, arc or collision | Taiwan (2–4 Ma), Andes, Alps |
| Thickening and metamorphism | crust doubles, root grows, regional metamorphism | Himalaya–Tibet (50 Ma to now) |
| Gravitational collapse | over-thick crust extends, normal faults | Basin and Range, Aegean, north Tibet |
| Erosion and isostatic rebound | 6.6 km removed per km of lost relief | Appalachians (270 Ma), Urals, Caledonides |
| Peneplained shield | root gone, crust back to normal, topography flat | Trans-Hudson orogen, Canadian Shield (1.8 Ga) |

**Climate enters the loop, and this part is genuinely contested.** Erosion rate depends on precipitation, precipitation is concentrated on a range's windward flank, and removing mass from one flank localizes uplift and deformation there. The "tectonic aneurysm" at Nanga Parbat and Namche Barwa — extreme exhumation exactly where the biggest rivers cut the range — is the flagship case. Treat it as an active hypothesis with good evidence rather than settled fact; the climate machinery itself is [`climate-science`](../../climate-science/syllabus.md).

## Picture

![A cross-section through a collisional mountain belt with the vertical scale true and the horizontal compressed. Five kilometres of topography is marked by a small bracket at the summit; below it a bracket spanning twenty-eight kilometres marks the crustal root hanging beneath the depth of the normal thirty-five kilometre Moho, so the root visibly dwarfs the relief. Thrust faults with teeth climb the left flank as a fold-and-thrust belt, a dashed suture cuts the core, and a green arrow traces an exhumation path from deep crust to the surface. Shading bands show metamorphic grade rising with depth from slate through schist and gneiss to migmatite. Beneath, an inset compares two crustal columns: stripping 6.6 kilometres of rock off the first lowers the summit by only one kilometre while the Moho rises 5.6 kilometres.](assets/02-06-fig1.svg)

Read the main panel vertically, not horizontally: the vertical scale is honest, so the ratio you see between the root bracket and the topography bracket is the real 5.6 to 1. Everything that looks like a mountain in the figure is the thin sliver above the dashed sea-level line.

## Worked examples

**Example 1 (mechanical — predict a Moho depth, then invert it).** The Tibetan Plateau has a mean elevation of $5.0\ \text{km}$. Take $\rho_c = 2.8\ \text{g/cm}^3$, $\rho_m = 3.3\ \text{g/cm}^3$, and normal crust $T_0 = 35\ \text{km}$. (a) Predict the root, the crustal thickness and the Moho depth. (b) The Altiplano's crust is measured seismically at about $65\ \text{km}$ thick — predict its elevation and compare with the observed $3.8\ \text{km}$.

**(a)** $$r = 5.6\,h = 5.6 \times 5.0 = \mathbf{28\ \text{km}} .$$

$$T = T_0 + h + r = 35 + 5.0 + 28 = \mathbf{68\ \text{km}} .$$

$$\text{Moho depth below sea level} = T - h = 68 - 5.0 = \mathbf{63\ \text{km}} .$$

**Seismic refraction and receiver-function studies put the Tibetan Moho at 65–75 km.** A calculation with two densities and one elevation lands inside the observed range — which is the strongest evidence there is that the plateau is in local isostatic equilibrium.

**(b)** Invert the relation:

$$h = \frac{T - T_0}{6.6} = \frac{65 - 35}{6.6} = \frac{30}{6.6} = \mathbf{4.5\ \text{km}} .$$

Observed: $3.8\ \text{km}$. **The model overpredicts by about 0.7 km, and the discrepancy is informative rather than embarrassing.** Three honest readings: the reference thickness $T_0$ under the South American foreland may be nearer 40 km than 35; part of the Altiplano's lower crust may be denser than $2.8$ (mafic underplating from the arc); and some of the plateau may be supported by hot, buoyant mantle rather than by a root at all. **A few hundred metres is about the accuracy Airy isostasy earns you** — good enough to predict a Moho, not good enough to argue over.

**Example 2 (why you'd care — why the Appalachians are still there).** The Alleghanian collision that closed the Iapetus Ocean and assembled Pangaea ended about $270\ \text{Ma}$, when the range plausibly stood at a mean $4.0\ \text{km}$. Today the southern Appalachian crust is about $42\ \text{km}$ thick. (a) What is the range's present mean elevation, from isostasy alone? (b) How much rock has been eroded? (c) What average erosion rate does that require, and how does it compare with the rate measured today?

**(a)** $$h_{\text{now}} = \frac{42 - 35}{6.6} = \frac{7}{6.6} = \mathbf{1.06\ \text{km}} .$$

The Blue Ridge averages a little over 1 km, with peaks near 2 km. **Two hundred and seventy million years of weather, and the arithmetic still works.**

**(b)** Crust then: $T = 35 + 6.6(4.0) = 61.4\ \text{km}$. Crust now: $42\ \text{km}$.

$$\Delta e = 61.4 - 42 = \mathbf{19.4\ \text{km of rock removed}} .$$

Cross-check with the rebound relation: $\Delta h = 4.0 - 1.06 = 2.94\ \text{km}$, and $6.6 \times 2.94 = 19.4\ \text{km}$ — consistent.

**Nineteen kilometres of rock came off, and the range lost under three kilometres of height.** Note what else this says: rock now exposed in the Blue Ridge sat at roughly 19 km depth at the end of the orogeny, and deeper still earlier — which is exactly why the core of the belt is amphibolite-grade gneiss rather than the shale and sandstone that was on top of it.

**(c)** $$\text{average rate} = \frac{19.4 \times 10^{3}\ \text{m}}{270 \times 10^{6}\ \text{yr}} = 7.2\times10^{-5}\ \text{m/yr} = \mathbf{0.072\ \text{mm/yr}} .$$

Cosmogenic $^{10}$Be measurements of modern Appalachian erosion give roughly $0.01$–$0.03\ \text{mm/yr}$ — **three to seven times slower than the long-term average.** That is not a contradiction; it is a prediction. Erosion rate scales with relief and slope, so a young steep range erodes fast, and as it flattens the rate collapses. Topography decays roughly exponentially, not linearly, and the tail is very long.

**Put the two effects together and you have the answer to why ancient orogens survive.** Isostatic rebound returns 85 percent of every metre eroded, *and* the erosion rate itself falls as the range flattens. A mountain belt is far easier to build than to destroy, and the Urals (250 Ma) and Caledonides (400 Ma) are still legible topography for the same reason.

## Watch out

- **You might think isostasy explains why mountains rise.** It does not build anything. Convergence and crustal thickening make the mountain; isostasy is only the bookkeeping that decides how the excess crust is split between root and relief. A plate boundary supplies the shortening, buoyancy supplies the ratio.
- **You might think eroding a kilometre lowers a summit by a kilometre.** It lowers it by 152 m. Confusing $\Delta e$ with $\Delta h$ is the single commonest error here, and it is a factor of 6.6.
- **You might treat Airy isostasy as exact.** Real lithosphere has flexural strength, so compensation is *regional*, not local: loads narrower than roughly 50–100 km are held up by the bending stiffness of the plate, with no root of their own. And some high ground is compensated by low-*density* mantle rather than by a thick crust — the Pratt mechanism, which is what holds up mid-ocean ridges and, as P3 shows, the Basin and Range. The quantitative flexure treatment is [`geophysics`](../../geophysics/syllabus.md) 2.6, and the gravity reductions behind it are 2.2.
- **You might read a rising surface as a growing mountain.** GPS shows the Alps rising ~1–2 mm/yr and Scandinavia up to ~10 mm/yr, but most of that is rebound — erosional in the Alps, glacial in Scandinavia ([3.4](03-04-glaciers-ice-ages.md)) — not new crustal thickening. Uplift of the *surface* and thickening of the *crust* are different quantities.
- **You might expect crust to thicken without limit under sustained convergence.** It cannot: past about 5 km of elevation the plateau spreads under its own weight. Orogens routinely extend at the crest while still shortening at the toe.
- **A terrane is not terrain.** A terrane is a fault-bounded crustal block with an alien geologic history; terrain is the shape of the ground.

## One-liner

> A mountain range is an iceberg of crust — 5.6 km of root for every kilometre of summit — so removing a kilometre of rock costs the summit only 150 metres, and orogens outlive by hundreds of millions of years the collisions that built them.

## Problems

**P1 (🟢)** A plateau has a mean elevation of $4.0\ \text{km}$. Use $\rho_c = 2.8\ \text{g/cm}^3$, $\rho_m = 3.3\ \text{g/cm}^3$, $T_0 = 35\ \text{km}$. (a) Give the root thickness, the total crustal thickness, and the depth to the Moho below sea level. (b) Erosion removes $3.0\ \text{km}$ of rock. What is the new elevation and the new crustal thickness? (c) How much rock must be removed in total to bring the plateau to sea level?

**P2 (🟡 — inference from field data)** A geologist maps an eroded orogenic belt. The core exposes kyanite–sillimanite gneiss whose assemblage indicates equilibration at $0.80\ \text{GPa}$. Structural and radiometric work dates the collision to $420\ \text{Ma}$. The belt's present mean elevation is $1.1\ \text{km}$ and seismic data give a crustal thickness of $40\ \text{km}$. Using $\rho_c = 2.8\ \text{g/cm}^3$, $\rho_m = 3.3\ \text{g/cm}^3$, $T_0 = 35\ \text{km}$, $g = 9.81\ \text{m/s}^2$: (a) At what depth did the gneiss equilibrate? (b) What average exhumation rate does that imply? (c) Reconstruct the crustal thickness and mean elevation at $420\ \text{Ma}$. (d) Is the belt in Airy equilibrium today?

**P3 (🔴, bridges to `geophysics` and to 5.1)** The Basin and Range province of Nevada has a mean elevation of about $1.7\ \text{km}$ but a crustal thickness of only about $30\ \text{km}$ — *thinner* than normal continental crust. (a) What elevation does Airy isostasy predict for a 30 km crust, and by how much does the province exceed it? (b) Suppose the extra support comes from anomalously low-density mantle occupying the $100\ \text{km}$ immediately below the Moho. What density deficit is required? Express it as a percentage of mantle density. (c) With a thermal expansivity $\alpha = 3\times10^{-5}\ \text{K}^{-1}$, what temperature anomaly would that be if it were purely thermal? Is that plausible, and what does your answer imply happened to the mantle lithosphere here? Connect the result to the province's surface structures from [2.5](02-05-folds-faults-structures.md).

<details>
<summary>Solutions</summary>

**P1 (a)** $$r = 5.6\,h = 5.6 \times 4.0 = \mathbf{22.4\ \text{km}} .$$

$$T = T_0 + h + r = 35 + 4.0 + 22.4 = \mathbf{61.4\ \text{km}} .$$

$$\text{Moho depth} = T - h = 61.4 - 4.0 = \mathbf{57.4\ \text{km below sea level}} .$$

Equivalently, straight from $T = T_0 + 6.6h = 35 + 26.4 = 61.4\ \text{km}$.

**(b)** $$\Delta h = \frac{\Delta e}{6.6} = \frac{3.0}{6.6} = 0.455\ \text{km}, \qquad h' = 4.0 - 0.455 = \mathbf{3.55\ \text{km}} .$$

$$T' = T - \Delta e = 61.4 - 3.0 = \mathbf{58.4\ \text{km}} .$$

Check for consistency: $35 + 6.6(3.545) = 35 + 23.4 = 58.4\ \text{km}$ — agrees.

**Note what just happened.** Three kilometres of rock, an amount that would take roughly 30 million years to erode at Himalayan rates, bought less than half a kilometre of lowering.

**(c)** All of the excess crust must go:

$$\Delta e_{\text{total}} = 6.6\,h = 6.6 \times 4.0 = \mathbf{26.4\ \text{km}} .$$

Sanity check: that is exactly $h + r = 4.0 + 22.4 = 26.4\ \text{km}$, the whole root plus the whole peak, leaving $61.4 - 26.4 = 35\ \text{km}$ — normal crust at sea level.

**P2 (a)** Invert the lithostatic relation $P = \rho_c g z$:

$$z = \frac{P}{\rho_c g} = \frac{0.80\times10^{9}\ \text{Pa}}{(2800)(9.81)} = \frac{0.80\times10^{9}}{2.747\times10^{4}} = 2.91\times10^{4}\ \text{m} = \mathbf{29\ \text{km}} .$$

*(Using crustal density throughout is the standard approximation; the overburden was all crust.)*

**(b)** That 29 km of rock is what has been removed from above the gneiss since it equilibrated:

$$\text{rate} = \frac{29.1\times10^{3}\ \text{m}}{420\times10^{6}\ \text{yr}} = 6.9\times10^{-5}\ \text{m/yr} = \mathbf{0.069\ \text{mm/yr}} \approx 69\ \text{m per million years}.$$

**A slow average, and it should be read as an average over a decaying range** — fast early, glacial by the end, exactly as in Worked Example 2.

**(c)** Crust at $420\ \text{Ma}$ was thicker by everything since removed:

$$T_{420} = 40 + 29.1 = \mathbf{69.1\ \text{km}} .$$

$$h_{420} = \frac{69.1 - 35}{6.6} = \frac{34.1}{6.6} = \mathbf{5.2\ \text{km}} .$$

**This belt was a Tibet.** A 69 km crust and a 5 km mean elevation is the Himalaya–Tibet system almost exactly, which is the standard and rather satisfying reading of the Caledonian and Alleghanian orogens.

Consistency check on the rebound relation: $\Delta h = 5.2 - 0.76 = 4.4\ \text{km}$ (using the Airy-predicted present elevation from part (d)), and $6.6 \times 4.4 = 29\ \text{km}$ — matches the erosion in (a).

**(d)** $$h_{\text{predicted}} = \frac{40 - 35}{6.6} = \frac{5}{6.6} = 0.76\ \text{km} \quad\text{versus}\quad 1.1\ \text{km observed}.$$

**The belt stands about 0.35 km higher than a 40 km crust can hold up by Airy isostasy alone.** That is within the slop of the model — a reference thickness of $T_0 = 33\ \text{km}$ instead of 35 would close the gap entirely — so the honest verdict is **approximately in equilibrium, with a small unexplained residual**. If you wanted to test it properly you would look for a Bouguer gravity anomaly: a genuine root produces a negative anomaly proportional to its size, and a residual supported by hot mantle instead of crust shows a different signature. That measurement is [`geophysics`](../../geophysics/syllabus.md) 2.3.

**P3 (a)** Airy, with a *thinner*-than-normal crust:

$$h_{\text{Airy}} = \frac{T - T_0}{6.6} = \frac{30 - 35}{6.6} = \frac{-5}{6.6} = \mathbf{-0.76\ \text{km}} .$$

**A 30 km crust should sit 760 m below sea level.** Nevada is at $+1.7\ \text{km}$, so the province stands

$$\Delta h_{\text{extra}} = 1.7 - (-0.76) = \mathbf{2.46\ \text{km too high}} .$$

**Airy isostasy fails here, and it fails by two and a half kilometres — not a rounding error.** Something other than a crustal root is holding Nevada up.

**(b)** Redo the column mass balance with a layer of thickness $L$ and density $\rho_m - \delta\rho$ beneath the Moho. Every term is as before except the mantle deficit, and the algebra collapses to

$$\delta\rho \cdot L = \rho_m \left( h_{\text{obs}} - h_{\text{Airy}} \right) = \rho_m \,\Delta h_{\text{extra}} .$$

*In words: the mass missing from the anomalous mantle layer must equal the mass of a mantle column as tall as the unexplained elevation.*

$$\delta\rho = \frac{(3300\ \text{kg/m}^3)(2.46\ \text{km})}{100\ \text{km}} = \mathbf{81\ \text{kg/m}^3} .$$

$$\frac{\delta\rho}{\rho_m} = \frac{81}{3300} = 0.0246 = \mathbf{2.5\ \text{percent}} .$$

**(c)** If purely thermal, $\delta\rho/\rho_m = \alpha\,\Delta T$, so

$$\Delta T = \frac{0.0246}{3\times10^{-5}} = \mathbf{820\ \text{K}} .$$

**That is not plausible for heating intact mantle lithosphere.** The uppermost mantle beneath a normal continent sits somewhere around 800–1000 °C; adding 820 K would put it several hundred degrees above the dry peridotite solidus ([1.3](01-03-how-the-earth-melts.md)) and the region would be a magma chamber, not a mantle.

**The resolution is that the mantle lithosphere is not there.** The inference — and it is the accepted one — is that Nevada's cold, dense mantle lithosphere was removed by delamination or convective thinning and replaced by hot asthenosphere upwelling to within a few tens of kilometres of the Moho. Part of the deficit is also *compositional*: melt-depleted residual mantle is intrinsically a little less dense than fertile peridotite, so you do not need the full 820 K of thermal contrast.

**Now close the loop with the structures.** This is precisely the province of horsts, grabens and listric normal faults from [2.5](02-05-folds-faults-structures.md), extended by a factor of roughly two since 20 Ma. The hot, buoyant, weak lithosphere both **holds the province up** and **makes it extend**: elevated, thin, hot crust carries excess gravitational potential energy and cannot support it, so it collapses laterally. The Basin and Range is the collapse stage of the orogenic life cycle applied to the wreckage of the Sevier–Laramide belt, and its high, thin, faulted crust is a single coherent story rather than three unrelated observations. **This is also the honest reason "isostasy" and "root" are not synonyms:** compensation can live in the mantle as easily as in the crust, and telling the two apart is what gravity surveys are for.

</details>

## Flashback

**From Lesson 2.5 (Folds, Faults & Structures):** A geologist walks a straight traverse northward over flat ground and logs the bedrock in this order: shale, sandstone, limestone, sandstone, shale. Bedding in the southern half dips 40° **south**; bedding in the northern half dips 40° **north**. (a) What structure is this, and is it an anticline or a syncline? (b) Which unit is oldest, and by what principle? (c) Continuing north past the last shale, she crosses sandstone and then limestone again, with bedding dipping 40° north throughout and no reversal of dip anywhere. What structure explains this second repetition, and what does it imply about the stress direction?

<details>
<summary>Solution</summary>

**(a)** The two limbs dip **away** from the centre of the pattern — south on the south side, north on the north side. Beds dipping away from an axis define an **upright anticline**, with an approximately east–west fold axis. (Had the limbs dipped *toward* the centre, it would be a syncline.)

The traverse is crossing an anticline whose crest has been eroded flat, which is why the same units appear symmetrically on both sides.

**(b)** **The limestone in the middle is oldest.** On an eroded anticline, the fold's core exposes the *oldest* rock, because the beds arch upward and the erosion surface cuts down through the arch into progressively deeper stratigraphic levels toward the axis. (On an eroded syncline the reverse holds — youngest in the core.)

The symmetry of the pattern about the limestone independently confirms the fold is upright rather than overturned.

**(c)** **A thrust fault.** The diagnostic is that the section repeats **without a reversal of dip**. In the fold, the repetition was produced by the two limbs dipping in opposite directions. Here the dip stays 40° north throughout, so walking north should carry her continuously *up* section into progressively younger rock. Instead she goes sandstone → limestone, that is, younger → older. **Older rock encountered above younger rock in the direction of younging is the signature of a thrust sheet**, and it is the one map relationship that no amount of folding can produce on its own.

**Stress direction:** a thrust is a reverse fault with a shallow dip, produced when the maximum principal compressive stress is **horizontal** and the minimum is vertical — that is, **north–south shortening**, perpendicular to the fold axis and in the same direction the anticline records. **The two structures agree**, which is the point: folds and thrusts in a fold-and-thrust belt are two responses to one compression, and finding them consistent is how you check a map. This is exactly the geometry stacked up on the flank of the orogen in this lesson's figure.

</details>

## Connections

- **Backward:** the thrusts and folds of [2.5](02-05-folds-faults-structures.md) are the fold-and-thrust belt's building blocks, and the brittle–ductile transition of [2.4](02-04-how-rock-deforms.md) is why the crest of a range breaks and its root flows; [2.2](02-02-plate-boundaries.md) supplied the collision, and [1.6](01-06-metamorphic-rocks-rock-cycle.md)'s facies are the depth gauge that makes exhumation measurable.
- **Forward:** [2.7](02-07-earthquakes-seismic-hazard.md) puts the thrusts to work — the largest continental earthquakes happen on the range-front thrusts described here; [3.3](03-03-rivers-landscape-evolution.md) reads uplift out of river knickpoints and terraces; [3.4](03-04-glaciers-ice-ages.md) reuses this exact isostasy calculation for ice loading and post-glacial rebound; [4.1](04-01-relative-dating-unconformities.md) and [4.5](04-05-reading-a-geologic-map.md) turn eroded orogens into unconformities and map patterns; [5.2](05-02-earth-history-hadean-proterozoic.md) and [5.3](05-03-earth-history-phanerozoic.md) use orogenies as the tempo of the supercontinent cycle.
- **Sideways:** the quantitative Airy and Pratt treatments are [`geophysics`](../../geophysics/syllabus.md) 2.3, flexural compensation is 2.6, gravity anomalies are 2.2 and the plate-force balance is 4.5; the creep that lets an over-thickened root flow sideways is [materials-science 4.4](../../materials-science/lessons/04-04-failure-fracture-fatigue-creep.md), operating by the dislocation mechanisms of [materials-science 4.2](../../materials-science/lessons/04-02-plastic-deformation-schmid.md); and the whole calculation is Archimedes' principle with $\rho_c$ and $\rho_m$ in place of ice and seawater.
