# Robotics & Kinematics · Lesson 2.5: Statics and the Jacobian transpose

> ⏱ ~15 min · Module 2: Inverse kinematics and the Jacobian · Builds on: [2.3 The manipulator Jacobian](02-03-manipulator-jacobian.md), [2.4 Singularities](02-04-singularities.md) · Unlocks: [3.2 The manipulator dynamics equation](03-02-manipulator-dynamics-equation.md), [4.3 Force and hybrid control](04-03-force-hybrid-control.md)

## Why this matters

An arm that only moves through free space is a small fraction of robotics. The interesting jobs — assembly, polishing, deburring, surgery, anything with contact — require controlling **force**, and force at the tool has to be produced by torque at the joints.

The relation between them is remarkably clean: $\boldsymbol\tau = J^{\top}\mathbf{F}$. The **same** Jacobian that maps joint rates to tool velocity, transposed, maps tool forces to joint torques. That is not a coincidence but a consequence of energy conservation, and it is one of the most-used facts in the subject.

It also answers practical questions immediately: how big a motor does joint 2 need? What tool force can the arm exert in this configuration? What does a force sensor at the wrist imply about the joint loads? And it explains a fact that looks paradoxical — at a singularity, the arm can resist *unlimited* force in the direction it cannot move.

## The idea

