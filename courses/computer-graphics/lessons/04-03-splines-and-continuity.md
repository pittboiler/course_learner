# Computer Graphics · Lesson 4.3: Splines & Continuity

> ⏱ ~15 min · Module 4: Geometric Modeling & Animation · Builds on: [4.2 (Bézier curves)](04-02-bezier-curves-de-casteljau.md), [`numerical-analysis` 2.2 (interpolating splines)](../../numerical-analysis/lessons/02-02-runge-splines.md) · Unlocks: [4.4 (patches)](04-04-bezier-surface-patches.md), [4.6 (keyframe interpolation)](04-06-keyframes-and-rotation-interpolation.md)

## Why this matters

A single Bézier curve has no local control: move one handle and the whole curve shifts ([4.2](04-02-bezier-curves-de-casteljau.md)). Real shapes — a font outline, a road, a camera path — are built from many short segments. The question that decides whether the result looks designed or broken is **what happens at the joins**.

"Smooth" turns out to mean several different things. A curve can be unbroken but kinked; unkinked but with a sudden change of speed; smooth in speed but with a jump in curvature that you *see* as a flat spot in a reflection. Each level is a condition on a few control points, and each is the right requirement for some job — which is why modeling tools offer "corner", "smooth" and "symmetric" handles. [`numerical-analysis` 2.2](../../numerical-analysis/lessons/02-02-runge-splines.md) owns splines that *interpolate* data by solving a global system; this lesson is about the parametric curves designers steer by hand, and the local rules that make them smooth.

## The idea

**Continuity has levels.** Picture driving along the curve at the speed the parameter dictates.

- **$C^0$:** the road doesn't break — segments meet.
- **$G^1$:** no kink — the road's direction is the same on both sides of the join, though your speed might jump.
- **$C^1$:** direction *and* speed match — your velocity is continuous.
- **$C^2$:** your acceleration is continuous too — no sudden jerk of the steering wheel.

$G^1$ is about the *shape*; $C^1$ is about the *motion along it*. A font only needs $G^1$. A camera path needs $C^1$ or the camera lurches.

**Two families of fixes.** You can place control points so the joins satisfy the conditions — Bézier segments with tied handles, or **Catmull–Rom** splines that pass through every key point and pick tangents automatically. Or you can use a basis that is smooth by construction — **B-splines**, which are $C^2$ everywhere and move only locally when you drag a point, at the price of not passing through their control points.

## The formal version

**Continuity of a join.** Two curves $\mathbf{P}(t)$ and $\mathbf{Q}(t)$, $t \in [0,1]$, with $\mathbf{P}(1) = \mathbf{Q}(0)$, are joined with

- **$C^k$ continuity** if $\mathbf{P}^{(j)}(1) = \mathbf{Q}^{(j)}(0)$ for $j = 0, \dots, k$;
- **$G^1$ continuity** if $\mathbf{Q}'(0) = \lambda\,\mathbf{P}'(1)$ for some $\lambda > 0$ (same tangent direction).

