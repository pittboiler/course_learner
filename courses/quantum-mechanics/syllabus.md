# Quantum Mechanics — Syllabus

> Tier 2 · 32 lessons · Prereqs: [`linalg-refresher`](../linalg-refresher/syllabus.md), [`analytical-mechanics`](../analytical-mechanics/syllabus.md), [`complex-analysis`](../complex-analysis/syllabus.md) (light) · Roadmap id: `quantum-mechanics`

## Goal

Learn quantum mechanics the way it is actually used: as **linear algebra on a Hilbert space with a probabilistic reading**. Start from the experiments that break classical physics, build the state/operator/measurement framework, solve the canonical exactly-solvable systems (well, oscillator, hydrogen), master angular momentum and spin, understand entanglement and identical particles, and finish with the approximation methods (perturbation theory, variational, WKB) that every real problem needs. You will be able to set up and solve standard problems, compute spectra and expectation values, and read the formalism of a graduate text. Deliberately kept lighter: relativistic QM and the Dirac equation (only named), quantum field theory (the endpoint, not entered), scattering theory beyond 1D barriers and the Born approximation, and the full measurement-interpretation debate (stated, not adjudicated). This is a tier-2 course — it assumes fluency with `linalg-refresher` (eigenvalues, Hermitian/unitary operators, inner-product spaces, spectral theorem) and leans on `analytical-mechanics` for the Hamiltonian/Poisson-bracket structure it quantizes.

## Dangerous Checklist

When you finish, you can:

- [ ] Explain which classical predictions the double-slit, photoelectric, and atomic-stability experiments falsify, and what quantization fixes
- [ ] Normalize a wavefunction and compute probabilities, expectation values, and uncertainties from it
- [ ] Manipulate states and operators fluently in Dirac notation, and read observables as Hermitian operators with real eigenvalue spectra
- [ ] Solve the time-independent Schrödinger equation for the square well, finite well, barrier (tunneling), and free particle
- [ ] Solve the harmonic oscillator both analytically and with ladder operators, and use $a,a^\dagger$ to compute matrix elements
- [ ] Derive the uncertainty principle from the commutator of two observables
- [ ] Separate the 3D Schrödinger equation, build the angular-momentum algebra, and write the hydrogen spectrum and degeneracies
- [ ] Work with spin-1/2, the Pauli matrices, and Stern–Gerlach, and add two angular momenta
- [ ] Antisymmetrize/symmetrize identical-particle states, and construct and test an entangled (Bell) state against a Bell inequality
- [ ] Apply nondegenerate and degenerate perturbation theory, the variational principle, and WKB to estimate energies
- [ ] Use time-dependent perturbation theory and Fermi's golden rule to get a transition rate and selection rules

## Modules

### Module 1: The quantum framework

The experiments that force a new mechanics, and the state–operator–measurement scaffolding that answers them.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Why quantum: the experiments that break classical physics | Name what fails classically and what quantization repairs | blackbody/UV catastrophe, photoelectric effect, double-slit, atomic stability, $E=\hbar\omega$ |
| 1.2 | The wavefunction and the Born rule | Read $\psi$ as a probability amplitude and extract predictions | wavefunction, $|\psi|^2$, normalization, probability current, expectation value |
| 1.3 | Hilbert space and Dirac notation | Recast states as vectors and use bra–ket algebra | Hilbert space, kets/bras, inner product, completeness, orthonormal basis |
| 1.4 | Observables as Hermitian operators | Turn measurable quantities into operators with real spectra | linear operator, Hermitian/self-adjoint, eigenvalues/eigenstates, spectral decomposition |
| 1.5 | Measurement, collapse, and expectation values | Predict outcomes, probabilities, and post-measurement states | measurement postulate, collapse, Born probabilities, expectation & variance, compatible observables preview |

**Boss problem 1:** Given a particle in a superposition of two energy eigenstates of a known system, compute the probability of each measurement outcome, the expectation value and uncertainty of the energy, and the state immediately after a measurement returns the lower eigenvalue.

