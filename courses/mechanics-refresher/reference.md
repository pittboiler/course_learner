# Newtonian Mechanics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Mechanics is one law, $\sum\mathbf F = m\mathbf a$, plus three shortcuts around
it: energy, momentum, and angular momentum, each of which trades "solve the
motion at every instant" for "compare two instants." Everything below is that
law and those shortcuts, in their four costumes — straight-line, oscillating,
rotating, orbiting. Units are listed for every symbol because a units check is
the fastest error detector you own.

## Notation

Angles are in **radians** wherever a formula differentiates or bridges to a
linear quantity. Three symbols do double duty and the context is the only
disambiguator: $T$ is tension (N) in Module 1 but period (s) from Module 3 on;
$L$ is a length (m) in Modules 1–4 but angular momentum (kg·m²/s) from 4.2 on;
$a$ is acceleration (m/s²) everywhere except [5.2](lessons/05-02-orbits-effective-potential.md), where it is an
orbit's semi-major axis (m).

| Symbol | Means | Units | First used |
|---|---|---|---|
| $\mathbf r(t)$ | position — the arrow from the origin to the object | m | [1.1](lessons/01-01-kinematics.md) |
| $\mathbf v = \dot{\mathbf r}$ | velocity — how fast position is changing, and which way | m/s | [1.1](lessons/01-01-kinematics.md) |
| $\mathbf a = \dot{\mathbf v}$ | acceleration — how fast **velocity** is changing | m/s² | [1.1](lessons/01-01-kinematics.md) |
| $g$ | gravitational field strength at Earth's surface, $9.8$ | m/s² | [1.1](lessons/01-01-kinematics.md) |
| $\mathbf F$, $\sum\mathbf F$ | a force, and the vector sum of **all** forces on one body | N = kg·m/s² | [1.2](lessons/01-02-newtons-laws.md) |
| $m$, $M$ | mass — reluctance to accelerate (not weight) | kg | [1.2](lessons/01-02-newtons-laws.md) |
| $W = mg$ | weight — the gravitational **force** on a mass | N | [1.2](lessons/01-02-newtons-laws.md) |
| $N$ | normal force — a surface's perpendicular push, whatever it takes to stop penetration | N | [1.2](lessons/01-02-newtons-laws.md) |
| $T$ | tension — the pull a rope transmits (one value throughout an ideal rope) | N | [1.3](lessons/01-03-applying-newtons-laws.md) |
| $f_s$, $f_k$ | static friction (a range) and kinetic friction (a value) | N | [1.3](lessons/01-03-applying-newtons-laws.md) |
| $\mu_s$, $\mu_k$ | friction coefficients — grip per unit normal push | dimensionless | [1.3](lessons/01-03-applying-newtons-laws.md) |
| $\theta$ | an angle: incline tilt, force-to-displacement angle, or angular position | rad (or deg) | [1.3](lessons/01-03-applying-newtons-laws.md) |
| $a_c$ | centripetal acceleration — the inward pull of *turning*, $v^2/r$ | m/s² | [1.3](lessons/01-03-applying-newtons-laws.md) |
| $W$ | work — force paid along the motion (same letter as weight; context decides) | J = N·m | [2.1](lessons/02-01-work-energy.md) |
| $K = \tfrac12 mv^2$ | kinetic energy — energy stored in motion | J | [2.1](lessons/02-01-work-energy.md) |
| $P$ | power — work per unit time | W = J/s | [2.1](lessons/02-01-work-energy.md) |
| $U$ | potential energy — energy banked in position | J | [2.2](lessons/02-02-potential-energy-conservation.md) |
| $E = K + U$ | total mechanical energy | J | [2.2](lessons/02-02-potential-energy-conservation.md) |
| $W_{\text{nc}}$ | work done by non-conservative forces — the leak in the energy ledger | J | [2.2](lessons/02-02-potential-energy-conservation.md) |
| $k$ | spring constant — stiffness, force per unit stretch | N/m | [2.2](lessons/02-02-potential-energy-conservation.md) |
| $\mathbf p = m\mathbf v$ | momentum — quantity of straight-line motion (a **vector**) | kg·m/s | [2.3](lessons/02-03-momentum-collisions.md) |
| $\mathbf J$ | impulse — force accumulated over time | N·s = kg·m/s | [2.3](lessons/02-03-momentum-collisions.md) |
| $\mathbf R$, $\mathbf a_{\text{cm}}$ | center of mass, and its acceleration | m, m/s² | [2.3](lessons/02-03-momentum-collisions.md) |
| $A$ | amplitude — the farthest displacement of an oscillation | m | [3.1](lessons/03-01-simple-harmonic-motion.md) |
| $\omega$ | angular frequency — the tempo of an oscillation (also a spin rate, below) | rad/s | [3.1](lessons/03-01-simple-harmonic-motion.md) |
| $\phi$ | phase — where in the cycle the clock started | rad | [3.1](lessons/03-01-simple-harmonic-motion.md) |
| $T$, $f$ | period (time for one cycle) and frequency (cycles per second) | s, Hz | [3.1](lessons/03-01-simple-harmonic-motion.md) |
| $b$ | damping coefficient — drag force per unit velocity | N·s/m | [3.2](lessons/03-02-damped-driven-oscillations.md) |
| $\gamma = b/2m$ | damping rate — how fast energy leaks out | rad/s | [3.2](lessons/03-02-damped-driven-oscillations.md) |
| $\omega_0$, $\omega_d$, $\omega_{\text{res}}$ | natural, damped-ring, and peak-response frequencies (three different numbers) | rad/s | [3.2](lessons/03-02-damped-driven-oscillations.md) |
| $Q$ | quality factor — how many rings before it dies, and how sharp the resonance | dimensionless | [3.2](lessons/03-02-damped-driven-oscillations.md) |
| $F_0$ | amplitude of the periodic driving force | N | [3.2](lessons/03-02-damped-driven-oscillations.md) |
| $\alpha = \dot\omega$ | angular acceleration — how fast the spin rate changes | rad/s² | [4.1](lessons/04-01-rotational-dynamics.md) |
| $\tau$ | torque — force times its leverage | N·m | [4.1](lessons/04-01-rotational-dynamics.md) |
| $r_\perp$ | perpendicular lever arm — axis to the force's line of action | m | [4.1](lessons/04-01-rotational-dynamics.md) |
| $I$ | moment of inertia — mass weighted by how far out it sits (axis-dependent) | kg·m² | [4.1](lessons/04-01-rotational-dynamics.md) |
| $L = I\omega$ | angular momentum — quantity of rotational motion | kg·m²/s | [4.2](lessons/04-02-angular-momentum.md) |
| $c = I/MR^2$ | shape factor — the only thing that decides a rolling race | dimensionless | [4.2](lessons/04-02-angular-momentum.md) |
| $G$ | universal gravitational constant, $6.674\times10^{-11}$ | N·m²/kg² | [5.1](lessons/05-01-gravitation-kepler.md) |
| $v_{\text{esc}}$ | escape velocity — the speed that just barely reaches infinity | m/s | [5.1](lessons/05-01-gravitation-kepler.md) |
| $U_{\text{eff}}(r)$ | effective potential — real gravity plus the centrifugal barrier | J | [5.2](lessons/05-02-orbits-effective-potential.md) |
| $a$ | semi-major axis of an orbit (half the long way across the ellipse) | m | [5.2](lessons/05-02-orbits-effective-potential.md) |

