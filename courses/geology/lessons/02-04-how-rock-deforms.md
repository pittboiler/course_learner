# Geology · Lesson 2.4: How Rock Deforms

> ⏱ ~15 min · Module 2: Plate Tectonics & the Deforming Crust · Builds on: [2.3](02-03-driving-mechanism.md), [1.6](01-06-metamorphic-rocks-rock-cycle.md) · Unlocks: [2.5](02-05-folds-faults-structures.md) (folds, faults & structures)

## Why this matters

[2.3](02-03-driving-mechanism.md) supplied the forces — slab pull, ridge push, a mantle that creeps. This lesson supplies the response. Push on the edge of a continent and the rock does one of two utterly different things: it **snaps**, releasing stored energy as an earthquake, or it **flows**, bending into a fold without ever losing cohesion.

**Which one happens is not a property of the rock.** The same limestone that shatters under a hammer at the outcrop is, three hundred metres down the same bed, folded into a smooth hinge. Nothing about the limestone changed. What changed were the *conditions*, and there are exactly four of them.

Getting this right is what makes the rest of the module readable. It is why seismicity in continental crust stops at a depth, why [2.5](02-05-folds-faults-structures.md) has two entirely separate families of structure, why [2.6](02-06-mountain-building.md) can pile a fold-and-thrust belt on top of a flowing lower crust, and — least expected — why injecting wastewater two kilometres underground can start earthquakes on a fault that has sat quietly for ten million years.

## The idea

**Stress is what you do to the rock; strain is what the rock does about it.** Stress is force per unit area, and it has a direction — three of them, in fact. Strain is the resulting change in shape or volume.

**The first thing to separate is pressure from squeezing.** Take a cube of granite and press it equally hard on all six faces. It gets very slightly smaller and does absolutely nothing else. Now press hard on two opposite faces only. *That* is what deforms it. The part of the stress that is the same in every direction — **confining pressure** — changes volume and nothing more. The part that differs between directions — **differential stress** — changes shape, and shape change is what geology is about.

That distinction is why the deep crust, sitting under thousands of atmospheres, is not being crushed into powder. Pressure alone does nothing interesting. **It is the *difference* between the largest and smallest stress that folds and faults rock**, and confining pressure's real role turns out to be the opposite of destructive: it is what *stops* the rock from breaking.

**Three responses, in order of how far you push:**

- **Elastic** — the rock bends and springs back. Reversible, and the energy is stored. A locked fault storing a century of plate motion is a rock in the elastic regime, and [2.7](02-07-earthquakes-seismic-hazard.md) is entirely about the moment that storage ends.
- **Brittle** — the rock fractures. Cohesion is lost, deformation localizes onto a surface, and it happens fast.
- **Ductile** — the rock deforms permanently *without* breaking. It flows. Deformation is distributed through the whole volume rather than concentrated on a plane.

**Ductile does not mean molten.** No liquid is involved — that is [1.3](01-03-how-the-earth-melts.md)'s subject. This is solid-state creep: atoms migrating, dislocations gliding and climbing, grains recrystallizing, all at temperatures well below the solidus.

**Now the four controls, which are the whole predictive content of this lesson:**

1. **Confining pressure.** Higher pressure suppresses fracture — a crack cannot open against the surrounding squeeze — and promotes flow. **This is the single most important control**, and since pressure increases steadily with depth, depth is the master variable.
2. **Temperature.** Also rises with depth. Heat lets atoms move, and creep rates depend on temperature *exponentially*. Both knobs turn the same way as you go down, which is why the changeover from breaking to flowing is reasonably sharp.
3. **Strain rate.** Fast loading favours fracture, slow loading favours flow. The honest version of the everyday analogy: silly putty shatters under a hammer and sags under its own weight — same material, two answers, decided by how fast you ask.
4. **Rock type and fluids.** Quartz-rich rock creeps at far lower temperature than olivine-rich rock. And **pore fluid pressure pushes outward on the walls of every crack and pore, cancelling part of the confining squeeze** — which flips the first control into reverse and makes rock brittle where it should have been ductile.

