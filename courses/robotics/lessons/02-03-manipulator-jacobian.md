# Robotics & Kinematics · Lesson 2.3: The manipulator Jacobian

> ⏱ ~15 min · Module 2: Inverse kinematics and the Jacobian · Builds on: [1.6 Denavit–Hartenberg and forward kinematics](01-06-denavit-hartenberg-forward-kinematics.md), [1.2 Rotation matrices](01-02-rotation-matrices.md) · Unlocks: [2.4 Singularities](02-04-singularities.md), [2.5 Statics and the Jacobian transpose](02-05-statics-jacobian-transpose.md)

## Why this matters

The Jacobian is the single most useful object in manipulator kinematics. [2.2](02-02-inverse-kinematics-numerical.md) already used it as the derivative in a Newton iteration; this lesson builds it properly and shows that it does far more than that.

It maps joint velocities to tool velocity, which is what a velocity controller needs. Its transpose maps tool forces to joint torques ([2.5](02-05-statics-jacobian-transpose.md)), which is what a force controller needs. Where it loses rank, the arm loses a degree of freedom ([2.4](02-04-singularities.md)). Its condition number measures how well the arm is positioned for its task. And it appears again in the dynamics of [3.2](03-02-manipulator-dynamics-equation.md), mapping link velocities into kinetic energy.

The remarkable part is that it can be written down **column by column, geometrically**, without differentiating anything.

## The idea

The forward map $\mathbf{x} = \mathbf{f}(\mathbf{q})$ is nonlinear. Differentiate it and you get a linear relation between rates:

$$\dot{\mathbf{x}} = J(\mathbf{q})\,\dot{\mathbf{q}}, \qquad J = \frac{\partial\mathbf{f}}{\partial\mathbf{q}}.$$

You could compute those partial derivatives symbolically from the DH product. Nobody does, because there is a much better way.

**Think about what one joint does with the others frozen.** A revolute joint $i$ rotates everything beyond it about its own axis $\hat z_{i-1}$. A point at the tool, at position $\mathbf{p}_n$, is at displacement $\mathbf{p}_n-\mathbf{p}_{i-1}$ from a point on that axis, so its velocity is the familiar rigid-body formula

$$\mathbf{v} = \boldsymbol\omega\times\mathbf{r} = \dot\theta_i\,\hat z_{i-1}\times\left(\mathbf{p}_n-\mathbf{p}_{i-1}\right),$$

and the tool's angular velocity is simply $\dot\theta_i\hat z_{i-1}$.

A prismatic joint is even easier: it slides everything beyond it along $\hat z_{i-1}$, contributing $\dot d_i\hat z_{i-1}$ to the linear velocity and **nothing** to the angular velocity.

So each column of $J$ is one joint's contribution, computable from quantities the forward kinematics already produced — the axis directions $\hat z_{i-1}$ and the origins $\mathbf{p}_{i-1}$, which are the third and fourth columns of the accumulated transforms. **The Jacobian is a by-product of forward kinematics**, obtained by walking the chain once and reading off two columns of each partial product.

The output $\dot{\mathbf{x}}$ is a six-vector called a **twist**: three linear velocities stacked on three angular ones. It is a velocity of the *tool frame as a rigid body*, not of a point, which matters when the tool is not a point.

## The formal version

**The velocity relation.**

$$\boxed{\;\begin{bmatrix}\mathbf{v}\\\boldsymbol\omega\end{bmatrix} = J(\mathbf{q})\,\dot{\mathbf{q}}, \qquad J\in\mathbb{R}^{6\times n}.\;}$$

The top three rows are the **linear velocity Jacobian** $J_v$, the bottom three the **angular velocity Jacobian** $J_\omega$.

**Column construction (the geometric Jacobian).** With all frames expressed in the base frame $\{0\}$:

$$\boxed{\;J_i = \begin{cases}\begin{bmatrix}\hat z_{i-1}\times\left(\mathbf{p}_n-\mathbf{p}_{i-1}\right)\\\hat z_{i-1}\end{bmatrix} & \text{revolute}\\[3ex] \begin{bmatrix}\hat z_{i-1}\\\mathbf{0}\end{bmatrix} & \text{prismatic}\end{cases}\;}$$

where $\hat z_{i-1}$ is the third column of $^0_{i-1}T$ and $\mathbf{p}_{i-1}$ is its fourth.

*In words: a revolute joint sweeps the tool around its axis and rotates it; a prismatic joint pushes the tool along its axis and does not rotate it at all.*

**Everything must be in one frame.** Mixing frames is the most common error in building a Jacobian, and it produces a matrix that looks reasonable and is wrong.

