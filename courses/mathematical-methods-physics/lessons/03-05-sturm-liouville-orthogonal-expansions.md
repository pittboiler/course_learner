# Mathematical Methods for Physics · Lesson 3.5: Sturm–Liouville theory and orthogonal expansions

> ⏱ ~15 min · Module 3: Series solutions, special functions & Sturm–Liouville · Builds on: [3.4 Hermite functions](03-04-hermite-generating-functions.md), [3.2 Legendre & spherical harmonics](03-02-legendre-spherical-harmonics.md), [3.3 Bessel functions](03-03-bessel-functions.md) · Unlocks: [4.1 Fourier series and the Fourier transform](04-01-fourier-series-transform.md)

## Why this matters

Over the last three lessons the same miracle kept happening. A boundary problem spat out a family of special functions — Legendre $P_\ell$, Bessel $J_\nu$, Hermite $H_n$ — and each family turned out to be **orthogonal**, but each with its *own* weight: $P_\ell$ plain, $J_\nu$ weighted by $x$, $H_n$ weighted by $e^{-x^2}$. That was not luck, and the weights were not arbitrary. All three ODEs are instances of one master equation, the **Sturm–Liouville equation**, and a single theorem guarantees real eigenvalues, weighted orthogonality, and — the payoff — that you can expand *any* reasonable function in that family, exactly the way you expand a vector in an orthonormal basis. This lesson is the umbrella. Once you see it, ordinary Fourier series, Legendre series, Bessel series, and Hermite series stop being four tricks and become one.

## The idea

Remember from linear algebra: a **symmetric** matrix $A$ ($A^\top = A$) is special. Its eigenvalues are real, and eigenvectors for different eigenvalues are perpendicular — so they form an orthogonal basis, and you decompose any vector by *projecting onto each one*: $c_i = (\mathbf e_i\cdot\mathbf v)/(\mathbf e_i\cdot\mathbf e_i)$. No solving simultaneous equations; just take dot products, one at a time.

Sturm–Liouville theory is that story with the finite-dimensional vector $\mathbf v$ replaced by a *function* $f(x)$, and the matrix $A$ replaced by a certain differential operator. The role of "symmetric" is played by a property called **self-adjoint** (physicists say *Hermitian*): a differential operator that, under an integral, can be moved from one factor onto the other without leaving a trace. When an operator is self-adjoint, everything from the matrix case carries over — real eigenvalues, orthogonal eigenfunctions, projection to get coefficients. The one new wrinkle is that the "dot product" of two functions carries a **weight** $w(x)$, and *that* weight is exactly the $1$, $x$, or $e^{-x^2}$ you kept meeting.

## The formal version

**The Sturm–Liouville (SL) equation.** On an interval $[a,b]$,

