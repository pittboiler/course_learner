# Mechanics of Materials — Syllabus

> Engineering · Tier 1 · ~18 lessons · Prereqs: [statics](../statics/syllabus.md) · Roadmap id: `mechanics-of-materials`

## Goal

Statics tells you the internal forces; mechanics of materials tells you whether the part survives them. This course turns internal loads into stresses, stresses into strains and deflections, and both into a go/no-go verdict against yield, fracture, or buckling. You will size axial members, torsion shafts, and beams; find how much a beam sags; transform a stress state to its worst-case axes with Mohr's circle; combine axial, torsional, and bending loads at a critical point; and check that point against the Tresca and von Mises yield criteria. Deliberately skipped: plasticity and fracture-mechanics depth, energy methods beyond a mention, and finite-element analysis (this course builds the intuition FEA automates).

## Dangerous Checklist

When you finish, you can:

- [ ] Compute normal and shear stress on a section and say what "the stress" physically means
- [ ] Read a stress–strain diagram for $E$, yield, ultimate, ductility, and toughness, and apply Hooke's law
- [ ] Size an axially loaded member for allowable stress and compute its elongation $\delta = PL/AE$
- [ ] Solve a statically indeterminate axial or torsion problem using a compatibility equation
- [ ] Estimate thermal stress in a constrained member and apply Poisson's ratio and $G = E/2(1+\nu)$
- [ ] Compute the shear stress and angle of twist in a circular shaft, and size a power-transmission shaft
- [ ] Draw shear-force and bending-moment diagrams and read the maximum $V$ and $M$
- [ ] Apply the flexure formula $\sigma = -My/I$ and the transverse-shear formula $\tau = VQ/It$
- [ ] Find a beam's slope and deflection by integration and by superposition
- [ ] Transform a plane-stress state to principal stresses and max shear using Mohr's circle
- [ ] Combine axial, torsional, and bending stresses at a critical point into a single stress state
- [ ] Compute a column's Euler buckling load and check yielding via Tresca and von Mises

## Modules

### Module 1: Stress, strain, and axial loading

Build the two atoms of the whole subject — stress and strain — link them with Hooke's law and the tension test, then apply the pair to bars pulled along their axis.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Normal and shear stress | Turn an internal force into a stress and interpret it | $\sigma = P/A$, average shear $\tau = V/A$, bearing stress, sign convention |
| 1.2 | Strain and the tension test | Read a stress–strain curve and apply Hooke's law | normal strain, $\sigma = E\varepsilon$, yield/ultimate, ductility, toughness, factor of safety |
| 1.3 | Axial deformation | Compute elongation of bars and stepped/tapered members | $\delta = PL/AE$, summation and integral forms, stiffness $AE/L$ |
| 1.4 | Statically indeterminate axial members | Solve when equilibrium isn't enough | compatibility equation, redundant supports, force method |
| 1.5 | Thermal stress and Poisson's ratio | Handle temperature and lateral strain | $\delta_T = \alpha \, \Delta T\, L$, Poisson's ratio $\nu$, shear modulus, $G = E/2(1+\nu)$ |

**Boss problem 1:** A steel bolt inside a copper tube is tightened, then the assembly is heated. Using equilibrium (bolt tension = tube compression), a compatibility equation, and thermal strains, find the stress in each part before and after the temperature rise — and state which effect (preload or heating) dominates.

### Module 2: Torsion and bending

The two workhorse load cases beyond axial: twisting a circular shaft, and bending a beam. Each gets a stress formula tied to a cross-section geometric property ($J$, then $I$).

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Torsion of circular shafts | Find shear stress and twist in a shaft | torsion formula $\tau = Tr/J$, polar moment $J$, angle of twist $\phi = TL/GJ$ |
| 2.2 | Power transmission and indeterminate shafts | Size a shaft carrying power; solve fixed–fixed shafts | $P = T\omega$, allowable-stress design, torsional compatibility |
| 2.3 | Shear and moment diagrams | Track internal $V$ and $M$ along a beam | sign conventions, $dV/dx = -w$, $dM/dx = V$, locating max moment |
| 2.4 | The flexure formula | Compute bending stress across a beam section | $\sigma = -My/I$, second moment of area $I$, section modulus $S$, neutral axis |
| 2.5 | Transverse shear stress | Find the shear stress bending induces in a beam | shear formula $\tau = VQ/It$, first moment $Q$, shear flow, built-up sections |

**Boss problem 2:** A simply supported wide-flange beam carries a central point load. Draw its $V$ and $M$ diagrams, then locate the point in the cross-section where the *combination* of bending stress and transverse shear stress is most severe — showing why the extreme fiber and the neutral axis are governed by different failure concerns.

### Module 3: Beam deflection

Bending gave you stress; now get displacement. Integrate the moment twice, or add up tabulated cases — and use the extra deflection equations to crack statically indeterminate beams.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Deflection by integration | Solve the elastic curve from the moment | $EI\,v'' = M(x)$, boundary/continuity conditions, slope and deflection |
| 3.2 | Deflection by superposition | Combine standard cases instead of integrating | superposition, deflection tables, sign bookkeeping |
| 3.3 | Statically indeterminate beams | Use deflection as the compatibility condition | redundant reactions, force method, propped cantilever |

**Boss problem 3:** A propped cantilever (fixed at one end, simply supported at the other) carries a uniform load. Choose the prop reaction as the redundant, use a superposition of two tabulated cantilever deflections to write the compatibility equation, solve for all reactions, and find the maximum deflection.

### Module 4: Stress transformation, combined loading, and stability

The capstone: the stress at a point depends on the axes you pick, so find the worst axes (Mohr's circle), stack multiple load types at one point, then check two failure modes the earlier formulas can't see — buckling and yield.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Plane stress transformation | Rotate a stress state and find principal stresses | transformation equations, principal stresses, max in-plane shear |
| 4.2 | Mohr's circle | Read the whole transformation off one diagram | Mohr's circle construction, principal planes, max shear, orientation |
| 4.3 | Combined loadings | Superpose axial, torsion, and bending at a point | superposition of stresses, critical point selection, pressure-vessel stresses |
| 4.4 | Column buckling | Predict elastic instability of a slender column | Euler load $P_{cr} = \pi^2 EI/(KL)^2$, effective length, slenderness ratio |
| 4.5 | Yield and failure criteria | Convert a stress state into a safety verdict | Tresca (max shear), von Mises (distortion energy), equivalent stress |

**Boss problem 4:** A solid circular shaft carries a combined bending moment and torque (as a real drive shaft does). Find the state of plane stress at the critical surface point, use Mohr's circle to get the principal stresses and maximum shear, then compare the factors of safety predicted by the Tresca and von Mises criteria — and explain why they disagree.

## Sources of truth

- Hibbeler, *Mechanics of Materials* — the default for notation, sign conventions, and the flexure/shear/torsion formulas.
- Gere & Goodno, *Mechanics of Materials* — for the tension test, thermal effects, and beam-deflection derivations.
- Beer, Johnston, DeWolf & Mazurek, *Mechanics of Materials* — for stress transformation, Mohr's circle, and the combined-loading worked style.