**Everything converges on one number: the depth of the brittle–ductile transition, roughly 10–15 km in typical continental crust.** Above it, rock breaks — so that is where earthquakes are. Below it, rock flows — so that is where folds and mylonites are made.

## The formal version

**Stress.** $\sigma = F/A$, force per unit area, in pascals; crustal stresses are conveniently megapascals ($1\ \text{MPa} = 10^6\ \text{Pa}$). At a point, the state of stress is captured by three mutually perpendicular **principal stresses** $\sigma_1 \ge \sigma_2 \ge \sigma_3$, on whose planes the shear stress vanishes. The tensor machinery behind that statement belongs to [`geophysics`](../../geophysics/syllabus.md) 1.1 and [materials-science 4.1](../../materials-science/lessons/04-01-elastic-behavior-stress-strain.md); you have already turned its handle in [mechanics-of-materials 4.2](../../mechanics-of-materials/lessons/04-02-mohrs-circle.md).

**Sign convention — flag this now.** Engineering takes tension positive. **Geology takes compression positive**, because essentially everything in the crust is in compression and nobody wants a page of minus signs. When you carry a formula across from [materials-science 4.1](../../materials-science/lessons/04-01-elastic-behavior-stress-strain.md), the signs flip.

**The two pieces of a stress state:**

$$P = \frac{\sigma_1 + \sigma_2 + \sigma_3}{3} \qquad\text{(mean stress, i.e. confining pressure)}$$

$$\sigma_d = \sigma_1 - \sigma_3 \qquad\text{(differential stress)}$$

*In words: the average of the three principal stresses squeezes volume; their spread distorts shape.*

**The three geologic stress regimes** are named by which principal stress is vertical, and each produces its own structures in [2.5](02-05-folds-faults-structures.md):

| Regime | Arrangement | Result |
|---|---|---|
| **Compression** | $\sigma_1$ horizontal, $\sigma_3$ vertical | shortening: folds, reverse and thrust faults |
| **Tension (extension)** | $\sigma_1$ vertical, $\sigma_3$ horizontal | stretching: normal faults, rifts |
| **Shear** | $\sigma_1$ and $\sigma_3$ both horizontal | strike-slip faults |

**Strain.** Elongation $e = \Delta \ell / \ell_0$ (dimensionless); shear strain $\gamma = \tan\psi$ for an angular deflection $\psi$. **Strain rate** $\dot{e} = de/dt$, in $\text{s}^{-1}$ — the quantity that separates the laboratory from the Earth.

**Elastic behaviour.** $\sigma = E\,e$, with $E$ Young's modulus; crustal rocks run $E \approx 50$–$100\ \text{GPa}$. Elastic strains in rock are tiny, of order $10^{-4}$ to $10^{-3}$, which is exactly why an earthquake's slip is metres and not kilometres.

**Brittle failure — the Coulomb criterion.** A fracture forms when the shear stress on some plane exceeds the resistance of that plane:

$$\tau = C + \mu_i\,\sigma_n$$

where $\tau$ is shear stress on the plane, $\sigma_n$ the normal stress across it, $C$ the cohesion (roughly $10$–$50\ \text{MPa}$ for intact rock, and **essentially zero on a pre-existing fault**), and $\mu_i$ the coefficient of internal friction, empirically $0.6$–$0.85$ for almost every rock type.

*In words: a plane slips when the sideways push on it beats friction plus glue — and friction grows with how hard the plane is clamped shut.* Since the clamping force grows with depth, **the crust gets stronger downward as long as it stays brittle.**

**Ductile flow — the creep law.** For dislocation creep, the mechanism [materials-science 4.2](../../materials-science/lessons/04-02-plastic-deformation-schmid.md) and [4.4](../../materials-science/lessons/04-04-failure-fracture-fatigue-creep.md) own outright:

$$\dot{e} = A\,\sigma_d^{\,n}\exp\!\left(-\frac{Q}{RT}\right)$$

with $n \approx 3$, activation energy $Q \approx 150$–$500\ \text{kJ/mol}$, $R$ the gas constant and $T$ absolute temperature.

