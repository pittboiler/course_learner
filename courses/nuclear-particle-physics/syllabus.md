# Nuclear & Particle Physics — Syllabus

> Physics · Tier 2 · ~25 lessons · Prereqs: [quantum-mechanics](../quantum-mechanics/syllabus.md) · Roadmap id: `nuclear-particle-physics`

## Goal

Two subjects, one continuous story: how the nucleus is built and how it comes apart, then how that same energy scale opens onto the fundamental constituents of matter. You'll leave able to read a chart of nuclides, estimate binding energies and decay rates, compute relativistic collision kinematics, and place any particle in the Standard Model by its quantum numbers. We deliberately skip full quantum-field-theory computation — Feynman-diagram amplitudes, loops, renormalization live in [`qft`](../qft/syllabus.md) — and treat QCD and the electroweak sector qualitatively. Detector and accelerator engineering are named but not derived; the reactor-physics thread is a bridge, not a destination (that's the future `intro-nuclear-engineering` shelf).

## Dangerous Checklist

When you finish, you can:

- [ ] Read a chart of nuclides — locate an isotope, name its likely decay mode, and read off binding energy per nucleon
- [ ] Estimate a nucleus's binding energy with the semi-empirical mass formula and predict the most stable isobar for a given mass number
- [ ] Explain magic numbers from the shell model and predict a ground-state spin-parity
- [ ] Solve the decay law for a chain, compute activities, and identify secular vs transient equilibrium
- [ ] Estimate an alpha-decay half-life from the Gamow tunneling picture, at least to the right power of ten
- [ ] Compute the Q-value of a nuclear reaction or decay and find the resulting particle energies
- [ ] Explain why fission and fusion both release energy, and estimate the yield per nucleon for each
- [ ] Manipulate four-vectors: compute invariant mass, decay energies, and fixed-target vs collider thresholds
- [ ] Turn a differential cross-section into a count rate, and read a form factor as the Fourier transform of a charge distribution
- [ ] Classify any particle as lepton/hadron, meson/baryon, and write down its quark content
- [ ] Use conservation laws and symmetries (charge, baryon/lepton number, parity, isospin, strangeness) to decide whether a process is allowed and by which force
- [ ] Sketch the Standard Model — its particles, forces, and gauge structure — and explain neutrino oscillation quantitatively

## Modules

### Module 1: Nuclear structure & models

From "what is a nucleus" to two working models of it — the liquid drop that gets the energetics and the shell model that gets the magic numbers.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Anatomy of the nucleus | Read the chart of nuclides and quote a nucleus's size, charge, and composition | protons/neutrons, $Z$/$N$/$A$, isotopes, nuclear radius $R = r_0 A^{1/3}$, chart of nuclides |
| 1.2 | Binding energy & the mass defect | Compute binding energy from masses and read the curve of binding energy | mass defect, $B = [Zm_p + Nm_n - M]c^2$, binding energy per nucleon, the $^{56}$Fe peak |
| 1.3 | The semi-empirical mass formula | Estimate any nucleus's binding energy from five physical terms | liquid-drop model, volume/surface/Coulomb/asymmetry/pairing terms, mass parabola |
| 1.4 | Stability & the valley | Predict decay direction from the mass surface and find the stable isobar | valley of stability, isobaric parabolas, $\beta$-stability line, neutron/proton drip lines |
| 1.5 | The shell model & magic numbers | Explain magic numbers and predict a ground-state spin-parity | mean-field potential, spin-orbit coupling, magic numbers 2/8/20/28/50/82/126, $j^\pi$ assignment |

**Boss problem 1:** Using the SEMF, treat binding energy as a function of $Z$ at fixed $A = 127$ and find the value $Z^\*$ that maximizes it (minimizes the atomic mass). Show $Z^\* = \frac{A/2}{1 + (a_C/4a_A)A^{2/3}}$, evaluate it, and confirm your rounded answer is the observed stable nuclide at $A=127$. Then say in one sentence which way $A=127,\,Z=51$ (antimony) must decay to reach it.

