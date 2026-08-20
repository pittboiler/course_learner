# Convex Optimization · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Convex optimization is one bet: if the objective is a bowl and the feasible set
has no dents, then "I can't improve locally" means "I can't improve anywhere,"
and you get a *certificate* saying so. This card is the three lookup surfaces
that bet needs — the operations that let you **recognize** convexity without
computing a Hessian, the **KKT** conditions with the constraint qualification
they require, and the **duality** table that says when the dual's answer is the
primal's answer.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\theta$ | the mixing weight in $\theta x + (1-\theta)y$, always in $[0,1]$ | [1.1](lessons/01-01-convex-sets-separating-hyperplane.md) |
| $a^\top x = b$ | a hyperplane with **normal** $a$; $a^\top x \le b$ is a halfspace | [1.1](lessons/01-01-convex-sets-separating-hyperplane.md) |
| $\operatorname{conv} S$ | convex hull — the shrink-wrap of $S$ | [1.1](lessons/01-01-convex-sets-separating-hyperplane.md) |
| $\preceq,\ \succeq$ on **vectors** | componentwise: $Ax \preceq b$ means every row's $a_i^\top x \le b_i$ | [1.2](lessons/01-02-convex-set-zoo-operations.md) |
| $X \succeq 0$, $X \succ 0$ on **matrices** | positive semidefinite / definite: $z^\top X z \ge 0$ (resp. $>0$) for all $z$ | [1.2](lessons/01-02-convex-set-zoo-operations.md) |
| $\mathbf{S}^n$, $\mathbf{S}^n_+$ | symmetric $n\times n$ matrices; the ones that are PSD (the **PSD cone**) | [1.2](lessons/01-02-convex-set-zoo-operations.md) |
| $\mathbf 1$, $\Delta_n$ | the all-ones vector; the probability simplex $\{x \succeq 0,\ \mathbf 1^\top x = 1\}$ | [1.2](lessons/01-02-convex-set-zoo-operations.md) |
| $\operatorname{dom} f$ | the domain of $f$ — must itself be convex, part of the definition | [1.3](lessons/01-03-convex-functions-epigraph.md) |
| $\operatorname{epi} f$ | epigraph — the solid region on and above the graph | [1.3](lessons/01-03-convex-functions-epigraph.md) |
| $\nabla f$, $\nabla^2 f$ | gradient (uphill arrow) and Hessian (curvature matrix) | [1.3](lessons/01-03-convex-functions-epigraph.md) |
| $\mathrm{lse}(x)$ | log-sum-exp $\log\sum_i e^{x_i}$ — the smooth stand-in for $\max_i x_i$ | [1.4](lessons/01-04-recognizing-convexity.md) |
| $f_0,\ f_i,\ h_j$ | objective; inequality constraints ($\le 0$); equality constraints ($= 0$) | [2.1](lessons/02-01-convex-problem-local-global.md) |
| $X$, $p^\star$, $X_{\text{opt}}$ | feasible set; optimal **value** (a number); the set of minimizers | [2.1](lessons/02-01-convex-problem-local-global.md) |
| $P \succeq 0$ in a QP | the curvature matrix of $\tfrac12 x^\top P x + q^\top x$ — the QP's Hessian | [2.2](lessons/02-02-linear-quadratic-programs.md) |
| $\mathcal{Q}^{n+1}$ | the second-order (Lorentz, ice-cream) cone $\{(x,t): \lVert x\rVert_2 \le t\}$ | [2.3](lessons/02-03-second-order-cone-programs.md) |
| $\langle C, X\rangle$ | matrix inner product $\operatorname{tr}(C^\top X) = \sum_{i,j}C_{ij}X_{ij}$ — linear in $X$ | [2.4](lessons/02-04-semidefinite-programs-conic-ladder.md) |
| $F(x) \succeq 0$ | a **linear matrix inequality**: $F$ affine in $x$, required PSD | [2.4](lessons/02-04-semidefinite-programs-conic-ladder.md) |
| $L(x,\lambda,\nu)$ | the Lagrangian — objective plus one toll per constraint | [3.1](lessons/03-01-lagrangian-dual-function.md) |
| $\lambda_i \ge 0$, $\nu_j$ | prices on inequalities (sign-restricted) and on equalities (free) | [3.1](lessons/03-01-lagrangian-dual-function.md) |
| $g(\lambda,\nu)$, $d^\star$ | the dual function (a lower bound) and the best such bound | [3.1](lessons/03-01-lagrangian-dual-function.md) |
| $\mathcal{A}$ | the achievable set $\{(u,t): \exists x,\ f_1(x)\le u,\ f_0(x)\le t\}$ | [3.2](lessons/03-02-strong-duality-slater.md) |
| $\partial f(x)$ | subdifferential — the **set** of subgradients (a fan of slopes at a kink) | [3.4](lessons/03-04-geometry-of-duality.md) |
| $p^\star(u)$ | perturbation function: optimal value after loosening constraints by $u$ | [3.4](lessons/03-04-geometry-of-duality.md) |
| $m$, $L$, $\kappa = L/m$ | strong-convexity floor, smoothness ceiling, and the condition number | [4.1](lessons/04-01-first-order-methods.md) |
| $t_k$ | step size (learning rate) at iteration $k$ | [4.1](lessons/04-01-first-order-methods.md) |
| $\Delta x_{\mathrm{nt}}$, $\lambda(x)$ | the Newton step, and the Newton decrement (its progress meter) | [4.2](lessons/04-02-newtons-method.md) |
| $\phi(x)$, $t$, $\mu = 1/t$ | log barrier; the barrier parameter ($\to\infty$); the barrier weight ($\to 0^+$) | [4.3](lessons/04-03-barrier-interior-point.md) |
| $\lambda$ in $\lambda\lVert x\rVert$ | the **regularization** knob of ridge/lasso — not a multiplier, though it is one in disguise | [5.1](lessons/05-01-least-squares-lasso.md) |
| $\alpha_i$, $C$, $\xi_i$ | SVM dual multipliers; the violation price; the slacks | [5.2](lessons/05-02-support-vector-machines.md) |
| $\Sigma$, $\mu$, $\gamma$ | return covariance; expected returns; the risk-aversion knob | [5.3](lessons/05-03-portfolio-optimal-control.md) |

**Warning — $\lambda$ is overloaded four ways** in this course: a Lagrange
multiplier ([3.1](lessons/03-01-lagrangian-dual-function.md)), an eigenvalue
($\lambda_{\max}$, [2.4](lessons/02-04-semidefinite-programs-conic-ladder.md)),
the Newton decrement ([4.2](lessons/04-02-newtons-method.md)), and a
regularization weight ([5.1](lessons/05-01-least-squares-lasso.md)). Read the
context before you read the symbol.

## Definitions

### Convex set

No dents: if two points are in, the whole segment between them is in.

$$x, y \in C,\ \theta \in [0,1] \ \Longrightarrow\ \theta x + (1-\theta)y \in C$$

*Introduced:* [1.1](lessons/01-01-convex-sets-separating-hyperplane.md)

### Convex combination

A weighted average with nonnegative weights summing to one — a center of mass.
The **convex hull** $\operatorname{conv} S$ is all of them, i.e. the smallest
convex set containing $S$.

$$\sum_{i=1}^k \theta_i x_i, \qquad \theta_i \ge 0,\ \sum_i \theta_i = 1$$

*Introduced:* [1.1](lessons/01-01-convex-sets-separating-hyperplane.md)

### Separating hyperplane

Two convex sets that don't touch can be split by one flat sheet, each set on its
own side. This one theorem is why duality gives valid bounds, why KKT is
geometry, and what an SVM literally computes.

$$C \cap D = \varnothing,\ C, D \text{ convex} \ \Longrightarrow\ \exists\, a \ne 0,\ b:\quad a^\top x \le b\ \ \forall x \in C, \qquad a^\top x \ge b\ \ \forall x \in D$$

**Strict** separation (with a genuine gap) needs one set **closed** and the other
**compact**; disjointness alone is not enough.

*Introduced:* [1.1](lessons/01-01-convex-sets-separating-hyperplane.md)

### Supporting hyperplane

At any boundary point you can lean a sheet against a convex set: it touches
there and the whole set stays on one side.