**Planar simplification.** For a planar arm all $\hat z_i = \hat k$ (out of the plane) and the cross product collapses:

$$\hat k\times(\mathbf{p}_n-\mathbf{p}_{i-1}) = \begin{bmatrix}-(y_n-y_{i-1})\\x_n-x_{i-1}\\0\end{bmatrix},$$

so for an $n$-link planar arm with $c_i = \theta_1+\cdots+\theta_i$:

$$J = \begin{bmatrix}
-\sum_{i\geq1}L_is_{c_i} & -\sum_{i\geq2}L_is_{c_i} & \cdots & -L_ns_{c_n}\\
\sum_{i\geq1}L_ic_{c_i} & \sum_{i\geq2}L_ic_{c_i} & \cdots & L_nc_{c_n}\\
1&1&\cdots&1
\end{bmatrix},$$

with the third row for $\dot\phi$. **Each column is the same expression with fewer leading terms** — column $j$ omits the links before joint $j$, because those links do not move when joint $j$ rotates.

**Analytical versus geometric Jacobian.** The geometric Jacobian's angular rows give $\boldsymbol\omega$, a genuine physical angular velocity. If instead you differentiate a *parameterization* of orientation (Euler angles, say), you get the **analytical** Jacobian $J_a$, and the two differ by the mapping between angle rates and angular velocity:

$$\boldsymbol\omega = T(\boldsymbol\phi)\dot{\boldsymbol\phi} \quad\Longrightarrow\quad J = \begin{bmatrix}I&0\\0&T(\boldsymbol\phi)\end{bmatrix}J_a.$$

$T$ is singular at gimbal lock ([1.3](01-03-euler-fixed-angles-axis-angle.md)), so **the analytical Jacobian has representation singularities the geometric one does not have**. Use the geometric Jacobian unless you specifically need angle rates.

**What it is used for.**

| Use | Relation | Lesson |
|---|---|---|
| Velocity control | $\dot{\mathbf{x}} = J\dot{\mathbf{q}}$ | this one |
| Numerical IK | $\Delta\mathbf{q} = J^{+}\Delta\mathbf{x}$ | [2.2](02-02-inverse-kinematics-numerical.md) |
| Singularity detection | $\operatorname{rank}J<6$ | [2.4](02-04-singularities.md) |
| Statics | $\boldsymbol\tau = J^{\top}\mathbf{F}$ | [2.5](02-05-statics-jacobian-transpose.md) |
| Dynamics | $M(\mathbf{q}) = \sum m_iJ_{v_i}^{\top}J_{v_i}+\cdots$ | [3.2](03-02-manipulator-dynamics-equation.md) |
| Force control | $\mathbf{F} = J^{-\top}\boldsymbol\tau$ | [4.3](04-03-force-hybrid-control.md) |

**Manipulability.** The **manipulability ellipsoid** is the image of the unit ball $\|\dot{\mathbf{q}}\| = 1$ under $J$: the set of tool velocities achievable with unit joint speed. Its axes are the singular vectors of $J$ and its semi-axis lengths are the singular values $\sigma_i$. A round ellipsoid means the arm is equally capable in all directions; a flat one means it is nearly singular.

$$w = \sqrt{\det\left(JJ^{\top}\right)} = \prod_i\sigma_i$$

is **Yoshikawa's manipulability measure** — the ellipsoid's volume, and a standard secondary objective for redundancy resolution ([2.2](02-02-inverse-kinematics-numerical.md)).

**Dimensions and rank.**

| $n$ vs task | $J$ shape | Situation |
|---|---|---|
| $n<6$ | tall | cannot achieve arbitrary twists |
| $n = 6$ | square | generically invertible |
| $n>6$ | wide | redundant, null space of dimension $n-6$ |

Rank loss at *any* $n$ is a singularity, and rank is what matters — not the shape.

## Picture

![A two-panel figure. Left: a three-link planar arm with each joint's contribution to the tool velocity drawn as a separate arrow at the tool — the first joint's contribution perpendicular to the vector from joint one to the tool, the second perpendicular to the vector from joint two to the tool, and the third perpendicular to the last link — with each arrow labelled as the corresponding Jacobian column times its joint rate, and the three arrows summed head to tail to give the total tool velocity. Right: a manipulability ellipse drawn at the tool for two different arm configurations — a well-conditioned pose giving a nearly circular ellipse, and a nearly-extended pose giving a long thin ellipse whose short axis points along the arm — with the singular values marked as the semi-axes.](assets/02-03-fig1.svg)

