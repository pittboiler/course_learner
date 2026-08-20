# Statistical Mechanics · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Statistical mechanics is one move made three times. Pick what you hold fixed
(energy, or temperature, or temperature and chemical potential), write the sum
over microstates that respects it, take the log — and every thermodynamic
quantity is a derivative away. The three ensembles, the three quantum
statistics, and the critical exponents are the three tables you will actually
reach for mid-problem; they are the first three entries under *Formulas and
rules*. Macroscopic thermodynamics itself (engines, potentials, Maxwell
relations, phase lines) is assumed here and tabulated on the
[classical thermodynamics card](../thermodynamics-physics/reference.md).

## Notation

| Symbol | Means | First used |
|---|---|---|
| $\Gamma$ | phase space — one point in it is the entire microscopic state of the system | [1.1](lessons/01-01-mechanics-to-statistics.md) |
| $\rho(\mathbf x,t)$ | density of a cloud of microstates in $\Gamma$; Liouville says it flows incompressibly | [1.1](lessons/01-01-mechanics-to-statistics.md) |
| $\Omega(E,V,N)$ | **multiplicity** — how many microstates wear the macrostate's mask | [1.2](lessons/01-02-microstates-macrostates-postulate.md) |
| $h^{3N}$, $N!$ | the two divisors that turn a phase-space volume into a dimensionless *count* | [1.2](lessons/01-02-microstates-macrostates-postulate.md) |
| $k_B$ | Boltzmann constant — only converts "number of microstates" into joules per kelvin | [1.3](lessons/01-03-entropy-microcanonical.md) |
| $\delta E$ | width of the energy shell; its exact value never survives into thermodynamics | [1.3](lessons/01-03-entropy-microcanonical.md) |
| $\beta$ | inverse temperature $1/k_BT$ — the "coldness" you differentiate with respect to | [1.4](lessons/01-04-temperature-pressure-chemical-potential.md) |
| $\mu$ | chemical potential — the energy price of one more particle, set by the reservoir | [1.4](lessons/01-04-temperature-pressure-chemical-potential.md) |
| $\lambda$, $\lambda_{\text{th}}$ | thermal de Broglie wavelength — the quantum "size" of a particle at temperature $T$ | [1.5](lessons/01-05-ideal-gas-sackur-tetrode.md) |
| $\delta Q$, $\delta W$ | inexact differentials — slivers of heat and work along a *path*, not $d$ of anything | [2.1](lessons/02-01-laws-of-thermodynamics.md) |
| $U$ | internal energy; in ensemble formulas it is the same object as $\langle E\rangle$ | [2.1](lessons/02-01-laws-of-thermodynamics.md) |
| $\eta$, COP | engine efficiency $W/Q_h$; refrigerator/heat-pump coefficient of performance | [2.2](lessons/02-02-entropy-engines-carnot.md) |
| $F$, $H$, $G$ | Helmholtz free energy, enthalpy, Gibbs free energy | [2.3](lessons/02-03-thermodynamic-potentials-legendre.md) |
| $\Omega(T,V,\mu)$ | **grand potential** $F-\mu N=-pV$ — *not* the multiplicity, same letter | [2.3](lessons/02-03-thermodynamic-potentials-legendre.md) |
| $C_V$, $C_p$, $\kappa_T$, $\alpha$ | response functions: two heat capacities, isothermal compressibility, thermal expansion | [2.4](lessons/02-04-maxwell-relations-stability.md) |
| $Z$ | canonical partition function $\sum_s e^{-\beta E_s}$ | [3.1](lessons/03-01-canonical-ensemble-boltzmann-factor.md) |
| $g(E)$ | degeneracy — how many microstates share energy $E$ (later: density of states) | [3.1](lessons/03-01-canonical-ensemble-boltzmann-factor.md) |
| $f$ | number of *quadratic* terms in the energy — the only thing equipartition counts | [3.4](lessons/03-04-equipartition-theorem.md) |
| $\mathcal Z$ | grand partition function $\sum_s e^{-\beta(E_s-\mu N_s)}$ | [3.5](lessons/03-05-grand-canonical-ensemble.md) |
| $z$ | fugacity $e^{\beta\mu}$ — the weight per particle drawn from the reservoir | [3.5](lessons/03-05-grand-canonical-ensemble.md) |
| $n_k$, $\epsilon_k$ | occupation number of single-particle **mode** $k$, and that mode's energy | [4.1](lessons/04-01-quantum-counting-occupation-numbers.md) |
| $n$ | number density $N/V$ (context: never the occupation of a named mode) | [4.1](lessons/04-01-quantum-counting-occupation-numbers.md) |
| $n\lambda^3$ | degeneracy parameter — quantum statistics matter once it reaches about 1 | [4.1](lessons/04-01-quantum-counting-occupation-numbers.md) |
| $g(\epsilon)$ | density of states — number of single-particle modes per unit energy | [4.2](lessons/04-02-bose-einstein-fermi-dirac.md) |
| $u(\omega)$ | spectral energy density — energy per unit volume per unit frequency | [4.3](lessons/04-03-photon-gas-blackbody.md) |
| $E_F$, $p_F$, $T_F$ | Fermi energy, Fermi momentum, Fermi temperature $E_F/k_B$ | [4.4](lessons/04-04-ideal-fermi-gas.md) |
| $N_0$, $T_c$ | ground-state (condensate) population, and the condensation temperature | [4.5](lessons/04-05-ideal-bose-gas-condensation.md) |
| $B_2(T)$, $f(r)$ | second virial coefficient, and the Mayer function $e^{-\beta u(r)}-1$ | [5.1](lessons/05-01-virial-van-der-waals.md) |
| $a$, $b$ | van der Waals attraction strength and excluded volume per particle | [5.1](lessons/05-01-virial-van-der-waals.md) |
| $v$, $s$ | per-particle volume $V/N$ and entropy $S/N$ (lowercase = per particle) | [5.2](lessons/05-02-phase-transitions-clausius-clapeyron.md) |
| $L$ | latent heat — $T\,\Delta s$, the heat absorbed crossing a phase line | [5.2](lessons/05-02-phase-transitions-clausius-clapeyron.md) |
| $m$ | order parameter (magnetization per spin); $J$ coupling, $z$ coordination number | [5.3](lessons/05-03-ising-mean-field.md) |
| $h$ | external field in the Ising energy — *not* Planck's constant | [5.3](lessons/05-03-ising-mean-field.md) |
| $t$ | reduced temperature $(T-T_c)/T_c$ — the axis every critical power law runs on | [5.4](lessons/05-04-critical-exponents-universality.md) |
| $\xi$ | correlation length — how far a fluctuation is felt; diverges at $T_c$ | [5.4](lessons/05-04-critical-exponents-universality.md) |
| $\beta_{\text{exp}},\gamma,\alpha,\nu,\delta$ | the five critical exponents (subscript on $\beta$ to keep it off $1/k_BT$) | [5.4](lessons/05-04-critical-exponents-universality.md) |
| $K$, $R(K)$, $\lambda_t$ | RG coupling $\beta J$, the recursion $K'=R(K)$, and the thermal eigenvalue | [5.5](lessons/05-05-renormalization-group.md) |
| $b$ | RG block factor (lengths shrink by $b$ per step) — *not* the vdW volume | [5.5](lessons/05-05-renormalization-group.md) |
| $\gamma$, $\xi(t)$, $B$ | Langevin drag coefficient, the random force, and its noise strength | [6.1](lessons/06-01-brownian-langevin.md) |
| $D$, $\tau$ | diffusion constant $k_BT/\gamma$, and the velocity relaxation time $m/\gamma$ | [6.1](lessons/06-01-brownian-langevin.md) |
| $H$ | Shannon entropy in **bits** — again not Planck's constant, and not enthalpy | [6.2](lessons/06-02-entropy-information-arrow.md) |

