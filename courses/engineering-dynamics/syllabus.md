# Engineering Dynamics — Syllabus

> Engineering · Tier 0 · ~13 lessons · Prereqs: [calc-refresher](../calc-refresher/syllabus.md), [ode-refresher](../ode-refresher/syllabus.md) · Roadmap id: `engineering-dynamics`

## Goal

Take the "everything is in motion" half of mechanics and make it computational: given forces, predict trajectories; given motion, back out the forces. You'll model particles and 2D rigid bodies with the three great bookkeeping systems — force–acceleration, work–energy, impulse–momentum — and finish by watching a spring-mass system oscillate, decay, and blow up at resonance. Deliberately skipped: 3D rigid-body and gyroscopic dynamics beyond a mention, and the entire Lagrangian/Hamiltonian reformulation (that's [analytical-mechanics](../analytical-mechanics/syllabus.md)). This is the Newtonian companion to [mechanics-refresher](../mechanics-refresher/syllabus.md), builds directly on [statics](../statics/syllabus.md), and feeds [control-systems](../control-systems/syllabus.md) and [robotics](../robotics/syllabus.md).

## Dangerous Checklist

When you finish, you can:

- [ ] Integrate a particle's acceleration through the three cases — $a(t)$, $a(v)$, $a(x)$ — to recover velocity and position
- [ ] Decompose curvilinear motion into normal–tangential and polar components and say what each term physically means
- [ ] Draw a matched free-body / kinetic-diagram pair and write the equations of motion in whatever coordinate system fits the geometry
- [ ] Choose between work–energy, impulse–momentum, and $F=ma$ for a given problem and justify the choice
- [ ] Compute the work of a force, identify conservative forces, and use potential energy to shortcut a problem
- [ ] Solve a direct or oblique impact using conservation of momentum and the coefficient of restitution
- [ ] Locate the instantaneous center of zero velocity and use it to find any point's velocity on a rigid body
- [ ] Relate velocities and accelerations of two points on a rigid body, including a rolling-without-slipping constraint
- [ ] Compute a mass moment of inertia by integration, composite bodies, and the parallel-axis theorem
- [ ] Write and solve the 2D rigid-body equations of motion for translation, fixed-axis rotation, and general plane motion
- [ ] Find a system's natural frequency and damping ratio, and classify it as under-, critically, or over-damped
- [ ] Compute a forced system's steady-state amplitude and explain why it peaks near resonance

## Modules

### Module 1: Particle Kinematics

Motion described without asking why — position, velocity, acceleration, and the coordinate systems that make curved paths tractable.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Rectilinear Motion | Recover $v$ and $x$ from any of $a(t)$, $a(v)$, $a(x)$ | position/velocity/acceleration, kinematic integration, $v\,dv = a\,dx$ |
| 1.2 | Curvilinear Motion & Projectiles | Track a particle on a plane curve using rectangular components | position vector, component velocity/acceleration, projectile motion |
| 1.3 | Normal–Tangential & Polar Coordinates | Split acceleration along the path and across it, and work in $r$–$\theta$ | $a_t$, $a_n = v^2/\rho$, radius of curvature, radial/transverse components |

**Boss problem 1:** A car rounds a circular track of radius $\rho = 300\text{ m}$, speeding up uniformly from $15\text{ m/s}$. At the instant its speed is $20\text{ m/s}$ the magnitude of its total acceleration is $2\text{ m/s}^2$. Find the tangential acceleration, the distance traveled since $15\text{ m/s}$, and the elapsed time. *(Answer: $a_n = 1.33\text{ m/s}^2$, so $a_t = \sqrt{2^2 - 1.33^2} = 1.49\text{ m/s}^2$; $v^2 = v_0^2 + 2a_t s \Rightarrow s = 58.7\text{ m}$; $t = (20-15)/1.49 = 3.35\text{ s}$.)*

### Module 2: Particle Kinetics

Now forces enter. The same motion, three accounting systems — instantaneous ($F=ma$), path-integrated (work–energy), time-integrated (impulse–momentum) — plus what happens when two particles collide.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Newton's Second Law for Particles | Build FBD/kinetic-diagram pairs and solve equations of motion | $\sum \mathbf{F} = m\mathbf{a}$, kinetic diagram, EOM in rect./n-t/polar |
| 2.2 | Work, Energy & Power | Use $U = \Delta T$ to skip the acceleration entirely | work of a force, kinetic energy, conservative forces, potential energy, power & efficiency |
| 2.3 | Linear Impulse & Momentum | Trade a force–time integral for a change in momentum | impulse $\int \mathbf{F}\,dt$, $m\mathbf{v}$, conservation of linear momentum |
| 2.4 | Impact | Resolve collisions with restitution and momentum conservation | direct vs oblique impact, coefficient of restitution $e$, energy loss |

