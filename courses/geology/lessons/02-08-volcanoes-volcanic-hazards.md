# Geology · Lesson 2.8: Volcanoes & Volcanic Hazards

> ⏱ ~15 min · Module 2: Plate Tectonics & the Deforming Crust · Builds on: [2.7](02-07-earthquakes-seismic-hazard.md), [1.3](01-03-how-the-earth-melts.md), [1.4](01-04-igneous-rocks-and-bodies.md) · Unlocks: Module 2's boss problem, and [5.4](05-04-resources-geologic-hazards.md)

## Why this matters

This is the cleanest example in the course of **composition determining behaviour**. Everything a volcano does — whether it oozes or detonates, what shape it builds, how far its products travel, and how it kills people — follows from **two numbers**: how much silica is in the melt, and how much gas is dissolved in it. Both were set long before the eruption, back in [1.3](01-03-how-the-earth-melts.md) when the magma was made and in [1.4](01-04-igneous-rocks-and-bodies.md) when it evolved. Nothing else needs to be memorized.

The second reason is that the hazard ranking is genuinely counterintuitive, and getting it wrong has killed people. **Lava flows, the thing everyone pictures, have killed on the order of a few hundred people in five centuries.** Volcanic mudflows have killed tens of thousands, and the deadliest single volcanic disaster of the twentieth century was produced by an eruption so small it barely registered on the volcanic scale.

## The idea

**Dial one: silica polymerizes the melt.** Back in [1.1](01-01-what-a-mineral-is.md), the whole of mineralogy organized itself around how many oxygens each $\text{SiO}_4$ tetrahedron shares with its neighbours. The same chemistry runs in the liquid. A silica-poor melt is a soup of nearly isolated tetrahedra held apart by $\text{Mg}^{2+}$, $\text{Fe}^{2+}$ and $\text{Ca}^{2+}$; a silica-rich melt is a tangled three-dimensional network of bridging $\text{Si}-\text{O}-\text{Si}$ bonds that has to be broken and remade for the liquid to shear at all. **The resulting viscosity spans about ten orders of magnitude** — basalt is roughly as runny as ketchup, rhyolite is stiffer than glacier ice.

**Dial two: gas comes out on the way up.** Magma carries dissolved volatiles, mostly water with some $\text{CO}_2$ and $\text{SO}_2$. Solubility is set by pressure, and pressure falls as the magma rises. So **ascent itself forces exsolution** — the magma does not need to be heated or disturbed, it only needs to move upward, and it makes its own bubbles as it goes.

**Cross the two dials and you have the entire lesson.** Bubbles nucleate and expand in every rising magma. The only question is whether they can get out.

- **Low viscosity (basalt):** bubbles coalesce into a connected, permeable network and vent. Gas escapes faster than it accumulates, the melt never becomes a pressurized foam, and the eruption is **effusive** — lava flows and fire fountains.
- **High viscosity (rhyolite):** bubbles are trapped in a stiff melt. They keep expanding as pressure drops, the foam's gas fraction climbs, and at roughly 75 to 80 percent gas by volume the melt walls between bubbles tear. The liquid ceases to be a liquid and becomes **an expanding gas carrying shreds of glass**. That transition is called **fragmentation**, and it is the explosion.

**There is a vicious positive feedback hiding here, and it is worth stating explicitly.** Dissolved water does not just sit in the melt — it *breaks* $\text{Si}-\text{O}-\text{Si}$ bridges, exactly the same depolymerization that let water drop the mantle solidus in [1.3](01-03-how-the-earth-melts.md). So **as a magma degasses, the melt it leaves behind gets more viscous, not less.** Exsolution stiffens the very material that was supposed to let the gas out. A rhyolite that starts marginal ends committed.

**And the third thing to hold onto: the hazards rank by mobility, not by heat.** What kills people is whatever travels furthest and fastest from the vent. Lava, the hottest thing in the system, is also the slowest — you can walk away from it. Hot gas-and-ash currents and cold volcanic mudflows both move at highway speeds and go tens of kilometres.

## The formal version

### Viscosity and silica

| Magma | $\text{SiO}_2$ | Eruption $T$ | Viscosity | Style | Landform |
|---|---|---|---|---|---|
| Basalt | ~50% | 1100–1200 °C | $\sim10^{2}\ \text{Pa}\cdot\text{s}$ | effusive | shield, cinder cone, flood basalt |
| Andesite | ~60% | 950–1100 °C | $\sim10^{5}\ \text{Pa}\cdot\text{s}$ | explosive | stratovolcano |
| Dacite | ~65% | 850–1000 °C | $\sim10^{7}\ \text{Pa}\cdot\text{s}$ | very explosive | dome, stratovolcano |
| Rhyolite | ~73% | 750–900 °C | $\sim10^{9}\!-\!10^{12}\ \text{Pa}\cdot\text{s}$ | catastrophic | dome, caldera |

