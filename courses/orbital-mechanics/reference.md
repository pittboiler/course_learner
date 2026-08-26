# Astrodynamics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Astrodynamics is one differential equation and its consequences. $\ddot{\mathbf r} = -\mu\mathbf r/r^3$
gives conic-section orbits; two conserved vectors ($\mathbf h$, $\mathbf e$) and one
conserved scalar ($\varepsilon$) pin every orbit down; and every maneuver is the
difference of two velocities computed from vis-viva. Use this card for the symbol
conventions, the six-element bookkeeping, the algorithm steps with their quadrant
checks, and the constants — those are the things worth looking up rather than
re-deriving mid-problem.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\mu$ | gravitational parameter $G(m_1+m_2)$, in $\mathrm{km^3/s^2}$ — the only place mass enters | [1.1](lessons/01-01-relative-two-body-problem.md) |
| $\mathbf r$, $r$ | position of the secondary relative to the primary, and its magnitude | [1.1](lessons/01-01-relative-two-body-problem.md) |
| $\mathbf v$, $v$ | relative velocity and speed | [1.1](lessons/01-01-relative-two-body-problem.md) |
| $\mathbf h$, $h$ | specific angular momentum $\mathbf r\times\mathbf v$, in $\mathrm{km^2/s}$ — points along the orbit axis | [1.2](lessons/01-02-angular-momentum-keplers-second-law.md) |
| $v_r$, $v_\perp$ | radial and transverse components of velocity; only $v_\perp$ carries $h$ | [1.2](lessons/01-02-angular-momentum-keplers-second-law.md) |
| $\gamma$ | flight-path angle, between $\mathbf v$ and the local horizontal; zero at an apsis | [1.2](lessons/01-02-angular-momentum-keplers-second-law.md) |
| $\mathbf e$, $e$ | eccentricity vector (points at perigee) and eccentricity — dimensionless | [1.3](lessons/01-03-orbit-equation-conic-sections.md) |
| $p$ | semi-latus rectum $h^2/\mu = a(1-e^2)$ — the radius one quarter-turn past perigee | [1.3](lessons/01-03-orbit-equation-conic-sections.md) |
| $\theta$ | true anomaly — angle from perigee to the spacecraft, in the direction of motion | [1.3](lessons/01-03-orbit-equation-conic-sections.md) |
| $\theta_\infty$ | asymptote true anomaly on a hyperbola, $\arccos(-1/e)$ | [1.3](lessons/01-03-orbit-equation-conic-sections.md) |
| $\varepsilon$ | specific mechanical energy $v^2/2 - \mu/r$, in $\mathrm{km^2/s^2}$; sign decides bound vs. free | [1.4](lessons/01-04-energy-vis-viva-orbit-types.md) |
| $a$ | semi-major axis; **negative** for a hyperbola, infinite for a parabola | [1.4](lessons/01-04-energy-vis-viva-orbit-types.md) |
| $v_\infty$, $C_3$ | hyperbolic excess speed and characteristic energy $C_3 = v_\infty^2$ | [1.4](lessons/01-04-energy-vis-viva-orbit-types.md) |
| $r_p$, $r_a$ | periapsis and apoapsis radius (perigee/apogee for Earth, perihelion/aphelion for the Sun) | [1.5](lessons/01-05-keplers-laws-orbital-period.md) |
| $T$, $n$ | orbital period and mean motion $n = 2\pi/T = \sqrt{\mu/a^3}$ | [1.5](lessons/01-05-keplers-laws-orbital-period.md) |
| $i$, $\Omega$, $\omega$ | inclination, right ascension of the ascending node, argument of perigee | [2.1](lessons/02-01-classical-orbital-elements.md) |
| $\mathbf n$ | node vector $\hat{\mathbf K}\times\mathbf h$ — lies in the equator, points at the ascending node | [2.1](lessons/02-01-classical-orbital-elements.md) |
| $u$, $\varpi$, $\ell$ | argument of latitude, longitude of perigee, true longitude — the degenerate-case substitutes | [2.1](lessons/02-01-classical-orbital-elements.md) |
| $\hat{\mathbf I},\hat{\mathbf J},\hat{\mathbf K}$ | ECI basis: vernal equinox, completing vector, north pole | [2.1](lessons/02-01-classical-orbital-elements.md) |
| $\hat{\mathbf p},\hat{\mathbf q},\hat{\mathbf w}$ | perifocal basis: toward perigee, $90^\circ$ ahead, along $\mathbf h$ | [2.2](lessons/02-02-orbit-in-three-dimensions.md) |
| $[Q]_{x\to X}$ | perifocal-to-ECI rotation matrix | [2.2](lessons/02-02-orbit-in-three-dimensions.md) |
| $E$, $M$ | eccentric anomaly (centre-angle on the circumscribing circle) and mean anomaly (a clock, not a place) | [2.4](lessons/02-04-keplers-equation-eccentric-anomaly.md) |
| $t_p$ | time of perigee passage; $M = n(t-t_p)$ | [2.4](lessons/02-04-keplers-equation-eccentric-anomaly.md) |
| $\chi$, $z$ | universal anomaly (units $\mathrm{km^{1/2}}$) and $z = \alpha\chi^2$ | [2.5](lessons/02-05-universal-variables-time-of-flight.md) |
| $\alpha$ | reciprocal semi-major axis $1/a = 2/r_0 - v_0^2/\mu$; negative for a hyperbola, zero for a parabola | [2.5](lessons/02-05-universal-variables-time-of-flight.md) |
| $C(z)$, $S(z)$ | Stumpff functions | [2.5](lessons/02-05-universal-variables-time-of-flight.md) |
| $f,g,\dot f,\dot g$ | Lagrange coefficients: $\mathbf r = f\mathbf r_0 + g\mathbf v_0$ | [2.5](lessons/02-05-universal-variables-time-of-flight.md) |
| $\Delta\mathbf v$, $\Delta v$ | impulsive velocity change and its magnitude — the currency of the whole subject | [3.1](lessons/03-01-impulsive-maneuvers-delta-v.md) |
| $I_{\rm sp}$, $v_e$ | specific impulse (s) and effective exhaust velocity $v_e = I_{\rm sp}g_0$ (km/s) | [3.1](lessons/03-01-impulsive-maneuvers-delta-v.md) |
| $a_t$, $e_t$ | semi-major axis and eccentricity of a transfer ellipse | [3.2](lessons/03-02-hohmann-transfers.md) |
| $R$ | radius ratio $r_2/r_1$ of a transfer | [3.2](lessons/03-02-hohmann-transfers.md) |
| $r_b$ | intermediate apoapsis radius of a bi-elliptic transfer | [3.3](lessons/03-03-bi-elliptic-transfers.md) |
| $\Delta i$ | inclination change of a plane-change maneuver | [3.4](lessons/03-04-plane-changes-combined-maneuvers.md) |
| $x,y,z$ (LVLH) | relative coordinates: radial, along-track, cross-track | [3.5](lessons/03-05-relative-motion-cw-equations.md) |
| $\Phi_{rr},\Phi_{rv},\dots$ | blocks of the CW state-transition matrix | [3.5](lessons/03-05-relative-motion-cw-equations.md) |
| $r_{\rm SOI}$ | sphere-of-influence radius | [4.1](lessons/04-01-sphere-of-influence-patched-conics.md) |
| $\phi_0$, $T_{\rm syn}$ | launch phase angle and synodic period | [4.2](lessons/04-02-interplanetary-hohmann-hyperbolic-legs.md) |
| $\delta$ | flyby turning angle | [4.3](lessons/04-03-gravity-assists.md) |
| $J_2$ | leading oblateness coefficient, $1.083\times10^{-3}$ for Earth | [4.4](lessons/04-04-perturbations-j2-drag.md) |
| $B$ | ballistic coefficient $C_DA/m$, in $\mathrm{m^2/kg}$ | [4.4](lessons/04-04-perturbations-j2-drag.md) |
| $\mu_{\rm 3B}$ | CR3BP mass parameter $m_2/(m_1+m_2)$ (distinct from the gravitational parameter $\mu$) | [4.5](lessons/04-05-restricted-three-body-lagrange-points.md) |
| $C$ (Jacobi) | Jacobi constant $2\Omega - v^2$ in the rotating frame | [4.5](lessons/04-05-restricted-three-body-lagrange-points.md) |

