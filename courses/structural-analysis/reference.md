# Structural Analysis · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Structural analysis is one question asked twice. *Can equilibrium alone find the
forces?* — if yes, cut and sum (Module 1); if no, count the shortfall and let
geometry supply the missing equations (Module 3). Everything between is
deflection machinery, because "geometry supplies the equations" means you have to
be able to compute how far things move. This card owns the indeterminacy counts,
the four classical methods (virtual work, force, slope-deflection, moment
distribution), influence lines, and the stiffness matrix. Section properties,
support-reaction counts, and the standard single-beam formulas live on the
[statics](../statics/reference.md) and
[mechanics-of-materials](../mechanics-of-materials/reference.md) cards — pointers
below rather than copies.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $q$, $s$, $A_t$ | slab surface load (kPa); a beam's tributary **width** (m); a column's tributary **area** (m²) | [1.1](lessons/01-01-structural-forms-loads-idealization.md) |
| $r$ | total number of unknown reaction components on the structure | [1.2](lessons/01-02-supports-reactions-determinacy.md) |
| $c$ | number of **condition** equations — one bonus equation per internal hinge | [1.2](lessons/01-02-supports-reactions-determinacy.md) |
| $m$, $j$ | truss members and truss joints (in the count $m + r = 2j$) | [1.2](lessons/01-02-supports-reactions-determinacy.md) |
| $m$, $n$ (frame count) | members and nodes of a planar frame (in $(3m+r)-(3n+c)$) | [3.1](lessons/03-01-indeterminacy-redundancy-compatibility.md) |
| DSI | degree of static indeterminacy — how many unknowns equilibrium can't reach | [3.1](lessons/03-01-indeterminacy-redundancy-compatibility.md) |
| $N$, $V$, $M$ | internal axial force (kN), shear (kN), bending moment (kN·m) at a cut | [1.3](lessons/01-03-internal-forces-shear-bending-moment.md) |
| $w(x)$ | distributed load (kN/m), **positive downward** — the sign in $dV/dx=-w$ | [1.4](lessons/01-04-shear-bending-moment-diagrams.md) |
| $EI$ | flexural rigidity (kN·m²) — how hard the member is to bend | [2.1](lessons/02-01-elastic-curve-double-integration.md) |
| $y$, $y'$, $y''$ | deflection (m, **positive up**), slope (rad), curvature (1/m) of the elastic curve | [2.1](lessons/02-01-elastic-curve-double-integration.md) |
| $\theta_{B/A}$ | change in the elastic curve's slope between $A$ and $B$ (rad) | [2.2](lessons/02-02-moment-area-theorems.md) |
| $t_{B/A}$ | tangential deviation — gap at $B$ between the curve and the tangent drawn at $A$ (m) | [2.2](lessons/02-02-moment-area-theorems.md) |
| $U$ | strain energy stored in the deformed structure (kN·m) | [2.3](lessons/02-03-strain-energy-virtual-work.md) |
| $m$, $n$ (lower case) | internal moment / axial force produced by the **virtual unit load** | [2.3](lessons/02-03-strain-energy-virtual-work.md) |
| $\Delta$, $\theta$ | the one displacement / rotation you are probing for | [2.4](lessons/02-04-unit-load-method-beams-frames.md) |
| $X_i$ | the $i$-th **redundant** — a force or moment equilibrium can't find | [3.1](lessons/03-01-indeterminacy-redundancy-compatibility.md) |
| $\Delta_{i0}$ | displacement at release $i$ under the real loads, on the *released* structure | [3.1](lessons/03-01-indeterminacy-redundancy-compatibility.md) |
| $f_{ij}$ | flexibility coefficient — displacement at $i$ per **unit** of redundant $X_j$ | [3.1](lessons/03-01-indeterminacy-redundancy-compatibility.md) |
| $M_0$, $N_0$ | internal actions from the real loads alone, on the released structure | [3.3](lessons/03-03-force-method-frames-trusses-support-effects.md) |
| $\delta$ | a **prescribed** support settlement (m) — the right-hand side of compatibility | [3.3](lessons/03-03-force-method-frames-trusses-support-effects.md) |
| $\alpha$, $\Delta T$ | coefficient of thermal expansion (1/°C) and temperature change (°C) | [3.3](lessons/03-03-force-method-frames-trusses-support-effects.md) |
| $M_{nf}$ | member end moment at the **near** end $n$ of a member running $n \to f$ | [3.4](lessons/03-04-slope-deflection-method.md) |
| $\theta_n$ | rotation of joint $n$ (rad) — the unknown in every displacement method | [3.4](lessons/03-04-slope-deflection-method.md) |
| $\psi = \Delta/L$ | **chord rotation**: how far the member tilts bodily when its ends move apart transversely | [3.4](lessons/03-04-slope-deflection-method.md) |
| FEM | fixed-end moment — the end moment with both ends clamped against rotation | [3.4](lessons/03-04-slope-deflection-method.md) |
| $K$, $DF$ | member rotational stiffness (kN·m/rad) and its distribution factor at a joint | [3.5](lessons/03-05-moment-distribution-method.md) |
| $y(x)$ (IL) | influence-line ordinate: the response when the roaming unit load sits at $x$ | [4.1](lessons/04-01-influence-lines-determinate.md) |
| $\mathbf k$, $\mathbf K$ | element and assembled global stiffness matrix | [4.3](lessons/04-03-matrix-stiffness-method.md) |
| $\mathbf d$, $\mathbf F$ | vectors of nodal displacements and nodal loads in $\mathbf{K}\mathbf{d}=\mathbf{F}$ | [4.3](lessons/04-03-matrix-stiffness-method.md) |
| $v$, $\theta$ (DOF) | a node's transverse displacement (m, up) and rotation (rad, counterclockwise) | [4.3](lessons/04-03-matrix-stiffness-method.md) |

## Definitions

### Load path

The chain of members that hands a load down to the ground: slab → beam → girder →
column → foundation → soil. Analysis is bookkeeping on that chain, one member at a
time — load never teleports to the ground.

*Introduced:* [1.1](lessons/01-01-structural-forms-loads-idealization.md)

### Tributary width

The strip of slab that drains onto one beam: it reaches **halfway** to each
parallel neighbour, not the full panel. Multiply the surface pressure by it and an
area load becomes a line load.

$$w = q\,s \quad [\mathrm{kN/m}], \qquad P = q\,A_t \quad [\mathrm{kN}]$$

*Introduced:* [1.1](lessons/01-01-structural-forms-loads-idealization.md)

### Pin vs. rigid connection

The single modelling choice that decides everything downstream. A **pin** carries
force but not moment (bolted web clip, truss node) — set $M = 0$ there. A **rigid**
connection holds the angle between members and carries moment too (welded moment
endplate), which is what makes a frame a frame instead of a truss.

*Introduced:* [1.1](lessons/01-01-structural-forms-loads-idealization.md)

### Condition equation

An internal hinge transmits no moment, so it hands you one **extra** equation
(sum the moments of everything on one side of the hinge, about the hinge, to
zero). It adds an equation, never an unknown. The count of them is $c$.

