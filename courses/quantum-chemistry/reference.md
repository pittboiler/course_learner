# Quantum Chemistry · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Quantum chemistry is one equation, $\hat H\psi = E\psi$, attacked by two engines
(**variation** and **perturbation**) after two great simplifications
(**Born–Oppenheimer**, then **one Slater determinant**). Everything below is the
bookkeeping that follows: the integrals, the matrices, the method ladder that
buys back what the determinant threw away, and the rules for reading a number off
a real calculation. The underlying quantum mechanics lives in the
[quantum-mechanics card](../quantum-mechanics/reference.md); the chemistry
vocabulary lives in the [general-chemistry card](../general-chemistry/reference.md).

## Notation

Three symbols are overloaded on purpose, because the field overloads them: $\alpha$
is a spin function, the Coulomb integral, *and* a Gaussian exponent; $\mu$ is a
basis-function index, a reduced mass, a dipole, *and* the chemical potential;
$\beta$ is a spin function *and* the resonance integral. Context — and which
lesson you're in — disambiguates.

| Symbol | Means | First used |
|---|---|---|
| $\langle\phi\vert\hat A\vert\psi\rangle$ | matrix element — the integral $\int\phi^{*}\hat A\psi\,d\tau$, written short | [1.1](lessons/01-01-quantum-toolkit-refreshed.md) |
| $E_h$, Ha | **hartree**, the atomic unit of energy ($27.211$ eV) | [1.1](lessons/01-01-quantum-toolkit-refreshed.md) |
| $a_0$ | **bohr**, the atomic unit of length ($0.529$ Å) | [1.1](lessons/01-01-quantum-toolkit-refreshed.md) |
| $\psi_{n\ell m} = R_{n\ell}Y_{\ell m}$ | hydrogenic orbital: radial profile times angular shape | [1.2](lessons/01-02-hydrogen-atom-revisited.md) |
| $P(r) = r^2\lvert R\rvert^2$ | radial distribution — probability of finding the electron *at radius* $r$ | [1.2](lessons/01-02-hydrogen-atom-revisited.md) |
| $Z$, $\zeta$ | true nuclear charge; **effective/orbital exponent** you variationally optimize | [1.3](lessons/01-03-variational-principle.md) |
| $E[\tilde\psi]$ | Rayleigh quotient — the energy of a trial function, always an upper bound | [1.3](lessons/01-03-variational-principle.md) |
| $H_{ij}$, $S_{ij}$ | Hamiltonian and **overlap** matrix elements over basis functions | [1.3](lessons/01-03-variational-principle.md) |
| $\hat H^{(0)}$, $\hat H'$ | solvable reference Hamiltonian and the small perturbation on top | [1.4](lessons/01-04-perturbation-theory.md) |
| $E_n^{(1)}$, $E_n^{(2)}$ | first- and second-order energy corrections | [1.4](lessons/01-04-perturbation-theory.md) |
| $\psi_\text{el}(\mathbf r;\mathbf R)$ | electronic wavefunction — solve in $\mathbf r$, with geometry $\mathbf R$ a *label* | [1.5](lessons/01-05-born-oppenheimer-approximation.md) |
| $V(\mathbf R)$, PES | potential energy surface the nuclei move on | [1.5](lessons/01-05-born-oppenheimer-approximation.md) |
| $R_e$, $D_e$ | equilibrium bond length; well depth (electronic dissociation energy) | [1.5](lessons/01-05-born-oppenheimer-approximation.md) |
| $\alpha$, $\beta$, $S$ | Coulomb, resonance, and overlap integrals of the two-orbital problem | [1.6](lessons/01-06-h2-plus-lcao.md) |
| $\sigma_g$, $\sigma_u^{*}$ | bonding and antibonding MO (subscript = parity, star = antibonding) | [1.6](lessons/01-06-h2-plus-lcao.md) |
| $\chi_i$, $\phi_i$ | spin-orbital (space $\times$ spin); spatial orbital alone | [2.1](lessons/02-01-many-electrons-antisymmetry.md) |
| $\alpha$, $\beta$ (spin) | spin-up and spin-down functions | [2.1](lessons/02-01-many-electrons-antisymmetry.md) |
| $\mathbf x = (\mathbf r,\omega)$ | one electron's space **and** spin coordinates bundled | [2.1](lessons/02-01-many-electrons-antisymmetry.md) |
| $\hat F$, $\varepsilon_i$ | Fock operator and the orbital energy it returns | [2.2](lessons/02-02-hartree-fock-equations.md) |
| $\hat h$, $\hat J_j$, $\hat K_j$ | core (one-electron), Coulomb, and exchange operators | [2.2](lessons/02-02-hartree-fock-equations.md) |
| $(ij\vert kl)$ | two-electron repulsion integral in charge-cloud order | [2.2](lessons/02-02-hartree-fock-equations.md) |
| $\mathbf P$, $P_{\mu\nu}$ | density matrix — where the electrons are, in basis-function language | [2.3](lessons/02-03-self-consistent-field.md) |
| $\mu,\nu,\lambda,\sigma$ | Greek indices **always** label basis functions (AOs) | [2.4](lessons/02-04-roothaan-hall-matrices.md) |
| $\mathbf{FC} = \mathbf{SC}\boldsymbol\varepsilon$ | the Roothaan–Hall matrix form of Hartree–Fock | [2.4](lessons/02-04-roothaan-hall-matrices.md) |
| $\mathbf S^{-1/2}$ | Löwdin orthogonalizer that absorbs the overlap | [2.4](lessons/02-04-roothaan-hall-matrices.md) |
| $K$ (or $N$) | number of basis functions — the thing cost scales in | [2.4](lessons/02-04-roothaan-hall-matrices.md) |
| $d_k$, $\alpha_k$ | contraction coefficients and Gaussian exponents of a contracted GTO | [2.5](lessons/02-05-basis-sets.md) |
| $E_\text{corr}$ | correlation energy $E_\text{exact} - E_\text{HF}$ — always negative | [3.1](lessons/03-01-correlation-problem.md) |
| $i,j$ / $a,b$ | occupied / **virtual** (empty) orbital indices | [3.2](lessons/03-02-configuration-interaction.md) |
| $\lvert\Psi_i^a\rangle$, $\lvert\Psi_{ij}^{ab}\rangle$ | singly and doubly excited determinants | [3.2](lessons/03-02-configuration-interaction.md) |
| $\langle ij\vert\vert ab\rangle$ | antisymmetrized two-electron integral $\langle ij\vert ab\rangle - \langle ij\vert ba\rangle$ | [3.3](lessons/03-03-moller-plesset-mp2.md) |
| $\hat T$, $t_{ij}^{ab}$ | cluster operator and its amplitudes | [3.4](lessons/03-04-coupled-cluster-taste.md) |
| $\rho(\mathbf r)$ | electron density — 3-D, integrates to $N$ | [3.5](lessons/03-05-dft-hohenberg-kohn.md) |
| $F[\rho]$ | the universal functional (square brackets flag a *functional*) | [3.5](lessons/03-05-dft-hohenberg-kohn.md) |
| $v(\mathbf r)$, $v_\text{ne}$ | external potential — the nuclei's pull, the only molecule-specific term | [3.5](lessons/03-05-dft-hohenberg-kohn.md) |
| $\mu$ (DFT) | chemical potential — the Lagrange multiplier fixing $\int\rho\,d\mathbf r = N$ | [3.5](lessons/03-05-dft-hohenberg-kohn.md) |
| $T_s$, $J$, $E_\text{xc}$ | non-interacting kinetic, Hartree (classical) Coulomb, exchange–correlation | [3.6](lessons/03-06-dft-kohn-sham.md) |
| $v_\text{eff}$, $v_\text{xc}$ | Kohn–Sham effective potential and its exchange–correlation piece | [3.6](lessons/03-06-dft-kohn-sham.md) |
| $\mathbf q$, $\nabla E$ | internal nuclear coordinates and the energy gradient ($\mathbf F = -\nabla E$) | [4.1](lessons/04-01-pes-geometry-optimization.md) |
| $H_{ij} = \partial^2E/\partial q_i\partial q_j$ | Hessian — curvature matrix; its eigenvalue signs classify the point | [4.1](lessons/04-01-pes-geometry-optimization.md) |
| $\tilde H_{ij} = H_{ij}/\sqrt{m_im_j}$ | mass-weighted Hessian, whose eigenvalues give $\omega^2$ | [4.2](lessons/04-02-vibrational-frequencies.md) |
| $\tilde\nu$ | wavenumber in cm⁻¹ — what a spectrometer actually plots | [4.2](lessons/04-02-vibrational-frequencies.md) |
| $\mu$ (vibration) | reduced mass $m_1m_2/(m_1+m_2)$ of a diatomic | [4.2](lessons/04-02-vibrational-frequencies.md) |
| $\boldsymbol\mu_{0n}$, $f_n$ | transition dipole moment and the dimensionless oscillator strength | [4.3](lessons/04-03-electronic-spectra.md) |
| $\omega_n$ | excitation energy of state $n$ (CIS / TD-DFT output) | [4.3](lessons/04-03-electronic-spectra.md) |
| CBS | complete-basis-set limit — the far corner of the method/basis grid | [4.4](lessons/04-04-reading-calculation-critically.md) |

## Definitions

### Atomic units

