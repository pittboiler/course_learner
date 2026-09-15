# Computer Graphics · Lesson 4.1: Meshes & Geometry Representations

> ⏱ ~15 min · Module 4: Geometric Modeling & Animation · Builds on: [2.1 (triangles and winding)](02-01-rasterizing-lines-and-triangles.md), [1.3 (normals)](01-03-3d-transforms-frames-and-normals.md), [`graph-theory` 3.1 (Euler's formula)](../../graph-theory/lessons/03-01-planar-euler-formula.md) · Unlocks: [4.2 (Bézier curves)](04-02-bezier-curves-de-casteljau.md), [4.5 (subdivision surfaces)](04-05-subdivision-surfaces.md)

## Why this matters

Modules 1–3 took the geometry as given: "a million triangles". Module 4 asks where it comes from and how it is stored. The choice of representation decides what is cheap. Rendering a triangle mesh is cheap; asking "is this point inside the object?" of one is not. An implicit surface answers that instantly but can't be rasterized directly. A mesh stored as a bag of triangles renders fine but can't tell you a triangle's neighbours, which smoothing, subdivision ([4.5](04-05-subdivision-surfaces.md)) and simplification all need.

This lesson is the vocabulary, plus three numbers worth carrying around: a closed triangle mesh has about twice as many faces and three times as many edges as vertices, and each vertex touches about six triangles. Those ratios come straight from Euler's formula and set every memory budget in geometry processing.

## The idea

**Explicit versus implicit.** You can describe a surface by *listing points on it* — vertices joined into triangles, or a curve's parameter $t \mapsto$ point — or by *a test every point must pass*, like "distance from the centre equals the radius". Listing makes it easy to generate points (and therefore to draw). Testing makes it easy to classify a point as inside or outside (and therefore to combine shapes by set operations). Neither is easy at the other job.

**A mesh is a graph with geometry.** Vertices carry positions; edges and faces are the combinatorics. Store only the faces as triples of vertex indices and you can draw, but walking from a triangle to its neighbour means searching. Store for every edge *which way it runs in each face* — the half-edge structure — and every local question ("what's around this vertex?", "which face is across this edge?") becomes a couple of pointer hops.

**Topology constrains counts.** On any closed surface without holes, vertices minus edges plus faces equals 2, no matter how the surface is cut into polygons. For triangles, each face has three edges and each edge borders two faces. Put those together and the ratios are forced.

## The formal version

**Representations.**

| kind | examples | point generation | inside/outside test |
|---|---|---|---|
| explicit | triangle meshes, parametric curves and patches ([4.2](04-02-bezier-curves-de-casteljau.md)–[4.4](04-04-bezier-surface-patches.md)), point clouds | easy | hard |
| implicit | $f(\mathbf{p}) = 0$: spheres, signed distance fields, metaballs, CSG | hard | easy: sign of $f$ |

*(card: [Explicit and implicit surfaces](../reference.md#explicit-and-implicit-surfaces))*

**Implicit surfaces and CSG.** A surface $\{\mathbf{p} : f(\mathbf{p}) = 0\}$ with $f < 0$ inside. A **signed distance function** (SDF) has $\lvert f(\mathbf{p})\rvert$ equal to the distance to the surface; for a sphere, $f(\mathbf{p}) = \lVert\mathbf{p} - \mathbf{c}\rVert - r$. Constructive solid geometry combines solids pointwise:

$$f_{A \cup B} = \min(f_A, f_B), \qquad f_{A \cap B} = \max(f_A, f_B), \qquad f_{A \setminus B} = \max(f_A, -f_B).$$

In words: a point is inside a union if it is inside either; inside an intersection if inside both. The signs are always right; the magnitudes stay exact distances only in some regions (for a union, outside both shapes). *(card: [Constructive solid geometry](../reference.md#constructive-solid-geometry))*

**Indexed face set.** An array of $V$ vertex positions and an array of $F$ faces, each a triple of vertex indices listed counter-clockwise when seen from outside (the winding of [2.1](02-01-rasterizing-lines-and-triangles.md), so the face normal is $(\mathbf{v}_1 - \mathbf{v}_0) \times (\mathbf{v}_2 - \mathbf{v}_0)$ pointing outward).

**Half-edge structure.** Each edge is split into two **half-edges**, one per adjacent face, pointing in opposite directions. Each half-edge stores its origin vertex, its **twin** (the opposite half-edge), the **next** half-edge around its face, and its face; each vertex and face stores one incident half-edge. Around a face, repeat $h \leftarrow \text{next}(h)$; around a vertex, repeat $h \leftarrow \text{next}(\text{twin}(h))$. *(card: [Half-edge structure](../reference.md#half-edge-structure))*

**Manifold and closed.** A mesh is a **2-manifold** if every edge borders exactly two faces (or one, on a boundary) and the faces around each vertex form a single fan. Half-edge structures require manifoldness.

**Euler characteristic.** For a closed, orientable, connected polygon mesh of genus $g$ (number of handles),

$$V - E + F = \chi = 2 - 2g.$$

For a closed **triangle** mesh, every face has 3 edges and every edge 2 faces, so $3F = 2E$. Combining:

$$E = 3(V - \chi), \qquad F = 2(V - \chi), \qquad \text{average valence} = \frac{2E}{V} = 6\left(1 - \frac{\chi}{V}\right) \to 6.$$

In words: a large closed triangle mesh has $F \approx 2V$ and $E \approx 3V$, and vertices have about six neighbours. The planar version $V - E + F = 2$ is proved in [`graph-theory` 3.1](../../graph-theory/lessons/03-01-planar-euler-formula.md). *(card: [Euler characteristic of meshes](../reference.md#euler-characteristic-of-meshes))*

**Vertex normals** for smooth shading ([2.5](02-05-blinn-phong-shading-frequency-materials.md)) average the normals of the faces around a vertex. The common choice is **area-weighted**: sum the unnormalized cross products (whose lengths are twice the face areas), then normalize.

$$\mathbf{n}_v = \operatorname{normalize}\sum_{\text{faces } j \ni v} (\mathbf{v}_{j,1} - \mathbf{v}_{j,0}) \times (\mathbf{v}_{j,2} - \mathbf{v}_{j,0}).$$

*(card: [Vertex normal](../reference.md#vertex-normal))*

## Picture

![Two triangles sharing an edge. Face A has vertices v0, v1, v2 and blue half-edges h0 from v0 to v1, h1 equals next of h0 from v1 to v2, and h2 from v2 back to v0, drawn just inside the triangle. Face B has vertices v1, v3, v2 with coral half-edges; h3 runs from v2 to v1 alongside h1 in the opposite direction and is labelled twin of h1; h4 runs from v1 to v3 and h5 from v3 to v2. Notes: each half-edge stores origin vertex, twin, next and face; the one-ring of a vertex is found by repeating h equals next of twin of h](assets/04-01-fig1.svg)

The shared edge $v_1v_2$ appears twice, as $h_1$ in face A and $h_3$ in face B. That duplication is the whole trick: from any face you can step across any edge to the neighbouring face in one hop, $\text{face}(\text{twin}(h))$.

## Worked examples

**Example 1 (mechanical): the memory budget of a million-vertex model.** A closed genus-0 triangle mesh with $V = 10^6$. Then $F = 2(V - 2) = 1{,}999{,}996$ and $E = 3(V - 2) = 2{,}999{,}994$.

| storage | contents | size |
|---|---|---|
| triangle soup | $F$ triangles $\times$ 3 vertices $\times$ 3 floats $\times$ 4 bytes | $72.0$ MB (68.7 MiB) |
| indexed face set | $V \times 12$ bytes positions $+$ $F \times 3 \times 4$ bytes indices | $12.0 + 24.0 = 36.0$ MB |
| half-edge (connectivity only) | $2E$ half-edges $\times$ 4 integers $\times$ 4 bytes | $96.0$ MB, plus positions |

Indexing halves the memory of a soup by storing each shared vertex once — every vertex is shared by about six faces. The half-edge structure costs almost three times the indexed set, and buys constant-time adjacency: it is the working format for editing and subdivision, while the indexed set is the format for rendering.

**Example 2 (why you'd care): which average is a vertex normal?** A vertex at the apex $\mathbf{v} = (0, 0, 1)$ of a lopsided pyramid with base corners $(2,0,0)$, $(0,1,0)$, $(-1,0,0)$, $(0,-1,0)$. The four face cross products $(\mathbf{b} - \mathbf{v}) \times (\mathbf{c} - \mathbf{v})$ for consecutive corners are

$$(1, 2, 2), \qquad (-1, 1, 1), \qquad (-1, -1, 1), \qquad (1, -2, 2),$$

with areas $1.5$, $0.87$, $0.87$, $1.5$.

- *Area-weighted:* the sum is $(0, 0, 6)$, so $\mathbf{n}_v = (0, 0, 1)$.
- *Uniform* (normalize each first): $\mathbf{n}_v = (-0.192,\ 0,\ 0.981)$, tilted $11.1°$.

Now **split the first face** into two coplanar triangles through the midpoint $(1, 0.5, 0)$ of its base edge. The surface hasn't changed. Area-weighted: the two halves contribute $(0.5, 1, 1)$ each, the sum is still $(0, 0, 6)$, and $\mathbf{n}_v$ is unchanged. Uniform: that face's unit normal is now counted twice, and $\mathbf{n}_v = (-0.048,\ 0.207,\ 0.977)$ — a $12.2°$ tilt in a *different* direction. Uniform weighting makes shading depend on how a flat region happened to be triangulated, which is why area weighting is the default.

## Watch out

- **You might think** $F \approx 2V$ holds for any triangle mesh — **but actually** it needs a **closed** mesh. An open grid of $n \times n$ vertices has $2(n-1)^2 \approx 2V$ faces too, but a mesh with many boundary edges or many handles departs from it ($\chi = 2 - 2g$ enters every count). Use the formula with the right $\chi$.
- **You might think** an implicit $f$ built from `min` and `max` is still a distance function — **but actually** only its sign is guaranteed. Inside a union, or outside an intersection, $\lvert f \rvert$ can underestimate the true distance, so an algorithm that steps along a ray by $f$ (sphere tracing) stays correct but takes more steps.
- **You might think** a mesh with consistent-looking triangles is manifold — **but actually** a single edge shared by three faces (a fin), or two cones touching at a vertex, breaks the half-edge structure. Mesh files from scanners and CAD exports are frequently non-manifold, and must be repaired before subdivision or simplification.

## One-liner

> Explicit surfaces list points and are easy to draw; implicit ones test points and are easy to combine; and a closed triangle mesh obeys $V - E + F = 2 - 2g$ with $3F = 2E$, so $F \approx 2V$, $E \approx 3V$, and valence $\approx 6$.

## Problems

**P1 (🟢)** (a) A closed genus-0 triangle mesh has 12 vertices (an icosahedron). Find $E$ and $F$.
(b) A closed triangle mesh of a torus has 400 vertices. Find $E$ and $F$.
(c) Someone reports a closed, orientable triangle mesh with $V = 10$ and $F = 18$. Show it cannot exist.

**P2 (🟡)** Two unit spheres have SDFs $f_1(\mathbf{p}) = \lVert\mathbf{p}\rVert - 1$ and $f_2(\mathbf{p}) = \lVert\mathbf{p} - (1.5, 0, 0)\rVert - 1$. For the points $(0,0,0)$, $(1.2, 0, 0)$ and $(2.5, 0, 0)$:
(a) evaluate $f_1$, $f_2$, and the union, intersection and difference ($A \setminus B$) functions;
(b) classify each point as inside or outside each of the three solids;
(c) The intersection function is $0.2$ at $(1.2, 0, 0)$ and $0.415$ at $(0.75, 1.2, 0)$. For each point, is that the true distance to the lens-shaped intersection solid? Justify.

**P3 (🔴)** In a half-edge mesh, a vertex $v$ has an outgoing half-edge $h_0$. The following table gives `twin` and `next` for the half-edges involved (`origin` is listed for checking).

| half-edge | origin | twin | next |
|---|---|---|---|
| $h_0$ | $v$ | $h_1$ | $h_2$ |
| $h_1$ | $a$ | $h_0$ | $h_7$ |
| $h_2$ | $a$ | $h_{11}$ | $h_3$ |
| $h_3$ | $b$ | $h_4$ | $h_0$ |
| $h_4$ | $v$ | $h_3$ | $h_5$ |
| $h_5$ | $b$ | $h_{12}$ | $h_6$ |
| $h_6$ | $c$ | $h_8$ | $h_4$ |
| $h_7$ | $v$ | $h_{10}$ | $h_9$ |
| $h_8$ | $v$ | $h_6$ | $h_{13}$ |

(a) Starting from $h_0$, apply $h \leftarrow \text{next}(\text{twin}(h))$ repeatedly and list the outgoing half-edges of $v$ until you return to $h_0$ or the table runs out. Then walk the other way with $h \leftarrow \text{twin}(\text{prev}(h))$, reading prev off the `next` column.
(b) What is the valence of $v$, as far as the table shows, and which neighbour vertices do the outgoing half-edges point to?
(c) Using $h \leftarrow \text{next}(\text{next}(h))$ instead, from $h_0$: what do you get, and why is that the wrong rule?

<details>
<summary>Solutions</summary>

**P1**

(a) $\chi = 2$: $E = 3(12 - 2) = \mathbf{30}$, $F = 2(12 - 2) = \mathbf{20}$. Check: $12 - 30 + 20 = 2$. ✓

(b) Torus $g = 1$, $\chi = 0$: $E = 3 \times 400 = \mathbf{1200}$, $F = 2 \times 400 = \mathbf{800}$.

(c) $3F = 2E$ gives $E = 27$, so $\chi = 10 - 27 + 18 = 1$. But a closed orientable surface has $\chi = 2 - 2g$, which is **even**. Contradiction: no such mesh. (A quicker tell: $F = 2(V - \chi)$ forces $F = 2(10 - \chi)$, which is $16$ for a sphere and $20$ for a torus — never $18$.)

**P2**

(a)

| point | $f_1$ | $f_2$ | union $\min$ | intersection $\max$ | difference $\max(f_1, -f_2)$ |
|---|---|---|---|---|---|
| $(0,0,0)$ | $-1$ | $0.5$ | $-1$ | $0.5$ | $-0.5$ |
| $(1.2,0,0)$ | $0.2$ | $-0.7$ | $-0.7$ | $0.2$ | $0.7$ |
| $(2.5,0,0)$ | $1.5$ | $0$ | $0$ | $1.5$ | $1.5$ |

(b) Negative is inside, zero on the surface.

- $(0,0,0)$: inside the union; **outside** the intersection; inside the difference (it is in sphere 1 and not in sphere 2).
- $(1.2,0,0)$: inside the union; outside the intersection; outside the difference (it is inside sphere 2, which was carved away).
- $(2.5,0,0)$: **on** the union's surface (the far side of sphere 2); outside the intersection and the difference.

(c) The lens runs from $x = 0.5$ to $x = 1$ along the axis, and its rim is the circle where the spheres meet: $x = 0.75$, radius $\sqrt{1 - 0.75^2} = 0.661$.

*At $(1.2, 0, 0)$:* **yes.** The nearest point of sphere 1's surface is $(1, 0, 0)$, which lies inside sphere 2 and so is on the lens; the distance is $0.2$, exactly $\max(f_1, f_2)$.

*At $(0.75, 1.2, 0)$:* **no.** The nearest points on each sphere's surface lie outside the other sphere, so they are not on the lens; the nearest lens point is the rim point $(0.75, 0.661, 0)$, at distance $1.2 - 0.661 = 0.539$. The function says $0.415$ — an underestimate by 23%. For points outside an intersection, $\max$ keeps the sign right but gives only a lower bound on distance.

**P3**

(a) $h_0 \to \text{twin} = h_1 \to \text{next} = h_7$. Check: $\text{origin}(h_7) = v$ ✓.

$h_7 \to \text{twin} = h_{10}$ — not in the table. The walk stops.

So going one way we found $h_0, h_7$. Walk the other direction too, using $h \leftarrow \text{twin}(\text{prev}(h))$, where prev is found from `next`: $h_3$ has next $h_0$, so $\text{prev}(h_0) = h_3$ and $\text{twin}(h_3) = h_4$ (origin $v$ ✓). $\text{prev}(h_4) = h_6$, $\text{twin}(h_6) = h_8$ (origin $v$ ✓). $\text{prev}(h_8)$ is not in the table.

Outgoing half-edges of $v$ found: $\mathbf{h_8,\ h_4,\ h_0,\ h_7}$ in rotational order.

(b) Valence **at least 4**. Destinations are the origins of each half-edge's next: $h_0 \to a$ (origin of $h_2$), $h_4 \to b$ (origin of $h_5$), $h_8$ and $h_7$ point to vertices whose `next` half-edges ($h_{13}$, $h_9$) are not listed, but $h_6 = \text{twin}(h_8)$ has origin $c$, so $h_8 \to c$. Neighbours: $\mathbf{a,\ b,\ c}$ and one more beyond the table.

(c) $\text{next}(h_0) = h_2$, $\text{next}(h_2) = h_3$: we get $h_3$, whose origin is $b$, not $v$. **Wrong rule**: `next` walks around a *face*, so two steps of it just go two thirds of the way around the triangle $h_0 h_2 h_3$. Rotating around a *vertex* requires crossing to the neighbouring face, which only `twin` does.

</details>

## Flashback

**From Lesson 3.6 (radiometry):** A courtyard floor sees a uniform sky of radiance $L$ only within $45°$ of the zenith; the floor is Lambertian with albedo $0.6$.
(a) Find the floor's irradiance in terms of $L$.
(b) Find the radiance the floor sends toward a camera.
(c) What fraction of the hemisphere's solid angle does the visible sky cover?

<details>
<summary>Solution</summary>

(a) $E = \pi L\sin^2 45° = \mathbf{0.5\,\pi L}$.

(b) $L_o = \dfrac{\rho}{\pi}E = \dfrac{0.6}{\pi}(0.5\pi L) = \mathbf{0.3\,L}$, in every direction.

(c) $2\pi(1 - \cos 45°) = 2\pi(0.293)$, i.e. **29.3%** of the hemisphere's $2\pi$ sr — but it delivers **50%** of the full-sky irradiance, because it is the part of the sky closest to the normal.

</details>

## Connections

- **Backward:** face winding and the outward normal are [2.1](02-01-rasterizing-lines-and-triangles.md)'s counter-clockwise convention and [`linalg-refresher` 1.4](../../linalg-refresher/lessons/01-04-cross-product-and-orientation.md)'s cross product; vertex normals feed [2.5](02-05-blinn-phong-shading-frequency-materials.md)'s smooth shading; implicit $f$ with sign tests is [3.3](03-03-ray-casting-and-intersection.md)'s sphere equation generalized.
- **Forward:** [4.2](04-02-bezier-curves-de-casteljau.md)–[4.4](04-04-bezier-surface-patches.md) build smooth explicit geometry from control points; [4.5](04-05-subdivision-surfaces.md)'s subdivision rules are local operations that need exactly the half-edge adjacency queries here; [4.7](04-07-skinning-and-deformation.md) deforms vertex positions without touching connectivity.
- **Sideways:** $V - E + F = 2 - 2g$ is the topological invariant of [`algebraic-topology`](../../algebraic-topology/syllabus.md), where it becomes the alternating sum of Betti numbers; the half-edge walk around a vertex is a combinatorial version of the rotation system that embeds a graph on a surface in [`graph-theory` 3.1](../../graph-theory/lessons/03-01-planar-euler-formula.md).
