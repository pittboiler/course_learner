# Quantum Field Theory — Syllabus

> Tier 2 · ~33 lessons · Prereqs: [`quantum-mechanics`](../quantum-mechanics/syllabus.md), [`relativity`](../relativity/syllabus.md), [`analytical-mechanics`](../analytical-mechanics/syllabus.md) · Roadmap id: `qft`

## Goal

Learn the honest first course in quantum field theory — the physics summit — starting from *why* fields are forced on us (relativity + quantum mechanics + causality can't coexist in a fixed-particle-number world) and building to a real calculation: quantize a field, then compute a scattering amplitude and its cross-section from Feynman diagrams at tree level, and see why one-loop diagrams diverge and how renormalization tames them. The spine is the standard graduate arc — scalar fields, interactions and the S-matrix, the Dirac field and spin, quantum electrodynamics — with the punchline that *gauge symmetry dictates the interactions*. Deliberately skipped: rigorous/axiomatic QFT, the full Standard Model, non-abelian loop computations and deep renormalization-group technicalities (a conceptual taste only), and lattice/nonperturbative methods. A tier-2 apex course: it leans on `relativity` (special relativity and classical field theory), `analytical-mechanics` (Lagrangian/Hamiltonian mechanics and Noether's theorem), and `quantum-mechanics` (states, operators, the interaction picture, time-dependent perturbation theory).

## Dangerous Checklist

When you finish, you can:

- [ ] Write a Lagrangian density, get the field equations, and apply Noether's theorem to read off a conserved current
- [ ] Quantize the real scalar field: impose canonical commutators and build the Fock space from creation/annihilation operators
- [ ] Explain in what sense a particle is "an excitation of a field," and why antiparticles and causality are forced by relativity
- [ ] Derive and interpret the Feynman propagator as the amplitude for a particle to travel between two points
- [ ] Expand the S-matrix with the Dyson series and apply Wick's theorem to reduce a time-ordered product to contractions
- [ ] Draw the Feynman diagrams for a process and write down the corresponding amplitude using the Feynman rules
- [ ] Compute a tree-level $2\to2$ amplitude in $\phi^4$ theory and turn it into a differential cross-section
- [ ] Explain why fermions need anticommutators, and how spin-statistics and the Dirac equation follow from Lorentz symmetry
- [ ] Show how demanding local $U(1)$ gauge invariance forces the photon and fixes the electron–photon coupling (minimal coupling)
- [ ] Write the QED amplitude for a tree-level process from the Feynman rules and square it (with spin sums / trace technology) for the cross-section
- [ ] Set up the path-integral / generating-functional formulation and recover propagators and vertices from it
- [ ] Explain where ultraviolet divergences come from at one loop, what regularization and renormalization *do*, and what a running coupling means

## Modules

### Module 1: Why fields? From particles to fields

The motivation and the classical machinery: why single-particle quantum mechanics fails relativistically, and the field theory that replaces it.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Why quantum mechanics + relativity forces fields | See the contradiction that QFT resolves | fixed particle number fails, pair creation, causality, locality |
| 1.2 | Classical field theory and the Lagrangian density | Treat a field like infinitely many coupled oscillators | field $\phi(x)$, Lagrangian density $\mathcal{L}$, action, Euler–Lagrange field equations |
| 1.3 | Symmetries and Noether's theorem for fields | Turn a continuous symmetry into a conserved current | continuous symmetry, Noether current $j^\mu$, conserved charge, energy–momentum tensor |
| 1.4 | The Klein–Gordon field | Meet the simplest relativistic field and its trouble | Klein–Gordon equation, relativistic dispersion, negative energies as a warning |

**Boss problem 1:** Start from the Klein–Gordon Lagrangian density $\mathcal{L}=\tfrac12(\partial_\mu\phi)(\partial^\mu\phi)-\tfrac12 m^2\phi^2$. Derive the field equation via Euler–Lagrange, then use invariance under a constant shift (for a complex field, a phase rotation) to construct the conserved Noether current and verify $\partial_\mu j^\mu=0$ on solutions.

### Module 2: Canonical quantization of the scalar field

