# Condensed Matter / Solid State · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Condensed matter is one move repeated five times: **find the periodicity, go to
reciprocal space, and count states.** Do it to the ion positions and you get
diffraction; to their displacements, phonons; to the electrons, bands; to a doped
band edge, a transistor; to the spins and the pairs, magnetism and
superconductivity. This card holds the vocabulary of that reciprocal space, the
band-structure toolkit in both of its limits, the scorecard of the standard
models, and every transport and magnetism relation with its units attached.

## Notation

Symbols are grouped by where they first appear. **Read the clash warnings** — this
course recycles letters ruthlessly.

| Symbol | Means | First used |
|---|---|---|
| $\mathbf{a}_1,\mathbf{a}_2,\mathbf{a}_3$ | primitive vectors — the three steps that generate the lattice | [1.1](lessons/01-01-lattices-bases-bravais.md) |
| $\mathbf{R}$ | a direct lattice vector, $\sum n_i\mathbf{a}_i$ with integer $n_i$ | [1.1](lessons/01-01-lattices-bases-bravais.md) |
| $\mathbf{d}_j$ | position of basis atom $j$ *relative to* its lattice point | [1.1](lessons/01-01-lattices-bases-bravais.md) |
| $Z$ | coordination number — how many nearest neighbours a site has | [1.1](lessons/01-01-lattices-bases-bravais.md) |
| $a$ | lattice constant (cubic cell edge, or chain spacing in Module 2) | [1.2](lessons/01-02-structures-miller-indices.md) |
| $(hkl)$, $[uvw]$ | a plane (reciprocal intercepts) and a direction (raw components) | [1.2](lessons/01-02-structures-miller-indices.md) |
| $\{hkl\}$, $\langle uvw\rangle$ | the whole symmetry-equivalent family of planes / directions | [1.2](lessons/01-02-structures-miller-indices.md) |
| $d_{hkl}$ | spacing between successive $(hkl)$ planes | [1.2](lessons/01-02-structures-miller-indices.md) |
| $\mathbf{b}_1,\mathbf{b}_2,\mathbf{b}_3$ | primitive **reciprocal** vectors, defined by $\mathbf{b}_i\cdot\mathbf{a}_j = 2\pi\delta_{ij}$ | [1.3](lessons/01-03-reciprocal-lattice.md) |
| $\mathbf{G}$ | a reciprocal lattice vector — a wavevector the crystal "doesn't see" | [1.3](lessons/01-03-reciprocal-lattice.md) |
| BZ | Brillouin zone: the Wigner–Seitz cell of the reciprocal lattice | [1.3](lessons/01-03-reciprocal-lattice.md) |
| $\theta$ | Bragg **glancing** angle, measured from the plane (detector sits at $2\theta$) | [1.4](lessons/01-04-xray-diffraction-bragg.md) |
| $\Delta\mathbf{k}$ | scattering vector $\mathbf{k}_{\text{out}}-\mathbf{k}_{\text{in}}$ | [1.4](lessons/01-04-xray-diffraction-bragg.md) |
| $f_j$ | atomic form factor — one atom's scattering amplitude, $\to Z_j$ at zero angle | [1.5](lessons/01-05-structure-factor.md) |
| $S_{hkl}$ | structure factor — the basis's phased vote on whether a peak is bright | [1.5](lessons/01-05-structure-factor.md) |
| $C$ | spring constant of the chain, N/m — **not** heat capacity, **not** the Curie constant | [2.1](lessons/02-01-monatomic-chain.md) |
| $u_n$, $v_n$ | displacement of atom $n$ (heavy / light sublattice in the diatomic chain) | [2.1](lessons/02-01-monatomic-chain.md) |
| $\omega(k)$ | dispersion relation — frequency as a function of wavevector | [2.1](lessons/02-01-monatomic-chain.md) |
| $v_s$, $v_g$ | sound speed, and group velocity $d\omega/dk$ (the speed that carries energy) | [2.1](lessons/02-01-monatomic-chain.md) |
| $\omega_\pm$ | optical ($+$) and acoustic ($-$) branch of the diatomic chain | [2.2](lessons/02-02-diatomic-chain-branches.md) |
| $\langle n_{\mathbf{k},s}\rangle$ | mean phonon number in mode $(\mathbf{k},s)$; $s$ is the branch label | [2.3](lessons/02-03-phonons-quantization.md) |
| $\hbar\mathbf{k}$ | **crystal** momentum — a symmetry label, conserved only modulo $\mathbf{G}$ | [2.3](lessons/02-03-phonons-quantization.md) |
| $g(\omega)$, $g(E)$ | density of states: modes (or electron states) per unit frequency / energy | [2.3](lessons/02-03-phonons-quantization.md) |
| $\omega_D$, $\Theta_D$ | Debye cutoff frequency and Debye temperature $\hbar\omega_D/k_B$ | [2.4](lessons/02-04-heat-capacity-einstein-debye.md) |
| $\omega_E$ | the single Einstein frequency every mode is pretended to share | [2.4](lessons/02-04-heat-capacity-einstein-debye.md) |
| $\gamma$ | **Grüneisen parameter** $-d\ln\omega/d\ln V$ here — *clashes* with the Sommerfeld $\gamma$ of 3.2 | [2.5](lessons/02-05-anharmonicity-thermal.md) |
| $B$ | **bulk modulus** (Pa) here — *clashes* with magnetic flux density $B$ in Module 5 | [2.5](lessons/02-05-anharmonicity-thermal.md) |
| $\alpha_V$, $\alpha_L$ | volume and linear thermal expansion coefficients, $\alpha_L=\alpha_V/3$ | [2.5](lessons/02-05-anharmonicity-thermal.md) |
| $\kappa$, $\ell$ | thermal conductivity and phonon mean free path | [2.5](lessons/02-05-anharmonicity-thermal.md) |
| $k_F$, $E_F$, $v_F$, $T_F$ | Fermi wavevector, energy, velocity, temperature — the four scales of a metal | [3.1](lessons/03-01-free-electron-gas.md) |
| $n$ | carrier number **density** — *clashes* with the band index $n$ of 3.3 | [3.1](lessons/03-01-free-electron-gas.md) |
| $f(\varepsilon)$ | Fermi–Dirac occupancy; $\mu$ is its chemical potential (the Fermi level) | [3.1](lessons/03-01-free-electron-gas.md) |
| $\gamma$ | **Sommerfeld coefficient**: $C_{\text{el}}=\gamma T$, units $\mathrm{J\,mol^{-1}K^{-2}}$ | [3.2](lessons/03-02-fermi-surface-heat-capacity.md) |
| $u_{n\mathbf{k}}$ | the lattice-periodic part of a Bloch state; $n$ = band index | [3.3](lessons/03-03-blochs-theorem.md) |
| $\hat T_{\mathbf{R}}$ | lattice-translation operator; its eigenvalue is the phase $e^{i\mathbf{k}\cdot\mathbf{R}}$ | [3.3](lessons/03-03-blochs-theorem.md) |
| $U_G$ | Fourier component of the periodic potential at $\mathbf{G}$ — sets the gap | [3.4](lessons/03-04-nearly-free-electron.md) |
| $\varepsilon_0$ | tight-binding **on-site energy** — *clashes* with the vacuum permittivity of 4.5 | [3.5](lessons/03-05-tight-binding.md) |
| $t$ | hopping (transfer) integral; bigger $t$ = more overlap = wider band | [3.5](lessons/03-05-tight-binding.md) |
| $W$ | **bandwidth** $4t$ here — *clashes* with the depletion width $W$ of 4.5 | [3.5](lessons/03-05-tight-binding.md) |
| $\Gamma$, $X$, $L$ | high-symmetry points of the BZ ($\Gamma$ = zone centre) | [3.6](lessons/03-06-bands-zones-dos.md) |
| $m^*$ | effective mass $\hbar^2(d^2E/dk^2)^{-1}$ — the lattice's whole effect, in one number | [3.7](lessons/03-07-metals-insulators-semiconductors.md) |
| $E_g$, $E_c$, $E_v$ | band gap, conduction-band edge, valence-band edge | [3.7](lessons/03-07-metals-insulators-semiconductors.md) |
| $n$, $p$ | electron and hole densities (per $\mathrm{cm^{3}}$ in device work) | [4.1](lessons/04-01-intrinsic-carriers.md) |
| $n_i$ | intrinsic carrier concentration — a property of the host, not the doping | [4.1](lessons/04-01-intrinsic-carriers.md) |
| $N_c$, $N_v$ | effective densities of states: "how many seats sit within $k_BT$ of the edge" | [4.1](lessons/04-01-intrinsic-carriers.md) |
| $N_d$, $N_a$ | donor and acceptor densities; $E_d$, $E_a$ are their **binding** energies | [4.2](lessons/04-02-doping-extrinsic.md) |
| $\varepsilon_r$ | relative permittivity of the host (12 for Si) — screens the donor's Coulomb pull | [4.2](lessons/04-02-doping-extrinsic.md) |
| $T^\ast$ | intrinsic-onset temperature, where $n_i(T)$ overtakes the doping | [4.3](lessons/04-03-fermi-level-temperature-doping.md) |
| $\tau$ | mean scattering time between collisions (s) | [4.4](lessons/04-04-transport-mobility-hall.md) |
| $\mu$ | **mobility** $e\tau/m^*$ here, $\mathrm{cm^2\,V^{-1}s^{-1}}$ — *clashes* with $\mu$ = chemical potential and with the magnetic moment $\mu$ of 5.1 | [4.4](lessons/04-04-transport-mobility-hall.md) |
| $\sigma$, $\rho$ | conductivity (S/m) and resistivity ($\Omega\cdot\mathrm{m}$), $\rho=1/\sigma$ | [4.4](lessons/04-04-transport-mobility-hall.md) |
| $R_H$ | Hall coefficient $E_y/(J_xB_z) = 1/nq$, $\mathrm{m^3/C}$ — its **sign** is the carrier's | [4.4](lessons/04-04-transport-mobility-hall.md) |
| $V_{bi}$, $W$, $I_0$ | junction built-in potential, depletion width, reverse saturation current | [4.5](lessons/04-05-pn-junction.md) |
| $\chi$ | magnetic susceptibility $M/H$ (dimensionless in SI) | [5.1](lessons/05-01-dia-paramagnetism.md) |
| $M$, $H$ | magnetization (moment per volume) and applied field strength, both A/m | [5.1](lessons/05-01-dia-paramagnetism.md) |
| $\mu_B$ | Bohr magneton $e\hbar/2m = 9.274\times10^{-24}\ \mathrm{J/T}$ | [5.1](lessons/05-01-dia-paramagnetism.md) |
| $C$ | **Curie constant** here (units K) — third meaning of $C$ in this course | [5.1](lessons/05-01-dia-paramagnetism.md) |
| $\lambda$ | **Weiss molecular-field constant** here — *clashes* with X-ray wavelength $\lambda$ (1.4) and penetration depth $\lambda_L$ (5.4) | [5.2](lessons/05-02-exchange-ferromagnetism.md) |
| $T_C$ | Curie temperature (ferromagnetic ordering); $T_N$ = Néel temperature | [5.2](lessons/05-02-exchange-ferromagnetism.md) |
| $J$ | exchange constant (energy). $J>0$ ferromagnetic, $J<0$ antiferromagnetic | [5.3](lessons/05-03-heisenberg-ising.md) |
| $\mathbf{S}_i$ | spin operator on site $i$ (dimensionless, in units of $\hbar$) | [5.3](lessons/05-03-heisenberg-ising.md) |
| $T_c$ | **superconducting** critical temperature — lower-case $c$, unlike $T_C$ above | [5.4](lessons/05-04-superconductivity-phenomena.md) |
| $\lambda_L$, $n_s$ | London penetration depth and superconducting-carrier density | [5.4](lessons/05-04-superconductivity-phenomena.md) |
| $H_c$, $H_{c1}$, $H_{c2}$ | critical field (type I); lower and upper critical fields (type II) | [5.4](lessons/05-04-superconductivity-phenomena.md) |
| $\Phi_0$ | flux quantum $h/2e = 2.07\times10^{-15}\ \mathrm{Wb}$ — the $2$ is the pairing | [5.4](lessons/05-04-superconductivity-phenomena.md) |
| $\Delta$, $\xi$ | superconducting energy gap and coherence length (pair size) | [5.5](lessons/05-05-cooper-pairs-bcs.md) |
| $\nu$, $\sigma_{xy}$ | quantum Hall filling integer and Hall conductance | [5.6](lessons/05-06-topological-correlated.md) |
| $U$ | Hubbard on-site repulsion (energy cost of double occupancy) | [5.6](lessons/05-06-topological-correlated.md) |

