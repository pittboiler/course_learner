# Geology · Lesson 3.3: Rivers & Landscape Evolution

> ⏱ ~15 min · Module 3: Surface Processes · Builds on: [3.2](03-02-mass-wasting-slope-stability.md), [2.6](02-06-mountain-building.md) · Unlocks: [3.4](03-04-glaciers-ice-ages.md) (glaciers & the ice ages)

## Why this matters

[3.2](03-02-mass-wasting-slope-stability.md) got debris off the hillside and into the valley floor. Something has to take it away, and if nothing did, every valley on Earth would have filled with its own hillslopes long ago. **Rivers occupy a small fraction of the land surface and do most of its erosional work** — they are the conveyor that connects [2.6](02-06-mountain-building.md)'s uplift to [1.5](01-05-sedimentary-rocks.md)'s sedimentary basins, and the shape of nearly every landscape outside the glaciated and arid zones is the shape a river network gave it.

Three results in this lesson are worth the price of admission on their own, and all three are things people get backwards:

1. **A river generally speeds up downstream, even though its gradient flattens.** The mountain torrent is not the fast part.
2. **Clay is harder to erode than sand.** The finest sediment on Earth requires the *strongest* current to lift it — and once lifted, essentially never settles. This is the most counterintuitive result in fluvial geomorphology and it has a clean two-part physical explanation.
3. **A "hundred-year flood" is not rare on a human timescale.** Over a thirty-year mortgage the probability is 26 percent, and over the life of the house it is better than even.

## The idea

**A river is a machine that converts potential energy into sediment transport, and it is very good at it.** Water falling through a height does work; some of that work goes into friction and heat, and the rest goes into picking rock up and moving it. Everything in this lesson is bookkeeping on that budget.

**Discharge is the master variable.** For a channel of cross-sectional area $A$ and mean velocity $v$,

$$Q = A v$$

with $Q$ in cubic metres per second. This is just [continuity](../../fluid-dynamics/lessons/01-03-continuity-equation.md): water is incompressible, so if $Q$ is fixed and the channel narrows, $v$ must rise. **A gorge is fast because it is narrow, not because it is steep.**

**The downstream paradox.** Head up a river to its source and the gradient gets steeper — often by a factor of thirty or more. Everyone expects the headwaters to be the fast water; the boulders and the noise reinforce it. But measure it and **mean velocity typically stays flat or *increases* downstream.**

The reason is that gradient is only one of three terms. Open-channel velocity follows the Manning relation,

$$v = \frac{1}{n}\,R^{2/3}\,S^{1/2}, \qquad R = \frac{A}{P}$$

where $S$ is the channel slope (dimensionless), $n$ is Manning's roughness coefficient, $P$ is the **wetted perimeter** — the length of channel boundary in contact with the water — and $R$ is the **hydraulic radius**, the ratio of flow area to the boundary it must rub against.

*In words: velocity goes up with slope, up with the flow's bulk relative to its rubbing surface, and down with roughness.*

**$R$ is the term that wins.** A headwater stream 8 m wide and 0.5 m deep has $R \approx 0.44\ \text{m}$; a trunk river 80 m wide and 4 m deep has $R \approx 3.6\ \text{m}$ — eight times more water per unit of drag. And the bed changes too: a boulder-choked mountain channel has $n \approx 0.055$, a sand-bedded lowland river $n \approx 0.028$. **Gradient falls, but efficiency rises faster.** Example 1 does the arithmetic and shows exactly how the three factors trade off.

**Competence and capacity are different quantities and the distinction is the whole lesson.**

- **Competence** is the *largest particle* a flow can move. It depends on velocity, and it depends on it steeply.
- **Capacity** is the *total mass* a flow can carry. It depends mostly on discharge.

**A flow can have enormous capacity and negligible competence.** The lower Mississippi carries hundreds of millions of tonnes of silt and clay a year and cannot budge a cobble. A flash flood in a desert wash carries a trivial total tonnage and rolls car-sized boulders. Confusing the two is why people are surprised that "muddy" does not mean "powerful."

**Three transport modes**, in increasing order of how much the bed cares: **bed load** (rolling, sliding, and hopping grains, in contact with the bed most of the time — this is the fraction that does the abrading), **suspended load** (held aloft by turbulence, usually the bulk of the mass), and **dissolved load** (ions in solution, invisible, and the direct product of [3.1](03-01-weathering-soils.md)'s hydrolysis and dissolution reactions).

### The clay anomaly

Now the surprise. Plot the velocity needed to *erode* a grain against grain size, and you do not get a line — you get a **U**, with the minimum at fine sand, around $0.2$–$0.5\ \text{mm}$, at roughly $20\ \text{cm/s}$. Coarser than that, you need more velocity, which everyone expects. **Finer than that, you also need more velocity** — and by the time you reach clay, you need something like $100$–$200\ \text{cm/s}$, five to ten times what it takes to lift a sand grain that is a thousand times heavier.

**Two separate mechanisms do this, and both matter.**

**(1) Cohesion.** Clay is not just small quartz. It is the sheet-silicate product of [3.1](03-01-weathering-soils.md)'s hydrolysis — platy, charged, with an enormous surface area per unit mass ([1.1](01-01-what-a-mineral-is.md)'s sheet structures are exactly why). Electrostatic and van der Waals attraction between platelets glues the bed together. Scaling settles the argument: a grain's submerged weight goes as $d^3$, while the cohesive force holding it to its neighbours goes roughly as $d$. So

