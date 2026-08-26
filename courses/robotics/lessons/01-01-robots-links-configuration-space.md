# Robotics & Kinematics · Lesson 1.1: Robots, links, and configuration space

> ⏱ ~15 min · Module 1: Spatial descriptions and forward kinematics · Builds on: [`engineering-dynamics` 3.1](../../engineering-dynamics/lessons/03-01-rotation-instantaneous-center.md) · Unlocks: [1.2 Rotation matrices](01-02-rotation-matrices.md), [1.6 Denavit–Hartenberg and forward kinematics](01-06-denavit-hartenberg-forward-kinematics.md)

## Why this matters

Before you can compute anything about a robot, you have to know how many numbers it takes to describe it. That count — the **degrees of freedom** — determines whether a task is even possible, how many solutions an inverse-kinematics problem has, and how many motors you need to buy.

It is also the first place intuition fails. A six-jointed arm has six degrees of freedom, which seems obvious. A Stewart platform has eighteen joints and six degrees of freedom. A car has three position variables and two controls, and the mismatch between those numbers is why parallel parking is hard. Getting the count right, from a formula rather than by staring, is the foundation everything else sits on.

This lesson also fixes the vocabulary — links, joints, [configuration space](../reference.md#configuration-space), workspace — that the rest of the course uses without comment.

## The idea

A robot is a set of **links** (rigid bodies) connected by **joints** (constraints that permit some relative motion and forbid the rest).

A free rigid body in space has **six** degrees of freedom: three of position, three of orientation. In a plane it has three: two of position, one of angle. Every joint you add takes some of those away.

The two joints that matter most:

**Revolute (R)** — a hinge. One rotational degree of freedom; five of the six are removed in space.

**Prismatic (P)** — a slider. One translational degree of freedom; again five removed.

Both are **one-degree-of-freedom** joints, which is why almost every industrial robot is built from them exclusively: one joint, one motor, one variable.

Now the counting. Take all the links, give each the full freedom of a free body, then subtract what the joints forbid. That is the **Grübler–Kutzbach formula**, and it works for any mechanism, serial or closed-loop.

Two distinctions organize the rest:

**Serial versus parallel.** A serial robot is an open chain — base, link, joint, link, joint, …, hand. Every joint is independent, the counting is trivial (DOF = number of joints), forward kinematics is easy, and inverse kinematics is hard. A parallel robot closes loops between the base and the platform; the counting needs the formula, forward kinematics is hard, inverse kinematics is easy, and the structure is far stiffer.

**Configuration space versus workspace.** The **configuration space** is the set of all joint values — one dimension per joint, and it is where planning happens ([4.6](04-06-motion-planning.md)). The **workspace** is the set of poses the hand can reach, which lives in the physical world. They are different spaces of possibly different dimension, and the map between them is what this whole course is about.

## The formal version

**Joint types.**

| Joint | Symbol | DOF | Motion |
|---|---|---|---|
| Revolute | R | 1 | rotation about an axis |
| Prismatic | P | 1 | translation along an axis |
| Cylindrical | C | 2 | rotation + translation, same axis |
| Universal | U | 2 | two rotations |
| Spherical | S | 3 | three rotations (ball joint) |
| Planar | E | 3 | two translations + one rotation |

**Grübler–Kutzbach mobility formula.** With $N$ links (**including the ground link**), $J$ joints, and joint $i$ permitting $f_i$ degrees of freedom:

$$\boxed{\;\mathrm{DOF} = m(N-1)-\sum_{i=1}^{J}\left(m-f_i\right),\;}$$

where $m = 6$ for spatial mechanisms and $m = 3$ for planar ones.

*In words: give every moving link full freedom, then subtract the freedom each joint destroys.*

An equivalent and often handier form:

$$\mathrm{DOF} = m(N-1-J)+\sum_{i=1}^{J}f_i.$$

**Serial chains are the easy case.** An open chain with $n$ one-DOF joints has $N = n+1$ links and $J = n$ joints, so

$$\mathrm{DOF} = m(n+1-1-n)+n = n.$$

*In words: for a serial arm, the degrees of freedom are simply the number of joints.* No formula needed — which is exactly why the formula is introduced with closed chains in mind.

**Configuration space.** The vector of joint variables

$$\mathbf{q} = (q_1,q_2,\ldots,q_n), \qquad q_i = \theta_i\ \text{(revolute)}\ \text{or}\ d_i\ \text{(prismatic)}$$

lives in the configuration space $\mathcal{C}$. Its **topology** matters: a revolute joint's variable lives on a circle $S^1$, not on a line, so a 2R planar arm's configuration space is a **torus** $S^1\times S^1$, not a square. Planning algorithms that forget this treat $359°$ and $1°$ as far apart when they are two degrees away.

**Workspace.**

$$\mathcal{W}_{\rm reachable} = \{\text{positions the tool frame origin can reach}\},$$
$$\mathcal{W}_{\rm dexterous} = \{\text{positions reachable with \emph{any} orientation}\}\subseteq\mathcal{W}_{\rm reachable}.$$

The dexterous workspace is always smaller, often much smaller, and is what actually constrains a task that specifies orientation.

**How many degrees of freedom does a task need?**

| Task | Required DOF |
|---|---|
| Position a point in space | 3 |
| Position and orient a body in space | 6 |
| Position and orient in a plane | 3 |
| Spot welding (tool symmetric about its axis) | 5 |

A robot with **more** joints than the task needs is **redundant** — a 7-DOF arm doing a 6-DOF task has a one-dimensional family of solutions at every pose, which it can use to dodge obstacles or stay away from singularities ([2.4](02-04-singularities.md)).

**Common architectures.**

| Robot | Joints | DOF | Notes |
|---|---|---|---|
| SCARA | RRPR | 4 | fast planar assembly; the P axis is vertical |
| Articulated (PUMA-style) | 6R | 6 | the general-purpose industrial arm |
| Cartesian / gantry | PPP | 3 | simple, stiff, large footprint |
| Stewart platform | 6 × UPS | 6 | parallel; very stiff, small workspace |
| Delta | 3 × RUU | 3 (translation) | parallel; extremely fast pick-and-place |

## Picture

![A two-panel figure. Left: a serial six-revolute-joint arm drawn as a chain from a fixed base through six labelled joints to a tool frame at the hand, with each joint's axis marked by a short arrow and the joint variable theta-i labelled beside it. Right: a parallel Stewart platform drawn as a fixed hexagonal base and a moving hexagonal platform joined by six extensible legs, each leg annotated with a universal joint at the base, a prismatic actuator in the middle, and a spherical joint at the top, with a small table beneath comparing serial and parallel on stiffness, workspace, and which kinematics direction is the easy one.](assets/01-01-fig1.svg)

Left: the serial chain, where degrees of freedom equal joint count and the hand's pose is a product of link transforms ([1.6](01-06-denavit-hartenberg-forward-kinematics.md)).

Right: the parallel platform, where the loops force you to use the mobility formula and where the easy and hard directions of the kinematics are swapped.

## Worked examples

**Example 1 (three mechanisms, counted).**

*(a) A 6R industrial arm.* Serial chain, $m = 6$, $N = 7$ links (six moving plus ground), $J = 6$ revolute joints with $f_i = 1$:

$$\mathrm{DOF} = 6(7-1)-6(6-1) = 36-30 = 6.$$

Six degrees of freedom — exactly enough to place the hand at an arbitrary position *and* orientation, which is why six is the standard for a general-purpose arm.

*(b) A planar four-bar linkage.* Four links (one of them ground) in a closed loop with four revolute joints, $m = 3$:

$$\mathrm{DOF} = 3(4-1)-4(3-1) = 9-8 = 1.$$

**One degree of freedom.** Turn one crank and every other link's motion is determined — which is the whole point of a four-bar, and why it is the workhorse of mechanism design.

*(c) A Stewart platform.* Base, moving platform, and six legs each split into two parts by its prismatic actuator:

$$N = 2+12 = 14\ \text{links}.$$

Each leg has a universal joint at the base ($f = 2$), a prismatic actuator ($f = 1$), and a spherical joint at the platform ($f = 3$), so $J = 18$ joints with $\sum f_i = 6(2+1+3) = 36$:

$$\mathrm{DOF} = 6(14-1-18)+36 = 6(-5)+36 = -30+36 = 6.$$

**Six degrees of freedom from eighteen joints.** Only the six prismatic actuators are driven; the twelve passive U and S joints exist to let the legs orient themselves. The result is a mechanism with the full six-DOF freedom of a serial arm but with every actuator loaded in pure tension or compression — enormously stiffer, which is why flight simulators and machine tools use this architecture and why its workspace is comparatively tiny.

*The lesson from comparing (a) and (c):* **the same mobility can be achieved with wildly different joint counts.** Counting joints tells you nothing; the formula tells you everything.

**Example 2 (configuration space, workspace, and why they differ).** A planar 2R arm has link lengths $L_1 = 1$ and $L_2 = 0.6$ m.

*Configuration space.* Two revolute joints, so $\mathcal{C} = S^1\times S^1$ — a **torus**, two-dimensional. Every point on it is a distinct arm posture.

*Reachable workspace.* The hand's distance from the base is

$$r = \sqrt{L_1^2+L_2^2+2L_1L_2\cos\theta_2},$$

which ranges over $\theta_2$ from $|L_1-L_2| = 0.4$ m (fully folded, $\theta_2 = 180°$) to $L_1+L_2 = 1.6$ m (fully extended, $\theta_2 = 0$). So the workspace is an **annulus**:

$$0.4\ \mathrm{m}\leq r\leq1.6\ \mathrm{m}.$$

*Its area:*

$$A = \pi\left(1.6^2-0.4^2\right) = \pi(2.56-0.16) = \pi(2.40) = 7.54\ \mathrm{m^2}.$$

*Dexterous workspace.* This arm has 2 DOF and works in a plane, where a full pose needs 3 (two of position, one of angle). It **cannot** choose its orientation, so the dexterous workspace as defined is **empty** — every reachable point is reachable in only one or two postures, each with its orientation forced.

*Counting solutions.* A point strictly inside the annulus is reachable in exactly **two** ways: elbow-up and elbow-down ($\theta_2 = \pm\alpha$). On either boundary circle the two collapse into one. That two-to-one map from configuration space to workspace is the source of every multiplicity in [2.1](02-01-inverse-kinematics-analytic.md).

*The dimension check.* $\dim\mathcal{C} = 2$ and $\dim\mathcal{W} = 2$, so generically the map is locally invertible — 2 DOF is exactly enough to hit a planar position. Add a third joint and $\dim\mathcal{C} = 3 > 2$: the arm becomes **redundant** for positioning, gains a one-dimensional self-motion at every point, and *now* has enough freedom to control orientation as well.

*A concrete redundancy.* With $L_1 = L_2 = L_3 = 1$, the 3R arm can reach $(1.0, 1.0)$ with a continuum of postures. Two of them:

$$(\theta_1,\theta_2,\theta_3) = (0°,\,90°,\,0°) \quad\text{gives}\quad (x,y) = (1+\cos90°,\ \sin90°+\ldots)$$

— worked out properly in [1.6](01-06-denavit-hartenberg-forward-kinematics.md), where the forward kinematics is written down. The point here is only that **the solution set is a curve, not a set of points**, and that curve is the redundancy the arm can exploit.

## Watch out

- **You might forget to count the ground link.** $N$ includes the fixed base. Leaving it out gives an answer that is $m$ too small.
- **You might apply $m = 6$ to a planar mechanism.** Use $m = 3$ for planar mechanisms and 6 for spatial ones; mixing them is the most common error in mobility counting.
- **You might treat a multi-DOF joint as one degree removed.** A spherical joint has $f = 3$ and removes only 3 of the 6; the formula's $(m-f_i)$ handles this, but only if you look up $f_i$ correctly.
- **You might trust the formula blindly.** Grübler–Kutzbach is a *generic* count. Special geometries (parallel axes, equal link lengths) create **overconstrained mechanisms** with more mobility than the formula predicts — the Bennett linkage has $\mathrm{DOF} = 6(4-1)-4(6-1) = -2$ by the formula and actually moves with one degree of freedom.
- **You might conflate configuration space with workspace.** They can have different dimensions, and the map between them is many-to-one.
- **You might forget that revolute joint variables are angles on a circle.** A planner treating $\mathcal{C}$ as a box misses the shortest path across the wrap-around.
- **You might assume more joints means more capability.** A Stewart platform's 18 joints give 6 DOF; a 6R arm's 6 joints give the same 6, in a far larger workspace.

## One-liner

> $\mathrm{DOF} = m(N-1)-\sum(m-f_i)$ counts a mechanism's freedom whether it is an open chain or a closed loop; configuration space is where the joints live and workspace is where the hand goes, and the map between them is many-to-one.

## Problems

**P1 (🟢)** Classify each and count its degrees of freedom. (a) A SCARA arm with joints R, R, P, R (serial, spatial). (b) A Cartesian gantry with joints P, P, P (serial, spatial). (c) A planar 3R arm (serial, planar).

**P2 (🟡)** A planar slider-crank mechanism has four links (ground, crank, connecting rod, slider) joined by three revolute joints and one prismatic joint. (a) Apply the mobility formula with $m = 3$. (b) State what the answer means physically. (c) A designer proposes adding a second connecting rod from the crank to the slider, adding one link and two revolute joints. Recompute, and explain the result.

**P3 (🔴)** A planar 2R arm has $L_1 = 0.8$ m and $L_2 = 0.5$ m. (a) Describe its configuration space and its topology. (b) Find the inner and outer radii of its reachable workspace and its area. (c) A third revolute joint with $L_3 = 0.3$ m is added. Give the new workspace radii and area, and state the dimension of the new configuration space. (d) Explain what the 3R arm can do that the 2R arm cannot, quantify the redundancy at a typical point, and describe one practical use for it.

<details>
<summary>Solutions</summary>

**P1** (a) *SCARA, RRPR:* serial spatial chain, $n = 4$ one-DOF joints, so $N = 5$, $J = 4$:

$$\mathrm{DOF} = 6(5-1)-4(6-1) = 24-20 = \mathbf{4}.$$

Four degrees of freedom: $x$, $y$, $z$ and one rotation about the vertical. That is exactly what planar assembly needs — place a part anywhere on a table at any angle, and move it up and down — and the reason SCARA arms are the fastest robots on an electronics line is precisely that they do not carry the two extra axes.

(b) *Cartesian gantry, PPP:* $n = 3$, $N = 4$, $J = 3$:

$$\mathrm{DOF} = 6(4-1)-3(6-1) = 18-15 = \mathbf{3}.$$

Position only, no orientation control. Its virtues are stiffness and a trivially simple kinematics ($x$, $y$, $z$ *are* the joint variables), which is why 3D printers and CNC machines use it.

(c) *Planar 3R:* $m = 3$, $N = 4$, $J = 3$:

$$\mathrm{DOF} = 3(4-1)-3(3-1) = 9-6 = \mathbf{3}.$$

Three — exactly the freedom of a rigid body in a plane, so a planar 3R arm can place its hand at any position *and* angle within its workspace.

*The pattern:* for every serial chain, DOF equals the joint count. The formula is confirming what you already knew; its value is for the closed loops in P2.

**P2** (a) $N = 4$ links, $J = 4$ joints (three R with $f = 1$, one P with $f = 1$), $m = 3$:

$$\mathrm{DOF} = 3(4-1)-4(3-1) = 9-8 = \mathbf{1}.$$

(b) **One degree of freedom.** Specify the crank angle and everything else follows: the connecting-rod angle and the slider position are both determined. This is exactly the behaviour of a piston engine — one crankshaft rotation determines every piston's position — and it is why a slider-crank is the canonical rotation-to-translation converter.

(c) Adding one link and two revolute joints gives $N = 5$, $J = 6$:

$$\mathrm{DOF} = 3(5-1)-6(3-1) = 12-12 = \mathbf{0}.$$

**Zero degrees of freedom — the mechanism is now a rigid structure.** It cannot move at all.

*Why this happens.* The second connecting rod adds two constraints (its two pin joints) while adding only three freedoms (the new link's planar freedom), for a net loss of one. The mechanism that had exactly one degree of freedom now has none.

*The important caveat.* This is the **generic** answer. If the second rod is made **exactly the same length** as the first and mounted **exactly parallel** to it, the two rods constrain the slider redundantly rather than independently, and the mechanism moves with one degree of freedom after all. That is a **parallel-motion linkage**, and it is used deliberately: the parallelogram linkages on backhoes, on drafting machines, and on the classic Anthropomorphic arm's counterbalance all rely on it.

**The formula counts generic constraints, not special geometries**, and the exceptions are not curiosities — a large fraction of practically useful mechanisms are exactly these overconstrained special cases, because the redundant constraint is what makes them stiff.

**P3** (a) Two revolute joints, so

$$\mathcal{C} = S^1\times S^1 = T^2,$$

a **two-dimensional torus**. Every configuration is a point on the doughnut's surface; moving one joint through a full turn returns you to where you started.

The topology matters practically: the shortest path in $\mathcal{C}$ from $\theta_1 = 350°$ to $\theta_1 = 10°$ is $20°$ through the wrap-around, not $340°$ the other way. A planner that models $\mathcal{C}$ as the square $[0,360°]^2$ gets this wrong every time.

(b) $$r_{\max} = L_1+L_2 = 0.8+0.5 = 1.3\ \mathrm{m}, \qquad r_{\min} = |L_1-L_2| = |0.8-0.5| = 0.3\ \mathrm{m}.$$

$$A = \pi\left(r_{\max}^2-r_{\min}^2\right) = \pi(1.69-0.09) = \pi(1.60) = 5.027\ \mathrm{m^2}.$$

(c) With a third link $L_3 = 0.3$:

$$r_{\max} = 0.8+0.5+0.3 = 1.6\ \mathrm{m}.$$

$$r_{\min} = \max\left(0,\ L_1-L_2-L_3\right) = \max(0,\ 0.8-0.5-0.3) = 0.$$

The longest link is exactly equal to the sum of the other two, so the arm can fold to reach its own base and the hole closes:

$$A = \pi\left(1.6^2-0^2\right) = \pi(2.56) = 8.042\ \mathrm{m^2}.$$

$$\dim\mathcal{C} = 3, \qquad \mathcal{C} = T^3.$$

*Note how sensitive $r_{\min}$ is:* if $L_3$ were 0.29 instead of 0.30, $r_{\min} = 0.01$ m and there would still be a (tiny) unreachable hole. Designers choose link lengths partly to close this hole, because a dead zone at the base is expensive floor space.

(d) *What the 3R arm can do that the 2R cannot.*

**Control orientation.** A planar pose has three numbers $(x,y,\phi)$. The 2R arm has 2 DOF and can only match two of them, so its hand angle is dictated by the position it is asked to reach. The 3R arm has 3 DOF and can hit any $(x,y,\phi)$ inside its workspace — which is what makes it useful for anything involving a tool that must be *aimed*, not merely placed.

*Quantifying redundancy for a positioning task.* If only $(x,y)$ is specified, the 3R arm is redundant by

$$\dim\mathcal{C}-\dim(\text{task}) = 3-2 = 1.$$

At a typical point, the set of joint triples reaching it is a **one-dimensional curve** in $T^3$ (a "self-motion manifold"), not a set of isolated points. The arm can move continuously along that curve with the hand held perfectly still.

*Concretely:* at $(x,y) = (1.0, 0.4)$, the wrist centre must lie on a circle of radius $L_3 = 0.3$ about the hand. Every point on the reachable arc of that circle gives a valid 2R sub-solution (two of them, elbow-up and elbow-down), so the solutions form a continuum parameterized by the hand angle $\phi$.

*One practical use, and why it matters more than it looks.* **Obstacle avoidance without moving the tool.** A welding robot with its torch on a seam can sweep its elbow through the self-motion manifold to clear a fixture, while the torch tip and orientation never move. The same freedom is used to keep away from joint limits, to stay clear of the singularities of [2.4](02-04-singularities.md), and to minimize joint torque by keeping the arm's mass close to the base.

This is the practical reason 7-DOF arms exist despite costing an extra axis: for a 6-DOF task, the seventh joint buys a one-dimensional escape route at every single pose, and that turns out to be worth a great deal in a cluttered workcell.

</details>

## Connections

- **Backward:** rigid-body kinematics and the idea of a body-fixed frame come from [`engineering-dynamics` 3.1](../../engineering-dynamics/lessons/03-01-rotation-instantaneous-center.md); the notion of a generalized coordinate is [`analytical-mechanics` 1.3](../../analytical-mechanics/lessons/01-03-generalized-coordinates-constraints.md)'s.
- **Forward:** [1.2](01-02-rotation-matrices.md)–[1.5](01-05-homogeneous-transforms.md) build the algebra for describing a link's pose; [1.6](01-06-denavit-hartenberg-forward-kinematics.md) chains it down the arm; [4.6](04-06-motion-planning.md) does its searching in the configuration space defined here.
- **Sideways:** the mobility formula is a rank count — freedoms minus independent constraints — the same argument as the rank–nullity theorem of [`linalg-refresher` 1.3](../../linalg-refresher/lessons/01-03-linear-systems-elimination-rank.md), with the overconstrained exceptions being exactly the cases where the constraints turn out to be linearly dependent.
