# Intro to Nuclear Engineering & Radiation — Syllabus

> Engineering · Tier 1 · ~18 lessons · Prereqs: [em-refresher](../em-refresher/syllabus.md), [ode-refresher](../ode-refresher/syllabus.md) · Roadmap id: `intro-nuclear-engineering`

## Goal

Build the physics core every branch of nuclear engineering assumes: how nuclei are held together, how they decay and react, how neutrons interact with matter, how fission sustains a chain reaction, and how ionizing radiation deposits dose. You will be able to read the chart of nuclides, compute activities and reaction rates, reason about criticality with the four-factor formula, and estimate radiation dose — all from first principles. This course deliberately stops short of the full neutron-transport/diffusion machinery (that's `reactor-physics`) and detailed detector/shield design (that's `radiation-detection-shielding`); it gives you the language and instincts those courses run with.

## Dangerous Checklist

When you finish, you can:

- [ ] Read the chart of nuclides and predict a nuclide's likely decay mode from its position relative to the valley of stability
- [ ] Compute binding energy and mass defect from atomic masses, and explain why the B/A curve makes both fission and fusion release energy
- [ ] Solve the decay law for activity, half-life, and remaining atoms, and handle a two-step chain to secular equilibrium
- [ ] Balance a nuclear reaction and compute its Q-value, deciding whether it is exothermic or needs a threshold energy
- [ ] Convert a microscopic cross-section to a macroscopic one and compute reaction rates, mean free paths, and beam attenuation
- [ ] Explain the 1/v absorption law, resonances, and why moderation (slowing neutrons) raises fission probability
- [ ] Account for the ~200 MeV of a fission event and estimate a source's thermal power from its activity
- [ ] Define the multiplication factor k and classify a system as sub-, critical, or supercritical, including the role of delayed neutrons
- [ ] Estimate k using the four-factor formula and non-leakage probability, and convert between k and reactivity
- [ ] Estimate the Lawson triple product and explain why fusion needs to beat the Coulomb barrier
- [ ] Identify how photons and charged particles lose energy in matter (photoelectric/Compton/pair; stopping power and range)
- [ ] Convert absorbed dose to equivalent and effective dose, and rank the biological hazard of alpha, beta, gamma, and neutron fields

## Modules

### Module 1: Nuclear structure, radioactivity & reactions

From what a nucleus *is* to how it comes apart — the bookkeeping of masses, energies, and decays that everything downstream rests on.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The nucleus and its bookkeeping | Read nuclide notation and reason with nuclear units and scales | Nucleons, isotopes, $^{A}_{Z}X$ notation, nuclear radius $\sim A^{1/3}$, the amu / eV / $E=mc^2$ unit web |
| 1.2 | Binding energy and the chart of nuclides | Compute binding energy and explain the B/A curve's shape | Mass defect, binding energy per nucleon, iron peak, semi-empirical mass formula (intuition), valley of stability |
| 1.3 | Radioactivity and the decay law | Solve the decay law for activity, half-life, and atom count | $\lambda$, $N(t)=N_0e^{-\lambda t}$, activity $A=\lambda N$, half-life vs. mean life, becquerel/curie |
| 1.4 | Decay chains and equilibrium | Track a parent–daughter chain to secular equilibrium | Series decay, two-step Bateman (intuition), secular vs. transient equilibrium, decay modes ($\alpha,\beta^\pm,$ EC, $\gamma$) |
| 1.5 | Nuclear reactions and Q-values | Balance a reaction and compute its Q-value and threshold | Reaction notation $a(b,c)d$, conservation laws, Q-value, exo/endothermic, reaction threshold energy |

**Boss problem 1:** Cobalt-60 ($T_{1/2}=5.27$ yr) beta-decays to Ni-60, releasing $Q=2.82$ MeV per decay (beta plus two gammas). A fresh medical source reads $3.7\times10^{13}$ Bq (1000 Ci). (a) How many Co-60 atoms is that, and what mass of Co-60 does the source contain? (b) Estimate the source's thermal power in watts. (c) What is the activity after 10.5 years?

### Module 2: Neutron cross-sections & interactions

The neutron is the currency of a reactor. This module builds the probabilistic language — cross-sections and mean free paths — for how neutrons find nuclei.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The microscopic cross-section | Interpret $\sigma$ as an effective target area and compute reaction rates | Cross-section as probability-of-interaction, the barn, reaction rate $R=\sigma\,I\,N$, reaction channels (scatter/capture/fission) |
| 2.2 | Macroscopic cross-section and mean free path | Convert $\sigma\to\Sigma$ and predict beam attenuation | $\Sigma=N\sigma$, uncollided flux $e^{-\Sigma x}$, mean free path $1/\Sigma$, additivity over reactions and nuclides |
| 2.3 | Energy dependence: the 1/v law and resonances | Explain why cross-sections rise at low energy and spike at resonances | Thermal/epithermal/fast ranges, $\sigma_a\propto 1/v$, resonance peaks, why thermal neutrons fission $^{235}$U so readily |
| 2.4 | Slowing neutrons down: moderation | Explain how elastic scattering thermalizes neutrons and what makes a good moderator | Elastic scattering kinematics, average logarithmic energy loss $\xi$, lethargy, moderating ratio (intuition, no transport) |

