# Plasma Physics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

A plasma is charged matter whose own fields push it back. That feedback is the
whole subject, and physicists tame it at four levels of resolution — one particle
in given fields, a distribution in phase space, two interpenetrating fluids, and
one conducting fluid (MHD). Almost every problem starts the same way: compute the
characteristic scales, decide which level applies, then look up the drift, the
dispersion relation, or the equilibrium condition. This card is those three
lookups plus the constants.

For the fusion-engineering half of the story — reactivity tables, confinement
scaling, heating schemes, divertors, blankets — see the
[fusion-plasma card](../fusion-plasma/reference.md); this course stops at the
physics.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $n$, $n_0$ | number density (particles per m³); $n_0$ the unperturbed background | [1.1](lessons/01-01-what-is-a-plasma-debye.md) |
| $\lambda_D$ | Debye length — how far the plasma can hide a charge | [1.1](lessons/01-01-what-is-a-plasma-debye.md) |
| $T_e$, $T_i$ | electron / ion temperature; almost always quoted as the energy $k_BT$ in eV | [1.1](lessons/01-01-what-is-a-plasma-debye.md) |
| $\varphi$, $\phi$ | electrostatic potential (volts) | [1.1](lessons/01-01-what-is-a-plasma-debye.md) |
| $\omega_p$, $\omega_{pe}$ | electron plasma frequency — the plasma's natural ring (rad/s) | [1.2](lessons/01-02-plasma-frequency-parameter.md) |
| $\omega_{pi}$ | ion plasma frequency, $\omega_{pe}\sqrt{m_e/m_i}$ | [4.2](lessons/04-02-ion-acoustic-waves.md) |
| $\Lambda$ | plasma parameter $n\lambda_D^3$ — roughly the head-count in a Debye sphere | [1.2](lessons/01-02-plasma-frequency-parameter.md) |
| $v_{th}$ | thermal speed $\sqrt{k_BT/m}$ | [1.2](lessons/01-02-plasma-frequency-parameter.md) |
| $\Omega_c$, $\Omega_{ce}$, $\Omega_{ci}$ | cyclotron (gyro) frequency $\lvert q\rvert B/m$, per species | [1.3](lessons/01-03-gyration-exb-drift.md) |
| $r_L$ | Larmor (gyro) radius $mv_\perp/\lvert q\rvert B$ | [1.3](lessons/01-03-gyration-exb-drift.md) |
| $\mathbf{R}_{gc}$ | guiding centre — the slowly-moving centre of the gyro-orbit | [1.3](lessons/01-03-gyration-exb-drift.md) |
| $v_\parallel$, $v_\perp$ | speeds along and across $\mathbf{B}$ | [1.3](lessons/01-03-gyration-exb-drift.md) |
| $\mathbf{v}_E$ | the $\mathbf{E}\times\mathbf{B}$ drift of the guiding centre | [1.3](lessons/01-03-gyration-exb-drift.md) |
| $\mathbf{R}_c$, $R_c$ | vector to, and radius of, a field line's centre of curvature | [1.4](lessons/01-04-gradb-curvature-polarization-drifts.md) |
| $\mu$ | magnetic moment $mv_\perp^2/2B$ — the first adiabatic invariant | [1.5](lessons/01-05-adiabatic-invariants-mirrors.md) |
| $R_m$ (mirror) | mirror ratio $B_{\max}/B_{\min}$ | [1.5](lessons/01-05-adiabatic-invariants-mirrors.md) |
| $\theta_0$, $\theta_{lc}$ | pitch angle at the midplane, and the loss-cone half-angle | [1.5](lessons/01-05-adiabatic-invariants-mirrors.md) |
| $f(\mathbf{x},\mathbf{v},t)$ | distribution function — particles per unit 6-D phase-space volume | [2.1](lessons/02-01-distribution-function-moments.md) |
| $\mathbf{u}$, $\mathbf{u}_s$ | bulk (fluid) flow velocity, overall or per species $s$ | [2.1](lessons/02-01-distribution-function-moments.md) |
| $\mathsf{P}$, $p$ | pressure tensor and its scalar part $\tfrac13\mathrm{tr}\,\mathsf{P}=nk_BT$ | [2.1](lessons/02-01-distribution-function-moments.md) |
| $\varepsilon(k,\omega)$ | plasma dielectric function; waves live where it vanishes | [2.3](lessons/02-03-linearizing-vlasov-dispersion.md) |
| $v_\varphi$ | phase velocity $\omega/k$ — the speed resonant particles must match | [2.3](lessons/02-03-linearizing-vlasov-dispersion.md) |
| $\gamma$ (rate) | imaginary part of $\omega$: $\gamma<0$ damping, $\gamma>0$ growth | [2.4](lessons/02-04-landau-damping.md) |
| $\gamma$ (index) | adiabatic index in $p\propto n^\gamma$ — a different $\gamma$, read from context | [3.1](lessons/03-01-two-fluid-equations.md) |
| $\mathbf{R}_s$ | inter-species collisional friction force density | [3.1](lessons/03-01-two-fluid-equations.md) |
| $\rho$ | **mass** density $\sum_s n_sm_s\approx nm_i$ (not charge density) | [3.2](lessons/03-02-ideal-mhd-frozen-flux.md) |
| $\eta$ | resistivity (ohm-metres) | [3.2](lessons/03-02-ideal-mhd-frozen-flux.md) |
| $R_m$ (magnetic) | magnetic Reynolds number $\mu_0uL/\eta$ — same letters as the mirror ratio | [3.2](lessons/03-02-ideal-mhd-frozen-flux.md) |
| $D/Dt$ | material derivative $\partial_t+\mathbf{u}\cdot\nabla$ — rate of change riding along | [3.2](lessons/03-02-ideal-mhd-frozen-flux.md) |
| $p_B$ | magnetic pressure $B^2/2\mu_0$ | [3.3](lessons/03-03-magnetic-pressure-tension-beta.md) |
| $\beta$ | plasma beta $p/(B^2/2\mu_0)$ — particles versus field | [3.3](lessons/03-03-magnetic-pressure-tension-beta.md) |
| $\psi$ | poloidal flux function; its level sets are the flux surfaces | [3.4](lessons/03-04-mhd-equilibrium-pinches.md) |
| $\boldsymbol{\xi}$, $\delta W$ | trial fluid displacement, and the energy it costs | [3.5](lessons/03-05-mhd-stability-energy-principle.md) |
| $\boldsymbol{\kappa}$ | field-line curvature $(\mathbf{b}\cdot\nabla)\mathbf{b}$, pointing to the centre of curvature | [3.5](lessons/03-05-mhd-stability-energy-principle.md) |
| $c_s$ | ion-acoustic (sound) speed | [4.2](lessons/04-02-ion-acoustic-waves.md) |
| $v_A$ | Alfvén speed $B/\sqrt{\mu_0\rho}$ | [4.3](lessons/04-03-em-alfven-waves.md) |
| $v_*$ | diamagnetic drift speed, the drift-wave phase speed | [4.4](lessons/04-04-instabilities-two-stream-drift.md) |
| $\langle\sigma v\rangle$ | reactivity — cross section times speed, averaged over the Maxwellian (m³/s) | [5.1](lessons/05-01-fusion-lawson-criterion.md) |
| $\tau_E$ | energy confinement time — e-folding time for stored heat to leak | [5.1](lessons/05-01-fusion-lawson-criterion.md) |
| $q$ (safety) | safety factor — toroidal laps per poloidal lap; **not** a charge | [5.2](lessons/05-02-magnetic-confinement-tokamaks.md) |
| $\iota$ | rotational transform, $1/q$ | [5.2](lessons/05-02-magnetic-confinement-tokamaks.md) |
| $r$, $R$ | minor radius (the tube's own) and major radius (to the doughnut's axis) | [5.2](lessons/05-02-magnetic-confinement-tokamaks.md) |
| $r_c$, $r_{mp}$ | solar-wind sonic point, and magnetopause standoff distance | [5.3](lessons/05-03-solar-wind-magnetospheres.md) |
| $S$ | Lundquist number $\mu_0Lv_A/\eta$ — $R_m$ built on the Alfvén speed | [5.4](lessons/05-04-magnetic-reconnection.md) |
| $\delta$, $L$ (sheet) | current-sheet thickness and length, $\delta\ll L$ | [5.4](lessons/05-04-magnetic-reconnection.md) |

## Definitions

### Quasineutrality

The plasma keeps electrons and ions equal in number *on scales larger than one
Debye length* — not exactly, and not below that scale. Any imbalance raises a
potential, the potential summons a screening cloud, and the cloud erases it.

*Introduced:* [1.1](lessons/01-01-what-is-a-plasma-debye.md)

### Debye length

The distance at which electric attraction and thermal jostling balance, so it is
the range over which a plasma can screen a charge — and the ruler separating
"neutral" from "not."

