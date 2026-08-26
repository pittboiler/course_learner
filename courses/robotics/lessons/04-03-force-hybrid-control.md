# Robotics & Kinematics · Lesson 4.3: Force and hybrid control

> ⏱ ~15 min · Module 4: Control and mobile robots · Builds on: [2.5 Statics and the Jacobian transpose](02-05-statics-jacobian-transpose.md), [4.2 Computed-torque control](04-02-computed-torque-control.md) · Unlocks: [4.4 Wheeled mobile robots](04-04-wheeled-mobile-robots.md)

## Why this matters

Every controller so far has regulated **position**. That is exactly right in free space and exactly wrong in contact.

Push a position-controlled arm against a rigid surface and it will keep commanding position into the surface, generating whatever force it takes — which for a stiff arm and a stiff environment is enough to break something. [4.1](04-01-independent-joint-control.md) P3 computed a Cartesian stiffness of 34,000 N/m for an ordinary geared joint: overshooting a contact point by one millimetre produces 34 newtons.

**In contact, position and force are not independent** — the environment relates them. So the controller cannot specify both, and must decide, direction by direction, which one it controls. That decision is what [force control](../reference.md#force-control) and [impedance control](../reference.md#impedance-control) formalize, and it is what makes assembly, polishing, deburring and surgery possible.

## The idea

Three approaches, in increasing order of sophistication.

**Stiffness (compliance) control.** Do not regulate force directly. Instead make the arm *behave like a spring* of chosen stiffness. Command a position slightly inside the surface; the resulting position error produces a proportional force. Simple, needs no force sensor, and the force is only as accurate as the arm's own stiffness model.

**Impedance control.** Generalize the spring to a full mass–spring–damper. Specify the **dynamic relationship** between the tool's motion and the contact force:

$$M_d\ddot{\mathbf{e}}+B_d\dot{\mathbf{e}}+K_d\mathbf{e} = -\mathbf{F}_{\rm ext},$$

so the arm presents a chosen apparent inertia, damping and stiffness at the tool. **The controller specifies a behaviour, not a setpoint** — which is the conceptual leap, and it is why a collaborative arm can be pushed aside like a light, damped object regardless of what its links actually weigh.

**Hybrid position/force control.** Split the task space by direction. Along an unconstrained direction, control position; along a constrained direction, control force. A **selection matrix** of ones and zeros decides which is which, and the two control laws run simultaneously on complementary subspaces.

The organizing principle behind all three is **duality**, and it comes straight from the constraint geometry. A rigid contact allows motion in some directions and force in the complementary ones, and it is exactly the wrong ones that are impossible:

$$\text{free to move} \iff \text{cannot exert force}, \qquad \text{constrained} \iff \text{can exert force, cannot move}.$$

*In words: a peg in a hole can slide along the hole (position-controllable, force-uncontrollable) and press against its walls (force-controllable, position-uncontrollable).* The two sets of directions are orthogonal complements, and this is the same **kinetostatic duality** as [2.5](02-05-statics-jacobian-transpose.md)'s.

## The formal version

**Stiffness control.**

$$\boxed{\;\boldsymbol\tau = J^{\top}K_x\left(\mathbf{x}_d-\mathbf{x}\right)+\hat{\mathbf{g}}(\mathbf{q}),\;}$$

with $K_x$ the desired Cartesian stiffness matrix. In contact,

$$\mathbf{F} = K_x\left(\mathbf{x}_d-\mathbf{x}\right),$$

so the contact force is set by how far the commanded position is pushed past the surface. **No force sensor required.**

**Joint-space equivalent.** Using $\boldsymbol\tau = J^{\top}\mathbf{F}$ and $\delta\mathbf{x} = J\delta\mathbf{q}$:

$$\boxed{\;K_q = J^{\top}K_xJ.\;}$$

*In words: a constant Cartesian stiffness requires a configuration-dependent joint stiffness.* This is a **congruence transformation** of a quadratic form, so $K_q$ is symmetric and positive semi-definite whenever $K_x$ is — and **singular whenever $J$ is**, which is the force-side statement of [2.4](02-04-singularities.md).

**Impedance control.**

$$\boxed{\;M_d\ddot{\mathbf{e}}+B_d\dot{\mathbf{e}}+K_d\mathbf{e} = -\mathbf{F}_{\rm ext}, \qquad \mathbf{e} = \mathbf{x}-\mathbf{x}_d.\;}$$

Implemented on top of the computed-torque cancellation of [4.2](04-02-computed-torque-control.md):

$$\boldsymbol\tau = \hat MJ^{-1}\left[M_d^{-1}\left(-B_d\dot{\mathbf{e}}-K_d\mathbf{e}-\mathbf{F}_{\rm ext}\right)+\ddot{\mathbf{x}}_d-\dot J\dot{\mathbf{q}}\right]+\hat C\dot{\mathbf{q}}+\hat{\mathbf{g}}+J^{\top}\mathbf{F}_{\rm ext}.$$

**Choosing $M_d = \hat M_x$** (the arm's natural Cartesian inertia) removes the need to measure $\mathbf{F}_{\rm ext}$ at all, giving the much simpler and very widely used

$$\boxed{\;\boldsymbol\tau = J^{\top}\left(-B_d\dot{\mathbf{e}}-K_d\mathbf{e}\right)+\hat{\mathbf{g}},\;}$$

which is stiffness control with damping. **This is what most collaborative robots run.**

**Impedance versus admittance.**

| | Input | Output | Suits |
|---|---|---|---|
| **Impedance** control | motion | force | stiff arm, soft environment |
| **Admittance** control | force | motion | soft arm, stiff environment |

Admittance control measures force and commands a position correction: $\dot{\mathbf{x}}_d = Y(\mathbf{F}_{\rm ext})$. It needs a force sensor and a fast inner position loop, and it becomes unstable against a *stiff* environment for the same reason impedance control becomes sluggish against a soft one. **Match the causality to the environment**, and the rule is that the controller should present the *opposite* of what the environment is.

**Hybrid position/force control.**

$$\boxed{\;\boldsymbol\tau = J^{\top}\left[S\,\mathbf{F}_{\rm position\ loop}+\left(I-S\right)\mathbf{F}_{\rm force\ loop}\right]+\hat{\mathbf{g}},\;}$$

with $S$ a diagonal **selection matrix** of ones (position-controlled directions) and zeros (force-controlled directions), expressed in a **constraint frame** aligned with the task geometry.

$$\mathbf{F}_{\rm position} = K_p\left(\mathbf{x}_d-\mathbf{x}\right)+K_v\left(\dot{\mathbf{x}}_d-\dot{\mathbf{x}}\right), \qquad \mathbf{F}_{\rm force} = \mathbf{F}_d+K_f\int\left(\mathbf{F}_d-\mathbf{F}\right)dt.$$

**Force loops almost always use integral action**, because a proportional force loop leaves a steady-state error and force accuracy is usually the point.

**Constraint frames for common tasks.**

| Task | Position-controlled | Force-controlled |
|---|---|---|
| Peg in hole (round) | $z$ (insertion), $\theta_z$ | $x$, $y$, $\theta_x$, $\theta_y$ |
| Surface following | $x$, $y$ (in plane), $\theta_z$ | $z$ (normal), $\theta_x$, $\theta_y$ |
| Turning a crank | $\theta$ about the crank axis | all five others |
| Sliding along a slot | along the slot | across it, and normal |

**Getting the frame wrong is the classic failure**: controlling force in a direction the environment does not constrain makes the arm accelerate away, and controlling position in a constrained direction makes it fight the environment.

**Stability against contact.** The coupled arm-and-environment system can be unstable even when each is stable alone. The **passivity** condition is sufficient: if the controller renders the arm passive (it dissipates energy) and the environment is passive, the coupled system is stable for **any** passive environment. That is a strong guarantee, and it is why impedance control with positive-definite $B_d$ and $K_d$ is preferred over schemes that might inject energy.

**Practical rule:** stiffness in contact should satisfy $K_d\lesssim K_{\rm env}$. Trying to be stiffer than the environment causes chatter.

## Picture

![A two-panel figure. Left: a peg being inserted into a hole, with the constraint frame drawn at the peg tip — the z axis along the hole labelled position-controlled with a downward velocity arrow, and the x and y axes across the hole labelled force-controlled with small force arrows against the hole walls — beside a selection matrix drawn as a diagonal of ones and zeros with each entry linked to its axis. Right: three plots of contact force against tool displacement past the surface, one for a stiff position-controlled arm showing a nearly vertical line reaching large force in a fraction of a millimetre, one for a stiffness-controlled arm showing a gentler slope reaching a moderate force over several millimetres, and one for a force-controlled arm showing a flat line at the commanded force independent of displacement.](assets/04-03-fig1.svg)

Left: hybrid control splits the task space by direction, and the selection matrix is that decision written down.

Right: the three regimes. Position control gives force you did not choose; stiffness control gives force proportional to a penetration you do choose; force control gives the force you asked for regardless of geometry.

## Worked examples

**Example 1 (stiffness control on a 2R arm, and where it fails).** $L_1 = 0.5$, $L_2 = 0.4$ m at $\mathbf{q} = (30°, 60°)$. A polishing task requires a Cartesian stiffness of $500$ N/m in $x$ (compliant, to follow the surface) and $2000$ N/m in $y$ (stiffer, to hold the tool down).

*The Jacobian.*

$$J = \begin{bmatrix}-0.6500&-0.4000\\0.4330&0\end{bmatrix}, \qquad \det J = L_1L_2\sin60° = 0.1732.$$

*The joint stiffness required.*

$$K_q = J^{\top}K_xJ = \begin{bmatrix}-0.6500&0.4330\\-0.4000&0\end{bmatrix}\begin{bmatrix}500&0\\0&2000\end{bmatrix}\begin{bmatrix}-0.6500&-0.4000\\0.4330&0\end{bmatrix}$$

$$= \begin{bmatrix}586.25&130.00\\130.00&80.00\end{bmatrix}\ \mathrm{N\cdot m/rad}.$$

*Reading it.*

**The off-diagonal $130$ N·m/rad is not optional.** A diagonal joint stiffness cannot produce the requested Cartesian stiffness; the coupling term is what rotates the stiffness ellipse into alignment with the task frame. **A joint-space spring is not a Cartesian spring**, and treating them as interchangeable is a common and consequential error.

*Eigenvalues:* $(48.6,\ 617.7)$ N·m/rad — both positive ✓, as they must be for a congruence transformation of a positive-definite $K_x$.

*Checking a deflection.* Pushing the tool $2$ mm in $+x$:

$$\mathbf{F} = K_x\delta\mathbf{x} = \begin{bmatrix}500&0\\0&2000\end{bmatrix}\begin{bmatrix}0.002\\0\end{bmatrix} = \begin{bmatrix}1.0\\0\end{bmatrix}\ \mathrm{N},$$
$$\boldsymbol\tau = J^{\top}\mathbf{F} = \begin{bmatrix}-0.650\\-0.400\end{bmatrix}\ \mathrm{N\cdot m}.$$

Modest torques, as expected for a deliberately compliant setting.

*Now the inverse question: what stiffness is achievable?* Suppose the joints can only realize $K_q\leq\operatorname{diag}(2000,\ 800)$ N·m/rad before the drivetrain resonance is excited. The corresponding Cartesian stiffness is

$$K_x = J^{-\top}K_qJ^{-1} = \begin{bmatrix}5000&7506\\7506&21{,}933\end{bmatrix}\ \mathrm{N/m},$$

with eigenvalues $(2152,\ 24{,}781)$ N/m.

**The maximum achievable Cartesian stiffness is enormously anisotropic** — a factor of 11.5 between the stiff and soft directions — and it is *not* aligned with the task axes. Requesting $2000$ N/m in $y$ is easy; requesting $20{,}000$ N/m in the arm's weak direction is impossible at any gain.

*The general statement.* $K_x = J^{-\top}K_qJ^{-1}$ inherits $J^{-1}$'s conditioning, so **near a singularity the achievable Cartesian stiffness collapses in the weak direction** — while, by the duality of [2.5](02-05-statics-jacobian-transpose.md), the arm becomes *structurally* infinitely stiff in the direction it cannot move. **The arm is either very stiff or very soft near a singularity, and the controller has no say in which.**

**Example 2 (peg-in-hole, and why hybrid control is necessary).** A round peg of clearance $0.1$ mm must be inserted $50$ mm into a hole. The approach direction is $z$; the hole axis is $z$.

*The constraint frame and selection matrix.*

| Direction | Constrained by hole? | Control | $S$ entry |
|---|---|---|---|
| $x$ | yes (walls) | **force** | 0 |
| $y$ | yes (walls) | **force** | 0 |
| $z$ | no (free to slide) | **position** | 1 |
| $\theta_x$ | yes (peg cannot tilt) | **force** (moment) | 0 |
| $\theta_y$ | yes | **force** (moment) | 0 |
| $\theta_z$ | no (round peg spins freely) | position | 1 |

$$S = \operatorname{diag}(0,\ 0,\ 1,\ 0,\ 0,\ 1).$$

*The command.*

$$\mathbf{x}_d^{(z)}: \text{insert at }5\ \mathrm{mm/s}, \qquad \mathbf{F}_d^{(x,y)} = 0\ \mathrm{N}, \qquad \mathbf{n}_d^{(\theta_x,\theta_y)} = 0\ \mathrm{N\cdot m}.$$

**Commanding *zero* lateral force is the whole trick.** The peg is told to slide down while pushing sideways with no force at all — so if it touches a wall, the controller backs off until the contact force is zero, and the peg self-centres.

*Why position control alone fails.* Suppose instead the arm commands the peg's lateral position, with a stiffness of $34{,}000$ N/m ([4.1](04-01-independent-joint-control.md) P3). The arm's absolute positioning accuracy is perhaps $\pm0.1$ mm, and the hole's location is known to perhaps $\pm0.2$ mm. A worst-case misalignment of $0.3$ mm against a $0.1$ mm clearance means the peg lands on the chamfer, and the lateral force generated is

$$F = 34{,}000(0.0002) = 6.8\ \mathrm{N}$$

for the $0.2$ mm of interference. The peg jams: it is being pushed down *and* sideways into the wall, and the friction from the lateral force exceeds what the downward force can overcome.

**Increasing the insertion force makes it worse**, because the jamming condition depends on the *ratio* of lateral to axial force, not on their magnitudes. This is the classic peg-in-hole failure, and it is why blind position-controlled insertion requires clearances an order of magnitude larger than the robot's repeatability.

*What hybrid control does instead.*

**Approach.** Position control in $z$ at 5 mm/s until contact is detected (an axial force threshold, say 2 N).

**Search.** With $F_z$ held at a small value and $F_x = F_y = 0$ commanded, the peg is free to move laterally under any contact force. A small spiral or Lissajous motion superimposed on the lateral *position* reference finds the hole; when the peg drops in, $F_z$ falls and $z$ advances.

**Insert.** Continue position control in $z$; hold $F_x = F_y = 0$ throughout. Any wall contact produces a lateral force, the force loop drives it to zero, and the peg aligns itself.

*The quantitative payoff.* With the lateral force regulated to within $\pm0.5$ N and an effective lateral compliance of, say, $1000$ N/m during insertion, the peg's lateral position is free to deviate by

$$\delta = \frac{0.5}{1000} = 0.5\ \mathrm{mm}$$

without generating meaningful force. **The task now tolerates a 0.5 mm misalignment against a 0.1 mm clearance** — five times the clearance, and more than the combined uncertainty of the robot and the fixture.

**Compliance converted an impossible tolerance problem into an easy one**, and it did so without improving the robot's accuracy at all.

*The passive alternative, worth knowing.* A **remote centre compliance (RCC)** device is a purely mechanical wrist with carefully arranged elastomer elements that provides exactly this lateral and angular compliance, with its centre of compliance at the peg tip. It costs a few hundred dollars, needs no sensor, no control law and no computation, and it solved industrial peg-in-hole assembly in the 1970s — before force control was practical.

**It is still the right answer for a high-volume, fixed task.** Active force control wins when the task varies, when the force itself must be measured or regulated to a value, or when the geometry is not known in advance. **The passive solution is not primitive; it is specialized**, and the general lesson is that mechanical design and control design are alternative ways of buying the same compliance.

## Watch out

- **You might control position and force in the same direction.** The environment relates them; you get to choose one. Choosing both makes the loops fight.
- **You might get the constraint frame wrong.** Force control in an unconstrained direction accelerates the arm away; position control in a constrained direction generates unbounded force.
- **You might command a stiffness above the environment's.** $K_d\gtrsim K_{\rm env}$ causes chatter. Be softer than what you touch.
- **You might use impedance control against a very stiff environment, or admittance against a very soft one.** Match the causality: impedance for stiff arm and soft environment, admittance for the reverse.
- **You might forget gravity compensation.** Without it the arm's own weight appears as a contact force, and a force loop will chase it.
- **You might use a proportional-only force loop.** It leaves a steady-state force error; force loops need integral action.
- **You might build a Cartesian stiffness from a diagonal joint stiffness.** $K_q = J^{\top}K_xJ$ is generally full, and the off-diagonal terms are what orient the stiffness ellipse.
- **You might attempt force control near a singularity.** The achievable Cartesian stiffness collapses in the weak direction and is uncontrollable in the strong one.

## One-liner

> In contact the environment relates position and force, so the controller must pick one per direction — a selection matrix for hybrid control, or a full mass–spring–damper for impedance control — and the joint-space stiffness that realizes a Cartesian one is $K_q = J^{\top}K_xJ$, which is configuration-dependent and singular wherever $J$ is.

## Problems

**P1 (🟢)** A planar 2R arm has $J = \begin{bmatrix}-0.5&-0.3\\0.4&0.1\end{bmatrix}$ at its current configuration. The desired Cartesian stiffness is $K_x = \operatorname{diag}(1000,\ 4000)$ N/m. (a) Compute $K_q = J^{\top}K_xJ$. (b) Verify symmetry. (c) Find the joint torques for a tool deflection of $(1,\ 0)$ mm.

**P2 (🟡)** A robot must slide a tool across a flat horizontal table while pressing down with $20$ N. (a) Identify the constraint frame and write the selection matrix for a 6-DOF task. (b) Write the two control laws. (c) State what happens if the $z$ direction is position-controlled instead. (d) State what happens if $x$ is force-controlled instead.

**P3 (🔴)** A collaborative arm must present an impedance of $M_d = 2$ kg, $B_d = 40$ N·s/m, $K_d = 200$ N/m at the tool along one axis. (a) Find the natural frequency and damping ratio of the tool's apparent dynamics. (b) Find the steady-state displacement under a constant $30$ N push. (c) Find the peak displacement if the push is applied as a step, and the settling time. (d) The environment is a human hand with an effective stiffness of $500$ N/m. Assess coupled stability, propose a change if needed, and explain the passivity argument.

<details>
<summary>Solutions</summary>

**P1** (a) $$J^{\top}K_x = \begin{bmatrix}-0.5&0.4\\-0.3&0.1\end{bmatrix}\begin{bmatrix}1000&0\\0&4000\end{bmatrix} = \begin{bmatrix}-500&1600\\-300&400\end{bmatrix},$$

$$K_q = \begin{bmatrix}-500&1600\\-300&400\end{bmatrix}\begin{bmatrix}-0.5&-0.3\\0.4&0.1\end{bmatrix} = \begin{bmatrix}250+640&150+160\\150+160&90+40\end{bmatrix} = \begin{bmatrix}890&310\\310&130\end{bmatrix}\ \mathrm{N\cdot m/rad}.$$

(b) $K_{q,12} = K_{q,21} = 310$ ✓ — symmetric, as any congruence transformation $J^{\top}K_xJ$ of a symmetric $K_x$ must be.

*And positive definite:* $890>0$ and $\det = 890(130)-310^2 = 115{,}700-96{,}100 = 19{,}600>0$ ✓.

(c) $$\mathbf{F} = K_x\delta\mathbf{x} = \begin{bmatrix}1000&0\\0&4000\end{bmatrix}\begin{bmatrix}0.001\\0\end{bmatrix} = \begin{bmatrix}1.0\\0\end{bmatrix}\ \mathrm{N},$$

$$\boldsymbol\tau = J^{\top}\mathbf{F} = \begin{bmatrix}-0.5&0.4\\-0.3&0.1\end{bmatrix}\begin{bmatrix}1.0\\0\end{bmatrix} = \begin{bmatrix}-0.5\\-0.3\end{bmatrix}\ \mathrm{N\cdot m}.$$

**P2** (a) *Constraint frame:* $z$ normal to the table (up), $x$ and $y$ in the plane.

| Direction | Constrained? | Control |
|---|---|---|
| $x$, $y$ | no — free to slide | position |
| $z$ | yes — table blocks it | **force** |
| $\theta_x$, $\theta_y$ | yes — tool must stay flat | **force** (moment) |
| $\theta_z$ | no — free to spin | position |

$$S = \operatorname{diag}(1,\ 1,\ 0,\ 0,\ 0,\ 1).$$

(b) *Position loop*, on the $S$ directions ($x$, $y$, $\theta_z$):

$$\mathbf{F}_{\rm pos} = K_p\left(\mathbf{x}_d-\mathbf{x}\right)+K_v\left(\dot{\mathbf{x}}_d-\dot{\mathbf{x}}\right),$$

with $\mathbf{x}_d(t)$ the commanded sliding path.

*Force loop*, on the $(I-S)$ directions ($z$, $\theta_x$, $\theta_y$):

$$\mathbf{F}_{\rm force} = \mathbf{F}_d+K_f\int\left(\mathbf{F}_d-\mathbf{F}\right)dt, \qquad F_{d,z} = -20\ \mathrm{N},\ \ n_{d,x} = n_{d,y} = 0.$$

$$\boldsymbol\tau = J^{\top}\left[S\mathbf{F}_{\rm pos}+\left(I-S\right)\mathbf{F}_{\rm force}\right]+\hat{\mathbf{g}}.$$

(c) *If $z$ is position-controlled instead.* The commanded height must match the table's height exactly. Any error is amplified by the arm's stiffness:

- Command 0.1 mm **too high** → the tool leaves the surface and the contact force is **zero**. Polishing stops.
- Command 0.1 mm **too low** → the arm pushes into a rigid table with $34{,}000(10^{-4}) = 3.4$ N... and if the table is not perfectly flat, a 1 mm rise gives $34$ N and something breaks.

**The table's height must be known to micrometres**, and it must be flat to micrometres, across the whole work area. Neither is achievable in practice, which is exactly why the normal direction is force-controlled: **force control makes the task insensitive to the surface's position.**

(d) *If $x$ is force-controlled instead.* Nothing constrains motion in $x$, so a commanded force $F_{d,x}$ produces free acceleration:

$$m\ddot x = F_{d,x} \quad\Longrightarrow\quad \text{the tool accelerates away without limit}.$$

Even $F_{d,x} = 0$ is bad: the loop has no position reference, so the tool drifts wherever friction and disturbances take it. **Force control requires something to push against.**

*The general rule this illustrates:* **the number of force-controlled directions must equal the number of constraints the environment imposes.** Six degrees of freedom, $k$ constraints, $k$ force-controlled directions and $6-k$ position-controlled ones — and the split must be expressed in a frame aligned with the constraint geometry, not with the world.

**P3** (a) $$\omega_n = \sqrt{\frac{K_d}{M_d}} = \sqrt{\frac{200}{2}} = 10\ \mathrm{rad/s} = 1.59\ \mathrm{Hz},$$

$$\zeta = \frac{B_d}{2\sqrt{K_dM_d}} = \frac{40}{2\sqrt{400}} = \frac{40}{40} = 1.000.$$

**Critically damped** — the tool returns to its reference without overshoot, which is what a human interacting with the arm expects.

(b) $$\delta x_{ss} = \frac{F}{K_d} = \frac{30}{200} = 0.15\ \mathrm{m} = 150\ \mathrm{mm}.$$

**A 30 N push moves the tool 15 cm.** That is a very soft arm — appropriately so for one a person is expected to guide by hand.

(c) *Peak displacement.* With $\zeta = 1$ (critically damped), a step input produces **no overshoot**, so

$$\delta x_{\rm peak} = \delta x_{ss} = 150\ \mathrm{mm}.$$

*Settling time* (2% criterion, critically damped):

$$t_s\approx\frac{5.8}{\omega_n} = \frac{5.8}{10} = 0.58\ \mathrm{s}.$$

**The tool reaches its new position in about six-tenths of a second** — fast enough to feel responsive to a person pushing it, slow enough not to feel twitchy.

(d) *Coupled stability.* The arm presents $K_d = 200$ N/m; the hand presents $K_{\rm env} = 500$ N/m. In series (they share the force and their displacements add), the effective stiffness is

$$K_{\rm eff} = \frac{K_dK_{\rm env}}{K_d+K_{\rm env}} = \frac{200(500)}{700} = 142.9\ \mathrm{N/m},$$

and the coupled natural frequency rises to

$$\omega_n^{\rm coupled} = \sqrt{\frac{K_d+K_{\rm env}}{M_d}} = \sqrt{\frac{700}{2}} = 18.7\ \mathrm{rad/s},$$

with damping

$$\zeta^{\rm coupled} = \frac{B_d}{2\sqrt{\left(K_d+K_{\rm env}\right)M_d}} = \frac{40}{2\sqrt{1400}} = \frac{40}{74.8} = 0.535.$$

**Contact with a stiffer environment raises the frequency and *reduces* the damping** — from $\zeta = 1.00$ to $0.535$. Overshoot appears:

$$M_p = \exp\left(\frac{-\pi(0.535)}{\sqrt{1-0.286}}\right) = \exp\left(\frac{-1.681}{0.845}\right) = \exp(-1.989) = 0.137 = 13.7\%.$$

**Still stable, and acceptable** — 14% overshoot in a hand-guided motion is noticeable but not alarming. The design passes.

*But note the trend.* Against a stiffer environment — a rigid workpiece at $K_{\rm env} = 10^5$ N/m — the same controller gives

$$\zeta = \frac{40}{2\sqrt{(200+10^5)(2)}} = \frac{40}{2\sqrt{200{,}400}} = \frac{40}{895.3} = 0.045,$$

**barely damped at all**, with 87% overshoot and a strong tendency to chatter.

*The proposed change, if a stiff environment is expected.* **Raise $B_d$.** To restore $\zeta = 0.7$ against $K_{\rm env} = 10^5$:

$$B_d = 2\zeta\sqrt{\left(K_d+K_{\rm env}\right)M_d} = 2(0.7)\sqrt{200{,}400} = 2(0.7)(447.7) = 627\ \mathrm{N\cdot s/m},$$

a factor of 16 more damping. That is a great deal — it would make the arm feel like it is moving through treacle in free space — so the practical answer is to **schedule the impedance**: soft and lightly damped in free space, stiffer and much more damped on contact detection.

*The passivity argument, and why it is the right way to think about this.*

A system is **passive** if it never supplies more energy than it has absorbed:

$$\int_0^T\mathbf{F}^{\top}\dot{\mathbf{x}}\,dt\geq-E_0 \quad\forall T.$$

**The theorem:** the feedback interconnection of two passive systems is stable. Since a physical environment — a hand, a spring, a wall, a damper — is always passive, an arm rendered passive by its controller is **stable in contact with anything.**

*Why an impedance controller is passive.* With $M_d$, $B_d$, $K_d$ all positive definite, the rendered dynamics are a physical mass–spring–damper, which stores energy in $M_d$ and $K_d$ and dissipates it in $B_d$. It cannot create energy, so it is passive by construction.

*Why this matters more than a gain calculation.* The stability analysis above required knowing $K_{\rm env}$. **The passivity argument does not.** It guarantees stability against every passive environment simultaneously — every stiffness, every mass, every damper, and any combination — which is exactly the guarantee needed for a robot that will encounter environments its designer never modelled.

*What breaks passivity, and this is the practical warning:*

**Discretization.** A digitally implemented spring injects a small amount of energy each sample. The rendered stiffness is bounded above by roughly $K_d\lesssim B/T_s$ where $T_s$ is the sample period — which is why haptic devices run at 1 kHz and above.

**Time delay.** Any delay in the force feedback path destroys passivity and can make a nominally passive controller unstable.

**Negative damping.** Any term that injects energy — an aggressive integrator, a poorly tuned feedforward — voids the guarantee entirely.

**Passivity is a design constraint, not just an analysis tool.** A controller architected to be passive is safe against the unknown; one that merely happens to be stable against the environments that were tested is not.

</details>

## Flashback

**From Lesson 2.5 (Statics and the Jacobian transpose):** A 2R arm near a singularity has $\sigma = (0.58,\ 0.20)$. (a) Find the achievable Cartesian stiffness ratio for equal joint stiffness. (b) Relate to force control.

<details>
<summary>Solution</summary>

(a) With $K_q = kI$ (equal joint stiffness),

$$K_x = J^{-\top}K_qJ^{-1} = kJ^{-\top}J^{-1} = k\left(JJ^{\top}\right)^{-1}.$$

The eigenvalues of $(JJ^{\top})^{-1}$ are $1/\sigma_i^2$, so

$$K_x\ \text{eigenvalues} = \frac{k}{\sigma_1^2},\ \frac{k}{\sigma_2^2} = \frac{k}{0.3364},\ \frac{k}{0.0400} = 2.97k,\ 25.0k.$$

$$\frac{K_{x,\max}}{K_{x,\min}} = \frac{\sigma_1^2}{\sigma_2^2} = \left(\frac{0.58}{0.20}\right)^2 = 8.41.$$

**An 8.4-to-1 stiffness anisotropy** from a condition number of only 2.9 — because stiffness goes as $1/\sigma^2$, the anisotropy is the **square** of the Jacobian's condition number.

(b) *What this means for force control.*

**The arm is naturally very stiff in its weak kinematic direction.** $\sigma_2 = 0.20$ is the direction the tool struggles to move in, and it is the direction where the same joint stiffness produces 25 times the Cartesian stiffness. That is the duality of [2.5](02-05-statics-jacobian-transpose.md), quantified.

**Force control is easy there and hard in the other direction.** To *reduce* the stiffness in the naturally stiff direction — which is what a compliant insertion along that axis would need — the controller must actively fight the arm's own kinematics, lowering $K_q$ so far that the other direction becomes uselessly soft.

**Near a true singularity ($\sigma_2\to0$) the ratio diverges.** The achievable Cartesian stiffness becomes infinite in one direction and unaffected in the other, and no choice of $K_q$ can produce an isotropic stiffness.

*The practical guidance.*

**Position the arm for the stiffness the task needs.** A task requiring high stiffness along one axis should be set up with the arm near-singular along that axis; a task requiring uniform compliance needs a well-conditioned pose.

**Check $\kappa(J)$ before designing $K_x$.** The requested Cartesian stiffness must be achievable, and the achievability is bounded by $\sigma_{\max}^2/\sigma_{\min}^2$ times whatever anisotropy the joints can provide.

**This is why workcell layout is a control problem.** The same task, the same arm and the same controller can be easy or impossible depending only on where the work is placed relative to the base — and $J$ is what determines which.

</details>

## Connections

- **Backward:** $\boldsymbol\tau = J^{\top}\mathbf{F}$ and $K_q = J^{\top}K_xJ$ are [2.5](02-05-statics-jacobian-transpose.md)'s; the cancellation impedance control is built on is [4.2](04-02-computed-torque-control.md)'s; the stiffness problem it solves is [4.1](04-01-independent-joint-control.md)'s.
- **Forward:** the passivity argument here is the same tool used to prove adaptive manipulator controllers stable, and it generalizes to teleoperation and haptics.
- **Sideways:** impedance and admittance are the mechanical analogues of impedance and admittance in [`circuits` 4.2](../../circuits/lessons/04-02-impedance-phasor-analysis.md) — force and velocity playing the roles of voltage and current, with the same duality and the same matching rules. Passivity is the energy-based stability theory that underlies port-Hamiltonian systems and the small-gain and passivity theorems of [`control-systems`](../../control-systems/syllabus.md).
