# Geology · Lesson 1.3: How the Earth Melts

> ⏱ ~15 min · Module 1: Earth Materials & the Rock Cycle · Builds on: [1.1](01-01-what-a-mineral-is.md) · Unlocks: [1.4](01-04-igneous-rocks-and-bodies.md) (igneous rocks & igneous bodies)

## Why this matters

Almost everyone's mental picture of the Earth's interior is wrong in the same way: a thin crust floating on a sea of molten rock. **The mantle is 84 percent of Earth's volume and it is essentially all solid.** S-waves are shear waves and shear waves cannot propagate through a liquid, yet S-waves cross the entire mantle — the evidence is direct and it is decisive ([5.1](05-01-earths-internal-structure.md); the wave physics belongs to [`geophysics`](../../geophysics/syllabus.md) 1.2). The one genuinely molten layer, the outer core, is iron, sits below 2900 km, and has never erupted anything.

So the real question is not "why is there solid rock on top of magma" but the opposite: **the Earth is nearly all solid, magma is rare and difficult, and it is made in only three ways.** Each of those three maps onto one tectonic setting. That correspondence is what turns igneous geology from a naming exercise into a prediction: hand a geologist a 300-million-year-old volcanic sequence and its water content, and they will tell you what kind of plate boundary stood there. This lesson is the machinery behind that inference, and everything in [1.4](01-04-igneous-rocks-and-bodies.md), [2.2](02-02-plate-boundaries.md) and [2.8](02-08-volcanoes-volcanic-hazards.md) rests on it.

## The idea

Start with the fact that makes melting hard.

Temperature rises with depth. So does the melting temperature — pressure squeezes atoms into the tighter-packed solid, so you need more heat to pull them apart. **Both curves rise, and the melting curve rises faster.** In the convecting mantle the temperature climbs at roughly $0.4\ ^\circ\text{C/km}$ (it is an adiabat — the rock is only being compressed, not heated), while the melting temperature climbs at roughly $4\ ^\circ\text{C/km}$. Ten times faster.

**Going deeper therefore does not help.** The gap between how hot the rock is and how hot it would need to be to melt is *widest* deep down. It is narrowest at the base of the lithosphere, around 60–100 km, where the steep conductive geotherm of the cold plate hands over to the shallow mantle adiabat. That is why essentially all of Earth's magma is born in that one narrow depth band, and why nothing melts at 800 km no matter how hot it is.

To make magma you must close a gap of 100–300 °C. There are exactly three ways to close it, and each one attacks a different variable:

1. **Lower the pressure** — move the rock, not the heat. Take mantle that is 160 °C below its melting point at 100 km and lift it. It cools slightly on the way up (adiabatically), but its melting point falls ten times faster, so the gap closes and it melts *while getting colder*. This is **decompression melting**, it needs no added heat at all, and it is by far the largest producer of magma on the planet: mid-ocean ridges and hotspots.
2. **Lower the melting point** — move the solidus, not the rock. Add water. A few tenths of a percent of dissolved water drops the melting temperature of peridotite by several hundred degrees, which is more than enough. This is **flux melting**, and the only place with a mechanism for pumping water into hot mantle is a subduction zone, where the sinking slab dehydrates.
3. **Add heat** — the obvious route, and the rarest. Rock is a spectacular insulator, so heat does not travel far; the only way to deliver enough of it is to physically inject hot magma into cooler rock. Basalt from the mantle at 1200 °C intruded into continental crust whose wet melting point is near 700 °C will melt the crust around it. This is **heat-transfer melting**, and it makes contact aureoles and continental granites.

**Then the second big idea, which is what makes the whole subject predictive: rock is a mixture, so it does not melt at a temperature — it melts over an interval, and the first liquid out is not a small sample of the source.** It is systematically enriched in the low-melting components. **Partial melt is always more silica-rich than the rock it came from.**

That single asymmetry, run for four billion years, is why the mantle is ultramafic (45 percent $\text{SiO}_2$) and the continents are granitic (70 percent). **The Earth has been distilling itself since the Hadean**, one partial melt at a time, and the continents are the accumulated distillate.

## The formal version

**Solidus and liquidus.** For a multicomponent rock, define the **solidus** $T_s(P)$ as the temperature at which the first drop of melt appears, and the **liquidus** $T_l(P)$ as the temperature at which the last crystal disappears. Between them the rock is a crystal–liquid mush with **melt fraction** $F$ (mass of liquid over total mass).

