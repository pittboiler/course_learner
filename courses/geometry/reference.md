# Euclidean Geometry · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Geometry runs on two engines. One is *deduction*: name what you're given, cite a
reason for every step, and a picture becomes a proof. The other is *measurement*:
angle sums, side ratios, areas, volumes, coordinates. This card holds the second
engine's tables — the ones you'd otherwise hunt for mid-problem — plus the
definitions and criteria the first engine cites as reasons.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $AB$ | the segment joining $A$ and $B$ — and, in a formula, its **length** | [1.1](lessons/01-01-points-lines-planes-angles.md) |
| $\angle AOB$ | the angle at vertex $O$ — the **middle letter is always the vertex** | [1.1](lessons/01-01-points-lines-planes-angles.md) |
| $m\angle AOB$ | the *measure* of that angle, a number in degrees | [1.1](lessons/01-01-points-lines-planes-angles.md) |
| $x^\circ$ | degrees; a straight line is $180^\circ$, a full turn $360^\circ$ | [1.1](lessons/01-01-points-lines-planes-angles.md) |
| $\cong$ | congruent — same shape *and* size (used between **figures**) | [1.2](lessons/01-02-deductive-proof-two-column.md) |
| $=$ | equal (used between **measures**: numbers, lengths, angle measures) | [1.2](lessons/01-02-deductive-proof-two-column.md) |
| $\parallel$ | parallel — same direction, never meet (arrowheads mark it in figures) | [1.3](lessons/01-03-parallel-lines-angles.md) |
| $\perp$ | perpendicular — meeting at $90^\circ$ | [1.3](lessons/01-03-parallel-lines-angles.md) |
| $\triangle ABC$ | the triangle with those vertices; in $\triangle ABC\cong\triangle DEF$ the **letter order is the correspondence** | [2.1](lessons/02-01-triangle-congruence-isosceles.md) |
| $\sim$ | similar — same shape, any size | [2.2](lessons/02-02-similarity-proportional-reasoning.md) |
| $k$ | scale factor: every length of the image is $k$ times the original | [2.2](lessons/02-02-similarity-proportional-reasoning.md) |
| $a,\,b,\,c$ | in a right triangle: the two legs and the hypotenuse ($c$ opposite the right angle, always longest) | [2.3](lessons/02-03-pythagorean-theorem.md) |
| $p,\,q,\,h$ | the two pieces the altitude cuts the hypotenuse into, and the altitude itself | [2.2](lessons/02-02-similarity-proportional-reasoning.md) |
| $n$ | number of sides of a polygon | [3.1](lessons/03-01-quadrilaterals-polygons.md) |
| $O$, $r$, $d$ | a circle's center, radius, and diameter ($d = 2r$) | [3.2](lessons/03-02-circles-chords-tangents-arcs-inscribed-angles.md) |
| $\text{arc } AB$ | the piece of the rim between $A$ and $B$ — and its degree measure | [3.2](lessons/03-02-circles-chords-tangents-arcs-inscribed-angles.md) |
| $b$, $h$ | base and **perpendicular** height of a plane figure | [4.1](lessons/04-01-perimeter-area-surface-area-volume.md) |
| $B$ | area of a solid's **base** (capital $B$, versus lowercase $b$ for a length) | [4.1](lessons/04-01-perimeter-area-surface-area-volume.md) |
| $\ell$ | slant height of a cone or pyramid (apex down the *side*) | [4.1](lessons/04-01-perimeter-area-surface-area-volume.md) |
| $C$, $A$, $S$, $V$ | circumference, area, surface area, volume | [4.1](lessons/04-01-perimeter-area-surface-area-volume.md) |
| $m$ | slope of a line, rise over run (not to be confused with $m\angle$) | [4.2](lessons/04-02-coordinate-geometry.md) |
| $\Delta x$, $\Delta y$ | horizontal and vertical gap between two points | [4.2](lessons/04-02-coordinate-geometry.md) |
| $A'$ | the **image** of $A$ after a transformation ("A prime") | [4.3](lessons/04-03-rigid-transformations-symmetry.md) |
| $(x,y)\mapsto(\ldots)$ | the rule a transformation applies to every point | [4.3](lessons/04-03-rigid-transformations-symmetry.md) |

## Definitions

### Point, line, plane

The three objects nobody defines — you point at them and start. A point is a
location with no size, a line is straight and endless both ways, a plane is a
flat sheet extending forever. Everything else is built from these.

*Introduced:* [1.1](lessons/01-01-points-lines-planes-angles.md)

### Segment, ray, angle

Keep only what's between two points and you have a **segment**; keep one endpoint
and run forever through the other and you have a **ray**; pin two rays at a shared
endpoint and the opening between them is an **angle**, which measures *turning*.