*In words: five percentage points of silica costs you two to three orders of magnitude of viscosity, and the explosive magmas are the **cooler** ones.* (Viscosity here is dynamic viscosity in the ordinary Newtonian sense, [transport-phenomena 1.2](../../transport-phenomena/lessons/01-02-momentum-transport-newton-viscosity.md); silicate melts are non-Newtonian near their glass transition, but the scaling is the point.)

**Why the low-viscosity magma outgasses: a scaling argument.** A bubble of radius $r$ rises through melt of viscosity $\eta$ at the Stokes velocity ([fluid-dynamics 3.3](../../fluid-dynamics/lessons/03-03-stokes-flow.md)),

$$u = \frac{2}{9}\,\frac{\Delta\rho\, g\, r^{2}}{\eta}$$

where $\Delta\rho$ is the melt–gas density difference and $g$ gravity. For a 1 mm bubble with $\Delta\rho = 2700\ \text{kg/m}^3$:

$$\eta = 10^{2}\ \text{Pa}\cdot\text{s}: \quad u = 5.9\times10^{-5}\ \text{m/s} \approx 5\ \text{m/day}$$
$$\eta = 10^{9}\ \text{Pa}\cdot\text{s}: \quad u = 5.9\times10^{-12}\ \text{m/s} \approx 0.2\ \text{mm/year}$$

**A factor of $10^{7}$.** Neither speed is fast enough for isolated bubbles to escape during an ascent lasting hours — what actually saves a basalt is that its bubbles *coalesce* into a permeable network, and coalescence, like every other rearrangement in the melt, is controlled by viscosity. The ratio is what matters.

### Gas solubility and the decompression cascade

Water solubility in silicate melt follows an approximately square-root pressure law. A good working fit for rhyolite:

$$C_{\text{sat}} \approx 0.41\sqrt{P}$$

where $C_{\text{sat}}$ is the dissolved water content in weight percent and $P$ is pressure in $\text{MPa}$.

*In words: a rhyolite can hold about 4 weight percent water at 100 MPa, about 1.3 percent at 10 MPa, and essentially none at the surface.* With a lithostatic gradient of $\rho g \approx 24.5\ \text{MPa/km}$ for $\rho = 2500\ \text{kg/m}^3$, 100 MPa is about 4 km depth.

Two consequences follow, and the second is the eruption:

1. **Exsolution is driven by ascent, not by heating.** A magma saturated at depth begins bubbling the moment it starts up, and keeps bubbling harder the higher it goes.
2. **The gas expands enormously as it exsolves.** At 900 °C and one atmosphere, water vapour has a molar volume $RT/P = 0.0975\ \text{m}^3/\text{mol}$. One cubic metre of rhyolite (2300 kg) carrying 4 weight percent water holds 92 kg of water, or 5100 mol — which at the surface would occupy **about 500 cubic metres**. The magma has to increase in volume by a factor of several hundred, and it has to do it in the last kilometre.

**The fragmentation criterion.** Take the gas volume fraction

$$\phi = \frac{V_{\text{gas}}}{V_{\text{gas}} + V_{\text{melt}}}$$

and fragmentation occurs at roughly $\phi \approx 0.75$–$0.80$, where bubble walls can no longer support the differential pressure. *In words: when the magma is three-quarters gas by volume, the foam tears itself apart and the liquid phase stops being continuous.* Worked Example 1 finds the depth at which this happens, and the answer is startlingly shallow.

### Why the edifice follows

A lava flow is not a Newtonian fluid — it has a **yield strength** $\tau_0$ and stops moving when the gravitational shear stress at its base drops below it. For a flow of thickness $h$ and density $\rho$ on a slope $\theta$:

$$\rho g h \sin\theta = \tau_0 \qquad \Longleftrightarrow \qquad \boxed{\;\sin\theta_{\min} = \frac{\tau_0}{\rho g h}\;}$$

*In words: a flow keeps moving only while it is thick enough, or the ground steep enough, to overcome its own internal strength.* Basalt has $\tau_0 \sim 10^{2}$ Pa and silicic lava $\tau_0 \sim 10^{5}$ Pa — a factor of a thousand — so **basalt spreads across ground that is essentially flat, while rhyolite can barely leave the vent and piles into a dome.** That is P1, and it is why shields are broad and low.

