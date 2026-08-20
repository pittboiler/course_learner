# Engineering Dynamics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Dynamics is two questions: *given the forces, how does it move?* and *given the
motion, what forces did that?* The answers come in three interchangeable
currencies — force–acceleration at an instant, work–energy over a distance,
impulse–momentum over a time — applied first to particles, then to 2D rigid
bodies, and finally to the spring–mass–damper that rings, decays, and resonates.
Mid-problem, the two things you actually look up are **which method is the fast
route** and **what is the kinematic relation in this coordinate system**; both
are near the top of *Formulas and rules*.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $x$, $s$ | position along a line, or arc length along a curved path (m) | [1.1](lessons/01-01-rectilinear-motion.md) |
| $v = \dot x$, $a = \ddot x$ | velocity (m/s) and acceleration (m/s²) — both **signed**, not speeds | [1.1](lessons/01-01-rectilinear-motion.md) |
| $\vec r$, $\hat i,\ \hat j$ | position vector, and the fixed unit vectors along the $x$- and $y$-axes | [1.2](lessons/01-02-curvilinear-motion-projectiles.md) |
| $g$ | gravitational acceleration, $9.81\ \text{m/s}^2$ downward | [1.2](lessons/01-02-curvilinear-motion-projectiles.md) |
| $\hat e_t,\ \hat e_n$ | unit vectors along the path and toward the center of curvature | [1.3](lessons/01-03-normal-tangential-polar-coordinates.md) |
| $a_t$, $a_n$ | tangential acceleration (speeding up) and normal acceleration (turning) | [1.3](lessons/01-03-normal-tangential-polar-coordinates.md) |
| $\rho$ | radius of curvature — radius of the circle that best hugs the path here (m) | [1.3](lessons/01-03-normal-tangential-polar-coordinates.md) |
| $\hat e_r,\ \hat e_\theta$ | polar unit vectors: outward from the origin, and along increasing $\theta$ | [1.3](lessons/01-03-normal-tangential-polar-coordinates.md) |
| $\dot\theta$, $\ddot\theta$ | angular rate (rad/s) and angular acceleration (rad/s²) of the radial line | [1.3](lessons/01-03-normal-tangential-polar-coordinates.md) |
| $N$, $f$ | normal contact force and friction force (N) | [2.1](lessons/02-01-newtons-second-law-particles.md) |
| $\mu_s$, $\mu_k$ | static and kinetic friction coefficients — dimensionless | [2.1](lessons/02-01-newtons-second-law-particles.md) |
| $U_{1\to2}$ | work done by a force between stations 1 and 2 (J) | [2.2](lessons/02-02-work-energy-power.md) |
| $T$ | kinetic energy (J) — **not** tension, though both letters appear | [2.2](lessons/02-02-work-energy-power.md) |
| $V$ | potential energy stored by a conservative force (J) | [2.2](lessons/02-02-work-energy-power.md) |
| $k$ | spring stiffness (N/m) — collides with the radius of gyration $k$ below | [2.2](lessons/02-02-work-energy-power.md) |
| $P$, $\varepsilon$ | power (W) and mechanical efficiency (dimensionless, $\le 1$) | [2.2](lessons/02-02-work-energy-power.md) |
| $\vec p = m\vec v$ | linear momentum (kg·m/s) | [2.3](lessons/02-03-linear-impulse-momentum.md) |
| $\vec J$ | impulse, the time-integral of a force (N·s) | [2.3](lessons/02-03-linear-impulse-momentum.md) |
| $e$ | coefficient of restitution — separation speed over approach speed, $0\le e\le1$ | [2.4](lessons/02-04-impact.md) |
| $v'$ | a velocity **after** an impact (primed = post-collision) | [2.4](lessons/02-04-impact.md) |
| $\boldsymbol\omega = \omega\hat k$ | angular velocity of a rigid body (rad/s), positive counterclockwise | [3.1](lessons/03-01-rotation-instantaneous-center.md) |
| $\vec r_{B/A}$ | position of $B$ measured from $A$; $r_{B/A}$ is its length | [3.1](lessons/03-01-rotation-instantaneous-center.md) |
| $IC$ | instantaneous center of zero velocity | [3.1](lessons/03-01-rotation-instantaneous-center.md) |
| $\boldsymbol\alpha = \alpha\hat k$ | angular acceleration of a rigid body (rad/s²) | [3.2](lessons/03-02-relative-acceleration-rolling.md) |
| $G$ | the body's mass center; $\vec a_G$ is its acceleration | [3.2](lessons/03-02-relative-acceleration-rolling.md) |
| $I$, $I_G$, $I_O$ | mass moment of inertia (kg·m²) — general, about $G$, about a pivot $O$ | [3.3](lessons/03-03-mass-moment-of-inertia.md) |
| $k$ (again) | radius of gyration, $k=\sqrt{I/m}$ (m) — read from context, never with a spring in the same equation | [3.3](lessons/03-03-mass-moment-of-inertia.md) |
| $\sum M_G$, $\sum M_O$ | net moment about $G$ / about $O$ (N·m) | [3.4](lessons/03-04-rigid-body-kinetics-2d.md) |
| $c$, $c_c$ | viscous damping coefficient and its critical value (N·s/m) | [4.1](lessons/04-01-free-vibration-undamped-damped.md) |
| $\zeta$ | damping ratio $c/c_c$ — the one number that classifies the response | [4.1](lessons/04-01-free-vibration-undamped-damped.md) |
| $\omega_n$, $\omega_d$ | undamped natural frequency and damped natural frequency (rad/s) | [4.1](lessons/04-01-free-vibration-undamped-damped.md) |
| $\delta$ | logarithmic decrement — log of the ratio of two successive peaks | [4.1](lessons/04-01-free-vibration-undamped-damped.md) |
| $\omega$ (forcing) | the **driving** frequency, set by whatever is pushing — not by the system | [4.2](lessons/04-02-forced-vibration-resonance.md) |
| $r = \omega/\omega_n$ | frequency ratio — collides with the polar radius $r$; in Module 4 it is always the ratio | [4.2](lessons/04-02-forced-vibration-resonance.md) |
| $M$, $\phi$, $X$ | magnification factor, phase lag, and steady-state amplitude (m) | [4.2](lessons/04-02-forced-vibration-resonance.md) |