*Introduced:* [1.1](lessons/01-01-points-lines-planes-angles.md)

### Complementary and supplementary

Two angles are complementary if their measures total a right angle, supplementary
if they total a straight one. These compare **measures only** — the angles need
not touch.

$$\text{complementary: } m\angle 1 + m\angle 2 = 90^\circ, \qquad \text{supplementary: } m\angle 1 + m\angle 2 = 180^\circ$$

*Introduced:* [1.1](lessons/01-01-points-lines-planes-angles.md)

### Linear pair

Two angles that sit side by side along a straight line. Unlike "supplementary,"
this one is geometric: they must be adjacent and share a side. A linear pair is
always supplementary.

*Introduced:* [1.1](lessons/01-01-points-lines-planes-angles.md)

### Vertical angles

The two angles across the crossing point from each other when two lines meet.
"Vertical" comes from *vertex*, not from up-and-down. They are always congruent.

*Introduced:* [1.1](lessons/01-01-points-lines-planes-angles.md)

### Definition, postulate, theorem

A **definition** fixes what a word means; a **postulate** is a rule accepted
without proof (the ground floor); a **theorem** is a statement *proved* from
definitions, postulates, and earlier theorems. Only these three — plus algebraic
properties — may ever appear in a Reasons column.

*Introduced:* [1.2](lessons/01-02-deductive-proof-two-column.md)

### Two-column proof

A table whose left column is a numbered chain of statements ending in the
conclusion, and whose right column names the reason forcing each one. Line 1 is
almost always "Given"; the last line usually converts $=$ into $\cong$.

*Introduced:* [1.2](lessons/01-02-deductive-proof-two-column.md)

### Congruent

Same shape and same size — you could lay one figure on the other and have them
coincide exactly. For triangles that means all six parts (three sides, three
angles) match.

*Introduced:* [1.2](lessons/01-02-deductive-proof-two-column.md), [2.1](lessons/02-01-triangle-congruence-isosceles.md)

### CPCTC

*Corresponding Parts of Congruent Triangles are Congruent.* Once you've proved
two triangles congruent by any criterion, **every** remaining matched pair of
sides and angles is congruent for free. This is the line most proofs end on.

*Introduced:* [2.1](lessons/02-01-triangle-congruence-isosceles.md)

### Transversal

A line cutting across two other lines at two distinct points, creating eight
angles. **Interior** angles lie between the two lines, **exterior** angles outside
them.

*Introduced:* [1.3](lessons/01-03-parallel-lines-angles.md)

### Isosceles triangle

A triangle with two equal sides. The vertex where they meet is the **apex**, the
side opposite it the **base**, and the two angles on the base the **base angles**
— which are equal.

$$AB = AC \iff \angle B = \angle C$$

*Introduced:* [2.1](lessons/02-01-triangle-congruence-isosceles.md)

### Similar

One figure is a perfect scaled photocopy of the other: all corresponding angles
equal, all corresponding lengths multiplied by one common number.

$$\triangle ABC \sim \triangle DEF \iff \angle A = \angle D,\ \angle B = \angle E,\ \angle C = \angle F \ \text{ and } \ \frac{AB}{DE}=\frac{BC}{EF}=\frac{CA}{FD}$$

*Introduced:* [2.2](lessons/02-02-similarity-proportional-reasoning.md)

### Scale factor

The one number $k$ every length gets multiplied by when you pass from one similar
figure to the other. Sides, altitudes, medians, perimeters — all scale by $k$;
angles don't budge.

*Introduced:* [2.2](lessons/02-02-similarity-proportional-reasoning.md)

### Geometric mean

The "multiplicative average" of two numbers: the side of the square with the same
area as the rectangle they'd make. It shows up when an altitude splits a right
triangle into two similar copies.

$$g = \sqrt{pq}$$

*Introduced:* [2.2](lessons/02-02-similarity-proportional-reasoning.md)

### Hypotenuse and legs

In a right triangle the **hypotenuse** is the side opposite the right angle —
always the longest one; the other two sides, which form the right angle, are the
**legs**. Getting these backwards is the fastest way to a wrong Pythagorean setup.

*Introduced:* [2.3](lessons/02-03-pythagorean-theorem.md)

### Polygon

A closed figure made of straight segments. **Convex** means no interior angle
exceeds $180^\circ$ (no dents) — the angle-sum formulas below assume it.

*Introduced:* [3.1](lessons/03-01-quadrilaterals-polygons.md)

### Regular polygon

All sides equal *and* all angles equal. Both conditions are needed: a rhombus has
equal sides but unequal angles, a rectangle the reverse.

*Introduced:* [3.1](lessons/03-01-quadrilaterals-polygons.md)

### Chord, secant, tangent