*Introduced:* [1.2](lessons/01-02-supports-reactions-determinacy.md)

### Statically determinate

Equilibrium alone finds every reaction and internal force: unknowns exactly equal
available equations. Indeterminate means unknowns exceed equations; unstable means
the reverse — it moves.

*Introduced:* [1.2](lessons/01-02-supports-reactions-determinacy.md)

### Degree of static indeterminacy

The number of unknowns left over after you have written every equilibrium and
condition equation — equivalently, how many restraints you must release to reach a
determinate structure. It is the number of redundants and the number of
compatibility equations you will have to write.

$$\text{DSI} = m + r - 2j \ \ (\text{truss}), \qquad \text{DSI} = (3m + r) - (3n + c) \ \ (\text{frame})$$

*Introduced:* [3.1](lessons/03-01-indeterminacy-redundancy-compatibility.md)

### External vs. internal indeterminacy

**External** is excess *supports*; **internal** is excess *members* (a second
diagonal in a truss panel, a closed loop in a frame). A structure can be one
without the other.

$$\text{external} = r - (3 + c), \qquad \text{internal} = \text{DSI} - \text{external}$$

*Introduced:* [3.1](lessons/03-01-indeterminacy-redundancy-compatibility.md)

### Geometric instability

Enough reactions by count, but pointed uselessly: **all parallel** (nothing resists
motion across them) or **all concurrent** through one point (nothing resists
rotation about that point). Counting is necessary, never sufficient.

*Introduced:* [1.2](lessons/01-02-supports-reactions-determinacy.md)

### Sagging-positive convention

The course's standing sign rule for internal actions at a cut: $N$ positive in
**tension**, $V$ positive when it would spin the kept segment **clockwise**, $M$
positive when the beam **sags** (concave up, bottom fibre in tension). The sign of
$M$ is not a magnitude — it tells you which fibre to reinforce.

*Introduced:* [1.3](lessons/01-03-internal-forces-shear-bending-moment.md)

### Elastic curve

The smooth deflected shape the loaded member bends into. Its curvature at every
point is set by the moment there, so the moment diagram's *sign* already tells you
the shape: sag where $M>0$, hog where $M<0$, inflection wherever $M$ crosses zero.

$$EI\,y'' = M(x)$$

