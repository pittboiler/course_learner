# Geology · Lesson 1.6: Metamorphic Rocks & the Rock Cycle

> ⏱ ~15 min · Module 1: Earth Materials & the Rock Cycle · Builds on: [1.5](01-05-sedimentary-rocks.md), [1.3](01-03-how-the-earth-melts.md), [1.1](01-01-what-a-mineral-is.md) · Unlocks: [2.1](02-01-evidence-for-drift.md) (the evidence for drift)

## Why this matters

Igneous rocks tell you a magma cooled. Sedimentary rocks tell you a surface environment existed. **Metamorphic rocks tell you a specific depth and a specific temperature** — and they are the only rocks that do, because their minerals are not inherited from anywhere. They grew *in place*, out of whatever was already there, under conditions the rock is now nowhere near.

That is the whole point of this lesson. A metamorphic rock is a **thermobarometer you dig up**: read the assemblage, get the pressure and temperature, convert pressure to depth, and you know how far down that rock sat and how hot it got. Then, since it is now at the surface, you know how much crust was removed above it and roughly how long that took. This is how [2.6](02-06-mountain-building.md) reconstructs a mountain belt that has been gone for 300 million years, and how a single mineral in a hand specimen proves that a subduction zone once ran through what is now a quiet suburb of California.

## The idea

**Metamorphism is a rock changing its mind about which minerals to be, without ever melting.**

Every mineral assemblage is a compromise: it is the set of phases with the lowest total Gibbs free energy for that bulk composition at that pressure and temperature ([physical-chemistry 1.3](../../physical-chemistry/lessons/01-03-gibbs-helmholtz-energies.md)). Move the rock — bury it, heat it — and the old assemblage is no longer the cheapest option. Atoms diffuse through grain boundaries and along a thin film of pore fluid, old minerals dissolve, new ones nucleate and grow. **Nothing melts; the rock stays solid the whole way.** Above the solidus you are back in [1.3](01-03-how-the-earth-melts.md)'s territory, and by definition you have left metamorphism behind.

Two boundaries fence the field:

- **The lower limit, roughly 150–200 °C.** Below that you have *diagenesis* — the compaction and cementation of [1.5](01-05-sedimentary-rocks.md). The line is arbitrary and geologists argue about it.
- **The upper limit, the solidus** — around 650–700 °C for wet continental crust. At that point partial melting begins, and the rock becomes a **migmatite**: part metamorphic, part igneous, the seam where the rock cycle closes.

**The consequence worth memorizing: the assemblage records conditions, not history.** A rock that reached 600 °C at 25 km and then came back up is not a rock that remembers its whole journey — it is, to a good first approximation, a **snapshot of its hottest moment**. (Why it should be so obliging is a genuinely interesting question, answered under "Watch out".)

**Three agents drive it**, and only one of them makes rocks look striped:

- **Heat** supplies the energy to break bonds and the diffusion rates to move atoms. Diffusivity is Arrhenius-exponential in temperature ([materials-science 2.5](../../materials-science/lessons/02-05-diffusion-ii-transient-arrhenius.md)), which is why grain size climbs so dramatically with grade: a slate's grains are invisible, a gneiss's are centimetres.
- **Pressure**, in two flavours that must not be confused. **Confining pressure** is equal from all sides — it is just the weight of overburden, and it favours dense, compact minerals. **Directed stress** is unequal, and it is what deforms.
- **Chemically active fluids**, mostly water expelled from the rock's own hydrous minerals. Fluid is the highway: dry rock at 500 °C can sit unreacted essentially forever, because solid-state diffusion alone is far too slow.

**Foliation is the fingerprint of directed stress.** Squeeze a mud full of clay flakes and three things happen at once: flakes mechanically rotate toward perpendicular to the squeeze; quartz dissolves at the high-stress faces of grains and reprecipitates at the low-stress faces (*pressure solution*), flattening them; and new micas nucleate and grow with their sheets already perpendicular to maximum compression, because that is the orientation that minimises work against the stress. The result is a planar fabric — **and the fabric is perpendicular to the direction the crust was being shortened**, which makes foliation a stress gauge that [2.5](02-05-folds-faults-structures.md) will read directly off an outcrop.