A **chord** joins two points on a circle (a **diameter** is a chord through the
center, the longest one); a **secant** is a line cutting the circle twice; a
**tangent** grazes it at exactly one point, the **point of tangency**.

*Introduced:* [3.2](lessons/03-02-circles-chords-tangents-arcs-inscribed-angles.md)

### Arc measure

An **arc** is a piece of the rim between two points — **minor** if less than half
the circle, **major** if more, a **semicircle** if exactly half. Its *measure* in
degrees is defined to be the central angle that opens onto it.

*Introduced:* [3.2](lessons/03-02-circles-chords-tangents-arcs-inscribed-angles.md)

### Central angle

An angle with its vertex at the **center**. It reads the arc at full size:
$\angle AOB = \text{arc } AB$.

*Introduced:* [3.2](lessons/03-02-circles-chords-tangents-arcs-inscribed-angles.md)

### Inscribed angle

An angle with its vertex **on the circle**, subtending an arc across from it. It
sees the arc at half size, and every inscribed angle on the same arc agrees.

$$\angle ACB = \tfrac12\,\text{arc } AB$$

*Introduced:* [3.2](lessons/03-02-circles-chords-tangents-arcs-inscribed-angles.md)

### Cyclic quadrilateral

A quadrilateral whose four vertices all lie on one circle. Its opposite angles are
supplementary — **not** equal, which is the parallelogram rule.

*Introduced:* [3.2](lessons/03-02-circles-chords-tangents-arcs-inscribed-angles.md)

### Slant height

For a cone or pyramid, the distance from the apex down the **side** — to the base
rim (cone) or to the midpoint of a base edge (pyramid). It is what *surface area*
wants; *volume* wants the vertical height instead.

$$\ell = \sqrt{r^2 + h^2} \quad (\text{cone})$$

*Introduced:* [4.1](lessons/04-01-perimeter-area-surface-area-volume.md)

### Slope

How steeply a line tilts: units climbed per unit moved right. Vertical lines have
**undefined** slope (dividing by zero), horizontal lines have slope $0$.

$$m = \frac{\Delta y}{\Delta x} = \frac{y_2-y_1}{x_2-x_1}$$

*Introduced:* [4.2](lessons/04-02-coordinate-geometry.md)

### Rigid motion

Any way of moving the whole plane that never changes a distance — slide, spin, or
flip. Angles and areas come along for the ride. Also called an **isometry**.

$$\lvert T(P)\,T(Q)\rvert = \lvert PQ\rvert \quad\text{for all } P,Q$$

*Introduced:* [4.3](lessons/04-03-rigid-transformations-symmetry.md)

### Congruence by rigid motion

The deeper definition of congruent: two figures are congruent exactly when some
rigid motion carries one onto the other. SSS/SAS/ASA are the checkable
fingerprints that such a motion exists.

*Introduced:* [4.3](lessons/04-03-rigid-transformations-symmetry.md)

### Glide reflection

A reflection followed by a translation **along the mirror line** — the pattern of
footprints from walking in a straight line. It's a genuinely new motion,
unreachable by any single slide, spin, or flip.

*Introduced:* [4.3](lessons/04-03-rigid-transformations-symmetry.md)

### Symmetry

A rigid motion that maps a figure *onto itself*. **Line symmetry**: some
reflection leaves it unchanged. **Rotational symmetry of order $n$**: a turn of
$360^\circ/n$ about its center lands it back on itself.

*Introduced:* [4.3](lessons/04-03-rigid-transformations-symmetry.md)

## Formulas and rules

### Angles at a point and along a line

| Situation | Relationship |
|---|---|
| complementary angles | measures sum to $90^\circ$ |
| supplementary angles | measures sum to $180^\circ$ |
| linear pair (adjacent, along a line) | always supplementary |
| vertical angles (across a crossing) | always congruent |
| adjacent angles sharing a ray | **angle addition:** $m\angle AOB + m\angle BOC = m\angle AOC$ |
| segment along a line | **ruler postulate:** $AB = \lvert a - b\rvert$ from coordinates $a$, $b$ |

Classification: acute $0^\circ < m < 90^\circ$, right $m = 90^\circ$, obtuse
$90^\circ < m < 180^\circ$, straight $m = 180^\circ$.

Label one angle at a crossing and all four are pinned: its vertical twin matches,
its two neighbors are $180^\circ$ minus it.

*From* [1.1](lessons/01-01-points-lines-planes-angles.md) *and* [1.2](lessons/01-02-deductive-proof-two-column.md)

### Reasons you are allowed to cite

