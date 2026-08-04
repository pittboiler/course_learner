# Quantum Chemistry — Syllabus

> Chemistry · Tier 2 · ~21 lessons · Prereqs: [physical-chemistry](../physical-chemistry/syllabus.md) · Roadmap id: `quantum-chemistry`

## Goal

This course takes you from the quantum mechanics of a single atom to predicting the energies, structures, and spectra of real molecules on a computer. You will understand *why* the standard methods — Hartree–Fock, MP2, coupled cluster, DFT — work, what each one throws away, and how to read the output of a modern electronic-structure code with a critical eye. It deliberately skips relativistic quantum chemistry and the low-level details of coding an integral engine; the aim is a working chemist's judgment, not a from-scratch implementation.

## Dangerous Checklist

When you finish, you can:

- [ ] Apply the variational principle to a trial wavefunction and know your energy is a rigorous upper bound
- [ ] Estimate an energy shift with first- and second-order perturbation theory and say when each is trustworthy
- [ ] Explain the Born–Oppenheimer approximation and draw the potential energy surface it produces
- [ ] Build the LCAO secular determinant for H₂⁺ and predict bonding vs. antibonding energies and orbitals
- [ ] Write a many-electron state as a Slater determinant and explain what antisymmetry buys you (exchange, Fermi holes)
- [ ] Set up the Hartree–Fock equations and run a self-consistent-field cycle by hand for a minimal basis
- [ ] Choose a basis set (STO vs. GTO, minimal vs. split-valence vs. polarized) and justify the cost/accuracy trade-off
- [ ] Distinguish dynamic from static correlation and pick MP2, CI, or coupled cluster accordingly
- [ ] State the Hohenberg–Kohn theorems and explain how the Kohn–Sham equations turn DFT into a solvable problem
- [ ] Optimize a molecular geometry and classify a stationary point as a minimum or a transition state from its Hessian
- [ ] Compute a harmonic vibrational frequency and explain why it overshoots the experimental value
- [ ] Predict the qualitative features of an electronic or vibrational spectrum from a computed structure

## Modules

### Module 1: From Atoms to Molecules

Rebuild the quantum toolkit, then use the variational principle and perturbation theory to cross the bridge from the hydrogen atom to the simplest molecule and the language of molecular orbitals.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The Quantum Toolkit, Refreshed | Compute expectation values and read the postulates fluently | postulates, operators, Dirac notation, atomic units |
| 1.2 | The Hydrogen Atom, Revisited | Name and picture every hydrogenic orbital and its energy | quantum numbers, radial/angular parts, orbital shapes |
| 1.3 | The Variational Principle | Turn any trial wavefunction into a rigorous energy upper bound | Rayleigh quotient, trial functions, linear variation |
| 1.4 | Perturbation Theory | Estimate energy shifts when the Hamiltonian is "almost" solvable | first/second-order energy, small-parameter expansion |
| 1.5 | The Born–Oppenheimer Approximation | Separate nuclei from electrons and define the potential energy surface | mass separation, PES, electronic Hamiltonian |
| 1.6 | H₂⁺ and the LCAO Idea | Predict bonding/antibonding orbitals from a two-center secular determinant | LCAO, overlap integral, secular equation, σ orbitals |

**Boss problem 1:** For H₂⁺ in a minimal LCAO basis of two 1s orbitals, with $H_{AA}=H_{BB}=\alpha$, $H_{AB}=\beta$, and overlap $S=\langle A|B\rangle$, set up and solve the $2\times2$ secular determinant. Derive the bonding and antibonding energies $E_\pm = (\alpha\pm\beta)/(1\pm S)$, write the normalized MOs, and show that the antibonding level is destabilized *more* than the bonding level is stabilized. Explain physically why the overlap $S$ causes this asymmetry.

### Module 2: Hartree–Fock and Basis Sets

Confront many electrons at once: antisymmetry forces the Slater determinant, the mean-field approximation gives the Fock operator, and the self-consistent field plus a finite basis makes it computable.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Many Electrons and Antisymmetry | Write a fermionic state as a Slater determinant and read off its consequences | Pauli principle, Slater determinant, exchange, Fermi hole |
| 2.2 | The Hartree–Fock Equations | Derive the Fock operator as a mean field of Coulomb + exchange | Fock operator, Coulomb/exchange operators, orbital energies |
| 2.3 | The Self-Consistent Field | Run the SCF loop and know when it has converged | SCF iteration, density, convergence, Koopmans' theorem |
| 2.4 | Roothaan–Hall: HF as Matrices | Recast HF in a finite basis as a generalized eigenvalue problem | LCAO-MO coefficients, $FC=SC\varepsilon$, density matrix |
| 2.5 | Basis Sets | Choose STO vs. GTO and minimal vs. polarized for a target accuracy | STO/GTO, contraction, split-valence, polarization, BSSE |

