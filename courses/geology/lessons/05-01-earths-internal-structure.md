# Geology · Lesson 5.1: Earth's Internal Structure

> ⏱ ~15 min · Module 5: Earth's Interior, History & Resources · Builds on: [4.5](04-05-reading-a-geologic-map.md), [2.7](02-07-earthquakes-seismic-hazard.md) · Unlocks: [5.2](05-02-earth-history-hadean-proterozoic.md) (Earth history I)

## Why this matters

The deepest hole ever drilled is the Kola Superdeep Borehole: $12.262\ \text{km}$, abandoned in 1992 because the rock at the bottom was hotter and more plastic than anyone had planned for. That is $0.19$ percent of the way to the centre — proportionally, a scratch through the skin of an apple.

And yet the radius of the core is known to within a few kilometres, the outer core is known to be liquid, and the temperature at the core–mantle boundary is bracketed within a few hundred degrees. **Nobody has sampled any of it.** This lesson is about how that is possible, and it is the best worked case in the whole course of the thing geology actually does: **build a structure out of independent measurements that have no reason to agree, and then notice that they do.**

Four completely unrelated lines of evidence — a mass, a wobble, a set of seismograms, and a box of meteorites — converge on the same planet. None of them alone would be convincing. Together they are as secure as anything in the earth sciences.

The second payoff is a distinction the rest of the course has been leaning on. **There are two layer schemes, they are sorted by different physics, and their boundaries are at different depths.** [2.3](02-03-driving-mechanism.md) needed it to say what a plate is; [2.2](02-02-plate-boundaries.md) needed it to say what subducts. This lesson pins both against one depth axis so they stop blurring.

Scope: the wave physics — ray theory, travel-time inversion, tomography — belongs to [`geophysics`](../../geophysics/syllabus.md) 1.2–1.5, and differentiation as a *planetary* process to [`planetary-science`](../../planetary-science/syllabus.md) 2.1. What is owned here is the evidence-to-structure argument for **this** planet.

## The idea

**Three global measurements constrain the interior before a single seismogram is read.**

**1. The Earth is twice as dense as the rock you can pick up.** Take its mass and its radius and divide. The answer is $5.51\ \text{g/cm}^3$. Granite is $2.7$, basalt $3.0$, peridotite $3.3$. **Every rock at the surface is roughly half the density of the average Earth**, so something down there is much denser than anything up here — and iron, which is cosmically abundant and has a density of $7.9$ at room pressure, is the obvious candidate.

**2. The Earth spins wrong for a uniform ball.** How hard a body is to spin up depends not just on its mass but on where the mass sits. For a sphere of uniform density the moment of inertia is $\tfrac{2}{5}MR^2$; the Earth's is $0.3307\,MR^2$, measured from the rate at which its rotation axis precesses. **The number is below $0.4$, so the mass is concentrated toward the centre** — the dense stuff is not spread evenly through a homogeneous rock ball, it is piled in the middle. Density alone permits a uniformly dense iron-rich planet; the moment of inertia forbids it.

**3. Waves stop, bend and vanish at specific depths.** Earthquakes ([2.7](02-07-earthquakes-seismic-hazard.md)) illuminate the interior for free, several thousand times a year, and the arrivals at a global network are a scan. Three things in that scan do the heavy lifting: **a sharp velocity jump at shallow depth** (the Moho), **a zone where direct S waves simply never arrive** (the outer core), and **faint arrivals inside that zone that should not be there** (the inner core).

**The decisive one is the S-wave shadow, and the argument is one line of physics.** Shear waves propagate by shearing the medium, so they need rigidity. A liquid has none. Past an epicentral distance of $103^\circ$, **no direct S wave has ever been recorded, from any earthquake, at any station** — while P waves eventually reappear beyond $143^\circ$, delayed and bent. A layer that transmits compression but not shear is a liquid. That is the whole inference, and it was made in the 1910s and 1920s with mechanical seismographs and paper drums.

**Then two more lines arrive from outside geophysics entirely.**

**Meteorites** give the ingredients. Chondrites are undifferentiated leftovers whose non-volatile composition matches the Sun's; iron meteorites are Fe–Ni alloys whose coarse Widmanstätten intergrowths require cooling at a degree or two per million years, which can only happen deep inside a body tens to hundreds of kilometres across. **Somewhere out there are the smashed cores of small planets.** Core formation is a generic outcome of a molten silicate–metal mixture in a gravity field, not a special fact about Earth.