Measure everything in the electron's own units so the constants vanish: set
$\hbar = m_e = e = 4\pi\varepsilon_0 = 1$. Not an approximation — a change of rulers,
exact to all digits.

$$\hat H_\text{H atom} = -\tfrac12\nabla^2 - \frac{1}{r}, \qquad E_0 = -\tfrac12\,E_h$$

*Introduced:* [1.1](lessons/01-01-quantum-toolkit-refreshed.md)

### Hydrogenic orbital

The exact one-electron solution: a radial profile telling you how far out the
electron lives, times an angular pattern telling you what shape the cloud is.

$$\psi_{n\ell m}(r,\theta,\phi) = R_{n\ell}(r)\,Y_{\ell m}(\theta,\phi), \qquad E_n = -\frac{Z^2}{2n^2}\,E_h$$

*Introduced:* [1.2](lessons/01-02-hydrogen-atom-revisited.md)

### Radial distribution function

Where the electron actually is *as a function of radius* — the density weighted
by the surface area of the shell at that radius, which is why the peak sits away
from the nucleus.

$$P(r) = r^2\,|R_{n\ell}(r)|^2$$

*Introduced:* [1.2](lessons/01-02-hydrogen-atom-revisited.md)

### Variational principle

You cannot accidentally beat the ground state: any guess's average energy is an
overestimate, so "lower" always means "better" and optimizing beats solving.

$$E[\tilde\psi] = \frac{\langle\tilde\psi|\hat H|\tilde\psi\rangle}{\langle\tilde\psi|\tilde\psi\rangle} \;\ge\; E_0$$

*Introduced:* [1.3](lessons/01-03-variational-principle.md)

### Secular determinant

When the trial function is a linear combination of fixed basis functions, the
minimization becomes linear algebra: non-trivial coefficients exist only where
this determinant vanishes, and its roots are the trial energies.

$$\det\!\left(H_{ij} - E\,S_{ij}\right) = 0 \qquad\Longleftrightarrow\qquad \mathbf{Hc} = E\,\mathbf{Sc}$$

*Introduced:* [1.3](lessons/01-03-variational-principle.md)

### Rayleigh–Schrödinger perturbation theory

Keep the problem you can solve and add the small extra piece order by order —
first order is the perturbation's average, second order is the effect of it
mixing in other states.

$$E_n^{(1)} = H'_{nn}, \qquad E_n^{(2)} = \sum_{k\neq n}\frac{|H'_{kn}|^2}{E_n^{(0)}-E_k^{(0)}}$$

*Introduced:* [1.4](lessons/01-04-perturbation-theory.md)

### Born–Oppenheimer approximation

Nuclei are ~1836 times heavier than electrons, so freeze them, solve the
electrons at that frozen geometry, and only afterwards let the nuclei move on the
energy landscape the electrons painted.

$$\hat H_\text{el}\,\psi_\text{el}(\mathbf r;\mathbf R) = E_\text{el}(\mathbf R)\,\psi_\text{el}(\mathbf r;\mathbf R)$$

What it drops is the **non-adiabatic coupling** between electronic states, not
nuclear motion itself.

*Introduced:* [1.5](lessons/01-05-born-oppenheimer-approximation.md)

### Potential energy surface

Electronic energy plus nuclear repulsion, as a function of geometry — the
landscape whose valleys are molecules and whose passes are transition states.

$$V(\mathbf R) = E_\text{el}(\mathbf R) + \sum_{A<B}\frac{Z_AZ_B}{R_{AB}}$$

*Introduced:* [1.5](lessons/01-05-born-oppenheimer-approximation.md) *· worked as a landscape in* [4.1](lessons/04-01-pes-geometry-optimization.md)

### LCAO

Guess that a molecular orbital looks like the atomic orbitals it came from, and
let the variational principle pick the weights.

$$\phi_i(\mathbf r) = \sum_\mu C_{\mu i}\,\chi_\mu(\mathbf r)$$

*Introduced:* [1.6](lessons/01-06-h2-plus-lcao.md) *· scaled to matrices in* [2.4](lessons/02-04-roothaan-hall-matrices.md)

### Coulomb, resonance, and overlap integrals

The three numbers that build a two-orbital MO diagram: where the atomic level
sits, how much energy sharing buys, and how much the orbitals occupy the same
space.

$$\alpha = \langle A|\hat H|A\rangle, \qquad \beta = \langle A|\hat H|B\rangle\ (<0), \qquad S = \langle A|B\rangle\ (0<S<1)$$

$\beta$ — delocalization, with no classical analogue — *is* the bond; $S$ merely
makes $\beta$ possible.

*Introduced:* [1.6](lessons/01-06-h2-plus-lcao.md)

### Bonding and antibonding orbital

In-phase combination piles electron density between the nuclei and glues them
together; out-of-phase puts a node there and starves the bond region.

$$\psi_\pm = \frac{1s_A \pm 1s_B}{\sqrt{2(1\pm S)}}, \qquad E_\pm = \frac{\alpha\pm\beta}{1\pm S}$$

*Introduced:* [1.6](lessons/01-06-h2-plus-lcao.md)

### Spin-orbital

An electron's full address: which spatial cloud, and which way the spin points.
One spatial orbital yields two spin-orbitals — the origin of "two electrons per
orbital."

$$\chi(\mathbf x) = \phi(\mathbf r)\,\sigma, \qquad \sigma\in\{\alpha,\beta\}$$

*Introduced:* [2.1](lessons/02-01-many-electrons-antisymmetry.md)

### Antisymmetry principle

Electrons are fermions: swap any two and the whole wavefunction flips sign. Set
the two coordinates equal and you get $\Psi = -\Psi = 0$ — that *is* Pauli
exclusion, derived from a sign rather than a force.

$$\Psi(\dots,\mathbf x_i,\dots,\mathbf x_j,\dots) = -\Psi(\dots,\mathbf x_j,\dots,\mathbf x_i,\dots)$$

*Introduced:* [2.1](lessons/02-01-many-electrons-antisymmetry.md)

### Slater determinant

The one algebraic gadget that already flips sign on a row swap and vanishes when
two columns match — so pour spin-orbitals into it and antisymmetry comes free.
**Rows are electrons, columns are spin-orbitals.**

$$\Psi = \frac{1}{\sqrt{N!}}\det\big[\chi_1(\mathbf x_1)\ \chi_2(\mathbf x_2)\ \cdots\ \chi_N(\mathbf x_N)\big]$$

*Introduced:* [2.1](lessons/02-01-many-electrons-antisymmetry.md)

### Fermi hole

Two same-spin electrons have exactly zero probability of being at the same point
— pure antisymmetry, no Coulomb repulsion invoked. Hartree–Fock captures it
exactly, and the energy lowering it produces is **exchange**.

*Introduced:* [2.1](lessons/02-01-many-electrons-antisymmetry.md)

### Coulomb hole

The mutual avoidance that *opposite*-spin electrons should also show, driven by
$1/r_{12}$ alone. Antisymmetry does not enforce it, so a single determinant lets
opposite-spin electrons sit on top of each other. Its absence **is** the
correlation error.

*Introduced:* [2.1](lessons/02-01-many-electrons-antisymmetry.md) *· quantified in* [3.1](lessons/03-01-correlation-problem.md)

### Hartree–Fock approximation

Replace "each electron feels every other electron's instantaneous position" with
"each electron feels the others' averaged charge clouds," and find the best
single Slater determinant under that mean field.

$$\hat F\chi_i = \varepsilon_i\chi_i$$

*Introduced:* [2.2](lessons/02-02-hartree-fock-equations.md)

### Fock operator

The effective one-electron Hamiltonian: bare nuclear attraction, plus classical
repulsion from every other cloud, minus the same-spin exchange relief.

$$\hat F = \hat h + \sum_{j}\big(\hat J_j - \hat K_j\big)$$

$\hat J_j$ is **local** (multiply by a potential); $\hat K_j$ is **nonlocal**
(it scatters $\chi_i$ into $\chi_j$) and acts **only between same-spin electrons**.

*Introduced:* [2.2](lessons/02-02-hartree-fock-equations.md)

### Two-electron repulsion integral

The electrostatic interaction between one charge distribution $\chi_i^{*}\chi_j$
and another $\chi_k^{*}\chi_l$. Four indices, hence the cost of everything.

$$(ij|kl) = \iint \chi_i^{*}(1)\chi_j(1)\,\frac{1}{r_{12}}\,\chi_k^{*}(2)\chi_l(2)\,d\tau_1 d\tau_2$$

*Introduced:* [2.2](lessons/02-02-hartree-fock-equations.md)

### Self-consistent field

The Fock operator is built from the orbitals it is supposed to produce, so you
iterate: guess a density, build, solve, rebuild — until the orbitals reproduce
the field that produced them.

*Introduced:* [2.3](lessons/02-03-self-consistent-field.md)

### Density matrix

All the Fock build needs from the orbitals: where the electrons are. It — not any
individual orbital — is the object that converges, and it is invariant to phases
and in-shell rotations.

$$P_{\mu\nu} = 2\sum_{a}^{N/2} C_{\mu a}C_{\nu a}$$

*Introduced:* [2.3](lessons/02-03-self-consistent-field.md) *· in matrix form,* [2.4](lessons/02-04-roothaan-hall-matrices.md)

### Koopmans' theorem

