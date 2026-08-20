# Differential Geometry · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Differential geometry is one long answer to "how do you do calculus on a space
that isn't flat and isn't sitting inside anything?" Module 1 does it where you can
still draw it (curves and surfaces in space); Modules 2–3 rebuild it with no
ambient space (manifolds, tensors, forms); Modules 4–5 add a way to differentiate
and a way to measure (connection and metric), which together produce curvature.
This card is the lookup surface for the notation — which is heavy — plus the
curvature zoo, the standard model surfaces, and the sign conventions this course
commits to.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\gamma(s)$, $\lvert\gamma'(s)\rvert = 1$ | a curve parametrized by **arc length** — the observer rides at unit speed | [1.1](lessons/01-01-curves-arclength-frenet.md) |
| $T, N, B$ | unit tangent, principal normal (points into the turn), binormal $T\times N$ | [1.1](lessons/01-01-curves-arclength-frenet.md) |
| $\kappa$, $\tau$ | curvature (how fast $T$ swings) and torsion (how fast the curve leaves its plane) | [1.1](lessons/01-01-curves-arclength-frenet.md) |
| $\mathbf{x}(u,v)$, $\mathbf{x}_u,\mathbf{x}_v$ | a surface parametrization and its coordinate velocity vectors, which span $T_pS$ | [1.2](lessons/01-02-surfaces-first-fundamental-form.md) |
| $\mathrm{I}$, $E, F, G$ | first fundamental form (the surface's built-in ruler) and its three coefficients | [1.2](lessons/01-02-surfaces-first-fundamental-form.md) |
| $ds^2$ | the line element — squared length of an infinitesimal coordinate step | [1.2](lessons/01-02-surfaces-first-fundamental-form.md) |
| $\mathrm{II}$, $e, f, g$ | second fundamental form (how the surface bends in space) and its coefficients | [1.3](lessons/01-03-gauss-map-second-fundamental-form.md) |
| $N: S \to S^2$ | the Gauss map — send each point to its unit normal, read as a point of the sphere | [1.3](lessons/01-03-gauss-map-second-fundamental-form.md) |
| $S_p = -dN_p$ | shape operator (Weingarten map): how the normal tilts per unit motion | [1.3](lessons/01-03-gauss-map-second-fundamental-form.md) |
| $k_1, k_2$, $k_n$ | principal curvatures (eigenvalues of $S_p$) and normal curvature in a chosen direction | [1.3](lessons/01-03-gauss-map-second-fundamental-form.md) |
| $K$, $H$ | Gaussian curvature $k_1k_2$ (intrinsic) and mean curvature $\tfrac12(k_1+k_2)$ (extrinsic) | [1.4](lessons/01-04-gaussian-curvature-theorema-egregium.md) |
| $(U, \varphi)$ | a **chart**: an open patch of $M$ plus a homeomorphism to an open set of $\mathbb{R}^n$ | [2.1](lessons/02-01-charts-atlases-smooth-manifolds.md) |
| $\psi\circ\varphi^{-1}$ | the **transition map** — translating one chart's coordinates into another's | [2.1](lessons/02-01-charts-atlases-smooth-manifolds.md) |
| $\hat F = \psi\circ F\circ\varphi^{-1}$ | the coordinate representative of a map between manifolds | [2.2](lessons/02-02-smooth-maps-diffeomorphisms.md) |
| $T_pM$ | tangent space at $p$: the $n$-dimensional space of directions-as-derivations | [2.3](lessons/02-03-tangent-space.md) |
| $\partial/\partial x^i$, $\partial_i$ | the coordinate basis of $T_pM$ — differentiate in $x^i$, hold the other coordinates | [2.3](lessons/02-03-tangent-space.md) |
| $v = v^i\partial_i$ | a tangent vector and its **components** (upper index) | [2.3](lessons/02-03-tangent-space.md) |
| $X, Y$; $Xf$ | vector fields (a direction at every point); $X$ differentiating a function | [2.4](lessons/02-04-vector-fields-pushforward.md) |
| $dF_p$ | **pushforward** / differential: carries a vector at $p$ to one at $F(p)$; the Jacobian | [2.4](lessons/02-04-vector-fields-pushforward.md) |
| $\theta_t$ | the flow of a vector field — slide the manifold along $X$ for time $t$ | [2.4](lessons/02-04-vector-fields-pushforward.md) |
| $[X, Y]$ | Lie bracket: the failure of two flows to commute, $XY - YX$ | [2.4](lessons/02-04-vector-fields-pushforward.md) |
| $T_p^*M$, $\omega = \omega_i\,dx^i$ | cotangent space and a covector, with **lower**-index components | [2.5](lessons/02-05-covectors-cotangent-space.md) |
| $dx^i$ | the dual basis: $dx^i(\partial_j) = \delta^i_j$ — it picks off the $i$-th component | [2.5](lessons/02-05-covectors-cotangent-space.md) |
| $df$ | the differential of a function — a covector, not a vector | [2.5](lessons/02-05-covectors-cotangent-space.md) |
| $\delta^i_j$ | Kronecker delta: $1$ if $i = j$, else $0$; the identity $(1,1)$-tensor | [2.5](lessons/02-05-covectors-cotangent-space.md) |
| $(k, l)$-tensor | $k$ covector-slots (upper indices), $l$ vector-slots (lower indices) | [3.1](lessons/03-01-tensors-multilinear-maps.md) |
| $\otimes$ | tensor product — juxtapose slots | [3.1](lessons/03-01-tensors-multilinear-maps.md) |
| $\wedge$, $\Lambda^p$, $\Omega^p(M)$ | wedge product; $p$-forms at a point; differential $p$-forms on $M$ | [3.2](lessons/03-02-differential-forms-wedge-product.md) |
| $d$ | exterior derivative: a $p$-form in, a $(p+1)$-form out | [3.3](lessons/03-03-exterior-derivative.md) |
| $\Phi^*\omega$ | **pullback** of a form through $\Phi$ (forms go backwards; vectors go forwards) | [3.4](lessons/03-04-integration-on-manifolds.md) |
| $\partial M$ | the boundary of a manifold-with-boundary, carrying the induced orientation | [3.5](lessons/03-05-generalized-stokes-theorem.md) |
| $\nabla$, $\nabla_X Y$ | connection / covariant derivative of $Y$ along $X$ | [4.1](lessons/04-01-covariant-derivative-christoffel.md) |
| $\Gamma^k_{ij}$ | Christoffel symbols: how basis vectors turn. **Not** a tensor | [4.1](lessons/04-01-covariant-derivative-christoffel.md) |
| $D V/dt$ | covariant derivative along a curve, $\nabla_{\dot\gamma}V$ | [4.2](lessons/04-02-parallel-transport.md) |
| $\exp_p(v)$ | exponential map: shoot a geodesic from $p$ with velocity $v$, walk unit time | [4.3](lessons/04-03-geodesics.md) |
| $R^\rho{}_{\sigma\mu\nu}$ | Riemann curvature tensor (the staggered indices matter — see conventions) | [4.4](lessons/04-04-riemann-curvature-tensor.md) |
| $R_{\mu\nu}$, $R$, $G_{\mu\nu}$ | Ricci tensor, scalar curvature, Einstein tensor | [4.5](lessons/04-05-ricci-scalar-curvature.md) |
| $\xi^\mu$ (separation), $u^\mu$ | geodesic-deviation separation vector and the geodesic tangent | [4.5](lessons/04-05-ricci-scalar-curvature.md) |
| $g_{\mu\nu}$, $g^{\mu\nu}$ | metric tensor and its matrix inverse ($g^{\mu\lambda}g_{\lambda\nu} = \delta^\mu_\nu$) | [5.1](lessons/05-01-riemannian-lorentzian-metrics.md) |
| $\eta_{\mu\nu}$ | the Minkowski metric $\operatorname{diag}(-1,1,1,1)$ | [5.1](lessons/05-01-riemannian-lorentzian-metrics.md) |
| $\mathcal{L}_X$ | Lie derivative along $X$ — needs no connection, only the flow | [5.3](lessons/05-03-lie-derivative-killing-vectors.md) |
| $\xi$ (Killing) | a Killing vector field: $\mathcal{L}_\xi g = 0$, an infinitesimal symmetry of the metric | [5.3](lessons/05-03-lie-derivative-killing-vectors.md) |
| $\pi: E \to M$ | a fiber bundle: total space, projection, base | [5.4](lessons/05-04-fiber-bundles-connections.md) |
| $A$, $F = dA + A\wedge A$ | connection 1-form (gauge field) and its curvature (field strength) | [5.4](lessons/05-04-fiber-bundles-connections.md) |
| $\star$ | Hodge star — appears once, in $d\star F = J$; see [Hodge star](#hodge-star) below | [5.4](lessons/05-04-fiber-bundles-connections.md) |

### Index conventions

Every index is a slot, and its **height** says which way it transforms. This is the
single piece of bookkeeping the whole course runs on.

- **Summation convention.** A repeated index — always **once up, once down** —
  is summed over $1,\dots,n$ with no $\sum$ written: $v = v^i\partial_i$ means
  $\sum_i v^i\partial_i$, and $\omega_i v^i$ is a number.
  *([2.3](lessons/02-03-tangent-space.md), [2.5](lessons/02-05-covectors-cotangent-space.md))*
- **Upper index = contravariant = vector-like.** Components of a vector, $v^i$.
  Under $x \to x'$ they transform with the Jacobian $\partial x'^i/\partial x^j$ —
  they *grow* when the coordinate units shrink.
- **Lower index = covariant = covector-like.** Components of a covector, $\omega_i$.
  They transform with the **inverse** Jacobian $\partial x^j/\partial x'^i$ — they
  *shrink* to compensate. The two are engineered to be inverse so that the pairing
  $\omega_i v^i$ is the same number in every chart.
  *([2.5](lessons/02-05-covectors-cotangent-space.md))*
- **Free vs dummy.** A free index appears once and must match on both sides of an
  equation; a dummy index appears twice (up-down) and is summed away. Never sum two
  indices at the same height — that is not coordinate-independent.
  *([3.1](lessons/03-01-tensors-multilinear-maps.md))*
- **Staggering.** $R^\rho{}_{\sigma\mu\nu}$ and $A^i{}_j$ keep the horizontal order
  of slots explicit, which matters once you start raising and lowering.
- **Alphabet.** Latin $i, j, k, l$ for coordinates on a general manifold
  (Modules 1–3, and $\Gamma^k_{ij}$); Greek $\mu,\nu,\rho,\sigma,\lambda$ from
  Module 4 on, matching the general-relativity literature. They mean the same
  thing — the switch is a dialect, not a distinction.

### Sign conventions

Textbooks disagree on every one of these. This course fixes them as follows, and
the fastest way to catch a sign error is to re-run the sphere.

| Object | Convention here | Sanity check |
|---|---|---|
| Shape operator | $S_p = -\,dN_p$ (the minus is what makes a sphere positively curved) | sphere of radius $a$ with inward normal: $S = \tfrac1a\mathrm{Id}$, $k_1 = k_2 = \tfrac1a$ |
| Gaussian curvature | $K = k_1k_2 = \det S$; sign is orientation-independent, individual $k_i$ are not | sphere $K = 1/a^2 > 0$; saddle $K < 0$; cylinder $K = 0$ |
| Riemann tensor | $[\nabla_\mu,\nabla_\nu]V^\rho = R^\rho{}_{\sigma\mu\nu}V^\sigma$ (Carroll/Wald) | unit sphere: $R^\theta{}_{\phi\theta\phi} = \sin^2\theta$, giving $K = +1$ |
| Ricci contraction | $R_{\mu\nu} = R^\lambda{}_{\mu\lambda\nu}$ — **first and third** indices | unit sphere: $R_{\mu\nu} = g_{\mu\nu}$, $R = +2$ |
| Lorentzian signature | $(-,+,+,+)$: timelike $g(v,v) < 0$, spacelike $> 0$, null $= 0$ | $v = (1,0)$ is timelike; $v = (1,1)$ is null |
| Christoffel lower indices | $\Gamma^k_{ij}$: $i$ = direction you move, $j$ = vector differentiated, $k$ = output | Levi-Civita is symmetric, $\Gamma^k_{ij} = \Gamma^k_{ji}$ |

*From* [1.3](lessons/01-03-gauss-map-second-fundamental-form.md), [4.4](lessons/04-04-riemann-curvature-tensor.md), [4.5](lessons/04-05-ricci-scalar-curvature.md), [5.1](lessons/05-01-riemannian-lorentzian-metrics.md).

## Definitions

### Frenet frame

The little right-handed set of axes a tiny observer carries while riding a curve at
unit speed: face forward ($T$), lean into the turn ($N$), complete the tripod ($B$).

$$T = \gamma'(s), \qquad N = \frac{T'(s)}{\kappa(s)}, \qquad B = T\times N$$

*Introduced:* [1.1](lessons/01-01-curves-arclength-frenet.md)

### Curvature and torsion

Two numbers that determine a space curve completely, up to where you put it:
how fast the direction of travel rotates, and how fast the curve escapes the plane
it momentarily lies in.

$$\kappa(s) = \lvert T'(s)\rvert \ (\geq 0), \qquad B'(s) = -\tau(s)\,N(s)$$

Planar $\iff \tau = 0$; straight $\iff \kappa = 0$. The **osculating plane** is
$\operatorname{span}\{T, N\}$ and $1/\kappa$ is the radius of the best-fitting circle.

*Introduced:* [1.1](lessons/01-01-curves-arclength-frenet.md)

### Regular surface

A subset of space that near every point is the smooth image of a coordinate patch
whose two velocity vectors are independent — so it genuinely has a tangent *plane*,
not a crease or a spike.

$$\mathbf{x}: U\subseteq\mathbb{R}^2\to\mathbb{R}^3, \qquad \mathbf{x}_u,\mathbf{x}_v \text{ linearly independent}, \qquad T_pS = \operatorname{span}\{\mathbf{x}_u,\mathbf{x}_v\}$$

*Introduced:* [1.2](lessons/01-02-surfaces-first-fundamental-form.md)

### First fundamental form

The surface's built-in ruler: feed it a coordinate step, it returns the step's true
squared length. Everything an ant confined to the surface can measure comes from it.

$$E = \mathbf{x}_u\cdot\mathbf{x}_u,\quad F = \mathbf{x}_u\cdot\mathbf{x}_v,\quad G = \mathbf{x}_v\cdot\mathbf{x}_v, \qquad \mathrm{I} = ds^2 = E\,du^2 + 2F\,du\,dv + G\,dv^2$$

It is the ambient dot product restricted to the tangent plane — i.e. the **induced
metric**, later called $g_{\mu\nu}$.

*Introduced:* [1.2](lessons/01-02-surfaces-first-fundamental-form.md)

### Gauss map

Send every point of a surface to its unit normal, viewed as a point on the unit
sphere. How fast this map moves is how sharply the surface curves.

$$N = \frac{\mathbf{x}_u\times\mathbf{x}_v}{\lvert\mathbf{x}_u\times\mathbf{x}_v\rvert}, \qquad N: S\to S^2$$

*Introduced:* [1.3](lessons/01-03-gauss-map-second-fundamental-form.md)

### Shape operator

The derivative of the Gauss map, read as an operator on the tangent plane: hand it a
walking direction and it says which way, and how fast, the normal tilts.

$$S_p = -\,dN_p : T_pS \to T_pS, \qquad \text{self-adjoint w.r.t. } \mathrm{I}$$

Self-adjointness is what guarantees real eigenvalues and orthogonal eigenvectors —
the principal curvatures and directions.

*Introduced:* [1.3](lessons/01-03-gauss-map-second-fundamental-form.md)

### Second fundamental form

How much the surface pulls away from its own tangent plane — the component of its
acceleration along the normal. Genuinely **extrinsic**: it needs the ambient space.

$$e = \mathbf{x}_{uu}\cdot N,\quad f = \mathbf{x}_{uv}\cdot N,\quad g = \mathbf{x}_{vv}\cdot N, \qquad \mathrm{II}(w) = \langle S_p w, w\rangle$$

*Introduced:* [1.3](lessons/01-03-gauss-map-second-fundamental-form.md)

### Principal curvatures

The sharpest and gentlest bending rates at a point, and the directions that achieve
them. Every other direction's bending is squeezed between them.

$$k_n(w) = \frac{\mathrm{II}(w)}{\mathrm{I}(w)}, \qquad k_1, k_2 = \max/\min k_n = \text{eigenvalues of } S_p$$

*Introduced:* [1.3](lessons/01-03-gauss-map-second-fundamental-form.md)

### Gaussian curvature

The *product* of the two principal curvatures — and, astonishingly, computable from
the ruler alone, so a surface-dwelling ant can measure it. Sign classifies the local
shape: dome, saddle, or flat-in-a-direction.

$$K = k_1k_2 = \det S = \frac{eg - f^2}{EG - F^2}$$

*Introduced:* [1.4](lessons/01-04-gaussian-curvature-theorema-egregium.md)

### Mean curvature

The *average* of the two principal curvatures. Extrinsic — it sees the rolling that
$K$ is blind to; $H = 0$ is the minimal-surface (soap film) condition.

$$H = \tfrac12(k_1 + k_2) = \tfrac12\operatorname{tr}S = \frac{eG - 2fF + gE}{2(EG - F^2)}$$

*Introduced:* [1.4](lessons/01-04-gaussian-curvature-theorema-egregium.md)

### Chart and atlas

A chart is one flat map-page of a curved space: a patch plus coordinates. An atlas
is a book of them covering everything, any two pages agreeing smoothly where they
overlap.

A chart is $(U,\varphi)$ with $\varphi: U \to \varphi(U)\subseteq\mathbb{R}^n$ a
homeomorphism onto an **open** set. A **smooth atlas** is a cover by pairwise
smoothly-compatible charts; a **smooth structure** is a maximal such atlas.

*Introduced:* [2.1](lessons/02-01-charts-atlases-smooth-manifolds.md)

### Transition map

The dictionary between two charts on their overlap — an ordinary map between open
sets of $\mathbb{R}^n$, which is where "smooth" already means something.

$$\psi\circ\varphi^{-1}: \varphi(U\cap V)\to\psi(U\cap V) \quad\text{required } C^\infty$$

*Introduced:* [2.1](lessons/02-01-charts-atlases-smooth-manifolds.md)

### Smooth manifold

A space stitched from flat coordinate patches whose overlaps glue smoothly —
geometry defined entirely from the inside, with no ambient space required.

A Hausdorff, second-countable topological space with a smooth $n$-dimensional atlas.
The manifold is the real object; charts are disposable bookkeeping.

*Introduced:* [2.1](lessons/02-01-charts-atlases-smooth-manifolds.md)

### Smooth map between manifolds

You can't differentiate on a curved space directly, so read both ends through charts
and ask whether the resulting Euclidean map is smooth. Smooth transition maps make
the answer chart-independent.

$$F: M\to N \text{ smooth} \iff \hat F = \psi\circ F\circ\varphi^{-1} \text{ is } C^\infty$$

*Introduced:* [2.2](lessons/02-02-smooth-maps-diffeomorphisms.md)

### Diffeomorphism

The manifold version of "isomorphism": two spaces that are the same smooth object in
different clothes. A smooth bijection whose **inverse is also smooth** — smoothness
of the inverse is not automatic ($x\mapsto x^3$ on $\mathbb{R}$).

*Introduced:* [2.2](lessons/02-02-smooth-maps-diffeomorphisms.md)

### Immersion, submersion, embedding

Three ways a smooth map's derivative can have full rank: nothing collapses, nothing
is missed, or both plus a clean image.

For $F: M^m\to N^n$ with $r = \operatorname{rank}(d\hat F)$: **immersion** $r = m$;
**submersion** $r = n$; **embedding** = injective immersion that is a homeomorphism
onto its image. A **submanifold** is the image of an embedding.

*Introduced:* [2.2](lessons/02-02-smooth-maps-diffeomorphisms.md)

### Tangent space

The space of directions at a point — built without any arrow to point, because an
abstract manifold has no room outside itself.

$$T_pM = \{\text{derivations at } p\}, \qquad \dim T_pM = n, \qquad \text{basis } \left\{\left.\frac{\partial}{\partial x^i}\right|_p\right\}$$

Equivalently, equivalence classes of curves through $p$ agreeing to first order.

*Introduced:* [2.3](lessons/02-03-tangent-space.md)

### Derivation

A gadget that eats a function and returns its rate of change at $p$ — linear, and
obeying the product rule. That pair of properties is *all* a tangent vector is.

$$v: C^\infty(M)\to\mathbb{R} \text{ linear}, \qquad v(fg) = f(p)\,v(g) + g(p)\,v(f)$$

Consequence: $v(c) = 0$ for constants — derivations see changes, not offsets.

*Introduced:* [2.3](lessons/02-03-tangent-space.md)

### Vector field

A wind blowing across the manifold: one tangent vector at every point, varying
smoothly. It acts on functions to give new functions.

$$X = X^i(x)\,\partial_i, \qquad (Xf)(p) = X^i(p)\,\partial_i f(p)$$

*Introduced:* [2.4](lessons/02-04-vector-fields-pushforward.md)

### Pushforward

The chain rule said without coordinates: a map carries velocities forward, and in
components that carrying is exactly the Jacobian matrix.

$$\bigl(dF_p(v)\bigr)(g) = v(g\circ F), \qquad (dF(v))^a = \frac{\partial F^a}{\partial x^i}v^i$$

Vectors push **forward**; functions and forms pull **back**.

*Introduced:* [2.4](lessons/02-04-vector-fields-pushforward.md)

### Integral curve and flow

A vector field is a differential equation waiting to be solved: go where the arrow
at your feet points. Collecting all such paths slides the whole manifold along.

$$\dot\gamma(t) = X_{\gamma(t)}, \qquad \theta_t: M\to M, \qquad \theta_s\circ\theta_t = \theta_{s+t}$$

*Introduced:* [2.4](lessons/02-04-vector-fields-pushforward.md)

### Lie bracket

Flow along $X$ then $Y$, versus $Y$ then $X$ — the discrepancy is itself a vector
field. The first genuinely noncommutative structure in the subject.

$$[X,Y]f = X(Yf) - Y(Xf), \qquad [X,Y]^k = X^i\partial_i Y^k - Y^i\partial_i X^k$$

Coordinate fields always commute: $[\partial_i,\partial_j] = 0$.

*Introduced:* [2.4](lessons/02-04-vector-fields-pushforward.md)

### Cotangent space

The space of machines that *measure* vectors. A covector doesn't point; it reads —
picture a stack of level-set planes, and the pairing counts how many a vector pierces.

$$T_p^*M = (T_pM)^*, \qquad \omega = \omega_i\,dx^i, \qquad \omega(v) = \omega_i v^i$$

A **one-form** is a smooth choice of covector at each point.

*Introduced:* [2.5](lessons/02-05-covectors-cotangent-space.md)

### Differential of a function

Hand it a direction, it returns the directional derivative of $f$ in that direction.
This is the honest identity of "the gradient" before a metric is around.

$$df_p(v) = v(f), \qquad df = \frac{\partial f}{\partial x^i}\,dx^i$$

It is a **covector**, a $(0,1)$-tensor — not a vector until a metric raises the index.

*Introduced:* [2.5](lessons/02-05-covectors-cotangent-space.md)

### Tensor

A machine with slots — some eating covectors, some eating vectors — linear in each,
returning a number. Equivalently, an indexed array obeying the transformation law.

$$T: \underbrace{T_p^*M\times\cdots}_{k}\times\underbrace{T_pM\times\cdots}_{l}\to\mathbb{R}, \qquad T^{i\cdots}{}_{j\cdots} = T(dx^i,\ldots,\partial_j,\ldots)$$

$k$ = contravariant rank (upper), $l$ = covariant rank (lower). The law is what makes
"$T = 0$" a coordinate-independent statement.

*Introduced:* [3.1](lessons/03-01-tensors-multilinear-maps.md)

### Contraction

Feed a tensor's own output back into one of its slots: sum one upper index against
one lower. The paired Jacobians cancel, so the result is again a tensor.

$$T^{i\cdots}{}_{i\cdots}, \qquad \text{e.g. } A^i{}_i = \operatorname{tr}A, \qquad \delta^i_i = n$$

*Introduced:* [3.1](lessons/03-01-tensors-multilinear-maps.md)

### Differential form

A tensor that measures **oriented $p$-dimensional volume**. Swap two inputs and the
sign flips — that antisymmetry is the entire definition, and it forces a form to
vanish on any linearly dependent set.

$$\omega \in \Lambda^p T_p^*M: \text{ totally antisymmetric } (0,p)\text{-tensor}, \qquad \dim\Lambda^p = \binom{n}{p}$$

$0$-forms are functions; $1$-forms are covectors; $\Lambda^p = 0$ for $p > n$.

*Introduced:* [3.2](lessons/03-02-differential-forms-wedge-product.md)

### Wedge product

Multiplication that builds higher forms while enforcing antisymmetry — and spits out
determinants for free.

$$\alpha\wedge\beta = (-1)^{pq}\beta\wedge\alpha, \qquad (\alpha^1\wedge\cdots\wedge\alpha^p)(v_1,\ldots,v_p) = \det[\alpha^i(v_j)]$$

Any repeated basis factor kills the term: $dx\wedge dx = 0$.

*Introduced:* [3.2](lessons/03-02-differential-forms-wedge-product.md)

### Orientation

A consistent global choice of which way is "positive" — needed before any integral
of a form means anything, since forms are signed.

A choice of nowhere-vanishing top-form ($p = n$), up to positive scaling. Some
manifolds (the Möbius band) admit none and cannot be integrated over.

*Introduced:* [3.2](lessons/03-02-differential-forms-wedge-product.md), used in [3.4](lessons/03-04-integration-on-manifolds.md)

### Exterior derivative

One degree-raising derivative that *is* grad, curl, and div at once — coordinate-free
and available in any dimension.

$$d: \Omega^p\to\Omega^{p+1}, \qquad d(\omega_I\,dx^I) = d\omega_I\wedge dx^I, \qquad d(\alpha\wedge\beta) = d\alpha\wedge\beta + (-1)^{\deg\alpha}\alpha\wedge d\beta$$

$$d^2 = 0$$

*Introduced:* [3.3](lessons/03-03-exterior-derivative.md)

### Closed and exact

**Closed** = killed by $d$. **Exact** = already a $d$ of something. Exact always
implies closed (because $d^2 = 0$); the converse is a question about the *shape* of
the space.

$$d\omega = 0 \ (\text{closed}), \qquad \omega = d\eta \ (\text{exact}), \qquad \text{exact}\Rightarrow\text{closed}$$

**Poincaré lemma:** on a contractible region the converse holds too — closed forms
are exact *locally*, always.

*Introduced:* [3.3](lessons/03-03-exterior-derivative.md)

### Pullback

Drag a form backwards through a map by pushing the vectors forwards first. This is
the mechanism that supplies the Jacobian when you integrate.

$$(\Phi^*\omega)(v_1,\ldots,v_p) = \omega(d\Phi\,v_1,\ldots,d\Phi\,v_p), \qquad \Phi^*(dy^a) = \frac{\partial y^a}{\partial u^i}\,du^i$$

Key facts: $\Phi^*(\alpha\wedge\beta) = \Phi^*\alpha\wedge\Phi^*\beta$ and
$\Phi^*(d\omega) = d(\Phi^*\omega)$.

*Introduced:* [3.4](lessons/03-04-integration-on-manifolds.md)

### Integral of a form

Pull the top-form back to flat coordinates, integrate its single coefficient by
ordinary calculus. Coordinate-proof by construction, because the form carries its
own change-of-variables factor.

$$\Phi^*\omega = h(u)\,du^1\wedge\cdots\wedge du^n \quad\Longrightarrow\quad \int_M\omega := \int_U h(u)\,du^1\cdots du^n$$

For several charts, split with a **partition of unity** ($\sum_\alpha\rho_\alpha = 1$,
each $\rho_\alpha$ living in one chart) and add up.

*Introduced:* [3.4](lessons/03-04-integration-on-manifolds.md)

### Connection

A rule for comparing vectors at neighbouring points, which a bare manifold does not
supply — $V(p)$ and $V(q)$ live in different vector spaces.

An **affine connection** takes $X, Y$ to a field $\nabla_X Y$, function-linear in $X$,
$\mathbb{R}$-linear in $Y$, with $\nabla_X(fY) = (Xf)Y + f\nabla_X Y$.

*Introduced:* [4.1](lessons/04-01-covariant-derivative-christoffel.md)

### Christoffel symbols

The numbers recording how each basis vector turns as you move in each direction —
the correction the naive derivative forgot.

$$\nabla_{\partial_i}\partial_j = \Gamma^k_{ij}\,\partial_k$$

**Not a tensor:** it transforms with an extra second-derivative term, deliberately,
so that $\nabla$ comes out tensorial. Nonzero $\Gamma$ does **not** mean curved space.

*Introduced:* [4.1](lessons/04-01-covariant-derivative-christoffel.md)

### Covariant derivative

The naive derivative of the components **plus** a correction for the turning basis —
and the sum, unlike either piece, is a genuine tensor.

$$\nabla_i Y^k = \partial_i Y^k + \Gamma^k_{ij}Y^j, \qquad (\nabla_X Y)^k = X^i\bigl(\partial_i Y^k + \Gamma^k_{ij}Y^j\bigr)$$

*Introduced:* [4.1](lessons/04-01-covariant-derivative-christoffel.md)

### Parallel transport

Moving a vector along a path "without changing it" means: its covariant derivative
along the path is zero. That is an ODE, so the answer is unique once you fix the
starting vector.

$$\frac{DV}{dt} = \nabla_{\dot\gamma}V = 0, \qquad \frac{dV^k}{dt} + \Gamma^k_{ij}\,\dot\gamma^i V^j = 0$$

With the Levi-Civita connection it preserves lengths and angles — it is a rotation.

*Introduced:* [4.2](lessons/04-02-parallel-transport.md)

### Holonomy

Carry a vector around a closed loop and it comes back **rotated**. That rotation is
not an error; it is exactly the curvature enclosed.

$$\text{holonomy angle around a surface loop} = \iint_{\text{enclosed}} K\,dA$$

Transport is path-independent (holonomy trivial for all contractible loops) **iff**
the curvature vanishes.

*Introduced:* [4.2](lessons/04-02-parallel-transport.md)

### Geodesic

The curved-space straight line: a curve that carries its own velocity without turning
— equivalently, one of locally extremal length.

$$\nabla_{\dot\gamma}\dot\gamma = 0 \qquad\Longleftrightarrow\qquad \ddot x^k + \Gamma^k_{ij}\,\dot x^i\dot x^j = 0$$

Variationally, geodesics extremize $L[\gamma] = \int\sqrt{g_{ij}\dot x^i\dot x^j}\,dt$
(or the energy $E = \tfrac12\int g_{ij}\dot x^i\dot x^j\,dt$). **Affinely
parametrized** means constant speed, which the clean equation assumes.

*Introduced:* [4.3](lessons/04-03-geodesics.md)

### Exponential map

Turns straight-line data in the tangent space into actual points on the manifold:
shoot a geodesic in direction $v$ and walk for unit parameter time.

$$\exp_p(v) = \gamma_v(1), \qquad \gamma_v(0) = p,\ \dot\gamma_v(0) = v$$

*Introduced:* [4.3](lessons/04-03-geodesics.md)

### Riemann curvature tensor

The complete, coordinate-proof measure of curvature: the failure of covariant
derivatives to commute, equivalently the rotation a vector picks up around an
infinitesimal loop.

$$[\nabla_\mu,\nabla_\nu]V^\rho = R^\rho{}_{\sigma\mu\nu}V^\sigma$$

$$R^\rho{}_{\sigma\mu\nu} = \partial_\mu\Gamma^\rho_{\nu\sigma} - \partial_\nu\Gamma^\rho_{\mu\sigma} + \Gamma^\rho_{\mu\lambda}\Gamma^\lambda_{\nu\sigma} - \Gamma^\rho_{\nu\lambda}\Gamma^\lambda_{\mu\sigma}$$

A $(1,3)$-tensor. **Flatness criterion:** $R \equiv 0$ on a region iff the region is
locally flat (coordinates exist with $g$ constant and all $\Gamma = 0$).

*Introduced:* [4.4](lessons/04-04-riemann-curvature-tensor.md)

### Ricci tensor

Contract Riemann once. Geometrically: how the **volume** of a small ball of
initially-parallel geodesics deviates from flat space — the focusing power of
curvature.

$$R_{\mu\nu} = R^\lambda{}_{\mu\lambda\nu}, \qquad R_{\mu\nu} = R_{\nu\mu} \ \text{(Levi-Civita)}$$

*Introduced:* [4.5](lessons/04-05-ricci-scalar-curvature.md)

### Scalar curvature

Contract once more, with the inverse metric: one number per point summarizing the
curvature there.

$$R = g^{\mu\nu}R_{\mu\nu}, \qquad R = 2K \ \text{ in 2D}$$

*Introduced:* [4.5](lessons/04-05-ricci-scalar-curvature.md)

### Sectional curvature

Gauss's $K$, generalized: pick a 2-plane in the tangent space, sweep out a surface
with geodesics in it, and take *that* surface's Gaussian curvature.

$$K(u,v) = \frac{R_{\rho\sigma\mu\nu}u^\rho v^\sigma u^\mu v^\nu}{\lvert u\rvert^2\lvert v\rvert^2 - (u\cdot v)^2}$$

*Introduced:* [4.5](lessons/04-05-ricci-scalar-curvature.md)

### Geodesic deviation

Two free-fallers starting parallel: do they stay parallel? The relative acceleration
of their separation is curvature made physical — this is tidal gravity.

$$\frac{D^2\xi^\mu}{d\tau^2} = -R^\mu{}_{\nu\rho\sigma}\,u^\nu\xi^\rho u^\sigma$$

Positive curvature focuses geodesics ($K > 0$: meridians meet at the pole); negative
curvature defocuses them.

*Introduced:* [4.5](lessons/04-05-ricci-scalar-curvature.md)

### Metric tensor

An inner product on each tangent space, varying smoothly — the object that upgrades a
bare manifold to one with lengths and angles. It is the first fundamental form, gone
abstract.

$$g(u,v) = g_{\mu\nu}u^\mu v^\nu, \qquad g_{\mu\nu} = g_{\nu\mu}, \qquad \det g \neq 0 \ (\text{nondegenerate})$$

$$\lvert v\rvert = \sqrt{g(v,v)}, \qquad \cos\theta = \frac{g(u,v)}{\lvert u\rvert\,\lvert v\rvert}$$

*Introduced:* [5.1](lessons/05-01-riemannian-lorentzian-metrics.md)

### Signature

The pattern of plus and minus signs in the metric — a fixed invariant (Sylvester),
and the single thing that splits geometry from relativity.

- **Riemannian:** $(+,\ldots,+)$, positive-definite. Space, surfaces, spheres.
- **Lorentzian:** $(-,+,\ldots,+)$. Spacetime; prototype $\eta_{\mu\nu} = \operatorname{diag}(-1,1,1,1)$.

*Introduced:* [5.1](lessons/05-01-riemannian-lorentzian-metrics.md)

### Timelike, spacelike, null

With one minus sign in the metric, "length squared" can go either way, and that
threefold split *is* causality.

$$g(v,v) < 0 \ \text{timelike (massive worldline)}, \quad = 0 \ \text{null (light)}, \quad > 0 \ \text{spacelike}$$

The null vectors sweep out the **light cone**; future-directed means $v^t > 0$.

*Introduced:* [5.1](lessons/05-01-riemannian-lorentzian-metrics.md)

### Raising and lowering indices

The metric is the canonical translator between vectors and covectors — the only
reason "up" and "down" can ever be converted.

$$V_\mu = g_{\mu\nu}V^\nu, \qquad V^\mu = g^{\mu\nu}V_\nu, \qquad g^{\mu\lambda}g_{\lambda\nu} = \delta^\mu_\nu$$

On a bare manifold with no metric, $V^\mu$ and $V_\mu$ live in genuinely different
spaces and index gymnastics is meaningless.

*Introduced:* [5.1](lessons/05-01-riemannian-lorentzian-metrics.md)

### Levi-Civita connection

Of all the connections a manifold could carry, exactly one respects the metric and
has no built-in twist — and it is computable from $g$ alone.

**Fundamental theorem of Riemannian geometry:** on $(M, g)$ there is a *unique*
connection that is **metric-compatible** and **torsion-free**, with

$$\Gamma^k_{ij} = \tfrac12\,g^{kl}\bigl(\partial_i g_{jl} + \partial_j g_{il} - \partial_l g_{ij}\bigr).$$

Holds for any nondegenerate signature — Lorentzian metrics included.

*Introduced:* [5.2](lessons/05-02-levi-civita-connection.md)

### Metric compatibility

Parallel transport shouldn't stretch anything: carry two vectors along a curve and
their dot product must not drift.

$$\nabla g = 0 \qquad\Longleftrightarrow\qquad \frac{d}{dt}g(U,V) = 0 \ \text{ for parallel } U, V$$

*Introduced:* [5.2](lessons/05-02-levi-civita-connection.md)

### Torsion-free

The connection has no intrinsic twist: infinitesimal parallelograms close up.

$$\Gamma^k_{ij} = \Gamma^k_{ji} \quad (\text{symmetric lower indices})$$

Metric compatibility alone leaves torsion free to be nonzero; it is the *combination*
that gives uniqueness. (Einstein–Cartan gravity deliberately keeps torsion; standard
general relativity does not.)

*Introduced:* [5.2](lessons/05-02-levi-civita-connection.md)

### Lie derivative

How fast something changes as you drift along a vector field's flow — comparing an
object to its dragged-along self. Needs **no connection**, only the flow.

$$\mathcal{L}_X f = X(f), \qquad \mathcal{L}_X Y = [X, Y]$$

$$(\mathcal{L}_X g)_{\mu\nu} = X^\lambda\partial_\lambda g_{\mu\nu} + g_{\lambda\nu}\partial_\mu X^\lambda + g_{\mu\lambda}\partial_\nu X^\lambda$$

*Introduced:* [5.3](lessons/05-03-lie-derivative-killing-vectors.md)

### Killing vector

A direction you can slide the whole space along without changing any distance — a
symmetry of the metric, and therefore a conservation law.

$$\mathcal{L}_\xi g = 0 \qquad\Longleftrightarrow\qquad \nabla_\mu\xi_\nu + \nabla_\nu\xi_\mu = 0 \quad(\text{Killing equation})$$

**Conserved quantity:** along any geodesic with tangent $u$, the number
$\xi_\mu u^\mu$ is constant. A generic metric has *no* Killing vectors; the maximum
possible is $\tfrac{n(n+1)}{2}$.

*Introduced:* [5.3](lessons/05-03-lie-derivative-killing-vectors.md)

### Fiber bundle

Attach a copy of some space to every point of a base manifold — locally just a
product, but globally allowed to be glued with a twist.

$$\pi: E \to M \text{ with fiber } F, \qquad \pi^{-1}(U) \cong U\times F \ \text{(locally)}$$

**Vector bundle:** fiber a vector space (e.g. the tangent bundle $TM$).
**Principal $G$-bundle:** fiber a Lie group acting freely — the arena of gauge theory.

*Introduced:* [5.4](lessons/05-04-fiber-bundles-connections.md)

### Section

A smooth choice of one point in each fiber — threading a curve through the bundle.
A vector field is exactly a section of $TM$.

$$s: M\to E \text{ with } \pi\circ s = \mathrm{id}$$

A trivial bundle always has a nowhere-vanishing section; the Möbius band and $TS^2$
do not, which is how you *detect* a twist.

*Introduced:* [5.4](lessons/05-04-fiber-bundles-connections.md)

### Gauge field and field strength

The punchline of the course: a connection on a bundle **is** a gauge field, and its
curvature **is** the force field.

$$A = A_\mu\,dx^\mu \ (\text{connection 1-form}), \qquad F = dA + A\wedge A \ (\text{curvature})$$

For an abelian group like $U(1)$ the $A\wedge A$ term vanishes and $F = dA$. $A$ shifts
non-tensorially under a change of frame (a **gauge transformation**), exactly as
$\Gamma$ does; $F$ transforms covariantly.

*Introduced:* [5.4](lessons/05-04-fiber-bundles-connections.md)

## Formulas and rules

### Frenet–Serret formulas

For a **unit-speed** curve, the frame's turning, written in the frame itself:

$$T' = \kappa N, \qquad N' = -\kappa T + \tau B, \qquad B' = -\tau N$$

For an arbitrary (non-unit-speed) regular parametrization, use the
parametrization-free versions instead — do not force an arc-length reparametrization
you can't compute:

$$\kappa = \frac{\lvert\gamma'\times\gamma''\rvert}{\lvert\gamma'\rvert^3}, \qquad \tau = \frac{(\gamma'\times\gamma'')\cdot\gamma'''}{\lvert\gamma'\times\gamma''\rvert^2}, \qquad L = \int\lvert\gamma'(t)\rvert\,dt$$

*From* [1.1](lessons/01-01-curves-arclength-frenet.md)

### Measuring on a surface with the fundamental forms

| Quantity | Formula |
|---|---|
| arc length of $t\mapsto(u(t),v(t))$ | $L = \int\sqrt{E\dot u^2 + 2F\dot u\dot v + G\dot v^2}\;dt$ |
| angle between coordinate curves | $\cos\theta = F/\sqrt{EG}$ (so $F = 0$ ⟺ orthogonal grid) |
| area element | $dA = \sqrt{EG - F^2}\;du\,dv = \lvert\mathbf{x}_u\times\mathbf{x}_v\rvert\,du\,dv$ |
| normal curvature in direction $w$ | $k_n(w) = \mathrm{II}(w)/\mathrm{I}(w)$ |
| shape operator in coordinates | $S = \mathrm{I}^{-1}\mathrm{II}$ (matrices in the $\{\mathbf{x}_u,\mathbf{x}_v\}$ basis) |
| Gaussian / mean curvature | $K = \dfrac{eg-f^2}{EG-F^2}$, $\quad H = \dfrac{eG - 2fF + gE}{2(EG-F^2)}$ |
| recovering the principal curvatures | $k_{1,2} = H \pm \sqrt{H^2 - K}$ |
| graph (Monge patch) $z = h(u,v)$ | $E = 1+h_u^2$, $F = h_uh_v$, $G = 1+h_v^2$, $\sqrt{EG-F^2} = \sqrt{1+h_u^2+h_v^2}$ |

*From* [1.2](lessons/01-02-surfaces-first-fundamental-form.md), [1.3](lessons/01-03-gauss-map-second-fundamental-form.md), [1.4](lessons/01-04-gaussian-curvature-theorema-egregium.md)

### Theorema Egregium

$K$ was *defined* from the outside (the normal, the shape operator) but can be
recomputed from the inside, from $E, F, G$ and their derivatives alone. For an
**orthogonal** parametrization ($F = 0$):

$$K = -\frac{1}{2\sqrt{EG}}\left[\frac{\partial}{\partial u}\!\left(\frac{G_u}{\sqrt{EG}}\right) + \frac{\partial}{\partial v}\!\left(\frac{E_v}{\sqrt{EG}}\right)\right]$$

**Consequence:** isometric surfaces have equal $K$ at corresponding points, so no
length-preserving map exists between surfaces of different $K$ — a sphere cannot be
flattened onto a map, and folded paper stiffens across the crease.

For a surface of revolution written as $ds^2 = dr^2 + f(r)^2\,d\theta^2$, the same
intrinsic content collapses to the one-liner

$$K = -\frac{f''(r)}{f(r)}.$$

*From* [1.4](lessons/01-04-gaussian-curvature-theorema-egregium.md); the $f''/f$ form is the standard shortcut the later modules lean on ([5.2](lessons/05-02-levi-civita-connection.md) P2).

### The curvature zoo

Every "curvature" in this course, what it actually measures, and how they relate.

| Name | Type | Measures | Formula |
|---|---|---|---|
| curvature $\kappa$ | scalar on a curve | how fast the direction of travel rotates | $\kappa = \lvert T'\rvert$ |
| torsion $\tau$ | scalar on a curve | how fast the curve leaves its osculating plane | $B' = -\tau N$ |
| normal curvature $k_n$ | scalar per direction | surface bending along one tangent direction | $\mathrm{II}(w)/\mathrm{I}(w)$ |
| principal $k_1, k_2$ | two scalars | sharpest and gentlest bending | eigenvalues of $S_p$ |
| **Gaussian $K$** | scalar, **intrinsic** | is the surface dome-, saddle-, or paper-like | $k_1k_2 = \det S$ |
| mean $H$ | scalar, **extrinsic** | how a soap film would relax ($H = 0$ minimal) | $\tfrac12(k_1+k_2) = \tfrac12\operatorname{tr}S$ |
| **Riemann $R^\rho{}_{\sigma\mu\nu}$** | $(1,3)$-tensor | *all* the curvature: loop holonomy / $[\nabla,\nabla]$ | $\partial\Gamma - \partial\Gamma + \Gamma\Gamma - \Gamma\Gamma$ |
| sectional $K(u,v)$ | scalar per 2-plane | Gaussian curvature of the geodesic surface in that plane | see [Sectional curvature](#sectional-curvature) |
| Ricci $R_{\mu\nu}$ | symmetric $(0,2)$ | volume change of a small geodesic ball (focusing) | $R^\lambda{}_{\mu\lambda\nu}$ |
| scalar $R$ | scalar | one number per point | $g^{\mu\nu}R_{\mu\nu}$ |
| Einstein $G_{\mu\nu}$ | symmetric $(0,2)$ | the combination matter sources | $R_{\mu\nu} - \tfrac12 R\,g_{\mu\nu}$ |
| bundle curvature $F$ | Lie-algebra 2-form | field strength of a gauge connection | $dA + A\wedge A$ |

**How they connect.**

$$\text{2D: } R_{1212} = K\det g, \qquad R_{\mu\nu} = K g_{\mu\nu}, \qquad R = 2K, \qquad G_{\mu\nu}\equiv 0$$

$$\text{surface loop: } \text{holonomy angle} = \iint K\,dA, \qquad \text{independent components of } R: \ \frac{n^2(n^2-1)}{12}$$

so $1$ component in 2D, $6$ in 3D, $20$ in 4D. In 2D and 3D, Ricci determines all of
Riemann; from 4D on there is leftover curvature Ricci misses (the **Weyl tensor**),
which is what propagates as gravitational waves in vacuum.

*From* [1.1](lessons/01-01-curves-arclength-frenet.md), [1.3](lessons/01-03-gauss-map-second-fundamental-form.md), [1.4](lessons/01-04-gaussian-curvature-theorema-egregium.md), [4.2](lessons/04-02-parallel-transport.md), [4.4](lessons/04-04-riemann-curvature-tensor.md), [4.5](lessons/04-05-ricci-scalar-curvature.md), [5.4](lessons/05-04-fiber-bundles-connections.md)

### Model surfaces — the ones every problem is secretly about

| Surface | Metric / $\mathrm{I}$ | $k_1, k_2$ | $K$ | $H$ |
|---|---|---|---|---|
| plane (Cartesian) | $du^2 + dv^2$ | $0,\ 0$ | $0$ | $0$ |
| plane (polar) | $dr^2 + r^2 d\theta^2$ | $0,\ 0$ | $0$ | $0$ |
| cylinder, radius $a$ | $du^2 + dv^2$ ($u$ = arc length around) | $\tfrac1a,\ 0$ | $0$ | $\tfrac{1}{2a}$ |
| cone, half-angle $\alpha$ | $dr^2 + r^2\sin^2\!\alpha\,d\theta^2$ | one is $0$ | $0$ | $\neq 0$ |
| sphere, radius $a$ | $a^2 d\theta^2 + a^2\sin^2\theta\,d\phi^2$ | $\tfrac1a,\ \tfrac1a$ | $\tfrac{1}{a^2}$ | $\tfrac1a$ |
| torus, outer equator | tube radius $r$, hole radius $R$ | $\tfrac1r,\ \tfrac{1}{R+r}$ | $> 0$ | $\neq 0$ |
| torus, inner throat | — | opposite signs | $< 0$ | — |
| saddle / mountain pass | — | opposite signs | $< 0$ | — |

Cylinder and cone are **intrinsically flat**: they unroll onto the plane without
stretching, which is exactly why $K = 0$ while $H \neq 0$. The cone's unrolled sector
has an angular deficit — substituting $\psi = \theta\sin\alpha$ turns its metric into
flat polar coordinates over $\psi\in[0, 2\pi\sin\alpha)$.

The **round sphere of radius $a$** is the course's running example, and its full
dossier is worth memorizing:

$$ds^2 = a^2 d\theta^2 + a^2\sin^2\theta\,d\phi^2, \qquad dA = a^2\sin\theta\,d\theta\,d\phi, \qquad \text{Area} = 4\pi a^2$$

$$K = \frac{1}{a^2}, \qquad R_{\mu\nu} = \frac{1}{a^2}g_{\mu\nu} \ (\text{an Einstein manifold}), \qquad R = \frac{2}{a^2}$$

geodesics = great circles; latitude circles (except the equator) are **not**
geodesics; $\partial_\phi$ is a Killing vector with conserved
$\sin^2\theta\,\dot\phi$; cap of colatitude $\theta_0$ has area
$2\pi a^2(1-\cos\theta_0)$, which on the unit sphere is also its holonomy angle.

*From* [1.2](lessons/01-02-surfaces-first-fundamental-form.md), [1.4](lessons/01-04-gaussian-curvature-theorema-egregium.md), [4.3](lessons/04-03-geodesics.md), [4.5](lessons/04-05-ricci-scalar-curvature.md), [5.3](lessons/05-03-lie-derivative-killing-vectors.md)

### Transformation laws

The definitions of "vector", "covector", "tensor" *are* these laws. One factor of
$\partial x'/\partial x$ per upper index, one of $\partial x/\partial x'$ per lower.

$$v'^i = \frac{\partial x'^i}{\partial x^j}v^j, \qquad \omega'_i = \frac{\partial x^j}{\partial x'^i}\omega_j, \qquad T'^{\,i\cdots}{}_{j\cdots} = \frac{\partial x'^i}{\partial x^a}\cdots\frac{\partial x^b}{\partial x'^j}\cdots T^{a\cdots}{}_{b\cdots}$$

The two Jacobians are inverse, $\dfrac{\partial x^b}{\partial x'^j}\dfrac{\partial x'^j}{\partial x^c} = \delta^b_c$, which is why full contractions are invariant.

**What is not a tensor:**

$$\partial_i V^j: \ \text{extra term } \frac{\partial x^a}{\partial x'^i}\frac{\partial^2 x'^j}{\partial x^a\partial x^b}V^b, \qquad \Gamma'^{\,k}_{ij} = (\text{tensor part}) + \frac{\partial x'^k}{\partial x^c}\frac{\partial^2 x^c}{\partial x'^i\partial x'^j}$$

Both offenders are second-derivative terms, and they are built to cancel: that is why
$\nabla_i V^k = \partial_i V^k + \Gamma^k_{ij}V^j$ *is* a tensor. Under an **affine**
coordinate change the second derivatives vanish and $\partial_i V^j$ is tensorial —
only curved coordinate changes break it. The **difference** of two connections is
always a tensor.

*From* [2.5](lessons/02-05-covectors-cotangent-space.md), [3.1](lessons/03-01-tensors-multilinear-maps.md), [4.1](lessons/04-01-covariant-derivative-christoffel.md)

### Form algebra

| Fact | Statement |
|---|---|
| dimension | $\dim\Lambda^p = \binom{n}{p}$; $\sum_p\dim\Lambda^p = 2^n$; $\Lambda^p = 0$ for $p > n$; $\dim\Lambda^n = 1$ |
| basis | $\{dx^{i_1}\wedge\cdots\wedge dx^{i_p} : i_1 < \cdots < i_p\}$ |
| graded commutation | $\alpha\wedge\beta = (-1)^{pq}\beta\wedge\alpha$; odd-degree forms square to zero |
| repeats die | any term containing a repeated $dx^i$ is $0$ |
| evaluation | $(\alpha^1\wedge\cdots\wedge\alpha^p)(v_1,\ldots,v_p) = \det[\alpha^i(v_j)]$ |
| dependence test | $\alpha^1\wedge\cdots\wedge\alpha^p = 0$ ⟺ the $\alpha^i$ are linearly dependent |

Working rule for a hand computation: expand bilinearly, delete every term with a
repeated factor, then sort each surviving term into increasing index order, paying one
minus sign per transposition.

*From* [3.2](lessons/03-02-differential-forms-wedge-product.md)

### The exterior derivative as grad, curl, and div

In $\mathbb{R}^3$ (and only in $\mathbb{R}^3$, where $\Lambda^2 \cong \Lambda^1$) the one
operator $d$ wears three familiar faces:

| Input | $d$ gives | Classical name |
|---|---|---|
| $0$-form $f$ | $f_x\,dx + f_y\,dy + f_z\,dz$ | $\operatorname{grad}f$ |
| $1$-form $P\,dx + Q\,dy + R\,dz$ | $(R_y-Q_z)\,dy\wedge dz + (P_z-R_x)\,dz\wedge dx + (Q_x-P_y)\,dx\wedge dy$ | $\operatorname{curl}$ |
| $2$-form | $(\operatorname{div}\mathbf F)\,dx\wedge dy\wedge dz$ | $\operatorname{div}$ |

And the two vector-calculus "coincidences" are one identity:

$$d^2 = 0 \quad\Longleftrightarrow\quad \operatorname{curl}\operatorname{grad} = 0 \ \text{ and } \ \operatorname{div}\operatorname{curl} = 0$$

both holding for the same reason — mixed partials commute.

**The standing counterexample.** On the punctured plane the angle form

$$\omega = d\theta = \frac{-y\,dx + x\,dy}{x^2+y^2}$$

is closed but **not** exact; $\oint\omega = 2\pi$ around the origin. Its failure is the
hole, and that is what closed-mod-exact detects.

*From* [3.3](lessons/03-03-exterior-derivative.md), [3.4](lessons/03-04-integration-on-manifolds.md)

### Generalized Stokes theorem

$$\int_M d\omega = \int_{\partial M}\omega$$

**In one sentence:** the integral of a derivative over a region equals the original
integrated over that region's boundary. $M$ oriented with boundary, $\omega$ a smooth
compactly supported $(n-1)$-form, $\partial M$ carrying the induced
("outward-normal-first") orientation.

| $n$ | $\omega$ | Classical face |
|---|---|---|
| $1$ | $0$-form $f$ on $[a,b]$ | $\int_a^b f'\,dx = f(b) - f(a)$ — FTC |
| $2$ | $1$-form $P\,dx + Q\,dy$ | $\iint_M(Q_x - P_y)\,dA = \oint_{\partial M}P\,dx + Q\,dy$ — Green |
| surface in $\mathbb{R}^3$ | $1$-form | $\iint_S(\nabla\times\mathbf F)\cdot d\mathbf A = \oint_{\partial S}\mathbf F\cdot d\mathbf r$ — Kelvin–Stokes |
| $3$ | $2$-form | $\iiint_V(\nabla\cdot\mathbf F)\,dV = \oiint_{\partial V}\mathbf F\cdot d\mathbf A$ — divergence theorem |

The structural pairing is $d \leftrightarrow \partial$ with $d^2 = 0$ mirroring
$\partial\partial = \varnothing$ (a boundary has no boundary). Handy corollary:
$\text{Area} = \tfrac12\oint(x\,dy - y\,dx) = \oint x\,dy$.

*From* [3.5](lessons/03-05-generalized-stokes-theorem.md)

### Hodge star

Used once in this course — in Maxwell's $d\star F = J$ ([5.4](lessons/05-04-fiber-bundles-connections.md)) — and defined nowhere in
the lessons, so here it is. On an **oriented manifold with a metric**, the Hodge star
sends a $p$-form to the $(n-p)$-form representing its orthogonal complement, scaled by
the volume element:

$$\star: \Lambda^p \to \Lambda^{n-p}, \qquad \alpha\wedge\star\beta = \langle\alpha,\beta\rangle\,\mathrm{vol}$$

In Euclidean $\mathbb{R}^3$: $\star\,dx = dy\wedge dz$, $\star\,dy = dz\wedge dx$,
$\star\,dz = dx\wedge dy$, $\star 1 = dx\wedge dy\wedge dz$. It is the reason
"$1$-forms and $2$-forms both look like vector fields in 3D," and it is the one place
Maxwell's equations need the metric — $dF = 0$ does not.

### Christoffel symbols of the standard metrics

Derive with $\Gamma^k_{ij} = \tfrac12 g^{kl}(\partial_i g_{jl} + \partial_j g_{il} - \partial_l g_{ij})$; these are the ones this course reuses constantly.

| Space | Metric | Nonzero $\Gamma$ (all others $0$) |
|---|---|---|
| $\mathbb{R}^n$, Cartesian | $\delta_{ij}$ | none — $\nabla$ reduces to $\partial$ |
| plane, polar | $dr^2 + r^2 d\theta^2$ | $\Gamma^r_{\theta\theta} = -r$, $\ \Gamma^\theta_{r\theta} = \Gamma^\theta_{\theta r} = \tfrac1r$ |
| unit sphere | $d\theta^2 + \sin^2\theta\,d\phi^2$ | $\Gamma^\theta_{\phi\phi} = -\sin\theta\cos\theta$, $\ \Gamma^\phi_{\theta\phi} = \Gamma^\phi_{\phi\theta} = \cot\theta$ |
| surface of revolution | $dr^2 + f(r)^2 d\theta^2$ | $\Gamma^r_{\theta\theta} = -ff'$, $\ \Gamma^\theta_{r\theta} = \Gamma^\theta_{\theta r} = \dfrac{f'}{f}$ |

