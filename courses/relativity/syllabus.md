# Relativity (SR + GR) — Syllabus

> Tier 2 · 37 lessons · Prereqs: [`mechanics-refresher`](../mechanics-refresher/syllabus.md), [`em-refresher`](../em-refresher/syllabus.md), [`analytical-mechanics`](../analytical-mechanics/syllabus.md), [`linalg-refresher`](../linalg-refresher/syllabus.md), [`topology`](../topology/syllabus.md) (light) · Roadmap id: `relativity`

## Goal

Go from "why does the speed of light break Newton?" to writing and solving Einstein's field equations. Build special relativity honestly from the two postulates, recast it in the tensor language of Minkowski spacetime, then develop **classical field theory** — the Lagrangian, Noether's theorem, and the stress–energy tensor — using the electromagnetic field as the worked example. Field theory is not a detour: the electromagnetic stress–energy tensor is exactly what sources gravity, and the Einstein field equations themselves come from a field-theory action (Einstein–Hilbert). Then take the differential-geometry interlude (manifolds, the metric, covariant derivatives, curvature) that GR genuinely requires, arrive at the Einstein equations two ways (physical and variational), and solve them: Schwarzschild (Mercury's precession, light bending, black holes) and FLRW (the expanding universe, the Friedmann equations, dark energy). You will be able to manipulate tensors fluently, compute a stress–energy tensor, derive equations of motion for a field, read a metric and extract its physics, and carry out the standard GR computations. Deliberately kept lighter: the rigorous manifold theory (topology supplies the taste), spinors/tetrads and the Cartan formalism, the full Kerr/charged-black-hole family (Schwarzschild in depth, Kerr as a taste), numerical relativity, and quantum field theory (this course builds the *classical* field theory that QFT quantizes — it is the endpoint, not entered). A tier-2 course: it assumes fluency with `em-refresher` (Maxwell's equations), `analytical-mechanics` (the action principle, Euler–Lagrange, Noether), `linalg-refresher` (bilinear forms, eigenvalues, change of basis), and a first taste of `topology` (open sets, continuity, what a space is).

## Dangerous Checklist

When you finish, you can:

- [ ] Derive time dilation, length contraction, and the relativity of simultaneity from the two postulates, and resolve the standard "paradoxes"
- [ ] Use the invariant interval and light cones to reason about causal structure, and read a Minkowski diagram
- [ ] Compute with four-vectors — four-velocity, four-momentum, $E=mc^2$ — and solve relativistic collisions and Doppler/aberration problems
- [ ] Manipulate tensors fluently: raise/lower indices with the metric, contract, and exploit symmetries in index notation
- [ ] Derive a field's equation of motion from a Lagrangian density via the Euler–Lagrange equations for fields
- [ ] Apply Noether's theorem to a field theory to get conserved currents and the stress–energy tensor
- [ ] Write electromagnetism covariantly ($F_{\mu\nu}$, covariant Maxwell, the EM Lagrangian) and compute the electromagnetic stress–energy tensor
- [ ] Work on a curved manifold: compute Christoffel symbols, take covariant derivatives, and parallel-transport a vector
- [ ] Write and solve the geodesic equation, and compute the Riemann, Ricci, and Einstein tensors of a given metric
- [ ] State the Einstein field equations, derive them from the Einstein–Hilbert action, and take the Newtonian limit
- [ ] Extract physics from the Schwarzschild metric: perihelion precession, light bending, the horizon, and gravitational redshift
- [ ] Explain what a horizon is (and isn't), distinguish coordinate from true singularities, and describe rotating (Kerr) holes and black-hole thermodynamics (the area/entropy law, Hawking radiation) at a conceptual level
- [ ] Derive the Friedmann equations from the FLRW metric, solve for the scale factor in the matter-, radiation-, and $\Lambda$-dominated eras, and relate cosmological redshift to the expansion history
- [ ] Describe the observational pillars and open puzzles of modern cosmology: Hubble's law, the CMB, dark matter, and dark energy

## Modules

### Module 1: Special relativity from the postulates

Two postulates dismantle absolute time; rebuild kinematics and dynamics on what survives.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The postulates and the relativity of simultaneity | See why constancy of $c$ forces simultaneity to be observer-dependent | Einstein's postulates, inertial frames, relativity of simultaneity, synchronization |
| 1.2 | Lorentz transformations | Derive the coordinate transformation that keeps $c$ invariant | Lorentz transformation, $\gamma$ factor, boosts, velocity addition |
| 1.3 | Time dilation, length contraction, and the paradoxes | Apply the transformations and resolve the apparent contradictions | time dilation, length contraction, twin paradox, ladder/pole paradox |
| 1.4 | Spacetime, the invariant interval, and causal structure | Trade frame-dependent space and time for invariant spacetime | invariant interval, Minkowski diagram, light cone, timelike/spacelike/null, causality |
| 1.5 | Four-vectors and four-momentum | Package energy and momentum into one covariant object | four-velocity, four-momentum, $E=mc^2$, invariant mass, energy–momentum relation |
| 1.6 | Relativistic dynamics and optics | Solve real problems: collisions, thresholds, Doppler, aberration | relativistic collisions, particle thresholds, relativistic Doppler, aberration |

**Boss problem 1:** A particle of mass $m$ and energy $E$ strikes an identical particle at rest; find the threshold energy to produce a heavier final state (e.g. antiproton production), working the problem with invariants rather than frame-by-frame.

### Module 2: The tensor language of Minkowski spacetime

Rewrite special relativity so that every equation is manifestly the same in every frame.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Index notation and the Minkowski metric | Adopt the notation that makes covariance automatic | index notation, metric $\eta_{\mu\nu}$, signature, Einstein summation |
| 2.2 | Vectors, covectors, and the transformation laws | Distinguish contravariant and covariant objects by how they transform | contravariant/covariant, dual space, transformation laws, raising/lowering indices |
| 2.3 | Tensors and tensor algebra | Build and manipulate higher-rank invariant objects | tensor rank, outer product, contraction, symmetry/antisymmetry, quotient theorem |
| 2.4 | Invariants, the Levi-Civita tensor, and volume | Form scalars and handle orientation and integration | scalar invariants, Levi-Civita symbol, dual tensors, invariant volume element |

**Boss problem 2:** Given the four-current $J^\mu=(\rho c,\mathbf J)$ and the antisymmetric field tensor $F^{\mu\nu}$, show that $\partial_\mu J^\mu=0$ expresses charge conservation and that $\partial_\mu F^{\mu\nu}=\mu_0 J^\nu$ reproduces two of Maxwell's equations — purely by index manipulation.

### Module 3: Classical field theory

The action principle for fields — the machinery behind both electromagnetism and gravity.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The action for fields and the Euler–Lagrange equations | Extend least action from particles to fields | Lagrangian density, field action, functional variation, field Euler–Lagrange equations |
| 3.2 | Noether's theorem for fields | Turn continuous field symmetries into conserved currents | continuous symmetry, Noether current, conserved charge, internal vs spacetime symmetry |
| 3.3 | The stress–energy tensor | Get energy, momentum, and their conservation from spacetime symmetry | canonical stress–energy tensor $T^{\mu\nu}$, energy/momentum density, $\partial_\mu T^{\mu\nu}=0$, symmetric (Belinfante) form |
| 3.4 | The relativistic scalar field | Work the simplest field theory end to end | Klein–Gordon Lagrangian, field equation, dispersion relation, its stress–energy tensor |
| 3.5 | Electromagnetism as a field theory | Recast Maxwell as a gauge field theory | four-potential $A^\mu$, field tensor $F_{\mu\nu}$, covariant Maxwell equations, gauge invariance |
| 3.6 | The EM Lagrangian and stress–energy tensor | Derive Maxwell from an action and build the source for gravity | EM Lagrangian $-\tfrac14 F_{\mu\nu}F^{\mu\nu}$, action for a charged particle, electromagnetic stress–energy tensor |

**Boss problem 3:** Starting from the electromagnetic Lagrangian density $\mathcal L=-\tfrac14 F_{\mu\nu}F^{\mu\nu}-J^\mu A_\mu$, derive the inhomogeneous Maxwell equations via the field Euler–Lagrange equations, then construct the (symmetric) electromagnetic stress–energy tensor and verify that its components are the familiar energy density and Poynting flux.

### Module 4: The geometry of curved spacetime

The differential-geometry interlude — the honest mathematics GR is built from. **Approach:** physicist's-pragmatic — coordinate/component-based tensors, computing Christoffels and curvature concretely on explicit metrics, with `topology` supplying intuition (manifold, tangent space) rather than proofs. (The abstract coordinate-free / exterior-calculus viewpoint is named where it clarifies, not developed in full.)

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Manifolds, coordinates, and tangent spaces | See spacetime as a manifold, not a vector space | manifold, charts/coordinates, tangent space, vectors as derivations |
| 4.2 | Tensors on a manifold | Carry the tensor algebra of Module 2 onto curved space | tensor fields, coordinate vs coordinate-free, the metric as a field, index gymnastics on manifolds |
| 4.3 | The metric, proper time, and the line element | Encode all geometry in the metric tensor | metric $g_{\mu\nu}$, line element $ds^2$, proper time/length, raising/lowering with $g$ |
| 4.4 | Covariant derivatives and Christoffel symbols | Differentiate tensors so the result is still a tensor | covariant derivative $\nabla_\mu$, Christoffel symbols, metric compatibility, parallel transport |
| 4.5 | Geodesics | Find the straightest possible paths and the motion of free particles | geodesic equation, affine parameter, geodesics from an action, Newtonian limit preview |
| 4.6 | The Riemann curvature tensor and geodesic deviation | Quantify curvature and its physical signature | Riemann tensor, commutator of covariant derivatives, geodesic deviation, tidal forces |
| 4.7 | Ricci, scalar curvature, and the Einstein tensor | Contract Riemann into the pieces the field equations use | Ricci tensor, Ricci scalar, Bianchi identities, Einstein tensor $G_{\mu\nu}$ |

**Boss problem 4:** For the 2-sphere of radius $a$ with metric $ds^2=a^2(d\theta^2+\sin^2\theta\,d\phi^2)$, compute the Christoffel symbols, the Riemann tensor, the Ricci scalar (should be $2/a^2$), and verify a great circle is a geodesic — a full curvature computation on a space you can picture.

### Module 5: General relativity and the Einstein equations

Matter curves spacetime; curvature tells matter how to move.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | The equivalence principle and the physical basis of GR | Turn "gravity = acceleration" into a program for a theory | equivalence principle, freely falling frames, gravity as geometry, general covariance |
| 5.2 | Matter in curved spacetime and local conservation | Put fields on a curved background and state conservation | minimal coupling ($\partial\to\nabla$), stress–energy in curved space, $\nabla_\mu T^{\mu\nu}=0$, perfect fluid |
| 5.3 | The Einstein field equations | Write the equation relating curvature to matter | Einstein equations $G_{\mu\nu}=\tfrac{8\pi G}{c^4}T_{\mu\nu}$, cosmological constant, why $G_{\mu\nu}$ (Bianchi) |
| 5.4 | The Einstein–Hilbert action | Derive the field equations from a field-theory action | Einstein–Hilbert action, variation of the metric, $\delta(\sqrt{-g}R)$, matter action → $T_{\mu\nu}$ |
| 5.5 | The Newtonian limit, redshift, and time dilation | Recover Newton and predict gravitational redshift | weak-field/slow-motion limit, $g_{00}$ and the Newtonian potential, gravitational redshift, GPS |
| 5.6 | Linearized gravity and gravitational waves | Solve the weak-field equations and find radiation | linearized Einstein equations, gauge choice, wave equation, transverse-traceless waves, LIGO |

**Boss problem 5:** Take the weak-field metric $g_{\mu\nu}=\eta_{\mu\nu}+h_{\mu\nu}$, linearize the Einstein equations, impose the harmonic (Lorenz) gauge to get a wave equation for $\bar h_{\mu\nu}$, and show a plane gravitational wave has two transverse-traceless polarizations that stretch and squeeze a ring of test masses.

### Module 6: Solutions — black holes and cosmology

Solve the field equations in the cases that remade physics and astronomy — the course's largest module, and the one that feeds `astrophysics`.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 6.1 | The Schwarzschild solution | Solve the vacuum equations for a spherical mass | spherical symmetry, Schwarzschild metric, Birkhoff's theorem, Schwarzschild radius |
| 6.2 | Orbits in Schwarzschild: precession and light bending | Extract the classic experimental tests | effective potential, perihelion precession of Mercury, deflection of light, gravitational lensing |
| 6.3 | Black holes I: horizons, coordinates, and the interior | Understand what a horizon is and what lies inside | event horizon, coordinate vs true singularity, Eddington–Finkelstein/Kruskal, infalling vs distant observers |
| 6.4 | Black holes II: rotating and charged holes | Handle the astrophysically real (spinning) case | Kerr metric, ergosphere, frame dragging, Penrose process, Reissner–Nordström taste |
| 6.5 | Black hole thermodynamics | See the deep link between gravity, quantum theory, and entropy | surface gravity, the four laws, Bekenstein–Hawking entropy $S=k_B A/4\ell_P^2$, Hawking radiation (conceptual) |
| 6.6 | Cosmology I: the cosmological principle and the FLRW metric | Build the metric of a homogeneous, isotropic universe | cosmological principle, FLRW metric, scale factor $a(t)$, comoving coordinates, spatial curvature $k$ |
| 6.7 | Cosmology II: the Friedmann equations and cosmic dynamics | Turn the Einstein equations into the universe's equation of motion | Friedmann equations, critical density, density parameters $\Omega_m,\Omega_r,\Omega_\Lambda$, solutions $a(t)$ per era |
| 6.8 | Cosmology III: cosmic history and the dark universe | Read off the universe's past, contents, and fate | cosmological redshift, Hubble's law, radiation/matter/$\Lambda$ eras, Big Bang & CMB, dark matter, dark energy, inflation (coda) |

**Boss problem 6:** From the FLRW metric, derive the two Friedmann equations for the scale factor $a(t)$, solve for $a(t)$ in a matter-dominated flat universe ($a\propto t^{2/3}$) and a $\Lambda$-dominated one (exponential de Sitter growth), and relate the cosmological redshift $1+z=a(t_0)/a(t_e)$ to what we observe; then, as a coda, use the Bekenstein–Hawking formula to estimate the entropy and Hawking temperature of a solar-mass black hole.

## Sources of truth

- Sean Carroll, *Spacetime and Geometry* (primary; notation, the geometric approach, and the level)
- James Hartle, *Gravity: An Introduction to Einstein's General Relativity* (physics-first intuition)
- Landau & Lifshitz, *The Classical Theory of Fields* (the unified SR + field-theory + GR viewpoint; source for Modules 1–3)
- Bernard Schutz, *A First Course in General Relativity* (careful, accessible derivations); Misner, Thorne & Wheeler, *Gravitation* and Zee, *Einstein Gravity in a Nutshell* as references

## Notes

- 2026-07-20: Course planned. `analytical-mechanics` added as a prerequisite (beyond the original roadmap set of mechanics/em/topology/linalg) because Module 3 (Classical field theory) builds directly on its action principle, Euler–Lagrange, and Noether machinery; roadmap.json and ROADMAP.md updated to match.
- 2026-07-20: Module 6 expanded from 5 to 8 lessons (black holes get a rotating/charged lesson and a black-hole-thermodynamics lesson; cosmology split into FLRW / Friedmann dynamics / cosmic history), bringing the course to 37 lessons (roadmap estimate was 34; +9%, within tolerance). Module 4 fixed to the physicist's-pragmatic (component-based, compute-concretely) approach. Both per Jacob's review of the plan.