If you pretend the other orbitals don't relax, pulling out an electron costs
(minus) its orbital energy.

$$\text{IE} \approx -\varepsilon_\text{HOMO}, \qquad \text{EA} \approx -\varepsilon_\text{LUMO}$$

Two errors stacked and running opposite: neglected **relaxation** overestimates
the IE, neglected **correlation** underestimates it.

*Introduced:* [2.3](lessons/02-03-self-consistent-field.md)

### Roothaan–Hall equations

Expand every MO in a finite AO basis and Hartree–Fock stops being an
integro-differential problem and becomes a generalized matrix eigenvalue problem.

$$\mathbf{FC} = \mathbf{SC}\,\boldsymbol\varepsilon$$

It is *generalized* only because AOs on different atoms genuinely overlap, so
$\mathbf S\neq\mathbf I$.

*Introduced:* [2.4](lessons/02-04-roothaan-hall-matrices.md)

### Basis set

The fixed menu of functions every orbital must be built from — the second great
approximation of quantum chemistry, after the single determinant.

*Introduced:* [2.5](lessons/02-05-basis-sets.md)

### STO, GTO, contracted GTO

An **STO** $\propto r^{n-1}e^{-\zeta r}Y_{\ell m}$ has the right shape (nuclear cusp,
exponential tail) and impossible integrals. A **GTO** $\propto x^ay^bz^ce^{-\alpha r^2}$
has the wrong shape and trivial integrals (the Gaussian product theorem collapses
two centers into one). A **contracted GTO** glues several primitives with *fixed*
coefficients so their sum imitates an STO.

$$\phi^\text{CGTO} = \sum_{k=1}^{K} d_k\,g_k, \qquad d_k,\alpha_k \text{ fixed in advance}$$

*Introduced:* [2.5](lessons/02-05-basis-sets.md)

### Basis-set superposition error (BSSE)

In a complex computed with the combined basis, each fragment secretly borrows the
other's nearby functions and looks artificially stabilized — spurious
**overbinding**, worst for weak interactions and small bases. Cured by the
**counterpoise correction**: recompute each fragment with "ghost" functions at the
partner's positions and subtract.

*Introduced:* [2.5](lessons/02-05-basis-sets.md) *· flagged again in* [4.4](lessons/04-04-reading-calculation-critically.md)

### Correlation energy

Everything the mean field missed. Negative by theorem, not by tendency: HF is a
legal variational trial function, so it can only sit above the truth.

$$E_\text{corr} = E_\text{exact} - E_\text{HF} \le 0$$

"Exact" here means **full CI in the same basis** — basis error is a separate,
additive problem.

*Introduced:* [3.1](lessons/03-01-correlation-problem.md)

### Dynamic vs. static correlation

**Dynamic**: many small short-range fixes, no single excited configuration
dominating — electrons instantaneously dodging. **Static (nondynamic)**: two or
more configurations are near-degenerate and both essential, so one determinant is
the *wrong shape* to start from. It is the weight profile, not the count of
determinants, that names the flavor.

*Introduced:* [3.1](lessons/03-01-correlation-problem.md)

### Configuration interaction

Let the wavefunction be a superposition of the HF reference and its excited
determinants, and let the variational principle pick the mixture. The determinants
are orthonormal, so it is a plain eigenvalue problem.

$$|\Psi_\text{CI}\rangle = c_0|\Psi_0\rangle + \sum_{i,a}c_i^a|\Psi_i^a\rangle + \sum_{i<j,\,a<b}c_{ij}^{ab}|\Psi_{ij}^{ab}\rangle + \cdots, \qquad \mathbf{Hc} = E\mathbf c$$

*Introduced:* [3.2](lessons/03-02-configuration-interaction.md)

### Brillouin's theorem

Singly excited determinants do not couple to the HF reference at all — the matrix
element *is* an off-diagonal Fock element, and SCF made those zero. So **doubles**
carry the correlation energy.

$$\langle\Psi_0|\hat H|\Psi_i^a\rangle = 0$$

*Introduced:* [3.2](lessons/03-02-configuration-interaction.md)

### Size consistency and size extensivity

A method is **size-consistent** if two non-interacting fragments computed together
give exactly the sum of their separate energies; **size-extensive** if $M$
identical copies give $M$ times one copy's correlation energy. Truncated CI fails
both; HF, MP$n$, and coupled cluster pass.

$$E(A\cdots B) = E(A) + E(B) \quad\text{at infinite separation}$$

*Introduced:* [3.2](lessons/03-02-configuration-interaction.md) *· made precise in* [3.4](lessons/03-04-coupled-cluster-taste.md)

### Møller–Plesset partition

Choose the sum of Fock operators as the solvable reference, so the perturbation
is exactly what HF got wrong — the difference between true and averaged electron
repulsion. Correlation *is* the perturbation.

$$\hat H^{(0)} = \sum_n \hat F(n), \qquad \hat H' = \hat H - \hat H^{(0)}, \qquad E^{(0)}+E^{(1)} = E_\text{HF}$$

That last identity is why the series starts counting at MP2.

*Introduced:* [3.3](lessons/03-03-moller-plesset-mp2.md)

### Exponential (coupled-cluster) ansatz

Put the excitations in an exponent instead of a sum. Truncating the *cluster
operator* at doubles does **not** truncate the *wavefunction* at doubles: the
expansion quietly supplies disconnected quadruples $\tfrac12\hat T_2^2$ and beyond,
for free.

$$|\Psi_\text{CC}\rangle = e^{\hat T}|\Psi_0\rangle, \qquad e^{\hat T_A + \hat T_B} = e^{\hat T_A}e^{\hat T_B}$$

The factorization on the right is exactly why CC is size-extensive at every
truncation level.

*Introduced:* [3.4](lessons/03-04-coupled-cluster-taste.md)

### Hohenberg–Kohn theorems

**HK-1:** the ground-state density fixes the external potential (hence the
Hamiltonian, hence everything) — cusp heights give the nuclear charges, cusp
positions the geometry, the integral the electron count. **HK-2:** a universal
functional exists whose minimum over densities is the true ground-state energy.

$$E_v[\rho] = F[\rho] + \int\rho(\mathbf r)v(\mathbf r)\,d\mathbf r \;\ge\; E_0, \qquad F[\rho] = T[\rho] + V_{ee}[\rho]$$

An **existence** proof, not an algorithm: no formula for $F$ is given.

*Introduced:* [3.5](lessons/03-05-dft-hohenberg-kohn.md)

### Universal functional

$F[\rho] = T[\rho]+V_{ee}[\rho]$ contains only the two operators that are the same
for every electronic system, so it is one and the same functional for $\ce{H2}$,
benzene, or copper — only $\int\rho\,v\,d\mathbf r$ knows which molecule you are
studying. Know $F$ once and chemistry is solved.

*Introduced:* [3.5](lessons/03-05-dft-hohenberg-kohn.md)

### Kohn–Sham construction

Invent a fictitious system of **non-interacting** electrons whose density equals
the real molecule's, get almost all of the kinetic energy exactly from its
orbitals, and sweep the rest into one small leftover term.

$$E[\rho] = T_s[\{\phi\}] + V_\text{ne}[\rho] + J[\rho] + E_\text{xc}[\rho], \qquad \left[-\tfrac12\nabla^2 + v_\text{eff}\right]\phi_i = \varepsilon_i\phi_i$$

*Introduced:* [3.6](lessons/03-06-dft-kohn-sham.md)

### Exchange–correlation functional

The junk drawer holding (i) exchange, (ii) correlation, and (iii) the kinetic
correction $T[\rho]-T_s[\{\phi\}]$ between the real and fictitious systems. Small
in magnitude, unknown exactly, and the sole determinant of a DFT calculation's
quality.

$$v_\text{xc}(\mathbf r) = \frac{\delta E_\text{xc}}{\delta\rho(\mathbf r)}$$

*Introduced:* [3.6](lessons/03-06-dft-kohn-sham.md)

### Stationary point

A geometry where every force vanishes. Minima, transition states, and
higher-order saddles are **all** stationary — the gradient alone cannot tell them
apart, which is why you run frequencies.

$$\nabla E(\mathbf q^\star) = \mathbf 0$$

*Introduced:* [4.1](lessons/04-01-pes-geometry-optimization.md)

### Normal mode

A collective pattern in which every atom oscillates at one shared frequency.
Eigenvector of the mass-weighted Hessian; any real jiggling is a superposition of
these.

$$\tilde H_{ij} = \frac{H_{ij}}{\sqrt{m_i m_j}}, \qquad \omega = \sqrt{\lambda}$$

*Introduced:* [4.2](lessons/04-02-vibrational-frequencies.md)

### Zero-point energy

Even at 0 K each mode keeps half a quantum. Sum it over the modes and you have the
correction that turns an electronic energy into something comparable to
experiment.

$$\text{ZPE} = \tfrac12\sum_i h\nu_i$$

*Introduced:* [4.2](lessons/04-02-vibrational-frequencies.md) *· used in the thermochemistry of* [4.4](lessons/04-04-reading-calculation-critically.md)

### Transition dipole moment and oscillator strength

A transition absorbs only if promoting the electron actually shifts charge in a
way that couples to the light's field; $f$ measures how strongly.