$$x_0 \in \partial C \ \Longrightarrow\ \exists\, a \ne 0:\quad a^\top x \le a^\top x_0 \ \ \forall x \in C$$

At a smooth boundary point it is the tangent plane; at a corner there is a whole
fan of valid $a$.

*Introduced:* [1.1](lessons/01-01-convex-sets-separating-hyperplane.md)

### Convex cone

A convex set that also survives nonnegative scaling — a shape with an apex that
flares out forever. The nonnegative orthant, the second-order cone, and the PSD
cone are the three that matter.

$$x, y \in K,\ \theta_1, \theta_2 \ge 0 \ \Longrightarrow\ \theta_1 x + \theta_2 y \in K$$

*Introduced:* [1.2](lessons/01-02-convex-set-zoo-operations.md)

### Polyhedron

The region cut out by finitely many flat walls — an intersection of halfspaces.

$$P = \{x : Ax \preceq b\} = \bigcap_{i=1}^m \{x : a_i^\top x \le b_i\}$$

*Introduced:* [1.2](lessons/01-02-convex-set-zoo-operations.md)

### Convex function

The graph never bulges up between two points: chords lie above it, tangents lie
below it. A bowl.

$$f\big(\theta x + (1-\theta)y\big) \le \theta f(x) + (1-\theta) f(y), \qquad \theta \in [0,1]$$

**Strictly convex** = strict inequality for $x \ne y$, $\theta \in (0,1)$ (no
flat stretches). **Concave** = $-f$ convex. **Affine** functions
$f(x) = a^\top x + b$ are the only ones that are both.

*Introduced:* [1.3](lessons/01-03-convex-functions-epigraph.md)

### Jensen's inequality

Averaging *inside* a convex function beats averaging *outside* it. The finite
form is the definition iterated to $k$ points; the probabilistic form is its
limit.

$$f\Big(\sum_{i=1}^k \theta_i x_i\Big) \le \sum_{i=1}^k \theta_i f(x_i), \qquad\qquad f(\mathbb{E}\,X) \le \mathbb{E}\,f(X)$$

Both flip for concave $f$. Applying it to the convex $-\log$ gives weighted
AM–GM: $\sum_i \theta_i a_i \ge \prod_i a_i^{\theta_i}$.

*Introduced:* [1.3](lessons/01-03-convex-functions-epigraph.md)

### Epigraph

Everything on or above the graph, in one extra height coordinate. It is the
bridge: **a function is convex exactly when this set is convex.**

$$\operatorname{epi} f = \{(x,t) : x \in \operatorname{dom} f,\ f(x) \le t\}$$

*Introduced:* [1.3](lessons/01-03-convex-functions-epigraph.md)

### Sublevel set

The region where $f$ sits below a threshold. Convex $f$ always has convex
sublevel sets — which is exactly why an inequality constraint $f_i(x)\le 0$
carves out a convex feasible region.

$$C_\alpha = \{x \in \operatorname{dom} f : f(x) \le \alpha\}$$

*Introduced:* [1.3](lessons/01-03-convex-functions-epigraph.md), used in [1.4](lessons/01-04-recognizing-convexity.md)

### Quasiconvex

*All* sublevel sets convex — strictly weaker than convex, and the converse of
the sublevel-set fact is false. $\sqrt{\lvert x\rvert}$ has convex sublevel sets
$[-\alpha^2,\alpha^2]$ yet is not convex.

*Introduced:* [1.4](lessons/01-04-recognizing-convexity.md)

### Log-concave

A nonnegative $f$ whose logarithm is concave — the Gaussian density is the
poster child, and it is why maximum-likelihood estimation is so often convex.

$$f(\theta x + (1-\theta)y) \ge f(x)^\theta f(y)^{1-\theta}$$

Closed under products and under marginalization; log-concave $\Rightarrow$
quasiconcave (convex superlevel sets).

*Introduced:* [1.4](lessons/01-04-recognizing-convexity.md)

### Convex optimization problem

Convex objective, convex inequality constraints, **affine** equality constraints
— nothing else counts. It is a property of how the problem is *written*.

$$\min_x\ f_0(x) \quad \text{s.t.}\quad f_i(x) \le 0\ (i=1..m), \quad a_j^\top x = b_j\ (j=1..p)$$

*Introduced:* [2.1](lessons/02-01-convex-problem-local-global.md)

### Second-order cone

The pairs where a budget $t$ covers the length of a vector $x$ — an ice-cream
cone flaring at 45 degrees, whose cross-section at height $t$ is a ball of
radius $t$.

$$\mathcal{Q}^{n+1} = \{(x,t) \in \mathbb{R}^n\times\mathbb{R} : \lVert x\rVert_2 \le t\}$$

*Introduced:* [2.3](lessons/02-03-second-order-cone-programs.md)

### Linear matrix inequality

A matrix that depends *linearly* on your decision variables is required to be
PSD. Its solution set is convex, being the affine preimage of the PSD cone.

$$F(x) = F_0 + \sum_{i=1}^k x_i F_i \ \succeq\ 0$$

*Introduced:* [2.4](lessons/02-04-semidefinite-programs-conic-ladder.md)

### Lagrangian

Replace each hard constraint wall with a toll: objective plus price times
violation, one term per constraint.

$$L(x,\lambda,\nu) = f_0(x) + \sum_{i=1}^m \lambda_i f_i(x) + \sum_{j=1}^p \nu_j h_j(x)$$

*Introduced:* [3.1](lessons/03-01-lagrangian-dual-function.md)

### Dual function

Charge the tolls, then minimize over *all* $x$ with no constraints at all. The
result depends only on the prices — and it is **always concave**, however ugly
the primal, because it is a pointwise infimum of affine functions of
$(\lambda,\nu)$.

$$g(\lambda,\nu) = \inf_{x \in \mathcal{D}} L(x,\lambda,\nu)$$

A value of $-\infty$ is not a bug — it is the honest report that these prices
give no useful floor.

*Introduced:* [3.1](lessons/03-01-lagrangian-dual-function.md)

### Duality gap

The distance from the best lower bound to the truth. Zero gap is **strong
duality**.

$$d^\star = \max_{\lambda \succeq 0,\, \nu} g(\lambda,\nu), \qquad \text{gap} = p^\star - d^\star \ge 0$$

*Introduced:* [3.1](lessons/03-01-lagrangian-dual-function.md), [3.2](lessons/03-02-strong-duality-slater.md)

### Slater's condition

The constraint qualification: for a **convex** problem, exhibit one point that
satisfies every *curved* inequality **strictly** (affine ones need only hold).
That single point closes the duality gap and guarantees the dual optimum is
attained.

$$\exists\, x:\quad f_i(x) < 0 \ \text{ for every nonaffine } f_i, \qquad h_j(x) = 0 \ \forall j$$

Sufficient, **not** necessary: Slater can fail on a problem that still has zero
gap. Failing Slater proves nothing; you must compute $d^\star < p^\star$ to
claim a gap.

*Introduced:* [3.2](lessons/03-02-strong-duality-slater.md)

### Complementary slackness

You only pay for a constraint that binds. Slack constraint $\Rightarrow$ zero
price; positive price $\Rightarrow$ tight constraint.

$$\lambda_i^\star\, f_i(x^\star) = 0 \quad \text{for every } i$$

Read term by term: $\lambda_i^\star > 0 \Rightarrow f_i(x^\star)=0$, and
$f_i(x^\star) < 0 \Rightarrow \lambda_i^\star = 0$. **Both** may be zero at once
(a weakly-active, degenerate constraint); only both being nonzero is forbidden.
This is the corner-solution accounting of consumer theory and the
support-vector dichotomy of [5.2](lessons/05-02-support-vector-machines.md).

*Introduced:* [3.3](lessons/03-03-kkt-conditions.md)

### Subgradient

At a kink there is no tangent, but there is a *fan* of lines that stay below the
graph. Any one of their slopes is a subgradient; the set of them is the
subdifferential $\partial f(x)$, a closed convex set.

$$g \in \partial f(x) \iff f(y) \ge f(x) + g^\top(y-x)\quad \forall y$$

Where $f$ is differentiable, $\partial f(x) = \{\nabla f(x)\}$ — a single point.

