# Geology · Lesson 1.5: Sedimentary Rocks

> ⏱ ~15 min · Module 1: Earth Materials & the Rock Cycle · Builds on: [1.4](01-04-igneous-rocks-and-bodies.md), [1.3](01-03-how-the-earth-melts.md) · Unlocks: [1.6](01-06-metamorphic-rocks-rock-cycle.md) (metamorphism and the rock cycle)

## Why this matters

Igneous and metamorphic rocks are reports from the interior. They tell you what the mantle was doing and how deep the crust went, and about the surface of the planet they say almost nothing.

**Sedimentary rocks are the only rocks that form at surface conditions, and therefore the only rocks that record surface conditions.** Every question Modules 3, 4 and 5 will ask — what was the climate, where was the shoreline, what was the atmosphere made of, what was alive, how fast was the mountain rising — is answered from sedimentary rock or not at all. They are about 5 percent of the crust by volume and about 75 percent of the land surface you can walk on, they hold essentially all groundwater, oil, gas and coal, and they contain the entire fossil record ([evolution-ecology 2.4](../../evolution-ecology/lessons/02-04-macroevolution-history-of-life.md)).

Two pieces of this lesson are load-bearing far downstream and worth learning properly the first time: **way-up indicators**, which are how you know which end of a tilted or folded sequence is younger ([2.5](02-05-folds-faults-structures.md), [4.1](04-01-relative-dating-unconformities.md), [4.5](04-05-reading-a-geologic-map.md)), and **porosity and permeability**, which decide whether a rock is an aquifer or a seal ([3.6](03-06-groundwater-aquifers-karst.md), [5.4](05-04-resources-geologic-hazards.md)).

## The idea

**A sedimentary rock is the output log of a transport machine.** Sediment does not travel passively: every stage of the journey filters it, and each filter leaves a signature you can measure in hand sample. That gives three *independent* readouts from one rock:

| What you measure | What it records |
|---|---|
| **Composition** — which minerals survived | the **source rock** and the climate it weathered in |
| **Texture** — sorting, rounding, grain size | the **journey**: how far, how energetically, how many times |
| **Structure** — bedding geometry inside the rock | the **final environment** and the direction the water or wind moved |

**The production line has five stages**, and every one leaves a fingerprint:

$$\text{weathering} \to \text{erosion} \to \text{transport} \to \text{deposition} \to \text{lithification}$$

*In words: rock is broken down in place, picked up, carried, dropped, and then squeezed and glued back into rock.* **Weathering** (owned by [3.1](03-01-weathering-soils.md)) breaks rock down chemically and mechanically; **erosion** is the pick-up; **transport** by water, wind or ice does the sorting and rounding; **deposition** happens when the carrying medium can no longer hold the grain; **lithification** is **compaction** (grains pressed together, water squeezed out) plus **cementation** (calcite, quartz or iron oxide precipitated in the remaining pore space).

**The single most useful inference in the whole subject:** transport sorts by size and abrades corners, and it does both progressively. So a **well-sorted, well-rounded, pure quartz sandstone has been transported far, or recycled through several cycles**, and every mineral less durable than quartz has been destroyed along the way. An **angular, poorly sorted sandstone still full of pink feldspar** has barely moved — it is granite that fell downhill and was buried before the feldspar had time to rot into clay. Same rock name, opposite histories, and you read it off the texture in ten seconds.

## The formal version

### Clastic rocks: classified by grain size, described by texture

The **Wentworth scale** is a logarithmic (base-2) grain-size scale. The convenient version is the **phi scale**:

$$\phi = -\log_2\!\left(\frac{d}{d_0}\right), \qquad d_0 = 1\ \text{mm}$$

*In words: phi is minus the base-2 log of the diameter in millimetres, so each whole phi unit is a halving of grain size and coarse grains get negative phi.* Because grain-size distributions are roughly log-normal, phi turns them into ordinary Gaussians you can take a mean and standard deviation of.

| Class | Diameter | $\phi$ | Rock |
|---|---|---|---|
| Boulder / cobble / pebble / granule | $> 2\ \text{mm}$ | $< -1$ | **conglomerate** (rounded clasts) or **breccia** (angular) |
| Sand | $\tfrac{1}{16}$ to $2\ \text{mm}$ | $4$ to $-1$ | **sandstone** |
| Silt | $\tfrac{1}{256}$ to $\tfrac{1}{16}\ \text{mm}$ | $8$ to $4$ | **siltstone** |
| Clay | $< \tfrac{1}{256}\ \text{mm}$ | $> 8$ | **shale** (fissile) / **mudstone** (not) |