$$\lambda_D = \sqrt{\frac{\varepsilon_0 k_B T_e}{n_0 e^2}}$$

*Introduced:* [1.1](lessons/01-01-what-is-a-plasma-debye.md)

### Debye shielding

A test charge recruits a cloud of opposite charge that cancels it from a distance,
turning the vacuum $1/r$ Coulomb potential into an exponentially cut-off one.

$$\varphi(r) = \frac{Q}{4\pi\varepsilon_0 r}\,e^{-r/\lambda_D}$$

Mathematically the **Yukawa** potential — the same $\nabla^2\varphi=\varphi/\lambda^2$
that gives a massive mediator a finite range.

*Introduced:* [1.1](lessons/01-01-what-is-a-plasma-debye.md)

### Plasma sheath

The thin non-neutral layer, a few $\lambda_D$ thick, where quasineutrality fails —
right against a wall or probe. It is why a surface immersed in plasma charges up.

*Introduced:* [1.1](lessons/01-01-what-is-a-plasma-debye.md)

### Plasma frequency

Displace the electrons and electrostatics yanks them back; they overshoot and
ring. That tempo is the plasma frequency, and it contains **no temperature**.

$$\omega_p = \sqrt{\frac{n e^2}{\varepsilon_0 m_e}}, \qquad \omega_p = \frac{v_{th,e}}{\lambda_D}$$

*Introduced:* [1.2](lessons/01-02-plasma-frequency-parameter.md)

### Plasma parameter

How many particles are available inside a Debye sphere to do the collective
shielding. Large means each particle feels a smooth average field — an ideal,
weakly coupled plasma; of order one means neighbours kick each other individually.

$$\Lambda \equiv n\lambda_D^3 \quad(\text{the literal head-count is } \tfrac{4\pi}{3}n\lambda_D^3)$$

*Introduced:* [1.2](lessons/01-02-plasma-frequency-parameter.md)

### Cyclotron frequency

How many radians per second a charge sweeps around a field line. Carries $\lvert q\rvert$,
so it is always positive; the sign of $q$ shows up only in the sense of rotation.

$$\Omega_c = \frac{\lvert q\rvert B}{m}$$

*Introduced:* [1.3](lessons/01-03-gyration-exb-drift.md)

### Larmor radius

The radius of that circle — bigger for a faster or heavier particle, smaller in a
stronger field. Ion orbits are the fat ones that reach the wall.

$$r_L = \frac{mv_\perp}{\lvert q\rvert B} = \frac{v_\perp}{\Omega_c}$$

*Introduced:* [1.3](lessons/01-03-gyration-exb-drift.md)

### Guiding centre

Stop watching the blur of the orbit and watch where its centre goes: write
$\mathbf{r} = \mathbf{R}_{gc} + \boldsymbol{\rho}$, fast gyration plus slow drift.
All of orbit theory is a hunt for how $\mathbf{R}_{gc}$ moves.

*Introduced:* [1.3](lessons/01-03-gyration-exb-drift.md)

### Magnetic moment

The gyration's perpendicular kinetic energy per unit field — equivalently the
current-loop moment $IA$ of the orbit. A plasma is **diamagnetic** because every
such loop opposes the field it sits in.

$$\mu \equiv \frac{mv_\perp^2}{2B}$$

*Introduced:* [1.5](lessons/01-05-adiabatic-invariants-mirrors.md)

### Adiabatic invariant

A quantity conserved not exactly but *because the field changes slowly* compared
with the motion it belongs to. $\mu$ holds while

$$\frac{r_L\lvert\nabla B\rvert}{B}\ll1, \qquad \frac{1}{\Omega_c}\frac{1}{B}\frac{\partial B}{\partial t}\ll1.$$

*Introduced:* [1.5](lessons/01-05-adiabatic-invariants-mirrors.md)

### Loss cone

The cone of launch directions too parallel to be mirrored — those particles leak
out the throat. It sorts by *direction*, never by speed or mass.

$$\sin^2\theta_{lc} = \frac{1}{R_m} = \frac{B_{\min}}{B_{\max}}$$

*Introduced:* [1.5](lessons/01-05-adiabatic-invariants-mirrors.md)

### Distribution function

The master object: how many particles sit in each little box of position **and**
velocity. Everything fluid-like is an average over it.

$$dN = f(\mathbf{x},\mathbf{v},t)\,d^3x\,d^3v, \qquad [f] = \mathrm{s^3\,m^{-6}}$$

*Introduced:* [2.1](lessons/02-01-distribution-function-moments.md)

### Maxwellian

The distribution a plasma relaxes to when left alone: an isotropic Gaussian bell
in velocity whose width grows as $\sqrt{T}$. The boring reference state — the
physics lives in departures from it.

$$f_M(\mathbf{v}) = n\left(\frac{m}{2\pi k_BT}\right)^{3/2}\exp\!\left(-\frac{mv^2}{2k_BT}\right)$$

*Introduced:* [2.1](lessons/02-01-distribution-function-moments.md)

### Vlasov equation

Phase-space density rides unchanged along Lorentz-force trajectories — the
collisionless Boltzmann equation. It is *self-consistent*: the fields in it are
moments of the $f$ it governs.

$$\frac{\partial f}{\partial t} + \mathbf{v}\cdot\nabla_{\mathbf{x}}f + \frac{q}{m}(\mathbf{E}+\mathbf{v}\times\mathbf{B})\cdot\nabla_{\mathbf{v}}f = 0$$

*Introduced:* [2.2](lessons/02-02-vlasov-equation.md)

### Jeans' theorem

A recipe for equilibria: any function of the constants of the motion is a
steady Vlasov solution. Pick $f=g(w)$ with $w=\tfrac12mv^2+q\phi$ and you are done;
the Maxwellian is the case $g\propto e^{-w/k_BT}$.

*Introduced:* [2.2](lessons/02-02-vlasov-equation.md)

### Plasma dielectric function

The plasma responds to a wave like a dielectric medium, and a wave exists exactly
where that response vanishes: $\varepsilon(k,\omega)=0$ **is** the dispersion relation.

$$\varepsilon(k,\omega) = 1 - \frac{\omega_p^2}{k^2}\int_L \frac{\partial\hat f_0/\partial v}{v-\omega/k}\,dv$$

*Introduced:* [2.3](lessons/02-03-linearizing-vlasov-dispersion.md)

### Landau contour

The integration path that dips **below** the pole at $v=\omega/k$. It is fixed by
causality (the wave was switched on at a finite time, so the Laplace transform is
defined for $\operatorname{Im}\omega>0$ and continued down), not by convenience.

$$\int_L \frac{g(v)}{v-v_\varphi}\,dv = \mathrm{P}\!\int\frac{g(v)}{v-v_\varphi}\,dv + i\pi\,g(v_\varphi)$$

*Introduced:* [2.3](lessons/02-03-linearizing-vlasov-dispersion.md)

### Landau damping

Collisionless energy exchange between a wave and the particles surfing at its
phase velocity. The sign is just the sign of the distribution's slope there:
falling (Maxwellian) damps, rising (beam) grows.

$$\gamma = -\frac{\varepsilon_i(k,\omega_r)}{\partial\varepsilon_r/\partial\omega} \;\propto\; \left.\frac{\partial\hat f_0}{\partial v}\right|_{v=\omega_r/k}$$

*Introduced:* [2.4](lessons/02-04-landau-damping.md)

### Closure problem

Every moment equation contains the next moment up, forever. You break the regress
by *assuming* thermodynamics — isothermal $p=nk_BT$ or adiabatic $p\propto n^\gamma$ —
not by taking one more moment.

*Introduced:* [3.1](lessons/03-01-two-fluid-equations.md)

### Ideal MHD

One conducting fluid, perfectly conducting: the electric field vanishes in the
fluid's rest frame, so the only lab-frame field is motional.

$$\mathbf{E} + \mathbf{u}\times\mathbf{B} = 0$$

*Introduced:* [3.2](lessons/03-02-ideal-mhd-frozen-flux.md)

### Frozen-in flux (Alfvén's theorem)

The magnetic flux through any patch of fluid never changes as that patch moves and
deforms — plasma and field lines are glued together *across* the field (they still
slide freely *along* it). Field-line topology is preserved; stretching a flux tube
amplifies its field.

$$\frac{d}{dt}\int_S \mathbf{B}\cdot d\mathbf{A} = 0 \quad(\text{ideal MHD})$$

*Introduced:* [3.2](lessons/03-02-ideal-mhd-frozen-flux.md)

### Magnetic Reynolds number

Advection of field versus resistive diffusion of it. Large means frozen-in; of
order one means the field slips and can reconnect.

$$R_m \sim \frac{\mu_0 uL}{\eta}$$

*Introduced:* [3.2](lessons/03-02-ideal-mhd-frozen-flux.md)

