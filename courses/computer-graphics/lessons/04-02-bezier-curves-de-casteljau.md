# Computer Graphics · Lesson 4.2: Bézier Curves & de Casteljau

> ⏱ ~15 min · Module 4: Geometric Modeling & Animation · Builds on: [1.2 (affine combinations)](01-02-2d-transforms-homogeneous-coordinates.md), [4.1 (explicit representations)](04-01-meshes-and-geometry-representations.md) · Unlocks: [4.3 (splines and continuity)](04-03-splines-and-continuity.md), [4.4 (Bézier surface patches)](04-04-bezier-surface-patches.md)

## Why this matters

Every letter on this screen is drawn from Bézier curves: TrueType fonts use quadratics, PostScript and PDF use cubics, and so does every vector-drawing program's pen tool. Car bodies were designed with them at Renault and Citroën in the 1960s, which is where they come from. Animation curves in every 3D package are Bézier segments.

The reason they won is that a designer never touches an equation. They drag four **control points**, and the curve follows them in a way that is predictable, stays inside the shape the points outline, and can be evaluated by nothing more than repeatedly taking weighted averages — the **de Casteljau algorithm**. That algorithm is also a geometric proof of every property the curve has, which is why this lesson leads with it.

## The idea

**Lerp, then lerp the lerps.** Take two points and a fraction $t$; the point $t$ of the way from the first to the second is a linear interpolation (lerp). With four control points, lerp each consecutive pair: three new points. Lerp *those* pairs: two points. Lerp once more: one point. That final point is on the curve at parameter $t$. Sweep $t$ from 0 to 1 and you trace the whole curve.

**Everything you'd want falls out of the construction.**

- At $t = 0$ every lerp returns its first point, so the curve starts at the first control point; at $t = 1$ it ends at the last.
- Every step is an average with non-negative weights, so the curve never leaves the convex hull of its control points.
- Averages commute with affine maps ([1.2](01-02-2d-transforms-homogeneous-coordinates.md)), so to rotate or scale a curve you just transform its control points.
- The last two intermediate points always straddle the final point, so the line through them is the tangent — and they split the curve into two smaller Bézier curves.

## The formal version

**Bernstein basis.** For degree $n$ and $i = 0, \dots, n$,

$$B_{i,n}(t) = \binom{n}{i}(1 - t)^{n-i}\,t^{i}, \qquad t \in [0, 1].$$

