# Complex Analysis — Syllabus

> Tier 1 · 20 lessons · Prereqs: [real-analysis](../real-analysis/syllabus.md) · Roadmap id: `complex-analysis`

## Goal

Discover the astonishing rigidity of the complex world: a function that is differentiable *once* on an open set is automatically infinitely differentiable, equal to its own power series, and pinned down everywhere by its values on any tiny curve. This course builds that theory — holomorphy, the Cauchy–Riemann equations, contour integration, Cauchy's theorem and integral formula, Taylor/Laurent series, and the residue calculus — and then cashes it out: evaluating real integrals that defeat real methods, counting zeros, and mapping regions conformally. You'll finish able to read a residue computation, justify it, and run it yourself.

Deliberately scoped: one complex variable. We assume `real-analysis` (ε–δ, uniform convergence, power series, the Riemann integral) and build on it rather than re-proving it. We take the geometric/computational road to Cauchy's theorem (Goursat's proof for triangles, then convex regions) rather than the full homology/winding-number machinery; the Riemann mapping theorem is stated and used, not proved. No Riemann surfaces, no analytic continuation beyond a first taste, no several-variable theory — those are past "dangerous."

## Dangerous Checklist

When you finish, you can:

- [ ] Do arithmetic and geometry in $\mathbb{C}$ fluently — modulus, argument, polar form, roots of unity — and read multiplication as rotation-and-scaling
- [ ] Test a function for holomorphy with the Cauchy–Riemann equations, and explain why complex-differentiable is so much stronger than real-differentiable
- [ ] Produce a harmonic conjugate, and explain why holomorphic maps preserve angles
- [ ] Find the radius of convergence of a complex power series and manipulate it term by term
- [ ] Parametrize and compute a contour integral, and bound one with the ML-inequality
- [ ] State and apply the Cauchy–Goursat theorem and the Cauchy integral formula, and derive Liouville's theorem and the Fundamental Theorem of Algebra
- [ ] Expand a function in a Taylor or Laurent series and read off the type of a singularity
- [ ] Compute residues and use the residue theorem to evaluate real definite integrals (trigonometric and improper)
- [ ] Count zeros and poles with the argument principle and Rouché's theorem
- [ ] Build a Möbius transformation sending three points to three points, and use conformal maps to solve a Laplace/Dirichlet problem

## Modules

### Module 1: The complex plane

Reactivate $\mathbb{C}$ as geometry, then set up the analytic groundwork on top of `real-analysis`.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Complex numbers and the geometry of $\mathbb{C}$ | Compute with, and *see*, complex numbers — multiplication as rotation-and-scaling | modulus, argument, polar form, De Moivre, roots of unity, triangle inequality |
| 1.2 | Functions, limits, and continuity on $\mathbb{C}$ | Transfer `real-analysis` limit/continuity machinery to $\mathbb{C}\cong\mathbb{R}^2$, and see what's new | topology of $\mathbb{C}$, sequences, limits, continuity, the point at infinity (Riemann sphere) |
| 1.3 | The exponential, logarithm, and complex trig | Define $e^z$, $\log z$, $\sin z$, $\cos z$ and handle the multivaluedness of the log | $e^z=e^x(\cos y+i\sin y)$, branches of $\arg$/$\log$, branch cut, complex sine/cosine |

**Boss problem 1:** Solve $z^4=-16$ by putting $-16$ in polar form and reading off all four roots geometrically, then plot them. Separately, find every $z$ with $e^z = -1$ and with $\cos z = 2$ (yes, it has solutions — explain why the real "$|\cos|\le 1$" intuition breaks), using the definitions from 1.3.

### Module 2: Holomorphic functions

The central definition, and the equations that detect it.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Complex differentiability | Define $f'(z)$ as a limit and feel why "the same limit from every direction" is a severe demand | difference quotient in $\mathbb{C}$, holomorphic/analytic, why real-differentiable ≠ complex-differentiable |
| 2.2 | The Cauchy–Riemann equations | Test holomorphy via $u_x=v_y,\ u_y=-v_x$, and know when they're sufficient | Cauchy–Riemann equations, necessary & sufficient conditions, $f'=u_x+iv_x$ |
| 2.3 | Harmonic functions and conformality | Build harmonic conjugates and explain angle preservation | Laplace's equation, harmonic conjugate, conformality of holomorphic maps ($f'\neq0$) |

**Boss problem 2:** Show $u(x,y)=x^3-3xy^2$ is harmonic, find a harmonic conjugate $v$, and identify the resulting holomorphic $f=u+iv$ as a familiar function of $z$. Then verify $f$ is conformal wherever $f'\neq0$ and say what goes wrong at the exceptional point — bridging to the Laplace/Dirichlet application in Module 7.

### Module 3: Power series

Analytic functions, built from `real-analysis`'s convergence theory.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Complex power series and analytic functions | Find the radius of convergence and differentiate a series term by term | radius of convergence, Cauchy–Hadamard, uniform convergence on compact subsets, term-by-term differentiation |
| 3.2 | The elementary functions as power series | Build $e^z,\sin z,\cos z,\log(1+z)$ as series and prove Euler's formula rigorously | $\exp$/$\sin$/$\cos$ series, Euler's formula, term-by-term identities, the geometric series as a tool |

