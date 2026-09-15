# Computer Graphics · Lesson 4.4: Bézier Surface Patches

> ⏱ ~15 min · Module 4: Geometric Modeling & Animation · Builds on: [4.2 (Bézier curves)](04-02-bezier-curves-de-casteljau.md), [4.3 (continuity)](04-03-splines-and-continuity.md), [1.3 (normals)](01-03-3d-transforms-frames-and-normals.md) · Unlocks: [4.5 (subdivision surfaces)](04-05-subdivision-surfaces.md)

## Why this matters

Curves outline shapes; products are surfaces. A car hood, a turbine blade, a teapot — the famous Utah teapot is 32 bicubic patches — needs a smooth surface described by a few control points that a designer can drag, with a normal available at every point for shading and a guarantee that neighbouring pieces meet without seams.

The **tensor-product Bézier patch** delivers this by doing the obvious thing: a curve of curves. Everything from [4.2](04-02-bezier-curves-de-casteljau.md) carries over — de Casteljau evaluation, endpoint interpolation, convex hull — and so does [4.3](04-03-splines-and-continuity.md)'s continuity. What does *not* carry over is the easy part of chaining: curves meet end to end, but patches must tile the surface in a grid, and real shapes can't always be gridded. That limitation is the entire motivation for [4.5](04-05-subdivision-surfaces.md).

## The idea

**Sweep a curve along curves.** Arrange 16 control points in a $4 \times 4$ grid. Each row is a cubic Bézier curve. For a fixed $u$, evaluate every row at $u$: you get four points, which are themselves the control points of a curve running the other way. Evaluate *that* at $v$. Sweeping $u$ and $v$ over $[0, 1]$ paints out a surface.

**Most of the grid is handles.** The four corner points are on the surface. The twelve edge points shape the boundary curves (each boundary is just a Bézier curve of its row or column). The four interior points are pure handles — they pull the middle of the surface and are never touched by it.

**The normal comes from the two sweep directions.** At any point, moving a little in $u$ and a little in $v$ gives two tangent vectors lying in the surface. Their cross product is perpendicular to both: the normal.

## The formal version

**Bicubic Bézier patch.** With control points $\mathbf{P}_{ij}$, $i, j = 0, \dots, 3$, and the cubic Bernstein polynomials $B_i$ of [4.2](04-02-bezier-curves-de-casteljau.md):

$$\mathbf{S}(u, v) = \sum_{i=0}^{3}\sum_{j=0}^{3} B_i(u)\,B_j(v)\,\mathbf{P}_{ij}, \qquad u, v \in [0, 1].$$

