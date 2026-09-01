# Geology · Lesson 2.5: Folds, Faults & Structures

> ⏱ ~15 min · Module 2: Plate Tectonics & the Deforming Crust · Builds on: [2.4](02-04-how-rock-deforms.md), [1.5](01-05-sedimentary-rocks.md) · Unlocks: 2.6 (mountain building), 4.5 (reading a geologic map)

## Why this matters

[2.4](02-04-how-rock-deforms.md) solved the forward problem: given depth, temperature, strain rate and pore pressure, does rock fracture or flow? This lesson solves the **inverse problem**, which is the one a field geologist actually solves every day. You do not get to watch the deformation. You get the wreckage — a bent layer, a broken layer, a layer that ends abruptly against another — and from that you must recover the stress field that produced it, tens of millions of years ago.

That recovery is far more reliable than it has any right to be, for one reason that this lesson is built around: **the Earth's surface is a free surface, so one of the three principal stresses must be vertical, and which one it is determines what kind of fault you get.** Three stress arrangements, three fault types, no exceptions in the shallow crust. A fault is a fossil stress meter, and reading it takes one look.

Everything downstream needs this. [2.6](02-06-mountain-building.md) measures crustal shortening by restoring folds and thrusts. [2.7](02-07-earthquakes-seismic-hazard.md) treats the fault as an earthquake source and its orientation as the thing that sets the shaking pattern. And [4.5](04-05-reading-a-geologic-map.md) is literally unreadable without strike and dip — a geologic map is a plane-orientation dataset with colours on it.

## The idea

**Three moves, in order.**

**1. Orient the plane.** Every planar thing in geology — a bed, a fault, a foliation, a dike, a joint — is fixed in space by two numbers. Lay a horizontal plane through the tilted surface: the line where they intersect is the **strike**, a horizontal line in the plane. Now walk perpendicular to strike and go downhill as steeply as the plane allows: that angle is the **dip**. **Strike answers "which way does it run?", dip answers "how steeply, and toward which side?"** Two numbers, because the orientation of a plane is the orientation of its normal vector, and a direction in space has exactly two degrees of freedom.

**2. Sort the structure by regime.** [2.4](02-04-how-rock-deforms.md) gave the brittle–ductile transition at roughly 10–15 km in continental crust. Above it rock breaks: **faults** (fractures with slip) and **joints** (fractures without). Below it rock flows: **folds**. **The two families are not alternatives — they are the same shortening expressed at different depths in the same crustal column**, which is why a fold-and-thrust belt has folds at depth passing upward into thrusts.

**3. Read the stress.** Both families point back to the same three principal stresses, $\sigma_1 \geq \sigma_2 \geq \sigma_3$ (geologists take compression positive — the opposite of the engineering sign convention in [materials-science 4.1](../../materials-science/lessons/04-01-elastic-behavior-stress-strain.md), and a real source of confusion when you cross between the literatures).

For folds the rule is one line: **a fold records shortening perpendicular to its axis.** Layers buckle across the direction they are being squeezed, never along it.

For faults the rule is E. M. Anderson's, and it is the single most useful idea in structural geology. **The ground surface carries no shear stress — nothing is dragging sideways on the air — so the surface is a principal plane and one principal stress axis must be vertical.** Only three arrangements are possible, and each names a fault:

| Vertical stress | Fault type | Crust is | Slip sense | Predicted dip |
|---|---|---|---|---|
| $\sigma_1$ (the largest) | **normal** | extending | hanging wall down | about $60^\circ$ |
| $\sigma_2$ (the middle) | **strike-slip** | shearing | horizontal | $90^\circ$ (vertical) |
| $\sigma_3$ (the smallest) | **reverse / thrust** | shortening | hanging wall up | about $30^\circ$ |

**Read the table backwards and it becomes a measuring instrument.** A 60-degree fault with the upper block dropped tells you the crust was being pulled apart vertically-loaded — Basin and Range, the East African Rift, a passive margin. A 25-degree fault carrying old rock over young tells you the crust was being squeezed horizontally — the Alps, the Appalachians, the Himalaya. You did not need to see it happen.

**And the predicted dips are not fudge factors — they fall out of the failure criterion**, as the next section shows. That a normal fault should dip about 60 degrees and a thrust about 30 degrees is a *derived* result that field measurements then confirm, which is as close as structural geology gets to a physics prediction.

## The formal version

### Strike and dip, precisely

Let the bedding (or fault, or foliation) plane have elevation

$$z = z_0 - a\,x - b\,y$$

with $x$ east, $y$ north, $z$ up, all in metres, and $a, b$ dimensionless slopes.

**Definitions.**