*In words: flow rate goes roughly as the cube of differential stress and exponentially with temperature.* **The exponential is the important term.** Because strain rate is fixed by plate motion rather than chosen, invert the law for stress: the differential stress a rock can support falls off exponentially as it gets hotter. **The crust gets weaker downward as soon as creep takes over.**

$$\boxed{\;\text{friction: strength} \uparrow \text{with depth} \qquad \text{creep: strength} \downarrow \text{with depth}\;}$$

**Their crossing point is the brittle–ductile transition**, and it is simultaneously the depth of maximum crustal strength.

**Lithostatic pressure — do not quote it, compute it.** The vertical stress at depth $z$ is the weight of the overlying column:

$$\sigma_v = \rho g z, \qquad \rho = 2700\ \text{kg/m}^3,\ g = 9.81\ \text{m/s}^2$$

$$\frac{\sigma_v}{z} = 2700 \times 9.81 = 2.65\times10^{4}\ \text{Pa/m} = 26.5\ \text{MPa/km}$$

**Roughly 26–27 MPa per kilometre** — worth memorizing, since it converts every depth in this course into a pressure.

**Effective stress — the relation that explains the most.** Fluid in the pores pushes outward with pressure $P_f$, and friction responds only to what is left over:

$$\boxed{\;\sigma_n^{\text{eff}} = \sigma_n - P_f \qquad\Longrightarrow\qquad \tau = C + \mu_i\,(\sigma_n - P_f)\;}$$

*In words: pore fluid does not lubricate the fault — it unclamps it.* The friction coefficient barely changes; what changes is how hard the two walls are pressed together. Under normal (hydrostatic) conditions the pore pressure is the weight of a water column, $1000 \times 9.81 = 9.81\ \text{MPa/km}$, so the ratio

$$\lambda = \frac{P_f}{\sigma_v} \approx \frac{9.81}{26.5} = 0.37$$

is the baseline. **Anything that raises $\lambda$ above 0.37 — compaction of a sealed layer, dehydration of a subducting slab, or a well pumping fluid in — moves the rock toward failure without changing the tectonic stress at all.**

## Picture

![Two panels. On the left, differential stress plotted against strain for one rock deformed at three confining pressures: at zero confinement the curve rises steeply, peaks near 130 megapascals and collapses as the sample fractures; at 100 megapascals confinement it reaches about 310 megapascals with a rounded peak and gradual weakening; at 300 megapascals confinement it yields near 400 megapascals and then flows along a nearly flat plateau to large strain without breaking. On the right, crustal strength plotted against depth: a red frictional branch rises linearly from zero at the surface to about 420 megapascals at 13 kilometres, then a blue creep branch falls steeply back toward zero by about 25 kilometres. A dashed line at 13 kilometres marks the brittle-ductile transition, red dots representing earthquake foci cluster along the frictional branch above it, and a green squiggle labelled folds and mylonite sits below it. Geotherm temperatures of 100, 300 and 500 degrees Celsius are marked at 4, 13 and 22 kilometres for a gradient of 25 degrees per kilometre.](assets/02-04-fig1.svg)

Read the right panel as the answer to "how strong is the crust?" — a question with no single answer, only a profile. The peak is not a curiosity: **the strongest part of the continental crust sits at the brittle–ductile transition**, which is precisely where large earthquakes tend to nucleate.

## Worked examples

**Example 1 (mechanical — the state of a rock at 12 km, and how fast it is being deformed).** Continental crust, mean density $2700\ \text{kg/m}^3$, geotherm $25\ ^\circ\text{C/km}$ from a surface temperature of $10\ ^\circ\text{C}$, pore fluids connected to the surface. (a) Find the vertical stress, pore pressure and effective vertical stress at $12\ \text{km}$. (b) Find the temperature there and say what regime the rock is in. (c) A transform plate boundary takes $50\ \text{mm/yr}$ of motion across a deforming zone $100\ \text{km}$ wide. Compute the strain rate and compare it to a laboratory test.

**(a)** $$\sigma_v = \rho g z = 2700 \times 9.81 \times 12000 = 3.18\times10^{8}\ \text{Pa} = \mathbf{318\ \text{MPa}}$$