## Definitions

### Bravais lattice

An infinite grid of points that looks *identical* seen from every one of its
points. Equivalently, all integer combinations of three non-coplanar primitive
vectors.

$$\mathbf{R} = n_1\mathbf{a}_1 + n_2\mathbf{a}_2 + n_3\mathbf{a}_3, \qquad n_i \in \mathbb{Z}$$

There are 5 in 2D and 14 in 3D.

*Introduced:* [1.1](lessons/01-01-lattices-bases-bravais.md)

### Basis

The little cluster of atoms stamped at every lattice point. Crystal = lattice +
basis; atomic positions are the vectors $\mathbf{R}+\mathbf{d}_j$.

*Introduced:* [1.1](lessons/01-01-lattices-bases-bravais.md)

### Primitive cell

The smallest tile that, repeated at every lattice point, fills space exactly once
— so it contains exactly **one** lattice point. Its shape is not unique; its
volume is.

$$V_{\text{cell}} = |\mathbf{a}_1\cdot(\mathbf{a}_2\times\mathbf{a}_3)|$$

A **conventional cell** is a bigger, more symmetric box (bcc: 2 points, fcc: 4)
chosen to display the symmetry.

*Introduced:* [1.1](lessons/01-01-lattices-bases-bravais.md)

### Wigner–Seitz cell

A lattice point's territory: everywhere closer to it than to any other point.
Built from the perpendicular bisectors of the lines to the neighbours. Unique,
primitive, and carries the full point symmetry.

*Introduced:* [1.1](lessons/01-01-lattices-bases-bravais.md)

### Packing fraction

Fraction of the cell's volume actually occupied by touching hard spheres. The
number that ranks the standard structures: $0.52$ (sc) $< 0.68$ (bcc) $< 0.74$
(fcc = hcp, the densest equal-sphere packing).

*Introduced:* [1.2](lessons/01-02-structures-miller-indices.md)

### Miller indices

A coordinate-free name for a family of parallel lattice planes: take the axis
intercepts, invert them, clear fractions to the smallest integers, write
$(hkl)$. A plane parallel to an axis scores $0$ there; a bar means negative.

*Introduced:* [1.2](lessons/01-02-structures-miller-indices.md)

### Reciprocal lattice

The set of wavevectors that "see" the crystal as perfectly repeating — a plane
wave $e^{i\mathbf{G}\cdot\mathbf{r}}$ is unchanged by every lattice translation.

$$e^{i\mathbf{G}\cdot\mathbf{R}} = 1 \ \ \text{for all } \mathbf{R} \qquad\Longleftrightarrow\qquad \mathbf{G}\cdot\mathbf{R} = 2\pi\times\text{integer}$$

It is the support of the Fourier transform of any lattice-periodic function.

*Introduced:* [1.3](lessons/01-03-reciprocal-lattice.md)

### First Brillouin zone

The Wigner–Seitz cell of the *reciprocal* lattice — the home cell for
wavevectors. Every distinct wave state (phonon or electron) can be labelled by a
$\mathbf{k}$ inside it; anything outside is an alias.

*Introduced:* [1.3](lessons/01-03-reciprocal-lattice.md)

### Structure factor

The basis's phased vote on each allowed reflection: sum every atom's scattering
amplitude with a phase recording where it sits in the cell. Measured intensity is
$I_{hkl}\propto|S_{hkl}|^2$, so $S_{hkl}=0$ is a **systematic absence**.

$$S_{hkl} = \sum_j f_j\,\exp\!\big[2\pi i\,(h x_j + k y_j + l z_j)\big]$$

with $(x_j,y_j,z_j)$ the atom's *fractional* coordinates.

*Introduced:* [1.5](lessons/01-05-structure-factor.md)

### Dispersion relation

The curve $\omega(k)$ (phonons) or $E(k)$ (electrons) that says what frequency or
energy goes with each wavevector. Its **slope** is the group velocity; its
**curvature** is the effective mass; its **flat spots** are van Hove
singularities.

*Introduced:* [2.1](lessons/02-01-monatomic-chain.md)

### Acoustic and optical branches

With $p$ atoms per cell, each $\mathbf{k}$ carries $3p$ modes: **3 acoustic**
branches (neighbours in phase, $\omega\to0$ at $k=0$, ordinary sound) and
$3p-3$ **optical** ones (neighbours out of phase, finite $\omega$ at $k=0$, and
IR-active if the atoms are oppositely charged). Between them can sit a
**forbidden frequency gap** — the phonon ancestor of the electronic band gap.

*Introduced:* [2.2](lessons/02-02-diatomic-chain-branches.md)

### Phonon

One quantum of a normal mode: energy $\hbar\omega_{\mathbf{k}}$, crystal
momentum $\hbar\mathbf{k}$. A boson with $\mu = 0$ (phonon number isn't
conserved), delocalized over the whole lattice.

$$E_{\mathbf{k},s} = \left(n_{\mathbf{k},s}+\tfrac12\right)\hbar\omega_{\mathbf{k},s}$$

*Introduced:* [2.3](lessons/02-03-phonons-quantization.md)

### Normal and Umklapp processes

In a phonon collision, crystal momentum is conserved only modulo $\mathbf{G}$.
$\mathbf{G}=0$ is a **Normal** process (drift preserved, no thermal resistance);
$\mathbf{G}\neq0$ is an **Umklapp** process — the resultant is folded back into the
first BZ and $\hbar\mathbf{G}$ is dumped into the lattice, which is the *only*
way a heat current gets degraded.

$$\mathbf{k}_1 + \mathbf{k}_2 = \mathbf{k}_3 + \mathbf{G}$$

*Introduced:* [2.3](lessons/02-03-phonons-quantization.md), used in [2.5](lessons/02-05-anharmonicity-thermal.md)

### Van Hove singularity

A non-smooth spike in $g(\omega)$ or $g(E)$ wherever the dispersion goes flat
($\nabla_{\mathbf{k}}\omega = 0$): many wavevectors crowd into one energy. In 1D
it is a $1/\sqrt{\ }$ divergence; in 3D a square-root edge or a kink. The
divergence is integrable — the state *count* stays finite.

*Introduced:* [2.3](lessons/02-03-phonons-quantization.md), [3.6](lessons/03-06-bands-zones-dos.md)

### Debye temperature

$\Theta_D = \hbar\omega_D/k_B$ — the temperature at which the *stiffest* lattice
mode's quantum equals $k_BT$. The single material-specific number in the Debye
model: above it a solid is classical, below it modes freeze out.

*Introduced:* [2.4](lessons/02-04-heat-capacity-einstein-debye.md)

### Grüneisen parameter

How much a phonon's frequency stiffens when you squeeze the crystal — the
dimensionless measure of anharmonicity. Typically 1–3; exactly $0$ for a
harmonic crystal, which is why a harmonic crystal does not expand *at all*.

$$\gamma \equiv -\frac{d\ln\omega}{d\ln V}$$

*Introduced:* [2.5](lessons/02-05-anharmonicity-thermal.md)

### Fermi energy and Fermi surface

Fill the states from the bottom up like water in a tank; the water level is
$E_F$, and the surface separating filled from empty states in $\mathbf{k}$-space
is the **Fermi surface** (a sphere of radius $k_F$ for free electrons, a wild
shape in a real crystal). Essentially every electronic property is decided by the
electrons living on it.

*Introduced:* [3.1](lessons/03-01-free-electron-gas.md), [3.2](lessons/03-02-fermi-surface-heat-capacity.md)

### Degenerate gas

A gas whose energy scale is set by Pauli stacking rather than by temperature:
$T \ll T_F$. Every metal qualifies up to its melting point ($T_F\sim10^4$–$10^5$ K),
which is why Fermi–Dirac and not Maxwell–Boltzmann.

*Introduced:* [3.1](lessons/03-01-free-electron-gas.md)

### Bloch's theorem

In a periodic potential, every energy eigenstate is a plane wave wearing
lattice-periodic clothing — so a perfect crystal never scatters its own
electrons.

$$\psi_{n\mathbf{k}}(\mathbf{r}) = e^{i\mathbf{k}\cdot\mathbf{r}}\,u_{n\mathbf{k}}(\mathbf{r}), \qquad u_{n\mathbf{k}}(\mathbf{r}+\mathbf{R}) = u_{n\mathbf{k}}(\mathbf{r})$$

$$\text{equivalently}\qquad \psi_{n\mathbf{k}}(\mathbf{r}+\mathbf{R}) = e^{i\mathbf{k}\cdot\mathbf{R}}\,\psi_{n\mathbf{k}}(\mathbf{r})$$

*Introduced:* [3.3](lessons/03-03-blochs-theorem.md)

### Crystal momentum

The label $\hbar\mathbf{k}$ on a Bloch state. **Not** true momentum — a Bloch
state is not an eigenstate of $-i\hbar\nabla$ — but the eigenvalue of lattice
translation, defined only modulo $\mathbf{G}$ and conserved only modulo
$\mathbf{G}$. That modulo is what makes Umklapp possible.

*Introduced:* [3.3](lessons/03-03-blochs-theorem.md), [2.3](lessons/02-03-phonons-quantization.md)

### Energy band

For each $\mathbf{k}$ in the zone the cell problem has a discrete ladder of
solutions $\varepsilon_1(\mathbf{k})\le\varepsilon_2(\mathbf{k})\le\cdots$;
tracing $\varepsilon_n$ across the zone gives band $n$. **Every band holds $2N$
electrons — exactly 2 per unit cell**, counting spin.

*Introduced:* [3.3](lessons/03-03-blochs-theorem.md), [3.6](lessons/03-06-bands-zones-dos.md)

### Zone schemes

Three ways to draw one band structure: **extended** (band $n$ in zone $n$, closest
to the free parabola), **reduced** (everything folded into the first zone by
$\mathbf{k}\to\mathbf{k}+\mathbf{G}$ — the standard picture), and **repeated**
(the reduced picture tiled periodically). Same physics, different bookkeeping.

*Introduced:* [3.6](lessons/03-06-bands-zones-dos.md)

### Effective mass

Near a band extremum the band is parabolic, and the electron responds to a force
as if it had mass $m^*$. Steep, sharply curved band → light; flat band → heavy.
Negative near a band *top*, which is where we switch to holes.

$$\frac{1}{m^*} \equiv \frac{1}{\hbar^2}\frac{d^2E}{dk^2}$$

*Introduced:* [3.7](lessons/03-07-metals-insulators-semiconductors.md)

### Hole

