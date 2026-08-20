# Complex Analysis · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

One geometric fact runs the whole subject: multiplying by a complex number
rotates and scales the plane. Demand that a function's derivative be *one* such
rotate-and-scale from every direction at once and you get holomorphy — which
forces infinite differentiability, a power series, boundary data that pins down
the interior, and finally the residue calculus, a machine that turns hard
integrals into arithmetic. This card is the lookup surface for that chain:
notation, the definitions in the order the course builds them, and the tables
you'd otherwise go hunting for mid-problem (singularity types, residue formulas,
which contour to close, which conformal map to reach for).

## Notation

| Symbol | Means | First used |
|---|---|---|
| $z = x + iy$ | a point of the plane, with $i^2 = -1$ baked into the multiplication | [1.1](lessons/01-01-complex-numbers-geometry.md) |
| $\operatorname{Re} z$, $\operatorname{Im} z$ | the **real numbers** $x$ and $y$ — note $\operatorname{Im} z = y$, not $iy$ | [1.1](lessons/01-01-complex-numbers-geometry.md) |
| $\bar z$ | conjugate $x - iy$ — reflection across the real axis | [1.1](lessons/01-01-complex-numbers-geometry.md) |
| $\lvert z\rvert$ | modulus: distance from the origin; also the distance function $\lvert z-w\rvert$ | [1.1](lessons/01-01-complex-numbers-geometry.md) |
| $\arg z$ | the angle, defined only **modulo** $2\pi$ — a whole ladder, not a number | [1.1](lessons/01-01-complex-numbers-geometry.md) |
| $\operatorname{Arg} z$ | the principal argument, forced into $(-\pi,\pi]$ by a choice | [1.3](lessons/01-03-exponential-log-trig.md) |
| $re^{i\theta}$ | polar form: length $r$, pointing at angle $\theta$ | [1.1](lessons/01-01-complex-numbers-geometry.md) |
| $D(z_0,r)$ | open disk $\lvert z-z_0\rvert < r$ — the plane's "neighborhood" | [1.2](lessons/01-02-functions-limits-continuity.md) |
| $\hat{\mathbb{C}}$, $\infty$ | the Riemann sphere $\mathbb{C}\cup\{\infty\}$ — **one** point at infinity, not two | [1.2](lessons/01-02-functions-limits-continuity.md) |
| $\log w$ vs. $\operatorname{Log} w$ | the multivalued log (a ladder) vs. the principal branch (one rung) | [1.3](lessons/01-03-exponential-log-trig.md) |
| $f = u + iv$ | splitting $f$ into two real functions $u(x,y)$, $v(x,y)$ on $\mathbb{R}^2$ | [2.2](lessons/02-02-cauchy-riemann-equations.md) |
| $u_x$, $v_y$, … | partial derivatives of those real parts | [2.2](lessons/02-02-cauchy-riemann-equations.md) |
| $R$ | radius of convergence — now an honest radius, of a **disk** | [3.1](lessons/03-01-power-series-analytic.md) |
| $\gamma$, $\gamma(t)$ | a contour and its parametrization; $\gamma'(t)$ is the velocity that makes $dz$ honest | [4.1](lessons/04-01-contour-integrals.md) |
| $\oint_\gamma$ | integral over a **closed** contour, counterclockwise unless stated | [4.1](lessons/04-01-contour-integrals.md) |
| $M$, $L$ | the max of $\lvert f\rvert$ on a contour, and the contour's length (the ML-inequality) | [4.1](lessons/04-01-contour-integrals.md) |
| $\partial T$ | the boundary of a solid triangle, traversed once | [4.2](lessons/04-02-cauchy-goursat-theorem.md) |
| $f^{(n)}$ | the $n$-th derivative; in $\mathbb{C}$ these always all exist | [4.4](lessons/04-04-consequences-liouville-morera.md) |
| $a_n$, $a_{-1}$ | Laurent coefficients; $a_{-1}$ is the one an integral can feel | [5.2](lessons/05-02-laurent-series.md) |
| $\operatorname{Res}(f,z_0)$ | the residue of $f$ at $z_0$ — literally $a_{-1}$ | [6.1](lessons/06-01-residue-theorem.md) |
| $Z$, $P$ | counts of zeros and poles inside a contour, **with multiplicity/order** | [6.3](lessons/06-03-argument-principle-rouche.md) |
| $\Delta_\gamma \arg f$ | total change in the output angle as $z$ walks once around $\gamma$ | [6.3](lessons/06-03-argument-principle-rouche.md) |
| $(z,z_1,z_2,z_3)$ | cross-ratio — the number four points carry that Möbius maps leave alone | [7.1](lessons/07-01-mobius-transformations.md) |
| $\mathbb{D}$ | the open unit disk $\lvert z\rvert<1$ | [7.2](lessons/07-02-conformal-maps-riemann.md) |

## Definitions

### Modulus and conjugate

Length, and mirror image across the real axis. The one identity that does all the
work: a number times its conjugate is a *real* number, its length squared — which
is how you divide.

$$\bar z = x - iy,\qquad \lvert z\rvert = \sqrt{x^2+y^2},\qquad z\bar z = \lvert z\rvert^2,\qquad \frac{1}{z} = \frac{\bar z}{\lvert z\rvert^2}$$

*Introduced:* [1.1](lessons/01-01-complex-numbers-geometry.md)

### Argument

The angle from the positive real axis, counterclockwise. It is **multivalued** —
$\theta$ and $\theta+2\pi$ name the same point — so pinning it to one interval is
a *choice*, and every such choice has a seam.

$$\arg z = \operatorname{Arg} z + 2\pi k,\quad k\in\mathbb{Z},\qquad \operatorname{Arg} z\in(-\pi,\pi]$$

*Introduced:* [1.1](lessons/01-01-complex-numbers-geometry.md), pinned down in [1.3](lessons/01-03-exponential-log-trig.md)

### Region (domain)

An open patch you can walk across without leaving it — the natural home of every
function we differentiate.

A nonempty **open** and **connected** subset of $\mathbb{C}$.

*Introduced:* [1.2](lessons/01-02-functions-limits-continuity.md)

### Riemann sphere

Bolt the far-away of the plane onto one extra point and you get a sphere with no
edge. There is exactly **one** $\infty$, reached from every direction.

$\hat{\mathbb{C}} = \mathbb{C}\cup\{\infty\}$; a neighborhood of $\infty$ is
$\{z : \lvert z\rvert > R\}$, and $z_n\to\infty$ means $\lvert z_n\rvert\to\infty$.

*Introduced:* [1.2](lessons/01-02-functions-limits-continuity.md)

### Branch and branch cut

A **branch** is one continuous single-valued choice of a multivalued function; the
**cut** is the barrier you agree never to cross so that choice stays consistent.
The discontinuity is honest, not a technique failure — no single-valued continuous
log exists on a loop around $0$.

Principal $\operatorname{Log}$ uses the cut $(-\infty,0]$, where $\operatorname{Arg}$ jumps by $2\pi$.

*Introduced:* [1.3](lessons/01-03-exponential-log-trig.md)

### Complex differentiability

The ordinary difference quotient, plus one merciless clause: the limit must be the
**same number from every direction** in the plane, not just from two sides.

