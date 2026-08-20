# Mathematical Methods for Physics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

This is a toolbox course, so this card is mostly **lookup**: the operators in
every coordinate system, the vector identities, the four special-function
families with their orthogonality relations, and the transform tables. Nobody
derives the spherical curl mid-problem — you look it up here and get back to the
physics. The one thing worth carrying in your head is the pattern: separate
variables → get a named ODE → its solutions are orthogonal under some weight →
expand your boundary data in them.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\nabla$ | the del operator — a vector of partial derivatives waiting for something to differentiate | [1.1](lessons/01-01-fields-grad-div-curl.md) |
| $\varphi$, $\mathbf F$ | a scalar field (one number per point) and a vector field (one arrow per point) | [1.1](lessons/01-01-fields-grad-div-curl.md) |
| $\nabla\varphi$, $\nabla\cdot\mathbf F$, $\nabla\times\mathbf F$ | slope, source density, swirl density | [1.1](lessons/01-01-fields-grad-div-curl.md) |
| $\nabla^2$ | Laplacian $\nabla\cdot\nabla$ — how far a point sits below its own neighborhood average | [1.4](lessons/01-04-curvilinear-coordinates.md) |
| $\mathrm{d}\mathbf l$, $\mathrm{d}\mathbf A$, $\mathrm{d}V$ | oriented tangent step, oriented area patch, volume box | [1.2](lessons/01-02-line-surface-volume-integrals.md) |
| $\oint$, $\oiint$ | integral over a **closed** curve / closed surface | [1.2](lessons/01-02-line-surface-volume-integrals.md) |
| $\hat{\mathbf n}$ | unit normal fixing a surface's orientation (outward, for a closed surface) | [1.2](lessons/01-02-line-surface-volume-integrals.md) |
| $h_i$, $\hat{\mathbf e}_i$ | scale factor (distance travelled per unit of coordinate $u_i$) and its unit direction | [1.4](lessons/01-04-curvilinear-coordinates.md) |
| $(\rho,\phi,z)$ | cylindrical: distance from the axis, angle around it, height | [1.4](lessons/01-04-curvilinear-coordinates.md) |
| $(r,\theta,\phi)$ | spherical, **physics convention**: radius, polar angle down from $z$, azimuth around $z$ | [1.4](lessons/01-04-curvilinear-coordinates.md) |
| $\partial_i$ | shorthand for $\partial/\partial x_i$ | [1.5](lessons/01-05-index-notation-cartesian-tensors.md) |
| $\delta_{ij}$ | Kronecker delta — "same axis?" $1$ if yes, $0$ if no | [1.5](lessons/01-05-index-notation-cartesian-tensors.md) |
| $\varepsilon_{ijk}$ | Levi–Civita symbol — "right-handed set?" $+1$ cyclic, $-1$ swapped, $0$ repeated | [1.5](lessons/01-05-index-notation-cartesian-tensors.md) |
| $T_{ij}$, $R_{ij}$ | a rank-2 Cartesian tensor and a rotation matrix | [1.5](lessons/01-05-index-notation-cartesian-tensors.md) |
| $z=x+iy$, $\bar z$ | a complex point and its conjugate | [2.1](lessons/02-01-analytic-functions-cauchy-riemann.md) |
| $u,v$ | the real and imaginary parts of $f(z)=u(x,y)+iv(x,y)$ | [2.1](lessons/02-01-analytic-functions-cauchy-riemann.md) |
| $u_x$, $v_y$ | subscript = partial derivative, so $u_x \equiv \partial u/\partial x$ | [2.1](lessons/02-01-analytic-functions-cauchy-riemann.md) |
| $\oint_C f(z)\,dz$ | contour integral; unless said otherwise $C$ runs **counterclockwise** | [2.2](lessons/02-02-contour-integrals-cauchy-theorem.md) |
| $a_n$, $a_{-1}$ | Laurent coefficients; $a_{-1}$ is the one that survives a loop | [2.3](lessons/02-03-singularities-laurent-residues.md) |
| $\operatorname{Res}_{z_0}f$ | residue of $f$ at $z_0$ — the loop integral divided by $2\pi i$ | [2.3](lessons/02-03-singularities-laurent-residues.md) |
| UHP / LHP | upper / lower half-plane, the two choices of closure arc | [2.4](lessons/02-04-real-integrals-by-residues.md) |
| $s$ (Frobenius) | the indicial exponent in $y=x^s\sum a_nx^n$ — **not** the Laplace variable | [3.1](lessons/03-01-power-series-frobenius.md) |
| $p_0$, $q_0$ | the values at $0$ of $p=xP$ and $q=x^2Q$, feeding the indicial equation | [3.1](lessons/03-01-power-series-frobenius.md) |
| $P_\ell(x)$, $P_\ell^m(x)$ | Legendre polynomial; associated Legendre function ($m$ is an **index**, not a power) | [3.2](lessons/03-02-legendre-spherical-harmonics.md) |
| $Y_\ell^m(\theta,\varphi)$ | spherical harmonic — the Fourier basis for functions on a sphere | [3.2](lessons/03-02-legendre-spherical-harmonics.md) |
| $J_\nu$, $Y_\nu$ | Bessel functions of the first kind (finite at $0$) and second kind (divergent at $0$) | [3.3](lessons/03-03-bessel-functions.md) |
| $\alpha_{\nu,n}$ | the $n$-th positive zero of $J_\nu$ — the cylindrical quantization condition | [3.3](lessons/03-03-bessel-functions.md) |
| $H_n(x)$ | Hermite polynomial, physicists' convention (leading coefficient $2^n$) | [3.4](lessons/03-04-hermite-generating-functions.md) |
| $g(x,t)$ | a generating function — one closed form packing a whole polynomial family | [3.4](lessons/03-04-hermite-generating-functions.md) |
| $p,q,w$ | the three Sturm–Liouville coefficient functions; $w$ is the **orthogonality weight** | [3.5](lessons/03-05-sturm-liouville-orthogonal-expansions.md) |
| $\langle f,g\rangle_w$ | weighted inner product $\int_a^b fgw\,\mathrm{d}x$ — the dot product of two functions | [3.5](lessons/03-05-sturm-liouville-orthogonal-expansions.md) |
| $\lambda$ | Sturm–Liouville eigenvalue in Module 3; a Lagrange multiplier in Module 5 | [3.5](lessons/03-05-sturm-liouville-orthogonal-expansions.md) |
| $\tilde f(k)$ | Fourier transform — the complex amplitude of wavenumber $k$ in $f$ | [4.1](lessons/04-01-fourier-series-transform.md) |
| $c_n$, $k_n$ | Fourier-series coefficient and its wavenumber $2\pi n/L$ | [4.1](lessons/04-01-fourier-series-transform.md) |
| $f \ast g$ | convolution — a smearing of one function by the other | [4.1](lessons/04-01-fourier-series-transform.md) |
| $\delta(x)$, $\delta^3(\mathbf r)$ | Dirac delta in 1D and 3D — an instruction to sample, not a value | [4.2](lessons/04-02-dirac-delta-distributions.md) |
| $H(x)$, $\theta(t)$ | Heaviside step: $0$ before, $1$ after. Its derivative is $\delta$ | [4.2](lessons/04-02-dirac-delta-distributions.md) |
| $F(s)=\mathcal{L}\{f\}$ | Laplace transform; $s$ is a complex decay rate, **not** the Frobenius exponent | [4.3](lessons/04-03-laplace-transform-ivp.md) |
| $G(x,x')$, $G(t-t')$ | Green's function — the system's response to a unit kick at $x'$ (or $t'$) | [4.4](lessons/04-04-greens-functions.md) |
| $\tilde G(\omega)$ | transfer function — the Fourier transform of the impulse response | [4.4](lessons/04-04-greens-functions.md) |
| $\gamma$, $\omega_0$, $\omega_d$ | damping rate, natural frequency, damped frequency $\sqrt{\omega_0^2-\gamma^2}$ | [4.4](lessons/04-04-greens-functions.md) |
| $J[y]$ | a functional — square brackets mean "eats a whole function, returns a number" | [5.1](lessons/05-01-calculus-of-variations-euler-lagrange.md) |
| $L(x,y,y')$ | the integrand (Lagrangian); its three slots are treated as independent | [5.1](lessons/05-01-calculus-of-variations-euler-lagrange.md) |
| $\eta(x)$, $\varepsilon$ | the trial wiggle (zero at fixed endpoints) and the small dial scaling it | [5.1](lessons/05-01-calculus-of-variations-euler-lagrange.md) |
| $R[y]$ | Rayleigh quotient — "energy" of $y$ over its weighted size | [5.2](lessons/05-02-constraints-variational-estimates.md) |
| $G$, $\ast$, $e$ | a group, its composition law, and its identity element | [5.3](lessons/05-03-groups-symmetry.md) |
| $D_4$, $SO(2)$, $SO(3)$ | symmetries of a square; rotations of the plane; rotations of 3D space | [5.3](lessons/05-03-groups-symmetry.md) |
| $D(g)$ | a representation — the matrix that group element $g$ acts by | [5.3](lessons/05-03-groups-symmetry.md) |

## Definitions

### Gradient

Which way is steepest uphill, and how steep. Points perpendicular to the level
surfaces $\varphi=\text{const}$; eats a scalar, returns a vector.

$$\nabla\varphi=\left(\partial_x\varphi,\ \partial_y\varphi,\ \partial_z\varphi\right)$$

*Introduced:* [1.1](lessons/01-01-fields-grad-div-curl.md)

### Divergence

Net outward flow per unit volume at a point — the local **source strength**.
Positive is a source, negative a sink. Eats a vector, returns a scalar.

$$\nabla\cdot\mathbf F=\partial_xF_x+\partial_yF_y+\partial_zF_z$$

*Introduced:* [1.1](lessons/01-01-fields-grad-div-curl.md)

### Curl

Would a tiny paddlewheel dropped here spin? Circulation per unit area, pointing
along the spin axis by the right-hand rule. Eats a vector, returns a vector.

$$(\nabla\times\mathbf F)_i=\varepsilon_{ijk}\,\partial_jF_k$$

*Introduced:* [1.1](lessons/01-01-fields-grad-div-curl.md)

### Flux

How much of the field pierces straight through a surface, added patch by patch.
Meaningless until you say which way $\hat{\mathbf n}$ points.

$$\Phi=\iint_S\mathbf F\cdot\mathrm{d}\mathbf A=\iint_S\mathbf F\cdot\hat{\mathbf n}\,\mathrm{d}A$$

*Introduced:* [1.2](lessons/01-02-line-surface-volume-integrals.md)

### Circulation

How much the field pushes you along as you go once around a closed loop. Flips
sign if you walk the other way.

$$\oint_C\mathbf F\cdot\mathrm{d}\mathbf l$$

*Introduced:* [1.2](lessons/01-02-line-surface-volume-integrals.md)

### Conservative field

A field whose line integral depends only on the endpoints — so every closed loop
gives zero, and a potential exists. On a **simply connected** region these are
all the same statement:

$$\nabla\times\mathbf F=\mathbf 0 \iff \mathbf F=\nabla\varphi \iff \oint_C\mathbf F\cdot\mathrm{d}\mathbf l=0\ \forall C \iff \text{work is path-independent}$$

*Introduced:* [1.2](lessons/01-02-line-surface-volume-integrals.md), completed in [1.3](lessons/01-03-integral-theorems.md)

### Scale factor

How far you physically move per unit turn of a coordinate knob. It is the length
of the tangent to the coordinate curve, and it is what every curvilinear operator
formula is built from.

$$h_i=\left\lvert\frac{\partial\mathbf r}{\partial u_i}\right\rvert,\qquad \hat{\mathbf e}_i=\frac{1}{h_i}\frac{\partial\mathbf r}{\partial u_i}$$

*Introduced:* [1.4](lessons/01-04-curvilinear-coordinates.md)

### Einstein summation convention

If an index appears twice in one term, sum it over $1,2,3$ and stop writing the
sigma. A repeated index is a **dummy** (rename freely); an unrepeated one is
**free** and must match across the equals sign. Three occurrences is illegal.

$$a_ib_i\equiv\sum_{i=1}^{3}a_ib_i$$

*Introduced:* [1.5](lessons/01-05-index-notation-cartesian-tensors.md)

### Rank-2 Cartesian tensor

A nine-component object that turns one vector into another linearly — and, to
earn the name, transforms with one rotation matrix per index. Inertia, stress,
and polarizability are the standard examples.

$$T'_{ij}=R_{ik}R_{jl}\,T_{kl},\qquad L_i=I_{ij}\omega_j,\quad t_i=\sigma_{ij}n_j,\quad p_i=\alpha_{ij}E_j$$

*Introduced:* [1.5](lessons/01-05-index-notation-cartesian-tensors.md)

### Analytic

Complex-differentiable on a whole open **disk** around the point, not just at it.
The derivative must come out the same from every approach direction — a wildly
stronger demand than real differentiability, and the source of all the rigidity.

*Introduced:* [2.1](lessons/02-01-analytic-functions-cauchy-riemann.md)

### Harmonic conjugate

The partner $v$ that completes a harmonic $u$ into an analytic $f=u+iv$. Both
parts of an analytic function automatically solve Laplace's equation, and the
curves $u=\text{const}$ and $v=\text{const}$ cross at right angles.

$$\nabla^2u=\nabla^2v=0$$

*Introduced:* [2.1](lessons/02-01-analytic-functions-cauchy-riemann.md)

### Conformal map

An analytic map preserves angles wherever $f'(z)\neq0$, because near such a point
it acts as multiplication by one complex number — a uniform scale-and-rotate that
treats every direction alike.

*Introduced:* [2.1](lessons/02-01-analytic-functions-cauchy-riemann.md)

### Contour integral

An ordinary line integral wearing complex clothing: parametrize the path and let
$\mathrm{d}z=z'(t)\,\mathrm{d}t$.

$$\int_Cf(z)\,\mathrm{d}z=\int_a^bf\big(z(t)\big)\,z'(t)\,\mathrm{d}t$$

*Introduced:* [2.2](lessons/02-02-contour-integrals-cauchy-theorem.md)

### Laurent series

A Taylor series allowed negative powers, valid on an annulus. The negative-power
part (the **principal part**) is the fingerprint of the singularity.

$$f(z)=\sum_{n=-\infty}^{\infty}a_n(z-z_0)^n,\qquad a_n=\frac{1}{2\pi i}\oint_C\frac{f(z)}{(z-z_0)^{n+1}}\,\mathrm{d}z$$

*Introduced:* [2.3](lessons/02-03-singularities-laurent-residues.md)

### Residue

The single Laurent coefficient $a_{-1}$ — the only power a closed loop can't
kill, and therefore the only thing a contour integral remembers.

$$\operatorname{Res}_{z_0}f\equiv a_{-1}=\frac{1}{2\pi i}\oint_Cf(z)\,\mathrm{d}z$$

*Introduced:* [2.3](lessons/02-03-singularities-laurent-residues.md)

### Isolated singularity

Three flavors, sorted by how many negative powers the Laurent series carries:
**removable** (none — the trouble is cosmetic, like $\sin z/z$ at $0$), **pole of
order $m$** (finitely many, lowest term $a_{-m}(z-z_0)^{-m}$), **essential**
(infinitely many, like $e^{1/z}$ at $0$).

*Introduced:* [2.3](lessons/02-03-singularities-laurent-residues.md)

### Ordinary point

A point where both coefficients of $y''+P(x)y'+Q(x)y=0$ are analytic, so a plain
power series works. Otherwise the point is **singular**, and it is **regular
singular** if $p=xP$ and $q=x^2Q$ are both analytic there — meaning $P$ blows up
no worse than $1/x$ and $Q$ no worse than $1/x^2$.

*Introduced:* [3.1](lessons/03-01-power-series-frobenius.md)

### Indicial equation

The little quadratic the leading power must satisfy at a regular singular point.
Its two roots decide the whole qualitative structure of the solution before you
compute a single coefficient.

$$s(s-1)+p_0s+q_0=0$$

*Introduced:* [3.1](lessons/03-01-power-series-frobenius.md)

### Legendre polynomial

The degree-$\ell$ polynomial that survives when the sphere's polar equation is
forced to terminate — otherwise the series diverges at the poles. Normalized so
$P_\ell(1)=1$; parity $(-1)^\ell$; exactly $\ell$ zeros in $(-1,1)$.

$$(1-x^2)y''-2xy'+\ell(\ell+1)y=0,\qquad x=\cos\theta$$

*Introduced:* [3.2](lessons/03-02-legendre-spherical-harmonics.md)

### Spherical harmonic

The complete set of angular shapes on a sphere: an associated Legendre function
in the polar angle times a plain wave in the azimuth. These are the
orbital-angular-momentum eigenstates and the multipole radiation patterns.

$$Y_\ell^m(\theta,\varphi)=N_{\ell m}\,P_\ell^m(\cos\theta)\,e^{im\varphi},\qquad \lvert m\rvert\le\ell$$

*Introduced:* [3.2](lessons/03-02-legendre-spherical-harmonics.md)

### Bessel function

What cylindrical symmetry produces: a damped, unevenly-spaced cosine in the
radial direction. $J_\nu$ is finite at the axis (keep it whenever $r=0$ is in
your domain); $Y_\nu$ diverges there (keep it only for annular regions).

$$x^2y''+xy'+(x^2-\nu^2)y=0,\qquad x=kr$$

*Introduced:* [3.3](lessons/03-03-bessel-functions.md)

### Hermite polynomial

The polynomial factor left after peeling a Gaussian off the quantum oscillator.
It must terminate or the wavefunction blows up — and that forced termination
*is* energy quantization.

$$y''-2xy'+2ny=0,\qquad \psi_n=N_nH_n(x)e^{-x^2/2}$$

*Introduced:* [3.4](lessons/03-04-hermite-generating-functions.md)

### Generating function

One closed-form expression whose power-series coefficients are an entire
polynomial family. Differentiate it once in each variable and every recurrence
relation falls out mechanically.

*Introduced:* [3.4](lessons/03-04-hermite-generating-functions.md)

### Sturm–Liouville equation

The master eigenproblem behind every special function in this course: a
second-order ODE written in "already-differentiated" self-adjoint form, with the
eigenvalue multiplying a positive weight.

$$\frac{\mathrm{d}}{\mathrm{d}x}\big[p(x)y'\big]+q(x)y+\lambda w(x)y=0,\qquad p>0,\ w>0$$

*Introduced:* [3.5](lessons/03-05-sturm-liouville-orthogonal-expansions.md)

### Weight function

The $w(x)$ that must sit inside the integral for orthogonality to hold. It is not
a convention or a fudge — it is whatever the integrating-factor recipe produces
when you put the ODE in self-adjoint form.

$$\langle f,g\rangle_w=\int_a^bf(x)g(x)w(x)\,\mathrm{d}x$$

*Introduced:* [3.5](lessons/03-05-sturm-liouville-orthogonal-expansions.md)

### Generalized Fourier series

Expanding a function in an orthogonal eigenfunction family, one coefficient at a
time by projection — exactly how you decompose a vector in an orthogonal basis.

$$f=\sum_nc_ny_n,\qquad c_n=\frac{\langle f,y_n\rangle_w}{\langle y_n,y_n\rangle_w}$$

*Introduced:* [3.5](lessons/03-05-sturm-liouville-orthogonal-expansions.md)

### Fourier transform

A function's recipe of pure waves: $\tilde f(k)$ says how much of wavenumber $k$
is present, in both magnitude and phase. Stretch a Fourier series' period to
infinity and the discrete mode sum becomes this integral.

$$\tilde f(k)=\int_{-\infty}^{\infty}f(x)e^{-ikx}\,\mathrm{d}x,\qquad f(x)=\frac{1}{2\pi}\int_{-\infty}^{\infty}\tilde f(k)e^{ikx}\,\mathrm{d}k$$

*Introduced:* [4.1](lessons/04-01-fourier-series-transform.md)

### Convolution

A smearing of one function by another — blur, filter, or "sum of all past
kicks." Under either transform it becomes a plain product.

$$(f\ast g)(x)=\int_{-\infty}^{\infty}f(x')\,g(x-x')\,\mathrm{d}x'$$

*Introduced:* [4.1](lessons/04-01-fourier-series-transform.md)

### Dirac delta

Not a function but an **instruction**: "reach into this integral and hand back
the value of whatever multiplies me, at my center." The sifting property is the
definition; everything else is bookkeeping.

$$\int_{-\infty}^{\infty}f(x)\,\delta(x-a)\,\mathrm{d}x=f(a)$$

*Introduced:* [4.2](lessons/04-02-dirac-delta-distributions.md)

### Distribution

An object defined by how it acts inside an integral against smooth test
functions, rather than by any pointwise values. The delta is the first and most
important one.

*Introduced:* [4.2](lessons/04-02-dirac-delta-distributions.md)

### Laplace transform

The one-sided cousin of the Fourier transform, built for problems that start at a
definite moment. Its probe $e^{-st}$ captures decay and oscillation at once, and
its derivative rule drags the initial conditions in automatically.

$$F(s)=\mathcal{L}\{f\}(s)=\int_0^{\infty}f(t)\,e^{-st}\,\mathrm{d}t$$

*Introduced:* [4.3](lessons/04-03-laplace-transform-ivp.md)

### Green's function

The system's response to a single unit point kick. Solve for it once and every
source's response is the kicks superposed — $G$ is essentially the inverse of the
operator $L$.

$$L\,G(x,x')=\delta(x-x')\quad\Longrightarrow\quad u(x)=\int G(x,x')\,f(x')\,\mathrm{d}x' \text{ solves } Lu=f$$

*Introduced:* [4.4](lessons/04-04-greens-functions.md)

### Functional

A rule that eats an entire function and returns one number. Written with square
brackets to keep it distinct from an ordinary function of a number.

$$J[y]=\int_a^bL\big(x,y(x),y'(x)\big)\,\mathrm{d}x$$

*Introduced:* [5.1](lessons/05-01-calculus-of-variations-euler-lagrange.md)

### First variation

The derivative of $J$ with respect to the size of a wiggle, evaluated at zero
wiggle. Demanding it vanish for **every** allowed wiggle is the functional
analog of setting $f'(x)=0$.

$$\left.\frac{\mathrm{d}}{\mathrm{d}\varepsilon}J[y+\varepsilon\eta]\right|_{\varepsilon=0}=0,\qquad \eta(a)=\eta(b)=0$$

*Introduced:* [5.1](lessons/05-01-calculus-of-variations-euler-lagrange.md)

### Rayleigh quotient

The "energy" of a trial function divided by its weighted size. It equals the
eigenvalue at each eigenfunction, and for the lowest eigenvalue it is a genuine
minimum — so any trial function you feed it returns a rigorous **upper bound**.

$$R[y]=\frac{\int_a^b\left(p\,y'^2+q\,y^2\right)\mathrm{d}x}{\int_a^bw\,y^2\,\mathrm{d}x}\ \ge\ \lambda_{\min}$$

*Introduced:* [5.2](lessons/05-02-constraints-variational-estimates.md)

### Group

A set of transformations closed under composition, associative, containing a
"do-nothing," and with every move reversible. **Abelian** if order never matters.

$$\text{closure},\quad (a\ast b)\ast c=a\ast(b\ast c),\quad e\ast a=a,\quad a\ast a^{-1}=e$$

*Introduced:* [5.3](lessons/05-03-groups-symmetry.md)

### Representation

One concrete way to realize an abstract group's elements as matrices acting on
states, so that composition becomes matrix multiplication. The group is abstract;
a representation is a costume, and a group has many.

$$D(g_1)D(g_2)=D(g_1g_2)$$

*Introduced:* [5.3](lessons/05-03-groups-symmetry.md)

## Formulas and rules

### Vector identities

The product rules and second-derivative identities. All of them are two lines of
index pushing away — but you look them up, you don't re-derive them mid-problem.
Here $f,g$ are scalar fields and $\mathbf F,\mathbf G$ vector fields.

$$\nabla\times(\nabla f)=\mathbf 0,\qquad \nabla\cdot(\nabla\times\mathbf F)=0,\qquad \nabla\cdot(\nabla f)=\nabla^2f$$
$$\nabla(fg)=f\,\nabla g+g\,\nabla f$$
$$\nabla\cdot(f\mathbf F)=f\,(\nabla\cdot\mathbf F)+\mathbf F\cdot\nabla f$$
$$\nabla\times(f\mathbf F)=f\,(\nabla\times\mathbf F)+\nabla f\times\mathbf F$$
$$\nabla\cdot(\mathbf F\times\mathbf G)=\mathbf G\cdot(\nabla\times\mathbf F)-\mathbf F\cdot(\nabla\times\mathbf G)$$
$$\nabla\times(\nabla\times\mathbf F)=\nabla(\nabla\cdot\mathbf F)-\nabla^2\mathbf F$$
$$\mathbf a\times(\mathbf b\times\mathbf c)=\mathbf b\,(\mathbf a\cdot\mathbf c)-\mathbf c\,(\mathbf a\cdot\mathbf b)\qquad(\text{BAC--CAB})$$
$$(\mathbf a\times\mathbf b)\cdot(\mathbf c\times\mathbf d)=(\mathbf a\cdot\mathbf c)(\mathbf b\cdot\mathbf d)-(\mathbf a\cdot\mathbf d)(\mathbf b\cdot\mathbf c)\qquad(\text{Binet--Cauchy})$$

The first two are why $\mathbf B=\nabla\times\mathbf A$ automatically satisfies
$\nabla\cdot\mathbf B=0$, and why a conservative force does no work around a loop.

*From* [1.1](lessons/01-01-fields-grad-div-curl.md) *and* [1.5](lessons/01-05-index-notation-cartesian-tensors.md)

### Radial-field results worth memorizing

With $r=\lvert\mathbf r\rvert$ and $\hat{\mathbf r}=\mathbf r/r$:

| Expression | Value | Why you care |
|---|---|---|
| $\nabla\cdot\mathbf r$ | $3$ | the dimension of space — instant sanity check |
| $\nabla\times\mathbf r$ | $\mathbf 0$ | a purely radial field never swirls |
| $\nabla r$ | $\hat{\mathbf r}$ | steepest increase of distance is straight out |
| $\nabla(1/r)$ | $-\hat{\mathbf r}/r^2$ | the Coulomb/Newton field from its potential |
| $\nabla^2 r^n$ | $n(n+1)r^{n-2}$ | zero only for $n=0$ and $n=-1$ |
| $\nabla^2(1/r)$ | $-4\pi\,\delta^3(\mathbf r)$ | zero away from the origin, a point source at it |
| $\nabla\cdot(\hat{\mathbf r}/r^2)$ | $4\pi\,\delta^3(\mathbf r)$ | Gauss's law in one line |
| $\nabla\cdot\big[f(r)\hat{\mathbf r}\big]$ | $\dfrac{1}{r^2}\dfrac{\mathrm d}{\mathrm dr}\big(r^2f\big)$ | the collapsed radial divergence |

The two harmonic radial solutions ($n=0$ and $n=-1$) are the building blocks of
every spherically symmetric boundary problem.

*From* [1.4](lessons/01-04-curvilinear-coordinates.md), [1.3](lessons/01-03-integral-theorems.md) *and* [4.2](lessons/04-02-dirac-delta-distributions.md)

### Scale factors and volume elements

Everything curvilinear is generated by these three numbers per system.

| System | Coordinates | $(h_1,h_2,h_3)$ | Line element $\mathrm{d}s^2$ | $\mathrm{d}V$ |
|---|---|---|---|---|
| Cartesian | $(x,y,z)$ | $(1,1,1)$ | $\mathrm{d}x^2+\mathrm{d}y^2+\mathrm{d}z^2$ | $\mathrm{d}x\,\mathrm{d}y\,\mathrm{d}z$ |
| cylindrical | $(\rho,\phi,z)$ | $(1,\ \rho,\ 1)$ | $\mathrm{d}\rho^2+\rho^2\mathrm{d}\phi^2+\mathrm{d}z^2$ | $\rho\,\mathrm{d}\rho\,\mathrm{d}\phi\,\mathrm{d}z$ |
| spherical | $(r,\theta,\phi)$ | $(1,\ r,\ r\sin\theta)$ | $\mathrm{d}r^2+r^2\mathrm{d}\theta^2+r^2\sin^2\theta\,\mathrm{d}\phi^2$ | $r^2\sin\theta\,\mathrm{d}r\,\mathrm{d}\theta\,\mathrm{d}\phi$ |

Surface elements you actually use: the cylinder's side is
$\mathrm{d}A=\rho\,\mathrm{d}\phi\,\mathrm{d}z$; the sphere of radius $r$ has
$\mathrm{d}A=r^2\sin\theta\,\mathrm{d}\theta\,\mathrm{d}\phi=r^2\,\mathrm{d}\Omega$,
with the solid angle $\mathrm{d}\Omega=\sin\theta\,\mathrm{d}\theta\,\mathrm{d}\phi$
integrating to $\oint\mathrm{d}\Omega=4\pi$.

The general recipe, for any orthogonal system:

$$(\nabla f)_i=\frac{1}{h_i}\frac{\partial f}{\partial u_i},\qquad \nabla\cdot\mathbf F=\frac{1}{h_1h_2h_3}\left[\frac{\partial(h_2h_3F_1)}{\partial u_1}+\frac{\partial(h_3h_1F_2)}{\partial u_2}+\frac{\partial(h_1h_2F_3)}{\partial u_3}\right]$$

$$\nabla\times\mathbf F=\frac{1}{h_1h_2h_3}\begin{vmatrix}h_1\hat{\mathbf e}_1 & h_2\hat{\mathbf e}_2 & h_3\hat{\mathbf e}_3\\ \partial_{u_1} & \partial_{u_2} & \partial_{u_3}\\ h_1F_1 & h_2F_2 & h_3F_3\end{vmatrix},\qquad \nabla^2f=\frac{1}{h_1h_2h_3}\sum_i\frac{\partial}{\partial u_i}\!\left[\frac{h_1h_2h_3}{h_i^2}\frac{\partial f}{\partial u_i}\right]$$

*From* [1.4](lessons/01-04-curvilinear-coordinates.md)

### Vector operators in Cartesian coordinates

$$\nabla f=\partial_xf\,\hat{\mathbf x}+\partial_yf\,\hat{\mathbf y}+\partial_zf\,\hat{\mathbf z},\qquad \nabla\cdot\mathbf F=\partial_xF_x+\partial_yF_y+\partial_zF_z$$

$$\nabla\times\mathbf F=\begin{vmatrix}\hat{\mathbf x}&\hat{\mathbf y}&\hat{\mathbf z}\\ \partial_x&\partial_y&\partial_z\\ F_x&F_y&F_z\end{vmatrix}=\big(\partial_yF_z-\partial_zF_y,\ \partial_zF_x-\partial_xF_z,\ \partial_xF_y-\partial_yF_x\big)$$

$$\nabla^2f=\partial_x^2f+\partial_y^2f+\partial_z^2f$$

*From* [1.1](lessons/01-01-fields-grad-div-curl.md)

### Vector operators in cylindrical coordinates

Coordinates $(\rho,\phi,z)$, scale factors $(1,\rho,1)$.

$$\nabla f=\frac{\partial f}{\partial\rho}\,\hat{\boldsymbol\rho}+\frac{1}{\rho}\frac{\partial f}{\partial\phi}\,\hat{\boldsymbol\phi}+\frac{\partial f}{\partial z}\,\hat{\mathbf z}$$

$$\nabla\cdot\mathbf F=\frac{1}{\rho}\frac{\partial}{\partial\rho}\big(\rho F_\rho\big)+\frac{1}{\rho}\frac{\partial F_\phi}{\partial\phi}+\frac{\partial F_z}{\partial z}$$

$$\nabla\times\mathbf F=\left(\frac{1}{\rho}\frac{\partial F_z}{\partial\phi}-\frac{\partial F_\phi}{\partial z}\right)\hat{\boldsymbol\rho}+\left(\frac{\partial F_\rho}{\partial z}-\frac{\partial F_z}{\partial\rho}\right)\hat{\boldsymbol\phi}+\frac{1}{\rho}\left(\frac{\partial(\rho F_\phi)}{\partial\rho}-\frac{\partial F_\rho}{\partial\phi}\right)\hat{\mathbf z}$$

$$\nabla^2f=\frac{1}{\rho}\frac{\partial}{\partial\rho}\!\left(\rho\frac{\partial f}{\partial\rho}\right)+\frac{1}{\rho^2}\frac{\partial^2f}{\partial\phi^2}+\frac{\partial^2f}{\partial z^2}$$

Separating $\nabla^2u+k^2u=0$ here is what produces the Bessel equation.

*From* [1.4](lessons/01-04-curvilinear-coordinates.md)

### Vector operators in spherical coordinates

Coordinates $(r,\theta,\phi)$ with $\theta$ the **polar** angle from the
$z$-axis, scale factors $(1,r,r\sin\theta)$.

$$\nabla f=\frac{\partial f}{\partial r}\,\hat{\mathbf r}+\frac{1}{r}\frac{\partial f}{\partial\theta}\,\hat{\boldsymbol\theta}+\frac{1}{r\sin\theta}\frac{\partial f}{\partial\phi}\,\hat{\boldsymbol\phi}$$

$$\nabla\cdot\mathbf F=\frac{1}{r^2}\frac{\partial}{\partial r}\big(r^2F_r\big)+\frac{1}{r\sin\theta}\frac{\partial}{\partial\theta}\big(\sin\theta\,F_\theta\big)+\frac{1}{r\sin\theta}\frac{\partial F_\phi}{\partial\phi}$$

$$\nabla\times\mathbf F=\frac{1}{r\sin\theta}\left[\frac{\partial(\sin\theta\,F_\phi)}{\partial\theta}-\frac{\partial F_\theta}{\partial\phi}\right]\hat{\mathbf r}+\frac{1}{r}\left[\frac{1}{\sin\theta}\frac{\partial F_r}{\partial\phi}-\frac{\partial(rF_\phi)}{\partial r}\right]\hat{\boldsymbol\theta}+\frac{1}{r}\left[\frac{\partial(rF_\theta)}{\partial r}-\frac{\partial F_r}{\partial\theta}\right]\hat{\boldsymbol\phi}$$

$$\nabla^2f=\frac{1}{r^2}\frac{\partial}{\partial r}\!\left(r^2\frac{\partial f}{\partial r}\right)+\frac{1}{r^2\sin\theta}\frac{\partial}{\partial\theta}\!\left(\sin\theta\frac{\partial f}{\partial\theta}\right)+\frac{1}{r^2\sin^2\theta}\frac{\partial^2f}{\partial\phi^2}$$

For anything spherically symmetric the last two terms die and the whole Laplacian
collapses to one ordinary derivative,
$\nabla^2f(r)=\frac{1}{r^2}\frac{\mathrm d}{\mathrm dr}\!\left(r^2\frac{\mathrm df}{\mathrm dr}\right)$.
The two angular terms are the operator whose eigenfunctions are the spherical
harmonics.

*From* [1.4](lessons/01-04-curvilinear-coordinates.md)

### The integral theorems

Four statements of one sentence: **integrate a derivative over a region and you
get the field back on the region's boundary.**

$$\text{FTC for line integrals:}\quad \int_A^B\nabla\varphi\cdot\mathrm{d}\mathbf l=\varphi(B)-\varphi(A)$$
$$\text{Green:}\quad \oint_C(P\,\mathrm{d}x+Q\,\mathrm{d}y)=\iint_R\left(\frac{\partial Q}{\partial x}-\frac{\partial P}{\partial y}\right)\mathrm{d}A$$
$$\text{Stokes:}\quad \iint_S(\nabla\times\mathbf F)\cdot\mathrm{d}\mathbf A=\oint_C\mathbf F\cdot\mathrm{d}\mathbf l$$
$$\text{Divergence (Gauss):}\quad \iiint_V(\nabla\cdot\mathbf F)\,\mathrm{d}V=\oiint_S\mathbf F\cdot\mathrm{d}\mathbf A$$

**Orientation is part of each statement.** Green needs $C$ counterclockwise;
Gauss needs the outward normal; Stokes needs $C$'s direction and
$\mathrm{d}\mathbf A$ matched by the right-hand rule. All four require smoothness
throughout — enclose a singularity and they fail, which is precisely how Gauss's
law detects a point charge. Stokes works for **any** surface sharing the rim, so
pick the easiest cap.

*From* [1.3](lessons/01-03-integral-theorems.md)

### Index-notation toolkit

$$\mathbf a\cdot\mathbf b=a_ib_i,\quad (\mathbf a\times\mathbf b)_i=\varepsilon_{ijk}a_jb_k,\quad \nabla\cdot\mathbf F=\partial_iF_i,\quad (\nabla\times\mathbf F)_i=\varepsilon_{ijk}\partial_jF_k$$

$$\delta_{ii}=3,\qquad \delta_{ij}a_j=a_i,\qquad \varepsilon_{ijk}=\varepsilon_{jki}=\varepsilon_{kij}=-\varepsilon_{jik}$$

$$\boxed{\ \varepsilon_{ijk}\,\varepsilon_{ilm}=\delta_{jl}\delta_{km}-\delta_{jm}\delta_{kl}\ }\qquad \varepsilon_{ijk}\varepsilon_{ijk}=6,\qquad \varepsilon_{ijk}\varepsilon_{ljk}=2\delta_{il}$$

The shared index must sit **first** in both epsilons; cyclically rotate until it
does. The single most useful move in the subject: **an antisymmetric symbol
contracted with a symmetric object vanishes** — that one line proves both
$\nabla\times(\nabla\varphi)=\mathbf 0$ and $\nabla\cdot(\nabla\times\mathbf F)=0$,
because $\partial_j\partial_k$ is symmetric where $\varepsilon_{ijk}$ is not.

*From* [1.5](lessons/01-05-index-notation-cartesian-tensors.md)

### Complex analyticity

$$\text{Cauchy--Riemann:}\quad \frac{\partial u}{\partial x}=\frac{\partial v}{\partial y},\qquad \frac{\partial u}{\partial y}=-\frac{\partial v}{\partial x},\qquad f'(z)=u_x+iv_x$$

Satisfy these with continuous partials on an open set and $f$ is analytic there;
then $u$ and $v$ are both harmonic. To build the conjugate of a harmonic $u$:
integrate $v_y=u_x$ in $y$, then pin the leftover $g(x)$ with $v_x=-u_y$.

*From* [2.1](lessons/02-01-analytic-functions-cauchy-riemann.md)

### Contour integration

$$\oint_{\lvert z-a\rvert=\varepsilon}\frac{\mathrm{d}z}{z-a}=2\pi i\qquad\text{(the atom — every other power gives }0)$$
$$\text{Cauchy--Goursat:}\quad \oint_Cf\,\mathrm{d}z=0\ \text{ if }f\text{ is analytic on and inside }C$$
$$\text{Deformation:}\quad \oint_{C_1}f\,\mathrm{d}z=\oint_{C_2}f\,\mathrm{d}z\ \text{ if }f\text{ is analytic between them}$$
$$\text{Cauchy integral formula:}\quad f(z_0)=\frac{1}{2\pi i}\oint_C\frac{f(z)}{z-z_0}\,\mathrm{d}z,\qquad f^{(n)}(z_0)=\frac{n!}{2\pi i}\oint_C\frac{f(z)}{(z-z_0)^{n+1}}\,\mathrm{d}z$$
$$\text{ML bound:}\quad \left\lvert\int_Cf\,\mathrm{d}z\right\rvert\le M\,L\quad(\lvert f\rvert\le M\text{ on }C,\ \text{length }L)$$

*From* [2.2](lessons/02-02-contour-integrals-cauchy-theorem.md)

### Residues

$$\boxed{\ \oint_Cf(z)\,\mathrm{d}z=2\pi i\sum_{\text{enclosed }z_k}\operatorname{Res}_{z_k}f\ }$$

| Situation | Residue |
|---|---|
| simple pole | $\displaystyle\lim_{z\to z_0}(z-z_0)f(z)$ |
| simple pole of $p/q$, $q(z_0)=0$, $q'(z_0)\neq0$ | $\dfrac{p(z_0)}{q'(z_0)}$ — the fastest one, use it by default |
| pole of order $m$ | $\dfrac{1}{(m-1)!}\displaystyle\lim_{z\to z_0}\frac{\mathrm{d}^{m-1}}{\mathrm{d}z^{m-1}}\Big[(z-z_0)^mf(z)\Big]$ |
| essential singularity | no shortcut — read $a_{-1}$ off the Laurent series |

If $\lim(z-z_0)f$ blows up, the pole is not simple. A pole may perfectly well
have residue zero (e.g. $\cos z/z^2$ at the origin).

*From* [2.3](lessons/02-03-singularities-laurent-residues.md)

### Real integrals by contour — the three patterns

| Type | Integral | Closure and condition |
|---|---|---|
| 1. rational | $\displaystyle\int_{-\infty}^{\infty}\frac{P(x)}{Q(x)}\,\mathrm{d}x$ | close in the UHP; the arc dies iff $\deg Q\ge\deg P+2$. Answer $=2\pi i\sum_{\text{UHP}}\operatorname{Res}$ |
| 2. Fourier | $\displaystyle\int_{-\infty}^{\infty}f(x)e^{iax}\,\mathrm{d}x$, $a>0$ | close in the UHP; **Jordan's lemma** kills the arc if merely $f\to0$. For $a<0$ close **downward** and pick up $-2\pi i\sum_{\text{LHP}}$ |
| 3. trig | $\displaystyle\int_0^{2\pi}R(\cos\theta,\sin\theta)\,\mathrm{d}\theta$ | substitute $z=e^{i\theta}$; it is already a loop around $\lvert z\rvert=1$ |

For Type 3: $\cos\theta=\tfrac12(z+z^{-1})$, $\sin\theta=\tfrac{1}{2i}(z-z^{-1})$,
$\mathrm{d}\theta=\mathrm{d}z/(iz)$.

For $\cos ax$ or $\sin ax$, integrate $e^{iax}$ and take $\operatorname{Re}$ or
$\operatorname{Im}$ **at the end** — never put $\cos z$ on the arc, it grows
exponentially off the real axis. A pole sitting **on** the contour is handled by
indenting around it with a small semicircle, which contributes
$\pm i\pi\operatorname{Res}$ (half a residue, sign set by which way you detour),
and gives the Cauchy principal value. Multivalued integrands ($\sqrt z$, $\ln z$)
need a keyhole contour around the branch cut.

Worked results you can reuse:
$\int_{-\infty}^{\infty}\frac{\mathrm{d}x}{x^2+a^2}=\frac{\pi}{a}$,
$\int_{-\infty}^{\infty}\frac{\mathrm{d}x}{x^4+1}=\frac{\pi}{\sqrt2}$,
$\int_{-\infty}^{\infty}\frac{\cos x}{x^2+a^2}\,\mathrm{d}x=\frac{\pi}{a}e^{-a}$,
$\int_0^{2\pi}\frac{\mathrm{d}\theta}{a+b\cos\theta}=\frac{2\pi}{\sqrt{a^2-b^2}}$ for $a>b>0$.

*From* [2.4](lessons/02-04-real-integrals-by-residues.md)

### Series solutions of ODEs

For $y''+P(x)y'+Q(x)y=0$ near $x=0$:

| Test | Verdict | Method |
|---|---|---|
| $P,Q$ both analytic at $0$ | ordinary point | plain power series $y=\sum a_nx^n$; $a_0,a_1$ free |
| $p=xP$ and $q=x^2Q$ both analytic at $0$ | regular singular | Frobenius $y=x^s\sum a_nx^n$, $a_0\neq0$ |
| either blows up faster | irregular singular | out of scope |

Indicial equation $s(s-1)+p_0s+q_0=0$ with $p_0=p(0)$, $q_0=q(0)$; roots
$s_1\ge s_2$:

- $s_1-s_2$ **not** an integer → two clean Frobenius series, no logs.
- $s_1=s_2$ → one series; the second solution needs a $\ln x$ term.
- $s_1-s_2$ a positive integer → the larger root always works; the smaller may
  need a $\ln x$ term (check).

Always **reindex** every sum to a common power of $x$ before collecting
coefficients. A recurrence linking $a_{n+2}$ to $a_{n-1}$ has step size $3$, and
so on — the step size is set by which terms the ODE couples.

**Termination is quantization.** When the recurrence's numerator can be made to
vanish, the series stops and becomes a polynomial; that is the only way to keep
the solution finite/normalizable, and it forces the separation constant to take
integer values. This is where $\ell$, $n$, and every quantum number come from.

*From* [3.1](lessons/03-01-power-series-frobenius.md)

### The special functions at a glance

Every row is one Sturm–Liouville eigenproblem. Read off the weight and you know
the orthogonality integral.

| Family | ODE | Interval | $p$ | $w$ | $\lambda$ | Where it shows up |
|---|---|---|---|---|---|---|
| Fourier (sines) | $y''+\lambda y=0$ | $[0,L]$ | $1$ | $1$ | $(n\pi/L)^2$ | string, box, any flat 1D boundary problem |
| Legendre $P_\ell$ | $(1-x^2)y''-2xy'+\lambda y=0$ | $[-1,1]$ | $1-x^2$ | $1$ | $\ell(\ell+1)$ | polar angle in **spherical** problems: charged sphere, planet, hydrogen, multipoles |
| Bessel $J_\nu$ | $x^2y''+xy'+(\lambda x^2-\nu^2)y=0$ | $[0,a]$ | $x$ | $x$ | $k^2$ | radius in **cylindrical** problems: drumhead, waveguide, coaxial cable, circular aperture |
| Hermite $H_n$ | $y''-2xy'+\lambda y=0$ | $(-\infty,\infty)$ | $e^{-x^2}$ | $e^{-x^2}$ | $2n$ | the quantum **harmonic oscillator**: molecules, phonons, field modes |
| Chebyshev | $(1-x^2)y''-xy'+\lambda y=0$ | $[-1,1]$ | $\sqrt{1-x^2}$ | $1/\sqrt{1-x^2}$ | $n^2$ | approximation theory (worked as an exercise here) |

Notice the pattern: the interval ends where $p\to0$, and at such an endpoint mere
**boundedness** replaces an explicit boundary condition — which is exactly why
$Q_\ell$ and $Y_\nu$ get thrown away.

*From* [3.5](lessons/03-05-sturm-liouville-orthogonal-expansions.md)

### Legendre polynomials and spherical harmonics

$$P_0=1,\quad P_1=x,\quad P_2=\tfrac12(3x^2-1),\quad P_3=\tfrac12(5x^3-3x),\quad P_4=\tfrac18(35x^4-30x^2+3)$$

$$\text{Rodrigues:}\quad P_\ell(x)=\frac{1}{2^\ell\,\ell!}\frac{\mathrm{d}^\ell}{\mathrm{d}x^\ell}(x^2-1)^\ell$$
$$\text{Generating function:}\quad \frac{1}{\sqrt{1-2xt+t^2}}=\sum_{\ell=0}^{\infty}P_\ell(x)\,t^\ell,\qquad \lvert t\rvert<1$$
$$\text{Recurrence:}\quad (\ell+1)P_{\ell+1}(x)=(2\ell+1)\,x\,P_\ell(x)-\ell\,P_{\ell-1}(x)$$
$$\text{Orthogonality:}\quad \int_{-1}^{1}P_\ell(x)P_m(x)\,\mathrm{d}x=\frac{2}{2\ell+1}\,\delta_{\ell m}$$
$$\text{Expansion:}\quad f(x)=\sum_{\ell\ge0}c_\ell P_\ell(x),\qquad c_\ell=\frac{2\ell+1}{2}\int_{-1}^{1}f(x)P_\ell(x)\,\mathrm{d}x$$

Conventions and facts: $P_\ell(1)=1$, parity $P_\ell(-x)=(-1)^\ell P_\ell(x)$,
$\ell$ zeros in $(-1,1)$. The generating function **is** the multipole expansion,
with $t=r'/r$ and $x=\cos\gamma$:

$$\frac{1}{\lvert\mathbf r-\mathbf r'\rvert}=\frac1r\sum_{\ell=0}^{\infty}\left(\frac{r'}{r}\right)^\ell P_\ell(\cos\gamma)=\underbrace{\frac1r}_{\text{monopole}}+\underbrace{\frac{r'\cos\gamma}{r^2}}_{\text{dipole}}+\cdots$$

Associated Legendre functions and the harmonics themselves (Condon–Shortley phase
included; some books drop the $(-1)^m$):

$$P_\ell^m(x)=(-1)^m(1-x^2)^{m/2}\frac{\mathrm{d}^m}{\mathrm{d}x^m}P_\ell(x),\qquad P_\ell^0=P_\ell$$
$$Y_\ell^m(\theta,\varphi)=\sqrt{\frac{2\ell+1}{4\pi}\frac{(\ell-m)!}{(\ell+m)!}}\;P_\ell^m(\cos\theta)\,e^{im\varphi},\qquad \int\overline{Y_\ell^m}\,Y_{\ell'}^{m'}\,\mathrm{d}\Omega=\delta_{\ell\ell'}\delta_{mm'}$$

There are $2\ell+1$ harmonics per $\ell$ — the degeneracy the rotation group
forces.

*From* [3.2](lessons/03-02-legendre-spherical-harmonics.md)

### Bessel functions

$$J_\nu(x)=\sum_{m=0}^{\infty}\frac{(-1)^m}{m!\,\Gamma(m+\nu+1)}\left(\frac{x}{2}\right)^{2m+\nu}$$

Behavior at the two ends of the range:

| | near $x=0$ | for $x\gg1$ |
|---|---|---|
| $J_0$ | $\to1$ | $\sqrt{2/\pi x}\,\cos(x-\pi/4)$ |
| $J_\nu$, $\nu>0$ | $\to0$ like $x^\nu$ | $\sqrt{2/\pi x}\,\cos\!\big(x-\tfrac{\nu\pi}{2}-\tfrac{\pi}{4}\big)$ |
| $Y_0$ | $\to-\infty$ like $\tfrac{2}{\pi}\ln x$ | $\sqrt{2/\pi x}\,\sin(x-\pi/4)$ |
| $Y_\nu$, $\nu>0$ | $\to-\infty$ like $x^{-\nu}$ | $\sqrt{2/\pi x}\,\sin\!\big(x-\tfrac{\nu\pi}{2}-\tfrac{\pi}{4}\big)$ |

Recurrences and derivatives:

$$J_{\nu-1}(x)+J_{\nu+1}(x)=\frac{2\nu}{x}J_\nu(x),\qquad J_\nu'(x)=\tfrac12\big[J_{\nu-1}(x)-J_{\nu+1}(x)\big]$$
$$\frac{\mathrm d}{\mathrm dx}\big[x^{\nu}J_\nu(x)\big]=x^{\nu}J_{\nu-1}(x),\qquad \frac{\mathrm d}{\mathrm dx}\big[x^{-\nu}J_\nu(x)\big]=-x^{-\nu}J_{\nu+1}(x)$$
$$J_0'(x)=-J_1(x),\qquad J_1'(x)=J_0(x)-\tfrac1xJ_1(x),\qquad J_{-1}=-J_1$$

Zeros $\alpha_{\nu,n}$ (the quantization condition: a boundary at radius $a$
forces $ka=\alpha_{\nu,n}$, so $k_{\nu,n}=\alpha_{\nu,n}/a$):

| | $n=1$ | $n=2$ | $n=3$ |
|---|---|---|---|
| $J_0$ | $2.405$ | $5.520$ | $8.654$ |
| $J_1$ | $3.832$ | $7.016$ | $10.174$ |
| $J_2$ | $5.136$ | $8.417$ | $11.620$ |

They are **not** evenly spaced; the gaps approach $\pi$ only far out. The drum's
fundamental uses $\alpha_{0,1}$ and the next mode $\alpha_{1,1}$, giving the
inharmonic ratio $3.832/2.405=1.59$.

Orthogonality carries the disk's area weight $r$, giving the Fourier–Bessel series:

$$\int_0^aJ_\nu\!\Big(\alpha_{\nu,m}\tfrac{r}{a}\Big)J_\nu\!\Big(\alpha_{\nu,n}\tfrac{r}{a}\Big)\,r\,\mathrm{d}r=\frac{a^2}{2}\big[J_{\nu+1}(\alpha_{\nu,n})\big]^2\delta_{mn}$$
$$f(r)=\sum_{n\ge1}c_nJ_\nu\!\Big(\alpha_{\nu,n}\tfrac{r}{a}\Big),\qquad c_n=\frac{2}{a^2[J_{\nu+1}(\alpha_{\nu,n})]^2}\int_0^af(r)J_\nu\!\Big(\alpha_{\nu,n}\tfrac{r}{a}\Big)r\,\mathrm{d}r$$

*From* [3.3](lessons/03-03-bessel-functions.md)

### Hermite polynomials and the oscillator

$$H_0=1,\quad H_1=2x,\quad H_2=4x^2-2,\quad H_3=8x^3-12x,\quad H_4=16x^4-48x^2+12$$

$$\text{Rodrigues:}\quad H_n(x)=(-1)^ne^{x^2}\frac{\mathrm{d}^n}{\mathrm{d}x^n}e^{-x^2}$$
$$\text{Generating function:}\quad e^{2xt-t^2}=\sum_{n=0}^{\infty}H_n(x)\frac{t^n}{n!}$$
$$\text{Recurrences:}\quad H_{n+1}(x)=2x\,H_n(x)-2n\,H_{n-1}(x),\qquad H_n'(x)=2n\,H_{n-1}(x)$$
$$\text{Orthogonality:}\quad \int_{-\infty}^{\infty}H_m(x)H_n(x)\,e^{-x^2}\,\mathrm{d}x=2^n\,n!\,\sqrt\pi\;\delta_{mn}$$

Oscillator eigenfunctions and spectrum, in the dimensionless coordinate
$x=\sqrt{m\omega/\hbar}\,\tilde x$:

$$\psi_n(x)=N_nH_n(x)e^{-x^2/2},\qquad N_n=\big(2^n\,n!\,\sqrt\pi\big)^{-1/2},\qquad E_n=\left(n+\tfrac12\right)\hbar\omega$$

$\psi_n$ has exactly $n$ nodes and spreads **wider** with $n$. Leading coefficient
of $H_n$ is $2^n$; parity matches $n$. Physicists' convention throughout —
probabilists' $He_n$ uses $e^{xt-t^2/2}$ and weight $e^{-x^2/2}$, related by
$He_n(x)=2^{-n/2}H_n(x/\sqrt2)$.

*From* [3.4](lessons/03-04-hermite-generating-functions.md)

### Putting an ODE in Sturm–Liouville form

Given $a(x)y''+b(x)y'+[c(x)+\lambda d(x)]y=0$, the integrating factor finds the
weight for you — you never guess it:

$$\mu(x)=\frac{1}{a(x)}\exp\!\left(\int\frac{b(x)}{a(x)}\,\mathrm{d}x\right),\qquad p=a\mu,\quad q=c\mu,\quad w=d\mu$$

Then the three theorems: eigenvalues are **real** and increase without bound;
eigenfunctions for distinct eigenvalues are **orthogonal under $w$**; and the set
is **complete**, so any piecewise-smooth $f$ expands as
$f=\sum c_ny_n$ with $c_n=\langle f,y_n\rangle_w/\langle y_n,y_n\rangle_w$.
Admissible boundary conditions are any that kill
$\big[p(uv'-u'v)\big]_a^b$ — Dirichlet, Neumann, periodic, or natural ($p\to0$
at the endpoint, where boundedness alone suffices).

*From* [3.5](lessons/03-05-sturm-liouville-orthogonal-expansions.md)

### Fourier series and transform

$$\text{Series:}\quad f(x)=\sum_{n=-\infty}^{\infty}c_ne^{ik_nx},\quad k_n=\frac{2\pi n}{L},\quad c_n=\frac1L\int_{-L/2}^{L/2}f(x)e^{-ik_nx}\,\mathrm{d}x$$
$$\text{Real form:}\quad f(x)=\frac{a_0}{2}+\sum_{n\ge1}\big[a_n\cos k_nx+b_n\sin k_nx\big],\quad a_n=\frac2L\int f\cos k_nx\,\mathrm{d}x,\quad b_n=\frac2L\int f\sin k_nx\,\mathrm{d}x$$

Even functions are pure cosine, odd functions pure sine; $c_n=\tfrac12(a_n-ib_n)$
for $n>0$. On a half-interval $[0,\ell]$ with Dirichlet ends,
$b_n=\frac{2}{\ell}\int_0^\ell f\sin(n\pi x/\ell)\,\mathrm{d}x$.

Transform pair (this course's convention: $e^{-ikx}$ forward, all of the
$1/2\pi$ on the inverse):

$$\tilde f(k)=\int_{-\infty}^{\infty}f(x)e^{-ikx}\,\mathrm{d}x,\qquad f(x)=\frac{1}{2\pi}\int_{-\infty}^{\infty}\tilde f(k)e^{ikx}\,\mathrm{d}k$$

**The rules that make it worth doing:**

| Operation in $x$ | Becomes in $k$ |
|---|---|
| $f'(x)$ | $ik\,\tilde f(k)$; in general $f^{(n)}\to(ik)^n\tilde f$ |
| $(f\ast g)(x)$ | $\tilde f(k)\,\tilde g(k)$ |
| $f(x-x_0)$ | $e^{-ikx_0}\tilde f(k)$ |
| $e^{ik_0x}f(x)$ | $\tilde f(k-k_0)$ |
| $f(ax)$ | $\tilde f(k/a)/\lvert a\rvert$ |
| $\int\lvert f\rvert^2\mathrm{d}x$ (Parseval) | $\frac{1}{2\pi}\int\lvert\tilde f\rvert^2\mathrm{d}k$ |

**Transform pairs to reach for:**

| $f(x)$ | $\tilde f(k)$ |
|---|---|
| $\delta(x)$ | $1$ |
| $1$ | $2\pi\delta(k)$ |
| box: $1$ on $\lvert x\rvert<b$ | $2b\,\dfrac{\sin kb}{kb}$ (a sinc; first zeros at $k=\pm\pi/b$) |
| $e^{-ax^2}$, $a>0$ | $\sqrt{\pi/a}\;e^{-k^2/4a}$ |
| $e^{-a\lvert x\rvert}$, $a>0$ | $\dfrac{2a}{a^2+k^2}$ (a Lorentzian) |
| $\dfrac{1}{x^2+a^2}$ | $\dfrac{\pi}{a}e^{-a\lvert k\rvert}$ |
| $e^{-\gamma x}$ for $x>0$, else $0$ | $\dfrac{1}{\gamma+ik}$ |

Every pair shows the same trade: **narrow in $x$ means wide in $k$**. That is the
uncertainty principle in mathematical dress.

*From* [4.1](lessons/04-01-fourier-series-transform.md)

### Delta-function algebra

$$\int f(x)\delta(x-a)\,\mathrm{d}x=f(a),\qquad \int\delta(x)\,\mathrm{d}x=1,\qquad \delta(-x)=\delta(x)$$
$$\delta(ax)=\frac{1}{\lvert a\rvert}\delta(x),\qquad \delta\big(g(x)\big)=\sum_i\frac{\delta(x-x_i)}{\lvert g'(x_i)\rvert}\ \ (\text{simple roots }x_i)$$
$$\int f(x)\,\delta'(x-a)\,\mathrm{d}x=-f'(a),\qquad \int f\,\delta^{(n)}(x-a)\,\mathrm{d}x=(-1)^nf^{(n)}(a)$$
$$H'(x)=\delta(x),\qquad \delta(x)=\frac{1}{2\pi}\int_{-\infty}^{\infty}e^{ikx}\,\mathrm{d}k,\qquad \delta^3(\mathbf r)=\delta(x)\delta(y)\delta(z)$$

Nascent deltas (any unit-area bump, squeezed) — all act identically under an
integral:

$$\frac{1}{\sqrt{2\pi\sigma^2}}e^{-x^2/2\sigma^2}\ (\sigma\to0),\qquad \frac{1}{\pi}\frac{\varepsilon}{x^2+\varepsilon^2}\ (\varepsilon\to0),\qquad \frac{\sin(Lx)}{\pi x}\ (L\to\infty)$$

*From* [4.2](lessons/04-02-dirac-delta-distributions.md)

### Laplace transform table

| $f(t)$ | $F(s)$ | | $f(t)$ | $F(s)$ |
|---|---|---|---|---|
| $1$, or step $\theta(t)$ | $1/s$ | | $\sin\omega t$ | $\omega/(s^2+\omega^2)$ |
| $t^n$ | $n!/s^{\,n+1}$ | | $\cos\omega t$ | $s/(s^2+\omega^2)$ |
| $e^{at}$ | $1/(s-a)$ | | $e^{-\gamma t}\sin\omega t$ | $\omega/\big[(s+\gamma)^2+\omega^2\big]$ |
| $\delta(t)$ | $1$ | | $e^{-\gamma t}\cos\omega t$ | $(s+\gamma)/\big[(s+\gamma)^2+\omega^2\big]$ |
| $\delta(t-a)$ | $e^{-as}$ | | $t\,f(t)$ | $-F'(s)$ |

Rules:

$$\mathcal{L}\{f'\}=sF(s)-f(0),\qquad \mathcal{L}\{f''\}=s^2F(s)-s\,f(0)-f'(0)$$
$$\mathcal{L}\{e^{at}f(t)\}=F(s-a)\ \ (\text{shift in }s),\qquad \mathcal{L}\{f(t-a)H(t-a)\}=e^{-as}F(s)\ \ (\text{shift in }t)$$
$$\mathcal{L}\{(f\ast g)(t)\}=F(s)G(s),\qquad (f\ast g)(t)=\int_0^tf(\tau)g(t-\tau)\,\mathrm{d}\tau$$
$$f(0^+)=\lim_{s\to\infty}sF(s),\qquad \lim_{t\to\infty}f(t)=\lim_{s\to0}sF(s)\ \ (\text{when the limit exists})$$

**The method:** transform (initial conditions ride along for free) → solve the
algebra for $F(s)$ → split by partial fractions into table shapes → invert.
Complete the square in a quadratic denominator to expose
$(s+\gamma)^2+\omega_d^2$, then use the $s$-shift.

**Read the physics off the poles of $F(s)$:** the real part is the decay rate,
the imaginary part is the ringing frequency, and a pole at $s=0$ from the forcing
is the steady state. Formally the inverse is the Bromwich contour integral
$f(t)=\frac{1}{2\pi i}\int_{c-i\infty}^{c+i\infty}F(s)e^{st}\,\mathrm{d}s$, and
closing it reproduces exactly the partial-fraction terms.

*From* [4.3](lessons/04-03-laplace-transform-ivp.md)

### Building a Green's function

1. Solve the **homogeneous** equation on each side of the source point.
2. Impose the right selection condition: the *homogeneous* version of the
   problem's boundary conditions (boundary-value problems), or **causality**
   $G(t,t')=0$ for $t<t'$ (initial-value problems).
3. Match at the source: for a second-order operator, $G$ is **continuous** there
   and $G'$ **jumps** by $1/(\text{coefficient of the highest derivative})$.
4. Superpose: $u(x)=\int G(x,x')f(x')\,\mathrm{d}x'$, which becomes a genuine
   convolution $u=G\ast f$ whenever the coefficients are constant in $t$.

Two you will reuse constantly:

$$\text{driven damped oscillator}\ \ \ddot x+2\gamma\dot x+\omega_0^2x=f:\qquad G(\tau)=\frac{1}{\omega_d}e^{-\gamma\tau}\sin(\omega_d\tau)\,H(\tau),\quad \omega_d=\sqrt{\omega_0^2-\gamma^2}$$

$$-\frac{\mathrm{d}^2}{\mathrm{d}x^2}\ \text{on }[0,L],\ G=0\text{ at both ends}:\qquad G(x,x')=\frac{x_<\,(L-x_>)}{L},\quad x_<=\min(x,x'),\ x_>=\max(x,x')$$

The impulse conditions for the oscillator read $G(0^+)=0$, $\dot G(0^+)=1$: a
unit impulse leaves position unmoved and hands over one unit of velocity. In the
frequency domain the same object is the **transfer function**

$$\tilde G(\omega)=\frac{1}{-\omega^2+2i\gamma\omega+\omega_0^2},$$

whose poles at $\omega=i\gamma\pm\omega_d$ sit just off the real axis for small
damping — driving there makes the response blow up, which is **resonance**.

*From* [4.4](lessons/04-04-greens-functions.md)

### Variational calculus

$$\text{Euler--Lagrange:}\quad \frac{\mathrm{d}}{\mathrm{d}x}\!\left(\frac{\partial L}{\partial y'}\right)-\frac{\partial L}{\partial y}=0$$

Two shortcuts, and the conditions they actually need — do not mix them up:

| If $L$ has... | Then | Because |
|---|---|---|
| no explicit $y$ | $\dfrac{\partial L}{\partial y'}=\text{const}$ | EL's right side is zero |
| no explicit $x$ | $L-y'\dfrac{\partial L}{\partial y'}=\text{const}$ (**Beltrami**) | translation along $x$ is a symmetry |

In general $\frac{\mathrm d}{\mathrm dx}\big(L-y'\,\partial L/\partial y'\big)=\partial L/\partial x$,
so the Beltrami quantity is conserved exactly when $L$ carries no explicit $x$.
If an endpoint is **free** rather than pinned, the boundary term survives and
imposes the natural boundary condition $\partial L/\partial y'=0$ there.

**Constraints.** For an isoperimetric constraint $K[y]=\int G\,\mathrm{d}x=\ell$,
extremize $J-\lambda K$ freely — write the EL equation for $F-\lambda G$ and solve
it together with the constraint, which fixes $\lambda$. For a pointwise
(holonomic) constraint, promote the multiplier to a function $\lambda(x)$ and
vary $y$ and $\lambda$ independently. The multiplier is physics, not bookkeeping:
a radius in the isoperimetric problem, a constraint force in mechanics.

**Standard extremals:**

| Functional | Extremal |
|---|---|
| $\int\sqrt{1+y'^2}\,\mathrm{d}x$ (arc length) | straight line |
| $\int\sqrt{(1+y'^2)/2gy}\,\mathrm{d}x$ (descent time) | cycloid $x=\tfrac C2(\theta-\sin\theta)$, $y=\tfrac C2(1-\cos\theta)$ |
| $\int2\pi y\sqrt{1+y'^2}\,\mathrm{d}x$ (surface of revolution) | catenary $y=c\cosh\!\big(\tfrac{x-x_0}{c}\big)$ |
| $\int y\,\mathrm{d}x$ at fixed arc length | circular arc of radius $\lambda$; closed, the circle, $A\le\ell^2/4\pi$ |
| $\int\big(\tfrac12y'^2-\tfrac12\omega^2y^2\big)\mathrm{d}x$ | $y''+\omega^2y=0$ — simple harmonic motion |

**Rayleigh–Ritz.** Pick a trial function satisfying the boundary conditions with
adjustable parameters, evaluate $R[y]$, minimize over the parameters. The result
is always an **upper** bound on $\lambda_{\min}$ (in quantum mechanics,
$\langle H\rangle/\langle\psi\mid\psi\rangle\ge E_0$), and it equals the exact
value only if your trial family contains the true ground state. A crude parabola
$x(L-x)$ for the particle in a box overshoots by 1.3 percent.

*From* [5.1](lessons/05-01-calculus-of-variations-euler-lagrange.md) *and* [5.2](lessons/05-02-constraints-variational-estimates.md)

### Symmetry and conservation

| Continuous symmetry of the action | Conserved quantity |
|---|---|
| time translation $t\to t+\tau$ | energy (the Beltrami first integral) |
| space translation $\mathbf r\to\mathbf r+\mathbf a$ | linear momentum, one component per direction |
| rotation (the $SO(3)$ of a central potential) | angular momentum $\mathbf L=\mathbf r\times m\dot{\mathbf r}$ |

That is Noether's theorem in the only form you need here: a coordinate absent
from the Lagrangian (a **cyclic** coordinate) has a conserved conjugate momentum;
if the coordinate appears explicitly, the symmetry is broken and nothing is
conserved.

Groups worth recognizing: $D_4$, the eight symmetries of a square (four rotations
plus four mirrors) — **non-abelian**; $C_4$, its four-rotation subgroup, the same
structure as the fourth roots of unity — abelian; $SO(2)$, planar rotations —
abelian; $SO(3)$, rotations of space ($R^{\mathsf T}R=I$, $\det R=+1$) —
**non-abelian**; translations — abelian.

What representations buy you: **degeneracies** ($SO(3)$ forces hydrogen's
$\ell$-level into $2\ell+1$ equal-energy states) and **selection rules**
(symmetry alone tells you which transition matrix elements vanish, without doing
the integral).

*From* [5.3](lessons/05-03-groups-symmetry.md)

## Assumed, not taught here

This is a Tier 1 course. It leans on all three refreshers without re-deriving
them; each row says where the derivation lives.

| Fact | Where it's taught |
|---|---|
| Partial derivatives, the gradient, directional derivatives | [calc-refresher 4.1](../calc-refresher/lessons/04-01-partial-derivatives-and-gradient.md) |
| Line integrals, flux, and the div/curl of a plane field (the calculus version of Module 1) | [calc-refresher 5.1](../calc-refresher/lessons/05-01-vector-fields-div-curl.md), [5.2](../calc-refresher/lessons/05-02-line-integrals-and-flux.md), [5.3](../calc-refresher/lessons/05-03-green-stokes-divergence.md) |
| Multiple integrals, the Jacobian, and $\int_{-\infty}^{\infty}e^{-x^2}\mathrm{d}x=\sqrt\pi$ | [calc-refresher 4.3](../calc-refresher/lessons/04-03-multiple-integrals.md) |
| Integration by parts and partial fractions (used constantly in Modules 4–5) | [calc-refresher 2.2](../calc-refresher/lessons/02-02-integration-techniques.md) |
| Power series, radius of convergence, term-by-term operations | [calc-refresher 3.2](../calc-refresher/lessons/03-02-power-and-taylor-series.md) |
| Lagrange multipliers for ordinary functions (the finite-dimensional ancestor of 5.2) | [calc-refresher 4.2](../calc-refresher/lessons/04-02-multivariable-optimization-lagrange.md) |
| Equality of mixed partials (Clairaut) — the engine behind both curl-grad identities | [calc-refresher 4.1](../calc-refresher/lessons/04-01-partial-derivatives-and-gradient.md) |
| Second-order constant-coefficient ODEs, characteristic roots, Euler's formula $e^{i\beta t}=\cos\beta t+i\sin\beta t$ | [ode-refresher 2.1](../ode-refresher/lessons/02-01-second-order-constant-coefficient.md) |
| Damped oscillators, $\omega_d=\sqrt{\omega_0^2-\gamma^2}$, under/over/critical damping | [ode-refresher 2.2](../ode-refresher/lessons/02-02-oscillations-damping.md) |
| Driven oscillators, transient vs. steady state, resonance | [ode-refresher 2.3](../ode-refresher/lessons/02-03-forcing-resonance.md) |
| The Laplace transform basics that 4.3 speeds through | [ode-refresher 4.1](../ode-refresher/lessons/04-01-laplace-transform.md) |
| Separation of variables for PDEs — the move that *produces* every special function in Module 3 | [ode-refresher 4.2](../ode-refresher/lessons/04-02-intro-pdes-separation.md) |
| Determinants (the symbolic determinant for curl, and $\det R=+1$ for a rotation) | [linalg-refresher 2.3](../linalg-refresher/lessons/02-03-determinants.md) |
| Eigenvalues, eigenvectors, diagonalization (the model for every eigenproblem here) | [linalg-refresher 3.1](../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md), [3.2](../linalg-refresher/lessons/03-02-diagonalization.md) |
| Inner products, orthogonality, projection — what a "generalized Fourier series" generalizes | [linalg-refresher 4.1](../linalg-refresher/lessons/04-01-inner-products-orthogonality.md), [4.2](../linalg-refresher/lessons/04-02-projection-least-squares.md) |
| Spectral theorem for symmetric matrices — why principal axes exist, and the finite-dimensional twin of Sturm–Liouville | [linalg-refresher 5.1](../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md) |
| Simple harmonic motion and impulse = change in momentum (read off the oscillator Green's function) | [mechanics-refresher 3.1](../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md), [3.2](../mechanics-refresher/lessons/03-02-damped-driven-oscillations.md) |

**One genuine gap:** the gamma function $\Gamma(m+\nu+1)$ appears in the $J_\nu$
series in [3.3](lessons/03-03-bessel-functions.md) and no course in the library
defines it. For integer arguments it is just a factorial,
$\Gamma(n+1)=n!$, and in general
$\Gamma(z)=\int_0^\infty t^{z-1}e^{-t}\,\mathrm{d}t$ with
$\Gamma(z+1)=z\,\Gamma(z)$ and $\Gamma(\tfrac12)=\sqrt\pi$ — enough to read the
series, and all this course ever uses.

## Pitfalls

### Operators and fields

- Divergence measures *change*, not size: a uniform wind has $\nabla\cdot\mathbf F=0$ however strong it is. *([1.1](lessons/01-01-fields-grad-div-curl.md))*
- Zero divergence can happen by cancellation — $(2x,-3y,z)$ is nowhere zero yet source-free everywhere. *([1.1](lessons/01-01-fields-grad-div-curl.md))*
- Check the shapes: grad eats a scalar, div and curl eat vectors. Writing $\nabla\cdot\varphi$ is a type error. *([1.1](lessons/01-01-fields-grad-div-curl.md))*
- Curvilinear Laplacian is **not** $\partial_r^2+\partial_\theta^2+\partial_\phi^2$ — route through the scale factors, always. *([1.4](lessons/01-04-curvilinear-coordinates.md))*
- $\hat{\mathbf r},\hat{\boldsymbol\theta},\hat{\boldsymbol\phi}$ point differently at different places; that turning basis is exactly why the operator formulas carry extra $h_i$ terms. *([1.4](lessons/01-04-curvilinear-coordinates.md))*
- Physics convention: $\theta$ is polar (from the $z$-axis), $\phi$ azimuthal; the $r\sin\theta$ scale factor belongs to the azimuth. Math texts swap the names. *([1.4](lessons/01-04-curvilinear-coordinates.md))*

### Integrals and theorems

- A line integral depends on the path unless the field is conservative. Same endpoints, different answers, is the diagnostic. *([1.2](lessons/01-02-line-surface-volume-integrals.md))*
- Flux is meaningless until you state which way $\hat{\mathbf n}$ points; every integral theorem flips sign with orientation. *([1.2](lessons/01-02-line-surface-volume-integrals.md), [1.3](lessons/01-03-integral-theorems.md))*
- Scalar and vector line integrals differ: $\int f\,\mathrm{d}l$ uses the *length* and is direction-blind; $\int\mathbf F\cdot\mathrm{d}\mathbf l$ uses the *vector* step and reverses sign. *([1.2](lessons/01-02-line-surface-volume-integrals.md))*
- Zero divergence inside does not force zero flux unless the field is smooth *everywhere* inside. Hide a singularity and you get $4\pi$ — that is a point source, not a contradiction. *([1.3](lessons/01-03-integral-theorems.md), [4.2](lessons/04-02-dirac-delta-distributions.md))*
- "$\nabla\times\mathbf F=\mathbf 0$ implies conservative" needs a **simply connected** region; around a hole a curl-free field can still circulate. *([1.3](lessons/01-03-integral-theorems.md))*

### Index notation

- Never write an index three times in one term — rename a dummy to say what you mean. *([1.5](lessons/01-05-index-notation-cartesian-tensors.md))*
- Free indices are a type check: whatever is free on the left must be free in every term on the right. *([1.5](lessons/01-05-index-notation-cartesian-tensors.md))*
- The $\varepsilon$–$\delta$ identity needs the shared index **first** in both symbols; rotate cyclically before reading off deltas. *([1.5](lessons/01-05-index-notation-cartesian-tensors.md))*
- Not every $3\times3$ array is a tensor — it must transform as $T'_{ij}=R_{ik}R_{jl}T_{kl}$. *([1.5](lessons/01-05-index-notation-cartesian-tensors.md))*

### Complex methods

- Differentiable at one point is not analytic: $\lvert z\rvert^2$ is differentiable only at the origin and analytic nowhere. *([2.1](lessons/02-01-analytic-functions-cauchy-riemann.md))*
- The second Cauchy–Riemann equation carries a **minus**, $u_y=-v_x$. Drop it and $\bar z$ looks analytic while $z^2$ doesn't. *([2.1](lessons/02-01-analytic-functions-cauchy-riemann.md))*
- Only a *harmonic* $u$ has a harmonic conjugate; otherwise the integration hits a contradiction. *([2.1](lessons/02-01-analytic-functions-cauchy-riemann.md))*
- $\oint f\,\mathrm{d}z=0$ is a statement about analyticity, not about $f$ being small. Ask two questions: is the pole inside, and which way am I going? *([2.2](lessons/02-02-contour-integrals-cauchy-theorem.md))*
- Match $n!$ to the exponent $n+1$ in the generalized Cauchy formula: a double pole gives $2\pi i\,f'(z_0)$, not $2\pi i\,f(z_0)$. *([2.2](lessons/02-02-contour-integrals-cauchy-theorem.md))*
- "Has a singularity" and "has a nonzero residue" are different claims — only $a_{-1}$ survives the loop, and it can be zero at a genuine pole. *([2.3](lessons/02-03-singularities-laurent-residues.md))*
- The simple-pole limit diverges at a higher-order pole; that divergence is the signal to switch formulas. *([2.3](lessons/02-03-singularities-laurent-residues.md))*
- One function has different Laurent series on different annuli; the residue at $z_0$ comes from the innermost punctured disk touching it. *([2.3](lessons/02-03-singularities-laurent-residues.md))*
- Never close a contour on $\cos z$ or $\sin z$ — they grow exponentially off the real axis. Promote to $e^{iaz}$ and take real/imaginary parts last. *([2.4](lessons/02-04-real-integrals-by-residues.md))*
- Choose the closure where the arc dies, not by habit: $e^{iaz}$ decays upward only for $a>0$, and closing downward costs a sign. Without an exponential you need $\deg Q\ge\deg P+2$. *([2.4](lessons/02-04-real-integrals-by-residues.md))*

### Series and special functions

- "Regular singular" is a **test**, not a label — check that both $xP$ and $x^2Q$ are analytic. *([3.1](lessons/03-01-power-series-frobenius.md))*
- Reindex before collecting coefficients, or you will pair the wrong terms. *([3.1](lessons/03-01-power-series-frobenius.md))*
- The Frobenius exponent $s$ is *determined* by the indicial equation; the free constant is $a_0$. And equal or integer-spaced roots may hide a $\ln x$ in the second solution. *([3.1](lessons/03-01-power-series-frobenius.md))*
- The Legendre eigenvalue is $\ell(\ell+1)$, not $\ell$ — the label and the eigenvalue are different numbers. *([3.2](lessons/03-02-legendre-spherical-harmonics.md))*
- The $P_\ell$ are orthogonal but **not** orthonormal: $\int P_\ell^2=2/(2\ell+1)$, which is why the coefficient carries $(2\ell+1)/2$. *([3.2](lessons/03-02-legendre-spherical-harmonics.md))*
- In $P_\ell^m$ the $m$ is an index, not an exponent — a different function entirely, with $P_\ell=P_\ell^0$. Note also the clash of letters: $Y_\ell^m$ is a spherical harmonic, $Y_\nu$ a Bessel function of the second kind. *([3.2](lessons/03-02-legendre-spherical-harmonics.md), [3.3](lessons/03-03-bessel-functions.md))*
- Keep $Y_\nu$ only when the axis $r=0$ is **excluded** (an annulus, a coaxial gap); any solid region containing the axis forces its coefficient to zero. *([3.3](lessons/03-03-bessel-functions.md))*
- Bessel zeros are not $n\pi$ and not evenly spaced near the origin — look them up. *([3.3](lessons/03-03-bessel-functions.md))*
- Drop the weight and orthogonality fails: it is $\int(\cdots)\,r\,\mathrm{d}r$ for Bessel and $\int(\cdots)e^{-x^2}\mathrm{d}x$ for Hermite. Without the weight the Hermite integral actually diverges. *([3.3](lessons/03-03-bessel-functions.md), [3.4](lessons/03-04-hermite-generating-functions.md), [3.5](lessons/03-05-sturm-liouville-orthogonal-expansions.md))*
- Read the weight off the ODE **after** putting it in Sturm–Liouville form — Bessel's raw $x^2y''+\cdots$ hides its $w=x$ until you divide by $x$. *([3.5](lessons/03-05-sturm-liouville-orthogonal-expansions.md))*
- Stay in the physicists' Hermite column ($e^{2xt-t^2}$, weight $e^{-x^2}$); mixing in the probabilists' $He_n$ corrupts every constant. *([3.4](lessons/03-04-hermite-generating-functions.md))*
- Higher $n$ spreads the oscillator state **wider**, not narrower — probability piles up near the classical turning points. *([3.4](lessons/03-04-hermite-generating-functions.md))*
- A Sturm–Liouville problem has infinitely many eigenfunctions, not $n$ of them; that is what makes the basis rich enough for an arbitrary function. *([3.5](lessons/03-05-sturm-liouville-orthogonal-expansions.md))*

### Transforms and distributions

- $\tilde f(k)$ is generally **complex**; only symmetry forces it real (real and even in, real and even out). *([4.1](lessons/04-01-fourier-series-transform.md))*
- Fix one $2\pi$ convention and one sign convention and never mix books mid-problem. *([4.1](lessons/04-01-fourier-series-transform.md))*
- The derivative rule really carries the $i$: $\widetilde{f'}=ik\tilde f$, so two derivatives give $-k^2$. *([4.1](lessons/04-01-fourier-series-transform.md))*
- "$\delta(0)=\infty$" is not a usable number — a lone delta is shorthand for "multiply by a test function and integrate." *([4.2](lessons/04-02-dirac-delta-distributions.md))*
- Scaling is $\delta(ax)=\delta(x)/\lvert a\rvert$ — the absolute value is not optional, and neither is the minus sign in $\int f\delta'=-f'(0)$. *([4.2](lessons/04-02-dirac-delta-distributions.md))*
- A delta whose root sits exactly at an integration limit contributes only **half** the sifted value. *([4.2](lessons/04-02-dirac-delta-distributions.md))*
- $\mathcal{L}\{f''\}=s^2F-sf(0)-f'(0)$ — dropping the initial-value terms silently solves the zero-initial-condition problem instead. *([4.3](lessons/04-03-laplace-transform-ivp.md))*
- $\mathcal{L}\{\sin\omega t\}$ carries $\omega$ in the **numerator**, so inverting $1/[(s+\gamma)^2+\omega_d^2]$ needs a compensating $1/\omega_d$. *([4.3](lessons/04-03-laplace-transform-ivp.md))*
- Laplace is one-sided: it happily transforms growing functions, and initial (not boundary-at-infinity) data are its natural input. *([4.3](lessons/04-03-laplace-transform-ivp.md))*

### Green's functions and variational problems

- $LG=\delta$ alone has infinitely many solutions — always state the boundary or causality conditions that pick yours. *([4.4](lessons/04-04-greens-functions.md))*
- Get the jump bookkeeping right: $G$ continuous, $G'$ jumping by one over the leading coefficient. Otherwise you have solved $LG=c\,\delta$ for the wrong $c$. *([4.4](lessons/04-04-greens-functions.md))*
- The causal $H(t-t')$ is not decoration — drop it and future kicks influence the present. *([4.4](lessons/04-04-greens-functions.md))*
- $\partial/\partial y'$ is a partial (freeze $x$ and $y$); the outer $\mathrm{d}/\mathrm{d}x$ is total and chains through $y(x)$. Reversing the order is the classic Euler–Lagrange mistake. *([5.1](lessons/05-01-calculus-of-variations-euler-lagrange.md))*
- Beltrami needs no explicit **$x$**; the "no $y$" case is the *other* shortcut. *([5.1](lessons/05-01-calculus-of-variations-euler-lagrange.md))*
- The boundary term vanishes only because the endpoints are pinned; a free end leaves a natural boundary condition behind. *([5.1](lessons/05-01-calculus-of-variations-euler-lagrange.md))*
- The multiplier $\lambda$ carries units and meaning (a radius, a constraint force, a temperature) — read it, do not discard it. *([5.2](lessons/05-02-constraints-variational-estimates.md))*
- Rayleigh–Ritz only ever gives an **upper** bound; an estimate below a known exact value means an arithmetic error, and a trial function that violates the boundary conditions is inadmissible. *([5.2](lessons/05-02-constraints-variational-estimates.md))*

### Symmetry

- Check all four axioms before calling something a group — **closure** is the one beginners drop. *([5.3](lessons/05-03-groups-symmetry.md))*
- Composition commutes for $SO(2)$ and translations, but not for $D_4$ or $SO(3)$; non-commutativity is the source of the structure, not a defect. *([5.3](lessons/05-03-groups-symmetry.md))*
- A representation is a costume, not the group. The same group has many, and which ones appear is what fixes the degeneracies. *([5.3](lessons/05-03-groups-symmetry.md))*