**The magnetic field** demands a liquid layer independently of any seismogram. A permanent magnet cannot be the source: iron loses its magnetization above its Curie temperature of $770\ ^\circ\text{C}$, and the core is several thousand degrees hotter than that. **The field must be generated, continuously, right now** — which needs an electrically conducting fluid, convecting, in a rotating body. The field's reversals ([2.1](02-01-evidence-for-drift.md)) are the signature of a dynamo rather than a fossil. The mechanism is [`geophysics`](../../geophysics/syllabus.md) 3.2's.

**And two lines give you the rock in your hand.** Kimberlite pipes fire peridotite xenoliths to the surface from $150$–$200\ \text{km}$ — the diamonds in them are themselves a depth gauge, since diamond is only stable above about $4.5\ \text{GPa}$, roughly $150\ \text{km}$ down. Ophiolites obduct whole slabs of ocean floor plus the mantle beneath onto continents. And diamond-anvil cells now reach the $360\ \text{GPa}$ of Earth's centre, so the phase diagram of the deep Earth is measured, not assumed.

## The formal version

**Mean density.** With $M$ the mass and $R$ the radius,

$$\bar\rho = \frac{M}{\tfrac{4}{3}\pi R^3} = \frac{5.972\times10^{24}}{\tfrac{4}{3}\pi (6.371\times10^{6})^3} = \frac{5.972\times10^{24}}{1.083\times10^{21}} = 5513\ \text{kg/m}^3 .$$

*In words: the average cubic metre of Earth weighs 5.5 tonnes, and the average cubic metre of crust weighs 2.8.*

**Moment of inertia factor.** For a body of polar moment of inertia $C$,

$$\boxed{\;\frac{C}{MR^2} = 0.3307 \quad\text{(Earth)}, \qquad 0.4 \text{ (uniform sphere)}, \qquad \to 0 \text{ (all mass at the centre)}\;}$$

*In words: a single dimensionless number saying how centrally the mass is piled.* For comparison, the Moon's is $0.394$ — nearly uniform, so it has at most a tiny core — and Mercury's is $0.346$ with an enormous one. **This one number is what separates "dense planet" from "layered planet".**

**Why S waves die and P waves do not.** In an elastic solid of bulk modulus $K$, shear modulus $\mu$ and density $\rho$ ([materials-science 4.1](../../materials-science/lessons/04-01-elastic-behavior-stress-strain.md); the wave derivation is [`geophysics`](../../geophysics/syllabus.md) 1.3):

$$V_p = \sqrt{\frac{K + \tfrac{4}{3}\mu}{\rho}}, \qquad V_s = \sqrt{\frac{\mu}{\rho}}$$

$$\textbf{A liquid has } \mu = 0 \;\Longrightarrow\; V_s = 0, \quad V_p = \sqrt{K/\rho} \ne 0 .$$

*In words: a fluid resists being squeezed but not being twisted, so it passes P and blocks S.* Everything about the outer core follows from that single zero. Note also that $V_p$ **drops** on entering the core — from $13.7$ to $8.1\ \text{km/s}$ — because the loss of $\tfrac{4}{3}\mu$ beats the rise in $K$, and the ray bends sharply downward. **That bend is what carves the P shadow zone.**

**The layers, with the observation that defines each.**

| Boundary | Depth | What changes | Evidence |
|---|---|---|---|
| **Moho** | $7\ \text{km}$ (ocean), $30$–$50\ \text{km}$ (continent) | basalt/granodiorite → peridotite | $V_p$ jumps $\sim6.8 \to 8.1\ \text{km/s}$; Mohorovičić, 1909 |
| Base of lithosphere | $\sim100\ \text{km}$ (old ocean), $150$–$250\ \text{km}$ (craton) | strong → weak, **same rock** | low-velocity zone; $V_s$ drops a few percent |
| **410 km** | $410\ \text{km}$ | olivine → wadsleyite | jump matches the lab pressure for that transition |
| **660 km** | $660\ \text{km}$ | ringwoodite → bridgmanite + ferropericlase | $\sim9$ percent density jump; deep quakes stop here |
| D″ | $2700$–$2891\ \text{km}$ | post-perovskite, chemical heterogeneity | scattered arrivals, tomographic blobs |
| **Core–mantle** | $2891\ \text{km}$ | rock → liquid iron alloy | S shadow past $103^\circ$; $V_p$ $13.7\to8.1$; Gutenberg, 1914 |
| **Inner core** | $5150\ \text{km}$ | liquid → solid iron alloy | faint P inside the shadow; Lehmann, 1936 |

**The two schemes, side by side — this is the part people conflate.**

