# Robotics & Kinematics · Lesson 3.5: Cartesian trajectories and via points

> ⏱ ~15 min · Module 3: Dynamics and trajectory generation · Builds on: [3.4 Joint-space trajectories](03-04-joint-space-trajectories.md), [2.4 Singularities](02-04-singularities.md), [1.4 Quaternions](01-04-quaternions.md) · Unlocks: [4.3 Force and hybrid control](04-03-force-hybrid-control.md)

## Why this matters

Joint-space trajectories are cheap and always feasible, and the tool follows a curve nobody chose. For a pick-and-place move through empty air that is fine. For welding a seam, laying a bead of adhesive, cutting along a line, or inserting a part along an axis, it is useless — **the path in space is the task**.

[Cartesian trajectories](../reference.md#cartesian-trajectory) specify the tool's motion directly: a straight line, an arc, a spline through waypoints, with the orientation interpolated alongside. The cost is real and threefold. Inverse kinematics must run at the servo rate. The path may leave the workspace, or cross a singularity, or force a configuration change — none of which is visible from the Cartesian description. And joint velocities can blow up even when the tool moves at a modest, constant speed.

Managing those three failure modes is what this lesson is about.

## The idea

Plan the tool's pose as a function of time, then convert to joint commands each cycle.

**Position** interpolates as a vector: for a straight line from $\mathbf{p}_A$ to $\mathbf{p}_B$,

$$\mathbf{p}(t) = \mathbf{p}_A+s(t)\left(\mathbf{p}_B-\mathbf{p}_A\right), \qquad s: [0,T]\to[0,1],$$

with $s(t)$ any of the profiles from [3.4](03-04-joint-space-trajectories.md) — the **path** (geometry) and the **timing** (the scalar $s(t)$) are separated, which is a useful decomposition in its own right.

**Orientation** cannot be interpolated as a vector. Blending rotation matrices entry by entry gives a matrix that is not a rotation; blending Euler angles gives a path that wanders and misbehaves near gimbal lock. **Slerp on quaternions** ([1.4](01-04-quaternions.md)) is the answer: it moves along the shortest arc at constant angular velocity.

**Then, every control cycle:** evaluate $\mathbf{p}(t)$ and $q(t)$, run inverse kinematics, send the joint commands. At 1 kHz that is a thousand IK solves per second — feasible with a closed form ([2.1](02-01-inverse-kinematics-analytic.md)) or a warm-started numerical solver ([2.2](02-02-inverse-kinematics-numerical.md)), and the reason both were worth building.

**The three failure modes**, each of which must be checked *before* the arm moves:

**Unreachable points.** The endpoints may be inside the workspace while the straight line between them passes outside it — a straight chord across an annulus can dip below the inner radius.

**Singularities.** The path may cross a configuration where $J$ loses rank ([2.4](02-04-singularities.md)), and the joint rates diverge.

**Configuration changes.** The IK branch may flip mid-path, requiring a large, fast reconfiguration that the Cartesian description never asked for.

## The formal version

**Straight-line path with a timing profile.**

$$\boxed{\;\mathbf{p}(t) = \mathbf{p}_A+s(t)\left(\mathbf{p}_B-\mathbf{p}_A\right), \qquad \dot{\mathbf{p}}(t) = \dot s(t)\left(\mathbf{p}_B-\mathbf{p}_A\right).\;}$$

$s(t)$ is a cubic, quintic or trapezoid from [3.4](03-04-joint-space-trajectories.md) normalized to run $0\to1$. **Path and timing are independent**, so the same geometric path can be traversed fast or slow, smoothly or aggressively, by changing $s$ alone.

**Orientation by slerp.**

$$\boxed{\;q(t) = \mathrm{slerp}\left(q_A,\ q_B,\ s(t)\right) = \frac{\sin\left((1-s)\Omega\right)}{\sin\Omega}q_A+\frac{\sin(s\Omega)}{\sin\Omega}q_B,\;}$$

with $\cos\Omega = q_A\cdot q_B$ and — mandatory — negate $q_B$ first if that dot product is negative ([1.4](01-04-quaternions.md) P3).

Using the **same** $s(t)$ for position and orientation synchronizes them: the tool arrives at the right place with the right orientation at the same instant.

**Converting to joint commands.** Two routes:

$$\text{position-level: } \mathbf{q}(t) = \mathrm{IK}\left(\mathbf{p}(t),q(t)\right),$$
$$\text{velocity-level: } \dot{\mathbf{q}}(t) = J^{-1}(\mathbf{q})\begin{bmatrix}\dot{\mathbf{p}}\\\boldsymbol\omega\end{bmatrix}.$$

**Use both.** Velocity-level integration drifts; position-level IK has no velocity information. The standard scheme is **resolved-rate control with position feedback**:

$$\dot{\mathbf{q}} = J^{-1}\left(\dot{\mathbf{x}}_d+K\left(\mathbf{x}_d-\mathbf{x}_{\rm actual}\right)\right),$$

which feeds forward the commanded velocity and corrects accumulated error with a proportional term.

**Via points and blends.** A path through waypoints $\mathbf{p}_0,\ldots,\mathbf{p}_n$ has a velocity discontinuity at each corner if the segments are traversed exactly. Two remedies:

| Method | Behaviour | Cost |
|---|---|---|
| Stop at each via point | exact, $C^0$ | slow |
| Parabolic blend | rounds the corner, $C^1$ | misses the via point by a known amount |
| Spline through points | passes through all, $C^2$ | path between points is not straight |

**Blend deviation.** Rounding a corner over a blend time $t_b$ with a velocity change $\Delta\mathbf{v}$ misses the via point by

$$\boxed{\;d = \frac{\|\Delta\mathbf{v}\|\,t_b}{8}\ \ \text{(for a symmetric parabolic blend)},\;}$$

which is the number a programmer trades against speed. Industrial controllers expose it directly as a "corner rounding" or "zone" parameter.

**Pre-execution checks.** Before any Cartesian path is run, sample it and verify:

$$\text{reachability: } r_{\min}\leq\|\mathbf{p}(s)\|\leq r_{\max}\ \ \forall s,$$
$$\text{conditioning: } \sigma_{\min}\left(J(\mathbf{q}(s))\right)>\epsilon\ \ \forall s,$$
$$\text{joint limits: } \mathbf{q}^{\min}\leq\mathbf{q}(s)\leq\mathbf{q}^{\max},$$
$$\text{rates: } \left|\dot{\mathbf{q}}(s)\right|\leq\dot{\mathbf{q}}^{\rm lim}\ \ \text{with the intended timing}.$$

**The last check is the one people forget**, and it is the one that fails. A constant tool speed does *not* imply constant joint speed: $\dot{\mathbf{q}} = J^{-1}\dot{\mathbf{x}}$, and $J^{-1}$ varies enormously along a path.

**Time-scaling.** If the rate check fails, the geometric path is usually fine and only the timing is too aggressive. Slow $s(t)$ down — uniformly, or (better) only where needed:

$$\dot s_{\max}(s) = \min_i\frac{\dot q_i^{\rm lim}}{\left|\left(J^{-1}\mathbf{u}\right)_i\right|}, \qquad \mathbf{u} = \frac{\mathbf{p}_B-\mathbf{p}_A}{\|\mathbf{p}_B-\mathbf{p}_A\|},$$

which is **time-optimal path parameterization** applied to a Cartesian path.

**Choosing joint space or Cartesian space.**

| | Joint space | Cartesian space |
|---|---|---|
| Tool path | unpredictable curve | exactly as specified |
| Cost per cycle | polynomial evaluation | full IK |
| Singularities | none | must be checked |
| Reachability | guaranteed (endpoints checked) | must be checked along the path |
| Joint limits | easy to enforce | must be checked |
| Speed | faster | slower |
| Use for | free-space moves | contact, seams, insertions |

**Most real programs mix the two**: joint space for the approach and retract, Cartesian for the working segment.

## Picture

![A two-panel figure. Left: a planar two-link arm with two configurations marked at the endpoints of a move, showing two paths between them — a straight dashed line labelled Cartesian, and a curved solid line labelled joint-space interpolation that bulges away from the straight line, with the maximum deviation marked by a double-headed arrow. Right: a via-point path through four waypoints drawn with sharp corners as a dotted polyline and with rounded corners as a solid blended path, with one corner enlarged in an inset showing the blend region, the blend time, and the deviation distance from the via point, annotated with the formula relating them.](assets/03-05-fig1.svg)

Left: the difference the choice makes. Joint-space interpolation between the same two configurations produces a bulge whose size depends entirely on the arm's geometry.

Right: via-point blending. Rounding the corner buys $C^1$ continuity and speed, and the price is a known miss distance at the via point.

## Worked examples

**Example 1 (a straight line, and what the joints have to do).** A planar 2R arm with $L_1 = 0.5$, $L_2 = 0.4$ m moves the tool in a straight line from $\mathbf{p}_A = (0.2,\ 0.6)$ m to $\mathbf{p}_B = (0.8,\ 0.2)$ m in $T = 2$ s, elbow-down throughout.

*Reachability check.* The annulus runs from $0.1$ to $0.9$ m:

$$\|\mathbf{p}_A\| = 0.6325, \qquad \|\mathbf{p}_B\| = 0.8246, \qquad \left\|\tfrac12(\mathbf{p}_A+\mathbf{p}_B)\right\| = 0.6403\ \mathrm{m}.$$

All inside ✓ — and note that the **midpoint is closer to the base than either endpoint**, because a chord across an annulus dips inward. Here that is harmless; on a path with endpoints near the inner radius it is exactly how a "both endpoints are fine" path leaves the workspace.

*The joint trajectory.*

| $s$ | $\mathbf{p}$ (m) | $\theta_1$ | $\theta_2$ | $\det J$ | $\sigma_{\min}$ |
|---|---|---|---|---|---|
| 0.00 | $(0.20,\ 0.60)$ | $32.35°$ | $91.43°$ | 0.1999 | 0.290 |
| 0.25 | $(0.35,\ 0.50)$ | $14.28°$ | $95.38°$ | 0.1991 | 0.299 |
| 0.50 | $(0.50,\ 0.40)$ | $0.00°$ | $90.00°$ | 0.2000 | 0.286 |
| 0.75 | $(0.65,\ 0.30)$ | $-7.91°$ | $75.15°$ | 0.1933 | 0.247 |
| 1.00 | $(0.80,\ 0.20)$ | $-6.93°$ | $47.55°$ | 0.1476 | 0.164 |

*Two things to read off this table.*

**The joint path is not monotonic.** $\theta_1$ falls from $32.4°$ to $-7.9°$ and then rises to $-6.9°$; $\theta_2$ rises from $91.4°$ to $95.4°$ before falling to $47.6°$. **A straight line in Cartesian space is a curve with reversals in joint space** — which is exactly why joint-space interpolation cannot reproduce it.

**Conditioning degrades toward the end.** $\sigma_{\min}$ falls from $0.29$ to $0.16$, and $\det J$ from $0.20$ to $0.15$, as the arm extends toward $\mathbf{p}_B$. Nothing is singular, but the joint-rate demand rises steadily.

*Joint rates with a cubic timing profile.* The tool speed peaks at $s = 0.5$:

$$\left\|\dot{\mathbf{p}}\right\|_{\max} = \frac{1.5\|\mathbf{p}_B-\mathbf{p}_A\|}{T} = \frac{1.5(0.7211)}{2} = 0.541\ \mathrm{m/s}.$$

Sampling $\dot{\mathbf{q}} = J^{-1}\dot{\mathbf{p}}$ along the whole path gives

$$\left\|\dot{\mathbf{q}}\right\|_{\max} = 0.826\ \mathrm{rad/s},$$

occurring **not** at $s = 0.5$ where the tool is fastest, but nearer $s = 0.7$ where the conditioning has begun to degrade while the tool is still moving quickly.

**That mismatch is the point.** The peak joint rate is set by the product of tool speed and $\|J^{-1}\|$, and those two peak at different places. Checking joint rates only at the fastest point of the tool's motion misses the true maximum — which is why the check must sample the whole path.

*Comparison with joint-space interpolation.* Interpolating linearly between $\mathbf{q}_A = (32.35°,\ 91.43°)$ and $\mathbf{q}_B = (-6.93°,\ 47.55°)$ and evaluating the forward kinematics gives a path whose **maximum deviation from the straight line is $0.112$ m**.

**Eleven centimetres off** a $0.72$ m move — 16% of the path length. For a free-space transfer that is irrelevant. For a weld seam it is a scrapped part, and for an insertion it is a crash.

**Example 2 (via points, blending, and the checks that matter).** A tool must visit $\mathbf{p}_0 = (0.6,\ 0.1)$, $\mathbf{p}_1 = (0.6,\ 0.5)$, $\mathbf{p}_2 = (0.2,\ 0.5)$ m — a right-angled corner at $\mathbf{p}_1$.

*Without blending.* Traverse each segment at $0.4$ m/s. At $\mathbf{p}_1$ the velocity changes from $(0,\ +0.4)$ to $(-0.4,\ 0)$ m/s:

$$\Delta\mathbf{v} = (-0.4,\ -0.4)\ \mathrm{m/s}, \qquad \|\Delta\mathbf{v}\| = 0.566\ \mathrm{m/s}.$$

**An instantaneous velocity change means infinite acceleration** — impossible, so the controller either stops at the corner or overshoots it uncontrollably.

*Stopping at the via point.* Decelerating to rest and accelerating away at $2$ m/s² costs

$$2\times\frac{0.4}{2.0} = 0.4\ \mathrm{s}$$

of extra time, per corner. On a path with twenty via points that is eight seconds, which on a cycle-time-critical machine is unacceptable.

*Parabolic blend.* Choose a blend time $t_b = 0.2$ s. The tool rounds the corner with constant acceleration

$$\mathbf{a} = \frac{\Delta\mathbf{v}}{t_b} = \frac{(-0.4,\ -0.4)}{0.2} = (-2.0,\ -2.0)\ \mathrm{m/s^2}, \qquad \|\mathbf{a}\| = 2.83\ \mathrm{m/s^2},$$

and misses the via point by

$$d = \frac{\|\Delta\mathbf{v}\|t_b}{8} = \frac{0.566(0.2)}{8} = 0.0141\ \mathrm{m} = 14.1\ \mathrm{mm}.$$

**No time lost, 14 mm of corner cut.**

*The trade, tabulated.*

| $t_b$ (s) | $\|\mathbf{a}\|$ (m/s²) | Miss distance | Time cost |
|---|---|---|---|
| 0 (stop) | — | 0 | 0.40 s |
| 0.05 | 11.3 | 3.5 mm | 0 |
| 0.10 | 5.7 | 7.1 mm | 0 |
| 0.20 | 2.8 | 14.1 mm | 0 |
| 0.40 | 1.4 | 28.3 mm | 0 |

**Halving the blend time halves the miss and doubles the acceleration**, since $d\propto t_b$ and $a\propto1/t_b$. There is no free lunch, and the acceleration limit sets the smallest achievable miss:

$$t_b^{\min} = \frac{\|\Delta\mathbf{v}\|}{a^{\rm lim}} \quad\Longrightarrow\quad d^{\min} = \frac{\|\Delta\mathbf{v}\|^2}{8a^{\rm lim}}.$$

At $a^{\rm lim} = 5$ m/s², $d^{\min} = 0.566^2/40 = 8.0$ mm.

*How this appears in practice.* Every industrial robot language exposes this as a **zone** or **corner-rounding** parameter — ABB's `z10` means "round this corner within 10 mm," KUKA's `C_DIS` the same. A programmer writes `z0` (fine point, stop exactly) at points that matter and `z50` at points that do not, and the controller computes $t_b$ from the geometry. **The parameter a programmer thinks of as "precision" is really a time-versus-acceleration trade**, and this formula is the conversion.

*The checks, run before executing.*

**Reachability.** With $L_1+L_2 = 0.9$ m, the farthest point on the path is $\mathbf{p}_0$ at $\|\mathbf{p}_0\| = 0.608$ m ✓, and the closest approach on segment 2 is at $\mathbf{p}_2$, $\|\mathbf{p}_2\| = 0.539$ m ✓. Both comfortably inside.

**Conditioning.** Sampling $\sigma_{\min}$ along both segments gives a minimum around $0.22$ — well away from singular ✓.

**Joint rates.** The tool moves at $0.4$ m/s and $\|J^{-1}\|\approx1/0.22 = 4.5$ s/m in the worst case, so

$$\left\|\dot{\mathbf{q}}\right\|_{\max}\lesssim0.4(4.5) = 1.8\ \mathrm{rad/s}.$$

Against a typical limit of $2$–$3$ rad/s, feasible ✓ — but with only 30% margin, which is worth knowing before the arm moves rather than after.

*A caution the checks do not cover.* All of them are **necessary and not sufficient**. They sample the path at discrete points, and a narrow singular region between samples can be missed. Production planners sample finely (every few millimetres) and additionally check the *analytic* singularity conditions where they are known — for this arm, $\theta_2 = 0$ or $180°$, which is a scalar test that no sampling can miss.

## Watch out

- **You might check only the endpoints for reachability.** A straight chord dips inward across an annulus; both ends can be reachable while the middle is not.
- **You might interpolate rotation matrices or Euler angles.** Matrix blending gives non-rotations; Euler blending wanders and fails near gimbal lock. Use slerp.
- **You might forget the quaternion sign check.** $q_A\cdot q_B<0$ makes slerp take the long way round ([1.4](01-04-quaternions.md) P3).
- **You might assume constant tool speed means constant joint speed.** $\dot{\mathbf{q}} = J^{-1}\dot{\mathbf{x}}$, and $J^{-1}$ varies along any path.
- **You might check joint rates only at the tool's fastest point.** Example 1's peak joint rate was elsewhere.
- **You might let the IK branch flip mid-path.** Seed each solve with the previous solution, and verify continuity.
- **You might drive a Cartesian path through a singularity.** Sample $\sigma_{\min}$ before executing ([2.4](02-04-singularities.md)).
- **You might use a Cartesian path where a joint-space one would do.** It costs an IK solve per cycle and can fail in ways joint space cannot. Use it only where the path matters.
- **You might forget that blending misses the via point.** If a waypoint is a hole to insert into, it must be a fine point.

## One-liner

> Interpolate position linearly and orientation by slerp, both driven by the same timing profile, then run IK every cycle — and check reachability, conditioning, joint limits and joint *rates* along the whole path first, because a straight line for the tool is a curve with reversals for the joints.

## Problems

**P1 (🟢)** A planar 2R arm with $L_1 = 0.4$, $L_2 = 0.3$ m moves in a straight line from $(0.5,\ 0.2)$ to $(0.3,\ 0.4)$ m. (a) Check both endpoints for reachability. (b) Check the midpoint. (c) Find the path length and the peak tool speed with a cubic profile over $T = 1.5$ s.

**P2 (🟡)** A tool follows a path with a corner where the velocity changes from $(0.5,\ 0)$ to $(0,\ 0.5)$ m/s. (a) Find $\Delta\mathbf{v}$. (b) Find the blend acceleration and the miss distance for $t_b = 0.1$ s. (c) Find the $t_b$ that keeps the miss under 5 mm and the resulting acceleration. (d) If the acceleration limit is $8$ m/s², find the minimum achievable miss.

**P3 (🔴)** A tool must move in a straight line from $(0.7,\ 0.1)$ to $(0.1,\ 0.7)$ m with a 2R arm of $L_1 = L_2 = 0.5$ m, in $T = 2$ s with a cubic profile, elbow-down. (a) Check reachability at both ends and at the midpoint. (b) Find the closest approach of the straight line to the base and state whether the path stays in the workspace. (c) Identify where along the path the conditioning is worst and explain why. (d) Estimate the peak joint rate, compare with a $2$ rad/s limit, and propose two fixes if it fails.

<details>
<summary>Solutions</summary>

**P1** (a) $$\|(0.5,\ 0.2)\| = \sqrt{0.25+0.04} = \sqrt{0.29} = 0.5385\ \mathrm{m},$$
$$\|(0.3,\ 0.4)\| = \sqrt{0.09+0.16} = \sqrt{0.25} = 0.5000\ \mathrm{m}.$$

Annulus: $|0.4-0.3| = 0.1$ to $0.4+0.3 = 0.7$ m. Both inside ✓

(b) $$\mathbf{p}_{\rm mid} = (0.4,\ 0.3), \qquad \|\mathbf{p}_{\rm mid}\| = \sqrt{0.16+0.09} = 0.5000\ \mathrm{m}\ \checkmark$$

(c) $$\|\mathbf{p}_B-\mathbf{p}_A\| = \|(-0.2,\ 0.2)\| = 0.2828\ \mathrm{m}.$$

$$\left\|\dot{\mathbf{p}}\right\|_{\max} = \frac{1.5(0.2828)}{1.5} = 0.2828\ \mathrm{m/s} \quad\text{at }t = 0.75\ \mathrm{s}.$$

**P2** (a) $$\Delta\mathbf{v} = (0,\ 0.5)-(0.5,\ 0) = (-0.5,\ 0.5)\ \mathrm{m/s}, \qquad \|\Delta\mathbf{v}\| = 0.5\sqrt2 = 0.7071\ \mathrm{m/s}.$$

(A $90°$ turn at constant speed changes the velocity by $\sqrt2$ times the speed — worth remembering.)

(b) $$\|\mathbf{a}\| = \frac{\|\Delta\mathbf{v}\|}{t_b} = \frac{0.7071}{0.1} = 7.071\ \mathrm{m/s^2},$$

$$d = \frac{\|\Delta\mathbf{v}\|t_b}{8} = \frac{0.7071(0.1)}{8} = 0.00884\ \mathrm{m} = 8.84\ \mathrm{mm}.$$

(c) $$d\leq0.005 \quad\Longrightarrow\quad t_b\leq\frac{8(0.005)}{0.7071} = 0.0566\ \mathrm{s},$$

$$\|\mathbf{a}\| = \frac{0.7071}{0.0566} = 12.50\ \mathrm{m/s^2}.$$

**Halving the miss from 8.8 to 5 mm requires 77% more acceleration** — the inverse relationship, and it is why tight corner tolerances are expensive in actuator terms.

(d) $$t_b^{\min} = \frac{\|\Delta\mathbf{v}\|}{a^{\rm lim}} = \frac{0.7071}{8} = 0.0884\ \mathrm{s},$$

$$d^{\min} = \frac{\|\Delta\mathbf{v}\|t_b^{\min}}{8} = \frac{\|\Delta\mathbf{v}\|^2}{8a^{\rm lim}} = \frac{0.5}{64} = 0.00781\ \mathrm{m} = 7.81\ \mathrm{mm}.$$

**The 5 mm target of part (c) is not achievable** at this speed with an $8$ m/s² limit — the arm cannot turn that sharply.

*The two ways out.* Slow down before the corner (the miss scales as $\|\Delta\mathbf{v}\|^2$, so halving the speed **quarters** the miss to $1.95$ mm), or stop at the via point and accept the time penalty. **Reducing speed is quadratically effective**, which makes it the usual choice: a controller that automatically slows into tight corners can hold a tolerance a constant-speed one cannot.

**P3** (a) $$\|(0.7,\ 0.1)\| = \sqrt{0.49+0.01} = \sqrt{0.50} = 0.7071\ \mathrm{m},$$
$$\|(0.1,\ 0.7)\| = 0.7071\ \mathrm{m},$$
$$\mathbf{p}_{\rm mid} = (0.4,\ 0.4), \qquad \|\mathbf{p}_{\rm mid}\| = \sqrt{0.32} = 0.5657\ \mathrm{m}.$$

Annulus: $0$ to $1.0$ m (equal links, so the inner radius is zero). All inside ✓

(b) The straight line runs from $(0.7, 0.1)$ to $(0.1, 0.7)$, along the direction $(-0.6,\ 0.6)/0.8485 = (-0.7071,\ 0.7071)$. The closest approach of a line to the origin is the perpendicular distance:

$$d = \frac{\left|x_Ay_B-y_Ax_B\right|}{\|\mathbf{p}_B-\mathbf{p}_A\|} = \frac{|0.7(0.7)-0.1(0.1)|}{0.8485} = \frac{|0.49-0.01|}{0.8485} = \frac{0.48}{0.8485} = 0.5657\ \mathrm{m},$$

which is the midpoint, as symmetry requires.

$$0<0.5657<1.0 \quad\Longrightarrow\quad \textbf{the path stays in the workspace} \ \checkmark$$

*The general check worth having.* For equal links the inner radius is zero, so only the outer bound matters — and since the endpoints are at $0.707$ m and a chord's farthest point is an endpoint, the check is automatic. **With unequal links the inner radius is positive and the midpoint check is essential**, because the chord's closest point to the base is where it can drop below $|L_1-L_2|$.

(c) *Where the conditioning is worst.* For a 2R arm, $\det J = L_1L_2\sin\theta_2$, and

$$\cos\theta_2 = \frac{r^2-L_1^2-L_2^2}{2L_1L_2} = \frac{r^2-0.5}{0.5} = 2r^2-1.$$

| Point | $r$ (m) | $\cos\theta_2$ | $\theta_2$ | $\vert\sin\theta_2\vert$ |
|---|---|---|---|---|
| Endpoints | 0.7071 | 0.000 | $90.0°$ | **1.000** |
| Midpoint | 0.5657 | $-0.360$ | $111.1°$ | 0.933 |

**The conditioning is *best* at the endpoints and worst at the midpoint** — the opposite of the usual expectation.

*Why.* Manipulability $|\det J| = L_1L_2|\sin\theta_2|$ is maximal at $\theta_2 = 90°$, which for equal links means $r = \sqrt{L_1^2+L_2^2} = 0.7071$ m — **exactly the endpoint radius**. The path starts and ends at the arm's single best-conditioned radius and dips inward from it.

$$|\det J|_{\rm end} = 0.25(1.000) = 0.2500, \qquad |\det J|_{\rm mid} = 0.25(0.933) = 0.2333.$$

**Only a 7% variation** — this is an unusually well-conditioned path, and deliberately so: it was constructed to run along a circle of near-constant radius near the optimum.

*The contrast worth drawing.* Example 1's path ran *outward*, from $r = 0.63$ to $r = 0.82$ m on an arm whose optimal radius was $\sqrt{0.25+0.16} = 0.64$ m — so it started near the optimum and degraded steadily, ending 26% worse. **Paths that move radially degrade; paths that move tangentially do not.** That is a useful heuristic when laying out a workcell: put the work where the arm is well-conditioned, and orient the motion tangentially where possible.

(d) *Peak joint rate.*

$$\left\|\dot{\mathbf{p}}\right\|_{\max} = \frac{1.5\|\mathbf{p}_B-\mathbf{p}_A\|}{T} = \frac{1.5(0.8485)}{2} = 0.636\ \mathrm{m/s}.$$

The joint rate is bounded by

$$\left\|\dot{\mathbf{q}}\right\|\leq\frac{\left\|\dot{\mathbf{p}}\right\|}{\sigma_{\min}(J)}.$$

For this arm at $\theta_2 = 111°$, the singular values satisfy $\sigma_1\sigma_2 = |\det J| = 0.2333$ and $\sigma_1^2+\sigma_2^2 = \|J\|_F^2$. Estimating $\sigma_1\approx0.85$ (roughly the reach) gives $\sigma_2\approx0.27$, so

$$\left\|\dot{\mathbf{q}}\right\|_{\max}\approx\frac{0.636}{0.27} = 2.35\ \mathrm{rad/s}.$$

**Against a $2$ rad/s limit, this fails** — by about 18%.

*Two fixes.*

**Fix 1: slow the timing.** The geometric path is fine; only $s(t)$ is too aggressive. Scaling the time by the overage factor:

$$T_{\rm new} = T\times\frac{2.35}{2.00} = 2\times1.175 = 2.35\ \mathrm{s}.$$

**A 0.35 s penalty**, and nothing else changes — same path, same accuracy, same configuration. This is the standard first response and it always works, because joint rate is linear in $\dot s$.

*A refinement worth $0.2$ s:* time-scale **non-uniformly**, slowing only where the conditioning is poor. Here the worst conditioning is confined to the middle of the path, so the ends can run at full speed. TOPP does this automatically, and typically recovers half to two-thirds of the uniform penalty — perhaps $T_{\rm new}\approx2.15$ s.

**Fix 2: use a quintic instead of a cubic, and accept a longer time — or use a trapezoid and get a shorter one.** The cubic's peak velocity is 1.5 times the average; a trapezoid with $t_b = T/3$ has the same 1.5 factor but lower acceleration, while a **triangular** profile has a factor of 2 (worse). The real gain here is a **trapezoid with a long cruise phase**: with $t_b = T/6$, the peak velocity factor drops to $1.2$, giving

$$\left\|\dot{\mathbf{q}}\right\|_{\max}\approx2.35\times\frac{1.2}{1.5} = 1.88\ \mathrm{rad/s}\ \checkmark$$

**within the limit at the original 2 s**, at the cost of a higher acceleration during the blends. Whether that is acceptable depends on the torque budget of [3.2](03-02-manipulator-dynamics-equation.md) — which is the recurring pattern: **a velocity problem and an acceleration problem trade against each other, and the profile shape is the knob.**

*A third fix, mentioned for completeness.* Move the path. If the task permits shifting the line outward to $r\approx0.707$ m throughout — an arc rather than a chord — the conditioning stays at its optimum and the peak joint rate drops by 7%. Small here, but on a path that ranges more widely in radius it can be decisive, and it costs nothing but a different path specification.

</details>

## Flashback

**From Lesson 1.4 (Quaternions):** A tool must rotate from $q_A = (1,0,0,0)$ to $q_B = (0.7071,\ 0,\ 0.7071,\ 0)$ over a 1 s Cartesian move with a cubic timing profile. (a) Find $\Omega$. (b) Give the orientation at $t = 0.5$ s. (c) Explain why the same $s(t)$ is used for position and orientation.

<details>
<summary>Solution</summary>

(a) $$q_A\cdot q_B = 1(0.7071)+0+0+0 = 0.7071>0,$$

so no sign flip is needed, and

$$\Omega = \arccos(0.7071) = 45°.$$

(The physical rotation is $2\times45° = 90°$ about $\hat y$ — the half-angle again.)

(b) The cubic profile at the midpoint gives $s(0.5) = 0.5$ (a cubic with symmetric boundary conditions is exactly half-way at half-time), so

$$q(0.5\ \mathrm{s}) = \mathrm{slerp}(q_A,q_B,0.5) = \frac{\sin(22.5°)}{\sin45°}\left(q_A+q_B\right) = \frac{0.3827}{0.7071}(1.7071,\ 0,\ 0.7071,\ 0)$$
$$= 0.5412(1.7071,\ 0,\ 0.7071,\ 0) = (0.9239,\ 0,\ 0.3827,\ 0).$$

*Reading it as axis–angle:* $\theta = 2\arccos(0.9239) = 2(22.5°) = 45°$ about $\hat y$ — **exactly half the total $90°$ rotation**, as it should be at half-way ✓.

(c) *Why one $s(t)$ for both.*

**Synchronization.** The tool must arrive at the target position and the target orientation **at the same instant**. Using a common $s$ guarantees that by construction, with no coordination logic at all.

**Proportional progress.** At any moment the tool is the same fraction of the way through its translation as through its rotation. If separate profiles were used, the tool might reach its final orientation while still half-way along the line, then translate the rest of the way without rotating — a motion no operator asked for and one that can sweep the tool through an obstacle.

**One set of limit checks.** Slowing $s(t)$ slows both the linear and the angular motion together. With separate profiles, respecting an angular-velocity limit would require re-synchronizing the linear one, and the bookkeeping compounds with every added constraint.

**It makes the path reparameterizable.** Because the geometry (the straight line, the great-circle arc) is separate from the timing, the same path can be traversed faster or slower by changing $s$ alone — which is exactly what the time-scaling fix in P3 does, and it works on the orientation for free.

*The one case for separate profiles.* When the linear and angular motions have genuinely different constraints — a long translation with a small reorientation, where forcing them to share a profile makes the rotation absurdly slow. The usual handling is still one profile, chosen as the **more restrictive** of the two independently computed ones, so that both limits are respected and synchronization is preserved. That is exactly the multi-joint synchronization logic of [3.4](03-04-joint-space-trajectories.md), applied to two task-space quantities instead of $n$ joints.

</details>

## Connections

- **Backward:** the timing profiles are [3.4](03-04-joint-space-trajectories.md)'s; slerp is [1.4](01-04-quaternions.md)'s; the inverse kinematics run each cycle is [2.1](02-01-inverse-kinematics-analytic.md)'s or [2.2](02-02-inverse-kinematics-numerical.md)'s; the conditioning check is [2.4](02-04-singularities.md)'s.
- **Forward:** [4.3](04-03-force-hybrid-control.md) modifies a Cartesian path in the directions where contact force, not position, is regulated.
- **Sideways:** separating a path's geometry from its time parameterization is the same reparameterization idea as arc-length parameterization in [`differential-geometry`](../../differential-geometry/syllabus.md); slerp is a geodesic on the unit sphere $S^3$, and the "shortest path at constant speed" property is exactly what makes a geodesic a geodesic.
