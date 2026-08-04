# Condensed Matter / Solid State — Syllabus

> Physics · Tier 2 · ~28 lessons · Prereqs: [quantum-mechanics](../quantum-mechanics/syllabus.md), [stat-mech](../stat-mech/syllabus.md) · Roadmap id: `condensed-matter`

## Goal

Learn how the quantum mechanics of one particle and the statistical mechanics of many become the physics of **real materials** — why some solids conduct, some insulate, some magnetize, and some superconduct. You will build the standard toolkit: crystal lattices and the reciprocal space that diffraction lives in, phonons and their heat capacity, the free-electron gas and the band theory that upgrades it, semiconductor carrier statistics all the way to the p–n junction, and the collective phenomena of magnetism and superconductivity. Deliberately skipped: the many-body quantum-field formalism (creation/annihilation on Fock space beyond a passing mention), a full microscopic BCS derivation (we go as far as the qualitative gap and Cooper-pair picture), and device-fabrication engineering. This is a tier-2 course — it assumes fluency with `quantum-mechanics` (Bloch-ready Schrödinger equation, spin, the harmonic oscillator you'll recycle as a phonon) and `stat-mech` (Fermi–Dirac and Bose–Einstein statistics, the grand canonical ensemble, the chemical potential you'll track as the Fermi level).

## Dangerous Checklist

When you finish, you can:

- [ ] Classify a crystal by its Bravais lattice and basis, and construct its primitive and Wigner–Seitz cells
- [ ] Build the reciprocal lattice and first Brillouin zone, and index lattice planes with Miller indices
- [ ] Predict X-ray diffraction peaks from Bragg's law and explain systematic absences from the structure factor
- [ ] Derive the phonon dispersion of a 1D chain and read off its acoustic and optical branches
- [ ] Compute a solid's lattice heat capacity in the Einstein and Debye models and explain the low-temperature $T^3$ law
- [ ] Build the free-electron gas: compute the Fermi energy, Fermi surface, density of states, and electronic heat capacity
- [ ] State and use Bloch's theorem, and explain how band gaps open in the nearly-free-electron and tight-binding pictures
- [ ] Explain the metal / insulator / semiconductor distinction from band filling and effective mass
- [ ] Compute intrinsic and extrinsic carrier concentrations and locate the Fermi level as a function of temperature and doping
- [ ] Analyze a p–n junction: built-in potential, depletion width, and why it rectifies
- [ ] Distinguish dia-, para-, and ferromagnetism, and derive the Curie and Curie–Weiss laws from mean-field theory
- [ ] Explain the Meissner effect, Cooper pairing, and the qualitative BCS picture of superconductivity

## Modules

### Module 1: Crystal structure and diffraction

How a periodic arrangement of atoms is described, and how we actually *see* it — the reciprocal lattice and X-ray diffraction are two views of the same symmetry.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Lattices and bases: the Bravais idea | Separate the repeating grid from the atomic motif and build unit cells | lattice + basis, Bravais lattice, primitive vs conventional cell, Wigner–Seitz cell, coordination number |
| 1.2 | Common structures and Miller indices | Recognize sc/bcc/fcc/hcp and label planes and directions | close packing, packing fraction, cubic families, Miller indices $(hkl)$, interplanar spacing $d_{hkl}$ |
| 1.3 | The reciprocal lattice | Construct the dual lattice where periodicity becomes a wavevector | reciprocal lattice vectors $\mathbf{b}_i$, $\mathbf{G}\cdot\mathbf{R}=2\pi n$, first Brillouin zone, planes ↔ points |
| 1.4 | X-ray diffraction and Bragg's law | Predict where scattered X-rays constructively interfere | Bragg condition $2d\sin\theta=n\lambda$, Laue condition $\Delta\mathbf{k}=\mathbf{G}$, Ewald construction, powder pattern |
| 1.5 | The structure factor: what diffraction can't see | Explain missing peaks from the atomic arrangement in the cell | atomic form factor, structure factor $S_\mathbf{G}$, systematic absences (bcc/fcc rules), intensity vs position |