$$\boldsymbol\mu_{0n} = \langle\Psi_n|\hat{\boldsymbol\mu}|\Psi_0\rangle, \qquad f_n \propto \omega_n|\boldsymbol\mu_{0n}|^2$$

$f\approx1$ is a strong band, $f\approx0$ is dark (a real state, just invisible).

*Introduced:* [4.3](lessons/04-03-electronic-spectra.md)

### Isodesmic reaction

A comparison rigged so the number and type of bonds is identical on both sides
(bonds are *swapped*, never made or broken), so that the same systematic
method/basis error appears on both sides and cancels. **Isogyric** does the same
for the count of unpaired electrons.

*Introduced:* [4.4](lessons/04-04-reading-calculation-critically.md)

## Formulas and rules

### Constants and conversions

| Quantity | Value |
|---|---|
| $1\ E_h$ (hartree) | $27.211$ eV $= 2625.5$ kJ/mol $= 627.5$ kcal/mol |
| $1\ a_0$ (bohr) | $0.529$ Å |
| $1$ eV | $96.5$ kJ/mol; chemical accuracy $\approx 1$ kcal/mol $\approx 0.043$ eV |
| photon energy $\leftrightarrow$ wavelength | $\lambda(\text{nm}) = 1239.8 / E(\text{eV})$ |
| wavenumber | $\tilde\nu = \omega/(2\pi c)$, with $c = 2.998\times10^{10}$ cm/s |
| proton : electron mass | $\approx 1836$ |

*From* [1.1](lessons/01-01-quantum-toolkit-refreshed.md), [2.3](lessons/02-03-self-consistent-field.md), [4.2](lessons/04-02-vibrational-frequencies.md), [4.3](lessons/04-03-electronic-spectra.md)

### The hydrogenic atom, at a glance

| Quantity | Result |
|---|---|
| energy | $E_n = -Z^2/2n^2\ E_h = -13.6\,Z^2/n^2$ eV — depends on $n$ **alone** |
| quantum numbers | $n = 1,2,\dots$; $\ell = 0,\dots,n-1$ ($s,p,d,f$); $m = -\ell,\dots,+\ell$; $m_s = \pm\tfrac12$ |
| degeneracy of level $n$ | $n^2$ spatial, $2n^2$ with spin |
| radial nodes | $n-\ell-1$ (spheres) |
| angular nodes | $\ell$ (planes/cones); total nodes $n-1$ |
| $1s$ radial function | $R_{1s} = 2Z^{3/2}e^{-Zr}$, so $P(r) = 4Z^3r^2e^{-2Zr}$ |
| most probable radius ($1s$) | $r_\text{mp} = 1/Z$ (for $Z=1$, exactly $a_0$) |
| mean radius ($1s$, $Z=1$) | $\langle r\rangle = 1.5\,a_0$ — bigger than the peak, because $P$ is right-skewed |
| useful integral | $\int_0^\infty r^ne^{-ar}dr = n!/a^{n+1}$ |

The $\ell$-independence is the **accidental degeneracy** of the exact $1/r$
potential. Screening breaks it in every real atom — which is the periodic table.

*From* [1.2](lessons/01-02-hydrogen-atom-revisited.md)

### Variation and perturbation — the two engines

$$\text{variation:}\quad E(\lambda) = \frac{\langle\tilde\psi(\lambda)|\hat H|\tilde\psi(\lambda)\rangle}{\langle\tilde\psi(\lambda)|\tilde\psi(\lambda)\rangle}, \quad \frac{\partial E}{\partial\lambda}=0 \Rightarrow \lambda^{*}$$

