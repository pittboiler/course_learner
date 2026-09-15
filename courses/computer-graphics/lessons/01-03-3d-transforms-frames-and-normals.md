# Computer Graphics · Lesson 1.3: 3D Transforms, Frames & Normals

> ⏱ ~15 min · Module 1: Transformations & Viewing · Builds on: [1.2 (2D transforms and homogeneous coordinates)](01-02-2d-transforms-homogeneous-coordinates.md), [`robotics` 1.2 (rotation matrices)](../../robotics/lessons/01-02-rotation-matrices.md) · Unlocks: [1.4 (the camera)](01-04-the-camera-and-view-transform.md), [2.4 (lighting)](02-04-lighting-diffuse-specular-phong.md)

## Why this matters

A scene is a tree of coordinate systems: a teacup is modelled around its own centre, placed on a saucer, which sits on a table, which is in a room, which the camera is looking at. Rendering it means converting between those systems constantly — and every conversion is one $4 \times 4$ matrix.

That part is 1.2 with one more row. The genuinely new thing in 3D graphics is that **not everything attached to a surface transforms the same way**. Positions and tangent directions follow the matrix. Surface normals — the vectors every lighting calculation in [Module 2](02-04-lighting-diffuse-specular-phong.md) depends on — do not, and using the wrong matrix for them is one of the classic lighting bugs. This lesson fixes it once.

## The idea

**A frame is a ruler you can carry around.** A coordinate frame is an origin plus three perpendicular unit axes. "The cup is at $(1, 0, 2)$ in table coordinates" means: start at the table's origin, go 1 unit along the table's first axis, 0 along its second, 2 along its third. To get world coordinates, do exactly that walk using the table's axes *as written in world coordinates*. That walk is a matrix whose columns are the axes and the origin.

**Normals are about perpendicularity, not direction.** Squash a ball flat. Its surface tilts — a point that faced up-and-sideways now faces mostly up. But if you apply the squash to the normal arrow itself, the arrow gets squashed *sideways*, the opposite of what the surface did. The matrix correctly moves anything lying **along** the surface; a normal is defined by being **perpendicular** to the surface, and perpendicularity is preserved only by a different matrix.

## The formal version

**3D homogeneous transforms.** Points are $(x, y, z, 1)$, vectors $(x, y, z, 0)$, and an affine map is

$$M = \begin{pmatrix} A & \mathbf{t} \\ \mathbf{0}^T & 1 \end{pmatrix}, \qquad A \in \mathbb{R}^{3\times3},\ \mathbf{t} \in \mathbb{R}^3.$$

The rotations about the coordinate axes, counter-clockwise when looking down the axis toward the origin:

$$R_x(\theta) = \begin{pmatrix} 1 & 0 & 0 \\ 0 & c & -s \\ 0 & s & c \end{pmatrix}, \quad R_y(\theta) = \begin{pmatrix} c & 0 & s \\ 0 & 1 & 0 \\ -s & 0 & c \end{pmatrix}, \quad R_z(\theta) = \begin{pmatrix} c & -s & 0 \\ s & c & 0 \\ 0 & 0 & 1 \end{pmatrix}$$