*(card: [Parametric and geometric continuity](../reference.md#parametric-and-geometric-continuity))*

**For cubic Bézier segments** $\mathbf{P}_0\mathbf{P}_1\mathbf{P}_2\mathbf{P}_3$ and $\mathbf{Q}_0\mathbf{Q}_1\mathbf{Q}_2\mathbf{Q}_3$, using [4.2](04-02-bezier-curves-de-casteljau.md)'s endpoint derivatives $\mathbf{P}'(1) = 3(\mathbf{P}_3 - \mathbf{P}_2)$ and $\mathbf{P}''(1) = 6(\mathbf{P}_3 - 2\mathbf{P}_2 + \mathbf{P}_1)$:

| level | condition |
|---|---|
| $C^0$ | $\mathbf{Q}_0 = \mathbf{P}_3$ |
| $G^1$ | $C^0$, and $\mathbf{Q}_1 - \mathbf{Q}_0 = \lambda(\mathbf{P}_3 - \mathbf{P}_2)$, $\lambda > 0$ |
| $C^1$ | $C^0$, and $\mathbf{Q}_1 = 2\mathbf{P}_3 - \mathbf{P}_2$ (the join is the midpoint of $\mathbf{P}_2\mathbf{Q}_1$) |
| $C^2$ | $C^1$, and $\mathbf{Q}_2 = \mathbf{P}_1 - 2\mathbf{P}_2 + 2\mathbf{Q}_1$ |

In words: $C^1$ means the handles on either side of the join are collinear **and equal in length**; $G^1$ drops "equal". *(card: [Bézier join conditions](../reference.md#bezier-join-conditions))*

**Cubic Hermite form.** A segment specified by endpoints and endpoint tangents:

$$\mathbf{p}(t) = h_{00}(t)\,\mathbf{p}_0 + h_{10}(t)\,\mathbf{m}_0 + h_{01}(t)\,\mathbf{p}_1 + h_{11}(t)\,\mathbf{m}_1,$$
$$h_{00} = 2t^3 - 3t^2 + 1, \quad h_{10} = t^3 - 2t^2 + t, \quad h_{01} = -2t^3 + 3t^2, \quad h_{11} = t^3 - t^2.$$

Equivalently, the cubic Bézier with control points $\mathbf{p}_0,\ \mathbf{p}_0 + \mathbf{m}_0/3,\ \mathbf{p}_1 - \mathbf{m}_1/3,\ \mathbf{p}_1$. Sharing endpoints and tangents between neighbouring segments makes the spline $C^1$. *(card: [Cubic Hermite segment](../reference.md#cubic-hermite-segment))*

**Catmull–Rom splines** interpolate a sequence of points $\mathbf{p}_i$ by choosing the tangent at each from its neighbours:

$$\mathbf{m}_i = \frac{\mathbf{p}_{i+1} - \mathbf{p}_{i-1}}{2}.$$

The segment from $\mathbf{p}_i$ to $\mathbf{p}_{i+1}$ has Bézier control points $\mathbf{p}_i,\ \mathbf{p}_i + \tfrac16(\mathbf{p}_{i+1} - \mathbf{p}_{i-1}),\ \mathbf{p}_{i+1} - \tfrac16(\mathbf{p}_{i+2} - \mathbf{p}_i),\ \mathbf{p}_{i+1}$. It passes through every point, is $C^1$, and each segment depends on only four points. *(card: [Catmull-Rom spline](../reference.md#catmull-rom-spline))*

**Uniform cubic B-splines.** Given control points $\mathbf{c}_0, \mathbf{c}_1, \dots$, segment $i$ ($t \in [0,1]$) is

$$\mathbf{s}_i(t) = \frac{(1-t)^3}{6}\mathbf{c}_i + \frac{3t^3 - 6t^2 + 4}{6}\mathbf{c}_{i+1} + \frac{-3t^3 + 3t^2 + 3t + 1}{6}\mathbf{c}_{i+2} + \frac{t^3}{6}\mathbf{c}_{i+3}.$$

At the joins, $\mathbf{s}_i(1) = \mathbf{s}_{i+1}(0) = \tfrac16(\mathbf{c}_{i+1} + 4\mathbf{c}_{i+2} + \mathbf{c}_{i+3})$, first derivative $\tfrac12(\mathbf{c}_{i+3} - \mathbf{c}_{i+1})$, second derivative $\mathbf{c}_{i+1} - 2\mathbf{c}_{i+2} + \mathbf{c}_{i+3}$ — all shared, so the curve is **$C^2$ automatically**. It does **not** pass through the control points, and each control point influences exactly four segments (**local control**). *(card: [Uniform cubic B-spline](../reference.md#uniform-cubic-b-spline))*

| spline | interpolates points? | continuity | local control |
|---|---|---|---|
| Bézier segments, tied handles | endpoints of each segment | $G^1$ or $C^1$ by construction | yes |
| Catmull–Rom | yes, all | $C^1$ | yes (4 points per segment) |
| uniform cubic B-spline | no | $C^2$ | yes (4 segments per point) |
| natural cubic interpolating spline ([`numerical-analysis` 2.2](../../numerical-analysis/lessons/02-02-runge-splines.md)) | yes, all | $C^2$ | **no** (global solve) |

## Picture

![A grey cubic arch ending at a circled join point P3 equals Q0 at 5,0, with its last control point P2 up and to the left. Two continuations run to 10,0. The blue one has first control point Q1 equals 2 P3 minus P2, on the extension of the grey handle at equal length, labelled C1. The coral one has Q1 equals P3 plus 2 times P3 minus P2, on the same line but twice as far, labelled G1 only, and dips lower. Note: same direction at the join, but the coral curve leaves twice as fast, speed 9.5 then 19.0](assets/04-03-fig1.svg)

Both continuations leave the join in exactly the direction the grey curve arrived — no kink in either. Only the blue one leaves at the same *speed*. As shapes, both are smooth; as paths for something to travel along, only blue is.

## Worked examples

**Example 1 (mechanical): extend a curve with $C^1$ and then $C^2$.** Start from [4.2](04-02-bezier-curves-de-casteljau.md)'s arch $\mathbf{P} = (0,0), (1,3), (4,3), (5,0)$.

*$C^0$:* $\mathbf{Q}_0 = (5, 0)$.

*$C^1$:* $\mathbf{Q}_1 = 2(5,0) - (4,3) = (6, -3)$. Check: $\mathbf{P}'(1) = 3\big((5,0) - (4,3)\big) = (3, -9)$ and $\mathbf{Q}'(0) = 3\big((6,-3) - (5,0)\big) = (3, -9)$. ✓

*$C^2$:* $\mathbf{Q}_2 = \mathbf{P}_1 - 2\mathbf{P}_2 + 2\mathbf{Q}_1 = (1,3) - (8,6) + (12,-6) = (5, -9)$. Check: $\mathbf{P}''(1) = 6\big((5,0) - 2(4,3) + (1,3)\big) = 6(-2, -3) = (-12, -18)$ and $\mathbf{Q}''(0) = 6\big((5,0) - 2(6,-3) + (5,-9)\big) = 6(-2, -3) = (-12, -18)$. ✓

Notice that $C^2$ left the designer only $\mathbf{Q}_3$ to choose: three of the four control points of every new segment are dictated by the previous one. That rigidity is why nobody models with $C^2$ Bézier chains by hand — and why B-splines, which bake it in, exist.

**Example 2 (why you'd care): through the points, or near them?** Keyframe positions $(0,0), (1,2), (3,3), (4,1)$.

*Catmull–Rom, middle segment* from $(1,2)$ to $(3,3)$. Tangents: $\mathbf{m}_1 = \tfrac12\big((3,3) - (0,0)\big) = (1.5, 1.5)$ and $\mathbf{m}_2 = \tfrac12\big((4,1) - (1,2)\big) = (1.5, -0.5)$. Bézier control points:

$$(1, 2),\quad (1,2) + \tfrac13(1.5, 1.5) = (1.5,\ 2.5),\quad (3,3) - \tfrac13(1.5, -0.5) = (2.5,\ 3.167),\quad (3, 3).$$

At $t = 0.5$: weights $(\tfrac18, \tfrac38, \tfrac38, \tfrac18)$ give $\mathbf{(2,\ 2.75)}$. The curve passes through the keyframes at $t = 0$ and $t = 1$.

*Uniform B-spline with the same four points as controls* (one segment): it starts at $\tfrac16\big((0,0) + 4(1,2) + (3,3)\big) = (1.167,\ 1.833)$ and ends at $\tfrac16\big((1,2) + 4(3,3) + (4,1)\big) = (2.833,\ 2.5)$, with $\mathbf{s}(0.5) = (2,\ 2.417)$. It **misses both keyframes** — pulled toward the averages of its neighbours — but its joins with further segments would be $C^2$.

For an animator who set a character's foot on a mark at a frame, Catmull–Rom is right: the foot must hit the mark. For a car body surface whose reflections must flow without flat spots, the $C^2$ B-spline is right, and the designer moves control points until the shape is where they want it.

## Watch out

- **You might think** $G^1$ and $C^1$ are the same since both "look smooth" — **but actually** $C^1$ also demands matching speed. An object animated along a $G^1$-only path visibly lurches at every join, even though the path drawn on screen has no kink.
- **You might think** $C^1$ implies $G^1$ always — **but actually** a degenerate $C^1$ join with $\mathbf{P}'(1) = \mathbf{Q}'(0) = \mathbf{0}$ (coincident handles) can have a sharp corner: velocity passes through zero and the direction flips. Parametric continuity is about the parameterization, not the shape.
- **You might think** Catmull–Rom tangents make the curve $C^2$ like an interpolating spline — **but actually** it is only $C^1$: second derivatives generally jump at every key point. The natural cubic interpolating spline of [`numerical-analysis` 2.2](../../numerical-analysis/lessons/02-02-runge-splines.md) gets $C^2$ by solving for all tangents at once, and pays by losing local control.

## One-liner

> $C^0$ meets, $G^1$ matches direction, $C^1$ matches velocity, $C^2$ matches acceleration; for Bézier chains $C^1$ means $\mathbf{Q}_1 = 2\mathbf{P}_3 - \mathbf{P}_2$, Catmull–Rom buys interpolation with $C^1$, and B-splines buy $C^2$ by giving up interpolation.

## Problems

**P1 (🟢)** Segment $\mathbf{P}$ ends with $\mathbf{P}_2 = (4, 3)$, $\mathbf{P}_3 = (5, 0)$. Classify each proposed start of the next segment as not $C^0$, $C^0$ only, $G^1$ but not $C^1$, or $C^1$, with a reason.
(a) $\mathbf{Q}_0 = (5, 0)$, $\mathbf{Q}_1 = (6, -3)$
(b) $\mathbf{Q}_0 = (5, 0)$, $\mathbf{Q}_1 = (7, -6)$
(c) $\mathbf{Q}_0 = (5, 0)$, $\mathbf{Q}_1 = (6, -2)$
(d) $\mathbf{Q}_0 = (5.1, 0)$, $\mathbf{Q}_1 = (6, -3)$

**P2 (🟡)** A uniform cubic B-spline has control points $\mathbf{c}_0 = (0,0)$, $\mathbf{c}_1 = (2,4)$, $\mathbf{c}_2 = (4,4)$, $\mathbf{c}_3 = (6,0)$, $\mathbf{c}_4 = (8,2)$, giving two segments.
(a) Compute where segment 0 starts and where it ends.
(b) Compute where segment 1 starts, and confirm $C^0$ at the join.
(c) Compute the first and second derivatives at the join from both sides' formulas.
(d) Moving $\mathbf{c}_0$ changes which segments?

**P3 (🔴)** A designer joins [4.2](04-02-bezier-curves-de-casteljau.md)'s arch $(0,0), (1,3), (4,3), (5,0)$ to a second segment $(5,0), (7,-6), (9,-4), (10,0)$.
(a) Show the join is $G^1$ but not $C^1$, and give the speed on each side.
(b) A camera travels the first segment in 1 second and the second in 1 second. Describe what happens at the join, and give a travel time for the second segment that makes the camera's velocity continuous.
(c) Alternatively, move a single control point of the second segment to make the join $C^1$ with both segments timed at 1 second. *Accept criterion:* any $\mathbf{Q}_1$ that satisfies the $C^1$ condition. Give it, and say what else about the second segment's shape changes.

<details>
<summary>Solutions</summary>

**P1**

The incoming handle is $\mathbf{P}_3 - \mathbf{P}_2 = (1, -3)$.

(a) $\mathbf{Q}_1 - \mathbf{Q}_0 = (1, -3)$, equal to the incoming handle: **$C^1$**.
(b) $(2, -6) = 2(1, -3)$: same direction, twice the length: **$G^1$ but not $C^1$**.
(c) $(1, -2)$ is not parallel to $(1, -3)$ (cross product $1\cdot(-2) - (-3)\cdot 1 = 1 \ne 0$): the segments meet at an angle — **$C^0$ only** (a visible corner).
(d) $\mathbf{Q}_0 \ne \mathbf{P}_3$: **not $C^0$** — there is a gap of $0.1$.

**P2**

(a) Segment 0 uses $\mathbf{c}_0, \dots, \mathbf{c}_3$.
Start: $\tfrac16(\mathbf{c}_0 + 4\mathbf{c}_1 + \mathbf{c}_2) = \tfrac16\big((0,0) + (8,16) + (4,4)\big) = \mathbf{(2,\ 3.333)}$.
End: $\tfrac16(\mathbf{c}_1 + 4\mathbf{c}_2 + \mathbf{c}_3) = \tfrac16\big((2,4) + (16,16) + (6,0)\big) = \mathbf{(4,\ 3.333)}$.

(b) Segment 1 uses $\mathbf{c}_1, \dots, \mathbf{c}_4$; its start is $\tfrac16(\mathbf{c}_1 + 4\mathbf{c}_2 + \mathbf{c}_3) = (4, 3.333)$ — the same expression as segment 0's end. ✓ $C^0$.

(c) First derivative from segment 0 at $t = 1$: $\tfrac12(\mathbf{c}_3 - \mathbf{c}_1) = \tfrac12(4, -4) = \mathbf{(2,\ -2)}$. From segment 1 at $t = 0$: $\tfrac12(\mathbf{c}_{3} - \mathbf{c}_{1})$ again (its "$\mathbf{c}_{i+2} - \mathbf{c}_i$" is $\mathbf{c}_3 - \mathbf{c}_1$) $= (2, -2)$. ✓

Second derivative from both: $\mathbf{c}_1 - 2\mathbf{c}_2 + \mathbf{c}_3 = (2,4) - (8,8) + (6,0) = \mathbf{(0,\ -4)}$. ✓ So the join is $C^2$.

(d) $\mathbf{c}_0$ appears only in segment 0 (in a longer spline it would affect at most the four segments that use it). Segment 1 does not move.

**P3**

(a) Incoming handle $(5,0) - (4,3) = (1, -3)$; outgoing $(7,-6) - (5,0) = (2, -6) = 2(1, -3)$. Same direction, $\lambda = 2$: **$G^1$, not $C^1$**.

Speeds: $\lVert 3(1, -3)\rVert = 3\sqrt{10} = \mathbf{9.49}$ arriving; $\lVert 3(2, -6)\rVert = 6\sqrt{10} = \mathbf{18.97}$ leaving.

(b) With both segments taking 1 second, the camera's speed **doubles instantly** at the join while its direction is unchanged — a jolt forward. Velocity with respect to time is $\mathbf{Q}'(t)/T$ for a segment traversed in $T$ seconds, so matching needs $18.97/T = 9.49$: **$T = 2$ seconds** for the second segment. (That fixes the join; the camera also slows down elsewhere on segment 2.)

(c) $\mathbf{Q}_1 = 2\mathbf{P}_3 - \mathbf{P}_2 = \mathbf{(6,\ -3)}$. The join becomes $C^1$ at 1 second each. The second segment's shape changes: its first handle is half as long, so it bends away from the incoming direction sooner and stays shallower (compare the blue and coral curves in the Picture).

</details>

## Flashback

**From Lesson 4.2 (Bézier curves):** A cubic has control points $(0,0)$, $(2,2)$, $(6,2)$, $(8,0)$.
(a) Evaluate $\mathbf{P}(0.75)$ with de Casteljau.
(b) Give the tangent $\mathbf{P}'(0.75)$.
(c) Give the control points of the piece on $[0.75, 1]$.

<details>
<summary>Solution</summary>

(a) With weights $0.25$ and $0.75$:

| round | points |
|---|---|
| 1 | $(1.5,\ 1.5)\quad(5,\ 2)\quad(7.5,\ 0.5)$ |
| 2 | $(4.125,\ 1.875)\quad(6.875,\ 0.875)$ |
| 3 | $(6.1875,\ 1.125)$ |

For example $0.25(1.5, 1.5) + 0.75(5, 2) = (4.125, 1.875)$. So $\mathbf{P}(0.75) = \mathbf{(6.1875,\ 1.125)}$.

(b) $3\big((6.875, 0.875) - (4.125, 1.875)\big) = \mathbf{(8.25,\ -3)}$.

(c) The bottom point, then up the right edge of the table: $\mathbf{(6.1875,\ 1.125),\ (6.875,\ 0.875),\ (7.5,\ 0.5),\ (8,\ 0)}$.

</details>

## Connections

- **Backward:** every condition here is a statement about [4.2](04-02-bezier-curves-de-casteljau.md)'s endpoint derivatives; the interpolating, globally solved $C^2$ spline is [`numerical-analysis` 2.2](../../numerical-analysis/lessons/02-02-runge-splines.md)'s.
- **Forward:** [4.4](04-04-bezier-surface-patches.md) imposes the same conditions across the boundary between two surface patches. [4.5](04-05-subdivision-surfaces.md) shows that repeatedly cutting corners of a polygon converges to a B-spline, which is how subdivision gets smoothness without patches. [4.6](04-06-keyframes-and-rotation-interpolation.md) uses Hermite and Catmull–Rom segments to interpolate keyframes in time, where $C^1$ is exactly "no lurch".
- **Sideways:** the B-spline basis is a box function convolved with itself four times — each convolution adds one order of smoothness, which is [`fourier-analysis` 2.3](../../fourier-analysis/lessons/02-03-convolution-theorem.md)'s convolution theorem seen in the spatial domain. Track and road designers use the same continuity hierarchy: a $G^1$ bend with a curvature jump is felt as a jolt, which is why highways use transition curves.
