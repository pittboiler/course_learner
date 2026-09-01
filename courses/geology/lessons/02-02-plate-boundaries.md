# Geology · Lesson 2.2: Plate Boundaries

> ⏱ ~15 min · Module 2: Plate Tectonics & the Deforming Crust · Builds on: [2.1](02-01-evidence-for-drift.md), [1.3](01-03-how-the-earth-melts.md) · Unlocks: 2.3 (the driving mechanism)

## Why this matters

[2.1](02-01-evidence-for-drift.md) established that the plates move. This lesson is the payoff, and it is the single most useful thing in introductory geology: **the boundary type is a near-complete predictor of the geology.** Tell me how two plates are moving relative to each other and what they are made of, and I will tell you the landforms, the depth range of the earthquakes, whether there are volcanoes and what they erupt, and what rocks you would collect there — without having visited.

That is a strong claim, and the point of the lesson is that it rests on only **two questions**, not on memorized regional facts. Everything else in Module 2 is a consequence: [2.6](02-06-mountain-building.md) is what happens when the convergent case involves two continents, [2.7](02-07-earthquakes-seismic-hazard.md) is the seismicity in this figure looked at closely, and [2.8](02-08-volcanoes-volcanic-hazards.md) is the volcanism.

The predictions are also falsifiable in a satisfying way. **There are no earthquakes deeper than 670 km anywhere on Earth**, volcanic arcs sit almost exactly 110 km above the slab regardless of geometry, and the ocean floor's depth is a square-root function of its age. Those are numbers you can check against a dataset tonight.

## The idea

Two questions settle almost everything.

**Question 1: are the plates moving apart, together, or sliding past?** Three answers — divergent, convergent, transform — and each fixes the stress regime, hence the fault type and hence the landform. Divergent means extension, so normal faults and a topographic low along the axis. Convergent means compression, so thrusts and crustal thickening. Transform means shear, so strike-slip faults and, crucially, **no crust created and none destroyed**.

**Question 2: is either plate dense enough to sink?** This is the question that most people skip, and it is the one that generates the whole convergent zoo. The relevant densities:

| Layer | Density $\rho$ |
|---|---|
| Continental crust | $\approx 2.7\ \text{g/cm}^3$ |
| Oceanic crust (basalt/gabbro) | $\approx 3.0\ \text{g/cm}^3$ |
| Mantle lithosphere | $\approx 3.3\ \text{g/cm}^3$ |
| Asthenosphere | $\approx 3.25\ \text{g/cm}^3$ |

**Oceanic lithosphere is thin, dense mantle capped by a little basalt, and it cools and thickens with age.** By about 20–30 million years old the column as a whole is denser than the asthenosphere it rests on, and from then on it *wants* to sink. **Continental crust, at 2.7, cannot sink no matter how hard it is pushed** — it is 0.5 g/cm³ too light, and the buoyancy force is enormous.

So: **subduction is not a contest of strength, it is a contest of density.** Where an ocean plate meets anything, the ocean plate goes down. Where two ocean plates meet, the older (colder, denser) one goes down. Where two continents meet, **nothing goes down**, the convergence has to be absorbed by squashing, and you get the Himalaya.

**Everything else follows from three mechanisms you already have:**

1. Pull the plates apart and the asthenosphere rises to fill the gap; rising means decompression, and decompression melts peridotite with no heat added at all ([1.3](01-03-how-the-earth-melts.md)). Divergent boundaries therefore make **basalt**, always.
2. Push a wet, altered ocean plate down and it warms; at around 100 km depth its hydrous minerals break down and release water into the overlying hot mantle, which lowers the solidus and drives **flux melting** ([1.3](01-03-how-the-earth-melts.md)). Convergent boundaries therefore make **water-rich, silica-richer, explosive** magma.
3. Slide two plates past each other and neither of those happens. Transform boundaries are **volcanically dead**.

## The formal version

### The prediction table

This is the lesson. Read it as a set of claims to be justified, not as a list to memorize — each row is derived below.

| Boundary | Landform | Quake depths | Volcanism | Diagnostic rock |
|---|---|---|---|---|
| **Mid-ocean ridge** | ridge crest 2–3 km above the abyssal plain; axial valley if slow-spreading | **< 15 km only** | copious, effusive, basaltic | pillow basalt over sheeted dikes over gabbro (the **ophiolite** sequence) |
| **Continental rift** | fault-bounded grabens, rift lakes, half-graben tilt blocks | < 20 km | **bimodal**: alkali basalt *and* rhyolite | basalt + rhyolite, immature arkose, rift lake sediments |
| **Ocean–ocean convergent** | trench + island arc, often + back-arc basin | **0–670 km**, deepening away from trench | explosive, basaltic andesite to andesite | andesite, ash tuff; **blueschist** in the wedge |
| **Ocean–continent convergent** | trench + accretionary wedge + forearc basin + continental arc | **0–670 km** | explosive, andesite to dacite/rhyolite | andesite/dacite over granodiorite batholiths |
| **Continent–continent** | double-thickness crust, fold-and-thrust belt, high plateau | mostly < 70 km, over a **wide** zone | little; local anatectic leucogranite | schist, gneiss, migmatite; ophiolite slivers along the suture |
| **Transform** | linear valley or scarp offsetting older features | < 20 km | **none** | fault gouge, mylonite, serpentinite; **no new crust** |