**Which is also why some metamorphic rocks have no foliation at all.** Take a pure quartz sandstone or a pure limestone: quartz and calcite are equidimensional framework and carbonate minerals ([1.1](01-01-what-a-mineral-is.md)), with no platy habit to align. Squeeze them as hard as you like and they recrystallize into an interlocking equigranular mosaic — quartzite and marble — driven by grain-boundary energy reduction ([materials-science 2.3](../../materials-science/lessons/02-03-interfaces-grain-boundaries.md)). **No platy minerals, no foliation, no matter what the stress was.** Hornfels lacks foliation for the opposite reason: baked beside an intrusion, it had heat but no directed stress at all.

## The formal version

### Pressure is depth — compute the conversion, don't quote it

Confining pressure at depth $z$ is the weight of the overlying rock column per unit area:

$$P = \rho g z$$

where $\rho$ is mean crustal density and $g = 9.81\ \text{m/s}^2$. For continental crust, $\rho \approx 2700\ \text{kg/m}^3$:

$$\frac{dP}{dz} = \rho g = 2700 \times 9.81 = 2.65\times10^{4}\ \text{Pa/m} = \boxed{26.5\ \text{MPa/km} = 0.0265\ \text{GPa/km}}$$

*In words: about 26 or 27 megapascals per kilometre, so 1 GPa is roughly 38 km of rock.* This one number turns every pressure in this lesson into a depth. (Older literature quotes kilobars: $1\ \text{kbar} = 100\ \text{MPa} = 0.1\ \text{GPa} \approx 3.8\ \text{km}$.)

### Grade, index minerals, isograds

**Metamorphic grade** is essentially peak temperature. In an aluminous (pelitic) protolith, temperature is tracked by a sequence of **index minerals**, each appearing when a specific reaction runs:

$$\text{chlorite} \to \text{biotite} \to \text{garnet} \to \text{staurolite} \to \text{kyanite} \to \text{sillimanite}$$

An **isograd** is the mapped line where an index mineral first appears — the surface trace of a reaction, and therefore a contour of the ancient thermal structure. *In words: mapping isograds across a belt draws the paleo-isotherms of an orogeny that ended hundreds of millions of years ago.*

**The foliated series, in increasing grade**, from a shale protolith:

| Rock | Grade | Diagnostic | Roughly |
|---|---|---|---|
| **Slate** | very low | perfect *slaty cleavage*, grains invisible | 200–350 °C |
| **Phyllite** | low | silky sheen — micas just big enough to catch light | 350–450 °C |
| **Schist** | medium | visible platy micas define *schistosity*; garnet, staurolite | 450–650 °C |
| **Gneiss** | high | segregated light and dark **bands**; micas breaking down | 650 °C+ |
| **Migmatite** | melting begins | pale contorted leucosome veins in a darker host | ~700 °C+ |

**Non-foliated:** quartzite (from quartz sandstone), marble (from limestone or dolostone), hornfels (any fine protolith, baked in a contact aureole), anthracite (from coal).

### Facies: the organizing scheme

A **metamorphic facies** is a *field* in pressure–temperature space, named for the assemblage that a basaltic protolith develops there. The definition is deliberately composition-relative: a facies is a set of P–T conditions, and different bulk compositions express it with different minerals.

**Each facies corresponds to a tectonic setting**, because each setting has a characteristic geothermal gradient:

| Facies | Conditions | Gradient | Setting |
|---|---|---|---|
| Hornfels | low P, wide T | >60 °C/km | contact aureole beside an intrusion |
| Greenschist → amphibolite → granulite | moderate P, rising T | ~20–30 °C/km | regional, collisional belt |
| **Blueschist** | high P, low T | ~5–10 °C/km | **subduction zone** |
| Eclogite | very high P | — | deep subduction, mantle depths |

