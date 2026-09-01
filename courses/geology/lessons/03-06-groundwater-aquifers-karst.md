# Geology · Lesson 3.6: Groundwater, Aquifers & Karst

> ⏱ ~15 min · Module 3: Surface Processes · Builds on: [3.5](03-05-deserts-wind-coasts.md), [1.5](01-05-sedimentary-rocks.md), [2.4](02-04-how-rock-deforms.md) · Unlocks: [4.1](04-01-relative-dating-unconformities.md) (relative dating opens Module 4)

## Why this matters

Ignore the ice caps and **groundwater is about 98 percent of the planet's liquid fresh water** — some thirty times all the rivers and lakes combined. Roughly two billion people drink it and about 40 percent of irrigated agriculture runs on it. It is also the only geologic resource that is being visibly consumed on a human timescale: satellite gravity data show the North China Plain, the Indus basin, the Central Valley and the High Plains all losing mass, year on year.

The lesson is quantitative because the questions are quantitative. *How fast does the plume from that landfill reach the town well?* is not answerable by naming a rock type. It requires **Darcy's law and the full chain built on it** — flux, then discharge, then the actual velocity of a water molecule, then a travel time. That chain is short, it is the boss problem for this module, and **the step people get wrong is the one in the middle**, where a number with units of velocity turns out not to be a velocity.

Darcy's law is also a member of a family Jacob already owns: it is the groundwater entry in the same table as Fourier and Fick ([transport-phenomena 1.1](../../transport-phenomena/lessons/01-01-one-flux-law-three-transports.md)). One structural difference makes it the odd one out, and that difference is worth seeing.

## The idea

**Groundwater is not underground rivers.** Except in caves — which is exactly why caves are the dangerous exception at the end of this lesson — it is water occupying the pore space of ordinary rock, creeping through at metres per year. A "water-bearing formation" is a wet sponge, not a plumbing system.

**Water moves down the gradient of hydraulic head, and head is a thing you measure with a well.** That single sentence is the lesson's organizing idea, and it settles three questions at once:

- Groundwater does **not** simply flow downhill: it flows from high head to low head, and it routinely flows *upward* — into a river bed, out of a spring, up the casing of an artesian well and over the rim.
- Head is not pressure. Deep water is at enormous pressure and may still be going nowhere.
- Because head is just the elevation that water stands at in a well, **a scatter of wells is a direct readout of the flow field.** You do not model it; you contour it.

Given the head field, three numbers finish the job:

| Symbol | Name | What it measures |
|---|---|---|
| $K$ | hydraulic conductivity | how willingly this rock passes water |
| $i = -dh/dl$ | hydraulic gradient | how hard the water is being pushed |
| $n_e$ | effective porosity | how much of the rock is actually carrying flow |

**The first two give you a flux. Only the third gives you a velocity** — and the whole practical payoff of the lesson lives in that distinction.

## The formal version

### Porosity is storage; permeability is connection

**Porosity** $n$ is the void fraction, $n = V_{\text{void}}/V_{\text{total}}$. (Hydrogeologists write $n$; [1.5](01-05-sedimentary-rocks.md) wrote $\phi_p$. Same quantity.) **Permeability** is the connectivity of those voids.

**Clay is the counterexample that makes the distinction unavoidable:** freshly deposited mud has *higher* porosity than sand — 60 to 80 percent against 40 — and passes water about a million times more slowly, because the Kozeny–Carman scaling $k \propto d^{2}n^{3}$ from [1.5](01-05-sedimentary-rocks.md) is dominated by the $d^{2}$. **A shale is a seal precisely because it is porous.** A rock that stores water but will not yield it is an **aquitard** (leaky) or an **aquiclude** (effectively not).

Not all of the pore water is even available. Drain an unconfined aquifer and some water clings to grains against gravity:

$$n = S_y + S_r$$

*In words: total porosity splits into the fraction that drains out (specific yield) and the fraction held by surface tension (specific retention).* A sand with $n = 0.35$ gives up $S_y \approx 0.25$; a clay with $n = 0.50$ gives up about $0.02$. **The clay stores five times more water per cubic metre and delivers a tenth as much.**

For *transport* the relevant number is the **effective porosity** $n_e$ — the fraction of the pore space in connected, flowing pathways. It is a little below $n$ in a clean sand (say $0.25$ against $0.32$) and far below it in a fine or cemented rock, where much of the pore volume is dead-end.

### Head is what water flows down

$$h = z + \frac{p}{\rho_w g}$$

*In words: hydraulic head is the elevation of the measurement point above a datum, plus the height a column of water at the local pressure would stand — that is, exactly the water level in a piezometer tapping that point.* Here $z$ is elevation, $p$ is gauge pressure, $\rho_w$ is water density and $g$ is gravity.