$$\boxed{\;\text{boundary type} + \text{plate densities} \;\Longrightarrow\; \text{landform, quake depths, volcanism, rock}\;}$$

### Divergent boundaries: the seafloor is a cooling experiment

The ridge is high **not because magma is pushing it up but because it is hot and therefore less dense.** The plate is the cold top of the mantle, and it thickens by conduction as it ages. Both its thickness and its subsidence go as the square root of age:

$$h_{\text{lith}} \approx 10\sqrt{t}\ \ \text{km}, \qquad d(t) \approx 2500 + 350\sqrt{t}\ \ \text{m}$$

where $t$ is the crust's age in $\text{Ma}$ (mega-annum, millions of years) and $d$ is water depth. *In words: a plate 100 million years old is about 100 km thick and sits about 6 km below sea level; a brand-new plate at the ridge axis is nearly zero thick and sits 2.5 km down.* The $\sqrt{t}$ comes from a conduction depth $\sqrt{\kappa t}$, the same scaling as any diffusion front ([`transport-phenomena`](../../transport-phenomena/lessons/01-03-heat-mass-fluxes-fourier-fick.md)); the quantitative half-space cooling model belongs to [`geophysics`](../../geophysics/syllabus.md) 4.2.

**Ridge morphology depends on spreading rate, and the reason is thermal.** A slow ridge (Mid-Atlantic, full rate about $25\ \text{mm/yr}$) has time to cool and gain strength between magma pulses, so the axis can support a **1–3 km deep axial rift valley** bounded by normal faults. A fast ridge (East Pacific Rise, full rate $>90\ \text{mm/yr}$) stays hot and magma-filled, cannot support a valley, and has a smooth axial *high* instead. **Same process, opposite topography, because of a competition between cooling rate and magma supply.**

Earthquakes here are shallow *because there is nothing else available*: the brittle layer is only a few kilometres thick at a hot spreading axis ([2.4](02-04-how-rock-deforms.md) owns why depth controls brittleness). No deep quakes are possible.

**Continental rifts** are the same extension applied to the wrong material. Continental crust is thick, weak and fertile, so you get a wider zone, listric normal faults, and **bimodal volcanism** — mantle-derived basalt *plus* rhyolite from crustal melting where the basalt underplates it. The rift-to-drift sequence is a genuine prediction, and the modern Earth conveniently displays every stage at once: **East African Rift** (rifting), **Red Sea** (new narrow ocean, floored by young basalt, with thick evaporites from restricted circulation), **Atlantic** (mature ocean with passive margins on both sides).

### Convergent boundaries: the geometry is predictable

The single most useful fact about arcs: **the slab top is at $100$–$130\ \text{km}$ beneath the volcanic front almost everywhere**, regardless of the slab's dip, age or convergence rate. That is because the depth is set by a *pressure*-controlled reaction — the breakdown of chlorite, amphibole and serpentine in the slab — not by geometry.

Take that depth $h$ as given, let $\delta$ be the slab dip and $L$ the horizontal trench-to-arc distance. Then trivially:

$$\tan\delta = \frac{h}{L} \qquad\Longleftrightarrow\qquad L = \frac{h}{\tan\delta}$$

*In words: because the arc always sits above a fixed slab depth, the distance from trench to volcanoes is a direct readout of how steeply the slab dips.* **A steep slab gives a narrow arc–trench gap; a shallow slab gives a wide one; a nearly flat slab gives no arc at all**, because the slab scrapes along the base of the overriding plate with no hot mantle wedge in between to melt.

The **Wadati–Benioff zone** is the plane of earthquake foci that traces the slab. Depth increases away from the trench for the geometrically obvious reason, but the *cutoff* is not obvious at all. **Earthquakes stop at 670 km and there are none deeper.** At 670 km the confining pressure is about $24\ \text{GPa}$ — thousands of times any rock's frictional strength, which ought to forbid brittle failure from a few tens of kilometres down ([2.4](02-04-how-rock-deforms.md)). Deep events happen anyway, by two special mechanisms: **dehydration embrittlement** (a mineral releases water, pore pressure spikes, effective stress collapses) down to about 300 km, and **transformational faulting** (metastable olivine flipping to spinel structure in a runaway shear band) below that. Both need the slab to still be cold and metastable; by 670 km it has warmed through, and it also meets the mantle's density jump. **The 670 km cutoff is a mineral-physics fact wearing a tectonic costume.**