### Magnetic pressure

Crowded field lines shove toward emptier regions — but only **perpendicular** to
$\mathbf{B}$. Along the field the plasma slides free.

$$p_B \equiv \frac{B^2}{2\mu_0}$$

*Introduced:* [3.3](lessons/03-03-magnetic-pressure-tension-beta.md)

### Magnetic tension

A bent field line pulls itself straight, like a stretched string. The tension is
**twice** the pressure, and it is what plucks an Alfvén wave.

$$T \equiv \frac{B^2}{\mu_0} = 2p_B, \qquad \text{force per volume } = \frac{T}{R_c}\ \hat{\mathbf{n}}$$

*Introduced:* [3.3](lessons/03-03-magnetic-pressure-tension-beta.md)

### Plasma beta

Who wins the pressure contest — the particles or the field.

$$\beta \equiv \frac{p}{B^2/2\mu_0}, \qquad p = n_ek_BT_e + n_ik_BT_i$$

Fusion devices run at a few percent; the corona near $10^{-3}$; the solar wind near
1; stellar interiors far above 1.

*Introduced:* [3.3](lessons/03-03-magnetic-pressure-tension-beta.md)

### Flux surface

A nested surface of constant pressure that both field lines and current lines lie
inside — the geometric basis of magnetic confinement. It follows from dotting
force balance with $\mathbf{B}$ and with $\mathbf{J}$.

$$\mathbf{B}\cdot\nabla p = 0, \qquad \mathbf{J}\cdot\nabla p = 0$$

*Introduced:* [3.4](lessons/03-04-mhd-equilibrium-pinches.md)

### Energy principle

Displace the plasma by a trial $\boldsymbol{\xi}$ and check the sign of one
integral: stable if and only if $\delta W\ge0$ for every allowed displacement. It
is a purely *static* test — no time-dependence needed.

$$\omega^2 = \frac{\delta W[\boldsymbol{\xi}]}{K[\boldsymbol{\xi}]}, \qquad \delta W = -\tfrac12\!\int\boldsymbol{\xi}\cdot\mathbf{F}[\boldsymbol{\xi}]\,dV, \quad K = \tfrac12\!\int\rho\lvert\boldsymbol{\xi}\rvert^2 dV$$

Any $\boldsymbol{\xi}$ with $\delta W<0$ proves instability, growing at $\gamma=\sqrt{-\delta W/K}$.

*Introduced:* [3.5](lessons/03-05-mhd-stability-energy-principle.md)

### Good and bad curvature

Curvature acts as an effective gravity on the plasma, and heavy-over-light is
unstable. **Good** = field lines concave toward the plasma (they hug it, centre of
curvature on the plasma side): stabilizing. **Bad** = convex toward the plasma
(it perches on the outside of the bend): drives interchange.

*Introduced:* [3.5](lessons/03-05-mhd-stability-energy-principle.md)

### Cutoff and resonance

Two different ways a wave stops. A **cutoff** is $k\to0$: the wavelength runs to
infinity, $k^2$ goes negative just past it, and the wave **reflects**. A
**resonance** is $k\to\infty$: the wavelength collapses and the wave is
**absorbed**.

*Introduced:* [4.1](lessons/04-01-langmuir-cold-plasma-dielectric.md)

### Ion-acoustic speed

Plasma sound: hot light electrons supply the spring ($k_BT_e$), cold heavy ions
supply the inertia ($m_i$). The ion *mass* enters, the ion *temperature* mostly
does not.

$$c_s = \sqrt{\frac{k_BT_e}{m_i}} = \omega_{pi}\lambda_D \qquad\left(\text{warm ions: } c_s=\sqrt{\tfrac{k_B(T_e+3T_i)}{m_i}}\right)$$

*Introduced:* [4.2](lessons/04-02-ion-acoustic-waves.md)

### Alfvén speed

The speed a ripple runs along a magnetic field line: tension $B^2/\mu_0$ restores,
mass density $\rho$ resists. No temperature in it.

$$v_A \equiv \frac{B}{\sqrt{\mu_0\rho}} = c\,\frac{\Omega_{ci}}{\omega_{pi}}$$

*Introduced:* [4.3](lessons/04-03-em-alfven-waves.md)

### Instability

Not a different object from a wave — the *same* dispersion relation
$\varepsilon(k,\omega)=0$, with the complex root you used to discard. Find the free
energy (streaming, a density gradient, bad curvature) and $\gamma=\operatorname{Im}\omega>0$
says how fast it drains.

*Introduced:* [4.4](lessons/04-04-instabilities-two-stream-drift.md)

### Lawson criterion

Fusion pays for itself when alpha self-heating beats transport loss. Only the
trapped 3.5 MeV alpha counts — the 14.1 MeV neutron flies straight out.

$$n\tau_E \ge \frac{12\,k_BT}{\langle\sigma v\rangle E_\alpha}$$

*Introduced:* [5.1](lessons/05-01-fusion-lawson-criterion.md)

### Triple product

The temperature-tidy form of the same bar: hot times dense times well-confined.
Magnetic and inertial confinement sit in opposite corners of $(n,\tau_E)$ space and
must clear the same line.

$$nT\tau_E \gtrsim 3\times10^{21}\ \mathrm{m^{-3}\,keV\,s} \quad(\text{D–T near }15\ \mathrm{keV})$$

