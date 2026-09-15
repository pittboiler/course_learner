# Computer Graphics · Lesson 1.5: Projection — Orthographic & Perspective

> ⏱ ~15 min · Module 1: Transformations & Viewing · Builds on: [1.4 (the view transform)](01-04-the-camera-and-view-transform.md), [1.2 (homogeneous coordinates)](01-02-2d-transforms-homogeneous-coordinates.md) · Unlocks: [2.1 (rasterization)](02-01-rasterizing-lines-and-triangles.md), [2.2 (clipping and the z-buffer)](02-02-clipping-and-the-z-buffer.md), [2.3 (perspective-correct interpolation)](02-03-perspective-correct-interpolation.md)

## Why this matters

Railway tracks meet at the horizon. A person twice as far away looks half as tall. That is **perspective**, and it is a division: apparent size is true size over distance. Division by a coordinate is not linear, and not affine either — so for a moment it looks as if the matrix pipeline of [1.2](01-02-2d-transforms-homogeneous-coordinates.md)–[1.4](01-04-the-camera-and-view-transform.md) has hit a wall.

It hasn't, because homogeneous coordinates were hiding a spare degree of freedom. Let the last coordinate be something other than 1, divide by it at the end, and perspective becomes a $4 \times 4$ matrix like everything else. This lesson derives that matrix, and in doing so explains three things that will matter for the rest of Module 2: why depth precision is uneven, why clipping must happen before the divide, and why textures need special care.

## The idea

Put a pane of glass a distance $n$ in front of your eye and trace the scene onto it. A point at height $y$ and distance $d$ lands on the glass at height $n\,y/d$ — similar triangles. That is the entire content of perspective.

The matrix trick: you cannot divide inside a matrix, but you *can* copy the distance into the fourth coordinate. Produce $(n\,x,\ n\,y,\ \cdot,\ d)$, and agree that a homogeneous point $(X, Y, Z, W)$ means the ordinary point $(X/W, Y/W, Z/W)$. The division happens afterwards, once, for everyone. That **perspective divide** is the only non-linear step in the whole transform chain.

**Orthographic** projection skips the division: it just drops depth, like a technical drawing or a shadow from the sun. Parallel lines stay parallel and size doesn't change with distance. Both projections also do one more job: squash the visible region into a standard cube, so that everything downstream (clipping, rasterization, depth) can be written once for that cube.

## The formal version

