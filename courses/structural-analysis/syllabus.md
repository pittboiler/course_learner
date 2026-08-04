# Structural Analysis — Syllabus

> Engineering · Tier 1 · ~18 lessons · Prereqs: [mechanics-of-materials](../mechanics-of-materials/syllabus.md) · Roadmap id: `structural-analysis`

## Goal

Take a real structure — a beam, a frame, a roof truss — reduce it to an idealized model with loads and supports, and find every reaction and internal force in it. You'll master shear and bending-moment diagrams cold, compute deflections by three independent methods, and crack open statically indeterminate structures with the force method, slope-deflection, and moment distribution. We finish with influence lines for moving loads and a first taste of the matrix stiffness method — the bridge to how real software works. We deliberately skip structural dynamics, earthquake engineering, and hands-on finite-element software; this is the by-hand analysis that makes the software make sense.

## Dangerous Checklist

When you finish, you can:

- [ ] Idealize a physical structure into a line model with the right supports, releases, and load cases
- [ ] Classify any planar structure as stable/unstable and statically determinate/indeterminate, and count its degree of indeterminacy
- [ ] Compute all reactions on a determinate beam, frame, or truss from equilibrium
- [ ] Draw complete, correct shear and bending-moment diagrams and locate the maximum moment
- [ ] Solve truss member forces by the method of joints and the method of sections, and internal forces in determinate frames
- [ ] Compute beam and frame deflections by double integration and by the moment-area theorems
- [ ] Compute deflections of beams, frames, and trusses by the unit-load (virtual-work) method
- [ ] Analyze a statically indeterminate structure by the force (flexibility) method, including support settlement and temperature effects
- [ ] Analyze continuous beams and frames by slope-deflection and by moment distribution
- [ ] Construct and use influence lines to position moving loads for maximum effect
- [ ] Assemble a member stiffness matrix and solve a small structure by the matrix stiffness method

## Modules

### Module 1: Determinate Structures & Internal Forces

Turn a physical structure into a solvable model, then extract every reaction and internal force — the diagrams you'll live inside for the rest of the course.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Structural Forms, Loads & Idealization | Reduce a real structure to a line diagram with modeled loads | structural systems, load paths, dead/live/environmental loads, tributary areas, idealization |
| 1.2 | Supports, Reactions & Static Determinacy | Classify a structure and find its reactions from equilibrium | support types, free-body diagrams, equilibrium equations, determinacy & stability criteria |
| 1.3 | Internal Forces in Beams: Shear & Bending Moment | Find $N$, $V$, $M$ at any section and fix a sign convention | method of sections, axial/shear/moment, sagging-positive convention |
| 1.4 | Shear & Bending-Moment Diagrams | Draw full $V$ and $M$ diagrams and locate the maximum moment | load–shear–moment relations $\frac{dV}{dx}=-w$, $\frac{dM}{dx}=V$, areas, points of zero shear |
| 1.5 | Trusses & Determinate Frames | Solve member forces and frame internal forces by hand | method of joints, method of sections, zero-force members, frame FBDs |

**Boss problem 1:** An overhanging beam is pinned at $A$ ($x=0$), roller-supported at $B$ ($x=6\text{ m}$), and extends to a free end $C$ ($x=8\text{ m}$). It carries a uniform load $w=10\text{ kN/m}$ over $AB$ and a downward point load $P=20\text{ kN}$ at $C$. Find both reactions, draw the complete shear and bending-moment diagrams, locate and evaluate the maximum positive moment, and give the moment at $B$. (Answers to check against: $R_A=23.33\text{ kN}$, $R_B=56.67\text{ kN}$, $M_{max}^{+}=27.2\text{ kN·m}$ at $x=2.33\text{ m}$, $M_B=-40\text{ kN·m}$.)

### Module 2: Deflections & Energy Methods

