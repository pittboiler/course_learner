# Dynamical Systems & Chaos — Syllabus

> Tier 1 · ~22 lessons · Prereqs: [`ode-refresher`](../ode-refresher/syllabus.md), [`linalg-refresher`](../linalg-refresher/syllabus.md), [`real-analysis`](../real-analysis/syllabus.md) · Roadmap id: `dynamical-systems`

## Goal

Learn to read a nonlinear system's behavior *without solving it*: locate fixed points, judge their stability from the linearization, and sketch the phase portrait that tells the whole qualitative story. Then track how that story rewrites itself as a parameter turns — the bifurcations where equilibria collide, oscillations are born, and, past a threshold, motion becomes chaotic — and learn to quantify chaos with Lyapunov exponents and fractal dimension. Deliberately skipped: rigorous ergodic theory and measure-theoretic dynamics, the depths of KAM theory, and infinite-dimensional (PDE) dynamics — this course is the qualitative theory of nonlinear ODEs and maps, Strogatz-style, not a measure-theory course.

## Dangerous Checklist

When you finish, you can:

- [ ] Find the fixed points of a 1-D or 2-D system and classify their stability from the sign of the derivative / the Jacobian
- [ ] Linearize a nonlinear system and say when the linearization is trustworthy (and when Hartman–Grobman fails)
- [ ] Classify a 2-D linear system as node, saddle, spiral, or center from its trace and determinant
- [ ] Sketch a phase portrait: nullclines, flow directions, and the shape of trajectories
- [ ] Build a Lyapunov function to prove stability when linearization is inconclusive
- [ ] Use the Poincaré–Bendixson theorem to prove a limit cycle exists — and explain why a planar flow can't be chaotic
- [ ] Identify and unfold saddle-node, transcritical, pitchfork, and Hopf bifurcations, and draw a bifurcation diagram
- [ ] Recognize sensitive dependence on initial conditions and estimate the largest Lyapunov exponent
- [ ] Explain what a strange attractor is and why fractal (non-integer) dimension is the natural measure of it
- [ ] Iterate a 1-D map with a cobweb diagram and read off fixed points, cycles, and stability
- [ ] Walk the logistic map through the period-doubling cascade and estimate the Feigenbaum constant
- [ ] Connect the shift map and symbolic dynamics to the idea of chaos, and name where ergodicity meets statistical mechanics

## Modules

### Module 1: Flows on the line and the plane

Start with the geometric picture: motion as flow along a vector field, and everything you can read off it before writing a single solution.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Flows on the line and fixed-point stability | Read a 1-D system's fate from its graph | vector field $\dot x=f(x)$, fixed points, stability from $f'(x^*)$, phase line |
| 1.2 | Linear systems in the plane | Solve and classify $\dot{\mathbf x}=A\mathbf x$ exactly | eigenvalues/eigenvectors, general solution, invariant directions |
| 1.3 | The trace–determinant classification | Name any 2-D linear system at a glance | nodes, saddles, spirals, centers; trace–determinant plane, stability |
| 1.4 | Nonlinear systems and linearization | Approximate near a fixed point and know the limits | Jacobian, linearization, Hartman–Grobman, hyperbolic vs non-hyperbolic |
| 1.5 | Drawing phase portraits | Turn equations into a global picture | nullclines, flow direction, separatrices, connecting the local pictures |

**Boss problem 1:** For a given 2-D nonlinear system, find all fixed points, compute each Jacobian, classify every fixed point by its eigenvalues, and assemble a global phase portrait — noting explicitly any fixed point where linearization is inconclusive (a center or a zero eigenvalue) and why.

### Module 2: Limit cycles and the constraints of the plane

Two dimensions are special: trajectories can't cross, and that alone forbids chaos. Here are the tools that exploit it.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Conservative and reversible systems | Use conserved quantities to organize the flow | conserved energy, closed orbits, centers, reversibility |
| 2.2 | Lyapunov functions and stability | Prove stability when linearization can't | Lyapunov function, Lyapunov's direct method, basins of attraction |
| 2.3 | Limit cycles | Recognize isolated closed orbits and self-sustained oscillation | limit cycle, stable/unstable/semi-stable, van der Pol oscillator |
| 2.4 | Poincaré–Bendixson and ruling out cycles | Prove a limit cycle exists — or prove none can | Poincaré–Bendixson theorem, trapping region, Dulac/Bendixson negative criterion |
| 2.5 | Index theory | Count and constrain fixed points topologically | index of a closed curve, index of a fixed point, sum rule for a limit cycle |

**Boss problem 2:** Given a planar system with a suspected oscillation, construct a trapping region (an annulus with no fixed points inside), apply the Poincaré–Bendixson theorem to prove a limit cycle exists within it, and separately use the Bendixson–Dulac criterion on a nearby region to show no closed orbit can live there.

### Module 3: Bifurcations

