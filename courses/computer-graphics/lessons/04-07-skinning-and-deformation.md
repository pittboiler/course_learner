# Computer Graphics · Lesson 4.7: Skinning & Deformation

> ⏱ ~15 min · Module 4: Geometric Modeling & Animation · Builds on: [4.6 (rotation interpolation)](04-06-keyframes-and-rotation-interpolation.md), [1.3 (frames)](01-03-3d-transforms-frames-and-normals.md), [`robotics` 1.6 (forward kinematics)](../../robotics/lessons/01-06-denavit-hartenberg-forward-kinematics.md), [3.1 (vertex shaders)](03-01-the-programmable-gpu-pipeline.md) · Unlocks: the end of the course

## Why this matters

A character mesh has tens of thousands of vertices, and an animator cannot keyframe them one by one. Instead they pose a **skeleton** of a few dozen bones, and every vertex follows the bones near it. That binding of mesh to skeleton — **skinning** — runs in the vertex shader of every animated character in every game, every frame.

The standard method, **linear blend skinning**, is a weighted average of a few matrices per vertex: simple, fast, parallel. It is also the matrix blend that [4.6](04-06-keyframes-and-rotation-interpolation.md) warned is not a rotation, and the consequences are visible: elbows that pinch when bent and wrists that collapse to a stick when twisted. Understanding exactly why — and how much — is the difference between fighting the artifact and designing around it.

## The idea

**Bones carry frames; vertices ride along.** Each bone is a coordinate frame ([1.3](01-03-3d-transforms-frames-and-normals.md)) placed relative to its parent: the hand's frame is given relative to the forearm's, the forearm's relative to the upper arm's. Posing means changing those relative transforms; the world position of each bone comes from multiplying down the chain — forward kinematics.

**Record where the skin was, relative to each bone.** In the **bind pose** (the neutral pose the mesh was modelled in), express each vertex in the bone's frame. In a new pose, carry that local position back out with the bone's new frame. A vertex attached rigidly to one bone moves exactly with it.

**Near joints, average.** A vertex at the elbow belongs partly to the upper arm and partly to the forearm. Linear blend skinning computes where each bone *would* put it and takes a weighted average of those positions. When the two bones agree, nothing goes wrong. When they disagree a lot — a sharp bend or a twist — the average of two points on a circle lies *inside* the circle, and the skin caves in.

## The formal version

**Skeleton and forward kinematics.** Joint $j$ has a parent $p(j)$ and a local transform $L_j$ (rotation, plus the fixed offset from its parent). Its global transform is

$$G_j = G_{p(j)}\,L_j, \qquad G_{\text{root}} = L_{\text{root}}.$$

In words: multiply from the root down; each joint's frame is its parent's frame followed by its own local motion. The Denavit–Hartenberg treatment of chains is [`robotics` 1.6](../../robotics/lessons/01-06-denavit-hartenberg-forward-kinematics.md)'s. *(card: [Skeleton forward kinematics](../reference.md#skeleton-forward-kinematics))*

**Bind pose and skinning matrices.** Let $B_j$ be joint $j$'s global transform in the bind pose. A bind-pose vertex $\mathbf{v}$ has bone-local coordinates $B_j^{-1}\mathbf{v}$; in the current pose that local point is at $G_j B_j^{-1}\mathbf{v}$. The **skinning matrix** of bone $j$ is

$$K_j = G_j\,B_j^{-1}.$$