How much does it move? Three lenses on the same question — geometry of the elastic curve, then the energy methods that generalize to anything.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The Elastic Curve & Double Integration | Get slope and deflection by integrating the moment | $EI\,y''=M(x)$, boundary/continuity conditions, elastic curve sketching |
| 2.2 | The Moment-Area Theorems | Read deflections off the $M/EI$ diagram geometrically | first & second moment-area theorems, tangential deviation, $M/EI$ areas |
| 2.3 | Strain Energy & the Principle of Virtual Work | Set up virtual work as the master deflection tool | strain energy, external/internal virtual work, unit-load principle |
| 2.4 | Unit-Load Method for Beams & Frames | Compute a deflection or rotation via $\int \frac{mM}{EI}\,dx$ | virtual moment $m$, real moment $M$, deflection & rotation integrals |
| 2.5 | Truss Deflections & Castigliano's Theorem | Get truss joint displacements and cross-check by Castigliano | $\sum \frac{nNL}{AE}$, Castigliano's second theorem, dummy-load trick |

**Boss problem 2:** A cantilever of length $L$ (fixed at $A$, free at $B$, constant $EI$) carries a uniform load $w$ over its whole span plus a downward tip load $P$ at $B$. (a) Find the tip deflection by the unit-load method. (b) Confirm the uniform-load part by the moment-area theorems. (Answer to check against: $\delta_B=\dfrac{wL^4}{8EI}+\dfrac{PL^3}{3EI}$, downward.)

### Module 3: Statically Indeterminate Structures

Redundant supports mean equilibrium alone won't close the problem — you need compatibility. Three classic hand methods, each the ancestor of a piece of modern software.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Indeterminacy, Redundancy & Compatibility | Choose redundants and write compatibility equations | degree of indeterminacy, primary structure, redundant forces, compatibility |
| 3.2 | The Force (Flexibility) Method for Beams | Solve indeterminate beams via flexibility coefficients | released structure, flexibility coefficients $f_{ij}$, superposition |
| 3.3 | Force Method for Frames, Trusses & Support Effects | Extend flexibility to frames/trusses with settlement and temperature | multiple redundants, support settlement, temperature/misfit terms |
| 3.4 | The Slope-Deflection Method | Write member end-moment equations and solve the joint rotations | slope-deflection equations, fixed-end moments, chord rotation, joint equilibrium |
| 3.5 | The Moment Distribution Method | Balance moments iteratively without solving equations | stiffness & distribution factors, carry-over, locking/unlocking joints |

**Boss problem 3:** A propped cantilever (fixed at $A$, roller at $B$, span $L$, constant $EI$) carries a uniform load $w$. (a) Solve for the roller reaction $R_B$ and the fixed-end moment $M_A$ by the force method, taking $R_B$ as redundant. (b) Confirm $M_A$ by slope-deflection. (Answers to check against: $R_B=\tfrac{3}{8}wL$, $M_A=\tfrac{1}{8}wL^2$ hogging.)

### Module 4: Influence Lines & the Matrix Stiffness Method

Loads that move, and the matrix machinery that turns everything above into linear algebra a computer can run.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Influence Lines for Determinate Structures | Build influence lines and position moving loads for maximum effect | influence line vs. shear/moment diagram, moving loads, envelope of maxima |
| 4.2 | Influence Lines for Indeterminate Structures | Use Müller-Breslau to sketch and quantify influence lines | Müller-Breslau principle, qualitative shapes, live-load placement |
| 4.3 | Introduction to the Matrix Stiffness Method | Assemble stiffness matrices and solve for nodal displacements | element stiffness matrix, global assembly, $\mathbf{K}\mathbf{d}=\mathbf{F}$, boundary conditions |

**Boss problem 4:** A two-span continuous beam $ABC$ has equal spans $L$, constant $EI$, and carries a moving load. (a) Using the Müller-Breslau principle, sketch the influence line for the bending moment at the central support $B$, and state where a uniform live load should be placed to maximize the hogging moment there. (b) Model a single span as one beam element and write its $4\times4$ element stiffness matrix in terms of $EI$ and $L$. (Check: live load over *both* spans maximizes hogging at $B$; the element matrix has diagonal terms $\tfrac{12EI}{L^3}$ and $\tfrac{4EI}{L}$ in the standard ordering.)

## Sources of truth

- **Hibbeler, *Structural Analysis*** — primary reference for sign conventions (sagging-positive moment), diagram style, and worked-problem rigor level.
- **Kassimali, *Structural Analysis*** — force method, slope-deflection, and matrix-stiffness notation.
- **McGuire, Gallagher & Ziemian, *Matrix Structural Analysis*** — the stiffness-method conventions in Module 4.