Head is a **mechanical energy per unit weight**: an elevation term plus a pressure term. (The velocity term of Bernoulli is dropped because pore velocities are so small that $v^2/2g$ is microscopic — a genuinely negligible term, not an approximation being smuggled past you.)

### Darcy's law and the three quantities it is confused with

Henry Darcy, 1856, running water through sand columns for the Dijon municipal fountains, found the flow proportional to the head drop and inversely proportional to the column length:

$$\boxed{\;Q = -KA\,\frac{dh}{dl}\;}$$

*In words: the volume of water crossing a section per unit time is the rock's conductivity times the area times the head gradient, and the minus sign says flow runs from high head to low.* $Q$ is a volumetric discharge (m³/day), $A$ the **gross** cross-sectional area of aquifer including the solid grains, and $l$ distance measured along the flow direction.

Divide by area and the chain begins:

$$q \equiv \frac{Q}{A} = -K\frac{dh}{dl} = K i \qquad\qquad v = \frac{q}{n_e} \qquad\qquad t = \frac{L}{v} = \frac{L\,n_e}{K i}$$

**Three names, and keeping them apart is the whole skill:**

- $Q$ — **discharge**, m³/day. What a well or a spring delivers.
- $q$ — **Darcy flux**, also called *specific discharge*, m/day. It has units of velocity and **is not a velocity.** It is a discharge spread over the gross area, as though the water flowed through the quartz as well as the pores.
- $v$ — **linear pore velocity** (also *average linear velocity* or *seepage velocity*), m/day. The speed a dye tracer actually travels. Because the water is confined to the fraction $n_e$ of the area, it must move faster by exactly $1/n_e$.

**With $n_e = 0.25$ that factor is four.** Treat $q$ as a velocity and you will predict a contaminant arriving in eighty years when it arrives in twenty — an error in the direction that matters, made in the units that hide it.

### Hydraulic conductivity is a property of rock *and* fluid

$$K = \frac{k\rho_w g}{\mu}$$

with $k$ the **intrinsic permeability** (units m², a property of the rock alone) and $\mu$ the dynamic viscosity. *In words: the same rock conducts hot water faster than cold, and oil far more slowly than water, because $K$ carries the fluid's properties and $k$ does not.*

**This is where Darcy's law departs from its cousins.** Fourier's and Fick's laws are constitutive statements about molecular transport ([transport-phenomena 1.3](../../transport-phenomena/lessons/01-03-heat-mass-fluxes-fourier-fick.md)). Darcy's law is not: it is what the Navier–Stokes equations *become* when you average creeping flow through a pore network over a volume containing many pores ([fluid-dynamics 3.3](../../fluid-dynamics/lessons/03-03-stokes-flow.md)). **Darcy's law is a homogenized Stokes flow, which is why it is linear, why $\mu$ appears, and why it has a validity limit its cousins do not:**

$$\mathrm{Re} = \frac{\rho_w q d}{\mu} \lesssim 1\text{–}10$$

with $d$ a representative grain diameter ([fluid-dynamics 3.1](../../fluid-dynamics/lessons/03-01-reynolds-number.md)). Ordinary aquifers sit at $\mathrm{Re} \sim 10^{-2}$ and are safe. **A karst conduit with water moving at $0.1\ \text{m/s}$ through a one-metre passage is at $\mathrm{Re} \sim 10^{5}$: fully turbulent, and Darcy's law simply does not apply.** Hold that; it returns below.

$K$ spans a range no other rock property comes near:

| Material | $K$ (m/day) | $k$ (m²) |
|---|---|---|
| Cavernous limestone, clean gravel | $10^{3}$–$10^{5}$ | $10^{-9}$–$10^{-7}$ |
| Clean sand | $1$–$10^{3}$ | $10^{-12}$–$10^{-9}$ |
| Silty sand, fine sandstone | $10^{-2}$–$1$ | $10^{-14}$–$10^{-12}$ |
| Silt, loess, glacial till | $10^{-4}$–$10^{-2}$ | $10^{-16}$–$10^{-14}$ |
| Marine clay, shale | $10^{-8}$–$10^{-4}$ | $10^{-20}$–$10^{-16}$ |
| Unfractured granite | $10^{-8}$–$10^{-5}$ | $10^{-20}$–$10^{-17}$ |

**Thirteen orders of magnitude.** Rock density varies by a factor of two; strength by perhaps three; $K$ by $10^{13}$. **So in any real sequence, essentially all the flow is in one unit and everything else is a wall**, and the geology — which bed, how thick, where it pinches out — decides the hydrology completely.

Combine Darcy with mass conservation for steady flow of incompressible water through a homogeneous isotropic aquifer and you get

$$\nabla^{2} h = 0$$