$$\frac{\text{cohesion}}{\text{weight}} \ \propto\ \frac{1}{d^{2}}$$

*In words: shrink the grain by a factor of 200 — sand to clay — and cohesion becomes about $4\times10^{4}$ times more important relative to gravity.* Cohesion is irrelevant for sand and overwhelming for clay.

**(2) The grain hides inside the viscous sublayer.** River flow is turbulent, but a thin layer right at the bed is not: within a few tens of microns of the boundary, viscosity dominates and the eddies do not reach ([boundary layers](../../fluid-dynamics/lessons/03-04-boundary-layers.md)). Its thickness is

$$\delta_v \approx \frac{5\nu}{u_*}, \qquad u_* = \sqrt{\tau_0/\rho} = \sqrt{gh S}$$

where $\nu$ is kinematic viscosity ($10^{-6}\ \text{m}^2\text{/s}$ for water), $u_*$ is the **shear velocity**, $\tau_0$ the bed shear stress, $\rho$ the water density, $h$ the flow depth and $g$ gravity. For an ordinary river ($h = 2\ \text{m}$, $S = 0.0008$) this gives $\delta_v \approx 40\ \mu\text{m}$ — worked in Example 2.

**A $0.4\ \text{mm}$ sand grain sticks ten sublayer-thicknesses up into the turbulence and gets hammered. A $2\ \mu\text{m}$ clay platelet lies buried twenty deep inside the smooth layer and never feels an eddy at all.** The bed is *hydraulically smooth*, and a smooth bed is a bed the flow cannot grip.

**And the other half of the anomaly: once up, clay stays up.** The velocity below which a grain settles out is a completely different curve, far lower, and for clay it is off the bottom of any reasonable plot. Example 2 computes it: a clay platelet falls at about $3.6\ \mu\text{m/s}$, so in a 2 m deep river it needs six days to reach the bed — during which the current has carried it 560 km. **Hard to pick up; nearly impossible to put down.** That asymmetry is why estuaries and deep-sea basins are floored with mud sourced from continents thousands of kilometres away, and why a reservoir traps sand within metres of its inlet while the clay sails straight through.

### Channels are products, not categories

**Meanders are not a river being lazy; they are what a river with erodible banks and a modest sediment load does.** The mechanism is secondary circulation. Water rounding a bend has inertia, so the surface piles slightly higher on the outside; the resulting pressure gradient drives near-bed water *inward*, and the flow becomes a corkscrew — **helical flow**. The consequences follow immediately:

- Fastest water and deepest scour hug the **outer bank**, so it erodes: the **cut bank**.
- Near-bed flow carries the coarse load **inward**, where it drops: the **point bar**, a wedge of sorted, cross-bedded sand ([1.5](01-05-sedimentary-rocks.md) — this is where a great deal of the world's cross-bedding comes from).
- Erosion and deposition are opposite and paired, so **the channel migrates sideways at roughly constant width**, sweeping a broad floodplain out of the valley floor.
- Bends grow until two loops meet, and the river takes the short cut: a **cutoff**, leaving an abandoned **oxbow lake**.

**Sinuosity** — channel length divided by valley length — quantifies it; above about 1.5 a river is conventionally called meandering.

**Braided channels** are the other end. Give a river more coarse load than it can move, highly variable discharge, and weak non-cohesive banks (glacial outwash is the type case, [3.4](03-04-glaciers-ice-ages.md)), and it splits around its own deposited bars into a shifting web of shallow threads. **Braiding is a symptom of overload, not of steepness.**

### Base level, the graded profile, and how tectonics gets recorded

**Base level** is the lowest elevation to which a river can erode — sea level for most rivers, a lake or a resistant sill for others. A river adjusts its long profile toward a **graded** state: a smooth **concave-up** curve, steep in the headwaters and nearly flat at the mouth, on which transport just balances supply.

**Now perturb it.** Drop base level — by tectonic uplift ([2.6](02-06-mountain-building.md)), by a sea-level fall, by a dam removal — and the river at the mouth is suddenly too steep. It incises. The oversteepened reach, a **knickpoint**, is not fixed in place: **it migrates upstream**, working its way headward as a wave of incision.

$$\boxed{\ \text{A knickpoint is a message from base level, travelling upstream.}\ }$$

Niagara Falls is the textbook case: it has retreated about $11\ \text{km}$ in roughly $12{,}300$ years since the ice left, a mean rate near $0.9\ \text{m/yr}$. Behind the retreating knickpoint the river cuts down into its own floodplain, abandoning the old surface as a **terrace**. **Paired terraces at matching heights on both banks record an episode of incision**, and a flight of them records a sequence — which is how a landscape stores the history of uplift or of climate-driven discharge change. **This is the bridge: 2.6 raised the rock, and the terrace staircase is the receipt.**

### Drainage networks read the bedrock

The *plan view* of a stream network is a map of what it is flowing over — a direct and genuinely useful application of [2.5](02-05-folds-faults-structures.md):

| Pattern | Looks like | What it tells you |
|---|---|---|
| **Dendritic** | tree branches, random angles | uniform, flat-lying, homogeneous rock — no structural control |
| **Trellis** | long parallel trunks, short right-angle tributaries | tilted or folded alternating resistant and weak beds |
| **Radial** | spokes off a high point | a dome or a volcanic cone |
| **Rectangular** | right-angle bends in the trunk itself | flow guided by two joint or fault sets |

Two further readings are worth having. A **superposed** stream was let down onto a structure from a cover that has since been stripped, and so ignores it; an **antecedent** stream was already there when the structure rose and sawed through it as it grew. Both cut across ridges instead of going round, and telling them apart requires the stratigraphy. And **stream capture** — one network eroding headward across a divide and stealing another's headwaters — leaves a beheaded valley far too large for the trickle now in it, a **wind gap**, and an abrupt elbow of capture.

## The formal version

**Bed shear stress**, the force per unit bed area the flow exerts, for steady uniform flow of depth $h$ on slope $S$:

$$\tau_0 = \rho g h S$$

*In words: the downslope weight of the water column, spread over the bed.*

**Entrainment: the Shields criterion.** A grain of diameter $d$ and density $\rho_s$ moves when the dimensionless shear stress exceeds a critical value:

$$\tau^{*} = \frac{\tau_0}{(\rho_s-\rho)\,g\,d} \ \ge\ \tau^{*}_{c} \approx 0.045\text{–}0.06 \quad \text{(coarse grains)}$$

*In words: entrainment is a contest between the flow's grip and the grain's submerged weight.* Rearranged, $\tau_{c} \propto d$, which gives $u_c \propto \sqrt{d}$ — **the rising right-hand limb of the diagram below.** The criterion holds only where grains are large enough to protrude into the turbulence and cohesionless enough to be independent; **the left-hand limb is exactly where both assumptions fail.**

**Settling: Stokes' law**, for a sphere at grain Reynolds number well below 1 ([Stokes flow](../../fluid-dynamics/lessons/03-03-stokes-flow.md)):

$$w_s = \frac{(\rho_s - \rho)\,g\,d^{2}}{18\mu}$$

with $\mu$ the dynamic viscosity ($10^{-3}\ \text{Pa}\cdot\text{s}$ for water). *In words: settling velocity goes as the square of grain size — so a tenfold size reduction slows settling a hundredfold.* Above about $0.1\ \text{mm}$ the wake goes turbulent, Stokes over-predicts, and $w_s \to \sqrt{4(s-1)gd/3C_D}$ instead, i.e. $w_s \propto \sqrt{d}$ ([Reynolds number](../../fluid-dynamics/lessons/03-01-reynolds-number.md)).

**Flood recurrence.** If a discharge is exceeded on average once every $T$ years, the annual exceedance probability is $p = 1/T$, and assuming independent years,

$$\boxed{\ P(\text{at least one exceedance in } n \text{ years}) = 1 - \left(1 - \tfrac{1}{T}\right)^{n}\ }$$

*In words: the recurrence interval is a long-run average, not a schedule.* $T$ is the mean of a geometric waiting time ([prob-stat-refresher 2.2](../../prob-stat-refresher/lessons/02-02-discrete-distributions.md)), and the geometric distribution's mode is **one year** — the single most likely wait for the next hundred-year flood is next year.

## Picture

![Panel a plots flow velocity in centimetres per second against grain diameter in millimetres, both on logarithmic axes, with Wentworth grain classes marked below. The erosion curve is U-shaped with its minimum near fine sand at about twenty centimetres per second, rising to the right for gravel and rising much more steeply to the left into silt and clay, where over a hundred centimetres per second is needed. A separate settling curve lies far below and runs off the bottom of the plot in the clay range, dividing the field into erosion above, transport between and deposition below. Panel b shows a meandering channel in map view with cut banks on the outer bends, point bars on the inner bends and a cut-off oxbow loop, a cross-section inset through one bend showing helical flow with surface water moving toward the cut bank and bed water toward the point bar, and beneath it a concave-up long profile with a knickpoint stepping down from the older graded profile and a pair of matching terraces left behind by incision.](assets/03-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — where the downstream paradox actually comes from).** Compare two reaches of one river.

| | width | depth | slope $S$ | roughness $n$ |
|---|---|---|---|---|
| Headwater (boulder bed) | $8\ \text{m}$ | $0.5\ \text{m}$ | $0.010$ | $0.055$ |
| Trunk (sand bed) | $80\ \text{m}$ | $4.0\ \text{m}$ | $0.0003$ | $0.028$ |

(a) Find the hydraulic radius, velocity and discharge in each. (b) Decompose the velocity change into its three causes.

**(a) Headwater.** $A = 8 \times 0.5 = 4.0\ \text{m}^2$; wetted perimeter $P = 8 + 2(0.5) = 9.0\ \text{m}$;

$$R = \frac{4.0}{9.0} = 0.444\ \text{m}, \qquad R^{2/3} = 0.582, \qquad S^{1/2} = 0.100$$

$$v = \frac{1}{0.055}(0.582)(0.100) = \mathbf{1.06\ \text{m/s}}, \qquad Q = 4.0 \times 1.06 = \mathbf{4.2\ \text{m}^3\text{/s}}$$

**Trunk.** $A = 320\ \text{m}^2$; $P = 80 + 8 = 88\ \text{m}$;

$$R = \frac{320}{88} = 3.64\ \text{m}, \qquad R^{2/3} = 2.365, \qquad S^{1/2} = 0.01732$$

$$v = \frac{1}{0.028}(2.365)(0.01732) = \mathbf{1.46\ \text{m/s}}, \qquad Q = 320 \times 1.46 = \mathbf{468\ \text{m}^3\text{/s}}$$

**The gradient fell by a factor of 33 and the river got 38 percent faster.**

**(b)** Take the ratio term by term:

| Factor | Ratio (trunk ÷ headwater) | Effect on $v$ |
|---|---|---|
| Slope, $S^{1/2}$ | $0.01732/0.100 = 0.173$ | $\times\,0.17$ — costs a factor of **5.8** |
| Hydraulic radius, $R^{2/3}$ | $2.365/0.582 = 4.06$ | $\times\,4.06$ |
| Smoothness, $1/n$ | $0.055/0.028 = 1.96$ | $\times\,1.96$ |
| **Net** | $0.173 \times 4.06 \times 1.96 = 1.38$ | **38 percent faster** |

**The steepness penalty is real and large — and efficiency beats it twice over.** *Check:* $1.46/1.06 = 1.38$ ✓.

**Why this matters geologically:** the headwaters are erosional not because the water is fast but because it is *steep and rough* — high bed shear stress on a coarse, poorly armoured bed. $\tau_0 = \rho g h S$ gives $1000(9.81)(0.5)(0.010) = 49\ \text{Pa}$ upstream against $1000(9.81)(4)(0.0003) = 11.8\ \text{Pa}$ downstream. **The mountain reach applies four times the bed stress at three-quarters the velocity.** Shear stress, not speed, is what erodes.

**Example 2 (why you'd care — the clay anomaly, in numbers).** A river flows $h = 2.0\ \text{m}$ deep on a slope $S = 0.0008$. Take $\rho = 1000\ \text{kg/m}^3$, $\rho_s = 2650\ \text{kg/m}^3$, $\nu = 10^{-6}\ \text{m}^2\text{/s}$, $\mu = 10^{-3}\ \text{Pa}\cdot\text{s}$.

(a) Find the bed shear stress, shear velocity and viscous sublayer thickness. (b) Compare a $0.4\ \text{mm}$ sand grain with a $2\ \mu\text{m}$ clay platelet. (c) Compute how far each travels before it can settle 2 m.

**(a)**

$$\tau_0 = \rho g h S = 1000(9.81)(2.0)(0.0008) = \mathbf{15.7\ \text{Pa}}$$

$$u_* = \sqrt{\tau_0/\rho} = \sqrt{0.0157} = \mathbf{0.125\ \text{m/s}}$$

$$\delta_v \approx \frac{5\nu}{u_*} = \frac{5\times10^{-6}}{0.125} = 4.0\times10^{-5}\ \text{m} = \mathbf{40\ \mu\text{m}}$$

**(b)** The relevant comparison is the **grain Reynolds number** $\mathrm{Re}_* = u_* d/\nu$, which asks whether the grain pokes out of that layer:

| | $d$ | $d/\delta_v$ | $\mathrm{Re}_*$ | Bed condition |
|---|---|---|---|---|
| Medium sand | $400\ \mu\text{m}$ | $\times\,10$ **above** | $50$ | hydraulically **rough** — full turbulent drag |
| Clay platelet | $2\ \mu\text{m}$ | $\times\,20$ **below** | $0.25$ | hydraulically **smooth** — no eddy ever touches it |

Add cohesion. Sand-to-clay is a factor of 200 in $d$, so by the $1/d^{2}$ scaling the cohesive-to-gravitational force ratio rises by $200^2 = 4\times10^{4}$. **Two independent effects, each worth orders of magnitude, both pointing the same way: the clay bed is smooth *and* glued.** That is the left limb of the diagram, and it is why a stream running through glacial clay can be crystal clear while the same stream 200 m downstream in sand runs turbid.

**(c) Settling.** For clay, Stokes applies:

$$w_s = \frac{(2650-1000)(9.81)(2\times10^{-6})^{2}}{18(10^{-3})} = \frac{(16186)(4\times10^{-12})}{0.018} = 3.6\times10^{-6}\ \text{m/s} = \mathbf{3.6\ \mu\text{m/s}}$$

*(Check: $\mathrm{Re} = w_s d/\nu = 7\times10^{-6} \ll 1$ ✓ Stokes is valid.)* Time to fall 2 m:

$$t = \frac{2.0}{3.6\times10^{-6}} = 5.6\times10^{5}\ \text{s} = \mathbf{6.4\ \text{days}}$$

At a modest $1\ \text{m/s}$, the platelet is carried $5.6\times10^{5}\ \text{m} = \mathbf{560\ \text{km}}$ before it can possibly reach the bed — and any turbulence at all resets the clock. Sand, by contrast, settles at about $5\ \text{cm/s}$ (Stokes over-predicts here since $\mathrm{Re} \approx 58$), so it falls 2 m in **40 s** and travels **40 m**.

$$\text{transport distance ratio} \approx \frac{560{,}000\ \text{m}}{40\ \text{m}} \approx 1.4\times10^{4}$$

**Four orders of magnitude, from one factor of 200 in grain size.** This single number explains the architecture of the sedimentary world: gravel stays in the mountains, sand builds the point bars and the delta front, and mud is exported to the shelf and the abyss. It is also why reservoirs fill with sand at the head and pass their clay downstream, why turbid rivers stay turbid for hundreds of kilometres, and why [1.5](01-05-sedimentary-rocks.md)'s shales are basin-centre rocks.

## Watch out

- **You might think finer sediment is always easier to erode.** Below about $0.2\ \text{mm}$ the trend reverses: cohesion glues the platelets together and the viscous sublayer hides them from the turbulence. **Fine sand is the easiest grain on Earth to move**, not clay.
- **You might think a river slows down as the country flattens.** It usually speeds up. Slope falls, but hydraulic radius and smoothness rise faster. If you want to know where erosion is happening, look at $\tau_0 = \rho g h S$, not at velocity.
- **You might conflate competence with capacity.** A muddy river with vast total load may be unable to move a pebble; a clear flash flood may roll boulders. Competence tracks velocity and shear stress; capacity tracks discharge.
- **You might read a "hundred-year flood" as a schedule.** It is a 1 percent annual probability. Two in consecutive years is unremarkable, and 26 percent of thirty-year periods contain one. Worse, the estimate assumes **stationarity** — that the statistics do not change — which urbanisation and a changing climate both break.
- **You might treat a waterfall as evidence of a fault.** Sometimes; often it is a **knickpoint** migrating headward from a base-level fall that happened somewhere else, thousands of years ago and many kilometres downstream.
- **You might read braiding as "steep."** Braiding signals **sediment overload** plus erodible banks and variable discharge. Some braided reaches are gentler than nearby meandering ones.
- **You might expect a meandering river to be geometrically stable.** The channel migrates continuously; only its *width* is roughly steady. A property boundary set on a meander bend is a boundary that moves.

## One-liner

> A river runs faster where the land is flatter, finds fine sand easier to lift than clay, and sends every change in base level upstream as a knickpoint — so the landscape is a record of erosion done at the bed, not of water going fast.

## Problems

**P1 (🟢)** A river reach is $25\ \text{m}$ wide, $1.6\ \text{m}$ deep, with mean velocity $0.80\ \text{m/s}$. Downstream it enters a bedrock gorge $8.0\ \text{m}$ wide and $2.0\ \text{m}$ deep. (a) Find the discharge and the gorge velocity. (b) The gorge bed is bare cobbles; the open reach has a sand bed. Using the diagram, explain both beds.

**P2 (🟡, inference from data)** An irrigation canal is designed for a mean velocity of $60\ \text{cm/s}$. Reach A is cut through well-sorted medium sand ($0.4\ \text{mm}$); reach B through stiff silty clay ($0.003\ \text{mm}$). In service, **reach A scours badly and reach B holds its shape**, but after storms the water leaving reach B is muddy and stays muddy through the settling basin at the end.

(a) Account for the contrast between A and B from the diagram. (b) The engineer proposes armouring reach A with gravel. What is the minimum grain size needed? (c) The settling basin is $2\ \text{m}$ deep. How long must water be held for $5\ \mu\text{m}$ silt to reach the bottom? Comment on the design.

**P3 (🔴, bridges to prob-stat-refresher 2.2 and to hazard planning)** A gauge with 60 years of record puts the 100-year flood at $1{,}200\ \text{m}^3\text{/s}$; the channel overtops at $700\ \text{m}^3\text{/s}$, a 12-year event.

(a) Probability of at least one 100-year flood during a 30-year mortgage. (b) Over a 75-year building life. (c) Probability of at least one overtopping in any 5-year window. (d) Upstream development raises impervious cover until the old 100-year discharge recurs every 40 years. Recompute (a), say what this does to the mapped 100-year floodplain, and name one thing that is unsound about estimating a 100-year event from a 60-year record.

<details>
<summary>Solutions</summary>

**P1 (a)**

$$Q = A v = (25 \times 1.6)(0.80) = 40 \times 0.80 = \mathbf{32\ \text{m}^3\text{/s}}$$

Continuity fixes the gorge: $A_g = 8.0 \times 2.0 = 16\ \text{m}^2$, so

$$v_g = \frac{Q}{A_g} = \frac{32}{16} = \mathbf{2.0\ \text{m/s}} = 200\ \text{cm/s}$$

**The gorge is 2.5 times faster purely because it is 2.5 times smaller in cross-section.**

**(b)** Read both velocities off the diagram.

At $200\ \text{cm/s}$ the gorge is **above the erosion curve for everything up to about $50\ \text{mm}$**. Every grain finer than coarse gravel is entrained and swept out; only material too coarse for the flow remains. The bare cobble bed is a **lag deposit** — a residue defined by what the flow *cannot* move.

At $80\ \text{cm/s}$ the open reach sits above the erosion curve for sand and silt but well below it for cobbles — competent for sand, not for gravel. More importantly it sits **above the settling curve for sand** only marginally: sand delivered from the gorge, where the flow decelerates and $\tau_0$ collapses, drops out. The sand bed is a **depositional** bed.

**The same river, the same discharge, two opposite beds — set entirely by cross-sectional area.** This is also the reason bridge piers scour: they narrow the channel, and continuity does the rest.

**P2 (a)** Read the erosion curve at each grain size.

- **Sand, $0.4\ \text{mm}$:** critical velocity $\approx 20\ \text{cm/s}$. The canal runs at $60\ \text{cm/s}$ — three times over. It scours, exactly as observed, and $0.4\ \text{mm}$ is close to the **minimum of the entire curve**, so this is the worst possible bank material.
- **Clay, $0.003\ \text{mm}$:** critical velocity $\approx 100\ \text{cm/s}$, because of cohesion and because the grains lie inside the viscous sublayer. At $60\ \text{cm/s}$ the flow is **below threshold** and the reach is stable — even though its grains are more than a hundred times smaller.

**The muddy water is consistent with either of two readings, and both use the same curve.** Either storm flows exceed $100\ \text{cm/s}$ and briefly entrain the clay bed, or — more likely — the mud is delivered from the catchment already in suspension. **The decisive point is the same either way: the settling curve at $0.003\ \text{mm}$ is far below $60\ \text{cm/s}$, so once mud is in this canal, this canal cannot drop it.**

**(b)** On the coarse limb, $\tau_c \propto d$ and hence $u_c \propto \sqrt{d}$. Anchor on the curve at $d = 1\ \text{mm}$, $u_c \approx 26\ \text{cm/s}$:

$$d_{\min} = (1\ \text{mm})\left(\frac{60}{26}\right)^{2} = (1)(2.31)^2 = \mathbf{5.3\ \text{mm}}$$

Reading the curve directly at $60\ \text{cm/s}$ gives $\approx 5\ \text{mm}$ ✓. So **fine gravel, about 5 mm**, is the threshold. A $50\ \text{mm}$ armour layer is a factor of ten oversized in diameter — safe against a flow roughly $\sqrt{10} \approx 3$ times the design velocity, which is defensible for storm flows but should be a deliberate choice, not an accident.

**(c)** Stokes, with $d = 5\times10^{-6}\ \text{m}$:

$$w_s = \frac{(1650)(9.81)(5\times10^{-6})^{2}}{18(10^{-3})} = \frac{(16186)(2.5\times10^{-11})}{0.018} = 2.25\times10^{-5}\ \text{m/s}$$

$$t = \frac{2.0\ \text{m}}{2.25\times10^{-5}\ \text{m/s}} = 8.9\times10^{4}\ \text{s} = \mathbf{24.7\ \text{hours}}$$

**A full day of essentially still water, for silt — and 6.4 days for $2\ \mu\text{m}$ clay** (Example 2). A basin sized for a few hours of residence removes sand and coarse silt and passes everything finer straight through, which is exactly the observed behaviour. **The fix is not a longer basin** — the required volume scales as $1/d^2$ and becomes absurd — **it is flocculation**: a coagulant makes the platelets clump into aggregates tens of microns across, and since $w_s \propto d^2$, a tenfold size increase is a hundredfold speed-up. Nature does the same trick where a river meets salt water, which is why estuaries have turbidity maxima and mud flats.

**P3 (a)** $p = 1/100 = 0.01$:

$$P = 1 - (0.99)^{30} = 1 - 0.7397 = \mathbf{0.26}$$

**A 26 percent chance over a mortgage** — the intuitive answer of "about 30 percent of 1 percent" is wrong by two orders of magnitude.

**(b)** $$P = 1 - (0.99)^{75} = 1 - 0.4706 = \mathbf{0.53}$$

**Over the life of the building it is more likely than not.** The house should expect to see its hundred-year flood.

**(c)** $p = 1/12$:

$$P = 1 - \left(\tfrac{11}{12}\right)^{5} = 1 - (0.9167)^5 = 1 - 0.6472 = \mathbf{0.35}$$

**A one-in-three chance the channel overtops in any five-year window** — which is why "the river came out of its banks again" is not evidence of anything unusual.

**(d)** With $T = 40$:

$$P = 1 - (0.975)^{30} = 1 - 0.4679 = \mathbf{0.53}$$

**The 30-year risk doubles, from 26 percent to 53 percent, with no change to the river or the house.** Urbanisation replaces infiltrating ground with impervious surface and storm drains, so a given rainfall yields a **larger peak discharge arriving sooner** — the hydrograph gets taller and sharper.

Two consequences for the map:

1. **The mapped 100-year floodplain is now the 40-year floodplain.** Every property inside it is at two and a half times the annual risk it was zoned for, and the boundary was the basis for insurance, building codes and mortgages.
2. **The true 100-year discharge is now larger than $1{,}200\ \text{m}^3\text{/s}$, so the mapped boundary is too small** — properties just *outside* the line, which were told they were safe, are now inside the real one. The map is wrong in position as well as in label.

**What is unsound about a 60-year record:** several things, and the first is fatal on its own.

- **It is extrapolation beyond the data.** Estimating a 1-in-100 event from 60 observations means fitting a distribution's tail with no observations in it. The answer depends heavily on which distribution you assume, and the confidence interval on that $1{,}200\ \text{m}^3\text{/s}$ is wide — plausibly plus or minus 30 percent or more.
- **It assumes stationarity** — that every year is drawn from the same distribution. Part (d) is itself a violation, and a warming atmosphere holds more moisture, so the assumption fails on both the land-use and the climate side.
- **It assumes independence between years.** Multi-year wet and dry regimes are real, which fattens the tail relative to the independent model.

**The honest summary: the recurrence interval is a useful shorthand and a terrible communication device**, because "hundred-year flood" invites people to hear a schedule where the mathematics offers a probability with wide error bars on a moving baseline. **Hazard mapping is a probability statement, and like any probability statement it inherits every assumption behind it** — the same distinction between hazard and risk that [2.7](02-07-earthquakes-seismic-hazard.md) draws for shaking.

</details>

## Flashback

**From Lesson 2.6 (Mountain Building):** Seismic refraction gives a Moho depth of $55\ \text{km}$ beneath a plateau. Normal crust nearby is $35\ \text{km}$ thick and stands at sea level. Take $\rho_c = 2800\ \text{kg/m}^3$ and $\rho_m = 3300\ \text{kg/m}^3$, and assume Airy isostasy.

(a) Predict the plateau's elevation. (b) Rivers strip $3\ \text{km}$ of rock off the plateau. How far does the surface actually drop, and what is the new Moho depth? (c) A geologist argues that at a measured erosion rate of $0.3\ \text{mm/yr}$ the plateau will be at sea level in about 12 million years. Evaluate.

<details>
<summary>Solution</summary>

**(a)** The root is the excess crustal thickness below the normal column:

$$r = 55 - 35 = 20\ \text{km}$$

Airy floating equilibrium gives $r\,\rho_c \cdot$ (buoyancy bookkeeping) $\Rightarrow r = h\,\dfrac{\rho_c}{\rho_m - \rho_c}$, so inverting for elevation $h$:

$$h = r\,\frac{\rho_m - \rho_c}{\rho_c} = 20\,\frac{500}{2800} = \mathbf{3.57\ \text{km}}$$

Total crustal thickness of the plateau column is $h + 55 = 58.6\ \text{km}$ — **the root is 5.6 times the topography, so 94 percent of the mountain is underground.**

**(b)** Removing $\Delta e = 3\ \text{km}$ of crust unloads the column, and it re-floats. Mass balance: the mantle displaced by the rebound $u$ must equal the crust removed,

$$u\,\rho_m = \Delta e\,\rho_c \;\Longrightarrow\; u = 3\times\frac{2800}{3300} = 2.55\ \text{km}$$

$$\text{net surface lowering} = \Delta e - u = 3 - 2.55 = \mathbf{0.45\ \text{km}}$$

**Strip 3 km of rock and the summit falls 450 m.** The other 85 percent is given back by rebound. New elevation $= 3.57 - 0.45 = 3.12\ \text{km}$; new crustal thickness $= 58.6 - 3 = 55.6\ \text{km}$; new Moho depth below sea level:

$$55.6 - 3.12 = \mathbf{52.4\ \text{km}}$$

*(Check with Airy: $h = 3.12 \Rightarrow r = 3.12(2800/500) = 17.5\ \text{km}$, Moho $= 35 + 17.5 = 52.5\ \text{km}$ ✓)*

**(c) The estimate is wrong by a factor of about six and a half, and the error is instructive.**

The geologist has computed $3.57\ \text{km} \div 0.3\ \text{mm/yr} \approx 12\ \text{Myr}$ — treating erosion as removing elevation one-for-one. It does not: **only 15 percent of eroded thickness becomes lost elevation.** The rock that must actually be removed is the whole crustal excess:

$$\Delta e_{\text{total}} = \frac{h}{1 - \rho_c/\rho_m} = \frac{3.57}{0.1515} = 23.6\ \text{km}$$

*(Equivalently: strip until the column returns to normal thickness, $58.6 - 35 = 23.6\ \text{km}$ ✓ — the two routes agree.)*

$$t = \frac{23.6\ \text{km}}{0.3\ \text{mm/yr}} = \frac{2.36\times10^{7}\ \text{mm}}{0.3\ \text{mm/yr}} = \mathbf{79\ \text{Myr}}$$

**Isostatic rebound is why old orogens are still mountains.** The Appalachians stopped converging roughly 270 Ma ago and still stand over a kilometre high; the Urals and the Scottish Highlands are the same story. And note the geologic payoff, which is this lesson's business: **rivers must remove roughly seven metres of rock for every metre of summit they lower**, so the sediment volume in the foreland basin is far larger than the missing topography suggests — and the deep metamorphic rocks now exposed at the surface got there because rebound kept feeding them upward into the erosion zone ([1.6](01-06-metamorphic-rocks-rock-cycle.md)).

</details>

## Connections

- **Backward:** [3.2](03-02-mass-wasting-slope-stability.md) delivers the material — hillslopes feed channels, and a river undercutting its bank is the single commonest landslide trigger, so the two systems are coupled in both directions. [3.1](03-01-weathering-soils.md) makes the clay whose cohesion produces the anomaly above, and supplies the dissolved load outright. [2.6](02-06-mountain-building.md) provides the uplift the graded profile is chasing. [2.5](02-05-folds-faults-structures.md) is what a drainage pattern is reading. [2.4](02-04-how-rock-deforms.md)'s effective-stress relation is why a saturated cut bank fails.
- **Forward:** [3.4](03-04-glaciers-ice-ages.md) contrasts sorted, stratified river deposits against unsorted till, and the U-shaped glacial valley against this lesson's V — that contrast is the diagnostic. [3.5](03-05-deserts-wind-coasts.md) runs the same entrainment argument in air, where the low fluid density makes sorting far sharper, and applies longshore drift as a sediment budget. [3.6](03-06-groundwater-aquifers-karst.md) connects the channel to the water table through gaining and losing streams. [1.5](01-05-sedimentary-rocks.md)'s cross-bedding, graded beds and sorting are the fossilised output of everything here, and [4.4](04-04-stratigraphy-facies-correlation.md) reads them back as environments. [4.5](04-05-reading-a-geologic-map.md) uses stream valleys and the V-rule to extract dip from a map. [5.4](05-04-resources-geologic-hazards.md) takes both the flood hazard and the placer deposits that the competence argument concentrates.
- **Sideways:** the continuity result is [fluid-dynamics 1.3](../../fluid-dynamics/lessons/01-03-continuity-equation.md); the viscous sublayer and the rough/smooth distinction are [3.4](../../fluid-dynamics/lessons/03-04-boundary-layers.md) and [3.1](../../fluid-dynamics/lessons/03-01-reynolds-number.md); the settling law is [3.3](../../fluid-dynamics/lessons/03-03-stokes-flow.md), and the shear stress $\tau = \mu\,\partial u/\partial y$ underlying $\tau_0$ is [transport-phenomena 1.2](../../transport-phenomena/lessons/01-02-momentum-transport-newton-viscosity.md). The recurrence-interval reasoning is the geometric distribution from [prob-stat-refresher 2.2](../../prob-stat-refresher/lessons/02-02-discrete-distributions.md), and the quantitative isostasy behind the flashback belongs to [`geophysics`](../../geophysics/syllabus.md) 2.3.