Left: the column construction is literally a picture. Each joint contributes a velocity perpendicular to the line from its axis to the tool, with magnitude proportional to that distance — and the columns add.

Right: the manipulability ellipsoid. The short axis is the direction the arm can barely move in, and it collapses to zero at a singularity.

## Worked examples

**Example 1 (a planar 3R arm, column by column).** $L = (0.4, 0.3, 0.2)$ m at $\mathbf{q} = (30°, 45°, -20°)$. Build $J$ geometrically and check it.

*Cumulative angles and joint positions.*

$$c_1 = 30°, \qquad c_2 = 75°, \qquad c_3 = 55°.$$

$$\mathbf{p}_0 = (0,0), \qquad \mathbf{p}_1 = (0.4\cos30°,\ 0.4\sin30°) = (0.3464,\ 0.2000),$$
$$\mathbf{p}_2 = \mathbf{p}_1+(0.3\cos75°,\ 0.3\sin75°) = (0.4241,\ 0.4898),$$
$$\mathbf{p}_3 = \mathbf{p}_2+(0.2\cos55°,\ 0.2\sin55°) = (0.5388,\ 0.6536).$$

*Column 1.* Joint 1's axis is $\hat k$ at the origin, so

$$J_1 = \hat k\times(\mathbf{p}_3-\mathbf{p}_0) = \hat k\times(0.5388,\ 0.6536,\ 0) = (-0.6536,\ 0.5388,\ 0),$$

and the angular row is 1.

*Column 2.* Joint 2's axis is $\hat k$ at $\mathbf{p}_1$:

$$\mathbf{p}_3-\mathbf{p}_1 = (0.1924,\ 0.4536,\ 0), \qquad J_2 = \hat k\times(\cdot) = (-0.4536,\ 0.1924,\ 0).$$

*Column 3.* Joint 3's axis is $\hat k$ at $\mathbf{p}_2$:

$$\mathbf{p}_3-\mathbf{p}_2 = (0.1147,\ 0.1638,\ 0), \qquad J_3 = (-0.1638,\ 0.1147,\ 0).$$

*Assembling* (dropping the trivial $z$-velocity and $\omega_x,\omega_y$ rows, which are identically zero for a planar arm):

$$J = \begin{bmatrix}-0.6536&-0.4536&-0.1638\\0.5388&0.1924&0.1147\\1&1&1\end{bmatrix}.$$

**Notice the pattern.** Column $i$ is $\hat k\times(\mathbf{p}_3-\mathbf{p}_{i-1})$, and $|\mathbf{p}_3-\mathbf{p}_{i-1}|$ shrinks as $i$ grows — the later joints have less leverage on the tool because they are closer to it. That is why the columns get numerically smaller left to right, and it is a good structural check on any planar Jacobian.

*Cross-check the first column.* For any planar arm, $J_1 = \hat k\times\mathbf{p}_n = (-y_n,\ x_n)$. Here $(-0.6536,\ 0.5388)$ ✓ — the first column is always minus-$y$, plus-$x$ of the tool position, and it takes two seconds to verify.

*Using it.* At joint rates $\dot{\mathbf{q}} = (0.5,\ -0.3,\ 0.2)$ rad/s:

$$\dot{\mathbf{x}} = J\dot{\mathbf{q}} = \begin{bmatrix}-0.6536(0.5)-0.4536(-0.3)-0.1638(0.2)\\0.5388(0.5)+0.1924(-0.3)+0.1147(0.2)\\0.5-0.3+0.2\end{bmatrix} = \begin{bmatrix}-0.3268+0.1361-0.0328\\0.2694-0.0577+0.0229\\0.4\end{bmatrix}$$

$$= \begin{bmatrix}-0.2235\\0.2346\\0.4000\end{bmatrix},$$

i.e. the tool moves at $(-0.224,\ 0.235)$ m/s and rotates at $0.4$ rad/s. **The angular row being all ones is a planar-arm signature:** every revolute joint contributes its full rate to the tool's rotation, so $\dot\phi = \sum\dot\theta_i$ regardless of geometry.

*Conditioning.*

$$\det J = 0.0849, \qquad \text{healthy — far from singular.}$$

**Example 2 (a spatial 3R arm, and reading the structure).** The arm of [1.6](01-06-denavit-hartenberg-forward-kinematics.md) P3 — a vertical waist, a 0.3 m column, then a planar 2R sub-arm with links 0.5 and 0.4 m — at $\mathbf{q} = (30°, 45°, -30°)$, where the tool is at $(0.6408,\ 0.3700,\ 0.7571)$.

