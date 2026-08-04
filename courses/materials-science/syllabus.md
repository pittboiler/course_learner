# Materials Science & Engineering — Syllabus

> Engineering · Tier 1 · ~19 lessons · Prereqs: [calc-refresher](../calc-refresher/syllabus.md) · Roadmap id: `materials-science`

## Goal

Learn to reason from atoms to engineering behavior: why a material bonds the way it does, how its crystal structure and defects set its properties, and how to read a phase diagram to predict what a heat treatment will actually do. You will be able to explain and estimate mechanical strength, diffusion, failure, and electronic/optical response across metals, ceramics, polymers, and composites. This is the *structure–property* backbone; it deliberately skips full solid-state quantum theory (that's `condensed-matter`) and shop-floor processing depth.

## Dangerous Checklist

When you finish, you can:

- [ ] Identify a crystal structure (BCC/FCC/HCP) and compute its packing factor, coordination, and theoretical density from atomic radius and mass
- [ ] Index a crystallographic direction and plane with Miller indices, and rank planes by planar density
- [ ] Explain why real materials deform, diffuse, and fail through defects — vacancies, dislocations, and grain boundaries — rather than as perfect crystals
- [ ] Estimate a diffusion coefficient from an Arrhenius law and solve a carburizing problem with Fick's laws
- [ ] Read a binary phase diagram: name the phases, and apply the lever rule to get their compositions and fractions
- [ ] Predict the microstructure a cooling path produces, including proeutectoid and eutectoid (pearlite) constituents in steel
- [ ] Extract modulus, yield strength, UTS, ductility, and toughness from a stress–strain curve
- [ ] Compute a resolved shear stress with Schmid's law and predict whether a crystal yields
- [ ] Explain how grain refinement, alloying, and cold work each strengthen a metal — and the tradeoff each carries
- [ ] Distinguish ductile from brittle fracture, and estimate fatigue life and creep behavior qualitatively
- [ ] Explain conductors, semiconductors, and insulators with the band picture, and relate a band gap to the light a material absorbs or emits
- [ ] Pick a materials class (metal / ceramic / polymer / composite) for a design goal and justify it from structure

## Modules

### Module 1: Structure & Bonding

From what holds atoms together to how they stack into crystals — and how we name directions and planes inside them.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Bonding & the energy well | Predict a material's stiffness and melting point from its bond type | Ionic/covalent/metallic/van der Waals, bond-energy curve, modulus from curvature |
| 1.2 | Crystal structures & unit cells | Compute packing factor, coordination number, and theoretical density | BCC/FCC/HCP, APF, atoms per cell, density calculation |
| 1.3 | Directions & planes: Miller indices | Index any direction and plane and find its planar/linear density | Miller indices, families {hkl}/⟨uvw⟩, planar density, interplanar spacing |
| 1.4 | Order, disorder & grains | Distinguish single-crystal, polycrystalline, and amorphous solids and their consequences | Grains, anisotropy, glasses, polymorphism |

**Boss problem 1:** Copper is FCC with atomic radius $R = 0.128$ nm and atomic mass $63.55$ g/mol. (a) Find the lattice parameter $a$ and the theoretical density. (b) Compute the linear density along $[110]$ and the planar density on the $(111)$ plane. (c) Is $(111)$ or $(100)$ more densely packed, and why does that make $\{111\}$ the slip plane in FCC?

### Module 2: Imperfections & Diffusion

Perfect crystals are inert and boring; every useful property — strength, color, conductivity control — lives in the defects and their motion.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Point defects & solid solutions | Compute equilibrium vacancy concentration and classify alloy defects | Vacancies, interstitials, substitutional/interstitial solid solutions, Boltzmann factor |
| 2.2 | Dislocations: the carriers of plastic flow | Describe edge/screw dislocations and their Burgers vectors | Edge & screw dislocations, Burgers vector, slip, line tension |
| 2.3 | Interfaces & grain boundaries | Explain how boundaries store energy and control microstructure | Grain boundaries, twins, surfaces, grain-boundary energy |
| 2.4 | Diffusion I: mechanisms & Fick's first law | Compute steady-state flux through a membrane or shell | Vacancy vs. interstitial diffusion, flux, concentration gradient, $J = -D\,dC/dx$ |
| 2.5 | Diffusion II: transient flux & the Arrhenius law | Solve a carburizing problem and rescale it with temperature | Fick's second law, error-function solution, $D = D_0 e^{-Q_d/RT}$ |

**Boss problem 2:** Carbon diffuses interstitially in BCC iron with $D_0 = 6.2\times10^{-7}\ \mathrm{m^2/s}$ and $Q_d = 80\ \mathrm{kJ/mol}$. (a) Compute $D$ at $900^\circ\mathrm{C}$. (b) A part is carburized with surface concentration $C_s = 1.2$ wt% into iron at $C_0 = 0.20$ wt%; using the error-function solution, find the time to reach $0.60$ wt% at a depth of $0.5$ mm. (c) If the temperature is raised to $1000^\circ\mathrm{C}$, by what factor does the required time change?

### Module 3: Phase Diagrams & Transformations

The map that tells you what phases exist, in what amounts, and what a cooling path will make.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Phase diagrams & the lever rule | Read an isomorphous diagram and get phase compositions and fractions | Phases/components, Gibbs phase rule, isomorphous systems, tie line, lever rule |
| 3.2 | Eutectics & microstructure development | Predict microstructure through a eutectic cooling path | Eutectic reaction, primary vs. eutectic constituents, cooling paths |
| 3.3 | Transformations, TTT & heat treatment | Explain how cooling rate — not just composition — sets the final structure | Fe–C diagram, eutectoid/pearlite, proeutectoid phases, TTT curves, martensite (a taste) |

**Boss problem 3:** A plain-carbon steel of $0.40$ wt% C is cooled slowly from the austenite ($\gamma$) field. (a) Just above and just below the eutectoid ($727^\circ\mathrm{C}$), name the phases present and give their compositions and mass fractions (take eutectoid at $0.76$ wt% C, max ferrite solubility $0.022$ wt% C). (b) At room temperature, compute the fractions of proeutectoid ferrite and of pearlite. (c) Sketch the resulting microstructure and say how it would differ under rapid quenching.

### Module 4: Mechanical Behavior & Failure

How materials stretch, yield, strengthen, and eventually break — and how to design against each.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Elastic behavior: stress, strain, modulus | Read the elastic region of a stress–strain curve and get $E$ and $\nu$ | Engineering stress/strain, Hooke's law, Young's/shear modulus, Poisson's ratio |
| 4.2 | Plastic deformation & Schmid's law | Predict yielding from resolved shear stress on a slip system | Yield strength, slip systems, resolved shear stress, critical resolved shear stress |
| 4.3 | Strengthening mechanisms | Choose grain refinement, alloying, or cold work and know each tradeoff | Hall–Petch, solid-solution strengthening, strain hardening, recovery/recrystallization |
| 4.4 | Failure: fracture, fatigue & creep | Distinguish failure modes and estimate life qualitatively | Ductile vs. brittle fracture, stress concentration, S–N fatigue, creep regimes |

**Boss problem 4:** A cylindrical alloy rod (initial diameter $10$ mm, gauge length $50$ mm) is pulled in tension. In the elastic region a $30$ kN load gives a $0.12$ mm extension; the $0.2\%$-offset yield load is $42$ kN, the maximum load $58$ kN, and the specimen fails at $61$ mm final length. (a) Compute $E$, the yield strength, and the ultimate tensile strength. (b) Compute the percent elongation and comment on ductility. (c) The same material as a single crystal is loaded along $[010]$; find the resolved shear stress on the $(111)[\bar{1}01]$ system at the yield load and say whether it exceeds a critical resolved shear stress of $6$ MPa.

### Module 5: Functional Properties & the Materials Classes

Electrons, heat, and light — and a closing tour of why we reach for metals, ceramics, polymers, or composites.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | Electronic properties & the band picture | Explain conductor/semiconductor/insulator behavior from band structure | Energy bands, band gap, Fermi level, conductivity, temperature dependence |
| 5.2 | Semiconductors, optics & thermal response | Relate band gap to absorbed/emitted light and reason about doping | Intrinsic/extrinsic doping, absorption edge, luminescence, thermal expansion/conductivity |
| 5.3 | The materials classes | Select a materials class for a design goal from its structure | Metals, ceramics, polymers, composites, property tradeoffs, Ashby-style selection |

**Boss problem 5:** Intrinsic silicon has a band gap of $1.11$ eV. (a) Explain why it is transparent in the infrared but opaque to visible light. (b) Compute the longest wavelength of light it can absorb. (c) It is doped $n$-type with $10^{22}\ \mathrm{m^{-3}}$ donors; taking an electron mobility of $0.14\ \mathrm{m^2/(V\cdot s)}$, estimate the conductivity and compare it to the intrinsic value. (d) Explain why a metal's conductivity falls with rising temperature while a doped semiconductor's rises.

## Sources of truth

- Callister & Rethwisch, *Materials Science and Engineering: An Introduction* — notation, structure conventions, and rigor level (the silent default).
- Ashby & Jones, *Engineering Materials 1 & 2* — property estimation and materials selection framing.
- Shackelford, *Introduction to Materials Science for Engineers* — cross-check for phase-diagram and diffusion worked style.