### Module 2: Radioactivity & nuclear reactions

The three decay modes, each with its own physics — tunneling, the weak force, electromagnetism — then reactions, and the two ways to cash in the curve of binding energy.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The decay law & chains | Solve single decays and chains; identify equilibrium | $N(t)=N_0e^{-\lambda t}$, half-life vs mean life, activity, Bateman chain, secular/transient equilibrium |
| 2.2 | Alpha decay & tunneling | Estimate an $\alpha$ half-life from the Gamow factor | $Q_\alpha$, Coulomb barrier, quantum tunneling, Geiger–Nuttall law, Gamow factor |
| 2.3 | Beta decay & the neutrino | Explain the continuous spectrum and why the neutrino had to exist | $\beta^-/\beta^+$/electron capture, the weak force, neutrino, Fermi theory sketch, Kurie plot |
| 2.4 | Gamma decay & the excited nucleus | Relate transition energy to lifetime and selection rules | $\gamma$ emission, nuclear energy levels, multipolarity & selection rules, internal conversion, Mössbauer note |
| 2.5 | Nuclear reactions & Q-values | Compute reaction Q-values and outgoing energies | reaction notation, Q-value, exo/endothermic, threshold energy, conservation in reactions |
| 2.6 | Fission & fusion energetics | Explain and estimate the yield of both energy sources | fission barrier, chain reaction & $k$, D–T fusion, Coulomb barrier for fusion, MeV-per-nucleon accounting |

**Boss problem 2:** For D–T fusion, $\mathrm{^2H + {}^3H \to {}^4He + n}$, compute the Q-value from the given masses, then use momentum and energy conservation to find how the 17.6 MeV splits between the neutron and the alpha (nonrelativistic is fine). Finally, compare the energy released *per nucleon* to that of $^{235}$U fission (~200 MeV per nucleus) and say which wins on that measure — and why fusion is nonetheless harder to ignite.

### Module 3: Scattering & relativistic kinematics

The experimental language of both halves of the course: a compact special-relativity toolkit, then how scattering measures structure.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Four-vectors & invariant mass | Compute invariant mass and move between frames fluently | four-momentum, $E^2 = (pc)^2 + (mc^2)^2$, invariants, $s$ and center-of-mass energy, natural units |
| 3.2 | Collision & decay kinematics | Find decay energies and reaction thresholds relativistically | two-body decay, fixed-target vs collider, Mandelstam $s$, production thresholds |
| 3.3 | Cross-sections & the count rate | Turn a differential cross-section into a measured rate | cross-section, luminosity, $d\sigma/d\Omega$, mean free path, impact parameter |
| 3.4 | Rutherford, form factors & the optical picture | Extract charge distributions from scattering and read a form factor | Rutherford formula, form factor as Fourier transform of $\rho(r)$, optical model, resonances |

**Boss problem 3:** Find the threshold kinetic energy for antiproton production in the fixed-target reaction $p + p \to p + p + p + \bar p$ (all four final particles at rest in the CM). Use the invariant $s$: set the fixed-target $s = 2m_p^2c^4 + 2m_p c^2 E_\text{lab}$ equal to the CM requirement $(4m_pc^2)^2$, solve for $E_\text{lab}$, and report the kinetic energy $T = E_\text{lab} - m_pc^2$. Comment on why the answer is $\sim 6m_pc^2$ rather than the naive $2m_pc^2$.

### Module 4: Particles, symmetries & the quark model