- **Strike** is the compass bearing of the intersection of the plane with a horizontal plane. Every horizontal line in the plane is parallel to it, so the strike is a property of the plane, not of the particular horizontal plane you chose.
- **Dip** $\delta$ is the angle between the plane and horizontal, measured **in the vertical plane perpendicular to strike**. That qualifier is what makes it the *true* dip, and the true dip is the maximum angle any line in the plane makes with horizontal.
- **Dip direction** is the horizontal bearing of that steepest downhill line.

*In words: strike is the level line, dip is the steepest line, and they are perpendicular in map view.*

The formulas follow immediately from the plane equation:

$$\boxed{\;\tan\delta = \sqrt{a^2+b^2}, \qquad \theta_{\text{dip}} = \operatorname{atan2}(a,\,b), \qquad \theta_{\text{strike}} = \theta_{\text{dip}} - 90^\circ\;}$$

where bearings are measured clockwise from north, so $\operatorname{atan2}$ takes (east component, north component).

**This is the gradient, and you have met it before.** The vector $(a,b)$ is $-\nabla z$ — the direction of steepest descent of the surface — which is exactly the object from [calc-refresher 4.1](../../calc-refresher/lessons/04-01-partial-derivatives-and-gradient.md). Its magnitude is the dip's tangent and its bearing is the dip direction. Equivalently, take the plane's normal $\mathbf{n} = (a, b, 1)$; the dip is the angle between $\mathbf{n}$ and vertical. **A geologist's compass measurement and a multivariable-calculus gradient are the same measurement.**

**Notation conventions, both of which you will meet.** *Right-hand rule*: quote the strike so that the dip lies $90^\circ$ clockwise from it, e.g. `307/27` means strike $307^\circ$, dipping $27^\circ$ toward $037^\circ$. *Quadrant*: `N53W, 27 NE`. **Strike alone is ambiguous by $180^\circ$, so a dip direction must always be supplied** — by convention, by a quadrant letter, or by the tick on the map symbol.

**Apparent dip.** A cross-section drawn at an angle $\theta$ away from the true dip direction shows a shallower dip:

$$\boxed{\;\tan\delta_{\text{app}} = \tan\delta \,\cos\theta\;}$$

*In words: a plane looks flatter in any section that is not cut straight down its steepest line.* Check the ends: $\theta = 0$ gives $\delta_{\text{app}} = \delta$; a section along strike ($\theta = 90^\circ$) shows a horizontal bed. **This is why a roadcut can badly mislead you about dip, and why [4.5](04-05-reading-a-geologic-map.md) insists that cross-sections be drawn perpendicular to strike.**

### Folds

**Anatomy.** The **hinge** is the line of maximum curvature; the **limbs** are the flanks; the **axial surface** contains the hinge lines of every layer; the **fold axis** is the hinge line's orientation, which may **plunge** (be non-horizontal). The **interlimb angle** measures tightness: gentle ($180^\circ$–$120^\circ$), open ($120^\circ$–$70^\circ$), close ($70^\circ$–$30^\circ$), tight ($30^\circ$–$0^\circ$), isoclinal ($0^\circ$, limbs parallel).

**Anticline versus syncline — and the distinction people fudge.**

- **Anticline**: limbs dip *away* from the hinge; the **oldest** rock is in the core.
- **Syncline**: limbs dip *toward* the hinge; the **youngest** rock is in the core.
- **Antiform / synform**: purely about *shape* — arched up, or troughed down — used when you do not know which way is stratigraphically up.

**These come apart, and when they do the distinction earns its keep.** Take a syncline and overturn the whole thing during a later phase of deformation, and you get a structure that arches upward (antiform) but still has the youngest rock in its core (syncline): an **antiformal syncline**. You detect it with the way-up indicators from [1.5](01-05-sedimentary-rocks.md) — graded bedding, cross-bed truncations, mud cracks — which is why that lesson insisted on them.

**The map inference, which is the most useful single fact in structural geology:**

$$\boxed{\;\text{eroded anticline} \Rightarrow \text{oldest unit exposed in the core}, \qquad \text{eroded syncline} \Rightarrow \text{youngest in the core}\;}$$

*In words: slice the top off an arch and you cut deepest into the middle of it.* You do not need to see the fold in three dimensions; a strip of map with a mirrored sequence of units and dips that reverse across a line is a fold, and the ages tell you which kind.

**Plunge and the outcrop V.** A horizontal fold axis gives parallel map bands. A **plunging** fold's bands close around a nose, and **the nose of a plunging anticline points in the plunge direction** (a plunging syncline's nose points the opposite way). **Doubly plunging** folds close at both ends: a **dome** (oldest in the centre, roughly circular pattern) or a **basin** (youngest in the centre).