$$P_f = \rho_w g z = 1000 \times 9.81 \times 12000 = 1.18\times10^{8}\ \text{Pa} = \mathbf{118\ \text{MPa}}$$

$$\sigma_v^{\text{eff}} = 318 - 118 = \mathbf{200\ \text{MPa}}, \qquad \lambda = \frac{118}{318} = 0.37\ \checkmark$$

The rock is clamped by 200 MPa of *effective* pressure — about 2000 atmospheres — and the fluid has already cancelled more than a third of the load.

**(b)** $$T = 10 + 25 \times 12 = \mathbf{310\ ^\circ\text{C}}$$

Quartz — the weak link in ordinary continental crust — begins to deform plastically at about $300\ ^\circ\text{C}$. **So 12 km with this geotherm is the transition itself**: quartz has started to flow, feldspar (which needs $\approx 450\ ^\circ\text{C}$) has not. The rock is a mixture of a flowing framework and rigid grains, which is exactly the microstructure of a mylonite.

**(c)** $$\dot{e} = \frac{v}{w} = \frac{0.050\ \text{m/yr}}{1.0\times10^{5}\ \text{m}} = 5\times10^{-7}\ \text{yr}^{-1}$$

$$\dot{e} = \frac{5\times10^{-7}}{3.16\times10^{7}\ \text{s/yr}} = \mathbf{1.6\times10^{-14}\ \text{s}^{-1}}$$

A rock-mechanics press runs at about $10^{-5}\ \text{s}^{-1}$. The ratio is

$$\frac{10^{-5}}{1.6\times10^{-14}} \approx 6\times10^{8}$$

— **nearly nine orders of magnitude**, and every published strength value from a laboratory is therefore an upper bound on what the Earth actually needs. It also gives a feel for geologic time: at $5\times10^{-7}\ \text{yr}^{-1}$, accumulating one percent strain takes

$$\frac{0.01}{5\times10^{-7}} = \mathbf{20{,}000\ \text{years}}.$$

Meanwhile in 200 years — a typical earthquake recurrence interval — the same zone accumulates $10^{-4}$ of strain, which across 100 km is 10 m of displacement. **That is the elastic budget a great earthquake spends** ([2.7](02-07-earthquakes-seismic-hazard.md)).