**Boss problem 3:** Starting from $e^z=\sum z^n/n!$, prove $e^{iz}=\cos z+i\sin z$ by rearranging the (absolutely convergent) series, then use it to derive $\cos^2 z+\sin^2 z=1$ as a series identity. Find the radius of convergence of $\sum n^2 z^n$ and of $\sum z^n/n^2$, and say what happens on the boundary circle for each.

### Module 4: Cauchy's theory of integration

The theorems that make complex analysis unreasonably powerful.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Contour integrals | Parametrize a contour, compute $\int_\gamma f\,dz$, and bound it | contour/path, $\int_\gamma f\,dz$, path independence for antiderivatives, ML-inequality |
| 4.2 | The Cauchy–Goursat theorem | Prove that a holomorphic function integrates to zero around a closed contour | Goursat's triangle lemma, convex regions, existence of antiderivatives, path independence |
| 4.3 | The Cauchy integral formula | Recover a function's interior values from its boundary values | Cauchy integral formula, the $\tfrac{1}{2\pi i}\oint$ machine, mean-value property |
| 4.4 | Consequences: Liouville, Morera, and the FTA | Derive the theorems that follow almost for free | Cauchy's formula for derivatives, infinite differentiability, Cauchy estimates, Liouville, Fundamental Theorem of Algebra, Morera |

**Boss problem 4:** Compute $\oint_{|z|=2}\frac{e^z}{z(z-1)}\,dz$ two ways — by partial fractions + the Cauchy integral formula, and (later) by residues — and confirm they agree. Then prove the Fundamental Theorem of Algebra from Liouville's theorem, spelling out exactly where "bounded entire ⟹ constant" is used.

### Module 5: Series and singularities

Every holomorphic function is a power series — and its singularities are readable.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Taylor series: holomorphic = analytic | Prove holomorphic functions are locally their own Taylor series | Taylor's theorem in $\mathbb{C}$, radius = distance to nearest singularity, the identity theorem |
| 5.2 | Laurent series | Expand a function in an annulus, isolating its principal part | Laurent series, annulus of convergence, principal part, coefficient integrals |
| 5.3 | Zeros and singularities | Classify singularities and locate zeros | zeros and their order, removable / pole / essential singularities, Casorati–Weierstrass, meromorphic functions |

**Boss problem 5:** Find all Laurent expansions of $f(z)=\dfrac{1}{(z-1)(z-2)}$ — one for each annulus $|z|<1$, $1<|z|<2$, $|z|>2$ — and explain why the same function has three different series. Then classify the singularity of $e^{1/z}$ at $0$ and of $\dfrac{\sin z}{z}$ at $0$, justifying each from its Laurent series.

### Module 6: The residue calculus

The single most useful computational payoff of the whole theory.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 6.1 | The residue theorem | Reduce a contour integral to a sum of residues | residue as the $a_{-1}$ Laurent coefficient, the residue theorem, winding number (informally) |
| 6.2 | Computing residues and real integrals | Evaluate real definite integrals that resist real methods | residue formulas at poles, trigonometric integrals via $|z|=1$, improper integrals via semicircular contours, Jordan's lemma |
| 6.3 | The argument principle and Rouché's theorem | Count zeros and poles, and locate roots | argument principle, Rouché's theorem, counting roots in a region, stability of root counts |

**Boss problem 6:** Evaluate $\displaystyle\int_{-\infty}^{\infty}\frac{dx}{x^4+1}$ by closing a semicircular contour in the upper half-plane, being explicit about which poles are enclosed, that the arc's contribution vanishes, and how the residues sum. Then use Rouché's theorem to show all four zeros of $z^4+z+1$ lie in $|z|<\tfrac32$.

### Module 7: Conformal mapping

Where holomorphy becomes geometry you can steer.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 7.1 | Möbius transformations | Send three points to three points and map circles/lines to circles/lines | Möbius (fractional linear) maps, cross-ratio, circline preservation, the group structure |
| 7.2 | Conformal maps and the Riemann mapping theorem | Map standard regions onto each other and solve a Dirichlet problem | conformal equivalence, Riemann mapping theorem (statement), harmonic functions transported, Dirichlet problem on the disk |

**Boss problem 7:** Build the Möbius transformation carrying $1,\,i,\,-1$ to $0,\,1,\,\infty$ and show it maps the unit disk to a half-plane. Then use a conformal map plus the invariance of harmonic functions to solve a Dirichlet problem (steady-state temperature) on a region where a direct attack is hopeless — naming the bridge to the harmonic-conjugate work of Lesson 2.3.

## Sources of truth

- Ahlfors, *Complex Analysis* (definitions, the Goursat route to Cauchy's theorem, rigor level)
- Needham, *Visual Complex Analysis* (geometric intuition — multiplication as rotation, conformality, Möbius maps)
- Stein & Shakarchi, *Complex Analysis* (ordering, residue applications to real integrals)
