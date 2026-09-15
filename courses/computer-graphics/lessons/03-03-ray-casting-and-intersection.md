# Computer Graphics · Lesson 3.3: Ray Casting & Ray–Object Intersection

> ⏱ ~15 min · Module 3: The GPU Pipeline, Ray Tracing & Global Illumination · Builds on: [1.4 (the camera frame)](01-04-the-camera-and-view-transform.md), [2.1 (barycentric coordinates)](02-01-rasterizing-lines-and-triangles.md), [3.2 (shadows)](03-02-shadow-mapping.md) · Unlocks: [3.4 (Whitted ray tracing)](03-04-whitted-ray-tracing-reflection-refraction.md), [3.5 (acceleration structures)](03-05-acceleration-structures.md)

## Why this matters

This is the other loop from [1.1](01-01-the-graphics-pipeline.md): for each pixel, find what it sees. Where rasterization pushed each triangle onto the screen, a ray caster pulls a line out of the screen into the scene and asks where it first strikes something.

Everything in a ray tracer — primary visibility, shadows, reflections, refraction, global illumination — is built from one operation: **intersect a ray with a surface and report the nearest hit**. This lesson derives that operation for the three shapes that matter most (sphere, plane, triangle) and uses it twice: once to see, and once to answer [3.2](03-02-shadow-mapping.md)'s shadow question exactly, with no texels and no resolution limit.

## The idea

**A ray is a starting point and a direction.** Points along it are "start, plus $t$ steps of direction", with $t$ like a clock that started at the eye. Finding a hit means finding the value of $t$ at which the moving point lands on the surface.

**Substitute and solve.** Every surface has an equation a point must satisfy — distance from centre equals radius; dot with the normal equals a constant; equals a weighted mix of three corners. Plug the moving point into that equation and you get an equation in the single unknown $t$: quadratic for a sphere, linear for a plane, a small linear system for a triangle. The smallest positive solution is the visible hit.

**A shadow is just another ray.** From the hit point, aim a ray at the light. If it strikes anything before reaching the light, the point is in shadow. The only trap is that the ray starts *on* a surface, and rounding error can make it strike that very surface at $t \approx 0$.

## The formal version

**Rays.** $\mathbf{p}(t) = \mathbf{o} + t\,\mathbf{d}$, $t > 0$. The direction $\mathbf{d}$ need not be unit length, but then $t$ is not distance.

**Primary rays.** With the camera frame $(\mathbf{e};\ \mathbf{u}, \mathbf{v}, \mathbf{w})$ of [1.4](01-04-the-camera-and-view-transform.md), a $W \times H$ image, vertical field of view $\phi$ and aspect $a = W/H$, the ray through the centre of pixel $(i, j)$ is

$$\mathbf{o} = \mathbf{e}, \qquad \mathbf{d} = s_x\,\mathbf{u} + s_y\,\mathbf{v} - \mathbf{w}, \qquad s_x = \left(\frac{2(i + \tfrac12)}{W} - 1\right) a\tan\frac\phi2, \quad s_y = \left(\frac{2(j + \tfrac12)}{H} - 1\right)\tan\frac\phi2.$$

In words: map the pixel centre to $[-1, 1]$, scale by the half-width of the image plane at distance 1, and step one unit down $-\mathbf{w}$. This is [1.5](01-05-projection-orthographic-and-perspective.md)'s projection run backwards. *(card: [Primary ray generation](../reference.md#primary-ray-generation))*

**Sphere** with centre $\mathbf{c}$ and radius $r$: $\lVert\mathbf{p} - \mathbf{c}\rVert^2 = r^2$. Substituting gives $At^2 + Bt + C = 0$ with

$$A = \mathbf{d}\cdot\mathbf{d}, \qquad B = 2\,\mathbf{d}\cdot(\mathbf{o} - \mathbf{c}), \qquad C = \lVert\mathbf{o} - \mathbf{c}\rVert^2 - r^2, \qquad t = \frac{-B \pm \sqrt{B^2 - 4AC}}{2A}.$$