## Definitions

### Radius of curvature

The radius of the circle that best hugs the path right where you are: a straight
stretch has infinite radius, a hairpin a tiny one.

$$\rho = \frac{\left[1 + (dy/dx)^2\right]^{3/2}}{\left|d^2y/dx^2\right|} \quad (\text{m})$$

*Introduced:* [1.3](lessons/01-03-normal-tangential-polar-coordinates.md)

### Coriolis acceleration

The sideways kick you get for moving radially *while* the frame rotates — slide
outward on a merry-go-round and something must shove you to keep up with the
faster outer rim. It exists only when both motions happen at once.

$$a_{\text{Cor}} = 2\dot r\dot\theta \quad (\text{m/s}^2), \qquad \text{the transverse term of } \vec a \text{ in polar coordinates}$$

*Introduced:* [1.3](lessons/01-03-normal-tangential-polar-coordinates.md)

### Kinetic diagram

The right-hand side of Newton's law drawn as a picture: the body with a single
vector $m\vec a$ on it (plus a couple $I_G\alpha$ for a rigid body). It is the
*result* of the forces, so it lives on its own diagram beside the free-body
diagram, never inside it.

*Introduced:* [2.1](lessons/02-01-newtons-second-law-particles.md)

### Work of a force

Push times distance, but only the part of the push that points along the motion —
a force perpendicular to the path does no work at all.

$$U_{1\to2} = \int_1^2 \vec F\cdot d\vec r \quad (\text{J} = \text{N}\cdot\text{m})$$

*Introduced:* [2.2](lessons/02-02-work-energy-power.md)

### Kinetic energy

The energy a body has purely by moving. Scalar, never negative, and it uses
*speed*, so direction is invisible to it.

$$T = \tfrac12 m v^2 \quad (\text{J})$$

*Introduced:* [2.2](lessons/02-02-work-energy-power.md)

### Conservative force

A force that gives back exactly what you put in: its work depends only on where
you started and ended, not on the route. Gravity and springs qualify; friction
and drag never do.

*Introduced:* [2.2](lessons/02-02-work-energy-power.md)

### Potential energy

Stored work, defined only for a conservative force, with the sign chosen so the
force pushes "downhill" toward lower $V$.

$$U_{\text{cons}} = -\Delta V, \qquad V_{\text{grav}} = mgy, \qquad V_{\text{elastic}} = \tfrac12 kx^2 \quad (\text{J})$$

*Introduced:* [2.2](lessons/02-02-work-energy-power.md)

### Power

The *rate* of doing work — how fast energy is delivered, not how much.

$$P = \frac{dU}{dt} = \vec F\cdot\vec v \quad (\text{W} = \text{J/s})$$

*Introduced:* [2.2](lessons/02-02-work-energy-power.md)

### Mechanical efficiency

Useful output over required input; the shortfall went to friction and heat.

$$\varepsilon = \frac{P_{\text{out}}}{P_{\text{in}}} = \frac{U_{\text{out}}}{U_{\text{in}}} \le 1$$

*Introduced:* [2.2](lessons/02-02-work-energy-power.md)

### Linear momentum

Mass times velocity — a vector measuring how hard something is to stop.

$$\vec p = m\vec v \quad (\text{kg}\cdot\text{m/s})$$

*Introduced:* [2.3](lessons/02-03-linear-impulse-momentum.md)

### Impulse

Force accumulated over time — the area under the force–time curve. Same units as
momentum, which is the whole point.

$$\vec J = \int_{t_1}^{t_2}\vec F\,dt \quad (\text{N}\cdot\text{s} = \text{kg}\cdot\text{m/s})$$

*Introduced:* [2.3](lessons/02-03-linear-impulse-momentum.md)

### Impulsive force

A force so large and so brief that ordinary forces (gravity, friction) deliver
negligible impulse during it and may be dropped from the bookkeeping.

*Introduced:* [2.3](lessons/02-03-linear-impulse-momentum.md)

### Conservation of linear momentum

Draw a box around the interacting bodies: their mutual forces are internal and
cancel in pairs, so with no external impulse the total momentum is unchanged.

$$\sum m_i\vec v_i\Big|_{\text{before}} = \sum m_i\vec v_i\Big|_{\text{after}} \quad \text{when } \sum\vec J_{\text{external}} = 0$$

*Introduced:* [2.3](lessons/02-03-linear-impulse-momentum.md)

### Coefficient of restitution

One dimensionless number standing in for how bouncy a pair of materials is: how
fast they separate afterward divided by how fast they closed before.

$$e = \frac{v_2' - v_1'}{v_1 - v_2}, \qquad 0 \le e \le 1$$

*Introduced:* [2.4](lessons/02-04-impact.md)

### Line of impact

The line through the two bodies' centers at contact. All the squashing — and
therefore all of the momentum exchange and restitution — happens along it; the
perpendicular (tangential) direction is untouched for smooth bodies.

*Introduced:* [2.4](lessons/02-04-impact.md)

### Angular velocity and angular acceleration

A rigid body has **one** spin rate and **one** spin-up rate, shared by every
point on it, however the individual points are moving.

$$\boldsymbol\omega = \omega\hat k\ (\text{rad/s}), \qquad \boldsymbol\alpha = \alpha\hat k = \dot\omega\,\hat k\ (\text{rad/s}^2)$$

*Introduced:* [3.1](lessons/03-01-rotation-instantaneous-center.md)

### Instantaneous center of zero velocity

At any instant, a body in plane motion is turning about one point that is
momentarily standing still — so every point's speed is just $\omega$ times its
distance from that point.

$$v_P = \omega\,r_{P/IC}, \qquad \vec v_P \perp \vec r_{P/IC}$$

*Introduced:* [3.1](lessons/03-01-rotation-instantaneous-center.md)

### Rolling without slipping

The material point touching the ground has the ground's velocity — zero — so the
contact point is the instantaneous center, and one revolution lays down exactly
one circumference.

$$v_G = \omega R, \qquad a_G = \alpha R$$

*Introduced:* [3.2](lessons/03-02-relative-acceleration-rolling.md)