## Definitions

### Free-body diagram

Cut one body out of the scene and draw every force acting **on it** — nothing
else. Not the forces it exerts on other things, not the scenery, and never a
"force of motion" carrying a coasting object along. Then read the arrows off one
axis at a time as $\sum F_x = ma_x$, $\sum F_y = ma_y$.

*Introduced:* [1.2](lessons/01-02-newtons-laws.md)

### Inertial frame

A reference frame that is not itself accelerating — the only place Newton's laws
hold as written. In a braking car objects lurch with nothing pushing them; that
frame needs correction terms this course sets aside.

*Introduced:* [1.2](lessons/01-02-newtons-laws.md)

### Mass and weight

Mass is an intrinsic amount of matter (kg) and doesn't change when you travel;
weight is the gravitational **force** on it (N) and does.

$$W = mg$$

*Introduced:* [1.2](lessons/01-02-newtons-laws.md)

### Normal force

Whatever perpendicular push a surface must supply to stop the object sinking
into it — an unknown you solve for, never a formula you quote.

$$N \ \text{from} \ \sum F_\perp = ma_\perp \quad (\text{level: } N = mg; \ \text{incline: } N = mg\cos\theta; \ \text{elevator: } N = m(g+a))$$

*Introduced:* [1.2](lessons/01-02-newtons-laws.md)

### Static and kinetic friction

Static friction supplies exactly enough to prevent sliding, up to a ceiling;
kinetic friction is a fixed value that acts against the sliding once it starts.

$$f_s \le \mu_s N \quad (\text{a range}), \qquad f_k = \mu_k N \quad (\text{a value})$$

*Introduced:* [1.3](lessons/01-03-applying-newtons-laws.md)

### Centripetal acceleration

Moving in a circle at steady speed is still accelerating — the velocity keeps
*turning* — and that acceleration points straight at the center. "Centripetal"
names a **direction**, never an extra force to add to a diagram.

$$a_c = \frac{v^2}{r} = \omega^2 r, \qquad \sum F_{\text{toward center}} = \frac{mv^2}{r}$$

*Introduced:* [1.3](lessons/01-03-applying-newtons-laws.md)

### Work

Force paid over distance, counting only the part aligned with the motion. Signed:
a force opposing the motion does negative work.

$$W = \mathbf F\cdot\mathbf d = Fd\cos\theta \quad (\text{constant}), \qquad W = \int \mathbf F\cdot d\mathbf r \quad (\text{general})$$

*Introduced:* [2.1](lessons/02-01-work-energy.md)

### Work–energy theorem

Net work in, speed change out — $\mathbf F = m\mathbf a$ integrated over the path,
with time eliminated.

$$W_{\text{net}} = \Delta K = \tfrac12 mv_f^2 - \tfrac12 mv_i^2$$

*Introduced:* [2.1](lessons/02-01-work-energy.md)

### Conservative force

A force whose work between two points doesn't care which path you took
(equivalently: zero work around any closed loop). That path-independence is the
license to define a potential energy. Friction fails it.

*Introduced:* [2.2](lessons/02-02-potential-energy-conservation.md)

### Potential energy

Work banked as a number attached to *position*, withdrawable later as speed. The
force is minus the slope of the landscape, so things are pushed **downhill** in $U$.

$$\mathbf F = -\nabla U, \qquad F = -\frac{dU}{dx}$$

*Introduced:* [2.2](lessons/02-02-potential-energy-conservation.md)

### Conservation of mechanical energy

If only conservative forces do work, the sum of motion-energy and
position-energy is frozen, linking any two instants without solving the motion in
between.

$$E = K + U = \text{constant}, \qquad \Delta(K+U) = W_{\text{nc}} \ \text{otherwise}$$

*Introduced:* [2.2](lessons/02-02-potential-energy-conservation.md)

### Turning point

Where the energy line meets the potential curve: all the energy is potential, so
the object momentarily stops and reverses. Not an equilibrium — the slope there
is generally nonzero.

$$E = U(x) \iff K = 0$$