The three convergent flavours, by the density argument:

- **Ocean–ocean.** The older, colder plate wins the density contest and subducts. You get a trench (the deepest places on Earth), an **island arc** built on oceanic crust, and often a **back-arc basin** — because a steep, old slab tends to *roll back* seaward faster than the plates converge, stretching the overriding plate behind the arc until it rifts and spreads. Marianas, Tonga, Aleutians, Lesser Antilles.
- **Ocean–continent.** No contest: the ocean plate goes down. Trench, **accretionary wedge** (sediment and seamounts scraped off the descending plate and stacked into thrust slices — this is where **blueschist** forms, high pressure with low temperature, and it is diagnostic of subduction and of nothing else), **forearc basin** between wedge and arc, then a continental volcanic arc whose magmas assimilate crust on the way up and so trend andesitic to dacitic, with granodiorite batholiths beneath. Andes, Cascades.
- **Continent–continent.** The intervening ocean subducts until it is gone, then two continents meet and **subduction stops** because neither will sink. The convergence is absorbed as shortening: crust doubles to 60–75 km, fold-and-thrust belts propagate into the foreland, and regional metamorphism runs up the Barrovian series ([1.6](01-06-metamorphic-rocks-rock-cycle.md)). Seismicity becomes shallow and spread over a *wide* zone rather than a narrow dipping plane, and volcanism largely shuts off because the water supply is gone. Himalaya–Tibet, Alps, and the ancient Appalachians. [2.6](02-06-mountain-building.md) takes this apart.

### Transform boundaries and the fracture-zone trap

A transform is **conservative**: lithosphere is neither created nor destroyed, only offset. Continental examples (San Andreas, Alpine Fault, North Anatolian) are the famous ones, but most transforms are oceanic, and they exist because **a spreading ridge on a sphere cannot be a single continuous line** — it breaks into segments joined by transforms.

Here is the classic trap, and it is worth getting right. Take a ridge broken into two segments, the southern crest lying east of the northern crest. Crust moves *away* from whichever ridge segment made it. Just north of the offset, the crust lies east of the northern ridge and moves **east**. Just south of the offset, that same longitude lies west of the southern ridge and moves **west**. So:

$$\text{apparent offset: sinistral} \qquad \text{actual slip: } \textbf{dextral}$$

*In words: the transform slips in the sense opposite to the way the ridge appears to be offset.* This was J. Tuzo Wilson's 1965 insight and it is the reason "transform fault" needed a new name. Two consequences follow immediately, and both are checkable:

1. **Only the segment between the two ridge crests is a plate boundary.** Beyond the crests, both sides of the scar belong to the *same* plate and move identically. That inactive continuation is a **fracture zone** — a bathymetric and magnetic scar, not a boundary, and it is **aseismic**.
2. **The offset does not grow with time.** It is inherited from how the ridge first broke; steady spreading keeps the transform's length constant.

The fracture zone still records something useful: across it, crust of different ages sits side by side, with an age contrast of

$$\Delta t = \frac{\text{offset}}{v_{1/2}}$$

where $v_{1/2}$ is the half-spreading rate — and that age contrast shows up as a **bathymetric step**, via the $\sqrt{t}$ depth law.

**Triple junctions** are points where three plates meet, and their stability is a velocity-triangle condition: the three relative-motion vectors must sum to zero and the junction geometry must be self-consistent as it evolves. Ridge–ridge–ridge junctions (the Afar triple junction) are always stable; many others are not and must migrate or transform into something else.

**Hotspots** are the exception that proves the scheme: intraplate volcanism, fed from below rather than by any boundary process, producing age-progressive island chains ([2.8](02-08-volcanoes-volcanic-hazards.md)).

### The bookkeeping constraint

Earth's surface area is fixed. Therefore, integrated over the planet:

$$\sum_{\text{ridges}} L_i \, u_i \;=\; \sum_{\text{trenches}} L_j \, c_j$$

where $L$ is boundary length, $u$ full spreading rate and $c$ convergence rate. *In words: every square metre of new seafloor must be paid for by a square metre subducted somewhere else.* **This is why the Pacific is shrinking**: the Atlantic grows at its ridge and has almost no trenches, so the accounting is settled around the Pacific rim.

One last distinction: **relative** plate motion (what magnetic stripes and transform azimuths measure directly, and what boundaries actually care about) is not **absolute** motion, which requires choosing a reference frame — usually the hotspots or a no-net-rotation condition. Two plates can both be moving east in an absolute frame while their shared boundary is convergent.

## Picture