**Boss problem 2:** A ballistic pendulum. A $0.05\text{ kg}$ bullet moving at $400\text{ m/s}$ embeds in a $5\text{ kg}$ block hanging from a cord. Find the block's speed just after impact, the height it swings to, and the fraction of the original kinetic energy lost. *(Answer: plastic-impact momentum $0.05\cdot400 = 5.05\,v' \Rightarrow v' = 3.96\text{ m/s}$; energy after impact $\tfrac12(5.05)(3.96)^2 = 39.6\text{ J} \Rightarrow h = v'^2/2g = 0.80\text{ m}$; initial KE $= 4000\text{ J}$, so $\approx 99\%$ lost. Combines impulse–momentum with work–energy.)*

### Module 3: Rigid-Body Kinematics & Kinetics (2D)

A rigid body is a particle plus rotation. First describe the motion of every point, then connect it to force and torque through the mass moment of inertia.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Rotation & the Instantaneous Center | Find any point's velocity via relative velocity or the IC | fixed-axis rotation, $\mathbf{v}_B = \mathbf{v}_A + \boldsymbol\omega \times \mathbf{r}_{B/A}$, instantaneous center of zero velocity |
| 3.2 | Relative Acceleration & Rolling | Add the relative-acceleration equation and rolling constraints | $\mathbf{a}_B = \mathbf{a}_A + \boldsymbol\alpha\times\mathbf{r} + \boldsymbol\omega\times(\boldsymbol\omega\times\mathbf{r})$, rolling without slipping |
| 3.3 | Mass Moment of Inertia | Compute $I$ by integration, composites, and parallel-axis | $I = \int r^2\,dm$, radius of gyration, parallel-axis theorem, composite bodies |
| 3.4 | Rigid-Body Kinetics in 2D | Write and solve the force + moment equations of plane motion | $\sum\mathbf{F} = m\mathbf{a}_G$, $\sum M_G = I_G\alpha$, translation / rotation / general plane motion |

**Boss problem 3:** A uniform cylinder of mass $m$ and radius $r$ rolls without slipping down an incline of angle $\theta$. Find the acceleration of its center, the required friction force, and the minimum $\mu_s$ that keeps it rolling. *(Answer: use $I_G = \tfrac12 mr^2$ and $a = r\alpha$. Along incline $mg\sin\theta - f = ma$; moment about $G$ gives $fr = \tfrac12 mr^2(a/r) \Rightarrow f = \tfrac12 ma$. Combine: $a = \tfrac23 g\sin\theta$, $f = \tfrac13 mg\sin\theta$, and no-slip requires $\mu_s \ge \tfrac13\tan\theta$. Ties together MoI, the rolling constraint, and 2D kinetics.)*

### Module 4: Mechanical Vibrations

The differential-equation payoff: a mass on a spring is a second-order ODE, and its behavior — oscillate, decay, resonate — is the reason [control-systems](../control-systems/syllabus.md) cares about dynamics at all.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Free Vibration: Undamped & Damped | Derive $m\ddot x + c\dot x + kx = 0$ and classify its response | SHM, natural frequency $\omega_n = \sqrt{k/m}$, damping ratio $\zeta$, under/critical/over-damped, log decrement |
| 4.2 | Forced Vibration & Resonance | Compute steady-state amplitude and locate resonance | harmonic forcing, magnification factor, resonance, phase lag |

**Boss problem 4:** A $10\text{ kg}$ mass sits on a spring $k = 1000\text{ N/m}$ with a viscous damper $c = 60\ \text{N·s/m}$. Find $\omega_n$, the damping ratio $\zeta$, and the damped natural frequency $\omega_d$. Then a harmonic force $F_0 = 100\text{ N}$ is applied at $\omega = \omega_n$; find the steady-state amplitude. *(Answer: $\omega_n = \sqrt{1000/10} = 10\text{ rad/s}$; $c_c = 2\sqrt{km} = 200 \Rightarrow \zeta = 0.3$, underdamped; $\omega_d = \omega_n\sqrt{1-\zeta^2} = 9.54\text{ rad/s}$. At $\omega = \omega_n$ the amplitude is $X = (F_0/k)/(2\zeta) = 0.1/0.6 = 0.167\text{ m}$, a magnification of $1.67$. Combines free-vibration parameters with the forced-response peak.)*

## Sources of truth

- **Hibbeler, *Engineering Mechanics: Dynamics*** — primary for notation, sign conventions, and the FBD/kinetic-diagram discipline.
- **Beer, Johnston, Cornwell, *Vector Mechanics for Engineers: Dynamics*** — vector-first treatment of relative motion and rigid-body kinematics.
- **Meriam & Kraige, *Engineering Mechanics: Dynamics*** — cross-check for problem style and the work–energy / impulse–momentum framing.
- **Rao, *Mechanical Vibrations*** (Ch. 2–3) — the vibrations module's rigor level for free and forced single-DOF systems.
