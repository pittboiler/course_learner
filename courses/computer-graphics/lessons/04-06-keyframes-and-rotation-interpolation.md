# Computer Graphics · Lesson 4.6: Keyframes & Rotation Interpolation

> ⏱ ~15 min · Module 4: Geometric Modeling & Animation · Builds on: [4.3 (Hermite and Catmull–Rom)](04-03-splines-and-continuity.md), [`robotics` 1.4 (quaternions and slerp)](../../robotics/lessons/01-04-quaternions.md), [`robotics` 1.3 (Euler angles)](../../robotics/lessons/01-03-euler-fixed-angles-axis-angle.md) · Unlocks: [4.7 (skinning)](04-07-skinning-and-deformation.md)

## Why this matters

An animator doesn't draw 24 poses a second. They set a few **keyframes** — the ball here at frame 0, there at frame 24 — and the computer fills in the rest. Everything about how the result *feels* is decided by that filling-in: whether the ball lurches into motion or eases, whether it glides through a keyframe or jerks, whether a turning head swings the short way round at constant speed or wobbles and flips.

For positions, the curve machinery of [4.2](04-02-bezier-curves-de-casteljau.md)–[4.3](04-03-splines-and-continuity.md) applies directly, with time as the parameter. Rotations are different: the set of orientations is not a vector space, and every naive way of averaging two of them — averaging matrices, averaging Euler angles — produces something that is not a rotation or takes a strange path. [`robotics` 1.4](../../robotics/lessons/01-04-quaternions.md) owns quaternions and slerp; this lesson is about using them for animation, and pricing the shortcuts.

## The idea

**Interpolating in time is choosing a curve in time.** Between two keyframes, linear interpolation moves at constant speed, which means the speed jumps from zero to full the instant the motion starts. Real objects accelerate. An **easing curve** remaps time so the motion starts and ends gently. Through many keyframes, a Catmull–Rom spline passes through every key with continuous velocity.

**Rotations need their own averaging.** Halfway between "facing north" and "facing east" should be "facing northeast", reached by turning steadily. If you average the two rotation *matrices* entry by entry, you get a matrix that also shrinks things. If you average the Euler angles, you get a real rotation but along a detour, and near gimbal lock the detour becomes wild. **Quaternions** represent a rotation as a point on a 4D sphere; walking the great-circle arc between two such points at constant speed — **slerp** — turns at constant angular velocity along the shortest path. **nlerp** takes the straight chord and projects back to the sphere: same path, cheaper, slightly uneven speed.

## The formal version

**Keyframe interpolation.** Keys $(t_k, \mathbf{x}_k)$. With local parameter $s = (t - t_k)/(t_{k+1} - t_k) \in [0,1]$:

- **linear:** $\mathbf{x}(s) = (1 - s)\mathbf{x}_k + s\,\mathbf{x}_{k+1}$ — $C^0$; velocity jumps at every key;
- **Catmull–Rom** ([4.3](04-03-splines-and-continuity.md)) through all keys — $C^1$ for uniformly spaced keys;
- **eased:** $\mathbf{x}(s) = \mathbf{x}_k + e(s)(\mathbf{x}_{k+1} - \mathbf{x}_k)$ for an easing function $e$ with $e(0) = 0$, $e(1) = 1$.

**Smoothstep**, the standard ease-in-out, is the cubic Hermite with zero end tangents:

$$e(s) = 3s^2 - 2s^3, \qquad e'(s) = 6s(1 - s), \qquad e'(0) = e'(1) = 0, \qquad \max e' = e'(\tfrac12) = 1.5.$$