*The axis directions and origins* come straight from the accumulated transforms:

$$\hat z_0 = (0,0,1), \qquad \mathbf{p}_0 = (0,0,0),$$
$$\hat z_1 = (0.5,\ -0.8660,\ 0), \qquad \mathbf{p}_1 = (0,0,0.3),$$
$$\hat z_2 = (0.5,\ -0.8660,\ 0), \qquad \mathbf{p}_2 = (0.4330,\ 0.2500,\ 0.6536).$$

**$\hat z_1 = \hat z_2$** — joints 2 and 3 have parallel axes, exactly as the DH table's $\alpha_2 = 0$ promised. That is the planar sub-arm.

*The columns.*

$$J_1 = \begin{bmatrix}\hat z_0\times(\mathbf{p}_3-\mathbf{p}_0)\\\hat z_0\end{bmatrix} = \begin{bmatrix}(0,0,1)\times(0.6408,0.3700,0.7571)\\(0,0,1)\end{bmatrix} = \begin{bmatrix}-0.3700\\0.6408\\0\\0\\0\\1\end{bmatrix},$$

$$J_2 = \begin{bmatrix}\hat z_1\times(\mathbf{p}_3-\mathbf{p}_1)\\\hat z_1\end{bmatrix}, \qquad \mathbf{p}_3-\mathbf{p}_1 = (0.6408,\ 0.3700,\ 0.4571),$$

$$\hat z_1\times(\cdot) = \begin{vmatrix}\hat i&\hat j&\hat k\\0.5&-0.8660&0\\0.6408&0.3700&0.4571\end{vmatrix} = \left(-0.3958,\ -0.2285,\ 0.7399\right),$$

$$J_2 = \begin{bmatrix}-0.3958\\-0.2285\\0.7399\\0.5\\-0.8660\\0\end{bmatrix}, \qquad J_3 = \begin{bmatrix}-0.0897\\-0.0518\\0.3864\\0.5\\-0.8660\\0\end{bmatrix}.$$

*The full Jacobian.*

$$J = \begin{bmatrix}
-0.3700&-0.3958&-0.0897\\
0.6408&-0.2285&-0.0518\\
0&0.7399&0.3864\\
0&0.5&0.5\\
0&-0.8660&-0.8660\\
1&0&0
\end{bmatrix}.$$

*Verified against numerical differentiation* of the forward kinematics: the top three rows match $\partial\mathbf{p}/\partial\mathbf{q}$ to six decimals ✓.

*Reading the structure — this is where the payoff is.*

**Column 1's linear part has no $z$-component.** The waist rotates about a vertical axis, so it can never raise or lower the tool. That single zero encodes the entire architecture.

**Columns 2 and 3 have identical angular parts** $(0.5, -0.866, 0)$, because joints 2 and 3 share an axis. Two joints producing the same angular velocity direction means **the arm's orientation freedom is only two-dimensional**, not three — one from the waist, one from the shared shoulder/elbow axis.

**The angular block therefore has rank 2, not 3.** Confirmed by inspection: rows $(0,0.5,0.5)$, $(0,-0.866,-0.866)$ and $(1,0,0)$ span only a two-dimensional space, since the second row is $-1.732$ times the first.

*What that means.* This is a **3-DOF arm**, so it cannot possibly achieve arbitrary six-dimensional twists; $J$ is $6\times3$ and its rank is at most 3. The full matrix has

$$\operatorname{rank}J = 3, \qquad \sigma = (1.681,\ 1.244,\ 0.303),$$

so all three of its available degrees of freedom are healthy — the arm is not singular. But the *achievable* twists form a three-dimensional subspace of the six-dimensional space of twists, and it is the columns that tell you which one.

*Manipulability.*

$$w = \prod\sigma_i = 1.681(1.244)(0.303) = 0.634.$$

The smallest singular value, $0.303$, identifies the weakest direction. It is a factor of 5.5 below the largest, which is a comfortable condition number — this configuration is well away from trouble.

*Why the geometric construction is worth the trouble.* Differentiating the $4\times4$ product symbolically would give the same answer after a page of algebra and considerable opportunity for error. The geometric construction needed only the third and fourth columns of three matrices the forward kinematics had already computed, took one cross product per joint, and produced a result whose every entry can be checked against the physical picture. **On a six-jointed arm the difference is decisive**, and it is why every robotics library builds Jacobians this way.

## Watch out

