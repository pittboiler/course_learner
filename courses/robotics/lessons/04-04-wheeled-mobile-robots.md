# Robotics & Kinematics · Lesson 4.4: Wheeled mobile robots

> ⏱ ~15 min · Module 4: Control and mobile robots · Builds on: [1.5 Homogeneous transforms](01-05-homogeneous-transforms.md), [1.1 Robots, links, and configuration space](01-01-robots-links-configuration-space.md) · Unlocks: [4.5 Localization](04-05-localization.md), [4.6 Motion planning](04-06-motion-planning.md)

## Why this matters

Everything so far has been a manipulator bolted to the floor. A mobile robot moves its own base, and that changes the problem in one specific and consequential way: **a wheeled robot cannot move sideways.**

That single constraint is **nonholonomic** — it restricts velocities without restricting positions — and it has no analogue in manipulator kinematics. A differential-drive robot can reach any $(x, y, \phi)$ in an open plane, so its configuration space is fully three-dimensional, but it has only two controls and cannot move instantaneously in one of the three directions.

Everyone knows what that feels like: it is why parallel parking requires a manoeuvre rather than a translation. Understanding *why* a reachable pose can require a non-trivial path is the point of this lesson, and it changes what planning and control mean.

## The idea

Consider a wheel rolling without slipping. Its contact point moves only along the wheel's heading. Sideways motion would require the tyre to slide, which the friction cone forbids at ordinary speeds.

For a robot with heading $\phi$ at $(x,y)$, that is

$$\dot x\sin\phi-\dot y\cos\phi = 0,$$

a constraint on **velocities**. It cannot be integrated into a constraint on positions — hence **nonholonomic** — and the consequence is exactly the counterintuitive one:

**The robot can reach any pose but cannot move in any direction.** The constraint removes one of three instantaneous directions while removing none of the reachable set.

The mechanism is that the two available motions **do not commute**. Driving forward then turning lands somewhere different from turning then driving forward, and the difference — the Lie bracket of the two motion fields — points sideways. **Sideways motion is available as a second-order effect of combining the two first-order ones**, which is precisely what a parallel-parking manoeuvre exploits.

**The unicycle model** is the standard abstraction: a robot with a forward speed $v$ and a turn rate $\omega$, and no sideways motion at all. Differential drive, car-like steering, and tracked vehicles all reduce to it, with different maps from actuators to $(v,\omega)$.

**Differential drive** is the commonest realization: two independently driven wheels on a common axle, plus a caster for balance. The average of the wheel speeds is the forward speed; their difference is the turn rate.

## The formal version

**The unicycle model.**

$$\boxed{\;\dot x = v\cos\phi, \qquad \dot y = v\sin\phi, \qquad \dot\phi = \omega.\;}$$

Two controls $(v,\omega)$, three states $(x,y,\phi)$ — an **underactuated** system, and the deficit is where the difficulty lives.

**The nonholonomic constraint.**

$$\boxed{\;\dot x\sin\phi-\dot y\cos\phi = 0.\;}$$

*In words: the velocity component perpendicular to the heading is zero.*

**Why it is nonholonomic.** A constraint $a(\mathbf{q})\dot{\mathbf{q}} = 0$ is **holonomic** (integrable) if it can be written as $\frac{d}{dt}h(\mathbf{q}) = 0$, reducing the reachable configuration space. Here the one-form $\sin\phi\,dx-\cos\phi\,dy$ has

$$d\left(\sin\phi\,dx-\cos\phi\,dy\right) = \cos\phi\,d\phi\wedge dx+\sin\phi\,d\phi\wedge dy \neq0,$$

so it is not exact and no integrating factor exists. **The constraint restricts velocities without restricting reachable configurations.**

**Chow's theorem and controllability.** The two control vector fields

$$\mathbf{g}_1 = \begin{bmatrix}\cos\phi\\\sin\phi\\0\end{bmatrix}\ \text{(drive)}, \qquad \mathbf{g}_2 = \begin{bmatrix}0\\0\\1\end{bmatrix}\ \text{(turn)}$$

