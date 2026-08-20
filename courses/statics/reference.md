# Statics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Statics is one sentence applied fifteen ways: **if it isn't accelerating, the
forces cancel and the twists cancel.** Everything below is the bookkeeping that
turns that sentence into numbers — how to draw the body, what each support hands
you, how to reduce a smeared-out load to one arrow, and where a beam is worst off.
Units are part of the answer here, so every table carries them.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\vec F$, $F$ | a force vector and its magnitude, in newtons (N) | [1.1](lessons/01-01-forces-vectors-free-body-diagram.md) |
| $\hat i,\ \hat j,\ \hat k$ | unit vectors along $x$, $y$, $z$ — pure directions, length 1 | [1.1](lessons/01-01-forces-vectors-free-body-diagram.md) |
| $\hat u$ | a unit vector along some chosen line (a cable, an axis) | [1.1](lessons/01-01-forces-vectors-free-body-diagram.md) |
| $\vec r_{AB}$ | position vector from point $A$ to point $B$, in metres | [1.1](lessons/01-01-forces-vectors-free-body-diagram.md) |
| $\vec R$ | resultant — the single force equivalent to a whole pile of them (N) | [1.1](lessons/01-01-forces-vectors-free-body-diagram.md) |
| $T$ | cable or rope tension (N) — a **pull only**, so $T \ge 0$ | [1.2](lessons/01-02-equilibrium-of-a-particle.md) |
| $W = mg$ | weight, the gravity force on a mass (N); $g = 9.81\ \text{m/s}^2$ | [1.2](lessons/01-02-equilibrium-of-a-particle.md) |
| $M_O$, $\vec M_O$ | moment about point $O$ — the twist a force makes there ($\text{N}\cdot\text{m}$) | [1.3](lessons/01-03-moment-of-a-force.md) |
| $d$ | lever arm — **perpendicular** distance from the pivot to the line of action (m) | [1.3](lessons/01-03-moment-of-a-force.md) |
| $M_a$ | moment about a **line**, not a point — the part of the twist that spins that axis | [1.3](lessons/01-03-moment-of-a-force.md) |
| $A_x,\ A_y,\ M_A$ | reaction force components and reaction couple supplied by the support at $A$ | [1.5](lessons/01-05-rigid-body-equilibrium-supports.md) |
| $F_{AB}$ | axial force in truss member $AB$ — **positive means tension** | [2.1](lessons/02-01-trusses-method-of-joints.md) |
| $w(x)$ | load intensity: newtons pressing on each metre of beam at $x$ (N/m) | [3.1](lessons/03-01-distributed-loads-resultants.md) |
| $\bar x$, $\bar y$ | centroid — the balance point of a load diagram or an area (m or mm) | [3.1](lessons/03-01-distributed-loads-resultants.md), [3.2](lessons/03-02-centroids-of-areas.md) |
| $Q_x = \bar y A$ | first moment of area about an axis — "area times how far its centre sits" ($\text{m}^3$) | [3.2](lessons/03-02-centroids-of-areas.md) |
| $A_i$ | area of composite piece $i$ — **negative for a hole** | [3.2](lessons/03-02-centroids-of-areas.md) |
| $N$ (contact) | normal force pressing two surfaces together (N) | [3.3](lessons/03-03-dry-coulomb-friction.md) |
| $\mu_s$, $\mu_k$ | static and kinetic friction coefficients — dimensionless, $\mu_k < \mu_s$ | [3.3](lessons/03-03-dry-coulomb-friction.md) |
| $\phi_s = \arctan\mu_s$ | friction angle — how far off the normal the contact force may lean | [3.3](lessons/03-03-dry-coulomb-friction.md) |
| $\alpha$ | wedge taper angle (the slope of its driving face) | [3.4](lessons/03-04-wedges-belt-friction.md) |
| $\beta$ | belt wrap angle around a drum — **in radians**, may exceed $2\pi$ | [3.4](lessons/03-04-wedges-belt-friction.md) |
| $T_1$, $T_2$ | slack-side and tight-side belt tensions; $T_2$ is always the larger (N) | [3.4](lessons/03-04-wedges-belt-friction.md) |
| $N$, $V$, $M$ (internal) | normal force (N), shear force (N), bending moment ($\text{N}\cdot\text{m}$) at a cut | [4.1](lessons/04-01-internal-forces-normal-shear-bending.md) |
| $I$, $I_c$ | second moment of area, and its value about the shape's **own centroidal** axis ($\text{mm}^4$) | [4.3](lessons/04-03-second-moment-of-area-parallel-axis.md) |
| $d_i$ | parallel-axis shift: distance from piece $i$'s centroid to the section's centroidal axis | [4.3](lessons/04-03-second-moment-of-area-parallel-axis.md) |

**One symbol clash to keep straight:** $N$ is the contact **normal force** in the
friction lessons and the internal **axial force** in the beam lessons. Context
decides; they are unrelated quantities.

## Definitions

### Free-body diagram

Cut one body out of the world and draw every push and pull still acting **on**
it — each severed support replaced by the force it was exerting, plus one arrow
straight down for weight. Forces the body exerts on *other* things never appear.

*Introduced:* [1.1](lessons/01-01-forces-vectors-free-body-diagram.md)

### Equilibrium of a particle

A body small enough that all forces pass through one point can't twist, so it
sits still exactly when the forces cancel.

$$\sum \vec F = 0 \iff \sum F_x = 0,\ \sum F_y = 0,\ (\sum F_z = 0)$$

*Introduced:* [1.2](lessons/01-02-equilibrium-of-a-particle.md)

### Force polygon

The same statement drawn instead of written: lay the forces head to tail and, in
equilibrium, they close back onto the starting point. Three forces close into a
triangle you can solve with plain trigonometry.

*Introduced:* [1.2](lessons/01-02-equilibrium-of-a-particle.md)

### Moment of a force

How hard a force twists a body about a chosen point — how hard you push times how
far the push misses the pivot. Counterclockwise is positive in 2D.

$$M_O = F\,d, \qquad \vec M_O = \vec r \times \vec F, \qquad [\,M\,] = \text{N}\cdot\text{m}$$

*Introduced:* [1.3](lessons/01-03-moment-of-a-force.md)

### Lever arm

The **shortest** (perpendicular) distance from the pivot to the force's line of
action — not the distance to where the force is applied. For a force applied at
distance $r$ and angle $\phi$ to the arm, $d = r\sin\phi$.