| Kind | Example |
|---|---|
| definition | "definition of congruent angles," "definition of a linear pair" |
| postulate | angle addition, linear pair, parallel postulate |
| algebraic property | addition / subtraction / multiplication / division property of equality, substitution, combine like terms |
| reflexive property | $AM = AM$ — a shared side or diagonal, the "free" third part |
| prior theorem | vertical angles congruent, CPCTC, base-angle theorem, … |

Two named theorems worth reusing: **vertical angles are congruent**, and the
**congruent supplements theorem** (two angles supplementary to the same angle are
congruent — vertical angles are its special case).

*From* [1.2](lessons/01-02-deductive-proof-two-column.md)

### Angle pairs made by a transversal

Numbering 1–4 at the first crossing and 5–8 at the second, in matching positions:

| Pair | Where they sit | If the lines are parallel |
|---|---|---|
| corresponding (1 and 5, 2 and 6, …) | same position at each crossing | **equal** |
| alternate interior (3 and 6, 4 and 5) | between the lines, opposite sides of the transversal | **equal** |
| alternate exterior (1 and 8, 2 and 7) | outside the lines, opposite sides | **equal** |
| co-interior / same-side interior (3 and 5, 4 and 6) | between the lines, **same** side | **supplementary** |

Each is an **if and only if**: exhibit any one of these conditions and the lines
*must* be parallel (the converse — how you prove parallelism without extending
lines to the horizon). On parallel lines only two distinct measures appear among
the eight angles, and they are supplementary.

*From* [1.3](lessons/01-03-parallel-lines-angles.md)

### Triangle congruence criteria

| Criterion | What matches | Note |
|---|---|---|
| **SSS** | three pairs of sides | a triangle can't flex |
| **SAS** | two sides and the angle **between** them | "included" is the whole point |
| **ASA** | two angles and the side **between** them | |
| **AAS** | two angles and a non-included side | fine: two angles fix the third |
| **HL** | hypotenuse and one leg, **right triangles only** | the one safe SSA-shaped case |
| ~~SSA~~ | two sides, non-included angle | **invalid** — the ambiguous case, two triangles fit |
| ~~AAA~~ | three angles | **invalid** for congruence — that's *similarity* |

Write the correspondence in the letter order: $\triangle ABC \cong \triangle DEF$
claims $A\leftrightarrow D$, $B\leftrightarrow E$, $C\leftrightarrow F$. Then
**CPCTC** harvests every remaining part.

**Isosceles package.** If $AB = AC$, the altitude from the apex $A$ to base $BC$
is simultaneously the altitude, the median (it bisects $BC$), the perpendicular
bisector of $BC$, and the bisector of $\angle BAC$. One segment, four jobs.

*From* [2.1](lessons/02-01-triangle-congruence-isosceles.md)

### Triangle similarity criteria and their payoffs

| Criterion | What matches |
|---|---|
| **AA** | two pairs of equal angles (the third follows) — the one you'll use most |
| **SAS**$\sim$ | one equal angle, with the two sides around it in proportion |
| **SSS**$\sim$ | all three pairs of sides in proportion |

**Side-splitter theorem.** A line **parallel** to one side of a triangle cuts the
other two sides proportionally: if $DE \parallel BC$ with $D$ on $AB$, $E$ on $AC$,

$$\frac{AD}{DB} = \frac{AE}{EC}.$$

**Altitude on the hypotenuse.** In a right triangle with the right angle at $C$,
the altitude $CH = h$ to hypotenuse $AB = c$ splits it into $p = AH$ and $q = HB$,
and creates two triangles similar to the original and to each other:

$$h = \sqrt{pq}, \qquad b = CA = \sqrt{cp}, \qquad a = CB = \sqrt{cq}.$$

*From* [2.2](lessons/02-02-similarity-proportional-reasoning.md)

### Right triangles

$$\textbf{Pythagoras: } a^2 + b^2 = c^2 \qquad (c \text{ the hypotenuse})$$

**Converse — a triangle classifier.** Label the **longest** side $c$, then compare:

| Test | Verdict |
|---|---|
| $a^2 + b^2 = c^2$ | right |
| $a^2 + b^2 > c^2$ | acute |
| $a^2 + b^2 < c^2$ | obtuse |

**Triples worth recognizing** (and every multiple of them):
$3\text{–}4\text{–}5$, $5\text{–}12\text{–}13$, $8\text{–}15\text{–}17$,
$7\text{–}24\text{–}25$, $9\text{–}40\text{–}41$, $20\text{–}21\text{–}29$.

**Special right triangles** — used in passing (Lesson 2.1 P3) but tabulated only
here; both fall straight out of Pythagoras plus symmetry:

| Angles | Sides |
|---|---|
| $45^\circ$–$45^\circ$–$90^\circ$ | $1 : 1 : \sqrt2$ — legs equal, hypotenuse $\sqrt2$ times a leg |
| $30^\circ$–$60^\circ$–$90^\circ$ | $1 : \sqrt3 : 2$ — the leg **opposite the $30^\circ$** is half the hypotenuse |