*In words: away from wells and recharge, the head field satisfies Laplace's equation* ([pdes 2.3](../../pdes/lessons/02-03-laplace-poisson-equations.md)) — the same equation as steady heat conduction ([heat-transfer 1.1](../../heat-transfer/lessons/01-01-three-modes-fouriers-law.md)) and electrostatic potential, and solved in practice by exactly the same finite-difference machinery ([numerical-analysis 5.3](../../numerical-analysis/lessons/05-03-finite-differences-bvp.md)). Contoured head maps are equipotentials; flow lines cross them at right angles.

### The water table, and aquifers with and without a lid

The **water table** is the surface where pore pressure equals atmospheric — the level water stands at in a shallow well. Above it is the **vadose (unsaturated) zone**, where pores hold both air and water and pressure is *negative* (suction), with a **capillary fringe** of saturated-but-tense water immediately above the table. A low-permeability lens in the vadose zone can hold a **perched** water table well above the regional one.

**The water table is a subdued replica of the topography**: high under hills, low under valleys, but with less relief. It has to be — recharge piles water up under the interfluves faster than the low conductivity can drain it sideways. Where it intersects the ground you get a spring, a wetland, or a **gaining stream** fed by groundwater (this is the *baseflow* that keeps rivers running between storms — [3.3](03-03-rivers-landscape-evolution.md)). In an arid basin the water table can lie below the channel, and the stream **loses** water to the ground as it flows.

| | Unconfined aquifer | Confined aquifer |
|---|---|---|
| Upper boundary | the water table itself | an overlying aquitard |
| Water level in a well | the water table | the **potentiometric surface** |
| Storage coefficient | $S \approx S_y \approx 0.05$–$0.30$ | $S \approx 10^{-5}$–$10^{-3}$ |
| Water comes from | draining pores | expansion of water and compression of the matrix |
| Recharged | directly from above | only where the aquifer outcrops |

The **potentiometric surface** is the imaginary surface traced by water levels in wells tapping a confined aquifer. **Where it lies above the ground, a well drilled into that aquifer flows without pumping — an artesian well.** Nothing is being pushed: the water simply rises to the head set by the distant, higher recharge area, minus what friction cost it on the way.

**The confined storage coefficient is the striking number.** It is three to five orders of magnitude smaller than the unconfined one, because a confined aquifer stays full — no pores drain — and yields water only by the water expanding slightly and the rock skeleton compressing slightly. **That compression is not a curiosity. It is the subsidence in Worked example 2.**

### Wells, and why the cone of depression is a logarithm

Pump a well and heads fall around it in a **cone of depression**. Put Darcy's law in radial coordinates: at radius $r$ from a well in a confined aquifer of thickness $b$, the flow crosses a cylinder of area $2\pi r b$, so $Q = 2\pi r b K\,(dh/dr)$. Separating and integrating between two observation wells gives the **Thiem equation**:

$$Q = \frac{2\pi K b\,(h_2 - h_1)}{\ln(r_2/r_1)}$$

*In words: at steady state, the drawdown between two points depends only on the logarithm of their distance ratio.* **The logarithm is the whole message.** Drawdown is violent within metres of the well and decays so slowly outward that a cone of depression is measurable kilometres away, which is why neighbouring wells **interfere**: a well field's drawdowns superpose, and each well makes every other well work harder.

### Over-pumping sends two different bills

Withdrawals beyond recharge produce a **hydrologic** consequence and a **geologic** one, and they are not the same problem.

**Hydrologic** — falling water tables, shallow wells going dry, rising pumping costs, springs and gaining streams reversing into losing streams (groundwater depletion shows up as *surface* water loss, which is how it is usually first noticed), and in coastal aquifers **saltwater intrusion**. That last has a clean piece of physics behind it. Fresh water floats on salt water; at an interface a depth $z$ below sea level, the freshwater column of height $h + z$ must balance the saltwater column of height $z$:

$$\rho_f g (h+z) = \rho_s g z \quad\Longrightarrow\quad \boxed{\;z = \frac{\rho_f}{\rho_s - \rho_f}\,h \approx 40\,h\;}$$

**the Ghyben–Herzberg relation.** *In words: for every metre the water table stands above sea level, fresh water extends about forty metres below it.* The lever runs the wrong way when you pump: **drop the water table by one metre and the salt water rises forty.**

**Geologic** — **land subsidence**. Lowering the head by $\Delta h$ removes pore pressure without removing the overburden, so by the effective-stress relation of [2.4](02-04-how-rock-deforms.md), $\sigma_n^{\text{eff}} = \sigma_n - P_f$, the grain-to-grain stress rises by $\rho_w g\,\Delta h$. Sand grains rearrange elastically and recover. **Interbedded clays do not: their platy particles collapse into a denser packing permanently.** So the aquifer's pore volume is destroyed, the land drops, and refilling the aquifer does not bring either back. The San Joaquin Valley has subsided up to nine metres since 1925; Mexico City more than ten, tearing its drainage system apart.

