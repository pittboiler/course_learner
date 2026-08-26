# Robotics & Kinematics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Robotics is four questions asked in sequence: where is the hand, what joint angles put it there, how do rates and forces map between joints and hand, and what torques make it move. This card holds the transformation conventions, the DH and Jacobian recipes, the dynamics structure, the control laws, and the traps — the things you would otherwise go hunting through a lesson for while mid-problem.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\mathbf{q}$ | joint variable vector — the configuration | [1.1](lessons/01-01-robots-links-configuration-space.md) |
| $\mathcal{C}$, $\mathcal{W}$ | configuration space (joint values); workspace (reachable tool poses) | [1.1](lessons/01-01-robots-links-configuration-space.md) |
| $f_i$ | degrees of freedom permitted by joint $i$ | [1.1](lessons/01-01-robots-links-configuration-space.md) |
| $^A_BR$ | rotation matrix: frame $B$'s orientation expressed in frame $A$ | [1.2](lessons/01-02-rotation-matrices.md) |
| $[\boldsymbol\omega]_\times$ | skew-symmetric matrix of $\boldsymbol\omega$; $[\boldsymbol\omega]_\times\mathbf{v} = \boldsymbol\omega\times\mathbf{v}$ | [1.2](lessons/01-02-rotation-matrices.md) |
| $\alpha,\beta,\gamma$ | ZYX Euler angles — yaw, pitch, roll | [1.3](lessons/01-03-euler-fixed-angles-axis-angle.md) |
| $\hat k$, $\theta$ | rotation axis (unit vector) and rotation angle | [1.3](lessons/01-03-euler-fixed-angles-axis-angle.md) |
| $q = (w,\mathbf{v})$ | unit quaternion — scalar part and vector part | [1.4](lessons/01-04-quaternions.md) |
| $\Omega$ | arc angle between two quaternions on $S^3$ (half the physical angle) | [1.4](lessons/01-04-quaternions.md) |
| $^A_BT$ | homogeneous transform: frame $B$'s pose expressed in frame $A$ | [1.5](lessons/01-05-homogeneous-transforms.md) |
| $a,\alpha,d,\theta$ | DH parameters — link length, link twist, link offset, joint angle | [1.6](lessons/01-06-denavit-hartenberg-forward-kinematics.md) |
| $\mathbf{p}_w$ | wrist centre — where the last three axes intersect | [2.1](lessons/02-01-inverse-kinematics-analytic.md) |
| $J^{+}$ | Moore–Penrose pseudoinverse of the Jacobian | [2.2](lessons/02-02-inverse-kinematics-numerical.md) |
| $\lambda$ | damping factor in damped least squares | [2.2](lessons/02-02-inverse-kinematics-numerical.md) |
| $J$, $J_v$, $J_\omega$ | manipulator Jacobian; its linear and angular blocks | [2.3](lessons/02-03-manipulator-jacobian.md) |
| $\sigma_i$, $\kappa$ | singular values of $J$; condition number $\sigma_{\max}/\sigma_{\min}$ | [2.3](lessons/02-03-manipulator-jacobian.md) |
| $w$ | Yoshikawa manipulability $\sqrt{\det(JJ^{\top})}$ | [2.3](lessons/02-03-manipulator-jacobian.md) |
| $\mathbf{F} = (\mathbf{f},\mathbf{n})$ | wrench — force and moment stacked | [2.5](lessons/02-05-statics-jacobian-transpose.md) |
| $M(\mathbf{q})$ | mass (inertia) matrix — symmetric, positive definite | [3.1](lessons/03-01-lagrangian-dynamics.md) |
| $C(\mathbf{q},\dot{\mathbf{q}})$ | Coriolis/centrifugal matrix | [3.1](lessons/03-01-lagrangian-dynamics.md) |
| $\mathbf{g}(\mathbf{q})$ | gravity torque vector | [3.1](lessons/03-01-lagrangian-dynamics.md) |
| $c_{kij}$ | Christoffel symbol of the first kind | [3.1](lessons/03-01-lagrangian-dynamics.md) |
| $Y$, $\boldsymbol\Theta$ | regressor matrix and inertial-parameter vector | [3.2](lessons/03-02-manipulator-dynamics-equation.md) |
| $\mathbf{f}_i$, $\mathbf{n}_i$ | force and moment exerted on link $i$ by link $i-1$ | [3.3](lessons/03-03-newton-euler-recursive-dynamics.md) |
| $s(t)$ | timing profile, running $0\to1$ over the move | [3.4](lessons/03-04-joint-space-trajectories.md) |
| $t_b$ | blend time (trapezoid, or via-point corner rounding) | [3.4](lessons/03-04-joint-space-trajectories.md) |
| $r$ (Module 4) | gear ratio, $\theta_m = r\theta_{\rm joint}$ | [4.1](lessons/04-01-independent-joint-control.md) |
| $J_{\rm eff}$ | effective motor-side inertia $J_m+M_{kk}/r^2$ | [4.1](lessons/04-01-independent-joint-control.md) |
| $K_p$, $K_d$ | position and velocity gains (units depend on the scheme) | [4.1](lessons/04-01-independent-joint-control.md) |
| $\hat M,\hat C,\hat{\mathbf{g}}$ | the controller's *model* of the dynamics | [4.2](lessons/04-02-computed-torque-control.md) |
| $K_x$, $K_q$ | Cartesian and joint stiffness matrices | [4.3](lessons/04-03-force-hybrid-control.md) |
| $M_d,B_d,K_d$ | desired impedance — apparent mass, damping, stiffness | [4.3](lessons/04-03-force-hybrid-control.md) |
| $S$ | selection matrix in hybrid position/force control | [4.3](lessons/04-03-force-hybrid-control.md) |
| $v$, $\omega$ | mobile robot forward speed and turn rate | [4.4](lessons/04-04-wheeled-mobile-robots.md) |
| $r$, $L$ (Module 4.4) | wheel radius and wheel separation | [4.4](lessons/04-04-wheeled-mobile-robots.md) |
| $K$ (Kalman) | Kalman gain — fraction of total precision the measurement supplies | [4.5](lessons/04-05-localization.md) |
| $\mathcal{C}_{\rm obs}$, $\mathcal{C}_{\rm free}$ | forbidden and free regions of configuration space | [4.6](lessons/04-06-motion-planning.md) |

## Definitions

### Configuration space

The set of all joint-value vectors. A revolute joint's variable lives on a circle, so an $n$-revolute arm's configuration space is the torus $T^n$, not a box — and planners that forget this miss the shortest path across the wrap.

*Introduced:* [1.1](lessons/01-01-robots-links-configuration-space.md)

### Rotation matrix

A $3\times3$ matrix whose columns are the rotated frame's axes expressed in the reference frame, with orthonormal columns and unit determinant.

$$SO(3) = \left\{R\ :\ R^{\top}R = I,\ \det R = +1\right\}, \qquad R^{-1} = R^{\top}$$

*Introduced:* [1.2](lessons/01-02-rotation-matrices.md)

### Euler angles

Three successive rotations about coordinate axes. Body-axis (Euler) rotations post-multiply; world-axis (fixed) rotations pre-multiply and reverse the order. No three-parameter scheme covers $SO(3)$ without a singularity.

$$R = R_z(\alpha)R_y(\beta)R_x(\gamma) \quad\text{(ZYX Euler}\ \equiv\ \text{XYZ fixed)}$$

