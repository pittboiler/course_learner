# Numerical Analysis · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Every method here answers the same question — *how do I compute a number the exact
formula won't give me?* — and every method comes with a second question you must
ask before you trust it: *how does error enter, how does it propagate, and does
anything amplify it?* This card carries the vocabulary of that second question
(absolute vs. relative, forward vs. backward, conditioning vs. stability) and the
method tables — order, stability condition, cost — you'd otherwise go hunting for
mid-problem.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\operatorname{fl}(x)$ | $x$ snapped to the nearest representable float | [1.1](lessons/01-01-floating-point-roundoff.md) |
| $\varepsilon_{\text{mach}}$ | the gap between $1$ and the next float — the grid's *relative* resolution | [1.1](lessons/01-01-floating-point-roundoff.md) |
| $u$ | unit round-off $=\tfrac12\varepsilon_{\text{mach}}$ — the worst relative error one rounding can cost | [1.1](lessons/01-01-floating-point-roundoff.md) |
| $\delta$ | the relative wobble in $\operatorname{fl}(x)=x(1+\delta)$ | [1.1](lessons/01-01-floating-point-roundoff.md) |
| ulp | "unit in the last place" — the spacing between neighbouring floats *at that magnitude* | [1.1](lessons/01-01-floating-point-roundoff.md) |
| $\hat x$, $\hat f$ | what the machine actually computed, as opposed to the true $x$, $f$ | [1.2](lessons/01-02-cancellation-error-propagation.md) |
| $\kappa$ | condition number — the factor by which the **problem** magnifies relative input error | [1.3](lessons/01-03-conditioning-vs-stability.md) |
| $x^{*}$ | the exact answer being hunted (root, fixed point, solution vector) | [1.4](lessons/01-04-bisection-fixed-point.md) |
| $g$ in $x_{n+1}=g(x_n)$ | the fixed-point map: rearranged so the unknown equals a formula in itself | [1.4](lessons/01-04-bisection-fixed-point.md) |
| $e_n$ | the error at iterate $n$, $x_n - x^{*}$ | [1.4](lessons/01-04-bisection-fixed-point.md) |
| $L$ (Lipschitz) | contraction constant: $\lvert g(x)-g(y)\rvert\le L\lvert x-y\rvert$ — *not* the $L$ of $LU$ | [1.4](lessons/01-04-bisection-fixed-point.md) |
| $\varphi$ | the golden ratio $\tfrac{1+\sqrt5}{2}\approx1.618$ — the secant method's order | [1.5](lessons/01-05-newton-secant.md) |
| $L_i(x)$ | Lagrange cardinal polynomial — a switch that is $1$ at node $i$, $0$ at all others | [2.1](lessons/02-01-polynomial-interpolation.md) |
| $f[x_i,\dots,x_{i+k}]$ | divided difference — the Newton form's coefficients | [2.1](lessons/02-01-polynomial-interpolation.md) |
| $w(x)$ | node polynomial $\prod_i(x-x_i)$ — the one factor of the interpolation error you control | [2.1](lessons/02-01-polynomial-interpolation.md) |
| $h$ | the discretization step: node spacing, finite-difference nudge, or ODE time step | [2.3](lessons/02-03-numerical-differentiation.md) |
| $M_k$ | a bound on $\lvert f^{(k)}\rvert$ over the working interval | [2.3](lessons/02-03-numerical-differentiation.md) |
| $D(h)$ | a difference formula's estimate at step $h$ (the input to Richardson) | [2.3](lessons/02-03-numerical-differentiation.md) |
| $d$ | degree of exactness — the highest-degree polynomial a quadrature rule integrates perfectly | [2.4](lessons/02-04-newton-cotes-quadrature.md) |
| $t_i$, $w_i$ | quadrature nodes and weights on the reference interval $[-1,1]$ | [2.5](lessons/02-05-gaussian-adaptive-quadrature.md) |
| $P_n$ | Legendre polynomial — its roots *are* the $n$-point Gauss nodes | [2.5](lessons/02-05-gaussian-adaptive-quadrature.md) |
| $\ell_{ik}$ | elimination multiplier (row-kill factor), stored as the below-diagonal entries of $L$ | [3.1](lessons/03-01-lu-pivoting.md) |
| $P$ (permutation) | the matrix recording pivoting's row swaps, as in $PA=LU$ | [3.1](lessons/03-01-lu-pivoting.md) |
| $\rho$ (growth factor) | how much elimination inflated the largest entry — the LU stability meter | [3.1](lessons/03-01-lu-pivoting.md) |
| $\sigma_i$ | singular values — the stretch factors $A$ applies along its own axes | [3.2](lessons/03-02-cholesky-conditioning.md) |
| $\kappa(A)$, $\kappa_2(A)$ | matrix condition number; the subscript names the norm | [3.2](lessons/03-02-cholesky-conditioning.md) |
| $Q$, $R$ | orthonormal frame and the upper-triangular bookkeeping, $A=QR$ | [3.3](lessons/03-03-qr-factorization.md) |
| $H$ | Householder reflector $I-2vv^\top/(v^\top v)$ | [3.3](lessons/03-03-qr-factorization.md) |
| $M$, $N$, $T=M^{-1}N$ | the easy/leftover splitting $A=M-N$ and its iteration matrix | [3.4](lessons/03-04-iterative-methods.md) |
| $\rho(T)$ | spectral radius — the largest eigenvalue magnitude (a *different* $\rho$) | [3.4](lessons/03-04-iterative-methods.md) |
| $\rho(x)$ (Rayleigh) | Rayleigh quotient $x^\top Ax/x^\top x$ — a *third* $\rho$, read from context | [3.5](lessons/03-05-power-method.md) |
| $y_n$ vs. $y(t_n)$ | the numerical value at step $n$ vs. the exact solution there | [4.1](lessons/04-01-euler-local-global-error.md) |
| $\tau_n$ | local truncation error: the one-step residual from an exactly-correct start | [4.1](lessons/04-01-euler-local-global-error.md) |
| $p$ (order) | the exponent in "global error $=O(h^p)$" — not the floating-point precision $p$ | [4.1](lessons/04-01-euler-local-global-error.md) |
| $k_1,\dots,k_s$ | Runge–Kutta stage slopes sampled inside one step | [4.2](lessons/04-02-runge-kutta.md) |
| $f_k$ | a slope $f(t_k,y_k)$ already computed and stored in a multistep method's history | [4.3](lessons/04-03-multistep-methods.md) |
| $z=h\lambda$ | the single dimensionless combination that decides ODE stability | [4.4](lessons/04-04-absolute-stability-stiffness.md) |
| $R(z)$ | amplification factor: $y_{n+1}=R(z)\,y_n$ on the test equation | [4.4](lessons/04-04-absolute-stability-stiffness.md) |
| $\mathcal S$ | region of absolute stability, $\{z:\lvert R(z)\rvert\le1\}$ | [4.4](lessons/04-04-absolute-stability-stiffness.md) |
| $A^{+}$, $\Sigma^{+}$ | Moore–Penrose pseudo-inverse and its diagonal core | [5.2](lessons/05-02-qr-svd-least-squares.md) |
| $r_{\text{eff}}$ | effective (numerical) rank: how many $\sigma_i$ clear the threshold | [5.2](lessons/05-02-qr-svd-least-squares.md) |
| $u_i$, $\Delta x$ | grid values of the unknown function, and the grid spacing | [5.3](lessons/05-03-finite-differences-bvp.md) |
| $r=\alpha\Delta t/\Delta x^2$ | mesh ratio — a *fourth* use of $r$; the heat scheme's step-size dial | [5.4](lessons/05-04-heat-equation-explicit-implicit.md) |
| $g(\theta)$ | von Neumann amplification factor for the Fourier mode of angle $\theta$ | [5.4](lessons/05-04-heat-equation-explicit-implicit.md) |

## Definitions

### Absolute and relative error

Absolute error is how far off you are; relative error is how far off you are *as a
fraction of the answer* — and only the second one counts significant digits.

$$\text{absolute}=\lvert \hat x - x\rvert, \qquad \text{relative}=\frac{\lvert \hat x - x\rvert}{\lvert x\rvert}$$

A relative error near $10^{-k}$ means about $k$ trustworthy digits.

*Introduced:* [1.2](lessons/01-02-cancellation-error-propagation.md)

### Machine epsilon

The width of one step of the floating-point grid *at $1$* — equivalently, the
finest relative resolution the format has. It is **not** the smallest storable
number.

$$\varepsilon_{\text{mach}} = 2^{-(p-1)}, \qquad \text{double: } 2^{-52}\approx 2.22\times10^{-16}$$

*Introduced:* [1.1](lessons/01-01-floating-point-roundoff.md)

### Unit round-off

Half of machine epsilon — the worst *relative* damage a single round-to-nearest can
do, because you can only miss by half a gap. This is the axiom the whole course
stands on.

$$\operatorname{fl}(x)=x(1+\delta),\qquad \lvert\delta\rvert\le u=\tfrac12\varepsilon_{\text{mach}}$$

*Introduced:* [1.1](lessons/01-01-floating-point-roundoff.md)

### Catastrophic cancellation

Subtracting two nearly equal numbers deletes the leading digits they share and
*promotes* the round-off that was hiding in the low bits to the front of the
answer. The subtraction creates no new error — it exposes the error already there.

$$\frac{\lvert\hat z-z\rvert}{\lvert z\rvert}\ \le\ \frac{\lvert x\rvert+\lvert y\rvert}{\lvert x-y\rvert}\,u \qquad (z=x-y)$$

Rule of thumb: agree in the first $k$ significant digits, lose about $k$ of them.

*Introduced:* [1.2](lessons/01-02-cancellation-error-propagation.md)

### Condition number

How many times bigger the output's relative error is than the input's — a property
of the **problem and the input point**, decided before any code runs.

