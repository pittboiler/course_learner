# Partial Differential Equations · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

A PDE course is really one decision tree. **Classify the equation** (elliptic,
parabolic, hyperbolic), and the type tells you what data it will accept, whether
information travels, and which of the four tools — characteristics, separation of
variables, transforms, Green's functions — has a chance. Everything below is that
tree plus the standard tables you'd otherwise re-derive mid-problem: the
eigenvalue problems each boundary condition produces, the separated time factors,
the transform pairs, and the kernels.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $u_t,\ u_x,\ u_{xx}$ | partial derivatives — subscript names the variable differentiated in | [1.1](lessons/01-01-what-is-a-pde-transport.md) |
| $c$ | wave / transport speed — how fast the pattern slides, sign gives direction | [1.1](lessons/01-01-what-is-a-pde-transport.md) |
| $x - ct = \text{const}$ | a **characteristic** — the track a signal rides, along which the PDE becomes an ODE | [1.1](lessons/01-01-what-is-a-pde-transport.md) |
| $s$ | parameter running *along* one characteristic (the ODE's own clock) | [1.2](lessons/01-02-method-of-characteristics-first-order.md) |
| $x_0$ | the foot of a characteristic on $t=0$ — the label saying *which* curve you're on | [1.2](lessons/01-02-method-of-characteristics-first-order.md) |
| $t^{*}$ | breaking time — when characteristics first cross and smoothness dies | [1.3](lessons/01-03-quasilinear-first-order.md) |
| $\Delta = B^2 - AC$ | discriminant of the principal part — its sign is the entire type verdict | [1.4](lessons/01-04-classifying-second-order-pdes.md) |
| $\xi,\eta$ (in 1.4) | canonical coordinates constant along characteristics | [1.4](lessons/01-04-classifying-second-order-pdes.md) |
| $k$ (also $\kappa$) | diffusivity — how fast heat conducts, units of length squared per time | [2.1](lessons/02-01-heat-diffusion-equations.md) |
| $q$ (in 2.1) | heat flux — energy crossing a point per unit time, positive rightward | [2.1](lessons/02-01-heat-diffusion-equations.md) |
| $\varphi,\ \psi$ | initial **displacement** and initial **velocity** for the wave equation | [2.2](lessons/02-02-wave-equation-dalembert.md) |
| $\nabla^2$ (also $\Delta$) | Laplacian — how much a point differs from the average of its neighbors | [2.3](lessons/02-03-laplace-poisson-equations.md) |
| $\Omega,\ \partial\Omega,\ \overline\Omega$ | the region, its boundary, and their union | [2.3](lessons/02-03-laplace-poisson-equations.md) |
| $\partial u/\partial n$, $u_n$ | outward normal derivative — the flux through the boundary | [2.3](lessons/02-03-laplace-poisson-equations.md) |
| $\partial_p Q$ | **parabolic boundary** — the initial edge plus both spatial sides, top edge excluded | [2.4](lessons/02-04-maximum-principles.md) |
| $\lambda_n,\ X_n$ (also $\phi_n,\varphi_n$) | eigenvalue and eigenfunction of the spatial problem — the system's natural mode | [3.1](lessons/03-01-separation-of-variables.md) |
| $L$ | interval length (careful: also names the S–L operator in 3.4) | [3.1](lessons/03-01-separation-of-variables.md) |
| $\omega_n = c\sqrt{\lambda_n}$ | natural frequency of mode $n$ for the wave equation | [3.1](lessons/03-01-separation-of-variables.md) |
| $a_n,\ b_n$ | Fourier cosine and sine coefficients — the projections of the data on each mode | [3.2](lessons/03-02-fourier-series.md) |
| $S_N$ | the partial sum: the first $N$ terms of a Fourier series | [3.3](lessons/03-03-convergence-fourier-series.md) |
| $f(x^{+}),\ f(x^{-})$ | one-sided limits at a jump | [3.3](lessons/03-03-convergence-fourier-series.md) |
| $p,\ q,\ w$ (in 3.4) | Sturm–Liouville coefficients: leading, undifferentiated, and the **weight** | [3.4](lessons/03-04-sturm-liouville-theory.md) |
| $\langle f,g\rangle_w = \int f g\,w\,dx$ | weighted inner product — the ruler that makes eigenfunctions perpendicular | [3.4](lessons/03-04-sturm-liouville-theory.md) |
| $c_n(t),\ q_n(t)$ | time-dependent coefficient of mode $n$, and the source's share of that mode | [3.5](lessons/03-05-eigenfunction-expansions-inhomogeneous.md) |
| $\hat u(\xi)$ | Fourier transform — how much of frequency $\xi$ lives in $u$ | [4.1](lessons/04-01-fourier-transform.md) |
| $\xi$ | wavenumber / angular frequency, ranging over all of $\mathbb R$ | [4.1](lessons/04-01-fourier-transform.md) |
| $f * g$ | convolution $\int f(x-y)g(y)\,dy$ — smear one function against the other | [4.1](lessons/04-01-fourier-transform.md) |
| $\Phi(x,t)$ | the **heat kernel** — temperature from one unit of heat dropped at the origin | [4.2](lessons/04-02-heat-equation-line-heat-kernel.md) |
| $\operatorname{erf},\ \operatorname{erfc}$ | error function and its complement — the running area under a Gaussian | [4.2](lessons/04-02-heat-equation-line-heat-kernel.md) |
| $\omega(\xi)$ | dispersion relation — the frequency the PDE forces on wavenumber $\xi$ | [4.3](lessons/04-03-wave-equation-line-dispersion.md) |
| $v_p,\ v_g$ | phase velocity (a crest) and group velocity (the envelope, which carries the signal) | [4.3](lessons/04-03-wave-equation-line-dispersion.md) |
| $U(x,s)$, $\mathcal L$ | Laplace transform in time and its operator; $s$ is a parameter, not integrated away | [4.4](lessons/04-04-laplace-transform-evolution.md) |
| $\delta(x-a)$ | Dirac delta — the instruction "sample the integrand at $a$" | [5.1](lessons/05-01-dirac-delta-distributions.md) |
| $H(x)$ | Heaviside step: $0$ for $x<0$, $1$ for $x>0$ | [5.1](lessons/05-01-dirac-delta-distributions.md) |
| $\langle T,\varphi\rangle$ | a distribution $T$ acting on a test function $\varphi$ | [5.1](lessons/05-01-dirac-delta-distributions.md) |
| $G(x,y)$ | Green's function — the field at $x$ from a unit point source parked at $y$ | [5.2](lessons/05-02-greens-functions-poisson.md) |
| $\mathbf x'^{*}$ | the **image point**: the source reflected across the boundary | [5.3](lessons/05-03-method-of-images.md) |
| $S(t)$ | homogeneous solution operator — the "evolve initial data forward by $t$" box | [5.4](lessons/05-04-duhamels-principle.md) |
| $F(u)$, $[\,\cdot\,]$ | flux in conservation form, and the jump across a shock | [6.1](lessons/06-01-nonlinear-shocks-burgers.md) |
| $u_L,\ u_R$, $s$ (in 6.1) | states left and right of a shock, and the shock's speed | [6.1](lessons/06-01-nonlinear-shocks-burgers.md) |
| $r = k\Delta t/\Delta x^2$ | the FTCS step-size number; $\le \tfrac12$ or the scheme explodes | [6.2](lessons/06-02-finite-differences-well-posedness.md) |
| $G(\beta)$ (in 6.2) | amplification factor — how much one time step multiplies mode $\beta$ | [6.2](lessons/06-02-finite-differences-well-posedness.md) |
| $J_n,\ P_\ell,\ Y_\ell^m$ | Bessel functions, Legendre polynomials, spherical harmonics | [6.3](lessons/06-03-separation-polar-spherical.md) |
| $\alpha_{n,m}$ | the $m$-th positive zero of $J_n$ — sets a drum's allowed frequencies | [6.3](lessons/06-03-separation-polar-spherical.md) |

**Symbol collisions to watch.** $s$ = characteristic parameter (1.2), Laplace
variable (4.4), shock speed (6.1). $L$ = interval length (3.1) and S–L operator
(3.4). $\Phi$ = heat kernel (4.2) and free-space Green's function (5.3). $G$ =
Green's function (5.2) and amplification factor (6.2). $q$ = heat flux (2.1) and
an S–L coefficient (3.4).

## Definitions

### Order and linearity

The **order** is the highest derivative appearing. **Linear** means $u$ and its
derivatives appear only to the first power and are never multiplied together.
Solutions of a linear homogeneous PDE superpose; solutions of a nonlinear one do
not.

*Introduced:* [1.1](lessons/01-01-what-is-a-pde-transport.md)

### Characteristic

A curve along which the PDE collapses into an ODE — so you solve it by carrying
the data down each curve. For $a\,u_x + b\,u_t = c\,u + d$ they are traced by

$$\frac{dx}{ds} = a, \qquad \frac{dt}{ds} = b, \qquad \frac{du}{ds} = c\,u + d.$$

*Introduced:* [1.1](lessons/01-01-what-is-a-pde-transport.md), systematized in [1.2](lessons/01-02-method-of-characteristics-first-order.md)

### Non-characteristic data

Cauchy data must sit on a curve that is nowhere tangent to a characteristic, so
each characteristic crosses it exactly once and picks up exactly one starting
value. Data laid *along* a characteristic either contradicts the ODE (no
solution) or fails to determine $u$ off that curve (infinitely many).

*Introduced:* [1.2](lessons/01-02-method-of-characteristics-first-order.md)

### Domain of determinacy

The set of points reachable by characteristics leaving a given segment of data —
the region where that data alone fixes the solution.

*Introduced:* [1.2](lessons/01-02-method-of-characteristics-first-order.md)

### Quasilinear equation

Linear in the *derivatives* of $u$, but the coefficients may read off $u$ itself.
That feedback is genuine nonlinearity: superposition fails and characteristics
can collide.

$$a(x,t,u)\,u_x + b(x,t,u)\,u_t = c(x,t,u)$$

*Introduced:* [1.3](lessons/01-03-quasilinear-first-order.md)

### Breaking time

The first instant two characteristics meet, so the implicit solution tries to
hand you two values at one point. For $u_t + u\,u_x = 0$ with data $f$,

$$t^{*} = \frac{-1}{\min_{x_0} f'(x_0)}$$

— finite only where the initial profile *descends*.

*Introduced:* [1.3](lessons/01-03-quasilinear-first-order.md)

### Principal part and discriminant

Only the second-order terms decide an equation's type. Writing the general
equation with a deliberate factor of two on the mixed term,

$$A\,u_{xx} + 2B\,u_{xy} + C\,u_{yy} + \text{lower order} = 0, \qquad \Delta = B^2 - AC.$$

*Introduced:* [1.4](lessons/01-04-classifying-second-order-pdes.md)

### Well-posedness (Hadamard)

A problem you can trust: a solution **exists**, is **unique**, and **depends
continuously** on the data — nudge the data a little and the answer moves a
little. Stability is the leg that usually breaks; a unique exact solution can
still be worthless.

*Introduced:* [1.5](lessons/01-05-characteristics-well-posedness.md)

### Domain of dependence

The finite stretch of past data that a point can actually feel. For
$u_{tt}=c^2u_{xx}$, the value $u(x_0,t_0)$ depends only on the initial data on
$[\,x_0-ct_0,\ x_0+ct_0\,]$ — causality, wearing a math coat.

*Introduced:* [1.5](lessons/01-05-characteristics-well-posedness.md), formula in [2.2](lessons/02-02-wave-equation-dalembert.md)

### Fourier's law

Heat flows *down* the temperature gradient, at a rate set by its steepness. The
minus sign is the second law, not bookkeeping.

$$q = -k\,u_x$$

*Introduced:* [2.1](lessons/02-01-heat-diffusion-equations.md)

### Harmonic function

A function equal to the average of its own surroundings — no interior peaks or
pits, extremes forced onto the boundary.

$$\nabla^2 u = 0 \quad\text{in } \Omega$$

*Introduced:* [2.3](lessons/02-03-laplace-poisson-equations.md)

### Mean-value property

The rigorous form of "equals the average of its neighbors": a harmonic function's
value at a point is its average over *any* sphere centered there.

$$u(x) = \frac{1}{|\partial B_R|}\int_{\partial B_R(x)} u\,dS$$

*Introduced:* [2.3](lessons/02-03-laplace-poisson-equations.md)

### Fundamental solution

The response of an operator to a single unit point source — the one solution you
compute once and superpose forever. For $-\nabla^2$ it is $\ln r$-shaped in 2D
and $1/r$-shaped in 3D; for the heat equation it is the Gaussian kernel $\Phi$.

*Introduced:* [2.3](lessons/02-03-laplace-poisson-equations.md), built in [5.2](lessons/05-02-greens-functions-poisson.md)

### Separation constant

The single number both sides must equal when a PDE splits into a function of $x$
alone and a function of $t$ alone. Its **sign is forced by the boundary
conditions**, not chosen; the surviving values are the eigenvalues $\lambda_n$.

*Introduced:* [3.1](lessons/03-01-separation-of-variables.md)

### Gibbs phenomenon

Near a jump, every partial sum overshoots by about nine percent of the jump
height — forever. More terms narrow the "ears" and slide them toward the jump,
but never shrink them.

*Introduced:* [3.3](lessons/03-03-convergence-fourier-series.md)

### Regular Sturm–Liouville problem

A second-order eigenvalue problem written in divergence form, with one separated
boundary condition at each end. That form plus those conditions is exactly what
makes the operator self-adjoint.

$$(p\,u')' + q\,u + \lambda\,w\,u = 0, \qquad \alpha_1 u(a)+\alpha_2 u'(a)=0,\quad \beta_1 u(b)+\beta_2 u'(b)=0,$$

with $p,w > 0$ on $[a,b]$.

*Introduced:* [3.4](lessons/03-04-sturm-liouville-theory.md)

### Completeness

The separate, deeper claim that you have *enough* eigenfunctions to represent
every reasonable function — orthogonality alone does not give it, and this course
states it rather than proving it.

*Introduced:* [3.4](lessons/03-04-sturm-liouville-theory.md)

### Resonance

Driving a mode at its own natural frequency $\omega_n$, so the response grows
linearly in $t$ instead of settling. Structural, not a coincidence: the
Sturm–Liouville eigenvalues tell you where the resonances are before you drive
anything.

*Introduced:* [3.5](lessons/03-05-eigenfunction-expansions-inhomogeneous.md)

### Fourier transform

The $L\to\infty$ limit of a Fourier series: discrete modes blur into a continuum,
and the list of coefficients becomes a function of frequency.

$$\hat u(\xi) = \int_{-\infty}^{\infty} u(x)\,e^{-i\xi x}\,dx, \qquad u(x) = \frac{1}{2\pi}\int_{-\infty}^{\infty}\hat u(\xi)\,e^{i\xi x}\,d\xi$$

*Introduced:* [4.1](lessons/04-01-fourier-transform.md)

### Dispersion relation

The frequency a PDE forces on each pure wave $e^{i(\xi x - \omega t)}$ — the
equation's whole personality in one function. Straight line means every frequency
shares one speed (packet rigid); any curve means they race apart (packet spreads).

*Introduced:* [4.3](lessons/04-03-wave-equation-line-dispersion.md)

### Dirac delta and the sifting property

Not a function you evaluate — an *action*. It reaches into an integral and pulls
out the value of the test function at one point.

$$\int_{-\infty}^{\infty}\delta(x-a)\,\varphi(x)\,dx = \varphi(a), \qquad \int\delta = 1$$

*Introduced:* [5.1](lessons/05-01-dirac-delta-distributions.md)

### Weak (distributional) derivative

Hand the derivative to the smooth test function instead, paying one minus sign —
integration by parts with the boundary terms gone. Every distribution then
becomes infinitely differentiable, jumps and corners included.

$$\langle T',\varphi\rangle = -\langle T,\varphi'\rangle$$

*Introduced:* [5.1](lessons/05-01-dirac-delta-distributions.md)

### Green's function

The response to a unit point source, defined by putting a delta on the
right-hand side; every other source is then a superposition of points.

$$L\,G(x,y) = \delta(x-y) \quad\Longrightarrow\quad u(x) = \int G(x,y)\,f(y)\,dy \ \text{ solves } L\,u = f$$

*Introduced:* [5.2](lessons/05-02-greens-functions-poisson.md)

### Duhamel's principle

Treat the forcing received at each instant $\tau$ as fresh initial data released
then, evolve it for the *remaining* time $t-\tau$ with the homogeneous solver you
already own, and integrate over $\tau$.

$$u(x,t) = \int_0^t \big[S(t-\tau)\,f(\cdot,\tau)\big](x)\,d\tau, \qquad u(x,0)=0$$

*Introduced:* [5.4](lessons/05-04-duhamels-principle.md)

### Weak solution

A solution that satisfies the conservation law in integral (averaged) form
instead of pointwise, so it is allowed to contain jumps. The honest continuation
past the breaking time.

*Introduced:* [6.1](lessons/06-01-nonlinear-shocks-burgers.md)

### Entropy (admissibility) condition

Rankine–Hugoniot permits too many jumps; admissibility keeps only the ones
characteristics *run into* from both sides, $u_L > s > u_R$. Equivalently: the
jump that survives the vanishing-viscosity limit.

*Introduced:* [6.1](lessons/06-01-nonlinear-shocks-burgers.md)

### Consistency, stability, convergence (Lax)

**Consistent** = the stencils really approximate the PDE. **Stable** = no Fourier
mode grows, $|G(\beta)|\le 1$. The Lax equivalence theorem: for a consistent
scheme, stability $\iff$ convergence. You need both — a perfectly consistent
unstable scheme converges to noise.

*Introduced:* [6.2](lessons/06-02-finite-differences-well-posedness.md)

## Formulas and rules

### The three types at a glance

The organizing table of the whole course. Compute $\Delta = B^2 - AC$ from the
top-order terms only; everything else follows.

| | **Elliptic** | **Parabolic** | **Hyperbolic** |
|---|---|---|---|
| Discriminant | $\Delta < 0$ | $\Delta = 0$ | $\Delta > 0$ |
| Model equation | $u_{xx}+u_{yy}=0$ (Laplace) | $u_t = k\,u_{xx}$ (heat) | $u_{tt}=c^2u_{xx}$ (wave) |
| Real characteristics | none | one family | two families |
| Canonical form | $u_{\xi\xi}+u_{\eta\eta}=\cdots$ | $u_{\xi\xi}=\cdots$ | $u_{\xi\eta}=\cdots$ |
| Physical character | equilibrium; no time | diffusion; smooths, irreversible | signals; sharp features preserved |
| Propagation speed | none (whole boundary at once) | infinite (kernel positive everywhere) | finite, exactly $c$ |
| Well-posed data | $u$ or $u_n$ on the **entire closed boundary** | $u(x,0)$ **plus** BCs, forward $t$ only | $u(x,0)$ **and** $u_t(x,0)$, plus BCs on a finite domain |
| Number of initial conditions | none — no time direction | one (one $t$-derivative) | two (two $t$-derivatives) |
| Maximum principle? | yes, on $\partial\Omega$ | yes, on $\partial_p Q$ | **no** — use conserved energy instead |
| Signature failure | Cauchy data $\Rightarrow$ Hadamard blow-up | running backward in $t$ is ill-posed | none of these; kinks persist forever |

Type can be **local**: with variable coefficients, $\Delta$ changes sign with
position (Tricomi $y\,u_{xx}+u_{yy}=0$ is elliptic for $y>0$, hyperbolic for
$y<0$).

*From* [1.4](lessons/01-04-classifying-second-order-pdes.md), [1.5](lessons/01-05-characteristics-well-posedness.md), [2.1](lessons/02-01-heat-diffusion-equations.md), [2.2](lessons/02-02-wave-equation-dalembert.md), [2.3](lessons/02-03-laplace-poisson-equations.md), [2.4](lessons/02-04-maximum-principles.md)

### Which method for which problem

| Method | Use when | Delivers | Where |
|---|---|---|---|
| Method of characteristics | first-order (linear or quasilinear), any hyperbolic transport | exact solution by carrying data along curves; shows *when* it fails | [1.2](lessons/01-02-method-of-characteristics-first-order.md), [1.3](lessons/01-03-quasilinear-first-order.md) |
| d'Alembert | 1D wave equation on the line | closed form, and the domain of dependence for free | [2.2](lessons/02-02-wave-equation-dalembert.md) |
| Maximum principle | elliptic or parabolic; you want bounds or uniqueness | bounds and uniqueness **without solving** | [2.4](lessons/02-04-maximum-principles.md) |
| Separation of variables | **bounded**, separable geometry, **homogeneous** separable BCs | eigenvalue problem + time ODE, superposed into a series | [3.1](lessons/03-01-separation-of-variables.md) |
| Fourier / eigenfunction expansion | the data (or source) must be matched to those modes | coefficients by one projection integral each | [3.2](lessons/03-02-fourier-series.md), [3.5](lessons/03-05-eigenfunction-expansions-inhomogeneous.md) |
| Sturm–Liouville theory | any separable geometry, to justify the above | real eigenvalues, $w$-orthogonality, completeness | [3.4](lessons/03-04-sturm-liouville-theory.md) |
| Fourier transform | **unbounded** spatial domain (the whole line) | algebra in $\xi$; solution as a convolution against a kernel | [4.1](lessons/04-01-fourier-transform.md), [4.2](lessons/04-02-heat-equation-line-heat-kernel.md), [4.3](lessons/04-03-wave-equation-line-dispersion.md) |
| Laplace transform | evolution with a definite start; "at $t=0$ something happened" | ODE in $x$ with $s$ a parameter, initial data built in | [4.4](lessons/04-04-laplace-transform-evolution.md) |
| Green's functions | linear equation, point-source decomposition, any source $f$ | $u = \int G f$, one integral per problem forever after | [5.2](lessons/05-02-greens-functions-poisson.md) |
| Method of images | Green's function on a **highly symmetric** domain (plane, sphere, wedge $\pi/n$) | boundary condition enforced by a phantom source | [5.3](lessons/05-03-method-of-images.md) |
| Duhamel's principle | linear evolution with a **source**, zero initial data | driven answer from the undriven solver | [5.4](lessons/05-04-duhamels-principle.md) |
| Rankine–Hugoniot + entropy | nonlinear conservation law past the breaking time | shock speed and which jumps are physical | [6.1](lessons/06-01-nonlinear-shocks-burgers.md) |
| Finite differences | no closed form, real geometry | numbers — if you respect the stability limit | [6.2](lessons/06-02-finite-differences-well-posedness.md) |
| Separation in polar / spherical | round geometry | same machine, new alphabet: $J_n$, $P_\ell$, $Y_\ell^m$ | [6.3](lessons/06-03-separation-polar-spherical.md) |

### First-order: the characteristic recipe

For $a\,u_x + b\,u_t = c\,u + d$: solve $\dot x = a$, $\dot t = b$ for the curves;
solve $\dot u = c\,u + d$ along them; then **invert** $(s, x_0) \to (x,t)$. The
final inversion is where the actual solution appears.

| Equation | Characteristics | Solution |
|---|---|---|
| $u_t + c\,u_x = 0$ | $x - ct = \text{const}$ (straight) | $u = f(x-ct)$ — rigid slide at speed $c$ |
| $u_t + x\,u_x = 0$ | $x e^{-t} = \text{const}$ | $u = g(x e^{-t})$ |
| $u_t + t\,u_x = 0$ | $x - \tfrac12 t^2 = \text{const}$ (parabolas) | $u = g\!\left(x - \tfrac12 t^2\right)$ |
| $u_t + c\,u_x = 1$ | $x - ct = \text{const}$ | $u = g(x-ct) + t$ |
| $u_t + u_x = u$ | $x - t = \text{const}$ | $u = g(x-t)\,e^{t}$ |
| $u_t + u\,u_x = 0$ | $x = x_0 + f(x_0)t$, slope $=$ carried value | $u = f(x-ut)$ implicitly, valid for $t < t^{*}$ |

*From* [1.1](lessons/01-01-what-is-a-pde-transport.md), [1.2](lessons/01-02-method-of-characteristics-first-order.md), [1.3](lessons/01-03-quasilinear-first-order.md)

### Classification and characteristic slopes

$$A\!\left(\frac{dy}{dx}\right)^2 - 2B\,\frac{dy}{dx} + C = 0 \quad\Longrightarrow\quad \frac{dy}{dx} = \frac{B \pm \sqrt{B^2-AC}}{A}$$

Two real slopes when $\Delta>0$, one when $\Delta=0$, none when $\Delta<0$ — the
sign story again. Coordinates $\xi,\eta$ constant along the two characteristic
families reduce a hyperbolic equation to $u_{\xi\eta} = \text{lower order}$, which
integrates by inspection to $u = F(\xi) + G(\eta)$.

**Convention warning.** With the $2B$ convention above, $B$ is *half* the number
multiplying $u_{xy}$ and the test is $B^2 - AC$. Texts that write $B\,u_{xy}$
instead use $B^2 - 4AC$. The two always agree in **sign**, which is all that
matters — but do not mix them inside one calculation.

*From* [1.4](lessons/01-04-classifying-second-order-pdes.md)

### Boundary conditions: what each one does

| Condition | Statement | Physically | Picks the eigenfunctions | Uniqueness |
|---|---|---|---|---|
| **Dirichlet** | $u = g$ on $\partial\Omega$ | the value is held (clamped end, fixed temperature) | **sines** on $[0,L]$ (odd extension) | unique |
| **Neumann** | $\partial u/\partial n = h$ on $\partial\Omega$ | the flux is held (insulated end, no flow through) | **cosines**, including the constant $\lambda_0 = 0$ mode (even extension) | unique **up to an additive constant**; needs the compatibility condition $\oint_{\partial\Omega} h\,dS = -\int_\Omega f$ (for Laplace, $\oint h\,dS = 0$) |
| **Robin / mixed** | $\alpha u + \beta\,\partial u/\partial n = h$ | partial insulation, radiative loss | the S–L eigenfunctions of *that* problem; transcendental eigenvalue equation | unique for the usual sign choices |
| **Mixed ends** | e.g. $u(0)=0$, $u_x(L)=0$ | one clamped, one insulated | **quarter-wave** sines $\sin\frac{(2n-1)\pi x}{2L}$ | unique |
| **Periodic** | $u(-L)=u(L)$, $u'(-L)=u'(L)$ | a ring, or an angle wrapping around | sines **and** cosines (full series); eigenvalues doubly degenerate | unique up to a constant when purely Neumann-like |

Homogeneous means the right-hand side is zero. **Separation of variables needs
homogeneous BCs** — if the ends are held at nonzero values $A$ and $B$, subtract
the steady profile $w(x) = A + \frac{B-A}{L}x$ first and expand $v = u - w$.

*From* [2.3](lessons/02-03-laplace-poisson-equations.md), [3.1](lessons/03-01-separation-of-variables.md), [3.2](lessons/03-02-fourier-series.md), [3.5](lessons/03-05-eigenfunction-expansions-inhomogeneous.md)

### The standard eigenvalue problems

Every separation-of-variables problem in this course lands on $X'' = -\lambda X$
on $[0,L]$ with two homogeneous conditions. These are the answers.

| Boundary conditions | Eigenvalues $\lambda_n$ | Eigenfunctions $X_n$ | $n$ | $\int_0^L X_n^2\,dx$ |
|---|---|---|---|---|
| $X(0)=X(L)=0$ | $\left(\dfrac{n\pi}{L}\right)^2$ | $\sin\dfrac{n\pi x}{L}$ | $1,2,3,\dots$ | $L/2$ |
| $X'(0)=X'(L)=0$ | $\left(\dfrac{n\pi}{L}\right)^2$ | $\cos\dfrac{n\pi x}{L}$ | $0,1,2,\dots$ | $L$ for $n=0$; $L/2$ else |
| $X(0)=0,\ X'(L)=0$ | $\left(\dfrac{(2n-1)\pi}{2L}\right)^2$ | $\sin\dfrac{(2n-1)\pi x}{2L}$ | $1,2,3,\dots$ | $L/2$ |
| $X'(0)=0,\ X(L)=0$ | $\left(\dfrac{(2n-1)\pi}{2L}\right)^2$ | $\cos\dfrac{(2n-1)\pi x}{2L}$ | $1,2,3,\dots$ | $L/2$ |
| periodic on $[-L,L]$ | $\left(\dfrac{n\pi}{L}\right)^2$ | $\cos\dfrac{n\pi x}{L},\ \sin\dfrac{n\pi x}{L}$ | $0,1,2,\dots$ | $2L$ for $n=0$; $L$ else |

Case-check the sign of $\lambda$ rather than assuming: with Dirichlet ends,
$\lambda<0$ and $\lambda=0$ both give only $X\equiv 0$; with Neumann ends,
$\lambda=0$ **survives** as the constant mode (the rod's average temperature).

*From* [3.1](lessons/03-01-separation-of-variables.md), [3.2](lessons/03-02-fourier-series.md)

### Separated solutions: the time (or second-variable) factor

Same spatial skeleton, different second ODE — that's what decides whether modes
fade, sing, or grow.

| Equation | Second ODE | Factor for mode $n$ |
|---|---|---|
| heat $u_t = k\,u_{xx}$ | $T' = -k\lambda_n T$ | $e^{-k\lambda_n t}$ — decays, and $\lambda_n \sim n^2$ so mode $n$ dies $n^2$ times faster |
| wave $u_{tt} = c^2u_{xx}$ | $T'' = -c^2\lambda_n T$ | $a_n\cos\omega_n t + b_n\sin\omega_n t$, $\ \omega_n = c\sqrt{\lambda_n}$ — integer-multiple overtones on an interval |
| Laplace $u_{xx}+u_{yy}=0$ | $Y'' = +\lambda_n Y$ | $\sinh,\ \cosh$ (or $e^{\pm\sqrt{\lambda_n}\,y}$); build the combination that vanishes on the zero edge, e.g. $\sinh(\sqrt{\lambda_n}(H-y))$ |
| forced heat $u_t = k u_{xx} + Q$ | $c_n' = -k\lambda_n c_n + q_n(t)$ | $c_n(0)e^{-k\lambda_n t} + \displaystyle\int_0^t e^{-k\lambda_n(t-\tau)}q_n(\tau)\,d\tau$ |
| forced wave | $c_n'' + \omega_n^2 c_n = F_n(t)$ | bounded off resonance; grows like $t$ when $F_n$ oscillates at $\omega_n$ |

*From* [3.1](lessons/03-01-separation-of-variables.md), [2.3](lessons/02-03-laplace-poisson-equations.md), [3.5](lessons/03-05-eigenfunction-expansions-inhomogeneous.md)

### Fourier series: orthogonality and coefficients

$$\int_0^L \sin\frac{n\pi x}{L}\sin\frac{m\pi x}{L}\,dx = \int_0^L \cos\frac{n\pi x}{L}\cos\frac{m\pi x}{L}\,dx = \begin{cases}0, & n\neq m\\ L/2, & n=m\ge 1\end{cases}$$

$$\text{sine: } b_n = \frac{2}{L}\int_0^L f\sin\frac{n\pi x}{L}dx \qquad \text{cosine: } a_n = \frac{2}{L}\int_0^L f\cos\frac{n\pi x}{L}dx,\quad \frac{a_0}{2} = \text{mean of } f$$

$$\text{full on } [-L,L]: \quad a_n,\,b_n = \frac{1}{L}\int_{-L}^{L} f(x)\,\{\cos,\sin\}\frac{n\pi x}{L}\,dx$$

Every coefficient is one projection,
$c_n = \langle f,\varphi_n\rangle / \langle \varphi_n,\varphi_n\rangle$ — remember the
mechanism, not the constants.

Two series worth knowing cold, both on $(0,L)$:

$$1 = \frac{4}{\pi}\sum_{k=0}^{\infty}\frac{1}{2k+1}\sin\frac{(2k+1)\pi x}{L}, \qquad x = \frac{2L}{\pi}\sum_{n=1}^{\infty}\frac{(-1)^{n+1}}{n}\sin\frac{n\pi x}{L}$$

*From* [3.2](lessons/03-02-fourier-series.md)

### Convergence: three meanings and one decay law

| Mode | Hypothesis | Conclusion |
|---|---|---|
| Pointwise (Dirichlet) | $f$ piecewise smooth | $S_N(x) \to \tfrac12[f(x^{+})+f(x^{-})]$ — the **midpoint** at a jump |
| Uniform | $f$ continuous, piecewise $C^1$, **and** $f(-L)=f(L)$ | $\max_x|f-S_N|\to 0$; only then may you differentiate term by term freely |
| Mean-square (Parseval) | $f$ square-integrable | $\displaystyle\frac1L\int_{-L}^{L}f^2dx = \frac{a_0^2}{2}+\sum_{n\ge1}(a_n^2+b_n^2)$ |

**Decay reads off smoothness:** $p-1$ continuous derivatives with a piecewise
continuous $p$-th gives $|a_n|,|b_n| = O(1/n^{p})$. A jump gives $1/n$; a corner
gives $1/n^2$; infinitely smooth beats every power. Integrating a series is
always safe (coefficients gain $1/n$); differentiating multiplies by $n$ and can
destroy convergence.

Sums this course extracts from Parseval: $\sum_{n\ge1} 1/n^2 = \pi^2/6$ and
$\sum_{k\ge1} 1/(2k-1)^2 = \pi^2/8$.

*From* [3.3](lessons/03-03-convergence-fourier-series.md)

### Sturm–Liouville: the theorem and the conversion

For a regular problem, $L u = -\frac{1}{w}\big[(p\,u')' + q\,u\big] = \lambda u$
is self-adjoint against $\langle\cdot,\cdot\rangle_w$, and therefore:

1. eigenvalues are **real** and increase, $\lambda_1<\lambda_2<\cdots\to\infty$ (and each is simple);
2. eigenfunctions for distinct eigenvalues are **$w$-orthogonal**, $\int_a^b \varphi_n\varphi_m\,w\,dx = 0$;
3. eigenfunctions are **complete**: $f = \sum c_n\varphi_n$ with $c_n = \langle f,\varphi_n\rangle_w/\langle\varphi_n,\varphi_n\rangle_w$.

Self-adjointness comes from **Lagrange's identity** plus the boundary conditions
killing the bracket:

$$\int_a^b\big(\varphi_n L\varphi_m - \varphi_m L\varphi_n\big)w\,dx = \Big[-p\big(\varphi_n\varphi_m' - \varphi_m\varphi_n'\big)\Big]_a^b$$

**Putting an ODE into S–L form.** Given $y'' + P(x)y' + \big(Q(x)+\lambda R(x)\big)y = 0$,
multiply by the integrating factor $\mu = \exp\!\left(\int P\,dx\right)$; then
$p = \mu$, $q = \mu Q$, $w = \mu R$. Example: $x^2y''+xy'+\lambda y = 0$ becomes
$(x\,y')' + \lambda\,\tfrac{1}{x}\,y = 0$, so $p=x$, $q=0$, $w = 1/x$ — the
archetype of a nonconstant weight.

*From* [3.4](lessons/03-04-sturm-liouville-theory.md)

### Fourier transform: rules and pairs

Convention (fixed for the whole course): $e^{-i\xi x}$ forward, $\tfrac{1}{2\pi}$
on the inverse.

| Rule | Statement |
|---|---|
| derivative | $\widehat{u'} = i\xi\,\hat u$, so $\widehat{u''} = -\xi^2\hat u$ |
| convolution | $\widehat{f * g} = \hat f\,\hat g$ |
| Plancherel | $\int|u|^2dx = \frac{1}{2\pi}\int|\hat u|^2 d\xi$ |
| scaling | $\widehat{u(sx)}(\xi) = \frac{1}{|s|}\hat u(\xi/s)$ — narrow in $x$ means wide in $\xi$, always |
| multiply by $x$ | corresponds (up to $\pm i$) to differentiating in $\xi$ |

| $u(x)$ | $\hat u(\xi)$ |
|---|---|
| $e^{-ax^2}$ | $\sqrt{\pi/a}\;e^{-\xi^2/4a}$ |
| $e^{-x^2/2}$ | $\sqrt{2\pi}\,e^{-\xi^2/2}$ |
| box: $1$ on $[-L,L]$ | $\dfrac{2\sin(L\xi)}{\xi}$ (a sinc) |
| $e^{-a|x|}$, $a>0$ | $\dfrac{2a}{a^2+\xi^2}$ (a Lorentzian) |
| $\delta(x)$ | $1$ — a point source is an equal blend of all frequencies |

*From* [4.1](lessons/04-01-fourier-transform.md), [5.1](lessons/05-01-dirac-delta-distributions.md)

### Solutions on the whole line

**Heat.** Transform, decay each mode, invert:

$$\hat u(\xi,t) = \hat u_0(\xi)\,e^{-k\xi^2 t} \quad\Longrightarrow\quad u(x,t) = \int_{-\infty}^{\infty}\Phi(x-y,t)\,u_0(y)\,dy, \qquad \Phi(x,t) = \frac{1}{\sqrt{4\pi k t}}\,e^{-x^2/(4kt)}$$

The kernel has area $1$ for every $t>0$ (heat is conserved), peak height
$\propto t^{-1/2}$, and width $\sigma = \sqrt{2kt} \propto \sqrt{t}$. **Diffusive
scaling:** to spread twice as far, wait four times as long. A Gaussian stays a
Gaussian: $u_0 = e^{-x^2}$ gives $u = (1+4kt)^{-1/2}\exp\!\big(-x^2/(1+4kt)\big)$.

**Wave (d'Alembert).**

$$u(x,t) = \tfrac12\big[\varphi(x-ct)+\varphi(x+ct)\big] + \frac{1}{2c}\int_{x-ct}^{x+ct}\psi(s)\,ds$$

Average of the initial shape at the two ends of the domain of dependence, plus
$\tfrac{1}{2c}$ times the initial velocity stored between them. Displacement data
splits into two half-height copies; velocity data leaves a permanent widening
plateau.

**Slab of heat.** $u_0 = 1$ on $[-a,a]$ gives
$u = \tfrac12\big[\operatorname{erf}\frac{a-x}{\sqrt{4kt}} + \operatorname{erf}\frac{a+x}{\sqrt{4kt}}\big]$,
with $\operatorname{erf}(w) = \frac{2}{\sqrt\pi}\int_0^w e^{-z^2}dz$ and
$\operatorname{erfc} = 1-\operatorname{erf}$.

*From* [4.2](lessons/04-02-heat-equation-line-heat-kernel.md), [2.2](lessons/02-02-wave-equation-dalembert.md)

### Dispersion relations

Substitute $u = e^{i(\xi x - \omega t)}$ and cancel. Then $v_p = \omega/\xi$
(crests) and $v_g = d\omega/d\xi$ (envelope — this is what carries energy and
information).

| Equation | $\omega(\xi)$ | $v_p$ | $v_g$ | Verdict |
|---|---|---|---|---|
| wave $u_{tt}=c^2u_{xx}$ | $\pm c\xi$ | $\pm c$ | $\pm c$ | non-dispersive — shapes rigid |
| free Schrödinger $i\psi_t = -\psi_{xx}$ | $\xi^2$ | $\xi$ | $2\xi = 2v_p$ | dispersive; packet spreads, reversibly |
| Klein–Gordon $u_{tt}=c^2u_{xx}-m^2u$ | $\sqrt{c^2\xi^2+m^2}$ | $>c$ | $<c$ | dispersive, with $v_p v_g = c^2$ |
| Airy / linear KdV $u_t = u_{xxx}$ | $\xi^3$ | $\xi^2$ | $3\xi^2$ | strongly dispersive, rightward |
| beam $u_{tt} = -\gamma u_{xxxx}$ | $\pm\sqrt\gamma\,\xi^2$ | $\pm\sqrt\gamma\,\xi$ | $\pm 2\sqrt\gamma\,\xi$ | dispersive — why a plate thuds |

**Dispersion is not dissipation.** A dispersing packet loses no energy and can be
run backwards; the heat equation's *real* exponent $e^{-k\xi^2t}$ genuinely
destroys information.

*From* [4.3](lessons/04-03-wave-equation-line-dispersion.md), [4.4](lessons/04-04-laplace-transform-evolution.md)

### Laplace transform in time

$$U(x,s) = \int_0^\infty u(x,t)\,e^{-st}\,dt, \qquad \mathcal L\{u_t\} = sU - u(x,0), \qquad \mathcal L\{u_{tt}\} = s^2U - s\,u(x,0) - u_t(x,0)$$

Space derivatives pass straight through ($\mathcal L\{u_{xx}\} = U_{xx}$), so an
evolution PDE becomes an ODE in $x$ with $s$ carried along as a parameter — and
the initial data is already inside, never imposed separately.

| $f(t)$ | $\mathcal L\{f\}$ |
|---|---|
| $1$ | $1/s$ |
| $t$ | $1/s^2$ |
| $e^{-at}$ | $1/(s+a)$ |
| $\operatorname{erfc}\!\left(\dfrac{a}{2\sqrt t}\right)$ | $\dfrac{1}{s}e^{-a\sqrt s}$ |

**Worked archetype.** Semi-infinite rod, cold at $t=0$, face suddenly clamped at
$T_0$: $U = \frac{T_0}{s}e^{-\sqrt{s/k}\,x}$, hence

$$u(x,t) = T_0\,\operatorname{erfc}\!\left(\frac{x}{2\sqrt{kt}}\right),$$

the standard penetration profile. The half-temperature depth is
$\delta(t)\approx 0.95\sqrt{kt}$ — a $\sqrt{t}$ front, no finite propagation speed.

*From* [4.4](lessons/04-04-laplace-transform-evolution.md)

### Delta and distribution rules

$$\int\delta(x-a)\varphi(x)\,dx = \varphi(a), \qquad \int\delta'(x)\varphi(x)\,dx = -\varphi'(0), \qquad H'(x) = \delta(x)$$

A jump of height $c$ in the **value** puts $c\,\delta$ in the **first**
derivative; a corner (like $|x|$) is one order smoother, so its delta appears in
the **second**: $|x|'' = 2\delta(x)$. A source of strength $Q$ is $Q\,\delta$.
Since $\int\delta\,dx=1$ is dimensionless, $\delta$ has units of one over length
— it is a density. Standard scaling: $\delta(ax) = \delta(x)/|a|$.

*From* [5.1](lessons/05-01-dirac-delta-distributions.md)

### Green's functions and images

Free-space Green's functions of $-\nabla^2$ (that is, $-\nabla^2 G = \delta$):

| Dimension | $G$ | Behavior far away |
|---|---|---|
| 1D | $-\tfrac12|x-y|$ | a tent; $u'$ jumps by $-1$ across the source |
| 2D | $-\dfrac{1}{2\pi}\ln|x-y|$ | **grows** without bound |
| 3D | $\dfrac{1}{4\pi\,|x-y|}$ | decays like $1/r$ — the Coulomb/Newtonian potential |

Fix the constant by a flux argument: $\oint_{r=\varepsilon}(-\nabla G)\cdot\mathbf n\,dS = 1$
for *every* small sphere or circle.

**Images.** Reflect the source across the boundary; the sign is dictated by the
condition, and the image must lie strictly **outside** the domain.

| Geometry | Image | Sign |
|---|---|---|
| half-space, Dirichlet ($u=0$) | mirror point $\mathbf x'^{*}$ | **opposite** — contributions cancel on the wall |
| half-space, Neumann ($u_n=0$) | mirror point | **same** — normal derivatives cancel |
| sphere radius $R$, source at distance $a$ | at $b = R^2/a$ on the same ray (Kelvin inversion) | strength $-R/a$ |
| wedge of angle $\pi/n$ | $2n-1$ images, alternating | alternating |

Half-space Dirichlet Green's function and the two standard checks it passes:

$$G = \frac{1}{4\pi}\left[\frac{1}{|\mathbf x-\mathbf x'|} - \frac{1}{|\mathbf x-\mathbf x'^{*}|}\right] \;\Rightarrow\; G = 0 \text{ on the plane},\quad -\nabla^2 G = \delta(\mathbf x - \mathbf x') \text{ inside}$$

*From* [5.2](lessons/05-02-greens-functions-poisson.md), [5.3](lessons/05-03-method-of-images.md)

### Duhamel, in the three cases you'll meet

| Problem | Formula |
|---|---|
| ODE $u' + a\,u = f$, $u(0)=0$ | $u(t) = \displaystyle\int_0^t e^{-a(t-\tau)}f(\tau)\,d\tau$ (this **is** variation of parameters) |
| heat on the line, forced | $u(x,t) = \displaystyle\int_0^t\!\!\int_{-\infty}^{\infty}\Phi(x-y,\,t-\tau)\,f(y,\tau)\,dy\,d\tau$ |
| wave on the line, forced | $u(x,t) = \dfrac{1}{2c}\displaystyle\int_0^t\!\!\int_{x-c(t-\tau)}^{x+c(t-\tau)} f(y,\tau)\,dy\,d\tau$ — the backward light cone |

Nonzero initial data is **added separately**: total $=$ $[S(t)u_0](x)$ $+$ the
Duhamel integral.

*From* [5.4](lessons/05-04-duhamels-principle.md)

### Conservation laws, shocks, and rarefactions

$$u_t + F(u)_x = 0; \qquad \text{Burgers: } F(u) = \tfrac12 u^2 \ \Rightarrow\ u_t + u\,u_x = 0$$

**Rankine–Hugoniot** (jump in flux over jump in quantity):

$$s = \frac{F(u_L)-F(u_R)}{u_L-u_R} = \frac{[F]}{[u]}, \qquad \text{for Burgers } s = \frac{u_L+u_R}{2}$$

**Entropy condition:** admissible only if $u_L > s > u_R$, i.e. $u_L > u_R$ for
Burgers — a compression. Where the data *increases*, no shock is allowed; fill the
wedge with the self-similar **rarefaction fan**

$$u(x,t) = \frac{x}{t} \quad \text{for } u_L t \le x \le u_R t,$$

matched to the constant states on either side. Both selections are the
vanishing-viscosity limit of $u_t + u u_x = \varepsilon u_{xx}$ as
$\varepsilon\to0^{+}$.

*From* [6.1](lessons/06-01-nonlinear-shocks-burgers.md)

### Finite differences: stencils and stability

$$u_x \approx \frac{u_{j+1}-u_j}{\Delta x},\quad \frac{u_j-u_{j-1}}{\Delta x},\quad \frac{u_{j+1}-u_{j-1}}{2\Delta x}; \qquad u_{xx} \approx \frac{u_{j+1}-2u_j+u_{j-1}}{\Delta x^2}$$

Von Neumann: put $u_j^n = G^n e^{i\beta j\Delta x}$ into the scheme; stable iff
$|G(\beta)|\le 1$ for every $\beta$.

| Scheme | $G(\beta)$ | Stability |
|---|---|---|
| FTCS heat, $u_j^{n+1}=u_j^n + r(u_{j+1}^n-2u_j^n+u_{j-1}^n)$ | $1-2r(1-\cos\beta\Delta x)$ | $r = \dfrac{k\Delta t}{\Delta x^2}\le \dfrac12$ |
| backward Euler (implicit) heat | $\dfrac{1}{1+2r(1-\cos\beta\Delta x)}$ | **unconditionally** stable (cost: a tridiagonal solve each step) |
| explicit central wave | — | CFL: $\dfrac{c\,\Delta t}{\Delta x}\le 1$ |
| forward-time central-space advection | $1 - i\nu\sin\beta\Delta x$, $\ |G|^2 = 1+\nu^2\sin^2\beta\Delta x$ | **unconditionally unstable** — bias the stencil upwind instead |

**CFL is the domain of dependence, discretized:** the numerical cone must contain
the physical characteristic cone, or the scheme is blind to data that genuinely
affects the answer.

*From* [6.2](lessons/06-02-finite-differences-well-posedness.md)

### Curved coordinates and their special functions

$$\nabla^2 u = u_{rr} + \frac1r u_r + \frac{1}{r^2}u_{\theta\theta} \quad (\text{2D polar}), \qquad \nabla^2 u = \frac{1}{r^2}\big(r^2u_r\big)_r + \frac{1}{r^2\sin\theta}\big(\sin\theta\,u_\theta\big)_\theta + \cdots \quad (\text{3D spherical})$$

| Problem | Angular part | Radial part | Quantized because |
|---|---|---|---|
| Laplace on a disk | $\Theta'' = -n^2\Theta \Rightarrow \cos n\theta,\ \sin n\theta$ | Euler: $r^{n}$ (inside), $r^{-n}$ (outside); $1,\ \ln r$ for $n=0$ | $\Theta(\theta+2\pi)=\Theta(\theta)$ forces $n\in\mathbb Z_{\ge0}$ |
| Helmholtz on a disk (drum) | same | Bessel: $\rho^2R''+\rho R'+(\rho^2-n^2)R=0$, $\rho=kr$, finite solution $J_n$ | rim condition $J_n(ka)=0 \Rightarrow k_{n,m}=\alpha_{n,m}/a$ |
| Laplace on a sphere (axisymmetric) | Legendre: $\frac{d}{dx}\big[(1-x^2)P'\big]+\ell(\ell+1)P=0$, $x=\cos\theta$ | Euler: $r^{\ell}$, $r^{-\ell-1}$ | boundedness at the poles forces $\ell = 0,1,2,\dots$ |
| Laplace on a sphere (general) | $Y_\ell^m(\theta,\phi) = P_\ell^m(\cos\theta)\,e^{im\phi}$ | same | periodicity in $\phi$ and boundedness in $\theta$ |

Interior Dirichlet problem on the disk of radius $a$ with data $f(\theta)$:

$$u(r,\theta) = \frac{a_0}{2} + \sum_{n\ge1} r^{n}\big(a_n\cos n\theta + b_n\sin n\theta\big), \qquad a_n = \frac{1}{\pi a^{n}}\int_0^{2\pi}\! f\cos n\theta\,d\theta$$

(and $b_n$ with $\sin$). Drum zeros: $\alpha_{0,1}\approx 2.405$,
$\alpha_{0,2}\approx 5.520$, $\alpha_{0,3}\approx 8.654$ — ratios are **not**
integers, which is why a drum thuds where a string sings. The $m$-th radial mode
has $m-1$ interior nodal circles. All four families
($\cos n\theta$/$\sin n\theta$, $J_n$, $P_\ell$, $Y_\ell^m$) are Sturm–Liouville
eigenfunctions, so Module 3's expand-and-match machine applies unchanged.

*From* [6.3](lessons/06-03-separation-polar-spherical.md)

### Standard integrals and identities the lessons use silently

$$\int_{-\infty}^{\infty} e^{-z^2}dz = \sqrt\pi, \qquad \int_{-\infty}^{\infty} e^{-a x^2}dx = \sqrt{\pi/a}$$

$$\frac{1}{2\pi}\int_{-\infty}^{\infty} e^{-\alpha\xi^2}e^{i\xi x}\,d\xi = \frac{1}{\sqrt{4\pi\alpha}}\,e^{-x^2/4\alpha} \quad (\text{holds for complex }\alpha \text{ with } \operatorname{Re}\alpha>0)$$

$$\sin A + \sin B = 2\sin\tfrac{A+B}{2}\cos\tfrac{A-B}{2}, \qquad \sin A - \sin B = 2\cos\tfrac{A+B}{2}\sin\tfrac{A-B}{2}$$

$$\cos A\cos B = \tfrac12\big[\cos(A-B)+\cos(A+B)\big], \qquad \cos n\pi = (-1)^n,\quad \sin n\pi = 0$$

Radial Laplacians for a function of $r$ alone: $\ \nabla^2 u = \frac1r(r u_r)_r$
in 2D, $\ \nabla^2 u = \frac{1}{r^2}(r^2 u_r)_r$ in 3D. These are what make the
one-line checks that $\ln r$ and $1/r$ are harmonic away from the origin.

*From* [2.3](lessons/02-03-laplace-poisson-equations.md), [3.3](lessons/03-03-convergence-fourier-series.md), [4.1](lessons/04-01-fourier-transform.md), [4.2](lessons/04-02-heat-equation-line-heat-kernel.md), [5.2](lessons/05-02-greens-functions-poisson.md)

## Assumed, not taught here

This is a Tier 1 course; it assumes the calculus, ODE, and analysis prerequisites
and re-derives almost nothing from them.

| Fact | Where it's taught |
|---|---|
| Solving $X'' = -\lambda X$ (sines/cosines vs. exponentials vs. $\sinh/\cosh$) — the engine of every separation | [ode-refresher 2.1](../ode-refresher/lessons/02-01-second-order-constant-coefficient.md) |
| First-order linear ODE by integrating factor (every $c_n(t)$ equation) | [ode-refresher 1.2](../ode-refresher/lessons/01-02-separable-and-linear-first-order.md) |
| Euler equations $r^2R''+rR'-n^2R=0$ and repeated-root cases; the Wronskian and Abel's theorem | [ode-refresher 2.1](../ode-refresher/lessons/02-01-second-order-constant-coefficient.md) |
| Driven oscillator, resonance, and the $t$-growing particular solution | [ode-refresher 2.3](../ode-refresher/lessons/02-03-forcing-resonance.md) |
| Laplace transform mechanics and table lookup, variation of parameters | [ode-refresher 4.1](../ode-refresher/lessons/04-01-laplace-transform.md) |
| The first sighting of separation of variables for a PDE | [ode-refresher 4.2](../ode-refresher/lessons/04-02-intro-pdes-separation.md) |
| Partial derivatives, gradient, chain rule along a curve (how $a u_x + b u_t$ becomes $du/ds$) | [calc-refresher 4.1](../calc-refresher/lessons/04-01-partial-derivatives-and-gradient.md) |
| Integration by parts (every coefficient integral and every self-adjointness proof) | [calc-refresher 2.2](../calc-refresher/lessons/02-02-integration-techniques.md) |
| The Gaussian integral $\int e^{-z^2}dz=\sqrt\pi$, polar coordinates, area/volume elements | [calc-refresher 4.3](../calc-refresher/lessons/04-03-multiple-integrals.md) |
| Divergence theorem — used to pin the Green's-function constant by flux | [calc-refresher 5.3](../calc-refresher/lessons/05-03-green-stokes-divergence.md) |
| Divergence, flux, normal derivative | [calc-refresher 5.1](../calc-refresher/lessons/05-01-vector-fields-div-curl.md), [5.2](../calc-refresher/lessons/05-02-line-integrals-and-flux.md) |
| Improper integrals and the $p$-test that governs coefficient decay | [calc-refresher 2.3](../calc-refresher/lessons/02-03-improper-integrals-and-models.md) |
| Pointwise vs. uniform convergence, and what uniform convergence lets you swap | [real-analysis 8.1](../real-analysis/lessons/08-01-pointwise-vs-uniform.md), [8.2](../real-analysis/lessons/08-02-what-uniform-convergence-preserves.md) |
| Series convergence tests behind $O(1/n^p)$ coefficient decay | [real-analysis 3.2](../real-analysis/lessons/03-02-convergence-tests.md) |
| Eigenvalues/eigenvectors, and why symmetric matrices give real eigenvalues and orthogonal eigenvectors (the finite-dimensional S–L theorem) | [linalg-refresher 3.1](../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md), [5.1](../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md) |
| Inner products, orthogonality, and projection onto a basis (what a Fourier coefficient *is*) | [linalg-refresher 4.1](../linalg-refresher/lessons/04-01-inner-products-orthogonality.md), [4.2](../linalg-refresher/lessons/04-02-projection-least-squares.md) |
| Complex exponentials $e^{i\theta}$ and their algebra | [complex-analysis 1.3](../complex-analysis/lessons/01-03-exponential-log-trig.md) |
| Contour shifting for the Gaussian transform, and the Bromwich integral for honest Laplace inversion | [complex-analysis 4.1](../complex-analysis/lessons/04-01-contour-integrals.md), [6.2](../complex-analysis/lessons/06-02-computing-residues-real-integrals.md) |
| Harmonic functions as real parts of holomorphic ones; mean-value property as Cauchy's formula | [complex-analysis 2.3](../complex-analysis/lessons/02-03-harmonic-functions-conformality.md), [4.3](../complex-analysis/lessons/04-03-cauchy-integral-formula.md) |
| Completeness of eigenfunctions, weak solutions, Sobolev spaces — deliberately *not* proved here | [functional-analysis](../functional-analysis/reference.md) |

Bessel and Legendre functions are used as *names* in [6.3](lessons/06-03-separation-polar-spherical.md)
(orthogonal, complete, zeros tabulated); their detailed theory has no course in
this library — treat the table above as the working definition.

## Pitfalls

### Characteristics and first-order equations

- A PDE's raw solution set is enormous — *any* differentiable $f$ solves transport. You pin it down with a whole function's worth of data along a curve, not a point. *([1.1](lessons/01-01-what-is-a-pde-transport.md))*
- Nothing material moves in $u=f(x-ct)$; the **pattern** translates. And the sign of $c$ sets the direction — get $x-ct$ backwards and the wave runs the wrong way. *([1.1](lessons/01-01-what-is-a-pde-transport.md))*
- $s$ runs *along* one characteristic; $x_0$ picks *which* characteristic. Two coordinates, two jobs — and the final inversion back to $(x,t)$ is where the solution actually appears. *([1.2](lessons/01-02-method-of-characteristics-first-order.md))*
- Cauchy data on a **characteristic** curve breaks the method silently: no solution, or infinitely many. Default to $t=0$, which characteristics cross transversally. *([1.2](lessons/01-02-method-of-characteristics-first-order.md))*
- Characteristics are straight only when $a/b$ is constant; variable coefficients bend them, and $u$-dependent coefficients let them **cross**. *([1.2](lessons/01-02-method-of-characteristics-first-order.md), [1.3](lessons/01-03-quasilinear-first-order.md))*
- $u = f(x-ut)$ is exact only *before* $t^{*}$. After that it is multivalued, and the fix is a weak solution with a jump — not keeping the overhang. *([1.3](lessons/01-03-quasilinear-first-order.md), [6.1](lessons/06-01-nonlinear-shocks-burgers.md))*
- Decreasing vs. increasing initial data is not cosmetic: downhill gives converging characteristics and a shock, uphill gives a rarefaction and smoothness forever. *([1.3](lessons/01-03-quasilinear-first-order.md))*
- $u\,u_x$ has no derivative-squared term but is genuinely nonlinear — superposition fails, which is exactly why crossing is possible. *([1.3](lessons/01-03-quasilinear-first-order.md))*

### Classification and well-posedness

- **Only the principal part counts.** A huge $u_x$, a $-7u$, a forcing $G$ — none of them change the type. *([1.4](lessons/01-04-classifying-second-order-pdes.md))*
- The factor-of-two trap: with the $2B\,u_{xy}$ convention, $B$ is **half** the $u_{xy}$ coefficient. Forgetting to halve is the single most common classification error. *([1.4](lessons/01-04-classifying-second-order-pdes.md))*
- Type can be **local** — check whether $A,B,C$ are constants before declaring one label for the whole plane. *([1.4](lessons/01-04-classifying-second-order-pdes.md))*
- "A solution exists" is the easy leg. Hadamard's Laplace–Cauchy example has a unique exact solution and is still worthless: stability is what bites. *([1.5](lessons/01-05-characteristics-well-posedness.md))*
- Cauchy data is natural for hyperbolic and parabolic equations and **poison for elliptic** ones — an elliptic problem wants its entire closed boundary, not a starting line. *([1.5](lessons/01-05-characteristics-well-posedness.md), [2.3](lessons/02-03-laplace-poisson-equations.md))*
- You cannot run the heat equation backward: forward it damps mode $n$ by $e^{-kn^2t}$, backward it amplifies by $e^{+kn^2t}$, so noise explodes. Same reason deblurring is hard. *([1.5](lessons/01-05-characteristics-well-posedness.md), [2.1](lessons/02-01-heat-diffusion-equations.md), [4.2](lessons/04-02-heat-equation-line-heat-kernel.md))*

### Heat, wave, Laplace — telling them apart

- Curvature, not value, drives diffusion: a blazing-hot point in a local dip ($u_{xx}>0$) still gets **hotter**. *([2.1](lessons/02-01-heat-diffusion-equations.md))*
- The minus sign in $q = -k u_x$ encodes the second law. Drop it and you get the ill-posed backward equation. *([2.1](lessons/02-01-heat-diffusion-equations.md))*
- Heat has **infinite** propagation speed (the kernel is positive everywhere for any $t>0$); waves have a strict finite $c$, with $u$ *exactly* zero outside the wedge. Do not import one intuition into the other. *([2.1](lessons/02-01-heat-diffusion-equations.md), [2.2](lessons/02-02-wave-equation-dalembert.md), [4.2](lessons/04-02-heat-equation-line-heat-kernel.md))*
- Diffusive scaling is $x\sim\sqrt t$, not the wave's $x \sim t$. Twice as far takes four times as long. *([4.2](lessons/04-02-heat-equation-line-heat-kernel.md), [4.4](lessons/04-04-laplace-transform-evolution.md))*
- The wave equation needs **two** initial conditions (displacement *and* velocity); heat needs one. Count time derivatives. *([2.2](lessons/02-02-wave-equation-dalembert.md), [1.5](lessons/01-05-characteristics-well-posedness.md))*
- The wave equation never smooths a kink — a corner rides a characteristic forever. Heat rounds it instantly. *([2.2](lessons/02-02-wave-equation-dalembert.md))*
- The domain of dependence is the bounded interval $[x-ct,\ x+ct]$, not all of the initial line. *([2.2](lessons/02-02-wave-equation-dalembert.md))*
- A harmonic function cannot have an interior bump — if your "solution" has an interior peak, it isn't harmonic. *([2.3](lessons/02-03-laplace-poisson-equations.md))*
- Poisson's sign convention matters: this course writes $\nabla^2 u = -f$, so a positive source *raises* $u$. Texts writing $+f$ have flipped the meaning of $f$. *([2.3](lessons/02-03-laplace-poisson-equations.md))*
- 2D and 3D point-source potentials are structurally different — $\ln r$ **grows**, $1/r$ **decays**. Using the wrong one is the classic Green's-function dimensional error. *([2.3](lessons/02-03-laplace-poisson-equations.md), [5.2](lessons/05-02-greens-functions-poisson.md))*
- The heat maximum principle excludes the **top edge** $t=T$: the max lives on the initial slice or the spatial ends. Including $t=T$ is the standard misstatement. *([2.4](lessons/02-04-maximum-principles.md))*
- The **wave equation has no maximum principle** — a string bulges higher inside than at any boundary point. Prove uniqueness with a conserved energy instead. And "max on the boundary" needs a **bounded** domain. *([2.4](lessons/02-04-maximum-principles.md))*

### Separation, series, and eigenfunctions

- Separation needs **homogeneous** BCs and a **separable geometry**. Ends held at nonzero values must be homogenized first (subtract the steady profile); an arbitrary blob has no separation at all. *([3.1](lessons/03-01-separation-of-variables.md), [3.5](lessons/03-05-eigenfunction-expansions-inhomogeneous.md))*
- The sign of the separation constant is **forced** by the BCs, not chosen. Case-check $\lambda<0$, $\lambda=0$, $\lambda>0$; with Neumann ends, $\lambda=0$ genuinely survives. *([3.1](lessons/03-01-separation-of-variables.md))*
- Modes never interact. In the eigenbasis the system is diagonal — heat decays mode by mode, waves oscillate mode by mode. *([3.1](lessons/03-01-separation-of-variables.md), [3.5](lessons/03-05-eigenfunction-expansions-inhomogeneous.md))*
- You do **not** choose sine vs. cosine vs. full — the boundary conditions choose. Dirichlet gives sines, Neumann cosines, periodic both, Robin/mixed the S–L eigenfunctions of that specific problem. *([3.2](lessons/03-02-fourier-series.md), [3.5](lessons/03-05-eigenfunction-expansions-inhomogeneous.md))*
- The coefficient formula is a projection, not a recipe to memorize; without orthogonality there is no clean formula at all. *([3.2](lessons/03-02-fourier-series.md))*
- A sine series silently builds the **odd** periodic extension, a cosine series the **even** one — which is why endpoints and jumps misbehave. *([3.2](lessons/03-02-fourier-series.md))*
- At a jump the series converges to the **midpoint**, regardless of how $f$ was defined at that isolated point. *([3.3](lessons/03-03-convergence-fourier-series.md))*
- Gibbs never goes away: more terms narrow the ears and move them closer, but the nine-percent height is fixed. *([3.3](lessons/03-03-convergence-fourier-series.md))*
- Integrating a Fourier series is safe; **differentiating term by term is not** — it multiplies coefficients by $n$ and can diverge. Licensed only when the differentiated series converges. *([3.3](lessons/03-03-convergence-fourier-series.md))*
- Mean-square convergence controls integrated error only; it promises nothing at a specific point. *([3.3](lessons/03-03-convergence-fourier-series.md))*
- S–L orthogonality is **weighted**: $\int\varphi_n\varphi_m\,w\,dx = 0$. When $w\neq1$ the plain integral is generally nonzero, and the weight must ride along into every coefficient formula. *([3.4](lessons/03-04-sturm-liouville-theory.md))*
- Self-adjointness is not automatic from the operator — it needs the **boundary conditions** to kill the Lagrange bracket. Bad BCs give complex eigenvalues and no orthogonality. *([3.4](lessons/03-04-sturm-liouville-theory.md))*
- The divergence form $(p u')'$ is load-bearing, not cosmetic. Convert with the integrating factor **first**, or the weight $w$ you read off is wrong. *([3.4](lessons/03-04-sturm-liouville-theory.md))*
- Completeness is a separate, deeper claim than orthogonality, and this course states it without proof. *([3.4](lessons/03-04-sturm-liouville-theory.md))*
- Resonance is structural, not a coincidence: it happens exactly when the drive frequency hits $\omega_n = c\sqrt{\lambda_n}$, and the eigenvalues tell you where before you drive anything. *([3.5](lessons/03-05-eigenfunction-expansions-inhomogeneous.md))*

### Transforms

- Transform conventions are a minefield — where the $2\pi$ sits and which exponent carries the minus sign change every constant downstream. Pick one and hold it. *([4.1](lessons/04-01-fourier-transform.md))*
- The Fourier integral needs decay. Constants, pure sines, and the delta have no ordinary transform — they need distributions. *([4.1](lessons/04-01-fourier-transform.md), [5.1](lessons/05-01-dirac-delta-distributions.md))*
- Narrow in $x$ is **always** wide in $\xi$; it is a theorem about widths, not a quirk of the Gaussian. *([4.1](lessons/04-01-fourier-transform.md))*
- Phase velocity is not group velocity. The crests you watch are not carrying the signal — the envelope is, at $d\omega/d\xi$. *([4.3](lessons/04-03-wave-equation-line-dispersion.md))*
- The wave equation's shape preservation is the **exception**. Add a mass term or stiffness and $\omega(\xi)$ bends; check the dispersion relation before assuming a rigid packet. *([4.3](lessons/04-03-wave-equation-line-dispersion.md))*
- Dispersion rearranges (reversible); diffusion erases (irreversible). Do not conflate them. *([4.3](lessons/04-03-wave-equation-line-dispersion.md))*
- Laplace is one-sided in time, Fourier two-sided in space — choose by the geometry of the problem, not habit. *([4.4](lessons/04-04-laplace-transform-evolution.md))*
- In Laplace, $s$ is a **parameter** carried symbolically all the way to inversion, not a number to plug in; and the initial condition is already inside $\mathcal L\{u_t\}$ — imposing it again double-counts. *([4.4](lessons/04-04-laplace-transform-evolution.md))*
- Inversion is the hard step. Match a table, or use the Bromwich contour — never invent an inverse. *([4.4](lessons/04-04-laplace-transform-evolution.md))*

### Deltas, Green's functions, and superposition

- $\delta$ has no pointwise value; "infinite at zero" is a heuristic no integral respects. It is defined by what it *does*. *([5.1](lessons/05-01-dirac-delta-distributions.md))*
- Count derivatives at a singularity: a **jump in value** puts a delta in the *first* derivative; a **corner** puts one in the *second*. *([5.1](lessons/05-01-dirac-delta-distributions.md))*
- $G$ is the response to a **unit** source. A source of strength $q$ gives $q\,G$; forgetting the "unit" makes every prefactor wrong. *([5.2](lessons/05-02-greens-functions-poisson.md))*
- Free-space $G$ is not the bounded-domain $G$. The moment a boundary condition appears you need a different $G$ that satisfies it. *([5.2](lessons/05-02-greens-functions-poisson.md))*
- The image must lie strictly **outside** the physical domain, or you have added a spurious source; and its **sign is fixed by the condition** — opposite for Dirichlet, same for Neumann. *([5.3](lessons/05-03-method-of-images.md))*
- Images exist only for the plane, the sphere, and wedges of angle $\pi/n$. A generic curved boundary has none — fall back on expansions or numerics. *([5.3](lessons/05-03-method-of-images.md))*
- The image is fictitious as a *location* but its effect is real: the induced surface charge integrates to the image and exerts a genuine attractive force. *([5.3](lessons/05-03-method-of-images.md))*
- Duhamel evolves each kick for $t-\tau$, **not** $t$ — dropping the shift is the most common error here. It also assumes $u(x,0)=0$; add the evolved initial data separately. *([5.4](lessons/05-04-duhamels-principle.md))*
- Duhamel *reduces* the driven problem to the undriven one — it does not solve the undriven one for you. No propagator, no formula. *([5.4](lessons/05-04-duhamels-principle.md))*
- Superposition is a **linearity privilege**: $u=\int Gf$, Duhamel, and mode-by-mode decoupling all die the instant the equation is nonlinear. *([5.2](lessons/05-02-greens-functions-poisson.md), [5.4](lessons/05-04-duhamels-principle.md), [6.1](lessons/06-01-nonlinear-shocks-burgers.md))*

### Shocks and numerics

- A shock moves at the **average** of the two states (for Burgers), strictly between the two characteristic speeds — never at either one. *([6.1](lessons/06-01-nonlinear-shocks-burgers.md))*
- Rankine–Hugoniot alone permits unphysical "expansion shocks"; the entropy condition $u_L>u_R$ throws them out and hands you a rarefaction instead. *([6.1](lessons/06-01-nonlinear-shocks-burgers.md))*
- Adding viscosity $\varepsilon u_{xx}$ does **not** change the answer in the limit — it smears the jump over width $\sim\varepsilon$ and selects the admissible shock. *([6.1](lessons/06-01-nonlinear-shocks-burgers.md))*
- A finer grid can be **fatal**: shrinking $\Delta x$ raises $r = k\Delta t/\Delta x^2$, so $\Delta t$ must shrink like $\Delta x^2$ or the run explodes. Accuracy is worthless without stability. *([6.2](lessons/06-02-finite-differences-well-posedness.md))*
- Consistency alone guarantees nothing. Lax needs consistency **and** stability; a consistent scheme with $|G|>1$ converges to noise. *([6.2](lessons/06-02-finite-differences-well-posedness.md))*
- A "reasonable-looking" stencil can be unconditionally unstable (forward-time central-space advection). Bias the difference upwind. *([6.2](lessons/06-02-finite-differences-well-posedness.md))*

### Curved coordinates

- The polar Laplacian is **not** just two second derivatives — dropping the $\tfrac1r u_r$ term is the single most common wreck, and it turns Bessel's equation into something with the wrong solutions. *([6.3](lessons/06-03-separation-polar-spherical.md))*
- $n$ and $\ell$ are integers because of periodicity and boundedness, not by decree. Quantization is a boundary condition, and it is the same mathematics that discretizes atomic energy levels. *([6.3](lessons/06-03-separation-polar-spherical.md))*
- Bessel, Legendre, and spherical harmonics need **no new tricks** — they are S–L eigenfunctions, so expand-and-match works unchanged; only the weight in the orthogonality integral differs. *([6.3](lessons/06-03-separation-polar-spherical.md))*
