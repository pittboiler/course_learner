# Nuclear Materials — Syllabus

> Engineering · Tier 2 · ~21 lessons · Prereqs: [materials-science](../materials-science/syllabus.md), [intro-nuclear-engineering](../intro-nuclear-engineering/syllabus.md) · Roadmap id: `nuclear-materials`

## Goal

Learn why materials inside a reactor slowly become different materials — and how engineers design around it. A neutron flux is a firehose of atomic-scale damage: it knocks atoms off their lattice sites, breeds point defects that cluster into loops and voids, swells and hardens and embrittles metals, and drives fuel to crack and vent radioactive gas. You will build the chain from a single knock-on collision (the displacement cascade and the **dpa** dose unit) up through microstructural evolution (loops, voids, swelling), the mechanical-property shifts that limit component life (radiation hardening, embrittlement, the ductile-to-brittle transition shift), the behavior of nuclear fuel (UO₂ and metallic fuels, the fuel temperature profile, fission-gas release and swelling), and the structural and cladding alloys that must survive it all (Zircaloy, austenitic and ferritic/martensitic steels) including corrosion and stress-corrosion cracking in hot coolant — closing with the harsher materials problem of fusion first walls and tritium retention. Deliberately skipped: alloy-design and processing-metallurgy depth (heat treatments, phase-diagram engineering), and full multiscale computational modeling (MD/kinetic-Monte-Carlo/rate-theory codes) — we develop the analytic rate-theory backbone but stop before the simulation stack. This is a tier-2 course: it assumes fluency with `materials-science` (crystal structure, dislocations, diffusion, the ductile-to-brittle picture) and `intro-nuclear-engineering` (neutron flux and cross sections, the fission reaction, reactor coolant and operating conditions).

## Dangerous Checklist

When you finish, you can:

- [ ] Classify point, line, and volume defects in a crystal and explain which ones irradiation creates and destroys
- [ ] Trace a neutron's energy from collision to primary knock-on atom to displacement cascade, and estimate the cascade size
- [ ] Compute a displacement dose in **dpa** from a neutron fluence using the Kinchin–Pease / NRT model, and explain what dpa does and does not capture
- [ ] Explain how surviving point defects migrate, recombine, and cluster into dislocation loops and voids using rate-theory sink language
- [ ] Estimate void-swelling rate and explain the dislocation bias that makes swelling happen at all
- [ ] Predict irradiation hardening from an obstacle density using the dispersed-barrier model, and connect it to the ductile-to-brittle transition-temperature shift
- [ ] Compute a fuel pin's radial temperature profile from linear power and integral conductivity, and locate the melt and restructuring limits
- [ ] Explain fission-gas release: where the gas comes from, why it is temperature-thresholded, and how it drives swelling and cladding pressure
- [ ] Compare UO₂, metallic, and advanced fuels on thermal, swelling, and burnup performance
- [ ] Select and justify a cladding/structural alloy (Zircaloy, austenitic vs. ferritic/martensitic steel) for a given reactor environment
- [ ] Explain waterside corrosion, hydrogen pickup, and (irradiation-assisted) stress-corrosion cracking in reactor coolant
- [ ] State the distinctive materials challenges of a fusion first wall, including high-energy-neutron damage, transmutation gas, and tritium retention

## Modules

### Module 1: Structure, defects, and radiation damage

Start from the crystal you already know, then let a neutron hit it: this module builds the physics of a single displacement event up to the dose unit the whole field runs on.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Crystals and their defects (fast refresher) | Recall the defect zoo and name what irradiation will disturb | bcc/fcc/hcp, point defects (vacancy, interstitial, Frenkel pair), dislocations, grain boundaries, defect energetics |
| 1.2 | How radiation deposits energy | Distinguish the ways particles damage a solid and why neutrons are special | ionizing vs. displacive damage, elastic vs. inelastic scattering, neutron/ion/electron/gamma comparison, energy transfer $T=\frac{4M_1M_2}{(M_1+M_2)^2}E$ |
| 1.3 | The primary knock-on atom and displacement cascades | Follow the first struck atom as it shatters a local region | PKA, displacement energy $E_d$, collision cascade, thermal spike, cascade morphology, self-interstitials at the periphery |
| 1.4 | Counting displacements: Kinchin–Pease, NRT, and dpa | Turn a fluence into a dose in displacements per atom | damage energy, Kinchin–Pease $N_d=E_{dam}/2E_d$, NRT efficiency $\kappa\approx0.8$, dpa definition, dpa vs. fluence vs. burnup |
| 1.5 | From cascade to defect population | Explain why most displacements vanish and what survives | in-cascade recombination, defect survival efficiency, freely-migrating defects, cascade-produced clusters, dose-rate effect |

