# Computer Graphics · Lesson 2.3: Perspective-Correct Interpolation

> ⏱ ~15 min · Module 2: Rasterization & Shading · Builds on: [2.1 (barycentric coordinates)](02-01-rasterizing-lines-and-triangles.md), [1.5 (projection and $w$)](01-05-projection-orthographic-and-perspective.md) · Unlocks: [2.6 (texture mapping)](02-06-texture-mapping-and-filtering.md), [3.1 (varyings)](03-01-the-programmable-gpu-pipeline.md)

## Why this matters

Every triangle carries data at its corners — texture coordinates, colours, normals — and every pixel inside needs a value in between. [2.1](02-01-rasterizing-lines-and-triangles.md) gave screen-space barycentric weights, and the obvious move is to blend with them. On a triangle facing the camera that works. On a floor receding into the distance it smears the texture, bends straight lines, and makes a checkerboard visibly kink along every triangle edge — the wobbling textures of the first 3D game consoles, which had no hardware for the fix.

The fix is two divisions per pixel, and it follows directly from [1.5](01-05-projection-orthographic-and-perspective.md)'s discovery that projection doesn't preserve midpoints. The key fact: **$1/w$ is affine in screen space even though $w$ is not.**

## The idea

Walk along a floor tile that stretches away from you. In the world, the tile's texture coordinate $u$ increases steadily with distance. On screen, the near half of the tile takes up far more pixels than the far half. A near pixel therefore covers only a sliver of floor and a far pixel covers a lot, so stepping evenly across the *screen*, $u$ should change **slowly** at the near end and **quickly** at the far end. Blending $u$ evenly in screen space gets this wrong everywhere except the endpoints.

Here is the trick. Although $u$ is not a straight-line function of screen position, the ratio $u/w$ is — and so is $1/w$. Blend those two linearly across the screen, then divide one by the other at each pixel to get $u$ back. Both blends are just barycentric sums, so the hardware cost is tiny.

## The formal version

**Setup.** A triangle's vertices have clip-space $w$ values $w_a, w_b, w_c$ (for a perspective camera, $w = -z_{\text{eye}}$, the distance in front of the eye), an attribute $a$ with vertex values $a_a, a_b, a_c$, and a pixel has **screen-space** barycentrics $(\alpha, \beta, \gamma)$ from [2.1](02-01-rasterizing-lines-and-triangles.md).

**Why $1/w$ is affine in screen space.** Take a plane in eye space, $n_x x + n_y y + n_z z = k$ with $k \ne 0$ (a plane not through the eye). Screen position is $x_s = x/(-z)$, $y_s = y/(-z)$ up to scale and offset. Divide the plane equation by $-z$:

$$n_x x_s + n_y y_s - n_z = \frac{k}{-z} = \frac{k}{w}.$$

So $1/w$ is an affine function of $(x_s, y_s)$ across the triangle's plane. Any attribute that varies linearly over the triangle in eye space, $a = \mathbf{g}\cdot\mathbf{p} + h$, gives $a/w = \mathbf{g}\cdot(\mathbf{p}/w) + h/w$; $\mathbf{p}/w = (x_s, y_s, -1)$ is affine in screen space, and $h/w$ is too, so **$a/w$ is affine in screen space**. *(card: [Perspective-correct interpolation](../reference.md#perspective-correct-interpolation))*

**The rule.** Interpolate $a/w$ and $1/w$ with the screen-space weights, then divide:

$$\boxed{\ a = \frac{\alpha\,\dfrac{a_a}{w_a} + \beta\,\dfrac{a_b}{w_b} + \gamma\,\dfrac{a_c}{w_c}}{\alpha\,\dfrac{1}{w_a} + \beta\,\dfrac{1}{w_b} + \gamma\,\dfrac{1}{w_c}}\ }$$

In words: weight each vertex by its screen barycentric **divided by its depth**, renormalize, and blend. Distant vertices get less screen-space influence than their barycentric suggests, because each of their pixels covers more of the surface.

Equivalently, define **perspective-correct barycentrics**

$$\alpha' = \frac{\alpha/w_a}{\alpha/w_a + \beta/w_b + \gamma/w_c}, \quad \text{and likewise } \beta', \gamma',$$

then interpolate every attribute as $\alpha' a_a + \beta' a_b + \gamma' a_c$. These are the true barycentric coordinates of the surface point in eye space. The denominator's reciprocal is the interpolated $w$ itself.