**Sorting** is the spread of the distribution — literally the standard deviation $\sigma_\phi$ of the grain-size distribution in phi units. Under about $0.5$ is well sorted; over about $2$ is very poorly sorted. **Rounding** is the sharpness of corners, and it is a separate axis: a grain can be well sorted and angular, or rounded and poorly sorted.

Two kinds of **maturity** follow, and keeping them apart matters:

- **Textural maturity** — well sorted plus well rounded plus little clay matrix. Records *transport energy and duration*.
- **Compositional maturity** — high quartz, no feldspar, no rock fragments. Records *chemical destruction of the unstable minerals*, and therefore climate and time as much as distance.

The sandstone families are just points in that space: **quartz arenite** (mature both ways), **arkose** (over 25 percent feldspar — immature, first-cycle, granite source), **litharenite** (rock fragments), and **greywacke** (poorly sorted sand in a mud matrix — dumped fast, typically by a turbidity current).

### Chemical rocks: precipitated from solution

**Limestone** ($\text{CaCO}_3$), overwhelmingly biogenic in the Phanerozoic — shells and skeletons, not inorganic precipitate. **Dolostone** ($\text{CaMg(CO}_3)_2$), mostly a replacement of limestone. **Chert** ($\text{SiO}_2$, microcrystalline), largely from siliceous plankton. And **evaporites**, which are the cleanest quantitative story in sedimentary geology.

**Evaporites precipitate in strict order of increasing solubility**, because as brine concentrates, each mineral saturates when its ion product reaches its solubility product ([general-chemistry 2.3](../../general-chemistry/lessons/02-03-aqueous-reactions-precipitation-acid-base-redox.md)). Evaporating ordinary seawater (salinity $35\ \text{g/kg}$):

| Precipitate | Formula | Concentration factor | Brine volume remaining |
|---|---|---|---|
| Calcite / aragonite | $\text{CaCO}_3$ | $\sim 2\times$ | $\sim 50\ \%$ |
| Gypsum | $\text{CaSO}_4\cdot 2\text{H}_2\text{O}$ | $\sim 5\times$ | $\sim 19\ \%$ |
| **Halite** | $\text{NaCl}$ | $\sim 10\times$ | $\sim 10\ \%$ |
| Bitterns (sylvite, carnallite, epsomite) | K and Mg salts | $\sim 25\times$ | $\sim 4\ \%$ |

**This is the same logic as fractional crystallization from a cooling magma** ([1.3](01-03-how-the-earth-melts.md)) — a multicomponent liquid separating solids in sequence, with the residual liquid driven steadily away from its starting composition. Cooling and evaporating are two ways of running the same phase diagram ([materials-science 3.1](../../materials-science/lessons/03-01-phase-diagrams-lever-rule.md)). **A vertical sequence carbonate–gypsum–halite is therefore a direct record of a basin drying out**, and its thickness tells you how much water was involved (Worked example 2).

### Organic and biochemical rocks

**Coal** — peat buried and progressively devolatilized: peat → lignite → bituminous → anthracite, a rank sequence driven by burial temperature that is really low-grade metamorphism ([1.6](01-06-metamorphic-rocks-rock-cycle.md)). Coal requires a swamp where organic production outruns decay, which means standing water and low oxygen. Also **biogenic limestone and chert**, and the organic-rich shales that are the source rocks for oil and gas ([5.4](05-04-resources-geologic-hazards.md)).

### Sedimentary structures: flow direction, environment, and which way is up

This is the part that pays off in Modules 2 and 4. In folded or overturned terrain, **superposition alone will lie to you** — you need an indicator *internal to the bed* that is independent of the bed's present orientation.

