# Robotics & Kinematics · Lesson 1.4: Quaternions

> ⏱ ~15 min · Module 1: Spatial descriptions and forward kinematics · Builds on: [1.3 Euler angles, fixed angles, and axis–angle](01-03-euler-fixed-angles-axis-angle.md) · Unlocks: [3.5 Cartesian trajectories and via points](03-05-cartesian-trajectories-via-points.md), [4.5 Localization](04-05-localization.md)

## Why this matters

[1.3](01-03-euler-fixed-angles-axis-angle.md) left a problem: three parameters cannot cover $SO(3)$ without a singularity, and nine parameters are wasteful and drift out of orthonormality when integrated.

The [unit quaternion](../reference.md#unit-quaternion) is the resolution. Four numbers, one constraint, **no singularity anywhere**. It composes with sixteen multiplies instead of twenty-seven, renormalizes with a single division, and — uniquely among the representations — interpolates smoothly, which is why every orientation trajectory, every attitude filter, and every 3D graphics engine uses it internally.

The one genuine oddity is the **double cover**: $q$ and $-q$ describe the same rotation. It is not a defect, and understanding why it must be true says something real about the shape of rotation space.

## The idea

A quaternion extends complex numbers from one imaginary unit to three:

$$q = w+xi+yj+zk,$$

with $i^2 = j^2 = k^2 = ijk = -1$. Those relations force $ij = k$, $ji = -k$ — so quaternion multiplication, like rotation, **does not commute**. That is the first hint they are the right tool.

Write $q = (w,\ \mathbf{v})$ with a scalar part $w$ and a vector part $\mathbf{v} = (x,y,z)$. Then a **unit** quaternion encodes the axis–angle pair of [1.3](01-03-euler-fixed-angles-axis-angle.md) directly:

$$\boxed{\;q = \left(\cos\frac{\theta}{2},\ \hat k\sin\frac{\theta}{2}\right).\;}$$

**The half-angle is the whole story.** It is where the double cover comes from, where the smooth composition comes from, and where the absence of a singularity comes from.

Rotating a vector is a **conjugation**: embed $\mathbf{p}$ as the pure quaternion $(0,\mathbf{p})$ and compute $q\,p\,q^{-1}$ — the sandwich appears because a quaternion applied once rotates by $\theta/2$, and you need the full $\theta$.

Composing rotations is just multiplying quaternions, in the same order as the corresponding matrices. And because a unit quaternion lives on the unit sphere $S^3$ in four dimensions, interpolating between two orientations is just walking along a great circle on that sphere — which is exactly what **slerp** does, and why it produces constant-angular-velocity motion that no Euler-angle blend can match.

**Why $q$ and $-q$ are the same rotation.** Replace $\theta$ by $\theta+2\pi$ (the same rotation) and the half-angle becomes $\theta/2+\pi$, flipping both $\cos$ and $\sin$. So $-q$ describes the identical orientation. $S^3$ **double-covers** $SO(3)$, and this is the reason: rotation space is $\mathbb{RP}^3$, the sphere with antipodal points identified.

## The formal version

**Definition.**

$$q = (w,\mathbf{v}) = w+xi+yj+zk, \qquad \|q\| = \sqrt{w^2+x^2+y^2+z^2}.$$

A **unit quaternion** has $\|q\| = 1$, and only unit quaternions represent rotations.

**From and to axis–angle.**

$$\boxed{\;q = \left(\cos\tfrac{\theta}{2},\ \hat k\sin\tfrac{\theta}{2}\right), \qquad \theta = 2\arccos w, \qquad \hat k = \frac{\mathbf{v}}{\|\mathbf{v}\|}.\;}$$

**Product (Hamilton convention).**

$$\boxed{\;q_1q_2 = \left(w_1w_2-\mathbf{v}_1\cdot\mathbf{v}_2,\ \ w_1\mathbf{v}_2+w_2\mathbf{v}_1+\mathbf{v}_1\times\mathbf{v}_2\right).\;}$$

*In words: the scalar part is a dot product, the vector part carries a cross product* — and the cross product is precisely what makes it non-commutative, mirroring rotation itself.

**Conjugate and inverse.**

$$q^{*} = (w,-\mathbf{v}), \qquad q^{-1} = \frac{q^{*}}{\|q\|^2} = q^{*}\ \text{for a unit quaternion}.$$

**Rotating a vector.**

$$\boxed{\;(0,\mathbf{p}') = q\,(0,\mathbf{p})\,q^{*}.\;}$$

**Composition matches matrices.**

$$\boxed{\;R_1R_2 \ \longleftrightarrow\ q_1q_2.\;}$$

**Quaternion to rotation matrix.** With $q = (w,x,y,z)$:

$$R = \begin{bmatrix}
1-2(y^2+z^2) & 2(xy-wz) & 2(xz+wy)\\
2(xy+wz) & 1-2(x^2+z^2) & 2(yz-wx)\\
2(xz-wy) & 2(yz+wx) & 1-2(x^2+y^2)
\end{bmatrix}.$$

**Rotation matrix to quaternion** (numerically stable version — pick the largest component first):

$$w = \tfrac12\sqrt{1+r_{11}+r_{22}+r_{33}}, \quad x = \frac{r_{32}-r_{23}}{4w}, \quad y = \frac{r_{13}-r_{31}}{4w}, \quad z = \frac{r_{21}-r_{12}}{4w},$$

valid when $w$ is not near zero; otherwise use the analogous formula built around whichever of $x,y,z$ is largest. Dividing by a small $w$ is the one numerical trap in the conversion.

**Integrating angular velocity.** With body angular velocity $\boldsymbol\omega$:

$$\boxed{\;\dot q = \tfrac12\,q\,(0,\boldsymbol\omega),\;}$$

then renormalize: $q \leftarrow q/\|q\|$. Compare with a rotation matrix, where maintaining $R^{\top}R = I$ requires a Gram–Schmidt pass or an SVD. **Renormalizing a quaternion is one square root and four divisions**, which is why every attitude filter integrates quaternions.

**Spherical linear interpolation (slerp).**

$$\boxed{\;\mathrm{slerp}(q_0,q_1,t) = \frac{\sin\left((1-t)\Omega\right)}{\sin\Omega}q_0+\frac{\sin\left(t\Omega\right)}{\sin\Omega}q_1, \qquad \cos\Omega = q_0\cdot q_1.\;}$$

*In words: walk the great circle on $S^3$ from one orientation to the other at constant angular speed.*

Two practical requirements. **If $q_0\cdot q_1<0$, negate $q_1$ first** — otherwise slerp takes the long way round (up to $360°$ instead of the short arc), a direct consequence of the double cover. And when $\Omega$ is tiny, $\sin\Omega\to0$; fall back to linear interpolation plus renormalization.

**Comparison.**

| | Numbers | Constraints | Singularity | Compose | Interpolate | Renormalize |
|---|---|---|---|---|---|---|
| Matrix | 9 | 6 | none | 27 mults | poor | Gram–Schmidt |
| Euler | 3 | 0 | gimbal lock | awkward | poor | n/a |
| Axis–angle | 4 | 1 | $\theta = 0,180°$ | awkward | good | one division |
| **Quaternion** | **4** | **1** | **none** | **16 mults** | **slerp** | **one division** |

## Picture

![A two-panel figure. Left: the unit sphere in four dimensions drawn schematically as a circle, with two orientations marked as points on it, the great-circle arc between them labelled slerp, and the antipodal point of the second orientation also marked, with an arrow showing that the arc to the antipode is the long way round and a note that q and minus q are the same rotation. Right: a comparison of three interpolation paths between the same two orientations — a quaternion slerp path drawn as a smooth constant-speed arc, an Euler-angle linear blend drawn as a wandering path that speeds up and slows down, and a naive linear blend of quaternions drawn as a chord that must be renormalized and whose speed varies — with a small speed-versus-time plot beneath each.](assets/01-04-fig1.svg)

Left: rotation space is the sphere $S^3$ with antipodes identified. That identification is the double cover, and it is why slerp must check the sign of the dot product before it starts.

Right: the practical payoff. Only slerp moves at constant angular velocity along the shortest path; the other two arrive at the right place by a worse route.

## Worked examples

**Example 1 (the same rotation, four ways).** Take the rotation of [1.3](01-03-euler-fixed-angles-axis-angle.md)'s Example 1: ZYX Euler angles $(30°,45°,60°)$, equivalently $\theta = 69.36°$ about $\hat k = (0.6335, 0.7728, 0.0391)$.

*As a quaternion.*

$$\frac{\theta}{2} = 34.68°, \qquad \cos34.68° = 0.8224, \qquad \sin34.68° = 0.5690.$$

$$q = \left(0.8224,\ 0.5690(0.6335),\ 0.5690(0.7728),\ 0.5690(0.0391)\right) = (0.8224,\ 0.3604,\ 0.4397,\ 0.0222).$$

*Check it is a unit quaternion.*

$$0.8224^2+0.3604^2+0.4397^2+0.0222^2 = 0.6763+0.1299+0.1933+0.0005 = 1.0000\ \checkmark$$

*Back to a matrix.* Using the conversion formula, the $(1,1)$ entry is

$$1-2(y^2+z^2) = 1-2(0.1933+0.0005) = 1-0.3876 = 0.6124,$$

and the $(1,2)$ entry is

$$2(xy-wz) = 2\left[(0.3604)(0.4397)-(0.8224)(0.0222)\right] = 2(0.1585-0.0183) = 0.2804.$$

Both match the matrix from [1.3](01-03-euler-fixed-angles-axis-angle.md) ✓, as do all nine entries.

*The four descriptions, side by side.*

| Representation | Value |
|---|---|
| ZYX Euler | $(30°,\ 45°,\ 60°)$ |
| Axis–angle | $69.36°$ about $(0.6335, 0.7728, 0.0391)$ |
| Quaternion | $(0.8224,\ 0.3604,\ 0.4397,\ 0.0222)$ |
| Matrix | nine entries, six constraints |

*And $-q = (-0.8224, -0.3604, -0.4397, -0.0222)$ describes the identical orientation.* Reading it as axis–angle gives $\theta = 2\arccos(-0.8224) = 290.6°$ about the axis $-\hat k$ — the same physical rotation, taken the long way round the other direction. **Both are correct; they are not two orientations.**

**Example 2 (composition, and slerp).**

*(a) Composition.* Compose a $90°$ rotation about $z$ with a $90°$ rotation about $y$.

$$q_z = \left(\cos45°,\ 0,\ 0,\ \sin45°\right) = (0.7071,\ 0,\ 0,\ 0.7071),$$
$$q_y = \left(\cos45°,\ 0,\ \sin45°,\ 0\right) = (0.7071,\ 0,\ 0.7071,\ 0).$$

Using the product formula with $w_1 = 0.7071$, $\mathbf{v}_1 = (0,0,0.7071)$, $w_2 = 0.7071$, $\mathbf{v}_2 = (0,0.7071,0)$:

$$\text{scalar}: \ w_1w_2-\mathbf{v}_1\cdot\mathbf{v}_2 = 0.5-0 = 0.5,$$

$$\text{vector}: \ w_1\mathbf{v}_2+w_2\mathbf{v}_1+\mathbf{v}_1\times\mathbf{v}_2$$
$$= 0.7071(0,0.7071,0)+0.7071(0,0,0.7071)+(0,0,0.7071)\times(0,0.7071,0)$$
$$= (0,0.5,0)+(0,0,0.5)+(-0.5,0,0) = (-0.5,\ 0.5,\ 0.5).$$

$$q_zq_y = (0.5,\ -0.5,\ 0.5,\ 0.5).$$

*Check the norm:* $4(0.25) = 1$ ✓

*Read it as axis–angle:*

$$\theta = 2\arccos(0.5) = 2(60°) = 120°, \qquad \hat k = \frac{(-0.5,0.5,0.5)}{\sqrt{0.75}} = (-0.5774,\ 0.5774,\ 0.5774).$$

**This matches [1.3](01-03-euler-fixed-angles-axis-angle.md)'s Flashback exactly** — two $90°$ rotations about perpendicular axes compose to $120°$ about a body diagonal — and the quaternion product produced it in eight multiplies, where the matrix route needed twenty-seven and then a trace and a division.

*Verify by rotating a vector.* Applying $q\,(0,\hat x)\,q^{*}$ with $q = (0.5,-0.5,0.5,0.5)$ gives $(0,0,-1) = -\hat z$, matching the matrix result from [1.2](01-02-rotation-matrices.md) Example 2 ✓.

*(b) Slerp.* Interpolate from the identity to a $90°$ rotation about $z$.

$$q_0 = (1,0,0,0), \qquad q_1 = (0.7071,\ 0,\ 0,\ 0.7071).$$

$$\cos\Omega = q_0\cdot q_1 = 0.7071 \quad\Longrightarrow\quad \Omega = 45°.$$

(Note $\Omega = 45°$, half the $90°$ physical rotation — the half-angle again.) Since $\cos\Omega>0$, no sign flip is needed.

| $t$ | $q(t)$ | rotation angle |
|---|---|---|
| 0 | $(1.0000, 0, 0, 0)$ | $0°$ |
| 0.25 | $(0.9808, 0, 0, 0.1951)$ | $22.5°$ |
| 0.50 | $(0.9239, 0, 0, 0.3827)$ | $45.0°$ |
| 0.75 | $(0.8315, 0, 0, 0.5556)$ | $67.5°$ |
| 1 | $(0.7071, 0, 0, 0.7071)$ | $90°$ |

**The rotation angle advances in exactly equal steps of $22.5°$** — constant angular velocity, which is the defining property of slerp and the reason it is the standard for orientation trajectories in [3.5](03-05-cartesian-trajectories-via-points.md).

*Working one entry by hand, at $t = 0.5$:*

$$\frac{\sin(0.5\cdot45°)}{\sin45°} = \frac{\sin22.5°}{\sin45°} = \frac{0.3827}{0.7071} = 0.5412,$$

so $q(0.5) = 0.5412\,q_0+0.5412\,q_1 = 0.5412(1.7071,\ 0,\ 0,\ 0.7071) = (0.9239,\ 0,\ 0,\ 0.3827)$ ✓.

*Contrast with the alternatives.* Linearly blending the two quaternions and renormalizing (**nlerp**) would give, at $t = 0.5$, the same answer here — because the endpoints are symmetric — but at $t = 0.25$ it gives a rotation angle of $21.4°$ rather than $22.5°$. The error is small for a $90°$ arc and grows sharply for wider ones; nlerp is used in games where the cost of two sines matters and the arc is short, and slerp everywhere accuracy does.

Blending the *Euler angles* linearly is worse still: for a general pair of orientations the path bulges away from the great circle, the angular speed varies by tens of percent, and near gimbal lock it can swing wildly. **Interpolate quaternions; convert to Euler only for display.**

## Watch out

- **You might forget the half-angle.** $q = (\cos(\theta/2),\ \hat k\sin(\theta/2))$. Using $\theta$ instead of $\theta/2$ gives a quaternion that rotates by twice what you wanted.
- **You might treat $q$ and $-q$ as different orientations.** They are the same rotation. Comparing quaternions requires comparing $|q_0\cdot q_1|$ to 1, not $q_0$ to $q_1$.
- **You might slerp without checking the sign.** If $q_0\cdot q_1<0$, negate one first, or you get the long way round.
- **You might mix conventions.** Hamilton (used here, and in robotics and physics) versus JPL (used in some aerospace) differ in the sign of the vector part and the order of composition. Mixing them silently reverses rotations. Also watch storage order: $(w,x,y,z)$ versus $(x,y,z,w)$ — libraries disagree.
- **You might skip renormalizing.** Integration accumulates error until $\|q\|\neq1$ and the "rotation" starts scaling vectors. Renormalize every step; it is nearly free.
- **You might divide by a small $w$** when converting a matrix to a quaternion. Use the branch that divides by the largest component.
- **You might expect quaternion multiplication to commute.** $q_1q_2\neq q_2q_1$, exactly as with matrices — and for the same reason.
- **You might think quaternions are hard to visualize.** They are, and that is fine: convert to axis–angle when you need to *see* what a quaternion is doing, and keep the quaternion for computing.

## One-liner

> A unit quaternion packs an axis and a *half*-angle into four numbers with one constraint — no singularity, cheap composition, one-division renormalization, and slerp for constant-speed interpolation — at the price of a double cover in which $q$ and $-q$ mean the same thing.

## Problems

**P1 (🟢)** A rotation is $120°$ about the axis $(1,1,1)/\sqrt3$. (a) Find the unit quaternion. (b) Verify its norm. (c) Convert it to a rotation matrix and read the columns. (d) Write the quaternion of the inverse rotation.

**P2 (🟡)** Compose a $60°$ rotation about $z$ with a $90°$ rotation about $x$ (in that order, so $q = q_zq_x$). (a) Write both quaternions. (b) Compute the product. (c) Find its equivalent axis and angle. (d) Use it to rotate the vector $(1,0,0)$.

**P3 (🔴)** A robot's wrist must move from orientation $q_0 = (1,0,0,0)$ to $q_1 = (-0.7071, 0, 0, 0.7071)$ over 2 seconds. (a) Compute $q_0\cdot q_1$ and state what it implies. (b) Apply the sign convention and give the corrected $q_1$ and the arc angle $\Omega$. (c) Give the slerp result at $t = 0.5$ s, $1.0$ s and $1.5$ s, and the physical rotation angle at each. (d) Compare with what would happen if the sign check were skipped, quantify the difference in path length and peak angular velocity, and explain why this bug is easy to ship and hard to reproduce.

<details>
<summary>Solutions</summary>

**P1** (a) $$\frac{\theta}{2} = 60°, \qquad \cos60° = 0.5, \qquad \sin60° = 0.8660.$$

$$\hat k = \frac{(1,1,1)}{\sqrt3} = (0.5774,\ 0.5774,\ 0.5774),$$
$$q = \left(0.5,\ 0.8660(0.5774),\ 0.8660(0.5774),\ 0.8660(0.5774)\right) = (0.5,\ 0.5,\ 0.5,\ 0.5).$$

A pleasingly clean result — the $120°$ rotation about the body diagonal is the quaternion with all four components equal.

(b) $$\|q\|^2 = 4(0.25) = 1\ \checkmark$$

(c) With $w = x = y = z = 0.5$:

$$r_{11} = 1-2(y^2+z^2) = 1-2(0.5) = 0, \qquad r_{12} = 2(xy-wz) = 2(0.25-0.25) = 0,$$
$$r_{13} = 2(xz+wy) = 2(0.25+0.25) = 1,$$
$$r_{21} = 2(xy+wz) = 2(0.5) = 1, \qquad r_{22} = 1-2(x^2+z^2) = 0, \qquad r_{23} = 2(yz-wx) = 0,$$
$$r_{31} = 2(xz-wy) = 0, \qquad r_{32} = 2(yz+wx) = 1, \qquad r_{33} = 1-2(x^2+y^2) = 0.$$

$$R = \begin{bmatrix}0&0&1\\1&0&0\\0&1&0\end{bmatrix}.$$

| Column | Vector | Meaning |
|---|---|---|
| 1 | $(0,1,0)$ | the frame's $x$-axis goes to world $+y$ |
| 2 | $(0,0,1)$ | its $y$-axis goes to world $+z$ |
| 3 | $(1,0,0)$ | its $z$-axis goes to world $+x$ |

The cyclic permutation $x\to y\to z\to x$ — exactly the matrix from [1.3](01-03-euler-fixed-angles-axis-angle.md) P1, now reached by a completely different route ✓.

(d) $$q^{-1} = q^{*} = (0.5,\ -0.5,\ -0.5,\ -0.5),$$

which is $120°$ about $-\hat k$, or equivalently $-120°$ about $\hat k$ — the same thing.

**P2** (a) $$q_z = \left(\cos30°,\ 0,\ 0,\ \sin30°\right) = (0.8660,\ 0,\ 0,\ 0.5),$$
$$q_x = \left(\cos45°,\ \sin45°,\ 0,\ 0\right) = (0.7071,\ 0.7071,\ 0,\ 0).$$

(b) With $w_1 = 0.8660$, $\mathbf{v}_1 = (0,0,0.5)$, $w_2 = 0.7071$, $\mathbf{v}_2 = (0.7071,0,0)$:

$$\text{scalar} = w_1w_2-\mathbf{v}_1\cdot\mathbf{v}_2 = 0.8660(0.7071)-0 = 0.6124.$$

$$\mathbf{v}_1\times\mathbf{v}_2 = (0,0,0.5)\times(0.7071,0,0) = \left(0\cdot0-0.5\cdot0,\ 0.5(0.7071)-0\cdot0,\ 0-0\right) = (0,\ 0.3536,\ 0).$$

$$\text{vector} = 0.8660(0.7071,0,0)+0.7071(0,0,0.5)+(0,0.3536,0)$$
$$= (0.6124,0,0)+(0,0,0.3536)+(0,0.3536,0) = (0.6124,\ 0.3536,\ 0.3536).$$

$$q = q_zq_x = (0.6124,\ 0.6124,\ 0.3536,\ 0.3536).$$

*Check the norm:* $2(0.3750)+2(0.1250) = 0.750+0.250 = 1.000$ ✓

(c) $$\theta = 2\arccos(0.6124) = 2(52.24°) = 104.48°.$$

$$\|\mathbf{v}\| = \sqrt{0.3750+0.1250+0.1250} = \sqrt{0.6250} = 0.7906,$$
$$\hat k = \frac{(0.6124,\ 0.3536,\ 0.3536)}{0.7906} = (0.7746,\ 0.4472,\ 0.4472).$$

*Check:* $0.6000+0.2000+0.2000 = 1.0000$ ✓

(d) $$(0,\mathbf{p}') = q\,(0,(1,0,0))\,q^{*}.$$

Rather than grind through two quaternion products, use the matrix conversion. With $w = x = 0.6124$, $y = z = 0.3536$:

$$r_{11} = 1-2(y^2+z^2) = 1-2(0.1250+0.1250) = 1-0.5 = 0.5,$$
$$r_{21} = 2(xy+wz) = 2\left[(0.6124)(0.3536)+(0.6124)(0.3536)\right] = 2(0.2166+0.2166) = 0.8660,$$
$$r_{31} = 2(xz-wy) = 2\left[(0.6124)(0.3536)-(0.6124)(0.3536)\right] = 0.$$

$$\mathbf{p}' = (0.5,\ 0.8660,\ 0).$$

*Sanity check.* The $x$-rotation leaves $\hat x$ alone, and then the $z$-rotation by $60°$ takes $\hat x$ to $(\cos60°,\sin60°,0) = (0.5, 0.866, 0)$ ✓. The composition did exactly what the two rotations should.

**P3** (a) $$q_0\cdot q_1 = (1)(-0.7071)+0+0+0 = -0.7071.$$

**Negative.** The two quaternions are more than $90°$ apart on $S^3$, which means the arc from $q_0$ to $q_1$ as written goes the **long way** around. Because of the double cover, the same physical orientation is also represented by $-q_1$, which is much closer.

(b) $$q_1' = -q_1 = (0.7071,\ 0,\ 0,\ -0.7071),$$
$$q_0\cdot q_1' = +0.7071 \quad\Longrightarrow\quad \Omega = \arccos(0.7071) = 45°.$$

Note what the target orientation actually is: $q_1'$ has $w = 0.7071$ and $z = -0.7071$, so

$$\theta = 2\arccos(0.7071) = 90° \ \text{about}\ -\hat z,$$

i.e. a $90°$ rotation about $z$ in the **negative** direction. The original $q_1$ with $w = -0.7071$ reads as $2\arccos(-0.7071) = 270°$ about $+\hat z$ — the same place, three quarters of the way round instead of one quarter back.

(c) Slerp with $\Omega = 45°$, $\sin\Omega = 0.7071$, over $T = 2$ s so $t_{\rm param} = t/2$:

$$q(t) = \frac{\sin\left((1-t_p)45°\right)}{0.7071}q_0+\frac{\sin\left(t_p\,45°\right)}{0.7071}q_1'.$$

| $t$ | $t_p$ | $q(t)$ | rotation angle |
|---|---|---|---|
| 0.5 s | 0.25 | $(0.9808,\ 0,\ 0,\ -0.1951)$ | $22.5°$ about $-\hat z$ |
| 1.0 s | 0.50 | $(0.9239,\ 0,\ 0,\ -0.3827)$ | $45.0°$ about $-\hat z$ |
| 1.5 s | 0.75 | $(0.8315,\ 0,\ 0,\ -0.5556)$ | $67.5°$ about $-\hat z$ |

*Working $t = 1.0$ s explicitly:*

$$\frac{\sin22.5°}{\sin45°} = \frac{0.3827}{0.7071} = 0.5412,$$
$$q = 0.5412\left[(1,0,0,0)+(0.7071,0,0,-0.7071)\right] = 0.5412(1.7071,\ 0,\ 0,\ -0.7071)$$
$$= (0.9239,\ 0,\ 0,\ -0.3827)\ \checkmark$$

**Equal $22.5°$ steps** — constant angular velocity of $90°/2\ \mathrm{s} = 45°/\mathrm{s}$.

(d) *Without the sign check*, slerp would run from $q_0$ to the un-negated $q_1$, with

$$\cos\Omega = -0.7071 \quad\Longrightarrow\quad \Omega = 135°,$$

tracing the **long arc** on $S^3$.

| | With sign check | Without |
|---|---|---|
| Arc $\Omega$ on $S^3$ | $45°$ | $135°$ |
| Physical rotation traversed | $90°$ | $270°$ |
| Direction | $-\hat z$ | $+\hat z$ |
| Duration | 2 s | 2 s |
| Angular velocity | $45°/\mathrm{s}$ | $135°/\mathrm{s}$ |

**Three times the path and three times the speed**, ending at the identical orientation.

*Why this is a serious bug and not a cosmetic one.*

**It can exceed joint limits.** A wrist that sweeps $270°$ instead of $90°$ may hit a hard stop or wrap a cable, and it does so while executing a motion the operator described as a quarter turn.

**It can exceed velocity limits.** Tripling the angular rate can saturate the actuators, at which point the wrist falls behind the commanded trajectory and the position error grows — with the tool in contact, that is a collision.

**It can sweep through a workspace the planner never checked.** Collision checking is usually done on the planned path. If the executed path is the long way round, it visits configurations that were never tested.

*Why it is easy to ship and hard to reproduce.*

**It only triggers when $q_0\cdot q_1<0$**, which is roughly half of all orientation pairs by measure — but the ones a developer types by hand while testing tend to be small, "nice" rotations where the dot product is comfortably positive. The bug hides through unit testing and surfaces in the field.

**The endpoints are always correct.** The robot arrives exactly where it was told. Any test that checks the final pose passes. Only a test that checks the *path* — its length, its speed profile, or its intermediate configurations — catches it.

**It is representation-dependent, not physical.** The same motion, commanded with $-q_1$ instead of $q_1$, behaves perfectly. So "it worked yesterday" can be literally true, if yesterday's planner happened to emit the other sign.

*The fix is three lines*, and it belongs in every slerp implementation ever written:

$$\text{if } q_0\cdot q_1<0: \quad q_1\leftarrow-q_1.$$

This is the single most common quaternion bug in robotics and graphics, and it exists entirely because $S^3$ double-covers $SO(3)$ — an abstract topological fact with a very concrete failure mode.

</details>

## Flashback

**From Lesson 1.3 (Euler angles, fixed angles, and axis–angle):** A rotation has ZYX Euler angles $(45°, 30°, 0°)$, equivalent to $53.65°$ about $(-0.2195, 0.5299, 0.8192)$. (a) Write the unit quaternion. (b) Verify its norm. (c) State one thing the quaternion makes easy that the Euler angles do not.

<details>
<summary>Solution</summary>

(a) $$\frac{\theta}{2} = 26.82°, \qquad \cos26.82° = 0.8925, \qquad \sin26.82° = 0.4511.$$

$$q = \left(0.8925,\ 0.4511(-0.2195),\ 0.4511(0.5299),\ 0.4511(0.8192)\right)$$
$$= (0.8925,\ -0.0990,\ 0.2390,\ 0.3695).$$

(b) $$0.7966+0.0098+0.0571+0.1365 = 1.0000\ \checkmark$$

(c) **Interpolation.** Blending toward another orientation is a single slerp that moves at constant angular velocity along the shortest path. Linearly blending the Euler triple $(45°,30°,0°)$ toward another triple traces a path that is not the shortest, does not have constant speed, and behaves badly if the pitch approaches $90°$.

*Two more, worth naming:*

**Integration.** Feeding gyro rates into $\dot q = \tfrac12q(0,\boldsymbol\omega)$ and renormalizing is stable at every attitude. The Euler-rate equivalent has a $1/\cos\beta$ in it and blows up at gimbal lock ([1.3](01-03-euler-fixed-angles-axis-angle.md) P3).

**Comparison.** The angle between two orientations is $2\arccos|q_0\cdot q_1|$ — one dot product, and a genuine metric. There is no comparable formula in Euler angles, because the same orientation has two triples and the "distance" between triples is not the distance between orientations.

*What the Euler angles still do better:* a human reads $(45°,30°,0°)$ and immediately pictures the attitude. Nobody looks at $(0.8925,-0.0990,0.2390,0.3695)$ and pictures anything. **That is the entire remaining case for Euler angles, and it is a real one** — which is why production systems compute in quaternions and display in Euler angles, converting only at the boundary.

</details>

## Connections

- **Backward:** the axis–angle pair the quaternion encodes is [1.3](01-03-euler-fixed-angles-axis-angle.md)'s; the non-commutativity it inherits is [1.2](01-02-rotation-matrices.md)'s.
- **Forward:** [3.5](03-05-cartesian-trajectories-via-points.md) uses slerp to interpolate tool orientation along a Cartesian path; [4.5](04-05-localization.md)'s attitude filters integrate quaternions rather than matrices.
- **Sideways:** unit quaternions are $SU(2)$, the double cover of $SO(3)$ — the same group whose two-valuedness is the reason a spin-$\tfrac12$ particle needs a $720°$ rotation to return to itself in [`quantum-mechanics`](../../quantum-mechanics/syllabus.md). The algebra itself is a division ring, one of only three finite-dimensional ones over the reals, a result from [`abstract-algebra`](../../abstract-algebra/syllabus.md).
