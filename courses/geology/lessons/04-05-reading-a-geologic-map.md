# Geology · Lesson 4.5: Reading a Geologic Map

> ⏱ ~15 min · Module 4: Geologic Time & the Rock Record · Builds on: [4.1](04-01-relative-dating-unconformities.md), [2.5](02-05-folds-faults-structures.md) · Unlocks: 5.1 (Earth's internal structure)

## Why this matters

Everything in this course so far has been a way of *knowing* something. This lesson is a way of *doing* something, and it is the one competence that most distinguishes a geologist from someone who has read about geology. Hand a physicist a geologic map and they see a coloured picture. Hand it to a geologist and within about a minute they will tell you which way the crust was squeezed, how deep you would have to drill to hit the limestone, and roughly what happened here over the last two hundred million years — in order.

**A geologic map is not a picture of the ground. It is a two-dimensional projection of a three-dimensional solid, sampled along a rough surface, and the whole skill is inverting that projection.** The map records where each rock unit meets the topography with the soil and vegetation stripped away, plus a scatter of orientation measurements. From that you recover the structure at depth. It is a genuine inverse problem, it is solved with a pencil, and it works.

It is also the moment when the whole course locks together. [2.5](02-05-folds-faults-structures.md) gave you strike and dip and the fold and fault geometries; [4.1](04-01-relative-dating-unconformities.md) gave you the licences for converting geometry into time; [1.5](01-05-sedimentary-rocks.md) gave you way-up indicators; [4.4](04-04-stratigraphy-facies-correlation.md) gave you correlation. A map is all of them applied to the same sheet of paper at once — and it is how essentially every geologic claim you will ever read was actually established.

## The idea

**One sentence carries the whole lesson: a contact's outcrop trace is where two surfaces intersect.**

Surface one is the **contact** itself — the top of the limestone, say — which is a geologic surface extending through the rock, usually close to planar over a few kilometres. Surface two is the **ground**, which the map already describes for you through its topographic contours.

Now draw contour lines on *both* surfaces at the same elevations. On the ground they are the brown topographic contours. On the contact they are called **structure contours**, and for a planar contact they are a set of straight, parallel, evenly spaced lines — because that is what the level sets of a plane are. Each one is a **strike line**: a horizontal line lying in the contact.

**Then the contact crops out exactly where a structure contour of elevation $h$ crosses a topographic contour of the same elevation $h$.** Join those crossings and you have drawn the outcrop trace. Run the construction backwards — read the trace off a published map and recover the structure contours — and you have the dip.

That single statement is not a rule of thumb. It is the *definition* of an outcrop trace, and every pattern in this lesson is a corollary of it:

- **Horizontal beds** have all their structure contours at one elevation, so the trace *is* a topographic contour. Flat-lying strata make outcrop bands that wrap the hills like contour lines — the Colorado Plateau look.
- **Vertical beds** have their structure contours stacked on top of one another, so the trace is a single straight line. Vertical beds ignore topography completely and run dead straight over hill and valley.
- **Dipping beds** sit between the two, and how far between is exactly the dip. That is the **V-rule**.

Everything else — plunging folds, domes, faults, unconformities — is this construction plus the geometry you already know from [2.5](02-05-folds-faults-structures.md).

## The formal version

### What is actually on the sheet

A geologic map carries four things, and it pays to read them in this order.

1. **The legend** — a stack of unit boxes, **ordered youngest at the top**. That ordering is not decoration: **the legend is a stratigraphic column in disguise**, and reading it first tells you the local relative-age sequence before you look at a single contact. Units carry letter codes whose first letter is the period (K for Cretaceous, J for Jurassic, Tr for Triassic, Q for Quaternary) followed by a lithology or formation abbreviation.
2. **Contacts**, drawn as lines whose *style* encodes their kind: a plain line for a **depositional** contact, a heavier line for a **fault**, a line with the intrusive body's ornament for an **intrusive** contact, and a wavy or specially annotated line for an **unconformity**. Dashed means inferred; dotted means concealed beneath cover.
3. **Orientation symbols** — a long **strike line** with a short **dip tick** on the down-dip side and the dip angle in degrees ([2.5](02-05-folds-faults-structures.md)); a small cross-in-a-circle for **horizontal** beds; a plain cross for **vertical** beds; plus fold axial traces with plunge arrows, and hachures or teeth on faults.
4. **The topography** — contours and a contour interval. **Without topography a geologic map is only half readable**, which is why the two are almost always printed together.

### Structure contours, the master construction

Let a contact be a plane with elevation

$$z = z_0 - a\,x - b\,y$$

($x$ east, $y$ north, $z$ up, all in metres; $a$ and $b$ dimensionless). Its level sets $z = h$ are straight parallel lines — the structure contours — and from [2.5](02-05-folds-faults-structures.md) their common bearing is the strike, with $\tan\delta = \sqrt{a^2+b^2}$.

The working form is the one you use with a ruler. If two structure contours differing by $\Delta z$ in elevation are a perpendicular distance $d$ apart on the map, then

$$\boxed{\;\tan\delta = \frac{\Delta z}{d}\;}$$

*In words: the dip is the elevation drop divided by the map distance you had to travel to get it — a slope, measured on paper.* Close-spaced structure contours mean a steep dip; widely spaced ones mean a gentle dip; parallel to a strike line the elevation never changes at all.

**How you get structure contours from a real map:** find every place the contact crosses a *topographic* contour. Each such crossing is a point of known elevation on the contact. Join the ones at equal elevation with straight lines and you have the structure contours, for free, without a compass and without ever visiting the outcrop.

### The V-rule, derived

Now put a valley across it. Take the stream to flow in the $+x$ direction with gradient $s$ (elevation drop per unit horizontal distance), and let the valley be $D$ deep at its axis relative to the interfluve on either side. Let the contact's elevation fall at rate $m$ in the downstream direction, so $m$ is the tangent of the **apparent dip measured downstream**:

$$m = \tan\delta\,\cos\theta$$

with $\theta$ the angle between the downstream direction and the true dip direction — the apparent-dip relation from [2.5](02-05-folds-faults-structures.md). Take $m$ positive when the contact dips downstream.

On the interfluve the ground is $z_g = G - sx$ and the contact is $z_c = z_0 - mx$; they meet where $z_0 - G = (m-s)\,x$. At the valley axis the ground is $D$ lower, so they meet where $z_0 - G + D = (m-s)\,x$. Subtracting, the trace is displaced **downstream** by

$$\boxed{\;\Delta = \frac{D}{\tan\delta\cos\theta - s}\;}$$

*In words: the trace jumps downstream by the valley's depth divided by how much faster the contact descends than the stream does.* One formula, and every case anyone ever states as a separate rule falls out of its sign:

| Case | $m$ versus $s$ | $\Delta$ | Outcrop trace |
|---|---|---|---|
| Dips **upstream** | $m < 0$ | negative | Vs **upstream** — which is the dip direction |
| Dips **downstream**, steeper than the stream | $m > s$ | positive | Vs **downstream** — which is the dip direction |
| **Horizontal** bed | $m = 0$ | $-D/s$ | identical to a topographic contour |
| **Vertical** bed | $m \to \infty$ | $0$ | straight line, no V at all |
| Dips **downstream, gentler than the stream** | $0 < m < s$ | negative | Vs **upstream** — the exception |
| Bed parallel to the stream surface | $m = s$ | $\pm\infty$ | trace never crosses; it runs along the valley |

$$\boxed{\;\text{The outcrop trace Vs in the direction of dip, except when the bed dips downstream more gently than the stream.}\;}$$

**Two things this derivation buys you that the memorized rule does not.** First, the exception is not arbitrary — it needs $m$ to land in the narrow window between $0$ and $s$, and stream gradients are small (a few percent), so the window is thin and the exception is genuinely rare. Second, when the exception *does* apply, $\Delta$ is enormous: the trace runs a long way up the valley before it crosses, which is a visible warning sign rather than a silent trap.

**And note the sense of the two V's.** Topographic contours always V **upstream** (that is the $m=0$ row). So whenever the beds dip downstream — the common case — **the contours and the contacts V in opposite directions**, and you can read the dip direction off the map from three metres away.

### The outcrop-pattern catalogue

Everything below is the same construction, and every row is a *prediction you can check*.

| Map pattern | Structure | The diagnostic |
|---|---|---|
| Trace follows a topographic contour | **horizontal beds** | it closes around hilltops, and the same unit caps every summit at the same elevation |
| Trace dead straight across all relief | **vertical beds** | no deflection at valleys whatsoever |
| Trace Vs at valleys | **dipping beds** | V points down-dip; the size of the V gives the dip |
| Bands **repeated in mirror order**, dips reversing | **fold** | ages symmetric about the hinge; anticline if the oldest unit is in the middle ([2.5](02-05-folds-faults-structures.md)) |
| Bands **repeated in the same order**, dips unchanged, older-on-younger contact | **thrust** | a translation, not a reflection |
| Bands close around a **nose** | **plunging fold** | an **anticline's nose points in the plunge direction**; a **syncline's nose points opposite to plunge**, so the syncline *opens* down-plunge |
| Roughly circular **concentric rings** | **dome or basin** | **oldest ring in the centre means a dome**; youngest in the centre means a basin |
| Contacts terminate abruptly along a line that **cuts across** them | **fault** | hachures give the downthrown block; teeth give the upper plate of a thrust |
| A unit **missing** from a traverse | **normal fault or unconformity** | a fault is a sharp line cutting contacts at an angle; an unconformity is roughly parallel to bedding, laterally persistent, with a regionally consistent gap ([4.1](04-01-relative-dating-unconformities.md)) |
| One contact **truncates** several others at an angle | **angular unconformity** or an intrusive contact | an unconformity has sediment above it; an intrusion has a chilled margin and a baked aureole on *both* sides ([1.4](01-04-igneous-rocks-and-bodies.md)) |

Three rules of thumb make a map readable in the first minute, and they are worth memorizing as a set:

- **Repeated stratigraphy means folding or thrusting.**
- **Missing section means a normal fault or an unconformity.**
- **Older rock in the middle means an anticline or a dome.**

### Two measurements you will make constantly

**True thickness from outcrop width.** Let a unit's outcrop band be $w$ wide *measured horizontally on the map, perpendicular to strike*, with the ground sloping at angle $\alpha$ and the beds dipping at $\delta$ in the same direction. Then

$$\boxed{\;t = w\left(\sin\delta - \cos\delta\,\tan\alpha\right)\;}$$

*In words: on flat ground the thickness is the band width times the sine of the dip, and sloping ground in the dip direction widens the band and so must be subtracted off.* If the ground slopes *against* the dip, flip the sign of $\tan\alpha$. On flat ground this is the familiar $t = w\sin\delta$; and if the ground happens to slope at exactly the dip ($\alpha = \delta$) the band is infinitely wide and the formula correctly gives zero apparent information.

**Depth to a contact.** If a contact crops out at elevation $z_{oc}$ and your site lies a horizontal distance $L$ **down-dip** from that outcrop with ground elevation $z_P$, the contact lies at elevation $z_{oc} - L\tan\delta$, so

$$\boxed{\;\text{depth below the site} = z_P - z_{oc} + L\tan\delta\;}$$

*In words: walk down-dip, drop at the dip angle, and subtract from where you are standing.* If your site is not exactly down-dip, use the apparent dip $\tan\delta\cos\theta$ instead. **This one calculation is why maps are worth money**: it is the sum of every well, mine shaft and tunnel portal ever sited.

### Drawing the cross-section

The section is where you commit to an interpretation, and the discipline of drawing one is what exposes a bad reading.

1. **Choose the line perpendicular to strike.** Otherwise every dip you plot is an apparent dip and you will draw the structure too shallow. If the line must be oblique, convert each dip with $\tan\delta_{\text{app}} = \tan\delta\cos\theta$.
2. **Draw the topographic profile first**, at the *same horizontal scale as the map*, from the contour crossings along the line.
3. **Use no vertical exaggeration** if you want the dips on the section to be the real ones. Exaggeration steepens every angle and is fine for a stratigraphic display and poisonous for a structural one.
4. **Drop every contact crossing** from the map line onto the profile, and mark each with its dip as a short tick.
5. **Extend contacts downward honouring constant unit thickness.** A unit 170 m thick at outcrop stays 170 m thick unless you have evidence it thins.
6. **Project the eroded structure above the ground surface with dashed lines.** The arch over an anticline is a prediction, and drawing it is the check that the two limbs are geometrically consistent.
7. **Extrapolate faults at their measured dip, apply the throw the map implies, and then audit the result**: no unit may be created or destroyed, and ideally the bed lengths should restore to a sensible pre-deformation length ([2.6](02-06-mountain-building.md)'s balanced sections).

### From map to history

Finally, run [4.1](04-01-relative-dating-unconformities.md) over the finished section. The order is almost always: **deposition** (legend order, superposition) → **deformation** (tilting and folding come before whatever truncates them) → **intrusion** (dated by what it cuts and what bakes it) → **faulting** (dated by what it offsets and what it fails to offset) → **erosion and unconformities** (each truncation is a cross-cutting event) → **surficial cover** (alluvium, till, soil — youngest, and it obeys topography rather than structure). Where two events cannot be ordered, say so; that is a result, not a failure.

## Picture

![A geologic map with a cross-section drawn directly beneath it at the same horizontal scale. In the map, thin brown topographic contours at 400, 300 and 200 metres swing sharply west where an east-flowing stream has cut a valley across the middle of the sheet, while the three geologic contacts in the western half swing only a little to the east in the same valley, so the contacts V downstream in the direction of dip while the contours V upstream in the opposite sense. West of a normal fault carrying hachures on its downthrown western side, four units dip 15 degrees east with the oldest in the west; east of the fault the same units wrap around a north-plunging anticline whose nose closes northward with the oldest exposed unit, the Triassic limestone, in its core. A red dashed section line labelled A to A prime runs east to west across the southern part of the sheet, and the cross-section below it, drawn with no vertical exaggeration, shows the east-dipping panel truncated against the west-dipping normal fault and the anticline beyond, with dashed lines continuing the eroded arch above the present land surface. A full explanation lists the five map units youngest at top, together with the strike and dip, fault, fold axis, contact and contour symbols.](assets/04-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — get the dip and the thickness without leaving your desk).** On the map above, use the western block only. The Trl/Jss contact runs north–south on the interfluves; where it crosses the valley its trace is displaced **520 m east**. The valley is **100 m** deep at the stream, and successive contour crossings on the stream are **1.33 km** apart. The Jss outcrop band on the interfluve, measured due east, is **920 m** wide. Find (a) the dip, and (b) the true thickness of Jss.

**(a) The dip, from the V.** First the stream gradient, since the V formula needs it:

$$s = \frac{100\ \text{m}}{1330\ \text{m}} = 0.0752 \qquad (\alpha = \arctan 0.0752 = 4.3^\circ).$$

The trace Vs **downstream**, so the beds dip downstream (east) and $\Delta = +520\ \text{m}$. The stream runs due east and the contacts strike due north, so the downstream direction *is* the dip direction and $\theta = 0$. Rearranging the V relation:

$$\tan\delta = s + \frac{D}{\Delta} = 0.0752 + \frac{100}{520} = 0.0752 + 0.1923 = 0.2675$$

$$\delta = \arctan 0.2675 = \mathbf{15.0^\circ \ \text{east}}$$

which is exactly what the strike-and-dip symbols on the map say. **You have just measured a dip with a ruler, from a printed sheet, and it agrees with a compass reading taken in the field.** That is the whole argument for this lesson.

Sanity check on the size of the effect: the topographic contours in the same valley are displaced $D/s = 100/0.0752 = 1330\ \text{m}$ **upstream**, more than twice as far and in the opposite direction. The contrast between a big upstream contour V and a small downstream contact V is the visual signature of moderately dipping beds.

**(b) The true thickness.** The ground slopes east at $\alpha = 4.3^\circ$ — the same direction as the dip — so the outcrop band is wider than it would be on flat ground:

$$t = w\left(\sin\delta - \cos\delta\tan\alpha\right) = 920\left(0.2588 - (0.9659)(0.0752)\right)$$

$$t = 920\,(0.2588 - 0.0726) = 920\,(0.1862) = \mathbf{171\ \text{m}}$$

**Compare the answer you would have got by ignoring the slope:** $t = w\sin\delta = 920(0.2588) = 238\ \text{m}$, which is **39 percent too thick**. A 4-degree slope you would not even notice underfoot has thrown the thickness out by nearly forty percent, because what matters is the *difference* between $\tan\delta$ and $\tan\alpha$, and both are small numbers.

**Example 2 (why you'd care — the whole map, in about a minute).** Read the map above: give the structure, the history, and the depth to a target.

**Step 1 — legend first.** Youngest to oldest: Qal, Ksh, Jss, Trl, Pms. That is the relative-age sequence before any geometry.

**Step 2 — the western block.** North–south contacts, ages younging steadily eastward, dip symbols all reading 15 degrees east. That is a **homocline**: a single east-dipping panel, no repetition, no reversal.

**Step 3 — the eastern block.** The bands wrap around a **nose that closes to the north**, and **Trl — an older unit — sits in the middle**. Older in the core means an **anticline** ([2.5](02-05-folds-faults-structures.md)); the closure of an anticline points in the plunge direction, so the fold **plunges north**; the limb symbols read 25 degrees, dipping away from the axis on both sides. A fold shortens perpendicular to its axis, so $\sigma_1$ was horizontal and **east–west**.

**Step 4 — what lies between them.** West of the fault the beds dip 15 degrees *east*; immediately east of it, the anticline's western limb dips 25 degrees *west*. **The two dip domains face each other, so a syncline must lie between them** — and its trough is exactly the broad Ksh area on either side of the fault, since a syncline holds the youngest rock in its core. The fault runs along the synclinal hinge.

**Step 5 — the fault.** Hachures on the western side, so the western block is downthrown. It is therefore the hanging wall, and hanging-wall-down is a **normal fault**: $\sigma_1$ vertical, **extension** ([2.5](02-05-folds-faults-structures.md)). The fault cuts the folded contacts, so by cross-cutting it is younger than the folding. **The map therefore records two stress regimes in a definite order: east–west shortening first, east–west extension afterwards** — a very common orogenic sequence, and exactly [2.6](02-06-mountain-building.md)'s collapse of over-thickened crust.

**Step 6 — the surface.** Qal follows the valley floor, cuts across everything, and is deformed by nothing. Youngest.

**Step 7 — the history**, in order, with the licence for each step ([4.1](04-01-relative-dating-unconformities.md)):

1. Pms, Trl, Jss, Ksh deposited in that order — legend order plus superposition.
2. Folded into an anticline–syncline pair about north–south axes, with a northward plunge — original horizontality, plus the fold geometry.
3. Normal faulting — cross-cutting; the fault offsets the folded contacts.
4. Erosion to the present land surface — every contact is truncated by topography.
5. Valley incision, then alluvium — Qal is undeformed and obeys topography.

**What is *not* determined:** any absolute age, the throw on the fault (you would need to correlate a marker across it), and whether the plunge was there from the start or was imposed by a later cross-fold.

**Step 8 — the money question.** Suppose you need the top of Trl beneath a site on the section line in the western block, 1.0 km east of where the Trl/Jss contact crops out at elevation 470 m. Your site's ground elevation is 395 m. Going 1.0 km **down-dip**:

$$\text{depth} = z_P - z_{oc} + L\tan\delta = 395 - 470 + 1000(0.2679) = -75 + 268 = \mathbf{193\ \text{m}}$$

**And now notice what would have gone wrong east of the fault.** The same contact there dips 25 degrees, and on the anticline's *western* limb it dips west — so a well sited by the western block's numbers would drill in the wrong direction entirely. **The section is not decoration; it is what stops you from doing that.**

## Watch out

- **You might think the V always points upstream, because that is what contours do.** Topographic contours V upstream; **geologic contacts V in the direction of dip**, which for downstream-dipping beds is the *opposite* sense. On a real map the two families of V's usually point in opposite directions, and that opposition is a free dip-direction reading.
- **You might apply the V-rule without checking the stream gradient.** If a bed dips downstream more gently than the stream falls, the trace Vs upstream — opposite to the dip. It is rare, because it needs $\tan\delta\cos\theta$ to sit in the narrow band between $0$ and $s$, but it is exactly the case that shows up in gently dipping strata along a steep mountain stream. The tell is that the V is enormously drawn out along the valley.
- **You might read map offset across a fault as the slip.** It is **separation**, not slip ([2.5](02-05-folds-faults-structures.md)). Pure dip-slip on a fault cutting dipping beds produces horizontal map separation with no strike-slip component whatsoever, and pure strike-slip on a fault cutting dipping beds produces apparent vertical separation. Only a piercing point — an offset *linear* feature — gives you slip.
- **You might assume every fold nose points down-plunge.** That is true of an **anticline**. A **syncline's** nose points the *opposite* way and the fold opens in the plunge direction. Get this backwards and you will read the plunge, and therefore the direction to drill, exactly wrong. The safe move is to use the ages: the closure of a fold whose core is *older* points down-plunge.
- **You might read the widest band as the thickest unit.** Outcrop width is thickness divided by (roughly) the sine of the dip, and it is further inflated by ground slope in the dip direction. A gently dipping 50 m limestone on a gentle slope can outcrop over a wider band than a vertical 500 m sandstone.
- **You might draw the section along the road, or along the valley, because that is where the outcrops are.** A section not perpendicular to strike shows apparent dips, always shallower than the truth, and a section drawn along strike shows flat-lying beds no matter how steeply they dip.

## One-liner

> A geologic map is two surfaces intersecting: draw structure contours on the contact and topographic contours on the ground, and the outcrop trace runs through every place where the two meet at the same elevation — which is why beds V in the direction of dip, why anticlines put the oldest rock in the middle, and why a ruler on a printed sheet can tell you how deep to drill.

## Problems

**P1 (🟢)** A geologic map has a 100 m contour interval. The base of a sandstone crosses the 600 m contour at two places 1.4 km apart along a line bearing $040$, and crosses the 500 m contour at a point 620 m from that line, on its southeast side. (a) Give the strike and dip. (b) Measured perpendicular to strike on ground sloping $3^\circ$ in the dip direction, the sandstone's outcrop band is 1150 m wide; find its true thickness, and state how badly you would err by ignoring the slope. (c) A well is to be sited 2.0 km down-dip from that 500 m point, where the ground elevation is 380 m. How deep is the base of the sandstone?

**P2 (🟡)** Traversing due east along a map you cross units in the order D, C, B, A, B, C, D (A is the oldest); the contacts run north–south. The beds dip $35^\circ$ **west** in the western D and $35^\circ$ **east** in the eastern D. In the northern part of the sheet the A band closes into a rounded nose whose tip points north; the fold plunges $8^\circ$. In the southeast, a flat-lying unit E rests on a surface that truncates C, B and A in turn. (a) Name the structure crossed on the traverse, say where its hinge is, and give the orientation of $\sigma_1$. (b) Which way does the fold plunge, and by what rule? (c) Name the contact beneath E, give the minimum sequence of events it demands, and state one observation that would distinguish it from a fault. (d) A drill site lies 4.0 km north of the nose. How far below a flat ground surface is the fold's hinge line there?

**P3 (🔴)** A map covers 10 km east–west of nearly flat plateau. Units, oldest first: **Pms**, **Trl**, **Jss**, **Ksh**. Strike-and-dip symbols read $20^\circ$ east everywhere and all contacts run north–south. Traversing east you cross Pms, then Trl, then at easting 6.0 km a heavy north–south line with **hachures on its eastern side**; east of that line you are in Ksh. **Jss is present throughout the region but appears nowhere on this traverse.** The fault dips $62^\circ$ east. Restoring the footwall data across the fault shows that the Jss/Ksh contact, which crops out at easting 6.0 km on the hanging wall, would have cropped out at easting 8.2 km had there been no fault. Jss is 400 m thick regionally. A stream valley 150 m deep runs east across the map, falling 40 m per kilometre; where the Pms/Trl contact crosses it, the trace swings 460 m east of its interfluve position. An oval granite body with a 300 m contact aureole straddles the fault trace; the aureole is developed in **both** blocks and the granite is not offset.

(a) Classify the fault, give the stress regime, and estimate the throw. Then show that this throw is enough to remove Jss from the traverse entirely.
(b) Use the valley crossing to compute the dip of the Pms/Trl contact and compare it with the map symbols.
(c) Give the full order of events, naming the licence for each, and say honestly which pair of events the map cannot order.
(d) A well is to be drilled at easting 4.0 km, where the ground is at 300 m, to test the top of Trl. That contact crosses the 400 m contour at easting 2.8 km. How deep must the well go?

<details>
<summary>Solutions</summary>

**P1 (a)** Two points at the *same* elevation on a contact define a **strike line**, so the 600 m structure contour bears $040$ and

$$\text{strike} = \mathbf{040}, \qquad \text{dip direction} = 040 + 90 = \mathbf{130}\ \text{(southeast)},$$

since the 500 m contour lies southeast of the 600 m one and the surface therefore falls that way. The two structure contours differ by $\Delta z = 100\ \text{m}$ and are $d = 620\ \text{m}$ apart, so

$$\tan\delta = \frac{\Delta z}{d} = \frac{100}{620} = 0.1613 \;\Longrightarrow\; \delta = \mathbf{9.2^\circ}.$$

Answer: **strike 040, dip 9 degrees toward 130** (quadrant: N40E, 9 SE).

**(b)** Ground slopes $\alpha = 3^\circ$ in the dip direction, so use the subtraction form:

$$t = w\left(\sin\delta - \cos\delta\tan\alpha\right) = 1150\left(0.1592 - (0.9873)(0.05241)\right)$$

$$t = 1150\,(0.1592 - 0.0517) = 1150\,(0.1075) = \mathbf{124\ \text{m}}.$$

Ignoring the slope gives $t = 1150\sin 9.2^\circ = 183\ \text{m}$ — **48 percent too thick**. **The error blows up at gentle dips**, because $\tan\delta$ and $\tan\alpha$ are then comparable and you are taking the difference of two similar small numbers.

**(c)** The contact is at 500 m at the reference outcrop; 2.0 km down-dip it has fallen by $2000\tan\delta$:

$$z_{\text{contact}} = 500 - 2000(0.1613) = 500 - 323 = 177\ \text{m}$$

$$\text{depth below the well site} = 380 - 177 = \mathbf{203\ \text{m}}.$$

**P2 (a)** The sequence is a **mirror** about the middle A band and the dips **reverse** across it, pointing *away* from the middle. That is a **fold**, not a fault repeat, and the **oldest unit sits in the core**, so it is an **anticline** ([2.5](02-05-folds-faults-structures.md)) with its **hinge running north–south along the A band**. Equal limb dips make it upright. A fold shortens perpendicular to its axis, so

$$\sigma_1\ \text{horizontal, east--west}; \quad \sigma_2\ \text{horizontal, north--south}; \quad \sigma_3\ \text{vertical}.$$

**(b)** The bands close around a nose pointing **north**, and **an anticline's nose points in the plunge direction**, so the fold **plunges north**. (Had this been a syncline — youngest in the core — the same north-pointing nose would have meant a *south* plunge.)

**(c)** Flat-lying E resting on a surface that truncates folded C, B and A is an **angular unconformity**. Minimum sequence: deposit A through D → fold about a north–south axis (and impose the plunge) → uplift and erode, beveling the tilted units flat → deposit E. E is neither folded nor tilted, so **the folding is older than E**, which is the whole content of the unconformity.

To distinguish it from a fault: the surface beneath E is **roughly parallel to E's own bedding and laterally persistent**, it carries **sediment above it** (typically a basal conglomerate of clasts reworked from A, B and C — the inclusions licence), and there is **no gouge, breccia or slickensided surface**. A fault trace instead **cuts across contacts at an angle** and juxtaposes rock without a depositional surface between.

**(d)** The hinge line plunges $8^\circ$ north, and it reaches the surface at the nose. 4.0 km north of the nose it lies

$$d = 4000\tan 8^\circ = 4000(0.14054) = \mathbf{562\ \text{m}}$$

below a flat ground surface. **This is the standard way a plunge is turned into a drilling target** — a plunging anticline is the classic structural trap, and the nose tells you where to start and how fast the crest dives.

**P3 (a)** Hachures mark the **downthrown** block, so the **eastern** block has dropped. The fault dips $62^\circ$ east, so the block resting on the fault surface — the hanging wall — is the eastern one. **Hanging wall down is a normal fault**: by Anderson's rule ($\sigma_1$ vertical, $\sigma_3$ horizontal and perpendicular to the fault strike) the crust here was in **east–west extension**. The $62^\circ$ dip is squarely in the range a fresh normal fault should have ([2.5](02-05-folds-faults-structures.md)).

*Throw.* Dropping the hanging wall by $h$ shifts its outcrop traces **up-dip (west)** by $h/\tan\delta$ on flat ground. The observed shift is $8.2 - 6.0 = 2.2\ \text{km}$, so

$$h = 2200\tan 20^\circ = 2200(0.36397) = \mathbf{800\ \text{m}}.$$

*Why Jss vanishes.* On flat ground a unit of thickness $t$ dipping $\delta$ crops out in a band of width

$$w = \frac{t}{\sin\delta} = \frac{400}{\sin 20^\circ} = \frac{400}{0.342} = 1170\ \text{m}.$$

The fault shifts the hanging-wall pattern 2200 m west — **nearly twice the width of the Jss band** — so the whole of Jss's outcrop is carried west of the fault trace, where it does not exist, while the footwall's Jss is carried east of it. The unit is cut out of the traverse. **This is the "missing section" diagnostic in its quantitative form: a strike-parallel normal fault removes a unit from the map whenever its throw exceeds the unit's thickness times the ratio $\tan\delta/\sin\delta$**, that is, whenever $h > t/\cos\delta$. Here $t/\cos\delta = 400/0.940 = 426\ \text{m}$, and $800 > 426$. ✓

**(b)** The stream runs east, the beds strike north–south, so the downstream direction is the dip direction and $\theta = 0$. With $s = 40/1000 = 0.040$, $D = 150\ \text{m}$ and $\Delta = +460\ \text{m}$ (downstream):

$$\tan\delta = s + \frac{D}{\Delta} = 0.040 + \frac{150}{460} = 0.040 + 0.3261 = 0.3661$$

$$\delta = \arctan 0.3661 = \mathbf{20.1^\circ\ \text{east}},$$

in agreement with the map symbols. **Two completely independent measurements — a field compass and a ruler laid on a contour map — give the same dip**, which is the check that tells you the map is internally consistent and that the beds really are planar over this distance.

**(c)** The order, with the licence for each step:

1. **Pms, Trl, Jss, Ksh deposited**, in that order — legend order plus **superposition**.
2. **Tilted $20^\circ$ east** — **original horizontality**; marine and fluvial strata are not laid down dipping 20 degrees.
3. **Normal faulting** — **cross-cutting**: the fault displaces all four units.
4. **Granite intruded** — **cross-cutting and baked contacts**: the aureole is developed in **both** blocks and the granite is **not offset**, so the intrusion **postdates the fault**. Had the granite been older, the fault would have sliced it and its aureole in two.
5. **Erosion to the present surface** — every contact is truncated by topography.
6. **Valley incision** — youngest; it cuts the erosion surface.

**What the map cannot order: the tilting and the faulting.** Both precede the granite and both postdate deposition, but nothing on this map shows the fault cutting a *pre-existing* tilt or being tilted itself. The $62^\circ$ dip is *suggestive* — Anderson predicts about $60^\circ$ for a normal fault formed with $\sigma_1$ vertical, which is what you get if the beds were already tilted and the fault broke fresh — but a fault formed before tilting and then rotated 20 degrees would also end up near $62^\circ$ from a $42^\circ$ start, which is not impossible. **Say "unresolved, with a preference", not "faulting after tilting".**

**(d)** The Trl/Jss contact is at 400 m elevation at easting 2.8 km. The well at 4.0 km lies $L = 1.2\ \text{km}$ **down-dip** (due east, the dip direction), so the contact there is at

$$z_{\text{contact}} = 400 - 1200\tan 20^\circ = 400 - 1200(0.36397) = 400 - 437 = -37\ \text{m},$$

i.e. 37 m below sea level. With the ground at 300 m,

$$\text{depth} = 300 - (-37) = \mathbf{337\ \text{m}}.$$

**Site it any further east and you would need the fault:** past easting 6.0 km the target is in the downthrown block, 800 m deeper, and the well would first have to pass through the fault zone.

</details>

## Flashback

**From Lesson 2.5 (Folds, Faults & Structures):** A roadcut exposes one fold. Its hinge is visible near the top of the cut and the beds arch **convex-upward** over it, so the structure closes upward; both limbs run east from the hinge. The **steeper** limb dips $55^\circ$ east and the **gentler** limb dips $20^\circ$ east. Graded bedding shows the steeper limb **youngs upward** and the gentler limb **youngs downward**. (a) Antiform or synform? (b) Anticline or syncline — and which limb is overturned? (c) Interlimb angle and tightness class. (d) What does the pair of answers imply about the deformation history, and what would the ages look like on a map across the structure?

<details>
<summary>Solution</summary>

**(a)** The beds close upward, so the structure is an **antiform**. That is all "closes upward" licenses — antiform and synform are *shape* words and say nothing about age ([2.5](02-05-folds-faults-structures.md)).

**(b)** Both limbs run east from the hinge, and the steeper one descends faster, so east of the hinge **the $55^\circ$ limb is the lower one and the $20^\circ$ limb is the upper one**. The core of the fold is the wedge between them.

- From the lower ($55^\circ$) limb, the core lies **above**. That limb youngs upward, so the core is **younger**.
- From the upper ($20^\circ$) limb, the core lies **below**. That limb youngs downward, so the core is **younger**.

Both way-up readings agree: **the youngest rock is in the core, so this is a syncline** — an **antiformal syncline**. The **overturned limb is the gentler, upper one**, the one that youngs downward.

**(c)** Both limbs dip east, so the angle between the limb planes is the difference of the dips, and because the limbs converge toward the hinge that difference *is* the interlimb angle:

$$\text{interlimb} = 55^\circ - 20^\circ = \mathbf{35^\circ},$$

which is **close** on [2.5](02-05-folds-faults-structures.md)'s scale (close spans $70^\circ$ to $30^\circ$). Check it with vectors pointing away from the hinge, $(\cos 55^\circ, -\sin 55^\circ)$ and $(\cos 20^\circ, -\sin 20^\circ)$: their dot product is $0.5736(0.9397) + 0.8192(0.3420) = 0.8192$, and $\arccos 0.8192 = 35.0^\circ$. ✓

**(d)** **A syncline that closes upward has been rotated past the vertical since it formed**, so this requires **two episodes of deformation** — the original folding, then a later event (a second folding phase, or bodily rotation in the hanging wall of a thrust) that overturned the whole structure. A single progressive shortening cannot do it.

On a map across the structure the ages would be **symmetric about the hinge trace with the youngest unit running along it**, exactly the syncline pattern in this lesson's outcrop-pattern catalogue. **And here is the trap the way-up indicators save you from:** on the overturned limb, reading superposition naively from the outcrop gives the age order backwards, so a geologist who skipped the graded bedding would call this an anticline, put the oldest rock in the core, and get the entire local history inverted.

</details>

## Connections

- **Backward:** [2.5](02-05-folds-faults-structures.md) supplies every ingredient — strike and dip, apparent dip, the fold and fault geometries, the older-in-the-core rule, and the repeated-versus-missing-section diagnostics; [4.1](04-01-relative-dating-unconformities.md) supplies the licences that turn a finished section into an ordered history; [1.5](01-05-sedimentary-rocks.md)'s way-up indicators are what let you call an antiform a syncline; [1.4](01-04-igneous-rocks-and-bodies.md)'s baked-contact test is how an intrusion gets dated on a map; [4.4](04-04-stratigraphy-facies-correlation.md) is how you know a unit traced across the sheet is the same unit.
- **Forward:** 5.1 assembles Earth's internal layers from evidence gathered exactly this way, at continental scale; 5.4 turns the depth-to-contact calculation into the siting of wells, mines and aquifers, and the plunging-anticline nose of P2 into a hydrocarbon trap; [3.6](03-06-groundwater-aquifers-karst.md)'s confined aquifer is a map problem before it is a Darcy problem — you have to know where the aquiclude goes; and Module 4's boss problem is a map-and-core reading of precisely this kind.
- **Sideways:** structure contours are the **level sets of a plane**, and the dip vector is minus the gradient of the contact's elevation surface — the object from [calc-refresher 4.1](../../calc-refresher/lessons/04-01-partial-derivatives-and-gradient.md), so a geologist contouring a coal seam and a student sketching level curves are doing the same thing; the three-point problem is a plane through three points, [linalg-refresher 1.4](../../linalg-refresher/lessons/01-04-cross-product-and-orientation.md); [3.3](03-03-rivers-landscape-evolution.md)'s drainage patterns are the same inverse problem run on the topography instead of the geology, since a trellis pattern is a fold belt announcing itself through the rivers; and the quantitative structural-inversion methods that automate all of this belong to [`geophysics`](../../geophysics/syllabus.md).