*Introduced:* [1.3](lessons/01-03-moment-of-a-force.md)

### Couple

Two equal, opposite, non-collinear forces: zero net push, pure twist of size
$M = Fd$ with $d$ the separation between their lines. Its moment is the **same
about every point**, so a couple has a magnitude and a sense but no location — a
free vector you may draw anywhere on the body.

*Introduced:* [1.4](lessons/01-04-couples-equivalent-systems.md)

### Transmissibility

Sliding a force **along its own line of action** changes nothing about a rigid
body, because the offset is parallel to $\vec F$ and $\vec r \times \vec F = \vec 0$.
Sliding it sideways is the move that costs you a couple.

*Introduced:* [1.4](lessons/01-04-couples-equivalent-systems.md)

### Force–couple system

An off-centre force both pushes and twists, so to move it to a new point $B$ you
keep the force and glue on the twist you just erased.

$$\vec F \text{ at } A \;\equiv\; \vec F \text{ at } B \;+\; \vec M_B = \vec r_{B\to A}\times\vec F$$

*Introduced:* [1.4](lessons/01-04-couples-equivalent-systems.md)

### Rigid-body equilibrium

An extended body needs two vetoes, not one: it must neither drift nor spin.

$$\sum \vec F = 0, \qquad \sum \vec M_O = 0$$

The moment condition holds about **any** point $O$ — and if moments balance about
one point, they balance about every point.

*Introduced:* [1.5](lessons/01-05-rigid-body-equilibrium-supports.md)

### Statical determinacy

Whether equilibrium alone can finish the job: count unknown reactions against
available equations (3 in 2D, 6 in 3D). Equal → **determinate**; more unknowns →
**indeterminate** (needs material stiffness, i.e. mechanics of materials); fewer,
*or* the right count badly arranged → **improperly constrained**.

*Introduced:* [1.5](lessons/01-05-rigid-body-equilibrium-supports.md)

### Two-force member

A member touched at exactly two points, with no load or couple in between. Its
force can only run **along the line joining those points** — one unknown
magnitude, no direction to solve for. Every bar of an ideal truss is one.

*Introduced:* [2.1](lessons/02-01-trusses-method-of-joints.md)

### Tension and compression

With the universal assume-tension convention, $F_{AB} > 0$ means the member pulls
its joints toward each other (**tension, T**) and $F_{AB} < 0$ means it shoves them
apart (**compression, C**). The sign is the physics — never "fix" it.

*Introduced:* [2.1](lessons/02-01-trusses-method-of-joints.md)

### Zero-force member

A bar carrying nothing in *this* load case — present for stability or for other
load cases. Two inspection rules find most of them (see *Truss shortcuts* below).

*Introduced:* [2.1](lessons/02-01-trusses-method-of-joints.md)

### Multi-force member

A member loaded at three or more points, or carrying an applied couple. Its force
is generally **not** along its axis and it bends — so you must solve for both
components. Frames and machines are assemblies containing these.

*Introduced:* [2.3](lessons/02-03-frames-and-machines.md)

### Frame vs. machine

A **frame** is stationary and holds a load (bracket, crane boom); a **machine**
has moving parts that resize a force (pliers, bolt cutters). Structurally
identical — both are dismembered the same way.

*Introduced:* [2.3](lessons/02-03-frames-and-machines.md)

### Mechanical advantage

The force multiplication of a lever-based machine: output force over input force,
equal to the ratio of the lever arms about the pivot. Bought with distance — the
jaw moves as much less as it pushes more.

$$\text{MA} = \frac{Q}{P} = \frac{b}{a}$$

*Introduced:* [2.3](lessons/02-03-frames-and-machines.md)

### Distributed load

A load spread along a length rather than applied at a point, described by an
intensity $w(x)$ in newtons per metre. Its equivalent single force is the **area**
under the $w$ curve, acting through that area's **centroid**.

*Introduced:* [3.1](lessons/03-01-distributed-loads-resultants.md)

### Centroid

The balance point of a shape — the area-weighted average of its points. Cut it out
of cardboard and it sits level on a pin there.

$$\bar x = \frac{\int x\,dA}{\int dA}, \qquad \bar y = \frac{\int y\,dA}{\int dA}$$

A centroid is a *location*, not necessarily a spot of material: a thin L-section's
centroid can land in the empty notch.

*Introduced:* [3.2](lessons/03-02-centroids-of-areas.md)

### First moment of area

Area times how far its centroid sits from an axis — the same "force times
distance" bookkeeping as a moment, with area standing in for force. Units $\text{m}^3$.

$$Q_y = \int x\,dA = \bar x A, \qquad Q_x = \int y\,dA = \bar y A$$

*Introduced:* [3.2](lessons/03-02-centroids-of-areas.md)

### Coulomb (dry) friction

A surface pair supplies exactly the friction equilibrium demands — no more, no
less — up to a ceiling proportional to how hard they're squeezed. It is an
**inequality**, which is the single most important fact about it.

$$F \le \mu_s N$$

*Introduced:* [3.3](lessons/03-03-dry-coulomb-friction.md)

### Impending motion

The instant before slipping, when friction is maxed out and the inequality becomes
an equality, $F = \mu_s N$. This is the condition you impose to find a critical
load or angle — and only then.

*Introduced:* [3.3](lessons/03-03-dry-coulomb-friction.md)

### Friction angle and the friction cone

Bundle $N$ and $F$ into one contact reaction $\vec R$; it leans off the surface
normal by $\arctan(F/N)$, and that lean is capped. The reaction lives inside a cone
of half-angle $\phi_s$ — demand more lean and the surface lets go.

$$\phi_s = \arctan\mu_s$$

*Introduced:* [3.3](lessons/03-03-dry-coulomb-friction.md)

### Angle of repose

The tilt at which a body on a slope starts to slide. Mass cancels out entirely —
it equals the friction angle.

$$\tan\theta_s = \mu_s \;\Rightarrow\; \theta_s = \phi_s$$

*Introduced:* [3.3](lessons/03-03-dry-coulomb-friction.md)

### Self-locking

A wedge (or screw, or shim) that stays put with the driving force removed, because
its face is shallower than the friction cone can hold. The conservative
single-face rule:

$$\alpha < \phi = \arctan\mu_s$$

*Introduced:* [3.4](lessons/03-04-wedges-belt-friction.md)

### Internal forces N, V, M