### Mass moment of inertia

How hard a body is to spin up: mass weighted by the **square** of its distance
from the axis, so where the mass sits beats how much of it there is.

$$I = \int r^2\,dm \quad (\text{kg}\cdot\text{m}^2), \qquad r = \text{perpendicular distance to the \textit{axis}}$$

*Introduced:* [3.3](lessons/03-03-mass-moment-of-inertia.md)

### Radius of gyration

The single distance at which you could park the entire mass as one point and get
the same inertia. Handbooks list it instead of $I$; it must land inside the
body's extent.

$$k = \sqrt{\frac{I}{m}} \quad\Longleftrightarrow\quad I = mk^2 \quad (\text{m})$$

*Introduced:* [3.3](lessons/03-03-mass-moment-of-inertia.md)

### Natural frequency

The tempo a system rings at when you disturb it and walk away — set by stiffness
over mass, and by nothing else.

$$\omega_n = \sqrt{\frac{k}{m}}\ (\text{rad/s}), \qquad T = \frac{2\pi}{\omega_n}\ (\text{s})$$

*Introduced:* [4.1](lessons/04-01-free-vibration-undamped-damped.md)

### Damping ratio

Your damper measured against the exact amount needed to just barely kill
oscillation. One number decides ring-and-decay, fastest-return, or crawl.

$$c_c = 2\sqrt{km} = 2m\omega_n \ (\text{N}\cdot\text{s/m}), \qquad \zeta = \frac{c}{c_c}$$

*Introduced:* [4.1](lessons/04-01-free-vibration-undamped-damped.md)

### Damped natural frequency

The frequency a damped system *actually* oscillates at — always a little slower
than $\omega_n$, because damping drags the tempo down.

$$\omega_d = \omega_n\sqrt{1-\zeta^2} \quad (\text{rad/s})$$

*Introduced:* [4.1](lessons/04-01-free-vibration-undamped-damped.md)

### Logarithmic decrement

How to measure damping with a ruler: take the log of the ratio of two successive
peaks of a free decay.

$$\delta = \ln\frac{x_i}{x_{i+1}} = \frac{2\pi\zeta}{\sqrt{1-\zeta^2}} \quad\Longrightarrow\quad \zeta = \frac{\delta}{\sqrt{(2\pi)^2 + \delta^2}}$$

*Introduced:* [4.1](lessons/04-01-free-vibration-undamped-damped.md)

### Magnification factor

How many times bigger the shaking is than the deflection the same force would
cause if applied slowly.

$$M = \frac{X}{F_0/k} = \frac{1}{\sqrt{(1-r^2)^2 + (2\zeta r)^2}}, \qquad r = \frac{\omega}{\omega_n}$$

*Introduced:* [4.2](lessons/04-02-forced-vibration-resonance.md)

### Resonance

Driving a system at (nearly) its own tempo, so every push adds to the last and
the response balloons. Damping is the only thing keeping the peak finite.

$$r_{\text{peak}} = \sqrt{1-2\zeta^2}, \qquad M_{\max} = \frac{1}{2\zeta\sqrt{1-\zeta^2}} \;\approx\; \frac{1}{2\zeta} \ \text{ for small } \zeta$$

*Introduced:* [4.2](lessons/04-02-forced-vibration-resonance.md)

## Formulas and rules

### Which method to reach for

This is the call you make at the top of every kinetics problem. All three are the
same law — Newton's second, raw, integrated over distance, or integrated over
time — so any of them *can* work; one of them is short.

| Method | The equation | Fast route when the problem… | Cannot give you |
|---|---|---|---|
| **Newton–Euler** | $\sum\vec F = m\vec a$, and $\sum M_G = I_G\alpha$ for a body | asks for a **force at an instant** (tension, normal force, friction, pin reaction), or for the acceleration right now | speed after a distance, without further integration |
| **Work–energy** | $U_{1\to2} = \Delta T$, or $T_1+V_1+U_{\text{other}} = T_2+V_2$ | asks for **speed as a function of position** — heights, springs, ramps — and never mentions time | time, direction of $\vec v$, and any force perpendicular to the motion (it does no work) |
| **Impulse–momentum** | $\int\vec F\,dt = \Delta(m\vec v)$, or momentum conservation | hands you a **time interval or a collision**: average force over 0.01 s, recoil, coupling, a bat on a ball | position, and anything after the transient of a long interval with unmodelled external forces |

Quick triage: *"find the tension at this instant"* → Newton–Euler. *"how fast at
the bottom"* → work–energy. *"what happens right after they hit"* →
impulse–momentum (then hand off to work–energy for the swing that follows — that
chaining is the ballistic-pendulum pattern).

*From* [2.1](lessons/02-01-newtons-second-law-particles.md), [2.2](lessons/02-02-work-energy-power.md), [2.3](lessons/02-03-linear-impulse-momentum.md), [2.4](lessons/02-04-impact.md) *and* [3.4](lessons/03-04-rigid-body-kinetics-2d.md)

### Units and constants

No lesson states this table, and every lesson assumes it. A unit check is the
cheapest error detector in the course.

| Quantity | SI unit | In base units |
|---|---|---|
| force | $\text{N}$ | $\text{kg}\cdot\text{m/s}^2$ |
| moment / torque | $\text{N}\cdot\text{m}$ | $\text{kg}\cdot\text{m}^2/\text{s}^2$ |
| work, energy | $\text{J} = \text{N}\cdot\text{m}$ | $\text{kg}\cdot\text{m}^2/\text{s}^2$ |
| power | $\text{W} = \text{J/s}$ | $\text{kg}\cdot\text{m}^2/\text{s}^3$ |
| impulse, momentum | $\text{N}\cdot\text{s}$ | $\text{kg}\cdot\text{m/s}$ |
| mass moment of inertia | $\text{kg}\cdot\text{m}^2$ | — |
| spring stiffness / damping | $\text{N/m}$ / $\text{N}\cdot\text{s/m}$ | $\text{kg/s}^2$ / $\text{kg/s}$ |
| angular velocity / acceleration | $\text{rad/s}$ / $\text{rad/s}^2$ | $\text{s}^{-1}$ / $\text{s}^{-2}$ |