**Boss problem 2:** A beam of thermal neutrons ($v=2200$ m/s) with intensity $10^{10}$ n·cm⁻²·s⁻¹ strikes natural boron (density 2.34 g/cm³, atomic mass 10.8 g/mol, 19.9% $^{10}$B, whose thermal absorption cross-section is 3840 barns). (a) Find the macroscopic absorption cross-section $\Sigma_a$ of natural boron. (b) Find the absorption mean free path. (c) What fraction of the beam is absorbed in a 1 mm slab — and what does the answer say about boron as a control material?

### Module 3: Fission, the chain reaction & criticality

Where the energy comes from, and the feedback loop that either dies out, holds steady, or runs away.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The fission process and its energy | Account for the ~200 MeV released and where it goes | Fission energetics from the B/A curve, asymmetric fragment mass distribution, prompt vs. delayed energy release, decay heat |
| 3.2 | Fission products and neutron yield | Use $\nu$ and $\eta$, and explain why delayed neutrons matter | Neutrons per fission $\nu$, neutrons per absorption $\eta$, prompt vs. delayed neutrons, fission-product poisons (intuition) |
| 3.3 | The chain reaction and the multiplication factor | Define $k$ and classify a system's criticality | $k$ as neutrons-per-generation, sub/critical/supercritical, neutron generation and lifetime, why delayed neutrons make control possible |
| 3.4 | Criticality and the four-factor formula | Estimate $k$ from its factors and convert to reactivity | $\eta, f, p, \varepsilon$; $k_\infty=\eta f p \varepsilon$; non-leakage $\to k_{\text{eff}}$; reactivity $\rho=(k-1)/k$ |

**Boss problem 3:** A thermal reactor has $\eta=2.02$, $f=0.65$, $p=0.80$, $\varepsilon=1.04$, and a total non-leakage probability $P_{NL}=0.90$. (a) Compute $k_\infty$. (b) Compute $k_{\text{eff}}$ and classify the reactor. (c) Compute the reactivity $\rho$ in pcm, and find how many neutrons remain after 10 generations if you start with 1000. (d) Holding the four factors fixed, what non-leakage probability would make the reactor exactly critical?

### Module 4: Radiation interactions, dose & a reactor overview

The other fusion energy source, how radiation deposits its energy in matter, how we quantify biological harm, and a map of the reactor landscape this shelf branches into.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Fusion basics | Explain the Coulomb barrier and estimate the Lawson criterion | D-T reaction, Coulomb barrier and tunneling, ignition, Lawson triple product $n\tau T$ (intuition) |
| 4.2 | Photons through matter | Identify how gammas attenuate and compute shielding thickness | Photoelectric, Compton, pair production; linear attenuation $\mu$; half-value layer; buildup (intuition) |
| 4.3 | Charged particles through matter | Explain stopping power and range for alphas, betas, and ions | Ionization energy loss, stopping power $-dE/dx$ (Bethe intuition), range, the Bragg peak, bremsstrahlung |
| 4.4 | Dose quantities | Convert absorbed dose to equivalent and effective dose | Exposure, absorbed dose (gray), radiation weighting $w_R$, equivalent & effective dose (sievert), dose-rate intuition |
| 4.5 | Reactor types and the nuclear landscape | Map the major reactor designs and where this shelf goes next | PWR/BWR, heavy-water, gas-cooled and fast reactors; moderator/coolant/fuel choices; the fuel cycle and shelf roadmap |

**Boss problem 4:** A narrow beam of 1 MeV gamma rays passes through lead, where the linear attenuation coefficient is $\mu=0.77$ cm⁻¹. (a) Find the half-value layer. (b) Find the lead thickness needed to cut the beam intensity by a factor of 1000. (c) A worker's tissue absorbs 2 mGy from these gammas and, separately, 2 mGy from alpha particles ($w_R=20$). Compute each contribution to equivalent dose and the total in mSv — and explain which insult dominates and why, despite equal absorbed dose.

## Sources of truth

- Lamarsh & Baratta, *Introduction to Nuclear Engineering* — the spine for cross-sections, the chain reaction, and the four-factor formula.
- MIT OCW 22.01, *Introduction to Nuclear Engineering and Ionizing Radiation* — level, ordering, and the from-scratch nuclear-physics stance.
- Krane, *Introductory Nuclear Physics* — for nuclear structure, binding energy, and decay conventions.
- Turner, *Atoms, Radiation, and Radiation Protection* — for radiation interactions and dose quantities.