**Classification by axial-surface attitude** — upright, inclined, **overturned** (both limbs dip the same way), **recumbent** (axial surface horizontal) — is itself a stress readout: the axial surface is roughly perpendicular to $\sigma_1$, and increasing asymmetry records an increasing component of shear. This is the same argument that makes metamorphic foliation ([1.6](01-06-metamorphic-rocks-rock-cycle.md)) grow perpendicular to maximum compression, and the two are usually parallel in the same rock.

### Faults

**Geometry and the naming.** The fault plane has its own strike and dip. For a **non-vertical** plane, the block resting *on top* of the fault surface is the **hanging wall**; the block *beneath* it is the **footwall**. The names come from mining: the miner walked on the footwall and hung a lamp on the hanging wall. **A vertical fault has neither** — there is no block above the plane — which is why strike-slip faults are described by slip sense instead.

**Components of dip-slip.** For net slip $s$ on a fault dipping $\delta$:

$$\text{throw (vertical)} = s\sin\delta, \qquad \text{heave (horizontal)} = s\cos\delta$$

*In words: throw is how much the block went up or down, heave is how much it moved sideways.* Throw is what you see as offset in a well or a cliff; heave is what shortens or extends the crust.

**The three types, tied to their stress regimes.**

- **Normal** — hanging wall down, $\sigma_1$ vertical, **extension**. Paired opposing normal faults isolate an uplifted **horst** and a dropped **graben**; the Basin and Range is a province of them. Many large normal faults are **listric** — concave-up, flattening with depth into a detachment — and the hanging wall then sags into a **rollover anticline** as it slides. Extension makes the crust thinner and the section thinner: **normal faulting removes stratigraphic section.**
- **Reverse** — hanging wall up, $\sigma_1$ horizontal, **shortening**. Conventionally *reverse* when the dip exceeds $45^\circ$ and **thrust** when it is shallower (commonly $20^\circ$–$30^\circ$). Thrusts have a diagnostic and initially shocking signature: **they place older rock on top of younger rock**, in flat violation of superposition, and a thrust sheet can carry rock tens of kilometres. **Thrusting repeats stratigraphic section.**
- **Strike-slip** — horizontal slip on a vertical plane, $\sigma_2$ vertical, **shear**. **Right-lateral (dextral)** if, standing on one block, the far block moves to your right; **left-lateral (sinistral)** otherwise. The sense is read from an offset marker — a stream, a dike, a fence — and the definition is pleasantly symmetric: it does not matter which block you stand on.

**Anderson's dips, derived.** Rock fails on a plane obeying the Mohr–Coulomb criterion, $|\tau| = C + \mu_i \sigma_n$, where $\tau$ is shear stress on the plane, $\sigma_n$ the normal stress, $C$ the cohesion and $\mu_i = \tan\varphi$ the coefficient of internal friction with $\varphi$ the friction angle ([materials-science 4.4](../../materials-science/lessons/04-04-failure-fracture-fatigue-creep.md) owns the criterion). Maximizing the failure function over plane orientation puts the fracture at an angle

$$\theta = 45^\circ - \frac{\varphi}{2}$$

to the $\sigma_1$ direction. Byerlee's law gives $\mu_i \approx 0.6$–$0.85$ for essentially all crustal rock, so $\varphi \approx 31^\circ$–$40^\circ$ and $\theta \approx 25^\circ$–$30^\circ$. Now apply Anderson:

| Regime | $\sigma_1$ orientation | Fault at $\theta$ from $\sigma_1$ gives | Observed |
|---|---|---|---|
| Normal | vertical | dip $= 90^\circ - \theta \approx 60^\circ$–$65^\circ$ | 55–65 degrees |
| Thrust | horizontal | dip $= \theta \approx 25^\circ$–$30^\circ$ | 20–35 degrees |
| Strike-slip | horizontal | vertical plane at $\theta$ to $\sigma_1$ | vertical |

**Two numbers from a friction coefficient reproduce the dips of essentially every fault ever mapped.** That is the payoff, and it is why a dip measurement alone is decent evidence for a stress regime even before you find the slip sense. (The honest caveat: a *reactivated* fault ignores this, since sliding on an existing weak surface is easier than making a new one — low-angle normal faults and steep reverse faults exist and usually turn out to be inherited structures.)

**Effective stress, again.** A fault slips when shear on it reaches $C + \mu_i(\sigma_n - P_f)$, with $P_f$ the pore fluid pressure — [2.4](02-04-how-rock-deforms.md)'s effective-stress relation. **Raising fluid pressure moves a fault toward failure without changing the tectonic stress at all**, which is how deep faulting happens in the first place and how fluid injection induces earthquakes ([2.7](02-07-earthquakes-seismic-hazard.md)).