These are non-negative and sum to 1 (they are the terms of $((1 - t) + t)^n$). *(card: [Bernstein polynomials](../reference.md#bernstein-polynomials))*

**Bézier curve** with control points $\mathbf{P}_0, \dots, \mathbf{P}_n$:

$$\mathbf{P}(t) = \sum_{i=0}^{n} B_{i,n}(t)\,\mathbf{P}_i.$$

For a cubic: $\mathbf{P}(t) = (1-t)^3\mathbf{P}_0 + 3(1-t)^2 t\,\mathbf{P}_1 + 3(1-t)t^2\,\mathbf{P}_2 + t^3\,\mathbf{P}_3$. In words: an affine combination of the control points, with weights that slide from "all $\mathbf{P}_0$" to "all $\mathbf{P}_n$" as $t$ goes from 0 to 1. *(card: [Bézier curve](../reference.md#bezier-curve))*

**de Casteljau's algorithm.** Set $\mathbf{P}_i^{(0)} = \mathbf{P}_i$ and for $r = 1, \dots, n$:

$$\mathbf{P}_i^{(r)} = (1 - t)\,\mathbf{P}_i^{(r-1)} + t\,\mathbf{P}_{i+1}^{(r-1)}, \qquad i = 0, \dots, n - r.$$

Then $\mathbf{P}(t) = \mathbf{P}_0^{(n)}$. In words: $n$ rounds of lerping, each round one point shorter. It uses only additions and scalings, never large powers, which makes it numerically stable. *(card: [de Casteljau's algorithm](../reference.md#de-casteljaus-algorithm))*

**Properties.**

1. **Endpoint interpolation:** $\mathbf{P}(0) = \mathbf{P}_0$, $\mathbf{P}(1) = \mathbf{P}_n$.
2. **Endpoint tangents:** $\mathbf{P}'(0) = n(\mathbf{P}_1 - \mathbf{P}_0)$ and $\mathbf{P}'(1) = n(\mathbf{P}_n - \mathbf{P}_{n-1})$ — the curve leaves along its first control leg.
3. **Derivative:** $\mathbf{P}'(t)$ is a degree-$(n-1)$ Bézier curve with control points $n(\mathbf{P}_{i+1} - \mathbf{P}_i)$. At any $t$, $\mathbf{P}'(t) = n\big(\mathbf{P}_1^{(n-1)} - \mathbf{P}_0^{(n-1)}\big)$: the last de Casteljau segment points along the tangent.
4. **Convex hull:** $\mathbf{P}(t)$ lies in the convex hull of the control points.
5. **Affine invariance:** applying an affine map to the control points applies it to the curve.
6. **Subdivision:** at any $t$, the points $\mathbf{P}_0^{(0)}, \mathbf{P}_0^{(1)}, \dots, \mathbf{P}_0^{(n)}$ are the control points of the curve on $[0, t]$, and $\mathbf{P}_0^{(n)}, \mathbf{P}_1^{(n-1)}, \dots, \mathbf{P}_n^{(0)}$ those of the curve on $[t, 1]$ — the left and right edges of the de Casteljau triangle.

*(card: [Bézier curve properties](../reference.md#bezier-curve-properties))*

## Picture

![A blue cubic arch from P0 at 0,0 up through the middle and down to P3 at 5,0, with control points P1 at 1,3 and P2 at 4,3 joined by a dashed grey control polygon. Hollow grey midpoints of the three control legs are joined by grey lines; coral points at 1.5, 2.25 and 3.5, 2.25 are the midpoints of those, joined by a short coral segment. A blue point on the curve at 2.5, 2.25, labelled P of 0.5, sits at the middle of the coral segment. The note says the coral segment is tangent to the curve there, and its halves are the two sub-curves' control legs](assets/04-02-fig1.svg)

The whole curve lies under the dashed polygon (convex hull), leaves $\mathbf{P}_0$ heading toward $\mathbf{P}_1$, and arrives at $\mathbf{P}_3$ from the direction of $\mathbf{P}_2$. The coral segment touches the curve at exactly one point and is tangent there.

## Worked examples

**Example 1 (mechanical): evaluate a cubic and its tangent.** $\mathbf{P}_0 = (0,0)$, $\mathbf{P}_1 = (1,3)$, $\mathbf{P}_2 = (4,3)$, $\mathbf{P}_3 = (5,0)$.

*At $t = 0.5$* (every lerp is a midpoint):

| round | points |
|---|---|
| 0 | $(0,0)\quad(1,3)\quad(4,3)\quad(5,0)$ |
| 1 | $(0.5,\ 1.5)\quad(2.5,\ 3)\quad(4.5,\ 1.5)$ |
| 2 | $(1.5,\ 2.25)\quad(3.5,\ 2.25)$ |
| 3 | $(2.5,\ 2.25)$ |

$\mathbf{P}(0.5) = (2.5,\ 2.25)$. Tangent: $3\big((3.5, 2.25) - (1.5, 2.25)\big) = (6,\ 0)$ — horizontal, as symmetry demands.

Check with Bernstein weights at $t = 0.5$: $(\tfrac18, \tfrac38, \tfrac38, \tfrac18)$, so $x = \tfrac38(1) + \tfrac38(4) + \tfrac18(5) = 2.5$ and $y = \tfrac38(3) + \tfrac38(3) = 2.25$. ✓

*At $t = 0.25$:*

| round | points |
|---|---|
| 1 | $(0.25,\ 0.75)\quad(1.75,\ 3)\quad(4.25,\ 2.25)$ |
| 2 | $(0.625,\ 1.3125)\quad(2.375,\ 2.8125)$ |
| 3 | $(1.0625,\ 1.6875)$ |

$\mathbf{P}(0.25) = (1.0625,\ 1.6875)$, with tangent $3\big((2.375, 2.8125) - (0.625, 1.3125)\big) = (5.25,\ 4.5)$.

**Example 2 (why you'd care): flattening a curve for rendering.** A rasterizer draws line segments, not curves, so font and vector renderers **flatten**: split the curve until each piece is close enough to its chord to draw as a straight line. Flatness can be bounded by the control points alone — by the convex hull property, the curve is within the largest distance of $\mathbf{P}_1$, $\mathbf{P}_2$ from the chord $\mathbf{P}_0\mathbf{P}_3$.

For Example 1's curve, the chord is the $x$-axis and $\mathbf{P}_1$, $\mathbf{P}_2$ are $3$ units off it. Split at $t = 0.5$ (property 6):

- left piece: $(0,0),\ (0.5, 1.5),\ (1.5, 2.25),\ (2.5, 2.25)$
- right piece: $(2.5, 2.25),\ (3.5, 2.25),\ (4.5, 1.5),\ (5, 0)$

Each half's control points are at most $0.780$ from its own chord — about a quarter of $3$. Each further split cuts the bound by roughly 4 again (a cubic's deviation from its chord scales with the square of its length). Recursing until the bound is under $0.1$ takes **3 levels, 8 segments**; under $0.01$, **5 levels, 32 segments**. Ten times the precision cost four times the segments — the square-root scaling that lets fonts render crisply at any size with a handful of lines per glyph.

## Watch out

- **You might think** a Bézier curve passes through its control points — **but actually** it passes through only the first and last. The middle points are handles; the curve is pulled toward them, never onto them (unless the control polygon is degenerate).
- **You might think** $t = 0.5$ is the halfway point along the curve — **but actually** $t$ is a parameter, not arc length. On a curve whose control points bunch toward one end, equal steps in $t$ give very unequal steps along the curve, which matters when animating something at constant speed along it.
- **You might think** moving one control point only affects part of the curve — **but actually** every Bernstein weight is non-zero on the whole open interval $(0, 1)$, so moving any control point moves every interior point of the curve. That lack of **local control** is why long curves are built from many short segments ([4.3](04-03-splines-and-continuity.md)).

## One-liner

> A Bézier curve is repeated lerping of its control points — so it starts and ends on the end points, leaves along the first leg, stays in the hull, transforms with its points, and splits itself at any $t$ for free.

## Problems

**P1 (🟢)** A quadratic Bézier curve has $\mathbf{P}_0 = (0, 0)$, $\mathbf{P}_1 = (2, 4)$, $\mathbf{P}_2 = (4, 0)$.
(a) Evaluate $\mathbf{P}(0.25)$ with de Casteljau, and check it with the Bernstein form.
(b) Give the tangent vector $\mathbf{P}'(0.25)$.
(c) What is the highest point of the curve, and how does it compare with the control polygon's highest point?

**P2 (🟡)** For the cubic of Example 1, $(0,0), (1,3), (4,3), (5,0)$:
(a) Run de Casteljau at $t = \tfrac13$ with exact fractions.
(b) Write the control points of the two sub-curves on $[0, \tfrac13]$ and $[\tfrac13, 1]$.
(c) Verify that the left sub-curve evaluated at its own parameter $\tfrac12$ equals the original curve at $t = \tfrac16$.

**P3 (🔴)** A cubic has $\mathbf{P}_0 = (0, 0)$, $\mathbf{P}_1 = (1, 4)$, $\mathbf{P}_2 = (5, 4)$, $\mathbf{P}_3 = (6, -1)$.
(a) Write the control points of $\mathbf{P}'(t)$ and the formula for $y'(t)$.
(b) Find the parameter where the curve is highest, and the maximum height.
(c) The convex hull property guarantees the curve stays below what height? Explain why the true maximum is lower.

<details>
<summary>Solutions</summary>

**P1**

(a) Round 1: $0.75(0,0) + 0.25(2,4) = (0.5, 1)$ and $0.75(2,4) + 0.25(4,0) = (2.5, 3)$. Round 2: $0.75(0.5,1) + 0.25(2.5,3) = \mathbf{(1,\ 1.5)}$.

Bernstein: $(1-t)^2 = 0.5625$, $2(1-t)t = 0.375$, $t^2 = 0.0625$. $x = 0.375(2) + 0.0625(4) = 1$; $y = 0.375(4) = 1.5$. ✓

(b) $\mathbf{P}'(0.25) = 2\big((2.5, 3) - (0.5, 1)\big) = \mathbf{(4,\ 4)}$.

(c) By symmetry the top is at $t = 0.5$: round 1 gives $(1, 2)$ and $(3, 2)$, round 2 gives $\mathbf{(2,\ 2)}$. The control polygon reaches $y = 4$ at $\mathbf{P}_1$; the curve reaches only **half** of that. For a quadratic, the peak is always the midpoint between $\mathbf{P}_1$ and the chord's midpoint.

**P2**

(a) With $1 - t = \tfrac23$:

| round | points |
|---|---|
| 1 | $(\tfrac13,\ 1)\quad(2,\ 3)\quad(\tfrac{13}{3},\ 2)$ |
| 2 | $(\tfrac89,\ \tfrac53)\quad(\tfrac{25}{9},\ \tfrac83)$ |
| 3 | $(\tfrac{41}{27},\ 2)$ |

For example, round 2's first point is $\tfrac23(\tfrac13, 1) + \tfrac13(2, 3) = (\tfrac29 + \tfrac69,\ \tfrac23 + 1) = (\tfrac89, \tfrac53)$. So $\mathbf{P}(\tfrac13) = (\tfrac{41}{27}, 2) \approx (1.519, 2)$.

(b) Left (the left edge of the table, top to bottom): $(0,0),\ (\tfrac13, 1),\ (\tfrac89, \tfrac53),\ (\tfrac{41}{27}, 2)$.

Right (the bottom point, then the right edge upward): $(\tfrac{41}{27}, 2),\ (\tfrac{25}{9}, \tfrac83),\ (\tfrac{13}{3}, 2),\ (5, 0)$.

(c) Left sub-curve at $\tfrac12$, Bernstein weights $(\tfrac18, \tfrac38, \tfrac38, \tfrac18)$:

$$x = \tfrac38\cdot\tfrac13 + \tfrac38\cdot\tfrac89 + \tfrac18\cdot\tfrac{41}{27} = \tfrac18 + \tfrac13 + \tfrac{41}{216} = \tfrac{27 + 72 + 41}{216} = \tfrac{140}{216} = 0.6481,$$
$$y = \tfrac38(1) + \tfrac38\cdot\tfrac53 + \tfrac18(2) = \tfrac38 + \tfrac58 + \tfrac14 = 1.25.$$

Original at $t = \tfrac16$, weights $\big((\tfrac56)^3, 3(\tfrac56)^2\tfrac16, 3\cdot\tfrac56(\tfrac16)^2, (\tfrac16)^3\big) = (\tfrac{125}{216}, \tfrac{75}{216}, \tfrac{15}{216}, \tfrac{1}{216})$:

$$x = \tfrac{75 + 60 + 5}{216} = \tfrac{140}{216} = 0.6481, \qquad y = \tfrac{225 + 45}{216} = 1.25.$$

Both agree. ✓

**P3**

(a) Differences: $\mathbf{P}_1 - \mathbf{P}_0 = (1, 4)$, $\mathbf{P}_2 - \mathbf{P}_1 = (4, 0)$, $\mathbf{P}_3 - \mathbf{P}_2 = (1, -5)$. The derivative is the quadratic Bézier with control points $3(1,4) = (3, 12)$, $3(4,0) = (12, 0)$, $3(1,-5) = (3, -15)$:

$$y'(t) = 12(1-t)^2 + 0 - 15t^2 = 3\big(4 - 8t - t^2\big).$$

(b) $t^2 + 8t - 4 = 0$ gives $t = -4 + \sqrt{20} = \mathbf{0.4721}$ (the other root is negative). Weights at this $t$: $(0.1471,\ 0.3947,\ 0.3530,\ 0.1052)$, so

$$y = 0.3947(4) + 0.3530(4) + 0.1052(-1) = 1.5787 + 1.4120 - 0.1052 = \mathbf{2.885}.$$

(c) The control points' largest $y$ is $4$, so the curve stays below $y = 4$. It stays well below because the interior control points are only ever *averaged* with the end points: their combined weight $B_{1,3} + B_{2,3} = 3t(1-t)$ never exceeds $0.75$, and the remaining weight goes to $\mathbf{P}_0$ and $\mathbf{P}_3$, which are low.

</details>

## Flashback

**From Lesson 3.7 (Monte Carlo):** Estimate $I = \int_0^\pi \sin x\,dx$ $(= 2)$ with samples drawn uniformly from $[0, \pi]$.
(a) Write the estimator and evaluate it for the samples $x = 0.5, 1.2, 2.0, 2.8$.
(b) Compute the per-sample variance.
(c) How many samples give 1% relative error?

<details>
<summary>Solution</summary>

(a) $p = 1/\pi$, so each sample contributes $f/p = \pi\sin x$: $\pi(0.479 + 0.932 + 0.909 + 0.335)/4 = \pi(0.664) = \mathbf{2.086}$.

(b) $\mathbb{E}[(\pi\sin X)^2] = \pi^2 \cdot \tfrac1\pi\int_0^\pi\sin^2x\,dx = \pi^2 \cdot \tfrac12 = 4.935$, so $\sigma^2 = 4.935 - 4 = \mathbf{0.935}$ and $\sigma = 0.967$.

(c) Relative error of one sample: $0.967/2 = 0.483$. For 1%: $N = (0.483/0.01)^2 = \mathbf{2337}$ samples. A density proportional to $\sin x$ would make every sample exactly 2 — zero variance — which is the ideal importance sampling aims at.

</details>

## Connections

- **Backward:** each lerp is [1.2](01-02-2d-transforms-homogeneous-coordinates.md)'s affine combination, which is why affine invariance holds; Bézier curves are the explicit, parametric representations of [4.1](04-01-meshes-and-geometry-representations.md).
- **Forward:** [4.3](04-03-splines-and-continuity.md) chains segments and asks when the joins are smooth — property 2 is the whole answer for $C^1$. [4.4](04-04-bezier-surface-patches.md) runs de Casteljau in two directions to make surfaces. [4.6](04-06-keyframes-and-rotation-interpolation.md) uses cubic Bézier segments as animation curves.
- **Sideways:** Bernstein polynomials are the probabilities of a binomial distribution with success probability $t$, so $\mathbf{P}(t)$ is the *expected* control point when you pick index $i$ with $n$ coin flips — the same polynomials Bernstein used to give a constructive proof of the Weierstrass approximation theorem, a cousin of [`numerical-analysis` 2.1](../../numerical-analysis/lessons/02-01-polynomial-interpolation.md)'s interpolation.
