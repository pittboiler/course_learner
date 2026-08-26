# Robotics & Kinematics · Lesson 1.2: Rotation matrices

> ⏱ ~15 min · Module 1: Spatial descriptions and forward kinematics · Builds on: [1.1 Robots, links, and configuration space](01-01-robots-links-configuration-space.md), [`linalg-refresher` 2.1](../../linalg-refresher/lessons/02-01-matrices-as-linear-maps.md) · Unlocks: [1.3 Euler and fixed angles, axis–angle](01-03-euler-fixed-angles-axis-angle.md), [1.5 Homogeneous transforms](01-05-homogeneous-transforms.md)

## Why this matters

Every rigid body in robotics carries a frame, and every frame's orientation relative to another is a [rotation matrix](../reference.md#rotation-matrix). It is the single most-used object in the subject: forward kinematics is a product of them, the Jacobian is built from their columns, and dynamics needs them to move inertias between frames.

The reason a $3\times3$ matrix is the right representation — rather than three angles, which would seem more economical — is that rotation matrices **compose by multiplication** and **never lose a degree of freedom**. Three angles do neither, as [1.3](01-03-euler-fixed-angles-axis-angle.md) will show. The cost is nine numbers for three degrees of freedom, and six constraints holding them together.

## The idea

Take two frames, $\{A\}$ and $\{B\}$, sharing an origin. Frame $\{B\}$'s three unit axes $\hat X_B$, $\hat Y_B$, $\hat Z_B$ are vectors, and you can write each in $\{A\}$'s coordinates. Stack those three column vectors side by side and you have the rotation matrix:

$$^A_BR = \begin{bmatrix}^A\hat X_B & ^A\hat Y_B & ^A\hat Z_B\end{bmatrix}.$$

**Read the columns and you read the frame.** That is the single most useful fact about rotation matrices, and it turns "what is this matrix doing?" from an algebra problem into a picture: column one is where $\{B\}$'s $x$-axis points, column two its $y$-axis, column three its $z$-axis.

The matrix does three jobs at once, and keeping them straight is most of the difficulty:

**Mapping.** Given a point's coordinates in $\{B\}$, produce its coordinates in $\{A\}$: $^AP = {}^A_BR\,{}^BP$. Nothing physically moved; you changed the description.

**Operating.** Given a vector, rotate it to a new vector in the *same* frame. Something physically moved.

**Describing.** The matrix simply *is* the orientation of $\{B\}$ relative to $\{A\}$.

The same matrix serves all three, which is efficient and confusing in equal measure. The formalism handles it; you have to supply the intent.

Because the columns are **orthonormal** — mutually perpendicular unit vectors — the matrix has a property that makes everything easy: **its inverse is its transpose**. No matrix inversion is ever needed in kinematics, which is both a computational gift and a good check that you have not corrupted a matrix somewhere.

## The formal version

**Definition and constraints.**

$$\boxed{\;SO(3) = \left\{R\in\mathbb{R}^{3\times3}\ :\ R^{\top}R = I,\ \det R = +1\right\}.\;}$$

*In words: columns are orthonormal, and the frame is right-handed.*

$R^{\top}R = I$ is six equations (three unit-length, three orthogonality), so nine entries minus six constraints leaves **three degrees of freedom** — matching the three of orientation. $\det R = +1$ (rather than $-1$) rules out reflections, which are not physical motions of a rigid body.

**The inverse.**

$$\boxed{\;R^{-1} = R^{\top}, \qquad ^B_AR = {}^A_BR^{\top}.\;}$$

**Elementary rotations.**

$$R_x(\theta) = \begin{bmatrix}1&0&0\\0&\cos\theta&-\sin\theta\\0&\sin\theta&\cos\theta\end{bmatrix}, \qquad R_y(\theta) = \begin{bmatrix}\cos\theta&0&\sin\theta\\0&1&0\\-\sin\theta&0&\cos\theta\end{bmatrix},$$

$$R_z(\theta) = \begin{bmatrix}\cos\theta&-\sin\theta&0\\\sin\theta&\cos\theta&0\\0&0&1\end{bmatrix}.$$

Note the **sign pattern**: $R_y$ has its minus sign in the *bottom-left*, not the top-right, because the $z\to x$ cycle runs the other way. This is the most frequently mistyped matrix in robotics.

**Composition and its two readings.** Rotation matrices chain in the obvious way:

$$\boxed{\;^A_CR = {}^A_BR\,{}^B_CR.\;}$$

*In words: adjacent subscripts cancel* — a mnemonic worth internalizing, since it makes long chains readable at a glance.

For a product of elementary rotations, the order encodes *which axes* you rotated about:

$$\boxed{\;R = R_1R_2R_3 \ \Longleftrightarrow\ \text{rotate about \textbf{current} (body) axes, in the order } 1,2,3,\;}$$
$$\boxed{\;R = R_3R_2R_1 \ \Longleftrightarrow\ \text{rotate about \textbf{fixed} (world) axes, in the order } 1,2,3.\;}$$

*In words: post-multiply for body axes, pre-multiply for fixed axes.* Same three angles, same three axis names, completely different final orientation — Example 2 makes this concrete.

**Rotation is not commutative.**

$$R_1R_2 \neq R_2R_1 \quad\text{in general}.$$

This is not a quirk of the notation; it is a fact about physical space. Rotate a book $90°$ about $z$ then $90°$ about $y$, and then repeat in the other order — the book ends up in visibly different orientations.

**Useful properties.**

| Property | Statement | Why it matters |
|---|---|---|
| Orthonormal | $R^{\top}R = I$ | inverse is free |
| Unit determinant | $\det R = 1$ | no reflection, right-handed |
| Length-preserving | $\|Rv\| = \|v\|$ | rotation is rigid |
| Angle-preserving | $(Rv)\cdot(Rw) = v\cdot w$ | shapes are undistorted |
| Cross-product | $R(v\times w) = (Rv)\times(Rw)$ | needed for the Jacobian ([2.3](02-03-manipulator-jacobian.md)) |
| Group | products and inverses stay in $SO(3)$ | chains of rotations are rotations |

**Angular velocity.** Differentiating $R^{\top}R = I$ gives $\dot R^{\top}R+R^{\top}\dot R = 0$, so $R^{\top}\dot R$ is **skew-symmetric**:

$$\dot R = \left[\omega\right]_{\times}R, \qquad \left[\omega\right]_{\times} = \begin{bmatrix}0&-\omega_z&\omega_y\\\omega_z&0&-\omega_x\\-\omega_y&\omega_x&0\end{bmatrix}.$$

*In words: the derivative of a rotation matrix is the angular-velocity vector, written as a skew matrix, times the matrix itself.* This is where the Jacobian's angular part comes from in [2.3](02-03-manipulator-jacobian.md), and the skew operator $[\cdot]_\times$ is just the cross product written as a matrix: $[\omega]_\times v = \omega\times v$.

## Picture

![A two-panel figure. Left: two coordinate frames sharing an origin, frame A drawn with axes along the page directions and frame B rotated relative to it, with frame B's three unit axis vectors each projected onto frame A's axes and the resulting nine direction cosines collected into a three-by-three matrix beside the drawing, each column of the matrix connected by a light line to the axis of B it describes. Right: a book drawn four times to show non-commutativity — starting orientation, then after ninety degrees about z followed by ninety about y, and separately after ninety about y followed by ninety about z, with the two final orientations visibly different and an arrow noting that the same two rotations in the opposite order give a different result.](assets/01-02-fig1.svg)

Left: the columns *are* the axes. Nine numbers, three of them independent, six spent on the orthonormality that keeps the frame rigid.

Right: order matters, and it matters a lot. This is why every rotation convention must specify both the axis sequence *and* whether the axes are body-fixed or world-fixed.

## Worked examples

**Example 1 (a rotation, read three ways).** Let $R = R_z(30°)$.

$$R = \begin{bmatrix}\cos30°&-\sin30°&0\\\sin30°&\cos30°&0\\0&0&1\end{bmatrix} = \begin{bmatrix}0.8660&-0.5000&0\\0.5000&0.8660&0\\0&0&1\end{bmatrix}.$$

*Check it is a rotation.*

$$R^{\top}R = \begin{bmatrix}0.866&0.5&0\\-0.5&0.866&0\\0&0&1\end{bmatrix}\begin{bmatrix}0.866&-0.5&0\\0.5&0.866&0\\0&0&1\end{bmatrix} = \begin{bmatrix}0.750+0.250&0&0\\0&0.250+0.750&0\\0&0&1\end{bmatrix} = I\ \checkmark$$

$$\det R = 0.866(0.866)-(-0.5)(0.5) = 0.750+0.250 = 1\ \checkmark$$

