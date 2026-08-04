# Astrodynamics — Syllabus

> Engineering · Tier 2 · ~20 lessons · Prereqs: [mechanics-refresher](../mechanics-refresher/syllabus.md), [ode-refresher](../ode-refresher/syllabus.md) · Roadmap id: `orbital-mechanics`

## Goal

Take a spacecraft from a position-and-velocity snapshot to a full description of where it is, where it's going, and what it costs to send it somewhere else. You'll master the two-body problem end to end — orbits as conic sections, the six classical elements, time-of-flight through Kepler's equation — then design real maneuvers (Hohmann, bi-elliptic, plane changes), rendezvous with the Clohessy–Wiltshire equations, and stitch together interplanetary trajectories with patched conics and gravity assists. It deliberately stops short of full perturbation theory (only a taste of J₂ and drag) and skips spacecraft attitude dynamics entirely — this is about the orbit, not the pointing.

## Dangerous Checklist

When you finish, you can:

- [ ] Reduce the two-body problem to a single relative equation of motion and explain why the orbit lies in a fixed plane.
- [ ] Derive the orbit equation and classify an orbit as circle, ellipse, parabola, or hyperbola from its energy and eccentricity.
- [ ] Compute an orbit's size, shape, and period, and use vis-viva to get speed at any radius.
- [ ] Convert between a state vector (r, v) and the six classical orbital elements, in both directions.
- [ ] Solve Kepler's equation for the eccentric anomaly and get time-of-flight between any two points on an orbit.
- [ ] Handle parabolic and hyperbolic time-of-flight with universal variables.
- [ ] Design a Hohmann transfer and compute its two-burn Δv budget.
- [ ] Decide when a bi-elliptic transfer beats a Hohmann, and size a combined plane-change-plus-raise maneuver.
- [ ] Propagate close-proximity relative motion and plan a rendezvous with the Clohessy–Wiltshire equations.
- [ ] Build an interplanetary trajectory by patching conics across spheres of influence, and estimate the departure/arrival Δv and launch phasing.
- [ ] Explain how a gravity assist changes a spacecraft's heliocentric speed without spending fuel.
- [ ] Estimate J₂-driven nodal regression and apsidal rotation, and locate the five Lagrange points of the restricted three-body problem.

## Modules

### Module 1: The two-body problem & orbits

Build the orbit from Newton's law of gravitation — the equation of motion, the conserved quantities that pin it down, and the conic-section geometry that falls out.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The relative two-body problem | Reduce two gravitating masses to one equation for the relative position | two-body → relative motion, reduced mass, gravitational parameter μ, $\ddot{\mathbf{r}}=-\mu\mathbf{r}/r^3$ |
| 1.2 | Angular momentum & Kepler's second law | Show the orbit is planar and areal velocity is constant | specific angular momentum $\mathbf{h}$, orbit plane, equal-areas law |
| 1.3 | The orbit equation & conic sections | Derive $r(\theta)$ and read off the conic | eccentricity vector, orbit equation, semi-latus rectum $p$, true anomaly $\theta$ |
| 1.4 | Energy, vis-viva & orbit types | Get speed at any radius and classify by energy | specific energy $\varepsilon$, vis-viva $v^2=\mu(2/r-1/a)$, bound vs. escape |
| 1.5 | Kepler's laws & orbital period | Assemble the three laws and compute the period | semi-major axis, period $T=2\pi\sqrt{a^3/\mu}$, mean motion $n$ |

**Boss problem 1:** A satellite is tracked at radius $r=7000$ km moving at $v=9.0$ km/s (Earth, $\mu=398600\ \mathrm{km^3/s^2}$, $R_\oplus=6378$ km). (a) Is the orbit bound? (b) Find the semi-major axis from vis-viva. (c) Given the flight-path angle is zero at this instant, decide whether this point is perigee or apogee (compare with the local circular speed), then find the eccentricity and the perigee and apogee altitudes.

### Module 2: Orbit determination & time-of-flight

Turn the orbit's geometry into a bookkeeping system — six numbers that fix an orbit in space — and solve the one genuinely transcendental problem in the subject: where is the spacecraft *when*?

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The classical orbital elements | Name the six numbers and what each controls | $a, e, i, \Omega, \omega, \theta$; shape, size, orientation |
| 2.2 | The orbit in three dimensions | Rotate from the perifocal frame into an Earth-centered inertial frame | perifocal (PQW) frame, 3-1-3 rotation, ECI coordinates |
| 2.3 | State vectors ↔ orbital elements | Convert (r, v) to elements and back | node vector, eccentricity vector, quadrant checks, algorithm both ways |
| 2.4 | Kepler's equation & the eccentric anomaly | Get time-of-flight on an ellipse | eccentric anomaly $E$, $M=E-e\sin E$, Newton iteration, $\theta\leftrightarrow E$ |
| 2.5 | Universal variables & time-of-flight | One time-of-flight formula for every conic | universal anomaly $\chi$, Stumpff functions, parabolic & hyperbolic cases |

