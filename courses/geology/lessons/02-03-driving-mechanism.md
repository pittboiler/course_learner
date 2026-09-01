# Geology · Lesson 2.3: The driving mechanism

> ⏱ ~15 min · Module 2: Plate Tectonics & the Deforming Crust · Builds on: [2.2](02-02-plate-boundaries.md), [2.1](02-01-evidence-for-drift.md) · Unlocks: 2.4 (how rock deforms)

## Why this matters

[2.1](02-01-evidence-for-drift.md) ended on the thing that killed Wegener's theory for fifty years: he had no mechanism, and the mechanism he proposed — continents ploughing through oceanic crust — was physically impossible. This lesson supplies what he lacked, and it turns out the answer is not the one most textbooks lead with.

**The forces that move plates can be ranked, and the ranking is lopsided: slab pull is roughly an order of magnitude larger than everything else.** That is not a matter of taste. You can compute both leading forces from density, gravity and geometry, and you can test the ranking against a table of plate speeds. Both the calculation and the data say the same thing.

The second payoff is a correction. **"Ridge push" is not a shove at the ridge axis** — nothing is pushing there, and the axis is in *tension*. It is a gravitational sliding force distributed through cooling lithosphere, and the name is a historical accident that misleads almost everyone who meets it.

The third is a reframing worth more than either. Plates are not passengers riding a convecting mantle. **The plate is the cold top of the convection cell**, and a subducting slab is that boundary layer falling. Convection and plate tectonics are not two things that interact; they are one thing seen from two sides.

## The idea

### First fix the layering, because two different schemes share the same planet

Almost every confusion in this lesson traces back to blurring these:

| Scheme | Divisions | Sorted by | Where the top boundary is |
|---|---|---|---|
| **Compositional** | crust / mantle / core | *what it is made of* | the **Moho**: ~7 km under ocean, ~35 km under continents |
| **Mechanical** | lithosphere / asthenosphere / mesosphere / outer core / inner core | *how it behaves* | base of lithosphere: ~100 km under old ocean, 150–250 km under cratons |

**A plate is lithosphere, not crust.** Oceanic lithosphere is roughly 7 km of basaltic crust sitting on about 90 km of cold mantle peridotite — **the mantle part is more than 90 percent of the plate**, which is why the Moho is irrelevant to plate dynamics and why Wegener's "continents ploughing through the ocean floor" was wrong from the start. Continents do not plough; they are the buoyant top layer of plates that include mantle too. The evidence for each boundary is [5.1](05-01-earths-internal-structure.md)'s business.

### Why the asthenosphere is weak

Same rock as the lithosphere below the Moho — peridotite — and yet its viscosity is three to five orders of magnitude lower. Nothing changes chemically. What changes is **how close the rock is to melting**:

$$\text{homologous temperature} \; T_h = \frac{T}{T_m}$$

with $T$ the actual temperature and $T_m$ the melting temperature, both in kelvin. *In words: what matters for creep is not how hot a solid is, but how hot it is relative to its own melting point.* At 150 km depth the mantle is near $1350\ ^\circ\text{C} = 1620\ \text{K}$ and the dry peridotite solidus near $1600\ ^\circ\text{C} = 1870\ \text{K}$, so

$$T_h \approx \frac{1620}{1870} \approx 0.87 .$$

**At $T_h > 0.5$ a crystalline solid creeps appreciably; at 0.87 it flows freely on geologic timescales**, with strain rate $\dot\varepsilon \propto \exp(-Q/RT)$ — the standard creep law ([materials-science 4.4](../../materials-science/lessons/04-04-failure-fracture-fatigue-creep.md)), carried by dislocation and diffusion mechanisms ([materials-science 4.2](../../materials-science/lessons/04-02-plastic-deformation-schmid.md)). Add water dissolved in olivine and a melt fraction well under 1 percent, and this is the weakest layer in the solid Earth.

| Layer | Viscosity (Pa·s) |
|---|---|
| Lithosphere | $10^{23}$–$10^{25}$ |
| **Asthenosphere** | $\mathbf{10^{19}}$–$\mathbf{10^{21}}$ |
| Lower mantle | $10^{21}$–$10^{23}$ |

That viscosity contrast is the whole reason plates exist as coherent rigid objects: **a strong lid over a weak layer breaks into pieces and slides.** A uniformly viscous planet would convect without plates — as Venus apparently does.

### The mantle convects, and it is not close