## Definitions

### Microstate

The full God's-eye description: every position and momentum (classically, one
point of $\Gamma$), or one $N$-body energy eigenstate (quantum-mechanically).

$$\mathbf x=(q_1,\dots,q_{3N},\,p_1,\dots,p_{3N})\in\Gamma\subseteq\mathbb R^{6N}$$

*Introduced:* [1.1](lessons/01-01-mechanics-to-statistics.md)

### Macrostate

Everything an instrument actually reports and nothing more — for an isolated
system the triple $(E,V,N)$.

*Introduced:* [1.2](lessons/01-02-microstates-macrostates-postulate.md)

### Multiplicity

The count of microstates compatible with a macrostate. Classically it is a
phase-space volume made dimensionless by $h^{3N}$ and de-overcounted by $N!$.

$$\Omega(E,V,N)=\frac{1}{N!\,h^{3N}}\int_{E\le H\le E+\delta E} d^{3N}q\,d^{3N}p$$

*Introduced:* [1.2](lessons/01-02-microstates-macrostates-postulate.md)

### Fundamental postulate

For an isolated system in equilibrium, every accessible **micro**state is
equally probable — so each carries probability $1/\Omega$, and a macrostate's
probability is just its share of the microstates, $P(M)=\Omega(M)/\Omega_{\text{tot}}$.

*Introduced:* [1.2](lessons/01-02-microstates-macrostates-postulate.md)

### Thermodynamic limit

Let $N\to\infty$ and $V\to\infty$ with the density $N/V$ fixed. Relative
fluctuations die like $1/\sqrt N$, and the probabilistic haze sharpens into the
exact laws of thermodynamics.

*Introduced:* [1.1](lessons/01-01-mechanics-to-statistics.md)

### Ergodic hypothesis

What you'd get watching one system for a long time equals what you'd get
photographing a huge collection once and averaging. A **motivated assumption**,
not a theorem — it is what licenses replacing time evolution by counting.

$$\lim_{T\to\infty}\frac1T\int_0^T A(\mathbf x(t))\,dt=\langle A\rangle_{\text{ensemble}}$$

*Introduced:* [1.1](lessons/01-01-mechanics-to-statistics.md)

### Microcanonical ensemble

The description of an **isolated** system: $(E,V,N)$ fixed, every microstate in
the shell $[E,E+\delta E]$ equally likely, everything outside it forbidden.

*Introduced:* [1.3](lessons/01-03-entropy-microcanonical.md)

### Boltzmann entropy

Entropy is the logarithm of how many microscopic ways the present macrostate can
be arranged. The log is there so that multiplying multiplicities becomes adding
entropies.

$$S=k_B\ln\Omega,\qquad \Omega_{\text{tot}}=\Omega_1\Omega_2\ \Rightarrow\ S_{\text{tot}}=S_1+S_2$$

*Introduced:* [1.3](lessons/01-03-entropy-microcanonical.md)

### Second law, statistically

Remove a constraint and the system is found, with probability
$1-10^{-(\text{huge})}$, in the macrostate of maximum $\Omega$ — hence maximum
$S$. Not a prohibition on decrease, an overwhelming improbability of it.

*Introduced:* [1.3](lessons/01-03-entropy-microcanonical.md)

### Thermal de Broglie wavelength

The quantum blur of a particle at temperature $T$. Classical counting is
trustworthy exactly while the blurs stay smaller than the spacing between
particles.

$$\lambda_{\text{th}}=\frac{h}{\sqrt{2\pi mk_BT}},\qquad \text{classical when } \frac{V}{N}\gg\lambda_{\text{th}}^3$$

*Introduced:* [1.5](lessons/01-05-ideal-gas-sackur-tetrode.md)

### Gibbs paradox

Without the $1/N!$, entropy is not extensive and merging two samples of the
*same* gas appears to create entropy from nothing. The factorial — a quantum
fact smuggled into a classical count — replaces $\ln V$ by $\ln(V/N)$ and the
spurious term vanishes.

*Introduced:* [1.5](lessons/01-05-ideal-gas-sackur-tetrode.md)

### State function vs. process quantity

$U,S,T,p,V$ belong to the system: exact differentials, $\oint dU=0$, changes
depend only on endpoints. $Q$ and $W$ belong to the *trip*: inexact, written
with $\delta$, because there is no function "heat" to differentiate.

*Introduced:* [2.1](lessons/02-01-laws-of-thermodynamics.md)

### Quasi-static vs. reversible

**Quasi-static** = slow enough to stay arbitrarily near equilibrium.
**Reversible** = quasi-static *and* dissipation-free, so the film runs backward
through the same states. Only reversible processes satisfy $\delta Q=T\,dS$.

*Introduced:* [2.1](lessons/02-01-laws-of-thermodynamics.md)

### Clausius inequality

Sum (heat absorbed)/(temperature absorbed at) around any cycle and you never get
a positive number; you hit zero exactly when nothing was wasted. This is what
makes $S$ a state function at all.

$$\oint\frac{\delta Q}{T}\le 0,\qquad \Delta S\ge\int_i^f\frac{\delta Q}{T}$$

*Introduced:* [2.2](lessons/02-02-entropy-engines-carnot.md)

### Canonical ensemble

A system in contact with a heat bath at temperature $T$: energy fluctuates, and
a microstate's probability depends on nothing but its energy.

$$P(s)=\frac{e^{-\beta E_s}}{Z},\qquad Z=\sum_s e^{-\beta E_s}$$

*Introduced:* [3.1](lessons/03-01-canonical-ensemble-boltzmann-factor.md)

### Partition function

Not a normalizer — a **generating function**. Its log's first $\beta$-derivative
is the mean energy, its second is the variance, and $-k_BT$ times it is the free
energy.

*Introduced:* [3.2](lessons/03-02-partition-function.md)

### Ensemble equivalence

Because relative energy fluctuations shrink like $1/\sqrt N$, fixing $E$ exactly
and fixing $T$ exactly give the same thermodynamics to leading order in $N$. It
**fails** when $C_V$ diverges (criticality) or energy is not extensive (gravity).

*Introduced:* [3.3](lessons/03-03-fluctuations-ensemble-equivalence.md)

### Equipartition theorem

Every *quadratic* slot in the energy holds $\tfrac12k_BT$ on average, whatever
its stiffness — the stiffness cancels in the Gaussian integral. Valid only once
$k_BT$ exceeds that mode's quantum level spacing.

$$\left\langle\tfrac12 a x^2\right\rangle=\tfrac12 k_BT,\qquad \left\langle x_i\frac{\partial H}{\partial x_j}\right\rangle=\delta_{ij}k_BT$$

*Introduced:* [3.4](lessons/03-04-equipartition-theorem.md)

### Grand canonical ensemble

Punch a second, permeable hole in the wall: energy *and* particles cross, priced
by $T$ and $\mu$. Each microstate is weighted by the **Gibbs factor**.

$$P(s)=\frac{e^{-\beta(E_s-\mu N_s)}}{\mathcal Z},\qquad \mathcal Z=\sum_{N}z^N Z(N,V,T),\quad z=e^{\beta\mu}$$

*Introduced:* [3.5](lessons/03-05-grand-canonical-ensemble.md)

### Occupation number

For indistinguishable particles the honest label is not *which* particle is
where but *how many* sit in each single-particle mode. Bosons allow
$n_k=0,1,2,\dots$; fermions allow $n_k\in\{0,1\}$ — that is Pauli exclusion.

$$E=\sum_k \epsilon_k n_k,\qquad N=\sum_k n_k$$

*Introduced:* [4.1](lessons/04-01-quantum-counting-occupation-numbers.md)

### Quantum degeneracy

