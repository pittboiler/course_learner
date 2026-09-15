# Computer Graphics · Lesson 4.5: Subdivision Surfaces

> ⏱ ~15 min · Module 4: Geometric Modeling & Animation · Builds on: [4.4 (patches and extraordinary vertices)](04-04-bezier-surface-patches.md), [4.3 (B-splines)](04-03-splines-and-continuity.md), [4.1 (mesh counts)](04-01-meshes-and-geometry-representations.md) · Unlocks: [4.7 (skinning)](04-07-skinning-and-deformation.md)

## Why this matters

Almost every character in an animated film is a subdivision surface. Pixar's short *Geri's Game* (1997) introduced them to production, and they won because they dissolve [4.4](04-04-bezier-surface-patches.md)'s central difficulty: a modeler builds a coarse cage of polygons with **any** connectivity — five edges meeting at a knuckle, three at a nostril — and the renderer turns it into a smooth surface with no patch bookkeeping, no continuity constraints to satisfy by hand, and no seams.

The mechanism is almost embarrassingly simple: replace every face by smaller faces and move every vertex to a weighted average of its neighbours; repeat. The surprise is that the rules can be chosen so that the limit of infinitely many steps is a well-defined smooth surface — and away from the few irregular vertices it is *exactly* the uniform cubic B-spline of [4.3](04-03-splines-and-continuity.md), extended to surfaces.

## The idea

**Cut the corners off, again and again.** Take a square. Replace each edge by two points, one a quarter of the way along from each end, and join them up. The corners are gone; you have an octagon. Do it again: a 16-gon, then 32. The shape converges fast to a smooth rounded square. That is Chaikin's corner cutting, and its limit is a quadratic B-spline curve.

**Surfaces work the same way.** For a polygon mesh, add a new point in the middle of every face and on every edge, reconnect into smaller quads, and nudge the old vertices toward the average of their surroundings. Each step multiplies the number of faces by about four and shrinks every kink. The rules are **local** — each new point depends only on a small neighbourhood — so the rules at a vertex with five neighbours are the same formula as at a vertex with four, just with a different count.

**The cage is the control polygon.** As with a B-spline, the smooth result does not pass through the cage's vertices. It sits inside, pulled toward them. Designers push cage points around exactly as they would push Bézier handles.

## The formal version

**Chaikin's algorithm (curves).** Replace each edge $\mathbf{P}_i\mathbf{P}_{i+1}$ of a polygon by the two points

$$\tfrac34\mathbf{P}_i + \tfrac14\mathbf{P}_{i+1}, \qquad \tfrac14\mathbf{P}_i + \tfrac34\mathbf{P}_{i+1}.$$

The limit is the uniform **quadratic** B-spline of the original polygon: $C^1$, passing through each edge's midpoint tangent to that edge. *(card: [Chaikin corner cutting](../reference.md#chaikin-corner-cutting))*

**Cubic B-spline subdivision (curves).** Each step inserts an **edge point** and moves each **vertex point**:

$$\mathbf{E}_i = \tfrac12(\mathbf{P}_i + \mathbf{P}_{i+1}), \qquad \mathbf{V}_i = \tfrac18(\mathbf{P}_{i-1} + 6\mathbf{P}_i + \mathbf{P}_{i+1}).$$

The limit is [4.3](04-03-splines-and-continuity.md)'s uniform cubic B-spline ($C^2$), and each vertex converges to its **limit position** $\tfrac16(\mathbf{P}_{i-1} + 4\mathbf{P}_i + \mathbf{P}_{i+1})$ — the B-spline's join point.

**Catmull–Clark subdivision (surfaces, any polygons).** One step:

1. **Face point** for each face: the average of its vertices.
2. **Edge point** for each (interior) edge: the average of its two endpoints and the two adjacent face points,
$$\mathbf{E} = \tfrac14(\mathbf{v}_1 + \mathbf{v}_2 + \mathbf{F}_1 + \mathbf{F}_2).$$
3. **New vertex point** for each old vertex $\mathbf{S}$ of valence $n$ (number of incident edges):
$$\mathbf{S}' = \frac{\mathbf{Q} + 2\mathbf{R} + (n - 3)\,\mathbf{S}}{n},$$
where $\mathbf{Q}$ is the average of the adjacent face points and $\mathbf{R}$ the average of the incident edges' **midpoints**.
4. **Reconnect:** each face with $k$ sides becomes $k$ quads, each joining a face point, two edge points and one vertex point.