Promote the field to an operator, build the particle spectrum from the vacuum, and extract the propagator.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Canonical quantization and field operators | Impose the quantum rules on a field | conjugate momentum $\pi(x)$, equal-time commutator $[\phi,\pi]$, field as operator |
| 2.2 | Creation, annihilation operators, and Fock space | Build the multiparticle Hilbert space | $a_{\mathbf p},a_{\mathbf p}^\dagger$, vacuum $|0\rangle$, number operator, Fock space |
| 2.3 | Particles as excitations; energy and momentum | Read the Hamiltonian as counting quanta | mode expansion, one-particle states, zero-point energy, normal ordering |
| 2.4 | The Feynman propagator | Get the object every diagram is built from | time ordering, two-point function, $i\varepsilon$ prescription, propagator as an amplitude |
| 2.5 | Causality and microcausality | Check that spacelike-separated measurements commute | commutator outside the light cone, antiparticles, causality restored |

**Boss problem 2:** Expand the free scalar field in creation/annihilation modes, compute the equal-time commutator $[\phi(\mathbf x),\pi(\mathbf y)]$ and confirm it gives $i\delta^3(\mathbf x-\mathbf y)$, then evaluate the field commutator $[\phi(x),\phi(y)]$ for spacelike separation and show it vanishes — the statement that QFT is causal.

### Module 3: Interactions and perturbation theory

Turn on a coupling, expand the S-matrix, and read amplitudes off diagrams — then convert them to observables.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The interaction picture and the S-matrix | Frame scattering as in-state to out-state | interaction picture, $S$-matrix, in/out states, adiabatic switching |
| 3.2 | The Dyson series and time ordering | Expand the S-matrix perturbatively | Dyson series, time-ordered exponential, order-by-order expansion |
| 3.3 | Wick's theorem | Reduce time-ordered products to contractions | normal ordering, contraction, Wick's theorem, vacuum expectation values |
| 3.4 | Feynman diagrams for $\phi^4$ theory | Translate terms into pictures | vertices, internal/external lines, contractions ↔ diagrams, connected diagrams |
| 3.5 | Feynman rules and the amplitude | Write $i\mathcal{M}$ directly from a diagram | momentum-space Feynman rules, symmetry factors, amplitude $\mathcal{M}$ |
| 3.6 | Cross-sections and decay rates | Turn an amplitude into something measurable | Lorentz-invariant phase space, Fermi's golden rule, $2\to2$ cross-section, decay rate |