**Blueschist is the cleanest inference in the field.** Its blue amphibole, glaucophane, is stable only above roughly 0.6–0.7 GPa at temperatures under about 400 °C — a gradient near 10 °C/km, three times colder than normal continental crust. **Nothing but a subducting slab gets rock that deep while keeping it that cold**, because nothing else moves cold material downward faster than heat can conduct into it. Find blueschist in an ancient terrane and you have found a fossil subduction zone. (Blueschists are essentially absent before about 800 Ma — one $\text{Ma}$ is one million years, one $\text{Ga}$ one billion — which is read as evidence that the early Earth ran too hot for cold subduction.)

### The aluminosilicate triple point — one composition, three answers

$\text{Al}_2\text{SiO}_5$ crystallizes as three different minerals. Same formula, different lattice — the [1.1](01-01-what-a-mineral-is.md) argument in its purest form, and a genuine one-component phase diagram ([physical-chemistry 2.1](../../physical-chemistry/lessons/02-01-phase-stability-one-component-diagrams.md)).

| Polymorph | Molar volume | Stable where | Means |
|---|---|---|---|
| **Kyanite** | $44.1\ \text{cm}^3/\text{mol}$ | high P | deep |
| **Andalusite** | $51.5\ \text{cm}^3/\text{mol}$ | low P, low T | shallow |
| **Sillimanite** | $49.9\ \text{cm}^3/\text{mol}$ | high T | hot |

**Kyanite is 14 percent denser than andalusite, and that is the entire reason it is the deep one.** Pressure always favours the smaller molar volume. The slopes of the boundaries follow from Clapeyron ([physical-chemistry 2.2](../../physical-chemistry/lessons/02-02-clapeyron-clausius-clapeyron.md)):

$$\frac{dP}{dT} = \frac{\Delta S}{\Delta V}$$

For andalusite $\to$ sillimanite, $\Delta S > 0$ (sillimanite is the high-entropy form) but $\Delta V = -1.6\ \text{cm}^3/\text{mol} < 0$, so $dP/dT < 0$ — **that boundary leans backwards**, which is exactly what the figure shows and is otherwise baffling.

All three fields meet at the **triple point**, near

$$\boxed{\;T \approx 550\ ^\circ\text{C}, \qquad P \approx 0.45\ \text{GPa} \;\Longrightarrow\; z = \frac{450\ \text{MPa}}{26.5\ \text{MPa/km}} \approx 17\ \text{km}\;}$$

(Experimental determinations range over about 500–600 °C and 0.35–0.55 GPa; it is a hard measurement.) **This is the single most useful marker in metamorphic petrology**, because it is a *point*, not a curve. Every other reaction gives you a line in P–T space and therefore one equation in two unknowns. Three aluminosilicates in one equilibrium assemblage pins both at once.

The linearizations used in this lesson's arithmetic, anchored on the triple point:

$$\text{kyanite–sillimanite:} \quad P\ [\text{MPa}] = 450 + 2.75\,(T - 550)$$
$$\text{andalusite–sillimanite:} \quad P\ [\text{MPa}] = 450 - 2.8\,(T - 550)$$

### How thermobarometry actually works

Two reaction types, distinguished by their Clapeyron slopes:

- **Exchange reactions** (Fe–Mg swapping between garnet and biotite) shuffle atoms between existing phases, so $\Delta V \approx 0$ and $dP/dT$ is enormous. The equilibrium curve is near-vertical in P–T: **it fixes temperature and barely cares about pressure. A thermometer.**
- **Net-transfer reactions** with large volume change (garnet + aluminosilicate + quartz $\rightleftharpoons$ plagioclase) have big $\Delta V$ and modest $\Delta S$, so $dP/dT$ is small and the curve is near-horizontal: **it fixes pressure. A barometer.**

Plot both curves and their intersection is the rock's peak P–T. *In words: you need one reaction that is blind to pressure and one that is blind to temperature, and where they cross is your answer.*

### The rock cycle, as an energy and material budget