**Slip direction is measured, not assumed.** Fault surfaces carry **slickenlines** — grooves and mineral fibres parallel to the last slip — so the field measurement is the fault's strike and dip *plus* the rake of the slickenlines within the plane. Most real faults are oblique.

### Joints

**Joints are fractures with no measurable displacement**, and they are the most common structure in the crust. A **systematic joint set** is a family of parallel joints; extension joints open perpendicular to $\sigma_3$, so **joint orientation maps the least principal stress** even where no fault formed. Two common origins are worth naming because each records a specific history: **sheeting (exfoliation) joints** form parallel to the surface as erosion unloads a pluton and the confining pressure drops ([3.1](03-01-weathering-soils.md) uses them), and **columnar joints** form as a lava flow or sill contracts on cooling ([1.4](01-04-igneous-rocks-and-bodies.md)). Joints also dominate permeability in crystalline rock ([3.6](03-06-groundwater-aquifers-karst.md)).

### The field practical: reading structures from map pattern

You will almost never be handed a block diagram. You will be handed a map, and the diagnostics are these:

| Map observation | Candidate structures | How to decide |
|---|---|---|
| **Repeated** section, mirrored, dips reverse across a line | fold | mirror symmetry; no fault contact; ages symmetric about the hinge |
| **Repeated** section, same order, dips unchanged, older on younger at a contact | thrust | a discrete fault contact with breccia or gouge; the repeat is a translation, not a reflection |
| **Missing** section | normal fault, or an unconformity | a fault trace is a line that *cuts across* contacts at an angle; an unconformity is roughly parallel to bedding, laterally persistent, and the gap is regionally consistent ([4.1](04-01-relative-dating-unconformities.md)) |
| Units closing around a nose | plunging fold | anticline if the oldest unit is inside the nose |
| Roughly circular concentric bands | dome or basin | oldest in the centre means dome |

## Picture

![Three-panel structural geology sheet. The top panel defines strike and dip on a tilted bed inside a block diagram, with the horizontal strike line on the ground surface, the true dip arrow down the steepest line of the bed, and the matching map symbol of a long strike line, a short tick on the dip side and the dip angle. The middle panel shows an anticline and a syncline in cross-section, cut by a horizontal erosion surface with the removed arch drawn dashed above it, and beneath it the resulting map strip whose numbered units read three two one two three four five four three, so the oldest unit is exposed in the anticline core and the youngest in the syncline core. The bottom panel shows a normal fault, a thrust and a strike-slip fault, each with the vertical principal stress arrow marked, together with the standard map symbols of hachures on the downthrown block, teeth on the upper plate and half-arrows for slip sense.](assets/02-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — the three-point problem).** A sandstone/shale contact is exposed at three places on a hillside. Positions are given as (east, north) in metres from a datum, with the contact's elevation:

| Point | East (m) | North (m) | Elevation (m) |
|---|---|---|---|
| A | 0 | 0 | 400 |
| B | 400 | 0 | 280 |
| C | 0 | 500 | 200 |

Find the strike and dip.

**Method 1 — plane equation.** Three points fix the plane $z = z_0 - ax - by$. From A, $z_0 = 400$. From B, $280 = 400 - 400a$, so

$$a = \frac{400-280}{400} = 0.30 .$$

From C, $200 = 400 - 500b$, so

$$b = \frac{400-200}{500} = 0.40 .$$

$$\tan\delta = \sqrt{0.30^2 + 0.40^2} = \sqrt{0.09+0.16} = \sqrt{0.25} = 0.500 \;\Longrightarrow\; \delta = \arctan 0.5 = \mathbf{26.6^\circ}.$$

$$\theta_{\text{dip}} = \operatorname{atan2}(0.30,\,0.40) = \arctan\frac{0.30}{0.40} = 36.9^\circ, \qquad \theta_{\text{strike}} = 36.9^\circ - 90^\circ = \mathbf{307^\circ}.$$

**Answer: strike $307$, dip $27^\circ$ toward $037$** — in quadrant notation, N53W, 27 NE.

**Method 2 — structure contours, which is what you do on paper.** Find two points at the same elevation on the contact and join them; that line *is* a strike line. A is at 400 m and C at 200 m, so the 280 m level lies a fraction $(400-280)/(400-200) = 0.60$ of the way from A to C, i.e. at $(0,\,300)$. Join that to B at $(400,\,0)$: the 280 m structure contour runs from $(0,300)$ to $(400,0)$, bearing

$$\operatorname{atan2}(400,\,-300) = 180^\circ - 53.1^\circ = 127^\circ,$$

