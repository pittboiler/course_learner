# Euclidean Geometry — Syllabus

> Foundations · Tier F · ~11 lessons · Prereqs: none · Roadmap id: `geometry`

## Goal

Rebuild plane and solid geometry the way Euclid meant it — as a chain of reasoning, not a bag of formulas. You'll learn to *see* a figure, state precisely what's given, and argue your way to what must follow, with the two-column proof as your first taste of rigor. Every lesson leans on hand-drawn SVG diagrams, because geometry is a visual subject and a picture usually carries the argument. Deliberately skipped: trigonometric ratios (that's `trigonometry`, which this course feeds directly), non-Euclidean geometry, and the formal axiomatic reconstruction of the plane — we use the classical postulates as working tools, not objects of study.

## Dangerous Checklist

When you finish, you can:

- [ ] Name and measure angle pairs — complementary, supplementary, vertical, linear — and solve for unknowns in a figure
- [ ] Write a clean two-column proof: given → statements → reasons → conclusion, every step justified by a postulate, definition, or prior theorem
- [ ] Use the parallel-line angle relationships (corresponding, alternate, co-interior) both to compute and to *prove* lines parallel
- [ ] Pick the right triangle-congruence criterion (SSS, SAS, ASA, AAS, HL) and prove two triangles congruent
- [ ] Exploit isosceles-triangle symmetry — base angles equal, the altitude that bisects — inside a larger argument
- [ ] Set up a similarity, justify it by AA, and solve the resulting proportion for a missing length
- [ ] State and apply the Pythagorean theorem and its converse to find sides and classify triangles
- [ ] Compute interior/exterior angle sums of any polygon and use the defining properties of parallelograms, rectangles, rhombi, and trapezoids
- [ ] Work circle relationships: inscribed vs. central angles, arcs, chords, tangents, and cyclic quadrilaterals
- [ ] Find perimeter, area, surface area, and volume for the standard plane figures and solids
- [ ] Use coordinates to get distance, midpoint, and slope, and thereby prove a figure is (say) a right triangle or a parallelogram
- [ ] Carry out translations, rotations, and reflections, recognize them as congruence-preserving motions, and identify a figure's symmetries

## Modules

### Module 1: Foundations & the art of proof

The undefined starting objects, the postulates that govern them, and the deductive habit that turns a picture into an argument.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Points, lines, planes & angles | Name the primitive objects and the basic postulates, and measure and combine angles | point/line/plane, segment & ray, angle measure, complementary/supplementary, linear pair, vertical angles, ruler & protractor postulates |
| 1.2 | Deductive proof & two-column reasoning | Turn a given diagram into a justified chain of statements — your first rigorous proof | definition vs. postulate vs. theorem, hypothesis/conclusion, two-column format, algebraic & angle-addition justifications, proving vertical angles congruent |
| 1.3 | Parallel lines & angle relationships | Compute and prove using the angle pairs a transversal creates | transversal, corresponding / alternate interior / co-interior angles, parallel postulate, converse (proving lines parallel) |

**Boss problem 1:** Two parallel lines are cut by a transversal; one pair of same-side interior angles measure $3x+20$ and $5x-40$. Solve for $x$, then label all eight angles at the two intersections. Finally, write a two-column proof that same-side interior angles are supplementary, citing the corresponding-angles postulate and the linear-pair relationship at each step. *(This proof habit is the same one you'll formalize in `proofs-primer`.)*

### Module 2: Triangles

The three-sided figure that carries most of geometry: when two are the same, when they're merely scaled copies, and the right-triangle identity everything downstream rests on.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Triangle congruence & isosceles triangles | Prove two triangles congruent by the right criterion and use isosceles symmetry | SSS, SAS, ASA, AAS, HL; CPCTC; isosceles base-angle theorem & its converse; the altitude that bisects the base |
| 2.2 | Similarity & proportional reasoning | Recognize scaled triangles, justify by AA, and solve for missing lengths | similar figures, AA / SAS / SSS similarity, scale factor, proportions, side-splitter theorem, geometric mean in a right triangle |
| 2.3 | The Pythagorean theorem | Relate the sides of a right triangle, prove the theorem, and use its converse to classify | Pythagorean theorem, a proof by similarity/rearrangement, converse (acute/right/obtuse test), common triples, distance foreshadowing |

**Boss problem 2:** Isosceles triangle $ABC$ has $AB=AC=13$ and base $BC=10$; let $M$ be the foot of the altitude from $A$. (a) Prove $\triangle ABM\cong\triangle ACM$ and name the criterion, concluding $M$ is the midpoint of $BC$. (b) Use the Pythagorean theorem to find $AM$. (c) Drop a perpendicular from $M$ to $AB$, meeting it at $H$; prove $\triangle AHM\sim\triangle AMB$ and use the similarity to find $MH$. *(Right triangles and similarity here are exactly what `trigonometry` promotes into sine and cosine.)*

### Module 3: Polygons & circles

From triangles up to any-sided figures, then to the circle — the one curve, with its own vocabulary of arcs, chords, and angles.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Quadrilaterals & polygons | Use the defining properties of the special quadrilaterals and any polygon's angle sums | parallelogram/rectangle/rhombus/square/trapezoid properties, diagonals, interior angle sum $(n-2)180°$, exterior angle sum $360°$, regular polygons |
| 3.2 | Circles: chords, tangents, arcs & inscribed angles | Relate a circle's angles, arcs, and lines, and work cyclic quadrilaterals | central vs. inscribed angle (half the arc), arcs, chord & tangent properties, tangent ⟂ radius, tangent-chord angle, cyclic quadrilateral (opposite angles supplementary) |

**Boss problem 3:** Quadrilateral $ABCD$ is inscribed in a circle with $\angle A=3x$ and $\angle C=2x$. (a) Prove that opposite angles of a cyclic quadrilateral are supplementary using the inscribed-angle theorem, then solve for all four angles given additionally that $\angle B$ exceeds $\angle D$ by $40°$. (b) A tangent to the circle at $A$ makes a $70°$ angle with chord $AB$; find the inscribed angle $\angle ACB$ that subtends $AB$, and justify it with the tangent-chord relationship.

### Module 4: Measurement, coordinates & transformations

Attach numbers to figures three ways — direct measurement, the coordinate plane, and rigid motion — and watch the same object survive all three.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Perimeter, area, surface area & volume | Compute size for the standard plane figures and solids | area of triangles/parallelograms/trapezoids/circles, composite regions, prisms/cylinders/pyramids/cones/spheres, surface area vs. volume, units |
| 4.2 | Coordinate geometry | Use distance, midpoint, and slope to prove geometric claims on the plane | distance formula, midpoint formula, slope, parallel & perpendicular slope tests, proving a figure's type from coordinates |
| 4.3 | Rigid transformations & symmetry | Perform translations, rotations, and reflections and read a figure's symmetry | translation/rotation/reflection as isometries, composition, congruence via rigid motion, line & rotational symmetry, glide reflection |

**Boss problem 4:** Triangle $ABC$ has vertices $A(1,2)$, $B(5,2)$, $C(1,5)$. (a) Use slopes to prove there is a right angle, and use the distance formula to find all three side lengths and the perimeter. (b) Compute the area. (c) Reflect the triangle over the line $y=x$, list the images $A',B',C'$, and explain why the area and side lengths are unchanged — naming the property of rigid motions that guarantees it.

## Sources of truth

- Euclid, *Elements*, Books I & III (the source of the deductive structure and the classical theorems)
- Kiselev, *Geometry, Book I: Planimetry* (the modern reference standard for a rigorous school-geometry treatment)
- Jacobs, *Geometry: Seeing, Doing, Understanding* (diagram-first pedagogy and problem style)