*Introduced:* [1.3](lessons/01-03-euler-fixed-angles-axis-angle.md)

### Gimbal lock

The configuration where two of the three rotation axes align, so one degree of freedom is lost and the extraction formulas divide by zero. For ZYX it occurs at $\beta = \pm90°$.

*Introduced:* [1.3](lessons/01-03-euler-fixed-angles-axis-angle.md)

### Unit quaternion

Four numbers encoding an axis and a *half*-angle, with one norm constraint. No singularity anywhere, cheap composition, and $q$ and $-q$ describe the same rotation.

$$q = \left(\cos\tfrac{\theta}{2},\ \hat k\sin\tfrac{\theta}{2}\right), \qquad \|q\| = 1$$

*Introduced:* [1.4](lessons/01-04-quaternions.md)

### Homogeneous transform

A $4\times4$ matrix packing a rotation and a translation, so that both compose by matrix multiplication.

$$^A_BT = \begin{bmatrix}^A_BR & ^AP_{Borg}\\\mathbf{0}^{\top}&1\end{bmatrix} \in SE(3)$$

*Introduced:* [1.5](lessons/01-05-homogeneous-transforms.md)

### Denavit–Hartenberg parameters

Four numbers per link — two describing the rigid link, two describing the joint at its end — obtained by aligning each frame's $\hat z$ with its joint axis and its $\hat x$ with the common normal.

*Introduced:* [1.6](lessons/01-06-denavit-hartenberg-forward-kinematics.md)

### Inverse kinematics

Finding the joint values that produce a desired tool pose. Unlike forward kinematics it may have no solution, several, or infinitely many, and a closed form is not guaranteed.

*Introduced:* [2.1](lessons/02-01-inverse-kinematics-analytic.md)

### Kinematic decoupling

When the last three joint axes intersect at a point, that wrist centre depends only on the first three joints — so position and orientation can be solved separately.

$$\mathbf{p}_w = \mathbf{p}_{\rm tool}-d_6\,{}^0_6R\,\hat z_6$$

*Introduced:* [2.1](lessons/02-01-inverse-kinematics-analytic.md)

### Pieper's condition

A 6-DOF arm has a closed-form inverse kinematics if three consecutive joint axes intersect at a point, or three consecutive axes are parallel. Nearly every industrial arm is designed to satisfy it.

*Introduced:* [2.1](lessons/02-01-inverse-kinematics-analytic.md)

### Damped least squares

A regularized pseudoinverse that keeps joint rates bounded near a singularity, at the cost of tracking accuracy in the ill-conditioned direction.

$$\Delta\mathbf{q} = J^{\top}\left(JJ^{\top}+\lambda^2I\right)^{-1}\mathbf{e}$$

*Introduced:* [2.2](lessons/02-02-inverse-kinematics-numerical.md)

### Manipulator Jacobian

The matrix mapping joint rates to the tool's twist, built column by column from the joint axes and the moment arms to the tool.

$$\begin{bmatrix}\mathbf{v}\\\boldsymbol\omega\end{bmatrix} = J(\mathbf{q})\dot{\mathbf{q}}$$

*Introduced:* [2.3](lessons/02-03-manipulator-jacobian.md)

### Manipulability

The volume of the ellipsoid of tool velocities achievable with unit joint speed — a measure of how well-conditioned a configuration is for motion.

$$w = \sqrt{\det\left(JJ^{\top}\right)} = \prod_i\sigma_i$$

*Introduced:* [2.3](lessons/02-03-manipulator-jacobian.md)

### Singularity

A configuration where the Jacobian loses rank: the tool cannot move in some direction, and there is a joint motion that produces no tool motion at all.

$$\operatorname{rank}J(\mathbf{q})<\min(6,n)$$

*Introduced:* [2.4](lessons/02-04-singularities.md)

### Virtual work

The principle that in static equilibrium, the work done by joint torques through any admissible virtual displacement equals the work done against the external wrench — which yields $\boldsymbol\tau = J^{\top}\mathbf{F}$ in three lines.

*Introduced:* [2.5](lessons/02-05-statics-jacobian-transpose.md)

### Lagrangian

The difference of kinetic and potential energy, whose Euler–Lagrange equations give the equations of motion with no free-body diagrams and no constraint forces.

$$L = T-V, \qquad \frac{d}{dt}\left(\frac{\partial L}{\partial\dot q_i}\right)-\frac{\partial L}{\partial q_i} = \tau_i$$

*Introduced:* [3.1](lessons/03-01-lagrangian-dynamics.md)

### Mass matrix

The matrix of the kinetic-energy quadratic form. Symmetric, positive definite, and configuration-dependent; its diagonal is each joint's effective inertia and its off-diagonals are inertial coupling.

$$T = \tfrac12\dot{\mathbf{q}}^{\top}M(\mathbf{q})\dot{\mathbf{q}}$$

*Introduced:* [3.1](lessons/03-01-lagrangian-dynamics.md)

### Coriolis and centrifugal terms

Velocity-squared forces arising because the mass matrix varies with configuration. Centrifugal terms involve one joint rate squared; Coriolis terms involve two different joint rates.

*Introduced:* [3.1](lessons/03-01-lagrangian-dynamics.md)

### Recursive Newton-Euler

An $O(n)$ inverse-dynamics algorithm: propagate velocities and accelerations outward from the base, then forces and moments inward from the tip, taking each joint torque as the component along its own axis.

*Introduced:* [3.3](lessons/03-03-newton-euler-recursive-dynamics.md)

### Trajectory

A time-parameterized path giving position, velocity and acceleration at every instant — as opposed to a path, which is geometry alone.

*Introduced:* [3.4](lessons/03-04-joint-space-trajectories.md)

### Cartesian trajectory

A trajectory specified as tool pose over time, requiring inverse kinematics each control cycle and checks for reachability, singularity and joint rates along the whole path.

*Introduced:* [3.5](lessons/03-05-cartesian-trajectories-via-points.md)

### Computed-torque control

A control law that cancels the manipulator's nonlinear dynamics exactly, leaving $n$ decoupled double integrators on which a linear controller places the poles.

$$\boldsymbol\tau = \hat M\left(\ddot{\mathbf{q}}_d-K_d\dot{\mathbf{e}}-K_p\mathbf{e}\right)+\hat C\dot{\mathbf{q}}+\hat{\mathbf{g}}$$

*Introduced:* [4.2](lessons/04-02-computed-torque-control.md)

### Force control

Regulating the contact force in a direction rather than the position, using an integral loop on the measured force. Requires that the environment constrain that direction.

*Introduced:* [4.3](lessons/04-03-force-hybrid-control.md)

### Impedance control

Rendering the tool as a mass–spring–damper of chosen parameters, so the controller specifies a *behaviour* rather than a setpoint.

$$M_d\ddot{\mathbf{e}}+B_d\dot{\mathbf{e}}+K_d\mathbf{e} = -\mathbf{F}_{\rm ext}$$

*Introduced:* [4.3](lessons/04-03-force-hybrid-control.md)

### Nonholonomic constraint

A constraint on velocities that cannot be integrated into a constraint on positions. A wheeled robot cannot move sideways instantaneously, yet can reach any pose.

$$\dot x\sin\phi-\dot y\cos\phi = 0$$

