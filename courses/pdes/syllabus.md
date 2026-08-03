# Partial Differential Equations — Syllabus

> Tier 1 · ~25 lessons · Prereqs: [`calc-refresher`](../calc-refresher/syllabus.md), [`ode-refresher`](../ode-refresher/syllabus.md), [`real-analysis`](../real-analysis/syllabus.md) · Roadmap id: `pdes`

## Goal

Learn to recognize, classify, and actually solve the partial differential equations that run through physics: the heat, wave, and Laplace/Poisson equations, plus first-order transport. You will separate variables and expand in Fourier series and eigenfunctions on bounded domains, reach for the Fourier and Laplace transforms and Green's functions on unbounded ones, and judge whether a problem is well-posed before you trust its solution. Deliberately skipped: the Sobolev-space and weak-solution machinery (that's the rigorous backbone left to [`functional-analysis`](../functional-analysis/syllabus.md)), deep nonlinear PDE theory, and heavy numerical PDE — you'll meet shocks and the finite-difference *idea* as tastes, not as a computational course.

## Dangerous Checklist

When you finish, you can:

- [ ] Solve a first-order linear or quasilinear PDE by the method of characteristics, and see when characteristics cross
- [ ] Classify a second-order linear PDE as hyperbolic, parabolic, or elliptic from its principal part, and say what that predicts about behavior
- [ ] Derive the heat, wave, and Laplace/Poisson equations from a conservation or physical law and read each term
- [ ] Write down d'Alembert's solution of the 1D wave equation and trace how signals travel along characteristics
- [ ] Invoke the maximum principle to bound solutions of the Laplace and heat equations without solving them
- [ ] Solve a boundary/initial-value problem on a bounded domain by separation of variables and a Fourier sine/cosine expansion
- [ ] Set up a Sturm–Liouville problem, expand data in its eigenfunctions, and interpret the decay/oscillation of each mode
- [ ] Solve the heat and wave equations on the line with the Fourier transform, and write the heat kernel (fundamental solution)
- [ ] Use the Laplace transform to handle the time variable in an evolution problem
- [ ] Use the Dirac delta and Green's functions to solve Poisson and inhomogeneous problems, including the method of images
- [ ] Apply Duhamel's principle to turn an inhomogeneous evolution equation into a superposition of homogeneous ones
- [ ] Separate variables in polar/spherical coordinates and recognize where Bessel and Legendre functions come from

## Modules

### Module 1: First-order PDEs and classification

Start where PDEs are simplest — first order — build the method of characteristics, then learn to sort every second-order linear equation into one of three families.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | What is a PDE? Transport and the geometry of solutions | See a PDE as a condition on a surface and solve the simplest one | order/linearity, transport equation, characteristics as curves of constancy |
| 1.2 | The method of characteristics for first-order linear PDEs | Reduce a linear PDE to ODEs along characteristic curves | characteristic ODEs, initial/Cauchy data, domain of determinacy |
| 1.3 | Quasilinear first-order equations | Solve equations whose speed depends on the solution, and see characteristics collide | quasilinear PDE, characteristic system, crossing → gradient blow-up |
| 1.4 | Classifying second-order linear PDEs | Read the principal part to name the equation type and its character | discriminant $B^2-AC$, hyperbolic/parabolic/elliptic, canonical forms |
| 1.5 | Characteristics and well-posedness | Connect equation type to what data makes a problem well-posed | Hadamard well-posedness, characteristics as information paths, ill-posed examples |

**Boss problem 1:** Given a second-order linear PDE with variable coefficients, compute its discriminant to classify it region by region, find its characteristic curves where it is hyperbolic, and explain which boundary/initial data would make a well-posed problem — contrasting with a data choice that would not.

### Module 2: The three classical equations

Meet the heat, wave, and Laplace/Poisson equations as physics, then solve the wave equation cleanly and learn what maximum principles buy you for free.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Deriving the heat and diffusion equations | Get the parabolic equation from conservation of energy/mass | Fourier's law, conservation + flux, diffusion, parabolic behavior |
| 2.2 | The wave equation and d'Alembert's solution | Solve the 1D wave equation exactly and read signals off characteristics | wave equation, d'Alembert formula, left/right traveling waves, domain of dependence |
| 2.3 | Laplace's and Poisson's equations | Recognize the elliptic equation of equilibrium and its sources | Laplace/Poisson equation, harmonic functions, steady state, boundary data |
| 2.4 | Maximum principles and their consequences | Bound and compare solutions without solving them | weak/strong maximum principle, mean-value property, uniqueness & stability |

**Boss problem 2:** For the wave equation on the line, use d'Alembert's formula to solve a given initial-displacement/initial-velocity problem, sketch the solution's domain of dependence and range of influence, then use the maximum principle to bound the corresponding steady-state (Laplace) problem on a rectangle without solving it.

### Module 3: Separation of variables and Fourier series

The workhorse: turn a bounded-domain PDE into eigenvalue problems, expand data in eigenfunctions, and make it rigorous enough to trust — this is the machinery QM runs on.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Separation of variables on a bounded interval | Split a PDE into ODEs and assemble the series solution | product solutions, separation constant, superposition, boundary conditions |
| 3.2 | Fourier series: sine, cosine, and full | Expand a function in the eigenfunctions the boundary conditions pick out | Fourier sine/cosine/full series, orthogonality, coefficient formulas |
| 3.3 | Convergence and the behavior of Fourier series | Know when the series converges and what happens at jumps | pointwise/uniform/$L^2$ convergence, Gibbs phenomenon, term-by-term operations |
| 3.4 | Sturm–Liouville theory | See why eigenfunction expansions work in general | S–L operator, self-adjointness, real eigenvalues, orthogonal complete eigenfunctions |
| 3.5 | Eigenfunction expansions and inhomogeneous problems | Solve driven boundary-value problems by expanding in eigenfunctions | eigenfunction expansion, generalized Fourier series, forcing & source terms |