Discriminant negative: miss. Zero: grazing touch. Positive: two hits, entry and exit. The outward normal at the hit is $\mathbf{n} = (\mathbf{p} - \mathbf{c})/r$. If $C < 0$ the ray starts inside the sphere, and only the larger root is positive. *(card: [Ray-sphere intersection](../reference.md#ray-sphere-intersection))*

**Plane** through $\mathbf{p}_0$ with normal $\mathbf{n}$: $(\mathbf{p} - \mathbf{p}_0)\cdot\mathbf{n} = 0$, so

$$t = \frac{(\mathbf{p}_0 - \mathbf{o})\cdot\mathbf{n}}{\mathbf{d}\cdot\mathbf{n}},$$

with no hit if $\mathbf{d}\cdot\mathbf{n} = 0$ (parallel) or $t \le 0$ (behind). *(card: [Ray-plane intersection](../reference.md#ray-plane-intersection))*

**Triangle** $\mathbf{a}, \mathbf{b}, \mathbf{c}$. Write the hit as a barycentric combination, $\mathbf{o} + t\mathbf{d} = \mathbf{a} + \beta(\mathbf{b} - \mathbf{a}) + \gamma(\mathbf{c} - \mathbf{a})$. With $\mathbf{e}_1 = \mathbf{b} - \mathbf{a}$, $\mathbf{e}_2 = \mathbf{c} - \mathbf{a}$, $\mathbf{s} = \mathbf{o} - \mathbf{a}$, this is a $3 \times 3$ linear system in $(t, \beta, \gamma)$, and Cramer's rule with triple products gives the **Möller–Trumbore** solution:

$$\mathbf{q} = \mathbf{d}\times\mathbf{e}_2, \quad \mathbf{r} = \mathbf{s}\times\mathbf{e}_1, \quad \det = \mathbf{e}_1\cdot\mathbf{q}, \qquad \beta = \frac{\mathbf{s}\cdot\mathbf{q}}{\det}, \quad \gamma = \frac{\mathbf{d}\cdot\mathbf{r}}{\det}, \quad t = \frac{\mathbf{e}_2\cdot\mathbf{r}}{\det}.$$

A hit requires $\beta \ge 0$, $\gamma \ge 0$, $\beta + \gamma \le 1$ and $t > \varepsilon$; $\det \approx 0$ means the ray is parallel to the triangle. In words: solve for where on the triangle's plane the ray lands, *in barycentric coordinates*, and accept if all three weights ($1 - \beta - \gamma$, $\beta$, $\gamma$) are non-negative. These are the true surface barycentrics, so a ray tracer interpolates attributes with them directly — no perspective correction ([2.3](02-03-perspective-correct-interpolation.md)). *(card: [Ray-triangle intersection](../reference.md#ray-triangle-intersection))*

**Shadow rays.** From hit point $\mathbf{p}$ toward a point light at $\mathbf{x}_L$, use $\mathbf{d} = \mathbf{x}_L - \mathbf{p}$ (unnormalized), so the light sits at $t = 1$. The point is in shadow if any object has a hit with $\varepsilon < t < 1$. Start the ray at $\mathbf{p} + \delta\mathbf{n}$ or require $t > \varepsilon$ to avoid re-hitting the surface you started on. *(card: [Shadow ray](../reference.md#shadow-ray))*

## Picture

![A blue sphere with centre c and radius r. A grey ray leaves the eye o in direction d, enters the sphere at a coral point marked t1, first hit, passes through as a dashed line and exits at a grey point marked t2, exit. A coral outward normal n equals p minus c over r points away from the centre at the first hit. A dashed coral shadow ray runs from the first hit up to a coral light. Footer: discriminant less than 0 miss, equal to 0 grazes, greater than 0 two roots, take the smallest t greater than epsilon](assets/03-03-fig1.svg)

The two roots are the two places the infinite line pierces the sphere. A renderer wants the first one in front of the origin; a refracting sphere in [3.4](03-04-whitted-ray-tracing-reflection-refraction.md) will want the second one as well, since that is where light leaves the glass.

## Worked examples

**Example 1 (mechanical): hit a sphere, then test the shadow.** Eye at the origin, ray direction $\mathbf{d} = (0.2,\ 0.1,\ -1)$, sphere centre $\mathbf{c} = (1.5,\ 0.5,\ -5)$, radius $r = 1$.

*Coefficients.* $\mathbf{o} - \mathbf{c} = (-1.5, -0.5, 5)$.

$$A = 0.04 + 0.01 + 1 = 1.05, \qquad B = 2(-0.3 - 0.05 - 5) = -10.7, \qquad C = 2.25 + 0.25 + 25 - 1 = 26.5.$$

*Discriminant.* $B^2 - 4AC = 114.49 - 111.3 = 3.19 > 0$, so two hits; $\sqrt{3.19} = 1.786$.

$$t_1 = \frac{10.7 - 1.786}{2.1} = 4.245, \qquad t_2 = \frac{10.7 + 1.786}{2.1} = 5.946.$$

*Hit and normal.* $\mathbf{p} = 4.245(0.2, 0.1, -1) = (0.849,\ 0.424,\ -4.245)$ and $\mathbf{n} = \mathbf{p} - \mathbf{c} = (-0.651,\ -0.076,\ 0.755)$, which has length 1 ✓ and points back toward the eye ($n_z > 0$) ✓.

*Shadow ray* to a light at $(-5, 5, 0)$: $\mathbf{d}_s = (-5.849,\ 4.576,\ 4.245)$, and $\mathbf{n}\cdot\hat{\mathbf{d}}_s = 0.78 > 0$, so the light is on the outside. Intersecting this ray with the same sphere gives roots $t = -0.182$ and $t \approx 0$. Neither is in $(\varepsilon, 1)$: **lit**.

That second root is the whole story of the epsilon. Computed in double precision it came out as $+5.8 \times 10^{-16}$ — positive. A shadow test that accepted any $t > 0$ would say the sphere shadows itself, and the rendered sphere would be covered in black speckles wherever rounding happened to land on the wrong side: the ray tracer's version of shadow acne ([3.2](03-02-shadow-mapping.md)).

**Example 2 (why you'd care): a floor, a triangle, and an exact shadow.** A floor triangle $\mathbf{a} = (-5, -1, 0)$, $\mathbf{b} = (5, -1, 0)$, $\mathbf{c} = (0, -1, -10)$; the ray from the origin with $\mathbf{d} = (0.2, -0.25, -1)$.

*Möller–Trumbore.* $\mathbf{e}_1 = (10, 0, 0)$, $\mathbf{e}_2 = (5, 0, -10)$, $\mathbf{s} = (5, 1, 0)$.

- $\mathbf{q} = \mathbf{d}\times\mathbf{e}_2 = \big((-0.25)(-10) - (-1)(0),\ (-1)(5) - (0.2)(-10),\ (0.2)(0) - (-0.25)(5)\big) = (2.5,\ -3,\ 1.25)$
- $\det = \mathbf{e}_1\cdot\mathbf{q} = 25$
- $\mathbf{r} = \mathbf{s}\times\mathbf{e}_1 = \big(1\cdot0 - 0\cdot0,\ 0\cdot10 - 5\cdot0,\ 5\cdot0 - 1\cdot10\big) = (0,\ 0,\ -10)$
- $\beta = \mathbf{s}\cdot\mathbf{q}/\det = (12.5 - 3)/25 = 0.38$
- $\gamma = \mathbf{d}\cdot\mathbf{r}/\det = 10/25 = 0.40$
- $t = \mathbf{e}_2\cdot\mathbf{r}/\det = 100/25 = 4$

$\beta, \gamma \ge 0$ and $\beta + \gamma = 0.78 \le 1$: **hit**, at $\mathbf{p} = (0.8, -1, -4)$, with barycentric weights $(0.22, 0.38, 0.40)$ for $(\mathbf{a}, \mathbf{b}, \mathbf{c})$.

*Shadow.* A light at $(2.2, 2, -6)$, with Example 1's sphere in the scene. $\mathbf{d}_s = (1.4,\ 3,\ -2)$. Against the sphere: $A = 14.96$, and the roots are $t = 0.241$ and $0.759$ — both inside $(\varepsilon, 1)$. **Shadowed**, by the sphere, whose centre this shadow ray passes straight through.

No shadow map, no bias tuning, no texel size: the answer is exact at every pixel, at the cost of one more intersection query per light per hit — which, without [3.5](03-05-acceleration-structures.md), means testing every object in the scene.

## Watch out

- **You might think** the nearest hit is the root with the smaller absolute value — **but actually** it is the smallest root that is **greater than** $\varepsilon$. A ray starting inside a sphere (a camera inside glass, a refracted ray) has one negative root, which lies behind it.
- **You might think** $t > 0$ is enough to reject the starting surface — **but actually** a ray leaving a surface re-hits it at a $t$ that rounding makes either slightly negative or slightly positive, at random. Example 1's was $+5.8 \times 10^{-16}$. Use $t > \varepsilon$ with $\varepsilon$ scaled to the scene, or offset the origin along the normal.
- **You might think** a shadow ray should be tested against hits at any $t > \varepsilon$ — **but actually** only hits **before the light** count. With $\mathbf{d} = \mathbf{x}_L - \mathbf{p}$ that is $t < 1$; an object behind the light casts no shadow toward you.

## One-liner

> Put $\mathbf{o} + t\mathbf{d}$ into the surface's equation and take the smallest $t > \varepsilon$ — a quadratic for spheres, a ratio for planes, Cramer's rule in barycentrics for triangles — and a shadow is just the same query aimed at the light with $t < 1$.

## Problems

**P1 (🟢)** A ray starts at $(0, 2, 0)$ with direction $(0, -1, -1)/\sqrt2$.
(a) Find $t$ and the hit point on the floor plane $y = 0$.
(b) Is $t$ a distance here? Why?

**P2 (🟡)** (a) A ray starts at $(0.5, 0, 0)$ in direction $(1, 0, 0)$ inside a sphere of radius 2 centred at the origin. Find both roots and the hit the ray actually reports, with its normal.
(b) A ray from $(0, 0, 5)$ in direction $\text{normalize}(0.3, 0.1, -1)$ is tested against the same sphere. Find the discriminant, both roots, and the entry point.

**P3 (🔴)** A camera at the origin looks down $-z$ with $\mathbf{u} = (1,0,0)$, $\mathbf{v} = (0,1,0)$, $\mathbf{w} = (0,0,1)$, $90°$ field of view, and a $4 \times 4$ image.
(a) Give the primary ray direction through pixel $(2, 3)$.
(b) Intersect it with the triangle $(0,0,-4)$, $(3,0,-4)$, $(0,3,-4)$ using Möller–Trumbore. Hit or miss?
(c) Repeat for pixel $(2, 2)$ and give the barycentric weights of the hit.

<details>
<summary>Solutions</summary>

**P1**

(a) $\mathbf{d} = (0, -0.7071, -0.7071)$, plane point $\mathbf{p}_0 = (0,0,0)$, normal $\mathbf{n} = (0, 1, 0)$.

$$t = \frac{(\mathbf{p}_0 - \mathbf{o})\cdot\mathbf{n}}{\mathbf{d}\cdot\mathbf{n}} = \frac{-2}{-0.7071} = \mathbf{2.828}.$$

Hit: $(0, 2, 0) + 2.828(0, -0.7071, -0.7071) = \mathbf{(0,\ 0,\ -2)}$.

(b) **Yes**, because $\mathbf{d}$ is a unit vector, so $t$ counts unit steps along the ray. Check: from $(0,2,0)$ to $(0,0,-2)$ is $\sqrt{4 + 4} = 2.828$. ✓

**P2**

(a) $A = 1$, $B = 2(1, 0, 0)\cdot(0.5, 0, 0) = 1$, $C = 0.25 - 4 = -3.75$. Discriminant $1 + 15 = 16$.

$$t = \frac{-1 \pm 4}{2} = -2.5 \ \text{or}\ 1.5.$$

$C < 0$ confirms the origin is inside. The reported hit is $t = \mathbf{1.5}$ (the other is behind the ray), at $\mathbf{p} = (2, 0, 0)$ with normal $\mathbf{p}/2 = \mathbf{(1, 0, 0)}$ — pointing outward, the same direction as the ray, as it should when leaving a sphere.

(b) $\mathbf{d} = (0.3, 0.1, -1)/\sqrt{1.1} = (0.286,\ 0.0953,\ -0.953)$, so $A = 1$, $B = 2(5)(-0.953) = -9.535$, $C = 25 - 4 = 21$.

Discriminant $= 90.91 - 84 = \mathbf{6.91}$, $\sqrt{6.91} = 2.629$.

$$t = \frac{9.535 \mp 2.629}{2} = \mathbf{3.453}\ \text{and}\ \mathbf{6.082}.$$

Entry point: $(0,0,5) + 3.453\,\mathbf{d} = \mathbf{(0.988,\ 0.329,\ 1.708)}$. Check: $0.976 + 0.108 + 2.917 = 4.0 = r^2$. ✓

**P3**

(a) With $\tan 45° = 1$ and $a = 1$:

$$s_x = \frac{2(2.5)}{4} - 1 = 0.25, \qquad s_y = \frac{2(3.5)}{4} - 1 = 0.75, \qquad \mathbf{d} = (0.25,\ 0.75,\ -1).$$

(b) $\mathbf{e}_1 = (3, 0, 0)$, $\mathbf{e}_2 = (0, 3, 0)$, $\mathbf{s} = \mathbf{o} - \mathbf{a} = (0, 0, 4)$.

- $\mathbf{q} = \mathbf{d}\times\mathbf{e}_2 = \big(0.75\cdot0 - (-1)\cdot3,\ (-1)\cdot0 - 0.25\cdot0,\ 0.25\cdot3 - 0.75\cdot0\big) = (3,\ 0,\ 0.75)$
- $\det = \mathbf{e}_1\cdot\mathbf{q} = 9$
- $\mathbf{r} = \mathbf{s}\times\mathbf{e}_1 = \big(0\cdot0 - 4\cdot0,\ 4\cdot3 - 0\cdot0,\ 0\cdot0 - 0\cdot3\big) = (0,\ 12,\ 0)$
- $\beta = \mathbf{s}\cdot\mathbf{q}/9 = 3/9 = 0.333$; $\gamma = \mathbf{d}\cdot\mathbf{r}/9 = 9/9 = 1$; $t = \mathbf{e}_2\cdot\mathbf{r}/9 = 36/9 = 4$.

$\beta + \gamma = 1.333 > 1$: **miss**. The ray reaches the triangle's plane at $(1, 3, -4)$, beyond the hypotenuse.

(c) Pixel $(2, 2)$: $s_y = \tfrac{2(2.5)}{4} - 1 = 0.25$, so $\mathbf{d} = (0.25, 0.25, -1)$. Now $\mathbf{q} = (3, 0, 0.75)$ again, $\det = 9$, $\mathbf{r} = (0, 12, 0)$, $\beta = 3/9$, $\gamma = \mathbf{d}\cdot\mathbf{r}/9 = 3/9$, $t = 4$.

**Hit** at $(1, 1, -4)$, with weights $(1 - \beta - \gamma,\ \beta,\ \gamma) = \mathbf{(0.333,\ 0.333,\ 0.333)}$ — the triangle's centroid, which is $(1, 1, -4)$. ✓

</details>

## Flashback

**From Lesson 2.7 (mipmaps):** A $512 \times 512$ texture has, at some pixel, $\partial u/\partial x = 0.004$, $\partial v/\partial x = 0.001$, $\partial u/\partial y = 0.0005$, $\partial v/\partial y = 0.006$.
(a) Compute $L_x$, $L_y$ and $\lambda$.
(b) Which levels does trilinear filtering blend, with what weights?
(c) Is this footprint strongly anisotropic?

<details>
<summary>Solution</summary>

(a) $L_x = \sqrt{(512 \times 0.004)^2 + (512 \times 0.001)^2} = \sqrt{2.048^2 + 0.512^2} = \mathbf{2.111}$.

$L_y = \sqrt{(512 \times 0.0005)^2 + (512 \times 0.006)^2} = \sqrt{0.256^2 + 3.072^2} = \mathbf{3.083}$.

$\lambda = \log_2 3.083 = \mathbf{1.624}$.

(b) Levels **1** and **2**, weights $1 - 0.624 = \mathbf{0.376}$ and $\mathbf{0.624}$.

(c) The ratio is $3.083/2.111 = 1.46$ — **mildly** anisotropic. Isotropic trilinear filtering over-blurs the $x$ direction by about $1.5\times$, which is usually acceptable; anisotropic filtering earns its cost at ratios of 4 and above.

</details>

## Connections

- **Backward:** primary rays invert [1.5](01-05-projection-orthographic-and-perspective.md)'s projection using [1.4](01-04-the-camera-and-view-transform.md)'s frame; the triangle test solves for [2.1](02-01-rasterizing-lines-and-triangles.md)'s barycentric coordinates in 3D; Cramer's rule and triple products are [`linalg-refresher` 2.3](../../linalg-refresher/lessons/02-03-determinants.md)'s determinants; the shadow ray is the exact version of [3.2](03-02-shadow-mapping.md)'s shadow map.
- **Forward:** [3.4](03-04-whitted-ray-tracing-reflection-refraction.md) spawns new rays from each hit to trace mirrors and glass; [3.5](03-05-acceleration-structures.md) stops testing every object and makes the whole thing logarithmic; [3.7](03-07-monte-carlo-path-tracing.md) sends random rays from every hit to gather indirect light.
- **Sideways:** a ray–surface intersection is a root-finding problem, and for implicit surfaces without closed forms (metaballs, signed distance fields) it is solved with [`numerical-analysis` 1.5](../../numerical-analysis/lessons/01-05-newton-secant.md)'s iterative methods; the epsilon trouble in Example 1 is [`numerical-analysis` 1.1](../../numerical-analysis/lessons/01-01-floating-point-roundoff.md)'s roundoff showing up as a picture.
