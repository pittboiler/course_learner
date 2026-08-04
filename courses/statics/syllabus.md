# Statics — Syllabus

> Engineering · Tier 0 · ~15 lessons · Prereqs: [calc-refresher](../calc-refresher/syllabus.md) · Roadmap id: `statics`

## Goal

Statics is the art of things not moving. You'll learn to take any structure at rest — a bracket, a bridge truss, a clamped beam — draw the forces acting on it, and solve for every unknown reaction and internal force using nothing but "sum of forces = 0" and "sum of moments = 0." The whole subject is downstream of one idea: if it isn't accelerating, the vectors cancel. We deliberately skip motion and acceleration (that's `engineering-dynamics`) and how materials stretch or fail under the loads you find (that's `mechanics-of-materials`); here every body is perfectly rigid and everything stays put.

## Dangerous Checklist

When you finish, you can:

- [ ] Draw a correct free-body diagram for a particle or rigid body, including all reactions from common supports (pin, roller, fixed).
- [ ] Resolve forces into components and add them as vectors in both 2D and 3D.
- [ ] Compute the moment of a force about a point or axis two ways — lever-arm and cross-product — and say which is faster.
- [ ] Solve a particle-equilibrium problem (concurrent forces) for unknown tensions and angles.
- [ ] Solve a rigid-body equilibrium problem for support reactions using $\sum F = 0$ and $\sum M = 0$.
- [ ] Find every member force in a truss by the method of joints, and shortcut to one member by the method of sections.
- [ ] Analyze a frame or machine with multi-force members by dismembering it into free bodies.
- [ ] Replace a distributed load with its equivalent resultant and locate where it acts.
- [ ] Locate the centroid of a composite area and use it to place distributed-force resultants.
- [ ] Model dry friction to decide whether a body slips or tips, and size a wedge or belt.
- [ ] Compute the second moment of area of a composite section using the parallel-axis theorem.
- [ ] Build shear-force and bending-moment diagrams for a loaded beam and read off the critical section.

## Modules

### Module 1: Forces, moments & equilibrium

Build the whole toolkit on one particle, then let bodies have size so moments start to matter — ending with full rigid-body equilibrium.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Forces as vectors & the free-body diagram | Isolate a body and draw every force acting on it | free-body diagram, force vector, components, unit vectors |
| 1.2 | Equilibrium of a particle | Solve concurrent-force problems for unknowns | $\sum F = 0$, 2D/3D components, cables & pulleys |
| 1.3 | Moment of a force | Quantify twist about a point, lever-arm and cross-product | moment, lever arm, $\vec r \times \vec F$, sign convention |
| 1.4 | Couples & equivalent systems | Slide and replace forces without changing the effect | couple moment, force-couple system, equivalent loading |
| 1.5 | Rigid-body equilibrium & supports | Find support reactions on an extended body | pin/roller/fixed reactions, $\sum F=0$ & $\sum M=0$, statical determinacy |

**Boss problem 1:** A uniform 40 kg sign hangs from a horizontal boom that is pinned to a wall at one end and held by a cable to a point on the wall above the pin. Draw the free-body diagram of the boom, then find the cable tension and both components of the pin reaction. (Combines FBDs, moments, and rigid-body equilibrium.)

### Module 2: Trusses, frames & machines

Apply equilibrium to assemblies of connected members — first the clean two-force world of trusses, then messier multi-force structures.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Trusses & the method of joints | Find all member forces joint by joint | two-force members, tension/compression, zero-force members |
| 2.2 | The method of sections | Get one specific member force in a single cut | cutting plane, moment shortcut, choosing the cut |
| 2.3 | Frames & machines | Analyze structures with multi-force members | dismembering, internal pin forces, Newton's third law at joints |

**Boss problem 2:** For a loaded pin-jointed truss (given geometry and a single applied load), identify all zero-force members by inspection, then use the method of sections to find the force in a named interior diagonal, stating tension or compression. (Combines joints-reasoning with a targeted section cut.)

### Module 3: Distributed forces, centroids & friction

Move from forces at points to forces spread over lines and areas, then add the one real-world effect that lets things resist sliding: friction.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Distributed loads & their resultants | Replace a load-per-length with one equivalent force | intensity $w(x)$, resultant = area under load, line of action |
| 3.2 | Centroids of areas | Locate the balance point of a shape or composite | centroid integral, composite method, symmetry |
| 3.3 | Dry (Coulomb) friction | Decide slip vs. no-slip and slip vs. tip | $F \le \mu_s N$, impending motion, tipping condition |
| 3.4 | Wedges & belt friction | Size self-locking wedges and belt/rope tensions | wedge equilibrium, self-locking, capstan equation $T_2 = T_1 e^{\mu\beta}$ |

**Boss problem 3:** A uniform crate rests on a rough incline. Given its weight, dimensions, and the coefficient of static friction, determine whether it slides or tips first as the incline angle increases, and find the critical angle. (Combines centroid location, distributed weight as a resultant, and the slip-vs-tip friction test.)

### Module 4: Internal forces & moments of inertia

Cut a member open to see what it carries inside, and compute the geometric property that governs how a section resists bending.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Internal forces: normal, shear & bending moment | Find the internal loads at any cut in a beam | internal N/V/M, sign convention, method of sections for beams |
| 4.2 | Shear & bending-moment diagrams | Plot V and M along a beam and find the critical section | load–shear–moment relations, $dV/dx=-w$, $dM/dx=V$ |
| 4.3 | Second moment of area & parallel-axis theorem | Compute $I$ for a composite cross-section | $I=\int y^2\,dA$, parallel-axis theorem, composite sections |

**Boss problem 4:** A simply supported beam carries a point load and a partial uniformly distributed load. Draw its complete shear and bending-moment diagrams, mark the location and value of the maximum bending moment, then compute the second moment of area of a given T-shaped cross-section about its centroidal axis. (Bridges internal-force analysis to the section property that `mechanics-of-materials` needs next.)

## Sources of truth

- Hibbeler, *Engineering Mechanics: Statics* — for sign conventions, support-reaction models, and the joints/sections truss workflow.
- Beer, Johnston & Mazurek, *Vector Mechanics for Engineers: Statics* — for the vector (cross-product) treatment of moments and 3D equilibrium.
- Meriam, Kraige & Bolton, *Engineering Mechanics: Statics* — for distributed loads, centroids, and friction problem style.
