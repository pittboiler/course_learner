# Reactor Physics & Neutron Transport · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

The whole course answers one question — *where do the neutrons go?* — at four
levels of honesty: the exact transport equation, the diffusion approximation you
can actually solve, the buckling algebra that decides what size goes critical,
and the point-kinetics ODEs that let power move in time. This card carries the
machinery you'd otherwise go hunting for mid-problem: the diffusion equation with
its four boundary conditions, the buckling and flux shape of every standard
geometry, the point-kinetics equations with the prompt-jump approximation and the
one-dollar line where it stops being true, the reactivity coefficients, and the
xenon/samarium poison dynamics. Entry-level nuclear vocabulary — barns, the 1/v
law, decay constants, fission energy, the four factors as *definitions* — lives on
the [intro-nuclear-engineering card](../intro-nuclear-engineering/reference.md)
and is pointed at rather than repeated.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\psi(\mathbf r,\hat\Omega,E,t)$ | angular flux — neutrons in one phase-space cell (position, direction, energy), weighted by speed | [1.1](lessons/01-01-neutron-balance-transport-equation.md) |
| $\hat\Omega$ | unit vector giving a neutron's direction of travel | [1.1](lessons/01-01-neutron-balance-transport-equation.md) |
| $\phi$ | scalar flux — total neutron track length laid down per cm³ per second; direction thrown away | [1.1](lessons/01-01-neutron-balance-transport-equation.md) |
| $\mathbf J$ | net current — the small directional *imbalance* left after random motion cancels | [1.1](lessons/01-01-neutron-balance-transport-equation.md) |
| $\chi(E)$ | fission spectrum — probability a fission neutron is born at energy $E$; integrates to 1 | [1.1](lessons/01-01-neutron-balance-transport-equation.md) |
| $S$, $S_0$ | external (non-fission) source: startup source, calibration source, spontaneous fission | [1.1](lessons/01-01-neutron-balance-transport-equation.md) |
| $\Sigma_t,\Sigma_a,\Sigma_s,\Sigma_f,\Sigma_\gamma$ | macroscopic cross sections (cm⁻¹): total, absorption, scattering, fission, radiative capture | [1.2](lessons/01-02-cross-sections-flux-reaction-rates.md) |
| $N$, $\sigma$ | nuclei per cm³, and the microscopic cross section (cm², quoted in barns) | [1.2](lessons/01-02-cross-sections-flux-reaction-rates.md) |
| $\lambda$ | mean free path $1/\Sigma$ — average straight flight between reactions (**not** a decay constant here) | [1.2](lessons/01-02-cross-sections-flux-reaction-rates.md) |
| $\bar\Sigma_x$ | one-group (flux-weighted) cross section that reproduces the true reaction rate | [1.2](lessons/01-02-cross-sections-flux-reaction-rates.md) |
| $D$ | diffusion coefficient (cm) — how freely neutrons random-walk; $D=\lambda_{tr}/3$ | [1.3](lessons/01-03-diffusion-approximation-ficks-law.md) |
| $\Sigma_{tr}$, $\lambda_{tr}$ | transport cross section and transport mean free path — total, with forward scattering discounted | [1.3](lessons/01-03-diffusion-approximation-ficks-law.md) |
| $\bar\mu_0$ | average cosine of the scattering angle — how much a neutron keeps going forward after a hit | [1.3](lessons/01-03-diffusion-approximation-ficks-law.md) |
| $\tilde a,\tilde R,\tilde H$ | **extrapolated** dimensions — the tilde always means "physical size plus the extrapolation distance" | [1.4](lessons/01-04-one-group-diffusion-boundary-conditions.md) |
| $L$, $L^2$ | diffusion length and diffusion area — crow-flight reach of a *thermal* neutron before capture | [1.5](lessons/01-05-diffusion-length-source-problems.md) |
| $k_\infty$ | multiplication of an infinite (leak-free) lattice — composition alone | [2.1](lessons/02-01-k-infinity-four-factor-formula.md) |
| $\eta,f,p,\varepsilon$ | the four factors: reproduction, thermal utilization, resonance escape, fast fission | [2.1](lessons/02-01-k-infinity-four-factor-formula.md) |
| $k_{\text{eff}}$ | the multiplication that actually runs the reactor — $k_\infty$ minus what leaks | [2.2](lessons/02-02-leakage-six-factor-formula.md) |
| $P_{FNL},P_{TNL}$ | non-leakage probabilities — fraction that *stays in* while fast, and while thermal | [2.2](lessons/02-02-leakage-six-factor-formula.md) |
| $B^2$ | buckling (cm⁻²) — how sharply the flux must curve; one quantity, read two ways | [2.2](lessons/02-02-leakage-six-factor-formula.md) |
| $B_m^2$, $B_g^2$ | material buckling (curvature the mix can afford) and geometric buckling (curvature the shape forces) | [2.3](lessons/02-03-criticality-condition-geometric-buckling.md) |
| $J_0$ | zeroth-order Bessel function; its first zero $2.405$ sets a cylinder's radial buckling | [2.4](lessons/02-04-bare-reactor-geometries-flux-shapes.md) |
| $f_q$ | form factor $\phi_{\max}/\bar\phi$ — how much hotter the core centre runs than its average | [2.4](lessons/02-04-bare-reactor-geometries-flux-shapes.md) |
| $M_c$, $\rho_{\text{fuel}}$ | critical mass, and fuel loading = fissile grams per cm³ of core | [2.5](lessons/02-05-material-buckling-critical-size-mass.md) |
| $u$ | lethargy $\ln(E_0/E)$ — dimensionless "how tired," zero at birth, $\approx18$ at thermal | [3.1](lessons/03-01-slowing-down-lethargy-density.md) |
| $\alpha$ | collision parameter $\big(\tfrac{A-1}{A+1}\big)^2$ — energy fraction *kept* in the worst-case head-on hit | [3.1](lessons/03-01-slowing-down-lethargy-density.md) |
| $\xi$ | average lethargy gain per collision — the constant step size of the slowing-down staircase | [3.1](lessons/03-01-slowing-down-lethargy-density.md) |
| $\xi\Sigma_s$ | moderating power — lethargy gained per cm of travel | [3.1](lessons/03-01-slowing-down-lethargy-density.md) |
| $q$ | slowing-down density — neutrons crossing a given energy per cm³ per s, heading down | [3.1](lessons/03-01-slowing-down-lethargy-density.md) |
| $I$ | resonance integral (barns) — total resonance absorption seen per unit lethargy | [3.2](lessons/03-02-resonance-escape-fermi-age.md) |
| $N_F$ | number density of the resonance absorber, i.e. $^{238}$U (cm⁻³) | [3.2](lessons/03-02-resonance-escape-fermi-age.md) |
| $\tau$ | Fermi age — an **area** (cm²), one-sixth the mean-square spread while slowing down | [3.2](lessons/03-02-resonance-escape-fermi-age.md) |
| $\Sigma_{1\to2}$, $\Sigma_{R1}$ | removal (slowing-down) cross section, and total rate of leaving the fast group | [3.3](lessons/03-03-two-group-diffusion-theory.md) |
| $M^2$, $M$ | migration area $L^2+\tau$ and migration length — total birth-to-capture range | [3.4](lessons/03-04-migration-area-reflectors-heterogeneity.md) |
| $\delta$ | reflector saving — centimetres of core a reflector is worth | [3.4](lessons/03-04-migration-area-reflectors-heterogeneity.md) |
| $P(t)$ | amplitude of a *frozen* flux shape — proportional to reactor power | [4.1](lessons/04-01-delayed-neutrons-point-kinetics.md) |
| $\Lambda$ | mean neutron generation time, $\sim10^{-4}$–$10^{-5}$ s | [4.1](lessons/04-01-delayed-neutrons-point-kinetics.md) |
| $\beta$, $\beta_i$ | delayed neutron fraction ($\approx0.0065$ for $^{235}$U) and its per-group shares, $\sum_i\beta_i=\beta$ | [4.1](lessons/04-01-delayed-neutrons-point-kinetics.md) |
| $C_i$, $\lambda_i$, $\bar\lambda$ | precursor concentration of group $i$, its decay constant, and the one-group effective $\bar\lambda$ | [4.1](lessons/04-01-delayed-neutrons-point-kinetics.md) |
| $\rho$ | reactivity $(k-1)/k$ — fractional distance from critical; zero is the operating point | [4.2](lessons/04-02-reactivity-prompt-jump.md) |
| pcm | "percent mille," $10^{-5}$ of reactivity — the natural resolution of a rod adjustment | [4.2](lessons/04-02-reactivity-prompt-jump.md) |
| $\omega$, $T$ | inverse period (s⁻¹) and reactor period $1/\omega$ — the e-folding clock of a ramp | [4.2](lessons/04-02-reactivity-prompt-jump.md) |
| $T_p$ | prompt period $\Lambda/(\rho-\beta)$ — valid only above one dollar | [4.3](lessons/04-03-prompt-criticality.md) |
| $M$ (kinetics) | subcritical multiplication $1/(1-k)$ — **a different $M$** from the migration length | [4.5](lessons/04-05-subcritical-multiplication-startup.md) |
| $\alpha_T$, $\alpha_P$ | temperature coefficient $d\rho/dT$ and power coefficient $d\rho/dP$ | [5.1](lessons/05-01-reactivity-feedback-temperature-coefficients.md) |
| $\alpha_D$ (or $\alpha_F$), $\alpha_M$, $\alpha_v$ | Doppler (fuel), moderator, and void partial coefficients | [5.2](lessons/05-02-doppler-moderator-void-coefficients.md) |
| $\bar\alpha$ | void fraction — fraction of coolant volume that is steam (**not** the collision parameter) | [5.2](lessons/05-02-doppler-moderator-void-coefficients.md) |
| $I(t)$, $X(t)$ | $^{135}$I and $^{135}$Xe atom densities (cm⁻³) — $I$ here is *iodine*, not a resonance integral | [5.3](lessons/05-03-xenon-135-iodine-pit.md) |
| $\gamma_I,\gamma_X,\sigma_X$ | fission yields of iodine and xenon, and xenon's monstrous absorption cross section | [5.3](lessons/05-03-xenon-135-iodine-pit.md) |
| $\phi^{*}$ | saturation flux $\lambda_X/\sigma_X$ — where xenon burnup overtakes xenon decay | [5.3](lessons/05-03-xenon-135-iodine-pit.md) |
| $P$, $S$ (poisons) | $^{149}$Pm and $^{149}$Sm densities — **another** reuse of $P$ and $S$ | [5.4](lessons/05-04-xenon-oscillations-samarium-149.md) |
| $B$ (burnup) | burnup, MWd per kg of uranium loaded — **not** buckling | [5.5](lessons/05-05-fuel-burnup-conversion-breeding.md) |
| $CR$ | conversion ratio: fissile atoms made per fissile atom destroyed | [5.5](lessons/05-05-fuel-burnup-conversion-breeding.md) |
| $\rho_{\text{ex}}$, $\rho_{\text{PD}}$ | excess reactivity of a fresh core, and the power defect | [5.6](lessons/05-06-reactor-control-operation.md) |
| SDM | shutdown margin — how subcritical you still are with the worst rod stuck out | [5.6](lessons/05-06-reactor-control-operation.md) |