**Boss problem 1:** A cubic powder pattern shows its first few reflections at a set of angles. Index the peaks (assign $(hkl)$), determine whether the lattice is sc, bcc, or fcc from the allowed-reflection rule, extract the lattice constant, and predict the angle of the next missing/allowed line. (Solve the structure-factor sum for bcc and fcc first to justify the selection rule.)

### Module 2: Phonons and thermal properties

Atoms don't sit still. Quantize their collective vibrations and you get phonons — and with them, the heat capacity of a solid.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Lattice vibrations: the 1D monatomic chain | Solve coupled masses-on-springs and get a dispersion relation | equation of motion, plane-wave ansatz, dispersion $\omega(k)$, first BZ, group velocity, sound speed |
| 2.2 | The diatomic chain: acoustic and optical branches | Add a two-atom basis and see a gap and a new branch appear | two-atom basis, acoustic vs optical branch, band gap in $\omega$, zone-boundary behavior, IR activity |
| 2.3 | Phonons: quantizing the modes | Reuse the oscillator to turn modes into countable quanta | normal modes, phonon $=\hbar\omega$ quanta, Bose occupation, phonon density of states, crystal momentum |
| 2.4 | Heat capacity: Einstein and Debye models | Compute $C_V(T)$ and explain both limits | Dulong–Petit, Einstein model, Debye model, Debye temperature $\Theta_D$, low-$T$ $T^3$ law |
| 2.5 | Anharmonicity: thermal expansion and conductivity | Explain what a purely harmonic crystal gets wrong | anharmonic potential, Grüneisen parameter, thermal expansion, phonon–phonon scattering, Umklapp, $\kappa(T)$ |

**Boss problem 2:** Starting from the phonon density of states in the Debye approximation, derive the heat capacity integral, take both the high-$T$ (Dulong–Petit) and low-$T$ ($T^3$) limits explicitly, and estimate $\Theta_D$ for a solid given its measured low-temperature $C_V$. Comment on why the Einstein model fails at low $T$.

### Module 3: Electrons in solids

The electrons carry the current, the heat, and most of the interesting physics. Start with a free gas, then let the lattice speak — and bands appear.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The free-electron (Sommerfeld) gas | Fill a box of electrons with Fermi statistics and read off the scales | Fermi gas, $k_F$, Fermi energy/velocity, density of states $g(\varepsilon)$, Fermi–Dirac at $T=0$ |
| 3.2 | The Fermi surface and electronic heat capacity | Explain why only electrons near $E_F$ matter thermally | Fermi surface, Sommerfeld expansion, linear-in-$T$ electronic $C_V$, Pauli paramagnetism preview |
| 3.3 | Bloch's theorem | Show that a periodic potential dresses plane waves, not destroys them | periodic potential, Bloch states $\psi=e^{i\mathbf{k}\cdot\mathbf{r}}u_\mathbf{k}$, crystal momentum, band index, Born–von Kármán |
| 3.4 | The nearly-free-electron model | Open a gap where a plane wave meets the zone boundary | weak periodic potential, degenerate perturbation, gap $=2|U_\mathbf{G}|$, zone-boundary standing waves |
| 3.5 | The tight-binding model | Build bands from the other end — overlapping atomic orbitals | LCAO, hopping integral $t$, bandwidth $\sim$ coordination$\times t$, $s$-band dispersion, Wannier picture |
| 3.6 | Bands, zones, and the density of states | Assemble $E(\mathbf{k})$ into bands and count states | reduced/extended zone schemes, band overlap, van Hove singularities, filling and $E_F$ placement |
| 3.7 | Metals, insulators, and semiconductors | Predict conduction from how bands fill, plus effective mass and holes | full vs partial band, band gap, effective mass $m^*$, holes, semimetal, why filled bands carry no current |

**Boss problem 3:** For a 1D tight-binding $s$-band $E(k)=\varepsilon_0-2t\cos(ka)$, derive the group velocity and the effective mass $m^*(k)$, identify where $m^*$ is negative and interpret it as a hole, and compare the band edges to the nearly-free-electron gap picture at the zone boundary. Then state whether a monovalent vs divalent filling gives a metal or insulator, and why.

### Module 4: Semiconductors