**Stacking into 3D.** A box $a \times b \times c$ has space diagonal
$D = \sqrt{a^2+b^2+c^2}$: Pythagoras across the base, then up.

*From* [2.3](lessons/02-03-pythagorean-theorem.md), [2.1](lessons/02-01-triangle-congruence-isosceles.md)

### Angle sums

$$\text{triangle: } 180^\circ \qquad \text{convex } n\text{-gon: } S = (n-2)\cdot 180^\circ \qquad \text{exterior angles: } 360^\circ$$

The triangle's $180^\circ$ is used throughout the course but proved nowhere in it:
draw a line through one vertex parallel to the opposite side, and the two
alternate-interior angles plus the vertex angle lie along a straight line
(Lesson 1.3's machinery). Everything else counts triangles — an $n$-gon cuts into
$n-2$ of them from one vertex.

The **exterior** sum is $360^\circ$ for *any* convex polygon, with no $n$ in it:
walk the perimeter and you turn through one full revolution.

For a **regular** $n$-gon:

$$\text{each interior} = \frac{(n-2)\cdot 180^\circ}{n}, \qquad \text{each exterior} = \frac{360^\circ}{n}, \qquad \text{interior} + \text{exterior} = 180^\circ.$$

A regular polygon tiles the plane alone only if its interior angle divides
$360^\circ$ — true for the triangle, square, and hexagon, and nothing else.

*From* [3.1](lessons/03-01-quadrilaterals-polygons.md) *and* [1.3](lessons/01-03-parallel-lines-angles.md)

### The quadrilateral family

Each row adds a constraint to the one it descends from; the diagonals are the
fastest tell.

| Figure | Defining property | Diagonals |
|---|---|---|
| Parallelogram | both pairs of opposite sides parallel | bisect each other |
| Rectangle | parallelogram + one right angle (hence four) | bisect each other **and are equal** |
| Rhombus | parallelogram + two adjacent sides equal (hence four) | bisect each other, **perpendicular**, bisect the angles |
| Square | rectangle **and** rhombus | equal, perpendicular, bisect each other |
| Trapezoid | exactly one pair of parallel sides (the bases) | isosceles trapezoid: legs equal, diagonals equal |
| Kite | two pairs of **adjacent** sides equal | perpendicular; one bisects the other |

Free consequences of "parallelogram": opposite sides equal, opposite angles equal,
consecutive angles supplementary (they are co-interior angles on parallel sides).
The classification is **inclusive** — a square is a rectangle and a rhombus.

*From* [3.1](lessons/03-01-quadrilaterals-polygons.md)

### Circle relationships

| Configuration | Relationship |
|---|---|
| central angle | $\angle AOB = \text{arc } AB$ (full size) |
| inscribed angle (vertex on the rim) | $= \tfrac12\,\text{arc}$; all inscribed angles on one arc are equal |
| angle in a semicircle (**Thales**) | $= 90^\circ$ |
| tangent–chord angle | $= \tfrac12\,\text{intercepted arc}$ (equals the inscribed angle in the alternate segment) |
| tangent at $T$ | $\perp$ the radius $OT$ |
| radius $\perp$ chord | bisects the chord; the chord's perpendicular bisector passes through $O$ |
| equal chords | cut equal arcs, and conversely |
| cyclic quadrilateral | opposite angles **supplementary** |
| whole circle | arcs total $360^\circ$; minor + major $= 360^\circ$ |

Chord distance is a Pythagorean move: half-chord, distance from center, and radius
form a right triangle.

*From* [3.2](lessons/03-02-circles-chords-tangents-arcs-inscribed-angles.md)

### Perimeter and area

$$C = 2\pi r = \pi d \qquad (\pi = C/d \approx 3.1416)$$

| Figure | Area |
|---|---|
| rectangle | $bh$ |
| parallelogram | $bh$ ($h$ **perpendicular** to the base, not the slanted side) |
| triangle | $\tfrac12 bh$ — half a parallelogram |
| trapezoid | $\tfrac12(b_1+b_2)h$ — average of the parallel sides, times height |
| circle | $\pi r^2$ |
| arc of measure $\theta^\circ$ | length $= \dfrac{\theta}{360}\cdot 2\pi r$ |
| sector of angle $\theta^\circ$ | area $= \dfrac{\theta}{360}\cdot \pi r^2$ |

The last two rows convert Lesson 3.2's arc *measure* into physical length and
area; the course uses the "fraction of the whole circle" idea without tabulating
them.

**Composite regions:** cut into pieces you know, then add — or subtract a piece
that was removed. The answer never depends on how you cut.

*From* [4.1](lessons/04-01-perimeter-area-surface-area-volume.md) *and* [3.2](lessons/03-02-circles-chords-tangents-arcs-inscribed-angles.md)

### Surface area and volume

With $B$ = base area, $h$ = perpendicular height, $\ell$ = slant height:

| Solid | Volume | Surface area |
|---|---|---|
| prism / cylinder | $V = Bh$ | $S = 2B + (\text{base perimeter})\cdot h$ |
| cylinder, radius $r$ | $V = \pi r^2 h$ | $S = 2\pi r^2 + 2\pi r h$ |
| pyramid / cone | $V = \tfrac13 Bh$ | $S = B + \tfrac12(\text{base perimeter})\cdot \ell$ |
| cone, radius $r$ | $V = \tfrac13\pi r^2 h$ | $S = \pi r^2 + \pi r\ell$ |
| sphere, radius $r$ | $V = \tfrac43\pi r^3$ | $S = 4\pi r^2$ |
| hemisphere | half the sphere's volume | curved part $= 2\pi r^2$ (plus the flat disk if exposed) |

A pyramid or cone holds exactly **one third** of the prism or cylinder on the same
base and height. For a cone, $\ell^2 = r^2 + h^2$; for a pyramid, the slant height,
the vertical height, and the distance from base center to edge-midpoint form the
right triangle.

**Scaling.** Multiply every linear dimension by $k$ and

$$\text{lengths} \times k, \qquad \text{areas} \times k^2, \qquad \text{volumes} \times k^3.$$

**Units are a free error check:** lengths plain, areas square, volumes cubic. An
"area" that came out in cubic units is a wrong answer you can reject on sight.

*From* [4.1](lessons/04-01-perimeter-area-surface-area-volume.md)

### Coordinate formulas

For $P = (x_1,y_1)$ and $Q = (x_2,y_2)$:

$$d(P,Q) = \sqrt{(x_2-x_1)^2 + (y_2-y_1)^2}, \qquad M = \left(\frac{x_1+x_2}{2},\ \frac{y_1+y_2}{2}\right), \qquad m = \frac{y_2-y_1}{x_2-x_1}$$

Distance is Pythagoras with the legs written as coordinate gaps; the midpoint is
just the average address.

$$\ell_1 \parallel \ell_2 \iff m_1 = m_2, \qquad \ell_1 \perp \ell_2 \iff m_1 m_2 = -1 \ \ (\text{negative reciprocal})$$

**Coordinate proof recipes** — what to compute to certify a claim:

| To prove | Compute |
|---|---|
| parallelogram | both pairs of opposite sides have equal slopes — *or* the diagonals share a midpoint |
| rectangle | parallelogram **and** one pair of adjacent slopes multiplying to $-1$ |
| rhombus | parallelogram **and** all four side lengths equal (equivalently, diagonals perpendicular) |
| square | rectangle **and** rhombus |
| right triangle | one pair of side slopes multiplying to $-1$ (or the Pythagorean check on the three lengths) |
| isosceles triangle | two side lengths equal — say nothing about angles until you check slopes |

*From* [4.2](lessons/04-02-coordinate-geometry.md)

### Transformation rules

Every rule below preserves length, angle, and area — that's what makes the image
congruent to the original.

| Motion | Rule on $(x,y)$ |
|---|---|
| translation by $(a,b)$ | $(x+a,\ y+b)$ |
| reflection over the $x$-axis | $(x,\ -y)$ |
| reflection over the $y$-axis | $(-x,\ y)$ |
| reflection over $y = x$ | $(y,\ x)$ — **swap** |
| reflection over $y = -x$ | $(-y,\ -x)$ |
| rotation $90^\circ$ counterclockwise about $O$ | $(-y,\ x)$ |
| rotation $180^\circ$ about $O$ | $(-x,\ -y)$ |
| rotation $270^\circ$ counterclockwise about $O$ | $(y,\ -x)$ |

**Orientation:** reflections reverse it (counterclockwise vertex order becomes
clockwise); translations and rotations preserve it. A glide reflection reverses it
too.

**Composition:** two rigid motions compose to another rigid motion, and it is
generally **not** commutative. Reflecting across two lines meeting at angle
$\theta$ gives a rotation about their intersection by $2\theta$. To rotate about a
point other than the origin: translate that point to the origin, rotate, translate
back.

**Symmetry counts** for reference: non-square rectangle — $2$ mirror lines,
rotational order $2$; equilateral triangle — $3$ and $3$; square — $4$ and $4$;
regular $n$-gon — $n$ and $n$; the letter S — $0$ mirror lines but rotational
order $2$. Mirror count and rotational order are **independent**.

*From* [4.3](lessons/04-03-rigid-transformations-symmetry.md)

## Assumed, not taught here

This is a Foundations course with no formal prereqs, but it leans on the arithmetic
and algebra courses constantly. Every angle-chase ends in an equation someone else
taught you to solve.

| Fact | Where it's taught |
|---|---|
| Solving a linear equation in one unknown (every "find $x$" angle problem) | [algebra-foundations 1.2](../algebra-foundations/lessons/01-02-linear-equations-and-inequalities.md) |
| Ratios, proportions, cross-multiplication (all of similarity) | [arithmetic-number-sense 2.3](../arithmetic-number-sense/lessons/02-03-ratios-proportions-percents.md) |
| Square roots, simplifying radicals like $3\sqrt{13}$ | [algebra-foundations 4.3](../algebra-foundations/lessons/04-03-radicals-and-rational-exponents.md) |
| Solving $x^2 = k$ by taking roots (every Pythagorean step) | [algebra-foundations 4.1](../algebra-foundations/lessons/04-01-quadratic-equations.md) |
| The coordinate plane, ordered pairs, slope and the equation of a line | [algebra-foundations 2.2](../algebra-foundations/lessons/02-02-slope-and-lines.md) |
| Sign / size / **units** sanity-checking on every numeric answer | [arithmetic-number-sense 3.2](../arithmetic-number-sense/lessons/03-02-mental-math-and-sanity-checking.md) |
| "If–then," converse, and why a converse needs its own proof | [proofs-primer 1.1](../proofs-primer/lessons/01-01-statements-connectives-implication.md) |
| Trig ratios — deliberately excluded here; the $30^\circ$ leg-half-hypotenuse fact in 2.1 is used raw | [trigonometry 1.1](../trigonometry/lessons/01-01-the-three-ratios.md) |
| Arc length in radians, $s = r\theta$ (this course stays in degrees) | [trigonometry 2.1](../trigonometry/lessons/02-01-radian-measure.md) |

## Pitfalls

### Naming and notation

- The **middle letter is the vertex**: $\angle AOB = \angle BOA$, but $\angle OAB$ is a different angle entirely. *([1.1](lessons/01-01-points-lines-planes-angles.md))*
- "Vertical" angles come from *vertex*, not up-and-down — they're the pair across the crossing, in any orientation. *([1.1](lessons/01-01-points-lines-planes-angles.md))*
- Complementary and supplementary compare **measures only**; the angles needn't touch. A *linear pair*, by contrast, really must be adjacent. *([1.1](lessons/01-01-points-lines-planes-angles.md))*
- Keep $=$ and $\cong$ apart: $=$ between measures, $\cong$ between figures. Converting one to the other by definition is the last line of most proofs — skip it and the proof "ends one line early." *([1.2](lessons/01-02-deductive-proof-two-column.md))*
- The letter order in $\triangle ABC \cong \triangle DEF$ (and in $\sim$) **is** the correspondence, not decoration. Line up the equal parts first, then write the names. *([2.1](lessons/02-01-triangle-congruence-isosceles.md), [2.2](lessons/02-02-similarity-proportional-reasoning.md))*

### Proof discipline

- A figure that *looks* right proves nothing — a point that looks like a midpoint isn't one until a reason forces it. *([1.2](lessons/01-02-deductive-proof-two-column.md))*
- "Obvious" is not a reason. Only definitions, postulates, algebraic properties, and **already-proved** theorems may appear in the right column. *([1.2](lessons/01-02-deductive-proof-two-column.md))*
- Every algebraic move gets its own line and its own named property — "so $x = 15$" is the division property of equality, cited. *([1.2](lessons/01-02-deductive-proof-two-column.md))*

### Parallel lines

- Co-interior (same-side interior) angles are **supplementary**, not equal — only corresponding and alternate pairs are equal. *([1.3](lessons/01-03-parallel-lines-angles.md))*
- The whole toolkit switches off if the lines aren't parallel. Non-parallel lines still make eight angles; none of them have to match. *([1.3](lessons/01-03-parallel-lines-angles.md))*
- Before concluding "parallel" from equal angles, name the pair — an equal pair of *unrelated* angles certifies nothing. *([1.3](lessons/01-03-parallel-lines-angles.md))*

### Triangles: congruence and similarity

- **SSA is not a criterion** — the non-included angle lets the triangle swing into a second shape. Only the right-angle case (**HL**) is safe. *([2.1](lessons/02-01-triangle-congruence-isosceles.md))*
- **AAA gives similarity, never congruence**: same shape, any size. You need one actual length before claiming same size. *([2.1](lessons/02-01-triangle-congruence-isosceles.md), [2.2](lessons/02-02-similarity-proportional-reasoning.md))*
- Similarity is **multiplicative**: equal side *ratios*, not equal differences. $3$–$4$–$5$ and $4$–$5$–$6$ are not similar. *([2.2](lessons/02-02-similarity-proportional-reasoning.md))*
- The side-splitter needs the cutting line **parallel** to the third side; parallelism is what manufactures the equal angles. *([2.2](lessons/02-02-similarity-proportional-reasoning.md))*
- The isosceles base-angle theorem doesn't care how the triangle sits on the page — the base is whichever side is opposite the apex. *([2.1](lessons/02-01-triangle-congruence-isosceles.md))*
- Isosceles does not imply right: equal sides say nothing about a right angle until you check slopes or the Pythagorean test. *([4.2](lessons/04-02-coordinate-geometry.md))*

### Pythagoras

- $c$ is **always** the side opposite the right angle. Given the hypotenuse you *subtract* ($b^2 = c^2 - a^2$); given two legs you add. Backwards gives a square root of a negative. *([2.3](lessons/02-03-pythagorean-theorem.md))*
- $\sqrt{a^2+b^2} \neq a + b$: $3 + 4 = 7$ but $\sqrt{3^2+4^2} = 5$. *([2.3](lessons/02-03-pythagorean-theorem.md))*
- The converse classifier only works once the **longest** side is identified as $c$ — otherwise the acute/obtuse verdict flips. *([2.3](lessons/02-03-pythagorean-theorem.md))*

### Polygons and circles

- Exterior angles always total $360^\circ$ — no $n$ anywhere. Only the *interior* sum grows with $n$. *([3.1](lessons/03-01-quadrilaterals-polygons.md))*
- Classification is inclusive: a square **is** a rectangle and **is** a rhombus, so every parallelogram property applies to it. *([3.1](lessons/03-01-quadrilaterals-polygons.md))*
- Diagonals only classify once you know they **bisect each other** (i.e. it's a parallelogram): a kite has perpendicular diagonals without being a rhombus, an isosceles trapezoid equal ones without being a rectangle. *([3.1](lessons/03-01-quadrilaterals-polygons.md))*
- An inscribed angle is **half** its arc; only the angle at the center reads the arc directly. *([3.2](lessons/03-02-circles-chords-tangents-arcs-inscribed-angles.md))*
- It's the radius **through the center** meeting a chord perpendicularly that bisects it — a random perpendicular missing $O$ guarantees nothing. *([3.2](lessons/03-02-circles-chords-tangents-arcs-inscribed-angles.md))*
- Opposite angles of a **cyclic** quadrilateral are supplementary; of a **parallelogram**, equal. Different figure, different rule. *([3.2](lessons/03-02-circles-chords-tangents-arcs-inscribed-angles.md), [3.1](lessons/03-01-quadrilaterals-polygons.md))*

### Measurement

- $h$ means the **perpendicular** height, never the slanted edge — the most common area error there is. *([4.1](lessons/04-01-perimeter-area-surface-area-volume.md))*
- Volume wants the vertical height $h$; lateral surface wants the slant height $\ell$. Draw the $r$–$h$–$\ell$ right triangle every time. *([4.1](lessons/04-01-perimeter-area-surface-area-volume.md))*
- Doubling every dimension doesn't double everything: area goes up $4\times$, volume $8\times$. *([4.1](lessons/04-01-perimeter-area-surface-area-volume.md))*
- In a composite solid, count only the **exposed** skin — the hidden disk between a cylinder and its dome is not surface. *([4.1](lessons/04-01-perimeter-area-surface-area-volume.md))*

### Coordinates and transformations

- Perpendicular means **negative reciprocal**, not just opposite sign: slope $2$ pairs with $-\tfrac12$, not $-2$. Check that the product is exactly $-1$. *([4.2](lessons/04-02-coordinate-geometry.md))*
- A **vertical** line has *undefined* slope; a **horizontal** line has slope $0$. Swapping these flips every parallel/perpendicular conclusion. *([4.2](lessons/04-02-coordinate-geometry.md))*
- Keep the same point first in both parts of the slope fraction, or the sign silently flips. *([4.2](lessons/04-02-coordinate-geometry.md))*
- Reflecting over $y = x$ **swaps** coordinates; *negating* both is the $180^\circ$ rotation. Different moves. *([4.3](lessons/04-03-rigid-transformations-symmetry.md))*
- The tidy rotation rules hold only about the **origin**, and composition is not commutative — reflect-then-rotate is not rotate-then-reflect. *([4.3](lessons/04-03-rigid-transformations-symmetry.md))*
- Mirror lines and rotational order are counted separately: a pinwheel can have order-$4$ rotation and no mirror at all. *([4.3](lessons/04-03-rigid-transformations-symmetry.md))*