What one face of a cut transmits to the other: $N$ **pulls** along the axis, $V$
**slides** across it like scissors, $M$ **bends** it. Expose them by cutting and
demanding the retained piece still balance.

*Introduced:* [4.1](lessons/04-01-internal-forces-normal-shear-bending.md)

### Sagging and hogging

The two senses of bending moment. **Sagging** ($M > 0$) is a smile — top fibres
compressed, bottom fibres stretched. **Hogging** ($M < 0$) is a frown, what every
cantilever does at its wall.

*Introduced:* [4.1](lessons/04-01-internal-forces-normal-shear-bending.md)

### Critical section

The cross-section carrying the largest $|M|$ — the one that sizes the beam. It
sits where the shear crosses (or jumps through) zero, which is *not* midspan
unless the loading is symmetric.

*Introduced:* [4.2](lessons/04-02-shear-bending-moment-diagrams.md)

### Second moment of area

A purely geometric number saying how well a cross-section resists bending: every
scrap of area counted with the **square** of its distance from the axis. Units
length$^4$, always positive, and smallest about the centroidal axis.

$$I_x = \int_A y^2\,dA$$

*Introduced:* [4.3](lessons/04-03-second-moment-of-area-parallel-axis.md)

## Formulas and rules

### Units

Statics is SI throughout. Getting the unit right is the cheapest error check you own.

| Quantity | Unit | Notes |
|---|---|---|
| Force | $\text{N}$ | $1\ \text{kN} = 10^3\ \text{N}$; $W = mg$ with $g = 9.81\ \text{m/s}^2$ |
| Moment, couple, torque | $\text{N}\cdot\text{m}$ | $1\ \text{kN}\cdot\text{m} = 10^3\ \text{N}\cdot\text{m}$ |
| Distributed load intensity $w$ | $\text{N/m}$ | force **per unit length**; $w \times$ length $=$ force |
| Length | $\text{m}$ | section work is usually in $\text{mm}$ — pick one and stay there |
| Area | $\text{m}^2$, $\text{mm}^2$ | $1\ \text{m}^2 = 10^6\ \text{mm}^2$ |
| First moment $Q$ | $\text{m}^3$, $\text{mm}^3$ | |
| Second moment $I$ | $\text{m}^4$, $\text{mm}^4$ | $10^6\ \text{mm}^4 = 10^{-6}\ \text{m}^4$ |
| Stress, pressure | $\text{Pa} = \text{N/m}^2$ | $1\ \text{MPa} = 1\ \text{N/mm}^2$; steel yields near $250\ \text{MPa}$ |
| $\mu_s,\ \mu_k$ | — | dimensionless |
| Wrap angle $\beta$, angles in $e^{\mu\beta}$ | rad | **radians only**; one turn $=2\pi$ |

*From* [1.1](lessons/01-01-forces-vectors-free-body-diagram.md), [4.1](lessons/04-01-internal-forces-normal-shear-bending.md), [4.3](lessons/04-03-second-moment-of-area-parallel-axis.md)

### Resolving and adding forces

$$F_x = F\cos\theta, \quad F_y = F\sin\theta \qquad (\theta \text{ measured from the } +x \text{ axis})$$
$$F = \sqrt{F_x^2 + F_y^2}, \qquad \theta = \arctan\frac{F_y}{F_x}\ \text{(check the quadrant)}$$
$$R_x = \sum F_{ix}, \qquad R_y = \sum F_{iy}$$

**Force along a line (works in 2D and 3D, no angles needed):**

$$\vec r_{AB} = (x_B - x_A)\hat i + (y_B - y_A)\hat j + (z_B - z_A)\hat k, \qquad \hat u = \frac{\vec r_{AB}}{|\vec r_{AB}|}, \qquad \vec F = F\,\hat u$$

If the angle is given from the **vertical** instead, the roles swap:
$F_x = F\sin\theta$, $F_y = F\cos\theta$. Draw the angle before writing the formula.

*From* [1.1](lessons/01-01-forces-vectors-free-body-diagram.md)

### Force triangles (three-force problems)

For a knot or joint with exactly three forces, the closed polygon is a triangle,
so plain trigonometry is an alternative to components:

$$\frac{F_1}{\sin\alpha_1} = \frac{F_2}{\sin\alpha_2} = \frac{F_3}{\sin\alpha_3}, \qquad c^2 = a^2 + b^2 - 2ab\cos C$$

where each $\alpha_i$ is the angle *opposite* side $F_i$ in the force triangle.

*From* [1.2](lessons/01-02-equilibrium-of-a-particle.md)

### Cable and pulley modelling

- A cable **pulls only**, along its own length: $T \ge 0$. A negative tension means the assumed configuration is wrong (slack cable, or a member really in compression) — not a valid answer.
- One continuous cord over a **frictionless** pulley or smooth ring carries **one** tension throughout; the pulley only redirects it. That equal-tension fact is often the extra equation you need.
- A frictionless pulley self-centres: equal tensions force equal angles on the two sides.
- Shallow cables are brutal: two segments at angle $\theta$ to the horizontal carrying load $W$ have $T = W/(2\sin\theta)$, which blows up as $\theta \to 0$.

*From* [1.2](lessons/01-02-equilibrium-of-a-particle.md)

### Moments — the four ways to compute one

| Situation | Use | Formula |
|---|---|---|
| 2D, lever arm obvious | scalar | $M_O = F\,d$, CCW positive |
| 2D, awkward angle | components (Varignon) | $M_O = r_xF_y - r_yF_x$ |
| 3D, about a point | cross product | $\vec M_O = \vec r\times\vec F$ |
| 3D, about a line $\hat u$ | scalar triple product | $M_a = \hat u\cdot(\vec r\times\vec F)$ |

$$\vec M_O = \begin{vmatrix} \hat i & \hat j & \hat k \\ r_x & r_y & r_z \\ F_x & F_y & F_z\end{vmatrix} = (r_yF_z - r_zF_y)\hat i + (r_zF_x - r_xF_z)\hat j + (r_xF_y - r_yF_x)\hat k$$

$$|\vec M_O| = rF\sin\phi = F\,d, \qquad \vec M_O \cdot \vec F = 0 \ \text{(free sanity check)}$$

**Varignon's theorem:** the moment of a force equals the sum of the moments of its
components, $\vec r\times(\vec F_1 + \vec F_2) = \vec r\times\vec F_1 + \vec r\times\vec F_2$.
Resolve first, then moment each piece — components have coordinates for lever arms.

