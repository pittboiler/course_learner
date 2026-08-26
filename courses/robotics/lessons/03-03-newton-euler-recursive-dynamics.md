# Robotics & Kinematics · Lesson 3.3: Newton–Euler recursive dynamics

> ⏱ ~15 min · Module 3: Dynamics and trajectory generation · Builds on: [3.2 The manipulator dynamics equation](03-02-manipulator-dynamics-equation.md), [1.5 Homogeneous transforms](01-05-homogeneous-transforms.md) · Unlocks: [4.2 Computed-torque control](04-02-computed-torque-control.md)

## Why this matters

The Lagrangian formulation of [3.1](03-01-lagrangian-dynamics.md) gives the structure, and it is the right tool for understanding. It is the wrong tool for computing: forming $M$, $C$ and $\mathbf{g}$ explicitly costs $O(n^4)$, and a six-jointed arm's symbolic equations run to pages.

The [recursive Newton–Euler algorithm](../reference.md#recursive-newton-euler) computes the same torques in $O(n)$ — **linear** in the number of joints — by never forming the matrices at all. For $n = 6$ it is roughly fifty times cheaper; for $n = 20$, seventeen hundred times.

That is the difference between inverse dynamics being a design-time calculation and being something a controller evaluates a thousand times a second. **Every computed-torque controller in existence runs this algorithm**, and it is why model-based control is practical at all.

## The idea

Go back to Newton and Euler, applied link by link:

$$\mathbf{f} = m\mathbf{a}_c, \qquad \mathbf{n} = I\boldsymbol\alpha+\boldsymbol\omega\times(I\boldsymbol\omega).$$

Applying these directly means drawing a free-body diagram for each link and solving a coupled system — exactly the mess the Lagrangian method was invented to avoid. The recursive algorithm avoids it a different way, by noticing that the coupling is **one-directional in each of two sweeps**:

**Outward sweep (base → tip): kinematics.** Link $i$'s velocity and acceleration depend only on link $i-1$'s and on joint $i$'s motion. So starting from the (known, stationary) base, propagate $\boldsymbol\omega$, $\boldsymbol\alpha$ and $\mathbf{a}_c$ outward. No unknowns anywhere — every quantity is computed from ones already known.

**Inward sweep (tip → base): forces.** Link $i$'s joint force and moment depend only on link $i+1$'s (which it must support) plus its own inertial and gravitational loads. So starting from the tip — where the external force is known, often zero — propagate $\mathbf{f}$ and $\mathbf{n}$ inward. Again no unknowns.

The joint torque is then the component of $\mathbf{n}_i$ along the joint axis, and the perpendicular components are the bearing reactions the structure carries.

**Both sweeps are $O(n)$**, so the whole algorithm is $O(n)$. Nothing is ever inverted, nothing is ever assembled into a matrix, and the constraint forces the Lagrangian method cancelled analytically are here computed explicitly — which turns out to be a bonus, because bearing loads are exactly what a mechanical designer needs.

**A trick worth knowing.** Setting the base acceleration to $-\mathbf{g}$ instead of zero makes gravity appear automatically in every link's $\mathbf{a}_c$. **Gravity is free**, requiring no separate term at all — a small piece of elegance with real value, since gravity is usually the largest contribution.

## The formal version

**Notation.** All quantities expressed in link $i$'s own frame; $^{i}_{i+1}R$ rotates from frame $i+1$ to frame $i$.

| Symbol | Meaning |
|---|---|
| $\boldsymbol\omega_i$, $\dot{\boldsymbol\omega}_i$ | link $i$'s angular velocity and acceleration |
| $\dot{\mathbf{v}}_i$ | acceleration of frame $i$'s origin |
| $\dot{\mathbf{v}}_{c_i}$ | acceleration of link $i$'s centre of mass |
| $\mathbf{P}_{i+1}$ | position of frame $i+1$'s origin in frame $i$ |
| $\mathbf{P}_{c_i}$ | position of link $i$'s centre of mass in frame $i$ |
| $\mathbf{F}_i$, $\mathbf{N}_i$ | net force and moment on link $i$ |
| $\mathbf{f}_i$, $\mathbf{n}_i$ | force and moment exerted **on** link $i$ **by** link $i-1$ |

**Outward recursion**, $i = 0\to n-1$, starting from $\boldsymbol\omega_0 = \dot{\boldsymbol\omega}_0 = \mathbf{0}$ and $\dot{\mathbf{v}}_0 = -\mathbf{g}$:

$$\boxed{\;\boldsymbol\omega_{i+1} = {}^{i+1}_{i}R\,\boldsymbol\omega_i+\dot\theta_{i+1}\,{}^{i+1}\hat Z_{i+1},\;}$$

$$\boxed{\;\dot{\boldsymbol\omega}_{i+1} = {}^{i+1}_{i}R\,\dot{\boldsymbol\omega}_i+{}^{i+1}_{i}R\,\boldsymbol\omega_i\times\dot\theta_{i+1}\,{}^{i+1}\hat Z_{i+1}+\ddot\theta_{i+1}\,{}^{i+1}\hat Z_{i+1},\;}$$

$$\boxed{\;\dot{\mathbf{v}}_{i+1} = {}^{i+1}_{i}R\left[\dot{\boldsymbol\omega}_i\times\mathbf{P}_{i+1}+\boldsymbol\omega_i\times\left(\boldsymbol\omega_i\times\mathbf{P}_{i+1}\right)+\dot{\mathbf{v}}_i\right],\;}$$

$$\boxed{\;\dot{\mathbf{v}}_{c_{i+1}} = \dot{\boldsymbol\omega}_{i+1}\times\mathbf{P}_{c_{i+1}}+\boldsymbol\omega_{i+1}\times\left(\boldsymbol\omega_{i+1}\times\mathbf{P}_{c_{i+1}}\right)+\dot{\mathbf{v}}_{i+1}.\;}$$

Then the inertial force and moment on each link:

$$\mathbf{F}_{i+1} = m_{i+1}\dot{\mathbf{v}}_{c_{i+1}}, \qquad \mathbf{N}_{i+1} = {}^{c_{i+1}}I_{i+1}\dot{\boldsymbol\omega}_{i+1}+\boldsymbol\omega_{i+1}\times{}^{c_{i+1}}I_{i+1}\boldsymbol\omega_{i+1}.$$

**Inward recursion**, $i = n\to1$, starting from the known tip load $\mathbf{f}_{n+1}$, $\mathbf{n}_{n+1}$ (zero in free space):

$$\boxed{\;\mathbf{f}_i = {}^{i}_{i+1}R\,\mathbf{f}_{i+1}+\mathbf{F}_i,\;}$$

$$\boxed{\;\mathbf{n}_i = \mathbf{N}_i+{}^{i}_{i+1}R\,\mathbf{n}_{i+1}+\mathbf{P}_{c_i}\times\mathbf{F}_i+\mathbf{P}_{i+1}\times{}^{i}_{i+1}R\,\mathbf{f}_{i+1}.\;}$$

**Joint torque.**

$$\boxed{\;\tau_i = \mathbf{n}_i^{\top}\,{}^{i}\hat Z_i \ \ \text{(revolute)}, \qquad \tau_i = \mathbf{f}_i^{\top}\,{}^{i}\hat Z_i \ \ \text{(prismatic)}.\;}$$

*In words: a revolute joint's motor supplies the component of the joint moment along its own axis; everything perpendicular is carried by the bearings.*

**The gravity trick.**

$$\dot{\mathbf{v}}_0 = -\mathbf{g} = (0,0,+9.81)\ \mathrm{m/s^2}$$

(pointing **up**, the negative of gravity). Pretending the base accelerates upward at $g$ makes every link's computed $\mathbf{a}_c$ include the gravitational contribution automatically. This is the equivalence principle, used as a computational shortcut.

**Cost comparison.**

| $n$ | Newton–Euler $O(n)$ | Lagrangian $O(n^4)$ | Ratio |
|---|---|---|---|
| 2 | $\sim300$ | $\sim500$ | 1.7 |
| 6 | $\sim900$ | $\sim41{,}000$ | 46 |
| 10 | $\sim1500$ | $\sim320{,}000$ | 213 |
| 20 | $\sim3000$ | $\sim5{,}100{,}000$ | 1700 |

(Counts are multiply-adds, to an order of magnitude.)

**Extracting $M$, $C$ and $\mathbf{g}$ from the recursion**, when the matrices are actually wanted:

| Want | Call inverse dynamics with |
|---|---|
| $\mathbf{g}(\mathbf{q})$ | $\dot{\mathbf{q}} = \ddot{\mathbf{q}} = \mathbf{0}$, gravity on |
| $M$'s $j$-th column | $\ddot{\mathbf{q}} = \mathbf{e}_j$, $\dot{\mathbf{q}} = \mathbf{0}$, gravity **off** |
| $C\dot{\mathbf{q}}$ | actual $\dot{\mathbf{q}}$, $\ddot{\mathbf{q}} = \mathbf{0}$, gravity off |

So $M$ costs $n$ calls, or $O(n^2)$ total — still far better than $O(n^4)$, and the standard way to get the mass matrix for a forward-dynamics simulation.

**Forward dynamics** (given torque, find acceleration) needs $M$ and a linear solve, so it is $O(n^3)$ by this route. The **articulated-body algorithm** does it in $O(n)$ by a similar two-sweep structure with a cleverer inward recursion, and it is what physics engines use.

## Picture

![A two-panel figure. Left: a serial chain of three links drawn twice. In the upper drawing, arrows point outward from the base to the tip, each link annotated with the angular velocity, angular acceleration and centre-of-mass acceleration being propagated forward, and the base annotated with the trick of setting its acceleration to minus g. In the lower drawing, arrows point inward from the tip to the base, each link annotated with the joint force and moment being propagated backward, and a callout at each joint showing that the torque is the component of the joint moment along the joint axis while the perpendicular components are bearing loads. Right: a log-log plot of computational cost against number of joints, with a straight line of slope one labelled Newton-Euler and a much steeper line of slope four labelled Lagrangian, crossing near n equals two and diverging by three orders of magnitude by n equals twenty.](assets/03-03-fig1.svg)

Left: two sweeps, each with no unknowns. Kinematics propagates outward because a link's motion depends on its parent's; forces propagate inward because a link must support its children.

Right: why this matters. At $n = 2$ the two methods are comparable; at $n = 6$ — every industrial arm — Newton–Euler is fifty times cheaper, which is the difference between running at 1 kHz and not running at all.

## Worked examples

**Example 1 (a planar 2R arm, both sweeps, checked against the Lagrangian).** $m_1 = 3$ kg at $l_1 = 0.5$ m, $m_2 = 2$ kg at $l_2 = 0.4$ m (point masses at the link ends, so no rotational inertia about their own centres), at $\mathbf{q} = (30°,45°)$, $\dot{\mathbf{q}} = (1.0,-0.5)$ rad/s, $\ddot{\mathbf{q}} = (2.0,1.0)$ rad/s².

*Outward sweep: angular quantities.* For a planar arm these are scalars about $\hat z$:

$$\omega_1 = \dot\theta_1 = 1.0, \qquad \omega_2 = \dot\theta_1+\dot\theta_2 = 0.5\ \mathrm{rad/s},$$
$$\alpha_1 = \ddot\theta_1 = 2.0, \qquad \alpha_2 = \ddot\theta_1+\ddot\theta_2 = 3.0\ \mathrm{rad/s^2}.$$

*Outward sweep: accelerations.* For a point at radius $\mathbf{r}$ rotating with $\omega$, $\alpha$ about a fixed pivot,

$$\mathbf{a} = \boldsymbol\alpha\times\mathbf{r}-\omega^2\mathbf{r}.$$

Link 1's mass at $\mathbf{r}_1 = (l_1c_1,\ l_1s_1) = (0.43301,\ 0.25000)$:

$$\mathbf{a}_{c1} = 2.0(-0.25000,\ 0.43301)-(1.0)^2(0.43301,\ 0.25000)$$
$$= (-0.50000,\ 0.86603)-(0.43301,\ 0.25000) = (-0.93301,\ 0.61603)\ \mathrm{m/s^2}.$$

Link 2's mass is at $\mathbf{r}_2 = (l_2c_{12},\ l_2s_{12})$ from joint 2, and $\theta_1+\theta_2 = 75°$:

$$\mathbf{r}_2 = (0.4\cos75°,\ 0.4\sin75°) = (0.10353,\ 0.38637)\ \mathrm{m}.$$

Joint 2 sits at link 1's mass in this model, so it accelerates at $\mathbf{a}_{c1}$:

$$\mathbf{a}_{c2} = \mathbf{a}_{c1}+\left[3.0(-0.38637,\ 0.10353)-(0.5)^2(0.10353,\ 0.38637)\right]$$
$$= (-0.93301,\ 0.61603)+(-1.15911,\ 0.31059)-(0.02588,\ 0.09659)$$
$$= (-2.11800,\ 0.83003)\ \mathrm{m/s^2}.$$

*Inward sweep: forces.* Starting at the tip with no external load, and with $\mathbf{g} = (0,\ -9.81)$:

$$\mathbf{f}_2 = m_2\left(\mathbf{a}_{c2}-\mathbf{g}\right) = 2\left[(-2.11800,\ 0.83003)-(0,-9.81)\right] = 2(-2.11800,\ 10.64003)$$
$$= (-4.23600,\ 21.28006)\ \mathrm{N}.$$

$$\mathbf{f}_1 = m_1\left(\mathbf{a}_{c1}-\mathbf{g}\right)+\mathbf{f}_2 = 3(-0.93301,\ 10.42603)+(-4.23600,\ 21.28006)$$
$$= (-2.79903,\ 31.27809)+(-4.23600,\ 21.28006) = (-7.03503,\ 52.55815)\ \mathrm{N}.$$

*Inward sweep: moments, and the torques.* With $\mathbf{a}\times\mathbf{b} = a_xb_y-a_yb_x$ in the plane,

$$\tau_2 = \mathbf{r}_2\times\mathbf{f}_2 = 0.10353(21.28006)-0.38637(-4.23600) = 2.20312+1.63667 = 3.83979\ \mathrm{N\cdot m}.$$

For joint 1, take moments about the origin of every force at its point of application. Link 1's mass sits at $\mathbf{p}_1 = (0.43301,\ 0.25000)$ and link 2's at $\mathbf{p}_2 = \mathbf{p}_1+\mathbf{r}_2 = (0.53654,\ 0.63637)$:

$$\tau_1 = \mathbf{p}_1\times m_1\left(\mathbf{a}_{c1}-\mathbf{g}\right)+\mathbf{p}_2\times\mathbf{f}_2$$
$$= \left[0.43301(31.27809)-0.25000(-2.79903)\right]+\left[0.53654(21.28006)-0.63637(-4.23600)\right]$$
$$= \left[13.54377+0.69976\right]+\left[11.41773+2.69568\right] = 14.24353+14.11341 = 28.35694\ \mathrm{N\cdot m}.$$

$$\boxed{\tau_1 = 28.357\ \mathrm{N\cdot m}, \qquad \tau_2 = 3.840\ \mathrm{N\cdot m}.}$$

*And the Lagrangian result from [3.2](03-02-manipulator-dynamics-equation.md) Example 2:*

$$\boldsymbol\tau = M\ddot{\mathbf{q}}+C\dot{\mathbf{q}}+\mathbf{g} = \begin{bmatrix}28.357\\3.840\end{bmatrix}\ \mathrm{N\cdot m}\ \checkmark$$

**The two methods agree exactly**, as they must — they are the same physics, reorganized.

*What the recursion computed that the Lagrangian did not.* The **joint forces** $\mathbf{f}_1 = (-7.035,\ 52.558)$ N and $\mathbf{f}_2 = (-4.236,\ 21.280)$ N. Those are the bearing loads: joint 1's bearing carries $53.0$ N and joint 2's carries $21.7$ N in this configuration. **A mechanical designer needs exactly these numbers** to size bearings and check link stresses, and the Lagrangian method throws them away as constraint forces before they are ever computed.

That is a genuine and underappreciated advantage of the Newton–Euler route: it produces the internal loads for free.

**Example 2 (why $O(n)$ versus $O(n^4)$ decides the architecture).** Compare the two methods on arms of increasing size.

| $n$ | NE ops | Lagrangian ops | Ratio | NE at 1 kHz? | Lagrangian at 1 kHz? |
|---|---|---|---|---|---|
| 2 | 300 | 500 | 1.7 | trivially | yes |
| 6 | 900 | 41,000 | 46 | trivially | marginal |
| 10 | 1,500 | 320,000 | 213 | yes | no |
| 20 | 3,000 | 5,100,000 | 1,700 | yes | no |

*Concretely.* At $n = 6$ — a standard industrial arm — a 1 kHz control loop has 1 ms per cycle. Newton–Euler's $\sim900$ operations take a few microseconds on any modern processor: **under 1% of the budget**, leaving the rest for the servo loops, communications and safety checks.

The Lagrangian evaluation's $\sim41{,}000$ operations take perhaps 40 µs — still feasible, but it is 4% of the cycle for one arm, and the comparison worsens fast. At $n = 10$ (a redundant arm, or a dual-arm system) the Lagrangian route needs $\sim320$ µs, nearly a third of the cycle, while Newton–Euler still needs microseconds.

*Where the scaling really bites.* Three places, and each is a real system:

**Humanoids.** A humanoid has 25–40 actuated joints. At $n = 30$, $O(n^4) = 8\times10^5\times32 \approx 2.6\times10^7$ operations against Newton–Euler's $\sim4500$ — a factor of **six thousand**. Whole-body control of a humanoid at 1 kHz is possible only because of the linear algorithm.

**Simulation.** A physics engine integrating a scene of articulated bodies calls dynamics at every substep, often at 1 kHz or faster, for dozens of bodies. The articulated-body algorithm's $O(n)$ forward dynamics is what makes real-time simulation of complex mechanisms feasible.

**Model-predictive control.** MPC evaluates the dynamics over a horizon of tens to hundreds of steps, inside an optimizer that iterates. A single MPC solve might call inverse dynamics ten thousand times. At $n = 7$ that is $\sim10^7$ operations with Newton–Euler and $\sim10^{11}$ with the Lagrangian route — the difference between milliseconds and hours.

*The design lesson, which generalizes well beyond robotics.* **The Lagrangian method is better for understanding and worse for computing; the Newton–Euler recursion is the reverse.** They are not competitors — a controller is *designed* using the structural properties of [3.2](03-02-manipulator-dynamics-equation.md), which only the Lagrangian view makes visible, and then *implemented* with the recursion.

Exactly the same split appears throughout engineering: closed-form solutions that reveal structure alongside iterative algorithms that produce numbers, with the first informing the design and the second doing the work.

## Watch out

- **You might mix frames.** Every quantity in the recursion is expressed in its own link's frame, and the $^{i+1}_{i}R$ factors are what move between them. Dropping one is the most common implementation bug.
- **You might get the sweep directions backwards.** Kinematics outward (base to tip), forces inward (tip to base). Reversing them makes no sense — each direction is the one with no unknowns.
- **You might forget the gravity trick, or double-count it.** Set $\dot{\mathbf{v}}_0 = -\mathbf{g}$ **and** omit any separate gravity term, or set $\dot{\mathbf{v}}_0 = \mathbf{0}$ **and** add gravity explicitly. Doing both doubles it.
- **You might get the sign of $-\mathbf{g}$ wrong.** The base acceleration is *upward* at $9.81$ m/s², i.e. $(0,0,+9.81)$ with $z$ up.
- **You might drop the $\boldsymbol\omega\times(I\boldsymbol\omega)$ term.** It is the gyroscopic moment, and for a fast-spinning link with an asymmetric inertia tensor it is not small.
- **You might use the centre-of-mass position where the joint origin belongs.** $\mathbf{P}_{i+1}$ locates the next joint; $\mathbf{P}_{c_i}$ locates this link's mass. They are different vectors with different roles.
- **You might take the wrong component for $\tau_i$.** Revolute joints use $\mathbf{n}_i\cdot\hat Z_i$; prismatic joints use $\mathbf{f}_i\cdot\hat Z_i$.
- **You might expect the recursion to give you $M$.** It gives $\boldsymbol\tau$ for a specified motion. Extracting $M$ takes $n$ separate calls.

## One-liner

> Propagate velocities and accelerations outward from a base pretending to accelerate at $-\mathbf{g}$, propagate forces and moments inward from the tip, take the component of each joint moment along its own axis — $O(n)$ instead of $O(n^4)$, and the bearing loads come out free.

## Problems

**P1 (🟢)** A single link with a point mass $m = 2$ kg at $l = 0.5$ m rotates in a vertical plane at $\theta = 30°$ from horizontal, with $\dot\theta = 2$ rad/s and $\ddot\theta = 3$ rad/s². (a) Find the mass's position. (b) Find its acceleration by the outward recursion. (c) Find the joint force. (d) Find the joint torque and check it against $I\ddot\theta+mgl\cos\theta$.

**P2 (🟡)** A planar 2R arm has $m_1 = 4$ kg at $l_1 = 0.4$ m, $m_2 = 2$ kg at $l_2 = 0.3$ m, at $\mathbf{q} = (0°, 90°)$, $\dot{\mathbf{q}} = (2, 1)$ rad/s, $\ddot{\mathbf{q}} = (1, 1)$ rad/s². (a) Run the outward sweep for both accelerations. (b) Run the inward sweep for both joint forces. (c) Find both joint torques. (d) Verify against $M\ddot{\mathbf{q}}+C\dot{\mathbf{q}}+\mathbf{g}$.

**P3 (🔴)** A 6-joint arm's controller runs at 1 kHz. Inverse dynamics by Newton–Euler takes $\sim900$ multiply-adds; the same processor sustains $10^8$ multiply-adds per second. (a) Find the time per inverse-dynamics call and its share of the control cycle. (b) Repeat for the $O(n^4)$ Lagrangian evaluation. (c) A model-predictive controller with a 20-step horizon runs 5 optimizer iterations, each requiring one inverse-dynamics call per horizon step. Find the total cost per control cycle by each method and state which is feasible. (d) The arm is extended to 12 joints. Recompute, and discuss what this implies about the algorithms used in humanoid whole-body control.

<details>
<summary>Solutions</summary>

**P1** (a) $$\mathbf{r} = (l\cos30°,\ l\sin30°) = (0.5(0.86603),\ 0.5(0.5)) = (0.43301,\ 0.25000)\ \mathrm{m}.$$

(b) $$\mathbf{a}_c = \boldsymbol\alpha\times\mathbf{r}-\omega^2\mathbf{r} = 3(-0.25000,\ 0.43301)-4(0.43301,\ 0.25000)$$
$$= (-0.75000,\ 1.29904)-(1.73205,\ 1.00000) = (-2.48205,\ 0.29904)\ \mathrm{m/s^2}.$$

*Reading the two parts:* the tangential term $\boldsymbol\alpha\times\mathbf{r}$ has magnitude $\alpha l = 1.5$ m/s² perpendicular to the link; the centripetal term $\omega^2\mathbf{r}$ has magnitude $\omega^2l = 2.0$ m/s² pointing inward along the link. At $\omega = 2$ rad/s the centripetal term is already the larger of the two.

(c) $$\mathbf{f} = m\left(\mathbf{a}_c-\mathbf{g}\right) = 2\left[(-2.48205,\ 0.29904)-(0,\ -9.81)\right] = 2(-2.48205,\ 10.10904)$$
$$= (-4.96410,\ 20.21808)\ \mathrm{N}.$$

Magnitude $\sqrt{24.64+408.77} = 20.82$ N — mostly vertical, because gravity dominates at this modest speed.

(d) $$\tau = \mathbf{r}\times\mathbf{f} = r_xf_y-r_yf_x = 0.43301(20.21808)-0.25000(-4.96410)$$
$$= 8.75473+1.24103 = 9.99576\ \mathrm{N\cdot m}.$$

*Check against the Lagrangian form:*

$$I\ddot\theta+mgl\cos\theta = ml^2\ddot\theta+mgl\cos\theta = 2(0.25)(3)+2(9.81)(0.5)(0.86603)$$
$$= 1.50000+8.49576 = 9.99576\ \mathrm{N\cdot m}\ \checkmark$$

**Exact agreement.** Note that the centripetal acceleration contributed nothing to the torque — it points along $\mathbf{r}$, so its moment arm about the pivot is zero. That is why $\omega$ does not appear in a single link's equation of motion, and why $C = 0$ there ([3.2](03-02-manipulator-dynamics-equation.md) Flashback).

**P2** (a) *Angular quantities:*

$$\omega_1 = 2, \qquad \omega_2 = 3\ \mathrm{rad/s}, \qquad \alpha_1 = 1, \qquad \alpha_2 = 2\ \mathrm{rad/s^2}.$$

*Positions* at $\theta_1 = 0°$, $\theta_1+\theta_2 = 90°$:

$$\mathbf{r}_1 = (0.4,\ 0), \qquad \mathbf{r}_2 = (0.3\cos90°,\ 0.3\sin90°) = (0,\ 0.3),$$
$$\mathbf{p}_1 = (0.4,\ 0), \qquad \mathbf{p}_2 = (0.4,\ 0.3).$$

*Accelerations:*

$$\mathbf{a}_{c1} = 1(0,\ 0.4)-4(0.4,\ 0) = (-1.60000,\ 0.40000)\ \mathrm{m/s^2},$$

$$\mathbf{a}_{c2} = \mathbf{a}_{c1}+\left[2(-0.3,\ 0)-9(0,\ 0.3)\right] = (-1.60000,\ 0.40000)+(-0.60000,\ -2.70000)$$
$$= (-2.20000,\ -2.30000)\ \mathrm{m/s^2}.$$

(b) $$\mathbf{f}_2 = m_2\left(\mathbf{a}_{c2}-\mathbf{g}\right) = 2\left[(-2.2,\ -2.3)+(0,\ 9.81)\right] = 2(-2.2,\ 7.51) = (-4.40000,\ 15.02000)\ \mathrm{N},$$

$$\mathbf{f}_1 = m_1\left(\mathbf{a}_{c1}-\mathbf{g}\right)+\mathbf{f}_2 = 4(-1.6,\ 10.21)+(-4.4,\ 15.02) = (-6.4,\ 40.84)+(-4.4,\ 15.02)$$
$$= (-10.80000,\ 55.86000)\ \mathrm{N}.$$

(c) $$\tau_2 = \mathbf{r}_2\times\mathbf{f}_2 = 0(15.02)-0.3(-4.4) = 1.32000\ \mathrm{N\cdot m}.$$

$$\tau_1 = \mathbf{p}_1\times m_1\left(\mathbf{a}_{c1}-\mathbf{g}\right)+\mathbf{p}_2\times\mathbf{f}_2$$
$$= \left[0.4(40.84)-0(-6.4)\right]+\left[0.4(15.02)-0.3(-4.4)\right]$$
$$= 16.33600+\left[6.00800+1.32000\right] = 16.33600+7.32800 = 23.66400\ \mathrm{N\cdot m}.$$

(d) From [3.2](03-02-manipulator-dynamics-equation.md) P2/P3 at this configuration:

$$M = \begin{bmatrix}1.14&0.18\\0.18&0.18\end{bmatrix}, \qquad h = -0.24, \qquad \mathbf{g} = \begin{bmatrix}23.544\\0\end{bmatrix}.$$

$$C = \begin{bmatrix}h\dot\theta_2&h(\dot\theta_1+\dot\theta_2)\\-h\dot\theta_1&0\end{bmatrix} = \begin{bmatrix}-0.24&-0.72\\0.48&0\end{bmatrix}.$$

$$M\ddot{\mathbf{q}} = \begin{bmatrix}1.14+0.18\\0.18+0.18\end{bmatrix} = \begin{bmatrix}1.32\\0.36\end{bmatrix}, \qquad C\dot{\mathbf{q}} = \begin{bmatrix}-0.48-0.72\\0.96\end{bmatrix} = \begin{bmatrix}-1.20\\0.96\end{bmatrix}.$$

$$\boldsymbol\tau = \begin{bmatrix}1.32\\0.36\end{bmatrix}+\begin{bmatrix}-1.20\\0.96\end{bmatrix}+\begin{bmatrix}23.544\\0\end{bmatrix} = \begin{bmatrix}23.664\\1.320\end{bmatrix}\ \mathrm{N\cdot m}\ \checkmark$$

**Both methods give $(23.664,\ 1.320)$** exactly.

*And the extra output.* The recursion also gave $\mathbf{f}_1 = (-10.80,\ 55.86)$ N, so joint 1's bearing carries $56.9$ N — a number the Lagrangian route never produces and a mechanical designer cannot do without.

**P3** (a) $$t_{\rm NE} = \frac{900}{10^8} = 9\times10^{-6}\ \mathrm{s} = 9\ \mu\mathrm{s}.$$

Control cycle at 1 kHz is $1000$ µs, so

$$\text{share} = \frac{9}{1000} = 0.9\%.$$

**Under 1% of the cycle** — entirely negligible, leaving everything else for servo loops, filtering, communication and safety.

(b) $$\text{ops}\approx32n^4 = 32(1296) = 41{,}472, \qquad t = \frac{41{,}472}{10^8} = 4.15\times10^{-4}\ \mathrm{s} = 415\ \mu\mathrm{s}.$$

$$\text{share} = 41.5\%.$$

**Over 40% of the cycle for one dynamics evaluation.** Technically feasible, but it consumes nearly half the budget for a single computation and leaves no headroom for anything else — no MPC, no second arm, no margin for a slower processor or a jitter spike.

(c) $$\text{calls per cycle} = 20\ \text{horizon steps}\times5\ \text{iterations} = 100.$$

$$\text{Newton–Euler: } 100(9\ \mu\mathrm{s}) = 900\ \mu\mathrm{s} = 90\%\ \text{of the cycle}.$$

$$\text{Lagrangian: } 100(415\ \mu\mathrm{s}) = 41{,}500\ \mu\mathrm{s} = 41.5\ \mathrm{ms} = \mathbf{4150\%}\ \text{of the cycle}.$$

**Only Newton–Euler is feasible, and even it is tight at 90%.**

*What a real implementation would do about that 90%.* Reduce the horizon; run the MPC at a lower rate (say 100 Hz) with a fast 1 kHz servo loop underneath; warm-start the optimizer so fewer iterations are needed; or use a faster processor. All are standard, and all are made possible by the fact that the *per-call* cost is 9 µs rather than 415 µs. **The Lagrangian route is not slow by a factor that better engineering can recover** — it is slow by a factor of 46, and no amount of horizon-shortening rescues it.

(d) *At $n = 12$:*

$$\text{NE}: \ \sim150(12) = 1800\ \text{ops} = 18\ \mu\mathrm{s}, \qquad \text{share} = 1.8\%.$$

$$\text{Lagrangian}: \ 32(12)^4 = 32(20{,}736) = 663{,}552\ \text{ops} = 6636\ \mu\mathrm{s} = 6.6\ \mathrm{ms},$$

$$\text{share} = \mathbf{664\%} \ \text{of a 1 ms cycle.}$$

**The Lagrangian evaluation cannot even complete one call per control cycle**, let alone the hundred an MPC needs. Newton–Euler doubled from 9 to 18 µs; the Lagrangian route grew by a factor of 16.

*What this implies for humanoid whole-body control.*

**Humanoids have 25–40 actuated joints.** At $n = 30$:

$$\text{NE}: \ \sim4500\ \text{ops} = 45\ \mu\mathrm{s}, \qquad \text{Lagrangian}: \ 32(8.1\times10^5) = 2.6\times10^7\ \text{ops} = 259\ \mathrm{ms}.$$

**A factor of 5760.** The recursion runs comfortably at 1 kHz; the explicit-matrix route takes a quarter of a second per call.

**Every humanoid controller therefore uses recursive algorithms**, and specifically:

**Recursive Newton–Euler** for inverse dynamics — the torques needed for a commanded motion.

**The articulated-body algorithm (Featherstone)** for forward dynamics in $O(n)$, used in simulation and inside MPC. It achieves the same two-sweep structure for the harder direction by propagating an "articulated-body inertia" inward rather than solving a linear system.

**The composite-rigid-body algorithm** when $M$ itself is genuinely needed, in $O(n^2)$ rather than the $n$ separate $O(n)$ calls the naive extraction would take.

*The broader point.* **Whole-body humanoid control exists because of these algorithms, not merely faster than it otherwise would.** A controller that must reason about 30 joints, contact constraints, and a horizon of future states within a millisecond is only possible if the innermost operation is linear in the number of joints. When Featherstone's $O(n)$ methods appeared in the 1980s they did not make existing systems faster — they made a category of system possible.

*And the same lesson recurs.* Fast multipole methods made $N$-body simulation possible; the FFT made digital signal processing possible; sparse LU made large power flows possible ([`power-systems` 3.4](../../power-systems/lessons/03-04-newton-raphson-power-flow.md)). **A change in asymptotic complexity is not an optimization; it is a change in what can be built.**

</details>

## Flashback

**From Lesson 3.2 (The manipulator dynamics equation):** Explain how to extract the mass matrix $M$ of an $n$-joint arm using only calls to an inverse-dynamics routine, and give the cost.

<details>
<summary>Solution</summary>

*The method.* Inverse dynamics computes

$$\boldsymbol\tau = M(\mathbf{q})\ddot{\mathbf{q}}+C(\mathbf{q},\dot{\mathbf{q}})\dot{\mathbf{q}}+\mathbf{g}(\mathbf{q}).$$

Set $\dot{\mathbf{q}} = \mathbf{0}$ (killing $C$) and turn gravity off (killing $\mathbf{g}$), leaving

$$\boldsymbol\tau = M(\mathbf{q})\ddot{\mathbf{q}}.$$

Now call it with $\ddot{\mathbf{q}} = \mathbf{e}_j$, the $j$-th unit vector:

$$\boldsymbol\tau = M\mathbf{e}_j = \text{the } j\text{-th column of } M.$$

**One call per column**, so $n$ calls give all of $M$.

*The cost.*

$$n\ \text{calls}\times O(n)\ \text{each} = O(n^2).$$

For $n = 6$: $6\times900 = 5400$ operations, against the $\sim41{,}000$ of a direct Lagrangian evaluation — **eight times cheaper**, and the advantage grows as $n^2$ against $n^4$.

*Exploiting symmetry.* $M$ is symmetric, so only the upper triangle is needed; a specialized routine (the **composite-rigid-body algorithm**) computes all of $M$ in a single sweep at $O(n^2)$ with a smaller constant, and that is what production libraries use.

*Getting the other terms the same way.*

| Want | Call with |
|---|---|
| $\mathbf{g}(\mathbf{q})$ | $\dot{\mathbf{q}} = \ddot{\mathbf{q}} = \mathbf{0}$, gravity **on** — one call |
| $C(\mathbf{q},\dot{\mathbf{q}})\dot{\mathbf{q}}$ | actual $\dot{\mathbf{q}}$, $\ddot{\mathbf{q}} = \mathbf{0}$, gravity off — one call |
| $M$'s column $j$ | $\ddot{\mathbf{q}} = \mathbf{e}_j$, $\dot{\mathbf{q}} = \mathbf{0}$, gravity off — $n$ calls |

**The whole dynamics decomposes into $n+2$ calls to one routine.**

*Why this is more than a trick.* It means a single well-tested inverse-dynamics implementation is all a system needs. Forward dynamics, gravity compensation, computed torque, the mass matrix for an MPC's linearization — all are assembled from calls to it, with no separate symbolic derivation and no second code path to validate.

*And it explains a practical fact.* Robotics libraries expose `inverseDynamics(q, qd, qdd)` as the primitive and build everything else on top. When you call `massMatrix(q)` in such a library, this is usually what happens underneath.

</details>

## Connections

- **Backward:** the equation being evaluated is [3.2](03-02-manipulator-dynamics-equation.md)'s; the frame transforms in the recursion are [1.5](01-05-homogeneous-transforms.md)'s; the derivation it reproduces is [3.1](03-01-lagrangian-dynamics.md)'s.
- **Forward:** [4.2](04-02-computed-torque-control.md) calls this routine every control cycle to compute the feedforward torque.
- **Sideways:** the two-sweep structure — propagate one quantity outward, another inward, each with no unknowns — is the same pattern as the forward–backward substitution of LU factorization, the forward–backward algorithm for hidden Markov models, and backpropagation in a neural network. In each case a tree or chain structure turns a coupled system into two ordered passes, and the payoff is always the same reduction in complexity class.