$$\frac{\mathrm{d}}{\mathrm{d}x}\!\left[p(x)\,y'\right] + q(x)\,y + \lambda\,w(x)\,y = 0,$$

where $p(x)>0$ and the **weight** $w(x)>0$ on the open interval, $q(x)$ is real, and $\lambda$ is the **eigenvalue** we solve for. *In words: a second-order linear ODE written in one special "already-differentiated" form, with the unknown constant $\lambda$ multiplying a positive weight.* Rearranged as an eigenvalue problem it reads $\mathcal{L}y = \lambda y$ with the operator

$$\mathcal{L}\,y \equiv -\frac{1}{w(x)}\left[\frac{\mathrm{d}}{\mathrm{d}x}\!\big(p\,y'\big) + q\,y\right],$$

the continuous analog of "$A\mathbf v = \lambda\mathbf v$." **Any** second-order linear ODE $a(x)y'' + b(x)y' + [\,c(x) + \lambda d(x)\,]y = 0$ can be *put* into SL form: multiply through by the integrating factor

$$\mu(x) = \frac{1}{a(x)}\exp\!\left(\int \frac{b(x)}{a(x)}\,\mathrm{d}x\right), \qquad\text{giving}\qquad p = a\mu,\quad q = c\mu,\quad w = d\mu.$$

*In words: there is a recipe that finds the weight for you — you never have to guess it.*

**Boundary conditions.** They must make the operator self-adjoint, which concretely means the boundary term $\big[p(u'v - uv')\big]_a^b$ vanishes for any two candidate functions $u,v$. This holds for Dirichlet ($y=0$), Neumann ($y'=0$), periodic, or **natural** conditions where $p(x)\to 0$ at an endpoint (which is precisely why Legendre works on $[-1,1]$, where $p=1-x^2$ vanishes at $\pm1$, and Bessel on $[0,a]$, where $p=x$ vanishes at $0$ — no explicit condition needed there, boundedness does the job).

**The weighted inner product.** Define, for two functions on $[a,b]$,

$$\langle f, g\rangle_w \equiv \int_a^b f(x)\,g(x)\,w(x)\,\mathrm{d}x.$$

*In words: the dot product of functions, with a built-in weighting $w$.* Then the three theorems (state and trust — the proofs are the symmetric-matrix proofs, upgraded):

1. **Real, ordered eigenvalues.** The eigenvalues $\lambda_n$ are all real and form an increasing sequence $\lambda_1 < \lambda_2 < \cdots \to \infty$ with no upper bound. *(Just like a real symmetric matrix has a real spectrum — but now infinitely many, marching off to infinity.)*
2. **Weighted orthogonality.** Eigenfunctions for distinct eigenvalues are orthogonal in $\langle\cdot,\cdot\rangle_w$:
$$\langle y_m, y_n\rangle_w = \int_a^b y_m\,y_n\,w\,\mathrm{d}x = 0 \qquad (m\ne n).$$
3. **Completeness.** The $\{y_n\}$ form a basis: any reasonable $f$ (piecewise smooth, say) expands as a **generalized Fourier series**
$$f(x) = \sum_{n} c_n\,y_n(x), \qquad c_n = \frac{\langle f, y_n\rangle_w}{\langle y_n, y_n\rangle_w} = \frac{\int_a^b f\,y_n\,w\,\mathrm{d}x}{\int_a^b y_n^2\,w\,\mathrm{d}x}.$$

*In words: to find how much of $y_n$ is in $f$, project $f$ onto $y_n$ with the weighted dot product and divide by $y_n$'s own norm* — identical to $c_i = (\mathbf e_i\cdot\mathbf v)/(\mathbf e_i\cdot\mathbf e_i)$, one coefficient at a time.

Where the coefficient formula comes from is worth seeing once. Assume $f = \sum_n c_n y_n$, take the weighted inner product of both sides with a fixed $y_m$, and use orthogonality to kill every term except $n=m$:

$$\langle f, y_m\rangle_w = \sum_n c_n\,\underbrace{\langle y_n, y_m\rangle_w}_{=\,0\ \text{unless } n=m} = c_m\,\langle y_m, y_m\rangle_w \;\Longrightarrow\; c_m = \frac{\langle f, y_m\rangle_w}{\langle y_m, y_m\rangle_w}.$$

**The unification.** Every special function from this module is an SL eigenproblem — read off $p, q, w$:

| System | ODE | $p$ | $q$ | $w$ (weight) | $\lambda$ | interval |
|---|---|---|---|---|---|---|
| Fourier (sines) | $y'' + \lambda y = 0$ | $1$ | $0$ | $1$ | $(n\pi/L)^2$ | $[0,L]$ |
| Legendre | $(1-x^2)y'' - 2xy' + \lambda y = 0$ | $1-x^2$ | $0$ | $1$ | $\ell(\ell+1)$ | $[-1,1]$ |
| Bessel (order $\nu$) | $x^2y'' + xy' + (\lambda x^2 - \nu^2)y = 0$ | $x$ | $-\nu^2/x$ | $x$ | $k^2$ | $[0,a]$ |
| Hermite | $y'' - 2xy' + \lambda y = 0$ | $e^{-x^2}$ | $0$ | $e^{-x^2}$ | $2n$ | $(-\infty,\infty)$ |

*That column of weights $1, 1, x, e^{-x^2}$ is exactly the set of orthogonality weights you met in 3.2–3.4.* They were never ad hoc — they are $w = d\mu$ from the integrating-factor recipe.

## Picture

![Left: the first three orthogonal sine eigenfunctions on an interval [a,b], stacked, satisfying the weighted-orthogonality relation. Right: a schematic of expanding f as a sum of eigenfunctions and extracting each coefficient by projection, paralleled with the finite-dimensional vector formula.](assets/03-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — the recipe finds the weight).** Put the Bessel equation into SL form and confirm the weight is $x$. Start from $x^2y'' + xy' + (k^2x^2 - \nu^2)y = 0$ and divide by $x$ to expose the leading coefficient $a = x$:

$$x\,y'' + y' + \Big(k^2x - \tfrac{\nu^2}{x}\Big)y = 0.$$

Here $a = x$, $b = 1$. The integrating factor is $\mu = \tfrac1a\exp\!\big(\int \tfrac{b}{a}\,\mathrm{d}x\big) = \tfrac1x\exp\!\big(\int\tfrac1x\,\mathrm{d}x\big) = \tfrac1x\cdot x = 1$. So already $p = a\mu = x$, and the eigenvalue term $k^2 x\,y$ has $d = x$, giving $w = d\mu = x$. The SL form is

$$\frac{\mathrm{d}}{\mathrm{d}x}\big[x\,y'\big] - \frac{\nu^2}{x}\,y + k^2\,x\,y = 0,$$

and the orthogonality it guarantees, $\int_0^a J_\nu(k_m x)\,J_\nu(k_n x)\,x\,\mathrm{d}x = 0$ for distinct zeros, is precisely the weighted-by-$x$ relation from [3.3](03-03-bessel-functions.md). The theory *derived* the weight you had to take on faith before.

**Example 2 (why you'd care — a Legendre series in one projection).** Expand $f(x) = x^2$ on $[-1,1]$ in Legendre polynomials, whose weight is $w=1$. Because $f$ is even, only even $P_\ell$ appear, so $x^2 = c_0 P_0 + c_2 P_2$ with $P_0 = 1$, $P_2 = \tfrac12(3x^2 - 1)$. Use $c_\ell = \langle x^2, P_\ell\rangle / \langle P_\ell, P_\ell\rangle$ with $\langle P_\ell, P_\ell\rangle = \tfrac{2}{2\ell+1}$ (from 3.2). For $\ell = 2$,

$$\langle x^2, P_2\rangle = \int_{-1}^{1} x^2\cdot\tfrac12(3x^2 - 1)\,\mathrm{d}x = \tfrac12\!\left(3\cdot\tfrac25 - \tfrac23\right) = \tfrac12\cdot\tfrac{8}{15} = \tfrac{4}{15}, \quad c_2 = \frac{4/15}{2/5} = \frac23.$$

For $\ell = 0$, $\langle x^2, P_0\rangle = \int_{-1}^1 x^2\,\mathrm{d}x = \tfrac23$ and $\langle P_0, P_0\rangle = 2$, so $c_0 = \tfrac13$. Hence $x^2 = \tfrac13 P_0 + \tfrac23 P_2$ — verify: $\tfrac13 + \tfrac23\cdot\tfrac12(3x^2-1) = \tfrac13 + x^2 - \tfrac13 = x^2$. ✓ This exact move — expand boundary data in $P_\ell$, fix coefficients by orthogonality — is how you solve a grounded-sphere electrostatics problem (Boss problem 3).

## Watch out

- **You might think orthogonality means $\int y_m y_n\,\mathrm{d}x = 0$.** Only for $w = 1$ (Fourier, Legendre). In general the *weight is inside the integral*: $\int y_m y_n\,w\,\mathrm{d}x = 0$. Drop $w$ for Bessel or Hermite and the integral is generally nonzero — you'd conclude, wrongly, that they aren't orthogonal.
- **You might forget to put the ODE in SL form before reading off the weight.** The weight is $w = d\mu$, and $\mu$ depends on the *whole* equation. Bessel's raw $x^2y''+\cdots$ hides its weight; only after dividing by $x$ does $w=x$ appear. When in doubt, run the integrating-factor recipe.
- **You might expect only finitely many eigenfunctions, as with an $n\times n$ matrix.** No — an SL problem has *infinitely* many, $\lambda_n\to\infty$. That is what makes the basis rich enough to represent an arbitrary function rather than just $n$-vectors.

## One-liner

> A self-adjoint operator $\tfrac1w[(py')' + qy]$ is the function-space version of a symmetric matrix: real eigenvalues, eigenfunctions orthogonal *under the weight $w$*, and any $f$ expandable by projecting onto each one — which is why Legendre, Bessel, Hermite, and Fourier were orthogonal all along.

## Problems

**P1 (🟢)** The Chebyshev equation is $(1-x^2)y'' - x\,y' + \lambda\,y = 0$ on $[-1,1]$. Put it in Sturm–Liouville form and read off $p(x)$ and the weight $w(x)$.

**P2 (🟡)** Expand $f(x) = x$ on $[-1,1]$ in Legendre polynomials (weight $w = 1$). Find the coefficients $c_\ell$ and identify the series. *(Recall $\langle P_\ell, P_\ell\rangle = 2/(2\ell+1)$ and $P_1 = x$.)*

**P3 (🔴, optional)** Starting from the SL equation, prove that eigenfunctions for distinct eigenvalues are orthogonal under $w$. Then specialize to $y'' + \lambda y = 0$ on $[0,L]$ with $y(0)=y(L)=0$ to recover $\int_0^L \sin\frac{m\pi x}{L}\sin\frac{n\pi x}{L}\,\mathrm{d}x = 0$ for $m\ne n$.

<details>
<summary>Solutions</summary>

**P1** Leading coefficient $a = 1-x^2$, first-order coefficient $b = -x$, eigenvalue coefficient $d = 1$. Integrating factor:

$$\mu = \frac{1}{1-x^2}\exp\!\left(\int \frac{-x}{1-x^2}\,\mathrm{d}x\right) = \frac{1}{1-x^2}\exp\!\left(\tfrac12\ln(1-x^2)\right) = \frac{(1-x^2)^{1/2}}{1-x^2} = (1-x^2)^{-1/2}.$$

Then $p = a\mu = (1-x^2)\cdot(1-x^2)^{-1/2} = (1-x^2)^{1/2} = \sqrt{1-x^2}$, and $w = d\mu = (1-x^2)^{-1/2} = 1/\sqrt{1-x^2}$. The SL form is $\dfrac{\mathrm{d}}{\mathrm{d}x}\big[\sqrt{1-x^2}\,y'\big] + \dfrac{\lambda}{\sqrt{1-x^2}}\,y = 0$.

*Check.* Expand: $\tfrac{\mathrm d}{\mathrm dx}[\sqrt{1-x^2}\,y'] = \sqrt{1-x^2}\,y'' - \tfrac{x}{\sqrt{1-x^2}}y'$. Multiply the whole SL equation by $\sqrt{1-x^2}$: $(1-x^2)y'' - x y' + \lambda y = 0$, the original. ✓ The weight $1/\sqrt{1-x^2}$ is the well-known Chebyshev orthogonality weight — and it blew up at $\pm1$ exactly where $p\to 0$, the natural-BC endpoints.

**P2** Since $f(x) = x = P_1(x)$ is already a single Legendre polynomial, orthogonality forces every other coefficient to vanish: $c_\ell = \langle x, P_\ell\rangle/\langle P_\ell,P_\ell\rangle = 0$ for $\ell\ne 1$ because $\langle P_1, P_\ell\rangle = 0$. For $\ell = 1$,

$$c_1 = \frac{\langle x, P_1\rangle}{\langle P_1, P_1\rangle} = \frac{\int_{-1}^1 x\cdot x\,\mathrm{d}x}{2/3} = \frac{2/3}{2/3} = 1.$$

So the "series" is just $x = P_1(x)$ — a one-term expansion.

*Check.* A function that already *is* a basis element must expand to itself; the projection machinery returns $c_1 = 1$ and nothing else, confirming the coefficient formula is consistent. Parity is a fast sanity test too: $x$ is odd, so only odd-$\ell$ (odd-parity) $P_\ell$ could appear, and here only $\ell=1$ survives. ✓

**P3** Let $y_m, y_n$ solve the SL equation with eigenvalues $\lambda_m\ne\lambda_n$, i.e. $(p y_m')' + q y_m = -\lambda_m w\,y_m$ and likewise for $n$. Multiply the first by $y_n$, the second by $y_m$, and subtract:

$$y_n(p y_m')' - y_m(p y_n')' = (\lambda_n - \lambda_m)\,w\,y_m y_n.$$

The left side is a perfect derivative — the Lagrange identity — since $\tfrac{\mathrm d}{\mathrm dx}\big[p(y_n y_m' - y_m y_n')\big] = y_n(py_m')' - y_m(py_n')'$ (the $p\,y_m'y_n'$ cross-terms cancel). Integrate over $[a,b]$:

$$\big[\,p(y_n y_m' - y_m y_n')\,\big]_a^b = (\lambda_n - \lambda_m)\int_a^b y_m y_n\,w\,\mathrm{d}x.$$

The self-adjoint boundary conditions make the left side vanish. Since $\lambda_n\ne\lambda_m$, we must have $\int_a^b y_m y_n\,w\,\mathrm{d}x = 0$. 

For the sine case: $p = 1$, $q = 0$, $w = 1$, eigenfunctions $y_n = \sin(n\pi x/L)$ with $\lambda_n = (n\pi/L)^2$. The boundary term $\big[y_n y_m' - y_m y_n'\big]_0^L$ vanishes because every $y_n$ is zero at both endpoints ($y_n(0)=y_n(L)=0$, Dirichlet). Distinct $m\ne n$ give distinct $\lambda$, so $\int_0^L \sin\frac{m\pi x}{L}\sin\frac{n\pi x}{L}\,\mathrm{d}x = 0$.

*Check.* Directly: $\sin A\sin B = \tfrac12[\cos(A-B) - \cos(A+B)]$, and $\int_0^L \cos\frac{(m\mp n)\pi x}{L}\,\mathrm{d}x = 0$ for integer $m\ne n$ since each cosine completes a whole number of half-periods. ✓ Same answer, but the SL argument got it without a single trig identity — and works identically for Legendre, Bessel, and Hermite.

</details>

## Flashback

**From Lesson 3.4 (Hermite functions):** Without integrating $x^2 e^{-x^2}$ directly, evaluate $\displaystyle\int_{-\infty}^{\infty} H_2(x)\,e^{-x^2}\,\mathrm{d}x$, where $H_2(x) = 4x^2 - 2$. *(Hint: $H_0 = 1$, and Hermite functions are orthogonal under the weight $e^{-x^2}$.)*

<details>
<summary>Solution</summary>

Write the integral as a weighted inner product against $H_0 = 1$:

$$\int_{-\infty}^{\infty} H_2(x)\,e^{-x^2}\,\mathrm{d}x = \int_{-\infty}^{\infty} H_2(x)\,H_0(x)\,e^{-x^2}\,\mathrm{d}x = \langle H_2, H_0\rangle_w.$$

Since $2\ne 0$, Sturm–Liouville orthogonality under $w = e^{-x^2}$ makes this **zero** — no integration needed.

*Check.* Brute force: $\int (4x^2 - 2)e^{-x^2}\,\mathrm{d}x = 4\cdot\tfrac{\sqrt\pi}{2} - 2\sqrt\pi = 2\sqrt\pi - 2\sqrt\pi = 0$, using $\int_{-\infty}^\infty e^{-x^2} = \sqrt\pi$ and $\int_{-\infty}^\infty x^2 e^{-x^2} = \tfrac{\sqrt\pi}{2}$. ✓ Orthogonality gave the answer in one line what the integral gave in three.

</details>

## Connections

- **Backward:** [3.2 Legendre](03-02-legendre-spherical-harmonics.md), [3.3 Bessel](03-03-bessel-functions.md), and [3.4 Hermite](03-04-hermite-generating-functions.md) were not three separate orthogonality facts — they are three rows of one table, each an SL eigenproblem whose weight ($1$, $x$, $e^{-x^2}$) the integrating-factor recipe reproduces exactly.
- **Forward:** [4.1 Fourier series and the Fourier transform](04-01-fourier-series-transform.md) is the plainest SL system of all ($p = 1$, $q = 0$, $w = 1$, sines and cosines) — so ordinary Fourier series are just this lesson's completeness theorem in its simplest costume. And Boss problem 3 uses Legendre orthogonality to fix the potential of a grounded sphere.
- **Sideways:** the self-adjoint operator here is the infinite-dimensional twin of the **symmetric-matrix eigenproblem** in [`linalg-refresher`](../../linalg-refresher/syllabus.md) — real spectrum, orthogonal eigenvectors, decomposition by projection. In [`quantum-mechanics`](../../quantum-mechanics/syllabus.md) this becomes physical law: observables are **Hermitian operators**, so their eigenvalues (measured values) are real and their eigenstates orthogonal — energy eigenfunctions of the harmonic oscillator are literally the Hermite functions of 3.4, expanded exactly as above.
