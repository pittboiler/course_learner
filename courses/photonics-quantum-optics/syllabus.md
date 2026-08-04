# Quantum Optics & Photonics — Syllabus

> Physics · Tier 2 · ~20 lessons · Prereqs: [quantum-mechanics](../quantum-mechanics/syllabus.md), [em-refresher](../em-refresher/syllabus.md) · Roadmap id: `photonics-quantum-optics`

## Goal

Learn how light and matter actually exchange energy, how that gives us lasers, and — the payoff — what changes when the electromagnetic field itself is quantized. You will trace one continuous story: classical waves and Gaussian beams → the two-level atom and the Einstein coefficients → laser gain and cavities → optical coherence and its correlation functions → the moment coherence fails and photons become unavoidable → the quantized field, its Fock/coherent/squeezed states, and single-photon detection → the quantum beam splitter, cavity QED, entangled photons, and a first taste of quantum information. By the end you can compute laser thresholds, read and use $g^{(1)}$ and $g^{(2)}$, quantize a field mode as a harmonic oscillator, characterize nonclassical light, and explain Hong–Ou–Mandel interference and a Bell test with photons. Deliberately skipped: full quantum electrodynamics with its renormalization machinery (that lives in [qft](../qft/syllabus.md)) and device-fabrication engineering. This course builds on the wave-optics intuition (interference, diffraction, Fourier optics) and leans hard on `quantum-mechanics` — the harmonic oscillator, ladder operators, two-level systems, and Fermi's golden rule are the load-bearing prerequisites.

## Dangerous Checklist

When you finish, you can:

- [ ] Propagate a Gaussian beam: find its waist, Rayleigh range, divergence, and the spot size a distance $z$ away
- [ ] Set up the two-level atom in a light field and read off the Rabi frequency and on-resonance dynamics
- [ ] Relate the Einstein $A$ and $B$ coefficients by detailed balance and say why spontaneous emission is unavoidable
- [ ] Compute the threshold population inversion and gain for a laser given its cross section and cavity losses
- [ ] Identify a cavity's longitudinal/transverse modes, free spectral range, and $Q$ (or finesse)
- [ ] Compute $g^{(1)}(\tau)$ from a source's spectrum and extract the coherence time
- [ ] Use $g^{(2)}(0)$ to classify light as bunched (thermal), coherent, or antibunched (nonclassical)
- [ ] Quantize a single field mode as a harmonic oscillator and write its Hamiltonian, vacuum energy, and quadratures
- [ ] Distinguish Fock, coherent, and squeezed states by their photon statistics and quadrature noise
- [ ] Derive the Hong–Ou–Mandel dip from the beam-splitter transformation of two indistinguishable photons
- [ ] Explain the Jaynes–Cummings model, dressed states, and vacuum Rabi oscillation in cavity QED
- [ ] Describe how parametric down-conversion makes entangled photon pairs and outline a BB84 key exchange

## Modules

### Module 1: Light–matter interaction & lasers

From classical beams to the microscopic exchange of energy between light and atoms, and how amplification and feedback make a laser.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Classical EM waves & Gaussian beams | Propagate a real laser beam and quantify its focusing | Maxwell recap, plane waves, polarization, intensity, Gaussian beam, waist $w_0$, Rayleigh range, divergence |
| 1.2 | The two-level atom & Rabi oscillations | Drive a two-level atom with a field and predict its oscillation | semiclassical dipole interaction, rotating-wave approximation, Rabi frequency, detuning, on-resonance flopping |
| 1.3 | Absorption, spontaneous & stimulated emission | Relate the three processes and derive the Einstein coefficients | Einstein $A$/$B$ coefficients, detailed balance, blackbody spectrum, why $A$ is nonzero |
| 1.4 | Gain, population inversion & laser threshold | Find when a medium amplifies instead of absorbs | population inversion, gain coefficient, cross section, saturation, three- vs four-level pumping |
| 1.5 | Optical cavities & laser modes | Read a cavity's spectrum of allowed modes and its linewidth | Fabry–Pérot cavity, longitudinal/transverse modes, free spectral range, finesse, $Q$ factor, threshold condition |

**Boss problem 1:** For a four-level laser medium with stimulated-emission cross section $\sigma$, upper-state lifetime $\tau$, and length $\ell$, inside a cavity with mirror reflectivities $R_1,R_2$: derive the round-trip threshold condition, solve for the threshold population inversion $\Delta N_{\text{th}}$, and estimate the pump rate needed to reach it. Then find the free spectral range and finesse of the cavity and say how many longitudinal modes fall under the gain bandwidth.

### Module 2: Coherence & the classical-to-quantum bridge