| | **Compositional** | **Mechanical** |
|---|---|---|
| Sorted by | what it is made of | how it responds to stress |
| Divisions | crust / mantle / core | lithosphere / asthenosphere / mesosphere / outer core / inner core |
| Top boundary | **Moho**, $7$–$50\ \text{km}$ | **base of the plate**, $100$–$250\ \text{km}$ |
| Set by | chemistry, fixed once formed | temperature, so it *moves* |
| Used for | petrology, geochemistry, [1.3](01-03-how-the-earth-melts.md) | plate tectonics, [2.3](02-03-driving-mechanism.md), isostasy in [2.6](02-06-mountain-building.md) |

**The two schemes cross.** A plate is lithosphere: crust *plus* the cold uppermost mantle welded to it, with the Moho buried harmlessly inside. **Under old ocean floor, more than 90 percent of the plate is mantle**, which is why the Moho is irrelevant to plate dynamics and why Wegener's continents-ploughing-through-ocean-floor picture was doomed. And because the lithosphere's base is a *temperature* contour — roughly the $1300\ ^\circ\text{C}$ isotherm — it deepens as the plate ages and cools ([`geophysics`](../../geophysics/syllabus.md) 4.3 owns the $\sqrt{t}$ law). The Moho does not move; the base of the plate does.

**The 410 and 660 are not compositional at all**, and the distinction is testable rather than stipulated. Three arguments: the jumps occur at exactly the pressures at which laboratory olivine transforms; they occur at nearly the same depth everywhere, which a chemical boundary need not do; and — decisively — **the 660 is depressed where cold slabs push through it and elevated under hot upwellings**, because its Clapeyron slope is negative. **A compositional boundary would not care about temperature.** It is the same rock, packed tighter.

**Crust: two kinds, and the difference runs Module 2.**

| | Oceanic | Continental |
|---|---|---|
| Thickness | $7\ \text{km}$ | $35\ \text{km}$ average, $70\ \text{km}$ under Tibet |
| Composition | basalt over gabbro | granodiorite average, wildly heterogeneous |
| Density | $3.0\ \text{g/cm}^3$ | $2.7\ \text{g/cm}^3$ |
| Oldest | $\sim200\ \text{Ma}$ | $4.03\ \text{Ga}$ rock, $4.4\ \text{Ga}$ zircons |

($\text{Ma}$ = mega-annum, millions of years before present; $\text{Ga}$ = giga-annum, billions.) **Everything in [2.2](02-02-plate-boundaries.md) traces to that density contrast**: oceanic lithosphere becomes denser than the asthenosphere as it cools and can subduct, continental lithosphere never does, so continents collide instead of diving and therefore survive to be 4 billion years old.

**The geotherm, and why you cannot extrapolate it.** The near-surface gradient is about $25\ ^\circ\text{C/km}$. Run it down:

$$T(100\ \text{km}) \stackrel{?}{=} 15 + 25(100) = 2515\ ^\circ\text{C}$$

against a real value near $1300\ ^\circ\text{C}$ — and at the core–mantle boundary the extrapolation gives $72{,}000\ ^\circ\text{C}$ against a real $\sim4000$. **The extrapolation fails within a few tens of kilometres, and the failure is the result:** conduction only carries heat through the lithosphere. Below it the mantle convects ([2.3](02-03-driving-mechanism.md)), and a convecting layer is nearly **adiabatic** — about $0.3\ ^\circ\text{C/km}$, a hundredfold flatter. **The kink in the geotherm at $\sim100\ \text{km}$ is the base of the plate**, seen thermally instead of mechanically. The conductive geotherm is [`geophysics`](../../geophysics/syllabus.md) 4.1's.

The Earth sheds about $46\ \text{TW}$, split roughly half and half between **radiogenic** heat (decay of $^{238}\text{U}$, $^{232}\text{Th}$ and $^{40}\text{K}$ — [intro-nuclear-engineering 1.3](../../intro-nuclear-engineering/lessons/01-03-radioactivity-decay-law.md)) and **primordial** heat left from accretion, core formation and ongoing inner-core crystallization. That last item closes a loop worth noticing: **the inner core freezing is what stirs the outer core, and the stirring is what runs the compass.** The budget is [`geophysics`](../../geophysics/syllabus.md) 4.2's.

## Picture