with $c = \cos\theta$, $s = \sin\theta$, each padded to $4 \times 4$. In words: each fixes its own axis and rotates the other two. Note the sign pattern of $R_y$ is flipped relative to the other two — it comes from the cyclic order $z \to x$. Their properties (orthonormal, $R^{-1} = R^T$, $\det R = 1$) and other parameterizations are owned by [`robotics` 1.2](../../robotics/lessons/01-02-rotation-matrices.md). *(card: [Axis rotations](../reference.md#axis-rotations))*

**Frames.** A frame is an origin $\mathbf{e}$ and a right-handed orthonormal basis $\mathbf{u}, \mathbf{v}, \mathbf{w}$ (so $\mathbf{u} \times \mathbf{v} = \mathbf{w}$). A point with frame coordinates $(a, b, c)$ is the world point $\mathbf{e} + a\mathbf{u} + b\mathbf{v} + c\mathbf{w}$, which is

$$\mathbf{p}_{\text{world}} = F\,\mathbf{p}_{\text{frame}}, \qquad F = \begin{pmatrix} \mathbf{u} & \mathbf{v} & \mathbf{w} & \mathbf{e} \\ 0 & 0 & 0 & 1 \end{pmatrix}.$$

In words: the **frame-to-canonical** matrix has the frame's axes and origin, written in world coordinates, as its columns. Going the other way needs $F^{-1}$, and because the $3 \times 3$ block $R = (\mathbf{u}\ \mathbf{v}\ \mathbf{w})$ is orthonormal it has a closed form:

$$F^{-1} = \begin{pmatrix} R^T & -R^T\mathbf{e} \\ \mathbf{0}^T & 1 \end{pmatrix}, \qquad \text{i.e. } \mathbf{p}_{\text{frame}} = \big(\mathbf{u}\cdot(\mathbf{p} - \mathbf{e}),\ \mathbf{v}\cdot(\mathbf{p} - \mathbf{e}),\ \mathbf{w}\cdot(\mathbf{p} - \mathbf{e})\big).$$

In words: to read a world point in frame coordinates, measure its offset from the frame's origin along each frame axis with a dot product. The camera in [1.4](01-04-the-camera-and-view-transform.md) is exactly this inverse. *(card: [Frame-to-canonical matrix](../reference.md#frame-to-canonical-matrix))*

**Transforming normals.** Let $M$ have linear block $A$. A **tangent** vector $\mathbf{t}$ — the difference of two nearby surface points — transforms as $\mathbf{t}' = A\mathbf{t}$. A **normal** $\mathbf{n}$ is defined by $\mathbf{n}^T\mathbf{t} = 0$ for every tangent, and we need $\mathbf{n}'^T\mathbf{t}' = 0$ afterwards. Try $\mathbf{n}' = N\mathbf{n}$:

$$\mathbf{n}'^T\mathbf{t}' = \mathbf{n}^T N^T A\,\mathbf{t}.$$

This is zero for every $\mathbf{t}$ with $\mathbf{n}^T\mathbf{t} = 0$ if $N^T A = I$, that is,

$$\boxed{\ N = (A^{-1})^T\ }$$

— the **inverse transpose** of the linear block, followed by renormalization. In words: normals transform by the inverse transpose because that is the matrix that keeps them perpendicular to whatever $A$ did to the surface. *(card: [Normal transformation](../reference.md#normal-transformation))*

Three consequences worth having ready:

- **Rotations:** $(R^{-1})^T = (R^T)^T = R$. Normals transform like everything else. So do they under any **rigid** transform.
- **Uniform scale** $sI$: $N = \tfrac1s I$, a pure rescale. After renormalizing, the direction is unchanged — so a normal bug is invisible until a non-uniform scale appears.
- **Translation** never matters: normals are vectors, and only $A$ enters.

## Picture

![Left: a grey unit circle, the z equals zero slice of a unit sphere, with a blue normal arrow n at the point 0.6, 0.8 and a dashed grey tangent line. An arrow labelled M leads right to a flat grey ellipse, the sphere squashed by S of 1, 0.25, 1. At the image point a dashed tangent line runs almost horizontally. A coral arrow labelled M n, wrong, points steeply to the right, nearly along the tangent. A blue arrow labelled inverse transpose of M times n points nearly straight up, perpendicular to the tangent. A note says the wrong normal is 61 degrees off](assets/01-03-fig1.svg)

The dashed tangent line on the right is exactly $M$ applied to the tangent on the left — tangents are fine. The coral arrow is $M$ applied to the normal: it has been squashed toward the horizontal, so it now lies close to the surface instead of across it.

## Worked examples

**Example 1 (mechanical): into and out of a frame.** A table's frame has origin $\mathbf{e} = (2, 1, 3)$ and axes $\mathbf{u} = (0, 0, -1)$, $\mathbf{v} = (0, 1, 0)$, $\mathbf{w} = (1, 0, 0)$.

*Right-handed?* $\mathbf{u} \times \mathbf{v} = (0\cdot0 - (-1)\cdot1,\ (-1)\cdot0 - 0\cdot0,\ 0\cdot1 - 0\cdot0) = (1, 0, 0) = \mathbf{w}$. ✓

A cup sits at table coordinates $(1, 0, 2)$. Its world position is

$$\mathbf{e} + 1\,\mathbf{u} + 0\,\mathbf{v} + 2\,\mathbf{w} = (2,1,3) + (0,0,-1) + (2,0,0) = (4, 1, 2),$$

which is $F(1, 0, 2, 1)$ with $F = \begin{pmatrix} 0 & 0 & 1 & 2 \\ 0 & 1 & 0 & 1 \\ -1 & 0 & 0 & 3 \\ 0 & 0 & 0 & 1 \end{pmatrix}$.

*Back again.* The offset from the origin is $(4,1,2) - (2,1,3) = (2, 0, -1)$. Dot with each axis:

$$\mathbf{u}\cdot(2,0,-1) = 1, \qquad \mathbf{v}\cdot(2,0,-1) = 0, \qquad \mathbf{w}\cdot(2,0,-1) = 2.$$

So we recover $(1, 0, 2)$, with no matrix inversion performed.

**Example 2 (why you'd care): a squashed sphere lit wrong.** A unit sphere is scaled by $S(1, 0.25, 1)$ to make a flattened ellipsoid (a lozenge, a cushion). At the sphere point $\mathbf{p} = (0.6, 0.8, 0)$ the normal is $\mathbf{n} = \mathbf{p}$. The point moves to $A\mathbf{p} = (0.6, 0.2, 0)$.

*Wrong:* $A\mathbf{n} = (0.6, 0.2, 0)$, normalized $(0.949, 0.316, 0)$.

*Right:* $A^{-1} = \text{diag}(1, 4, 1)$, which is symmetric, so $(A^{-1})^T\mathbf{n} = (0.6, 3.2, 0)$, normalized $(0.184, 0.983, 0)$.

*Check it independently.* The ellipsoid is $x^2 + 16y^2 + z^2 = 1$, whose gradient $(2x, 32y, 2z)$ is normal to it. At $(0.6, 0.2, 0)$ that is $(1.2, 6.4, 0)$, normalized $(0.184, 0.983, 0)$. ✓

The two normals are $\arccos(0.949 \cdot 0.184 + 0.316 \cdot 0.983) = \arccos(0.485) \approx 61°$ apart. Light the point from directly above, $\mathbf{l} = (0, 1, 0)$, and the diffuse brightness of [2.4](02-04-lighting-diffuse-specular-phong.md) is proportional to $\mathbf{n}\cdot\mathbf{l}$: **$0.316$ with the wrong normal, $0.983$ with the right one**. The flat top of the cushion renders at a third of its true brightness — and on a uniformly scaled sphere the bug would never have shown.

## Watch out

- **You might think** transforming normals by the model matrix is fine because it works in testing — **but actually** it works for rotations, translations and *uniform* scales, which is most test scenes. It fails silently the first time an artist stretches a model. Use $(A^{-1})^T$ always; engines compute it once per object and call it the **normal matrix**.
- **You might think** the inverse transpose gives a unit normal — **but actually** it rescales lengths (by $\tfrac1s$ under uniform scale, and differently per direction otherwise). Renormalize after transforming, or every dot product in the lighting code is off by a factor.
- **You might think** the frame inverse needs a general $4 \times 4$ inversion — **but actually** when the axes are orthonormal it is $R^T$ plus a dot-product translation. Use the closed form; it is faster and does not accumulate numerical error. (If the axes are *not* orthonormal — a frame with scale in it — the closed form is wrong, which is precisely when you do need the general inverse.)

## One-liner

> A frame matrix has the axes and origin as its columns and inverts with a transpose; tangents follow $A$, but normals follow $(A^{-1})^T$ — renormalize after.

## Problems

**P1 (🟢)** Let $M = T(0, 0, -5)\,R_y(90°)\,S(2, 2, 2)$.
(a) Write $M$ as a single $4 \times 4$ matrix.
(b) Apply it to the point $(1, 0, 0)$ and to the vector $(1, 0, 0)$.

**P2 (🟡)** A frame has origin $\mathbf{e} = (1, 2, 3)$ and axes $\mathbf{u} = (0, 1, 0)$, $\mathbf{v} = (0, 0, 1)$, $\mathbf{w} = (1, 0, 0)$.
(a) Check that the frame is right-handed.
(b) Find the world coordinates of the frame point $(2, -1, 4)$.
(c) Find the frame coordinates of the world point $(5, 4, 3)$.

**P3 (🔴)** The plane $x + y + z = 1$ is transformed by the linear map $A = \text{diag}(3, 1, 1)$.
(a) Find the unit normal of the transformed plane using the inverse transpose.
(b) Verify it a second way: transform the two tangent vectors $(1, -1, 0)$ and $(0, 1, -1)$ of the original plane by $A$ and take their cross product.
(c) Find the angle between your answer and the normal you would get by (wrongly) applying $A$ to $(1, 1, 1)$.

<details>
<summary>Solutions</summary>

**P1**

(a) Work right to left. $S(2,2,2)$ scales; $R_y(90°)$ has $c = 0$, $s = 1$, so its $3\times3$ block is $\begin{pmatrix} 0 & 0 & 1 \\ 0 & 1 & 0 \\ -1 & 0 & 0 \end{pmatrix}$; the translation goes last.

$$M = \begin{pmatrix} 0 & 0 & 2 & 0 \\ 0 & 2 & 0 & 0 \\ -2 & 0 & 0 & -5 \\ 0 & 0 & 0 & 1 \end{pmatrix}.$$

The linear block is $R_y(90°)$ times 2, and the translation column is untouched because the translation was applied last.

(b) Point $(1,0,0,1)$: the first column plus the last column, $(0, 0, -2) + (0, 0, -5) = \mathbf{(0,\ 0,\ -7)}$.

Vector $(1,0,0,0)$: the first column only, $\mathbf{(0,\ 0,\ -2)}$.

Sanity check by steps: scale sends $(1,0,0)$ to $(2,0,0)$; $R_y(90°)$ sends $+x$ to $-z$, giving $(0,0,-2)$; the translation moves the point to $(0,0,-7)$ and leaves the vector alone.

**P2**

(a) $\mathbf{u} \times \mathbf{v} = (0,1,0) \times (0,0,1) = (1\cdot1 - 0\cdot0,\ 0\cdot0 - 0\cdot1,\ 0\cdot0 - 1\cdot0) = (1, 0, 0) = \mathbf{w}$. ✓ Right-handed.

(b) $\mathbf{e} + 2\mathbf{u} - \mathbf{v} + 4\mathbf{w} = (1,2,3) + (0,2,0) + (0,0,-1) + (4,0,0) = \mathbf{(5,\ 4,\ 2)}$.

(c) Offset $(5,4,3) - (1,2,3) = (4, 2, 0)$. Dot with the axes:

$$\mathbf{u}\cdot(4,2,0) = 2,\qquad \mathbf{v}\cdot(4,2,0) = 0,\qquad \mathbf{w}\cdot(4,2,0) = 4.$$

Frame coordinates $\mathbf{(2,\ 0,\ 4)}$. Note this is *not* the answer to (b) — the points differ in $z$ — so there is no reason for the two to be related.

**P3**

(a) The original normal is $\mathbf{n} = (1,1,1)$. $A^{-1} = \text{diag}(\tfrac13, 1, 1)$ is diagonal, so $(A^{-1})^T = A^{-1}$ and

$$(A^{-1})^T\mathbf{n} = \left(\tfrac13,\ 1,\ 1\right).$$

Its length is $\sqrt{\tfrac19 + 2} = \sqrt{19}/3$, so the unit normal is $\dfrac{(1, 3, 3)}{\sqrt{19}} \approx \mathbf{(0.229,\ 0.688,\ 0.688)}$.

Direct check: the image of the plane is $\{A\mathbf{x}\}$, i.e. points $(3x, y, z)$ with $x + y + z = 1$; renaming $X = 3x$ gives $X/3 + y + z = 1$, whose normal is $(\tfrac13, 1, 1)$. ✓

(b) $A(1,-1,0) = (3,-1,0)$ and $A(0,1,-1) = (0,1,-1)$.

$$(3,-1,0) \times (0,1,-1) = \big((-1)(-1) - 0\cdot1,\ 0\cdot0 - 3\cdot(-1),\ 3\cdot1 - (-1)\cdot0\big) = (1, 3, 3).$$

Same direction as (a). ✓ (The cross product of transformed tangents is $\det A\,(A^{-1})^T\mathbf{n}$ in general — here $3 \cdot (\tfrac13, 1, 1)$ — which is another way to derive the rule.)

(c) The wrong normal is $A(1,1,1) = (3, 1, 1)$, unit $(3,1,1)/\sqrt{11}$. The cosine of the angle between them:

$$\frac{(3,1,1)\cdot(1,3,3)}{\sqrt{11}\sqrt{19}} = \frac{3 + 3 + 3}{\sqrt{209}} = \frac{9}{14.457} = 0.6225, \qquad \theta \approx \mathbf{51.5°}.$$

The wrong normal is not even perpendicular to the transformed surface: $(3,1,1)\cdot(3,-1,0) = 8 \ne 0$.

</details>

## Flashback

**From Lesson 1.2 (2D transforms):** A 2D sprite is drawn with the matrix
$$M = \begin{pmatrix} 0 & -2 & 3 \\ 2 & 0 & 1 \\ 0 & 0 & 1 \end{pmatrix}.$$
(a) Write $M$ as $T\,R\,S$ with $S$ a uniform scale, $R$ a rotation, and $T$ a translation, giving the scale factor, the angle and the translation vector.
(b) Apply $M$ to the point $(1, 1)$ and to the vector $(1, 1)$.
(c) Find $M^{-1}$ as a product of the inverses, in the right order.

<details>
<summary>Solution</summary>

(a) The linear block $\begin{pmatrix} 0 & -2 \\ 2 & 0 \end{pmatrix}$ is $2\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$: a uniform **scale by 2** times a **rotation by $90°$** (they commute, since a uniform scale is a multiple of the identity). The translation column is $(3, 1)$.

$$M = T(3, 1)\,R(90°)\,S(2, 2).$$

(b) Point $(1,1,1)$: $(0 - 2 + 3,\ 2 + 0 + 1) = \mathbf{(1,\ 3)}$.

Vector $(1,1,0)$: $(0 - 2,\ 2 + 0) = \mathbf{(-2,\ 2)}$ — rotated and doubled, not translated.

(c) Invert each factor and reverse the order:

$$M^{-1} = S(\tfrac12, \tfrac12)\,R(-90°)\,T(-3, -1).$$

Check on the point: $T(-3,-1)$ sends $(1, 3)$ to $(-2, 2)$; $R(-90°)$ sends $(x, y)$ to $(y, -x)$, giving $(2, 2)$; halving gives $(1, 1)$. ✓

</details>

## Connections

- **Backward:** the frame matrix is [`linalg-refresher` 2.1](../../linalg-refresher/lessons/02-01-matrices-as-linear-maps.md)'s "columns are images of basis vectors" with an origin column added, and the handedness check is [`linalg-refresher` 1.4](../../linalg-refresher/lessons/01-04-cross-product-and-orientation.md)'s cross product. The closed-form rigid inverse is the one [`robotics` 1.5](../../robotics/lessons/01-05-homogeneous-transforms.md) derives for $SE(3)$.
- **Forward:** [1.4](01-04-the-camera-and-view-transform.md) builds the camera as a frame and uses $F^{-1}$ as the view matrix. The normal matrix is what the vertex shader of [3.1](03-01-the-programmable-gpu-pipeline.md) multiplies normals by, and every lighting formula from [2.4](02-04-lighting-diffuse-specular-phong.md) on assumes it was done right.
- **Sideways:** normals transforming by the inverse transpose is the statement that they are **covectors** — linear functionals on tangent vectors — which [`differential-geometry` 2.5](../../differential-geometry/lessons/02-05-covectors-cotangent-space.md) makes precise: tangent vectors push forward, one-forms pull back.
