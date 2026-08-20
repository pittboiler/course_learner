# Physical Chemistry · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Physical chemistry asks four questions about a change: **will it go** (Gibbs
energy), **how far** (equilibrium constant), **how fast** (rate law), and **what
are the molecules actually doing** (partition function, spectrum). Almost
everything below is one of two master equations wearing a costume:
$\mu_i = \mu_i^\circ + RT\ln a_i$ for the thermodynamics, and
$\text{population} \propto g\,e^{-\varepsilon/k_BT}$ for the molecular half. The
tables that will actually save you mid-problem are the
[potential grid](#the-four-potentials-and-their-maxwell-relations), the
[standard-state table](#standard-states-where-every-sign-error-comes-from), and
the [integrated rate laws](#integrated-rate-laws-and-half-lives).

## Notation

Molar quantities carry a subscript $m$ ($S_m$, $V_m$); a superscript $\circ$
means "at the standard state"; a superscript $*$ means "the pure substance".

| Symbol | Means | First used |
|---|---|---|
| $q$, $w$ | heat and work, both counted **into** the system (path functions) | [1.1](lessons/01-01-first-law-enthalpy.md) |
| $U$, $H$ | internal energy, and enthalpy $H = U + pV$ | [1.1](lessons/01-01-first-law-enthalpy.md) |
| $C_V$, $C_p$ | heat capacity at fixed volume / fixed pressure | [1.1](lessons/01-01-first-law-enthalpy.md) |
| $S$, $\Delta S_\text{univ}$ | entropy, and the system-plus-surroundings total that the second law signs | [1.2](lessons/01-02-entropy-second-law.md) |
| $A$, $G$ | Helmholtz energy $U-TS$ and Gibbs energy $H-TS$ | [1.3](lessons/01-03-gibbs-helmholtz-energies.md) |
| $\Delta_r X^\circ$, $\Delta_f X^\circ$ | standard **reaction** and **formation** value of $X$ (per mole of reaction) | [1.3](lessons/01-03-gibbs-helmholtz-energies.md) |
| $\left(\partial X/\partial Y\right)_Z$ | slope in $Y$ with $Z$ pinned — the subscript is part of the definition | [1.4](lessons/01-04-fundamental-equations-maxwell-relations.md) |
| $\mu_i$ | chemical potential of species $i$ — the Gibbs price of one more mole | [1.5](lessons/01-05-chemical-potential.md) |
| $\bar X_i$ | partial molar $X$: $(\partial X/\partial n_i)_{T,p,n_{j\neq i}}$ | [1.5](lessons/01-05-chemical-potential.md) |
| $n_i$, $x_i$, $p_i$ | amount, mole fraction, and partial pressure of $i$ | [1.5](lessons/01-05-chemical-potential.md) |
| $p^\circ$ | standard pressure, exactly $1\ \mathrm{bar}$ | [1.5](lessons/01-05-chemical-potential.md) |
| $f$, $\phi$ | fugacity (effective pressure) and fugacity coefficient $f/p$ | [1.6](lessons/01-06-fugacity-activity.md) |
| $a_i$, $\gamma_i$ | activity (effective concentration, dimensionless) and activity coefficient | [1.6](lessons/01-06-fugacity-activity.md) |
| $Z$ | compression factor $pV_m/RT$; $Z=1$ is ideal | [1.6](lessons/01-06-fugacity-activity.md) |
| $F$, $C$, $P$ | degrees of freedom, components, phases in the Gibbs phase rule | [2.1](lessons/02-01-phase-stability-one-component-diagrams.md) |
| $\Delta_\text{trs}H$ | latent heat of a transition (fus, vap, sub) | [2.2](lessons/02-02-clapeyron-clausius-clapeyron.md) |
| $p_i^*$, $\mu_i^*$ | vapour pressure and chemical potential of the **pure** liquid $i$ | [2.3](lessons/02-03-ideal-solutions-raoult-henry.md) |
| $K_B$ | Henry constant of solute B (a pressure, **not** $p_B^*$) | [2.3](lessons/02-03-ideal-solutions-raoult-henry.md) |
| $y_i$ | mole fraction in the **vapour** ($x_i$ is the liquid) | [2.3](lessons/02-03-ideal-solutions-raoult-henry.md) |
| $m$ | molality — mol solute per **kg** of solvent | [2.4](lessons/02-04-colligative-properties.md) |
| $K_f$, $K_b$ | cryoscopic and ebullioscopic constants (properties of the *solvent*) | [2.4](lessons/02-04-colligative-properties.md) |
| $\Pi$, $i$ | osmotic pressure, and the van 't Hoff factor (particles per formula unit) | [2.4](lessons/02-04-colligative-properties.md) |
| $z$; $a$, $b$ | overall composition on a tie line, and its two lever arms | [2.5](lessons/02-05-binary-phase-diagrams.md) |
| $\xi$ | extent of reaction — one number tracking how far it has run | [2.6](lessons/02-06-chemical-equilibrium-constant.md) |
| $\nu_i$ | **signed** stoichiometric number: $+$ products, $-$ reactants | [2.6](lessons/02-06-chemical-equilibrium-constant.md) |
| $Q$, $K$ | reaction quotient at any composition, and its value at equilibrium | [2.6](lessons/02-06-chemical-equilibrium-constant.md) |
| $\Delta n_\text{gas}$ | $\sum\nu_i$ over gas species — net moles of gas created | [2.6](lessons/02-06-chemical-equilibrium-constant.md) |
| $v$, $k$ | reaction rate ($\mathrm{M\,s^{-1}}$) and rate constant | [3.1](lessons/03-01-rate-laws-reaction-order.md) |
| $[\ce{A}]$, $[\ce{A}]_0$ | molar concentration now and at $t=0$ | [3.1](lessons/03-01-rate-laws-reaction-order.md) |
| $k'$ | pseudo-first-order rate constant, $k' = k[\ce{B}]_0$ under flooding | [3.1](lessons/03-01-rate-laws-reaction-order.md) |
| $t_{1/2}$ | half-life — time to consume half of what's there | [3.2](lessons/03-02-integrated-rate-laws-half-lives.md) |
| $k_1$, $k_{-1}$, $k_2$ | forward, reverse, and second-step rate constants of a mechanism | [3.3](lessons/03-03-mechanisms-steady-state-pre-equilibrium.md) |
| $E_a$ | activation energy — the barrier, not the reaction energy | [3.4](lessons/03-04-arrhenius-transition-state-theory.md) |
| $\Delta^\ddagger G$, $\Delta^\ddagger H$, $\Delta^\ddagger S$ | Gibbs energy / enthalpy / entropy **of activation** (reactants → transition state) | [3.4](lessons/03-04-arrhenius-transition-state-theory.md) |
| $K_M$, $v_{\max}$ | Michaelis constant and saturated rate of an enzyme | [3.5](lessons/03-05-catalysis-enzyme-kinetics.md) |
| $\beta$ | "coldness" $1/k_BT$ — big when cold | [4.1](lessons/04-01-boltzmann-partition-function.md) |
| $\varepsilon_i$, $g_i$ | energy of level $i$ (from the ground level) and its degeneracy | [4.1](lessons/04-01-boltzmann-partition-function.md) |
| $q$ | **molecular** partition function — count of thermally reachable states | [4.1](lessons/04-01-boltzmann-partition-function.md) |
| $Q$ | **canonical** partition function for the whole $N$-molecule system | [4.2](lessons/04-02-partition-functions-to-thermodynamics.md) |
| $\Lambda$ | thermal de Broglie wavelength $h/\sqrt{2\pi m k_BT}$ | [4.2](lessons/04-02-partition-functions-to-thermodynamics.md) |
| $\theta_R$, $\theta_V$ | rotational and vibrational **characteristic temperatures** | [4.3](lessons/04-03-molecular-energy-levels-box-oscillator-rotor.md) |
| $\sigma$ | symmetry number: 1 heteronuclear, 2 homonuclear | [4.3](lessons/04-03-molecular-energy-levels-box-oscillator-rotor.md) |
| $\mu$, $I$, $B$ | reduced mass, moment of inertia $\mu r^2$, rotational constant | [4.3](lessons/04-03-molecular-energy-levels-box-oscillator-rotor.md) |
| $J$, $v$ | rotational and vibrational quantum numbers | [4.3](lessons/04-03-molecular-energy-levels-box-oscillator-rotor.md) |
| $n,\ \ell,\ m_\ell,\ m_s$ | the four hydrogenic quantum numbers | [4.4](lessons/04-04-hydrogen-atom-atomic-spectra.md) |
| $R_H$ | Rydberg constant, $109{,}677\ \mathrm{cm^{-1}}$ | [4.4](lessons/04-04-hydrogen-atom-atomic-spectra.md) |
| $^{2S+1}L_J$ | atomic term symbol (multiplicity, total $L$, total $J$) | [4.4](lessons/04-04-hydrogen-atom-atomic-spectra.md) |
| $\tilde\nu$, $\omega_e$ | wavenumber $1/\lambda$ ($\mathrm{cm^{-1}}$), and the vibrational fundamental | [4.5](lessons/04-05-rotational-vibrational-spectroscopy.md) |
| $\mathcal{A}$, $\epsilon$ | absorbance and molar absorptivity in Beer–Lambert (the lesson writes these $A$ and $\varepsilon$) | [4.6](lessons/04-06-electronic-spectroscopy.md) |

**Symbol collisions worth knowing about**, because the course reuses letters
across modules: $q$ is heat in Module 1 and a partition function in Module 4;
$Q$ is the reaction quotient in Module 2 and the canonical partition function in
Module 4; $A$ is the Helmholtz energy in 1.3 and the Arrhenius pre-exponential in
3.4; $\mu$ is chemical potential in Modules 1–2 and reduced mass in Module 4; and
$v$ is a rate in Module 3 and a vibrational quantum number in Module 4. Context
always disambiguates — but read the subscripts.

## Definitions

### Reversible process

A change run so gently the system stays at equilibrium the whole way, so the
opposing pressure (or temperature) matches the system's at every instant. It is a
limit, never a real process — and it extracts the **maximum** work.

*Introduced:* [1.1](lessons/01-01-first-law-enthalpy.md)

### Enthalpy

Internal energy plus the "room-making" $pV$ term a system carries by occupying
space at pressure $p$ — invented so that the heat a chemist measures in an open
flask is itself a state function.

$$H \equiv U + pV, \qquad \Delta H = q_p \ \ (\text{constant } p,\ \text{only } pV \text{ work})$$

*Introduced:* [1.1](lessons/01-01-first-law-enthalpy.md)

### Entropy

Reversible heat per unit temperature — and, microscopically, the log of how many
arrangements the system has to choose from.

$$dS = \frac{dq_\text{rev}}{T}, \qquad S = k_B\ln W$$

*Introduced:* [1.2](lessons/01-02-entropy-second-law.md)

### Clausius inequality

Any real step generates at least as much entropy as its heat-over-temperature
would suggest, and strictly more if it is irreversible. This is the reason you
must compute $\Delta S_\text{sys}$ along an *invented reversible path*.

$$dS \ge \frac{dq}{T} \qquad (\text{equality} \iff \text{reversible})$$

*Introduced:* [1.2](lessons/01-02-entropy-second-law.md)

### Gibbs energy

The second law rewritten so you never have to track the surroundings: at fixed
$T$ and $p$, a system slides downhill in $G$ and stops at the bottom.

$$G \equiv H - TS, \qquad \Delta G = -T\,\Delta S_\text{univ} \ \ (\text{fixed } T,p)$$

*Introduced:* [1.3](lessons/01-03-gibbs-helmholtz-energies.md)

### Helmholtz energy

The same idea for a rigid vessel: the spontaneity potential when $T$ and $V$ are
what you hold fixed. It is also the potential statistical mechanics hands you
straight from the partition function.

$$A \equiv U - TS, \qquad \Delta A \le 0 \ \ (\text{spontaneous at fixed } T,V)$$

*Introduced:* [1.3](lessons/01-03-gibbs-helmholtz-energies.md)

### Natural variables

The pair of variables that makes a potential's differential clean — so that the
first derivatives *are* the state properties and the mixed second partials give a
Maxwell relation. Pick the potential whose natural variables you actually control.

$$U(S,V), \qquad H(S,p), \qquad A(T,V), \qquad G(T,p)$$

*Introduced:* [1.4](lessons/01-04-fundamental-equations-maxwell-relations.md)

### Maxwell relation

An identity that falls out of "mixed second partials of a state function are
equal", trading an unmeasurable entropy slope for a measurable pressure–volume–
temperature one.

$$\left(\frac{\partial S}{\partial p}\right)_T = -\left(\frac{\partial V}{\partial T}\right)_p$$

*Introduced:* [1.4](lessons/01-04-fundamental-equations-maxwell-relations.md)

### Chemical potential

Temperature says which way heat flows; chemical potential says which way *matter*
flows — from high $\mu$ to low $\mu$, until the potentials match. Formally, the
Gibbs energy cost of adding one more mole of $i$ at the current composition.

$$\mu_i \equiv \left(\frac{\partial G}{\partial n_i}\right)_{T,p,\,n_{j\neq i}}, \qquad \mu_i^\alpha = \mu_i^\beta \ \ \text{at equilibrium}$$

*Introduced:* [1.5](lessons/01-05-chemical-potential.md)

### Partial molar quantity

How much an extensive property grows per mole of $i$ added, everything else held
fixed. It is a derivative, not a ratio — and it can be negative (add $\ce{MgSO4}$
to water and the volume shrinks). Chemical potential is the partial molar $G$.

$$\bar X_i = \left(\frac{\partial X}{\partial n_i}\right)_{T,p,\,n_{j\neq i}}$$

*Introduced:* [1.5](lessons/01-05-chemical-potential.md)

### Fugacity

The pressure a real gas *pretends* to have so the ideal-gas chemical potential
formula stays exactly true. All the non-ideality hides in the coefficient $\phi$.

$$\mu = \mu^\circ + RT\ln\frac{f}{p^\circ}, \qquad f = \phi\,p, \qquad \lim_{p\to0}\phi = 1$$

*Introduced:* [1.6](lessons/01-06-fugacity-activity.md)

### Activity

Effective concentration: the dimensionless number you put in the log so that
$\mu = \mu^\circ + RT\ln a$ holds for a real solution. The activity coefficient
$\gamma$ measures the deviation, and $\gamma\to1$ in the relevant ideal limit.

$$\mu_i = \mu_i^\circ + RT\ln a_i, \qquad a_i = \gamma_i x_i \ \ (\text{or } \gamma_i c_i/c^\circ)$$

*Introduced:* [1.6](lessons/01-06-fugacity-activity.md)

### Standard state

The reference state where $a \equiv 1$, which is what gives $\mu^\circ$ (and hence
every "standard" quantity) a meaning. Different phases use **different** reference
states — see the [table below](#standard-states-where-every-sign-error-comes-from).

*Introduced:* [1.6](lessons/01-06-fugacity-activity.md)

### Gibbs phase rule

Count the knobs, subtract the ties: every coexistence equation $\mu_\alpha=\mu_\beta$
costs you one degree of freedom. This is *why* a phase diagram is made of areas,
lines, and points.

$$F = C - P + 2$$

*Introduced:* [2.1](lessons/02-01-phase-stability-one-component-diagrams.md)

### Triple point and critical point

The **triple point** is the single $(T,p)$ where three phases are simultaneously
tied ($F=0$, nothing adjustable). The **critical point** is where the liquid–gas
line simply *ends*: beyond it the two phases become indistinguishable and there is
no boundary left to cross.

*Introduced:* [2.1](lessons/02-01-phase-stability-one-component-diagrams.md)

### Ideal solution

A mixture in which A–B interactions are energetically identical to A–A and B–B, so
every component obeys Raoult's law across the whole composition range and mixing
costs no heat.

$$p_i = x_i\,p_i^*, \qquad \mu_i = \mu_i^* + RT\ln x_i, \qquad \Delta_\text{mix}H = 0$$

*Introduced:* [2.3](lessons/02-03-ideal-solutions-raoult-henry.md)

### Ideal-dilute solution

The realistic middle ground: the **solvent** (own-kind neighbours) obeys Raoult,
while the **solute** (drowning in solvent) obeys Henry's law with an empirical
slope set by the solvent, not by the pure solute.

$$p_A = x_A p_A^* \quad\text{and}\quad p_B = x_B K_B, \qquad K_B \neq p_B^*$$

*Introduced:* [2.3](lessons/02-03-ideal-solutions-raoult-henry.md)

### Colligative property

A property that shifts with the **number** of dissolved particles and not their
chemical identity — because the effect enters only through the solvent's mole
fraction in $\mu_A = \mu_A^* + RT\ln x_A$.

*Introduced:* [2.4](lessons/02-04-colligative-properties.md)

### Osmotic pressure

The extra pressure you must push on a solution to stop solvent flowing into it
across a semipermeable membrane. Dissolved particles behave, thermodynamically,
like a confined gas.

$$\Pi = i\,[B]\,RT$$

*Introduced:* [2.4](lessons/02-04-colligative-properties.md)

### Tie line

The **horizontal** (constant-$T$) line across a two-phase region; its two ends,
where it meets the phase boundaries, give the *compositions* of the two phases
actually present. Two phases at equilibrium share a temperature, not a composition.

*Introduced:* [2.5](lessons/02-05-binary-phase-diagrams.md)

### Lever rule

A seesaw balanced at the overall composition: the *amount* of each phase is
proportional to the length of the **opposite** arm. It is pure mass balance and it
works on any two-phase region of any phase diagram.

$$n_\text{liq}\,a = n_\text{vap}\,b, \qquad a = z - x_\text{liq},\quad b = x_\text{vap} - z$$

*Introduced:* [2.5](lessons/02-05-binary-phase-diagrams.md)

### Azeotrope

The composition where the bubble and dew curves touch, so the tie line shrinks to
a point and the vapour has *exactly* the liquid's composition. Distillation stalls
dead there — nothing new has formed, the gap has simply closed.

$$x_\text{liq} = x_\text{vap}$$

*Introduced:* [2.5](lessons/02-05-binary-phase-diagrams.md)

### Eutectic

The lowest-melting composition of a solid–liquid diagram, where liquid freezes
directly to a fine intergrowth of *both* pure solids at constant temperature — a
flat halt on a cooling curve. The alloy cousin of the azeotrope.

$$\text{liquid} \rightleftharpoons \text{solid A} + \text{solid B}$$

*Introduced:* [2.5](lessons/02-05-binary-phase-diagrams.md)

### Extent of reaction

One number $\xi$ tracking how far a reaction has run: each species changes by
$dn_i = \nu_i\,d\xi$. It is the horizontal axis of the Gibbs-energy valley.

*Introduced:* [2.6](lessons/02-06-chemical-equilibrium-constant.md)

### Reaction Gibbs energy

The **slope** of that valley — not a total energy but a per-mole-of-reaction
derivative. Negative means "make more product", zero means equilibrium.

$$\Delta_r G \equiv \left(\frac{\partial G}{\partial\xi}\right)_{T,p} = \sum_i\nu_i\mu_i$$

*Introduced:* [2.6](lessons/02-06-chemical-equilibrium-constant.md)

### Thermodynamic equilibrium constant

The reaction quotient evaluated at the bottom of the valley. Built from
**activities**, so it is a pure number, and fixed entirely by $\Delta_r G^\circ$ —
which means it depends on temperature and nothing else.

$$K = \prod_i a_i^{\nu_i}\Big|_\text{eq}, \qquad \Delta_r G^\circ = -RT\ln K$$

*Introduced:* [2.6](lessons/02-06-chemical-equilibrium-constant.md)

### Reaction rate

One agreed-on speed for the whole reaction: divide each species' rate of change by
its stoichiometric coefficient, minus for reactants and plus for products.

$$v = -\frac{1}{a}\frac{d[\ce{A}]}{dt} = +\frac{1}{c}\frac{d[\ce{C}]}{dt}$$

*Introduced:* [3.1](lessons/03-01-rate-laws-reaction-order.md)

### Rate law and reaction order

The measured dependence of rate on concentration. The exponents are **experimental
facts**, not stoichiometric coefficients, and may be zero, fractional, or negative.

$$v = k[\ce{A}]^m[\ce{B}]^n, \qquad \text{overall order} = m+n$$

*Introduced:* [3.1](lessons/03-01-rate-laws-reaction-order.md)

### Molecularity

How many molecules collide in a single **elementary step** — an integer read
straight off that step. For an elementary step only, order equals molecularity;
for an overall reaction, order is empirical.

*Introduced:* [3.1](lessons/03-01-rate-laws-reaction-order.md)

### Rate-determining step

The slowest elementary step, which throttles the whole sequence the way the
narrowest section of pipe sets the flow. The overall rate is essentially its rate.

*Introduced:* [3.3](lessons/03-03-mechanisms-steady-state-pre-equilibrium.md)

### Steady-state approximation

Assume a reactive intermediate is so scarce and short-lived that it is destroyed
as fast as it is made, so its net rate of change is zero. The general-purpose tool
for evicting an intermediate from a rate law.

$$\frac{d[\ce{I}]}{dt} \approx 0$$

*Introduced:* [3.3](lessons/03-03-mechanisms-steady-state-pre-equilibrium.md)

### Pre-equilibrium approximation

If a first step is fast in *both* directions, the intermediate equilibrates with
the reactants before the slow step drains it — so set the forward and reverse
rates of that step equal. It is the special case of the steady state in which the
intermediate mostly falls back.

$$[\ce{I}] = K[\ce{A}][\ce{B}], \qquad K = \frac{k_1}{k_{-1}}$$

*Introduced:* [3.3](lessons/03-03-mechanisms-steady-state-pre-equilibrium.md)

### Activation energy

The height of the pass from the reactant valley to the summit — the toll every
reacting molecule pays. It is **not** the reaction's energy change, which is the
difference between the two valleys.

$$k = A\,e^{-E_a/RT}$$

*Introduced:* [3.4](lessons/03-04-arrhenius-transition-state-theory.md)

### Transition state

The fleeting arrangement of atoms at the top of the pass, bonds half-broken and
half-formed. Treat it as a species in quasi-equilibrium with the reactants and
Module 1's thermodynamics applies to it, giving $\Delta^\ddagger G$.

*Introduced:* [3.4](lessons/03-04-arrhenius-transition-state-theory.md)

### Catalyst

A species that opens a **different mechanism** with a lower barrier and is
regenerated at the end of the cycle. It lowers the forward and reverse barriers
equally, so it changes kinetics and never thermodynamics: $K$ is untouched.

*Introduced:* [3.5](lessons/03-05-catalysis-enzyme-kinetics.md)

### Michaelis constant

The substrate concentration at which an enzyme runs at half its maximum rate. A
**small** $K_M$ means half-speed arrives at low substrate — tight binding, high
affinity.

$$K_M = \frac{k_{-1}+k_2}{k_1}, \qquad v(K_M) = \tfrac12 v_{\max}$$

*Introduced:* [3.5](lessons/03-05-catalysis-enzyme-kinetics.md)

### Boltzmann distribution

Populations fall off exponentially with energy, weighted up by degeneracy —
because probabilities must multiply when energies add, and the scale of the
falloff is the thermal energy $k_BT$.

$$\frac{n_i}{N} = \frac{g_i\,e^{-\varepsilon_i/k_BT}}{q}$$

*Introduced:* [4.1](lessons/04-01-boltzmann-partition-function.md)

### Molecular partition function

One number answering "how many energy levels can a single molecule actually reach
at this temperature?" It is a **count**, not a probability, so it is never capped
at 1: it runs from $g_0$ when cold up toward the full state count when hot.

$$q = \sum_i g_i\,e^{-\varepsilon_i/k_BT}$$

*Introduced:* [4.1](lessons/04-01-boltzmann-partition-function.md)

### Canonical partition function

The whole-system version. For $N$ independent molecules you multiply the
molecular ones — but if the molecules are interchangeable (a gas) you must divide
out the overcounting by $N!$, or entropy comes out wrong (the Gibbs paradox).

$$Q = q^N \ (\text{distinguishable}), \qquad Q = \frac{q^N}{N!} \ (\text{gas})$$

*Introduced:* [4.2](lessons/04-02-partition-functions-to-thermodynamics.md)

### Characteristic temperature

A level spacing expressed as a temperature, precisely so you can ask one question:
is $\theta$ bigger or smaller than $T$? Smaller means the mode is **active**;
much bigger means it is **frozen** in its ground state.

$$\theta = \frac{\text{level spacing}}{k_B}, \qquad \theta_\text{trans} \ll \theta_R \ll \theta_V$$

*Introduced:* [4.3](lessons/04-03-molecular-energy-levels-box-oscillator-rotor.md)

### Symmetry number

The number of indistinguishable orientations of a molecule, dividing $q_\text{rot}$
so you don't count the same tumble twice. Easy to forget, and it moves the entropy
by a factor of 2.

$$\sigma = 1 \ (\ce{HCl}), \qquad \sigma = 2 \ (\ce{N2})$$

*Introduced:* [4.3](lessons/04-03-molecular-energy-levels-box-oscillator-rotor.md)

### Rotational constant

The moment of inertia in spectroscopist's disguise: a fat, slowly tumbling
molecule has a small $B$ and a tightly spaced rotational comb.

$$B = \frac{h}{8\pi^2 c\,I} \ (\mathrm{cm^{-1}}), \qquad I = \mu r^2$$

*Introduced:* [4.3](lessons/04-03-molecular-energy-levels-box-oscillator-rotor.md)

### Selection rule

The bookkeeping constraint that decides which level pairs actually produce a
spectral line — a photon carries one unit of angular momentum, so the jump must
change the relevant quantum number by exactly one.

$$\Delta\ell = \pm1,\quad \Delta m_\ell = 0,\pm1 \ \ (\text{atoms}); \qquad \Delta J = \pm1,\quad \Delta v = \pm1 \ \ (\text{diatomics})$$

*Introduced:* [4.4](lessons/04-04-hydrogen-atom-atomic-spectra.md)

### Franck–Condon principle

Electronic transitions are **vertical**: the electrons rearrange so fast that the
nuclei are frozen mid-jump, so the bond length cannot change during absorption.
The brightest vibronic band is the upper level whose wavefunction has a turning
point directly above the ground-state geometry.

*Introduced:* [4.6](lessons/04-06-electronic-spectroscopy.md)

### Chromophore

The part of a molecule responsible for an electronic absorption. Extending
conjugation lengthens the effective box, shrinks the HOMO–LUMO gap as $1/L^2$, and
slides the absorption from UV into the visible — which is why long polyenes have
colour.

*Introduced:* [4.6](lessons/04-06-electronic-spectroscopy.md)

## Formulas and rules

### Constants and conversions

The course uses these throughout without ever tabulating them.

| Constant | Value |
|---|---|
| $R$ | $8.314\ \mathrm{J\,K^{-1}\,mol^{-1}} = 0.08206\ \mathrm{L\,atm\,K^{-1}\,mol^{-1}} = 0.08314\ \mathrm{L\,bar\,K^{-1}\,mol^{-1}}$ |
| $k_B$ | $1.381\times10^{-23}\ \mathrm{J\,K^{-1}}$; $R = N_A k_B$ |
| $N_A$ | $6.022\times10^{23}\ \mathrm{mol^{-1}}$ |
| $h$, $\hbar$ | $6.626\times10^{-34}\ \mathrm{J\,s}$, $1.0546\times10^{-34}\ \mathrm{J\,s}$ |
| $c$ | $2.998\times10^{8}\ \mathrm{m\,s^{-1}} = 2.998\times10^{10}\ \mathrm{cm\,s^{-1}}$ (use the cm form with $\mathrm{cm^{-1}}$) |
| $F$ (Faraday) | $96485\ \mathrm{C\,mol^{-1}}$ |
| $hc/k_B$ | $1.439\ \mathrm{cm\,K}$ — turns a wavenumber straight into a characteristic temperature |
| $hc$ | $1.986\times10^{-23}\ \mathrm{J\,cm}$ |
| $k_BT$ at 298 K | $4.11\times10^{-21}\ \mathrm{J}$, i.e. $\approx 207\ \mathrm{cm^{-1}}$ |
| $RT$ at 298 K | $2478\ \mathrm{J\,mol^{-1}} = 2.48\ \mathrm{kJ\,mol^{-1}}$ |
| $k_BT/h$ at 298 K | $6.21\times10^{12}\ \mathrm{s^{-1}}$ (the Eyring attempt frequency) |
| $1\ \mathrm{eV}$ | $96.485\ \mathrm{kJ\,mol^{-1}}$ |
| $1\ \mathrm{bar} = 10^5\ \mathrm{Pa}$ | $1\ \mathrm{atm} = 101{,}325\ \mathrm{Pa} = 760\ \mathrm{Torr}$ |
| $1\ \mathrm{amu}$ | $1.6605\times10^{-27}\ \mathrm{kg}$ |
| $1\ \mathrm{cm^3}$ | $10^{-6}\ \mathrm{m^3}$; $1\ \mathrm{L} = 10^{-3}\ \mathrm{m^3}$ |

**The unit trap that bites hardest:** $\Delta H$ is tabulated in kJ/mol but
$\Delta S$ in $\mathrm{J\,K^{-1}\,mol^{-1}}$. Convert one before combining them, or
$\Delta G$ is wrong by a factor of 1000.

### First law, work, and heat capacities

$$\Delta U = q + w \qquad (w > 0 \text{ means work done } \textbf{on} \text{ the system})$$

| Process (ideal gas) | Work $w$ | Notes |
|---|---|---|
| Against constant $p_\text{ext}$ | $-p_\text{ext}(V_2-V_1)$ | irreversible |
| Reversible isothermal | $-nRT\ln\dfrac{V_2}{V_1}$ | the maximum obtainable; $\Delta U = 0$, so $q = -w$ |
| Constant volume | $0$ | $q_V = \Delta U$ |
| Adiabatic | $\Delta U$ | $q=0$, so an expanding gas **cools** |

$$C_V = \left(\frac{\partial U}{\partial T}\right)_V,\quad C_p = \left(\frac{\partial H}{\partial T}\right)_p,\quad C_p - C_V = nR \ \ (\text{ideal gas})$$

Monatomic ideal gas: $C_{V,m} = \tfrac32R$, $C_{p,m} = \tfrac52R$. Diatomic near
room temperature: $C_{V,m} = \tfrac52R$, $C_{p,m} = \tfrac72R$ — the extra $R$ is
rotation, which [4.3](lessons/04-03-molecular-energy-levels-box-oscillator-rotor.md)
explains. For a reaction that changes the moles of gas,
$\Delta H = \Delta U + \Delta n_\text{gas}RT$.

*From* [1.1](lessons/01-01-first-law-enthalpy.md)

### Entropy — the three computations to have cold

| Change | $\Delta S$ |
|---|---|
| Isothermal ideal-gas volume change | $nR\ln\dfrac{V_2}{V_1}$ |
| Isothermal ideal-gas pressure change | $-nR\ln\dfrac{p_2}{p_1}$ |
| Heating at constant $p$ (or $V$) | $nC_{p,m}\ln\dfrac{T_2}{T_1}$ (use $C_{V,m}$ at fixed $V$) |
| Phase change at $T_\text{trs}$ | $\dfrac{\Delta_\text{trs}H}{T_\text{trs}}$ |
| Surroundings | $-\dfrac{q_\text{actual}}{T_\text{surr}}$ — the **real** heat, not a reversible one |
| Ideal mixing | $-nR\sum_i x_i\ln x_i > 0$ |

$$\Delta S_\text{univ} = \Delta S_\text{sys} + \Delta S_\text{surr} \ge 0$$

**Trouton's rule:** $\Delta_\text{vap}S \approx 85\ \mathrm{J\,K^{-1}\,mol^{-1}}$
for most liquids; structured liquids (water, alcohols) run higher because boiling
must also destroy their extra order.

*From* [1.2](lessons/01-02-entropy-second-law.md)

### Spontaneity and the enthalpy–entropy competition

$$\Delta G = \Delta H - T\Delta S, \qquad \Delta G < 0 \Rightarrow \text{spontaneous},\quad \Delta G = 0 \Rightarrow \text{equilibrium}$$

| $\Delta H$ | $\Delta S$ | Spontaneous |
|:---:|:---:|:---|
| $-$ | $+$ | at **all** $T$ |
| $+$ | $-$ | at **no** $T$ |
| $-$ | $-$ | at **low** $T$ (below $T_\text{cross}$) |
| $+$ | $+$ | at **high** $T$ (above $T_\text{cross}$) |

$$T_\text{cross} = \frac{\Delta H}{\Delta S}, \qquad w_\text{add,max} = \Delta G, \qquad \Delta G^\circ = -nFE^\circ$$

Standard reaction quantities come from formation values (elements in their
standard states are zero):
$\Delta_r X^\circ = \sum_\text{prod}\nu\,\Delta_f X^\circ - \sum_\text{react}\nu\,\Delta_f X^\circ$.

*From* [1.3](lessons/01-03-gibbs-helmholtz-energies.md)

### The four potentials and their Maxwell relations

Each potential is a Legendre transform of $U$ that swaps which variable is
natural. Read the first derivatives straight off the differential by matching
coefficients; equate the mixed second partials to get the Maxwell relation.

| Potential | Definition | Differential | Natural in | First derivatives |
|---|---|---|---|---|
| $U$ | — | $dU = T\,dS - p\,dV$ | $U(S,V)$ | $\left(\frac{\partial U}{\partial S}\right)_V = T$, $\left(\frac{\partial U}{\partial V}\right)_S = -p$ |
| $H$ | $U+pV$ | $dH = T\,dS + V\,dp$ | $H(S,p)$ | $\left(\frac{\partial H}{\partial S}\right)_p = T$, $\left(\frac{\partial H}{\partial p}\right)_S = V$ |
| $A$ | $U-TS$ | $dA = -S\,dT - p\,dV$ | $A(T,V)$ | $\left(\frac{\partial A}{\partial T}\right)_V = -S$, $\left(\frac{\partial A}{\partial V}\right)_T = -p$ |
| $G$ | $H-TS$ | $dG = -S\,dT + V\,dp$ | $G(T,p)$ | $\left(\frac{\partial G}{\partial T}\right)_p = -S$, $\left(\frac{\partial G}{\partial p}\right)_T = V$ |

The four Maxwell relations, in the same order:

$$\left(\frac{\partial T}{\partial V}\right)_S = -\left(\frac{\partial p}{\partial S}\right)_V, \qquad \left(\frac{\partial T}{\partial p}\right)_S = \left(\frac{\partial V}{\partial S}\right)_p$$

$$\left(\frac{\partial S}{\partial V}\right)_T = \left(\frac{\partial p}{\partial T}\right)_V, \qquad \left(\frac{\partial S}{\partial p}\right)_T = -\left(\frac{\partial V}{\partial T}\right)_p$$

The bottom two are the workhorses: their left sides contain $S$, which no probe
measures, and their right sides are ruler-and-thermometer experiments. The sign
tracks the sign on $S$ in the differential — $A$'s two coefficients share a minus
so it cancels; $G$'s do not, so the minus survives.

**Thermodynamic equation of state** (from $dU$ plus the $A$-relation):

$$\left(\frac{\partial U}{\partial V}\right)_T = T\left(\frac{\partial p}{\partial T}\right)_V - p, \qquad \left(\frac{\partial H}{\partial p}\right)_T = V - T\left(\frac{\partial V}{\partial T}\right)_p$$

Both are **zero** for an ideal gas: its $U$ and $H$ depend only on $T$.

*From* [1.4](lessons/01-04-fundamental-equations-maxwell-relations.md)

### Chemical potential and composition

$$dG = -S\,dT + V\,dp + \sum_i \mu_i\,dn_i, \qquad G = \sum_i n_i\mu_i, \qquad \sum_i n_i\,d\mu_i = 0 \ \ (\text{Gibbs–Duhem})$$

| Situation | $\mu$ |
|---|---|
| Pure ideal gas | $\mu = \mu^\circ + RT\ln\dfrac{p}{p^\circ}$ |
| Component of an ideal-gas mixture | $\mu_i = \mu_i^\circ + RT\ln\dfrac{p_i}{p^\circ}$, with $p_i = x_ip$ |
| Real gas | $\mu = \mu^\circ + RT\ln\dfrac{f}{p^\circ}$, $f = \phi p$ |
| Component of an ideal liquid mixture | $\mu_i = \mu_i^* + RT\ln x_i$ |
| Anything real | $\mu_i = \mu_i^\circ + RT\ln a_i$ |

Only *ratios* matter in a difference, so $p^\circ$ cancels:
$\Delta\mu = RT\ln(p_2/p_1)$. Ideal mixing:
$\Delta_\text{mix}G = nRT\sum_i x_i\ln x_i < 0$ with $\Delta_\text{mix}H = 0$ — it
is entirely entropy-driven.

*From* [1.5](lessons/01-05-chemical-potential.md) *and* [2.3](lessons/02-03-ideal-solutions-raoult-henry.md)

### Standard states — where every sign error comes from

The number $a_i$ is meaningless until you say where $a=1$. Get the reference
wrong and your activity is measured from the wrong zero, which propagates into
$\mu^\circ$, into $\Delta_r G^\circ$, and into $K$.

| Species | Standard state ($a = 1$) | $a$ in practice | $\gamma \to 1$ when… |
|---|---|---|---|
| Gas | the **hypothetical ideal** gas at $p^\circ = 1\ \mathrm{bar}$ | $p_i/p^\circ$ (ideal) or $f_i/p^\circ$ (real) | $p\to0$ |
| Pure solid or pure liquid | the pure substance | $a = 1$ — **drops out of $K$** | — |
| Solvent | the pure solvent | $a_A = \gamma_A x_A$ | $x_A\to1$ (**Raoult** reference) |
| Solute | hypothetical ideal $1\ \mathrm{mol\,L^{-1}}$ (or 1 molal) solution | $a_B = \gamma_B c_B/c^\circ$ | $x_B\to0$ (**Henry** reference) |

Two facts that follow and are worth stating out loud:

- The gas standard state is *not* "the real gas at 1 bar". Keeping it hypothetical
  is what lets $\mu^\circ$ stay a clean, pressure-free reference with all the
  non-ideality parked in $\phi$.
- Solvent and solute use **different** limits. A solute's $\gamma\to1$ as it gets
  infinitely **dilute**, not as it gets pure.

Non-ideality corrections and their signs:

$$\mu_\text{real} - \mu_\text{ideal} = RT\ln\phi \ \ (\text{gas}) \quad\text{or}\quad RT\ln\gamma \ \ (\text{solution}), \qquad \ln\phi = \int_0^p \frac{Z-1}{p'}\,dp'$$

$\phi$ or $\gamma$ below 1 means *more stable than ideal* (attractive
interactions); above 1 means a greater escaping tendency than ideal. Every
argument of a logarithm here is dimensionless by construction — if you are taking
the log of "72 bar" you dropped a $p^\circ$.

*From* [1.6](lessons/01-06-fugacity-activity.md)

### Phase stability and the phase rule

$$\left(\frac{\partial \mu}{\partial T}\right)_p = -S_m, \qquad \left(\frac{\partial \mu}{\partial p}\right)_T = V_m$$

Since $S_g > S_l > S_s$, heating drops the gas curve fastest, so the winning phase
marches solid → liquid → gas. Since $V_g \gg V_l \gtrsim V_s$, squeezing punishes
the gas hardest, so pressure condenses and solidifies.

| $P$ (phases) | $F = 3 - P$ | Geometry (one component) |
|---|---|---|
| 1 | 2 | an **area** — $T$ and $p$ both free |
| 2 | 1 | a **line** — pick $T$, and $p$ follows |
| 3 | 0 | a **point** — the triple point, nothing adjustable |

Four phases of a pure substance would need $F = -1$: impossible.

*From* [2.1](lessons/02-01-phase-stability-one-component-diagrams.md)

### Clapeyron and Clausius–Clapeyron

**Clapeyron — exact, valid for every boundary** (melting, boiling, subliming):

$$\frac{dp}{dT} = \frac{\Delta S_\text{trs}}{\Delta V_\text{trs}} = \frac{\Delta H_\text{trs}}{T\,\Delta V_\text{trs}}$$

Fusion lines have a tiny $\Delta V$ and so are nearly vertical; their **sign** is
the sign of $\Delta V_\text{fus}$. Water contracts on melting
($\Delta V_\text{fus} < 0$), so its fusion line leans **left** and pressure melts
ice.

**Clausius–Clapeyron — for a boundary with a gas**, assuming the condensed volume
is negligible and the vapour is ideal:

$$\frac{d\ln p}{dT} = \frac{\Delta_\text{vap}H}{RT^2} \qquad\Longrightarrow\qquad \ln\frac{p_2}{p_1} = -\frac{\Delta_\text{vap}H}{R}\left(\frac{1}{T_2}-\frac{1}{T_1}\right)$$

So **a plot of $\ln p$ against $1/T$ is a straight line of slope**
$-\Delta_\text{vap}H/R$ — that line is how heats of vaporization are measured. Since
subliming equals melting then vaporizing,
$\Delta_\text{sub}H = \Delta_\text{fus}H + \Delta_\text{vap}H$, so the sublimation
line is steeper than the vaporization line at the triple point.

*From* [2.2](lessons/02-02-clapeyron-clausius-clapeyron.md)

### Raoult, Henry, and the vapour composition

$$\text{Raoult (solvent):}\ \ p_A = x_A\,p_A^*, \qquad \text{Henry (solute):}\ \ p_B = x_B\,K_B$$

$$p = \sum_i p_i \ \ (\text{Dalton}), \qquad y_i = \frac{p_i}{p}$$

Every real component obeys Raoult as $x_i\to1$ and Henry as $x_i\to0$ — they are
the two tangent limits. The vapour is always enriched in the more volatile
component ($y_i > x_i$ when $p_i^* $ is the larger), which is what distillation
exploits. Positive deviation ($p_i > x_ip_i^*$, $\Delta_\text{mix}H>0$) means A–B
contacts are less favourable than A–A and B–B; negative deviation is the reverse.

*From* [2.3](lessons/02-03-ideal-solutions-raoult-henry.md)

### Colligative properties

All four are consequences of the solvent's $\mu$ dropping by $RT\ln x_A$, and all
count **particles**, so each carries the van 't Hoff factor $i$.

| Property | Formula | Concentration unit |
|---|---|---|
| Vapour-pressure lowering | $\Delta p = -x_B\,p_A^*$ | mole fraction |
| Boiling-point elevation | $\Delta T_b = i\,K_b\,m$, $K_b = \dfrac{RT_b^2M_A}{\Delta_\text{vap}H}$ | **molality** |
| Freezing-point depression | $\Delta T_f = i\,K_f\,m$, $K_f = \dfrac{RT_f^2M_A}{\Delta_\text{fus}H}$ | **molality** |
| Osmotic pressure | $\Pi = i\,[B]\,RT$ | **molarity** |

Water: $K_f = 1.86\ \mathrm{K\,kg\,mol^{-1}}$, $K_b = 0.512\ \mathrm{K\,kg\,mol^{-1}}$
(freezing moves far more than boiling because
$\Delta_\text{fus}H \ll \Delta_\text{vap}H$). Ideal $i$: glucose 1, $\ce{NaCl}$ 2,
$\ce{CaCl2}$ 3 — real values sit slightly below because of ion pairing. Osmotic
pressure is by far the most sensitive of the four (a 1 M solution pulls about 24
atm), which is why osmometry is the method of choice for protein molar masses. For
a real solvent, replace $x_A$ with the activity $a_A$ throughout.

*From* [2.4](lessons/02-04-colligative-properties.md)

### Reading a binary phase diagram

At a chosen temperature, the **tie line**'s two ends give the compositions; the
lever rule gives the amounts:

$$\frac{n_\text{liq}}{n_\text{vap}} = \frac{b}{a}, \qquad f_\text{liq} = \frac{b}{a+b}, \qquad f_\text{vap} = \frac{a}{a+b}$$

Each boil-and-condense cycle is one step across the lens toward the more volatile
end — a fractionating column stacks dozens of them. A **cooling curve** kinks when
it first meets a liquidus (one solid starts crystallizing, its latent heat slowing
the descent) and shows a flat **halt** at the eutectic temperature.

*From* [2.5](lessons/02-05-binary-phase-diagrams.md)

### Equilibrium: from standard Gibbs energy to composition

$$\Delta_r G = \Delta_r G^\circ + RT\ln Q, \qquad Q = \prod_i a_i^{\nu_i}$$

$$\Delta_r G^\circ = -RT\ln K \qquad\Longleftrightarrow\qquad K = e^{-\Delta_r G^\circ/RT}$$

$\Delta_r G^\circ < 0 \Rightarrow K>1$ (products favoured); $>0 \Rightarrow K<1$.
The *direction of the actual mixture* is set by comparing $Q$ with $K$:
$Q<K$ runs forward, $Q>K$ runs backward.

Three ways of writing a gas-phase $K$, with $\Delta n = \sum\nu_i$ over gas species:

$$K = K_p = K_x\left(\frac{p}{p^\circ}\right)^{\Delta n} = K_c\left(\frac{c^\circ RT}{p^\circ}\right)^{\Delta n}, \qquad \frac{c^\circ RT}{p^\circ} = 24.8 \ \text{at } 298\ \mathrm{K}$$

When $\Delta n = 0$ all three coincide and the equilibrium is pressure-independent.
A useful standing result: for $\ce{A(g) <=> 2B(g)}$ starting from pure A with
degree of dissociation $\alpha$,

$$K = \frac{4\alpha^2}{1-\alpha^2}\cdot\frac{p}{p^\circ}$$

*From* [2.6](lessons/02-06-chemical-equilibrium-constant.md)

### van 't Hoff: how $K$ moves

$$\ln K = -\frac{\Delta_r H^\circ}{R}\cdot\frac{1}{T} + \frac{\Delta_r S^\circ}{R}, \qquad \frac{d\ln K}{dT} = \frac{\Delta_r H^\circ}{RT^2}$$

$$\ln\frac{K_2}{K_1} = -\frac{\Delta_r H^\circ}{R}\left(\frac{1}{T_2}-\frac{1}{T_1}\right)$$

Endothermic ⇒ $K$ rises with $T$; exothermic ⇒ $K$ falls. Read backwards, a plot of
$\ln K$ against $1/T$ gives $\Delta_r H^\circ = -R\times\text{slope}$ and
$\Delta_r S^\circ = R\times\text{intercept}$ — both thermodynamic quantities from
equilibrium measurements alone, no calorimeter.

**Pressure never changes $K$.** It reshuffles the composition via
$K_x = K(p/p^\circ)^{-\Delta n_\text{gas}}$, and only when $\Delta n_\text{gas}\neq0$.
Adding inert gas at constant *volume* does nothing; at constant *total pressure* it
acts like expansion and shifts toward more gas molecules.

*From* [2.7](lessons/02-07-shifting-equilibria-van-t-hoff.md)

### Measuring a rate law

$$v = k[\ce{A}]^m[\ce{B}]^n, \qquad [k] = \mathrm{M^{\,1-p}\,s^{-1}} \ \text{for overall order } p$$

So the units of $k$ announce the order: $\mathrm{M\,s^{-1}}$ (0),
$\mathrm{s^{-1}}$ (1), $\mathrm{M^{-1}s^{-1}}$ (2), $\mathrm{M^{-2}s^{-1}}$ (3).

- **Method of initial rates:** change one initial concentration at a time and take
  the ratio, which cancels $k$: $v_{0,2}/v_{0,1} = ([\ce{A}]_{0,2}/[\ce{A}]_{0,1})^m$.
  Doubling and the rate doubles ⇒ $m=1$; quadruples ⇒ $m=2$; unchanged ⇒ $m=0$.
- **Isolation:** flood with every reactant but one, so their concentrations barely
  move and fold into $k' = k[\ce{B}]_0$ — a pseudo-first-order run whose order in
  the isolated species you can read directly.

*From* [3.1](lessons/03-01-rate-laws-reaction-order.md)

### Integrated rate laws and half-lives

For $\ce{A -> products}$ with $-d[\ce{A}]/dt = k[\ce{A}]^n$:

| Order | Integrated form | Straight-line plot | Slope | $t_{1/2}$ |
|---|---|---|---|---|
| 0 | $[\ce{A}] = [\ce{A}]_0 - kt$ | $[\ce{A}]$ vs $t$ | $-k$ | $\dfrac{[\ce{A}]_0}{2k}$ — **grows** with $[\ce{A}]_0$ |
| 1 | $\ln[\ce{A}] = \ln[\ce{A}]_0 - kt$, i.e. $[\ce{A}] = [\ce{A}]_0e^{-kt}$ | $\ln[\ce{A}]$ vs $t$ | $-k$ | $\dfrac{\ln 2}{k}$ — **independent** of $[\ce{A}]_0$ |
| 2 | $\dfrac{1}{[\ce{A}]} = \dfrac{1}{[\ce{A}]_0} + kt$ | $1/[\ce{A}]$ vs $t$ | $+k$ | $\dfrac{1}{k[\ce{A}]_0}$ — **shrinks** as $[\ce{A}]_0$ grows |

**The diagnostic:** make all three plots and see which one is straight. That
transform names the order and the magnitude of its slope is $k$. Successive
half-lives shorten (0), stay constant (1), or lengthen (2) — an operational way to
tell the orders apart without any plotting at all. For a general first-order decay,
$t = \frac{1}{k}\ln\frac{[\ce{A}]_0}{[\ce{A}]}$.

*From* [3.2](lessons/03-02-integrated-rate-laws-half-lives.md)

### Turning a mechanism into a rate law

For the standard two-step mechanism with intermediate $\ce{I}$

$$\ce{A + B <=>[k_1][k_{-1}] I}, \qquad \ce{I + C ->[k_2] P}, \qquad \text{rate} = k_2[\ce{I}][\ce{C}]$$

| Approximation | Assumption | $[\ce{I}]$ | Rate |
|---|---|---|---|
| Pre-equilibrium | step 1 fast **both ways** | $\dfrac{k_1}{k_{-1}}[\ce{A}][\ce{B}]$ | $\dfrac{k_1k_2}{k_{-1}}[\ce{A}][\ce{B}][\ce{C}]$ |
| Steady state | $[\ce{I}]$ low and roughly constant | $\dfrac{k_1[\ce{A}][\ce{B}]}{k_{-1}+k_2[\ce{C}]}$ | $\dfrac{k_1k_2[\ce{A}][\ce{B}][\ce{C}]}{k_{-1}+k_2[\ce{C}]}$ |

Steady state is the safer, more general tool and **contains** pre-equilibrium as
the $k_{-1}\gg k_2[\ce{C}]$ limit. A fast reversible step's balance is an
equilibrium, which is the kinetic route to the thermodynamic constant:
$K = k_\text{forward}/k_\text{reverse}$. Two fingerprints worth recognizing: a
species in the **denominator** of a rate law (a product inhibiting itself by
dragging a pre-equilibrium backward), and a **half-integer order** (a reactant that
dissociates in a fast pre-equilibrium before the slow step). A mechanism that
mismatches the measured law is dead; one that matches has merely survived.

*From* [3.3](lessons/03-03-mechanisms-steady-state-pre-equilibrium.md)

### Temperature dependence: Arrhenius and Eyring

$$k = A\,e^{-E_a/RT}, \qquad \ln k = \ln A - \frac{E_a}{R}\cdot\frac{1}{T}, \qquad \ln\frac{k_2}{k_1} = -\frac{E_a}{R}\left(\frac{1}{T_2}-\frac{1}{T_1}\right)$$

An **Arrhenius plot** ($\ln k$ vs $1/T$) has slope $-E_a/R$ and intercept $\ln A$ —
the same straight-line structure as Clausius–Clapeyron ($\ln p$ vs $1/T$) and van 't
Hoff ($\ln K$ vs $1/T$). Rule of thumb: $E_a \approx 54\ \mathrm{kJ/mol}$ is what
makes a rate roughly double per 10 K near room temperature.

**Eyring / transition-state theory:**

$$k = \frac{k_BT}{h}\,e^{-\Delta^\ddagger G/RT} = \frac{k_BT}{h}\,e^{\Delta^\ddagger S/R}\,e^{-\Delta^\ddagger H/RT}, \qquad \Delta^\ddagger G = \Delta^\ddagger H - T\Delta^\ddagger S$$

$$E_a = \Delta^\ddagger H + RT, \qquad A = \frac{e\,k_BT}{h}\,e^{\Delta^\ddagger S/R}$$

So $A$ is a thermometer for the activation entropy: $\Delta^\ddagger S < 0$ is a
**tight, associative** transition state (partners clamping together, freedom frozen
out, small $A$); $\Delta^\ddagger S > 0$ is a **loose** one (a molecule stretching
apart, large $A$).

*From* [3.4](lessons/03-04-arrhenius-transition-state-theory.md)

### Catalysis and Michaelis–Menten

$$\frac{k_\text{cat}}{k_\text{uncat}} \approx e^{(E_a - E_a')/RT}$$

A catalyst lowers forward and reverse barriers equally, so $K$ is untouched — you
reach the *same* equilibrium sooner. Homogeneous catalysis shares a phase with the
reactants; heterogeneous catalysis happens on a separate phase's surface.

From the steady state on $\ce{ES}$ in $\ce{E + S <=>[k_1][k_{-1}] ES ->[k_2] E + P}$:

$$v = \frac{v_{\max}[\ce{S}]}{K_M + [\ce{S}]}, \qquad v_{\max} = k_2[\ce{E}]_0, \qquad K_M = \frac{k_{-1}+k_2}{k_1}$$

| Regime | Rate | Order in S |
|---|---|---|
| $[\ce{S}] \ll K_M$ | $v \approx (v_{\max}/K_M)[\ce{S}]$ | first |
| $[\ce{S}] = K_M$ | $v = \tfrac12 v_{\max}$ | — |
| $[\ce{S}] \gg K_M$ | $v \approx v_{\max}$ | zero (saturated) |

**Lineweaver–Burk**, the linearization you read the parameters off:

$$\frac{1}{v} = \frac{K_M}{v_{\max}}\cdot\frac{1}{[\ce{S}]} + \frac{1}{v_{\max}}$$

$y$-intercept $= 1/v_{\max}$, slope $= K_M/v_{\max}$, $x$-intercept $= -1/K_M$.
A **competitive** inhibitor raises the apparent $K_M$ and leaves $v_{\max}$ alone;
a **noncompetitive** one lowers $v_{\max}$ and leaves $K_M$ alone.

*From* [3.5](lessons/03-05-catalysis-enzyme-kinetics.md)

### Boltzmann populations and the partition function

$$q = \sum_i g_i\,e^{-\varepsilon_i/k_BT}, \qquad \frac{n_i}{N} = \frac{g_i e^{-\varepsilon_i/k_BT}}{q}, \qquad \frac{n_2}{n_1} = \frac{g_2}{g_1}e^{-\Delta\varepsilon/k_BT}$$

Limits: $q \to g_0$ as $T\to0$ (ground level only); $q \to \sum_i g_i$ as
$T\to\infty$ (everything reachable). Because energies add across independent modes,
partition functions multiply:

$$q = q_\text{trans}\,q_\text{rot}\,q_\text{vib}\,q_\text{elec}$$

Population ratios are blind to the energy zero (it cancels), but $q$ itself is not
— always measure from the ground level, $\varepsilon_0 = 0$.

*From* [4.1](lessons/04-01-boltzmann-partition-function.md)

### From $q$ to thermodynamics

$$U - U(0) = -\left(\frac{\partial\ln Q}{\partial\beta}\right)_V = Nk_BT^2\left(\frac{\partial\ln q}{\partial T}\right)_V, \qquad C_V = \left(\frac{\partial U}{\partial T}\right)_V$$

$$S = \frac{U-U(0)}{T} + k_B\ln Q$$

For distinguishable particles $Q = q^N$ gives $S = \frac{U-U(0)}{T} + Nk_B\ln q$;
for an indistinguishable gas $Q = q^N/N!$ gives, via Stirling,
$S = \frac{U-U(0)}{T} + Nk_B\ln\frac{q}{N} + Nk_B$. The $N!$ dies under
$\partial/\partial\beta$, so $U$ is blind to it — but entropy is not.

**Sackur–Tetrode** (monatomic ideal gas, molar):

$$S_m = R\left[\ln\!\left(\frac{k_BT}{p\,\Lambda^3}\right) + \tfrac52\right], \qquad \Lambda = \frac{h}{\sqrt{2\pi m k_BT}}$$

**Equilibrium constant from molecular data:**

$$K = \left[\prod_J\left(\frac{q_J^\circ}{N_A}\right)^{\nu_J}\right]e^{-\Delta_r E_0/RT}, \qquad \Delta_r G^\circ = -RT\ln K$$

with $q_J^\circ$ evaluated at $V_m^\circ = RT/p^\circ$ and $\Delta_r E_0$ the
ground-state energy difference (which is exactly the zero that $q$ alone cannot
supply).

*From* [4.2](lessons/04-02-partition-functions-to-thermodynamics.md)

### The three modes: levels, partition functions, characteristic temperatures

| Mode | Levels (quoted from quantum mechanics) | Partition function | $\theta$ | At 300 K |
|---|---|---|---|---|
| Translation | $E_n = \dfrac{n^2h^2}{8mL^2}$ | $q_\text{trans} = \dfrac{V}{\Lambda^3}$ | $\approx 0$ | ultra-classical, $q\sim10^{29}$ |
| Rotation | $E_J = hcB\,J(J+1)$, $g_J = 2J+1$ | $q_\text{rot} = \dfrac{T}{\sigma\,\theta_R}$ (needs $T \gg \theta_R$) | $\theta_R = \dfrac{hcB}{k_B}$, $\sim1$–$100\ \mathrm{K}$ | **active** |
| Vibration | $E_v = (v+\tfrac12)h\nu$ | $q_\text{vib} = \dfrac{1}{1-e^{-\theta_V/T}}$ | $\theta_V = \dfrac{hc\tilde\nu}{k_B}$, $\sim1500$–$4000\ \mathrm{K}$ | mostly **frozen**, $q\approx1$ |

$$\theta_\text{trans} \ll \theta_R \ll \theta_V$$

Convert a wavenumber straight to a characteristic temperature with
$\theta = 1.439\ \mathrm{cm\,K} \times \tilde\nu$. Worth carrying as calibration
points: $\ce{HCl}$ has $B = 10.59\ \mathrm{cm^{-1}}$ ($\theta_R = 15\ \mathrm{K}$)
and $\tilde\nu \approx 2890\ \mathrm{cm^{-1}}$ ($\theta_V \approx 4150\ \mathrm{K}$);
heavy, floppy $\ce{I2}$ has $\theta_V \approx 309\ \mathrm{K}$, so *its* vibration
is genuinely active at room temperature — the "vibration is frozen" rule has real
exceptions.

*From* [4.3](lessons/04-03-molecular-energy-levels-box-oscillator-rotor.md)

### Hydrogenic levels and atomic spectra

$$E_n = -\frac{Z^2 R_H hc}{n^2} = -13.6\,\frac{Z^2}{n^2}\ \mathrm{eV}, \qquad \tilde\nu = \frac{1}{\lambda} = R_H Z^2\left(\frac{1}{n_1^2}-\frac{1}{n_2^2}\right)$$

exact only for **one-electron** systems ($\ce{H}$, $\ce{He+}$, $\ce{Li^2+}$, …).

| Series | Lands on $n_1 =$ | Region |
|---|---|---|
| Lyman | 1 | ultraviolet |
| Balmer | 2 | visible ($\mathrm{H}\alpha$ 656 nm, $\mathrm{H}\beta$ 486 nm) |
| Paschen | 3 | infrared |

Quantum numbers: $n = 1,2,3,\dots$; $\ell = 0,\dots,n-1$ (letters $s,p,d,f$);
$m_\ell = -\ell,\dots,+\ell$; $m_s = \pm\tfrac12$. Electric-dipole selection rules
$\Delta\ell = \pm1$, $\Delta m_\ell = 0,\pm1$, with **no** restriction on $\Delta n$
— so $3p\to2s$ and $3d\to2p$ appear while $3s\to2s$ and $3d\to2s$ do not.

**Term symbols** $^{2S+1}L_J$ with $J = |L-S|,\dots,L+S$; ground-state hydrogen is
$^2S_{1/2}$. Spin–orbit coupling splits terms with $\ell>0$ into close $J$ levels
(**fine structure**) — the sodium D doublet is one $3p\to3s$ transition whose upper
term splits into $^2P_{3/2}$ (589.0 nm) and $^2P_{1/2}$ (589.6 nm). The **series
limit**, where lines pile up at $\tilde\nu = R_HZ^2/n_1^2$, *is* the ionization
energy from level $n_1$; for hydrogen that is 13.6 eV, or 1312 kJ/mol.

*From* [4.4](lessons/04-04-hydrogen-atom-atomic-spectra.md)

### Rotational and vibrational spectroscopy

$$\text{rotational lines at } \tilde\nu_{J\to J+1} = 2B(J+1) \quad\Rightarrow\quad \textbf{spacing} = 2B \ \text{(and the first line is at } 2B \text{, not } B)$$

$$I = \frac{h}{8\pi^2cB}, \qquad r = \sqrt{I/\mu}, \qquad \mu = \frac{m_1m_2}{m_1+m_2}$$

$$\omega_e = \frac{1}{2\pi c}\sqrt{\frac{k}{\mu}} \qquad\Longrightarrow\qquad k = \mu\,(2\pi c\,\omega_e)^2$$

so one spectrum gives the bond **length** and the other its **stiffness**.
Intensities follow the starting level's population,
$\propto (2J+1)e^{-hcBJ(J+1)/k_BT}$ — degeneracy up, Boltzmann down, so the comb
peaks at an intermediate $J$, never at $J=0$.

**Gross selection rules (the "handle"):** pure rotation needs a **permanent**
dipole; vibration needs the stretch to **change** the dipole. Homonuclear
diatomics ($\ce{N2}$, $\ce{O2}$, $\ce{H2}$) are silent in both microwave and IR.

A vibrational band is not one line: $\Delta J = \pm1$ rides along, giving an **R
branch** above $\omega_e$, a **P branch** below, and a conspicuous gap where the
forbidden Q branch would sit. **Anharmonicity** (the Morse potential) makes the
rungs converge as $v$ rises and lets weak overtones ($\Delta v = \pm2,\pm3$) appear.

*From* [4.5](lessons/04-05-rotational-vibrational-spectroscopy.md)

### Electronic spectroscopy

$$\Delta E = h\nu = \frac{hc}{\lambda}, \qquad \mathcal{A} = \epsilon\,c\,\ell \ \ (\text{Beer–Lambert})$$

with $\epsilon$ in $\mathrm{L\,mol^{-1}\,cm^{-1}}$, $c$ in $\mathrm{mol\,L^{-1}}$,
$\ell$ in cm, and $\mathcal{A}$ dimensionless. Typical electronic gaps are 2–6 eV,
i.e. 200–700 nm, or a few hundred kJ/mol — an order of magnitude above a
vibrational quantum.

Conjugation shrinks the gap because the delocalized $\pi$ electrons sit in a longer
box: $\Delta E \propto 1/L^2$. Ethylene absorbs at 165 nm, butadiene at 217 nm,
$\beta$-carotene at 450 nm (hence orange).

| Decay route | Spin | Lifetime |
|---|---|---|
| Fluorescence $S_1 \to S_0$ | allowed (singlet → singlet) | $10^{-9}$–$10^{-7}\ \mathrm{s}$ |
| Phosphorescence $T_1 \to S_0$ (after intersystem crossing) | **forbidden** (triplet → singlet) | $10^{-6}\ \mathrm{s}$ to seconds |

The slowness of phosphorescence is a *consequence* of the spin-forbiddenness, not a
separate fact. The width of a UV–vis band reports how much the geometry changes on
excitation: matched wells give a sharp 0–0 band, a displaced excited-state well
gives a broad progression peaking at high $v'$.

*From* [4.6](lessons/04-06-electronic-spectroscopy.md)

## Assumed, not taught here

This is a Tier 2 course, so it uses the following without deriving them. The
formulas themselves are mostly tabulated above — this table says where the *why*
lives.

| Fact | Where it's taught |
|---|---|
| Ideal gas law, partial pressures, kinetic theory, and where $Z\neq1$ comes from | [general-chemistry 3.1](../general-chemistry/lessons/03-01-gases-ideal-gas-law-kinetic-theory.md), card entries [ideal gas](../general-chemistry/reference.md#ideal-gas) and [partial pressure](../general-chemistry/reference.md#partial-pressure) |
| Moles, molar mass, molarity, stoichiometry and limiting reagents | [general-chemistry 2.1](../general-chemistry/lessons/02-01-mole-molar-mass-formulas.md), [2.2](../general-chemistry/lessons/02-02-stoichiometry-limiting-reagents.md) |
| Calorimetry, and $\Delta H$ as "the heat of reaction" before the constant-$p$ caveat | [general-chemistry 3.2](../general-chemistry/lessons/03-02-thermochemistry-enthalpy-calorimetry.md) |
| Hess's law and tabulated $\Delta_f H^\circ$ (this course explains *why* it works) | [general-chemistry 3.3](../general-chemistry/lessons/03-03-hess-law-enthalpies-formation.md), card entry [Hess's law](../general-chemistry/reference.md#hesss-law) |
| ICE tables, $Q$ vs $K$, and Le Châtelier as a qualitative rule | [general-chemistry 3.4](../general-chemistry/lessons/03-04-chemical-equilibrium-k-le-chatelier.md), card entry [ICE table](../general-chemistry/reference.md#ice-table) |
| $\Delta G = -nFE$ and cell voltages (used in 1.3's fuel-cell problem) | [general-chemistry 4.4](../general-chemistry/lessons/04-04-taste-of-electrochemistry.md), card entry [standard reduction potential](../general-chemistry/reference.md#standard-reduction-potential) |
| Reversibility, Carnot, engines, and the physicist's sign conventions | [thermodynamics-physics 2.1](../thermodynamics-physics/lessons/02-01-heat-engines-carnot-cycle.md), [2.2](../thermodynamics-physics/lessons/02-02-carnot-efficiency-second-law.md), card entry [sign conventions](../thermodynamics-physics/reference.md#sign-conventions-read-this-before-every-problem) |
| The Legendre transform that turns $U(S,V)$ into $G(T,p)$ | [thermodynamics-physics 3.1](../thermodynamics-physics/lessons/03-01-thermodynamic-potentials.md), card entry [Legendre transform](../thermodynamics-physics/reference.md#legendre-transform) |
| The adiabat $pV^\gamma$ and the four standard ideal-gas processes in full | [thermodynamics-physics 1.4](../thermodynamics-physics/lessons/01-04-heat-capacities-pv-processes.md), card entry [the four standard processes](../thermodynamics-physics/reference.md#the-four-standard-processes-ideal-gas-quasi-static) |
| Particle in a box (the $n^2h^2/8mL^2$ levels) | [quantum-mechanics 2.3](../quantum-mechanics/lessons/02-03-infinite-square-well.md) |
| Harmonic-oscillator levels $(v+\tfrac12)h\nu$ and the zero-point energy | [quantum-mechanics 3.1](../quantum-mechanics/lessons/03-01-harmonic-oscillator-analytic.md) |
| Rigid rotor: $J(J+1)$ levels and the $2J+1$ degeneracy | [quantum-mechanics 4.3](../quantum-mechanics/lessons/04-03-spherical-harmonics-rigid-rotor.md) |
| The hydrogen-atom solution behind $E_n = -13.6Z^2/n^2$ eV | [quantum-mechanics 4.4](../quantum-mechanics/lessons/04-04-hydrogen-atom.md) |
| Spin, and why $\ell$ and $s$ couple into $J$ (fine structure, term symbols) | [quantum-mechanics 4.5](../quantum-mechanics/lessons/04-05-spin-pauli-stern-gerlach.md), [4.6](../quantum-mechanics/lessons/04-06-addition-angular-momenta.md) |
| Why transition intensities obey selection rules at all (dipole matrix elements) | [quantum-mechanics 6.6](../quantum-mechanics/lessons/06-06-fermi-golden-rule-radiation.md) |
| $S = k_B\ln W$ derived by counting, and the canonical ensemble behind $q$ | [stat-mech 1.3](../stat-mech/lessons/01-03-entropy-microcanonical.md), [3.1](../stat-mech/lessons/03-01-canonical-ensemble-boltzmann-factor.md), [3.2](../stat-mech/lessons/03-02-partition-function.md) |
| The Sackur–Tetrode derivation and the $N!$ / Gibbs-paradox argument | [stat-mech 1.5](../stat-mech/lessons/01-05-ideal-gas-sackur-tetrode.md) |
| Equipartition — why each active mode carries $\tfrac12RT$ | [stat-mech 3.4](../stat-mech/lessons/03-04-equipartition-theorem.md) |
| Conjugation and aromaticity, the structural side of a chromophore | [organic-chemistry 3.1](../organic-chemistry/lessons/03-01-aromaticity-huckel.md) |
| Separable first-order ODEs (every integrated rate law) and geometric series | [calc-refresher 2.2](../calc-refresher/lessons/02-02-integration-techniques.md), [3.1](../calc-refresher/lessons/03-01-series-convergence-tests.md) |
| Partial derivatives and equality of mixed partials (the whole Maxwell argument) | [calc-refresher 4.1](../calc-refresher/lessons/04-01-partial-derivatives-and-gradient.md), card entry [mixed partials commute](../calc-refresher/reference.md#mixed-partials-commute-clairaut) |

## Pitfalls

### Signs, units, and conventions

- $\Delta H$ comes in kJ/mol and $\Delta S$ in $\mathrm{J\,K^{-1}\,mol^{-1}}$ — convert before combining, or $\Delta G$ is off by 1000. Same trap in Clausius–Clapeyron and van 't Hoff, where $R$ is in joules. *([1.3](lessons/01-03-gibbs-helmholtz-energies.md), [2.2](lessons/02-02-clapeyron-clausius-clapeyron.md))*
- In this course $w > 0$ means work done **on** the system; some physics texts flip it and write $\Delta U = q - w$. Check which convention a source uses. *([1.1](lessons/01-01-first-law-enthalpy.md))*
- In any two-point $\ln(X_2/X_1) = -\frac{\Delta H}{R}(1/T_2 - 1/T_1)$ formula, keep each state's $T$ and $X$ on the same subscript, and sanity-check the direction (higher $T$ ⇒ higher vapour pressure; endothermic ⇒ higher $K$; hotter ⇒ larger $k$). A negative $E_a$ means you flipped a subtraction. *([2.2](lessons/02-02-clapeyron-clausius-clapeyron.md), [2.7](lessons/02-07-shifting-equilibria-van-t-hoff.md), [3.4](lessons/03-04-arrhenius-transition-state-theory.md))*
- Never take the log of something with units. Every argument — $p/p^\circ$, $a$, $\phi$, $K$ — is a dimensionless ratio by construction. *([1.5](lessons/01-05-chemical-potential.md), [1.6](lessons/01-06-fugacity-activity.md))*
- Never drop the subscript on a partial derivative: $(\partial G/\partial T)_p$ and $(\partial G/\partial T)_V$ are different numbers. *([1.4](lessons/01-04-fundamental-equations-maxwell-relations.md))*

### State versus path

- A system *has* $U$, $H$, $S$, $T$, $p$, $V$ — it does not "have" heat or work. Writing $\Delta q$ or $\Delta w$ is a category error. *([1.1](lessons/01-01-first-law-enthalpy.md))*
- $\Delta H = q$ only at constant pressure with only $pV$ work; at constant volume the correct statement is $\Delta U = q_V$. *([1.1](lessons/01-01-first-law-enthalpy.md))*
- Reversible and irreversible paths between the same endpoints give different $q$ and $w$ but identical $\Delta U$, $\Delta H$, $\Delta S$ — and the reversible path always extracts strictly more work. *([1.1](lessons/01-01-first-law-enthalpy.md))*
- $\Delta S = q/T$ only for a **reversible** step. Compute $\Delta S_\text{sys}$ along an invented reversible path, then get $\Delta S_\text{surr}$ from the *actual* heat. (Free expansion: $q=0$ but $\Delta S_\text{sys} = nR\ln2$.) *([1.2](lessons/01-02-entropy-second-law.md))*
- $dU = T\,dS - p\,dV$ holds for **any** path, even though it was derived from a reversible one — but $T\,dS$ equals the actual heat only when the path is reversible. *([1.4](lessons/01-04-fundamental-equations-maxwell-relations.md))*

### Free energy and spontaneity

- Exothermic does not mean spontaneous: a large negative $T\Delta S$ can overwhelm a negative $\Delta H$. Only $\Delta G$ decides. *([1.3](lessons/01-03-gibbs-helmholtz-energies.md))*
- A system's entropy *can* decrease (freezing, a cell building a protein); only $\Delta S_\text{univ}$ may not. *([1.2](lessons/01-02-entropy-second-law.md))*
- $\Delta G > 0$ does not mean "nothing happens" — it means the **reverse** direction is spontaneous. *([1.3](lessons/01-03-gibbs-helmholtz-energies.md))*
- $\Delta G$ is the *maximum* non-expansion work, reached only reversibly; any real process delivers less, and the shortfall leaves as heat. *([1.3](lessons/01-03-gibbs-helmholtz-energies.md))*

### Chemical potential, activities, and standard states

- $\mu_i \neq G/n_i$ in a mixture — it is a partial derivative at fixed other amounts, and adding $i$ rearranges everything else too. *([1.5](lessons/01-05-chemical-potential.md))*
- $\mu^\circ$ is $\mu$ at **1 bar**, not at zero pressure. As $p\to0$, $\mu\to-\infty$ — which is exactly why vacuums fill. *([1.5](lessons/01-05-chemical-potential.md))*
- The gas standard state is the *hypothetical ideal* gas at 1 bar, not the real gas at 1 bar. *([1.6](lessons/01-06-fugacity-activity.md))*
- Solvent and solute have **different** ideal limits (Raoult vs Henry); mixing them references your activities to the wrong zero. And $K_B \neq p_B^*$ — the solute's neighbours are solvent molecules. *([1.6](lessons/01-06-fugacity-activity.md), [2.3](lessons/02-03-ideal-solutions-raoult-henry.md))*
- Fugacity and activity are bookkeeping, not new physics: every hard fact lives in $\phi$ or $\gamma$. *([1.6](lessons/01-06-fugacity-activity.md))*

### Phases and phase diagrams

- A boundary line means **both** phases are present, tied at equal $\mu$; inside an area only one exists. *([2.1](lessons/02-01-phase-stability-one-component-diagrams.md))*
- $F$ counts the *freely adjustable* variables after the coexistence constraints, not the number of variables in play. *([2.1](lessons/02-01-phase-stability-one-component-diagrams.md))*
- Not every fusion line slopes right: water's tilts **left** because ice is less dense, so pressure melts it. The sign is the sign of $\Delta V_\text{fus}$. *([2.1](lessons/02-01-phase-stability-one-component-diagrams.md), [2.2](lessons/02-02-clapeyron-clausius-clapeyron.md))*
- Clausius–Clapeyron needs a **gas** on one side; a fusion line demands the full Clapeyron equation with its tiny real $\Delta V$. *([2.2](lessons/02-02-clapeyron-clausius-clapeyron.md))*
- "Constant $\Delta_\text{vap}H$" is an approximation — fine over tens of kelvin, suspect over hundreds, and it fails outright near the critical point. Same caveat for constant $\Delta_r H^\circ$ in van 't Hoff. *([2.2](lessons/02-02-clapeyron-clausius-clapeyron.md), [2.7](lessons/02-07-shifting-equilibria-van-t-hoff.md))*
- Tie lines are **horizontal**, their ends give *compositions*, and the *amounts* come from the **opposite** arm. An azeotrope is not a compound — it is just where the tie line's length hits zero. *([2.5](lessons/02-05-binary-phase-diagrams.md))*

### Solutions and colligative properties

- $\Delta_\text{mix}H = 0$ does not mean "no interactions" — it means A–B contacts are energetically equal to the average of A–A and B–B. And $\Delta_\text{mix}G < 0$ always, since every $\ln x_i < 0$. *([2.3](lessons/02-03-ideal-solutions-raoult-henry.md))*
- Raoult and Henry are written in **mole fraction**; converting to molarity or molality is a separate step. *([2.3](lessons/02-03-ideal-solutions-raoult-henry.md))*
- Use **molality** for $\Delta T_f$ and $\Delta T_b$ (mass-based, temperature-proof) but **molarity** for $\Pi$. Don't swap them. *([2.4](lessons/02-04-colligative-properties.md))*
- Colligative effects count particles, not grams — and real $i$ runs slightly below the ideal integer because of ion pairing ($\ce{NaCl}$ measures about 1.9, not 2). *([2.4](lessons/02-04-colligative-properties.md))*

### Equilibrium

- $Q$ and $K$ are the same expression; $Q$ is its value anywhere, $K$ its value at equilibrium. Compare them to get the direction. *([2.6](lessons/02-06-chemical-equilibrium-constant.md))*
- $\Delta_r G^\circ$ judges the *standard* state, not your actual mixture — the sign of $\Delta_r G = \Delta_r G^\circ + RT\ln Q$ does. A reaction with $\Delta_r G^\circ > 0$ still runs forward from pure reactants. *([2.6](lessons/02-06-chemical-equilibrium-constant.md))*
- Pure solids and pure liquids have $a=1$ and vanish from $K$; and $K$ is dimensionless, because activities are ratios. *([2.6](lessons/02-06-chemical-equilibrium-constant.md))*
- Pressure never changes $K$ — it moves the *composition*, and only when $\Delta n_\text{gas}\neq0$. Adding inert gas does nothing at constant volume but shifts toward more gas molecules at constant total pressure. *([2.7](lessons/02-07-shifting-equilibria-van-t-hoff.md))*

### Rate laws and mechanisms

- Orders are **measured**, not read off the balanced equation. They equal the coefficients only for a genuinely elementary step — and you cannot tell a reaction is elementary by looking at it. *([3.1](lessons/03-01-rate-laws-reaction-order.md), [3.3](lessons/03-03-mechanisms-steady-state-pre-equilibrium.md))*
- "Rate constant" means constant in *concentration*; $k$ depends strongly (exponentially) on temperature. *([3.1](lessons/03-01-rate-laws-reaction-order.md))*
- Report a rate with its species and its stoichiometric divisor, or it is ambiguous: $-d[\ce{A}]/dt$ and $-d[\ce{B}]/dt$ are generally different numbers. *([3.1](lessons/03-01-rate-laws-reaction-order.md))*
- Only **first**-order half-lives ignore the starting concentration. Zero-order ones grow with $[\ce{A}]_0$, second-order ones shrink — so a second-order tail drags on with each half-life twice the last. *([3.2](lessons/03-02-integrated-rate-laws-half-lives.md))*
- $1/[\ce{A}] = 1/[\ce{A}]_0 + kt$ assumes rate $= k[\ce{A}]^2$. For $k[\ce{A}][\ce{B}]$ with comparable concentrations, flood one reactant or use the proper two-reactant integral. *([3.2](lessons/03-02-integrated-rate-laws-half-lives.md))*
- A rate law may contain only species you can put in the flask. If an intermediate survives your algebra, you haven't finished — apply steady state or pre-equilibrium. *([3.3](lessons/03-03-mechanisms-steady-state-pre-equilibrium.md))*
- Pre-equilibrium needs step 1 fast in *both* directions; the steady state only needs the intermediate to stay low. Steady state contains pre-equilibrium, never the reverse. *([3.3](lessons/03-03-mechanisms-steady-state-pre-equilibrium.md))*
- A matching rate law lets a mechanism survive; it never proves it. A mismatch kills it. *([3.3](lessons/03-03-mechanisms-steady-state-pre-equilibrium.md))*

### Barriers, catalysts, and enzymes

- $E_a$ is the barrier to the pass, **not** the reaction's energy change. A strongly exothermic reaction can still be glacially slow. *([3.4](lessons/03-04-arrhenius-transition-state-theory.md))*
- A big $A$ only sets a ceiling; near room temperature the exponential usually dominates. And $A$ is not strictly temperature-independent — Eyring's carries a factor of $T$, which is why $E_a = \Delta^\ddagger H + RT$ and not $\Delta^\ddagger H$. *([3.4](lessons/03-04-arrhenius-transition-state-theory.md))*
- A catalyst does not shift equilibrium: it lowers both barriers equally, so you reach the *same* mixture sooner. Anyone claiming a catalyst improves equilibrium yield has confused kinetics with thermodynamics. *([3.5](lessons/03-05-catalysis-enzyme-kinetics.md))*
- A **large** $K_M$ means **weak** binding (lots of substrate needed for half-speed). And $v_{\max} = k_2[\ce{E}]_0$ scales with how much enzyme you added; the enzyme-intrinsic number is the turnover number $k_2$. *([3.5](lessons/03-05-catalysis-enzyme-kinetics.md))*

### Partition functions

- $q$ is a **count**, not a probability: it is not capped at 1, and a big $q$ means many accessible states, not more energy per molecule. Energy comes from $-\partial\ln q/\partial\beta$. *([4.1](lessons/04-01-boltzmann-partition-function.md), [4.3](lessons/04-03-molecular-energy-levels-box-oscillator-rotor.md))*
- Decide whether you are summing over **levels** (keep $g_i$) or over individual **states** (no $g_i$) — mixing them double-counts. Forgetting $2J+1$ in rotation also misplaces the most-populated $J$. *([4.1](lessons/04-01-boltzmann-partition-function.md), [4.3](lessons/04-03-molecular-energy-levels-box-oscillator-rotor.md))*
- Measure energies from the ground level. A different zero multiplies $q$ by a constant — harmless in population ratios, fatal in $q$ itself. *([4.1](lessons/04-01-boltzmann-partition-function.md))*
- $q$ (one molecule) and $Q$ (the assembly) are not interchangeable. Using $Q = q^N$ for a gas gives a non-extensive entropy — the Gibbs paradox. *([4.2](lessons/04-02-partition-functions-to-thermodynamics.md))*
- $q$ gives only $U - U(0)$; the missing zero re-enters explicitly as $e^{-\Delta_rE_0/RT}$ in an equilibrium constant. *([4.2](lessons/04-02-partition-functions-to-thermodynamics.md))*
- The closed forms have conditions: $q_\text{trans} = V/\Lambda^3$ assumes a near-continuum (false for vibration and electronic levels), and $q_\text{rot} = T/\sigma\theta_R$ assumes $T \gg \theta_R$ (false for $\ce{H2}$ near 88 K). Don't drop $\sigma$. *([4.2](lessons/04-02-partition-functions-to-thermodynamics.md), [4.3](lessons/04-03-molecular-energy-levels-box-oscillator-rotor.md))*

### Spectroscopy

- $E_n = -13.6/n^2$ eV is a level, not a released energy — a line is always a *difference*. And the $1/n^2$ ladder is exact only for one-electron atoms. *([4.4](lessons/04-04-hydrogen-atom-atomic-spectra.md))*
- Hydrogen's lines **crowd together** toward the series limit; the rotor's and oscillator's fan out or stay even. Don't import equal spacing from one to the other. *([4.4](lessons/04-04-hydrogen-atom-atomic-spectra.md), [4.5](lessons/04-05-rotational-vibrational-spectroscopy.md))*
- Spin–orbit splitting means one transition resolved into a doublet, not two absorptions. *([4.4](lessons/04-04-hydrogen-atom-atomic-spectra.md))*
- The first rotational line is at $2B$ and the spacing is also $2B$ — get $B$ once from the spacing and stop halving. *([4.5](lessons/04-05-rotational-vibrational-spectroscopy.md))*
- Homonuclear diatomics have no dipole handle, so they are microwave- and IR-silent despite rotating and vibrating happily. *([4.5](lessons/04-05-rotational-vibrational-spectroscopy.md))*
- The tallest rotational line is at an intermediate $J$, not $J=0$; and a vibrational band is P and R branches with a gap, not a single sharp line. *([4.5](lessons/04-05-rotational-vibrational-spectroscopy.md))*
- The strongest vibronic band is the 0–0 only when the excited-state geometry matches the ground state; a displaced upper well pushes the peak to higher $v'$. *([4.6](lessons/04-06-electronic-spectroscopy.md))*
- Fluorescence and phosphorescence differ in **spin** first and speed second. And in Beer–Lambert, $\epsilon$ is a molar absorptivity with units, not a probability. *([4.6](lessons/04-06-electronic-spectroscopy.md))*
