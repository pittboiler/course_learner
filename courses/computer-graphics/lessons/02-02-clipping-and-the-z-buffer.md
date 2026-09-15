# Computer Graphics · Lesson 2.2: Clipping & the Z-Buffer

> ⏱ ~15 min · Module 2: Rasterization & Shading · Builds on: [2.1 (rasterizing triangles)](02-01-rasterizing-lines-and-triangles.md), [1.5 (projection)](01-05-projection-orthographic-and-perspective.md) · Unlocks: [2.3 (perspective-correct interpolation)](02-03-perspective-correct-interpolation.md), [3.2 (shadow mapping)](03-02-shadow-mapping.md)

## Why this matters

A rasterizer draws triangles one at a time, in whatever order they arrive. Two questions have to be answered before any of that produces a correct image. **What about geometry that isn't in view** — especially geometry that passes behind the camera, where the perspective divide does something absurd? And **when two triangles land on the same pixel, which one wins?**

The answers are clipping and the depth buffer (z-buffer). The z-buffer is one of the great simple ideas in computing — a per-pixel `min`, with no sorting and no global knowledge — and it is the reason object-order rendering works at all. Its one weakness is precision, and that weakness is a direct consequence of the $1/z$ depth mapping [1.5](01-05-projection-orthographic-and-perspective.md) derived.

## The idea

**Clip before you divide.** In clip space every coordinate is still a linear function of the eye-space point, so the visible region is a simple set of inequalities and cutting a triangle along a plane is plain linear interpolation. The divide by $w$ is what makes everything non-linear — and for points behind the eye, $w$ is negative, so dividing flips them through the origin onto the wrong side of the screen. Cut those parts off first.

**Remember the nearest thing you've drawn.** Keep a second image alongside the colour buffer, holding a depth per pixel, initialised to "infinitely far". For every fragment, compare its depth with the stored one; if it is nearer, overwrite both colour and depth. When the last triangle is done, every pixel shows the nearest surface — regardless of the order the triangles came in.

**But depth is stored in finitely many bits,** and [1.5](01-05-projection-orthographic-and-perspective.md)'s mapping spends most of them close to the near plane. Far away, two surfaces a few centimetres apart can quantise to the same stored value, and they flicker through each other: **z-fighting**.

## The formal version

**The clip volume.** A clip-space point $(x, y, z, w)$ is inside the view volume when

$$-w \le x \le w, \qquad -w \le y \le w, \qquad -w \le z \le w.$$