## Definitions

### Angular flux

Counts the neutrons sitting in one cell of phase space — a place, a direction, an
energy — weighted by how fast they're moving, because reaction rates want speed.

$$\psi(\mathbf r,\hat\Omega,E,t) = v\,n(\mathbf r,\hat\Omega,E,t)$$

*Introduced:* [1.1](lessons/01-01-neutron-balance-transport-equation.md)

### Scalar flux

Angular flux with direction summed away: the total neutron *track length* laid
down per cm³ per second. It is what drives reactions, because a nucleus doesn't
care which way the incoming neutron was pointed.

$$\phi = \int_{4\pi}\psi\,d\Omega = n\,v$$

*Introduced:* [1.2](lessons/01-02-cross-sections-flux-reaction-rates.md)

### Neutron current

The net flow left over after all the random milling cancels — a vector, and
usually tiny compared with the flux that produced it.

$$\mathbf J = \int_{4\pi}\hat\Omega\,\psi\,d\Omega$$

*Introduced:* [1.1](lessons/01-01-neutron-balance-transport-equation.md)

### Transport equation

A phase-space ledger: the neutron count in a cell rises by whatever scatters or
is born into it and falls by whatever streams out or collides away. Exact, linear
(neutrons never interact with each other), and essentially unsolvable by hand.

*Introduced:* [1.1](lessons/01-01-neutron-balance-transport-equation.md)

### One-group (one-speed) reduction

Pretend every neutron has one energy, and choose the effective cross section that
reproduces the true reaction rate anyway. The group constant is *defined* to make
$\bar\Sigma\phi$ exact — collapse the spectrum, preserve the rate.

$$\bar\Sigma_x = \frac{\int\Sigma_x(E)\,\phi(E)\,dE}{\int\phi(E)\,dE}$$

*Introduced:* [1.2](lessons/01-02-cross-sections-flux-reaction-rates.md)

### Diffusion approximation

Assume the angular flux is a big isotropic part plus a small directional lean,
and keep nothing else. That single assumption is the whole of diffusion theory —
and everywhere it fails, so does every number the theory gives you.

$$\psi(\mathbf r,\hat\Omega) \approx \frac{1}{4\pi}\big[\phi(\mathbf r) + 3\,\mathbf J(\mathbf r)\cdot\hat\Omega\big]$$

*Introduced:* [1.3](lessons/01-03-diffusion-approximation-ficks-law.md)

### Fick's law

Neutrons drift from crowded to empty, down the flux gradient — same sentence as
heat flowing hot-to-cold or dye spreading out. The minus sign is the physics.

$$\mathbf J = -D\,\nabla\phi, \qquad D = \frac{1}{3\Sigma_{tr}}$$

*Introduced:* [1.3](lessons/01-03-diffusion-approximation-ficks-law.md)

### Transport cross section

The total cross section with forward scattering discounted — a glancing hit off a
heavy nucleus barely interrupts the walk, so it counts less toward stopping it.

$$\Sigma_{tr} = \Sigma_t - \bar\mu_0\Sigma_s = \Sigma_a + \Sigma_s(1-\bar\mu_0), \qquad \bar\mu_0 \approx \frac{2}{3A}$$

*Introduced:* [1.3](lessons/01-03-diffusion-approximation-ficks-law.md)

### One-group diffusion equation

Steady state says production balances absorption plus net leakage — and with
Fick's law, leakage is just the curvature of the flux.

$$D\nabla^2\phi - \Sigma_a\phi + S = 0 \qquad\Longleftrightarrow\qquad \nabla^2\phi - \frac{\phi}{L^2} = -\frac{S}{D}$$

*Introduced:* [1.4](lessons/01-04-one-group-diffusion-boundary-conditions.md)

### Extrapolated boundary

At a free surface the flux is small but *not* zero; the diffusion solution,
continued outward, hits zero a short distance past the metal. Pretend the reactor
is that little bit bigger and set the flux to zero there.

$$\tilde a = a + 0.71\,\lambda_{tr}, \qquad \lambda_{tr}=3D \ \Rightarrow\ 0.71\lambda_{tr} = 2.13\,D$$

*Introduced:* [1.4](lessons/01-04-one-group-diffusion-boundary-conditions.md)

### Interface conditions

Where two materials meet, neither flux nor flow may jump — but the *gradient*
does, because $D$ jumps.

$$\phi_1=\phi_2, \qquad -D_1\frac{d\phi_1}{dn} = -D_2\frac{d\phi_2}{dn}$$

*Introduced:* [1.4](lessons/01-04-one-group-diffusion-boundary-conditions.md)

### Diffusion length

How far a thermal neutron *reaches* — the straight-line birth-to-capture
displacement, not the zig-zag mileage. Big $L$ means far reach and a leaky core.

$$L = \sqrt{\frac{D}{\Sigma_a}}, \qquad \langle r^2\rangle = 6L^2, \qquad r_{\text{rms}} = \sqrt6\,L$$

*Introduced:* [1.5](lessons/01-05-diffusion-length-source-problems.md)

### Thermal utilization $f$

Of all the thermal neutrons the mixture absorbs, the share that the *fuel* caught
rather than the moderator, coolant, poison, or structure. It is the one factor a
dissolved poison moves, and $k_\infty$ follows it one-for-one.

$$f = \frac{\Sigma_a^{\text{fuel}}}{\Sigma_a^{\text{fuel}}+\Sigma_a^{\text{mod}}+\Sigma_a^{\text{poison}}+\cdots}$$