$$g = 9.81\ \text{m/s}^2, \qquad 1\ \text{rev} = 2\pi\ \text{rad}, \qquad 1\ \text{rpm} = \frac{2\pi}{60} = 0.1047\ \text{rad/s}, \qquad 1\ \text{m/s} = 3.6\ \text{km/h}$$

The radian is dimensionless, which is why $\omega R$ comes out in m/s and
$I\alpha$ in N·m with no conversion. Angles inside $\sin$, $\cos$, and every
derivative formula are radians; degrees appear only as given data.

### Integrating acceleration — the three cases

Match the tool to what $a$ depends on; picking wrong is the difference between
one clean integral and a wall.

| $a$ is given as | Separate this | You get |
|---|---|---|
| $a = a(t)$ | $dv = a(t)\,dt$, then $dx = v(t)\,dt$ | $v(t)$, then $x(t)$ |
| $a = a(v)$ | $\dfrac{dv}{a(v)} = dt$ **or** $\dfrac{v\,dv}{a(v)} = dx$ | $v(t)$ **or** $v(x)$ |
| $a = a(x)$ | $v\,dv = a(x)\,dx$ | $v(x)$ |

$$v = \frac{dx}{dt}, \qquad a = \frac{dv}{dt} = v\frac{dv}{dx} \quad\Longrightarrow\quad v\,dv = a\,dx$$

**Constant acceleration only** (free fall, uniform braking) — these are the
general integrals with $a$ pulled out front, and they are wrong the instant $a$
depends on $t$, $v$, or $x$:

$$v = v_0 + at, \qquad x = x_0 + v_0 t + \tfrac12 at^2, \qquad v^2 = v_0^2 + 2a(x-x_0)$$

Graphically: slope of the $v$–$t$ curve is $a$, **signed** area under it is
$\Delta x$; area under $a$–$t$ is $\Delta v$.

*From* [1.1](lessons/01-01-rectilinear-motion.md)

### Kinematic relations by coordinate system

The lookup table of Module 1. Same motion, three descriptions — pick the one the
geometry is cheapest in. Lengths in m, angles in rad, so velocities are m/s and
accelerations m/s².

| | Cartesian $(x,y)$ | Normal–tangential $(n,t)$ | Polar $(r,\theta)$ |
|---|---|---|---|
| Position | $\vec r = x\,\hat i + y\,\hat j$ | arc length $s$ along the path | $\vec r = r\,\hat e_r$ |
| Velocity | $\vec v = \dot x\,\hat i + \dot y\,\hat j$ | $\vec v = v\,\hat e_t$ (always tangent) | $\vec v = \dot r\,\hat e_r + r\dot\theta\,\hat e_\theta$ |
| Acceleration | $\vec a = \ddot x\,\hat i + \ddot y\,\hat j$ | $\vec a = \dot v\,\hat e_t + \dfrac{v^2}{\rho}\,\hat e_n$ | $\vec a = (\ddot r - r\dot\theta^2)\hat e_r + (r\ddot\theta + 2\dot r\dot\theta)\hat e_\theta$ |
| Speed | $v = \sqrt{\dot x^2 + \dot y^2}$ | $v$ (the tangential component *is* the speed) | $v = \sqrt{\dot r^2 + (r\dot\theta)^2}$ |
| Magnitude of $\vec a$ | $\sqrt{\ddot x^2 + \ddot y^2}$ | $a = \sqrt{a_t^2 + a_n^2}$ | $\sqrt{a_r^2 + a_\theta^2}$ |
| Best for | projectiles, blocks, anything on fixed axes | a **known path**: curves, loops, tracks | motion around a **center**: arms, orbits, radar |

Naming the four polar terms: $\ddot r$ reaching out faster, $-r\dot\theta^2$
centripetal (inward), $r\ddot\theta$ angular speed-up, $2\dot r\dot\theta$
Coriolis. Cross-check between systems: on a circle $r=\rho$ and $v=r\dot\theta$,
so $r\dot\theta^2 = v^2/\rho$ — the same term wearing two hats. On a straight
line $\rho\to\infty$, so $a_n=0$ and n–t collapses to rectilinear motion.

*From* [1.2](lessons/01-02-curvilinear-motion-projectiles.md) *and* [1.3](lessons/01-03-normal-tangential-polar-coordinates.md)

### Projectile motion

Two independent 1D problems: gravity touches only the vertical story.

$$a_x = 0,\quad a_y = -g \qquad\Longrightarrow\qquad x = v_{0x}t,\quad y = v_{0y}t - \tfrac12 gt^2, \quad v_x = v_{0x},\quad v_y = v_{0y} - gt$$

$$y = x\tan\theta - \frac{g\,x^2}{2v_0^2\cos^2\theta} \qquad (\text{the path: a downward parabola})$$

For launch and landing at the **same height** only:

$$t_{\text{flight}} = \frac{2v_{0y}}{g}, \qquad H = \frac{v_{0y}^2}{2g}, \qquad R = \frac{v_0^2\sin 2\theta}{g}$$

Different heights? Go back to the $y$ equation and solve the quadratic for the
landing time.

*From* [1.2](lessons/01-02-curvilinear-motion-projectiles.md)

### Equations of motion by coordinate system

Newton's second law is one vector equation, so in a plane it is two scalar
equations — in whichever axes make the geometry cheap.

| System | Equations | Use for |
|---|---|---|
| Rectangular | $\sum F_x = ma_x$, $\quad\sum F_y = ma_y$ | blocks, elevators, projectiles |
| Normal–tangential | $\sum F_t = m\dot v$, $\quad\sum F_n = m\dfrac{v^2}{\rho}$ | cars on curves, loops, banked turns |
| Polar | $\sum F_r = m(\ddot r - r\dot\theta^2)$, $\quad\sum F_\theta = m(r\ddot\theta + 2\dot r\dot\theta)$ | orbits, robot arms, whirling links |

Statics is the case $\vec a = \vec 0$ — an empty kinetic diagram.

*From* [2.1](lessons/02-01-newtons-second-law-particles.md)

### Friction, in the form dynamics uses it

$$f_{\text{kinetic}} = \mu_k N \ (\text{sliding, opposes motion}), \qquad f_{\text{static}} \le \mu_s N \ (\text{an inequality, not a value})$$