The regime where the thermal blurs overlap and classical counting breaks:
$n\lambda^3\gtrsim1$. Electrons in copper sit at $n\lambda^3\sim10^3$; room air
at $10^{-7}$.

*Introduced:* [4.1](lessons/04-01-quantum-counting-occupation-numbers.md)

### Density of states

The number of single-particle modes per unit energy — the weight that turns a
sum over modes into an integral over energy.

$$N=\int_0^\infty g(\epsilon)\langle n(\epsilon)\rangle\,d\epsilon,\qquad E=\int_0^\infty \epsilon\,g(\epsilon)\langle n(\epsilon)\rangle\,d\epsilon$$

*Introduced:* [4.2](lessons/04-02-bose-einstein-fermi-dirac.md)

### Fermi energy

The energy of the last filled level at $T=0$ — equivalently $\mu(T=0)$. Fixed by
**density alone**; temperature does not appear. At finite $T$ the step is
smeared over a width of order $k_BT$.

*Introduced:* [4.4](lessons/04-04-ideal-fermi-gas.md)

### Degeneracy pressure

A pressure that survives at absolute zero, with no thermal origin: Pauli
exclusion forces most fermions into high-momentum states, and that momentum flux
pushes on the walls.

*Introduced:* [4.4](lessons/04-04-ideal-fermi-gas.md)

### Bose–Einstein condensation

With $N$ conserved, $\mu$ can climb only to $0^-$; the excited states then have a
finite, shrinking capacity, and below $T_c$ the leftover atoms pile into the
single ground state. A phase transition with **zero interaction energy** behind
it.

*Introduced:* [4.5](lessons/04-05-ideal-bose-gas-condensation.md)

### Second virial coefficient

The leading correction to $pV=Nk_BT$, built from the Mayer function $f(r)=e^{-\beta u(r)}-1$.
Repulsion contributes positively, attraction negatively, so its **sign** reports
which effect currently wins.

$$B_2(T)=-\frac12\int f(r)\,d^3r$$

*Introduced:* [5.1](lessons/05-01-virial-van-der-waals.md)

### Maxwell equal-area construction

The recipe that replaces the mechanically forbidden middle branch of a van der
Waals loop with a flat coexistence shelf: put the tie-line at the height making
the two lobes equal in area. (Not to be confused with a Maxwell *relation*.)

$$\int_{v_\ell}^{v_g}\big(p(v)-p_{\text{coex}}\big)\,dv=0 \quad\Longleftrightarrow\quad \mu_\ell=\mu_g$$

*Introduced:* [5.1](lessons/05-01-virial-van-der-waals.md)

### First-order vs. continuous transition

$G$ is always continuous across a transition; the question is its derivatives.
**First-order:** a first derivative jumps — latent heat $L=T\Delta s$ and a
volume change $\Delta v$. **Continuous:** first derivatives match, but a second
derivative (a response function) diverges or jumps, and there is no latent heat.

*Introduced:* [5.2](lessons/05-02-phase-transitions-clausius-clapeyron.md)

### Order parameter

The quantity that is zero in the symmetric phase and nonzero in the ordered one:
magnetization for a magnet, $\rho_{\text{liq}}-\rho_{\text{gas}}$ for a fluid,
sublattice occupation for an alloy.

*Introduced:* [5.3](lessons/05-03-ising-mean-field.md)

### Mean-field approximation

Replace every neighbour by the average spin, so each spin sees one smooth
effective field $h_{\text{eff}}=h+Jzm$ and decouples — at the cost of throwing
away exactly the correlations that dominate near $T_c$.

$$m=\tanh\!\big(\beta(Jz\,m+h)\big)$$

*Introduced:* [5.3](lessons/05-03-ising-mean-field.md)

### Correlation length

The distance beyond which fluctuations stop knowing about each other. It
diverges at a continuous transition, leaving the system with **no length scale**
— which is why every critical quantity is a power law.

*Introduced:* [5.4](lessons/05-04-critical-exponents-universality.md)

### Universality class

The set of systems sharing critical exponents. Membership is fixed by only two
coarse facts — the dimension $d$ of space and the symmetry of the order
parameter. Everything microscopic washes out.

*Introduced:* [5.4](lessons/05-04-critical-exponents-universality.md)

### RG fixed point

A coupling left unchanged by coarse-graining-plus-rescaling, $K^*=R(K^*)$. Since
each step sends $\xi\to\xi/b$, a fixed point has $\xi=0$ (trivial: fully ordered
or fully disordered) or $\xi=\infty$ (**critical**).

*Introduced:* [5.5](lessons/05-05-renormalization-group.md)

### Relevant and irrelevant couplings

Linearize the flow near $K^*$ and read the eigenvalues. $\lambda_i>1$ is
**relevant** — it grows, so you must tune it to zero to be critical.
$\lambda_i<1$ is **irrelevant** — it shrinks away, and universality is precisely
the fact that microscopic differences live in irrelevant directions.

*Introduced:* [5.5](lessons/05-05-renormalization-group.md)

### Langevin equation

Newton's law for a particle in a fluid, with the $10^{21}$ collisions per second
split into a smooth drag and a memoryless random kick.

$$m\frac{dv}{dt}=-\gamma v+\xi(t),\qquad \langle\xi(t)\rangle=0,\quad \langle\xi(t)\xi(t')\rangle=2B\,\delta(t-t')$$

*Introduced:* [6.1](lessons/06-01-brownian-langevin.md)

### Fluctuation–dissipation theorem

The kicks and the drag are the same collisions, so their strengths are locked
together by the temperature. Same shape of statement as
$\operatorname{Var}(E)=k_BT^2C_V$: a fluctuation on the left, a response on the
right, temperature in between.

$$B=\gamma k_BT$$

*Introduced:* [6.1](lessons/06-01-brownian-langevin.md)

### Gibbs entropy

The entropy of *any* distribution over microstates, equal-weight or not.
Boltzmann's $k_B\ln\Omega$ is the flat special case $p_i=1/\Omega$.

$$S=-k_B\sum_i p_i\ln p_i$$

*Introduced:* [6.2](lessons/06-02-entropy-information-arrow.md)

### MaxEnt principle

Don't assume an ensemble — derive it as the least-biased distribution consistent
with what you know. Normalization alone gives microcanonical; adding a fixed
mean energy gives canonical, with $\beta$ as the energy constraint's Lagrange
multiplier.

*Introduced:* [6.2](lessons/06-02-entropy-information-arrow.md)

### Landauer's principle

Erasing one bit compresses a memory's state count from 2 to 1, so it must export
$k_B\ln2$ of entropy. This is the charge that stops Maxwell's demon from winning
a full cycle.

$$Q_{\text{erase}}\ge k_BT\ln 2$$

*Introduced:* [6.2](lessons/06-02-entropy-information-arrow.md)

## Formulas and rules

### The three ensembles

The spine of the course. Pick the row whose "held fixed" column matches your
apparatus; everything else follows.

| Ensemble | Held fixed | Weight of a microstate | Partition function | Potential generated | What fluctuates |
|---|---|---|---|---|---|
| Microcanonical | $E,V,N$ | $1/\Omega$ (flat on the shell) | $\Omega(E,V,N)$ | $S=k_B\ln\Omega$ | nothing |
| Canonical | $T,V,N$ | $e^{-\beta E_s}/Z$ | $Z=\sum_s e^{-\beta E_s}$ | $F=-k_BT\ln Z$ | energy |
| Grand canonical | $T,V,\mu$ | $e^{-\beta(E_s-\mu N_s)}/\mathcal Z$ | $\mathcal Z=\sum_s e^{-\beta(E_s-\mu N_s)}$ | $\Omega=-k_BT\ln\mathcal Z=-pV$ | energy and particle number |

The three fluctuation identities, one per ensemble that permits one:

$$\operatorname{Var}(E)=\frac{\partial^2\ln Z}{\partial\beta^2}=k_BT^2C_V,\qquad \operatorname{Var}(N)=k_BT\frac{\partial\langle N\rangle}{\partial\mu}=\frac{k_BT N^2\kappa_T}{V}$$

Both give relative spreads of order $N^{-1/2}$, which is exactly why the three
rows agree in the thermodynamic limit. A variance cannot be negative, so these
identities *prove* $C_V\ge0$ and $\kappa_T\ge0$.

*From* [1.3](lessons/01-03-entropy-microcanonical.md), [3.1](lessons/03-01-canonical-ensemble-boltzmann-factor.md), [3.3](lessons/03-03-fluctuations-ensemble-equivalence.md), [3.5](lessons/03-05-grand-canonical-ensemble.md)

### The three statistics

The second spine. One formula, one sign, plus the corner where both collapse to
the classical answer.

| Statistics | Allowed $n_k$ | Single-mode $\mathcal Z_k$ | Mean occupation $\langle n(\epsilon)\rangle$ | Where it rules |
|---|---|---|---|---|
| Maxwell–Boltzmann | labelled particles, any number | — | $z\,e^{-\beta\epsilon}=e^{-\beta(\epsilon-\mu)}$ | dilute / hot, $n\lambda^3\ll1$ |
| Bose–Einstein | $0,1,2,\dots$ | $\big(1-e^{-\beta(\epsilon-\mu)}\big)^{-1}$ | $\dfrac{1}{e^{\beta(\epsilon-\mu)}-1}$ | photons, He-4, cold atoms |
| Fermi–Dirac | $0$ or $1$ | $1+e^{-\beta(\epsilon-\mu)}$ | $\dfrac{1}{e^{\beta(\epsilon-\mu)}+1}$ | electrons in metals and white dwarfs |

Unified: $\langle n(\epsilon)\rangle=\big(e^{\beta(\epsilon-\mu)}\mp1\big)^{-1}$, upper sign Bose, lower sign Fermi.

**The shared limit.** When $e^{\beta(\epsilon-\mu)}\gg1$ — equivalently $z\ll1$,
equivalently $n\lambda^3\ll1$, equivalently *low occupation* — the $\mp1$ is
negligible and both become $z\,e^{-\beta\epsilon}$. Expanding one order further,
$\langle n\rangle\approx ze^{-\beta\epsilon}\big(1\pm ze^{-\beta\epsilon}\big)$:
bosons approach the classical curve from above (bunching), fermions from below
(exclusion). "Classical" means dilute, not merely hot — a dense electron gas
stays degenerate at any lab temperature.

Two edges worth having cold: Fermi–Dirac is pinned at $\tfrac12$ when
$\epsilon=\mu$ and obeys particle–hole symmetry
$\langle n(\mu+\delta)\rangle+\langle n(\mu-\delta)\rangle=1$; Bose–Einstein
diverges as $\epsilon\to\mu^+$, which forces $\mu$ below every level and is the
seed of condensation.

*From* [4.1](lessons/04-01-quantum-counting-occupation-numbers.md), [4.2](lessons/04-02-bose-einstein-fermi-dirac.md)

### Critical exponents

The third spine. Definitions on the left, values on the right — and only **two**
of them are ever independent.

| Exponent | Defined by | Mean field | 2D Ising (exact) | 3D Ising (measured) |
|---|---|---|---|---|
| $\beta_{\text{exp}}$ | $m\sim(-t)^{\beta_{\text{exp}}}$, $t<0$ | $1/2$ | $1/8$ | $0.33$ |
| $\gamma$ | $\chi\sim\lvert t\rvert^{-\gamma}$ | $1$ | $7/4$ | $1.24$ |
| $\alpha$ | $C\sim\lvert t\rvert^{-\alpha}$ | $0$ (finite jump) | $0$ (logarithmic) | $0.11$ |
| $\nu$ | $\xi\sim\lvert t\rvert^{-\nu}$ | $1/2$ | $1$ | $0.63$ |
| $\delta$ | $m\sim h^{1/\delta}$ at $t=0$ | $3$ | $15$ | $4.8$ |

Scaling hypothesis and the two relations it forces:

$$f_s(t,h)=\lvert t\rvert^{2-\alpha}\,\Phi\!\left(\frac{h}{\lvert t\rvert^{\Delta}}\right),\qquad \Delta=\beta_{\text{exp}}\delta$$

$$\text{Rushbrooke: } \alpha+2\beta_{\text{exp}}+\gamma=2,\qquad \text{Widom: } \gamma=\beta_{\text{exp}}(\delta-1)$$

Both hold in *every* universality class, mean-field included — so passing them is
no evidence a theory is right. Mean field is exactly correct for $d\ge4$ and
quantitatively wrong below it. $T_c$ and the power-law amplitudes are **not**
universal; only exponents, the scaling function, and certain amplitude ratios
are.

*From* [5.3](lessons/05-03-ising-mean-field.md), [5.4](lessons/05-04-critical-exponents-universality.md)

### Reading thermodynamics off $\ln Z$

$$\langle E\rangle=-\frac{\partial\ln Z}{\partial\beta},\qquad F=-k_BT\ln Z,\qquad S=k_B\big(\ln Z+\beta\langle E\rangle\big),\qquad p=k_BT\frac{\partial\ln Z}{\partial V}$$

Conversion between the two derivative variables — the single most common slip:

$$\frac{\partial}{\partial\beta}=-k_BT^2\frac{\partial}{\partial T}$$

**Factorization.** Independent parts multiply their $Z$'s, so $\ln Z$ adds:
$Z=Z_1^{\,N}$ for distinguishable subsystems, $Z=Z_1^{\,N}/N!$ for
indistinguishable classical particles. Interactions destroy this, which is the
whole reason Module 5 is hard. Classical continuum form:

$$Z=\frac{1}{h^{3N}N!}\int e^{-\beta H(q,p)}\,d^{3N}q\,d^{3N}p$$

Grand-canonical counterparts: $\langle N\rangle=k_BT\,\partial_\mu\ln\mathcal Z=-\partial_\mu\Omega$
and $p=-\Omega/V$; take the energy derivative at **fixed fugacity** $z$, since
$z=e^{\beta\mu}$ hides a $\beta$.

*From* [3.2](lessons/03-02-partition-function.md), [3.5](lessons/03-05-grand-canonical-ensemble.md)

### The microcanonical route, worked once

$$\frac1T=\left(\frac{\partial S}{\partial E}\right)_{V,N},\qquad p=T\left(\frac{\partial S}{\partial V}\right)_{E,N},\qquad \mu=-T\left(\frac{\partial S}{\partial N}\right)_{E,V}$$

$$dS=\frac1T dE+\frac pT dV-\frac{\mu}{T}dN \quad\Longleftrightarrow\quad dE=T\,dS-p\,dV+\mu\,dN$$

Ideal monatomic gas: $\Omega\propto V^NE^{3N/2}/(h^{3N}N!)$, giving the
**Sackur–Tetrode entropy** and both equations of state from two derivatives.

$$S=Nk_B\left[\ln\!\left(\frac{V}{N}\left(\frac{4\pi mE}{3Nh^2}\right)^{3/2}\right)+\frac52\right]=Nk_B\left[\ln\frac{V}{N\lambda_{\text{th}}^3}+\frac52\right]$$

$$E=\tfrac32Nk_BT,\qquad pV=Nk_BT$$

Useful shape to recognize: $\Omega\propto E^{\alpha N}$ gives $\beta=\alpha N/E$,
i.e. $E=\alpha Nk_BT$ — energy linear in $T$ with $\alpha N$ counting the
energy-storage modes.

*From* [1.4](lessons/01-04-temperature-pressure-chemical-potential.md), [1.5](lessons/01-05-ideal-gas-sackur-tetrode.md)

### Equipartition catalog