have Lie bracket

$$\left[\mathbf{g}_1,\mathbf{g}_2\right] = \frac{\partial\mathbf{g}_2}{\partial\mathbf{q}}\mathbf{g}_1-\frac{\partial\mathbf{g}_1}{\partial\mathbf{q}}\mathbf{g}_2 = \begin{bmatrix}\sin\phi\\-\cos\phi\\0\end{bmatrix},$$

which is **exactly the sideways direction**. Since $\{\mathbf{g}_1,\mathbf{g}_2,[\mathbf{g}_1,\mathbf{g}_2]\}$ spans $\mathbb{R}^3$, the system is **completely controllable**: any pose is reachable from any other.

*In words: the manoeuvre that produces sideways motion is drive–turn–drive-back–turn-back, and the bracket is the net displacement it leaves.* That is a parallel-parking manoeuvre, derived.

**Differential drive.** Wheel radius $r$, wheel separation $L$, wheel angular speeds $\dot\varphi_R$, $\dot\varphi_L$:

$$\boxed{\;v = \frac{r\left(\dot\varphi_R+\dot\varphi_L\right)}{2}, \qquad \omega = \frac{r\left(\dot\varphi_R-\dot\varphi_L\right)}{L}.\;}$$

**Inverse** (given a desired $v$, $\omega$, find the wheel speeds):

$$\boxed{\;\dot\varphi_R = \frac{2v+\omega L}{2r}, \qquad \dot\varphi_L = \frac{2v-\omega L}{2r}.\;}$$

**Instantaneous centre of rotation (ICR).** The robot moves on a circular arc of radius

$$\boxed{\;R = \frac{v}{\omega},\;}$$

centred on the wheel axle extended. Special cases: $\omega = 0$ gives $R = \infty$ (straight); $v = 0$ gives $R = 0$ (spin in place); $\dot\varphi_R = -\dot\varphi_L$ gives a pure spin.

**Exact integration over one arc.** With constant $v$ and $\omega$ over an interval $\Delta t$:

$$\boxed{\;\phi' = \phi+\omega\Delta t, \qquad x' = x+\frac{v}{\omega}\left[\sin\phi'-\sin\phi\right], \qquad y' = y-\frac{v}{\omega}\left[\cos\phi'-\cos\phi\right].\;}$$

For $\omega\to0$ this degenerates; use $x' = x+v\Delta t\cos\phi$ and $y' = y+v\Delta t\sin\phi$, and switch on $|\omega|<\epsilon$.

**Other wheeled architectures.**

| Type | Controls | Nonholonomic? | Note |
|---|---|---|---|
| Differential drive | 2 wheel speeds | yes | spins in place |
| Car-like (Ackermann) | speed + steering angle | yes | minimum turning radius |
| Tricycle | drive + steer on one wheel | yes | simple, less stable |
| Omnidirectional (mecanum, omni) | 3–4 wheel speeds | **no** | moves sideways; holonomic |
| Tracked | 2 track speeds | yes (approximately) | slip makes odometry poor |

**Omnidirectional robots are holonomic**, which makes control trivially easy and everything else — efficiency, payload, floor tolerance, cost — worse. The nonholonomic constraint is the price of ordinary wheels.

**Why control is harder than it looks.** Brockett's theorem says a nonholonomic system **cannot be stabilized to a point by any smooth time-invariant state feedback.** No matter how clever, $\mathbf{u} = \mathbf{k}(\mathbf{q})$ with $\mathbf{k}$ smooth cannot drive $(x,y,\phi)$ to zero.

The workarounds:

| Approach | Idea |
|---|---|
| Time-varying feedback | let $\mathbf{k}$ depend on $t$ as well |
| Discontinuous feedback | switch between control laws |
| Trajectory tracking | track a moving reference instead of a fixed point — **and this one is easy** |

**Tracking a trajectory is easy; regulating to a point is hard.** That asymmetry is peculiar to nonholonomic systems and is why practical mobile-robot controllers always follow paths rather than servo to poses.

## Picture

![A two-panel figure. Left: a differential-drive robot drawn from above with two wheels on a common axle, the wheel separation L marked, and the instantaneous centre of rotation marked on the axle extended at distance R from the robot centre, with the arc the robot follows drawn through it, plus a crossed-out sideways arrow at the robot centre indicating the forbidden direction of motion. Right: a parallel-parking sequence in four frames showing a robot moving sideways by a combination of forward-and-turn then backward-and-counter-turn motions, with the net sideways displacement marked and annotated as the Lie bracket of the two control fields.](assets/04-04-fig1.svg)

Left: the ICR construction. Every instantaneous motion is a rotation about some point on the axle line, and the wheel speeds decide where.

Right: how a robot moves in the direction it cannot move in. The net displacement of the four-move cycle is perpendicular to the heading, and it is second-order in the manoeuvre size — which is why parallel parking takes several attempts in a tight space.

## Worked examples

**Example 1 (the boss problem, and the resulting motion).** A differential-drive robot has $r = 0.05$ m, $L = 0.3$ m, with $\dot\varphi_R = 10$ rad/s and $\dot\varphi_L = 8$ rad/s.

*Body velocities.*

$$v = \frac{r\left(\dot\varphi_R+\dot\varphi_L\right)}{2} = \frac{0.05(18)}{2} = \frac{0.9}{2} = 0.450\ \mathrm{m/s},$$

$$\omega = \frac{r\left(\dot\varphi_R-\dot\varphi_L\right)}{L} = \frac{0.05(2)}{0.3} = \frac{0.1}{0.3} = 0.3333\ \mathrm{rad/s} = 19.1°/\mathrm{s}.$$

**Both boss values** ✓.

*The turning radius.*

$$R = \frac{v}{\omega} = \frac{0.450}{0.3333} = 1.350\ \mathrm{m}.$$

The robot arcs to the **left** (the right wheel is faster), on a circle of radius 1.35 m centred 1.35 m to the left of the robot's centre, on the axle line.

*Where it goes in 3 seconds.* Using the exact arc formulas from $(0,0,0)$:

$$\phi' = 0+0.3333(3) = 1.000\ \mathrm{rad} = 57.30°,$$
$$x' = \frac{0.450}{0.3333}\left[\sin(1.000)-\sin(0)\right] = 1.350(0.84147) = 1.1360\ \mathrm{m},$$
$$y' = -1.350\left[\cos(1.000)-\cos(0)\right] = -1.350(0.54030-1) = -1.350(-0.45970) = 0.6206\ \mathrm{m}.$$

*Verifying by numerical integration* of $\dot x = v\cos\phi$, $\dot y = v\sin\phi$, $\dot\phi = \omega$ with $\Delta t = 10^{-4}$ s gives $(1.1360,\ 0.6206,\ 1.0000)$ ✓ — exact agreement, because the motion really is a circular arc.

*A check on the arc length.* $v\,\Delta t = 0.45(3) = 1.35$ m of path, on a circle of radius $1.35$ m, sweeping $1.35/1.35 = 1.000$ rad ✓ — the heading change equals the arc length divided by the radius, as it must.

*The nonholonomic constraint, verified.* At $t = 3$ s, $\phi = 1.000$ rad, and the velocity is

$$\dot{\mathbf{p}} = (0.45\cos1.000,\ 0.45\sin1.000) = (0.2431,\ 0.3787),$$

$$\dot x\sin\phi-\dot y\cos\phi = 0.2431(0.84147)-0.3787(0.54030) = 0.20456-0.20461 = -0.00005\approx0\ \checkmark$$

**The velocity is always along the heading**, at every instant, which is the constraint stated as an identity rather than a restriction.

*The inverse problem.* To achieve $v = 0.5$ m/s and $\omega = 0.4$ rad/s:

$$\dot\varphi_R = \frac{2(0.5)+0.4(0.3)}{2(0.05)} = \frac{1.0+0.12}{0.1} = 11.20\ \mathrm{rad/s},$$
$$\dot\varphi_L = \frac{2(0.5)-0.12}{0.1} = \frac{0.88}{0.1} = 8.80\ \mathrm{rad/s}.$$

*Checking:* $v = 0.05(20)/2 = 0.5$ ✓, $\omega = 0.05(2.4)/0.3 = 0.4$ ✓.

**Example 2 (moving sideways, and why it takes a manoeuvre).** The robot at $(0,0,0)$ must translate $0.2$ m in $+y$ with no net heading change — a pure sideways move, which the constraint forbids instantaneously.

*The manoeuvre.* Execute four segments, each of duration $\Delta t$:

1. Drive forward at $v$, no turn.
2. Turn at $\omega$, no drive.
3. Drive backward at $-v$, no turn.
4. Turn at $-\omega$, no drive.

Each segment individually respects the constraint; the *net* effect does not return to the start.

*The net displacement.* For small $\epsilon = v\Delta t$ and $\delta = \omega\Delta t$, the cycle leaves

$$\Delta\mathbf{q} \approx \epsilon\delta\left[\mathbf{g}_1,\mathbf{g}_2\right] = \epsilon\delta\begin{bmatrix}\sin\phi\\-\cos\phi\\0\end{bmatrix},$$

which at $\phi = 0$ is $(0,\ -\epsilon\delta,\ 0)$ — **purely sideways, with zero net heading change** ✓.

*Sizing it.* To achieve $\Delta y = -0.2$ m (or $+0.2$ by reversing the turn directions):

$$\epsilon\delta = 0.2 \quad\Longrightarrow\quad \text{e.g. } \epsilon = 1.0\ \mathrm{m}\ \text{of driving and }\delta = 0.2\ \mathrm{rad}\ (11.5°)\ \text{of turning}.$$

**One metre of driving to move twenty centimetres sideways** — and that is with a comfortable metre of room. In a tight space, halving $\epsilon$ to $0.5$ m requires doubling $\delta$ to $0.4$ rad, and the manoeuvre becomes visibly a three-point turn.

*The quadratic penalty.* The sideways displacement is $\epsilon\delta$ — **second order** in the manoeuvre size. To move sideways by $d$ using segments of size $\epsilon$, the required turn is $\delta = d/\epsilon$, and if $\epsilon$ is small the turn must be large — eventually exceeding what fits.

**This is exactly the parallel-parking experience:** a large space makes it one smooth motion, a tight space makes it many small shuffles, and below a threshold it is impossible without a smaller car.

*And it is why the constraint matters for planning.* A holonomic planner that finds a path in $(x,y,\phi)$ and hands it to a differential-drive robot will produce paths the robot cannot follow — because the planner allowed sideways segments the constraint forbids. **Nonholonomic planning must generate paths from feasible motion primitives** (arcs and straight lines, or Reeds–Shepp/Dubins curves), which is a genuinely different problem and one that [4.6](04-06-motion-planning.md) has to accommodate.

*One more consequence, on the control side.* Brockett's theorem says no smooth time-invariant feedback stabilizes this robot to a point. The intuition is now available: near the target, the sideways error can only be corrected by a manoeuvre whose size is second-order, so any smooth feedback that shrinks with the error shrinks *too fast* to close the sideways gap.

**The practical response is never to ask for point stabilization.** Command a *trajectory* — a moving reference the robot follows — and the tracking problem is a straightforward feedback design. Almost every mobile robot in the world is controlled this way, and the last few centimetres of docking are handled by a special-cased manoeuvre rather than by the general controller.

## Watch out

- **You might treat the robot as holonomic.** It cannot move sideways, and a planner or controller that assumes it can will generate infeasible commands.
- **You might confuse nonholonomic with non-controllable.** A differential-drive robot can reach every pose; it just cannot move in every direction at every instant.
- **You might use the arc formulas at $\omega = 0$.** They divide by $\omega$. Switch to the straight-line update below a threshold.
- **You might integrate with a naive Euler step.** $x\mathrel{+}= v\cos\phi\,\Delta t$ accumulates error on curved paths. Use the exact arc update, or at least a midpoint heading.
- **You might trust the wheel-speed model on a tracked vehicle.** Tracks slip when turning, and the effective $L$ is not the physical track separation.
- **You might attempt point stabilization with smooth feedback.** Brockett's theorem forbids it. Track a trajectory instead.
- **You might assume an omnidirectional robot has no downsides.** Mecanum wheels lose efficiency to sideways slip, tolerate floor debris poorly, and carry less.
- **You might forget the minimum turning radius on a car-like robot.** Differential drive can spin in place; Ackermann steering cannot, and its plans need Reeds–Shepp curves.

## One-liner

> A wheel that rolls without slipping cannot move sideways, which is a nonholonomic constraint: the robot reaches every pose but not in every direction, sideways motion is available only as the Lie bracket of driving and turning, and no smooth feedback can stabilize it to a point.

## Problems

**P1 (🟢)** A differential-drive robot has $r = 0.04$ m and $L = 0.25$ m, with $\dot\varphi_R = 12$ rad/s and $\dot\varphi_L = 6$ rad/s. (a) Find $v$ and $\omega$. (b) Find the turning radius. (c) State which way it turns and why.

**P2 (🟡)** The same robot must follow a circular arc of radius $2.0$ m at $0.6$ m/s. (a) Find the required $\omega$. (b) Find the wheel speeds. (c) Find the pose after 4 s starting from $(0,0,0)$. (d) Verify the nonholonomic constraint at that pose.

**P3 (🔴)** A differential-drive robot with $r = 0.05$ m, $L = 0.3$ m, and a wheel-speed limit of $15$ rad/s must dock: move from $(0,\ 0,\ 0)$ to $(0,\ 0.15,\ 0)$ — pure sideways, $15$ cm. (a) Explain why no single arc achieves this. (b) Design a four-segment manoeuvre and size it. (c) Find the time it takes at the speed limit. (d) Compare with an omnidirectional robot, quantify the difference, and state when each architecture is the right choice.

<details>
<summary>Solutions</summary>

**P1** (a) $$v = \frac{r\left(\dot\varphi_R+\dot\varphi_L\right)}{2} = \frac{0.04(18)}{2} = \frac{0.72}{2} = 0.360\ \mathrm{m/s},$$

$$\omega = \frac{r\left(\dot\varphi_R-\dot\varphi_L\right)}{L} = \frac{0.04(6)}{0.25} = \frac{0.24}{0.25} = 0.960\ \mathrm{rad/s} = 55.0°/\mathrm{s}.$$

(b) $$R = \frac{v}{\omega} = \frac{0.360}{0.960} = 0.375\ \mathrm{m}.$$

(c) **It turns left** (counterclockwise, positive $\omega$).

*Why.* The right wheel runs at $12$ rad/s against the left's $6$, so the right side travels further per unit time and the robot pivots toward the slower side. The ICR sits $0.375$ m to the **left** of the robot's centre, on the axle line — which is only $0.375-0.125 = 0.25$ m outside the left wheel, so this is a tight turn.

**P2** (a) $$\omega = \frac{v}{R} = \frac{0.6}{2.0} = 0.300\ \mathrm{rad/s}.$$

(b) $$\dot\varphi_R = \frac{2v+\omega L}{2r} = \frac{2(0.6)+0.3(0.25)}{2(0.04)} = \frac{1.2+0.075}{0.08} = \frac{1.275}{0.08} = 15.94\ \mathrm{rad/s},$$

$$\dot\varphi_L = \frac{2(0.6)-0.075}{0.08} = \frac{1.125}{0.08} = 14.06\ \mathrm{rad/s}.$$

*Check:* $v = 0.04(30)/2 = 0.600$ ✓, $\omega = 0.04(1.88)/0.25 = 0.300$ ✓.

**Note how close the two wheel speeds are** — a $6.7\%$ difference produces a 2 m radius turn. Gentle turns require precise differential wheel control, and a 1% speed error between the wheels would change the radius by roughly 15%, which is the root of the odometry problem in [4.5](04-05-localization.md).

(c) $$\phi' = 0+0.300(4) = 1.200\ \mathrm{rad} = 68.75°,$$

$$x' = R\left[\sin\phi'-\sin\phi\right] = 2.0\left[\sin(1.2)-0\right] = 2.0(0.93204) = 1.8641\ \mathrm{m},$$

$$y' = -R\left[\cos\phi'-\cos\phi\right] = -2.0\left[0.36236-1\right] = -2.0(-0.63764) = 1.2753\ \mathrm{m}.$$

$$\left(x',\ y',\ \phi'\right) = (1.864,\ 1.275,\ 1.200\ \mathrm{rad}).$$

*Sanity check:* the distance from the ICR at $(0,\ 2.0)$ is

$$\sqrt{1.8641^2+(1.2753-2.0)^2} = \sqrt{3.4749+0.5252} = \sqrt{4.0001} = 2.0000\ \mathrm{m}\ \checkmark$$

— exactly the turning radius, as it must be on a circular arc.

(d) $$\dot x = v\cos\phi' = 0.6(0.36236) = 0.21742, \qquad \dot y = v\sin\phi' = 0.6(0.93204) = 0.55922.$$

$$\dot x\sin\phi'-\dot y\cos\phi' = 0.21742(0.93204)-0.55922(0.36236) = 0.20264-0.20264 = 0\ \checkmark$$

**P3** (a) *Why no single arc works.* A constant-$(v,\omega)$ motion is a circular arc, and an arc from $(0,0,0)$ has two properties: its initial velocity is along $+x$ (the heading), and the heading changes monotonically along it.

To end at $(0,\ 0.15,\ 0)$ with $\phi = 0$, the arc would have to return to the same heading — requiring $\omega\Delta t = 2\pi k$, a whole number of full turns — which returns the robot to its **starting position**, not to a displaced one. And $\omega = 0$ gives a straight line along $+x$, which never reaches $y = 0.15$.

$$\boxed{\text{No single arc connects two poses with the same heading and different lateral position.}}$$

*This is the constraint made concrete*, and it is why the reachable set from a single control action is a two-dimensional surface in the three-dimensional configuration space.

(b) *A four-segment manoeuvre.* Using the Lie-bracket structure, with $\Delta y = \epsilon\delta$ and the sign chosen for $+y$:

1. **Turn left** by $\delta$ (spin in place).
2. **Drive forward** $\epsilon$.
3. **Turn right** by $\delta$ (back to $\phi = 0$).
4. **Drive backward** $\epsilon\cos\delta$ to cancel the $x$ displacement.

*Exact geometry.* After steps 1–3 the robot is at

$$\left(\epsilon\cos\delta,\ \epsilon\sin\delta,\ 0\right),$$

and step 4 removes the $x$ component exactly, leaving

$$\left(0,\ \epsilon\sin\delta,\ 0\right).$$

$$\epsilon\sin\delta = 0.15.$$

*Sizing it.* Choose $\delta = 30°$ (a comfortable turn), so $\sin\delta = 0.5$ and

$$\epsilon = \frac{0.15}{0.5} = 0.300\ \mathrm{m}.$$

**Manoeuvre:** turn left $30°$, drive $0.300$ m, turn right $30°$, drive back $0.300\cos30° = 0.260$ m.

*Total path length:* $0.300+0.260 = 0.560$ m of driving, plus $60°$ of turning.

(c) *Time at the wheel-speed limit* $\dot\varphi_{\max} = 15$ rad/s.

*Driving segments* (both wheels at the limit, $\omega = 0$):

$$v_{\max} = \frac{r(15+15)}{2} = \frac{0.05(30)}{2} = 0.750\ \mathrm{m/s},$$
$$t_{\rm drive} = \frac{0.560}{0.750} = 0.747\ \mathrm{s}.$$

*Turning segments* (wheels opposed, $v = 0$):

$$\omega_{\max} = \frac{r(15-(-15))}{L} = \frac{0.05(30)}{0.3} = 5.00\ \mathrm{rad/s},$$
$$t_{\rm turn} = \frac{2(30°)}{5.00\ \mathrm{rad/s}} = \frac{1.0472\ \mathrm{rad}}{5.00} = 0.209\ \mathrm{s}.$$

$$\boxed{t_{\rm total} = 0.747+0.209 = 0.956\ \mathrm{s}}$$

(ignoring acceleration ramps, which would add perhaps 50%).

(d) *An omnidirectional robot* moves sideways directly:

$$t = \frac{0.15}{0.750} = 0.200\ \mathrm{s},$$

taking the same $0.75$ m/s top speed.

| | Differential drive | Omnidirectional | Ratio |
|---|---|---|---|
| Path length | 0.560 m | 0.150 m | **3.7×** |
| Time | 0.956 s | 0.200 s | **4.8×** |
| Segments | 4 | 1 | — |
| Space required | $\sim0.3$ m ahead | none | — |

**Nearly five times slower, and it needs 30 cm of clearance in front** that the omnidirectional robot does not.

*And the penalty worsens for shorter moves.* To move $1.5$ cm sideways with the same $\delta = 30°$ requires $\epsilon = 3$ cm — but the *turning* time is unchanged at $0.209$ s, so it now dominates. **The overhead is nearly constant while the useful displacement shrinks**, and fine lateral adjustment becomes extremely inefficient. That is why docking a differential-drive robot to a charging contact is done with a funnel or a mechanical guide rather than by precise lateral positioning.

*When each architecture is right.*

**Differential drive** wins on almost everything except lateral agility:

**Efficiency.** Ordinary wheels roll; mecanum wheels slide constantly, wasting 20–40% of the drive energy in friction.

**Payload and robustness.** A conventional wheel carries load through a simple bearing; mecanum rollers are small, numerous, and fail.

**Floor tolerance.** Omnidirectional wheels need smooth, clean, hard floors. Debris, carpet, thresholds and gaps defeat them.

**Cost and simplicity.** Two motors against three or four, with far simpler wheels.

**Odometry.** Slip in omnidirectional wheels makes dead reckoning much worse ([4.5](04-05-localization.md)).

**Omnidirectional** wins where lateral motion is frequent and the environment cooperates:

**Confined spaces.** A warehouse robot working in a narrow aisle, or a hospital robot in a corridor, may have no room for a manoeuvre.

**Precise docking and alignment.** Anything that must repeatedly align laterally with a fixture.

**Holonomic planning.** The planner can be a straightforward one over $(x,y,\phi)$ with no motion primitives — a real simplification.

*The market's answer, which is worth noting.* **Almost all mobile robots are differential drive**, including virtually every warehouse AGV, delivery robot and domestic vacuum. Omnidirectional platforms are a minority, concentrated in indoor logistics on prepared floors and in research.

**The nonholonomic constraint is a real cost, and it is one the field overwhelmingly chooses to pay** — because the manoeuvring penalty applies only to lateral motion, which most tasks rarely need, while the efficiency and robustness penalties of the alternative apply all the time.

</details>

## Flashback

**From Lesson 1.5 (Homogeneous transforms):** A mobile robot at $(2,\ 1)$ with heading $45°$ carries a sensor mounted $0.3$ m forward and $0.1$ m left of its centre. (a) Write $^W_RT$ and $^R_ST$. (b) Find the sensor's world pose. (c) The robot drives forward $0.5$ m; find the new sensor pose.

<details>
<summary>Solution</summary>

(a) $$^W_RT = \begin{bmatrix}\cos45°&-\sin45°&2\\\sin45°&\cos45°&1\\0&0&1\end{bmatrix} = \begin{bmatrix}0.7071&-0.7071&2\\0.7071&0.7071&1\\0&0&1\end{bmatrix},$$

$$^R_ST = \begin{bmatrix}1&0&0.3\\0&1&0.1\\0&0&1\end{bmatrix}$$

(using $2\times2$ planar homogeneous transforms; the sensor is not rotated relative to the robot).

(b) $$^W_ST = {}^W_RT\,{}^R_ST.$$

*Rotation block:* unchanged at $R_z(45°)$.

*Translation:*

$$^W\mathbf{p}_S = {}^W_RR\begin{bmatrix}0.3\\0.1\end{bmatrix}+\begin{bmatrix}2\\1\end{bmatrix} = \begin{bmatrix}0.7071(0.3)-0.7071(0.1)\\0.7071(0.3)+0.7071(0.1)\end{bmatrix}+\begin{bmatrix}2\\1\end{bmatrix}$$
$$= \begin{bmatrix}0.2121-0.0707\\0.2121+0.0707\end{bmatrix}+\begin{bmatrix}2\\1\end{bmatrix} = \begin{bmatrix}0.1414\\0.2828\end{bmatrix}+\begin{bmatrix}2\\1\end{bmatrix} = \begin{bmatrix}2.1414\\1.2828\end{bmatrix}.$$

**Sensor at $(2.141,\ 1.283)$, heading $45°$.**

(c) Driving forward $0.5$ m is a translation in the **robot's own frame**, so it post-multiplies:

$$^W_RT_{\rm new} = {}^W_RT\cdot\mathrm{Trans}(0.5,\ 0).$$

$$^W\mathbf{p}_R^{\rm new} = \begin{bmatrix}2\\1\end{bmatrix}+0.5\begin{bmatrix}0.7071\\0.7071\end{bmatrix} = \begin{bmatrix}2.3536\\1.3536\end{bmatrix},$$

heading unchanged at $45°$.

The sensor, being rigidly attached, translates by the same amount:

$$^W\mathbf{p}_S^{\rm new} = (2.1414+0.3536,\ 1.2828+0.3536) = (2.4950,\ 1.6364),$$

heading $45°$.

*Why the frame chain matters here.* This is exactly [1.5](01-05-homogeneous-transforms.md) P3's mobile-manipulator problem, and the same structural point applies: **updating one transform moved everything mounted on the robot automatically.** A mobile robot with a manipulator, a camera, a lidar and a bumper has one $^W_RT$ and a fixed transform for each sensor; the odometry updates the first, and every sensor's world pose follows.

*And the connection to this lesson.* The forward drive was a post-multiplication because it is expressed in the body frame — which is exactly the nonholonomic constraint in transform language. **The robot can only post-multiply by $\mathrm{Trans}(d, 0)$ and $\mathrm{Rot}(\delta)$**, never by $\mathrm{Trans}(0, d)$. The set of poses reachable by products of the two allowed primitives is everything ([Chow's theorem](#the-formal-version)), but no single primitive moves it sideways.

</details>

## Connections

- **Backward:** the pose transforms are [1.5](01-05-homogeneous-transforms.md)'s; the configuration-space and degree-of-freedom vocabulary is [1.1](01-01-robots-links-configuration-space.md)'s.
- **Forward:** [4.5](04-05-localization.md) integrates these equations to estimate pose and confronts the resulting drift; [4.6](04-06-motion-planning.md) must plan with feasible motion primitives rather than arbitrary paths.
- **Sideways:** nonholonomic constraints and their integrability are [`analytical-mechanics` 1.3](../../analytical-mechanics/lessons/01-03-generalized-coordinates-constraints.md)'s; the Lie bracket that generates sideways motion is the same object that measures the non-commutativity of rotations in [1.2](01-02-rotation-matrices.md), and the whole structure — control fields, brackets, and the reachable set — is sub-Riemannian geometry, a corner of [`differential-geometry`](../../differential-geometry/syllabus.md).