![A wide cross-section from a mid-ocean ridge on the left, across an ocean basin with thickening sediment, to a trench, an island arc and a back-arc basin on the right. Melting is shaded beneath the ridge where the mantle rises and decompresses, in the mantle wedge above the slab at about 110 kilometres depth where water driven off the slab causes flux melting, and beneath the back-arc spreading centre. Earthquake foci are shallow beneath the ridge and beneath the transform, and along the subducting slab they deepen away from the trench to 670 kilometres, where they stop abruptly at a marked line. Below, a map view shows a ridge offset by a transform: only the segment between the two ridge crests carries earthquakes and slips, right-laterally, while the linear scars continuing beyond the crests are fracture zones with both sides moving in the same direction and no seismicity.](assets/02-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — reading slab dip off a map, and predicting the consequences).** Two intra-oceanic arcs. In Arc A the volcanic front lies $90\ \text{km}$ from the trench axis; in Arc B it lies $280\ \text{km}$ from the trench. Take the slab top beneath the volcanic front to be $h = 110\ \text{km}$ in both. (a) Find the dip of each slab. (b) A third segment of the same margin has a slab dipping at $8^\circ$ — where would its volcanoes be? (c) Predict the state of stress in the overriding plate in each case.

**(a)** $$\tan\delta_A = \frac{110}{90} = 1.222 \;\Longrightarrow\; \delta_A = \mathbf{50.7^\circ}$$

$$\tan\delta_B = \frac{110}{280} = 0.3929 \;\Longrightarrow\; \delta_B = \mathbf{21.4^\circ}$$

**A tripling of the arc–trench gap corresponds to a halving of the dip.** Arc A is a steep, old, cold slab (Mariana-like); Arc B is a shallow one (Andean-like).

**(b)** $$L = \frac{110}{\tan 8^\circ} = \frac{110}{0.1405} = \mathbf{783\ \text{km}}$$

**But this is a prediction that fails, and the failure is the interesting part.** At $783\ \text{km}$ inland the slab is no longer separated from the overriding plate by a wedge of hot asthenosphere — a slab that flat is pressed against the base of the overriding lithosphere. The water it releases enters *cold* lithospheric mantle, which does not melt. **So the correct prediction for a flat-slab segment is no volcanoes at all**, and that is exactly what is observed in the flat-slab segments of Peru and central Chile, where the Andes have a several-hundred-kilometre volcanic gap.

**(c)** Steep slab (A): the slab sinks faster than the plates converge, so the trench **rolls back** seaward, the overriding plate is dragged after it and goes into **extension** — expect a back-arc basin, thin crust, high heat flow, modest interplate earthquakes. The Mariana system has exactly this.

Shallow slab (B): a large contact area presses the two plates together, coupling is strong, the overriding plate is in **compression** — expect a fold-and-thrust belt far inland, thickened crust, high topography, and **great megathrust earthquakes**. Chile has exactly this, including the largest instrumentally recorded event on Earth (1960, $M_w\,9.5$).

**One geometric number predicted the tectonic regime, the topography, the back-arc, and the earthquake hazard.**

