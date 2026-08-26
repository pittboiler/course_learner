# Astrodynamics · Lesson 4.5: The restricted three-body problem & Lagrange points

> ⏱ ~15 min · Module 4: Interplanetary trajectories & perturbations · Builds on: [4.1](04-01-sphere-of-influence-patched-conics.md), [1.4](01-04-energy-vis-viva-orbit-types.md), [`analytical-mechanics` 2.3](../../analytical-mechanics/lessons/02-03-energy-and-hamiltonian.md) · Unlocks: end of course

## Why this matters

Patched conics ([4.1](04-01-sphere-of-influence-patched-conics.md)) works by pretending only one body matters at a time. This lesson finally faces the case where two matter at once — and finds structure that the two-body world simply doesn't contain.

The payoff is concrete. JWST sits at Sun–Earth L2, 1.5 million km out, in permanent shade with the Sun, Earth, and Moon all behind it. SOHO watches the Sun uninterrupted from L1. Jupiter's Trojan asteroids — over ten thousand catalogued — sit at its L4 and L5. And the low-energy transfer network built out of these points is how missions like Genesis and GRAIL flew for a fraction of the usual delta-v.

None of this exists in the two-body problem. It's what you get when a third body is not a perturbation but a partner.

## The idea

Take two massive bodies in circular orbits about their common center of mass — say the Sun and Earth — and a third body so light it pulls on neither. That's the **circular restricted three-body problem** (CR3BP): "restricted" because the third mass is negligible, "circular" because the primaries' orbit is a circle.

Even this stripped-down version has no closed-form solution. But a change of viewpoint buys an enormous amount: work in a frame that **rotates with the two primaries**, so both sit still. Now instead of two moving attractors you have two fixed ones, plus the centrifugal and Coriolis forces the rotation introduces.

In that frame you can define an **effective potential** combining both gravities with the centrifugal term. The centrifugal term grows outward, the gravitational terms blow up at each body — so the surface has two deep wells and rises outward, and somewhere between and around them it has **five stationary points**. These are the **Lagrange points**: places where a stationary particle stays stationary, because gravity and centrifugal force exactly cancel.

Three of them ($L_1$, $L_2$, $L_3$) lie on the line through the two bodies. Two ($L_4$, $L_5$) sit at the apexes of equilateral triangles with the primaries — a result so unexpected that Lagrange found it in 1772 and nobody believed anything occupied such points until the Trojan asteroids turned up in 1906.

The energy bookkeeping also survives, in mutated form. There's no conserved energy in the rotating frame, but there *is* a conserved quantity: the **Jacobi constant**. Fixing it carves space into regions the spacecraft may visit and regions it cannot — **zero-velocity curves**, whose "necks" at $L_1$ and $L_2$ open and close as the energy changes. That gating structure is the skeleton of low-energy interplanetary transfers.

## The formal version

**Setup and nondimensionalization.** Two primaries $m_1 > m_2$ separated by a constant distance, orbiting their barycenter with angular rate $\omega$. Choose units so that the separation, the total mass, and $\omega$ are all 1, and define the **mass parameter**

$$\mu = \frac{m_2}{m_1+m_2}.$$

In the rotating frame with the barycenter at the origin and the primaries on the $x$-axis, $m_1$ sits at $x = -\mu$ and $m_2$ at $x = 1-\mu$. Distances from the spacecraft:

$$r_1 = \sqrt{(x+\mu)^2+y^2+z^2}, \qquad r_2 = \sqrt{(x-1+\mu)^2+y^2+z^2}.$$

**Equations of motion.** In the rotating frame,

$$\ddot x - 2\dot y = \frac{\partial\Omega}{\partial x}, \qquad \ddot y + 2\dot x = \frac{\partial\Omega}{\partial y}, \qquad \ddot z = \frac{\partial\Omega}{\partial z},$$

where the terms $\mp2\dot y, \pm2\dot x$ are **Coriolis** and

$$\Omega(x,y,z) = \frac{x^2+y^2}{2} + \frac{1-\mu}{r_1} + \frac{\mu}{r_2}$$

is the **effective potential** — centrifugal plus both gravities. *In words: two wells sitting in a bowl that rises outward, with a velocity-dependent sideways force on top.*