Take band theory to its most consequential application: a nearly-full band, a nearly-empty band, and a handful of dopants that put modern electronics in your pocket. Bridge to `../semiconductor-devices/syllabus.md`.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Intrinsic semiconductors and carrier statistics | Count thermally excited electrons and holes in a pure crystal | conduction/valence band, effective density of states, $n_i$, law of mass action $np=n_i^2$, band-gap scaling |
| 4.2 | Doping: donors, acceptors, and extrinsic carriers | Add impurities and control the carrier type and count | shallow donor/acceptor levels, ionization energy, $n$- vs $p$-type, majority/minority carriers, freeze-out |
| 4.3 | The Fermi level vs temperature and doping | Track where $E_F$ sits across regimes | charge neutrality, $E_F(T)$, freeze-out / extrinsic / intrinsic regimes, compensation |
| 4.4 | Transport: mobility, conductivity, and the Hall effect | Relate carrier motion to measurable currents and signs | drift velocity, mobility $\mu$, $\sigma=ne\mu$, scattering time, Hall coefficient and carrier sign |
| 4.5 | The p–n junction | Build the diode: a junction that rectifies | depletion region, built-in potential $V_{bi}$, band bending, drift/diffusion balance, forward/reverse bias |

**Boss problem 4:** For a silicon-like semiconductor with a given gap and effective masses, compute the intrinsic carrier concentration $n_i$ at room temperature, then dope it $n$-type to a stated donor density and find the majority-carrier concentration, the minority-carrier concentration (via mass action), and the shift of $E_F$ from midgap. Finally, estimate the built-in potential of a p–n junction formed from this material.

### Module 5: Magnetism and superconductivity

The collective quantum phenomena — where interactions and statistics conspire to make matter do things no single electron can. Feeds `../materials-science/syllabus.md`.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Diamagnetism and paramagnetism | Explain a material's linear magnetic response from its electrons | Larmor diamagnetism, Langevin/Curie paramagnetism, $\chi=C/T$, Pauli paramagnetism, Landau diamagnetism |
| 5.2 | Exchange and ferromagnetism | Show how Coulomb + Pauli produce a spontaneous magnet | exchange interaction, Weiss mean field, Curie temperature $T_C$, Curie–Weiss law, spontaneous magnetization |
| 5.3 | The Heisenberg and Ising models | Write down the spin Hamiltonians the whole field runs on | Heisenberg $H=-J\sum \mathbf{S}_i\cdot\mathbf{S}_j$, Ising limit, magnons/spin waves, antiferromagnetism, order parameter |
| 5.4 | Superconductivity I: the phenomena | Describe zero resistance and perfect diamagnetism | zero resistance, Meissner effect, London equations, penetration depth, critical field, type I vs II |
| 5.5 | Superconductivity II: Cooper pairs and BCS (qualitative) | Explain why an attractive pairing opens a gap | electron–phonon attraction, Cooper pair, energy gap $\Delta$, coherence, isotope effect, Josephson taste |
| 5.6 | A glimpse of topological and strongly-correlated matter | Preview where the modern field goes beyond band theory | quantum Hall effect, topological insulators, edge states, Mott insulator, correlations vs bands |

**Boss problem 5:** In the Weiss mean-field theory of a ferromagnet, write the self-consistency equation $M=M_s\,\tanh(\mu H_{\text{eff}}/k_BT)$ with $H_{\text{eff}}=H+\lambda M$, linearize above $T_C$ to derive the Curie–Weiss law $\chi=C/(T-T_C)$, and identify $T_C$ in terms of the exchange constant. Then explain physically why the same $J$ that aligns spins here would instead be recycled as the electron–phonon glue in a Cooper pair.

## Sources of truth

- Kittel, *Introduction to Solid State Physics* (primary; notation, scope, problem style)
- Ashcroft & Mermin, *Solid State Physics* (the rigorous long-form derivations for bands, Fermi surfaces, and transport)
- Simon, *The Oxford Solid State Basics* (the intuition-first framing and lesson ordering this course leans on)
- Hook & Hall, *Solid State Physics* (clean treatments of semiconductors and superconductivity at this level)
