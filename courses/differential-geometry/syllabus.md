# Differential Geometry — Syllabus

> Tier 1 · ~24 lessons · Prereqs: [`calc-refresher`](../calc-refresher/syllabus.md), [`linalg-refresher`](../linalg-refresher/syllabus.md), [`topology`](../topology/syllabus.md) · Roadmap id: `differential-geometry`

## Goal

Learn to do geometry on curved spaces the way physics needs it: work fluently with smooth manifolds, tensors, and differential forms; compute curvature; understand geodesics and parallel transport; and read the geometric machinery underneath general relativity and gauge theory. We warm up classically (curves and surfaces in $\mathbb{R}^3$, where curvature is something you can see) and then rebuild everything coordinate-free on abstract manifolds. Deliberately skipped: the deep Riemannian comparison and global theorems (Hopf–Rinow, Bonnet–Myers, Gauss–Bonnet beyond a mention), the algebraic-topology overlap (de Rham cohomology, homology — that's `topology`'s job), and the classification/representation theory of Lie groups. This is the honest foundation the GR "interlude" in `relativity` and the gauge structure of `qft` quietly assume.

## Dangerous Checklist

When you finish, you can:

- [ ] Compute the curvature and torsion of a space curve, and the two fundamental forms of a surface
- [ ] Compute Gaussian curvature and explain, via the Theorema Egregium, why it's intrinsic
- [ ] Define a smooth manifold from charts and atlases, and check whether a map between manifolds is smooth
- [ ] Work with tangent vectors as derivations and pushforwards, and translate between coordinate and coordinate-free descriptions
- [ ] Manipulate tensors by their transformation law and by the abstract multilinear-map definition, raising and lowering indices
- [ ] Take wedge products and exterior derivatives, and recognize grad/div/curl as one operator
- [ ] Integrate a form over a manifold and apply the generalized Stokes theorem
- [ ] Compute a covariant derivative and Christoffel symbols, and parallel-transport a vector along a curve
- [ ] Write and solve the geodesic equation, and interpret geodesics as straightest / locally-shortest paths
- [ ] Compute the Riemann curvature tensor and contract it to Ricci and scalar curvature
- [ ] Distinguish Riemannian from Lorentzian metrics and derive the Levi-Civita connection from a metric
- [ ] Take a Lie derivative, identify Killing vectors as symmetries, and say what a fiber bundle with a connection buys you in gauge theory

## Modules

### Module 1: Curves and surfaces — the classical warm-up

Do geometry where you can still draw it: curvature you can point at, before it goes abstract.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Curves, arc length, and the Frenet frame | Measure how a curve bends and twists | arc-length parametrization, curvature $\kappa$, torsion $\tau$, Frenet–Serret frame |
| 1.2 | Surfaces and the first fundamental form | Do intrinsic measurement on a surface | regular surface, parametrization, tangent plane, first fundamental form (the induced metric) |
| 1.3 | The Gauss map and the second fundamental form | Quantify how a surface curves in space | normal field, Gauss map, shape operator, second fundamental form, principal curvatures |
| 1.4 | Gaussian curvature and the Theorema Egregium | See that curvature lives inside the surface | Gaussian vs mean curvature, Theorema Egregium, intrinsic vs extrinsic geometry |

**Boss problem 1:** Compute the Gaussian curvature of a surface of revolution (e.g. a sphere or torus) two ways — once extrinsically from the shape operator ($K = \det S$), once intrinsically from the first fundamental form alone — and confirm they agree, illustrating the Theorema Egregium.

### Module 2: Smooth manifolds

Strip away the ambient $\mathbb{R}^3$: geometry on a space defined only by how its coordinate patches glue.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Charts, atlases, and smooth manifolds | Define a curved space with no ambient space | chart, atlas, transition map, smooth structure, examples ($S^n$, tori, projective space) |
| 2.2 | Smooth maps and diffeomorphisms | Say when a map between manifolds is smooth | smooth map in coordinates, diffeomorphism, rank, submanifolds |
| 2.3 | The tangent space, done carefully | Build tangent vectors without an arrow to point | curves-through-a-point vs derivations, $T_pM$, basis $\partial/\partial x^i$, dimension |
| 2.4 | Vector fields and the pushforward | Move vectors along maps and flow along fields | vector field, pushforward/differential $df$, integral curves and flows, the Lie bracket |
| 2.5 | Covectors and the cotangent space | Meet the objects that eat vectors | cotangent space $T_p^*M$, differentials $dx^i$, dual basis, one-forms |

**Boss problem 2:** Give the standard two-chart atlas on the circle $S^1$ (or sphere $S^2$), verify the transition maps are smooth, compute the differential (pushforward) of a given smooth map in both charts, and confirm the tangent-vector components transform correctly across the overlap.

### Module 3: Tensors and differential forms

