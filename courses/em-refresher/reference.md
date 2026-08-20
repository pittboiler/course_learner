# Electromagnetism · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

E&M is one idea told twice. Charges make a field, the field pushes charges — and
once you let either field *change in time*, each one starts making the other, and
the pair walks off through empty space as light. Everything below is that story's
bookkeeping: the fields of standard sources, the circuit shortcuts, the four
equations, and the units that keep them honest.

## Notation

Units are SI throughout. Where a letter does double duty, the clash is flagged —
those are the ones that actually bite mid-problem.

| Symbol | Means | Units | First used |
|---|---|---|---|
| $q$, $Q$ | charge — the property that sources and feels the electric field | C (coulomb) | [1.1](lessons/01-01-coulomb-electric-field.md) |
| $e$ | elementary charge, $1.6\times10^{-19}$ C — every free charge is an integer multiple | C | [1.1](lessons/01-01-coulomb-electric-field.md) |
| $\mathbf E$ | electric field — force per unit charge at a point, whether or not anyone is there | N/C = V/m | [1.1](lessons/01-01-coulomb-electric-field.md) |
| $\hat{\mathbf r}$ | unit vector pointing **from the source to the field point** | — | [1.1](lessons/01-01-coulomb-electric-field.md) |
| $k$ | Coulomb constant $1/4\pi\varepsilon_0$ (**not** the wavenumber of 4.2) | N·m²/C² | [1.1](lessons/01-01-coulomb-electric-field.md) |
| $\varepsilon_0$ | permittivity of free space — how strongly vacuum responds to charge | C²/(N·m²) = F/m | [1.1](lessons/01-01-coulomb-electric-field.md) |
| $\Phi_E$ | electric flux — signed count of field lines through a surface | N·m²/C | [1.2](lessons/01-02-gauss-law.md) |
| $d\mathbf A$ | area patch, pointing along the **outward** normal | m² | [1.2](lessons/01-02-gauss-law.md) |
| $Q_{\text{enc}}$ | charge trapped inside a closed surface — the only charge Gauss sees | C | [1.2](lessons/01-02-gauss-law.md) |
| $\rho$ | volume charge density | C/m³ | [1.2](lessons/01-02-gauss-law.md) |
| $\sigma$ | surface charge density (charge per unit plate area) | C/m² | [1.2](lessons/01-02-gauss-law.md) |
| $\lambda$ | linear charge density (**not** the wavelength of 4.2) | C/m | [1.2](lessons/01-02-gauss-law.md) |
| $V$ | electric potential — electrical "height", work per unit charge | V = J/C | [1.3](lessons/01-03-electric-potential.md) |
| $d\mathbf l$ | step along a path or around a loop | m | [1.3](lessons/01-03-electric-potential.md) |
| $U$ | potential energy of a charge or a stored field | J | [1.3](lessons/01-03-electric-potential.md) |
| eV | electron-volt, $1.6\times10^{-19}$ J — the energy $e$ gains crossing one volt | J | [1.3](lessons/01-03-electric-potential.md) |
| $C$ | capacitance — charge banked per volt (the letter also abbreviates the coulomb) | F = C/V | [2.1](lessons/02-01-capacitance.md) |
| $\kappa$ | dielectric constant — the factor a filling material multiplies $C$ by | dimensionless | [2.1](lessons/02-01-capacitance.md) |
| $u$ | energy **density** stored in a field (lower case; $U$ is total energy) | J/m³ | [2.1](lessons/02-01-capacitance.md) |
| $I$ | current — charge per second past a cross-section (**also** intensity in 4.3) | A = C/s | [2.2](lessons/02-02-dc-circuits.md) |
| $R$ | resistance — how hard the material chokes the flow | $\Omega$ = V/A | [2.2](lessons/02-02-dc-circuits.md) |
| $P$ | power (**also** radiation pressure $P_{\text{rad}}$ in 4.3) | W = J/s | [2.2](lessons/02-02-dc-circuits.md) |
| $\mathcal{E}$ | EMF — energy per unit charge a source supplies; volts, but not a force | V | [2.2](lessons/02-02-dc-circuits.md) |
| $r$ | a battery's internal resistance (elsewhere $r$ is a distance) | $\Omega$ | [2.2](lessons/02-02-dc-circuits.md) |
| $\tau$ | time constant $RC$ — the natural timescale of a fill or a drain | s | [2.3](lessons/02-03-rc-circuits.md) |
| $q(t)$ | instantaneous charge on a capacitor; $I = dq/dt$ | C | [2.3](lessons/02-03-rc-circuits.md) |
| $\mathbf B$ | magnetic field — steers moving charge sideways, never speeds it up | T = N/(A·m) | [3.1](lessons/03-01-magnetic-force.md) |
| $\omega$ | cyclotron angular frequency in 3.1; wave angular frequency in 4.2 | rad/s | [3.1](lessons/03-01-magnetic-force.md) |
| $T$ | orbital period (the same letter is the tesla) | s | [3.1](lessons/03-01-magnetic-force.md) |
| $\mathbf L$ | length vector of a current-carrying wire, pointing along the current | m | [3.1](lessons/03-01-magnetic-force.md) |
| $\mu_0$ | permeability of free space, $4\pi\times10^{-7}$ — magnetism's $\varepsilon_0$ | T·m/A | [3.2](lessons/03-02-sources-of-magnetic-field.md) |
| $\mathbf J$ | current density — current per unit cross-sectional area | A/m² | [3.2](lessons/03-02-sources-of-magnetic-field.md) |
| $I_{\text{enc}}$ | current threading an Amperian loop | A | [3.2](lessons/03-02-sources-of-magnetic-field.md) |
| $n$ | solenoid turns **per metre** (not the total count) | m⁻¹ | [3.2](lessons/03-02-sources-of-magnetic-field.md) |
| $\Phi_B$ | magnetic flux — how much $\mathbf B$ threads a loop | Wb = T·m² | [3.3](lessons/03-03-electromagnetic-induction.md) |
| $N$ | number of turns in a coil (their EMFs add) | — | [3.3](lessons/03-03-electromagnetic-induction.md) |
| $L$ | self-inductance, flux per amp (**also** a rod's length in the same lesson) | H = Wb/A | [3.3](lessons/03-03-electromagnetic-induction.md) |
| $I_d$ | displacement current — a changing $\mathbf E$ acting like a current | A | [4.1](lessons/04-01-maxwells-equations.md) |
| $\nabla\cdot$, $\nabla\times$ | divergence (net outflow per volume) and curl (local circulation) | — | [4.1](lessons/04-01-maxwells-equations.md) |
| $c$ | speed of light in vacuum, $1/\sqrt{\mu_0\varepsilon_0}$ | m/s | [4.2](lessons/04-02-electromagnetic-waves.md) |
| $k$ | wavenumber $2\pi/\lambda$ — radians of phase per metre | rad/m | [4.2](lessons/04-02-electromagnetic-waves.md) |
| $\lambda$, $f$ | wavelength and frequency of a wave | m, Hz | [4.2](lessons/04-02-electromagnetic-waves.md) |
| $\nabla^2$ | Laplacian $\partial_x^2 + \partial_y^2 + \partial_z^2$ — the wave equation's spatial side | m⁻² | [4.2](lessons/04-02-electromagnetic-waves.md) |
| $\mathbf S$ | Poynting vector — power per area, pointing where the energy goes | W/m² | [4.3](lessons/04-03-energy-poynting.md) |
| $I = \langle S\rangle$ | intensity — the time-averaged $S$ a detector actually feels | W/m² | [4.3](lessons/04-03-energy-poynting.md) |
| $P_{\text{rad}}$ | radiation pressure — light's push on a surface | Pa = N/m² | [4.3](lessons/04-03-energy-poynting.md) |

## Definitions

### Electric field

Strip the feeler out of Coulomb's law and what's left is a property of the point
in space itself: how hard a unit of positive charge would be shoved there.

$$\mathbf E \equiv \frac{\mathbf F}{q_0}, \qquad \mathbf F = q\mathbf E$$

*Introduced:* [1.1](lessons/01-01-coulomb-electric-field.md)

### Superposition

Fields add like arrows, not like numbers: each source contributes as if the
others weren't there, and you sum component by component.

$$\mathbf E = \sum_i \mathbf E_i, \qquad V = \sum_i \frac{kq_i}{r_i}\ \ (\text{signed scalars, no components})$$

*Introduced:* [1.1](lessons/01-01-coulomb-electric-field.md)

### Electric flux

How many field lines poke through a surface, counted plus for outward and minus
for inward.

$$\Phi_E = \oint \mathbf E\cdot d\mathbf A$$

*Introduced:* [1.2](lessons/01-02-gauss-law.md)

### Gauss's law

Wrap any closed bag around anything: the net flux out depends **only** on the
charge inside — not the bag's shape, size, or where the charge sits in it.

$$\oint \mathbf E\cdot d\mathbf A = \frac{Q_{\text{enc}}}{\varepsilon_0}, \qquad \nabla\cdot\mathbf E = \frac{\rho}{\varepsilon_0}$$

The two forms are the **divergence theorem** apart. Always true; only *useful*
for extracting $E$ when symmetry lets you pull $E$ out of the integral.

*Introduced:* [1.2](lessons/01-02-gauss-law.md)

### Electric potential

Electrical height, in volts: the work per unit charge to get here. A number at
every point, so it adds without geometry — and the field runs downhill from it.

$$\Delta V = -\int_A^B \mathbf E\cdot d\mathbf l, \qquad \mathbf E = -\nabla V, \qquad 1\ \mathrm{V} = 1\ \mathrm{J/C}$$

*Introduced:* [1.3](lessons/01-03-electric-potential.md)

### Equipotential

A surface where $V$ is constant — sliding a charge along it is free, and the
field crosses it at a right angle (a gradient is always normal to its level set).

*Introduced:* [1.3](lessons/01-03-electric-potential.md)

### Conductor in electrostatic equilibrium

A self-flattening puddle of charge: any interior field would push the free
electrons until they cancelled it, so charge flees to the surface, the inside
field is zero, and the whole body sits at one potential.

*Introduced:* [2.1](lessons/02-01-capacitance.md)

### Capacitance

How much charge a pair of conductors banks per volt pushed across them. Fixed by
geometry and filling material alone — putting more charge on doesn't change it.

$$C = \frac{Q}{V}, \qquad 1\ \mathrm{F} = 1\ \mathrm{C/V}$$

*Introduced:* [2.1](lessons/02-01-capacitance.md)

### Dielectric constant

Slide an insulator into the gap; its molecules polarize and partly cancel the
field, so the same charge costs less voltage and the capacitance rises.

$$C \to \kappa C, \qquad \kappa \geq 1$$

*Introduced:* [2.1](lessons/02-01-capacitance.md)

### Current

The rate charge streams past a cross-section. Conventional current points the way
*positive* charge would move — out of a battery's positive terminal.

$$I = \frac{dQ}{dt}, \qquad 1\ \mathrm{A} = 1\ \mathrm{C/s}$$

*Introduced:* [2.2](lessons/02-02-dc-circuits.md)

### Ohm's law

Push divided by choke gives flow. Note this is a *material* property that happens
to hold well for metals — not a law of nature like Gauss's.

$$V = IR, \qquad 1\ \Omega = 1\ \mathrm{V/A}$$

*Introduced:* [2.2](lessons/02-02-dc-circuits.md)

### Kirchhoff's rules

Two conservation laws in circuit clothing: charge doesn't pile up at a junction,
and a charge carried once around a loop gains exactly what it loses.

$$\text{junction (charge):}\ \sum I_{\text{in}} = \sum I_{\text{out}} \qquad\qquad \text{loop (energy):}\ \sum V = 0$$

*Introduced:* [2.2](lessons/02-02-dc-circuits.md)

### EMF

The push a source supplies, in energy per unit charge — what a battery or an
induced loop does for the current. Measured in volts, but it is **not** a force
and not a drop across a component.

*Introduced:* [2.2](lessons/02-02-dc-circuits.md)

### Time constant

The one number that sets how fast an $RC$ circuit fills or drains. Each $\tau$
closes about 63 per cent of the remaining gap.

$$\tau = RC \quad (\Omega\cdot\mathrm{F} = \mathrm{s})$$

*Introduced:* [2.3](lessons/02-03-rc-circuits.md)

### Lorentz force

The complete force on a charge: the electric part shoves along $\mathbf E$, the
magnetic part shoves perpendicular to both $\mathbf v$ and $\mathbf B$.

$$\mathbf F = q\big(\mathbf E + \mathbf v\times\mathbf B\big), \qquad |\mathbf F_{\text{mag}}| = qvB\sin\theta$$

Because $\mathbf F_{\text{mag}}\perp\mathbf v$, the magnetic force does **zero
work** — it steers, never speeds up.

*Introduced:* [3.1](lessons/03-01-magnetic-force.md)

### Biot–Savart law

Magnetism's Coulomb's law: chop the current into pieces, each throws off a
$1/r^2$ field pointing *sideways*, and you add them all up.

$$d\mathbf B = \frac{\mu_0}{4\pi}\,\frac{I\,d\mathbf l\times\hat{\mathbf r}}{r^2}$$

*Introduced:* [3.2](lessons/03-02-sources-of-magnetic-field.md)

### Ampère's law

Magnetism's Gauss's law: walk a closed loop, add up $\mathbf B$ along your path,
and the total is $\mu_0$ times whatever current threads the loop.

$$\oint \mathbf B\cdot d\mathbf l = \mu_0 I_{\text{enc}}, \qquad \nabla\times\mathbf B = \mu_0\mathbf J$$

The two forms are **Stokes' theorem** apart. (The complete version carries
Maxwell's displacement term — see the four-equation table below.)

*Introduced:* [3.2](lessons/03-02-sources-of-magnetic-field.md)

### Magnetic flux

A count of how many field arrows thread a loop — more field, more area, or a more
face-on angle all raise it.

$$\Phi_B = \int \mathbf B\cdot d\mathbf A = BA\cos\theta \ \ (\text{flat loop, uniform field}), \qquad 1\ \mathrm{Wb} = 1\ \mathrm{T\,m^2}$$

*Introduced:* [3.3](lessons/03-03-electromagnetic-induction.md)

### Faraday's law

A loop cares only about *change*: the faster the flux through it moves, the
harder it drives current around itself. No battery required.

$$\mathcal{E} = -\frac{d\Phi_B}{dt}, \qquad \mathcal{E} = -N\frac{d\Phi_B}{dt}\ \ (N \text{ turns})$$

*Introduced:* [3.3](lessons/03-03-electromagnetic-induction.md)

### Lenz's law

The minus sign, read out loud: the induced current's own field **opposes the
change that created it**. It's energy conservation — the other sign would be free
energy.

*Introduced:* [3.3](lessons/03-03-electromagnetic-induction.md)

### Self-inductance

A coil's flux per amp of its own current. Change that current and the coil pushes
back on itself, which is why current through an inductor can't jump.

$$\mathcal{E} = -L\frac{dI}{dt}, \qquad 1\ \mathrm{H} = 1\ \mathrm{Wb/A} = 1\ \mathrm{V\,s/A}$$

*Introduced:* [3.3](lessons/03-03-electromagnetic-induction.md)

### Displacement current

A changing electric field sources $\mathbf B$ exactly as a real current would.
Nothing is flowing — "current" is by analogy (same units, same role).

$$I_d = \varepsilon_0\frac{d\Phi_E}{dt}$$

Not optional: without it, taking $\nabla\cdot$ of Ampère's law would demand
$\nabla\cdot\mathbf J = 0$, i.e. charge could never accumulate. With it you get
the continuity equation $\nabla\cdot\mathbf J + \partial_t\rho = 0$ — and light.

*Introduced:* [4.1](lessons/04-01-maxwells-equations.md)

### Poynting vector

One arrow that says where the field's energy is going and how fast: point along
$\mathbf E$, curl toward $\mathbf B$, and your thumb is the direction of travel.

$$\mathbf S = \frac{1}{\mu_0}\,\mathbf E\times\mathbf B \qquad (\mathrm{W/m^2})$$

*Introduced:* [4.3](lessons/04-03-energy-poynting.md)

### Intensity

What a detector feels: the time-average of the pulsing $\mathbf S$. It scales
with the **square** of the field amplitude.

$$I = \langle S\rangle = \tfrac12\varepsilon_0 c E_0^2$$

*Introduced:* [4.3](lessons/04-03-energy-poynting.md)

### Radiation pressure

Light carries momentum, so it presses. Bouncing it off gives twice the kick of
absorbing it — the light's momentum reverses instead of merely stopping.

$$P_{\text{rad}} = \frac{I}{c}\ (\text{absorbed}), \qquad P_{\text{rad}} = \frac{2I}{c}\ (\text{reflected})$$

*Introduced:* [4.3](lessons/04-03-energy-poynting.md)

## Formulas and rules

### Constants

Every number the course actually plugs in.

| Constant | Value | What it is |
|---|---|---|
| $e$ | $1.6\times10^{-19}\ \mathrm{C}$ | elementary charge |
| $\varepsilon_0$ | $8.85\times10^{-12}\ \mathrm{C^2/(N\,m^2)} = 8.85\times10^{-12}\ \mathrm{F/m}$ | permittivity of free space |
| $k = 1/4\pi\varepsilon_0$ | $8.99\times10^{9}\ \mathrm{N\,m^2/C^2}$ | Coulomb constant |
| $\mu_0$ | $4\pi\times10^{-7}\ \mathrm{T\,m/A}$ | permeability of free space |
| $c = 1/\sqrt{\mu_0\varepsilon_0}$ | $2.998\times10^{8}\ \mathrm{m/s}$ | speed of light in vacuum |
| $m_p$ | $1.67\times10^{-27}\ \mathrm{kg}$ | proton mass (orbit and accelerator problems) |
| $1\ \mathrm{eV}$ | $1.6\times10^{-19}\ \mathrm{J}$ | energy of $e$ across one volt |
| solar constant | $\approx 1360\ \mathrm{W/m^2}$ | sunlight intensity at Earth's orbit |

Prefixes that show up constantly: $\mathrm{n} = 10^{-9}$, $\mu = 10^{-6}$,
$\mathrm{m} = 10^{-3}$, $\mathrm{k} = 10^{3}$, $\mathrm{M} = 10^{6}$,
and $\mathrm{p} = 10^{-12}$ (picofarads).

*From* [1.1](lessons/01-01-coulomb-electric-field.md), [3.2](lessons/03-02-sources-of-magnetic-field.md), [4.2](lessons/04-02-electromagnetic-waves.md)

### Derived SI units, unpacked

Half of all unit checks in this course are one of these substitutions.

| Unit | Equals |
|---|---|
| $\mathrm{V}$ | $\mathrm{J/C}$ |
| $\mathrm{N/C}$ | $\mathrm{V/m}$ |
| $\mathrm{F}$ | $\mathrm{C/V}$; $\varepsilon_0$ in F/m |
| $\Omega$ | $\mathrm{V/A}$; $\Omega\cdot\mathrm{F} = \mathrm{s}$ |
| $\mathrm{W}$ | $\mathrm{J/s} = \mathrm{V\,A}$ |
| $\mathrm{T}$ | $\mathrm{N/(A\,m)} = \mathrm{kg/(C\,s)}$ |
| $\mathrm{Wb}$ | $\mathrm{T\,m^2}$; $\mathrm{Wb/s} = \mathrm{V}$ |
| $\mathrm{H}$ | $\mathrm{Wb/A} = \mathrm{V\,s/A}$ |
| $\mathrm{Pa}$ | $\mathrm{N/m^2}$; $(\mathrm{W/m^2})/(\mathrm{m/s}) = \mathrm{Pa}$ |

### Fields of the standard charge distributions

Get these four by symmetry and you've covered nearly every electrostatics
problem. Note the geometry in the falloff: point $1/r^2$, line $1/r$, plane flat.

| Source | Field | Gaussian surface |
|---|---|---|
| point charge $q$ | $E = \dfrac{kq}{r^2} = \dfrac{q}{4\pi\varepsilon_0 r^2}$ | sphere, area $4\pi r^2$ |
| infinite line, density $\lambda$ | $E = \dfrac{\lambda}{2\pi\varepsilon_0 r} = \dfrac{2k\lambda}{r}$ | cylinder, curved area $2\pi rL$ |
| infinite plane, density $\sigma$ | $E = \dfrac{\sigma}{2\varepsilon_0}$ (independent of distance) | pillbox, **two** caps: area $2A$ |
| between capacitor plates ($+\sigma$ facing $-\sigma$) | $E = \dfrac{\sigma}{\varepsilon_0} = \dfrac{Q}{\varepsilon_0 A}$ | — (the two sheets' fields add in the gap) |
| uniform ball, charge $Q$, radius $R$ | $E_{\text{in}} = \dfrac{kQ}{R^3}r$ (linear), $E_{\text{out}} = \dfrac{kQ}{r^2}$ | sphere; inside, $Q_{\text{enc}} = Q\,r^3/R^3$ |

**The Gaussian-surface recipe.** (1) Spot the symmetry and pick a surface on
which $E$ is constant and either parallel or perpendicular to $d\mathbf A$
everywhere. (2) Then the integral collapses:

$$\oint\mathbf E\cdot d\mathbf A = E\times(\text{area that } \mathbf E \text{ actually pierces}).$$

(3) Set that equal to $Q_{\text{enc}}/\varepsilon_0$ and solve for $E$.

*From* [1.1](lessons/01-01-coulomb-electric-field.md), [1.2](lessons/01-02-gauss-law.md), [2.1](lessons/02-01-capacitance.md)

### Potential, energy, and work

$$V = \frac{kq}{r}\ (V = 0 \text{ at infinity}), \qquad U = qV, \qquad U_{\text{pair}} = \frac{kq_1q_2}{r}$$

$$W_{\text{ext}} = q\,\Delta V, \qquad \mathbf E = -\nabla V, \qquad V = Ed \ \ (\text{uniform field across a gap } d)$$

Potential falls off as $1/r$ — gentler than the field's $1/r^2$ — and it is a
signed scalar, so many charges just add. A negative $U_{\text{pair}}$ means
assembly *released* energy (opposite charges attract).

*From* [1.3](lessons/01-03-electric-potential.md)

### Capacitors

$$C = \frac{\varepsilon_0 A}{d} \ \ (\text{parallel plate}), \qquad C \to \kappa C \ \ (\text{dielectric})$$

$$U = \tfrac12 CV^2 = \tfrac12 QV = \frac{Q^2}{2C}, \qquad u = \tfrac12\varepsilon_0 E^2, \qquad u_B = \frac{B^2}{2\mu_0}$$

The energy is $\tfrac12 QV$, not $QV$ — the voltage climbs from zero as you
charge, so you pay the average. The energy lives in the field, not on the plates.

**When something changes, ask what is clamped.** Battery connected → $V$ is held
fixed; battery disconnected → $Q$ is held fixed. With $\kappa$ inserted:

| Clamped | $Q$ | $V$ | $E$ | $U$ |
|---|---|---|---|---|
| $V$ (battery on) | $\times\kappa$ | fixed | fixed | $\times\kappa$ |
| $Q$ (isolated) | fixed | $\div\kappa$ | $\div\kappa$ | $\div\kappa$ |

*From* [2.1](lessons/02-01-capacitance.md), [4.3](lessons/04-03-energy-poynting.md)

### Series and parallel — the table that gets reversed

Resistors and capacitors combine **opposite** ways. This is the single most
common slip in Module 2.

| | Series | Parallel |
|---|---|---|
| resistors | $R_{\text{eq}} = \sum R_i$ (same current) | $\dfrac{1}{R_{\text{eq}}} = \sum \dfrac{1}{R_i}$ (same voltage) |
| capacitors | $\dfrac{1}{C_{\text{eq}}} = \sum \dfrac{1}{C_i}$ (same charge) | $C_{\text{eq}} = \sum C_i$ (same voltage) |

For exactly two in the reciprocal case, $X_{\text{eq}} = \dfrac{X_1X_2}{X_1+X_2}$
— always smaller than either. Sanity check: two equal $R$ in parallel give $R/2$.

*From* [2.1](lessons/02-01-capacitance.md), [2.2](lessons/02-02-dc-circuits.md)

### DC circuit relations

$$V = IR, \qquad P = IV = I^2R = \frac{V^2}{R}, \qquad V_{\text{term}} = \mathcal{E} - Ir$$

Solving a network: collapse series/parallel groups to one $R_{\text{eq}}$, get the
total current from $\mathcal{E}/R_{\text{eq}}$, then walk back out — the same
current through everything in series, the same voltage across everything in
parallel. For anything irreducible, write the junction rule at each node and the
loop rule around each independent loop (EMF a rise, each $IR$ a fall) and solve
the linear system. Check by comparing power supplied, $\sum\mathcal{E}I$, with
power dissipated, $\sum I^2R$.

*From* [2.2](lessons/02-02-dc-circuits.md)

### RC transients

The loop rule with a capacitor is a first-order linear ODE — a rate ($R\dot q$)
plus a level ($q/C$).

$$R\frac{dq}{dt} + \frac{q}{C} = \mathcal{E}$$

| | Charging from empty | Discharging from $q_0$ |
|---|---|---|
| charge | $q(t) = C\mathcal{E}\left(1 - e^{-t/RC}\right)$ | $q(t) = q_0 e^{-t/RC}$ |
| current | $I(t) = \dfrac{\mathcal{E}}{R}e^{-t/RC}$ | $I(t) = \dfrac{q_0}{RC}e^{-t/RC}$ |
| $t = 0$ | capacitor is a bare wire: $I_0 = \mathcal{E}/R$ | $I$ is maximum |
| $t \to \infty$ | capacitor is an open gap: $I \to 0$, $Q_\infty = C\mathcal{E}$ | everything decays to zero |

Milestones: one $\tau$ reaches about 63 per cent of full (or leaves 37 per cent);
after $5\tau$ the transient is under 1 per cent. To hit a fraction, invert:
$t = \tau\ln\!\big(1/(\text{fraction remaining})\big)$ — e.g. 10 per cent left at
$t = \tau\ln 10 \approx 2.3\tau$.

**Energy ledger.** Charging fully, the battery does $C\mathcal{E}^2$, the
capacitor keeps $\tfrac12 C\mathcal{E}^2$, and the resistor burns the other half
— **exactly half, whatever $R$ is**.

*From* [2.3](lessons/02-03-rc-circuits.md)

### Charged particles in a magnetic field

$$r = \frac{mv}{qB}, \qquad \omega = \frac{qB}{m}, \qquad T = \frac{2\pi m}{qB}$$

Faster particles run bigger circles in the **same time** — the cyclotron fact:
$\omega$ and $T$ carry no $v$. Velocity along $\mathbf B$ feels no force and just
coasts, so a tilted velocity gives a helix rather than a circle.

$$\mathbf F = I\,\mathbf L\times\mathbf B, \qquad |F| = BIL\sin\theta \qquad (\text{force on a current})$$

$$v = \frac{E}{B} \qquad (\text{velocity selector: the one speed that passes undeflected, independent of } q \text{ and } m)$$

*From* [3.1](lessons/03-01-magnetic-force.md)

### Fields of the standard currents

| Source | Field | How you get it |
|---|---|---|
| infinite straight wire, current $I$ | $B = \dfrac{\mu_0 I}{2\pi r}$, circling the wire | Amperian circle, length $2\pi r$ |
| long solenoid, $n$ turns per metre | $B = \mu_0 n I$, uniform inside, $\approx 0$ outside | rectangular loop, one side inside |
| two parallel wires, separation $d$ | $\dfrac{F}{L} = \dfrac{\mu_0 I_1 I_2}{2\pi d}$ — same direction **attract** | wire 1's field, then $I\mathbf L\times\mathbf B$ |

**Right-hand rule for the wire field:** thumb along the current, fingers curl the
way $\mathbf B$ points. The lines are closed circles — no monopoles means they
have nowhere to begin or end.

*From* [3.2](lessons/03-02-sources-of-magnetic-field.md)

### Induction

$$\Phi_B = BA\cos\theta \quad\Longrightarrow\quad \text{three ways to change it: change } B,\ A,\ \text{or } \theta$$

| Case | Result |
|---|---|
| ramping field, fixed loop | $\lvert\mathcal{E}\rvert = NA\,\dfrac{dB}{dt}$ |
| rod of length $L$ sliding at $v$ (area case) | $\mathcal{E} = BLv$ |
| coil of $N$ turns spinning at $\omega$ (angle case) | $\mathcal{E} = NBA\,\omega\sin\omega t$, peak $NBA\omega$, frequency $f = \omega/2\pi$ |

**The sliding-rod ledger** (Boss problem 3): $\mathcal{E} = BLv$, then
$I = \mathcal{E}/R$, then the retarding force $F = BIL$, and finally
$P_{\text{mech}} = Fv = I^2R = P_{\text{elec}}$ — every joule of mechanical work
becomes a joule of heat. That equality *is* Lenz's law with numbers on it.

*From* [3.3](lessons/03-03-electromagnetic-induction.md)

### Maxwell's equations

Two divergences and two curls. Equations 1–2 pass between the local and global
forms through the **divergence theorem**; equations 3–4 through **Stokes'
theorem** — the symbol tells you which.

| # | Name | Differential | Integral | In one line |
|---|---|---|---|---|
| 1 | Gauss (E) | $\nabla\cdot\mathbf E = \dfrac{\rho}{\varepsilon_0}$ | $\displaystyle\oint \mathbf E\cdot d\mathbf A = \frac{Q_{\text{enc}}}{\varepsilon_0}$ | charge is the source of $\mathbf E$ |
| 2 | No monopoles | $\nabla\cdot\mathbf B = 0$ | $\displaystyle\oint \mathbf B\cdot d\mathbf A = 0$ | $\mathbf B$ has no sources; its lines close |
| 3 | Faraday | $\nabla\times\mathbf E = -\dfrac{\partial\mathbf B}{\partial t}$ | $\displaystyle\oint \mathbf E\cdot d\boldsymbol\ell = -\frac{d\Phi_B}{dt}$ | changing magnetic flux drives a circulating $\mathbf E$ |
| 4 | Ampère–Maxwell | $\nabla\times\mathbf B = \mu_0\mathbf J + \mu_0\varepsilon_0\dfrac{\partial\mathbf E}{\partial t}$ | $\displaystyle\oint \mathbf B\cdot d\boldsymbol\ell = \mu_0 I_{\text{enc}} + \mu_0\varepsilon_0\frac{d\Phi_E}{dt}$ | current **and** changing electric flux drive a circulating $\mathbf B$ |

Plus the force law that makes them physics: $\mathbf F = q(\mathbf E + \mathbf v\times\mathbf B)$.

**In vacuum** ($\rho = 0$, $\mathbf J = 0$) they reduce to
$\nabla\cdot\mathbf E = 0$, $\nabla\cdot\mathbf B = 0$,
$\nabla\times\mathbf E = -\partial_t\mathbf B$,
$\nabla\times\mathbf B = \mu_0\varepsilon_0\,\partial_t\mathbf E$ — and 3 and 4
are near-mirrors, each field's curl fed by the other's rate of change.

*From* [4.1](lessons/04-01-maxwells-equations.md), [4.2](lessons/04-02-electromagnetic-waves.md)

### The wave equation and the plane wave

Take the curl of Faraday's law, use
$\nabla\times(\nabla\times\mathbf E) = \nabla(\nabla\cdot\mathbf E) - \nabla^2\mathbf E$
(the first term dies because $\nabla\cdot\mathbf E = 0$ in vacuum), then
substitute Ampère–Maxwell on the right:

$$\nabla^2\mathbf E = \mu_0\varepsilon_0\frac{\partial^2\mathbf E}{\partial t^2}, \qquad c = \frac{1}{\sqrt{\mu_0\varepsilon_0}} \approx 3\times10^{8}\ \mathrm{m/s}$$

The identical manipulation from Ampère–Maxwell gives the same equation for
$\mathbf B$. A plane wave travelling along $x$:

$$\mathbf E = E_0\cos(kx - \omega t)\,\hat y, \qquad \mathbf B = B_0\cos(kx - \omega t)\,\hat z$$

| Locked-in relation | Meaning |
|---|---|
| $\mathbf E\perp\mathbf B\perp$ direction of travel | the wave is **transverse**; $\mathbf E\times\mathbf B$ points where it goes |
| same $\cos(kx-\omega t)$ | $\mathbf E$ and $\mathbf B$ are exactly **in phase** |
| $E_0 = cB_0$ | amplitudes locked (a unit mismatch, not a weakness) |
| $\omega/k = c$, $\omega = 2\pi f$, $k = 2\pi/\lambda$ | hence $c = \lambda f$ |

**The spectrum**, by wavelength: radio (metres) → microwave → infrared →
**visible** (about 400–700 nm) → ultraviolet → X-ray → gamma (picometres).
Nothing in the derivation picks a frequency, so all of them travel at $c$ and are
the same physical object at different scales.

*From* [4.2](lessons/04-02-electromagnetic-waves.md), [4.3](lessons/04-03-energy-poynting.md)

### Energy, flux, and pressure of a wave

$$u = \tfrac12\varepsilon_0 E^2 + \frac{B^2}{2\mu_0}, \qquad \mathbf S = \frac{1}{\mu_0}\mathbf E\times\mathbf B, \qquad S = \frac{EB}{\mu_0} = \frac{E^2}{\mu_0 c}$$

In a **free wave** the two halves are exactly equal (because $B = E/c$ and
$c^2 = 1/\mu_0\varepsilon_0$), so $u = \varepsilon_0 E^2$ — just double the
electric part. In a static capacitor or solenoid there is only one kind, so this
shortcut does not apply.

$$I = \langle S\rangle = \tfrac12\varepsilon_0 c E_0^2 = \langle u\rangle c, \qquad E_0 = \sqrt{\frac{2I}{\varepsilon_0 c}}, \qquad P_{\text{rad}} = \frac{I}{c}\ \text{or}\ \frac{2I}{c}$$

Force on a fully reflecting target of area $A$ intercepting beam power $P$:
$F = 2IA/c = 2P/c$.

*From* [4.3](lessons/04-03-energy-poynting.md)

## Assumed, not taught here

This is a Tier 0 refresher standing on `calc-refresher` and `ode-refresher`. Two
kinds of rows below: prerequisites with a home elsewhere, and a short list of
facts the lessons *use* with no home anywhere in the library — those are written
out here because this card is the only place they exist.

**Vector calculus — the machinery Maxwell's equations are made of.**

| Fact | Where it's taught |
|---|---|
| Divergence $\nabla\cdot\mathbf F$ (net outflow) and curl $\nabla\times\mathbf F$ (local circulation) | [calc-refresher 5.1](../calc-refresher/lessons/05-01-vector-fields-div-curl.md) |
| Line integral $\int_C\mathbf F\cdot d\mathbf l$ (work along a path) and flux $\iint_S\mathbf F\cdot\mathbf n\,dS$ | [calc-refresher 5.2](../calc-refresher/lessons/05-02-line-integrals-and-flux.md) |
| Divergence theorem $\oiint_S\mathbf F\cdot\mathbf n\,dS = \iiint_V(\nabla\cdot\mathbf F)\,dV$ — this **is** Gauss's law | [calc-refresher 5.3](../calc-refresher/lessons/05-03-green-stokes-divergence.md) |
| Stokes' theorem $\oint_C\mathbf F\cdot d\mathbf r = \iint_S(\nabla\times\mathbf F)\cdot\mathbf n\,dS$ — this **is** Ampère's and Faraday's | [calc-refresher 5.3](../calc-refresher/lessons/05-03-green-stokes-divergence.md) |
| Green's theorem (the flat-plane parent of the other two) and orientation conventions | [calc-refresher 5.3](../calc-refresher/lessons/05-03-green-stokes-divergence.md) |
| $\nabla\times(\nabla f) = \mathbf 0$ and $\nabla\cdot(\nabla\times\mathbf F) = 0$ — the identity behind $\mathbf E = -\nabla V$ and behind the displacement-current argument | [calc-refresher 5.1](../calc-refresher/lessons/05-01-vector-fields-div-curl.md) |
| Gradient as steepest ascent; level sets are perpendicular to it (equipotentials) | [calc-refresher 4.1](../calc-refresher/lessons/04-01-partial-derivatives-and-gradient.md) |
| Path-independence of a conservative field — why the loop rule works | [calc-refresher 5.2](../calc-refresher/lessons/05-02-line-integrals-and-flux.md) |
| $\nabla^2 = \partial_x^2+\partial_y^2+\partial_z^2$ and $\nabla\times(\nabla\times\mathbf F) = \nabla(\nabla\cdot\mathbf F) - \nabla^2\mathbf F$ | **stated only here** — used in the [4.2](lessons/04-02-electromagnetic-waves.md) wave derivation; nearest home is [calc-refresher 5.1](../calc-refresher/lessons/05-01-vector-fields-div-curl.md), which builds $\nabla$ but never this identity |
| Cross product: $\lvert\mathbf a\times\mathbf b\rvert = ab\sin\theta$, direction by the right-hand rule, $\hat y\times\hat z = \hat x$ | [linalg-refresher 1.4](../linalg-refresher/lessons/01-04-cross-product-and-orientation.md) — including why $\mathbf v\parallel\mathbf B$ gives no force. Used as a tool in [mechanics-refresher 4.2](../mechanics-refresher/lessons/04-02-angular-momentum.md) ($\mathbf L = \mathbf r\times\mathbf p$) and [calc-refresher 5.1](../calc-refresher/lessons/05-01-vector-fields-div-curl.md) (curl); orientation conventions in [calc-refresher 5.3](../calc-refresher/lessons/05-03-green-stokes-divergence.md) |

**Mechanics and differential equations.**

| Fact | Where it's taught |
|---|---|
| Centripetal acceleration $v^2/r$; setting the inward force sum to $mv^2/r$ | [mechanics-refresher 1.3](../mechanics-refresher/lessons/01-03-applying-newtons-laws.md) |
| Work, kinetic energy $\tfrac12mv^2$, and the work–energy theorem (used for every accelerated-charge speed) | [mechanics-refresher 2.1](../mechanics-refresher/lessons/02-01-work-energy.md) |
| Momentum and its conservation in a bounce vs. a stick — the model for radiation pressure | [mechanics-refresher 2.3](../mechanics-refresher/lessons/02-03-momentum-collisions.md) |
| $\omega = 2\pi f$, period $T = 2\pi/\omega$, and sinusoidal motion generally | [mechanics-refresher 3.1](../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md) |
| First-order linear ODE by integrating factor, and separable ODEs — the whole of RC | [ode-refresher 1.2](../ode-refresher/lessons/01-02-separable-and-linear-first-order.md) |
| Exponential approach to equilibrium as a physical model | [ode-refresher 1.3](../ode-refresher/lessons/01-03-first-order-models.md) |
| Second-order damped oscillator $L\ddot q + R\dot q + q/C = \mathcal{E}$ (LRC, flagged forward in 2.3 and 3.3) | [ode-refresher 2.2](../ode-refresher/lessons/02-02-oscillations-damping.md) |
| The wave PDE $u_{tt} = c^2u_{xx}$ and what its solutions look like | [ode-refresher 4.2](../ode-refresher/lessons/04-02-intro-pdes-separation.md) |
| $\langle\cos^2\rangle = \tfrac12$ over a full period (the factor of two in intensity) | power-reduction identity, [precalculus 3.1](../precalculus/lessons/03-01-trig-functions-for-calculus.md) |

## Pitfalls

### Fields and superposition

- A lone charge has a field with nobody to feel it — source and feeler are different jobs, and $\mathbf F = q\mathbf E$ is only the reading-out step. *([1.1](lessons/01-01-coulomb-electric-field.md))*
- Superposition is **vector** addition: two equal fields at right angles give $\sqrt2 E$, not $2E$. Resolve into components first. *([1.1](lessons/01-01-coulomb-electric-field.md))*
- Safest habit with signs: compute the magnitude $k\lvert q\rvert/r^2$, then set the direction by hand — away from positive charge, toward negative. *([1.1](lessons/01-01-coulomb-electric-field.md))*

### Gauss's law and symmetry

- Flux depends on $Q_{\text{enc}}$ alone — not the surface's shape or size, not where inside the charge sits, not any charge outside. *([1.2](lessons/01-02-gauss-law.md))*
- Zero net flux does **not** mean zero field: the inward and outward pieces just cancel in the sum. *([1.2](lessons/01-02-gauss-law.md))*
- Gauss's law is always *true* but only *useful* when symmetry lets you pull $E$ out of the integral; a lopsided blob sends you back to Coulomb. The same caveat applies verbatim to Ampère's law. *([1.2](lessons/01-02-gauss-law.md), [3.2](lessons/03-02-sources-of-magnetic-field.md))*
- A pillbox has **two** caps, which is why an isolated plane gives $\sigma/2\varepsilon_0$ — while the gap between two oppositely charged plates gets $\sigma/\varepsilon_0$. *([1.2](lessons/01-02-gauss-law.md), [2.1](lessons/02-01-capacitance.md))*

### Potential versus energy

- $V$ is a property of space (volts, there whether or not a charge is); $U = qV$ is the energy of a *specific* charge in it (joules). *([1.3](lessons/01-03-electric-potential.md))*
- Big $V$ does not mean big $\mathbf E$ — the field is the *slope*, $-\nabla V$. $V$ can be huge and flat, or zero and steep. *([1.3](lessons/01-03-electric-potential.md))*
- "Scalar" means no components to resolve, not no signs: a nearby negative charge *lowers* $V$. *([1.3](lessons/01-03-electric-potential.md))*
- Keep the minus in $\mathbf E = -\nabla V$; the gradient points uphill and the field pushes positive charge down. *([1.3](lessons/01-03-electric-potential.md))*

### Capacitors and circuits

- $C$ is geometry (and $\kappa$) only. Change it and either $Q$ or $V$ must move — ask which one is clamped before anything else. *([2.1](lessons/02-01-capacitance.md))*
- Capacitors combine the **opposite** way from resistors: add in parallel, reciprocal-add in series. *([2.1](lessons/02-01-capacitance.md), [2.2](lessons/02-02-dc-circuits.md))*
- Stored energy is $\tfrac12 QV$, not $QV$ — and the missing half is exactly what the resistor burns while charging. *([2.1](lessons/02-01-capacitance.md), [2.3](lessons/02-03-rc-circuits.md))*
- Current is not "used up" by a resistor; *voltage* drops. In one loop the same $I$ passes through everything. *([2.2](lessons/02-02-dc-circuits.md))*
- Adding a parallel resistor always *lowers* total resistance — you opened another lane. Two equal $R$ in parallel give $R/2$, never $2R$. *([2.2](lessons/02-02-dc-circuits.md))*

### Transients

- Charge is continuous at a switch; **current can jump** (0 to $\mathcal{E}/R$ instantly). It's $q$, the integral, that must be smooth. *([2.3](lessons/02-03-rc-circuits.md))*
- A bigger battery does not charge faster: $\tau = RC$ contains no $\mathcal{E}$. It raises the final charge, not the pace. *([2.3](lessons/02-03-rc-circuits.md))*
- The resistor's drop is a *rate* ($R\dot q$) and the capacitor's is a *level* ($q/C$) — mixing them is what makes it a differential equation, not algebra. *([2.3](lessons/02-03-rc-circuits.md))*

### Magnetic force

- The magnetic force never changes speed: $\mathbf F\perp\mathbf v$ means zero work. Energy must come from an electric field. *([3.1](lessons/03-01-magnetic-force.md))*
- Motion *along* $\mathbf B$ feels nothing ($\sin\theta = 0$) — that component coasts, which is why a tilted velocity gives a helix. *([3.1](lessons/03-01-magnetic-force.md))*
- The right-hand rule gives $\mathbf v\times\mathbf B$; the force is $q$ times it, so **electrons curve the opposite way**. *([3.1](lessons/03-01-magnetic-force.md))*

### Sources of the magnetic field

- A current element's field is *sideways*, wrapping around the wire — not radially outward like Coulomb's. *([3.2](lessons/03-02-sources-of-magnetic-field.md))*
- There is no magnetic charge at the center of those loops: $\oint\mathbf B\cdot d\mathbf A = 0$ always, and $\nabla\cdot\mathbf B = 0$ forbids *sources*, not fields. *([3.2](lessons/03-02-sources-of-magnetic-field.md), [4.1](lessons/04-01-maxwells-equations.md))*

### Induction

- A big flux induces nothing; only the **rate of change** does. The strongest steady field on Earth gives zero EMF. *([3.3](lessons/03-03-electromagnetic-induction.md))*
- Lenz's minus sign is physics, not bookkeeping — drop it and you have free energy. Use the formula for the magnitude and "which way opposes the change?" for the direction. *([3.3](lessons/03-03-electromagnetic-induction.md))*
- EMF is in volts but is not a force and not a drop across a component: it's energy supplied per unit charge, the loop acting as a battery. *([2.2](lessons/02-02-dc-circuits.md), [3.3](lessons/03-03-electromagnetic-induction.md))*
- Self-inductance $L$ (henries) and a rod's length $L$ (metres) share a letter and nothing else. *([3.3](lessons/03-03-electromagnetic-induction.md))*

### Maxwell and waves

- Displacement current transports no charge — a *changing field* sources $\mathbf B$ the way a current would. *([4.1](lessons/04-01-maxwells-equations.md))*
- Don't drop $\mu_0\varepsilon_0\,\partial_t\mathbf E$ because it's tiny in a wire: in vacuum or a capacitor gap it is the **only** term, and deleting it deletes light and breaks charge conservation. *([4.1](lessons/04-01-maxwells-equations.md))*
- Match the form to its theorem: divergence (flux out of a closed surface) ↔ equations 1–2, curl (circulation round a loop) ↔ equations 3–4. *([4.1](lessons/04-01-maxwells-equations.md))*
- In a travelling wave $\mathbf E$ and $\mathbf B$ are exactly **in phase**, not 90° apart — that's the standing-wave case. *([4.2](lessons/04-02-electromagnetic-waves.md))*
- No medium is needed. With $\rho = 0$ and $\mathbf J = 0$ the wave still runs: the fields are each other's medium. *([4.2](lessons/04-02-electromagnetic-waves.md))*

### Energy flow

- $B_0 = E_0/c$ does not make the magnetic part weak — it's a unit mismatch, and the two energy densities come out **equal**. *([4.2](lessons/04-02-electromagnetic-waves.md), [4.3](lessons/04-03-energy-poynting.md))*
- The "just double the electric part" shortcut holds only for a free wave; a static capacitor or solenoid has one kind of field only. *([4.3](lessons/04-03-energy-poynting.md))*
- Intensity goes as the field **squared** — halve the amplitude and you quarter the brightness. *([4.3](lessons/04-03-energy-poynting.md))*
- Reflecting gives **twice** the pressure of absorbing, which is why solar sails are shiny rather than black. *([4.3](lessons/04-03-energy-poynting.md))*