*Introduced:* [2.2](lessons/02-02-potential-energy-conservation.md)

### Stable and unstable equilibrium

Flat spots of the potential landscape: a valley pushes a nudged object back, a
hilltop shoves it away. This is the calculus second-derivative test in physics
clothing.

$$U'(x) = 0 \ \text{(equilibrium)}, \qquad U'' > 0 \ \text{stable}, \quad U'' < 0 \ \text{unstable}$$

*Introduced:* [2.2](lessons/02-02-potential-energy-conservation.md)

### Momentum

Quantity of motion — heaviness times speed, pointing where the motion points.
Newton's second law in its truest form is a statement about it.

$$\mathbf p = m\mathbf v, \qquad \mathbf F = \frac{d\mathbf p}{dt}$$

*Introduced:* [2.3](lessons/02-03-momentum-collisions.md)

### Impulse

Force accumulated over time — momentum's version of work. Same momentum change,
spread over more time, means a far smaller force (airbags, bent knees).

$$\mathbf J = \int_{t_i}^{t_f}\mathbf F\,dt = \bar{\mathbf F}\,\Delta t = \Delta\mathbf p$$

*Introduced:* [2.3](lessons/02-03-momentum-collisions.md)

### Conservation of momentum

With no net **external** force, the total momentum of a system is frozen —
internal forces cancel in pairs by Newton's third law, so the messy collision
force never has to be known.

$$\mathbf p_{\text{total}} = \sum_i m_i\mathbf v_i = \text{constant}$$

*Introduced:* [2.3](lessons/02-03-momentum-collisions.md)

### Elastic, inelastic, perfectly inelastic

Momentum survives every collision; kinetic energy is the thing that may not.
**Elastic** keeps $K$ too; **inelastic** loses some to heat and deformation;
**perfectly inelastic** means the bodies stick and lose the maximum $K$ that
momentum conservation allows.

*Introduced:* [2.3](lessons/02-03-momentum-collisions.md)

### Center of mass

The mass-weighted average position, which moves as if all the mass sat there and
every external force acted there — however chaotic the interior.

$$\mathbf R = \frac{\sum_i m_i\mathbf r_i}{\sum_i m_i}, \qquad \mathbf F_{\text{ext}} = M\mathbf a_{\text{cm}}$$

*Introduced:* [2.3](lessons/02-03-momentum-collisions.md)

### Simple harmonic motion

What a linear restoring force always produces: a pure cosine in time, whose
tempo is set by the system (stiffness over inertia) and **not** by how hard you
pulled.

$$\ddot x + \omega^2 x = 0 \quad\Longrightarrow\quad x(t) = A\cos(\omega t + \phi)$$

*Introduced:* [3.1](lessons/03-01-simple-harmonic-motion.md)

### Amplitude, angular frequency, phase

The three numbers you read off an oscillation: $A$ = how far (set by the pull),
$\omega$ = how fast (set by the system), $\phi$ = where in the cycle $t=0$ caught
it (set by initial conditions).

$$T = \frac{2\pi}{\omega}, \qquad f = \frac1T = \frac{\omega}{2\pi}$$

*Introduced:* [3.1](lessons/03-01-simple-harmonic-motion.md)

### Damping regimes

How the ring dies, decided by drag rate versus natural rate: **underdamped**
rings inside a shrinking envelope, **overdamped** oozes back without a single
overshoot, **critically damped** is the knife-edge that returns fastest with no
overshoot.

$$\gamma < \omega_0 \ \text{under}, \qquad \gamma = \omega_0 \ \text{critical}, \qquad \gamma > \omega_0 \ \text{over}$$

*Introduced:* [3.2](lessons/03-02-damped-driven-oscillations.md)

### Quality factor

One dimensionless number for "how good an oscillator is": high $Q$ rings for a
long time **and** responds in a narrow frequency band.

$$Q = \frac{\omega_0}{2\gamma} \quad (\approx Q/\pi \ \text{cycles to decay to } 1/e)$$

*Introduced:* [3.2](lessons/03-02-damped-driven-oscillations.md)

### Resonance

Push in rhythm and every shove lands in phase, so energy piles up and the steady
amplitude grows huge. It is about *timing*, not force — and the steady state
happens at the **driving** frequency, not the natural one.

$$\omega_{\text{res}} = \sqrt{\omega_0^2 - 2\gamma^2}$$

*Introduced:* [3.2](lessons/03-02-damped-driven-oscillations.md)

### Torque

Force with leverage: the same push does more the farther out it acts, and does
nothing if it points straight at the axis.

$$\tau = rF\sin\theta = r_\perp F, \qquad \boldsymbol\tau = \mathbf r\times\mathbf F$$

*Introduced:* [4.1](lessons/04-01-rotational-dynamics.md)

### Moment of inertia

The rotational stand-in for mass: mass weighted by the **square** of its distance
from the axis, so mass far out counts far more. It is a property of the body
*and the axis* — quote the axis or the number is meaningless.

$$I = \sum_i m_i r_i^2 = \int r^2\,dm$$

*Introduced:* [4.1](lessons/04-01-rotational-dynamics.md)

### Angular momentum

Quantity of rotational motion. Frozen when nothing twists you from outside — so
shrinking your inertia forces your spin rate up in exact proportion.

$$\mathbf L = \mathbf r\times m\mathbf v, \qquad L = I\omega, \qquad \boldsymbol\tau_{\text{net}} = \frac{d\mathbf L}{dt}$$

*Introduced:* [4.2](lessons/04-02-angular-momentum.md)

### Rolling without slipping

A constraint, not a law: the contact point is instantaneously at rest, which
locks travel speed to spin rate and forces the energy to split between racing
forward and spinning in place.

