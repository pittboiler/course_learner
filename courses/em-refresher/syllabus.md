# Electromagnetism — Syllabus

> Tier 0 · 12 lessons · Prereqs: [`calc-refresher`](../calc-refresher/syllabus.md), [`ode-refresher`](../ode-refresher/syllabus.md) · Roadmap id: `em-refresher`

## Goal

Assemble electromagnetism from Coulomb's law up to Maxwell's four equations and the electromagnetic waves they predict — understanding what each equation *means* physically, not just how to push its symbols. Covers electrostatics, capacitance and light DC/RC circuits, magnetism and induction, then the Maxwell synthesis and light. This course is where your vector calculus pays off: Gauss's law **is** the divergence theorem, Ampère's and Faraday's laws **are** Stokes' theorem, and the field is a gradient. It feeds `analytical-mechanics`, `quantum-mechanics`, and `relativity`. Deliberately skipped: heavy boundary-value problem techniques (separation of variables in detail), radiation from accelerating charges beyond a mention, and materials/waveguide engineering.

## Dangerous Checklist

When you finish, you can:

- [ ] Compute the electric field and force for point charges and simple distributions
- [ ] Use Gauss's law to get the field of a symmetric charge distribution
- [ ] Relate field, potential, and potential energy, and compute work moving a charge
- [ ] Find capacitance and the energy stored in a capacitor; handle dielectrics
- [ ] Analyze DC circuits with Ohm's law and Kirchhoff's rules
- [ ] Solve an RC circuit's charging/discharging transient with an ODE
- [ ] Find the magnetic force on charges and currents, and the motion of a charge in a field
- [ ] Use Biot–Savart and Ampère's law to get the field of a current
- [ ] Apply Faraday's and Lenz's laws to compute an induced EMF
- [ ] State all four Maxwell equations, explain each, and derive the wave equation and $c=1/\sqrt{\mu_0\varepsilon_0}$

## Modules

### Module 1: Electrostatics

Charges at rest, and the field they make.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Charge, Coulomb's law, and the electric field | Compute forces and fields from charges | charge, Coulomb's law, electric field, superposition, field lines |
| 1.2 | Gauss's law | Exploit symmetry to get fields fast (= the divergence theorem) | electric flux, Gauss's law, symmetry (sphere/line/plane), $\nabla\cdot\mathbf E=\rho/\varepsilon_0$ |
| 1.3 | Electric potential and energy | Relate field, potential, and the work to move a charge | potential, $\mathbf E=-\nabla V$, potential energy, equipotentials |

**Boss problem 1:** Use Gauss's law to find the field inside and outside a uniformly charged sphere, then integrate to get the potential — and connect the Gaussian-surface argument to the divergence theorem from `calc-refresher` 5.3.

### Module 2: Capacitance and circuits

Storing charge, and pushing it around — circuits, lightly.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Conductors, capacitance, and dielectrics | Compute capacitance and stored energy | conductors, capacitance, energy density, dielectrics |
| 2.2 | Current, resistance, and DC circuits | Solve resistor networks with Ohm and Kirchhoff | current, resistance, Ohm's law, Kirchhoff's rules, power |
| 2.3 | RC circuits and transients | Solve charging/discharging with a first-order ODE | RC circuit, time constant, exponential transient (ODE link) |

**Boss problem 2:** A capacitor charges through a resistor from a battery — set up and solve the first-order ODE for $q(t)$, identify the time constant, and find the energy delivered vs. dissipated.

### Module 3: Magnetism and induction

Moving charges, magnetic fields, and the link back to electricity.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Magnetic force and the motion of charges | Find magnetic forces and trace a charge's path | magnetic field, Lorentz force, circular/helical motion, velocity selector |
| 3.2 | Sources of magnetic field | Get the field of a current (= Stokes' theorem) | Biot–Savart law, Ampère's law, field of wire/solenoid |
| 3.3 | Electromagnetic induction | Turn a changing flux into an EMF | magnetic flux, Faraday's law, Lenz's law, motional EMF, inductance |

**Boss problem 3:** A conducting rod slides on rails through a uniform magnetic field — find the motional EMF, the induced current, and the retarding force, and show energy is conserved (mechanical work → electrical dissipation).

### Module 4: Maxwell's equations and light

The synthesis, and the waves it predicts.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Maxwell's equations complete | Assemble all four and add the displacement current | displacement current, the four equations, integral ↔ differential forms |
| 4.2 | Electromagnetic waves | Derive the wave equation and get the speed of light | wave equation from Maxwell, $c=1/\sqrt{\mu_0\varepsilon_0}$, transverse $\mathbf E\perp\mathbf B$ |
| 4.3 | Energy, momentum, and the Poynting vector | Track where the energy in the field flows | energy density, Poynting vector, radiation pressure, the EM spectrum |

**Boss problem 4:** Starting from Maxwell's equations in vacuum, derive the wave equation for $\mathbf E$, read off $c=1/\sqrt{\mu_0\varepsilon_0}$, and use the Poynting vector to find the energy flux of a plane wave — explaining what "light is an electromagnetic wave" means concretely.

## Sources of truth

- Griffiths, *Introduction to Electrodynamics* (the standard; notation and rigor level)
- Purcell & Morin, *Electricity and Magnetism* (physical intuition, the field-first register)
- 3Blue1Brown / textbook vector calculus for the Gauss ↔ divergence, Ampère/Faraday ↔ Stokes bridges