In words: after dividing by $w$ these are exactly $-1 \le x_{\text{ndc}}, y_{\text{ndc}}, z_{\text{ndc}} \le 1$, but stated without dividing — and they automatically reject $w < 0$, since no point can satisfy $-w \le z \le w$ with $w < 0$. *(card: [Clip volume](../reference.md#clip-volume))*

**Clipping against one plane (Sutherland–Hodgman).** Give each vertex a signed distance to the plane; for the near plane $z = -w$,

$$d(\mathbf{v}) = z + w \qquad (d \ge 0 \text{ inside}).$$

Walk the polygon's edges $\mathbf{P} \to \mathbf{Q}$ in order. Output $\mathbf{P}$ if it is inside; if $d(\mathbf{P})$ and $d(\mathbf{Q})$ have opposite signs, also output the crossing point

$$\mathbf{I} = \mathbf{P} + t(\mathbf{Q} - \mathbf{P}), \qquad t = \frac{d(\mathbf{P})}{d(\mathbf{P}) - d(\mathbf{Q})}.$$

In words: keep inside vertices, and wherever an edge crosses the plane, insert the point where $d$ hits zero — found by linear interpolation of $d$, which is valid because $d$ is linear in clip space. A triangle with one vertex outside becomes a quadrilateral (two triangles); with two outside, a smaller triangle. Every other attribute (colour, texture coordinates) is interpolated with the same $t$. *(card: [Sutherland-Hodgman clipping](../reference.md#sutherland-hodgman-clipping))*

In practice GPUs clip against the near (and sometimes far) plane only, and handle the four side planes by rasterizing into a **guard band** larger than the screen and discarding pixels outside it — cheaper than generating new vertices.

**Culling** is the cheap cousin: discard a triangle entirely when all three vertices fail the *same* inequality (all have $x > w$, say), or when its screen-space winding shows it faces away from the camera (**back-face culling**, using the sign of $2A$ from [2.1](02-01-rasterizing-lines-and-triangles.md)).

**The z-buffer algorithm.**

```
for every pixel:  depth[px] = 1.0 ;  color[px] = background
for every triangle, for every fragment (px, d, c) it produces:
    if d < depth[px]:
        depth[px] = d ;  color[px] = c
```

Here $d = (z_{\text{ndc}} + 1)/2 \in [0,1]$, interpolated across the triangle from its vertices' depths using the screen-space barycentrics of [2.1](02-01-rasterizing-lines-and-triangles.md). (That interpolation is exactly correct for $z_{\text{ndc}}$, which is affine in screen space — the reason [2.3](02-03-perspective-correct-interpolation.md) will not need to correct it.) *(card: [Z-buffer](../reference.md#z-buffer))*

In words: a per-pixel running minimum. Cost is one comparison per fragment, memory is one depth value per pixel, and the result for opaque surfaces does not depend on draw order — only the number of wasted writes does.

**Depth precision.** At eye distance $D = -z$, the stored depth is

$$d(D) = \frac{f}{f-n}\left(1 - \frac{n}{D}\right), \qquad \frac{\mathrm{d}d}{\mathrm{d}D} = \frac{fn}{(f-n)D^2}.$$

A $b$-bit integer depth buffer distinguishes steps of $\Delta d = 2^{-b}$, so the smallest separable distance at range $D$ is about

$$\Delta D \approx \frac{(f-n)\,D^2}{f\,n}\,2^{-b} \;\approx\; \frac{D^2}{n}\,2^{-b} \quad (f \gg n).$$

In words: depth resolution degrades with the **square** of distance and improves in direct proportion to the **near** distance; the far plane barely matters. *(card: [Depth precision](../reference.md#depth-precision))*

## Picture

![A plot of stored depth from 0 to 1 against eye distance on a logarithmic axis from 0.1 to 100, with the far plane at 100. A coral curve for near plane 0.1 shoots up almost immediately, passing 0.9 before distance 1, with a dot at distance 4 labelled depth 0.976. A blue curve for near plane 1 starts at distance 1 and rises more gradually. A dashed grey curve, labelled orthographic linear, stays near zero until the right-hand end](assets/02-02-fig1.svg)

On the coral curve, everything from distance 4 to distance 100 — 96% of the scene's depth — has to share the top 2.4% of the depth range. Moving the near plane from $0.1$ to $1$ (blue) hands a large share of that range back to the far field.

## Worked examples

**Example 1 (mechanical): clipping a triangle that crosses the near plane.** Projection with $90°$ field of view, aspect 1, $n = 1$, $f = 10$, so $A = -11/9$, $B = -20/9$. Eye-space vertices

$$\mathbf{a} = (0, 1, -4), \qquad \mathbf{b} = (1, -1, -4), \qquad \mathbf{c} = (0.5, 0.5, 1),$$

where $\mathbf{c}$ is **behind** the eye.

*Clip coordinates* $(x, y, Az + B, -z)$ and near-plane distances $d = z + w$:

| vertex | clip | $d$ |
|---|---|---|
| $\mathbf{a}$ | $(0,\ 1,\ 2.667,\ 4)$ | $6.667$ |
| $\mathbf{b}$ | $(1,\ -1,\ 2.667,\ 4)$ | $6.667$ |
| $\mathbf{c}$ | $(0.5,\ 0.5,\ -3.444,\ -1)$ | $-4.444$ |

*Walk the edges* $\mathbf{a}\to\mathbf{b}\to\mathbf{c}\to\mathbf{a}$:

- $\mathbf{a}\to\mathbf{b}$: both inside. Output $\mathbf{a}$.
- $\mathbf{b}\to\mathbf{c}$: $\mathbf{b}$ inside, $\mathbf{c}$ outside. Output $\mathbf{b}$, then the crossing at $t = 6.667/(6.667 + 4.444) = 0.6$: $\mathbf{b} + 0.6(\mathbf{c} - \mathbf{b}) = (0.7,\ -0.1,\ -1,\ 1)$.
- $\mathbf{c}\to\mathbf{a}$: $\mathbf{c}$ outside, $\mathbf{a}$ inside. Output only the crossing, at $t = -4.444/(-4.444 - 6.667) = 0.4$: $(0.3,\ 0.7,\ -1,\ 1)$.

Result: the quadrilateral $\mathbf{a}, \mathbf{b}, (0.7, -0.1, -1, 1), (0.3, 0.7, -1, 1)$, rasterized as two triangles. The new vertices have $z = -w$, so $z_{\text{ndc}} = -1$ exactly: they lie **on** the near plane. ✓

*What if we had divided $\mathbf{c}$ anyway?* $(0.5, 0.5, -3.444)/(-1) = (-0.5,\ -0.5,\ 3.444)$. The vertex that is up and to the right behind the viewer lands **down and to the left** on screen, and the rasterizer would draw a triangle sweeping across the image through a region the real geometry never occupies. That wrap-around is why clipping happens before the divide.

**Example 2 (why you'd care): a z-fighting budget.** An outdoor scene: $n = 0.1$ m, $f = 1000$ m, 24-bit depth ($2^{-24} = 5.96 \times 10^{-8}$).

| distance $D$ | $\Delta D \approx \frac{(f-n)D^2}{fn}2^{-24}$ |
|---|---|
| 1 m | $6.0 \times 10^{-7}$ m |
| 10 m | $6.0 \times 10^{-5}$ m |
| 100 m | $6.0 \times 10^{-3}$ m (6 mm) |
| 1000 m | $0.60$ m |

A road decal lying 5 cm above the road is fine at 100 m and fights the road at 1000 m, where surfaces within 60 cm of each other quantise to the same depth. Raising the near plane to $n = 1$ m improves **every** row by a factor of 10 — 6 cm at the far plane. Pulling the far plane in to 500 m instead barely changes anything at a given $D$, because $(f-n)/f \approx 1$ either way.

This is why engines set the near plane as far out as the camera can tolerate, and why many modern engines store depth as a float with the mapping reversed (far at 0, near at 1), which spreads floating-point precision far more evenly.

## Watch out

- **You might think** clipping is optional because the rasterizer only visits on-screen pixels anyway — **but actually** the side planes can be skipped (guard band) but the near plane cannot: a vertex with $w \le 0$ has no meaningful screen position at all, and dividing by it inverts geometry through the eye.
- **You might think** the z-buffer makes draw order irrelevant — **but actually** it only makes the *result* order-independent for opaque surfaces. Cost is not: drawing back to front shades every layer and overwrites it (overdraw), while front to back lets the depth test reject hidden fragments. And for **transparent** surfaces, which blend with what is behind instead of replacing it, order matters for correctness too — they must be sorted.
- **You might think** z-fighting is fixed by pulling in the far plane — **but actually** $\Delta D \approx D^2 2^{-b}/n$ hardly depends on $f$. The lever is the near plane: doubling $n$ halves every depth error.

## One-liner

> Clip in clip space, where $-w \le x, y, z \le w$ is linear and rejects everything behind the eye; then resolve visibility with a per-pixel running minimum of depth, whose resolution falls off as $D^2/n$.

## Problems

**P1 (🟢)** One pixel starts with depth $1.0$ and a black background. Three fragments arrive in this order: red at depth $0.62$, green at $0.35$, blue at $0.48$.
(a) Give the depth and colour after each fragment, and the final colour.
(b) How many buffer writes happened? How many would happen if the fragments arrived in the order green, blue, red? In the order red, blue, green?

**P2 (🟡)** Same projection as Example 1 ($n = 1$, $f = 10$, $90°$, aspect 1). An edge runs from eye-space $\mathbf{p} = (1, 2, -3)$ to $\mathbf{q} = (3, -2, 1)$.
(a) Give both endpoints in clip space and their near-plane distances $d = z + w$.
(b) Find the crossing parameter $t$ and the clip-space crossing point. Check that it corresponds to the eye-space point on the edge at the same $t$.
(c) Give the NDC of the crossing point. What will happen to it next?
(d) What NDC $x$ would you have got by dividing $\mathbf{q}$ directly?

**P3 (🔴)** A flight simulator uses $n = 0.5$ m, $f = 500$ m and a 24-bit depth buffer.
(a) Find the depth resolution $\Delta D$ at 10 m and at 400 m.
(b) Beyond what distance does $\Delta D$ exceed 1 cm?
(c) A designer proposes $n = 0.05$ m "so the cockpit glass doesn't clip." What does that do to the 1 cm distance in (b)?

<details>
<summary>Solutions</summary>

**P1**

(a)

| fragment | test | depth after | colour after |
|---|---|---|---|
| red, $0.62$ | $0.62 < 1.0$ ✓ | $0.62$ | red |
| green, $0.35$ | $0.35 < 0.62$ ✓ | $0.35$ | green |
| blue, $0.48$ | $0.48 < 0.35$ ✗ | $0.35$ | green |

Final colour: **green**, the nearest.

(b) In the given order: **2 writes** (red, green). Order green, blue, red: only green passes, **1 write** — front to back is the cheapest. Order red, blue, green: every fragment is nearer than the last ($0.62 \to 0.48 \to 0.35$), **3 writes**. The final pixel is green in all three orders; only the wasted work changes.

**P2**

(a) Clip $= (x,\ y,\ -\tfrac{11}{9}z - \tfrac{20}{9},\ -z)$.

$\mathbf{p}$: $(1,\ 2,\ \tfrac{33 - 20}{9},\ 3) = (1,\ 2,\ 1.444,\ 3)$, so $d = 1.444 + 3 = \mathbf{4.444}$.

$\mathbf{q}$: $(3,\ -2,\ \tfrac{-11 - 20}{9},\ -1) = (3,\ -2,\ -3.444,\ -1)$, so $d = -3.444 - 1 = \mathbf{-4.444}$.

(b) $t = \dfrac{4.444}{4.444 - (-4.444)} = \mathbf{0.5}$. Crossing: $\tfrac12(\mathbf{p}_{\text{clip}} + \mathbf{q}_{\text{clip}}) = (2,\ 0,\ -1,\ 1)$.

Eye-space point at $t = 0.5$: $\tfrac12\big((1,2,-3) + (3,-2,1)\big) = (2,\ 0,\ -1)$, which is on the near plane $z = -1$, and its clip coordinates are $(2,\ 0,\ -\tfrac{11}{9}(-1) - \tfrac{20}{9},\ 1) = (2, 0, -1, 1)$. ✓ Interpolating in clip space matches interpolating in eye space, because the projection matrix is linear *before* the divide.

(c) NDC $= (2,\ 0,\ -1)$. It is on the near plane but has $x_{\text{ndc}} = 2$, off the right of the screen. It is a legitimate vertex; the rasterizer's guard band (or a further clip against $x = w$) takes care of the off-screen part.

(d) $3/(-1) = \mathbf{-3}$: the far right of the true geometry is reported at the far **left**.

**P3**

Use $\Delta D = \dfrac{(f-n)D^2}{fn}2^{-24}$ with $\dfrac{f-n}{fn} = \dfrac{499.5}{250} = 1.998$ and $2^{-24} = 5.960 \times 10^{-8}$.

(a) At 10 m: $1.998 \times 100 \times 5.960 \times 10^{-8} = \mathbf{1.19 \times 10^{-5}}$ m (0.012 mm).
At 400 m: $1.998 \times 160{,}000 \times 5.960 \times 10^{-8} = \mathbf{0.0191}$ m (1.9 cm).

(b) Solve $1.998\,D^2 \times 5.960 \times 10^{-8} = 0.01$:

$$D^2 = \frac{0.01}{1.191 \times 10^{-7}} = 83{,}970, \qquad D \approx \mathbf{290\ m}.$$

(c) With $n = 0.05$: $\dfrac{f-n}{fn} = \dfrac{499.95}{25} = 19.998$, ten times larger, so $D^2$ is ten times smaller and $D \approx 290/\sqrt{10} \approx \mathbf{92\ m}$. The 1 cm guarantee now ends at 92 m instead of 290 m — a tenfold worse depth error everywhere, to gain 45 cm of near clearance. (The usual fix is to render the cockpit in a separate pass with its own small near and far planes.)

</details>

## Flashback

**From Lesson 1.5 (projection):** An orthographic camera uses the box $l = -4$, $r = 4$, $b = -3$, $t = 3$, $n = 1$, $f = 21$.
(a) Write $P_{\text{ortho}}$.
(b) Find the NDC of the eye-space point $(2, -1.5, -6)$.
(c) Move the point to $(2, -1.5, -16)$. What happens to its NDC $x$ and $z$, and how does that differ from what a perspective camera would do?

<details>
<summary>Solution</summary>

(a) $\frac{2}{r-l} = 0.25$, $\frac{2}{t-b} = \frac13$, $-\frac{2}{f-n} = -0.1$, $-\frac{f+n}{f-n} = -1.1$, and both $l, r$ and $b, t$ are symmetric so their translation entries vanish:

$$P_{\text{ortho}} = \begin{pmatrix} 0.25 & 0 & 0 & 0 \\ 0 & 0.3333 & 0 & 0 \\ 0 & 0 & -0.1 & -1.1 \\ 0 & 0 & 0 & 1 \end{pmatrix}.$$

(b) $(0.25 \cdot 2,\ \tfrac13(-1.5),\ -0.1(-6) - 1.1) = (0.5,\ -0.5,\ -0.5)$, with $w = 1$ so no divide.

(c) $x_{\text{ndc}} = 0.5$ **unchanged**: orthographic projection has no foreshortening. $z_{\text{ndc}} = -0.1(-16) - 1.1 = 0.5$: ten more units of depth moved it by exactly $1.0$, half the NDC range — depth is **linear** here.

A perspective camera would have shrunk $x$ by the depth ratio $6/16$ and compressed the depth change into a small sliver near $z_{\text{ndc}} = 1$.

</details>

## Connections

- **Backward:** the clip inequalities are [1.5](01-05-projection-orthographic-and-perspective.md)'s NDC cube with the divide undone, and the depth precision formula is the derivative of its $1/z$ mapping. Depth is interpolated with [2.1](02-01-rasterizing-lines-and-triangles.md)'s barycentric weights.
- **Forward:** [2.3](02-03-perspective-correct-interpolation.md) explains why depth may be interpolated linearly in screen space but texture coordinates may not. [3.2](03-02-shadow-mapping.md) renders a z-buffer *from the light* and reuses it as a visibility query, inheriting this lesson's precision problems as shadow acne. [3.1](03-01-the-programmable-gpu-pipeline.md) exploits front-to-back ordering with early depth testing.
- **Sideways:** depth quantisation is [`computer-architecture` 2.3](../../computer-architecture/lessons/02-03-floating-point-ieee-754.md)'s non-uniform representable-number spacing in another guise — which is exactly why reversed-Z pairs so well with floating-point depth, whose spacing is densest near 0.