**Example 2 (why you'd care — how a well starts an earthquake).** A pre-existing fault sits at $4\ \text{km}$ depth in rock of density $2600\ \text{kg/m}^3$. Resolved on the fault plane: normal stress $\sigma_n = 100\ \text{MPa}$, shear stress $\tau = 30\ \text{MPa}$. Take $C = 0$ (an old fault has no cohesion left) and $\mu_i = 0.6$. Pore pressure is initially hydrostatic. (a) Show the fault is stable. (b) Find the pore pressure that triggers slip, and the injection overpressure that implies. (c) Interpret.

**(a)** Hydrostatic pore pressure at 4 km:

$$P_f = 1000 \times 9.81 \times 4000 = 39.2\ \text{MPa}$$

$$\tau_{\text{strength}} = \mu_i(\sigma_n - P_f) = 0.6\,(100 - 39.2) = 0.6 \times 60.8 = \mathbf{36.5\ \text{MPa}}$$

Since $\tau = 30\ \text{MPa} < 36.5\ \text{MPa}$, **the fault holds**, with a margin of 6.5 MPa. It could hold for ten million years.

**(b)** Set strength equal to the driving shear stress:

$$30 = 0.6\,(100 - P_f) \;\Longrightarrow\; 100 - P_f = 50 \;\Longrightarrow\; P_f = \mathbf{50\ \text{MPa}}$$

$$\Delta P_f = 50 - 39.2 = \mathbf{10.8\ \text{MPa}}$$

Expressed as an equivalent column of water, that is

$$h = \frac{10.8\times10^{6}}{1000 \times 9.81} = \mathbf{1.1\ \text{km of extra head}},$$

and as a ratio, $\lambda$ rises only from $0.38$ to $0.49$ of the lithostatic load.

**(c)** **Roughly 11 MPa is a routine wellhead pressure.** Wastewater disposal wells, geothermal circulation and hydraulic fracturing all deliver overpressures of this order, and pressure diffuses outward through a permeable formation for kilometres over months to years ([3.6](03-06-groundwater-aquifers-karst.md) does the transport).

Note carefully **what did not change**: the tectonic stress is identical before and after. No new force was applied. All that happened is that the fault was *unclamped*, and the elastic strain energy it had been storing for geologic time was released in seconds. **This is why induced seismicity can produce earthquakes larger than the injected energy could ever account for** — the injection is a trigger, not a source. It also explains the observed lag of months between the start of injection and the first events, and why the events keep coming after injection stops: pressure diffusion is slow and does not reverse quickly.

The same relation, run the other way, explains natural deep faulting: a subducting slab dehydrating at 30 km ([2.2](02-02-plate-boundaries.md)) floods the surrounding rock with water it cannot escape, drives $\lambda$ toward 1, and permits brittle failure at depths where the rock should long since have gone ductile.

## Watch out

- **You might think brittle and ductile are rock types.** They are *conditions*. The same granite fractures at the surface and flows into a gneiss at 20 km. Ask about depth, temperature and strain rate before you ask what the rock is.
- **You might think great pressure crushes rock.** Confining pressure alone changes volume and nothing else, and it *inhibits* fracture by holding cracks shut. Only **differential stress** $\sigma_1 - \sigma_3$ deforms shape.
- **You might say pore fluid "lubricates" a fault.** It does not — $\mu_i$ stays near 0.6 wet or dry. It **unclamps**: $\sigma_n^{\text{eff}} = \sigma_n - P_f$ reduces the normal force, so the same friction coefficient yields less resistance.
- **You might read "ductile" as "partly melted."** No melt is present. It is solid-state creep — dislocation motion and recrystallization, [materials-science 4.2](../../materials-science/lessons/04-02-plastic-deformation-schmid.md). Melting is a different lesson ([1.3](01-03-how-the-earth-melts.md)) and a different depth.
- **You might carry a stress sign convention across unchanged.** Geology takes compression positive; [materials-science 4.1](../../materials-science/lessons/04-01-elastic-behavior-stress-strain.md) and [mechanics-of-materials 1.1](../../mechanics-of-materials/lessons/01-01-normal-shear-stress.md) take tension positive.
- **You might trust a laboratory strength.** Lab tests run nine orders of magnitude faster than the Earth. Rock that needs 200 MPa to deform in a press may need 20 MPa over ten million years.
- **You might expect the crust to weaken steadily downward.** It *strengthens* down to the brittle–ductile transition and only then collapses. The strongest crust is at its middle, not its top.

## One-liner

> Rock has no fixed answer to "break or flow?" — depth turns up confining pressure and temperature together, so friction strengthens the crust downward until creep overwhelms it at 10–15 km, and that crossing is why earthquakes stop where folds start.

## Problems

**P1 (🟢)** Continental crust of density $2700\ \text{kg/m}^3$, pore fluids connected to the surface. (a) Compute the lithostatic stress and the hydrostatic pore pressure at $15\ \text{km}$, and hence the effective vertical stress. (b) Compare the lithostatic stress to atmospheric pressure ($0.1\ \text{MPa}$). (c) A student concludes that a pressure that large must crush the rock. Correct them in one sentence.

**P2 (🟡 — data to conclusion)** Two continental regions are instrumented for a decade. Region A records earthquakes from the surface down to $18\ \text{km}$ and none deeper. Region B records earthquakes only down to $8\ \text{km}$. Both have quartz-dominated crust, in which plasticity begins near $300\ ^\circ\text{C}$; both have a surface temperature of $10\ ^\circ\text{C}$. (a) Estimate each region's geothermal gradient. (b) Taking thermal conductivity $k = 2.5\ \text{W}\,\text{m}^{-1}\text{K}^{-1}$, estimate each surface heat flow — [transport-phenomena 1.3](../../transport-phenomena/lessons/01-03-heat-mass-fluxes-fourier-fick.md) owns Fourier's law. (c) Which region is more likely to be an active rift, and why? (d) Rocks exhumed from a former depth of $12\ \text{km}$ are collected in both regions. Predict the deformation microstructure in each.

**P3 (🔴 — the mechanical paradox of thrust sheets)** Fold-and-thrust belts routinely move sheets of rock $5\ \text{km}$ thick and $100\ \text{km}$ long over nearly horizontal faults ([2.5](02-05-folds-faults-structures.md), [2.6](02-06-mountain-building.md)). Take $\rho = 2600\ \text{kg/m}^3$, $\mu_i = 0.6$, $C = 0$ on the basal fault, and a crushing strength of $200\ \text{MPa}$ for the rock of the sheet itself. (a) Compute the basal normal stress and the basal frictional resistance per unit area, assuming *dry* rock. (b) A push applied to the rear edge must be transmitted through a cross-section of thickness $5\ \text{km}$. What is the longest sheet that can be pushed before the rear edge crushes? (c) State the paradox. (d) Find the pore pressure ratio $\lambda$ that would allow a $100\ \text{km}$ sheet to move, and compare it to hydrostatic. (e) Name one thing you would look for in the field to test this.

<details>
<summary>Solutions</summary>

**P1 (a)** $$\sigma_v = 2700 \times 9.81 \times 15000 = 3.973\times10^{8}\ \text{Pa} = \mathbf{397\ \text{MPa}}$$

$$P_f = 1000 \times 9.81 \times 15000 = 1.472\times10^{8}\ \text{Pa} = \mathbf{147\ \text{MPa}}$$

$$\sigma_v^{\text{eff}} = 397 - 147 = \mathbf{250\ \text{MPa}}, \qquad \lambda = \frac{147}{397} = 0.37$$

(Sanity check against the gradient: $26.5 \times 15 = 397\ \text{MPa}\ \checkmark$, and $9.81 \times 15 = 147\ \text{MPa}\ \checkmark$.)

**(b)** $$\frac{397}{0.1} \approx \mathbf{4000\ \text{atmospheres}}.$$

**(c)** **That pressure is nearly the same in all directions, and pressure that is the same in all directions changes only volume** — the rock is compressed by a fraction of a percent and is otherwise perfectly happy; deformation requires differential stress $\sigma_1 - \sigma_3$, which is at most a few hundred MPa anywhere in the crust.

**P2 (a)** The base of seismicity marks the brittle–ductile transition, so $300\ ^\circ\text{C}$ sits at that depth:

$$\text{Region A:} \quad \frac{dT}{dz} = \frac{300 - 10}{18} = \mathbf{16\ ^\circ\text{C/km}}$$

$$\text{Region B:} \quad \frac{dT}{dz} = \frac{300 - 10}{8} = \mathbf{36\ ^\circ\text{C/km}}$$

**(b)** Fourier's law, $q = k\,dT/dz$:

$$q_A = 2.5 \times 0.0161 = 0.040\ \text{W/m}^2 = \mathbf{40\ \text{mW/m}^2}$$

$$q_B = 2.5 \times 0.0363 = 0.091\ \text{W/m}^2 = \mathbf{91\ \text{mW/m}^2}$$

These are not arbitrary numbers: **40 is the textbook value for a stable continental shield and 90 for an active rift**, so the inference is well calibrated against real measurements.

**(c)** **Region B.** Its geotherm is more than twice as steep, which requires either extra heat from below or a thinned lithosphere letting hot asthenosphere rise — both signatures of active extension ([2.2](02-02-plate-boundaries.md)). Region A is a cold, thick, stable craton. Note the corollary: **B's seismogenic layer is less than half as thick as A's**, so for the same fault length B caps out at a smaller maximum magnitude ([2.7](02-07-earthquakes-seismic-hazard.md)) — a hazard consequence falling straight out of a heat-flow measurement.

**(d)** Twelve kilometres is **above** A's transition (18 km) and **below** B's (8 km).

- **Region A** — brittle at 12 km: discrete fault surfaces, **cataclasite, fault breccia and gouge**, angular fragmented grains, slickensides, and veins where fluids used the fractures.
- **Region B** — ductile at 12 km: a **mylonite**, with a strong foliation and stretching lineation, ribboned and dynamically recrystallized quartz, feldspar surviving as rigid porphyroclasts (feldspar needs $\approx 450\ ^\circ\text{C}$, reached at 12 km only in B), and deformation spread across a wide shear zone rather than a surface.

**The general result: the depth of the seismic cutoff and the depth at which mylonites start are the same depth**, and either one can be used to estimate the other.

**P3 (a)** $$\sigma_n = \rho g h = 2600 \times 9.81 \times 5000 = 1.275\times10^{8}\ \text{Pa} = \mathbf{128\ \text{MPa}}$$

$$\tau_b = \mu_i \sigma_n = 0.6 \times 127.5 = \mathbf{76.5\ \text{MPa}}$$

**(b)** Per unit width, the driving force must overcome friction along the whole base:

$$F_{\text{needed}} = \tau_b\,L$$

and it is delivered through the rear cross-section of height $h$, so the required push stress is

$$\sigma_{\text{push}} = \frac{\tau_b L}{h}.$$

Setting $\sigma_{\text{push}} = 200\ \text{MPa}$:

$$L_{\max} = \frac{\sigma_c\,h}{\tau_b} = \frac{200 \times 5}{76.5} = \mathbf{13\ \text{km}}$$

**(c)** **The paradox (Hubbert and Rubey, 1959): the longest sheet you can push without pulverizing its own rear edge is about 13 km, and real thrust sheets are 100 km and longer.** The mechanics say the structure cannot exist. It plainly does.

**(d)** Work backwards. For $L = 100\ \text{km}$ the base may resist no more than

$$\tau_b = \frac{\sigma_c\,h}{L} = \frac{200 \times 5}{100} = 10\ \text{MPa}.$$

With effective stress,

$$\tau_b = \mu_i \sigma_n (1 - \lambda) \;\Longrightarrow\; 10 = 0.6 \times 127.5\,(1-\lambda) \;\Longrightarrow\; 1 - \lambda = \frac{10}{76.5} = 0.131$$

$$\lambda = \mathbf{0.87}$$

Hydrostatic is $\lambda = 0.385$ at this depth ($49.0/127.5$). So the required pore pressure is **more than twice hydrostatic and 87 percent of the way to lithostatic** — the fluid is carrying nearly the whole weight of the sheet, and the thrust essentially floats.

**(e)** Field tests, any one of which would do:

- **Look at what the décollement is made of.** The prediction is that basal thrusts should nucleate in **shale or evaporite** — low-permeability, high-fluid-content layers that can build and hold overpressure. Observed: they overwhelmingly do.
- **Look for fluid escape structures on the thrust plane** — fibrous quartz and calcite veins, especially bedding-parallel "beef" and crack-seal textures, which record fluid pressure repeatedly reaching the level that opens the rock.
- **Measure pore pressure in a modern analogue.** Boreholes into active accretionary wedges ([2.2](02-02-plate-boundaries.md)) find exactly the near-lithostatic pressures this calculation demands.

**The point worth keeping:** effective stress is not a correction term. It is the difference between a structure being impossible and being ordinary.

</details>

## Flashback

**From Lesson 2.1 (the evidence for drift):** A drill site on the flank of the Mid-Atlantic Ridge, $1200\ \text{km}$ from the axis, penetrates $320\ \text{m}$ of pelagic sediment before hitting basalt basement. Pelagic sediment accumulates at about $5\ \text{m}$ per million years ($\text{Ma}$, mega-annum). (a) Estimate the age of the basement and the half-spreading rate, in cm/yr. (b) The basin's half-width is about $3000\ \text{km}$; predict the age of the oldest Atlantic crust and compare it to the observed value of roughly $170\ \text{Ma}$. (c) Sediment thickening away from the ridge is suggestive, but the **symmetry** of the magnetic stripes is what settled the argument. Why is symmetry the stronger evidence?

<details>
<summary>Solution</summary>

**(a)** $$t = \frac{320\ \text{m}}{5\ \text{m}/\text{Ma}} = \mathbf{64\ \text{Ma}}$$

$$\text{half-rate} = \frac{1200\ \text{km}}{64\ \text{Ma}} = 18.75\ \text{km}/\text{Ma} = \mathbf{1.9\ \text{cm/yr}}$$

(Conversion: $1\ \text{km}/\text{Ma} = 10^{5}\ \text{cm}/10^{6}\ \text{yr} = 0.1\ \text{cm/yr}$.) The full spreading rate — both plates — is $\approx 3.8\ \text{cm/yr}$, a slow ridge, which is correct for the Atlantic.

**(b)** $$t_{\max} = \frac{3000}{18.75} = \mathbf{160\ \text{Ma}}$$

Against an observed $\approx 170\ \text{Ma}$: agreement to about 6 percent, from a sediment thickness and one accumulation rate. **Two independent clocks — sediment accumulation and the ocean's own dated basement — give the same answer, which is why the result held up.** And note what it costs a static Earth: if ocean basins were permanent, they should carry four billion years of sediment and four-billion-year-old floor. They carry neither.

**(c)** Because **a gradient has many possible causes and a mirror image has essentially one.**

Sediment thickening outward can be explained away without moving anything: accumulation might simply be slower over a ridge crest, or currents might sweep the high ground clean. The observation constrains, but it does not corner you.

The magnetic stripes do corner you. The pattern is a sequence of alternately magnetized crustal bands whose widths are *not* regular — a wide one, two narrow ones, a wide one — and that irregular barcode is **repeated in mirror image on the opposite flank**, matched band for band. Two facts follow at once:

1. **Something is manufacturing crust at the axis and carrying it away in both directions**, or the two flanks would have no reason to share a pattern at all, let alone reflect it.
2. **That something records the ambient field as it solidifies**, because the barcode matches the reversal sequence *independently dated from lava flows on land* — a third clock, from a different rock type on a different continent, agreeing.

No static Earth accounts for a mirror-symmetric, irregular, independently datable pattern. And the width of each band divided by the known duration of its polarity interval gives a spreading rate that agrees with the sediment estimate above. **This is what [2.1](02-01-evidence-for-drift.md) meant by the difference between evidence and proof: Wegener had correlations, and the ridge gave a mechanism that made numerical predictions three separate measurements could check.**

</details>

## Connections

- **Backward:** [2.3](02-03-driving-mechanism.md) called the asthenosphere weak "because it is near its solidus" — the creep law is why, since $\exp(-Q/RT)$ is what a high homologous temperature buys you. [1.6](01-06-metamorphic-rocks-rock-cycle.md)'s foliation is ductile strain made visible, and mylonite is the rock this lesson's lower half manufactures.
- **Forward:** [2.5](02-05-folds-faults-structures.md) is this lesson's two regimes turned into two catalogues of structure — faults from the brittle half, folds from the ductile half — with the three stress regimes above naming which fault you get. [2.6](02-06-mountain-building.md) stacks a brittle fold-and-thrust belt on a flowing lower crust, and the P3 paradox is what lets it. [2.7](02-07-earthquakes-seismic-hazard.md) takes the elastic regime and the seismogenic-layer thickness derived here; liquefaction there is effective stress driven to zero. [3.2](03-02-mass-wasting-slope-stability.md) reuses $\sigma_n^{\text{eff}} = \sigma_n - P_f$ verbatim for slope failure, and [3.4](03-04-glaciers-ice-ages.md) applies the same depth argument to ice — brittle crevasses above, flowing ice below.
- **Sideways:** the stress–strain curve and elastic moduli are [materials-science 4.1](../../materials-science/lessons/04-01-elastic-behavior-stress-strain.md); the dislocation physics behind creep is [4.2](../../materials-science/lessons/04-02-plastic-deformation-schmid.md) and [4.4](../../materials-science/lessons/04-04-failure-fracture-fatigue-creep.md); the full stress tensor and its rotation are [mechanics-of-materials 4.2](../../mechanics-of-materials/lessons/04-02-mohrs-circle.md) and [`geophysics`](../../geophysics/syllabus.md) 1.1. Effective stress is the same Terzaghi relation that soil mechanics is built on, and Fourier's law behind the geotherm is [transport-phenomena 1.3](../../transport-phenomena/lessons/01-03-heat-mass-fluxes-fourier-fick.md).