Two other slopes are set elsewhere and should not be confused with this one. **Cinder cones and the upper flanks of stratovolcanoes are built of loose fragmental material, so their slope is the angle of repose, about 30 to 33 degrees** — a granular property, not a rheological one ([3.2](03-02-mass-wasting-slope-stability.md)). And a **caldera** has no constructive slope at all: it is the hole left when a magma chamber is emptied faster than it can be refilled and its roof founders along ring faults.

| Landform | Built by | Diagnostic |
|---|---|---|
| Shield | fluid basalt flows, many of them | very low slopes, huge diameter |
| Cinder cone | basaltic fire fountaining | small, repose-angle slopes, summit crater |
| Stratovolcano | alternating andesitic lava and tephra | steep, layered, sits above a subduction zone |
| Lava dome | rhyolite or dacite too stiff to flow | steep-sided plug, often inside a crater |
| Caldera | collapse after voiding a large chamber | topographic hole larger than any cone |
| Flood basalt / LIP | fissure-fed basalt, $10^{5}$–$10^{6}\ \text{km}^3$ | stacked flat flows over a whole province |

Flood basalts and Large Igneous Provinces are the extreme of the effusive end, and they matter far out of proportion to their frequency: the Siberian Traps and the Deccan Traps coincide with the two largest mass extinctions, through the $\text{SO}_2$ and $\text{CO}_2$ they injected rather than through anything local. The biological side of that story belongs to [evolution-ecology 2.4](../../evolution-ecology/lessons/02-04-macroevolution-history-of-life.md); the geochemical record is [5.3](05-03-earth-history-phanerozoic.md).

### VEI, and how it differs from magnitude

The **Volcanic Explosivity Index** is logarithmic in erupted tephra volume: for $n \ge 2$,

$$V \ge 10^{\,n+4}\ \text{m}^3 \qquad \text{so} \qquad \frac{V_{n}}{V_{m}} = 10^{\,n-m}$$

