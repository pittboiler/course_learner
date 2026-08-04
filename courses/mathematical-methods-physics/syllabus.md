# Mathematical Methods for Physics — Syllabus

> Physics · Tier 1 · ~21 lessons · Prereqs: [calc-refresher](../calc-refresher/syllabus.md), [ode-refresher](../ode-refresher/syllabus.md), [linalg-refresher](../linalg-refresher/syllabus.md) · Roadmap id: `mathematical-methods-physics`

## Goal

This is the physicist's toolbox: the collection of techniques you reach for over and over in electromagnetism, quantum mechanics, and beyond, assembled in one place and drilled until reflexive. You will manipulate vector fields in any coordinate system, evaluate ugly real integrals by contour, recognize the special functions the moment a boundary problem produces them, transform differential equations into algebra, build Green's functions for driven systems, and extremize a functional. The stance is pragmatic and technique-first — we compute, we check limits, we build intuition. Rigor is deliberately deferred to the math courses: no epsilon-delta proofs, no measure theory (see [real-analysis](../real-analysis/syllabus.md), [complex-analysis](../complex-analysis/syllabus.md)), no heavy PDE existence theory ([pdes](../pdes/syllabus.md)), and no differential-geometry machinery ([differential-geometry](../differential-geometry/syllabus.md)) — tensors here stay in the index-and-summation, Cartesian-plus-curvilinear register a physicist actually uses. This course is the shared prerequisite for [quantum-mechanics](../quantum-mechanics/syllabus.md), [em-refresher](../em-refresher/syllabus.md), and [relativity](../relativity/syllabus.md).

## Dangerous Checklist

When you finish, you can:

- [ ] Compute grad, div, and curl in Cartesian, cylindrical, and spherical coordinates, and say what each answer means physically
- [ ] Convert a surface or volume integral using the divergence and Stokes theorems, and pick the form that makes a physics problem easy
- [ ] Manipulate vector identities and Cartesian-tensor expressions fluently with index/Einstein-summation notation and $\varepsilon_{ijk}$
- [ ] Diagonalize a symmetric matrix and read the eigenvectors as principal axes of a physical tensor (inertia, stress, polarizability)
- [ ] Evaluate a real definite integral by closing a contour and summing residues, choosing the right closure and handling simple branch points
- [ ] Solve a linear ODE by power series / Frobenius and identify when the solution is a named special function
- [ ] Recognize Legendre, Bessel, and Hermite functions from the boundary problem that produces them, and expand a given function in the matching orthogonal series
- [ ] Set up a Sturm–Liouville problem and use its orthogonal eigenfunctions to solve a boundary-value problem
- [ ] Solve an ODE or IVP with the Fourier or Laplace transform, and manipulate the Dirac delta confidently under integrals
- [ ] Construct the Green's function for a driven linear system and write the solution as a convolution against the source
- [ ] Derive an Euler–Lagrange equation for a variational problem (shortest path, brachistochrone, least action) and apply a constraint
- [ ] Identify a symmetry group of a physical system and explain what its representation buys you (degeneracies, selection rules)

## Modules

### Module 1: Vector calculus & tensors in physics

The language of fields: differential operators, the integral theorems that connect them, curvilinear coordinates, and index notation with a first taste of tensors.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Fields, grad, div, curl — the physics reading | Read each operator as a physical rate/spread/rotation, not just a formula | scalar/vector fields, gradient as steepest ascent, divergence as source density, curl as circulation density, $\nabla$ |
| 1.2 | Line, surface, and volume integrals; flux and circulation | Set up and evaluate the three integral types and interpret flux/work | path/surface/volume integrals, oriented surfaces, flux $\iint \mathbf{F}\cdot d\mathbf{A}$, circulation $\oint \mathbf{F}\cdot d\mathbf{l}$ |
| 1.3 | The integral theorems: divergence, Stokes, Green | Convert between local and global forms and choose the easy side | divergence theorem, Stokes' theorem, Green's theorem, conservative fields, physical meaning of each |
| 1.4 | Curvilinear coordinates: cylindrical and spherical | Write grad/div/curl/Laplacian with scale factors and use them by symmetry | scale factors $h_i$, orthogonal curvilinear coords, area/volume elements, $\nabla^2$ in spherical/cylindrical |
| 1.5 | Index notation, Einstein summation, and Cartesian tensors | Prove vector identities mechanically and handle tensors like inertia | free/dummy indices, summation convention, $\delta_{ij}$, $\varepsilon_{ijk}$, $\varepsilon$–$\delta$ identity, rank-2 tensors, transformation rule |

**Boss problem 1:** Given the field $\mathbf{F} = \dfrac{\hat{\mathbf{r}}}{r^2}$ (a point-source / inverse-square field), compute its divergence away from the origin using the spherical formula, then evaluate the flux through a sphere of radius $R$ two ways — direct surface integral and divergence theorem — and reconcile the apparent contradiction at the origin (previewing the delta function). Separately, prove $\nabla\times(\nabla\phi)=0$ in index notation.

### Module 2: Complex methods and contour integration