The circle-of-arrows diagram is true and nearly useless. The version worth carrying is an **energy and material budget with three power sources**:

- **Internal heat** (~47 TW globally, radiogenic plus primordial) drives everything that *makes* rock: melting, metamorphism, uplift.
- **Solar energy** (~$1.2\times10^{17}$ W absorbed) drives everything that *takes rock apart*: weathering, the water cycle, wind, waves.
- **Gravity** supplies the potential energy for burial, subsidence and every downslope movement of material.

| Arrow | Driver | How common |
|---|---|---|
| magma → igneous rock | internal heat | universal |
| igneous → sediment (weathering, erosion) | solar + gravity | universal |
| sediment → sedimentary rock (burial) | gravity | universal |
| sedimentary → metamorphic | internal heat + gravity | common — most metamorphic rock has this history |
| metamorphic → magma (migmatite, crustal melts) | internal heat | common in orogenic roots |
| metamorphic → sediment (exhumation, then weathering) | solar + gravity | common — every shield does it |
| igneous → metamorphic directly | internal heat | common at ridges and aureoles, easy to overlook |
| sediment → magma directly | internal heat | **rare** — needs subduction past the solidus, but detectable geochemically in arc lavas |
| metamorphic → metamorphic (overprinting) | internal heat | rare, and hard to read when it happens |

**Two things this framing gets right that the circle does not.** First, the arrows do not run at one rate: oceanic crust makes the full round trip in under 200 Myr, while a craton's gneiss has sat unchanged for 3 Ga. Second, the cycle is not conservative — **each pass sorts material**, because partial melting always extracts the silica-rich fraction ([1.3](01-03-how-the-earth-melts.md)) and weathering always concentrates quartz ([1.5](01-05-sedimentary-rocks.md)). The Earth is not stirring itself; it is distilling itself, and the continents are the accumulated residue.

## Picture

![A pressure-temperature diagram spanning zero to 900 degrees Celsius and zero to 1.4 gigapascals, with a depth axis in kilometres on the right. Shaded fields label the metamorphic facies: zeolite at very low temperature, a low-pressure hornfels band along the bottom, greenschist, amphibolite and granulite across the middle at increasing temperature, blueschist in the cold high-pressure region and eclogite above it. Three coral lines meet at a dot marked 550 degrees Celsius and 0.45 gigapascals, dividing the kyanite, andalusite and sillimanite fields; the andalusite-sillimanite boundary slopes backwards. A dashed line marks the wet solidus beyond which melting produces migmatite. Three coloured arrows show pressure-temperature paths: a green near-horizontal contact path heating at shallow depth, a blue regional collisional path that rises steeply in pressure and then swings right into higher temperature, and an orange subduction path that climbs almost vertically through blueschist into eclogite.](assets/01-06-fig1.svg)

## Worked examples

**Example 1 (mechanical — from a mineral to a geothermal gradient).** A pelitic hornfels contains **andalusite** and cordierite. Independent thermometry gives a peak temperature of 600 °C. (a) What is the maximum depth of metamorphism? (b) What geothermal gradient does that imply? (c) What does that gradient tell you?

**(a)** Andalusite is stable only *below* the andalusite–sillimanite boundary. At $T = 600\ ^\circ\text{C}$:

$$P_{\max} = 450 - 2.8\,(600 - 550) = 450 - 140 = 310\ \text{MPa} = 0.31\ \text{GPa}$$

$$z_{\max} = \frac{310\ \text{MPa}}{26.5\ \text{MPa/km}} = \mathbf{11.7\ \text{km}}$$

**(b)** Taking a 15 °C surface temperature as negligible:

$$\frac{dT}{dz} \ge \frac{600\ ^\circ\text{C}}{11.7\ \text{km}} = \mathbf{51\ ^\circ\text{C/km}}$$

**(c)** A normal continental geotherm is 20–30 °C/km. **This rock got at least twice as hot as its depth allows**, so the heat cannot have come from burial. It came from something local and hot: an intrusion, a few hundred metres away. That is a contact aureole, path 1 on the figure — and it is why the andalusite–cordierite pair is the classic aureole assemblage.