- **You might mix frames.** Every $\hat z_{i-1}$ and $\mathbf{p}_{i-1}$ must be expressed in the same frame, normally the base.
- **You might use $\mathbf{p}_i$ instead of $\mathbf{p}_{i-1}$.** The moment arm runs from a point on **joint $i$'s axis** to the tool. In DH numbering, that axis passes through the origin of frame $i-1$.
- **You might give a prismatic joint an angular row.** Sliding does not rotate the tool; its angular block is zero.
- **You might use the analytical Jacobian without meaning to.** If you differentiate Euler angles you inherit their gimbal-lock singularity. Use the geometric form.
- **You might use $\det J$ on a non-square Jacobian.** It is undefined. Use $\sqrt{\det(JJ^{\top})}$, or better, the smallest singular value.
- **You might compare linear and angular singular values directly.** They have different units (m/s versus rad/s per unit joint rate). Scale by a characteristic length before combining, or the "condition number" is meaningless.
- **You might forget that $J$ depends on configuration.** It must be recomputed every control cycle; a Jacobian evaluated one cycle ago is already wrong.
- **You might build $J$ for the wrong point.** The moment arms run to whichever point you want the velocity of. A tool offset changes every column.

## One-liner

> Each Jacobian column is one joint's contribution to the tool twist — $\hat z\times\mathbf{r}$ stacked on $\hat z$ for a revolute joint, $\hat z$ stacked on zero for a prismatic one — so the matrix falls out of forward kinematics with one cross product per joint and no symbolic differentiation at all.

## Problems

**P1 (🟢)** A planar 2R arm has $L_1 = 0.5$, $L_2 = 0.4$ m at $\mathbf{q} = (30°, 45°)$. (a) Find the joint positions and the tool position. (b) Build the $2\times2$ linear-velocity Jacobian geometrically. (c) Confirm $\det J = L_1L_2\sin\theta_2$. (d) Find the tool velocity at $\dot{\mathbf{q}} = (1, -0.5)$ rad/s.

**P2 (🟡)** A planar 3R arm has $L = (0.5, 0.3, 0.2)$ m at $\mathbf{q} = (20°, 50°, 30°)$. (a) Build the full $3\times3$ Jacobian including the orientation row. (b) Compute $\det J$. (c) Find $\dot{\mathbf{q}}$ for a tool twist of $(0.1, 0, 0)$ — pure $x$ motion with no rotation. (d) Verify your answer.

**P3 (🔴)** A SCARA arm has joints R, R, P, R with $a_1 = 0.4$, $a_2 = 0.3$ m, all axes vertical (the prismatic axis pointing down). At $\theta_1 = 30°$, $\theta_2 = 45°$, $d_3 = 0.2$ m, $\theta_4 = 0$: (a) find the joint axis directions and origins. (b) Build the $6\times4$ Jacobian. (c) Find its rank and identify which twist directions are unachievable. (d) Compute the manipulability of the planar sub-Jacobian, find the configuration that maximizes it, and explain what a SCARA's Jacobian structure implies about its control.

<details>
<summary>Solutions</summary>

**P1** (a) $$\mathbf{p}_0 = (0,0), \qquad \mathbf{p}_1 = (0.5\cos30°,\ 0.5\sin30°) = (0.4330,\ 0.2500),$$
$$\mathbf{p}_2 = \mathbf{p}_1+(0.4\cos75°,\ 0.4\sin75°) = (0.4330+0.1035,\ 0.2500+0.3864) = (0.5365,\ 0.6364).$$

(b) $$J_1 = \hat k\times(\mathbf{p}_2-\mathbf{p}_0) = (-0.6364,\ 0.5365),$$
$$J_2 = \hat k\times(\mathbf{p}_2-\mathbf{p}_1) = \hat k\times(0.1035,\ 0.3864) = (-0.3864,\ 0.1035).$$

$$J = \begin{bmatrix}-0.6364&-0.3864\\0.5365&0.1035\end{bmatrix}.$$

(c) $$\det J = (-0.6364)(0.1035)-(-0.3864)(0.5365) = -0.06587+0.20730 = 0.14143\ \mathrm{m^2}.$$

$$L_1L_2\sin\theta_2 = 0.5(0.4)\sin45° = 0.2(0.70711) = 0.14142\ \checkmark$$

(d) $$\dot{\mathbf{x}} = \begin{bmatrix}-0.6364(1)-0.3864(-0.5)\\0.5365(1)+0.1035(-0.5)\end{bmatrix} = \begin{bmatrix}-0.6364+0.1932\\0.5365-0.0518\end{bmatrix} = \begin{bmatrix}-0.4432\\0.4847\end{bmatrix}\ \mathrm{m/s}.$$

Speed $\sqrt{0.1964+0.2349} = 0.657$ m/s.