## Definitions

### Inverse-square force

Gravity pulls straight toward the primary with a strength falling off as one over
distance squared. Written with the position vector rather than a unit vector, the
extra power of $r$ in the denominator supplies the normalization.

$$\ddot{\mathbf r} = -\frac{\mu}{r^3}\,\mathbf r = -\frac{\mu}{r^2}\,\hat{\mathbf u}_r$$

*Introduced:* [1.1](lessons/01-01-relative-two-body-problem.md)

### Specific angular momentum

Angular momentum per unit mass. Constant because gravity has no lever arm about
the primary — which is why the orbit is planar and why areas sweep uniformly.

$$\mathbf h = \mathbf r\times\mathbf v, \qquad h = rv_\perp = rv\cos\gamma = r^2\dot\theta$$

*Introduced:* [1.2](lessons/01-02-angular-momentum-keplers-second-law.md)

### Orbit equation

The distance from the primary as a function of the angle from perigee — the polar
equation of a conic with a focus at the primary. This is Kepler's first law,
generalized to all four conic types.

$$r(\theta) = \frac{p}{1+e\cos\theta}, \qquad p = \frac{h^2}{\mu} = a(1-e^2)$$

*Introduced:* [1.3](lessons/01-03-orbit-equation-conic-sections.md)

### Eccentricity vector

A second constant vector, this one lying *in* the orbit plane and pointing at
perigee. Its length is the eccentricity. It exists only because the force is
inverse-square.

$$\mathbf e = \frac{1}{\mu}\left[\left(v^2-\frac{\mu}{r}\right)\mathbf r - (\mathbf r\cdot\mathbf v)\mathbf v\right] = \frac{\mathbf v\times\mathbf h}{\mu} - \frac{\mathbf r}{r}$$

*Introduced:* [1.3](lessons/01-03-orbit-equation-conic-sections.md)

### Specific mechanical energy

Kinetic plus potential energy per kilogram, with zero taken at infinity. Its sign
tells you immediately whether the orbit is bound, and its value depends on the
orbit's size and on nothing else.