**Boss problem 1:** A stainless-steel component sits in a fast-reactor flux of $\phi = 1\times10^{15}$ n·cm⁻²·s⁻¹ (E > 0.1 MeV) with an effective displacement cross section $\sigma_d = 2000$ b. (a) Compute the displacement rate and the dpa accumulated in one full-power year. (b) A 100 keV PKA is created; using $E_d = 40$ eV and taking the damage energy as ~70% of the PKA energy, estimate the number of Frenkel pairs from Kinchin–Pease and then from NRT ($\kappa=0.8$). (c) If in-cascade recombination leaves only ~30% of NRT defects as freely-migrating, give the surviving defect production rate per atom per second and comment on why measured swelling correlates better with this number than with raw dpa.

### Module 2: Property changes under irradiation

Surviving defects don't sit still — they migrate to sinks, bias-select their way into loops and voids, and rewrite the metal's dimensions and toughness. This is the module where damage becomes an engineering limit.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Point-defect migration and radiation-enhanced diffusion | Track vacancies and interstitials to sinks and see diffusion speed up | defect migration energy, sink strength, rate theory balance, radiation-enhanced diffusion, radiation-induced segregation |
| 2.2 | Dislocation loops and the dislocation bias | Explain why interstitials and vacancies sort into different structures | interstitial/vacancy loops, loop nucleation and growth, dislocation bias $\sim$ few %, why the bias is the engine of everything downstream |
| 2.3 | Voids and void swelling | Predict volumetric swelling and its temperature and dose window | void nucleation, vacancy supersaturation, swelling rate $\sim1\%$/dpa regime, temperature window ($0.3$–$0.55\,T_m$), incubation dose, helium's role |
| 2.4 | Irradiation creep and growth | Explain dimensional change under stress without thermal creep | SIPA and climb-glide creep, irradiation creep compliance, stress-free growth in anisotropic (hcp) metals, distinction from swelling |
| 2.5 | Radiation hardening | Compute the yield-strength increase from irradiation-produced obstacles | dispersed-barrier model $\Delta\sigma=\alpha M\mu b\sqrt{Nd}$, loops/voids/precipitates as obstacles, source hardening, dose saturation |
| 2.6 | Embrittlement and the DBTT shift | Connect hardening to loss of toughness and the transition-temperature shift | ductile-to-brittle transition, $\Delta$DBTT, upper-shelf energy drop, RPV embrittlement (Cu/Ni), helium embrittlement of grain boundaries |

**Boss problem 2:** A ferritic reactor-pressure-vessel steel is irradiated to a fluence that produces a number density $N = 3\times10^{23}$ m⁻³ of copper-rich precipitates of mean diameter $d = 3$ nm. Take $M=3.06$, $\mu=80$ GPa, $b=0.25$ nm, $\alpha=0.4$. (a) Use the dispersed-barrier model to estimate the yield-strength increase $\Delta\sigma_y$. (b) Given the empirical rule $\Delta\text{DBTT} \approx C\,\Delta\sigma_y$ with $C \approx 0.6\,^\circ\text{C/MPa}$, estimate the transition-temperature shift and explain physically why a harder steel is a more brittle one. (c) Explain in one paragraph why a ferritic/martensitic steel is chosen over an austenitic one for high-dose service despite this embrittlement — i.e., what void-swelling behavior are you buying in exchange.

### Module 3: Nuclear fuels and fission-product behavior

The fuel is where the energy — and the worst of the damage — is born. This module builds the fuel pin from its temperature profile outward, then follows the fission products that swell it and pressurize the cladding.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | UO₂: the workhorse ceramic fuel | Explain why an oxide with poor conductivity still won the reactor | fluorite structure, high melting point, low thermal conductivity $k(T)$, chemical/radiation stability, O/M ratio |
| 3.2 | The fuel temperature profile and restructuring | Compute centerline temperature and read the microstructure it creates | linear power $q'$, integral conductivity $\int k\,dT$, centerline vs. surface temperature, cracking, columnar/equiaxed grain restructuring, central void |
| 3.3 | Fission products and their fates | Inventory what fission makes and sort it by chemical behavior | fission yield curve, gaseous (Xe, Kr) vs. solid/volatile/oxide FPs, fuel chemistry shifts, burnup as at% or MWd/kgU |
| 3.4 | Fission-gas release and gaseous swelling | Predict when gas leaves the fuel and pressurizes the pin | intra- vs. inter-granular bubbles, athermal vs. thermal (diffusion) release, ~1000 °C threshold, release fraction, plenum pressure, gaseous + solid swelling |
| 3.5 | Metallic and advanced fuels | Compare U-alloy, MOX, TRISO, and nitride/carbide fuels on performance | metallic fuel (high $k$, fuel-clad chemical interaction, constituent redistribution), MOX, TRISO coated particles, accident-tolerant fuel concepts |

