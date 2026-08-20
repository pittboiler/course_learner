# Transport Phenomena · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

One sentence organizes the whole course: **flux equals minus a diffusivity times
the gradient of the transported quantity's concentration**, and momentum, heat,
and mass each fill that sentence with different cargo. Everything below hangs off
[the grand analogy](#the-grand-analogy) — the flux laws, their diffusivities and
ratios, the shell-balance recipe that turns a flux law into a differential
equation, the dimensionless groups that fall out when you rescale it, and the
correlations and analogies that let one measurement stand in for another. Two
things are worth checking here every single time: **which reference frame a
diffusion flux is measured in** ([frames table](#diffusion-flux-reference-frames))
and **which column of the analogy you are in**.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\tau_{yx}$ | shear stress *and* flux of $x$-momentum in the $y$-direction — one number, two readings (Pa) | [1.1](lessons/01-01-one-flux-law-three-transports.md) |
| $\boldsymbol\tau$ | momentum-flux (stress) tensor; $\tau_{ij}$ is $j$-momentum flowing in the $i$-direction | [1.2](lessons/01-02-momentum-transport-newton-viscosity.md) |
| $\mu$, $\nu$ | dynamic viscosity (Pa·s) and its diffusivity form $\nu=\mu/\rho$ (m²/s) — "thick" vs "spreads momentum fast" | [1.2](lessons/01-02-momentum-transport-newton-viscosity.md) |
| $q_y''$, $k$, $\alpha$ | heat flux (W/m²), thermal conductivity (W m⁻¹K⁻¹), thermal diffusivity $\alpha=k/\rho c_p$ (m²/s) | [1.1](lessons/01-01-one-flux-law-three-transports.md) |
| $c$, $c_A$, $x_A$, $\omega_A$ | total molar concentration, $A$'s molar concentration, mole fraction, mass fraction | [1.3](lessons/01-03-heat-mass-fluxes-fourier-fick.md) |
| $D_{AB}$ | binary diffusivity of $A$ through $B$ (m²/s) | [1.1](lessons/01-01-one-flux-law-three-transports.md) |
| $J_A^{*}$, $j_A$ | diffusion flux of $A$ — molar (relative to $\mathbf v^{*}$) and mass (relative to $\mathbf v$) basis | [1.3](lessons/01-03-heat-mass-fluxes-fourier-fick.md) |
| $N_A$ | **absolute** molar flux of $A$ across fixed axes — diffusion **plus** bulk ride (mol m⁻²s⁻¹) | [2.6](lessons/02-06-species-continuity-equation.md) |
| $\mathbf v$, $\mathbf v^{*}$ | mass-average and molar-average mixture velocity — the two "bulk drifts" | [4.1](lessons/04-01-diffusion-binary-mixtures-fluxes-frames.md) |
| $\bar c$, $\lambda$ | molecular mean speed (m/s) and mean free path (m) — kinetic theory only | [1.4](lessons/01-04-transport-properties-kinetic-theory.md) |
| $D/Dt$ | substantial derivative $\partial_t + \mathbf v\!\cdot\!\nabla$ — rate of change *following a fluid particle* | [2.3](lessons/02-03-equation-of-continuity.md) |
| $\Phi_v$ | viscous-dissipation function (s⁻²); $\mu\Phi_v$ is frictional heating per volume (W/m³) | [2.5](lessons/02-05-energy-equation-of-change.md) |
| $\dot q$, $R_A$ | volumetric heat generation (W/m³) and volumetric reaction rate of $A$ (mol m⁻³s⁻¹, **production-positive**) | [2.5](lessons/02-05-energy-equation-of-change.md), [2.6](lessons/02-06-species-continuity-equation.md) |
| $\delta$, $\delta_T$, $\delta_c$ | momentum, thermal, and concentration boundary-layer thicknesses (m) | [3.2](lessons/03-02-momentum-boundary-layer.md), [3.3](lessons/03-03-thermal-concentration-boundary-layers.md) |
| $C_f$, $\tau_w$ | skin-friction coefficient and wall shear stress, $\tau_w = C_f\cdot\tfrac12\rho V^2$ | [3.2](lessons/03-02-momentum-boundary-layer.md) |
| $h$, $k_c$ | heat-transfer coefficient (W m⁻²K⁻¹) and mass-transfer coefficient (m/s) | [3.4](lessons/03-04-forced-convection-transport-coefficients.md) |
| $\beta$, $\beta_c$ | thermal and solutal expansion coefficients — fractional density change per unit driver | [3.5](lessons/03-05-free-natural-convection.md) |
| $x_{B,\mathrm{lm}}$ | log-mean mole fraction of the stagnant species across a film — the Stefan drift factor's denominator | [4.2](lessons/04-02-diffusion-stagnant-film-stefan.md) |
| $D_e$, $\phi$, $\eta$ | effective pore diffusivity, Thiele modulus, effectiveness factor | [4.3](lessons/04-03-diffusion-with-reaction-thiele.md) |
| $t_c$, $s$ | surface contact time (s) and surface-renewal rate (s⁻¹) in the $k_c$ models | [4.5](lessons/04-05-mass-transfer-coefficients-correlations.md) |
| $j_H$, $j_D$ | Chilton–Colburn $j$-factors for heat and mass — both equal $C_f/2$ | [5.1](lessons/05-01-transport-analogies.md) |
| $k_G$, $k_L$, $K_G$, $K_L$, $H$ | gas-film, liquid-film, and overall coefficients; $H$ = Henry constant | [5.2](lessons/05-02-two-film-theory-interphase.md) |
| $T_w$ | wet-bulb temperature — the steady temperature of an evaporating surface (K) | [5.3](lessons/05-03-simultaneous-heat-mass-transfer.md) |
| $\nu_t,\ \alpha_t,\ D_t$ | eddy diffusivities — properties of the **flow**, not the fluid (m²/s) | [5.4](lessons/05-04-turbulent-transport.md) |
| $u_{*}$, $y^{+}$, $u^{+}$ | friction velocity $\sqrt{\tau_w/\rho}$, and wall-unit distance and velocity | [5.4](lessons/05-04-turbulent-transport.md) |

### Symbol collisions to watch

Three symbols do double duty in this course; the context always disambiguates,
but the card flags them once so a mid-problem glance can't go wrong.

| Symbol | Meaning A | Meaning B |
|---|---|---|
| $\lambda$ | mean free path, [1.4](lessons/01-04-transport-properties-kinetic-theory.md) | latent heat of vaporization (J/kg or J/mol), [5.3](lessons/05-03-simultaneous-heat-mass-transfer.md); also the annulus peak-velocity radius ratio in [2.2](lessons/02-02-shell-balances-tube-annulus.md) |
| $\kappa$ | inner/outer radius ratio of an annulus, [2.2](lessons/02-02-shell-balances-tube-annulus.md) | von Kármán constant $\approx0.41$, [5.4](lessons/05-04-turbulent-transport.md) |
| $\tau$ | stress / momentum flux, [1.2](lessons/01-02-momentum-transport-newton-viscosity.md) | pore tortuosity in $D_e = D_{AB}\varepsilon/\tau$, [4.3](lessons/04-03-diffusion-with-reaction-thiele.md) |

## Definitions

### Flux law

The single sentence the course is built on: transported stuff leaks *down* its
own gradient, at a rate set by one diffusivity in m²/s.

$$\text{flux} = -(\text{diffusivity})\times\nabla(\text{concentration of the conserved quantity})$$

The minus sign is the second law in work clothes — spreading, never sharpening.

*Introduced:* [1.1](lessons/01-01-one-flux-law-three-transports.md)

### Molecular vs convective transport

Stuff moves two ways: **molecularly**, by random molecular motion down a
gradient (this is what a flux law describes, and it happens in perfectly still
fluid), and **convectively**, by simply riding along with bulk flow at velocity
$v_y$, which carries a concentration $\psi$ as a flux $\psi v_y$ with no gradient
required. Total flux is the sum; forgetting the convective half is the classic
first error in writing an equation of change.

*Introduced:* [1.1](lessons/01-01-one-flux-law-three-transports.md)

### Diffusivity

How fast a disturbance *spreads*, not how much flux a gradient drives. Always
m²/s, which is why $\nu$, $\alpha$, $D_{AB}$ are comparable at all. Its
signature: a disturbance travels a distance $L$ in a time $t \sim L^2/\mathcal D$.

*Introduced:* [1.1](lessons/01-01-one-flux-law-three-transports.md)

### Newtonian fluid

A fluid whose viscosity is a constant, so stress is strictly proportional to
shear rate. Non-Newtonian fluids replace $\mu$ with an apparent viscosity
$\mu(\dot\gamma)$: shear-thinning (paint, blood), shear-thickening (cornstarch),
or Bingham plastics, which do not flow at all below a yield stress. This course
stays Newtonian unless it says otherwise.

*Introduced:* [1.2](lessons/01-02-momentum-transport-newton-viscosity.md)

### Mean free path

The average straight-line distance a molecule flies between collisions —
the "reach" that sets how far it can haul its cargo across a gradient.

$$\lambda = \frac{1}{\sqrt2\,\pi d^2 n}$$

with $d$ the hard-sphere diameter and $n$ the number density. For air at room
conditions, about 70 nm.

*Introduced:* [1.4](lessons/01-04-transport-properties-kinetic-theory.md)

### Shell balance

Draw one thin slab of fluid, tally what enters and leaves plus the forces, set
the ledger to zero at steady state, then shrink the slab so the difference
quotient becomes a derivative. The result is an ODE for the *flux*; feeding in
the flux law turns it into an ODE for the *profile*.

$$(\text{rate in}) - (\text{rate out}) + \sum(\text{forces or sources}) = 0$$

*Introduced:* [2.1](lessons/02-01-shell-momentum-balance-falling-film.md)

### Substantial derivative

The rate of change a *fluid particle* feels, as opposed to a fixed observer: the
local change plus the change you get merely by being swept somewhere different.

$$\frac{D}{Dt} \equiv \frac{\partial}{\partial t} + \mathbf v\!\cdot\!\nabla$$

"Steady" kills only the first term. A particle can heat up, densify, or
accelerate in a perfectly steady field.

*Introduced:* [2.3](lessons/02-03-equation-of-continuity.md)

### Fully developed flow

The profile has stopped changing *along* the flow direction
($\partial v_z/\partial z = 0$). This is what makes the convective terms cancel
in a shell balance — not steadiness, which is the separate statement
$\partial_t = 0$. A flow can be steady and still developing near an inlet.

*Introduced:* [2.1](lessons/02-01-shell-momentum-balance-falling-film.md)

### Viscous dissipation

Friction between sliding fluid layers converting organized kinetic energy
irreversibly into heat. It sits in the energy equation exactly where a
heat-generation term would, because that is what it is.

$$\mu\Phi_v \ge 0, \qquad \Phi_v = \left(\frac{dv_x}{dy}\right)^2 \ \text{for simple shear}$$

$\Phi_v$ is a sum of squares, so friction only ever adds heat.

*Introduced:* [2.5](lessons/02-05-energy-equation-of-change.md)

### Dynamic similarity

Two flows that share geometry and every relevant dimensionless group solve the
*identical* dimensionless problem, so their dimensionless fields are identical.
This is why model testing works — and why a correlation is not an empirical
guess but the only form the answer is allowed to take.

*Introduced:* [3.1](lessons/03-01-nondimensionalizing-equations-of-change.md)

### Boundary layer

The thin wall-hugging region where the velocity (or temperature, or
concentration) does all of its changing. Defined by the *gradient*, not by the
magnitude: at the edge, $v_x = 0.99\,U_\infty$ — the fluid there is moving nearly
full speed. Outside it, viscosity is negligible and inviscid reasoning applies.

*Introduced:* [3.2](lessons/03-02-momentum-boundary-layer.md)

### Separation

Over a curved body the outer flow decelerates on the rear, creating an **adverse
pressure gradient** that pushes back on the already-sluggish near-wall fluid.
When it wins, the near-wall flow reverses, the layer lifts off, and a wide wake
forms — the origin of pressure (form) drag.

*Introduced:* [3.2](lessons/03-02-momentum-boundary-layer.md)

### Transport coefficient

A boundary layer compressed into one number, defined so that flux = coefficient
× driving force. All the physics (speed, geometry, properties) hides inside it.

$$q'' = h\,(T_s - T_\infty), \qquad N_A = k_c\,(c_{A,s} - c_{A,\infty})$$

*Introduced:* [3.4](lessons/03-04-forced-convection-transport-coefficients.md)

### Mass-average and molar-average velocity

The mixture's "bulk drift", measured two different ways — by centre of mass or
by centre of moles. They coincide only when all species share a molar mass.

$$\mathbf v = \sum_i \omega_i \mathbf v_i \quad(\text{mass-average}), \qquad \mathbf v^{*} = \sum_i x_i \mathbf v_i \quad(\text{molar-average})$$

$\mathbf v$ is the velocity of continuity, Navier–Stokes, and the energy
equation. $\mathbf v^{*}$ is the frame the molar Fick law is written in. See
[the frames table](#diffusion-flux-reference-frames) — this is the classic
mass-transfer confusion.

*Introduced:* [4.1](lessons/04-01-diffusion-binary-mixtures-fluxes-frames.md)

### Equimolar counterdiffusion

$N_B = -N_A$, so $N_A + N_B = 0$, the bulk term dies, and the absolute flux
*is* the Fick flux: $N_A = J_A^{*}$. The picture is distillation with equal molar
latent heats — one mole up for every mole down.

*Introduced:* [4.1](lessons/04-01-diffusion-binary-mixtures-fluxes-frames.md)

### Stefan flow

Diffusion through a **stagnant** species $B$ ($N_B = 0$). B still diffuses — it
must, since it is scarce where A is abundant — so a bulk updraft arises to cancel
that diffusion, and the updraft carries extra A along too. "Stagnant" is a
statement about B's *net* flux, not about either piece.

$$N_A = \frac{J_A^{*}}{1-x_A}$$

*Introduced:* [4.1](lessons/04-01-diffusion-binary-mixtures-fluxes-frames.md), [4.2](lessons/04-02-diffusion-stagnant-film-stefan.md)

### Thiele modulus

Two clocks — how long a molecule takes to diffuse across a pellet, versus how
long it survives before reacting. Their ratio.

$$\phi \equiv L\sqrt{\frac{k_1}{D_e}}, \qquad \phi^2 = \frac{L^2/D_e}{1/k_1} = \frac{\text{diffusion time}}{\text{reaction time}}$$

*Introduced:* [4.3](lessons/04-03-diffusion-with-reaction-thiele.md)

### Effectiveness factor

The fraction of a catalyst's potential rate you actually collect — actual
consumption divided by what the pellet would achieve if its whole interior sat at
the surface concentration. A **transport** penalty, not a chemistry one.

$$\eta = \frac{\tanh\phi}{\phi}$$

*Introduced:* [4.3](lessons/04-03-diffusion-with-reaction-thiele.md)

### Penetration depth

How far a transient diffusion front has reached — the drunkard's-walk distance.
Double the depth costs four times the wait.

$$\delta \sim \sqrt{D_{AB}\,t}, \qquad \delta \approx 4\sqrt{D_{AB}\,t}\ \text{(the practical 1\% reach)}$$

*Introduced:* [4.4](lessons/04-04-transient-multidimensional-diffusion.md)

### Two-film theory

All the interphase resistance lives in two thin films, one per phase; the bulk
phases are well mixed and the **interface itself has no resistance**, so the two
interfacial compositions are in equilibrium (Henry's law). Steady state means one
flux through both films — two resistors in series.

*Introduced:* [5.2](lessons/05-02-two-film-theory-interphase.md)

### Controlling resistance

Whichever term dominates the resistance sum *is* the process. Counterintuitively,
a **highly soluble** gas (small $H$) is **gas-film controlled** — its liquid-side
resistance is negligible, so stirring the liquid buys nothing.

*Introduced:* [5.2](lessons/05-02-two-film-theory-interphase.md)

### Wet-bulb temperature

The steady temperature an evaporating surface settles at, where the heat arriving
by convection exactly pays the latent heat of the vapor leaving. It is set by the
air's temperature and humidity — **not** by air speed, because $h$ and $k_c$ rise
and fall together.

*Introduced:* [5.3](lessons/05-03-simultaneous-heat-mass-transfer.md)

### Reynolds decomposition

Split every field into a time-mean plus a fluctuation, $v_x = \bar v_x + v_x'$,
and average the equations of change. Fluctuations vanish alone
($\overline{v_x'}=0$) but *products* of them survive — and those surviving
correlations are the turbulent fluxes.

*Introduced:* [5.4](lessons/05-04-turbulent-transport.md)

### Reynolds stress

The turbulent momentum flux $-\rho\,\overline{v_x' v_y'}$ (Pa): correlated gusts
acting on the mean flow exactly like an extra shear stress, produced by no
molecular property at all.

*Introduced:* [5.4](lessons/05-04-turbulent-transport.md)

### Eddy diffusivity

Model the turbulent fluxes as gradient transport of the *mean* field, with
$\nu_t,\alpha_t,D_t$ (m²/s) added alongside the molecular diffusivities. Unlike
$\nu,\alpha,D_{AB}$ these are properties **of the flow**: zero at the wall, large
in the core, growing with $Re$, untabulatable.

*Introduced:* [5.4](lessons/05-04-turbulent-transport.md)

### Closure problem

Averaging creates new unknowns ($\overline{v_x'v_y'}$ and kin) but no new
equations, so the averaged equations are not closed. Every practical turbulence
result rests on an empirical model — mixing length, k–ε — not a derivation.

*Introduced:* [5.4](lessons/05-04-turbulent-transport.md)

## Formulas and rules

### The grand analogy

The spine of the course. Read every problem by first asking *which column am I
in?*

| | **Momentum** | **Heat** | **Mass** |
|---|---|---|---|
| Conserved "stuff" | $x$-momentum | thermal energy | moles of $A$ |
| Concentration per volume | $\rho v_x$ (kg m⁻²s⁻¹) | $\rho c_p T$ (J/m³) | $c_A$ (mol/m³) |
| Flux | $\tau_{yx}$ (Pa) | $q_y''$ (W/m²) | $J_A^{*}$ (mol m⁻²s⁻¹) |
| **Flux law** | Newton $\tau_{yx}=-\mu\,\dfrac{dv_x}{dy}$ | Fourier $q_y''=-k\,\dfrac{dT}{dy}$ | Fick $J_A^{*}=-cD_{AB}\,\dfrac{dx_A}{dy}$ |
| In diffusivity form | $-\nu\,\dfrac{d(\rho v_x)}{dy}$ | $-\alpha\,\dfrac{d(\rho c_p T)}{dy}$ | $-D_{AB}\,\dfrac{dc_A}{dy}$ |
| **Diffusivity** (m²/s) | $\nu=\mu/\rho$ | $\alpha=k/\rho c_p$ | $D_{AB}$ |
| **Property group** | — (reference) | $Pr=\nu/\alpha$ | $Sc=\nu/D_{AB}$ |
| **Boundary layer** | $\delta/x \sim Re_x^{-1/2}$ | $\delta/\delta_T\approx Pr^{1/3}$ | $\delta/\delta_c\approx Sc^{1/3}$ |
| Transfer coefficient | $C_f$, $\tau_w$ | $h$ | $k_c$ |
| Dimensionless coefficient | $C_f/2$ | $Nu=hL/k$ | $Sh=k_cL/D_{AB}$ |
| Correlation form | $C_f=f(Re)$ | $Nu=f(Re,Pr)$ | $Sh=f(Re,Sc)$ |
| Equation of change | Navier–Stokes | energy equation | species continuity |
| Turbulent version | $\nu_t$ | $\alpha_t$ | $D_t$ |

Two cross-links close the triangle: $Le = \alpha/D_{AB} = Sc/Pr$ compares heat to
mass directly ($\delta_T/\delta_c \approx Le^{1/3}$), and the analogies of
[5.1](lessons/05-01-transport-analogies.md) tie all three coefficients together.

*From* [1.1](lessons/01-01-one-flux-law-three-transports.md), [1.3](lessons/01-03-heat-mass-fluxes-fourier-fick.md), [3.3](lessons/03-03-thermal-concentration-boundary-layers.md)

### Transport properties from kinetic theory

Every coefficient is "cargo density × mean speed × mean free path, over three":

$$\mu \approx \tfrac13\rho\,\bar c\,\lambda, \qquad k \approx \tfrac13\rho c_v\,\bar c\,\lambda, \qquad D_{AA} \approx \tfrac13\,\bar c\,\lambda, \qquad \bar c = \sqrt{\frac{8k_BT}{\pi m}}$$

The $\tfrac13$ is crude; **Chapman–Enskog** replaces it with exact prefactors
(0.49 for $\mu$) plus a collision integral that softens $\sqrt T$ to about
$T^{0.7}$. Trust these for magnitudes and *scalings*, never third digits.

| Quantity | Gas scaling | Why | Liquids |
|---|---|---|---|
| $\mu$ | $\propto\sqrt T$, **independent of $P$** | the $P$ in $\rho$ cancels the $1/P$ in $\lambda$ | $\mu\propto e^{E_a/RT}$ — hotter is *runnier* |
| $k$ | $\propto\sqrt T$, independent of $P$ | same cancellation, $c_v$ roughly constant | — |
| $D_{AB}$ | $\propto T^{3/2}/P$ | no $\rho$ to cancel the $\lambda$ | Stokes–Einstein, $D\propto T/\mu$ |

Crude ratios from the same estimates: $Pr = c_p/c_v = \gamma$ (so $\approx1.67$
monatomic; real gases $\approx0.7$) and $Sc = 1$ (real gases 0.6–2). Both order
unity, which is the point.

*From* [1.4](lessons/01-04-transport-properties-kinetic-theory.md)

### The three property ratios

Pure fluid properties — no velocity, no length scale, unlike $Re$.

| Ratio | Definition | Compares | Sets | Typical |
|---|---|---|---|---|
| $Pr$ | $\nu/\alpha = c_p\mu/k$ | momentum vs heat | $\delta/\delta_T\approx Pr^{1/3}$ | air 0.71; water $\approx7$; oils $\gg1$; liquid metals $\ll1$ (Hg $\approx0.02$) |
| $Sc$ | $\nu/D_{AB}$ | momentum vs mass | $\delta/\delta_c\approx Sc^{1/3}$ | air–water-vapor 0.60; liquid solutes $10^2$–$10^3$ |
| $Le$ | $\alpha/D_{AB} = Sc/Pr$ | heat vs mass | $\delta_T/\delta_c\approx Le^{1/3}$ | air–water 0.85; liquids $\sim10^2$–$10^3$ |

For a **gas** one population of molecules with one $\bar c$ and one $\lambda$
carries all three, so $\nu\approx\alpha\approx D_{AB}$ and all three ratios sit
near 1 — the three boundary layers nearly coincide. In a **liquid** the
mechanisms split ($\nu\gg\alpha\gg D$) and the layers peel apart.

*From* [1.5](lessons/01-05-three-diffusivities-pr-sc-le.md)

### The shell-balance recipe

For steady, laminar, fully developed, incompressible, one-directional flow:

1. **Choose the shell** — thin in the coordinate the velocity varies across.
2. **Balance:** (rate in) − (rate out) + Σ(forces) = 0. Convective terms at inlet and outlet cancel *because* the flow is fully developed.
3. **Divide by the shell volume, let the thickness → 0:** you get a first-order ODE for the flux, $d\tau/dy = $ (driving force per volume).
4. **Insert the flux law** ($\tau = -\mu\,dv/dy$) — now a second-order ODE for the profile.
5. **Apply two boundary conditions** and integrate twice.

The boundary-condition menu:

| Situation | Condition |
|---|---|
| solid wall | **no-slip**, $v = 0$ (or $v = V$ for a moving wall) |
| free liquid–gas surface | **zero shear**, $\tau = 0$, i.e. $dv/dy = 0$ |
| centreline of a symmetric channel | **symmetry**, $dv/dr = 0$ |
| liquid–liquid interface | continuity of both $v$ and $\tau$ |
| tube axis ($r=0$ in the fluid) | flux stays **finite**, killing the $C_1/r$ term |

The identical bookkeeping with $q'' = -k\,dT/dy$ gives the heat equation and with
$J_A^{*} = -cD_{AB}\,dx_A/dy$ the species equation. One recipe, three transports.

*From* [2.1](lessons/02-01-shell-momentum-balance-falling-film.md), [2.2](lessons/02-02-shell-balances-tube-annulus.md)

### Solved laminar flows

| Flow | Flux equation | Profile | Headline numbers |
|---|---|---|---|
| Falling film, thickness $\delta$, plate at angle $\beta$ from vertical ($y$ from the free surface) | $\dfrac{d\tau_{yz}}{dy} = \rho g\cos\beta$ | $v_z = \dfrac{\rho g\cos\beta\,\delta^2}{2\mu}\Big[1-\big(\tfrac{y}{\delta}\big)^2\Big]$ | $\langle v\rangle = \tfrac23 v_{\max}$, $\ \dfrac{Q}{W} = \dfrac{\rho g\cos\beta\,\delta^3}{3\mu}$ |
| Tube, radius $R$, drop $\Delta P$ over $L$ | $\dfrac1r\dfrac{d}{dr}(r\tau_{rz}) = \dfrac{\Delta P}{L}$ | $v_z = \dfrac{\Delta P R^2}{4\mu L}\Big[1-\big(\tfrac rR\big)^2\Big]$ | $\tau_w = \dfrac{\Delta P R}{2L}$, $\ Q = \dfrac{\pi\Delta P R^4}{8\mu L}$, $\ \langle v\rangle = \tfrac12 v_{\max}$ |
| Annulus, $\kappa R < r < R$ | same, but $C_1\neq0$ | $v_z = \dfrac{\Delta P R^2}{4\mu L}\Big[1-\big(\tfrac rR\big)^2 + 2\lambda^2\ln\tfrac rR\Big]$ | peak at $r=\lambda R$, $\ \lambda^2 = \dfrac{1-\kappa^2}{2\ln(1/\kappa)}$ |
| Planar Couette, gap $b$, top plate at $V$, no $dp/dx$ | $\dfrac{d^2v_x}{dy^2} = 0$ | $v_x = Vy/b$ | $\tau_{yx} = -\mu V/b$, uniform |

The $R^4$ is the most unforgiving exponent in plumbing: halving the radius cuts
the flow sixteenfold, and widening a pipe 19% doubles it.

Couette with viscous heating (from the energy equation) gives, with $\xi = y/b$:

$$\frac{T-T_0}{T_b-T_0} = \xi + \frac{Br}{2}\,\xi(1-\xi), \qquad Br \equiv \frac{\mu V^2}{k(T_b-T_0)}$$

— a conduction line plus a dissipation bump. The interior overshoots the hotter
plate when $Br > 2$; with equal plate temperatures the centre rise is
$\mu V^2/(8k)$.

*From* [2.1](lessons/02-01-shell-momentum-balance-falling-film.md), [2.2](lessons/02-02-shell-balances-tube-annulus.md), [2.4](lessons/02-04-equation-of-motion-navier-stokes.md), [2.5](lessons/02-05-energy-equation-of-change.md)

### The four equations of change

One control-volume sentence, four times: **accumulation + convection = diffusion
+ source.**

| Equation | Statement | Diffusivity | Source |
|---|---|---|---|
| Continuity | $\dfrac{\partial\rho}{\partial t}+\nabla\!\cdot(\rho\mathbf v)=0$; equivalently $\dfrac{D\rho}{Dt} = -\rho\,\nabla\!\cdot\mathbf v$; incompressible $\nabla\!\cdot\mathbf v = 0$ | — | none |
| Motion (general) | $\rho\dfrac{D\mathbf v}{Dt} = -\nabla p + \nabla\!\cdot\boldsymbol\tau + \rho\mathbf g$ | $\nu=\mu/\rho$ | $\rho\mathbf g$ |
| Motion (Newtonian, constant $\rho,\mu$) | $\rho\dfrac{D\mathbf v}{Dt} = -\nabla p + \mu\nabla^2\mathbf v + \rho\mathbf g$ | | |
| Energy | $\rho c_p\dfrac{DT}{Dt} = k\nabla^2 T + \mu\Phi_v + \dot q$ | $\alpha=k/\rho c_p$ | $\mu\Phi_v + \dot q$ |
| Species | $\dfrac{\partial c_A}{\partial t}+\nabla\!\cdot(c_A\mathbf v) = D_{AB}\nabla^2 c_A + R_A$ | $D_{AB}$ | $R_A$ |

The Newtonian closure is $\boldsymbol\tau = \mu[\nabla\mathbf v + (\nabla\mathbf v)^{\mathsf T}]$;
its divergence collapses to $\mu\nabla^2\mathbf v$ once $\nabla\!\cdot\mathbf v = 0$.
Turn the flow off ($\mathbf v = 0$, $\Phi_v = 0$) and the energy equation *is*
the heat equation; the species equation becomes Fick's second law,
$\partial_t c_A = D_{AB}\nabla^2 c_A$.

**Reducing an equation to a problem** is a derivation, not a memory exercise:
steady kills $\partial_t$; fully developed kills the streamwise derivative and
with it convection; symmetry kills the angular and transverse Laplacian pieces;
a horizontal flow kills the gravity component. The surviving line is your shell
balance.

**Species boundary conditions** (mass twins of the thermal ones): fixed
concentration $c_A = c_{A,s}$ (Dirichlet — e.g. Henry's-law equilibrium at an
interface); fixed or zero flux $\partial c_A/\partial n = 0$ (Neumann — sealed or
symmetry wall); surface reaction (Robin),
$-D_{AB}\,\partial c_A/\partial n|_s = k_s'' c_{A,s}$, with a very fast surface
reaction driving $c_{A,s} \to 0$.

*From* [2.3](lessons/02-03-equation-of-continuity.md), [2.4](lessons/02-04-equation-of-motion-navier-stokes.md), [2.5](lessons/02-05-energy-equation-of-change.md), [2.6](lessons/02-06-species-continuity-equation.md)

### Dimensionless groups

Every group is a term's importance, read straight off the rescaled equation.
Scaling: $x^{*}=x/L$, $\mathbf v^{*}=\mathbf v/V$, $t^{*}=tV/L$,
$p^{*}=(p-p_0)/\rho V^2$ (use the viscous scale $\mu V/L$ instead when $Re\ll1$).

| Group | Definition | Appears as | Measures |
|---|---|---|---|
| $Re$ | $\rho VL/\mu = VL/\nu$ | coefficient $1/Re$ on the viscous term | inertia ÷ viscous |
| $Pe$ | $VL/\alpha = Re\,Pr$ | $1/Pe$ on conduction | convection ÷ conduction |
| $Pe_m$ | $VL/D_{AB} = Re\,Sc$ | $1/Pe_m$ on diffusion | convection ÷ diffusion |
| $Fr$ | $V/\sqrt{gL}$ | $1/Fr^2$ on gravity | inertia ÷ gravity (free surfaces) |
| $Gr$ | $g\beta\,\Delta T\,L^3/\nu^2$ | $Gr/Re^2$ on buoyancy | buoyancy ÷ viscous |
| $Ra$ | $Gr\,Pr = g\beta\Delta T L^3/(\nu\alpha)$ | the single free-convection dial | buoyancy driving heat transport |
| $Br$ | $\mu V^2/(k\,\Delta T)$ | $Br/Pe$ on dissipation | viscous heating ÷ conduction |
| $Nu$ | $hL/k$ | output | convection ÷ pure conduction through the **fluid** |
| $Sh$ | $k_cL/D_{AB}$ | output | convection ÷ pure diffusion |
| $St$ | $h/(\rho c_p V) = Nu/(Re\,Pr)$ | output | heat delivered ÷ heat the stream could carry |
| $St_m$ | $k_c/V = Sh/(Re\,Sc)$ | output | mass-transfer velocity as a fraction of bulk velocity |
| $Fo$, $Fo_m$ | $\alpha t/L^2$, $D_{AB}t/L^2$ | dimensionless time | how far a transient front has got |
| $Bi$, $Bi_m$ | $hL/k$, $k_cL/D_{AB}$ | boundary condition | surface ÷ internal resistance |
| $\phi$ | $L\sqrt{k_1/D_e}$ | pellet | reaction ÷ diffusion |

$Bi$ and $Nu$ look identical but are not: $Nu$ uses the **fluid's** $k$, $Bi$ the
**solid's**.

*From* [3.1](lessons/03-01-nondimensionalizing-equations-of-change.md), [4.3](lessons/04-03-diffusion-with-reaction-thiele.md), [4.4](lessons/04-04-transient-multidimensional-diffusion.md), [5.1](lessons/05-01-transport-analogies.md)

### Flat-plate laminar boundary layer

Valid for $Re_x = U_\infty x/\nu \lesssim 5\times10^5$ and $Pr,Sc \gtrsim 0.6$.

$$\delta = \frac{5x}{\sqrt{Re_x}}, \qquad C_{f,x} = \frac{\tau_w}{\tfrac12\rho U_\infty^2} = 0.664\,Re_x^{-1/2}, \qquad \overline{C_f} = 1.328\,Re_L^{-1/2}$$

$$Nu_x = 0.332\,Re_x^{1/2}Pr^{1/3}, \qquad \overline{Nu}_L = 0.664\,Re_L^{1/2}Pr^{1/3}$$

$$Sh_x = 0.332\,Re_x^{1/2}Sc^{1/3}, \qquad \overline{Sh}_L = 0.664\,Re_L^{1/2}Sc^{1/3}$$

Each average is exactly twice the trailing-edge local value, because the local
coefficient falls as $x^{-1/2}$. Dividing the two gives the master analogy
result, with the $Re$-dependence cancelling exactly:

$$\frac{Nu}{Sh} = \left(\frac{Pr}{Sc}\right)^{1/3} = Le^{-1/3}$$

The scaling itself needs no Blasius: balancing inertia $\rho U_\infty^2/L$
against wall-normal friction $\mu U_\infty/\delta^2$ gives
$\delta \sim \sqrt{\nu L/U_\infty}$, i.e. $\delta/L \sim Re_L^{-1/2}$.

*From* [3.2](lessons/03-02-momentum-boundary-layer.md), [3.3](lessons/03-03-thermal-concentration-boundary-layers.md)

### Forced-convection correlations (and their mass twins)

Same $Re$ skeleton, same constant — only the property root switches, because heat
and mass ride the same velocity field.

| Geometry | Heat | Mass twin |
|---|---|---|
| Flat plate, laminar, average | $\overline{Nu}_L = 0.664\,Re_L^{1/2}Pr^{1/3}$ | $\overline{Sh}_L = 0.664\,Re_L^{1/2}Sc^{1/3}$ |
| Sphere (Ranz–Marshall) | $Nu = 2 + 0.6\,Re^{1/2}Pr^{1/3}$ | $Sh = 2 + 0.6\,Re^{1/2}Sc^{1/3}$ |
| Tube, turbulent (Dittus–Boelter) | $Nu = 0.023\,Re^{0.8}Pr^{0.4}$ | $Sh = 0.023\,Re^{0.8}Sc^{1/3}$ |

The "2" on a sphere is the stagnant-fluid conduction/diffusion floor. Note the
exponent does **not** always transfer — flat plate is $1/3$ for both, but
Dittus–Boelter is $Pr^{0.4}$ and $Sc^{1/3}$. Read the exponent off the specific
correlation.

**Internal flow** uses a bulk (mixing-cup) driving force that drifts along the
duct, so the correct average is the log-mean, not the arithmetic mean:

$$\Delta T_{\mathrm{lm}} = \frac{\Delta T_{\mathrm{in}} - \Delta T_{\mathrm{out}}}{\ln(\Delta T_{\mathrm{in}}/\Delta T_{\mathrm{out}})} \qquad (\text{same formula for } \Delta c_{\mathrm{lm}})$$

**Entry length.** Fully developed forms assume the profile has finished forming.
Laminar hydrodynamic entry length $x_{fd}\approx 0.05\,Re_D D$; inside it the
layer is thinner and the coefficient *higher*, so short tubes and leading edges
run hot.

*From* [3.4](lessons/03-04-forced-convection-transport-coefficients.md), [4.5](lessons/04-05-mass-transfer-coefficients-correlations.md)

### Free convection

With no imposed velocity, $Gr$ takes $Re$'s slot. For an ideal gas
$\beta = 1/T_f$ with the **film temperature** $T_f = (T_s+T_\infty)/2$, at which
all properties are read; for liquids and for the solutal case look $\beta$ up (or
work from $\Delta\rho/\rho$).

| Ingredient | Thermal | Solutal (mass) |
|---|---|---|
| Driver | $T_s - T_\infty$ | $c_{A,s} - c_{A,\infty}$ |
| Expansion coefficient | $\beta = -\tfrac1\rho(\partial\rho/\partial T)_p$ | $\beta_c = -\tfrac1\rho(\partial\rho/\partial c_A)_{p,T}$ |
| Buoyancy group | $Gr = g\beta\Delta T L^3/\nu^2$ | $Gr_m = g\beta_c\Delta c_A L^3/\nu^2$ |
| Combined dial | $Ra = Gr\,Pr$ | $Ra_m = Gr_m\,Sc$ |
| Laminar vertical plate ($10^4\!-\!10^9$) | $\overline{Nu} = 0.59\,Ra^{1/4}$ | $\overline{Sh} = 0.59\,Ra_m^{1/4}$ |

Past $Ra \sim 10^9$ the plume goes turbulent. **Mixed convection** is refereed by
$Gr/Re^2$: much less than 1 forced wins, much greater than 1 free wins, near 1
keep both ($\overline{Nu}^n \approx \overline{Nu}_{\text{forced}}^n \pm \overline{Nu}_{\text{free}}^n$,
plus if buoyancy aids the flow). The free-convection velocity profile is **zero
at the wall and zero far away**, with an interior peak — never a plateau.

*From* [3.5](lessons/03-05-free-natural-convection.md)

### Diffusion flux reference frames

The classic mass-transfer confusion, in one table. "Which velocity is this flux
measured relative to?" has to be answered before any algebra.

| Flux | Relative to | Definition | Constitutive law |
|---|---|---|---|
| $N_A$ (absolute molar) | fixed lab axes | $c_A\mathbf v_A$ | $N_A = x_A(N_A+N_B) + J_A^{*}$ |
| $J_A^{*}$ (molar diffusion) | molar-average $\mathbf v^{*}$ | $c_A(\mathbf v_A - \mathbf v^{*})$ | $J_A^{*} = -c\,D_{AB}\nabla x_A$ |
| $j_A$ (mass diffusion) | mass-average $\mathbf v$ | $\rho_A(\mathbf v_A - \mathbf v)$ | $j_A = -\rho\,D_{AB}\nabla\omega_A$ |

Facts that keep the bookkeeping honest:

- $J_A^{*} + J_B^{*} = 0$ — every mole diffusing forward relative to the centre of moles is matched by one going back.
- For a binary mixture, $c\,\mathbf v^{*} = N_A + N_B$, which is what turns the bulk term into $x_A(N_A+N_B)$.
- The **mass-average** $\mathbf v$ is the velocity of continuity, Navier–Stokes, the energy equation, and the species equation's convection term $\nabla\!\cdot(c_A\mathbf v)$. The **molar-average** $\mathbf v^{*}$ is the frame of $J_A^{*}$. They agree only when the molar masses match.
- $J_A^{*} = 0$ does **not** mean A is still (uniform $x_A$ still convects), and $N_B = 0$ does **not** mean B isn't diffusing (Stefan flow).

The two limits differ only in what $N_A + N_B$ does:

| Case | $N_A + N_B$ | Result |
|---|---|---|
| Equimolar counterdiffusion | $0$ | bulk term dies: $N_A = J_A^{*} = -cD_{AB}\,dx_A/dz$ |
| Diffusion through stagnant B | $N_A$ | bulk term survives: $N_A = J_A^{*}/(1-x_A)$ |

*From* [4.1](lessons/04-01-diffusion-binary-mixtures-fluxes-frames.md)

### Steady diffusion through a stagnant film (Stefan)

$$N_A = -\frac{c\,D_{AB}}{1-x_A}\frac{dx_A}{dz} \ \ \Longrightarrow\ \ N_A = \frac{c\,D_{AB}}{\delta}\ln\frac{x_{B2}}{x_{B1}} = \frac{c\,D_{AB}}{\delta}\cdot\frac{x_{A1}-x_{A2}}{x_{B,\mathrm{lm}}}$$

$$x_{B,\mathrm{lm}} \equiv \frac{x_{B2}-x_{B1}}{\ln(x_{B2}/x_{B1})} < 1, \qquad x_B(z) = x_{B1}\left(\frac{x_{B2}}{x_{B1}}\right)^{z/\delta}$$

Dividing by $x_{B,\mathrm{lm}}$ *raises* the flux above plain Fick — that is the
drift correction. The profile is **logarithmic, not linear**: $N_A$ is constant
but $dx_A/dz$ is not. Dilute limit: $x_{B,\mathrm{lm}} \to 1$ and the correction
is about $\tfrac12 x_{A1}$, so plain Fick is essentially exact.

*From* [4.2](lessons/04-02-diffusion-stagnant-film-stefan.md)

### Diffusion with reaction in a slab

Symmetric slab of half-thickness $L$, first-order consumption $R_A = -k_1c_A$,
effective pore diffusivity $D_e = D_{AB}\,\varepsilon/\tau$ (porosity over
tortuosity — typically 5–20× below $D_{AB}$).

$$D_e\frac{d^2c_A}{dx^2} = k_1 c_A, \qquad c_A(x) = c_{A,s}\,\frac{\cosh(\phi\,x/L)}{\cosh\phi}, \qquad \eta = \frac{\tanh\phi}{\phi}$$

with symmetry $c_A'(0)=0$ at the centre and $c_A(\pm L) = c_{A,s}$ at the faces.

| Regime | Condition | $\eta$ | Picture |
|---|---|---|---|
| Reaction-limited | $\phi \ll 1$ | $\eta \to 1 - \phi^2/3 \to 1$ | whole pellet active |
| Diffusion-limited | $\phi \gg 1$ | $\eta \to 1/\phi$ | reactant eaten in a surface skin; core is dead weight |

Once diffusion-limited, total rate $\propto L\eta$ stops rising with $L$ — extra
material buys nothing. Structurally identical to a cooling fin's efficiency
$\tanh(mL)/mL$.

*From* [4.3](lessons/04-03-diffusion-with-reaction-thiele.md)

### Transient diffusion — the heat-transfer dictionary

Don't re-derive anything: cross out $\alpha$, write $D_{AB}$; cross out $T$,
write $c_A$.

| Transient conduction | Transient diffusion |
|---|---|
| $T$, $\alpha = k/\rho c_p$ | $c_A$, $D_{AB}$ |
| $Fo = \alpha t/L^2$ | $Fo_m = D_{AB}t/L^2$ |
| $Bi = hL/k$ | $Bi_m = k_cL/D_{AB}$ |
| $\operatorname{erfc}\!\big(x/2\sqrt{\alpha t}\big)$ | $\operatorname{erfc}\!\big(x/2\sqrt{D_{AB}t}\big)$ |
| $\delta \sim \sqrt{\alpha t}$ | $\delta \sim \sqrt{D_{AB}t}$ |
| Heisler / one-term $\zeta_1, C_1(Bi)$ | same charts, $Bi \to Bi_m$ |

**Semi-infinite medium, surface clamped at $c_{A,s}$:**

$$\frac{c_A(x,t)-c_{A0}}{c_{A,s}-c_{A0}} = \operatorname{erfc}\!\left(\frac{x}{2\sqrt{D_{AB}t}}\right)$$

**Finite body, one-term ($Fo_m > 0.2$):** with
$\theta^{*} = (c_{A,s}-c_A)/(c_{A,s}-c_{A0})$, the centre value is
$\theta_0^{*} = C_1 e^{-\zeta_1^2 Fo_m}$.

| $Bi_m$ | 0.5 | 1.0 | 5.0 | $\infty$ |
|---|---|---|---|---|
| $\zeta_1$ (rad) | 0.6533 | 0.8603 | 1.3138 | 1.5708 |
| $C_1$ | 1.0701 | 1.1191 | 1.2402 | 1.2732 |

The $Bi_m \to \infty$ row is the common mass case: an interface pinned at
equilibrium, no surface resistance.

**Multidimensional:** a body that is the intersection of 1-D shapes has
$\theta^{*}$ equal to the **product** of the 1-D answers.

Reference $\operatorname{erfc}$ values:

| $z$ | 0.30 | 0.35 | 0.40 | 0.45 | 0.50 | 0.55 | 0.60 |
|---|---|---|---|---|---|---|---|
| $\operatorname{erfc}(z)$ | 0.6714 | 0.6206 | 0.5716 | 0.5245 | 0.4795 | 0.4367 | 0.3961 |

Because $D_{AB}\ll\alpha$, a mass front lags a thermal front by $\sqrt{Le}$ in
depth and by $Le$ in time — the same slab can equilibrate thermally in seconds
and chemically in hours.

*From* [4.4](lessons/04-04-transient-multidimensional-diffusion.md)

### Where $k_c$ comes from — the three interface models

All three give $N_A = k_c\Delta c$ and comparable magnitudes; they differ in the
**exponent on $D_{AB}$**, which is the experimental fingerprint.

| Model | $k_c$ | $D$-scaling | Picture |
|---|---|---|---|
| Film (Whitman) | $k_c = D_{AB}/\delta$ | $D^{1}$ | a frozen stagnant layer of fixed thickness |
| Penetration (Higbie) | $k_c = 2\sqrt{D_{AB}/(\pi t_c)}$ | $D^{1/2}$ | a blob sits at the surface for $t_c$, diffuses unsteadily, dives back |
| Surface renewal (Danckwerts) | $k_c = \sqrt{D_{AB}\,s}$ | $D^{1/2}$ | blobs randomly swapped at rate $s$, exponential age distribution |

Turbulent-liquid data follow $D^{0.5}$–$D^{0.7}$: the interface is renewed, not
stagnant, and the "film thickness" $\delta = D_{AB}/k_c$ is a back-calculated
fiction. For a **concentrated** species diffusing through stagnant B, correct the
dilute coefficient: $k_c = k_c^{\circ}/x_{B,\mathrm{lm}}$.

*From* [4.5](lessons/04-05-mass-transfer-coefficients-correlations.md)

### The transport analogies

$$\text{Reynolds } (Pr = Sc = 1): \quad St = St_m = \frac{C_f}{2}$$

$$\text{Chilton–Colburn (real } Pr, Sc): \quad j_H \equiv St\,Pr^{2/3} = j_D \equiv St_m\,Sc^{2/3} = \frac{C_f}{2}$$

The $2/3$ powers are exactly what cancel the $Pr^{1/3}$, $Sc^{1/3}$
boundary-layer stretches, so for the laminar flat plate the identity is *exact*,
not a fit. Roughly valid for $0.6 \lesssim Pr,Sc \lesssim 60$.

**The consequence you reuse everywhere** — the $C_f/2$ cancels, leaving a pure
property group with no velocity in it:

$$\frac{h}{k_c} = \rho c_p\left(\frac{Sc}{Pr}\right)^{2/3} = \rho c_p\,Le^{2/3} \qquad\text{(the Lewis relation)}$$

You never get to set $h$ and $k_c$ independently. For a gas $Le \approx 1$, so
$h/k_c \approx \rho c_p$.

The analogy needs **skin** friction. Feed it the total drag on a bluff body — most
of which is form drag from the wake, something heat and mass never feel — and it
overpredicts $h$ badly.

*From* [5.1](lessons/05-01-transport-analogies.md)

### Two-film interphase transport

$$N_A = k_G\,(p_A - p_{A,i}) = k_L\,(c_{A,i} - c_A), \qquad p_{A,i} = H\,c_{A,i}$$

Eliminate the unmeasurable interface with the fictitious equilibrium values
$p_A^{*} \equiv Hc_A$ and $c_A^{*} \equiv p_A/H$:

$$N_A = K_G(p_A - p_A^{*}), \quad \frac{1}{K_G} = \frac{1}{k_G} + \frac{H}{k_L}; \qquad N_A = K_L(c_A^{*} - c_A), \quad \frac{1}{K_L} = \frac{1}{Hk_G} + \frac{1}{k_L}, \quad K_L = HK_G$$

| Solubility | Henry constant | Dominant term | Controlled by | Design lever |
|---|---|---|---|---|
| Highly soluble (ammonia) | small $H$ | $1/k_G$ | **gas film** | gas-side turbulence |
| Sparingly soluble (oxygen) | large $H$ | $H/k_L$ | **liquid film** | liquid-side agitation, fine bubbles |

Graphically: from the operating point $(c_A, p_A)$ draw a tie line of slope
$-k_L/k_G$; where it meets the equilibrium line $p = Hc$ is the interface state.

*From* [5.2](lessons/05-02-two-film-theory-interphase.md)

### Simultaneous heat and mass transfer (wet bulb)

Steady balance on an evaporating film — convective heat in pays the latent heat
out:

$$h\,(T_\infty - T_w) = k_c\,\lambda\,\big(c_{A,s}(T_w) - c_{A,\infty}\big)$$

Substitute the Lewis relation $h/k_c = \rho c_p Le^{2/3}$ and every coefficient —
and with them the air speed — disappears:

$$\boxed{\,T_\infty - T_w = \frac{\lambda\,\big(c_{A,s}(T_w) - c_{A,\infty}\big)}{\rho\,c_p\,Le^{2/3}}\,}$$

The saturation concentration is evaluated at $T_w$, **not** $T_\infty$ — which is
why the equation is implicit and solved by one-variable iteration: guess $T_w$,
read $c_{A,s}(T_w)$ off the saturation curve, compute the right-hand side, update
$T_w$, repeat. Pair the units consistently: $\lambda$ in J/kg with a mass
concentration, or J/mol with a molar one.

For air–water $Le \approx 0.85$ so $Le^{2/3}\approx 0.9 \approx 1$, the wet-bulb
and adiabatic-saturation temperatures nearly coincide, and a sling psychrometer
reads humidity directly. For other vapor–gas pairs the two split apart.

*From* [5.3](lessons/05-03-simultaneous-heat-mass-transfer.md)

### Turbulent transport

Total flux is molecular plus eddy — the same one flux law, with a second
diffusivity bolted on:

$$\bar\tau_{yx} = -\rho(\nu+\nu_t)\frac{d\bar v_x}{dy}, \qquad \bar q_y = -\rho c_p(\alpha+\alpha_t)\frac{d\bar T}{dy}, \qquad \bar N_{A,y} = -(D_{AB}+D_t)\frac{d\bar c_A}{dy}$$

$$Pr_t = \frac{\nu_t}{\alpha_t} \approx Sc_t = \frac{\nu_t}{D_t} \approx 1 \quad (\text{measured } 0.7\text{–}0.9)$$

One eddy carries momentum, heat, and species in the *same* parcel, so the eddy
diffusivities coincide — which is exactly Reynolds' ideal condition. All the
molecular idiosyncrasy is squeezed into the thin viscous sublayer, so **the
analogies get better in turbulence**, and better still as $Re$ rises and that
sublayer thins.

**Law of the wall.** With friction velocity $u_{*} = \sqrt{\tau_w/\rho}$,
$u^{+} = \bar v_x/u_{*}$, $y^{+} = yu_{*}/\nu$:

$$u^{+} = y^{+} \ \ (y^{+} \lesssim 5, \text{ viscous sublayer}), \qquad u^{+} = \frac{1}{\kappa}\ln y^{+} + B \ \ (\text{log layer}), \quad \kappa\approx0.41,\ B\approx5.0$$

**Prandtl's mixing length** closure, $\nu_t = \ell^2|d\bar v_x/dy|$ with
$\ell = \kappa y$, gives $\nu_t = \kappa y u_{*}$, i.e. $\nu_t/\nu = \kappa y^{+}$
— one to three orders of magnitude above molecular transport through most of the
flow. That is the quantitative reason turbulent $h$ and $k_c$ tower over laminar
ones.

*From* [5.4](lessons/05-04-turbulent-transport.md)

## Assumed, not taught here

This is a Tier 2 course that stands on two prerequisites; it uses the following
without re-deriving them.

| Fact | Where it's taught |
|---|---|
| Stress tensor, and reading $\tau_{ij}$ as a force per area | [fluid-dynamics 1.4](../fluid-dynamics/lessons/01-04-stress-tensor.md) |
| Substantial derivative, Lagrangian vs Eulerian description | [fluid-dynamics 1.2](../fluid-dynamics/lessons/01-02-lagrangian-eulerian-material-derivative.md) |
| Navier–Stokes derived from the fluid side; Couette and Poiseuille solved geometrically | [fluid-dynamics 1.6](../fluid-dynamics/lessons/01-06-navier-stokes.md), [3.2](../fluid-dynamics/lessons/03-02-couette-poiseuille.md) |
| Reynolds number and the laminar/turbulent transition criterion | [fluid-dynamics 3.1](../fluid-dynamics/lessons/03-01-reynolds-number.md), [4.4](../fluid-dynamics/lessons/04-04-transition-to-turbulence.md) |
| Blasius solution (the "5" and the "0.664" are quoted, never derived) | [fluid-dynamics 3.4](../fluid-dynamics/lessons/03-04-boundary-layers.md) |
| Separation, form vs skin drag — the analogy's failure mode | [fluid-dynamics 3.5](../fluid-dynamics/lessons/03-05-separation-drag.md) |
| Eddy cascade, mixing length, log law of the wall (stated here, derived there) | [fluid-dynamics 4.5](../fluid-dynamics/lessons/04-05-turbulence-kolmogorov.md) |
| Fourier's law and the transient heat equation | [heat-transfer 1.1](../heat-transfer/lessons/01-01-three-modes-fouriers-law.md), [1.2](../heat-transfer/lessons/01-02-heat-equation.md) |
| Fin efficiency $\tanh(mL)/mL$ — the structural twin of $\eta(\phi)$ | [heat-transfer 1.5](../heat-transfer/lessons/01-05-fins-extended-surfaces.md) |
| Semi-infinite $\operatorname{erfc}$ solution and the $\operatorname{erf}$ function itself | [heat-transfer 2.2](../heat-transfer/lessons/02-02-semi-infinite-solid.md) |
| Heisler charts and the one-term $\zeta_1, C_1$ coefficients | [heat-transfer 2.3](../heat-transfer/lessons/02-03-finite-bodies-heisler.md) |
| $Nu = f(Re,Pr)$ machinery and the external/internal convection correlations | [heat-transfer 3.2](../heat-transfer/lessons/03-02-dimensionless-groups-re-pr-nu.md), [3.3](../heat-transfer/lessons/03-03-external-forced-convection.md), [3.4](../heat-transfer/lessons/03-04-internal-forced-convection.md) |
| Thermal natural convection and the Churchill–Chu correlations | [heat-transfer 3.5](../heat-transfer/lessons/03-05-natural-convection.md) |
| Log-mean temperature difference and the overall coefficient $U$ | [heat-transfer 4.4](../heat-transfer/lessons/04-04-heat-exchangers-lmtd.md) |
| Fick's first and second laws in a solid | [materials-science 2.4](../materials-science/lessons/02-04-diffusion-i-ficks-first-law.md), [2.5](../materials-science/lessons/02-05-diffusion-ii-transient-arrhenius.md) |
| Ideal-gas law ($c = P/RT$) and the Maxwell–Boltzmann speed distribution behind $\bar c$ | [general-chemistry 3.1](../general-chemistry/lessons/03-01-gases-ideal-gas-law-kinetic-theory.md) |
| Henry's law for a dissolved gas | [physical-chemistry 2.3](../physical-chemistry/lessons/02-03-ideal-solutions-raoult-henry.md) |
| Latent heat of vaporization and the saturation curve $c_{A,s}(T)$ | [physical-chemistry 2.2](../physical-chemistry/lessons/02-02-clapeyron-clausius-clapeyron.md) |
| Psychrometrics as an engineering practice (wet bulb, humidity charts) | [engineering-thermodynamics 4.5](../engineering-thermodynamics/lessons/04-05-psychrometrics-exergy.md) |
| Second-order constant-coefficient ODEs — why $c'' = m^2c$ gives $\cosh/\sinh$, not $\cos/\sin$ | [ode-refresher 2.1](../ode-refresher/lessons/02-01-second-order-constant-coefficient.md) |
| Divergence, gradient, Laplacian, and the divergence theorem behind every box balance | [calc-refresher 5.1](../calc-refresher/lessons/05-01-vector-fields-div-curl.md), [5.3](../calc-refresher/lessons/05-03-green-stokes-divergence.md) |
| First-order reaction kinetics, $R_A = -k_1c_A$ | [physical-chemistry 3.1](../physical-chemistry/lessons/03-01-rate-laws-reaction-order.md) |

## Pitfalls

### The flux laws and diffusivities

- Newton, Fourier, and Fick are one template with three fillings — memorize the template plus the correspondence table, not three unrelated formulas. *([1.1](lessons/01-01-one-flux-law-three-transports.md))*
- The unified gradient is of the **concentration per volume** ($\rho v_x$, $\rho c_p T$, $c_A$); it only looks like $dv_x/dy$ or $dT/dy$ because $\rho$ and $c_p$ were pulled out as constants. If properties vary with position, keep the $-k\,dT/dy$ form. *([1.1](lessons/01-01-one-flux-law-three-transports.md), [1.3](lessons/01-03-heat-mass-fluxes-fourier-fick.md))*
- Never drop the minus sign: it encodes the second law. A plus sign would have heat pooling into the hot spot. *([1.1](lessons/01-01-one-flux-law-three-transports.md), [1.2](lessons/01-02-momentum-transport-newton-viscosity.md))*
- A flux law is only the *molecular* half of transport — bulk flow convects with no gradient at all. Forgetting the convective term is the classic error in a first equation of change. *([1.1](lessons/01-01-one-flux-law-three-transports.md), [2.6](lessons/02-06-species-continuity-equation.md))*
- $\mu$ and $\nu$ answer different questions: high viscosity means "resists shearing hard", not "spreads momentum fast". Glycerin's $\nu$ is a thousand times water's. Same trap for $k$ vs $\alpha$: a good conductor with a huge $\rho c_p$ still spreads temperature slowly. *([1.2](lessons/01-02-momentum-transport-newton-viscosity.md), [1.3](lessons/01-03-heat-mass-fluxes-fourier-fick.md))*
- Read $\tau_{yx}$ as both "the stress" and "the flux of $x$-momentum in $y$". Holding both readings is what lets you copy a heat result into a momentum result. *([1.2](lessons/01-02-momentum-transport-newton-viscosity.md))*

### Transport properties and the ratios

- Squeezing a gas does **not** make it more viscous: more carriers, proportionally shorter hops, exact cancellation. *([1.4](lessons/01-04-transport-properties-kinetic-theory.md))*
- Do not carry "hot means more viscous" over to liquids — they run the opposite way ($\mu \propto e^{E_a/RT}$), because there is no free flight. *([1.4](lessons/01-04-transport-properties-kinetic-theory.md))*
- $\tfrac13\rho\bar c\lambda$ is an order-of-magnitude estimate with a crude prefactor; trust the scalings, not the third digit. *([1.4](lessons/01-04-transport-properties-kinetic-theory.md))*
- Bigger $Pr$ means a **thinner** thermal layer, not a thicker one — and therefore a *steeper* wall gradient and a *larger* $Nu$. Same for $Sc$ and $Sh$. *([1.5](lessons/01-05-three-diffusivities-pr-sc-le.md), [3.3](lessons/03-03-thermal-concentration-boundary-layers.md))*
- The ratio is the **cube root**, not linear: for water $\delta_T = \delta/1.9$, not $\delta/7$. *([3.3](lessons/03-03-thermal-concentration-boundary-layers.md))*
- $Pr$, $Sc$, $Le$ are fluid properties with no velocity or length in them — change the wind speed and only $Re$ moves. *([1.5](lessons/01-05-three-diffusivities-pr-sc-le.md))*
- "Liquid" alone doesn't set the sign: liquid metals conduct heat by electrons, so $Pr \ll 1$ and the thermal layer is *thicker* than the momentum layer — and the $Pr^{1/3}$ correlations don't apply. *([1.5](lessons/01-05-three-diffusivities-pr-sc-le.md), [3.3](lessons/03-03-thermal-concentration-boundary-layers.md))*

### Balances and the equations of change

- Convective terms cancel only because the flow is **fully developed**. In an entrance region or a changing cross-section they don't. *([2.1](lessons/02-01-shell-momentum-balance-falling-film.md))*
- No-slip belongs at a solid wall; a free liquid–gas surface gets **zero shear**. Swapping them gives a profile that is fast at the wall and stuck at the surface. *([2.1](lessons/02-01-shell-momentum-balance-falling-film.md))*
- Shear tracks the *slope*, not the height: it vanishes where the velocity peaks and is maximal at the wall. *([2.2](lessons/02-02-shell-balances-tube-annulus.md), [3.2](lessons/03-02-momentum-boundary-layer.md))*
- The $C_1/r$ term is killed only by the axis-finiteness argument. An annulus has a hole at the centre, so $C_1$ survives — and it is what shifts the velocity peak off-axis. *([2.2](lessons/02-02-shell-balances-tube-annulus.md))*
- $\nabla\!\cdot(\rho\mathbf v)=0$ is *steady* continuity, not incompressibility. Incompressible is the stronger, separate $\nabla\!\cdot\mathbf v = 0$; in a steady nozzle the first holds and the second doesn't. *([2.3](lessons/02-03-equation-of-continuity.md))*
- "Steady" kills the local term $\partial_t$, never the convective term. A particle can densify or heat up in a perfectly steady field just by being swept somewhere new. *([2.3](lessons/02-03-equation-of-continuity.md), [2.4](lessons/02-04-equation-of-motion-navier-stokes.md))*
- Steady and fully developed are different assumptions; Example-1-style tube reductions need both, and it is fully-developed that annihilates convection. *([2.4](lessons/02-04-equation-of-motion-navier-stokes.md))*
- Don't memorize which terms drop for each geometry — derive it by crossing out one physical assumption at a time. *([2.4](lessons/02-04-equation-of-motion-navier-stokes.md))*
- Bird–Stewart–Lightfoot write the momentum-*flux* tensor with the opposite sign to the *stress* tensor. The physics is identical; for constant-property incompressible flow both land on $+\mu\nabla^2\mathbf v$. *([2.4](lessons/02-04-equation-of-motion-navier-stokes.md))*
- Convection is not a new force — it is bookkeeping from tracking a moving parcel with $D/Dt$. *([2.5](lessons/02-05-energy-equation-of-change.md))*
- Viscous dissipation is negligible almost always ($Br \ll 1$); the skill is knowing when it isn't — lubrication films, polymer processing, hypersonic layers, micro-gaps. And when it matters, the temperature profile bows parabolic, not linear. *([2.5](lessons/02-05-energy-equation-of-change.md))*
- $R_A$ is production-positive: a species being consumed has $R_A = -k_1c_A$. Flip the sign and your $\cosh$ becomes a $\cos$ — different, wrong physics. *([2.6](lessons/02-06-species-continuity-equation.md), [4.3](lessons/04-03-diffusion-with-reaction-thiele.md))*

### Scaling, boundary layers, and coefficients

- Matching one group is not enough — match every group that appears as a coefficient. A model in air at the right $Re$ will not reproduce a prototype's $Nu$ in oil. *([3.1](lessons/03-01-nondimensionalizing-equations-of-change.md))*
- The groups are *forced* on you as leftover coefficients, not chosen from a table; that is what tells you which ones and what each measures. *([3.1](lessons/03-01-nondimensionalizing-equations-of-change.md))*
- Pick the pressure scale that keeps the *retained* terms order one: $\rho V^2$ for inertia-dominated flow, $\mu V/L$ for creeping flow. And state your $Fr$ convention — some texts drop the square root. *([3.1](lessons/03-01-nondimensionalizing-equations-of-change.md))*
- High $Re$ makes viscosity irrelevant *almost everywhere* — never in the boundary layer, where the gradient it multiplies is huge. You cannot Bernoulli your way to skin friction. *([3.2](lessons/03-02-momentum-boundary-layer.md))*
- The boundary layer is where the velocity *changes*, not where it is slow; at its edge the fluid is at 99% of free stream. *([3.2](lessons/03-02-momentum-boundary-layer.md))*
- Local wall shear is *largest at the leading edge* and falls as $1/\sqrt x$. *([3.2](lessons/03-02-momentum-boundary-layer.md))*
- The $k$ in $Nu = hL/k$ is the **fluid's** conductivity — a metal wall's high $k$ is irrelevant. *([3.4](lessons/03-04-forced-convection-transport-coefficients.md))*
- Swap the *variable and its role*, then read the exponent off the specific correlation: flat plate is $1/3$ for both, Dittus–Boelter is $Pr^{0.4}$ but $Sc^{1/3}$. *([3.4](lessons/03-04-forced-convection-transport-coefficients.md), [4.5](lessons/04-05-mass-transfer-coefficients-correlations.md))*
- For internal flow use the **log-mean** driving force; the arithmetic mean overstates the flux. And don't trust a fully-developed correlation in a short tube — entry regions run hot. *([3.4](lessons/03-04-forced-convection-transport-coefficients.md))*
- Convert through the dimensionless group, never quote $h$ directly across scales — $Nu$ can match while $h$ differs fivefold, since $h \propto 1/L$. *([3.1](lessons/03-01-nondimensionalizing-equations-of-change.md))*

### Free convection

- Read *every* property at the film temperature $T_f$ — including $\beta$, which is the engine of the flow. *([3.5](lessons/03-05-free-natural-convection.md))*
- $\beta = 1/T_f$ is **ideal-gas thermal only**. Liquids need a tabulated $\beta$; the solutal case needs $\beta_c$. *([3.5](lessons/03-05-free-natural-convection.md))*
- The free-convection velocity returns to zero far from the wall (the outside fluid is quiescent) — an interior peak, not a plateau. *([3.5](lessons/03-05-free-natural-convection.md))*
- Don't drop buoyancy the moment there's an imposed flow: only when $Gr/Re^2 \ll 1$. Gentle ventilation often sits in the mixed regime. *([3.5](lessons/03-05-free-natural-convection.md))*

### Mass transfer — frames, drift, and pellets

- $N_A$ and $J_A^{*}$ coincide **only** in equimolar counterdiffusion. In general $N_A = J_A^{*} + x_A(N_A+N_B)$, and forgetting the convective term is the classic mass-transfer error. *([4.1](lessons/04-01-diffusion-binary-mixtures-fluxes-frames.md))*
- "Diffusing" and "crossing a fixed plane" are different questions: $J_A^{*}=0$ can coexist with $N_A \ne 0$ (uniform composition, pure convection), and $N_B = 0$ can coexist with $J_B^{*} \ne 0$ (stagnant B is not still). *([4.1](lessons/04-01-diffusion-binary-mixtures-fluxes-frames.md), [4.2](lessons/04-02-diffusion-stagnant-film-stefan.md))*
- Don't put the mass-average $\mathbf v$ into the molar Fick law: $J_A^{*}$ is relative to $\mathbf v^{*}$, $j_A$ is relative to $\mathbf v$, and they agree only when the molar masses match. *([4.1](lessons/04-01-diffusion-binary-mixtures-fluxes-frames.md))*
- Use the **log**-mean $x_{B,\mathrm{lm}}$, not the arithmetic mean — they diverge exactly in the concentrated regime where the correction matters. *([4.2](lessons/04-02-diffusion-stagnant-film-stefan.md))*
- The stagnant-film profile is curved, not linear: $N_A$ is constant but $dx_A/dz$ isn't. *([4.2](lessons/04-02-diffusion-stagnant-film-stefan.md))*
- Only apply the drift factor when A is a *large* mole fraction through a stagnant B; for dilute transfer $x_{B,\mathrm{lm}} \to 1$ and it is pointless. *([4.5](lessons/04-05-mass-transfer-coefficients-correlations.md))*
- Inside a porous pellet use the **effective** $D_e = D_{AB}\varepsilon/\tau$, not $D_{AB}$ — the raw value underestimates $\phi$ and badly overestimates $\eta$. *([4.3](lessons/04-03-diffusion-with-reaction-thiele.md))*
- A bigger pellet converts more only while reaction-limited; once diffusion-limited the extra interior is dead weight. And $\eta < 1$ is a **transport** penalty, not bad chemistry. *([4.3](lessons/04-03-diffusion-with-reaction-thiele.md))*
- Don't re-derive transient mass transfer — it is transient conduction with $\alpha \to D_{AB}$, and $Bi_m$ uses $k_c$ and $D_{AB}$, never $h$ and $k$. *([4.4](lessons/04-04-transient-multidimensional-diffusion.md))*
- Mass and heat fronts do not keep pace: the concentration front lags by $\sqrt{Le}$ in depth and $Le$ in time, so in coupled problems the temperature field is effectively steady while concentration still crawls. *([4.4](lessons/04-04-transient-multidimensional-diffusion.md))*
- The three $k_c$ models don't disagree about the *value* — they disagree about the **exponent on $D$**. You can't tell them apart from a single measurement, and the "film thickness" is a back-calculated fiction. *([4.5](lessons/04-05-mass-transfer-coefficients-correlations.md))*

### Analogies, interphase, and turbulence

- The analogies work for **skin** friction only. On a bluff body most of the drag is form drag from the wake, which heat and mass never feel. *([5.1](lessons/05-01-transport-analogies.md))*
- Bare Reynolds ($St = C_f/2$) needs $Pr = Sc = 1$. For water it overestimates $St$ by about $Pr^{2/3} \approx 3.3$ — use Chilton–Colburn. *([5.1](lessons/05-01-transport-analogies.md))*
- The $2/3$ power is glued to the $Pr^{1/3}$ layer-stretch law; strong blowing, suction, or a reacting surface breaks it even in attached flow. *([5.1](lessons/05-01-transport-analogies.md))*
- Solubility and controlling resistance point in **opposite** directions: a highly soluble gas is gas-film controlled. *([5.2](lessons/05-02-two-film-theory-interphase.md))*
- $H$ sits *inside* the resistance sum as $H/k_L$ because the two phases measure composition on different scales; and $p_A^{*}$ is a bookkeeping fiction, not a real partial pressure anywhere. *([5.2](lessons/05-02-two-film-theory-interphase.md))*
- Faster air changes how *quickly* a wet bulb settles, not the value of $T_w$ — $h/k_c$ is a property group with no velocity in it. *([5.3](lessons/05-03-simultaneous-heat-mass-transfer.md))*
- Evaluate the saturation concentration at $T_w$, never at $T_\infty$; and never drop $\lambda$ — it is the entire coupling. *([5.3](lessons/05-03-simultaneous-heat-mass-transfer.md))*
- $Le^{2/3} = 1$ is an excellent approximation for air–water and a bad one for other vapor–gas pairs. *([5.3](lessons/05-03-simultaneous-heat-mass-transfer.md))*
- Averaging doesn't make turbulence tractable — it creates the closure problem, and every practical result rests on an empirical model. *([5.4](lessons/05-04-turbulent-transport.md))*
- $\nu_t, \alpha_t, D_t$ are properties of the **flow**, not the fluid: zero at the wall, huge in the core, different at every point. You cannot look them up. *([5.4](lessons/05-04-turbulent-transport.md))*
- Turbulence *sharpens* the analogy rather than wrecking it, because one eddy carries all three quantities in the same parcel. *([5.4](lessons/05-04-turbulent-transport.md))*
- The log law is an experimental collapse, not a derivation — a constraint any turbulence model must reproduce. *([5.4](lessons/05-04-turbulent-transport.md))*