$$\varepsilon = \frac{v^2}{2} - \frac{\mu}{r} = -\frac{\mu}{2a}$$

*Introduced:* [1.4](lessons/01-04-energy-vis-viva-orbit-types.md)

### Orbital period

Total ellipse area divided by the constant areal sweep rate. Eccentricity cancels
identically, so period depends only on $a$.

$$T = 2\pi\sqrt{\frac{a^3}{\mu}}, \qquad n = \frac{2\pi}{T} = \sqrt{\frac{\mu}{a^3}}$$

*Introduced:* [1.5](lessons/01-05-keplers-laws-orbital-period.md)

### Degenerate orbital elements

When the geometry an element names disappears, the element is undefined and a
combination must be used instead. Circular orbits have no perigee; equatorial
orbits have no node.

| Case | Undefined | Use instead |
|---|---|---|
| $e = 0$, $i\ne0$ | $\omega$, $\theta$ | argument of latitude $u = \omega+\theta$ |
| $e\ne0$, $i = 0$ | $\Omega$ | longitude of perigee $\varpi = \Omega+\omega$ |
| $e = 0$, $i = 0$ | $\Omega,\omega,\theta$ | true longitude $\ell = \Omega+\omega+\theta$ |

*Introduced:* [2.1](lessons/02-01-classical-orbital-elements.md)

### Perifocal-to-ECI matrix

One matrix, built from the three orientation angles as a 3-1-3 Euler sequence,
that converts flat-orbit coordinates to sky coordinates. Being orthogonal, its
inverse is its transpose.

$$[Q]_{x\to X} = \big(R_3(\omega)R_1(i)R_3(\Omega)\big)^{\mathsf T}$$

Its third column is $\hat{\mathbf w}$ in ECI components, so its (3,3) entry must equal $\cos i$
— the fastest check on a hand-built matrix.

*Introduced:* [2.2](lessons/02-02-orbit-in-three-dimensions.md)

### State vector conversion