**Right-hand rule:** curl fingers from $\vec r$ toward $\vec F$; the thumb is $\vec M_O$.
Order matters — $\vec F\times\vec r = -\vec r\times\vec F$.

*From* [1.3](lessons/01-03-moment-of-a-force.md)

### Reducing a force system

$$\vec R = \sum \vec F_i, \qquad \vec M_O = \sum \vec r_{O\to i}\times\vec F_i$$

Any tangle of loads on a rigid body reduces to **one force plus one couple** at a
point of your choosing. Two outcomes:

- $\vec R = \vec 0$, $\vec M_O \neq \vec 0$ → a **pure couple**; no single force can ever replace it.
- $\vec R \neq \vec 0$ → slide $\vec R$ sideways to the line where it makes $\vec M_O$ by itself, and the couple disappears. In 2D this is always possible: $\bar x = M_O / R$.

*From* [1.4](lessons/01-04-couples-equivalent-systems.md)

### Equilibrium equations: how many you get

| System | Scalar equations | Max solvable unknowns |
|---|---|---|
| 2D particle (concurrent forces) | $\sum F_x = \sum F_y = 0$ | **2** |
| 3D particle | $\sum F_x = \sum F_y = \sum F_z = 0$ | **3** |
| 2D rigid body | $\sum F_x = \sum F_y = \sum M_z = 0$ | **3** |
| 3D rigid body | $\sum \vec F = 0$ (3) and $\sum \vec M = 0$ (3) | **6** |
| One truss joint (2D) | $\sum F_x = \sum F_y = 0$ | **2** member forces |
| One section cut (2D) | $\sum F_x = \sum F_y = \sum M_P = 0$ | **3** cut members |

**Alternative 2D sets** (equally valid, often easier): $\sum F_x = 0,\ \sum M_A = 0,\ \sum M_B = 0$
with $AB$ not perpendicular to $x$; or $\sum M_A = \sum M_B = \sum M_C = 0$ about three
non-collinear points. You still get exactly three independent equations — a fourth
is always a combination of the others, never new information.

**The moment trick:** you may sum moments about *any* point, so pick one on the line
of action of an unknown and that unknown vanishes (zero lever arm). Summing about a
pin erases both of its components in one stroke.

*From* [1.2](lessons/01-02-equilibrium-of-a-particle.md), [1.5](lessons/01-05-rigid-body-equilibrium-supports.md), [2.2](lessons/02-02-method-of-sections.md)

### Support reactions in 2D

A support supplies one reaction for every motion it refuses to allow. Count these
before writing a single equation — the total must be 3 for a determinate 2D body.

| Support | What it blocks | Unknowns | Reactions drawn |
|---|---|---|---|
| **Cable / flexible link** | motion away along the cable | **1** | one force along the cable, pulling |
| **Roller** | motion perpendicular to the surface | **1** | one force $\perp$ to the rolling surface (**not** always vertical) |
| **Smooth (frictionless) surface** | penetration of the surface | **1** | one force along the surface normal |
| **Rocker / short link** | motion along the link | **1** | one force along the link's line |
| **Pin / hinge** | translation both ways (rotation free) | **2** | $A_x$ and $A_y$ — magnitude *and* direction unknown |
| **Rough surface** | sliding and penetration | **2** | normal $N$ plus friction $F \le \mu_s N$ |
| **Fixed / built-in (cantilever)** | translation **and** rotation | **3** | $A_x$, $A_y$, and a couple $M_A$ |

Common determinate combinations: pin $+$ roller $= 2+1 = 3$ (simply supported
beam); one fixed end $= 3$ (cantilever); pin $+$ cable $= 2+1 = 3$ (the classic boom).

*From* [1.5](lessons/01-05-rigid-body-equilibrium-supports.md), [3.3](lessons/03-03-dry-coulomb-friction.md)

### Support reactions in 3D

Six equations are available, so a determinate 3D body needs six reaction unknowns.

| Support | Unknowns | Supplies |
|---|---|---|
| Cable / smooth surface | **1** | one force along a known line |
| Roller on a surface | **1** | one force along the surface normal |
| Ball-and-socket | **3** | three force components, no couples |
| Journal (radial) bearing, hinge | **4** | 2 forces $\perp$ to the shaft $+$ 2 couples (none about the shaft axis) |
| Thrust bearing | **5** | the journal set $+$ the axial force |
| Fixed / built-in | **6** | three force components $+$ three couples |

A journal bearing supplies no couple about its own axis — that's exactly the
freedom that makes it a bearing, and why $M_a = \hat u\cdot(\vec r\times\vec F)$
about the shaft axis must be balanced by something else.

*From* [1.3](lessons/01-03-moment-of-a-force.md), [1.5](lessons/01-05-rigid-body-equilibrium-supports.md)

### Proper constraint

Three reactions are **necessary, not sufficient**. A 2D body is improperly
constrained if its reaction lines are

- all **parallel** (three vertical rollers) — any sideways load slides it, or
- all **concurrent** through one point — a moment about that point spins it.

Count *and* arrangement both have to check out.

*From* [1.5](lessons/01-05-rigid-body-equilibrium-supports.md)

### Truss shortcuts

**The ideal-truss assumptions** (what makes every bar a two-force member):
frictionless pin joints, loads applied **only at joints**, weightless straight bars.

**Zero-force rules** — apply only at a joint with **no external load and no support
reaction**:

1. Two non-collinear members and nothing else → **both** are zero-force.
2. Three members, two of them collinear, nothing else → the **odd one out** is zero-force.

**Choosing the method:**

| Question | Reach for | Why |
|---|---|---|
| Every member force | **method of joints** ([2.1](lessons/02-01-trusses-method-of-joints.md)) | 2 equations per pin, march joint to joint |
| One named interior member | **method of sections** ([2.2](lessons/02-02-method-of-sections.md)) | one cut, often one equation |
| A member hanging off a two-collinear joint | **joint inspection** | it's zero-force in one line |

Both start the same way: **solve the whole-truss support reactions first**.

**The moment shortcut for a section cut:** cut at most three unknown members, then
take moments about the point where the **other two** intersect — they have zero
lever arm and vanish, leaving one equation in your target. If those two are
parallel (top and bottom chords), they meet at infinity, so instead sum forces
**perpendicular** to them, which they cannot contribute to.

*From* [2.1](lessons/02-01-trusses-method-of-joints.md), [2.2](lessons/02-02-method-of-sections.md)