Notice what just happened: **one mineral, one temperature, and simple arithmetic produced a tectonic conclusion.**

**Example 2 (why you'd care — reading a vanished mountain belt).** In a schist belt, a garnet–mica schist contains kyanite with fibrous **sillimanite growing across and replacing it**. Garnet–biotite thermometry gives $660 \pm 30\ ^\circ\text{C}$. (a) Give the peak pressure and depth. (b) Give the uncertainty. (c) What was the geothermal gradient, and what tectonic setting does that indicate? (d) What must have happened since?

**(a)** Sillimanite replacing kyanite means the rock crossed the kyanite–sillimanite boundary — so at peak it sat *on* that line:

$$P = 450 + 2.75\,(660 - 550) = 450 + 302.5 = 752.5\ \text{MPa} = \mathbf{0.75\ \text{GPa}}$$

$$z = \frac{752.5}{26.5} = \mathbf{28.4\ \text{km}}$$

**(b)** Propagating the temperature uncertainty along the boundary:

$$\Delta P = 2.75 \times 30 = 82.5\ \text{MPa} \quad\Longrightarrow\quad \Delta z = \frac{82.5}{26.5} = \pm 3.1\ \text{km}$$

So $28.4 \pm 3.1\ \text{km}$ — **about 11 percent, which is a genuinely good number for a rock with no label on it.**

**(c)** $$\frac{dT}{dz} = \frac{660}{28.4} = \mathbf{23\ ^\circ\text{C/km}}$$

Slightly *cooler* than a normal continental geotherm, at a depth far greater than normal crust reaches. That is the signature of **thickened crust in a continental collision**: shove one continent's crust under another's and you double the thickness faster than heat can redistribute, so the deep rocks are deep before they are hot. This is path 2 on the figure, and it is why the classic Barrovian sequence runs kyanite-then-sillimanite while a contact aureole gives andalusite.

**A pleasing coincidence worth noticing:** a 32 °C/km geotherm passes almost exactly through the aluminosilicate triple point (550 °C at 17 km). Continental collision belts have gradients that straddle that value, which is why kyanite, andalusite *and* sillimanite all turn up in orogenic belts — and almost nowhere else.

**(d)** The rock is now in your hand at the surface, so **28 km of overburden has been removed** by erosion and tectonic denudation. At a brisk exhumation rate of $1\ \text{mm/yr}$:

$$t = \frac{28.4\times10^{6}\ \text{mm}}{1\ \text{mm/yr}} = \mathbf{28\ \text{Myr}}$$

**A single hand specimen just told you that a Himalaya-scale mountain range stood here and that unroofing it took tens of millions of years** — the argument [2.6](02-06-mountain-building.md) is built on.

## Watch out

- **You might think metamorphism means partial melting.** It is defined by the *absence* of melt. Once melt appears you have a migmatite, and the rock has left this lesson for [1.3](01-03-how-the-earth-melts.md).
- **You might expect the assemblage to record the whole P–T path.** It usually records only the peak, and the reason is mechanistic: prograde reactions are **dehydration** reactions, and the water leaves. On the way back down there is no fluid to run the reverse reaction, so retrograde metamorphism is kinetically stalled. **The rock records its hottest moment because it dried itself out getting there** — and where fluid *does* re-enter, along a fracture or a shear zone, you see retrogression, which is exactly where it is expected.
- **You might read gneissic banding as bedding.** It is not. It is compositional segregation produced under stress, and it commonly cuts across relict bedding at an angle. That angle is data, not noise — [2.5](02-05-folds-faults-structures.md) uses it.
- **You might expect index minerals in any rock.** They need an aluminous bulk composition. A quartzite has no aluminium and no reactions available, so it records essentially nothing about grade. **A rock can only tell you what its chemistry lets it say.**
- **You might equate "high grade" with "high pressure".** Grade tracks temperature. Blueschist is a *high-pressure, low-grade* rock, and eclogite can form at low temperature too. Pressure and temperature are independent axes, which is the whole reason the diagram is two-dimensional.
- **You might read confining pressure as a deforming force.** Equal from all sides, it changes volume and mineral stability but produces no fabric. **Only directed stress makes foliation** — which is why a deeply buried but undeformed sandstone becomes a massive quartzite rather than a striped one.

## One-liner

> A metamorphic rock is a thermobarometer you can pick up: kyanite means deep, andalusite means shallow, sillimanite means hot, blueschist means a subduction zone once ran through here — and all three aluminosilicates in one assemblage means precisely 550 °C and 17 km, because that is the only point on the diagram where the answer is a point.

## Problems

**P1 (🟢)** A metabasalt contains glaucophane, requiring a minimum pressure of $0.70\ \text{GPa}$, and its peak temperature is estimated at 300 °C. Take $\rho = 2900\ \text{kg/m}^3$ for the basaltic column. (a) Compute the lithostatic gradient. (b) Compute the minimum depth. (c) Compute the geothermal gradient and say what setting it implies.

**P2 (🟡)** A pelitic schist contains muscovite, biotite, quartz, plagioclase, and **both kyanite and andalusite**, with no textural evidence that either replaces the other. (a) What does the pair constrain, and what does it *not*? (b) Five hundred metres along strike, the same unit contains all three aluminosilicates in mutual contact. State the P–T conditions and the depth. (c) Explain why the "no replacement texture" clause in part (a) is load-bearing, and what a *replacement* texture would have told you instead.

**P3 (🔴)** (a) Using the two power figures above, compute how many times larger the absorbed solar flux is than Earth's internal heat flow. (b) Given that ratio, explain why the smaller source is responsible for every rock-*forming* process while the larger one only destroys. (c) A pure quartz sandstone is buried to 25 km in a collisional belt with a 25 °C/km gradient. Give the pressure and temperature, name the rock, say whether it is foliated and why, and state what it can and cannot tell a later geologist about the P–T path.

<details>
<summary>Solutions</summary>

**P1 (a)** $$\frac{dP}{dz} = \rho g = 2900 \times 9.81 = 2.845\times10^{4}\ \text{Pa/m} = \mathbf{28.4\ \text{MPa/km}}$$

**(b)** $$z = \frac{700\ \text{MPa}}{28.45\ \text{MPa/km}} = \mathbf{24.6\ \text{km}}$$

**(c)** $$\frac{dT}{dz} = \frac{300\ ^\circ\text{C}}{24.6\ \text{km}} = \mathbf{12.2\ ^\circ\text{C/km}}$$

**Roughly half a normal continental geotherm, and about a fifth of the aureole gradient in Example 1.** The rock reached 25 km while staying colder than 300 °C, which requires that it was carried down *faster than heat could conduct into it*. Only a subducting slab does that. This is path 3 on the figure, and finding this rock is finding a fossil subduction zone — which is how the Franciscan Complex of coastal California was recognised as one long before anyone had a plate map.

**P2 (a)** Two polymorphs in mutual equilibrium means the rock sat **on the kyanite–andalusite boundary**. That is a *curve*, not a point: it tells you $T < 550\ ^\circ\text{C}$ and $P < 0.45\ \text{GPa}$ (so $z < 17\ \text{km}$), and it gives you one equation relating $P$ and $T$ — **but it does not fix either one separately.** Anywhere along that line is consistent with the observation. To get a number you need a second, independent constraint, such as garnet–biotite thermometry.

**(b)** Three phases of one component in mutual equilibrium is the triple point, and it is unique:

$$T = 550\ ^\circ\text{C}, \qquad P = 0.45\ \text{GPa}, \qquad z = \frac{450}{26.5} = \mathbf{17\ \text{km}}$$

**This is the only assemblage in metamorphic petrology that fixes both variables with no other information at all** — which is why the triple point is worth the space it gets in every textbook. (Gibbs' phase rule says it: one component, three phases, zero degrees of freedom.)

**(c)** Without the no-replacement clause, the two minerals need not have coexisted. A rock that peaked at high pressure in the kyanite field and was then exhumed *while still warm* would grow andalusite over relict kyanite — **and that gives you two points on a P–T path, at two different times, not one equilibrium point.** Reading it as an equilibrium pair would place the rock on a boundary it never sat on.

A replacement texture is not a problem, though — it is a bonus. **It gives you a direction of travel.** Andalusite replacing kyanite means pressure fell while temperature stayed up: decompression, i.e. exhumation. Sillimanite replacing kyanite (Example 2) means temperature rose at roughly constant pressure. **The equilibrium assemblage gives you a point; the replacement textures give you the arrow through it**, and modern petrology is built on reading the second.

**P3 (a)** $$\frac{1.2\times10^{17}\ \text{W}}{4.7\times10^{13}\ \text{W}} \approx \mathbf{2{,}600}$$

**(b)** **Quality, not quantity.** The solar flux is enormous but arrives *dilute and cold*: about 240 W/m² spread evenly over the surface, at a radiative temperature near 255 K, and it is re-emitted to space essentially as fast as it lands. Energy at that temperature can break bonds in water, drive evaporation, lift air and move sediment — the low-grade work of weathering and transport — but it cannot raise anything above 150 °C, so it can make no mineral in this lesson.

Internal heat is the opposite: small in total, but delivered *hot and concentrated*. It arrives at temperatures of 1300 °C and above, and it is focused into narrow zones — ridges, arcs, orogenic roots — rather than smeared over the planet. That concentration is what lets it cross the solidus and the metamorphic reaction boundaries. **The general principle: what a heat source can do is set by its temperature and its concentration, not its total power** — the availability argument of [physical-chemistry 1.3](../../physical-chemistry/lessons/01-03-gibbs-helmholtz-energies.md). Gravity does the third job, supplying the burial that turns heat into *pressure*-driven reactions.

**(c)** $$P = 25\ \text{km} \times 26.5\ \text{MPa/km} = 662\ \text{MPa} = \mathbf{0.66\ \text{GPa}}, \qquad T = 25 \times 25 = \mathbf{625\ ^\circ\text{C}}$$

That plots in the **amphibolite facies** — and, amusingly, almost exactly on the kyanite–sillimanite boundary (which sits at $450 + 2.75(625-550) = 656\ \text{MPa}$).

The rock is a **quartzite**, and it is **not foliated**, even though it was in a collisional belt with strong directed stress. Quartz is an equidimensional framework silicate ([1.1](01-01-what-a-mineral-is.md)) with no platy habit, so recrystallization produces an interlocking equigranular mosaic with sutured grain boundaries rather than an aligned fabric.

**What it can tell you:** almost nothing quantitative. All the original quartz grains and their cement have recrystallized into quartz. There is no aluminium, so no aluminosilicate — the fact that it sat on the kyanite–sillimanite line is **completely unrecorded**, because the rock has no way to express it. No Fe–Mg pair, so no thermometer; no net-transfer reaction, so no barometer.

**What it can still tell you:** grain size and grain-boundary texture give a rough sense of grade; deformed and recrystallized quartz microstructures record strain and, crudely, deformation temperature; and it tells you the protolith was a clean, mature quartz sand — a [1.5](01-05-sedimentary-rocks.md) inference that survives metamorphism intact, since quartzite is chemically almost inert.

**The general lesson, and the reason this problem is here: a metamorphic rock's usefulness as a P–T recorder is set by its protolith's chemistry, not by how impressive its metamorphism was.** In the field you sample the pelites and ignore the quartzite, however handsome it is.

</details>

## Flashback

**From Lesson 1.4 (Igneous Rocks & Igneous Bodies):** A road cut exposes a dark grey rock carrying blocky white plagioclase crystals 4–6 mm across, set in a groundmass too fine to resolve with a hand lens. Two kilometres along strike, a coarse-grained rock crops out with the same minerals — plagioclase and pyroxene, no quartz — but with every grain 2–5 mm and interlocking. (a) Name both rocks. (b) Reconstruct the cooling history of the first. (c) Which minerals crystallized first in the first rock, and what is the evidence?

<details>
<summary>Solution</summary>

**(a)** Plagioclase plus pyroxene with no quartz is a **mafic** composition. The two-grain-size rock with large crystals in a fine matrix is a **porphyritic basalt**; the uniformly coarse rock of the same composition is a **gabbro**. *Same magma composition, different cooling histories* — the two-axis grid of 1.4 in a single outcrop pair.

**(b)** A porphyritic texture requires **two cooling stages**, because grain size records cooling rate:

1. **Slow cooling at depth.** The magma sat in a chamber long enough for plagioclase to nucleate sparsely and grow to 4–6 mm — millimetre crystals need years to millennia, not minutes.
2. **Rapid cooling at or near the surface.** The magma, already carrying its crystal cargo, ascended and erupted or was emplaced shallowly. The remaining melt was quenched fast enough that nucleation beat growth, giving an aphanitic groundmass.

**A porphyry is the most informative igneous texture there is**, because it is the only one that records a *change* in cooling rate rather than a single value — it proves the magma moved.

**(c)** **The phenocrysts — the plagioclase — crystallized first.** Three lines of evidence:

- They are **large and euhedral**, meaning they grew freely into liquid with nothing obstructing their faces.
- They are **completely enclosed by the groundmass**, so the groundmass was still molten when they were already solid. Enclosure is a superposition argument at the scale of a thin section, and [4.1](04-01-relative-dating-unconformities.md) will make the same move at outcrop scale with inclusions.
- It matches **Bowen's series** ([1.3](01-03-how-the-earth-melts.md)): calcium-rich plagioclase is an early phase in a cooling mafic melt.

The gabbro, by contrast, has no phenocrysts at all — it cooled slowly throughout, at depth, and every grain had time to grow. **Grain size is a thermometer of rate; the *distribution* of grain sizes is a record of history.**

</details>

## Connections

- **Backward:** the protoliths are [1.4](01-04-igneous-rocks-and-bodies.md)'s igneous rocks and [1.5](01-05-sedimentary-rocks.md)'s sediments; the reason quartz and calcite refuse to foliate while micas insist on it is [1.1](01-01-what-a-mineral-is.md)'s polymerization series, read as crystal habit; the migmatite that ends the series is [1.3](01-03-how-the-earth-melts.md)'s solidus seen from below.
- **Forward:** [2.5](02-05-folds-faults-structures.md) reads foliation as a stress-direction gauge; [2.6](02-06-mountain-building.md) is this lesson applied at orogen scale, using facies zones to map the depth structure of a vanished mountain belt; [2.2](02-02-plate-boundaries.md) uses blueschist as the diagnostic of ancient subduction; [3.1](03-01-weathering-soils.md) takes these rocks back apart; [5.2](05-02-earth-history-hadean-proterozoic.md) reads the disappearance of blueschist from the early record as a thermal-history constraint.
- **Sideways:** the whole apparatus is applied physical chemistry — the free-energy minimisation of [physical-chemistry 1.3](../../physical-chemistry/lessons/01-03-gibbs-helmholtz-energies.md), the one-component diagram of [physical-chemistry 2.1](../../physical-chemistry/lessons/02-01-phase-stability-one-component-diagrams.md), and the Clapeyron slope of [physical-chemistry 2.2](../../physical-chemistry/lessons/02-02-clapeyron-clausius-clapeyron.md), which is what separates a thermometer from a barometer. Recrystallization and grain growth in the solid state are [materials-science 2.3](../../materials-science/lessons/02-03-interfaces-grain-boundaries.md) and [2.5](../../materials-science/lessons/02-05-diffusion-ii-transient-arrhenius.md) — a metamorphic rock is a very slowly annealed ceramic. The quantitative crustal geotherms and heat-flow measurements behind every gradient quoted here belong to [`geophysics`](../../geophysics/syllabus.md) 4.1.