![A composite figure. On the left, two vertical columns share one true-scale depth axis running from the surface to the centre at 6371 kilometres: the first column is divided by composition into crust, mantle, outer core and inner core, the second by strength into lithosphere, asthenosphere, mesosphere, liquid outer core and solid inner core, with the two core boundaries at 2891 and 5150 kilometres lining up across both. Beside them, P speed, S speed and density are plotted against the same depth axis, showing S speed dropping to zero at the core-mantle boundary and returning in the inner core while density jumps by a factor of 1.8. An inset expands the top 700 kilometres, where the Moho at 35 kilometres is drawn as a red line cutting straight through the middle of the lithosphere band to show that the plate contains both crust and mantle, with the 410 and 660 kilometre boundaries labelled as phase changes rather than composition changes. Below, a small globe traces P and S rays from an earthquake focus, with a shaded band showing that no direct S arrives beyond 103 degrees and that P vanishes between 103 and 143 degrees before returning, refracted through the core.](assets/05-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — build the core from two numbers).** Take $M = 5.972\times10^{24}\ \text{kg}$, $R = 6371\ \text{km}$, and a core radius of $3480\ \text{km}$ read from seismology. Assume a mantle of uniform density $4500\ \text{kg/m}^3$. (a) What core density is required? (b) What fraction of Earth's mass is core? (c) Check the model against the observed moment of inertia factor $0.3307$, and say what the residual means.

**(a)** The core's volume fraction is the cube of its radius fraction:

$$x = \frac{3480}{6371} = 0.5462, \qquad x^3 = 0.1630 .$$

**The core is 16 percent of Earth's volume.** Mean density is the volume-weighted average:

$$\bar\rho = x^3\rho_c + (1-x^3)\rho_m$$

$$5513 = 0.1630\,\rho_c + 0.8370(4500) = 0.1630\,\rho_c + 3767$$

$$\rho_c = \frac{5513 - 3767}{0.1630} = \mathbf{10{,}700\ \text{kg/m}^3}.$$

**Compare with the candidates.** Iron at room pressure is $7870$; compressed to the $136$–$360\ \text{GPa}$ of the core it should reach $12{,}000$–$13{,}000$. Our $10{,}700$ is an average over the whole core and sits *below* pure compressed iron — which is exactly the modern conclusion: **the core is iron–nickel diluted by roughly 10 percent of light elements** (sulphur, oxygen, silicon, carbon are all candidates). Silicate rock, at $3$–$5$, is nowhere near.

**(b)** $$\frac{M_{\text{core}}}{M} = \frac{x^3\rho_c}{\bar\rho} = \frac{0.1630 \times 10{,}700}{5513} = \mathbf{0.317}.$$

**Sixteen percent of the volume, thirty-two percent of the mass.** (The accepted value is 32.3 percent — the two-layer model is doing well.)

**(c)** For concentric uniform shells, $C/MR^2 = \tfrac{2}{5}\left[\rho_c x^5 + \rho_m(1-x^5)\right]/\bar\rho$, and $x^5 = 0.0486$:

$$\frac{C}{MR^2} = 0.4 \times \frac{(10{,}700)(0.0486) + (4500)(0.9514)}{5513} = 0.4\times\frac{520 + 4281}{5513} = \mathbf{0.348}.$$

**Observed: $0.3307$. The model is 5 percent too high — and the sign of the error is informative.** Too high means the model's mass is not concentrated *enough*. Since the core's size and mass are already pinned by (a) and (b), the only remaining freedom is inside the mantle: **the mantle cannot be uniform, it must be denser at the bottom than at the top.** And it is — $3.4\ \text{g/cm}^3$ under the Moho, $5.6$ at the core–mantle boundary, from self-compression plus the 410 and 660 phase transitions.

**Notice what just happened.** A crude two-layer model reproduced the core's size and mass, then *failed by 5 percent* on an independent measurement — and the failure diagnosed its own missing ingredient. That is the actual method by which the radial density profile of the Earth was built.