Count the quadratic terms $f$ per molecule; then $\langle E\rangle=\tfrac f2k_BT$
and $C_V=\tfrac f2 Nk_B$.

| System | $f$ | $\langle E\rangle$ per particle | $C_V$ |
|---|---|---|---|
| Monatomic gas | $3$ translational | $\tfrac32k_BT$ | $\tfrac32Nk_B$ |
| Diatomic gas, mid-$T$ | $3+2$ rotational | $\tfrac52k_BT$ | $\tfrac52Nk_B$ |
| Diatomic gas, high-$T$ | $+2$ vibrational $=7$ | $\tfrac72k_BT$ | $\tfrac72Nk_B$ |
| Classical solid | $3$ kinetic $+3$ potential | $3k_BT$ | $3Nk_B$ (Dulong–Petit, $3R$ per mole) |
| 1D harmonic oscillator | $2$ | $k_BT$ | $k_B$ |

A vibrational mode counts **twice** (kinetic and potential). Each plateau ends
at a freeze-out riser where $k_BT$ drops below that mode's level spacing; the
exact quantum oscillator gives $\langle E\rangle=\hbar\omega/(e^{\beta\hbar\omega}-1)$,
which returns $k_BT$ when $k_BT\gg\hbar\omega$ and dies exponentially below.

*From* [3.4](lessons/03-04-equipartition-theorem.md)

### Density of states and the quantum gas results

| Gas | Dispersion | Density of states |
|---|---|---|
| Nonrelativistic, spin degeneracy $g_s$ | $\epsilon=p^2/2m$ | $g(\epsilon)=\dfrac{g_sV}{4\pi^2}\left(\dfrac{2m}{\hbar^2}\right)^{3/2}\epsilon^{1/2}$ |
| Spin-$\tfrac12$ fermions ($g_s=2$) | $\epsilon=p^2/2m$ | $g(\epsilon)=\dfrac{V}{2\pi^2}\left(\dfrac{2m}{\hbar^2}\right)^{3/2}\epsilon^{1/2}$ |
| Photons (two polarizations) | $\omega=ck$ | $g(\omega)=\dfrac{V}{\pi^2c^3}\omega^2$ |

**Photon gas** ($\mu=0$, because photon number is not conserved):

$$u(\omega)=\frac{\hbar}{\pi^2c^3}\frac{\omega^3}{e^{\beta\hbar\omega}-1},\qquad \frac UV=aT^4,\quad a=\frac{\pi^2k_B^4}{15\hbar^3c^3},\qquad P=\frac{U}{3V}$$

Limits: $\hbar\omega\ll k_BT$ gives Rayleigh–Jeans $u\approx k_BT\omega^2/\pi^2c^3$
(classical, divergent integral); $\hbar\omega\gg k_BT$ gives the Wien tail
$u\propto\omega^3e^{-\beta\hbar\omega}$. Wien displacement: the peak of $u(\omega)$
sits at $\hbar\omega_{\max}/k_BT\approx2.821$, the peak of $u(\lambda)$ at
$4.965$; in wavelength form $\lambda_{\max}=b_W/T$ with $b_W=2.898\times10^{-3}$ m·K.

**Fermi gas at $T=0$:**

$$E_F=\frac{\hbar^2}{2m}\big(3\pi^2n\big)^{2/3},\quad p_F=\hbar\big(3\pi^2n\big)^{1/3},\quad E=\tfrac35NE_F,\quad P=\tfrac25nE_F\propto n^{5/3}$$

Small $T$: $C_V=\tfrac{\pi^2}{2}Nk_B\,T/T_F\propto T$ — only the sliver of width
$k_BT$ at the surface can move. Ultrarelativistic ($p_Fc\gtrsim mc^2$, so
$\epsilon=pc$): $E=\tfrac34Np_Fc$ and $P=\tfrac14np_Fc\propto n^{4/3}$, the
softening that produces the Chandrasekhar mass. Generic pressure-energy
relations: $P=\tfrac23E/V$ nonrelativistic, $P=\tfrac13E/V$ ultrarelativistic.

**Bose gas below $T_c$** ($\mu$ pinned at $0^-$; the $\epsilon^{1/2}$ integral
silently misses the ground state, so add $N_0$ by hand, $N=N_0+N_{\text{exc}}$):

$$k_BT_c=\frac{2\pi\hbar^2}{m}\left(\frac{n}{\zeta(3/2)}\right)^{2/3}\ \Longleftrightarrow\ n\lambda_c^3=\zeta(3/2)\approx2.612,\qquad \frac{N_0}{N}=1-\left(\frac{T}{T_c}\right)^{3/2}$$

*From* [4.2](lessons/04-02-bose-einstein-fermi-dirac.md), [4.3](lessons/04-03-photon-gas-blackbody.md), [4.4](lessons/04-04-ideal-fermi-gas.md), [4.5](lessons/04-05-ideal-bose-gas-condensation.md)

### Interacting gases, coexistence, and the mean-field magnet

$$\frac{p}{k_BT}=n+B_2(T)n^2+B_3(T)n^3+\cdots,\qquad B_2^{\text{vdW}}(T)=b-\frac{a}{k_BT},\qquad T_{\text{Boyle}}=\frac{a}{k_Bb}$$

$$\left(p+an^2\right)\left(\frac1n-b\right)=k_BT,\qquad p=\frac{k_BT}{v-b}-\frac{a}{v^2}\ \ (v=V/N)$$

Critical point from $(\partial p/\partial v)_T=(\partial^2p/\partial v^2)_T=0$:

$$v_c=3b,\qquad k_BT_c=\frac{8a}{27b},\qquad p_c=\frac{a}{27b^2},\qquad \frac{p_cv_c}{k_BT_c}=\frac38$$

Reduced variables $\tilde p=p/p_c$, $\tilde v=v/v_c$, $\tilde T=T/T_c$ erase $a$
and $b$ entirely — the **law of corresponding states**:
$\left(\tilde p+3/\tilde v^2\right)(3\tilde v-1)=8\tilde T$. Hard spheres of
diameter $\sigma$ give $B_2=\tfrac{2\pi}{3}\sigma^3=b$, four times a sphere's
own volume.

**Clausius–Clapeyron** (coexistence is $\mu_1=\mu_2$; differentiate the
*equality* along the curve):

$$\frac{dp}{dT}=\frac{\Delta s}{\Delta v}=\frac{L}{T\,\Delta v},\qquad \text{ideal vapor, } v_{\text{liq}}\ll v_{\text{gas}}:\quad p(T)=p_0\,e^{-L/k_BT}$$

**Mean-field Ising** ($H=-J\sum_{\langle ij\rangle}s_is_j-h\sum_i s_i$):

$$m=\tanh\!\big(\beta(Jzm+h)\big),\qquad k_BT_c=Jz,\qquad m\approx\sqrt3\left(\frac{T_c-T}{T_c}\right)^{1/2},\qquad \chi=\frac{1}{k_B(T-T_c)}$$

Mean field **overestimates** $T_c$ (exact 2D square lattice: $k_BT_c\approx2.27J$
versus $4J$) and invents a transition in 1D, where none exists.

**RG:** $K'=R(K)$, $\xi(K')=\xi(K)/b$, and near the fixed point
$\delta K'=\lambda\,\delta K$ with

$$\nu=\frac{1}{y_t}=\frac{\ln b}{\ln\lambda_t},\qquad \text{1D Ising decimation: } K'=\tfrac12\ln\cosh 2K$$

The 1D recursion has no fixed point at finite $K$ — hence no transition at any
positive temperature.

*From* [5.1](lessons/05-01-virial-van-der-waals.md), [5.2](lessons/05-02-phase-transitions-clausius-clapeyron.md), [5.3](lessons/05-03-ising-mean-field.md), [5.5](lessons/05-05-renormalization-group.md)