**P2** (a) $$c_1 = 20°, \quad c_2 = 70°, \quad c_3 = 100°.$$

$$\mathbf{p}_1 = (0.5\cos20°,\ 0.5\sin20°) = (0.46985,\ 0.17101),$$
$$\mathbf{p}_2 = \mathbf{p}_1+(0.3\cos70°,\ 0.3\sin70°) = (0.57244,\ 0.45291),$$
$$\mathbf{p}_3 = \mathbf{p}_2+(0.2\cos100°,\ 0.2\sin100°) = (0.53771,\ 0.64988).$$

$$J_1 = (-0.64988,\ 0.53771), \qquad J_2 = \hat k\times(\mathbf{p}_3-\mathbf{p}_1) = \hat k\times(0.06786,\ 0.47887) = (-0.47887,\ 0.06786),$$
$$J_3 = \hat k\times(\mathbf{p}_3-\mathbf{p}_2) = \hat k\times(-0.03473,\ 0.19697) = (-0.19697,\ -0.03473).$$

$$J = \begin{bmatrix}-0.64988&-0.47887&-0.19697\\0.53771&0.06786&-0.03473\\1&1&1\end{bmatrix}.$$

(b) Expanding along the third row:

$$\det J = 1\left[(-0.47887)(-0.03473)-(-0.19697)(0.06786)\right]-1\left[(-0.64988)(-0.03473)-(-0.19697)(0.53771)\right]$$
$$\qquad +1\left[(-0.64988)(0.06786)-(-0.47887)(0.53771)\right]$$

$$= \left[0.016631+0.013367\right]-\left[0.022570+0.105913\right]+\left[-0.044100+0.257486\right]$$
$$= 0.029998-0.128483+0.213386 = 0.114901.$$

(c) $$\dot{\mathbf{q}} = J^{-1}\begin{bmatrix}0.1\\0\\0\end{bmatrix} = \frac{1}{\det J}\times(\text{first column of the adjugate}).$$

The needed cofactors are

$$C_{11} = (0.06786)(1)-(-0.03473)(1) = 0.10259,$$
$$C_{12} = -\left[(0.53771)(1)-(-0.03473)(1)\right] = -0.57244,$$
$$C_{13} = (0.53771)(1)-(0.06786)(1) = 0.46985,$$

and the first column of $J^{-1}$ is $(C_{11}, C_{12}, C_{13})^{\top}/\det J$:

$$\dot{\mathbf{q}} = \frac{0.1}{0.114901}\begin{bmatrix}0.10259\\-0.57244\\0.46985\end{bmatrix} = \begin{bmatrix}0.08928\\-0.49821\\0.40892\end{bmatrix}\ \mathrm{rad/s}.$$

(d) $$J\dot{\mathbf{q}}:$$
$$\dot x = -0.64988(0.08928)-0.47887(-0.49821)-0.19697(0.40892) = -0.05802+0.23858-0.08054 = 0.10002\ \checkmark$$
$$\dot y = 0.53771(0.08928)+0.06786(-0.49821)-0.03473(0.40892) = 0.04801-0.03381-0.01420 = 0.00000\ \checkmark$$
$$\dot\phi = 0.08928-0.49821+0.40892 = -0.00001 \approx 0\ \checkmark$$

**Note that all three joints must move**, at rates several times the tool speed, to produce pure $x$ translation with no rotation. Joints 2 and 3 rotate in opposite directions at roughly $0.5$ and $0.4$ rad/s to cancel each other's contribution to $\dot\phi$ while their linear contributions add. That kind of internal cancellation is normal, and it is why joint rates are routinely much larger than the tool speed suggests.

**P3** (a) All revolute axes are vertical; the prismatic axis points **down** (from the $\alpha_2 = 180°$ of [1.6](01-06-denavit-hartenberg-forward-kinematics.md) Example 2):

$$\hat z_0 = (0,0,1), \quad \hat z_1 = (0,0,1), \quad \hat z_2 = (0,0,-1), \quad \hat z_3 = (0,0,-1).$$

$$\mathbf{p}_0 = (0,0,0), \qquad \mathbf{p}_1 = (0.4\cos30°,\ 0.4\sin30°,\ 0) = (0.3464,\ 0.2000,\ 0),$$
$$\mathbf{p}_2 = \mathbf{p}_1+(0.3\cos75°,\ 0.3\sin75°,\ 0) = (0.4241,\ 0.4898,\ 0),$$
$$\mathbf{p}_3 = (0.4241,\ 0.4898,\ -0.2), \qquad \mathbf{p}_4 = \mathbf{p}_3.$$

