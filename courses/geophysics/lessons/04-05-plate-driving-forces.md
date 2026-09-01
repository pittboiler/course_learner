# Geophysics · Lesson 4.5: Plate driving forces

> ⏱ ~15 min · Module 4: Heat flow, rheology & geodynamics · Builds on: [4.3](04-03-cooling-oceanic-lithosphere.md), [4.4](04-04-mantle-convection-rayleigh-number.md), [3.5](03-05-plate-kinematics-euler-poles.md) · Unlocks: [4.6](04-06-mantle-rheology-post-glacial-rebound.md)

## Why this matters

Wegener's continental drift was rejected for one reason: nobody could name a force strong enough to move continents. The rejection was scientifically correct — his proposed mechanisms, tidal forces and centrifugal "pole-fleeing", were wrong by many orders of magnitude, and the physicists who said so were right.

The forces are now identified and quantified, and the answer is not the one most people expect. **Plates are not pushed from ridges or dragged along by mantle currents beneath them. They are pulled down by their own cold, dense edges.** The evidence is a correlation you can check by eye in a table of plate velocities, and it reverses the intuitive picture of convection carrying passive plates on its back.

## The idea

**A plate has no inertia, so the forces on it must sum to zero.** Its Reynolds number is about $10^{-20}$: accelerations are utterly negligible, and a plate is always in instantaneous force balance. That is a strong constraint, and it means every driving force is exactly matched by a resisting one at all times.

**Ridge push is real but modest, and it is not a push from the ridge.** Elevated, hot lithosphere near a ridge exerts a horizontal pressure gradient on the colder, denser lithosphere away from it — a gravitational sliding force, distributed over the whole plate rather than applied at its edge. It works out to a few times $10^{12}$ newtons per metre of ridge.

**Slab pull is about ten times larger.** A subducted slab is cold and therefore dense, and it hangs into the mantle pulling the attached plate behind it. The density contrast is only a few percent, but the slab is 100 km thick and hundreds of kilometres long, and the integrated buoyancy force per metre of trench is of order $10^{13}$ N/m.

**The observational test is decisive and requires no modelling.** Plates with long subducting margins — Pacific, Nazca, Cocos — move at 7 to 10 cm/yr. Plates without them — Eurasia, Antarctica, North America, Africa — move at 1 to 2 cm/yr. **The correlation is with attached slab length, not with plate area, not with ridge length.** If basal drag from underlying mantle currents were the driver, the largest plates would move the fastest; Antarctica is enormous and nearly stationary.

**And almost all of the slab pull is spent locally.** If $4\times10^{13}$ N/m of force acted on a plate with only ridge push resisting it, plates would move at metres per second. They move at centimetres per year, so something is absorbing nearly all of it — viscous resistance to the slab's own descent through the mantle, and bending resistance at the trench. **Slab pull is enormous, and the net force transmitted to the plate is small.**

## The formal version

**Force balance.** For each plate,

$$\mathbf F_{RP} + \mathbf F_{SP} + \mathbf F_{DF} + \mathbf F_{\text{other}} = \mathbf 0,$$

with forces conventionally quoted **per unit length of boundary**, in N/m.

**Ridge push.** Integrating the horizontal pressure difference between a ridge-crest column and one of age $t$:

$$F_{RP} = g\rho_m\alpha\,\Delta T\left(1 + \frac{2\rho_m\alpha\Delta T}{\pi(\rho_m-\rho_w)}\right)\kappa t.$$

*In words: ridge push grows linearly with the age of the plate at the trench, because an older plate has cooled more and the density contrast has had longer to accumulate.* With $\alpha = 3\times10^{-5}$, $\Delta T = 1300$ K, $\rho_m = 3300$, $\rho_w = 1000$, $\kappa = 10^{-6}$ and $t = 100$ Myr this gives about $4\times10^{12}$ N/m.

**Slab pull.** For a slab of thickness $h$, down-dip length $L$ and excess density $\Delta\rho$:

$$F_{SP} = \Delta\rho\,g\,h\,L.$$

The excess density has two parts: thermal contraction, $\Delta\rho_{\text{th}} = \rho_m\alpha\Delta T_{\text{slab}}$, giving roughly 50 kg/m³; and the **basalt-to-eclogite transformation** in the subducted crust, which adds a further contribution because eclogite is roughly 15 percent denser than basalt. A working figure is $\Delta\rho \approx 70\ \mathrm{kg\,m^{-3}}$.

**Basal drag.** For a plate moving at $u$ over an asthenosphere of viscosity $\eta_a$ and thickness $h_a$:

$$\tau_{DF} = \eta_a\frac{u}{h_a}, \qquad F_{DF} = \tau_{DF}\times(\text{plate width}).$$

*In words: shear stress on the plate's base times its area.* Crucially the **sign is not fixed**: if the underlying mantle moves faster than the plate, drag drives it; if slower, drag resists.

**The catalogue.**

| Force | Typical magnitude (N/m) | Role |
|---|---|---|
| slab pull $F_{SP}$ | $3$–$5\times10^{13}$ | dominant driver |
| ridge push $F_{RP}$ | $2$–$4\times10^{12}$ | secondary driver |
| slab suction | $\sim10^{13}$ | drives the *overriding* plate |
| basal drag $F_{DF}$ | $10^{12}$–$10^{13}$ | either sign |
| slab resistance (viscous + bending) | $\sim F_{SP}$ | absorbs most of slab pull |
| collisional resistance | up to $10^{13}$ | resists (Himalaya, Alps) |
| transform resistance | $\sim10^{12}$ | resists |

**Slab suction.** A sinking slab drives mantle flow that draws the *overriding* plate toward the trench, even though that plate has no slab of its own. This is how plates such as North America and Eurasia acquire what motion they have, and it is why "no slab means no motion" is too strong.

## Picture

![A cross-section of an oceanic plate. On the left a ridge, with a coral wedge and arrow labelled ridge push, 4 times ten to the twelfth newtons per metre. The blue plate runs to the right and bends down into the mantle as a thick blue slab, with a large coral arrow along the slab labelled slab pull, 4 times ten to the thirteenth newtons per metre. Grey arrows beneath the plate point in the direction of motion and are labelled basal drag, sign uncertain, can push or resist. Grey arrows opposing the slab's descent are labelled viscous resistance. A note says slab pull is ten times ridge push and almost all of it is spent overcoming the mantle's resistance. To the right, a scatter plot of plate speed against the fraction of a plate's boundary that is subducting, with Eurasia, Antarctica, North America and Africa clustered at low values of both, and Pacific, Nazca and Cocos at high values of both, along a dashed trend line. A caption says plate speed tracks how much slab is hanging off it, not plate area and not ridge length](assets/04-05-fig1.svg)

Two forces, an order of magnitude apart, and a scatter plot that settles which one matters.

## Worked examples

**Example 1 (mechanical — the two main forces).** Compute ridge push for lithosphere 100 Myr old, and slab pull for a slab 100 km thick descending 600 km, with $\Delta\rho = 70\ \mathrm{kg\,m^{-3}}$.

*Ridge push.* With $\alpha = 3\times10^{-5}$, $\Delta T = 1300$ K, $\rho_m = 3300$, $\rho_w = 1000$, $g = 10$, $\kappa = 10^{-6}$:

$$g\rho_m\alpha\Delta T = 10\times3300\times3\times10^{-5}\times1300 = 10\times3300\times0.039 = 1287.$$

$$\text{correction} = 1 + \frac{2\times3300\times3\times10^{-5}\times1300}{\pi\times2300} = 1 + \frac{257.4}{7226} = 1.036.$$

$$\kappa t = 10^{-6}\times(100\times3.156\times10^{13}) = 10^{-6}\times3.156\times10^{15} = 3.156\times10^{9}.$$

$$F_{RP} = 1287\times1.036\times3.156\times10^{9} = 1333\times3.156\times10^{9} = 4.2\times10^{12}\ \mathrm{N\,m^{-1}}.$$

*Slab pull.*
$$F_{SP} = \Delta\rho\,g\,h\,L = 70\times10\times1.0\times10^{5}\times6.0\times10^{5} = 70\times10\times6.0\times10^{10} = 4.2\times10^{13}\ \mathrm{N\,m^{-1}}.$$

**Slab pull exceeds ridge push by a factor of ten**, from the same set of physical constants and no adjustable parameters.

**Example 2 (why you'd care — why plates do not accelerate away).** If $4.2\times10^{13}$ N/m acted on a plate resisted only by basal drag, how fast would it move? Then explain the discrepancy.

*Basal drag balance.* Take a plate 5000 km wide with an asthenosphere of viscosity $\eta_a = 10^{19}$ Pa·s and thickness $h_a = 100$ km. Setting $F_{DF} = F_{SP}$:

$$\eta_a\frac{u}{h_a}\times W = F_{SP} \;\Longrightarrow\; u = \frac{F_{SP}h_a}{\eta_a W} = \frac{4.2\times10^{13}\times10^{5}}{10^{19}\times5\times10^{6}} = \frac{4.2\times10^{18}}{5\times10^{25}} = 8.4\times10^{-8}\ \mathrm{m\,s^{-1}}.$$

$$= 8.4\times10^{-8}\times3.156\times10^{7} = 2.6\ \mathrm{m\,yr^{-1}}.$$

**Two and a half metres per year — fifty times faster than the fastest real plate.**

*So the balance is wrong, and the missing resistance is not at the plate's base.* The candidates, in order of importance:

- **Viscous resistance to the slab's own descent.** The slab is sinking through mantle of viscosity $10^{21}$ to $10^{22}$ Pa·s, two to three orders of magnitude stiffer than the asthenosphere. Pushing a 100 km thick sheet through that fluid at centimetres per year absorbs most of the available force.
- **Bending resistance at the trench.** Turning a strong, 100 km thick plate through 45 degrees over a few hundred kilometres of arc costs real work, and estimates put it at a substantial fraction of the total budget.
- **Interface friction** on the thrust between the two plates, which is where the earthquakes come from ([1.7](01-07-rupture-physics-source-scaling.md)).

*The conclusion, which is counterintuitive and correct.* **The system is not force-limited; it is resistance-limited.** The available driving force could move plates fifty times faster; what sets the observed speed is how fast a cold slab can be pushed through a viscous mantle. Plate velocity is therefore a *viscosity* measurement in disguise — which is why plate speeds are so uniform (a factor of ten across all plates, against a range of slab lengths and ages spanning much more) and why they have been so steady over 3 Myr ([3.5](03-05-plate-kinematics-euler-poles.md)).

*And it explains a fact that would otherwise be puzzling.* Since almost all of slab pull is consumed locally by the slab's own descent, only a modest net force is transmitted to the surface plate — which is fortunate, because a plate in tension carrying $4\times10^{13}$ N/m would exceed the strength of lithosphere and tear itself apart. Observed intraplate stresses are of order 10 to 50 MPa, consistent with a net force one to two orders of magnitude below the raw slab pull.

## Watch out

- **You might think** ridge push is a force applied at the ridge, like a wedge. **Actually** it is a body force distributed over the whole plate — the horizontal pressure-gradient consequence of having elevated, hot material at one end and cold, dense material at the other. It would act even if the ridge itself were removed, which is why the name is misleading and some authors call it "gravitational sliding".
- **You might think** mantle convection drags plates along beneath them. **Actually** basal drag is as likely to resist as to drive, and the observed lack of correlation between plate area and plate speed argues strongly that it is not the primary driver. The modern picture inverts the causality: **plates are the top of the convection, not passengers on it** ([4.4](04-04-mantle-convection-rayleigh-number.md)).
- **You might think** the eclogite transformation is a detail. **Actually** it roughly doubles the slab's excess density in the crustal layer and is what keeps slabs negatively buoyant through the upper mantle. It is also why subduction is self-sustaining once started: descending crust becomes denser as it goes, so the pull grows with depth.

## One-liner

> Plates are pulled down by their own cold edges, not pushed from ridges or dragged from below — and because nearly all of that pull is spent forcing a slab through a viscous mantle, plate velocity measures resistance rather than driving force.

## Problems

**P1 (🟢)** Compute ridge push for lithosphere 60 Myr old, using $g = 10$, $\rho_m = 3300$, $\rho_w = 1000$, $\alpha = 3\times10^{-5}$, $\Delta T = 1300$ K, $\kappa = 10^{-6}\ \mathrm{m^2\,s^{-1}}$. (a) Compute the leading coefficient and the correction factor. (b) Compute $F_{RP}$. (c) Compare with the 100 Myr value of $4.2\times10^{12}$ N/m and explain the ratio.

**P2 (🟡)** A slab is 90 km thick and has descended 450 km, with a thermal density excess given by $\rho_m\alpha\Delta T_{\text{slab}}$ using $\Delta T_{\text{slab}} = 450$ K, plus an additional $20\ \mathrm{kg\,m^{-3}}$ from the eclogite transformation. (a) Compute the total excess density. (b) Compute the slab pull per metre of trench. (c) Compute the ratio to the 60 Myr ridge push of P1. (d) The plate is 3000 km wide with 2000 km of trench and 3000 km of ridge; compute the total driving force from each and comment.

**P3 (🔴, bridges to [4.6](04-06-mantle-rheology-post-glacial-rebound.md))** The table gives plate speeds and the fraction of each plate's boundary that is a subduction zone.

| Plate | $v$ (cm/yr) | subducting fraction | area ($10^{6}$ km²) |
|---|---|---|---|
| Pacific | 8.0 | 0.35 | 103 |
| Nazca | 7.5 | 0.45 | 15 |
| Cocos | 8.5 | 0.50 | 3 |
| Africa | 2.1 | 0.05 | 79 |
| North America | 1.1 | 0.05 | 76 |
| Eurasia | 0.9 | 0.00 | 68 |
| Antarctica | 1.0 | 0.00 | 61 |

(a) Describe the relationship between speed and subducting fraction. (b) Describe the relationship between speed and area, and say what it rules out. (c) Cocos is 34 times smaller than Pacific and moves slightly faster; explain what that implies about how driving force scales. (d) Eurasia and Antarctica have no slabs yet move at about 1 cm/yr; give two mechanisms that could account for this, and say which observation would distinguish them.

<details>
<summary>Solutions</summary>

**P1** (a) $$g\rho_m\alpha\Delta T = 10\times3300\times3\times10^{-5}\times1300 = 1287.$$
$$\text{correction} = 1 + \frac{2\times3300\times3\times10^{-5}\times1300}{\pi(3300-1000)} = 1 + \frac{257.4}{7226} = 1.036.$$

(b) $$\kappa t = 10^{-6}\times60\times3.156\times10^{13} = 10^{-6}\times1.894\times10^{15} = 1.894\times10^{9}.$$
$$F_{RP} = 1287\times1.036\times1.894\times10^{9} = 1333\times1.894\times10^{9} = 2.5\times10^{12}\ \mathrm{N\,m^{-1}}.$$

(c) $$\frac{2.5}{4.2} = 0.60 = \frac{60}{100}.$$

**Exactly the ratio of the ages**, because $F_{RP} \propto t$ in this formula. The physical reason: ridge push is the integrated density excess of the cooled column, the thermal contraction accumulates as $\sqrt t$ in thickness and $\sqrt t$ in the depth over which it acts, and the product is linear in $t$. **Old plates push harder**, which is one reason the slow-spreading Atlantic still manages to open.

**P2** (a) $$\Delta\rho_{\text{th}} = \rho_m\alpha\Delta T_{\text{slab}} = 3300\times3\times10^{-5}\times450 = 3300\times0.0135 = 44.6\ \mathrm{kg\,m^{-3}}.$$
$$\Delta\rho_{\text{total}} = 44.6 + 20 = 64.6\ \mathrm{kg\,m^{-3}}.$$

(b) $$F_{SP} = \Delta\rho\,g\,h\,L = 64.6\times10\times9.0\times10^{4}\times4.5\times10^{5} = 64.6\times10\times4.05\times10^{10} = 2.62\times10^{13}\ \mathrm{N\,m^{-1}}.$$

(c) $$\frac{2.62\times10^{13}}{2.5\times10^{12}} = 10.5.$$

Slab pull again about ten times ridge push.

(d) $$F_{SP}^{\text{total}} = 2.62\times10^{13}\times2.0\times10^{6}\ \mathrm{m} = 5.24\times10^{19}\ \mathrm{N},$$
$$F_{RP}^{\text{total}} = 2.5\times10^{12}\times3.0\times10^{6}\ \mathrm{m} = 7.5\times10^{18}\ \mathrm{N}.$$

Slab pull supplies about **seven times** the total driving force even though the ridge is 50 percent longer than the trench. The per-metre advantage of slab pull is large enough that boundary lengths would have to differ by an order of magnitude to compensate — which is why the correlation in P3 is with *trench* length and not ridge length.

**P3** (a) **Strongly positive and roughly linear.** Every plate with a subducting fraction above 0.3 moves at 7.5 to 8.5 cm/yr; every plate with a fraction of 0.05 or less moves at 0.9 to 2.1 cm/yr. There is no overlap between the two groups, and no plate contradicts the pattern.

(b) **Essentially none.** Pacific (103 million km²) moves at 8.0 cm/yr; Antarctica (61) at 1.0; Africa (79) at 2.1; Eurasia (68) at 0.9. Areas within a factor of two, speeds differing by a factor of eight.

This rules out **basal drag as the primary driver.** A force applied over a plate's base scales with its area, so if mantle currents were dragging plates along, the biggest plates would be the fastest. Antarctica is the decisive case: enormous, and nearly stationary. (Read the other way, the absence of an area *penalty* also argues that basal drag is not the primary *resistance* — otherwise large plates would be systematically slow, which they are not.)

(c) Cocos has an area 34 times smaller than Pacific and moves slightly faster. If driving force scaled with area, Cocos would be almost immobile.

The implication is that **the driving force scales with boundary length, not with area** — specifically with the length of subducting margin, which for Cocos is a large fraction of a small perimeter. And since the resistance evidently also scales with the slab (Example 2), the two scale together and the velocity is nearly independent of plate size. That is exactly what the table shows: plate speed clusters into "has a slab" and "does not", with size irrelevant within each group.

(d) Two mechanisms:

- **Slab suction.** A neighbouring plate's descending slab drives mantle flow that pulls the overriding plate toward the trench, even though that plate has no slab of its own. North America and Eurasia both sit adjacent to subduction systems.
- **Ridge push.** Eurasia and Antarctica are both bounded by ridges (the Mid-Atlantic and the Southwest/Southeast Indian ridges respectively), and $2$–$4\times10^{12}$ N/m over thousands of kilometres of ridge is a real, if modest, force. Antarctica in particular is almost entirely ridge-bounded.

*The distinguishing observation:* the **direction** of motion relative to the plate's own boundaries. Ridge push acts away from the ridge, roughly perpendicular to it, and for a plate surrounded by ridges on most sides the net is small and directed away from the longest ridge. Slab suction acts toward the neighbouring trench. So comparing each plate's velocity azimuth with the geometry of its ridges and with the position of nearby subduction zones separates them: Eurasia's motion should point toward the Pacific trenches if suction dominates, and away from the Mid-Atlantic Ridge if ridge push does.

A second, independent discriminator is the **intraplate stress field**, measured from earthquake focal mechanisms ([1.6](01-06-earthquake-sources-magnitude.md)) and borehole breakouts. Ridge push puts the plate interior in compression oriented away from the ridge; suction produces a different pattern. The World Stress Map exists partly to answer exactly this question, and it broadly supports ridge push as the dominant term for the slab-free plates.

</details>

## Flashback

**From Lesson 4.4 (Mantle convection and the Rayleigh number):** A mantle layer has $\alpha = 3\times10^{-5}\ \mathrm{K^{-1}}$, $g = 10\ \mathrm{m\,s^{-2}}$, $\Delta T = 2500$ K, $d = 2.0\times10^{6}$ m, $\kappa = 10^{-6}\ \mathrm{m^2\,s^{-1}}$, $\nu = 3\times10^{17}\ \mathrm{m^2\,s^{-1}}$. (a) Compute $Ra$. (b) Compute the Nusselt number with $Ra_c = 1708$. (c) Compute the boundary-layer thickness.

<details>
<summary>Solution</summary>

(a) $$d^3 = 8.0\times10^{18}\ \mathrm{m^3}.$$
$$Ra = \frac{3\times10^{-5}\times10\times2500\times8.0\times10^{18}}{10^{-6}\times3\times10^{17}} = \frac{6.0\times10^{18}}{3\times10^{11}} = 2.0\times10^{7}.$$

(b) $$\mathrm{Nu} = \left(\frac{2.0\times10^{7}}{1708}\right)^{1/3} = (1.171\times10^{4})^{1/3}.$$
$$\log_{10} = 4.0686,\ /3 = 1.3562, \quad \mathrm{Nu} = 22.7.$$

(c) $$\frac{\delta}{d} = \frac{1}{\mathrm{Nu}} = \frac{1}{22.7} = 4.40\times10^{-2}, \qquad \delta = 0.0440\times2000 = 88\ \mathrm{km}.$$

Higher viscosity than Example 1 of [4.4](04-04-mantle-convection-rayleigh-number.md), so a lower Rayleigh number and a thicker boundary layer — but still comfortably in the range of real lithospheric thicknesses, which is the robustness the cube-root scaling provides.

</details>

## Connections

- **Backward:** the cooling that makes a slab dense is [4.3](04-03-cooling-oceanic-lithosphere.md)'s; the identification of the plate as a convective boundary layer is [4.4](04-04-mantle-convection-rayleigh-number.md)'s, and this lesson is that picture expressed as a force balance. The plate velocities being explained are [3.5](03-05-plate-kinematics-euler-poles.md)'s.
- **Forward:** [4.6](04-06-mantle-rheology-post-glacial-rebound.md) measures the viscosity that Example 2 showed is what actually sets plate speed; [5.2](05-02-mineral-physics-transition-zone.md) covers the eclogite and deeper phase transformations that control a slab's buoyancy at depth.
- **Sideways:** [`geology` 2.3](../../geology/lessons/02-03-driving-mechanism.md) owns the qualitative account of the driving mechanism and explicitly cites this lesson for the force balance; [`geology` 2.6](../../geology/lessons/02-06-mountain-building.md) uses the collisional-resistance term to explain why over-thickened plateaus spread sideways. The whole calculation is a Stokes-flow problem — a dense sheet settling through a viscous fluid, [fluid-dynamics 3.3](../../fluid-dynamics/lessons/03-03-stokes-flow.md) — with the terminal velocity being what we call plate motion.