An empty state near the top of an otherwise-full band, bookkept as a particle of
charge $+e$ and *positive* effective mass. The two sign flips (negative charge,
negative mass) cancel, so the absence of an electron moves exactly like a
present positive carrier — and the Hall coefficient flips sign to prove it.

*Introduced:* [3.7](lessons/03-07-metals-insulators-semiconductors.md), [4.4](lessons/04-04-transport-mobility-hall.md)

### Law of mass action

In *any* equilibrium non-degenerate semiconductor — doped or not — the product of
electron and hole densities is fixed by the gap and temperature alone, because
$E_F$ cancels out of the product.

$$np = n_i^2, \qquad n_i = \sqrt{N_cN_v}\;e^{-E_g/2k_BT}$$

Doping is therefore a see-saw: majority up, minority down, product unchanged.

*Introduced:* [4.1](lessons/04-01-intrinsic-carriers.md)

### Shallow donor / acceptor

A column-V (or column-III) impurity binds its spare electron (or hole) with a
*hydrogen-like* level only tens of meV from the band edge — shallow because the
host screens the Coulomb pull ($\varepsilon_r$) and the carrier is light
($m^*$). At room temperature $k_BT$ ionizes essentially all of them.

*Introduced:* [4.2](lessons/04-02-doping-extrinsic.md)

### Charge neutrality (what pins the Fermi level)

$E_F$ is never chosen — it is the root of the neutrality equation. You set
$N_d$, $N_a$, $T$; nature slides $E_F$ until the books balance.

$$p + N_d^+ = n + N_a^-$$

*Introduced:* [4.3](lessons/04-03-fermi-level-temperature-doping.md)

### Mobility

Drift speed per unit field — the whole of scattering and inertia in one number.
Units $\mathrm{cm^2\,V^{-1}s^{-1}}$ (Si electrons $\approx1400$, holes
$\approx450$).

$$\mathbf{v}_d = -\mu\mathbf{E}, \qquad \mu = \frac{e\tau}{m^*}$$

*Introduced:* [4.4](lessons/04-04-transport-mobility-hall.md)

### Hall coefficient

The transverse field per unit current per unit magnetic field, once the Lorentz
push and the built-up edge charge balance. Its **sign** gives the carrier sign;
its **magnitude** gives the carrier density.

$$R_H \equiv \frac{E_y}{J_xB_z} = \frac{1}{nq}, \qquad q = \mp e$$

*Introduced:* [4.4](lessons/04-04-transport-mobility-hall.md)

### Depletion region

The layer at a p–n junction swept *clean* of mobile carriers, leaving only fixed
ionized dopants whose field bends the bands until $E_F$ is flat across the
junction. The lighter-doped side carries most of the width
($N_ax_p = N_dx_n$).

*Introduced:* [4.5](lessons/04-05-pn-junction.md)

### Magnetic susceptibility

The fractional magnetic response — dimensionless in SI, of order $10^{-6}$ to
$10^{-3}$ for everything in Module 5 except a ferromagnet near $T_C$.

$$\mathbf{M} = \chi\mathbf{H}, \qquad \mathbf{B} = \mu_0(\mathbf{H}+\mathbf{M}) = \mu_0(1+\chi)\mathbf{H}$$

*Introduced:* [5.1](lessons/05-01-dia-paramagnetism.md)

### Exchange interaction

Not a magnetic force: Coulomb repulsion routed through the Pauli principle.
Parallel spins force an antisymmetric *spatial* wavefunction, which keeps the
electrons apart, which lowers the electrostatic energy. Collapses to

$$U_{ij} = -J\,\mathbf{S}_i\cdot\mathbf{S}_j$$

with $J>0$ favouring alignment. Dipole–dipole coupling ($\sim1$ K) is three
orders of magnitude too weak to be the cause.

*Introduced:* [5.2](lessons/05-02-exchange-ferromagnetism.md), [5.3](lessons/05-03-heisenberg-ising.md)

### Weiss molecular field

Mean-field theory's shortcut: replace the fluctuating exchange field from all
neighbours by their average, proportional to the magnetization itself. The
feedback ($M$ helps create the field that sustains $M$) is the seed of
spontaneous order.

$$H_{\text{eff}} = H + \lambda M$$

It is a fictitious field — often equivalent to hundreds of tesla.

*Introduced:* [5.2](lessons/05-02-exchange-ferromagnetism.md)

### Order parameter

A quantity that is zero in the disordered phase and switches on below a critical
temperature, breaking a symmetry the Hamiltonian still respects: magnetization
$M$ for a ferromagnet, *staggered* magnetization $M_s$ for an antiferromagnet,
the condensate wavefunction for a superconductor.

*Introduced:* [5.3](lessons/05-03-heisenberg-ising.md), [5.4](lessons/05-04-superconductivity-phenomena.md)

### Magnon

One quantum of a spin wave — the cheapest excitation of an ordered magnet, in
which every spin tilts slightly and the tilt phase advances site to site. A
boson, the magnetic cousin of the phonon, with a *quadratic* long-wavelength
dispersion.

$$\hbar\omega(\mathbf{k}) \approx 2JSa^2k^2 \qquad (\text{small }k)$$

*Introduced:* [5.3](lessons/05-03-heisenberg-ising.md)

### Meissner effect

A superconductor actively **expels** magnetic flux ($B=0$ in the bulk) regardless
of whether the field was applied before or after cooling. This is *extra* physics
beyond zero resistance — a merely perfect conductor would *trap* the flux — and
it is what makes superconductivity a distinct thermodynamic phase.

*Introduced:* [5.4](lessons/05-04-superconductivity-phenomena.md)

### Cooper pair

Two electrons with opposite momentum and opposite spin,
$(\mathbf{k}\uparrow,\,-\mathbf{k}\downarrow)$, bound by a retarded
phonon-mediated attraction. Zero total momentum (so all pairs condense into one
state), zero total spin (so the pair is a composite boson of charge $2e$), and
enormous — the partners sit a coherence length $\xi$ apart, thousands of atoms.

*Introduced:* [5.5](lessons/05-05-cooper-pairs-bcs.md)

### Superconducting gap

The energy window around $E_F$ with no single-electron states. Breaking a pair
frees *two* quasiparticles and costs $2\Delta$ — which is why there is nothing to
scatter into and the current never decays.

$$2\Delta(0) \approx 3.5\,k_BT_c$$

*Introduced:* [5.5](lessons/05-05-cooper-pairs-bcs.md)

### Topological invariant

A global integer property of the filled states that cannot change under any
smooth deformation — so it survives disorder, doping, and sample shape. No
symmetry is broken and there is no local order parameter, which puts topological
phases outside the Landau paradigm entirely. The quantum Hall $\nu$ (a Chern
number) is the archetype.

*Introduced:* [5.6](lessons/05-06-topological-correlated.md)

### Mott insulator

A **half-filled** band that insulates anyway, because on-site repulsion $U$
forbids the double occupancy that hopping requires. Band theory predicts a metal
and is categorically wrong — the opposite of a band insulator, which has an even
filling and needs no interactions at all.

*Introduced:* [5.6](lessons/05-06-topological-correlated.md)

## Formulas and rules

### The four cubic structures

| Structure | Bravais? | Atoms / conv. cell | $Z$ | Packing fraction | Spheres touch along |
|---|---|---|---|---|---|
| sc | yes | 1 | 6 | $\pi/6\approx0.52$ | edge, $a = 2r$ |
| bcc | yes | 2 | 8 | $\sqrt3\pi/8\approx0.68$ | body diagonal, $a\sqrt3 = 4r$ |
| fcc | yes | 4 | 12 | $\pi/(3\sqrt2)\approx0.74$ | face diagonal, $a\sqrt2 = 4r$ |
| hcp | **no** — hex lattice + 2-atom basis | 2 (primitive) | 12 | $\pi/(3\sqrt2)\approx0.74$ | in-plane, $\mathtt{ABAB}$ stacking |

fcc is $\mathtt{ABCABC}$ close packing seen down its body diagonal; hcp is
$\mathtt{ABAB}$. Same density, different rhythm.

**Counting shares in a cell:** corner $=\tfrac18$, edge $=\tfrac14$, face
$=\tfrac12$, body centre $=1$.

*From* [1.1](lessons/01-01-lattices-bases-bravais.md) *and* [1.2](lessons/01-02-structures-miller-indices.md)

### Miller indices and interplanar spacing

**Planes** $(hkl)$: intercepts → reciprocals → clear to smallest integers.
**Directions** $[uvw]$: raw components, reduced. No reciprocals for directions.

$$\text{cubic:}\quad d_{hkl} = \frac{a}{\sqrt{h^2+k^2+l^2}} \qquad\qquad \text{orthorhombic:}\quad \frac{1}{d_{hkl}^2} = \frac{h^2}{a^2}+\frac{k^2}{b^2}+\frac{l^2}{c^2}$$

In a **cubic** crystal only, $(hkl)\perp[hkl]$.

*From* [1.2](lessons/01-02-structures-miller-indices.md)

### Building the reciprocal lattice

$$\mathbf{b}_1 = 2\pi\frac{\mathbf{a}_2\times\mathbf{a}_3}{V},\quad \mathbf{b}_2 = 2\pi\frac{\mathbf{a}_3\times\mathbf{a}_1}{V},\quad \mathbf{b}_3 = 2\pi\frac{\mathbf{a}_1\times\mathbf{a}_2}{V}, \qquad V = \mathbf{a}_1\cdot(\mathbf{a}_2\times\mathbf{a}_3)$$

$$\boxed{\ \mathbf{b}_i\cdot\mathbf{a}_j = 2\pi\delta_{ij}\ } \qquad \mathbf{G}_{hkl} = h\mathbf{b}_1+k\mathbf{b}_2+l\mathbf{b}_3 \ \perp\ (hkl), \qquad |\mathbf{G}_{hkl}| = \frac{2\pi}{d_{hkl}}$$

| Direct lattice | Reciprocal lattice |
|---|---|
| simple cubic, side $a$ | simple cubic, side $2\pi/a$ |
| fcc, cube $a$ | bcc, conventional cube $4\pi/a$ |
| bcc, cube $a$ | fcc, conventional cube $4\pi/a$ |

This course uses the **physics convention** with the $2\pi$ in $\mathbf{b}_i$
(so $|\mathbf{G}| = 2\pi/d$, matching $k = 2\pi/\lambda$). Crystallographers drop
it.

*From* [1.3](lessons/01-03-reciprocal-lattice.md)

### Diffraction: Bragg, Laue, Ewald

$$\text{Bragg:}\quad 2d\sin\theta = n\lambda \qquad\Longleftrightarrow\qquad \text{Laue:}\quad \Delta\mathbf{k} = \mathbf{G}$$

The bridge between them: elastic scattering gives
$|\mathbf{k}_{\text{out}}| = |\mathbf{k}_{\text{in}}| = k = 2\pi/\lambda$, hence
$\Delta k = 2k\sin\theta$; setting that equal to $|\mathbf{G}| = 2\pi/d$ gives
Bragg with the $2\pi$'s cancelling.

- **Wavelength limit:** $\sin\theta\le1$ forces $n\lambda \le 2d$ — you cannot resolve structure finer than half a wavelength. Hence X-rays ($\lambda\sim1$ Å), not light.
- **Ewald construction:** draw the reciprocal lattice, put a sphere of radius $k$ through the origin along $\mathbf{k}_{\text{in}}$; a peak occurs wherever the sphere passes through a reciprocal-lattice point.
- **Powder method:** random crystallite orientations put *some* grain at every Bragg angle, giving cones (rings) at $2\theta$; read spacings off as $d = \lambda/(2\sin\theta)$.
- **Redundancy:** $n$-th order off $(hkl)$ = first order off $(nh,nk,nl)$, since $d_{nh,nk,nl} = d_{hkl}/n$.

