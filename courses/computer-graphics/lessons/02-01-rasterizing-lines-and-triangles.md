# Computer Graphics · Lesson 2.1: Rasterizing Lines & Triangles

> ⏱ ~15 min · Module 2: Rasterization & Shading · Builds on: [1.5 (projection and the viewport transform)](01-05-projection-orthographic-and-perspective.md), [1.2 (affine combinations)](01-02-2d-transforms-homogeneous-coordinates.md) · Unlocks: [2.2 (clipping and the z-buffer)](02-02-clipping-and-the-z-buffer.md), [2.3 (perspective-correct interpolation)](02-03-perspective-correct-interpolation.md)

## Why this matters

After Module 1, every vertex has a pixel address. Now the pipeline must answer a question a trillion times a second: **is this pixel inside this triangle?** Rasterization is that question, asked efficiently and — just as important — asked *consistently*, so that two triangles sharing an edge neither leave a crack between them nor both paint the pixels along it.

The tool is the **edge function**, a single cross product. It decides coverage, it gives the barycentric weights every later lesson interpolates with, it updates by addition as you step across the screen, and its evaluation at every pixel is independent of every other pixel — which is exactly why GPUs are built the way they are ([3.1](03-01-the-programmable-gpu-pipeline.md)).

## The idea

**Which side of a line are you on?** Stand at vertex $\mathbf{a}$ facing vertex $\mathbf{b}$. A point is either on your left, on your right, or dead ahead. The 2D cross product of "the edge" with "the direction to the point" tells you which, by its sign — and its size is proportional to how far off the line the point is.

**A triangle is three such tests.** List the vertices counter-clockwise. A point is inside exactly when it is on the left of all three edges. So a rasterizer takes the triangle's bounding box, visits each pixel centre in it, and evaluates three cross products.

**The numbers are more useful than their signs.** Each edge value is twice the area of the little triangle formed by that edge and the point. Divide by twice the whole triangle's area and you get three weights that sum to 1 and say how close the point is to each vertex — **barycentric coordinates**. They are how colours, depths and texture coordinates get spread across the interior.

**Ties need a rule.** When a pixel centre lies exactly on an edge shared by two triangles, "inside" must be true for exactly one of them. The **top-left rule** settles every tie by the direction of the edge.

## The formal version

**Conventions.** Screen coordinates with $y$ up; pixel $(i, j)$ covers the square $[i, i+1] \times [j, j+1]$ and is **sampled at its centre** $(i + \tfrac12,\ j + \tfrac12)$. Triangles are wound **counter-clockwise** (swap two vertices if not).

**Edge function.** For an edge from $\mathbf{a}$ to $\mathbf{b}$ and a point $\mathbf{p}$,

$$E_{\mathbf{ab}}(\mathbf{p}) = (b_x - a_x)(p_y - a_y) - (b_y - a_y)(p_x - a_x).$$

