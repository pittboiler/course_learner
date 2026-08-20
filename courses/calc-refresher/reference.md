# Calculus Refresher · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Calculus is two questions and their answer. *How fast is this changing right
here?* (derivative) and *how much has accumulated in total?* (integral) — and the
Fundamental Theorem says the two operations undo each other. Everything below is
that pair, extended: to approximations (Taylor), to infinite sums (series), to
several variables (gradients), and to fields on curves and surfaces (the big
three theorems, which are all the FTC wearing different clothes).

## Notation

| Symbol | Means | First used |
|---|---|---|
| $f'(a)$, $\frac{df}{dx}$ | derivative — how many output-units you get per input-unit, right at $a$ | [1.1](lessons/01-01-derivative-as-sensitivity.md) |
| $h$ | the nudge: a small step in the input | [1.1](lessons/01-01-derivative-as-sensitivity.md) |
| $f^{(k)}$ | the $k$-th derivative ($f^{(0)} = f$) | [1.3](lessons/01-03-linearization-and-taylor.md) |
| $L(x)$, $T_n(x)$ | the tangent-line approximation, and the degree-$n$ Taylor polynomial | [1.3](lessons/01-03-linearization-and-taylor.md) |
| $\int_a^b f\,dx$ | signed area under $f$ from $a$ to $b$ — a **number** | [2.1](lessons/02-01-integral-as-accumulation.md) |
| $\int f\,dx$ | antiderivative — a **function** (family, hence $+C$) | [2.1](lessons/02-01-integral-as-accumulation.md) |
| $t$ in $\int_a^x f(t)\,dt$ | dummy variable doing the sweeping; $x$ is where it stops | [2.1](lessons/02-01-integral-as-accumulation.md) |
| $a_n$, $\sum a_n$ | the $n$-th term of a sequence, and its infinite sum | [3.1](lessons/03-01-series-convergence-tests.md) |
| $R$ | radius of convergence — half-width of the window where a power series works | [3.2](lessons/03-02-power-and-taylor-series.md) |
| $f_x$, $\frac{\partial f}{\partial x}$ | partial derivative — differentiate in $x$, freeze every other variable | [4.1](lessons/04-01-partial-derivatives-and-gradient.md) |
| $\nabla f$ | gradient $(f_x, f_y)$ — an arrow in the **input** plane pointing straight uphill | [4.1](lessons/04-01-partial-derivatives-and-gradient.md) |
| $D_{\mathbf u} f$ | directional derivative — slope when stepping along the **unit** vector $\mathbf u$ | [4.1](lessons/04-01-partial-derivatives-and-gradient.md) |
| $D$ | Hessian discriminant $f_{xx}f_{yy} - f_{xy}^2$ (not to be confused with a region $D$) | [4.2](lessons/04-02-multivariable-optimization-lagrange.md) |
| $\lambda$ | Lagrange multiplier — the constraint's shadow price | [4.2](lessons/04-02-multivariable-optimization-lagrange.md) |
| $dA$, $dV$ | area / volume element — carries a Jacobian factor in non-Cartesian coordinates | [4.3](lessons/04-03-multiple-integrals.md) |
| $\mathbf F = (P, Q)$ | vector field: $P$ horizontal component, $Q$ vertical | [5.1](lessons/05-01-vector-fields-div-curl.md) |
| $\nabla\cdot\mathbf F$, $\nabla\times\mathbf F$ | divergence (net outflow) and curl (net spin) | [5.1](lessons/05-01-vector-fields-div-curl.md) |
| $\mathbf r(t)$, $d\mathbf r$ | parametrization of a curve, and its tangent step $\mathbf r'(t)\,dt$ | [5.2](lessons/05-02-line-integrals-and-flux.md) |
| $\oint$, $\oiint$ | integral over a **closed** curve / surface | [5.3](lessons/05-03-green-stokes-divergence.md) |
| $\mathbf n$ | outward unit normal — fixes the orientation of a flux | [5.2](lessons/05-02-line-integrals-and-flux.md) |