which is $307^\circ$ reversed — the same line. ✓

For the dip, take the perpendicular distance from A (on the 400 m contour) to the 280 m contour. The contour line is $3x + 4y = 1200$, so

$$d = \frac{|3(0)+4(0)-1200|}{\sqrt{3^2+4^2}} = \frac{1200}{5} = 240\ \text{m}, \qquad \tan\delta = \frac{400-280}{240} = 0.500 \;\checkmark$$

**Both methods agree, and the second is the one that makes structure contours click: a geologic contact is a topographic surface, and its contour map is a set of parallel strike lines whose spacing encodes the dip.** [4.5](04-05-reading-a-geologic-map.md) is this construction run in reverse.

**Example 2 (why you'd care — reading a mountain belt from one contact).** A mapped fault surface dips $25^\circ$ west. Above it sits Cambrian limestone; below it, Cretaceous shale. The same limestone also crops out in normal stratigraphic position (beneath younger units) 60 km to the east, and independent work gives a net slip on the fault of 12 km. (a) Classify the fault and give the stress regime. (b) Compute throw and heave. (c) Estimate the shortening and check it against the observed dip.

**(a)** Older rock (Cambrian) sits on younger rock (Cretaceous), which superposition forbids for undisturbed strata — so this is a **fault contact**, and the hanging wall (the upper, Cambrian block) has moved **up**. Dip $25^\circ < 45^\circ$: a **thrust fault**.

By Anderson, hanging wall up means $\sigma_3$ vertical and $\sigma_1$ horizontal: **the crust was shortened horizontally, in a direction perpendicular to the fault's strike (here roughly east–west).** And by cross-cutting relations ([4.1](04-01-relative-dating-unconformities.md)), the faulting is younger than the Cretaceous shale it displaces.

**(b)**

$$\text{throw} = s\sin\delta = 12\sin 25^\circ = 12(0.4226) = \mathbf{5.07\ \text{km}}$$

$$\text{heave} = s\cos\delta = 12\cos 25^\circ = 12(0.9063) = \mathbf{10.88\ \text{km}}$$

**Read what the throw means physically:** the Cambrian limestone now at the surface was carried up 5.1 km, so roughly 5 km of overburden has been eroded off the thrust sheet since. That is the exhumation budget [2.6](02-06-mountain-building.md) will need.

**(c)** The heave is the horizontal shortening. The belt is now 60 km wide, so restoring it:

$$L_{\text{original}} = 60 + 10.88 = 70.88\ \text{km}, \qquad \text{shortening} = \frac{10.88}{70.88} = 0.153 = \mathbf{15.3\ \text{percent}}.$$

**Check against Anderson.** A thrust at $25^\circ$ implies $\theta = 45^\circ - \varphi/2 = 25^\circ$, so $\varphi = 40^\circ$ and $\mu_i = \tan 40^\circ = 0.84$ — the top of Byerlee's range, but inside it. **So this is consistent with a fresh fracture in strong rock, not a reactivated weak surface**, and we have extracted a friction coefficient from a protractor.

**The general lesson: one contact, one dip measurement and one slip estimate gave a stress direction, an exhumation depth, a shortening percentage and a rock-friction estimate.** This is why structural geologists measure obsessively.

## Watch out

- **You might think "anticline" means "arch".** It means *oldest in the core*; "antiform" means arch. Overturn a syncline and you get an antiform whose core is the youngest rock — an antiformal syncline. Way-up indicators from [1.5](01-05-sedimentary-rocks.md), not shape, settle it.
- **You might think every anticline records compression.** A **rollover anticline** forms in the hanging wall of a *listric normal fault*, purely by extension, as the block rotates into the flattening fault. Arch shape is not a stress diagnosis; the map pattern and the associated faults are.
- **You might read a cross-section's dip as the true dip.** Any section not perpendicular to strike shows an apparent dip, $\tan\delta_{\text{app}} = \tan\delta\cos\theta$, always shallower. A section drawn along strike shows flat-lying beds no matter how steeply they dip.
- **You might read vertical offset on a map as dip-slip.** A **pure strike-slip fault cutting dipping beds produces apparent vertical separation** on a map or in a section — the beds are simply juxtaposed at different structural levels. Separation is what you see; slip is what happened, and only slickenlines or a piercing point (an offset linear feature) distinguish them.
- **You might look for the hanging wall of a vertical fault.** There isn't one. Hanging wall and footwall are defined only where the plane is inclined.
- **You might take repeated stratigraphy as proof of folding.** A thrust also repeats section. The fold repeats it as a **mirror** with dips reversing; the thrust repeats it as a **translation** with dips unchanged and a fault contact placing older on younger.
- **You might trust Anderson's dips universally.** They apply to faults that *formed* in the current stress field. Reactivated inherited structures — low-angle normal faults, steep reverse faults — are common, and their existence is itself informative: they mark pre-existing weakness.

## One-liner

> Two numbers orient any plane, and one question orients any fault — which principal stress is vertical: $\sigma_1$ gives normal faults at $60^\circ$ and extension, $\sigma_2$ gives vertical strike-slip, $\sigma_3$ gives thrusts at $30^\circ$ that stack older rock on younger; folds shorten perpendicular to their axes and, once eroded, put the oldest rock in an anticline's core.

## Problems

**P1 (🟢)** A fault dipping $60^\circ$ offsets a coal seam; the hanging wall is on the down-dropped side, and the net slip is dip-slip, 250 m. (a) Name the fault type and state the stress regime and which principal stress is vertical. (b) Compute the throw and the heave. (c) The dip is $60^\circ$. What coefficient of internal friction does that imply under Anderson's construction, and is it reasonable?

**P2 (🟡)** Walking due east across a map you cross, in order, units 5, 4, 3, 2, 1, 2, 3, 4, 5 (unit 1 is the oldest). The bands run north–south. West of the middle band the beds dip $40^\circ$ west; east of it they dip $40^\circ$ east. The traverse from the first unit 5 to the last is 8.0 km. (a) Identify the structure and say where the hinge is. (b) Give the orientation of $\sigma_1$ that produced it. (c) Modelling the fold as two planar limbs, estimate the shortening in kilometres and as a percentage. (d) State the single map observation that would have told you this was a thrust stack instead.

**P3 (🔴, this is the [4.5](04-05-reading-a-geologic-map.md) skill in advance)** Three vertical drill holes on flat ground at elevation 0 m intersect the top of a coal seam:

| Hole | East (m) | North (m) | Depth to seam (m) |
|---|---|---|---|
| DH1 | 0 | 0 | 100 |
| DH2 | 200 | 0 | 220 |
| DH3 | 0 | 400 | 280 |

(a) Compute the seam's strike and dip. (b) A cross-section is to be drawn due north–south. What dip will the seam appear to have in it? (c) Predict the drilling depth to the seam at DH4, at (300 E, 200 N). (d) A fifth hole at (150 E, 150 N) is drilled to 400 m and finds no coal at all. Give two structural explanations and the observation that separates them.

<details>
<summary>Solutions</summary>

**P1 (a)** Hanging wall down is the definition of a **normal fault**. By Anderson, hanging wall down requires $\boldsymbol{\sigma_1}$ **vertical** (with $\sigma_3$ horizontal and perpendicular to the fault strike), so the crust was under **extension**.

**(b)**

$$\text{throw} = 250\sin 60^\circ = 250(0.86603) = \mathbf{216.5\ \text{m}}$$

$$\text{heave} = 250\cos 60^\circ = 250(0.5) = \mathbf{125\ \text{m}}$$

So a drill hole on the downthrown side would find the seam 216 m deeper than on the upthrown side, and the crust at this spot is 125 m wider than it was.

**(c)** For a normal fault the plane makes $\theta = 90^\circ - 60^\circ = 30^\circ$ with the vertical $\sigma_1$. Then

$$\theta = 45^\circ - \frac{\varphi}{2} = 30^\circ \;\Longrightarrow\; \varphi = 30^\circ \;\Longrightarrow\; \mu_i = \tan 30^\circ = \mathbf{0.577}.$$

**Entirely reasonable** — it sits at the low end of Byerlee's $0.6$–$0.85$, which is where most crustal rock lives. A $60^\circ$ normal fault is the single most common fault geometry on Earth for exactly this reason.

**P2 (a)** The sequence is a **mirror** about the middle band, and the dips **reverse** across it — that is a fold, not a fault repeat. The **oldest unit (1) sits in the middle**, so the limbs dip away from it: an **anticline**, with its **hinge along the axis of unit 1**, running north–south. The symmetric dips ($40^\circ$ on both limbs) make it **upright**, and the parallel unmodified bands mean the axis is essentially horizontal (not plunging).

**(b)** A fold records shortening perpendicular to its axis. The axis is north–south, so

$$\boldsymbol{\sigma_1} \text{ is horizontal and east--west}; \quad \sigma_2 \text{ horizontal, north--south}; \quad \sigma_3 \text{ vertical}.$$

**(c)** Model the fold as two planar limbs each dipping $40^\circ$. Present map width $W = 8.0$ km. The bed length along a limb is its map length divided by $\cos 40^\circ$, so the original (unfolded) bed length is

$$L_0 = \frac{W}{\cos 40^\circ} = \frac{8.0}{0.76604} = 10.44\ \text{km}.$$

$$\text{shortening} = L_0 - W = 10.44 - 8.00 = \mathbf{2.44\ \text{km}}$$

$$\text{percent shortening} = \frac{2.44}{10.44} = 0.234 = \mathbf{23.4\ \text{percent}}$$

Notice the result depends only on the limb dip, not on the width: $1 - \cos\delta$. A $40^\circ$ fold takes up 23 percent shortening; a $60^\circ$ fold takes up 50 percent. **That scaling is how a fold-and-thrust belt's total shortening gets estimated in [2.6](02-06-mountain-building.md), and it is why balanced cross-sections are worth the effort.**

**(d)** A thrust stack would repeat the section as a **translation, not a reflection** — you would cross 5, 4, 3, 2, 1 and then 5, 4, 3, 2, 1 *again in the same order*, with the dips pointing the same way throughout, and with a **fault contact where an older unit sits directly on a younger one**. Any one of those three observations (repeat order, unchanging dip, older-on-younger contact) settles it; the mirror versus translation is the cleanest.

**P3 (a)** Ground is flat at 0 m, so seam elevations are $-100$, $-220$, $-280$ m. Write $z = z_0 - ax - by$ with $z_0 = -100$ from DH1:

$$-220 = -100 - 200a \;\Longrightarrow\; a = \frac{120}{200} = 0.60$$

$$-280 = -100 - 400b \;\Longrightarrow\; b = \frac{180}{400} = 0.45$$

$$\tan\delta = \sqrt{0.60^2+0.45^2} = \sqrt{0.36+0.2025} = \sqrt{0.5625} = 0.750 \;\Longrightarrow\; \delta = \mathbf{36.9^\circ}$$

$$\theta_{\text{dip}} = \arctan\frac{0.60}{0.45} = \arctan 1.3333 = 53.1^\circ, \qquad \theta_{\text{strike}} = 53.1^\circ - 90^\circ = \mathbf{323^\circ}$$

**Answer: strike $323$, dip $37^\circ$ toward $053$** (N37W, 37 NE).

**(b)** The section runs $000$–$180$; the true dip direction is $053$; so $\theta = 53.1^\circ$ and

$$\tan\delta_{\text{app}} = \tan(36.87^\circ)\cos(53.13^\circ) = (0.750)(0.600) = 0.450 \;\Longrightarrow\; \delta_{\text{app}} = \mathbf{24.2^\circ}\ \text{(descending north)}.$$

Sanity check without the formula: walking due north the seam drops at $b = 0.45$ m per metre, and $\arctan 0.45 = 24.2^\circ$. ✓ **The section understates the dip by nearly 13 degrees** — enough to badly mis-plan a mine, which is the practical reason the rule exists.

**(c)**

$$z = -100 - 0.60(300) - 0.45(200) = -100 - 180 - 90 = -370\ \text{m},$$

so the seam lies at $\mathbf{370\ \text{m}}$ depth at DH4.

**(d)** The planar model predicts the seam at $z = -100 - 0.60(150) - 0.45(150) = -257.5$ m, i.e. 258 m down — well within a 400 m hole. Two structural explanations:

1. **A fault has excised or displaced the seam.** A **normal fault** cutting the seam removes section on a hole that passes through the fault plane; alternatively the hole sits on a downthrown block and the seam is now below 400 m. The hole itself should show a zone of **breccia, gouge or slickensided surfaces**, and the marker units above and below will be **mismatched across a sharp contact**.
2. **The seam was never there, or was removed before burial** — a depositional pinch-out (the peat swamp simply did not extend that far), or truncation beneath an **unconformity** ([4.1](04-01-relative-dating-unconformities.md)). Here the units above and below are conformable, there is no broken rock, and the seam **thins gradually** in the surrounding holes rather than ending abruptly.

**The observation that separates them is the geometry of the absence in map view.** Drill a ring of holes around the barren one. A **fault** produces a *linear* trace: the seam is absent along a narrow band that cuts across the seam's strike lines, and it reappears offset on the far side, still full-thickness. A **pinch-out or unconformable truncation** produces an *areal, gradational* boundary: the seam thins over hundreds of metres before disappearing, and the missing interval is a consistent stratigraphic gap rather than a displacement.

**Secondary check in the single hole:** compute where each *other* marker horizon should be. Under explanation 1 every horizon below the fault is displaced by the same throw; under explanation 2 only the coal is missing and everything else is where the model puts it.

</details>

## Flashback

**From Lesson 2.4 (How Rock Deforms):** The San Andreas system accommodates 35 mm/yr of relative plate motion, distributed across a deformation zone about 80 km wide. (a) Compute the strain rate in $\text{s}^{-1}$. (b) Compute the lithostatic stress at 14 km depth, the base of the seismogenic zone, taking mean crustal density $2700\ \text{kg/m}^3$. (c) Earthquakes essentially stop below that depth. Say why, using both quantities.

<details>
<summary>Solution</summary>

**(a)** Simple shear across the zone: the strain rate is the velocity difference divided by the zone width.

$$\dot\gamma = \frac{v}{w} = \frac{0.035\ \text{m/yr}}{8.0\times10^{4}\ \text{m}} = 4.375\times10^{-7}\ \text{yr}^{-1}$$

$$\dot\gamma = \frac{4.375\times10^{-7}}{3.156\times10^{7}\ \text{s/yr}} = \mathbf{1.4\times10^{-14}\ \text{s}^{-1}}$$

**That is the number to remember about geologic deformation.** A laboratory rock-mechanics test runs at $10^{-5}$ to $10^{-6}\ \text{s}^{-1}$ — eight or nine orders of magnitude faster. Every strength measurement made in a lab is therefore an *upper bound* on the strength the Earth actually experiences, because slower loading gives creep time to operate.

**(b)**

$$\sigma_v = \rho g z = (2700)(9.81)(1.4\times10^{4}) = 3.71\times10^{8}\ \text{Pa} = \mathbf{371\ \text{MPa}}$$

Useful shorthand: the lithostatic gradient is about $26.5\ \text{MPa/km}$, so roughly **1 kbar per 3.7 km**.

**(c)** Both quantities push the same way at 14 km.

- **Confining pressure** of 371 MPa is comparable to or larger than the rock's brittle strength, so fracture is suppressed and flow is favoured — [2.4](02-04-how-rock-deforms.md)'s single most important control.
- **Temperature** at 14 km on a typical continental geotherm is roughly $300$–$400\ ^\circ\text{C}$, at which quartz begins to deform by dislocation creep ([materials-science 4.2](../../materials-science/lessons/04-02-plastic-deformation-schmid.md)).
- **And the strain rate is the permission slip.** At $1.4\times10^{-14}\ \text{s}^{-1}$, creep has time to accommodate the plate motion continuously. The rock never stores elastic strain up to a failure threshold, so there is nothing to release suddenly.

Above 14 km the same rock is cold enough and confined weakly enough to stay elastic between events, so strain accumulates and is released as stick-slip: **earthquakes nucleate above the brittle–ductile transition, and mylonitic shear zones take up the same motion below it.** This is exactly why 2.5 has two families of structure — faults above, folds and ductile shear zones below — and why seismicity has a sharp depth cutoff you can map.

</details>

## Connections

- **Backward:** [2.4](02-04-how-rock-deforms.md)'s brittle–ductile transition is why faults and folds are two depths of the same deformation; [1.5](01-05-sedimentary-rocks.md)'s way-up indicators are what let you call an antiform a syncline; [1.6](01-06-metamorphic-rocks-rock-cycle.md)'s foliation grows perpendicular to $\sigma_1$, the same stress axis these structures record; [2.2](02-02-plate-boundaries.md) supplies the stress regimes — ridges extend, subduction and collision shorten, transforms shear.
- **Forward:** [2.6](02-06-mountain-building.md) restores fold-and-thrust belts to measure crustal shortening, using exactly the limb-dip and heave arithmetic from P2 and Example 2; [2.7](02-07-earthquakes-seismic-hazard.md) treats a fault plane and its slip vector as the earthquake source; [4.4](04-04-stratigraphy-facies-correlation.md) needs the repeated- and missing-section diagnostics to correlate deformed sections; and [4.5](04-05-reading-a-geologic-map.md) is this lesson applied to a real map — strike and dip symbols, outcrop patterns, the V-rule, and a drawn cross-section.
- **Sideways:** the dip vector is the gradient of the plane's elevation surface, [calc-refresher 4.1](../../calc-refresher/lessons/04-01-partial-derivatives-and-gradient.md), and the three-point problem is a plane through three points, [linalg-refresher 1.4](../../linalg-refresher/lessons/01-04-cross-product-and-orientation.md); the Mohr–Coulomb criterion behind Anderson's dips is [materials-science 4.4](../../materials-science/lessons/04-04-failure-fracture-fatigue-creep.md), and its ductile counterpart is [materials-science 4.2](../../materials-science/lessons/04-02-plastic-deformation-schmid.md); the full principal-stress tensor formalism belongs to [`geophysics`](../../geophysics/syllabus.md) 1.1, which is where the quantitative stress-inversion methods (focal-mechanism and fault-slip inversion) live.
