# Relativity (SR + GR) · Lesson 4.3: The metric, proper time, and the line element

> ⏱ ~15 min · Module 4: The geometry of curved spacetime · Builds on: [4.1 Manifolds & tangent spaces](#/lesson/relativity/04-01-manifolds-tangent-spaces.md), [4.2 Tensors on a manifold](#/lesson/relativity/04-02-tensors-on-manifolds.md), [2.1 Index notation & the Minkowski metric](#/lesson/relativity/02-01-index-notation-minkowski-metric.md), [1.4 The invariant interval](#/lesson/relativity/01-04-spacetime-interval-causality.md) · Unlocks: covariant derivatives (4.4), geodesics (4.5)

## Why this matters

In special relativity the metric was a fixed table of numbers, $\eta_{\mu\nu}=\mathrm{diag}(-1,+1,+1,+1)$, the same at every event. That single constant object carried *all* of the physics of Module 1 — distances, times, the light cone, causality. The one idea that turns special relativity into **general** relativity is stunningly small: let that table vary from point to point. Write $g_{\mu\nu}(x)$ instead of $\eta_{\mu\nu}$, and you have a metric that can bend. Everything geometric — how far apart two points are, how much a clock ages, what "straight" means, whether space is curved — is read off this one field. And here is the punchline of the whole course, stated once so you can hold it through everything that follows: **the metric $g_{\mu\nu}(x)$ is the gravitational field.** There is no separate "gravity" sitting on top of spacetime; gravity *is* the shape of $g$.

## The idea

Imagine you are a surveyor who can only ever take one kind of measurement: hand someone two infinitesimally-close stakes and ask "how far apart are these?" That's it. Remarkably, if you can answer that question at *every* point and in *every* direction, you know the entire geometry — total lengths (add up the little pieces along a path), angles (compare two directions at a point), areas, whether the surface is flat or curved, everything. The device that answers the little-distance question is the **metric**.

Concretely, at each point $g_{\mu\nu}$ is a small symmetric matrix that eats two infinitesimal displacements and returns their "dot product." Feed it one displacement twice and it returns that step's squared length — the **line element** $ds^2$. On a flat plane with ordinary axes the answer is boring: $ds^2 = dx^2 + dy^2$, Pythagoras. But on a sphere, or near a star, the coefficients depend on where you are, and the geometry is genuinely different.

Two warnings live inside this one idea, and they are the two most common beginner errors. First: **the coefficients of $g$ looking complicated does not mean the space is curved** — you can make flat space look complicated just by using polar coordinates. Curvature is what's left after you strip away the coordinate choice (Problem 3, and the real machinery in [4.6](#/lesson/relativity/04-06-riemann-geodesic-deviation.md)). Second: in spacetime, "little distance" splits by sign into "little time a clock feels" (timelike) and "little ruler-length" (spacelike) — the same minus sign from [1.4](#/lesson/relativity/01-04-spacetime-interval-causality.md), now allowed to vary.

## The formal version

**The metric tensor.** On a manifold with coordinates $x^\mu$, the metric is a symmetric rank-$(0,2)$ tensor field $g_{\mu\nu}(x)=g_{\nu\mu}(x)$ (the tensor-on-a-manifold object of [4.2](#/lesson/relativity/04-02-tensors-on-manifolds.md)), non-degenerate at every point. **Signature $(-,+,+,+)$** throughout, and I keep $c$ and $G$ explicit (no unit-setting in this lesson). In words: at each point $g$ is a little symmetric matrix that turns pairs of directions into numbers — the local ruler-and-protractor.

**The line element.** Contract $g$ with an infinitesimal coordinate displacement $dx^\mu$ twice:

$$ds^2 = g_{\mu\nu}(x)\,dx^\mu\,dx^\nu .$$

In words: $ds^2$ is the invariant squared "length" of the tiny step $dx^\mu$ — the curved-spacetime generalization of the Minkowski interval $\eta_{\mu\nu}dx^\mu dx^\nu$. Because it's a full contraction of a tensor with displacements, its value is the *same in every coordinate system*, even though the components $g_{\mu\nu}$ and $dx^\mu$ are not. That coordinate-independence is the entire point: $ds^2$ is a fact about the geometry, not about your chart.

**Reading physics off $ds^2$.** Along a curve, the sign of $ds^2$ classifies the step exactly as in flat space:

- **Timelike** ($ds^2<0$): the step a massive particle can take. The clock it carries measures **proper time**
$$d\tau^2 = -\frac{ds^2}{c^2} = -\frac{1}{c^2}\,g_{\mu\nu}\,dx^\mu dx^\nu ,\qquad \tau = \int d\tau = \frac{1}{c}\int\sqrt{-g_{\mu\nu}\,dx^\mu dx^\nu}.$$
In words: $\tau$ is the time actually elapsed on a clock carried along the worldline — the curved-space version of the proper time of [1.4](#/lesson/relativity/01-04-spacetime-interval-causality.md), and what "a clock ticks" physically means (cf. [1.3](#/lesson/relativity/01-03-dilation-contraction-paradoxes.md), [1.5](#/lesson/relativity/01-05-four-vectors-momentum.md)).

- **Spacelike** ($ds^2>0$): the step a ruler can lay down. **Proper length** along a spacelike curve is $L=\int\sqrt{g_{\mu\nu}\,dx^\mu dx^\nu}$ — the physically measured distance.

- **Null** ($ds^2=0$): the path of light. The local light cone is still there; $g$ just tilts and opens it from point to point.

**Angles, lengths, times — all from $g$.** Two directions $U^\mu,V^\mu$ at a point make the angle
$$\cos\theta = \frac{g_{\mu\nu}U^\mu V^\nu}{\sqrt{g_{\alpha\beta}U^\alpha U^\beta}\,\sqrt{g_{\rho\sigma}V^\rho V^\sigma}},$$
and $g$ (with its inverse $g^{\mu\nu}$, defined by $g^{\mu\nu}g_{\nu\lambda}=\delta^\mu{}_\lambda$) raises and lowers indices exactly as $\eta$ did in [2.1](#/lesson/relativity/02-01-index-notation-minkowski-metric.md): $V_\mu=g_{\mu\nu}V^\nu$, $V^\mu=g^{\mu\nu}V_\nu$. In words: distances, times, and angles are *all* different questions asked of the same object $g$.

**Local flatness — why we can still trust special relativity.** At any single point $p$ you can choose coordinates in which $g_{\mu\nu}(p)=\eta_{\mu\nu}$ and $\partial_\lambda g_{\mu\nu}(p)=0$ — a **local inertial frame** (the freely-falling frame; [4.2](#/lesson/relativity/04-02-tensors-on-manifolds.md), and physically [5.1](#/lesson/relativity/05-01-equivalence-principle.md)). In words: zoom in far enough and every metric looks like flat Minkowski space, the way any smooth surface looks like its tangent plane up close. Curvature is the part you *cannot* remove — it hides in the *second* derivatives of $g$, not the first.

**$g_{00}$ carries gravitational time dilation.** For a clock sitting still ($dx^i=0$), only $g_{00}$ survives: $d\tau = \sqrt{-g_{00}}\;dt$. In words: the time–time component of the metric directly sets how fast a stationary clock ticks relative to coordinate time — so wherever $-g_{00}<1$, clocks run slow. This is the whole mechanism of gravitational time dilation and redshift, developed in [5.5](#/lesson/relativity/05-05-newtonian-limit-redshift.md); Example 2 and Problem 2 give you a first taste.

## Picture

![Left: a flat plane with a square Cartesian grid and metric g = delta (identity), line element ds^2 = dx^2 + dy^2, curvature zero. Right: a 2-sphere of radius a drawn with latitude and longitude lines and one curved surface cell, line element ds^2 = a^2(dtheta^2 + sin^2 theta dphi^2), genuinely curved — no chart straightens it.](assets/04-03-fig1.svg)

Same kind of object — a symmetric matrix $g_{\mu\nu}$ at every point — two different worlds. On the plane the grid can be straightened out everywhere at once ($g=\delta_{ij}$, flat). On the sphere the coefficient $a^2\sin^2\theta$ shrinks the circles of latitude toward the poles, and *no* coordinate change can flatten the whole surface — that failure is curvature.

## Worked examples

**Example 1 (mechanical — same geometry, three coordinate outfits).** The flat Euclidean plane, written three ways:

$$\underbrace{ds^2 = dx^2 + dy^2}_{\text{Cartesian}}, \qquad \underbrace{ds^2 = dr^2 + r^2\,d\phi^2}_{\text{polar}}, \qquad \underbrace{ds^2 = a^2\big(d\theta^2 + \sin^2\theta\,d\phi^2\big)}_{\text{the 2-sphere, radius }a}.$$

The first two are the *same flat plane* — in polar coordinates $g_{\phi\phi}=r^2$ depends on position, yet the geometry is dead flat (that $r^2$ is pure coordinate artifact; you prove it in Problem 3). The third looks almost identical to the polar form — swap $r\to\theta$ and the coefficient $r^2\to a^2\sin^2\theta$ — but it is a *genuinely curved* surface. How can nearly-identical line elements be flat and curved? Because curvature lives in how the coefficients *vary*, not in whether they vary at all: on the plane the metric flattens under a coordinate change, on the sphere it never does. **Coefficients complicated $\neq$ space curved.** Reading that difference off correctly is the skill Module 4 is building toward ([4.6](#/lesson/relativity/04-06-riemann-geodesic-deviation.md)).

**Example 2 (why you'd care — a first look at Schwarzschild).** Outside a spherical mass $M$, the vacuum Einstein equations give the **Schwarzschild line element** (derived in [6.1](#/lesson/relativity/06-01-schwarzschild-solution.md); here we only *read* it):

$$ds^2 = -\Big(1-\frac{r_s}{r}\Big)c^2\,dt^2 + \Big(1-\frac{r_s}{r}\Big)^{-1}dr^2 + r^2\,d\Omega^2, \qquad r_s = \frac{2GM}{c^2},$$

where $d\Omega^2 = d\theta^2 + \sin^2\theta\,d\phi^2$ is the round-sphere piece and $r_s$ is the **Schwarzschild radius**. You don't need to solve anything to extract physics — just look at $g_{00}=-\big(1-r_s/r\big)$. A clock held at rest at radius $r$ ($dr=d\theta=d\phi=0$) ages

$$d\tau = \sqrt{-g_{00}}\;dt = \sqrt{1-\frac{r_s}{r}}\;\,dt .$$

Since $\sqrt{1-r_s/r}<1$, the clock ticks **slower** than the far-away coordinate time $t$ — and the closer to the mass (smaller $r$), the slower. That is gravitational time dilation, read straight off one metric component, no field equations required. As $r\to r_s$ the factor $\to 0$: clocks freeze at the horizon, the seed of black-hole physics ([6.1](#/lesson/relativity/06-01-schwarzschild-solution.md), and the astrophysics in [black holes](#/lesson/astrophysics/04-03-black-holes-astrophysics.md)). Far away ($r\gg r_s$) it $\to 1$ and Minkowski is recovered. **The metric is the gravitational field**: the "force" you feel is $g$ declining to be $\eta$.

## Watch out

- **You might think a position-dependent metric means curved space.** No — Example 1's polar plane has $g_{\phi\phi}=r^2$ and is perfectly flat. Varying components can be a pure coordinate effect; curvature is the coordinate-*independent* residue that survives every relabeling. Only the Riemann tensor ([4.6](#/lesson/relativity/04-06-riemann-geodesic-deviation.md)) settles it — never eyeball it off the metric.
- **You might read "$ds^2$" as the square of a real number $ds$.** As in [1.4](#/lesson/relativity/01-04-spacetime-interval-causality.md), it's one signed symbol: negative for timelike steps. That's the whole reason proper time carries a $-1/c^2$ — you flip the sign so $d\tau^2$ comes out positive along a worldline.
- **You might forget the inverse-metric factor in $g_{rr}$.** In Schwarzschild the radial piece is $\big(1-r_s/r\big)^{-1}dr^2$, not $\big(1-r_s/r\big)\,dr^2$. Time and radius get *reciprocal* factors; swapping them corrupts every length and every horizon statement.
- **You might think local flatness makes gravity disappear.** You can kill $g_{\mu\nu}\to\eta_{\mu\nu}$ and its *first* derivatives at one point (the freely-falling elevator), but not the *second* derivatives — tidal effects survive. Local flatness is why SR works in a small lab, not a proof that spacetime is flat.

## One-liner

> The metric $g_{\mu\nu}(x)$ is the gravitational field: feed it a tiny displacement and it returns $ds^2$, from which every length, angle, proper time, and light cone follows — and $-g_{00}<1$ *is* clocks running slow near mass.

## Problems

For P1, use the 2-sphere of radius $a$: $ds^2 = a^2\big(d\theta^2 + \sin^2\theta\,d\phi^2\big)$, with $\theta\in[0,\pi]$ (colatitude, $0$ at the north pole) and $\phi\in[0,2\pi)$.

**P1 (🟢)** (a) Find the circumference of the circle of constant colatitude $\theta$ (a line of latitude), by integrating $ds$ around it. (b) Find the length of a meridian from the north pole ($\theta=0$) to the south pole ($\theta=\pi$). Check both against your intuition for the equator ($\theta=\pi/2$) and for the whole great circle.

**P2 (🟡)** In the Schwarzschild metric, a clock is held at fixed $r,\theta,\phi$. (a) Show its proper time relates to coordinate time by $d\tau=\sqrt{1-r_s/r}\;dt$. (b) Evaluate the fractional slowdown $1-d\tau/dt$ for a clock hovering at $r=\tfrac{4}{3}r_s$. (c) One clock sits at $r=\tfrac{4}{3}r_s$, another very far away; after the distant clock logs $1$ hour, how much has the close clock logged?

**P3 (🔴, optional)** Show that the plane in polar coordinates, $ds^2 = dr^2 + r^2\,d\phi^2$, is *flat* — i.e. it is Euclidean space in disguise, not a curved surface — by transforming to Cartesian coordinates $x=r\cos\phi,\ y=r\sin\phi$ and recovering $ds^2=dx^2+dy^2$. Explain in one sentence why the position-dependent coefficient $g_{\phi\phi}=r^2$ therefore does *not* signal curvature.

<details>
<summary>Solutions</summary>

**P1** (a) Along a line of constant latitude, $\theta$ is fixed so $d\theta=0$, and the line element reduces to $ds^2 = a^2\sin^2\theta\,d\phi^2$, i.e. $ds = a\sin\theta\,d\phi$ (take the positive root; $\sin\theta\ge0$ on $[0,\pi]$). Integrate $\phi$ once around:
$$C(\theta) = \int_0^{2\pi} a\sin\theta\;d\phi = 2\pi a\sin\theta.$$
Sanity checks: at the equator $\theta=\pi/2$, $C=2\pi a$ — the full great-circle circumference, correct. As $\theta\to0$ or $\pi$ (the poles), $C\to0$ — the latitude circles shrink to points. That shrinking factor $\sin\theta$ is exactly the $g_{\phi\phi}=a^2\sin^2\theta$ coefficient doing its job.

(b) Along a meridian, $\phi$ is fixed so $d\phi=0$, giving $ds = a\,d\theta$. Integrate from pole to pole:
$$L = \int_0^{\pi} a\;d\theta = \pi a.$$
This is half the great-circle circumference $2\pi a$, as it must be — pole to pole is a half turn around the sphere. (Note $L=\pi a$ uses proper length, the geodesic distance *over the surface*, not the straight-line chord through the interior.)

**P2** (a) "Fixed $r,\theta,\phi$" means $dr=d\theta=d\phi=0$, so every term of the Schwarzschild line element drops except the $dt^2$ term:
$$ds^2 = -\Big(1-\frac{r_s}{r}\Big)c^2\,dt^2.$$
This is timelike ($ds^2<0$, since $r>r_s$), so proper time is
$$d\tau^2 = -\frac{ds^2}{c^2} = \Big(1-\frac{r_s}{r}\Big)dt^2 \;\Longrightarrow\; d\tau = \sqrt{1-\frac{r_s}{r}}\;dt.$$
(The $c^2$ cancels cleanly — proper time and coordinate time are both times.)

(b) At $r=\tfrac{4}{3}r_s$: $\dfrac{r_s}{r}=\dfrac{r_s}{\frac43 r_s}=\dfrac34$, so
$$\frac{d\tau}{dt}=\sqrt{1-\tfrac34}=\sqrt{\tfrac14}=\tfrac12.$$
The fractional slowdown is $1-\tfrac12 = \tfrac12 = 50\%$. A clock hovering there runs at *half* the rate of a distant clock.

(c) $d\tau=\tfrac12\,dt$ integrates directly (the factor is constant at fixed $r$): while the far clock logs $\Delta t = 1$ hour, the close clock logs $\Delta\tau = \tfrac12\times 1\text{ hr} = 30$ minutes. It has aged half as much — a real, measured effect of the same kind GPS satellites correct for every day (a far milder version, since Earth has $r\gg r_s$; see [5.5](#/lesson/relativity/05-05-newtonian-limit-redshift.md)).

**P3** Differentiate the coordinate change $x=r\cos\phi,\ y=r\sin\phi$:
$$dx = \cos\phi\,dr - r\sin\phi\,d\phi, \qquad dy = \sin\phi\,dr + r\cos\phi\,d\phi.$$
Square and add:
$$dx^2 = \cos^2\phi\,dr^2 - 2r\cos\phi\sin\phi\,dr\,d\phi + r^2\sin^2\phi\,d\phi^2,$$
$$dy^2 = \sin^2\phi\,dr^2 + 2r\sin\phi\cos\phi\,dr\,d\phi + r^2\cos^2\phi\,d\phi^2.$$
The cross terms $\mp 2r\cos\phi\sin\phi\,dr\,d\phi$ are equal and opposite — they cancel. The $dr^2$ coefficient is $\cos^2\phi+\sin^2\phi=1$, and the $d\phi^2$ coefficient is $r^2(\sin^2\phi+\cos^2\phi)=r^2$. So
$$dx^2+dy^2 = dr^2 + r^2\,d\phi^2 = ds^2.$$
The polar line element *is* the flat Cartesian one, just re-expressed. Since $ds^2=dx^2+dy^2$ has the constant identity metric $g_{ij}=\delta_{ij}$, the space is Euclidean — flat.

One-sentence reason: $g_{\phi\phi}=r^2$ varies with position only because the polar *coordinate grid* has circles growing with $r$, not because the underlying geometry bends — curvature must be measured by an object that ignores the coordinate choice (the Riemann tensor of [4.6](#/lesson/relativity/04-06-riemann-geodesic-deviation.md)), and for this metric it is exactly zero.

</details>

## Flashback

**From Lesson 1.4 (The invariant interval):** Two events in flat spacetime are separated (in some inertial frame, using light-seconds and seconds so $c=1$) by $\Delta t = 10\ \text{s}$ and $\Delta x = 6\ \text{ls}$, with no $y,z$ separation. Compute $\Delta s^2$, classify the pair (timelike / spacelike / null), and if timelike give the proper time $\Delta\tau$ that a clock present at both events would read.

<details>
<summary>Solution</summary>

With $c=1$, $\Delta s^2 = -\Delta t^2 + \Delta x^2 = -(10)^2 + (6)^2 = -100 + 36 = -64\ \text{s}^2 < 0$: **timelike** — a massive particle can be present at both events. The proper time is
$$\Delta\tau = \frac{1}{c}\sqrt{-\Delta s^2} = \sqrt{64}\ \text{s} = 8\ \text{s}.$$
A clock carried along the straight worldline from one event to the other ages 8 seconds — less than the $10$-second coordinate gap, the usual time dilation. This is the flat, constant-metric ($g=\eta$) special case of the proper-time integral $\tau=\tfrac1c\int\sqrt{-g_{\mu\nu}dx^\mu dx^\nu}$ that this lesson generalized to curved spacetime.

</details>

## Connections

- **Backward:** this is [2.1](#/lesson/relativity/02-01-index-notation-minkowski-metric.md)'s Minkowski metric $\eta_{\mu\nu}$ set free to depend on position — every raise/lower, contraction, and dot-product rule carries over verbatim with $\eta\to g$. The line element $ds^2=g_{\mu\nu}dx^\mu dx^\nu$ is [1.4](#/lesson/relativity/01-04-spacetime-interval-causality.md)'s invariant interval made local, and proper time is that lesson's $\Delta\tau$ integrated along a worldline.
- **Forward:** to *differentiate* tensor fields on this variable-$g$ background you need the connection built from $g$'s derivatives — Christoffel symbols and the covariant derivative ([4.4](#/lesson/relativity/04-04-covariant-derivative-christoffel.md)); free particles then extremize proper time, giving the geodesic equation ([4.5](#/lesson/relativity/04-05-geodesics.md)); and the coordinate-independent curvature that Example 1 gestured at is the Riemann tensor ([4.6](#/lesson/relativity/04-06-riemann-geodesic-deviation.md)). The Schwarzschild metric returns in full in [6.1](#/lesson/relativity/06-01-schwarzschild-solution.md), and $g_{00}$-as-time-dilation becomes the gravitational redshift of [5.5](#/lesson/relativity/05-05-newtonian-limit-redshift.md).
- **Sideways (differential geometry / topology):** the word "metric" here is the smooth cousin of the metric-space distance function of [topology 1.1](#/lesson/topology/01-01-metric-spaces.md) — both answer "how far apart," but $g_{\mu\nu}$ does it infinitesimally and direction-by-direction, and (unlike a topological metric) it is *indefinite*: timelike steps get the opposite sign from spacelike ones, which is what makes it spacetime rather than space.