The two-way map between $(\mathbf r,\mathbf v)$ and the six classical elements.
Forward (elements to state) is unambiguous; backward needs three quadrant tests.
Full step lists are under [Algorithms](#algorithms).

*Introduced:* [2.3](lessons/02-03-state-vectors-and-elements.md)

### Kepler's equation

The link between uniform clock time (via $M$) and the geometric centre-angle $E$.
Transcendental — invertible only by iteration, which is why every propagator runs
Newton's method.

$$M = E - e\sin E, \qquad r = a(1-e\cos E)$$

*Introduced:* [2.4](lessons/02-04-keplers-equation-eccentric-anomaly.md)

### Universal Kepler equation

One time-of-flight equation valid for every conic, obtained by re-clocking the
orbit with $d\chi/dt = \sqrt\mu/r$. The elliptic, parabolic, and hyperbolic cases
are the same formula at $z>0$, $z=0$, and $z<0$.

$$\frac{r_0v_{r0}}{\sqrt\mu}\chi^2C(z) + (1-\alpha r_0)\chi^3S(z) + r_0\chi = \sqrt\mu\,\Delta t, \qquad z = \alpha\chi^2$$

*Introduced:* [2.5](lessons/02-05-universal-variables-time-of-flight.md)

### Rocket equation

The propellant cost of a given velocity change. The exponential is why delta-v is
such an expensive currency and why rockets are staged.

$$\Delta v = v_e\ln\frac{m_0}{m_f}, \qquad \frac{m_{\rm prop}}{m_0} = 1 - e^{-\Delta v/v_e}, \qquad v_e = I_{\rm sp}g_0$$

with $g_0 = 9.80665\ \mathrm{m/s^2}$ — a defined constant, not local gravity.

*Introduced:* [3.1](lessons/03-01-impulsive-maneuvers-delta-v.md)

### Hohmann transfer

The two-burn tangential transfer between coplanar circular orbits, via the ellipse
that grazes both. Optimal among two-impulse transfers for $r_2/r_1 < 11.94$.

$$a_t = \frac{r_1+r_2}{2}, \qquad \Delta v_1 = v_{t,p}-v_{c1}, \qquad \Delta v_2 = v_{c2}-v_{t,a}, \qquad t_{12} = \pi\sqrt{\frac{a_t^3}{\mu}}$$

*Introduced:* [3.2](lessons/03-02-hohmann-transfers.md)

### Bi-elliptic transfer

A three-burn transfer that deliberately overshoots to a distant apoapsis $r_b$,
reshapes the orbit there where the spacecraft is barely moving, then brakes down
onto the target. The third burn is **retrograde**.

$$a_1 = \frac{r_1+r_b}{2}, \qquad a_2 = \frac{r_b+r_2}{2}, \qquad t = \pi\sqrt{\frac{a_1^3}{\mu}} + \pi\sqrt{\frac{a_2^3}{\mu}}$$

*Introduced:* [3.3](lessons/03-03-bi-elliptic-transfers.md)

### Plane change

Rotating the velocity vector without changing its magnitude. The cost scales with
the speed at the burn point, so plane changes are done where the spacecraft is
slowest.

$$\Delta v = 2v\sin\frac{\Delta i}{2}$$

*Introduced:* [3.4](lessons/03-04-plane-changes-combined-maneuvers.md)

### Clohessy–Wiltshire equations

The linearized equations of relative motion in a frame riding a target in a
circular orbit. Cross-track oscillates; in-plane motion couples through Coriolis
terms and drifts.

$$\ddot x - 3n^2x - 2n\dot y = 0, \qquad \ddot y + 2n\dot x = 0, \qquad \ddot z + n^2z = 0$$

*Introduced:* [3.5](lessons/03-05-relative-motion-cw-equations.md)

### Sphere of influence

The distance at which the handover between primaries happens in patched conics —
found by comparing perturbation-to-central-force ratios, not by balancing forces.

$$r_{\rm SOI} = R\left(\frac{m}{M}\right)^{2/5}$$

*Introduced:* [4.1](lessons/04-01-sphere-of-influence-patched-conics.md)

### Hyperbolic departure

Leaving a parking orbit with a specified excess speed. Escape speed and excess add
in **quadrature**, which is the Oberth effect stated algebraically.

$$v_p = \sqrt{v_\infty^2 + \frac{2\mu}{r_p}}, \qquad \Delta v_{\rm dep} = v_p - \sqrt{\frac{\mu}{r_p}}, \qquad C_3 = v_\infty^2$$

*Introduced:* [4.2](lessons/04-02-interplanetary-hohmann-hyperbolic-legs.md)

### Gravity assist

A flyby is elastic in the planet's frame — $v_\infty$ turns but never changes
length. In the Sun's frame that rotation is a free velocity change.

$$\sin\frac{\delta}{2} = \frac1e, \qquad e = 1 + \frac{r_pv_\infty^2}{\mu_{\rm planet}}, \qquad \|\Delta\mathbf v_{\rm helio}\| = 2v_\infty\sin\frac\delta2 \le 2v_\infty$$

*Introduced:* [4.3](lessons/04-03-gravity-assists.md)

### J2 secular rates

The steady drift of the two orientation elements caused by Earth's equatorial
bulge. Note $a$, $e$, $i$ have **no** secular drift from $J_2$.

$$\dot\Omega = -\frac32 nJ_2\left(\frac{R_\oplus}{p}\right)^2\cos i, \qquad \dot\omega = \frac32 nJ_2\left(\frac{R_\oplus}{p}\right)^2\left(2-\frac52\sin^2i\right)$$

*Introduced:* [4.4](lessons/04-04-perturbations-j2-drag.md)

### Jacobi constant

The conserved quantity of the circular restricted three-body problem, replacing
energy (which is not conserved in the rotating frame). Its level sets bound where
the spacecraft may go.

$$C = 2\Omega - v^2, \qquad \Omega = \frac{x^2+y^2}{2} + \frac{1-\mu_{\rm 3B}}{r_1} + \frac{\mu_{\rm 3B}}{r_2}$$

with $v$ the speed **in the rotating frame**.

*Introduced:* [4.5](lessons/04-05-restricted-three-body-lagrange-points.md)

## Formulas and rules

### Conic geometry

| Quantity | Formula |
|---|---|
| semi-major axis | $a = (r_p+r_a)/2$ (ellipse only) |
| eccentricity | $e = (r_a-r_p)/(r_a+r_p)$ |
| apsis radii | $r_p = a(1-e) = p/(1+e)$, $\;r_a = a(1+e) = p/(1-e)$ |
| semi-latus rectum | $p = a(1-e^2) = h^2/\mu = b^2/a$ |
| semi-minor axis | $b = a\sqrt{1-e^2}$ |
| focus offset | $c = ae$ |
| angular momentum | $h = \sqrt{\mu p} = \sqrt{\mu a(1-e^2)}$ |
| energy–eccentricity | $e = \sqrt{1 + 2\varepsilon h^2/\mu^2}$ |
| hyperbolic asymptote | $\theta_\infty = \arccos(-1/e)$, turning angle $\delta = 2\theta_\infty - 180^\circ$ |

*From* [1.3](lessons/01-03-orbit-equation-conic-sections.md), [1.5](lessons/01-05-keplers-laws-orbital-period.md)

### Orbit classification

| $e$ | $\varepsilon$ | $a$ | $\alpha = 1/a$ | Shape |
|---|---|---|---|---|
| $0$ | $<0$ | $=r$ | $>0$ | circle |
| $0<e<1$ | $<0$ | $>0$ | $>0$ | ellipse |
| $1$ | $=0$ | $\infty$ | $0$ | parabola |
| $>1$ | $>0$ | $<0$ | $<0$ | hyperbola |

*From* [1.3](lessons/01-03-orbit-equation-conic-sections.md), [1.4](lessons/01-04-energy-vis-viva-orbit-types.md)

### Speeds

| Quantity | Formula |
|---|---|
| **vis-viva** | $v^2 = \mu\left(\dfrac{2}{r} - \dfrac{1}{a}\right)$ |
| circular speed | $v_{\rm circ} = \sqrt{\mu/r}$ |
| escape speed | $v_{\rm esc} = \sqrt{2\mu/r} = \sqrt2\,v_{\rm circ}$ |
| escape increment from circular | $(\sqrt2-1)v_{\rm circ} = 0.4142\,v_{\rm circ}$ |
| hyperbolic excess | $v_\infty^2 = -\mu/a = 2\varepsilon$ |
| radial / transverse split | $v_r = (\mu/h)e\sin\theta$, $\;v_\perp = h/r$ |
| speed at an apsis | $v = h/r$ (valid only where $\gamma = 0$) |

*From* [1.2](lessons/01-02-angular-momentum-keplers-second-law.md), [1.4](lessons/01-04-energy-vis-viva-orbit-types.md)

### Perifocal state

$$\mathbf r_{\rm pf} = r\begin{pmatrix}\cos\theta\\ \sin\theta\\ 0\end{pmatrix}, \qquad \mathbf v_{\rm pf} = \frac{\mu}{h}\begin{pmatrix}-\sin\theta\\ e+\cos\theta\\ 0\end{pmatrix}$$

$$[Q]_{x\to X} = \begin{pmatrix} c_\Omega c_\omega - s_\Omega s_\omega c_i & -c_\Omega s_\omega - s_\Omega c_\omega c_i & s_\Omega s_i \\ s_\Omega c_\omega + c_\Omega s_\omega c_i & -s_\Omega s_\omega + c_\Omega c_\omega c_i & -c_\Omega s_i \\ s_\omega s_i & c_\omega s_i & c_i \end{pmatrix}$$

*From* [2.2](lessons/02-02-orbit-in-three-dimensions.md)

### Anomaly conversions

| From → To | Formula |
|---|---|
| $\theta\to E$ | $\tan\dfrac{E}{2} = \sqrt{\dfrac{1-e}{1+e}}\tan\dfrac{\theta}{2}$ |
| $E\to\theta$ | $\tan\dfrac{\theta}{2} = \sqrt{\dfrac{1+e}{1-e}}\tan\dfrac{E}{2}$ |
| $E\to M$ | $M = E - e\sin E$ |
| $M\to t$ | $t - t_p = M/n$ |
| $E\to r$ | $r = a(1-e\cos E)$ |

Ordering on the outbound leg: $\theta > E > M$; they coincide at perigee and apogee.

*From* [2.4](lessons/02-04-keplers-equation-eccentric-anomaly.md)

### Stumpff functions and Lagrange coefficients

$$C(z) = \sum_{k\ge0}\frac{(-z)^k}{(2k+2)!}, \qquad S(z) = \sum_{k\ge0}\frac{(-z)^k}{(2k+3)!}, \qquad C(0) = \tfrac12,\; S(0) = \tfrac16$$

| $z$ | $C(z)$ | $S(z)$ |
|---|---|---|
| $>0$ | $\dfrac{1-\cos\sqrt z}{z}$ | $\dfrac{\sqrt z - \sin\sqrt z}{(\sqrt z)^3}$ |
| $<0$ | $\dfrac{\cosh\sqrt{-z}-1}{-z}$ | $\dfrac{\sinh\sqrt{-z}-\sqrt{-z}}{(\sqrt{-z})^3}$ |

$$f = 1 - \frac{\chi^2}{r_0}C(z), \quad g = \Delta t - \frac{\chi^3}{\sqrt\mu}S(z), \quad \dot f = \frac{\sqrt\mu}{rr_0}(zS(z)-1)\chi, \quad \dot g = 1 - \frac{\chi^2}{r}C(z)$$

Always check $f\dot g - \dot fg = 1$.

*From* [2.5](lessons/02-05-universal-variables-time-of-flight.md)

### Maneuvers

| Maneuver | Cost |
|---|---|
| general impulse | $\Delta v = \|\mathbf v^+-\mathbf v^-\|$; for a turn of $\phi$, $\;\sqrt{(v^-)^2+(v^+)^2-2v^-v^+\cos\phi}$ |
| pure plane change | $2v\sin(\Delta i/2)$ |
| combined raise + turn | $\sqrt{v_1^2+v_2^2-2v_1v_2\cos\Delta i}$ |
| tangential burn effect | $\Delta a/a \approx 2\Delta v/v_c$ |
| energy gain (Oberth) | $\Delta\varepsilon = v\,\Delta v + (\Delta v)^2/2$ |

Reference values: $60^\circ$ plane change costs $1.00\,v$; a plane change beyond
$23.9^\circ$ costs more than escaping.

*From* [3.1](lessons/03-01-impulsive-maneuvers-delta-v.md), [3.4](lessons/03-04-plane-changes-combined-maneuvers.md)

### Transfer comparison

| $r_2/r_1$ | Cheapest |
|---|---|
| $< 11.94$ | Hohmann, for any $r_b$ |
| $11.94$ to $15.58$ | bi-elliptic only for large $r_b$ |
| $> 15.58$ | bi-elliptic, even for modest $r_b$ |

Limiting bi-elliptic cost: $\Delta v^\infty_{\rm bi} = (\sqrt2-1)(v_{c1}+v_{c2})$.

*From* [3.2](lessons/03-02-hohmann-transfers.md), [3.3](lessons/03-03-bi-elliptic-transfers.md)

### CW solution and drift

$$x(t) = (4-3\cos nt)x_0 + \frac{\sin nt}{n}\dot x_0 + \frac{2(1-\cos nt)}{n}\dot y_0$$
$$y(t) = 6(\sin nt - nt)x_0 + y_0 - \frac{2(1-\cos nt)}{n}\dot x_0 + \frac{4\sin nt - 3nt}{n}\dot y_0$$
$$z(t) = z_0\cos nt + \frac{\dot z_0}{n}\sin nt$$

- **Drift rate** (along-track): $-6nx_0 - 3\dot y_0$.
- **No-drift condition**: $\dot y_0 = -2nx_0$, giving a closed $2{:}1$ ellipse.
- A 1-km radial offset drifts $12\pi = 37.7$ km per orbit.
- **Two-impulse rendezvous**: $\delta\mathbf v_0^+ = -\Phi_{rv}(t_f)^{-1}\Phi_{rr}(t_f)\,\delta\mathbf r_0$.

*From* [3.5](lessons/03-05-relative-motion-cw-equations.md)

### Interplanetary

| Quantity | Formula |
|---|---|
| departure / arrival excess | $v_{\infty,\rm dep} = v_{t,p}-v_{c1}$, $\;v_{\infty,\rm arr} = v_{c2}-v_{t,a}$ |
| launch phase angle | $\phi_0 = 180^\circ - n_{\rm target}\,t_{12}$ (negative means the target trails) |
| synodic period | $T_{\rm syn} = \big|1/T_1 - 1/T_2\big|^{-1}$ |
| patch condition | $\mathbf v_{\rm helio} = \mathbf v_{\rm planet} + \mathbf v_\infty$ (vector sum) |

*From* [4.1](lessons/04-01-sphere-of-influence-patched-conics.md), [4.2](lessons/04-02-interplanetary-hohmann-hyperbolic-legs.md)

### Three-body geometry

| Point | Location |
|---|---|
| $L_1$, $L_2$ | on the line through the primaries, roughly $R(\mu_{\rm 3B}/3)^{1/3}$ from the smaller body (the Hill radius) |
| $L_3$ | on the line, just beyond the larger body, opposite the smaller |
| $L_4$, $L_5$ | at $(\tfrac12-\mu_{\rm 3B},\ \pm\tfrac{\sqrt3}{2})$ — equilateral triangles, exact for any $\mu_{\rm 3B}$ |

Stability: $L_1$, $L_2$, $L_3$ are saddle points (unstable, cheap to station-keep);
$L_4$, $L_5$ are stable when $m_1/m_2 > 24.96$, i.e. $\mu_{\rm 3B} < 0.03852$.

*From* [4.5](lessons/04-05-restricted-three-body-lagrange-points.md)

### Constants

| Body | $\mu$ ($\mathrm{km^3/s^2}$) | Mean radius (km) | Orbit radius (km) | $r_{\rm SOI}$ (km) |
|---|---|---|---|---|
| Sun | $1.327\times10^{11}$ | 696,000 | — | — |
| Mercury | 22,032 | 2440 | $5.791\times10^7$ | 112,000 |
| Venus | 324,859 | 6052 | $1.082\times10^8$ | 616,000 |
| **Earth** | **398,600** | **6378** | $1.496\times10^8$ | **925,000** |
| Moon | 4903 | 1737 | 384,400 (about Earth) | 66,200 |
| Mars | 42,828 | 3396 | $2.279\times10^8$ | 577,000 |
| Jupiter | $1.26686\times10^8$ | 71,492 | $7.783\times10^8$ | $4.82\times10^7$ |
| Saturn | $3.7931\times10^7$ | 60,268 | $1.427\times10^9$ | $5.46\times10^7$ |

Other numbers worth having: $J_2^\oplus = 1.083\times10^{-3}$; sidereal day
$= 86{,}164$ s; geostationary radius $= 42{,}164$ km at $3.075$ km/s; sun-synchronous
drift target $= +0.9856$ deg/day; critical inclination $= 63.43^\circ$;
$g_0 = 9.80665\ \mathrm{m/s^2}$; Earth–Mars synodic period $= 780$ days.

*From* [1.1](lessons/01-01-relative-two-body-problem.md), [4.1](lessons/04-01-sphere-of-influence-patched-conics.md), [4.4](lessons/04-04-perturbations-j2-drag.md)

## Algorithms

### State vector to elements

Given $\mathbf r$, $\mathbf v$, $\mu$ — with the three quadrant tests that are the
whole difficulty of this direction:

1. $r = \|\mathbf r\|$, $v = \|\mathbf v\|$, $v_r = (\mathbf r\cdot\mathbf v)/r$.
2. $\mathbf h = \mathbf r\times\mathbf v$, $h = \|\mathbf h\|$.
3. $i = \arccos(h_z/h)$ — **no** quadrant test needed.
4. $\mathbf n = (-h_y,\,h_x,\,0)$, $n = \|\mathbf n\|$.
5. $\Omega = \arccos(n_x/n)$, **or $360^\circ$ minus it if $n_y<0$**.
6. $\mathbf e$ from the eccentricity-vector formula; $e = \|\mathbf e\|$.
7. $\omega = \arccos\!\big(\tfrac{\mathbf n\cdot\mathbf e}{ne}\big)$, **or $360^\circ$ minus it if $e_z<0$**.
8. $\theta = \arccos\!\big(\tfrac{\mathbf e\cdot\mathbf r}{er}\big)$, **or $360^\circ$ minus it if $v_r<0$**.
9. $a = \big(2/r - v^2/\mu\big)^{-1}$.

*From* [2.3](lessons/02-03-state-vectors-and-elements.md)

### Elements to state vector

$p = a(1-e^2)$; $h = \sqrt{\mu p}$; $r = p/(1+e\cos\theta)$; build $\mathbf r_{\rm pf}$
and $\mathbf v_{\rm pf}$; multiply both by $[Q]_{x\to X}$. No ambiguities.

*From* [2.2](lessons/02-02-orbit-in-three-dimensions.md), [2.3](lessons/02-03-state-vectors-and-elements.md)

### Solving Kepler's equation

$$E_{k+1} = E_k - \frac{E_k - e\sin E_k - M}{1-e\cos E_k}, \qquad E_0 = \begin{cases}M+e/2, & M<\pi\\ M-e/2,& M\ge\pi\end{cases}$$

Converges quadratically; $f'(E) = 1-e\cos E \ge 1-e > 0$ guarantees it never fails
for $e<1$. Work in **radians**.

*From* [2.4](lessons/02-04-keplers-equation-eccentric-anomaly.md)

### Universal-variable propagation

Given $\mathbf r_0$, $\mathbf v_0$, $\Delta t$: compute $r_0$, $v_{r0}$, and
$\alpha = 2/r_0 - v_0^2/\mu$; Newton-solve the universal Kepler equation for $\chi$
starting from $\chi_0 = \sqrt\mu\,|\alpha|\,\Delta t$ (the derivative is $F'(\chi) = r > 0$);
evaluate $r$, then $f,g,\dot f,\dot g$; assemble $\mathbf r = f\mathbf r_0 + g\mathbf v_0$
and $\mathbf v = \dot f\mathbf r_0 + \dot g\mathbf v_0$. **No elements needed.**

*From* [2.5](lessons/02-05-universal-variables-time-of-flight.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Cross product, triple products, and the identity $\mathbf a\times(\mathbf b\times\mathbf c) = \mathbf b(\mathbf a\cdot\mathbf c)-\mathbf c(\mathbf a\cdot\mathbf b)$ | [`linalg-refresher` 1.4](../linalg-refresher/lessons/01-04-cross-product-and-orientation.md) |
| Rotation matrices, orthogonality, $Q^{-1} = Q^{\mathsf T}$ | [`linalg-refresher` 4.1](../linalg-refresher/lessons/04-01-inner-products-orthogonality.md) |
| Newton's laws and the law of universal gravitation | [`mechanics-refresher` 5.1](../mechanics-refresher/lessons/05-01-gravitation-kepler.md) |
| Conservative forces, potential energy, energy conservation | [`mechanics-refresher` 2.2](../mechanics-refresher/lessons/02-02-potential-energy-conservation.md) |
| Torque and conservation of angular momentum | [`mechanics-refresher` 4.2](../mechanics-refresher/lessons/04-02-angular-momentum.md) |
| Effective potential for central-force motion | [`mechanics-refresher` 5.2](../mechanics-refresher/lessons/05-02-orbits-effective-potential.md) |
| Newton's method and quadratic convergence | [`numerical-analysis` 1.5](../numerical-analysis/lessons/01-05-newton-secant.md) |
| Catastrophic cancellation (why to use the Stumpff series near $z=0$) | [`numerical-analysis` 1.2](../numerical-analysis/lessons/01-02-cancellation-error-propagation.md) |
| Power series and entire functions | [`calc-refresher` 3.2](../calc-refresher/lessons/03-02-power-and-taylor-series.md) |
| Linear constant-coefficient ODE systems and the state-transition matrix | [`ode-refresher` 3.1](../ode-refresher/lessons/03-01-linear-systems-eigenvalues.md) |
| Euler angles and rigid-body precession | [`analytical-mechanics` 4.4](../analytical-mechanics/lessons/04-04-rigid-body-dynamics.md) |
| The Jacobi integral in a rotating frame (vs. energy) | [`analytical-mechanics` 2.3](../analytical-mechanics/lessons/02-03-energy-and-hamiltonian.md) |
| Legendre polynomials and spherical-harmonic expansions (the source of $J_2$) | [`mathematical-methods-physics` 3.2](../mathematical-methods-physics/lessons/03-02-legendre-spherical-harmonics.md) |
| Specific impulse, nozzles, and where $I_{\rm sp}$ values come from | [`propulsion` 3.2](../propulsion/lessons/03-02-specific-impulse-rocket-performance.md) |

## Pitfalls

### Units and conventions

- $\mu$ in $\mathrm{km^3/s^2}$ means **every** distance in km and speed in km/s; mixing in meters is the most common numerical error in the subject.
  *([1.1](lessons/01-01-relative-two-body-problem.md))*
- Kepler's equation needs $M$ and $E$ in **radians**; degrees give plausible-looking wrong answers.
  *([2.4](lessons/02-04-keplers-equation-eccentric-anomaly.md))*
- $g_0 = 9.80665\ \mathrm{m/s^2}$ is a defined constant in the definition of $I_{\rm sp}$, not the local gravity.
  *([3.1](lessons/03-01-impulsive-maneuvers-delta-v.md))*
- Use the **sidereal** day (86,164 s), not the solar day, for anything geosynchronous.
  *([1.5](lessons/01-05-keplers-laws-orbital-period.md))*
- $\chi$ has units $\mathrm{km^{1/2}}$ — odd-looking and correct; it is $\sqrt a$ times an angle.
  *([2.5](lessons/02-05-universal-variables-time-of-flight.md))*

### Signs and quadrants

- $\arccos$ returns only $0^\circ$ to $180^\circ$: $\Omega$, $\omega$, $\theta$ each need their sign test, or you silently get a mirrored orbit.
  *([2.3](lessons/02-03-state-vectors-and-elements.md))*
- $a<0$ on a hyperbola. Feeding a positive $|a|$ into vis-viva returns a bound-orbit speed.
  *([1.4](lessons/01-04-energy-vis-viva-orbit-types.md))*
- $i>90^\circ$ is a retrograde orbit, not an error — every sun-synchronous satellite has one.
  *([2.1](lessons/02-01-classical-orbital-elements.md), [4.4](lessons/04-04-perturbations-j2-drag.md))*
- Rotation matrices do not commute: $R_3(\omega)R_1(i)R_3(\Omega)$ in that order only.
  *([2.2](lessons/02-02-orbit-in-three-dimensions.md))*
- The third burn of a bi-elliptic transfer is **retrograde**, unlike both Hohmann burns.
  *([3.3](lessons/03-03-bi-elliptic-transfers.md))*

### Formulas outside their domain

- $h = rv$ holds only where $\gamma = 0$ — at an apsis or on a circle. Otherwise $h = rv\cos\gamma$.
  *([1.2](lessons/01-02-angular-momentum-keplers-second-law.md))*
- $r_a = p/(1-e)$ and $T = 2\pi\sqrt{a^3/\mu}$ are meaningless for $e\ge1$; a hyperbola has no apogee and no period.
  *([1.3](lessons/01-03-orbit-equation-conic-sections.md), [1.5](lessons/01-05-keplers-laws-orbital-period.md))*
- Kepler's equation $M = E-e\sin E$ is for $e<1$ only; use universal variables otherwise.
  *([2.4](lessons/02-04-keplers-equation-eccentric-anomaly.md))*
- The classical elements break down as $e\to0$ or $i\to0$; branch to the degenerate substitutes.
  *([2.1](lessons/02-01-classical-orbital-elements.md), [2.3](lessons/02-03-state-vectors-and-elements.md))*
- The CW equations need a near-circular target and separations small compared with the orbit radius.
  *([3.5](lessons/03-05-relative-motion-cw-equations.md))*
- The Stumpff closed forms suffer catastrophic cancellation near $z = 0$; use the series there.
  *([2.5](lessons/02-05-universal-variables-time-of-flight.md))*

### Physical intuition traps

- **Slower is higher.** More energy raises $a$, which lowers the average speed. Both Hohmann burns are prograde even though the destination is slower.
  *([1.4](lessons/01-04-energy-vis-viva-orbit-types.md), [3.2](lessons/03-02-hohmann-transfers.md))*
- **To catch up, go down.** Thrusting toward a target ahead of you raises your orbit and makes you fall further behind.
  *([3.5](lessons/03-05-relative-motion-cw-equations.md))*
- **Drag speeds a satellite up.** It removes energy, giving a smaller and therefore faster orbit.
  *([4.4](lessons/04-04-perturbations-j2-drag.md))*
- **Energies add, speeds don't.** $v_p^2 = v_{\rm esc}^2 + v_\infty^2$ — the Oberth discount, which is large for small $v_\infty$ and evaporates for large.
  *([1.4](lessons/01-04-energy-vis-viva-orbit-types.md), [4.2](lessons/04-02-interplanetary-hohmann-hyperbolic-legs.md))*
- **A flyby is free but not magic.** $v_\infty$ never changes length; the energy comes from the planet's orbit, exactly balanced.
  *([4.3](lessons/04-03-gravity-assists.md))*
- **Delta-v is spent, never refunded.** Prograde then retrograde costs $2\Delta v$ and leaves you where you started; $\Delta v = \|\mathbf v^+ - \mathbf v^-\|$ is a vector difference, not a difference of speeds.
  *([3.1](lessons/03-01-impulsive-maneuvers-delta-v.md))*
- **Lagrange points are not places where gravity cancels.** Gravity plus centrifugal force cancels, and only in the rotating frame.
  *([4.5](lessons/04-05-restricted-three-body-lagrange-points.md))*
- **Patched conics is a model, not a fact.** Arrival at a planet is always hyperbolic; capture always costs a burn.
  *([4.1](lessons/04-01-sphere-of-influence-patched-conics.md))*
- **Turning is expensive; stretching is cheap.** A $60^\circ$ plane change costs a full orbital speed; combine it with a burn you were making anyway.
  *([3.4](lessons/03-04-plane-changes-combined-maneuvers.md))*
- **Kepler's second law says nothing about the force law.** Equal areas follow from centrality alone; only the first and third laws pin down the inverse square.
  *([1.2](lessons/01-02-angular-momentum-keplers-second-law.md))*