Setting $f(r) = r$ recovers the plane; $f(r) = \sin r$ recovers the unit sphere.
Sign check: the polar $\Gamma^r_{\theta\theta} = -r$ must come out **negative** (it is
the centripetal term, pointing inward).

*From* [4.1](lessons/04-01-covariant-derivative-christoffel.md), [5.2](lessons/05-02-levi-civita-connection.md)

### Covariant differentiation and curvature — the computational chain

$$\text{metric} \ \xrightarrow{\ \tfrac12 g^{kl}(\partial g + \partial g - \partial g)\ } \ \Gamma \ \xrightarrow{\ \partial\Gamma + \Gamma\Gamma\ } \ R^\rho{}_{\sigma\mu\nu} \ \xrightarrow{\ \text{contract}\ } \ R_{\mu\nu} \ \xrightarrow{\ g^{\mu\nu}\ } \ R$$

| Object | Formula |
|---|---|
| covariant derivative | $\nabla_i Y^k = \partial_i Y^k + \Gamma^k_{ij}Y^j$ |
| parallel transport | $\dot V^k + \Gamma^k_{ij}\dot\gamma^i V^j = 0$ |
| geodesic equation | $\ddot x^k + \Gamma^k_{ij}\dot x^i\dot x^j = 0$ (affine parameter) |
| Riemann | $R^\rho{}_{\sigma\mu\nu} = \partial_\mu\Gamma^\rho_{\nu\sigma} - \partial_\nu\Gamma^\rho_{\mu\sigma} + \Gamma^\rho_{\mu\lambda}\Gamma^\lambda_{\nu\sigma} - \Gamma^\rho_{\nu\lambda}\Gamma^\lambda_{\mu\sigma}$ |
| Ricci / scalar / Einstein | $R_{\mu\nu} = R^\lambda{}_{\mu\lambda\nu}$, $\ R = g^{\mu\nu}R_{\mu\nu}$, $\ G_{\mu\nu} = R_{\mu\nu} - \tfrac12 R g_{\mu\nu}$ |
| geodesic deviation | $\dfrac{D^2\xi^\mu}{d\tau^2} = -R^\mu{}_{\nu\rho\sigma}u^\nu\xi^\rho u^\sigma$ |
| Einstein field equation | $G_{\mu\nu} = 8\pi G\,T_{\mu\nu}$ (the destination, not derived here) |