**Example 2 (why you'd care — the global area budget, and a self-consistency check).** Take total ridge length $\approx 65{,}000\ \text{km}$, mean full spreading rate $\approx 5\ \text{cm/yr}$, total oceanic crust area $\approx 3.0\times10^{8}\ \text{km}^2$, total trench length $\approx 44{,}000\ \text{km}$. (a) Compute the rate of seafloor production. (b) Deduce the mean age of the ocean floor and check it against the observation from [2.1](02-01-evidence-for-drift.md) that no seafloor is older than about $200\ \text{Ma}$. (c) Deduce the mean convergence rate at trenches. (d) Apply the same accounting to the Atlantic.

**(a)** $$A' = L\,u = (6.5\times10^{4}\ \text{km})(5\times10^{-5}\ \text{km/yr}) = \mathbf{3.25\ \text{km}^2/\text{yr}}$$

About three square kilometres of new ocean floor per year — roughly $3.3\ \text{m}^2$ every second, planet-wide.

**(b)** In steady state, area in equals area out, so the mean residence time of a patch of seafloor is

$$\bar{t} = \frac{A}{A'} = \frac{3.0\times10^{8}}{3.25} = 9.2\times10^{7}\ \text{yr} \approx \mathbf{92\ \text{Ma}}$$

**Now the check.** If seafloor is produced and consumed steadily, its ages are distributed roughly uniformly between $0$ and some maximum $T$, and a uniform distribution has mean $T/2$. So

$$T \approx 2\bar{t} = \mathbf{184\ \text{Ma}}$$

**This is a genuine prediction, and it lands.** The oldest in-place ocean floor — in the western Pacific and off Newfoundland — is Jurassic, about $180$–$200\ \text{Ma}$. Two crude global averages, multiplied together, reproduce the number that killed the static-Earth hypothesis. **Contrast the continents, where rocks reach $4.0\ \text{Ga}$ (giga-annum, billions of years): oceanic crust is recycled on a timescale twenty times shorter than the continents have existed**, which is the deep reason the ocean basins carry no long-term record and the continents carry all of it.

**(c)** $$\bar{c} = \frac{A'}{L_{\text{trench}}} = \frac{3.25\ \text{km}^2/\text{yr}}{4.4\times10^{4}\ \text{km}} = 7.4\times10^{-5}\ \text{km/yr} = \mathbf{7.4\ \text{cm/yr}}$$

Observed mean convergence rates cluster around $6$–$8\ \text{cm/yr}$. The budget closes.

**(d) The Atlantic, where the budget deliberately does not close.** Mid-Atlantic Ridge length $\approx 16{,}000\ \text{km}$ at a full rate of $\approx 2.5\ \text{cm/yr}$:

$$A'_{\text{Atl}} = (1.6\times10^{4})(2.5\times10^{-5}) = 0.40\ \text{km}^2/\text{yr}$$

The Atlantic has essentially no subduction zones — only the small Lesser Antilles and Scotia arcs. So **the Atlantic is growing at about $0.4\ \text{km}^2$ per year and nothing inside it consumes that**. Integrated over the $180\ \text{Ma}$ since Pangaea broke up:

$$0.40 \times 1.8\times10^{8} = 7.2\times10^{7}\ \text{km}^2$$

against an actual Atlantic basin area of roughly $8\times10^{7}\ \text{km}^2$. **The whole Atlantic is accounted for by steady spreading since the Jurassic**, and the area had to come from somewhere: the Pacific, which is ringed by trenches and is closing. The Pacific plate is being consumed on three sides at once, and the entire Farallon plate that once floored the eastern Pacific has already gone down beneath North America, leaving only the Juan de Fuca, Rivera and Cocos fragments.

## Watch out

- **You might think a fracture zone is a plate boundary.** It is not, and this is the most common error in the whole subject. Only the segment **between the two offset ridge crests** is the transform; beyond the crests both sides belong to the same plate, move identically, and generate no earthquakes. Plot ocean-floor seismicity and you can see the transforms light up and stop dead at the ridge crests.
- **You might read the slip sense off the apparent offset.** It is **opposite**. A ridge whose segments step in a left-lateral-looking pattern is joined by a **right-lateral** transform, because the crust moves away from each ridge segment. Wilson 1965; check it against the figure by tracing which ridge made each patch of crust.
- **You might think the ocean plate subducts because the continent is stronger, or because it is "pushed under".** Neither. It subducts because it is *denser* — the ocean plate is negatively buoyant after about 20–30 Ma and sinks under its own weight. Continental crust at $2.7\ \text{g/cm}^3$ cannot be forced down no matter how hard you push, which is why collision replaces subduction the moment the ocean between two continents runs out. [2.3](02-03-driving-mechanism.md) shows this sinking is the *main force driving the plates*, not a passive consequence.
- **You might treat deep earthquakes as ordinary faults.** At $500\ \text{km}$ the confining pressure makes frictional sliding impossible ([2.4](02-04-how-rock-deforms.md)). Deep events require dehydration embrittlement or transformational faulting, both of which need cold metastable slab — which is precisely why they stop at $670\ \text{km}$ and why the deepest earthquakes occur in the *oldest, coldest* subducting slabs.
- **You might think the ridge is high because magma inflates it.** It is high because it is hot and thermally expanded. Depth follows $\sqrt{\text{age}}$ with no reference to magma supply — which is also why the ridge is a continuous global feature rather than a chain of volcanic edifices.
- **You might expect every boundary to be purely one of the three types.** Oblique convergence usually **partitions** into a trench-normal thrust plus a trench-parallel strike-slip fault (Sumatra's megathrust plus the Great Sumatran Fault). Real boundaries are also zones tens to hundreds of kilometres wide, not lines, especially in continental crust.

## One-liner

> Ask only two questions — are the plates converging, diverging or sliding, and is either one dense enough to sink — and the landforms, quake depths, volcanism and rocks all follow; the ocean plate always goes down because it is denser, the arc always sits about 110 km above the slab, and nowhere on Earth does an earthquake happen below 670 km.

## Problems

**P1 (🟢)** Name the boundary type and say which plate (if either) is descending, for each field description:

(a) A 4,000-km linear submarine mountain chain with a 30-km-wide, 2-km-deep valley running along its crest; earthquakes are confined to the upper 10 km; heat flow is three times the abyssal average; dredged samples are glassy-rinded basalt pillows.

(b) A belt of andesitic stratovolcanoes 300 km inland from an 8-km-deep trench, with granodiorite batholiths exposed in the eroded core of the range; earthquakes reach 600 km depth and get systematically deeper inland.

(c) A 2,500-km belt of thrust faults and amphibolite-facies gneiss, crust 70 km thick, mean elevation over 5 km, earthquakes almost all shallower than 70 km but spread across a 300-km-wide zone, and essentially no active volcanoes.

**P2 (🟡)** A single convergent margin has three along-strike segments. The volcanic front lies $240\ \text{km}$ from the trench in the northern segment and $130\ \text{km}$ in the southern segment. The central segment has **no volcanoes at all**; its Benioff seismicity puts the slab top at $100\ \text{km}$ depth some $600\ \text{km}$ inland from the trench. Take the arc-forming slab depth as $110\ \text{km}$.

(a) Compute the slab dip in the northern and southern segments.
(b) Compute the effective dip in the central segment.
(c) Explain the volcanic gap mechanistically — the slab is still dehydrating, so why no magma?
(d) Predict one structural and one seismological difference between the central and southern segments that a field programme could test.

**P3 (🔴, optional)** A north–south oceanic ridge is offset. The northern crest lies $500\ \text{km}$ **west** of the southern crest. A linear scarp joins them and continues as a bathymetric step for thousands of kilometres beyond each crest. Earthquakes occur only on the segment between the crests. The half-spreading rate is $2\ \text{cm/yr}$.

(a) Identify the active plate boundary and give its length. What is the correct name for the scarp beyond the crests, and why is it aseismic?
(b) Determine the slip sense on the active segment, and state what sense a geologist would wrongly infer from the map pattern alone.
(c) Compute the age contrast across the scarp.
(d) At one point along the scarp the younger side is $20\ \text{Ma}$. Using $d(t) = 2500 + 350\sqrt{t}$ metres, compute the bathymetric step and say which side is deeper.
(e) Does the offset grow with time? Justify.

<details>
<summary>Solutions</summary>

**P1 (a) A mid-ocean ridge — divergent, nothing descends.** Every observation is diagnostic and they are mutually consistent: the axial valley identifies it as a **slow-spreading** ridge (a fast one would have an axial high); shallow-only seismicity because the brittle layer at a hot spreading axis is a few kilometres thick; high heat flow because the plate is newborn; glassy-rinded pillow basalt because lava was quenched by seawater. **Rock, heat, seismicity and morphology all say the same thing**, which is what makes the identification safe.

**(b) Ocean–continent convergence — the oceanic plate descends, dipping inland.** The trench plus a Benioff zone to 600 km establishes subduction; the dip direction is given by the deepening direction. Continental rather than intra-oceanic because of the granodiorite batholiths and the dacitic-to-andesitic composition — an island arc built on oceanic crust produces basaltic andesite and lacks large granodiorite plutons, because there is no thick felsic crust to assimilate.

*Bonus geometry:* $\tan\delta = 110/300 = 0.367$, so $\delta \approx 20^\circ$ — a shallow, strongly coupled, Andean-type slab.

**(c) Continent–continent collision — nothing is descending; subduction has ceased.** The tells are the *absence* of things: no trench, no deep Benioff zone, no arc volcanoes. What is present is what shortening produces: 70-km crust (double normal), a wide thrust belt, and regional Barrovian metamorphism ([1.6](01-06-metamorphic-rocks-rock-cycle.md)). Seismicity spread over 300 km rather than on one dipping plane says the deformation is distributed through weak, thick continental crust rather than localized on a single slab interface.

**P2 (a)** $$\tan\delta_N = \frac{110}{240} = 0.4583 \;\Longrightarrow\; \delta_N = \mathbf{24.6^\circ}$$

$$\tan\delta_S = \frac{110}{130} = 0.8462 \;\Longrightarrow\; \delta_S = \mathbf{40.2^\circ}$$

**(b)** $$\tan\delta_C = \frac{100}{600} = 0.1667 \;\Longrightarrow\; \delta_C = \mathbf{9.5^\circ}$$

A **flat slab** — it travels 600 km horizontally while descending only 100 km.

**(c) The slab is dehydrating on schedule; what is missing is the hot rock to melt.** Flux melting needs two ingredients: water *and* mantle already close to its solidus ([1.3](01-03-how-the-earth-melts.md)). In a normal arc the slab descends steeply away from the overriding plate, opening a wedge of hot asthenosphere that convects and sits within a couple of hundred degrees of the dry solidus; adding water drops the solidus below the ambient temperature and it melts.

Under a flat slab **the wedge is squeezed shut.** The slab is pressed against the base of the overriding lithosphere, so the water it releases enters cold lithospheric mantle at perhaps 600–800 °C rather than asthenosphere at 1300 °C. Even a wet solidus is not crossed. The water goes into hydrous minerals — serpentine and amphibole in the overriding mantle — instead of into melt. **The volcanic gap is not a failure of the flux-melting model; it is a confirmation of it, because the model says you need both ingredients.**

**(d) Structural prediction:** the central (flat-slab) segment should be under **strong horizontal compression far inland**, because the slab is in wide contact with and mechanically coupled to the overriding plate. Expect basement-cored, thick-skinned uplifts hundreds of kilometres from the trench (Laramide-style), a broad zone of active shortening, and thickened crust well beyond where a normal arc's deformation stops. The southern (steep) segment, with a small contact area and likely rollback, should be much less compressed and may even be in **extension**, with a back-arc basin or intra-arc rifting.

**Seismological prediction:** the central segment should show **shallow crustal seismicity distributed hundreds of kilometres inland** (reverse-faulting mechanisms in the basement uplifts) plus a long, gently dipping Benioff zone; the southern segment should have seismicity concentrated near the trench with a steep, narrow Benioff plane and possibly normal-faulting mechanisms in the back-arc. A second test: the flat segment should have a **larger locked megathrust area**, so it should host larger maximum-magnitude interplate earthquakes ([2.7](02-07-earthquakes-seismic-hazard.md)).

Both are exactly what the Peruvian and central Chilean flat-slab segments show, which is the point — the geometry does the predicting.

**P3 (a)** The active boundary is the **transform**, and it is only the segment lying **between the two ridge crests**: length $= \mathbf{500\ \text{km}}$.

Beyond each crest, the scarp is a **fracture zone**. It is aseismic because **both sides of it belong to the same plate.** East of the southern crest, crust north of the scarp was made at the northern ridge and crust south of it at the southern ridge, but *both* now lie east of their respective ridges and are therefore both moving east at the same rate. Identical velocity vectors means zero relative motion means no slip and no earthquakes. It is a healed scar recording a former boundary, not a boundary.

**(b)** Trace which ridge made each side of the *active* segment. The northern crest lies to the west, the southern crest to the east; the transform runs east–west between them.

- Crust immediately **north** of the transform, in the interval between the crests, lies **east** of the northern ridge, so it moves **east**.
- Crust immediately **south** of the transform, in that same interval, lies **west** of the southern ridge, so it moves **west**.

Stand on the south side and face north: the far block moves to your right. Stand on the north side and face south: the far block again moves to your right. The slip is **right-lateral (dextral)**.

**What a geologist would wrongly infer:** treating the ridge as one line later cut by a fault, the southern block appears displaced **east** relative to the northern — which, read as a fault offset, looks **left-lateral (sinistral)**. **The apparent and actual senses are opposite**, and this is Wilson's argument for why a transform is a distinct class of fault: the offset was never created by slip on it.

**(c)** Convert the half-rate: $2\ \text{cm/yr} = 20\ \text{km/Ma}$. Crust on one side of the fracture zone was made at a ridge $500\ \text{km}$ further along the spreading direction than crust on the other, so at a given point,

$$\Delta t = \frac{500\ \text{km}}{20\ \text{km/Ma}} = \mathbf{25\ \text{Ma}}$$

**(d)** Younger side $t = 20\ \text{Ma}$, older side $t = 20 + 25 = 45\ \text{Ma}$.

$$d(20) = 2500 + 350\sqrt{20} = 2500 + 350(4.472) = 2500 + 1565 = 4065\ \text{m}$$

$$d(45) = 2500 + 350\sqrt{45} = 2500 + 350(6.708) = 2500 + 2348 = 4848\ \text{m}$$

$$\Delta d = 4848 - 4065 = \mathbf{783\ \text{m}}$$

**The older side is deeper**, by about 780 m — because it has had 25 million more years to cool and contract. This is why fracture zones are *visible* in bathymetry as steps thousands of kilometres long: a fracture zone is a place where two different ages of seafloor, and therefore two different depths, are juxtaposed. **The step is the $\sqrt{t}$ cooling law made into topography.**

Note the step *decreases* along the fracture zone as both sides age: at 100 and 125 Ma the same 25 Ma contrast gives $350(11.18 - 10.00) = 413\ \text{m}$, roughly half. The square root flattens.

**(e) No.** Slip on the transform does not change the separation of the ridge crests — the two ridge segments are pinned to their own plates and move apart symmetrically, so the transform's length is whatever it was when the ridge first segmented. **The offset is inherited geometry, not accumulated displacement.**

(Honest caveat: ridge offsets *do* change over geological time, but by ridge-segment **propagation** and migration of the offset, not by slip on the transform — and that shows up as a bend or a set of abandoned traces in the fracture-zone pattern, which is how it is recognized.)

</details>

## Flashback

**From Lesson 1.6 (Metamorphic Rocks & the Rock Cycle):** A geologist maps two parallel metamorphic belts, 80 km apart, in rocks of the same age.

- **Belt W** contains glaucophane, lawsonite and jadeite; peak conditions are estimated at $1.0\ \text{GPa}$ and $300\ ^\circ\text{C}$.
- **Belt E** contains andalusite, cordierite and abundant granitic plutons; peak conditions are $0.2\ \text{GPa}$ and $600\ ^\circ\text{C}$.

(a) Name the facies of each belt. (b) Convert Belt W's peak pressure to a burial depth, taking crustal density $\rho = 2800\ \text{kg/m}^3$ and $g = 9.8\ \text{m/s}^2$. (c) Compute each belt's apparent geothermal gradient in degrees per kilometre and say what is anomalous about each. (d) What single tectonic setting produces both belts at once, and which side faced the ocean?

<details>
<summary>Solution</summary>

**(a)** Glaucophane (the blue amphibole), lawsonite and jadeite are the **blueschist facies** — high pressure, low temperature. Andalusite plus cordierite with plutons nearby is low pressure, high temperature: **hornfels / contact-metamorphic facies** (the low-P end of the amphibolite–granulite range).

**(b)** Lithostatic pressure is the weight of the overlying column per unit area:

$$P = \rho g z \;\Longrightarrow\; z = \frac{P}{\rho g} = \frac{1.0\times10^{9}\ \text{Pa}}{(2800)(9.8)} = \frac{1.0\times10^{9}}{2.744\times10^{4}} = 3.6\times10^{4}\ \text{m} = \mathbf{36\ \text{km}}$$

Belt W's rocks were buried to about 36 km — the base of normal continental crust — and came back up.

**(c)** Belt W: $$\frac{300\ ^\circ\text{C}}{36\ \text{km}} = \mathbf{8.3\ ^\circ\text{C/km}}$$

Belt E: $z = 0.2\times10^{9}/2.744\times10^{4} = 7.3\ \text{km}$, so $$\frac{600}{7.3} = \mathbf{82\ ^\circ\text{C/km}}$$

A normal continental geotherm is $20$–$30\ ^\circ\text{C/km}$. **Belt W is far too cold for its depth and Belt E is far too hot for its depth** — and both anomalies need explaining at once, in rocks of the same age 80 km apart.

**(d) A subduction zone — this is a paired metamorphic belt.** Only one setting refrigerates rock at 36 km depth: a slab descending faster than heat can diffuse into it drags cold material down, depressing isotherms and giving the impossibly low gradient of the blueschist belt. **Blueschist is diagnostic of subduction and of nothing else**, precisely because no other process gets high pressure and low temperature into the same rock.

The same slab supplies the water that drives flux melting in the wedge above, and those magmas rise into the arc, where they bake their wallrocks at shallow depth — producing the high-T/low-P belt. **One process, two opposite anomalies, side by side.**

**Belt W faced the ocean.** The high-pressure belt forms in the accretionary wedge on the trench side; the high-temperature belt is the arc, on the continent side. So the slab dipped from west to east, and the trench lay west of Belt W. (This is the Sanbagawa–Ryoke pairing in Japan, and the Franciscan–Sierra Nevada pairing in California — and it is the reason the pairing's *polarity* is used to work out subduction direction in ancient orogens, where the trench is long gone.)

</details>

## Connections

- **Backward:** [2.1](02-01-evidence-for-drift.md) supplied the magnetic-stripe spreading rates that this lesson's area budget spends; [1.3](01-03-how-the-earth-melts.md)'s three melting mechanisms map one-to-one onto boundary types — decompression at ridges, flux melting at arcs, heat transfer in continental arcs; [1.6](01-06-metamorphic-rocks-rock-cycle.md)'s facies are the fingerprints in the table's rightmost column.
- **Forward:** [2.3](02-03-driving-mechanism.md) asks *why* plates move and finds the answer sitting in this figure — the dense sinking slab; [2.6](02-06-mountain-building.md) is the continent–continent row expanded into a whole lesson; [2.7](02-07-earthquakes-seismic-hazard.md) takes the Benioff dots seriously; [2.8](02-08-volcanoes-volcanic-hazards.md) explains why divergent volcanism is quiet and convergent volcanism kills people. Module 5 uses boundary reconstructions to tell Earth's history ([5.3](05-03-earth-history-phanerozoic.md)).
- **Sideways:** the quantitative machinery deliberately left out lives in [`geophysics`](../../geophysics/syllabus.md) — half-space cooling and the $\sqrt{t}$ law in 4.2, the plate-force balance in 4.5, seismic imaging of slabs in 1.5. The $\sqrt{t}$ scaling itself is the same conduction-front result as [`transport-phenomena` 1.3](../../transport-phenomena/lessons/01-03-heat-mass-fluxes-fourier-fick.md); the 670 km cutoff is a phase-transition argument of the kind [`materials-science` 3.1](../../materials-science/lessons/03-01-phase-diagrams-lever-rule.md) sets up.