*As a description.* Column 1 is $(0.866, 0.500, 0)$ — frame $\{B\}$'s $x$-axis, tilted $30°$ up from $\{A\}$'s $x$-axis in the $xy$-plane. Column 2 is $(-0.500, 0.866, 0)$, its $y$-axis, likewise $30°$ over. Column 3 is $(0,0,1)$: the $z$-axes coincide, which is exactly what "rotation about $z$" means.

*As an operator.* Rotating $p = (2,1,3)$:

$$Rp = \begin{bmatrix}0.866(2)-0.5(1)\\0.5(2)+0.866(1)\\3\end{bmatrix} = \begin{bmatrix}1.732-0.500\\1.000+0.866\\3\end{bmatrix} = \begin{bmatrix}1.232\\1.866\\3.000\end{bmatrix}.$$

The $z$-component is untouched, and the length is preserved:

$$\|p\| = \sqrt{4+1+9} = 3.742, \qquad \|Rp\| = \sqrt{1.518+3.482+9} = \sqrt{14.000} = 3.742\ \checkmark$$

*As a mapping.* If a point has coordinates $(2,1,3)$ in $\{B\}$, its coordinates in $\{A\}$ are $(1.232, 1.866, 3.000)$. The point did not move; you re-expressed it.

*And the inverse is free:*

$$^B_AR = R^{\top} = R_z(-30°) = \begin{bmatrix}0.866&0.5&0\\-0.5&0.866&0\\0&0&1\end{bmatrix},$$

which you can confirm is what $R_z(\theta)$ gives with $\theta = -30°$, since cosine is even and sine is odd.

**Example 2 (order matters, and what "order" means).** Compute $R_z(90°)R_y(90°)$ and $R_y(90°)R_z(90°)$, and interpret both.

$$R_z(90°) = \begin{bmatrix}0&-1&0\\1&0&0\\0&0&1\end{bmatrix}, \qquad R_y(90°) = \begin{bmatrix}0&0&1\\0&1&0\\-1&0&0\end{bmatrix}.$$

*First product.*

$$R_z(90°)R_y(90°) = \begin{bmatrix}0&-1&0\\1&0&0\\0&0&1\end{bmatrix}\begin{bmatrix}0&0&1\\0&1&0\\-1&0&0\end{bmatrix} = \begin{bmatrix}0&-1&0\\0&0&1\\-1&0&0\end{bmatrix}.$$

*Second product.*

$$R_y(90°)R_z(90°) = \begin{bmatrix}0&0&1\\0&1&0\\-1&0&0\end{bmatrix}\begin{bmatrix}0&-1&0\\1&0&0\\0&0&1\end{bmatrix} = \begin{bmatrix}0&0&1\\1&0&0\\0&1&0\end{bmatrix}.$$

**Completely different matrices.** Applying each to $\hat x = (1,0,0)$:

$$R_zR_y\,\hat x = (0,0,-1) = -\hat z, \qquad R_yR_z\,\hat x = (0,1,0) = \hat y.$$

One sends $\hat x$ to $-\hat z$, the other to $+\hat y$. There is no ambiguity about whether order matters.

*Now the two interpretations, which is the part worth getting right.*

For $R_z(90°)R_y(90°)$:

- **Body-axis reading:** start aligned with the world, rotate $90°$ about the **body** $z$, then $90°$ about the **new body** $y$. Post-multiplication means "about the current axes."
- **Fixed-axis reading:** rotate $90°$ about the **world** $y$ first, then $90°$ about the **world** $z$. Pre-multiplication means "about the fixed axes," and note the order **reverses**.

Both readings describe the same final matrix. That equivalence — *body-axis rotations in one order equal fixed-axis rotations in the reverse order* — is not a coincidence but the central fact about rotation composition, and it is why two conventions that look different (ZYX Euler angles and XYZ fixed angles) turn out to be the same thing in [1.3](01-03-euler-fixed-angles-axis-angle.md).

*A verification worth doing.* Both products are still rotations:

$$\det\begin{bmatrix}0&-1&0\\0&0&1\\-1&0&0\end{bmatrix} = 0\cdot(0-0)-(-1)(0+1)+0 = 1\ \checkmark$$

and each has orthonormal columns by inspection — each is a signed permutation of the identity, so the columns are $\pm$ the standard basis vectors, mutually perpendicular and of unit length.

*Why the mnemonic "adjacent subscripts cancel" pays off.* Written with frames, the chain