*Introduced:* [4.4](lessons/04-04-wheeled-mobile-robots.md)

### Kalman filter

The Bayes filter for linear-Gaussian systems: predict with the motion model, then correct with a measurement weighted by the ratio of precisions.

$$K = \frac{\sigma_-^2}{\sigma_-^2+\sigma_z^2}, \qquad \frac{1}{\sigma_+^2} = \frac{1}{\sigma_-^2}+\frac{1}{\sigma_z^2}$$

*Introduced:* [4.5](lessons/04-05-localization.md)

### Motion planning

Finding a continuous curve in the free configuration space from start to goal. Sampling-based planners are probabilistically complete and never report infeasibility.

*Introduced:* [4.6](lessons/04-06-motion-planning.md)

## Formulas and rules

### Mobility and workspace

$$\mathrm{DOF} = m(N-1)-\sum_{i=1}^{J}\left(m-f_i\right) = m(N-1-J)+\sum_if_i,$$

with $m = 6$ spatial, $m = 3$ planar, $N$ links **including ground**, $J$ joints.

| Joint | R | P | C | U | S | E |
|---|---|---|---|---|---|---|
| $f_i$ | 1 | 1 | 2 | 2 | 3 | 3 |

Serial chain: $\mathrm{DOF} = n$ always. Planar 2R annulus: $|L_1-L_2|\leq r\leq L_1+L_2$.

*From* [1.1](lessons/01-01-robots-links-configuration-space.md)

### Rotations

$$R_x(\theta) = \begin{bmatrix}1&0&0\\0&c&-s\\0&s&c\end{bmatrix}, \quad R_y(\theta) = \begin{bmatrix}c&0&s\\0&1&0\\-s&0&c\end{bmatrix}, \quad R_z(\theta) = \begin{bmatrix}c&-s&0\\s&c&0\\0&0&1\end{bmatrix}$$

**$R_y$'s minus sign is bottom-left** — the odd one out.

$$^A_CR = {}^A_BR\,{}^B_CR \quad\text{(adjacent subscripts cancel)}, \qquad \dot R = [\boldsymbol\omega]_\times R$$

$$[\boldsymbol\omega]_\times = \begin{bmatrix}0&-\omega_z&\omega_y\\\omega_z&0&-\omega_x\\-\omega_y&\omega_x&0\end{bmatrix}$$

Post-multiply for body axes; pre-multiply for fixed axes (which reverses the apparent order).

*From* [1.2](lessons/01-02-rotation-matrices.md)

### Euler-angle extraction and axis–angle

**ZYX extraction** — always `atan2`, never `atan` or `acos`:

$$\beta = \operatorname{atan2}\left(-r_{31},\sqrt{r_{11}^2+r_{21}^2}\right), \quad \alpha = \operatorname{atan2}\left(\frac{r_{21}}{c_\beta},\frac{r_{11}}{c_\beta}\right), \quad \gamma = \operatorname{atan2}\left(\frac{r_{32}}{c_\beta},\frac{r_{33}}{c_\beta}\right)$$

The second solution is $\beta' = \pi-\beta$ with $\alpha'$, $\gamma'$ recomputed.

**Rodrigues (axis–angle → matrix):**

$$R = I+\sin\theta\,[\hat k]_\times+(1-\cos\theta)\,[\hat k]_\times^2 = \exp\left(\theta[\hat k]_\times\right)$$

**Matrix → axis–angle:**

$$\theta = \arccos\frac{\operatorname{tr}(R)-1}{2}, \qquad \hat k = \frac{1}{2\sin\theta}\begin{bmatrix}r_{32}-r_{23}\\r_{13}-r_{31}\\r_{21}-r_{12}\end{bmatrix}$$

Degenerate at $\theta = 0$ (axis undefined) and $\theta = 180°$ ($\sin\theta = 0$; use the diagonal).

*From* [1.3](lessons/01-03-euler-fixed-angles-axis-angle.md)

### Quaternions

$$q_1q_2 = \left(w_1w_2-\mathbf{v}_1\cdot\mathbf{v}_2,\ \ w_1\mathbf{v}_2+w_2\mathbf{v}_1+\mathbf{v}_1\times\mathbf{v}_2\right), \qquad q^{-1} = q^{*} = (w,-\mathbf{v})$$

