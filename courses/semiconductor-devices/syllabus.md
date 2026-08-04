# Semiconductor Devices — Syllabus

> Engineering · Tier 2 · ~22 lessons · Prereqs: [condensed-matter](../condensed-matter/syllabus.md), [electronics](../electronics/syllabus.md) · Roadmap id: `semiconductor-devices`

## Goal

Learn how the band theory of `condensed-matter` becomes the working devices of `electronics` — how a piece of doped silicon rectifies, amplifies, switches, emits light, and turns sunlight into current. You will build the transport toolkit (drift, diffusion, generation–recombination, the continuity equations), then use it to derive the p–n junction from its electrostatics all the way to its I–V and capacitance, and go on to the bipolar transistor, the MOS capacitor and MOSFET (with the scaling story that drives Moore's law), and the optoelectronic devices — LED, laser, solar cell, detector. Deliberately skipped: full process/fabrication engineering (we take only a taste at the end) and compound-semiconductor exotica beyond the heterojunction idea. This is a tier-2 course — it assumes you can already read a band diagram, use Fermi–Dirac statistics, and locate a Fermi level, so the first two lessons are a fast review, not a first pass.

## Dangerous Checklist

When you finish, you can:

- [ ] Compute equilibrium electron and hole concentrations in a doped semiconductor and locate the Fermi level across freeze-out, extrinsic, and intrinsic regimes
- [ ] Set up and solve the minority-carrier diffusion equation for a device region, and extract diffusion length and lifetime
- [ ] Derive a p–n junction's built-in potential, depletion width, and peak field from its doping using the depletion approximation
- [ ] Derive the ideal-diode (Shockley) equation and explain each factor physically
- [ ] Compute a junction's capacitance and use a $1/C^2$ plot to extract doping, and distinguish depletion from diffusion capacitance
- [ ] Explain avalanche and Zener breakdown and estimate a breakdown voltage from the critical field
- [ ] Explain transistor action in a BJT and compute its current gain from the base and emitter parameters
- [ ] Derive a MOSFET threshold voltage from oxide thickness and doping, and its drain current in the linear and saturation regimes
- [ ] Explain the dominant short-channel effects and why constant-field scaling improves speed, density, and power
- [ ] Relate an LED or laser emission wavelength to the band gap, and explain the population inversion a laser needs
- [ ] Write the illuminated I–V of a solar cell and find its open-circuit voltage, short-circuit current, and fill factor
- [ ] Estimate a photodetector's responsivity and cutoff wavelength from the material and geometry

## Modules

### Module 1: Carriers and transport

Everything downstream is bookkeeping on electrons and holes: how many there are, and how they move. Build the four transport mechanisms and the equation that conserves them.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Bands and carriers: a fast review | Reload the band picture and count intrinsic carriers | conduction/valence band, effective mass, hole, $n_i$, effective density of states $N_c,N_v$, mass action $np=n_i^2$ |
| 1.2 | Doping and the Fermi level in equilibrium | Add dopants and place $E_F$ across temperature regimes | donors/acceptors, ionization energy, charge neutrality, majority/minority carriers, freeze-out/extrinsic/intrinsic |
| 1.3 | Drift, mobility, and conductivity | Push carriers with a field and get Ohm's law from scattering | drift velocity, mobility $\mu$, scattering time, $\sigma=q(n\mu_n+p\mu_p)$, velocity saturation |
| 1.4 | Diffusion and the Einstein relation | Let concentration gradients drive current and link the two coefficients | Fick's law, diffusion current, $D=(k_BT/q)\mu$, quasi-Fermi levels, total drift+diffusion current |
| 1.5 | Generation and recombination | Track how carriers are born and die out of equilibrium | thermal equilibrium balance, low-level injection, minority-carrier lifetime $\tau$, SRH traps, Auger and radiative recombination |
| 1.6 | The continuity equations | Assemble conservation into the master transport equation | continuity equation, minority-carrier diffusion equation, diffusion length $L=\sqrt{D\tau}$, steady-state profiles |

**Boss problem 1:** An $n$-type Si bar ($N_d$ given) is illuminated at $x=0$ so a fixed excess hole density $\delta p(0)$ is injected under low-level conditions; the bar is long and field-free with hole lifetime $\tau_p$. Find the equilibrium $p_0$ from mass action, solve the steady-state minority-carrier diffusion equation for $\delta p(x)$, identify the diffusion length $L_p=\sqrt{D_p\tau_p}$, and compute the hole diffusion current at $x=0$. Then estimate the field that would make drift comparable to diffusion over one diffusion length, and say which mechanism dominates in a real diode.

### Module 2: The p–n junction and its relatives

Bring $n$ and $p$ together and the whole course's payoff appears: a built-in field, a rectifying I–V, a voltage-tunable capacitor, and — with a metal instead of a $p$-side — a Schottky diode.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Junction electrostatics: the depletion approximation | Solve Poisson's equation across the space-charge region | space-charge region, depletion approximation, Poisson's equation, charge neutrality of $x_n N_d=x_p N_a$ |
| 2.2 | Built-in potential, width, and field | Turn the doping into the junction's geometry and peak field | built-in potential $V_{bi}$, depletion width $W(V)$, peak field $\mathcal{E}_{max}$, one-sided junction, band bending |
| 2.3 | The ideal-diode equation | Derive Shockley's $I$–$V$ from injected minority carriers | law of the junction, minority injection, ideal-diode equation $I=I_0(e^{qV/k_BT}-1)$, saturation current $I_0$ |
| 2.4 | Junction and diffusion capacitance | Read the two ways a diode stores charge | depletion (junction) capacitance $C_j\propto1/\sqrt{V_{bi}-V}$, $1/C^2$ doping plot, stored charge, diffusion capacitance, transit time |
| 2.5 | Reverse breakdown | Explain the sharp reverse current and estimate its voltage | critical field, avalanche multiplication, impact ionization, Zener tunneling, breakdown voltage vs doping |
| 2.6 | Metal–semiconductor and heterojunctions | Meet the Schottky barrier and the engineered band offset (a taste) | Schottky barrier $\phi_B$, ohmic vs rectifying contact, band offset, heterojunction, band-gap engineering |

**Boss problem 2:** A one-sided $p^+n$ silicon junction has $N_a\gg N_d$ with $N_d$ given. Compute $V_{bi}$, the zero-bias depletion width and peak field, and the junction capacitance per area at a stated reverse bias. Then write the ideal-diode $I_0$ in terms of the $n$-side hole parameters, evaluate the forward current at $V=0.6\,\mathrm{V}$, and — using a critical field of $\sim3\times10^5\,\mathrm{V/cm}$ — estimate the avalanche breakdown voltage. State which quantities scale with $N_d$ and which don't, and why a lightly doped side sets both the width and the breakdown.

### Module 3: Transistors — the BJT and the MOSFET

The two devices that built the electronic age. Both are the junction toolkit reused: the BJT is two junctions sharing a base, the MOSFET is a capacitor that gates a channel.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The BJT: transistor action | Explain how a thin base turns a small current into a large one | $npn$/$pnp$, forward-active bias, minority injection across the base, base transport, collector collection |
| 3.2 | BJT currents and gain | Compute $\alpha$ and $\beta$ from the base and emitter design | emitter/base/collector currents, base transport factor, emitter injection efficiency, $\beta=I_C/I_B$, Early effect |
| 3.3 | The MOS capacitor | Sweep the gate through accumulation, depletion, and inversion | MOS band diagram, flat-band voltage, accumulation/depletion/inversion, surface potential, $2\phi_F$ condition |
| 3.4 | Threshold voltage and the C–V curve | Pin down the voltage that forms a channel and read it off C–V | threshold voltage $V_T$, oxide capacitance $C_{ox}$, depletion charge, high/low-frequency C–V, body effect |
| 3.5 | The MOSFET I–V | Derive the drain current in linear and saturation regimes | gradual-channel approximation, linear (triode) region, pinch-off, saturation current, transconductance $g_m$ |
| 3.6 | Short-channel effects and scaling | Explain what breaks in small transistors and how scaling fixes it | channel-length modulation, DIBL, subthreshold swing, velocity saturation, constant-field scaling, power density |

**Boss problem 3:** An $n$-channel MOSFET has oxide thickness $t_{ox}$, substrate doping $N_a$, and a stated flat-band voltage. Compute $C_{ox}$, the maximum depletion charge, the surface potential $2\phi_F$, and assemble the threshold voltage $V_T$. Then, using the square-law model with a given mobility and $W/L$, find the drain current and transconductance at a specified $V_{GS}>V_T$ in saturation. Finally, apply constant-field scaling by a factor $\kappa$: state what happens to delay, density, and power per unit area, and name one short-channel effect that spoils the ideal scaling. As a coda, explain in one paragraph why a BJT's gain lives in its base width the way a MOSFET's current lives in its channel length.

### Module 4: Optoelectronic devices and fabrication

Now let photons in. The same junction that rectifies will emit light when carriers recombine and generate current when light is absorbed — LEDs, lasers, detectors, and solar cells. Close with how any of this actually gets built.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Light and semiconductors: absorption, emission, detection | Connect a photon's energy to band transitions and photocurrent | absorption coefficient, direct vs indirect gap, cutoff wavelength $\lambda_g=hc/E_g$, photogeneration, photodetector responsivity |
| 4.2 | The LED and the laser diode | Turn forward injection into light, then into coherent light | radiative recombination, internal/external efficiency, population inversion, optical cavity, threshold current, heterostructure confinement |
| 4.3 | The solar cell | Run a junction in the fourth quadrant and harvest power | photogenerated current $I_L$, illuminated I–V, open-circuit voltage $V_{oc}$, short-circuit current, fill factor, efficiency limit |
| 4.4 | A taste of device fabrication | See how doping profiles and layers are actually made | crystal growth, oxidation, photolithography, ion implantation and diffusion, deposition and etch, the planar process |

**Boss problem 4:** A silicon solar cell in the dark obeys the ideal-diode law with a given $I_0$; under illumination it delivers a photogenerated current $I_L$. Write the illuminated I–V, derive the open-circuit voltage $V_{oc}$ and short-circuit current, and sketch where the maximum-power point sits and what the fill factor measures. Then compute the longest wavelength this cell can absorb from its band gap, and explain in one sentence why the same $E_g$ that sets $V_{oc}$ also caps the current — the band-gap trade-off at the heart of the solar-cell efficiency limit. As a coda, state the emission wavelength of an LED made from a gap twice as wide.

## Sources of truth

- Sze & Ng, *Physics of Semiconductor Devices* (primary; the canonical device reference for scope and rigor)
- Pierret, *Semiconductor Device Fundamentals* (the intuition-first framing and lesson ordering this course leans on)
- Neamen, *Semiconductor Physics and Devices* (worked-example style for transport, junctions, and MOS)
- Streetman & Banerjee, *Solid State Electronic Devices* (clean, compact derivations at exactly this level)
