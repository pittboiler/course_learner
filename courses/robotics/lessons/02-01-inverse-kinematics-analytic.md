# Robotics & Kinematics · Lesson 2.1: Inverse kinematics — analytic

> ⏱ ~15 min · Module 2: Inverse kinematics and the Jacobian · Builds on: [1.6 Denavit–Hartenberg and forward kinematics](01-06-denavit-hartenberg-forward-kinematics.md) · Unlocks: [2.2 Inverse kinematics: numerical](02-02-inverse-kinematics-numerical.md), [2.4 Singularities](02-04-singularities.md)

## Why this matters

Forward kinematics answers a question nobody asks. Nobody says "put joint 3 at $47°$" — they say "put the gripper *there*". [Inverse kinematics](../reference.md#inverse-kinematics) is the direction that matters, and it is a different kind of problem entirely.

Forward kinematics is a product of matrices: always solvable, always unique, $O(n)$. Inverse kinematics is a system of nonlinear trigonometric equations. It may have no solution, one, several, or infinitely many. There may be no closed form at all.

When a closed form *does* exist it is worth a great deal: microseconds instead of milliseconds, every solution instead of one, and no dependence on an initial guess. This lesson builds those closed forms for the arms that admit them, and establishes when they exist.

## The idea

Given a desired pose $^0_nT_{\rm desired}$, find the joint vector $\mathbf{q}$ with $^0_nT(\mathbf{q}) = {}^0_nT_{\rm desired}$.

Two routes to a closed form:

**Geometric.** Draw the arm, find triangles, apply the cosine law. Works beautifully for planar arms and for the position part of most industrial arms, and it produces answers you can sanity-check by looking at a picture.

**Algebraic.** Write $^0_nT(\mathbf{q}) = T_{\rm desired}$ as sixteen scalar equations (twelve independent), and manipulate them — usually by pre-multiplying by inverse link transforms to isolate one joint variable at a time.

Both routes hit the same three structural facts.

**Multiple solutions are normal.** A planar 2R arm reaching an interior point has two: elbow-up and elbow-down. A 6R industrial arm typically has **eight**, from three independent binary choices — shoulder left/right, elbow up/down, wrist flip. Choosing among them is a real engineering decision involving joint limits, obstacles, and which one is closest to where the arm already is.

**Existence is not guaranteed.** A point outside the workspace has no solution, and the algebra announces it by producing $|\cos\theta|>1$. That is not a numerical failure; it is the correct answer to an impossible question.

**Closed forms are not guaranteed either.** A general 6R arm's inverse kinematics has no closed form. But **Pieper's condition** — three consecutive joint axes intersecting at a point, or three consecutive axes parallel — makes one exist, and virtually every industrial arm is built to satisfy it. That is not a coincidence: arms are *designed* to be solvable.

The trick that makes the standard arm tractable is **kinematic decoupling**. If the last three axes intersect at a point (a spherical wrist), then that point — the **wrist centre** — depends only on the first three joints. Solve for position with the first three, then for orientation with the last three. **One six-dimensional nonlinear problem becomes two three-dimensional ones**, and both have closed forms.

## The formal version

**Planar 2R arm.** Link lengths $L_1$, $L_2$; target $(x,y)$.

$$\boxed{\;\cos\theta_2 = \frac{x^2+y^2-L_1^2-L_2^2}{2L_1L_2}, \qquad \theta_2 = \pm\arccos(\cdot),\;}$$

$$\boxed{\;\theta_1 = \operatorname{atan2}(y,x)-\operatorname{atan2}\left(L_2\sin\theta_2,\ L_1+L_2\cos\theta_2\right).\;}$$

*In words: the cosine law on the triangle formed by the two links and the reach vector gives $\theta_2$; then $\theta_1$ is the direction to the target minus the angle the second link contributes.*

**Solution structure.**

| $\cos\theta_2$ | Solutions | Meaning |
|---|---|---|
| $>1$ or $<-1$ | none | outside the annulus |
| $= \pm1$ | one | on a workspace boundary |
| $\in(-1,1)$ | two | elbow-up and elbow-down |

The two solutions are $\theta_2 = +\arccos(\cdot)$ (**elbow-down**, for the usual sign convention) and $\theta_2 = -\arccos(\cdot)$ (**elbow-up**). Note that $\theta_1$ differs between them too — you cannot just flip $\theta_2$.

**Use `atan2` throughout.** Recovering $\theta_2$ as $\arccos$ loses the sign, which is exactly the information distinguishing the two solutions; recovering $\theta_1$ with `atan` loses the quadrant.

**Planar 3R arm (position and orientation).** Three joints, three task variables $(x,y,\phi)$, so the solution set is discrete. The trick is to **work backwards from the wrist**:

$$\boxed{\;x_w = x-L_3\cos\phi, \qquad y_w = y-L_3\sin\phi,\;}$$

which is where the third joint must be. Then solve the 2R problem for $(x_w,y_w)$, and finish with

$$\theta_3 = \phi-\theta_1-\theta_2.$$

*In words: subtract the last link to find the wrist, solve the 2R sub-problem, then set the last joint to make up the orientation difference.* This is the planar version of kinematic decoupling, and the same idea scales to six joints.

**Kinematic decoupling (spatial 6R with a spherical wrist).** If axes 4, 5, 6 intersect at the wrist centre $\mathbf{p}_w$:

$$\boxed{\;\mathbf{p}_w = \mathbf{p}_{\rm tool}-d_6\,{}^0_6R\,\hat z_6,\;}$$

so $\mathbf{p}_w$ is computable from the *desired pose alone*. Then:

1. Solve $\theta_1,\theta_2,\theta_3$ from $\mathbf{p}_w$ — a three-joint position problem.
2. Compute $^0_3R$ from those angles.
3. Solve $^3_6R = {}^0_3R^{\top}\,{}^0_6R_{\rm desired}$ for $\theta_4,\theta_5,\theta_6$ — a ZYZ Euler-angle extraction ([1.3](01-03-euler-fixed-angles-axis-angle.md)).

**Pieper's condition.** A closed-form solution exists for a 6-DOF arm if **three consecutive joint axes intersect at a point**, or if **three consecutive axes are parallel**. Almost every industrial robot satisfies the first (spherical wrist); most collaborative arms satisfy the second.

**Counting solutions.**

| Arm | Solutions | Choices |
|---|---|---|
| Planar 2R (position) | 2 | elbow up/down |
| Planar 3R (pose) | 2 | elbow up/down |
| Planar 3R (position only) | $\infty$ | redundant, one-parameter family |
| Articulated 6R with spherical wrist | 8 | shoulder × elbow × wrist flip |
| 7-DOF redundant | $\infty$ | one-parameter self-motion |

**Reachability.** The target must be in the reachable workspace, and if orientation is also specified, in the dexterous workspace ([1.1](01-01-robots-links-configuration-space.md)). The algebra reports failure as $|\cos\theta|>1$, and any solver must test for that before calling `arccos`.

## Picture

![A two-panel figure. Left: a planar two-link arm drawn twice on the same target point, once in the elbow-up configuration and once elbow-down, with the triangle formed by the two links and the reach vector marked in each and the cosine-law relation labelled on the interior angle at the elbow. A dashed annulus shows the reachable workspace with its inner and outer radii. Right: a six-jointed arm with a spherical wrist, showing the wrist centre marked as a point where the last three axes intersect, an arrow from the tool point back along the tool axis by the distance d-six to locate it, and the arm divided by a dividing line into a first-three-joints positioning problem and a last-three-joints orientation problem.](assets/02-01-fig1.svg)

Left: two solutions to the same request, and the triangle the cosine law lives on. The inner radius of the annulus is $|L_1-L_2|$ — the arm folded back on itself.

Right: kinematic decoupling. Because the last three axes meet at a point, that point can be found from the desired pose without knowing any joint angle, which splits the problem in half.

## Worked examples

**Example 1 (planar 2R, both solutions).** $L_1 = 0.5$ m, $L_2 = 0.4$ m; reach $(0.6, 0.4)$ m.

*Reachability.*

$$r = \sqrt{0.36+0.16} = \sqrt{0.52} = 0.7211\ \mathrm{m},$$

and the annulus runs from $|0.5-0.4| = 0.1$ to $0.5+0.4 = 0.9$ m. Since $0.1<0.7211<0.9$ ✓, a solution exists.

*Elbow angle.*

$$\cos\theta_2 = \frac{0.36+0.16-0.25-0.16}{2(0.5)(0.4)} = \frac{0.52-0.41}{0.40} = \frac{0.11}{0.40} = 0.2750.$$

$$\theta_2 = \pm\arccos(0.2750) = \pm74.04°.$$

*Shoulder angle, elbow-down branch* ($\theta_2 = +74.04°$, $\sin\theta_2 = 0.9614$):

$$\theta_1 = \operatorname{atan2}(0.4, 0.6)-\operatorname{atan2}\left(0.4(0.9614),\ 0.5+0.4(0.2750)\right)$$
$$= 33.69°-\operatorname{atan2}(0.3846,\ 0.6100) = 33.69°-32.23° = 1.46°.$$

*Elbow-up branch* ($\theta_2 = -74.04°$, $\sin\theta_2 = -0.9614$):

$$\theta_1 = 33.69°-\operatorname{atan2}(-0.3846,\ 0.6100) = 33.69°-(-32.23°) = 65.92°.$$

**Two solutions:**

$$(\theta_1,\theta_2) = (1.46°,\ 74.04°) \quad\text{and}\quad (65.92°,\ -74.04°).$$

*Verify both by forward kinematics.*

$$\text{elbow-down: } x = 0.5\cos(1.46°)+0.4\cos(75.50°) = 0.4998+0.1002 = 0.6000\ \checkmark$$
$$y = 0.5\sin(1.46°)+0.4\sin(75.50°) = 0.0127+0.3873 = 0.4000\ \checkmark$$

$$\text{elbow-up: } x = 0.5\cos(65.92°)+0.4\cos(-8.12°) = 0.2040+0.3960 = 0.6000\ \checkmark$$
$$y = 0.5\sin(65.92°)+0.4\sin(-8.12°) = 0.4565-0.0565 = 0.4000\ \checkmark$$

**Both reach the identical point** with the elbow on opposite sides of the line from base to target.

*Which one to use.* The choice is not arbitrary and not free:

**Continuity.** Switching branches mid-path requires a large joint motion — here $\theta_2$ must sweep $148°$ — during which the tool cannot stay on its path. Trajectory planners therefore pick a branch and stay on it, only switching at a planned stop.

**Joint limits.** If $\theta_1$ cannot go past $60°$, the elbow-up solution is simply unavailable at this point.

**Obstacles.** The two configurations sweep different regions. In a cluttered cell, one may collide and the other not.

**Proximity to a singularity.** [2.4](02-04-singularities.md) shows that $\theta_2 = 0$ or $180°$ is singular. Here both solutions are $74°$ from a singularity, which is comfortable — but near the workspace boundary the two solutions converge and *both* become singular, which is why arms are never operated at full extension.

**Example 2 (planar 3R, with orientation specified).** $L_1 = 0.5$, $L_2 = 0.4$, $L_3 = 0.3$ m; reach $(0.7, 0.5)$ m with tool orientation $\phi = 45°$.

*Step 1: locate the wrist.* The third joint sits one link back along the tool direction:

$$x_w = 0.7-0.3\cos45° = 0.7-0.2121 = 0.4879\ \mathrm{m},$$
$$y_w = 0.5-0.3\sin45° = 0.5-0.2121 = 0.2879\ \mathrm{m}.$$

**This is the whole trick.** The wrist position depends only on the *desired pose*, not on any joint angle — so the three-joint problem has become a two-joint problem, already solved.

*Step 2: the 2R sub-problem for $(0.4879, 0.2879)$.*

$$r_w^2 = 0.2380+0.0829 = 0.3209,$$
$$\cos\theta_2 = \frac{0.3209-0.25-0.16}{2(0.5)(0.4)} = \frac{-0.0891}{0.40} = -0.2228,$$
$$\theta_2 = \pm102.87°.$$

*Elbow-down* ($\theta_2 = +102.87°$, $\sin\theta_2 = 0.9749$):

$$\theta_1 = \operatorname{atan2}(0.2879,0.4879)-\operatorname{atan2}\left(0.4(0.9749),\ 0.5+0.4(-0.2228)\right)$$
$$= 30.53°-\operatorname{atan2}(0.3900,\ 0.4109) = 30.53°-43.49° = -12.96°.$$

*Elbow-up* ($\theta_2 = -102.87°$):

$$\theta_1 = 30.53°-\operatorname{atan2}(-0.3900,\ 0.4109) = 30.53°+43.49° = 74.05°.$$

*Step 3: the wrist joint makes up the difference.*

$$\theta_3 = \phi-\theta_1-\theta_2.$$

$$\text{elbow-down: } \theta_3 = 45°-(-12.96°)-102.87° = -44.91°,$$
$$\text{elbow-up: } \theta_3 = 45°-74.05°-(-102.87°) = 73.83°.$$

**Two complete solutions:**

$$(-12.96°,\ 102.87°,\ -44.91°) \quad\text{and}\quad (74.05°,\ -102.87°,\ 73.83°).$$

*Verify both.*

$$\text{first: } \theta_1+\theta_2 = 89.91°, \quad \theta_1+\theta_2+\theta_3 = 45.00°\ \checkmark$$
$$x = 0.5\cos(-12.96°)+0.4\cos(89.91°)+0.3\cos(45°) = 0.4873+0.0006+0.2121 = 0.7000\ \checkmark$$
$$y = 0.5\sin(-12.96°)+0.4\sin(89.91°)+0.3\sin(45°) = -0.1122+0.4000+0.2121 = 0.4999\ \checkmark$$

The second solution checks out identically.

*Why there are exactly two, and not more.* Specifying $\phi$ **consumed** the redundancy. A 3R planar arm has 3 DOF; asking only for a position (2 constraints) leaves a one-parameter family of solutions, but asking for position *and* orientation (3 constraints) leaves only the discrete elbow choice.

That is the general pattern:

$$\#\text{solutions} \sim \begin{cases}\text{finite} & \dim\mathcal{C} = \dim(\text{task})\\ \text{a } (\dim\mathcal{C}-\dim\text{task})\text{-dimensional family} & \dim\mathcal{C}>\dim(\text{task})\\ \text{generally none} & \dim\mathcal{C}<\dim(\text{task})\end{cases}$$

and it is why a 6-DOF arm is the standard for a 6-DOF task: any fewer and most poses are unreachable; any more and you must decide what to do with the leftover freedom.

*What happens if you ask for the impossible.* Try reaching $(1.0, 0.5)$ with the same 2R sub-arm:

$$\cos\theta_2 = \frac{1.00+0.25-0.41}{0.40} = \frac{0.84}{0.40} = 2.10 > 1.$$

**No solution**, and the algebra says so cleanly. Any solver must test this before calling `arccos`, which would otherwise return a NaN and propagate silently. A good implementation returns "unreachable, by a margin of $r-(L_1+L_2) = 1.118-0.9 = 0.218$ m" — the *distance* to reachability is often more useful than the bare failure, because it tells a planner how far the base must move.

## Watch out

- **You might call `arccos` without checking the range.** $|\cos\theta_2|>1$ means unreachable. Test first; NaN propagates silently and appears as a mysterious failure three modules later.
- **You might use `atan` for $\theta_1$.** `atan2` is required — the quadrant matters, and half the workspace is on the wrong side without it.
- **You might return only one solution.** Both branches are valid. Which one is right depends on limits, obstacles, and the current configuration — information the IK function usually does not have, so it should return all of them.
- **You might flip $\theta_2$ and keep $\theta_1$.** $\theta_1$ depends on $\theta_2$; the second branch needs both recomputed.
- **You might forget that a solution can violate joint limits.** IK returns kinematically valid answers; feasibility is a separate check.
- **You might switch branches mid-trajectory.** The tool leaves its path during the reconfiguration. Choose a branch at the start and hold it.
- **You might assume a closed form exists.** For a general 6R arm it does not. Check Pieper's condition; if it fails, use the numerical methods of [2.2](02-02-inverse-kinematics-numerical.md).
- **You might work near a singularity.** As $\theta_2\to0$ or $180°$ the two solutions merge and small position changes demand large joint motions ([2.4](02-04-singularities.md)).

## One-liner

> Inverse kinematics inverts the forward map and inherits everything it lacks — existence, uniqueness, and a closed form — but arms designed to satisfy Pieper's condition decouple into a position problem and an orientation problem, each solvable by the cosine law and an `atan2`.

## Problems

**P1 (🟢)** A planar 2R arm has $L_1 = 0.3$ m and $L_2 = 0.4$ m. Find all solutions reaching $(0.3, 0.4)$ m. (a) Check reachability. (b) Find $\theta_2$. (c) Find $\theta_1$ for both branches. (d) Verify one by forward kinematics.

**P2 (🟡)** A planar 2R arm has $L_1 = 0.4$ m and $L_2 = 0.3$ m. (a) Find both solutions reaching $(0.5, 0.2)$ m. (b) Verify both by forward kinematics. (c) The arm is currently at $(\theta_1,\theta_2) = (50°, -70°)$; state which solution a planner should choose and why. (d) Find the largest and smallest $r$ the arm can reach and state what happens to the two solutions at each.

**P3 (🔴)** A planar 3R arm has $L_1 = 0.4$, $L_2 = 0.3$, $L_3 = 0.2$ m. (a) Find all solutions reaching $(0.5, 0.3)$ m with $\phi = 30°$. (b) Verify both. (c) Now suppose only the position $(0.5, 0.3)$ is required, with $\phi$ free. Describe the solution set, and find two distinct members of it explicitly. (d) Explain how a planner should choose $\phi$ in that case, and quantify one criterion.

<details>
<summary>Solutions</summary>

**P1** (a) $$r = \sqrt{0.09+0.16} = \sqrt{0.25} = 0.5\ \mathrm{m}.$$

Annulus: $|0.3-0.4| = 0.1$ to $0.3+0.4 = 0.7$ m. Since $0.1<0.5<0.7$ ✓, reachable.

(b) $$\cos\theta_2 = \frac{0.25-0.09-0.16}{2(0.3)(0.4)} = \frac{0.00}{0.24} = 0.$$

$$\theta_2 = \pm90°.$$

(A 3-4-5 right triangle: the two links are exactly perpendicular at the target.)

(c) *Elbow-down* ($\theta_2 = +90°$, $\sin\theta_2 = 1$):

$$\theta_1 = \operatorname{atan2}(0.4,0.3)-\operatorname{atan2}\left(0.4(1),\ 0.3+0\right) = 53.13°-\operatorname{atan2}(0.4,0.3) = 53.13°-53.13° = 0°.$$

*Elbow-up* ($\theta_2 = -90°$):

$$\theta_1 = 53.13°-\operatorname{atan2}(-0.4,\ 0.3) = 53.13°-(-53.13°) = 106.26°.$$

$$(\theta_1,\theta_2) = (0°,\ 90°) \quad\text{and}\quad (106.26°,\ -90°).$$

(d) *Elbow-down:*

$$x = 0.3\cos0°+0.4\cos90° = 0.3+0 = 0.3\ \checkmark$$
$$y = 0.3\sin0°+0.4\sin90° = 0+0.4 = 0.4\ \checkmark$$

**P2** (a) $$r^2 = 0.25+0.04 = 0.29, \qquad r = 0.5385\ \mathrm{m}.$$

Annulus $0.1$ to $0.7$ ✓.

$$\cos\theta_2 = \frac{0.29-0.16-0.09}{2(0.4)(0.3)} = \frac{0.04}{0.24} = 0.1667, \qquad \theta_2 = \pm80.41°.$$

*Elbow-down* ($\sin\theta_2 = 0.9860$):

$$\theta_1 = \operatorname{atan2}(0.2,0.5)-\operatorname{atan2}\left(0.3(0.9860),\ 0.4+0.3(0.1667)\right)$$
$$= 21.80°-\operatorname{atan2}(0.2958,\ 0.4500) = 21.80°-33.32° = -11.52°.$$

*Elbow-up:*

$$\theta_1 = 21.80°-\operatorname{atan2}(-0.2958,\ 0.4500) = 21.80°+33.32° = 55.12°.$$

$$(-11.52°,\ 80.41°) \quad\text{and}\quad (55.12°,\ -80.41°).$$

(b) *First:* $\theta_1+\theta_2 = 68.89°$.

$$x = 0.4\cos(-11.52°)+0.3\cos(68.89°) = 0.3919+0.1081 = 0.5000\ \checkmark$$
$$y = 0.4\sin(-11.52°)+0.3\sin(68.89°) = -0.0799+0.2799 = 0.2000\ \checkmark$$

*Second:* $\theta_1+\theta_2 = -25.29°$.

$$x = 0.4\cos(55.12°)+0.3\cos(-25.29°) = 0.2287+0.2713 = 0.5000\ \checkmark$$
$$y = 0.4\sin(55.12°)+0.3\sin(-25.29°) = 0.3282-0.1282 = 0.2000\ \checkmark$$

(c) *Joint-space distance from the current $(50°, -70°)$:*

| Solution | $|\Delta\theta_1|$ | $|\Delta\theta_2|$ | Total |
|---|---|---|---|
| $(-11.52°, 80.41°)$ | $61.52°$ | $150.41°$ | $211.93°$ |
| $(55.12°, -80.41°)$ | $5.12°$ | $10.41°$ | $15.53°$ |

**Choose the elbow-up solution $(55.12°, -80.41°)$** — it is fourteen times closer in joint space.

*Why this is the right criterion.* Three reasons, all pointing the same way:

**Speed.** Motion time scales with the largest joint excursion. $10°$ versus $150°$ is a difference of roughly fifteen times.

**No reconfiguration.** The current configuration is already elbow-up ($\theta_2<0$). Switching to elbow-down means the arm must pass through $\theta_2 = 0$ — the fully extended singular configuration — which is both slow and, as [2.4](02-04-singularities.md) shows, dynamically nasty.

**Predictability.** An operator watching the arm expects a small motion for a small commanded change. An arm that flips its elbow because the IK solver returned a different branch is unsafe and looks broken.

Production IK solvers therefore take the current configuration as an argument and return the nearest valid solution, not simply "a" solution.

(d) $$r_{\max} = L_1+L_2 = 0.7\ \mathrm{m}, \qquad r_{\min} = |L_1-L_2| = 0.1\ \mathrm{m}.$$

*At $r = r_{\max}$:* $\cos\theta_2 = \dfrac{0.49-0.16-0.09}{0.24} = \dfrac{0.24}{0.24} = 1$, so $\theta_2 = 0$ — a **single** solution, the arm fully straight. The two branches have merged.

*At $r = r_{\min}$:* $\cos\theta_2 = \dfrac{0.01-0.25}{0.24} = -1$, so $\theta_2 = 180°$ — again a **single** solution, the arm folded back on itself.

**Both boundaries are singular.** The two solutions coalesce, and just inside the boundary they are very close together, so a small change in the target requires a large change in joint angles. This is the **boundary singularity** of [2.4](02-04-singularities.md), and it is why arms are never specified to work at more than about 90% of full extension.

**P3** (a) *Step 1: the wrist.*

$$x_w = 0.5-0.2\cos30° = 0.5-0.1732 = 0.3268\ \mathrm{m},$$
$$y_w = 0.3-0.2\sin30° = 0.3-0.1000 = 0.2000\ \mathrm{m}.$$

*Step 2: the 2R sub-problem.*

$$r_w^2 = 0.1068+0.0400 = 0.1468,$$
$$\cos\theta_2 = \frac{0.1468-0.16-0.09}{2(0.4)(0.3)} = \frac{-0.1032}{0.24} = -0.4300, \qquad \theta_2 = \pm115.47°.$$

*Elbow-down* ($\theta_2 = +115.47°$, $\sin\theta_2 = 0.9029$):

$$\theta_1 = \operatorname{atan2}(0.2,0.3268)-\operatorname{atan2}\left(0.3(0.9029),\ 0.4+0.3(-0.4300)\right)$$
$$= 31.46°-\operatorname{atan2}(0.2709,\ 0.2710) = 31.46°-44.98° = -13.52°.$$

*Elbow-up:*

$$\theta_1 = 31.46°+44.98° = 76.45°.$$

*Step 3.*

$$\theta_3 = 30°-\theta_1-\theta_2.$$
$$\text{elbow-down: } \theta_3 = 30°+13.52°-115.47° = -71.95°,$$
$$\text{elbow-up: } \theta_3 = 30°-76.45°+115.47° = 69.02°.$$

$$\boxed{(-13.52°,\ 115.47°,\ -71.95°) \quad\text{and}\quad (76.45°,\ -115.47°,\ 69.02°).}$$

(b) *First solution:* $\theta_1+\theta_2 = 101.95°$, $\theta_1+\theta_2+\theta_3 = 30.00°$ ✓.

$$x = 0.4\cos(-13.52°)+0.3\cos(101.95°)+0.2\cos(30°) = 0.3889-0.0621+0.1732 = 0.5000\ \checkmark$$
$$y = 0.4\sin(-13.52°)+0.3\sin(101.95°)+0.2\sin(30°) = -0.0935+0.2935+0.1000 = 0.3000\ \checkmark$$

*Second solution:* $\theta_1+\theta_2 = -39.02°$, sum $= 30.00°$ ✓.

$$x = 0.4\cos(76.45°)+0.3\cos(-39.02°)+0.2\cos(30°) = 0.0937+0.2331+0.1732 = 0.5000\ \checkmark$$
$$y = 0.4\sin(76.45°)+0.3\sin(-39.02°)+0.2\sin(30°) = 0.3889-0.1889+0.1000 = 0.3000\ \checkmark$$

(c) With $\phi$ free, the arm has 3 DOF for a 2-DOF task: **redundant by one**. The solution set is a **one-parameter family**, parameterized by $\phi$ — and for each $\phi$ there are up to two elbow branches, so the set is a pair of curves in the configuration torus $T^3$.

*Explicitly:* for each $\phi$, put the wrist at $(0.5-0.2\cos\phi,\ 0.3-0.2\sin\phi)$ and solve the 2R problem. That wrist point traces a **circle of radius $0.2$ m centred on the target** as $\phi$ sweeps, and every point of that circle lying inside the 2R annulus ($0.1$ to $0.7$ m from the base) gives valid solutions.

*Member 1* — the $\phi = 30°$ solution from (a): $(-13.52°,\ 115.47°,\ -71.95°)$.

*Member 2* — take $\phi = 0°$. The wrist moves to $(0.5-0.2,\ 0.3) = (0.3,\ 0.3)$:

$$r_w^2 = 0.18, \qquad \cos\theta_2 = \frac{0.18-0.25}{0.24} = -0.2917, \qquad \theta_2 = \pm106.96°.$$

*Elbow-down* ($\sin\theta_2 = 0.9565$):

$$\theta_1 = 45°-\operatorname{atan2}\left(0.2870,\ 0.4-0.0875\right) = 45°-\operatorname{atan2}(0.2870,\ 0.3125) = 45°-42.56° = 2.44°,$$
$$\theta_3 = 0°-2.44°-106.96° = -109.40°.$$

*Check:* $\theta_1+\theta_2 = 109.40°$, sum $= 0°$ ✓.

$$x = 0.4\cos(2.44°)+0.3\cos(109.40°)+0.2\cos(0°) = 0.3996-0.0996+0.2000 = 0.5000\ \checkmark$$
$$y = 0.4\sin(2.44°)+0.3\sin(109.40°)+0.2\sin(0°) = 0.0170+0.2830+0 = 0.3000\ \checkmark$$

**Two visibly different postures, the same tool position.**

(d) *How to choose $\phi$.* The redundancy is a resource, and the choice is made by optimizing some secondary criterion over the family. The standard ones:

**Distance from singularity (manipulability).** Maximize $|\det J| = L_1L_2|\sin\theta_2|$ for the 2R sub-arm — that is, push $|\theta_2|$ toward $90°$, where the arm is furthest from both boundary singularities.

*Quantified for this problem.* The wrist must lie on the circle of radius 0.2 about $(0.5,0.3)$, at distance $r_w$ from the base. Manipulability is best when $\cos\theta_2 = 0$, i.e.

$$r_w^2 = L_1^2+L_2^2 = 0.16+0.09 = 0.25, \qquad r_w = 0.5\ \mathrm{m}.$$

The target itself is at $r = \sqrt{0.25+0.09} = 0.5831$ m from the base, and the wrist circle has radius 0.2, so $r_w$ ranges over $[0.3831,\ 0.7831]$. **$r_w = 0.5$ is inside that range**, so a $\phi$ achieving perfect manipulability exists. At that $\phi$, $\theta_2 = \pm90°$ exactly and $|\det J| = 0.4(0.3)(1) = 0.12\ \mathrm{m^2}$ — the maximum possible for this arm, against $0.4(0.3)(0.9029) = 0.108$ at the $\phi = 30°$ solution of (a). **An 11% improvement in manipulability, free**, from choosing the orientation the task did not constrain.

**Distance from joint limits.** Maximize the minimum margin $\min_i\left(|\theta_i-\theta_i^{\min}|,\ |\theta_i^{\max}-\theta_i|\right)$. The $\phi = 30°$ solution has $\theta_2 = 115°$; if the elbow limit is $120°$, that is $5°$ of margin and a poor choice.

**Obstacle clearance.** Sweep $\phi$ and take the posture with the greatest clearance — the practical use of redundancy described in [1.1](01-01-robots-links-configuration-space.md) P3.

**Proximity to the current configuration.** For a continuous path, pick the $\phi$ that minimizes joint motion from the previous point. This is what makes redundancy resolution a *local* rather than a global computation, and it is how the numerical methods of [2.2](02-02-inverse-kinematics-numerical.md) handle redundancy naturally: the pseudoinverse solution is the minimum-joint-motion one by construction.

*The general principle.* **Redundancy converts inverse kinematics from an equation-solving problem into an optimization problem** — and that is an upgrade, because the objective can encode everything the task specification left out.

</details>

## Flashback

**From Lesson 1.6 (Denavit–Hartenberg and forward kinematics):** A planar 2R arm has $L_1 = 0.5$, $L_2 = 0.4$ m. (a) Write the DH table. (b) Find the tool pose at $\theta_1 = 1.46°$, $\theta_2 = 74.04°$. (c) Comment on the relationship to Example 1.

<details>
<summary>Solution</summary>

(a) | $i$ | $a_i$ | $\alpha_i$ | $d_i$ | $\theta_i$ |
|---|---|---|---|---|
| 1 | 0.5 | 0 | 0 | $\theta_1$ |
| 2 | 0.4 | 0 | 0 | $\theta_2$ |

(b) $$\theta_1+\theta_2 = 75.50°.$$

$$x = 0.5\cos(1.46°)+0.4\cos(75.50°) = 0.5(0.99968)+0.4(0.25038) = 0.49984+0.10015 = 0.60000\ \mathrm{m},$$
$$y = 0.5\sin(1.46°)+0.4\sin(75.50°) = 0.5(0.02548)+0.4(0.96814) = 0.01274+0.38726 = 0.40000\ \mathrm{m},$$
$$\phi = 75.50°.$$

(c) **This is exactly Example 1's elbow-down solution, run forwards.** Inverse kinematics produced these angles from the target $(0.6, 0.4)$; forward kinematics returns the target from the angles.

*The point of doing the round trip.* It is the only reliable verification of an IK implementation. IK involves several `atan2` calls, two branch signs, and a subtraction that is easy to get backwards, and a sign error produces an answer that *looks* plausible — a valid-seeming pair of joint angles — but reaches the wrong point. Forward kinematics is unambiguous, so **substituting an IK answer back into FK is the test**, and it should be in every unit test of every IK routine ever written.

*And note the asymmetry the round trip exposes.* Forward kinematics took one line and gave one answer. Inverse kinematics took a cosine law, two branches, three `atan2` calls, and a reachability test, and gave two answers. That asymmetry never goes away — it is the reason Module 2 exists at all, and the reason [2.2](02-02-inverse-kinematics-numerical.md) has to fall back on iteration whenever the closed form is unavailable.

*One more thing the round trip reveals.* The orientation came out as $\phi = 75.50°$ — not requested, and not controllable. A 2R arm has no orientation freedom; whatever position it reaches, the tool angle is whatever the two joints happen to sum to. Example 2's third joint is what buys that control back.

</details>

## Connections

- **Backward:** the forward map being inverted is [1.6](01-06-denavit-hartenberg-forward-kinematics.md)'s; the workspace and solution-counting arguments are [1.1](01-01-robots-links-configuration-space.md)'s; the wrist-orientation extraction is [1.3](01-03-euler-fixed-angles-axis-angle.md)'s ZYZ Euler problem.
- **Forward:** [2.2](02-02-inverse-kinematics-numerical.md) handles the arms with no closed form; [2.4](02-04-singularities.md) explains what happens where the branches merge.
- **Sideways:** this is root-finding for a system of trigonometric polynomials — the branch structure, the boundary where solutions coalesce, and the count of real solutions are all questions [`algebraic-geometry`](../../algebraic-geometry/syllabus.md) answers in general, and the coalescing of two solutions at the workspace boundary is a **fold bifurcation** of the kind [`dynamical-systems`](../../dynamical-systems/syllabus.md) classifies.