In words: it starts and stops at rest, and pays for that by peaking at $1.5\times$ the average speed at the midpoint. Animation packages expose easing as a cubic Bézier curve in the (time, value) plane whose handles the animator drags; its time coordinate must be monotonic or the value would be multi-valued in time. *(card: [Easing curves](../reference.md#easing-curves))*

**Why not interpolate matrices.** For rotations $R_0$, $R_1$, the blend $(1 - s)R_0 + sR_1$ is generally **not** a rotation: its columns are shorter than 1 and its determinant is less than 1, so it shrinks and skews the object mid-motion.

**Why not interpolate Euler angles.** Blending angle triples component-wise does produce rotations, but (i) the path is not the shortest rotation between the two orientations and its angular velocity is not constant; (ii) two very different triples can describe nearly the same orientation, so the blend can take a large detour; (iii) near gimbal lock ([`robotics` 1.3](../../robotics/lessons/01-03-euler-fixed-angles-axis-angle.md)) small orientation changes need huge angle changes. *(card: [Euler-angle interpolation](../reference.md#euler-angle-interpolation))*

**Quaternions for animation.** A unit quaternion $q = \big(\cos\tfrac\theta2,\ \sin\tfrac\theta2\,\hat{\mathbf{k}}\big)$ represents rotation by $\theta$ about unit axis $\hat{\mathbf{k}}$; $q$ and $-q$ are the same rotation ([`robotics` 1.4](../../robotics/lessons/01-04-quaternions.md)). With $\cos\Omega = q_0\cdot q_1$ (4D dot product),

$$\operatorname{slerp}(q_0, q_1; s) = \frac{\sin\big((1 - s)\Omega\big)}{\sin\Omega}\,q_0 + \frac{\sin(s\,\Omega)}{\sin\Omega}\,q_1, \qquad \operatorname{nlerp}(q_0, q_1; s) = \frac{(1 - s)q_0 + s\,q_1}{\lVert(1 - s)q_0 + s\,q_1\rVert}.$$

Slerp moves at constant angular speed along the great arc; the rotation angle between $q_0$ and $q_1$ is $2\Omega$. Nlerp follows the same arc with speed that is fastest in the middle. **If $q_0\cdot q_1 < 0$, negate $q_1$ first**, or both take the long way round. *(card: [Slerp and nlerp](../reference.md#slerp-and-nlerp))*

## Picture

![A plot of position from 0 to 10 against frame from 0 to 24, with grey keyframe dots at frame 0, position 0 and frame 24, position 10. A dashed grey straight line, labelled linear, starts and stops abruptly. A blue S-shaped curve, labelled smoothstep 3 t squared minus 2 t cubed, eases in and out, and is marked at 1.56 at frame 6. A coral parabola, labelled ease-in t squared, starts gently but arrives at full speed](assets/04-06-fig1.svg)

The slope of each curve is the object's speed. The blue curve is flat at both keys — the object is at rest there — and steepest in the middle; the dashed line has the same slope everywhere, including at frame 0, where the object goes from stationary to full speed in zero time.

## Worked examples

**Example 1 (mechanical): eased motion.** A ball moves from $x = 0$ at frame 0 to $x = 10$ at frame 24.

*Linear:* at frame 6, $s = 0.25$, $x = 2.5$. Velocity is $10/24 = 0.417$ units per frame everywhere — including the first frame, a jump from 0.

*Smoothstep:* $e(0.25) = 3(0.0625) - 2(0.015625) = 0.1875 - 0.03125 = 0.15625$, so $x = \mathbf{1.5625}$ at frame 6. Velocity is $10\,e'(s)/24$: $0$ at frames 0 and 24, and $10(1.5)/24 = \mathbf{0.625}$ units per frame at frame 12 — 1.5 times the linear speed. The ball has covered only 16% of the distance after a quarter of the time, and makes up for it in the middle.

**Example 2 (why you'd care): three ways to turn halfway.** A turret rotates from the identity to $90°$ about $z$.

*Matrix blend:* $M = \tfrac12(I + R_z(90°)) = \begin{pmatrix} 0.5 & -0.5 & 0 \\ 0.5 & 0.5 & 0 \\ 0 & 0 & 1 \end{pmatrix}$. It sends $(1,0,0)$ to $(0.5, 0.5, 0)$, of length $\mathbf{0.707}$, and $\det M = \mathbf{0.5}$. Halfway through the turn the turret is at $45°$ — but **shrunk to 71%** in the $xy$-plane and half its area.

*Quaternion slerp:* $q_0 = (1, 0, 0, 0)$, $q_1 = (\cos45°, 0, 0, \sin45°)$, $\Omega = 45°$. At $s = 0.5$ both weights are $\sin 22.5°/\sin 45° = 0.541$, giving $q = (0.924, 0, 0, 0.383) = (\cos 22.5°, 0, 0, \sin 22.5°)$: exactly $45°$ about $z$, no shrinking.

*Euler angles on a harder case.* Rotating from the identity to $R_z(180°)R_x(180°)$ — which equals $R_y(180°)$, a single half-turn about $y$. Blend the Euler angles $(z, x) = (0°, 0°) \to (180°, 180°)$: halfway is $R_z(90°)R_x(90°)$, whose trace is 0, so its rotation angle is $\arccos\frac{0 - 1}{2} = \mathbf{120°}$. Slerp's halfway point is a $90°$ turn about $y$. Summing the small rotations between successive frames along the Euler path gives a total of about $255°$ of turning, against slerp's direct $180°$: the Euler blend wanders off the shortest path and spins the object through extra motion the animator never keyed.

## Watch out

- **You might think** negating a quaternion changes the rotation — **but actually** $q$ and $-q$ are the same orientation, and that is exactly the trap: interpolating from $q_0$ to $-q_1$ instead of $q_1$ takes the $360° - 2\Omega$ long way round. Always check the sign of $q_0 \cdot q_1$ and flip if negative.
- **You might think** nlerp is an inaccurate approximation of slerp — **but actually** it traces **the same path** with the correct endpoints; only the speed along it is non-uniform, and the error is small for small angles. Game engines use nlerp for blending animation poses every frame for exactly this reason, and slerp where constant angular speed matters (cameras).
- **You might think** easing curves only matter for style — **but actually** a velocity jump at a key is a physical impossibility the eye reads instantly. A Catmull–Rom spline through unevenly spaced keys (in time) can also overshoot, making a hand pass *beyond* a contact pose before coming back; animators flatten tangents at such keys.

## One-liner

> Interpolate positions with splines in time and ease the ends ($3s^2 - 2s^3$ stops at rest and peaks at 1.5×); never blend rotation matrices or Euler angles — slerp unit quaternions after flipping $q_1$ if $q_0 \cdot q_1 < 0$, or nlerp when speed can wobble.

## Problems

**P1 (🟢)** A door swings from $0°$ at frame 10 to $90°$ at frame 40 with smoothstep easing.
(a) What is its angle at frame 20?
(b) What is its angular speed (degrees per frame) at frame 25, and how does that compare with linear interpolation?
(c) What is its speed at frame 10?

**P2 (🟡)** Rotate from the identity $q_0 = (1, 0, 0, 0)$ to $120°$ about $z$.
(a) Write $q_1$ and find $\Omega$.
(b) Compute slerp and nlerp at $s = 0.25$, and the rotation angle each represents.
(c) A file stores the target as $-q_1$. What does slerp at $s = 0.5$ produce if you forget to check the sign, and what angle and direction does that represent?

**P3 (🔴)** (a) Show that $M = \tfrac12\big(R_z(0°) + R_z(90°)\big)$ is not a rotation by computing its determinant and the length of $M(1,0,0)$. Generalize: for $\tfrac12(I + R_z(\theta))$, what is the length of the image of a unit vector in the $xy$-plane, and what happens at $\theta = 180°$?
(b) Verify that $R_z(180°)R_x(180°) = R_y(180°)$.
(c) Show that $R_z(90°)R_x(90°)$ is a rotation by $120°$, and find its axis.

<details>
<summary>Solutions</summary>

**P1**

(a) $s = (20 - 10)/(40 - 10) = \tfrac13$. $e = 3(\tfrac19) - 2(\tfrac1{27}) = \tfrac13 - \tfrac{2}{27} = \tfrac{7}{27} = 0.2593$. Angle $= 90 \times 0.2593 = \mathbf{23.3°}$ (linear would give $30°$).

(b) $s = 0.5$, $e'(0.5) = 1.5$. Angular speed $= 90 \times 1.5/30 = \mathbf{4.5°}$ per frame, against linear's $3°$ per frame — $1.5\times$.

(c) $e'(0) = 0$: **0°** per frame. The door starts from rest.

**P2**

(a) $q_1 = (\cos 60°,\ 0,\ 0,\ \sin 60°) = \mathbf{(0.5,\ 0,\ 0,\ 0.866)}$. $\cos\Omega = q_0\cdot q_1 = 0.5$, so $\Omega = \mathbf{60°}$ (half the $120°$ rotation).

(b) *Slerp:* weights $\sin 45°/\sin 60° = 0.8165$ and $\sin 15°/\sin 60° = 0.2989$:

$$q = 0.8165(1,0,0,0) + 0.2989(0.5, 0, 0, 0.866) = (0.966,\ 0,\ 0,\ 0.259) = (\cos 15°, 0, 0, \sin 15°).$$

Rotation angle $2 \times 15° = \mathbf{30°}$ — exactly a quarter of $120°$.

*Nlerp:* $0.75(1,0,0,0) + 0.25(0.5, 0, 0, 0.866) = (0.875,\ 0,\ 0,\ 0.2165)$, length $0.9014$, normalized $(0.9707, 0, 0, 0.2402)$. Angle $2\arccos 0.9707 = \mathbf{27.8°}$ — $2.2°$ behind slerp at the quarter mark (and it catches up by the midpoint, where both give $60°$).

(c) $q_0 \cdot (-q_1) = -0.5$, so $\Omega = 120°$. Slerp at $0.5$: weights $\sin 60°/\sin 120° = 1$ each, giving $q_0 - q_1 = (0.5,\ 0,\ 0,\ -0.866)$, a rotation of $\mathbf{120°}$ about $-z$, i.e. $-120°$ about $z$. The object is heading the long way — through $-120°$ to arrive at $-240° \equiv +120°$ — so at the halfway frame it faces the opposite side from where the short path would have it ($60°$).

**P3**

(a) $M = \begin{pmatrix} 0.5 & -0.5 & 0 \\ 0.5 & 0.5 & 0 \\ 0 & 0 & 1 \end{pmatrix}$: $\det M = 0.25 + 0.25 = \mathbf{0.5} \ne 1$, and $M(1,0,0) = (0.5, 0.5, 0)$ has length $\mathbf{0.707} \ne 1$. Not a rotation.

In general, $\tfrac12(\mathbf{u} + R\mathbf{u})$ for a unit $\mathbf{u}$ in the plane is the midpoint of a chord subtending angle $\theta$ on the unit circle, at distance $\cos(\theta/2)$ from the centre. At $\theta = 180°$ the length is $\mathbf{0}$: the blend of a half-turn collapses the plane to a line, $\det = 0$.

(b) $R_z(180°) = \text{diag}(-1, -1, 1)$ and $R_x(180°) = \text{diag}(1, -1, -1)$, so the product is $\text{diag}(-1, 1, -1)$, which is $R_y(180°)$ ($\cos 180° = -1$ in the $xx$ and $zz$ entries, $1$ in $yy$). ✓

(c) $R_x(90°)$ maps $(x,y,z) \mapsto (x, -z, y)$ and $R_z(90°)$ maps $(x,y,z) \mapsto (-y, x, z)$, so the product maps $(x, y, z) \mapsto (z, x, y)$:

$$R_z(90°)R_x(90°) = \begin{pmatrix} 0 & 0 & 1 \\ 1 & 0 & 0 \\ 0 & 1 & 0 \end{pmatrix}.$$

Trace $0 = 1 + 2\cos\theta$ gives $\cos\theta = -\tfrac12$, $\theta = \mathbf{120°}$. The axis is fixed by the map $(x,y,z) \mapsto (z,x,y)$: $(1,1,1)/\sqrt3$. A cyclic permutation of the axes is a third of a turn about the diagonal.

</details>

## Flashback

**From Lesson 4.4 (Bézier patches):** A bicubic patch has $\mathbf{P}_{ij} = (i, j, z_{ij})$ with $z_{ij} = 4$ for the four interior points ($i, j \in \{1, 2\}$) and $0$ elsewhere.
(a) Find $\mathbf{S}(0.5, 0.25)$.
(b) What height does the convex hull property guarantee the surface stays below?
(c) Which control points does the boundary curve $\mathbf{S}(u, 0)$ depend on, and what shape is it?

<details>
<summary>Solution</summary>

(a) $u$-weights $(\tfrac18, \tfrac38, \tfrac38, \tfrac18)$; $v$-weights at $0.25$: $(0.4219,\ 0.4219,\ 0.1406,\ 0.0156)$. Only $i, j \in \{1,2\}$ contribute:

$$z = 4\,(0.375 + 0.375)(0.4219 + 0.1406) = 4(0.75)(0.5625) = 1.6875.$$

$\mathbf{S}(0.5, 0.25) = \mathbf{(1.5,\ 0.75,\ 1.6875)}$.

(b) Below $z = 4$, the largest control height (and above $0$). The true maximum, at the centre, is $4 \times (0.75)^2 = 2.25$.

(c) Only $\mathbf{P}_{00}, \mathbf{P}_{10}, \mathbf{P}_{20}, \mathbf{P}_{30}$, all at height 0 and collinear along $y = 0$: the boundary is the **straight segment** from $(0,0,0)$ to $(3,0,0)$.

</details>

## Connections

- **Backward:** eased and Catmull–Rom keyframes are [4.3](04-03-splines-and-continuity.md)'s Hermite segments with time as the parameter; the quaternion algebra and slerp's derivation are [`robotics` 1.4](../../robotics/lessons/01-04-quaternions.md)'s; gimbal lock is [`robotics` 1.3](../../robotics/lessons/01-03-euler-fixed-angles-axis-angle.md)'s; the pole singularity of [1.4](01-04-the-camera-and-view-transform.md)'s look-at camera is one more reason to interpolate camera orientation with quaternions.
- **Forward:** [4.7](04-07-skinning-and-deformation.md) interpolates a joint rotation per bone per frame, then blends the resulting matrices across the skin — where the matrix-blend shrinkage of Example 2 reappears as a real artifact.
- **Sideways:** slerp is a geodesic on the 3-sphere, the rotation-group version of [`differential-geometry` 4.3](../../differential-geometry/lessons/04-03-geodesics.md)'s geodesics; [`robotics` 3.5](../../robotics/lessons/03-05-cartesian-trajectories-via-points.md) uses the same interpolation for a tool's orientation along a Cartesian path, where smooth angular velocity is a torque requirement rather than an aesthetic one.