## Definitions

### Derivative

The slope you see when you zoom in on a curve until it looks straight — the local
exchange rate between input and output.

$$f'(a) = \lim_{h \to 0} \frac{f(a+h) - f(a)}{h}$$

*Introduced:* [1.1](lessons/01-01-derivative-as-sensitivity.md)

### Differentiable

The zoom actually converges to one line: left-hand and right-hand nudges agree.
Continuity is not enough — $|x|$ is continuous at $0$ and has a corner there.

*Introduced:* [1.1](lessons/01-01-derivative-as-sensitivity.md)

### Linearization

Use the tangent line as a stand-in for $f$ near $a$: known value plus sensitivity
times distance travelled.

$$L(x) = f(a) + f'(a)\,(x-a)$$

*Introduced:* [1.3](lessons/01-03-linearization-and-taylor.md)

### Taylor polynomial

The one degree-$n$ polynomial whose value and first $n$ derivatives at $a$ match
$f$'s. Matching more derivatives pushes the error into a higher power of the step.

$$T_n(x) = \sum_{k=0}^{n} \frac{f^{(k)}(a)}{k!}(x-a)^k, \qquad T_1 = L$$

*Introduced:* [1.3](lessons/01-03-linearization-and-taylor.md)

### Critical point

Where the "walk uphill" argument breaks down: $f'(c) = 0$, or $f'(c)$ doesn't
exist. A candidate for an extremum, never a guarantee of one.

*Introduced:* [1.4](lessons/01-04-optimization.md)

### Definite integral

The limit of "height times width, summed" over ever-finer chopping. Signed: area
below the axis counts against you.

$$\int_a^b f(x)\,dx = \lim_{n\to\infty} \sum_{i=1}^{n} f(x_i^*)\,\Delta x, \qquad \Delta x = \frac{b-a}{n}$$

*Introduced:* [2.1](lessons/02-01-integral-as-accumulation.md)

### Antiderivative

Any $F$ with $F' = f$. A whole family, differing by a constant — which is why an
indefinite integral carries $+C$ and a definite integral doesn't.

*Introduced:* [2.1](lessons/02-01-integral-as-accumulation.md)

### Improper integral

An integral with an infinite limit or an unbounded integrand, defined as a limit
of honest integrals. It **converges** if that limit exists, otherwise **diverges**.

$$\int_a^\infty f\,dx = \lim_{b\to\infty}\int_a^b f\,dx, \qquad \int_0^1 f\,dx = \lim_{c\to 0^+}\int_c^1 f\,dx$$

*Introduced:* [2.3](lessons/02-03-improper-integrals-and-models.md)

### Convergence of a series

Add the first term, then the first two, then the first three — if those **partial
sums** home in on a number, the series converges to it.

*Introduced:* [3.1](lessons/03-01-series-convergence-tests.md)

### Power series

A polynomial of infinite degree in the displacement from a center $a$.

$$\sum_{n=0}^{\infty} c_n (x-a)^n$$

*Introduced:* [3.2](lessons/03-02-power-and-taylor-series.md)

### Radius of convergence

