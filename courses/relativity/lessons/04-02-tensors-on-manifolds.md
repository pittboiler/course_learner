# Relativity (SR + GR) · Lesson 4.2: Tensors on a manifold

> ⏱ ~15 min · Module 4: The geometry of curved spacetime · Builds on: [4.1 Manifolds, coordinates, and tangent spaces](#/lesson/relativity/04-01-manifolds-tangent-spaces.md), [2.3 Tensors and tensor algebra](#/lesson/relativity/02-03-tensors-algebra.md) · Unlocks: 4.3 the metric, proper time, and the line element; 4.4 the covariant derivative

## Why this matters

In Module 2 you built the whole tensor machine on flat Minkowski spacetime, where one global inertial coordinate system covers everything and the metric is the constant matrix $\eta_{\mu\nu}$. General relativity throws that away: spacetime is a curved **manifold** (Lesson [4.1](#/lesson/relativity/04-01-manifolds-tangent-spaces.md)), there is no privileged global frame, and the metric now *varies from point to point* — it becomes the field $g_{\mu\nu}(x)$ that encodes gravity itself. This lesson carries the entire tensor algebra onto that curved stage. Two things change and one thing breaks: the transformation law generalizes (a position-dependent Jacobian replaces the constant Lorentz matrix), the metric becomes a field you raise and lower indices with, and — crucially — the ordinary partial derivative $\partial_\mu$ stops producing tensors. That last failure is the entire reason the next lessons exist.

## The idea

A tensor in flat space was a single object living in one big vector space. On a manifold there is no single vector space — each point $p$ has its *own* tangent space $T_pM$ (its own arena of little arrows), glued smoothly to its neighbors. So a "vector field" is now an assignment of one arrow to every point, and a **tensor field** is an assignment of one tensor to every point. Its components are honest functions of position: $T^{\mu\nu}(x)$, not just a fixed array of numbers.

Everything you learned about tensors — rank, outer products, contraction, symmetry, raising and lowering — still holds, but now **pointwise**: at each point separately, you're doing exactly the Module 2 algebra in that point's tangent space. What's genuinely new is how components transform. In flat space the only "good" coordinate changes were the linear Lorentz boosts $\Lambda^\mu{}_\nu$ — the *same* matrix everywhere. On a manifold you're allowed *any* smooth relabelling of coordinates $x \to x'(x)$ (curvilinear, wiggly, whatever), so the transformation matrix is the **Jacobian** $\partial x'^\mu/\partial x^\alpha$ — and it's different at every point. A tensor is still "a thing whose components transform by the (now local) Jacobian in each slot."

One geometric fact will pay off for the rest of the course: **at any single point you can always choose coordinates that make $g_{\mu\nu} = \eta_{\mu\nu}$ with all first derivatives $\partial_\lambda g_{\mu\nu} = 0$.** Zoom in far enough and curved spacetime looks flat — a *local inertial frame*. That's the mathematical seed of the equivalence principle ([5.1](#/lesson/relativity/05-01-equivalence-principle.md)).

## The formal version

**Signature.** For spacetime keep $(-,+,+,+)$, so flat space has $\eta_{\mu\nu}=\mathrm{diag}(-1,1,1,1)$; Greek indices run $0,1,2,3$. Two examples below live on ordinary curved *surfaces* (the plane, the 2-sphere) — those are Riemannian, so their metric is positive-definite (all $+$); the index machinery is identical.

**Tensor fields.** A $(p,q)$ **tensor field** assigns to each point $x$ a tensor with $p$ upper (contravariant) and $q$ lower (covariant) slots, with components
$$T^{\mu_1\cdots\mu_p}{}_{\nu_1\cdots\nu_q}(x),$$
now functions of position. In words: the same kind of object as in flat space, but re-specified at every point of the manifold.

**The general transformation law.** Under a smooth coordinate change $x \to x'(x)$, each upper index picks up a factor $\partial x'/\partial x$ and each lower index a factor $\partial x/\partial x'$:
$$T'^{\,\mu_1\cdots\mu_p}{}_{\nu_1\cdots\nu_q}
= \frac{\partial x'^{\mu_1}}{\partial x^{\alpha_1}}\cdots\frac{\partial x'^{\mu_p}}{\partial x^{\alpha_p}}\;
\frac{\partial x^{\beta_1}}{\partial x'^{\nu_1}}\cdots\frac{\partial x^{\beta_q}}{\partial x'^{\nu_q}}\;
T^{\alpha_1\cdots\alpha_p}{}_{\beta_1\cdots\beta_q}.$$
In words: this is the Module 2 rule with the constant Lorentz matrix $\Lambda^\mu{}_\nu$ replaced by the local Jacobian $\dfrac{\partial x'^\mu}{\partial x^\alpha}$ and its inverse $\dfrac{\partial x^\beta}{\partial x'^\nu}$ — which now *vary from point to point*. The two clean special cases:
$$V'^{\mu} = \frac{\partial x'^{\mu}}{\partial x^{\alpha}}\,V^{\alpha}
\qquad\text{(vector, upper index)},\qquad
\omega'_{\mu} = \frac{\partial x^{\alpha}}{\partial x'^{\mu}}\,\omega_{\alpha}
\qquad\text{(covector, lower index)}.$$
(For a linear change these Jacobians are constant matrices — set them to $\Lambda$ and you recover [2.3](#/lesson/relativity/02-03-tensors-algebra.md) exactly.)

**Two viewpoints, kept concrete.** The list of numbers $T^{\mu\nu}(x)$ is the tensor's **components in a coordinate basis**; the geometric object — the actual multilinear map on tangent spaces — is basis-independent. Components change under the Jacobian; the object doesn't. We work almost entirely with components (physicist's-pragmatic), but "is this a tensor?" *always means* "do its components obey the law above?"

**The metric as a tensor field.** The central object of GR is the **metric** $g_{\mu\nu}(x)$: a symmetric $(0,2)$ tensor field that supplies the dot product in each tangent space. It transforms as a two-lower-index tensor,
$$g'_{\mu\nu} = \frac{\partial x^{\alpha}}{\partial x'^{\mu}}\frac{\partial x^{\beta}}{\partial x'^{\nu}}\,g_{\alpha\beta},$$
and reduces to $\eta_{\mu\nu}$ **locally** — at any chosen point you can pick coordinates with $g_{\mu\nu}=\eta_{\mu\nu}$ and $\partial_\lambda g_{\mu\nu}=0$ there.

**Index gymnastics with $g$.** Define the **inverse metric** $g^{\mu\nu}$ (a $(2,0)$ tensor field) by
$$g^{\mu\alpha}g_{\alpha\nu} = \delta^{\mu}{}_{\nu}.$$
In words: $g^{\mu\nu}$ is the matrix inverse of $g_{\mu\nu}$ at each point. Then raising and lowering work exactly as before, but with the *field* $g$ instead of the constant $\eta$:
$$V_{\mu} = g_{\mu\nu}V^{\nu}, \qquad V^{\mu} = g^{\mu\nu}V_{\nu}.$$
Contraction, symmetry, and the quotient theorem from [2.3](#/lesson/relativity/02-03-tensors-algebra.md) all carry over unchanged, pointwise.

**Why $\partial_\mu$ is not a tensor (the crack).** Differentiate a vector's transformation law. Using $\partial'_\mu = \dfrac{\partial x^\alpha}{\partial x'^\mu}\partial_\alpha$ and the product rule,
$$\partial'_\mu V'^{\nu}
= \frac{\partial x^{\alpha}}{\partial x'^{\mu}}\frac{\partial x'^{\nu}}{\partial x^{\beta}}\,\partial_\alpha V^{\beta}
\;+\; \frac{\partial x^{\alpha}}{\partial x'^{\mu}}\,\frac{\partial^{2} x'^{\nu}}{\partial x^{\alpha}\partial x^{\beta}}\,V^{\beta}.$$
In words: the **first** term is exactly the $(1,1)$-tensor transformation of $\partial_\alpha V^\beta$ — good. The **second** term, carrying the *second derivative* of the coordinate map, is pure garbage: a genuine tensor would have no such term. In flat space with linear Lorentz changes, $\partial^2 x'/\partial x\,\partial x = 0$ and the garbage vanishes — which is why Module 2 never worried. On a manifold, general coordinate changes are nonlinear, that term survives, and $\partial_\mu V^\nu$ **fails to be a tensor**. Fixing this — adding a correction that eats the garbage term — is precisely the job of the covariant derivative $\nabla_\mu$ in [4.4](#/lesson/relativity/04-04-covariant-derivative-christoffel.md).

## Concrete instance

Take the ordinary **flat plane**, but in **polar coordinates** $(r,\theta)$ — the cleanest way to see a metric that is a *field*. From $x=r\cos\theta,\ y=r\sin\theta$, the flat line element $ds^2=dx^2+dy^2$ becomes
$$ds^2 = dr^2 + r^2\,d\theta^2 \quad\Longrightarrow\quad
g_{\mu\nu} = \begin{pmatrix} 1 & 0 \\ 0 & r^2 \end{pmatrix},\qquad
g^{\mu\nu} = \begin{pmatrix} 1 & 0 \\ 0 & 1/r^2 \end{pmatrix},$$
ordering coordinates $(r,\theta)$. Check the inverse: $g^{rr}g_{rr}=1\cdot1=1$ and $g^{\theta\theta}g_{\theta\theta}=(1/r^2)(r^2)=1$, off-diagonals zero, so $g^{\mu\alpha}g_{\alpha\nu}=\delta^\mu{}_\nu$. ✓

Lower a vector $V^\mu=(V^r,V^\theta)$:
$$V_r = g_{rr}V^r = V^r,\qquad V_\theta = g_{\theta\theta}V^\theta = r^2 V^\theta.$$
The $\theta$-component gets an $r^2$ — the metric is doing the geometric bookkeeping that a "$d\theta$ of angle" is a bigger arc the farther out you are. **The punchline:** $g_{\mu\nu}$ here depends on position ($r$) even though the plane is perfectly flat. *Position-dependence of the metric is not curvature* — it can be pure coordinate choice. (Distinguishing the two is what the Riemann tensor in [4.6](#/lesson/relativity/04-06-riemann-geodesic-deviation.md) is for.) The genuinely curved case — the 2-sphere, where no coordinate change can flatten $g$ — is the problem set below.

## Worked examples

**Example 1 (mechanical — an invariant scalar is coordinate-proof).** In the polar plane above, take the position-radial field $V^\mu=(1,0)$ (a unit outward arrow). Its squared length must be a scalar — same number in any coordinates. Compute it with the metric:
$$V\cdot V = g_{\mu\nu}V^\mu V^\nu = g_{rr}(1)^2 + g_{\theta\theta}(0)^2 = 1.$$
Now the same arrow in Cartesian components is $V^\mu=(\cos\theta,\sin\theta)$ (a unit vector pointing outward), and $g_{\mu\nu}=\delta_{\mu\nu}$ there, so $V\cdot V = \cos^2\theta+\sin^2\theta = 1$. Same scalar, as required — the metric compensated exactly for the coordinate change. **The metric is what makes lengths coordinate-independent.**

**Example 2 (why you'd care — local flatness at a point).** Suppose near some point $g_{\mu\nu}(x)$ is messy. Expand it about that point $x_0$: $g_{\mu\nu}(x)=g_{\mu\nu}(x_0)+\partial_\lambda g_{\mu\nu}(x_0)\,(x-x_0)^\lambda+\cdots$. A linear coordinate shift can diagonalize and rescale $g_{\mu\nu}(x_0)$ to $\eta_{\mu\nu}$ (it's a symmetric matrix — this is the [spectral / Sylvester](#/lesson/linalg-refresher/05-01-spectral-theorem-quadratic-forms.md) fact that any nondegenerate symmetric form is $\pm1$'s in a suitable basis). A further quadratic coordinate adjustment kills the first-derivative terms $\partial_\lambda g_{\mu\nu}(x_0)$. What you *cannot* remove is the second derivatives — those are the true curvature. So at any point there exist coordinates with
$$g_{\mu\nu}(x_0)=\eta_{\mu\nu},\qquad \partial_\lambda g_{\mu\nu}(x_0)=0,$$
a **local inertial frame**: an observer there sees special relativity hold exactly, gravity gone, to first order. That's the equivalence principle in coordinates, and it's why SR is the local truth inside GR.

## Watch out

- You might think a metric that depends on position means the space is curved. **No** — the flat plane in polar coordinates has $g_{\theta\theta}=r^2$, position-dependent yet zero curvature. Curvature lives in what you *can't* transform away (the second derivatives of $g$), not in whether $g$ looks constant.
- You might think $\partial_\mu V^\nu = 0$ in one coordinate system means the field is "constant" everywhere. It doesn't survive a coordinate change: because $\partial_\mu V^\nu$ isn't a tensor, it can be zero in one chart and nonzero in another (P3). "Genuinely constant along the manifold" needs the covariant derivative, not $\partial$.
- You might mix up which Jacobian goes on which index. Upper (contravariant) indices transform with $\partial x'/\partial x$; lower (covariant) indices with the *inverse* $\partial x/\partial x'$. Mnemonic: **co**variant = **co**-goes-with-the-basis, and basis vectors $\partial_\mu$ (from [4.1](#/lesson/relativity/04-01-manifolds-tangent-spaces.md)) transform oppositely to components.
- You might forget $g$ and $g^{-1}$ are *fields*. When you raise an index inside a derivative or across points, $g^{\mu\nu}(x)$ carries its own position dependence — it is not a constant matrix you can slide past a $\partial$.

## One-liner

> A tensor field is the Module 2 algebra done pointwise, with the constant Lorentz matrix upgraded to a position-varying Jacobian and $\eta$ upgraded to the field $g_{\mu\nu}(x)$ — and the price of curvilinearity is that plain $\partial_\mu$ no longer makes tensors.

## Problems

**P1 (🟢)** For the **2-sphere** of radius $a$ with line element $ds^2 = a^2\big(d\theta^2 + \sin^2\theta\,d\phi^2\big)$ and coordinates $(\theta,\phi)$: write the metric components $g_{\mu\nu}$ and the inverse metric $g^{\mu\nu}$, then lower the index of the vector $V^\mu=(1,1)$ to get $V_\mu$.

**P2 (🟡)** For the same 2-sphere metric, verify explicitly that $g^{\mu\alpha}g_{\alpha\nu}=\delta^{\mu}{}_{\nu}$ — check every one of the four $(\mu,\nu)$ combinations, including that the off-diagonal ones vanish.

**P3 (🔴, optional)** Show that $\partial_\mu V^\nu$ does not transform as a tensor, by exhibiting a field whose components' derivative is zero in one coordinate system but nonzero in another. Take the constant Cartesian field $V^x=1,\ V^y=0$ on the plane (so $\partial_a V^b=0$ in Cartesian) and transform to polar $(r,\theta)$. Compute the polar components $V^r,V^\theta$ and then $\partial_\theta V^r$, and explain why a nonzero answer proves $\partial_\mu V^\nu$ is not a tensor. Identify which term in the general derivative law is responsible.

<details>
<summary>Solutions</summary>

**P1** Read the metric straight off the line element $ds^2=g_{\mu\nu}\,dx^\mu dx^\nu$ (coordinates $(\theta,\phi)$):
$$g_{\mu\nu} = \begin{pmatrix} a^2 & 0 \\ 0 & a^2\sin^2\theta \end{pmatrix}.$$
It's diagonal, so the inverse is the reciprocal of each diagonal entry:
$$g^{\mu\nu} = \begin{pmatrix} 1/a^2 & 0 \\ 0 & 1/(a^2\sin^2\theta) \end{pmatrix}.$$
Lower $V^\mu=(1,1)$ with $V_\mu=g_{\mu\nu}V^\nu$:
$$V_\theta = g_{\theta\theta}V^\theta = a^2\cdot 1 = a^2,\qquad
V_\phi = g_{\phi\phi}V^\phi = a^2\sin^2\theta\cdot 1 = a^2\sin^2\theta.$$
So $V_\mu = (a^2,\ a^2\sin^2\theta)$. (Note it's now position-dependent through $\theta$ even though $V^\mu$ was constant — lowering with a field metric injects position dependence.)

**P2** Both matrices are diagonal, so $g^{\mu\alpha}g_{\alpha\nu}=\sum_\alpha g^{\mu\alpha}g_{\alpha\nu}$ only gets a contribution when $\alpha=\mu=\nu$.
- $(\mu,\nu)=(\theta,\theta)$: $g^{\theta\theta}g_{\theta\theta} = \dfrac{1}{a^2}\cdot a^2 = 1 = \delta^\theta{}_\theta.$ ✓
- $(\mu,\nu)=(\phi,\phi)$: $g^{\phi\phi}g_{\phi\phi} = \dfrac{1}{a^2\sin^2\theta}\cdot a^2\sin^2\theta = 1 = \delta^\phi{}_\phi.$ ✓
- $(\mu,\nu)=(\theta,\phi)$: $g^{\theta\alpha}g_{\alpha\phi}$. The only nonzero $g^{\theta\alpha}$ is $\alpha=\theta$, but $g_{\theta\phi}=0$, so the sum is $0 = \delta^\theta{}_\phi.$ ✓
- $(\mu,\nu)=(\phi,\theta)$: symmetric argument, $g^{\phi\phi}g_{\phi\theta}=g^{\phi\phi}\cdot 0 = 0 = \delta^\phi{}_\theta.$ ✓

All four entries give $\delta^\mu{}_\nu$, confirming $g^{\mu\nu}$ is the inverse. (For a diagonal metric this is just "inverse = reciprocal diagonal"; for a general metric you'd invert the full matrix, but the defining relation $g^{\mu\alpha}g_{\alpha\nu}=\delta^\mu{}_\nu$ is the same.)

**P3** In Cartesian $(x,y)$ the field is $V^x=1,\ V^y=0$ everywhere, so obviously $\partial_a V^b=0$ for all components — the array of derivatives is the zero tensor *in this chart*.

Transform to polar $(r,\theta)$ with the vector law $V'^\mu=\dfrac{\partial x'^\mu}{\partial x^a}V^a$, where $x'=(r,\theta)$, $x=(x,y)$. Using $r=\sqrt{x^2+y^2},\ \theta=\arctan(y/x)$:
$$V^r = \frac{\partial r}{\partial x}V^x + \frac{\partial r}{\partial y}V^y = \frac{x}{r}\cdot 1 = \cos\theta,$$
$$V^\theta = \frac{\partial \theta}{\partial x}V^x + \frac{\partial \theta}{\partial y}V^y = \frac{-y}{r^2}\cdot 1 = -\frac{\sin\theta}{r}.$$
(using $x=r\cos\theta,\ y=r\sin\theta$.) So in polar coordinates the components are position-dependent:
$$V^r=\cos\theta,\qquad V^\theta=-\frac{\sin\theta}{r}.$$
Now differentiate:
$$\partial_\theta V^r = \frac{\partial}{\partial\theta}(\cos\theta) = -\sin\theta \neq 0.$$
Here is the contradiction: if $\partial_\mu V^\nu$ were a genuine tensor and it vanished in Cartesian coordinates, it would have to vanish in **every** coordinate system (a tensor that is zero in one basis is zero in all). But it's nonzero in polar. Therefore $\partial_\mu V^\nu$ is **not a tensor**.

The culprit is the second, non-tensorial term of the general law,
$$\partial'_\mu V'^{\nu}
= \underbrace{\frac{\partial x^{\alpha}}{\partial x'^{\mu}}\frac{\partial x'^{\nu}}{\partial x^{\beta}}\,\partial_\alpha V^{\beta}}_{\text{tensor part} \,=\, 0\text{ here}}
+ \underbrace{\frac{\partial x^{\alpha}}{\partial x'^{\mu}}\,\frac{\partial^{2} x'^{\nu}}{\partial x^{\alpha}\partial x^{\beta}}\,V^{\beta}}_{\text{spoiler}}.$$
Since $\partial_\alpha V^\beta=0$ in Cartesian, the entire polar derivative *is* the spoiler term — the one built from $\partial^2 x'/\partial x\,\partial x$, which is nonzero because the Cartesian→polar map is nonlinear. The covariant derivative of [4.4](#/lesson/relativity/04-04-covariant-derivative-christoffel.md) adds a Christoffel term engineered to cancel exactly this piece, so that $\nabla_\mu V^\nu$ *does* vanish in both charts (as a constant field should).

</details>

## Flashback

**From Lesson 4.1 (Manifolds, coordinates, and tangent spaces):** On the plane, tangent vectors are directional-derivative operators, and the coordinate basis in $(x,y)$ is $\{\partial_x,\partial_y\}$. Using $x=r\cos\theta,\ y=r\sin\theta$, express the polar coordinate basis vector $\partial_\theta$ (i.e. $\partial/\partial\theta$) in terms of $\partial_x$ and $\partial_y$. Which Jacobian — $\partial x/\partial x'$ or $\partial x'/\partial x$ — did you use, and how does that compare to how vector *components* transform?

<details>
<summary>Solution</summary>

Basis vectors transform by the chain rule for the derivation operators:
$$\partial_\theta = \frac{\partial x}{\partial\theta}\,\partial_x + \frac{\partial y}{\partial\theta}\,\partial_y.$$
With $x=r\cos\theta,\ y=r\sin\theta$: $\ \partial x/\partial\theta=-r\sin\theta,\ \partial y/\partial\theta=r\cos\theta$, so
$$\partial_\theta = -r\sin\theta\,\partial_x + r\cos\theta\,\partial_y.$$
(This is the rotation-generator vector field — it points along circles of constant $r$, growing with $r$.)

The factors are $\partial x^a/\partial x'^\mu$ — the **inverse** Jacobian, the same one that transforms *covariant* (lower) components $\omega'_\mu = (\partial x^a/\partial x'^\mu)\,\omega_a$. Basis vectors and contravariant components transform **oppositely**: components use $\partial x'^\mu/\partial x^a$, basis vectors use $\partial x^a/\partial x'^\mu$. That opposition is exactly what makes the object $V=V^\mu\partial_\mu$ coordinate-independent — the two Jacobians cancel — which is the geometric reason "vector" and "component list" are not the same thing.

</details>

## Connections

- **Backward:** this is [2.3](#/lesson/relativity/02-03-tensors-algebra.md)'s flat-space tensor algebra done pointwise — every rule (contraction, symmetry, quotient theorem) survives, with the constant $\Lambda^\mu{}_\nu$ and $\eta_{\mu\nu}$ upgraded to the local Jacobian and the field $g_{\mu\nu}(x)$. The tangent spaces the fields live in are [4.1](#/lesson/relativity/04-01-manifolds-tangent-spaces.md)'s.
- **Forward:** [4.3](#/lesson/relativity/04-03-metric-proper-time.md) reads the physics out of $g_{\mu\nu}$ (line element, proper time). The failure of $\partial_\mu$ shown here is the exact problem [4.4](#/lesson/relativity/04-04-covariant-derivative-christoffel.md) solves with the covariant derivative and Christoffel symbols, and "position-dependent $g$ vs. real curvature" is settled by the Riemann tensor in [4.6](#/lesson/relativity/04-06-riemann-geodesic-deviation.md). Local flatness (Example 2) is the mathematical core of the equivalence principle in [5.1](#/lesson/relativity/05-01-equivalence-principle.md).
- **Sideways (linear algebra):** the Jacobian transformation is [change of basis](#/lesson/linalg-refresher/02-01-matrices-as-linear-maps.md) made local — one linear map per point. The metric as a symmetric bilinear form that measures lengths is the [inner-product / quadratic-form](#/lesson/linalg-refresher/05-01-spectral-theorem-quadratic-forms.md) structure from linear algebra, now varying over the manifold; reducing $g$ to $\eta$ at a point is Sylvester's law of inertia.