$$f'(z_0) = \lim_{h\to 0}\frac{f(z_0+h)-f(z_0)}{h},\qquad h\in\mathbb{C}$$

*Introduced:* [2.1](lessons/02-01-complex-differentiability.md)

### Holomorphic

Complex-differentiable at **every point of an open set** — the version with all the
power. Differentiability at a lone point buys nothing, since no point is open.

*Introduced:* [2.1](lessons/02-01-complex-differentiability.md)

### Entire

Holomorphic on all of $\mathbb{C}$. Polynomials, $e^z$, $\sin z$, $\cos z$.

*Introduced:* [2.1](lessons/02-01-complex-differentiability.md)

### Analytic

Locally equal to a convergent power series. A genuinely different-sounding
property — which in $\mathbb{C}$ turns out to be the *same* property (see
[Holomorphic = analytic](#holomorphic-analytic) below).

$$f(z)=\sum_{n\ge0} a_n(z-z_0)^n \quad\text{for all } \lvert z-z_0\rvert<r,\ \text{some } r>0$$

*Introduced:* [3.1](lessons/03-01-power-series-analytic.md)

### Radius of convergence

The half-width of the **disk** inside which a power series converges absolutely
and outside which it diverges. Behavior on the rim is case-by-case, always.

*Introduced:* [3.1](lessons/03-01-power-series-analytic.md)

### Harmonic function

A real-valued function in equilibrium: bulge up one way and you must bulge down
the other by exactly as much, so there are no interior peaks or pits.

$$\phi_{xx}+\phi_{yy}=0 \qquad(\text{Laplace's equation})$$

*Introduced:* [2.3](lessons/02-03-harmonic-functions-conformality.md)

### Harmonic conjugate

The partner $v$ that turns a harmonic $u$ into the real part of a holomorphic
function. It exists on any simply connected region and is **unique only up to an
additive real constant**.

$v$ such that $f = u+iv$ is holomorphic — equivalently, $v$ satisfies Cauchy–Riemann against $u$.

*Introduced:* [2.3](lessons/02-03-harmonic-functions-conformality.md)

### Conformal

Angle-preserving, in both magnitude and orientation: two curves crossing at some
angle have images crossing at the same angle.

**Theorem:** $f$ holomorphic at $z_0$ with $f'(z_0)\neq0$ $\Rightarrow$ $f$ is conformal at $z_0$.

*Introduced:* [2.3](lessons/02-03-harmonic-functions-conformality.md)

### Contour

A curve you can trace with a moving point, allowing a few corners.

A piecewise-smooth $\gamma:[a,b]\to\mathbb{C}$; its length is $L=\int_a^b\lvert\gamma'(t)\rvert\,dt$.

*Introduced:* [4.1](lessons/04-01-contour-integrals.md)

### Contour integral

Feed the moving point into $f$, multiply by the velocity, integrate over the
parameter. A real integral in disguise.

$$\int_\gamma f(z)\,dz = \int_a^b f(\gamma(t))\,\gamma'(t)\,dt$$

*Introduced:* [4.1](lessons/04-01-contour-integrals.md)

### Simply connected

No holes: every closed loop can be shrunk to a point without leaving the region.
A disk qualifies; a punctured disk and an annulus do not.

*Introduced:* [4.2](lessons/04-02-cauchy-goursat-theorem.md)

### Laurent series

A Taylor series allowed to blow up: negative powers included, valid on a **ring**
instead of a disk. Each ring gets its own series.

$$f(z)=\sum_{n=-\infty}^{\infty}a_n(z-z_0)^n,\qquad a_n=\frac{1}{2\pi i}\oint_\gamma\frac{f(w)}{(w-z_0)^{n+1}}\,dw$$

on $r<\lvert z-z_0\rvert<R$, with $\gamma$ any circle inside the ring. The $a_n$ are **unique** for that ring.

*Introduced:* [5.2](lessons/05-02-laurent-series.md)

### Principal part

The negative-power terms — and *only* those. They alone know about the
singularity; the nonnegative powers are finite at $z_0$ and tell you nothing about
it. ("Principal" means singular, not important.)

$$\sum_{n<0}a_n(z-z_0)^n$$

*Introduced:* [5.2](lessons/05-02-laurent-series.md)

### Residue

The single Laurent coefficient that refuses to integrate away — every other power
dies around a closed loop.

$$\operatorname{Res}(f,z_0)=a_{-1}=\frac{1}{2\pi i}\oint_C f(z)\,dz$$

for $C$ a small positively-oriented circle enclosing $z_0$ and no other singularity.

*Introduced:* [5.2](lessons/05-02-laurent-series.md), named in [6.1](lessons/06-01-residue-theorem.md)

### Zero of order m

You can factor out exactly $m$ copies of $(z-z_0)$ and what's left is nonzero —
equivalently, the Taylor series starts at the $m$-th term.

$$f(z)=(z-z_0)^m g(z),\ g(z_0)\neq0 \iff f(z_0)=\cdots=f^{(m-1)}(z_0)=0,\ f^{(m)}(z_0)\neq0$$

*Introduced:* [5.3](lessons/05-03-zeros-and-singularities.md)

### Isolated singularity

A bad point with a clean ring of good points around it — the only kind that has a
Laurent series to read, and therefore the only kind you can classify.

$f$ holomorphic on a punctured disk $0<\lvert z-z_0\rvert<R$.

*Introduced:* [5.3](lessons/05-03-zeros-and-singularities.md)

### Meromorphic

Holomorphic apart from a scattering of clean poles — no essential singularities
allowed. Rational functions, $\tan z$, $1/\sin z$. The natural habitat of the
residue theorem.

*Introduced:* [5.3](lessons/05-03-zeros-and-singularities.md)

### Winding number

How many net times the image curve $f(\gamma)$ circles the origin. An **integer**,
by construction — a fractional answer means you miscounted or a zero sits on the
contour.

$$n(f\circ\gamma,\,0)=\frac{1}{2\pi}\,\Delta_\gamma\big(\arg f\big)$$

*Introduced:* [6.3](lessons/06-03-argument-principle-rouche.md)

### Möbius transformation

A ratio of two linear expressions, read as a bijection of the **sphere** so that
sending a point to $\infty$ (and receiving one from it) is legal and ordinary.

$$T(z)=\frac{az+b}{cz+d},\qquad ad-bc\neq0,\qquad T(-d/c)=\infty,\ T(\infty)=a/c$$

*Introduced:* [7.1](lessons/07-01-mobius-transformations.md)

### Cross-ratio

The one quantity four points carry that every Möbius map leaves unchanged — and,
as a function of $z$, it *is* the map sending $z_1,z_2,z_3\mapsto0,1,\infty$.

$$(z,z_1,z_2,z_3)=\frac{(z-z_1)(z_2-z_3)}{(z-z_3)(z_2-z_1)}$$

*Introduced:* [7.1](lessons/07-01-mobius-transformations.md)

### Conformal equivalence

A holomorphic one-to-one correspondence between two regions. You get $f'\neq0$ and
a holomorphic inverse **for free** — a holomorphic bijection can never have a
vanishing derivative.

*Introduced:* [7.2](lessons/07-02-conformal-maps-riemann.md)

## Formulas and rules

### Arithmetic and geometry in the plane

| Fact | Statement |
|---|---|
| multiplication | multiply the lengths, **add the angles**: $\lvert z_1z_2\rvert=\lvert z_1\rvert\lvert z_2\rvert$, $\arg(z_1z_2)=\arg z_1+\arg z_2$ |
| conjugation | $\overline{z+w}=\bar z+\bar w$, $\overline{zw}=\bar z\,\bar w$, $\operatorname{Re}z=\tfrac12(z+\bar z)$, $\operatorname{Im}z=\tfrac{1}{2i}(z-\bar z)$ |
| division | $\dfrac1z=\dfrac{\bar z}{\lvert z\rvert^2}$ — multiply by the conjugate to make the denominator real |
| triangle inequality | $\lvert z_1+z_2\rvert\le\lvert z_1\rvert+\lvert z_2\rvert$ |
| reverse triangle | $\big\lvert\,\lvert z_1\rvert-\lvert z_2\rvert\,\big\rvert\le\lvert z_1-z_2\rvert$ — the tool for bounding $\lvert z^n+c\rvert$ from below |
| De Moivre | $(\cos\theta+i\sin\theta)^n=\cos n\theta+i\sin n\theta$ — raising to a power multiplies the angle |

**Handy values.** $i^2=-1$, $\dfrac1i=-i$, $\bar i=-i$, $(1\pm i)^2=\pm2i$,
$\lvert 1+i\rvert=\sqrt2$ at $45°$, $e^{i\pi}=-1$, $e^{i\pi/2}=i$.

*From* [1.1](lessons/01-01-complex-numbers-geometry.md)

### The n-th roots of a complex number

Every nonzero $w=\rho e^{i\varphi}$ has exactly $n$ $n$-th roots, equally spaced by
$2\pi/n$ around a circle of radius $\rho^{1/n}$. The "$+2\pi k$" is the entire story.

$$z_k=\rho^{1/n}\exp\!\left(i\,\frac{\varphi+2\pi k}{n}\right),\qquad k=0,1,\dots,n-1$$

The **roots of unity** ($w=1$) sit on the unit circle, one always at $z=1$, and they
**sum to zero** (equally spaced vectors have nothing to point toward).

*From* [1.1](lessons/01-01-complex-numbers-geometry.md)

### The elementary functions

$$e^{z}=e^{x}(\cos y+i\sin y),\qquad \lvert e^z\rvert=e^{\operatorname{Re}z},\qquad \arg e^z=\operatorname{Im}z$$

$$\cos z=\frac{e^{iz}+e^{-iz}}{2},\qquad \sin z=\frac{e^{iz}-e^{-iz}}{2i},\qquad e^{i\theta}=\cos\theta+i\sin\theta$$

$$\log w=\ln\lvert w\rvert+i\arg w,\qquad \operatorname{Log}w=\ln\lvert w\rvert+i\operatorname{Arg}w,\qquad z^{\alpha}:=e^{\alpha\log z}$$

| Fact | Why it matters |
|---|---|
| $e^{z+2\pi i}=e^z$ | the exponential is **periodic** — no real-line analogue, and the reason $\log$ is a ladder |
| $e^z\neq0$ ever | so $\log$ is defined for every $w\neq0$, and $1/e^z$ is entire |
| $\cos(iy)=\cosh y$, $\sin(iy)=i\sinh y$ | complex $\cos$ and $\sin$ are **unbounded**; hyperbolic trig *is* trig on the imaginary axis |
| $\cos^2z+\sin^2z=1$ | holds for all complex $z$ (it holds on $\mathbb{R}$, so the identity theorem exports it) |
| $e^{\log z}=z$ always | but $\log(e^z)=z$ only up to $2\pi ik$ — the period already threw away which rung you started on |

*From* [1.3](lessons/01-03-exponential-log-trig.md) *and* [3.2](lessons/03-02-elementary-functions-series.md)

### Solving with the exponential

To solve $e^z=w$: match size and angle. To solve $\cos z=c$ or $\sin z=c$:
substitute $\omega=e^{iz}$, get a **quadratic** in $\omega$, solve, then invert.

$$e^{z}=w \iff z=\ln\lvert w\rvert+i\big(\operatorname{Arg}w+2\pi k\big),\quad k\in\mathbb{Z}$$

$$\cos z=c \ \Rightarrow\ \omega^2-2c\,\omega+1=0,\quad \omega=e^{iz}$$

*From* [1.3](lessons/01-03-exponential-log-trig.md)

### Cauchy–Riemann equations

Holomorphy locks the real and imaginary parts together: how $u$ changes east–west
equals how $v$ changes north–south, and how $u$ changes north–south is the
*negation* of how $v$ changes east–west. This is the working test.

$$u_x=v_y,\qquad u_y=-v_x,\qquad f'(z)=u_x+i\,v_x=v_y-i\,u_y$$

Polar form (use it for $z^n$, roots, $\log z$):

$$u_r=\frac1r v_\theta,\qquad v_r=-\frac1r u_\theta,\qquad f'(z)=e^{-i\theta}\big(u_r+i\,v_r\big)$$

**Necessary always. Sufficient only with continuous partials on an open set** —
then $f$ is holomorphic there. Cauchy–Riemann at one point, or along a curve, is
not holomorphy.

*From* [2.2](lessons/02-02-cauchy-riemann-equations.md)

### Differentiation rules

Identical to the real ones, and for a reason: only the **field axioms** are used in
the proofs.

$$(f+g)'=f'+g',\qquad (fg)'=f'g+fg',\qquad \Big(\tfrac fg\Big)'=\tfrac{f'g-fg'}{g^2},\qquad (f\circ g)'=f'(g)\,g'$$

$$\frac{d}{dz}z^n=nz^{n-1},\qquad \frac{d}{dz}e^z=e^z,\qquad \frac{d}{dz}\sin z=\cos z,\qquad \frac{d}{dz}\cos z=-\sin z$$

The corollary matters: if a formula secretly uses $\bar z$, $\lvert z\rvert$,
$\operatorname{Re}$, or $\operatorname{Im}$, it is **not** built from field
operations on $z$ alone and the rules don't reach it. Check with the definition or
Cauchy–Riemann.

*From* [2.1](lessons/02-01-complex-differentiability.md)

### Bestiary: where is it holomorphic?

The reference list the course uses constantly without restating.

| Function | Verdict |
|---|---|
| polynomials, $e^z$, $\sin z$, $\cos z$, $\sinh z$, $\cosh z$ | **entire** |
| rational $p/q$ | holomorphic off the zeros of $q$ (poles there) |
| $\operatorname{Log}z$, $z^\alpha$ | holomorphic on $\mathbb{C}$ minus the branch cut $(-\infty,0]$ |
| convergent power series | holomorphic on its open disk, differentiable term by term forever |
| $\bar z$, $\operatorname{Re}z$, $\operatorname{Im}z$ | complex-differentiable **nowhere** |
| $\lvert z\rvert^2 = z\bar z$ | differentiable only at $z=0$ (with $f'(0)=0$), so **holomorphic nowhere** |
| $\lvert z\rvert$ | continuous everywhere, differentiable nowhere |

Differentiable $\Rightarrow$ continuous, never the converse.

*From* [2.1](lessons/02-01-complex-differentiability.md) *and* [2.2](lessons/02-02-cauchy-riemann-equations.md)

### Harmonic functions and conformality

| Fact | Statement |
|---|---|
| holomorphic $\Rightarrow$ harmonic parts | $f=u+iv$ holomorphic $\Rightarrow$ $u_{xx}+u_{yy}=0$ and $v_{xx}+v_{yy}=0$ |
| conjugate exists | $u$ harmonic on a **simply connected** region $\Rightarrow$ a conjugate $v$ exists, unique up to $+C$ |
| orthogonal level curves | $\nabla u\cdot\nabla v=0$, so $u=$ const and $v=$ const cross at $90°$ wherever $f'\neq0$ |
| conformality | $f'(z_0)\neq0$ $\Rightarrow$ angles preserved; at a zero of $f'$ of order $k$, angles are **multiplied by $k+1$** |

**Recipe for a harmonic conjugate.** Check $u_{xx}+u_{yy}=0$ first (no harmonicity,
no conjugate). Integrate $v_y=u_x$ in $y$, picking up an unknown $g(x)$. Then
differentiate in $x$ and match against $v_x=-u_y$ to pin down $g'$. Report the
$+C$.

*From* [2.3](lessons/02-03-harmonic-functions-conformality.md)

### Finding the radius of convergence

$$\frac1R=\limsup_{n\to\infty}\lvert a_n\rvert^{1/n} \quad\text{(Cauchy–Hadamard)},\qquad R=\lim_{n\to\infty}\left\lvert\frac{a_n}{a_{n+1}}\right\rvert \quad\text{(when it exists)}$$

**The shortcut you'll actually use:** $R$ is the **distance from the center to the
nearest singularity anywhere in the plane** — locate the singularities and measure,
no series needed. This is what makes $\frac{1}{1+z^2}$ stall at radius $1$ despite
being flawless on all of $\mathbb{R}$: the poles at $\pm i$ were always in charge.

*From* [3.1](lessons/03-01-power-series-analytic.md) *and* [5.1](lessons/05-01-taylor-series-analyticity.md)

### The series library

Memorize these; almost every expansion in the course is one of them with a
substitution.

$$e^{z}=\sum_{n\ge0}\frac{z^n}{n!}\ (R=\infty),\qquad \cos z=\sum_{n\ge0}\frac{(-1)^nz^{2n}}{(2n)!}\ (R=\infty),\qquad \sin z=\sum_{n\ge0}\frac{(-1)^nz^{2n+1}}{(2n+1)!}\ (R=\infty)$$

$$\frac{1}{1-z}=\sum_{n\ge0}z^n\ (R=1),\qquad \frac{1}{(1-z)^2}=\sum_{n\ge0}(n+1)z^n\ (R=1),\qquad \log(1+z)=\sum_{n\ge1}\frac{(-1)^{n-1}}{n}z^n\ (R=1)$$

$$\cosh z=\sum_{n\ge0}\frac{z^{2n}}{(2n)!},\qquad \sinh z=\sum_{n\ge0}\frac{z^{2n+1}}{(2n+1)!},\qquad \frac{1}{1+z^2}=\sum_{n\ge0}(-1)^nz^{2n}\ (R=1)$$

Inside the disk you may substitute into, differentiate, and integrate **term by
term**, and the radius never changes. Absolute convergence is what licenses
splitting or regrouping a series (that is why Euler's even/odd split is legal).

**The substitution trick:** bend any $\dfrac{1}{a-z}$ into $\dfrac{1}{1-(\cdot)}$ —
$\dfrac{1}{a-z}=\dfrac1a\cdot\dfrac{1}{1-z/a}$, valid for $\lvert z\rvert<\lvert a\rvert$.

*From* [3.1](lessons/03-01-power-series-analytic.md) *and* [3.2](lessons/03-02-elementary-functions-series.md)

### Standard parametrizations

| Contour | $\gamma(t)$ | $\gamma'(t)$ |
|---|---|---|
| segment $z_0\to z_1$ | $(1-t)z_0+tz_1$, $t\in[0,1]$ | $z_1-z_0$ |
| circle radius $\rho$ about $c$, counterclockwise | $c+\rho e^{i\theta}$, $\theta\in[0,2\pi]$ | $i\rho e^{i\theta}$ |
| unit circle for a $\theta$-integral | $z=e^{i\theta}$ | $dz=ie^{i\theta}d\theta$, so $d\theta=\dfrac{dz}{iz}$ |

Reversing direction **negates** the integral. Closed contours are counterclockwise
by convention.

*From* [4.1](lessons/04-01-contour-integrals.md)

### The pivotal integral

Of all the pure powers, only $1/(z-z_0)$ leaves anything behind — and always
exactly $2\pi i$, whatever the radius. Everything in Modules 4–6 is downstream of
this one line.

$$\oint_{\lvert z-z_0\rvert=r}(z-z_0)^n\,dz=\begin{cases}2\pi i,& n=-1,\\ 0,& n\neq-1.\end{cases}$$

The reason $n=-1$ is the odd one out: every other power has a single-valued
antiderivative on the punctured plane, while $1/(z-z_0)$'s would-be antiderivative
is $\log$, which gains $2\pi i$ per lap.

*From* [4.1](lessons/04-01-contour-integrals.md)

### Integration theorems

| Theorem | Statement | Hypothesis that does the work |
|---|---|---|
| Fundamental theorem for contours | $\int_\gamma f\,dz=F(\gamma(b))-F(\gamma(a))$ if $F'=f$ | a **single-valued** antiderivative on a domain containing the path |
| ML-inequality | $\left\lvert\int_\gamma f\,dz\right\rvert\le M\,L$ | $M=\max_\gamma\lvert f\rvert$, $L=$ length; crude but it kills arcs |
| Cauchy–Goursat | $\oint_\gamma f\,dz=0$ | $f$ holomorphic on a **simply connected** domain containing $\gamma$ |
| deformation | slide a contour freely without changing the integral | never drag it across a point where $f$ misbehaves |
| Cauchy integral formula | $f(z_0)=\dfrac{1}{2\pi i}\oint_\gamma\dfrac{f(z)}{z-z_0}\,dz$ | $z_0$ **strictly inside**; $f$ holomorphic on and inside $\gamma$ |
| formula for derivatives | $f^{(n)}(z_0)=\dfrac{n!}{2\pi i}\oint_\gamma\dfrac{f(z)}{(z-z_0)^{n+1}}\,dz$ | same; read backwards it evaluates integrals |
| mean value property | $f(z_0)=\dfrac{1}{2\pi}\displaystyle\int_0^{2\pi}f(z_0+re^{i\theta})\,d\theta$ | any radius $r$; take real parts and it's the harmonic version |

Goursat's contribution was proving Cauchy's theorem **without** assuming $f'$ is
continuous — which is exactly what makes "holomorphic $\Rightarrow$ infinitely
differentiable" non-circular.

*From* [4.1](lessons/04-01-contour-integrals.md), [4.2](lessons/04-02-cauchy-goursat-theorem.md), [4.3](lessons/04-03-cauchy-integral-formula.md)

### The consequences chain

Each one is the previous line differentiated or estimated.

| Result | Statement |
|---|---|
| infinite differentiability | holomorphic once on an open set $\Rightarrow$ derivatives of **all** orders, each holomorphic |
| Cauchy estimates | $\lvert f(z_0)\rvert\le M$ on $\lvert z-z_0\rvert=r$ $\Rightarrow$ $\big\lvert f^{(n)}(z_0)\big\rvert\le\dfrac{n!\,M}{r^n}$ |
| Liouville | **bounded** *and* **entire** $\Rightarrow$ constant (both hypotheses, on all of $\mathbb{C}$) |
| Fundamental Theorem of Algebra | every non-constant polynomial has a root; degree $n$ has $n$ roots with multiplicity |
| Morera | $f$ continuous with $\oint_{\partial T}f=0$ for **every** triangle $\Rightarrow$ $f$ holomorphic |
| maximum modulus (baby form) | $\lvert f(z_0)\rvert\le\max$ of $\lvert f\rvert$ on any circle around $z_0$ |

Growth slower than linear still forces constancy: $\lvert f\rvert\le C\lvert z\rvert^{s}$
with $s<1$ crushes $f'$ to zero. Linear growth is the exact threshold — it permits
$f(z)=z$.

*From* [4.4](lessons/04-04-consequences-liouville-morera.md)

### Holomorphic = analytic

A function differentiable **once** on a disk equals its own convergent Taylor
series on that whole disk. In $\mathbb{C}$ the two words mean the same thing.

$$f(z)=\sum_{n\ge0}a_n(z-z_0)^n,\qquad a_n=\frac{f^{(n)}(z_0)}{n!}=\frac{1}{2\pi i}\oint_{\gamma_r}\frac{f(w)}{(w-z_0)^{n+1}}\,dw$$

**Identity theorem.** If two holomorphic functions on a domain agree on a set with
a **limit point inside** the domain — a tiny arc, or a sequence converging to an
interior point — they agree everywhere. (Agreement at the integers is not enough:
they never bunch up. $\sin(\pi z)$ is the standing counterexample.)

*From* [5.1](lessons/05-01-taylor-series-analyticity.md)

### Building a Laurent series

Never compute $a_n$ from its integral. Do partial fractions, then expand each piece
with the geometric series, choosing the branch that makes the ratio small **on your
ring**.

| Region | Expansion of $\dfrac{1}{z-a}$ |
|---|---|
| $\lvert z\rvert<\lvert a\rvert$ ("$z$ small") | $-\dfrac1a\displaystyle\sum_{n\ge0}\left(\frac za\right)^n$ — all nonnegative powers |
| $\lvert z\rvert>\lvert a\rvert$ ("$z$ large") | $\dfrac1z\cdot\dfrac{1}{1-a/z}=\displaystyle\sum_{n\ge1}a^{\,n-1}z^{-n}$ — all negative powers |

With singularities at $\lvert a_1\rvert<\lvert a_2\rvert$, the plane splits into
three rings about $0$, and each ring flips a different subset of the terms to its
"$z$ large" branch. **Name the ring before you write the series** — the same
function has a different one on each.

*From* [5.2](lessons/05-02-laurent-series.md)

### Classifying an isolated singularity

Read down the negative powers. The count is the entire taxonomy.

| Type | Principal part | Behavior as $z\to z_0$ | Residue there | Test without a series |
|---|---|---|---|---|
| **removable** | none ($a_n=0$ for all $n<0$) | $f$ tends to a finite limit; fill it in and stay holomorphic | always $0$ | $f$ **bounded** near $z_0$ (Riemann) — or numerator's zero-order $\ge$ denominator's |
| **pole of order $m$** | finite: down to $a_{-m}(z-z_0)^{-m}$, $a_{-m}\neq0$ | $\lvert f\rvert\to\infty$ from **every** direction, at a definite rate | $a_{-1}$, which may well be $0$ | $\lim (z-z_0)^m f(z)$ finite and nonzero; or order-counting below |
| **essential** | infinite: negative powers forever | no limit at all — values dense in $\mathbb{C}$ (Casorati–Weierstrass) | $a_{-1}$, generally nonzero | the series is the only tool; $e^{1/z}$, $\cos(1/z)$ are the archetypes |

**Order-counting for a quotient $g/h$.** Let $j$ be the order of $g$'s zero at
$z_0$ and $k$ the order of $h$'s. Then: $k>j$ $\Rightarrow$ pole of order $k-j$;
$k=j$ $\Rightarrow$ removable; $k<j$ $\Rightarrow$ a zero of order $j-k$. In
particular $h$ with a zero of order $k$ makes $1/h$ a pole of order $k$.

Pole order and residue are **independent facts** — $\frac{1-\cos z}{z^4}$ is a pole
of order $2$ with residue $0$.

*From* [5.3](lessons/05-03-zeros-and-singularities.md)

### The residue theorem

$$\oint_\gamma f(z)\,dz=2\pi i\sum_{j}\operatorname{Res}(f,z_j)$$

summed over the singularities **strictly inside** the positively-oriented simple
closed $\gamma$. One inside, one outside, one on the curve are three different
situations: enclosed contributes, outside contributes nothing, on the contour makes
the integral undefined. A clockwise loop flips the sign.

*From* [6.1](lessons/06-01-residue-theorem.md)

### Computing a residue

| Case | Formula | Notes |
|---|---|---|
| simple pole (order $1$) | $\operatorname{Res}=\displaystyle\lim_{z\to z_0}(z-z_0)f(z)$ | multiply by the vanishing factor, plug in |
| simple pole of a quotient $g/h$ | $\operatorname{Res}=\dfrac{g(z_0)}{h'(z_0)}$ | needs $g(z_0)\neq0$, $h(z_0)=0$, $h'(z_0)\neq0$; the fastest route for $\frac{1}{z^n+c}$ |
| pole of order $m$ | $\operatorname{Res}=\dfrac{1}{(m-1)!}\displaystyle\lim_{z\to z_0}\frac{d^{\,m-1}}{dz^{\,m-1}}\Big[(z-z_0)^mf(z)\Big]$ | clear the pole, differentiate $m-1$ times, divide by $(m-1)!$; $m=1$ recovers row one |
| removable | $\operatorname{Res}=0$ | no negative powers at all |
| essential | expand the Laurent series and **read off $a_{-1}$** | no formula exists; e.g. $\operatorname{Res}(e^{1/z},0)=1$ |

When in doubt — or when the pole order is unclear — expand the series and read the
$z^{-1}$ coefficient. That move never fails.

*From* [6.2](lessons/06-02-computing-residues-real-integrals.md)

### Which contour trick for which real integral

| Real integral | Move | Why the extra piece dies |
|---|---|---|
| $\displaystyle\int_0^{2\pi}R(\cos\theta,\sin\theta)\,d\theta$, $R$ **rational** | $z=e^{i\theta}$: $\cos\theta=\frac{z+z^{-1}}{2}$, $\sin\theta=\frac{z-z^{-1}}{2i}$, $d\theta=\frac{dz}{iz}$; integrate over $\lvert z\rvert=1$ | nothing to discard — the interval *is* the closed contour; just sum the residues with $\lvert z\rvert<1$ |
| $\displaystyle\int_{-\infty}^{\infty}\frac{p(x)}{q(x)}\,dx$ | close with an upper semicircle of radius $R$; sum residues in the **upper** half-plane | ML: need $\deg q\ge\deg p+2$, so $\pi R\cdot O(R^{-2})\to0$ |
| $\displaystyle\int_{-\infty}^{\infty}f(x)\cos ax\,dx$ or $f(x)\sin ax\,dx$, $a>0$ | integrate $f(z)e^{iaz}$ over the **upper** semicircle, take real (resp. imaginary) parts at the end | **Jordan's lemma**: $\lvert e^{iaz}\rvert=e^{-a\operatorname{Im}z}\le1$ and is exponentially small on the arc, so $f\to0$ alone suffices |
| the same with $a<0$ | close in the **lower** half-plane instead; the contour runs clockwise, so **negate** | $e^{iaz}$ decays downward when $a<0$ |

Three habits: check which poles are actually enclosed; **prove** the arc vanishes
every time (skipping it is the classic way to get a finite answer for a divergent
integral); and confirm the real integral genuinely converges before claiming the
value.

*From* [6.2](lessons/06-02-computing-residues-real-integrals.md)

### Counting zeros and poles

**Argument principle.** Feed the residue theorem $f'/f$ and the residues become
counts: $+m$ at a zero of order $m$, $-p$ at a pole of order $p$.

$$\frac{1}{2\pi i}\oint_\gamma\frac{f'(z)}{f(z)}\,dz=Z-P=n\big(f\circ\gamma,\,0\big)$$

with $Z,P$ counted **with multiplicity**, and $f$ having no zero or pole *on*
$\gamma$. The right-hand equality is the geometric reading: every enclosed zero
drags the image once more around the origin; every pole unwinds it once.

**Rouché.** If $\lvert g(z)\rvert<\lvert f(z)\rvert$ at **every** point of $\gamma$
(strictly), then $f$ and $f+g$ have the same number of zeros inside. A perturbation
you can dominate on the boundary can't change the tally in the middle.

**How to use it.** Split the polynomial so the *dominant* term on that particular
circle is $f$: on a large circle that's the leading term (giving the FTA and "all
$n$ roots inside"); on a small circle it's usually the constant or the lowest-degree
term (giving "none inside"). Two circles bracket the roots into an annulus. The
**Cauchy root bound** falls out: every zero of a monic $p$ satisfies
$\lvert z\rvert<1+M$ where $M=\max_k\lvert a_k\rvert$.

*From* [6.3](lessons/06-03-argument-principle-rouche.md)

### Möbius maps: the working facts

| Fact | Statement |
|---|---|
| legitimacy | need $ad-bc\neq0$, or $T$ collapses to a constant |
| inverse | $T^{-1}(w)=\dfrac{dw-b}{-cw+a}$ — swap the diagonal, negate the off-diagonal |
| composition | corresponds to **multiplying** the matrices $\begin{pmatrix}a&b\\c&d\end{pmatrix}$ |
| building blocks | translations $z+\beta$, rotate-scalings $\alpha z$, and inversion $1/z$ — so every Möbius map is conformal on all of $\hat{\mathbb{C}}$ |
| circlines | circles and lines form **one** family (a line is a circle through $\infty$), and Möbius maps permute it |
| three-point control | there is exactly **one** Möbius map sending three given points to three given points |

**Recipe for the map you want.** Write "target cross-ratio = source cross-ratio,"
$(w,w_1,w_2,w_3)=(z,z_1,z_2,z_3)$, and solve for $w$. When one of the three points
is $\infty$, its two factors cancel and that side collapses — e.g.
$(z,z_1,z_2,\infty)$ loses the $z_3$ factors. Then **test one interior point** to
learn which region went where.

*From* [7.1](lessons/07-01-mobius-transformations.md)

### The conformal-map atlas

| Map | Sends | Fails at |
|---|---|---|
| $w=\dfrac{z-i}{z+i}$ (Möbius) | upper half-plane $\leftrightarrow$ unit disk | never |
| $w=-i\dfrac{z-1}{z+1}$ | unit disk $\to$ upper half-plane (sends $1,i,-1\mapsto0,1,\infty$) | never |
| $w=z^2$ | first quadrant $\to$ upper half-plane | $z=0$ (angles double) |
| $w=z^{\pi/\beta}$ | wedge of opening $\beta$ $\to$ upper half-plane | the vertex |
| $w=e^z$ | strip $\{0<\operatorname{Im}z<\pi\}\to$ upper half-plane | never, but injective only on strips of height under $2\pi$ |
| $w=\tfrac12\!\left(z+\tfrac1z\right)$ (Joukowski) | exterior of the unit disk $\to$ exterior of $[-1,1]$ | $z=\pm1$ (the airfoil edges) |

*From* [7.2](lessons/07-02-conformal-maps-riemann.md) *and* [7.1](lessons/07-01-mobius-transformations.md)

### Solving a Dirichlet problem by transport

**Riemann mapping theorem.** Every simply connected $\Omega\subsetneq\mathbb{C}$ is
conformally equivalent to $\mathbb{D}$; fixing $\varphi(z_0)=0$ with
$\varphi'(z_0)>0$ makes $\varphi$ unique. It is **existence only** — no formula. All
of $\mathbb{C}$ is excluded (Liouville), and so is any region with a hole.

**Harmonicity is conformally invariant:** $u$ harmonic and $\varphi$ holomorphic
$\Rightarrow$ $u\circ\varphi$ harmonic. That is the whole engine.

1. **Map** $\Omega$ to a disk, half-plane, or strip with something from the atlas.
2. **Solve** there — by symmetry, or by the Poisson formula on the disk.
3. **Pull back** through the map; harmonicity survives the trip.

$$\text{Poisson (disk, } u=g \text{ on } \lvert z\rvert=1):\quad u(z)=\frac{1}{2\pi}\int_0^{2\pi}\frac{1-\lvert z\rvert^2}{\lvert e^{i\theta}-z\rvert^2}\,g(e^{i\theta})\,d\theta$$

$$\text{Half-plane, edges at } 0 \text{ and } T:\quad U(w)=\frac{T}{\pi}\arg w \qquad\Longrightarrow\qquad \text{wedge of angle }\beta:\ u(z)=\frac{T}{\beta}\arg z$$

*From* [7.2](lessons/07-02-conformal-maps-riemann.md)

## Assumed, not taught here

This is a Tier 1 course built on `real-analysis`: the convergence and topology
machinery is imported, not re-proved. Every row says where the *why* lives.

| Fact | Where it's taught |
|---|---|
| ε–δ limits and continuity (transferred verbatim to $\mathbb{C}$) | [real-analysis 5.1](../real-analysis/lessons/05-01-limits-and-continuity.md) |
| Open sets, closed sets, boundary, limit points | [real-analysis 4.1](../real-analysis/lessons/04-01-open-closed-limit-points.md) |
| Compactness = closed + bounded (Heine–Borel) | [real-analysis 4.2](../real-analysis/lessons/04-02-compactness-heine-borel.md) |
| Bolzano–Weierstrass (bounded sequences have convergent subsequences) | [real-analysis 2.3](../real-analysis/lessons/02-03-subsequences-bolzano-weierstrass.md) |
| Nested closed bounded sets shrink to one point (Goursat's proof runs on this) | [real-analysis 1.3](../real-analysis/lessons/01-03-consequences-of-completeness.md) |
| Radius of convergence, Cauchy–Hadamard, term-by-term differentiation on $\mathbb{R}$ | [real-analysis 8.3](../real-analysis/lessons/08-03-power-series.md) |
| Uniform convergence and the Weierstrass M-test (the license to swap $\sum$ and $\oint$) | [real-analysis 8.1](../real-analysis/lessons/08-01-pointwise-vs-uniform.md), [8.2](../real-analysis/lessons/08-02-what-uniform-convergence-preserves.md) |
| Absolute convergence licenses rearranging and the Cauchy product | [real-analysis 3.3](../real-analysis/lessons/03-03-absolute-vs-conditional.md) |
| Ratio test, geometric and $p$-series benchmarks | [real-analysis 3.2](../real-analysis/lessons/03-02-convergence-tests.md) |
| The real Fundamental Theorem of Calculus (applied to $\operatorname{Re}$ and $\operatorname{Im}$ separately) | [real-analysis 7.3](../real-analysis/lessons/07-03-fundamental-theorem-calculus.md) |
| Convergence of improper integrals — the quiet guard on every residue evaluation | [calc-refresher 2.3](../calc-refresher/lessons/02-03-improper-integrals-and-models.md) |
| Partial fractions (the first move in almost every Laurent and residue problem) | [calc-refresher 2.2](../calc-refresher/lessons/02-02-integration-techniques.md) |
| Partial derivatives, and mixed partials commuting | [calc-refresher 4.1](../calc-refresher/lessons/04-01-partial-derivatives-and-gradient.md), [5.1](../calc-refresher/lessons/05-01-vector-fields-div-curl.md) |
| Line integrals; path-independence $\iff$ a potential exists (the vector-calculus twin of this course's antiderivative story) | [calc-refresher 5.2](../calc-refresher/lessons/05-02-line-integrals-and-flux.md) |
| Green's theorem (Cauchy's own 1825 proof used it; Goursat's does not) | [calc-refresher 5.3](../calc-refresher/lessons/05-03-green-stokes-divergence.md) |
| Angle-addition identities, the unit circle, radians | [precalculus 3.1](../precalculus/lessons/03-01-trig-functions-for-calculus.md) |
| Polar coordinates and parametrizing curves | [precalculus 4.2](../precalculus/lessons/04-02-vectors-parametric-and-polar.md) |
| Real $e^x$, $\ln x$ and their algebra | [precalculus 2.3](../precalculus/lessons/02-03-exponential-and-logarithmic-functions.md) |
| $2\times2$ matrices, multiplication, determinant (the Möbius group picture) | [linalg-refresher 2.1](../linalg-refresher/lessons/02-01-matrices-as-linear-maps.md), [2.3](../linalg-refresher/lessons/02-03-determinants.md) |

**Stated only here:** the **binomial theorem**,
$(z+w)^n=\sum_{j=0}^{n}\binom{n}{j}z^jw^{n-j}$. No course in the library derives
it, yet [1.1](lessons/01-01-complex-numbers-geometry.md) uses it to expand
$(\cos\theta+i\sin\theta)^3$ and [3.2](lessons/03-02-elementary-functions-series.md)
needs it to collapse the Cauchy product into $e^{z+w}$.

## Pitfalls

### Multivaluedness, branches, and roots

- $\arg z$ is a **ladder**, not a number — defined only modulo $2\pi$, and pinning it to $(-\pi,\pi]$ creates a seam. *([1.1](lessons/01-01-complex-numbers-geometry.md), [1.3](lessons/01-03-exponential-log-trig.md))*
- "$i=\sqrt{-1}$" is a labeling convention, not a definition: $\sqrt{\ }$ is not single-valued on $\mathbb{C}$, which is exactly why $\sqrt{-1}\sqrt{-1}=\sqrt{1}=1$ "proves" nonsense. *([1.1](lessons/01-01-complex-numbers-geometry.md))*
- $\mathbb{C}$ is **not ordered** — every inequality in this course is between the real numbers $\lvert z\rvert$, never between complex numbers. *([1.1](lessons/01-01-complex-numbers-geometry.md))*
- $\operatorname{Log}(z_1z_2)\neq\operatorname{Log}z_1+\operatorname{Log}z_2$ in general; the law holds only for the multivalued $\log$, as sets mod $2\pi i$. Take $z_1=z_2=-1$. *([1.3](lessons/01-03-exponential-log-trig.md))*
- $e^{\log z}=z$ always, but $\log(e^z)=z$ only up to $2\pi ik$ — periodicity already discarded the rung. *([1.3](lessons/01-03-exponential-log-trig.md))*
- The branch cut's jump is **real**, not an artifact to smooth away: no single-valued continuous log survives a loop around $0$. The same obstruction blocks a global harmonic conjugate for $\ln\lvert z\rvert$ on the punctured plane. *([1.3](lessons/01-03-exponential-log-trig.md), [2.3](lessons/02-03-harmonic-functions-conformality.md))*

### Limits and differentiability

- A complex limit must agree along **every** path. Two matching paths never prove one; a single disagreement kills one. *([1.2](lessons/01-02-functions-limits-continuity.md))*
- There is one $\infty$ in $\hat{\mathbb{C}}$, not a $+\infty$ and a $-\infty$. *([1.2](lessons/01-02-functions-limits-continuity.md))*
- Continuity is cheap and transfers for free; it is the *ratio* in the derivative that breaks. $\lvert z\rvert$ and $\bar z$ are continuous everywhere and differentiable nowhere. *([1.2](lessons/01-02-functions-limits-continuity.md), [2.1](lessons/02-01-complex-differentiability.md))*
- Real-differentiable is far weaker: $\bar z$ is a perfectly smooth linear map $\mathbb{R}^2\to\mathbb{R}^2$ and holomorphic nowhere. A reflection is never multiplication by a complex number. *([2.1](lessons/02-01-complex-differentiability.md), [2.2](lessons/02-02-cauchy-riemann-equations.md))*
- **"At a point" is not "on an open set."** $\lvert z\rvert^2$ is differentiable only at $0$; $x^2+iy^2$ is differentiable along the whole line $y=x$ — both are holomorphic *nowhere*, since neither set contains a disk. *([2.1](lessons/02-01-complex-differentiability.md), [2.2](lessons/02-02-cauchy-riemann-equations.md))*
- The familiar rules transfer because the **field algebra** transfers — so any formula using $\bar z$, $\lvert z\rvert$, $\operatorname{Re}$, or $\operatorname{Im}$ escapes them. *([2.1](lessons/02-01-complex-differentiability.md))*

### Cauchy–Riemann and harmonic conjugates

- Cauchy–Riemann at a point does **not** give differentiability there — you need continuous partials on a neighborhood ($\sqrt{\lvert xy\rvert}$ is the counterexample at the origin). *([2.2](lessons/02-02-cauchy-riemann-equations.md))*
- The second equation is $u_y=-v_x$, never $+$. That minus sign is the whole difference between a rotation and a reflection. *([2.2](lessons/02-02-cauchy-riemann-equations.md))*
- Only **harmonic** functions have conjugates — Laplace's equation is the compatibility condition, not a bonus check. *([2.3](lessons/02-03-harmonic-functions-conformality.md))*
- A conjugate is unique only up to an added real constant; don't report it without the $+C$. *([2.3](lessons/02-03-harmonic-functions-conformality.md))*
- Conformality dies wherever $f'=0$: at such a point angles are **multiplied**, not preserved ($z^2$ doubles them at the origin, $z^3$ triples them). *([2.3](lessons/02-03-harmonic-functions-conformality.md), [7.2](lessons/07-02-conformal-maps-riemann.md))*

### Series and convergence

- Every theorem is about the **open** disk (or open annulus). The boundary is genuinely case-by-case: $\sum z^n$ diverges everywhere on $\lvert z\rvert=1$ while $\sum z^n/n^2$ converges everywhere on it. Term-by-term differentiation is licensed only inside. *([3.1](lessons/03-01-power-series-analytic.md), [5.2](lessons/05-02-laurent-series.md))*
- The radius is set by the nearest singularity **anywhere in the plane**, not by how the function looks on $\mathbb{R}$ — $\frac{1}{1+x^2}$ is throttled by poles at $\pm i$ it can't see. *([3.1](lessons/03-01-power-series-analytic.md), [5.1](lessons/05-01-taylor-series-analyticity.md))*
- Splitting or reordering a series needs **absolute** convergence; name it before you regroup. *([3.2](lessons/03-02-elementary-functions-series.md))*
- Complex $\sin$ and $\cos$ are **not** bounded by $1$ — $\cos(iy)=\cosh y\to\infty$. The real bound was an accident of the real axis. *([1.3](lessons/01-03-exponential-log-trig.md), [3.2](lessons/03-02-elementary-functions-series.md))*
- A function can outlive its power series: $\log$ exists far beyond the circle where $\sum(-1)^{n-1}z^n/n$ converges. *([3.2](lessons/03-02-elementary-functions-series.md))*
- The identity theorem needs a limit point **inside** the domain. The integers have none in $\mathbb{C}$, so $\sin(\pi z)$ vanishes on all of $\mathbb{Z}$ without being zero. *([5.1](lessons/05-01-taylor-series-analyticity.md))*
- A function has **one Laurent series per annulus**, not one per center. Always name the ring. *([5.2](lessons/05-02-laurent-series.md))*

### Contours, hypotheses, and orientation

- $dz=\gamma'(t)\,dt$ — the velocity factor is part of the substitution, and dropping it makes every answer wrong. *([4.1](lessons/04-01-contour-integrals.md))*
- The endpoint shortcut needs a **single-valued** antiderivative on a domain containing the whole path; $1/z$ around $0$ has none, which is why the loop gives $2\pi i$ rather than $0$. *([4.1](lessons/04-01-contour-integrals.md))*
- Cauchy–Goursat needs holomorphy on the **whole filled-in region**, not just on the curve — and simple connectivity is load-bearing, not a technicality ($1/z$ is holomorphic on an annulus yet loops to $2\pi i$ there). *([4.2](lessons/04-02-cauchy-goursat-theorem.md))*
- In the Cauchy integral formula $z_0$ must be **strictly inside**; outside gives $0$, and on the contour the formula simply doesn't apply. The manufactured pole is the *only* singularity allowed inside — $f$ itself must be holomorphic there. *([4.3](lessons/04-03-cauchy-integral-formula.md))*
- Orientation is never cosmetic: reversing a contour negates the integral, and a clockwise loop turns $2\pi i\sum\operatorname{Res}$ into $-2\pi i\sum\operatorname{Res}$. *([4.1](lessons/04-01-contour-integrals.md), [4.3](lessons/04-03-cauchy-integral-formula.md), [6.1](lessons/06-01-residue-theorem.md))*
- Liouville needs **entire and bounded on all of $\mathbb{C}$**: $\sin z$ is bounded on the real axis but not entire-and-bounded; $1/z$ is bounded off the origin but not entire. Morera likewise needs *every* triangle plus continuity. *([4.4](lessons/04-04-consequences-liouville-morera.md))*
- Don't import real intuition about smoothness: on $\mathbb{R}$ once-differentiable does not imply twice; in $\mathbb{C}$ it is all or nothing. *([4.4](lessons/04-04-consequences-liouville-morera.md))*

### Singularities and residues

- A zero of the denominator is not automatically a pole — net the orders first. $\frac{\sin z}{z}$ is removable. *([5.3](lessons/05-03-zeros-and-singularities.md))*
- "The limit doesn't exist" splits into two diagnoses: a pole forces $\lvert f\rvert\to\infty$ from **every** direction, while an essential singularity stays bounded along some directions and blows up along others. *([5.3](lessons/05-03-zeros-and-singularities.md))*
- Classification is strictly **local** — the same function can have a pole at one point and an essential singularity at another. *([5.3](lessons/05-03-zeros-and-singularities.md))*
- The residue is **only $a_{-1}$**, not the whole principal part: $\frac{1}{z^2}+\frac{3}{z}$ has residue $3$, and the $z^{-2}$ term integrates to nothing. *([6.1](lessons/06-01-residue-theorem.md))*
- The simple-pole limit trick is meaningless at a higher-order or essential singularity — expand and read $a_{-1}$ instead. *([6.1](lessons/06-01-residue-theorem.md), [6.2](lessons/06-02-computing-residues-real-integrals.md))*
- "Poles inside" does not mean "nonzero answer" — residues routinely cancel to $0$. *([6.2](lessons/06-02-computing-residues-real-integrals.md))*
- Only poles **in the half-plane you closed** are enclosed, and the arc never vanishes for free: justify it every time by the degree gap or by Jordan's lemma. *([6.2](lessons/06-02-computing-residues-real-integrals.md))*
- The $z=e^{i\theta}$ substitution works only when the integrand is a **rational** function of $\cos\theta$ and $\sin\theta$; and for $e^{iax}$ the sign of $a$ decides which way you close. *([6.2](lessons/06-02-computing-residues-real-integrals.md))*

### Counting and conformal maps

- The argument principle counts **with multiplicity** — an integral of $6\pi i$ could be three simple zeros or one triple zero, and it can't tell you which. *([6.3](lessons/06-03-argument-principle-rouche.md))*
- Rouché needs a **strict** inequality at **every** boundary point, and $f$ nonzero on $\gamma$; one point of equality can hide a zero on the curve and collapse the whole setup. *([6.3](lessons/06-03-argument-principle-rouche.md))*
- Check $ad-bc\neq0$ before calling something a Möbius map — otherwise it's a constant. *([7.1](lessons/07-01-mobius-transformations.md))*
- A Möbius map guarantees only **boundary to boundary**: the inside may land outside. Always test one interior point. *([7.1](lessons/07-01-mobius-transformations.md))*
- A line genuinely *is* a circle (one through $\infty$) — "circline" is one family, not loose talk, and $\infty$ is an ordinary point the map acts on. *([7.1](lessons/07-01-mobius-transformations.md))*
- The Riemann mapping theorem is **existence, not a formula** — build the map from the atlas. Its exclusions bite: $\mathbb{C}$ itself and any region with a hole are out. *([7.2](lessons/07-02-conformal-maps-riemann.md))*
- Transport only pays if you land somewhere you can actually solve; mapping one ugly region to another buys nothing. *([7.2](lessons/07-02-conformal-maps-riemann.md))*