**Boss problem 3:** A UO₂ fuel pin operates at linear power $q' = 30$ kW/m with a pellet radius $a = 4.1$ mm and outer-surface temperature $T_s = 450\,^\circ$C. Model conductivity crudely as constant $k = 3$ W·m⁻¹·K⁻¹. (a) Using the standard result $q' = 4\pi \!\int_{T_s}^{T_0} k\,dT$ for a cylindrical pin with uniform heat generation, find the centerline temperature $T_0$ and compare it to the UO₂ melting point (~2865 °C) and to the ~1000 °C fission-gas-release threshold. (b) Identify which radial zones of the pellet exceed the release threshold and argue qualitatively how the release fraction and plenum pressure change if $q'$ is raised by 50%. (c) State one reason a metallic fuel with $k \sim 10\times$ higher would run far cooler, and one new failure mode you take on by switching.

### Module 4: Cladding, structural materials, and corrosion

Everything the fuel does, some alloy has to contain — in hot, flowing, radiolytically aggressive coolant, for decades. This module covers the alloys that do it and the ways they fail, then steps to the even harsher fusion environment.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Zirconium alloys: the LWR cladding | Explain why Zircaloy clads water reactors and how it degrades | low thermal-neutron absorption, Zircaloy-2/4 and ZIRLO/M5, hcp anisotropy and texture, hydride formation and embrittlement, LOCA behavior |
| 4.2 | Steels: austenitic vs. ferritic/martensitic | Choose a structural steel by swelling, strength, and temperature | 316 austenitic (swelling-prone), F/M steels (swelling-resistant, lower creep ceiling), ODS steels, high-temperature strength |
| 4.3 | Corrosion in reactor coolant | Predict oxide growth and hydrogen uptake in PWR/BWR water | waterside oxidation kinetics, water chemistry (pH, dissolved H₂/O₂), radiolysis, CRUD deposition, corrosion-driven hydrogen pickup |
| 4.4 | Stress-corrosion cracking and IASCC | Explain cracking under the joint action of stress, environment, and flux | SCC triad (susceptible material + tensile stress + environment), sensitization, irradiation-assisted SCC, RIS at grain boundaries, crack-growth-rate curves |
| 4.5 | Materials for fusion | Contrast the fusion first-wall problem with fission and name its hard parts | 14 MeV neutrons, high He/dpa appdm ratio, transmutation and gas embrittlement, plasma-facing materials (W, Be), tritium retention and permeation, low-activation steels |

**Boss problem 4:** A PWR fuel assembly runs Zircaloy-4 cladding for a long cycle. (a) The Zr → ZrO₂ reaction $\text{Zr} + 2\text{H}_2\text{O} \to \text{ZrO}_2 + 2\text{H}_2$ liberates hydrogen; explain the path by which some of that hydrogen ends up embrittling the cladding as hydrides, and why cold, unstressed regions are where hydrides preferentially precipitate and orient dangerously. (b) A neighboring stainless-steel core-internal component develops IASCC after high fluence. Name the three legs of the SCC triad and identify what irradiation contributes to each (hint: RIS to grain-boundary chemistry, hardening to local stress, radiolysis to environment). (c) You are asked whether to reuse this Zircaloy for the first wall of a fusion device. Give two reasons the fusion neutron spectrum makes that a poor choice even though it works well in an LWR.

## Sources of truth

- Was, *Fundamentals of Radiation Materials Science* (primary; cascade physics, rate theory, dpa, swelling, hardening — notation and rigor level)
- Olander, *Fundamental Aspects of Nuclear Reactor Fuel Elements* (the classic for fuel temperature profiles, fission-gas release, and fuel performance)
- Konings (ed.), *Comprehensive Nuclear Materials* (reference-level breadth for fuels, cladding, and corrosion data)
- Zinkle & Was, "Materials challenges in nuclear energy," *Acta Materialia* (2013) (the modern framing for structural-alloy selection and fusion materials)