*From* [4.1](lessons/04-01-covariant-derivative-christoffel.md), [4.2](lessons/04-02-parallel-transport.md), [4.3](lessons/04-03-geodesics.md), [4.4](lessons/04-04-riemann-curvature-tensor.md), [4.5](lessons/04-05-ricci-scalar-curvature.md)

### Riemann tensor symmetries

Lower the first index, $R_{\rho\sigma\mu\nu} = g_{\rho\lambda}R^\lambda{}_{\sigma\mu\nu}$. Then

$$R_{\rho\sigma\mu\nu} = -R_{\rho\sigma\nu\mu} = -R_{\sigma\rho\mu\nu}, \qquad R_{\rho\sigma\mu\nu} = R_{\mu\nu\rho\sigma}, \qquad R_{\rho[\sigma\mu\nu]} = 0$$

(antisymmetric in each pair, symmetric under swapping the pairs, first Bianchi
identity). These cut $n^4$ components down to $n^2(n^2-1)/12$.

*From* [4.4](lessons/04-04-riemann-curvature-tensor.md)

### Symmetry, Killing vectors, and conservation

| Statement | Formula |
|---|---|
| Killing condition | $\mathcal{L}_\xi g = 0 \iff \nabla_\mu\xi_\nu + \nabla_\nu\xi_\mu = 0$ |
| shortcut | if $g_{\mu\nu}$ does not depend on the coordinate $x^a$, then $\partial_a$ is Killing |
| conserved along geodesics | $\xi_\mu u^\mu = \text{const}$, with $\xi$ **lowered** ($\xi_\mu = g_{\mu\nu}\xi^\nu$) |
| flat plane | three Killing fields: $\partial_x$, $\partial_y$, $-y\partial_x + x\partial_y$ (linear and angular momentum) |
| unit sphere | $\partial_\phi$ is Killing; $\partial_\theta$ is **not**; conserved $\sin^2\theta\,\dot\phi$ |