$K_j = I$ in the bind pose. *(card: [Skinning matrix](../reference.md#skinning-matrix))*

**Linear blend skinning (LBS).** Each vertex stores up to four bone indices and weights $w_j \ge 0$ with $\sum_j w_j = 1$. Its posed position is

$$\mathbf{v}' = \Big(\sum_j w_j\,K_j\Big)\mathbf{v} = \sum_j w_j\,(K_j\mathbf{v}).$$

In words: blend the matrices (equivalently, blend where each bone would put the vertex). Normals are usually transformed by the same blended matrix and renormalized, an approximation. Cost: at most four matrix–vector products per vertex, done in the vertex shader ([3.1](03-01-the-programmable-gpu-pipeline.md)). *(card: [Linear blend skinning](../reference.md#linear-blend-skinning))*

**The collapse.** Two bones sharing a joint at $\mathbf{c}$, with relative rotation $R$ by angle $\theta$ about an axis through $\mathbf{c}$. For a vertex at offset $\mathbf{r}$ from $\mathbf{c}$, perpendicular to the axis, with weights $\tfrac12, \tfrac12$:

$$\mathbf{v}' - \mathbf{c} = \tfrac12(\mathbf{r} + R\mathbf{r}), \qquad \lVert\mathbf{v}' - \mathbf{c}\rVert = \lVert\mathbf{r}\rVert\cos\frac{\theta}{2}.$$

In words: the blended point is the midpoint of a chord, so its distance from the joint shrinks by $\cos(\theta/2)$ — $0.707$ at $90°$, $0.5$ at $120°$, and **zero** at $180°$. A bend pinches the elbow; a $180°$ twist squeezes the limb to its axis: the **candy-wrapper** artifact. *(card: [Candy-wrapper artifact](../reference.md#candy-wrapper-artifact))*

**Remedies.** Spread twist over several bones (each carries a fraction of $\theta$, so each blend sees a small angle); add corrective shapes sculpted for extreme poses; or blend **rotations** instead of matrices — **dual quaternion skinning** blends unit dual quaternions (rotation plus translation) and normalizes, so the result is always a rigid transform and the radius is preserved, at the cost of a slight bulge on bends.

## Picture

![Left: an arm in bind pose, drawn as two grey skin lines either side of a straight skeleton with a blue upper bone and a coral lower bone meeting at the elbow; the note says weights blend from upper to lower bone over the elbow. Right: the same arm posed with the lower bone bent 90 degrees upward. The coral skin lines follow the bones, but at the inside of the elbow the skin cuts the corner, and a grey circle of the true skin radius around the joint shows the inner skin point marked at 0.25 from the joint instead of 0.35, a factor of 0.707](assets/04-07-fig1.svg)

The outside of the bend rounds off gently; the inside cuts across the circle. That lost volume is not a bug in the weights — every weighting that blends two differently-rotated positions linearly produces it.

## Worked examples

**Example 1 (mechanical): skin a vertex at the elbow.** Upper arm from the shoulder $(0,0,0)$ to the elbow $(2,0,0)$; forearm from the elbow onward; bind pose straight along $x$. The pose bends the elbow $90°$ about $z$.

*Skinning matrices.* The upper arm doesn't move: $K_{\text{up}} = I$. The forearm rotates about the elbow: $K_{\text{low}} = T(2,0,0)\,R_z(90°)\,T(-2,0,0)$ ([1.2](01-02-2d-transforms-homogeneous-coordinates.md)'s rotation about a pivot).

*A vertex* on the inside of the elbow, $\mathbf{v} = (2,\ 0.2,\ 0)$, with weights $\tfrac12, \tfrac12$.

- Upper bone alone: $(2,\ 0.2,\ 0)$.
- Lower bone alone: offset from the elbow $(0, 0.2, 0)$, rotated $90°$ to $(-0.2, 0, 0)$, so $(1.8,\ 0,\ 0)$.
- Blend: $\tfrac12\big((2, 0.2, 0) + (1.8, 0, 0)\big) = (1.9,\ 0.1,\ 0)$.

Distance from the elbow: $\lVert(-0.1, 0.1, 0)\rVert = \mathbf{0.141}$, against the skin's true $0.2$ — the factor $\cos 45° = 0.707$. With weights $0.7$ and $0.3$ the vertex lands at $(1.94,\ 0.14,\ 0)$, distance $0.152$: shifting weight doesn't restore the radius, it only moves where along the chord the vertex sits.

**Example 2 (why you'd care): the candy wrapper.** Now twist the forearm $180°$ about its own axis (the $x$-axis through the elbow) — turning a doorknob. A forearm vertex at $\mathbf{v} = (3,\ 0.2,\ 0)$ halfway between elbow and wrist with weights $\tfrac12$ (upper) and $\tfrac12$ (lower):

- Upper bone: $(3,\ 0.2,\ 0)$.
- Lower bone: $R_x(180°)$ about the axis sends $(0.2, 0) \to (-0.2, 0)$ in $(y, z)$: $(3,\ -0.2,\ 0)$.
- Blend: $(3,\ 0,\ 0)$.

Radius $\mathbf{0}$: the forearm's cross-section has collapsed onto the bone. Every vertex with even weights does the same, so the mesh pinches to a point like a twisted sweet wrapper. The matrix $\tfrac12(I + R_x(180°))$ has determinant 0 — [4.6](04-06-keyframes-and-rotation-interpolation.md) Problem 3's degenerate blend, now visible on a character.

Rigs avoid it by adding **twist bones** along the forearm: with three segments each twisting $60°$ relative to its neighbour, every blend sees at most $60°$ and keeps $\cos 30° = 0.866$ of the radius. Dual quaternion skinning keeps all of it.

## Watch out

- **You might think** the skinning matrix is the bone's global transform $G_j$ — **but actually** it is $G_j B_j^{-1}$. Using $G_j$ alone applies the bone's bind transform a second time, and in the bind pose every vertex flies off by the bone's own offset. The inverse bind matrix is what makes the rest pose a no-op.
- **You might think** normalizing weights prevents volume loss — **but actually** weights summing to 1 only make the blend an affine combination; the collapse comes from averaging *rotated positions*, and the factor $\cos(\theta/2)$ appears for any pair of weights near the middle.
- **You might think** you can fix the candy wrapper by blending quaternions with plain slerp per vertex — **but actually** a joint's motion is a rotation *and* a translation about a pivot, which a rotation quaternion alone can't blend correctly for vertices away from the pivot. Dual quaternions carry both, which is why that is the practical fix.

## One-liner

> A vertex's posed position is $\sum_j w_j G_j B_j^{-1}\mathbf{v}$ — cheap and parallel, but blending positions rotated by $\theta$ shrinks the skin by $\cos(\theta/2)$, pinching elbows and collapsing $180°$ twists to a point.

## Problems

**P1 (🟢)** A three-joint chain: $L_1 = R_z(30°)$ at the root (origin); $L_2 = T(2,0,0)\,R_z(45°)$; $L_3 = T(1.5,0,0)$ (the end joint, no rotation). In the bind pose the chain lies straight along $x$ with joints at $x = 0, 2, 3.5$.
(a) Compute the global positions of joints 2 and 3.
(b) What direction (angle from $x$) does the last segment point?
(c) A vertex rigidly bound to joint 3 sits at $(3.5,\ 0.1,\ 0)$ in the bind pose. Where is it now?

**P2 (🟡)** Using Example 1's arm (elbow at $(2,0,0)$, bent $90°$ about $z$):
(a) Skin the vertex $(2,\ -0.2,\ 0)$ on the **outside** of the elbow with weights $\tfrac12, \tfrac12$. How far is it from the elbow?
(b) Skin $(2,\ 0.2,\ 0)$ with weights $0.3$ (upper) and $0.7$ (lower). Distance?
(c) Where would a rigid rotation about the elbow by $45°$ — the "ideal halfway" — have put $(2,\ 0.2,\ 0)$? Compare with Example 1's blended position.

**P3 (🔴)** (a) Derive the radius factor $\cos(\theta/2)$ for a vertex at distance $r$ from a joint axis, weights $\tfrac12, \tfrac12$, relative rotation $\theta$.
(b) At what twist angle does the skin shrink to half its radius?
(c) A rig must support a $150°$ forearm twist with no more than 10% radius loss at any blend. What is the smallest number of equal twist segments that achieves this?
(d) With weights $w$ and $1 - w$ instead, find the radius factor as a function of $w$ and $\theta$, and show it is smallest at $w = \tfrac12$.

<details>
<summary>Solutions</summary>

**P1**

(a) $G_1 = R_z(30°)$, $G_2 = G_1L_2 = R_z(30°)\,T(2,0,0)\,R_z(45°)$, $G_3 = G_2\,T(1.5,0,0)$.

Joint 2 is at $G_2(0,0,0) = R_z(30°)(2, 0, 0) = (2\cos30°,\ 2\sin30°,\ 0) = \mathbf{(1.732,\ 1.0,\ 0)}$.

Joint 3 adds $1.5$ along the direction $30° + 45° = 75°$: $(1.732 + 1.5\cos75°,\ 1.0 + 1.5\sin75°,\ 0) = (1.732 + 0.388,\ 1.0 + 1.449,\ 0) = \mathbf{(2.120,\ 2.449,\ 0)}$.

(b) Rotations accumulate down the chain: $\mathbf{75°}$ from $x$.

(c) Bind transform $B_3 = T(3.5, 0, 0)$, so the vertex's local offset is $(0, 0.1, 0)$. Rotated by $75°$: $(-0.1\sin75°,\ 0.1\cos75°,\ 0) = (-0.0966,\ 0.0259,\ 0)$. Added to joint 3: $\mathbf{(2.024,\ 2.475,\ 0)}$.

**P2**

(a) Lower bone: offset $(0, -0.2, 0)$ rotated $90°$ is $(0.2, 0, 0)$, so $(2.2, 0, 0)$. Blend: $\tfrac12\big((2,-0.2,0) + (2.2,0,0)\big) = (2.1,\ -0.1,\ 0)$, distance $\lVert(0.1, -0.1)\rVert = \mathbf{0.141}$. The outside loses exactly as much radius as the inside; it just looks less dramatic because the outer contour has room to round off.

(b) $0.3(2, 0.2, 0) + 0.7(1.8, 0, 0) = (1.86,\ 0.06,\ 0)$, distance $\lVert(-0.14, 0.06)\rVert = \mathbf{0.152}$.

(c) Rotating the offset $(0, 0.2)$ by $45°$ gives $(-0.141,\ 0.141)$, so $(1.859,\ 0.141,\ 0)$, at distance $0.2$. The LBS position $(1.9, 0.1)$ lies on the same $45°$ ray from the elbow ($(-0.1, 0.1)$ points the same way) but at $0.141$ instead of $0.2$: **right direction, wrong radius** — the chord midpoint instead of the arc midpoint.

**P3**

(a) Put the joint at the origin with $\mathbf{r}$ perpendicular to the axis, $\lVert\mathbf{r}\rVert = r$. $\mathbf{r}$ and $R\mathbf{r}$ are two points on a circle of radius $r$ separated by angle $\theta$. Their average $\tfrac12(\mathbf{r} + R\mathbf{r})$ is the chord's midpoint. The chord subtends $\theta$ at the centre, so its midpoint lies on the bisecting radius at distance $r\cos(\theta/2)$. (Algebraically: $\lVert\mathbf{r} + R\mathbf{r}\rVert^2 = 2r^2 + 2r^2\cos\theta = 4r^2\cos^2(\theta/2)$.)

(b) $\cos(\theta/2) = \tfrac12 \Rightarrow \theta = \mathbf{120°}$.

(c) With $k$ segments, each blend sees $150°/k$. Need $\cos(75°/k) \ge 0.9$, i.e. $75°/k \le 25.84°$, so $k \ge 2.90$: **3 segments** ($50°$ each, factor $\cos 25° = 0.906$). Two segments give $\cos 37.5° = 0.793$, too much loss.

(d) $\lVert w\mathbf{r} + (1-w)R\mathbf{r}\rVert^2 = r^2\big(w^2 + (1-w)^2 + 2w(1-w)\cos\theta\big) = r^2\big(1 - 2w(1-w)(1 - \cos\theta)\big)$.

Radius factor $\sqrt{1 - 2w(1-w)(1 - \cos\theta)}$. Since $w(1-w)$ is largest at $w = \tfrac12$ (where it is $\tfrac14$) and $1 - \cos\theta \ge 0$, the factor is smallest there, giving $\sqrt{1 - \tfrac12(1 - \cos\theta)} = \sqrt{\cos^2(\theta/2)} = \cos(\theta/2)$. ✓ Pure weights ($w = 0$ or $1$) lose nothing but give a rigid crease at the boundary between regions.

</details>

## Flashback

**From Lesson 4.5 (subdivision):** (a) An octahedron has $V = 6$, $E = 12$, $F = 8$ triangles. Give $V$, $E$, $F$ after one Catmull–Clark step, and compare with a cube after one step.
(b) On a flat quad grid, a single vertex is raised to height 2. What is its height after one Catmull–Clark step?
(c) A 500-quad character cage is subdivided three levels. How many quads?

<details>
<summary>Solution</summary>

(a) $V' = 6 + 12 + 8 = \mathbf{26}$, $F' = 2E = \mathbf{24}$, $E' = 4E = \mathbf{48}$ — **the same counts as the cube**. That is no coincidence: the octahedron and the cube are dual polyhedra (swap $V$ and $F$), and after one step both become the same combinatorial quad mesh. The octahedron's 6 original vertices have valence 4 (regular) while its 8 face points have valence 3 — the mirror image of the cube.

(b) Valence 4: $\mathbf{R}_z = \tfrac12(2 + 0) = 1$, $\mathbf{Q}_z = \tfrac14(2) = 0.5$, and

$$S'_z = \frac{0.5 + 2(1) + 1(2)}{4} = \frac{4.5}{4} = \mathbf{1.125},$$

the same $\tfrac{9}{16}$ factor as [4.5](04-05-subdivision-surfaces.md)'s Example 2.

(c) $500 \times 4^3 = \mathbf{32{,}000}$ quads.

</details>

## Connections

- **Backward:** $G_j$ is a product of [1.3](01-03-3d-transforms-frames-and-normals.md)'s frames along a chain ([`robotics` 1.6](../../robotics/lessons/01-06-denavit-hartenberg-forward-kinematics.md)); each joint's rotation is keyframed with [4.6](04-06-keyframes-and-rotation-interpolation.md)'s slerp; the collapse is [4.6](04-06-keyframes-and-rotation-interpolation.md)'s matrix-blend shrinkage; the per-vertex blend runs in [3.1](03-01-the-programmable-gpu-pipeline.md)'s vertex shader, before [1.5](01-05-projection-orthographic-and-perspective.md)'s projection.
- **Forward:** skinned coarse cages are subdivided after deformation ([4.5](04-05-subdivision-surfaces.md)); the posed triangles are rasterized ([2.1](02-01-rasterizing-lines-and-triangles.md)) or ray traced through a BVH that must be refitted every frame ([3.5](03-05-acceleration-structures.md)).
- **Sideways:** choosing joint angles so a hand reaches a target is inverse kinematics, owned by [`robotics` 2.1](../../robotics/lessons/02-01-inverse-kinematics-analytic.md)–[2.2](../../robotics/lessons/02-02-inverse-kinematics-numerical.md); the midpoint-of-a-chord shrinkage is the same geometry that makes the Euclidean average of points on a sphere fall inside it, the reason averaging on curved spaces needs the geodesic (Fréchet) mean of [`differential-geometry` 4.3](../../differential-geometry/lessons/04-03-geodesics.md).

## Closing the course

The course followed a scene from description to pixels twice. **Module 1** built the chain of matrices that carries a vertex from its model into normalized device coordinates, with one extra coordinate doing triple duty: translation, the point/vector distinction, and perspective. **Module 2** turned triangles into pixels — edge functions, clipping, depth, perspective-correct interpolation — and gave them colour with local lighting and filtered textures. **Module 3** put that pipeline on a GPU, gave it shadows, then replaced it with rays: intersection, recursion, hierarchies, and finally the rendering equation and the Monte Carlo estimator that solves it. **Module 4** supplied the geometry — meshes, Bézier curves and patches, subdivision — and made it move.

Three ideas recur more than any others. **Affine combinations**: barycentric coordinates, bilinear filtering, de Casteljau, subdivision rules and skinning are all weighted averages with weights summing to one, and they all fail in the same way when the space being averaged is not flat (perspective in 2.3, rotations in 4.6 and 4.7). **Sampling**: pixels, texels, shadow-map texels and Monte Carlo paths are all samples of a continuous function, with aliasing or noise as the price. **Cost scaling**: every major design choice — rasterize or trace, BVH split, supersampling, subdivision level — was settled by counting operations as a function of scene size and resolution.

Natural next steps: [`robotics`](../../robotics/syllabus.md) for kinematics, inverse kinematics and dynamics of articulated figures; [`differential-geometry`](../../differential-geometry/syllabus.md) for curvature and the geometry of surfaces behind modeling and geometry processing; [`numerical-analysis`](../../numerical-analysis/syllabus.md) for the integrators behind physical simulation of cloth, fluids and rigid bodies; and [`deep-learning`](../../deep-learning/syllabus.md), whose denoisers and neural scene representations are now part of how path-traced images are produced.