Now turn a knob. Fixed points appear, collide, and swap stability; a whole limit cycle can be born from a point. This is how qualitative behavior changes with a parameter.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Saddle-node and transcritical bifurcations | See fixed points created and exchanged | saddle-node (fold), transcritical, bifurcation diagram, normal form |
| 3.2 | Pitchfork bifurcations and symmetry | Understand symmetry-breaking branching | supercritical/subcritical pitchfork, symmetry, hysteresis in the subcritical case |
| 3.3 | The Hopf bifurcation | Watch a limit cycle be born from a fixed point | Hopf bifurcation, complex eigenvalue crossing, supercritical vs subcritical |
| 3.4 | Normal forms and structural stability | Ask which systems are robust to small changes | normal form, structural stability, codimension, genericity |

**Boss problem 3:** For a one-parameter family $\dot x = f(x,\mu)$, find every bifurcation as $\mu$ varies, identify the type of each (saddle-node / transcritical / pitchfork), reduce it to its normal form near the bifurcation point, and draw the full bifurcation diagram with stability indicated on every branch.

### Module 4: Chaos in flows

Cross into three dimensions and the constraint lifts. Trajectories can stretch and fold forever without crossing — deterministic motion that is nonetheless unpredictable.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | The Lorenz system | Meet the first strange attractor | Lorenz equations, convection origin, why 3-D is needed for chaos |
| 4.2 | Sensitive dependence and the butterfly effect | Define chaos operationally | sensitive dependence on initial conditions, exponential divergence, unpredictability horizon |
| 4.3 | Strange attractors | Understand attraction that coexists with stretching | strange attractor, stretching and folding, attractor vs basin |
| 4.4 | Lyapunov exponents | Quantify how fast nearby trajectories separate | Lyapunov exponent, positive-exponent = chaos, the Lyapunov spectrum |
| 4.5 | Fractal dimension | Measure the geometry of an attractor | self-similarity, box-counting dimension, correlation dimension, non-integer dimension |

**Boss problem 4:** Working with the Lorenz system at its classic parameters, argue why the origin and the two symmetric fixed points cannot capture the long-run motion, estimate the largest Lyapunov exponent from the divergence of two nearby trajectories, and explain what a positive value together with a fractional attractor dimension tells you about the dynamics.

### Module 5: Maps and the routes to chaos

Discrete time distills chaos to its essence. A single quadratic map contains an entire universal cascade — and the door to symbolic dynamics and ergodicity.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | 1-D maps and cobweb diagrams | Iterate a map and read its dynamics graphically | map $x_{n+1}=f(x_n)$, cobweb plot, fixed points, stability from $|f'|$ |
| 5.2 | The logistic map and period-doubling | Trace the canonical road into chaos | logistic map, period-2/4/8 cycles, period-doubling, orbit diagram |
| 5.3 | Feigenbaum universality | Discover the number that governs all such cascades | Feigenbaum constant $\delta\approx4.669$, universality, renormalization idea |
| 5.4 | Intermittency and other routes | See chaos arrive without doubling | tangent bifurcation, intermittency, other routes to chaos |
| 5.5 | Symbolic dynamics, the shift map, and ergodicity | Encode chaos as sequences and meet ergodicity | tent/shift map, symbolic sequences, topological conjugacy, ergodicity → stat-mech link |

**Boss problem 5:** For the logistic map $x_{n+1}=r\,x_n(1-x_n)$, locate the first few period-doubling parameter values $r_1,r_2,r_3,\dots$, estimate the Feigenbaum ratio $\delta=(r_{n}-r_{n-1})/(r_{n+1}-r_{n})$ and show it approaches $\approx 4.669$, then identify the onset of chaos and interpret a period-3 window via the shift-map / symbolic-dynamics picture.

## Sources of truth

- Strogatz, *Nonlinear Dynamics and Chaos* (primary — voice, ordering, and the intuition-first treatment of every module)
- Hirsch, Smale & Devaney, *Differential Equations, Dynamical Systems, and an Introduction to Chaos* (linear systems, careful stability theory, and rigor)
- Guckenheimer & Holmes, *Nonlinear Oscillations, Dynamical Systems, and Bifurcations of Vector Fields* (normal forms, bifurcations, and structural stability at depth)

## Notes

- Nonlinear dynamics is the shared language of several other courses. Celestial and [`analytical-mechanics`](../analytical-mechanics/syllabus.md) systems live on phase portraits and turn on stability (the same fixed-point/eigenvalue machinery from Module 1); economic dynamics in [`grad-micro`](../grad-micro/syllabus.md) uses exactly this stability analysis to ask whether Walrasian tâtonnement price adjustment converges to equilibrium. Fluid instabilities in [`fluid-dynamics`](../fluid-dynamics/syllabus.md) are bifurcations (the Hopf bifurcation of Module 3 is the onset of oscillatory convection; the Lorenz system of Module 4 is a truncated convection model). And the ergodicity and symbolic-dynamics ideas closing Module 5 are the microscopic justification of [`stat-mech`](../stat-mech/syllabus.md) — why time averages equal ensemble averages.