*In words: a pure mineral has a melting point; a rock has a melting range, and inside that range it is partly liquid.*

**A working linear model of the upper mantle** (a fit to experiment, good to about 150 km — everything below uses it):

$$T_s(z) = 1100 + 4z \quad (\text{dry peridotite solidus, degrees C, } z \text{ in km})$$

$$T_a(z) = T_p + 0.4z \quad (\text{mantle adiabat, } T_p = \text{potential temperature})$$

Pressure follows from the weight of overlying rock, with $\rho_m = 3300\ \text{kg/m}^3$ the mantle density and $g = 9.8\ \text{m/s}^2$:

$$\frac{dP}{dz} = \rho_m g = 3.23\times10^{7}\ \text{Pa/km} = 0.0323\ \text{GPa/km}$$

*In words: about $1\ \text{GPa}$ per 31 km, so 100 km depth is roughly $3.2\ \text{GPa}$.* A "km of depth" and a "GPa of pressure" are the same axis, which is why the figure below is labelled with both.

**Mechanism 1 — decompression.** Ascending mantle follows the adiabat. Melting begins where the adiabat meets the solidus:

$$T_p + 0.4z = 1100 + 4z \;\Longrightarrow\; \boxed{\;z_{\text{melt}} = \frac{T_p - 1100}{3.6}\;}$$

*In words: the depth at which upwelling mantle starts to melt depends on one number — how hot the mantle is — and on nothing about the tectonics.* This is the most useful equation in the lesson, and Worked Example 1 turns it into the thickness of the ocean crust.

**Mechanism 2 — flux melting, and why water works.** Two ways to say it, and both are worth having.

*Thermodynamically*, this is **freezing-point depression** and nothing more exotic. Water dissolves readily in silicate liquid and almost not at all in olivine or pyroxene. A component that partitions into the liquid and not the solid lowers the liquid's free energy (mixing entropy) without lowering the solid's, so the liquid becomes the stable phase at a lower temperature — identical in mechanism to salt on an icy road ([`physical-chemistry` 2.4](../../physical-chemistry/lessons/02-04-colligative-properties.md)).

*Structurally*, it is a direct callback to [1.1](01-01-what-a-mineral-is.md). A silicate melt is a polymer network of $\text{SiO}_4$ tetrahedra sharing **bridging oxygens**. Water attacks those bridges:

$$\text{Si}-\text{O}-\text{Si} \;+\; \text{H}_2\text{O} \;\longrightarrow\; 2\,(\text{Si}-\text{OH})$$

*In words: every water molecule that dissolves snips one Si–O–Si bridge and caps the ends.* **Depolymerizing the liquid stabilizes it** — the melt gains configurational freedom, so less thermal agitation is needed to make it the preferred phase. The same reaction also collapses the melt's viscosity, which is the entire content of [2.8](02-08-volcanoes-volcanic-hazards.md).

Numbers: at 100 km, the dry solidus is $1500\ ^\circ\text{C}$ and the water-saturated solidus is near $1000\ ^\circ\text{C}$. A subduction-zone mantle wedge sits around $1250\ ^\circ\text{C}$ — **250 °C too cold to melt dry, and 250 °C hotter than it needs to be once wet.** That is the whole of arc volcanism in one line.

One wrinkle worth carrying: water solubility in silicate melt *increases* with pressure, so the wet solidus leans backwards (to lower temperature) as pressure rises over the first couple of GPa, instead of forward like the dry one. This is also why rising magma exsolves gas — the same solubility running in reverse ([2.8](02-08-volcanoes-volcanic-hazards.md)).

**Mechanism 3 — heat transfer.** Basalt at $1200\ ^\circ\text{C}$ ponds at the base of, or intrudes into, crust at $400\text{–}600\ ^\circ\text{C}$ whose water-present granite solidus is only $650\text{–}700\ ^\circ\text{C}$. Per kilogram, the basalt can give up sensible heat $c_p\,\Delta T$ plus latent heat of crystallization $L_c \approx 4\times10^{5}\ \text{J/kg}$ — of order $8\times10^{5}\ \text{J/kg}$ in total, enough to raise and melt roughly its own mass of crust. **You need about as much basalt as the granite you make**, which is why crustal melting is never a small local event: a granite batholith implies a mantle plumbing system of comparable size beneath it.

