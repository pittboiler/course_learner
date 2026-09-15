# Computer Graphics · Lesson 1.2: 2D Transforms & Homogeneous Coordinates

> ⏱ ~15 min · Module 1: Transformations & Viewing · Builds on: [1.1 (the pipeline)](01-01-the-graphics-pipeline.md), [`linalg-refresher` 2.1 (matrices as linear maps)](../../linalg-refresher/lessons/02-01-matrices-as-linear-maps.md) · Unlocks: [1.3 (3D transforms, frames and normals)](01-03-3d-transforms-frames-and-normals.md)

## Why this matters

Every vertex in every frame goes through a matrix multiply, and a game does billions of them a second. That only works if *every* transform you care about — rotate, scale, shear, and crucially **translate** — is a matrix, so a whole chain of them collapses into one product computed once.

The catch is that translation is not linear, so no $2 \times 2$ matrix can do it. The fix is to add one coordinate. That one extra number is the most consequential trick in graphics: it makes translation a matrix here, it tells points apart from directions, and in [1.5](01-05-projection-orthographic-and-perspective.md) it is what makes *perspective* a matrix too.

## The idea

A $2 \times 2$ matrix can rotate, scale and shear, because those maps send the origin to the origin. Translation moves the origin, so it can't be one.

The trick: pretend the 2D plane is the slice $w = 1$ of a 3D space. Write the point $(x, y)$ as $(x, y, 1)$. Now a **shear** in 3D that slides the $w=1$ slice sideways is linear in 3D, and on the slice it looks exactly like a translation. So a $3 \times 3$ matrix can translate the plane — and rotate and scale it too — and a sequence of such moves is just a product of $3 \times 3$ matrices.

The extra coordinate also carries meaning. A **point** is a location and should move when you translate. A **vector** — a direction or a displacement, like a velocity or an edge of a triangle — should not: an arrow one unit long pointing east is still one unit east after you slide the whole picture. Write points with a $1$ and vectors with a $0$ in the last slot, and the translation column automatically affects one and ignores the other.

## The formal version