The half-width $R$ of the window around the center inside which a power series
converges (and outside which it's garbage). Endpoints are a separate, case-by-case
question.

*Introduced:* [3.2](lessons/03-02-power-and-taylor-series.md)

### Taylor series

The Taylor polynomial that never stops — and, inside $R$, it doesn't merely
approximate $f$, it equals it.

$$f(x) = \sum_{n=0}^{\infty}\frac{f^{(n)}(a)}{n!}(x-a)^n \qquad (\text{Maclaurin} = \text{the case } a = 0)$$

*Introduced:* [3.2](lessons/03-02-power-and-taylor-series.md)

### Partial derivative

An ordinary derivative in one variable with every other variable held still as a
spectator. The curly $\partial$ is the signal that spectators exist.

$$f_x = \lim_{h\to 0}\frac{f(x+h,\,y) - f(x,y)}{h}$$

*Introduced:* [4.1](lessons/04-01-partial-derivatives-and-gradient.md)

### Gradient

The per-axis sensitivities stapled into one vector — which turns out to point
straight uphill, with length equal to that steepest slope.

$$\nabla f = (f_x, f_y)$$

*Introduced:* [4.1](lessons/04-01-partial-derivatives-and-gradient.md)

### Directional derivative

The slope in a chosen direction: the gradient's shadow on that direction. The
direction vector **must** be unit length or "per unit distance" means nothing.

$$D_{\mathbf u} f = \nabla f\cdot\mathbf u = |\nabla f|\cos\theta$$

*Introduced:* [4.1](lessons/04-01-partial-derivatives-and-gradient.md)

### Lagrange multiplier

The number $\lambda$ making $\nabla f = \lambda\nabla g$ at a constrained optimum
— and, read as a rate, the price of the constraint: loosen $c$ by one unit and the
optimal value moves by $\lambda$.

$$\lambda = \frac{df^*}{dc}, \qquad [\lambda] = [f]/[c]$$

*Introduced:* [4.2](lessons/04-02-multivariable-optimization-lagrange.md)

### Iterated integral

A double integral done one dimension at a time: integrate the inner variable
between the curves bounding the region, then integrate the resulting slice-areas.
**Fubini** promises the order doesn't change the answer.

$$\iint_D f\,dA = \int_a^b\left(\int_{g_1(x)}^{g_2(x)} f(x,y)\,dy\right)dx$$

*Introduced:* [4.3](lessons/04-03-multiple-integrals.md)

### Jacobian

The local area-stretch factor of a coordinate change — the multivariable heir of
the $\frac{dx}{du}$ in $u$-substitution.

$$\frac{\partial(x,y)}{\partial(u,v)} = \det\begin{pmatrix} \partial x/\partial u & \partial x/\partial v \\ \partial y/\partial u & \partial y/\partial v \end{pmatrix}, \qquad dA = \left|\frac{\partial(x,y)}{\partial(u,v)}\right| du\,dv$$

*Introduced:* [4.3](lessons/04-03-multiple-integrals.md)

### Vector field

An arrow pinned to every point of the plane or of space — wind on a weather map,
current in a river.

$$\mathbf F(x,y) = \big(P(x,y),\ Q(x,y)\big)$$

*Introduced:* [5.1](lessons/05-01-vector-fields-div-curl.md)

### Divergence

Does a tiny box gain fluid? Net outflow per unit area. Returns a **scalar**.
Positive = source, negative = sink.

$$\operatorname{div}\mathbf F = \nabla\cdot\mathbf F = P_x + Q_y\ (+\,R_z)$$

*Introduced:* [5.1](lessons/05-01-vector-fields-div-curl.md)

### Curl

Does a tiny paddlewheel spin? A scalar in 2D, a vector in 3D. Straight streamlines
can still have curl, if one side runs faster than the other.

$$\operatorname{curl}\mathbf F = Q_x - P_y \quad (\text{2D}), \qquad \nabla\times\mathbf F = (R_y - Q_z,\ P_z - R_x,\ Q_x - P_y)$$

*Introduced:* [5.1](lessons/05-01-vector-fields-div-curl.md)

### Line integral

Total work the field does along a path: at each step keep the component of
$\mathbf F$ pointing along your motion. Reversing direction flips the sign.

$$\int_C \mathbf F\cdot d\mathbf r = \int_a^b \mathbf F(\mathbf r(t))\cdot\mathbf r'(t)\,dt$$

*Introduced:* [5.2](lessons/05-02-line-integrals-and-flux.md)

### Conservative field

A field that is a gradient, $\mathbf F = \nabla f$, for some potential $f$. Its
line integrals depend only on the endpoints, so every closed loop gives zero.

*Introduced:* [5.2](lessons/05-02-line-integrals-and-flux.md)

### Flux

How much of the field pierces straight through a surface, added over the surface.
Meaningless until you fix which way $\mathbf n$ points.

$$\iint_S \mathbf F\cdot\mathbf n\,dS$$

*Introduced:* [5.2](lessons/05-02-line-integrals-and-flux.md)

## Formulas and rules

### Derivatives of the standard functions

The course uses these from [1.2](lessons/01-02-differentiation-rules.md) onward
without deriving them. See also *Assumed, not taught here* below.

| $f(x)$ | $f'(x)$ | | $f(x)$ | $f'(x)$ |
|---|---|---|---|---|
| $x^n$ | $nx^{n-1}$ | | $\sin x$ | $\cos x$ |
| $e^x$ | $e^x$ | | $\cos x$ | $-\sin x$ |
| $a^x$ | $a^x\ln a$ | | $\tan x$ | $\sec^2 x$ |
| $\ln x$ | $1/x$ | | $\arcsin x$ | $1/\sqrt{1-x^2}$ |
| $\log_a x$ | $1/(x\ln a)$ | | $\arctan x$ | $1/(1+x^2)$ |

Angles are in **radians** — every entry in the right-hand column acquires a stray
factor of $\pi/180$ otherwise.

### Differentiation rules

$$(cf)' = cf', \qquad (f+g)' = f' + g'$$
$$(fg)' = f'g + fg', \qquad \left(\frac{f}{g}\right)' = \frac{f'g - fg'}{g^2}$$
$$\frac{d}{dx}f(g(x)) = f'(g(x))\cdot g'(x), \qquad \frac{dy}{dx} = \frac{dy}{du}\cdot\frac{du}{dx}$$

**Implicit differentiation** is the chain rule refusing to be stopped by an equals
sign: treat $y$ as $y(x)$, differentiate both sides, every $y$-term picks up a
factor $y'$, solve algebraically.

*From* [1.2](lessons/01-02-differentiation-rules.md)

### Approximation and error

$$L(x) = f(a) + f'(a)(x-a), \qquad f(a+h) - L(a+h) = \tfrac{1}{2}f''(c)\,h^2$$

$$f(x) - T_n(x) = \frac{f^{(n+1)}(c)}{(n+1)!}(x-a)^{n+1} \quad \text{for some } c \text{ between } a \text{ and } x$$

Halving $h$ **quarters** the linear error. The sign of $f''$ says which side you
miss on ($f'' > 0$: curve above tangent, so $L$ underestimates). You never find
$c$ — you bound $|f^{(n+1)}|$ on the interval and get a worst case.

*From* [1.3](lessons/01-03-linearization-and-taylor.md)

### Finding extrema

| Setting | Condition | Sorting the candidates |
|---|---|---|
| 1D interior | $f'(c) = 0$ | $f''(c) < 0$ max, $f''(c) > 0$ min, $f''(c) = 0$ no information |
| 1D on $[a,b]$ | critical points **plus** $a$ and $b$ | evaluate $f$ at each; largest and smallest win |
| 2D interior | $\nabla f = \mathbf 0$ | $D = f_{xx}f_{yy} - f_{xy}^2$: $D>0,f_{xx}>0$ min · $D>0,f_{xx}<0$ max · $D<0$ saddle · $D=0$ silent |
| 2D constrained | $\nabla f = \lambda\nabla g$ **and** $g = c$ | compare $f$ across all solutions — Lagrange finds tangencies, it doesn't label them |

*From* [1.4](lessons/01-04-optimization.md) *and* [4.2](lessons/04-02-multivariable-optimization-lagrange.md)

### Mixed partials commute (Clairaut)

Differentiate in either order and you land in the same place, provided the second
partials are continuous near the point.

$$f_{xy} = f_{yx}$$

Used but never stated in the lessons: it is why the Hessian discriminant carries a
single $f_{xy}$ rather than two different cross terms, and why
$\operatorname{curl}(\nabla f) = \mathbf 0$. Downstream it is the whole content of
Slutsky symmetry in [micro-refresher](../micro-refresher/lessons/01-04-slutsky-comparative-statics.md).

*Used by* [4.2](lessons/04-02-multivariable-optimization-lagrange.md) *and* [5.1](lessons/05-01-vector-fields-div-curl.md)

### The Fundamental Theorem

$$\text{I:}\quad \frac{d}{dx}\int_a^x f(t)\,dt = f(x) \qquad\qquad \text{II:}\quad \int_a^b f(x)\,dx = F(b) - F(a) \ \ (F' = f)$$

With a function in the upper limit, Part I picks up a chain rule:
$\frac{d}{dx}\int_a^{g(x)} f(t)\,dt = f(g(x))\,g'(x)$.

*From* [2.1](lessons/02-01-integral-as-accumulation.md)

### Antiderivatives of the standard functions

| $f(x)$ | $\int f\,dx$ | | $f(x)$ | $\int f\,dx$ |
|---|---|---|---|---|
| $x^n\ (n\neq-1)$ | $\dfrac{x^{n+1}}{n+1}$ | | $\sin x$ | $-\cos x$ |
| $1/x$ | $\ln\lvert x\rvert$ | | $\cos x$ | $\sin x$ |
| $e^x$ | $e^x$ | | $\sec^2 x$ | $\tan x$ |
| $a^x$ | $a^x/\ln a$ | | $\dfrac{1}{1+x^2}$ | $\arctan x$ |
| $\ln x$ | $x\ln x - x$ | | $\dfrac{1}{\sqrt{1-x^2}}$ | $\arcsin x$ |

All carry $+C$.

### Integration techniques

$$\text{substitution:}\quad \int f(g(x))\,g'(x)\,dx = \int f(u)\,du \quad (u = g(x))$$
$$\text{by parts:}\quad \int u\,dv = uv - \int v\,du$$
$$\text{partial fractions:}\quad \frac{p(x)}{(x-a)(x-b)} = \frac{A}{x-a} + \frac{B}{x-b}$$

**Run the checklist in order:** simplify algebraically → substitution → parts →
partial fractions. Substitution outranks parts; many products are secretly
substitutions. For parts, pick $u$ = the factor that *improves* when
differentiated (logs, polynomials). For partial fractions the ratio must be
**proper** — long-divide first — and find $A$ by the cover-up method (multiply by
$(x-a)$, set $x=a$).

*From* [2.2](lessons/02-02-integration-techniques.md)

### Convergence benchmarks

| Test | Verdict |
|---|---|
| $\int_1^\infty x^{-p}dx$ | converges $\iff p > 1$ |
| $\int_0^1 x^{-p}dx$ | converges $\iff p < 1$ |
| $\sum 1/n^p$ (p-series) | converges $\iff p > 1$ |
| $\sum ar^n$ (geometric) | converges $\iff \lvert r\rvert < 1$, to $\dfrac{a}{1-r}$ with $a$ the **actual first term** |
| $n$-th-term test | $a_n \not\to 0 \Rightarrow$ diverges (converse is false) |
| integral test | $\sum a_n$ and $\int_1^\infty f$ share a fate, for $f$ positive, decreasing, $f(n) = a_n$ |
| comparison | trapped under a convergent roof → converges; above a divergent floor → diverges |
| limit comparison | $a_n/b_n \to L$ with $0 < L < \infty$ → same verdict as $b_n$ |
| ratio test | $L = \lim\lvert a_{n+1}/a_n\rvert$: $L<1$ converges, $L>1$ diverges, $L=1$ says **nothing** |

Reach for the ratio test the instant you see $n!$ or $c^n$; powers of $n$ are
comparison work, not ratio work.

*From* [2.3](lessons/02-03-improper-integrals-and-models.md) *and* [3.1](lessons/03-01-series-convergence-tests.md)

### The series library — memorize these five

$$e^x = \sum_{n=0}^{\infty}\frac{x^n}{n!} = 1 + x + \frac{x^2}{2!} + \cdots \quad (R=\infty)$$
$$\sin x = \sum_{n=0}^{\infty}\frac{(-1)^n x^{2n+1}}{(2n+1)!} = x - \frac{x^3}{3!} + \frac{x^5}{5!} - \cdots \quad (R=\infty)$$
$$\cos x = \sum_{n=0}^{\infty}\frac{(-1)^n x^{2n}}{(2n)!} = 1 - \frac{x^2}{2!} + \frac{x^4}{4!} - \cdots \quad (R=\infty)$$
$$\frac{1}{1-x} = \sum_{n=0}^{\infty} x^n \quad (\lvert x\rvert < 1)$$
$$\ln(1+x) = \sum_{n=1}^{\infty}\frac{(-1)^{n-1}x^n}{n} = x - \frac{x^2}{2} + \frac{x^3}{3} - \cdots \quad (\lvert x\rvert < 1)$$

Inside the radius you may **substitute into, differentiate, and integrate
term-by-term**. Do that instead of computing $f^{(n)}(a)/n!$ by hand — almost always.

*From* [3.2](lessons/03-02-power-and-taylor-series.md)

### Area and volume elements

| Coordinates | Element |
|---|---|
| polar | $dA = r\,dr\,d\theta$ |
| cylindrical | $dV = r\,dr\,d\theta\,dz$ |
| spherical | $dV = \rho^2\sin\phi\,d\rho\,d\phi\,d\theta$ |

The extra factor is geometry, not a rule to memorize: a polar tile spans $dr$
radially and sweeps an arc of length $r\,d\theta$.

*From* [4.3](lessons/04-03-multiple-integrals.md)

### Vector-field identities

$$\operatorname{curl}(\nabla f) = \mathbf 0 \qquad\qquad \operatorname{div}(\operatorname{curl}\mathbf F) = 0$$

A gradient field never spins; a curl field never sources. The first gives the
conservative test: in 2D on a domain **with no holes**, $\mathbf F = (P,Q)$ is
conservative exactly when $Q_x - P_y = 0$.

*From* [5.1](lessons/05-01-vector-fields-div-curl.md) *and* [5.2](lessons/05-02-line-integrals-and-flux.md)

### The big three (and their parent)

$$\text{FTC for line integrals:}\quad \int_C \nabla f\cdot d\mathbf r = f(B) - f(A)$$
$$\text{Green:}\quad \oint_C \mathbf F\cdot d\mathbf r = \iint_D (Q_x - P_y)\,dA$$
$$\text{Stokes:}\quad \oint_C \mathbf F\cdot d\mathbf r = \iint_S (\nabla\times\mathbf F)\cdot\mathbf n\,dS$$
$$\text{Divergence (Gauss):}\quad \oiint_S \mathbf F\cdot\mathbf n\,dS = \iiint_V (\nabla\cdot\mathbf F)\,dV$$

All four say one sentence: **the integral of a derivative over a region equals a
plain integral over that region's boundary.** Orientation is part of each
statement — Green needs $C$ counterclockwise, Gauss needs the outward normal,
Stokes needs $C$ and $\mathbf n$ matched by the right-hand rule.

*From* [5.2](lessons/05-02-line-integrals-and-flux.md) *and* [5.3](lessons/05-03-green-stokes-divergence.md)

## Assumed, not taught here

This course is a Tier 0 refresher: it uses the following without deriving them.
The formulas themselves are tabulated above — this table says where the *why*
lives.

| Fact | Where the derivation lives |
|---|---|
| Derivatives of $\sin$, $\cos$ (and why radians are mandatory) | the small-angle limit $\lim_{x\to0}\frac{\sin x}{x} = 1$ is derived in [precalculus 3.1](../precalculus/lessons/03-01-trig-functions-for-calculus.md); the derivative itself is stated only here |
| Derivatives of $e^x$, $\ln x$ | [precalculus 2.3](../precalculus/lessons/02-03-exponential-and-logarithmic-functions.md) builds the functions and their algebra; the derivatives are stated only here |
| Limits, one-sided limits, continuity | [precalculus 4.3](../precalculus/lessons/04-03-limits-and-instantaneous-rate.md) |
| Unit-circle values; Pythagorean and double-angle identities | [precalculus 3.1](../precalculus/lessons/03-01-trig-functions-for-calculus.md) |
| Sigma notation and index shifting | [precalculus 3.2](../precalculus/lessons/03-02-sequences-and-sigma-notation.md) |
| Function composition and inverses (the anatomy the chain rule reads) | [precalculus 1.2](../precalculus/lessons/01-02-composition-and-inverses.md) |
| Polar coordinates and parametric curves | [precalculus 4.2](../precalculus/lessons/04-02-vectors-parametric-and-polar.md) |
| Dot product, vector length, unit vectors | [linalg-refresher 1.1](../linalg-refresher/lessons/01-01-vectors-span-linear-combinations.md), [4.1](../linalg-refresher/lessons/04-01-inner-products-orthogonality.md) |
| $2\times2$ determinants (Hessian discriminant, Jacobian, 3D curl) | [linalg-refresher 2.3](../linalg-refresher/lessons/02-03-determinants.md) |
| The cross product — the determinant that curl is built from, and the right-hand rule | [linalg-refresher 1.4](../linalg-refresher/lessons/01-04-cross-product-and-orientation.md) |

## Pitfalls

### Derivatives

- $f'$ is a **function**, not a number — a whole new curve reporting sensitivity everywhere. *([1.1](lessons/01-01-derivative-as-sensitivity.md))*
- Continuous does not imply differentiable: $|x|$ has a corner at $0$. *([1.1](lessons/01-01-derivative-as-sensitivity.md))*
- $(fg)' \neq f'g'$ — one counterexample kills it: $x\cdot x$ has derivative $2x$, not $1$. *([1.2](lessons/01-02-differentiation-rules.md))*
- In $f'(g(x))$ the outer derivative is evaluated at the **inner value**: $\frac{d}{dx}\sin(x^2) = \cos(x^2)\cdot 2x$, never $\cos(x)\cdot2x$. *([1.2](lessons/01-02-differentiation-rules.md))*
- $\frac{d}{dx}(y^2) = 2y\,y'$, not $2y$ — dropping the $y'$ is the classic implicit-differentiation error. *([1.2](lessons/01-02-differentiation-rules.md))*
- Say the **units** out loud (dollars per unit, metres per second) — the fastest error check you own. *([1.1](lessons/01-01-derivative-as-sensitivity.md))*

### Approximation

- The error formula doesn't *give* the error — $c$ is unknown. It gives a ceiling once you bound $|f^{(n+1)}|$. *([1.3](lessons/01-03-linearization-and-taylor.md))*
- Tangent-line error grows like $h^2$, not $h$: ten times the distance, a hundred times the miss. *([1.3](lessons/01-03-linearization-and-taylor.md))*
- $L$ and $T_n$ are local to the center you built them at. Re-center; don't stretch. *([1.3](lessons/01-03-linearization-and-taylor.md))*

### Optimization

- $f'(c) = 0$ means **candidate**, not extremum — $x^3$ at $0$ keeps climbing. *([1.4](lessons/01-04-optimization.md))*
- On a closed interval, endpoints are silent candidates, and so are points where $f'$ doesn't exist. *([1.4](lessons/01-04-optimization.md))*
- $f''(c) = 0$ implies **nothing** — $x^4$, $-x^4$, $x^3$ all have it and differ. Fall back to the sign of $f'$ on each side. Likewise $D = 0$ in 2D. *([1.4](lessons/01-04-optimization.md), [4.2](lessons/04-02-multivariable-optimization-lagrange.md))*
- $D > 0$ alone doesn't settle max vs. min — it only rules out a saddle; read $f_{xx}$'s sign. *([4.2](lessons/04-02-multivariable-optimization-lagrange.md))*
- $\nabla f = \lambda\nabla g$ is two equations; without the constraint as the third, $\lambda$ floats free. *([4.2](lessons/04-02-multivariable-optimization-lagrange.md))*

### Integration

- A definite integral is a **number**; an antiderivative is a **function**. FTC II is the bridge. *([2.1](lessons/02-01-integral-as-accumulation.md))*
- Integral area is **signed** — for "area enclosed", find the zero crossings and handle pieces separately. *([2.1](lessons/02-01-integral-as-accumulation.md))*
- The dummy variable is load-bearing: write $\int_a^x f(t)\,dt$, never $\int_a^x f(x)\,dx$. *([2.1](lessons/02-01-integral-as-accumulation.md))*
- Seeing a product doesn't mean parts — hunt for an inner function's derivative first. *([2.2](lessons/02-02-integration-techniques.md))*
- When you substitute, convert **everything**: the $dx$ and the limits. *([2.2](lessons/02-02-integration-techniques.md))*
- Partial fractions needs a *proper* ratio and a factorable denominator. *([2.2](lessons/02-02-integration-techniques.md))*
- Inner limits may be functions of the outer variable; **outer limits must be constants**. An answer still containing the outer variable means the nesting is backwards. *([4.3](lessons/04-03-multiple-integrals.md))*
- $dA \neq dr\,d\theta$ in polar — the Jacobian $r$ is not optional. *([4.3](lessons/04-03-multiple-integrals.md))*
- When an inner integral stalls, redraw the region and **swap the order** before reaching for anything fancier. *([4.3](lessons/04-03-multiple-integrals.md))*

### Convergence

- "The terms go to zero" is necessary, never sufficient — $\sum 1/n$ is the standing counterexample, and the same harmonic ghost makes $\int_1^\infty dx/x$ diverge. *([2.3](lessons/02-03-improper-integrals-and-models.md), [3.1](lessons/03-01-series-convergence-tests.md))*
- Never "plug in $\infty$" — it's an abbreviation for a limit, and it lies when the limit doesn't exist. *([2.3](lessons/02-03-improper-integrals-and-models.md))*
- $\int_{-\infty}^{\infty} x\,dx$ is **not** zero by symmetry; both halves must converge separately. *([2.3](lessons/02-03-improper-integrals-and-models.md))*
- The ratio test is silent at $L = 1$ — which is every p-series. *([3.1](lessons/03-01-series-convergence-tests.md))*
- A larger $R$ means the series works over a wider window, not that it converges faster. *([3.2](lessons/03-02-power-and-taylor-series.md))*

### Gradients and fields

- $\mathbf u$ in $D_{\mathbf u}f$ must be **unit** length — normalize the given direction first. *([4.1](lessons/04-01-partial-derivatives-and-gradient.md))*
- $\nabla f$ lives flat in the input plane, not tilted up the surface, and it crosses contours at a **right angle**. *([4.1](lessons/04-01-partial-derivatives-and-gradient.md))*
- Divergence is $P_x + Q_y$ (each component along its own axis); curl is the crossed pair $Q_x - P_y$. Mixing them is the most common error in Module 5. *([5.1](lessons/05-01-vector-fields-div-curl.md))*
- Straight streamlines can still have curl — shear spins a paddlewheel. *([5.1](lessons/05-01-vector-fields-div-curl.md))*
- Path-independence holds **only** for conservative fields, and zero curl only guarantees it on a domain **without holes** (the punctured-plane field integrates to $2\pi$ around the origin). *([5.2](lessons/05-02-line-integrals-and-flux.md))*
- Flux is meaningless until you state which way $\mathbf n$ points; the big three all flip sign with orientation. *([5.2](lessons/05-02-line-integrals-and-flux.md), [5.3](lessons/05-03-green-stokes-divergence.md))*
- Stokes works for **any** surface sharing the rim — pick the easiest cap. *([5.3](lessons/05-03-green-stokes-divergence.md))*
- All three theorems assume smoothness throughout; enclose a singularity and they fail (which is exactly how Gauss's law detects charge). *([5.3](lessons/05-03-green-stokes-divergence.md))*