**Partial melting, formally.** Let $C_0$ be the source's concentration of some component, $C_L$ the melt's, $C_S$ the residue's, and $F$ the melt fraction. Mass conservation is the whole tool:

$$\boxed{\;C_0 = F\,C_L + (1-F)\,C_S\;}$$

*In words: whatever leaves in the melt is missing from the residue.* Rearranged, $F = (C_0 - C_S)/(C_L - C_S)$ — **this is exactly the lever rule** from [`materials-science` 3.1](../../materials-science/lessons/03-01-phase-diagrams-lever-rule.md), and a binary eutectic diagram ([`materials-science` 3.2](../../materials-science/lessons/03-02-eutectics-microstructure.md), [`physical-chemistry` 2.5](../../physical-chemistry/lessons/02-05-binary-phase-diagrams.md)) is a working model of a melting rock. Worked Example 2 runs it in both directions.

**Bowen's reaction series** is what this system does on the way back down, and it was determined by exactly these experiments (Bowen, 1928):

| Crystallizes | Discontinuous branch (Fe–Mg) | [1.1](01-01-what-a-mineral-is.md) structure | Si : O | Continuous branch |
|---|---|---|---|---|
| first, ~1200 °C | olivine | isolated tetrahedra | 1 : 4 | Ca-plagioclase |
| ↓ | pyroxene | single chain | 1 : 3 | ↓ |
| ↓ | amphibole | double chain | 4 : 11 | ↓ |
| ↓ | biotite | sheet | 2 : 5 | Na-plagioclase |
| last, ~700 °C | K-feldspar → muscovite → **quartz** | framework | 1 : 2 | — |

**Look at the third column. Bowen's crystallization order is the polymerization series of [1.1](01-01-what-a-mineral-is.md), read in order.** That is not a coincidence and it is the deepest thing in this lesson: as crystallization strips Mg and Fe out of the melt, the liquid becomes progressively more silica-rich and more polymerized, and the minerals that can grow from it are progressively more polymerized too. The **discontinuous** branch is discontinuous because each mineral literally *reacts* with the remaining melt to make the next one — olivine plus silica gives pyroxene:

$$\text{Mg}_2\text{SiO}_4 + \text{SiO}_2 \longrightarrow 2\,\text{MgSiO}_3$$

**Predictive consequence you can check on any hand sample: olivine and quartz do not coexist in an equilibrium igneous rock.** If both are present, something was out of equilibrium — the melt was quenched before the reaction finished, or the quartz is a xenocryst. The **continuous** branch is continuous because plagioclase is a solid solution ([1.1](01-01-what-a-mineral-is.md)): the crystal continuously re-equilibrates with the melt, Ca-rich to Na-rich, without changing structure.

**Two consequences, and they carry the rest of the course.**

**(a) Fractional crystallization.** If early crystals are *removed* from contact with the melt — they sink, or the melt is squeezed out from between them — the reactions cannot run and the residual liquid is driven relentlessly toward silica-rich, alkali-rich compositions. Basalt becomes andesite becomes rhyolite. The evidence is unambiguous: layered intrusions (Skaergaard, Bushveld) with cumulate layers stacked in Bowen's order, and **normally zoned plagioclase** — Ca-rich cores, Na-rich rims — visible in thin section in almost any lava.

**(b) The weathering order, backwards.** The first-formed minerals crystallized hottest and driest, so they are furthest from equilibrium with a wet, cold, oxidizing surface. Olivine weathers fastest; quartz survives. **The Goldich stability series is Bowen's series run in reverse**, which is why beach sand is quartz — flagged here, collected in [3.1](03-01-weathering-soils.md).

**Magmatic differentiation** is the umbrella term, and there are three distinguishable processes with three distinguishable field signatures:

| Process | What happens | How you know it happened |
|---|---|---|
| **Fractional crystallization** | early crystals removed from the melt | cumulate layering, zoned crystals, a compositional trend within one suite |
| **Assimilation** | melt digests its wall rock | **inherited zircons far older than the eruption**, crustal isotope signatures, reaction-rimmed xenoliths |
| **Magma mixing** | a hot mafic recharge meets a resident felsic body | mafic enclaves with crenulate margins, banded pumice, **reversely** zoned crystals |

## Picture