**The Jacobi constant.** Dot the velocity into the equations; the Coriolis terms drop out (they're always perpendicular to velocity, so they do no work), leaving one conserved quantity:

$$\boxed{\;C = 2\Omega(x,y,z) - v^2 = \text{constant},\;}$$

with $v$ the speed **in the rotating frame**. *In words: the three-body analogue of energy, conserved even though ordinary energy is not.* See [Jacobi constant](../reference.md#jacobi-constant).

**Zero-velocity curves.** Since $v^2 = 2\Omega - C \ge 0$, the spacecraft can only be where

$$2\Omega(x,y,z) \ge C.$$

The boundary $2\Omega = C$ is the **zero-velocity surface**, and the region beyond it is **forbidden** — not "hard to reach," but dynamically inaccessible without a burn. As $C$ decreases (more energy), the forbidden region shrinks and openings appear: first a neck at $L_1$ (letting the spacecraft pass between the two bodies), then at $L_2$ (letting it escape outward), then at $L_3$.

**The five Lagrange points.** Set all velocities and accelerations to zero: $\nabla\Omega = 0$.

*Collinear points* ($y = z = 0$) satisfy the quintic

$$x - \frac{(1-\mu)(x+\mu)}{|x+\mu|^3} - \frac{\mu(x-1+\mu)}{|x-1+\mu|^3} = 0,$$

with three real roots — $L_1$ between the bodies, $L_2$ beyond the smaller one, $L_3$ opposite. For small $\mu$, $L_1$ and $L_2$ sit near the smaller body at approximately

$$r_{L_{1,2}} \approx R\left(\frac{\mu}{3}\right)^{1/3},$$

the **Hill radius** — a different and smaller boundary than the sphere of influence of [4.1](04-01-sphere-of-influence-patched-conics.md), and the one that governs stability of satellites around the smaller body.

*Triangular points.* Remarkably, $L_4$ and $L_5$ are exact:

$$r_1 = r_2 = 1,$$

i.e. each forms an **equilateral triangle** with the two primaries, at $(x,y) = (\tfrac12 - \mu,\ \pm\tfrac{\sqrt3}{2})$ — independent of $\mu$ entirely.

| System | $L_1$ | $L_2$ | $L_3$ |
|---|---|---|---|
| Sun–Earth | 1,492,000 km sunward of Earth | 1,502,000 km anti-sunward | 149.6 million km, opposite side of the Sun |
| Earth–Moon | 58,000 km from the Moon | 64,500 km beyond the Moon | 381,700 km from Earth, opposite the Moon |

**Stability.**

- $L_1$, $L_2$, $L_3$ are **unstable saddle points**. A spacecraft drifts away exponentially, with an e-folding time of about 23 days at Sun–Earth L2. Station-keeping is cheap in delta-v (a few m/s per year) but must never stop.
- $L_4$, $L_5$ are **stable** — genuinely, thanks to the Coriolis force, which curls a drifting particle back into a slow loop (a "tadpole" orbit) rather than letting it fall away. The condition is

$$\frac{m_1}{m_2} > 24.96, \qquad\text{equivalently}\qquad \mu < 0.03852.$$

Sun–Jupiter has a ratio of 1047 and Earth–Moon has 81.3, so both are comfortably stable — hence the Jupiter Trojans (10,000-plus catalogued) and the Earth–Moon dust concentrations.

**The counterintuitive part.** $L_4$ and $L_5$ are *maxima* of the effective potential — you would expect a maximum to be unstable. It is the velocity-dependent Coriolis force that stabilizes them, which is why the stability analysis requires linearizing the full equations rather than just inspecting $\Omega$.

## Picture

![Zero-velocity curves in the rotating frame at two energies, showing the forbidden region pinching shut at L1 for the higher energy level and opening a further gate at L2 for the lower one, with all five Lagrange points marked and the equilateral triangles to L4 and L5 drawn](assets/04-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — where is Sun–Earth L2?).** With $m_\oplus/M_\odot = 3.0035\times10^{-6}$ and $R = 1.496\times10^8$ km, so $\mu = 3.0035\times10^{-6}$:

$$r_{L_2} \approx R\left(\frac{\mu}{3}\right)^{1/3} = 1.496\times10^8\left(1.00117\times10^{-6}\right)^{1/3} = 1.496\times10^8\times1.00039\times10^{-2} = 1.497\times10^6\ \mathrm{km}.$$

Solving the quintic exactly gives 1,502,000 km; the Hill-radius approximation is good to 0.4 percent.

**Why JWST lives there.** At L2 the Sun, Earth, and Moon are all in roughly the same direction, so a single sunshield blocks all three and the telescope's cold side sees only deep space — it runs at about 40 K passively. It orbits the *point* (a halo orbit of roughly 800,000 km radius) rather than sitting exactly at it, which keeps it out of Earth's shadow so the solar panels always work. Station-keeping costs a few m/s per year, and the mission is propellant-limited precisely by that budget.

*A subtlety worth noticing:* a body at 1.01 AU should, by Kepler's third law, take $1.01^{1.5} = 1.015$ years to orbit the Sun — slower than Earth. It doesn't, because Earth's gravity adds to the Sun's at that point, requiring a faster orbit, and the boost is exactly enough to synchronize it to one year. **That synchronization is what a Lagrange point *is*.**

**Example 2 (why you'd care — the Trojans and the stability criterion).** Sun–Jupiter has

$$\frac{m_1}{m_2} = \frac{1.989\times10^{30}}{1.898\times10^{27}} = 1048 \;\gg\; 24.96,$$

so $L_4$ and $L_5$ are stable. They are occupied: over 10,000 **Trojan asteroids** catalogued, in two swarms $60^\circ$ ahead of and behind Jupiter, which have survived there for essentially the age of the solar system.

Now test a system that fails the criterion. Pluto–Charon has $m_1/m_2 = 8.1$, well below 24.96 — its triangular points are unstable, and no Trojans accumulate there. Earth–Moon at 81.3 passes, and there is tentative evidence of faint dust concentrations (Kordylewski clouds) at Earth–Moon L4 and L5.

**Why the threshold exists at all.** Linearizing the equations about $L_4$ gives characteristic roots that are purely imaginary — bounded oscillation — only when $27\mu(1-\mu) < 1$. Below that threshold the two natural frequencies stay real and distinct and the motion is a bounded superposition of two loops; above it they merge into a complex pair and the amplitude grows exponentially. Setting $27\mu(1-\mu) = 1$ gives $\mu = (1-\sqrt{23/27})/2 = 0.038521$, i.e. a mass ratio of 24.96.

**Where this leads.** The unstable manifolds emanating from $L_1$ and $L_2$ form tubes through phase space, and a spacecraft that enters one is carried along it for free. Chaining these tubes across different systems gives the **Interplanetary Transport Network** — routes that cost almost no delta-v and take years rather than months. Genesis flew one; the Japanese Hiten mission was rescued into lunar orbit by one after a failed conventional insertion.

## Watch out

- **You might think Lagrange points are places where gravity cancels.** They're places where gravity plus the centrifugal force cancels **in the rotating frame**. In an inertial frame nothing cancels — a spacecraft at L2 is in a perfectly ordinary accelerated orbit around the Sun, just one synchronized to Earth's year.
- **You might expect a spacecraft to sit exactly at a Lagrange point.** Nothing does. $L_1$ and $L_2$ are unstable, so real missions fly halo or Lissajous orbits *around* them, which also avoids the communications problem of sitting exactly in line with the Sun.
- **You might confuse the Hill radius with the sphere of influence.** They're different quantities from different criteria: Earth's Hill radius is 1.5 million km, its SOI is 925,000 km. The SOI is about when to switch conics; the Hill radius is about what can stay gravitationally bound.
- **You might read $L_4$ and $L_5$ as potential minima.** They are *maxima* of $\Omega$. Their stability comes entirely from the Coriolis force, and no analysis of $\Omega$ alone can find it.
- **You might think the Jacobi constant is energy.** It's $2\Omega - v^2$ with $v$ measured in the **rotating** frame. Ordinary mechanical energy is not conserved in the CR3BP; the Jacobi constant is what replaces it.

## One-liner

> In a frame rotating with two primaries, gravity plus centrifugal force gives an effective potential with five stationary points and one conserved quantity — the Jacobi constant — whose level sets gate what the spacecraft can reach.

## Problems

**P1 (🟢)** Compute the mass parameter $\mu$ for the Earth–Moon system ($m_{\rm moon}/m_\oplus = 0.0123$), and use the Hill-radius approximation to estimate the distance from the Moon to Earth–Moon $L_1$ and $L_2$ (separation 384,400 km).

**P2 (🟡)** Determine whether $L_4$ and $L_5$ are stable in the Sun–Earth system, the Earth–Moon system, and a hypothetical binary star with a mass ratio of 3:1. State the criterion you used.

**P3 (🔴)** Show that $L_4$ and $L_5$ are located at $r_1 = r_2 = 1$ for *any* mass parameter $\mu$, by verifying that $\nabla\Omega = 0$ there. Then explain in one sentence why the location is independent of $\mu$ even though the stability is not.

<details>
<summary>Solutions</summary>

**P1**

$$\mu = \frac{m_{\rm moon}}{m_\oplus + m_{\rm moon}} = \frac{0.0123}{1.0123} = 0.012151.$$

$$r_{L_{1,2}} \approx R\left(\frac{\mu}{3}\right)^{1/3} = 384{,}400\,\left(4.0503\times10^{-3}\right)^{1/3} = 384{,}400\times0.159405 = 61{,}300\ \mathrm{km}.$$

*Check.* Solving the quintic exactly gives $L_1$ at 58,000 km and $L_2$ at 64,500 km from the Moon — the approximation lands between them, within 6 percent of each ✓. The asymmetry (L2 farther than L1) is a $\mu^{2/3}$ correction that the leading-order Hill formula cannot capture, and it grows with $\mu$: for Sun–Earth ($\mu$ four thousand times smaller) the two distances differ by under 1 percent.

Note also that 61,300 km is close to — but distinct from — the Moon's sphere of influence at 66,200 km ([4.1](04-01-sphere-of-influence-patched-conics.md), P2). Different criteria, similar scale.

**P2** The criterion is $m_1/m_2 > 24.96$, equivalently $\mu < 0.03852$, equivalently $27\mu(1-\mu)<1$.

| System | $m_1/m_2$ | $\mu$ | Stable? |
|---|---|---|---|
| Sun–Earth | $3.33\times10^5$ | $3.00\times10^{-6}$ | **Yes**, overwhelmingly |
| Earth–Moon | 81.3 | 0.01215 | **Yes** |
| Binary star 3:1 | 3 | 0.25 | **No** |

For the binary star, $27\mu(1-\mu) = 27(0.25)(0.75) = 5.06 > 1$ ✓ confirming instability. A particle placed at its L4 would grow away exponentially, so no Trojan population can accumulate in a close binary of comparable masses.

*Check.* Earth–Moon at 81.3 clears the threshold by a factor of 3.3 — comfortably but not enormously ✓, consistent with Kordylewski dust clouds being faint and hard to confirm: the stability there is real but weak, and solar perturbations (which the CR3BP ignores entirely) disrupt the swarms.

**P3** Work in the plane ($z=0$). Write $\Omega$ using $r_1$ and $r_2$ explicitly:

$$\Omega = \frac{x^2+y^2}{2} + \frac{1-\mu}{r_1} + \frac{\mu}{r_2}, \quad r_1^2 = (x+\mu)^2+y^2, \quad r_2^2 = (x-1+\mu)^2+y^2.$$

Using $\partial r_1/\partial x = (x+\mu)/r_1$ and $\partial r_2/\partial x = (x-1+\mu)/r_2$:

$$\frac{\partial\Omega}{\partial x} = x - \frac{(1-\mu)(x+\mu)}{r_1^3} - \frac{\mu(x-1+\mu)}{r_2^3},$$

$$\frac{\partial\Omega}{\partial y} = y\left[1 - \frac{1-\mu}{r_1^3} - \frac{\mu}{r_2^3}\right].$$

Now set $r_1 = r_2 = 1$. The $y$-equation gives immediately

$$1 - (1-\mu) - \mu = 0 \;\checkmark$$

for **any** $\mu$, and any $y$. The $x$-equation becomes

$$x - (1-\mu)(x+\mu) - \mu(x-1+\mu) = x - (1-\mu)x - \mu^2 + \mu^2 - \mu x + \mu - \mu^2$$
$$= x\big[1 - (1-\mu) - \mu\big] + \mu - \mu^2 - \mu^2 + \mu^2 \cdots$$

Cleaner to expand directly:

$$x - (1-\mu)x - (1-\mu)\mu - \mu x + \mu(1-\mu) = x\big[1-(1-\mu)-\mu\big] - \mu(1-\mu) + \mu(1-\mu) = 0. \;\checkmark$$

Both partials vanish identically, for any $\mu$. It remains to check that $r_1 = r_2 = 1$ is geometrically realizable: with the primaries at $x=-\mu$ and $x = 1-\mu$, unit distance from both requires

$$(x+\mu)^2+y^2 = 1 = (x-1+\mu)^2+y^2 \;\Longrightarrow\; x = \tfrac12 - \mu, \quad y = \pm\frac{\sqrt3}{2},$$

the two apexes of the equilateral triangle on the unit baseline. $\blacksquare$

**Why the location is $\mu$-independent but the stability is not.** The location follows from the *cancellation* above, in which $\mu$ appears only through $(1-\mu) + \mu = 1$ — the total mass, which is 1 by our choice of units. Stability, by contrast, depends on the *second* derivatives of $\Omega$ and on the Coriolis coupling, and those involve $(1-\mu)$ and $\mu$ in combinations that do **not** collapse — specifically the discriminant $1 - 27\mu(1-\mu)$, which is the quantity that changes sign at $\mu = 0.03852$.

*Check.* The result "equilateral triangle, any mass ratio" is why $L_4$ and $L_5$ sit at exactly $60^\circ$ ahead of and behind the secondary in every system, from Sun–Jupiter to Earth–Moon ✓ — an exact statement in a subject where almost nothing else is.

</details>

## Flashback

**From Lesson 3.5 (Relative motion & the CW equations):** A chaser is 3 km above a target in a circular orbit of radius 7000 km, with zero relative velocity. Find the along-track drift after one orbit, and the along-track kick that would close the relative orbit.

<details>
<summary>Solution</summary>

$$n = \sqrt{\frac{398{,}600}{7000^3}} = \sqrt{\frac{398{,}600}{3.43\times10^{11}}} = 1.07793\times10^{-3}\ \mathrm{rad/s}.$$

After one orbit ($nt = 2\pi$), with $x_0 = 3$ km and all other initial values zero:

$$y(T) = 6(\sin 2\pi - 2\pi)x_0 = -12\pi(3) = -113.1\ \mathrm{km}.$$

The chaser falls **113 km behind** while remaining 3 km up.

The no-drift condition is $\dot y_0 = -2nx_0$:

$$\dot y_0 = -2(1.07793\times10^{-3})(3) = -6.468\times10^{-3}\ \mathrm{km/s} = -6.47\ \mathrm{m/s},$$

a retrograde kick, producing a closed $2{:}1$ ellipse of radial semi-axis 3 km and along-track semi-axis 6 km.

*Check.* Linear in $x_0$: three times the 1-km case's 37.7 km gives 113.1 km ✓, and three times its 2.26 m/s kick would be 6.79 m/s — not quite matching, because that case used $r = 6778$ km with a slightly larger $n$; recomputing at $r = 7000$ km gives exactly $-6.47$ m/s ✓. Both this lesson and 3.5 are stories about a rotating frame where an "equilibrium" needs the velocity right, not just the position. ✓

</details>

## Connections

- **Backward:** this is where the two-body assumption of [1.1](01-01-relative-two-body-problem.md) finally breaks, and where [4.1](04-01-sphere-of-influence-patched-conics.md)'s patching is replaced by an honest three-body treatment; the rotating-frame idea is the same move as [3.5](03-05-relative-motion-cw-equations.md)'s LVLH frame, one scale up.
- **Forward:** this closes the course. The natural continuations are perturbation theory in full (Lagrange planetary equations), optimal control for low-thrust trajectories, and dynamical-systems methods for the transport network.
- **Sideways (analytical mechanics):** the Jacobi constant is the **Jacobi integral** of a Lagrangian in a rotating frame — the conserved quantity you get when the Lagrangian has no explicit time dependence but the frame is non-inertial, so it is not the energy. See [`analytical-mechanics` 2.3](../../analytical-mechanics/lessons/02-03-energy-and-hamiltonian.md). And the CR3BP is the historical birthplace of chaos: Poincaré's 1890 study of it is where he discovered that deterministic systems can be unpredictable ([`dynamical-systems` 1.1](../../dynamical-systems/lessons/01-01-flows-on-the-line.md)).