**Example 2 (why you'd care — measure the core with a protractor).** Direct S waves disappear beyond an epicentral distance of $103^\circ$. Model the Earth crudely: uniform velocity, so rays travel in straight lines. (a) What core radius does the shadow onset imply? (b) Compare with the true $3480\ \text{km}$, and explain the discrepancy's sign. (c) What does the *existence* of faint P arrivals inside the shadow tell you?

**(a)** A straight ray from the focus that just grazes the core is a chord of the Earth tangent to the core sphere. For a chord subtending a central angle $\Delta$, the perpendicular distance from the centre is $R\cos(\Delta/2)$, and for the grazing ray that distance *is* the core radius:

$$r_c = R\cos\!\left(\frac{\Delta}{2}\right) = 6371\cos(51.5^\circ) = 6371 \times 0.6225 = \mathbf{3966\ \text{km}}.$$

**With a protractor and no physics beyond geometry, you get the core's size to 14 percent.**

**(b)** The true radius is $3480\ \text{km}$, so the straight-ray estimate is **too large**:

$$\frac{3966}{3480} = 1.14 .$$

Run it backwards to see why. A straight chord grazing a $3480\ \text{km}$ core would surface at

$$\Delta = 2\arccos\!\left(\frac{3480}{6371}\right) = 2(56.9^\circ) = 113.8^\circ ,$$

but the real grazing ray gets only to $103^\circ$. **Real rays cover less angular distance than straight ones for the same bottoming depth, so they must be curving back toward the surface** — which is precisely what Snell's law does when velocity increases with depth. **The error is not noise; it is a measurement of mantle velocity structure.** Removing the straight-ray assumption and inverting travel times properly is [`geophysics`](../../geophysics/syllabus.md) 1.4's Herglotz–Wiechert method, and it returns $3480\ \text{km}$.

**(c)** In 1936 Inge Lehmann noticed weak P arrivals at stations inside the shadow zone, where a single homogeneous liquid core predicts nothing at all. **Something inside the core was sending energy back out**, which requires a further velocity increase — a boundary at $5150\ \text{km}$ where $V_p$ rises from $10.4$ to $11.0\ \text{km/s}$. That is the inner core, and it was found by taking seriously a handful of arrivals that a simpler model said should not exist. Decades later, S waves were shown to propagate through it, confirming it is solid.

**Which raises the good question: why is the *inner* core solid when the outer core, which is cooler, is liquid?** Because melting temperature rises with pressure faster than the geotherm does. Both curves climb inward; at $329\ \text{GPa}$ they cross. **The inner core is not frozen because it is cold — it is frozen because it is squeezed**, and it is slowly growing as the Earth cools, which is what powers the dynamo.

## Watch out

- **You might think the lithosphere is the crust.** They are answers to different questions. The lithosphere is everything strong enough to move as one rigid piece, and under old ocean floor it is about $7\ \text{km}$ of crust on $93\ \text{km}$ of mantle. **The Moho is a chemical boundary buried inside a mechanical layer**, and only one of the two matters for plate tectonics.
- **You might think the mantle is molten.** S waves cross all $2891\ \text{km}$ of it, so it has rigidity everywhere; it is solid rock that creeps ([1.3](01-03-how-the-earth-melts.md), [2.3](02-03-driving-mechanism.md)). **The one liquid layer in the Earth is the outer core, it starts at 2891 km, and nothing has ever erupted from it.**
- **You might read the 410 and 660 as places where the rock changes.** They are places where the *same* rock repacks into a denser structure ([1.1](01-01-what-a-mineral-is.md)'s point that structure and composition are separate variables). The proof is that the 660 shifts up and down with temperature — a compositional boundary could not.
- **You might picture a shadow zone as somewhere no waves arrive.** The S shadow is total for *direct* S, but S reflected off the core–mantle boundary arrives fine, and P reappears beyond $143^\circ$ after refracting through the core. The shadows are missing *phases*, not silence.
- **You might treat the crust as a major part of the Earth.** It is under 1 percent of the volume and about $0.4$ percent of the mass. **Essentially all of geology, all of life, and every rock in Module 1 happens in the top half-percent** — which is a fact about our vantage point, not about the planet.
- **You might expect the surface geotherm to keep going.** Extrapolating $25\ ^\circ\text{C/km}$ puts the base of the plate at $2500\ ^\circ\text{C}$ instead of $1300$. The gradient collapses by two orders of magnitude once convection takes over, and **where it collapses is itself a boundary**.

## One-liner

> The Earth is twice as dense as its own surface rock and spins like a body with its mass piled inward, S waves stop dead at $2891\ \text{km}$ and come back at $5150$ — and those four numbers, from four unrelated measurements, build the same layered planet twice over: once by what it is made of, once by how it behaves, with the boundaries in different places.

## Problems

**P1 (🟢)** Take the core's mass as $1.93\times10^{24}\ \text{kg}$ and its radius as $3480\ \text{km}$; $G = 6.674\times10^{-11}\ \text{N}\,\text{m}^2\text{/kg}^2$. (a) Compute $g$ at the core–mantle boundary. (b) Using a mean mantle density of $4500\ \text{kg/m}^3$ and a mean $g$ of $10.2\ \text{m/s}^2$, estimate the pressure at the core–mantle boundary and compare with the accepted $136\ \text{GPa}$. (c) A uniform sphere has $g \propto r$, which would give $g = 5.4\ \text{m/s}^2$ at the core–mantle boundary. Your answer to (a) is roughly twice that. Explain, and say what this does to the pressure estimate.

**P2 (🟡 — inference from data)** A radial Earth model reports:

| Depth (km) | $V_p$ (km/s) | $V_s$ (km/s) | $\rho$ (g/cm³) |
|---|---|---|---|
| 30 | 6.8 | 3.9 | 2.90 |
| 40 | 8.1 | 4.5 | 3.38 |
| 400 | 8.9 | 4.8 | 3.54 |
| 450 | 9.5 | 5.1 | 3.72 |
| 2850 | 13.7 | 7.3 | 5.57 |
| 2950 | 8.1 | 0 | 9.90 |
| 5200 | 11.0 | 3.5 | 12.80 |

(a) Name the boundary crossed between each consecutive pair of rows. (b) Classify each as compositional or not, and give the reason in each case. (c) One row in this table is, on its own, the strongest single piece of evidence that the Earth is chemically differentiated rather than a well-mixed rock ball. Which, and why?

**P3 (🔴 — bridges to [2.2](02-02-plate-boundaries.md))** The asthenosphere has density $3.25\ \text{g/cm}^3$. An old oceanic plate is $7\ \text{km}$ of crust at $3.00$ over mantle lithosphere to $100\ \text{km}$ at $3.30$. A continental plate is $40\ \text{km}$ of crust at $2.75$ over mantle lithosphere to $200\ \text{km}$ at $3.35$. (a) Compute the mean density of each plate and say which can subduct. (b) For each plate, what fraction of its mass is mantle rather than crust — and what does that say about the phrase "a plate of crust"? (c) Young lithosphere near a ridge is only $30\ \text{km}$ thick — $7\ \text{km}$ of the same crust over hot mantle lithosphere at $3.26$. Compute its mean density and explain what this predicts about subducting young seafloor.

<details>
<summary>Solutions</summary>

**P1 (a)** Only the mass *inside* radius $r$ pulls you at $r$ (the shell theorem), so at the core–mantle boundary only the core counts:

$$g = \frac{GM_{\text{core}}}{r_c^2} = \frac{(6.674\times10^{-11})(1.93\times10^{24})}{(3.48\times10^{6})^2} = \frac{1.288\times10^{14}}{1.211\times10^{13}} = \mathbf{10.6\ \text{m/s}^2}.$$

**(b)** $$P = \bar\rho\,\bar g\,d = (4500)(10.2)(2.891\times10^{6}) = \mathbf{1.33\times10^{11}\ \text{Pa}} = 133\ \text{GPa}.$$

Against $136\ \text{GPa}$ — **within 2 percent**, from three rounded numbers and a multiplication. (It is slightly low because the deep mantle is denser than $4500$; the shallow mantle is lighter, and the two nearly cancel.)

**(c)** In a *uniform* sphere the mass enclosed grows as $r^3$ while the distance-squared grows as $r^2$, so $g \propto r$ and gravity falls steadily to zero at the centre. **The Earth is not uniform, and this is exactly the measurement that shows it.** With a third of the planet's mass packed into the innermost 16 percent of its volume, the mass enclosed barely drops as you descend through the mantle, while $r^2$ shrinks fast. The two effects nearly cancel:

$$g: \; 9.82\ \text{m/s}^2 \text{ at the surface} \;\longrightarrow\; \mathbf{10.6\ \text{m/s}^2 \text{ at } 2891\ \text{km}}$$

**Gravity is essentially constant — slightly *increasing* — through the entire mantle**, which is a direct, independent readout of the concentrated core. The consequence for (b) is that the pressure integral $P = \int \rho g\,dr$ can use a nearly constant $g$ through the mantle, which is why the crude estimate works so well. Had gravity fallen off linearly, the same calculation would have given roughly half the pressure and been badly wrong.

**P2 (a)**

| Rows | Boundary |
|---|---|
| 30 → 40 | the **Moho** |
| 400 → 450 | the **410 km** discontinuity |
| 2850 → 2950 | the **core–mantle boundary** |
| 2950 → 5200 | the **inner-core boundary** |

**(b)**

- **Moho — compositional.** $V_p$ jumps $6.8 \to 8.1$ and density $2.90 \to 3.38$ over a few hundred metres. Crustal basalt/granodiorite gives way to mantle peridotite; nothing about the crust's minerals can be repacked into a peridotite velocity.
- **410 km — not compositional.** A modest step ($8.9\to9.5$, $3.54\to3.72$, about 5 percent in density) at exactly the pressure at which laboratory olivine converts to wadsleyite. Same chemistry, denser structure.
- **Core–mantle boundary — compositional, and the most extreme change in the planet.** $V_s$ goes to **zero**, $V_p$ *drops* from $13.7$ to $8.1$, and density nearly doubles, $5.57 \to 9.90$. Silicate rock gives way to liquid iron alloy. Note that this row is simultaneously a compositional *and* a mechanical boundary — the only place in the Earth where the two schemes coincide.
- **Inner-core boundary — not compositional.** Broadly the same iron alloy; $V_s$ returns from $0$ to $3.5$ and density steps up only modestly. **This is a change of state — freezing — not of chemistry.**

**(c)** **Row 2950 km: $V_s = 0$ with $\rho = 9.90$.**

Two facts arrive in one line, and neither can be explained away.

$$V_s = 0 \;\Longrightarrow\; \mu = 0 \;\Longrightarrow\; \textbf{liquid}$$

$$\rho = 9.90\ \text{g/cm}^3 \;\Longrightarrow\; \textbf{not any silicate, at any pressure}$$

A well-mixed rock ball of mean density $5.51$ would have no layer at twice that density and no layer without rigidity. **A liquid metal layer occupying the middle third of the mass is only explicable as gravitational sorting: dense metal drained to the centre while silicate floated.** That is differentiation, and this row is its fingerprint. (Compare the Moon, whose moment of inertia factor of $0.394$ says almost no sorting happened — the mechanism is [`planetary-science`](../../planetary-science/syllabus.md) 2.1's.)

**P3 (a)** Thickness-weighted means:

$$\rho_{\text{ocean}} = \frac{7(3.00) + 93(3.30)}{100} = \frac{21.0 + 306.9}{100} = \mathbf{3.279\ \text{g/cm}^3}$$

$$\rho_{\text{cont}} = \frac{40(2.75) + 160(3.35)}{200} = \frac{110 + 536}{200} = \mathbf{3.230\ \text{g/cm}^3}$$

Against an asthenosphere at $3.25$:

$$3.279 > 3.25 \;\Rightarrow\; \textbf{oceanic lithosphere sinks}, \qquad 3.230 < 3.25 \;\Rightarrow\; \textbf{continental lithosphere floats}.$$

**And notice how thin the margins are** — plus and minus about 1 percent. The single most consequential fact in plate tectonics, that oceans are recycled every $200\ \text{Ma}$ while continents survive for $4\ \text{Ga}$, rides on a density difference of a couple of percent.

**(b)** Mass per unit area is thickness times density:

$$\text{oceanic: } \frac{306.9}{327.9} = \mathbf{93.6\ \text{percent mantle}}, \qquad \text{continental: } \frac{536}{646} = \mathbf{83.0\ \text{percent mantle}}$$

(By thickness alone, 93 and 80 percent.)

**So "a plate of crust" is wrong by an order of magnitude.** A plate is a slab of cold mantle with a thin chemical rind on top, and the rind is along for the ride. This is why the driving forces in [2.3](02-03-driving-mechanism.md) are computed from the *lithosphere's* thickness and density contrast and never mention the crust, and why the thing that sinks at a trench is overwhelmingly mantle, not basalt.

**(c)** $$\rho_{\text{young}} = \frac{7(3.00) + 23(3.26)}{30} = \frac{21.0 + 75.0}{30} = \mathbf{3.20\ \text{g/cm}^3} < 3.25 .$$

**Young oceanic lithosphere is buoyant and resists subduction.** The crust is a fixed $7\ \text{km}$ regardless of age, so in a thin young plate that light basaltic layer is nearly a quarter of the column instead of $7$ percent — and the mantle part beneath it is still hot and not yet dense. Only as the plate cools, thickens and its mantle section grows does the average tip past the asthenosphere.

**Three real predictions follow, and all three are observed.**

1. **Oceanic lithosphere must age roughly $20$–$30\ \text{Myr}$ before it can subduct on its own.** Ridges do not spontaneously turn into trenches.
2. **Where young, hot seafloor is forced down anyway, subduction is shallow or flat** — the slab does not have the negative buoyancy to hang steeply. Flat-slab segments beneath Peru and central Chile coincide with young, thickened seafloor being consumed.
3. **Slab pull grows with plate age**, which is the density side of the correlation between plate speed and subducting margin length in [2.3](02-03-driving-mechanism.md).

</details>

## Flashback

**From Lesson 2.7 (earthquakes & seismic hazard):** A shallow $M_w\,7.1$ mainshock is followed by $240$ recorded aftershocks of $M \ge 2.5$ in the first day. Assume Omori's law $n(t) = K/(t+c)$ with $p = 1$ and $c = 0.05\ \text{days}$, and a regional background rate of $0.02$ events per day at $M \ge 2.5$. (a) Find $K$, then the number of aftershocks expected from day 1 to day 10 and from day 10 to day 100. (b) Estimate the largest aftershock. (c) When does the sequence fade into the background, and what should you tell a resident who asks on day 30 whether it is over?

<details>
<summary>Solution</summary>

**(a)** Integrate the rate over the first day to fix $K$:

$$240 = \int_0^1 \frac{K\,dt}{t + 0.05} = K\ln\!\left(\frac{1.05}{0.05}\right) = K\ln(21) = 3.045\,K \;\Longrightarrow\; K = \mathbf{78.8\ \text{per day}}.$$

$$N(1 \to 10) = K\ln\!\left(\frac{10.05}{1.05}\right) = 78.8(2.259) = \mathbf{178}$$

$$N(10 \to 100) = K\ln\!\left(\frac{100.05}{10.05}\right) = 78.8(2.298) = \mathbf{181}$$

**Ninety days produce the same number of aftershocks as the preceding nine.** That is the signature of a $1/t$ law: equal counts in equal *ratios* of elapsed time, so the sequence thins logarithmically and never has a natural end.

**(b)** Båth's law puts the largest aftershock about $1.2$ magnitude units below the mainshock:

$$M_{\text{max}} \approx 7.1 - 1.2 = \mathbf{5.9}$$

— a damaging earthquake in its own right, and the scatter around Båth's law is large, so $6.3$ would not be surprising.

**(c)** Set the Omori rate equal to the background:

$$\frac{78.8}{t} = 0.02 \;\Longrightarrow\; t = 3940\ \text{days} \approx \mathbf{11\ \text{years}}.$$

**What to tell the resident.** By day 30 the rate is $78.8/30 \approx 2.6$ events per day, down from $240$ on day one — a 99 percent drop, which is why it *feels* over. But it is more than a hundred times background, and by the arithmetic in (a) a substantial number of aftershocks are still to come. Two points are worth making honestly:

- **Elevated aftershock hazard lasts years, not weeks**, and decays as $1/t$ rather than switching off.
- **The aftershocks have not relieved anything.** From [2.7](02-07-earthquakes-seismic-hazard.md), roughly 5 percent of sequences are followed by something larger, at which point the "mainshock" is retroactively a foreshock — the 2023 Türkiye pair being the recent case. Slip loads the edges of the ruptured patch, so an active sequence raises the short-term probability of a larger event rather than lowering it.

</details>

## Connections

- **Backward:** the compositional/mechanical split was asserted in [2.3](02-03-driving-mechanism.md) so that "a plate is lithosphere" would make sense; this lesson supplies the evidence and the depths. [2.1](02-01-evidence-for-drift.md)'s Wadati–Benioff zones are the same seismic arrivals used at regional scale, and its magnetic reversals are this lesson's dynamo caught in the act. [1.3](01-03-how-the-earth-melts.md)'s "the mantle is solid" is the S-wave argument in one sentence; [2.6](02-06-mountain-building.md)'s isostasy needs the crust/mantle density contrast tabulated here.
- **Forward:** [5.2](05-02-earth-history-hadean-proterozoic.md) asks how the layers got there — accretion, the Moon-forming impact, and core segregation within the first $30$–$50\ \text{Myr}$ — and needs the core's mass fraction as the target the process had to hit. [5.4](05-04-resources-geologic-hazards.md) draws on the mantle's role as the ultimate source of the metals concentrated in the crust. Every hazard in Module 2 is powered by the $46\ \text{TW}$ heat budget sketched at the end.
- **Sideways:** the wave physics, travel-time inversion and tomography are [`geophysics`](../../geophysics/syllabus.md) 1.2–1.5, the dynamo 3.2, and the conductive geotherm and heat budget 4.1–4.2 — this lesson uses their results and owns only the inference chain. Differentiation as a process that any molten planet undergoes is [`planetary-science`](../../planetary-science/syllabus.md) 2.1, where the moment-of-inertia argument is run on Mercury, the Moon and Mars. The moduli behind $V_p$ and $V_s$ are [materials-science 4.1](../../materials-science/lessons/04-01-elastic-behavior-stress-strain.md), and the radiogenic half of the heat budget is [intro-nuclear-engineering 1.3](../../intro-nuclear-engineering/lessons/01-03-radioactivity-decay-law.md)'s decay law integrated over four billion years.