| Structure | What it reads | **Way-up rule** |
|---|---|---|
| **Cross-bedding** | palaeocurrent: foresets dip *downcurrent* | foresets are **truncated at the top**, tangential into the **base** |
| **Graded bedding** | one waning current; the turbidite signature | **coarse at base, fining upward** |
| **Ripple marks** | asymmetric = current (steep face downstream); symmetric = waves | **sharp crests point up**, rounded troughs down |
| **Mud cracks** | subaerial exposure, wetting and drying | wedges **taper downward**, filled from above |
| **Sole marks** (flute, groove casts) | palaeocurrent; flutes deepen upcurrent | casts **protrude from the underside** of a bed |
| **Geopetal fill** | the horizontal at the time of deposition | sediment on the **floor** of a shell cavity, sparry cement above |
| **Bioturbation, rootlets** | colonization from the sediment surface | burrows and roots penetrate **downward** from the top |

**Bedding itself is the fundamental structure**, and a bedding plane is a pause or a change in supply. **Massive** (structureless) beds usually mean deposition too fast for the flow to organize the grains — a debris flow or a slump.

### Porosity and permeability

**Porosity** $\phi_p$ is the void fraction, $\phi_p = V_{\text{void}}/V_{\text{total}}$. **Permeability** $k$ is a completely different thing: the *connectivity* of those voids, the rock's willingness to transmit fluid. For a granular rock the Kozeny–Carman estimate captures the scaling:

$$k \;\approx\; \frac{d^{2}\,\phi_p^{3}}{180\,(1-\phi_p)^{2}}$$

where $d$ is grain diameter. *In words: permeability goes as the square of grain size and the cube of porosity.* **The $d^2$ is why clay betrays your intuition** — freshly deposited mud has *higher* porosity than sand (60 to 80 percent versus 40 percent), and permeability roughly $10^{6}$ times lower, because its pores are a thousand times narrower and its platy grains are coated in bound water. **A shale is a seal precisely because it is porous.** [3.6](03-06-groundwater-aquifers-karst.md) turns this into Darcy's law, one of the flux-law family ([transport-phenomena 1.1](../../transport-phenomena/lessons/01-01-one-flux-law-three-transports.md)).

Sorting matters as much as size: in a poorly sorted sand the fines occupy the pores between the coarse grains, so **the same grains sorted badly make a far worse aquifer**.

