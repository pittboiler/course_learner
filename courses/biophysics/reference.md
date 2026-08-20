# Biophysics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Biophysics is statistical mechanics with a ruler. Every question — will this bond
survive, will this ligand bind, can this molecule get there in time, can this
motor pull that hard — is answered by putting a number next to
$k_BT \approx 4.1\ \mathrm{pN\cdot nm}$ and reading off the comparison. The most
valuable thing on this card is therefore the **scale tables**: energies, lengths,
times, forces, and concentrations of the cell, in the units the cell works in.
Everything else here is the machinery that turns those numbers into predictions —
random walks and diffusion, binding and cooperativity, polymers and membranes,
rates, motors, and membrane voltages.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $k_BT$ | thermal energy — the size of the kicks warm water is already delivering | [1.1](lessons/01-01-kbt-ruler-scales.md) |
| $R = N_A k_B$, $RT$ | the same thing per **mole** instead of per molecule | [1.1](lessons/01-01-kbt-ruler-scales.md) |
| $b$ | step length of a random walk; later the Kuhn segment of a chain | [1.2](lessons/01-02-random-walk.md) |
| $N$ | number of steps (or links, or measured events) | [1.2](lessons/01-02-random-walk.md) |
| $\langle x^2\rangle$, $x_{\text{rms}}$ | mean-square displacement, and its square root — the typical distance from home | [1.2](lessons/01-02-random-walk.md) |
| $D$ | diffusion coefficient — the area a molecule explores per unit time ($\mu\mathrm{m^2/s}$) | [1.3](lessons/01-03-diffusion-ficks-laws.md) |
| $c(\mathbf r,t)$ | concentration (number or moles per volume) | [1.3](lessons/01-03-diffusion-ficks-laws.md) |
| $\mathbf J$ | flux — how much crosses unit area per unit time | [1.3](lessons/01-03-diffusion-ficks-laws.md) |
| $P = D/L$ | permeability of a thin barrier (a velocity); flux $= P\,\Delta c$ | [1.3](lessons/01-03-diffusion-ficks-laws.md) |
| $a$ | radius — of a diffusing sphere, or of a capture target | [1.3](lessons/01-03-diffusion-ficks-laws.md) |
| $\gamma$, $\mu = 1/\gamma$ | drag coefficient and mobility — force per unit speed, and its inverse | [1.4](lessons/01-04-einstein-relation.md) |
| $\eta$, $\nu = \eta/\rho$ | dynamic and kinematic viscosity of the fluid | [1.4](lessons/01-04-einstein-relation.md) |
| $Re$, $Pe$ | Reynolds number (inertia vs viscosity) and Péclet number (stirring vs diffusion) | [1.5](lessons/01-05-low-reynolds-number.md) |
| $G$, $\Delta G$, $\Delta G^\circ$ | Gibbs free energy; its change; its change with every species at 1 M | [2.1](lessons/02-01-free-energy-cell-currency.md) |
| $\mu$, $\mu^\circ$ | chemical potential — free-energy price of one more molecule (**not** mobility) | [2.1](lessons/02-01-free-energy-cell-currency.md) |
| $Q$, $K_{\text{eq}}$ | reaction quotient (products over reactants, right now) and its equilibrium value | [2.1](lessons/02-01-free-energy-cell-currency.md) |
| $\Delta E$ | energy gap between two states — only the difference ever enters | [2.2](lessons/02-02-boltzmann-two-state.md) |
| $Z$ | partition function — the sum of Boltzmann weights that normalizes probabilities | [2.2](lessons/02-02-boltzmann-two-state.md) |
| $p$ | fractional occupancy (bound, open, active) — a probability between 0 and 1 | [2.2](lessons/02-02-boltzmann-two-state.md) |
| $[L]$, $K_d$ | free-ligand concentration, and the concentration at half-occupancy | [2.3](lessons/02-03-ligand-binding-occupancy.md) |
| $c^\circ$ | reference concentration (1 M) that makes a log of a concentration legal | [2.3](lessons/02-03-ligand-binding-occupancy.md) |
| $n$ | Hill coefficient — effective cooperativity, a *lower bound* on the site count | [2.4](lessons/02-04-cooperativity-allostery.md) |
| $L_0$ | MWC allosteric constant, $[\mathrm{T_0}]/[\mathrm{R_0}]$ with no ligand bound | [2.4](lessons/02-04-cooperativity-allostery.md) |
| $\mathbf R$, $x$ | end-to-end vector of a chain, and its extension along the pulling direction | [3.1](lessons/03-01-entropic-spring.md) |
| $\Omega$, $S = k_B\ln\Omega$ | number of conformations, and the entropy it buys | [3.1](lessons/03-01-entropic-spring.md) |
| $L$ | contour length — the backbone laid perfectly straight | [3.2](lessons/03-02-persistence-length-wlc.md) |
| $l_p$, $B = l_p k_BT$ | persistence length, and the bending stiffness behind it ($\mathrm{pN\cdot nm^2}$) | [3.2](lessons/03-02-persistence-length-wlc.md) |
| $\mathbf t(s)$, $s$ | unit tangent (the chain's heading) at arc-length position $s$ | [3.2](lessons/03-02-persistence-length-wlc.md) |
| $F(x)$ | force needed to hold a chain at extension $x$ | [3.3](lessons/03-03-stretching-single-molecules.md) |
| $p = v/(a_0 l)$ | packing parameter — tail volume over head area times tail length (**not** occupancy) | [3.4](lessons/03-04-self-assembly-hydrophobic.md) |
| $n_{\mathrm C}$, $\varepsilon$ | carbons in a lipid tail, and the free energy gained per buried $\mathrm{CH_2}$ | [3.4](lessons/03-04-self-assembly-hydrophobic.md) |
| $K_A$, $\kappa$, $\sigma$ | area-stretch modulus, bending modulus, lateral tension | [3.5](lessons/03-05-membrane-mechanics.md) |
| $H$, $h(\mathbf r)$, $q$ | mean curvature, out-of-plane height field, ripple wavevector | [3.5](lessons/03-05-membrane-mechanics.md) |
| $l_B$, $\lambda_D$ | Bjerrum length (how strongly charges couple) and Debye length (how far they reach) | [3.6](lessons/03-06-electrostatics-salt-water.md) |
| $\varepsilon_r$, $\varphi$, $n_0$, $I$ | relative permittivity, electrostatic potential, bulk ion density, ionic strength | [3.6](lessons/03-06-electrostatics-salt-water.md) |
| $k_{\text{on}}$, $k_{\text{off}}$ | binding rate constant ($\mathrm{M^{-1}s^{-1}}$) and unbinding rate ($\mathrm{s^{-1}}$) | [4.1](lessons/04-01-reaction-kinetics-mass-action.md) |
| $\tau$ | relaxation time — how long a reaction takes to reach equilibrium | [4.1](lessons/04-01-reaction-kinetics-mass-action.md) |
| $\Delta G^{\ddagger}$ | height of the barrier a bond must be kicked over to break | [4.1](lessons/04-01-reaction-kinetics-mass-action.md) |
| $v$, $V_{\max}$, $K_M$, $k_{\mathrm{cat}}$ | reaction velocity, its ceiling, the half-max substrate level, turnover per enzyme | [4.2](lessons/04-02-michaelis-menten.md) |
| $d$, $F_{\text{stall}}$, $\eta$ | motor step size, the load that stops it, and its efficiency (**not** viscosity) | [4.3](lessons/04-03-molecular-motors-ratchet.md) |
| $z$, $e$ | valence of an ion (later, gating charges moved) and the elementary charge | [4.4](lessons/04-04-membrane-potentials-nernst-goldman.md) |
| $V_m$, $V_{\text{ion}}$ | membrane voltage (inside minus outside) and an ion's equilibrium potential | [4.4](lessons/04-04-membrane-potentials-nernst-goldman.md) |
| $P_K$, $P_{Na}$, $P_{Cl}$ | membrane permeability to each ion — the weights in the Goldman average | [4.4](lessons/04-04-membrane-potentials-nernst-goldman.md) |
| $V_{1/2}$, $V_s$, $q_{\text{gate}}$ | half-activation voltage, slope factor, and the gating charge that sets it | [4.5](lessons/04-05-excitable-membranes-action-potential.md) |
| $\hat k$, $\sigma_k$ | maximum-likelihood rate estimate and its uncertainty | [4.6](lessons/04-06-single-molecule-inference.md) |

**Three symbols do double duty in this course** — read them from context: $\mu$ is
mobility in 1.4 and chemical potential from 2.1 on; $p$ is occupancy in Module 2
and the packing parameter in 3.4; $\eta$ is viscosity in Module 1 and motor
efficiency in 4.3.

## Definitions

### Thermal energy

The size of the kicks a molecule is already receiving from warm water — the unit
against which every other energy in the cell is measured.

$$k_BT \approx 4.1\ \mathrm{pN\cdot nm}, \qquad k_B = 1.38\times10^{-23}\ \mathrm{J/K}$$

*Introduced:* [1.1](lessons/01-01-kbt-ruler-scales.md)

### Boltzmann factor

Every $k_BT$ of extra cost cuts a state's odds by a factor of $e \approx 2.7$.

$$\frac{P(\text{excited})}{P(\text{ground})} = e^{-\Delta E/k_BT}$$

*Introduced:* [1.1](lessons/01-01-kbt-ruler-scales.md)

### Random walk

Many independent kicks in random directions: the walker drifts nowhere on
average but spreads without bound, as the square root of the number of steps.

$$\langle x\rangle = 0, \qquad \langle x^2\rangle = Nb^2, \qquad x_{\text{rms}} = b\sqrt N$$

The second moment is the *only* useful measure of spread when the mean is zero by
symmetry: independent steps add **variances**, not lengths, and that is the whole
reason diffusion goes as $\sqrt t$ rather than $t$.

*Introduced:* [1.2](lessons/01-02-random-walk.md)

### Diffusion coefficient

How much area a molecule explores per unit time — the random walk's step picture
repackaged into one lookup-able number.

$$D \equiv \frac{b^2}{2\tau}, \qquad \langle x^2\rangle = 2Dt\ \text{(1D)}, \quad \langle r^2\rangle = 6Dt\ \text{(3D)}$$

*Introduced:* [1.3](lessons/01-03-diffusion-ficks-laws.md)

### Flux

The net number of molecules crossing unit area per unit time. Under diffusion it
runs downhill in concentration purely by counting — nothing is pushing.

$$\mathbf J = -D\nabla c$$

*Introduced:* [1.3](lessons/01-03-diffusion-ficks-laws.md)

### Drag coefficient and mobility

How many units of force you need per unit of speed ($\gamma$), and how much speed
you get per unit force ($\mu$). At cellular scale a pushed particle reaches
terminal velocity essentially instantly.

$$v_{\text{drift}} = \frac{F}{\gamma} = \mu F, \qquad \mu \equiv \frac1\gamma$$

*Introduced:* [1.4](lessons/01-04-einstein-relation.md)

### Reynolds number

The tug-of-war between inertia and friction — a *ratio*, not a speed. Big $Re$
means gliding and turbulence; small $Re$ means water behaves like honey.

$$Re = \frac{\rho v L}{\eta} = \frac{vL}{\nu}$$

*Introduced:* [1.5](lessons/01-05-low-reynolds-number.md)

### Péclet number

Whether carrying a molecule along beats letting it diffuse. $Pe \ll 1$ means
diffusion already outruns any stirring you could manage.

$$Pe = \frac{vL}{D}$$

*Introduced:* [1.5](lessons/01-05-low-reynolds-number.md)

### Scallop theorem

At $Re \ll 1$ the Stokes equations have no clock, so a stroke that runs backward
through the same sequence of shapes produces **zero** net displacement — no
matter how fast or slow each phase. Swimming needs a *non-reciprocal* stroke: a
rotating helix, or a wave sent down a flagellum.

*Introduced:* [1.5](lessons/01-05-low-reynolds-number.md)

### Gibbs free energy

The quantity nature minimizes at constant $T$ and $P$ — a tug-of-war between
making strong bonds and having many arrangements.

$$G = H - TS, \qquad \Delta G < 0 \ \text{spontaneous}$$

*Introduced:* [2.1](lessons/02-01-free-energy-cell-currency.md)

### Chemical potential

The free-energy price of adding one more molecule; it rises with concentration,
and molecules always flow from high $\mu$ to low $\mu$.

$$\mu = \frac{\partial G}{\partial N} = \mu^\circ + k_BT\ln\frac{c}{c^\circ}$$

*Introduced:* [2.1](lessons/02-01-free-energy-cell-currency.md)

### Two-state system

Open/closed, bound/free, folded/unfolded — a switch whose occupancy depends only
on the **gap** between the two levels, measured in thermal units.

$$p = \frac{1}{1 + e^{\Delta E/k_BT}}, \qquad \Delta E = E_1 - E_0$$

*Introduced:* [2.2](lessons/02-02-boltzmann-two-state.md)

### Dissociation constant

The ligand concentration at which half the sites are full. It is a
*dis*sociation constant, so **small $K_d$ means tight binding**.

$$K_d \equiv \frac{[R][L]}{[RL]} = c^\circ e^{\,\Delta G_{\text{bind}}/k_BT}$$

*Introduced:* [2.3](lessons/02-03-ligand-binding-occupancy.md)

### Hill coefficient

How much sharper than a single site the response is. $n=1$ is no cooperativity;
$n>1$ steepens the curve; $n$ is *effective* and almost always below the true
number of sites.

*Introduced:* [2.4](lessons/02-04-cooperativity-allostery.md)

### Allostery and the MWC model

The whole protein flips as a unit between a **Tense** (low-affinity) and a
**Relaxed** (high-affinity) conformation, in Boltzmann equilibrium. Each bound
ligand tilts the population toward R, raising *every* site's affinity — the sites
never touch. An effector binding elsewhere shifts $L_0$ and tunes the response
without going near the active site.

$$f_R = \frac{1}{1+L_0}, \qquad L_0 = \frac{[\mathrm{T_0}]}{[\mathrm{R_0}]} = e^{\Delta E/k_BT}$$

*Introduced:* [2.4](lessons/02-04-cooperativity-allostery.md)

### Freely-jointed chain

$N$ rigid links of length $b$, each pointing anywhere at zero cost — a random
walk in space. Its size is $b\sqrt N$, far smaller than its stretched length
$L = Nb$.

*Introduced:* [3.1](lessons/03-01-entropic-spring.md)

### Contour length

The backbone's total arc length if you laid every bond out straight. Not to be
confused with the relaxed coil's size, which is smaller by $\sqrt N$.

$$L = Nb, \qquad \text{dsDNA: } 0.34\ \mathrm{nm\ per\ base\ pair}$$

*Introduced:* [3.2](lessons/03-02-persistence-length-wlc.md)

### Persistence length

The arc length over which a chain forgets which way it was heading — stiffness
fighting thermal kicks to a draw. Below $l_p$ the chain is a rod; above it, a
random coil.

$$\langle \mathbf t(s)\cdot\mathbf t(0)\rangle = e^{-s/l_p}, \qquad l_p = \frac{B}{k_BT}$$

*Introduced:* [3.2](lessons/03-02-persistence-length-wlc.md)

### Kuhn length

The effective straight segment of the equivalent freely-jointed chain — exactly
**twice** the persistence length. Use $l_p$ inside the tangent correlation, $b$
in the freely-jointed formulas.

$$b = 2l_p$$

*Introduced:* [3.2](lessons/03-02-persistence-length-wlc.md)

### Worm-like chain

A smoothly bending elastic rod with thermal kicks: a stiff rod below $l_p$, the
entropic spring above it, with one model spanning both.

$$E_{\text{bend}} = \frac12 B\int_0^L\left(\frac{1}{R(s)}\right)^2 ds, \qquad \langle R^2\rangle = 2l_pL \ \ (L \gg l_p)$$

*Introduced:* [3.2](lessons/03-02-persistence-length-wlc.md)

### Hydrophobic effect

Oil and water separate not because oil molecules attract each other but because
burying oily surface **frees the ordered water** that was caging it. The driving
$\Delta G$ is entropic and lives in the *surroundings*, with $\Delta H \approx 0$
— which is why it gets stronger when you warm it.

$$\Delta G_{\text{transfer}} \approx -\varepsilon\,n_{\mathrm C}, \qquad \varepsilon \approx 1.1\,k_BT \ \text{per } \mathrm{CH_2}$$

*Introduced:* [3.4](lessons/03-04-self-assembly-hydrophobic.md)

### Packing parameter

One dimensionless number that decides sphere versus sheet: is the molecule shaped
like a cone (fat head, skinny tail) or a cylinder?

$$p = \frac{v}{a_0\,l}$$

*Introduced:* [3.4](lessons/03-04-self-assembly-hydrophobic.md)

### Critical micelle concentration

The threshold above which every extra amphiphile joins an aggregate instead of
floating free — a cooperative, near-phase-transition switch. It falls roughly by
a factor of $e$ per buried $\mathrm{CH_2}$.

$$\ln(\text{CMC}) \approx \text{const} - \frac{|\Delta G_{\text{tail}}|}{k_BT}$$

*Introduced:* [3.4](lessons/03-04-self-assembly-hydrophobic.md)

### Bending modulus

The price of curving a bilayer — and it is *cheap*, only about $20\,k_BT$, which
is why membranes ripple by themselves and why a cell reshapes them by bending
rather than stretching.

$$E_{\text{bend}} = \frac{\kappa}{2}\int (2H)^2\,dA, \qquad \kappa \approx 20\,k_BT$$

*Introduced:* [3.5](lessons/03-05-membrane-mechanics.md)

### Area-stretch modulus and tension

Stretching a membrane is the *expensive* knob: bilayers rupture at 2–4 percent
area strain, so they are effectively inextensible. Tension is the derivative of
the stretch energy with respect to strain.

$$e_{\text{stretch}} = \tfrac12 K_A u^2, \quad u = \frac{\Delta A}{A_0}, \qquad \sigma = K_A u, \qquad K_A \approx 0.2\ \mathrm{J/m^2}$$

*Introduced:* [3.5](lessons/03-05-membrane-mechanics.md)

### Bjerrum length

The separation at which two elementary charges' Coulomb energy equals one
$k_BT$ — *how strongly* charges couple in a given solvent. Water's large
$\varepsilon_r \approx 80$ is what shrinks it to sub-nanometer.

$$l_B = \frac{e^2}{4\pi\varepsilon_0\varepsilon_r k_BT} \approx 0.70\ \mathrm{nm}\ \text{in water}$$

*Introduced:* [3.6](lessons/03-06-electrostatics-salt-water.md)

### Debye length

*How far* a charge's influence reaches before its counterion cloud cancels it —
set by salt, not by geometry. In the cell it is about one nanometer, which makes
electrostatics a contact sport.

$$\lambda_D = \sqrt{\frac{\varepsilon_0\varepsilon_r k_BT}{2n_0e^2z^2}} = \frac{1}{\sqrt{8\pi l_B n_0}} \approx 0.8\ \mathrm{nm}\ \text{at 150 mM}$$

*Introduced:* [3.6](lessons/03-06-electrostatics-salt-water.md)

### Law of mass action

Molecules react only when they bump into each other, and bumps are independent —
so the forward rate goes as the **product** of the reactant concentrations.

$$\text{rate} = k_{\text{on}}[\mathrm A][\mathrm B] \ \ (\text{bimolecular}), \qquad k_{\text{off}}[\mathrm C]\ \ (\text{unimolecular})$$

*Introduced:* [4.1](lessons/04-01-reaction-kinetics-mass-action.md)

### Detailed balance

True equilibrium is stronger than "concentrations stopped moving": *every*
elementary step balances its own reverse, so there is **zero net circulation**
around any cycle. A passive machine therefore does no net work — the reason a
motor must burn fuel.

$$k_{12}k_{23}k_{31} = k_{21}k_{32}k_{13} \quad (\text{Wegscheider constraint})$$

*Introduced:* [4.1](lessons/04-01-reaction-kinetics-mass-action.md)

### Michaelis constant

The substrate concentration at which an enzyme runs at half speed. It equals the
binding $K_d$ **only** when catalysis is slow compared to unbinding.

$$K_M \equiv \frac{k_{-1} + k_{\mathrm{cat}}}{k_1} \; \xrightarrow[k_{\mathrm{cat}} \ll k_{-1}]{} \; K_d$$

*Introduced:* [4.2](lessons/04-02-michaelis-menten.md)

### Turnover number and catalytic efficiency

$k_{\mathrm{cat}}$ is how fast one *loaded* enzyme fires; $k_{\mathrm{cat}}/K_M$
is the effective bimolecular rate constant when substrate is scarce, and it
cannot exceed the diffusion limit. An enzyme that reaches it is "catalytically
perfect."

$$V_{\max} = k_{\mathrm{cat}}[\mathrm E]_{\text{tot}}, \qquad \frac{k_{\mathrm{cat}}}{K_M} \lesssim 10^{8}\text{–}10^{9}\ \mathrm{M^{-1}s^{-1}}$$

*Introduced:* [4.2](lessons/04-02-michaelis-menten.md)

### Brownian ratchet

A motor does not push against thermal noise, it **rectifies** it: ATP tilts or
resets a periodic energy landscape so that random hops preferentially count in
one direction. Without fuel the ratchet is Feynman's ratchet-and-pawl and goes
nowhere.

*Introduced:* [4.3](lessons/04-03-molecular-motors-ratchet.md)

### Stall force

The load at which the work done per step eats the entire free energy per step, so
forward and backward hops balance. An upper bound, not a delivered force.

$$F_{\text{stall}} = \frac{\Delta G_{\text{ATP}}}{d}$$

*Introduced:* [4.3](lessons/04-03-molecular-motors-ratchet.md)

### Equilibrium (Nernst) potential

The voltage at which an ion's electrical pull exactly cancels its concentration
push, so its net flux is zero. It is the voltage the ion is *content* at, not one
it creates — a conductance drags $V_m$ toward its own battery and never past it.

$$V_{\text{ion}} = \frac{k_BT}{ze}\ln\frac{c_{\text{out}}}{c_{\text{in}}}$$

*Introduced:* [4.4](lessons/04-04-membrane-potentials-nernst-goldman.md)

### Permeability

How easily an ion crosses the membrane (units of a velocity). Permeabilities are
the *weights* in the Goldman average — whichever ion crosses most easily pulls
the resting potential closest to its own Nernst value.

*Introduced:* [4.4](lessons/04-04-membrane-potentials-nernst-goldman.md)

### Gating charge and slope factor

Charged residues in a channel's voltage sensor move across the membrane field
when it opens; voltage does work on them, tilting the two-state gap. More gating
charge means a **sharper** switch.

$$q_{\text{gate}} = ze, \qquad V_s = \frac{k_BT}{q_{\text{gate}}} \approx \frac{26\ \mathrm{mV}}{z}$$

*Introduced:* [4.5](lessons/04-05-excitable-membranes-action-potential.md)

### Dwell time

How long a molecule sits in one state before leaving. Because leaving is
memoryless (constant chance per unit time), dwell times are exponentially
distributed and the decay rate *is* the rate constant.

$$P(t) = k e^{-kt}, \qquad \langle t\rangle = \frac1k$$

*Introduced:* [4.6](lessons/04-06-single-molecule-inference.md)

### Maximum likelihood estimate

The parameter value that makes the data you actually saw most probable. For
exponential dwells it collapses to something you can do in your head — and it
needs no histogram bins.

$$\hat k = \frac{N}{\sum_i t_i} = \frac{1}{\langle t\rangle}, \qquad \frac{\sigma_k}{k} = \frac{1}{\sqrt N}$$

*Introduced:* [4.6](lessons/04-06-single-molecule-inference.md)

## Formulas and rules

### Unit conversions

The whole course is order-of-magnitude estimation, so conversions are the most-used
lines on this card.

| From | To |
|---|---|
| $1\,k_BT$ (at $T \approx 300\ \mathrm{K}$) | $4.1\ \mathrm{pN\cdot nm} = 4.1\times10^{-21}\ \mathrm{J} = 0.6\ \mathrm{kcal/mol} = 2.5\ \mathrm{kJ/mol} = 25\ \mathrm{meV}$ |
| $RT = N_Ak_BT$ | $2.5\ \mathrm{kJ/mol} = 0.6\ \mathrm{kcal/mol}$ ($N_A = 6.02\times10^{23}\ \mathrm{mol^{-1}}$) |
| $k_BT/\mathrm{nm}$ | $4.1\ \mathrm{pN}$ — the thermal force scale over one nanometer |
| $k_BT/e$ | $26\ \mathrm{mV}$, i.e. $58\ \mathrm{mV}$ per decade of concentration ratio |
| $1\ \mathrm{J}$ | $10^{21}\ \mathrm{pN\cdot nm}$; and $1\ \mathrm{m^2} = 10^{18}\ \mathrm{nm^2}$ |
| $1\ \mathrm{mM}$ | $1\ \mathrm{mol/m^3}$; and $1\ \mu\mathrm{M} \approx 600$ molecules per $\mu\mathrm{m^3}$ |
| oil–water $\gamma = 50\ \mathrm{mJ/m^2}$ | $12\,k_BT/\mathrm{nm^2}$ |

Anything quoted in kJ/mol must be divided by $N_A$ before it is compared with a
single molecule's $k_BT$ in joules — or just compared with $RT$ directly.

*From* [1.1](lessons/01-01-kbt-ruler-scales.md), [2.1](lessons/02-01-free-energy-cell-currency.md), [3.4](lessons/03-04-self-assembly-hydrophobic.md)

### The energy ladder

Everything in $k_BT$ at $\sim\!300\ \mathrm{K}$. A few $k_BT$ is made and unmade by
thermal noise constantly; $\gg k_BT$ is stable and needs machinery.

| Process | Energy | Consequence |
|---|---|---|
| Thermal noise | $1\,k_BT$ | the ruler itself |
| Hydrogen / weak bond | $1$–$3\,k_BT$ | flickers open ~5–12 percent of the time → used for reversible recognition |
| Burying one $\mathrm{CH_2}$ (hydrophobic) | $\approx 1.1\,k_BT$ | assembly free energy adds up per carbon |
| One lipid-tail patch ($0.30\ \mathrm{nm^2}$) left exposed to water | $\approx 3.6\,k_BT$ | why lipid heads pack shoulder-to-shoulder |
| Marginal protein folding stability | $\approx 10\,k_BT$ ($5$–$15$) | soft; breathes and denatures easily |
| Membrane bending modulus $\kappa$ | $\approx 20\,k_BT$ | cheap to bend — membranes flicker visibly |
| ATP hydrolysis, cellular | $\approx 20\,k_BT$ ($\approx -50\ \mathrm{kJ/mol}$) | the cell's currency; drives motors and pumps |
| ATP hydrolysis, standard state | $\approx 12\,k_BT$ ($\Delta G^\circ \approx -30.5\ \mathrm{kJ/mol}$) | the cell holds ATP far from equilibrium, buying the extra $\sim\!8\,k_BT$ |
| Burying a 14-carbon lipid tail | $\approx -15\,k_BT$ | membranes do not spontaneously dissolve |
| Specific binding (nM–µM $K_d$) | $-14$ to $-21\,k_BT$ | a dozen hydrogen bonds' worth, no more |
| DNA wrapped on one nucleosome | $\approx 57\,k_BT$ | histone binding must pay it; thermal noise never will |
| A whole vesicle, $8\pi\kappa$ | $\approx 500\,k_BT$ | clathrin/COPII coats pay the bill, not fluctuations |
| Covalent bond | $100$–$200\,k_BT$ | only an enzyme lowering the barrier can touch it |

*From* [1.1](lessons/01-01-kbt-ruler-scales.md), [2.1](lessons/02-01-free-energy-cell-currency.md), [3.2](lessons/03-02-persistence-length-wlc.md), [3.4](lessons/03-04-self-assembly-hydrophobic.md), [3.5](lessons/03-05-membrane-mechanics.md)

### The length ladder

| Object | Size |
|---|---|
| Water molecule | $0.3\ \mathrm{nm}$ |
| dsDNA base-pair rise | $0.34\ \mathrm{nm}$ (one charge every $0.17\ \mathrm{nm}$) |
| Bjerrum length in water $l_B$ | $0.70\ \mathrm{nm}$ |
| Debye length $\lambda_D$ at 150 mM | $\approx 0.8\ \mathrm{nm}$ (3.0 nm at 10 mM) |
| Lipid bilayer thickness | $\approx 4\ \mathrm{nm}$ |
| Kinesin step $d$ | $8\ \mathrm{nm}$ (myosin V: $36\ \mathrm{nm}$) |
| Typical protein | radius $\approx 2\ \mathrm{nm}$, diameter $\approx 5\ \mathrm{nm}$ |
| Persistence length: unstructured protein | $0.5$–$1\ \mathrm{nm}$ |
| Persistence length: dsDNA | $\approx 50\ \mathrm{nm}$ ($\approx 150$ bp), Kuhn $b = 100\ \mathrm{nm}$ |
| Persistence length: actin filament | $\approx 15\ \mu\mathrm{m}$ |
| Persistence length: microtubule | $\sim 1\ \mathrm{mm}$ — rigid on any cellular scale |
| Bacterium | $\approx 1\ \mu\mathrm{m}$; eukaryotic cell $10$–$20\ \mu\mathrm{m}$ |
| $\lambda$-DNA contour length | $\approx 16\ \mu\mathrm{m}$ (coils to $\approx 1.3\ \mu\mathrm{m}$) |
| Neuron axon | up to $1\ \mathrm{m}$ |

*From* [1.1](lessons/01-01-kbt-ruler-scales.md), [3.2](lessons/03-02-persistence-length-wlc.md), [3.3](lessons/03-03-stretching-single-molecules.md), [3.6](lessons/03-06-electrostatics-salt-water.md), [4.3](lessons/04-03-molecular-motors-ratchet.md)

### The force ladder

Piconewtons are the cell's force unit, because pN·nm energies over nm steps give
pN forces.

| Force | Value |
|---|---|
| Entropic pull scale of dsDNA, $k_BT/l_p$ | $\approx 0.08\ \mathrm{pN}$ |
| Holding $\mu$m-scale DNA at 10 percent extension | $\sim 0.01\ \mathrm{pN}$ |
| Holding dsDNA at 90 percent of contour | $\approx 2\ \mathrm{pN}$ |
| Stretching an unfolded protein loop a few nm | $\sim 1\ \mathrm{pN}$ |
| Thermal force scale $k_BT/\mathrm{nm}$ | $4.1\ \mathrm{pN}$ |
| Myosin V stall | $2$–$3\ \mathrm{pN}$ (ceiling $\Delta G/d \approx 2.3$) |
| Kinesin stall | $5$–$7\ \mathrm{pN}$ (thermodynamic ceiling $\approx 10\ \mathrm{pN}$) |
| dsDNA overstretching transition | $\approx 65\ \mathrm{pN}$ (at $x/L \approx 0.98$ on the WLC curve) |
| Membrane lysis tension | a few $\mathrm{mN/m}$ (at 2–4 percent area strain) |
| Covalent bond rupture | $\sim 1000\ \mathrm{pN} = 1\ \mathrm{nN}$ |

*From* [1.1](lessons/01-01-kbt-ruler-scales.md), [3.1](lessons/03-01-entropic-spring.md), [3.3](lessons/03-03-stretching-single-molecules.md), [3.5](lessons/03-05-membrane-mechanics.md), [4.3](lessons/04-03-molecular-motors-ratchet.md)

### The time and transport ladder

| Quantity | Value |
|---|---|
| Collisions on a protein in water | $\sim 10^{12}\ \mathrm{s^{-1}}$ |
| $D$, small molecule in water | $\sim 10^3\ \mu\mathrm{m^2/s}$ (glucose $\approx 600$) |
| $D$, protein in water / cytoplasm | $10$–$100\ \mu\mathrm{m^2/s}$ ($\approx 110$ for a 2 nm sphere) |
| $D$, protein in a membrane | $\approx 1\ \mu\mathrm{m^2/s}$ |
| Diffusion across a $1\ \mu\mathrm{m}$ bacterium | $\sim 0.2$–$20\ \mathrm{ms}$ (depending on $D$) |
| Diffusion across a $100\ \mu\mathrm{m}$ cell | tens of seconds |
| Diffusion down a $1\ \mathrm{m}$ axon | years — which is why axons fire actively |
| *E. coli* swimming speed / $Re$ / $Pe$ | $30\ \mu\mathrm{m/s}$ / $3\times10^{-5}$ / $0.06$ |
| *E. coli* momentum relaxation $\tau = m/\gamma$, glide distance | $\sim 2\times10^{-7}\ \mathrm{s}$, $\sim 7\ \mathrm{pm}$ (sub-atomic) |
| Kinesin unloaded speed | $\sim 800\ \mathrm{nm/s}$ ($\sim 100$ steps/s) |
| Enzyme turnover $k_{\mathrm{cat}}$ | $10$–$10^6\ \mathrm{s^{-1}}$ |
| Action potential duration | $\approx 1\ \mathrm{ms}$, amplitude $\approx 100\ \mathrm{mV}$ |

Diffusion time scales as the **square** of distance, so a $10^3$-fold longer trip
costs $10^6$ times as long. That single fact is why bacteria trust diffusion and
neurons build motors.

*From* [1.2](lessons/01-02-random-walk.md), [1.3](lessons/01-03-diffusion-ficks-laws.md), [1.4](lessons/01-04-einstein-relation.md), [1.5](lessons/01-05-low-reynolds-number.md), [4.2](lessons/04-02-michaelis-menten.md), [4.3](lessons/04-03-molecular-motors-ratchet.md), [4.5](lessons/04-05-excitable-membranes-action-potential.md)

### Cellular concentrations and rate ceilings

| Quantity | Value |
|---|---|
| Physiological monovalent salt / ionic strength | $\approx 150\ \mathrm{mM}$ |
| ATP / ADP / $\mathrm{P_i}$ in the cytoplasm | $\approx 3\ \mathrm{mM}$ / $0.1\ \mathrm{mM}$ / $3\ \mathrm{mM}$ |
| Diffusion-limited on-rate $k_{\text{diff}} = 4\pi Da$ | $10^{8}$–$10^{9}\ \mathrm{M^{-1}s^{-1}}$ |
| Real measured on-rates | $10^{6}$–$10^{9}\ \mathrm{M^{-1}s^{-1}}$ |
| Detergent CMC (single tail, ~10–12 C) | a few mM |
| Phospholipid CMC (two tails, ~32 C) | $\sim 10^{-10}\ \mathrm{M}$ — lipids essentially never leave the membrane |

**Mammalian ion concentrations and their Nernst potentials** (at
$k_BT/e = 26\ \mathrm{mV}$):

| Ion | inside | outside | $z$ | $V_{\text{ion}}$ |
|---|---|---|---|---|
| $\mathrm{K^+}$ | $140\ \mathrm{mM}$ | $5\ \mathrm{mM}$ | $+1$ | $\approx -87\ \mathrm{mV}$ |
| $\mathrm{Na^+}$ | $15\ \mathrm{mM}$ | $145\ \mathrm{mM}$ | $+1$ | $\approx +59\ \mathrm{mV}$ |
| $\mathrm{Ca^{2+}}$ | $100\ \mathrm{nM}$ | $2\ \mathrm{mM}$ | $+2$ | $\approx +129\ \mathrm{mV}$ |
| $\mathrm{Cl^-}$ (typical) | $\sim 10\ \mathrm{mM}$ | $\sim 110\ \mathrm{mM}$ | $-1$ | $\approx -62\ \mathrm{mV}$ |

Resting neuron: $V_m \approx -70\ \mathrm{mV}$, produced by
$P_{Na}/P_K \approx 0.03$. Spike peak $\approx +40\ \mathrm{mV}$ — short of
$V_{Na}$, because inactivation arrives first.

*From* [2.1](lessons/02-01-free-energy-cell-currency.md), [3.4](lessons/03-04-self-assembly-hydrophobic.md), [3.6](lessons/03-06-electrostatics-salt-water.md), [4.1](lessons/04-01-reaction-kinetics-mass-action.md), [4.4](lessons/04-04-membrane-potentials-nernst-goldman.md), [4.5](lessons/04-05-excitable-membranes-action-potential.md)

### Random walks and Fick's laws

$$\langle x\rangle = 0, \qquad \langle x^2\rangle = Nb^2, \qquad \langle x\rangle_{\text{biased}} = N(p-q)b, \qquad \sigma_{\text{biased}} = b\sqrt{4pqN}$$

$$P(x,N) = \frac{1}{\sqrt{2\pi Nb^2}}e^{-x^2/(2Nb^2)} \qquad (\text{central limit theorem})$$

$$\mathbf J = -D\nabla c, \qquad \frac{\partial c}{\partial t} = D\nabla^2 c, \qquad c(x,t) = \frac{N}{\sqrt{4\pi Dt}}e^{-x^2/4Dt}$$

| Job | Formula |
|---|---|
| Diffusion time over a distance $L$ | $t \sim L^2/2D$ (1D), $L^2/6D$ (3D) |
| Steady state | $\nabla^2 c = 0$ — linear in a slab, $\propto 1/r$ around a sphere |
| Flux through a thin barrier | $J = P\,\Delta c$ with permeability $P = D/L$ |
| Perfectly absorbing sphere | $c(r) = c_\infty(1 - a/r)$, capture rate $I = 4\pi D a\,c_\infty$ |

Drift grows as $N$ while spread grows only as $\sqrt N$, so even a weak bias wins
in the long run.

*From* [1.2](lessons/01-02-random-walk.md) *and* [1.3](lessons/01-03-diffusion-ficks-laws.md)

### The Einstein relation and life at low Reynolds number

$$\boxed{\,D = \frac{k_BT}{\gamma} = \mu k_BT\,} \qquad \gamma = 6\pi\eta a \ \ (\text{Stokes sphere}) \qquad\Longrightarrow\qquad D = \frac{k_BT}{6\pi\eta a}$$

Fluctuation and dissipation are the *same* collisions seen twice: fix the fluid
and the temperature and knowing one determines the other. The diffusion-limited
(Smoluchowski) rate constant follows from the absorbing sphere:

$$k_{\text{diff}} = 4\pi D a \quad (\text{multiply by } N_A \times 10^{3}\ \mathrm{L/m^3} \text{ for } \mathrm{M^{-1}s^{-1}})$$

At $Re \ll 1$ inertia drops out of Navier–Stokes, leaving the linear Stokes
equations $\eta\nabla^2\mathbf v = \nabla p$, $\nabla\cdot\mathbf v = 0$ — no time
derivative, no memory. Consequences: drag is **linear** ($F = \gamma v$, not
$v^2$); a coasting body glides only $d = v_0 m/\gamma$; and any reciprocal stroke
nets zero (scallop theorem). Water: $\eta \approx 10^{-3}\ \mathrm{Pa\cdot s}$,
$\nu \approx 10^{-6}\ \mathrm{m^2/s}$.

*From* [1.4](lessons/01-04-einstein-relation.md) *and* [1.5](lessons/01-05-low-reynolds-number.md)

### Free energy bookkeeping

$$G = H - TS, \qquad \mu = \mu^\circ + k_BT\ln\frac{c}{c^\circ}, \qquad \Delta G = \Delta G^\circ + k_BT\ln Q$$

$$\Delta G^\circ = -k_BT\ln K_{\text{eq}} \qquad\Longleftrightarrow\qquad K_{\text{eq}} = e^{-\Delta G^\circ/k_BT}$$

Free energies **add**, which is why coupling works: bolt ATP's $\approx -20\,k_BT$
onto a positive $\Delta G$ and the sum runs downhill — provided a real enzyme and
shared intermediate physically link them. Moving one ion up a concentration
gradient costs $\Delta\mu = k_BT\ln(c_{\text{out}}/c_{\text{in}})$.

*From* [2.1](lessons/02-01-free-energy-cell-currency.md)

### Two-state occupancy, binding, and cooperativity

$$Z = e^{-E_0/k_BT} + e^{-E_1/k_BT}, \qquad p = \frac{1}{1+e^{\Delta E/k_BT}}$$

$$\text{Langmuir: } \ p = \frac{[L]/K_d}{1+[L]/K_d} = \frac{[L]}{K_d + [L]}, \qquad K_d = c^\circ e^{\,\Delta G_{\text{bind}}/k_BT}$$

$$\text{Hill: } \ p = \frac{([L]/K_d)^n}{1+([L]/K_d)^n}, \qquad \log\frac{p}{1-p} = n\log[L] - n\log K_d$$

| Question | Answer |
|---|---|
| Occupancy from a ratio $x = [L]/K_d$ | $p = x/(1+x)$; $x$ and $1/x$ give occupancies summing to 1 |
| Ratio from an occupancy | $[L]/K_d = \big(p/(1-p)\big)^{1/n}$ |
| Energy gap from an occupancy | $\Delta E = k_BT\ln\big((1-p)/p\big)$ |
| 10 → 90 percent swing, energy | $2\ln 9 = 4.4\,k_BT$, wherever the midpoint sits |
| 10 → 90 percent swing, ligand | fold-change $= 81^{1/n}$ — 81× at $n=1$, 9× at $n=2$, 3× at $n=4$ |
| Half occupancy | $\Delta E = 0$, equivalently $[L] = K_d$ |
| Binding free energy from $K_d$ | $\Delta G_{\text{bind}} = k_BT\ln(K_d/c^\circ)$ |

Binding is gating whose bias you turn with a dial marked $[L]$: raising the ligand
concentration raises its chemical potential, which tilts the gap
$\Delta E = \varepsilon_b - \mu$. Voltage gating in 4.5 does the same thing with
$V$ on the dial.

*From* [2.2](lessons/02-02-boltzmann-two-state.md), [2.3](lessons/02-03-ligand-binding-occupancy.md), [2.4](lessons/02-04-cooperativity-allostery.md)

### Polymer elasticity

$$\Omega(x) \propto e^{-3x^2/2Nb^2}, \qquad F(x) = \frac{3k_BT}{2Nb^2}x^2, \qquad f = kx \ \text{with}\ k = \frac{3k_BT}{Nb^2}$$

| Model | Size | Low-force stiffness |
|---|---|---|
| Freely-jointed chain | $\sqrt{\langle R^2\rangle} = b\sqrt N$, contour $L = Nb$ | $k = 3k_BT/Nb^2$ |
| Worm-like chain ($L \gg l_p$) | $\sqrt{\langle R^2\rangle} = \sqrt{2l_pL}$ | $k = 3k_BT/(2l_pL)$ |
| Worm-like chain ($L \lesssim l_p$) | $\langle R^2\rangle \to L^2$ — a rod, not a coil | (not a spring) |

**Marko–Siggia** interpolation, accurate across the whole range and the workhorse
fit for tweezers data:

$$F(x) = \frac{k_BT}{l_p}\left[\frac{1}{4(1-x/L)^2} - \frac14 + \frac{x}{L}\right]$$

- Low extension: the bracket $\to \tfrac32 (x/L)$, giving $F \approx 3k_BT x/(2l_pL)$ — the **toe measures $l_p$**.
- Near full extension: $F \approx \dfrac{k_BT}{4l_p}\dfrac{1}{(1-x/L)^2}$ — the **wall measures $L$**; halve the remaining gap and the force quadruples.
- The bracket depends only on $x/L$; all the units live in the prefactor $k_BT/l_p$.

The entropic spring constant is **proportional to $T$** — heat it and it stiffens
(the Gough–Joule effect), the fingerprint of entropic rather than bond elasticity.

*From* [3.1](lessons/03-01-entropic-spring.md), [3.2](lessons/03-02-persistence-length-wlc.md), [3.3](lessons/03-03-stretching-single-molecules.md)

### Self-assembly and membrane mechanics

| $p = v/(a_0l)$ | Molecular shape | Assembly |
|---|---|---|
| $p < \tfrac13$ | cone | spherical **micelle** (single-tail detergents) |
| $\tfrac13 < p < \tfrac12$ | truncated cone | cylindrical micelle |
| $\tfrac12 < p < 1$ | cylinder | **bilayer** (double-tail phospholipids) |
| $p > 1$ | inverted cone | inverted / hexagonal phases |

$$E_{\text{bend}} = \frac{\kappa}{2}\int(2H)^2 dA, \qquad \text{sphere: } E = 8\pi\kappa \ \ (\textbf{radius-independent})$$

$$\langle |h_q|^2\rangle = \frac{k_BT}{A(\kappa q^4 + \sigma q^2)} \qquad (\text{flicker spectroscopy measures } \kappa)$$

Because $\kappa \approx 20\,k_BT$ is small and $K_A \approx 0.2\ \mathrm{J/m^2}$ is
large, a membrane always **bends at constant area** rather than stretching: a
1 percent stretch of a $1\ \mu\mathrm{m^2}$ patch already costs $\sim\!2400\,k_BT$
versus $\sim\!500\,k_BT$ to fold the whole patch into a vesicle. The $q^4$ makes
long-wavelength ripples the floppy ones — a $5\ \mu\mathrm{m}$ vesicle's longest
mode has an rms amplitude of $\sim\!40\ \mathrm{nm}$, optically visible.

*From* [3.4](lessons/03-04-self-assembly-hydrophobic.md) *and* [3.5](lessons/03-05-membrane-mechanics.md)

### Electrostatics in salt water

$$n_\pm = n_0 e^{\mp e\varphi/k_BT}, \qquad \nabla^2\varphi = -\frac{\rho}{\varepsilon_0\varepsilon_r} \;\Longrightarrow\; \nabla^2\varphi = \frac{2en_0}{\varepsilon_0\varepsilon_r}\sinh\!\frac{e\varphi}{k_BT}$$

Linearize for $e\varphi \ll k_BT$ (**Debye–Hückel**) and one length survives:

$$\nabla^2\varphi = \frac{\varphi}{\lambda_D^2}, \qquad \varphi(r) = \frac{q}{4\pi\varepsilon_0\varepsilon_r r}e^{-r/\lambda_D} \quad (\text{Yukawa})$$

| Job | Rule |
|---|---|
| Debye length, room-temperature 1:1 salt | $\lambda_D\ (\mathrm{nm}) \approx 0.30/\sqrt{I}$, with $I$ in molar |
| Ionic strength | $I = \tfrac12\sum_i c_i z_i^2$ — a divalent ion counts 4× |
| Salt dependence | $\lambda_D \propto 1/\sqrt{n_0}$: a 15-fold dilution buys only $\sqrt{15} \approx 3.9\times$ reach |
| Surviving fraction of the bare Coulomb potential | $e^{-r/\lambda_D}$ — 37 percent at $\lambda_D$, 0.2 percent at 5 nm |
| Bjerrum in vacuum vs water | $56\ \mathrm{nm}$ vs $0.70\ \mathrm{nm}$ ($\varepsilon_r \approx 80$) |

*From* [3.6](lessons/03-06-electrostatics-salt-water.md)

### Rate equations and enzyme kinetics

$$\frac{d[\mathrm C]}{dt} = k_{\text{on}}[\mathrm A][\mathrm B] - k_{\text{off}}[\mathrm C], \qquad K_d = \frac{k_{\text{off}}}{k_{\text{on}}}, \qquad \text{residence time} = \frac{1}{k_{\text{off}}}$$

$$k_{\text{off}} \approx \nu\, e^{-\Delta G^{\ddagger}/k_BT} \qquad\qquad \frac{1}{\tau} = k_{\text{on}}[\mathrm L] + k_{\text{off}}$$

Plot $\tau^{-1}$ against $[\mathrm L]$: slope $= k_{\text{on}}$, intercept
$= k_{\text{off}}$ — both rate constants from one straight line.

$$\boxed{\,v = \frac{V_{\max}[\mathrm S]}{K_M + [\mathrm S]}\,} \qquad V_{\max} = k_{\mathrm{cat}}[\mathrm E]_{\text{tot}}, \qquad K_M = \frac{k_{-1}+k_{\mathrm{cat}}}{k_1}$$

| Regime | Behaviour |
|---|---|
| $[\mathrm S] \ll K_M$ | $v \approx (k_{\mathrm{cat}}/K_M)[\mathrm E]_{\text{tot}}[\mathrm S]$ — first order |
| $[\mathrm S] = K_M$ | $v = V_{\max}/2$, by definition |
| $[\mathrm S] = 9K_M$ / $10K_M$ / $100K_M$ | 90 / 91 / 99 percent of $V_{\max}$ |
| $[\mathrm S] \gg K_M$ | $v \approx V_{\max}$ — zeroth order, saturated |
| General fraction $f$ of $V_{\max}$ | $[\mathrm S] = \dfrac{f}{1-f}K_M$ |
| Lineweaver–Burk | $\dfrac1v = \dfrac{K_M}{V_{\max}}\dfrac{1}{[\mathrm S]} + \dfrac{1}{V_{\max}}$ |

Michaelis–Menten **is** a Langmuir curve times a turnover rate: rate = (fraction of
enzyme loaded) × $k_{\mathrm{cat}}$.

*From* [4.1](lessons/04-01-reaction-kinetics-mass-action.md) *and* [4.2](lessons/04-02-michaelis-menten.md)

### Motors

$$\frac{k_+}{k_-} = \exp\!\left(\frac{\Delta G_{\text{ATP}} - Fd}{k_BT}\right), \qquad F_{\text{stall}} = \frac{\Delta G_{\text{ATP}}}{d}, \qquad \eta = \frac{Fd}{\Delta G_{\text{ATP}}} = \frac{F}{F_{\text{stall}}}$$

$$v(F) \approx v_{\max}\left(1 - \frac{F}{F_{\text{stall}}}\right), \qquad P = Fv \ \text{is maximized at}\ F = \tfrac12 F_{\text{stall}}$$

Set $\Delta G_{\text{ATP}} = 0$ and the ratio is 1: a passive ratchet has no net
current and does no work. A motor delivers zero power both unloaded and at stall,
so cells gang several motors on a cargo to keep each at a comfortable sub-stall
load. Beyond stall the motor is dragged backward — which is how $\mathrm{F_1}$
runs in reverse and synthesizes ATP.

*From* [4.3](lessons/04-03-molecular-motors-ratchet.md)

### Membrane potentials and voltage gating

$$\bar\mu = \mu^\circ + k_BT\ln c + ze\varphi, \qquad V_{\text{ion}} = \frac{k_BT}{ze}\ln\frac{c_{\text{out}}}{c_{\text{in}}}$$

$$V_{\text{ion}} \approx \frac{26\ \mathrm{mV}}{z}\ln\frac{c_{\text{out}}}{c_{\text{in}}} \approx \frac{58\ \mathrm{mV}}{z}\log_{10}\frac{c_{\text{out}}}{c_{\text{in}}}$$

$$V_m = \frac{k_BT}{e}\ln\frac{P_K[\mathrm K^+]_{\text{out}} + P_{Na}[\mathrm{Na}^+]_{\text{out}} + P_{Cl}[\mathrm{Cl}^-]_{\text{in}}}{P_K[\mathrm K^+]_{\text{in}} + P_{Na}[\mathrm{Na}^+]_{\text{in}} + P_{Cl}[\mathrm{Cl}^-]_{\text{out}}} \quad (\text{Goldman–Hodgkin–Katz})$$

Anions enter GHK with inside and outside **swapped** — the same flip $z = -1$
produces in Nernst. Set all but one permeability to zero and GHK collapses to that
ion's Nernst potential; that is the sanity check. Dividing through by $P_K$ leaves
only the ratio $r = P_{Na}/P_K$, which is usually all you need.

$$P_{\text{open}}(V) = \frac{1}{1+e^{(V_{1/2}-V)/V_s}}, \qquad \Delta E = q_{\text{gate}}(V_{1/2}-V), \qquad V_s = \frac{k_BT}{q_{\text{gate}}} \approx \frac{26\ \mathrm{mV}}{z}$$

Real channels have effective $z \sim 4$–$12$, so $V_s$ is a few mV — a sharp
switch. Action-potential phases: $\mathrm{Na}^+$ positive feedback drives the
upstroke toward $V_{Na}$; inactivation plus slower $\mathrm{K}^+$ opening drives
repolarization and undershoot toward $V_K$; residual inactivation is the
refractory period, which makes propagation one-way and caps the firing rate.

*From* [4.4](lessons/04-04-membrane-potentials-nernst-goldman.md) *and* [4.5](lessons/04-05-excitable-membranes-action-potential.md)

### Extracting numbers from single molecules

$$P(t) = ke^{-kt}, \qquad \hat k = \frac{N}{\sum_i t_i} = \frac{1}{\langle t\rangle}, \qquad \frac{\sigma_k}{k} = \frac{1}{\sqrt N}$$

$$\mathrm{AIC} = 2p - 2\ln\hat L, \qquad \mathrm{BIC} = p\ln N - 2\ln\hat L \qquad (\text{lower wins})$$

| Target precision | Events needed |
|---|---|
| 30 percent | $\sim 10$ |
| 10 percent | $\sim 100$ |
| 5 percent | $400$ |
| 1 percent | $\sim 10^4$ |

Precision is bought with events at a quadratic price: doubling it costs four times
the data. Counting statistics, not the apparatus, sets this wall.

*From* [4.6](lessons/04-06-single-molecule-inference.md)

## Assumed, not taught here

A Tier 2 physics course whose stated prerequisite is
[`stat-mech`](../stat-mech/reference.md): it *uses* the following without deriving
them, and every row points at the course that does.

| Fact | Where it's taught |
|---|---|
| The Boltzmann factor $e^{-E/k_BT}$ and the canonical ensemble | [stat-mech 3.1](../stat-mech/lessons/03-01-canonical-ensemble-boltzmann-factor.md) |
| The partition function as the normalizer of Boltzmann weights | [stat-mech 3.2](../stat-mech/lessons/03-02-partition-function.md) |
| Equipartition — $\tfrac12 k_BT$ per quadratic mode (the membrane flicker spectrum, tweezer calibration) | [stat-mech 3.4](../stat-mech/lessons/03-04-equipartition-theorem.md) |
| The grand-canonical view of a site exchanging particles with a reservoir at $\mu$ | [stat-mech 3.5](../stat-mech/lessons/03-05-grand-canonical-ensemble.md) |
| $S = k_B\ln\Omega$ (the entropic spring's whole content) | [stat-mech 1.3](../stat-mech/lessons/01-03-entropy-microcanonical.md) |
| $G = H - TS$ and the thermodynamic potentials | [stat-mech 2.3](../stat-mech/lessons/02-03-thermodynamic-potentials-legendre.md), [physical-chemistry 1.3](../physical-chemistry/lessons/01-03-gibbs-helmholtz-energies.md) |
| Chemical potential and $\Delta G^\circ = -RT\ln K$ | [physical-chemistry 1.5](../physical-chemistry/lessons/01-05-chemical-potential.md), [2.6](../physical-chemistry/lessons/02-06-chemical-equilibrium-constant.md) |
| Langevin/Brownian motion and fluctuation–dissipation in general | [stat-mech 6.1](../stat-mech/lessons/06-01-brownian-langevin.md) |
| The central limit theorem behind the Gaussian walk and the Gaussian chain | [prob-stat-refresher 3.3](../prob-stat-refresher/lessons/03-03-central-limit-theorem.md) |
| Exponential and Poisson distributions, and memorylessness | [prob-stat-refresher 2.2](../prob-stat-refresher/lessons/02-02-discrete-distributions.md), [2.3](../prob-stat-refresher/lessons/02-03-continuous-distributions.md) |
| Maximum likelihood as an estimation method, and error bars | [prob-stat-refresher 4.1](../prob-stat-refresher/lessons/04-01-estimation-and-mle.md), [4.2](../prob-stat-refresher/lessons/04-02-confidence-intervals.md) |
| Stokes drag $\gamma = 6\pi\eta a$ and creeping flow | [fluid-dynamics 3.3](../fluid-dynamics/lessons/03-03-stokes-flow.md) |
| The Reynolds number and the Navier–Stokes equations it comes from | [fluid-dynamics 3.1](../fluid-dynamics/lessons/03-01-reynolds-number.md), [1.6](../fluid-dynamics/lessons/01-06-navier-stokes.md) |
| The diffusion/heat equation, its point-source Gaussian, and Laplace's equation | [pdes 2.1](../pdes/lessons/02-01-heat-diffusion-equations.md), [4.2](../pdes/lessons/04-02-heat-equation-line-heat-kernel.md), [2.3](../pdes/lessons/02-03-laplace-poisson-equations.md) |
| Solving $\dot y = a - by$ — the exponential approach to equilibrium | [ode-refresher 1.2](../ode-refresher/lessons/01-02-separable-and-linear-first-order.md) |
| Gradient, divergence, and the Laplacian as curvature | [calc-refresher 4.1](../calc-refresher/lessons/04-01-partial-derivatives-and-gradient.md), [5.1](../calc-refresher/lessons/05-01-vector-fields-div-curl.md) |
| Coulomb's law, permittivity, potential, and Poisson's equation | [em-refresher 1.1](../em-refresher/lessons/01-01-coulomb-electric-field.md), [1.2](../em-refresher/lessons/01-02-gauss-law.md), [1.3](../em-refresher/lessons/01-03-electric-potential.md) |
| Debye shielding of a test charge (the identical equation, in a plasma) | [plasma-physics 1.1](../plasma-physics/lessons/01-01-what-is-a-plasma-debye.md) |
| The mole, molar mass, and Avogadro's number (every kJ/mol ↔ $k_BT$ conversion) | [general-chemistry 2.1](../general-chemistry/lessons/02-01-mole-molar-mass-formulas.md) |
| Arrhenius / transition-state theory behind $k_{\text{off}} \approx \nu e^{-\Delta G^{\ddagger}/k_BT}$ | [physical-chemistry 3.4](../physical-chemistry/lessons/03-04-arrhenius-transition-state-theory.md) |
| Quasi-steady-state and pre-equilibrium approximations in mechanisms | [physical-chemistry 3.3](../physical-chemistry/lessons/03-03-mechanisms-steady-state-pre-equilibrium.md), [3.5](../physical-chemistry/lessons/03-05-catalysis-enzyme-kinetics.md) |
| Elastic-rod bending energy $\propto$ curvature squared (the $B$ in $l_p = B/k_BT$) | [mechanics-of-materials 2.4](../mechanics-of-materials/lessons/02-04-flexure-formula.md) |
| Harmonic-well elasticity, $\tfrac12kx^2$, that every quadratic free energy reduces to | [mechanics-refresher 3.1](../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md) |

## Pitfalls

### Units and the ruler

- $k_BT$ is not a budget you spend — it is the typical size of the kicks *already happening*. "Costs $2\,k_BT$" means noise pays for it often. *([1.1](lessons/01-01-kbt-ruler-scales.md))*
- $k_BT$ is per **molecule**, $RT = N_Ak_BT$ per **mole**; never let both appear in one line. *([1.1](lessons/01-01-kbt-ruler-scales.md), [2.1](lessons/02-01-free-energy-cell-currency.md))*
- Treating 300 K as exact is wasted effort — room to body temperature shifts $k_BT$ by only about 4 percent. *([1.1](lessons/01-01-kbt-ruler-scales.md))*
- You cannot take the log of a concentration: divide by $c^\circ$ first. The same bookkeeping forbids comparing $k_{\text{on}}$ (in $\mathrm{M^{-1}s^{-1}}$) with $k_{\text{off}}$ (in $\mathrm{s^{-1}}$) — only their ratio is a concentration. *([2.3](lessons/02-03-ligand-binding-occupancy.md), [4.1](lessons/04-01-reaction-kinetics-mass-action.md))*

### Random walks, diffusion, and drag

- $\langle x\rangle = 0$ means nothing *drifts*, not that nothing spreads — the spread lives in the second moment. *([1.2](lessons/01-02-random-walk.md))*
- Distance goes as $\sqrt t$, not $t$: random steps add in **quadrature**. Doubling the reach costs four times the time. *([1.2](lessons/01-02-random-walk.md), [1.3](lessons/01-03-diffusion-ficks-laws.md))*
- The cross terms vanish only because steps are **independent**; correlated steps (a stiff chain) change the scaling entirely — that is what $l_p$ measures. *([1.2](lessons/01-02-random-walk.md), [3.2](lessons/03-02-persistence-length-wlc.md))*
- Diffusive flux needs no force. $\mathbf J = -D\nabla c$ is counting, not a field. *([1.3](lessons/01-03-diffusion-ficks-laws.md))*
- $\nabla^2 c$ is **curvature**, not slope: a straight gradient is steady even while molecules pour through it. *([1.3](lessons/01-03-diffusion-ficks-laws.md))*
- Diffusion has no steady speed — the effective speed $\sim\sqrt{D/t}$ keeps falling. *([1.3](lessons/01-03-diffusion-ficks-laws.md), [1.5](lessons/01-05-low-reynolds-number.md))*
- $D$ and $\gamma$ are not independent material properties; $k_BT$ locks them together. *([1.4](lessons/01-04-einstein-relation.md))*
- $a$ in $6\pi\eta a$ is the **hydrodynamic radius**, not the diameter. *([1.4](lessons/01-04-einstein-relation.md))*
- The diffusion limit $4\pi Da$ grows as $a^1$, not $a^2$ — a bigger target also depletes its own neighbourhood. *([1.4](lessons/01-04-einstein-relation.md))*
- Low $Re$ does not mean slow — it is a ratio of forces, and drag there is **linear** in $v$, not $v^2$. *([1.5](lessons/01-05-low-reynolds-number.md))*
- Flapping harder cannot rescue a reciprocal stroke: the scallop theorem is about the path of shapes, not the rate. *([1.5](lessons/01-05-low-reynolds-number.md))*

### Free energy, binding, and cooperativity

- $\Delta G^\circ$ does not decide direction; $\Delta G = \Delta G^\circ + k_BT\ln Q$ does. A positive $\Delta G^\circ$ still runs forward at the right concentrations. *([2.1](lessons/02-01-free-energy-cell-currency.md))*
- Count the **surroundings'** entropy: binding, folding, and lipid assembly all look entropy-lowering until you notice the released water. *([2.1](lessons/02-01-free-energy-cell-currency.md), [3.4](lessons/03-04-self-assembly-hydrophobic.md))*
- Writing two reactions on one line does not couple them — coupling needs a real enzyme and a shared intermediate. *([2.1](lessons/02-01-free-energy-cell-currency.md))*
- Only the gap $\Delta E$ enters; shifting both levels changes nothing. And always say which state is "up," or the exponent's sign flips. *([2.2](lessons/02-02-boltzmann-two-state.md))*
- A favoured state is never fully occupied — even at $\Delta E = -5\,k_BT$ the other state appears 0.7 percent of the time. That residue *is* molecular noise. *([2.2](lessons/02-02-boltzmann-two-state.md))*
- A sigmoid is not a step: it turns over across a few $k_BT$. Sharpness beyond that requires cooperativity. *([2.2](lessons/02-02-boltzmann-two-state.md), [2.3](lessons/02-03-ligand-binding-occupancy.md))*
- $K_d$ is a concentration at half-occupancy, not an amount — and **small $K_d$ means tight**. *([2.3](lessons/02-03-ligand-binding-occupancy.md))*
- The Hill curve with $n>1$ is genuinely S-shaped in $[L]$ itself; a log axis flatters every curve, including the non-cooperative one. *([2.4](lessons/02-04-cooperativity-allostery.md))*
- $n$ is *effective* cooperativity and is a **lower bound** on the site count (haemoglobin: 4 sites, $n \approx 2.8$). *([2.4](lessons/02-04-cooperativity-allostery.md))*
- Cooperativity runs through the shared T↔R conformational flip, not through ligands touching each other. *([2.4](lessons/02-04-cooperativity-allostery.md))*

### Polymers and membranes

- Stretching an ideal chain stretches **no bonds** — every conformation has the same energy; the spring is made of missing conformations. *([3.1](lessons/03-01-entropic-spring.md))*
- An entropic spring **stiffens** when heated ($k \propto T$). If it softens, the elasticity was not entropic. *([3.1](lessons/03-01-entropic-spring.md))*
- Contour length $L = Nb$ and coil size $b\sqrt N$ differ by $\sqrt N$ — a huge factor. *([3.1](lessons/03-01-entropic-spring.md), [3.3](lessons/03-03-stretching-single-molecules.md))*
- Kuhn length is **twice** the persistence length; mixing them costs a factor of 2. *([3.2](lessons/03-02-persistence-length-wlc.md))*
- $\langle R^2\rangle = 2l_pL$ is the $L \gg l_p$ limit only; a short segment is a rod with $\langle R^2\rangle \to L^2$. Always compare your scale to $l_p$ first. *([3.2](lessons/03-02-persistence-length-wlc.md))*
- $l_p$ is not a fixed number of base pairs — it depends on temperature and, strongly, on salt (less salt, stiffer DNA). *([3.2](lessons/03-02-persistence-length-wlc.md))*
- The WLC force divergence is not rupture: it is the cost of removing the last thermal wrinkles. Real dsDNA escapes into the 65 pN overstretching transition first. *([3.3](lessons/03-03-stretching-single-molecules.md))*
- Form the dimensionless $x/L$ before plugging into Marko–Siggia; the units live in the prefactor. *([3.3](lessons/03-03-stretching-single-molecules.md))*
- Oil clumps because of the **water's** entropy, not oil–oil attraction; remove the water and the effect vanishes. The ordered cage is the low-entropy *starting* state that assembly destroys. *([3.4](lessons/03-04-self-assembly-hydrophobic.md))*
- The packing parameter is not a property of the lipid alone — $a_0$ shifts with salt, pH, and temperature, so chemistry can flip micelle into bilayer. *([3.4](lessons/03-04-self-assembly-hydrophobic.md))*
- A sphere's total bending energy $8\pi\kappa$ is **radius-independent**; small vesicles are not more expensive by this term. *([3.5](lessons/03-05-membrane-mechanics.md))*
- $K_A$ ($\mathrm{J/m^2}$) and $\kappa$ ($\mathrm{J}$) are different moduli with different units — never substitute one for the other. *([3.5](lessons/03-05-membrane-mechanics.md))*
- Thermal ripples are not all the same size: the $q^4$ law makes long-wavelength modes dominate the visible flicker. *([3.5](lessons/03-05-membrane-mechanics.md))*
- $l_B$ and $\lambda_D$ answer different questions — *how strongly* charges couple versus *how far* they reach. More salt shortens $\lambda_D$ and leaves $l_B$ untouched. *([3.6](lessons/03-06-electrostatics-salt-water.md))*
- Screening is set by salt concentration, not by the cell's size; and Debye–Hückel is a far-field linearization that fails right against a highly charged surface. *([3.6](lessons/03-06-electrostatics-salt-water.md))*
- Multivalent ions screen disproportionately — ionic strength weights each by $z^2$. *([3.6](lessons/03-06-electrostatics-salt-water.md))*

### Rates, motors, and membranes

- Equilibrium is a dynamic standoff, not a freeze — both directions still fire at full speed. *([4.1](lessons/04-01-reaction-kinetics-mass-action.md))*
- The observed relaxation rate is $k_{\text{on}}[\mathrm L] + k_{\text{off}}$, not $k_{\text{off}}$ alone; at high ligand the on-term dominates. *([4.1](lessons/04-01-reaction-kinetics-mass-action.md))*
- $K_M$ is an affinity **only** when $k_{\mathrm{cat}} \ll k_{-1}$; a fast enzyme has $K_M > K_d$. *([4.2](lessons/04-02-michaelis-menten.md))*
- $V_{\max}$ scales with how much enzyme you added; $k_{\mathrm{cat}}$ and $K_M$ are the intrinsic numbers. *([4.2](lessons/04-02-michaelis-menten.md))*
- $[\mathrm S] = 10K_M$ is 91 percent of $V_{\max}$, not saturation — a hyperbola never reaches its ceiling. *([4.2](lessons/04-02-michaelis-menten.md))*
- ATP does not push the motor like a piston; it reshapes the **landscape**, and the motion is a rectified thermal hop. *([4.3](lessons/04-03-molecular-motors-ratchet.md))*
- No passive ratchet extracts work from one thermal bath — detailed balance guarantees the pawl fails exactly often enough. *([4.1](lessons/04-01-reaction-kinetics-mass-action.md), [4.3](lessons/04-03-molecular-motors-ratchet.md))*
- $F_{\text{stall}} = \Delta G/d$ is a ceiling, not a delivered force; real motors sit below it. *([4.3](lessons/04-03-molecular-motors-ratchet.md))*
- $V_K$ is the voltage $\mathrm{K}^+$ is *content* at, not one it creates; a conductance drags $V_m$ toward its own battery and can never push past it. *([4.4](lessons/04-04-membrane-potentials-nernst-goldman.md), [4.5](lessons/04-05-excitable-membranes-action-potential.md))*
- Divide by the valence, and keep the log as **out over in** — with anions flipped in GHK. One sign slip turns $-86$ into $+86$. *([4.4](lessons/04-04-membrane-potentials-nernst-goldman.md))*
- The spike peak does not reach $V_{Na}$: inactivation and $\mathrm{K}^+$ opening cut it off near $+40\ \mathrm{mV}$. *([4.5](lessons/04-05-excitable-membranes-action-potential.md))*
- "All-or-nothing" is a *population* property from positive feedback; each channel is still a soft probabilistic switch. And the refractory period is a feature — it makes propagation one-way. *([4.5](lessons/04-05-excitable-membranes-action-potential.md))*
- A finer histogram does not give a better rate — bin to *look*, use maximum likelihood to *measure*. *([4.6](lessons/04-06-single-molecule-inference.md))*
- No instrument beats the $1/\sqrt N$ wall; only more events do. *([4.6](lessons/04-06-single-molecule-inference.md))*
- Extra parameters always fit better, so a two-exponential improvement means nothing until it clears the AIC/BIC penalty. *([4.6](lessons/04-06-single-molecule-inference.md))*