Get $N$ from its own axis equation every time — it equals $mg$ only when nothing
else acts vertically and there is no vertical acceleration. A block on a ramp
slides when $\tan\theta > \mu_s$, and then $a = g(\sin\theta - \mu_k\cos\theta)$.

*From* [2.1](lessons/02-01-newtons-second-law-particles.md) *and* [3.4](lessons/03-04-rigid-body-kinetics-2d.md); the friction model itself is *statics* (see below)

### Work of the standard forces

| Force | Work from 1 to 2 | Notes |
|---|---|---|
| constant $\vec F$ over displacement $\vec d$ | $U = \vec F\cdot\vec d = Fd\cos\theta$ | $\theta$ between force and displacement |
| gravity, rising by $\Delta y$ | $U = -mg\,\Delta y$ | falling gives positive work |
| linear spring, $x_1\to x_2$ from natural length | $U = -\tfrac12 k(x_2^2 - x_1^2)$ | always fights the motion |
| friction over path length $d$ | $U = -f\,d$ | path-dependent — never a potential energy |
| normal force, tension on a circular path | $U = 0$ | perpendicular to the motion |

*From* [2.2](lessons/02-02-work-energy-power.md)

### Work–energy and conservation of energy

$$U_{1\to2} = \Delta T = \tfrac12 mv_2^2 - \tfrac12 mv_1^2$$

$$T_1 + V_1 + U_{\text{other}} = T_2 + V_2 \qquad\xrightarrow{\ \text{no friction}\ }\qquad T_1 + V_1 = T_2 + V_2$$

Pick one framework and stay in it: either count the spring's *work*
($-\tfrac12 kx^2$) on the left, or its *potential energy* ($+\tfrac12 kx^2$) on
the right — never both. For a rigid body, $T$ gains a rotational term (below).

$$P = \vec F\cdot\vec v, \qquad P_{\text{in}} = \frac{P_{\text{out}}}{\varepsilon}$$

*From* [2.2](lessons/02-02-work-energy-power.md)

### Impulse and momentum

$$\int_{t_1}^{t_2}\vec F\,dt = m\vec v_2 - m\vec v_1, \qquad \vec F_{\text{avg}} = \frac{\Delta\vec p}{\Delta t}$$

Component by component, and momentum is a **vector**: a ball arriving at
$40\ \text{m/s}$ and leaving at $50\ \text{m/s}$ the other way has
$\Delta v = 90\ \text{m/s}$, not $10$. Conservation holds when the external
impulse is zero or negligible over the interval.

*From* [2.3](lessons/02-03-linear-impulse-momentum.md)

### Impact

Two equations, two unknowns, all along the line of impact:

$$m_1v_1 + m_2v_2 = m_1v_1' + m_2v_2', \qquad v_2' - v_1' = e\,(v_1 - v_2)$$

| Case | $e$ | What happens |
|---|---|---|
| perfectly elastic | $1$ | separation speed = approach speed; kinetic energy conserved |
| general | $0<e<1$ | some kinetic energy permanently lost to deformation |
| perfectly plastic | $0$ | bodies stick, $v_1' = v_2'$; maximum possible energy loss |

$$\Delta T = \tfrac12\,\frac{m_1m_2}{m_1+m_2}\,(1-e^2)(v_1-v_2)^2 \qquad \left(\tfrac{m_1m_2}{m_1+m_2} = \text{reduced mass}\right)$$

**Oblique impact:** resolve into normal ($n$, along the line of impact) and
tangential ($t$). For smooth bodies the tangential components are unchanged
($v_{1t}'=v_{1t}$, $v_{2t}'=v_{2t}$) and the normal pair obeys the two equations
above. Against a fixed massive surface the normal rule collapses to
$v_{\text{out}} = e\,v_{\text{in}}$.

*From* [2.4](lessons/02-04-impact.md)

### Rigid-body kinematics: relative velocity and acceleration

Any two points on the same rigid body, with $\vec r_{B/A}$ from $A$ to $B$:

$$\vec v_B = \vec v_A + \boldsymbol\omega\times\vec r_{B/A}$$

$$\vec a_B = \vec a_A + \underbrace{\boldsymbol\alpha\times\vec r_{B/A}}_{\text{tangential},\ \alpha r,\ \perp} \; \underbrace{-\ \omega^2\,\vec r_{B/A}}_{\text{centripetal},\ \omega^2 r,\ B\to A}$$

The 2D cross product is a 90° counterclockwise rotation and a scale:

$$\omega\hat k\times(x,\,y,\,0) = \omega\,(-y,\;x,\;0), \qquad |\boldsymbol\omega\times\vec r| = \omega r$$

Method: write the vector equation, substitute the constraint on each end (a
slider's velocity direction, a pinned point's $\vec v=0$), and match components —
two scalar equations for two unknowns. Solve velocities first; $\omega$ is an
input to the acceleration equation.

*From* [3.1](lessons/03-01-rotation-instantaneous-center.md) *and* [3.2](lessons/03-02-relative-acceleration-rolling.md)

### Instantaneous center — how to find it

Draw a line through each of two points **perpendicular to that point's velocity**;
the IC is where they cross. Then $\omega = v_A/r_{A/IC}$ from any point whose
speed you know, and $v_P = \omega\,r_{P/IC}$ for every other point.

- Parallel velocities → the perpendiculars never meet → $\omega = 0$, pure translation, no IC.
- A rolling wheel's IC is its contact point, so the top of the wheel runs at $2v_G$.
- **Velocities only.** The IC moves from instant to instant and is itself accelerating.

*From* [3.1](lessons/03-01-rotation-instantaneous-center.md)

### Rolling without slipping

$$v_G = \omega R, \qquad a_G = \alpha R, \qquad \vec a_C = \omega^2 R \ \text{(straight up, toward } G)$$

The contact point $C$ has zero velocity and a very much nonzero acceleration. The
friction force at $C$ is an **unknown you solve for**, bounded afterward by
$f \le \mu_s N$ — it is not $\mu_s N$ unless the wheel is on the verge of slipping.