**Boss problem 2:** Take the orbit from Boss 1 ($a=12120$ km, $e=0.4225$, $\mu=398600$). (a) Compute the period. (b) Find the time elapsed since perigee passage when the true anomaly is $\theta=90^\circ$ — convert $\theta\to E$, apply Kepler's equation for the mean anomaly, then $t=M/n$. (c) Roughly what fraction of the period is that, and why is it less than a quarter?

### Module 3: Maneuvers & rendezvous

Change the orbit on purpose. Model burns as instantaneous velocity kicks, then build the classic transfers and the linearized machinery for flying two spacecraft together.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Impulsive maneuvers & the Δv budget | Model a burn as a velocity kick and total up its cost | impulsive approximation, $\Delta\mathbf{v}$, tangential vs. radial burns, rocket-equation link |
| 3.2 | Hohmann transfers | Design the two-burn minimum-energy coplanar transfer | transfer ellipse, perigee/apogee burns, transfer time |
| 3.3 | Bi-elliptic transfers | Find the ratio where three burns beat two | bi-elliptic geometry, break-even ratio $r_b/r_1$, time cost |
| 3.4 | Plane changes & combined maneuvers | Cost a change of orbital plane and fold it into a raise | inclination change $\Delta v = 2v\sin(\Delta i/2)$, why to turn at apogee, combined burn |
| 3.5 | Relative motion & the CW equations | Propagate and null out close-proximity relative motion | LVLH frame, Clohessy–Wiltshire equations, two-impulse rendezvous |

**Boss problem 3:** A spacecraft in a 300-km circular LEO ($r_1=6678$ km) transfers to GEO ($r_2=42164$ km); the LEO is inclined $28.5^\circ$ to the equator ($\mu=398600$). (a) Compute the two Δv's and the total for a coplanar Hohmann transfer. (b) Now perform the $28.5^\circ$ plane change *combined* with the apogee raise burn (vector-sum the two velocity changes) and compare the total Δv with doing the plane change as a separate burn. (c) In one sentence, say why the plane change is done at apogee.

### Module 4: Interplanetary trajectories & perturbations

Leave Earth. Patch two-body arcs across spheres of influence to cross the solar system, steal energy from a planet's motion with a gravity assist, and see the first two ways real orbits drift from the ideal ellipse.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Sphere of influence & patched conics | Split an interplanetary trip into two-body arcs | sphere of influence radius, patched-conic method, heliocentric vs. planetocentric frames |
| 4.2 | Interplanetary Hohmann & hyperbolic legs | Size the departure and arrival, and phase the launch | heliocentric transfer, hyperbolic excess speed $v_\infty$, departure/arrival Δv, phase angle |
| 4.3 | Gravity assists | Explain the slingshot as an elastic bounce off a moving planet | flyby geometry, turning angle, heliocentric speed gain, energy from the planet |
| 4.4 | Perturbations: J₂ & a taste of drag | Estimate how oblateness and drag drift the elements | oblateness $J_2$, nodal regression $\dot\Omega$, apsidal rotation $\dot\omega$, sun-synchronous orbits, drag decay |
| 4.5 | The restricted three-body problem & Lagrange points | Find the five equilibria and read the zero-velocity curves | circular restricted 3-body problem, Jacobi constant, $L_1$–$L_5$, stability |

**Boss problem 4:** Design an Earth→Mars Hohmann transfer (heliocentric $\mu_\odot=1.327\times10^{11}\ \mathrm{km^3/s^2}$, $r_E=1.496\times10^8$ km, $r_M=2.279\times10^8$ km, Mars period 687 days). (a) Find the transfer time. (b) Compute the heliocentric departure and arrival Δv's (treat Earth and Mars as circular, coplanar). (c) Find the required Earth–Mars phase angle at launch. (d) Separately: a 700-km circular Earth parking orbit is inclined so that J₂ makes it sun-synchronous — using $\dot\Omega=-\tfrac{3}{2}nJ_2(R_\oplus/p)^2\cos i$ with $J_2=1.083\times10^{-3}$, state the sign of $\cos i$ (hence whether $i$ is prograde or retrograde) needed for $\dot\Omega>0$.

## Sources of truth

- Curtis, *Orbital Mechanics for Engineering Students* — primary source for notation (μ, h, the element algorithms) and the level of rigor.
- Vallado, *Fundamentals of Astrodynamics and Applications* — universal variables, coordinate frames, and perturbation conventions.
- Bate, Mueller & White, *Fundamentals of Astrodynamics* — the classic derivations of the orbit equation and patched conics.