Burial destroys porosity roughly exponentially (**Athy's law**):

$$\phi_p(z) = \phi_{p,0}\,e^{-cz}$$

with $z$ depth, $\phi_{p,0}$ the surface porosity and $c$ a compaction coefficient — about $0.27\ \text{km}^{-1}$ for sand, about $0.55\ \text{km}^{-1}$ for mud. Sand starting at 40 percent is at $0.40\,e^{-0.81} = 18$ percent by 3 km: still a good reservoir. Mud starting at 65 percent is at 12 percent and utterly impermeable.

Because compaction expels water and not solid, the solid thickness is conserved:

$$h_1(1-\phi_{p,1}) = h_0(1-\phi_{p,0})$$

*In words: to find the original thickness of a compacted bed, restore its porosity.* This **decompaction** step is mandatory before any subsidence or sedimentation-rate calculation in [4.4](04-04-stratigraphy-facies-correlation.md).

## Picture

![Panel a shows the Wentworth grain size scale on a logarithmic axis from clay through silt and sand to gravel, with millimetre and phi values at each boundary and the rock name above each field, and beneath it three sketched grain populations illustrating immature, submature and supermature sediment. Panel b shows four sedimentary structures drawn in cross-section, each with a grey arrow marking stratigraphic up and a blue arrow marking water motion: cross-bedding with truncated foresets, graded bedding fining upward into a mud cap, current and wave ripples, and mud cracks tapering downward and filled from above.](assets/01-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — why one current makes three deposits).** A river in flood delivers quartz grains ($\rho_s = 2650\ \text{kg/m}^3$) of three sizes into a still lake $10\ \text{m}$ deep: medium sand ($d = 0.5\ \text{mm}$), coarse silt ($d = 30\ \mu\text{m}$) and clay ($d = 3\ \mu\text{m}$). Water: $\rho_f = 1000\ \text{kg/m}^3$, $\mu = 1.0\times10^{-3}\ \text{Pa}\cdot\text{s}$. Use Stokes settling ([fluid-dynamics 3.3](../../fluid-dynamics/lessons/03-03-stokes-flow.md)),

$$v = \frac{2}{9}\,\frac{(\rho_s-\rho_f)\,g\,R^{2}}{\mu}, \qquad R = d/2$$

(a) Compute $v$ for each. (b) Check the Reynolds number. (c) With a residual current of $0.1\ \text{m/s}$, how far does each grain travel before it lands?

**(a)** Collect the prefactor once:

$$A = \frac{2}{9}\cdot\frac{(1650)(9.81)}{1.0\times10^{-3}} = \frac{2}{9}\cdot 1.619\times10^{7} = 3.60\times10^{6}\ \text{m}^{-1}\text{s}^{-1}, \qquad v = A R^{2}$$

| Grain | $R$ | $v = AR^{2}$ | Time to fall 10 m |
|---|---|---|---|
| Sand, $0.5\ \text{mm}$ | $2.5\times10^{-4}\ \text{m}$ | $0.225\ \text{m/s}$ | $44\ \text{s}$ |
| Silt, $30\ \mu\text{m}$ | $1.5\times10^{-5}\ \text{m}$ | $8.09\times10^{-4}\ \text{m/s}$ | $1.24\times10^{4}\ \text{s} = 3.4\ \text{h}$ |
| Clay, $3\ \mu\text{m}$ | $1.5\times10^{-6}\ \text{m}$ | $8.09\times10^{-6}\ \text{m/s}$ | $1.24\times10^{6}\ \text{s} = 14\ \text{days}$ |

**(b)** $\mathrm{Re} = \rho_f v d/\mu$ ([fluid-dynamics 3.1](../../fluid-dynamics/lessons/03-01-reynolds-number.md)):

$$\mathrm{Re}_{\text{sand}} = \frac{(1000)(0.225)(5\times10^{-4})}{10^{-3}} = 112, \qquad \mathrm{Re}_{\text{silt}} = 0.024, \qquad \mathrm{Re}_{\text{clay}} = 2.4\times10^{-5}$$

**Stokes is valid only for $\mathrm{Re} \ll 1$, so the sand answer is wrong** — inertial drag dominates and the real settling velocity is about $0.07\ \text{m/s}$, roughly a third of the Stokes value, giving about $140\ \text{s}$ to fall 10 m. Silt and clay are safely in the Stokes regime. **This is not a technicality: it is why the sand/silt boundary at $\tfrac{1}{16}\ \text{mm}$ is a real physical break and not an arbitrary one.**

**(c)** Horizontal distance $= 0.1\ \text{m/s} \times$ settling time:

$$\text{sand} \approx 14\ \text{m}, \qquad \text{silt} \approx 1.2\ \text{km}, \qquad \text{clay} \approx 124\ \text{km}$$

**One current, one instant of delivery, and the three sizes end up four orders of magnitude apart.** Sand builds the delta front, silt settles on the prodelta, clay drifts into the deep basin. **That is the entire mechanism of sorting, and it is why grain size maps onto depositional environment so reliably** — the physics does the classification for you before the geologist arrives. It is also the reason a *poorly* sorted deposit is informative: it means the sorting mechanism was bypassed, by ice, by a debris flow, or by burial too fast for settling to operate.

**Example 2 (why you'd care — how much ocean does a salt bed take?).** (a) Confirm from solubility that halite begins to precipitate at roughly 10 percent of the original brine volume. (b) How much halite does one metre of seawater yield? (c) The Messinian evaporites beneath the Mediterranean reach about $2\ \text{km}$ thick. What does that require?

**(a)** Seawater is $35\ \text{g}$ of dissolved salts per kg, of which NaCl is about 78 percent by mass. With density $1027\ \text{kg/m}^3$:

$$c_{\text{NaCl}} = 0.78 \times 35\ \text{g/kg} \times 1.027\ \text{kg/L} = 28.0\ \text{g/L}$$

Halite saturation in water is about $360\ \text{g/L}$. Assuming the salt stays in solution while water leaves, the concentration factor needed is

$$\frac{360}{28.0} = 12.9 \quad\Longrightarrow\quad \text{volume remaining} = \frac{1}{12.9} = 7.8\ \%$$

Observed is about 10 percent, i.e. halite arrives slightly *earlier* than the pure-water number predicts. **That gap is real chemistry, not sloppiness:** by then the brine is a concentrated Mg–Ca–K chloride solution, and activity-coefficient and common-ion effects lower the NaCl concentration at which halite saturates.

**(b)** Per cubic metre of seawater: total salts $= 1027 \times 0.035 = 35.9\ \text{kg}$, of which halite is $0.78 \times 35.9 = 28.0\ \text{kg}$. Halite density $2160\ \text{kg/m}^3$:

$$V_{\text{halite}} = \frac{28.0}{2160} = 1.30\times10^{-2}\ \text{m}^{3} \ \text{per m}^{3}\ \text{of seawater}$$

$$\boxed{\;\text{1 m of seawater, evaporated to dryness, leaves about 1.3 cm of halite.}\;}$$

(All salts together give about $1.6\ \text{cm}$, so a completely desiccated ocean basin $4\ \text{km}$ deep yields only $\sim 65\ \text{m}$ of evaporite — of which $\sim 52\ \text{m}$ is halite.)

**(c)** To accumulate $2000\ \text{m}$ of halite:

$$\frac{2000\ \text{m}}{0.0130} = 1.5\times10^{5}\ \text{m} = 154\ \text{km of seawater column}$$

The Mediterranean averages roughly $1.5\ \text{km}$ deep, so **the basin has to have been filled and evaporated on the order of a hundred times.**

**This is the whole argument for the Messinian salinity crisis in one calculation.** A thick evaporite cannot be a basin that dried once; it requires a basin repeatedly refilled through a restricted connection to the open ocean and repeatedly drawn down — here, the Atlantic leaking through a nearly closed Gibraltar between about $5.97$ and $5.33\ \text{Ma}$ ($\text{Ma}$ = mega-annum, millions of years before present). **A sedimentary rock constrained a tectonic event, which is exactly the leverage sedimentary rocks give you and the interior rocks do not.**

## Watch out

- **You might read "poorly sorted" as "high energy".** It usually means the *opposite of selective*: ice, a debris flow, or burial too fast for grains to settle by size. Glacial till is the least sorted sediment on Earth and it was deposited by something moving at metres per year. Energy sets the *maximum* grain size carried; sorting records whether the transport had **time to discriminate**.
- **You might treat rounding and sorting as one property.** They are independent axes with different clocks — abrasion rounds grains, hydraulics sorts them. Quartz sand rounds very slowly in rivers and quickly in wind, so a superbly rounded sand grain is a hint of an aeolian episode somewhere in its history ([3.5](03-05-deserts-wind-coasts.md)).
- **You might use superposition and skip the way-up indicators.** In folded ground the beds may be overturned, and superposition then reads the sequence exactly backwards. Way-up indicators are internal to the bed and therefore rotate with it — **that is the entire point of them** ([4.1](04-01-relative-dating-unconformities.md)).
- **You might read graded bedding as always normal.** Debris flows and grain flows can produce **reverse grading**, coarsening upward. Use grading for way-up in ordinary turbidites, and corroborate with a second indicator whenever the stakes are high.
- **You might mistake a cross-bed foreset for the bedding.** The foresets are internal and dip at up to the angle of repose, roughly 30 to 34 degrees; the true bedding is the flat surface that **truncates** them. Measuring the foreset as your dip is a classic and expensive field error ([4.5](04-05-reading-a-geologic-map.md)).
- **You might equate porosity with permeability.** Mud has the higher porosity and about a millionth of the permeability. Porosity says how much fluid a rock *holds*; permeability says whether it will *give it up* ([3.6](03-06-groundwater-aquifers-karst.md)).

## One-liner

> Composition names the source, texture times the journey, and structure fixes the environment and which way is up — so a sedimentary rock is not a substance but a signed, dated transport receipt, and it is the only kind of rock that was ever at the surface to sign one.

## Problems

**P1 (🟢)** A sand has a grain-size distribution with mean $\bar\phi = 1.5$ and standard deviation $\sigma_\phi = 0.40$. (a) Give the mean diameter in mm and the Wentworth name. (b) Is it well or poorly sorted? (c) It lithifies with 25 percent porosity and quartz cement. Would you expect it to be a good aquifer, and why?

**P2 (🟡)** Two sandstones from the same region, described in hand sample:

| | Sandstone A | Sandstone B |
|---|---|---|
| Grains | 96 percent rounded quartz, trace zircon | 58 percent angular quartz, 32 percent pink feldspar, 10 percent mica |
| Sorting | $\sigma_\phi = 0.3$, grains $0.25$–$0.35\ \text{mm}$ | $\sigma_\phi = 2.4$, grains $0.1$–$3\ \text{mm}$ |
| Structure | cross-beds 4 m tall, foresets at 32 degrees | massive, no internal structure |
| Field relation | forms a laterally continuous sheet | rests directly on weathered granite, wedge-shaped |

(a) Name each rock. (b) For each, state the source rock, the transport history, and a plausible depositional environment. (c) Which would you drill for water, and why? (d) B contains abundant fresh feldspar. What does that tell you about the climate at the time, and why?

**P3 (🔴)** A roadcut exposes beds dipping 78 degrees. Walking from the east side of the cut to the west side you log, in order:

1. a bed with polygonal cracks in plan view whose wedges taper toward the **east**;
2. a bed with sharp-crested symmetric ripples whose crests point **west**;
3. a bed grading from pebbly on its **east** margin to fine mud on its **west** margin;
4. a cross-bedded sandstone whose foresets are truncated on the **west** and curve tangentially into the contact on the **east**.

(a) Which side is stratigraphically up, and give the reasoning for each of the four indicators. (b) What must have happened to these beds after they lithified, and what would you conclude if the way-up direction had pointed *down-dip* instead? (c) Bed 1 was originally 2.0 m of mud at 55 percent porosity and is now 1.1 m thick. Compute its present porosity. (d) Beds 1 and 3 look like different worlds. Can they belong to the same environment?

<details>
<summary>Solutions</summary>

**P1 (a)** Invert the phi definition:

$$d = 2^{-\bar\phi}\ \text{mm} = 2^{-1.5}\ \text{mm} = 0.354\ \text{mm}$$

The medium sand field is $0.25$ to $0.50\ \text{mm}$, so this is **medium sand**, lithifying to a **sandstone**.

**(b)** $\sigma_\phi = 0.40 < 0.5$: **well sorted**. In linear terms one standard deviation spans $2^{-1.9}$ to $2^{-1.1}\ \text{mm} = 0.27$ to $0.47\ \text{mm}$ — a narrow band, consistent with a current that had time to discriminate.

**(c)** **Yes, a good aquifer.** Two independent reasons, and both matter:

1. **Grain size.** With $d = 3.54\times10^{-4}\ \text{m}$ and $\phi_p = 0.25$, Kozeny–Carman gives

$$k \approx \frac{(3.54\times10^{-4})^{2}(0.25)^{3}}{180\,(0.75)^{2}} = \frac{(1.25\times10^{-7})(0.0156)}{101.3} = 1.9\times10^{-11}\ \text{m}^{2}$$

which is about $20$ darcy — an excellent reservoir value. (Kozeny–Carman is calibrated on loose packs and flatters a cemented rock, so treat this as an upper bound; a real quartz-cemented sandstone of this sort runs 0.1 to a few darcy. The *scaling* is what to take away.)

2. **Sorting.** Well sorted means no fine fraction plugging the throats between the grains. Porosity of 25 percent in a well-sorted sand is **connected** porosity, which is the kind that counts.

**P2 (a)** **A = quartz arenite** (over 95 percent quartz, well sorted, well rounded — mature on both axes). **B = arkose** (over 25 percent feldspar).

**(b)**

**A.** Source: ultimately granitic, but the feldspar and mica are entirely gone, so this sand is **compositionally mature and probably recycled** — most likely eroded from an older sandstone rather than straight off a pluton. Transport: long, repeated, or both. Environment: the 4 m foresets are the tell. Cross-bed sets that tall need a bedform metres high, which in water means a very large subaqueous dune; combined with the extreme rounding and sorting, **a large aeolian dune field is the better reading**, with a high-energy shallow-marine sand sheet the alternative. The laterally continuous sheet geometry fits either.

**B.** Source: **the granite it is sitting on** — angular grains, pink feldspar and mica are simply disaggregated granite. Transport: **almost none**, measured in kilometres. Environment: the wedge geometry, massive structureless beds and terrible sorting say **alluvial fan or scree apron banked against a fault scarp**, deposited by debris flows too fast for the current to sort anything.

**(c)** **Drill A.** Its porosity is well connected: uniform grain size, no clay matrix, so both $\phi_p$ and $k$ are high. B is poorly sorted, so its fines fill the pores between the coarse grains, and its feldspar will have altered to pore-filling clay in the subsurface. **Same nominal porosity would still give B orders of magnitude less permeability** — the porosity-is-not-permeability trap made concrete.

**(d)** Feldspar is highly susceptible to **hydrolysis** — it rots to clay in wet, warm conditions in a geological instant ([3.1](03-01-weathering-soils.md)). Fresh feldspar surviving into a rock therefore constrains the whole chain: **an arid or cold climate, high relief, and rapid burial**. Wet and tropical with a slow journey and there would be no feldspar left, only quartz and kaolinite. **The mineral that is missing is as informative as the ones that are there.**

**P3 (a)** **Up is west.** Each indicator says so independently:

1. **Mud cracks** taper *downward* — the wedge is widest at the desiccated surface and pinches out at depth. Wedges taper east, so **east is down**.
2. **Symmetric wave ripples** have sharp crests and rounded troughs; the **crests point up**. Crests point west, so **west is up**.
3. **Normal grading** puts the coarse fraction at the base. Pebbly east, muddy west, so **east is the base**.
4. **Cross-bed foresets** are erosionally truncated at the top of the set and asymptotic into the base. Truncated west, tangential east, so **west is up**.

**Four indicators, four different mechanisms, one answer.** That agreement is the check — a lone indicator can mislead (reverse grading, an eroded ripple set), four cannot.

**(b)** Original horizontality says these beds were deposited essentially flat. They now dip 78 degrees, so **they have been rotated by about 78 degrees since lithification** — tectonic tilting or, far more likely at that dip, the limb of a fold ([2.5](02-05-folds-faults-structures.md)).

If the way-up direction had pointed **down-dip**, the beds would be **overturned**: rotated past vertical, through more than 90 degrees. That is the diagnostic of an overturned fold limb or a thrust sheet, and it means **superposition in the outcrop runs backwards** — the structurally highest bed is the stratigraphically oldest. Mapping the sequence without checking way-up would invert the region's history ([4.5](04-05-reading-a-geologic-map.md)).

**(c)** Solid thickness is conserved under compaction:

$$h_1(1-\phi_{p,1}) = h_0(1-\phi_{p,0}) = 2.0\,(1-0.55) = 0.90\ \text{m of solid}$$

$$1-\phi_{p,1} = \frac{0.90}{1.1} = 0.818 \quad\Longrightarrow\quad \phi_{p,1} = \mathbf{18\ \text{percent}}$$

The bed lost **45 percent of its thickness**, all of it pore water. Note the consequence for rate calculations: taking the present $1.1\ \text{m}$ as the deposited thickness would underestimate the sedimentation rate by nearly a factor of two, which is why decompaction comes before any subsidence history ([4.4](04-04-stratigraphy-facies-correlation.md)).

**(d)** **Yes — and their juxtaposition is the interesting part.** Bed 1 requires **subaerial exposure** (mud cracks form only in open air); bed 3 requires a **single waning current** that dropped gravel then mud; bed 2 requires **standing water shallow enough to feel wave orbitals**. All three are routine in a single environment that oscillates across the waterline: a **tidal flat, a playa lake fed by flash floods, or a delta-top setting**.

**The general principle, and it is the one [4.4](04-04-stratigraphy-facies-correlation.md) is built on:** a vertical stack of contrasting facies is normally not a stack of unrelated worlds but **one environment whose boundaries migrated**. The alternation of exposure and flooding is itself the datum — it says the shoreline moved back and forth across this spot repeatedly.

</details>

## Flashback

**From Lesson 1.3 (How the Earth Melts):** A basaltic magma of $100$ mass units contains $50$ weight percent $\text{SiO}_2$. It cools in a shallow chamber and $40$ percent of its mass crystallizes as olivine and pyroxene averaging $45$ weight percent $\text{SiO}_2$; the crystals sink and are removed. The residual melt then crystallizes a further $40$ percent of *its* mass as plagioclase and pyroxene averaging $48$ weight percent $\text{SiO}_2$, also removed.

(a) Compute the silica content of the melt after each step, and the fraction of the original magma still liquid at the end. (b) Name the process, and state the general rule it illustrates. (c) A mid-ocean ridge and a volcanic arc both make magma from mantle peridotite. Name the melting mechanism at each, and say why the arc mechanism works.

<details>
<summary>Solution</summary>

**(a)** Track silica mass, not concentration.

*Step 1.* Start: $100$ units of melt carrying $0.50 \times 100 = 50$ units of $\text{SiO}_2$. Crystals removed: $40$ units of mass carrying $0.45 \times 40 = 18$ units of $\text{SiO}_2$.

$$\text{melt} = 60\ \text{units}, \quad \text{SiO}_2 = 50 - 18 = 32 \quad\Longrightarrow\quad \frac{32}{60} = \mathbf{53.3\ \text{weight percent}}$$

*Step 2.* Crystals removed: $0.40 \times 60 = 24$ units carrying $0.48 \times 24 = 11.5$ units of $\text{SiO}_2$.

$$\text{melt} = 36\ \text{units}, \quad \text{SiO}_2 = 32 - 11.5 = 20.5 \quad\Longrightarrow\quad \frac{20.5}{36} = \mathbf{56.9\ \text{weight percent}}$$

**Fraction still liquid: $36/100 = 36$ percent**, and it has walked from basalt to andesite.

**(b)** **Fractional crystallization**, the driver of magmatic differentiation along Bowen's reaction series. The rule: **the crystallizing solids are always poorer in silica than the melt they leave**, so the residual liquid is driven relentlessly toward silica-rich compositions. Run it far enough and you reach granite — but note the cost: **you keep only a third of the mass per step**, so making a granite from a basalt parent means discarding roughly 90 percent of the original magma as cumulate. That mass accounting is exactly why granite is abundant in the continents and vanishingly rare in the ocean basins.

**(c)** **Ridge: decompression melting.** Mantle rises beneath the spreading axis and the pressure falls faster than the temperature does, so the rising solid peridotite crosses the solidus with **no heat added at all**.

**Arc: flux melting.** The subducting slab dehydrates, and water released into the overlying mantle wedge lowers the peridotite solidus by several hundred degrees, so mantle that was comfortably solid begins to melt at fixed pressure and temperature.

**Why water works:** dissolved water breaks Si–O–Si bridges in the silicate melt structure, depolymerizing the network. A melt that is easier to build is a melt that forms at lower temperature — which is the same tetrahedron-linkage argument from [1.1](01-01-what-a-mineral-is.md), running in the melt rather than the crystal.

</details>

## Connections

- **Backward:** [1.4](01-04-igneous-rocks-and-bodies.md) read texture as a record of *cooling rate*; here texture records *transport*, and it is the same move — read the process off the fabric. The evaporite sequence is the fractional crystallization of [1.3](01-03-how-the-earth-melts.md) run by evaporation instead of cooling, and quartz's dominance in mature sand is a direct consequence of its position at the cool end of Bowen's series ([3.1](03-01-weathering-soils.md) will make that explicit).
- **Forward:** [1.6](01-06-metamorphic-rocks-rock-cycle.md) takes shale and sandstone as protoliths and buries them. Module 3 supplies the machinery — [3.1](03-01-weathering-soils.md) the weathering, [3.3](03-03-rivers-landscape-evolution.md) the transport and sorting, [3.5](03-05-deserts-wind-coasts.md) the aeolian cross-beds, [3.6](03-06-groundwater-aquifers-karst.md) the porosity and permeability as Darcy's law. Module 4 cashes the whole lesson: way-up indicators in [4.1](04-01-relative-dating-unconformities.md) and [4.5](04-05-reading-a-geologic-map.md), facies and decompaction in [4.4](04-04-stratigraphy-facies-correlation.md), and evaporites and reservoirs in [5.4](05-04-resources-geologic-hazards.md).
- **Sideways:** the settling calculation is Stokes flow ([fluid-dynamics 3.3](../../fluid-dynamics/lessons/03-03-stokes-flow.md)) with a Reynolds-number validity check ([fluid-dynamics 3.1](../../fluid-dynamics/lessons/03-01-reynolds-number.md)); the evaporite order is a solubility-product sequence ([general-chemistry 2.3](../../general-chemistry/lessons/02-03-aqueous-reactions-precipitation-acid-base-redox.md)) and structurally the same as reading a multicomponent phase diagram ([materials-science 3.1](../../materials-science/lessons/03-01-phase-diagrams-lever-rule.md)); permeability is the transport coefficient in the flux-law family ([transport-phenomena 1.1](../../transport-phenomena/lessons/01-01-one-flux-law-three-transports.md)).