The derivation is [virtual work](../reference.md#virtual-work), and it takes three lines.

Hold the arm in static equilibrium against an external wrench $\mathbf{F}$ at the tool (a wrench is a force and a moment stacked: $\mathbf{F} = (\mathbf{f},\ \mathbf{n})$). Imagine a **virtual displacement** — an infinitesimal, kinematically admissible joint motion $\delta\mathbf{q}$, which produces a tool displacement $\delta\mathbf{x} = J\delta\mathbf{q}$.

Because the system is in equilibrium, the virtual work done by the joint torques must equal the virtual work done against the external wrench:

$$\boldsymbol\tau^{\top}\delta\mathbf{q} = \mathbf{F}^{\top}\delta\mathbf{x} = \mathbf{F}^{\top}J\,\delta\mathbf{q}.$$

This holds for **every** $\delta\mathbf{q}$, so the coefficients must match:

$$\boldsymbol\tau^{\top} = \mathbf{F}^{\top}J \quad\Longrightarrow\quad \boxed{\boldsymbol\tau = J^{\top}\mathbf{F}.}$$

*In words: the Jacobian transpose maps tool wrenches to joint torques.* No differentiation, no dynamics, no assumptions beyond equilibrium and energy conservation.

Two consequences worth having immediately:

**The direction of the map is opposite to velocity.** Velocity goes joints → tool through $J$; force goes tool → joints through $J^{\top}$. That reversal is the **kinetostatic duality**, and it means everything you know about $J$'s rank structure has a force interpretation.

**The dual of a lost velocity direction is an infinite force capability.** At a singularity, $J$ has a left null space — a direction $\mathbf{F}_0$ with $J^{\top}\mathbf{F}_0 = 0$. An external force along $\mathbf{F}_0$ produces **zero joint torque**: the structure carries it, not the motors. The arm can resist it without effort, which is exactly why a fully extended arm can push very hard along its own length and not at all sideways.

## The formal version

**The statics relation.**

$$\boxed{\;\boldsymbol\tau = J^{\top}(\mathbf{q})\,\mathbf{F}, \qquad \mathbf{F} = \begin{bmatrix}\mathbf{f}\\\mathbf{n}\end{bmatrix}\in\mathbb{R}^6,\;}$$

with $\mathbf{f}$ the force and $\mathbf{n}$ the moment applied **by the tool on the environment**. (Sign conventions vary; state yours. The convention here makes $\boldsymbol\tau$ the torque the motors must supply.)

**Duality, side by side.**

| | Velocity | Force |
|---|---|---|
| Map | $\dot{\mathbf{x}} = J\dot{\mathbf{q}}$ | $\boldsymbol\tau = J^{\top}\mathbf{F}$ |
| Direction | joints → tool | tool → joints |
| Achievable set | $\operatorname{col}J$ | all of $\mathbb{R}^n$ for $\boldsymbol\tau$ |
| Null space | $\operatorname{null}J$: motion with no tool velocity | $\operatorname{null}J^{\top}$: force with no joint torque |

*In words: the directions the tool cannot move in are exactly the directions in which external force is carried by the structure rather than the motors.*

**The inverse problem.** Given joint torques, what tool wrench do they produce?

$$\mathbf{F} = J^{-\top}\boldsymbol\tau \qquad (\text{square, nonsingular }J),$$

or $\mathbf{F} = \left(J^{\top}\right)^{+}\boldsymbol\tau$ in general. **This is the harder direction**, because $J^{-\top}$ blows up at a singularity — which is the force-side statement of the same conditioning problem, with the roles of "impossible" and "effortless" exchanged.

**Force ellipsoid.** The set of tool forces achievable with bounded joint torque $\|\boldsymbol\tau\|\leq1$ is

$$\left\{\mathbf{F}\ :\ \mathbf{F}^{\top}JJ^{\top}\mathbf{F}\leq1\right\},$$

an ellipsoid with semi-axes $1/\sigma_i$ along the singular vectors of $J$.

**Compare with the manipulability ellipsoid** from [2.3](02-03-manipulator-jacobian.md), whose semi-axes are $\sigma_i$. The two ellipsoids are **reciprocal**:

$$\boxed{\;\text{easy to move} \iff \text{hard to push}, \qquad \text{hard to move} \iff \text{easy to push}.\;}$$

That is a real and useful engineering fact, not a curiosity. An arm holding a part against a fixture wants to be *stiff* in the constrained direction, so it should be positioned near-singular in that direction — the opposite of what a fast free-space motion wants.

**Gravity torque.** A link of mass $m_i$ with centre of mass at $\mathbf{p}_{c_i}$ contributes

$$\boxed{\;\boldsymbol\tau_g = -\sum_i J_{v_i}^{\top}\,m_i\mathbf{g},\;}$$

where $J_{v_i}$ is the linear-velocity Jacobian **of that link's centre of mass**. This is the $\mathbf{g}(\mathbf{q})$ term that reappears in the dynamics of [3.2](03-02-manipulator-dynamics-equation.md), and it is the largest steady load most joints ever see.

**Joint-space stiffness.** If the tool behaves like a spring, $\mathbf{F} = K_x\,\delta\mathbf{x}$, then

$$\boldsymbol\tau = J^{\top}K_xJ\,\delta\mathbf{q} \quad\Longrightarrow\quad \boxed{K_q = J^{\top}K_xJ,}$$

the **congruence transformation** that converts a Cartesian stiffness into a joint stiffness. It is the basis of impedance control in [4.3](04-03-force-hybrid-control.md), and it makes clear that a constant Cartesian stiffness requires a configuration-dependent joint stiffness.

**Why the Jacobian-transpose IK method works.** [2.2](02-02-inverse-kinematics-numerical.md) offered $\Delta\mathbf{q} = \alpha J^{\top}\mathbf{e}$ as a cheap alternative to the pseudoinverse. Now it has a physical meaning: **imagine a spring pulling the tool toward the target.** The spring force is $\propto\mathbf{e}$, the resulting joint torques are $J^{\top}\mathbf{e}$, and letting the joints move in the direction of those torques drags the arm toward the goal. It cannot blow up, because a bounded spring force produces bounded torques — no matter how singular the configuration.

## Picture

![A two-panel figure. Left: a planar two-link arm with an external force arrow applied at the tool, and the two joint torques drawn as curved arrows at the joints, with the moment arm from each joint to the tool marked by a dashed line and a right-angle mark showing the perpendicular distance, annotated with the statement that each joint torque is the force times the perpendicular distance from that joint to the line of action. Right: two ellipses drawn at the tool for the same configuration — the manipulability ellipse with semi-axes proportional to the singular values, and the force ellipse with semi-axes proportional to their reciprocals — drawn overlapping and visibly perpendicular in their long axes, with the annotation that the direction the arm moves best in is the direction it pushes worst in.](assets/02-05-fig1.svg)

Left: the geometry behind $\boldsymbol\tau = J^{\top}\mathbf{F}$. Each entry of $J^{\top}\mathbf{F}$ is a dot product of a Jacobian column with the force, which is exactly the classical moment of the force about that joint's axis.

Right: the duality. The two ellipses have reciprocal axes, so their long axes are perpendicular. Positioning an arm for speed and positioning it for force are opposite objectives.

## Worked examples

**Example 1 (the boss problem: force at the tool).** A planar 2R arm with $L_1 = L_2 = 1$ m holds its tool at $(1,1)$ m and resists a $10$ N force in the $+x$ direction. Find the joint torques in both configurations.

*The two configurations* (from [2.1](02-01-inverse-kinematics-analytic.md)):

$$\text{elbow-down: } (\theta_1,\theta_2) = (0°,\ 90°), \qquad \text{elbow-up: } (90°,\ -90°).$$

*Elbow-down.* With $s_1 = 0$, $c_1 = 1$, $s_{12} = 1$, $c_{12} = 0$:

$$J = \begin{bmatrix}-L_1s_1-L_2s_{12}&-L_2s_{12}\\L_1c_1+L_2c_{12}&L_2c_{12}\end{bmatrix} = \begin{bmatrix}-1&-1\\1&0\end{bmatrix}.$$

$$\boldsymbol\tau = J^{\top}\mathbf{F} = \begin{bmatrix}-1&1\\-1&0\end{bmatrix}\begin{bmatrix}10\\0\end{bmatrix} = \begin{bmatrix}-10\\-10\end{bmatrix}\ \mathrm{N\cdot m}.$$

**Both joints need $10$ N·m**, both negative (acting to rotate the arm in the $-\theta$ direction, resisting the push).

*Check by elementary statics.* In this configuration the arm goes from $(0,0)$ to $(1,0)$ to $(1,1)$. A $+x$ force of 10 N at $(1,1)$ has moment about joint 1 (at the origin) of

$$M_1 = \mathbf{r}\times\mathbf{f} = (1,1,0)\times(10,0,0) = (0,0,\ 1(0)-1(10)) = -10\ \mathrm{N\cdot m}\ \checkmark$$

and about joint 2 (at $(1,0)$), with $\mathbf{r} = (0,1,0)$:

$$M_2 = (0,1,0)\times(10,0,0) = (0,0,-10)\ \mathrm{N\cdot m}\ \checkmark$$

**$J^{\top}$ is computing moments**, exactly as classical statics would, and the agreement is the point: the Jacobian transpose is not a new principle, it is a systematic way of taking all the moments at once.

*Elbow-up.* With $\theta_1 = 90°$, $\theta_2 = -90°$: $s_1 = 1$, $c_1 = 0$, $s_{12} = 0$, $c_{12} = 1$:

$$J = \begin{bmatrix}-1-0&0\\0+1&1\end{bmatrix} = \begin{bmatrix}-1&0\\1&1\end{bmatrix}, \qquad \boldsymbol\tau = \begin{bmatrix}-1&1\\0&1\end{bmatrix}\begin{bmatrix}10\\0\end{bmatrix} = \begin{bmatrix}-10\\0\end{bmatrix}\ \mathrm{N\cdot m}.$$

**The elbow torque is zero.**

*Why.* In this posture the arm runs from $(0,0)$ up to $(0,1)$ and across to $(1,1)$. Joint 2 sits at $(0,1)$, and the tool at $(1,1)$ is displaced from it purely in $+x$ — parallel to the applied force. **The force's line of action passes through joint 2's axis, so its moment arm is zero.**

*Why this matters more than it looks.* Both configurations reach the same point and resist the same force, but they load the motors completely differently:

| | Elbow-down | Elbow-up |
|---|---|---|
| $\tau_1$ | $-10$ N·m | $-10$ N·m |
| $\tau_2$ | $-10$ N·m | **0** |
| $\|\boldsymbol\tau\|$ | 14.14 N·m | 10.00 N·m |

The elbow-up posture needs **29% less total torque** for the identical task. If the elbow motor is the weak one — and on most arms it is, because it is carried by the shoulder and so is sized down — this is the difference between a task that works and one that stalls.

**Choosing a configuration for its force capability is a real design decision**, and it is invisible from the kinematics alone. Both configurations are kinematically identical in what they reach; only $J^{\top}$ distinguishes them.

**Example 2 (force capability and the duality).** The same arm, elbow-down at $(1,1)$. What tool force can it exert with joint torques limited to $\pm20$ N·m?

*The force map.*

$$\mathbf{F} = J^{-\top}\boldsymbol\tau.$$

$$J^{\top} = \begin{bmatrix}-1&1\\-1&0\end{bmatrix}, \qquad \det J^{\top} = 0(-1)-1(-1) = 1,$$
$$J^{-\top} = \begin{bmatrix}0&-1\\1&-1\end{bmatrix}.$$

*Testing the four torque-limit corners:*

| $\boldsymbol\tau$ (N·m) | $\mathbf{F} = J^{-\top}\boldsymbol\tau$ (N) |
|---|---|
| $(20,\ 20)$ | $(-20,\ 0)$ |
| $(20,\ -20)$ | $(20,\ 40)$ |
| $(-20,\ 20)$ | $(-20,\ -40)$ |
| $(-20,\ -20)$ | $(20,\ 0)$ |

The achievable force set is the parallelogram with those vertices. **The arm can push 20 N in $\pm x$, but up to 40 N in $\pm y$** — twice as much, from the same motors.

*Where the asymmetry comes from.* Compare the two ellipsoids:

$$\sigma(J) = ?\quad JJ^{\top} = \begin{bmatrix}-1&-1\\1&0\end{bmatrix}\begin{bmatrix}-1&1\\-1&0\end{bmatrix} = \begin{bmatrix}2&-1\\-1&1\end{bmatrix},$$

with eigenvalues $\lambda^2-3\lambda+1 = 0$, so $\lambda = 2.618,\ 0.382$ and

$$\sigma_1 = 1.618, \qquad \sigma_2 = 0.618.$$

| | Semi-axes | Long axis |
|---|---|---|
| Manipulability ellipse | $\sigma_i = (1.618,\ 0.618)$ | fastest direction |
| Force ellipse | $1/\sigma_i = (0.618,\ 1.618)$ | strongest direction |

**Reciprocal, and perpendicular.** The direction the tool moves fastest is the direction it pushes weakest, and vice versa. (The ratio $1.618$ is $\varphi$, the golden ratio — an accident of $L_1 = L_2$ and this particular configuration, but a memorable one.)

*The engineering reading.*

**For fast free-space motion, maximize $\sigma_{\min}$.** A round manipulability ellipsoid means the arm can accelerate equally in all directions and no joint is the bottleneck. This is what [2.3](02-03-manipulator-jacobian.md)'s manipulability measure optimizes.

**For pushing, do the opposite.** An arm pressing a part into a fixture wants a *small* $\sigma$ in the press direction, because that is where the force ellipsoid is long. The extreme case is the singularity: at $\theta_2 = 0$, $\sigma_{\min} = 0$ and the force capability in the radial direction is **unbounded** — the structure carries the load and the motors do nothing.

*That is not a mathematical artifact.* Push on a person's outstretched arm along its length and they resist easily; push sideways and they cannot. Same arm, same muscles, opposite capabilities — because the moment arms have collapsed to zero in one direction. **The singularity that ruins the arm's motion makes it excellent at pushing.**

*The design consequence, and it is used deliberately.* Toggle mechanisms, clamps, riveting presses and knee joints all operate **at or near a singularity on purpose**, precisely to get large output force from small actuator effort. A robot doing a press-fit is often programmed to approach the insertion axis near-singular for the same reason — and the price, that the arm can barely move in that direction, is exactly what is wanted when the goal is to hold position against a load.

## Watch out

- **You might use $J^{-1}$ instead of $J^{\top}$.** Velocity uses $J$ and $J^{-1}$; force uses $J^{\top}$ and $J^{-\top}$. The transpose always exists; the inverse does not.
- **You might get the sign convention backwards.** Decide whether $\mathbf{F}$ is applied *by* the tool or *on* it, and state it. Both conventions are in use and they differ by a sign throughout.
- **You might forget gravity.** The motors carry the arm's own weight in addition to any external load, and on a large arm the gravity term dominates.
- **You might apply $J^{-\top}$ near a singularity.** It blows up on the force side just as $J^{-1}$ does on the velocity side, and the failure means the *commanded* force is unachievable in the weak direction.
- **You might use a Jacobian for the wrong point.** $J$ must be built for the point where the wrench is applied. A wrench at the tool tip and a Jacobian for the wrist flange give wrong torques.
- **You might mix force and moment units.** $\mathbf{F}$ has three force components (N) and three moment components (N·m). Norms and ellipsoids mixing them need a length scale.
- **You might assume more torque means more force.** In the weak direction of the force ellipsoid it does — but in the strong direction the arm is already limited by structure, not motors.
- **You might treat static analysis as sufficient.** During motion the dynamics of [3.2](03-02-manipulator-dynamics-equation.md) add inertial and Coriolis terms that can exceed the static ones.

## One-liner

> Virtual work gives $\boldsymbol\tau = J^{\top}\mathbf{F}$: the same Jacobian, transposed, maps tool wrenches to joint torques — so the directions the tool cannot move in are exactly the directions in which external force is carried by the structure and costs the motors nothing.

## Problems

**P1 (🟢)** A planar 2R arm has $L_1 = 0.5$, $L_2 = 0.4$ m at $\theta_1 = 30°$, $\theta_2 = 60°$. Its Jacobian is $J = \begin{bmatrix}-0.6500&-0.4000\\0.4330&0\end{bmatrix}$. A force $\mathbf{F} = (0,\ -20)$ N acts at the tool. (a) Find the joint torques. (b) Verify $\tau_1$ by an elementary moment calculation. (c) State which joint carries more load and why.

**P2 (🟡)** A planar 2R arm has $L_1 = L_2 = 0.5$ m, with each link of mass 2 kg and its centre of mass at the link's midpoint. At $\theta_1 = 45°$, $\theta_2 = -45°$: (a) find the two centres of mass. (b) Build the $2\times2$ linear Jacobian of each centre of mass. (c) Compute the gravity torque $\boldsymbol\tau_g$ with $g = 9.81$ m/s². (d) State which joint carries more and by how much.

**P3 (🔴)** A planar 2R arm has $L_1 = 0.4$, $L_2 = 0.3$ m and joint torque limits of $\pm15$ N·m. It must press a part in the $+x$ direction with 50 N at the position $(0.5, 0.2)$ m. (a) Find both IK solutions. (b) For each, compute the required joint torques and state whether the task is feasible. (c) Compute the force ellipsoid's semi-axes for the feasible configuration. (d) Determine the maximum $+x$ force the arm can exert at that point, propose one way to increase it without changing the motors, and quantify the improvement.

<details>
<summary>Solutions</summary>

**P1** (a) $$\boldsymbol\tau = J^{\top}\mathbf{F} = \begin{bmatrix}-0.6500&0.4330\\-0.4000&0\end{bmatrix}\begin{bmatrix}0\\-20\end{bmatrix} = \begin{bmatrix}0.4330(-20)\\0\end{bmatrix} = \begin{bmatrix}-8.66\\0\end{bmatrix}\ \mathrm{N\cdot m}.$$

(b) The tool is at

$$\mathbf{p} = (0.5\cos30°+0.4\cos90°,\ 0.5\sin30°+0.4\sin90°) = (0.4330+0,\ 0.2500+0.4000) = (0.4330,\ 0.6500).$$

Moment about joint 1 (at the origin):

$$M_1 = \mathbf{r}\times\mathbf{f} = (0.4330,\ 0.6500,\ 0)\times(0,\ -20,\ 0) = \left(0,\ 0,\ 0.4330(-20)-0.6500(0)\right) = -8.66\ \mathrm{N\cdot m}\ \checkmark$$

(c) **Joint 1 carries all of it; joint 2 carries none.**

The second link runs from $(0.4330, 0.2500)$ to $(0.4330, 0.6500)$ — straight up, parallel to the applied force. **The force's line of action passes through joint 2**, so its moment arm about joint 2 is zero.

*The general statement:* $\tau_i = 0$ whenever the applied force is parallel to the vector from joint $i$ to the tool. That is a useful sanity check, and it is also a design opportunity — orienting a task so the largest force passes through the weakest joint's axis is free load relief.

**P2** (a) $$\theta_1 = 45°, \qquad \theta_{12} = 0°.$$

$$\mathbf{p}_{c1} = \left(\frac{L_1}{2}\cos45°,\ \frac{L_1}{2}\sin45°\right) = (0.17678,\ 0.17678)\ \mathrm{m}.$$

$$\mathbf{p}_1 = (0.35355,\ 0.35355), \qquad \mathbf{p}_{c2} = \mathbf{p}_1+\left(\frac{L_2}{2}\cos0°,\ \frac{L_2}{2}\sin0°\right) = (0.60355,\ 0.35355)\ \mathrm{m}.$$

(b) *Link 1's centre of mass* moves only with joint 1:

$$J_{v1} = \begin{bmatrix}\hat k\times\mathbf{p}_{c1} & \mathbf{0}\end{bmatrix} = \begin{bmatrix}-0.17678&0\\0.17678&0\end{bmatrix}.$$

*Link 2's centre of mass* moves with both:

$$J_{v2} = \begin{bmatrix}\hat k\times(\mathbf{p}_{c2}-\mathbf{p}_0) & \hat k\times(\mathbf{p}_{c2}-\mathbf{p}_1)\end{bmatrix}.$$

$$\mathbf{p}_{c2}-\mathbf{p}_0 = (0.60355,\ 0.35355), \qquad \mathbf{p}_{c2}-\mathbf{p}_1 = (0.25000,\ 0).$$

$$J_{v2} = \begin{bmatrix}-0.35355&0\\0.60355&0.25000\end{bmatrix}.$$

(c) $$\mathbf{g} = (0,\ -9.81)\ \mathrm{m/s^2}, \qquad m_1\mathbf{g} = m_2\mathbf{g} = (0,\ -19.62)\ \mathrm{N}.$$

$$\boldsymbol\tau_g = -J_{v1}^{\top}m_1\mathbf{g}-J_{v2}^{\top}m_2\mathbf{g}.$$

$$J_{v1}^{\top}m_1\mathbf{g} = \begin{bmatrix}-0.17678&0.17678\\0&0\end{bmatrix}\begin{bmatrix}0\\-19.62\end{bmatrix} = \begin{bmatrix}-3.4684\\0\end{bmatrix},$$

$$J_{v2}^{\top}m_2\mathbf{g} = \begin{bmatrix}-0.35355&0.60355\\0&0.25000\end{bmatrix}\begin{bmatrix}0\\-19.62\end{bmatrix} = \begin{bmatrix}-11.8417\\-4.9050\end{bmatrix}.$$

$$\boldsymbol\tau_g = -\left(\begin{bmatrix}-3.4684\\0\end{bmatrix}+\begin{bmatrix}-11.8417\\-4.9050\end{bmatrix}\right) = \begin{bmatrix}15.3101\\4.9050\end{bmatrix}\ \mathrm{N\cdot m}.$$

*Cross-check by elementary statics.* Total weight is $4(9.81) = 39.24$ N, and the combined centre of mass is at

$$\bar x = \frac{2(0.17678)+2(0.60355)}{4} = \frac{1.56066}{4} = 0.39017\ \mathrm{m},$$

so $\tau_1 = 39.24(0.39017) = 15.31$ N·m ✓. For joint 2, only link 2's weight matters, at a moment arm of $0.25$ m: $19.62(0.25) = 4.905$ N·m ✓.

(d) **Joint 1 carries $15.31$ N·m against joint 2's $4.91$ — a factor of 3.1.**

*Why, structurally.* Joint 1 supports **both** links, at a combined moment arm of $0.39$ m; joint 2 supports only link 2, at $0.25$ m. Both effects — more mass and a longer arm — work the same way.

**This is the general pattern and it drives every arm's design.** Proximal joints carry the mass of everything distal to them, so shoulder motors are far larger than wrist motors. It is also why serious arms move the heavy motors toward the base and drive the distal joints through belts, chains or harmonic drives: every kilogram removed from the forearm reduces the shoulder torque by more than a kilogram's worth, because the moment arm is longer too.

**P3** (a) $$r^2 = 0.25+0.04 = 0.29, \qquad \cos\theta_2 = \frac{0.29-0.16-0.09}{2(0.4)(0.3)} = 0.16667, \qquad \theta_2 = \pm80.41°.$$

From [2.1](02-01-inverse-kinematics-analytic.md) P2:

$$\text{elbow-down: }(-11.52°,\ 80.41°), \qquad \text{elbow-up: }(55.12°,\ -80.41°).$$

(b) *Elbow-down.* $\theta_1 = -11.52°$, $\theta_{12} = 68.89°$:

$$s_1 = -0.19966,\ c_1 = 0.97987, \qquad s_{12} = 0.93273,\ c_{12} = 0.36055.$$

$$J = \begin{bmatrix}-0.4(-0.19966)-0.3(0.93273)&-0.3(0.93273)\\0.4(0.97987)+0.3(0.36055)&0.3(0.36055)\end{bmatrix} = \begin{bmatrix}0.07986-0.27982&-0.27982\\0.39195+0.10817&0.10817\end{bmatrix}$$
$$= \begin{bmatrix}-0.19996&-0.27982\\0.50012&0.10817\end{bmatrix}.$$

$$\boldsymbol\tau = J^{\top}\begin{bmatrix}50\\0\end{bmatrix} = \begin{bmatrix}-0.19996&0.50012\\-0.27982&0.10817\end{bmatrix}\begin{bmatrix}50\\0\end{bmatrix} = \begin{bmatrix}-10.00\\-13.99\end{bmatrix}\ \mathrm{N\cdot m}.$$

Both within $\pm15$ N·m ✓ — **feasible**, though joint 2 is at 93% of its limit.

*Elbow-up.* $\theta_1 = 55.12°$, $\theta_{12} = -25.29°$:

$$s_1 = 0.82063,\ c_1 = 0.57145, \qquad s_{12} = -0.42718,\ c_{12} = 0.90417.$$

$$J = \begin{bmatrix}-0.4(0.82063)-0.3(-0.42718)&0.12815\\0.4(0.57145)+0.3(0.90417)&0.27125\end{bmatrix} = \begin{bmatrix}-0.32825+0.12815&0.12815\\0.22858+0.27125&0.27125\end{bmatrix}$$
$$= \begin{bmatrix}-0.20010&0.12815\\0.49983&0.27125\end{bmatrix}.$$

$$\boldsymbol\tau = \begin{bmatrix}-0.20010&0.49983\\0.12815&0.27125\end{bmatrix}\begin{bmatrix}50\\0\end{bmatrix} = \begin{bmatrix}-10.01\\6.41\end{bmatrix}\ \mathrm{N\cdot m}.$$

Both well within limits ✓ — **feasible with room to spare**, joint 2 at only 43%.

**Elbow-up is strongly preferable**: it needs 6.41 N·m at the elbow against 13.99 N·m, a factor of 2.2 less, for the identical task.

*Why $\tau_1$ is the same in both.* $\tau_1 = -10$ N·m either way, because joint 1's moment arm depends only on the tool *position* $(0.5, 0.2)$ and the force direction — and both configurations put the tool at the same place. Specifically, $\tau_1 = -f_xy_{\rm tool} = -50(0.2) = -10$ N·m. **Only the distal joints' loads depend on the configuration**, which is another reason to choose configurations by their force capability.

(c) For the elbow-up configuration:

$$JJ^{\top} = \begin{bmatrix}0.20010^2+0.12815^2 & (-0.20010)(0.49983)+(0.12815)(0.27125)\\ \ast & 0.49983^2+0.27125^2\end{bmatrix} = \begin{bmatrix}0.05646&-0.06525\\-0.06525&0.32340\end{bmatrix}.$$

Trace $= 0.37986$, determinant $= 0.018259-0.004258 = 0.014001$.

$$\lambda^2-0.37986\lambda+0.014001 = 0 \quad\Longrightarrow\quad \lambda = \frac{0.37986\pm\sqrt{0.144294-0.056004}}{2} = \frac{0.37986\pm0.29714}{2},$$
$$\lambda = 0.33867,\ 0.04134 \quad\Longrightarrow\quad \sigma_1 = 0.58195,\ \sigma_2 = 0.20332.$$

*Check:* $\sigma_1\sigma_2 = 0.11833$, and $|\det J| = |{-}0.20010(0.27125)-0.12815(0.49983)| = |-0.05428-0.06405| = 0.11833$ ✓

**Force-ellipse semi-axes** (for $\|\boldsymbol\tau\| = 1$):

$$\frac{1}{\sigma_2} = 4.918\ \mathrm{N}\ \text{(strong direction)}, \qquad \frac{1}{\sigma_1} = 1.718\ \mathrm{N}\ \text{(weak direction)}.$$

Scaled to the $15$ N·m limit, the arm can exert between $25.8$ N and $73.8$ N depending on direction.

(d) *Maximum $+x$ force.* From $\boldsymbol\tau = J^{\top}\mathbf{F}$ with $\mathbf{F} = (f,0)$:

$$\tau_1 = -0.20010f, \qquad \tau_2 = 0.12815f.$$

$$|\tau_1|\leq15 \Rightarrow f\leq74.96\ \mathrm{N}, \qquad |\tau_2|\leq15 \Rightarrow f\leq117.05\ \mathrm{N}.$$

$$\boxed{f_{\max} = 75.0\ \mathrm{N}, \ \text{limited by joint 1.}}$$

(The commanded 50 N uses 67% of that.)

*One way to increase it without changing the motors: **move the workpiece closer to the base.***

$\tau_1 = -f_xy_{\rm tool}$ depends only on the tool's $y$-coordinate. Halving it from $0.2$ m to $0.1$ m halves $\tau_1$ and doubles the available force:

$$f_{\max}\Big|_{y = 0.1} = \frac{15}{0.1} = 150\ \mathrm{N},$$

**a 100% improvement, from moving the fixture 10 cm.** (Joint 2's limit must then be rechecked at the new configuration, but it had 56% of margin at $y = 0.2$ and is not the binding constraint.)

*Two other levers worth naming:*

**Align the force with the arm.** Pushing along the line from the base to the tool makes joint 1's moment arm zero, and the arm becomes limited only by joint 2 and by structure. At the extreme — the singular configuration of [2.4](02-04-singularities.md) — the radial force capability is unbounded. **This is why press-fit operations are set up with the insertion axis pointing away from the robot base.**

**Add a brace or a passive stop.** Any structure that carries part of the load reduces the motor torque directly. A tool that reacts against a fixture, or an arm that rests against a hard stop, converts a motor problem into a structure problem — and structures are far cheaper per newton than motors.

*The general principle worth carrying out of this lesson:* **force capability is a property of the configuration, not of the robot.** The same arm with the same motors can exert 26 N or 118 N at the same point depending on posture and direction, and $J^{\top}$ is what tells you which.

</details>

## Flashback

**From Lesson 2.4 (Singularities):** A planar 2R arm with $L_1 = L_2 = 1$ m is at $\theta_1 = 30°$, $\theta_2 = 0$ — fully extended and singular. (a) Write $J$. (b) Find the direction in which an external force produces zero joint torque. (c) Interpret.

<details>
<summary>Solution</summary>

(a) From [2.4](02-04-singularities.md) Example 1:

$$J = \begin{bmatrix}-1.0000&-0.5000\\1.7321&0.8660\end{bmatrix}, \qquad \det J = 0.$$

(b) Zero joint torque means $J^{\top}\mathbf{F} = \mathbf{0}$, i.e. $\mathbf{F}\in\operatorname{null}(J^{\top})$:

$$\begin{bmatrix}-1.0000&1.7321\\-0.5000&0.8660\end{bmatrix}\begin{bmatrix}f_x\\f_y\end{bmatrix} = \begin{bmatrix}0\\0\end{bmatrix}.$$

Both rows give the same equation ($-f_x+1.7321f_y = 0$), confirming rank 1, so

$$f_x = 1.7321f_y \quad\Longrightarrow\quad \mathbf{F}\propto(1.7321,\ 1) \propto(0.8660,\ 0.5000).$$

**That is the direction along the arm** — the arm points at $30°$, and $(\cos30°,\sin30°) = (0.866, 0.5)$ ✓.

(c) *The interpretation, and it is the whole point of the lesson.*

**A force applied along the arm produces no joint torque at all.** The motors feel nothing; the load passes straight down the links into the base. The arm can resist an arbitrarily large force in that direction with zero effort — limited only by the structural strength of the links.

**And it is exactly the direction the tool cannot move in** ([2.4](02-04-singularities.md) found $\operatorname{null}(J^{\top}) = (0.866, 0.5)$ as the lost velocity direction). That is not two facts; it is one fact seen twice:

$$\left(\operatorname{col}J\right)^{\perp} = \operatorname{null}\left(J^{\top}\right),$$

the fundamental-subspaces relation from [`linalg-refresher` 2.2](../../linalg-refresher/lessons/02-02-inverses-and-four-subspaces.md). The directions the tool cannot be *driven* in are precisely the directions in which it cannot be *pushed* — because in both cases the joints have no leverage there.

*The physical version.* Hold your arm straight out and have someone push on your hand. Along your arm, you barely notice — your bones carry it. Perpendicular, your shoulder has to work hard. Same arm, same muscles, and the difference is entirely moment arms.

*And the engineering version.* This duality is why a singularity is simultaneously the worst configuration for motion and the best for force. Robots doing press-fits, riveting, or clamping are deliberately posed near-singular along the load axis; robots doing fast pick-and-place are deliberately posed far from any singularity. **The same geometric fact, optimized in opposite directions for opposite tasks.**

</details>

## Connections

- **Backward:** the Jacobian being transposed is [2.3](02-03-manipulator-jacobian.md)'s; the rank structure that makes the null spaces meaningful is [2.4](02-04-singularities.md)'s; the virtual-work argument is [`analytical-mechanics` 1.3](../../analytical-mechanics/lessons/01-03-generalized-coordinates-constraints.md)'s.
- **Forward:** [3.2](03-02-manipulator-dynamics-equation.md)'s gravity vector $\mathbf{g}(\mathbf{q})$ is exactly the $-\sum J_{v_i}^{\top}m_i\mathbf{g}$ of this lesson; [4.3](04-03-force-hybrid-control.md) builds force and impedance controllers on $\boldsymbol\tau = J^{\top}\mathbf{F}$ and $K_q = J^{\top}K_xJ$.
- **Sideways:** the transpose relation is the statement that force and velocity are dual vector spaces paired by power — the same duality as stress and strain in [`mechanics-of-materials`](../../mechanics-of-materials/syllabus.md), or current and voltage in a circuit. The four fundamental subspaces are [`linalg-refresher` 2.2](../../linalg-refresher/lessons/02-02-inverses-and-four-subspaces.md)'s, and $K_q = J^{\top}K_xJ$ is a congruence transformation of a quadratic form, from [5.1](../../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md).