**What does *not* need correcting.** $z_{\text{ndc}} = -A - B/z_{\text{eye}}$ is an affine function of $1/w$, hence already affine in screen space: depth for the z-buffer is interpolated with plain screen barycentrics, as [2.2](02-02-clipping-and-the-z-buffer.md) did. Eye-space distance itself, $w$, **does** need correcting — it is the reciprocal of an affine quantity.

Under an **orthographic** camera, $w = 1$ everywhere and both forms coincide.

## Picture

![Two panels of a floor receding into the distance, each divided into an 8 by 8 grid by texture coordinates and split into two triangles by a dashed diagonal. Left, in coral, labelled screen-linear uv: the grid lines are evenly spaced in screen space and visibly bend where they cross the diagonal, with the far rows as tall as the near rows. Right, in blue, labelled perspective-correct uv: the lines running into the distance are straight and converge, the cross lines bunch up with distance, and nothing bends at the diagonal](assets/02-03-fig1.svg)

The left floor is not just "less realistic"; it is **inconsistent** — the same texture lines point in different directions in the two triangles. That kink is the tell-tale sign of screen-linear interpolation, and it gets worse the larger the depth ratio across a triangle.

## Worked examples

**Example 1 (mechanical): the midpoint of a receding edge.** An edge runs from a vertex at $w_0 = 1$ with $u_0 = 0$ to a vertex at $w_1 = 9$ with $u_1 = 1$. Take the pixel halfway along the edge **on screen**, so the screen weights are $(\tfrac12, \tfrac12)$.

*Naive:* $u = \tfrac12(0) + \tfrac12(1) = 0.5$.

*Correct:*

$$u = \frac{\tfrac12\cdot\tfrac01 + \tfrac12\cdot\tfrac19}{\tfrac12\cdot\tfrac11 + \tfrac12\cdot\tfrac19} = \frac{0.0556}{0.5556} = 0.1.$$

The screen midpoint shows the texture at $u = 0.1$, only a tenth of the way along. Cross-check against [1.5](01-05-projection-orthographic-and-perspective.md)'s Example 2, which had these same depths: the eye-space point one tenth of the way from depth 1 to depth 9 is at depth $1.8$ with $x = 1$, which projects to $x/(-z) = 1/1.8 = 0.556$ — exactly the screen midpoint of $1$ and $0.111$. ✓