In words: the weight of control point $\mathbf{P}_{ij}$ is its curve weight in $u$ times its curve weight in $v$. The weights are non-negative and sum to 1, so the patch lies in the convex hull of its 16 points and is affine invariant. *(card: [Bicubic Bezier patch](../reference.md#bicubic-bezier-patch))*

**Evaluation by de Casteljau.** Run the curve algorithm on each of the four lines $\mathbf{P}_{0j}, \dots, \mathbf{P}_{3j}$ at parameter $u$, giving four points; run it once more on those at parameter $v$. The order doesn't matter.

**Boundaries and corners.** $\mathbf{S}(u, 0)$ is the Bézier curve of $\mathbf{P}_{00}, \mathbf{P}_{10}, \mathbf{P}_{20}, \mathbf{P}_{30}$ — it depends on nothing else. The four corners $\mathbf{P}_{00}, \mathbf{P}_{30}, \mathbf{P}_{03}, \mathbf{P}_{33}$ lie on the surface.

**Tangents and normal.**

$$\mathbf{S}_u = \frac{\partial\mathbf{S}}{\partial u}, \qquad \mathbf{S}_v = \frac{\partial\mathbf{S}}{\partial v}, \qquad \mathbf{n} = \frac{\mathbf{S}_u \times \mathbf{S}_v}{\lVert\mathbf{S}_u \times \mathbf{S}_v\rVert}.$$

At a corner, by [4.2](04-02-bezier-curves-de-casteljau.md)'s endpoint-tangent rule, $\mathbf{S}_u(0,0) = 3(\mathbf{P}_{10} - \mathbf{P}_{00})$ and $\mathbf{S}_v(0,0) = 3(\mathbf{P}_{01} - \mathbf{P}_{00})$: the tangent plane at a corner is spanned by the two control legs leaving it. *(card: [Patch normal](../reference.md#patch-normal))*

**Continuity between patches.** Two patches $A$ and $B$ sharing the boundary $A(1, v) = B(0, v)$:

- **$C^0$:** $\mathbf{A}_{3j} = \mathbf{B}_{0j}$ for $j = 0, \dots, 3$ (they share a boundary row of control points).
- **$C^1$ across the boundary:** additionally $\mathbf{B}_{1j} - \mathbf{B}_{0j} = \mathbf{A}_{3j} - \mathbf{A}_{2j}$ for every $j$ — [4.3](04-03-splines-and-continuity.md)'s Bézier condition applied to each of the four cross-boundary control lines.
- **$G^1$ (tangent-plane continuity):** the tangent planes agree along the whole boundary; more flexible than $C^1$ but no longer a simple per-line rule.

*(card: [Patch continuity](../reference.md#patch-continuity))*

**The gridding problem.** A network of tensor-product patches tiles the surface in a quadrilateral grid where **four** patches meet at every interior corner. At an **extraordinary vertex** — where 3 or 5 patches must meet, as at the corner of a cube-like shape or the base of a branching limb — the per-line $C^1$ conditions from the different boundaries over-constrain the shared corner, and smooth joins require special, more complex constructions.

## Picture

![An oblique view of a bicubic patch over a 4 by 4 grid. A dashed grey control net shows 16 points: the border points at height zero and the four interior points, including P11, raised to height 2. Blue curves of constant u and constant v trace a smooth dome that rises from the flat border. A coral point at the top of the dome is labelled P of 0.5, 0.5 equals 1.5, 1.5, 1.125. The corners P00, P30 and P03 are labelled. Note: the interior control points lift the surface to only 1.125, well below their height of 2](assets/04-04-fig1.svg)

The dome's top at $1.125$ is the convex hull property at work: the interior points carry a combined weight of $(3/8 + 3/8)^2 = 9/16$ at the centre, and the other $7/16$ goes to border points at height 0.

## Worked examples

**Example 1 (mechanical): evaluate a patch and its normal.** Control points $\mathbf{P}_{ij} = (i,\ j,\ z_{ij})$ with

$$z = \begin{pmatrix} 0 & 0 & 0 & 0 \\ 0 & 2 & 2 & 0 \\ 0 & 2 & 2 & 0 \\ 0 & 0 & 0 & 0 \end{pmatrix}\quad(\text{row } i, \text{ column } j).$$

*At $(u, v) = (0.5, 0.5)$.* Both weight vectors are $(\tfrac18, \tfrac38, \tfrac38, \tfrac18)$, so $x = y = 1.5$ (the grid coordinates are linear in the indices) and

$$z = \sum_{i,j} B_i\,B_j\,z_{ij} = 2 \times 4 \times \left(\tfrac38\right)^2 = \tfrac{72}{64} = 1.125.$$

*At $(u, v) = (0.25, 0.5)$.* $u$-weights $(0.4219,\ 0.4219,\ 0.1406,\ 0.0156)$; $v$-weights as before.

$$z = 2\left(\tfrac38 + \tfrac38\right)(0.4219 + 0.1406) = 2(0.75)(0.5625) = 0.84375, \qquad \mathbf{S} = (0.75,\ 1.5,\ 0.844).$$

*Normal there.* Differentiating the Bernstein weights (or differencing the patch numerically) gives $\mathbf{S}_u = (3,\ 0,\ 2.25)$ and $\mathbf{S}_v = (0,\ 3,\ 0)$ — the $z$-slope along $v$ vanishes on the symmetry line $v = 0.5$.

$$\mathbf{S}_u \times \mathbf{S}_v = (0\cdot0 - 2.25\cdot3,\ 2.25\cdot0 - 3\cdot0,\ 3\cdot3 - 0\cdot0) = (-6.75,\ 0,\ 9), \qquad \mathbf{n} = (-0.6,\ 0,\ 0.8).$$

The normal leans back toward $-x$, as it should on the rising side of the dome.

**Example 2 (why you'd care): stitching two patches $C^1$.** Patch $A$ is Example 1's dome; its boundary row at $i = 3$ is flat, $\mathbf{A}_{3j} = (3, j, 0)$, and the row before it is $\mathbf{A}_{2j} = (2, j, z_{2j})$ with $z_{2j} = (0, 2, 2, 0)$. A second patch $B$ continues in $+x$.

*$C^0$:* $\mathbf{B}_{0j} = (3, j, 0)$.

*$C^1$:* $\mathbf{B}_{1j} = 2\mathbf{A}_{3j} - \mathbf{A}_{2j} = (4,\ j,\ -z_{2j}) = (4, j, 0),\ (4, j, -2),\ (4, j, -2),\ (4, j, 0)$ for $j = 0, 1, 2, 3$.

So a dome must continue into a **trough**: the cross-boundary handles have to mirror $A$'s, which pushes $B$'s middle control points down to $-2$. One $C^1$ join fixes **two of $B$'s four rows** — eight of its sixteen points. If $B$ must also join $C^1$ to an existing patch on its far side, that fixes the other two rows, and $B$ has no freedom left at all; joins along its remaining two sides must then happen to be consistent. That is why patch networks are designed together, as one control grid, rather than stitched one patch at a time. And at a vertex where only three patches meet, the boundaries through it leave at roughly $120°$ instead of in straight $90°$ pairs, so the per-line rules act on the same corner handles in incompatible directions — the extraordinary-vertex problem.

## Watch out

- **You might think** a patch passes through all its edge control points, like a bilinear surface — **but actually** only the four corners are on the surface. The boundary curves are Bézier curves of the edge rows, so the middle edge points are handles too.
- **You might think** $\mathbf{S}_u \times \mathbf{S}_v$ always gives a usable normal — **but actually** it vanishes wherever the tangents are parallel or zero, for example at a corner whose two control legs point the same way, or where a patch is collapsed to a point (a triangle made by merging two corners). Such degenerate patches produce black spots or NaNs in shading and need a limit normal computed some other way.
- **You might think** $C^1$ between patches is just the curve rule applied at the corners — **but actually** it must hold for **all four** cross-boundary lines, or the surfaces meet with a crease along the interior of the edge even though the corners look smooth.

## One-liner

> A bicubic patch is a Bézier curve of Bézier curves — weights multiply, corners interpolate, boundaries are curves of their edge rows, the normal is $\mathbf{S}_u \times \mathbf{S}_v$ — and patches join $C^1$ only by mirroring handles line by line, which a regular grid allows and an extraordinary vertex does not.

## Problems

**P1 (🟢)** A patch has $\mathbf{P}_{ij} = (i, j, z_{ij})$ with
$$z = \begin{pmatrix} 0 & 1 & 1 & 0 \\ 1 & 3 & 3 & 1 \\ 1 & 3 & 3 & 1 \\ 0 & 1 & 1 & 0 \end{pmatrix}.$$
(a) Find $\mathbf{S}(0.5, 0.5)$.
(b) Find $\mathbf{S}(0.5, 0.25)$.
(c) Find $\mathbf{S}(0, 0.5)$, and say which control points it depends on.

**P2 (🟡)** A patch is flat ($\mathbf{P}_{ij} = (i, j, 0)$) except that $\mathbf{P}_{10} = (1, 0, 1)$ and $\mathbf{P}_{01} = (0, 1, 0.5)$.
(a) Compute the corner tangents $\mathbf{S}_u(0,0)$, $\mathbf{S}_v(0,0)$ and the unit normal at $\mathbf{P}_{00}$.
(b) Compute $\mathbf{S}(0, 0.5)$. Why does $\mathbf{P}_{10}$ not affect it?
(c) A neighbouring patch $B$ attaches along the boundary $u = 0$ of this patch (so that $B(1, v) = \mathbf{S}(0, v)$). For $C^1$, what must $B$'s control point $\mathbf{B}_{20}$ be?

**P3 (🔴)** (a) A patch is surrounded on all four sides by neighbours with fixed control points, and all four joins must be $C^1$. Count how many of its 16 control points are determined. Which remain free?
(b) Explain, in terms of the number of patches meeting at a corner and the directions of their boundary curves, why a regular grid of bicubic patches can close up around a vertex where four patches meet but runs into trouble at a vertex where three meet (as at the corner of a rounded cube).
(c) Name the modeling approach that [4.5](04-05-subdivision-surfaces.md) uses to avoid this, in one sentence.

<details>
<summary>Solutions</summary>

**P1**

(a) Weights $(\tfrac18, \tfrac38, \tfrac38, \tfrac18)$ in both directions; $x = y = 1.5$.

$$z = \sum_{i,j} w_i w_j z_{ij}.$$

Group the entries: corners (weight $\tfrac1{64}$ each) contribute $0$; the 8 edge entries with value 1 have weight $\tfrac18\cdot\tfrac38 = \tfrac{3}{64}$ each, total $\tfrac{24}{64}$; the 4 interior entries with value 3 have weight $\tfrac{9}{64}$ each, total $\tfrac{108}{64}$.

$$z = \tfrac{24 + 108}{64} = \tfrac{132}{64} = 2.0625, \qquad \mathbf{S}(0.5, 0.5) = \mathbf{(1.5,\ 1.5,\ 2.0625)}.$$

(b) $v = 0.25$ weights: $(0.4219,\ 0.4219,\ 0.1406,\ 0.0156)$. First collapse each row $i$ in $v$:

- row 0 $(0,1,1,0)$: $0.4219 + 0.1406 = 0.5625$
- rows 1, 2 $(1,3,3,1)$: $0.4219 + 3(0.4219 + 0.1406) + 0.0156 = 2.125$
- row 3: $0.5625$

Then in $u$ with $(\tfrac18, \tfrac38, \tfrac38, \tfrac18)$: $\tfrac18(0.5625) \times 2 + \tfrac38(2.125) \times 2 = 0.1406 + 1.5938 = 1.7344$. So $\mathbf{S}(0.5, 0.25) = \mathbf{(1.5,\ 0.75,\ 1.734)}$.

(c) $u = 0$ gives weight 1 to row $i = 0$ only, so $\mathbf{S}(0, v)$ is the Bézier curve of $\mathbf{P}_{00}, \dots, \mathbf{P}_{03}$ — here $z$-values $(0, 1, 1, 0)$. At $v = 0.5$: $z = \tfrac38 + \tfrac38 = 0.75$, so $\mathbf{S}(0, 0.5) = \mathbf{(0,\ 1.5,\ 0.75)}$. It depends only on the four points $\mathbf{P}_{00}, \mathbf{P}_{01}, \mathbf{P}_{02}, \mathbf{P}_{03}$.

**P2**

(a) $\mathbf{S}_u(0,0) = 3(\mathbf{P}_{10} - \mathbf{P}_{00}) = \mathbf{(3,\ 0,\ 3)}$; $\mathbf{S}_v(0,0) = 3(\mathbf{P}_{01} - \mathbf{P}_{00}) = \mathbf{(0,\ 3,\ 1.5)}$.

$$\mathbf{S}_u \times \mathbf{S}_v = (0\cdot1.5 - 3\cdot3,\ 3\cdot0 - 3\cdot1.5,\ 3\cdot3 - 0\cdot0) = (-9,\ -4.5,\ 9),$$

length $13.5$, so $\mathbf{n} = \mathbf{(-0.667,\ -0.333,\ 0.667)}$.

(b) $\mathbf{S}(0, v)$ is the curve of row $i = 0$: $(0,0,0), (0,1,0.5), (0,2,0), (0,3,0)$. At $v = 0.5$: $z = \tfrac38(0.5) = 0.1875$, so $\mathbf{S}(0, 0.5) = \mathbf{(0,\ 1.5,\ 0.1875)}$.

$\mathbf{P}_{10}$ is in row $i = 1$, which gets weight $B_1(0) = 0$ on the boundary $u = 0$. It shapes how the surface *leaves* that boundary (the cross-boundary tangent), not the boundary itself.

(c) $B$'s last row matches this patch's first: $\mathbf{B}_{3j} = \mathbf{P}_{0j}$, so $\mathbf{B}_{30} = (0, 0, 0)$. $C^1$ along $j = 0$: $\mathbf{B}_{30} - \mathbf{B}_{20} = \mathbf{P}_{10} - \mathbf{P}_{00}$, so

$$\mathbf{B}_{20} = 2\mathbf{P}_{00} - \mathbf{P}_{10} = (0,0,0) - (1, 0, 1) = \mathbf{(-1,\ 0,\ -1)}.$$

**P3**

(a) A $C^1$ join along a side fixes the two control lines nearest that side: the shared boundary line (by $C^0$) and the next line in (by mirroring). The side $u = 0$ fixes rows $i = 0, 1$; the side $u = 1$ fixes rows $i = 2, 3$. Those two sides alone determine **all 16** control points. The sides $v = 0$ and $v = 1$ then fix columns $j = 0, 1$ and $j = 2, 3$ — the same 16 points a second time — so every point receives two independent requirements, and a $C^1$ solution exists only if the four neighbours happen to agree. **None remain free.** (With only $C^0$ required, the 12 boundary points are fixed and the 4 interior points $\mathbf{P}_{11}, \mathbf{P}_{12}, \mathbf{P}_{21}, \mathbf{P}_{22}$ are free.)

(b) At a regular vertex, four patch corners meet, and the boundary curves through the vertex come in two straight pairs ($u$ and $v$ lines continuing across). The mirror conditions along one line and the perpendicular line act on independent handles, so they can be satisfied together. With three patches, the boundary curves leave the vertex at roughly $120°$, no curve continues straight across to another, and each patch's corner has only two handle directions ($\mathbf{S}_u$, $\mathbf{S}_v$) to match three neighbours' tangent planes. The per-line conditions conflict, so tensor-product patches need special degenerate or higher-order constructions there.

(c) Subdivision surfaces define the smooth surface as the limit of repeatedly refining a control mesh of arbitrary connectivity with local averaging rules, so extraordinary vertices are handled by the same rules as regular ones.

</details>

## Flashback

**From Lesson 4.1 (meshes):** (a) A closed genus-0 triangle mesh has 1000 vertices. Give $E$ and $F$.
(b) A scanned statue with 5 handles (genus 5) also has 1000 vertices, closed and triangulated. Give $E$ and $F$.
(c) Stored as an indexed face set with 32-bit float positions and 32-bit indices, how many bytes does (b) take?

<details>
<summary>Solution</summary>

(a) $\chi = 2$: $E = 3(1000 - 2) = \mathbf{2994}$, $F = 2(1000 - 2) = \mathbf{1996}$.

(b) $\chi = 2 - 2(5) = -8$: $E = 3(1000 + 8) = \mathbf{3024}$, $F = 2(1000 + 8) = \mathbf{2016}$. Handles add faces and edges for the same vertex count.

(c) Positions: $1000 \times 12 = 12{,}000$ bytes. Indices: $2016 \times 3 \times 4 = 24{,}192$ bytes. Total $\mathbf{36{,}192}$ bytes.

</details>

## Connections

- **Backward:** each row and column is [4.2](04-02-bezier-curves-de-casteljau.md)'s curve; cross-boundary $C^1$ is [4.3](04-03-splines-and-continuity.md)'s $\mathbf{Q}_1 = 2\mathbf{P}_3 - \mathbf{P}_2$ applied four times; the normal is the cross product of [1.3](01-03-3d-transforms-frames-and-normals.md)'s tangents.
- **Forward:** [4.5](04-05-subdivision-surfaces.md) generalizes the uniform B-spline version of these patches to arbitrary meshes; a Catmull–Clark surface is exactly a grid of bicubic B-spline patches away from extraordinary vertices. Patches are rendered by tessellating them into the triangles of [2.1](02-01-rasterizing-lines-and-triangles.md), with $(u, v)$ doubling as texture coordinates ([2.6](02-06-texture-mapping-and-filtering.md)).
- **Sideways:** $\mathbf{S}_u$ and $\mathbf{S}_v$ span the tangent plane and $\lVert\mathbf{S}_u \times \mathbf{S}_v\rVert$ is the area element — the first fundamental form of [`differential-geometry` 1.2](../../differential-geometry/lessons/01-02-surfaces-first-fundamental-form.md); the extraordinary-vertex obstruction is related to that course's result that curvature, not just smoothness, constrains how flat pieces can be assembled.