*Introduced:* [3.4](lessons/03-04-geometry-of-duality.md)

### Shadow price

A multiplier is the marginal value of a constraint: the rate at which the
optimal value *drops* as you loosen it. Slack constraints are free, which is
complementary slackness read as economics.

$$\lambda_i^\star = -\left.\frac{\partial p^\star}{\partial u_i}\right|_{u=0}, \qquad p^\star(u) = \inf_x\{f_0(x) : f_i(x) \le u_i,\ h_j(x)=0\}$$

Needs strong duality **and** differentiability of $p^\star$ at $0$; without the
latter only the global bound $p^\star(u) \ge p^\star(0) - \lambda^{\star\top}u$
survives.

*Introduced:* [3.4](lessons/03-04-geometry-of-duality.md)

### Condition number

How stretched the valley is. It is a property of $f$, not of your algorithm, and
it alone sets the speed of every first-order method.

$$mI \preceq \nabla^2 f \preceq LI, \qquad \kappa = \frac{L}{m} \ge 1$$

$f$ is **$L$-smooth** if $\nabla f$ is $L$-Lipschitz; **$m$-strongly convex** if
$f(y) \ge f(x) + \nabla f(x)^\top(y-x) + \tfrac{m}{2}\lVert y-x\rVert_2^2$.

*Introduced:* [4.1](lessons/04-01-first-order-methods.md)

### Newton step and Newton decrement

Fit the best paraboloid to $f$ at $x$ and jump to its bottom. The decrement is
the model's own estimate of how far above optimal you still are — and it is
invariant to rescaling the coordinates, which the raw gradient norm is not.

$$\Delta x_{\mathrm{nt}} = -\nabla^2 f(x)^{-1}\nabla f(x), \qquad \lambda(x) = \big(\nabla f(x)^\top \nabla^2 f(x)^{-1}\nabla f(x)\big)^{1/2}$$

$$f(x) - \min_v \hat f(x+v) = \tfrac12 \lambda(x)^2 \quad\Longrightarrow\quad \text{stop when } \tfrac12\lambda(x)^2 \le \varepsilon$$

*Introduced:* [4.2](lessons/04-02-newtons-method.md)

### Self-concordant

The function class on which Newton's "close enough" threshold and constants
become *universal* instead of problem-dependent — which is exactly what makes
interior-point methods provably polynomial.