**Example 2 (why you'd care): a textured pixel, both ways.** Screen-space triangle $\mathbf{a} = (100, 100)$, $\mathbf{b} = (500, 150)$, $\mathbf{c} = (250, 450)$ with $w = (2, 8, 4)$ and texture coordinates $(u, v)$ of $(0,0)$, $(1,0)$, $(0,1)$. Pixel centre $\mathbf{p} = (300.5, 220.5)$.

*Screen barycentrics* (edge functions from [2.1](02-01-rasterizing-lines-and-triangles.md), $2A = 132{,}500$): $(\alpha, \beta, \gamma) = (0.3187,\ 0.3932,\ 0.2881)$.

*Naive uv:* $(u, v) = (\beta, \gamma) = (0.393,\ 0.288)$.

*Correct uv.* Divide each weight by its $w$:

$$\frac{0.3187}{2} = 0.1593, \qquad \frac{0.3932}{8} = 0.0492, \qquad \frac{0.2881}{4} = 0.0720, \qquad \text{sum} = 0.2805.$$

Normalized: $(\alpha', \beta', \gamma') = (0.568,\ 0.175,\ 0.257)$, so $(u, v) = (0.175,\ 0.257)$. The interpolated depth is $w = 1/0.2805 = 3.56$.

The naive answer is off by $0.218$ in $u$. On a $512 \times 512$ texture that is **112 texels** — the pixel shows a completely different part of the image. The correct weights favour vertex $\mathbf{a}$ (nearest, $w = 2$) and discount $\mathbf{b}$ (farthest, $w = 8$), exactly as the idea predicted.

## Watch out

- **You might think** the correction is only for textures — **but actually** it applies to every attribute that should be linear on the surface: colours, normals, world positions. GPUs apply it to all shader varyings by default ([3.1](03-01-the-programmable-gpu-pipeline.md)); screen-linear interpolation must be requested explicitly. Depth is the one exception, because $z_{\text{ndc}}$ is already affine in screen space.
- **You might think** you divide by $w$ at the end — **but actually** you divide by the *interpolated* $1/w$, which is not the reciprocal of the interpolated $w$. Blending $w$ linearly and dividing by that gives a wrong answer on every pixel not at a vertex.
- **You might think** small triangles make the error negligible, so tessellating finely is a fix — **but actually** that only shrinks it: the error depends on the depth *ratio* across each triangle. Early consoles did subdivide large floor polygons to hide the wobble, and the kinks were still visible at close range.

## One-liner

> Attributes aren't linear on screen, but $a/w$ and $1/w$ are — interpolate both with screen barycentrics and divide, which quietly weights each vertex by how near it is.

## Problems

**P1 (🟢)** An edge runs from $w_0 = 2$, $u_0 = 0$ to $w_1 = 6$, $u_1 = 1$. Find the perspective-correct $u$ at screen fractions $s = 0.25$, $0.5$ and $0.75$ along the edge (weights $1 - s$ and $s$), and compare with the naive values.

**P2 (🟡)** A screen-space triangle $\mathbf{a} = (40, 40)$, $\mathbf{b} = (360, 80)$, $\mathbf{c} = (120, 300)$ has $w = (1, 5, 2.5)$ and tiling texture coordinates $(0,0)$, $(4,0)$, $(0,4)$. For the pixel centre $(180.5, 140.5)$:
(a) Compute the screen-space barycentrics.
(b) Compute the naive and the perspective-correct $(u, v)$.
(c) On a $256 \times 256$ texture, how many texels apart are the two lookups in $u$?

**P3 (🔴)** Along the same edge as P1, the true eye distance $w$ varies linearly **on the surface**.
(a) Find the correct $w$ at the screen midpoint $s = 0.5$, and the naive value.
(b) Show that screen-linear interpolation of $z_{\text{ndc}}$ gives exactly the right depth there, taking $n = 1$ and $f = 10$.
(c) A fog effect should fade with eye distance. Which quantity should the vertex stage output for the fragment stage to interpolate — $w$, $z_{\text{ndc}}$, or something else — and with which kind of interpolation?

<details>
<summary>Solutions</summary>

**P1**

$$u(s) = \frac{s/6}{(1-s)/2 + s/6}.$$

| $s$ | numerator | denominator | correct $u$ | naive $u$ |
|---|---|---|---|---|
| $0.25$ | $0.04167$ | $0.375 + 0.04167 = 0.41667$ | $\mathbf{0.1}$ | $0.25$ |
| $0.5$ | $0.08333$ | $0.25 + 0.08333 = 0.33333$ | $\mathbf{0.25}$ | $0.5$ |
| $0.75$ | $0.125$ | $0.125 + 0.125 = 0.25$ | $\mathbf{0.5}$ | $0.75$ |

Three quarters of the way across the screen, the texture is only halfway along — the far end of the edge is compressed into the last quarter of its screen length.

**P2**

(a) $2A = E_{\mathbf{ab}}(\mathbf{c}) = (320)(260) - (40)(80) = 83{,}200 - 3{,}200 = 80{,}000$.

$E_{\mathbf{bc}}(\mathbf{p}) = (120 - 360)(140.5 - 80) - (300 - 80)(180.5 - 360) = -14{,}520 + 39{,}490 = 24{,}970$.

$E_{\mathbf{ca}}(\mathbf{p}) = (40 - 120)(140.5 - 300) - (40 - 300)(180.5 - 120) = 12{,}760 + 15{,}730 = 28{,}490$.

$E_{\mathbf{ab}}(\mathbf{p}) = (320)(140.5 - 40) - (40)(180.5 - 40) = 32{,}160 - 5{,}620 = 26{,}540$.

Sum $= 80{,}000$ ✓. So $(\alpha, \beta, \gamma) = (0.3121,\ 0.3561,\ 0.3318)$.

(b) *Naive:* $u = 4\beta = \mathbf{1.425}$, $v = 4\gamma = \mathbf{1.327}$.

*Correct:* $\alpha/1 = 0.3121$, $\beta/5 = 0.0712$, $\gamma/2.5 = 0.1327$, sum $0.5161$. Normalized: $(0.6048,\ 0.1380,\ 0.2571)$. So $u = 4(0.1380) = \mathbf{0.552}$ and $v = 4(0.2571) = \mathbf{1.029}$.

(c) $\Delta u = 1.425 - 0.552 = 0.873$ texture widths, times 256: **about 223 texels**. With a tiling texture that is most of a whole tile.

**P3**

(a) *Correct:* $w$ is the reciprocal of the interpolated $1/w$:

$$w = \frac{1}{0.5\cdot\tfrac12 + 0.5\cdot\tfrac16} = \frac{1}{0.3333} = \mathbf{3}.$$

*Naive:* $\tfrac12(2 + 6) = \mathbf{4}$. The correct value is the **harmonic** mean of the endpoint depths. Consistent with P1: at $s = 0.5$ the surface point is a quarter of the way along, at depth $2 + 0.25(6 - 2) = 3$. ✓

(b) With $n = 1$, $f = 10$: $z_{\text{ndc}}(w) = \tfrac{11}{9} - \tfrac{20}{9w}$.

At the endpoints: $z_{\text{ndc}}(2) = 1.2222 - 1.1111 = 0.1111$ and $z_{\text{ndc}}(6) = 1.2222 - 0.3704 = 0.8519$. Screen-linear midpoint: $\tfrac12(0.1111 + 0.8519) = 0.4815$.

True depth at the surface point ($w = 3$): $1.2222 - 0.7407 = 0.4815$. ✓ Exactly equal — because $z_{\text{ndc}}$ is affine in $1/w$, and $1/w$ is affine in screen space.

(c) Fog depends on eye distance, which is linear on the surface, so output $w$ (or the eye-space position) as an ordinary varying and let it be interpolated **perspective-correctly** — the default for varyings. Interpolating $z_{\text{ndc}}$ would be cheap and exact but gives the $1/z$-warped quantity, which would make the fog ramp almost entirely in the first few metres; interpolating $w$ screen-linearly would give the wrong depth (4 instead of 3 above).

</details>

## Flashback

**From Lesson 2.1 (rasterization):** Triangle $\mathbf{a} = (0.5, 0.5)$, $\mathbf{b} = (6.5, 2.5)$, $\mathbf{c} = (2.5, 6.5)$.
(a) Find $2A$ and confirm the winding.
(b) Find the barycentric coordinates of the pixel centre $(3.5, 3.5)$.
(c) The centre $(4.5, 4.5)$ gives $E_{\mathbf{bc}} = 0$. Is that pixel covered? Justify with the top-left rule.

<details>
<summary>Solution</summary>

(a) $E_{\mathbf{ab}}(\mathbf{c}) = (6)(6) - (2)(2) = 32 > 0$: counter-clockwise, $2A = 32$.

(b) At $\mathbf{p} = (3.5, 3.5)$:

- $E_{\mathbf{ab}} = 6(3.5 - 0.5) - 2(3.5 - 0.5) = 18 - 6 = 12$
- $E_{\mathbf{bc}} = (2.5 - 6.5)(3.5 - 2.5) - (6.5 - 2.5)(3.5 - 6.5) = -4 + 12 = 8$
- $E_{\mathbf{ca}} = (0.5 - 2.5)(3.5 - 6.5) - (0.5 - 6.5)(3.5 - 2.5) = 6 + 6 = 12$

Sum 32 ✓. $(\alpha, \beta, \gamma) = (8, 12, 12)/32 = \mathbf{(0.25,\ 0.375,\ 0.375)}$.

(c) The directed edge $\mathbf{b} \to \mathbf{c}$ goes from $y = 2.5$ **up** to $y = 6.5$. It is not horizontal and not downward, so it is neither a top nor a left edge. **Not covered** — the pixel belongs to whatever triangle lies on the other side of that edge, where the edge runs downward.

</details>

## Connections

- **Backward:** the $w$ being divided by is the one [1.5](01-05-projection-orthographic-and-perspective.md)'s matrix copied out of $-z$; the weights being corrected are [2.1](02-01-rasterizing-lines-and-triangles.md)'s screen barycentrics; and the depth that needs no correction is [2.2](02-02-clipping-and-the-z-buffer.md)'s $z_{\text{ndc}}$.
- **Forward:** [2.6](02-06-texture-mapping-and-filtering.md) uses these texture coordinates to look up texels; [3.1](03-01-the-programmable-gpu-pipeline.md)'s "varyings" are exactly the attributes this rule interpolates, automatically; [3.3](03-03-ray-casting-and-intersection.md)'s ray–triangle test finds the eye-space barycentrics $(\alpha', \beta', \gamma')$ directly, which is why ray tracers never need this lesson.
- **Sideways:** the statement "a projective map preserves lines but not ratios, while a ratio of affine functions stays well-behaved" is the cross-ratio invariance of [`algebraic-geometry` 2.3](../../algebraic-geometry/lessons/02-03-projective-space.md)'s projective space. The harmonic mean in P3 is the same mean that appears for two resistors in parallel — both are averages of reciprocals.
