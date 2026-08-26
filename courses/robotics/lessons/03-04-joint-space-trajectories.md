# Robotics & Kinematics · Lesson 3.4: Joint-space trajectories

> ⏱ ~15 min · Module 3: Dynamics and trajectory generation · Builds on: [3.2 The manipulator dynamics equation](03-02-manipulator-dynamics-equation.md) · Unlocks: [3.5 Cartesian trajectories and via points](03-05-cartesian-trajectories-via-points.md), [4.2 Computed-torque control](04-02-computed-torque-control.md)

## Why this matters

Inverse kinematics gives you a *pose*. A controller needs a *trajectory* — a position, velocity and acceleration for every joint at every instant. Handing a controller a step change in position and hoping for the best produces enormous torque demands, actuator saturation, overshoot, and mechanical shock.

A [trajectory](../reference.md#trajectory) is a smooth interpolation between configurations that respects the arm's velocity and acceleration limits. It is generated in joint space — one independent polynomial per joint — which makes it cheap, guaranteed feasible, and free of any singularity concern, because no inverse kinematics is involved at run time.

The cost is that the tool follows an unpredictable curve through space. When that matters, [3.5](03-05-cartesian-trajectories-via-points.md) plans in Cartesian space instead and pays for it in the other coin.

## The idea

Take one joint from $\theta_0$ to $\theta_f$ in time $T$. Fit a polynomial that meets the boundary conditions.

**How many conditions, and hence what degree?** Each is one coefficient:

| Conditions | Degree | Continuity |
|---|---|---|
| $\theta(0)$, $\theta(T)$ | 1 (linear) | position only — velocity jumps |
| $+\ \dot\theta(0)$, $\dot\theta(T)$ | 3 (cubic) | velocity continuous, acceleration jumps |
| $+\ \ddot\theta(0)$, $\ddot\theta(T)$ | 5 (quintic) | acceleration continuous, jerk jumps |

**Cubic** is the workhorse: continuous velocity, and the acceleration discontinuity at the endpoints is a step the actuators can absorb.

**Quintic** removes that step too, giving zero acceleration at both ends. It matters when the acceleration jump would excite structural vibration — which on a long, light arm it will.

The alternative to a single polynomial is the **trapezoidal velocity profile** (also called LSPB, linear segment with parabolic blends): accelerate at a constant rate, cruise at constant velocity, decelerate at a constant rate. It is not smooth in acceleration, but it is **time-optimal** subject to velocity and acceleration limits — a bang-bang solution — and that is why it is what almost every industrial controller actually runs.

**The trade in one line:** polynomials are smooth but slow (their peak velocity exceeds the average by 50–88%, so the limits bind well before the whole move is used); trapezoids are fast but jerky.

## The formal version

**Cubic polynomial.** With $\theta(0) = \theta_0$, $\theta(T) = \theta_f$, $\dot\theta(0) = \dot\theta(T) = 0$, and $\Delta = \theta_f-\theta_0$:

$$\boxed{\;\theta(t) = \theta_0+\frac{3\Delta}{T^2}t^2-\frac{2\Delta}{T^3}t^3.\;}$$

$$\dot\theta(t) = \frac{6\Delta}{T^2}t-\frac{6\Delta}{T^3}t^2, \qquad \ddot\theta(t) = \frac{6\Delta}{T^2}-\frac{12\Delta}{T^3}t.$$

$$\boxed{\;\dot\theta_{\max} = \frac{3\Delta}{2T}\ \text{at}\ t = \frac{T}{2}, \qquad \ddot\theta_{\max} = \frac{6\Delta}{T^2}\ \text{at}\ t = 0,T.\;}$$

*In words: the peak velocity is 1.5 times the average, and the peak acceleration occurs at the two endpoints where it jumps discontinuously from zero.*

**With nonzero endpoint velocities** $\dot\theta_0$, $\dot\theta_f$ (needed for via points):

$$a_0 = \theta_0, \quad a_1 = \dot\theta_0, \quad a_2 = \frac{3\Delta}{T^2}-\frac{2\dot\theta_0}{T}-\frac{\dot\theta_f}{T}, \quad a_3 = -\frac{2\Delta}{T^3}+\frac{\dot\theta_0+\dot\theta_f}{T^2}.$$

**Quintic polynomial.** With zero velocity *and* acceleration at both ends:

$$\boxed{\;\theta(t) = \theta_0+\Delta\left[10\left(\frac{t}{T}\right)^3-15\left(\frac{t}{T}\right)^4+6\left(\frac{t}{T}\right)^5\right].\;}$$

$$\boxed{\;\dot\theta_{\max} = \frac{15\Delta}{8T} = \frac{1.875\Delta}{T}, \qquad \ddot\theta_{\max} = \frac{10\Delta}{\sqrt3\,T^2} = \frac{5.7735\Delta}{T^2}.\;}$$

**The quintic's peak velocity is 25% higher than the cubic's** for the same move and time, but its peak acceleration is 4% *lower* and — crucially — continuous.

**Trapezoidal velocity profile (LSPB).** Blend time $t_b$, cruise velocity $v$, acceleration $a$:

$$\boxed{\;v = \frac{\Delta}{T-t_b}, \qquad a = \frac{v}{t_b} = \frac{\Delta}{t_b(T-t_b)}, \qquad t_b\leq\frac{T}{2}.\;}$$

Position, in three phases:

$$\theta(t) = \begin{cases}\theta_0+\tfrac12at^2 & 0\leq t\leq t_b\\ \theta_0+v\left(t-\tfrac{t_b}{2}\right) & t_b\leq t\leq T-t_b\\ \theta_f-\tfrac12a(T-t)^2 & T-t_b\leq t\leq T\end{cases}$$

*The special case $t_b = T/2$* removes the cruise phase entirely, giving a **triangular** profile — the fastest possible move under an acceleration limit alone.

**Comparing peak demands** for the same $\Delta$ and $T$:

| Profile | $\dot\theta_{\max}$ | $\ddot\theta_{\max}$ | Smoothness |
|---|---|---|---|
| Trapezoidal, $t_b = T/3$ | $1.500\Delta/T$ | $4.500\Delta/T^2$ | $\ddot\theta$ discontinuous |
| Cubic | $1.500\Delta/T$ | $6.000\Delta/T^2$ | $\ddot\theta$ discontinuous at ends |
| Quintic | $1.875\Delta/T$ | $5.774\Delta/T^2$ | $\ddot\theta$ continuous |

**The trapezoid dominates the cubic**: same peak velocity, 25% less peak acceleration. That is why it is the industrial default.

**Minimum time under limits.** Given $\dot\theta_{\max}^{\rm lim}$ and $\ddot\theta_{\max}^{\rm lim}$, invert the peak formulas and take the larger:

$$T_{\min} = \max\left(\frac{k_v\Delta}{\dot\theta_{\max}^{\rm lim}},\ \sqrt{\frac{k_a\Delta}{\ddot\theta_{\max}^{\rm lim}}}\right),$$

with $(k_v,k_a) = (1.5,\ 6)$ for a cubic, $(1.875,\ 5.774)$ for a quintic, $(1.5,\ 4.5)$ for a trapezoid with $t_b = T/3$.

**Synchronizing multiple joints.** All joints must start and finish together, or the tool's path becomes erratic. The standard procedure:

1. Compute each joint's $T_{\min}$ independently.
2. Take $T = \max_iT_{\min,i}$.
3. Regenerate **every** joint's profile with that common $T$.

The joint with the largest $T_{\min}$ is the **limiting joint**, and it alone runs at its limits; the rest run below.

**Via points.** For a path through intermediate configurations, fit a cubic to each segment with matched velocities at the interior points. Two common choices for those velocities:

$$\dot\theta_k = \begin{cases}0 & \text{stop at every via point (simple, slow)}\\ \tfrac12\left(\frac{\Delta_k}{T_k}+\frac{\Delta_{k+1}}{T_{k+1}}\right) & \text{average of adjacent segment slopes (smooth, fast)}\end{cases}$$

The second is the **heuristic** used in practice; it keeps the arm moving through the via points and gives $C^1$ continuity.

## Picture

![A two-panel figure. Left: three stacked plots against time for a single joint moving from zero to ninety degrees — position, velocity, and acceleration — with three overlaid curves on each: a cubic shown as a smooth S-curve in position with a parabolic velocity hump and a linearly decreasing acceleration that jumps at both ends, a quintic shown with a slightly steeper S and a velocity hump that starts and ends flatter with acceleration going smoothly to zero at both ends, and a trapezoidal profile shown as a straight-line-with-rounded-ends position, a flat-topped trapezoid velocity, and a rectangular pulse acceleration. Right: a multi-joint synchronization diagram showing three joints with different travel distances, each with its own minimum time bar, and a common time chosen as the maximum, with the two shorter joints' profiles stretched to match and annotated as running below their limits.](assets/03-04-fig1.svg)

Left: the same move, three ways. The trapezoid's velocity plot is the flat-topped one, and its greater area under the same peak is exactly why it is faster.

Right: synchronization. One joint sets the pace; the others are slowed to match, which is why a multi-joint move is never faster than its worst joint.

## Worked examples

**Example 1 (the boss problem, and comparing profiles).** A joint moves from $\theta(0) = 0$ to $\theta(T) = \pi/2$ rad in $T = 2$ s with zero endpoint velocities.

*Cubic coefficients.*

$$\Delta = \frac{\pi}{2} = 1.5708\ \mathrm{rad}, \qquad a_2 = \frac{3(1.5708)}{4} = 1.17810, \qquad a_3 = -\frac{2(1.5708)}{8} = -0.39270.$$

$$\theta(t) = 1.17810\,t^2-0.39270\,t^3.$$

*The trajectory.*

| $t$ (s) | $\theta$ (rad) | $\theta$ (deg) | $\dot\theta$ (rad/s) | $\ddot\theta$ (rad/s²) |
|---|---|---|---|---|
| 0.0 | 0.00000 | 0.00 | 0.00000 | **2.35619** |
| 0.5 | 0.24544 | 14.06 | 0.88357 | 1.17810 |
| 1.0 | 0.78540 | **45.00** | **1.17810** | **0.00000** |
| 1.5 | 1.32536 | 75.94 | 0.88357 | $-1.17810$ |
| 2.0 | 1.57080 | 90.00 | 0.00000 | $-2.35619$ |

**At the midpoint the joint is at exactly $45°$ with zero acceleration** — both boss-problem checks ✓. The first is by symmetry (a cubic with symmetric boundary conditions is antisymmetric about its midpoint); the second because $\ddot\theta$ is linear in $t$ and must average to zero over a move that starts and ends at rest.

*Peak values.*

$$\dot\theta_{\max} = \frac{1.5(1.5708)}{2} = 1.17810\ \mathrm{rad/s}\ \checkmark, \qquad \ddot\theta_{\max} = \frac{6(1.5708)}{4} = 2.35619\ \mathrm{rad/s^2}\ \checkmark$$

*The acceleration discontinuity.* At $t = 0^-$ the joint is at rest with $\ddot\theta = 0$; at $t = 0^+$, $\ddot\theta = 2.356$ rad/s². **A step in acceleration is a step in torque**, and a step in torque excites every structural mode of the arm. On a stiff, short arm this is fine; on a long one it rings.

*The quintic, same move, same time.*

$$\theta(t) = 1.5708\left[10\left(\frac{t}{2}\right)^3-15\left(\frac{t}{2}\right)^4+6\left(\frac{t}{2}\right)^5\right] = 1.96350\,t^3-1.47262\,t^4+0.29452\,t^5.$$

| $t$ (s) | $\theta$ (deg) | $\dot\theta$ | $\ddot\theta$ |
|---|---|---|---|
| 0.0 | 0.00 | 0.00000 | **0.00000** |
| 0.5 | 9.32 | 0.82835 | 2.20893 |
| 1.0 | 45.00 | **1.47262** | 0.00000 |
| 1.5 | 80.68 | 0.82835 | $-2.20893$ |
| 2.0 | 90.00 | 0.00000 | **0.00000** |

**Acceleration is zero at both ends** ✓ — no torque step, no ringing.

*The price.*

| | Cubic | Quintic | Change |
|---|---|---|---|
| $\dot\theta_{\max}$ | 1.178 | 1.473 | **+25%** |
| $\ddot\theta_{\max}$ | 2.356 | 2.267 | $-4$% |
| Position at $t = 0.5$ s | $14.06°$ | $9.32°$ | lags |

The quintic **lags early and catches up late**, because it must ease in from zero acceleration. Its peak velocity is 25% higher to cover the same distance in the same time — so if velocity is the binding limit, the quintic is 25% slower than the cubic for the same move.

*The trapezoid, same move and time, with $t_b = 0.6$ s.*

$$v = \frac{1.5708}{2-0.6} = 1.12200\ \mathrm{rad/s}, \qquad a = \frac{1.12200}{0.6} = 1.87000\ \mathrm{rad/s^2}.$$

$$\text{distance check: } v(T-t_b) = 1.12200(1.4) = 1.5708\ \checkmark$$

**Lower peak velocity *and* lower peak acceleration than either polynomial**, for the same move in the same time. That is the trapezoid's whole argument, and it is why industrial controllers use it.

**Example 2 (choosing the time, and synchronizing three joints).** A three-joint move with limits $\dot\theta^{\rm lim} = 1.5$ rad/s and $\ddot\theta^{\rm lim} = 3.0$ rad/s² for every joint. The travels are $\Delta = (1.5708,\ 0.7854,\ 0.3927)$ rad ($90°$, $45°$, $22.5°$).

*Joint 1, cubic, minimum time.*

$$T_v = \frac{1.5\Delta}{\dot\theta^{\rm lim}} = \frac{1.5(1.5708)}{1.5} = 1.5708\ \mathrm{s},$$
$$T_a = \sqrt{\frac{6\Delta}{\ddot\theta^{\rm lim}}} = \sqrt{\frac{6(1.5708)}{3.0}} = \sqrt{3.1416} = 1.7725\ \mathrm{s}.$$

$$T_{\min,1} = \max(1.5708,\ 1.7725) = 1.7725\ \mathrm{s} \quad\text{(acceleration-limited)}.$$

*Joints 2 and 3*, by the same formulas:

| Joint | $\Delta$ (rad) | $T_v$ (s) | $T_a$ (s) | $T_{\min}$ (s) | Limited by |
|---|---|---|---|---|---|
| 1 | 1.5708 | 1.571 | 1.772 | **1.772** | acceleration |
| 2 | 0.7854 | 0.785 | 1.253 | 1.253 | acceleration |
| 3 | 0.3927 | 0.393 | 0.886 | 0.886 | acceleration |

*Synchronizing.*

$$T = \max_iT_{\min,i} = 1.7725\ \mathrm{s},$$

and **all three joints are regenerated with $T = 1.7725$ s**.

*What each joint then actually demands.*

| Joint | $\dot\theta_{\max}$ | % of limit | $\ddot\theta_{\max}$ | % of limit |
|---|---|---|---|---|
| 1 | 1.329 | 89% | 3.000 | **100%** |
| 2 | 0.665 | 44% | 1.500 | 50% |
| 3 | 0.332 | 22% | 0.750 | 25% |

**Only joint 1 runs at a limit.** Joints 2 and 3 loaf along at a quarter to a half of their capability, because they must wait for joint 1 to finish.

*Why synchronize at all, given that waste?* Because unsynchronized joints produce a tool path that changes direction abruptly each time a joint finishes. With three joints stopping at $0.886$, $1.253$ and $1.772$ s, the tool would trace three distinct path segments with a velocity discontinuity at each junction. **Synchronization buys a smooth path at the cost of speed**, and for anything except a pure point-to-point move with no path requirement, it is worth it.

*Could it be faster?* Yes, and the answer is instructive.

**Switch to a trapezoidal profile.** With $t_b = T/3$, $k_a = 4.5$ instead of 6:

$$T_a = \sqrt{\frac{4.5(1.5708)}{3.0}} = \sqrt{2.3562} = 1.5350\ \mathrm{s}, \qquad T_v = \frac{1.5(1.5708)}{1.5} = 1.5708\ \mathrm{s},$$

$$T_{\min,1} = 1.5708\ \mathrm{s} \quad\text{(now velocity-limited)}.$$

**A 13% faster move**, from the same limits, purely by choosing a better profile shape. And note the regime change: the trapezoid's lower acceleration peak moves the binding constraint from acceleration to velocity, which is the signature of a well-matched profile — **at the true time-optimum, both limits bind**, and here the trapezoid nearly achieves it.

**The genuinely time-optimal profile is bang-bang**: accelerate at $\ddot\theta^{\rm lim}$ until $\dot\theta^{\rm lim}$ is reached, cruise, then decelerate at $-\ddot\theta^{\rm lim}$. That is a trapezoid with $t_b = \dot\theta^{\rm lim}/\ddot\theta^{\rm lim} = 0.5$ s:

$$T = \frac{\Delta}{\dot\theta^{\rm lim}}+t_b = \frac{1.5708}{1.5}+0.5 = 1.0472+0.5 = 1.5472\ \mathrm{s}.$$

**1.547 s against the cubic's 1.772 s — 13% faster**, and provably the fastest possible under these limits. That gap is the price of the cubic's smoothness, and whether it is worth paying depends entirely on whether the arm rings.

## Watch out

- **You might forget to synchronize.** Different finish times give a jerky, unpredictable tool path.
- **You might check only the velocity limit.** For short moves the acceleration limit binds; for long ones the velocity limit does. Check both and take the larger time.
- **You might use a cubic where the acceleration step matters.** On a flexible arm the step excites structural modes. Use a quintic, or an S-curve trapezoid with limited jerk.
- **You might assume the quintic is strictly better.** Its peak velocity is 25% higher, so it is *slower* whenever velocity is the binding limit.
- **You might plan in joint space and expect a straight Cartesian path.** The tool traces a curve, and its shape depends on the arm's geometry. Use [3.5](03-05-cartesian-trajectories-via-points.md) when the path matters.
- **You might set via-point velocities to zero by default.** The arm stops at every one, which is much slower. Use the averaged-slope heuristic unless a stop is required.
- **You might ignore jerk.** $\dddot\theta$ is what a passenger, a payload, or a structural mode actually feels. Aggressive profiles are often jerk-limited in practice rather than acceleration-limited.
- **You might treat the limits as constants.** Maximum acceleration depends on the available torque divided by the *configuration-dependent* inertia $M_{kk}(\mathbf{q})$ from [3.2](03-02-manipulator-dynamics-equation.md), which varies by a factor of three.

## One-liner

> Fit a cubic for velocity continuity, a quintic to kill the acceleration step as well, or a trapezoid for time-optimality — then compute each joint's minimum time under its velocity and acceleration limits, take the maximum, and regenerate every joint with that common time.

## Problems

**P1 (🟢)** A joint moves $60°$ in $1.5$ s with zero endpoint velocities. (a) Find the cubic coefficients. (b) Find the position, velocity and acceleration at $t = 0.75$ s. (c) Find the peak velocity and acceleration and where they occur.

**P2 (🟡)** The same move with a quintic. (a) Write $\theta(t)$. (b) Find $\dot\theta$ and $\ddot\theta$ at $t = 0.75$ s. (c) Find the peaks. (d) Tabulate the cubic and quintic peaks side by side and state when each is preferable.

**P3 (🔴)** A four-joint arm must move $\Delta = (2.0,\ 1.2,\ 0.6,\ 0.3)$ rad with limits $\dot\theta^{\rm lim} = 2.0$ rad/s and $\ddot\theta^{\rm lim} = 4.0$ rad/s² on every joint. (a) Find each joint's minimum time with a cubic and identify the limiting joint. (b) Find the synchronized $T$ and each joint's resulting peak demands as a percentage of its limits. (c) Repeat with a true bang-bang trapezoid and find the time saving. (d) Joint 1's inertia varies by a factor of 2.5 across the move while its motor torque is fixed. Determine how this changes the analysis, and propose a practical way to handle it.

<details>
<summary>Solutions</summary>

**P1** (a) $$\Delta = 60° = 1.04720\ \mathrm{rad}, \qquad T = 1.5\ \mathrm{s}.$$

$$a_2 = \frac{3\Delta}{T^2} = \frac{3(1.04720)}{2.25} = 1.39626, \qquad a_3 = -\frac{2\Delta}{T^3} = -\frac{2(1.04720)}{3.375} = -0.62057.$$

$$\theta(t) = 1.39626\,t^2-0.62057\,t^3.$$

(b) At $t = 0.75$ s (the midpoint):

$$\theta = 1.39626(0.5625)-0.62057(0.421875) = 0.78540-0.26180 = 0.52360\ \mathrm{rad} = 30.00°,$$
$$\dot\theta = 2(1.39626)(0.75)+3(-0.62057)(0.5625) = 2.09439-1.04721 = 1.04718\ \mathrm{rad/s},$$
$$\ddot\theta = 2(1.39626)+6(-0.62057)(0.75) = 2.79252-2.79257 = -0.00005 \approx 0.$$

**Exactly half the travel with zero acceleration at the midpoint** — the symmetry noted in Example 1.

(c) $$\dot\theta_{\max} = \frac{1.5\Delta}{T} = \frac{1.5(1.04720)}{1.5} = 1.04720\ \mathrm{rad/s}\ \text{at}\ t = 0.75\ \mathrm{s}\ \checkmark$$

$$\ddot\theta_{\max} = \frac{6\Delta}{T^2} = \frac{6(1.04720)}{2.25} = 2.79253\ \mathrm{rad/s^2}\ \text{at}\ t = 0\ \text{and}\ t = 1.5\ \mathrm{s}.$$

**P2** (a) $$\theta(t) = 1.04720\left[10\left(\frac{t}{1.5}\right)^3-15\left(\frac{t}{1.5}\right)^4+6\left(\frac{t}{1.5}\right)^5\right]$$
$$= 3.10281\,t^3-3.10281\,t^4+0.82742\,t^5.$$

*Checking the coefficients:* $10\Delta/T^3 = 10(1.04720)/3.375 = 3.10281$ ✓, $-15\Delta/T^4 = -15(1.04720)/5.0625 = -3.10281$ ✓, $6\Delta/T^5 = 6(1.04720)/7.59375 = 0.82742$ ✓.

(b) At $t = 0.75$ s, with $s = t/T = 0.5$:

$$\dot\theta = \frac{\Delta}{T}\left[30s^2-60s^3+30s^4\right] = \frac{1.04720}{1.5}\left[7.5-7.5+1.875\right] = 0.69813(1.875) = 1.30900\ \mathrm{rad/s},$$

$$\ddot\theta = \frac{\Delta}{T^2}\left[60s-180s^2+120s^3\right] = \frac{1.04720}{2.25}\left[30-45+15\right] = 0.46542(0) = 0.$$

(c) $$\dot\theta_{\max} = \frac{1.875\Delta}{T} = \frac{1.875(1.04720)}{1.5} = 1.30900\ \mathrm{rad/s}\ \text{at}\ t = T/2\ \checkmark$$

$$\ddot\theta_{\max} = \frac{5.7735\Delta}{T^2} = \frac{5.7735(1.04720)}{2.25} = 2.68694\ \mathrm{rad/s^2}$$

at $t = T/2\pm T/(2\sqrt3) = 0.75\pm0.433$ s, i.e. $t = 0.317$ s and $t = 1.183$ s.

(d) | | Cubic | Quintic | Change |
|---|---|---|---|
| $\dot\theta_{\max}$ (rad/s) | 1.047 | 1.309 | **+25.0%** |
| $\ddot\theta_{\max}$ (rad/s²) | 2.793 | 2.687 | $-3.8$% |
| $\ddot\theta(0)$ | 2.793 (step) | **0** | continuous |
| $\ddot\theta$ peak location | endpoints | interior | — |

*When the cubic is preferable.*

**When velocity is the binding limit.** The quintic needs 25% more peak velocity, so under a fixed $\dot\theta^{\rm lim}$ it is 25% slower. On a fast arm with generous torque, velocity usually binds, and the cubic wins.

**When the arm is stiff.** The acceleration step is only a problem if there is a lightly damped mode to excite. A short, rigid arm with stiff gearing absorbs it without complaint.

**When computation is tight.** Four coefficients instead of six, evaluated in a tighter loop.

*When the quintic is preferable.*

**When the arm is flexible.** A long, light arm — a gantry, a space manipulator, anything with harmonic drives and a slender link — will ring at its first structural mode when hit with a torque step. The quintic's continuous acceleration removes the excitation entirely.

**When the payload is delicate.** A step in acceleration is a step in the force on whatever is being carried. Handling liquids, glass, or a patient makes the acceleration continuity worth more than the 25% speed.

**When acceleration is the binding limit.** The quintic's peak is 3.8% lower, so it is very slightly *faster* in that regime — a small effect, but it means the quintic is not universally slower.

*The middle option worth knowing:* an **S-curve** trapezoid, which limits jerk rather than eliminating acceleration discontinuities entirely. It gets most of the quintic's smoothness at most of the trapezoid's speed, and it is the default on modern motion controllers.

**P3** (a) Cubic, $k_v = 1.5$, $k_a = 6$:

$$T_v = \frac{1.5\Delta}{2.0}, \qquad T_a = \sqrt{\frac{6\Delta}{4.0}}.$$

| Joint | $\Delta$ (rad) | $T_v$ (s) | $T_a$ (s) | $T_{\min}$ (s) | Limited by |
|---|---|---|---|---|---|
| 1 | 2.0 | 1.500 | 1.732 | **1.732** | acceleration |
| 2 | 1.2 | 0.900 | 1.342 | 1.342 | acceleration |
| 3 | 0.6 | 0.450 | 0.949 | 0.949 | acceleration |
| 4 | 0.3 | 0.225 | 0.671 | 0.671 | acceleration |

**Joint 1 is the limiting joint** at $1.732$ s, and every joint is acceleration-limited (a signature of a cubic, whose $k_a/k_v$ ratio of 4 is high).

(b) $$T = 1.7321\ \mathrm{s}.$$

$$\dot\theta_{\max,i} = \frac{1.5\Delta_i}{T}, \qquad \ddot\theta_{\max,i} = \frac{6\Delta_i}{T^2} = \frac{6\Delta_i}{3.0000}.$$

| Joint | $\dot\theta_{\max}$ | % of 2.0 | $\ddot\theta_{\max}$ | % of 4.0 |
|---|---|---|---|---|
| 1 | 1.732 | 87% | 4.000 | **100%** |
| 2 | 1.039 | 52% | 2.400 | 60% |
| 3 | 0.520 | 26% | 1.200 | 30% |
| 4 | 0.260 | 13% | 0.600 | 15% |

**Joint 4 uses 15% of its acceleration capability** — it travels a seventh as far as joint 1 and must take the same time. That is the cost of synchronization, and it is unavoidable if the path is to be smooth.

(c) *True bang-bang trapezoid.*

$$t_b = \frac{\dot\theta^{\rm lim}}{\ddot\theta^{\rm lim}} = \frac{2.0}{4.0} = 0.5\ \mathrm{s}.$$

Distance covered during the two blends: $\dot\theta^{\rm lim}t_b = 2.0(0.5) = 1.0$ rad. Since joint 1's travel is $2.0>1.0$ rad, a cruise phase exists:

$$T_1 = \frac{\Delta_1}{\dot\theta^{\rm lim}}+t_b = \frac{2.0}{2.0}+0.5 = 1.5\ \mathrm{s}.$$

*Checking the other joints against the triangular threshold* $\Delta_{\rm crit} = \dot\theta^{\rm lim}t_b = 1.0$ rad:

| Joint | $\Delta$ | Profile | $T_{\min}$ |
|---|---|---|---|
| 1 | 2.0 | trapezoid | $2.0/2.0+0.5 = 1.500$ s |
| 2 | 1.2 | trapezoid | $1.2/2.0+0.5 = 1.100$ s |
| 3 | 0.6 | **triangular** | $2\sqrt{0.6/4.0} = 0.775$ s |
| 4 | 0.3 | **triangular** | $2\sqrt{0.3/4.0} = 0.548$ s |

(Joints 3 and 4 never reach the velocity limit, so they use the triangular formula $T = 2\sqrt{\Delta/\ddot\theta^{\rm lim}}$.)

$$T = 1.500\ \mathrm{s}, \qquad \text{saving} = \frac{1.7321-1.5000}{1.7321} = 13.4\%.$$

**A 13.4% faster cycle, from the same motors and the same limits.** On a machine running a two-second cycle continuously, that is roughly 13% more throughput — which is worth a great deal and costs nothing but a different profile generator.

(d) *Why a varying inertia changes the analysis.* The acceleration limit is not a fixed number; it comes from the torque limit divided by the effective inertia:

$$\ddot\theta_{\max}(\mathbf{q}) = \frac{\tau^{\rm lim}-\tau_{\rm gravity}(\mathbf{q})-\tau_{\rm Coriolis}}{M_{11}(\mathbf{q})}.$$

If $M_{11}$ varies by a factor of 2.5 over the move, then so does the available acceleration — **inversely**:

$$\ddot\theta_{\max}^{\rm worst} = \frac{4.0}{2.5} = 1.6\ \mathrm{rad/s^2}\ \text{at the high-inertia end}.$$

*Recomputing joint 1's minimum time with the worst-case limit:*

$$T_a = \sqrt{\frac{6(2.0)}{1.6}} = \sqrt{7.5} = 2.739\ \mathrm{s},$$

against $1.732$ s with the optimistic limit. **A 58% longer move** — the difference between a design that works and one that saturates its motors partway through and falls behind its trajectory.

*Three practical ways to handle it, in increasing order of sophistication:*

**Use the worst case.** Plan with $\ddot\theta_{\max} = 1.6$ rad/s² throughout. Simple, always safe, and needlessly slow over the part of the move where the inertia is low — here, most of it.

**Time-scale a fixed path.** Keep the geometric path and reparameterize time so the acceleration limit is respected pointwise. This is **time-optimal path parameterization (TOPP)**, a well-developed technique: given a path $\mathbf{q}(s)$, solve for the fastest $s(t)$ satisfying the torque bounds at every point. It recovers most of the lost time and is what modern industrial controllers do.

*Roughly quantified here:* if $M_{11}$ is at its maximum over only a quarter of the path, a time-scaled profile might complete the move in $\sim2.0$ s against the worst-case $2.739$ s — recovering about 60% of the loss.

**Plan in the torque domain directly.** Instead of imposing kinematic limits, formulate the trajectory as an optimization subject to $|\boldsymbol\tau(t)|\leq\boldsymbol\tau^{\rm lim}$ with the full dynamics of [3.2](03-02-manipulator-dynamics-equation.md) as a constraint. This is the honest formulation and gives the true optimum, at the cost of solving a nonlinear program offline.

*A fourth option worth naming, because it is often the right one:* **change the path.** If the high-inertia configurations are only visited incidentally, routing the joint-space path to avoid them raises the acceleration limit for free. That is a use of redundancy ([2.2](02-02-inverse-kinematics-numerical.md)) that has nothing to do with obstacles or singularities and everything to do with the dynamics.

*The general lesson.* **Kinematic limits are a convenient fiction.** The real constraint is torque, and torque maps to acceleration through a configuration-dependent inertia. Treating $\ddot\theta^{\rm lim}$ as a constant is a linearization that is safe if you use the worst case and fast if you do not — and the whole field of time-optimal trajectory generation exists to close that gap.

</details>

## Flashback

**From Lesson 3.2 (The manipulator dynamics equation):** A 2R arm has $M_{11}$ varying from $0.66$ to $1.62$ kg·m² across its workspace, and joint 1's motor is limited to $\tau^{\rm lim} = 30$ N·m. Gravity requires up to $23.5$ N·m. (a) Find the acceleration available at each extreme. (b) Comment on trajectory planning.

<details>
<summary>Solution</summary>

(a) The torque available for acceleration is what is left after gravity:

$$\tau_{\rm accel} = \tau^{\rm lim}-\tau_{\rm gravity} = 30-23.5 = 6.5\ \mathrm{N\cdot m}\quad\text{(worst case)}.$$

$$\ddot\theta_{\max}\big|_{M_{11} = 0.66} = \frac{6.5}{0.66} = 9.85\ \mathrm{rad/s^2},$$
$$\ddot\theta_{\max}\big|_{M_{11} = 1.62} = \frac{6.5}{1.62} = 4.01\ \mathrm{rad/s^2}.$$

**A factor of 2.5 between the two extremes** — and both are far below what the raw torque suggests. Ignoring gravity entirely would give $30/1.62 = 18.5$ rad/s², **4.6 times too optimistic** at the worst configuration.

(b) *What this means for planning.*

**Gravity is the dominant constraint, not inertia.** It consumes 78% of the torque budget at the worst configuration, leaving only 22% for acceleration. Any planner that budgets torque without subtracting gravity will command trajectories the arm cannot execute.

**And gravity is configuration-dependent too.** $\tau_{\rm gravity} = 23.5$ N·m is the maximum, occurring when the arm is horizontal; when it is vertical, gravity requires nothing and the full 30 N·m is available for acceleration — giving $30/0.66 = 45.5$ rad/s² at the best configuration.

**So the true acceleration limit spans 4.0 to 45.5 rad/s²**, a factor of **eleven** across the workspace, from two effects that compound: high inertia tends to coincide with the extended configurations where gravity is also largest.

*The planning consequences, in order of practicality:*

**Plan conservatively.** Use $4.0$ rad/s² everywhere. Safe, and roughly eleven times slower than the arm's best capability — an enormous amount of performance to leave unused.

**Compensate gravity in the controller.** A gravity feedforward term ([4.1](04-01-independent-joint-control.md)) removes $\tau_{\rm gravity}$ from the feedback loop's burden, so the full torque budget is available for acceleration. This raises the worst case from $4.0$ to $30/1.62 = 18.5$ rad/s² — **a factor of 4.6 improvement from one term in the control law.**

**Then time-scale for the remaining inertia variation.** With gravity compensated, only the factor of 2.5 in $M_{11}$ remains, and TOPP handles it.

*The order matters.* Gravity compensation is nearly free — it costs one evaluation of $\mathbf{g}(\mathbf{q})$ per cycle — and it buys more than any trajectory-planning refinement. **Fix the control law before optimizing the trajectory**, because a better trajectory inside a worse controller still cannot use the torque that gravity is consuming.

</details>

## Connections

- **Backward:** the acceleration limits come from the torque budget and the configuration-dependent inertia of [3.2](03-02-manipulator-dynamics-equation.md); the configurations being interpolated between come from [2.1](02-01-inverse-kinematics-analytic.md)–[2.2](02-02-inverse-kinematics-numerical.md).
- **Forward:** [3.5](03-05-cartesian-trajectories-via-points.md) plans in task space instead and inherits singularity problems in exchange for a predictable path; [4.2](04-02-computed-torque-control.md) consumes $\mathbf{q}_d$, $\dot{\mathbf{q}}_d$, $\ddot{\mathbf{q}}_d$ from a generator like this one.
- **Sideways:** polynomial interpolation with derivative constraints is Hermite interpolation from [`numerical-analysis`](../../numerical-analysis/syllabus.md); the bang-bang time-optimal profile is the solution of a minimum-time optimal control problem, and its structure — always at a constraint boundary — is Pontryagin's maximum principle in its simplest form, from [`convex-optimization`](../../convex-optimization/syllabus.md)'s wider setting.