**Linear and affine maps.** A map $\mathbf{x} \mapsto A\mathbf{x}$ with $A$ a matrix is **linear**. A map $\mathbf{x} \mapsto A\mathbf{x} + \mathbf{t}$ is **affine**. In words: affine is linear followed by a shift. Rotation, scale and shear are linear; translation is affine but not linear. *(card: [Affine map](../reference.md#affine-map))*

**Homogeneous coordinates.** Represent the 2D point $(x, y)$ as $(x, y, 1)$ and the 2D vector $(v_x, v_y)$ as $(v_x, v_y, 0)$. An affine map becomes a single $3 \times 3$ matrix:

$$\begin{pmatrix} x' \\ y' \\ 1 \end{pmatrix} = \begin{pmatrix} a & b & t_x \\ c & d & t_y \\ 0 & 0 & 1 \end{pmatrix} \begin{pmatrix} x \\ y \\ 1 \end{pmatrix}.$$

In words: the top-left $2\times2$ block is the linear part, the right column is the translation, and the bottom row $(0, 0, 1)$ keeps the last coordinate equal to $1$. *(card: [Homogeneous coordinates](../reference.md#homogeneous-coordinates))*

**The basic matrices** (angles counter-clockwise, column vectors):

$$T(t_x, t_y) = \begin{pmatrix} 1 & 0 & t_x \\ 0 & 1 & t_y \\ 0 & 0 & 1 \end{pmatrix}, \quad R(\theta) = \begin{pmatrix} \cos\theta & -\sin\theta & 0 \\ \sin\theta & \cos\theta & 0 \\ 0 & 0 & 1 \end{pmatrix}, \quad S(s_x, s_y) = \begin{pmatrix} s_x & 0 & 0 \\ 0 & s_y & 0 \\ 0 & 0 & 1 \end{pmatrix}.$$

A horizontal **shear** by $k$ has $b = k$ and is otherwise the identity: it slides each point sideways by $k$ times its height.

**Points versus vectors.** Multiply a vector $(v_x, v_y, 0)$ by $T$ and the translation column is multiplied by $0$ — the vector is unchanged. The last coordinate also polices arithmetic:

| operation | last coordinate | result |
|---|---|---|
| point − point | $1 - 1 = 0$ | a vector (the displacement) |
| point + vector | $1 + 0 = 1$ | a point |
| point + point | $1 + 1 = 2$ | **not** a point — meaningless on its own |
| $\sum_i \alpha_i \mathbf{p}_i$ with $\sum_i \alpha_i = 1$ | $1$ | a point (an **affine combination**) |

The last row is why a midpoint $\tfrac12\mathbf{p} + \tfrac12\mathbf{q}$ makes sense but $\mathbf{p} + \mathbf{q}$ does not, and it is exactly the structure of barycentric coordinates in [2.1](02-01-rasterizing-lines-and-triangles.md). Affine maps **preserve affine combinations**: the image of a midpoint is the midpoint of the images. *(card: [Points and vectors](../reference.md#points-and-vectors))*

**Composition.** Applying $A$ first and then $B$ is the matrix $BA$ — with column vectors the first transform sits **rightmost**, nearest the point:

$$\mathbf{p}' = B(A\mathbf{p}) = (BA)\mathbf{p}, \qquad (BA)^{-1} = A^{-1}B^{-1}.$$

Matrix multiplication does not commute, and neither do transforms: "scale then translate" and "translate then scale" are different maps.

**Transforming about a pivot.** To rotate (or scale) about a point $\mathbf{c}$ instead of the origin: move $\mathbf{c}$ to the origin, rotate, move back.

$$R_{\mathbf{c}}(\theta) = T(\mathbf{c})\,R(\theta)\,T(-\mathbf{c}).$$

In words: read right to left — translate by $-\mathbf{c}$, rotate, translate by $+\mathbf{c}$. This "conjugate by a translation" pattern is how every transform about a non-origin centre is built. *(card: [Transform about a pivot](../reference.md#transform-about-a-pivot))*

## Picture

![A grid with axes. A grey triangle with vertices at 3,1 and 5,1 and 3,2 labelled original. A coral copy rotated 90 degrees about the origin lands at the upper left, with a dashed coral arc showing the vertex 3,1 swinging around the origin. A blue copy rotated 90 degrees about the pivot c at 2,2 lands just above the original, with a short dashed blue arc showing the same vertex swinging around c, labelled T of c times R times T of minus c](assets/01-02-fig1.svg)

Both copies are "the triangle rotated by $90°$". The coral one swung around the origin on a radius of $\sqrt{10}$ and flew off to the other side of the axis; the blue one swung around the pivot on a radius of $\sqrt 2$. The matrix alone doesn't know which you meant — the pivot has to be built in.

## Worked examples

**Example 1 (mechanical): rotate about a pivot.** Rotate the triangle $(3,1), (5,1), (3,2)$ by $90°$ about $\mathbf{c} = (2, 2)$.

With $\cos 90° = 0$ and $\sin 90° = 1$, $R(90°)$ has linear block $\begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$. Build the composite right to left:

$$T(2,2)\,R(90°)\,T(-2,-2) = \begin{pmatrix} 0 & -1 & 4 \\ 1 & 0 & 0 \\ 0 & 0 & 1 \end{pmatrix}.$$

The linear block is untouched by the conjugation; only the translation column changed. That column is $\mathbf{c} - R\mathbf{c} = (2,2) - (-2, 2) = (4, 0)$.

Apply it:

| vertex | $M\mathbf{p}$ | check by hand: $R(\mathbf{p} - \mathbf{c}) + \mathbf{c}$ |
|---|---|---|
| $(3,1)$ | $(0\cdot3 - 1 + 4,\ 3 + 0) = (3, 3)$ | $(1,-1) \to (1, 1) \to (3, 3)$ |
| $(5,1)$ | $(-1 + 4,\ 5) = (3, 5)$ | $(3,-1) \to (1, 3) \to (3, 5)$ |
| $(3,2)$ | $(-2 + 4,\ 3) = (2, 3)$ | $(1, 0) \to (0, 1) \to (2, 3)$ |

These are the blue vertices in the picture. Without the conjugation, $R(90°)$ alone sends $(3,1)$ to $(-1, 3)$ — the coral one.

**Example 2 (why you'd care): order is not negotiable.** A sprite is authored at unit size around the origin; you want it twice as big and one unit to the right. Take its corner $\mathbf{p} = (1, 1)$.

*Scale, then translate* — matrix $T(1,0)\,S(2,2)$:

$$(1,1) \xrightarrow{S} (2,2) \xrightarrow{T} (3, 2).$$

*Translate, then scale* — matrix $S(2,2)\,T(1,0)$:

$$(1,1) \xrightarrow{T} (2,1) \xrightarrow{S} (4, 2).$$

The second version scaled the translation too: the sprite ends up **two** units right, not one. The rule of thumb that falls out, and that every scene graph follows: **scale, then rotate, then translate** — $T\,R\,S$ — so the translation is applied last and is never stretched or turned.

Now apply $T(1,0)\,S(2,2)$ to the **vector** $(1, 1, 0)$ — say the sprite's facing direction. Scale gives $(2, 2, 0)$; the translation column is multiplied by the $0$, so the result stays $(2, 2, 0)$. A direction got longer under the scale but was not moved by the translation, which is exactly right.

## Watch out

- **You might think** you can read a matrix product left to right as "first do this, then that" — **but actually** with column vectors the transform applied first is on the **right**. $T\,R\,S\,\mathbf{p}$ scales first. Some texts and APIs use row vectors ($\mathbf{p}' = \mathbf{p}M$), where the order flips and every matrix is transposed; this course uses columns throughout.
- **You might think** a rotation matrix rotates "the object" — **but actually** it rotates about the **origin**, always. If the object isn't centred there, it orbits. Rotating in place requires $T(\mathbf{c})R\,T(-\mathbf{c})$, or authoring the object around the origin and translating last.
- **You might think** a direction should be stored as a point, because it's "just two numbers" — **but actually** a direction with $w = 1$ gets translated, which silently corrupts normals, velocities and light directions the moment a translation appears in the chain. Give vectors $w = 0$.

## One-liner

> One extra coordinate makes translation a matrix: points carry a 1 and move, vectors carry a 0 and don't, and a transform chain applies right to left.

## Problems

**P1 (🟢)** (a) Build the single $3 \times 3$ matrix that **scales by 3 about the point $(1, 2)$**.
(b) Apply it to the point $(2, 2)$ and to the vector $(2, 2)$.
(c) Check the point's image directly from the geometry.

**P2 (🟡)** The matrix
$$M = \begin{pmatrix} 0 & -1 & 5 \\ 1 & 0 & 1 \\ 0 & 0 & 1 \end{pmatrix}$$
is a $90°$ rotation followed by a translation. It is claimed that it is *also* a pure $90°$ rotation about some pivot $\mathbf{c}$.
(a) Find $\mathbf{c}$.
(b) Check your answer by computing $M\mathbf{c}$.

**P3 (🟡)** A 2D affine map sends $(0,0) \mapsto (1,1)$, $(1,0) \mapsto (3,2)$ and $(0,1) \mapsto (0,3)$.
(a) Find its $3 \times 3$ matrix.
(b) By what factor does it scale areas?
(c) Find the image of the midpoint of $(0,0)$ and $(1,1)$ two ways — by mapping the midpoint, and by averaging the images of the endpoints — and say which property of affine maps the agreement demonstrates.

<details>
<summary>Solutions</summary>

**P1**

(a) Conjugate the scale by a translation to the pivot, reading right to left:

$$T(1,2)\,S(3,3)\,T(-1,-2) = \begin{pmatrix} 3 & 0 & 1 - 3\cdot1 \\ 0 & 3 & 2 - 3\cdot2 \\ 0 & 0 & 1 \end{pmatrix} = \begin{pmatrix} 3 & 0 & -2 \\ 0 & 3 & -4 \\ 0 & 0 & 1 \end{pmatrix}.$$

The translation column is $\mathbf{c} - S\mathbf{c} = (1,2) - (3,6) = (-2,-4)$.

(b) Point $(2,2,1)$: $(3\cdot2 - 2,\ 3\cdot2 - 4) = \mathbf{(4,\ 2)}$.

Vector $(2,2,0)$: the translation column is multiplied by $0$, so the result is $\mathbf{(6,\ 6)}$ — scaled but not shifted.

(c) The point is $(2,2) - (1,2) = (1, 0)$ from the pivot. Scaling that offset by $3$ gives $(3, 0)$, and adding the pivot back gives $(4, 2)$. ✓

**P2**

(a) A fixed point of the map satisfies $R\mathbf{c} + \mathbf{t} = \mathbf{c}$, i.e. $(I - R)\,\mathbf{c} = \mathbf{t}$ with $R = \begin{pmatrix} 0 & -1 \\ 1 & 0 \end{pmatrix}$ and $\mathbf{t} = (5, 1)$:

$$\begin{pmatrix} 1 & 1 \\ -1 & 1 \end{pmatrix}\begin{pmatrix} c_x \\ c_y \end{pmatrix} = \begin{pmatrix} 5 \\ 1 \end{pmatrix} \quad\Longrightarrow\quad c_x + c_y = 5,\ \ -c_x + c_y = 1.$$

Adding the equations gives $2c_y = 6$, so $c_y = 3$ and $c_x = 2$: $\mathbf{c} = \mathbf{(2,\ 3)}$.

(b) $M(2, 3, 1) = (0\cdot2 - 3 + 5,\ 2 + 0 + 1) = (2, 3)$. ✓ The pivot is fixed, so $M$ is the $90°$ rotation about $(2,3)$.

This always works when the rotation angle is not zero: $I - R$ is then invertible, so **every rotation-plus-translation in the plane is a single rotation about some point**. When the angle is zero, $I - R = 0$ and there is no fixed point — a pure translation.

**P3**

(a) The images of $(1,0)$ and $(0,1)$, minus the image of the origin, are the columns of the linear block; the image of the origin is the translation.

$$\mathbf{t} = (1,1), \qquad \text{col}_1 = (3,2) - (1,1) = (2,1), \qquad \text{col}_2 = (0,3) - (1,1) = (-1, 2).$$

$$M = \begin{pmatrix} 2 & -1 & 1 \\ 1 & 2 & 1 \\ 0 & 0 & 1 \end{pmatrix}.$$

Check $(1,0)$: $(2 + 1,\ 1 + 1) = (3, 2)$. ✓

(b) Areas scale by $|\det|$ of the linear block: $2\cdot2 - (-1)\cdot1 = \mathbf{5}$. The translation does not affect area.

(c) *Map the midpoint.* $(0.5, 0.5) \mapsto (2\cdot0.5 - 0.5 + 1,\ 0.5 + 2\cdot0.5 + 1) = (1.5,\ 2.5)$.

*Average the images.* $(0,0) \mapsto (1,1)$ and $(1,1) \mapsto (2 - 1 + 1,\ 1 + 2 + 1) = (2, 4)$; their average is $(1.5,\ 2.5)$.

They agree: **affine maps preserve affine combinations** (weights summing to 1). That is why a renderer can transform only a triangle's three vertices and trust that every interior point — each one an affine combination of the corners — lands where it should.

</details>

## Connections

- **Backward:** the linear block is [`linalg-refresher` 2.1](../../linalg-refresher/lessons/02-01-matrices-as-linear-maps.md)'s "columns are the images of the basis vectors", and the area factor in P3 is [`linalg-refresher` 2.3](../../linalg-refresher/lessons/02-03-determinants.md)'s determinant.
- **Forward:** [1.3](01-03-3d-transforms-frames-and-normals.md) promotes all of this to $4 \times 4$ matrices and meets the one thing that does *not* transform like a vector — a surface normal. [1.5](01-05-projection-orthographic-and-perspective.md) lets the last coordinate be something other than $0$ or $1$, which turns out to be perspective. [2.1](02-01-rasterizing-lines-and-triangles.md)'s barycentric coordinates are the affine combinations of the table above.
- **Sideways:** the rigid 3D version — rotation plus translation, with a closed-form inverse — is developed for robot arms in [`robotics` 1.5](../../robotics/lessons/01-05-homogeneous-transforms.md). The $w$ coordinate is also the entry point to projective geometry, where [`algebraic-geometry` 2.3](../../algebraic-geometry/lessons/02-03-projective-space.md) treats $(x, y, w)$ and $(\lambda x, \lambda y, \lambda w)$ as the same point.