$$^0_3R = {}^0_1R\,{}^1_2R\,{}^2_3R$$

is unambiguous — the order is forced by the subscripts, and there is no convention to remember. That is why kinematics is written this way in [1.6](01-06-denavit-hartenberg-forward-kinematics.md), and why bare $R_1R_2R_3$ notation should be avoided whenever frames are available.

## Watch out

- **You might mistype $R_y$.** Its minus sign is in the bottom-left. $R_x$ and $R_z$ have theirs in the upper-right of their $2\times2$ block; $R_y$ is the odd one out because the axis cycle $x\to y\to z\to x$ makes the $zx$-plane rotation run backwards.
- **You might invert a rotation matrix numerically.** Transpose it. Calling a matrix inverse routine is slower, less accurate, and hides bugs.
- **You might multiply in the wrong order.** $R_1R_2\neq R_2R_1$. When in doubt, write the frames as sub/superscripts and let adjacent labels cancel.
- **You might mix up body and fixed axes.** Post-multiply for current (body) axes; pre-multiply for fixed (world) axes, which reverses the apparent order.
- **You might let a matrix drift.** Repeated multiplication accumulates floating-point error until $R^{\top}R\neq I$. Re-orthonormalize periodically (Gram–Schmidt, or an SVD-based projection back onto $SO(3)$) in any long-running integration.
- **You might accept $\det R = -1$.** That is a reflection, not a rotation, and usually means a left-handed frame or a sign error in a column.
- **You might read the rows as the axes.** The **columns** are $\{B\}$'s axes in $\{A\}$; the rows are $\{A\}$'s axes in $\{B\}$ (which is the same statement, since $^B_AR = {}^A_BR^{\top}$).

## One-liner

> A rotation matrix's columns are the rotated frame's axes; it is orthonormal with unit determinant so its inverse is its transpose; and it composes by multiplication — post-multiply for body axes, pre-multiply for fixed ones, and never assume the order does not matter.

## Problems

**P1 (🟢)** Let $R = R_z(60°)$. (a) Write the matrix. (b) Verify $R^{\top}R = I$ and $\det R = 1$. (c) Compute $R\,(1,2,0)^{\top}$ and confirm the length is preserved. (d) Write $R^{-1}$ without computing an inverse.

**P2 (🟡)** Compute $R_x(90°)R_z(90°)$ and $R_z(90°)R_x(90°)$. (a) Give both matrices. (b) Apply each to $(1,1,1)^{\top}$. (c) For the first product, state what physical sequence of rotations it represents under both the body-axis and the fixed-axis readings. (d) Read the columns of the first product to describe where each axis of the rotated frame ends up.

**P3 (🔴)** A frame $\{B\}$ has, expressed in $\{A\}$, its $x$-axis along $(0.6, 0.8, 0)$ and its $y$-axis along $(-0.8, 0.6, 0)$. (a) Find its $z$-axis and write $^A_BR$. (b) Verify it is a valid rotation matrix. (c) A point is at $(1, 2, 3)$ in $\{B\}$; find its coordinates in $\{A\}$, and a point at $(1,2,3)$ in $\{A\}$ expressed in $\{B\}$. (d) The matrix is a rotation about $z$ — find the angle, then determine the angular velocity matrix $[\omega]_\times$ if the frame is spinning at $2$ rad/s about that axis, and verify $\dot R = [\omega]_\times R$ at $t=0$ for one entry.

<details>
<summary>Solutions</summary>

**P1** (a) $$\cos60° = 0.5, \quad \sin60° = 0.8660,$$
$$R = \begin{bmatrix}0.5&-0.8660&0\\0.8660&0.5&0\\0&0&1\end{bmatrix}.$$

(b) $$R^{\top}R:\ \text{column 1 dotted with itself} = 0.25+0.75 = 1\ \checkmark$$
$$\text{column 1 dotted with column 2} = 0.5(-0.866)+0.866(0.5) = -0.433+0.433 = 0\ \checkmark$$
$$\det R = 0.5(0.5)-(-0.866)(0.866) = 0.25+0.75 = 1\ \checkmark$$

(c) $$R\begin{bmatrix}1\\2\\0\end{bmatrix} = \begin{bmatrix}0.5(1)-0.866(2)\\0.866(1)+0.5(2)\\0\end{bmatrix} = \begin{bmatrix}0.5-1.732\\0.866+1.000\\0\end{bmatrix} = \begin{bmatrix}-1.2321\\1.8660\\0\end{bmatrix}.$$