$$(0,\mathbf{p}') = q\,(0,\mathbf{p})\,q^{*}, \qquad R_1R_2\leftrightarrow q_1q_2$$

$$R = \begin{bmatrix}1-2(y^2+z^2)&2(xy-wz)&2(xz+wy)\\2(xy+wz)&1-2(x^2+z^2)&2(yz-wx)\\2(xz-wy)&2(yz+wx)&1-2(x^2+y^2)\end{bmatrix}$$

$$\dot q = \tfrac12q\,(0,\boldsymbol\omega), \qquad \text{then renormalize}$$

**Slerp** (negate $q_1$ first if $q_0\cdot q_1<0$):

$$\mathrm{slerp}(q_0,q_1,t) = \frac{\sin\left((1-t)\Omega\right)}{\sin\Omega}q_0+\frac{\sin(t\Omega)}{\sin\Omega}q_1, \qquad \cos\Omega = q_0\cdot q_1$$

*From* [1.4](lessons/01-04-quaternions.md)

### Homogeneous transforms

$$^A_CT = {}^A_BT\,{}^B_CT, \qquad ^A_BT^{-1} = \begin{bmatrix}R^{\top}&-R^{\top}\mathbf{p}\\\mathbf{0}^{\top}&1\end{bmatrix}$$

**Never transpose to invert.** Points carry a fourth coordinate of 1; free vectors carry 0.

*From* [1.5](lessons/01-05-homogeneous-transforms.md)

### DH link transform and forward kinematics

$$^{i-1}_iT = \mathrm{Rot}(\hat z,\theta_i)\,\mathrm{Trans}(0,0,d_i)\,\mathrm{Trans}(a_i,0,0)\,\mathrm{Rot}(\hat x,\alpha_i)$$

$$= \begin{bmatrix}c_{\theta_i}&-s_{\theta_i}c_{\alpha_i}&s_{\theta_i}s_{\alpha_i}&a_ic_{\theta_i}\\s_{\theta_i}&c_{\theta_i}c_{\alpha_i}&-c_{\theta_i}s_{\alpha_i}&a_is_{\theta_i}\\0&s_{\alpha_i}&c_{\alpha_i}&d_i\\0&0&0&1\end{bmatrix}, \qquad ^0_nT = \prod_{i=1}^{n}{}^{i-1}_iT$$

Revolute: $\theta_i$ variable. Prismatic: $d_i$ variable. **Standard and modified DH give different tables — state which.**

**Planar chain** ($\alpha_i = d_i = 0$):

$$x = \sum_ia_i\cos\left(\textstyle\sum_{j\leq i}\theta_j\right), \qquad y = \sum_ia_i\sin\left(\textstyle\sum_{j\leq i}\theta_j\right), \qquad \phi = \sum_i\theta_i$$

*From* [1.6](lessons/01-06-denavit-hartenberg-forward-kinematics.md)

### Planar inverse kinematics

**2R arm:**

$$\cos\theta_2 = \frac{x^2+y^2-L_1^2-L_2^2}{2L_1L_2}, \qquad \theta_2 = \pm\arccos(\cdot),$$

$$\theta_1 = \operatorname{atan2}(y,x)-\operatorname{atan2}\left(L_2\sin\theta_2,\ L_1+L_2\cos\theta_2\right)$$

$|\cos\theta_2|>1$ means **unreachable** — test before calling `arccos`.

**3R arm with orientation $\phi$** — work back from the wrist:

$$x_w = x-L_3\cos\phi, \quad y_w = y-L_3\sin\phi, \quad \text{solve 2R}, \quad \theta_3 = \phi-\theta_1-\theta_2$$

*From* [2.1](lessons/02-01-inverse-kinematics-analytic.md)

### Numerical inverse kinematics

$$\mathbf{q}_{k+1} = \mathbf{q}_k+\alpha\,J^{+}\left[\mathbf{x}_d-\mathbf{f}(\mathbf{q}_k)\right]$$

$$J^{+} = \begin{cases}J^{\top}(JJ^{\top})^{-1} & \text{wide (redundant): minimum norm}\\(J^{\top}J)^{-1}J^{\top} & \text{tall: least squares}\end{cases}$$

**Damped:** $\Delta\mathbf{q} = J^{\top}(JJ^{\top}+\lambda^2I)^{-1}\mathbf{e}$, filtering $1/\sigma$ to $\sigma/(\sigma^2+\lambda^2)$.

**Redundancy resolution:** $\Delta\mathbf{q} = J^{+}\mathbf{e}+(I-J^{+}J)\mathbf{z}$, with $\mathbf{z}$ pursuing a secondary objective in the null space.

**Jacobian transpose:** $\Delta\mathbf{q} = \alpha J^{\top}\mathbf{e}$ — gradient descent, never blows up, converges linearly.

Orientation error: use the axis–angle of $R_dR^{\top}$, never a difference of Euler angles.

*From* [2.2](lessons/02-02-inverse-kinematics-numerical.md)

### Jacobian construction

$$J_i = \begin{cases}\begin{bmatrix}\hat z_{i-1}\times\left(\mathbf{p}_n-\mathbf{p}_{i-1}\right)\\\hat z_{i-1}\end{bmatrix} & \text{revolute}\\[3ex]\begin{bmatrix}\hat z_{i-1}\\\mathbf{0}\end{bmatrix} & \text{prismatic}\end{cases}$$

All quantities in one frame (normally the base). $\hat z_{i-1}$ and $\mathbf{p}_{i-1}$ are the third and fourth columns of $^0_{i-1}T$.

**Planar arm:** column $j$ is $\left(-(y_n-y_{j-1}),\ x_n-x_{j-1},\ 1\right)$; the first column is always $(-y_n,\ x_n,\ 1)$.

**2R determinant:** $\det J = L_1L_2\sin\theta_2$.

*From* [2.3](lessons/02-03-manipulator-jacobian.md)

### Singularities

| Type | Condition | Lost direction |
|---|---|---|
| Boundary (2R) | $\theta_2 = 0$ or $180°$ | radial |
| Elbow | arm fully extended | radial from shoulder |
| Shoulder | wrist centre on the waist axis | tangential |
| **Wrist** | $\theta_5 = 0$ (axes 4 and 6 collinear) | one rotation |

Detect with $\sigma_{\min}$, not $\det J$. Joint rates scale as $1/\sigma_{\min}$.

$$\text{lost twist directions} = \operatorname{null}\left(J^{\top}\right), \qquad \text{free joint motions} = \operatorname{null}(J)$$

*From* [2.4](lessons/02-04-singularities.md)

### Statics

$$\boldsymbol\tau = J^{\top}\mathbf{F}, \qquad \mathbf{F} = J^{-\top}\boldsymbol\tau, \qquad K_q = J^{\top}K_xJ$$

$$\boldsymbol\tau_g = -\sum_iJ_{v_i}^{\top}m_i\mathbf{g}$$

**Force ellipsoid semi-axes are $1/\sigma_i$** — reciprocal to the manipulability ellipsoid, so easy to move means hard to push.

*From* [2.5](lessons/02-05-statics-jacobian-transpose.md)

### Manipulator dynamics

$$M(\mathbf{q})\ddot{\mathbf{q}}+C(\mathbf{q},\dot{\mathbf{q}})\dot{\mathbf{q}}+\mathbf{g}(\mathbf{q})+F_v\dot{\mathbf{q}}+F_s\operatorname{sgn}(\dot{\mathbf{q}}) = \boldsymbol\tau+J^{\top}\mathbf{F}_{\rm ext}$$

$$M(\mathbf{q}) = \sum_i\left[m_iJ_{v_i}^{\top}J_{v_i}+J_{\omega_i}^{\top}\,{}^0R_i\,{}^{i}I_i\,{}^0R_i^{\top}J_{\omega_i}\right], \qquad V = -\sum_im_i\mathbf{g}^{\top}\mathbf{p}_{c_i}$$

$$c_{kij} = \frac12\left(\frac{\partial M_{kj}}{\partial q_i}+\frac{\partial M_{ki}}{\partial q_j}-\frac{\partial M_{ij}}{\partial q_k}\right), \qquad C_{kj} = \sum_ic_{kij}\dot q_i$$

**Three structural properties:**

| Property | Statement | Licenses |
|---|---|---|
| $M$ symmetric positive definite | $\mathbf{x}^{\top}M\mathbf{x}>0$ | $M^{-1}$ always exists |
| $\dot M-2C$ skew-symmetric | $\mathbf{x}^{\top}(\dot M-2C)\mathbf{x} = 0$ | passivity-based stability proofs |
| Linear in parameters | $M\ddot{\mathbf{q}}+C\dot{\mathbf{q}}+\mathbf{g} = Y\boldsymbol\Theta$ | identification, adaptive control |

**Standard 2R arm** (point masses at link ends):

$$M = \begin{bmatrix}(m_1+m_2)l_1^2+m_2l_2^2+2m_2l_1l_2c_2 & m_2l_2^2+m_2l_1l_2c_2\\ m_2l_2^2+m_2l_1l_2c_2 & m_2l_2^2\end{bmatrix},$$

$$C = \begin{bmatrix}h\dot\theta_2&h(\dot\theta_1+\dot\theta_2)\\-h\dot\theta_1&0\end{bmatrix},\ \ h = -m_2l_1l_2s_2, \qquad \mathbf{g} = \begin{bmatrix}(m_1+m_2)gl_1c_1+m_2gl_2c_{12}\\m_2gl_2c_{12}\end{bmatrix}$$

*From* [3.1](lessons/03-01-lagrangian-dynamics.md), [3.2](lessons/03-02-manipulator-dynamics-equation.md)

### Recursive Newton-Euler

**Outward** ($i = 0\to n-1$), starting from $\boldsymbol\omega_0 = \dot{\boldsymbol\omega}_0 = \mathbf{0}$ and $\dot{\mathbf{v}}_0 = -\mathbf{g}$ (which makes gravity free):

$$\boldsymbol\omega_{i+1} = {}^{i+1}_{i}R\,\boldsymbol\omega_i+\dot\theta_{i+1}\hat Z_{i+1}$$
$$\dot{\boldsymbol\omega}_{i+1} = {}^{i+1}_{i}R\,\dot{\boldsymbol\omega}_i+{}^{i+1}_{i}R\,\boldsymbol\omega_i\times\dot\theta_{i+1}\hat Z_{i+1}+\ddot\theta_{i+1}\hat Z_{i+1}$$
$$\dot{\mathbf{v}}_{i+1} = {}^{i+1}_{i}R\left[\dot{\boldsymbol\omega}_i\times\mathbf{P}_{i+1}+\boldsymbol\omega_i\times\left(\boldsymbol\omega_i\times\mathbf{P}_{i+1}\right)+\dot{\mathbf{v}}_i\right]$$
$$\mathbf{F}_i = m_i\dot{\mathbf{v}}_{c_i}, \qquad \mathbf{N}_i = I_i\dot{\boldsymbol\omega}_i+\boldsymbol\omega_i\times I_i\boldsymbol\omega_i$$

**Inward** ($i = n\to1$):

$$\mathbf{f}_i = {}^{i}_{i+1}R\,\mathbf{f}_{i+1}+\mathbf{F}_i, \qquad \mathbf{n}_i = \mathbf{N}_i+{}^{i}_{i+1}R\,\mathbf{n}_{i+1}+\mathbf{P}_{c_i}\times\mathbf{F}_i+\mathbf{P}_{i+1}\times{}^{i}_{i+1}R\,\mathbf{f}_{i+1}$$

$$\tau_i = \mathbf{n}_i^{\top}\hat Z_i\ \text{(revolute)}, \qquad \tau_i = \mathbf{f}_i^{\top}\hat Z_i\ \text{(prismatic)}$$

**Extracting the matrices:** $\mathbf{g}$ from $\dot{\mathbf{q}} = \ddot{\mathbf{q}} = 0$; $M$'s column $j$ from $\ddot{\mathbf{q}} = \mathbf{e}_j$ with gravity off; $C\dot{\mathbf{q}}$ from $\ddot{\mathbf{q}} = 0$ with gravity off.

*From* [3.3](lessons/03-03-newton-euler-recursive-dynamics.md)

### Trajectory profiles

**Cubic** ($\dot\theta = 0$ at both ends), $\Delta = \theta_f-\theta_0$:

$$\theta(t) = \theta_0+\frac{3\Delta}{T^2}t^2-\frac{2\Delta}{T^3}t^3, \qquad \dot\theta_{\max} = \frac{1.5\Delta}{T}, \qquad \ddot\theta_{\max} = \frac{6\Delta}{T^2}$$

**Quintic** ($\dot\theta = \ddot\theta = 0$ at both ends):

$$\theta(t) = \theta_0+\Delta\left[10s^3-15s^4+6s^5\right],\ s = t/T, \qquad \dot\theta_{\max} = \frac{1.875\Delta}{T}, \qquad \ddot\theta_{\max} = \frac{5.7735\Delta}{T^2}$$

**Trapezoid (LSPB):** $v = \dfrac{\Delta}{T-t_b}$, $a = \dfrac{v}{t_b}$, $t_b\leq T/2$.

**Minimum time:** $T_{\min} = \max\left(\dfrac{k_v\Delta}{\dot\theta^{\rm lim}},\ \sqrt{\dfrac{k_a\Delta}{\ddot\theta^{\rm lim}}}\right)$ with $(k_v,k_a) = (1.5,6)$ cubic, $(1.875,5.774)$ quintic, $(1.5,4.5)$ trapezoid at $t_b = T/3$.

**Synchronize:** take $T = \max_iT_{\min,i}$ and regenerate every joint.

**Bang-bang (time-optimal):** $t_b = \dot\theta^{\rm lim}/\ddot\theta^{\rm lim}$, $T = \Delta/\dot\theta^{\rm lim}+t_b$ (or triangular $T = 2\sqrt{\Delta/\ddot\theta^{\rm lim}}$ if the velocity limit is never reached).

*From* [3.4](lessons/03-04-joint-space-trajectories.md)

### Cartesian trajectories

$$\mathbf{p}(t) = \mathbf{p}_A+s(t)\left(\mathbf{p}_B-\mathbf{p}_A\right), \qquad q(t) = \mathrm{slerp}\left(q_A,q_B,s(t)\right)$$

Use the **same** $s(t)$ for both, so position and orientation arrive together.

**Via-point blend deviation:** $d = \dfrac{\|\Delta\mathbf{v}\|t_b}{8}$, with $a = \dfrac{\|\Delta\mathbf{v}\|}{t_b}$ and $d^{\min} = \dfrac{\|\Delta\mathbf{v}\|^2}{8a^{\rm lim}}$.

**Pre-execution checks:** reachability along the whole path, $\sigma_{\min}>\epsilon$, joint limits, and **joint rates** $\dot{\mathbf{q}} = J^{-1}\dot{\mathbf{x}}$ (whose peak is not where the tool is fastest).

*From* [3.5](lessons/03-05-cartesian-trajectories-via-points.md)

### Joint control

**Geared joint model:**

$$J_{\rm eff}\ddot\theta_m+B\dot\theta_m = \tau_m-d, \qquad J_{\rm eff} = J_m+\frac{M_{kk}(\mathbf{q})}{r^2}, \qquad d = \frac{\text{everything else}}{r}$$

$$K_p = J_{\rm eff}\omega_n^2, \qquad K_d = 2\zeta J_{\rm eff}\omega_n-B, \qquad e_{ss} = \frac{d_0}{K_p}$$

**PID stability bound:** $K_i<\dfrac{(B+K_d)K_p}{J_{\rm eff}}$.

**Gear-ratio guideline:** independent-joint control is sound when $\dfrac{M_{kk}^{\max}}{r^2}\lesssim J_m$, i.e. $r\gtrsim\sqrt{M_{kk}^{\max}/J_m}$.

**Computed torque** — here $K_p$ has units $\mathrm{s^{-2}}$ and $K_d$ units $\mathrm{s^{-1}}$:

$$\boldsymbol\tau = \hat M\left(\ddot{\mathbf{q}}_d-K_d\dot{\mathbf{e}}-K_p\mathbf{e}\right)+\hat C\dot{\mathbf{q}}+\hat{\mathbf{g}} \quad\Longrightarrow\quad \ddot{\mathbf{e}}+K_d\dot{\mathbf{e}}+K_p\mathbf{e} = \mathbf{0}$$

$$K_p = \omega_n^2, \qquad K_d = 2\zeta\omega_n$$

**Model error appears as a disturbance:** $\boldsymbol\eta = \hat M^{-1}\left[(\hat M-M)\ddot{\mathbf{q}}+(\hat C-C)\dot{\mathbf{q}}+(\hat{\mathbf{g}}-\mathbf{g})\right]$.

**PD + gravity compensation** is asymptotically stable for regulation with any positive-definite gains.

*From* [4.1](lessons/04-01-independent-joint-control.md), [4.2](lessons/04-02-computed-torque-control.md)

### Contact control

$$\boldsymbol\tau = J^{\top}K_x\left(\mathbf{x}_d-\mathbf{x}\right)+\hat{\mathbf{g}} \quad\text{(stiffness control)}$$

$$\boldsymbol\tau = J^{\top}\left(-B_d\dot{\mathbf{e}}-K_d\mathbf{e}\right)+\hat{\mathbf{g}} \quad\text{(impedance, with } M_d = \hat M_x\text{)}$$

$$\boldsymbol\tau = J^{\top}\left[S\mathbf{F}_{\rm pos}+(I-S)\mathbf{F}_{\rm force}\right]+\hat{\mathbf{g}} \quad\text{(hybrid)}$$

| | Input | Output | Suits |
|---|---|---|---|
| Impedance | motion | force | stiff arm, soft environment |
| Admittance | force | motion | soft arm, stiff environment |

**Rules:** the number of force-controlled directions equals the number of environment constraints; keep $K_d\lesssim K_{\rm env}$; force loops need integral action; a passive controller is stable against any passive environment.

*From* [4.3](lessons/04-03-force-hybrid-control.md)

### Mobile robots

$$\dot x = v\cos\phi, \qquad \dot y = v\sin\phi, \qquad \dot\phi = \omega, \qquad \dot x\sin\phi-\dot y\cos\phi = 0$$

**Differential drive:**

$$v = \frac{r\left(\dot\varphi_R+\dot\varphi_L\right)}{2}, \qquad \omega = \frac{r\left(\dot\varphi_R-\dot\varphi_L\right)}{L}, \qquad R = \frac{v}{\omega}$$

$$\dot\varphi_R = \frac{2v+\omega L}{2r}, \qquad \dot\varphi_L = \frac{2v-\omega L}{2r}$$

**Exact arc integration** (use the straight-line form when $|\omega|<\epsilon$):

$$\phi' = \phi+\omega\Delta t, \qquad x' = x+\frac{v}{\omega}\left[\sin\phi'-\sin\phi\right], \qquad y' = y-\frac{v}{\omega}\left[\cos\phi'-\cos\phi\right]$$

**Sideways motion** is the Lie bracket $[\mathbf{g}_1,\mathbf{g}_2] = (\sin\phi,\ -\cos\phi,\ 0)$, achieved by a drive–turn–drive-back–turn-back cycle with net displacement $\epsilon\delta$. **Brockett:** no smooth time-invariant feedback stabilizes it to a point; track a trajectory instead.

*From* [4.4](lessons/04-04-wheeled-mobile-robots.md)

### Localization

**Odometry error growth:**

$$\text{systematic: } \Delta\phi = \frac{\Delta\omega}{v}d\ (\propto d), \qquad \Delta y\approx\frac{\Delta\omega}{2v}d^2\ (\propto d^2)$$
$$\text{random: } \sigma_\phi(d) = \sigma_\phi^{(1)}\sqrt d, \qquad \sigma_{\rm lat}(d)\approx\frac{\sigma_\phi^{(1)}d^{3/2}}{\sqrt3}$$

**Calibrate before filtering** — systematic errors dominate by two orders of magnitude (UMBmark: drive a square both ways, solve for $E_d$ and $E_b$).

**Bayes filter:** predict (uncertainty grows), then update (uncertainty shrinks).

**Kalman update:** $K = \dfrac{\sigma_-^2}{\sigma_-^2+\sigma_z^2}$, $\hat x^+ = \hat x^-+K(z-\hat x^-)$, $\sigma_+^2 = (1-K)\sigma_-^2$ — equivalently, **precisions add**.

**Steady state** with $\sigma_{\rm added}$ per interval: solve $u^2+\sigma_{\rm added}^2u-\sigma_{\rm added}^2\sigma_z^2 = 0$ for $u = (\sigma_+^{ss})^2$; roughly $\sigma_+^{ss}\sim\sqrt{\sigma_{\rm added}\sigma_z}$.

*From* [4.5](lessons/04-05-localization.md)

### Motion planning

$$\mathcal{C}_{\rm obs} = \left\{\mathbf{q}\ :\ \mathcal{A}(\mathbf{q})\cap\mathcal{O}\neq\emptyset\right\}, \qquad \mathcal{C}_{\rm free} = \mathcal{C}\setminus\mathcal{C}_{\rm obs}$$

**Grid:** $k^n$ cells — feasible to about $n = 3$.

**PRM cost:** $\approx N+\tfrac{Nk}{2}m$ collision checks; reusable for many queries.

**RRT:** sample, extend the nearest node by $\epsilon$, goal-bias 5–10%. The Voronoi bias makes it explore outward automatically. **RRT\*** is asymptotically optimal.

**Narrow passage:** $P(\text{sample in passage})\sim w^d$, so expected samples $\sim w^{-d}$.

**Potential field:** $U = \tfrac12k_a\|\mathbf{q}-\mathbf{q}_{\rm goal}\|^2+\tfrac12k_r\left(\tfrac1\rho-\tfrac1{\rho_0}\right)^2$ for $\rho<\rho_0$ — fast, reactive, and trapped by local minima.

| Property | Achieved by |
|---|---|
| Resolution complete | grid search |
| Probabilistically complete | PRM, RRT |
| Asymptotically optimal | PRM\*, RRT\* |
| None | potential fields |

*From* [4.6](lessons/04-06-motion-planning.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Matrices as linear maps, columns as images of basis vectors | [`linalg-refresher` 2.1](../linalg-refresher/lessons/02-01-matrices-as-linear-maps.md) |
| Orthonormality, inner products, and orthogonal matrices | [`linalg-refresher` 4.1](../linalg-refresher/lessons/04-01-inner-products-orthogonality.md) |
| Determinants and their geometric meaning | [`linalg-refresher` 2.3](../linalg-refresher/lessons/02-03-determinants.md) |
| Cross product, right-hand rule, orientation | [`linalg-refresher` 1.4](../linalg-refresher/lessons/01-04-cross-product-and-orientation.md) |
| Rank, null space, and the four fundamental subspaces | [`linalg-refresher` 2.2](../linalg-refresher/lessons/02-02-inverses-and-four-subspaces.md) |
| Pseudoinverse, projection and least squares | [`linalg-refresher` 4.2](../linalg-refresher/lessons/04-02-projection-least-squares.md) |
| Singular value decomposition and condition number | [`linalg-refresher` 5.2](../linalg-refresher/lessons/05-02-svd.md) |
| Quadratic forms and positive definiteness | [`linalg-refresher` 5.1](../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md) |
| Newton's method for nonlinear systems; Levenberg–Marquardt damping | [`numerical-analysis`](../numerical-analysis/syllabus.md) |
| Polynomial (Hermite) interpolation with derivative constraints | [`numerical-analysis`](../numerical-analysis/syllabus.md) |
| Rigid-body kinematics, angular velocity, moment of inertia | [`engineering-dynamics` 3.1](../engineering-dynamics/lessons/03-01-rotation-instantaneous-center.md), [3.3](../engineering-dynamics/lessons/03-03-mass-moment-of-inertia.md) |
| Generalized coordinates, constraints, and virtual work | [`analytical-mechanics` 1.3](../analytical-mechanics/lessons/01-03-generalized-coordinates-constraints.md) |
| Euler–Lagrange equations and their application | [`analytical-mechanics` 1.4](../analytical-mechanics/lessons/01-04-lagrangian-applications.md) |
| Rigid-body rotation, inertia tensor, principal axes | [`analytical-mechanics` 4.4](../analytical-mechanics/lessons/04-04-rigid-body-dynamics.md) |
| Second-order response: $\omega_n$, $\zeta$, overshoot, settling time | [`control-systems` 2.2](../control-systems/lessons/02-02-second-order-response.md) |
| PID control and tuning | [`control-systems` 4.1](../control-systems/lessons/04-01-pid-control.md), [4.2](../control-systems/lessons/04-02-tuning-pid.md) |
| Routh–Hurwitz stability criterion | [`control-systems` 2.4](../control-systems/lessons/02-04-stability-routh-hurwitz.md) |
| State-space models and observers | [`control-systems` 5.1](../control-systems/lessons/05-01-state-space-modeling.md), [5.4](../control-systems/lessons/05-04-pole-placement-observers.md) |
| Gaussian distributions, Bayes' rule, conditional probability | [`probability-theory`](../probability-theory/syllabus.md) |
| Graph search: Dijkstra, A\*, complexity | [`algorithms`](../algorithms/syllabus.md) |
| Complexity classes and PSPACE-hardness | [`computational-complexity`](../computational-complexity/syllabus.md) |
| Taylor expansion, gradients, and the Jacobian of a vector map | [`calc-refresher`](../calc-refresher/syllabus.md) |

## Pitfalls

### Rotations and orientation

- You might mistype $R_y$ — its minus sign is in the bottom-left, unlike $R_x$ and $R_z$.
  *([1.2](lessons/01-02-rotation-matrices.md))*
- You might invert a rotation matrix numerically. Transpose it.
  *([1.2](lessons/01-02-rotation-matrices.md))*
- You might mix body and fixed axes. Post-multiply for current axes, pre-multiply for fixed ones — which reverses the apparent order.
  *([1.2](lessons/01-02-rotation-matrices.md), [1.3](lessons/01-03-euler-fixed-angles-axis-angle.md))*
- You might use `atan` instead of `atan2`. `atan2` needs both arguments to resolve the quadrant, and this is the single most common source of orientation bugs.
  *([1.3](lessons/01-03-euler-fixed-angles-axis-angle.md), [2.1](lessons/02-01-inverse-kinematics-analytic.md))*
- You might specify "Euler angles" without the convention. There are twelve axis sequences and two axis conventions; state both.
  *([1.3](lessons/01-03-euler-fixed-angles-axis-angle.md))*
- You might compare orientations by comparing angle triples. Every orientation has two, and infinitely many at gimbal lock. Compare matrices or quaternions.
  *([1.3](lessons/01-03-euler-fixed-angles-axis-angle.md))*
- You might interpolate Euler angles. The path wanders, the speed varies, and it fails near gimbal lock. Use slerp.
  *([1.3](lessons/01-03-euler-fixed-angles-axis-angle.md), [1.4](lessons/01-04-quaternions.md))*
- You might forget the quaternion half-angle, or treat $q$ and $-q$ as different orientations, or slerp without checking the sign of $q_0\cdot q_1$.
  *([1.4](lessons/01-04-quaternions.md))*
- You might mix Hamilton and JPL quaternion conventions, or $(w,x,y,z)$ and $(x,y,z,w)$ storage orders.
  *([1.4](lessons/01-04-quaternions.md))*
- You might let a rotation matrix or quaternion drift. Re-orthonormalize or renormalize every step.
  *([1.2](lessons/01-02-rotation-matrices.md), [1.4](lessons/01-04-quaternions.md))*

### Transforms and kinematics

- You might transpose a homogeneous transform to invert it, or negate the translation without rotating it. It is $\begin{bmatrix}R^{\top}&-R^{\top}\mathbf{p}\\0&1\end{bmatrix}$.
  *([1.5](lessons/01-05-homogeneous-transforms.md))*
- You might give a free vector a fourth coordinate of 1. Points get 1, directions get 0.
  *([1.5](lessons/01-05-homogeneous-transforms.md))*
- You might multiply transforms in the wrong order. Adjacent subscripts must cancel.
  *([1.2](lessons/01-02-rotation-matrices.md), [1.5](lessons/01-05-homogeneous-transforms.md))*
- You might mix standard and modified DH conventions, or misread the off-by-one ($\hat z_i$ is along joint axis $i+1$).
  *([1.6](lessons/01-06-denavit-hartenberg-forward-kinematics.md))*
- You might forget a joint's zero offset — the constant $\theta_i$ when the encoder reads zero.
  *([1.6](lessons/01-06-denavit-hartenberg-forward-kinematics.md))*
- You might make $\theta$ the variable on a prismatic joint. It is $d$.
  *([1.6](lessons/01-06-denavit-hartenberg-forward-kinematics.md))*
- You might forget to count the ground link in the mobility formula, or use $m = 6$ for a planar mechanism.
  *([1.1](lessons/01-01-robots-links-configuration-space.md))*
- You might conflate configuration space with workspace — they can have different dimensions and the map between them is many-to-one.
  *([1.1](lessons/01-01-robots-links-configuration-space.md))*
- You might forget that revolute joint variables wrap. A planner treating $\mathcal{C}$ as a box misses the short path.
  *([1.1](lessons/01-01-robots-links-configuration-space.md), [4.6](lessons/04-06-motion-planning.md))*

### Inverse kinematics and the Jacobian

- You might call `arccos` without checking $|\cos\theta_2|\leq1$. Out of range means unreachable, and NaN propagates silently.
  *([2.1](lessons/02-01-inverse-kinematics-analytic.md))*
- You might return only one IK solution, or flip $\theta_2$ while keeping $\theta_1$. Both branches need both angles recomputed.
  *([2.1](lessons/02-01-inverse-kinematics-analytic.md))*
- You might switch IK branches mid-trajectory. The tool leaves its path during the reconfiguration.
  *([2.1](lessons/02-01-inverse-kinematics-analytic.md))*
- You might assume a closed form exists. A general 6R arm without a spherical wrist has none — check Pieper's condition.
  *([2.1](lessons/02-01-inverse-kinematics-analytic.md))*
- You might use a bad seed for numerical IK, or take a full Newton step far from the solution. Seed with the previous configuration and limit the step.
  *([2.2](lessons/02-02-inverse-kinematics-numerical.md))*
- You might use the wrong pseudoinverse formula — $J^{\top}(JJ^{\top})^{-1}$ for wide, $(J^{\top}J)^{-1}J^{\top}$ for tall.
  *([2.2](lessons/02-02-inverse-kinematics-numerical.md))*
- You might mix position (metres) and orientation (radians) in one error vector without weighting.
  *([2.2](lessons/02-02-inverse-kinematics-numerical.md))*
- You might build a Jacobian column with $\mathbf{p}_i$ instead of $\mathbf{p}_{i-1}$, or mix frames, or give a prismatic joint an angular row.
  *([2.3](lessons/02-03-manipulator-jacobian.md))*
- You might use the analytical Jacobian without meaning to and inherit gimbal lock. Use the geometric form.
  *([2.3](lessons/02-03-manipulator-jacobian.md))*
- You might use $\det J$ as a singularity detector — it has units and is undefined for non-square $J$. Use $\sigma_{\min}$.
  *([2.3](lessons/02-03-manipulator-jacobian.md), [2.4](lessons/02-04-singularities.md))*
- You might think avoiding the exact singularity is enough. The joint-rate demand is already severe several degrees away.
  *([2.4](lessons/02-04-singularities.md))*
- You might assume singularities are only at the workspace boundary. The wrist singularity at $\theta_5 = 0$ is interior and is the dangerous one.
  *([2.4](lessons/02-04-singularities.md))*
- You might use $J^{-1}$ where $J^{\top}$ belongs. Velocity uses $J$; force uses $J^{\top}$.
  *([2.5](lessons/02-05-statics-jacobian-transpose.md))*
- You might build a Cartesian stiffness from a diagonal joint stiffness. $K_q = J^{\top}K_xJ$ is generally full.
  *([2.5](lessons/02-05-statics-jacobian-transpose.md), [4.3](lessons/04-03-force-hybrid-control.md))*

### Dynamics

- You might use the tool Jacobian for a link's kinetic energy. Each link needs the Jacobian of its own centre of mass.
  *([3.1](lessons/03-01-lagrangian-dynamics.md))*
- You might treat $M$ as constant. Its configuration dependence *is* the Coriolis terms, and $M_{kk}$ varies by factors of three.
  *([3.1](lessons/03-01-lagrangian-dynamics.md), [3.2](lessons/03-02-manipulator-dynamics-equation.md))*
- You might drop the Coriolis terms without checking. They scale as $\dot q^2$ — negligible at 1 rad/s, dominant at 10.
  *([3.1](lessons/03-01-lagrangian-dynamics.md), [3.2](lessons/03-02-manipulator-dynamics-equation.md))*
- You might produce an asymmetric or non-positive-definite $M$. Both are impossible; check them.
  *([3.1](lessons/03-01-lagrangian-dynamics.md))*
- You might expect $C$ to be unique. Only $C\dot{\mathbf{q}}$ is physical; use the Christoffel form for skew-symmetry.
  *([3.2](lessons/03-02-manipulator-dynamics-equation.md))*
- You might assume a kinematic singularity is a dynamic problem. $M$ stays positive definite everywhere.
  *([3.2](lessons/03-02-manipulator-dynamics-equation.md))*
- You might mix frames or sweep directions in the Newton–Euler recursion — kinematics outward, forces inward.
  *([3.3](lessons/03-03-newton-euler-recursive-dynamics.md))*
- You might forget the gravity trick, or apply it *and* add gravity separately, doubling it. Set $\dot{\mathbf{v}}_0 = -\mathbf{g}$ (pointing up).
  *([3.3](lessons/03-03-newton-euler-recursive-dynamics.md))*
- You might use the Lagrangian formulation for real-time computation. It is $O(n^4)$; use the $O(n)$ recursion.
  *([3.1](lessons/03-01-lagrangian-dynamics.md), [3.3](lessons/03-03-newton-euler-recursive-dynamics.md))*
- You might forget friction. It is not in $M\ddot{\mathbf{q}}+C\dot{\mathbf{q}}+\mathbf{g}$ and can be 10–30% of a geared joint's torque.
  *([3.2](lessons/03-02-manipulator-dynamics-equation.md), [4.2](lessons/04-02-computed-torque-control.md))*

### Trajectories

- You might forget to synchronize the joints, giving different finish times and a jerky tool path.
  *([3.4](lessons/03-04-joint-space-trajectories.md))*
- You might check only the velocity limit. Short moves are acceleration-limited; long ones are velocity-limited.
  *([3.4](lessons/03-04-joint-space-trajectories.md))*
- You might assume the quintic is strictly better. Its peak velocity is 25% higher, so it is slower when velocity binds.
  *([3.4](lessons/03-04-joint-space-trajectories.md))*
- You might treat $\ddot\theta^{\rm lim}$ as a constant. It is torque divided by a configuration-dependent inertia.
  *([3.4](lessons/03-04-joint-space-trajectories.md))*
- You might check reachability only at a Cartesian path's endpoints. A straight chord dips inward across an annulus.
  *([3.5](lessons/03-05-cartesian-trajectories-via-points.md))*
- You might assume constant tool speed means constant joint speed, or check joint rates only where the tool is fastest.
  *([3.5](lessons/03-05-cartesian-trajectories-via-points.md))*
- You might forget that a via-point blend misses the via point. If the waypoint is a hole, it must be a fine point.
  *([3.5](lessons/03-05-cartesian-trajectories-via-points.md))*

### Control

- You might use the joint-side inertia in a motor-side loop. Reflected inertia is $M_{kk}/r^2$ and reflected torque is $\tau/r$.
  *([4.1](lessons/04-01-independent-joint-control.md))*
- You might raise $K_p$ to kill the gravity droop. It works until the drivetrain resonance is excited. Use gravity feedforward.
  *([4.1](lessons/04-01-independent-joint-control.md))*
- You might expect integral action to reject Coriolis terms. It rejects constant disturbances; those are fast.
  *([4.1](lessons/04-01-independent-joint-control.md))*
- You might use torque units for computed-torque gains. After cancellation they are $\mathrm{s^{-2}}$ and $\mathrm{s^{-1}}$.
  *([4.2](lessons/04-02-computed-torque-control.md))*
- You might run computed torque too slowly. The cancellation is exact only at the sampling instant; use $\geq1$ kHz.
  *([4.2](lessons/04-02-computed-torque-control.md))*
- You might trust CAD inertias. Real arms differ by 10–30%; identify the parameters, and prioritize the gravity ones.
  *([4.2](lessons/04-02-computed-torque-control.md))*
- You might control position and force in the same direction. The environment relates them; choose one per direction.
  *([4.3](lessons/04-03-force-hybrid-control.md))*
- You might command a stiffness above the environment's, causing chatter. Be softer than what you touch.
  *([4.3](lessons/04-03-force-hybrid-control.md))*
- You might use a proportional-only force loop. Force loops need integral action.
  *([4.3](lessons/04-03-force-hybrid-control.md))*
- You might mismatch causality — impedance against a very stiff environment, or admittance against a very soft one.
  *([4.3](lessons/04-03-force-hybrid-control.md))*

### Mobile robots and planning

- You might treat a differential-drive robot as holonomic. It cannot move sideways, and a plan that assumes it can is unexecutable.
  *([4.4](lessons/04-04-wheeled-mobile-robots.md))*
- You might attempt point stabilization with smooth feedback. Brockett's theorem forbids it; track a trajectory.
  *([4.4](lessons/04-04-wheeled-mobile-robots.md))*
- You might use the arc formulas at $\omega = 0$, or integrate with a naive Euler step on a curved path.
  *([4.4](lessons/04-04-wheeled-mobile-robots.md))*
- You might filter before calibrating. Systematic odometry errors dominate by two orders of magnitude.
  *([4.5](lessons/04-05-localization.md))*
- You might trust a Gaussian belief through an ambiguity. A Kalman filter cannot represent "here or there."
  *([4.5](lessons/04-05-localization.md))*
- You might mis-associate a landmark. One wrong association can corrupt a filter permanently.
  *([4.5](lessons/04-05-localization.md))*
- You might plan in the workspace instead of configuration space, or try to build $\mathcal{C}_{\rm obs}$ explicitly.
  *([4.6](lessons/04-06-motion-planning.md))*
- You might use a grid above three dimensions. $k^n$ is a wall, not a slope.
  *([4.6](lessons/04-06-motion-planning.md))*
- You might read a sampling planner's failure as proof that no solution exists. It can never report that.
  *([4.6](lessons/04-06-motion-planning.md))*
- You might connect nodes with straight lines on a nonholonomic robot. Use Dubins or Reeds–Shepp primitives.
  *([4.4](lessons/04-04-wheeled-mobile-robots.md), [4.6](lessons/04-06-motion-planning.md))*
- You might forget self-collision, or rely on potential fields globally and be trapped in a local minimum.
  *([4.6](lessons/04-06-motion-planning.md))*