**The canonical view volume.** After projection and division, the visible region is the cube $[-1, 1]^3$, in **normalized device coordinates** (NDC): $x_{\text{ndc}} = -1$ is the left edge of the screen, $+1$ the right; $z_{\text{ndc}} = -1$ is the near plane, $+1$ the far plane. *(card: [Normalized device coordinates](../reference.md#normalized-device-coordinates))*

**The view frustum.** In eye space (camera at the origin looking down $-z$, from [1.4](01-04-the-camera-and-view-transform.md)), the visible region is a truncated pyramid between the **near plane** $z = -n$ and the **far plane** $z = -f$, with $0 < n < f$. Its top edge is at $y = t$ on the near plane, set by the vertical field of view: $t = n\tan(\text{fovy}/2)$; its right edge is $r = a\,t$ for aspect ratio $a = $ width/height.

**Orthographic projection** maps the box $[l, r] \times [b, t] \times [-f, -n]$ to the cube by a scale and a translation per axis:

$$P_{\text{ortho}} = \begin{pmatrix} \frac{2}{r-l} & 0 & 0 & -\frac{r+l}{r-l} \\ 0 & \frac{2}{t-b} & 0 & -\frac{t+b}{t-b} \\ 0 & 0 & -\frac{2}{f-n} & -\frac{f+n}{f-n} \\ 0 & 0 & 0 & 1 \end{pmatrix}.$$

In words: it is affine, $w$ stays 1, and depth maps linearly. The $-$ on the $z$ scale flips "more negative is farther" into "larger is farther".

**Perspective projection**, for a symmetric frustum. Write $s = \cot(\text{fovy}/2) = n/t$.

$$P_{\text{persp}} = \begin{pmatrix} s/a & 0 & 0 & 0 \\ 0 & s & 0 & 0 \\ 0 & 0 & A & B \\ 0 & 0 & -1 & 0 \end{pmatrix}, \qquad A = -\frac{f+n}{f-n}, \quad B = -\frac{2fn}{f-n}.$$

*(card: [Perspective matrix](../reference.md#perspective-matrix))*

**Derivation.**

1. *The $w$ row* is $(0, 0, -1, 0)$, so $w_{\text{clip}} = -z$: the distance in front of the eye.
2. *The $x$ and $y$ rows.* After dividing, $y_{\text{ndc}} = s\,y/(-z)$. On the near plane's top edge, $y = t$ and $-z = n$, so $y_{\text{ndc}} = s\,t/n = 1$. ✓ That is the similar-triangles rule, rescaled so the frustum's edge lands on $\pm1$. The $x$ row is the same divided by the aspect ratio.
3. *The $z$ row* can't depend on $x$ or $y$ (depth shouldn't change as you look sideways), so it is $(0, 0, A, B)$, and after dividing
$$z_{\text{ndc}} = \frac{Az + B}{-z} = -A - \frac{B}{z}.$$
Require $z = -n \mapsto -1$ and $z = -f \mapsto +1$:
$$-A + \frac{B}{n} = -1, \qquad -A + \frac{B}{f} = 1.$$
Subtracting the second from the first, $B\left(\frac1n - \frac1f\right) = -2$, so $B = -\frac{2fn}{f-n}$. The first equation then gives
$$A = 1 + \frac{B}{n} = \frac{f-n}{f-n} - \frac{2f}{f-n} = -\frac{f+n}{f-n}.$$

In words: $x$ and $y$ are scaled so the frustum's sides hit $\pm1$ after the divide, $w$ records distance, and the depth row is the unique choice that pins the near and far planes to $-1$ and $+1$.

**Depth is not linear.** $z_{\text{ndc}} = -A - B/z$ is linear in $1/z$, not in $z$. Half of the NDC depth range is spent between the near plane and the eye depth $2fn/(f+n)$ — roughly $2n$ when $f \gg n$. [2.2](02-02-clipping-and-the-z-buffer.md) turns this into a precision budget.

**The viewport transform** maps NDC to pixel coordinates on a $W \times H$ screen (with $y$ up):

$$x_s = \frac{x_{\text{ndc}} + 1}{2}W, \qquad y_s = \frac{y_{\text{ndc}} + 1}{2}H, \qquad \text{depth} = \frac{z_{\text{ndc}} + 1}{2} \in [0, 1].$$

*(card: [Viewport transform](../reference.md#viewport-transform))*

## Picture

![A side view of a perspective frustum, depth running right from a blue eye point. Two grey lines fan out from the eye to a far plane on the right; a short blue vertical segment marks the near plane close to the eye. Two identical coral poles stand on the axis, one at depth 4 and one at depth 8. Dashed coral sight lines from the eye to the top of each pole cross the near plane at heights 0.7 and 0.35. A note reads y on the near plane equals n y over minus z, and dividing by depth is foreshortening](assets/01-05-fig1.svg)

The two poles are the same height; the far one's sight line crosses the glass at half the height. The matrix never divides — it copies depth into $w$, and the divide produces exactly this picture.

## Worked examples

**Example 1 (mechanical): one point, all the way to a pixel.** Field of view $60°$ vertical, aspect $16/9$, $n = 0.1$, $f = 100$, screen $1920 \times 1080$. Eye-space point $(1,\ 0.5,\ -4)$.

*Matrix entries.* $s = \cot 30° = 1.73205$; $s/a = 1.73205 \times 9/16 = 0.97428$.

$$A = -\frac{100.1}{99.9} = -1.00200, \qquad B = -\frac{2(100)(0.1)}{99.9} = -0.20020.$$

*Clip coordinates.*

$$\big(0.97428 \cdot 1,\ \ 1.73205 \cdot 0.5,\ \ -1.00200(-4) - 0.20020,\ \ 4\big) = (0.97428,\ 0.86603,\ 3.80781,\ 4).$$

*Divide by $w = 4$.* NDC $= (0.24357,\ 0.21651,\ 0.95195)$. All three lie in $[-1, 1]$: the point is visible.

*Viewport.* $x_s = 1.24357/2 \times 1920 = 1193.8$, $y_s = 1.21651/2 \times 1080 = 656.9$, depth $= 1.95195/2 = 0.976$.

Notice the depth: the point is at distance 4 in a range running from 0.1 to 100 — about 4% of the way to the far plane — yet its stored depth is **0.976**. That is the $1/z$ nonlinearity at work.

**Example 2 (why you'd care): projection does not preserve midpoints.** Take $90°$ field of view, aspect 1, $n = 1$, $f = 100$ (so $s = 1$). Two eye-space points at the same $x = 1$: $\mathbf{p} = (1, 0, -1)$ and $\mathbf{q} = (1, 0, -9)$. Their eye-space midpoint is $\mathbf{m} = (1, 0, -5)$.

| point | $x_{\text{ndc}} = x/(-z)$ |
|---|---|
| $\mathbf{p}$ at depth 1 | $1$ |
| $\mathbf{q}$ at depth 9 | $0.111$ |
| $\mathbf{m}$ at depth 5 | $0.200$ |
| average of $\mathbf{p}$'s and $\mathbf{q}$'s screen positions | $0.556$ |

The true midpoint lands at $0.200$; the screen-space midpoint is at $0.556$. **Perspective maps lines to lines, but not evenly**: the near half of a receding segment takes up most of its screen length. Projection is a *projective* map, not an affine one, so [1.2](01-02-2d-transforms-homogeneous-coordinates.md)'s guarantee — affine combinations are preserved — no longer holds. Any quantity you interpolate linearly in screen space (texture coordinates, colours, depth for some purposes) will be wrong unless corrected. [2.3](02-03-perspective-correct-interpolation.md) derives the correction, and it uses the $w$ this matrix put there.

## Watch out

- **You might think** the perspective matrix performs the projection — **but actually** it only sets up $w = -z$; the projection happens in the divide. Before the divide, points behind the camera have $w < 0$, and dividing by a negative $w$ flips them to the front, mirrored. That is why clipping is done in clip space, *before* dividing ([2.2](02-02-clipping-and-the-z-buffer.md)).
- **You might think** depth in NDC is proportional to distance — **but actually** it is affine in $1/z$. With $n = 0.1$ and $f = 100$, a point 4 units away already has depth $0.976$. Pushing $n$ out buys far more precision than pulling $f$ in.
- **You might think** $n$ can be set to $0$ to see things right up against the lens — **but actually** $B = -2fn/(f-n) = 0$ then, and every depth maps to $z_{\text{ndc}} = -A = 1$: the depth buffer becomes useless. The near plane is a precision parameter, not just a clipping convenience.

## One-liner

> Perspective is one division by depth; the matrix copies depth into $w$ so the divide can do it, scales $x$ and $y$ so the frustum's edges hit $\pm1$, and pins near and far to $-1$ and $+1$ in $1/z$.

## Problems

**P1 (🟢)** Field of view $90°$ vertical, aspect ratio 2, $n = 1$, $f = 10$.
(a) Write $P_{\text{persp}}$ with numeric entries.
(b) Push the eye-space point $(2, 1, -4)$ through it: give clip coordinates and NDC, and say whether the point is visible.

**P2 (🟡)** A frustum has $n = 2$ and $f = 6$.
(a) Compute $A$ and $B$.
(b) Find $z_{\text{ndc}}$ for the point at eye depth $z = -4$, halfway between the near and far planes.
(c) Find the eye depth that maps to $z_{\text{ndc}} = 0$, and compare it with $2fn/(f+n)$.

**P3 (🔴)** An object has model matrix $M = T(0, 0, -6)\,R_y(45°)$; the camera is at the origin looking down $-z$ with up $(0,1,0)$, field of view $60°$, aspect 1, $n = 1$, $f = 11$; the viewport is $800 \times 800$.
(a) Find the world (and eye) coordinates of the object-space vertex $(1, 0, 1)$.
(b) Find its NDC and pixel coordinates, and state which clip test, if any, it fails.
(c) How far to the right, in world units, can a point at depth $z = -6$ be and still be on screen?

<details>
<summary>Solutions</summary>

**P1**

(a) $s = \cot 45° = 1$, $s/a = 0.5$. $A = -11/9 = -1.2222$, $B = -2(10)(1)/9 = -2.2222$.

$$P = \begin{pmatrix} 0.5 & 0 & 0 & 0 \\ 0 & 1 & 0 & 0 \\ 0 & 0 & -1.2222 & -2.2222 \\ 0 & 0 & -1 & 0 \end{pmatrix}.$$

(b) Clip: $(0.5 \cdot 2,\ 1 \cdot 1,\ -1.2222(-4) - 2.2222,\ 4) = (1,\ 1,\ 2.6667,\ 4)$.

NDC: divide by 4, giving $(0.25,\ 0.25,\ 0.6667)$. All within $[-1,1]$: **visible**.

**P2**

(a) $A = -\dfrac{6+2}{6-2} = \mathbf{-2}$, $\quad B = -\dfrac{2 \cdot 6 \cdot 2}{6 - 2} = \mathbf{-6}$.

(b) $z_{\text{ndc}} = \dfrac{Az + B}{-z} = \dfrac{-2(-4) - 6}{4} = \dfrac{2}{4} = \mathbf{0.5}$.

The depth halfway between near and far is three-quarters of the way through NDC's range $[-1, 1]$, not halfway.

(c) Set $-A - B/z = 0$: $2 + 6/z = 0$, so $z = \mathbf{-3}$. And $2fn/(f+n) = 24/8 = 3$. ✓ The NDC midpoint sits at the **harmonic** mean of the near and far distances, not the arithmetic mean (which is 4). Half the depth range is spent on the first unit of a four-unit-deep frustum.

**P3**

(a) $R_y(45°)$ with $c = s = 0.7071$ sends $(1, 0, 1)$ to $(c\cdot1 + s\cdot1,\ 0,\ -s\cdot1 + c\cdot1) = (1.4142,\ 0,\ 0)$. Translating gives world $(1.4142,\ 0,\ -6)$. The view matrix is the identity, so eye coordinates are the same.

(b) $s = \cot 30° = 1.7321$; $A = -12/10 = -1.2$; $B = -2(11)(1)/10 = -2.2$.

Clip: $(1.7321 \times 1.4142,\ 0,\ -1.2(-6) - 2.2,\ 6) = (2.4495,\ 0,\ 5.0,\ 6)$.

NDC: $(0.4082,\ 0,\ 0.8333)$. Pixels: $x_s = 1.4082/2 \times 800 = 563.3$, $y_s = 400$, depth $= 0.9167$.

All NDC coordinates lie in $[-1, 1]$: **it fails no clip test**. Equivalently, in clip space, $-w \le x, y, z \le w$ holds with $w = 6$.

(c) The right edge is $x_{\text{ndc}} = 1$, i.e. $s\,x/(-z) = 1$, so $x = -z/s = 6\tan 30° = \mathbf{3.464}$ units. The vertex at $x = 1.414$ is well inside.

</details>

## Flashback

**From Lesson 1.3 (frames and normals):** A mesh is placed with linear block $A = S(2, 1, 1)\,R_z(45°)$ (rotate, then stretch along $x$). At one vertex the object-space normal is $\mathbf{n} = (0, 1, 0)$ and a tangent is $\mathbf{t} = (1, 0, 0)$.
(a) Compute the transformed tangent $A\mathbf{t}$.
(b) Compute the correct world-space unit normal.
(c) Compute the unit vector you would get by (wrongly) using $A\mathbf{n}$, and check which of the two is perpendicular to $A\mathbf{t}$.

<details>
<summary>Solution</summary>

$R_z(45°)$ has block $\tfrac{1}{\sqrt2}\begin{pmatrix} 1 & -1 & 0 \\ 1 & 1 & 0 \\ 0 & 0 & \sqrt2 \end{pmatrix}$.

(a) $R_z(45°)\,\mathbf{t} = (0.707,\ 0.707,\ 0)$; stretching $x$ by 2 gives $A\mathbf{t} = \mathbf{(1.414,\ 0.707,\ 0)}$.

(b) $(A^{-1})^T = \big(R^{-1}S^{-1}\big)^T = (S^{-1})^T (R^{-1})^T = S^{-1} R$, using $S^T = S$ and $(R^{-1})^T = R$. So rotate, then **shrink** $x$ by 2:

$$R\,\mathbf{n} = (-0.707,\ 0.707,\ 0) \xrightarrow{S^{-1}} (-0.354,\ 0.707,\ 0) \xrightarrow{\text{normalize}} \mathbf{(-0.447,\ 0.894,\ 0)}.$$

(c) $A\mathbf{n} = S(-0.707, 0.707, 0) = (-1.414, 0.707, 0)$, normalized $(-0.894,\ 0.447,\ 0)$.

Perpendicularity against $A\mathbf{t} = (1.414, 0.707, 0)$:

- correct: $(-0.354)(1.414) + (0.707)(0.707) = -0.5 + 0.5 = 0$ ✓
- wrong: $(-1.414)(1.414) + (0.707)(0.707) = -2 + 0.5 = -1.5 \ne 0$

The stretch along $x$ must be *undone* for the normal, which is exactly what $S^{-1}$ does.

</details>

## Connections

- **Backward:** the $w$ coordinate introduced for translation in [1.2](01-02-2d-transforms-homogeneous-coordinates.md) now carries depth; the camera pose it assumes is [1.4](01-04-the-camera-and-view-transform.md)'s view matrix. Chaining $P\,V\,M$ completes the vertex-processing box of [1.1](01-01-the-graphics-pipeline.md)'s pipeline.
- **Forward:** [2.1](02-01-rasterizing-lines-and-triangles.md) starts from the pixel coordinates the viewport transform produces. [2.2](02-02-clipping-and-the-z-buffer.md) clips against $-w \le x, y, z \le w$ and turns the $1/z$ depth mapping into a precision budget. [2.3](02-03-perspective-correct-interpolation.md) fixes Example 2's broken midpoints using $1/w$. [3.2](03-02-shadow-mapping.md) reuses the same matrix from the light's point of view.
- **Sideways:** "a point is a line through the origin, and $(X, Y, Z, W) \sim \lambda(X, Y, Z, W)$" is the definition of projective space in [`algebraic-geometry` 2.3](../../algebraic-geometry/lessons/02-03-projective-space.md); the perspective matrix is a projective transformation of $\mathbb{P}^3$, which is why it preserves lines but not ratios along them. The pinhole camera model is the same similar-triangles rule as the thin-lens image formation of [`waves-optics` 3.3](../../waves-optics/lessons/03-03-lenses-optical-instruments.md), with the lens shrunk to a point.