### Module 2: The Schrödinger equation and one-dimensional systems

The dynamical law, and the exactly-solvable 1D worlds that build all the intuition.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The Schrödinger equation | Write the dynamical law and separate time from space | time-dependent SE, Hamiltonian operator, separation of variables, time-independent SE |
| 2.2 | Stationary states and time evolution | Evolve any state by decomposing into energy eigenstates | stationary state, $e^{-iE t/\hbar}$ phase, superposition, expansion in eigenstates |
| 2.3 | The infinite square well | Solve the cleanest bound-state problem and read off quantization | boundary conditions, quantized energies, node counting, orthonormal eigenfunctions |
| 2.4 | The finite square well and bound states | Match wavefunctions across a boundary and count bound states | continuity of $\psi,\psi'$, transcendental matching, penetration depth, finite # of bound states |
| 2.5 | Scattering, barriers, and tunneling | Compute transmission and reflection, and quantify tunneling | step potential, barrier, transmission/reflection coefficients, tunneling, evanescent waves |
| 2.6 | The free particle and wave packets | Build localized states and track how they move and spread | plane waves, Fourier superposition, wave packet, phase vs group velocity, spreading |

**Boss problem 2:** For a particle of energy $E$ below a rectangular barrier of height $V_0$ and width $a$, derive the transmission coefficient, take the thick-barrier limit, and estimate the tunneling probability for a concrete case (e.g. alpha decay or an STM gap).

### Module 3: The harmonic oscillator and operator formalism

The most important system in physics, solved twice, and the algebra it teaches.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The harmonic oscillator I: the analytic method | Solve $H\psi=E\psi$ for the oscillator via series/Hermite functions | power-series method, Hermite polynomials, Gaussian ground state, $E_n=\hbar\omega(n+\tfrac12)$ |
| 3.2 | The harmonic oscillator II: ladder operators | Rebuild the whole spectrum from algebra alone | $a,a^\dagger$, number operator, raising/lowering, matrix elements, zero-point energy |
| 3.3 | Commutators and the uncertainty principle | Derive uncertainty from non-commutation | commutator, canonical $[\hat x,\hat p]=i\hbar$, generalized uncertainty relation, energy–time |
| 3.4 | Compatible observables and complete sets | Know when observables can be jointly measured and labeled | simultaneous eigenstates, $[A,B]=0$, complete set of commuting observables, degeneracy |
| 3.5 | The Heisenberg picture and Ehrenfest's theorem | Move dynamics onto operators and recover classical motion | Heisenberg equation, $\dot A = \tfrac{i}{\hbar}[H,A]$, Ehrenfest's theorem, Poisson bracket → commutator |

**Boss problem 3:** Using ladder operators only, compute $\langle x^2\rangle$ and $\langle p^2\rangle$ in the $n$-th oscillator state, verify the uncertainty product $\Delta x\,\Delta p$, and show the ground state saturates the bound.

### Module 4: Three dimensions, angular momentum, and spin

Real atoms: the 3D equation, the angular-momentum algebra, hydrogen, and the intrinsic spin classical physics never saw.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | The Schrödinger equation in three dimensions | Separate a central-potential problem into radial and angular parts | 3D SE, central potential, separation, radial equation, effective potential |
| 4.2 | Angular momentum: the operator algebra | Derive the angular-momentum spectrum from commutators alone | $\hat L^2,\hat L_z$, $[\hat L_i,\hat L_j]=i\hbar\epsilon_{ijk}\hat L_k$, raising/lowering, $\ell,m$ quantization |
| 4.3 | Spherical harmonics and the rigid rotor | Attach the angular solutions to physical rotational states | spherical harmonics $Y_\ell^m$, angular nodes, rigid rotor spectrum, degeneracy $2\ell+1$ |
| 4.4 | The hydrogen atom | Solve the radial equation and read the spectrum and degeneracies | Coulomb potential, Laguerre polynomials, $E_n=-13.6\,\text{eV}/n^2$, quantum numbers, accidental degeneracy |
| 4.5 | Spin-1/2, Pauli matrices, and Stern–Gerlach | Handle the two-state intrinsic angular momentum | spin, Pauli matrices, spinors, Stern–Gerlach, $g$-factor, magnetic moment |
| 4.6 | Addition of angular momenta | Combine two angular momenta into total-spin multiplets | coupled vs uncoupled basis, Clebsch–Gordan coefficients, singlet/triplet, $|j_1-j_2|\le j\le j_1+j_2$ |

