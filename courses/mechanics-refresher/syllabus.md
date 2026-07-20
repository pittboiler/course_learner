# Newtonian Mechanics — Syllabus

> Tier 0 · 12 lessons · Prereqs: [`calc-refresher`](../calc-refresher/syllabus.md), [`ode-refresher`](../ode-refresher/syllabus.md) · Roadmap id: `mechanics-refresher`

## Goal

Rebuild classical mechanics as the physics of $\mathbf F = m\mathbf a$ and the conservation laws that shortcut it. From kinematics and free-body diagrams through energy and momentum, oscillations, rigid-body rotation, and gravitation/central forces — the mechanics that `analytical-mechanics` (Lagrangian/Hamiltonian) reformulates and that every physics course assumes. Emphasis on setting up problems (choose coordinates, draw the forces, pick the conserved quantity) and on the calculus/ODE machinery underneath (SHM *is* a second-order ODE; energy *is* a work integral). Deliberately skipped: the Lagrangian/Hamiltonian reformulation (that's `analytical-mechanics`), non-inertial-frame fictitious forces beyond a mention, and continuum/fluid mechanics.

## Dangerous Checklist

When you finish, you can:

- [ ] Describe motion with position/velocity/acceleration vectors and solve projectile and circular motion
- [ ] Draw a correct free-body diagram and apply Newton's laws to connected/inclined/friction systems
- [ ] Use the work–energy theorem and energy conservation to shortcut a force problem
- [ ] Read a potential-energy curve for equilibria, turning points, and stability
- [ ] Apply momentum conservation and impulse to collisions (elastic and inelastic)
- [ ] Set up and solve simple harmonic motion, and identify $\omega$ for a spring or pendulum
- [ ] Analyze damped and driven oscillations, including resonance
- [ ] Compute torque, moment of inertia, and angular acceleration for a rigid body
- [ ] Apply conservation of angular momentum, and handle rolling without slipping
- [ ] Use Newtonian gravitation and Kepler's laws, and read an effective-potential diagram for orbits

## Modules

### Module 1: Kinematics and Newton's laws

Describe motion, then explain it with forces.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Kinematics | Describe motion with vectors and calculus; solve projectiles | position/velocity/acceleration, kinematic equations, projectile motion |
| 1.2 | Newton's laws and free-body diagrams | Turn a physical setup into $\sum\mathbf F = m\mathbf a$ | Newton's three laws, free-body diagram, inertial frames |
| 1.3 | Applying Newton's laws | Solve inclines, friction, tension, and circular motion | friction, tension/normal forces, connected masses, centripetal force |

**Boss problem 1:** Two masses connected over a pulley, one on an inclined plane with friction — draw both free-body diagrams and solve for the acceleration and the tension.

### Module 2: Energy and momentum

The two great bookkeeping shortcuts around $\mathbf F = m\mathbf a$.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Work and kinetic energy | Compute work as a force integral and use the work–energy theorem | work, kinetic energy, work–energy theorem, power |
| 2.2 | Potential energy and conservation | Trade kinetic for potential energy and read a potential curve | potential energy, conservative forces, energy conservation, turning points |
| 2.3 | Momentum, impulse, and collisions | Use momentum conservation for collisions and impulsive forces | momentum, impulse, elastic/inelastic collisions, center of mass |

**Boss problem 2:** A ballistic pendulum — a bullet embeds in a hanging block (momentum), which then swings up (energy). Find the bullet's speed and explain which quantity is conserved in each phase and why.

### Module 3: Oscillations

The motion that recurs everywhere, powered by your ODE toolkit.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Simple harmonic motion | Recognize SHM, find $\omega$, and read amplitude/phase/energy | Hooke's law, $\omega=\sqrt{k/m}$, pendulum, energy in SHM |
| 3.2 | Damped and driven oscillations | Classify damping and locate resonance | damping regimes, driven oscillator, resonance, quality factor |

**Boss problem 3:** A mass on a spring in a viscous medium, driven sinusoidally — find the natural frequency, classify the damping, and find the driving frequency that maximizes amplitude.

### Module 4: Rotation

Newton's laws for spinning rigid bodies.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Rotational dynamics | Rotate the whole framework: torque, inertia, $\tau = I\alpha$ | rotational kinematics, torque, moment of inertia, $\tau=I\alpha$ |
| 4.2 | Angular momentum and rolling | Conserve angular momentum and handle rolling without slipping | angular momentum, conservation, rolling, rotational + translational energy |

**Boss problem 4:** A solid cylinder rolls without slipping down an incline — use energy (rotational + translational) to find its acceleration, and compare it to a frictionless slide.

### Module 5: Gravitation and central forces

The force that runs the solar system.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Gravitation and Kepler's laws | Use Newtonian gravity and derive Kepler's third law | universal gravitation, gravitational PE, Kepler's laws, circular orbits |
| 5.2 | Orbits and the effective potential | Read orbit shapes from energy and angular momentum | central force, effective potential, conic-section orbits, escape velocity |

**Boss problem 5:** Derive Kepler's third law ($T^2\propto a^3$) for a circular orbit from $\mathbf F=m\mathbf a$ and gravitation; then use the effective-potential picture to explain why a bound orbit has both a closest and a farthest approach.

## Sources of truth

- Kleppner & Kolenkow, *An Introduction to Mechanics* (rigor and problem style)
- Morin, *Introduction to Classical Mechanics* (problem-solving register)
- Taylor, *Classical Mechanics* (oscillations, central forces, the bridge toward `analytical-mechanics`)