*From* [1.4](lessons/01-04-xray-diffraction-bragg.md)

### Selection rules — which peaks survive

With $s \equiv h^2+k^2+l^2$ ordering the peaks:

| Lattice | Condition for $S_{hkl}\neq0$ | First allowed line |
|---|---|---|
| simple cubic | all $(hkl)$ | $(100)$, $s=1$ |
| bcc | $h+k+l$ **even** ($S=2f$) | $(110)$, $s=2$ |
| fcc | $h,k,l$ all even **or** all odd ($S=4f$) | $(111)$, $s=3$ |
| diamond (fcc + basis at $\tfrac14\tfrac14\tfrac14$) | fcc rule **and** $h+k+l \not\equiv 2 \pmod 4$ | $(111)$; $(200)$ and $(222)$ killed |

Since $s\propto\sin^2\theta$, the *ratio* of the first two ring angles fingerprints
the lattice. If the two atoms differ (CsCl, NaCl), the "forbidden" lines return
**weakly** with amplitude $f_1 - f_2$ instead of vanishing — absences give the
lattice type, surviving intensities give the decoration.

*From* [1.5](lessons/01-05-structure-factor.md)

### Lattice dynamics: the two chains

**Monatomic chain** (mass $m$, spring $C$, spacing $a$):

$$m\ddot u_n = C(u_{n+1}+u_{n-1}-2u_n) \quad\xrightarrow{\ u_n = Ae^{i(kna-\omega t)}\ }\quad \omega(k) = 2\sqrt{\tfrac{C}{m}}\left|\sin\tfrac{ka}{2}\right|$$

$$\omega_{\max} = 2\sqrt{C/m}, \qquad v_s = a\sqrt{C/m}, \qquad v_g = \frac{d\omega}{dk} = a\sqrt{\tfrac{C}{m}}\cos\tfrac{ka}{2}$$

Linear (sound) at small $k$; flat with $v_g = 0$ at the zone edge $k=\pi/a$ (a
standing wave — the vibrational Bragg reflection).

**Diatomic chain** (masses $M>m$, cell length $a$):

$$\omega_\pm^2 = C\!\left(\tfrac1M+\tfrac1m\right) \pm C\sqrt{\left(\tfrac1M+\tfrac1m\right)^2 - \frac{4\sin^2(ka/2)}{Mm}}$$

| Point | Acoustic $\omega_-$ | Optical $\omega_+$ |
|---|---|---|
| $k=0$ | $0$ | $\sqrt{2C\left(\tfrac1M+\tfrac1m\right)}$ — the branch maximum |
| $k=\pi/a$ | $\sqrt{2C/M}$ | $\sqrt{2C/m}$ |

Gap width $\Delta\omega = \sqrt{2C/m} - \sqrt{2C/M}$; it closes when $M=m$ (then
the "optical" branch is just the monatomic curve zone-folded).

**Mode counting** (Born–von Kármán, $u_{n+N} = u_n$):
$k = 2\pi p/(Na)$, spacing $\Delta k = 2\pi/(Na)$, exactly $N$ values per zone
per branch. $p$ atoms per cell in 3D → 3 acoustic + $3p-3$ optical branches.

*From* [2.1](lessons/02-01-monatomic-chain.md) *and* [2.2](lessons/02-02-diatomic-chain-branches.md)

### Phonon statistics and the density of states

$$\langle n_{\mathbf{k},s}\rangle = \frac{1}{e^{\hbar\omega_{\mathbf{k},s}/k_BT}-1} \qquad (\mu = 0 \text{ always})$$

$$U = \int_0^{\omega_{\max}} g(\omega)\,\hbar\omega\left[\frac{1}{e^{\hbar\omega/k_BT}-1}+\tfrac12\right]d\omega, \qquad C_V = \frac{dU}{dT}$$

Two limits worth having memorized, with $x \equiv \hbar\omega/k_BT$:

$$x\ll1:\quad \langle n\rangle \approx \frac{1}{x} = \frac{k_BT}{\hbar\omega}, \quad \hbar\omega\langle n\rangle \approx k_BT \ \ (\text{equipartition}) \qquad\qquad x\gg1:\quad \langle n\rangle \approx e^{-x} \ \ (\text{freeze-out})$$

For a linear branch $\omega = v_sk$ in 3D (one polarization, volume $V$):

$$N(\omega) = \frac{V}{6\pi^2}\left(\frac{\omega}{v_s}\right)^3, \qquad g(\omega) = \frac{V}{2\pi^2}\frac{\omega^2}{v_s^3} \ \propto\ \omega^2$$

*From* [2.3](lessons/02-03-phonons-quantization.md)

### Heat capacity: Dulong–Petit, Einstein, Debye

$$\text{Dulong–Petit:}\quad C_V = 3Nk_B \ \ (= 3R \approx 25\ \mathrm{J\,mol^{-1}K^{-1}})$$

$$\text{Einstein:}\quad C_V = 3Nk_B\,x^2\frac{e^x}{(e^x-1)^2}, \qquad x = \frac{\hbar\omega_E}{k_BT}$$

$$\text{Debye:}\quad g(\omega) = \frac{9N}{\omega_D^3}\omega^2 \ (0\le\omega\le\omega_D), \qquad C_V = 9Nk_B\left(\frac{T}{\Theta_D}\right)^3\!\int_0^{\Theta_D/T}\frac{x^4e^x}{(e^x-1)^2}\,dx$$

$$\text{low-}T\ \text{Debye:}\quad C_V = \frac{12\pi^4}{5}Nk_B\left(\frac{T}{\Theta_D}\right)^3 \qquad\text{using}\quad \int_0^\infty\frac{x^4e^x}{(e^x-1)^2}dx = \frac{4\pi^4}{15}$$

Per mole this is the working number:

$$C_V = 1944\left(\frac{T}{\Theta_D}\right)^3\ \mathrm{J\,mol^{-1}K^{-1}} \qquad (T \lesssim \Theta_D/10)$$

**A metal at low $T$** carries both gases:

$$C_V = \gamma T + \beta T^3, \qquad \frac{C_V}{T} = \gamma + \beta T^2, \qquad \beta = \frac{12\pi^4}{5}\frac{Nk_B}{\Theta_D^3}, \qquad T^\star = \sqrt{\gamma/\beta}$$

Plot $C_V/T$ against $T^2$: intercept $\gamma$ (electrons, hence $g(E_F)$), slope
$\beta$ (phonons, hence $\Theta_D$). One graph separates the two.

*From* [2.4](lessons/02-04-heat-capacity-einstein-debye.md) *and* [3.2](lessons/03-02-fermi-surface-heat-capacity.md)

### The model scorecard

The four canonical models, what each nails, and where each breaks. Reach for this
when a problem asks "why isn't the simple answer right?"

| Model | Picture | Gets right | Fails because |
|---|---|---|---|
| **Drude** (classical electron gas) | free electrons, drag time $\tau$ | Ohm's law, $\sigma = ne\mu$, the Hall effect, orders of magnitude | uses Maxwell–Boltzmann: predicts an electronic $C_V = \tfrac32Nk_B$ that is $\sim100\times$ too large, and gets the sign/size of thermopower wrong |
| **Sommerfeld** (quantum free-electron gas) | same, but Fermi–Dirac | $E_F$, $v_F$, $g(\varepsilon)\propto\sqrt\varepsilon$, $C_{\text{el}} = \gamma T$, Pauli $\chi$ | no lattice, so **no band gaps** — every material would be a metal; can't explain insulators, holes, or a positive $R_H$ |
| **Einstein** (all modes at one $\omega_E$) | $3N$ identical oscillators | Dulong–Petit at high $T$; that $C_V\to0$ at all; decent for the flat *optical* branch | one frequency means the whole crystal freezes together — $C_V$ dies **exponentially** instead of as $T^3$ |
| **Debye** (linear acoustic continuum, cutoff $\omega_D$) | $g(\omega)\propto\omega^2$ up to $\omega_D$ | Dulong–Petit *and* the low-$T$ $T^3$ law; one parameter $\Theta_D$ fits whole materials | ignores real dispersion and optical branches, so it is only an interpolation in the middle; $\Theta_D$ drifts with $T$ if you fit it honestly |

Both heat-capacity models must give $3Nk_B$ at high $T$ — that is forced by the
mode count. All the physics is at the *low*-frequency end of $g(\omega)$, where
Einstein has nothing and Debye has $\omega^2$.

*From* [2.4](lessons/02-04-heat-capacity-einstein-debye.md), [3.1](lessons/03-01-free-electron-gas.md), [4.4](lessons/04-04-transport-mobility-hall.md)

### Anharmonicity: expansion and thermal conductivity