(b) *Column 1* (revolute, $\hat z_0$ at the origin):

$$\hat z_0\times(\mathbf{p}_4-\mathbf{p}_0) = (0,0,1)\times(0.4241,\ 0.4898,\ -0.2) = (-0.4898,\ 0.4241,\ 0).$$

*Column 2* (revolute, $\hat z_1$ at $\mathbf{p}_1$):

$$\mathbf{p}_4-\mathbf{p}_1 = (0.0777,\ 0.2898,\ -0.2), \qquad (0,0,1)\times(\cdot) = (-0.2898,\ 0.0777,\ 0).$$

*Column 3* (**prismatic**): linear part $\hat z_2 = (0,0,-1)$, angular part zero.

*Column 4* (revolute, $\hat z_3$ at $\mathbf{p}_3 = \mathbf{p}_4$):

$$\mathbf{p}_4-\mathbf{p}_3 = \mathbf{0} \quad\Longrightarrow\quad \text{linear part } \mathbf{0}, \qquad \text{angular part } (0,0,-1).$$

$$J = \begin{bmatrix}
-0.4898&-0.2898&0&0\\
0.4241&0.0777&0&0\\
0&0&-1&0\\
0&0&0&0\\
0&0&0&0\\
1&1&0&-1
\end{bmatrix}.$$

(c) *Rank.* Rows 4 and 5 ($\omega_x$ and $\omega_y$) are **identically zero**, so at most four rows are nonzero. The four nonzero rows are:

$$(-0.4898,\ -0.2898,\ 0,\ 0), \quad (0.4241,\ 0.0777,\ 0,\ 0), \quad (0,0,-1,0), \quad (1,1,0,-1),$$

which are visibly independent (the first two span the $(\theta_1,\theta_2)$ block with determinant $-0.4898(0.0777)+0.2898(0.4241) = -0.03806+0.12290 = 0.08484\neq0$; the third and fourth each add a new pivot).

$$\operatorname{rank}J = 4.$$

*Unachievable twists.* Rows 4 and 5 being zero means

$$\omega_x = 0 \quad\text{and}\quad \omega_y = 0 \quad\text{always, in every configuration.}$$

**The SCARA cannot tilt its tool.** It can translate in all three directions and rotate about the vertical, but the two "tipping" degrees of freedom are structurally absent. This is not a singularity — it is the arm's design, and no configuration change can recover them.

(d) *Manipulability of the planar sub-Jacobian.* The $2\times2$ block governing $(\dot x,\dot y)$ from $(\dot\theta_1,\dot\theta_2)$ is

$$J_{xy} = \begin{bmatrix}-0.4898&-0.2898\\0.4241&0.0777\end{bmatrix}, \qquad \det J_{xy} = 0.08484\ \mathrm{m^2}.$$

*Check against the 2R formula:* $a_1a_2\sin\theta_2 = 0.4(0.3)\sin45° = 0.12(0.70711) = 0.08485$ ✓

*Maximizing it.* $|\det J_{xy}| = a_1a_2|\sin\theta_2|$ is maximized at

$$\theta_2 = \pm90°, \qquad |\det J_{xy}|_{\max} = 0.4(0.3)(1) = 0.12\ \mathrm{m^2},$$

**independent of $\theta_1$** — the waist angle only rotates the ellipse, it does not change its shape. The current $45°$ gives 71% of the maximum.

*And the minimum* is at $\theta_2 = 0$ or $180°$, where $\det J_{xy} = 0$: the arm fully extended or fully folded, the boundary singularities of [2.1](02-01-inverse-kinematics-analytic.md).

*What the structure implies about control.* Four observations, each with a practical consequence:

**The Jacobian is block-diagonal.** The $(\dot x,\dot y)$ block depends only on $\theta_1,\theta_2$; $\dot z$ depends only on $d_3$; $\omega_z$ depends on $\theta_1+\theta_2-\theta_4$. **Three independent sub-problems**, which is why a SCARA's inverse kinematics, its velocity control and its trajectory generation are all far simpler than a 6R arm's.

**The vertical axis is perfectly decoupled.** Column 3 is $(0,0,-1,0,0,0)$ — a constant, configuration-independent unit column. The $z$-axis is an ordinary linear actuator with no kinematic coupling at all, so it can be controlled by a completely separate loop, and its performance does not vary across the workspace. On a 6R arm, no axis has this property.