$$\|(1,2,0)\| = \sqrt{5} = 2.2361, \qquad \|(-1.2321,1.8660,0)\| = \sqrt{1.5181+3.4820} = \sqrt{5.0001} = 2.2361\ \checkmark$$

(d) $$R^{-1} = R^{\top} = \begin{bmatrix}0.5&0.8660&0\\-0.8660&0.5&0\\0&0&1\end{bmatrix} = R_z(-60°).$$

**P2** (a) $$R_x(90°) = \begin{bmatrix}1&0&0\\0&0&-1\\0&1&0\end{bmatrix}, \qquad R_z(90°) = \begin{bmatrix}0&-1&0\\1&0&0\\0&0&1\end{bmatrix}.$$

$$R_x(90°)R_z(90°) = \begin{bmatrix}1&0&0\\0&0&-1\\0&1&0\end{bmatrix}\begin{bmatrix}0&-1&0\\1&0&0\\0&0&1\end{bmatrix} = \begin{bmatrix}0&-1&0\\0&0&-1\\1&0&0\end{bmatrix}.$$

$$R_z(90°)R_x(90°) = \begin{bmatrix}0&-1&0\\1&0&0\\0&0&1\end{bmatrix}\begin{bmatrix}1&0&0\\0&0&-1\\0&1&0\end{bmatrix} = \begin{bmatrix}0&0&1\\1&0&0\\0&1&0\end{bmatrix}.$$

(b) $$R_xR_z\begin{bmatrix}1\\1\\1\end{bmatrix} = \begin{bmatrix}0-1+0\\0+0-1\\1+0+0\end{bmatrix} = \begin{bmatrix}-1\\-1\\1\end{bmatrix},$$

$$R_zR_x\begin{bmatrix}1\\1\\1\end{bmatrix} = \begin{bmatrix}0+0+1\\1+0+0\\0+1+0\end{bmatrix} = \begin{bmatrix}1\\1\\1\end{bmatrix}.$$

**The second product leaves $(1,1,1)$ fixed.** That is not a coincidence: $R_zR_x$ is the cyclic permutation $x\to y\to z\to x$, and $(1,1,1)$ lies along its rotation axis. (It is a $120°$ rotation about the body diagonal.)

(c) For $R_x(90°)R_z(90°)$:

**Body-axis reading (post-multiplication):** starting aligned with the world, rotate $90°$ about the **body $x$**, then $90°$ about the **new body $z$**.

**Fixed-axis reading (pre-multiplication):** rotate $90°$ about the **world $z$** first, then $90°$ about the **world $x$**. The order reverses.

(d) Reading the columns of $R_xR_z = \begin{bmatrix}0&-1&0\\0&0&-1\\1&0&0\end{bmatrix}$:

| Column | Vector | Meaning |
|---|---|---|
| 1 | $(0,0,1)$ | the rotated frame's $x$-axis points along world $+z$ |
| 2 | $(-1,0,0)$ | its $y$-axis points along world $-x$ |
| 3 | $(0,-1,0)$ | its $z$-axis points along world $-y$ |

*Check right-handedness:* $\hat x'\times\hat y' = (0,0,1)\times(-1,0,0) = (0\cdot0-1\cdot0,\ 1\cdot(-1)-0\cdot0,\ 0-0) = (0,-1,0) = \hat z'\ \checkmark$

**P3** (a) The $z$-axis is the cross product of the other two, which is what makes the frame right-handed:

$$^A\hat Z_B = {}^A\hat X_B\times{}^A\hat Y_B = \begin{vmatrix}\hat i&\hat j&\hat k\\0.6&0.8&0\\-0.8&0.6&0\end{vmatrix} = \hat i(0-0)-\hat j(0-0)+\hat k(0.36+0.64) = (0,0,1).$$

$$^A_BR = \begin{bmatrix}0.6&-0.8&0\\0.8&0.6&0\\0&0&1\end{bmatrix}.$$

(b) Column norms: $0.36+0.64 = 1$ ✓ for both non-trivial columns; third is a unit vector ✓.

Orthogonality: $0.6(-0.8)+0.8(0.6) = -0.48+0.48 = 0$ ✓; the third column is orthogonal to both by inspection.

$$\det = 0.6(0.6)-(-0.8)(0.8) = 0.36+0.64 = 1\ \checkmark$$

