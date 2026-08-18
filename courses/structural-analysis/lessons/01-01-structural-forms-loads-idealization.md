# Structural Analysis · Lesson 1.1: Structural Forms, Loads & Idealization

> ⏱ ~15 min · Module 1: Statically Determinate Structures · Builds on: [`statics` 1.5 (rigid-body equilibrium & supports)](../../statics/lessons/01-05-rigid-body-equilibrium-supports.md), [`statics` 3.1 (distributed loads)](../../statics/lessons/03-01-distributed-loads-resultants.md) · Unlocks: [1.2 (supports, reactions & determinacy)](01-02-supports-reactions-determinacy.md)

## Why this matters

Before you can compute a single reaction, you have to decide *what to compute it on*. A real building is a mess of concrete, bolts, welds, and rebar — none of which appears in your equilibrium equations. Structural analysis begins with an act of translation: turning that mess into a **line diagram** of members, joints, and supports simple enough to solve by hand, yet faithful enough that the answer keeps the building standing. Every technique in this course — shear diagrams, deflections, slope-deflection, matrix stiffness — runs on the idealized model, not the real thing. Get the idealization wrong and the most elegant analysis downstream is just a precise wrong answer. This is also the layer of judgment that finite-element software silently *inherits* from you: FEA solves the model you feed it, pin-for-pin.

## The idea

Picture the floor you're standing on. Your weight presses on a **slab**; the slab hands its load to the **beams** it rests on; the beams hand theirs to bigger **girders** or straight to **columns**; the columns carry everything down to the **foundation**, which spreads it into the soil. Load doesn't teleport to the ground — it flows, member to member, along a **load path**. Analysis is really just accounting for that flow, one member at a time.

Two moves make hand analysis possible. First, **reduce each part to its essence**: a beam becomes a line (its centroidal axis), a bolted or welded joint becomes either a frictionless *pin* (transmits force, but freely rotates — no moment) or a *rigid* connection (holds the angle — transmits moment too), and a support becomes an idealized symbol (roller, pin, or fixed). Second, **spread surface loads onto lines**. A slab carries load over an *area* (kilonewtons per square meter, kPa), but a beam is a line, so we ask: *which slab area drains onto this beam?* That patch is the beam's **tributary area**, and multiplying its load by the tributary *width* converts a surface pressure into a **line load** — a uniformly distributed load (UDL) in kN/m that a beam can actually carry.

None of this is exact, and that's the point. A pin isn't truly frictionless; a "line" has real width. We idealize because a model you can solve and sanity-check beats a model you can't — as long as you know which assumptions you made and what each one costs.

## The formal version

**Structural forms.** The vocabulary of line models:

- **Beam** — a member loaded transversely (across its axis), resisting load by bending. Carries internal shear $V$ and bending moment $M$.
- **Column** — a member loaded along its axis, resisting by compression (and prone to buckling, [`mechanics-of-materials` 4.4](../../mechanics-of-materials/lessons/04-04-column-buckling.md)).
- **Truss** — a triangulated assembly of straight members joined by pins; ideally every member carries only **axial** force (tension or compression), no bending ([`statics` 2.1](../../statics/lessons/02-01-trusses-method-of-joints.md)).
- **Frame** — members joined by *rigid* connections, so joints transmit moment; members carry axial force, shear, and bending together.
- **Arch / cable** — curved forms that carry load primarily by axial thrust: an arch in compression, a cable in tension (each other's mirror image).

**Loads.** Grouped by origin:

- **Dead load** $D$ — permanent self-weight (structure, cladding, fixed equipment). Known once the geometry is fixed.
- **Live load** $L$ — movable occupancy: people, furniture, stored goods, vehicle traffic. Prescribed by code as a design pressure.
- **Environmental** — wind, snow, seismic, thermal. Wind and seismic act *laterally* (sideways), which is why frames need rigid joints or bracing; we only name these here and return to them later.

**Tributary area → line and point loads.** Let a slab carry a uniform surface load $q$ (kPa $= \mathrm{kN/m^2}$). A beam picks up every bit of slab that is closer to it than to any neighboring support. For a beam between two parallel neighbors, that region extends **halfway** to each side, giving a **tributary width** $s$ (m). The resulting UDL on the beam is

$$w = q\,s \qquad \left[\mathrm{kN/m}\right] = \left[\mathrm{kN/m^2}\right]\cdot\left[\mathrm{m}\right].$$

*In words: multiply the floor pressure by the strip-width the beam drains, and a surface load becomes a line load.* If instead a single member (a girder or column) collects load from a whole tributary *area* $A_t$ (m²), the total is a **point load** (concentrated force)

$$P = q\,A_t \qquad \left[\mathrm{kN}\right] = \left[\mathrm{kN/m^2}\right]\cdot\left[\mathrm{m^2}\right].$$

*In words: a member that gathers an entire patch of floor feels its total weight as one concentrated force.* The resultant of a UDL over a span, in turn, is $W = wL$ acting at the load's centroid — the bridge back to [`statics` 3.1](../../statics/lessons/03-01-distributed-loads-resultants.md).

**Idealization rules of thumb.** The two judgment calls that shape every model:

- **Pin vs. rigid connection.** Model a joint as a **pin** when it cannot practically develop moment — a single bolt line, a simple shear tab, a truss node. Model it as **rigid** when it holds the angle between members — a full-penetration weld, a bolted moment endplate. A pin transmits force but *not* moment ($M = 0$ there); a rigid joint transmits both. This single choice decides whether you have a truss or a frame.
- **Ignoring axial deformation.** For ordinary beams and frames, members shorten under axial force far less than they bend, so we treat them as **axially rigid** (length fixed) and track only bending. This is what lets slope-deflection and moment distribution work with rotations alone. It fails for slender columns near buckling and for truss deflection, where axial stretch *is* the deformation ([2.5](02-05-truss-deflections-castigliano.md)).

## Picture

![A floor bay shown in plan with one edge beam's tributary strip hatched, beside the load-path chain: surface load q on the slab collected over a 2 m width into a UDL w on the idealized beam line, flowing through pin and roller supports down columns to the foundation](assets/01-01-fig1.svg)

## Worked examples

**Example 1 (tributary load — surface pressure to UDL).** A floor slab spans a bay of panel size $4\ \mathrm{m} \times 6\ \mathrm{m}$ and carries a uniform load $q = 5\ \mathrm{kPa}$ (dead plus live, combined). An **edge beam** runs along the 6 m side. Find the UDL it carries and its end reactions, treating it as simply supported.

The beam spans $L = 6\ \mathrm{m}$. It drains the slab halfway across the 4 m panel width, so its tributary width is

$$s = \tfrac{1}{2}(4\ \mathrm{m}) = 2\ \mathrm{m}.$$

Convert the surface load to a line load:

$$w = q\,s = (5\ \mathrm{kPa})(2\ \mathrm{m}) = 10\ \mathrm{kN/m}.$$

The total load on the beam is $W = wL = (10\ \mathrm{kN/m})(6\ \mathrm{m}) = 60\ \mathrm{kN}$, and by symmetry each support carries half:

$$R = \tfrac{1}{2}W = 30\ \mathrm{kN}.$$

*Check.* Units: $\mathrm{kN/m^2}\cdot\mathrm{m} = \mathrm{kN/m}$ for $w$, and $\mathrm{kN/m}\cdot\mathrm{m} = \mathrm{kN}$ for $W$ ✓. Sanity: two reactions of 30 kN sum to the 60 kN applied — vertical equilibrium closes. Each column at this beam's end therefore receives 30 kN *from this beam alone* (it will also collect from the beam on its far side, and from the storeys above). ✓

**Example 2 (idealize a real connection — pin or fixed?).** Two steel beams meet a column. Connection A is a **single-row bolted clip angle** attaching only the beam's *web*. Connection B is a **full-depth welded moment connection** joining both flanges and web. Which is a pin, which is rigid, and what does each assumption change downstream?

*Connection A (bolted web clip) → model as a pin.* The clip grabs only the web near the beam's neutral axis, so it can transfer vertical shear but has almost no lever arm to develop moment; it will rotate before it resists bending. Setting $M = 0$ at this joint means the beam behaves as **simply supported** — maximum sagging moment near midspan, zero moment at the ends, and the *column sees no bending from the beam*, only a vertical reaction. Analysis is easier (the structure is likely determinate) but the beam's own midspan moment is larger.

*Connection B (welded moment joint) → model as rigid.* The welded flanges are far from the neutral axis, giving a long lever arm; the joint holds the beam-to-column angle and *does* transmit moment. Now beam and column form a **frame**: the end moment is nonzero, midspan moment drops (some is shared to the joint), and that moment is **delivered into the column**, which must be designed to bend, not just compress. The structure is usually indeterminate ([Module 3](03-01-indeterminacy-redundancy-compatibility.md)), so you need compatibility, not equilibrium alone.

*Check.* The two choices trade complexity for realism: the pin model is conservative for the *beam* (over-estimates its midspan moment) but unsafe for the *column* if the joint is actually stiff (it ignores real moment being dumped into the column). The idealization must match how the joint is built — that is the whole judgment. ✓

## Watch out

- **You might think the tributary width is the full panel width.** It isn't — it stops **halfway** to the next parallel support, because slab load naturally splits toward the nearest beam. Using the full 4 m instead of 2 m here would double $w$ and every downstream force. Tributary width is *center-to-center of the gaps*, i.e. half-span each side.
- **You might think "pinned" means the member can't move.** A pin blocks *translation* (it delivers a force reaction) but freely allows *rotation* — that's exactly why it carries no moment. "Fixed/rigid" is the one that also blocks rotation and so develops a moment. Confusing the two flips your whole moment diagram.
- **You might think idealization is just sloppiness to apologize for.** It's the opposite: choosing a *simpler* model than reality is a deliberate, conservative engineering act. The skill isn't avoiding assumptions — it's knowing which assumption you made and which way it errs (safe or unsafe), so the same clarity survives into any FEA model you build later.

## One-liner

> Analysis starts by turning a real structure into lines, pins, and supports, and by draining each slab's area load — over its tributary width — into the UDL and point loads that flow along the load path to the ground.

## Problems

**P1 (🟢)** An interior floor beam sits between two parallel beams, each 3 m away (so panels of 3 m on both sides). The slab carries $q = 4\ \mathrm{kPa}$ and the beam spans $L = 5\ \mathrm{m}$. Find the tributary width $s$, the UDL $w$, and the total load $W$ the beam carries.

**P2 (🟡)** A single interior **column** collects load from a rectangular tributary area of $6\ \mathrm{m} \times 5\ \mathrm{m}$ of slab, with $q = 5\ \mathrm{kPa}$, from *each* of 3 identical storeys above it. Find the axial load in the column just above the foundation. (Ignore the columns' and beams' own self-weight.)

**P3 (🔴)** A beam frames into a column with a bolted web-clip connection (idealize as a pin) and carries a UDL. A colleague proposes upgrading it to a welded moment connection. Without any numbers, state (a) what happens to the beam's maximum *midspan* bending moment, (b) what new internal action the *column* must now be designed for, and (c) whether the structure's determinacy is likely to increase or decrease. Justify each in one sentence.

<details>
<summary>Solutions</summary>

**P1** The beam drains halfway toward each neighbor: $s = \tfrac{1}{2}(3) + \tfrac{1}{2}(3) = 3\ \mathrm{m}$. Then

$$w = q\,s = (4\ \mathrm{kPa})(3\ \mathrm{m}) = 12\ \mathrm{kN/m},$$
$$W = wL = (12\ \mathrm{kN/m})(5\ \mathrm{m}) = 60\ \mathrm{kN}.$$

*Check.* Units: $\mathrm{kN/m^2}\cdot\mathrm{m} = \mathrm{kN/m}$, then $\mathrm{kN/m}\cdot\mathrm{m} = \mathrm{kN}$ ✓. An interior beam draws from *both* sides, so its 3 m tributary width is the full sum of the two half-panels — wider than an edge beam of the same span, as expected. ✓

**P2** Load per storey collected by the column: $P_1 = q\,A_t = (5\ \mathrm{kPa})(6\ \mathrm{m} \times 5\ \mathrm{m}) = (5)(30) = 150\ \mathrm{kN}$. With 3 identical storeys stacking their loads into this column,

$$N = 3P_1 = 3(150\ \mathrm{kN}) = 450\ \mathrm{kN}\ \text{(compression)}.$$

*Check.* Units: $\mathrm{kN/m^2}\cdot\mathrm{m^2} = \mathrm{kN}$ ✓. Axial force in a column accumulates downward — each lower storey carries everything above it — so the base is the most heavily loaded point, which is why columns often thicken toward the ground. ✓

**P3** (a) The midspan moment **decreases**: a rigid joint develops end (hogging) moments, and for a fixed-fixed UDL beam the midspan sagging moment is $wL^2/24$ versus $wL^2/8$ simply supported — the ends now share the bending, so the peak drops. (b) The column must be designed for **bending moment** in addition to axial compression — the rigid joint delivers the beam's end moment straight into the column, making it a beam-column rather than a pure strut. (c) Determinacy is likely to **decrease** (the structure becomes *more* statically indeterminate): the moment connection adds a moment-transmitting continuity that removes a former $M = 0$ release, so equilibrium alone no longer suffices and you need compatibility ([Module 3](03-01-indeterminacy-redundancy-compatibility.md)).

*Check.* All three are consistent with one fact — a rigid joint *shares moment* between members: the beam gives some up (smaller midspan $M$), the column takes some on (new bending), and the extra internal continuity is exactly the added redundancy. ✓

</details>

## Connections

- **Backward:** every reduction here rests on [`statics` 1.5](../../statics/lessons/01-05-rigid-body-equilibrium-supports.md)'s support idealizations (roller / pin / fixed and their reaction counts) and on [`statics` 3.1](../../statics/lessons/03-01-distributed-loads-resultants.md)'s rule that a UDL's resultant is $W = wL$ at the load centroid — the same $wL$ we used to size reactions.
- **Forward:** with a line model and its loads in hand, [1.2 (supports, reactions & determinacy)](01-02-supports-reactions-determinacy.md) counts unknowns against equations to decide whether equilibrium alone can solve it; the internal $V$ and $M$ those loads produce are drawn in [1.3](01-03-internal-forces-shear-bending-moment.md)–[1.4](01-04-shear-bending-moment-diagrams.md).
- **Sideways:** this is the course's entry gate — [`mechanics-of-materials`](../../mechanics-of-materials/syllabus.md) derived the behavior of a *single* beam or member (its [shear-moment diagrams](../../mechanics-of-materials/lessons/02-03-shear-moment-diagrams.md) and [deflections](../../mechanics-of-materials/lessons/03-01-deflection-by-integration.md)); Structural Analysis scales those tools up to whole trusses and frames, and the pin-vs-rigid choice made here is what later separates the truss methods (Module 1) from the frame methods of slope-deflection and moment distribution ([3.4](03-04-slope-deflection-method.md)–[3.5](03-05-moment-distribution-method.md)).