*In words: each VEI step is exactly a factor of ten in volume, by definition.* VEI 5 is $1\ \text{km}^3$ (Mount St. Helens 1980), VEI 6 is $10\ \text{km}^3$ (Pinatubo 1991), VEI 7 is $100\ \text{km}^3$ (Tambora 1815), VEI 8 is $1000\ \text{km}^3$ (Yellowstone's Huckleberry Ridge).

**Contrast this with [2.7](02-07-earthquakes-seismic-hazard.md)'s magnitude, which is built differently.** A magnitude unit is a factor of 10 in *amplitude* but $10^{1.5} \approx 32$ in *energy*; a VEI unit is a factor of 10 in *volume*, full stop. And crucially, **VEI measures how much came out, not how many died.** Those two numbers are almost uncorrelated, for reasons Worked Example 2 makes concrete.

### Hotspots, the intraplate exception

Almost all volcanism sits on a plate boundary ([2.2](02-02-plate-boundaries.md)). **Hotspots do not**, and they leave a diagnostic signature: a **chain of volcanoes whose ages increase steadily with distance from the one active centre**, because the plate moves over a fixed melting anomaly. Hawaiʻi is the type example — Kīlauea is erupting now, Kauaʻi is 5.1 Ma and lies 519 km away, giving

$$v = \frac{519\ \text{km}}{5.1\ \text{Myr}} = 102\ \text{km/Myr} = 10.2\ \text{cm/yr}$$

which is the fastest plate motion on Earth. The chain bends sharply at about 47 Ma into the Emperor Seamounts.

**The plume hypothesis — narrow columns of hot mantle rising from the core–mantle boundary — is the standard explanation, and it is genuinely contested.** Seismic tomography resolves some deep low-velocity conduits and not others; and paleomagnetic data from the Emperor seamounts show that the Hawaiian hotspot itself drifted southward before 47 Ma, so the famous bend is at least partly hotspot motion rather than a pure change in plate direction. The quantitative imaging is [`geophysics`](../../geophysics/syllabus.md) 4.5's; hold the fixed-hotspot reference frame loosely.

## Picture

![Two panels. The upper panel plots viscosity against silica content with viscosity on a logarithmic axis running from one to a trillion pascal seconds; basalt at 50 percent silica sits near a hundred pascal seconds, andesite at 60 percent near a hundred thousand, dacite at 65 percent higher still, and rhyolite at 73 percent near ten billion, with a dashed horizontal threshold separating an effusive field below, where gas bubbles out, from an explosive field above, where gas cannot escape and the magma fragments. The lower panel draws a shield volcano, a stratovolcano and a caldera in profile at one common true scale with no vertical exaggeration, so the broad low shield dwarfs the small steep stratovolcano, and the caldera appears as a shallow wide hole beneath the dashed outline of the cone that collapsed into it; each profile is annotated with its magma type, viscosity, eruptive style and characteristic hazard, with a twenty kilometre scale bar.](assets/02-08-fig1.svg)

## Worked examples

### Example 1 — Where the explosion is actually manufactured

A rhyolite magma at 900 °C carries 4.0 weight percent dissolved water and has melt density $2300\ \text{kg/m}^3$. Overlying rock has density $2500\ \text{kg/m}^3$. (a) At what depth does it become saturated and start bubbling? (b) Compute the gas volume fraction at 20 MPa and at 10 MPa, and find where it fragments. (c) Contrast a basalt with 0.5 weight percent water.

**(a)** Invert the solubility fit:

$$P_{\text{sat}} = \left(\frac{4.0}{0.41}\right)^{2} = (9.76)^{2} = 95\ \text{MPa}$$

$$z = \frac{P}{\rho g} = \frac{9.5\times10^{7}}{2500 \times 9.81} = \frac{9.5\times10^{7}}{24525} = \mathbf{3.9\ \text{km}}$$

So bubbles start forming about four kilometres down, in what is still a perfectly quiet magma body.

**(b)** At each pressure, the dissolved fraction is $0.41\sqrt{P}$ and the rest has exsolved. Work per cubic metre of original magma (2300 kg), with $RT = 8.314 \times 1173 = 9752\ \text{J/mol}$ and water at $0.018\ \text{kg/mol}$:

**At $P = 20\ \text{MPa}$** (depth 815 m):

$$C_{\text{diss}} = 0.41\sqrt{20} = 1.83\ \%, \qquad C_{\text{ex}} = 4.00 - 1.83 = 2.17\ \%$$
$$m_g = 2300 \times 0.0217 = 49.8\ \text{kg} \;\Rightarrow\; n = \frac{49.8}{0.018} = 2767\ \text{mol}$$
$$V_g = \frac{nRT}{P} = \frac{2767 \times 9752}{2.0\times10^{7}} = 1.35\ \text{m}^3, \qquad V_{\text{melt}} \approx 0.98\ \text{m}^3$$
$$\phi = \frac{1.35}{1.35 + 0.98} = \mathbf{0.58}$$

Not yet — 58 percent gas, still a coherent (if frothy) liquid.

**At $P = 10\ \text{MPa}$** (depth 408 m):

$$C_{\text{diss}} = 0.41\sqrt{10} = 1.30\ \%, \qquad C_{\text{ex}} = 2.70\ \%$$
$$m_g = 62.2\ \text{kg} \;\Rightarrow\; n = 3455\ \text{mol}, \qquad V_g = \frac{3455 \times 9752}{1.0\times10^{7}} = 3.37\ \text{m}^3$$
$$\phi = \frac{3.37}{3.37 + 0.97} = \mathbf{0.78} \;>\; 0.75$$

**Fragmentation, at roughly 400 metres depth.**

**This is the result worth keeping.** A Plinian eruption is not generated in the magma chamber. It is generated in the **last few hundred metres of the conduit**, where the pressure drop is steepest, the exsolved gas expands fastest, and the foam tears. Everything below that is a slow rise; everything above it is a supersonic gas jet carrying ash, exiting the vent at 100 to 300 m/s. The eruption accelerates as it rises because $\text{d}C_{\text{sat}}/\text{d}P \propto P^{-1/2}$ — exsolution is *fastest* where pressure is *lowest*.

**(c)** For a basalt with 0.5 percent water and $\rho = 2700\ \text{kg/m}^3$:

$$P_{\text{sat}} = \left(\frac{0.5}{0.41}\right)^{2} = 1.5\ \text{MPa} \;\Rightarrow\; z = \frac{1.5\times10^{6}}{2700\times9.81} = \mathbf{56\ \text{m}}$$

(The fit is calibrated on rhyolite, so treat this as order-of-magnitude — but the conclusion is robust.) **The basalt carries eight times less gas and does not start exsolving until it is essentially at the surface.** It has no confined conduit length in which to build an over-pressured foam, and at $10^{2}\ \text{Pa}\cdot\text{s}$ its bubbles coalesce and vent anyway. What you get is a **fire fountain**: gas-driven, spectacular, and it throws coarse spatter a few hundred metres rather than pulverized glass 30 km into the stratosphere.

### Example 2 — Ranking the hazards by what actually kills people

Roughly 280,000 people have died from volcanic activity since 1500. The breakdown is not what the mental image suggests. Approximate shares, from historical compilations:

| Hazard | Share | Speed / reach | What it does |
|---|---|---|---|
| **Pyroclastic density currents** | ~1 in 3 of direct deaths | 100–300 km/h, 5–30 km | ground-hugging avalanche of hot gas and ash at 300–700 °C; **no one in the path survives** |
| **Volcanic tsunami** | ~1 in 5 | ocean-crossing | flank collapse or caldera collapse displacing water (Krakatau 1883, ~36,000) |
| **Lahars** | ~1 in 5 | 30–60 km/h, **50–100+ km** | wet concrete of ash and water down river valleys; travel far beyond any "volcanic" zone |
| **Famine and disease afterwards** | comparable to all direct causes | continental | crop failure from ash and aerosol cooling (Tambora 1815: ~10,000 direct, 60,000+ after) |
| **Ash fall** | small but widespread | regional | roof collapse; 10 cm of wet ash is ~120 kg/m², at or beyond a light roof's design load; also aviation and respiratory harm |
| **Volcanic gases** | small, occasionally acute | local to global | $\text{CO}_2$ pooling (Lake Nyos 1986, 1,746 dead); $\text{SO}_2$ and fluorine (Laki 1783 killed a fifth of Iceland) |
| **Lava flows** | **under 1 percent** | walking pace | destroys property; you can leave |

**Now the case that makes the ranking vivid.** On 13 November 1985, **Nevado del Ruiz** in Colombia produced a **VEI 3** eruption — about $0.02\ \text{km}^3$, a trivial event by volcanic standards, three orders of magnitude smaller than Pinatubo. But Ruiz has a summit ice cap, and hot pyroclastic material melted a few percent of it. The meltwater picked up loose ash and swept down the Lagunillas valley.

$$t = \frac{d}{v} = \frac{74\ \text{km}}{30\ \text{km/h}} = 2.47\ \text{h} \approx 2\ \text{h}\ 28\ \text{min}$$

The eruption pulse was at 21:09. The lahar reached the town of Armero, 74 km away, at about 23:30 — within minutes of that estimate. **It killed roughly 23,000 people**, the deadliest volcanic disaster of the twentieth century after Mont Pelée.

**Two and a half hours of lead time existed, and a hazard map published a month earlier had shown Armero inside the lahar path.** The failure was not scientific. This is [2.7](02-07-earthquakes-seismic-hazard.md)'s hazard-versus-risk distinction in its starkest form: the hazard was known and mapped; the risk was realized because exposure and vulnerability were never acted on.

**Compare Pinatubo, 1991.** VEI 6, a thousand times more erupted material by the VEI definition. Seismic swarms, ground deformation and a rising then abruptly falling $\text{SO}_2$ flux were tracked for two months; more than 60,000 people were evacuated; about 800 died, most from roof collapse under ash wetted by a typhoon that arrived the same day. **A thousandfold larger eruption killed thirty times fewer people.**

**Why volcano forecasting works when earthquake prediction does not.** In [2.7](02-07-earthquakes-seismic-hazard.md), short-term earthquake prediction failed because a nucleating rupture is not observably different from the countless micro-ruptures that go nowhere. A volcano is the opposite case: **erupting requires physically moving a cubic kilometre of magma several kilometres through the crust**, and that process cannot be done quietly. It inflates the edifice (tiltmeters, GPS, InSAR), it cracks rock on the way (volcano-tectonic swarms that mature into long-period events and harmonic tremor as fluid begins to resonate in the conduit), and it degasses ($\text{SO}_2$ flux). **The precursors exist because the preparation phase is large, slow and physical.** Forecasting is still probabilistic and false alarms are costly, but unlike earthquakes it is a solved problem in principle.

## Watch out

- **You might think lava is the danger.** It is the least lethal thing a volcano does — under one percent of deaths, and mostly property loss. The exception proves the rule: Nyiragongo's lava is so silica-poor and alkali-rich that it flows at up to 60 km/h, and it has killed. Everywhere else, **lava is a bulldozer, not a weapon.**
- **You might expect dissolved gas to thin the magma.** It does — and that is exactly why **degassing thickens it**. Water breaks $\text{Si}-\text{O}-\text{Si}$ bridges; losing water restores them. The melt left behind after exsolution is stiffer than the melt that started up, which is a positive feedback toward fragmentation.
- **You might assume the explosive magma is the hotter one.** It is the *cooler* one. Rhyolite erupts at 750–900 °C and basalt at 1100–1200 °C. Viscosity, not temperature, decides.
- **You might read VEI as a death toll.** VEI 3 Nevado del Ruiz killed 23,000; VEI 6 Pinatubo killed about 800. **VEI measures erupted volume; deaths are set by what the products interact with** — ice caps, river valleys, and towns.
- **You might treat a quiet volcano as a safe one.** Lahars need no eruption at all: rain remobilizes loose tephra for years afterwards, as Pinatubo's valleys did for a decade. And silicic systems have repose intervals of $10^3$ to $10^5$ years, so "nothing in recorded history" is no evidence of extinction.
- **You might think an explosion needs an external trigger.** It does not. Decompression during ordinary ascent is sufficient, and because $C_{\text{sat}} \propto \sqrt{P}$, the exsolution rate is highest where the pressure is lowest. **The eruption builds its own accelerant on the way up.**

## One-liner

> Silica sets viscosity over ten orders of magnitude and dissolved gas sets the driving pressure — between them they decide whether a volcano oozes or fragments, what shape it builds, and how it kills; and what kills is not the lava but whatever travels furthest down the valley.

## Problems

**P1 (🟢)** A lava flow stops when $\rho g h \sin\theta = \tau_0$. A basalt flow has $\tau_0 = 300\ \text{Pa}$, $\rho = 2700\ \text{kg/m}^3$, and comes to rest 3 m thick. A dacite flow has $\tau_0 = 1.0\times10^{5}\ \text{Pa}$, $\rho = 2400\ \text{kg/m}^3$, and rests 30 m thick. (a) Find the minimum slope each can move on. (b) State what the ratio predicts about edifice shape, and (c) name the *other* physical control that actually sets the 30-degree upper slopes of a stratovolcano.

**P2 (🟡 — inference from field data)** You log a 40 m section on a volcano's flank. From the base upward:

- **(i)** 2 m of well-sorted, angular pumice lapilli, draped evenly over ridges and valleys alike at constant thickness;
- **(ii)** 12 m of massive, unsorted, ungraded deposit with angular blocks up to 1 m in a fine ash matrix; it fills valleys and thins onto ridges, and carbonized wood lies at its base;
- **(iii)** 20 m of unsorted deposit with **rounded** and subrounded clasts in a muddy matrix, confined entirely to the valley floor, with a flat top;
- **(iv)** 6 m of fine ash of constant thickness.

(a) Name the emplacement process for each unit. (b) Which unit records a process nobody in its path survives, and what single word in the description proves it was hot? (c) A town lies 40 km down this valley. Which unit's process can reach it, and roughly how long would it take at 30 km/h?

**P3 (🔴 — bridges to the conduit physics)** A rhyolite at 850 °C contains 4.5 weight percent dissolved water; melt density $2400\ \text{kg/m}^3$, and use $C_{\text{sat}} = 0.41\sqrt{P}$ with $P$ in MPa. (a) At what pressure and depth does exsolution begin? (b) At $P = 8\ \text{MPa}$, compute the exsolved gas volume per cubic metre of original magma and the gas volume fraction; does it fragment? (c) Its neighbour erupts basalt with 0.6 weight percent water. Explain, naming **both** controlling variables, why one produces a 30 km ash column and the other a fire fountain.

<details>
<summary>Solutions</summary>

**P1 (a)** Rearranging, $\sin\theta_{\min} = \tau_0/(\rho g h)$.

Basalt:
$$\sin\theta = \frac{300}{2700 \times 9.81 \times 3} = \frac{300}{79{,}461} = 3.78\times10^{-3} \;\Rightarrow\; \theta = \mathbf{0.22^\circ}$$

Dacite:
$$\sin\theta = \frac{1.0\times10^{5}}{2400 \times 9.81 \times 30} = \frac{1.0\times10^{5}}{706{,}320} = 0.1416 \;\Rightarrow\; \theta = \mathbf{8.1^\circ}$$

A ratio of about **37 in the sine**, from a factor of 333 in yield strength partly offset by the thicker silicic flow.

**(b)** Basalt will run across ground that is very nearly horizontal, so successive flows travel tens of kilometres from the vent and spread the erupted volume over an enormous footprint — **a broad, low shield**. Silicic lava needs an 8-degree slope even at 30 m thick, so it cannot get away from the vent at all and **piles up as a steep dome**. Same gravity, same magma volume, opposite landforms.

**(c)** The **angle of repose** of loose fragmental material, about 30 to 33 degrees ([3.2](03-02-mass-wasting-slope-stability.md)). A stratovolcano's steep upper cone is built of tephra, not lava, so its slope is a granular property. **The rheological calculation above governs flows, not fragments** — the two must not be conflated.

**P2 (a)**

| Unit | Process | Diagnostic in the description |
|---|---|---|
| (i) | **Plinian ash/pumice fall** | well sorted (settling velocity sorts by size) and **mantles topography at constant thickness** — it fell out of the sky |
| (ii) | **Pyroclastic density current** | unsorted, massive, valley-filling and ridge-thinning — it flowed as a ground-hugging gravity current |
| (iii) | **Lahar** | unsorted but **rounded** clasts (abraded in water transport), muddy matrix, valley-confined, flat top |
| (iv) | **Ash fall** from a later phase | constant thickness again |

**The sorting-versus-topography pair is the key.** Fall deposits sort themselves and drape everything; flow deposits are unsorted and go where gravity sends them. Then rounding separates the two flow types: a PDC's clasts are angular because they were airborne in gas, a lahar's are rounded because they rolled in water.

**(b)** Unit **(ii)**, the pyroclastic density current, at 300 to 700 °C and 100+ km/h. The word that proves it was hot is **carbonized** — the wood at its base was charred in place. A lahar, however destructive, deposits *un*charred wood because it is cold.

**(c)** The **lahar**, unit (iii). PDCs are dense currents that typically run out 5 to 30 km and are stopped or deflected by topography; lahars behave like floods and follow valleys for 50 to 100 km or more, gaining volume by bulking up sediment as they go.

$$t = \frac{40\ \text{km}}{30\ \text{km/h}} = 1.33\ \text{h} = \mathbf{80\ \text{minutes}}$$

**Eighty minutes is both the danger and the opportunity** — long enough to evacuate on a warning, which is precisely what Armero did not receive.

**P3 (a)**
$$P_{\text{sat}} = \left(\frac{4.5}{0.41}\right)^{2} = (10.98)^{2} = \mathbf{120\ \text{MPa}}$$
$$z = \frac{1.20\times10^{8}}{2400 \times 9.81} = \frac{1.20\times10^{8}}{23{,}544} = \mathbf{5.1\ \text{km}}$$

**(b)** At $P = 8\ \text{MPa}$ (a depth of $8\times10^{6}/23{,}544 = 340\ \text{m}$):

$$C_{\text{diss}} = 0.41\sqrt{8} = 0.41 \times 2.828 = 1.16\ \%, \qquad C_{\text{ex}} = 4.50 - 1.16 = 3.34\ \%$$
$$m_g = 2400 \times 0.0334 = 80.2\ \text{kg} \;\Rightarrow\; n = \frac{80.2}{0.018} = 4455\ \text{mol}$$

With $T = 1123\ \text{K}$, $RT = 8.314 \times 1123 = 9337\ \text{J/mol}$:

$$V_g = \frac{nRT}{P} = \frac{4455 \times 9337}{8.0\times10^{6}} = \mathbf{5.2\ \text{m}^3}$$

Remaining melt occupies $(2400 - 80)/2400 = 0.97\ \text{m}^3$, so

$$\phi = \frac{5.2}{5.2 + 0.97} = \mathbf{0.84} \;>\; 0.75$$

**Yes — it fragments, well before reaching 340 m depth.** One cubic metre of magma has become six cubic metres of foam, and the expansion from here to the vent is another factor of eighty.

**(c) Both variables, and they compound.**

*Gas.* The basalt carries $0.6/4.5 = 13$ percent as much water, and by the same solubility argument it stays saturated until $P = (0.6/0.41)^2 = 2.1\ \text{MPa}$, about **80 m depth**. So it has essentially no confined conduit in which to build a pressurized foam — exsolution happens at the vent, not 340 m below it.

*Viscosity.* At $\sim10^{2}\ \text{Pa}\cdot\text{s}$ versus $\sim10^{9}$, bubbles in the basalt coalesce into a permeable network on eruption timescales and simply vent. The rhyolite's bubbles are frozen in place and can only expand.

**The compounding is the point.** Less gas *and* an easy escape route means the basalt never approaches $\phi = 0.75$ as a coherent over-pressured foam; it degasses continuously and throws coarse spatter a few hundred metres — a fire fountain. More gas *and* no escape route means the rhyolite fragments at depth, and the resulting gas-and-ash mixture is accelerated up a confined conduit to exit at hundreds of metres per second, with enough momentum to punch a buoyant column into the stratosphere. **And the feedback closes the trap: every bubble the rhyolite loses makes the remaining melt stiffer still.**

</details>

## Flashback

**From Lesson 1.3 (How the Earth Melts):** Peridotite mantle sits at 60 km depth beneath two places at the same temperature, about 1250 °C. The **dry** peridotite solidus at that depth is about 1450 °C; adding roughly 0.3 weight percent water lowers it to about 1050 °C.

(a) Is the dry mantle molten at 1250 °C? (b) Beneath a subduction zone the descending slab dehydrates into the overlying wedge. Is it molten now — and name the mechanism, explaining in one sentence *why* water does this, in terms of Lesson 1.1's structures. (c) Beneath a mid-ocean ridge there is no added water and no added heat, yet melt forms. Name that mechanism and state what changes. Support it with the fact that the peridotite solidus falls about $3.6\ ^\circ\text{C/km}$ as you rise, while a convecting mantle's adiabat falls only about $0.4\ ^\circ\text{C/km}$. (d) Both settings melt an ultramafic source and produce basalt. State the asymmetry of partial melting that makes this possible, and say what happens to the residue.

<details>
<summary>Solution</summary>

**(a) No.** At 1250 °C the mantle is 200 °C *below* the dry solidus of 1450 °C. **This is the fact that makes magma hard to make**: the mantle is hot enough to creep and convect but comfortably solid, everywhere except where one of the three mechanisms intervenes.

**(b) Yes — flux melting.** With the solidus dropped to 1050 °C, the same 1250 °C rock now sits 200 °C *above* it and melts. Nothing was heated; the melting curve moved.

*Why water does it:* water enters the melt as $\text{OH}^-$ and **breaks the bridging $\text{Si}-\text{O}-\text{Si}$ bonds of the silicate network** ([1.1](01-01-what-a-mineral-is.md)), so the liquid state costs far less energy to reach and becomes stable at a much lower temperature.

Note the extent is limited by the water supply, so arc melting is typically a few percent — but that trickle, hydrous and buoyant, is what builds the volcanic arc of [2.2](02-02-plate-boundaries.md) and what makes arc magma gas-rich, which is the whole reason this lesson's arcs explode.

**(c) Decompression melting.** Nothing about the rock changes; **the pressure does**. Rising mantle follows a near-adiabat that cools at only $0.4\ ^\circ\text{C/km}$, while the solidus it is chasing drops at $3.6\ ^\circ\text{C/km}$ — nine times faster. The two curves converge at

$$(3.6 - 0.4)\ ^\circ\text{C/km} = 3.2\ ^\circ\text{C/km}$$

of closing gap, so mantle upwelling beneath a ridge inevitably overtakes its own solidus and melts **with no heat added at all**. That is the single most important melting process on the planet by volume.

**(d) The first melt is always more silica-rich than its source.** The low-melting minerals go first, and they are the more polymerized, more silica-rich ones, so a partial melt of ultramafic peridotite (about 45 percent $\text{SiO}_2$) is a basalt (about 50 percent).

The **residue is complementary**: depleted in silica, aluminium and the incompatible elements, and correspondingly enriched in Mg — peridotite becomes harzburgite and then dunite. It is also **less dense than it was**, which is why old oceanic lithospheric mantle is depleted and buoyant, and why continental keels survive.

**Run that asymmetry for four billion years and it is the reason the mantle is ultramafic and the continents are granitic. The Earth has been distilling itself.**

</details>

## Connections

- **Backward:** [1.1](01-01-what-a-mineral-is.md)'s polymerization series is running here in the liquid state — the same shared-oxygen count that set cleavage and density now sets viscosity. [1.3](01-03-how-the-earth-melts.md) explains why arc magmas are wet and silicic while ridge magmas are dry and basaltic, which is *why* subduction zones get stratovolcanoes and ridges get shields. [1.4](01-04-igneous-rocks-and-bodies.md)'s vesicular and pyroclastic textures are the frozen record of the fragmentation calculation above.
- **Forward:** [3.1](03-01-weathering-soils.md) — volcanic ash weathers fast and makes exceptionally fertile soil, which is why people keep living on stratovolcanoes despite everything in this lesson. [3.2](03-02-mass-wasting-slope-stability.md) treats lahars properly as debris flows and owns the angle of repose used here. [5.4](05-04-resources-geologic-hazards.md) picks up hydrothermal ore deposits, which are the economic afterlife of a magma chamber, and volcanic hazard assessment as a discipline.
- **Sideways:** [2.7](02-07-earthquakes-seismic-hazard.md) supplies hazard-versus-risk and the logarithmic-scale reasoning, and the contrast between working volcano forecasting and failed earthquake prediction is the most instructive pair in the module. The bubble-rise scaling is [fluid-dynamics 3.3](../../fluid-dynamics/lessons/03-03-stokes-flow.md) and viscosity as momentum diffusion is [transport-phenomena 1.2](../../transport-phenomena/lessons/01-02-momentum-transport-newton-viscosity.md). Flood basalts and mass extinctions are [evolution-ecology 2.4](../../evolution-ecology/lessons/02-04-macroevolution-history-of-life.md); mantle plume imaging is [`geophysics`](../../geophysics/syllabus.md) 4.5.
