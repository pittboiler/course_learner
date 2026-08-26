# Robotics & Kinematics · Lesson 2.4: Singularities

> ⏱ ~15 min · Module 2: Inverse kinematics and the Jacobian · Builds on: [2.3 The manipulator Jacobian](02-03-manipulator-jacobian.md), [2.2 Inverse kinematics: numerical](02-02-inverse-kinematics-numerical.md) · Unlocks: [2.5 Statics and the Jacobian transpose](02-05-statics-jacobian-transpose.md), [3.5 Cartesian trajectories and via points](03-05-cartesian-trajectories-via-points.md)

## Why this matters

A [singularity](../reference.md#singularity) is a configuration where the arm loses a degree of freedom — where, no matter how the joints move, the tool cannot move in some direction. The Jacobian drops rank, its inverse blows up, and every controller built on that inverse misbehaves.

They are not exotic. Every serial arm has them, in the interior of its workspace as well as on the boundary, and they are frequently in the middle of where you want to work. An arm that appears to freeze, lunge, or shake for no reason is usually near one.

Understanding them is what makes it possible to avoid them, to plan around them, and — when they cannot be avoided — to degrade gracefully rather than catastrophically.

## The idea

The Jacobian maps joint rates to tool twists: $\dot{\mathbf{x}} = J\dot{\mathbf{q}}$. Its **column space** is the set of achievable twists. Generically, for a 6-DOF arm, that column space is all of $\mathbb{R}^6$ and the arm can move any way it likes.

At a singularity, $\operatorname{rank}J<6$. The column space collapses to a subspace, and **there is a direction the tool simply cannot move**, no matter what the joints do. That direction is orthogonal to the column space — a vector in the left null space of $J$.

Simultaneously, $J$ acquires a **null space**: joint motions that produce no tool motion at all. That is the same object as the redundant arm's self-motion from [1.1](01-01-robots-links-configuration-space.md), except that here it appears in a non-redundant arm, locally, only at that configuration.

*The two facts are the same fact.* The rank–nullity theorem says $\operatorname{rank}+\operatorname{nullity} = n$; a lost rank is a gained null direction. The arm has traded a useful degree of freedom for a useless one.

Three families, distinguished by where they occur and what to do about them:

**Boundary singularities** happen at the edge of the workspace — the arm fully extended or fully folded. The lost direction is radial: the tool cannot move further out. They are unavoidable in principle (the workspace has to end somewhere) and easy to avoid in practice (do not work at full stretch).

**Interior singularities** happen inside the workspace, usually when two joint axes line up. These are the dangerous ones, because they sit in the middle of otherwise usable space and a straight-line Cartesian path can drive straight through one.

**Wrist singularities** are the most common interior kind. When the fourth and sixth axes of a spherical wrist become collinear — which happens whenever the fifth joint passes through zero — those two joints do the same thing, and one rotational degree of freedom is lost. **Most industrial arms have this singularity at a perfectly ordinary-looking wrist posture.**

## The formal version

**Definition.**

$$\boxed{\;\mathbf{q}\ \text{is singular} \iff \operatorname{rank}J(\mathbf{q})<\min(6,n).\;}$$

For a square $J$ this is $\det J = 0$; for a non-square one, use the singular values.

**What is lost, and what is gained.**

$$\text{lost twist directions} = \left(\operatorname{col}J\right)^{\perp} = \operatorname{null}\left(J^{\top}\right),$$
$$\text{free joint motions} = \operatorname{null}(J).$$

*In words: the left null space names the direction the tool cannot go; the right null space names the joint motion that achieves nothing.*

**Detecting it.** $\det J$ is a poor detector — it has units, scales badly, and is undefined for non-square $J$. Use the **smallest singular value**:

$$\boxed{\;\sigma_{\min}(J)\ \text{small} \iff \text{near-singular}, \qquad \kappa = \frac{\sigma_{\max}}{\sigma_{\min}}\ \text{large} \iff \text{ill-conditioned}.\;}$$

Or the manipulability measure

$$w = \sqrt{\det\left(JJ^{\top}\right)} = \prod_i\sigma_i,$$

which is zero exactly at a singularity — but note that $w$ can be small because *one* $\sigma$ is small or because *all* are moderately small, so $\sigma_{\min}$ is the more informative diagnostic.

**Planar 2R.**

$$\det J = L_1L_2\sin\theta_2,$$

$$\boxed{\;\text{singular} \iff \theta_2 = 0\ \text{(fully extended)}\ \text{or}\ \theta_2 = 180°\ \text{(fully folded)}.\;}$$

Both are boundary singularities: they occur at $r = L_1+L_2$ and $r = |L_1-L_2|$, the two edges of the annulus.

**Spherical wrist.** With axes 4, 5, 6 and the standard $\alpha$ pattern,

$$\det J_\omega \propto \sin\theta_5,$$

$$\boxed{\;\text{wrist singular} \iff \theta_5 = 0\ \text{or}\ 180°,\;}$$

where axes 4 and 6 are collinear. **Interior singularity**, and the most consequential one on a real robot.

**Elbow and shoulder singularities.** An articulated arm has, in addition:

| Type | Condition | Lost direction |
|---|---|---|
| Elbow | arm fully extended ($\theta_3$ at its stop) | radial from the shoulder |
| Shoulder | wrist centre on the waist axis | tangential (waist has no effect) |
| Wrist | $\theta_5 = 0$ | one rotation |

The shoulder singularity is worth noting because it happens **directly above the base**, which is exactly where an arm mounted over a workcell often needs to reach.

**What actually goes wrong near one.** Not at the singularity — near it, which is worse because the arm still appears to work.

$$\dot{\mathbf{q}} = J^{-1}\dot{\mathbf{x}} \quad\text{scales as}\quad \frac{1}{\sigma_{\min}},$$

so a bounded tool velocity demands joint rates that grow without bound. Actuators saturate, the tool falls behind its path, and the resulting motion is neither the commanded one nor a safe one.

**Remedies.**

| Remedy | Mechanism | Cost |
|---|---|---|
| Damped least squares | bounds $\dot{\mathbf{q}}$ ([2.2](02-02-inverse-kinematics-numerical.md)) | tracking error near the singularity |
| Plan in joint space | never inverts $J$ | tool path is not a straight line |
| Redundancy | null-space motion steers around it | needs an extra joint |
| Path modification | route the Cartesian path around it | may not be possible |
| Task relaxation | give up the unachievable direction | task-dependent |

**Degenerate versus non-degenerate.** At a singularity the *inverse kinematics* also degenerates: multiple solution branches merge into one. That is why the two solutions of [2.1](02-01-inverse-kinematics-analytic.md) coalesce at $\theta_2 = 0$, and why passing through a singularity is how an arm changes branch.

## Picture

![A two-panel figure. Left: a planar two-link arm drawn in three configurations — a well-conditioned pose with the elbow at ninety degrees and a nearly circular manipulability ellipse at the tool, a nearly extended pose with a long thin ellipse whose short axis lies along the arm, and the fully extended singular pose where the ellipse has collapsed to a line segment perpendicular to the arm, with an arrow along the arm crossed out to show the direction the tool cannot move. Right: a plot of the smallest singular value and of the required joint rate against the elbow angle, showing sigma-min going linearly to zero as theta-two approaches zero while the required joint rate for a fixed tool speed rises hyperbolically, with a shaded band marking the region where damping should be engaged.](assets/02-04-fig1.svg)

Left: the manipulability ellipse collapsing. At the singular configuration the tool can still move perpendicular to the arm at full speed; it is only the radial direction that is lost.

Right: the practical picture. $\sigma_{\min}$ falls off linearly but the joint-rate demand rises as its reciprocal, so trouble arrives long before the singularity itself.

## Worked examples

**Example 1 (the planar 2R, both singularities).** $L_1 = L_2 = 1$ m.

$$J = \begin{bmatrix}-L_1s_1-L_2s_{12}&-L_2s_{12}\\L_1c_1+L_2c_{12}&L_2c_{12}\end{bmatrix}, \qquad \det J = L_1L_2\sin\theta_2 = \sin\theta_2.$$

*(a) Fully extended:* $\theta_1 = 30°$, $\theta_2 = 0$.

$$J = \begin{bmatrix}-1.0000&-0.5000\\1.7321&0.8660\end{bmatrix}, \qquad \det J = (-1)(0.866)-(-0.5)(1.7321) = -0.866+0.866 = 0.$$

**The two columns are parallel** — the second is exactly half the first. That is rank 1, visible by inspection.

$$\sigma = (2.236,\ 0), \qquad \operatorname{rank}J = 1.$$

*The lost direction.* The column space is spanned by $(-1, 1.7321)$, normalized $(-0.5,\ 0.866)$ — which is perpendicular to the arm (the arm points along $30°$, i.e. $(0.866, 0.5)$). So the achievable velocities are exactly the **tangential** ones, and the lost direction is

$$\left(\operatorname{col}J\right)^{\perp} = (0.866,\ 0.5) = \text{along the arm}.$$

**The tool cannot move radially.** Physically obvious: the arm is straight and fully extended, so it is at maximum reach and cannot get further out. It can still swing sideways at full speed.

*The null space.* Solving $J\mathbf{n} = 0$ gives

$$\mathbf{n} = (-0.4472,\ 0.8944) \propto (-1,\ 2).$$

**Rotating the shoulder backwards at half the rate the elbow rotates forwards leaves the tool motionless** — to first order. The arm reconfigures without the tool moving, which is exactly the self-motion of a redundant arm, appearing here at a single configuration of a non-redundant one.

*(b) Fully folded:* $\theta_1 = 30°$, $\theta_2 = 180°$.

$$J = \begin{bmatrix}0&0.5000\\0&-0.8660\end{bmatrix}, \qquad \det J = 0, \qquad \sigma = (1,\ 0).$$

**The first column is identically zero.** With the arm folded back on itself, the tool sits exactly at the base, and rotating the shoulder rotates the tool *about the point where it already is* — producing no velocity at all. The null space is $(1, 0)$: joint 1 can spin freely with no effect.

*(c) How the trouble scales.* Manipulability $w = |\sin\theta_2|$:

| $\theta_2$ | $w$ | joint rate for 0.1 m/s radial |
|---|---|---|
| $90°$ | 1.000 | $\sim0.1$ rad/s |
| $60°$ | 0.866 | $\sim0.12$ |
| $30°$ | 0.500 | $\sim0.2$ |
| $15°$ | 0.259 | $\sim0.39$ |
| $5°$ | 0.087 | $\sim1.15$ |
| $1°$ | 0.017 | $\sim5.7$ |
| $0°$ | 0 | $\infty$ |

**The demand grows as $1/\sin\theta_2$**, so it is already ten times worse at $5°$ than at $90°$. There is no sharp threshold — the degradation is continuous, which is why "avoid singularities" has to be implemented as "keep $\sigma_{\min}$ above a bound," not as "avoid one point."

*The design consequence.* Manufacturers specify a usable workspace at roughly 90–95% of geometric reach, and the missing few percent is exactly this. Reaching the last 5% is kinematically possible and practically useless.

**Example 2 (the wrist singularity, and why it matters most).** A spherical wrist has three intersecting axes with $\theta_5$ between axes 4 and 6.

*The angular Jacobian block.* With axis 4 along $\hat z_3$, axis 5 perpendicular to it, and axis 6 along the tool:

$$\det J_\omega \propto \sin\theta_5.$$

Numerically, for a standard wrist:

| $\theta_5$ | $\det J_\omega$ | rank of $J$ |
|---|---|---|
| $30°$ | $-0.500$ | 3 |
| $5°$ | $-0.0872$ | 3 |
| $0°$ | $0.000$ | **2** |

*What is lost.* At $\theta_5 = 0$, axes 4 and 6 are **collinear** — joints 4 and 6 rotate about the identical physical axis. Two motors, one effect. The wrist can still produce rotation about that shared axis and about axis 5, but the third rotational degree of freedom is gone.

*The null space* is $(1, 0, -1)$: rotating joint 4 forwards and joint 6 backwards at the same rate leaves the tool orientation unchanged. The joints move; nothing happens.

*Why this is the worst singularity on a real robot.* Four reasons that compound:

**It is in the interior.** Unlike the elbow singularity, which is at the edge of reach where nobody works, $\theta_5 = 0$ is a perfectly ordinary wrist posture — often the *natural* one for pointing a tool straight ahead.

**A straight-line Cartesian path can drive right through it.** A tool moving along a seam with a slowly changing orientation may pass $\theta_5 = 0$ with no warning in the task-space description at all. The path looks fine; the joint solution explodes.

**The failure is dramatic.** As $\theta_5\to0$, joints 4 and 6 must counter-rotate at rates $\propto1/\sin\theta_5$ to produce a modest tool rotation. Real arms exhibit a visible "wrist flip" — a fast, unplanned $180°$ rotation of joints 4 and 6 as the solver switches branches. It is fast enough to be dangerous and is a well-known cause of collisions in teach-and-repeat programming.

**It cannot be designed away** on a spherical wrist, and the spherical wrist is what makes the closed-form inverse kinematics of [2.1](02-01-inverse-kinematics-analytic.md) possible. **The architecture that makes the arm solvable is the architecture that gives it this singularity** — a genuine and unresolved design trade.

*What is actually done about it.* In roughly the order they are tried:

**Offset wrists.** Some arms deliberately break the exact intersection of the wrist axes, moving the singularity out of the common workspace. The price is that Pieper's condition fails and the closed-form IK is lost — the arm must use numerical IK. Several collaborative arms make exactly this trade.

**Joint-space interpolation through the region.** If the path must cross, plan that segment in joint space: the tool leaves its straight line, but the joint motion is smooth and bounded. This is what most controllers do automatically, usually with a warning.

**Damped least squares.** [2.2](02-02-inverse-kinematics-numerical.md)'s remedy, engaged adaptively when $\sigma_{\min}$ drops below a threshold. The tool lags briefly; nothing lunges.

**Task reorientation.** Rotate the workpiece, or the arm's mounting, so the required tool orientations never approach $\theta_5 = 0$. Crude, entirely effective, and by far the most common fix in industrial practice — a fixture is cheaper than an algorithm.

*A number worth carrying.* If a controller engages damping at $\sigma_{\min}<0.05$ and $\sigma_{\min}\approx\sin\theta_5$ for the wrist block, damping starts at $\theta_5\approx2.9°$. **The arm behaves normally until three degrees from the singularity, then degrades over the last three degrees.** That narrow band is why the failure feels sudden even though the mathematics is smooth.

## Watch out

- **You might use $\det J$ as your detector.** It has units, scales as the product of link lengths, and is undefined for non-square $J$. Use $\sigma_{\min}$.
- **You might think avoiding the exact singularity is enough.** The joint-rate demand is already severe several degrees away. Monitor $\sigma_{\min}$ against a threshold.
- **You might assume singularities are only at the workspace boundary.** Wrist and shoulder singularities are interior, and the interior ones are the dangerous ones.
- **You might plan a straight-line Cartesian path without checking.** Sample $\sigma_{\min}$ along the path before executing it.
- **You might interpret a lost degree of freedom as a stuck joint.** All joints still move freely; it is the *tool* that cannot move in one direction.
- **You might compare linear and angular singular values.** Different units. Scale by a characteristic length before combining.
- **You might expect the arm to stop at a singularity.** It typically does the opposite — it lunges, as the inverse commands enormous rates.
- **You might forget that IK branches merge there.** Crossing a singularity is how an arm changes configuration, which is why an unplanned crossing produces an unplanned reconfiguration.

## One-liner

> A singularity is rank loss in $J$: the tool loses a direction it can move in and gains a joint motion that achieves nothing — boundary ones sit harmlessly at the edge of reach, but interior ones like the $\theta_5 = 0$ wrist sit in the middle of the workspace and make the arm lunge.

## Problems

**P1 (🟢)** A planar 2R arm has $L_1 = 0.6$, $L_2 = 0.4$ m. (a) Write $\det J$. (b) Find all singular configurations. (c) Give the tool's distance from the base at each. (d) State which direction is lost at each.

**P2 (🟡)** For the arm of P1 at $\theta_1 = 40°$, $\theta_2 = 8°$: (a) compute $J$. (b) Compute $\det J$ and the singular values. (c) Compute the joint rates needed for a tool velocity of $0.05$ m/s directly away from the base. (d) Compare with the same request at $\theta_2 = 90°$ and comment.

**P3 (🔴)** A 6R arm is following a straight-line Cartesian path during which $\theta_5$ passes from $+8°$ through $0°$ to $-8°$ over 0.4 s, while the tool is commanded to rotate at $0.2$ rad/s about an axis requiring the lost degree of freedom. (a) Model the wrist block's smallest singular value as $\sigma_{\min} = \sin|\theta_5|$ and tabulate the required joint rate at $\theta_5 = 8°$, $4°$, $2°$, $1°$, $0.5°$. (b) If joint rate limits are 3 rad/s, find the $\theta_5$ at which the arm saturates. (c) Compute what damped least squares with $\lambda = 0.05$ delivers at $\theta_5 = 1°$, in both joint rate and achieved tool rotation. (d) Recommend a strategy for this path, quantify the tool-orientation error it incurs, and explain why the alternative of simply refusing the path is sometimes correct.

<details>
<summary>Solutions</summary>

**P1** (a) $$\det J = L_1L_2\sin\theta_2 = 0.6(0.4)\sin\theta_2 = 0.24\sin\theta_2\ \mathrm{m^2}.$$

(b) $$\det J = 0 \iff \sin\theta_2 = 0 \iff \theta_2 = 0°\ \text{or}\ 180°,$$

for **any** $\theta_1$. The singular set is therefore two circles in the configuration torus, not two points — the arm is singular at full extension regardless of which way it is pointing.

(c) $$\theta_2 = 0°: \quad r = L_1+L_2 = 1.0\ \mathrm{m}\ \text{(outer boundary)},$$
$$\theta_2 = 180°: \quad r = |L_1-L_2| = 0.2\ \mathrm{m}\ \text{(inner boundary)}.$$

(d) **At both, the radial direction is lost.**

At $\theta_2 = 0$ the arm is at maximum reach and cannot extend further; at $\theta_2 = 180°$ it is fully folded and cannot pull in further. In both cases the tool can still move **tangentially** (perpendicular to the arm) at full speed — the loss is one-dimensional, and it is the direction along the arm.

**P2** (a) $$\theta_1 = 40°, \qquad \theta_{12} = 48°.$$

$$s_1 = 0.64279,\ c_1 = 0.76604, \qquad s_{12} = 0.74314,\ c_{12} = 0.66913.$$

$$J = \begin{bmatrix}-0.6(0.64279)-0.4(0.74314) & -0.4(0.74314)\\0.6(0.76604)+0.4(0.66913) & 0.4(0.66913)\end{bmatrix} = \begin{bmatrix}-0.68293&-0.29726\\0.72727&0.26765\end{bmatrix}.$$

(b) $$\det J = (-0.68293)(0.26765)-(-0.29726)(0.72727) = -0.18279+0.21619 = 0.03340\ \mathrm{m^2}.$$

*Check:* $0.24\sin8° = 0.24(0.13917) = 0.03340$ ✓

$$JJ^{\top} = \begin{bmatrix}0.55475&-0.57624\\-0.57624&0.60056\end{bmatrix},$$

with trace $1.15531$ and determinant $0.33314-0.33205 = 0.001116$. The eigenvalues satisfy $\lambda^2-1.15531\lambda+0.001116 = 0$:

$$\lambda = \frac{1.15531\pm\sqrt{1.33474-0.004464}}{2} = \frac{1.15531\pm1.15337}{2} = 1.15434,\ 0.00097.$$

$$\sigma_1 = 1.07441, \qquad \sigma_2 = 0.03109, \qquad \kappa = 34.6.$$

*Check:* $\sigma_1\sigma_2 = 1.07440(0.03114) = 0.03346 \approx |\det J|$ ✓

(c) The tool is at

$$\mathbf{p} = (0.6\cos40°+0.4\cos48°,\ 0.6\sin40°+0.4\sin48°) = (0.45962+0.26765,\ 0.38567+0.29726)$$
$$= (0.72727,\ 0.68293), \qquad r = 0.99738\ \mathrm{m}.$$

(Almost the full 1.0 m reach — the arm is nearly straight, as $\theta_2 = 8°$ implies.)

The radial unit vector is $\hat r = (0.72917,\ 0.68466)$, so

$$\dot{\mathbf{x}} = 0.05\hat r = (0.036459,\ 0.034233)\ \mathrm{m/s}.$$

$$J^{-1} = \frac{1}{0.03340}\begin{bmatrix}0.26765&0.29726\\-0.72727&-0.68293\end{bmatrix}.$$

$$\dot{\mathbf{q}} = \frac{1}{0.03340}\begin{bmatrix}0.26765(0.036459)+0.29726(0.034233)\\-0.72727(0.036459)-0.68293(0.034233)\end{bmatrix} = \frac{1}{0.03340}\begin{bmatrix}0.009758+0.010177\\-0.026516-0.023378\end{bmatrix}$$

$$= \frac{1}{0.03340}\begin{bmatrix}0.019929\\-0.049881\end{bmatrix} = \begin{bmatrix}0.59667\\-1.49344\end{bmatrix}\ \mathrm{rad/s} = (34.2°/\mathrm{s},\ -85.6°/\mathrm{s}).$$

(d) *At $\theta_2 = 90°$*, with the same $\theta_1 = 40°$: $\theta_{12} = 130°$,

$$J = \begin{bmatrix}-0.6(0.64279)-0.4(0.76604)&-0.4(0.76604)\\0.6(0.76604)+0.4(-0.64279)&0.4(-0.64279)\end{bmatrix} = \begin{bmatrix}-0.69209&-0.30642\\0.20251&-0.25712\end{bmatrix},$$

$$\det J = 0.24\sin90° = 0.24\ \mathrm{m^2}.$$

The tool is at $r = \sqrt{0.6^2+0.4^2} = 0.72111$ m, so $\hat r = (0.20251,\ 0.69209)/0.72111 = (0.28084,\ 0.95975)$ and $\dot{\mathbf{x}} = (0.014042,\ 0.047988)$ m/s.

$$\dot{\mathbf{q}} = \frac{1}{0.24}\begin{bmatrix}-0.25712&0.30642\\-0.20251&-0.69209\end{bmatrix}\begin{bmatrix}0.014042\\0.047988\end{bmatrix} = \frac{1}{0.24}\begin{bmatrix}-0.003611+0.014703\\-0.002703-0.033212\end{bmatrix}$$
$$= \frac{1}{0.24}\begin{bmatrix}0.011092\\-0.035915\end{bmatrix} = \begin{bmatrix}0.04623\\-0.15023\end{bmatrix}\ \mathrm{rad/s} = (2.6°/\mathrm{s},\ -8.6°/\mathrm{s}).$$

| | $\theta_2 = 8°$ | $\theta_2 = 90°$ | Ratio |
|---|---|---|---|
| $\det J$ | 0.0334 | 0.2400 | 7.2 |
| $\sigma_{\min}$ | 0.0311 | 0.3149 | 10.1 |
| $\|\dot{\mathbf{q}}\|$ | 1.608 rad/s | 0.157 rad/s | **10.2** |

**Ten times the joint speed for the same tool speed**, purely because the arm is nearly straight. And $8°$ from the singularity does not *look* like an extreme configuration — the arm is at 99.7% of reach, which a casual observer would call "reaching out," not "singular."

*The practical reading.* At $\theta_2 = 8°$ the elbow must run at $86°$/s to move the tool at 5 cm/s. Ask for 50 cm/s — an ordinary industrial speed — and the elbow needs $856°$/s, or 2.4 revolutions per second, which no arm of this size can deliver. **The tool speed limit collapses near the workspace boundary**, which is why robot datasheets quote maximum speed only over a specified inner region.

**P3** (a) The required joint rate for a commanded tool rotation $\omega$ in the weak direction scales as $\omega/\sigma_{\min}$:

| $\theta_5$ | $\sigma_{\min} = \sin\theta_5$ | $\dot q = 0.2/\sigma_{\min}$ (rad/s) |
|---|---|---|
| $8°$ | 0.13917 | 1.437 |
| $4°$ | 0.06976 | 2.867 |
| $2°$ | 0.03490 | 5.731 |
| $1°$ | 0.01745 | 11.46 |
| $0.5°$ | 0.00873 | 22.91 |
| $0°$ | 0 | $\infty$ |

**Doubling the closeness doubles the demand** — the $1/\theta_5$ divergence.

(b) Saturation at $\dot q = 3$ rad/s:

$$\sin\theta_5 = \frac{0.2}{3} = 0.06667 \quad\Longrightarrow\quad \theta_5 = 3.82°.$$

**The arm saturates $3.8°$ before the singularity** and stays saturated through it, emerging saturated $3.8°$ on the other side.

*How long that lasts.* $\theta_5$ sweeps $16°$ in 0.4 s, so $\dot\theta_5 = 40°$/s and the saturated window $|\theta_5|<3.82°$ takes

$$\frac{2(3.82°)}{40°/\mathrm{s}} = 0.191\ \mathrm{s}.$$

**Nearly two-tenths of a second of uncontrolled, saturated motion** in the middle of a commanded path. That is long enough for the tool to travel several centimetres off its intended trajectory.

(c) *Damped least squares at $\theta_5 = 1°$, $\lambda = 0.05$.* The singular-value filter is

$$\frac{\sigma}{\sigma^2+\lambda^2} = \frac{0.01745}{0.000305+0.0025} = \frac{0.01745}{0.002805} = 6.221,$$

against the undamped $1/\sigma = 57.30$.

$$\dot q_{\rm damped} = 6.221(0.2) = 1.244\ \mathrm{rad/s}$$

— comfortably inside the 3 rad/s limit, against 11.46 rad/s undamped. **A factor of 9.2 reduction.**

*Achieved tool rotation:*

$$\omega_{\rm achieved} = \sigma\,\dot q = 0.01745(1.244) = 0.0217\ \mathrm{rad/s},$$

against the commanded 0.2 rad/s.

**Damping delivers 10.9% of the requested rotation while using 11% of the joint rate.** That symmetry is not a coincidence: DLS scales both by the same factor $\sigma^2/(\sigma^2+\lambda^2)$.

(d) *Recommended strategy: switch to joint-space interpolation through the singular region, with DLS as a fallback.*

**The plan.** Detect $\sigma_{\min}<0.1$ (i.e. $|\theta_5|<5.7°$). At that point, freeze the Cartesian tracking, record the joint configuration, compute the joint configuration at the far side of the region (where $\theta_5 = -5.7°$ and the Cartesian path resumes), and interpolate the joints smoothly between them with a quintic in time ([3.4](03-04-joint-space-trajectories.md)).

**Why this beats DLS here.** DLS keeps the joint rates bounded but leaves the tool lagging its command for the whole 0.19 s window, and the lag is *uncontrolled* — it depends on $\lambda$ and on how fast $\theta_5$ happens to sweep. Joint-space interpolation produces a **deterministic, smooth, pre-computed** motion whose deviation from the ideal path is known before execution.

*Quantifying the orientation error.* Over the region $|\theta_5|<5.7°$, the joint-space path cannot reproduce the commanded rotation about the lost axis. The commanded rotation over that window is

$$\Delta\phi = \omega\,\Delta t = 0.2\ \mathrm{rad/s}\times\frac{2(5.7°)}{40°/\mathrm{s}} = 0.2(0.285) = 0.057\ \mathrm{rad} = 3.3°.$$

**About $3.3°$ of orientation error**, accumulated over the crossing and recovered afterwards. Whether that is acceptable is entirely task-dependent: for spray painting it is invisible; for a $\pm0.5°$ assembly insertion it is a failure.

*Comparing the three options, honestly:*

| Strategy | Joint rate | Orientation error | Predictable? |
|---|---|---|---|
| Undamped | 11.5 rad/s (saturates) | large, uncontrolled | no |
| DLS ($\lambda = 0.05$) | 1.2 rad/s | $\sim3°$, varies with speed | partly |
| Joint-space crossing | bounded by design | $3.3°$, known in advance | **yes** |

*Why refusing the path is sometimes correct.* Because **no strategy makes the requested motion possible.** The command asks the tool to rotate about an axis the arm cannot rotate about. Every option above is a way of failing gracefully; none is a way of succeeding.

If the task genuinely requires that orientation profile to within a degree, the honest engineering answer is: **this arm cannot execute this path from this mounting**, and the fix is upstream — reorient the workpiece, move the robot base, change the tool mounting angle, or select an arm with an offset wrist. Silently substituting a $3.3°$-degraded motion for the commanded one produces parts that are out of tolerance for reasons nobody can find later.

**A controller that refuses a path it cannot execute, and says why, is more useful than one that executes something else.** That principle generalizes well beyond singularities, and it is the reason production motion planners run a singularity check over every Cartesian path *before* the arm moves rather than discovering the problem at run time.

</details>

## Flashback

**From Lesson 2.3 (The manipulator Jacobian):** A planar 3R arm with $L = (0.4, 0.3, 0.2)$ m has the $3\times3$ Jacobian built in that lesson. (a) Find a configuration where it is singular. (b) Verify by computing $\det J$. (c) Identify the lost direction.

<details>
<summary>Solution</summary>

(a) For a planar 3R arm, the full $3\times3$ Jacobian (including the $\dot\phi$ row of ones) is singular when the arm is **fully extended or fully folded in the sense that all three links are collinear**.

The simplest case: $\theta_2 = \theta_3 = 0$, all links straight out. Take $\theta_1 = 0$ as well, so the arm lies along the $x$-axis with the tool at $(0.9, 0)$.

(b) All cumulative angles are zero, so $\mathbf{p}_3 = (0.9, 0)$, $\mathbf{p}_1 = (0.4,0)$, $\mathbf{p}_2 = (0.7,0)$:

$$J_1 = \hat k\times(0.9,0) = (0,\ 0.9), \qquad J_2 = \hat k\times(0.5,0) = (0,\ 0.5), \qquad J_3 = \hat k\times(0.2,0) = (0,\ 0.2).$$

$$J = \begin{bmatrix}0&0&0\\0.9&0.5&0.2\\1&1&1\end{bmatrix}.$$

**The entire first row is zero**, so $\det J = 0$ and $\operatorname{rank}J = 2$.

(c) $$\dot x = 0 \quad\text{for every possible }\dot{\mathbf{q}}.$$

**The lost direction is $\dot x$ — motion along the arm.** With all links collinear along $x$, every joint can only produce velocity perpendicular to the arm, so the tool cannot move radially at all. Exactly the 2R boundary singularity of Example 1, extended to three links.

*What is not lost.* The arm retains full control of $\dot y$ and $\dot\phi$: it can still swing the tool sideways and rotate it, and it can do both independently (rows 2 and 3 are independent). **Only one of three degrees of freedom is gone**, which is the general pattern — a singularity removes as many directions as the rank deficiency, usually one.

*The null space.* $\operatorname{rank} = 2$ with $n = 3$ gives a one-dimensional null space. Solving $0.9n_1+0.5n_2+0.2n_3 = 0$ and $n_1+n_2+n_3 = 0$ gives, with $n_3 = 1$,

$$n_1+n_2 = -1, \qquad 0.9n_1+0.5n_2 = -0.2 \ \Longrightarrow\ 0.9n_1+0.5(-1-n_1) = -0.2,$$
$$0.4n_1 = 0.3, \qquad n_1 = 0.75, \qquad n_2 = -1.75.$$

$$\mathbf{n} = (0.75,\ -1.75,\ 1).$$

*Verify:* $0.9(0.75)+0.5(-1.75)+0.2(1) = 0.675-0.875+0.200 = 0$ ✓ and $0.75-1.75+1 = 0$ ✓.

*A useful observation.* This arm was **redundant** for a position-only task in [2.2](02-02-inverse-kinematics-numerical.md) — it had a null space everywhere. Here, with the full $3\times3$ task, it is not redundant, and the null space appears only at the singularity. **Redundancy and singularity produce the same object — a null space — from opposite causes**: one from having more joints than the task needs, the other from a configuration in which some joints stop being useful. The rank–nullity theorem does not distinguish them, and neither does the control law; the difference is that redundancy is a resource available everywhere, while a singular null space is a symptom available only where you do not want to be.

</details>

## Connections

- **Backward:** the Jacobian whose rank is being tested is [2.3](02-03-manipulator-jacobian.md)'s; the damping that manages the resulting ill-conditioning is [2.2](02-02-inverse-kinematics-numerical.md)'s; the merging of IK branches is [2.1](02-01-inverse-kinematics-analytic.md)'s two solutions coalescing.
- **Forward:** [2.5](02-05-statics-jacobian-transpose.md) shows the dual phenomenon — at a singularity the arm can resist infinite force in the lost direction; [3.5](03-05-cartesian-trajectories-via-points.md) must check Cartesian paths for singularity crossings before executing them.
- **Sideways:** rank loss, null spaces and the four fundamental subspaces are [`linalg-refresher` 2.2](../../linalg-refresher/lessons/02-02-inverses-and-four-subspaces.md)'s; the coalescing of solution branches at a singular configuration is a **fold bifurcation** from [`dynamical-systems`](../../dynamical-systems/syllabus.md); and the $1/\sigma_{\min}$ amplification is the condition-number story of [`numerical-analysis`](../../numerical-analysis/syllabus.md), here with a physical rather than a numerical cause.