### Frames and machines — the recipe

1. **Whole-structure FBD** for the external reactions — works whenever there are 3 or fewer external unknowns. (Two pin supports gives 4 unknowns: skip straight to step 3.)
2. **Spot the two-force members** — each collapses two unknowns to one, and its force direction is already known.
3. **Dismember**: one FBD per member, with an equal-and-opposite unknown pair $(F_x, F_y)$ / $(-F_x, -F_y)$ at every connecting pin (Newton's third law).
4. **Solve member by member**, taking moments about a pin to delete that pin's force from the equation.

*From* [2.3](lessons/02-03-frames-and-machines.md)

### Distributed loads → one resultant

$$R = \int_0^L w(x)\,dx = \text{area under the load curve}, \qquad \bar x = \frac{1}{R}\int_0^L x\,w(x)\,dx$$

| Load shape | Resultant $R$ | Line of action $\bar x$ |
|---|---|---|
| Uniform $w_0$ over $L$ | $w_0 L$ | $L/2$ (midspan of the **load**) |
| Triangular, $0 \to w_0$ | $\tfrac12 w_0 L$ | $\tfrac23 L$ from the zero end $=\tfrac13 L$ from the peak |
| Trapezoidal | split into rectangle $+$ triangle | combine by the weighted rule below |
| Power law $w = cx^n$ on $[0,L]$ | $\dfrac{cL^{n+1}}{n+1}$ | $\dfrac{n+1}{n+2}\,L$ |
| Symmetric (e.g. half-sine) | integrate | the centre, by symmetry — no second integral |

**Combining pieces** — weight by force, never average positions:

$$R = \sum R_i, \qquad \bar x = \frac{\sum R_i \bar x_i}{\sum R_i}$$

*From* [3.1](lessons/03-01-distributed-loads-resultants.md)

### Centroids of standard areas

Measured from the reference stated in the last column.

| Shape | Area $A$ | Centroid |
|---|---|---|
| Rectangle $b\times h$ | $bh$ | $(b/2,\ h/2)$ from a corner |
| Right triangle, legs $b,h$ | $\tfrac12 bh$ | $(b/3,\ h/3)$ from the right-angle corner |
| Triangle (any), base $b$, height $h$ | $\tfrac12 bh$ | $h/3$ above the base |
| Circle, radius $R$ | $\pi R^2$ | its centre |
| Semicircle, radius $R$ | $\tfrac12\pi R^2$ | $\dfrac{4R}{3\pi}\approx 0.424R$ from the flat diameter |
| Quarter circle, radius $R$ | $\tfrac14\pi R^2$ | $\left(\dfrac{4R}{3\pi},\ \dfrac{4R}{3\pi}\right)$ from the corner |

**Composite method** — all $(\bar x_i,\bar y_i)$ measured from **one** shared origin,
holes carrying a minus sign in *both* sums:

$$\bar x = \frac{\sum \bar x_i A_i}{\sum A_i}, \qquad \bar y = \frac{\sum \bar y_i A_i}{\sum A_i}$$

**Symmetry** hands you a coordinate free: the centroid lies on every axis of
symmetry, so two axes pin it instantly.

*From* [3.2](lessons/03-02-centroids-of-areas.md)

### Friction

$$F \le \mu_s N \quad \text{(sitting still)}, \qquad F = \mu_s N \quad \text{(impending slip)}, \qquad F_k = \mu_k N \quad \text{(sliding)}$$

| Question | Test |
|---|---|
| Does a block on a slope $\theta$ hold? | holds iff $\tan\theta \le \mu_s$; slips at $\theta_s = \arctan\mu_s$ |
| How much friction is *actually* acting? | whatever equilibrium requires — compute it, don't assume $\mu_s N$ |
| Slip or tip first, pushed at height $h$ on base width $b$? | $P_{\text{slip}} = \mu_s W$ vs. $P_{\text{tip}} = \dfrac{Wb}{2h}$ — smaller one wins |
| Quick slip/tip verdict | $\mu_s < b/2h$ → **slides**; $\mu_s > b/2h$ → **tips** |
| Tipping on a *tilted* surface | tips when $\tan\theta = b/h$; compare against $\arctan\mu_s$ |
| Where does $N$ act while tipping? | shifted $x = Ph/W$ toward the leading edge, capped at $b/2$ |

**Typical static coefficients** (dry, order-of-magnitude — always use the value a
problem gives you):

| Pair | $\mu_s$ |
|---|---|
| Rubber on concrete | $0.6$–$0.9$ |
| Wood on wood | $0.3$–$0.7$ |
| Metal on metal, dry | $0.15$–$0.6$ |
| Metal on ice | $\approx 0.05$–$0.1$ |

*From* [3.3](lessons/03-03-dry-coulomb-friction.md)

### Wedges and belts

**Wedge, driven under a vertically guided load $W$**, taper $\alpha$, friction angle
$\phi = \arctan\mu_s$ on both the wedge face and the floor:

$$P = W\big[\tan(\alpha+\phi) + \tan\phi\big] \qquad \text{(force to start driving it in)}$$

Sanity: at $\alpha = 0$ this reduces to $2\mu_s W$, pure friction on two faces.
**Self-locking** when $\alpha < \phi$ (conservative single-face rule; friction on the
second face only helps).

**Belt / capstan friction**, wrap angle $\beta$ in **radians**, $T_2$ the tight side:

$$T_2 = T_1 e^{\mu\beta}, \qquad \beta = \frac{1}{\mu}\ln\frac{T_2}{T_1}, \qquad n_{\text{turns}} = \frac{\beta}{2\pi}$$

The drum **radius does not appear** — only the wrap angle and roughness. For a belt
drive, the transmitted torque is the tension *difference* at the rim:

$$\tau = (T_2 - T_1)\,r$$

Derivation in one line: a slice $d\theta$ gives $dN = T\,d\theta$ and $dT = \mu\,dN = \mu T\,d\theta$,
so $\ln(T_2/T_1) = \mu\beta$ — fixed fraction per unit angle, hence exponential.

*From* [3.4](lessons/03-04-wedges-belt-friction.md)

### Internal forces: sign convention

Stated for the **left** free body, on its exposed right-hand face:

$$N > 0:\ \text{tension (points away from the cut)}, \qquad V > 0:\ \text{points down}, \qquad M > 0:\ \text{sagging (concave up)}$$

On the **right** free body every one of these reverses (Newton's third law) — except
$N$, which still points away from the cut.

**Method:** (1) find the external reactions; (2) cut; (3) draw the retained piece
with $N,V,M$ in their positive senses; (4) apply $\sum F_x = \sum F_y = 0$ and
$\sum M_{\text{cut}} = 0$. Summing about the **cut** kills $N$ and $V$ and drops $M$ in your lap.
**Shortcut:** cut toward a *free* end and you can skip step 1 entirely.

*From* [4.1](lessons/04-01-internal-forces-normal-shear-bending.md)

### Load–shear–moment relations

$$\frac{dV}{dx} = -w(x), \qquad \frac{dM}{dx} = V(x)$$
$$V_2 - V_1 = -\!\!\int_{x_1}^{x_2}\! w\,dx = -(\text{load area}), \qquad M_2 - M_1 = \int_{x_1}^{x_2}\! V\,dx = (\text{shear area})$$

| On the beam | $V$ diagram | $M$ diagram |
|---|---|---|
| No load ($w=0$) | constant | linear |
| Uniform load $w$ | linear, slope $-w$ | parabolic |
| Downward point load $P$ | **jumps down** by $P$ | continuous, with a kink |
| Applied couple $M_0$ | unchanged | **jumps** by $M_0$ |
| $V = 0$ (crossing or jumping) | — | **local max/min — the critical section** |

**Closure check (free, always take it):** walking the whole beam, $V$ must return to
zero at the far end and $M$ must return to its end value — zero at a simple support
or free end, or the applied end moment. If it doesn't close, a reaction or a load is wrong.

*From* [4.2](lessons/04-02-shear-bending-moment-diagrams.md)

### Standard beam results

Worth knowing cold — they double as checks on any diagram you draw.

| Beam and load | Reactions | $M_{\max}$ | Where |
|---|---|---|---|
| Simply supported, point $P$ at midspan | $P/2$ each | $\dfrac{PL}{4}$ | midspan |
| Simply supported, point $P$ at $a$ from $A$ ($b = L-a$) | $R_A = \dfrac{Pb}{L},\ R_B = \dfrac{Pa}{L}$ | $\dfrac{Pab}{L}$ | under the load |
| Simply supported, full UDL $w$ | $\dfrac{wL}{2}$ each | $\dfrac{wL^2}{8}$ | midspan |
| Cantilever, point $P$ at the free end | $V = P,\ M_A = -PL$ | $PL$ (hogging) | at the wall |
| Cantilever, full UDL $w$ | $V = wL,\ M_A = -\dfrac{wL^2}{2}$ | $\dfrac{wL^2}{2}$ (hogging) | at the wall |
| Overhanging beam | from $\sum M = 0$ | compare span peak vs. support hog | often **over the support** |

*From* [4.2](lessons/04-02-shear-bending-moment-diagrams.md)

### Second moments of area

About the shape's **own centroidal** axis unless stated otherwise. $h$ is always the
dimension *perpendicular* to the bending axis — the one that gets cubed.

| Shape | $I$ about centroidal axis | $I$ about the stated edge |
|---|---|---|
| Rectangle $b\times h$ | $\dfrac{bh^3}{12}$ | base: $\dfrac{bh^3}{3}$ (four times as big) |
| Hollow rectangle, outer $b\times h$, inner $b_i\times h_i$ (concentric) | $\dfrac{bh^3 - b_i h_i^3}{12}$ | — |
| Triangle, base $b$, height $h$ | $\dfrac{bh^3}{36}$ | base: $\dfrac{bh^3}{12}$ |
| Circle, radius $r$ | $\dfrac{\pi r^4}{4}$ | polar: $J = \dfrac{\pi r^4}{2}$ |
| Hollow circle, radii $r_o, r_i$ | $\dfrac{\pi (r_o^4 - r_i^4)}{4}$ | — |
| Semicircle, radius $r$ | $\approx 0.1098\,r^4$ | flat diameter: $\dfrac{\pi r^4}{8}$ |
| Quarter circle, radius $r$ | — | either straight edge: $\dfrac{\pi r^4}{16}$ |

### Parallel-axis theorem

To move the axis off the centroid, add the area times the shift squared. The
centroidal axis always gives the **smallest** $I$; every shift only adds.

$$I = I_c + A\,d^2$$

**Composite section, in order:**

1. Find the whole section's centroid $\bar y = \dfrac{\sum A_i \bar y_i}{\sum A_i}$ — you cannot skip this.
2. For each piece take $I_{c,i}$ from the table and $d_i = |\bar y_i - \bar y|$.
3. Sum $\displaystyle I = \sum_i\big(I_{c,i} + A_i d_i^2\big)$, holes subtracting *both* terms.

The theorem is one-way: it moves between a **centroidal** axis and a parallel one.
To hop from one arbitrary axis to another, route back through the centroid first.

*From* [4.3](lessons/04-03-second-moment-of-area-parallel-axis.md)

### Where statics hands off

$$\sigma = \frac{My}{I} \quad \text{(bending stress)}, \qquad \sigma = \frac{F}{A} \quad \text{(axial stress)}$$

Statics produces $M$, $F$, and $I$; `mechanics-of-materials` turns them into stress
and asks whether the part survives. Watch the units: $\dfrac{(\text{N}\cdot\text{m})(\text{m})}{\text{m}^4} = \text{Pa}$.

*From* [4.1](lessons/04-01-internal-forces-normal-shear-bending.md), [4.3](lessons/04-03-second-moment-of-area-parallel-axis.md)

## Assumed, not taught here

Statics is a Tier 0 engineering course: it *uses* the following without deriving
them. The formulas themselves are tabulated above — this table says where the *why*
lives.

| Fact | Where it's taught |
|---|---|
| Newton's first and third laws; equilibrium as $\sum \vec F = m\vec a$ with $\vec a = 0$ | [mechanics-refresher 1.2](../mechanics-refresher/lessons/01-02-newtons-laws.md) |
| Weight $W = mg$, and the FBD as a physics tool | [mechanics-refresher 1.2](../mechanics-refresher/lessons/01-02-newtons-laws.md) |
| Torque $\tau = rF\sin\theta = r_\perp F$ — the same quantity as a moment, driving motion instead of balanced to zero | [mechanics-refresher 4.1](../mechanics-refresher/lessons/04-01-rotational-dynamics.md) |
| Vector components, magnitude $\sqrt{x^2+y^2}$, direction angle, and the arctan quadrant trap | [precalculus 4.2](../precalculus/lessons/04-02-vectors-parametric-and-polar.md) |
| $\sin$, $\cos$, $\tan$, $\arctan$; radians vs. degrees | [precalculus 3.1](../precalculus/lessons/03-01-trig-functions-for-calculus.md) |
| Exponentials and logarithms, $\ln$ inverting $e^x$ (the capstan equation) | [precalculus 2.3](../precalculus/lessons/02-03-exponential-and-logarithmic-functions.md) |
| Vectors, linear combinations, unit vectors, dividing by a length | [linalg-refresher 1.1](../linalg-refresher/lessons/01-01-vectors-span-linear-combinations.md) |
| Dot product and projection (used for $M_a = \hat u\cdot\vec M_O$) | [linalg-refresher 4.1](../linalg-refresher/lessons/04-01-inner-products-orthogonality.md) |
| $3\times3$ determinant expansion — the machine behind $\vec r\times\vec F$ | [linalg-refresher 2.3](../linalg-refresher/lessons/02-03-determinants.md) |
| **Cross product** itself ($\vec a\times\vec b$, right-hand rule, $|\vec a\times\vec b| = ab\sin\theta$) | [linalg-refresher 1.4](../linalg-refresher/lessons/01-04-cross-product-and-orientation.md) — the geometric definition, the determinant mnemonic, anticommutativity (why $\vec r\times\vec F \neq \vec F\times\vec r$), distributivity (which *is* Varignon), and the scalar triple product behind $M_a$. The component formula stays on **this card** too, under *Moments* |
| Definite integrals as accumulated area (resultants, centroids, $\int y^2 dA$) | [calc-refresher 2.1](../calc-refresher/lessons/02-01-integral-as-accumulation.md) |
| Antiderivatives of $x^n$ and $1/x$; substitution (the belt-friction integration) | [calc-refresher 2.2](../calc-refresher/lessons/02-02-integration-techniques.md) |
| "$M$ peaks where $dM/dx = 0$" — the first-derivative test | [calc-refresher 1.4](../calc-refresher/lessons/01-04-optimization.md) |
| Change equals the integral of the slope (shear area gives moment change) | [calc-refresher 2.1](../calc-refresher/lessons/02-01-integral-as-accumulation.md) |

## Pitfalls

### Free-body diagrams

- Draw only forces acting **on** the isolated body — never the ones it exerts on the world; third-law partners live on *different* diagrams. And never forget the weight: gravity touches nothing, so it's the arrow easiest to omit. *([1.1](lessons/01-01-forces-vectors-free-body-diagram.md))*
- For a particle, magnitude and direction fully specify a force; for a body with **size**, *where* it acts matters too — that's the moment. Keep the point of application in the drawing even when the algebra ignores it. *([1.1](lessons/01-01-forces-vectors-free-body-diagram.md))*
- Draw the FBD before writing any equation. It is where the sign of every component gets decided, not a formality. *([1.2](lessons/01-02-equilibrium-of-a-particle.md))*
- On a coupled problem (wedge, dismembered frame), every touching face carries a normal **and** a friction force. Leave one out and the equations won't close. *([3.4](lessons/03-04-wedges-belt-friction.md))*

### Signs and negative answers

- **A negative answer is not a mistake.** In reactions it means you drew the arrow backwards — keep the magnitude, flip the arrow, move on. In members it means compression instead of tension. In $M$ it means hogging instead of sagging. Never re-sum or re-draw to "make it positive." *([1.5](lessons/01-05-rigid-body-equilibrium-supports.md), [2.1](lessons/02-01-trusses-method-of-joints.md), [2.2](lessons/02-02-method-of-sections.md), [4.1](lessons/04-01-internal-forces-normal-shear-bending.md))*
- Commit to the **assume-tension** convention for every cut or joint member, solve, then read T/C off the signs at the end. Re-drawing mid-solve is how sign errors sneak in. *([2.2](lessons/02-02-method-of-sections.md))*
- A cable with negative tension is nature telling you the configuration is wrong (slack cable, or a compression member) — cables cannot push. *([1.2](lessons/01-02-equilibrium-of-a-particle.md))*
- Counterclockwise-positive is a *convention you must declare*, then obey: forces on opposite sides of a pivot twist opposite ways and partly cancel. Let $M_O = r_xF_y - r_yF_x$ carry the sign for you. *([1.3](lessons/01-03-moment-of-a-force.md))*

### Components and vectors

- $F_x = F\cos\theta$ only when $\theta$ is measured from the $x$-axis. Given an angle from the vertical, the sine and cosine swap. Draw the angle first. *([1.1](lessons/01-01-forces-vectors-free-body-diagram.md))*
- $\sum \vec F = 0$ means **each component separately** is zero — you cannot balance "the big forces" by eye. *([1.2](lessons/01-02-equilibrium-of-a-particle.md))*
- The cable closer to **vertical** carries the larger share of a hanging load, and nearly-horizontal cables carry the most tension of all. Intuition usually gets this backwards. *([1.2](lessons/01-02-equilibrium-of-a-particle.md))*

### Moments and couples

- $d$ is the **perpendicular** distance to the *line of action*, not the distance to the point of application. If the force is angled, $d = r\sin\phi$. When in doubt use components and skip $d$. *([1.3](lessons/01-03-moment-of-a-force.md))*
- Order matters: $\vec M_O = \vec r\times\vec F$, arm-then-force, with $\vec r$ running **from** the pivot **to** the force. Swap either and you flip the twist. *([1.3](lessons/01-03-moment-of-a-force.md))*
- A **single force's** moment depends on the point you take it about; a **couple's** does not. That's precisely why a couple can be drawn anywhere on the body. *([1.4](lessons/01-04-couples-equivalent-systems.md))*
- Sliding a force **along** its line is free; sliding it **sideways** erases a moment you must restore with a couple $\vec r\times\vec F$. Forget it and the equilibrium is silently wrong. *([1.4](lessons/01-04-couples-equivalent-systems.md))*
- In $\vec M_B = \vec r_{B\to A}\times\vec F$ the vector runs from the **new** point to the **original** one. Reversed, the couple's sign flips. *([1.4](lessons/01-04-couples-equivalent-systems.md))*

### Supports and constraint

- **A pin is two unknowns**, not one — it blocks sliding both ways. A roller is one (perpendicular to *its* surface, which may not be vertical); a fixed end is three. Miscount and the equations won't close. *([1.5](lessons/01-05-rigid-body-equilibrium-supports.md))*
- Three reactions don't guarantee equilibrium: all-parallel or all-concurrent arrangements still move. Count **and** arrangement. *([1.5](lessons/01-05-rigid-body-equilibrium-supports.md))*

### Trusses, frames and machines

- Start at a joint with **at most two** unknown member forces — two equations can't crack three. Spot zero-force members first; they often knock a three-unknown joint down to two. *([2.1](lessons/02-01-trusses-method-of-joints.md))*
- Solve the whole-truss **support reactions first**; the joint march needs them as its starting known forces. *([2.1](lessons/02-01-trusses-method-of-joints.md))*
- The zero-force rules apply only at joints with **no load and no support reaction**. A joint with a reaction is never a candidate. *([2.1](lessons/02-01-trusses-method-of-joints.md))*
- One 2D section is three equations, so cut at most three unknown members. Four unknowns from one cut cannot be finished. *([2.2](lessons/02-02-method-of-sections.md))*
- The moment centre need not lie *on* the piece you kept — it's a mathematical pivot. Put it wherever it kills the members you don't want. *([2.2](lessons/02-02-method-of-sections.md))*
- The two-force shortcut needs forces at **exactly two** points and no applied couple. A "link" with even a small load hung on it is multi-force, and its force is *not* along its axis. *([2.3](lessons/02-03-frames-and-machines.md))*
- The shared-pin force must be drawn **opposite** on the two members' diagrams. Same direction on both and the equations become nonsense. *([2.3](lessons/02-03-frames-and-machines.md))*
- Pick the moment centre deliberately — at the pin whose force you don't want to see. A lazy centre turns a one-line answer into simultaneous algebra. *([2.3](lessons/02-03-frames-and-machines.md), [2.2](lessons/02-02-method-of-sections.md))*

### Distributed loads and centroids

- The resultant acts at the centroid of the **load**, not the middle of the **beam**. Only a uniform load happens to land at midspan. *([3.1](lessons/03-01-distributed-loads-resultants.md))*
- A triangular load acts $\tfrac23$ from the **zero** end ($\tfrac13$ from the peak) — the balance point sits under the tall side. Flipping this is the classic slip. Same for a triangle's centroid: $\tfrac13$ of the height up from the **base**. *([3.1](lessons/03-01-distributed-loads-resultants.md), [3.2](lessons/03-02-centroids-of-areas.md))*
- Never average positions when combining pieces — weight each by its **force** (or area). A big rectangle drags the line of action toward itself far more than a small triangle does. *([3.1](lessons/03-01-distributed-loads-resultants.md))*
- A hole is negative in **both** sums — area and first moment alike. Subtracting only one of them is the classic wrong answer. *([3.2](lessons/03-02-centroids-of-areas.md))*
- Every piece's $(\bar x_i, \bar y_i)$ must be measured from the **same global origin** as the answer, never from the piece's own edge. *([3.2](lessons/03-02-centroids-of-areas.md))*
- The semicircle's $\tfrac{4R}{3\pi}$ is measured from the **flat diameter**, not the arc. *([3.2](lessons/03-02-centroids-of-areas.md))*

### Friction and tipping

- Friction is an **inequality**. Writing $F = \mu_s N$ for a body that isn't on the verge of moving gives too much friction and a false answer. First ask: *is motion impending?* *([3.3](lessons/03-03-dry-coulomb-friction.md))*
- The normal force **shifts** under a push — it migrates toward the leading edge, and $x = Ph/W$ capped at $b/2$ *is* the tipping condition. Leave $N$ under the centroid and you miss the tipping mode entirely. *([3.3](lessons/03-03-dry-coulomb-friction.md))*
- A body tips about the edge on the **far** side from the push — the one the normal force crowds toward. *([3.3](lessons/03-03-dry-coulomb-friction.md))*
- $\beta$ in $e^{\mu\beta}$ is in **radians**: three turns is $6\pi \approx 18.8$, not 1080. *([3.4](lessons/03-04-wedges-belt-friction.md))*
- In $T_2 = T_1e^{\mu\beta}$, $T_2$ is always the **larger** tension; the rope is about to slip from the tight side toward the slack side. *([3.4](lessons/03-04-wedges-belt-friction.md))*
- $\alpha < \phi$ is the *single-face* self-locking rule. With friction on both faces the true threshold is nearer $2\phi$ — so the rule is conservative, which is exactly what you want for a wedge that must not let go. *([3.4](lessons/03-04-wedges-belt-friction.md))*

### Beams and internal forces

- You usually **can't jump straight to the cut**: the retained piece includes a support whose reaction you don't yet know. The one escape is cutting toward a **free** end. *([4.1](lessons/04-01-internal-forces-normal-shear-bending.md))*
- Sum moments about the **cut** — that kills $N$ and $V$ and isolates $M$ — and include only forces on the piece you kept. *([4.1](lessons/04-01-internal-forces-normal-shear-bending.md))*
- $M_{\max}$ lives where $V = 0$, **not** at midspan. Under an off-centre point load or a partial UDL the zero-shear point shifts; on an overhanging beam the worst moment is often over the support. *([4.2](lessons/04-02-shear-bending-moment-diagrams.md))*
- Under a **point load**, $V$ jumps through zero rather than crossing on a slope — there's no root to solve, the peak is simply *at* the load. Only distributed load gives a sloped crossing. *([4.2](lessons/04-02-shear-bending-moment-diagrams.md))*
- Always run the closure check: if $V$ and $M$ don't return to their end values, a reaction or a load is wrong. *([4.2](lessons/04-02-shear-bending-moment-diagrams.md))*

### Section properties

- Summing each piece's $\tfrac{bh^3}{12}$ and stopping is wrong unless every piece is already centred on the section's axis — almost never. The $A_i d_i^2$ terms are usually **most** of the answer. *([4.3](lessons/04-03-second-moment-of-area-parallel-axis.md))*
- $I = I_c + Ad^2$ starts from the **centroidal** axis. You can't hop between two arbitrary axes by adding $Ad^2$ — route through the centroid. *([4.3](lessons/04-03-second-moment-of-area-parallel-axis.md))*
- In $\tfrac{bh^3}{12}$, $h$ is the dimension **perpendicular** to the bending axis, and it's cubed. Swap $b$ and $h$ on a tall thin web and $I$ is off by a large factor. *([4.3](lessons/04-03-second-moment-of-area-parallel-axis.md))*