### Brownian motion, information, and entropy in bits

$$\langle v(0)v(t)\rangle=\frac{k_BT}{m}e^{-\gamma t/m},\qquad \langle\Delta x^2\rangle=2D\big[t-\tau(1-e^{-t/\tau})\big]\xrightarrow[t\gg\tau]{}2Dt$$

$$\tau=\frac m\gamma,\qquad D=\frac{k_BT}{\gamma},\qquad \gamma=6\pi\eta a\ \text{(sphere of radius } a\text{)}$$

Short times ($t\ll\tau$) are **ballistic**, $\langle\Delta x^2\rangle\approx\langle v^2\rangle t^2$;
long times are **diffusive**, so typical displacement grows like $\sqrt t$.

$$S=k_B\ln2\cdot H,\qquad H=-\sum_i p_i\log_2 p_i\ \text{[bits]},\qquad 1\ \text{bit}=k_B\ln2,\quad 1\ \text{nat}=k_B$$

A Szilard engine converts one bit into $k_BT\ln2$ of work; Landauer charges
$k_BT\ln2$ to erase it, so the net over a cycle is at most zero.

*From* [6.1](lessons/06-01-brownian-langevin.md), [6.2](lessons/06-02-entropy-information-arrow.md)

### The standard integrals and constants this course leans on

Used constantly, stated in passing or not at all — collected here on purpose.

| Tool | Value |
|---|---|
| Stirling | $\ln m!\approx m\ln m-m$ (and $\ln\Gamma(x+1)\approx x\ln x-x$) |
| Gaussian | $\displaystyle\int_{-\infty}^{\infty}e^{-\alpha x^2}dx=\sqrt{\pi/\alpha}$, $\displaystyle\int_{-\infty}^{\infty}x^2e^{-\alpha x^2}dx=\tfrac12\sqrt{\pi}\,\alpha^{-3/2}$ |
| Momentum integral | $\displaystyle\int_{-\infty}^{\infty}e^{-\beta p^2/2m}dp=\sqrt{2\pi mk_BT}$ |
| Volume of an $n$-ball | $V_n(R)=\dfrac{\pi^{n/2}}{\Gamma(n/2+1)}R^{\,n}$ |
| Bose integrals | $\displaystyle\int_0^\infty\frac{x^{s-1}}{e^x-1}dx=\Gamma(s)\zeta(s)$; $s=4$: $\pi^4/15$; $s=\tfrac32$: $\tfrac{\sqrt\pi}{2}\zeta(3/2)\approx2.315$ |
| Geometric series | $\displaystyle\sum_{n\ge0}x^n=\frac1{1-x}$, $\displaystyle\sum_{n\ge0}nx^n=\frac{x}{(1-x)^2}$ ($\lvert x\rvert<1$) |
| Euler's homogeneous-function theorem | $U$ extensive $\Rightarrow U=TS-pV+\mu N$, hence $G=\mu N$, $\Omega=-pV$, and Gibbs–Duhem $N\,d\mu=-S\,dT+V\,dp$ |
| Cyclic (triple-product) rule | $\left(\frac{\partial p}{\partial T}\right)_V\left(\frac{\partial T}{\partial V}\right)_p\left(\frac{\partial V}{\partial p}\right)_T=-1$, so $\left(\frac{\partial p}{\partial T}\right)_V=\alpha/\kappa_T$ |
| Constants | $k_B=1.381\times10^{-23}$ J/K; $h=6.626\times10^{-34}$ J·s; $\hbar=1.055\times10^{-34}$ J·s; $R=8.314$ J/(mol·K); $N_A=6.022\times10^{23}$; $k_BT\approx0.025$ eV at 300 K |

*Used throughout, most visibly in* [1.5](lessons/01-05-ideal-gas-sackur-tetrode.md), [2.4](lessons/02-04-maxwell-relations-stability.md), [3.2](lessons/03-02-partition-function.md), [3.4](lessons/03-04-equipartition-theorem.md), [4.3](lessons/04-03-photon-gas-blackbody.md), [4.5](lessons/04-05-ideal-bose-gas-condensation.md)

## Assumed, not taught here

This is a Tier 2 course; it borrows freely. Every row points at where the thing
is actually built.

| Fact | Where it's taught |
|---|---|
| **All of macroscopic thermodynamics** — laws, engines, potentials, Maxwell relations, phase lines. Module 2 re-derives it fast from the statistical side; the tables live on the other card | [classical thermodynamics reference card](../thermodynamics-physics/reference.md) |
| Carnot cycle, efficiency bound, COP as worked machinery | [thermodynamics-physics 2.1](../thermodynamics-physics/lessons/02-01-heat-engines-carnot-cycle.md), [2.2](../thermodynamics-physics/lessons/02-02-carnot-efficiency-second-law.md) |
| The four potentials and the four Maxwell relations, in full | [thermodynamics-physics 3.1](../thermodynamics-physics/lessons/03-01-thermodynamic-potentials.md), [3.2](../thermodynamics-physics/lessons/03-02-maxwell-relations.md) |
| Phase diagrams, latent heat, Clausius–Clapeyron worked on real substances | [thermodynamics-physics 3.3](../thermodynamics-physics/lessons/03-03-phase-transitions-clausius-clapeyron.md) |
| Third law, and the chemical potential of an ideal gas | [thermodynamics-physics 3.4](../thermodynamics-physics/lessons/03-04-third-law-chemical-potential.md) |
| Phase space, Hamiltonian flow, Liouville's theorem — the stage the whole course stands on | [analytical-mechanics 3.2](../analytical-mechanics/lessons/03-02-phase-space-liouville.md) |
| The Legendre transform as a general operation (it builds $F,H,G,\Omega$) | [analytical-mechanics 3.1](../analytical-mechanics/lessons/03-01-legendre-hamiltons-equations.md) |
| Euler's homogeneous-function theorem (the Euler relation and $G=\mu N$) | [analytical-mechanics 2.3](../analytical-mechanics/lessons/02-03-energy-and-hamiltonian.md) |
| Law of large numbers — the $1/\sqrt N$ that makes thermodynamics sharp | [probability-theory 4.2](../probability-theory/lessons/04-02-laws-of-large-numbers.md) |
| Central limit theorem — the *Gaussian shape* of energy and multiplicity peaks | [probability-theory 4.5](../probability-theory/lessons/04-05-central-limit-theorem.md) |
| Identical particles and exchange symmetry — why $n_k\in\{0,1\}$ for fermions | [quantum-mechanics 5.1](../quantum-mechanics/lessons/05-01-identical-particles.md) |
| Harmonic-oscillator levels $E_n=n\hbar\omega$ (Einstein solid, phonons, photons) | [quantum-mechanics 3.1](../quantum-mechanics/lessons/03-01-harmonic-oscillator-analytic.md) |
| Rigid-rotor levels $E_J=\tfrac{\hbar^2}{2I}J(J+1)$ (rotational freeze-out) | [quantum-mechanics 4.3](../quantum-mechanics/lessons/04-03-spherical-harmonics-rigid-rotor.md) |
| The ultraviolet catastrophe as the historical entry to quantum theory | [quantum-mechanics 1.1](../quantum-mechanics/lessons/01-01-why-quantum.md) |
| Lagrange multipliers (every MaxEnt derivation, and the equal-slope equilibrium argument) | [calc-refresher 4.2](../calc-refresher/lessons/04-02-multivariable-optimization-lagrange.md) |
| The Gaussian integral $\int e^{-x^2}dx=\sqrt\pi$ — every equipartition and ideal-gas $Z$ | [calc-refresher 4.3](../calc-refresher/lessons/04-03-multiple-integrals.md) |
| Equality of mixed partials — the entire content of a Maxwell relation | [calc-refresher 5.1](../calc-refresher/lessons/05-01-vector-fields-div-curl.md) |
| Stokes' drag law $\gamma=6\pi\eta a$ for a sphere | [biophysics 1.4](../biophysics/lessons/01-04-einstein-relation.md) |
| Fixed points, linearization, eigenvalue stability — the RG flow is this, verbatim | [ode-refresher 3.2](../ode-refresher/lessons/03-02-phase-portraits-stability.md) |