*(card: [Catmull-Clark subdivision](../reference.md#catmull-clark-subdivision))*

**Counts.** From $(V, E, F)$ with face sizes summing to $\sum k_f = 2E$ (each edge borders two faces):

$$V' = V + E + F, \qquad F' = \sum_f k_f = 2E, \qquad E' = 2E + \sum_f k_f = 4E.$$

After the first step every face is a quad, so thereafter $F$ and $E$ each grow by a factor of 4 per step. $V' - E' + F' = V - E + F$: topology is preserved. *(card: [Subdivision counts](../reference.md#subdivision-counts))*

**Extraordinary vertices and smoothness.** A vertex of valence 4 in a quad mesh is **regular**; others are **extraordinary**. Old vertices keep their valence; every new face point has the valence of its face's side count, and every new edge point has valence 4. So after one step, extraordinary vertices are isolated islands in a regular grid, and they never multiply. The limit surface is $C^2$ wherever the mesh is regular — there it coincides with bicubic B-spline patches ([4.4](04-04-bezier-surface-patches.md)) — and $C^1$ at extraordinary vertices.

**Loop subdivision** is the analogous scheme for triangle meshes (each triangle into four), limiting to quartic box splines, $C^2$ at regular (valence-6) vertices.

**Semi-sharp creases.** Tagging edges to use the curve rules ($\mathbf{E}$ as a plain midpoint, $\mathbf{S}'$ from only its two crease neighbours) for a few levels before switching to smooth rules gives controllable hard edges — the trick that made subdivision practical for mechanical objects.

## Picture

![A dashed grey control square with grey corner dots, labelled control square. A coral octagon with eight dots, labelled 1 step, 8 points, cuts off each corner, passing through points a quarter and three quarters of the way along each side. A thick blue rounded square inside, labelled 5 steps, 128 points, visually the limit, touches the middle of each side of the square. Footer: rule, replace each edge PQ by the points three quarters P plus one quarter Q and one quarter P plus three quarters Q](assets/04-05-fig1.svg)

The blue curve touches each side of the control square exactly at its midpoint and is tangent to it there — the quadratic B-spline property — while the corners, each $\sqrt2 \approx 1.414$ from the centre, pull the curve out only to $1.061$.

## Worked examples

**Example 1 (mechanical): one Catmull–Clark step on a cube.** Vertices $(\pm1, \pm1, \pm1)$; $V = 8$, $E = 12$, $F = 6$.

*Face point* of the $+z$ face: average of its four corners, $(0, 0, 1)$.

*Edge point* of the edge from $(1,1,1)$ to $(1,1,-1)$, which borders the $+x$ face (face point $(1,0,0)$) and the $+y$ face ($(0,1,0)$):

$$\mathbf{E} = \tfrac14\big((1,1,1) + (1,1,-1) + (1,0,0) + (0,1,0)\big) = \tfrac14(3, 3, 0) = (0.75,\ 0.75,\ 0).$$

*Vertex point* for $\mathbf{S} = (1,1,1)$, valence $n = 3$. Adjacent face points $(1,0,0), (0,1,0), (0,0,1)$, so $\mathbf{Q} = (\tfrac13, \tfrac13, \tfrac13)$. Incident edge midpoints $(1,1,0), (1,0,1), (0,1,1)$, so $\mathbf{R} = (\tfrac23, \tfrac23, \tfrac23)$.

$$\mathbf{S}' = \frac{\mathbf{Q} + 2\mathbf{R} + 0\cdot\mathbf{S}}{3} = \frac{(\tfrac13 + \tfrac43)(1,1,1)}{3} = \left(\tfrac59,\ \tfrac59,\ \tfrac59\right) \approx (0.556,\ 0.556,\ 0.556).$$

Distances from the centre: face points $1.0$, edge points $1.061$, the corner $0.962$ — the corner has been pulled in from $1.732$, and the new points are already roughly spherical.

*Counts:* $V' = 8 + 12 + 6 = 26$, $F' = 2E = 24$ quads, $E' = 4E = 48$; check $26 - 48 + 24 = 2$. ✓ The eight original corners stay valence 3 — the cube's extraordinary vertices — while all 18 new points have valence 4.

**Example 2 (why you'd care): how fast smoothing happens, and what it costs.** A flat quad grid with one vertex pulled up to height 1 (a spike). At that vertex $n = 4$. Its four edge midpoints are at height $\tfrac12$, so $\mathbf{R}_z = 0.5$; each of its four face points averages the spike with three flat corners, so $\mathbf{Q}_z = 0.25$. Then

$$S'_z = \frac{0.25 + 2(0.5) + (4 - 3)(1)}{4} = \frac{2.25}{4} = 0.5625.$$

One step lowers the spike to $\tfrac{9}{16}$ of its height while spreading it onto the new neighbours. (On a perfectly flat grid the same formula returns $\mathbf{S}' = \mathbf{S}$: regular flat regions are left alone.)

*Cost.* A production character cage of $10{,}000$ quads becomes $40{,}000$ after one level, $640{,}000$ after three, and $2.56$ million after four. Renderers therefore subdivide **adaptively** — more near the camera and at silhouettes — or evaluate the limit surface directly with patch approximations on the GPU, and never store the deep levels.

## Watch out

- **You might think** the subdivided surface passes through the cage's vertices — **but actually** vertices move toward the average of their neighbourhood at every step; the limit surface lies inside the cage. A modeler who snaps a cage vertex onto a target point sees the smooth surface miss it.
- **You might think** subdivision creates more and more extraordinary vertices — **but actually** only the original irregular vertices (and, after the first step, the face points of non-quad faces) stay irregular; everything new is valence 4, so the regular region grows and the extraordinary points become isolated. This is why modelers try to use mostly quads with few irregular vertices in visible, curved places.
- **You might think** $(n - 3)\,\mathbf{S}$ is a typo that should be $(n - 2)$ or similar — **but actually** the weights $1, 2, n - 3$ on $\mathbf{Q}, \mathbf{R}, \mathbf{S}$ sum to $n$, making $\mathbf{S}'$ an affine combination, and at valence 3 the old position gets **zero** weight, as in Example 1.

## One-liner

> Subdivision replaces patches with a rule: add face and edge points, move each vertex to $(\mathbf{Q} + 2\mathbf{R} + (n-3)\mathbf{S})/n$, reconnect into quads, repeat — faces quadruple, extraordinary vertices stay isolated, and the limit is a B-spline surface everywhere regular.

## Problems

**P1 (🟢)** (a) Give $V$, $E$, $F$ for a cube after one and after two Catmull–Clark steps.
(b) A triangular prism has $V = 6$, $E = 9$, and $F = 5$ (two triangles, three quads). Give $V$, $E$, $F$ after one step, and check the Euler characteristic.
(c) How many faces does the cube have after 6 steps?

**P2 (🟡)** Apply one step of **cubic B-spline curve subdivision** to the closed square $(1,1), (-1,1), (-1,-1), (1,-1)$.
(a) Give the new vertex point for $(1,1)$ and the edge point on the edge from $(1,1)$ to $(-1,1)$.
(b) Where does the corner $(1,1)$ end up in the limit? How far is that from the centre, compared with the corner's original distance and with the edge midpoints?
(c) Compare with Chaikin's limit curve on the same square (Picture): which is rounder, and which hugs the control polygon more closely?

**P3 (🔴)** (a) Show that on a flat regular quad grid ($\mathbf{P} = (x, y, 0)$ at integer points), the Catmull–Clark vertex rule returns every vertex to its own position.
(b) For the cube corner of Example 1, suppose instead the modeler had used the rule with weight $(n - 2)$ on $\mathbf{S}$ and divided by $n + 1$. Compute the "new corner" and explain what property the correct weights have that this variant lacks.
(c) After two Catmull–Clark steps on a cube, how many vertices have valence 3, and how many valence 4?

<details>
<summary>Solutions</summary>

**P1**

(a) Step 1: $V = 8 + 12 + 6 = \mathbf{26}$, $F = 2 \times 12 = \mathbf{24}$, $E = 4 \times 12 = \mathbf{48}$.
Step 2: $V = 26 + 48 + 24 = \mathbf{98}$, $F = 2 \times 48 = \mathbf{96}$, $E = 4 \times 48 = \mathbf{192}$.

(b) $V' = 6 + 9 + 5 = \mathbf{20}$. $F' = \sum k_f = 3 + 3 + 4 + 4 + 4 = \mathbf{18}$ quads. $E' = 4 \times 9 = \mathbf{36}$. Check: $20 - 36 + 18 = 2$. ✓

(c) $6 \times 4^6 = \mathbf{24{,}576}$ faces.

**P2**

(a) *Vertex point* for $\mathbf{P}_i = (1,1)$, with neighbours $(1,-1)$ before and $(-1,1)$ after:

$$\mathbf{V} = \tfrac18\big((1,-1) + 6(1,1) + (-1,1)\big) = \tfrac18(6, 6) = \mathbf{(0.75,\ 0.75)}.$$

*Edge point:* $\tfrac12\big((1,1) + (-1,1)\big) = \mathbf{(0,\ 1)}$.

(b) Limit: $\tfrac16\big((1,-1) + 4(1,1) + (-1,1)\big) = \tfrac16(4, 4) = \mathbf{(0.667,\ 0.667)}$, at distance $\mathbf{0.943}$ from the centre. The corner started at $1.414$. The edge points are on the edges at distance $1$ but will move inward on later steps, since they become vertex points: their limit is $\tfrac16\big((0.75,0.75) + 4(0,1) + (-0.75,0.75)\big) = (0,\ 0.917)$.

(c) The cubic limit reaches only $0.943$ at the corners and $0.917$ at the edge middles — nearly circular (ratio $1.03$), and it **does not touch** the control square at all. Chaikin's quadratic limit reaches $1.061$ at the corners and exactly $1$ at the edge midpoints (ratio $1.06$), touching every side. The quadratic curve hugs the control polygon more closely; the cubic one is smoother ($C^2$) and rounder.

**P3**

(a) Take a grid vertex $\mathbf{S} = (a, b, 0)$, valence 4. Its four adjacent face centres are $\mathbf{S} + (\pm\tfrac12, \pm\tfrac12, 0)$; the offsets cancel, so $\mathbf{Q} = \mathbf{S}$. Its four edge midpoints are $\mathbf{S} + (\pm\tfrac12, 0, 0)$ and $\mathbf{S} + (0, \pm\tfrac12, 0)$; again the offsets cancel, so $\mathbf{R} = \mathbf{S}$. Then

$$\mathbf{S}' = \frac{\mathbf{S} + 2\mathbf{S} + (4 - 3)\mathbf{S}}{4} = \mathbf{S}. \ \checkmark$$

(b) Variant: $(\mathbf{Q} + 2\mathbf{R} + (n-2)\mathbf{S})/(n+1)$ with $n = 3$: $\big((\tfrac13 + \tfrac43)(1,1,1) + (1,1,1)\big)/4 = \tfrac{8/3}{4}(1,1,1) = (0.667,\ 0.667,\ 0.667)$. The weights $1 + 2 + (n - 2) = n + 1$ do sum to the divisor, so this is still affine — but at valence 4 it gives $(\mathbf{Q} + 2\mathbf{R} + 2\mathbf{S})/5$, which on a regular grid is **not** the bicubic B-spline rule $(\mathbf{Q} + 2\mathbf{R} + \mathbf{S})/4$. The correct weights are chosen so that regular regions reproduce uniform bicubic B-spline refinement exactly, and that equivalence is what guarantees a $C^2$ limit there. The variant still leaves a flat grid alone (every term equals $\mathbf{S}$), but on curved regular regions it refines toward a different surface, and the B-spline smoothness guarantee no longer applies.

(c) The 8 original corners keep valence **3** at every step. Every other vertex is valence 4: after two steps $98 - 8 = \mathbf{90}$ of them. (The 6 face points from step one have valence 4 because the cube's faces are quads.)

</details>

## Flashback

**From Lesson 4.3 (splines):** Keyframe positions $(0,0)$, $(2,1)$, $(4,4)$, $(7,4)$ are joined by a Catmull–Rom spline.
(a) Give the tangents at $(2,1)$ and $(4,4)$.
(b) Give the Bézier control points of the segment from $(2,1)$ to $(4,4)$.
(c) Evaluate that segment at $t = 0.5$.

<details>
<summary>Solution</summary>

(a) $\mathbf{m}_1 = \tfrac12\big((4,4) - (0,0)\big) = \mathbf{(2,\ 2)}$; $\mathbf{m}_2 = \tfrac12\big((7,4) - (2,1)\big) = \mathbf{(2.5,\ 1.5)}$.

(b) $(2,1)$; $(2,1) + \tfrac13(2,2) = (2.667,\ 1.667)$; $(4,4) - \tfrac13(2.5, 1.5) = (3.167,\ 3.5)$; $(4,4)$.

(c) Weights $(\tfrac18, \tfrac38, \tfrac38, \tfrac18)$:

$$x = \tfrac18(2) + \tfrac38(2.667) + \tfrac38(3.167) + \tfrac18(4) = 0.25 + 1.0 + 1.1875 + 0.5 = \mathbf{2.9375},$$
$$y = \tfrac18(1) + \tfrac38(1.667) + \tfrac38(3.5) + \tfrac18(4) = 0.125 + 0.625 + 1.3125 + 0.5 = \mathbf{2.5625}.$$

</details>

## Connections

- **Backward:** the curve rules are refinement of [4.3](04-03-splines-and-continuity.md)'s B-splines; in regular regions a Catmull–Clark surface *is* a grid of bicubic B-spline patches, which is how it escapes [4.4](04-04-bezier-surface-patches.md)'s extraordinary-vertex constraints; face, edge and vertex queries use [4.1](04-01-meshes-and-geometry-representations.md)'s half-edge structure, and the counts are its Euler relation.
- **Forward:** [4.7](04-07-skinning-and-deformation.md) deforms the coarse cage with a skeleton and subdivides *after* deforming, so animation stays cheap and the result stays smooth.
- **Sideways:** subdivision is a stationary linear iteration $\mathbf{P}^{(k+1)} = S\,\mathbf{P}^{(k)}$ on the local neighbourhood of a vertex, and its smoothness is decided by the eigenvalues of the **subdivision matrix** $S$ — the same eigen-analysis as [`linalg-refresher` 3.2](../../linalg-refresher/lessons/03-02-diagonalization.md)'s powers of a diagonalizable matrix. The limit position formula in P2 is the left eigenvector for eigenvalue 1.