$$\lvert f'''(x)\rvert \le 2\,f''(x)^{3/2} \quad (\text{scalar; along every line in general})$$

The log barrier $-\sum_i \log x_i$ is self-concordant.

*Introduced:* [4.2](lessons/04-02-newtons-method.md)

### Log barrier and the central path

Replace each hard wall with a smooth wall of infinite height, then retreat it by
cranking $t$. The minimizers trace a curve from the deep interior to the true
optimum.

$$\phi(x) = -\sum_{i=1}^m \log\big(-f_i(x)\big), \qquad x^\star(t) = \operatorname{argmin}_x\ \big[\,t f_0(x) + \phi(x)\,\big]$$

The **analytic center** is $x^\star(0) = \operatorname{argmin}\phi$ — the launch
point, set by the constraint geometry alone before any objective enters.

*Introduced:* [4.3](lessons/04-03-barrier-interior-point.md)

## Formulas and rules

### The convex-set zoo

Memorize these; then assemble with the operations below rather than arguing from
the segment definition.

| Set | Form | Why convex |
|---|---|---|
| halfspace / hyperplane | $\{a^\top x \le b\}$, $\{a^\top x = b\}$ | linearity of $a^\top x$ — the atoms |
| polyhedron | $\{Ax \preceq b,\ Cx = d\}$ | intersection of halfspaces |
| norm ball | $\{\lVert x - c\rVert \le r\}$ | triangle inequality + homogeneity |
| ellipsoid | $\{(x-c)^\top P^{-1}(x-c) \le 1\}$, $P \succ 0$ | affine image $\{c + P^{1/2}u : \lVert u\rVert_2 \le 1\}$ of a ball |
| second-order cone | $\{(x,t): \lVert x\rVert_2 \le t\}$ | triangle inequality; a convex cone |
| PSD cone $\mathbf{S}^n_+$ | $\{X \in \mathbf{S}^n : X \succeq 0\}$ | $\bigcap_z \{X : z^\top X z \ge 0\}$ — infinitely many halfspaces |
| probability simplex | $\{x \succeq 0,\ \mathbf 1^\top x = 1\}$ | orthant $\cap$ hyperplane — a polyhedron |

Shapes of the unit balls in $\mathbb{R}^2$: $\ell_1$ is a **diamond**, $\ell_2$
a **disk**, $\ell_\infty$ a **square**; they nest
$\ell_1 \subseteq \ell_2 \subseteq \ell_\infty$, and the $\ell_1$ and
$\ell_\infty$ balls are polyhedra.

*From* [1.2](lessons/01-02-convex-set-zoo-operations.md)

### Operations that preserve convexity — sets

| Operation | Statement |
|---|---|
| intersection (**any** index set) | $C_\alpha$ convex $\Rightarrow \bigcap_\alpha C_\alpha$ convex |
| affine image | $C$ convex $\Rightarrow \{Ax + b : x \in C\}$ convex |
| affine preimage | $D$ convex $\Rightarrow \{x : Ax + b \in D\}$ convex |
| Minkowski sum | $C + D = \{x + y\}$ convex |
| Cartesian product | $C \times D$ convex |
| perspective $P(x,t) = x/t$, $t>0$ | images and preimages stay convex |
| **union** | ✗ **not** preserved — two disjoint disks are the counterexample |

*From* [1.2](lessons/01-02-convex-set-zoo-operations.md)

### Three (four) tests for a convex function

| Test | Condition | Use it when |
|---|---|---|
| definition | $f(\theta x + (1-\theta)y) \le \theta f(x) + (1-\theta)f(y)$ | small, explicit $f$ |
| epigraph | $\operatorname{epi} f$ is a convex set | you want a set-theoretic argument |
| first-order ($f$ differentiable) | $f(y) \ge f(x) + \nabla f(x)^\top (y-x)$ for all $x,y$ | tangent-as-global-underestimator arguments |
| second-order ($f$ twice differentiable) | $\nabla^2 f(x) \succeq 0$ **everywhere** on an open convex domain | you can compute a Hessian |

$\nabla^2 f \succ 0$ everywhere is *sufficient* but not necessary for strict
convexity ($x^4$ has $f''(0)=0$). The first-order test is why
$\nabla f(x^\star)=0$ certifies a **global** minimum.

*From* [1.3](lessons/01-03-convex-functions-epigraph.md)

### Operations that preserve convexity — functions

**The most useful table on this card.** Certify a monster expression by parsing
it bottom-up; never differentiate if a rule will do.

| Rule | Statement | Mirror for concave |
|---|---|---|
| nonnegative weighted sum | $f_i$ convex, $w_i \ge 0 \Rightarrow \sum_i w_i f_i$ convex | same with $f_i$ concave |
| integrals / expectations | each $f(\cdot,y)$ convex $\Rightarrow \mathbb{E}_y f(x,y)$ convex in $x$ | same |
| affine precomposition | $f$ convex $\Rightarrow f(Ax+b)$ convex | same |
| pointwise max / sup | $f_y$ convex $\Rightarrow \sup_y f_y$ convex | pointwise **min/inf** of concave is concave |
| scalar composition $h\circ g$ | $h$ convex **nondecreasing**, $g$ convex; **or** $h$ convex **nonincreasing**, $g$ concave | flip both |
| vector composition | $h$ convex, and per argument: $h$ nondecreasing with $g_i$ convex, or nonincreasing with $g_i$ concave | flip both |
| partial minimization | $f(x,y)$ jointly convex, $C$ convex $\Rightarrow \inf_{y\in C} f(x,y)$ convex | sup for concave |
| sublevel sets | $f$ convex $\Rightarrow \{f \le \alpha\}$ convex (converse false) | superlevel sets for concave |
| pointwise **min** of convex | ✗ **not** preserved — except in the partial-minimization form above | — |

Monotonicity of $h$ must hold **over the range $g$ actually takes**, not on all
of $\mathbb{R}$. The rules are *sufficient, not necessary*: if one parse stalls,
try another before concluding anything.

Two consequences worth their own line: the epigraph of a pointwise max is the
*intersection* of the epigraphs, and $\operatorname{dist}(x,C) = \inf_{y\in C}\lVert x-y\rVert_2$
is convex by partial minimization.

*From* [1.4](lessons/01-04-recognizing-convexity.md)

### A library of convex functions

The lessons use these on sight without re-deriving them; this table is where
they live.

| Convex on the stated domain | Note |
|---|---|
| $a^\top x + b$ | affine — convex **and** concave |
| $x^p$ on $x>0$, $p \ge 1$ or $p \le 0$; $\lvert x\rvert^p$, $p \ge 1$ | $x^p$ is *concave* for $0 \le p \le 1$ |
| $e^{ax}$ | any $a$ |
| $-\log x$, $x\log x$ on $x > 0$ | $\log x$ itself is **concave** |
| any norm $\lVert x\rVert$ | $\ell_1$, $\ell_2$, $\ell_\infty$ included |
| $\max\{x_1,\dots,x_n\}$ | pointwise max of affine |
| $\mathrm{lse}(x) = \log\sum_i e^{x_i}$ | soft max; $\max_i x_i \le \mathrm{lse}(x) \le \max_i x_i + \log n$ |
| $x^2/y$ on $y > 0$ | quadratic-over-linear |
| $\tfrac12 x^\top P x + q^\top x$ with $P \succeq 0$ | Hessian is exactly $P$ |
| $\lambda_{\max}(X)$ on $\mathbf{S}^n$ | a sup of $z^\top X z$ over unit $z$ |
| $(\prod_i x_i)^{1/n}$ on $x \succ 0$ | **concave** (geometric mean) |
| $\log\det X$ on $X \succ 0$ | **concave** |

The Hessian of log-sum-exp, needed because the composition rules *stall* on it
(log of a convex function is not generally convex):

$$\nabla^2\mathrm{lse}(x) = \operatorname{diag}(z) - zz^\top, \qquad z_i = \frac{e^{x_i}}{\sum_j e^{x_j}}, \qquad v^\top\nabla^2\mathrm{lse}\,v = \operatorname{Var}_z(v) \ge 0$$

*From* [1.3](lessons/01-03-convex-functions-epigraph.md) *and* [1.4](lessons/01-04-recognizing-convexity.md)

### Optimality, and the two reformulations

**Local $\Rightarrow$ global.** For a convex problem every locally optimal point
is globally optimal. Needs **both** halves: convex objective *and* convex
feasible set.

**First-order optimality over a convex set** ($f_0$ convex and differentiable):

$$x^\star \text{ optimal} \iff \nabla f_0(x^\star)^\top (y - x^\star) \ge 0 \quad \forall y \in X$$

*In words:* no feasible direction points downhill. Unconstrained, this collapses
to $\nabla f_0(x^\star) = 0$; on a boundary the gradient generally is **not**
zero, and $-\nabla f_0(x^\star)$ is the normal of a supporting hyperplane to $X$.

| Reformulation | Move | Why |
|---|---|---|
| epigraph form | $\min_{x,t} t$ s.t. $f_0(x) \le t$, $x \in X$ | makes the objective **linear** — required by conic solvers |
| monotone transform | minimize $\varphi\circ f_0$ for $\varphi$ strictly increasing | same optimal set; e.g. $\lVert Ax-b\rVert_2 \to \lVert Ax-b\rVert_2^2$ for smoothness |

*From* [2.1](lessons/02-01-convex-problem-local-global.md)

### The conic ladder

One template every rung: **minimize a linear function subject to linear
equalities and membership in a cone.** Climb only as high as the problem forces.

| Class | Problem | Cone | Canonical instances |
|---|---|---|---|
| LP | $\min c^\top x$ s.t. $Ax \preceq b$, $Cx = d$ | nonnegative orthant | production planning, network flow, LP relaxations |
| QP | $\min \tfrac12 x^\top P x + q^\top x$, $P \succeq 0$, same constraints | orthant | least-squares, ridge, lasso, hard/soft-margin SVM, Markowitz, LQR |
| QCQP | QP plus $\tfrac12 x^\top P_i x + q_i^\top x + r_i \le 0$, $P_i \succeq 0$ | — | quadratic trust regions |
| SOCP | $\min c^\top x$ s.t. $\lVert A_i x + b_i\rVert_2 \le c_i^\top x + d_i$ | $\mathcal{Q}^{k+1}$ | unsquared norms, robust LP, robust portfolios, turnover caps |
| SDP | $\min \langle C,X\rangle$ s.t. $\langle A_i,X\rangle = b_i$, $X \succeq 0$; or $\min c^\top x$ s.t. $F(x)\succeq 0$ | $\mathbf{S}^n_+$ | $\lambda_{\max}$ minimization, Lyapunov certificates, convex relaxations |

$$\text{LP} \subseteq \text{QP} \subseteq \text{QCQP} \subseteq \text{SOCP} \subseteq \text{SDP}$$

The nesting *is* the nesting of the cones: halfspace $\subseteq$ second-order
cone $\subseteq$ PSD cone (the orthant is the PSD **diagonal** matrices).
Higher rungs cost more per iteration — an $n\times n$ LMI carries about $n^2$
variables — so find the **tightest** class that fits.

For an LP: a linear objective over a polyhedron is minimized **at a vertex**,
provided the LP is bounded and the optimum attained. Check the corners.

*From* [2.2](lessons/02-02-linear-quadratic-programs.md), [2.3](lessons/02-03-second-order-cone-programs.md), [2.4](lessons/02-04-semidefinite-programs-conic-ladder.md)

### Modeling moves — how to climb a rung

| Goal | Move |
|---|---|
| nonlinear convex objective $\to$ linear | epigraph: $\min t$ s.t. $f_0(x) \le t$ |
| sum of norms $\sum_j \lVert F_jx - g_j\rVert_2$ | one budget $t_j$ per term: $\min \sum_j t_j$ s.t. $\lVert F_jx-g_j\rVert_2 \le t_j$ |
| least-squares as a QP | $\lVert Ax-b\rVert_2^2$: $P = 2A^\top A \succeq 0$, $q = -2A^\top b$; gradient zero gives the normal equations $A^\top A x = A^\top b$ |
| squared norm $\to$ SOC | $\lVert u\rVert_2^2 \le t \iff \left\lVert \begin{pmatrix} 2u \\ t-1\end{pmatrix}\right\rVert_2 \le t+1$ |
| linear inequality as SOC | $a^\top x \le b$ is $\lVert 0\rVert_2 \le b - a^\top x$ |
| **robust LP** — $a^\top x \le b$ for all $a \in \{\bar a + Pu : \lVert u\rVert_2 \le 1\}$ | one SOC constraint $\ \bar a^\top x + \lVert P^\top x\rVert_2 \le b$ |
| SOC $\to$ LMI (Schur) | $\lVert u\rVert_2 \le t \iff \begin{bmatrix} tI & u \\ u^\top & t\end{bmatrix} \succeq 0$ |
| $\lambda_{\max}$ minimization $\to$ SDP | $\lambda_{\max}(F(x)) \le t \iff tI - F(x) \succeq 0$ |
| $\ell_1$ ball as a polyhedron | $\lVert x\rVert_1 \le t$ is the $2^n$ linear inequalities $\pm x_1 \pm \cdots \pm x_n \le t$ |

**Schur complement lemma** (the elevator that turns a quadratic condition into a
linear one, one dimension up) — for symmetric $A$, $C$ with $C \succ 0$:

$$M = \begin{bmatrix} A & B \\ B^\top & C\end{bmatrix} \succeq 0 \quad\Longleftrightarrow\quad A - BC^{-1}B^\top \succeq 0$$

(By symmetry, if $A \succ 0$ instead: $M \succeq 0 \iff C - B^\top A^{-1}B \succeq 0$.)
The strict pivot $C \succ 0$ is required for the clean "iff"; in modeling,
arrange for the pivot block to be $I$ or a positive scalar.

The key supremum behind the robust move:
$\sup_{\lVert u\rVert_2 \le 1} u^\top v = \lVert v\rVert_2$ (Cauchy–Schwarz,
attained by the unit vector aligned with $v$).

*From* [2.1](lessons/02-01-convex-problem-local-global.md), [2.2](lessons/02-02-linear-quadratic-programs.md), [2.3](lessons/02-03-second-order-cone-programs.md), [2.4](lessons/02-04-semidefinite-programs-conic-ladder.md)

### Duality: weak vs. strong

| | Statement | Holds when | What it buys |
|---|---|---|---|
| dual function | $g(\lambda,\nu) = \inf_x L(x,\lambda,\nu)$ | always | a number depending only on prices |
| concavity of $g$ | $g$ concave on $\mathbb{R}^m\times\mathbb{R}^p$ | **always**, even for a nonconvex primal | the dual problem is always a convex program |
| **weak duality** | $g(\lambda,\nu) \le p^\star$ for all $\lambda \succeq 0$, any $\nu$ | **always**, convex or not | a free certified lower bound from *any* prices |
| the dual problem | $\max_{\lambda \succeq 0,\,\nu} g(\lambda,\nu) = d^\star$ | always convex | the best available bound |
| $d^\star \le p^\star$ | weak duality at the optimum | always | gap $= p^\star - d^\star \ge 0$ |
| **strong duality** | $d^\star = p^\star$ | convex **plus** a constraint qualification (Slater) | the dual *solves* the primal; matching values certify optimality |
| dual attainment | some $(\lambda^\star,\nu^\star)$ achieves $p^\star$ | Slater | KKT multipliers exist |

**Sign convention, and why it matters:** $\lambda \succeq 0$ is mandatory —
a negative price would *reward* violating $f_i \le 0$ and destroy weak duality.
Equality prices $\nu$ are free in sign, because an equality is violated equally
either way.

**What the pieces mean.** $\lambda_i$ = the price of inequality $i$ = its shadow
price; $\nu_j$ = the price of equality $j$; $g(\lambda,\nu)$ = the floor those
prices certify; the gap = how much the floor misses by.

**The geometry.** On the achievable set
$\mathcal{A} = \{(u,t) : \exists x,\ f_1(x) \le u,\ f_0(x) \le t\}$: a multiplier
$\lambda$ names a **nonvertical** hyperplane with normal $(\lambda,1)$, and its
height over $u=0$ is $g(\lambda)$. Weak duality is "the set lies above the
hyperplane." Strong duality is "some nonvertical supporting hyperplane touches
at $(0,p^\star)$ itself" — the *only* failure mode for convex $\mathcal{A}$ is
that every supporting hyperplane there is vertical, which is exactly what
Slater's strictly feasible point forbids.

Because LP constraints are all affine, an LP enjoys strong duality whenever it
is feasible — no wiggle room required.

*From* [3.1](lessons/03-01-lagrangian-dual-function.md), [3.2](lessons/03-02-strong-duality-slater.md), [3.4](lessons/03-04-geometry-of-duality.md)

### KKT conditions

The four-part checklist. For the standard-form problem with differentiable data,
$(x^\star,\lambda^\star,\nu^\star)$ is a **KKT point** if:

$$
\begin{aligned}
&\textbf{(1) Stationarity:} && \nabla f_0(x^\star) + \sum_{i=1}^m \lambda_i^\star \nabla f_i(x^\star) + \sum_{j=1}^p \nu_j^\star \nabla h_j(x^\star) = 0,\\[2pt]
&\textbf{(2) Primal feasibility:} && f_i(x^\star) \le 0\ \ \forall i, \qquad h_j(x^\star) = 0\ \ \forall j,\\[2pt]
&\textbf{(3) Dual feasibility:} && \lambda_i^\star \ge 0\ \ \forall i,\\[2pt]
&\textbf{(4) Complementary slackness:} && \lambda_i^\star f_i(x^\star) = 0\ \ \forall i.
\end{aligned}
$$

*In words:* (1) the objective's pull is balanced by the constraints pushing back
— geometrically, $-\nabla f_0(x^\star)$ lies **inside the cone spanned by the
active constraints' gradients**; (2) you're allowed to be there; (3) prices are
nonnegative; (4) you only pay for what binds. Equality multipliers carry no sign
restriction and no slackness condition.

| Direction | Statement | Hypothesis it needs |
|---|---|---|
| **necessary** | $x^\star$ locally optimal $\Rightarrow$ KKT multipliers exist | differentiable data **and a constraint qualification** — Slater for convex problems, or linear independence of the active constraints' gradients in general |
| **sufficient** | any KKT point of a **convex** problem is a **global** minimizer | convexity ($f_0,\dots,f_m$ convex, $h_j$ affine); no CQ needed for this direction |

Together: **for a convex problem satisfying Slater, KKT is necessary and
sufficient** — solving the KKT system *is* solving the problem, with no
second-order test and no "is this the global one" check.

**How to actually use it:** guess an active set, set the multipliers of the
slack constraints to zero, solve stationarity plus the binding equalities, then
*verify all four conditions*. A guess that produces an infeasible point or a
negative multiplier is rejected — that failed branch is complementary slackness
earning its keep.

*From* [3.3](lessons/03-03-kkt-conditions.md)

### Nonsmooth optimality and subgradient calculus

$$x^\star \text{ minimizes convex } f \quad\Longleftrightarrow\quad 0 \in \partial f(x^\star)$$

*In words:* the flat line fits inside the fan of supporting slopes. This is the
true stationarity condition hiding inside KKT, and it is what makes the lasso
produce exactly-zero coefficients.

| $f$ | $\partial f(x)$ |
|---|---|
| differentiable at $x$ | $\{\nabla f(x)\}$ |
| $\lvert x\rvert$ | $\operatorname{sign}(x)$ for $x \ne 0$; $[-1,1]$ at $x=0$ |
| $\lVert x\rVert_1$ | componentwise: $\operatorname{sign}(x_i)$, or $[-1,1]$ where $x_i = 0$ |
| $\lVert x\rVert_2$ | $x/\lVert x\rVert_2$ for $x \ne 0$; the unit ball at $x = 0$ |
| $\max_k f_k$ | convex hull of $\{\nabla f_k(x) : f_k(x) = \max\}$ — the gradients of the **active** pieces |
| $\sum_i w_i f_i$, $w_i \ge 0$ | $\sum_i w_i \partial f_i(x)$ (setwise sum) |

Example: $\lvert x-1\rvert + \lvert x-2\rvert + \lvert x-4\rvert$ has
$\partial f(2) = (+1) + [-1,1] + (-1) = [-1,1] \ni 0$, so the minimizer is the
**median** — a minimum at a kink, where no derivative is ever zero.

*From* [3.4](lessons/03-04-geometry-of-duality.md)

### Algorithm cheat sheet

| Method | Step | Rate | Cost per step |
|---|---|---|---|
| gradient descent, $f$ convex + $L$-smooth | $x_{k+1} = x_k - t\nabla f(x_k)$ | $f(x_k)-p^\star = O(1/k)$ | $O(n)$ |
| gradient descent, additionally $m$-strongly convex | $t = 1/L$ | **linear**: $f(x_k)-p^\star \le (1-1/\kappa)^k(f(x_0)-p^\star)$; about $\kappa\log(1/\epsilon)$ steps | $O(n)$ |
| gradient descent, optimal fixed step | $t^\star = 2/(m+L)$ | error factor $\dfrac{\kappa-1}{\kappa+1}$ per step | $O(n)$ |
| subgradient method, $f$ nonsmooth $G$-Lipschitz | $x_{k+1} = x_k - t_k g_k$, $g_k \in \partial f(x_k)$ | $f_{\text{best},k} - p^\star = O(RG/\sqrt k)$; about $1/\epsilon^2$ steps | $O(n)$ |
| Newton | $x^+ = x + t\Delta x_{\mathrm{nt}}$ | **quadratic** near $x^\star$: $\lVert x^+ - x^\star\rVert \le c\lVert x - x^\star\rVert^2$ | $O(n^3)$ Hessian solve |
| barrier / interior-point | Newton along the central path | $O(\sqrt m\,\log(1/\epsilon))$ Newton steps | one Newton solve per centering step |

**Step-size rules.** Fixed $t$ is safe for $t \le 1/L$ and *diverges* past
$t = 2/L$. Exact line search: $t_k = \operatorname{argmin}_{t \ge 0} f(x_k - t\nabla f(x_k))$.
**Backtracking (Armijo)**, the practical default with $\alpha \in (0,\tfrac12)$,
$\beta \in (0,1)$: start $t=1$ and shrink $t \leftarrow \beta t$ while

$$f\big(x_k - t\nabla f(x_k)\big) > f(x_k) - \alpha\,t\,\lVert\nabla f(x_k)\rVert_2^2 .$$

**Descent lemma** ($L$-smooth): $f(x - t\nabla f(x)) \le f(x) - t\big(1 - \tfrac{Lt}{2}\big)\lVert\nabla f(x)\rVert_2^2$,
so $t = 1/L$ guarantees a drop of at least $\tfrac{1}{2L}\lVert\nabla f(x)\rVert_2^2$.

**Subgradient method caveats:** it is **not** a descent method (a step can raise
$f$), so track $f_{\text{best},k} = \min_{i \le k} f(x_i)$; and a fixed step
oscillates forever — convergence needs $t_k \to 0$ with $\sum_k t_k = \infty$
(e.g. $t_k = 1/k$).

**Newton's two phases:** a *damped* phase far away (line search picks $t<1$;
each step cuts $f$ by at least a fixed constant, so it ends after boundedly many
steps) and a *pure* phase close in ($t=1$ always accepted, convergence
quadratic). Newton is **affine invariant**: under $x = Ty$ the iterates
correspond exactly and $\lambda(x)$ is unchanged — hence no condition-number
penalty. On a quadratic $f = \tfrac12 x^\top Qx - b^\top x$ with $Q \succ 0$, one
full step lands exactly on $x^\star = Q^{-1}b$ from anywhere, because the model
*is* the function.

*From* [4.1](lessons/04-01-first-order-methods.md), [4.2](lessons/04-02-newtons-method.md), [4.3](lessons/04-03-barrier-interior-point.md)

### Barrier method — the central path and its certificate

Assume strict feasibility (Slater). Read multipliers off the centering
condition:

$$\lambda_i^\star(t) = \frac{1}{-t\,f_i(x^\star(t))} > 0 \quad\Longrightarrow\quad \nabla f_0(x^\star(t)) + \sum_i \lambda_i^\star(t)\nabla f_i(x^\star(t)) = 0$$

That is **exactly KKT stationarity**, with dual feasibility for free. The only
condition relaxed is complementary slackness:

$$-\lambda_i^\star(t)\,f_i(x^\star(t)) = \frac{1}{t} \quad \text{(instead of } 0\text{)}, \qquad\qquad \boxed{\,f_0(x^\star(t)) - p^\star \le \frac{m}{t}\,}$$

So a central-path point is provably within $m/t$ of optimal without knowing
$p^\star$ — for $10^{-6}$ accuracy with $m=100$ constraints, push $t$ to $10^8$.

**The barrier method (SUMT).** From a strictly feasible $x$, a starting $t>0$, a
factor $\gamma > 1$, tolerance $\epsilon$: (1) center — minimize
$t f_0 + \phi$ by Newton, **warm-started at the current $x$**; (2) set
$x := x^\star(t)$; (3) stop if $m/t < \epsilon$; (4) else $t := \gamma t$ and
repeat. **Primal-dual** methods instead run Newton on the perturbed KKT system
in $(x,\lambda)$ jointly, nudging $t$ every iteration — faster, more accurate,
no strictly feasible dual start needed.

*From* [4.3](lessons/04-03-barrier-interior-point.md)

### Regularized least-squares

| Problem | Objective | Solution |
|---|---|---|
| OLS | $\lVert Ax-b\rVert_2^2$ | normal equations $A^\top A x = A^\top b$; unique iff $A$ has full column rank |
| ridge / Tikhonov ($\ell_2$) | $\lVert Ax-b\rVert_2^2 + \lambda\lVert x\rVert_2^2$ | $x = (A^\top A + \lambda I)^{-1}A^\top b$ — always unique, since $A^\top A + \lambda I \succ 0$ for $\lambda > 0$ |
| lasso ($\ell_1$) | $\lVert Ax-b\rVert_2^2 + \lambda\lVert x\rVert_1$ | no closed form (the kink); **sparse** solutions |

Constrained twins: $\lVert x\rVert_2 \le t$ (a ball, an SOC constraint) for
ridge, $\lVert x\rVert_1 \le t$ (a diamond, a polyhedron) for lasso — so the
lasso is even a QP. For each $\lambda$ there is a $t$ giving the same solution,
and $\lambda$ is precisely the **shadow price** of the budget $t$.

On an **orthogonal design** the problems decouple coordinatewise, and the
contrast is exact — round penalties shrink, pointy penalties select:

$$\text{ridge: } x = \frac{c}{1+\lambda} \qquad\qquad \text{lasso (soft-threshold): } x = \operatorname{sign}(c)\max\Big(\lvert c\rvert - \tfrac{\lambda}{2},\ 0\Big)$$

The geometry: least-squares level ellipses grow until they first touch the
constraint ball. The $\ell_2$ disk is smooth so contact is generically off the
axes (nothing is zeroed); the $\ell_1$ diamond has **corners sitting on the
axes**, so contact is generically at a corner — and a corner on an axis means
that coordinate is exactly zero.

*From* [5.1](lessons/05-01-least-squares-lasso.md)

### Support vector machines

$$\text{geometric margin } \gamma = \min_i \frac{y_i(w^\top x_i + b)}{\lVert w\rVert_2}$$

Normalize the scale freedom by setting the closest points' *functional* margin
to $1$; then $\gamma = 1/\lVert w\rVert_2$ and maximizing the margin is
minimizing $\lVert w\rVert_2$.

| Form | Program |
|---|---|
| hard margin (primal) | $\min_{w,b} \tfrac12\lVert w\rVert_2^2$ s.t. $y_i(w^\top x_i + b) \ge 1$ — a convex QP |
| soft margin (primal) | $\min \tfrac12\lVert w\rVert_2^2 + C\sum_i \xi_i$ s.t. $y_i(w^\top x_i+b) \ge 1-\xi_i$, $\xi_i \ge 0$; at the optimum $\xi_i$ is the **hinge loss** $\max\{0, 1-y_i(w^\top x_i+b)\}$ |
| dual | $\max_\alpha \sum_i \alpha_i - \tfrac12\sum_{i,j}\alpha_i\alpha_j y_iy_j\,x_i^\top x_j$ s.t. $0 \le \alpha_i\ (\le C)$, $\sum_i \alpha_i y_i = 0$ |

Stationarity gives the two identities that carry everything:
$w = \sum_i \alpha_i y_i x_i$ and $\sum_i \alpha_i y_i = 0$. The ceiling
$\alpha_i \le C$ appears only in the soft-margin dual.

**Complementary slackness reads off the support vectors:** $\alpha_i = 0$ means
the point sits strictly outside the margin and is ignored; $\alpha_i > 0$ means
$y_i(w^\top x_i + b) = 1$ — the point lies **on** the margin and is a support
vector. Recover the offset from any one of them: $b = y_i - w^\top x_i$.

**The kernel slot:** the dual objective and the prediction
$w^\top x + b = \sum_i \alpha_i y_i (x_i^\top x) + b$ touch the data *only*
through inner products, so replacing $x_i^\top x_j$ by $k(x_i,x_j) = \varphi(x_i)^\top\varphi(x_j)$
trains in a huge feature space without ever forming $\varphi$.

*From* [5.2](lessons/05-02-support-vector-machines.md)

### Portfolios and control

| Problem | Program | Class |
|---|---|---|
| Markowitz, return floor | $\min_x x^\top\Sigma x$ s.t. $\mu^\top x \ge r_{\min}$, $\mathbf 1^\top x = 1$, $x \succeq 0$ | QP |
| Markowitz, risk-aversion form | $\min_x x^\top\Sigma x - \gamma\,\mu^\top x$ s.t. $\mathbf 1^\top x = 1$, $x \succeq 0$ | QP (sweeping $\gamma \ge 0$ traces the same frontier) |
| robust portfolio, $\mu \in \{\bar\mu + Pu : \lVert u\rVert_2 \le 1\}$ | worst-case return $\bar\mu^\top x - \lVert P^\top x\rVert_2 \ge r_{\min}$ | SOCP |
| turnover cap | $\lVert x - x^{\text{old}}\rVert_2 \le \delta$ | SOCP |
| finite-horizon LQR | $\min \sum_{t=0}^{T-1}(x_t^\top Qx_t + u_t^\top Ru_t) + x_T^\top Q_Tx_T$ s.t. $x_{t+1} = Ax_t + Bu_t$ | large sparse equality-constrained QP; its KKT system solved backward in time is the Riccati recursion |
| MPC | re-solve the LQR QP each step over a receding horizon, apply only $u_0$ | a fresh convex QP per time step |

The **efficient frontier** is the trace of optimal (risk, return) pairs as
$r_{\min}$ sweeps; its leftmost tip is the minimum-variance portfolio, and only
the **upper** arc is efficient. Diversification is the cross terms in $\Sigma$:
a blend can be less risky than either asset alone.

*From* [5.3](lessons/05-03-portfolio-optimal-control.md)

## Assumed, not taught here

A Tier 1 course: it leans on the three prereqs continuously and derives none of
the following.

| Fact | Where it's taught |
|---|---|
| PSD / positive definite, $z^\top X z \ge 0$, eigenvalue characterization, definiteness as the second-derivative test | [linalg-refresher 5.1](../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md) |
| Symmetric square root $P^{1/2}$, and quadratic forms as stretched ellipsoids | [linalg-refresher 5.1](../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md), [5.2](../linalg-refresher/lessons/05-02-svd.md) |
| Eigenvalues of a rank-one $uu^\top$ (used to prove $t^2I - uu^\top \succeq 0 \iff t \ge \lVert u\rVert_2$) | [linalg-refresher 3.1](../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md) |
| Inner products, norms, the triangle inequality, Cauchy–Schwarz | [linalg-refresher 4.1](../linalg-refresher/lessons/04-01-inner-products-orthogonality.md) |
| Normal equations and orthogonal projection ($A^\top A x = A^\top b$) | [linalg-refresher 4.2](../linalg-refresher/lessons/04-02-projection-least-squares.md) |
| Gradients, partial derivatives, directional derivatives | [calc-refresher 4.1](../calc-refresher/lessons/04-01-partial-derivatives-and-gradient.md) |
| Hessians, the second-derivative test, and Lagrange multipliers in the equality-only case | [calc-refresher 4.2](../calc-refresher/lessons/04-02-multivariable-optimization-lagrange.md) |
| Second-order Taylor model (the paraboloid Newton fits) and its remainder | [calc-refresher 1.3](../calc-refresher/lessons/01-03-linearization-and-taylor.md), [real-analysis 6.3](../real-analysis/lessons/06-03-taylor-theorem-remainder.md) |
| Infimum vs. minimum — why $p^\star$ exists but need not be attained | [real-analysis 1.2](../real-analysis/lessons/01-02-suprema-infima-completeness.md) |
| Closed, bounded, compact sets — the hypotheses behind *strict* separation | [real-analysis 4.1](../real-analysis/lessons/04-01-open-closed-limit-points.md), [4.2](../real-analysis/lessons/04-02-compactness-heine-borel.md) |
| Why a continuous function attains its min on a compact set (existence of the closest point in the separation proof) | [real-analysis 5.2](../real-analysis/lessons/05-02-continuity-on-compact-sets.md) |
| Lipschitz continuity (the $L$ in "$L$-smooth", the $G$ in "$G$-Lipschitz") | [real-analysis 6.2](../real-analysis/lessons/06-02-mean-value-theorem.md) |
| Linear vs. quadratic rates of convergence for a sequence | [real-analysis 2.1](../real-analysis/lessons/02-01-convergence-epsilon-n.md) |
| Expectation and variance (Jensen's probabilistic form; $\operatorname{Var}_z(v)$ in the log-sum-exp Hessian) | [prob-stat-refresher 2.1](../prob-stat-refresher/lessons/02-01-expectation-variance-moments.md) |
| Covariance matrices — why $\Sigma$ is symmetric PSD, and what its cross terms mean | [prob-stat-refresher 3.1](../prob-stat-refresher/lessons/03-01-joint-distributions-covariance.md) |

## Pitfalls

### Recognizing convexity

- Convex is about the **chord**, not curvature: a triangle and a halfspace are convex despite flat sides and corners; a boomerang isn't despite being all curves. *([1.1](lessons/01-01-convex-sets-separating-hyperplane.md))*
- **Union is never safe** — only intersection is. Two disjoint disks: the segment between them leaves the set. *([1.2](lessons/01-02-convex-set-zoo-operations.md))*
- The image rule needs an **affine** map; the image under a nonlinear map can be anything. And "$\ell_p$ ball" for $p<1$ is a pinched star, not convex — $\ell_p$ isn't a norm there. *([1.2](lessons/01-02-convex-set-zoo-operations.md))*
- Ellipsoids need $P \succ 0$ **strictly**; a singular $P$ degenerates the shape and breaks the $P^{1/2}$ argument. *([1.2](lessons/01-02-convex-set-zoo-operations.md))*
- Convex does **not** mean "has a minimum" — $e^x$ on $\mathbb{R}$ is convex with no minimizer. Convexity says a stationary point *would be* global. *([1.3](lessons/01-03-convex-functions-epigraph.md))*
- The **domain must be convex**, and that is part of the definition: $1/x$ on $x \ne 0$ is not a convex function; on $(0,\infty)$ it is. *([1.3](lessons/01-03-convex-functions-epigraph.md))*
- $\nabla^2 f \succeq 0$ must hold at **every** point, not one; and $\nabla^2 f \succ 0$ is sufficient but not necessary for strict convexity ($x^4$ at $0$). *([1.3](lessons/01-03-convex-functions-epigraph.md))*
- The composition rules are **sufficient, not necessary** — a stalled parse means try another one ($\sqrt{1+x^2}$ is $\lVert(1,x)\rVert_2$, an affine map into a norm). *([1.4](lessons/01-04-recognizing-convexity.md))*
- Check $h$'s monotonicity **over the range $g$ takes**, not on all of $\mathbb{R}$: $g$ convex does not make $g^2$ convex unless $g$ is also nonnegative. *([1.4](lessons/01-04-recognizing-convexity.md))*
- **Max of convex is convex; min is not** (except in the jointly-convex partial-minimization form). And convex sublevel sets only give *quasi*convexity. *([1.4](lessons/01-04-recognizing-convexity.md))*

### Separation and support

- A supporting hyperplane is unique only at **smooth** boundary points; at a corner (a polygon vertex, the cone's apex) there's a whole fan. The theorem promises at least one. *([1.1](lessons/01-01-convex-sets-separating-hyperplane.md))*
- Disjoint + convex gives only **non-strict** separation; strictness needs one set closed and the other compact (a halfplane and a hyperbola branch crowd arbitrarily close). *([1.1](lessons/01-01-convex-sets-separating-hyperplane.md))*

### Problem classes and modeling

- A convex feasible **set** is not a convex **problem**: equalities must be *affine*. $\lVert x\rVert_2^2 - 1 = 0$ has a convex $h$ but a sphere for a solution set. *([2.1](lessons/02-01-convex-problem-local-global.md))*
- "Local $\Rightarrow$ global" needs **both** halves — a convex objective over a nonconvex region can still trap you. *([2.1](lessons/02-01-convex-problem-local-global.md))*
- $p^\star$ always exists as an infimum; $X_{\text{opt}}$ may be **empty** (minimize $e^x$) or a whole flat. *([2.1](lessons/02-01-convex-problem-local-global.md))*
- $\nabla f_0(x^\star) = 0$ is the **unconstrained** rule only; on a boundary use the variational inequality $\nabla f_0(x^\star)^\top(y-x^\star) \ge 0$. *([2.1](lessons/02-01-convex-problem-local-global.md))*
- Only $P \succeq 0$ makes a quadratic objective a convex QP; an indefinite $P$ over a polyhedron is nonconvex and out of scope. *([2.2](lessons/02-02-linear-quadratic-programs.md))*
- The $\tfrac12$ convention is bookkeeping ($P = 2A^\top A$ *with* it) — pick one and stay consistent, because the same $P$ reappears in the KKT and Newton systems. *([2.2](lessons/02-02-linear-quadratic-programs.md))*
- "Optimum at a vertex" holds only when the LP is **bounded and attained**; with a level line parallel to a wall a whole edge is optimal (a vertex of it still works). *([2.2](lessons/02-02-linear-quadratic-programs.md))*
- An SOC constraint is **norm $\le$ affine**, never norm $\le$ norm — $\lVert Ax+b\rVert_2 \le \lVert Cx+d\rVert_2$ is generally nonconvex. *([2.3](lessons/02-03-second-order-cone-programs.md))*
- $\lVert x\rVert_2 \le t$ is *already* an SOC constraint; only the **squared** norm needs the trick. And never re-add "$c_i^\top x + d_i \ge 0$" — the cone encodes it. *([2.3](lessons/02-03-second-order-cone-programs.md))*
- $X \succeq 0$ does **not** mean entrywise nonnegative: $\begin{bmatrix}1 & -2\\ -2 & 5\end{bmatrix}$ is PSD with a negative entry; $\begin{bmatrix}1&2\\2&1\end{bmatrix}$ is all-positive and indefinite. *([2.4](lessons/02-04-semidefinite-programs-conic-ladder.md))*
- The Schur "iff" needs a **strictly** positive-definite pivot block; a singular one demands a generalized inverse and a range condition. *([2.4](lessons/02-04-semidefinite-programs-conic-ladder.md))*
- Don't model at the top of the ladder for its own sake — the same constraint inflated into an LMI is far more expensive than as an SOC. *([2.4](lessons/02-04-semidefinite-programs-conic-ladder.md))*

### Duality and KKT

- Bigger $\lambda$ is not a better bound: $g$ is concave, so overshooting the best price makes the floor **worse**. Maximize $g$; don't crank $\lambda$. *([3.1](lessons/03-01-lagrangian-dual-function.md))*
- $g(\lambda,\nu) = -\infty$ is a legitimate answer — those prices simply certify nothing. *([3.1](lessons/03-01-lagrangian-dual-function.md))*
- Never drop $\lambda \succeq 0$; a negative inequality price rewards violation and destroys weak duality. Equality multipliers *are* free in sign. *([3.1](lessons/03-01-lagrangian-dual-function.md))*
- The inner infimum is over the **domain**, not the feasible set — dropping the constraints is the whole trick. *([3.1](lessons/03-01-lagrangian-dual-function.md))*
- **Convexity alone does not close the gap.** $\min e^{-x}$ s.t. $x^2/y \le 0$ on $y>0$ is convex with a gap of $1$. You need convexity **plus** a constraint qualification. *([3.2](lessons/03-02-strong-duality-slater.md))*
- Slater failing does **not** prove a gap — it is sufficient only. To claim a gap, compute $d^\star < p^\star$. *([3.2](lessons/03-02-strong-duality-slater.md))*
- When checking Slater, only the **nonaffine** inequalities need strict slack; demanding strictness of affine constraints would wrongly disqualify feasible LPs. *([3.2](lessons/03-02-strong-duality-slater.md))*
- Complementary slackness forbids both factors being **nonzero**, not both being zero — a weakly-active constraint has $\lambda_i = 0$ *and* $f_i = 0$. *([3.3](lessons/03-03-kkt-conditions.md))*
- A KKT point is optimal only for a **convex** problem; elsewhere KKT is a filter that also catches maxima and saddles. *([3.3](lessons/03-03-kkt-conditions.md))*
- Convert to standard form ($f_i \le 0$, plus sign in $L$) **before** writing stationarity — a "negative price" is almost always a flipped-sign bookkeeping error. *([3.3](lessons/03-03-kkt-conditions.md))*
- Don't skip the constraint qualification: a genuine optimum at a cusp may admit **no** KKT multipliers at all. *([3.3](lessons/03-03-kkt-conditions.md))*
- A subgradient is an **element of a set**, not "the gradient" — write $g \in \partial f(x)$; the optimality test is $0 \in \partial f(x^\star)$, and insisting on $\nabla f = 0$ misses every $\ell_1$ solution. *([3.4](lessons/03-04-geometry-of-duality.md))*
- Sensitivity $\lambda_i^\star = -\partial p^\star/\partial u_i$ needs strong duality **and** differentiability of $p^\star$; at a kink (a degenerate LP) left and right marginal prices differ. *([3.4](lessons/03-04-geometry-of-duality.md))*

### Algorithms

- Step size lives in $(0, 2/L)$ — past $2/L$ gradient descent **diverges**; $t \le 1/L$ is the safe zone. *([4.1](lessons/04-01-first-order-methods.md))*
- The subgradient method is **not a descent method**: never test convergence with "did $f$ drop," track $f_{\text{best}}$, and never use a fixed step if you want the true optimum. *([4.1](lessons/04-01-first-order-methods.md))*
- $\kappa$ is a property of $f$, not of your algorithm — no step-size rule beats the $\kappa$-dependent rate. Only curvature does. *([4.1](lessons/04-01-first-order-methods.md))*
- The Newton **direction** is always downhill, but its **length** isn't safe far away: $t=1$ is earned only in the pure phase; damp with a line search. *([4.2](lessons/04-02-newtons-method.md))*
- $\lambda(x)$ is not $\lVert\nabla f\rVert$ in disguise — it measures the gradient in the Hessian norm, which is what makes it affine-invariant and a valid stopping test. *([4.2](lessons/04-02-newtons-method.md))*
- Newton isn't strictly better: an $O(n^3)$ solve per step versus $O(n)$ means first-order methods often win on wall-clock at large $n$. And convexity gives only $\nabla^2 f \succeq 0$ — a singular Hessian leaves the step undefined (regularize with $\varepsilon I$). *([4.2](lessons/04-02-newtons-method.md))*
- One giant $t$ fails: $t f_0 + \phi$ becomes wildly ill-conditioned and Newton stalls or steps out of the interior. Ramp $t$ by $\gamma$ and warm-start every centering. *([4.3](lessons/04-03-barrier-interior-point.md))*
- $\phi$ exists only on the **strict interior** — finding a strictly feasible start is a real phase-I sub-problem. And keep the three knobs straight: $t$ (grows), $\mu = 1/t$ (shrinks), $\gamma$ (the multiplier between outer steps). *([4.3](lessons/04-03-barrier-interior-point.md))*

### Applications

- The ridge **penalty** is the squared norm $\lVert x\rVert_2^2$ while the ridge **constraint** is the plain $\lVert x\rVert_2 \le t$ — and never square the $\ell_1$ penalty, or you lose the corners that produce sparsity. *([5.1](lessons/05-01-least-squares-lasso.md))*
- $\lambda$ trades variance for bias; crank it too far and you underfit toward the zero model. Standardize columns first and don't penalize the intercept — both penalties are scale-sensitive. *([5.1](lessons/05-01-least-squares-lasso.md))*
- Ridge always has a unique solution (strictly convex); OLS and lasso need not when $A$ is rank-deficient. *([5.1](lessons/05-01-least-squares-lasso.md))*
- Minimizing $\lVert w\rVert_2$ is *maximizing the margin under the functional-margin-$1$ normalization*; drop the constraints and $w = 0$ is a meaningless "optimum." *([5.2](lessons/05-02-support-vector-machines.md))*
- More support vectors is not a better fit — they are the constraints that **bind**. Many of them signals overlap or a small $C$. And $C$ is yours to fix before solving; $\lVert w\rVert$ is the optimizer's to choose ($C = \infty$ recovers the hard margin). *([5.2](lessons/05-02-support-vector-machines.md))*
- Covariance is $\Sigma \succeq 0$, not $\succ 0$ — a redundant asset makes it singular, so the QP stays convex but the minimizer need not be unique. *([5.3](lessons/05-03-portfolio-optimal-control.md))*
- Only the **upper** arc of the frontier is efficient; minimum-variance is efficient but most of the lower curve is dominated. Robust uncertainty $\lVert P^\top x\rVert_2$ is a different object from return variance $x^\top\Sigma x$. *([5.3](lessons/05-03-portfolio-optimal-control.md))*
- MPC is convex **per step**, and only while every added constraint is convex — a "avoid this region" obstacle breaks it. *([5.3](lessons/05-03-portfolio-optimal-control.md))*