Stirling's approximation, the $\zeta$-function integrals, and the volume of an
$n$-ball are used without derivation anywhere in the library; they are tabulated
above and that table is their only home.

## Pitfalls

### Counting and entropy

- The postulate says **micro**states are equally likely, never macrostates — macrostates inherit wildly unequal probabilities precisely because they are backed by unequal counts. *([1.2](lessons/01-02-microstates-macrostates-postulate.md))*
- A lopsided macrostate is not forbidden, just rare: "all spins up" is a legal microstate with exactly the same probability as any other. The second law is overwhelming probability, not prohibition. *([1.2](lessons/01-02-microstates-macrostates-postulate.md), [1.3](lessons/01-03-entropy-microcanonical.md))*
- Entropy belongs to a **macrostate**. "The entropy of this exact configuration" is ill-posed: one microstate means $\Omega=1$ and $S=0$, always. *([1.3](lessons/01-03-entropy-microcanonical.md))*
- The $h^{3N}$ is not a bolted-on quantum correction; without it $\Omega$ carries units and $\ln\Omega$ depends on whether you measure action in joule-seconds. *([1.2](lessons/01-02-microstates-macrostates-postulate.md))*
- The $N!$ is not bookkeeping — drop it and entropy stops being extensive and the Gibbs paradox returns. It is invisible in $\langle E\rangle$ and $p$ but decisive in $F$, $S$, and $\mu$. *([1.5](lessons/01-05-ideal-gas-sackur-tetrode.md), [3.2](lessons/03-02-partition-function.md))*
- The shell width $\delta E$ and any additive constant shift $S$ by $O(\ln N)$ against an $O(N)$ bulk — invisible in every difference and derivative thermodynamics uses. *([1.3](lessons/01-03-entropy-microcanonical.md))*
- Liouville does not forbid entropy growth: the **fine-grained** volume is conserved, the **coarse-grained** one grows as the blob filaments. Two different volumes. *([1.1](lessons/01-01-mechanics-to-statistics.md), [6.2](lessons/06-02-entropy-information-arrow.md))*
- Ergodicity is an assumption, not a theorem — well motivated, unproven for realistic systems, and false for some. Don't cite it as established. *([1.1](lessons/01-01-mechanics-to-statistics.md))*

### Temperature, heat, and signs

- Temperature is $\partial S/\partial E$, a *slope*, not a *height*: a small system can hold less energy than a big one and still be hotter. A single atom has no temperature at all. *([1.4](lessons/01-04-temperature-pressure-chemical-potential.md))*
- Keep the minus in $\mu=-T(\partial S/\partial N)$; it is what makes particles flow from high $\mu$ to low $\mu$, in parallel with heat flowing down a temperature gradient. *([1.4](lessons/01-04-temperature-pressure-chemical-potential.md))*
- Negative temperature requires a **bounded** energy spectrum, and it is *hotter* than $T=+\infty$; the hotness ordering runs $+0\to+\infty\equiv-\infty\to-0$. *([1.4](lessons/01-04-temperature-pressure-chemical-potential.md))*
- There is no state function $Q$ or $W$ — hence $\delta$, not $d$. A gas contains internal energy, never "an amount of heat." *([2.1](lessons/02-01-laws-of-thermodynamics.md))*
- $\delta Q=T\,dS$ holds **only** for reversible processes; otherwise $dS>\delta Q/T$. To get $\Delta S$ for an irreversible process, invent a reversible path between the same endpoints. *([2.1](lessons/02-01-laws-of-thermodynamics.md), [2.2](lessons/02-02-entropy-engines-carnot.md))*
- This course writes work done **on** the gas, $\delta W=-p\,dV$. Importing a by-the-gas formula without flipping the sign is the classic mid-problem error. *([2.1](lessons/02-01-laws-of-thermodynamics.md))*
- The second law forbids entropy decrease only for an **isolated** system — always ask "entropy of *what*." *([2.1](lessons/02-01-laws-of-thermodynamics.md))*
- Efficiency $\eta=W/Q_h$ and COP $=Q_c/W$ have different denominators; COP routinely exceeds 1, efficiency never can. *([2.2](lessons/02-02-entropy-engines-carnot.md))*
- Adiabatic means $\delta Q=0$, not constant $T$. On a $T$–$S$ plot: isotherms horizontal, adiabats vertical. Swapping them is the standard Carnot mistake. *([2.2](lessons/02-02-entropy-engines-carnot.md))*

### Potentials and response functions

- $F=U-TS$ is a **subtraction**, not "$U$ with $S$ eliminated" — plain substitution loses information and $dF$ won't collapse. *([2.3](lessons/02-03-thermodynamic-potentials-legendre.md))*
- Which quantity is extremized depends on what you hold fixed: isolated maximizes $S$, fixed $T,V$ minimizes $F$, fixed $T,p$ minimizes $G$, fixed $S,p$ minimizes $H$. Use the wrong one and you predict the wrong equilibrium. *([2.3](lessons/02-03-thermodynamic-potentials-legendre.md))*
- $\Omega=-pV$ is a consequence of extensivity for a single component, not the definition ($\Omega\equiv F-\mu N$). *([2.3](lessons/02-03-thermodynamic-potentials-legendre.md))*
- The $G$-Maxwell relation carries a minus sign that the $F$-one does not; rebuild it from the differential's coefficients rather than recalling it. *([2.4](lessons/02-04-maxwell-relations-stability.md))*
- $(\partial S/\partial V)_T$ and $(\partial S/\partial V)_p$ are different quantities. In thermodynamics an unsubscripted partial derivative is meaningless. *([2.4](lessons/02-04-maxwell-relations-stability.md))*
- Stability ($C_V\ge0$, $\kappa_T\ge0$) is load-bearing, not fussy: its failure is the mathematical fingerprint of a phase transition. *([2.4](lessons/02-04-maxwell-relations-stability.md), [5.1](lessons/05-01-virial-van-der-waals.md))*

### Ensembles and partition functions

- Expand $\ln\Omega_{\text{bath}}$, never $\Omega_{\text{bath}}$ — the count is monstrously steep, its log nearly linear. That is *why* entropy is the right variable. *([3.1](lessons/03-01-canonical-ensemble-boltzmann-factor.md))*
- Higher energy always means a less likely **microstate**, but not a less likely energy **level**: $P(E)=g(E)e^{-\beta E}$ peaks where the rising degeneracy meets the falling exponential. *([3.1](lessons/03-01-canonical-ensemble-boltzmann-factor.md), [3.3](lessons/03-03-fluctuations-ensemble-equivalence.md))*
- $\beta$ is the **bath's** inverse temperature; the system has no sharp energy of its own, it inherits $T$. *([3.1](lessons/03-01-canonical-ensemble-boltzmann-factor.md))*
- All the physics of $Z$ lives in its dependence on $\beta$ and $V$, not in its value. And watch the variable: $\langle E\rangle=-\partial_\beta\ln Z$ but $C_V=\partial_T\langle E\rangle$. *([3.2](lessons/03-02-partition-function.md))*
- $Z=Z_1^{\,N}$ only for **non-interacting** subsystems; interactions break the additivity of energy and the factorization with it. *([3.2](lessons/03-02-partition-function.md))*
- Bigger systems are *sharper*, not noisier: absolute fluctuations grow like $\sqrt N$, relative ones shrink like $1/\sqrt N$. *([3.3](lessons/03-03-fluctuations-ensemble-equivalence.md))*
- Ensemble equivalence is a theorem about short-range systems away from criticality, not a law of nature. *([3.3](lessons/03-03-fluctuations-ensemble-equivalence.md))*
- Only **quadratic** terms get $\tfrac12k_BT$; a term in $\lvert x\rvert$ or $x^4$ does not, and the clean result is special to Gaussians. *([3.4](lessons/03-04-equipartition-theorem.md))*
- Equipartition is not wrong, it is the **high-temperature limit**: trust it on a plateau, distrust it near a riser. *([3.4](lessons/03-04-equipartition-theorem.md))*
- $\Omega$ means two unrelated things in this course — multiplicity in Module 1, grand potential from 2.3 on. Read it from context. *([3.5](lessons/03-05-grand-canonical-ensemble.md))*
- Occupation depends on $\epsilon-\mu$, never on $\epsilon$ or $\mu$ alone; $\mu$ is a price the reservoir sets, not a particle count. *([3.5](lessons/03-05-grand-canonical-ensemble.md))*
- Take the grand-ensemble energy derivative at fixed **fugacity**; differentiating at fixed $\mu$ instead returns $\langle E-\mu N\rangle$. *([3.5](lessons/03-05-grand-canonical-ensemble.md))*