Coherence functions describe light without ever mentioning photons — until an experiment forces the issue.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Temporal coherence & $g^{(1)}(\tau)$ | Turn a source's spectrum into its coherence time | first-order correlation, coherence time, Wiener–Khinchin theorem, Michelson interferometer, fringe visibility |
| 2.2 | Spatial coherence | Predict interference from an extended, finite source | spatial coherence, coherence area, Young's double slit, Van Cittert–Zernike idea, stellar interferometry |
| 2.3 | Photon statistics & $g^{(2)}(0)$ | Classify light by how its photons arrive in time | intensity correlations, Poissonian/super-/sub-Poissonian, bunching vs antibunching, $g^{(2)}$ for coherent/thermal/single-photon |
| 2.4 | Hanbury Brown–Twiss & the crack in the classical picture | See the one result no classical field can produce | HBT intensity interferometry, photon bunching, $g^{(2)}(0)<1$ as a nonclassicality witness, need for quantization |

**Boss problem 2:** A source has a Lorentzian emission line of full width $\Delta\nu$. Compute $g^{(1)}(\tau)$ and read off the coherence time $\tau_c$; predict the visibility of a Michelson interferometer as a function of arm-length difference. Then, for chaotic (thermal) light, compute $g^{(2)}(0)$ and contrast it with an ideal laser and a single-photon source — and state which of the three a classical wave theory of light cannot explain.

### Module 3: Field quantization & photon states

Promote the field to an operator and the whole zoo of photon states falls out — vacuum, Fock, coherent, squeezed.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Quantizing the electromagnetic field | Turn each field mode into a quantum harmonic oscillator | mode expansion, $a,a^\dagger$ per mode, field Hamiltonian, photon as a quantum of a mode |
| 3.2 | Fock states, the vacuum & zero-point energy | Build the number-state ladder and confront vacuum fluctuations | number states $|n\rangle$, number operator, vacuum energy $\tfrac12\hbar\omega$, vacuum field fluctuations, Casimir hint |
| 3.3 | Coherent states: the most classical light | Construct the state a laser actually emits | displacement operator, $|\alpha\rangle$ as eigenstate of $a$, Poissonian photon number, near-classical dynamics |
| 3.4 | Quadratures, phase space & shot noise | Measure the field's two quadratures and their irreducible noise | quadrature operators $\hat X_1,\hat X_2$, phase-space picture, minimum-uncertainty state, vacuum/shot noise |
| 3.5 | Squeezed states | Beat the standard quantum limit in one quadrature | squeezing operator, quadrature variance below vacuum, sub-shot-noise metrology, gravitational-wave detectors |
| 3.6 | Single-photon sources & photodetection | Model how a detector clicks and what "one photon" requires | photoelectric detection, normally-ordered correlations, avalanche/single-photon detectors, heralding, detector efficiency |

**Boss problem 3:** For a coherent state $|\alpha\rangle$: compute the photon-number distribution $P(n)$ and show $\langle n\rangle=\Delta n^2=|\alpha|^2$ (Poissonian). Compute the two quadrature variances and verify it is a minimum-uncertainty state sitting at the vacuum-noise level. Then take a squeezed vacuum with squeeze parameter $r$, find its quadrature variances $e^{\pm 2r}\cdot(\text{vacuum})$, and state the photon-number and phase trade-off that makes it useful — and impossible classically.

### Module 4: Cavity QED, entanglement & applications

Two-photon interference, a single atom talking to a single mode, and photons as carriers of entanglement and secrets.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | The quantum beam splitter & Hong–Ou–Mandel | Derive two-photon interference from a unitary on two modes | beam-splitter transformation, two-mode input, HOM dip, indistinguishability, coincidence suppression |
| 4.2 | Cavity QED & the Jaynes–Cummings model | Couple one atom to one field mode and solve it exactly | Jaynes–Cummings Hamiltonian, dressed states, vacuum Rabi splitting, strong-coupling regime, collapse/revival |
| 4.3 | Nonlinear optics & parametric down-conversion | Split one photon into an entangled pair | $\chi^{(2)}$ nonlinearity, phase matching, spontaneous parametric down-conversion, signal/idler pairs |
| 4.4 | Entangled photons & Bell tests | Build and test a polarization-entangled photon pair | polarization Bell states, CHSH inequality with photons, coincidence measurement, loophole hints |
| 4.5 | A taste of quantum information | Turn single photons and no-cloning into secure key exchange | qubits in photons, no-cloning theorem, BB84 key distribution, links to [information-theory](../information-theory/syllabus.md) and quantum computing |

**Boss problem 4:** (a) Send two identical single photons into the two ports of a 50:50 beam splitter. Using the beam-splitter mode transformation, write the two-photon output state and show the coincidence rate vanishes (the HOM dip); then argue what happens as the photons are made distinguishable. (b) In the Jaynes–Cummings model, start with an excited atom in an empty cavity and, using the dressed states, find the vacuum Rabi oscillation frequency and the probability of finding the atom excited at time $t$.

## Sources of truth

- Fox, *Quantum Optics: An Introduction* (primary; scope, level, and the coherence/photon-statistics framing)
- Gerry & Knight, *Introductory Quantum Optics* (field quantization, coherent/squeezed states, Jaynes–Cummings)
- Loudon, *The Quantum Theory of Light* (correlation functions, HBT, photodetection rigor)
- Saleh & Teich, *Fundamentals of Photonics* (Gaussian beams, cavities, lasers, nonlinear optics)
- Milonni & Eberly, *Laser Physics* (Einstein coefficients, gain, and laser thresholds)
