# Geology · Lesson 3.1: Weathering & Soils

> ⏱ ~15 min · Module 3: Surface Processes · Builds on: [1.6](01-06-metamorphic-rocks-rock-cycle.md), [1.3](01-03-how-the-earth-melts.md), [1.1](01-01-what-a-mineral-is.md) · Unlocks: [3.2](03-02-mass-wasting-slope-stability.md) (mass wasting & slope stability)

## Why this matters

Every mineral in a granite crystallized somewhere between 700 and 1200 °C, at kilobars of pressure, with no free water and no oxygen worth mentioning. Bring that rock to the surface and you have put it in an environment that is wet, cold, oxidizing, acidic and full of things that eat rock for a living. **Weathering is what happens next: rock coming into equilibrium with a world it did not form in.**

That framing does all the work, because it immediately predicts the *order*. The mineral that crystallized at the highest temperature is the one furthest from surface equilibrium, so it should go first — and it does. **The weathering-stability order, discovered empirically by Goldich in 1938, is Bowen's crystallization series read backwards, mineral for mineral.** [1.3](01-03-how-the-earth-melts.md) flagged that this was coming; this is where it lands, and the payoff is that a single structural parameter from [1.1](01-01-what-a-mineral-is.md) now predicts melting order, crystallization order *and* weathering order at once.

Downstream, this lesson is load-bearing three times over. It supplies the sediment that [1.5](01-05-sedimentary-rocks.md) turns into rock; it produces the loose regolith whose failure is the whole subject of [3.2](03-02-mass-wasting-slope-stability.md); and it runs the reaction that has held Earth's climate inside the liquid-water range for four billion years.

## The idea

**Weathering is breakdown in place. Erosion is removal.** Keep those apart — a saprolite profile thirty metres deep is a rock that has been almost completely destroyed chemically and barely moved at all, and a bare glacially scoured outcrop is the opposite. The two processes compete, and which one is faster determines whether a landscape wears a soil or shows its bones.

Breakdown comes in two flavours that are not independent:

- **Mechanical weathering** breaks rock into smaller pieces *without changing its composition*.
- **Chemical weathering** changes the minerals into different minerals, plus ions in solution.

**The single most important thing about mechanical weathering is that it is not really a competing process — it is a catalyst for the chemical one.** Chemical attack happens on surfaces, so the rate is proportional to exposed surface area, and breaking rock up multiplies surface area enormously while leaving volume unchanged. Chemical weathering then works back on the mechanical: dissolving cement and swelling clays pry grains apart. They are a feedback loop, and in most climates the chemical half is doing the real destruction.

**Now the ordering.** Almost every silicate in a granite is thermodynamically unstable at Earth's surface — including quartz, which dissolves too, just absurdly slowly. So the interesting question is never *whether* a mineral is stable but **how fast it goes**, and the rates span five orders of magnitude:

| mineral | mean lifetime of a 1 mm crystal (pH 5, 25 °C) |
|---|---|
| anorthite (Ca-plagioclase) | 112 years |
| forsterite (Mg-olivine) | 2,300 years |
| diopside (pyroxene) | 6,800 years |
| albite (Na-plagioclase) | 80,000 years |
| microcline (K-feldspar) | 921,000 years |
| muscovite | 2.7 million years |
| quartz | 34 million years |