The linear algebra of curved space, and the single derivative operator that unifies vector calculus.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Tensors as multilinear maps | Handle tensors abstractly and by index law | $(k,l)$-tensors, tensor product, transformation law, contraction |
| 3.2 | Differential forms and the wedge product | Build the antisymmetric, integrable tensors | $p$-forms, wedge product $\wedge$, orientation, the algebra of forms |
| 3.3 | The exterior derivative | Get one $d$ that is grad, curl, and div | exterior derivative $d$, $d^2 = 0$, closed vs exact forms, Poincaré lemma (local) |
| 3.4 | Integration on manifolds | Integrate a form over an oriented manifold | orientation, partition of unity (idea), integral of a top-form, change of variables |
| 3.5 | The generalized Stokes theorem | Collapse the whole vector-calculus zoo into one line | $\int_M d\omega = \int_{\partial M}\omega$; recovering FTC, Green, Gauss, Stokes |

**Boss problem 3:** Take a specific 1-form on $\mathbb{R}^3$ (or on a surface), compute $d\omega$, and verify the generalized Stokes theorem on a chosen region by evaluating both the boundary integral of $\omega$ and the interior integral of $d\omega$ — then identify which classical theorem (Green/Gauss/Stokes) you just reproduced.

### Module 4: Connections, geodesics, and curvature

How to differentiate on a curved space, transport vectors, go straight, and measure the failure of flatness.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | The covariant derivative and Christoffel symbols | Differentiate vector fields on a manifold | connection $\nabla$, Christoffel symbols $\Gamma^k_{ij}$, why $\partial_i V^j$ isn't a tensor |
| 4.2 | Parallel transport | Carry a vector along a curve without turning it | parallel transport equation, path dependence, holonomy (preview) |
| 4.3 | Geodesics | Find the straightest and locally shortest paths | geodesic equation, geodesics as auto-parallel curves, exponential map (idea) |
| 4.4 | The Riemann curvature tensor | Measure curvature as failure of transport to commute | commutator of covariant derivatives, $R^\rho{}_{\sigma\mu\nu}$, symmetries, flatness $\Leftrightarrow R=0$ |
| 4.5 | Ricci and scalar curvature | Extract the pieces Einstein's equations use | Ricci tensor, scalar curvature, sectional curvature (idea), geodesic deviation |

**Boss problem 4:** For the round 2-sphere with metric $ds^2 = d\theta^2 + \sin^2\theta\,d\phi^2$, compute the Christoffel symbols, the Riemann tensor, and the Ricci and scalar curvature; solve (or verify) the geodesic equation to show great circles are geodesics; and interpret the nonzero curvature as the reason parallel transport around a loop rotates a vector.

### Module 5: Metrics and the bridge to physics

Add a metric, pin down the natural connection, encode symmetry — and glimpse the language gauge theory is written in.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Riemannian and Lorentzian metrics | Put lengths, angles, and light cones on a manifold | metric tensor, signature, Riemannian vs Lorentzian, raising/lowering indices |
| 5.2 | The Levi-Civita connection | Get the unique metric-compatible torsion-free $\nabla$ | metric compatibility, torsion-free, fundamental theorem of Riemannian geometry, $\Gamma$ from $g$ |
| 5.3 | The Lie derivative, Killing vectors, and symmetry | Detect symmetries of a geometry | Lie derivative $\mathcal{L}_X$, flows, Killing equation, conserved quantities along geodesics |
| 5.4 | Fiber bundles and connections — the gauge idea | See a connection as a gauge field | fiber/principal bundle, connection & curvature on a bundle, gauge = choice of frame, tangent bundle as example |

**Boss problem 5:** For a metric of your choice with an obvious symmetry (e.g. the flat metric in polar/spherical coordinates, or the 2-sphere), derive the Levi-Civita connection from the metric, find a Killing vector by solving the Killing equation, and show explicitly that it yields a quantity conserved along geodesics — the geometric origin of a conservation law.

## Sources of truth

- Lee, *Introduction to Smooth Manifolds* (primary; manifolds, tensors, forms, the coordinate-free viewpoint and rigor level)
- do Carmo, *Differential Geometry of Curves and Surfaces* (Module 1's classical treatment and notation)
- Spivak, *Calculus on Manifolds* (exterior calculus and the generalized Stokes theorem)
- Schutz, *Geometrical Methods of Mathematical Physics* (the physics-facing view: Lie derivatives, forms, bundles); index-gymnastics conventions align with the GR literature (Carroll/Wald)

## Notes

- This is the honest mathematical foundation for [`relativity`](../relativity/syllabus.md), where general relativity currently appears as a compressed GR "interlude" — Modules 4–5 here (curvature, geodesics, Lorentzian metrics, the Levi-Civita connection) are exactly the machinery Einstein's equations are built from.
- Module 5's fiber-bundles-and-connections picture is the geometric language of gauge theory, feeding directly into the gauge structure of [`qft`](../qft/syllabus.md): a gauge field *is* a connection, and its field strength *is* curvature.
- The exterior-calculus view (Module 3) also cleans up [`analytical-mechanics`](../analytical-mechanics/syllabus.md): phase space is a symplectic manifold, Hamilton's equations are a statement about a closed 2-form, and Maxwell's equations in electromagnetism collapse to $dF = 0$, $d\star F = J$.