### Quantum gases

- $1/N!$ is only the dilute *shadow* of indistinguishability — it assumes every particle occupies a different mode, and over-corrects the instant two share one. *([4.1](lessons/04-01-quantum-counting-occupation-numbers.md))*
- The factorization $\mathcal Z=\prod_k\mathcal Z_k$ needs the grand ensemble. Fixing $N$ imposes $\sum_k n_k=N$, which chains every mode to every other. *([4.1](lessons/04-01-quantum-counting-occupation-numbers.md))*
- A "mode" is a single-particle *state*, not a particle; $n_k$ counts particles in slot $k$. Confusing the two smuggles the labels back in. *([4.1](lessons/04-01-quantum-counting-occupation-numbers.md))*
- The classical limit is **low occupation** ($z\ll1$), not simply high temperature — a dense gas can stay degenerate while hot. *([4.2](lessons/04-02-bose-einstein-fermi-dirac.md))*
- Fermi–Dirac can never diverge: $\langle n\rangle\in[0,1]$ always, because the $+1$ is what enforces "at most one." Bose–Einstein *can*, and does, as $\epsilon\to\mu^+$. *([4.2](lessons/04-02-bose-einstein-fermi-dirac.md))*
- The peak of $u(\omega)$ and the peak of $u(\lambda)$ are different points — the Jacobian reshapes the curve. Always say which variable you peaked in. *([4.3](lessons/04-03-photon-gas-blackbody.md))*
- $\mu=0$ for photons is physics (number not conserved), not convention; for massive bosons $\mu=0$ is a *consequence* that only holds below $T_c$. *([4.3](lessons/04-03-photon-gas-blackbody.md), [4.5](lessons/04-05-ideal-bose-gas-condensation.md))*
- Degeneracy pressure needs no temperature and no collisions — it survives at $T=0$ and is pure Pauli exclusion. And "degenerate" here means $T\ll T_F$, not degenerate *levels*. *([4.4](lessons/04-04-ideal-fermi-gas.md))*
- Don't hand a metal's electrons the equipartition $\tfrac32Nk_B$: Pauli locks all but a $T/T_F$ sliver, leaving $C_V$ linear in $T$ and tiny. *([4.4](lessons/04-04-ideal-fermi-gas.md))*
- The $\epsilon^{1/2}$ density of states vanishes at $\epsilon=0$ and therefore *misses the condensate*. Below $T_c$ you must restore $N_0$ by hand. *([4.5](lessons/04-05-ideal-bose-gas-condensation.md))*
- BEC needs no attraction; the pileup is forced by conserved $N$ plus Bose statistics in an ideal gas. *([4.5](lessons/04-05-ideal-bose-gas-condensation.md))*

### Interactions, transitions, and criticality

- A large $B_2$ means net *repulsion*, not strong interaction: it is a difference of a positive and a negative piece and vanishes at the Boyle temperature. *([5.1](lessons/05-01-virial-van-der-waals.md))*
- The van der Waals attraction correction is $an^2$, not $an$ — it scales with pairs per volume. *([5.1](lessons/05-01-virial-van-der-waals.md))*
- Only the middle branch of the loop (positive $(\partial p/\partial V)_T$) is forbidden; the outer arcs are metastable and physically real — superheated liquid, supercooled vapor. *([5.1](lessons/05-01-virial-van-der-waals.md))*
- $G$ does **not** jump at a transition — $\mu_1=\mu_2$ is the whole point. It is the slope (first-order) or the curvature (continuous) that misbehaves. *([5.2](lessons/05-02-phase-transitions-clausius-clapeyron.md))*
- Latent heat is not a temperature rise: heat poured in during a first-order transition converts phase at constant $T$. *([5.2](lessons/05-02-phase-transitions-clausius-clapeyron.md))*
- Don't apply Clausius–Clapeyron *at* the critical point: $\Delta s$ and $\Delta v$ both vanish and $dp/dT$ is indeterminate. *([5.2](lessons/05-02-phase-transitions-clausius-clapeyron.md))*
- Mean field is not exact at large $N$ — it drops the correlations that dominate at $T_c$, so it inflates $T_c$ and can invent transitions that do not exist (1D Ising). *([5.3](lessons/05-03-ising-mean-field.md), [5.5](lessons/05-05-renormalization-group.md))*
- The $m=0$ root of the self-consistency equation always exists and is *unstable* below $T_c$; stability comes from minimizing the free energy, not from the fixed-point equation. *([5.3](lessons/05-03-ising-mean-field.md))*
- $\alpha=0$ means "no power-law divergence," not "no singularity" — it covers both a finite jump (mean field) and a logarithm (2D Ising). *([5.4](lessons/05-04-critical-exponents-universality.md))*
- Universality covers exponents, the scaling function, and amplitude *ratios* — never $T_c$ or the amplitudes themselves. Same log–log slope, different intercept. *([5.4](lessons/05-04-critical-exponents-universality.md))*
- "Irrelevant" means it does not change the **exponents**; such a coupling can still shift $T_c$ and matter enormously away from criticality. *([5.5](lessons/05-05-renormalization-group.md))*
- A fixed point means the *couplings* are unchanged under coarse-graining — scale invariance, not a system that stopped evolving. Relevant is $\lambda>1$ (flows away), irrelevant is $\lambda<1$ (flows in). *([5.5](lessons/05-05-renormalization-group.md))*

### Noise, information, and the arrow

- Drag and random force are not independent knobs — same collisions, locked by $B=\gamma k_BT$. A viscous fluid producing no noise would violate equipartition. *([6.1](lessons/06-01-brownian-langevin.md))*
- The $\delta$-function in the noise correlator says the correlation *time* is zero, not that the force is infinite; white noise is only ever meaningful inside an integral. *([6.1](lessons/06-01-brownian-langevin.md))*
- Diffusion is slower than "distance = speed × time": $\langle x^2\rangle\propto t$, so typical displacement grows like $\sqrt t$. The $t^2$ law is only the pre-collision ballistic regime. *([6.1](lessons/06-01-brownian-langevin.md))*
- Gibbs and Boltzmann entropy are the same quantity; use Gibbs whenever the microstates are not equally likely (anything canonical or grand canonical). *([6.2](lessons/06-02-entropy-information-arrow.md))*
- Prefer "missing information about the microstate given the macrostate" to "disorder" — the first is computable, the second misleads. *([6.2](lessons/06-02-entropy-information-arrow.md))*
- The arrow of time does not come from irreversible microscopic laws (there are none). It comes from coarse-graining plus the universe's low-entropy start. *([6.2](lessons/06-02-entropy-information-arrow.md))*
