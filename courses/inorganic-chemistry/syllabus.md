# Inorganic Chemistry — Syllabus

> Chemistry · Tier 1 · ~18 lessons · Prereqs: [general-chemistry](../general-chemistry/syllabus.md) · Roadmap id: `inorganic-chemistry`

## Goal

Turn "the rest of the periodic table" from a memorization slog into a predictive toolkit: read periodic trends, build ionic solids and reason about why they're stable, classify acids and bases four different ways, and — the core payoff — understand transition-metal complexes well enough to predict their color, magnetism, geometry, and reactivity from d-orbital splitting. You'll get an applied first taste of molecular symmetry and group theory, then see it pay off in spectra and in a closing tour of organometallics, catalysis, and metals in biology. This course deliberately skips solid-state band theory (that's `condensed-matter`) and detailed organometallic reaction mechanisms — the aim is fluency and intuition, not encyclopedic coverage.

## Dangerous Checklist

When you finish, you can:

- [ ] Predict and explain periodic trends (atomic/ionic radius, ionization energy, electron affinity, electronegativity), including the anomalies that trip people up
- [ ] Construct a Born–Haber cycle and use it to extract or estimate a lattice energy, and rank ionic solids by lattice-energy magnitude
- [ ] Classify a species as an acid or base under the Brønsted and Lewis definitions, and apply hard–soft acid–base (HSAB) theory to predict which pairings are favored
- [ ] Name a coordination complex from its formula and write the formula from its name, giving oxidation state and coordination number
- [ ] Enumerate the stereoisomers and structural isomers of a given complex and identify which are chiral
- [ ] Draw the d-orbital splitting diagram for octahedral, tetrahedral, and square-planar fields and predict high- vs low-spin from $\Delta$ and pairing energy
- [ ] Use the spectrochemical series to rank ligand field strengths and predict how a substitution shifts a complex's color
- [ ] Compute the number of unpaired electrons in a complex and convert it to a spin-only magnetic moment
- [ ] Assign a molecule to its point group by finding its symmetry elements
- [ ] Explain the origin of a d–d absorption band and estimate $\Delta_o$ from an absorption wavelength
- [ ] Count valence electrons of an organometallic complex with the 18-electron rule and identify the elementary steps of a catalytic cycle
- [ ] Explain, for one metalloprotein, how the metal's inorganic chemistry enables its biological job

## Modules

### Module 1: Periodicity, Ionic Solids & Acid–Base Theory

Re-derive the periodic table as a set of predictive trends, build the energetics of ionic solids from scratch, then generalize "acid" and "base" all the way to the Lewis and hard–soft picture that governs the rest of the course.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Periodic Trends, Revisited | Predict radius, IE, EA, and electronegativity across the table and explain the exceptions | effective nuclear charge, shielding, Slater's rules, trend anomalies |
| 1.2 | Ionic Solids & Lattice Energy | Estimate the electrostatic energy holding an ionic crystal together | Coulomb attraction, Madelung constant, Born exponent, radius ratio rules |
| 1.3 | The Born–Haber Cycle | Extract a lattice energy from measurable thermochemical steps | Hess's law loop, sublimation/ionization/atomization/EA terms, experimental vs calculated lattice energy |
| 1.4 | Brønsted & Lewis Acids and Bases | Classify any species as acid or base under both definitions | proton transfer, electron-pair donor/acceptor, conjugate pairs, amphoterism |
| 1.5 | Hard–Soft Acid–Base Theory | Predict favored acid–base pairings and solubility/stability trends | polarizability, HSAB principle, "hard likes hard," applications to geology & biology |

**Boss problem 1:** Given tabulated data (sublimation, ionization, bond-dissociation, electron-affinity enthalpies, and $\Delta H_f$) for MgO, use a Born–Haber cycle to compute its lattice energy; then explain, using periodic trends and HSAB, why MgO has a far larger lattice energy than NaCl and why $\text{Mg}^{2+}$ (a hard acid) is found in nature paired with hard bases like oxide and carbonate rather than with sulfide.

### Module 2: Coordination Chemistry & Bonding

The heart of the course: what a metal complex *is*, how to name and count it, how its ligands can arrange in space, and the crystal-field model that turns d-orbitals into a predictive engine for geometry, color, and spin.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Complexes, Ligands & Coordination Number | Identify the metal center, ligands, denticity, and coordination number in any complex | coordination sphere, mono-/poly-dentate ligands, chelate effect, common geometries |
| 2.2 | Nomenclature & Oxidation State | Name a complex from its formula and vice versa, assigning oxidation state | IUPAC naming rules, ligand prefixes, charge bookkeeping, coordination number |
| 2.3 | Isomerism in Complexes | Enumerate structural and stereoisomers and spot the chiral ones | linkage/ionization/hydrate isomers, cis–trans, fac–mer, optical isomerism |
| 2.4 | Crystal-Field Theory: Octahedral Splitting | Draw the $t_{2g}/e_g$ splitting and explain where $\Delta_o$ comes from | d-orbital shapes, ligand point charges, $\Delta_o$, crystal-field stabilization energy |
| 2.5 | High-Spin, Low-Spin & the Spectrochemical Series | Predict electron configuration and spin state of a complex | pairing energy vs $\Delta_o$, weak/strong field, spectrochemical series, ligand-field theory refinement |
| 2.6 | Tetrahedral & Square-Planar Fields | Adapt the splitting picture to non-octahedral geometries | $\Delta_t \approx \tfrac{4}{9}\Delta_o$, square-planar splitting, $d^8$ preference, Jahn–Teller distortion |

**Boss problem 2:** For $[\text{Fe}(\text{H}_2\text{O})_6]^{2+}$ and $[\text{Fe}(\text{CN})_6]^{4-}$: assign oxidation state and $d$-electron count, draw both octahedral splitting diagrams, use the spectrochemical series to decide high- vs low-spin for each, predict the number of unpaired electrons, and explain in one sentence why swapping water for cyanide flips the spin state.

### Module 3: Symmetry, Electronic Spectra & Magnetism

Introduce molecular symmetry and point groups as a practical language, then use them (plus Module 2's splitting diagrams) to explain the two most visible properties of complexes: their color and their response to a magnet.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Symmetry Elements & Operations | Find every symmetry element of a molecule and name the operations | $E$, $C_n$, $\sigma$, $i$, $S_n$, proper vs improper rotation |
| 3.2 | Assigning Point Groups | Route any molecule to its point group with a decision tree | point-group flowchart, common groups ($C_{2v}$, $D_{3h}$, $O_h$, $T_d$), chirality from symmetry |
| 3.3 | Electronic Spectra & d–d Transitions | Explain why complexes are colored and estimate $\Delta_o$ from a spectrum | d–d transitions, selection rules, $\Delta_o$ from $\lambda_{max}$, charge-transfer bands |
| 3.4 | Magnetism of Complexes | Compute unpaired electrons and the spin-only magnetic moment | paramagnetism vs diamagnetism, spin-only formula $\mu = \sqrt{n(n+2)}$, measuring $\mu_{eff}$ |

**Boss problem 3:** A $d^6$ octahedral complex absorbs strongly at 490 nm and shows a measured magnetic moment of about 4.9 Bohr magnetons. Determine its number of unpaired electrons and its spin state, convert the absorption to an estimate of $\Delta_o$ in kJ/mol, state the observed color, and identify the point group of the idealized $\text{ML}_6$ octahedron.

### Module 4: Organometallics & Applications

A tour of where inorganic chemistry pays off: metal–carbon bonds and electron counting, the catalytic cycles that make bulk chemicals, and the metalloproteins that run life.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Organometallics & the 18-Electron Rule | Count valence electrons of a metal–carbon complex and judge its stability | metal–carbon bonds, ligand electron counts, 18-electron rule, hapticity |
| 4.2 | Homogeneous Catalysis: A Cycle | Trace a catalytic cycle through its elementary organometallic steps | oxidative addition, migratory insertion, reductive elimination, turnover |
| 4.3 | Bioinorganic Chemistry: Metals in Life | Explain how a metalloprotein's metal center enables its function | heme iron & O₂ binding, active-site geometry, electron transfer, trace-metal roles |

**Boss problem 4:** Take a simple catalytic cycle (e.g., alkene hydrogenation by Wilkinson's catalyst): label each elementary step (oxidative addition, insertion, reductive elimination), track the metal's oxidation state and electron count around the loop to confirm it returns to start, and explain why an 18-electron intermediate must first lose a ligand before the substrate can bind — then connect that same "open a coordination site" logic to how heme iron reversibly binds O₂.

## Sources of truth

- Miessler, Fischer & Tarr, *Inorganic Chemistry* — for coordination chemistry, symmetry, and the overall rigor level
- Shriver & Atkins, *Inorganic Chemistry* — for descriptive main-group and bioinorganic conventions
- Housecroft & Sharpe, *Inorganic Chemistry* — for periodic trends and lattice-energy/Born–Haber treatment
- Cotton, *Chemical Applications of Group Theory* — for the point-group and symmetry conventions