**Only two joints can be singular.** Singularity requires $\sin\theta_2 = 0$, and $d_3$ and $\theta_4$ can never contribute to rank loss. **The entire singularity analysis reduces to one scalar**, which the controller can monitor with a single comparison — against the six-dimensional rank test a general arm requires.

**Gravity loads only one axis.** All revolute axes are vertical, so gravity exerts no torque about any of them; the entire weight is carried by the prismatic axis, which is typically a ballscrew with a brake. **The three motors that move fast do not fight gravity, and the one that fights gravity does not need to move fast.** That decoupling is why a SCARA can accelerate at several $g$ in the plane while holding a payload steady vertically, and it is the single biggest reason the architecture dominates high-speed assembly.

*The general lesson.* **The Jacobian's sparsity pattern is a design document.** Zeros are decoupling, repeated columns are shared axes, and constant columns are actuators that behave the same everywhere. Reading it before doing any algebra tells you most of what the arm can do.

</details>

## Flashback

**From Lesson 2.2 (Inverse kinematics: numerical):** A planar 3R arm with $L = (0.4,0.3,0.2)$ m at $\mathbf{q} = (30°,45°,-20°)$ has the $2\times3$ position Jacobian computed in that lesson. (a) Find the minimum-norm joint rates for a tool velocity of $(0.1,\ 0)$ m/s. (b) Find the resulting $\dot\phi$.

<details>
<summary>Solution</summary>

(a) From [2.2](02-02-inverse-kinematics-numerical.md) P3, $J^{+}(0.02, 0) = (0.03318, -0.09032, -0.00438)$ rad. Since the pseudoinverse is linear, scaling the requested velocity by $0.1/0.02 = 5$ scales the answer:

$$\dot{\mathbf{q}} = 5(0.03318,\ -0.09032,\ -0.00438) = (0.1659,\ -0.4516,\ -0.0219)\ \mathrm{rad/s}$$
$$= (9.50°,\ -25.87°,\ -1.25°)\ \mathrm{per\ second}.$$

(b) $$\dot\phi = \dot\theta_1+\dot\theta_2+\dot\theta_3 = 0.1659-0.4516-0.0219 = -0.3076\ \mathrm{rad/s} = -17.6°/\mathrm{s}.$$

*What this shows, and why it matters.* The task asked only for **position**, and the minimum-norm solution delivered exactly $(0.1, 0)$ m/s ✓ — but the tool also **rotates at $-17.6°$ per second** as a side effect.

That is not an error. The arm is redundant for a position-only task, and the pseudoinverse minimizes $\|\dot{\mathbf{q}}\|$, not $|\dot\phi|$. Nothing in the problem statement asked for the orientation to be held, so nothing held it.

**Two ways to fix it, if the orientation matters:**

**Include $\dot\phi$ in the task.** Use the full $3\times3$ Jacobian and request $(0.1, 0, 0)$ — exactly P2 of this lesson, which found the (unique) joint rates that translate without rotating. The arm is no longer redundant, and the answer is determined.

**Use the null space.** Keep the $2\times3$ formulation and add $(I-J^{+}J)\mathbf{z}$ with $\mathbf{z}$ chosen to null out $\dot\phi$. This is more work but keeps the redundancy available for other purposes, and it is the right choice when orientation is a *preference* rather than a hard requirement.

*The general warning.* **A pseudoinverse optimizes what you asked it to optimize and ignores everything else.** If a quantity is not in the task vector and not in the null-space objective, it will drift — silently, and in a way that looks like correct behaviour because the requested task is being performed perfectly.

</details>

## Connections

- **Backward:** the frames, axis directions and origins are [1.6](01-06-denavit-hartenberg-forward-kinematics.md)'s; the $\dot R = [\omega]_\times R$ relation behind the angular rows is [1.2](01-02-rotation-matrices.md)'s; the pseudoinverse that inverts it is [2.2](02-02-inverse-kinematics-numerical.md)'s.
- **Forward:** [2.4](02-04-singularities.md) studies where $J$ loses rank; [2.5](02-05-statics-jacobian-transpose.md) gives $J^{\top}$ its meaning; [3.2](03-02-manipulator-dynamics-equation.md) builds the mass matrix from the per-link Jacobians.
- **Sideways:** this is the derivative of a nonlinear map, the SVD and the four fundamental subspaces of [`linalg-refresher` 2.2](../../linalg-refresher/lessons/02-02-inverses-and-four-subspaces.md) and [5.2](../../linalg-refresher/lessons/05-02-svd.md); the manipulability ellipsoid is the image of a unit ball under a linear map, the same object as the strain ellipsoid in [`mechanics-of-materials`](../../mechanics-of-materials/syllabus.md).