$$U(r) = U(r_0) + \tfrac12U''(r_0)x^2 + \tfrac16U'''(r_0)x^3 + \cdots, \qquad x = r-r_0$$

The $x^3$ term does both jobs: it makes the well lopsided (expansion) and it
couples phonon modes (scattering).

$$\alpha_V \equiv \frac{1}{V}\frac{\partial V}{\partial T} = \frac{\gamma\,C_V}{B\,V}, \qquad \alpha_L = \frac{\alpha_V}{3}\ (\text{isotropic})$$

so $\alpha_V \propto C_V$: constant at high $T$, vanishing as $T^3$ at low $T$.

$$\kappa = \tfrac13\,C\,v_s\,\ell$$

| Regime | $C$ | $\ell$ limited by | $\kappa$ |
|---|---|---|---|
| $T \gtrsim \Theta_D$ | flat (Dulong–Petit) | Umklapp, $\ell\propto1/T$ | $\propto 1/T$ — falling |
| $T \ll \Theta_D$ | $\propto T^3$ (Debye) | sample size / defect spacing (constant) | $\propto T^3$ — rising |
| peak | — | crossover | maximum near $\Theta_D/10$–$\Theta_D/20$ |

Umklapp needs phonons with $\hbar\omega \gtrsim k_B\Theta_D$, whose population is
suppressed as $e^{-\Theta_D/bT}$ (with $b\sim2$) — that exponential shut-off is
why $\ell$ balloons on cooling.

*From* [2.5](lessons/02-05-anharmonicity-thermal.md)

### The free-electron gas: the four scales

$$k_F = (3\pi^2 n)^{1/3}, \qquad E_F = \frac{\hbar^2k_F^2}{2m}, \qquad v_F = \frac{\hbar k_F}{m}, \qquad T_F = \frac{E_F}{k_B}$$

Only the **density** $n$ enters — sample size is irrelevant. Typical metal:
$E_F\sim$ few eV, $v_F\sim10^6$ m/s, $T_F\sim10^4$–$10^5$ K.

$$g(\varepsilon) = \frac{V}{2\pi^2}\left(\frac{2m}{\hbar^2}\right)^{3/2}\sqrt{\varepsilon} \ \propto\ \sqrt\varepsilon, \qquad g(E_F) = \frac{3N}{2E_F}$$

**Dimensionality changes the shape of $g$** — worth knowing cold:

| Dimension | $g(\varepsilon)$ | Consequence |
|---|---|---|
| 1D | $\propto \varepsilon^{-1/2}$ | diverges at the band bottom |
| 2D | constant, $= m/\pi\hbar^2$ per unit area (with spin) | $E_F = \pi\hbar^2n/m$, linear in density |
| 3D | $\propto \varepsilon^{1/2}$ | $E_F\propto n^{2/3}$ |

State counting in all of them: one $\mathbf{k}$-point per $(2\pi)^3/V$ of
$\mathbf{k}$-space, times **2 for spin**.

*From* [3.1](lessons/03-01-free-electron-gas.md), [3.3](lessons/03-03-blochs-theorem.md)

### Fermi–Dirac and the electronic heat capacity

$$f(\varepsilon) = \frac{1}{e^{(\varepsilon-\mu)/k_BT}+1}, \qquad f(\mu) = \tfrac12 \ \text{exactly}, \qquad \mu \to E_F \ \text{as}\ T\to0$$

$$\mu(T) \approx E_F\left[1 - \frac{\pi^2}{12}\left(\frac{T}{T_F}\right)^2\right]$$

Only a shell of thickness $\sim k_BT$ around $E_F$ can respond, so
$N_{\text{active}}\approx g(E_F)k_BT$, $U-U(0)\sim g(E_F)(k_BT)^2$, and

$$\boxed{\ C_{\text{el}} = \gamma T, \qquad \gamma = \frac{\pi^2}{3}g(E_F)k_B^2\ } \qquad \gamma = \frac{\pi^2}{2}\frac{Nk_B}{T_F} \ \ (\text{free gas})$$

$$\frac{C_{\text{el}}}{C_{\text{classical}}} = \frac{\pi^2}{3}\frac{T}{T_F} \ll 1, \qquad \text{active fraction} \approx \frac{k_BT}{E_F} = \frac{T}{T_F}$$

*From* [3.2](lessons/03-02-fermi-surface-heat-capacity.md)

### Band structure: the two limits compared

The same bands, built from opposite ends of the road. Pick whichever limit your
material sits nearer.

| | **Nearly-free electron** ([3.4](lessons/03-04-nearly-free-electron.md)) | **Tight binding / LCAO** ([3.5](lessons/03-05-tight-binding.md)) |
|---|---|---|
| Start from | free plane waves $e^{ikx}$ | isolated atomic orbitals $\varphi(x-na)$ |
| The perturbation | a **weak** periodic potential $V = \sum_G U_Ge^{iGx}$ | a **small** overlap letting electrons hop, amplitude $t$ |
| Basis of the Bloch state | plane waves | Wannier (localized) orbitals, $\psi_k = \sum_n e^{ikna}\varphi(x-na)$ |
| Dispersion | free parabola, split at zone boundaries | $E(k) = \varepsilon_0 - 2t\cos(ka)$ |
| Where the gap comes from | Bragg reflection at $2k=G$: degenerate states repel | the bonding/antibonding splitting of the atomic level |
| Gap / width | $E_{\text{gap}} = 2\lvert U_G\rvert$ at $k = G/2 = \pi/a$ | bandwidth $W = 4t$ in 1D, $W \approx 2Zt$ in general ($12t$ for simple cubic) |
| Standing waves at the edge | $\cos(\pi x/a)$ on the ions (low) vs $\sin(\pi x/a)$ between them (high) | fully bonding ($k=0$) vs fully antibonding ($k=\pi/a$) |
| Good for | simple sp metals, Al, Na | $d$ bands, graphene, Mott systems, anything narrow |
| Machinery borrowed | degenerate perturbation theory (a $2\times2$ diagonalization) | molecular-orbital bonding/antibonding |

Both are Bloch's theorem in a different basis, and both give bands separated by
gaps — that agreement is the point.

3D tight binding, simple cubic:

$$E(\mathbf{k}) = \varepsilon_0 - 2t\big(\cos k_xa + \cos k_ya + \cos k_za\big)$$

*From* [3.3](lessons/03-03-blochs-theorem.md), [3.4](lessons/03-04-nearly-free-electron.md), [3.5](lessons/03-05-tight-binding.md)

### Semiclassical band dynamics

$$\hbar\frac{d\mathbf{k}}{dt} = -e\mathbf{E}, \qquad \mathbf{v}_g = \frac{1}{\hbar}\nabla_{\mathbf{k}}E, \qquad m^* = \hbar^2\left(\frac{d^2E}{dk^2}\right)^{-1}$$

For the 1D tight-binding band, the three derivatives you keep needing:

$$E = \varepsilon_0 - 2t\cos ka, \qquad v_g = \frac{2ta}{\hbar}\sin ka, \qquad m^*(k) = \frac{\hbar^2}{2ta^2\cos ka}$$

- $v_g = 0$ at both band edges (standing waves); maximum $2ta/\hbar$ at $ka = \pi/2$ — **the carriers that conduct live mid-band**.
- $m^* > 0$ at the bottom, $\to\infty$ at $ka=\pi/2$, $< 0$ at the top → relabel as holes.
- A field slides the *whole* occupied distribution rigidly through $k$-space; for a filled band that maps the zone onto itself, so $\sum_{\text{occ}}v_g = 0$ before and after: **a filled band carries no current**.

*From* [3.5](lessons/03-05-tight-binding.md), [3.7](lessons/03-07-metals-insulators-semiconductors.md)

### Counting states and the density of states of a band

$$g(E) = \sum_n\int_{\text{BZ}}\delta\big(E - E_n(\mathbf{k})\big)\frac{d^3k}{(2\pi)^3}$$

- $N$ cells → $N$ allowed $\mathbf{k}$ per band, $2N$ electron states, i.e. **2 electrons per cell per band**.
- $g(E) = 0$ inside a gap; $g$ spikes where $\nabla_{\mathbf{k}}E = 0$.
- 1D tight-binding band, exactly: $g(E) = \dfrac{2N}{\pi}\big/\sqrt{(2t)^2-(E-\varepsilon_0)^2}$ on $\varepsilon_0-2t\le E\le\varepsilon_0+2t$ — a U-shape diverging at both edges.

*From* [3.6](lessons/03-06-bands-zones-dos.md)

### Metal, insulator, semiconductor

| Class | Band picture | $E_F$ | $g(E_F)$ | $E_g$ |
|---|---|---|---|---|
| **Metal** | a partially filled band | inside a band | $\neq 0$ | — |
| **Semimetal** | two bands with tiny overlap | inside both | small | (overlap, not gap) |
| **Semiconductor** | full valence, empty conduction | in the gap | $0$ at $T=0$ | $\sim0.5$–$2$ eV |
| **Insulator** | same as semiconductor | in the gap | $0$ | $\gtrsim4$ eV |

Valence counting: **odd** electrons per cell ⇒ a partly filled band ⇒ metal,
guaranteed. **Even** *may* fill bands exactly — but only if the gap survives over
the *whole* zone; band overlap along another direction is why Mg, Ca and Zn are
metals. Reference gaps: Ge $0.67$, Si $1.1$, diamond $5.5$ eV; at 300 K
$k_BT \approx 0.026$ eV.

*From* [3.6](lessons/03-06-bands-zones-dos.md), [3.7](lessons/03-07-metals-insulators-semiconductors.md)

### Semiconductor carrier statistics

Non-degenerate ($E_F$ well inside the gap), so Fermi–Dirac collapses to Boltzmann:

$$n = N_c\,e^{-(E_c-E_F)/k_BT}, \qquad p = N_v\,e^{-(E_F-E_v)/k_BT}$$

$$N_c = 2\left(\frac{m_e^*k_BT}{2\pi\hbar^2}\right)^{3/2}, \qquad N_v = 2\left(\frac{m_h^*k_BT}{2\pi\hbar^2}\right)^{3/2}, \qquad N_c, N_v \propto T^{3/2}$$

$$np = n_i^2 = N_cN_v\,e^{-E_g/k_BT}, \qquad n_i = \sqrt{N_cN_v}\,e^{-E_g/2k_BT}$$

$$E_F^{\text{intrinsic}} = \frac{E_c+E_v}{2} + \frac34k_BT\ln\frac{m_h^*}{m_e^*} \qquad (\text{midgap, nudged by tens of meV})$$

$$n = n_i\,e^{(E_F-E_i)/k_BT} \quad\text{is the handy form, with } E_i \text{ the midgap level.}$$

Silicon at 300 K: $E_g = 1.12$ eV, $N_c = 2.8\times10^{19}$,
$N_v = 1.0\times10^{19}$, $n_i \approx 1\times10^{10}\ \mathrm{cm^{-3}}$,
$k_BT = 0.0259$ eV.

*From* [4.1](lessons/04-01-intrinsic-carriers.md)

### Doping: the hydrogenic donor and the three regimes

$$E_d = 13.6\ \mathrm{eV}\times\frac{m^*/m}{\varepsilon_r^2}, \qquad a_d = a_0\,\frac{\varepsilon_r}{m^*/m}, \qquad a_0 = 0.0529\ \mathrm{nm}$$

Silicon ($m^*/m\approx0.2$, $\varepsilon_r\approx12$): $E_d \approx 19$ meV,
$a_d \approx 3.2$ nm — shallow, and spread over many cells, which is what
justifies using $\varepsilon_r$ at all.

$$n\text{-type: } n \approx N_d,\ \ p = \frac{n_i^2}{N_d} \qquad\qquad p\text{-type: } p \approx N_a,\ \ n = \frac{n_i^2}{N_a}$$

$$\text{compensated: } n \approx N_d - N_a \ (\text{if } N_d > N_a \gg n_i)$$

$$\text{extrinsic Fermi level: } E_c - E_F = k_BT\ln\frac{N_c}{N_d}, \qquad E_F - E_v = k_BT\ln\frac{N_v}{N_a}$$

| Regime | Condition | $n(T)$ | $E_F$ |
|---|---|---|---|
| Freeze-out | $k_BT \lesssim E_d$ | $< N_d$, rising | between the donor level and $E_c$ |
| Extrinsic / saturation | donors ionized, $n_i \ll N_d$ | $\approx N_d$, **flat** | drifting down toward midgap (because $N_c\propto T^{3/2}$ grows) |
| Intrinsic | $n_i(T) > N_d$ | $\approx n_i(T)$, exploding | back at midgap — doping is invisible |

The **intrinsic onset** $T^\ast$ solves $n_i(T^\ast) = N_d$; heavier doping →
higher $T^\ast$ → wider operating window.

*From* [4.2](lessons/04-02-doping-extrinsic.md) *and* [4.3](lessons/04-03-fermi-level-temperature-doping.md)

### Transport relations, with units

| Quantity | Relation | SI units | Device units |
|---|---|---|---|
| mobility | $\mu = e\tau/m^*$ | $\mathrm{m^2\,V^{-1}s^{-1}}$ | $\mathrm{cm^2\,V^{-1}s^{-1}}$ (multiply SI by $10^4$) |
| drift velocity | $v_d = \mu E$ | m/s | cm/s |
| conductivity | $\sigma = ne\mu = e(n\mu_e + p\mu_h)$ | S/m | $(\Omega\cdot\mathrm{cm})^{-1}$ |
| resistivity | $\rho = 1/\sigma$ | $\Omega\cdot\mathrm{m}$ | $\Omega\cdot\mathrm{cm}$ |
| current density | $J = \sigma E$ | $\mathrm{A/m^2}$ | $\mathrm{A/cm^2}$ |
| Hall coefficient | $R_H = 1/(nq)$ | $\mathrm{m^3/C}$ | — |
| Hall mobility | $\mu_H = \lvert R_H\rvert\,\sigma$ | $\mathrm{m^2\,V^{-1}s^{-1}}$ | — |
| carrier density from Hall | $n = 1/(\lvert R_H\rvert e)$ | $\mathrm{m^{-3}}$ | $\mathrm{cm^{-3}}$ |
| Einstein relation | $D = (k_BT/e)\,\mu$ | $\mathrm{m^2/s}$ | $\mathrm{cm^2/s}$ |

**Matthiessen's rule:** scattering *rates* add, so
$1/\mu = 1/\mu_{\text{phonon}} + 1/\mu_{\text{imp}}$ — heavier doping always lowers
mobility.

**The temperature diagnostic** (the fastest way to tell a metal from a semiconductor):

| | carrier density $n$ | mobility $\mu$ | net $\sigma(T)$ |
|---|---|---|---|
| metal | pinned, $T$-independent | falls (more phonons, $\mu\propto T^{-3/2}$) | **falls** — $\rho$ rises with $T$ |
| intrinsic semiconductor | $\propto T^{3/2}e^{-E_g/2k_BT}$, explodes | falls | **rises sharply**, $\sigma\propto e^{-E_g/2k_BT}$ |

So $\ln\sigma$ versus $1/T$ is a straight line of slope $-E_g/2k_B$ — the standard
way to measure a band gap. And $R_H < 0$ ⇒ electrons, $R_H > 0$ ⇒ holes (both
carrier types deflect to the *same* edge; they just deposit opposite charge).

*From* [4.4](lessons/04-04-transport-mobility-hall.md)

### The p–n junction

$$V_{bi} = \frac{k_BT}{e}\ln\frac{N_aN_d}{n_i^2} \qquad (\approx 0.7\text{–}0.8\ \mathrm{V \ for \ silicon})$$

$$W = \sqrt{\frac{2\varepsilon V_{bi}}{e}\left(\frac{1}{N_a}+\frac{1}{N_d}\right)}, \qquad N_ax_p = N_dx_n, \qquad \varepsilon = \varepsilon_r\varepsilon_0$$

$$I = I_0\left(e^{\,eV/k_BT}-1\right)$$

- $V_{bi}$ depends only on the **product** $N_aN_d$, not how it is split.
- $W$ is dominated by the **lightly** doped side, which must expose a thicker slab of ions to muster the same charge. Typical $W \sim 0.3\ \mu\mathrm{m}$.
- At 300 K, $k_BT/e = 0.0259$ V, so forward current changes by roughly $\times10$ per $60$ mV.
- Reverse bias leaves $-I_0$: minority carriers rolling *downhill* through the depletion field, so $I_0$ barely depends on $V$.

*From* [4.5](lessons/04-05-pn-junction.md)

### The four weak magnetic responses

| Response | Origin | Sign of $\chi$ | $T$-dependence | Magnitude / set by |
|---|---|---|---|---|
| Larmor diamagnetism | induced orbital currents (Lenz) | $<0$ | none | $\chi \approx -\dfrac{\mu_0ne^2}{6m}\langle r^2\rangle$, universal, $\sim10^{-5}$ |
| Curie paramagnetism | localized permanent moments align | $>0$ | $\propto 1/T$ | $\chi = C/T$, set by $\mu_{\text{eff}}^2$ |
| Pauli paramagnetism | conduction-electron spins near $E_F$ | $>0$ | none | $\chi = \mu_0\mu_B^2\,g(E_F)$, $\sim10^{-5}$ |
| Landau diamagnetism | orbital motion of those same electrons | $<0$ | none | exactly $-\tfrac13\chi_{\text{Pauli}}$ for free electrons |

$$M = n\mu\tanh\!\left(\frac{\mu B}{k_BT}\right) \ \xrightarrow[\ \mu B\ll k_BT\ ]{}\ \chi = \frac{C}{T}, \qquad C = \frac{\mu_0\,n\,g^2J(J+1)\mu_B^2}{3k_B}$$

For pure spin-$\tfrac12$, $g^2J(J+1) = 3$ and this reduces to
$C = \mu_0n\mu_B^2/k_B$. Net free-electron response:
$\chi_{\text{Pauli}}+\chi_{\text{Landau}} = \tfrac23\chi_{\text{Pauli}}$.

**The diagnostic:** flat $\chi(T)$ ⇒ itinerant (Pauli); $1/T$ ⇒ localized (Curie).
Note $\gamma$ (heat capacity) and $\chi_{\text{Pauli}}$ are *both* proportional to
$g(E_F)$, so together they pin it down.

*From* [5.1](lessons/05-01-dia-paramagnetism.md)

### Mean-field ferromagnetism

$$H_{\text{eff}} = H + \lambda M, \qquad M = M_s\tanh\!\left(\frac{\mu(H+\lambda M)}{k_BT}\right), \qquad M_s = n\mu$$

At $H=0$, with $m \equiv M/M_s$:

$$m = \tanh\!\left(\frac{T_C}{T}m\right), \qquad k_BT_C = n\mu^2\lambda = \mu\lambda M_s, \qquad T_C = C\lambda$$

A nonzero solution exists exactly when the tanh leaves the origin steeper than
the line $y=m$, i.e. $T < T_C$. Just above $T_C$:

$$\boxed{\ \chi = \frac{C}{T-T_C}\ } \qquad\text{(Curie–Weiss)}$$

Plot $1/\chi$ against $T$: a straight line of slope $1/C$ hitting zero at $T_C$.
A **positive** intercept means ferromagnetic exchange; a negative one means
antiferromagnetic. Just below $T_C$, expanding
$\tanh x \approx x - \tfrac13x^3$ gives

$$m \approx \sqrt3\left(\frac{T_C-T}{T_C}\right)^{1/2} \qquad (\text{mean-field exponent } \beta = \tfrac12)$$

Real ferromagnets have $\beta\approx0.33$; mean field overestimates order because
it discards fluctuations. **Domains** are why a fresh iron nail reads
unmagnetized: mean-field theory describes one domain.

*From* [5.2](lessons/05-02-exchange-ferromagnetism.md)

### Spin models on a lattice

$$\text{Heisenberg:}\quad H = -J\sum_{\langle ij\rangle}\mathbf{S}_i\cdot\mathbf{S}_j - h\sum_i S_i^z \qquad\qquad \text{Ising:}\quad H = -J\sum_{\langle ij\rangle}S_i^zS_j^z,\ \ S_i^z = \pm1$$

| Quantity | Result |
|---|---|
| bonds on a lattice of $N$ sites, coordination $Z$ | $NZ/2$ |
| ground-state energy per spin | $-Z\lvert J\rvert/2$ (FM aligned, or Néel for $J<0$ on a bipartite lattice) |
| cost of flipping one Ising spin | $\Delta E = 2ZJ$ |
| mean-field Curie temperature (Heisenberg) | $k_BT_c = ZJ\,S(S+1)/3$ |
| exact 2D square-lattice Ising (Onsager) | $k_BT_c/J = 2/\ln(1+\sqrt2) \approx 2.269$ (mean field says $ZJ = 4J$ — 76% high) |
| 1D Ising | **no** order at any $T>0$: a domain wall costs $2J$ but gains $\ln N$ of entropy |
| magnon dispersion (FM, small $k$) | $\hbar\omega \approx 2JSa^2k^2$ |
| Bloch law | $M(T) = M(0)\big[1-(T/T_0)^{3/2}\big]$ — the spin twin of Debye's $T^3$ |

Antiferromagnets order below $T_N$ with zero net $M$ but nonzero **staggered**
magnetization $M_s = \frac1N\sum_i(-1)^i\langle S_i^z\rangle$; on a non-bipartite
(e.g. triangular) lattice no configuration satisfies every bond — **geometric
frustration**, at least one unhappy bond per triangle.

*From* [5.3](lessons/05-03-heisenberg-ising.md)

### Superconductivity: the phenomenology

$$\nabla^2\mathbf{B} = \frac{\mathbf{B}}{\lambda_L^2}, \qquad \lambda_L = \sqrt{\frac{m}{\mu_0n_se^2}}, \qquad B(x) = B_0e^{-x/\lambda_L}$$

$\lambda_L\sim$ tens of nm; $\lambda_L \propto n_s^{-1/2}$ diverges as $T\to T_c$.

$$H_c(T) \approx H_c(0)\left[1-\left(\frac{T}{T_c}\right)^2\right], \qquad \Phi_0 = \frac{h}{2e} = 2.07\times10^{-15}\ \mathrm{Wb}$$

| | Type I | Type II |
|---|---|---|
| Examples | pure elements: Hg, Pb, Al, Sn | alloys and cuprates: Nb–Ti, $\mathrm{Nb_3Sn}$ |
| Field response | full Meissner up to $H_c$, then a sharp jump to normal | full Meissner to $H_{c1}$; **mixed (vortex) state** from $H_{c1}$ to $H_{c2}$ |
| $H_c$ scale | tens of mT — useless for magnets | $H_{c2}$ up to tens of tesla — what magnets are wound from |

In the mixed state each vortex carries exactly one $\Phi_0$, so the vortex count
through area $A$ is $N = BA/\Phi_0$.

*From* [5.4](lessons/05-04-superconductivity-phenomena.md)

### BCS: the pairing numbers

$$\text{pairing: } (\mathbf{k}\uparrow,\ -\mathbf{k}\downarrow) \quad\Rightarrow\quad \text{zero total momentum, spin singlet, charge } 2e$$

$$2\Delta(0) \approx 3.5\,k_BT_c \ \ (3.52 \text{ weak coupling}), \qquad E_{\text{break}} = 2\Delta, \qquad \xi = \frac{\hbar v_F}{\pi\Delta} \gg a$$

$$\text{isotope effect: } \omega_D \propto M^{-1/2} \ \Rightarrow\ T_c \propto M^{-1/2}, \qquad \frac{T_c'}{T_c} = \sqrt{\frac{M}{M'}}$$

The attraction is retarded (the slow ion wake outlives the fast electron) and
lives only in a shell $\sim\hbar\omega_D$ around $E_F$; Cooper showed *any*
attraction binds, because the filled sea leaves an enormous phase space of empty
states just above $E_F$. The tunnelling density of states shows the gap flanked by
**coherence peaks** at $\pm\Delta$.

*From* [5.5](lessons/05-05-cooper-pairs-bcs.md)

### Beyond band theory: quantum Hall and Hubbard

$$\sigma_{xy} = \nu\,\frac{e^2}{h}, \qquad \nu = 1,2,3,\dots, \qquad R_{xy} = \frac{1}{\nu}\frac{h}{e^2}, \qquad \frac{h}{e^2} = R_K \approx 25\,813\ \Omega$$

On a plateau $\rho_{xx} = 0$ — dissipationless. $\nu$ counts **filled Landau
levels**: a perpendicular field $B$ reorganizes the 2D free-electron parabola into
rungs

$$E_j = \left(j+\tfrac12\right)\hbar\omega_c, \qquad \omega_c = \frac{eB}{m^*}, \qquad \text{degeneracy per unit area} = \frac{eB}{h}$$

(this Landau-level result is *used* by 5.6 and stated only here — see the
assumptions table below).

$$H_{\text{Hubbard}} = -t\sum_{\langle ij\rangle,\sigma}c^{\dagger}_{i\sigma}c_{j\sigma} + U\sum_i n_{i\uparrow}n_{i\downarrow}$$

| Ratio | Behaviour at half filling |
|---|---|
| $U \ll t$ | hopping wins, ordinary **metal** — band theory correct |
| $U \gg t$ | any motion costs $U$; electrons freeze one per site — **Mott insulator**, gap $\sim U - \mathcal{O}(t)$ |
| $U/t \sim \mathcal{O}(1)$ | the **Mott transition**; pressure raises $t$ and drives it metallic |

*From* [5.6](lessons/05-06-topological-correlated.md)

### Constants and everyday numbers

| Quantity | Value |
|---|---|
| $k_B$ | $1.381\times10^{-23}\ \mathrm{J/K} = 8.617\times10^{-5}\ \mathrm{eV/K}$ |
| $k_BT$ at 300 K | $0.0259\ \mathrm{eV}$ (and $k_BT/e = 0.0259$ V) |
| $\hbar$ | $1.055\times10^{-34}\ \mathrm{J\,s}$ |
| $e$, $m_e$ | $1.602\times10^{-19}\ \mathrm{C}$, $9.11\times10^{-31}\ \mathrm{kg}$ |
| $1\ \mathrm{eV}$ | $1.602\times10^{-19}\ \mathrm{J}$ |
| $\mu_0$ | $4\pi\times10^{-7} = 1.257\times10^{-6}\ \mathrm{T\,m/A}$ |
| $\mu_B = e\hbar/2m$ | $9.274\times10^{-24}\ \mathrm{J/T}$ |
| $R = N_Ak_B$ | $8.314\ \mathrm{J\,mol^{-1}K^{-1}}$; Dulong–Petit $3R \approx 25$ |
| Debye low-$T$ prefactor $\tfrac{12\pi^4}{5}R$ | $1944\ \mathrm{J\,mol^{-1}K^{-1}}$ |
| $\Phi_0 = h/2e$ | $2.07\times10^{-15}\ \mathrm{Wb}$ |
| $R_K = h/e^2$ | $25\,813\ \Omega$ |
| Cu K$\alpha$ X-rays | $\lambda = 1.54$ Å |

## Assumed, not taught here

This is a Tier-2 course: it *uses* the following without deriving them, and every
row points at where the derivation lives.

| Fact | Where it's taught |
|---|---|
| Fermi–Dirac and Bose–Einstein occupation formulas | [stat-mech 4.2](../stat-mech/lessons/04-02-bose-einstein-fermi-dirac.md) |
| The chemical potential $\mu$ — which this course calls the Fermi level | [stat-mech 1.4](../stat-mech/lessons/01-04-temperature-pressure-chemical-potential.md) |
| Boltzmann factor and the two-state partition function (behind the Curie $\tanh$) | [stat-mech 3.1](../stat-mech/lessons/03-01-canonical-ensemble-boltzmann-factor.md), [3.2](../stat-mech/lessons/03-02-partition-function.md) |
| $\mu = 0$ for a non-conserved boson gas (phonons, photons) | [stat-mech 3.5](../stat-mech/lessons/03-05-grand-canonical-ensemble.md), [4.3](../stat-mech/lessons/04-03-photon-gas-blackbody.md) |
| The Sommerfeld expansion of Fermi–Dirac integrals (source of $\gamma$ and of $\mu(T)$) | [stat-mech 4.4](../stat-mech/lessons/04-04-ideal-fermi-gas.md) |
| Equipartition, hence Dulong–Petit $3Nk_B$ | [stat-mech 3.4](../stat-mech/lessons/03-04-equipartition-theorem.md) |
| $\int_0^\infty x^3/(e^x-1)\,dx = \pi^4/15$ and the blackbody mode count Debye copies | [stat-mech 4.3](../stat-mech/lessons/04-03-photon-gas-blackbody.md) |
| Mean-field theory of the Ising model, order parameters, critical exponents | [stat-mech 5.3](../stat-mech/lessons/05-03-ising-mean-field.md), [5.4](../stat-mech/lessons/05-04-critical-exponents-universality.md) |
| Bose–Einstein condensation (the condensate picture behind BCS) | [stat-mech 4.5](../stat-mech/lessons/04-05-ideal-bose-gas-condensation.md) |
| The quantum harmonic oscillator ladder $E_n = (n+\tfrac12)\hbar\omega$ | [quantum-mechanics 3.1](../quantum-mechanics/lessons/03-01-harmonic-oscillator-analytic.md), [3.2](../quantum-mechanics/lessons/03-02-harmonic-oscillator-ladder-operators.md) |
| Commuting operators share an eigenbasis (the engine of Bloch's theorem) | [quantum-mechanics 3.4](../quantum-mechanics/lessons/03-04-compatible-observables.md) |
| Degenerate perturbation theory (the $2\times2$ that opens the NFE gap) | [quantum-mechanics 6.2](../quantum-mechanics/lessons/06-02-degenerate-perturbation-theory.md) |
| Identical particles, exchange symmetry, singlet/triplet (behind exchange and Cooper pairing) | [quantum-mechanics 5.1](../quantum-mechanics/lessons/05-01-identical-particles.md) |
| Spin-$\tfrac12$, the Zeeman splitting, and the Bohr magneton | [quantum-mechanics 4.5](../quantum-mechanics/lessons/04-05-spin-pauli-stern-gerlach.md) |
| Total angular momentum $J$ and the Landé $g$ (inside the Curie constant) | [quantum-mechanics 4.6](../quantum-mechanics/lessons/04-06-addition-angular-momenta.md) |
| Hydrogen: the Rydberg $13.6$ eV and the Bohr radius, rescaled for shallow donors | [quantum-mechanics 4.4](../quantum-mechanics/lessons/04-04-hydrogen-atom.md) |
| Plane-wave states of a free particle, and confinement quantizing $k$ | [quantum-mechanics 2.3](../quantum-mechanics/lessons/02-03-infinite-square-well.md), [2.6](../quantum-mechanics/lessons/02-06-free-particle-wave-packets.md) |
| A periodic function is a sum of waves at discrete wavevectors (the reciprocal lattice) | [fourier-analysis 1.1](../fourier-analysis/lessons/01-01-periodic-functions-fourier-coefficients.md) |
| The Fourier transform as "amplitude scattered by a density" | [fourier-analysis 2.1](../fourier-analysis/lessons/02-01-series-to-fourier-transform.md) |
| Hooke's law and $\omega = \sqrt{k/m}$ (every chain atom, and the isotope effect) | [mechanics-refresher 3.1](../mechanics-refresher/lessons/03-01-simple-harmonic-motion.md) |
| Gauss's law for a charge slab, and the parallel-plate field (the depletion width) | [em-refresher 1.2](../em-refresher/lessons/01-02-gauss-law.md), [2.1](../em-refresher/lessons/02-01-capacitance.md) |
| Lorentz force $q\mathbf{v}\times\mathbf{B}$ (the Hall effect) | [em-refresher 3.1](../em-refresher/lessons/03-01-magnetic-force.md) |
| Ampère's law $\nabla\times\mathbf{B} = \mu_0\mathbf{J}$ (the London equation) | [em-refresher 3.2](../em-refresher/lessons/03-02-sources-of-magnetic-field.md) |
| Lenz's law (the sign of diamagnetism) | [em-refresher 3.3](../em-refresher/lessons/03-03-electromagnetic-induction.md) |

**Stated only here:** the Landau-level spectrum
$E_j = (j+\tfrac12)\hbar\omega_c$ with $\omega_c = eB/m^*$ and degeneracy
$eB/h$ per unit area, which [5.6](lessons/05-06-topological-correlated.md) uses to
explain the quantum Hall integer. No course in the library derives it — it is
tabulated in the quantum-Hall group above.

## Pitfalls

### Lattices, cells, and indices

- The lattice is a set of **points**, not atoms — honeycomb, diamond and NaCl all put atoms off the lattice points. Ask "is the environment identical from every point?" *([1.1](lessons/01-01-lattices-bases-bravais.md))*
- The conventional cubic cell is **not** primitive for bcc (2 points) or fcc (4 points): use it to *see* symmetry, the primitive cell to *count*. *([1.1](lessons/01-01-lattices-bases-bravais.md))*
- There is no unique primitive cell — infinitely many shapes, one volume. Wigner–Seitz is the canonical *symmetric* choice, not the only one. *([1.1](lessons/01-01-lattices-bases-bravais.md))*
- Reciprocals are for **planes** $(hkl)$ only; directions $[uvw]$ use raw components. Read indices digit-by-digit, and put the bar *over* the number. *([1.2](lessons/01-02-structures-miller-indices.md))*
- hcp is not "another cubic" and not a Bravais lattice: hexagonal lattice **plus** a 2-atom basis, $\mathtt{ABAB}$ rather than fcc's $\mathtt{ABCABC}$. *([1.2](lessons/01-02-structures-miller-indices.md))*

### Reciprocal space and diffraction

- The reciprocal lattice is not "the real one scaled by $1/a$" — each $\mathbf{b}_i$ is a *cross product*, so a skewed cell gives a rotated, sheared reciprocal lattice. And fcc's reciprocal is **bcc**, not fcc. *([1.3](lessons/01-03-reciprocal-lattice.md))*
- Two $2\pi$ conventions coexist. This course keeps $2\pi$ in $\mathbf{b}_i$; mixing conventions mangles every diffraction formula. *([1.3](lessons/01-03-reciprocal-lattice.md))*
- $\theta$ in Bragg's law is the **glancing** angle from the plane; the detector sits at $2\theta$. The factor of two ruins every number if you take it from the normal, optics-style. *([1.4](lessons/01-04-xray-diffraction-bragg.md))*
- $n$ and $(hkl)$ are redundant: $n$-th order off $(hkl)$ *is* first order off $(nh,nk,nl)$. *([1.4](lessons/01-04-xray-diffraction-bragg.md))*
- A missing peak does **not** mean a missing reciprocal-lattice point — $\mathbf{G}_{hkl}$ is there and Bragg is satisfied; the basis simply zeroes the intensity. *([1.5](lessons/01-05-structure-factor.md))*
- Don't cancel the form factors prematurely: for *identical* atoms they factor out, but the moment the atoms differ (CsCl, NaCl) the $f_j$ decide which forbidden lines reappear and how bright. *([1.5](lessons/01-05-structure-factor.md))*

### Phonons and lattice dynamics

- Larger $k$ does not mean higher $\omega$ past the zone edge — those are **aliases**. Always fold $k$ into $-\pi/a < k \le \pi/a$ first. *([2.1](lessons/02-01-monatomic-chain.md), [2.3](lessons/02-03-phonons-quantization.md))*
- $v_p = \omega/k$ and $v_g = d\omega/dk$ agree only in the linear region. At the zone boundary $v_g = 0$: the pattern exists but carries no energy. *([2.1](lessons/02-01-monatomic-chain.md))*
- "Optical" names the **coupling mechanism** (an oscillating dipole talking to EM waves), not the wavelength — the photons involved are infrared. *([2.2](lessons/02-02-diatomic-chain-branches.md))*
- A phonon gap forbids *propagating* waves at those frequencies, not all motion — drive it there and you get an evanescent, decaying disturbance. Same caveat for the electronic band gap. *([2.2](lessons/02-02-diatomic-chain-branches.md))*
- A phonon has no location: it is a quantum of a *delocalized* mode. Localizing one means building a wavepacket, which then travels at $\nabla_{\mathbf{k}}\omega$. *([2.3](lessons/02-03-phonons-quantization.md))*
- Crystal momentum $\hbar\mathbf{k}$ is **not** real momentum, for phonons or for electrons — it is a lattice-translation label conserved only modulo $\mathbf{G}$. That modulo is exactly what allows Umklapp. *([2.3](lessons/02-03-phonons-quantization.md), [3.3](lessons/03-03-blochs-theorem.md))*
- Never give phonons a chemical potential: their number isn't conserved, so $\mu = 0$ and the Bose factor carries no $\mu$. *([2.3](lessons/02-03-phonons-quantization.md))*

### Heat capacity, expansion, conductivity

- "Low $T$" for the $T^3$ law means $T \lesssim \Theta_D/10$ — at $T = \Theta_D$ you are already near the plateau. Always check $T$ against $\Theta_D$ before picking a limit. *([2.4](lessons/02-04-heat-capacity-einstein-debye.md))*
- Einstein and Debye **agree** at high $T$ (both forced to $3Nk_B$ by the mode count). All the physics is at low $T$, set by the low-$\omega$ end of $g(\omega)$. *([2.4](lessons/02-04-heat-capacity-einstein-debye.md))*
- The heat-capacity integral is $\int x^4e^x/(e^x-1)^2 = 4\pi^4/15$, not the energy integral's $\pi^4/15$ — that factor of 4 is why the prefactor is $12\pi^4/5$. *([2.4](lessons/02-04-heat-capacity-einstein-debye.md))*
- A harmonic crystal expands **exactly zero**, not "a little": the average position in a parabola sits dead centre at every energy. *([2.5](lessons/02-05-anharmonicity-thermal.md))*
- Only **Umklapp** collisions resist heat flow; Normal processes conserve the drift and leave $\kappa$ infinite. *([2.5](lessons/02-05-anharmonicity-thermal.md))*
- $\kappa$ is not monotonic: below the peak, scattering is still *decreasing* yet $\kappa$ **rises**, because $C(T)$ controls things once $\ell$ has hit the sample walls. *([2.5](lessons/02-05-anharmonicity-thermal.md))*
- The Grüneisen $\gamma$ is not $C_P/C_V$, and not the Sommerfeld $\gamma$ of [3.2](lessons/03-02-fermi-surface-heat-capacity.md). Three different beasts, one letter. *([2.5](lessons/02-05-anharmonicity-thermal.md))*

### Free electrons and the Fermi surface

- $E_F$ depends only on the **density**: $k_F = (3\pi^2n)^{1/3}$. A bigger sample has the same Fermi energy. *([3.1](lessons/03-01-free-electron-gas.md))*
- At $T = 0$ the top electrons still move at $v_F\sim10^6$ m/s — Pauli-forced zero-point motion, not thermal. *([3.1](lessons/03-01-free-electron-gas.md))*
- Keep both counting factors: 2 for spin, and $(2\pi)^3/V$ of $\mathbf{k}$-space per state. Dropping either shifts the whole cascade. *([3.1](lessons/03-01-free-electron-gas.md))*
- Not all the electrons share the heat — an electron deep in the sea has no empty state within $k_BT$. Forgetting Pauli blocking *is* the classical mistake. *([3.2](lessons/03-02-fermi-surface-heat-capacity.md))*
- $\mu$ and $E_F$ coincide only at $T=0$; $\mu(T)$ drifts down by $\sim(T/T_F)^2$, which is negligible in a metal and worth stating anyway. *([3.2](lessons/03-02-fermi-surface-heat-capacity.md))*

### Bands and effective mass

- The perfectly periodic potential causes **zero** scattering — resistance comes only from what breaks periodicity (defects, impurities, phonons). Don't blame the ions themselves. *([3.3](lessons/03-03-blochs-theorem.md))*
- $\mathbf{k}$ outside the first zone is not a new state; fold it back and relabel the band index. One $\mathbf{k}$ per cell per band is the honest tally. *([3.3](lessons/03-03-blochs-theorem.md), [3.6](lessons/03-06-bands-zones-dos.md))*
- The NFE gap is a *degenerate* effect: at the zone boundary the first-order shift $\langle k|V|k\rangle = U_0$ vanishes and only the $2\times2$ splitting survives. Non-degenerate perturbation theory divides by zero here. *([3.4](lessons/03-04-nearly-free-electron.md))*
- The first gap is set by the single Fourier component $U_{2\pi/a}$, not by how deep $V(x)$ is overall — and it opens at $k = \pi/a$, not at $k=0$. *([3.4](lessons/03-04-nearly-free-electron.md))*
- Bigger hopping $t$ means *less* binding, not more: wider band ($W=4t$), lighter $m^*$, faster carriers. $t\to0$ collapses the band back to the atomic level. *([3.5](lessons/03-05-tight-binding.md))*
- A gap along one direction (say $\Gamma\to X$) is not a gap: the upper band's *global* minimum must clear the lower band's *global* maximum. *([3.6](lessons/03-06-bands-zones-dos.md))*
- A van Hove divergence is not infinitely many states — $\int g\,dE$ still converges. *([3.6](lessons/03-06-bands-zones-dos.md))*
- More electrons is not more conduction: a **filled** band conducts nothing, a half-filled one conducts beautifully. *([3.7](lessons/03-07-metals-insulators-semiconductors.md))*
- Even valence does **not** imply insulator — band overlap is why Mg, Ca and Zn are metals. *([3.6](lessons/03-06-bands-zones-dos.md), [3.7](lessons/03-07-metals-insulators-semiconductors.md))*
- Negative $m^*$ is no paradox, just downward curvature; we relabel the empty states as positive-mass, positive-charge holes and everything behaves. *([3.7](lessons/03-07-metals-insulators-semiconductors.md))*

### Semiconductors

- $n_i$ carries $e^{-E_g/2k_BT}$; the exponent without the 2 belongs to the *product* $np = n_i^2$. Dropping the 2 squares your error. *([4.1](lessons/04-01-intrinsic-carriers.md))*
- Doping never breaks the law of mass action — $E_F$ cancels out of $np$. Doping moves $n$ and $p$ in opposite directions and leaves $n_i$, a host property, alone. *([4.1](lessons/04-01-intrinsic-carriers.md), [4.2](lessons/04-02-doping-extrinsic.md))*
- Use the **effective** mass in $N_c$, $N_v$, and note $N_c\neq N_v$ in general — that inequality is what pushes $E_F$ off midgap. *([4.1](lessons/04-01-intrinsic-carriers.md))*
- An n-type crystal is electrically **neutral**: each freed electron leaves a fixed $+e$ donor ion behind. "n-type" names the mobile carrier, not a net charge. *([4.2](lessons/04-02-doping-extrinsic.md))*
- $E_d$ is a *binding* energy measured **down** from $E_c$ (and $E_a$ **up** from $E_v$) — shallow means small $E_d$. *([4.2](lessons/04-02-doping-extrinsic.md))*
- You do not set $E_F$; you set $N_d$, $N_a$, $T$, and $E_F$ is the output of charge neutrality — it moves on its own when $T$ changes. *([4.3](lessons/04-03-fermi-level-temperature-doping.md))*
- In the extrinsic plateau $E_F$ slides down while $n$ stays flat, because $N_c\propto T^{3/2}$ is ballooning. Falling $E_F$ is not electrons leaving. *([4.3](lessons/04-03-fermi-level-temperature-doping.md))*
- Heat past $T^\ast$ and $n\to n_i(T)$ no matter how heavily you doped — the washout is a failure mode. *([4.3](lessons/04-03-fermi-level-temperature-doping.md))*

### Transport and the junction

- Cooling helps a *metal* (fewer phonons, longer $\tau$) and hurts a *semiconductor* (carriers freeze back onto their atoms). The sign of $d\sigma/dT$ is the diagnostic. *([4.4](lessons/04-04-transport-mobility-hall.md))*
- Electrons and holes deflect to the **same** edge in a Hall bar — reversing $q$ also reverses $\mathbf{v}$, and the two flips cancel. What differs is the sign of the charge deposited, hence of $V_H$. *([4.4](lessons/04-04-transport-mobility-hall.md))*
- Always $m^*$, never $m_e$, in $\mu = e\tau/m^*$ — the band curvature is the inertia. *([4.4](lessons/04-04-transport-mobility-hall.md))*
- The depletion region is swept **clean** of mobile carriers; only fixed ionized dopants remain. *([4.5](lessons/04-05-pn-junction.md))*
- Flat $E_F$ is what *forces* the bands to bend — the two sides start with $E_F$ at different heights relative to their own band edges. *([4.5](lessons/04-05-pn-junction.md))*
- Reverse bias is not zero current: minority carriers drift *downhill* across the depletion field, giving the nearly $V$-independent $-I_0$. *([4.5](lessons/04-05-pn-junction.md))*

### Magnetism

- Every material is diamagnetic; you only *see* it when there are no permanent moments to swamp it with a larger Curie term. *([5.1](lessons/05-01-dia-paramagnetism.md))*
- Metallic paramagnetism does **not** follow $1/T$: Pauli blocking fixes the number of responsive electrons at $g(E_F)$, so $\chi_{\text{Pauli}}$ is flat in $T$. Flat versus $1/T$ is how you tell itinerant from localized. *([5.1](lessons/05-01-dia-paramagnetism.md))*
- Distinguish $\mu$ (the actual moment) from $\mu_B$; the two-level $C = \mu_0n\mu^2/k_B$ and the general $\tfrac13g^2J(J+1)\mu_B^2$ agree only for spin-$\tfrac12$. *([5.1](lessons/05-01-dia-paramagnetism.md))*
- The aligning force in a ferromagnet is **electrostatic**, not magnetic — dipole–dipole coupling is $\sim1$ K, three orders too weak. *([5.2](lessons/05-02-exchange-ferromagnetism.md))*
- $\lambda M$ is a *fictitious* field (hundreds of tesla), a stand-in for the average exchange, not something you could apply in a lab. *([5.2](lessons/05-02-exchange-ferromagnetism.md))*
- $M$ does not fade linearly from $T=0$: it holds near saturation and collapses only near $T_C$, as $\sqrt{T_C-T}$. *([5.2](lessons/05-02-exchange-ferromagnetism.md))*
- Flipping one spin is not the cheapest excitation — it costs $2ZJ$ in Ising and isn't even an eigenstate in Heisenberg. The real low-energy excitation is the delocalized magnon. *([5.3](lessons/05-03-heisenberg-ising.md))*
- An antiferromagnet has zero net $M$ yet is exquisitely ordered — you need the *staggered* magnetization (or neutron diffraction) to see it. *([5.3](lessons/05-03-heisenberg-ising.md))*
- Read mean-field $T_c$ for scaling ($T_c\propto ZJ$), never as a number: it overshoots Onsager by 76% in 2D and wrongly predicts order in 1D. *([5.3](lessons/05-03-heisenberg-ising.md))*

### Superconductivity and the frontier

- Zero resistance does **not** imply the Meissner effect: a perfect conductor freezes in whatever flux was there; a superconductor expels it regardless of history. Expulsion is the definitive test. *([5.4](lessons/05-04-superconductivity-phenomena.md))*
- The flux quantum is $h/2e$, not $h/e$ — that 2 is the experimental fingerprint of pairing, not a nuisance factor. *([5.4](lessons/05-04-superconductivity-phenomena.md), [5.5](lessons/05-05-cooper-pairs-bcs.md))*
- $B = 0$ holds in the **bulk** only; the field lives in a $\lambda_L$-thick skin, and a film thinner than $\lambda_L$ shows an incomplete Meissner effect. *([5.4](lessons/05-04-superconductivity-phenomena.md))*
- Breaking a pair costs $2\Delta$, not $\Delta$ — two quasiparticles come out. *([5.5](lessons/05-05-cooper-pairs-bcs.md))*
- A Cooper pair is not a little molecule: partners sit $\xi\sim$ thousands of atoms apart with millions of pairs overlapping. Pairing is a correlation in **momentum** space. *([5.5](lessons/05-05-cooper-pairs-bcs.md))*
- Quantum Hall plateaus are wide *because of* disorder, not despite it — disorder localizes the states between Landau levels while the integer itself stays topologically fixed. *([5.6](lessons/05-06-topological-correlated.md))*
- A Mott insulator is not "an insulator like diamond": diamond has even filling and needs no interactions, while a Mott insulator is half-filled and is a metal in every non-interacting theory. *([5.6](lessons/05-06-topological-correlated.md))*
- Do not hunt for an order parameter in a topological phase — there isn't a local one, which is precisely why Landau's classification doesn't reach it. *([5.6](lessons/05-06-topological-correlated.md))*