$$v_{\text{cm}} = R\omega, \qquad a_{\text{cm}} = R\alpha$$

*Introduced:* [4.2](lessons/04-02-angular-momentum.md)

### Central force

A force always pointing at (or away from) one fixed center. It therefore exerts
zero torque about that center, so the orbit stays in a plane and $L$ is conserved
— which *is* Kepler's second law.

*Introduced:* [5.2](lessons/05-02-orbits-effective-potential.md)

### Effective potential

Use the conserved $L$ to evict the angular motion, and a 2-D orbit collapses to a
1-D bead sliding in a valley. The extra term is the **centrifugal barrier** — not
a real outward force, just the planet's own sideways inertia, and the reason
nothing with angular momentum falls into the center.

$$E = \tfrac12 m\dot r^2 + U_{\text{eff}}(r), \qquad U_{\text{eff}}(r) = -\frac{GMm}{r} + \frac{L^2}{2mr^2}$$

*Introduced:* [5.2](lessons/05-02-orbits-effective-potential.md)

### Escape velocity

The launch speed that exactly fills in the potential well — enough to coast to
infinity arriving with zero speed. A speed, not a direction, and independent of
the launched mass.

$$v_{\text{esc}} = \sqrt{\frac{2GM}{R}} = \sqrt2 \times v_{\text{circular at } R}$$

*Introduced:* [5.1](lessons/05-01-gravitation-kepler.md)

## Formulas and rules

### Constants and conversions

The numbers every lesson in this course plugs in without comment.