The Earth loses about 46 TW of heat, roughly half from decay of $^{238}\text{U}$, $^{232}\text{Th}$ and $^{40}\text{K}$ and the rest primordial. Conduction through 2900 km of rock cannot carry it, so the mantle convects — solid rock creeping at centimetres per year. Whether a heated layer convects is set by the **Rayleigh number** $Ra$; convection starts above $Ra \approx 10^3$ and the mantle sits at $Ra \sim 10^7$–$10^9$. **It is not marginally convective — it is four to six orders of magnitude past the threshold.** The instability is Rayleigh–Bénard ([fluid-dynamics 4.3](../../fluid-dynamics/lessons/04-03-instability-kh-rb.md)); the quantitative treatment for the Earth is [`geophysics`](../../geophysics/syllabus.md) 4.4, which owns it.

One number fixes the flow regime. With $\rho \approx 3300\ \text{kg/m}^3$, $v \approx 5\ \text{cm/yr} = 1.6\times10^{-9}\ \text{m/s}$, $L \approx 10^{6}\ \text{m}$, $\mu \approx 10^{21}\ \text{Pa}\cdot\text{s}$:

$$Re = \frac{\rho v L}{\mu} \approx \frac{3300 \times 1.6\times 10^{-9} \times 10^{6}}{10^{21}} \approx 5\times 10^{-21}.$$

**Inertia is utterly absent.** This is creeping Stokes flow ([fluid-dynamics 3.3](../../fluid-dynamics/lessons/03-03-stokes-flow.md)): **nothing in the system has momentum**, so if you switched the forces off the plates would stop, not glide.

### Now rank the forces

**1. Slab pull — the dominant force.** Oceanic lithosphere cools as it ages, contracts, and becomes *denser than the mantle it floats on*. Once it starts down at a trench, its own weight pulls the rest of the plate after it. Two phase changes sharpen this: the olivine-to-wadsleyite transition at ~410 km has a positive Clapeyron slope, so it occurs *shallower* inside the cold slab, giving the slab a wedge of high-density mineral early and adding to its pull.

**2. Ridge push — real, secondary, and badly named.** More on this in a moment.

**3. Basal drag — sign unknown.** Shear coupling between the plate and the asthenosphere beneath it. If mantle flow is faster than the plate it drives; if slower it resists. Under continents with deep lithospheric keels it almost certainly resists.

**Resisting forces:** viscous drag on the slab's faces and the work of bending the plate at the trench hinge (together these consume most of slab pull), friction on transforms, and collisional resistance where continents meet.

### The decisive evidence is a table of plate speeds

Compute nothing and just look at the plates. Absolute speeds, approximate:

| Plate | Area ($10^6\ \text{km}^2$) | Boundary that is subducting | Speed (cm/yr) |
|---|---|---|---|
| Cocos | 2.9 | large | **8.6** |
| Pacific | 108 | large | **8.0** |
| Nazca | 15 | large | **7.6** |
| Philippine | 5.4 | large | **6.4** |
| Indo-Australian | 60 | moderate | **6.0** |
| African | 79 | almost none | 2.1 |
| Antarctic | 59 | almost none | 1.7 |
| South American | 41 | almost none | 1.3 |
| North American | 60 | almost none | 1.1 |
| Eurasian | 69 | almost none | 0.7 |

**Three readings, and each kills a candidate.**

- **Speed tracks subducting boundary length, sharply.** Every plate above 6 cm/yr has a long trench; every plate below 2.5 cm/yr has essentially none. This is Forsyth and Uyeda's 1975 result, and it has survived fifty years of better data.
- **Speed does not track plate area at all.** Cocos is 24 times smaller than Eurasia and moves 12 times faster. **If basal drag from an independently convecting mantle drove plates, the force would scale with area and the big plates would be the fast ones.** They are the slowest.
- **Speed does not track ridge length.** African and Antarctic have among the longest ridge boundaries on Earth and are among the slowest.