Analytic functions have rigid structure, and that rigidity turns hard real integrals into bookkeeping over poles.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Analytic functions and the Cauchy–Riemann equations | Test analyticity and see why analytic functions are so constrained | complex differentiability, Cauchy–Riemann equations, harmonic functions, conformal map (taste) |
| 2.2 | Contour integrals, Cauchy's theorem and integral formula | Integrate along paths and use analyticity to move/collapse contours | contour integral, Cauchy–Goursat theorem, Cauchy integral formula, deforming contours |
| 2.3 | Singularities, Laurent series, and residues | Classify singularities and read off the residue that controls an integral | poles vs essential singularities, Laurent series, residue, residue theorem |
| 2.4 | Evaluating real physics integrals by residues | Turn $\int_{-\infty}^{\infty}$ and $\int_0^{2\pi}$ integrals into residue sums | semicircle closure, Jordan's lemma, trig-to-unit-circle substitution, simple branch cuts, principal value |

**Boss problem 2:** Evaluate $\displaystyle\int_{-\infty}^{\infty}\frac{\cos x}{x^2+a^2}\,dx$ for $a>0$ by contour integration — justify the choice of upper-half-plane closure via Jordan's lemma, find the enclosed pole and its residue, and check the answer's limits as $a\to 0^+$ and $a\to\infty$.

### Module 3: Series solutions, special functions & Sturm–Liouville

Where the special functions come from — the ODEs of physics — and the orthogonality that lets you expand anything in them.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Power-series and Frobenius solutions of ODEs | Solve linear ODEs about ordinary and regular singular points | power-series method, ordinary vs singular points, indicial equation, Frobenius method, recurrence relations |
| 3.2 | Legendre polynomials and spherical harmonics | Recognize the functions the Laplacian produces on a sphere | Legendre equation, $P_\ell(x)$, Rodrigues' formula, orthogonality, associated Legendre & $Y_\ell^m$ (preview) |
| 3.3 | Bessel functions | Handle the functions of cylindrical boundary problems | Bessel equation, $J_\nu$/$Y_\nu$, zeros, recurrence, orthogonality on an interval, physical settings (drum, waveguide) |
| 3.4 | Hermite functions and generating-function methods | Get the oscillator eigenfunctions and use generating functions/Rodrigues formulas | Hermite equation, $H_n(x)$, generating functions, Gaussian weight, link to the quantum oscillator |
| 3.5 | Sturm–Liouville theory and orthogonal expansions | See all of the above as one framework and expand functions in eigenfunctions | self-adjoint form, weight function, real eigenvalues, orthogonality, completeness, generalized Fourier series |

**Boss problem 3:** A grounded conducting sphere of radius $a$ sits in a previously uniform field; expand the boundary data in Legendre polynomials and use orthogonality to fix the expansion coefficients of the exterior potential (setting up the classic separation-of-variables solution). State explicitly which Sturm–Liouville orthogonality relation you invoked.

### Module 4: Integral transforms, distributions & Green's functions

Trade calculus for algebra: transform the equation, solve, transform back — and package the whole response of a linear system into one function.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Fourier series and the Fourier transform for physics | Decompose signals/fields into modes and use the transform's calculus rules | Fourier series, Fourier transform pair, Parseval/Plancherel, convolution theorem, derivative $\to$ multiplication |
| 4.2 | The Dirac delta and distributions | Manipulate $\delta$ under integrals and use it as an idealized point source | sifting property, $\delta$ as a limit, derivatives of $\delta$, $\delta$ in curvilinear coords, resolving the Module-1 flux puzzle |
| 4.3 | The Laplace transform and initial-value problems | Solve driven ODEs/IVPs by transforming to algebra and inverting | Laplace transform, transforms of derivatives, partial fractions, convolution, transient vs steady response |
| 4.4 | Green's functions for driven linear systems | Build the impulse response and write the solution as a convolution | linear operator + source, $\delta$-source definition, boundary conditions, superposition, Green's-function-as-inverse |

**Boss problem 4:** For the driven damped oscillator $\ddot{x}+2\gamma\dot{x}+\omega_0^2 x = f(t)$, construct the Green's function (impulse response) by solving with $f(t)=\delta(t)$ and imposing causality, then write the general solution as a convolution $x(t)=\int G(t-t')f(t')\,dt'$ and verify it against the Laplace-transform solution for a step forcing.

### Module 5: Variational methods & symmetry

Two unifying ideas: physics as the extremum of a functional, and physics organized by the group of its symmetries.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Calculus of variations and the Euler–Lagrange equation | Extremize a functional and derive the equation the extremal satisfies | functional, first variation, Euler–Lagrange equation, geodesic/brachistochrone, beltrami identity |
| 5.2 | Constraints and variational estimates | Handle constrained extremals and estimate eigenvalues variationally | isoperimetric/holonomic constraints, Lagrange multipliers for functionals, Rayleigh quotient, Rayleigh–Ritz estimate |
| 5.3 | Groups and symmetry in physics — a taste | Spot a symmetry group and say what its representations buy you | group axioms, discrete vs continuous (Lie) groups, symmetry $\to$ degeneracy, representation & selection rules (preview) |

**Boss problem 5:** Derive the shape of the curve of fastest descent (brachistochrone) by writing the descent-time functional, applying the Beltrami identity (since the integrand has no explicit $x$-dependence), and reducing to the cycloid — then name the symmetry that made the Beltrami shortcut available.

## Sources of truth

- Boas, *Mathematical Methods in the Physical Sciences* — the default level, ordering, and pragmatic tone.
- Arfken & Weber, *Mathematical Methods for Physicists* — reference for special-function conventions and completeness.
- Riley, Hobson & Bence, *Mathematical Methods for Physics and Engineering* — for worked-technique style and problem framing.

<!-- 2026-08-04: 21 lessons across 5 modules (target was ~20; within tolerance, no compression needed). -->
