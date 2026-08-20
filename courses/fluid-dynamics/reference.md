# Fluid Dynamics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

The whole course is two conservation laws written for a continuous field —
mass ([continuity](#continuity-equation)) and momentum
([Navier–Stokes](#navierstokes-equations)) — plus the art of deciding which
terms you're allowed to throw away. Kill viscosity and you get ideal flow
(Bernoulli, vorticity, complex potentials); kill inertia and you get creeping
flow; keep both and one number, the [Reynolds number](#reynolds-number), tells
you which one is winning. Three things are worth checking here every single
time: **which term of Navier–Stokes you just dropped and why**
([term table](#navierstokes-term-by-term)), **which symbol a letter is wearing
right now** ([collisions](#symbol-collisions-to-watch)), and **which hypotheses
the shortcut you're using actually needs**
([exact solutions](#the-exact-solutions-and-their-assumptions),
[Bernoulli's four hypotheses](#bernoullis-theorem)).

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\rho$, $p$, $\mathbf{u}$ | density (kg/m³), pressure (Pa), velocity field (m/s) — the three continuum fields | [1.1](lessons/01-01-continuum-hypothesis.md) |
| $\lambda$, $\mathrm{Kn}$ | molecular mean free path (m) and its ratio to the flow scale, $\mathrm{Kn}=\lambda/L$ | [1.1](lessons/01-01-continuum-hypothesis.md) |
| $D/Dt$ | material derivative — rate of change *following a fluid parcel* | [1.2](lessons/01-02-lagrangian-eulerian-material-derivative.md) |
| $(\mathbf{u}\cdot\nabla)$ | scalar operator $u_x\partial_x+u_y\partial_y+u_z\partial_z$ — **not** the divergence | [1.2](lessons/01-02-lagrangian-eulerian-material-derivative.md) |
| $\psi$ | streamfunction (m²/s) — its contours *are* the streamlines | [1.3](lessons/01-03-continuity-equation.md) |
| $\sigma_{ij}$, $\delta_{ij}$ | Cauchy stress tensor ($i$-force on the $j$-facing face, Pa); Kronecker delta | [1.4](lessons/01-04-stress-tensor.md) |
| $\tau_{ij}$, $t_i$ | deviatoric (viscous) stress; traction $t_i=\sigma_{ij}n_j$ on a surface with normal $\mathbf n$ | [1.4](lessons/01-04-stress-tensor.md) |
| $e_{ij}$ | rate-of-strain tensor (s⁻¹) — the symmetric part of the velocity gradient | [1.6](lessons/01-06-navier-stokes.md) |
| $\mu$, $\nu$ | dynamic viscosity (Pa·s) and kinematic viscosity $\nu=\mu/\rho$ (m²/s, a **diffusivity**) | [1.6](lessons/01-06-navier-stokes.md) |
| $\boldsymbol\omega$ | vorticity $\nabla\times\mathbf{u}$ (s⁻¹) — **twice** a parcel's angular velocity | [2.2](lessons/02-02-vorticity-circulation.md) |
| $\Gamma$ | circulation $\oint_C\mathbf{u}\cdot d\boldsymbol\ell$ (m²/s) — net "going around" a loop | [2.2](lessons/02-02-vorticity-circulation.md) |
| $\phi$ | velocity potential (m²/s), $\mathbf{u}=\nabla\phi$ — exists only for irrotational flow | [2.4](lessons/02-04-irrotational-flow-velocity-potential.md) |
| $w(z)$ | complex potential $\phi+i\psi$ of a 2-D flow; $z=x+iy$ | [2.5](lessons/02-05-complex-potential.md) |
| $m$ | source strength (m²/s) — the volume flux per unit span it emits | [2.5](lessons/02-05-complex-potential.md) |
| $Re$ | Reynolds number $UL/\nu$ — inertia over viscosity | [3.1](lessons/03-01-reynolds-number.md) |
| $U$, $L$ | the *chosen* characteristic speed and length of a flow — you must state them | [3.1](lessons/03-01-reynolds-number.md) |
| $G$ | the driving pressure gradient written as a positive push, $G=-\partial_x p=\Delta p/L$ | [3.2](lessons/03-02-couette-poiseuille.md) |
| $a$ | pipe or sphere radius (m) | [3.2](lessons/03-02-couette-poiseuille.md) |
| $\delta(x)$, $\tau_w$ | boundary-layer thickness (m) and wall shear stress $\mu(\partial u/\partial y)_{\text{wall}}$ (Pa) | [3.4](lessons/03-04-boundary-layers.md) |
| $\eta$ | Blasius similarity variable $y\sqrt{U/\nu x}$ (dimensionless) | [3.4](lessons/03-04-boundary-layers.md) |
| $C_D$, $C_f$ | drag coefficient $D/(\tfrac12\rho U^2A)$ and skin-friction coefficient | [3.5](lessons/03-05-separation-drag.md) |
| $\eta(x,t)$ | free-surface elevation (m) — a *different* $\eta$ from the two above | [4.1](lessons/04-01-surface-waves.md) |
| $k$, $\omega$, $c$, $c_g$ | wavenumber (rad/m), angular frequency (rad/s), phase speed $\omega/k$, group speed $d\omega/dk$ | [4.1](lessons/04-01-surface-waves.md) |
| $h$, $\sigma$ | still-water depth (m) and surface tension (N/m) | [4.1](lessons/04-01-surface-waves.md) |
| $M$, $\gamma$ | Mach number $U/c$ and the specific-heat ratio $c_p/c_v$ ($1.4$ for air) | [4.2](lessons/04-02-sound-waves.md) |
| $Z$, $I$ | acoustic impedance $\rho_0 c$ and intensity (W/m²) | [4.2](lessons/04-02-sound-waves.md) |
| $Ra$, $Ri$, $N$ | Rayleigh number, Richardson number, buoyancy frequency (s⁻¹) | [4.3](lessons/04-03-instability-kh-rb.md) |
| $\alpha$, $\kappa$ | thermal expansion coefficient (K⁻¹) and thermal diffusivity (m²/s) | [4.3](lessons/04-03-instability-kh-rb.md) |
| $St$ | Strouhal number $fD/U$ — dimensionless vortex-shedding frequency ($\approx0.2$) | [4.4](lessons/04-04-transition-to-turbulence.md) |
| $\varepsilon$, $E(k)$ | dissipation rate per unit mass (m²/s³) and the energy spectrum (m³/s²) | [4.5](lessons/04-05-turbulence-kolmogorov.md) |
| $\ell$, $\eta_K$ | an eddy size inside the inertial range, and the Kolmogorov microscale $(\nu^3/\varepsilon)^{1/4}$ | [4.5](lessons/04-05-turbulence-kolmogorov.md) |

### Symbol collisions to watch

Fluid dynamics reuses letters shamelessly. Read from context, not from habit.

| Letter | The competing meanings |
|---|---|
| $\eta$ | Blasius similarity variable ([3.4](lessons/03-04-boundary-layers.md)) · free-surface elevation ([4.1](lessons/04-01-surface-waves.md)) · Kolmogorov microscale ([4.5](lessons/04-05-turbulence-kolmogorov.md)) |
| $\omega$ | vorticity, a **vector** field ([2.2](lessons/02-02-vorticity-circulation.md)) · angular frequency, a **scalar** ([4.1](lessons/04-01-surface-waves.md)) |
| $\sigma$ | stress tensor $\sigma_{ij}$ ([1.4](lessons/01-04-stress-tensor.md)) · surface tension ([4.1](lessons/04-01-surface-waves.md)) |
| $\mu$ | dynamic viscosity ([1.6](lessons/01-06-navier-stokes.md)) · doublet strength in $w=\mu/z$ ([2.5](lessons/02-05-complex-potential.md)) |
| $\lambda$ | mean free path ([1.1](lessons/01-01-continuum-hypothesis.md)) · wavelength ([4.1](lessons/04-01-surface-waves.md)) · Lyapunov exponent ([4.4](lessons/04-04-transition-to-turbulence.md)) |
| $\Gamma$ | circulation everywhere in Module 2 — and its **sign convention** flips between texts ([2.6](lessons/02-06-flow-past-cylinder-lift.md)) |
| $c$ | wave phase speed ([4.1](lessons/04-01-surface-waves.md)) · speed of sound ([4.2](lessons/04-02-sound-waves.md)) |
| $h$ | channel gap ([3.2](lessons/03-02-couette-poiseuille.md)) · water depth ([4.1](lessons/04-01-surface-waves.md)) |

## Definitions

### Continuum hypothesis

Pretend the fluid is a smooth field, not molecules — legitimate whenever you can
find a box that is huge on the molecular ruler and tiny on the flow's ruler.
Density is defined on such a **representative elementary volume** (REV), never at
a literal point:

$$\rho(\mathbf{x},t)\equiv\frac{M(V^{*})}{V^{*}},\qquad \ell_{\text{mol}}^3\ll V^{*}\ll L^3.$$

*Introduced:* [1.1](lessons/01-01-continuum-hypothesis.md)

### Knudsen number

How big a molecule's step is compared with the whole flow — the continuum
hypothesis's own report card.

$$\mathrm{Kn}=\frac{\lambda}{L}:\qquad \lesssim 0.01\ \text{continuum},\quad 0.01\text{–}10\ \text{slip/transition},\quad \gtrsim 10\ \text{free-molecular}.$$

*Introduced:* [1.1](lessons/01-01-continuum-hypothesis.md)

### Fluid

Anything that cannot resist a *steady* shear: lean on it sideways and it keeps
deforming forever. A solid resists shear elastically (stress ∝ strain); a fluid
resists only the **rate** of shear (stress ∝ strain rate). Gases count.

*Introduced:* [1.1](lessons/01-01-continuum-hypothesis.md)

### No-slip condition

Fluid touching a solid moves *with* it — zero relative velocity. An empirical
continuum boundary condition, not a theorem, and it fails once $\mathrm{Kn}$ is
appreciable.

$$\mathbf{u}\big|_{\text{wall}}=\mathbf{u}_{\text{wall}}$$

*Introduced:* [1.1](lessons/01-01-continuum-hypothesis.md), used hard from [1.6](lessons/01-06-navier-stokes.md) on

### Material derivative

The rate of change a *moving parcel* feels: what a fixed probe would see, plus
what the parcel picks up by sliding into different surroundings.

$$\frac{Dq}{Dt}=\underbrace{\frac{\partial q}{\partial t}}_{\text{local}}+\underbrace{(\mathbf{u}\cdot\nabla)q}_{\text{advective}},\qquad \mathbf{a}=\frac{D\mathbf{u}}{Dt}=\partial_t\mathbf{u}+(\mathbf{u}\cdot\nabla)\mathbf{u}$$

*Introduced:* [1.2](lessons/01-02-lagrangian-eulerian-material-derivative.md)

### Streamlines, pathlines, and streaklines

Three different curves. A **streamline** is tangent to $\mathbf{u}$ at one
instant (Eulerian snapshot); a **pathline** is one parcel's actual trajectory
(Lagrangian); a **streakline** is the locus of all parcels that have passed one
fixed point (a smoke plume). **In steady flow all three coincide**; otherwise
they do not.

*Introduced:* [1.2](lessons/01-02-lagrangian-eulerian-material-derivative.md)

### Continuity equation

Mass bookkeeping: density at a point rises exactly as fast as mass flux converges
onto it.

$$\partial_t\rho+\nabla\cdot(\rho\mathbf{u})=0 \qquad\Longleftrightarrow\qquad \frac{D\rho}{Dt}+\rho\,\nabla\cdot\mathbf{u}=0$$

*Introduced:* [1.3](lessons/01-03-continuity-equation.md)

### Incompressible flow

Each parcel keeps *its own* density as it moves ($D\rho/Dt=0$), so the velocity
field is volume-preserving. A statement about the **flow**, not the fluid — valid
when $M=U/c\lesssim0.3$ and there is no strong stratification or heating.

$$\nabla\cdot\mathbf{u}=0$$

*Introduced:* [1.3](lessons/01-03-continuity-equation.md)

### Streamfunction

One scalar that satisfies 2-D incompressibility automatically; its level curves
are the streamlines, and the gap between two of them is the volume flux flowing
between them.

$$u=\frac{\partial\psi}{\partial y},\qquad v=-\frac{\partial\psi}{\partial x}\ \Longrightarrow\ \nabla\cdot\mathbf{u}\equiv0$$

*Introduced:* [1.3](lessons/01-03-continuity-equation.md), developed in [2.4](lessons/02-04-irrotational-flow-velocity-potential.md)

### Cauchy stress tensor

The machine that eats a surface's orientation and hands back the force per area
on it — because the surface force at a point depends on which way the surface
faces, one vector cannot do the job.

$$t_i=\sigma_{ij}n_j,\qquad \sigma_{ij}=-p\,\delta_{ij}+\tau_{ij},\qquad \sigma_{ij}=\sigma_{ji}$$

Symmetry is forced by conservation of angular momentum, not chosen. The second
index names the **face**; the first names the force direction.

*Introduced:* [1.4](lessons/01-04-stress-tensor.md)

### Pressure

The isotropic part of the stress — the squeeze every orientation feels in common.
It is a **scalar**, always compressive and normal, and equals minus the average
normal stress.

$$p=-\tfrac13\sigma_{ii}=-\tfrac13(\sigma_{xx}+\sigma_{yy}+\sigma_{zz})$$

*Introduced:* [1.4](lessons/01-04-stress-tensor.md)

### Deviatoric (viscous) stress

Everything left over once pressure is stripped out — the shears. It exists
**only while the fluid is deforming**, which is why a fluid at rest has
$\tau_{ij}=0$ and supports no shear.

*Introduced:* [1.4](lessons/01-04-stress-tensor.md)

### Rate-of-strain tensor

The part of the velocity gradient that actually *deforms* a blob rather than
spinning it rigidly — the symmetric half.

$$e_{ij}=\tfrac12\left(\frac{\partial u_i}{\partial x_j}+\frac{\partial u_j}{\partial x_i}\right),\qquad [e_{ij}]=\mathrm{s^{-1}}$$

*Introduced:* [1.6](lessons/01-06-navier-stokes.md)

### Newtonian fluid

One whose viscous stress is proportional to the *rate* of strain, with a single
constant $\mu$. Water, air, and oil qualify; ketchup and blood do not.

$$\tau_{ij}=2\mu\,e_{ij}\qquad\text{(incompressible)},\qquad \tau=\mu\frac{du}{dy}\ \text{in simple shear}$$

*Introduced:* [1.6](lessons/01-06-navier-stokes.md)

### Euler equation

Newton's second law per unit volume for a **frictionless** fluid: pressure
gradient plus gravity equals density times the material acceleration.

$$\rho\frac{D\mathbf{u}}{Dt}=-\nabla p+\rho\mathbf{g}$$

*Introduced:* [1.5](lessons/01-05-euler-equation.md)

### Navier–Stokes equations

Euler with one honest term restored — the diffusion of momentum by friction.
Full term-by-term reading in [the table below](#navierstokes-term-by-term).

$$\rho\left(\partial_t\mathbf{u}+(\mathbf{u}\cdot\nabla)\mathbf{u}\right)=-\nabla p+\mu\nabla^2\mathbf{u}+\rho\mathbf{g},\qquad \nabla\cdot\mathbf{u}=0$$

*Introduced:* [1.6](lessons/01-06-navier-stokes.md)

### Bernoulli's theorem

Along one streamline of an ideal flow, speed is bought with pressure: the sum of
dynamic, static, and gravitational pressure is frozen.

$$\tfrac12\rho u^2+p+\rho g z=\text{constant along a streamline}$$

**Four hypotheses, all load-bearing:** (1) steady, (2) inviscid, (3)
incompressible or barotropic, (4) *along one streamline* — the constant goes
global only if the flow is also irrotational.

*Introduced:* [2.1](lessons/02-01-bernoulli.md)

### Stagnation pressure

What a gauge reads when it brings the flow to rest — static plus dynamic
pressure. Its gap from the static pressure is what a Pitot tube measures.

$$p_0=p+\tfrac12\rho U^2\qquad\Longrightarrow\qquad U=\sqrt{\frac{2(p_0-p)}{\rho}}$$

*Introduced:* [2.1](lessons/02-01-bernoulli.md)

### Vorticity

A tiny paddlewheel's spin rate, doubled — a purely **local** test that has
nothing to do with whether the streamlines curve.

$$\boldsymbol\omega=\nabla\times\mathbf{u},\qquad \boldsymbol\Omega_{\text{local}}=\tfrac12\boldsymbol\omega$$

*Introduced:* [2.2](lessons/02-02-vorticity-circulation.md)

### Circulation

How much the flow "goes around" a closed loop — and, by Stokes' theorem, the
total vorticity threaded through it.

$$\Gamma=\oint_C\mathbf{u}\cdot d\boldsymbol\ell=\iint_S\boldsymbol\omega\cdot d\mathbf{A}$$

*Introduced:* [2.2](lessons/02-02-vorticity-circulation.md)

### Irrotational flow

No paddlewheel anywhere spins, $\boldsymbol\omega=\mathbf{0}$ — which does **not**
mean zero circulation, if the domain has a hole with a vortex in it.

*Introduced:* [2.2](lessons/02-02-vorticity-circulation.md), exploited in [2.4](lessons/02-04-irrotational-flow-velocity-potential.md)

### Vortex line and vortex tube

A vortex line is a field line of $\boldsymbol\omega$ (what a streamline is to
$\mathbf{u}$); bundle them and you get a vortex tube, whose **strength** is the
circulation around it. Because $\nabla\cdot\boldsymbol\omega=0$, that strength is
the same at every cross-section, so a tube cannot start or stop in the fluid.

*Introduced:* [2.2](lessons/02-02-vorticity-circulation.md)

### Kelvin's circulation theorem

Paint a loop on the moving fluid and its circulation never changes — because in
an ideal fluid every force is a gradient, and gradients do no net work around a
closed loop.

$$\frac{D\Gamma}{Dt}=\frac{D}{Dt}\oint_{C(t)}\mathbf{u}\cdot d\mathbf{l}=0$$

**Three hypotheses, all needed:** inviscid, barotropic ($p=p(\rho)$, which any
constant-density flow satisfies), and conservative body forces. And the loop must
be **material** — moving with the fluid — not fixed in space.

*Introduced:* [2.3](lessons/02-03-kelvin-circulation-theorem.md)

### Helmholtz vortex theorems

Kelvin applied to shrinking loops: (1) vortex lines are **material** — frozen
into the fluid; (2) a vortex tube's strength is constant along its length and in
time; (3) vortex lines cannot end in the fluid — they close into loops or land on
a boundary.

*Introduced:* [2.3](lessons/02-03-kelvin-circulation-theorem.md)

### Irrotational persistence

The headline corollary: an ideal flow started from rest, or from a uniform
stream, stays irrotational **forever**. This is the licence for the whole
potential-flow toolkit — it is a theorem, not a hopeful assumption.

*Introduced:* [2.3](lessons/02-03-kelvin-circulation-theorem.md)

### Velocity potential

A curl-free field is the gradient of a single scalar hill. Add incompressibility
and that hill is harmonic — the entire flow collapses to one linear PDE.

$$\mathbf{u}=\nabla\phi\quad(\text{needs }\boldsymbol\omega=\mathbf 0),\qquad \nabla^2\phi=0\quad(\text{plus }\nabla\cdot\mathbf{u}=0)$$

Fluids use $+\nabla\phi$, unlike electrostatics' $\mathbf E=-\nabla V$.

*Introduced:* [2.4](lessons/02-04-irrotational-flow-velocity-potential.md)

### Harmonic conjugates and the flow net

$\phi$ and $\psi$ satisfy the Cauchy–Riemann equations, so both are harmonic and
their contour families cross at right angles — the picture called a flow net.

$$\frac{\partial\phi}{\partial x}=\frac{\partial\psi}{\partial y},\qquad \frac{\partial\phi}{\partial y}=-\frac{\partial\psi}{\partial x}$$

*Introduced:* [2.4](lessons/02-04-irrotational-flow-velocity-potential.md)

### Complex potential

Stack $\phi$ and $\psi$ into one analytic function of position and you can
*generate* legal flows instead of solving for them. Differentiate once and the
velocity falls out — as a **conjugate**.

$$w(z)=\phi+i\psi,\qquad \frac{dw}{dz}=u-iv,\qquad \left\lvert\frac{dw}{dz}\right\rvert=\text{speed}$$

*Introduced:* [2.5](lessons/02-05-complex-potential.md)

### Stagnation point

Where the fluid is at rest: $\mathbf{u}=\mathbf 0$, equivalently $dw/dz=0$ in the
complex-potential language. The pressure maximum of the flow.

*Introduced:* [2.5](lessons/02-05-complex-potential.md), [2.6](lessons/02-06-flow-past-cylinder-lift.md)

### Kutta–Joukowski theorem

An ideal 2-D flow pushes a body sideways in exact proportion to the circulation
around it — and it does not care about the body's shape.

$$L=\rho U\Gamma\quad\text{per unit span}$$

*Introduced:* [2.6](lessons/02-06-flow-past-cylinder-lift.md)

### d'Alembert's paradox

The same calculation gives $D=0$: an ideal fluid never resists a body's steady
motion. Not an algebra slip — an exact result about a fictitious fluid, and the
signpost that viscosity is never negligible at a wall.

*Introduced:* [2.6](lessons/02-06-flow-past-cylinder-lift.md)

### Magnus effect

A spinning body drags fluid around itself by no-slip, manufacturing a real
$\Gamma$, and Kutta–Joukowski then delivers the sideways force. Ideal theory gets
the direction and scaling right even though the *origin* of $\Gamma$ is entirely
viscous.

*Introduced:* [2.6](lessons/02-06-flow-past-cylinder-lift.md)

### Reynolds number

The one number left after you strip the units off Navier–Stokes: inertia divided
by stickiness.

$$Re=\frac{UL}{\nu}=\frac{\rho UL}{\mu}=\frac{\lvert(\mathbf{u}\cdot\nabla)\mathbf{u}\rvert}{\lvert\nu\nabla^2\mathbf{u}\rvert}\sim\frac{U^2/L}{\nu U/L^2}$$

*Introduced:* [3.1](lessons/03-01-reynolds-number.md)

### Dynamical similarity

Two geometrically similar flows with the same $Re$ (and same boundary conditions)
have *identical* dimensionless solutions — the entire basis of model testing.
Match $Re$, not speed.

*Introduced:* [3.1](lessons/03-01-reynolds-number.md)

### Fully developed flow

Nothing changes along the flow direction, so the advective term is **exactly**
zero (not merely small) and Navier–Stokes collapses to a linear ODE. This is what
makes Couette and Poiseuille solvable at any $Re$.

*Introduced:* [3.2](lessons/03-02-couette-poiseuille.md)

### Couette flow

Pure shear driven by a moving wall with no pressure gradient — a straight-line
velocity profile and a uniform shear stress. This is a viscometer:
$\mu=\tau h/U$.

*Introduced:* [3.2](lessons/03-02-couette-poiseuille.md)

### Poiseuille flow

Pressure-driven flow between fixed walls — a parabolic profile pinned to zero by
no-slip. In a pipe the flow rate goes as the **fourth power** of the radius.

*Introduced:* [3.2](lessons/03-02-couette-poiseuille.md)

### Stokes (creeping) flow

The $Re\to0$ limit: delete inertia entirely and Navier–Stokes becomes **linear
and time-independent**.

$$0=-\nabla p+\mu\nabla^2\mathbf{u},\qquad \nabla\cdot\mathbf{u}=0$$

Two consequences do all the work: **instantaneity** (the flow depends only on how
the boundaries move *right now*) and **reversibility** (run the boundaries
backwards and the fluid retraces its path).

*Introduced:* [3.3](lessons/03-03-stokes-flow.md)

### Scallop theorem

A swimmer whose stroke is **reciprocal** — the same played forwards and backwards
— goes nowhere at low $Re$, however fast it flaps. Propulsion needs at least two
out-of-phase degrees of freedom: a rotating helix, a bending cilium.

*Introduced:* [3.3](lessons/03-03-stokes-flow.md)

### Boundary layer

Viscosity cannot be dropped at a wall no matter how large $Re$ is — because
$1/Re$ multiplies the *highest* derivative, and only that term can enforce
no-slip. So viscosity retreats into a thin layer where the velocity climbs from
zero to the free stream.

$$\frac{\delta}{L}\sim\frac{1}{\sqrt{Re}},\qquad \delta(x)\sim\sqrt{\frac{\nu x}{U}}$$

*Introduced:* [3.4](lessons/03-04-boundary-layers.md)

### Blasius solution

The flat-plate boundary layer is **self-similar**: every profile collapses onto
one curve when plotted against $\eta=y\sqrt{U/\nu x}$, turning the PDE into a
single ODE.

$$f'''+\tfrac12 f f''=0,\qquad f(0)=f'(0)=0,\ f'(\infty)=1,\qquad u/U=f'(\eta)$$

*Introduced:* [3.4](lessons/03-04-boundary-layers.md)

### Separation

The wall shear vanishes and the near-wall flow reverses, peeling the boundary
layer off the surface and leaving a broad low-pressure wake.

$$\left.\frac{\partial u}{\partial y}\right\rvert_{\text{wall}}=0$$

Needs **both** ingredients: a boundary layer (slow, momentum-starved fluid) and an
adverse pressure gradient $\partial p/\partial x>0$.

*Introduced:* [3.5](lessons/03-05-separation-drag.md)

### Form drag vs skin-friction drag

The fluid touches a body only two ways — it presses on it and it rubs along it.
Pressure integrated over the body is **form drag** (dominant for bluff bodies,
because separation destroys the fore–aft pressure symmetry); shear integrated
over it is **skin friction** (dominant for streamlined bodies).

*Introduced:* [3.5](lessons/03-05-separation-drag.md)

### Drag crisis

Near $Re\approx3\times10^5$ a sphere's $C_D$ *drops* from about $0.47$ to $0.1$,
because the boundary layer goes turbulent **before** it separates: turbulent
mixing refuels near-wall momentum, separation moves rearward, and the wake
narrows. Golf-ball dimples trip this deliberately at $Re\sim4\times10^4$.

*Introduced:* [3.5](lessons/03-05-separation-drag.md)

### Dispersion relation

The law tying a wave's frequency to its wavelength. If $\omega/k$ depends on $k$
the medium is **dispersive** (deep water); if not, it is **non-dispersive**
(sound, shallow water).

*Introduced:* [4.1](lessons/04-01-surface-waves.md)

### Phase and group velocity

The crest speed and the packet (energy) speed. They differ whenever the medium
disperses; for deep-water gravity waves $c_g=\tfrac12c$.

$$c=\frac{\omega}{k},\qquad c_g=\frac{d\omega}{dk}$$

*Introduced:* [4.1](lessons/04-01-surface-waves.md)

### Sound speed

The fluid's stiffness per unit density, measured **adiabatically** — the
compressions in a sound wave are far too fast to exchange heat (Newton got this
wrong by a factor $\sqrt\gamma$).

$$c^2=\left(\frac{\partial p}{\partial\rho}\right)_{\!s}=\frac{\gamma p}{\rho},\qquad c=\sqrt{\frac{\gamma R T}{M_{\text{mol}}}}$$

*Introduced:* [4.2](lessons/04-02-sound-waves.md)

### Mach number

Flow speed against sound speed. It is the *precise* meaning of "incompressible":
density variations scale as $M^2$, so $M\lesssim0.3$ keeps them under about 9
percent.

$$M=\frac{U}{c}$$

*Introduced:* [4.2](lessons/04-02-sound-waves.md)

### Linear stability analysis

Perturb an exact base flow, keep only terms linear in the perturbation, plug in a
normal mode $e^{i(kx-\omega t)}$, and read the **imaginary** part of $\omega$.

$$\operatorname{Im}\omega>0\Rightarrow\text{grows (unstable)},\qquad \operatorname{Im}\omega<0\Rightarrow\text{decays (stable)}$$

*Introduced:* [4.3](lessons/04-03-instability-kh-rb.md)

### Kelvin–Helmholtz instability

A velocity jump across an interface always destabilizes it: ripple the interface
up, the fluid must squeeze over the bump, so by Bernoulli its pressure drops
right there and sucks the bump further up. Shear's destabilizing term scales as
$k^2$ while gravity's stabilizing term scales only as $k$, so **short waves are
always the dangerous ones** — and with no density difference, any shear layer
rolls up.

*Introduced:* [4.3](lessons/04-03-instability-kh-rb.md)

### Rayleigh number

Buoyant drive divided by diffusive damping in a layer heated from below. Below
the critical value the layer just conducts; above it, convection rolls switch on.

$$Ra=\frac{g\,\alpha\,\Delta T\,d^3}{\nu\kappa},\qquad Ra_c\approx1708\ \text{(rigid plates)}$$

*Introduced:* [4.3](lessons/04-03-instability-kh-rb.md)

### Richardson number

Stabilizing buoyancy over destabilizing shear. $Ri>\tfrac14$ everywhere is
*sufficient* for stability — enough stratification shuts Kelvin–Helmholtz off.

$$Ri=\frac{N^2}{(dU/dz)^2},\qquad N^2=-\frac{g}{\rho}\frac{d\rho}{dz}$$

*Introduced:* [4.3](lessons/04-03-instability-kh-rb.md)

### Transition to turbulence

Not a switch but a **staged loss of stability**: steady → periodic (von Kármán
vortex street) → quasi-periodic → chaotic, each arrow a mode going unstable at
its own critical $Re$.

*Introduced:* [4.4](lessons/04-04-transition-to-turbulence.md)

### Deterministic chaos

Navier–Stokes has no noise term, yet its solutions can be unpredictable: any
initial uncertainty grows as $\delta(t)\sim\delta_0e^{\lambda t}$ with
$\lambda>0$ the largest Lyapunov exponent. Turbulence is chaotic, **not random**
— its statistics repeat even though its trajectories do not.

*Introduced:* [4.4](lessons/04-04-transition-to-turbulence.md)

### Transient (non-normal) growth

Why pipe flow transitions near $Re\approx2300$ even though it is *linearly stable
at every $Re$*: disturbances that eventually decay can amplify enormously first,
enough to trip the flow. A flow can be "stable to whispers but unstable to
shouts."

*Introduced:* [4.4](lessons/04-04-transition-to-turbulence.md)

### Energy cascade

Energy is injected at the large **integral scale** $L$, handed down loss-free
through a wide **inertial range** of eddies, and only ground into heat at the
tiny **Kolmogorov scale**. In steady state the flux through every intermediate
scale equals the dissipation rate $\varepsilon$ — that single conserved flux is
the key to everything.

*Introduced:* [4.5](lessons/04-05-turbulence-kolmogorov.md)

### Kolmogorov microscale

The smallest eddy in the flow — where an eddy's own Reynolds number falls to $1$
and viscosity finally bites.

$$\eta_K=\left(\frac{\nu^3}{\varepsilon}\right)^{1/4},\qquad Re_{\eta}=1$$

*Introduced:* [4.5](lessons/04-05-turbulence-kolmogorov.md)

## Formulas and rules

### The governing equations

$$\text{mass:}\quad \partial_t\rho+\nabla\cdot(\rho\mathbf{u})=0\ \xrightarrow{\ D\rho/Dt=0\ }\ \nabla\cdot\mathbf{u}=0$$

$$\text{momentum (Cauchy, any fluid):}\quad \rho\frac{Du_i}{Dt}=\rho g_i+\frac{\partial\sigma_{ij}}{\partial x_j}=\rho g_i-\frac{\partial p}{\partial x_i}+\frac{\partial\tau_{ij}}{\partial x_j}$$

$$\text{Euler (inviscid):}\quad \rho\left(\partial_t\mathbf{u}+(\mathbf{u}\cdot\nabla)\mathbf{u}\right)=-\nabla p+\rho\mathbf{g}$$

$$\text{Navier–Stokes (incompressible Newtonian):}\quad \rho\left(\partial_t\mathbf{u}+(\mathbf{u}\cdot\nabla)\mathbf{u}\right)=-\nabla p+\mu\nabla^2\mathbf{u}+\rho\mathbf{g}$$

$$\text{kinematic form:}\quad \partial_t\mathbf{u}+(\mathbf{u}\cdot\nabla)\mathbf{u}=-\frac1\rho\nabla p+\nu\nabla^2\mathbf{u}+\mathbf{g},\qquad \nu=\frac\mu\rho$$

$$\text{hydrostatics}\ (\mathbf{u}=\mathbf 0):\quad \nabla p=\rho\mathbf{g}\ \Longrightarrow\ p(z)=p_0-\rho g z\ \ (\approx1\ \text{atm per }10\ \text{m of water})$$

*From* [1.3](lessons/01-03-continuity-equation.md), [1.4](lessons/01-04-stress-tensor.md), [1.5](lessons/01-05-euler-equation.md), [1.6](lessons/01-06-navier-stokes.md)

### Navier–Stokes term by term

Every term of the kinematic form has units of **acceleration**, m/s² (multiply by
$\rho$ and they are all N/m³ — a force per volume, which is what makes this
Newton's second law per unit volume).

| Term | Name | What it physically is | Dies when |
|---|---|---|---|
| $\partial_t\mathbf{u}$ | local / unsteady acceleration | the velocity at a **fixed point** changing in time | the flow is steady |
| $(\mathbf{u}\cdot\nabla)\mathbf{u}$ | advective (convective) acceleration | a parcel swept into a region of different velocity — **nonlinear**, the source of all difficulty and of turbulence | the flow is fully developed, or $Re\to0$ |
| $-\tfrac1\rho\nabla p$ | pressure-gradient force | push from high toward low pressure; only the *gradient* pushes | never (it is the enforcer of $\nabla\cdot\mathbf{u}=0$) |
| $\nu\nabla^2\mathbf{u}$ | viscous diffusion of momentum | friction **smearing** velocity differences, exactly like heat diffusing | $Re\to\infty$ — but never at a wall |
| $\mathbf{g}$ | body force | gravity, or any force per unit mass acting throughout the volume | it can be absorbed into $p$ when $\rho$ is uniform |

**Cartesian component form** (the $x$-component; cycle indices for $y$ and $z$):

$$\rho\left(\frac{\partial u}{\partial t}+u\frac{\partial u}{\partial x}+v\frac{\partial u}{\partial y}+w\frac{\partial u}{\partial z}\right)=-\frac{\partial p}{\partial x}+\mu\left(\frac{\partial^2u}{\partial x^2}+\frac{\partial^2u}{\partial y^2}+\frac{\partial^2u}{\partial z^2}\right)+\rho g_x$$

**Index form** (summation convention, the compact one to quote in proofs):

$$\rho\left(\partial_t u_i+u_j\partial_j u_i\right)=-\partial_i p+\mu\,\partial_j\partial_j u_i+\rho g_i,\qquad \partial_i u_i=0$$

**Two reductions worth naming.** Drop $\nu\nabla^2\mathbf{u}$ ($Re\to\infty$) and
you have Euler — one order lower, so it can only enforce no-penetration
$\mathbf{u}\cdot\mathbf n=0$, never no-slip, which is exactly why it misses drag.
Drop the whole left side ($Re\to0$) and you have the linear
[Stokes equations](#stokes-creeping-flow). And note the general viscous term is
$\mu\nabla^2\mathbf{u}+\tfrac{\mu}{3}\nabla(\nabla\cdot\mathbf{u})$ — the second
piece dies **only** because the flow is incompressible.

*From* [1.6](lessons/01-06-navier-stokes.md), [3.1](lessons/03-01-reynolds-number.md), [3.3](lessons/03-03-stokes-flow.md)

### Vector identities the course leans on

$$(\mathbf{u}\cdot\nabla)\mathbf{u}=\nabla\!\left(\tfrac12u^2\right)-\mathbf{u}\times\boldsymbol\omega\qquad\text{(the Lamb form — this is where Bernoulli comes from)}$$

$$\nabla\times(\nabla\phi)\equiv\mathbf 0,\qquad \nabla\cdot(\nabla\times\mathbf{u})\equiv0\ \Rightarrow\ \nabla\cdot\boldsymbol\omega=0$$

$$\nabla\cdot(\rho\mathbf{u})=\mathbf{u}\cdot\nabla\rho+\rho\,\nabla\cdot\mathbf{u},\qquad \nabla\cdot(\nabla\phi)=\nabla^2\phi$$

Substituting the Lamb form into steady Euler with $\mathbf{g}=-\nabla(gz)$ gives
the one-line route to Bernoulli:

$$\partial_t\mathbf{u}-\mathbf{u}\times\boldsymbol\omega=-\nabla\!\left(\frac p\rho+\tfrac12u^2+gz\right)$$

*From* [1.5](lessons/01-05-euler-equation.md), [2.1](lessons/02-01-bernoulli.md), [2.2](lessons/02-02-vorticity-circulation.md)

### Operators in cylindrical polar coordinates

Used but never derived in the lessons — pipe flow and every vortex calculation
needs them.

| Quantity | In $(r,\theta,z)$ |
|---|---|
| divergence | $\nabla\cdot\mathbf{u}=\dfrac1r\dfrac{\partial(r u_r)}{\partial r}+\dfrac1r\dfrac{\partial u_\theta}{\partial\theta}+\dfrac{\partial u_z}{\partial z}$ |
| axial vorticity | $\omega_z=\dfrac1r\dfrac{\partial(r u_\theta)}{\partial r}-\dfrac1r\dfrac{\partial u_r}{\partial\theta}$ |
| Laplacian of a scalar | $\nabla^2f=\dfrac1r\dfrac{\partial}{\partial r}\!\left(r\dfrac{\partial f}{\partial r}\right)+\dfrac1{r^2}\dfrac{\partial^2f}{\partial\theta^2}+\dfrac{\partial^2f}{\partial z^2}$ |
| axial-flow case ($u_z=u(r)$) | $\nabla^2u=\dfrac1r\dfrac{d}{dr}\!\left(r\dfrac{du}{dr}\right)$ — the pipe-flow operator |

The vector Laplacian is **not** the componentwise scalar Laplacian in curvilinear
coordinates; the shortcut above is safe only because $u_z(r)$ points along a
straight, fixed direction.

*Used by* [2.2](lessons/02-02-vorticity-circulation.md) *and* [3.2](lessons/03-02-couette-poiseuille.md)

### Boundary conditions

| Condition | Statement | Where it applies |
|---|---|---|
| no-slip | $\mathbf{u}=\mathbf{u}_{\text{wall}}$ | viscous flow at any solid surface — needs the $\nabla^2$ term to be enforceable |
| no-penetration | $\mathbf{u}\cdot\mathbf n=\partial\phi/\partial n=0$ | inviscid flow at a wall — a **Neumann** problem for $\nabla^2\phi=0$ |
| kinematic (free surface) | $\partial_t\eta=\partial_z\phi$ at $z=0$ (linearized) | the surface is made of fluid, so it rises with the water under it |
| dynamic (free surface) | $\partial_t\phi+g\eta=0$ at $z=0$; add $-(\sigma/\rho)\partial_{xx}\eta$ for surface tension | surface pressure must match the atmosphere |
| bottom | $\partial_z\phi=0$ at $z=-h$ | no flow through the floor |
| centreline regularity | $du/dr$ finite at $r=0$ | pipe flow — this is what kills the $\ln r$ constant |

*From* [1.6](lessons/01-06-navier-stokes.md), [2.4](lessons/02-04-irrotational-flow-velocity-potential.md), [3.2](lessons/03-02-couette-poiseuille.md), [4.1](lessons/04-01-surface-waves.md)

### Dimensionless groups

Each is a ratio: *the effect that drives* over *the effect that resists*. Compute
it before you write an equation — it tells you which terms you are allowed to
drop.

| Group | Definition | Compares | What it selects |
|---|---|---|---|
| Reynolds $Re$ | $\dfrac{UL}{\nu}=\dfrac{\rho UL}{\mu}$ | inertia vs viscosity | $\ll1$ creeping/Stokes · moderate laminar · $\gg1$ boundary layers, wakes, turbulence (pipe transition $\approx2300$) |
| Mach $M$ | $\dfrac{U}{c}$ | flow speed vs sound speed | $\lesssim0.3$ incompressible · $<1$ subsonic · $>1$ supersonic (shocks) |
| Froude $Fr$ | $\dfrac{U}{\sqrt{gL}}$ | inertia vs gravity | $<1$ subcritical (gravity waves outrun the flow) · $>1$ supercritical; the group behind ship waves and hydraulic jumps |
| Weber $We$ | $\dfrac{\rho U^2L}{\sigma}$ | inertia vs surface tension | $\ll1$ tension holds a drop together · $\gg1$ it breaks up; the capillary-vs-gravity crossover of [4.1](lessons/04-01-surface-waves.md) is $We\sim Fr^2$ |
| Strouhal $St$ | $\dfrac{fD}{U}$ | shedding frequency vs advection | $\approx0.2$ for a cylinder over $Re\sim50$–$10^5$; gives $f=St\,U/D$ |
| Knudsen $\mathrm{Kn}$ | $\dfrac{\lambda}{L}$ | molecular step vs flow scale | $\ll1$ continuum valid · $\gtrsim0.01$ slip · $\gtrsim10$ free-molecular |
| Rayleigh $Ra$ | $\dfrac{g\alpha\Delta T d^3}{\nu\kappa}$ | buoyant drive vs diffusive damping | $<1708$ conduction only · $>1708$ convection rolls |
| Richardson $Ri$ | $\dfrac{N^2}{(dU/dz)^2}$ | stratification vs shear | $>\tfrac14$ everywhere is sufficient for stability |

Froude and Weber are not named in the lessons but are the groups the surface-wave
balances of [4.1](lessons/04-01-surface-waves.md) are secretly written in. The
Péclet and Prandtl numbers, which appear once heat or species are carried along,
live on the transport card:
[dimensionless groups](../transport-phenomena/reference.md#dimensionless-groups).

*From* [3.1](lessons/03-01-reynolds-number.md), [4.2](lessons/04-02-sound-waves.md), [4.3](lessons/04-03-instability-kh-rb.md), [4.4](lessons/04-04-transition-to-turbulence.md)

### The exact solutions, and their assumptions

All three below assume **steady, incompressible, Newtonian** flow with no-slip at
every wall. The extra hypotheses are what make each one solvable.

| Flow | Extra assumptions | Result |
|---|---|---|
| **Plane Couette** | gap $h$, top wall at $U$, bottom fixed, $\partial_x p=0$, fully developed | $u(y)=U\dfrac{y}{h}$, $\ \tau=\dfrac{\mu U}{h}$ uniform, so $\mu=\dfrac{\tau h}{U}$ |
| **Plane Poiseuille** | gap $h$, both walls fixed, driven by $G=-\partial_x p$ | $u(y)=\dfrac{G}{2\mu}y(h-y)$, $\ u_{\max}=\dfrac{Gh^2}{8\mu}$, $\ \bar u=\tfrac23u_{\max}$, $\ Q'=\dfrac{Gh^3}{12\mu}$ per unit width |
| **Hagen–Poiseuille (pipe)** | radius $a$, axisymmetric, driven by $G=\Delta p/L$ | $u(r)=\dfrac{G}{4\mu}(a^2-r^2)$, $\ u_{\max}=\dfrac{Ga^2}{4\mu}$, $\ \bar u=\tfrac12u_{\max}$, $\ Q=\dfrac{\pi a^4\Delta p}{8\mu L}$, $\ \tau_w=\dfrac{Ga}{2}$ |
| **Stokes flow past a sphere** | $Re\ll1$ (inertia deleted, *not* just small), unbounded fluid, rigid sphere radius $a$ | $F=6\pi\mu a U$, and terminal speed $U_t=\dfrac{2(\rho_s-\rho_f)g a^2}{9\mu}$ |

Three sanity notes. (i) In Couette and Poiseuille the advective term is
**identically** zero, so these are exact at any $Re$ — until the flow stops being
laminar. (ii) $\rho$ appears nowhere in the profiles, $Q$, or $\tau$: steady
viscous channel flow is set by viscosity and geometry alone. (iii) After using
$F=6\pi\mu aU$, always go back and check that the $Re$ you get is actually small
— it very often is not.

*From* [3.2](lessons/03-02-couette-poiseuille.md) *and* [3.3](lessons/03-03-stokes-flow.md)

### Potential-flow building blocks

Any analytic $w(z)$ is a legal 2-D irrotational incompressible flow, and
**superposition is addition**: $w_{\text{total}}=\sum_k w_k$.

| Flow | $w(z)$ | $dw/dz$ | Reading |
|---|---|---|---|
| uniform stream | $Uz$ | $U$ | $\phi=Ux$, $\psi=Uy$; speed $U$ along $+x$ |
| source / sink | $\dfrac{m}{2\pi}\ln z$ | $\dfrac{m}{2\pi z}$ | $u_r=\dfrac{m}{2\pi r}$; $m$ is the volume flux per span ($m<0$ is a sink) |
| line vortex | $-\dfrac{i\Gamma}{2\pi}\ln z$ | $-\dfrac{i\Gamma}{2\pi z}$ | $u_\theta=\dfrac{\Gamma}{2\pi r}$; irrotational for $r>0$, all the vorticity a delta spike at the core |
| doublet / dipole | $\dfrac{\mu}{z}$ | $-\dfrac{\mu}{z^2}$ | coincident source + sink; with a stream it makes a cylinder |
| cylinder, radius $a$ | $U\!\left(z+\dfrac{a^2}{z}\right)$ | $U\!\left(1-\dfrac{a^2}{z^2}\right)$ | doublet strength tuned to $\mu=Ua^2$ so $\psi=0$ closes on $\lvert z\rvert=a$ |
| cylinder with circulation | $U\!\left(z+\dfrac{a^2}{z}\right)+\dfrac{i\Gamma}{2\pi}\ln z$ | — | $\Gamma$ clockwise-positive; the lift case |

Source and vortex are the **same logarithm** differing by $-i$ — a 90° rotation,
which is exactly why one has radial streamlines and the other circular ones.

**Two canonical flows worth recognizing on sight.** $\phi=x^2-y^2$,
$\psi=2xy$ is stagnation-point / right-angled-corner flow (the axes are
streamlines, so they can be read as walls). Solid-body rotation
$u_\theta=\Omega r$ has uniform $\omega_z=2\Omega$; the free vortex
$u_\theta=\Gamma/2\pi r$ has $\omega_z=0$ everywhere it is defined.

*From* [2.4](lessons/02-04-irrotational-flow-velocity-potential.md), [2.5](lessons/02-05-complex-potential.md), [2.6](lessons/02-06-flow-past-cylinder-lift.md)

### Flow past a cylinder — the full result

$$\psi=U\!\left(r-\frac{a^2}{r}\right)\sin\theta+\frac{\Gamma}{2\pi}\ln\frac ra,\qquad u_\theta(\theta)\big\rvert_{r=a}=-2U\sin\theta-\frac{\Gamma}{2\pi a}$$

$$\text{stagnation points:}\ \ \sin\theta_s=-\frac{\Gamma}{4\pi Ua}\quad(\text{they merge at the bottom when }\Gamma=4\pi Ua)$$

$$\text{Blasius theorem:}\ \ F_x-iF_y=\frac{i\rho}{2}\oint\left(\frac{dw}{dz}\right)^{\!2}dz\qquad\Longrightarrow\qquad D=0,\quad L=\rho U\Gamma$$

The surface speed reaches $2U$ at the shoulders even with no circulation — that
doubling is the doublet's, not the vortex's. The lift depends on $U$ and $\Gamma$
alone: Kutta–Joukowski holds for *any* 2-D shape, and one conformal map (the
Joukowski transform $\zeta=z+b^2/z$) carries the cylinder to an aerofoil while
preserving $\Gamma$.

*From* [2.6](lessons/02-06-flow-past-cylinder-lift.md)

### Boundary-layer and drag results

$$\delta(x)\sim\sqrt{\frac{\nu x}{U}},\qquad \frac\delta L\sim\frac1{\sqrt{Re}},\qquad \tau_w\sim\frac{\mu U}{\delta}\propto x^{-1/2},\qquad \text{drag per width}\propto\sqrt L$$

$$\text{Blasius exact:}\quad \delta_{99}\approx5.0\sqrt{\frac{\nu x}{U}},\qquad \tau_w=\frac{0.332\,\rho U^2}{\sqrt{Re_x}},\qquad C_f=\frac{1.328}{\sqrt{Re_L}}$$

$$C_D=\frac{D}{\tfrac12\rho U^2A},\qquad D=\underbrace{\oint p\,(\hat{\mathbf n}\cdot\hat{\mathbf x})\,dA}_{\text{form}}+\underbrace{\oint\tau_w(\hat{\mathbf t}\cdot\hat{\mathbf x})\,dA}_{\text{skin friction}}$$

| Body | $C_D$ (order of magnitude) |
|---|---|
| streamlined strut / fairing | $0.05$–$0.1$ |
| car | $\approx0.3$ |
| sphere (subcritical) | $\approx0.47$, falling to $\approx0.1$ past the drag crisis |
| cylinder | $\approx1.2$ |
| flat plate facing the flow | $\approx1.2$ |

Because $D\propto U^2$, the power to overcome drag goes as $U^3$: driving 20
percent faster burns about 73 percent more power on air.

The wall is also the **factory of vorticity** — no-slip manufactures it, and
diffusion and advection carry it into the flow. This is what quietly rescues the
inviscid theorems of Module 2: real flows are not globally irrotational.

*From* [3.4](lessons/03-04-boundary-layers.md) *and* [3.5](lessons/03-05-separation-drag.md)

### Waves — the dispersion relations

| Wave | Relation | Speeds |
|---|---|---|
| surface gravity, depth $h$ | $\omega^2=gk\tanh(kh)$ | the general case |
| deep water, $kh\gg1$ | $\omega^2=gk$ | $c=\sqrt{g/k}=\sqrt{g\lambda/2\pi}$, $\ c_g=\tfrac12c$ — **dispersive** |
| shallow water, $kh\ll1$ | $\omega^2=gk^2h$ | $c=c_g=\sqrt{gh}$ — **non-dispersive**; this is a tsunami |
| deep water with surface tension | $\omega^2=gk+\dfrac{\sigma}{\rho}k^3$ | $c=\sqrt{g/k+\sigma k/\rho}$, minimum $\approx0.23$ m/s at $\lambda\approx1.7$ cm |
| sound | $\omega=ck$ | $c_{\text{phase}}=c_{\text{group}}=c$ — **non-dispersive**, longitudinal |

Gravity ($\propto k$) restores long waves; surface tension ($\propto k^3$)
restores short ones. In deep water each parcel orbits a near-circle whose radius
decays as $e^{kz}$ — the wave is all surface.

**Acoustics extras:** $p'=c^2\rho'$, impedance $Z=\rho_0c$ with
$p'=\rho_0c\,u'$, and intensity $I=\overline{p'^2}/(\rho_0c)$.

*From* [4.1](lessons/04-01-surface-waves.md) *and* [4.2](lessons/04-02-sound-waves.md)

### Kelvin–Helmholtz dispersion relation

$$\omega=k\,\frac{\rho_2U_2+\rho_1U_1}{\rho_1+\rho_2}\pm\sqrt{\underbrace{gk\,\frac{\rho_2-\rho_1}{\rho_1+\rho_2}}_{\text{gravity: stabilizing},\ \propto k}-\underbrace{k^2\frac{\rho_1\rho_2}{(\rho_1+\rho_2)^2}(U_1-U_2)^2}_{\text{shear: destabilizing},\ \propto k^2}}$$

Everything is in the sign under the root: negative means $\omega$ picks up an
imaginary part and the mode grows. Rayleigh–Bénard's onset also selects a
wavelength, $k_cd\approx3.12$ — a convection cell is about as wide as the layer
is deep — and $Ra_c$ depends on the plates: $1708$ rigid–rigid,
$27\pi^4/4\approx657$ free–free.

*From* [4.3](lessons/04-03-instability-kh-rb.md)

### Turbulence scalings (K41)

$$u_\ell\sim(\varepsilon\ell)^{1/3},\qquad \tau_\ell\sim\varepsilon^{-1/3}\ell^{2/3},\qquad E(k)=C\varepsilon^{2/3}k^{-5/3}\ \ (C\approx1.5)$$

$$\varepsilon\sim\frac{U^3}{L},\qquad \eta_K=\left(\frac{\nu^3}{\varepsilon}\right)^{1/4},\qquad \frac{L}{\eta_K}\sim Re^{3/4},\qquad N_{\text{grid}}\sim Re^{9/4}$$

The last one is the wall that direct numerical simulation keeps hitting: a jet
engine at $Re\sim10^7$ would need about $10^{16}$ grid points. Note also the
**dissipative anomaly** — lowering $\nu$ does not lower $\varepsilon$, it just
pushes $\eta_K$ smaller until dissipation keeps pace.

*From* [4.5](lessons/04-05-turbulence-kolmogorov.md)

### Fluid properties worth carrying

The lessons use these numbers without stating them anywhere.

| Fluid (≈20 °C) | $\rho$ (kg/m³) | $\mu$ (Pa·s) | $\nu$ (m²/s) | other |
|---|---|---|---|---|
| water | $1000$ | $1.0\times10^{-3}$ | $1.0\times10^{-6}$ | $\sigma=0.073$ N/m, $c\approx1480$ m/s |
| air (sea level) | $1.2$ | $1.8\times10^{-5}$ | $1.5\times10^{-5}$ | $c=343$ m/s, $\gamma=1.4$, $\lambda\approx70$ nm |
| glycerin | $1260$ | $1.5$ | $1.2\times10^{-3}$ | the standard "watch it fall" fluid |
| honey | — | $\approx10$ | — | four orders of magnitude thicker than water |
| olive oil | — | — | $8\times10^{-5}$ | $\alpha\approx7\times10^{-4}$ K⁻¹, $\kappa\approx10^{-7}$ m²/s |

Reference Reynolds numbers: bacterium $\sim10^{-4}$, swimming person $\sim10^{6}$,
cruising airliner $\sim10^{7}$.

*Used throughout Modules 3–4, notably* [3.1](lessons/03-01-reynolds-number.md)

### Where the momentum / heat / mass analogy lives

$\nu$ is the diffusivity of momentum, exactly as $\alpha=k/\rho c_p$ is the
diffusivity of heat and $D_{AB}$ of species — same flux law, different cargo.
This course only uses the momentum column. For the full three-column dictionary
(the flux laws, the property ratios $Pr$, $Sc$, $Le$, the shell-balance recipe,
and the Reynolds/Chilton–Colburn analogies) go to the transport card rather than
re-deriving it: [the grand analogy](../transport-phenomena/reference.md#the-grand-analogy)
and [the transport analogies](../transport-phenomena/reference.md#the-transport-analogies).
Its [boundary layer](../transport-phenomena/reference.md#boundary-layer) and
[separation](../transport-phenomena/reference.md#separation) entries are the same
physics as [3.4](lessons/03-04-boundary-layers.md)–[3.5](lessons/03-05-separation-drag.md),
written for a heat-and-mass audience.

## Assumed, not taught here

This is a Tier 2 course, so most of what it assumes is genuine prerequisite
machinery rather than skipped derivation. Every row points at the course that
does the work.

| Fact | Where it's taught |
|---|---|
| Divergence theorem (control volume → PDE, for both mass and momentum) | [calc-refresher 5.3](../calc-refresher/lessons/05-03-green-stokes-divergence.md) |
| Stokes' theorem (circulation = flux of vorticity) | [calc-refresher 5.3](../calc-refresher/lessons/05-03-green-stokes-divergence.md) |
| Divergence and curl themselves; curl-free ⇒ a potential exists | [calc-refresher 5.1](../calc-refresher/lessons/05-01-vector-fields-div-curl.md), [5.2](../calc-refresher/lessons/05-02-line-integrals-and-flux.md) |
| Gradient and the multivariable chain rule (the material derivative *is* the chain rule) | [calc-refresher 4.1](../calc-refresher/lessons/04-01-partial-derivatives-and-gradient.md) |
| Index notation, summation convention, $\delta_{ij}$, Cartesian tensors | [mathematical-methods-physics 1.5](../mathematical-methods-physics/lessons/01-05-index-notation-cartesian-tensors.md) |
| Grad/div/curl/Laplacian in curvilinear coordinates (the polar operators tabulated above) | [mathematical-methods-physics 1.4](../mathematical-methods-physics/lessons/01-04-curvilinear-coordinates.md) |
| Newton's second law, which every momentum equation here is a per-volume copy of | [mechanics-refresher 1.2](../mechanics-refresher/lessons/01-02-newtons-laws.md) |
| Angular momentum and torque — why $\sigma_{ij}=\sigma_{ji}$ | [mechanics-refresher 4.2](../mechanics-refresher/lessons/04-02-angular-momentum.md) |
| Energy conservation in a potential (Bernoulli's mechanical ancestor; Torricelli's $\sqrt{2gh}$) | [mechanics-refresher 2.2](../mechanics-refresher/lessons/02-02-potential-energy-conservation.md) |
| Separable first-order ODEs (integrating $\dot{\mathbf x}=\mathbf u$ for a pathline) | [ode-refresher 1.2](../ode-refresher/lessons/01-02-separable-and-linear-first-order.md) |
| Second-order linear ODE boundary-value problems (Couette/Poiseuille are exactly this) | [ode-refresher 2.1](../ode-refresher/lessons/02-01-second-order-constant-coefficient.md) |
| Laplace's equation, harmonic functions, Neumann problems, uniqueness | [pdes 2.3](../pdes/lessons/02-03-laplace-poisson-equations.md) |
| The diffusion equation and its $\sqrt{\nu t}$ similarity solution (viscous spreading, $\delta\sim\sqrt{\nu x/U}$, Blasius) | [pdes 2.1](../pdes/lessons/02-01-heat-diffusion-equations.md) |
| The wave equation $\partial_t^2f=c^2\nabla^2f$ | [pdes 2.2](../pdes/lessons/02-02-wave-equation-dalembert.md) |
| The Dirac delta (the free vortex's concentrated core) | [pdes 5.1](../pdes/lessons/05-01-dirac-delta-distributions.md) |
| Analytic functions and the Cauchy–Riemann equations | [complex-analysis 2.2](../complex-analysis/lessons/02-02-cauchy-riemann-equations.md) |
| Harmonic conjugates and conformality | [complex-analysis 2.3](../complex-analysis/lessons/02-03-harmonic-functions-conformality.md) |
| Residues and closed-contour integrals (how Blasius' theorem is actually evaluated) | [complex-analysis 6.1](../complex-analysis/lessons/06-01-residue-theorem.md) |
| Conformal maps as flow generators (the Joukowski transform) | [complex-analysis 7.2](../complex-analysis/lessons/07-02-conformal-maps-riemann.md) |
| Adiabatic processes, $p\propto\rho^\gamma$, and $\gamma=c_p/c_v$ — what fixes the sound speed | [thermodynamics-physics 1.4](../thermodynamics-physics/lessons/01-04-heat-capacities-pv-processes.md) |
| Bifurcations (steady → periodic is a Hopf bifurcation) | [dynamical-systems 3.3](../dynamical-systems/lessons/03-03-hopf-bifurcation.md) |
| Strange attractors, sensitive dependence, Lyapunov exponents | [dynamical-systems 4.3](../dynamical-systems/lessons/04-03-strange-attractors.md), [4.4](../dynamical-systems/lessons/04-04-lyapunov-exponents.md) |
| Electrostatic potential $\mathbf E=-\nabla V$ — the sign-flipped twin of $\mathbf u=\nabla\phi$ | [em-refresher 1.3](../em-refresher/lessons/01-03-electric-potential.md) |
| Momentum/heat/mass flux analogy, $Pr$, $Sc$, and the transport coefficients | [transport-phenomena · the grand analogy](../transport-phenomena/reference.md#the-grand-analogy) |

## Pitfalls

### The continuum picture

- The continuum limit is **not** a real limit $V\to0$ — that diverges into molecular noise. The REV is a deliberately *finite* box on the density plateau. *([1.1](lessons/01-01-continuum-hypothesis.md))*
- Liquids have a mean free path too (about $0.1$ nm). The hypothesis is about *scale separation*, not about phase. *([1.1](lessons/01-01-continuum-hypothesis.md))*
- No-slip is an empirical continuum condition with an expiry date, not a theorem — it genuinely fails at high $\mathrm{Kn}$. *([1.1](lessons/01-01-continuum-hypothesis.md))*

### Kinematics and the material derivative

- Steady does **not** mean unaccelerated: a nozzle's parcels speed up through $(\mathbf{u}\cdot\nabla)\mathbf{u}$ while every fixed probe reads a flat line. *([1.2](lessons/01-02-lagrangian-eulerian-material-derivative.md), [1.5](lessons/01-05-euler-equation.md))*
- $(\mathbf{u}\cdot\nabla)\mathbf{u}$ is not $\mathbf{u}(\nabla\cdot\mathbf{u})$ — the first is a scalar operator applied to each component, the second is a scalar times a vector. *([1.2](lessons/01-02-lagrangian-eulerian-material-derivative.md))*
- A smoke photo shows parcel paths **only** in steady flow; otherwise streamline, pathline, and streakline are three different curves. *([1.2](lessons/01-02-lagrangian-eulerian-material-derivative.md))*

### Mass and incompressibility

- "Incompressible" describes the **flow**, not the fluid — the same air is incompressible round a cyclist and compressible round a jet. What changed is $M=U/c$. *([1.3](lessons/01-03-continuity-equation.md), [4.2](lessons/04-02-sound-waves.md))*
- $D\rho/Dt=0$ is weaker than $\rho=\text{const}$: parcels may each carry a different density (oil over water, a salinity gradient), so you cannot pull $\rho$ out of $\nabla\cdot(\rho\mathbf{u})$ blindly. *([1.3](lessons/01-03-continuity-equation.md))*
- Mind the sign: $\nabla\cdot\mathbf{u}>0$ is expansion and therefore *falling* density. *([1.3](lessons/01-03-continuity-equation.md))*

### Stress, pressure, and forces

- Only the **gradient** of stress pushes a parcel. A uniform pressure exerts a huge force on each face and exactly zero net force. *([1.4](lessons/01-04-stress-tensor.md), [1.5](lessons/01-05-euler-equation.md))*
- Pressure is a scalar and becomes a force only once handed a surface, as $-p\,\mathbf n$ — always normal, always inward. Only $\tau_{ij}$ can pull tangentially. *([1.4](lessons/01-04-stress-tensor.md))*
- In $\sigma_{ij}$ the **second** index names the face. Symmetry usually hides an index swap, but $t_i=\sigma_{ij}n_j$ only reads correctly this way. *([1.4](lessons/01-04-stress-tensor.md))*
- A static fluid cannot resist a sideways push at all — that is the definition of a fluid, not an approximation. *([1.4](lessons/01-04-stress-tensor.md))*
- Viscous stress responds to the strain **rate** $e_{ij}$, never to accumulated strain. That single word is the whole fluid/solid distinction. *([1.6](lessons/01-06-navier-stokes.md))*
- $\nu\nabla^2\mathbf{u}$ **smooths**; it never sharpens and never "accelerates the fluid." It moves momentum from fast regions to slow ones and dissipates the difference as heat. *([1.6](lessons/01-06-navier-stokes.md))*
- There is no evolution equation for $p$ in incompressible flow. Pressure is solved for instantaneously (a Poisson equation) to enforce $\nabla\cdot\mathbf{u}=0$. *([1.5](lessons/01-05-euler-equation.md))*

### Bernoulli

- Comparing two points on **different** streamlines is legal only if the flow is irrotational. Say so, or the answer is nonsense. *([2.1](lessons/02-01-bernoulli.md))*
- The sum jumps across a fan, pump, or separated wake — energy is added or dissipated, so the steady/inviscid hypotheses have failed. *([2.1](lessons/02-01-bernoulli.md))*
- Neither low pressure nor high speed causes the other. Geometry plus continuity sets the speed; Bernoulli then *reports* the pressure. *([2.1](lessons/02-01-bernoulli.md))*

### Vorticity and circulation

- Circular streamlines do **not** imply spin: the free vortex has perfectly circular streamlines and $\boldsymbol\omega=0$ for $r>0$. *([2.2](lessons/02-02-vorticity-circulation.md), [2.5](lessons/02-05-complex-potential.md))*
- Straight streamlines do **not** imply no spin: simple shear $\mathbf{u}=(\gamma y,0)$ has $\omega_z=-\gamma$. *([2.2](lessons/02-02-vorticity-circulation.md))*
- $\boldsymbol\omega$ is **twice** the local angular velocity. Forget the 2 and every spin rate is off by half. *([2.2](lessons/02-02-vorticity-circulation.md))*
- "Irrotational" is not "zero circulation." On a non-simply-connected domain (a vortex core excluded, a body with bound circulation) $\Gamma\ne0$ while $\boldsymbol\omega=\mathbf 0$ everywhere the flow is defined — and that loophole is precisely what permits lift. *([2.2](lessons/02-02-vorticity-circulation.md), [2.4](lessons/02-04-irrotational-flow-velocity-potential.md), [2.5](lessons/02-05-complex-potential.md))*
- Kelvin's theorem is about **material** loops, not loops fixed in space — $D/Dt$, not $\partial/\partial t$. Around a fixed loop, $\Gamma$ changes as vortical fluid drifts through. *([2.3](lessons/02-03-kelvin-circulation-theorem.md))*
- Conserved circulation does not forbid lift: bound $+\Gamma$ and the shed starting vortex $-\Gamma$ sum to zero over a big enough loop. Nothing is created; it is separated. *([2.3](lessons/02-03-kelvin-circulation-theorem.md))*
- Kelvin needs all three hypotheses. Ocean and atmosphere are **baroclinic** ($\nabla\rho\times\nabla p\ne0$), so they generate circulation freely. *([2.3](lessons/02-03-kelvin-circulation-theorem.md))*

### Potential and complex-potential flow

- $\psi$ exists for *any* incompressible 2-D flow; $\phi$ exists **only** if the flow is irrotational. Laplace for either needs both conditions. *([2.4](lessons/02-04-irrotational-flow-velocity-potential.md))*
- Fluids write $\mathbf u=+\nabla\phi$ — no minus sign, unlike electrostatics. Just be consistent. *([2.4](lessons/02-04-irrotational-flow-velocity-potential.md))*
- $dw/dz=u-iv$, the **conjugate** of the velocity. Forget it and your vortex spins the wrong way. *([2.5](lessons/02-05-complex-potential.md))*
- Source and vortex differ only by a factor $-i$; check which of $\phi$ and $\psi$ carries the angle $\theta$ before deciding which one you have. *([2.5](lessons/02-05-complex-potential.md))*
- Zero drag is not an algebra slip — it is an exact consequence of ideal flow and it is *wrong about reality*, because real flows separate and destroy the fore–aft pressure symmetry. *([2.6](lessons/02-06-flow-past-cylinder-lift.md))*
- $L=\rho U\Gamma$ needs no detail of the body's shape. And check the sign convention: clockwise-positive $\Gamma$ gives $L=+\rho U\Gamma$; many texts flip both. Sanity-check *which side is faster*. *([2.6](lessons/02-06-flow-past-cylinder-lift.md))*

### Reynolds number and scaling

- $Re$ is a property of the **flow**, not of the fluid — and it is ambiguous until you state $U$ and $L$ (pipe $Re$ uses the *diameter*). *([3.1](lessons/03-01-reynolds-number.md))*
- High $Re$ means viscosity is negligible *in the bulk only*. Since $1/Re$ multiplies the highest derivative, setting it to zero is a **singular** perturbation — hence the boundary layer, hence d'Alembert. *([3.1](lessons/03-01-reynolds-number.md), [3.4](lessons/03-04-boundary-layers.md))*
- For a model test you match $Re$, not speed: a half-scale model in the same fluid must run twice as fast. *([3.1](lessons/03-01-reynolds-number.md))*

### Viscous exact solutions and creeping flow

- In Couette and Poiseuille the advective term is *exactly* zero, not approximately — so these are exact solutions at any $Re$, as long as the flow stays laminar and fully developed. *([3.2](lessons/03-02-couette-poiseuille.md))*
- Mean-to-max is $\tfrac12$ for a **pipe** and $\tfrac23$ for **flat plates**. The cross-section geometry changes the average. *([3.2](lessons/03-02-couette-poiseuille.md))*
- Density is absent from these results; only $\mu$ and geometry matter until inertia re-enters. *([3.2](lessons/03-02-couette-poiseuille.md))*
- There is **no coasting** at low $Re$ — stop pushing and you stop within a fraction of an atomic diameter. High-$Re$ intuition is a lie down there. *([3.3](lessons/03-03-stokes-flow.md))*
- Only **non-reciprocal** strokes propel. One hinge can only retrace its path; you need two out-of-phase degrees of freedom. *([3.3](lessons/03-03-stokes-flow.md))*
- $F=6\pi\mu aU$ holds only for $Re\lesssim1$. Compute $U_t$, then check $Re$ — if it comes out large, the answer is wrong and inertial $U^2$ drag applies. *([3.3](lessons/03-03-stokes-flow.md))*

### Boundary layers, separation, and drag

- $\delta\sim\sqrt{\nu x/U}$ grows with **downstream distance**, not with wall-clock time; the diffusion analogy uses the convective clock $t\sim x/U$. *([3.4](lessons/03-04-boundary-layers.md))*
- Thicker layer means *less* stress, not more: $\tau_w\sim\mu U/\delta$, so friction peaks at the leading edge. *([3.4](lessons/03-04-boundary-layers.md))*
- Viscosity's decisive role in bluff-body drag is **indirect** — it builds the slow layer that separates. Form drag from the wake usually dwarfs skin friction. *([3.5](lessons/03-05-separation-drag.md))*
- A turbulent boundary layer is not automatically more drag: on a bluff body it delays separation and shrinks the wake (the drag crisis, dimples). On a streamlined body, where there is no wake to save, it only adds friction. *([3.5](lessons/03-05-separation-drag.md))*
- Separation happens where the pressure gradient is **adverse**, not merely where the wall curves. Accelerating flow over the front of a body never separates. *([3.5](lessons/03-05-separation-drag.md))*

### Waves

- "The speed of water waves" is not a single number — deep water disperses. Only non-dispersive media (sound, shallow water) have one speed. *([4.1](lessons/04-01-surface-waves.md))*
- Phase speed and group speed differ whenever $c$ depends on $k$; for deep-water gravity waves $c_g=\tfrac12c$, so crests appear at the back of a group and vanish at the front. *([4.1](lessons/04-01-surface-waves.md))*
- A tsunami is a **shallow**-water wave ($c=\sqrt{gh}$) despite the ocean being kilometres deep — its wavelength is what dwarfs the depth. *([4.1](lessons/04-01-surface-waves.md))*
- Sound's stiffness is **adiabatic**, $c^2=\gamma p/\rho$. Newton's isothermal $p/\rho$ is wrong by $\sqrt\gamma$ — about $290$ instead of $343$ m/s. *([4.2](lessons/04-02-sound-waves.md))*
- Sound is longitudinal and non-dispersive; surface waves are neither. Do not import one's dispersion relation into the other. *([4.2](lessons/04-02-sound-waves.md))*

### Instability, transition, and turbulence

- A complex $\omega$ is not a mistake — its imaginary part **is** the physics (the growth rate). Never discard it. *([4.3](lessons/04-03-instability-kh-rb.md))*
- The sign that means "growing" depends on the convention: with $e^{-i\omega t}$ growth is $\operatorname{Im}\omega>0$; with $e^{+i\omega t}$ it flips; with a real rate $e^{st}$ it is $\operatorname{Re}s>0$. Check what the author wrote. *([4.3](lessons/04-03-instability-kh-rb.md))*
- Heating from the **top** cannot convect — light fluid is already on top, so $Ra<0$ and buoyancy damps. Gravity's direction relative to the temperature gradient is everything. *([4.3](lessons/04-03-instability-kh-rb.md))*
- $Ra_c\approx1708$ is for rigid plates; free surfaces give $\approx657$. The *number* depends on the boundary conditions, the *existence of a threshold* does not. *([4.3](lessons/04-03-instability-kh-rb.md))*
- Turbulence is deterministic chaos, not randomness: same $Re$ and geometry give the same **statistics** every time; only the detailed trajectory is unpredictable. *([4.4](lessons/04-04-transition-to-turbulence.md))*
- $Re_{\text{crit}}$ is neither sharp nor universal — it depends on geometry and on the disturbance environment (a very quiet pipe stays laminar past $Re\sim10^5$). *([4.4](lessons/04-04-transition-to-turbulence.md))*
- "Linearly stable" does not mean "stays laminar": pipe flow is linearly stable at every $Re$ and still transitions, via finite-amplitude and transient growth. *([4.4](lessons/04-04-transition-to-turbulence.md))*
- Shedding frequency **falls** as the body grows, $f=St\,U/D$ — bridge piers hum low, wires sing high. *([4.4](lessons/04-04-transition-to-turbulence.md))*
- K41 is a scaling hypothesis, not a theorem. Real turbulence is **intermittent**, which steepens the measured exponent to roughly $-1.71$. *([4.5](lessons/04-05-turbulence-kolmogorov.md))*
- Lowering $\nu$ does not lower the dissipation — the cascade just pushes $\eta_K$ smaller until it keeps pace, so $\varepsilon\sim U^3/L$ stays finite. *([4.5](lessons/04-05-turbulence-kolmogorov.md))*
- An "eddy of size $\ell$" is a velocity fluctuation at that scale — a Fourier component, not a little spinning wheel. *([4.5](lessons/04-05-turbulence-kolmogorov.md))*