![A temperature versus depth diagram of the upper mantle. A steep dry peridotite solidus runs from about 1100 degrees at the surface to 1700 degrees at 150 kilometres. A water-saturated solidus sits several hundred degrees to its left, so a wide band between the two is solid when dry but molten when wet. The geotherm stays to the left of both curves, so the mantle is solid everywhere. Three arrows show the three routes to magma: a near-vertical upward arrow crossing the dry solidus at about 55 kilometres depth, a horizontal arrow at 110 kilometres showing the solidus moving leftward past the mantle wedge when water is added, and a short rightward arrow inside the crust crossing a wet granite solidus.](assets/01-03-fig1.svg)

Read the geometry rather than the labels. The geotherm never touches the dry solidus — **that is a solid Earth, drawn.** Every one of the three arrows is a way of forcing an intersection, and they differ in *what moves*: in ① the rock moves, in ② the solidus moves, in ③ the temperature moves. Notice also that the geotherm's closest approach to the solidus is near the bottom of the lithosphere; that pinch point is where the planet does almost all of its melting.

## Worked examples

**Example 1 (mechanical — decompression, and where the ocean crust comes from).** Mantle with potential temperature $T_p = 1300\ ^\circ\text{C}$ upwells beneath a mid-ocean ridge. Take $T_s(z) = 1100 + 4z$ and $T_a(z) = 1300 + 0.4z$, both in °C with $z$ in km. (a) Show the mantle at 100 km is solid, and by how much. (b) How far must it rise to melt? (c) Given a melt productivity of $0.4\ \text{percent per km}$ of ascent above the solidus, predict the thickness of the crust the ridge builds.

**(a)** At $z = 100$:

$$T_s = 1100 + 400 = 1500\ ^\circ\text{C}, \qquad T_a = 1300 + 40 = 1340\ ^\circ\text{C}$$

$$\Delta T = 1500 - 1340 = \mathbf{160\ ^\circ\text{C}} \text{ below the solidus} .$$

Solid, and not marginally so. Note this is at $P = 0.0323 \times 100 = 3.2\ \text{GPa}$.

**(b)** The gap closes at $4 - 0.4 = 3.6\ ^\circ\text{C}$ per km of ascent:

$$\text{ascent needed} = \frac{160}{3.6} = \mathbf{44\ \text{km}}, \qquad z_{\text{melt}} = 100 - 44 = \mathbf{56\ \text{km}} .$$

Or straight from the boxed formula: $z_{\text{melt}} = (1300-1100)/3.6 = 55.6\ \text{km}$. **The rock is about 20 °C cooler when it starts melting than it was when it was solid at 100 km.** It melted by getting colder, because the solidus fell faster than it did.

**(c)** Above 56 km the parcel keeps rising and keeps melting, so melt fraction grows linearly:

$$F(z) = 0.004\,(55.6 - z) \;\Longrightarrow\; F_{\text{top}} = 0.004 \times 55.6 = 0.222, \qquad \bar{F} = \tfrac{1}{2}(0.222) = 0.111 .$$

The melt from a column of height $h = 55.6\ \text{km}$ collects into crust of thickness

$$h_{\text{crust}} = \bar{F}\,h = 0.111 \times 55.6 = \mathbf{6.2\ \text{km}} .$$

**Observed thickness of normal oceanic crust: 6 to 7 km.** A two-line calculation from one number — the mantle's temperature — predicts the thickness of two-thirds of the Earth's surface. Note the scaling that falls out: $h_{\text{crust}} = 0.002\,h^2$, so crustal thickness goes as the *square* of the melting column, and the column is set entirely by $T_p$. Problem 1 uses that.

*(Why the melt gets out at all: basaltic liquid has density about $2700\ \text{kg/m}^3$ against a $3300\ \text{kg/m}^3$ matrix, and at these conditions it wets olivine grain edges, forming an interconnected network at melt fractions as low as one percent. So it drains upward efficiently rather than sitting in place — which is why we sample near-primary basalts at all.)*