(c) *Point given in $\{B\}$, wanted in $\{A\}$:*

$$^AP = {}^A_BR\,{}^BP = \begin{bmatrix}0.6(1)-0.8(2)\\0.8(1)+0.6(2)\\3\end{bmatrix} = \begin{bmatrix}0.6-1.6\\0.8+1.2\\3\end{bmatrix} = \begin{bmatrix}-1.0\\2.0\\3.0\end{bmatrix}.$$

*Point given in $\{A\}$, wanted in $\{B\}$* — use the transpose, not a new matrix:

$$^BP = {}^A_BR^{\top}\,{}^AP = \begin{bmatrix}0.6&0.8&0\\-0.8&0.6&0\\0&0&1\end{bmatrix}\begin{bmatrix}1\\2\\3\end{bmatrix} = \begin{bmatrix}0.6+1.6\\-0.8+1.2\\3\end{bmatrix} = \begin{bmatrix}2.2\\0.4\\3.0\end{bmatrix}.$$

**The two answers are different, as they must be** — mapping $\{B\}\to\{A\}$ and $\{A\}\to\{B\}$ are inverse operations, not the same one.

(d) *The angle.* Comparing with $R_z(\theta)$:

$$\cos\theta = 0.6, \qquad \sin\theta = 0.8 \quad\Longrightarrow\quad \theta = \arctan\frac{0.8}{0.6} = 53.13°.$$

(The classic 3-4-5 triangle, which is why the numbers came out so clean.)

*The angular velocity.* Spinning about $\hat z$ at $2$ rad/s means $\omega = (0,0,2)$, so

$$[\omega]_\times = \begin{bmatrix}0&-\omega_z&\omega_y\\\omega_z&0&-\omega_x\\-\omega_y&\omega_x&0\end{bmatrix} = \begin{bmatrix}0&-2&0\\2&0&0\\0&0&0\end{bmatrix}.$$

*Verification.* With $R(t) = R_z(\theta_0+2t)$ and $\theta_0 = 53.13°$, differentiate the $(1,1)$ entry:

$$R_{11}(t) = \cos(\theta_0+2t), \qquad \dot R_{11} = -2\sin(\theta_0+2t)\big|_{t=0} = -2(0.8) = -1.6.$$

From the formula, the $(1,1)$ entry of $[\omega]_\times R$ is

$$\left(\text{row 1 of }[\omega]_\times\right)\cdot\left(\text{column 1 of }R\right) = (0,-2,0)\cdot(0.6,0.8,0) = -2(0.8) = -1.6\ \checkmark$$

*What this relation is for.* $\dot R = [\omega]_\times R$ is the bridge from orientation to angular velocity, and it is the reason a rotation matrix is the *right* representation for a moving body: differentiate it and the angular velocity vector falls out directly, with no chain rule through a set of angles and no singularity anywhere. Three-angle representations do not have this property, which is a large part of why [1.3](01-03-euler-fixed-angles-axis-angle.md) has to introduce their failure mode, and [2.3](02-03-manipulator-jacobian.md) builds the manipulator Jacobian's angular rows directly from this formula.

</details>

## Connections

- **Backward:** matrices as linear maps, orthonormal columns and determinants are [`linalg-refresher` 2.1](../../linalg-refresher/lessons/02-01-matrices-as-linear-maps.md), [4.1](../../linalg-refresher/lessons/04-01-inner-products-orthogonality.md) and [2.3](../../linalg-refresher/lessons/02-03-determinants.md); the right-hand rule and cross product are [1.4](../../linalg-refresher/lessons/01-04-cross-product-and-orientation.md)'s.
- **Forward:** [1.3](01-03-euler-fixed-angles-axis-angle.md) compresses $R$ into three numbers and pays for it; [1.4](01-04-quaternions.md) into four and does not; [1.5](01-05-homogeneous-transforms.md) packs $R$ with a translation into a $4\times4$; [2.3](02-03-manipulator-jacobian.md) differentiates it.
- **Sideways:** $SO(3)$ is a Lie group and $[\omega]_\times$ lives in its Lie algebra $\mathfrak{so}(3)$ — the same structure that organizes angular momentum in [`quantum-mechanics`](../../quantum-mechanics/syllabus.md) and rigid-body rotation in [`analytical-mechanics` 4.4](../../analytical-mechanics/lessons/04-04-rigid-body-dynamics.md).
