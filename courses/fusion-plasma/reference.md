# Fusion & Plasma Engineering · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Fusion engineering is one inequality dressed in four costumes. *Does the energy
you make beat the energy you lose?* — asked of a reaction (which fuel), of a
plasma (Lawson and the triple product), of a machine (confinement, stability,
exhaust), and finally of a balance sheet (recirculating power and availability).
This card carries the reaction data, the criteria and what each one assumes, the
tokamak parameter vocabulary with its units, and the instability table you'd
otherwise reconstruct from three lessons mid-problem.

## Notation

Only symbols this course actually leans on. Several are overloaded — see
[Symbols that collide](#symbols-that-collide) before trusting one out of context.

| Symbol | Means | First used |
|---|---|---|
| $Q$ (reaction) | energy released by one nuclear reaction, from the mass defect — MeV | [1.1](lessons/01-01-why-fusion-why-dt.md) |
| $E_{\text{fus}},\ E_\alpha,\ E_n$ | energy per D-T reaction and its alpha / neutron shares — 17.6, 3.5, 14.1 MeV | [1.1](lessons/01-01-why-fusion-why-dt.md) |
| $\sigma(E)$ | fusion cross-section — the effective target area one nucleus presents, m² | [1.2](lessons/01-02-coulomb-barrier-tunneling.md) |
| $E_G$ | Gamow energy — sets how steeply tunneling shuts off as ions slow, MeV | [1.2](lessons/01-02-coulomb-barrier-tunneling.md) |
| $E_0$ | Gamow peak energy — the narrow band where nearly all fusion actually happens, keV | [1.2](lessons/01-02-coulomb-barrier-tunneling.md) |
| $S(E)$ | astrophysical S-factor — the slowly varying nuclear physics left after tunneling is factored out | [1.2](lessons/01-02-coulomb-barrier-tunneling.md) |
| $\langle\sigma v\rangle$ | reactivity — the fusion rate coefficient after averaging over a Maxwellian, m³/s | [1.3](lessons/01-03-reactivity-power-density.md) |
| $n$, $n_D$, $n_T$, $n_e$ | total ion / deuteron / triton / electron number density, m⁻³ | [1.3](lessons/01-03-reactivity-power-density.md) |
| $T$ | temperature quoted **in energy units**, keV (never kelvin in this course) | [1.3](lessons/01-03-reactivity-power-density.md) |
| $\tau_E$ | energy confinement time — how long stored heat takes to drain, s | [1.4](lessons/01-04-lawson-criterion-triple-product.md) |
| $W$ | stored thermal energy density $3nT$ (J/m³), or total $3nTV$ (J) | [1.4](lessons/01-04-lawson-criterion-triple-product.md) |
| $P_{\text{brem}}$ | bremsstrahlung radiated power density — the X-ray leak that sets the low-$T$ wall, W/m³ | [1.4](lessons/01-04-lawson-criterion-triple-product.md) |
| $Q$ (gain) | fusion gain $P_{\text{fus}}/P_{\text{heat}}$ — dimensionless | [1.5](lessons/01-05-ignition-breakeven-gain.md) |
| $f_\alpha$ | fraction of plasma heating supplied by its own alphas | [1.5](lessons/01-05-ignition-breakeven-gain.md) |
| $r_L$, $\omega_c$ | gyroradius (leash length across $\mathbf B$, m) and gyrofrequency (rad/s) | [2.1](lessons/02-01-bottles-to-tori.md) |
| $\mu$, $R_m$ | magnetic moment invariant, and mirror ratio $B_{\max}/B_{\min}$ | [2.1](lessons/02-01-bottles-to-tori.md) |
| $v_d$ | vertical curvature-plus-grad-$B$ drift speed — opposite for ions and electrons, m/s | [2.1](lessons/02-01-bottles-to-tori.md) |
| $\iota$ | rotational transform — how much a field line twists poloidally per toroidal lap | [2.1](lessons/02-01-bottles-to-tori.md) |
| $\psi$ | poloidal magnetic flux — the label that names each nested flux surface, Wb | [2.2](lessons/02-02-mhd-equilibrium-flux-surfaces.md) |
| $F(\psi)$ | poloidal-current function $RB_\phi$ — the second free profile in Grad–Shafranov | [2.2](lessons/02-02-mhd-equilibrium-flux-surfaces.md) |
| $\Delta^{*}$ | the Grad–Shafranov elliptic operator (a Laplacian with a $1/R$ twist) | [2.2](lessons/02-02-mhd-equilibrium-flux-surfaces.md) |
| $R$, $a$ | major radius (torus centre to plasma centre) and minor radius (plasma edge), m | [2.3](lessons/02-03-the-tokamak-recipe.md) |
| $B_t$, $B_p$ | toroidal (long-way) and poloidal (short-way) field, T | [2.3](lessons/02-03-the-tokamak-recipe.md) |
| $I_p$ | plasma current — the transformer-driven current that makes $B_p$, A (quoted in MA) | [2.3](lessons/02-03-the-tokamak-recipe.md) |
| $q$, $q_a$, $q_0$ | safety factor: toroidal laps per poloidal lap; at the edge; on axis | [2.3](lessons/02-03-the-tokamak-recipe.md) |
| $\beta$ | plasma pressure over magnetic pressure — the economic efficiency of confinement | [2.3](lessons/02-03-the-tokamak-recipe.md) |
| $w$ (island) | saturated magnetic-island width at a rational surface, m | [2.4](lessons/02-04-mhd-instabilities.md) |
| $\Delta\Psi$, $V_{\text{loop}}$ | central-solenoid volt-second budget (Wb) and the loop voltage it drives (V) | [2.5](lessons/02-05-stellarators.md) |
| $n_G$, $f_G$ | Greenwald density limit (10²⁰ m⁻³) and the operating fraction $n/n_G$ | [2.6](lessons/02-06-operational-limits.md) |
| $\beta_N$ | normalized beta (Troyon factor), $\approx 3$ — packages plasma shape and profiles | [2.6](lessons/02-06-operational-limits.md) |
| $\eta$ (resistivity) | Spitzer plasma resistivity, $\Omega\cdot\text{m}$ — **falls** as $T^{-3/2}$ | [3.1](lessons/03-01-ohmic-heating-ceiling.md) |
| $\ln\Lambda$ | Coulomb logarithm — bundles the many small-angle collisions; $\approx 15$–$20$ | [3.1](lessons/03-01-ohmic-heating-ceiling.md) |
| $j$ | current density, A/m² | [3.1](lessons/03-01-ohmic-heating-ceiling.md) |
| $E_b$, $\eta_n$ | neutral-beam energy (keV) and neutralization efficiency | [3.2](lessons/03-02-neutral-beam-injection.md) |
| $\sigma_s$, $\lambda$ | beam-stopping cross-section (m²) and the beam's e-folding penetration depth (m) | [3.2](lessons/03-02-neutral-beam-injection.md) |
| $\tau_s$, $Z_{\text{eff}}$ | fast-ion slowing-down time (s) and the plasma's effective charge | [3.2](lessons/03-02-neutral-beam-injection.md) |
| $\Omega$, $f_{ce}$, $f_{ci}$ | cyclotron angular frequency, and electron / ion cyclotron frequencies (Hz) | [3.3](lessons/03-03-rf-heating-current-drive.md) |
| $\gamma_{\text{CD}}$ | current-drive figure of merit $\bar n I_{\text{CD}}R/P$ — amps per watt, size-corrected | [3.3](lessons/03-03-rf-heating-current-drive.md) |
| $\chi$ | heat diffusivity, m²/s — step size squared times step rate | [3.4](lessons/03-04-transport-confinement-scaling.md) |
| $P_{\text{LH}}$ | heating-power threshold for the L→H transition, W | [3.4](lessons/03-04-transport-confinement-scaling.md) |
| $\lambda_q$ | scrape-off-layer power-decay width — stubbornly ~1 mm, m | [3.5](lessons/03-05-scrape-off-layer-divertor.md) |
| $q_\parallel$, $q_\perp$ | heat flux along the field, and the flux the target surface actually feels, W/m² | [3.5](lessons/03-05-scrape-off-layer-divertor.md) |
| $f_{\text{rad}}$ | fraction of exhaust power radiated away as light before it lands on the target | [3.5](lessons/03-05-scrape-off-layer-divertor.md) |
| $Y$, $\Gamma_{\text{in}}$, $r$ | sputtering yield (atoms per ion), incident ion flux (m⁻²s⁻¹), redeposition fraction | [3.6](lessons/03-06-first-wall-plasma-wall-interaction.md) |
| $L_Z(T)$, $f_Z$ | impurity cooling rate ($\text{W}\,\text{m}^3$) and impurity concentration $n_Z/n_e$ | [3.6](lessons/03-06-first-wall-plasma-wall-interaction.md) |
| TBR | tritium breeding ratio — tritons bred per triton burned | [4.1](lessons/04-01-tritium-breeding-fuel-cycle.md) |
| $M_n$, $\varepsilon$ | blanket neutron multiplication, and fraction of neutrons that end up breeding | [4.1](lessons/04-01-tritium-breeding-fuel-cycle.md) |
| $f_b$ | burnup fraction — the few percent of injected tritium that fuses per pass | [4.1](lessons/04-01-tritium-breeding-fuel-cycle.md) |
| $\Gamma_n$ | neutron wall loading, MW/m² — sets how fast the wall accumulates damage | [4.2](lessons/04-02-neutrons-blankets-activation.md) |
| dpa | displacements per atom — the accumulated lattice damage a structure has taken | [4.2](lessons/04-02-neutrons-blankets-activation.md) |
| $M$ | blanket **energy** multiplication, thermal energy out per neutron energy in | [4.2](lessons/04-02-neutrons-blankets-activation.md) |
| $\rho R$ | areal density, g/cm² — the ICF figure of merit (grams a particle must plough through) | [4.3](lessons/04-03-inertial-confinement-implosion.md) |
| $c_s$ | ion sound speed $\sqrt{T/m_i}$ — the rate at which an unconfined ball flies apart, m/s | [4.3](lessons/04-03-inertial-confinement-implosion.md) |
| $A$ (Atwood) | density contrast $(\rho_h-\rho_l)/(\rho_h+\rho_l)$ driving Rayleigh–Taylor growth | [4.3](lessons/04-03-inertial-confinement-implosion.md) |
| $Q_{\text{target}}$, $Q_{\text{plant}}$ | ICF gain measured against laser-energy-on-target vs. grid energy drawn | [4.4](lessons/04-04-inertial-confinement-drivers-nif.md) |
| $\eta_{\text{driver}}$ | driver wall-plug efficiency, $E_{\text{laser}}/E_{\text{wall}}$ | [4.4](lessons/04-04-inertial-confinement-drivers-nif.md) |
| $\eta$ (thermal) | thermal-to-electric conversion efficiency, $\approx 0.35$–$0.40$ | [4.5](lessons/04-05-burning-plasma-to-power-plant.md) |
| $\eta_{\text{CD}}$ | wall-plug efficiency of the heating / current-drive system, $\approx 0.3$–$0.5$ | [4.5](lessons/04-05-burning-plasma-to-power-plant.md) |
| $f_{\text{rec}}$, $a$ (availability) | recirculating power fraction, and the fraction of the year at full power | [4.5](lessons/04-05-burning-plasma-to-power-plant.md) |

## Definitions

### Mass defect and Q-value

A bound nucleus weighs less than its loose parts; weigh both sides of a reaction
and the mass that vanishes reappears as kinetic energy of the products.

$$Q = c^2\,\Delta m = c^2\Big(\textstyle\sum m_{\text{in}} - \sum m_{\text{out}}\Big) = \sum B_{\text{out}} - \sum B_{\text{in}}, \qquad 1\ \text{u} = 931.494\ \text{MeV}/c^2$$

*Introduced:* [1.1](lessons/01-01-why-fusion-why-dt.md)

### Coulomb barrier

The electrostatic wall two nuclei must get past before the short-range strong
force can grab them — hundreds of keV tall, while a reactor plasma carries tens.

$$V(r) = \frac{Z_1 Z_2 e^2}{4\pi\varepsilon_0\, r}, \qquad V_{\max} \text{ at } r \approx r_0\big(A_1^{1/3}+A_2^{1/3}\big)$$

*Introduced:* [1.2](lessons/01-02-coulomb-barrier-tunneling.md)

### Gamow peak

Fast ions are exponentially rare and slow ions almost never tunnel, so fusion
concentrates in one narrow energy band well above the thermal mean and well below
the barrier top. Almost every reaction in your reactor happens there.

$$E_0 = \left(\tfrac{1}{2}\sqrt{E_G}\;kT\right)^{2/3}, \qquad \text{width} \sim \sqrt{E_0\,kT}$$

*Introduced:* [1.2](lessons/01-02-coulomb-barrier-tunneling.md)

### Reactivity

The fusion rate coefficient you get after letting a whole Maxwellian spread of
ions collide — cross-section and thermal speed distribution baked into one number
that depends on **nothing but temperature**.

$$\langle\sigma v\rangle(T) = \int_0^\infty \sigma(v)\,v\,f(v)\,d^3v \qquad [\text{m}^3/\text{s}]$$

*Introduced:* [1.3](lessons/01-03-reactivity-power-density.md)

### Energy confinement time

If you switched off all heating, how long until the plasma cooled down. It bundles
every transport channel (conduction, convection, turbulence) into one *measured*
number — nobody computes it from first principles for a real tokamak.

$$P_{\text{loss}} = \frac{W}{\tau_E} = \frac{3nT}{\tau_E}$$

*Introduced:* [1.4](lessons/01-04-lawson-criterion-triple-product.md)

### Lawson criterion

Alpha self-heating must at least pay the plasma's heat bill. Rearranged, the
confinement quality $n\tau_E$ has to clear a threshold set by temperature and
reactivity.

$$\frac{n^2}{4}\langle\sigma v\rangle E_\alpha \;\ge\; \frac{3nT}{\tau_E} \quad\Longleftrightarrow\quad n\tau_E \;\ge\; \frac{12\,T}{\langle\sigma v\rangle\,E_\alpha}$$

*Introduced:* [1.4](lessons/01-04-lawson-criterion-triple-product.md)

### Triple product

Multiply Lawson by $T$ and the awkward temperature dependence very nearly cancels
(because $\langle\sigma v\rangle \propto T^2$ over 10–20 keV), leaving one
almost-$T$-independent number every device on Earth is judged by.

$$nT\tau_E \;\ge\; \frac{12\,T^2}{\langle\sigma v\rangle\,E_\alpha} \;\gtrsim\; 3\times10^{21}\ \text{keV}\cdot\text{s}\cdot\text{m}^{-3}$$

*Introduced:* [1.4](lessons/01-04-lawson-criterion-triple-product.md)

### Bremsstrahlung floor

Electrons braking in the ions' fields radiate X-rays. Alpha heating and
bremsstrahlung both scale as $n^2$, so **density cancels** — the contest is purely
a function of temperature, and below about 4 keV radiation wins at any density and
any confinement.

$$P_{\text{brem}} = C_B\,n^2\sqrt{T}, \qquad \frac{P_\alpha}{P_{\text{brem}}} \propto \frac{T^2}{\sqrt T} = T^{3/2}$$

*Introduced:* [1.4](lessons/01-04-lawson-criterion-triple-product.md)

### Fusion gain

Fusion energy out per unit of heating energy you had to pay for. It says nothing
about wall-plug or turbine losses.

$$Q \equiv \frac{P_{\text{fus}}}{P_{\text{heat}}}, \qquad f_\alpha = \frac{Q}{Q+5}$$

*Introduced:* [1.5](lessons/01-05-ignition-breakeven-gain.md)

### Ignition

The alphas alone resupply energy at least as fast as the plasma loses it, so you
can switch the external heater off entirely — $Q\to\infty$, $f_\alpha\to1$.

$$\tfrac{1}{5}P_{\text{fus}} \;\ge\; \frac{W}{\tau_E}$$

*Introduced:* [1.5](lessons/01-05-ignition-breakeven-gain.md)

### Loss cone

Any particle whose velocity points within angle $\theta_c$ of the field line is
aimed too straight for a magnetic mirror to turn around, so it leaks out the end —
and collisions keep refilling the cone.

$$\sin^2\theta_c = \frac{B_{\min}}{B_{\max}} = \frac{1}{R_m}, \qquad f_{\text{lost}} = 1 - \sqrt{1 - 1/R_m}$$

*Introduced:* [2.1](lessons/02-01-bottles-to-tori.md)

### Rotational transform

The helical twist that makes each field line visit the top *and* the bottom of the
plasma, so the vertical drift averages to zero and electrons can short out the
charge separation before it ejects the plasma. Without it a torus confines nothing.

*Introduced:* [2.1](lessons/02-01-bottles-to-tori.md)

### Safety factor

How many times a field line goes the long way around for each single trip the
short way. Big $q$ is a gentle twist and a stiff, kink-resistant column; small $q$
is a tight twist the plasma can shove aside cheaply.

$$q(r) = \frac{r\,B_t}{R\,B_p}$$

*Introduced:* [2.1](lessons/02-01-bottles-to-tori.md), quantified in [2.3](lessons/02-03-the-tokamak-recipe.md)

### Flux surface

Force balance forces pressure to be constant along every field line and every
current line, so the plasma organizes itself into nested onion-layers of constant
pressure. Both $\mathbf B$ and $\mathbf J$ lie *inside* the layers.

$$\mathbf{J}\times\mathbf{B} = \nabla p \;\Longrightarrow\; \mathbf{B}\cdot\nabla p = 0, \quad \mathbf{J}\cdot\nabla p = 0$$

*Introduced:* [2.2](lessons/02-02-mhd-equilibrium-flux-surfaces.md)

### Grad–Shafranov equation

Force balance in an axisymmetric torus, collapsed to one 2D scalar PDE for the
poloidal flux. You supply the profiles $p(\psi)$ and $F(\psi)$ plus a boundary
shape; a code returns the surface shapes. It is a nonlinear **elliptic
boundary-value problem**, not a formula you evaluate.

$$\Delta^{*}\psi = -\,\mu_0 R^{2}\frac{dp}{d\psi} - F\frac{dF}{d\psi}, \qquad \Delta^{*}\psi \equiv R\frac{\partial}{\partial R}\!\left(\frac{1}{R}\frac{\partial\psi}{\partial R}\right)+\frac{\partial^{2}\psi}{\partial Z^{2}}$$

*Introduced:* [2.2](lessons/02-02-mhd-equilibrium-flux-surfaces.md)

### Shafranov shift

Pressure and the current's hoop force push the inner flux surfaces outward in
major radius, so the **magnetic axis** (where $p$ peaks and $\nabla p = 0$) sits
outboard of the boundary's geometric centre. The shift grows with $\beta$.

*Introduced:* [2.2](lessons/02-02-mhd-equilibrium-flux-surfaces.md)

### Plasma beta

The fraction of the confining field's muscle the plasma is actually leaning on —
product per unit cost, since magnets are the expense and plasma pressure is the
product.

$$\beta \equiv \frac{p}{B^2/2\mu_0}$$

*Introduced:* [2.2](lessons/02-02-mhd-equilibrium-flux-surfaces.md), named in [2.3](lessons/02-03-the-tokamak-recipe.md)

### Rational surface

A flux surface where $q = m/n$, so field lines close on themselves after $n$
toroidal and $m$ poloidal laps. Finite resistivity lets them reconnect there into
a chain of **magnetic islands**, across which heat short-circuits.

*Introduced:* [2.4](lessons/02-04-mhd-instabilities.md)

### Disruption

Global loss of stability: a **thermal quench** dumps the entire stored energy in
about a millisecond, followed by a **current quench** over tens of milliseconds
that drives halo currents and can produce a runaway-electron beam. The danger is
the *rate*, not the total energy.

$$W = 3nTV, \qquad V = 2\pi^2 R a^2$$

*Introduced:* [2.4](lessons/02-04-mhd-instabilities.md)

### Quasi-symmetry

A 3D field whose *magnitude* depends on the angles only through one helical
combination. That hidden symmetry gives a conserved momentum, pinning particle
orbits to flux surfaces exactly as axisymmetry does in a tokamak — which is how a
currentless stellarator wins back tokamak-grade confinement.

$$\lvert\mathbf{B}\rvert = \lvert\mathbf{B}\rvert\big(\psi,\; m\theta - n\phi\big)$$

*Introduced:* [2.5](lessons/02-05-stellarators.md)

### Volt-second budget

A central solenoid can only ramp its flux one way for so long before saturating,
and inductively driven current dies when the ramp stops. This is *why* a tokamak
is pulsed and a stellarator is not.

$$V_{\text{loop}} = \frac{d\Psi}{dt}, \qquad t_{\text{pulse}} \approx \frac{\Delta\Psi}{V_{\text{loop}}}$$

*Introduced:* [2.5](lessons/02-05-stellarators.md)

### Greenwald density limit

An empirical ceiling on line-averaged density that rises with plasma current —
push past it and the edge cools, radiates, and disrupts. Robust across every
tokamak ever built, but **not** a law of nature.

$$n_G\,[10^{20}\,\text{m}^{-3}] = \frac{I_p\,[\text{MA}]}{\pi a^2\,[\text{m}^2]}$$

*Introduced:* [2.6](lessons/02-06-operational-limits.md)

### Troyon beta limit

The ideal-MHD ceiling on pressure: cross it and the pressure-driven ballooning
modes switch on. Its headline consequence is that $\beta$ is stuck at a few
percent no matter what — the magnetic field always does the confining.

$$\beta_{\max}\,[\%] \approx \beta_N\,\frac{I_p\,[\text{MA}]}{a\,[\text{m}]\,B_t\,[\text{T}]}, \qquad \beta_N \approx 3$$

*Introduced:* [2.6](lessons/02-06-operational-limits.md)

### Spitzer resistivity

A plasma's resistance comes from electrons being deflected by ions, and a faster
electron barely feels the ion as it whips past — so resistivity *falls* with
temperature, the exact opposite of a metal wire.

$$\eta = \eta_0\,T_e^{-3/2}, \qquad \eta_0 \approx 5.2\times10^{-5}\,Z\,\ln\Lambda \ \ \Omega\cdot\text{m}\cdot\text{eV}^{3/2}$$

*Introduced:* [3.1](lessons/03-01-ohmic-heating-ceiling.md)

### Ohmic ceiling

Ohmic heating falls as $T^{-3/2}$ while losses climb as $T$, so they cross at one
stable temperature — around 1–2 keV, a factor of ten short of ignition. Every knob
enters under a weak $2/5$ power, so the ceiling cannot be pushed.

$$T_{\text{ceil}} = \left(\frac{\eta_0\, j^2\, \tau_E}{3\,n\,e}\right)^{2/5} \quad (T \text{ in eV})$$

*Introduced:* [3.1](lessons/03-01-ohmic-heating-ceiling.md)

### Beam penetration depth

A neutral beam thins out exponentially as it bores in. The engineering sweet spot
is $\lambda \sim a$: much shorter and the beam stops at the edge, much longer and
it *shines through* onto the far wall.

$$\frac{I_b(x)}{I_b(0)} = e^{-x/\lambda}, \qquad \lambda = \frac{1}{n_e\,\sigma_s}$$

*Introduced:* [3.2](lessons/03-02-neutral-beam-injection.md)

### Non-inductive current drive

Plasma current sustained by injected momentum (beams) or wave momentum (RF)
instead of a transformer, so it never runs down. It is the ticket to steady state
— and it costs real recirculating power, which is why the self-generated
**bootstrap current** (driven for free by the pressure gradient) has to supply
most of $I_p$ in an economical reactor.

*Introduced:* [3.2](lessons/03-02-neutral-beam-injection.md), [3.3](lessons/03-03-rf-heating-current-drive.md)

### Cyclotron resonance

A wave hands its energy to particles whose gyration keeps step with it — pushing
the swing at the swing's own rhythm. Because $B \propto 1/R$ in a tokamak, the
resonance is met at exactly one major radius: **the frequency you launch is the
radius you heat.**

$$\omega = \Omega(R) = \frac{qB(R)}{m}, \qquad R_{\text{res}} = \frac{R_0 B_0}{B_{\text{res}}}, \quad B_{\text{res}} = \frac{m\omega}{q}$$

*Introduced:* [3.3](lessons/03-03-rf-heating-current-drive.md)

### Anomalous transport

Heat crosses the field by a random walk, and what sets the step is not a gyroradius
(classical) or a banana-orbit width (neoclassical) but a *turbulent eddy* driven by
the plasma's own gradients. It runs 10–100 times above neoclassical and is why
$\tau_E$ comes from a regression fit, not a derivation.

$$\chi \sim \Delta^2\,\nu, \qquad \tau_E \sim \frac{a^2}{\chi}$$

*Introduced:* [3.4](lessons/03-04-transport-confinement-scaling.md)

### H-mode and the pedestal

Above a heating-power threshold the plasma edge spontaneously shears its own
turbulence apart, forming a thin **transport barrier** and a steep edge
**pedestal**. The whole stiff core profile rides up on it, nearly doubling
confinement at the same power — the enabling discovery of magnetic fusion.

$$\tau_E^{\,H} \approx 2\,\tau_E^{\,L}$$

*Introduced:* [3.4](lessons/03-04-transport-confinement-scaling.md)

### Scrape-off layer

The thin shell of **open** field lines just outside the separatrix (the last closed
flux surface). Follow one and it runs into a material surface — it "scrapes off"
whatever leaks out of the core, into a channel only about a millimetre wide.

*Introduced:* [3.5](lessons/03-05-scrape-off-layer-divertor.md)

### Divertor and the X-point

Extra poloidal-field coils create an **X-point** where the poloidal field vanishes
and the separatrix crosses itself; below it the SOL peels into two legs leading to
remote, cooled targets. The point is *remoteness and control* — deposit heat,
eroded impurities, and helium ash somewhere purpose-built and pumpable, far from
the fuel.

*Introduced:* [3.5](lessons/03-05-scrape-off-layer-divertor.md)

### Detachment

Seed a trace impurity (nitrogen, neon) so a cold, dense, radiating cloud parks
below the X-point and converts most of the exhaust into light before it reaches the
plate. Reactor divertors are designed around $f_{\text{rad}} \approx 0.9$.

*Introduced:* [3.5](lessons/03-05-scrape-off-layer-divertor.md)

### Sputtering yield

Wall atoms knocked out of the lattice per incident ion — a cue ball scattering a
rack. It rises with ion energy above a threshold and falls as the wall atom gets
heavier, which is why tungsten's yield is low.

$$Y \equiv \frac{\text{atoms sputtered}}{\text{incident ion}}, \qquad \Gamma_{\text{net}} = (1-r)\,Y\,\Gamma_{\text{in}}$$

*Introduced:* [3.6](lessons/03-06-first-wall-plasma-wall-interaction.md)

### Impurity cooling rate

How good a radiator one impurity ion is at this temperature. A hydrogen ion is
fully stripped and cannot radiate; tungsten (74 electrons) is never fully stripped
even at 100 million degrees, so a trace of it radiates away the power you paid
millions to inject.

$$P_{\text{rad}} = n_e\,n_Z\,L_Z(T) \qquad [L_Z] = \text{W}\,\text{m}^3$$

*Introduced:* [3.6](lessons/03-06-first-wall-plasma-wall-interaction.md)

### Tritium breeding ratio

New tritons made per triton burned. Self-sufficiency demands **strictly greater
than one**, because each fusion supplies only one neutron while leakage, parasitic
capture, decay, and the next plant's startup inventory all take a cut.

$$\text{TBR} = \frac{\text{tritons bred}}{\text{tritons burned}} = M_n \times \varepsilon, \qquad \text{design target } 1.05\text{–}1.15$$

*Introduced:* [4.1](lessons/04-01-tritium-breeding-fuel-cycle.md)

### Neutron multiplier

A material that turns one fast neutron into two, so the blanket can breed on more
neutrons than the plasma provides. It is not an optimization — without it the
breeding loop cannot close at all.

$$\ce{^{9}Be + n -> 2\,^{4}He + 2n}, \qquad \ce{^{208}Pb}(n,2n)\ \text{(threshold} \approx 7\ \text{MeV)}$$

*Introduced:* [4.1](lessons/04-01-tritium-breeding-fuel-cycle.md)

### Neutron wall loading

Neutron power per square metre of first wall — the single number that sets how fast
the structure accumulates damage, and therefore how often it must be replaced.

$$\Gamma_n \equiv \frac{P_n}{A_{\text{wall}}} \ \left[\text{MW/m}^2\right], \qquad A_{\text{wall}} \approx 4\pi^2 R a$$

*Introduced:* [4.2](lessons/04-02-neutrons-blankets-activation.md)

### Energy multiplication

Thermal energy out of the blanket per unit of neutron energy in. Exothermic
${}^{6}\text{Li}$ breeding and $(n,2n)$ reactions hand back more heat than the
neutron carried in. **Different question from TBR** — same multiplier helps both.

$$P_{\text{th}} = P_\alpha + M\,P_n, \qquad M \approx 1.1\text{–}1.3$$

*Introduced:* [4.2](lessons/04-02-neutrons-blankets-activation.md)

### Areal density

Grams of fuel a particle must plough through on its way out — the ICF figure of
merit. It sets both the confinement quality ($n\tau \propto \rho R/c_s$) and
whether the alphas stop inside the hot spot.

$$\rho R \ \ [\text{g/cm}^2], \qquad \rho R \propto \rho^{2/3} \text{ at fixed fuel mass}$$

*Introduced:* [4.3](lessons/04-03-inertial-confinement-implosion.md)

### Hot-spot ignition condition

The hot spot must be at least one alpha-range thick or the alphas leak out and the
spark never catches. This is the ICF twin of the Lawson threshold — trapping by
geometry instead of by a magnetic field.

$$\rho R \gtrsim 0.3\ \text{g/cm}^2 \ (\text{hot spot}), \qquad \rho R \sim 1\text{–}3\ \text{g/cm}^2 \ (\text{burn propagation})$$

*Introduced:* [4.3](lessons/04-03-inertial-confinement-implosion.md)

### Inertial confinement time

Nothing holds the fuel; it stays together only as long as a rarefaction takes to
cross it — tens of picoseconds. That short but *nonzero* time is a real term in a
real Lawson product.

$$\tau \sim \frac{R}{c_s}, \qquad c_s = \sqrt{\frac{T}{m_i}}$$

*Introduced:* [4.3](lessons/04-03-inertial-confinement-implosion.md)

### Direct vs. indirect drive

Point the beams at the capsule (efficient, but demands near-perfect illumination
uniformity), or fire them into a gold **hohlraum** whose walls re-radiate a
naturally uniform X-ray bath (symmetric and forgiving, but ~88 percent of the
laser energy heats gold and escapes). NIF chose indirect: **symmetry is destiny**.

*Introduced:* [4.4](lessons/04-04-inertial-confinement-drivers-nif.md)

### Target gain vs. plant gain

Two completely different finish lines. Target gain measures fusion energy against
the laser energy *delivered to the capsule*; plant gain measures it against the
grid energy the driver *drew*.

$$Q_{\text{target}} = \frac{E_{\text{fus}}}{E_{\text{laser}}}, \qquad Q_{\text{plant}} = \frac{E_{\text{fus}}}{E_{\text{wall}}} = \eta_{\text{driver}}\,Q_{\text{target}}$$

*Introduced:* [4.4](lessons/04-04-inertial-confinement-drivers-nif.md)

### Recirculating power

Electricity the plant generates and immediately spends on itself — cryoplant,
pumps, tritium systems, and above all the heating and current drive. Net
electricity is what's left, and the recirculating fraction is the single most
important plant-economics number.

$$P_{\text{recirc}} = P_{\text{aux}} + \frac{P_{\text{heat}}}{\eta_{\text{CD}}}, \qquad P_{\text{heat}} = \frac{P_{\text{fus}}}{Q}, \qquad f_{\text{rec}} = \frac{P_{\text{recirc}}}{P_{\text{gross}}} \lesssim 0.3$$

*Introduced:* [4.5](lessons/04-05-burning-plasma-to-power-plant.md)

## Formulas and rules

### Fusion fuels and their Q-values

| Fuel | Reaction | $Q$ | Product split | Min. ignition $T$ | Neutron burden |
|---|---|---|---|---|---|
| **D-T** | $\ce{^{2}_{1}H + ^{3}_{1}H -> ^{4}_{2}He + ^{1}_{0}n}$ | 17.6 MeV | $\alpha$ 3.5 / $n$ 14.1 | $\sim 4$ keV | heavy — 80 percent as 14.1 MeV neutrons |
| **D-D** (n branch) | $\ce{^{2}_{1}H + ^{2}_{1}H -> ^{3}_{2}He + ^{1}_{0}n}$ | 3.27 MeV | ${}^{3}$He 0.82 / $n$ 2.45 | $\sim 35$ keV | moderate — the 2.45 MeV diagnostic neutron |
| **D-D** (p branch) | $\ce{^{2}_{1}H + ^{2}_{1}H -> ^{3}_{1}H + ^{1}_{1}H}$ | 4.03 MeV | T 1.01 / p 3.02 | $\sim 35$ keV | none directly (but breeds T, which then fuses) |
| **D-³He** | $\ce{^{2}_{1}H + ^{3}_{2}He -> ^{4}_{2}He + ^{1}_{1}H}$ | 18.3 MeV | $\alpha$ 3.7 / p 14.7 | $\sim 30$ keV | low — only from D-D side reactions |

Two branches of D-D have roughly equal odds, averaging about 3.6 MeV. Both D-T and
D-³He put all the energy in charged products *except* D-T's neutron — which is
exactly why D-³He is called aneutronic and why D-T needs a blanket.

**Where the split comes from.** Products are born essentially from rest, so
momenta are equal and opposite and $E = p^2/2m$ gives the lighter particle the
larger share:

$$\frac{E_1}{E_2} = \frac{m_2}{m_1} \quad\Longrightarrow\quad \frac{E_n}{E_\alpha} = \frac{m_\alpha}{m_n} \approx 4$$

*From* [1.1](lessons/01-01-why-fusion-why-dt.md)

**Blanket reactions** (the second half of the fuel table — see also
[4.1](lessons/04-01-tritium-breeding-fuel-cycle.md)):

| Reaction | $Q$ | Neutron energy it wants |
|---|---|---|
| $\ce{^{6}Li(n,\alpha)^{3}H}$ | $+4.78$ MeV | **slow** — large cross-section at low energy |
| $\ce{^{7}Li(n,n'\alpha)^{3}H}$ | $-2.47$ MeV | **fast** — threshold reaction; returns the neutron |
| $\ce{^{9}Be}(n,2n)$ | multiplier | **fast** |
| $\ce{^{208}Pb}(n,2n)$ | multiplier | **fast**, threshold $\approx 7$ MeV |

Natural lithium is 7.5 percent ${}^{6}\text{Li}$, 92.5 percent ${}^{7}\text{Li}$.

### Tunneling and the cross-section

$$\sigma(E) = \frac{S(E)}{E}\,\exp\!\left(-\sqrt{\frac{E_G}{E}}\,\right), \qquad E_G = 2 m_r c^2 (\pi\alpha Z_1 Z_2)^2, \quad m_r = \frac{m_1 m_2}{m_1+m_2}$$

For D-T, $m_r \approx 1.2\,\text{u}$ and $E_G \approx 1.2\ \text{MeV}$. Because
$E_G \propto (Z_1Z_2)^2 m_r$, doubling the charge product roughly doubles the
barrier and shoves the whole reactivity curve to higher temperature — the charge
penalty, not just the yield, is why D-T wins.

*From* [1.2](lessons/01-02-coulomb-barrier-tunneling.md)

### D-T reactivity — the numbers to plug in

The lessons quote these repeatedly and never tabulate them. Units are m³/s.

| $T$ (keV) | $\langle\sigma v\rangle_{DT}$ | note |
|---|---|---|
| 5 | $\sim 1.3\times10^{-23}$ | steep tunneling wall; roughly $1/20$ of the 15 keV value |
| 10 | $\sim 1.1\times10^{-22}$ | |
| 15 | $2.6\times10^{-22}$ | the standard worked-example value |
| 20 | $4.2\times10^{-22}$ | |
| $\sim 65$ | $\sim 8.5\times10^{-22}$ | **the peak** — broad optimum spans roughly 15–70 keV |

D-D at 15 keV is about $3.0\times10^{-24}\ \text{m}^3/\text{s}$ — nearly two orders
of magnitude below D-T, and both D-D and D-³He peak far to the right of D-T's
optimum. Near 10 keV, $\langle\sigma v\rangle_{DT} \propto T^{2}$ (this is what
makes the triple product $T$-independent); between 5 and 15 keV it climbs about
twentyfold.

**Reactors run near 15 keV, not at the 65 keV peak** — because the quantity that
actually must be optimized is $\langle\sigma v\rangle/T^2$, and because
bremsstrahlung and the pressure you must hold both keep rising.

*From* [1.2](lessons/01-02-coulomb-barrier-tunneling.md) *and* [1.3](lessons/01-03-reactivity-power-density.md)

### Fusion power density

$$P_{\text{fus}} = n_D\,n_T\,\langle\sigma v\rangle\,E_{\text{fus}} \;\xrightarrow{\ 50\text{–}50\ }\; \frac{n^2}{4}\langle\sigma v\rangle E_{\text{fus}} \qquad [\text{W/m}^3]$$

- $P_{\text{fus}} \propto n^2$ — density is the steepest knob you own (and the one the Greenwald limit caps).
- $n_D n_T = x(1-x)n^2$ peaks at $x = \tfrac12$; **50–50 is the maximum of a parabola**, not a convention. A 65–35 mix costs 9 percent of the power.
- **Identical particles need a factor $\tfrac12$**: D-D uses $\tfrac12 n_D^2\langle\sigma v\rangle$; D-T (two species) does not.
- Alpha channel: $P_\alpha = \tfrac{n^2}{4}\langle\sigma v\rangle E_\alpha = 0.199\,P_{\text{fus}}$.

*From* [1.3](lessons/01-03-reactivity-power-density.md)

### Criteria, and what each one assumes

| Criterion | Statement | What it quietly assumes |
|---|---|---|
| Lawson | $n\tau_E \ge 12T/(\langle\sigma v\rangle E_\alpha)$; $\sim 1.5$–$2\times10^{20}\ \text{m}^{-3}\text{s}$ near 15 keV | 50–50 D-T; $T_e = T_i = T$; $W = 3nT$; **only the alpha's 3.5 MeV** heats the plasma; conduction losses lumped into one measured $\tau_E$ |
| Triple product | $nT\tau_E \gtrsim 3\times10^{21}\ \text{keV}\cdot\text{s}\cdot\text{m}^{-3}$ | everything above, **plus** $\langle\sigma v\rangle \propto T^2$ so the target is flat over roughly 10–20 keV — quoting it outside that window is a lie |
| Bremsstrahlung floor | ignition impossible below $T_{\min} \approx 4$ keV | pure D-T with no impurities; density cancels, so this is a pure temperature wall. **Impurity line radiation pushes the real floor higher** |
| Ignition | $\tfrac15 P_{\text{fus}} \ge W/\tau_E$; $Q\to\infty$ | fast alphas actually thermalize in the bulk instead of leaking or driving instabilities |
| Gain ladder | $Q = 1$ breakeven · $Q = 5$ alphas match the heater ($f_\alpha = \tfrac12$) · $Q = 10$ burning plasma ($f_\alpha = \tfrac23$) · $Q = \infty$ ignition | $Q$ ignores wall-plug and turbine losses entirely — see [Power-plant chain](#power-plant-chain) |

Crediting all 17.6 MeV instead of the alpha's 3.5 MeV would make ignition look
**five times easier than it is**. That missing factor of five *is* the ignition
triple product.

*From* [1.4](lessons/01-04-lawson-criterion-triple-product.md) *and* [1.5](lessons/01-05-ignition-breakeven-gain.md)

### Single-particle motion in a torus

$$r_L = \frac{m v_\perp}{\lvert q\rvert B}, \qquad \omega_c = \frac{\lvert q\rvert B}{m}, \qquad \mu = \frac{m v_\perp^2}{2B} \ \text{(invariant)}$$

$$v_d \approx \frac{2T}{qBR} \quad (\text{vertical, } \propto 1/q \text{ — ions and electrons opposite}), \qquad \mathbf{v}_{E\times B} = \frac{\mathbf{E}\times\mathbf{B}}{B^2}$$

The chain that kills a plain torus: $B_t \propto 1/R$ → curvature and grad-$B$
drifts separate charge vertically → a vertical $\mathbf E$ builds → $E\times B$ is
**charge-independent** and points radially outward → the whole plasma leaves in
milliseconds. No sign choice saves you; only rotational transform does.

*From* [2.1](lessons/02-01-bottles-to-tori.md)

### Tokamak parameter vocabulary

| Symbol | Name | Unit | Typical reactor range |
|---|---|---|---|
| $R$ | major radius | m | 1.85 (SPARC) – 6.2 (ITER) |
| $a$ | minor radius | m | 0.57 – 2.0 |
| $B_t$ | toroidal field on axis | T | 5 (ITER) – 12.2 (SPARC) |
| $I_p$ | plasma current | MA | 7.5 – 15 |
| $q_a$ | edge safety factor | — | keep above 2 (high-field compacts run $\sim 1.2$) |
| $q_0$ | on-axis safety factor | — | keep above 1 or you get sawteeth |
| $\beta$ | plasma beta | percent | 1.5 – 5 |
| $\beta_N$ | normalized beta | — | $\approx 3$ conventional; $>3$ is "advanced tokamak" |
| $n$ | density | $10^{20}\ \text{m}^{-3}$ | $\sim 1$ |
| $T$ | temperature | keV | 10 – 20 |
| $\tau_E$ | energy confinement time | s | 1 – 3 |
| $V$ | plasma volume $2\pi^2Ra^2$ | m³ | 12 (SPARC-scale) – 800+ (ITER-scale) |
| $A_{\text{wall}}$ | first-wall area $4\pi^2Ra$ | m² | $\sim 500$ – 800 |
| $\Gamma_n$ | neutron wall loading | MW/m² | 0.5 (ITER) – 3 (DEMO-class) |

**Machines at a glance:** JET 1997 — 16 MW from 24 MW, $Q \approx 0.67$.
ITER — 500 MW from 50 MW, $Q = 10$, no turbine, zero grid electricity by design.
SPARC — compact, ~12 T REBCO magnets, $Q > 2$. DEMO — the first machine intended
to sell electricity. W7-X — stellarator, built for 30-minute plasmas.
NIF (Dec 2022) — 3.15 MJ out of 2.05 MJ on target.

*From* [2.3](lessons/02-03-the-tokamak-recipe.md), [2.6](lessons/02-06-operational-limits.md), [3.4](lessons/03-04-transport-confinement-scaling.md), [4.5](lessons/04-05-burning-plasma-to-power-plant.md)

### Twist, equilibrium, and beta

$$B_p(a) = \frac{\mu_0 I_p}{2\pi a} \quad(\text{Ampère}), \qquad q(r) = \frac{r B_t}{R B_p} \quad\Longrightarrow\quad q_a = \frac{2\pi a^2 B_t}{\mu_0 R\, I_p}$$

$$\frac{B^2}{2\mu_0} = \text{magnetic pressure}, \qquad \beta = \frac{p}{B^2/2\mu_0}, \qquad p = 2nT \ (\text{electrons + ions})$$

- $q_a \propto 1/I_p$: **more current means less safety margin.** Designers push current down toward the $q$ floor, not away from it, because current buys confinement and density headroom.
- A 5 T field stores about $10^{7}$ Pa $\approx 100$ atm of magnetic pressure; a reactor plasma leans on only a few atm of it. To hold more pressure at fixed $\beta$ you need $B \propto \sqrt{p}$ — the entire high-field thesis.
- $\iota$ is quoted two ways: **radians per toroidal lap** ($\iota = 2\pi/q$) in [2.1](lessons/02-01-bottles-to-tori.md), and **turns per toroidal lap** ($\iota = 1/q$) in [2.5](lessons/02-05-stellarators.md). Check which before comparing numbers.
- Diamagnetic current from force balance: $J_\perp \approx \lvert\nabla p\rvert/B$.

*From* [2.2](lessons/02-02-mhd-equilibrium-flux-surfaces.md) *and* [2.3](lessons/02-03-the-tokamak-recipe.md)

### MHD instabilities — what drives each, what cages it

| Mode | Free energy it eats | Where / when it fires | What suppresses it | Consequence |
|---|---|---|---|---|
| **External kink** | plasma current | $q_a$ falls below $\sim 1$ (ideal) — real machines need $q_a \gtrsim 2$ | keep $q_a > 2$ (i.e. cap $I_p$); conducting wall; profile shaping | whole column corkscrews → disruption |
| **Internal $m=1$ kink / sawteeth** | current, on axis | $q_0$ drops below 1 | keep $q_0 > 1$; localized ECCD on axis | periodic core temperature crash; can seed other modes |
| **Interchange / ballooning** | pressure gradient | bad-curvature (outboard) side, above the $\beta$ limit | stay under Troyon $\beta_{\max}$; magnetic shear; good average curvature | pressure limit — the magnetized Rayleigh–Taylor |
| **Tearing / NTM** | current profile, plus bootstrap drive | rational surfaces $q = m/n$; **needs no limit crossing** — finite resistivity is enough | localized ECCD to refill the island; profile control | magnetic islands short-circuit heat across surfaces |
| **Density-limit disruption** | edge cooling and radiation | $n$ above the Greenwald limit $n_G$ | stay under $n_G$; deep pellet fueling can exceed it locally | radiative edge collapse → disruption |
| **Disruption (the endpoint)** | everything at once | when any global limit is crossed | avoidance + mitigation (massive gas / shattered-pellet injection) | thermal quench $\sim1$ ms, current quench tens of ms, halo currents, runaways |

A stellarator deletes the entire **current-driven** column of this table (no
plasma current to kink, tear, or disrupt) and keeps the pressure-driven one.

*From* [2.4](lessons/02-04-mhd-instabilities.md), [2.5](lessons/02-05-stellarators.md), [2.6](lessons/02-06-operational-limits.md)

### The operating box

Three fences bound the safe region, and they pull against each other:

$$\underbrace{n \le n_G = \frac{I_p[\text{MA}]}{\pi a^2}}_{\text{Greenwald — empirical}} \qquad \underbrace{\beta \le \beta_N\frac{I_p}{aB_t}}_{\text{Troyon — ideal MHD}} \qquad \underbrace{q_a = \frac{2\pi a^2 B_t}{\mu_0 R I_p} > 2}_{\text{kink — ideal MHD}}$$

Raising $I_p$ *lifts* the Greenwald and Troyon ceilings but *lowers* $q_a$ toward
the kink wall. The three meet at one current — the right-hand corner of the box.
The only ways out are a bigger machine, a stronger field, or advanced profiles.

*From* [2.6](lessons/02-06-operational-limits.md)

### Heating: what each scheme is for

| Scheme | Formula | Reaches | Good for |
|---|---|---|---|
| **Ohmic** | $P_\Omega = \eta j^2$; total $I_p^2R_p$ with $R_p = \eta\,2R/a^2$ | stalls at 1–2 keV | free startup heating, breakdown to ~1 keV |
| **NBI** | $P_0 = \eta_n I V$; $\lambda = 1/(n_e\sigma_s)$; $\dot N = P_0/E_b$ | core, if $\lambda \sim a$ | bulk heating **and** momentum → current drive (aim tangentially) |
| **ICRH** | $f_{ci} = qB/2\pi m_i$ — tens of MHz | core ions | bulk ion heating (ions are what fuse) |
| **ECRH / ECCD** | $f_{ce} = 28\ \text{GHz per tesla}$ | a layer a few cm wide | surgical, steerable control — kill an NTM at a chosen $q$ surface |
| **LHCD** | a few GHz; largest $\gamma_{\text{CD}}$ | off-axis | efficient bulk non-inductive current |

$$\eta(1\ \text{keV}) \approx 2.8\times10^{-8}\ \Omega\cdot\text{m} \ (\approx \text{copper}), \qquad P_\Omega \propto T^{-3/2}$$

$$I_{\text{CD}} \approx N_f\frac{Ze\,v_b}{2\pi R}\left(1-\frac{Z_b}{Z_{\text{eff}}}\right), \qquad N_f = \dot N\tau_s, \qquad \gamma_{\text{CD}} = \frac{\bar n\,I_{\text{CD}}\,R}{P}$$

Order of magnitude to carry: **driving 1 MA costs 25–30 MW** of beam or wave
power. A reactor wants 10–15 MA, so the bootstrap current has to supply most of
it or the recirculating budget dies.

*From* [3.1](lessons/03-01-ohmic-heating-ceiling.md), [3.2](lessons/03-02-neutral-beam-injection.md), [3.3](lessons/03-03-rf-heating-current-drive.md)

### Confinement scaling — ITER-98(y,2)

$$\tau_E \;\propto\; I_p^{0.93}\, B^{0.15}\, n^{0.41}\, P^{-0.69}\, R^{2}$$

Read the exponents as a design memo:

| Exponent | Reading |
|---|---|
| $I_p^{0.93}$ | **current is king** — nearly linear, the strongest favorable knob |
| $R^{2}$ | **size wins, steeply** — this is why ITER is enormous |
| $P^{-0.69}$ | **power degradation** — heating *hurts* confinement; $W = P\tau_E \propto P^{0.31}$ |
| $B^{0.15},\ n^{0.41}$ | weak; field and density buy confinement grudgingly |

Doubling the power costs 38 percent of $\tau_E$ and buys only 24 percent more
stored energy. To double $P$ at fixed $\tau_E$ you must raise $I_p$ by
$2^{0.69/0.93} = 1.67$ — straight toward the kink limit. **H-mode is the exception
that pays**: crossing $P_{\text{LH}}$ roughly doubles $\tau_E$ at the same power.

Transport hierarchy, smallest random-walk step first: classical (gyroradius) →
neoclassical (banana width, tens of times worse) → **anomalous** (turbulent eddy,
10–100 times above neoclassical, and what actually rules).

*From* [3.4](lessons/03-04-transport-confinement-scaling.md)

### Exhaust: SOL and divertor

$$q_\parallel \approx \frac{P_{\text{SOL}}}{2\pi R\,\lambda_q}, \qquad q_\perp = q_\parallel\sin\alpha, \qquad q_\perp^{\text{avg}} = \frac{(1-f_{\text{rad}})\,P_{\text{SOL}}}{A_{\text{wet}}}$$

$$A_{\text{wet}} = N_{\text{targets}}\times 2\pi R\,w, \qquad f_{\text{rad}} \ge 1 - \frac{q_\perp^{\text{lim}}\,A_{\text{wet}}}{P_{\text{SOL}}}$$

| Quantity | Value to assume |
|---|---|
| $\lambda_q$ (SOL power-decay width) | $\sim 1$ mm — and it barely grows with machine size |
| $q_\parallel$ (parallel flux) | hundreds to thousands of MW/m² |
| $\alpha$ (grazing angle at the target) | 1–3 degrees; $\sin 1.5^\circ \approx 0.026$, a factor ~38 |
| $q_\perp^{\text{lim}}$ (steady tungsten) | $\approx 10$ MW/m² |
| $f_{\text{rad}}$ (reactor design point) | 0.7–0.9 (detached / radiative divertor) |

Geometry alone never gets a reactor under the limit. You must radiate — but not
freely: push the detachment front above the X-point and you cool the edge, collapse
the pedestal, drop out of H-mode, or trigger a MARFE.

*From* [3.5](lessons/03-05-scrape-off-layer-divertor.md)

### Wall materials

$$\Gamma_{\text{out}} = Y\,\Gamma_{\text{in}}, \qquad v_{\text{recession}} = \frac{\Gamma_{\text{out}}}{n_{\text{atoms}}}, \qquad \Gamma_{\text{net}} = (1-r)\,Y\,\Gamma_{\text{in}}$$

| Property | Tungsten ($Z=74$) | Carbon ($Z=6$) | Beryllium ($Z=4$) |
|---|---|---|---|
| Melting | 3695 K (highest of any metal) | sublimes ~3900 K, no melt | 1560 K |
| Sputter yield | low (heavy lattice) | high, plus *chemical* erosion | moderate |
| Tritium retention | low | very high (hydrocarbon codeposits) | moderate |
| If it leaks to the core | severe — $L_W \sim 10^{-31}\ \text{W}\,\text{m}^3$, tolerable $f_W \lesssim 10^{-4}$ | mild (low-Z, fully strips) | mild — tolerable $f_{\text{Be}} \sim 10^{-2}$ |
| Verdict | **divertor** (and ITER's full-tungsten D-T wall) | abandoned — tritium inventory is a licensing showstopper | main wall in the original design |

High-Z is a liability *in the core* and a feature *in the divertor*, where you
*want* radiation. Location decides whether a property is a bug.

**Transient loads dominate the design.** Steady divertor flux $\sim10\ \text{MW/m}^2$
is survivable; ELMs eject a few percent of stored energy in under a millisecond,
and a disruption dumps everything in $\sim1$ ms — hundreds of MW/m², enough to
melt and crack tungsten.

*From* [3.6](lessons/03-06-first-wall-plasma-wall-interaction.md) *and* [2.4](lessons/02-04-mhd-instabilities.md)

### Fuel cycle and blanket arithmetic

$$\dot N = \frac{P_{\text{fus}}}{E_{\text{fus}}}, \qquad \dot m_T = \dot N\,m_T \approx 0.15\ \text{kg/day per GW of } P_{\text{fus}}$$

$$\dot m_{\text{injected}} = \frac{\dot m_T}{f_b} \quad (f_b \sim 3\ \text{percent}) \qquad \Delta\dot m_{\text{surplus}} = (\text{TBR}-1)\,\dot m_T$$

- A 3 GW plant burns about **0.46 kg of tritium per day** against a world stockpile of roughly 20 kg — six weeks. There is no supplier; the plant must breed.
- Tritium decays with $t_{1/2} = 12.3$ yr, about **5.5 percent per year**, which is one reason TBR must exceed 1.
- Only a few percent burns per pass, so the **circulating inventory is tens of times the burn rate** — that inventory, not the burn, dominates safety and licensing.
- Blanket damage: $\Gamma_n \times 10\ \text{dpa per MW}\cdot\text{yr/m}^2$; steel retires near **150 dpa**, so a 2–3 MW/m² wall lasts only about 4–8 full-power years. First wall and blanket are consumables.

$$P_n = \frac{14.1}{17.6}P_{\text{fus}} = 0.801\,P_{\text{fus}}, \qquad P_\alpha = \frac{3.5}{17.6}P_{\text{fus}} = 0.199\,P_{\text{fus}}$$

*From* [4.1](lessons/04-01-tritium-breeding-fuel-cycle.md) *and* [4.2](lessons/04-02-neutrons-blankets-activation.md)

### Inertial confinement

$$nT\tau \gtrsim 3\times10^{21}\ \text{keV}\cdot\text{s}\cdot\text{m}^{-3} \quad\text{— the same bar, opposite corner}$$

A tokamak meets it with $n \sim 10^{20}\ \text{m}^{-3}$ and $\tau_E \sim 1$ s; ICF
meets it with $n \sim 10^{31}\ \text{m}^{-3}$ and $\tau \sim 10^{-10}$ s. Eleven
orders of magnitude each way, cancelling.

$$\tau \sim \frac{R}{c_s}, \qquad \rho R \gtrsim 0.3\ \text{g/cm}^2, \qquad \rho R \propto \rho^{2/3}, \qquad M = \tfrac43\pi R^3\rho$$

$$\gamma_{\text{RT}} = \sqrt{A\,g\,k}, \qquad k = \frac{2\pi}{\lambda}, \qquad A = \frac{\rho_h - \rho_l}{\rho_h + \rho_l}$$

At implosion accelerations ($g \sim 10^{14}\ \text{m/s}^2$) a 10 μm ripple e-folds
in ~130 ps, so a nanosecond acceleration phase gives ~7 e-foldings and amplifies a
10 nm seed to ~18 μm — the shell thickness itself. Capsule surface finish and
ablative stabilization are what keep ICF alive.

**Reading the NIF result honestly:** $Q_{\text{target}} = 3.15/2.05 \approx 1.54$,
$\eta_{\text{driver}} = 2.05/300 \approx 0.7$ percent, so
$Q_{\text{plant}} \approx 0.011$. Only about 12 percent of the laser energy is
absorbed by the capsule, so the *capsule* gain against absorbed energy is ~13 — a
spectacular amplifier attached to a very lossy delivery system. A plant needs
target gains of order 50–100 with an efficient driver, plus roughly 10 shots per
second (about a million times NIF's rate).

*From* [4.3](lessons/04-03-inertial-confinement-implosion.md) *and* [4.4](lessons/04-04-inertial-confinement-drivers-nif.md)

### Power-plant chain

$$P_{\text{thermal}} = P_{\text{fus}}\left[\frac{14.1}{17.6}M + \frac{3.5}{17.6}\right] \xrightarrow{\ \times\eta\ } P_{\text{gross}} \xrightarrow{\ -\,P_{\text{recirc}}\ } P_{\text{net}}$$

$$P_{\text{recirc}} = P_{\text{aux}} + \frac{P_{\text{fus}}/Q}{\eta_{\text{CD}}}, \qquad \text{LCOE} = \frac{\text{annual fixed cost}}{P_{\text{net}}\times 8760 \times a}$$

| Factor | Value |
|---|---|
| $M$ (blanket energy multiplication) | 1.1–1.3; at $M=1.2$ the whole chain gives $P_{\text{thermal}}/P_{\text{fus}} = 1.16$ |
| $\eta$ (thermal to electric) | 0.35–0.40 — Carnot, not fusion's fault |
| $\eta_{\text{CD}}$ (heating wall-plug) | 0.3–0.5 |
| $f_{\text{rec}}$ | want well under 0.3; at $Q = 10$ a DEMO-class plant can sit near 0.8 |
| $Q$ for a grid-relevant plant | roughly **25–40**, or heavy bootstrap — not 10 |

Because the cost is almost all up-front capital, LCOE scales as $1/a$: halving
availability nearly doubles the price of every megawatt-hour. Neutron damage sets
component lifetime, component lifetime sets availability, availability sets the
economics — **materials, not plasma physics, may be the binding constraint.**

*From* [4.5](lessons/04-05-burning-plasma-to-power-plant.md)

### Constants and conversions

| Constant | Value |
|---|---|
| $e$ | $1.602\times10^{-19}$ C |
| 1 eV / 1 keV / 1 MeV | $1.602\times10^{-19}$ / $1.602\times10^{-16}$ / $1.602\times10^{-13}$ J |
| 1 keV in kelvin | $1.16\times10^{7}$ K (so 10 keV is "a hundred million degrees") |
| 1 u | $1.661\times10^{-27}$ kg $= 931.494\ \text{MeV}/c^2$ |
| $\mu_0$ | $4\pi\times10^{-7}\ \text{T}\cdot\text{m/A}$ |
| $e^2/4\pi\varepsilon_0$ | $1.44\ \text{MeV}\cdot\text{fm}$ (the handy Coulomb-barrier packaging) |
| $\alpha$ (fine structure) | $1/137$ |
| $r_0$ (nuclear radius) | $1.2$ fm, with $R \approx r_0A^{1/3}$ |
| $m_p$, $m_e$ | $1.673\times10^{-27}$ kg, $9.11\times10^{-31}$ kg |
| $m_D$, $m_T$, $m_i$(D-T mix) | $3.34\times10^{-27}$, $5.01\times10^{-27}$, $4.15\times10^{-27}$ kg |
| $E_{\text{fus}}$ (D-T) | 17.6 MeV $= 2.82\times10^{-12}$ J; $E_\alpha = 3.5$ MeV $= 5.61\times10^{-13}$ J |
| $C_B$ (bremsstrahlung) | $5.35\times10^{-37}\ \text{W}\,\text{m}^3\,\text{keV}^{-1/2}$ |
| $\eta_0$ (Spitzer, $Z=1$, $\ln\Lambda=17$) | $8.9\times10^{-4}\ \Omega\cdot\text{m}\cdot\text{eV}^{3/2}$ |
| $f_{ce}$ | 28 GHz per tesla; $f_{ci}$(D) $\approx 7.6$ MHz/T, $f_{ci}$(H) $\approx 15.2$ MHz/T |
| 1 day / 1 year | $86{,}400$ s / $3.15\times10^{7}$ s ($8760$ h) |
| $N_A$ | $6.022\times10^{23}$ mol⁻¹ |

## Assumed, not taught here

A Tier 2 engineering course: it *uses* the following without deriving them, and
every row points at the course that does.

| Fact | Where it's taught |
|---|---|
| Binding-energy curve; reaction $Q$-values from mass defect | [intro-nuclear-engineering 1.2](../intro-nuclear-engineering/lessons/01-02-binding-energy-chart-of-nuclides.md), [1.5](../intro-nuclear-engineering/lessons/01-05-nuclear-reactions-q-values.md) |
| Cross-sections, mean free path, $1/v$ and resonances | [intro-nuclear-engineering 2.1](../intro-nuclear-engineering/lessons/02-01-microscopic-cross-section.md), [2.2](../intro-nuclear-engineering/lessons/02-02-macroscopic-cross-section-mean-free-path.md), [2.3](../intro-nuclear-engineering/lessons/02-03-energy-dependence-1-over-v-resonances.md) |
| Neutron moderation (why a blanket needs a slow region) | [intro-nuclear-engineering 2.4](../intro-nuclear-engineering/lessons/02-04-moderation-slowing-neutrons.md) |
| Radioactive decay law (tritium's 12.3 yr, activation decay) | [intro-nuclear-engineering 1.3](../intro-nuclear-engineering/lessons/01-03-radioactivity-decay-law.md) |
| Barrier tunneling and the WKB transmission factor | [quantum-mechanics 2.5](../quantum-mechanics/lessons/02-05-scattering-barriers-tunneling.md), [6.4](../quantum-mechanics/lessons/06-04-wkb-approximation.md) |
| The Maxwell–Boltzmann distribution being averaged over in $\langle\sigma v\rangle$ | [stat-mech 3.1](../stat-mech/lessons/03-01-canonical-ensemble-boltzmann-factor.md), [3.4](../stat-mech/lessons/03-04-equipartition-theorem.md) |
| Debye shielding and quasineutrality (why $n_e = n_i$ throughout) | [plasma-physics 1.1](../plasma-physics/lessons/01-01-what-is-a-plasma-debye.md) |
| Gyromotion, $E\times B$, grad-$B$, curvature and polarization drifts | [plasma-physics 1.3](../plasma-physics/lessons/01-03-gyration-exb-drift.md), [1.4](../plasma-physics/lessons/01-04-gradb-curvature-polarization-drifts.md) |
| The invariant $\mu$, mirror trapping and the loss cone | [plasma-physics 1.5](../plasma-physics/lessons/01-05-adiabatic-invariants-mirrors.md) |
| Ideal MHD, frozen-in flux, magnetic pressure and tension | [plasma-physics 3.2](../plasma-physics/lessons/03-02-ideal-mhd-frozen-flux.md), [3.3](../plasma-physics/lessons/03-03-magnetic-pressure-tension-beta.md) |
| MHD equilibrium and the energy principle behind the stability limits | [plasma-physics 3.4](../plasma-physics/lessons/03-04-mhd-equilibrium-pinches.md), [3.5](../plasma-physics/lessons/03-05-mhd-stability-energy-principle.md) |
| Cold-plasma dielectric — why an RF wave propagates, cuts off, and resonates | [plasma-physics 4.1](../plasma-physics/lessons/04-01-langmuir-cold-plasma-dielectric.md), [4.3](../plasma-physics/lessons/04-03-em-alfven-waves.md) |
| Coulomb collisions behind Spitzer resistivity and fast-ion slowing-down | [plasma-physics 4.4](../plasma-physics/lessons/04-04-instabilities-two-stream-drift.md) (instability side) and the collision treatment in [plasma-physics 3.1](../plasma-physics/lessons/03-01-two-fluid-equations.md) |
| Magnetic reconnection (the mechanism behind tearing modes) | [plasma-physics 5.4](../plasma-physics/lessons/05-04-magnetic-reconnection.md) |
| Lorentz force; Ampère's law for a wire; Faraday's law (the transformer) | [em-refresher 3.1](../em-refresher/lessons/03-01-magnetic-force.md), [3.2](../em-refresher/lessons/03-02-sources-of-magnetic-field.md), [3.3](../em-refresher/lessons/03-03-electromagnetic-induction.md) |
| EM wave propagation and energy flux | [em-refresher 4.2](../em-refresher/lessons/04-02-electromagnetic-waves.md), [4.3](../em-refresher/lessons/04-03-energy-poynting.md) |
| $I^2R$ Joule heating (with the temperature dependence *flipped* for a plasma) | [circuits 1.1](../circuits/lessons/01-01-charge-current-voltage-power.md), [1.2](../circuits/lessons/01-02-ohms-law-equivalent-resistance.md) |
| Two-body momentum conservation setting the 14.1 / 3.5 MeV split | [mechanics-refresher 2.3](../mechanics-refresher/lessons/02-03-momentum-collisions.md) |
| Rayleigh–Taylor instability, and turbulence as a transport mechanism | [fluid-dynamics 4.3](../fluid-dynamics/lessons/04-03-instability-kh-rb.md), [4.5](../fluid-dynamics/lessons/04-05-turbulence-kolmogorov.md) |
| Elliptic boundary-value problems (what Grad–Shafranov *is*) | [pdes 2.3](../pdes/lessons/02-03-laplace-poisson-equations.md) |
| Carnot limit and the Rankine steam cycle behind $\eta \approx 0.35$ | [engineering-thermodynamics 3.1](../engineering-thermodynamics/lessons/03-01-second-law-carnot-limit.md), [4.1](../engineering-thermodynamics/lessons/04-01-rankine-vapor-power-cycle.md) |
| Displacement damage, dpa, swelling and embrittlement | [nuclear-materials 1.4](../nuclear-materials/lessons/01-04-kinchin-pease-nrt-dpa.md), [2.6](../nuclear-materials/lessons/02-06-embrittlement-dbtt-shift.md), [4.5](../nuclear-materials/lessons/04-05-materials-for-fusion.md) |
| Activation dose, shielding and attenuation | [radiation-detection-shielding 3.3](../radiation-detection-shielding/lessons/03-03-dose-from-a-source.md), [4.1](../radiation-detection-shielding/lessons/04-01-exponential-attenuation-hvl.md) |
| LCOE and capital-cost-dominated plant economics | [nuclear-fuel-cycle 4.4](../nuclear-fuel-cycle/lessons/04-04-nuclear-economics-lcoe.md) |

## Pitfalls

### Symbols that collide

- $Q$ is a **reaction energy** in MeV ([1.1](lessons/01-01-why-fusion-why-dt.md)) and a **dimensionless gain** ([1.5](lessons/01-05-ignition-breakeven-gain.md)) — and in the drift formula $v_d \approx 2T/qBR$ it is a **charge**. Read the units.
- $\eta$ is Spitzer resistivity in [3.1](lessons/03-01-ohmic-heating-ceiling.md) and thermal efficiency in [4.5](lessons/04-05-burning-plasma-to-power-plant.md); $\eta_n$ and $\eta_{\text{CD}}$ and $\eta_{\text{driver}}$ are three more efficiencies. *([3.2](lessons/03-02-neutral-beam-injection.md), [4.4](lessons/04-04-inertial-confinement-drivers-nif.md))*
- $a$ is the minor radius everywhere except [4.5](lessons/04-05-burning-plasma-to-power-plant.md), where it is availability; $\alpha$ is an alpha particle, the fine-structure constant, and a divertor grazing angle. *([1.2](lessons/01-02-coulomb-barrier-tunneling.md), [3.5](lessons/03-05-scrape-off-layer-divertor.md))*
- $M$ is blanket **energy** multiplication, $M_n$ is **neutron** multiplication, $R_m$ is a mirror ratio. *([2.1](lessons/02-01-bottles-to-tori.md), [4.1](lessons/04-01-tritium-breeding-fuel-cycle.md), [4.2](lessons/04-02-neutrons-blankets-activation.md))*
- $\iota = 2\pi/q$ (radians per lap) in [2.1](lessons/02-01-bottles-to-tori.md) but $\iota = 1/q$ (turns per lap) in [2.5](lessons/02-05-stellarators.md). Both are standard; state which you mean.
- $p$ is pressure, but is it $nT$ (single species) or $2nT$ (electrons plus ions)? [2.3](lessons/02-03-the-tokamak-recipe.md) uses both in one lesson and the answer differs by a factor of two.

### Reactions and energy bookkeeping

- Only the alpha's 3.5 MeV — one fifth — stays to heat the plasma; the 14.1 MeV neutron leaves instantly. Crediting all 17.6 MeV makes ignition look five times easier than it is. *([1.1](lessons/01-01-why-fusion-why-dt.md), [1.5](lessons/01-05-ignition-breakeven-gain.md), [4.2](lessons/04-02-neutrons-blankets-activation.md))*
- "Aneutronic" means *low* neutron yield, not none — D-D side reactions still fire in any deuterium-bearing D-³He plasma. *([1.1](lessons/01-01-why-fusion-why-dt.md))*
- Fuel value lives in the *difference* in binding energy per nucleon, not the level — iron-56 has the highest $B/A$ and releases nothing either way. *([1.1](lessons/01-01-why-fusion-why-dt.md))*
- Identical-particle reactions carry a factor $\tfrac12$ ($\tfrac12 n_D^2\langle\sigma v\rangle$ for D-D); two-species D-T does not. Mixing them up double-counts. *([1.3](lessons/01-03-reactivity-power-density.md))*
- $\langle\sigma v\rangle$ is a steep function of $T$ — a factor of 20 between 5 and 15 keV. Quote it *with* its temperature or the power number is meaningless. *([1.3](lessons/01-03-reactivity-power-density.md))*
- Don't operate at the reactivity peak (~65 keV). Reactors sit near 15 keV because $\langle\sigma v\rangle/T^2$, not $\langle\sigma v\rangle$, is what must be maximized. *([1.3](lessons/01-03-reactivity-power-density.md), [1.4](lessons/01-04-lawson-criterion-triple-product.md))*

### Temperature and tunneling

- "10 keV" is a *distribution*, not every ion's energy. The ions that fuse are the rare fast ones near $E_0 \approx 3\times$ the mean. *([1.2](lessons/01-02-coulomb-barrier-tunneling.md))*
- You cannot "just heat past the barrier" — the mean energy would have to reach 450 keV ($\sim3\times10^9$ K) and the plasma would radiate itself to death first. Tunneling isn't a workaround, it's the enabling physics. *([1.2](lessons/01-02-coulomb-barrier-tunneling.md))*
- $E_G \propto (Z_1Z_2)^2 m_r$, so higher-charge fuels are dramatically harder — that charge penalty, not the yield, is the deeper reason D-T is first. *([1.2](lessons/01-02-coulomb-barrier-tunneling.md))*

### Criteria and milestones

- The triple product is **not** $n\tau_E$. A bare $n\tau_E$ needs a temperature quoted alongside it; $nT\tau_E$ absorbs that, which is why it is the fair cross-device metric. *([1.4](lessons/01-04-lawson-criterion-triple-product.md))*
- Ignition is a far stiffer bar than breakeven, and $Q = 10$ is neither. *([1.4](lessons/01-04-lawson-criterion-triple-product.md), [1.5](lessons/01-05-ignition-breakeven-gain.md))*
- The bremsstrahlung floor is a *temperature* wall — density cancels, so no bigger or better-insulated machine buys you a 3 keV reactor. And real losses are worse than bremsstrahlung: impurity line radiation (tungsten!) raises the effective floor. *([1.4](lessons/01-04-lawson-criterion-triple-product.md), [3.6](lessons/03-06-first-wall-plasma-wall-interaction.md))*
- "$Q > 1$" is not net electricity, at any scale: it ignores wall-plug efficiency, the turbine, and the plant's fixed loads. *([1.5](lessons/01-05-ignition-breakeven-gain.md), [4.4](lessons/04-04-inertial-confinement-drivers-nif.md), [4.5](lessons/04-05-burning-plasma-to-power-plant.md))*

### Magnetic geometry and equilibrium

- A magnetic field is a wall in **two** directions only; along $\mathbf B$ particles stream at thermal speed, which is why every open-ended machine leaks. *([2.1](lessons/02-01-bottles-to-tori.md))*
- Bending the bottle into a torus is the *start* of the hard part, not the finish — a torus without rotational transform confines nothing. *([2.1](lessons/02-01-bottles-to-tori.md), [2.5](lessons/02-05-stellarators.md))*
- $E\times B$ is the one drift that is **charge-independent**, which is exactly what makes the charge-separation field lethal: it moves the whole plasma together. *([2.1](lessons/02-01-bottles-to-tori.md))*
- $\mathbf J$ and $\mathbf B$ do **not** point along $\nabla p$ — they lie *inside* the constant-pressure surfaces, and the balance is static, nothing moves. *([2.2](lessons/02-02-mhd-equilibrium-flux-surfaces.md))*
- Flux surfaces are not centred on the vessel: the Shafranov shift pushes the magnetic axis outboard, and it grows with $\beta$. Aim your probes and heating accordingly. *([2.2](lessons/02-02-mhd-equilibrium-flux-surfaces.md))*
- Grad–Shafranov is a nonlinear elliptic BVP solved by a code, not a formula you evaluate. "Reading an equilibrium" means interpreting the computed surfaces. *([2.2](lessons/02-02-mhd-equilibrium-flux-surfaces.md))*
- The huge toroidal field confines nothing by itself; the small poloidal field supplies the twist. The strong field is the scaffold, the weak field is the glue. *([2.3](lessons/02-03-the-tokamak-recipe.md))*
- "Safety factor" names the danger, not the goal — you *want* $q$ as low as safety allows, because low $q$ means high current, better confinement, and a higher density limit. *([2.3](lessons/02-03-the-tokamak-recipe.md), [2.6](lessons/02-06-operational-limits.md))*

### Stability and limits

- $q_a > 1$ is the ideal-column theorem; $q_a \gtrsim 2$ is the engineering rule. Separately, $q_0 > 1$ on **axis** guards against sawteeth. Two surfaces, two fences — don't collapse them. *([2.4](lessons/02-04-mhd-instabilities.md), [2.6](lessons/02-06-operational-limits.md))*
- Tearing modes need no limit to be crossed — finite resistivity alone lets them grow in a plasma ideal MHD calls perfectly stable. *([2.4](lessons/02-04-mhd-instabilities.md))*
- A disruption is not a slow leak: the danger is the *rate*. A millisecond in the denominator turns 200 MJ into a wall-destroying flux. *([2.4](lessons/02-04-mhd-instabilities.md))*
- Greenwald is **empirical** — a strong warning line, exceedable locally with deep pellet fueling. Troyon and the kink limit come straight from ideal MHD. Don't grant them the same status. *([2.6](lessons/02-06-operational-limits.md))*
- Chasing high $\beta$ is the wrong target: $\beta$ is capped at a few percent regardless. What you chase is the triple product, and high field lets you raise pressure in absolute terms at modest $\beta$. *([2.6](lessons/02-06-operational-limits.md))*
- A stellarator's currentless plasma is not fundamentally worse-confined — quasi-symmetry restores it — and "no plasma current" deletes only the *current-driven* modes; pressure-driven modes and a $\beta$ limit survive. Conversely, tokamaks are not doomed to pulse: current drive plus bootstrap is the escape, at a recirculating-power cost. *([2.5](lessons/02-05-stellarators.md))*

### Heating, current drive, and transport

- A plasma's resistivity **falls** as $T^{-3/2}$ where a metal wire's rises — same $I^2R$ formula, opposite sign of the temperature dependence. The ohmic heater shuts itself off as it succeeds. *([3.1](lessons/03-01-ohmic-heating-ceiling.md))*
- You cannot crank $j$ or $n$ past the ohmic ceiling: both are capped by the kink and Greenwald limits, and the $2/5$ exponent means a 300-fold change would be needed anyway. But ohmic heating is still indispensable — it is how every tokamak starts. *([3.1](lessons/03-01-ohmic-heating-ceiling.md))*
- Beams are neutral because *charged* particles cannot cross the confining field at all — not because neutrals are gentler. And too energetic a beam **shines through** onto the far wall. *([3.2](lessons/03-02-neutral-beam-injection.md))*
- Heating and current drive are different knobs: energy deposits regardless of aim, but current needs *directed* momentum, so a perpendicular beam drives almost nothing. *([3.2](lessons/03-02-neutral-beam-injection.md), [3.3](lessons/03-03-rf-heating-current-drive.md))*
- RF heating is resonant and **local** — one thin layer, one species. Miss the resonance and the wave reflects or heats nothing useful. ICRH and ECRH differ by the mass ratio in frequency, in who gets heated, and in hardware; they are not interchangeable. *([3.3](lessons/03-03-rf-heating-current-drive.md))*
- Non-inductive current drive is not free: ~30 MW per mega-amp, which is why bootstrap current is what makes steady state affordable. *([3.3](lessons/03-03-rf-heating-current-drive.md), [4.5](lessons/04-05-burning-plasma-to-power-plant.md))*
- More heating power gives **worse** confinement ($\tau_E \propto P^{-0.69}$, $W \propto P^{0.31}$). You cannot power your way to ignition. *([3.4](lessons/03-04-transport-confinement-scaling.md))*
- Classical and neoclassical transport are a *floor*; quoting neoclassical confinement for a tokamak overestimates it by an order of magnitude. And the ITER-98 scaling is a regression fit valid inside its database, not a law — ITER extrapolates well beyond it. *([3.4](lessons/03-04-transport-confinement-scaling.md))*
- H-mode is not a pure win: the pedestal that doubles $\tau_E$ also erupts as ELMs onto the divertor. *([3.4](lessons/03-04-transport-confinement-scaling.md), [3.6](lessons/03-06-first-wall-plasma-wall-interaction.md))*

### Exhaust and the wall

- A bigger machine barely helps the heat flux: $\lambda_q$ stays around a millimetre while a larger reactor produces *more* exhaust power. Exhaust gets harder at reactor scale, not easier. *([3.5](lessons/03-05-scrape-off-layer-divertor.md))*
- The divertor is about **remoteness and control** — a replaceable, pumped, purpose-built target far from the fuel — not merely "the wall where the plasma lands." *([3.5](lessons/03-05-scrape-off-layer-divertor.md))*
- You cannot push $f_{\text{rad}} \to 1$: let the radiating front climb above the X-point and you cool the edge, collapse the pedestal, and lose H-mode. Nor can you tilt the target to $\alpha \to 0$ — the footprint runs off the plate and tile leading edges catch the full $q_\parallel$. *([3.5](lessons/03-05-scrape-off-layer-divertor.md))*
- Erosion is usually *not* the main danger of sputtering (over 90 percent redeposits). The sharp dangers are the fraction reaching the core to radiate, and the tritium those codeposits trap. *([3.6](lessons/03-06-first-wall-plasma-wall-interaction.md))*
- High-Z is bad *in the core* and good *in the divertor* — location decides whether the property is a bug or a feature. *([3.6](lessons/03-06-first-wall-plasma-wall-interaction.md))*
- Size the wall for the **transients** (ELMs, disruptions), not the steady 10 MW/m². *([3.6](lessons/03-06-first-wall-plasma-wall-interaction.md), [2.4](lessons/02-04-mhd-instabilities.md))*

### Fuel cycle, blanket, and plant

- TBR $= 1$ is not self-sufficiency: tritium decays at 5.5 percent per year in your pipes and the next plant needs a startup inventory. Target 1.05–1.15. *([4.1](lessons/04-01-tritium-breeding-fuel-cycle.md))*
- Slow neutrons are not always better. Moderate everything and you lose the ${}^{7}\text{Li}$ channel *and* the $(n,2n)$ multiplication, both fast-neutron reactions. A good blanket has a fast region and a slow region. *([4.1](lessons/04-01-tritium-breeding-fuel-cycle.md))*
- The tritium you must *handle* is tens of times what you burn, because only a few percent fuses per pass — the circulating inventory dominates safety and licensing. *([4.1](lessons/04-01-tritium-breeding-fuel-cycle.md))*
- TBR and energy multiplication $M$ answer different questions (tritons bred vs. heat returned), even though the same multiplier helps both. *([4.2](lessons/04-02-neutrons-blankets-activation.md))*
- The plasma is not where a fusion plant makes power — 80 percent leaves on neutrons and the electricity is generated in the **blanket**. *([4.2](lessons/04-02-neutrons-blankets-activation.md))*
- Fusion activation is real but categorically different from fission waste: no actinides, and reduced-activation alloys decay in decades to a century. A shielding-and-recycling problem, not a repository problem. *([4.2](lessons/04-02-neutrons-blankets-activation.md))*
- ICF fuel is not "unconfined" — its own inertia holds it for ~100 ps, and that is a genuine $\tau$ in a genuine Lawson product. *([4.3](lessons/04-03-inertial-confinement-implosion.md))*
- The ICF figure of merit is $\rho R$, not $T$ or $\rho$ alone; and you compress to trap the **alphas**, not primarily to heat the fuel. *([4.3](lessons/04-03-inertial-confinement-implosion.md))*
- Rayleigh–Taylor needs no gravity — the implosion's own $10^{14}\ \text{m/s}^2$ plays that role, and *short* wavelengths grow fastest, so nanometre surface finish is what matters. *([4.3](lessons/04-03-inertial-confinement-implosion.md))*
- NIF's "ignition" is $Q_{\text{target}} > 1$, roughly a hundredfold short of plant gain; and indirect drive is not "better" than direct drive, it trades 88 percent of the laser energy for symmetry. *([4.4](lessons/04-04-inertial-confinement-drivers-nif.md))*
- ITER has no turbine and will send **zero** watts to the grid, by design; DEMO is the machine that makes electricity. *([4.5](lessons/04-05-burning-plasma-to-power-plant.md))*
- $Q = 10$ can leave a razor-thin net at the busbar once Carnot, heater wall-plug efficiency, and fixed loads are paid — grid-relevant plants want $Q$ of order 25–40 or heavy bootstrap. And pulsed-vs-steady is not a detail: it sets availability, and LCOE scales as $1/a$. *([4.5](lessons/04-05-burning-plasma-to-power-plant.md))*