$$\kappa(x)=\left\lvert\frac{x\,f'(x)}{f(x)}\right\rvert$$

$\kappa\approx1$ is ideal; $\kappa\gg1$ means the problem throws away precision no
matter how you compute.

*Introduced:* [1.3](lessons/01-03-conditioning-vs-stability.md)

### Forward error

The honest question: *how wrong is my answer?* The relative gap between what you
computed and the truth.

$$\frac{\lvert\hat f(x)-f(x)\rvert}{\lvert f(x)\rvert}$$

*Introduced:* [1.3](lessons/01-03-conditioning-vs-stability.md)

### Backward error

The sly question: *what problem did I actually solve?* The smallest input tweak
that would make your computed answer exactly right.

$$\min\left\{\frac{\lvert\tilde x-x\rvert}{\lvert x\rvert}\ :\ f(\tilde x)=\hat f(x)\right\}$$

For an approximate root, the residual $\lvert f(\hat x)\rvert$ is the natural
backward error.

*Introduced:* [1.3](lessons/01-03-conditioning-vs-stability.md)

### Backward stability

The gold standard for an **algorithm**: whatever you feed it, it returns the exact
answer to a question within rounding distance of the one you asked. It promises
nothing about forward error — that gap is $\kappa$.

$$\hat f(x)=f(\tilde x)\quad\text{with}\quad \frac{\lvert\tilde x-x\rvert}{\lvert x\rvert}=O(\varepsilon_{\text{mach}})$$

*Introduced:* [1.3](lessons/01-03-conditioning-vs-stability.md)

### Fixed point

A value the map $g$ leaves unmoved. Rearranging $f(x)=0$ into $x=g(x)$ turns
root-finding into "feed the output back in and see where it settles."

$$g(x^{*})=x^{*}$$

*Introduced:* [1.4](lessons/01-04-bisection-fixed-point.md)

### Contraction

A map that always pulls two points closer together. Contractions have exactly one
fixed point, and the iteration finds it from anywhere in the box.

$$\lvert g(x)-g(y)\rvert\le L\lvert x-y\rvert \ \text{ with } L<1 \quad\Longleftarrow\quad \max_{[a,b]}\lvert g'\rvert<1$$

*Introduced:* [1.4](lessons/01-04-bisection-fixed-point.md)

### Order of convergence

How fast an iteration's error dies: linear multiplies it by a constant each step,
quadratic *squares* it (digits double).

$$\lvert e_{n+1}\rvert\approx C\lvert e_n\rvert^{q}: \quad q=1\ \text{linear},\ \ 1<q<2\ \text{superlinear},\ \ q=2\ \text{quadratic}$$

*Introduced:* [1.4](lessons/01-04-bisection-fixed-point.md), [1.5](lessons/01-05-newton-secant.md)

### Node polynomial

The product of distances from $x$ to every interpolation node. It vanishes *at* the
nodes and swells between them — and it is the only part of the interpolation error
you get to design, by choosing where to sample.

$$w(x)=\prod_{i=0}^{n}(x-x_i)$$

*Introduced:* [2.1](lessons/02-01-polynomial-interpolation.md)

### Runge phenomenon

Adding *more* equispaced nodes to a perfectly smooth function can make the
polynomial fit blow up near the endpoints — more data, worse answer. It is a
conditioning failure of the problem, not a bug in the algorithm.

$$f(x)=\frac{1}{1+25x^2}\ \text{on}\ [-1,1]:\qquad \max_{[-1,1]}\lvert f-p_n\rvert\to\infty$$

*Introduced:* [2.2](lessons/02-02-runge-splines.md)

### Cubic spline

A chain of separate cubics, one per subinterval, glued so that value, slope, and
curvature all match at the seams — a curve that looks like one smooth stroke and
cannot oscillate.

$$s\in C^2,\qquad s\big|_{[x_i,x_{i+1}]}\ \text{cubic}$$

Counting: $4n$ unknowns, $4n-2$ matching conditions, so **two end conditions** close
it — *natural* ($s''=0$ at both ends) or *clamped* (end slopes prescribed).

*Introduced:* [2.2](lessons/02-02-runge-splines.md)

### Truncation error vs. round-off error

Truncation error is what you gave up by replacing calculus with algebra — it
*shrinks* with $h$. Round-off error is what finite precision costs — it *grows* as
$h\to0$, because you divide a cancelled difference by a tiny number. Total error is
a valley; the whole game is landing near its bottom.

*Introduced:* [2.3](lessons/02-03-numerical-differentiation.md)

### Degree of exactness

A one-number summary of a quadrature rule's power: the highest polynomial degree it
integrates with *zero* error.

$$\text{trapezoid } d=1,\quad \text{Simpson } d=3,\quad n\text{-point Gauss } d=2n-1$$

*Introduced:* [2.4](lessons/02-04-newton-cotes-quadrature.md)

### Growth factor

How much Gaussian elimination inflated the biggest entry along the way — the meter
that says whether the factorization stayed stable.

$$\rho=\frac{\max_{i,j,k}\lvert a^{(k)}_{ij}\rvert}{\max_{i,j}\lvert a_{ij}\rvert},\qquad \text{backward error}=O(\rho\,\varepsilon_{\text{mach}})$$

Partial pivoting bounds it by $2^{n-1}$ in theory and keeps it a modest constant in
practice.

*Introduced:* [3.1](lessons/03-01-lu-pivoting.md)

### Symmetric positive definite

The matrix is its own mirror image and never turns a vector into its own negative
half-space — the shape of every covariance matrix, stiffness matrix, and normal-
equations matrix.

$$A=A^\top \quad\text{and}\quad x^\top A x>0 \ \ \forall\, x\neq 0$$

Equivalent tests: all eigenvalues positive; all leading principal minors positive
(Sylvester); Cholesky runs to completion.

*Introduced:* [3.2](lessons/03-02-cholesky-conditioning.md)

### Matrix condition number

How much $A$ stretches its most-stretched direction relative to its least-stretched
one — the gain the problem $Ax=b$ applies to relative error in the data.

$$\kappa(A)=\lVert A\rVert\,\lVert A^{-1}\rVert\ \ge 1,\qquad \kappa_2(A)=\frac{\sigma_{\max}}{\sigma_{\min}}$$

An orthogonal matrix has $\kappa_2=1$; a near-singular one has $\kappa\to\infty$.

*Introduced:* [3.2](lessons/03-02-cholesky-conditioning.md)

### Spectral radius

The largest eigenvalue magnitude — the matrix version of "how much does one pass
shrink or grow a vector, asymptotically."

$$\rho(T)=\max_i\lvert\lambda_i(T)\rvert$$

An iteration $x_{k+1}=Tx_k+c$ converges from every start **iff** $\rho(T)<1$.

*Introduced:* [3.4](lessons/03-04-iterative-methods.md)

### Strict diagonal dominance

Each diagonal entry beats the rest of its own row — a sufficient condition you can
check by eye that guarantees both Jacobi and Gauss–Seidel converge.

$$\lvert a_{ii}\rvert > \sum_{j\neq i}\lvert a_{ij}\rvert \quad\text{for every } i$$

Sufficient, never necessary.

*Introduced:* [3.4](lessons/03-04-iterative-methods.md)

### Rayleigh quotient

The single number that best explains "$Ax$ looks like a scaled copy of $x$" — how
you read an eigenvalue off an approximate eigenvector.

$$\rho(x)=\frac{x^\top A x}{x^\top x}$$

*Introduced:* [3.5](lessons/03-05-power-method.md)

### Local truncation error

The residual left when you feed the *exact* solution through one step of the method
— the mistake a single step makes starting from a point that is perfectly right.

$$\tau_n = y(t_{n+1})-\big[y(t_n)+h\,\Phi\big]$$

*Introduced:* [4.1](lessons/04-01-euler-local-global-error.md)

### Order of a method

The exponent on the *accumulated* error over a whole trajectory. You take $\sim T/h$
steps, so one power of $h$ is always spent on the step count.

$$\text{global error}=O(h^p) \iff \text{local error}=O(h^{p+1})$$

*Introduced:* [4.1](lessons/04-01-euler-local-global-error.md)

### Region of absolute stability

The set of step-times-eigenvalue values for which a decaying true solution decays
numerically too. Choosing a step size means landing $z=h\lambda$ inside it — for
*every* eigenvalue of the system.

$$\mathcal S=\{\,z\in\mathbb{C}:\lvert R(z)\rvert\le1\,\}$$

*Introduced:* [4.4](lessons/04-04-absolute-stability-stiffness.md)

### A-stability

A method whose stability region swallows the entire decaying half-plane — so no
step size can ever destabilize a decaying mode. It is a promise about stability, not
about accuracy.

$$\{\operatorname{Re}z<0\}\subseteq\mathcal S$$

*Introduced:* [4.4](lessons/04-04-absolute-stability-stiffness.md)

### Stiffness

A system whose decay rates are wildly separated: the fast modes die almost instantly
but keep dictating an explicit method's step size long after they've vanished from
the answer.

$$\text{stiffness ratio}=\frac{\max_i\lvert\operatorname{Re}\lambda_i\rvert}{\min_i\lvert\operatorname{Re}\lambda_i\rvert}\gg1$$

The signature: accuracy would be happy with a large step, stability forces a tiny one.

*Introduced:* [4.4](lessons/04-04-absolute-stability-stiffness.md)

### Normal equations

The algebra of "drop a perpendicular": the best fit is the one whose residual is
orthogonal to everything the model can produce.

$$A^\top r=0 \quad\Longleftrightarrow\quad A^\top A\,x^{*}=A^\top b$$

Correct mathematics, treacherous numerics — forming $A^\top A$ squares the condition
number.

*Introduced:* [5.1](lessons/05-01-least-squares-normal-equations.md)

### Moore–Penrose pseudo-inverse

The closest thing to $A^{-1}$ that exists even when $A$ is rectangular or singular:
invert the stretch on the directions $A$ actually stretched, do nothing on the ones
it flattened.

$$A^{+}=V\Sigma^{+}U^\top,\qquad \Sigma^{+}=\operatorname{diag}\!\Big(\tfrac1{\sigma_1},\dots,\tfrac1{\sigma_r},0,\dots,0\Big)$$

$x=A^{+}b$ is the least-squares solution — and the minimum-norm one when $A$ is
rank-deficient.

*Introduced:* [5.2](lessons/05-02-qr-svd-least-squares.md)

### Effective rank

In floating point a "zero" singular value shows up as something merely tiny. The
effective rank is how many clear a threshold you choose — everything below it is
noise you refuse to invert.

$$r_{\text{eff}}=\#\{\,i:\sigma_i>\tau\,\}$$

Truncated SVD sets $1/\sigma_i\to0$ below $\tau$: a little bias bought for a large
drop in variance.

*Introduced:* [5.2](lessons/05-02-qr-svd-least-squares.md)

### Consistency, stability, convergence

Three separate claims, and the third follows from the first two. **Consistent:** the
exact solution nearly satisfies the discrete equations. **Stable:** the discrete
operator doesn't amplify what's left. **Convergent:** refining the mesh actually
approaches the truth.

$$\text{consistency} + \text{stability} \implies \text{convergence} \qquad (\text{Lax})$$

For the BVP this reads $A\mathbf e=\boldsymbol\tau$, so $\lVert\mathbf e\rVert\le\lVert A^{-1}\rVert\,\lVert\boldsymbol\tau\rVert$.

*Introduced:* [5.3](lessons/05-03-finite-differences-bvp.md), [5.4](lessons/05-04-heat-equation-explicit-implicit.md)

### Mesh ratio

How far heat diffuses in one time step, measured in grid cells — a PDE scheme's
step-size dial, and the only number the explicit stability limit cares about.

$$r=\frac{\alpha\,\Delta t}{\Delta x^2}$$

*Introduced:* [5.4](lessons/05-04-heat-equation-explicit-implicit.md)

## Formulas and rules

### The master rule of error

The one line that assigns blame. Rule out one suspect and you have found the other.

$$\text{forward error}\ \lesssim\ \kappa\times\text{backward error}$$

For a backward-stable algorithm the backward error is $O(\varepsilon_{\text{mach}})$,
so forward error $\lesssim\kappa\,\varepsilon_{\text{mach}}$: **big forward error =
(big $\kappa$: the problem's fault) or (big backward error: the algorithm's fault).**

*From* [1.3](lessons/01-03-conditioning-vs-stability.md)

### IEEE-754 formats

The course works in `float64` throughout; the single-precision column is here so you
can scale the constants when someone hands you a GPU kernel.

| | precision $p$ | $\varepsilon_{\text{mach}}$ | $u$ | smallest normal | largest | decimal digits |
|---|---|---|---|---|---|---|
| binary32 (single) | $24$ | $2^{-23}\approx1.19\times10^{-7}$ | $\approx5.96\times10^{-8}$ | $\approx1.18\times10^{-38}$ | $\approx3.4\times10^{38}$ | $\approx7$ |
| binary64 (double) | $53$ | $2^{-52}\approx2.22\times10^{-16}$ | $2^{-53}\approx1.11\times10^{-16}$ | $\approx2.2\times10^{-308}$ | $\approx1.8\times10^{308}$ | $\approx16$ |

Spacing inside the binade $[2^e,2^{e+1})$ is $\text{ulp}=2^{\,e-(p-1)}$ — so gaps
**double** at each power of two while relative resolution stays fixed. Beyond the
grid: overflow to `Inf`, underflow to subnormals then $0$, and `NaN` (unordered,
contaminates everything it touches).

*From* [1.1](lessons/01-01-floating-point-roundoff.md)

### How error propagates through an operation

| Operation | What happens to error | Verdict |
|---|---|---|
| $\hat x\hat y$ | relative errors **add**: $\approx xy(1+\delta_x+\delta_y)$ | safe |
| $\hat x/\hat y$ | relative errors add: $\approx (x/y)(1+\delta_x-\delta_y)$ | safe |
| $\hat x\pm\hat y$ | absolute errors add; *relative* error is $\lvert e_x\pm e_y\rvert/\lvert x\pm y\rvert$ | dangerous when $x\pm y\approx0$ |
| $\sum_{i=1}^{n}x_i$ | worst case $\sim(n-1)u\cdot\frac{\sum\lvert x_i\rvert}{\lvert\sum x_i\rvert}$ — linear in $n$ | mild for same-sign terms |

*From* [1.2](lessons/01-02-cancellation-error-propagation.md)

### Stable rewrites — kill the subtraction, keep the digits

Every cure is the same move: replace a subtraction of near-equals with an
algebraically identical expression that has none.

| Dangerous form | Stable rewrite | Trick |
|---|---|---|
| $\sqrt{x+1}-\sqrt{x}$, large $x$ | $\dfrac{1}{\sqrt{x+1}+\sqrt{x}}$ | multiply by the conjugate |
| $\dfrac{-b+\sqrt{b^2-4ac}}{2a}$ with $b^2\gg4ac$ | compute the root with the **non-cancelling** sign, then $x_{\text{small}}=\dfrac{c}{a\,x_{\text{large}}}$ | product of roots $=c/a$ |
| $1-\cos x$, small $x$ | $2\sin^2(x/2)$ | half-angle identity |
| $e^{x}-1$, small $x$ | `expm1(x)`, or $x+\tfrac{x^2}{2}+\tfrac{x^3}{6}$ | series / dedicated routine |
| $\ln(1+x)$, small $x$ | `log1p(x)` | dedicated routine |
| $\operatorname{Var}=\tfrac1n\sum x_i^2-\bar x^2$ | $\tfrac1n\sum(x_i-\bar x)^2$ (two-pass), or Welford | subtract *then* square |

Note **Sterbenz**: subtracting two floats within a factor of two of each other is
*exact*. The damage is inherited from the operands, never generated by the subtract.

*From* [1.2](lessons/01-02-cancellation-error-propagation.md), [1.3](lessons/01-03-conditioning-vs-stability.md)

### Condition numbers worth knowing cold

| Problem | $\kappa$ | Ill-conditioned when |
|---|---|---|
| $f(x)=x^n$ | $\lvert n\rvert$ | never (constant) |
| $f(x)=\sqrt x$ | $\tfrac12$ | never — it *halves* input error |
| $f(x)=e^{x}$ | $\lvert x\rvert$ | $\lvert x\rvert$ large |
| $f(x)=\ln x$ | $1/\lvert\ln x\rvert$ | $x\to1$ (where $\ln x\to0$) |
| $f(x)=x-c$ | $\lvert x\rvert/\lvert x-c\rvert$ | $x\approx c$ — cancellation, as conditioning |
| root $x^{*}$ of $g$ | $1/\lvert g'(x^{*})\rvert$ (absolute sensitivity) | $g$ flat at the root; a multiple root is the worst case |
| $Ax=b$ | $\kappa(A)=\lVert A\rVert\lVert A^{-1}\rVert$ | $\sigma_{\min}\to0$ |
| normal equations | $\kappa(A^\top A)=\kappa(A)^2$ | always worse than working with $A$ |

**Digit-loss rule.** Carrying $d$ digits ($d\approx16$ in double), trust about
$d-\log_{10}\kappa$ of them.

Reference values for the Hilbert matrix $H_{ij}=1/(i+j-1)$, the standard
ill-conditioning benchmark:

| $n$ | $2$ | $3$ | $4$ | $5$ | $6$ | $10$ |
|---|---|---|---|---|---|---|
| $\kappa_2(H_n)$ | $19.3$ | $5.2\times10^{2}$ | $1.6\times10^{4}$ | $4.8\times10^{5}$ | $1.5\times10^{7}$ | $1.6\times10^{13}$ |

*From* [1.3](lessons/01-03-conditioning-vs-stability.md), [3.2](lessons/03-02-cholesky-conditioning.md), [5.1](lessons/05-01-least-squares-normal-equations.md)

### Root-finding: order, guarantee, cost

The trade is always the same — speed against safety.

| Method | Iteration | Order | Guarantee | Cost per step |
|---|---|---|---|---|
| Bisection | keep the half with a sign change | $1$, rate exactly $\tfrac12$ | **unconditional**, given $f(a)f(b)<0$ | $1$ evaluation of $f$ |
| Fixed point | $x_{n+1}=g(x_n)$ | $1$, rate $\lvert g'(x^{*})\rvert$ | local; global on $[a,b]$ if $g$ maps it into itself with $\max\lvert g'\rvert<1$ | $1$ evaluation of $g$ |
| Newton | $x_{n+1}=x_n-\dfrac{f(x_n)}{f'(x_n)}$ | $2$ at a **simple** root; drops to $1$ with rate $\tfrac{m-1}{m}$ at multiplicity $m$ | local only — can cycle, overshoot, or find another root | $f$ **and** $f'$ |
| Secant | $x_{n+1}=x_n-f(x_n)\dfrac{x_n-x_{n-1}}{f(x_n)-f(x_{n-1})}$ | $\varphi\approx1.618$ (superlinear) | local only | $1$ **new** evaluation of $f$ |

$$\text{bisection: } \lvert c_n-x^{*}\rvert\le\frac{b-a}{2^{\,n+1}},\qquad n=\left\lceil\log_2\frac{b-a}{\text{tol}}\right\rceil \ \ (\approx3.3 \text{ steps per decimal digit})$$

$$\text{Newton: } e_{n+1}=\frac{f''(x^{*})}{2f'(x^{*})}\,e_n^2,\qquad \text{secant: } e_{n+1}\approx C\,e_n e_{n-1}$$

**Efficiency per evaluation:** Newton $2^{1/2}\approx1.414$, secant
$\varphi\approx1.618$ — so secant often wins when $f'$ is expensive.
**Multiple root of known multiplicity $m$:** $x_{n+1}=x_n-m\,f(x_n)/f'(x_n)$ restores
quadratic convergence. **Safeguarded Newton:** fall back to a bisection step whenever
a Newton step leaves the bracket or fails to shrink $\lvert f\rvert$ — speed plus the
guarantee.

*From* [1.4](lessons/01-04-bisection-fixed-point.md), [1.5](lessons/01-05-newton-secant.md)

### Interpolation: forms, error, cost

Same unique polynomial, three costumes — plus the two escapes from high degree.

| Form / scheme | Error | Conditioning & cost | Use it for |
|---|---|---|---|
| Vandermonde solve | (the same polynomial) | $\kappa(V)$ grows **exponentially** in $n$; $O(n^3)$ | proving uniqueness — never computing |
| Lagrange $p=\sum y_iL_i$ | $\dfrac{f^{(n+1)}(\xi)}{(n+1)!}\,w(x)$ | $O(n^2)$ per evaluation; no cheap update | theory, deriving quadrature |
| Newton divided differences | same | $O(n^2)$ table, $O(n)$ per evaluation; **extends by one term** | computing, and growing datasets |
| Equispaced, high degree | diverges for Runge's $f$ | $\max\lvert w\rvert$ explodes at the ends | nothing — this is the trap |
| Chebyshev nodes | $\max\lvert w\rvert=2^{-n}$ (first kind) | same cost, exponentially better | smooth $f$ you can sample anywhere |
| Cubic spline | $\lVert f-s\rVert_\infty\le\tfrac{5}{384}h^4\lVert f^{(4)}\rVert_\infty$ (clamped) | **tridiagonal**, $O(n)$ | data, shapes, anything you must not let ripple |

$$L_i(x)=\prod_{j\neq i}\frac{x-x_j}{x_i-x_j},\qquad f[x_i,\dots,x_{i+k}]=\frac{f[x_{i+1},\dots,x_{i+k}]-f[x_i,\dots,x_{i+k-1}]}{x_{i+k}-x_i}$$

$$p(x)=f[x_0]+f[x_0,x_1](x-x_0)+\cdots+f[x_0,\dots,x_n]\prod_{j=0}^{n-1}(x-x_j)$$

**Chebyshev nodes on $[-1,1]$** — first kind (roots of $T_{n+1}$, the exact minimizer
of $\max\lvert w\rvert$) and Lobatto (the extrema, endpoints included):

$$x_k=\cos\!\frac{(2k+1)\pi}{2(n+1)},\ k=0,\dots,n \qquad\text{vs.}\qquad x_k=\cos\!\frac{k\pi}{n},\ k=0,\dots,n$$

Map to $[a,b]$ with $x\mapsto\tfrac{b-a}{2}x+\tfrac{a+b}{2}$. A **natural** spline's
forced zero end-curvature degrades accuracy to $O(h^2)$ near the ends; **clamped** is
better whenever you know the true end slopes. Knot-curvature relation on a uniform
grid: $M_{i-1}+4M_i+M_{i+1}=\tfrac{6}{h^2}(y_{i-1}-2y_i+y_{i+1})$.

*From* [2.1](lessons/02-01-polynomial-interpolation.md), [2.2](lessons/02-02-runge-splines.md)

### Finite-difference stencils

| Estimate | Formula | Order | Leading error |
|---|---|---|---|
| $f'$ forward | $\dfrac{f(x+h)-f(x)}{h}$ | $O(h)$ | $\tfrac{h}{2}f''(\xi)$ |
| $f'$ backward | $\dfrac{f(x)-f(x-h)}{h}$ | $O(h)$ | $-\tfrac{h}{2}f''(\xi)$ |
| $f'$ central | $\dfrac{f(x+h)-f(x-h)}{2h}$ | $O(h^2)$ | $\tfrac{h^2}{6}f'''(\xi)$ |
| $f'$ one-sided, 2nd order | $\dfrac{-3f(x)+4f(x+h)-f(x+2h)}{2h}$ | $O(h^2)$ | $\tfrac{h^2}{3}f'''(\xi)$ |
| $f'$ five-point central | $\dfrac{-f(x+2h)+8f(x+h)-8f(x-h)+f(x-2h)}{12h}$ | $O(h^4)$ | $-\tfrac{h^4}{30}f^{(5)}(\xi)$ |
| $f''$ central $(1,-2,1)$ | $\dfrac{f(x+h)-2f(x)+f(x-h)}{h^2}$ | $O(h^2)$ | $\tfrac{h^2}{12}f^{(4)}(\xi)$ |

**The valley.** Truncation plus round-off gives $E(h)\le\tfrac{M_2}{2}h+\tfrac{2\varepsilon_{\text{mach}}M_0}{h}$ for the forward difference:

| Formula | Optimal $h^{*}$ | Best achievable error (double) |
|---|---|---|
| forward $f'$ | $2\sqrt{\varepsilon_{\text{mach}}M_0/M_2}\approx\sqrt{\varepsilon_{\text{mach}}}\approx10^{-8}$ | $\approx\sqrt{\varepsilon_{\text{mach}}}\approx10^{-8}$ |
| central $f'$ | $(3\varepsilon_{\text{mach}}M_0/M_3)^{1/3}\approx\varepsilon_{\text{mach}}^{1/3}\approx7\times10^{-6}$ | $\approx\varepsilon_{\text{mach}}^{2/3}\approx2\times10^{-11}$ |

**Richardson extrapolation.** If $D(h)=L+ch^{p}+O(h^{q})$ with $q>p$,

$$L\approx\frac{2^{p}D(h/2)-D(h)}{2^{p}-1}$$

Central difference has $p=2$ and even-power error, so $\tfrac{4D(h/2)-D(h)}{3}=f'(x)+O(h^4)$.
Applied to the trapezoid rule this same move is **Romberg integration**.

*From* [2.3](lessons/02-03-numerical-differentiation.md)

### Quadrature: degree of exactness, error, cost

| Rule | Nodes | $d$ | Single-panel error | Composite error | Evaluations |
|---|---|---|---|---|---|
| Trapezoid | $2$ endpoints, $h=b-a$ | $1$ | $-\tfrac{h^3}{12}f''(\xi)$ | $-\tfrac{(b-a)h^2}{12}f''(\xi)=O(h^2)$ | $n+1$ |
| Simpson | $3$, $h=\tfrac{b-a}{2}$ | $3$ | $-\tfrac{h^5}{90}f^{(4)}(\xi)$ | $-\tfrac{(b-a)h^4}{180}f^{(4)}(\xi)=O(h^4)$, $n$ **even** | $n+1$ |
| Simpson $3/8$ | $4$, $h=\tfrac{b-a}{3}$ | $3$ | $-\tfrac{3h^5}{80}f^{(4)}(\xi)$ | $O(h^4)$, $n$ a multiple of $3$ | $n+1$ |
| $n$-point Gauss–Legendre | $n$ interior Legendre roots | $2n-1$ | $\dfrac{(b-a)^{2n+1}(n!)^4}{(2n+1)\left[(2n)!\right]^3}f^{(2n)}(\xi)$ | $O(h^{2n})$ | $n$ |

$$\text{trapezoid: }\tfrac{h}{2}\Big(f_0+2\textstyle\sum_{i=1}^{n-1}f_i+f_n\Big),\qquad \text{Simpson: }\tfrac{h}{3}\Big(f_0+4\!\!\sum_{i\ \text{odd}}\!f_i+2\!\!\sum_{i\ \text{even}}\!f_i+f_n\Big)$$

**Reading the orders:** halve $h$ and composite trapezoid improves $4\times$,
composite Simpson $16\times$. Simpson steals a free degree — built from a parabola,
exact on cubics — because the odd-degree error cancels by symmetry.

**Adaptive quadrature (Simpson).** With $m=\tfrac{a+b}{2}$,

$$\text{err}\approx\frac{S(a,b)-\big(S(a,m)+S(m,b)\big)}{15},\qquad 15=2^4-1$$

Exceed the panel's share of the tolerance, subdivide and recurse; otherwise accept.
Cap the recursion depth — the estimate is a proxy, and it under-reports near a sharp
feature.

*From* [2.4](lessons/02-04-newton-cotes-quadrature.md), [2.5](lessons/02-05-gaussian-adaptive-quadrature.md)

### Gauss–Legendre nodes and weights on $[-1,1]$

The table the lessons use and never fully print. Map to $[a,b]$ with
$x=\tfrac{b-a}{2}t+\tfrac{a+b}{2}$ and multiply the whole sum by $\tfrac{b-a}{2}$.

| $n$ | nodes $t_i$ | weights $w_i$ | exact through degree |
|---|---|---|---|
| $1$ | $0$ | $2$ | $1$ |
| $2$ | $\pm\tfrac{1}{\sqrt3}\approx\pm0.5773503$ | $1,\ 1$ | $3$ |
| $3$ | $0$; $\pm\sqrt{3/5}\approx\pm0.7745967$ | $\tfrac89$; $\tfrac59,\tfrac59$ | $5$ |
| $4$ | $\pm0.3399810$; $\pm0.8611363$ | $0.6521452$; $0.3478548$ | $7$ |

$$P_0=1,\quad P_1=t,\quad P_2=\tfrac12(3t^2-1),\quad P_3=\tfrac12(5t^3-3t),\quad P_4=\tfrac18(35t^4-30t^2+3)$$

$$(n+1)P_{n+1}(t)=(2n+1)\,t\,P_n(t)-n\,P_{n-1}(t),\qquad \int_{-1}^{1}P_jP_k\,dt=0 \ (j\neq k)$$

Every Gauss weight is **positive** (no cancellation between large terms), and the
endpoints are never evaluated — a feature for endpoint singularities, a
disqualification when you need boundary values.

*From* [2.5](lessons/02-05-gaussian-adaptive-quadrature.md)

### Norms

The lessons write $\lVert\cdot\rVert$ constantly; here is what each one means.

| Vector | Induced matrix norm |
|---|---|
| $\lVert x\rVert_1=\sum_i\lvert x_i\rvert$ | $\lVert A\rVert_1=\max_j\sum_i\lvert a_{ij}\rvert$ (max absolute **column** sum) |
| $\lVert x\rVert_2=\sqrt{\sum_i x_i^2}$ | $\lVert A\rVert_2=\sigma_{\max}(A)$ |
| $\lVert x\rVert_\infty=\max_i\lvert x_i\rvert$ | $\lVert A\rVert_\infty=\max_i\sum_j\lvert a_{ij}\rvert$ (max absolute **row** sum) |

Also $\lVert A\rVert_F=\sqrt{\sum_{i,j}a_{ij}^2}$ (not induced). For symmetric $A$,
$\sigma_i=\lvert\lambda_i\rvert$, so $\kappa_2=\lvert\lambda\rvert_{\max}/\lvert\lambda\rvert_{\min}$;
for orthogonal $Q$, $\lVert Qx\rVert_2=\lVert x\rVert_2$ and $\kappa_2(Q)=1$.

*From* [3.2](lessons/03-02-cholesky-conditioning.md), [3.3](lessons/03-03-qr-factorization.md)

### Matrix factorizations: applies to, cost, stability

| Factorization | Applies to | Flops | Stability |
|---|---|---|---|
| $PA=LU$ (partial pivoting) | any nonsingular square $A$ | $\tfrac23n^3$ | backward stable in practice; $\lvert\ell_{ik}\rvert\le1$, $\rho\le2^{n-1}$ worst case |
| $A=LL^\top$ (Cholesky) | **SPD** only | $\tfrac13n^3$ | unconditionally stable — **no pivoting ever needed** |
| $A=QR$, classical Gram–Schmidt | full column rank | $2mn^2$ | can lose orthogonality catastrophically |
| $A=QR$, modified Gram–Schmidt | full column rank | $2mn^2$ | loses orthogonality like $\kappa(A)\varepsilon_{\text{mach}}$ |
| $A=QR$, Householder | any $m\times n$, $m\ge n$ | $2mn^2-\tfrac23n^3$ (square: $\tfrac43n^3$) | backward stable; $\hat Q$ orthogonal to $O(\varepsilon_{\text{mach}})$ |
| $A=U\Sigma V^\top$ (SVD) | anything | $O(mn^2)$, biggest constant | most stable; also reports rank and sensitivity |
| Thomas (tridiagonal $LU$) | tridiagonal, SPD or diagonally dominant | $O(n)$ | no pivoting needed |
| triangular solve | $L$ or $U$ | $n^2$ each | — |

$$L\ \text{holds the multipliers }\ell_{ik}=\frac{\text{entry to kill}}{\text{pivot}};\qquad U\ \text{holds the eliminated rows}$$

$$Ly=b\ \text{(forward)},\qquad Ux=y\ \text{(back)};\qquad l_{jj}=\sqrt{a_{jj}-\sum_{k<j}l_{jk}^2},\quad l_{ij}=\frac{a_{ij}-\sum_{k<j}l_{ik}l_{jk}}{l_{jj}}$$

$$H=I-2\frac{vv^\top}{v^\top v},\qquad v=x+\operatorname{sign}(x_1)\lVert x\rVert_2\,e_1 \ \Rightarrow\ Hx=-\operatorname{sign}(x_1)\lVert x\rVert_2\,e_1$$

**Factor once, solve many:** $\tfrac23n^3$ up front, then $2n^2$ per new right-hand
side. Never form $A^{-1}$. The sign choice in $v$ is not cosmetic — the other sign
subtracts near-equal numbers.

**Perturbation bound.** $\dfrac{\lVert\delta x\rVert}{\lVert x\rVert}\le\kappa(A)\dfrac{\lVert\delta b\rVert}{\lVert b\rVert}$,
and the bound is **tight** — line the perturbation up with the smallest singular
direction and you hit it exactly.

*From* [3.1](lessons/03-01-lu-pivoting.md), [3.2](lessons/03-02-cholesky-conditioning.md), [3.3](lessons/03-03-qr-factorization.md)

### Iterative solvers and eigenvalues

Split $A=D-L-U$ ($D$ diagonal, $-L$ strictly lower, $-U$ strictly upper), then
iterate $x_{k+1}=M^{-1}(Nx_k+b)$ with $A=M-N$.

| Method | $M$ | Iteration matrix $T$ | Converges iff | Component form |
|---|---|---|---|---|
| Jacobi | $D$ | $D^{-1}(L+U)$ | $\rho(T)<1$ | $x_i^{(k+1)}=\tfrac{1}{a_{ii}}\big(b_i-\sum_{j\neq i}a_{ij}x_j^{(k)}\big)$ |
| Gauss–Seidel | $D-L$ | $(D-L)^{-1}U$ | $\rho(T)<1$ | same, but $j<i$ uses the **new** $x_j^{(k+1)}$ |

$$e_{k+1}=T e_k\ \Rightarrow\ e_k=T^k e_0,\qquad \lVert e_k\rVert\sim\rho(T)^k\lVert e_0\rVert,\qquad k\ \ge\ \frac{\log(\text{tol})}{\log\rho(T)}$$

Strict diagonal dominance guarantees both converge. On nice symmetric systems
$\rho_{\text{GS}}=\rho_{\text{Jac}}^2$ (one Gauss–Seidel sweep is worth two Jacobi),
but this is a bonus, not a theorem in general.

**Power method.** $x_{k+1}=Ax_k/\lVert Ax_k\rVert$, eigenvalue read off by the
Rayleigh quotient.

| Target | Run the power method on | Rate |
|---|---|---|
| largest $\lvert\lambda\rvert$ | $A$ | $\lvert\lambda_2/\lambda_1\rvert$ (eigenvector); squared for the eigenvalue when $A=A^\top$ |
| smallest $\lvert\lambda\rvert$ | $A^{-1}$ (inverse iteration) | $\lvert\lambda_{n-1}/\lambda_n\rvert^{-1}$-style ratio of the inverted spectrum |
| nearest a shift $\mu$ | $(A-\mu I)^{-1}$ — solve $(A-\mu I)y=x_k$ each step | ratio of $1/(\lambda_i-\mu)$ |
| the next one down | deflate: $A'=A-\lambda_1\hat v_1\hat v_1^\top$ (symmetric case) | $\lvert\lambda_3/\lambda_2\rvert$ |

It **fails** when $\lvert\lambda_1\rvert=\lvert\lambda_2\rvert$ (equal magnitudes, or a
complex-conjugate pair): no single dominant direction, so the iterate never settles.

*From* [3.4](lessons/03-04-iterative-methods.md), [3.5](lessons/03-05-power-method.md)

### ODE integrators: order, cost, stability

The one table to consult before choosing a stepper. "Real interval" is the slice of
$\mathcal S$ on the negative real axis — the constraint that binds for a decaying
mode $\lambda<0$, giving $h\le\lvert\text{left endpoint}\rvert/\lvert\lambda\rvert$.

| Method | Global order | New $f$-evals / step | $R(z)$ | Real stability interval |
|---|---|---|---|---|
| Forward Euler | $1$ | $1$ | $1+z$ | $[-2,0]$ (disk $\lvert1+z\rvert\le1$) |
| Backward Euler | $1$ | implicit solve | $\dfrac{1}{1-z}$ | **A-stable** (whole left half-plane); $R\to0$ as $z\to-\infty$ |
| Trapezoidal / Crank–Nicolson | $2$ | implicit solve | $\dfrac{1+z/2}{1-z/2}$ | **A-stable**; but $R\to-1$, so stiff modes are barely damped |
| RK2 (midpoint, Heun) | $2$ | $2$ | $1+z+\tfrac{z^2}{2}$ | $[-2,0]$ |
| RK3 | $3$ | $3$ | $\sum_{j=0}^{3}z^j/j!$ | $[-2.51,0]$ |
| RK4 | $4$ | $4$ | $\sum_{j=0}^{4}z^j/j!$ | $[-2.785,0]$ |
| AB2 | $2$ | $1$ | — | $[-1,0]$ |
| AB3 | $3$ | $1$ | — | $[-0.545,0]$ |
| AB4 | $4$ | $1$ | — | $[-0.3,0]$ |
| AM 2-step | $3$ | implicit solve | — | $[-6,0]$ |
| BDF2 | $2$ | implicit solve | — | **A-stable** |

$$\text{Euler: } y_{n+1}=y_n+hf(t_n,y_n),\qquad \tau_n=\tfrac{h^2}{2}y''(\xi_n),\qquad \lvert e_N\rvert\le\frac{hM}{2L}\big(e^{L(T-t_0)}-1\big)$$

$$\text{RK4: } y_{n+1}=y_n+\tfrac{h}{6}(k_1+2k_2+2k_3+k_4),\quad k_1=f(t_n,y_n),\ k_2=f(t_n{+}\tfrac h2,y_n{+}\tfrac h2k_1),\ k_3=f(t_n{+}\tfrac h2,y_n{+}\tfrac h2k_2),\ k_4=f(t_n{+}h,y_n{+}hk_3)$$

Stages equal order only up to $4$ (order $5$ needs $6$ stages, order $6$ needs $7$) —
which is exactly why RK4 is the default. Its weights $\tfrac16(1,2,2,1)$ **are**
Simpson's rule: stepping $y'=f$ over one interval is a quadrature.

**Embedded pairs / adaptive stepping.**

$$\text{est. local error}\approx\big\lvert y^{(5)}_{n+1}-y^{(4)}_{n+1}\big\rvert,\qquad h_{\text{new}}=h\left(\frac{\tau}{\text{est. error}}\right)^{1/(p+1)}$$

Advance with the higher-order value, but size the step with $p$ = the **lower** order.

*From* [4.1](lessons/04-01-euler-local-global-error.md), [4.2](lessons/04-02-runge-kutta.md), [4.3](lessons/04-03-multistep-methods.md), [4.4](lessons/04-04-absolute-stability-stiffness.md)

### Multistep coefficients

Integrate $y'=f$ over one step, approximating the integrand by a polynomial through
slopes you already own. **Adams–Bashforth** extrapolates past slopes (explicit);
**Adams–Moulton** interpolates through the new one (implicit); **BDF** differentiates
a polynomial through past *solution values* and is what you reach for when stiff.

| Family | Formula | Order | LTE constant |
|---|---|---|---|
| AB1 | $y_{n+1}=y_n+h f_n$ | $1$ | $\tfrac12h^2y''$ |
| AB2 | $y_{n+1}=y_n+\tfrac{h}{2}(3f_n-f_{n-1})$ | $2$ | $\tfrac{5}{12}h^3y'''$ |
| AB3 | $y_{n+1}=y_n+\tfrac{h}{12}(23f_n-16f_{n-1}+5f_{n-2})$ | $3$ | $\tfrac{3}{8}h^4y^{(4)}$ |
| AB4 | $y_{n+1}=y_n+\tfrac{h}{24}(55f_n-59f_{n-1}+37f_{n-2}-9f_{n-3})$ | $4$ | $\tfrac{251}{720}h^5y^{(5)}$ |
| AM0 (backward Euler) | $y_{n+1}=y_n+h f_{n+1}$ | $1$ | $-\tfrac12h^2y''$ |
| AM1 (trapezoid) | $y_{n+1}=y_n+\tfrac{h}{2}(f_{n+1}+f_n)$ | $2$ | $-\tfrac{1}{12}h^3y'''$ |
| AM2 | $y_{n+1}=y_n+\tfrac{h}{12}(5f_{n+1}+8f_n-f_{n-1})$ | $3$ | $-\tfrac{1}{24}h^4y^{(4)}$ |
| AM3 | $y_{n+1}=y_n+\tfrac{h}{24}(9f_{n+1}+19f_n-5f_{n-1}+f_{n-2})$ | $4$ | $-\tfrac{19}{720}h^5y^{(5)}$ |
| BDF1 | $y_{n+1}=y_n+hf_{n+1}$ (= backward Euler) | $1$ | A-stable |
| BDF2 | $y_{n+1}=\tfrac43y_n-\tfrac13y_{n-1}+\tfrac23hf_{n+1}$ | $2$ | A-stable |

A $k$-step method needs $k-1$ **primed** starting values (take them from an RK step of
at least the same order), stores past slopes, and has a stability region that
*shrinks* as $k$ grows — the Adams family becomes unusable past order $6$–$8$, and BDF
past $6$.

**Predictor–corrector (PECE):** predict with AB, evaluate $f$ there, correct with one
AM step, evaluate again for the history. Two evaluations per step — half of RK4 —
and most of the implicit method's accuracy without solving anything.

*From* [4.3](lessons/04-03-multistep-methods.md)

### Least-squares: three routes to the same answer

| Route | Solve | Flops | Conditioning seen | When |
|---|---|---|---|---|
| Normal equations + Cholesky | $A^\top A\,x=A^\top b$ | $mn^2+\tfrac13n^3$ | $\kappa(A)^2$ | small, well-conditioned, speed-critical |
| **QR** (Householder) | $Rx=Q^\top b$, back-substitute | $2mn^2-\tfrac23n^3$ | $\kappa(A)$ | the default |
| SVD | $x=A^{+}b=V\Sigma^{+}U^\top b$ | $O(mn^2)$, larger constant | $\kappa(A)$ | rank-deficient, or you want the diagnostics |

$$\lVert Ax-b\rVert^2=\lVert Rx-Q^\top b\rVert^2+\lVert\tilde Q^\top b\rVert^2 \ \Rightarrow\ Rx=Q^\top b,\ \text{residual norm}=\lVert\tilde Q^\top b\rVert$$

$$\hat b=Ax^{*}=Pb,\quad P=A(A^\top A)^{-1}A^\top,\quad P^2=P=P^\top;\qquad A^{+}=(A^\top A)^{-1}A^\top \ \text{when } A \text{ has full column rank}$$

**Regularization** — two ways to stop a tiny $\sigma$ from amplifying noise:

| | Filter applied to $1/\sigma_i$ | Effect |
|---|---|---|
| truncated SVD | $1/\sigma_i\to0$ for $\sigma_i\le\tau$ | hard cut-off |
| ridge, $(A^\top A+\lambda I)x=A^\top b$ | $1/\sigma_i\to\sigma_i/(\sigma_i^2+\lambda)$ | smooth damping; eigenvalues become $\sigma_i^2+\lambda$ |

Cheapest partial fix of all: **center the data** ($x\mapsto x-\bar x$) so the design
columns are orthogonal and $\kappa$ falls back toward $1$.

*From* [5.1](lessons/05-01-least-squares-normal-equations.md), [5.2](lessons/05-02-qr-svd-least-squares.md)

### Discretized differential operators

For $-u''=f$ on $[0,1]$ with $u(0)=\alpha$, $u(1)=\beta$, grid $x_i=ih$, $h=\tfrac{1}{n+1}$:

$$A=\frac{1}{h^2}\operatorname{tridiag}(-1,\,2,\,-1),\qquad \mathbf b=\big(f_1+\tfrac{\alpha}{h^2},\ f_2,\ \dots,\ f_{n-1},\ f_n+\tfrac{\beta}{h^2}\big)^\top$$

| Property | Value |
|---|---|
| eigenvalues of $A$ | $\dfrac{2}{h^2}\Big(1-\cos\dfrac{k\pi}{n+1}\Big)=\dfrac{4}{h^2}\sin^2\dfrac{k\pi}{2(n+1)}$, all $>0$ (SPD) |
| $\lambda_{\min}\to\pi^2$, $\lambda_{\max}\to 4/h^2$ | so $\lVert A^{-1}\rVert_2\to1/\pi^2$ and $\kappa_2(A)=O(h^{-2})$ |
| local truncation error | $\tau_i=\tfrac{h^2}{12}u^{(4)}(\xi_i)=O(h^2)$ |
| global error | $A\mathbf e=\boldsymbol\tau\Rightarrow\lVert\mathbf e\rVert=O(h^2)$ — halve $h$, quarter the error |
| solve | Thomas algorithm, $O(n)$, no pivoting (SPD) |

Boundary values are **not** unknowns: $\alpha$ enters only the first equation and
$\beta$ only the last. A solution that is a polynomial of degree $\le3$ has
$u^{(4)}\equiv0$ and is reproduced **exactly** on any grid.

Thomas: $c'_1=\tfrac{c_1}{d_1},\ b'_1=\tfrac{b_1}{d_1}$; then
$c'_i=\tfrac{c_i}{d_i-a_ic'_{i-1}}$, $b'_i=\tfrac{b_i-a_ib'_{i-1}}{d_i-a_ic'_{i-1}}$;
back-substitute $u_n=b'_n$, $u_i=b'_i-c'_iu_{i+1}$.

*From* [5.3](lessons/05-03-finite-differences-bvp.md)

### Heat equation: explicit vs. implicit

Method of lines on $u_t=\alpha u_{xx}$: discretize space, keep time continuous,
$\dfrac{du_i}{dt}=\dfrac{\alpha}{\Delta x^2}(u_{i-1}-2u_i+u_{i+1})$ — then march it
with any Module 4 stepper.

| Scheme | Update | Stability | Accuracy | Cost per step |
|---|---|---|---|---|
| FTCS (explicit) | $u_i^{n+1}=u_i^n+r(u_{i-1}^n-2u_i^n+u_{i+1}^n)$ | $r\le\tfrac12$, i.e. $\Delta t\le\dfrac{\Delta x^2}{2\alpha}$ | $O(\Delta t)+O(\Delta x^2)$ | a formula |
| BTCS (implicit) | $-ru_{i-1}^{n+1}+(1+2r)u_i^{n+1}-ru_{i+1}^{n+1}=u_i^n$ | **unconditional** | $O(\Delta t)+O(\Delta x^2)$ | one tridiagonal solve, $O(N)$ |
| Crank–Nicolson | average of the two | **unconditional** | $O(\Delta t^2)+O(\Delta x^2)$ | one tridiagonal solve |

**Von Neumann amplification factors** (substitute $u_j^n=g^ne^{\mathrm i\theta j}$):

$$g_{\text{FTCS}}(\theta)=1-4r\sin^2\tfrac{\theta}{2},\qquad g_{\text{BTCS}}(\theta)=\frac{1}{1+4r\sin^2(\theta/2)},\qquad g_{\text{CN}}(\theta)=\frac{1-2r\sin^2(\theta/2)}{1+2r\sin^2(\theta/2)}$$

Demanding $\lvert g\rvert\le1$ for **all** $\theta$ gives $r\le\tfrac12$ for FTCS and
nothing at all for the other two. Equivalently: the operator's eigenvalues reach
$\mu\approx-4\alpha/\Delta x^2$, and forward Euler's disk needs $\Delta t\lvert\mu\rvert\le2$.
Halve $\Delta x$ and you must **quarter** $\Delta t$.

*From* [5.4](lessons/05-04-heat-equation-explicit-implicit.md)

## Assumed, not taught here

This is a Tier 1 course: it builds its own machinery but leans hard on the calculus
and linear algebra underneath. Each row points at where the *derivation* lives.

| Fact | Where it's taught |
|---|---|
| Taylor's theorem with remainder — the engine behind every truncation-error term | [calc-refresher 1.3](../calc-refresher/lessons/01-03-linearization-and-taylor.md), rigorously in [real-analysis 6.3](../real-analysis/lessons/06-03-taylor-theorem-remainder.md) |
| Taylor/Maclaurin series of $e^x$, $\sin$, $\cos$, $\ln(1+x)$ | [calc-refresher 3.2](../calc-refresher/lessons/03-02-power-and-taylor-series.md) |
| Derivatives of the standard functions (used from Lesson 1.3 onward without comment) | [calc-refresher 1.2](../calc-refresher/lessons/01-02-differentiation-rules.md) |
| The definite integral as a limit of sums (what every quadrature rule approximates) | [calc-refresher 2.1](../calc-refresher/lessons/02-01-integral-as-accumulation.md) |
| Intermediate Value Theorem — bisection's entire licence to exist | [real-analysis 5.3](../real-analysis/lessons/05-03-intermediate-value-theorem.md) |
| Mean Value Theorem — the step from $g(x_n)-g(x^{*})$ to $g'(\xi)e_n$ | [real-analysis 6.2](../real-analysis/lessons/06-02-mean-value-theorem.md) |
| Limits, one-sided limits, continuity | [precalculus 4.3](../precalculus/lessons/04-03-limits-and-instantaneous-rate.md), rigorously in [real-analysis 5.1](../real-analysis/lessons/05-01-limits-and-continuity.md) |
| Complex numbers and the complex plane (where $z=h\lambda$ and stability regions live) | [complex-analysis 1.1](../complex-analysis/lessons/01-01-complex-numbers-geometry.md) |
| Vectors, matrix–vector products, column space, span | [linalg-refresher 1.1](../linalg-refresher/lessons/01-01-vectors-span-linear-combinations.md), [2.1](../linalg-refresher/lessons/02-01-matrices-as-linear-maps.md) |
| Gaussian elimination, rank, and when a system is solvable | [linalg-refresher 1.3](../linalg-refresher/lessons/01-03-linear-systems-elimination-rank.md) |
| Matrix inverse and the four subspaces (full column rank ⇒ $A^\top A$ invertible) | [linalg-refresher 2.2](../linalg-refresher/lessons/02-02-inverses-and-four-subspaces.md) |
| Determinants (Vandermonde, Sylvester's minors, $2\times2$ inverses) | [linalg-refresher 2.3](../linalg-refresher/lessons/02-03-determinants.md) |
| Eigenvalues, eigenvectors, and the eigenvector expansion of a vector | [linalg-refresher 3.1](../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md) |
| Diagonalization — why $A^k v_i=\lambda_i^k v_i$ decouples an iteration | [linalg-refresher 3.2](../linalg-refresher/lessons/03-02-diagonalization.md) |
| Inner products, orthonormal bases, orthogonal matrices | [linalg-refresher 4.1](../linalg-refresher/lessons/04-01-inner-products-orthogonality.md) |
| Projection onto a subspace — the geometry of least-squares | [linalg-refresher 4.2](../linalg-refresher/lessons/04-02-projection-least-squares.md) |
| Gram–Schmidt and the $QR$ factorization (exact-arithmetic version) | [linalg-refresher 4.3](../linalg-refresher/lessons/04-03-gram-schmidt-qr.md) |
| Spectral theorem, quadratic forms, positive definiteness | [linalg-refresher 5.1](../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md) |
| SVD and singular values | [linalg-refresher 5.2](../linalg-refresher/lessons/05-02-svd.md) |
| Initial-value problems, slope fields, what a solution *is* | [ode-refresher 1.1](../ode-refresher/lessons/01-01-odes-solutions-slope-fields.md) |
| Linear systems $y'=Ay$ decoupling into modes $e^{\lambda_i t}$ | [ode-refresher 3.1](../ode-refresher/lessons/03-01-linear-systems-eigenvalues.md) |

## Pitfalls

### Floating point and cancellation

- $\varepsilon_{\text{mach}}$ is the finest *resolution*, not the smallest *magnitude* — underflow lives near $10^{-308}$, sixteen orders away. *([1.1](lessons/01-01-floating-point-roundoff.md))*
- Round-off is **relative**, not absolute: the gap at $10^{6}$ is about $0.1$, so you cannot resolve a million to better than a tenth. *([1.1](lessons/01-01-floating-point-roundoff.md))*
- `Inf` obeys sane algebra and can be recovered from; `NaN` is unordered (even `NaN == NaN` is false) and poisons every later operation. *([1.1](lessons/01-01-floating-point-roundoff.md))*
- Never test floats with `==` — test $\lvert a-b\rvert\le\text{tol}$. `0.1 + 0.2 == 0.3` is false because three separate roundings didn't cancel. *([1.1](lessons/01-01-floating-point-roundoff.md))*
- Subtraction doesn't *create* error, it **deletes the high digits that were masking it** — near-equal floats often subtract exactly (Sterbenz). The error was inherited. *([1.2](lessons/01-02-cancellation-error-propagation.md))*
- Cancellation strikes when the *result* is tiny compared to its inputs, not when the numbers are large. Products and quotients are always safe. *([1.2](lessons/01-02-cancellation-error-propagation.md))*
- Algebraically identical is not numerically identical. More precision only delays the cliff; rewriting the expression removes it. *([1.2](lessons/01-02-cancellation-error-propagation.md), [1.3](lessons/01-03-conditioning-vs-stability.md))*

### Conditioning vs. stability

- A wrong answer does not prove a buggy algorithm — condition the problem first. If $\kappa$ is astronomical, no algorithm helps and you must change the *problem*. *([1.3](lessons/01-03-conditioning-vs-stability.md), [3.2](lessons/03-02-cholesky-conditioning.md))*
- Small backward error does **not** imply small forward error. "I solved the right question" and "I got the right answer" differ by exactly the factor $\kappa$. *([1.3](lessons/01-03-conditioning-vs-stability.md))*
- $\kappa$ describes the *problem at an input point*, never your method. Say "ill-conditioned problem" and "unstable algorithm" — never the reverse. *([1.3](lessons/01-03-conditioning-vs-stability.md))*
- A small determinant does not mean ill-conditioned: $\tfrac{1}{1000}I$ has determinant $10^{-3n}$ and $\kappa=1$. Conditioning is a *ratio* of singular values, not their size. *([3.2](lessons/03-02-cholesky-conditioning.md), [5.2](lessons/05-02-qr-svd-least-squares.md))*
- A small residual does not mean a small error: they can differ by a factor of $\kappa(A)$. Use the residual as a cheap stopping proxy, not as truth. *([3.4](lessons/03-04-iterative-methods.md))*

### Root-finding

- Bisection needs a sign **change**, not merely a root: $(x-1)^2$ has a root at $1$ and no bracket anywhere. Even-multiplicity and complex roots are invisible to it. *([1.4](lessons/01-04-bisection-fixed-point.md))*
- "A fixed point exists" is not "the iteration finds it." Existence is about $g$; convergence is about $\lvert g'\rvert$ there. Always check the slope, not just the crossing. *([1.4](lessons/01-04-bisection-fixed-point.md))*
- $\lvert g'(x^{*})\rvert=1$ is a knife-edge the linear analysis cannot call — the iteration typically stalls or oscillates forever. *([1.4](lessons/01-04-bisection-fixed-point.md))*
- The bisection count bounds the bracket *width*; the midpoint is at worst half that from the root, so the formula is safe but slightly conservative. *([1.4](lessons/01-04-bisection-fixed-point.md))*
- A small $\lvert f(x_n)\rvert$ does not mean you are close — on a flat curve you can be far. Judge progress by the step size and watch that $f'$ isn't collapsing. *([1.5](lessons/01-05-newton-secant.md))*
- Newton's quadratic rate is **local**. From a bad start it diverges, cycles, or finds the wrong root while bisection would have crept in safely. Safeguard it. *([1.5](lessons/01-05-newton-secant.md))*
- A repeated root is a different regime, not a harder root: Newton drops to linear (rate $\tfrac{m-1}{m}$) *and* the root is ill-conditioned, so round-off caps the achievable accuracy too. *([1.3](lessons/01-03-conditioning-vs-stability.md), [1.5](lessons/01-05-newton-secant.md))*

### Interpolation and splines

- "Degree at most $n$", not "degree $n$" — three collinear points interpolate to a *line*. Don't force the top term. *([2.1](lessons/02-01-polynomial-interpolation.md))*
- The error formula needs $f\in C^{n+1}$. With a kink, a blow-up, or data alone, $f^{(n+1)}(\xi)$ is meaningless and you have no bound. *([2.1](lessons/02-01-polynomial-interpolation.md))*
- Never solve the Vandermonde system — its ill-conditioning corrupts the coefficients. Lagrange for theory, Newton for computation. *([2.1](lessons/02-01-polynomial-interpolation.md))*
- More points do not always help: on equispaced nodes a high-degree fit can **diverge**. Convergence depends on node *placement*, not node count. *([2.2](lessons/02-02-runge-splines.md))*
- Runge is not a bug in the error formula — the formula predicts the disaster exactly; $\lvert f^{(n+1)}\rvert$ simply outruns $(n+1)!$. *([2.2](lessons/02-02-runge-splines.md))*
- Chebyshev **nodes** are where you sample; you still build an ordinary interpolating polynomial through them. The magic is entirely in the sampling locations. *([2.2](lessons/02-02-runge-splines.md))*
- "Natural" is a default, not "best" — forcing zero end-curvature is usually wrong for the underlying function. Clamp if you know the end slopes. *([2.2](lessons/02-02-runge-splines.md))*

### Differentiation and quadrature

- Smaller $h$ is not always better: below $h^{*}\approx\sqrt{\varepsilon_{\text{mach}}}$ the round-off term $\varepsilon_{\text{mach}}/h$ takes over. $h=10^{-14}$ is *worse* than $h=10^{-8}$. *([2.3](lessons/02-03-numerical-differentiation.md), [4.1](lessons/04-01-euler-local-global-error.md))*
- Central differences need $f$ on both sides — at a domain boundary you are forced back to a one-sided stencil. *([2.3](lessons/02-03-numerical-differentiation.md))*
- "$O(h^2)$" is a *rate*, not a size. A huge $f'''$ or $u^{(4)}$ makes a nominally high-order formula inaccurate at any $h$ you can afford. *([2.3](lessons/02-03-numerical-differentiation.md), [2.4](lessons/02-04-newton-cotes-quadrature.md), [5.3](lessons/05-03-finite-differences-bvp.md))*
- Simpson's $h$ is the **half**-width $\tfrac{b-a}{2}$, not $b-a$ — using the full width inflates the predicted error by $2^5=32$. Composite Simpson needs $n$ **even**. *([2.4](lessons/02-04-newton-cotes-quadrature.md))*
- High degree of exactness is not the same as small error on *your* $f$: exactness is about polynomials, and a jagged integrand rewards adaptive subdivision instead. *([2.4](lessons/02-04-newton-cotes-quadrature.md), [2.5](lessons/02-05-gaussian-adaptive-quadrature.md))*
- Gauss nodes are irrational interior points and **never** include the endpoints — a feature at an endpoint singularity, a disqualification when you need boundary values. *([2.5](lessons/02-05-gaussian-adaptive-quadrature.md))*
- The adaptive error estimate is a proxy that assumes the error model holds on the panel; cap the recursion depth rather than trusting it blindly. *([2.5](lessons/02-05-gaussian-adaptive-quadrature.md))*

### Linear systems and factorizations

- Pivoting is about **stability**, not feasibility. An exact-zero pivot is a visible failure; a *tiny* pivot silently manufactures huge multipliers and destroys the answer. *([3.1](lessons/03-01-lu-pivoting.md))*
- You can need pivoting on a perfectly well-conditioned matrix — the $\varepsilon$-example has $\kappa\approx2.6$ and still gets wrecked without a swap. *([3.1](lessons/03-01-lu-pivoting.md))*
- $L$ stores the **multipliers**, $U$ the eliminated rows. Swapping those in your head is the single most common LU bug. *([3.1](lessons/03-01-lu-pivoting.md))*
- Never write `inv(A)*b` — factor and solve. Forming $A^{-1}$ costs more and is less accurate, and the inverse of a sparse matrix is dense. *([3.1](lessons/03-01-lu-pivoting.md), [5.3](lessons/05-03-finite-differences-bvp.md))*
- All-positive *entries* is not positive definite: $\begin{pmatrix}1&2\\2&1\end{pmatrix}$ has an eigenvalue $-1$. SPD is about the quadratic form, and SPD matrices routinely have negative off-diagonals. *([3.2](lessons/03-02-cholesky-conditioning.md))*
- Gram–Schmidt's "$Q$" is not guaranteed orthogonal — classical GS can return columns with inner product as large as $\tfrac12$. Use modified GS, or Householder for a guarantee. *([3.3](lessons/03-03-qr-factorization.md))*
- Never get $R$ via $A^\top A=R^\top R$: that squares the condition number, the exact disaster QR exists to avoid. *([3.3](lessons/03-03-qr-factorization.md), [5.1](lessons/05-01-least-squares-normal-equations.md))*
- Householder does not hand you $Q$ — it keeps the reflection vectors and *applies* $Q$ or $Q^\top$. Forming $Q$ explicitly is usually wasted work. *([3.3](lessons/03-03-qr-factorization.md))*
- Calling a general LU routine on a tridiagonal system throws away $O(n^3)$-vs-$O(n)$; always use a banded solver. *([5.3](lessons/05-03-finite-differences-bvp.md))*

### Iterative and eigenvalue methods

- More of $A$ in $M$ does not guarantee faster convergence — only $\rho(M^{-1}N)<1$ is decisive, and there are matrices where Jacobi converges and Gauss–Seidel diverges. *([3.4](lessons/03-04-iterative-methods.md))*
- Strict diagonal dominance is sufficient, never necessary — but skipping the check entirely is how iterates blow up regardless of the initial guess. *([3.4](lessons/03-04-iterative-methods.md))*
- The power method finds only the **largest-magnitude** eigenvalue. For the smallest run it on $A^{-1}$; for one near $\mu$, shift-and-invert. *([3.5](lessons/03-05-power-method.md))*
- Its convergence is merely *linear* at rate $\lvert\lambda_2/\lambda_1\rvert$ — two eigenvalues within one percent need hundreds of iterations per digit, and equal magnitudes never settle at all. *([3.5](lessons/03-05-power-method.md))*
- For symmetric $A$ the Rayleigh quotient converges at the *squared* rate, so a stable-looking eigenvalue can sit on a still-moving eigenvector. Judge by the direction. *([3.5](lessons/03-05-power-method.md))*

### ODE integrators and stability

- Local error $O(h^{p+1})$ is not the answer's accuracy: $\sim T/h$ steps cost you one power of $h$. Order always means the *global* exponent. *([4.1](lessons/04-01-euler-local-global-error.md), [4.2](lessons/04-02-runge-kutta.md))*
- Explicit vs. implicit is not about accuracy — forward and backward Euler are *both* first order. The difference is stability. *([4.1](lessons/04-01-euler-local-global-error.md), [4.4](lessons/04-04-absolute-stability-stiffness.md))*
- Stages equal order only through $4$; order $5$ needs $6$ stages. That plateau is why RK4 is the default and not a stepping stone. *([4.2](lessons/04-02-runge-kutta.md))*
- RK4's $k_2$ and $k_3$ are *different* midpoint slopes — $k_3$ re-evaluates $f$ at the $y$ predicted by $k_2$. Collapsing them drops the method to order 2. *([4.2](lessons/04-02-runge-kutta.md))*
- In an embedded pair, size the step with the **lower** order in the $1/(p+1)$ exponent even though you advance with the higher-order value. *([4.2](lessons/04-02-runge-kutta.md))*
- "One evaluation per step" is not free: multistep methods inherit a startup problem, a storage requirement, and a *smaller* stability region that shrinks further as $k$ grows. *([4.3](lessons/04-03-multistep-methods.md))*
- An implicit formula is an **equation**, not a plug-in — closed-form for linear $f$, fixed-point or Newton otherwise. A predictor–corrector step is exactly one such iteration. *([4.3](lessons/04-03-multistep-methods.md))*
- High order controls truncation per step and says nothing about growth: on a stiff problem even RK4 must crawl. Order and stability are separate axes. *([4.2](lessons/04-02-runge-kutta.md), [4.4](lessons/04-04-absolute-stability-stiffness.md))*
- "The fast mode already decayed, so it can't matter" is false — round-off re-seeds it every step, and outside $\mathcal S$ that seed is multiplied by $\lvert R\rvert>1$. Stability is about *perturbations*. *([4.4](lessons/04-04-absolute-stability-stiffness.md))*
- Absolute stability (fixed $h$) is a different question from convergence (as $h\to0$). Forward Euler is convergent *and* has a bounded stability region. *([4.4](lessons/04-04-absolute-stability-stiffness.md))*
- A-stability is a property of the *method* and promises boundedness, not accuracy — backward Euler is still only first order. *([4.4](lessons/04-04-absolute-stability-stiffness.md))*

### Least-squares

- Exactly derived does not mean safely computed: the normal equations are correct algebra whose one sin is *forming* $A^\top A$. *([5.1](lessons/05-01-least-squares-normal-equations.md))*
- A small residual says nothing about conditioning — you can have a beautiful fit whose coefficients swing wildly under a rounding error. *([5.1](lessons/05-01-least-squares-normal-equations.md))*
- $A^\top A$ is invertible **iff** $A$ has full column rank. Duplicate or collinear predictors make it singular and the fit non-unique. *([5.1](lessons/05-01-least-squares-normal-equations.md))*
- $\Sigma^{-1}$ does not exist for a rectangular or singular $A$: $\Sigma^{+}$ transposes the shape and inverts **only** the nonzero singular values. *([5.2](lessons/05-02-qr-svd-least-squares.md))*
- QR and SVD give the *identical* answer for full-rank $A$ — the difference is numerical, plus the SVD's rank and sensitivity diagnostics. *([5.2](lessons/05-02-qr-svd-least-squares.md))*
- Truncation is not cheating, it is regularization: zeroing a $1/\sigma$ that would otherwise be $10^{8}$ is a deliberate bias-for-stability trade. *([5.2](lessons/05-02-qr-svd-least-squares.md))*

### Discretized PDEs

- You cannot march a BVP forward — you don't know $u'(0)$. Either solve all nodes at once, or shoot and iterate. *([5.3](lessons/05-03-finite-differences-bvp.md))*
- Boundary values enter *only* the first and last right-hand-side entries, each scaled by $1/h^2$. Misplace them and you are silently solving a different problem. *([5.3](lessons/05-03-finite-differences-bvp.md))*
- For FTCS, "small step" is measured in $\Delta x^2$: a step that is rock-solid on a coarse grid explodes the moment you refine space. Always check $r$, never $\Delta t$ alone. *([5.4](lessons/05-04-heat-equation-explicit-implicit.md))*
- Unconditional stability is not accuracy — BTCS with a giant $\Delta t$ stays bounded while quietly over-smoothing the transient. *([5.4](lessons/05-04-heat-equation-explicit-implicit.md))*
- The $r\le\tfrac12$ bound is about **eigenvalues**, not resolution: the offending modes are the highest-frequency grid ripples, and machine-epsilon noise is enough to seed them. *([5.4](lessons/05-04-heat-equation-explicit-implicit.md))*