*From* [3.2](lessons/03-02-relative-acceleration-rolling.md) *and* [3.4](lessons/03-04-rigid-body-kinetics-2d.md)

### Mass moments of inertia of standard bodies

All about an axis through the mass center $G$, all in kg·m². The first four are
the ones to memorize; the rest are the handbook rows the lessons lean on without
printing.

| Body | Axis | $I_G$ |
|---|---|---|
| Slender rod, length $L$ | perpendicular to rod, through center | $\tfrac{1}{12}mL^2$ |
| Slender rod, length $L$ | perpendicular to rod, through **one end** | $\tfrac13 mL^2$ (parallel-axis, $d=L/2$) |
| Solid disk / cylinder, radius $R$ | symmetry axis | $\tfrac12 mR^2$ |
| Thin ring / hoop, radius $R$ | symmetry axis | $mR^2$ |
| Solid sphere, radius $R$ | any diameter | $\tfrac25 mR^2$ |
| Thin spherical shell, radius $R$ | any diameter | $\tfrac23 mR^2$ |
| Thin ring, radius $R$ | a diameter (in its own plane) | $\tfrac12 mR^2$ |
| Thin rectangular plate, sides $a\times b$ | perpendicular to plate, through center | $\tfrac{1}{12}m(a^2+b^2)$ |
| Solid cylinder, radius $R$, length $L$ | transverse, through center | $\tfrac{1}{12}m(3R^2+L^2)$ |
| Point mass at distance $d$ | any parallel axis | $md^2$ |

Read the pattern as $I_G = \beta mR^2$: ring $\beta=1$, disk $\tfrac12$, sphere
$\tfrac25$. Bigger $\beta$ means more mass parked at the rim, which is exactly
why the ring loses the ramp race.

*From* [3.3](lessons/03-03-mass-moment-of-inertia.md)

### Parallel-axis theorem and composite bodies

Shifting the spin axis off the mass center always costs you, never saves you:

$$I = I_G + md^2, \qquad I = \sum_i\left(I_{G,i} + m_i d_i^2\right) \ \text{(subtract a hole's term)}$$

To go between two off-center axes, come back to $G$ first
($I_G = I_A - md_A^2$), then push out ($I_B = I_G + md_B^2$). Sanity checks:
$I$ is smallest about $G$; $k=\sqrt{I/m}$ must land within the body's extent; in
a composite the transport term $m_id_i^2$ usually dwarfs the piece's own $I_{G,i}$.

*From* [3.3](lessons/03-03-mass-moment-of-inertia.md)

### Rigid-body kinetics in 2D

Three scalar equations, so at most three unknowns:

$$\sum F_x = m\,a_{Gx}, \qquad \sum F_y = m\,a_{Gy}, \qquad \sum M_G = I_G\,\alpha$$

| Case | What simplifies | Extra equation |
|---|---|---|
| Pure translation | $\alpha = 0$, so $\sum M_G = 0$; every point shares $\vec a_G$ | — |
| Fixed-axis rotation about $O$ | take moments about the pin: $\sum M_O = I_O\alpha$, killing the unknown pin reaction | $I_O = I_G + md^2$ |
| General plane motion | all three equations in play | a kinematic constraint, e.g. $a_G = R\alpha$ |

The moment center and the inertia must match: $\sum M_G$ pairs with $I_G$,
$\sum M_O$ with $I_O$. Choosing a smart moment center (the contact point of a
rolling body, where friction and $N$ have no arm) can remove an unknown entirely.

Rigid-body kinetic energy carries a spin term:
$T = \tfrac12 mv_G^2 + \tfrac12 I_G\omega^2$.

*From* [3.4](lessons/03-04-rigid-body-kinetics-2d.md)

### Rolling down an incline — the general result

With $I_G = \beta mR^2$ and rolling without slipping, mass and radius cancel
completely:

$$a_G = \frac{g\sin\theta}{1+\beta}, \qquad f = \frac{\beta}{1+\beta}mg\sin\theta, \qquad \mu_s \ge \frac{\beta}{1+\beta}\tan\theta$$

Cylinder ($\beta=\tfrac12$): $a_G = \tfrac23 g\sin\theta$, $\mu_s\ge\tfrac13\tan\theta$.
Sphere ($\beta=\tfrac25$): $a_G = \tfrac57 g\sin\theta$ — the sphere wins, because
less of gravity's work is diverted into spin. A yo-yo is the same algebra with
$\sin\theta\to1$ and friction relabeled as cord tension.

*From* [3.4](lessons/03-04-rigid-body-kinetics-2d.md)

### Free vibration

$$m\ddot x + c\dot x + kx = 0 \qquad\Longleftrightarrow\qquad \ddot x + 2\zeta\omega_n\dot x + \omega_n^2 x = 0$$

$$\omega_n = \sqrt{\frac{k}{m}}, \qquad c_c = 2\sqrt{km} = 2m\omega_n, \qquad \zeta = \frac{c}{c_c}, \qquad r = \left(-\zeta\pm\sqrt{\zeta^2-1}\right)\omega_n$$

| Regime | Condition | Roots | Motion |
|---|---|---|---|
| Underdamped | $\zeta<1$ | complex, negative real part | decaying oscillation at $\omega_d$, envelope $e^{-\zeta\omega_n t}$ |
| Critically damped | $\zeta=1$ | real, repeated $-\omega_n$ | fastest return with no overshoot |
| Overdamped | $\zeta>1$ | two distinct negative reals | slower, non-oscillating return |

$$x(t) = X e^{-\zeta\omega_n t}\cos(\omega_d t - \phi) \quad (\zeta<1), \qquad x(t) = A\cos\omega_n t + B\sin\omega_n t \quad (\zeta = 0)$$

A pinned body on a spring gives the rotational twin, $I_O\ddot\theta + k_\theta\theta = 0$,
with $\omega_n = \sqrt{k_\theta/I_O}$; a physical pendulum swinging through small
angles has $T = 2\pi\sqrt{I_O/(mg\,d_G)}$, with $d_G$ the pivot-to-mass-center
distance.

*From* [4.1](lessons/04-01-free-vibration-undamped-damped.md) *and* [3.3](lessons/03-03-mass-moment-of-inertia.md)

### Forced vibration and resonance

$$m\ddot x + c\dot x + kx = F_0\cos\omega t \qquad\Longrightarrow\qquad x_p(t) = X\cos(\omega t - \phi) \quad\text{(steady state, at the \textit{driving} frequency)}$$

$$X = \frac{F_0/k}{\sqrt{(1-r^2)^2 + (2\zeta r)^2}} = M\cdot\frac{F_0}{k}, \qquad \tan\phi = \frac{2\zeta r}{1-r^2}, \qquad r = \frac{\omega}{\omega_n}$$

| Where you are | $M$ | $\phi$ |
|---|---|---|
| $r \ll 1$ (slow push) | $\to 1$ (static deflection $F_0/k$) | $\to 0^\circ$, moves with the force |
| $r = 1$ | $\dfrac{1}{2\zeta}$ | exactly $90^\circ$, whatever the damping |
| $r = r_{\text{peak}} = \sqrt{1-2\zeta^2}$ | $M_{\max} = \dfrac{1}{2\zeta\sqrt{1-\zeta^2}}$ | just under $90^\circ$ |
| $r \gg 1$ (fast push) | $\to 0$, the mass can't keep up | $\to 180^\circ$, moves against the force |

Undamped ($\zeta=0$): $M = 1/|1-r^2| \to \infty$ at $r=1$, and the true solution
grows linearly in time. No peak at all exists once $\zeta > 1/\sqrt2 \approx 0.707$.

*From* [4.2](lessons/04-02-forced-vibration-resonance.md)

## Assumed, not taught here

This is a Tier 0 engineering refresher: it uses the following without deriving
them. The mechanics are tabulated above; this table says where the *why* lives.

| Fact | Where it's taught |
|---|---|
| Differentiation and definite integration (the $x\to v\to a$ chain, work and impulse integrals) | [calc-refresher 1.1](../calc-refresher/lessons/01-01-derivative-as-sensitivity.md), [2.1](../calc-refresher/lessons/02-01-integral-as-accumulation.md) |
| Separation of variables — the engine behind $v\,dv = a\,dx$ and drag models | [ode-refresher 1.2](../ode-refresher/lessons/01-02-separable-and-linear-first-order.md) |
| Second-order constant-coefficient ODEs: characteristic roots, real vs repeated vs complex | [ode-refresher 2.1](../ode-refresher/lessons/02-01-second-order-constant-coefficient.md) |
| Damped and driven oscillator solutions, steady state vs transient | [ode-refresher 2.2](../ode-refresher/lessons/02-02-oscillations-damping.md), [2.3](../ode-refresher/lessons/02-03-forcing-resonance.md) |
| Small-angle linearization $\sin\theta\approx\theta$ (why a pendulum is a spring) | [calc-refresher 1.3](../calc-refresher/lessons/01-03-linearization-and-taylor.md) |
| Free-body diagrams: isolating a body, naming every real force | [statics 1.1](../statics/lessons/01-01-forces-vectors-free-body-diagram.md) |
| Moment of a force, lever arm, and the cross product $\vec r\times\vec F$ | [statics 1.3](../statics/lessons/01-03-moment-of-a-force.md); the cross product itself (and the 2D shortcut $\omega\hat k\times(x,y,0) = \omega(-y,x,0)$) in [linalg-refresher 1.4](../linalg-refresher/lessons/01-04-cross-product-and-orientation.md) |
| Coulomb friction: $f_k = \mu_k N$, $f_s \le \mu_s N$, impending motion | [statics 3.3](../statics/lessons/03-03-dry-coulomb-friction.md) |
| Locating a mass center by weighted average | [statics 3.2](../statics/lessons/03-02-centroids-of-areas.md) |
| The *area* moment of inertia $\int y^2\,dA$ (m⁴) — same parallel-axis machinery, different physics | [statics 4.3](../statics/lessons/04-03-second-moment-of-area-parallel-axis.md) |
| Newton's three laws as physics, before they became bookkeeping | [mechanics-refresher 1.2](../mechanics-refresher/lessons/01-02-newtons-laws.md) |
| Simple harmonic motion and the simple pendulum | [mechanics-refresher 3.1](../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md) |
| Vectors, components, dot product, unit vectors | [linalg-refresher 1.1](../linalg-refresher/lessons/01-01-vectors-span-linear-combinations.md), [4.1](../linalg-refresher/lessons/04-01-inner-products-orthogonality.md) |
| Unit-circle values and the trig identities used to resolve components | [precalculus 3.1](../precalculus/lessons/03-01-trig-functions-for-calculus.md) |

## Pitfalls

### Kinematics

- The constant-acceleration formulas are *only* for constant $a$; the moment $a$ depends on $t$, $v$, or $x$, go back to the integrals. *([1.1](lessons/01-01-rectilinear-motion.md))*
- You cannot integrate $a(v)$ or $a(x)$ over $dt$ — you don't know $v(t)$ or $x(t)$ yet. That is exactly what $v\,dv = a\,dx$ fixes. *([1.1](lessons/01-01-rectilinear-motion.md))*
- Velocity is signed, speed is not: the area under a $v$–$t$ curve subtracts where $v<0$. *([1.1](lessons/01-01-rectilinear-motion.md))*
- A projectile's horizontal speed never decays — only $v_y$ vanishes at the apex. *([1.2](lessons/01-02-curvilinear-motion-projectiles.md))*
- Only $\vec v$ is guaranteed tangent to the path; $\vec a$ points wherever the motion is changing. Never assume they are parallel. *([1.2](lessons/01-02-curvilinear-motion-projectiles.md), [1.3](lessons/01-03-normal-tangential-polar-coordinates.md))*
- $t_{\text{flight}}$, $H$, $R$ assume launch and landing at the same height; off a cliff, solve the quadratic. *([1.2](lessons/01-02-curvilinear-motion-projectiles.md))*
- $a_n = v^2/\rho$ is never negative and never points outward — the "centrifugal" pull you feel is inertia, not a term in $\vec a$. *([1.3](lessons/01-03-normal-tangential-polar-coordinates.md), [2.1](lessons/02-01-newtons-second-law-particles.md))*
- The Coriolis term is $2\dot r\dot\theta$ — the factor of 2 is real, and the term is often the *largest* one whenever something slides while rotating. *([1.3](lessons/01-03-normal-tangential-polar-coordinates.md))*
- $a_t = \dot v$ is the rate of change of **speed** only; all direction-change lives in $a_n$. *([1.3](lessons/01-03-normal-tangential-polar-coordinates.md))*

### Forces and free bodies

- $m\vec a$ is a *result*, not a force: it belongs on the kinetic diagram, never drawn onto the free-body diagram. *([2.1](lessons/02-01-newtons-second-law-particles.md), [3.4](lessons/03-04-rigid-body-kinetics-2d.md))*
- $N = mg$ only when nothing else acts vertically and $a_y = 0$; an angled pull, a bank, or an accelerating elevator changes it — and changes $f = \mu N$ with it. *([2.1](lessons/02-01-newtons-second-law-particles.md))*
- Writing $\sum\vec F = 0$ for an accelerating body is statics, not dynamics. *([3.4](lessons/03-04-rigid-body-kinetics-2d.md))*
- For rolling without slipping, friction is an unknown bounded by $\mu_s N$ — plugging in $\mu_s N$ from the start gives the wrong $a_G$. *([3.4](lessons/03-04-rigid-body-kinetics-2d.md))*

### Energy, impulse, and impact

- Work–energy relates speed to **position** and never mentions time; it also gives only the magnitude of $\vec v$. Need time or a collision? Use impulse–momentum. *([2.2](lessons/02-02-work-energy-power.md), [2.3](lessons/02-03-linear-impulse-momentum.md))*
- Friction is non-conservative — keep it as $U_{\text{other}} = -f\,d$ on the work side; it can never be a potential energy. *([2.2](lessons/02-02-work-energy-power.md))*
- A spring's work is $-\tfrac12kx^2$ and its stored energy is $+\tfrac12kx^2$: same magnitude, opposite sign. Count it once, on one side. *([2.2](lessons/02-02-work-energy-power.md))*
- $\Delta\vec p$ is a **vector** change — a reversal adds the two speeds, it doesn't subtract them. A bounce changes momentum far more than a splat. *([2.3](lessons/02-03-linear-impulse-momentum.md))*
- Impulse (N·s) is not force (N): the same impulse arrives as a gentle push held long or a spike held briefly. That is the crumple zone. *([2.3](lessons/02-03-linear-impulse-momentum.md))*
- Momentum conservation needs zero (or negligible) **external** impulse — safe during a brief collision, not over a long interval or against a wall. *([2.3](lessons/02-03-linear-impulse-momentum.md))*
- Momentum conservation alone is one equation for two unknowns; you always need restitution (or the $e=0$ stick condition) as the second. *([2.4](lessons/02-04-impact.md))*
- Kinetic energy is conserved **only** when $e=1$; momentum is conserved in every impact. Reaching for energy conservation in a general collision is the classic blunder. *([2.4](lessons/02-04-impact.md))*
- Restitution applies to the **normal** component only, with the same body ordering top and bottom — never to the tangential slide. *([2.4](lessons/02-04-impact.md))*

### Rigid bodies

- The IC is instantaneous: it moves each instant and is itself accelerating, so it gives velocities only. Base every acceleration equation on a real material point whose $\vec a$ you know. *([3.1](lessons/03-01-rotation-instantaneous-center.md), [3.2](lessons/03-02-relative-acceleration-rolling.md))*
- The spin term $\boldsymbol\omega\times\vec r_{B/A}$ is perpendicular to $\vec r_{B/A}$, magnitude $\omega r$. If it comes out parallel, you took a dot product. *([3.1](lessons/03-01-rotation-instantaneous-center.md))*
- The rolling contact point has zero velocity but acceleration $\omega^2R$ straight up — zero speed does not mean zero acceleration. *([3.2](lessons/03-02-relative-acceleration-rolling.md))*
- Dropping the centripetal term $-\omega^2\vec r_{B/A}$ (inward, along the line) is the single most common rigid-body acceleration error. *([3.2](lessons/03-02-relative-acceleration-rolling.md))*
- In $I=\int r^2dm$, $r$ is the perpendicular distance to the **axis**, not to a convenient origin. *([3.3](lessons/03-03-mass-moment-of-inertia.md))*
- Parallel-axis runs only *from* the centroidal axis — hopping between two off-center axes by adding $md^2$ double-counts. *([3.3](lessons/03-03-mass-moment-of-inertia.md))*
- Every composite piece needs its transport term $m_id_i^2$ to the **common** axis; forgetting one is an order-of-magnitude error. *([3.3](lessons/03-03-mass-moment-of-inertia.md))*
- Match the inertia to the moment center: $\sum M_G$ with $I_G$, $\sum M_O$ with $I_O$. Mixing them corrupts the answer silently. *([3.4](lessons/03-04-rigid-body-kinetics-2d.md))*

### Vibration

- More damping is not more settled: past $\zeta=1$ the system returns *slower*. Critical damping is the sweet spot. *([4.1](lessons/04-01-free-vibration-undamped-damped.md))*
- $\omega_n$ sets $c_c$ and $\zeta$, but a damped system actually oscillates at $\omega_d = \omega_n\sqrt{1-\zeta^2}$. Close for light damping, never equal. *([4.1](lessons/04-01-free-vibration-undamped-damped.md))*
- The spring force follows position ($-kx$), the damper follows velocity ($-c\dot x$) — swapping them erases the difference between stiffness and dissipation. *([4.1](lessons/04-01-free-vibration-undamped-damped.md))*
- Resonance sits slightly *below* $\omega_n$, at $\omega_n\sqrt{1-2\zeta^2}$ — and above $\zeta \approx 0.707$ there is no peak at all. *([4.2](lessons/04-02-forced-vibration-resonance.md))*
- The transient decays; only the steady-state amplitude $X$ survives, so don't add the transient into a long-run answer. *([4.2](lessons/04-02-forced-vibration-resonance.md))*
- Never use the undamped $M = 1/|1-r^2|$ near $r=1$ — the $(2\zeta r)^2$ term is precisely what keeps the peak finite. *([4.2](lessons/04-02-forced-vibration-resonance.md))*