**Boss problem 3:** Solve heat conduction in a rod with mixed boundary conditions (one insulated end, one held at fixed temperature) by setting up the Sturm–Liouville eigenvalue problem those conditions force, expanding the initial temperature in its eigenfunctions, and interpreting how fast each mode decays and which dominates the long-time behavior.

### Module 4: Transforms on unbounded domains

When the domain is the whole line there are no discrete modes — replace Fourier series with the Fourier transform and Laplace transform, and out falls the heat kernel.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | The Fourier transform | Trade a function on the line for its frequency content | Fourier transform/inverse, key properties, derivatives → multiplication |
| 4.2 | Solving the heat equation on the line: the heat kernel | Solve the whole-line diffusion problem and meet the fundamental solution | fundamental solution, Gaussian heat kernel, convolution with initial data |
| 4.3 | The wave equation on the line and dispersion | Solve wave and dispersive equations by transform, and see spreading | transform of the wave equation, dispersion relation, group vs phase idea |
| 4.4 | The Laplace transform for evolution problems | Kill the time derivative and solve the resulting spatial problem | Laplace transform, initial conditions built in, inversion, transient response |

**Boss problem 4:** Solve the heat equation on the whole line with a given initial temperature profile by Fourier transform, write the solution as convolution against the heat kernel, and compute how the peak height and width evolve in time — then note in one paragraph how the Schrödinger equation is the same calculation with an imaginary diffusion constant, and why that makes it disperse rather than smooth.

### Module 5: Green's functions and distributions

The unifying idea: solve for a point source once, superpose for everything else. Requires a working (not fussy) notion of the Dirac delta and distributions.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | The Dirac delta and distributions, lightly | Handle point sources and differentiate discontinuous things safely | Dirac delta, distributions as functionals, weak derivative (informal), sifting property |
| 5.2 | Green's functions for Poisson's equation | Solve $-\nabla^2 u = f$ by integrating against a point-source response | Green's function, point source, fundamental solution of the Laplacian, superposition |
| 5.3 | The method of images | Enforce boundary conditions by placing mirror sources | image charges/sources, half-space & sphere, Dirichlet Green's function |
| 5.4 | Duhamel's principle for inhomogeneous evolution | Convert a forced heat/wave equation into a superposition of homogeneous solves | Duhamel's principle, inhomogeneous heat/wave equation, time-convolution |

**Boss problem 5:** Build the Green's function for Poisson's equation in a half-space by the method of images, verify it satisfies the Dirichlet boundary condition, then use it to write the potential of a single point source near the boundary and interpret the induced "image" contribution physically.

### Module 6: Nonlinear and special topics — a taste

A short capstone module: three glimpses of where PDEs go next — shocks, numerics, and the special functions that curved coordinates produce.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 6.1 | Nonlinear first-order equations, shocks, and Burgers | See characteristics cross and a smooth solution break | Burgers' equation, shock formation, weak solution & Rankine–Hugoniot (idea) |
| 6.2 | A taste of finite differences and well-posedness | Discretize a PDE and see why some schemes blow up | finite-difference stencil, stability, CFL condition, numerical vs analytic well-posedness |
| 6.3 | Separation in polar and spherical coordinates | Separate the Laplacian in curved coordinates and meet the special functions | polar/spherical Laplacian, Bessel functions, Legendre polynomials, spherical harmonics (preview) |

**Boss problem 6:** For inviscid Burgers' equation with a decreasing initial profile, find the time at which characteristics first cross (the shock formation time) and describe the shock; then, switching gears, separate Laplace's equation on a disk in polar coordinates and identify which special functions carry the angular and radial parts — naming where these same functions reappear in the hydrogen atom.

## Sources of truth

- Strauss, *Partial Differential Equations: An Introduction* (primary; classification, separation of variables, the classical equations)
- Haberman, *Applied Partial Differential Equations* (Sturm–Liouville, Fourier series, transforms, physical derivations)
- Evans, *Partial Differential Equations* (rigor and the characteristics/well-posedness backbone; consulted, not followed section-by-section)

## Notes

- Cross-subject bridges: this course is the engine room for the physics track. It feeds [`quantum-mechanics`](../quantum-mechanics/syllabus.md) (the Schrödinger equation is a dispersive cousin of the heat equation, and its bound states are Sturm–Liouville eigenproblems in disguise — Modules 3, 4, 6); [`em-refresher`](../em-refresher/syllabus.md) (Laplace/Poisson boundary-value problems, Green's functions, and the method of images are electrostatics — Modules 2, 5); [`relativity`](../relativity/syllabus.md) (the wave equation and its characteristics/light-cone structure — Modules 1, 2); and [`fluid-dynamics`](../fluid-dynamics/syllabus.md) (transport, quasilinear equations, and shocks — Modules 1, 6). [`functional-analysis`](../functional-analysis/syllabus.md) supplies the rigorous backbone this course deliberately gestures at rather than proves: Sturm–Liouville self-adjointness, eigenfunction completeness, and the weak-solution/Sobolev theory behind well-posedness.