**Boss problem 2:** For ground-state H₂ in a minimal basis (one 1s on each atom), symmetry fixes the occupied MO as the normalized bonding combination. Write the restricted Hartree–Fock electronic energy in terms of the core (one-electron) integral $h_{11}$ over that MO and the two-electron Coulomb integral $J_{11}=(11|11)$. Show $E_{\text{HF}} = 2h_{11} + J_{11}$, identify $J_{11}$ as the residual same-orbital electron repulsion, and explain why this energy cannot dissociate H₂ correctly.

### Module 3: Electron Correlation and Density-Functional Theory

Hartree–Fock is a floor, not a ceiling. Recover the correlation energy it misses — through excited configurations and perturbation theory — then switch paradigms to the electron density and DFT.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The Correlation Problem | Define correlation energy and separate its dynamic and static flavors | correlation energy, dynamic vs. static, HF dissociation failure |
| 3.2 | Configuration Interaction | Improve HF by mixing in excited determinants | excited configurations, CI matrix, CISD, size-consistency |
| 3.3 | Møller–Plesset (MP2) | Estimate correlation cheaply with second-order perturbation theory | MP2 energy, orbital energy denominators, when MP2 fails |
| 3.4 | Coupled Cluster — A Taste | Explain why the exponential ansatz is the gold standard | cluster operator, CCSD(T), size-extensivity |
| 3.5 | DFT I: Hohenberg–Kohn | State the two theorems that make the density the master variable | density as variable, HK theorems, universal functional |
| 3.6 | DFT II: Kohn–Sham | Turn the density functional into solvable orbital equations and pick a functional | KS orbitals, exchange-correlation functional, LDA/GGA/hybrid |

**Boss problem 3:** For minimal-basis H₂, build the $2\times2$ configuration-interaction matrix in the space spanned by the Hartree–Fock ground configuration $|\Psi_0\rangle$ (both electrons in the bonding MO) and the doubly excited configuration $|\Psi_{11}^{22}\rangle$ (both in the antibonding MO). Given diagonal energies $E_0$ and $E_2$ and off-diagonal coupling $K$, diagonalize it, and show that the lower CI root lies below $E_0$ (this is the correlation energy) and, unlike Hartree–Fock, dissociates to two neutral H atoms. Explain what static correlation is doing here.

### Module 4: Computational Chemistry and Spectroscopy

Point the machinery at real questions: where are the atoms, how does the molecule vibrate, and what does it absorb? Learn to run and, more importantly, to *trust* (or distrust) the calculation.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Potential Energy Surfaces and Geometry Optimization | Find a stationary point and classify it from the gradient and Hessian | gradients, Hessian, minima vs. transition states, convergence |
| 4.2 | Vibrational Frequencies | Get harmonic frequencies from the Hessian and know why they run high | mass-weighted Hessian, normal modes, harmonic approximation, scaling factors |
| 4.3 | Electronic Spectra | Predict UV/Vis transitions and their intensities from excited states | excited states, TD-DFT idea, selection rules, oscillator strength |
| 4.4 | Reading a Calculation Critically | Report an energy, structure, or spectrum with honest error bars | method/basis pairing, thermochemistry, benchmarking, error sources |

**Boss problem 4:** A harmonic frequency calculation on CO returns a force constant $k = 1902\ \text{N m}^{-1}$. Using the reduced mass $\mu = m_\mathrm{C}m_\mathrm{O}/(m_\mathrm{C}+m_\mathrm{O})$, compute the fundamental vibrational wavenumber $\tilde{\nu} = \frac{1}{2\pi c}\sqrt{k/\mu}$ in cm⁻¹. Compare to the experimental value (~2143 cm⁻¹), explain why the *computed harmonic* number typically lands above experiment, and state what an empirical scaling factor is correcting for.

## Sources of truth

- Szabo & Ostlund, *Modern Quantum Chemistry* — for Hartree–Fock, Roothaan, and post-HF notation and rigor.
- Levine, *Quantum Chemistry* — for the atomic/molecular foundations and the variational and perturbation treatments.
- Jensen, *Introduction to Computational Chemistry* — for basis sets, DFT, and practical computational workflow.
- McQuarrie, *Quantum Chemistry* — for intuition-first derivations and worked hydrogenic/variational examples.