**Boss problem 3:** In $\phi^4$ theory with interaction $-\tfrac{\lambda}{4!}\phi^4$, compute the tree-level $2\to2$ scattering amplitude (it's just $-i\lambda$), then assemble the differential cross-section $d\sigma/d\Omega$ in the center-of-mass frame, carefully accounting for the two-body phase space and identical-particle factors.

### Module 4: Fermions and the Dirac field

Spin-$\tfrac12$ from Lorentz symmetry, the Dirac equation, and the anticommutators that particles with half-integer spin demand.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | The Lorentz group and spinors | See where spin comes from group-theoretically | Lorentz group, generators, $(\tfrac12,0)\oplus(0,\tfrac12)$, spinor representations |
| 4.2 | The Dirac equation | Meet the field of the electron | gamma matrices, Clifford algebra, Dirac equation, plane-wave spinors $u,v$ |
| 4.3 | Solutions, spin, and antiparticles | Interpret positive/negative frequency solutions | spin sums, helicity, the Dirac sea vs hole picture, antiparticles |
| 4.4 | Quantizing the Dirac field: anticommutators | Learn why fermions can't be bosons | anticommutation relations, spin-statistics theorem, Pauli exclusion, Fermi–Dirac Fock space |
| 4.5 | The Dirac propagator | Build the fermion line for diagrams | fermion time-ordering, Feynman propagator for spinors, ${\not}p+m$ numerator |

**Boss problem 4:** Show that imposing *commutators* on the Dirac field gives a Hamiltonian unbounded below (or a non-causal anticommutator), then show *anticommutators* fix both — deriving spin-statistics for spin-$\tfrac12$ by hand. Along the way verify the completeness relation $\sum_s u^s(p)\bar u^s(p)={\not}p+m$.

### Module 5: Quantum electrodynamics

Gauge invariance conjures the photon, minimal coupling fixes the interaction, and you run one real QED process end to end.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Gauge invariance and the photon | Derive the photon from a symmetry demand | local $U(1)$, gauge field $A_\mu$, field strength $F_{\mu\nu}$, masslessness of the photon |
| 5.2 | Minimal coupling and the QED Lagrangian | See interactions forced by gauge symmetry | covariant derivative $D_\mu$, minimal coupling, the QED Lagrangian, coupling $e$ |
| 5.3 | Quantizing the photon; the photon propagator | Handle gauge redundancy to get a propagator | gauge fixing, gauge choices, photon propagator, physical polarizations |
| 5.4 | QED Feynman rules | Assemble the toolkit for QED amplitudes | electron–photon vertex, external spinors/polarizations, QED Feynman rules |
| 5.5 | A tree-level QED process: the amplitude | Write $\mathcal{M}$ for a real scattering | $e^-\mu^-\to e^-\mu^-$ (or Compton), diagram sum, applying the rules |
| 5.6 | Squaring the amplitude and the cross-section | Get from $\mathcal{M}$ to a measured number | spin averaging/summing, trace technology (Casimir's trick), gamma-matrix traces, $d\sigma/d\Omega$ |

**Boss problem 5:** For tree-level $e^-\mu^-\to e^-\mu^-$ scattering, write the QED amplitude straight from the Feynman rules, then compute the spin-averaged $\overline{|\mathcal{M}|^2}$ using trace technology and assemble the differential cross-section — the calculation that turns "QED is a theory" into "QED predicts a number."

### Module 6: The path integral and renormalization

A second route to QFT, then the loop divergences and the conceptual idea of renormalization that make QFT actually predictive.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 6.1 | The path integral in quantum mechanics | Rebuild QM as a sum over histories | sum over paths, propagator as path integral, stationary phase → classical limit |
| 6.2 | The path integral for fields; generating functionals | Get amplitudes from a single functional | functional integral, generating functional $Z[J]$, correlation functions from derivatives |
| 6.3 | Recovering propagators and Feynman rules | See the two formulations agree | free-field Gaussian integral, propagator from $Z[J]$, vertices from the interaction |
| 6.4 | Loops and ultraviolet divergences | Meet the infinities of QFT | loop integrals, momentum integration, UV divergence, superficial degree of divergence |
| 6.5 | Regularization and renormalization | Learn what makes the infinities harmless | cutoff/dimensional regularization, counterterms, renormalized vs bare parameters |
| 6.6 | Running couplings and the renormalization group | Understand why couplings depend on scale | renormalization scale, beta function, running coupling, asymptotic freedom (conceptual) |
| 6.7 | A taste of non-abelian gauge theory | Glimpse the summit beyond QED | Yang–Mills, non-abelian gauge group, self-interacting gauge bosons, the Standard Model in one breath |

**Boss problem 6:** Take the one-loop correction to the $\phi^4$ vertex (the "fish" diagram). Set up the loop integral, use its superficial degree of divergence to argue it's logarithmically UV-divergent, regulate it, and show how a coupling counterterm absorbs the divergence — leaving a finite, scale-dependent renormalized coupling. Explain in words what the running of $\lambda$ means physically.

## Sources of truth

- Peskin & Schroeder, *An Introduction to Quantum Field Theory* (primary; canonical quantization, QED, conventions and the mostly-plus/minus metric care)
- Schwartz, *Quantum Field Theory and the Standard Model* (modern pedagogy; motivation, gauge theory, renormalization intuition)
- Srednicki, *Quantum Field Theory* (clean path-integral-first development; spinor and renormalization details)
- Zee, *Quantum Field Theory in a Nutshell* (intuition and the physicist's-eye view — the "why" behind the machinery)

## Notes

- The prerequisites do real work here: `relativity`'s classical-field-theory module and special relativity underpin Modules 1–2; `analytical-mechanics` (Lagrangian/Hamiltonian mechanics and Noether's theorem) is the language of Modules 1 and 3; and `quantum-mechanics` (the interaction picture and time-dependent perturbation theory) is exactly what Module 3 promotes to fields.
- Two adjacent courses deepen the later modules without being required: [`representation-theory`](../representation-theory/syllabus.md) makes the Lorentz-group and gauge-group structure of Modules 4–5 precise (spinors as representations, $U(1)$/non-abelian groups), and [`differential-geometry`](../differential-geometry/syllabus.md) reframes the gauge fields of Modules 5–6 as connections on bundles. Both illuminate, neither is assumed.