*Introduced:* [5.1](lessons/05-01-fusion-lawson-criterion.md) — deeper treatment on the [fusion-plasma card](../fusion-plasma/reference.md#triple-product)

### Rotational transform and the safety factor

Twist the field lines so each one threads top *and* bottom of the torus. That
doesn't stop the vertical drift — it lets charge flow along the field and **short
out** the vertical electric field before the killer $\mathbf{E}\times\mathbf{B}$ can build.

$$q = \frac{\text{toroidal turns}}{\text{poloidal turns}} \approx \frac{rB_\phi}{RB_\theta}, \qquad \iota = 1/q$$

Kruskal–Shafranov stability demands $q>1$; tokamaks run $q\sim1$ on axis rising to
$3$–$4$ at the edge.

*Introduced:* [5.2](lessons/05-02-magnetic-confinement-tokamaks.md) — see also [fusion-plasma](../fusion-plasma/reference.md#safety-factor)

### Magnetopause standoff

Where the solar wind's ram pressure is balanced by a planet's dipole magnetic
pressure. The sixth root makes it stubbornly insensitive to the wind.

$$\frac{r_{mp}}{R_E} = \left(\frac{B_0^2}{2\mu_0\rho_{sw}v_{sw}^2}\right)^{1/6}$$

*Introduced:* [5.3](lessons/05-03-solar-wind-magnetospheres.md)

### Lundquist number

The magnetic Reynolds number built on the Alfvén speed — the one dimensionless
number that sets the Sweet–Parker reconnection rate.

$$S \equiv \frac{\mu_0 L v_A}{\eta}$$

*Introduced:* [5.4](lessons/05-04-magnetic-reconnection.md)

### Magnetic reconnection

Anti-parallel fields forced together build a current sheet so thin that a tiny
resistivity finally bites; the lines snap, re-join at an X-point, and tension
slingshots plasma out at $v_A$. Field-line topology changes — the one thing ideal
MHD forbids.

*Introduced:* [5.4](lessons/05-04-magnetic-reconnection.md)

## Formulas and rules

### Constants and conversions

The course quotes temperatures as energies and densities in both m⁻³ and cm⁻³;
most plug-in errors are unit errors.

| Quantity | Value |
|---|---|
| $e$ | $1.602\times10^{-19}\ \mathrm{C}$ |
| $m_e$ | $9.11\times10^{-31}\ \mathrm{kg}$ |
| $m_p$ | $1.673\times10^{-27}\ \mathrm{kg}$ ($m_p/m_e \approx 1836$) |
| $\varepsilon_0$ | $8.854\times10^{-12}\ \mathrm{F/m}$ |
| $\mu_0$ | $4\pi\times10^{-7}\ \mathrm{T\,m/A}$ |
| $k_B$ | $1.381\times10^{-23}\ \mathrm{J/K}$ |
| $c$ | $2.998\times10^{8}\ \mathrm{m/s}$, and $c^2 = 1/\varepsilon_0\mu_0$ |
| $1\ \mathrm{eV}$ | $1.602\times10^{-19}\ \mathrm{J}$ = $11605\ \mathrm{K}$ |
| $1\ \mathrm{m^{-3}}$ | $10^{-6}\ \mathrm{cm^{-3}}$ |

Writing $k_BT = eT_{\rm eV}$ is what converts every "kelvin" formula into its
practical "eV" form.

### The characteristic scales — compute these first

Every problem opens by evaluating these four and checking what each must be
smaller or larger than. The engineering forms take $n$ in $\mathrm{m^{-3}}$ (except
where marked) and $T$ in eV.

| Scale | Formula | Engineering form | Typical magnitude | Must satisfy |
|---|---|---|---|---|
| Debye length $\lambda_D$ | $\sqrt{\varepsilon_0k_BT_e/n_0e^2}$ | $7.43\times10^{3}\sqrt{T_{\rm eV}/n}$ m, or $69\sqrt{T_{\rm K}/n}$ m | 0.1 mm lab glow · 74 µm tokamak core · mm ionosphere · 10 m solar wind | $\lambda_D \ll L$ (system size) — else no quasineutral bulk |
| Plasma frequency $\omega_p$ | $\sqrt{ne^2/\varepsilon_0m_e}$ | $56.4\sqrt{n}$ rad/s; $f_p \approx 8.98\times10^{3}\sqrt{n_{\rm cm^{-3}}}$ Hz | 9 GHz lab discharge · 9 MHz ionospheric F-layer | $\omega_p\tau_{\rm coll}\gg1$ — else collisions beat collective motion |
| Plasma parameter $\Lambda$ | $n\lambda_D^3$ | — | $10^4$ lab · $4\times10^{7}$ tokamak · $6\times10^{9}$ solar wind | $\Lambda\gg1$ — else strongly coupled (liquid, Coulomb crystal) |
| Larmor radius $r_L$ | $mv_\perp/\lvert q\rvert B$ | $r_L = v_\perp/\Omega_c$ | at $B=0.1$ T, $v_\perp=10^6$ m/s: 57 µm electron, 10 cm proton | $r_{Li}\ll L$ — else the orbit itself hits the wall |
| Cyclotron frequency $\Omega_c$ | $\lvert q\rvert B/m$ | $\Omega_{ce}/2\pi = 28\,B_{\rm T}$ GHz; $\Omega_{ci}/2\pi = 15.2\,B_{\rm T}$ MHz (protons) | 28 GHz and 15 MHz at 1 T | $\omega\ll\Omega_{ci}$ for MHD to apply |
| Collision frequency $\nu$ | $\nu \sim \omega_p\,\dfrac{\ln\Lambda}{\Lambda}$ | $\omega_p\tau \sim \Lambda/\ln\Lambda$ | negligible whenever $\Lambda\gg1$ | $\nu\ll\omega_p$ — the collisionless licence |

Two identities tie them together: $\omega_p = v_{th,e}/\lambda_D$ (a thermal
electron crosses one Debye length per plasma period) and $c_s = \omega_{pi}\lambda_D$.
Useful speeds: $v_{th,e} = 4.19\times10^{5}\sqrt{T_{\rm eV}}$ m/s and
$c_s = 9.79\times10^{3}\sqrt{T_{e,\rm eV}/\mu}$ m/s with $\mu=m_i/m_p$.

*From* [1.1](lessons/01-01-what-is-a-plasma-debye.md), [1.2](lessons/01-02-plasma-frequency-parameter.md), [1.3](lessons/01-03-gyration-exb-drift.md)

### The three plasma criteria

An ionized gas is a plasma only if all three hold. Criteria 2 and 3 are secretly
one: many particles per Debye sphere both shield well *and* collide rarely.

1. $\lambda_D \ll L$ — shielding has room, so the bulk is quasineutral.
2. $\Lambda = n\lambda_D^3 \gg 1$ — enough particles to shield collectively.
3. $\omega_p\tau_{\rm coll} \gg 1$ — collective motion outruns collisional randomization.

*From* [1.2](lessons/01-02-plasma-frequency-parameter.md), [2.2](lessons/02-02-vlasov-equation.md)

### Guiding-centre drifts

The master rule is one line — **any** slowly-varying force perpendicular to
$\mathbf{B}$ drifts the guiding centre sideways:

$$\mathbf{v}_F = \frac{\mathbf{F}\times\mathbf{B}}{qB^2}$$

Read the table by asking one question: *is there a bare $1/q$?* If yes, ions and
electrons split apart and that split is a current.

| Drift | Formula | Charge-dependent? | Current? |
|---|---|:--:|:--:|
| $\mathbf{E}\times\mathbf{B}$ | $\dfrac{\mathbf{E}\times\mathbf{B}}{B^2}$, speed $E/B$ | **no** | no — bulk convection |
| Gravity / general force | $\dfrac{\mathbf{F}\times\mathbf{B}}{qB^2}$, e.g. $\dfrac{m}{q}\dfrac{\mathbf{g}\times\mathbf{B}}{B^2}$ | yes | yes |
| Grad-B | $\dfrac{mv_\perp^2}{2q}\dfrac{\mathbf{B}\times\nabla B}{B^3}$ | yes | yes |
| Curvature | $\dfrac{mv_\parallel^2}{q}\dfrac{\mathbf{R}_c\times\mathbf{B}}{R_c^2B^2}$ | yes | yes |
| Polarization | $\dfrac{m}{qB^2}\dfrac{d\mathbf{E}_\perp}{dt}$ | yes | yes — the polarization current |

In a current-free ("vacuum") field the first two magnetic drifts combine, and this
is the form the toroidal-drift argument of [5.2](lessons/05-02-magnetic-confinement-tokamaks.md) uses:

$$\mathbf{v}_{\nabla B+R} = \frac{m}{qB^2}\left(v_\parallel^2 + \tfrac12 v_\perp^2\right)\frac{\mathbf{R}_c\times\mathbf{B}}{R_c^2}, \qquad \text{in a torus } \ v = \frac{m}{qB}\frac{v_\parallel^2+\tfrac12v_\perp^2}{R}.$$

*From* [1.3](lessons/01-03-gyration-exb-drift.md), [1.4](lessons/01-04-gradb-curvature-polarization-drifts.md)

### The three adiabatic invariants

Three motions, three timescales, three actions $\oint p\,dq$ — each invariant good
on its own hierarchy of slowness. The Van Allen belts use all three.

| Invariant | Motion | Expression | Holds while the field changes slowly compared to |
|---|---|---|---|
| $\mu$ | gyration | $mv_\perp^2/2B$ | the gyroperiod $2\pi/\Omega_c$ |
| $J$ | bounce between mirrors | $\oint mv_\parallel\,d\ell$ | the bounce time |
| $\Phi$ | drift around the system | flux enclosed by the drift orbit | the drift period |

Mirror bookkeeping (static $\mathbf{B}$ does no work, so total energy is exact):

$$v_\parallel^2 = v^2 - \frac{2B}{m}\mu, \qquad B_{\rm refl} = \frac{B_0}{\sin^2\theta_0}, \qquad R_m = \frac{B_{\max}}{B_{\min}}$$

$$\text{confined} \iff \sin^2\theta_0 \ge \frac{1}{R_m}, \qquad f_{\rm loss}(\text{isotropic}) = 1 - \sqrt{1-\frac{1}{R_m}}$$

*From* [1.5](lessons/01-05-adiabatic-invariants-mirrors.md)

### Moments of the distribution function

Weight $f$ by 1, by $\mathbf{v}$, by the squared spread — and out fall the fluid
fields. Temperature is not a separate quantity; it *is* the second moment.

$$n = \int f\,d^3v, \qquad \mathbf{u} = \frac1n\int\mathbf{v}f\,d^3v, \qquad \mathsf{P} = m\!\int(\mathbf{v}-\mathbf{u})(\mathbf{v}-\mathbf{u})f\,d^3v$$

$$p = \tfrac13\mathrm{tr}\,\mathsf{P} = nk_BT, \qquad \rho_{\rm charge} = \sum_s q_s\!\int f_s\,d^3v, \qquad \mathbf{J} = \sum_s q_s\!\int\mathbf{v}f_s\,d^3v$$

*From* [2.1](lessons/02-01-distribution-function-moments.md), [2.2](lessons/02-02-vlasov-equation.md)

### The description hierarchy — what each level keeps and drops

Choosing the level *is* the modelling decision. Each row keeps less information
and buys a smaller system of equations.

| Level | State variables | Keeps | Drops | Valid when |
|---|---|---|---|---|
| Single particle ([1.3](lessons/01-03-gyration-exb-drift.md)–[1.5](lessons/01-05-adiabatic-invariants-mirrors.md)) | one orbit $\mathbf{r}(t)$ | exact orbits, drifts, mirroring | the plasma's own fields (they're *given*) | test-particle limit, dilute or externally-driven |
| Kinetic / Vlasov ([2.2](lessons/02-02-vlasov-equation.md)) | $f_s(\mathbf{x},\mathbf{v},t)$ + Maxwell | full velocity-space structure — resonances, Landau damping, beams | binary Coulomb collisions | $\omega_p\tau_{\rm coll}\gg1$ |
| Two-fluid ([3.1](lessons/03-01-two-fluid-equations.md)) | $n_s,\mathbf{u}_s,p_s$ per species | charge separation, electron/ion distinction, two-stream | all velocity-space detail; needs a closure | you can name a closure and don't need resonances |
| Ideal MHD ([3.2](lessons/03-02-ideal-mhd-frozen-flux.md)) | $\rho,\mathbf{u},p,\mathbf{B}$ | bulk equilibrium, stability, Alfvén waves | charge separation, electron dynamics, resistivity | $\omega\ll\Omega_{ci}$, $L\gg r_{Li}$, $R_m\gg1$ |

Two consequences worth stating out loud: MHD **cannot see** Langmuir or two-stream
physics (too fast, too small), and fluid models of any kind **cannot see** Landau
damping (no information about individual particle velocities). Fluid gives the
real part of $\omega$; kinetics gives the imaginary part.

### The ideal-MHD equations

$$\frac{\partial\rho}{\partial t} + \nabla\cdot(\rho\mathbf{u}) = 0, \qquad \rho\frac{D\mathbf{u}}{Dt} = \mathbf{J}\times\mathbf{B} - \nabla p, \qquad \frac{D}{Dt}\!\left(\frac{p}{\rho^\gamma}\right) = 0$$

$$\nabla\times\mathbf{B} = \mu_0\mathbf{J}, \qquad \nabla\times\mathbf{E} = -\frac{\partial\mathbf{B}}{\partial t}, \qquad \nabla\cdot\mathbf{B} = 0, \qquad \mathbf{E}+\mathbf{u}\times\mathbf{B} = 0$$

The displacement current is dropped — MHD is slow. The generalized Ohm's law,
whose neglected terms define the model's edges:

$$\mathbf{E}+\mathbf{u}\times\mathbf{B} = \eta\mathbf{J} + \underbrace{\frac{1}{ne}(\mathbf{J}\times\mathbf{B}-\nabla p_e)}_{\text{Hall + electron pressure}} + \underbrace{\frac{m_e}{ne^2}\frac{\partial\mathbf{J}}{\partial t}}_{\text{electron inertia}}$$

Induction equation, advection plus diffusion:

$$\frac{\partial\mathbf{B}}{\partial t} = \nabla\times(\mathbf{u}\times\mathbf{B}) + \frac{\eta}{\mu_0}\nabla^2\mathbf{B}$$

*From* [3.2](lessons/03-02-ideal-mhd-frozen-flux.md)

### The magnetic force, split

$$\mathbf{J}\times\mathbf{B} = \frac{1}{\mu_0}(\nabla\times\mathbf{B})\times\mathbf{B} = -\nabla\!\left(\frac{B^2}{2\mu_0}\right) + \frac{(\mathbf{B}\cdot\nabla)\mathbf{B}}{\mu_0}$$

Equivalently the divergence of the Maxwell stress tensor
$T_{ij} = \mu_0^{-1}\big(B_iB_j - \tfrac12B^2\delta_{ij}\big)$: the $B_iB_j$ piece is
tension along $\mathbf{B}$, the $\tfrac12B^2\delta_{ij}$ piece is pressure across it.
For a straight field, force balance collapses to

$$p + \frac{B^2}{2\mu_0} = \text{const across field lines}$$

— total pressure is uniform, so where plasma pressure is high the field must be
weak. That anticorrelation is diamagnetism, and it is all of magnetic confinement.

*From* [3.3](lessons/03-03-magnetic-pressure-tension-beta.md)

### Equilibrium: the two pinches

Static balance is $\nabla p = \mathbf{J}\times\mathbf{B}$ with
$\mathbf{J}=\mu_0^{-1}\nabla\times\mathbf{B}$. The names label the **current**
direction, not the field.

| | Z-pinch | θ-pinch |
|---|---|---|
| Current | axial $J_z$ | azimuthal $J_\theta$ |
| Field | azimuthal $B_\theta = \mu_0I(r)/2\pi r$ | axial $B_z$, from an external coil |
| Balance | $dp/dr = -J_zB_\theta$ | $dp/dr = J_\theta B_z$ |
| Integrated form | Bennett: $\mu_0I^2 = 8\pi Nk_BT$ | $p + B_z^2/2\mu_0 = B_0^2/2\mu_0$ |

$N=\int_0^a n\,2\pi r\,dr$ is the line density (particles per metre); with species
kept apart, $T\to T_e+T_i$. The θ-pinch hands you beta directly:
$\beta = 1-(B_i/B_0)^2$.

Bend the column into a torus and axisymmetric balance becomes the
**Grad–Shafranov** equation for the poloidal flux function, whose level sets are
the flux surfaces:

$$\Delta^{*}\psi = -\mu_0R^2\frac{dp}{d\psi} - F\frac{dF}{d\psi}, \qquad F \equiv RB_\phi$$

*From* [3.4](lessons/03-04-mhd-equilibrium-pinches.md); solved in practice on the [fusion-plasma card](../fusion-plasma/reference.md#flux-surface)

### What is in $\delta W$

Three terms always cost energy, two can pay it back. Instability is the plasma
spending the last two to beat the first three.

| Term | Sign | Physics |
|---|:--:|---|
| $\lvert\mathbf{B}_1\rvert^2/\mu_0$ | $\ge0$ | bending field lines |
| $(B^2/\mu_0)\lvert\nabla\cdot\boldsymbol{\xi}_\perp + 2\boldsymbol{\xi}_\perp\cdot\boldsymbol{\kappa}\rvert^2$ | $\ge0$ | compressing the field |
| $\gamma p\lvert\nabla\cdot\boldsymbol{\xi}\rvert^2$ | $\ge0$ | compressing the plasma |
| $-2(\boldsymbol{\xi}_\perp\cdot\nabla p)(\boldsymbol{\xi}_\perp\cdot\boldsymbol{\kappa})$ | either | **pressure drive** — negative in bad curvature |
| $-j_\parallel(\boldsymbol{\xi}_\perp\times\mathbf{b})\cdot\mathbf{B}_1$ | either | **current drive** — kink modes |

Named modes: $m=0$ **sausage** (pressure/pinch), $m=1$ **kink** (parallel current;
caged by $q>1$), **interchange / Rayleigh–Taylor** (bad curvature).

*From* [3.5](lessons/03-05-mhd-stability-energy-principle.md)

### The wave zoo — dispersion relations, cutoffs, resonances

The method never changes: perturb $\propto e^{i(\mathbf{k}\cdot\mathbf{x}-\omega t)}$,
linearize, demand a nontrivial solution. A **cutoff** ($k\to0$) reflects; a
**resonance** ($k\to\infty$) absorbs.

| Wave | Dispersion relation | Restoring force / inertia | Cutoff | Resonance |
|---|---|---|---|---|
| Langmuir (Bohm–Gross) | $\omega^2 = \omega_p^2(1+3k^2\lambda_D^2) = \omega_p^2+3k^2v_{th,e}^2$ | charge separation / electron mass | $\omega_p$ | none (dies by Landau damping at $k\lambda_D\sim1$) |
| Cold electrostatic | $\varepsilon(\omega)=1-\omega_p^2/\omega^2 = 0$ | — | $\omega=\omega_p$, $v_g=0$ | — |
| EM in unmagnetized plasma | $\omega^2 = \omega_p^2 + c^2k^2$ | — | $\omega_p$ (reflects below it) | none |
| Ion-acoustic | $\omega^2 = \dfrac{k^2c_s^2}{1+k^2\lambda_D^2}$ | electron pressure / ion mass | none | $\omega\to\omega_{pi}$ as $k\lambda_D\to\infty$ |
| Shear Alfvén | $\omega^2 = k_\parallel^2v_A^2$ | magnetic tension / mass density | — | $\Omega_{ci}$ (upper edge of validity) |
| Magnetosonic (fast/slow) | $\dfrac{\omega^2}{k^2} = \tfrac12\Big[(v_A^2+c_s^2)\pm\sqrt{(v_A^2+c_s^2)^2-4v_A^2c_s^2\cos^2\theta}\Big]$ | magnetic + thermal pressure | — | — |

Limits worth memorizing: along $\mathbf{B}$ ($\theta=0$) the magnetosonic pair
decouples into pure Alfvén ($v_A$) and pure sound ($c_s$); across $\mathbf{B}$
($\theta=90^\circ$) the slow and shear waves vanish and the fast wave travels at
$\sqrt{v_A^2+c_s^2}$. At every angle $v_{\rm slow}\le v_{\rm Alfven}\le v_{\rm fast}$ —
the MHD triad, plotted against angle as the Friedrichs diagram. Group velocity of
a Langmuir wave: $v_g = 3kv_{th,e}^2/\omega$, which is what lifts a standing
oscillation into a travelling wave.

Handy magnitudes: $v_A \approx 2.18\times10^{16}\,B_{\rm T}/\sqrt{n}$ m/s for
protons ($n$ in $\mathrm{m^{-3}}$) — about $10^3$ km/s in the solar corona,
$10^6$–$10^7$ m/s in a tokamak.

*From* [4.1](lessons/04-01-langmuir-cold-plasma-dielectric.md), [4.2](lessons/04-02-ion-acoustic-waves.md), [4.3](lessons/04-03-em-alfven-waves.md)

### Cutoffs and resonances of the magnetized cold plasma

Lesson [4.1](lessons/04-01-langmuir-cold-plasma-dielectric.md) names the cold-plasma
dielectric **tensor** and hands the zoo to you without deriving it. These are the
standard entries you will be asked to look up — they follow from that tensor's
principal modes, and they are the reason a microwave beam at a chosen frequency
heats a chosen species.

| Mode | Geometry | Cutoff | Resonance |
|---|---|---|---|
| O-mode (ordinary) | $\mathbf{k}\perp\mathbf{B}$, $\mathbf{E}_1\parallel\mathbf{B}$ | $\omega_p$ | none |
| X-mode (extraordinary) | $\mathbf{k}\perp\mathbf{B}$, $\mathbf{E}_1\perp\mathbf{B}$ | $\omega_R$ and $\omega_L$ | upper hybrid $\omega_{UH}$ |
| R-wave (whistler branch) | $\mathbf{k}\parallel\mathbf{B}$, right-circular | $\omega_R$ | $\Omega_{ce}$ |
| L-wave | $\mathbf{k}\parallel\mathbf{B}$, left-circular | $\omega_L$ | $\Omega_{ci}$ |

$$\omega_{UH}^2 = \omega_p^2 + \Omega_{ce}^2, \qquad \frac{1}{\omega_{LH}^2} = \frac{1}{\Omega_{ce}\Omega_{ci}} + \frac{1}{\omega_{pi}^2}$$

$$\omega_{R,L} = \tfrac12\left[\pm\Omega_{ce} + \sqrt{\Omega_{ce}^2 + 4\omega_p^2}\,\right]$$

The cyclotron resonances are what RF heating aims at — see
[fusion-plasma](../fusion-plasma/reference.md#cyclotron-resonance).

### Instabilities and their growth rates

| Instability | Free energy | Result |
|---|---|---|
| Two-stream (cold beams $\pm v_0$) | beam drift energy $\tfrac12m_ev_0^2$ | $\varepsilon = 1-\dfrac{\omega_p^2}{(\omega-kv_0)^2}-\dfrac{\omega_p^2}{(\omega+kv_0)^2}$; unstable for $kv_0<\sqrt2\,\omega_p$; $\gamma_{\max}=\tfrac12\omega_p$ at $kv_0=\tfrac{\sqrt3}{2}\omega_p$ |
| Bump-on-tail | $\partial f/\partial v>0$ at $v_\varphi$ | inverse Landau damping — the *same* free energy, seen kinetically |
| Drift wave | density gradient $L_n = n/\lvert\nabla n\rvert$ | $\omega \approx k_yv_*$ with $v_* = \dfrac{k_BT_e}{eB}\dfrac{1}{L_n}$; universal, and the leading cause of anomalous transport |
| Interchange / Rayleigh–Taylor | bad curvature, $g_{\rm eff}\sim v_{th}^2/R_c$ | $\gamma \sim \sqrt{g_{\rm eff}/L}$ — the inverse free-fall time across a gradient length |
| Sausage $m=0$, kink $m=1$ | pinch pressure, parallel current | ideal-MHD modes; caged by an axial field and by $q>1$ |

Solving $\varepsilon=0$ for two-stream gives
$\omega^2 = (k^2v_0^2+\omega_p^2)\pm\omega_p\sqrt{4k^2v_0^2+\omega_p^2}$; the minus
branch is the unstable one, and there $\omega_r=0$ — a standing pattern that
explodes in place rather than a travelling wave.

*From* [4.4](lessons/04-04-instabilities-two-stream-drift.md)

### Fusion energy balance

$$\mathrm{D} + \mathrm{T} \to {}^4\mathrm{He}\,(3.5\ \mathrm{MeV}) + n\,(14.1\ \mathrm{MeV}), \qquad Q = 17.6\ \mathrm{MeV}$$

| Quantity | Expression |
|---|---|
| Reaction rate (50/50 D–T) | $R = \tfrac14 n^2\langle\sigma v\rangle$ |
| Alpha self-heating | $P_\alpha = \tfrac14 n^2\langle\sigma v\rangle E_\alpha$, $E_\alpha = 3.5$ MeV |
| Bremsstrahlung | $P_{\rm brem} \approx C_Bn^2\sqrt{T}$, $C_B \approx 5.35\times10^{-37}$ (SI, $T$ in keV) |
| Transport loss | $P_{\rm loss} = W/\tau_E$ with $W = 3nk_BT$ |
| Ignition | $n\tau_E \ge 12k_BT/\langle\sigma v\rangle E_\alpha$ |

$\langle\sigma v\rangle$ for D–T climbs steeply through 10 keV and peaks near 65 keV;
$n\tau_E$ bottoms out near $T\approx25$ keV at $1.5\times10^{20}\ \mathrm{m^{-3}\,s}$,
the triple product near $T\approx14$ keV. Breakeven is $Q=1$ (still on the wall
socket); ignition is $Q=\infty$. Magnetic confinement runs
$n\sim10^{20}\ \mathrm{m^{-3}}$, $\tau_E\sim$ seconds; inertial runs
$n\sim10^{31}\ \mathrm{m^{-3}}$, $\tau_E\sim10^{-10}$ s. Tabulated reactivities live
on the [fusion-plasma card](../fusion-plasma/reference.md#reactivity).

*From* [5.1](lessons/05-01-fusion-lawson-criterion.md)

### Space and astrophysical plasmas

**Parker's isothermal wind.** With $c_s=\sqrt{k_BT/m}$ and mass conservation
$\rho vr^2 = \text{const}$:

$$\left(v-\frac{c_s^2}{v}\right)\frac{dv}{dr} = \frac{2c_s^2}{r} - \frac{GM_\odot}{r^2}, \qquad r_c = \frac{GM_\odot}{2c_s^2}$$

Exactly one solution threads the sonic point $(r_c, c_s)$ climbing from subsonic to
supersonic — that unique transonic branch is the wind.

**Parker spiral.** $\tan\psi = B_\phi/B_r = \Omega_\odot r/v$ — near $45^\circ$ at
Earth's orbit.

**Belts and the ring current.** A dipole is a natural mirror: particles outside the
loss cone bounce pole to pole while grad-B/curvature drift carries them
azimuthally. Ions drift west and electrons east, but $q$ flips too, so both make a
**westward** ring current. Scatter a particle into the loss cone and it
precipitates as aurora.

**Sweet–Parker reconnection.** Mass conservation $v_{\rm in}L = v_{\rm out}\delta$,
pressure balance $v_{\rm out}=v_A$, and resistive balance $v_{\rm in}=\eta/\mu_0\delta$ give

$$\frac{v_{\rm in}}{v_A} = \frac{\delta}{L} = \frac{1}{\sqrt S}, \qquad \tau_{SP} = \sqrt S\,\tau_A, \quad \tau_A = L/v_A$$

For the corona $S\sim10^{12}$–$10^{14}$, so this predicts flares lasting months
against an observed few minutes. Faster mechanisms — Petschek shocks, the
plasmoid instability, turbulence — are an open problem.

*From* [5.3](lessons/05-03-solar-wind-magnetospheres.md), [5.4](lessons/05-04-magnetic-reconnection.md)

## Assumed, not taught here

This is a Tier 2 course; it leans on `em-refresher` and `stat-mech` and borrows
from three others. Everything below is *used* in a derivation but never derived.

| Fact | Where it's taught |
|---|---|
| Poisson's equation and Gauss's law | [em-refresher 1.2](../em-refresher/lessons/01-02-gauss-law.md), [1.3](../em-refresher/lessons/01-03-electric-potential.md) |
| The Lorentz force $q(\mathbf{E}+\mathbf{v}\times\mathbf{B})$ | [em-refresher 3.1](../em-refresher/lessons/03-01-magnetic-force.md) |
| Ampère's law (and why MHD may drop the displacement current) | [em-refresher 3.2](../em-refresher/lessons/03-02-sources-of-magnetic-field.md), [4.1](../em-refresher/lessons/04-01-maxwells-equations.md) |
| Faraday's law, $\nabla\times\mathbf{E} = -\partial_t\mathbf{B}$ | [em-refresher 3.3](../em-refresher/lessons/03-03-electromagnetic-induction.md) |
| EM waves in a medium, $k^2c^2 = \omega^2\varepsilon$ | [em-refresher 4.2](../em-refresher/lessons/04-02-electromagnetic-waves.md) |
| Boltzmann factor $e^{-E/k_BT}$ (the electrons' barometric response) | [stat-mech 3.1](../stat-mech/lessons/03-01-canonical-ensemble-boltzmann-factor.md) |
| Equipartition — why $p = nk_BT$ falls out of the second moment | [stat-mech 3.4](../stat-mech/lessons/03-04-equipartition-theorem.md) |
| Adiabatic index $\gamma = C_p/C_V$ and $p\propto\rho^\gamma$ | [stat-mech 2.2](../stat-mech/lessons/02-02-entropy-engines-carnot.md), [2.4](../stat-mech/lessons/02-04-maxwell-relations-stability.md), [fluid-dynamics 4.2](../fluid-dynamics/lessons/04-02-sound-waves.md) |
| Adiabatic invariance of the action $\oint p\,dq$ | [analytical-mechanics 4.2](../analytical-mechanics/lessons/04-02-action-angle-integrability.md) |
| Liouville's theorem (phase-space incompressibility) | [analytical-mechanics 3.2](../analytical-mechanics/lessons/03-02-phase-space-liouville.md) |
| Simple harmonic motion $\ddot x+\omega^2x=0$ | [mechanics-refresher 3.1](../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md) |
| Continuity, material derivative, Euler/Navier–Stokes | [fluid-dynamics 1.3](../fluid-dynamics/lessons/01-03-continuity-equation.md), [1.2](../fluid-dynamics/lessons/01-02-lagrangian-eulerian-material-derivative.md), [1.5](../fluid-dynamics/lessons/01-05-euler-equation.md) |
| Sound waves; Rayleigh–Taylor in an ordinary fluid | [fluid-dynamics 4.2](../fluid-dynamics/lessons/04-02-sound-waves.md), [4.3](../fluid-dynamics/lessons/04-03-instability-kh-rb.md) |
| Reynolds number as an advection/diffusion ratio | [fluid-dynamics 3.1](../fluid-dynamics/lessons/03-01-reynolds-number.md) |
| Laplace transform as the causal initial-value tool | [mathematical-methods-physics 4.3](../mathematical-methods-physics/lessons/04-03-laplace-transform-ivp.md) |
| Poles, residues, principal value (the Plemelj split) | [mathematical-methods-physics 2.3](../mathematical-methods-physics/lessons/02-03-singularities-laurent-residues.md), [2.4](../mathematical-methods-physics/lessons/02-04-real-integrals-by-residues.md) |
| Cross sections and reaction rates | [nuclear-particle-physics 3.3](../nuclear-particle-physics/lessons/03-03-cross-sections-count-rate.md) |
| Coulomb-barrier tunnelling and the Gamow peak behind $\langle\sigma v\rangle$ | [nuclear-particle-physics 2.2](../nuclear-particle-physics/lessons/02-02-alpha-decay-tunneling.md), [2.6](../nuclear-particle-physics/lessons/02-06-fission-fusion.md) |
| $Q$-values from the mass defect | [nuclear-particle-physics 1.2](../nuclear-particle-physics/lessons/01-02-binding-energy-mass-defect.md) |
| Reactor engineering: heating, transport scaling, divertors, blankets | [fusion-plasma card](../fusion-plasma/reference.md) |

The cold-plasma **dielectric tensor** and the full magnetized wave zoo are *named*
in [4.1](lessons/04-01-langmuir-cold-plasma-dielectric.md) but derived nowhere in
this library; the cutoff/resonance table above is the intended lookup.

## Pitfalls

### Scales and criteria

- Quasineutral means neutral *above* $\lambda_D$, not exactly neutral — inside a Debye sphere the charge separation is real and is what does the shielding. *([1.1](lessons/01-01-what-is-a-plasma-debye.md))*
- Screening does not bite close in: for $r\ll\lambda_D$ you feel the full bare Coulomb field. *([1.1](lessons/01-01-what-is-a-plasma-debye.md))*
- The $T$ in $\lambda_D$ is the *electron* temperature under the usual "ions frozen" derivation. With mobile warm ions, $\lambda_D^{-2} = \lambda_{D,e}^{-2}+\lambda_{D,i}^{-2}$ — a *smaller* net length. *([1.1](lessons/01-01-what-is-a-plasma-debye.md))*
- $\omega_p$ has no temperature in it. A cold plasma rings at exactly the same rate; $T$ enters only $\lambda_D$, $\Lambda$, and the Bohm–Gross correction. *([1.2](lessons/01-02-plasma-frequency-parameter.md))*
- Denser is not "more of a plasma": $\lambda_D$ shrinks with $n$, so cramming particles in can *lower* $\Lambda$ toward strong coupling. The solar wind is more ideal than a lab discharge. *([1.2](lessons/01-02-plasma-frequency-parameter.md))*
- $\Lambda = n\lambda_D^3$ is the order-of-magnitude version; the literal sphere count carries $\tfrac{4\pi}{3}$. Fine for "much greater than one", wrong if quoted as exact. *([1.2](lessons/01-02-plasma-frequency-parameter.md))*

### Single-particle motion

- $\mathbf{v}_E$ contains no $q$, no $m$, no $v_\perp$ — both species drift together, so it is bulk flow and carries **no current**. Every other drift keeps a $1/q$ and does. *([1.3](lessons/01-03-gyration-exb-drift.md), [1.4](lessons/01-04-gradb-curvature-polarization-drifts.md))*
- Bigger $B$ makes the drift *slower*, not faster: $v_E = E/B$. What $B$ speeds up is the gyration. *([1.3](lessons/01-03-gyration-exb-drift.md))*
- $\Omega_c$ and $r_L$ carry $\lvert q\rvert$ — always positive. The sign of $q$ lives in the sense of rotation only. *([1.3](lessons/01-03-gyration-exb-drift.md))*
- Grad-B is powered by $v_\perp^2$ (gyration energy), curvature by $v_\parallel^2$ (streaming along the line). Different halves of the kinetic energy; don't swap them. *([1.4](lessons/01-04-gradb-curvature-polarization-drifts.md))*
- Polarization drift is a *transient*: it needs $d\mathbf{E}/dt \neq 0$. A steady field gives only $\mathbf{E}\times\mathbf{B}$. *([1.4](lessons/01-04-gradb-curvature-polarization-drifts.md))*
- $\mu$ is *adiabatically* conserved, not exactly — it breaks near sharp field features or for a fat Larmor orbit. Energy conservation in a static $\mathbf{B}$ is exact; $\mu$ is not. *([1.5](lessons/01-05-adiabatic-invariants-mirrors.md))*
- The loss cone has no $v$ in it: a mirror sorts by *direction*, not by speed or energy. And nothing gains energy — the field only trades $v_\parallel$ for $v_\perp$. *([1.5](lessons/01-05-adiabatic-invariants-mirrors.md))*

### Kinetics

- $f$ is a density in 6-D phase space, not in ordinary space. You get $n(\mathbf{x})$ only after integrating out the three velocity axes. *([2.1](lessons/02-01-distribution-function-moments.md))*
- Pressure is a tensor; $p=\tfrac13\mathrm{tr}\,\mathsf{P}$ is the whole story only for isotropic $f$. Magnetized plasmas routinely have $T_\parallel\neq T_\perp$. *([2.1](lessons/02-01-distribution-function-moments.md))*
- Temperature is a *derived* moment, and only sharply meaningful near a Maxwellian. A beam has a pressure but no honest temperature. Two distributions with identical $n,\mathbf{u},p$ can differ by exactly the free energy that drives an instability. *([2.1](lessons/02-01-distribution-function-moments.md), [4.4](lessons/04-04-instabilities-two-stream-drift.md))*
- $df/dt = 0$ is not $\partial f/\partial t = 0$: $f$ at a fixed phase-space point can change violently while $f$ following a trajectory is constant. *([2.2](lessons/02-02-vlasov-equation.md))*
- In real Vlasov problems the fields are **unknowns**, not inputs. Prescribing $\mathbf{E}$ externally throws away the collective physics that makes it a plasma. *([2.2](lessons/02-02-vlasov-equation.md))*
- "Collisionless" does not mean "non-interacting" — the long-range mean field is fully kept; only close binary Coulomb encounters are dropped. *([2.2](lessons/02-02-vlasov-equation.md))*
- Taking the principal value alone throws away the $i\pi$ residue, and with it all of Landau damping. The contour passes **below** the pole because causality says so. *([2.3](lessons/02-03-linearizing-vlasov-dispersion.md))*
- Sign check on $\varepsilon$: the cold limit *must* be $1-\omega_p^2/\omega^2$ with root $\omega=\omega_p$. A plus sign gives an imaginary root — retrace. *([2.3](lessons/02-03-linearizing-vlasov-dispersion.md))*
- The slope that matters is $\partial f_0/\partial v$ **at the phase velocity**, not at the peak or in the bulk. A Maxwellian rises for $v<0$, but a wave with $v_\varphi>0$ never samples that flank. *([2.4](lessons/02-04-landau-damping.md))*
- Collisionless damping is still damping — energy goes coherently to resonant particles and phase-mixes. The underlying dynamics stays time-reversible (hence the plasma echo). *([2.4](lessons/02-04-landau-damping.md))*

### Fluids and MHD

- Taking one more moment never closes the hierarchy; moment $k$ always summons moment $k{+}1$. Closure is an external physical assumption. *([3.1](lessons/03-01-two-fluid-equations.md))*
- Two-fluid is not MHD. MHD is the $\omega\ll\Omega_{ci}$, $L\gg r_{Li}$ limit *after* summing the species, and it is blind to Langmuir and two-stream physics. *([3.1](lessons/03-01-two-fluid-equations.md))*
- $\mathbf{u}\cdot\nabla\mathbf{u}$ is not small — it is the nonlinear term that makes fluid dynamics hard. Linear wave analysis drops it; equilibrium and instability analysis often cannot. *([3.1](lessons/03-01-two-fluid-equations.md))*
- Ideal MHD says $\mathbf{E}=0$ in the *fluid rest frame*. The lab frame keeps a perfectly good motional $\mathbf{E}=-\mathbf{u}\times\mathbf{B}$. *([3.2](lessons/03-02-ideal-mhd-frozen-flux.md))*
- Frozen-in forbids motion *across* field lines only; plasma slides freely *along* them. *([3.2](lessons/03-02-ideal-mhd-frozen-flux.md))*
- What breaks frozen-in is small $R_m$, not large $\eta$. The corona has real resistivity and $R_m\sim10^{10}$ — until a current sheet collapses $L$ and $R_m$ falls to order one. *([3.2](lessons/03-02-ideal-mhd-frozen-flux.md), [5.4](lessons/05-04-magnetic-reconnection.md))*
- Magnetic pressure acts **perpendicular** to $\mathbf{B}$ only — it is not isotropic like a gas pressure. *([3.3](lessons/03-03-magnetic-pressure-tension-beta.md))*
- Tension is $B^2/\mu_0$, *twice* the pressure $B^2/2\mu_0$. Using the wrong one costs you a factor $\sqrt2$ in the Alfvén speed. *([3.3](lessons/03-03-magnetic-pressure-tension-beta.md), [4.3](lessons/04-03-em-alfven-waves.md))*
- The magnetic force is pressure **plus** tension: a straight non-uniform bundle still pushes, and a curved constant-$\lvert B\rvert$ field still pulls. Both terms must vanish for zero force. *([3.3](lessons/03-03-magnetic-pressure-tension-beta.md), [3.4](lessons/03-04-mhd-equilibrium-pinches.md))*
- $\mathbf{B}\cdot\nabla p=0$ says the gradient has no component *along* $\mathbf{B}$ — pressure still varies fully across flux surfaces, and that is where confinement lives. *([3.4](lessons/03-04-mhd-equilibrium-pinches.md))*
- "Z" and "θ" name the direction of the **current**, not the field. *([3.4](lessons/03-04-mhd-equilibrium-pinches.md))*
- An equilibrium is not confinement — a pencil on its tip satisfies force balance. Equilibrium kills the linear term in the energy; stability is about the quadratic one. *([3.4](lessons/03-04-mhd-equilibrium-pinches.md), [3.5](lessons/03-05-mhd-stability-energy-principle.md))*
- Ideal stability is the *optimist's* test: $\delta W<0$ proves instability, but $\delta W\ge0$ still leaves resistive, two-fluid, and kinetic modes the energy principle can't see. *([3.5](lessons/03-05-mhd-stability-energy-principle.md))*
- Good curvature = field concave toward the plasma (it hugs); bad = convex (the plasma perches on the bulge). Only bad curvature drives interchange. *([3.5](lessons/03-05-mhd-stability-energy-principle.md))*

### Waves and instabilities

- A plasma oscillation is not yet a wave: at $k\to0$ the group velocity is zero. Only the thermal $3k^2v_{th}^2$ term gives it legs. *([4.1](lessons/04-01-langmuir-cold-plasma-dielectric.md))*
- The Bohm–Gross coefficient is **3** — a fast 1-D adiabatic compression, not $1$ (isothermal) and not $5/3$ (3-D). *([4.1](lessons/04-01-langmuir-cold-plasma-dielectric.md))*
- The fluid Langmuir wave looks undamped because fluid models know nothing about individual velocities. Fluid gives $\operatorname{Re}\omega$; kinetics gives $\operatorname{Im}\omega$. *([4.1](lessons/04-01-langmuir-cold-plasma-dielectric.md))*
- Cutoff ($k\to0$, reflect) and resonance ($k\to\infty$, absorb) are opposite ends. Don't conflate them. *([4.1](lessons/04-01-langmuir-cold-plasma-dielectric.md))*
- Ion sound uses $T_e$, not $T_i$ — the electrons are the spring, the ions only the mass. Swapping them is the single most common error in Module 4. *([4.2](lessons/04-02-ion-acoustic-waves.md))*
- Ion sound propagates cleanly only for $T_e\gg T_i$; otherwise $c_s$ sits inside the ion distribution and the wave is ion-Landau-damped within a wavelength. *([4.2](lessons/04-02-ion-acoustic-waves.md))*
- The flattening of the ion-acoustic curve at large $k$ means the phase speed *drops*, not rises — only the small-$k$ straight segment is true sound. *([4.2](lessons/04-02-ion-acoustic-waves.md))*
- The shear Alfvén wave is transverse and incompressible, so no temperature appears in $v_A$ — and only $k_\parallel$ matters, so it cannot propagate across $\mathbf{B}$ at all. The *fast* wave is the one that crosses field lines. *([4.3](lessons/04-03-em-alfven-waves.md))*
- $\omega_p$ never shows up in MHD waves: quasineutrality was assumed and the fast electron dynamics already dropped. *([4.3](lessons/04-03-em-alfven-waves.md))*
- $\gamma$ is a growth *rate*, not a speed — the two-stream mode has $\omega_r=0$ and doesn't propagate at all. *([4.4](lessons/04-04-instabilities-two-stream-drift.md))*
- For two-stream it is the **long** wavelengths that grow ($kv_0<\sqrt2\,\omega_p$); short waves oscillate faster than the beams can bunch. Always check which end of the $k$-band the free energy drives. *([4.4](lessons/04-04-instabilities-two-stream-drift.md))*

### Fusion and space plasmas

- Only the 3.5 MeV alpha heats the plasma; the 14.1 MeV neutron leaves. Use $E_\alpha$, never the full 17.6 MeV, in the ignition balance. *([5.1](lessons/05-01-fusion-lawson-criterion.md))*
- Hotter is not monotonically better — stored energy rises with $T$ too, so the Lawson curve has a valley near 15–25 keV and turns back up. *([5.1](lessons/05-01-fusion-lawson-criterion.md))*
- Breakeven ($Q=1$) still needs the wall socket; ignition ($Q=\infty$) runs on its own alphas. Most of fusion engineering lives in the gap. *([5.1](lessons/05-01-fusion-lawson-criterion.md))*
- Closing a tube into a torus removes end-loss but *creates* the curvature/grad-B drift problem. Two separate leaks. *([5.2](lessons/05-02-magnetic-confinement-tokamaks.md))*
- The vertical drift is harmless at a few hundred metres per second; the damage is the charge-independent $\mathbf{E}\times\mathbf{B}$ that the resulting charge separation triggers. The transform kills the *separation*, not the drift. *([5.2](lessons/05-02-magnetic-confinement-tokamaks.md))*
- "Safety factor" is not "bigger is safer": you need $q>1$ for kink stability but not much more, since plasma current is what heats and shapes the plasma. *([5.2](lessons/05-02-magnetic-confinement-tokamaks.md))*
- The solar wind is pressure-driven expansion, not a launch that beats gravity — delete the corona's heat and there is no supersonic wind. *([5.3](lessons/05-03-solar-wind-magnetospheres.md))*
- Ion and electron drifts do **not** cancel in the ring current: current is $q\mathbf{v}$, and $q$ flips along with the direction, so they add. *([5.3](lessons/05-03-solar-wind-magnetospheres.md))*
- Standoff scales as the inverse sixth root of ram pressure — doubling the wind moves the magnetopause in by only 12 percent. And the bow shock is not the magnetopause: one is a supersonic shock, the other a pressure-balance surface. *([5.3](lessons/05-03-solar-wind-magnetospheres.md))*
- Reconnection is slow because the *inflow* is throttled, not because the outflow is: the jet leaves at $v_A$. *([5.4](lessons/05-04-magnetic-reconnection.md))*
- Ideal MHD isn't "wrong" where reconnection happens — it is a singular boundary-layer correction: infinitesimal resistivity in an infinitesimal layer, changing global topology. *([5.4](lessons/05-04-magnetic-reconnection.md))*