**Example 2 (why you'd care — the lever rule, and the distillation of a planet).** Part 1: a simple binary. The diopside–anorthite system has a eutectic at 58 percent diopside, $1274\ ^\circ\text{C}$. A rock of bulk composition 20 percent diopside, 80 percent anorthite is heated to $1274\ ^\circ\text{C}$. What melts, and how much?

Nothing melts below $1274\ ^\circ\text{C}$; at the eutectic the first liquid appears and it has **the eutectic composition**, 58 percent Di, regardless of the source being only 20 percent Di. The residue is pure anorthite (0 percent Di). Lever rule on the Di axis:

$$F = \frac{C_0 - C_S}{C_L - C_S} = \frac{20 - 0}{58 - 0} = \mathbf{0.345}$$

So the rock melts 34.5 percent at constant temperature, until the diopside runs out; only then does the temperature climb again. **The point is the first line: a source with 20 percent Di produces a melt with 58 percent Di — a factor of 2.9 enrichment.** Partial melt is not a scaled-down sample of its source.

Part 2: the same arithmetic on the real planet, using $C_0 = F C_L + (1-F) C_S$ for $\text{SiO}_2$.

*Step 1 — melt the mantle.* Peridotite at 45 percent $\text{SiO}_2$ melts 10 percent to give basalt at 50 percent:

$$C_S = \frac{C_0 - F\,C_L}{1-F} = \frac{45 - 0.10(50)}{0.90} = \frac{40}{0.90} = \mathbf{44.4\ \text{percent}} .$$

The residue is a depleted harzburgite — stripped of Ca, Al, Na and silica, less dense than it started, and it is the buoyant mantle root that lets old continents survive.

*Step 2 — fractionate the basalt.* That basalt crystallizes olivine and pyroxene (about 42 percent $\text{SiO}_2$) and removes them, until 30 percent liquid remains:

$$C_L = \frac{50 - 0.70(42)}{0.30} = \frac{50 - 29.4}{0.30} = \mathbf{68.7\ \text{percent}\ \text{SiO}_2} .$$

**A rhyolite.** Two applications of one conservation law take you from mantle to granite: $45 \to 50 \to 69$.

*Step 3 — count the cost, because this is where the lesson gets honest.* One kilogram of that rhyolite required $1/0.30 = 3.3\ \text{kg}$ of basalt, which required $3.3/0.10 = 33\ \text{kg}$ of mantle — and left behind $2.3\ \text{kg}$ of dense gabbroic cumulate for every kilogram of granite. **We do not see 2.3 kg of cumulate under every kilogram of continent.** That mismatch is a real and open problem, and it is answered two ways: much continental granite is made by mechanism ③ — remelting existing crust rather than distilling fresh mantle — and dense cumulates are thought to founder back into the mantle (delamination, [2.6](02-06-mountain-building.md)). Both answers matter, and the mass budget is what forced the question.

## Watch out

- **You might picture a molten interior.** The mantle transmits S-waves, so it is solid; the asthenosphere's weakness comes from being *close* to its solidus (perhaps a percent of melt), not from being liquid. **Magma is anomalous, local, and hard to make.**
- **You might think decompression melting means heating.** The ascending parcel gets *cooler* the whole way up. It melts because the solidus drops at $4\ ^\circ\text{C/km}$ while the rock cools at only $0.4\ ^\circ\text{C/km}$ — **you can melt rock by cooling it, provided you unload it faster.**
- **You might think deeper means closer to melting.** Both the geotherm and the solidus rise with depth, and the solidus rises faster, so the gap is *smallest* near the base of the lithosphere and grows downward. The 60–100 km band is where the Earth melts.
- **You might read Bowen's series as a list of melting points.** Pure quartz melts at $1713\ ^\circ\text{C}$ — hotter than pure albite at $1118\ ^\circ\text{C}$ — yet quartz crystallizes *last*. Order in a multicomponent melt is set by the liquidus surface of the whole system, not by the pure phases; the granite minimum near $700\ ^\circ\text{C}$ (with water) is a deep low that has no counterpart in any pure mineral.
- **You might expect a small melt to resemble its source.** The opposite: **the smaller the melt fraction, the more extreme the melt.** At low $F$ the liquid sits at the eutectic-like minimum and is maximally enriched in the low-melting, incompatible components — which is why 1-percent melts of the mantle are alkaline and rich in the elements geochemists use as tracers.
- **You might confuse solidus with liquidus.** The solidus is where melting *begins* on heating; the liquidus is where it *finishes*. Nearly all natural magmas are drawn from somewhere between the two, and are erupted as crystal-bearing mush.

## One-liner

> The mantle is solid because the melting point rises with depth ten times faster than the temperature does — so magma is made only by unloading rock, watering it, or injecting heat into it, and because every partial melt is richer in silica than its source, four billion years of this has distilled a granite crust out of a peridotite planet.

## Problems

**P1 (🟢)** A mantle plume rises beneath the mid-Atlantic ridge with potential temperature $T_p = 1450\ ^\circ\text{C}$ rather than the normal $1300\ ^\circ\text{C}$. Using $T_s(z) = 1100 + 4z$, $T_a(z) = T_p + 0.4z$, and a productivity of $0.4$ percent melt per km of ascent: (a) at what depth does melting begin? (b) What crustal thickness results? (c) Iceland's crust is about 20 km thick against the 6–7 km of normal seafloor. Does a 150 °C temperature anomaly account for it, and why is the effect so large?

**P2 (🟡)** Three volcanic provinces, with data:

| | Erupted rock | Water dissolved in melt inclusions | Other observations |
|---|---|---|---|
| **A** | basalt, erupted at 2600 m water depth | 0.2 percent | crust 6 km thick; no earthquakes deeper than 10 km |
| **B** | basaltic andesite and andesite | 4.5 percent | volcano sits 105 km above a plane of earthquakes dipping beneath it |
| **C** | rhyolite, 73 percent $\text{SiO}_2$, erupted 30 Ma | 4 percent | contains zircon crystals dated at 1.7 Ga; a gabbro body sits at 15 km depth beneath |

($\text{Ma}$ = mega-annum, millions of years; $\text{Ga}$ = giga-annum, billions of years.)

(a) Assign a melting mechanism to each, with one line of reasoning. (b) One of the three carries direct evidence of a *second* process beyond melting — which, what evidence, and what process? (c) Arcs worldwide sit 100–120 km above the subducting slab, almost regardless of slab dip or convergence rate. Explain why that distance is so consistent.

**P3 (🔴, optional — bridges to [1.4](01-04-igneous-rocks-and-bodies.md) and [`materials-science` 3.1](../../materials-science/lessons/03-01-phase-diagrams-lever-rule.md))** A mantle source at 45 percent $\text{SiO}_2$ melts 15 percent, producing a melt at 49 percent. (a) Composition of the residue? (b) That melt then fractionates olivine and pyroxene at 41 percent $\text{SiO}_2$ until 25 percent liquid remains — composition of the residual liquid, and what rock is it? (c) How many kilograms of mantle are processed per kilogram of that final liquid? The continental crust is about 0.5 percent of the mantle's mass; comment on whether the continents can plausibly have been made this way.

<details>
<summary>Solutions</summary>

**P1 (a)** Set adiabat equal to solidus:

$$1450 + 0.4z = 1100 + 4z \;\Longrightarrow\; 3.6z = 350 \;\Longrightarrow\; z_{\text{melt}} = \mathbf{97\ \text{km}} .$$

Nearly twice as deep as the 56 km of the normal ridge.

**(b)** Column height $h = 97.2\ \text{km}$:

$$F_{\text{top}} = 0.004 \times 97.2 = 0.389, \qquad \bar{F} = 0.194,$$

$$h_{\text{crust}} = \bar{F}h = 0.194 \times 97.2 = \mathbf{18.9\ \text{km}} .$$

**(c)** Predicted 19 km against an observed 20 km — **yes, a 150 °C anomaly accounts for Iceland**, with no need for anything exotic.

Why so large: from Example 1, $h_{\text{crust}} = \bar{F}h = (0.002)h^2$, and $h \propto (T_p - 1100)$. **Crustal thickness goes as the square of the excess temperature.**

$$\frac{h_{\text{crust}}^{\text{plume}}}{h_{\text{crust}}^{\text{normal}}} = \left(\frac{350}{200}\right)^2 = 3.06 ,$$

and indeed $18.9/6.2 = 3.05$. **A 12 percent rise in absolute temperature triples the melt production**, because a hotter mantle both starts melting deeper *and* melts to a higher degree by the time it arrives — the two effects multiply. This quadratic sensitivity is why ocean-crust thickness is such a sharp thermometer of the mantle, and why Archean oceanic crust (hotter mantle) is thought to have been much thicker.

**P2 (a)**

- **A — decompression.** Low water (0.2 percent is normal dry mantle melting), basalt, 6 km of crust matching Example 1's prediction, and a seismicity cutoff at 10 km showing there is no slab and no deep structure. This is a mid-ocean ridge.
- **B — flux melting.** 4.5 percent dissolved water is enormous and cannot come from dry mantle; the dipping earthquake plane is a subducting slab (a Wadati–Benioff zone, [2.2](02-02-plate-boundaries.md)); 105 km is the classic slab depth beneath an arc. Water released by the dehydrating slab drops the wedge solidus below the wedge's actual temperature.
- **C — heat-transfer melting.** A gabbro body at 15 km is mantle-derived basalt ponded in the crust; its heat drove melting of the surrounding continental crust to make rhyolite.

**(b)** **C, and the evidence is the zircons.** The rock erupted at 30 Ma but contains zircons crystallized at 1.7 Ga — 1.67 billion years before the eruption. Zircon is refractory and survives melting, so these are **inherited grains** from 1.7-Ga basement that the magma melted or digested. That is **assimilation** (or, if the melt is largely crustal, direct anatexis of old crust) — either way, material older than the magma is physically present in it, which no amount of fractional crystallization could produce. (This is the same property that makes zircon the workhorse of [4.2](04-02-radiometric-dating.md); a detrital or inherited zircon dates its *source*, not its host.)

**(c)** Because the arc's position is set by a **pressure–temperature condition inside the slab, not by a distance**. The slab carries water locked in hydrous minerals (serpentine, chlorite, amphibole, lawsonite), and those minerals break down over a fairly narrow pressure interval corresponding to roughly 100–120 km depth. Water is released there, rises into the wedge, and melting follows immediately. So the *depth* to the slab beneath the arc is nearly fixed by mineral physics, and it is the **horizontal** trench-to-arc distance that varies — a steeply dipping slab puts its arc close to the trench, a shallow one puts it far inland. (The trench-to-arc geometry is worked in [2.2](02-02-plate-boundaries.md).)

**P3 (a)** With $C_0 = 45$, $F = 0.15$, $C_L = 49$:

$$C_S = \frac{45 - 0.15(49)}{0.85} = \frac{45 - 7.35}{0.85} = \frac{37.65}{0.85} = \mathbf{44.3\ \text{percent}\ \text{SiO}_2} .$$

Barely changed — **the residue is a poor recorder of melting in silica, which is why petrologists track the trace elements instead.** (The residue's real signature is what is *missing*: Ca, Al, Na, and the incompatible elements.)

**(b)** Now the melt is the source. $C_0 = 49$, solid removed at $C_S = 41$, liquid fraction $F = 0.25$:

$$C_L = \frac{49 - 0.75(41)}{0.25} = \frac{49 - 30.75}{0.25} = \frac{18.25}{0.25} = \mathbf{73\ \text{percent}\ \text{SiO}_2} .$$

**A granite or rhyolite** — 73 percent is squarely the granite field. Note how much more the composition moves in step (b) than in step (a): removing 75 percent of the mass as a low-silica solid is a far more violent filter than extracting 15 percent as a melt.

**(c)** Working backwards:

$$1\ \text{kg liquid} \times \frac{1}{0.25} = 4\ \text{kg basalt}, \qquad 4\ \text{kg} \times \frac{1}{0.15} = \mathbf{27\ \text{kg mantle}} .$$

**Comment.** If the continental crust is 0.5 percent of the mantle's mass, making all of it this way requires processing $27 \times 0.5 = 13.5$ percent of the entire mantle. That is large but not absurd over 4 billion years, and it is broadly consistent with independent geochemical estimates that a substantial fraction of the mantle is melt-depleted.

But two things spoil the tidy story, and both are real:

1. **The cumulate complement is missing.** Each kilogram of granite leaves 3 kg of dense mafic cumulate behind. The lower continental crust is not 75 percent cumulate. The standard resolution is **delamination** — the cumulate is denser than the mantle beneath it and founders back in ([2.6](02-06-mountain-building.md)).
2. **Pure fractionation is the wrong dominant mechanism anyway.** Most granite carries isotopic and inherited-zircon evidence of substantial crustal material (Problem 2C), meaning it was made by **remelting existing crust** — mechanism ③ — recycling the distillate rather than distilling fresh mantle. The mantle's role is to deliver the heat.

**The general lesson: a mass balance rarely gives you the answer, but it reliably tells you when your story is too simple.** The 27:1 ratio is what pushed petrologists toward crustal anatexis and delamination in the first place.

</details>

## Flashback

**From Lesson 1.1 (What a Mineral Is):** Three minerals, by formula:

- forsterite, $\text{Mg}_2\text{SiO}_4$
- tremolite, $\text{Ca}_2\text{Mg}_5\text{Si}_8\text{O}_{22}(\text{OH})_2$
- orthoclase, $\text{KAlSi}_3\text{O}_8$

(a) Compute each one's ratio of tetrahedral cations to oxygen and assign it to a polymerization class. (b) Predict the cleavage of each. (c) Which crystallizes first from a cooling basaltic melt, and what does the ratio in (a) have to do with it?

<details>
<summary>Solution</summary>

**(a)** The ratio to compute is (tetrahedrally coordinated cations) : (oxygen) — and the trap is orthoclase, where **aluminium substitutes for silicon inside the tetrahedra** and must be counted with it.

| Mineral | Tetrahedral cations : O | Ratio | Class |
|---|---|---|---|
| forsterite | $1 : 4$ | $0.25$ | **isolated tetrahedra** (nesosilicate) |
| tremolite | $8 : 22$ | $0.364 = 4:11$ | **double chain** (amphibole) |
| orthoclase | $(1\ \text{Al} + 3\ \text{Si}) : 8 = 4 : 8$ | $0.50$ | **framework** (tectosilicate) |

The ratio is a direct count of sharing: 0.25 means no oxygen is shared, 0.50 means every oxygen is shared between two tetrahedra, and everything in between is partial sharing. (Ignoring the $\text{OH}$ in tremolite is correct — hydroxyl sits at a non-bridging site, not in the tetrahedral network.)

**(b)**

- **Forsterite:** isolated tetrahedra held by $\text{Mg}^{2+}$ ions in every direction, so bond strength is nearly uniform — **no good cleavage**; olivine breaks by conchoidal fracture.
- **Tremolite:** covalent double chains along one axis, weak cation bonds between them, so it cleaves parallel to the chains in **two directions**, at the amphibole angles of about **56 and 124 degrees** — the angles are set by the width of the double chain, and they are what separates amphibole from pyroxene's near-90 degrees in a hand sample.
- **Orthoclase:** a framework has strong bonds in all three directions, so no cleavage is guaranteed by the polymerization alone — but the ordered Al-for-Si substitution creates two planes of relatively weaker bonding, giving feldspar its **two cleavages at about 90 degrees**. (Quartz, a framework with no Al substitution, has no cleavage at all — the contrast is the point.)

**(c)** **Forsterite (olivine) crystallizes first.** From the table above, Bowen's crystallization order runs from lowest to highest tetrahedral:oxygen ratio — isolated, then chains, then sheets, then frameworks.

The mechanism: a basaltic melt is a partly polymerized network. The structures that can precipitate from it early, while it is hot and silica-poor, are the ones needing the least polymerization and the most divalent cations — isolated tetrahedra charge-balanced by $\text{Mg}^{2+}$. As olivine and pyroxene are removed, the residual liquid loses Mg and Fe and gains $\text{SiO}_2$, so more polymerized structures become stable, and the framework silicates come out at the very end.

Orthoclase is therefore last of these three, and tremolite intermediate — which is the same order as their ratios, $0.25 < 0.364 < 0.50$.

</details>

## Connections

- **Backward:** [1.1](01-01-what-a-mineral-is.md)'s polymerization series *is* Bowen's reaction series, and the same Si–O–Si bridges that set cleavage are the ones water breaks to make flux melting work.
- **Forward:** [1.4](01-04-igneous-rocks-and-bodies.md) reads the products — composition from which melting route, texture from cooling rate. [2.2](02-02-plate-boundaries.md) assigns each mechanism to a boundary type; [2.8](02-08-volcanoes-volcanic-hazards.md) turns silica and dissolved water into eruptive style; [3.1](03-01-weathering-soils.md) collects the Goldich reversal; [1.6](01-06-metamorphic-rocks-rock-cycle.md) meets this solidus again from below, where migmatite closes the rock cycle.
- **Sideways:** the lever rule and eutectic melting are [`materials-science` 3.1](../../materials-science/lessons/03-01-phase-diagrams-lever-rule.md) and [3.2](../../materials-science/lessons/03-02-eutectics-microstructure.md), and zone refining — the industrial purification of silicon by repeated partial melting — is the Earth's distillation run deliberately. Freezing-point depression is [`physical-chemistry` 2.4](../../physical-chemistry/lessons/02-04-colligative-properties.md); the slope of a solidus in the pressure–temperature plane is Clausius–Clapeyron, [`thermodynamics-physics` 3.3](../../thermodynamics-physics/lessons/03-03-phase-transitions-clausius-clapeyron.md). The mantle's temperature structure and convection are [`geophysics`](../../geophysics/syllabus.md) 4.1–4.4.