Say it plainly: an aquifer whose storage represents centuries or millennia of accumulated recharge is **being mined, not harvested.** Water from the Nubian Sandstone under the Sahara radiocarbon-dates to tens of thousands of years — recharged when the Sahara was wet. There is no management regime that makes that renewable.

### Karst: the aquifer dissolves itself

Rain equilibrates with soil air, where root and microbial respiration hold $\text{CO}_2$ at ten to a hundred times its atmospheric level ([3.1](03-01-weathering-soils.md)). That makes carbonic acid, which attacks limestone:

$$\text{CO}_2 + \text{H}_2\text{O} \rightleftharpoons \text{H}_2\text{CO}_3 \qquad \text{CaCO}_3 + \text{H}_2\text{CO}_3 \rightleftharpoons \text{Ca}^{2+} + 2\,\text{HCO}_3^{-}$$

**The equilibrium runs both ways, and both directions build landforms** ([general-chemistry 3.4](../../general-chemistry/lessons/03-04-chemical-equilibrium-k-le-chatelier.md)). Rightward in the soil zone at high $\text{CO}_2$: dissolution, widening joints into **caves**, opening **sinkholes**, swallowing surface streams into **swallow holes** so that valleys run dry, and returning the water at large **karst springs**. Leftward when that water reaches an air-filled cave at ordinary atmospheric $\text{CO}_2$: the water degasses, calcite precipitates, and **speleothems** grow. Stalactites are the reaction running backwards.

**Karst aquifers are both the most productive and the most vulnerable aquifers there are**, for one reason: flow is in **conduits**, not pores. Turbulent conduit flow moves contaminants kilometres in *hours*, and it skips the filtration, sorption and residence time that make porous-media flow a natural treatment system. It also means a Darcy calculation, a pump test and a tracer test can give three different answers in the same rock. **Where the rock is karst, the arithmetic of this lesson is a lower bound on trouble, not an estimate of it.**

And the two halves of the lesson meet: **lowering the water table in karst triggers sinkhole collapse.** A submerged cave roof is buoyed — limestone at $2500\ \text{kg/m}^3$ weighs $(2500-1000)g = 14.7\ \text{kN/m}^3$ submerged and $24.5\ \text{kN/m}^3$ drained, so **draining the void increases the load its roof must carry by 67 percent.** Add the downward seepage force on the soil cover and the piping of loose sediment into the newly open void, and Florida's cover-collapse sinkholes appear over dewatered ground, often within days.

**Contamination and remediation, briefly.** A plume travels along the flow lines of the head field, so mapping heads is the first act of every investigation. Dissolved solvents denser than water (DNAPLs) sink *through* the aquifer to pool on the aquitard, in defiance of the flow direction, and are the reason many sites are never fully cleaned. Pump-and-treat is slow because you must flush many pore volumes through material whose $K$ is precisely why the contaminant is still there. **The cheap intervention is always upstream: wellhead protection zones drawn from the travel-time calculation in Worked example 1.**

## Picture