*Introduced:* [2.1](lessons/02-01-k-infinity-four-factor-formula.md) · definition-level background: [intro card](../intro-nuclear-engineering/reference.md#thermal-utilization-f)

### Reproduction factor $\eta$

Fast neutrons produced per thermal neutron absorbed *in the fuel* — $\nu$ docked
for the fuel's own wasted captures, so always below $\nu$.

$$\eta = \nu\,\frac{\Sigma_f^{\text{fuel}}}{\Sigma_a^{\text{fuel}}} = \frac{\nu\Sigma_f^{\text{fuel}}}{\Sigma_f^{\text{fuel}}+\Sigma_\gamma^{\text{fuel}}}$$

*Introduced:* [2.1](lessons/02-01-k-infinity-four-factor-formula.md) · background: [intro card](../intro-nuclear-engineering/reference.md#reproduction-factor-eta)

### Non-leakage probability

The fraction of neutrons that *stay inside* during one phase of life — fast while
slowing down, thermal while diffusing. It is a survivor fraction, not a loss.

*Introduced:* [2.2](lessons/02-02-leakage-six-factor-formula.md)

### Buckling

One number, read two ways: how sharply the flux has to bend. Composition says how
much bending it can pay for; geometry says how much bending it forces.

$$\nabla^2\phi + B^2\phi = 0$$

*Introduced:* [2.2](lessons/02-02-leakage-six-factor-formula.md), formalized in [2.3](lessons/02-03-criticality-condition-geometric-buckling.md)

### Material buckling

The buckling the *mix* can afford — positive exactly when $k_\infty>1$. Read it as
surplus production per unit of how far a neutron wanders.

$$B_m^2 = \frac{\nu\Sigma_f - \Sigma_a}{D} = \frac{k_\infty-1}{L^2}$$

*Introduced:* [2.3](lessons/02-03-criticality-condition-geometric-buckling.md)

### Geometric buckling

The buckling the *shape and size* force — the lowest eigenvalue of
$\nabla^2\phi+B^2\phi=0$ with $\phi=0$ on the extrapolated boundary. Pure geometry:
no cross section appears anywhere in it. It shrinks as the core grows.

*Introduced:* [2.3](lessons/02-03-criticality-condition-geometric-buckling.md)

### Criticality condition

A shape matching a mix. One scalar equation; solve it for a length and you have
the critical size.

$$B_m^2 = B_g^2$$

*Introduced:* [2.3](lessons/02-03-criticality-condition-geometric-buckling.md)

### Fundamental mode

The lowest eigenfunction — the only standing wave that fits the core, vanishes at
its extrapolated edge, and stays non-negative everywhere. Higher harmonics solve
the same equation but swing negative, so they are transients, not reactors.

*Introduced:* [2.4](lessons/02-04-bare-reactor-geometries-flux-shapes.md)

### Form factor (peak-to-average flux)

Power tracks the average flux; fuel and cladding survive the peak. The ratio is a
pure number fixed by the mode shape, and it is why real cores are flattened with
reflectors and zoned fuel.

$$f_q = \frac{\phi_{\max}}{\bar\phi}$$

*Introduced:* [2.4](lessons/02-04-bare-reactor-geometries-flux-shapes.md)

### Critical size and critical mass

Solve $B_g^2(\text{size}) = B_m^2$ for the dimension, then multiply the volume by
the fuel loading. A hotter mix goes critical smaller; a more mobile one (bigger
$L$) needs a bigger core.

$$\tilde R = \frac{\pi}{B_m} = \frac{\pi L}{\sqrt{k_\infty-1}}, \qquad M_c = \rho_{\text{fuel}}V \;\propto\; \frac{L^3}{(k_\infty-1)^{3/2}}$$

*Introduced:* [2.5](lessons/02-05-material-buckling-critical-size-mass.md)

### Lethargy

Neutrons lose a fixed *fraction* of their energy per collision, not a fixed
amount — so the natural ruler is the logarithm of energy, and slowing down becomes
a staircase climbed at a steady pace.

$$u = \ln\frac{E_0}{E}, \qquad u_{th} = \ln\frac{2\ \text{MeV}}{0.025\ \text{eV}} \approx 18.2$$

*Introduced:* [3.1](lessons/03-01-slowing-down-lethargy-density.md)

### Average lethargy gain $\xi$

The step size of that staircase — and, remarkably, the same size no matter where
on the energy slope the neutron currently sits.

$$\xi = 1 + \frac{\alpha\ln\alpha}{1-\alpha}, \qquad \alpha = \left(\frac{A-1}{A+1}\right)^2$$

*Introduced:* [3.1](lessons/03-01-slowing-down-lethargy-density.md) · background: [intro card](../intro-nuclear-engineering/reference.md#average-logarithmic-energy-loss)

### Moderating power and moderating ratio

Two figures of merit: how *compactly* a moderator slows neutrons, and how
*honestly* — whether it slows them without eating them.

$$\text{power} = \xi\Sigma_s, \qquad \text{ratio} = \frac{\xi\Sigma_s}{\Sigma_a}$$

*Introduced:* [3.1](lessons/03-01-slowing-down-lethargy-density.md) · background: [intro card](../intro-nuclear-engineering/reference.md#moderating-power-and-moderating-ratio)

### Slowing-down density

The downward current on the *energy* axis. In the clean asymptotic region it is
constant, because every neutron born must cross every energy exactly once.

$$q = \xi\Sigma_s\,\phi(u) \quad\Longrightarrow\quad \phi(u)=\text{const} \iff \phi(E)\propto 1/E$$

*Introduced:* [3.1](lessons/03-01-slowing-down-lethargy-density.md)

### Resonance integral

All the $^{238}$U resonance absorption packaged into one number: how much
absorption a neutron meets per unit lethargy as it slides through the traps.

$$I = \int \sigma_a^{\text{res}}(E)\,\frac{dE}{E}$$

*Introduced:* [3.2](lessons/03-02-resonance-escape-fermi-age.md)

### Resonance escape probability $p$

The fraction that threads every resonance without being captured — a tug-of-war
between fuel absorption and moderator slowing-down power.

$$p = \exp\!\left(-\frac{N_F\,I}{\xi\Sigma_s}\right)$$

*Introduced:* [3.2](lessons/03-02-resonance-escape-fermi-age.md) · background: [intro card](../intro-nuclear-engineering/reference.md#resonance-escape-probability-p)

### Fermi age

An **area**, not a time: one-sixth the mean-square crow-flight distance a neutron
covers between birth and thermalization. It is called "age" only because it plays
the role of time in the heat equation that governs slowing down.

$$\tau = \tfrac16\langle r^2\rangle_{\text{slowing}}, \qquad \tau(E)=\int_E^{E_0}\frac{D(E')}{\xi\Sigma_s}\frac{dE'}{E'}, \qquad \nabla^2 q = \frac{\partial q}{\partial\tau}$$

*Introduced:* [3.2](lessons/03-02-resonance-escape-fermi-age.md)

### Removal cross section

In two-group theory, the rate at which a fast neutron *leaves* the fast group —
and group 1's loss is exactly group 2's source. That single transfer is the whole
coupling.

$$\Sigma_{R1} = \Sigma_{a1} + \Sigma_{1\to2}, \qquad \tau = \frac{D_1}{\Sigma_{R1}}, \qquad L^2 = \frac{D_2}{\Sigma_{a2}}$$

*Introduced:* [3.3](lessons/03-03-two-group-diffusion-theory.md)

### Migration area

Slowing-down wander plus thermal wander. Mean-square distances of independent
random walks add, so one length governs total leakage.

$$M^2 = L^2 + \tau, \qquad \langle r^2\rangle_{\text{birth}\to\text{capture}} = 6M^2$$

*Introduced:* [3.4](lessons/03-04-migration-area-reflectors-heterogeneity.md)

### Reflector saving

A reflector makes no neutrons — it only returns the ones that would have left. Its
whole worth shows up geometrically, as centimetres you may shave off each
half-dimension and stay critical.

$$\tilde R_{\text{refl}} = \tilde R_{\text{bare}} - \delta$$

*Introduced:* [3.4](lessons/03-04-migration-area-reflectors-heterogeneity.md)

### Self-shielding (heterogeneity)

Lump the fuel into rods and a rod's outer skin soaks up the resonance-energy
neutrons before they reach the middle — so fewer $^{238}$U nuclei ever see them and
$p$ rises. The price is a little thermal utilization $f$; for natural and
low-enriched uranium the trade wins decisively, which is why reactors are
lattices.

*Introduced:* [3.4](lessons/03-04-migration-area-reflectors-heterogeneity.md)

### Delayed neutrons and $\beta$

A fission doesn't emit these; it emits a radioactive **precursor** that later
decays and *then* coughs out a neutron, seconds later. Only about 0.65% of
neutrons arrive this way — and they are the entire reason a reactor is a machine
you can drive.

$$\beta = \sum_i\beta_i \approx 0.0065\ (^{235}\text{U})$$

*Introduced:* [4.1](lessons/04-01-delayed-neutrons-point-kinetics.md) · nuclear background: [intro card](../intro-nuclear-engineering/reference.md#delayed-neutrons-and-the-delayed-fraction-beta)

### Mean generation time $\Lambda$

The average time from one fission to the next — the reactor's *prompt* clock, and
far too fast to steer by. Everything controllable happens on the precursors'
clock instead.

$$\Lambda = \ell/k \sim 10^{-4}\text{–}10^{-5}\ \text{s}$$

*Introduced:* [4.1](lessons/04-01-delayed-neutrons-point-kinetics.md) · background: [intro card](../intro-nuclear-engineering/reference.md#neutron-generation-time)

### Point-kinetics equations

Freeze the flux *shape* and let only its amplitude move; a space-and-time PDE
collapses to a handful of ODEs. "Point" because the whole reactor becomes one
spot that brightens and dims.

$$\frac{dP}{dt} = \frac{\rho-\beta}{\Lambda}P + \sum_i\lambda_i C_i, \qquad \frac{dC_i}{dt} = \frac{\beta_i}{\Lambda}P - \lambda_i C_i$$

*Introduced:* [4.1](lessons/04-01-delayed-neutrons-point-kinetics.md)

### Reactivity

How far the reactor sits from exactly critical, as a fraction — $k$ recentred so
that zero is the place a reactor actually lives.

$$\rho = \frac{k-1}{k} \approx k-1 \quad (k\approx1)$$

*Introduced:* [4.2](lessons/04-02-reactivity-prompt-jump.md) · background: [intro card](../intro-nuclear-engineering/reference.md#reactivity)

### Dollar

Reactivity measured in units of the delayed fraction. One dollar is not an
arbitrary scale — it is exactly the reactivity at which the reactor's character
changes, so the unit is written in dollars and cents rather than decimals.

$$\rho\,[\$] = \frac{\rho}{\beta}, \qquad \rho = \beta \iff \rho = \$1, \qquad 1\ \text{cent} = 0.01\beta$$

*Introduced:* [4.2](lessons/04-02-reactivity-prompt-jump.md)

### Prompt-jump approximation

The prompt population re-equilibrates so fast that you may treat it as
instantaneous: drop $\Lambda\,dP/dt$, let algebra hand you the step, and keep the
delayed equation for the slow ramp behind it.

$$\frac{P(0^+)}{P_0} = \frac{\beta}{\beta-\rho} \qquad \textbf{valid only for } \rho < \beta \ (\text{under one dollar})$$

*Introduced:* [4.2](lessons/04-02-reactivity-prompt-jump.md)

### Prompt critical

The prompt neutrons alone close the chain, so the delayed ones are no longer
needed and the slow link disappears. It happens at exactly one dollar, and it is a
regime change, not a worse version of what came before.

$$k_p = k(1-\beta) = 1 \iff \rho = \beta$$

*Introduced:* [4.3](lessons/04-03-prompt-criticality.md) · background: [intro card](../intro-nuclear-engineering/reference.md#prompt-critical)

### Prompt period

Once above a dollar, drop the delayed source entirely; what's left grows
exponentially on the generation-time clock. Since $\rho-\beta$ can be minuscule,
$T_p$ can be catastrophically short.

$$T_p = \frac{\Lambda}{\rho-\beta} \qquad (\rho>\beta \text{ only})$$

*Introduced:* [4.3](lessons/04-03-prompt-criticality.md)

### Inhour equation

Guess $P\propto e^{\omega t}$ and the point-kinetics ODEs collapse into one
algebraic relation between reactivity and growth rate — the reactor's
characteristic equation. Reactivity is spent two ways: a sliver speeds up the
prompt chain, the bulk outruns the precursors.

$$\rho = \Lambda\omega + \sum_{i=1}^{6}\frac{\beta_i\,\omega}{\omega+\lambda_i}$$

*Introduced:* [4.4](lessons/04-04-inhour-equation-reactor-period.md)

### Reactor period

The e-folding time of the ramp — the number on the operator's meter. Read it off
the **largest** root of the inhour equation; the others die away.

$$T = \frac{1}{\omega}, \qquad t_{\text{double}} = T\ln 2 \approx 0.693\,T$$

*Introduced:* [4.4](lessons/04-04-inhour-equation-reactor-period.md) · background: [intro card](../intro-nuclear-engineering/reference.md#reactor-period)

### Subcritical multiplication

One source neutron spawns a whole finite family before the chain dies, so a
subcritical core holds a *steady* multiplied flux — no period, just a level that
climbs as you approach critical.

$$M = \frac{1}{1-k} = 1+k+k^2+\cdots, \qquad \phi \propto \frac{S}{1-k} \qquad (k<1 \text{ only})$$

*Introduced:* [4.5](lessons/04-05-subcritical-multiplication-startup.md)

### $1/M$ plot

Take the reciprocal of the count rate and it falls *linearly* toward zero as
$k\to1$ — so you can extrapolate ahead of where you are and always know how much
reactivity is left before critical.

$$\frac{1}{M} = \frac{C_0}{C} = \frac{1-k}{1-k_0}$$

*Introduced:* [4.5](lessons/04-05-subcritical-multiplication-startup.md)

### Temperature coefficient of reactivity

How much reactivity a degree of heating adds or removes. Its **sign** is the whole
safety story; its magnitude only says how briskly the core settles.

$$\alpha_T = \frac{d\rho}{dT}, \qquad \Delta\rho_{\text{fb}} = \alpha_T\Delta T$$

*Introduced:* [5.1](lessons/05-01-reactivity-feedback-temperature-coefficients.md)

### Power defect

The total reactivity swallowed in going from cold and shut down to hot and at
full power — which control rods or boron must supply to keep the core critical
while it warms up, and must *absorb back* on cooldown.

$$\Delta\rho_{\text{defect}} = \int_{T_0}^{T_{\text{full}}}\alpha_T(T)\,dT$$

*Introduced:* [5.1](lessons/05-01-reactivity-feedback-temperature-coefficients.md)

### Doppler coefficient

Hot fuel jiggles, so a sharp resonance smears into a shorter, wider one of the
same area — and area moved into the wings, where the flux isn't yet depleted,
catches *more* neutrons. Hotter fuel, lower $p$, less reactivity: negative,
essentially always, and **prompt**, because fission heat lands in the pellet
instantly.

$$\alpha_D = \frac{\partial\rho}{\partial T_f} < 0, \qquad |\alpha_D| \propto T_f^{-1/2}$$

*Introduced:* [5.2](lessons/05-02-doppler-moderator-void-coefficients.md)

### Moderator temperature coefficient

Hot moderator is thin moderator. Whether that helps or hurts depends on whether
the lattice was starved for moderation or drowning in it — so the sign is a
design choice, and PWRs are deliberately built under-moderated to get it negative.
It **lags** Doppler by seconds while heat conducts out of the fuel.

$$\alpha_M = \frac{\partial\rho}{\partial T_m}, \qquad \alpha_M<0 \text{ under-moderated}, \quad \alpha_M>0 \text{ over-moderated}$$

*Introduced:* [5.2](lessons/05-02-doppler-moderator-void-coefficients.md)

### Void coefficient

The density effect taken to the limit: what each percent of boiling is worth. If
the coolant *is* the moderator, voiding it removes moderation and the sign is
negative and self-limiting. If coolant and moderator are different materials,
voiding can remove more absorber than moderator and the sign flips positive.

$$\alpha_v = \frac{\partial\rho}{\partial\bar\alpha}, \qquad \Delta\rho_{\text{void}} \approx \alpha_v\,\bar\alpha$$

*Introduced:* [5.2](lessons/05-02-doppler-moderator-void-coefficients.md)

### Saturation flux (xenon)

The flux at which burning xenon out overtakes letting it decay away. Power
reactors run well above it, which is why equilibrium xenon saturates instead of
growing with power.

$$\phi^{*} = \frac{\lambda_X}{\sigma_X} \approx 8\times10^{12}\ \text{n cm}^{-2}\text{s}^{-1}$$

*Introduced:* [5.3](lessons/05-03-xenon-135-iodine-pit.md)

### Iodine pit

Xenon is made *slowly*, through iodine decay, but destroyed *fast*, by the flux.
Scram and you keep the slow maker while killing the fast destroyer — so xenon
**rises** for about 11 hours after shutdown before it starts to fall. If the pit is
deeper than your spare rod worth, you cannot restart: that's the **xenon dead
time**, typically 10–20 hours.

*Introduced:* [5.3](lessons/05-03-xenon-135-iodine-pit.md)

### Xenon spatial oscillation

More flux in one region burns its xenon out faster, which raises that region's
flux further — a positive local feedback, but phase-lagged by the iodine bank, so
it *oscillates* rather than simply running away. One swing takes 15–30 hours, and
gross power can sit flat while the shape rings underneath.

*Introduced:* [5.4](lessons/05-04-xenon-oscillations-samarium-149.md)

### Samarium-149

The poison that never leaves: $^{149}$Sm is stable, so its only removal is neutron
capture. At shutdown burnup stops but the banked promethium keeps decaying in, so
samarium ratchets up to a new **permanent** plateau instead of peaking and
clearing.

*Introduced:* [5.4](lessons/05-04-xenon-oscillations-samarium-149.md) · poison background: [intro card](../intro-nuclear-engineering/reference.md#fission-product-poison)

### Burnup

The fuel's odometer: energy delivered per mass of heavy metal loaded. It measures
energy *out*, not fuel *used up* — high-burnup fuel still holds fissile material.

$$B = \frac{P\,t}{M} \quad [\text{MWd/kgU} = \text{GWd/tU}]$$

*Introduced:* [5.5](lessons/05-05-fuel-burnup-conversion-breeding.md)

### Conversion ratio

The fuel account's deposit-to-withdrawal ledger: new fissile made per fissile
destroyed. Below 1 is a converter (every commercial LWR); above 1 is a breeder,
and $CR-1$ is the breeding gain.

$$CR = \frac{\sigma_c^{28}\phi N_{28}}{\sigma_a^{25}\phi N_{25}+\sigma_a^{49}\phi N_{49}} \;\approx\; \eta - 1 - L_{\text{loss}}$$

*Introduced:* [5.5](lessons/05-05-fuel-burnup-conversion-breeding.md)

### Excess reactivity

A fresh core must start *above* critical, or it would die the moment the first
atom fissioned. The surplus is the fuel budget for the whole cycle; the art is
holding it down safely, not eliminating it.

*Introduced:* [5.6](lessons/05-06-reactor-control-operation.md)

### Differential and integral rod worth

Differential worth is what one more centimetre of withdrawal buys; integral worth
is the running total. Because a rod's effect tracks the local flux, which is
cosine-shaped, the differential worth is bell-shaped and the integral is the
classic S-curve.

$$\frac{d\rho}{dx}\ (\text{pcm/cm}), \qquad \rho(x) = \int_0^x \frac{d\rho}{dx'}dx'$$

*Introduced:* [5.6](lessons/05-06-reactor-control-operation.md)

### Shutdown margin

How subcritical you can still get in the most reactive credible shutdown state
**with the single highest-worth rod stuck fully out** — and it must hold across the
whole transient, not just at the instant of the scram.

*Introduced:* [5.6](lessons/05-06-reactor-control-operation.md)

## Formulas and rules

### The transport equation, term by term

$$\frac{1}{v}\frac{\partial\psi}{\partial t} + \hat\Omega\cdot\nabla\psi + \Sigma_t\psi = \int\!\!\int \Sigma_s(\hat\Omega'\!\to\hat\Omega,E'\!\to E)\,\psi'\,dE'd\Omega' + \frac{\chi(E)}{4\pi}\int\nu\Sigma_f(E')\,\phi'\,dE' + S$$

| Term | Reads as |
|---|---|
| $\hat\Omega\cdot\nabla\psi$ | streaming / leakage — the **only** term coupling neighbouring points, so the only reason size matters |
| $\Sigma_t\psi$ | collision loss — *any* collision removes a neutron from this $(\hat\Omega,E)$ slot |
| in-scatter integral | gain — neutrons arriving from other directions and energies |
| $\chi(E)\nu\Sigma_f\phi/4\pi$ | fission births: isotropic, spread over the fission spectrum |
| $S$ | neutrons injected by hand (startup source, spontaneous fission) |

Integrating over all directions gives the **exact one-speed neutron balance** —
the sentence the whole course rewrites:

$$\nabla\cdot\mathbf J + \Sigma_a\phi = \nu\Sigma_f\phi + S_0 \qquad (\text{leakage} + \text{absorption} = \text{production} + \text{source})$$

*From* [1.1](lessons/01-01-neutron-balance-transport-equation.md)

### Cross sections and reaction rates

$$N = \frac{\rho N_A}{M},\qquad \Sigma_x = N\sigma_x = \sum_i N_i\sigma_{x,i},\qquad \lambda_x = \frac{1}{\Sigma_x},\qquad R_x = \Sigma_x\phi$$

$$\Sigma_t = \Sigma_a + \Sigma_s, \qquad \Sigma_a = \Sigma_f + \Sigma_\gamma$$

$1\ \text{barn} = 10^{-24}\ \text{cm}^2$ and $N_A = 6.022\times10^{23}\ \text{mol}^{-1}$.
Uncollided attenuation through a pure absorber is $\psi(x)=\psi_0e^{-\Sigma_a x}$,
and the flight distance to first collision is exponential with mean $1/\Sigma_t$.
Any *ratio* of rates in one material cancels $N$ and $\phi$ — that's why $\eta$
needs no number densities.

*From* [1.2](lessons/01-02-cross-sections-flux-reaction-rates.md)

### Diffusion constants

$$D = \frac{1}{3\Sigma_{tr}} = \frac{\lambda_{tr}}{3}, \qquad \Sigma_{tr} = \Sigma_a + \Sigma_s(1-\bar\mu_0), \qquad \bar\mu_0 = \frac{2}{3A}$$

$$L = \sqrt{D/\Sigma_a}, \qquad M^2 = L^2+\tau$$

*From* [1.3](lessons/01-03-diffusion-approximation-ficks-law.md), [1.5](lessons/01-05-diffusion-length-source-problems.md), [3.4](lessons/03-04-migration-area-reflectors-heterogeneity.md)

### Thermal-neutron material data

Representative 2200 m/s values for pure moderators; use whatever a problem gives
you instead when it gives you something. (Graphite's $L$ moves with density —
50–60 cm is all normal.)

| Moderator | $D$ (cm) | $\Sigma_a$ (cm⁻¹) | $L$ (cm) | $\tau$ (cm²) | $M^2$ (cm²) |
|---|---|---|---|---|---|
| H₂O | 0.16 | 0.0197 | 2.85 | 27 | 35 |
| D₂O | 0.87 | $2.9\times10^{-5}$ | ~170 | 131 | $\sim3\times10^{4}$ |
| Graphite | 0.84 | $2.4\times10^{-4}$ | ~59 | 364 | ~3900 |
| Beryllium | 0.50 | $1.04\times10^{-3}$ | ~22 | 98 | ~580 |

Neither the lessons nor this table replace the microscopic data they are built
from — see [Assumed, not taught here](#assumed-not-taught-here).

*Used by* [1.3](lessons/01-03-diffusion-approximation-ficks-law.md), [1.5](lessons/01-05-diffusion-length-source-problems.md), [3.4](lessons/03-04-migration-area-reflectors-heterogeneity.md)

### Boundary conditions — the complete set

| Situation | Condition |
|---|---|
| Material interface | $\phi_1=\phi_2$ **and** $D_1\phi_1' = D_2\phi_2'$ (the *gradient* may jump) |
| Vacuum / free surface | $\phi=0$ at $\tilde a = a + 0.71\lambda_{tr} = a + 2.13D$ |
| Plane of symmetry | $d\phi/dn = 0$ (Neumann) |
| Origin, or infinite medium | $\phi$ finite and $\phi\ge0$ — this retires a constant just like an edge condition |

Each region's second-order ODE needs exactly two conditions; a symmetric bare
slab spends symmetry at the centre and vacuum at the edge.

*From* [1.4](lessons/01-04-one-group-diffusion-boundary-conditions.md)

### Source solutions in an infinite medium

$$\text{plane source } S\ [\text{cm}^{-2}\text{s}^{-1}]:\quad \phi(x) = \frac{SL}{2D}e^{-|x|/L}$$

$$\text{point source } S\ [\text{s}^{-1}]:\quad \phi(r) = \frac{S\,e^{-r/L}}{4\pi D r}$$

$$\text{capture distribution: } p(r)\,dr = \frac{1}{L^2}r\,e^{-r/L}dr, \qquad F(r) = 1-\left(1+\frac rL\right)e^{-r/L}$$

Captures peak at $r=L$ (not at the origin — the shell area $4\pi r^2$ pushes them
out), $\langle r^2\rangle=6L^2$, and capturing 95% of the emitted neutrons takes
$r\approx4.74L$. Total absorption integrates back to $S$: nothing escapes to
infinity.

*From* [1.5](lessons/01-05-diffusion-length-source-problems.md)

### Multiplication: four factors, six factors

$$k_\infty = \eta\,f\,p\,\varepsilon \qquad\qquad k_{\text{eff}} = k_\infty\,P_{FNL}\,P_{TNL}$$

Read left to right as one generation's life: 1 thermal neutron absorbed in fuel
$\xrightarrow{\times\eta}$ fast neutrons born $\xrightarrow{\times\varepsilon}$ plus
the fast-fission bonus $\xrightarrow{\times p}$ survive the resonances
$\xrightarrow{\times f}$ reabsorbed in fuel $=$ next generation's start line.

| $k_{\text{eff}}$ | State |
|---|---|
| $<1$ | **subcritical** — dies out; this is the shutdown state |
| $=1$ | **critical** — exactly self-sustaining; this is the *operating* point, not an alarm |
| $>1$ | **supercritical** — a transient you use to raise power, then trim back |

$\varepsilon\gtrsim1$ (typically $\approx1.03$) is the only factor above one.
Adding moderator raises $p$ but lowers $f$, so the product $pf$ peaks — that is the
over/under-moderation trade-off.

*From* [2.1](lessons/02-01-k-infinity-four-factor-formula.md), [2.2](lessons/02-02-leakage-six-factor-formula.md)

### Leakage and non-leakage

$$P_{TNL} = \frac{1}{1+L^2B^2}, \qquad P_{FNL} = e^{-B^2\tau} \ (\text{age theory}) \ \approx \frac{1}{1+\tau B^2}\ (\text{two-group})$$

$$k_{\text{eff}} = \frac{k_\infty}{(1+L^2B^2)(1+\tau B^2)} \;\approx\; \frac{k_\infty}{1+M^2B^2} \quad (\text{small } B^2)$$

The two forms of $P_{FNL}$ agree to first order in $B^2$, since
$e^{-\tau B^2}\approx1-\tau B^2\approx1/(1+\tau B^2)$. Total non-leakage is the
**product** $P_{FNL}P_{TNL}$, never the sum. Setting $k_{\text{eff}}=1$:

$$B_c^2 = \frac{k_\infty-1}{M^2} \qquad (\text{one-group: } M^2\to L^2)$$

*From* [2.2](lessons/02-02-leakage-six-factor-formula.md), [3.2](lessons/03-02-resonance-escape-fermi-age.md), [3.3](lessons/03-03-two-group-diffusion-theory.md), [3.4](lessons/03-04-migration-area-reflectors-heterogeneity.md)

### Bare-geometry table — flux shapes, buckling, form factors

All dimensions are **extrapolated** (tilde). Solve $\nabla^2\phi+B_g^2\phi=0$ with
$\phi=0$ on the extrapolated surface, $\phi$ finite inside, $\phi>0$ throughout.

| Geometry | Fundamental flux | $B_g^2$ | $f_q=\phi_{\max}/\bar\phi$ |
|---|---|---|---|
| Infinite slab, thickness $\tilde a$ | $\cos\dfrac{\pi x}{\tilde a}$ | $\left(\dfrac{\pi}{\tilde a}\right)^2$ | $\dfrac{\pi}{2}\approx1.57$ |
| Sphere, radius $\tilde R$ | $\dfrac{A}{r}\sin\dfrac{\pi r}{\tilde R}$ | $\left(\dfrac{\pi}{\tilde R}\right)^2$ | $\dfrac{\pi^2}{3}\approx3.29$ |
| Finite cylinder $\tilde R,\tilde H$ | $J_0\!\left(\dfrac{2.405r}{\tilde R}\right)\cos\dfrac{\pi z}{\tilde H}$ | $\left(\dfrac{2.405}{\tilde R}\right)^2+\left(\dfrac{\pi}{\tilde H}\right)^2$ | $\approx3.64$ |
| Box $\tilde a\times\tilde b\times\tilde c$ | product of three cosines | $\left(\dfrac{\pi}{\tilde a}\right)^2+\left(\dfrac{\pi}{\tilde b}\right)^2+\left(\dfrac{\pi}{\tilde c}\right)^2$ | $\left(\dfrac{\pi}{2}\right)^3\approx3.88$ |
| Cube, side $\tilde a$ | — | $3\left(\dfrac{\pi}{\tilde a}\right)^2$ | as above |

The minimum-volume bare cylinder puts one-third of the buckling in the axial
direction, giving $\tilde H/\tilde R = \pi\sqrt2/2.405 \approx 1.85$ — a little
taller than wide. (The sphere is the true optimum; the cylinder is the buildable
approximation.)

*From* [2.4](lessons/02-04-bare-reactor-geometries-flux-shapes.md)

### Critical size and mass

$$B_m^2 = B_g^2 \quad\text{solved for a length:}$$

| Shape | Critical dimension |
|---|---|
| Sphere | $\tilde R = \pi/B_m = \pi L/\sqrt{k_\infty-1}$ |
| Slab | $\tilde a = \pi/B_m$ |
| Cube | $\tilde a = \pi\sqrt3/B_m$ |

$$M_c = \rho_{\text{fuel}}V \;\propto\; \frac{L^3}{(k_\infty-1)^{3/2}}$$

Richer fuel (bigger $k_\infty$) shrinks the core; a longer diffusion length grows
it. Because mass goes as the cube of the radius, a few points of $k_\infty$ can
nearly halve the critical mass. Replace $L\to M$ to fix the one-group answer's
fast-leakage blind spot; a reflector then subtracts $\delta$ from each
half-dimension, and $\Delta V/V = 1-(\tilde R_{\text{refl}}/\tilde R_{\text{bare}})^3$.

*From* [2.5](lessons/02-05-material-buckling-critical-size-mass.md), [3.4](lessons/03-04-migration-area-reflectors-heterogeneity.md)

### Slowing-down: the moderator table

$N$ is collisions from 2 MeV to 0.025 eV, i.e. $u_{th}/\xi$ with $u_{th}\approx18.2$.

| Moderator | $A$ | $\alpha$ | $\xi$ | $N$ | $\xi\Sigma_s$ (cm⁻¹) | $\xi\Sigma_s/\Sigma_a$ |
|---|---|---|---|---|---|---|
| H (in H₂O) | 1 | 0 | 0.920 | ~20 | 1.35 | 61 |
| D (in D₂O) | 2 | 0.111 | 0.509 | ~36 | 0.18 | several thousand |
| Beryllium | 9 | 0.640 | 0.209 | ~88 | 0.16 | ~130 |
| Carbon (graphite) | 12 | 0.716 | 0.158 | ~115 | 0.061 | 203 |
| $^{238}$U | 238 | 0.983 | 0.0084 | ~2170 | — | — |

Water moderates *compactly* (huge $\xi\Sigma_s$, so LWRs are small) but not
*cleanly*; heavy water's enormous moderating ratio is exactly the spare neutron
margin that lets a CANDU go critical on natural uranium.

*From* [3.1](lessons/03-01-slowing-down-lethargy-density.md)

### Slowing-down formulas

$$\alpha = \left(\frac{A-1}{A+1}\right)^2, \qquad \xi = 1+\frac{\alpha\ln\alpha}{1-\alpha}, \qquad N \approx \frac{\ln(E_0/E_{th})}{\xi}$$

$$q = \xi\Sigma_s\phi(u) \ \text{(constant in the asymptotic region)} \quad\Longrightarrow\quad \phi(E)\propto\frac1E$$

$$p = \exp\!\left(-\frac{N_F I}{\xi\Sigma_s}\right), \qquad \tau = \tfrac16\langle r^2\rangle_{\text{slow}}, \qquad P_{FNL}=e^{-B^2\tau}$$

*From* [3.1](lessons/03-01-slowing-down-lethargy-density.md), [3.2](lessons/03-02-resonance-escape-fermi-age.md)

### Two-group diffusion

$$D_1\nabla^2\phi_1 - \Sigma_{R1}\phi_1 + \tfrac1k\nu\Sigma_{f2}\phi_2 = 0, \qquad D_2\nabla^2\phi_2 - \Sigma_{a2}\phi_2 + \Sigma_{1\to2}\phi_1 = 0$$

In a bare homogeneous core both groups ride the *same* fundamental mode
($\nabla^2\to-B^2$), the PDEs collapse to algebra, and

$$k_{\text{eff}} = \frac{k_\infty}{(1+L^2B^2)(1+\tau B^2)}, \qquad k_\infty = \underbrace{\frac{\nu\Sigma_{f2}}{\Sigma_{a2}}}_{\eta f}\cdot\underbrace{\frac{\Sigma_{1\to2}}{\Sigma_{R1}}}_{p}$$

Expanding the denominator, $1+M^2B^2+L^2\tau B^4$ — the $B^4$ term is the
difference between the exact two-group condition and the migration-area shortcut.

*From* [3.3](lessons/03-03-two-group-diffusion-theory.md)

### Point kinetics

$$\frac{dP}{dt} = \frac{\rho-\beta}{\Lambda}P + \sum_i\lambda_iC_i, \qquad \frac{dC_i}{dt} = \frac{\beta_i}{\Lambda}P - \lambda_iC_i$$

$$\text{steady state } (\rho=0):\quad C_i = \frac{\beta_i P}{\lambda_i\Lambda} \quad(\text{an enormous reservoir — the reactor's flywheel})$$

Two timescales, four orders of magnitude apart: the prompt clock $\Lambda/\beta$
(~8 ms for $\Lambda=5\times10^{-5}$ s, $\beta=0.0065$) and the delayed clock
$1/\bar\lambda$ (~12.5 s for $\bar\lambda=0.08\ \text{s}^{-1}$). That separation is
what makes the system *stiff* and what makes the reactor steerable.

*From* [4.1](lessons/04-01-delayed-neutrons-point-kinetics.md)

### Kinetics working numbers

| Quantity | Value used throughout Module 4 |
|---|---|
| $\beta$ ($^{235}$U) | $0.0065$ ($^{239}$Pu $\approx0.0021$, $^{233}$U $\approx0.0026$) |
| $\Lambda$ | $5\times10^{-5}$ s (thermal LWR: $10^{-4}$–$10^{-5}$ s) |
| $\bar\lambda$ (one-group) | $0.08\ \text{s}^{-1}$ |
| $\lambda_1$ (longest-lived group) | $\approx0.0125\ \text{s}^{-1}$, i.e. a 55 s half-life |
| One dollar | $\rho=\beta=650$ pcm |

Full six-group $\beta_i,\lambda_i$ data: [intro card](../intro-nuclear-engineering/reference.md#delayed-neutron-data).

*Used by* [4.1](lessons/04-01-delayed-neutrons-point-kinetics.md), [4.3](lessons/04-03-prompt-criticality.md), [4.4](lessons/04-04-inhour-equation-reactor-period.md)

### Reactivity units

| In | Out |
|---|---|
| absolute $\rho$ | $\rho = (k-1)/k \approx k-1$ |
| pcm | $1\ \text{pcm}=10^{-5}$; $\rho=0.0015 = 150$ pcm |
| percent | $1\%\,\Delta k = 1000$ pcm |
| dollars | $\rho[\$]=\rho/\beta$; with $\beta=0.0065$, $\$1 = 650$ pcm and one cent $=6.5$ pcm |

Write reactivity in dollars and cents in prose; the escaped symbol is only for
inside math. Same conversions on the [intro card](../intro-nuclear-engineering/reference.md#reactivity-units).

*From* [4.2](lessons/04-02-reactivity-prompt-jump.md)

### Step insertions — jump, ramp, and the one-dollar wall

| Regime | Result |
|---|---|
| $\rho<\beta$, instant | prompt jump $\dfrac{P(0^+)}{P_0}=\dfrac{\beta}{\beta-\rho}$ (negative $\rho$ gives the mirror-image prompt **drop**) |
| $\rho<\beta$, after the jump | $\omega=\dfrac{\bar\lambda\rho}{\beta-\rho}$, $\;T=\dfrac{\beta-\rho}{\bar\lambda\rho}$ |
| $\rho=\beta$ | **prompt critical** — one dollar; the delayed neutrons stop being the bottleneck |
| $\rho>\beta$ | prompt runaway, $T_p=\dfrac{\Lambda}{\rho-\beta}$ |
| $\rho\to-\infty$ | $\omega$ saturates at $-\lambda_1$: period floors near $-80$ s |

The **validity limit** is the same line in every row: the prompt-jump and
delayed-period formulas assume the prompt chain is subcritical on its own, i.e.
$\rho<\beta$ — under one dollar. At and above a dollar, keep the $\Lambda\omega$
term and use the prompt period instead. Doubling time is always $T\ln2$.

*From* [4.2](lessons/04-02-reactivity-prompt-jump.md), [4.3](lessons/04-03-prompt-criticality.md), [4.4](lessons/04-04-inhour-equation-reactor-period.md)

### The inhour equation

$$\rho = \Lambda\omega + \sum_{i=1}^{6}\frac{\beta_i\omega}{\omega+\lambda_i} \qquad\xrightarrow{\text{one group}}\qquad \rho = \Lambda\omega + \frac{\beta\omega}{\omega+\bar\lambda}$$

Drop $\Lambda\omega$ (it is $\sim10^{-6}$ against $\rho\sim10^{-3}$ for modest
insertions) and it rearranges to the working formula
$\omega\approx\bar\lambda\rho/(\beta-\rho)$. The polynomial has several roots; the
observed ramp is the **largest**, since the rest die away.

*From* [4.4](lessons/04-04-inhour-equation-reactor-period.md)

### Subcritical operation and startup

$$M = \frac{1}{1-k}, \qquad \phi \propto SM = \frac{S}{1-k}, \qquad \frac1M = \frac{C_0}{C} = \frac{1-k}{1-k_0}$$

A subcritical core with a source sits at a *steady* level — there is no period
below critical. Plot $1/M$ against rod withdrawal, extrapolate the line to zero,
and read the predicted critical position; then withdraw only part of the
remaining distance and re-extrapolate.

*From* [4.5](lessons/04-05-subcritical-multiplication-startup.md)

### Feedback

$$\alpha_T = \frac{d\rho}{dT}, \qquad \Delta\rho_{\text{fb}}=\alpha_T\Delta T, \qquad \alpha_P = \frac{d\rho}{dP} = \alpha_T\frac{dT}{dP}$$

$$\text{new equilibrium after a step: } \Delta\rho_{\text{ext}}+\alpha_T\Delta T = 0 \;\Longrightarrow\; \Delta T = -\frac{\Delta\rho_{\text{ext}}}{\alpha_T}$$

That equilibrium only exists when $\alpha_T<0$. Total isothermal coefficient is
the sum of the channels, $\alpha_T=\alpha_D+\alpha_M+\cdots$.

| Channel | Sign | Clock | Typical size |
|---|---|---|---|
| Doppler (fuel) | negative by physics | **prompt** — heat is in the pellet instantly | a few pcm/K, falling as $T_f^{-1/2}$ |
| Moderator temperature | a design choice (under-moderated → negative) | seconds (heat must reach the coolant) | tens of pcm/K |
| Void | sign follows whether coolant *is* the moderator | fast, follows boiling | PWR/BWR negative; RBMK positive |
| Power defect (all channels, 0 → full power) | negative | the whole heat-up | $-1000$ to $-3000$ pcm |

In a fast excursion **only the prompt fuel term is available** to arrest it — which
is why a strong negative Doppler coefficient is the front-line safety feature.

*From* [5.1](lessons/05-01-reactivity-feedback-temperature-coefficients.md), [5.2](lessons/05-02-doppler-moderator-void-coefficients.md)

### Xenon-135

$$\ce{^{135}I ->[\lambda_I] ^{135}Xe ->[\lambda_X] ^{135}Cs}$$

$$\frac{dI}{dt} = \gamma_I\Sigma_f\phi - \lambda_I I, \qquad \frac{dX}{dt} = \gamma_X\Sigma_f\phi + \lambda_I I - \lambda_X X - \sigma_X\phi X$$

$$I_{\text{eq}} = \frac{\gamma_I\Sigma_f\phi}{\lambda_I}, \qquad X_{\text{eq}} = \frac{(\gamma_I+\gamma_X)\Sigma_f\phi}{\lambda_X+\sigma_X\phi} \;\xrightarrow{\ \phi\gg\phi^{*}\ }\; \frac{(\gamma_I+\gamma_X)\Sigma_f}{\sigma_X}$$

After a scram ($\phi\to0$) the burnup term vanishes and iodine keeps feeding:

$$X(t) = X_0e^{-\lambda_X t} + \frac{\lambda_I I_0}{\lambda_I-\lambda_X}\left(e^{-\lambda_X t}-e^{-\lambda_I t}\right), \qquad t_{\text{peak}} = \frac{\ln(\lambda_I/\lambda_X)}{\lambda_I-\lambda_X} \approx 11\ \text{h}$$

Poison worth, to first order, is the share of core absorption it steals:
$\rho_X \approx -\sigma_X X/\Sigma_a$, ceilinged at
$-(\gamma_I+\gamma_X)\Sigma_f/\Sigma_a$ (a few percent) at equilibrium, but roughly
$2.6\times$ that at the post-shutdown crest.

| Datum | Value |
|---|---|
| $\gamma_I$, $\gamma_X$ | $0.061$, $0.003$ (combined $0.064$) |
| $\lambda_I$ ($T_{1/2}=6.6$ h) | $2.9\times10^{-5}\ \text{s}^{-1}$ |
| $\lambda_X$ ($T_{1/2}=9.1$ h) | $2.1\times10^{-5}\ \text{s}^{-1}$ |
| $\sigma_X$ | $2.6\times10^{6}$ b $=2.6\times10^{-18}\ \text{cm}^2$ — the largest known |
| $\phi^{*}=\lambda_X/\sigma_X$ | $\approx8\times10^{12}\ \text{n cm}^{-2}\text{s}^{-1}$ |

*From* [5.3](lessons/05-03-xenon-135-iodine-pit.md)

### Samarium-149 and lumped fission products

$$\ce{^{149}Nd ->[\beta^-] ^{149}Pm ->[\beta^-] ^{149}Sm}\ (\text{stable})$$

$$\frac{dP}{dt} = \gamma_{Pm}\Sigma_f\phi - \lambda_{Pm}P, \qquad \frac{dS}{dt} = \lambda_{Pm}P - \sigma_S\phi S \quad (\textbf{no decay term})$$

$$S_{\text{eq}} = \frac{\gamma_{Pm}\Sigma_f}{\sigma_S} \ \ (\text{flux-independent}), \qquad \rho_{Sm,\text{eq}} = -\frac{\gamma_{Pm}\Sigma_f}{\Sigma_a}$$

$$S_\infty = S_{\text{eq}}\left(1+\frac{\sigma_S\phi_0}{\lambda_{Pm}}\right) \quad \text{— a permanent post-shutdown step, reached over 2–4 days}$$

Data: $\gamma_{Pm}=0.0113$, $\sigma_S=4.08\times10^{4}$ b, $^{149}$Pm half-life 53 h
($\lambda_{Pm}=3.63\times10^{-6}\ \text{s}^{-1}$). The hundreds of *other* fission
products are lumped as a background drain that grows monotonically with burnup —
no transient, just a steady tax on excess reactivity.

*From* [5.4](lessons/05-04-xenon-oscillations-samarium-149.md)

### Burnup, depletion, breeding

$$B = \frac{Pt}{M}, \qquad \text{1 g fissile fissioned} \approx \text{1 MWd} \approx 8\times10^{10}\ \text{J}$$

$$N_{25}(t) = N_{25}(0)e^{-\sigma_a^{25}\phi t}, \qquad \frac{dN_{49}}{dt} = \sigma_c^{28}\phi N_{28} - \sigma_a^{49}\phi N_{49} \ \Rightarrow\ N_{49}^{\text{eq}} = \frac{\sigma_c^{28}}{\sigma_a^{49}}N_{28}$$

$$\ce{^{238}U + n -> ^{239}U ->[\beta^-] ^{239}Np ->[\beta^-] ^{239}Pu} \quad (23.5\ \text{min, then } 2.36\ \text{d})$$

**The spare-neutron budget for breeding:** one neutron sustains the chain, one
replaces the fissile atom just burned, and the rest cover losses $L_{\text{loss}}$:

$$\eta \ge 2 + L_{\text{loss}} \quad\Longrightarrow\quad \eta>2 \text{ is necessary, never sufficient}$$

| Fissile nuclide | $\eta$ thermal | $\eta$ fast |
|---|---|---|
| $^{235}$U | ~2.07 | ~2.3 |
| $^{239}$Pu | ~1.85 (cannot breed) | ~2.4 (breeds) |
| $^{233}$U | ~2.29 (the one thermal breeder) | ~2.4 |

Discharge burnup in a modern LWR is 40–60 GWd/tU, and bred plutonium supplies
roughly a third of the energy by end of life.

*From* [5.5](lessons/05-05-fuel-burnup-conversion-breeding.md)

### Control and the reactivity budget

$$\rho_{\text{control}} \;\ge\; \rho_{\text{ex}} + |\rho_{\text{PD}}| + |\rho_{\text{Xe}}| + \text{margin}$$

$$\text{SDM} = \big(\rho_{\text{rods, all-in}}-\rho_{\text{stuck rod}}\big) - \big(\rho_{\text{ex}} + |\rho_{\text{PD}}| + \rho_{\text{Xe decay}}\big) \;\ge\; \text{SDM}_{\min}$$

Standard rod-worth model over a core of height $H$ (bell-shaped differential,
S-curve integral):

$$\frac{d\rho}{dx} = \frac{\rho_{\text{tot}}}{H}\left[1-\cos\frac{2\pi x}{H}\right], \qquad \rho(x) = \rho_{\text{tot}}\left[\frac{x}{H}-\frac{1}{2\pi}\sin\frac{2\pi x}{H}\right]$$

| Tool | Speed | Spatial effect |
|---|---|---|
| Control rods | milliseconds — steering wheel and brake | distort the local flux; not for deep parking |
| Chemical shim (boron in coolant) | months — the cycle-long trim | spatially uniform, bends nothing |
| Burnable poisons (Gd, B) | burn out alongside the fuel | flatten the excess-reactivity curve over the cycle |

**Rod shadowing:** two nearby rods are worth *less* than the sum of their
individual worths, because the first depresses the flux the second was going to
absorb. A scram cannot credit boron — it is too slow to inject.

*From* [5.6](lessons/05-06-reactor-control-operation.md)

## Assumed, not taught here

This is a Tier 2 course: it assumes the nuclear data and the PDE/ODE machinery
and spends its time on reactor physics. Every row below is used somewhere in the
lessons without being derived there.

| Fact | Where it's taught |
|---|---|
| Microscopic cross sections, the barn, and what $\sigma$ physically means | [intro-nuclear 2.1](../intro-nuclear-engineering/lessons/02-01-microscopic-cross-section.md), [card](../intro-nuclear-engineering/reference.md#microscopic-cross-section) |
| $\Sigma=N\sigma$, mean free path, exponential attenuation | [intro-nuclear 2.2](../intro-nuclear-engineering/lessons/02-02-macroscopic-cross-section-mean-free-path.md) |
| The $1/v$ law, resonances, compound-nucleus formation | [intro-nuclear 2.3](../intro-nuclear-engineering/lessons/02-03-energy-dependence-1-over-v-resonances.md), [card](../intro-nuclear-engineering/reference.md#the-1v-law) |
| Tabulated 2200 m/s cross-section data for the common nuclides | [intro-nuclear card](../intro-nuclear-engineering/reference.md#thermal-2200-ms-cross-section-data) |
| Fission energetics, $\nu\approx2.4$, the fission spectrum $\chi(E)$, ~200 MeV per fission | [intro-nuclear 3.1](../intro-nuclear-engineering/lessons/03-01-fission-process-energy.md), [3.2](../intro-nuclear-engineering/lessons/03-02-fission-products-neutron-yield.md) |
| Six-group delayed-neutron fractions and decay constants | [intro-nuclear card](../intro-nuclear-engineering/reference.md#delayed-neutron-data) |
| The chain reaction and $k$ as a generation ratio; the four factors as definitions | [intro-nuclear 3.3](../intro-nuclear-engineering/lessons/03-03-chain-reaction-multiplication-factor.md), [3.4](../intro-nuclear-engineering/lessons/03-04-criticality-four-factor-formula.md) |
| Decay constants, half-lives, and Bateman decay-chain solutions | [intro-nuclear 1.3](../intro-nuclear-engineering/lessons/01-03-radioactivity-decay-law.md), [1.4](../intro-nuclear-engineering/lessons/01-04-decay-chains-equilibrium.md) |
| Elastic-collision kinematics behind $\alpha$ and $\xi$; the 2200 m/s thermal peak | [intro-nuclear 2.4](../intro-nuclear-engineering/lessons/02-04-moderation-slowing-neutrons.md) |
| Reactor types, PWR/BWR/CANDU/RBMK vocabulary | [intro-nuclear 4.5](../intro-nuclear-engineering/lessons/04-05-reactor-types-nuclear-landscape.md) |
| Separation of variables and Helmholtz eigenvalue problems (all of criticality) | [pdes 3.1](../pdes/lessons/03-01-separation-of-variables.md), [3.4](../pdes/lessons/03-04-sturm-liouville-theory.md) |
| The Laplacian in polar/spherical coordinates; Bessel functions and the zero $2.405$ | [pdes 6.3](../pdes/lessons/06-03-separation-polar-spherical.md) |
| Dirichlet / Neumann boundary conditions and interface matching | [pdes 2.3](../pdes/lessons/02-03-laplace-poisson-equations.md) |
| The heat/diffusion equation — which the Fermi-age equation literally *is* | [pdes 2.1](../pdes/lessons/02-01-heat-diffusion-equations.md), [4.2](../pdes/lessons/04-02-heat-equation-line-heat-kernel.md) |
| Point-source Green's functions (the $e^{-r/L}/r$ solution's parentage) | [pdes 5.1](../pdes/lessons/05-01-dirac-delta-distributions.md), [5.2](../pdes/lessons/05-02-greens-functions-poisson.md) |
| Coupled linear ODE systems, eigenvalues, and stability — all of point kinetics | [ode-refresher 3.1](../ode-refresher/lessons/03-01-linear-systems-eigenvalues.md), [3.2](../ode-refresher/lessons/03-02-phase-portraits-stability.md) |
| First-order linear ODEs and exponential growth/decay | [ode-refresher 1.2](../ode-refresher/lessons/01-02-separable-and-linear-first-order.md), [1.3](../ode-refresher/lessons/01-03-first-order-models.md) |
| The geometric series $\sum k^n = 1/(1-k)$ behind subcritical multiplication | [calc-refresher 3.1](../calc-refresher/lessons/03-01-series-convergence-tests.md) |
| Integration by parts and $\int_0^\infty r^n e^{-r/L}dr$ (diffusion-length moments) | [calc-refresher 2.2](../calc-refresher/lessons/02-02-integration-techniques.md), [2.3](../calc-refresher/lessons/02-03-improper-integrals-and-models.md) |
| Cumulative integrals — differential vs integral rod worth is the FTC in uniform | [calc-refresher 2.1](../calc-refresher/lessons/02-01-integral-as-accumulation.md) |
| Where core heat actually goes: the temperature field this course only assumes | [reactor-thermal-hydraulics](../reactor-thermal-hydraulics/reference.md) |
| Enrichment, reprocessing, and the economics of the excess-reactivity curve | [nuclear-fuel-cycle](../nuclear-fuel-cycle/reference.md) |

## Pitfalls

### Flux, current, and reaction rates

- Flux is not flow through a surface — that's the current. $\phi=nv$ is total track length per volume per time; an isotropic swarm has huge flux and zero net current. *([1.2](lessons/01-02-cross-sections-flux-reaction-rates.md))*
- $\mathbf J$ does not say where any given neutron goes; it is the tiny imbalance left after the random motion cancels. When that imbalance is *not* tiny, diffusion theory itself is wrong. *([1.3](lessons/01-03-diffusion-approximation-ficks-law.md))*
- Streaming and collision act on $\psi$; fission and total scatter rate act on $\phi$. Swapping them is the classic transport slip. *([1.1](lessons/01-01-neutron-balance-transport-equation.md))*
- Scattering is a loss *from* one phase-space cell and an equal gain *to* another — only absorption removes a neutron from the population. *([1.1](lessons/01-01-neutron-balance-transport-equation.md))*
- Keep the $10^{-24}$ glued to every barn until the end, or $\Sigma$ is off by 24 orders of magnitude. *([1.2](lessons/01-02-cross-sections-flux-reaction-rates.md))*
- $\Sigma_a$ is built, not fundamental: it is $\Sigma_f+\Sigma_\gamma$, summed over every nuclide present. Change the composition or the density and every macroscopic cross section moves. *([1.2](lessons/01-02-cross-sections-flux-reaction-rates.md))*

### Where diffusion theory is a lie

- $\hat\Omega\cdot\nabla\psi$ is a *spatial imbalance*, not "neutrons are moving." In a uniform infinite medium leakage vanishes even though every neutron is flying — leakage needs an edge or a gradient. *([1.1](lessons/01-01-neutron-balance-transport-equation.md))*
- Use $\Sigma_{tr}$, never $\Sigma_t$, in $D$. For hydrogen ($\bar\mu_0=2/3$) the transport correction nearly triples $D$. *([1.3](lessons/01-03-diffusion-approximation-ficks-law.md))*
- Diffusion fails in exactly four places, all of them near-isotropy failures: **near a source**, **near a boundary or interface**, **in a void** ($D\to\infty$), and **inside a strong absorber** (control rod, $\Sigma_a\gtrsim\Sigma_s$). Deep inside a big weak absorber it is excellent. *([1.3](lessons/01-03-diffusion-approximation-ficks-law.md))*

### Boundary conditions and geometry

- The flux is *not* zero at the physical surface — it is small but nonzero there, and the linearly extrapolated flux reaches zero at $\tilde a = a+0.71\lambda_{tr}$. Buckle in tilde dimensions, then subtract the extrapolation distance for the physical size. *([1.4](lessons/01-04-one-group-diffusion-boundary-conditions.md), [2.4](lessons/02-04-bare-reactor-geometries-flux-shapes.md), [2.5](lessons/02-05-material-buckling-critical-size-mass.md))*
- At an interface only $\phi$ and $J=-D\phi'$ are continuous. The gradient itself *jumps*, because $D$ jumps — matching raw slopes is a standing error. *([1.4](lessons/01-04-one-group-diffusion-boundary-conditions.md))*
- Symmetry ($\phi'=0$) and finiteness/non-negativity **are** boundary conditions; each retires one constant exactly like an edge condition. Don't go hunting for an external surface you don't need. *([1.4](lessons/01-04-one-group-diffusion-boundary-conditions.md))*
- $\nabla^2\phi-\phi/L^2=0$ and $\nabla^2\phi+B^2\phi=0$ are not cousins — the sign flips the character entirely: dying exponentials versus oscillatory eigenfunctions. *([1.5](lessons/01-05-diffusion-length-source-problems.md))*
- The flux tells you where neutrons *are*, not where they're absorbed: the capture density carries an extra $4\pi r^2$, so captures peak at $r=L$ while $\phi$ blows up at the origin. *([1.5](lessons/01-05-diffusion-length-source-problems.md))*
- $L$ is a crow-flight displacement, not path length. The zig-zag mileage is many mean free paths longer. *([1.5](lessons/01-05-diffusion-length-source-problems.md))*

### Criticality and buckling

- $k_\infty>1$ does not mean critical, and $k_\infty<1$ means hopeless at *any* size — you cannot leak negative neutrons. Composition sets the ceiling; size decides whether you reach it. *([2.1](lessons/02-01-k-infinity-four-factor-formula.md), [2.2](lessons/02-02-leakage-six-factor-formula.md))*
- Critical is the *operating point*, not an alarm word. Steady power means $k_{\text{eff}}=1$ exactly; supercritical is a transient you use to get somewhere. *([2.2](lessons/02-02-leakage-six-factor-formula.md))*
- $P_{FNL}$ is the probability a neutron **doesn't** leak. Smaller core → smaller $P_{FNL}$ → more leakage. *([2.2](lessons/02-02-leakage-six-factor-formula.md))*
- Material and geometric buckling are one quantity read two ways, not two physical things. $B_g^2$ contains no cross sections; $B_m^2$ contains no dimensions. *([2.3](lessons/02-03-criticality-condition-geometric-buckling.md), [2.4](lessons/02-04-bare-reactor-geometries-flux-shapes.md))*
- Bigger is not "more critical" — it is *super*critical, because $B_g^2$ drops below $B_m^2$. Criticality is one exact size, which is why real cores run slightly super and get trimmed. *([2.3](lessons/02-03-criticality-condition-geometric-buckling.md))*
- Discard every higher harmonic: they solve the same Helmholtz equation but go negative, and a negative flux is not a reactor. They are the transients that die away *approaching* criticality. *([2.4](lessons/02-04-bare-reactor-geometries-flux-shapes.md))*
- A bigger $L$ makes the critical size *bigger*, not smaller: mobility grows the core, reactivity shrinks it. *([2.5](lessons/02-05-material-buckling-critical-size-mass.md))*
- The one-group critical size is optimistic — it counts only thermal leakage. Use $M^2=L^2+\tau$; in a thermal system $\tau$ can dwarf $L^2$. *([2.5](lessons/02-05-material-buckling-critical-size-mass.md), [3.4](lessons/03-04-migration-area-reflectors-heterogeneity.md))*

### Slowing down and few-group methods

- Lethargy is the *logarithm* of energy running backwards, not energy renamed; that is exactly what makes each collision a constant step $\xi$. *([3.1](lessons/03-01-slowing-down-lethargy-density.md))*
- $\xi$ is the average of $\ln(E/E')$, not the average fractional energy loss. Only the log-average is energy-independent. *([3.1](lessons/03-01-slowing-down-lethargy-density.md))*
- $q$ is *constant* in the asymptotic region — every neutron must cross every energy once. It only drops where absorption steals neutrons mid-slide. *([3.1](lessons/03-01-slowing-down-lethargy-density.md))*
- Fermi age is an **area** in cm², not a time. It is called age only because it plays time's role in $\nabla^2q=\partial q/\partial\tau$. *([3.2](lessons/03-02-resonance-escape-fermi-age.md))*
- $P_{FNL}$ and $P_{TNL}$ have different functional forms (exponential vs rational) because slowing down is a one-way Gaussian spread while thermal diffusion is a steady diffusion-capture balance. They agree only to first order in $B^2$. *([3.2](lessons/03-02-resonance-escape-fermi-age.md), [3.3](lessons/03-03-two-group-diffusion-theory.md))*
- Leakages **compound**, never add: total non-leakage is $P_{FNL}P_{TNL}$. *([3.3](lessons/03-03-two-group-diffusion-theory.md))*
- One shared $B^2$ for both groups is a *bare-core* luxury. Add a reflector and the fast and thermal shapes part ways. *([3.3](lessons/03-03-two-group-diffusion-theory.md))*
- $M^2$ replaces $L^2$ only in the leakage bookkeeping; $L^2$ and $\tau$ still matter separately whenever you split fast from thermal. *([3.4](lessons/03-04-migration-area-reflectors-heterogeneity.md))*
- More moderator is not always better, and lumping fuel is not always better: moderator raises $p$ but lowers $f$; lumping raises $p$ (self-shielding) but lowers $f$. Both have an optimum, and $pf$ peaks in between. *([2.1](lessons/02-01-k-infinity-four-factor-formula.md), [3.2](lessons/03-02-resonance-escape-fermi-age.md), [3.4](lessons/03-04-migration-area-reflectors-heterogeneity.md))*
- A reflector produces no neutrons — it only returns them. Its worth is a reduced leakage, cashed geometrically as $\delta$. *([3.4](lessons/03-04-migration-area-reflectors-heterogeneity.md))*

### Kinetics, reactivity, and the one-dollar wall

- $\Lambda$ is not the reactor's response time — the delayed neutrons are. Drop the $\lambda_iC_i$ terms and any positive reactivity becomes a disaster. *([4.1](lessons/04-01-delayed-neutrons-point-kinetics.md))*
- The $-\beta$ in $(\rho-\beta)/\Lambda$ does not destroy neutrons, it *defers* them; they return in the very next term. *([4.1](lessons/04-01-delayed-neutrons-point-kinetics.md))*
- $P$ is the amplitude of a *frozen flux shape*, not a neutron count at a point. Point kinetics breaks whenever the perturbation deforms the shape — a rod dropping on one side, or a spatial xenon oscillation. *([4.1](lessons/04-01-delayed-neutrons-point-kinetics.md), [5.4](lessons/05-04-xenon-oscillations-samarium-149.md))*
- The prompt jump is **bounded** and is not the reactor taking off; the sustained rise is the slow delayed ramp behind it. *([4.2](lessons/04-02-reactivity-prompt-jump.md))*
- The prompt-jump and delayed-period formulas hold **only under one dollar** ($\rho<\beta$). Above it the jump factor $\beta/(\beta-\rho)$ diverges and $T=(\beta-\rho)/\bar\lambda\rho$ lies to you — switch to $T_p=\Lambda/(\rho-\beta)$. Equally, $T_p$ is meaningless below a dollar, where it would give a negative time. *([4.2](lessons/04-02-reactivity-prompt-jump.md), [4.3](lessons/04-03-prompt-criticality.md), [4.4](lessons/04-04-inhour-equation-reactor-period.md))*
- Crossing a dollar is a **regime change**, not a gradual worsening: seconds-scale precursor control below, millisecond generation-time physics above. The dollar is a wall, not a slope. *([4.3](lessons/04-03-prompt-criticality.md))*
- Don't confuse the prompt *jump* (bounded step, sub-dollar) with prompt *critical* (unbounded runaway, at or above a dollar). *([4.3](lessons/04-03-prompt-criticality.md))*
- Positive and negative insertions are not symmetric past the jump: positive periods shrink without bound, negative ones floor at $-1/\lambda_1\approx-80$ s. You can raise power arbitrarily fast, never lower it faster than the longest-lived precursor decays. *([4.2](lessons/04-02-reactivity-prompt-jump.md), [4.4](lessons/04-04-inhour-equation-reactor-period.md))*
- The inhour polynomial has several roots; only the largest survives to become the stable period. *([4.4](lessons/04-04-inhour-equation-reactor-period.md))*
- A subcritical reactor with a source has **no period** — it sits at a steady level. What rises is the level each time you add reactivity, and $M=1/(1-k)$ is a subcritical-only formula. *([4.5](lessons/04-05-subcritical-multiplication-startup.md))*
- Never withdraw straight to the extrapolated critical position: rod worth is nonlinear, so step conservatively and re-extrapolate. The $1/M$ plot is a prediction to update, not a target to rush. *([4.5](lessons/04-05-subcritical-multiplication-startup.md))*

### Feedback and poisons

- Negative feedback does not push power to zero — it drives *total reactivity* to zero, holding the reactor critical at a new temperature and power. It is a thermostat, not a brake. *([5.1](lessons/05-01-reactivity-feedback-temperature-coefficients.md))*
- Fuel and moderator feedback run on different clocks: Doppler is prompt, moderator lags by seconds. In a fast excursion only the prompt term is available. *([5.1](lessons/05-01-reactivity-feedback-temperature-coefficients.md), [5.2](lessons/05-02-doppler-moderator-void-coefficients.md))*
- The power defect is an **integral** $\int\alpha_T\,dT$, not one coefficient times a temperature swing — $\alpha_T$ drifts as $T^{-1/2}$, so the cold value overstates it. *([5.1](lessons/05-01-reactivity-feedback-temperature-coefficients.md))*
- Only the *Doppler* coefficient is negative by physics; the moderator and void signs are design choices set by the moderator-to-fuel ratio. A fine Doppler coefficient does not save a core with a large positive void coefficient. *([5.2](lessons/05-02-doppler-moderator-void-coefficients.md))*
- Doppler broadening does not enlarge the resonance — the area is conserved. It moves area into the wings where the flux isn't yet depleted, so more of it is *usable*. It is a self-shielding story, not a bigger-cross-section story. *([5.2](lessons/05-02-doppler-moderator-void-coefficients.md))*
- "Voiding removes moderator, so it's negative" holds only when the coolant *is* the moderator. Separate them and voiding can remove more absorber than moderator. *([5.2](lessons/05-02-doppler-moderator-void-coefficients.md))*
- Shutting down does not clear xenon — xenon **rises**, because the flux that was burning it is gone while the iodine reservoir keeps decaying in. *([5.3](lessons/05-03-xenon-135-iodine-pit.md))*
- Equilibrium xenon *saturates* with flux, but the post-shutdown *peak* keeps growing with pre-shutdown flux — higher flux banks a bigger iodine reservoir. Don't fuse the two facts. *([5.3](lessons/05-03-xenon-135-iodine-pit.md))*
- Iodine is not the poison; it barely absorbs. It is the hidden reservoir, and its clock is why there is a pit at all. *([5.3](lessons/05-03-xenon-135-iodine-pit.md))*
- Samarium is not xenon-with-a-longer-clock: being stable, it steps up to a permanent higher plateau after shutdown and only clears by being burned out at power. *([5.4](lessons/05-04-xenon-oscillations-samarium-149.md))*
- For *spatial* xenon modes a bigger core is **less** stable — loose neutronic coupling is exactly what lets one end bloom while the other wilts. And flat gross power can hide a ringing flux shape, so the diagnostic must be spatial too. *([5.4](lessons/05-04-xenon-oscillations-samarium-149.md))*

### Fuel and control

- Burnup measures energy out per mass loaded, not fuel used up. High-burnup fuel still holds ~1% $^{235}$U plus ~1% plutonium — which is why spent fuel is a resource. *([5.5](lessons/05-05-fuel-burnup-conversion-breeding.md))*
- $\eta>2$ is necessary, never sufficient: the real bar is $\eta>2+L_{\text{loss}}$, which is why $^{239}$Pu breeds only in a fast spectrum. *([5.5](lessons/05-05-fuel-burnup-conversion-breeding.md))*
- Bred plutonium is not uniformly good fuel — successive captures build $^{240}$Pu, $^{242}$Pu and the minor actinides that dominate waste radiotoxicity. *([5.5](lessons/05-05-fuel-burnup-conversion-breeding.md))*
- Excess reactivity is not a design mistake; a perfectly critical fresh core would go subcritical on its first fission. The skill is holding it down safely. *([5.6](lessons/05-06-reactor-control-operation.md))*
- Withdrawing a rod halfway does not insert half its worth in any useful sense — the S-curve packs the reactivity into the flux-rich central travel. And rod worths are not additive: shadowing makes two nearby rods worth less than their sum. *([5.6](lessons/05-06-reactor-control-operation.md))*
- Shutdown margin is usually *tightest hours after* the scram, as peak xenon decays and quietly returns positive reactivity. It is a promise across the whole transient. *([5.6](lessons/05-06-reactor-control-operation.md))*

### Symbols that collide

The course reuses letters across modules; read them from context, not habit.

- $B$ is buckling in Modules 2–3 but **burnup** in [5.5](lessons/05-05-fuel-burnup-conversion-breeding.md).
- $M$ is the migration length in [3.4](lessons/03-04-migration-area-reflectors-heterogeneity.md) but **subcritical multiplication** $1/(1-k)$ in [4.5](lessons/04-05-subcritical-multiplication-startup.md) — and the fuel mass in the burnup formula.
- $P$ is reactor power in Module 4 but the **promethium** density in [5.4](lessons/05-04-xenon-oscillations-samarium-149.md); $S$ is a neutron source in Module 1 but **samarium** there.
- $\alpha$ is the collision parameter in [3.1](lessons/03-01-slowing-down-lethargy-density.md), a reactivity coefficient in [5.1](lessons/05-01-reactivity-feedback-temperature-coefficients.md)–[5.2](lessons/05-02-doppler-moderator-void-coefficients.md), and $\bar\alpha$ the void fraction.
- $\lambda$ is a mean free path in Module 1 but a decay constant in Modules 4–5; $I$ is the resonance integral in [3.2](lessons/03-02-resonance-escape-fermi-age.md) but iodine in [5.3](lessons/05-03-xenon-135-iodine-pit.md).