In words: the $z$-component of $(\mathbf{b} - \mathbf{a}) \times (\mathbf{p} - \mathbf{a})$; positive when $\mathbf{p}$ is to the left of the directed edge, zero on the line, negative to the right. $E_{\mathbf{ab}}(\mathbf{c})$ is twice the signed area of triangle $\mathbf{abc}$, positive for counter-clockwise order. *(card: [Edge function](../reference.md#edge-function))*

**Coverage.** $\mathbf{p}$ is inside the counter-clockwise triangle $\mathbf{abc}$ when

$$E_{\mathbf{ab}}(\mathbf{p}) > 0, \qquad E_{\mathbf{bc}}(\mathbf{p}) > 0, \qquad E_{\mathbf{ca}}(\mathbf{p}) > 0,$$

with ties ($E = 0$) settled by the top-left rule below.

**Incremental evaluation.** $E_{\mathbf{ab}}$ is affine in $\mathbf{p}$. Stepping one pixel right changes it by $-(b_y - a_y)$; one pixel up by $+(b_x - a_x)$. A rasterizer evaluates it once at a corner of the bounding box and then only adds.

**Barycentric coordinates.** With $2A = E_{\mathbf{ab}}(\mathbf{c})$,

$$\alpha = \frac{E_{\mathbf{bc}}(\mathbf{p})}{2A}, \qquad \beta = \frac{E_{\mathbf{ca}}(\mathbf{p})}{2A}, \qquad \gamma = \frac{E_{\mathbf{ab}}(\mathbf{p})}{2A}, \qquad \mathbf{p} = \alpha\,\mathbf{a} + \beta\,\mathbf{b} + \gamma\,\mathbf{c},\quad \alpha + \beta + \gamma = 1.$$

In words: each vertex's weight is the area of the sub-triangle **opposite** it, as a fraction of the whole. A weight is 1 at its own vertex, 0 along the opposite edge, and the point is inside exactly when all three are positive. This is [1.2](01-02-2d-transforms-homogeneous-coordinates.md)'s affine combination, with the weights solved for. *(card: [Barycentric coordinates](../reference.md#barycentric-coordinates))*

**The top-left rule.** A pixel centre exactly on an edge ($E = 0$) is covered only if that edge is a **top** edge or a **left** edge. For counter-clockwise triangles with $y$ up, directed edge $\mathbf{a} \to \mathbf{b}$ is

- a **top edge** if it is horizontal and runs leftward: $b_y = a_y$ and $b_x < a_x$;
- a **left edge** if it runs downward: $b_y < a_y$.

In words: a shared edge is traversed in opposite directions by its two triangles, so it is "left" or "top" for exactly one of them — each on-edge pixel is drawn exactly once. *(card: [Top-left rule](../reference.md#top-left-rule))*

**Lines: Bresenham's algorithm.** For a line from $(x_0, y_0)$ to $(x_1, y_1)$ with integer endpoints and slope in $[0, 1]$, let $\Delta x = x_1 - x_0$, $\Delta y = y_1 - y_0$. Keep an integer **decision variable** $d$, starting at $d = 2\Delta y - \Delta x$. For each $x$ from $x_0$ to $x_1$: plot $(x, y)$; if $d > 0$, increment $y$ and subtract $2\Delta x$; then add $2\Delta y$.

In words: $d$ is (twice $\Delta x$ times) the signed distance from the line to the midpoint between the two candidate pixels, updated by addition only — the same "evaluate an affine function incrementally" idea as the edge function. The simpler **DDA** computes $y = y_0 + (x - x_0)\Delta y/\Delta x$ and rounds; it chooses the same pixels except at exact ties, with floating point. *(card: [Bresenham's algorithm](../reference.md#bresenhams-algorithm))*

## Picture

![An 8 by 8 pixel grid. A coral triangle with vertices a at 1,1, b at 7,2 and c at 3,6. Each pixel centre is drawn as a dot: twelve filled blue dots inside the triangle, with their pixel squares lightly shaded, and hollow grey dots outside. The centre at 4.5, 3.5 is circled. Several centres lie exactly on the right-hand edge from b to c and are hollow](assets/02-01-fig1.svg)

The shaded squares are not the triangle's area; they are the pixels whose *centres* it covers. Look at the edge from $\mathbf{b}$ to $\mathbf{c}$: the centres $(3.5, 5.5)$, $(4.5, 4.5)$, $(5.5, 3.5)$ and $(6.5, 2.5)$ lie exactly on it, and are left hollow — that is the top-left rule declining a right edge.

## Worked examples

**Example 1 (mechanical): coverage and weights for one pixel.** Triangle $\mathbf{a} = (1,1)$, $\mathbf{b} = (7,2)$, $\mathbf{c} = (3,6)$; pixel $(4, 3)$, centre $\mathbf{p} = (4.5, 3.5)$.

*Winding.* $E_{\mathbf{ab}}(\mathbf{c}) = (7-1)(6-1) - (2-1)(3-1) = 30 - 2 = 28 > 0$. Counter-clockwise, and $2A = 28$.

*Edge values.*

| edge | formula | value |
|---|---|---|
| $E_{\mathbf{ab}}(\mathbf{p})$ | $(6)(3.5 - 1) - (1)(4.5 - 1)$ | $15 - 3.5 = 11.5$ |
| $E_{\mathbf{bc}}(\mathbf{p})$ | $(3 - 7)(3.5 - 2) - (6 - 2)(4.5 - 7)$ | $-6 + 10 = 4$ |
| $E_{\mathbf{ca}}(\mathbf{p})$ | $(1 - 3)(3.5 - 6) - (1 - 6)(4.5 - 3)$ | $5 + 7.5 = 12.5$ |

All positive: **covered**. As a check, $11.5 + 4 + 12.5 = 28 = 2A$ — the three sub-triangles tile the whole.

*Barycentrics.* $\alpha = 4/28 = 0.143$, $\beta = 12.5/28 = 0.446$, $\gamma = 11.5/28 = 0.411$. Reconstruct: $0.143(1,1) + 0.446(7,2) + 0.411(3,6) = (4.5,\ 3.5)$. ✓ The pixel is far from $\mathbf{a}$ (small $\alpha$) and roughly equidistant in weight from $\mathbf{b}$ and $\mathbf{c}$.

*Incremental step.* Moving to the next pixel right, $(5.5, 3.5)$, changes $E_{\mathbf{bc}}$ by $-(c_y - b_y) = -4$, to exactly $0$. That centre is on edge $\mathbf{bc}$ — which brings us to ties.

**Example 2 (why you'd care): the shared edge.** Add a second triangle on the other side of $\mathbf{bc}$: $\mathbf{b} = (7,2)$, $\mathbf{d} = (7,6)$, $\mathbf{c} = (3,6)$, counter-clockwise ($E_{\mathbf{bd}}(\mathbf{c}) = 16 > 0$). Four pixel centres lie exactly on the shared segment: $(3.5, 5.5)$, $(4.5, 4.5)$, $(5.5, 3.5)$, $(6.5, 2.5)$, all with $E = 0$ for both triangles.

- In triangle $\mathbf{abc}$ the shared edge is directed $\mathbf{b} \to \mathbf{c}$, from $y = 2$ up to $y = 6$. Going **up** is neither top nor left: the four centres are **excluded**.
- In triangle $\mathbf{bdc}$ it is directed $\mathbf{c} \to \mathbf{b}$, from $y = 6$ down to $y = 2$. Going **down** makes it a left edge: the four centres are **included**.

Each is drawn exactly once. Without a rule — say, treating $E \ge 0$ as inside — they would be drawn by both. With opaque geometry that is merely wasted work; with **transparency** each on-edge pixel is blended twice and a bright seam appears along every internal edge of a mesh. Treating $E > 0$ strictly as inside is the opposite failure: the four pixels belong to neither triangle, and the background shows through as a dotted crack.

## Watch out

- **You might think** a pixel is covered if the triangle overlaps any part of its square — **but actually** coverage is decided at the single centre sample. A thin sliver can cross many pixel squares and cover no centres at all, vanishing entirely; that is aliasing, and [2.7](02-07-aliasing-supersampling-and-mipmaps.md) fixes it with more samples per pixel, not with a different test.
- **You might think** the edge test works for any vertex order — **but actually** for a clockwise triangle all three edge functions are negative inside, so an "all positive" test rejects every pixel. Either reorder the vertices or flip the signs using $\operatorname{sign}(2A)$. (GPUs often use exactly this sign to **cull** back-facing triangles, whose winding flips when you see them from behind.)
- **You might think** the top-left rule's definitions are universal — **but actually** they depend on both the winding convention and the direction of $y$. Direct3D states the rule with $y$ **down** and clockwise triangles, where the same geometry gives the same pixels but the edge classifications read differently. Always derive the rule from "a shared edge runs opposite ways in its two triangles".

## One-liner

> A pixel is in a triangle when its centre is left of all three counter-clockwise edges; the edge values are sub-triangle areas, so dividing by the total gives barycentric weights, and the top-left rule gives every tie to exactly one triangle.

## Problems

**P1 (🟢)** Rasterize the line from $(0, 0)$ to $(7, 3)$ with Bresenham's algorithm. Give a table of $x$, the decision variable $d$ at the moment each pixel is plotted, and the plotted pixel.

**P2 (🟡)** Triangle $\mathbf{a} = (2, 1)$, $\mathbf{b} = (9, 4)$, $\mathbf{c} = (4, 8)$.
(a) Confirm the winding and find $2A$.
(b) For pixel centres $\mathbf{p} = (5.5, 4.5)$ and $\mathbf{q} = (8.5, 5.5)$, compute all three edge functions and say whether each is covered.
(c) Give the barycentric coordinates of the covered one, and say which edge the other is outside.

**P3 (🟡)** A square with corners at pixel centres $(1.5, 1.5)$, $(5.5, 1.5)$, $(5.5, 5.5)$, $(1.5, 5.5)$ is split along its diagonal into $T_1 = [(1.5,1.5),\ (5.5,5.5),\ (1.5,5.5)]$ and $T_2 = [(1.5,1.5),\ (5.5,1.5),\ (5.5,5.5)]$, both counter-clockwise.
(a) Classify each directed edge of $T_1$ and of $T_2$ as top, left, or neither.
(b) How many pixels does each triangle cover under the top-left rule, and how many does the square cover in total?
(c) The closed square contains 25 pixel centres. Explain which ones are missing from your total, and why that is the right answer for a mesh.

<details>
<summary>Solutions</summary>

**P1**

$\Delta x = 7$, $\Delta y = 3$, so $2\Delta y = 6$, $2\Delta x = 14$, and $d$ starts at $6 - 7 = -1$.

| $x$ | $d$ when plotted | pixel | then |
|---|---|---|---|
| 0 | $-1$ | $(0, 0)$ | $d \le 0$: $d \to -1 + 6 = 5$ |
| 1 | $5$ | $(1, 0)$ | $d > 0$: $y \to 1$, $d \to 5 - 14 + 6 = -3$ |
| 2 | $-3$ | $(2, 1)$ | $d \to 3$ |
| 3 | $3$ | $(3, 1)$ | $y \to 2$, $d \to -5$ |
| 4 | $-5$ | $(4, 2)$ | $d \to 1$ |
| 5 | $1$ | $(5, 2)$ | $y \to 3$, $d \to -7$ |
| 6 | $-7$ | $(6, 3)$ | $d \to -1$ |
| 7 | $-1$ | $(7, 3)$ | done |

Check against the true line $y = 3x/7$: $0,\ 0.43,\ 0.86,\ 1.29,\ 1.71,\ 2.14,\ 2.57,\ 3$, which round to $0, 0, 1, 1, 2, 2, 3, 3$. ✓ No value is exactly $\tfrac12$ past an integer, so there are no ties to break.

**P2**

(a) $E_{\mathbf{ab}}(\mathbf{c}) = (9-2)(8-1) - (4-1)(4-2) = 49 - 6 = 43 > 0$: counter-clockwise, $2A = 43$.

(b)

| | $E_{\mathbf{ab}} = 7(p_y - 1) - 3(p_x - 2)$ | $E_{\mathbf{bc}} = -5(p_y - 4) - 4(p_x - 9)$ | $E_{\mathbf{ca}} = -2(p_y - 8) + 7(p_x - 4)$ | covered? |
|---|---|---|---|---|
| $\mathbf{p} = (5.5, 4.5)$ | $24.5 - 10.5 = 14$ | $-2.5 + 14 = 11.5$ | $7 + 10.5 = 17.5$ | **yes** |
| $\mathbf{q} = (8.5, 5.5)$ | $31.5 - 19.5 = 12$ | $-7.5 + 2 = -5.5$ | $5 + 31.5 = 36.5$ | **no** |

Check for $\mathbf{p}$: $14 + 11.5 + 17.5 = 43$. ✓ (For $\mathbf{q}$ the sum is also 43 — the identity holds everywhere, inside or not.)

(c) For $\mathbf{p}$: $\alpha = 11.5/43 = 0.267$, $\beta = 17.5/43 = 0.407$, $\gamma = 14/43 = 0.326$.

$\mathbf{q}$ has $E_{\mathbf{bc}} < 0$: it is outside edge $\mathbf{bc}$, to the right of the line from $\mathbf{b}$ to $\mathbf{c}$. Its $\alpha = -5.5/43 = -0.128$ is negative — the barycentric weight of the vertex opposite the violated edge.

**P3**

(a) Using "top: horizontal and leftward; left: downward":

| triangle | edge | direction | class |
|---|---|---|---|
| $T_1$ | $(1.5,1.5) \to (5.5,5.5)$ | up-right | neither |
| $T_1$ | $(5.5,5.5) \to (1.5,5.5)$ | horizontal, leftward | **top** |
| $T_1$ | $(1.5,5.5) \to (1.5,1.5)$ | down | **left** |
| $T_2$ | $(1.5,1.5) \to (5.5,1.5)$ | horizontal, rightward | neither |
| $T_2$ | $(5.5,1.5) \to (5.5,5.5)$ | up | neither |
| $T_2$ | $(5.5,5.5) \to (1.5,1.5)$ | down-left | **left** |

The diagonal is "neither" in $T_1$ and "left" in $T_2$, as it must be.

(b) $T_1$ covers **10** pixels: its interior strictly above the diagonal, plus its top and left edges, minus the two corners that touch an excluded edge. $T_2$ covers **6**: its interior plus the diagonal centres $(2.5,2.5)$, $(3.5,3.5)$, $(4.5,4.5)$. Total **16**, with no pixel in both.

(Listed by pixel index: $T_1 = \{(1,2),(1,3),(1,4),(1,5),(2,3),(2,4),(2,5),(3,4),(3,5),(4,5)\}$; $T_2 = \{(2,2),(3,2),(4,2),(3,3),(4,3),(4,4)\}$.)

(c) The 16 pixels form a $4 \times 4$ block: columns $1$–$4$ and rows $2$–$5$. **Missing are the 9 centres on the square's bottom edge ($y = 1.5$) and right edge ($x = 5.5$).** The rule makes every polygon half-open — it owns its left and top boundaries and not its right and bottom ones — exactly like the interval $[a, b)$. That is the right answer because the square's neighbours to the right and below own those centres; tiling the plane with such squares covers every pixel exactly once.

</details>

## Flashback

**From Lesson 1.4 (the camera):** Eye $\mathbf{e} = (0, 2, 0)$, target $(4, 2, -3)$, up $(0, 1, 0)$.
(a) Compute $\mathbf{w}$, $\mathbf{u}$, $\mathbf{v}$.
(b) Find the camera coordinates of the target and of the world point $(4, 5, 1)$.
(c) Is $(4, 5, 1)$ in front of the camera? Is it left or right of centre, above or below?

<details>
<summary>Solution</summary>

(a) $\mathbf{g} = (4, 0, -3)$ has length 5, so $\mathbf{w} = -\mathbf{g}/5 = (-0.8,\ 0,\ 0.6)$.

$$\mathbf{u} = (0,1,0)\times(-0.8, 0, 0.6) = (1\cdot0.6 - 0\cdot0,\ 0\cdot(-0.8) - 0\cdot0.6,\ 0\cdot0 - 1\cdot(-0.8)) = (0.6,\ 0,\ 0.8).$$

$$\mathbf{v} = \mathbf{w}\times\mathbf{u} = (0\cdot0.8 - 0.6\cdot0,\ 0.6\cdot0.6 - (-0.8)(0.8),\ (-0.8)\cdot0 - 0\cdot0.6) = (0,\ 1,\ 0).$$

(b) *Target.* $\mathbf{d} = (4, 0, -3)$: $(\mathbf{u}\cdot\mathbf{d},\ \mathbf{v}\cdot\mathbf{d},\ \mathbf{w}\cdot\mathbf{d}) = (2.4 - 2.4,\ 0,\ -3.2 - 1.8) = (0, 0, -5)$. ✓ Dead ahead at distance 5.

*Point* $(4, 5, 1)$: $\mathbf{d} = (4, 3, 1)$, giving $(2.4 + 0.8,\ 3,\ -3.2 + 0.6) = (3.2,\ 3,\ -2.6)$.

(c) Camera $z = -2.6 < 0$: **in front**. Camera $x = 3.2 > 0$: **right** of centre. Camera $y = 3 > 0$: **above** centre. It is also much closer than the target and well off to the side — with a moderate field of view it may be outside the frustum entirely, which [1.5](01-05-projection-orthographic-and-perspective.md)'s clip test would decide.

</details>

## Connections

- **Backward:** the pixel coordinates come from [1.5](01-05-projection-orthographic-and-perspective.md)'s viewport transform; barycentric coordinates are [1.2](01-02-2d-transforms-homogeneous-coordinates.md)'s affine combinations, and the edge function is [`linalg-refresher` 1.4](../../linalg-refresher/lessons/01-04-cross-product-and-orientation.md)'s cross product as an orientation test.
- **Forward:** [2.2](02-02-clipping-and-the-z-buffer.md) interpolates depth with these weights to decide visibility; [2.3](02-03-perspective-correct-interpolation.md) shows that screen-space barycentrics must be corrected before interpolating anything else; [3.3](03-03-ray-casting-and-intersection.md) solves for the *same* barycentric coordinates in 3D to intersect a ray with a triangle.
- **Sideways:** barycentric coordinates on a simplex are exactly the coordinates of [`algebraic-topology` 3.1](../../algebraic-topology/lessons/03-01-simplicial-delta-complexes.md)'s standard simplex, and the orientation test is the same determinant sign that computational geometry uses for convex hulls. The half-open ownership rule is the 2D version of why half-open intervals $[a, b)$ tile a line without overlap.