This is Noether's theorem done geometrically: one continuous symmetry of the metric,
one constant of motion along every geodesic.

*From* [5.3](lessons/05-03-lie-derivative-killing-vectors.md)

### The gauge dictionary

| Geometry | Gauge theory (physics) |
|---|---|
| choice of frame / local section | a **gauge** |
| change of frame | a **gauge transformation** |
| connection ($\Gamma$ on $TM$; $A$ on an internal bundle) | a **gauge field** (e.g. the EM potential $A_\mu$) |
| covariant derivative $\nabla = \partial + \Gamma$ | $D_\mu = \partial_\mu + iqA_\mu$ |
| curvature of the connection | the **field strength** ($R$ for gravity, $F_{\mu\nu}$ for EM) |
| bundle twist (no global section) | topological charge (e.g. monopole quantization) |

$$F = dA + A\wedge A, \qquad F \xrightarrow{\ U(1)\ } dA, \qquad F_{\mu\nu} = \partial_\mu A_\nu - \partial_\nu A_\mu$$

$$dF = d(dA) = 0 \ \text{(two of Maxwell's equations, for free from } d^2 = 0), \qquad d\star F = J \ \text{(the other two)}$$

*From* [5.4](lessons/05-04-fiber-bundles-connections.md)

## Assumed, not taught here

This is a Tier 1 course, so the list is short — but each of these is genuinely used
without being derived, and this is where to go for the why.

| Fact | Where it's taught |
|---|---|
| Mixed partials commute (Clairaut) — behind $\mathrm{II}$ being symmetric, $d^2 = 0$, and the exactness test | [calc-refresher reference card](../calc-refresher/reference.md#mixed-partials-commute-clairaut), used in [calc-refresher 4.2](../calc-refresher/lessons/04-02-multivariable-optimization-lagrange.md) |
| Cross product, and $\lvert u\times v\rvert$ as the area of the spanned parallelogram | [calc-refresher 5.1](../calc-refresher/lessons/05-01-vector-fields-div-curl.md); the determinant it comes from is [linalg-refresher 2.3](../linalg-refresher/lessons/02-03-determinants.md) |
| Determinant and trace as the rotation-invariants of a $2\times2$ operator ($K = \det S$, $2H = \operatorname{tr}S$) | [linalg-refresher 2.3](../linalg-refresher/lessons/02-03-determinants.md) |
| Eigenvalues and eigenvectors (principal curvatures and directions) | [linalg-refresher 3.1](../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md) |
| A self-adjoint operator has real eigenvalues and orthogonal eigenvectors — why $k_1, k_2$ exist and are real | [linalg-refresher 5.1](../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md) |
| Inner products, orthonormal bases, angle from a dot product | [linalg-refresher 4.1](../linalg-refresher/lessons/04-01-inner-products-orthogonality.md) |
| Basis, dimension, and linear independence (used constantly for $T_pM$ and $\Lambda^p$) | [linalg-refresher 1.2](../linalg-refresher/lessons/01-02-linear-independence-basis-dimension.md) |
| The dual space $V^*$ and the dual basis (the cotangent space is a special case) | [functional-analysis 3.2](../functional-analysis/lessons/03-02-dual-spaces-hahn-banach.md) |
| Jacobian and the change-of-variables formula (the whole reason forms are the right integrands) | [calc-refresher 4.3](../calc-refresher/lessons/04-03-multiple-integrals.md) |
| Line integrals and flux, which Stokes generalizes | [calc-refresher 5.2](../calc-refresher/lessons/05-02-line-integrals-and-flux.md) |
| Classical Green / Kelvin–Stokes / divergence theorems | [calc-refresher 5.3](../calc-refresher/lessons/05-03-green-stokes-divergence.md) |
| Taylor expansion (used to prove every derivation on $\mathbb{R}^n$ is an ordinary vector) | [calc-refresher 1.3](../calc-refresher/lessons/01-03-linearization-and-taylor.md) |
| Existence and uniqueness for first-order ODE systems — what makes integral curves, parallel transport, and geodesics well-posed | [ode-refresher 1.1](../ode-refresher/lessons/01-01-odes-solutions-slope-fields.md) |
| Euler–Lagrange equations / calculus of variations (geodesics as extremals of length or energy) | [analytical-mechanics 1.1](../analytical-mechanics/lessons/01-01-calculus-of-variations.md) |
| Topological space, open sets, continuity, homeomorphism | [topology 1.3](../topology/lessons/01-03-topological-spaces-axioms.md), [topology 2.1](../topology/lessons/02-01-continuity-and-homeomorphisms.md) |
| Hausdorff and second-countable — the fine print in the manifold definition | [topology 5.1](../topology/lessons/05-01-separation-axioms-hausdorff.md), [topology 5.3](../topology/lessons/05-03-countability-separability.md) |
| Quotient topology (the torus as $\mathbb{R}^2/\mathbb{Z}^2$) | [topology 2.4](../topology/lessons/02-04-quotient-topology.md) |
| Contractible / homotopy — the hypothesis of the Poincaré lemma | [topology 6.1](../topology/lessons/06-01-homotopy-of-paths.md) |
| Euler characteristic and Poincaré–Hopf (the hairy-ball argument in 5.4) | [algebraic-topology 4.3](../algebraic-topology/lessons/04-03-degree-applications.md) |
| Cohomology, i.e. what "closed mod exact" becomes globally (de Rham is only name-dropped here) | [algebraic-topology 4.4](../algebraic-topology/lessons/04-04-cohomology-cup-products.md) |
| Lie groups and Lie algebras — $SO(n)$, $SU(n)$ as manifolds, and the fiber of a principal bundle | [representation-theory 4.1](../representation-theory/lessons/04-01-lie-groups.md) |

The **Hodge star** is used once (in $d\star F = J$) and no course in this library
defines it, so it is defined above under [Hodge star](#hodge-star) rather than listed here.

## Pitfalls

### Curves and surfaces

- $\tau = 0$ means **planar**, not straight — a circle has zero torsion and plenty of curvature. Bending and twisting are independent dials. *([1.1](lessons/01-01-curves-arclength-frenet.md))*
- $N$ is not "up" or "outward" by convention; it points wherever the curve is *turning*, the concave side. On a helix that is toward the axis. *([1.1](lessons/01-01-curves-arclength-frenet.md))*
- The clean $T' = \kappa N$ formulas need unit speed, but $\kappa$ and $\tau$ are geometric. For a general parametrization use the $\gamma'\times\gamma''$ formulas rather than forcing a reparametrization you can't compute. *([1.1](lessons/01-01-curves-arclength-frenet.md))*
- $E, F, G$ depend on the **parametrization**, not only the surface — the cylinder gets $E = 1$ only with the arc-length coordinate. The geometry they encode is parametrization-independent; the coefficients are bookkeeping. *([1.2](lessons/01-02-surfaces-first-fundamental-form.md))*
- Don't drop the cross term $2F\,du\,dv$ in $\mathrm{I}$; it vanishes only for an orthogonal grid. *([1.2](lessons/01-02-surfaces-first-fundamental-form.md))*
- Normal curvature $k_n$ is only the piece of a curve's own $\kappa$ that lies along $N$; the rest is geodesic curvature, and curves with zero geodesic curvature are the geodesics. *([1.3](lessons/01-03-gauss-map-second-fundamental-form.md))*

### Intrinsic versus extrinsic

- "Curved in space" does **not** imply $K \neq 0$: the cylinder and cone are visibly bent yet intrinsically flat. Only *both* directions curving at once gives $K \neq 0$. *([1.4](lessons/01-04-gaussian-curvature-theorema-egregium.md), [4.2](lessons/04-02-parallel-transport.md))*
- The same ruler $\mathrm{I}$ does not imply the same shape: plane and cylinder share $\mathrm{I}$ and differ in $\mathrm{II}$. $\mathrm{I}$ is intrinsic, $\mathrm{II}$ is not. *([1.2](lessons/01-02-surfaces-first-fundamental-form.md), [1.3](lessons/01-03-gauss-map-second-fundamental-form.md))*
- The sign of an individual principal curvature flips with the normal; only $K = k_1k_2$ and other even combinations are orientation-independent. Fix a normal and keep it. *([1.3](lessons/01-03-gauss-map-second-fundamental-form.md))*
- Don't swap $K$ and $H$: product vs average, intrinsic vs extrinsic, curvature vs soap film. *([1.4](lessons/01-04-gaussian-curvature-theorema-egregium.md))*
- Holonomy and $R$ detect **intrinsic** curvature only. A cylinder's visible bending is invisible to both. *([4.2](lessons/04-02-parallel-transport.md), [4.4](lessons/04-04-riemann-curvature-tensor.md))*

### Manifolds and maps

- A manifold is not its coordinates. Any claim about $M$ must be chart-independent (or provably the same in every chart) to mean anything. *([2.1](lessons/02-01-charts-atlases-smooth-manifolds.md))*
- Insisting on one global chart is what breaks — $S^1$, $S^2$, and the torus all need at least two. Also, $\theta\in[0,2\pi)$ is not a chart: the image isn't open and the inverse isn't continuous. *([2.1](lessons/02-01-charts-atlases-smooth-manifolds.md))*
- Smoothness checked in charts does **not** depend on the charts — that is precisely what smooth transition maps buy you. *([2.2](lessons/02-02-smooth-maps-diffeomorphisms.md))*
- Smooth bijection is not enough for a diffeomorphism; the inverse must be smooth too ($x^3$ on $\mathbb{R}$). *([2.2](lessons/02-02-smooth-maps-diffeomorphisms.md))*
- The regular value theorem needs the value to be **regular**; at a critical value the level set can have a corner ($x^2 - y^2 = 0$). *([2.2](lessons/02-02-smooth-maps-diffeomorphisms.md))*

### Vectors, covectors, and indices

- A tangent vector is not an arrow in a surrounding space — there is none. It is a derivation, or a class of curves. *([2.3](lessons/02-03-tangent-space.md))*
- $\partial/\partial x^i$ depends on the **whole chart**, not just the $i$-th coordinate: changing the others changes what "hold them fixed" means. *([2.3](lessons/02-03-tangent-space.md))*
- The Leibniz rule is the *defining* restriction, not a freebie — plenty of linear maps on $C^\infty$ are not derivations. *([2.3](lessons/02-03-tangent-space.md))*
- The gradient is a **covector**. Turning $df$ into an actual vector requires a metric; without one, $\nabla f$ has level sets but no direction. Draw a covector as a stack of planes, not an arrow. *([2.5](lessons/02-05-covectors-cotangent-space.md), [5.1](lessons/05-01-riemannian-lorentzian-metrics.md))*
- Vectors push **forward**, functions and forms pull **back**. Mixing the directions is the most common early error. *([2.4](lessons/02-04-vector-fields-pushforward.md), [3.4](lessons/03-04-integration-on-manifolds.md))*
- Pushing a whole vector *field* forward needs a diffeomorphism; pointwise on a single vector there is no such worry. *([2.4](lessons/02-04-vector-fields-pushforward.md))*
- Vectors take new-over-old $\partial x'^i/\partial x^j$; covectors old-over-new. If your pairing $\omega_i v^i$ isn't invariant, you swapped them. *([2.5](lessons/02-05-covectors-cotangent-space.md))*
- Not every indexed array is a tensor — $\Gamma^k_{ij}$ is the standing counterexample. Indices are necessary, not sufficient. *([3.1](lessons/03-01-tensors-multilinear-maps.md), [4.1](lessons/04-01-covariant-derivative-christoffel.md))*
- Contraction pairs one **up** with one **down**. Summing $T^{ii}$ is not coordinate-independent without a metric to lower one first. *([3.1](lessons/03-01-tensors-multilinear-maps.md))*
- A matrix is the *components*; the tensor is the operator. Different matrices in different charts can be the same $(1,1)$-tensor. *([3.1](lessons/03-01-tensors-multilinear-maps.md))*

### Forms and integration

- Wedging is graded-anticommutative, not commutative: one-forms anticommute, even-degree forms commute past everything. The $(-1)^{pq}$ is not optional. *([3.2](lessons/03-02-differential-forms-wedge-product.md))*
- Terms with a repeated $dx^i$ are zero; after expanding, sort into increasing index order and pay a sign per swap. *([3.2](lessons/03-02-differential-forms-wedge-product.md))*
- There are no $(n+1)$-forms on an $n$-manifold — which is why $d$ of a top-form is automatically zero. *([3.2](lessons/03-02-differential-forms-wedge-product.md), [3.3](lessons/03-03-exterior-derivative.md))*
- Don't lose the sign in graded Leibniz: $d(\alpha\wedge\beta) = d\alpha\wedge\beta + (-1)^{\deg\alpha}\alpha\wedge d\beta$. *([3.3](lessons/03-03-exterior-derivative.md))*
- Closed implies exact only **locally** (Poincaré). Globally the punctured plane's angle form is the counterexample, and the failure is a topological invariant. *([3.3](lessons/03-03-exterior-derivative.md), [3.4](lessons/03-04-integration-on-manifolds.md))*
- Curl is a 3D accident that needs the cross product; $d$ is the honest operator in every dimension. *([3.3](lessons/03-03-exterior-derivative.md))*
- You integrate **forms**, not functions: $\int_M f$ has no coordinate-independent meaning until a volume form (from a metric) converts $f$ to $f\,\mathrm{dvol}$. *([3.4](lessons/03-04-integration-on-manifolds.md))*
- Orientation is part of the statement: reverse it and every integral, and every classical theorem, flips sign. A non-orientable manifold can't be integrated over at all. *([3.4](lessons/03-04-integration-on-manifolds.md), [3.5](lessons/03-05-generalized-stokes-theorem.md))*
- Stokes needs $\omega$ smooth on **all** of $M$; enclose a puncture and it fails (which is exactly how a nonzero loop integral detects the hole). *([3.5](lessons/03-05-generalized-stokes-theorem.md))*
- A boundary has no boundary: $\partial(\partial M) = \varnothing$, the geometric twin of $d^2 = 0$. *([3.5](lessons/03-05-generalized-stokes-theorem.md))*

### Connections, geodesics, and curvature

- Nonzero $\Gamma^k_{ij}$ does **not** mean curved space — flat $\mathbb{R}^2$ in polar coordinates has plenty. Only $R$, built from $\Gamma$ *and its derivatives*, detects real curvature, and the cancellation between the $\partial\Gamma$ and $\Gamma\Gamma$ terms is the whole point. *([4.1](lessons/04-01-covariant-derivative-christoffel.md), [4.4](lessons/04-04-riemann-curvature-tensor.md))*
- $\Gamma$ is not a tensor, so "$\Gamma = 0$ here" does not travel between frames. At any single point you can always choose normal coordinates making $\Gamma = 0$ *there*. *([4.1](lessons/04-01-covariant-derivative-christoffel.md), [4.5](lessons/04-05-ricci-scalar-curvature.md))*
- In $\Gamma^k_{ij}$, the first lower index is the direction you move, the second the vector being differentiated. Levi-Civita makes them symmetric; a general connection need not. *([4.1](lessons/04-01-covariant-derivative-christoffel.md))*
- "Parallel" does not mean constant components — off Cartesian coordinates the components *must* change to keep the vector geometrically fixed. *([4.2](lessons/04-02-parallel-transport.md))*
- Transport is path-dependent on any curved region, and the loop result is a **rotation**, not a shrinking. That path-dependence is the definition of curvature, not a technicality. *([4.2](lessons/04-02-parallel-transport.md))*
- Geodesics are only **locally** shortest — the long way around a great circle is still a geodesic. Stationary length, not minimal. *([4.3](lessons/04-03-geodesics.md))*
- The clean geodesic equation assumes an **affine** (constant-speed) parameter; a non-affine reparametrization adds a $\lambda(t)\dot x^k$ term. *([4.3](lessons/04-03-geodesics.md))*
- A geodesic need not look straight in your coordinates — "straight" means zero *covariant* acceleration. *([4.3](lessons/04-03-geodesics.md))*
- Index order and sign conventions for $R^\rho{}_{\sigma\mu\nu}$ vary between books; fix one and check it against the sphere giving $K = +1$. Don't try to track $n^4$ components — the symmetries leave $n^2(n^2-1)/12$. *([4.4](lessons/04-04-riemann-curvature-tensor.md))*
- Ricci is **not** all of Riemann above 3 dimensions — the Weyl tensor is the leftover, and it is what carries gravitational waves through vacuum. *([4.5](lessons/04-05-ricci-scalar-curvature.md))*
- $R = g^{\mu\nu}R_{\mu\nu}$ needs the inverse metric; you cannot make a scalar from $R_{\mu\nu}$ alone. Contract the *first and third* indices for Ricci — another pair gives zero or a sign flip. *([4.5](lessons/04-05-ricci-scalar-curvature.md))*

### Metrics, symmetry, and bundles

- Not every metric is positive-definite. Under a Lorentzian metric a nonzero vector can have zero or negative "length squared," and proper time — not naive length — is the physical quantity. *([5.1](lessons/05-01-riemannian-lorentzian-metrics.md))*
- Raising and lowering uses the **actual** metric components, not $\delta_{\mu\nu}$. Dropping the $\sin^2\theta$ (or any off-diagonal term) is the classic slip. *([5.1](lessons/05-01-riemannian-lorentzian-metrics.md), [5.3](lessons/05-03-lie-derivative-killing-vectors.md))*
- Metric compatibility *alone* doesn't pin down a connection — torsion-freeness is the other half of the uniqueness argument. *([5.2](lessons/05-02-levi-civita-connection.md))*
- In the Christoffel formula, the two indices matching the lower Christoffel slots get $+$ and the contracted index gets $-$. Getting the minus on the wrong term flips your connection; check against $\Gamma^r_{\theta\theta} = -r$. *([5.2](lessons/05-02-levi-civita-connection.md))*
- $\mathcal{L}_X$ and $\nabla_X$ agree on functions and on nothing else: the Lie derivative needs no connection, the covariant derivative does. *([5.3](lessons/05-03-lie-derivative-killing-vectors.md))*
- A generic metric has **no** Killing vectors. Symmetry is special; don't assume one exists because the coordinates look tidy. *([5.3](lessons/05-03-lie-derivative-killing-vectors.md))*
- Locally trivial does not mean globally trivial — the Möbius band and $TS^2$ are products only patch by patch, and the twist is physical. *([5.4](lessons/05-04-fiber-bundles-connections.md))*
- $F = dA$ is the **abelian** shortcut; for nonabelian gauge groups the $A\wedge A$ term is exactly the self-interaction of the force carriers. *([5.4](lessons/05-04-fiber-bundles-connections.md))*