$$\boxed{\;\text{A plate's speed is set by what is hanging off its leading edge, not by what is behind it or beneath it.}\;}$$

### Ridge push, correctly

**You will read that magma rising at the ridge axis wedges the plates apart. It does not.** Three objections, in increasing order of severity:

1. **The ridge axis is in extension, not compression.** It is cut by normal faults and, at slow ridges, floored by an axial valley — a graben. A place that is being pulled apart cannot be the place doing the pushing.
2. **The magma is passive.** Mantle rises beneath a ridge because the plates are moving apart and something must fill the gap; it then melts by decompression ([1.3](01-03-how-the-earth-melts.md)). The melting is a *consequence* of spreading, not its cause. Ridges migrate, get rifted, and get subducted — none of which a driving engine would do.
3. **The force is not applied at the axis at all.** It is a body force distributed through the whole cooling plate, arising because the ridge stands high and the lithosphere thickens away from it. The proper name is **gravitational sliding**.

### The reframing

Oceanic lithosphere *is* the cold upper thermal boundary layer of the convecting mantle: it forms at a ridge, cools and thickens by conduction as it moves, becomes negatively buoyant, and founders. That is textbook boundary-layer convection, with one twist — the lid is strong enough to stay rigid and break into plates instead of deforming continuously.

**So the plate is not carried by the convection cell. The plate is the top of the convection cell, and the slab is its descending limb.** Slab pull "dominating" is therefore no coincidence: the sinking of the cold boundary layer *is* the convection. Asking whether convection drives plates or plates drive convection is like asking whether the top of a wave drives the bottom.

## The formal version

**Cooling, thickening, deepening.** A plate created at a ridge cools by conduction into the water above it, so the thickness of the cold layer grows as the square root of age — the standard half-space solution ([heat-transfer 2.2](../../heat-transfer/lessons/02-02-semi-infinite-solid.md)):

$$L(t) \approx 2.32\sqrt{\kappa t}$$

where $L$ is lithospheric thickness, $\kappa \approx 10^{-6}\ \text{m}^2/\text{s}$ is thermal diffusivity and $t$ is the age of the seafloor. *In words: a plate thickens like a freezing pond, fast at first and ever more slowly.* Because the thickening layer is cold and dense, the seafloor also subsides as $\sqrt{t}$:

$$d(t) \approx 2500 + 350\sqrt{t_{\text{Ma}}} \quad \text{metres},$$

with $t_{\text{Ma}}$ the age in millions of years and $\text{Ma}$ meaning mega-annum. **This one relation reproduces the depth profile of every ocean basin on Earth**, and it is what makes the ridge a topographic bulge.

**Thermal density contrast.** Cooling the rock by $\Delta T$ raises its density by

$$\Delta\rho = \rho_m\,\alpha\,\Delta T$$

with $\rho_m$ the mantle density and $\alpha$ the coefficient of thermal expansion. *In words: cold rock is heavy rock, and this is the only reason subduction happens.*

**Slab pull.** Treat the slab as a sheet of thickness $h$, down-dip length $L_s$, and density excess $\Delta\rho$, considered per metre of trench:

$$\boxed{\;F_{SP} = \Delta\rho\,g\,h\,L_s\;}$$

*In words: slab pull is just the weight of the excess mass, per metre of trench length.*

**Ridge push.** Compare two vertical columns: one at the ridge crest, one through old seafloor a long way away. Isostasy makes the pressures equal at the compensation depth (the base of the lithosphere), but *above* that depth the ridge column is heavier, because where the old column has water the ridge column has rock. The excess pressure grows from zero at the ridge crest's seafloor to a maximum of $(\rho_m - \rho_w)g\,\Delta h$ at old-seafloor depth, then decays back to zero over the lithospheric thickness $L$. Integrating that roughly triangular profile:

$$\boxed{\;F_{RP} \approx \tfrac{1}{2}\,(\rho_m - \rho_w)\,g\,\Delta h\,L\;}$$

where $\Delta h$ is the elevation of the ridge crest above old seafloor and $\rho_w$ is the density of seawater. *In words: the ridge is a topographic high sitting on a weak layer, and it slides off, pushing the plate ahead of it.* Note what the formula contains — **topography and lithospheric thickness, no magma, no ridge axis.**

**The budget, per metre of plate boundary:**

| Force | Magnitude (N/m) | Sign |
|---|---|---|
| **Slab pull** (raw negative buoyancy) | $\mathbf{3}$–$\mathbf{5\times10^{13}}$ | driving |
| Ridge push (gravitational sliding) | $2$–$3.5\times10^{12}$ | driving |
| Basal drag | $\sim 10^{12}$ | **either** |
| Slab viscous + bending resistance | comparable to slab pull | resisting |
| Transform friction, collisional resistance | $\lesssim 10^{12}$ | resisting |

**And the constraint that ties it together: plates do not accelerate.** At $Re \sim 10^{-20}$ there is no inertia, so the forces must sum to zero at all times:

$$\sum F_{\text{driving}} + \sum F_{\text{resisting}} = 0 .$$

*In words: every plate is already at terminal velocity, and has been for its entire life.* This is why "slab pull is twelve times ridge push" describes the *driving* side of the ledger, not a net force — most of slab pull is spent immediately against viscous resistance on the slab itself.

## Picture

![Cross-section from a mid-ocean ridge on the left to a trench and downgoing slab on the right. The plate is shown thickening away from the ridge; below it the asthenosphere is labelled as weak and creeping, with a return-flow arrow sweeping back from beneath the slab to beneath the ridge. Force arrows are drawn in rough proportion: a small coral arrow for ridge push inside the plate near the ridge, a very large coral arrow for slab pull running down the slab, small grey double-headed arrows for basal drag beneath the plate, and blue arrows opposing the slab for viscous resistance. Beneath the section, a bar chart drawn to scale compares slab pull at about four times ten to the thirteen newtons per metre with ridge push at about three times ten to the twelve and basal drag at order ten to the twelve.](assets/02-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — compute the ratio instead of asserting it).** Estimate slab pull and ridge push per metre of boundary and take the ratio. Assume: mantle density $\rho_m = 3300\ \text{kg/m}^3$, seawater $\rho_w = 1000\ \text{kg/m}^3$, $g = 9.8\ \text{m/s}^2$, thermal expansivity $\alpha = 3\times10^{-5}\ \text{K}^{-1}$, slab thickness $h = 100\ \text{km}$, effective down-dip length $L_s = 700\ \text{km}$, depth-averaged temperature deficit $\Delta T = 600\ \text{K}$, lithospheric thickness $L = 100\ \text{km}$.

*Step 1 — get the ridge relief from the depth–age curve rather than quoting it.* Ridge crest at $t = 0$: $d = 2500\ \text{m}$. Old seafloor at $t = 80\ \text{Ma}$:

$$d = 2500 + 350\sqrt{80} = 2500 + 350(8.944) = 2500 + 3130 = 5630\ \text{m}.$$

$$\Delta h = 5630 - 2500 = 3130\ \text{m} \approx 3.1\ \text{km}. \quad \text{Take } \Delta h = 3\ \text{km}.$$

*(Consistency check on the same age: $L = 2.32\sqrt{\kappa t}$ with $t = 80\ \text{Ma} = 2.52\times10^{15}\ \text{s}$ gives $\sqrt{10^{-6}\times2.52\times10^{15}} = \sqrt{2.52\times10^{9}} = 5.02\times10^{4}\ \text{m}$, so $L = 2.32 \times 50.2 = 116\ \text{km}$ — the 100 km assumed above. The two relations agree.)*

*Step 2 — density contrast of the slab.*

$$\Delta\rho = \rho_m\alpha\Delta T = 3300 \times 3\times10^{-5} \times 600 = 3300 \times 0.018 = 59.4 \approx 60\ \text{kg/m}^3 .$$

**Sixty kilograms per cubic metre — under 2 percent — and it moves continents.**

*Step 3 — slab pull.*

$$F_{SP} = \Delta\rho\,g\,h\,L_s = 60 \times 9.8 \times (1\times10^{5}) \times (7\times10^{5})$$

$$= 588 \times 10^{5} \times 7\times10^{5} = 5.88\times10^{7} \times 7\times10^{5} = \mathbf{4.1\times10^{13}\ \text{N/m}} .$$

*Step 4 — ridge push.*

$$F_{RP} = \tfrac12 (3300-1000)(9.8)(3000)(1\times10^{5}) = \tfrac12 \times 2300 \times 9.8 \times 3000 \times 10^{5}$$

$$= 1150 \times 9.8 \times 3\times10^{3} \times 10^{5} = 11{,}270 \times 3\times10^{8} = \mathbf{3.4\times10^{12}\ \text{N/m}} .$$

*Step 5 — the ratio.*

$$\frac{F_{SP}}{F_{RP}} = \frac{4.1\times10^{13}}{3.4\times10^{12}} = \mathbf{12} .$$

**Slab pull wins by about an order of magnitude, from nothing but density, gravity and geometry.** Both numbers land inside the ranges from full geodynamic models ($3$–$5\times10^{13}$ and $2$–$3\times10^{12}$ N/m), which is the point of doing it this way: the ranking is not a claim you have to take on authority.

**Example 2 (why you'd care — one trench, two plates, and a controlled experiment).** The Nazca and South American plates share the Peru–Chile trench. Nazca is $15\times10^{6}\ \text{km}^2$ and moves at 7.6 cm/yr. South America is $41\times10^{6}\ \text{km}^2$ and moves at 1.3 cm/yr. Which force controls plate motion?

**The comparison is close to controlled**: the two plates share a boundary, sit on the same mantle, and feel the same regional flow.

(a) **Rule out area, hence basal drag as a driver.** Basal drag scales with the plate's basal *area*, $F_{\text{drag}} = \tau A$. South America is 2.7 times larger, so an independently convecting mantle would drag it 2.7 times harder — and resistance concentrated on boundaries grows far more slowly than area, so the bigger plate should be the faster one. It moves 5.8 times **slower**. **The relationship is inverted**, which points to basal drag *resisting* (South America drags a thick continental keel through the asthenosphere) rather than driving.

(b) **Rule out ridge push as the primary driver.** South America has a long ridge boundary: the entire Mid-Atlantic Ridge from the equator to the Scotia Sea. Nazca's ridge boundaries — East Pacific Rise and Chile Rise — are shorter. **The plate with more ridge moves six times slower.**

(c) **What is different is the leading edge.** Nazca subducts along essentially its whole eastern margin. South America subducts nowhere — it is the *overriding* plate at that trench, and its other margins are a ridge, transforms and passive continental edges. **Nazca has a slab; South America does not; Nazca moves six times faster.**

(d) **The general statement**, from the plate-speed table above: velocity correlates strongly with subducting-boundary length, weakly or not at all with ridge length, and inversely with continental area. **That is a clean ranking of the forces obtained without computing a single one of them** — and it agrees with Example 1's arithmetic, which is the reassuring part.

A corollary worth carrying forward: Nazca is a surviving fragment of the vanished Farallon plate, now imaged by tomography as a slab graveyard under North America. **Plates with slabs move fast and therefore die young**, and the older oceanic lithosphere gets the denser and more eagerly subductable it becomes — part of why no seafloor on Earth is older than about 180–200 Ma ([2.1](02-01-evidence-for-drift.md)).

## Watch out

- **You might think magma at the ridge shoves the plates apart.** It does not: the ridge axis is under *extension*, floored by normal faults and often a graben. Ridge push is gravitational sliding of a thickened, elevated plate off a topographic high — a body force spread through the plate, applied nowhere in particular, and computable from topography alone.
- **You might read "slab pull is 12 times ridge push" as a big net force.** At $Re \sim 10^{-20}$ there is no inertia; forces sum to zero. Most of slab pull is consumed by viscous drag on the slab and by bending it at the hinge. The ratio ranks the *driving* terms, not the residual.
- **You might equate the plate with the crust.** A plate is *lithosphere* — crust plus roughly 90 km of cold uppermost mantle. The Moho sits *inside* the plate and has nothing to do with plate motion.
- **You might picture the asthenosphere as a molten layer plates float on.** It is solid peridotite with a melt fraction well under 1 percent. It is weak because $T/T_m \approx 0.87$, not because it is liquid. A magma ocean would not transmit the shear stresses the system requires.
- **You might picture convection cells as conveyor belts carrying plates.** The plate *is* the cold upper boundary layer of the cell. It is not a passenger on the flow; it is the part of the flow you can stand on.
- **You might expect ridge push to grow with spreading rate.** It depends on the ridge's *height* above old seafloor and on lithospheric thickness — geometry, not speed. Fast ridges are broader but not appreciably higher, so the force is similar at slow and fast ridges.

## One-liner

> Cooling makes oceanic lithosphere about 60 kg/m³ denser than the mantle, and that small excess — dragging down a 100 km × 700 km slab — supplies about $4\times10^{13}\ \text{N/m}$, some twelve times the gravitational sliding misnamed "ridge push": plates are pulled from the front by their own sinking boundary layer, not pushed from behind, and the plate *is* the convection rather than a passenger on it.

## Problems

**P1 (🟢)** A slab of oceanic lithosphere 90 km thick descends to a down-dip length of 600 km. Its depth-averaged temperature deficit is 500 K. Take $\rho_m = 3300\ \text{kg/m}^3$, $\alpha = 3\times10^{-5}\ \text{K}^{-1}$, $g = 9.8\ \text{m/s}^2$. (a) Compute the density contrast. (b) Compute the slab pull per metre of trench. (c) The trench is 2000 km long — compute the total force, and compare it with the weight of the slab-shaped block of *mantle* it displaces to say what fraction of the slab's weight is "extra".

**P2 (🟡, inference from data)** A geodesist hands you the table below for four plates and asks which of ridge push, slab pull and basal drag controls plate motion. State your conclusion and give the specific line of evidence that eliminates each rejected candidate. Then explain why plate D is slow despite having the second-longest ridge boundary.

| Plate | Area ($10^6\ \text{km}^2$) | Ridge boundary (km) | Trench boundary (km) | Speed (cm/yr) |
|---|---|---|---|---|
| A | 3 | 1400 | 1700 | 8.6 |
| B | 108 | 11,300 | 11,000 | 8.0 |
| C | 69 | 800 | 250 | 0.7 |
| D | 79 | 9,000 | 500 | 2.1 |

**P3 (🔴, bridges to 2.4)** Take the Example 1 slab: $F_{SP} = 4.1\times10^{13}\ \text{N/m}$, thickness $h = 100\ \text{km}$. (a) If the whole of that force were transmitted up the slab and through the plate as a tensile stress, compute that stress. (b) Rocks fail in tension at stresses of order 10–100 MPa and even the strongest lithosphere sustains at most a few hundred MPa of deviatoric stress ([materials-science 4.4](../../materials-science/lessons/04-04-failure-fracture-fatigue-creep.md)). What does your answer imply must be happening? (c) The Earth's total heat loss is 46 TW and the global length of subduction zones is about $4\times10^{7}\ \text{m}$, with plates converging at a typical 6 cm/yr. Estimate the power dissipated by slab pull globally and compare it with the heat budget. Comment on what the comparison does and does not prove.

<details>
<summary>Solutions</summary>

**P1 (a)**

$$\Delta\rho = \rho_m\alpha\Delta T = 3300 \times 3\times10^{-5} \times 500 = 3300 \times 0.015 = \mathbf{49.5\ \text{kg/m}^3}.$$

**(b)**

$$F_{SP} = \Delta\rho\,g\,h\,L_s = 49.5 \times 9.8 \times (9\times10^{4}) \times (6\times10^{5}).$$

Step by step: $49.5 \times 9.8 = 485.1$. Then $485.1 \times 9\times10^{4} = 4.366\times10^{7}$. Then $4.366\times10^{7} \times 6\times10^{5} = 2.62\times10^{13}$.

$$F_{SP} = \mathbf{2.6\times10^{13}\ \text{N/m}} .$$

Somewhat below Example 1's $4.1\times10^{13}$, as expected from a thinner, shorter, less cold slab — but the same order, and still several times ridge push.

**(c)** Over a 2000 km trench:

$$F_{\text{total}} = 2.6\times10^{13}\ \text{N/m} \times 2\times10^{6}\ \text{m} = \mathbf{5.2\times10^{19}\ \text{N}} .$$

The displaced mantle block has volume $V = h L_s \ell = 9\times10^{4} \times 6\times10^{5} \times 2\times10^{6} = 1.08\times10^{17}\ \text{m}^3$, so its weight is

$$W = \rho_m g V = 3300 \times 9.8 \times 1.08\times10^{17} = 3.49\times10^{21}\ \text{N}.$$

$$\frac{F_{SP}}{W} = \frac{5.2\times10^{19}}{3.49\times10^{21}} = \mathbf{0.015}, \ \text{i.e. } 1.5\ \text{percent}.$$

**A 1.5 percent excess weight drives global tectonics.** (It is exactly $\alpha\Delta T = 3\times10^{-5}\times500 = 0.015$, of course — the ratio had to come out as the fractional density contrast. Getting that identity out the other end is the check.)

**P2** **Conclusion: slab pull.**

*Eliminating basal drag.* Basal drag acts on the plate's base, so it scales with **area**. Plate A has an area of 3 and moves at 8.6 cm/yr; plate C has an area of 69 — **23 times larger** — and moves at 0.7 cm/yr, twelve times slower. If drag from an independently convecting mantle drove plates, the driving force would be 23 times greater on C, while the resistance (concentrated on boundaries, which scale roughly with the square root of area) would grow far more slowly. C should be much the faster. It is the slowest in the table. **The correlation is not merely absent, it is inverted** — which is itself informative: it points to basal drag *resisting*, especially under large continental plates with deep lithospheric keels.

*Eliminating ridge push.* Rank by ridge length: B (11,300), D (9,000), A (1400), C (800). Rank by speed: A (8.6), B (8.0), D (2.1), C (0.7). **Plate A has the second-shortest ridge and the highest speed; plate D has the second-longest ridge and is slow.** No usable correlation.

*Confirming slab pull.* Rank by trench length as a fraction of the plate's boundary — or simply note the split: A and B both have trench lengths comparable to their ridge lengths and both move at 8 cm/yr or more; C and D have trench lengths of 250 and 500 km against ridges of 800 and 9000 km, and both move under 2.2 cm/yr. **The two fast plates are the two with major subducting margins, and the correlation holds across a 36-fold range of plate area.** Note also that A (small, fast) and B (huge, fast) move at nearly the same speed despite differing in area by a factor of 36 — **speed is set by the leading edge, not by the plate's size.**

*Why D is slow despite 9000 km of ridge.* Three reasons, and they compound:

1. **Ridge push is intrinsically small** — of order $3\times10^{12}$ N/m against slab pull's $4\times10^{13}$, so even 9000 km of it totals about $2.7\times10^{19}$ N, comparable to what a single 700 km trench segment supplies.
2. **A plate nearly surrounded by ridges is pushed inward from several sides at once, and the forces largely cancel.** Plate D (this is the African plate) is ringed by the Mid-Atlantic Ridge, the Southwest and Southeast Indian Ridges. Push from the west is opposed by push from the east. The *net* force is far smaller than the sum of the magnitudes — which is exactly why total ridge length is a poor predictor and why the vector geometry matters.
3. **D is a large continental plate**, so it carries a thick cratonic keel into the asthenosphere, and basal drag on that keel resists.

**Take-away: the driving force lives at a plate's subducting margin, and a plate with no slab is essentially adrift.**

**P3 (a)** The force per metre of trench, spread across the plate's thickness, gives a stress:

$$\sigma = \frac{F_{SP}}{h} = \frac{4.1\times10^{13}\ \text{N/m}}{1\times10^{5}\ \text{m}} = 4.1\times10^{8}\ \text{Pa} = \mathbf{410\ \text{MPa}}.$$

**(b)** **That stress is impossible.** It is several times the tensile strength of rock and at or beyond the maximum deviatoric stress lithosphere can hold anywhere. If the slab's full negative buoyancy were transmitted through the plate, **the slab would neck and tear itself off**, and the plate behind it would be in extension everywhere — whereas the observed intraplate stress field is dominantly *compressive* and of order tens of MPa.

The resolution is the one flagged in the formal section: **most of the slab's weight is supported by the viscous mantle it is sinking through, not by the plate it is attached to.** Drag on the slab's two faces plus the work of bending it through the hinge consume the great majority of $F_{SP}$; the *net* pull transmitted to the trailing plate is roughly an order of magnitude smaller, of order $10^{12}$–$10^{13}$ N/m, giving a few tens of MPa. That is survivable, and it matches measured intraplate stresses.

This is a general habit worth keeping: **when a force calculation returns a stress the material cannot support, the calculation is not wrong — it is telling you where the force actually goes.** [2.4](02-04-how-rock-deforms.md) makes the strength side of that argument quantitative.

**(c)** Global slab-pull power, using the *net* transmitted force is the honest calculation, but do the crude version first with the raw force to see the scale. Convergence velocity $v = 6\ \text{cm/yr} = 0.06/(3.15\times10^{7}) = 1.9\times10^{-9}\ \text{m/s}$.

$$P = F_{SP} \times \ell_{\text{trench}} \times v = (4.1\times10^{13}) \times (4\times10^{7}) \times (1.9\times10^{-9}).$$

$$4.1\times10^{13} \times 4\times10^{7} = 1.64\times10^{21}\ \text{N}; \quad 1.64\times10^{21} \times 1.9\times10^{-9} = \mathbf{3.1\times10^{12}\ \text{W}} = \mathbf{3.1\ \text{TW}}.$$

Against a total heat loss of 46 TW, that is **about 7 percent**.

**What this does show:** the energy bookkeeping closes comfortably. Plate tectonics is a *minor* consumer of the Earth's heat budget — a few percent, not most of it. There is no shortage of energy to drive plates, and any objection of the form "where would the energy come from?" is answered.

**What it does not show:** it does not prove slab pull is the driver, because ridge push, basal drag and the rest are also powered by the same thermal budget, and 7 percent is far from a binding constraint — you could be wrong by a factor of five and still fit. **Energy availability is a necessary condition, never a sufficient one.** This is precisely the trap Wegener fell into and Jeffreys exposed ([2.1](02-01-evidence-for-drift.md)): the Earth had plenty of energy to move continents in 1912 too. What was missing was a mechanism that could deliver the force without exceeding the strength of rock — the calculation in part (b). **The ranking of forces has to come from the force calculation and from the plate-speed data, not from the energy budget.**

</details>

## Flashback

**From Lesson 2.2 (Plate boundaries):** A survey ship maps a mid-ocean ridge that runs north–south. It finds ridge segment A ending at latitude 0, and picks the ridge up again 150 km to the **east**, as segment B running south from latitude 0. An east–west linear feature connects the south end of A to the north end of B; the same lineament continues both east of B and west of A as a bathymetric scarp. Half-spreading rate is 3 cm/yr.

(a) Along the 150 km stretch between the two ridge crests, which way does the crust move on each side, and is that sense the same as the *apparent* offset of the ridge? (b) Where along this whole lineament do earthquakes occur, and why does the rest of it stay quiet? (c) Estimate the age difference across the scarp far east of segment B, and the resulting seafloor depth step.

<details>
<summary>Solution</summary>

**(a)** Work out where each piece of crust was born.

Crust just **north** of the connecting segment lies east of ridge A, which made it — so it belongs to the eastward-moving plate. Crust just **south** lies west of ridge B, which made it — so it belongs to the westward-moving plate.

$$\text{north side} \rightarrow \text{east}, \qquad \text{south side} \rightarrow \text{west}.$$

Stand on the south block and face north across the fault: the far block moves to your right. **The slip is right-lateral (dextral).**

Now the apparent offset. Reading the ridge as a single line that has been cut and displaced, the southern portion (B) sits 150 km *east* of the northern portion. Standing on the north block and facing south, east is on your left — **the apparent offset is left-lateral (sinistral).**

$$\boxed{\;\text{Actual slip and apparent offset are opposite.}\;}$$

This is Wilson's 1965 result and it is the reason transform faults were a genuine discovery rather than a renaming. On an ordinary strike-slip fault the offset of a marker *is* the displacement. Here the ridge was never a continuous line that got broken: **the offset is inherited from the geometry the ridge was born with, and the fault's motion is in the opposite sense to it.** Getting this backwards is the classic error.

**(b)** Earthquakes occur **only on the 150 km between the two ridge crests** — the segment where the two plates move in opposite directions. That segment is the transform, and it is a plate boundary.

Beyond the ridge crests, the lineament is a **fracture zone**, and it is *not* a plate boundary. East of segment B, the crust on both sides of the scarp was made by ridge B and belongs to the same eastward-moving plate: no relative motion, no earthquakes. Same story west of A. **The fracture zone is a scar, not a fault** — it is the healed trace of a boundary that used to be there and is now carried away as a passive feature within a single plate. (Minor thermal-contraction seismicity aside, this is why oceanic transform seismicity stops so abruptly at the ridge crests — one of the sharpest predictions plate tectonics made, and it was confirmed almost immediately by first-motion studies.)

**(c)** At a fixed distance east of the ridge system, crust north of the fracture zone came from ridge A and crust south of it came from ridge B, 150 km further east. The extra 150 km of travel means extra age:

A half-rate of $3\ \text{cm/yr}$ is $3\times10^{4}\ \text{cm}$ per $10^{6}\ \text{yr}$, i.e. $30\ \text{km/Ma}$, so

$$\Delta t = \frac{150\ \text{km}}{30\ \text{km/Ma}} = \mathbf{5\ \text{Ma}} .$$

Both sides are older than that, so take crust that is 20 Ma on one side and 25 Ma on the other and use the depth–age relation $d = 2500 + 350\sqrt{t_{\text{Ma}}}$ metres:

$$d_{20} = 2500 + 350\sqrt{20} = 2500 + 350(4.472) = 2500 + 1565 = 4065\ \text{m},$$

$$d_{25} = 2500 + 350\sqrt{25} = 2500 + 350(5) = 2500 + 1750 = 4250\ \text{m},$$

$$\Delta d = \mathbf{185\ \text{m}} \approx 200\ \text{m step}, \ \text{older side deeper}.$$

**The scarp is not a fault scarp — it is a thermal one.** The two sides subsided by different amounts because they are different ages, and the step is exactly what the $\sqrt{t}$ cooling curve predicts. Note also that the step *shrinks* with distance from the ridge, since $\sqrt{t}$ flattens: the same 5 Ma offset between 80 and 85 Ma crust gives only $350(\sqrt{85}-\sqrt{80}) = 350(9.220-8.944) = 97\ \text{m}$, about half as much. Fracture-zone scarps really do fade oceanward, and that is why.

</details>

## Connections

- **Backward:** [2.1](02-01-evidence-for-drift.md) is the missing-mechanism problem this lesson closes, and the depth–age relation used here is the quantitative form of the "ocean floor is nowhere older than 200 Ma" argument. [2.2](02-02-plate-boundaries.md)'s Wadati–Benioff zones are the slabs whose weight drives everything above. [1.3](01-03-how-the-earth-melts.md)'s decompression melting is now visibly a *consequence* of spreading, not a cause.
- **Forward:** [2.4](02-04-how-rock-deforms.md) makes the strength argument of P3 quantitative, and the creep physics that softens the asthenosphere is the same physics that makes deep crust ductile. [2.6](02-06-mountain-building.md) uses isostasy — the same buoyancy bookkeeping as ridge push, applied to crustal roots. [2.7](02-07-earthquakes-seismic-hazard.md) is what happens where these forces meet a locked fault. [5.1](05-01-earths-internal-structure.md) supplies the evidence for the layers assumed here.
- **Sideways:** the quantitative treatment of mantle convection, the Rayleigh criterion, heat flow, plate-force modelling and isostasy is [`geophysics`](../../geophysics/syllabus.md) 4.1–4.5, which owns them; the convective instability itself is [fluid-dynamics 4.3](../../fluid-dynamics/lessons/04-03-instability-kh-rb.md) and the zero-inertia regime is [fluid-dynamics 3.3](../../fluid-dynamics/lessons/03-03-stokes-flow.md); the $\sqrt{\kappa t}$ cooling law is [heat-transfer 2.2](../../heat-transfer/lessons/02-02-semi-infinite-solid.md); creep at high homologous temperature is [materials-science 4.4](../../materials-science/lessons/04-04-failure-fracture-fatigue-creep.md). Whether other rocky planets convect with a mobile lid or a stagnant one — Venus and Mars being the comparison cases — belongs to [`planetary-science`](../../planetary-science/syllabus.md).