*Introduced:* [2.1](lessons/02-01-elastic-curve-double-integration.md) · see also
[mechanics-of-materials → Elastic curve](../mechanics-of-materials/reference.md#elastic-curve)

### Tangential deviation

How far the elastic curve at $B$ has fallen away from the straight tangent drawn at
$A$ — measured vertically, **at $B$**. It is a deviation from a line, not a
deflection, until you know where that line sits. The subscript order matters:
$t_{B/A}$ and $t_{A/B}$ are different numbers.

*Introduced:* [2.2](lessons/02-02-moment-area-theorems.md)

### Strain energy

The work the loads do getting the structure into its deformed shape, banked
elastically like a compressed spring. Energy piles up wherever an internal force
acts through the deformation it causes.

$$U_{\text{axial}} = \frac{N^2L}{2AE}, \qquad U_{\text{bending}} = \int_0^L \frac{M^2}{2EI}\,dx, \qquad U_{\text{torsion}} = \int_0^L \frac{T^2}{2GJ}\,dx$$

*Introduced:* [2.3](lessons/02-03-strain-energy-virtual-work.md)

### Principle of virtual work

Hang a fictitious **unit load** at exactly the point and direction whose movement
you want. Its external work riding through the *real* deformation equals the
internal work its own internal forces do through the real internal deformations —
and the "1" makes the wanted displacement fall out alone.

$$1\cdot\Delta = \int_0^L \frac{m\,M}{EI}\,dx \quad (\text{beams/frames}), \qquad 1\cdot\Delta = \sum \frac{n\,N\,L}{AE} \quad (\text{trusses})$$

*Introduced:* [2.3](lessons/02-03-strain-energy-virtual-work.md)

### Castigliano's second theorem

How fast the stored energy grows as you nudge a load tells you how far that load's
point of application moves. It is the unit-load sum wearing a derivative, because
$\partial N/\partial P = n$ by linearity.

$$\Delta_i = \frac{\partial U}{\partial P_i} = \sum \frac{NL}{AE}\frac{\partial N}{\partial P_i}$$

*Introduced:* [2.5](lessons/02-05-truss-deflections-castigliano.md)

### Dummy-load trick

Castigliano needs a load at the joint you're probing. If none acts there, invent
one ($Q$), carry it through the force analysis and the differentiation, then set
$Q = 0$ **last**. The resulting $\partial N/\partial Q$ is exactly the virtual $n$.

*Introduced:* [2.5](lessons/02-05-truss-deflections-castigliano.md)

### Redundant

Any excess unknown whose release leaves a **stable, determinate** structure — a
support reaction, an internal moment at a cut, or a truss member's axial force. The
choice is free; the answer is not.

*Introduced:* [3.1](lessons/03-01-indeterminacy-redundancy-compatibility.md)

### Primary (released) structure

What's left after you delete the redundants: a determinate structure you already
know how to solve, on which every $\Delta_{i0}$ and $f_{ij}$ is computed. The
redundants are then treated as unknown *applied loads* on it.

*Introduced:* [3.1](lessons/03-01-indeterminacy-redundancy-compatibility.md)

### Compatibility condition

The geometric fact equilibrium never knew: the deflected structure must still fit
its supports. One equation per release, and its right-hand side is whatever the
real support actually permits — zero for a rigid support, $\delta$ for one that
settles, and a *rotation* condition if you released a moment.

$$\Delta_{i0} + \sum_j f_{ij}X_j = \Delta_i^{\text{prescribed}}$$

*Introduced:* [3.1](lessons/03-01-indeterminacy-redundancy-compatibility.md)

### Flexibility coefficient

How far release $i$ moves when you tug on redundant $j$ by one unit — computed on
the released structure by the unit-load method. Units are displacement per unit
force (m/kN), or rotation per unit moment.

$$f_{ij} = \sum\int \frac{m_i m_j}{EI}\,dx \quad (\text{frames}), \qquad f_{ij} = \sum \frac{n_i n_j L}{AE} \quad (\text{trusses})$$

*Introduced:* [3.2](lessons/03-02-force-method-beams.md)

### Maxwell's reciprocal theorem

Swap cause and effect and the number doesn't change: the movement at $i$ per unit
action at $j$ equals the movement at $j$ per unit action at $i$. Hence the
flexibility matrix — and later the stiffness matrix — is **symmetric**, which is a
free arithmetic check. (Betti's theorem is the general work statement behind it,
and the reason Müller-Breslau works.)

$$f_{ij} = f_{ji}$$

*Introduced:* [3.2](lessons/03-02-force-method-beams.md)

### Fixed-end moment

The end moment a loaded member develops when **both** its ends are clamped against
rotation. It is the baseline of every displacement method: joint rotations are
corrections applied on top of the FEMs.

*Introduced:* [3.4](lessons/03-04-slope-deflection-method.md)

### Chord rotation

The angle the straight line joining a member's two ends tips through when one end
moves transversely relative to the other — support settlement, or frame sway. Zero
only when the ends stay level with each other.

$$\psi = \frac{\Delta}{L}$$

*Introduced:* [3.4](lessons/03-04-slope-deflection-method.md)

### Distribution factor

The fraction of a joint's unbalanced moment that one member absorbs when the joint
is released: its stiffness over the total stiffness meeting there. The factors at a
joint sum to 1; a fixed support has $DF=0$ (absorbs everything, rotates never), a
lone pin end has $DF=1$ (hands back everything).

$$DF_i = \frac{K_i}{\sum_j K_j}$$

*Introduced:* [3.5](lessons/03-05-moment-distribution-method.md)

### Carry-over factor

Twisting a member's near end also bends its far end: exactly **half** the balancing
moment, same sign, appears there — provided the far end is fixed or continuous.
Nothing carries over to a pin.

*Introduced:* [3.5](lessons/03-05-moment-distribution-method.md)

### Influence line

Freeze one **section** and walk a unit load across the whole structure, plotting
the response as a function of the *load's* position. That's the opposite of a
shear/moment diagram, which fixes the load and varies the section.

*Introduced:* [4.1](lessons/04-01-influence-lines-determinate.md)

### Müller-Breslau principle

Release the one restraint that carries the response you want, impose a unit
displacement (or unit rotation, for a moment) in that response's positive
direction, and the deflected shape *is* the influence line.

$$\text{IL}_R(x) = \delta(x)$$

*Introduced:* [4.2](lessons/04-02-influence-lines-indeterminate-muller-breslau.md)

### Element stiffness matrix

An element's complete price list: column $j$ lists the four end forces and moments
you must apply to hold it in the shape "DOF $j$ equals 1, all other DOFs zero."
Assembling these at shared nodes gives the global $\mathbf K$.

*Introduced:* [4.3](lessons/04-03-matrix-stiffness-method.md)

### Degree of freedom

One independent way a node can move. A 2-node bending element has four:
$[\,v_1,\ \theta_1,\ v_2,\ \theta_2\,]$ — transverse displacement and rotation at
each end. A support "fixes" a DOF by setting it to zero, which is what makes the
system solvable.

*Introduced:* [4.3](lessons/04-03-matrix-stiffness-method.md)

## Formulas and rules

### Determinacy — the decision table

Run this on every structure **before** analyzing it. Count unknowns, subtract
equations, then check the reaction *geometry*.

| Structure type | Count | Verdict |
|---|---|---|
| Single rigid body (beam, one-piece frame) | $\text{DSI} = r - (3 + c)$ | $=0$ determinate · $>0$ indeterminate to that degree · $<0$ mechanism |
| Planar frame, several members | $\text{DSI} = (3m + r) - (3n + c)$ | same reading; $m$ = members, $n$ = nodes |
| Planar truss | $\text{DSI} = m + r - 2j$ | same reading ($2$ equations per joint) |
| Beam under **transverse loads only** | $\text{DSI} = (\text{vertical reactions}) - 2$ | horizontal reactions and $\sum F_x$ drop out together |
| Any of the above, reactions parallel or concurrent | count is irrelevant | **geometrically unstable** |

Reaction counts per support ($r$): roller 1, pin 2, fixed 3 — the full catalogue,
including cables, rockers and 3-D supports, is on the
[statics card](../statics/reference.md#support-reactions-in-2d). Each internal
hinge adds $1$ to $c$. Each closed loop in a rigid frame adds $3$ to the internal
indeterminacy.

**The worked verdicts** — memorize the shape of this list, not the arithmetic:

| Structure | Count | DSI | Where it lives |
|---|---|---|---|
| Simply supported beam (pin + roller) | $r=3,\ c=0$ | **0** | — |
| Cantilever (one fixed end) | $r=3,\ c=0$ | **0** | — |
| Overhanging beam (pin + roller, free tip) | $r=3,\ c=0$ | **0** | — |
| Beam on three parallel rollers | $r=3,\ c=0$ | 0 by count | **unstable** — nothing resists $F_x$ |
| Rigid beam on three concurrent links | $r=3,\ c=0$ | 0 by count | **unstable** — spins about the meeting point |
| Fixed + roller with one internal hinge | $r=4,\ c=1$ | **0** | hinge absorbs the extra reaction |
| **Propped cantilever** (fixed + roller) | $r=4,\ c=0$ | **1** | external |
| Fixed–fixed beam | $r=6,\ c=0$ | **3** (general) / **2** (transverse loads only) | external |
| Continuous beam over $N$ supports, transverse load | $N$ vertical reactions | **$N-2$** | external |
| Continuous 3-span beam (pin + 3 rollers) | $r=5,\ c=0$ | **2** | external |
| Portal frame, both bases **pinned** | $m=3,\ n=4,\ r=4$ | **1** | external |
| Portal frame, both bases **fixed** | $m=3,\ n=4,\ r=6$ | **3** | external |
| Three-hinged portal (pinned bases + hinge at beam midspan) | $m=3,\ n=4,\ r=4,\ c=1$ | **0** | — |
| Truss panel with a **second** diagonal | $m=6,\ r=3,\ j=4$ | **1** | **internal** — the redundant is a member force |

*From* [1.2](lessons/01-02-supports-reactions-determinacy.md) *and* [3.1](lessons/03-01-indeterminacy-redundancy-compatibility.md)

### Internal forces and diagram-drawing rules

$$\frac{dV}{dx} = -w(x), \qquad \frac{dM}{dx} = V(x), \qquad \Delta V = -(\text{load area}), \qquad \Delta M = (\text{shear area})$$

| On a stretch | $V$ | $M$ |
|---|---|---|
| No load | constant | straight line |
| Uniform load $w$ (down) | linear, sloping down | sagging parabola |
| Downward point load $P$ | **jumps down** by $P$ | continuous, kinks |
| Applied couple $M_0$ | unchanged | **jumps** by $M_0$ |

**$M$ is extreme where $V = 0$** — that, not "where the load is biggest", is where
you find $M_{\max}$. Closure check: the diagrams must return to zero moment at a
pin, roller or free end. The method of sections behind them is: reactions → cut →
draw $N,V,M$ positive → three equilibrium equations; cut toward a *free* end and
you can skip the reactions entirely. Write a **separate** $V(x)$, $M(x)$ on each
interval between load discontinuities.

*From* [1.3](lessons/01-03-internal-forces-shear-bending-moment.md) *and* [1.4](lessons/01-04-shear-bending-moment-diagrams.md) · fuller table on the [statics card](../statics/reference.md#loadshearmoment-relations)

### Trusses and determinate frames

**Truss.** Every member is a two-force member: axial force only, tension positive.
Draw every unknown as tension and let the sign report compression.

- **Method of joints** — two equations per pin ($\sum F_x = \sum F_y = 0$); start at
  a joint with at most two unknown members and walk.
- **Method of sections** — cut through **at most three** unknown members, keep one
  side as a rigid body, and take moments about the point where two unknowns cross
  to isolate the third in one equation.
- **Zero-force members** — at an unloaded joint: two non-collinear members means
  both are zero; three members with two collinear means the odd one is zero.

**Determinate frame.** Reactions on the whole frame first, then disassemble at the
joints (a rigid joint passes $N$, $V$ *and* $M$; an internal hinge passes force but
not moment), then section each member as a beam. Respect the corner geometry — a
vertical column under a vertical load carries it as **axial** force, not shear.

*From* [1.5](lessons/01-05-trusses-determinate-frames.md) · rules and shortcuts also on the [statics card](../statics/reference.md#truss-shortcuts)

### Deflection — the four tools and when to reach for each

| Tool | Best for | Cost |
|---|---|---|
| Double integration, $EI\,y''=M(x)$ | the *whole* elastic curve of one clean span | two constants per segment, continuity conditions at every break |
| Moment-area theorems | one deflection where a **reference tangent** is known (cantilever) | needs the $M/EI$ diagram split into standard shapes |
| Unit-load / virtual work | **one** displacement at **one** point, any structure | one product integral per member |
| Castigliano ($\partial U/\partial P$) | a deflection under an existing load; cross-checks | same sum, needs a dummy load if no load sits there |

**Boundary conditions:** pin or roller $y=0$; fixed end $y=0$ **and** $y'=0$;
symmetry axis $y'=0$. Maximum deflection sits where $y'(x)=0$.

*From* [2.1](lessons/02-01-elastic-curve-double-integration.md)–[2.5](lessons/02-05-truss-deflections-castigliano.md) · condition table on the [mechanics-of-materials card](../mechanics-of-materials/reference.md#boundary-conditions-for-double-integration)

### Moment-area theorems

Read deflections off the $M/EI$ diagram's geometry instead of integrating.

$$\theta_{B/A} = \int_A^B \frac{M}{EI}\,dx = \big(\text{area of } M/EI \text{ from } A \text{ to } B\big)$$

$$t_{B/A} = \big(\text{that area}\big)\cdot\bar{x}_B, \qquad \bar{x}_B = \text{distance from the area's centroid to } B$$

For a **cantilever**, the tangent at the fixed end is the undeformed axis, so
$\delta_B = |t_{B/A}|$ outright. For a simply supported beam neither tangent is
horizontal — use a deviation to locate the reference tangent first.

**Standard $M/EI$ shapes** (base $b$, peak ordinate $h$):

| Diagram shape | Comes from | Area | Centroid, from the **tall** end |
|---|---|---|---|
| Triangle (peak one end, zero the other) | point / linear load → linear $M$ | $\tfrac12 bh$ | $\tfrac13 b$ |
| Parabolic spandrel, degree 2 (zero **and flat** at one end) | uniform load → quadratic $M$ | $\tfrac13 bh$ | $\tfrac14 b$ |
| Symmetric parabola (zero both ends, peak at mid) | UDL on a simple span | $\tfrac23 bh$ | mid-base |
| Rectangle | constant $M$ (end couple, frame column under a remote load) | $bh$ | mid-base |

*From* [2.2](lessons/02-02-moment-area-theorems.md)

### Unit-load method — one table for every structure

| Want | Virtual load to apply | Compute |
|---|---|---|
| Deflection $\Delta$ of a beam or frame | unit **force** at the point, along the wanted direction | $\Delta = \sum\displaystyle\int_0^{L_i} \frac{m\,M}{EI}\,dx$ |
| Rotation $\theta$ of a beam or frame | unit **couple** at the point | $\theta = \sum\displaystyle\int_0^{L_i} \frac{m_\theta\,M}{EI}\,dx$ |
| Joint displacement of a truss | unit **force** at the joint, along the wanted direction | $\Delta = \displaystyle\sum \frac{n\,N\,L}{AE}$ |
| Effect of temperature or misfit in a truss | same unit force | $\Delta = \displaystyle\sum n\,e, \quad e = \alpha\,\Delta T\,L$ |

Capital $M,N$ are always **real**; lower-case $m,n$ always come from the lone
**virtual** unit load on the same structure. A positive answer means the point
moves *with* your unit load. Every member that bends under either system
contributes; a member with $m = 0$ drops out.

*From* [2.3](lessons/02-03-strain-energy-virtual-work.md), [2.4](lessons/02-04-unit-load-method-beams-frames.md), [2.5](lessons/02-05-truss-deflections-castigliano.md)

### Product integrals — the "volume integral" table

Because $m(x)$ on a determinate release is almost always straight,
$\int_0^L m M\,dx$ depends only on the two diagrams' **shapes**. Lessons
[2.4](lessons/02-04-unit-load-method-beams-frames.md) and
[3.2](lessons/03-02-force-method-beams.md) lean on these constantly without ever
tabulating them; here they are. Peak ordinates $\bar m$ and $\bar M$, segment
length $L$.

| $m$ diagram | $M$ diagram | $\displaystyle\int_0^L mM\,dx$ |
|---|---|---|
| constant | constant | $\bar m\bar M L$ |
| constant | triangle | $\tfrac12\,\bar m\bar M L$ |
| triangle | triangle, peaks at the **same** end | $\tfrac13\,\bar m\bar M L$ |
| triangle | triangle, peaks at **opposite** ends | $\tfrac16\,\bar m\bar M L$ |
| constant | symmetric parabola (zero both ends) | $\tfrac23\,\bar m\bar M L$ |
| triangle | symmetric parabola | $\tfrac13\,\bar m\bar M L$ |
| constant | parabolic spandrel | $\tfrac13\,\bar m\bar M L$ |
| triangle | spandrel, peaks at the **same** end | $\tfrac14\,\bar m\bar M L$ |
| triangle | spandrel, peaks at **opposite** ends | $\tfrac1{12}\,\bar m\bar M L$ |

Divide by $EI$ at the end. Doing the integral directly always works — this is for
speed and for checking.

*From* [2.4](lessons/02-04-unit-load-method-beams-frames.md)

### The force (flexibility) method — recipe

1. Count the DSI; pick that many redundants $X_i$ whose removal leaves a **stable,
   determinate** released structure.
2. On the released structure, compute $\Delta_{i0}$ (displacement at each release
   under the real loads) and every $f_{ij}$ — both by unit load.
3. Write one compatibility equation per release and solve the linear system:

$$[\,f\,]\{X\} = \{\Delta^{\text{presc}}\} - \{\Delta_0\}, \qquad \text{single redundant: } X_1 = -\frac{\Delta_{10}}{f_{11}}$$

4. Superpose: $M = M_0 + \sum_i m_i X_i$ (or $N = N_0 + \sum_i n_i X_i$), then finish
   every reaction, $V$, $M$ and deflection by determinate statics.

$[f]$ is symmetric ($f_{ij}=f_{ji}$) and positive definite. Commit to one positive
direction per redundant and let the algebra carry the signs. For a *uniform*
indeterminate structure with rigid supports $EI$ cancels — the forces don't depend
on stiffness. That stops being true the moment a support settles or $EI$ varies.

*From* [3.2](lessons/03-02-force-method-beams.md) · single-beam version on the [mechanics-of-materials card](../mechanics-of-materials/reference.md#the-force-method-for-beams)

### Support settlement, temperature and misfit

The two non-load effects enter on **opposite sides** of the compatibility equation:

| Effect | Where it goes | Why |
|---|---|---|
| A support **settles** by $\delta$ | right-hand side, $\Delta_i^{\text{presc}} = \pm\delta$ (sign matching the $+X_i$ direction) | it is a *prescribed displacement* |
| A member is **heated** by $\Delta T$, or fabricated a length $\Lambda$ too long | left-hand side, folded into $\Delta_{i0}$ as $\sum n_i\,\alpha\,\Delta T\,L$ (or $\sum n_i\Lambda$) | it is an internal *free strain*, acting like an invisible load |

The thesis in one line: **a determinate structure absorbs settlement and heat by
moving, stress-free; an indeterminate one can't move freely, so it fights itself,
and the fight is internal stress.** Redundancy buys safety against collapse and
charges you in settlement and thermal stress.

Worked consequence to keep as a sanity anchor: a propped cantilever whose prop
settles by $\delta$ has $R_B = \tfrac38 wL - \dfrac{3EI\delta}{L^3}$ — the prop
sheds reaction and the fixed-end moment climbs to take it.

*From* [3.3](lessons/03-03-force-method-frames-trusses-support-effects.md)

### The slope-deflection equation

Unknowns are **joint rotations**, not forces. Sign convention: end moments and
joint rotations **positive clockwise** on the member end.

$$M_{nf} = \frac{2EI}{L}\big(2\theta_n + \theta_f - 3\psi\big) + \text{FEM}_{nf}$$

*In words: clamped-end baseline, plus a stiffness term weighting your own end's
twist by 2, the far end's by 1, and the member's bodily tilt by $-3$.*

**Procedure:** (1) list the unknown rotations — a fixed support has $\theta = 0$,
supports that can't move give $\psi = 0$; (2) write the equation for **every**
member end; (3) impose joint equilibrium $\sum M = 0$ at each free joint (an
exterior pin or roller end simply has $M = 0$); (4) solve for the $\theta$'s; (5)
back-substitute. Frame **sway** adds one unknown $\psi$ per storey and needs one
extra storey-shear equilibrium equation to match.

Two facts worth carrying: with the far end fixed, the moment to rotate an end one
radian is $4EI/L$; half of it appears at the far end (the $2\!:\!1$ ratio that
becomes moment distribution's carry-over).

*From* [3.4](lessons/03-04-slope-deflection-method.md)

### Fixed-end moments

Both ends clamped, downward loads, **clockwise-positive** on the member end (so the
left end goes negative and the right end positive).

| Load on span $AB$, length $L$ | $\text{FEM}_{AB}$ | $\text{FEM}_{BA}$ |
|---|---|---|
| Uniform load $w$, full span | $-\dfrac{wL^2}{12}$ | $+\dfrac{wL^2}{12}$ |
| Point load $P$ at midspan | $-\dfrac{PL}{8}$ | $+\dfrac{PL}{8}$ |
| Point load $P$ at $a$ from $A$, $b = L-a$ | $-\dfrac{Pab^2}{L^2}$ | $+\dfrac{Pa^2b}{L^2}$ |
| Triangular load, $0$ at $A$ rising to $w$ at $B$ | $-\dfrac{wL^2}{30}$ | $+\dfrac{wL^2}{20}$ |
| Triangular load, $0$ at both ends, peak $w$ at midspan | $-\dfrac{5wL^2}{96}$ | $+\dfrac{5wL^2}{96}$ |
| Applied couple $M_0$ at $a$ from $A$, $b = L-a$ | $\dfrac{M_0 b(3a-L)}{L^2}$ | $\dfrac{M_0 a(3b-L)}{L^2}$ |
| End $B$ settles $\Delta$ below $A$ (no load) | $-\dfrac{6EI\Delta}{L^2}$ | $-\dfrac{6EI\Delta}{L^2}$ |

**Far end is a true pin** (an exterior simple support): use the modified value
once, then never carry over to it —

$$\text{FEM}'_{AB} = \text{FEM}_{AB} - \tfrac12\,\text{FEM}_{BA}, \qquad K_{AB} = \frac{3EI}{L}.$$

For a UDL this gives the familiar propped-cantilever end moment $wL^2/8$ in a
single line.

*From* [3.4](lessons/03-04-slope-deflection-method.md) *and* [3.5](lessons/03-05-moment-distribution-method.md)

### Moment distribution

The same slope-deflection equations, solved by relaxation instead of elimination
(it is provably Gauss–Seidel, so it converges to the exact answer).

$$K = \frac{4EI}{L}\ \text{(far end fixed)}, \qquad K = \frac{3EI}{L}\ \text{(far end pinned)}, \qquad DF_i = \frac{K_i}{\sum_j K_j}, \qquad \text{carry-over} = \tfrac12$$

**The cycle:** lock every joint and write the FEMs → at a joint, sum the end
moments to get the unbalance $M_u$ and distribute $-DF_i M_u$ to each member →
carry **half** of each balancing moment to the member's far end (never to a pin) →
move to the next joint → sweep until the leftovers are negligible → total each
column: $M_{\text{final}} = \text{FEM} + \sum(\text{balances} + \text{carry-overs})$.

Only *ratios* of $K$ matter, so work in units of $EI/L$ and never plug in $E$.
Fixed ends have $DF = 0$: they absorb every carry-over and are never re-balanced,
which is why fixed-ended structures converge fastest. Each sweep shrinks the
corrections by roughly a factor of 4.

*From* [3.5](lessons/03-05-moment-distribution-method.md)

### Influence lines for a determinate simple span

Span $L$, pin at $A$ ($x=0$), roller at $B$; section $C$ at $a$ from $A$,
$b = L - a$. Determinate structures give **piecewise-linear** influence lines.

| Response | Influence line | Key ordinate | Units |
|---|---|---|---|
| $R_A$ | straight ramp $1 - x/L$ | $1$ at $A$, $0$ at $B$ | dimensionless |
| $R_B$ | straight ramp $x/L$ | $0$ at $A$, $1$ at $B$ | dimensionless |
| $M_C$ | triangle, zero at both supports, apex under $C$ | $\dfrac{ab}{L}$ (at midspan, $L/4$) | **length** (m) |
| $V_C$ | two parallel segments with a **unit jump** at $C$ | $-\dfrac{a}{L}$ just left, $+\dfrac{b}{L}$ just right | dimensionless |

**Using one:** a point load $P$ at position $x$ contributes $P\,y(x)$; a group
contributes $\sum_i P_i y(x_i)$, maximized by sliding the group so the **heaviest**
load lands on the peak. A uniform load $w$ contributes the load intensity times the
**area under the influence line** over the loaded stretch — so load **only** the
regions whose ordinate has the sign you want.

*From* [4.1](lessons/04-01-influence-lines-determinate.md)

### Müller-Breslau — the three gestures and the loading patterns

| Response wanted | Release to make | Impose |
|---|---|---|
| A **reaction** | remove that support | a unit **displacement** upward there |
| **Moment** at a section | insert a **hinge** there | a unit relative **rotation**, positive-moment sense |
| **Shear** at a section | insert a **shear release** (faces slide, don't rotate) | a unit relative **slide**, positive-shear sense |

The deflected shape that results *is* the influence line. On a **determinate**
structure the release leaves a mechanism, so the shape is straight lines; on an
**indeterminate** one the released structure still bends elastically, so the
influence line **curves**.

Continuous-beam loading patterns fall straight out of the sign of that shape:

| Response on a continuous beam | IL sign pattern | Where to put the live load |
|---|---|---|
| Hogging moment over an interior support | **single-signed** across every span | load **all** spans |
| Sagging moment at midspan of one span | reverses in the neighbouring span | load that span, then alternate spans |
| Reaction at an interior support | positive in the two adjacent spans, negative beyond | load the adjacent spans, **skip** the next |
| Shear just to one side of a support | negative on the other side of the release | load the spans on the release's positive side |

*From* [4.2](lessons/04-02-influence-lines-indeterminate-muller-breslau.md)

### The beam element stiffness matrix

DOF ordering $[\,v_1,\ \theta_1,\ v_2,\ \theta_2\,]$, prismatic element of length
$L$ and rigidity $EI$ (bending only, no axial):

$$\mathbf{k}=\frac{EI}{L^3}\begin{bmatrix}12&6L&-12&6L\\6L&4L^2&-6L&2L^2\\-12&-6L&12&-6L\\6L&2L^2&-6L&4L^2\end{bmatrix}$$

- $\dfrac{12EI}{L^3}$ — force per unit transverse displacement (kN/m). The $L^3$ is
  the same scaling as cantilever deflection: twice as long is eight times floppier.
- $\dfrac{4EI}{L}$ — moment per unit rotation (kN·m/rad). Literally the
  moment-distribution member stiffness $K$; same number, same meaning.

**Procedure:** number the global DOFs and map each element's local DOFs onto them →
scatter-add every $\mathbf k$ into the global $\mathbf K$ (shared-node entries sum)
→ strike the rows and columns of DOFs a support fixes to zero → solve the reduced
$\mathbf{K}\mathbf{d} = \mathbf{F}$ → recover reactions from the struck-out rows of
the full $\mathbf K$, and member end forces from each element's own $\mathbf k$
plus its fixed-end actions.

$\mathbf K$ is symmetric (Betti/Maxwell) and, **after** boundary conditions,
positive definite — $\mathbf d^\top\mathbf K\mathbf d = 2U > 0$ — hence uniquely
solvable. The unreduced matrix is singular: rigid-body translation
$[\,1,0,1,0\,]^\top$ and rotation $[\,0,1,L,1\,]^\top$ store no energy and generate
no end forces. Loads applied **between** nodes are handled by fixed-end forces
applied as equivalent nodal loads, then added back on recovery.

*From* [4.3](lessons/04-03-matrix-stiffness-method.md)

### Sign-convention crosswalk

The course runs four positive senses. Fix which one you're in before you write a
sign.

| Where | Positive means | Used in |
|---|---|---|
| Section cut, $V$ and $M$ | $M$ **sagging** (bottom fibre in tension); $V$ spins the kept piece clockwise | [1.3](lessons/01-03-internal-forces-shear-bending-moment.md)–[1.4](lessons/01-04-shear-bending-moment-diagrams.md), [2.1](lessons/02-01-elastic-curve-double-integration.md) |
| Elastic curve $y$ | upward (so a sagging beam has $y<0$) | [2.1](lessons/02-01-elastic-curve-double-integration.md) |
| Truss member force $N$ | tension | [1.5](lessons/01-05-trusses-determinate-frames.md), [2.5](lessons/02-05-truss-deflections-castigliano.md) |
| Slope-deflection $M_{nf}$, $\theta$, $\psi$ | **clockwise** on the member end | [3.4](lessons/03-04-slope-deflection-method.md) |
| Stiffness-method DOFs | $v$ up, $\theta$ counterclockwise | [4.3](lessons/04-03-matrix-stiffness-method.md) |

**Translating a member-end moment to a diagram value:** clockwise at a member's
**left** end together with counterclockwise at its **right** end is a *sagging*
(positive-diagram) internal moment. So a slope-deflection result of
$M_{AB} = -wL^2/8$ (counterclockwise at the left end) is a **hogging** diagram value
at $A$.

### Where this course borrows its numbers

| You need | Look here |
|---|---|
| Reaction count for any support, 2-D or 3-D | [statics → Support reactions in 2D](../statics/reference.md#support-reactions-in-2d) |
| $I$, $S$, $A$, centroid of a standard section; parallel-axis theorem | [statics → Second moments of area](../statics/reference.md#second-moments-of-area), [mechanics-of-materials → Section properties](../mechanics-of-materials/reference.md#section-properties) |
| Determinate beam reactions, $M_{\max}$, deflections and end slopes | [mechanics-of-materials → Standard beam results](../mechanics-of-materials/reference.md#standard-beam-results-reactions-moments-deflections) |
| Propped-cantilever and fixed–fixed standards ($3wL/8$, $wL^2/8$, $wL^2/12$, …) | same table, "Indeterminate standards" rows |
| Turning $M$ into a stress, $\sigma = Mc/I$ | [mechanics-of-materials → The four stress formulas](../mechanics-of-materials/reference.md#the-four-stress-formulas) |

## Assumed, not taught here

A Tier 1 course sitting on statics and mechanics of materials: it *uses* the
following without re-deriving them.

| Fact | Where it's taught |
|---|---|
| Support idealizations and their reaction counts; free-body discipline | [statics 1.5](../statics/lessons/01-05-rigid-body-equilibrium-supports.md) |
| Proper constraint — why parallel or concurrent reactions are unstable | [statics 1.5](../statics/lessons/01-05-rigid-body-equilibrium-supports.md) |
| Method of joints and method of sections, zero-force rules | [statics 2.1](../statics/lessons/02-01-trusses-method-of-joints.md), [2.2](../statics/lessons/02-02-method-of-sections.md) |
| Disassembling a frame at its joints (multi-force members) | [statics 2.3](../statics/lessons/02-03-frames-and-machines.md) |
| A distributed load's resultant $W = wL$ acts at the load's centroid | [statics 3.1](../statics/lessons/03-01-distributed-loads-resultants.md) |
| Centroids of standard areas — the arms in the moment-area theorems | [statics 3.2](../statics/lessons/03-02-centroids-of-areas.md) |
| $N$, $V$, $M$ at a cut by the method of sections | [statics 4.1](../statics/lessons/04-01-internal-forces-normal-shear-bending.md) |
| $dV/dx=-w$, $dM/dx=V$ and the full diagram-shape table | [statics 4.2](../statics/lessons/04-02-shear-bending-moment-diagrams.md) |
| Second moment of area $I$ and the parallel-axis theorem (the $I$ in every $EI$) | [statics 4.3](../statics/lessons/04-03-second-moment-of-area-parallel-axis.md) |
| Linear elasticity, Hooke's law, Young's modulus $E$ | [mechanics-of-materials 1.2](../mechanics-of-materials/lessons/01-02-strain-tension-test.md) |
| Axial stretch $\delta = NL/(AE)$ — the only deformation a truss has | [mechanics-of-materials 1.3](../mechanics-of-materials/lessons/01-03-axial-deformation.md) |
| Compatibility for a single axial member; load flows to the stiffer path | [mechanics-of-materials 1.4](../mechanics-of-materials/lessons/01-04-statically-indeterminate-axial.md) |
| Thermal strain $\alpha\,\Delta T$ and the blocked-bar stress $-E\alpha\,\Delta T$ | [mechanics-of-materials 1.5](../mechanics-of-materials/lessons/01-05-thermal-stress-poisson.md) |
| Flexure formula $\sigma = Mc/I$ — what the peak $M$ is *for* | [mechanics-of-materials 2.4](../mechanics-of-materials/lessons/02-04-flexure-formula.md) |
| Double integration of a single beam; the standard deflection results | [mechanics-of-materials 3.1](../mechanics-of-materials/lessons/03-01-deflection-by-integration.md), [3.2](../mechanics-of-materials/lessons/03-02-deflection-by-superposition.md) |
| The one-redundant propped beam this course generalizes | [mechanics-of-materials 3.3](../mechanics-of-materials/lessons/03-03-statically-indeterminate-beams.md) |
| Buckling — why a compression member can fail before it yields | [mechanics-of-materials 4.4](../mechanics-of-materials/lessons/04-04-column-buckling.md) |
| Solving $\mathbf{A}\mathbf{x}=\mathbf{b}$ by elimination; rank and singularity | [linalg-refresher 1.3](../linalg-refresher/lessons/01-03-linear-systems-elimination-rank.md) |
| Symmetric positive-definite matrices and quadratic forms ($\mathbf d^\top\mathbf K\mathbf d = 2U$) | [linalg-refresher 5.1](../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md) |
| Integrating polynomials and the substitution $u = L-x$ that runs every unit-load integral | [calc-refresher 2.2](../calc-refresher/lessons/02-02-integration-techniques.md) |
| "$M$ peaks where $V=0$" — the first-derivative test | [calc-refresher 1.4](../calc-refresher/lessons/01-04-optimization.md) |
| Partial derivatives, for Castigliano's $\partial U/\partial P$ | [calc-refresher 4.1](../calc-refresher/lessons/04-01-partial-derivatives-and-gradient.md) |

## Pitfalls

### Modelling and idealization

- Tributary width stops **halfway** to the next parallel support, not at the full panel width — using the panel doubles every downstream force. *([1.1](lessons/01-01-structural-forms-loads-idealization.md))*
- "Pinned" blocks *translation*, not rotation — that's exactly why it carries no moment. Only a fixed support blocks rotation and develops a moment reaction. *([1.1](lessons/01-01-structural-forms-loads-idealization.md), [1.2](lessons/01-02-supports-reactions-determinacy.md))*
- Idealization isn't sloppiness to apologize for; it's a deliberate act. The skill is knowing which assumption you made and which way it errs — a pin model is conservative for the beam and *unsafe* for the column if the real joint is stiff. *([1.1](lessons/01-01-structural-forms-loads-idealization.md))*
- Don't treat a frame joint like a truss joint: a rigid corner passes moment, and a vertical column under a vertical load carries it as **axial** force, not shear. *([1.5](lessons/01-05-trusses-determinate-frames.md))*

### Determinacy and stability

- The right *count* does not guarantee stability. Three parallel rollers pass $r = 3$ and still slide; three concurrent links pass and still spin. Check reaction geometry every time. *([1.2](lessons/01-02-supports-reactions-determinacy.md), [3.1](lessons/03-01-indeterminacy-redundancy-compatibility.md))*
- An internal hinge **adds an equation**, not an unknown — it raises $c$, and miscounting it flips your verdict. *([1.2](lessons/01-02-supports-reactions-determinacy.md))*
- Say which model you mean for a fixed–fixed beam: **3** in the general planar count, **2** if the loading is purely transverse so the horizontal reactions and $\sum F_x$ drop out together. *([3.1](lessons/03-01-indeterminacy-redundancy-compatibility.md))*
- A redundant needn't be a support reaction — an internal moment at a cut, or an extra truss member's axial force, is often the better choice. But it must leave a **stable, determinate** primary structure: fire supports, never structure. *([3.1](lessons/03-01-indeterminacy-redundancy-compatibility.md), [3.2](lessons/03-02-force-method-beams.md))*

### Signs and conventions

- The sign of $M$ encodes *which fibre is in tension*, not magnitude: $-PL$ is not "smaller" than $+PL/4$, it's the top face instead of the bottom. Get it wrong and you reinforce the wrong side of a real beam. *([1.3](lessons/01-03-internal-forces-shear-bending-moment.md))*
- $dV/dx = -w$ with $w$ **positive downward** — drop the minus and your UDL slopes the shear the wrong way. *([1.4](lessons/01-04-shear-bending-moment-diagrams.md))*
- Slope-deflection's member-end convention is **not** the diagram convention. Translate deliberately (see the crosswalk above) before plotting. *([3.4](lessons/03-04-slope-deflection-method.md))*
- Lessons [3.4](lessons/03-04-slope-deflection-method.md) and [3.5](lessons/03-05-moment-distribution-method.md) run **mirror-image** member-end conventions — 3.4 takes clockwise positive, 3.5 takes counterclockwise positive, so every FEM in 3.5 appears with the opposite sign to the table above. Magnitudes and the final hogging/sagging conclusions are identical. Pick one convention per problem and stay in it.
- Keep tension $+$ / compression $-$ in **both** the $N$ and the $n$ column of a truss table: $(-)(-) = +$ is a real positive contribution, not a cancellation. *([2.5](lessons/02-05-truss-deflections-castigliano.md))*

### Diagrams

- $M$ is largest where **$V = 0$**, not where the load is largest — and on an overhanging beam the governing moment sits at a *support*. Find the zero-shear crossings first. *([1.4](lessons/01-04-shear-bending-moment-diagrams.md))*
- A point load jumps **$V$** and merely kinks $M$; only an applied **couple** makes $M$ itself jump. *([1.4](lessons/01-04-shear-bending-moment-diagrams.md))*
- One $M(x)$ never covers a whole beam: every point load, reaction, and edge of a distributed load starts a **new region**. State the interval each expression is valid on. *([1.3](lessons/01-03-internal-forces-shear-bending-moment.md), [2.1](lessons/02-01-elastic-curve-double-integration.md))*
- You can skip finding the reactions **only** if you keep a load-free side (a cantilever tip). Any simply supported beam makes you find them first. *([1.3](lessons/01-03-internal-forces-shear-bending-moment.md))*
- A section cut can resolve at most **three** unknown members — a cut through four stalls. Re-route it (curved cuts are legal) or grab one member from a nearby joint first. *([1.5](lessons/01-05-trusses-determinate-frames.md))*

### Deflections and energy methods

- Integration constants are **per segment**. "$y = 0$ at the left pin" constrains only the left segment; the right segment's constants come from its own support plus the two continuity equations at the break. *([2.1](lessons/02-01-elastic-curve-double-integration.md))*
- $t_{B/A}$ is a deviation from the **tangent at $A$**, not a deflection. It equals the true deflection only where that tangent is horizontal and undisplaced — true at a cantilever's fixed end, false at a simple support. *([2.2](lessons/02-02-moment-area-theorems.md))*
- The arm in $t_{B/A}$ runs to **$B$**, not to $A$ and not to the centroid's own axis. Swapping silently turns $2L/3$ into $L/3$. *([2.2](lessons/02-02-moment-area-theorems.md))*
- Triangle vs. spandrel: point/linear load → linear $M$ → **triangle** ($\tfrac12 bh$, centroid $\tfrac13 b$); uniform load → quadratic $M$ → **spandrel** ($\tfrac13 bh$, centroid $\tfrac14 b$). Grabbing the wrong pair is the classic moment-area slip. *([2.2](lessons/02-02-moment-area-theorems.md))*
- $\tfrac12 P\Delta = U$ works only for a **single** load and gives only the deflection under it. With two loads present it silently omits the second load's work. Virtual work has no such limit — that's why it exists. *([2.3](lessons/02-03-strain-energy-virtual-work.md))*
- The $\tfrac12$ belongs to *real* external work (the load grows from zero). The virtual statement $1\cdot\Delta$ has **no** $\tfrac12$ — the unit load is already at full value. Don't cross the two. *([2.3](lessons/02-03-strain-energy-virtual-work.md))*
- Capital $M$ is real, lower-case $m$ is virtual; a unit **force** probes a translation, a unit **couple** probes a rotation. Applying the wrong one answers a different question. *([2.3](lessons/02-03-strain-energy-virtual-work.md), [2.4](lessons/02-04-unit-load-method-beams-frames.md))*
- In the dummy-load trick, set $Q = 0$ **last** — zero it before differentiating and $\partial N/\partial Q$ vanishes with it. *([2.5](lessons/02-05-truss-deflections-castigliano.md))*
- The answer's direction is your unit load's direction. Want horizontal at joint $D$? Unit load horizontal, at $D$ — not at the loaded joint. *([2.5](lessons/02-05-truss-deflections-castigliano.md))*

### The force method and support effects

- Compatibility doesn't always read "deflection $=0$". Release a moment and the condition is a **rotation**; release a settling support and the right-hand side is the known movement. Match the condition to what you released. *([3.1](lessons/03-01-indeterminacy-redundancy-compatibility.md), [3.2](lessons/03-02-force-method-beams.md))*
- Don't lean on intuition for signs. Commit to one positive direction per redundant and let the algebra cancel — in the propped cantilever, $\Delta_{10}$ came out negative and $f_{11}$ positive, and the equation handled it. *([3.2](lessons/03-02-force-method-beams.md))*
- If your hand-computed $f_{12}$ and $f_{21}$ disagree you have an arithmetic error, not a special structure — Maxwell guarantees symmetry. Use it as a free check. *([3.2](lessons/03-02-force-method-beams.md))*
- Settlement swaps $0$ for $\delta$ **only at the settling release**, and only with the sign matching the $+X_i$ direction. Draw the arrow before writing the number. *([3.3](lessons/03-03-force-method-frames-trusses-support-effects.md))*
- Settlement and temperature are *not* the same kind of term: a support movement is a prescribed displacement (right-hand side); a member's thermal or misfit elongation is a free strain that acts like a load (folds into $\Delta_{i0}$, left-hand side). *([3.3](lessons/03-03-force-method-frames-trusses-support-effects.md))*
- A **determinate** structure develops no thermal or settlement stress — it just moves. Predicting zero stress from a settling foundation on an *indeterminate* structure is the error that cracks slabs. *([3.3](lessons/03-03-force-method-frames-trusses-support-effects.md))*

### Displacement methods

- $\psi = \Delta/L$ is zero only when a member's ends stay level with each other. Any settlement or frame sway makes it nonzero — and a sway unknown needs an extra storey-equilibrium equation to match it. *([3.4](lessons/03-04-slope-deflection-method.md))*
- "No load on this span" kills the FEM, never the $2EI/L$ coupling: an unloaded member still picks up moment because the joint it shares rotates. *([3.4](lessons/03-04-slope-deflection-method.md))*
- Distribution factors depend on **relative** stiffness $K = 4EI/L$, so a common $EI$ cancels and a *short* span grabs more of the correction. Work in units of $EI/L$. *([3.5](lessons/03-05-moment-distribution-method.md))*
- Carry over **half**, and only to a fixed or continuous far end. A pinned far end receives nothing — which is exactly why you switch that member to $3EI/L$ and stop carrying to it. Doing both double-counts the release. *([3.5](lessons/03-05-moment-distribution-method.md))*
- Balancing one joint re-unbalances its neighbours. Keep sweeping until the carry-overs fall below tolerance; only fixed ends ($DF=0$) are never re-balanced. *([3.5](lessons/03-05-moment-distribution-method.md))*

### Influence lines

- An influence line is not a moment diagram, even when both are triangles: the IL's horizontal axis is the **load's** position with the section fixed; the diagram's is the **section's** position with the load fixed. *([4.1](lessons/04-01-influence-lines-determinate.md))*
- The peak ordinate is a response **per unit load** — for $M_C$ it has units of length. Multiply by the actual load. *([4.1](lessons/04-01-influence-lines-determinate.md))*
- Load the whole span only when the IL is single-signed. Where it changes sign (shear at an interior section, most continuous-beam responses) a uniform load on the opposite-sign region **subtracts**. *([4.1](lessons/04-01-influence-lines-determinate.md), [4.2](lessons/04-02-influence-lines-indeterminate-muller-breslau.md))*
- Support-moment ILs are single-signed (load **all** spans); span-moment ILs reverse span to span (load **alternate** spans). Applying one rule to the other case is the standard continuous-beam mistake. *([4.2](lessons/04-02-influence-lines-indeterminate-muller-breslau.md))*
- Indeterminate ILs are **curved** — releasing one restraint leaves a beam that still bends elastically. Straight-line ILs are the determinate special case where the release yields a mechanism. *([4.2](lessons/04-02-influence-lines-indeterminate-muller-breslau.md))*
- Impose the release in the response's **positive** sense; push the wrong way and every ordinate — and your loading conclusion — inverts. *([4.2](lessons/04-02-influence-lines-indeterminate-muller-breslau.md))*

### Matrix stiffness

- You never invert the *unreduced* $\mathbf K$ — it is singular, because the unrestrained structure can float away as a rigid body. Applying boundary conditions is what makes the problem solvable, not an afterthought. *([4.3](lessons/04-03-matrix-stiffness-method.md))*
- The entries are pinned to the ordering $[\,v_1,\theta_1,v_2,\theta_2\,]$. Reorder them and assembly corrupts silently. *([4.3](lessons/04-03-matrix-stiffness-method.md))*
- $\mathbf{K}\mathbf{d}=\mathbf{F}$ assumes loads act **at nodes**. A UDL or a mid-span point load enters as equivalent nodal loads (the negatives of the fixed-end actions), and the fixed-end actions must be added back when recovering member forces. *([4.3](lessons/04-03-matrix-stiffness-method.md))*