| Quantity | Value |
|---|---|
| $g$ (Earth's surface) | $9.8\ \mathrm{m/s^2}$ |
| $G$ | $6.674\times10^{-11}\ \mathrm{N\,m^2/kg^2}$ |
| $GM_\oplus$ | $3.98\times10^{14}\ \mathrm{m^3/s^2}$ |
| $R_\oplus$ | $6.37\times10^{6}\ \mathrm{m}$ |
| force | $1\ \mathrm N = 1\ \mathrm{kg\,m/s^2}$ |
| energy, work | $1\ \mathrm J = 1\ \mathrm{N\,m} = 1\ \mathrm{kg\,m^2/s^2}$ |
| power | $1\ \mathrm W = 1\ \mathrm{J/s}$ |
| impulse | $1\ \mathrm{N\,s} = 1\ \mathrm{kg\,m/s}$ |
| angle | $1\ \text{rev} = 2\pi\ \mathrm{rad} = 360^\circ$ |
| spin rate | $1\ \mathrm{rpm} = \tfrac{2\pi}{60}\ \mathrm{rad/s} \approx 0.105\ \mathrm{rad/s}$ |

$g$ is not a fundamental constant: $g = GM_\oplus/R_\oplus^2$, which is why
$v_{\text{esc}} = \sqrt{2GM/R} = \sqrt{2gR}$ at a planet's surface.

### Angles, components, and small-angle facts

Resolving a vector and truncating a sine are the two moves every module reuses.

$$\mathbf A = (A\cos\theta,\ A\sin\theta), \qquad |\mathbf A| = \sqrt{A_x^2+A_y^2}$$

$$\sin\theta \approx \theta, \qquad \cos\theta \approx 1 - \tfrac{\theta^2}{2} \qquad (\theta \ll 1,\ \text{in radians})$$

| $\theta$ | $30^\circ$ | $37^\circ$ | $45^\circ$ | $53^\circ$ | $60^\circ$ |
|---|---|---|---|---|---|
| $\sin\theta$ | $0.500$ | $0.60$ | $0.707$ | $0.80$ | $0.866$ |
| $\cos\theta$ | $0.866$ | $0.80$ | $0.707$ | $0.60$ | $0.500$ |

The $37^\circ/53^\circ$ pair is the 3-4-5 triangle, which is why textbook problems
keep choosing it.

### Kinematics with constant acceleration — and its rotational twin

Valid **only** when the acceleration is constant; the moment a force varies, go
back to $\mathbf v = \mathbf v_0 + \int\mathbf a\,dt$.

| Linear | Rotational |
|---|---|
| $v = v_0 + at$ | $\omega = \omega_0 + \alpha t$ |
| $x = x_0 + v_0t + \tfrac12 at^2$ | $\theta = \theta_0 + \omega_0 t + \tfrac12\alpha t^2$ |
| $v^2 = v_0^2 + 2a\,\Delta x$ | $\omega^2 = \omega_0^2 + 2\alpha\,\Delta\theta$ |

Rim bridge (radians only): $\;v = r\omega$, $\;a_t = r\alpha$, $\;a_c = r\omega^2$.

*From* [1.1](lessons/01-01-kinematics.md) *and* [4.1](lessons/04-01-rotational-dynamics.md)

### Projectile results

Two independent one-dimensional problems sharing one clock: constant velocity
sideways, constant $-g$ vertically. Launch speed $v_0$ at angle $\theta$ from level
ground:

$$t_{\text{flight}} = \frac{2v_0\sin\theta}{g}, \qquad h_{\max} = \frac{v_0^2\sin^2\theta}{2g}, \qquad R = \frac{v_0^2\sin 2\theta}{g}$$

Range is maximized at $\theta = 45^\circ$. Hang time is set by the vertical problem
alone — horizontal speed changes *where* it lands, never *when*.

*From* [1.1](lessons/01-01-kinematics.md)

### Newton's three laws

$$\text{I:}\ \ \sum\mathbf F = \mathbf 0 \Rightarrow \mathbf v \ \text{constant} \qquad \text{II:}\ \ \sum\mathbf F = m\mathbf a = \frac{d\mathbf p}{dt} \qquad \text{III:}\ \ \mathbf F_{B\to A} = -\mathbf F_{A\to B}$$

Law III's two forces act on **different bodies**, so they never appear in the same
free-body diagram and never cancel each other.

*From* [1.2](lessons/01-02-newtons-laws.md)

### Force models and standard setups

| Setup | Equations |
|---|---|
| Incline, angle $\theta$ | along: $mg\sin\theta$ · perpendicular: $N = mg\cos\theta$ |
| Frictionless incline | $a = g\sin\theta$ (mass cancels) |
| Sliding down with friction | $a = g(\sin\theta - \mu_k\cos\theta)$ |
| Does it start to slide? | slides iff $\tan\theta > \mu_s$ |
| Elevator / apparent weight | $N = m(g+a)$, $a$ up positive; free fall $\Rightarrow N=0$ |
| Ideal rope over ideal pulley | one tension $T$ throughout; the pulley only redirects it |
| Connected masses | one $a$ magnitude; one FBD per body; add the equations to cancel $T$ |
| Flat curve, max speed | $v_{\max} = \sqrt{\mu_s g r}$ (mass cancels) |
| Conical pendulum, angle $\phi$ from vertical | $T\cos\phi = mg$, $\;T\sin\phi = mv^2/r$, $\;r = L\sin\phi$, $\;P = 2\pi\sqrt{L\cos\phi/g}$ |

*From* [1.3](lessons/01-03-applying-newtons-laws.md)

### Energy, power, and the standard potentials

$$W = \int\mathbf F\cdot d\mathbf r, \qquad W_{\text{net}} = \Delta K, \qquad P = \frac{dW}{dt} = \mathbf F\cdot\mathbf v$$

| Potential | Formula | Check: $F = -dU/dx$ |
|---|---|---|
| gravity, near Earth | $U = mgh$ | $-mg$ (down) |
| spring | $U = \tfrac12 kx^2$ | $-kx$ (restoring) |
| gravity, general | $U = -\dfrac{GMm}{r}$ | $-\dfrac{GMm}{r^2}$ (inward) |

Only *differences* in $U$ matter — pick the zero to kill a term, then keep it for
both instants. With friction or a push present, $\Delta(K+U) = W_{\text{nc}}$, and
$W_{\text{nc}} = -f\ell$ over a path of length $\ell$.

*From* [2.1](lessons/02-01-work-energy.md) *and* [2.2](lessons/02-02-potential-energy-conservation.md)

### Collisions

Momentum conservation always; kinetic-energy conservation only if elastic. Fix a
positive direction *before* writing anything.

$$\text{perfectly inelastic:}\quad v_f = \frac{m_1v_1 + m_2v_2}{m_1+m_2}, \qquad \Delta K = -\tfrac12\frac{m_1m_2}{m_1+m_2}(v_1-v_2)^2$$

$$\text{elastic, 1-D:}\quad v_1' = \frac{m_1-m_2}{m_1+m_2}v_1 + \frac{2m_2}{m_1+m_2}v_2, \qquad v_2' = \frac{m_2-m_1}{m_1+m_2}v_2 + \frac{2m_1}{m_1+m_2}v_1$$

An elastic collision equivalently **reverses the relative velocity**:
$v_1 - v_2 = -(v_1' - v_2')$ — usually the faster route than the quadratic. Equal
masses swap velocities.

*From* [2.3](lessons/02-03-momentum-collisions.md)

### Two-phase problems (ballistic pendulum)

The module's signature trap is using one conservation law for both phases. Use
momentum for the bang, energy for the swing:

$$mv = (m+M)V \quad\text{(collision: KE lost)}, \qquad \tfrac12(m+M)V^2 = (m+M)gh \quad\text{(swing: } p \text{ not conserved, the string pulls)}$$

$$\Rightarrow\quad v = \frac{m+M}{m}\sqrt{2gh}$$

*From* [2.3](lessons/02-03-momentum-collisions.md)

### Simple harmonic motion

$$x(t) = A\cos(\omega t + \phi), \qquad v = -A\omega\sin(\omega t+\phi), \qquad a = -\omega^2 x$$

$$v_{\max} = A\omega, \qquad a_{\max} = A\omega^2, \qquad v(x) = \omega\sqrt{A^2 - x^2}, \qquad E = \tfrac12 kA^2$$

| Oscillator | $\omega$ | Period |
|---|---|---|
| mass on a spring | $\sqrt{k/m}$ | $2\pi\sqrt{m/k}$ |
| simple pendulum, small swings | $\sqrt{g/L}$ | $2\pi\sqrt{L/g}$ |
| physical pendulum, pivot a distance $d$ from the center of mass | $\sqrt{mgd/I}$ | $2\pi\sqrt{I/mgd}$ |
| any smooth well near its minimum $x_0$ | $\sqrt{U''(x_0)/m}$ | — |

That last row is why SHM is everywhere: Taylor-expand any potential about a
minimum and the leading term is a spring with $k_{\text{eff}} = U''(x_0)$. The period
never contains $A$ — that is isochronism.

*From* [3.1](lessons/03-01-simple-harmonic-motion.md)

### Damped and driven oscillators

$$m\ddot x + b\dot x + kx = F_0\cos\omega t \quad\Longleftrightarrow\quad \ddot x + 2\gamma\dot x + \omega_0^2 x = \frac{F_0}{m}\cos\omega t$$

with $\omega_0 = \sqrt{k/m}$, $\gamma = b/2m$, and characteristic roots
$r = -\gamma \pm\sqrt{\gamma^2 - \omega_0^2}$.

| Regime | Condition | Motion |
|---|---|---|
| underdamped | $\gamma < \omega_0$ | $x = Ae^{-\gamma t}\cos(\omega_d t - \phi)$, $\ \omega_d = \sqrt{\omega_0^2-\gamma^2}$ |
| critically damped | $\gamma = \omega_0$ | $x = (C_1 + C_2t)e^{-\gamma t}$ — fastest no-overshoot return |
| overdamped | $\gamma > \omega_0$ | $x = C_1e^{r_1t} + C_2e^{r_2t}$ — a slow crawl, *slower* than critical |

Steady state (after the transient dies) at the **driving** frequency:

$$A(\omega) = \frac{F_0/m}{\sqrt{(\omega_0^2-\omega^2)^2 + (2\gamma\omega)^2}}, \qquad \tan\delta = \frac{2\gamma\omega}{\omega_0^2-\omega^2}$$

$$\omega_{\text{res}} = \sqrt{\omega_0^2 - 2\gamma^2} \ < \ \omega_d = \sqrt{\omega_0^2-\gamma^2} \ < \ \omega_0$$

With $Q = \omega_0/2\gamma$: the peak height is $\approx Q F_0/k$, the peak width is
$\approx \omega_0/Q$, and the ring-down lasts $\approx Q/\pi$ cycles.

*From* [3.2](lessons/03-02-damped-driven-oscillations.md)

### The linear ↔ angular dictionary

Every law you know has a rotational twin; you relabel rather than relearn.

| Linear | Angular |
|---|---|
| $x$, $v$, $a$ | $\theta$, $\omega$, $\alpha$ |
| mass $m$ | moment of inertia $I$ |
| force $\mathbf F$ | torque $\boldsymbol\tau = \mathbf r\times\mathbf F$ |
| $\sum\mathbf F = m\mathbf a$ | $\tau_{\text{net}} = I\alpha$ |
| momentum $\mathbf p = m\mathbf v$ | angular momentum $\mathbf L = I\boldsymbol\omega$ |
| $\mathbf F = d\mathbf p/dt$ | $\boldsymbol\tau = d\mathbf L/dt$ |
| $K = \tfrac12 mv^2$ | $K_{\text{rot}} = \tfrac12 I\omega^2$ |
| work $F\,\Delta x$ | work $\tau\,\Delta\theta$ |
| power $Fv$ | power $\tau\omega$ |

*From* [4.1](lessons/04-01-rotational-dynamics.md) *and* [4.2](lessons/04-02-angular-momentum.md)

### Moments of inertia

About an axis through the center of mass unless stated. $c = I/MR^2$ is the shape
factor that decides rolling races.

| Body | $I$ | $c$ |
|---|---|---|
| point mass at radius $r$ | $mr^2$ | $1$ |
| hoop / thin cylindrical shell, about its axis | $MR^2$ | $1$ |
| solid disk / cylinder, about its axis | $\tfrac12 MR^2$ | $\tfrac12$ |
| solid sphere | $\tfrac25 MR^2$ | $\tfrac25$ |
| thin spherical shell | $\tfrac23 MR^2$ | $\tfrac23$ |
| thin rod, length $\ell$, about its center | $\tfrac1{12}M\ell^2$ | — |
| thin rod, length $\ell$, about one end | $\tfrac13 M\ell^2$ | — |

**Parallel-axis theorem** — shift the axis a distance $d$ off the center of mass and
the inertia grows by $Md^2$:

$$I = I_{\text{cm}} + Md^2$$

(This is where the rod's $\tfrac13 M\ell^2$ comes from: $\tfrac1{12}M\ell^2 + M(\ell/2)^2$.)

*From* [4.1](lessons/04-01-rotational-dynamics.md)

### Rotation, rolling, and conservation of $L$

$$\tau_{\text{net}} = I\alpha, \qquad \tau\,\Delta\theta = \Delta K_{\text{rot}}, \qquad I_1\omega_1 = I_2\omega_2 \ \ (\text{no external torque})$$

For a body rolling without slipping ($v = R\omega$, $I = cMR^2$), released from rest
down a drop $h$ on a slope of angle $\theta$:

$$K = \tfrac12 Mv^2 + \tfrac12 I\omega^2 = \tfrac12(1+c)Mv^2, \qquad v = \sqrt{\frac{2gh}{1+c}}, \qquad a = \frac{g\sin\theta}{1+c}$$

Neither $M$ nor $R$ survives — only $c$ — so a marble and a boulder tie, and
sphere beats disk beats hoop. (Rolling stays slip-free as long as
$\mu_s \ge \dfrac{c\tan\theta}{1+c}$.)

*From* [4.2](lessons/04-02-angular-momentum.md)

### Gravitation and circular orbits

$$F = \frac{GMm}{r^2}, \qquad U(r) = -\frac{GMm}{r}, \qquad g_{\text{surface}} = \frac{GM}{R^2}$$

$$v_{\text{circ}} = \sqrt{\frac{GM}{r}}, \qquad T^2 = \frac{4\pi^2}{GM}r^3, \qquad v_{\text{esc}} = \sqrt{\frac{2GM}{R}}$$

**Kepler's three laws.** (1) Bound orbits are ellipses with the central body at one
focus. (2) Equal areas in equal times — this *is* conservation of $L$, with areal
rate $dA/dt = L/2m$. (3) $T^2\propto a^3$, the constant depending only on the central
mass, so ratios between two satellites of the same body need no value of $G$ or $M$.

The orbiting mass $m$ cancels out of $v$, $T$, and $v_{\text{esc}}$ every time.

*From* [5.1](lessons/05-01-gravitation-kepler.md)

### Orbits from the effective potential

$$U_{\text{eff}}(r) = -\frac{GMm}{r} + \frac{L^2}{2mr^2}, \qquad L = mr^2\dot\theta, \qquad E = \tfrac12 m\dot r^2 + U_{\text{eff}}(r)$$

Turning points are the roots of $E = U_{\text{eff}}(r)$, i.e. of the quadratic

$$E\,r^2 + GMm\,r - \frac{L^2}{2m} = 0 \qquad\Longrightarrow\qquad r_{\text{peri}} + r_{\text{aph}} = -\frac{GMm}{E} = 2a$$

(using the fact that the roots of $Ar^2+Br+C$ sum to $-B/A$), hence
$E = -\dfrac{GMm}{2a}$ — the energy depends on the orbit's *size*, not its shape.

| Energy | Turning points | Orbit |
|---|---|---|
| $E = U_{\text{eff,min}}$ | one (the two merge) | **circle**, at $r_c = \dfrac{L^2}{GMm^2}$ |
| $U_{\text{eff,min}} < E < 0$ | two ($r_{\min}$, $r_{\max}$) | **ellipse** — bound |
| $E = 0$ | one (perihelion) | **parabola** — marginal escape |
| $E > 0$ | one (perihelion) | **hyperbola** — flyby |

The minimum of $U_{\text{eff}}$ is exactly "gravity supplies the centripetal force,"
and $d^2U_{\text{eff}}/dr^2 = GMm/r_c^3 > 0$ there, so inverse-square circular orbits
are stable.

*From* [5.2](lessons/05-02-orbits-effective-potential.md)

## Assumed, not taught here

This is a Tier 0 refresher: it *uses* the following without deriving them. Every
row points at the course that does the derivation.

| Fact | Where it's taught |
|---|---|
| Derivatives; $\dot x$, $\ddot x$ as rates of change | [calc-refresher 1.1](../calc-refresher/lessons/01-01-derivative-as-sensitivity.md), [1.2](../calc-refresher/lessons/01-02-differentiation-rules.md) |
| Integration as accumulation, with initial values as the constants | [calc-refresher 2.1](../calc-refresher/lessons/02-01-integral-as-accumulation.md) |
| Substitution and the mechanics of evaluating $\int F\,dx$ | [calc-refresher 2.2](../calc-refresher/lessons/02-02-integration-techniques.md) |
| Why $\int_R^\infty r^{-2}dr$ converges (so escape costs finite energy) | [calc-refresher 2.3](../calc-refresher/lessons/02-03-improper-integrals-and-models.md) |
| Critical points and the second-derivative test (equilibrium, stability) | [calc-refresher 1.4](../calc-refresher/lessons/01-04-optimization.md) |
| Taylor expansion — small-angle $\sin\theta\approx\theta$, and every well is a parabola | [calc-refresher 1.3](../calc-refresher/lessons/01-03-linearization-and-taylor.md) |
| Gradient and $\mathbf F = -\nabla U$ | [calc-refresher 4.1](../calc-refresher/lessons/04-01-partial-derivatives-and-gradient.md) |
| Dot product, and the line integral $\int\mathbf F\cdot d\mathbf r$ | [calc-refresher 5.2](../calc-refresher/lessons/05-02-line-integrals-and-flux.md), [linalg-refresher 4.1](../linalg-refresher/lessons/04-01-inner-products-orthogonality.md) |
| Cross product and the right-hand rule (used for $\boldsymbol\tau$ and $\mathbf L$) | [linalg-refresher 1.4](../linalg-refresher/lessons/01-04-cross-product-and-orientation.md) — definition, components, and the $\mathbf a\times\mathbf b = \mathbf 0 \iff$ parallel test; applied to a moment in [statics 1.3](../statics/lessons/01-03-moment-of-a-force.md) |
| Second-order constant-coefficient ODEs; characteristic roots | [ode-refresher 2.1](../ode-refresher/lessons/02-01-second-order-constant-coefficient.md) |
| The damping discriminant and the three regimes | [ode-refresher 2.2](../ode-refresher/lessons/02-02-oscillations-damping.md) |
| Forced oscillation: transient vs. steady state, resonance curve | [ode-refresher 2.3](../ode-refresher/lessons/02-03-forcing-resonance.md) |
| Radians, unit-circle values, and the double-angle identity behind the range formula | [precalculus 3.1](../precalculus/lessons/03-01-trig-functions-for-calculus.md) |
| Resolving a vector into components; magnitude and direction | [precalculus 4.2](../precalculus/lessons/04-02-vectors-parametric-and-polar.md) |
| Ellipse anatomy: foci, semi-major axis, eccentricity | [precalculus 4.1](../precalculus/lessons/04-01-conic-sections.md) |
| Quadratics: roots, and the sum-of-roots shortcut used on the orbit equation | [precalculus 2.1](../precalculus/lessons/02-01-polynomial-functions.md) |

## Pitfalls

### Forces and diagrams

- $N = mg$ is a **special case**, not a definition — on a ramp $N = mg\cos\theta$, in an accelerating elevator $N = m(g\pm a)$. Always solve for it. *([1.2](lessons/01-02-newtons-laws.md), [1.3](lessons/01-03-applying-newtons-laws.md))*
- An action–reaction pair can never cancel: its two forces act on **different bodies**, so they never share a free-body diagram. The book's weight and the table's push are *not* a third-law pair. *([1.2](lessons/01-02-newtons-laws.md))*
- There is no "force of motion" pushing a coasting object along. A puck on frictionless ice coasts by the *first law*, with no forward force at all. *([1.2](lessons/01-02-newtons-laws.md))*
- Static friction is a **range**, $f_s\le\mu_s N$; only kinetic friction equals $\mu_k N$. Plugging in $\mu_s N$ before checking that it slips is the classic error. *([1.3](lessons/01-03-applying-newtons-laws.md))*
- Never draw a centrifugal or "centripetal" force outward on an inertial-frame diagram. Draw the real forces; "centripetal" only labels their inward sum, which equals $mv^2/r$. *([1.3](lessons/01-03-applying-newtons-laws.md), [5.2](lessons/05-02-orbits-effective-potential.md))*

### Kinematics

- Zero velocity does not mean zero acceleration — at the top of a throw $v=0$ while $a$ is still a full $g$ downward. *([1.1](lessons/01-01-kinematics.md))*
- The three constant-acceleration equations are a special case, not a definition. If $a$ varies with time or position, retreat to the integrals. *([1.1](lessons/01-01-kinematics.md))*
- Launching faster horizontally doesn't extend hang time; the vertical problem alone sets it. *([1.1](lessons/01-01-kinematics.md))*
- The bridge formulas $v = r\omega$ and the rotational kinematic equations work in **radians only** — convert revolutions and degrees first. *([4.1](lessons/04-01-rotational-dynamics.md))*

### Energy

- Only the component **along** the displacement does work; carrying a suitcase level does zero work. And work is signed — friction and braking do negative work, and the theorem needs the signs. *([2.1](lessons/02-01-work-energy.md))*
- A varying force needs the integral, not $Fd$ with an eyeballed average: a spring stores $\tfrac12 kx^2$, not $kx\cdot x$. *([2.1](lessons/02-01-work-energy.md))*
- Potential energy has no absolute value — pick the zero, then be consistent across both instants. *([2.2](lessons/02-02-potential-energy-conservation.md))*
- The minus sign in $F = -dU/dx$ is load-bearing: drop it and stable and unstable swap. *([2.2](lessons/02-02-potential-energy-conservation.md))*
- A turning point ($E = U$) is not an equilibrium ($U' = 0$) — at a turning point the force is generally nonzero, which is why the object reverses instead of staying. *([2.2](lessons/02-02-potential-energy-conservation.md))*
- $U = -GMm/r$ being negative is the physics, not a sign error: $U=0$ is the free state, so anything bound sits below it. *([5.1](lessons/05-01-gravitation-kepler.md))*

### Momentum and collisions

- Momentum is conserved in every collision; kinetic energy only in **elastic** ones. The two laws are independent — which is exactly why the ballistic pendulum needs one for each phase. *([2.3](lessons/02-03-momentum-collisions.md))*
- Momentum is a **vector**: fix a positive direction before adding, or a head-on approach will come out wrong. *([2.3](lessons/02-03-momentum-collisions.md))*
- Impulse is force *times duration* — doubling the contact time halves the force for the same $\Delta\mathbf p$. *([2.3](lessons/02-03-momentum-collisions.md))*

### Oscillations

- Amplitude appears nowhere in the period. A wider swing simply moves faster — until the small-angle truncation fails at large angles. *([3.1](lessons/03-01-simple-harmonic-motion.md))*
- $\omega$ (rad/s) and $f$ (Hz) differ by $2\pi$; the cosine takes $\omega$. *([3.1](lessons/03-01-simple-harmonic-motion.md))*
- Lose the minus sign in $F=-kx$ and you get $e^{\pm\omega t}$ — runaway, not oscillation. The restoring sign is the whole game. *([3.1](lessons/03-01-simple-harmonic-motion.md))*
- Three "frequencies" and they are all different: $\omega_{\text{res}} < \omega_d < \omega_0$. The resonance peak sits *below* the natural frequency unless damping is negligible. *([3.2](lessons/03-02-damped-driven-oscillations.md))*
- More damping is not always faster: past critical, the overdamped root lingers and the return is *slower*. *([3.2](lessons/03-02-damped-driven-oscillations.md))*
- The steady state oscillates at the **driving** frequency; $\omega_0$ only sets where the response is biggest. *([3.2](lessons/03-02-damped-driven-oscillations.md))*

### Rotation

- Torque is force *with leverage* — the same force gives zero torque if its line of action passes through the axis. Hunt for $r_\perp$. *([4.1](lessons/04-01-rotational-dynamics.md))*
- Moment of inertia is not a property of the body alone: a rod is $\tfrac1{12}M\ell^2$ about its center and $\tfrac13M\ell^2$ about its end. State the axis. *([4.1](lessons/04-01-rotational-dynamics.md))*
- Conserved angular momentum does **not** mean conserved energy — the skater's $K$ jumps because her muscles did work. Check the two conditions separately (no external torque vs. no non-conservative work). *([4.2](lessons/04-02-angular-momentum.md))*
- $v = R\omega$ holds only *without slipping*; a spinning or skidding tire breaks the link and friction starts doing work. *([4.2](lessons/04-02-angular-momentum.md))*
- Mass and radius never decide a rolling race — only the shape factor $c = I/MR^2$ does. *([4.2](lessons/04-02-angular-momentum.md))*

### Gravitation and orbits

- The orbiting mass cancels: a feather and a satellite at the same radius have the same speed and period. Only the *central* mass and the radius matter. *([5.1](lessons/05-01-gravitation-kepler.md))*
- Kepler III is (period)² ∝ (radius)³, not the reverse — twice as far out is $2^{3/2}\approx2.83$ times slower, not twice. *([5.1](lessons/05-01-gravitation-kepler.md))*
- Escape velocity is a speed, not a direction or a force; energy is a scalar, so any upward heading works. *([5.1](lessons/05-01-gravitation-kepler.md))*
- The centrifugal barrier is not a real outward force — it is the tangential inertia fixed by $L$, reappearing inside the radial equation. *([5.2](lessons/05-02-orbits-effective-potential.md))*
- $E<0$ is not exotic; it is "bound," measured against the convention $U(\infty)=0$. *([5.2](lessons/05-02-orbits-effective-potential.md))*
- Not every central force has stable circular orbits — an attraction falling off faster than $1/r^3$ has no minimum in $U_{\text{eff}}$ at all. *([5.2](lessons/05-02-orbits-effective-potential.md))*