$$\text{perturbation:}\quad E_n^{(1)} = H'_{nn}, \qquad |\psi_n^{(1)}\rangle = \sum_{k\neq n}\frac{H'_{kn}}{E_n^{(0)}-E_k^{(0)}}|\psi_k^{(0)}\rangle, \qquad E_n^{(2)} = \sum_{k\neq n}\frac{|H'_{kn}|^2}{E_n^{(0)}-E_k^{(0)}}$$

| | Variational | Perturbative |
|---|---|---|
| gives a bound? | yes, rigorous upper bound (ground state only) | no |
| needs | a flexible trial family | a solvable $\hat H^{(0)}$ and a *small* $\hat H'$ |
| improves by | widening the family (energy can only drop) | going to higher order |
| fails when | the family can't reach the right shape | levels are near-degenerate — denominators collapse |

$E_0^{(2)}\le 0$ **always**: every other state lies above the ground state, so every
denominator is negative and every numerator a square. That is **level repulsion**,
and it is the same sign argument that makes every MP2 term negative.

Degenerate/near-degenerate case: stop expanding and **diagonalize $\hat H'$ inside
the degenerate subspace** — degenerate perturbation theory is just the secular
problem restricted to those states.

*From* [1.3](lessons/01-03-variational-principle.md) *and* [1.4](lessons/01-04-perturbation-theory.md)

### The two-orbital (LCAO) problem

$$\det\begin{pmatrix}\alpha - E & \beta - ES\\ \beta - ES & \alpha - E\end{pmatrix} = 0 \;\Longrightarrow\; E_\pm = \frac{\alpha\pm\beta}{1\pm S}$$

$$\psi_\pm = \frac{1s_A \pm 1s_B}{\sqrt{2(1\pm S)}}, \qquad \frac{|E_- - \alpha|}{|E_+ - \alpha|} = \frac{1+S}{1-S} > 1$$

With $S=0$ the roots collapse to $E_\pm = \alpha\pm\beta$ and the split is symmetric
— that symmetric picture is a fiction. Real overlap always pushes antibonding up
more than bonding comes down, which is why $\ce{He2}$ does not exist.

*From* [1.6](lessons/01-06-h2-plus-lcao.md)

### Building an MO diagram

1. **Combine AOs of similar energy and compatible symmetry.** $N$ atomic orbitals
   in, $N$ molecular orbitals out — always.
2. **In-phase = bonding** (below the atomic levels), **out-of-phase = antibonding**
   (above, marked with a star). Antibonding rises by the factor $(1+S)/(1-S)$ more
   than bonding falls.
3. **Label by symmetry about the bond axis:** $\sigma$ (cylindrically symmetric),
   $\pi$ (one nodal plane containing the axis), $\delta$ (two). For a
   centrosymmetric molecule add the parity subscript $g$ (even under inversion) or
   $u$ (odd).
4. **Fill by Aufbau, Pauli, and Hund:** lowest first, two electrons per spatial
   orbital with paired spins, degenerate orbitals singly occupied with parallel
   spins first.
5. **Bond order** $= \tfrac12(\text{bonding electrons} - \text{antibonding electrons})$.
   Zero means no molecule.
6. **Heteronuclear:** the more electronegative atom's AO lies lower, the bonding MO
   is weighted toward it (unequal $C_{\mu i}$), and the antibonding MO toward the
   other. Orbitals with no symmetry match stay **non-bonding**.

*From* [1.6](lessons/01-06-h2-plus-lcao.md), [2.1](lessons/02-01-many-electrons-antisymmetry.md), [2.4](lessons/02-04-roothaan-hall-matrices.md); the qualitative picture and bond-order bookkeeping are [general chemistry's](../general-chemistry/reference.md#bond-order)

### Reading state labels and term symbols

Lower-case letters ($\sigma_g$, $\pi_u^{*}$) label **orbitals**; capitals label the
**state** of all the electrons together.

| Piece | Rule |
|---|---|
| spin multiplicity | $2S+1$: all paired $\Rightarrow S=0$, **singlet**; two parallel unpaired $\Rightarrow S=1$, **triplet** |
| molecular term symbol | $^{2S+1}\Lambda_{g/u}^{\pm}$, with $\Lambda = 0,1,2 \to \Sigma,\Pi,\Delta$ |
| parity | multiply the parities of the occupied orbitals: $g\times g = g$, $u\times u = g$, $g\times u = u$ |
| closed shell | every filled orbital contributes nothing: a closed-shell ground state is $^1\Sigma_g^{+}$ |
| examples | $\ce{H2}$ ground state $\sigma_g^2 \to {}^1\Sigma_g^{+}$; $\ce{H2+}$ ground state $\sigma_g^1 \to {}^2\Sigma_g^{+}$ |

Atomic term symbols $^{2S+1}L_J$ and Hund's rules for assigning them are used but
not built here — see *Assumed, not taught here*.

*From* [2.1](lessons/02-01-many-electrons-antisymmetry.md), [1.6](lessons/01-06-h2-plus-lcao.md), [4.3](lessons/04-03-electronic-spectra.md)

### Hartree–Fock: the equations you actually use

$$\hat F = \hat h + \sum_j(\hat J_j - \hat K_j), \qquad \hat h = -\tfrac12\nabla^2 - \sum_A\frac{Z_A}{r_A}$$

$$\hat J_j\chi_i(1) = \left[\int\frac{|\chi_j(2)|^2}{r_{12}}d\tau_2\right]\chi_i(1), \qquad \hat K_j\chi_i(1) = \left[\int\frac{\chi_j^{*}(2)\chi_i(2)}{r_{12}}d\tau_2\right]\chi_j(1)$$

$$E_\text{HF} = \sum_i h_{ii} + \frac12\sum_i\sum_j(J_{ij}-K_{ij}) \;=\; \sum_i\varepsilon_i - \frac12\sum_i\sum_j(J_{ij}-K_{ij})$$

with $J_{ij} = (ii|jj)$, $K_{ij} = (ij|ji)$, and $\varepsilon_i = h_{ii} + \sum_j(J_{ij}-K_{ij})$.
For a closed shell in **spatial** orbitals the pair term becomes $2J_{ab} - K_{ab}$
(both spins feel Coulomb, only the same-spin pair gets exchange). Add the constant
nuclear repulsion $\sum_{A<B}Z_AZ_B/R_{AB}$ for the total molecular energy.

Minimal-basis closed-shell $\ce{H2}$ collapses to $E_\text{HF} = 2h_{11} + J_{11}$ —
exchange vanishes because the pair is opposite-spin.

*From* [2.2](lessons/02-02-hartree-fock-equations.md)

### The SCF loop, and what to do when it misbehaves

1. **Guess** a density $\mathbf P^{(0)}$ (superposed atomic densities, or bare core).
2. **Build** $\mathbf F[\mathbf P]$ — the $K^4$ step, paid every cycle.
3. **Solve** $\mathbf{FC} = \mathbf{SC}\boldsymbol\varepsilon$ — the $K^3$ diagonalization.
4. **Form** the new $\mathbf P$ from the occupied columns of $\mathbf C$.
5. **Test** and loop.

$$F_{\mu\nu} = H^\text{core}_{\mu\nu} + \sum_{\lambda\sigma}P_{\lambda\sigma}\Big[(\mu\nu|\lambda\sigma) - \tfrac12(\mu\lambda|\nu\sigma)\Big]$$

Convergence requires **both** $|E^{(n+1)}-E^{(n)}| < \tau_E$ (say $10^{-6}\,E_h$) and
$\|\mathbf P^{(n+1)}-\mathbf P^{(n)}\|_\text{RMS} < \tau_P$ (say $10^{-5}$) — the energy alone
can plateau while the density oscillates. Because HF is variational, the energy
descends to its limit **from above**.

| Trouble | Fix | How it helps |
|---|---|---|
| oscillating density | **damping** $\alpha\mathbf P^{(n)} + (1-\alpha)\mathbf P^{(n+1)}$ | blends the update so it can't overshoot |
| stalling, occupied/virtual mixing | **level shifting** | artificially raises virtual energies |
| slow convergence generally | **DIIS** | extrapolates from previous iterations to kill the residual |
| $\mathbf S\neq\mathbf I$ | **Löwdin** $\mathbf F' = \mathbf S^{-1/2}\mathbf F\mathbf S^{-1/2}$ | turns it into an ordinary eigenproblem; computed once |

*From* [2.3](lessons/02-03-self-consistent-field.md) *and* [2.4](lessons/02-04-roothaan-hall-matrices.md)

### Basis-set vocabulary

| Label | What it adds | Reach for it when |
|---|---|---|
| **minimal** (`STO-3G`) | one contracted function per occupied AO | never, except as a toy — orbitals can't breathe |
| **STO-$K$G** | $K$ primitive Gaussians per contraction | shape fidelity only; `STO-6G` is *still* minimal |
| **split-valence / double-zeta** (`6-31G`, `cc-pVDZ`) | valence split into tight + loose functions | the honest minimum for anything quantitative |
| **triple-zeta** (`6-311G`, `cc-pVTZ`) | valence split three ways | correlated methods, which are basis-hungry |
| **polarization** (`6-31G(d)`, `6-31G(d,p)`) | higher-$\ell$ functions: $d$ on heavy atoms, $p$ on H | always for geometries — bonds must bend and lean |
| **diffuse** (`6-31+G`, `6-31++G`, `aug-cc-pVXZ`) | very small exponents, spatially fat | anions, lone pairs, Rydberg states, weak long-range binding |

Reading a name: in `6-31G`, the core is 6 primitives in one function and the
valence is a 3-primitive inner plus a 1-primitive outer function; `+` adds diffuse
on heavy atoms, `++` also on H; `(d,p)` polarizes heavy atoms and hydrogens.

Cost and convergence: the two-electron integral count is $\sim K^4$, so doubling
the basis multiplies integral work by $\sim16$. Correlation-consistent sets
extrapolate smoothly toward the complete-basis limit,

$$E_X \approx E_\text{CBS} + A\,X^{-3}, \qquad X = \text{D},\text{T},\text{Q},\dots$$

**Match the basis to the method** — a triple-zeta on bare HF wastes precision the
method can't use; a correlated method on a minimal basis is equally pointless.

*From* [2.5](lessons/02-05-basis-sets.md) *and* [4.4](lessons/04-04-reading-calculation-critically.md)

### The method ladder

The one table to have open when someone hands you a `method/basis` label. $N$ (or
$K$) is the number of basis functions.

| Method | What it includes | What it misses | Cost | Variational | Size-consistent |
|---|---|---|---|---|---|
| **HF** | full averaged Coulomb + **exact exchange** (Fermi hole) | *all* correlation — the entire Coulomb hole | $\sim N^4$ | yes | yes |
| **MP2** | leading dynamic correlation, from doubles only | higher orders; diverges at near-degeneracy; can overshoot dispersion | $\sim N^5$ | **no** | yes |
| **CISD** | singles + doubles, variationally optimized | disconnected quadruples $\Rightarrow$ underbinds bigger systems | $\sim N^6$ | yes | **no** |
| **CCSD** | doubles summed to infinite order, plus their products | connected triples | $\sim N^6$ | **no** | yes |
| **CCSD(T)** | CCSD + perturbative triples — the "gold standard" | strong/static correlation; the "(T)" itself diverges there | $\sim N^7$ | **no** | yes |
| **CCSDT** | triples solved for, not estimated | quadruples and up | $\sim N^8$ | **no** | yes |
| **full CI** | every excitation — exact *in the basis* | nothing but basis error | factorial | yes | yes |
| **KS-DFT** | exchange + correlation, via an approximate $E_\text{xc}$ | dispersion, self-interaction, static correlation | $\sim N^3$–$N^4$ | in principle (HK-2), not with an approximate functional | yes |
| **multireference** (CASSCF, CASPT2, MRCI) | several determinants on an equal footing | expense, and an active space you must choose | steep | varies | varies |

Accuracy for a well-behaved closed-shell molecule:
$\text{HF} < \text{MP2} \lesssim \text{CISD} < \text{CCSD(T)} < \text{full CI}$.
**All of these except the last row are single-reference** — on a
static-correlation problem (stretched bonds, biradicals, some transition metals)
they are the wrong tool, not a small error. DFT sits off the ladder entirely:
better means empirically better, with no systematic knob to the exact answer.

*From* [3.1](lessons/03-01-correlation-problem.md), [3.2](lessons/03-02-configuration-interaction.md), [3.3](lessons/03-03-moller-plesset-mp2.md), [3.4](lessons/03-04-coupled-cluster-taste.md), [3.6](lessons/03-06-dft-kohn-sham.md), [4.4](lessons/04-04-reading-calculation-critically.md)

### Correlation formulas

$$\text{two-configuration CI:}\quad \mathbf H = \begin{pmatrix}E_0 & K\\ K & E_2\end{pmatrix}, \quad E_\pm = \frac{E_0+E_2}{2} \pm \sqrt{\left(\frac{E_2-E_0}{2}\right)^2 + K^2}$$

$$E_\text{corr} = E_- - E_0 = \Delta - \sqrt{\Delta^2+K^2} < 0, \qquad \Delta \equiv \tfrac12(E_2-E_0)$$

$$\text{MP2:}\quad E_\text{MP2} = \sum_{i<j}\sum_{a<b}\frac{\big|\langle ij||ab\rangle\big|^2}{\varepsilon_i+\varepsilon_j-\varepsilon_a-\varepsilon_b} \;\le\; 0, \qquad E = E_\text{HF} + E_\text{MP2}$$

For small coupling the CI result reduces to $-K^2/(E_2-E_0)$ — the same
second-order shape as one MP2 term. Only **doubles** contribute to $E_\text{MP2}$:
singles die by Brillouin, triples and higher by the Slater–Condon rules (a
two-electron operator cannot connect determinants differing in more than two
spin-orbitals).

The $\ce{H2}$ dissociation fix in one line: $\sigma_g^2$ is 50 percent ionic at every
$R$, $\sigma_u^2$ carries the same covalent terms with the ionic sign flipped, and
the variational mixture $c_g\sigma_g^2 + c_u\sigma_u^2$ cancels the ionic part as
$R\to\infty$ ($c_g \to -c_u$).

*From* [3.1](lessons/03-01-correlation-problem.md), [3.2](lessons/03-02-configuration-interaction.md), [3.3](lessons/03-03-moller-plesset-mp2.md)

### DFT: Jacob's ladder and the known failures

| Rung | Ingredient added | Examples |
|---|---|---|
| **LDA** | local density only, from the uniform electron gas | SVWN |
| **GGA** | + the density gradient $\nabla\rho$ | PBE, BLYP |
| **meta-GGA** | + kinetic-energy density / $\nabla^2\rho$ | TPSS, SCAN |
| **hybrid** | + a fraction of exact HF exchange | B3LYP, PBE0 |
| **range-separated hybrid** | exact exchange switched on at long range | CAM-B3LYP, $\omega$B97X-D |

| Failure | Symptom | Mitigation |
|---|---|---|
| **self-interaction / delocalization error** | over-spread charge, barriers too low, charge-transfer excitations far too low | more exact exchange — a hybrid, better a range-separated one |
| **missing dispersion** | stacked rings and van der Waals complexes barely bind | empirical `-D` corrections (B3LYP-D3, $\omega$B97X-D) |
| **static correlation** | stretched bonds, biradicals, some transition metals | multireference methods — DFT fails here much as HF does |
| **Rydberg states** | diffuse excited orbitals unbound | diffuse basis + range-separated functional |

The ladder ranks *ingredients*, not guaranteed accuracy: a functional fit on one
class of systems can lose to a simpler one outside its training.

*From* [3.5](lessons/03-05-dft-hohenberg-kohn.md), [3.6](lessons/03-06-dft-kohn-sham.md), [4.3](lessons/04-03-electronic-spectra.md), [4.4](lessons/04-04-reading-calculation-critically.md)

### Stationary points and geometry optimization

| Hessian eigenvalues | Type | Imaginary frequencies |
|---|---|---|
| all $\lambda_i > 0$ | minimum — a real molecule | 0 |
| exactly one $\lambda_i < 0$ | first-order saddle — **transition state** | 1 |
| two or more $\lambda_i < 0$ | higher-order saddle — not chemically meaningful | 2 or more |

$$\text{Newton / quasi-Newton step:}\quad \Delta\mathbf q = -H^{-1}\nabla E$$

Multiplying by $H^{-1}$ divides each direction's step by its curvature, so soft
directions take big steps and stiff ones small — that is what stops the zig-zag of
plain steepest descent. Exact Hessians are expensive, so **BFGS** carries an
approximate one updated from successive gradients.

Convergence needs **all four**: max force, RMS force, max displacement, RMS
displacement below threshold. A minimizer can never land on a transition state —
that needs a dedicated **eigenvector-following / saddle search**, a good Hessian,
and a starting guess already near the pass.

*From* [4.1](lessons/04-01-pes-geometry-optimization.md)

### Vibrational analysis

$$\tilde H_{ij} = \frac{H_{ij}}{\sqrt{m_im_j}}, \qquad \omega = \sqrt{\lambda}, \qquad \tilde\nu = \frac{\omega}{2\pi c}$$

$$\text{diatomic:}\quad \tilde\nu = \frac{1}{2\pi c}\sqrt{\frac{k}{\mu}}, \qquad \mu = \frac{m_1m_2}{m_1+m_2}$$

| Molecule | Translations | Rotations | Vibrations |
|---|---|---|---|
| nonlinear, $N$ atoms | 3 | 3 | $3N-6$ |
| linear, $N$ atoms | 3 | 2 | $3N-5$ |

A frequency job returns $3N$ eigenvalues; the 6 (or 5) near-zero ones are the
translations and rotations, discarded.

**Scaling factors.** Computed harmonic frequencies run high for two stacked
reasons — the harmonic model ignores anharmonicity (the real Morse well softens as
you climb, so real levels sit lower and closer), and method error stiffens the well
(HF overbinds). One empirical multiplier absorbs both, because both errors are
roughly proportional to the frequency:

| Method | Typical factor |
|---|---|
| HF | $\approx 0.89$ |
| B3LYP / good DFT | $\approx 0.96$ |

*From* [4.2](lessons/04-02-vibrational-frequencies.md)

### Selection rules by technique

A transition is "forbidden" when its transition-moment integral vanishes by
symmetry — the band is then weak, not absent, since vibrations briefly break the
symmetry.

| Technique | What it excites | Selection rule | Intensity set by |
|---|---|---|---|
| **IR absorption** | vibration | $\Delta v = \pm1$ (harmonic); the mode must **change the dipole moment** | $\lvert\partial\boldsymbol\mu/\partial Q\rvert^2$ along the normal-mode eigenvector |
| **Raman** | vibration | $\Delta v = \pm1$; the mode must **change the polarizability** | $\lvert\partial\alpha/\partial Q\rvert^2$; in centrosymmetric molecules IR- and Raman-active modes are mutually exclusive |
| **Microwave** | rotation | $\Delta J = \pm1$; needs a **permanent** dipole | dipole magnitude |
| **UV/Vis** | electronic | spin: $\Delta S = 0$; spatial: the integrand must contain the totally symmetric representation; **Laporte** ($g\leftrightarrow u$ only, since $\hat{\boldsymbol\mu}$ is odd) | oscillator strength $f_n \propto \omega_n\lvert\boldsymbol\mu_{0n}\rvert^2$ |
| **Photoelectron** | ionization | none of this form — every occupied level shows | band positions $\approx -\varepsilon_i$ (Koopmans) |
| **Atomic line spectra** | one-electron jump | $\Delta\ell = \pm1$, $\Delta S = 0$ | — |

Worked the usual way: from a totally symmetric singlet-$g$ ground state, only
**singlet $u$** final states are fully allowed. A $g\to g$ transition is
Laporte-forbidden; a singlet $\to$ triplet is spin-forbidden; both come out with
$f\approx0$.

The rotational, Raman, and atomic rules are used here but derived in physical
chemistry — see *Assumed, not taught here*.

*From* [4.2](lessons/04-02-vibrational-frequencies.md) *and* [4.3](lessons/04-03-electronic-spectra.md)

### Predicting a spectrum

$$\Delta E_{\text{HOMO}\to\text{LUMO}} \approx \varepsilon_\text{LUMO} - \varepsilon_\text{HOMO} \quad(\text{sighting shot only}), \qquad \lambda(\text{nm}) = \frac{1239.8}{E(\text{eV})}$$

| Level | What it gives | What it costs / misses |
|---|---|---|
| orbital gap | ordering of states, right ballpark | ignores relaxation and the electron–hole attraction — off by up to ~1 eV, usually too high |
| **CIS** | excited states from singly-excited determinants; energies **and** intensities | no correlation — overestimates by ~0.5–1 eV |
| **TD-DFT** | energies and oscillator strengths at ground-state DFT cost | fails badly for charge-transfer and Rydberg states (energies far too low) |

Each excited state contributes one $(\omega_n, f_n)$ stick; broaden each stick with
a Gaussian or Lorentzian to compare with a measured band.

*From* [4.3](lessons/04-03-electronic-spectra.md)

### From electronic energy to free energy

$$E_0 = E_\text{elec} + \underbrace{\tfrac12\sum_i h\nu_i}_{\text{ZPE}}, \qquad H(T) = E_0 + E_\text{trans} + E_\text{rot} + E_\text{vib}(T) + RT, \qquad G(T) = H(T) - TS(T)$$

with $E_\text{trans} = \tfrac32RT$, $E_\text{rot} = \tfrac32RT$ (nonlinear) or $RT$ (linear),
and $S(T)$ built from the same partition functions. **Everything past
$E_\text{elec}$ rides on the vibrational analysis, which is only valid at a genuine
minimum** — all frequencies real.

Error decomposition, the frame for judging any number:

$$P_\text{calc} - P_\text{exact} = \underbrace{\big(P_\text{calc} - P^\text{method}_\text{CBS}\big)}_{\text{basis-set error}} + \underbrace{\big(P^\text{method}_\text{CBS} - P_\text{exact}\big)}_{\text{method error}}$$

Push **both** axes; quote **relative** energies (they cancel most of the systematic
error, completely so for an isodesmic comparison); prefer benchmarked
method/basis pairings over a single lucky match.

*From* [4.4](lessons/04-04-reading-calculation-critically.md)

## Assumed, not taught here

This is a Tier 2 course: it *uses* the following without deriving them, and every
row says where the derivation lives.

| Fact | Where it's taught |
|---|---|
| The postulates, Dirac notation, Hermiticity, commutators | [quantum-mechanics card](../quantum-mechanics/reference.md#the-postulates), [1.3–1.5](../quantum-mechanics/lessons/01-03-hilbert-space-dirac-notation.md) |
| $[\hat x,\hat p] = i\hbar$ and the uncertainty relation | [quantum-mechanics 3.3](../quantum-mechanics/lessons/03-03-commutators-uncertainty.md) |
| Separation of variables, spherical harmonics, the exact hydrogen solution | [quantum-mechanics 4.3](../quantum-mechanics/lessons/04-03-spherical-harmonics-rigid-rotor.md), [4.4](../quantum-mechanics/lessons/04-04-hydrogen-atom.md); tabulated on the [QM card](../quantum-mechanics/reference.md#hydrogen-quantum-numbers-degeneracy-radial-averages) |
| Spin, $\alpha/\beta$ states, and the identical-particle postulate | [quantum-mechanics 4.5](../quantum-mechanics/lessons/04-05-spin-pauli-stern-gerlach.md), [5.1](../quantum-mechanics/lessons/05-01-identical-particles.md) |
| Creation/annihilation (second-quantized) operators $\hat a^\dagger,\hat a$ — used to write $\hat T_1,\hat T_2$ in [3.4](lessons/03-04-coupled-cluster-taste.md) | [quantum-mechanics 3.2](../quantum-mechanics/lessons/03-02-harmonic-oscillator-ladder-operators.md) for the algebra; occupation-number language in [stat-mech 4.1](../stat-mech/lessons/04-01-quantum-counting-occupation-numbers.md) |
| Time-dependent perturbation theory and the dipole selection rules behind $\boldsymbol\mu_{0n}$ | [quantum-mechanics 6.5](../quantum-mechanics/lessons/06-05-time-dependent-perturbation.md), [6.6](../quantum-mechanics/lessons/06-06-fermi-golden-rule-radiation.md), [QM card](../quantum-mechanics/reference.md#radiation-dipole-coupling-and-selection-rules) |
| Atomic term symbols $^{2S+1}L_J$ and Hund's rules | [physical-chemistry 4.4](../physical-chemistry/lessons/04-04-hydrogen-atom-atomic-spectra.md), [quantum-mechanics 4.6](../quantum-mechanics/lessons/04-06-addition-angular-momenta.md) |
| Point groups, inversion symmetry, $g/u$ labels, Laporte and $d$–$d$ intensity | [inorganic-chemistry 3.1](../inorganic-chemistry/lessons/03-01-symmetry-elements-operations.md), [3.2](../inorganic-chemistry/lessons/03-02-assigning-point-groups.md), [3.3](../inorganic-chemistry/lessons/03-03-electronic-spectra-dd-transitions.md) |
| Rotational and vibrational selection rules, IR vs. Raman activity | [physical-chemistry 4.5](../physical-chemistry/lessons/04-05-rotational-vibrational-spectroscopy.md) |
| Franck–Condon vibronic structure on an electronic band | [physical-chemistry 4.6](../physical-chemistry/lessons/04-06-electronic-spectroscopy.md) |
| Harmonic-oscillator levels $E_v = \hbar\omega(v+\tfrac12)$, the rigid rotor, the particle in a box | [physical-chemistry 4.3](../physical-chemistry/lessons/04-03-molecular-energy-levels-box-oscillator-rotor.md), [quantum-mechanics 3.1](../quantum-mechanics/lessons/03-01-harmonic-oscillator-analytic.md) |
| $\omega = \sqrt{k/m}$, reduced mass, "every well is a parabola near its bottom" | [mechanics-refresher 3.1](../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md) |
| Partition functions behind the thermal and entropy corrections | [physical-chemistry 4.1](../physical-chemistry/lessons/04-01-boltzmann-partition-function.md), [4.2](../physical-chemistry/lessons/04-02-partition-functions-to-thermodynamics.md) |
| $G = H - TS$ and what it decides | [physical-chemistry 1.3](../physical-chemistry/lessons/01-03-gibbs-helmholtz-energies.md) |
| Aufbau filling, screening, effective nuclear charge, bond order, $\sigma/\pi$ bonds | [general-chemistry card](../general-chemistry/reference.md#bond-order), [gen-chem 1.2](../general-chemistry/lessons/01-02-electron-configurations-periodic-table.md), [1.5](../general-chemistry/lessons/01-05-molecular-shape-vsepr-hybridization-mo.md) |
| Eigenvalues, diagonalization, the spectral theorem and matrix functions like $\mathbf S^{-1/2}$ | [linalg-refresher 3.1](../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md), [3.2](../linalg-refresher/lessons/03-02-diagonalization.md), [5.1](../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md) |
| Determinants, and why a repeated column kills one | [linalg-refresher 2.3](../linalg-refresher/lessons/02-03-determinants.md) |
| Lagrange multipliers (normalization constraints, the chemical potential $\mu$) | [calc-refresher 4.2](../calc-refresher/lessons/04-02-multivariable-optimization-lagrange.md) |
| Functional derivatives $\delta F/\delta\rho$ and the calculus of variations | [mathematical-methods-physics 5.1](../mathematical-methods-physics/lessons/05-01-calculus-of-variations-euler-lagrange.md) |
| Newton's method and quasi-Newton descent | [convex-optimization 4.2](../convex-optimization/lessons/04-02-newtons-method.md), [numerical-analysis 1.5](../numerical-analysis/lessons/01-05-newton-secant.md) |
| Fixed-point iteration and its convergence | [numerical-analysis 1.4](../numerical-analysis/lessons/01-04-bisection-fixed-point.md) |
| The uniform electron gas behind LDA, and Fermi–Dirac statistics | [stat-mech 4.2](../stat-mech/lessons/04-02-bose-einstein-fermi-dirac.md), [4.4](../stat-mech/lessons/04-04-ideal-fermi-gas.md) |

## Pitfalls

### Units, notation, and averages

- $|c_n|^2$ gives the *probability* of an outcome, not the outcome; the expectation value is generally **not** one of the eigenvalues. *([1.1](lessons/01-01-quantum-toolkit-refreshed.md))*
- The bra carries the complex conjugate: $\langle\psi|\psi\rangle = \int\psi^{*}\psi\,d\tau$, never $\int\psi^2$. *([1.1](lessons/01-01-quantum-toolkit-refreshed.md))*
- Atomic units are exact rulers, not an approximation — but set the constants to 1 **everywhere or nowhere**; re-inserting a stray $\hbar$ double-counts. *([1.1](lessons/01-01-quantum-toolkit-refreshed.md))*
- A commutator's value is the *failure to commute*, and only when applied to a function: $[\hat x,\hat p] = i\hbar$ does not say the operators equal $i\hbar$. *([1.1](lessons/01-01-quantum-toolkit-refreshed.md))*

### Orbitals and nodes

- The electron is **not** most likely at the nucleus: the $r^2$ in $P(r) = r^2|R|^2$ kills the density there. *([1.2](lessons/01-02-hydrogen-atom-revisited.md))*
- Radial nodes ($n-\ell-1$) are spheres; angular nodes ($\ell$) are planes and cones. A $2p$ has zero radial nodes and one angular node. *([1.2](lessons/01-02-hydrogen-atom-revisited.md))*
- $E$ independent of $\ell$ is a **hydrogen-only** accident of the $1/r$ potential; screening lifts it in every real atom, and that shift is the chemistry. *([1.2](lessons/01-02-hydrogen-atom-revisited.md))*
- Most-probable radius $\neq$ mean radius — $P(r)$ is right-skewed, so $\langle r\rangle > r_\text{mp}$. *([1.2](lessons/01-02-hydrogen-atom-revisited.md))*

### Variation and perturbation

- A low variational energy does **not** mean an accurate wavefunction everywhere — the energy is a smoothed average, and local features (cusps, dipoles) can still be wrong. *([1.3](lessons/01-03-variational-principle.md))*
- Adding a basis function can never *raise* a variational energy; "bigger basis, lower energy" is a live sanity check. *([1.3](lessons/01-03-variational-principle.md), [2.5](lessons/02-05-basis-sets.md))*
- The bound is one-sided, ground-state-only, and only for a legal trial function; an excited-state estimate binds nothing unless you enforce orthogonality to the states below. *([1.3](lessons/01-03-variational-principle.md))*
- You never need the corrected wavefunction to get the first-order energy — the state correction is one order beyond the energy it produces. *([1.4](lessons/01-04-perturbation-theory.md))*
- "No first-order term" (wrong symmetry, $H'_{nn}=0$) does not mean "no effect" — the leading effect is then second order. *([1.4](lessons/01-04-perturbation-theory.md))*
- A **large** second-order correction signals a *small denominator* — near-degeneracy, exactly where the series is failing. Trust corrections that are shrinking, not ones that are huge. This is the same warning for MP2. *([1.4](lessons/01-04-perturbation-theory.md), [3.3](lessons/03-03-moller-plesset-mp2.md))*

### Born–Oppenheimer and the surface

- BO does **not** say the nuclei don't move — clamping is step one; step two puts them back on the surface to vibrate, rotate, and react. *([1.5](lessons/01-05-born-oppenheimer-approximation.md))*
- Nuclear kinetic energy is *deferred*, not ignored. What BO neglects is the non-adiabatic **coupling between electronic states** it generates. *([1.5](lessons/01-05-born-oppenheimer-approximation.md))*
- The single-surface picture collapses at conical intersections and avoided crossings — which is precisely where photochemistry lives. *([1.5](lessons/01-05-born-oppenheimer-approximation.md))*
- The parabola-at-the-bottom is only leading order: the real well is anharmonic and flattens toward dissociation. *([1.5](lessons/01-05-born-oppenheimer-approximation.md), [4.2](lessons/04-02-vibrational-frequencies.md))*

### MO diagrams and overlap

- $\beta$, not $S$, **is** the bond. Overlap merely lets $\beta$ be nonzero; the energy lowering is delocalization. *([1.6](lessons/01-06-h2-plus-lcao.md))*
- The split is never symmetric — antibonding rises by $(1+S)/(1-S)$ more than bonding falls. Symmetric splitting is what you get by wrongly setting $S=0$ while keeping $\beta$. *([1.6](lessons/01-06-h2-plus-lcao.md))*
- Normalization is $1/\sqrt{2(1\pm S)}$, not $1/\sqrt2$ — the cross term $2\langle A|B\rangle = 2S$ does not vanish. *([1.6](lessons/01-06-h2-plus-lcao.md))*

### Antisymmetry and exchange

- Pauli is a **symmetry**, not a force: same-spin electrons would still avoid each other with the Coulomb interaction switched off. *([2.1](lessons/02-01-many-electrons-antisymmetry.md))*
- A Slater determinant is not a product of orbitals — the leading Hartree-product term is one of $N!$ signed permutations; drop the rest and you lose antisymmetry, exchange, and Pauli at once. *([2.1](lessons/02-01-many-electrons-antisymmetry.md))*
- Overall antisymmetry can be met as (symmetric space)$\times$(singlet spin) *or* (antisymmetric space)$\times$(triplet spin); same-spin electrons are forced into the second branch, the one with the Fermi hole. *([2.1](lessons/02-01-many-electrons-antisymmetry.md))*
- Exchange is not a small correction — $\hat K$ is the same order as Coulomb, and dropping it gives the qualitatively wrong pre-1930 Hartree method. *([2.2](lessons/02-02-hartree-fock-equations.md))*
- $\hat J$ is local (multiply by a potential); $\hat K$ is **nonlocal** and acts only between same-spin electrons. That structural difference is why DFT's attempt to fake exchange locally is hard. *([2.2](lessons/02-02-hartree-fock-equations.md))*

### Hartree–Fock and SCF

- **Never** report $E_\text{HF} = \sum_i\varepsilon_i$ — each orbital energy already contains that electron's full repulsion with all the others, so the sum double-counts every pair. Subtract $\tfrac12\sum_{ij}(J_{ij}-K_{ij})$. And remember to add the nuclear repulsion for a total energy. *([2.2](lessons/02-02-hartree-fock-equations.md), [2.3](lessons/02-03-self-consistent-field.md))*
- Koopmans is two approximations stacked (frozen orbitals **and** no correlation) that happen to point opposite ways; the cancellation fails for inner-shell or strongly relaxing cases. *([2.3](lessons/02-03-self-consistent-field.md))*
- A plateaued energy is not convergence — the density can oscillate between two patterns of equal energy. Test $\Delta E$ **and** $\Delta\mathbf P$. *([2.3](lessons/02-03-self-consistent-field.md))*
- $\mathbf S\neq\mathbf I$ is physics, not a nuisance: silently dropping it orthogonalizes the AOs and changes the answer. Remove it honestly with $\mathbf S^{-1/2}$. *([2.4](lessons/02-04-roothaan-hall-matrices.md))*
- One diagonalization of $\mathbf{FC}=\mathbf{SC}\boldsymbol\varepsilon$ only gives orbitals consistent with your *guess*. It is a fixed-point search in an eigenvalue costume. *([2.4](lessons/02-04-roothaan-hall-matrices.md))*
- Don't discard the virtual orbitals — they are the workspace for every correlated method and for the LUMO in spectroscopy. *([2.4](lessons/02-04-roothaan-hall-matrices.md))*
- Cost scales with **basis functions**, not electrons: $\sim K^4$ two-electron integrals. *([2.4](lessons/02-04-roothaan-hall-matrices.md))*

### Basis sets

- More primitives per contraction (`STO-6G`) does **not** climb the quality hierarchy — it is still minimal. Contraction depth and basis quality are independent axes. *([2.5](lessons/02-05-basis-sets.md))*
- A huge basis removes only basis-set error. Correlation error is a flaw in the *method* and no basis cures it. Two convergences, both of which you must control. *([2.5](lessons/02-05-basis-sets.md), [4.4](lessons/04-04-reading-calculation-critically.md))*
- Anions, lone pairs, and weak interactions without diffuse functions give wrong answers with confident decimals. *([2.5](lessons/02-05-basis-sets.md), [4.4](lessons/04-04-reading-calculation-critically.md))*
- Any fragment-vs-complex comparison in a shared basis is overbound until you counterpoise-correct. *([2.5](lessons/02-05-basis-sets.md))*

### Correlation methods

- $E_\text{corr} > 0$ is a bug, never a result — HF is variational. *([3.1](lessons/03-01-correlation-problem.md))*
- "No correlation" means "no Coulomb hole," not "no repulsion" — HF has the full average Coulomb term and *exact* exchange. *([3.1](lessons/03-01-correlation-problem.md))*
- "Exact" in $E_\text{corr}$ means full CI **in the chosen basis**, not experiment. *([3.1](lessons/03-01-correlation-problem.md), [3.2](lessons/03-02-configuration-interaction.md))*
- More determinants does not automatically mean dynamic correlation: one determinant with a *large* weight is static correlation. It is the weight profile that names the flavor. *([3.1](lessons/03-01-correlation-problem.md))*
- Singles are not the leading correction — Brillouin kills their direct coupling, so doubles carry the correlation energy. *([3.2](lessons/03-02-configuration-interaction.md), [3.3](lessons/03-03-moller-plesset-mp2.md))*
- Variational and size-consistent are **different** properties: CISD is the first without the second, MP2 and CC are the second without the first. *([3.2](lessons/03-02-configuration-interaction.md), [3.3](lessons/03-03-moller-plesset-mp2.md), [3.4](lessons/03-04-coupled-cluster-taste.md))*
- There is no useful "MP1": $E^{(0)}+E^{(1)}$ *is* the Hartree–Fock energy. *([3.3](lessons/03-03-moller-plesset-mp2.md))*
- CCSD's *cluster operator* stops at doubles; its *wavefunction* does not — that distinction is the whole advantage over CISD. *([3.4](lessons/03-04-coupled-cluster-taste.md))*
- CCSD(T) is the gold standard **for single-reference problems only**; on a stretched bond or a biradical the perturbative triples fail exactly as MP2 does. *([3.4](lessons/03-04-coupled-cluster-taste.md), [4.4](lessons/04-04-reading-calculation-critically.md))*

### DFT

- Collapsing $\Psi$ to $\rho$ loses nothing **for the ground state** — that is the whole HK miracle, and it does not extend casually to excited states. *([3.5](lessons/03-05-dft-hohenberg-kohn.md))*
- Hohenberg–Kohn is an existence theorem, not an algorithm: the exactness of the theorems does not transfer to the approximate functional you actually run. *([3.5](lessons/03-05-dft-hohenberg-kohn.md))*
- Don't equate DFT with Thomas–Fermi: orbital-free density kinetics is so bad it predicts **no chemical bonding at all** (Teller). Kohn–Sham exists precisely to get $T$ almost exactly from orbitals. *([3.5](lessons/03-05-dft-hohenberg-kohn.md), [3.6](lessons/03-06-dft-kohn-sham.md))*
- Kohn–Sham orbitals are auxiliary functions of a fictitious system — no exact Koopmans, and their eigenvalues are not ionization potentials. Use them for intuition, report energies and densities. *([3.6](lessons/03-06-dft-kohn-sham.md), [4.4](lessons/04-04-reading-calculation-critically.md))*
- A higher rung on Jacob's ladder is usually but not always more accurate — the ladder ranks ingredients, not guarantees. *([3.6](lessons/03-06-dft-kohn-sham.md))*
- "It has correlation" does not mean "it works everywhere": self-interaction error, missing dispersion, and static correlation are structural blind spots. *([3.6](lessons/03-06-dft-kohn-sham.md))*

### Geometry, frequencies, and spectra

- Zero gradient means **stationary**, not minimum — a transition state has zero gradient too. Always check the Hessian or run frequencies. *([4.1](lessons/04-01-pes-geometry-optimization.md))*
- A downhill optimizer can never reach a pass, however close you start; TS location needs a saddle search. *([4.1](lessons/04-01-pes-geometry-optimization.md))*
- "Optimized" means the nearest **local** minimum to your guess — the global minimum needs several starting geometries. *([4.1](lessons/04-01-pes-geometry-optimization.md))*
- One imaginary frequency is *good* (a genuine TS); two or more is a higher-order saddle; **any** at a claimed minimum means re-optimize. A tiny imaginary frequency (under about $50i$ cm⁻¹) at a minimum is usually grid noise. *([4.1](lessons/04-01-pes-geometry-optimization.md), [4.2](lessons/04-02-vibrational-frequencies.md), [4.4](lessons/04-04-reading-calculation-critically.md))*
- Mass-weighting is not optional — diagonalizing the bare Hessian gives force constants, not frequencies, and mixes light and heavy motions wrongly. *([4.2](lessons/04-02-vibrational-frequencies.md))*
- Report the **scaled** harmonic frequency; the raw number is systematically high. *([4.2](lessons/04-02-vibrational-frequencies.md))*
- The HOMO–LUMO gap is not the excitation energy — it ignores the electron–hole attraction and orbital relaxation, and can be off by more than an eV. *([4.3](lessons/04-03-electronic-spectra.md))*
- A computed $f\approx0$ is not a mistake — it is a correctly predicted dark state, still real and still relevant to photochemistry. *([4.3](lessons/04-03-electronic-spectra.md))*
- Standard-functional TD-DFT puts charge-transfer and Rydberg states far too low; re-run with a range-separated functional before believing them. *([4.3](lessons/04-03-electronic-spectra.md))*

### Reading a result

- Agreement with experiment is not proof of a good calculation — a small basis (underbinds) and an overbinding method can cancel, and the luck evaporates the moment you change system or property. *([4.4](lessons/04-04-reading-calculation-critically.md))*
- Improving one axis is not enough: gorgeous CCSD(T) in a tiny basis and a huge basis on bare HF are both far from the corner. *([4.4](lessons/04-04-reading-calculation-critically.md))*
- A non-converged SCF or geometry gives a number that sits on no part of the real surface — check that the criteria were actually met. *([4.4](lessons/04-04-reading-calculation-critically.md))*
- Quote relative energies, and rig the comparison (isodesmic, isogyric) so the errors you can't remove are the errors that cancel. *([4.4](lessons/04-04-reading-calculation-critically.md))*