The subatomic bestiary organized the way it was historically tamed — first by conservation laws, then by symmetry, then by the quark model that made the pattern inevitable.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | The particle zoo | Classify any particle by type and name the four forces it feels | leptons vs hadrons, mesons vs baryons, the four interactions, generations, antiparticles |
| 4.2 | Conservation laws & quantum numbers | Decide whether a process is allowed and by which force | charge, baryon & lepton number, strangeness, allowed vs forbidden, strong/EM/weak signatures |
| 4.3 | Parity, charge conjugation & CP | Explain the discrete symmetries and what breaks them | parity $P$, charge conjugation $C$, $CP$ and its violation, the CPT theorem, why the mirror world differs |
| 4.4 | Isospin & flavor symmetry | Use isospin to relate particles and predict reaction ratios | isospin as SU(2), multiplets, the eightfold way, Gell-Mann–Nishijima relation |
| 4.5 | The quark model & QCD | Build hadrons from quarks and explain color and confinement (qualitatively) | quarks & flavors, $q\bar q$ mesons & $qqq$ baryons, color charge, gluons, confinement & asymptotic freedom |

**Boss problem 4:** You're handed three processes: (a) $\Delta^{++}\to p\,\pi^+$, (b) $\Lambda^0 \to p\,\pi^-$, (c) $\pi^0 \to \gamma\gamma$. For each, write the quark content of every hadron, check which conserved quantities (charge, baryon number, strangeness) survive, and state which of the four forces mediates it and the rough lifetime scale that implies. Then explain, from the Pauli principle plus color, why the $\Delta^{++}=uuu$ spin-$\tfrac32$ state is allowed at all.

### Module 5: The Standard Model

Assembling the modern picture: the weak force and its unification with electromagnetism, the full particle content, and the two frontiers where the story is still being written.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 5.1 | The weak interaction | Characterize weak processes and why they're slow and parity-violating | $W^\pm$ and $Z^0$, charged vs neutral currents, parity violation, quark mixing (CKM sketch) |
| 5.2 | Electroweak unification & the Higgs | Explain qualitatively how one force splits into two and where mass comes from | electroweak symmetry, spontaneous symmetry breaking, the Higgs mechanism & boson |
| 5.3 | The Standard Model assembled | Draw the full particle chart and name each force's gauge structure | three generations, gauge bosons, $SU(3)\times SU(2)\times U(1)$ as a label, what the SM explains |
| 5.4 | Neutrinos & oscillations | Compute a neutrino survival probability and explain why it means mass | flavor vs mass eigenstates, mixing angle, $P = 1 - \sin^2 2\theta\,\sin^2(1.27\,\Delta m^2 L/E)$, solar & atmospheric $\nu$ |
| 5.5 | Beyond the Standard Model | Name the SM's open problems and the leading ideas (qualitatively) | dark matter, matter–antimatter asymmetry, neutrino mass mechanisms, gravity's absence, GUTs & supersymmetry (taste) |

**Boss problem 5:** For two-flavor neutrino oscillation with $\Delta m^2 = 2.5\times10^{-3}\ \text{eV}^2$ and $\sin^2 2\theta = 1$, use $P_\text{survival} = 1 - \sin^2 2\theta\,\sin^2(1.27\,\Delta m^2 L/E)$ (with $\Delta m^2$ in eV², $L$ in km, $E$ in GeV) to find the first baseline $L$ at which a 1 GeV muon-neutrino beam is *maximally* depleted. Then compute the oscillation length and explain in one sentence why oscillation is impossible if all neutrinos are massless.

## Sources of truth

- Krane, *Introductory Nuclear Physics* — conventions and rigor level for Modules 1–3
- Griffiths, *Introduction to Elementary Particles* — notation and pedagogy for Modules 3–5
- Particle Data Group *Review of Particle Physics* — canonical masses, lifetimes, and quantum numbers
- Martin & Shaw, *Particle Physics* — the qualitative Standard-Model narrative

<!-- 2026-08-04: 25 lessons (5/6/4/5/5), one over the ~24 target — kept Module 2 at six so alpha/beta/gamma each get a full lesson rather than cramming the three decay modes; within tolerance, no split needed. -->