**Boss problem 4:** For the hydrogen $n=2$ level, list the states $(n,\ell,m,m_s)$ and their degeneracy, then couple the electron spin to $\ell=1$ to build the $j$ multiplets and their $m_j$ values (a warm-up for fine structure).

### Module 5: Identical particles and entanglement

What makes many-body quantum mechanics genuinely non-classical.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Identical particles: bosons and fermions | Symmetrize or antisymmetrize and get the Pauli principle | indistinguishability, exchange symmetry, symmetric/antisymmetric states, Slater determinant, Pauli exclusion |
| 5.2 | Tensor products and entanglement | Build composite states and diagnose entanglement | tensor product space, product vs entangled states, Bell states, Schmidt idea |
| 5.3 | Bell's inequality and nonlocality | See why no local hidden-variable theory reproduces QM | EPR, local hidden variables, CHSH/Bell inequality, quantum violation |
| 5.4 | Mixed states and the density matrix | Describe ignorance and subsystems with $\rho$ | density operator, pure vs mixed, trace rules, reduced density matrix, decoherence preview |

**Boss problem 5:** Take the two-spin singlet, measure the spins along axes separated by angle $\theta$, compute the correlation $\langle \sigma_a\otimes\sigma_b\rangle$, and show it violates the CHSH bound at the optimal angles.

### Module 6: Approximation methods

Almost nothing is exactly solvable — the toolkit that makes quantum mechanics predictive.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 6.1 | Time-independent perturbation theory (nondegenerate) | Correct energies and states for a small extra term | first-order energy shift, second-order shift, first-order state correction, convergence caveats |
| 6.2 | Degenerate perturbation theory | Handle the degenerate case by diagonalizing the perturbation | degeneracy lifting, good basis, secular equation, "diagonalize $W$ in the subspace" |
| 6.3 | The variational principle | Bound the ground-state energy from above with a trial state | Rayleigh–Ritz, trial wavefunction, upper bound, parameter optimization |
| 6.4 | The WKB approximation | Get spectra and tunneling in the semiclassical regime | semiclassical limit, WKB wavefunction, connection formulas, Bohr–Sommerfeld quantization, tunneling integral |
| 6.5 | Time-dependent perturbation theory | Compute transition amplitudes between states | interaction picture, transition amplitude, Rabi oscillation, sinusoidal perturbation |
| 6.6 | Fermi's golden rule and radiation | Turn perturbation theory into transition rates and selection rules | transition rate, density of states, Fermi's golden rule, dipole selection rules, absorption/emission |

**Boss problem 6:** For a charged particle in a 1D box perturbed by a weak uniform field (or an anharmonic $\lambda x^4$ term), compute the first-order energy shifts, then use the variational method with a one-parameter trial state to bound the ground-state energy and compare.

## Sources of truth

- Griffiths & Schroeter, *Introduction to Quantum Mechanics* (primary; notation, scope, problem style)
- Shankar, *Principles of Quantum Mechanics* (the Hilbert-space-first viewpoint and Dirac notation)
- Sakurai & Napolitano, *Modern Quantum Mechanics* (spin-first framing, angular momentum, the operator formalism for the grad-level reach)
- Cohen-Tannoudji, Diu & Laloë for the careful long-form derivations when needed