![Panel a is a landscape cross-section from an upland recharge area on the left to a lowland discharge area on the right. It shows the vadose unsaturated zone above a dashed water table, an unconfined sand aquifer, a clay aquitard that wedges out toward the left, and a confined sandstone aquifer beneath it with a blue arrow marking the Darcy flux. A pumping well draws the water table down into a cone of depression, a gaining stream receives groundwater from both banks, and on the right a well drilled into the confined aquifer flows at the surface because the dashed potentiometric surface lies above the ground. An inset box lists Darcy's law and the chain of flux, discharge, pore velocity and travel time. Panel b is a karst cross-section in limestone showing a disappearing stream entering a swallow hole, downward arrows marking rain charged with soil carbon dioxide, a cover-collapse sinkhole, an air-filled cave with stalactites and stalagmites above the water table, a karst spring emerging in a valley on the right, and a lowered water table after pumping drawn beneath the cave.](assets/03-06-fig1.svg)

## Worked examples

**Example 1 (mechanical — the full chain, and the step that goes wrong).** A landfill sits on an unconfined sand aquifer. Two monitoring wells 1200 m apart along the flow direction give water-table elevations of $152.0\ \text{m}$ and $148.4\ \text{m}$. The sand has $K = 25\ \text{m/day}$, saturated thickness $18\ \text{m}$, total porosity $n = 0.32$ and effective porosity $n_e = 0.26$. (a) Hydraulic gradient. (b) Darcy flux. (c) Discharge through a $500\ \text{m}$-wide section. (d) Linear pore velocity. (e) When does a conservative (non-reacting, non-sorbing) contaminant leaving the landfill reach the downgradient well?

**(a)** $$i = \frac{\Delta h}{\Delta l} = \frac{152.0 - 148.4}{1200} = \frac{3.6}{1200} = 3.0\times10^{-3}$$

Dimensionless — a drop of 3 mm per metre. **Typical: real hydraulic gradients are of order $10^{-3}$, which is why groundwater is slow even in good rock.**

**(b)** $$q = Ki = 25 \times 3.0\times10^{-3} = 0.075\ \text{m/day}$$

**(c)** The gross area is thickness times width, grains included:

$$A = 18 \times 500 = 9000\ \text{m}^{2}, \qquad Q = qA = 0.075 \times 9000 = 675\ \text{m}^{3}\text{/day}$$

That is $7.8\ \text{L/s}$ crossing a half-kilometre front — a modest municipal well's worth, moving through the ground unnoticed.

**(d)** $$v = \frac{q}{n_e} = \frac{0.075}{0.26} = 0.288\ \text{m/day}$$

**(e)** $$t = \frac{L}{v} = \frac{1200}{0.288} = 4160\ \text{days} = \mathbf{11.4\ \text{years}}$$

**Now the error worth 30 years.** Use $q$ as though it were a velocity:

$$t_{\text{wrong}} = \frac{1200}{0.075} = 16{,}000\ \text{days} = 43.8\ \text{years}$$

$$\frac{t_{\text{wrong}}}{t} = \frac{1}{n_e} = 3.85$$

**You would have told the town its water was safe for four decades when the plume arrives in eleven years** — and every unit in the wrong calculation checks out, which is exactly why the mistake survives review.

A smaller trap sits beside it: using **total** porosity $0.32$ instead of effective porosity $0.26$ gives $14.0$ years. Twenty-three percent late, from picking the wrong porosity off the same lab report.

## Watch out

- **You might think groundwater flows downhill.** It flows down the *head* gradient. An artesian well drives water upward out of the ground, and in any discharge area — a river bed, a wetland, a coastline — the vertical gradient points up. Downhill is a special case, not the rule.
- **You might treat the Darcy flux as a velocity.** It has units of velocity and it is a discharge per unit *gross* area. The water is squeezed into the fraction $n_e$ of that area, so it travels $1/n_e$ times faster — a factor of three to five in ordinary rock, and always in the direction that makes you underestimate risk.
- **You might equate porosity with permeability.** Clay wins on porosity by a factor of two and loses on permeability by a factor of a million. Porosity says how much a rock *holds*; permeability says whether it will *give it up*.
- **You might expect a pumped aquifer to refill.** The water can be replaced, given centuries. The **pore space** cannot: dewatered clay compacts irreversibly, so subsidence permanently destroys storage. This is one of the few genuinely one-way doors in surface geology.
- **You might apply Darcy's law to karst.** Conduit flow is turbulent, $\mathrm{Re} \sim 10^{5}$, and the linear law fails outright. A dye tracer in a karst spring can appear kilometres away the same afternoon.

## One-liner

> Water flows down the head gradient at a flux $q = Ki$ — but the water itself moves at $q/n_e$, several times faster, and that factor is the difference between a plume arriving in a career and arriving in a lifetime.

## Problems

**P1 (🟢)** A confined gravel aquifer is $6\ \text{m}$ thick with $K = 200\ \text{m/day}$ and $n_e = 0.25$. Along the flow direction the potentiometric surface falls $4.5\ \text{m}$ over $3\ \text{km}$. (a) Compute the gradient, the Darcy flux, and the discharge through a section $800\ \text{m}$ wide. (b) Compute the linear pore velocity and the travel time over the $3\ \text{km}$. (c) A spill occurs at the upgradient end. Is a 30-year wellhead protection zone of $3\ \text{km}$ adequate?

**P2 (🟡 — inference from field data)** Four wells and a stream sit on an east–west line. Elevations are metres above sea level.

| Well | Distance east (m) | Ground elevation | Screened interval | Water level |
|---|---|---|---|---|
| A | 0 | 118.0 | shallow sand, 8–12 m depth | 112.0 |
| B | 500 | 112.0 | shallow sand, 8–12 m depth | 108.5 |
| C | 500 | 112.0 | sandstone at 40–50 m, beneath 15 m of clay | 115.5 |
| D | 1200 | 104.0 | shallow sand, 8–12 m depth | 103.0 |

A stream crosses the line at 1200 m east with a stage elevation of $102.0\ \text{m}$. The shallow sand has $K = 12\ \text{m/day}$ and $n_e = 0.28$.

(a) Which way does shallow groundwater flow, and what is the gradient from A to D? (b) What is unusual about well C, and what does it prove about the sandstone? (c) Compute the vertical gradient between the shallow and deep systems at 500 m east, and say which way water would leak through the clay. (d) Is the stream gaining or losing? (e) A solvent is spilled at A. Estimate when it reaches the stream, and state whether the deep sandstone is at risk — before and after a new municipal well starts pumping the sandstone hard.

**P3 (🔴 — coastal and karst)** A limestone island has a water table $1.8\ \text{m}$ above sea level at its centre. Fresh water $\rho_f = 1000\ \text{kg/m}^3$, sea water $\rho_s = 1025\ \text{kg/m}^3$.

(a) How deep does fresh water extend beneath the island's centre, and how thick is the lens? (b) Pumping lowers the central water table to $1.1\ \text{m}$. Where is the interface now, and what happens to a supply well screened $50\ \text{m}$ below sea level? (c) The same drawdown is applied over an air-filled cave system in the limestone. Quantify the change in the load the cave roof must carry, and name two further mechanisms by which lowering the water table triggers sinkhole collapse.

<details>
<summary>Solutions</summary>

**P1 (a)**

$$i = \frac{4.5}{3000} = 1.5\times10^{-3}, \qquad q = Ki = 200 \times 1.5\times10^{-3} = 0.30\ \text{m/day}$$

$$A = 6 \times 800 = 4800\ \text{m}^{2}, \qquad Q = 0.30 \times 4800 = \mathbf{1440\ \text{m}^{3}\text{/day}}$$

**(b)** $$v = \frac{q}{n_e} = \frac{0.30}{0.25} = 1.2\ \text{m/day}, \qquad t = \frac{3000}{1.2} = 2500\ \text{days} = \mathbf{6.8\ \text{years}}$$

**(c)** **No — badly inadequate.** The contaminant covers the $3\ \text{km}$ in under seven years, so a 30-year capture zone in this aquifer extends about

$$L_{30} = v \times 30\ \text{yr} = 1.2 \times 365.25 \times 30 = 13{,}100\ \text{m} \approx \mathbf{13\ \text{km}}$$

**Note where the gradient went.** It is gentler here than in Worked example 1 ($1.5\times10^{-3}$ against $3.0\times10^{-3}$), yet the water moves four times faster, because $K$ is eight times larger. **Conductivity, not gradient, is what sets groundwater speed** — it is the term that varies by thirteen orders of magnitude while gradients cluster around $10^{-3}$. Protection-zone radii are therefore a property of the aquifer material above all else.

**P2 (a)** Heads fall eastward: $112.0 \to 108.5 \to 103.0$. **Flow is west to east, toward the stream.**

$$i_{AD} = \frac{112.0 - 103.0}{1200} = 7.5\times10^{-3}$$

(Segment gradients: $3.5/500 = 7.0\times10^{-3}$ from A to B, $5.5/700 = 7.9\times10^{-3}$ from B to D — steepening slightly as the aquifer approaches the discharge boundary.)

**(b)** **Well C's water level, 115.5 m, stands 3.5 m above the ground surface at that spot (112.0 m).** So C is a **flowing artesian well**, and the sandstone is therefore **confined** — it must be, since a water level cannot stand above the top of an unconfined aquifer. The 15 m of clay is the aquitard, and the sandstone's potentiometric surface locally lies 3.5 m above the land.

**(c)** B and C are at the same location, screened in different units, so their head difference is a vertical gradient. Taking the vertical separation as the clay thickness, $15\ \text{m}$:

$$i_v = \frac{115.5 - 108.5}{15} = \frac{7.0}{15} = 0.47 \ \text{(upward)}$$

**Head is higher below, so leakage through the clay is upward** — this is a discharge area. Note the magnitude: $0.47$ against a horizontal gradient of $0.0075$, **sixty times steeper vertically**. Aquitards do that: almost all of the head is consumed crossing the low-$K$ unit, exactly as almost all of the temperature drop in a wall falls across the insulation ([heat-transfer 1.4](../../heat-transfer/lessons/01-04-thermal-resistance-networks.md)).

**(d)** Water table at D is $103.0\ \text{m}$; stream stage is $102.0\ \text{m}$. The water table stands **above** the stream, so groundwater flows into the channel: **a gaining stream**, and that 1 m of head is its baseflow.

**(e)** Using the A-to-D gradient:

$$q = 12 \times 7.5\times10^{-3} = 0.090\ \text{m/day}, \qquad v = \frac{0.090}{0.28} = 0.321\ \text{m/day}$$

$$t = \frac{1200}{0.321} = 3730\ \text{days} = \mathbf{10.2\ \text{years}}$$

**Deep aquifer, before pumping: protected.** The vertical gradient is upward, so the clay is being flushed from below; a contaminant in the shallow sand cannot migrate down against it. The clay's low $K$ is a second line of defence, but **the gradient is the first, and it is doing the work.**

**Deep aquifer, after heavy pumping: at risk.** Pumping the sandstone lowers its potentiometric surface. Once that surface drops below $108.5\ \text{m}$ — a drawdown of just $7\ \text{m}$, and well C would stop flowing well before that — **the vertical gradient reverses and the clay begins leaking downward, drawing the contaminated shallow water into the supply aquifer.**

**This is the general lesson and it is not intuitive: pumping does not merely lower a water level, it re-draws the flow field.** A well can reverse a stream from gaining to losing, pull salt water inland, or, as here, invert the protection that made an aquifer worth developing in the first place.

**P3 (a)** Ghyben–Herzberg:

$$\frac{\rho_f}{\rho_s - \rho_f} = \frac{1000}{1025-1000} = \frac{1000}{25} = 40$$

$$z = 40 \times 1.8 = \mathbf{72\ \text{m below sea level}}, \qquad \text{lens thickness} = 1.8 + 72 = 73.8\ \text{m}$$

**(b)** $$z = 40 \times 1.1 = \mathbf{44\ \text{m}}$$

The interface has risen $40 \times 0.7 = 28\ \text{m}$. **A well screened at 50 m below sea level now sits 6 m inside salt water and goes brackish, then saline.**

**The asymmetry is the point.** The island lost $0.7\ \text{m}$ of water table and $28\ \text{m}$ of fresh water — a 40:1 lever, and it runs the wrong way. Worse, pumping locally **upcones** the interface beneath the well far faster than this basin-scale relation suggests, so wells in coastal aquifers are deliberately screened shallow and pumped gently. **Once a coastal aquifer is salinized it can take decades to flush, because the flushing must be done by the same slow recharge that was overdrawn.**

**(c) The buoyancy loss.** Below the water table the roof rock is buoyed; above it, it is not:

$$\gamma_{\text{sub}} = (2500-1000)(9.81) = 14.7\ \text{kN/m}^{3}, \qquad \gamma_{\text{dry}} = (2500)(9.81) = 24.5\ \text{kN/m}^{3}$$

$$\frac{24.5}{14.7} = 1.67 \quad\Longrightarrow\quad \textbf{a 67 percent increase in the load the roof carries}$$

A cave roof that had been stable for ten thousand years is asked, in one dry season, to carry two-thirds more.

**Two further mechanisms:**

1. **Seepage forces.** Water draining downward through the soil cover into the newly air-filled void exerts a downward body force $\rho_w g i$ on the sediment it passes through, adding to gravity instead of resisting it — the same effective-stress bookkeeping as [3.2](03-02-mass-wasting-slope-stability.md), run vertically.
2. **Piping and raveling.** That downward flow carries fine sediment grain by grain into the void, hollowing a cavity upward through the overburden until the remaining arch is too thin. This is the **cover-collapse** sinkhole: nothing at the surface changes for months, and then a hole appears in an afternoon. It is why Florida's sinkhole reports cluster over heavily pumped and drought-stricken ground rather than over undisturbed karst.

**Both P3 halves share one structure.** A slow, invisible change in head — less than a metre of water table — produces a large, fast, and effectively irreversible change at depth: 28 m of salt water, or a collapsed roof. **Head is a small number with long arms.**

</details>

## Flashback

**From Lesson 1.5 (Sedimentary Rocks):** A basin contains interbedded sandstone and shale, deposited at surface porosities of $0.42$ and $0.68$ respectively, now buried to $2.5\ \text{km}$. Athy compaction coefficients: $c = 0.27\ \text{km}^{-1}$ for sand, $0.55\ \text{km}^{-1}$ for mud. Mean grain diameters are $0.3\ \text{mm}$ and $3\ \mu\text{m}$.

(a) Compute each unit's porosity at $2.5\ \text{km}$. (b) Use Kozeny–Carman, $k \approx d^{2}n^{3}/[180(1-n)^{2}]$, to estimate each permeability and their ratio. (c) Convert to hydraulic conductivity in m/day and classify each unit. (d) What does the comparison of (a) with (b) say?

<details>
<summary>Solution</summary>

**(a)** Athy's law, $n(z) = n_0 e^{-cz}$:

$$n_{\text{sand}} = 0.42\,e^{-0.27 \times 2.5} = 0.42\,e^{-0.675} = 0.42 \times 0.509 = \mathbf{0.214}$$

$$n_{\text{shale}} = 0.68\,e^{-0.55 \times 2.5} = 0.68\,e^{-1.375} = 0.68 \times 0.253 = \mathbf{0.172}$$

**(b)** Sandstone, $d = 3\times10^{-4}\ \text{m}$:

$$k = \frac{(3\times10^{-4})^{2}(0.214)^{3}}{180\,(0.786)^{2}} = \frac{(9\times10^{-8})(9.79\times10^{-3})}{111.2} = 7.9\times10^{-12}\ \text{m}^{2}$$

Shale, $d = 3\times10^{-6}\ \text{m}$:

$$k = \frac{(9\times10^{-12})(5.08\times10^{-3})}{180\,(0.828)^{2}} = \frac{4.57\times10^{-14}}{123.4} = 3.7\times10^{-16}\ \text{m}^{2}$$

$$\frac{k_{\text{sand}}}{k_{\text{shale}}} = \frac{7.9\times10^{-12}}{3.7\times10^{-16}} = \mathbf{2.1\times10^{4}}$$

Almost all of it is the grain-size term: $(d_s/d_m)^2 = (100)^2 = 10^{4}$, with the porosity ratio contributing the remaining factor of two.

**(c)** $K = k\rho_w g/\mu$, with $\rho_w g/\mu = (1000)(9.81)/10^{-3} = 9.81\times10^{6}\ \text{m}^{-1}\text{s}^{-1}$:

$$K_{\text{sand}} = 7.9\times10^{-12} \times 9.81\times10^{6} = 7.8\times10^{-5}\ \text{m/s} = \mathbf{6.7\ \text{m/day}}$$

$$K_{\text{shale}} = 3.7\times10^{-16} \times 9.81\times10^{6} = 3.6\times10^{-9}\ \text{m/s} = \mathbf{3.1\times10^{-4}\ \text{m/day}}$$

The sandstone is a good **aquifer**; the shale, at $0.3\ \text{mm}$ per day, is an **aquitard** — a seal on any timescale that matters to a well, though not on a geological one.

**(d) The porosities are within a factor of $1.25$ of each other and the permeabilities differ by a factor of twenty thousand.** If you logged this core and recorded only porosity, the two units would look nearly interchangeable, and you would be wrong about the only property that matters for flow.

The physical reason is the same one [1.5](01-05-sedimentary-rocks.md) gave: permeability scales as the *square of the pore throat*, not as the void fraction. The shale's water is real, abundant, and locked in throats a thousand times narrower, most of it bound to clay surfaces and unavailable at any pumping rate. **Porosity is a census of the water; permeability is a statement about the doors.**

*(A caveat worth keeping: Kozeny–Carman is calibrated on loose granular packs and flatters cemented rock and clay alike, so treat these as order-of-magnitude figures. The scaling, and the four-order gap, are the durable result.)*

</details>

## Connections

- **Backward:** this is [1.5](01-05-sedimentary-rocks.md)'s porosity and permeability turned into a flow law, with sorting and cementation deciding $K$ and therefore everything downstream. Subsidence and sinkhole collapse are [2.4](02-04-how-rock-deforms.md)'s effective-stress relation $\sigma_n^{\text{eff}} = \sigma_n - P_f$ applied to a dewatered aquifer, the same relation [3.2](03-02-mass-wasting-slope-stability.md) used for slopes and [2.7](02-07-earthquakes-seismic-hazard.md) used for liquefaction. Karst chemistry is [3.1](03-01-weathering-soils.md)'s carbonic-acid dissolution given a few million years and a limestone. Baseflow, gaining and losing streams close the loop with [3.3](03-03-rivers-landscape-evolution.md).
- **Forward:** [4.1](04-01-relative-dating-unconformities.md) opens Module 4 and needs nothing from here, but [5.4](05-04-resources-geologic-hazards.md) returns to aquifers as economic resources alongside ore and hydrocarbons — and oil and gas migrate and are trapped by exactly this machinery, with the aquitard renamed a seal.
- **Sideways:** Darcy's law is the groundwater entry in the flux-law family ([transport-phenomena 1.1](../../transport-phenomena/lessons/01-01-one-flux-law-three-transports.md), [1.3](../../transport-phenomena/lessons/01-03-heat-mass-fluxes-fourier-fick.md)), but unlike Fourier and Fick it is a *homogenized* Stokes flow ([fluid-dynamics 3.3](../../fluid-dynamics/lessons/03-03-stokes-flow.md)), which is why $\mu$ appears in $K$ and why the Reynolds number sets a validity limit ([fluid-dynamics 3.1](../../fluid-dynamics/lessons/03-01-reynolds-number.md)). The steady head field obeys Laplace's equation ([pdes 2.3](../../pdes/lessons/02-03-laplace-poisson-equations.md)) and is solved by the same finite-difference schemes as steady conduction ([numerical-analysis 5.3](../../numerical-analysis/lessons/05-03-finite-differences-bvp.md), [heat-transfer 1.3](../../heat-transfer/lessons/01-03-1d-steady-conduction.md)); an aquitard soaking up almost the whole head drop is a thermal-resistance network with one dominant resistor ([heat-transfer 1.4](../../heat-transfer/lessons/01-04-thermal-resistance-networks.md)).