*(Lasaga's classic extrapolation from laboratory dissolution rates. Field rates run one to three orders of magnitude slower — more on why in "Watch out" — but the **ratios** are the point, and they hold.)*

**Quartz outlasts Ca-plagioclase by a factor of $3\times10^{5}$.** That is why a beach is quartz sand: everything else in the parent granite was destroyed first, and what you are standing on is the residue.

**Why that order?** Two reasons, and they reinforce each other.

1. **Distance from formation conditions.** Anorthite crystallizes near 1200 °C; quartz near 700 °C. The higher the formation temperature, the larger the free-energy drop on reaching surface conditions, and the larger the drive to react.
2. **Polymerization — the parameter $b$ from [1.1](01-01-what-a-mineral-is.md).** Let $b$ be the number of oxygens each silica tetrahedron shares with a neighbour. Bridging Si–O–Si bonds are strong and hard for water to break; the metal–oxygen bonds that hold low-$b$ structures together (Mg–O, Fe–O, Ca–O) are weak and hydrolyze readily. Olivine ($b=0$) is held together *entirely* by such bonds. Quartz ($b=4$) has none of them at all.

**And there is one instructive exception**, which is the best evidence that the mechanism is right. K-feldspar is a framework silicate, $b=4$, same as quartz — yet it weathers 37 times faster. The reason is exactly the charge-balance argument from [1.1](01-01-what-a-mineral-is.md): substituting Al³⁺ for Si⁴⁺ in one tetrahedron in four leaves a charge deficit, plugged by a $\text{K}^+$ ion sitting loose in a cavity. **Water strips that ion out, the framework loses its charge balance, and the structure unzips.** Quartz is pure $\text{SiO}_2$ with nothing to strip. The exception is not a failure of the polymerization rule; it is the rule plus one extra term.

## The formal version

### Mechanical weathering multiplies surface area

Take a cube of edge $L$ and cut it into $n$ equal pieces along each edge, giving $n^3$ cubes of edge $L/n$. Total surface area:

$$A = n^{3}\cdot 6\left(\frac{L}{n}\right)^{2} = 6L^{2}n$$

*In words: breaking a block into $n$ pieces per edge multiplies its surface area by exactly $n$, while the volume does not change at all.*

Expressed per unit mass, for grain size $d = L/n$ and density $\rho$, the **specific surface area** is

$$\boxed{\;\mathrm{SSA} = \frac{6}{\rho\, d}\;}$$

For quartz, $\rho = 2650\ \text{kg/m}^3$: a $1\ \text{mm}$ grain gives $\mathrm{SSA} = 2.3\ \text{m}^2/\text{kg}$, and a $1\ \mu\text{m}$ clay particle gives $2260\ \text{m}^2/\text{kg}$ — a thousandfold. **This is why chemical weathering, once it makes clay, accelerates: clay is the reactive surface.** (And the geometric formula *underestimates* sheet silicates badly, because smectite's interlayer surfaces — the weak planes of [1.1](01-01-what-a-mineral-is.md) — are also wetted, pushing real values past $800\ \text{m}^2/\text{g}$.)

**The mechanisms:**

- **Frost wedging.** Water expands about 9 percent on freezing ($\rho$ falls from 1.000 to $0.917\ \text{g/cm}^3$), and confined freezing can theoretically generate 200 MPa against a rock tensile strength of 5–25 MPa. **But the control is the number of times the rock crosses 0 °C with water present, not how cold it gets.** A maritime temperate mountain with 80 freeze–thaw cycles a year destroys rock faster than central Siberia at a steady −40 °C. (The modern refinement: much of the damage is done by *ice segregation*, water drawn along films to a growing lens, most effective in the −3 to −8 °C window rather than at extreme cold.)
- **Salt crystallization**, the same wedging mechanic with evaporating brine — the dominant mechanical process in deserts and on coasts ([3.5](03-05-deserts-wind-coasts.md)).
- **Exfoliation from unloading.** Erosion removes overburden, the confining pressure of [2.4](02-04-how-rock-deforms.md) falls, and the rock expands and cracks into sheeting joints parallel to the surface. Half Dome is a $10^{7}$-year-old pluton peeling because it is no longer buried. This is [2.5](02-05-folds-faults-structures.md)'s joints, produced by [2.6](02-06-mountain-building.md)'s exhumation.
- **Thermal stress**, **root wedging**, **burrowing**.

### Chemical weathering is three reactions

**Dissolution** — the mineral goes straight into solution. Carbonates are the case that matters:

$$\text{CaCO}_3 + \text{CO}_2 + \text{H}_2\text{O} \;\rightleftharpoons\; \text{Ca}^{2+} + 2\,\text{HCO}_3^-$$

*In words: limestone dissolves in carbonic acid, and because the reaction is reversible, it runs backwards wherever $\text{CO}_2$ escapes.* That reversibility is the whole of karst — caves where it goes right, stalactites where it goes left ([3.6](03-06-groundwater-aquifers-karst.md)). Equilibrium machinery is [general-chemistry 3.4](../../general-chemistry/lessons/03-04-chemical-equilibrium-k-le-chatelier.md) and [4.1](../../general-chemistry/lessons/04-01-acids-bases-ph-strength.md).

**Hydrolysis** — acid attacks a silicate, strips its cations, and leaves a clay. **This is the single most important chemical reaction on the Earth's surface.** For Ca-plagioclase:

$$\text{CaAl}_2\text{Si}_2\text{O}_8 + 2\,\text{CO}_2 + 3\,\text{H}_2\text{O} \;\longrightarrow\; \text{Al}_2\text{Si}_2\text{O}_5(\text{OH})_4 + \text{Ca}^{2+} + 2\,\text{HCO}_3^-$$

*In words: feldspar plus acid plus water gives kaolinite clay, a dissolved metal ion, and bicarbonate carried to the sea.* Note what leaves and what stays: **Al is essentially immobile and stays behind in the clay; Ca, Na, K and Mg are soluble and go.** That asymmetry builds every soil profile on Earth.

**Oxidation** — free $\text{O}_2$ attacks $\text{Fe}^{2+}$ in ferromagnesian minerals:

$$2\,\text{Fe}_2\text{SiO}_4 + \text{O}_2 \;\longrightarrow\; 2\,\text{Fe}_2\text{O}_3 + 2\,\text{SiO}_2$$

*In words: olivine rusts.* $\text{Fe}^{3+}$ oxides are nearly insoluble, so the iron stays put as red-brown hematite or yellow-brown goethite. **Every red rock and red soil you have ever seen is this reaction**, and its existence anywhere in the record is evidence of free atmospheric oxygen ([5.2](05-02-earth-history-hadean-proterozoic.md)). The nastier cousin is pyrite oxidation, which manufactures sulfuric acid and produces acid mine drainage ([5.4](05-04-resources-geologic-hazards.md)):

$$4\,\text{FeS}_2 + 15\,\text{O}_2 + 14\,\text{H}_2\text{O} \;\longrightarrow\; 4\,\text{Fe(OH)}_3 + 8\,\text{H}_2\text{SO}_4$$

### The controls, in order of importance

**Climate dominates everything else.** Chemical rates follow Arrhenius ([physical-chemistry 3.4](../../physical-chemistry/lessons/03-04-arrhenius-transition-state-theory.md)):

$$k \propto e^{-E_a/RT}, \qquad \frac{k_2}{k_1} = \exp\left[\frac{E_a}{R}\left(\frac{1}{T_1}-\frac{1}{T_2}\right)\right]$$

With $E_a \approx 60\ \text{kJ/mol}$ for silicate hydrolysis, a rise from 5 °C to 25 °C gives

$$\frac{k_{25}}{k_{5}} = \exp\left[\frac{60{,}000}{8.314}\left(\frac{1}{278.15}-\frac{1}{298.15}\right)\right] = e^{1.74} = 5.7$$

**And water multiplies on top of that**, because a reaction with no solvent and no way to carry the products off does not proceed at all. Rainfall and temperature together are why a tropical profile can be 30 m deep and an Antarctic dry-valley boulder can carry 2-million-year-old striations.

**Biology is the third multiplier, and it is bigger than people expect.** Root and microbial respiration raise soil-air $\text{CO}_2$ to 1–10 percent, against 0.04 percent in the atmosphere. Since

$$[\text{H}^+] = \sqrt{K_1 K_H P_{\text{CO}_2}}\,,$$

and $[\text{H}^+] \propto \sqrt{P_{\text{CO}_2}}$, a hundredfold rise in $P_{\text{CO}_2}$ is exactly one pH unit. Rain equilibrated with air sits at pH 5.6; soil water at 4 percent $\text{CO}_2$ sits at pH 4.6. *In words: **plants make the water attacking the rock ten times more acidic**, before you count the organic acids and chelators they secrete on purpose.*

Then **rock type** (a granite and a limestone side by side make utterly different landscapes), **time**, and **topography** — steep slopes strip the regolith before it can mature, so the deepest weathering profiles sit under flat, ancient, stable surfaces.

### Soils: the profile is a readout

A **soil** is the weathering residue plus organic matter, organized into **horizons** by vertical water flow. Water goes down, so material goes down with it.

| horizon | what it is | what it records |
|---|---|---|
| **O** | organic litter, undecomposed | vegetation and how fast it rots |
| **A** | topsoil: mineral grains plus humus, dark | biological activity |
| **E** | **eluvial** — leached; clay, Fe, Al stripped out; pale | strong downward leaching |
| **B** | **illuvial** — accumulation of what E lost; clay and Fe/Al oxides; often red | how much has moved, and how far |
| **C** | broken, chemically rotted parent rock (saprolite) | the protolith |
| **R** | fresh bedrock | — |

**The presence, thickness and colour of each horizon is a climate measurement**, which is why buried soils (palaeosols) are one of the best palaeoclimate proxies in the rock record ([4.4](04-04-stratigraphy-facies-correlation.md)):

- **Podzol** (cool, wet, conifer): acidic litter releases organic acids that chelate Fe and Al and carry them out of a bleached ash-grey **E** into a rust-coloured **B**. The E horizon *is* the acid.
- **Laterite / oxisol** (hot, wet): leaching so intense that even silica is exported. Bases gone, clay itself broken down, leaving a deep red residue of Fe and Al oxides — hematite and gibbsite. Concentrate the aluminium enough and it is **bauxite**, the world's only aluminium ore ([5.4](05-04-resources-geologic-hazards.md)). **These soils are also nutrient-poor, which is the standing paradox of the rainforest: the ecosystem is lush because almost all the nutrients are held in living biomass and recycled fast, not because the soil is rich** ([evolution-ecology 4.4](../../evolution-ecology/lessons/04-04-ecosystems-energy-nutrients.md)). Clear it and the fertility is gone in a few seasons.
- **Aridisol** (dry): evaporation exceeds rainfall, so net water movement is *upward*, and calcium carbonate precipitates as **caliche** in the B horizon instead of being flushed away ([3.5](03-05-deserts-wind-coasts.md)).

## Picture

![Two panels. The upper panel lists Bowen's crystallization order from olivine at the top down to quartz, beside the Goldich stability order from quartz at the top down to olivine, with lines joining each mineral to itself so the lines cross in a fan and the exact reversal is visible; a column gives the number of shared oxygens per tetrahedron and another gives the weathering product of each mineral. The lower panel shows a temperate podzol and a tropical laterite drawn side by side on the same depth scale from zero to two and a half metres, with the podzol's thin dark O and A horizons, bleached pale E horizon, rust-coloured B horizon, greenish C horizon and grey bedrock, against the laterite's thin humus layer over a very thick deep red oxic horizon that continues past the bottom of the frame.](assets/03-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — why breaking rock is the same as speeding up chemistry).** A cubic block of granite 2 m on a side sits in a joint-riddled outcrop. Frost wedging reduces it to gravel of 20 mm grains, and hydrolysis then converts part of that to $2\ \mu\text{m}$ clay. (a) Compute the surface area at each stage. (b) Nothing about the composition changed in step one — so why does step one matter?

(a) Use $A = 6L^2 n$ with $n = L/d$.

$$\text{block: } A_0 = 6(2)^2 = 24\ \text{m}^2 .$$

$$\text{gravel: } n = \frac{2\ \text{m}}{0.020\ \text{m}} = 100 \;\Longrightarrow\; A_1 = 24 \times 100 = 2{,}400\ \text{m}^2 .$$

$$\text{clay: } n = \frac{2\ \text{m}}{2\times10^{-6}\ \text{m}} = 10^{6} \;\Longrightarrow\; A_2 = 24 \times 10^{6}\ \text{m}^2 = 24\ \text{km}^2 .$$

**Eight cubic metres of rock, and 24 square kilometres of reactive surface** — roughly the area of a small town, folded into a boulder's worth of mud.

(b) Because **chemical weathering is a surface reaction, so its rate is proportional to $A$, not to volume**. The mechanical step changed no chemistry at all and still multiplied the chemical rate by 100. This is also why the two processes run away together: hydrolysis makes clay, clay is fine-grained, fine grains are enormous surface, and the profile accelerates as it deepens. The competition between crack propagation and reaction on the new surface is the geological face of the same nucleation-versus-growth trade-off that governs grain size in [materials-science 3.3](../../materials-science/lessons/03-03-transformations-ttt-heat-treatment.md).

**Example 2 (why you'd care — weathering is the planet's thermostat, and only half of it counts).** (a) How much $\text{CO}_2$ does 1 kg of Ca-plagioclase consume as it weathers? (b) How much of that is *permanently* removed from the atmosphere? (c) Why does weathering limestone remove none at all? (d) Sketch the feedback and give its timescale.

(a) $M(\text{CaAl}_2\text{Si}_2\text{O}_8) = 40.08 + 2(26.98) + 2(28.09) + 8(16.00) = 278.2\ \text{g/mol}$.

$$n = \frac{1000\ \text{g}}{278.2\ \text{g/mol}} = 3.594\ \text{mol}.$$

The hydrolysis reaction above consumes 2 mol $\text{CO}_2$ per mol of anorthite:

$$m_{\text{CO}_2} = 2(3.594)(44.01) = 316\ \text{g} .$$

(b) Only half. The $\text{Ca}^{2+}$ and $\text{HCO}_3^-$ reach the ocean, where organisms precipitate them as carbonate — and that reaction **gives one $\text{CO}_2$ back**:

$$\text{Ca}^{2+} + 2\,\text{HCO}_3^- \longrightarrow \text{CaCO}_3 + \text{CO}_2 + \text{H}_2\text{O}$$

Adding the two gives the net (Urey) reaction:

$$\text{CaAl}_2\text{Si}_2\text{O}_8 + \text{CO}_2 + 2\,\text{H}_2\text{O} \longrightarrow \text{Al}_2\text{Si}_2\text{O}_5(\text{OH})_4 + \text{CaCO}_3$$

$$\text{net sequestered} = 3.594\ \text{mol} \times 44.01 = \mathbf{158\ \text{g CO}_2\ \text{per kg of plagioclase}} .$$

*In words: **silicate weathering is a $\text{CO}_2$ pump because it converts an atmospheric gas into a rock**, and the rock is limestone.*

(c) Because weathering limestone runs $\text{CaCO}_3 + \text{CO}_2 + \text{H}_2\text{O} \to \text{Ca}^{2+} + 2\text{HCO}_3^-$, and re-precipitating that carbonate in the ocean gives back exactly the one $\text{CO}_2$ it took. **Carbonate weathering is a closed loop with zero long-term sink; silicate weathering is not.** The difference is entirely that a silicate had no carbon in it to begin with.

(d) The rate depends on temperature (the $5.7\times$ Arrhenius factor above) and on rainfall, both of which rise with warming. So:

$$\text{warmer} \;\rightarrow\; \text{faster silicate weathering} \;\rightarrow\; \text{more }\text{CO}_2\text{ buried} \;\rightarrow\; \text{cooler}$$

**A negative feedback, and the reason Earth has kept liquid water for four billion years while the Sun brightened by about 30 percent.** Its timescale is set by how long it takes the sink to turn over the ocean–atmosphere carbon reservoir:

$$\tau \sim \frac{4\times10^{4}\ \text{Gt C}}{0.2\ \text{Gt C/yr}} \approx 2\times10^{5}\ \text{yr} .$$

**Which is the honest and uncomfortable point: the thermostat is real, and it is roughly two hundred thousand years slow.** Human emissions run near $10\ \text{Gt C/yr}$ — about fifty times the silicate sink — so on any timescale a person cares about, this feedback does nothing. The dynamics belong to [`climate-science`](../../climate-science/syllabus.md) and the circulation to [`atmospheric-science`](../../atmospheric-science/syllabus.md); the geologic record of it is [5.3](05-03-earth-history-phanerozoic.md).

## Watch out

- **You might think weathering and erosion are two words for the same thing.** Weathering is decomposition *in place*; erosion is transport away. They compete: where erosion wins you get bare rock and thin soil on steep slopes, and where weathering wins you get tens of metres of saprolite under a flat ancient surface. [3.2](03-02-mass-wasting-slope-stability.md) is about what happens when the second case meets gravity.
- **You might think frost wedging needs deep cold.** It needs *crossings* of the freezing point with liquid water available. Freeze–thaw cycle count beats minimum temperature, which is why maritime temperate mountains shatter faster than the deep continental interior.
- **You might read a rising quartz percentage in a soil as quartz accumulating.** Nothing is adding quartz. Quartz is nearly inert while everything around it dissolves and leaves, so its *fraction* rises — **residual enrichment**. Use a conserved component to convert percentages into masses before drawing any conclusion (this is P2).
- **You might think all chemical weathering draws down $\text{CO}_2$.** Only silicate weathering does. Carbonate weathering returns its $\text{CO}_2$ when the carbonate re-precipitates.
- **You might take the mineral-lifetime table as literal field ages.** Laboratory dissolution rates exceed field rates by one to three orders of magnitude, because natural surfaces armour themselves with secondary clay coatings, pore water sits near saturation rather than far from equilibrium, and only part of the grain surface is ever wetted. **The ranking survives; the absolute numbers do not.**
- **You might think a soil that grows a rainforest must be fertile.** Laterites are among the poorest soils on Earth. The nutrients are in the biomass, not the ground.
- **You might treat soil as renewable.** It forms at roughly $0.02$–$0.1\ \text{mm/yr}$ and erodes under conventional tillage at around $1\ \text{mm/yr}$ — a ten- to fiftyfold deficit. On human timescales soil is a mined resource, which is exactly how [5.4](05-04-resources-geologic-hazards.md) treats it.

## One-liner

> Weathering is a mineral running its own formation backwards, so the hotter it crystallized the faster it goes — Goldich is Bowen reversed — and what survives the process is quartz, clay and rust.

## Problems

**P1 (🟢)** A granite block 0.5 m on a side is frost-shattered into 0.5 mm sand grains. (a) Compute the factor by which surface area increases, and the new total area. (b) The block's composition is unchanged. State precisely why a geochemist still cares.

**P2 (🟡 — inference from data)** A soil profile on granite is sampled at three depths and the mineralogy determined by point-counting (values are volume percent):

| | quartz | K-feldspar | plagioclase | biotite | amphibole | clay + Fe oxide |
|---|---|---|---|---|---|---|
| **C horizon** (parent) | 30 | 30 | 25 | 10 | 5 | 0 |
| **B horizon** | 45 | 25 | 12 | 4 | 0 | 14 |
| **A horizon** | 62 | 12 | 2 | 0 | 0 | 24 |

(a) Rank the primary minerals by how completely they have been destroyed, and state whether the ranking matches the Goldich series. (b) Quartz rose from 30 to 62 percent. Did quartz accumulate? Assuming quartz is perfectly conserved, compute what fraction of the original rock mass has been removed from the A horizon. (c) Predict the sediment this hillslope delivers to the nearest river, and name the sedimentary rock it will eventually make.

**P3 (🔴 — bridges to climate)** Two catchments are cut in identical basalt and receive identical rainfall. One has a mean annual temperature of 5 °C, the other 25 °C. (a) Using $E_a = 60\ \text{kJ/mol}$, predict the ratio of chemical weathering rates. (b) The measured ratio is closer to 15. Give two mechanisms the Arrhenius estimate omits, and say which of them you can quantify from this lesson. (c) A geoengineering proposal is to spread crushed basalt on farmland to accelerate $\text{CO}_2$ drawdown. Using the surface-area result and the thermostat calculation, state the one thing this scheme is genuinely exploiting and the one quantity that decides whether it can matter.

<details>
<summary>Solutions</summary>

**P1 (a)** With $L = 0.5\ \text{m}$ and $d = 0.5\ \text{mm} = 5\times10^{-4}\ \text{m}$:

$$n = \frac{L}{d} = \frac{0.5}{5\times10^{-4}} = 1000 .$$

Surface area multiplies by $n$, i.e. **by a factor of 1000**.

$$A_0 = 6(0.5)^2 = 1.5\ \text{m}^2 \;\Longrightarrow\; A_1 = 1.5 \times 1000 = \mathbf{1500\ \text{m}^2}.$$

An eighth of a cubic metre of rock now exposes a third of an acre of surface.

**(b)** Because **chemical weathering is a surface reaction**: its rate scales with area, not volume. A purely physical process that changed no bonds has multiplied the chemical weathering rate by a factor of 1000. Mechanical weathering is best understood as a *catalyst* for chemical weathering rather than an alternative to it — which is why cold, dry, physically shattered environments still weather chemically slowly (no water, low $T$), while warm wet ones with a thick shattered regolith weather fastest of all.

**P2 (a)** Read the disappearance from C to A:

| mineral | C | A | fraction of the original percentage remaining |
|---|---|---|---|
| amphibole | 5 | 0 | gone by the B horizon |
| biotite | 10 | 0 | gone |
| plagioclase | 25 | 2 | 8 percent |
| K-feldspar | 30 | 12 | 40 percent |
| quartz | 30 | 62 | *increased* |

Destruction order, most complete first: **amphibole ≈ biotite > plagioclase > K-feldspar > quartz**.

**This is the Goldich series exactly.** Amphibole ($b = 2.5$) and biotite ($b=3$, and iron-bearing so also oxidizable) are the highest-temperature phases present and go first; plagioclase follows; K-feldspar, a framework, resists much longer; quartz is effectively untouched. The one nuance worth naming is that plagioclase outlasted biotite here even though the pure-mineral table ranks anorthite as the least durable of all — real plagioclase in a granite is sodium-rich (albite, 80,000 years) rather than calcium-rich (anorthite, 112 years), and that 700-fold spread *within* plagioclase is itself the continuous branch of Bowen's series read backwards.

**(b) No — quartz did not accumulate; this is residual enrichment.** Percentages are ratios, and a ratio can rise because the numerator grew *or* because the denominator shrank. Here the denominator shrank.

Convert to masses using quartz as the conserved component. Let $M_0$ be the original mass of a parcel and $M_A$ the mass of what is left of it. Conserving quartz:

$$0.30\,M_0 = 0.62\,M_A \;\Longrightarrow\; \frac{M_A}{M_0} = \frac{0.30}{0.62} = 0.484 .$$

$$\text{mass removed} = 1 - 0.484 = \mathbf{51.6\ \text{percent}} .$$

**More than half the rock has left the hillside in solution or as suspended clay**, and the residue is what remains standing. (This "immobile element" method — usually run on Zr or Ti rather than quartz — is the standard way weathering mass balances are actually computed.)

**(c)** The river receives **quartz sand plus clay, and almost nothing else** — a chemically *mature* sediment, because the unstable minerals were destroyed before they ever reached the channel. The two components separate hydraulically during transport ([3.3](03-03-rivers-landscape-evolution.md)), so the sand deposits as a **well-sorted quartz arenite** and the clay travels on to become **shale** ([1.5](01-05-sedimentary-rocks.md)).

The contrast is the diagnostic: an **arkose** — a sandstone still carrying 25 percent fresh feldspar — cannot have come from a profile like this one. It requires rapid physical erosion in a cold or arid climate, or steep relief, so that feldspar reaches the basin before hydrolysis can finish it. **Sandstone composition is therefore a palaeoclimate and palaeorelief measurement**, which is the whole reason [4.4](04-04-stratigraphy-facies-correlation.md) bothers to classify sandstones.

**P3 (a)** $T_1 = 278.15\ \text{K}$, $T_2 = 298.15\ \text{K}$:

$$\frac{1}{278.15} - \frac{1}{298.15} = 3.5951\times10^{-3} - 3.3540\times10^{-3} = 2.411\times10^{-4}\ \text{K}^{-1}$$

$$\frac{k_2}{k_1} = \exp\left[\frac{60{,}000}{8.314}\times 2.411\times10^{-4}\right] = \exp(7217 \times 2.411\times10^{-4}) = e^{1.740} = \mathbf{5.7} .$$

**(b)** Two of several, both of which make the warm catchment weather faster than Arrhenius alone predicts:

1. **Biological amplification.** Warmth means more vegetation and far more root and microbial respiration, so soil-air $\text{CO}_2$ climbs from perhaps 0.5 percent to 5 percent. **This one is quantifiable from the lesson**: since $[\text{H}^+] \propto \sqrt{P_{\text{CO}_2}}$, a tenfold rise in $P_{\text{CO}_2}$ gives $\sqrt{10} = 3.2$ times the acidity — on its own comparable to the entire Arrhenius effect. Add the organic acids and chelators plants secrete deliberately, and the biological term plausibly dominates.
2. **Longer reaction time and more contact.** The cold catchment is frozen for part of the year, during which the rate is essentially zero, so its *annual* rate is lower than its mean-temperature rate implies. And the warm catchment has a deeper, finer regolith, hence more surface area — the $6/\rho d$ term compounding on the $e^{-E_a/RT}$ term.

*(Runoff also matters: weathering flux is concentration times water flux, so the two catchments were specified as equal-rainfall precisely to remove that variable. In the real world it is usually the largest term of all.)*

**(c) What it genuinely exploits: the $6/\rho d$ surface-area law.** Basalt is rich in Ca- and Mg-silicates, the fastest-weathering common rocks, and grinding it to tens of microns raises the specific surface area by three to four orders of magnitude over outcrop. The chemistry is not exotic — it is Example 2's reaction, just run at a rate the crusher chooses instead of a rate the climate chooses. That is a real lever, and it is the only one in this lesson that acts on a human timescale.

**The quantity that decides whether it matters is throughput, not chemistry.** From Example 2, roughly 160 kg of $\text{CO}_2$ is netted per tonne of Ca-silicate fully weathered — call it 0.1–0.3 t $\text{CO}_2$ per tonne of rock for real basalt. Human emissions are about $37\ \text{Gt CO}_2/\text{yr}$. Offsetting even 10 percent therefore demands

$$\frac{3.7\ \text{Gt CO}_2/\text{yr}}{0.2\ \text{t CO}_2/\text{t rock}} \approx 1.9\times10^{10}\ \text{t rock per year} ,$$

**roughly twenty billion tonnes of rock quarried, crushed and spread annually — around the same order as all human mining of all materials combined**, and the grinding itself costs energy that must be netted out.

So the correct verdict is neither "this is free" nor "this is nonsense." *The chemistry is sound and the kinetics can be bought; the constraint is entirely one of mass and energy logistics.* The scheme's fundamental problem is the one the thermostat calculation already exposed: the natural sink is 0.2 Gt C/yr against 10 Gt C/yr of emissions, and closing a fiftyfold gap by hand means moving geological quantities of rock.

</details>

## Flashback

**From Lesson 1.1 (What a Mineral Is):** A microprobe analysis of a dark pyroxene from a basalt, normalized to 6 oxygens, gives Ca 1.00, Mg 0.72, Fe²⁺ 0.03, Al 0.50, Si 1.75.

(a) Show the analysis is charge-balanced, then show that the aluminium cannot all be sitting in one kind of site, and find the split. (b) Write the coupled substitution that took diopside, $\text{CaMgSi}_2\text{O}_6$, to this composition, verify it conserves charge, and say how many times per formula unit it ran. (c) The same intrusion's olivine carries 1,100 ppm Ni but only 0.4 ppm Rb, while a late K-feldspar vein carries the reverse. Using Goldschmidt's rules with $r(\text{Ni}^{2+}) = 0.69\ \text{Å}$ and $r(\text{Rb}^{+}) = 1.61\ \text{Å}$ against the 1.1 radii $\text{Mg}^{2+}\,0.72$, $\text{Ca}^{2+}\,1.12$, $\text{Na}^{+}\,1.18$, $\text{K}^{+}\,1.51\ \text{Å}$, account for both, and say why Rb is excluded from plagioclase as well.

<details>
<summary>Solution</summary>

**(a)** Cations first:

$$1.00(+2) + 0.72(+2) + 0.03(+2) + 0.50(+3) + 1.75(+4) = 2.00 + 1.44 + 0.06 + 1.50 + 7.00 = +12.00$$

Anions: $6(-2) = -12.00$. **Balanced.**

Now the site count. A pyroxene is a single chain, $b = 2$, so

$$\frac{n_\mathrm{O}}{n_\mathrm{T}} = 4 - \frac{b}{2} = 3 \quad\Longrightarrow\quad n_\mathrm{T} = \frac{6}{3} = 2.00 \ \text{tetrahedral cations per 6 oxygens}.$$

But silicon supplies only 1.75 of them. **The chain is 0.25 tetrahedra short, and the only cation present that can legally sit in a tetrahedral site is aluminium** — the boundary case of the radius-ratio table, $r/R \approx 0.28$ to $0.38$, straddling the 0.414 tetrahedral–octahedral divide. So

$$\text{Al}_{\text{tet}} = 2.00 - 1.75 = 0.25, \qquad \text{Al}_{\text{oct}} = 0.50 - 0.25 = 0.25 .$$

**Half the aluminium is inside the silicate chain and half is outside it, in the same octahedral sites as Mg and Fe.** The check is that the octahedral roster now fills exactly:

$$\text{M1} = \text{Mg}\ 0.72 + \text{Fe}\ 0.03 + \text{Al}_{\text{oct}}\ 0.25 = 1.00, \qquad \text{M2} = \text{Ca}\ 1.00 \;\checkmark$$

Two sites, one cation each, as $\text{CaMgSi}_2\text{O}_6$ demands. **Nothing was fitted — the split fell out of the chain stoichiometry alone, and it landed on integers.**

**(b)** The exchange is the **Tschermak substitution**, and it puts one aluminium into each kind of site at once:

$$\text{Mg}^{2+}_{(\mathrm{M1})} + \text{Si}^{4+}_{(\mathrm{T})} \;\rightleftharpoons\; \text{Al}^{3+}_{(\mathrm{M1})} + \text{Al}^{3+}_{(\mathrm{T})}, \qquad 2 + 4 = 6 = 3 + 3$$

*In words: aluminium is a unit of charge short of silicon and a unit of charge over magnesium, so putting one in each site cancels the books exactly.* Running it $x$ times on diopside gives

$$\text{Ca}(\text{Mg}_{1-x}\text{Al}_x)(\text{Al}_x\text{Si}_{2-x})\text{O}_6 .$$

Match against the analysis: $\text{Si} = 2 - x = 1.75$ gives $x = 0.25$; then $\text{Al}_{\text{total}} = 2x = 0.50\ \checkmark$ and $(\text{Mg}+\text{Fe}) = 1 - x = 0.75\ \checkmark$. **So it ran 0.25 times per formula unit** — one tetrahedron in eight carries Al — and the Fe²⁺ is just ordinary Mg–Fe solid solution riding along (radii 0.78 and 0.72, 8 percent apart, same charge). This is a **calcic augite**.

**The structural point is the one worth carrying:** plagioclase's $\text{Na}^+ + \text{Si}^{4+} \rightleftharpoons \text{Ca}^{2+} + \text{Al}^{3+}$ and the Tschermak exchange are the same trick in two different structures, and **both exist only because aluminium sits on the radius-ratio boundary and can occupy either site.** No other major cation can do that, which is why aluminium — not silicon — is what makes silicate chemistry complicated.

**(c)** Goldschmidt: same charge, radii within about 15 percent.

| candidate | host ion | mismatch | charge | verdict |
|---|---|---|---|---|
| Ni²⁺ → olivine M site | Mg²⁺ 0.72 | $(0.72-0.69)/0.72 = 4.2\ \%$ | both $2+$ | **accepted** |
| Ni²⁺ → feldspar site | Ca²⁺ 1.12 | $(1.12-0.69)/1.12 = 38.4\ \%$ | both $2+$ | rejected on size |
| Rb⁺ → K-feldspar site | K⁺ 1.51 | $(1.61-1.51)/1.51 = 6.6\ \%$ | both $1+$ | **accepted** |
| Rb⁺ → plagioclase site | Na⁺ 1.18 | $(1.61-1.18)/1.18 = 36.4\ \%$ | both $1+$ | rejected on size |

**Nickel is a magnesium impostor and rubidium is a potassium impostor**, and each goes where its double already is. Ni is 4 percent from Mg²⁺ and slots into olivine's octahedral sites without straining anything; it has no home in a feldspar because the feldspar's large-cation cavity is built for ions half again its size. Rb is 6.6 percent from K⁺ and enters K-feldspar freely.

**Rb is excluded from plagioclase twice over.** Against the Na site it is 36 percent too large — worse than the 28 percent Na–K mismatch that already forces alkali feldspar to unmix on cooling. Against the Ca site it is both 44 percent too large *and* one charge unit short, and the coupled substitution that rescues Na–Ca cannot help: the compensating $\text{Si} \to \text{Al}$ swap fixes charge, not size. **Radius and charge are independent gates, and an ion has to clear both.**

*(This is the whole basis of trace-element geochemistry: an element with no site of its own is "incompatible" and stays in the melt until the last drop, which is why rubidium concentrates in late granitic veins and pegmatites while nickel is stripped out into the first olivine to crystallize.)*

</details>

## Connections

- **Backward:** this is [1.1](01-01-what-a-mineral-is.md)'s polymerization parameter $b$ used for the third time — it set cleavage, it set melting order in [1.3](01-03-how-the-earth-melts.md), and it sets weathering rate here, in the opposite direction. [1.6](01-06-metamorphic-rocks-rock-cycle.md)'s rock cycle gets its surface-driven arm from this lesson: solar energy and water, not internal heat. Exfoliation is the unloading of [2.4](02-04-how-rock-deforms.md)'s confining pressure creating [2.5](02-05-folds-faults-structures.md)'s joints during [2.6](02-06-mountain-building.md)'s exhumation.
- **Forward:** [3.2](03-02-mass-wasting-slope-stability.md) takes the regolith produced here and asks when it slides — and the clay minerals made by hydrolysis are what make a slope fail. [3.6](03-06-groundwater-aquifers-karst.md) runs the carbonate dissolution reaction underground to make caves and sinkholes. [1.5](01-05-sedimentary-rocks.md) turns the residue into rock, and P2's maturity argument is the reason sandstone composition is readable. [5.4](05-04-resources-geologic-hazards.md) mines the laterite for bauxite and the soil for food.
- **Sideways:** the reactions are [general-chemistry 4.1](../../general-chemistry/lessons/04-01-acids-bases-ph-strength.md) (acid–base) and [3.4](../../general-chemistry/lessons/03-04-chemical-equilibrium-k-le-chatelier.md) (equilibrium) applied to a mineral surface; the solubility side is [analytical-chemistry 2.3](../../analytical-chemistry/lessons/02-03-solubility-gravimetric-analysis.md); the temperature dependence is [physical-chemistry 3.4](../../physical-chemistry/lessons/03-04-arrhenius-transition-state-theory.md). The silicate thermostat is handed to [`climate-science`](../../climate-science/syllabus.md), and the circulation that decides where rain falls to [`atmospheric-science`](../../atmospheric-science/syllabus.md).
