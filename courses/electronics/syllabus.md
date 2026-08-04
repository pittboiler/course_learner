# Electronics & Semiconductors — Syllabus

> Engineering · Tier 1 · ~18 lessons · Prereqs: [circuits](../circuits/syllabus.md) · Roadmap id: `electronics`

## Goal

Take the linear-circuits toolkit you already own and add the three devices that make electronics *do* something: the diode, the transistor, and the op-amp. By the end you can analyze and roughly design real analog blocks — rectifier supplies, single-transistor amplifiers, op-amp signal chains, active filters — reason about how feedback and frequency response shape them, and read a CMOS gate as the atom of digital logic. We stay at the *circuit* level: enough semiconductor physics to know why a junction rectifies and why a transistor amplifies, but no band diagrams or fabrication (that depth lives in [semiconductor-devices](../semiconductor-devices/syllabus.md)). This course builds directly on [circuits](../circuits/syllabus.md), and its CMOS material is the on-ramp to [digital-logic](../digital-logic/syllabus.md).

## Dangerous Checklist

When you finish, you can:

- [ ] Predict a diode circuit's behavior using the ideal, constant-drop, and small-signal models, and pick the right one for the job
- [ ] Design a rectifier-plus-filter supply and estimate its DC output and ripple
- [ ] Analyze clippers and clampers and design a Zener shunt regulator that holds its output under load
- [ ] Explain how a BJT amplifies and compute its Q-point from a voltage-divider bias network
- [ ] Draw the small-signal model of a BJT stage and compute its midband gain and input/output impedance
- [ ] Explain MOSFET operation, bias a MOSFET into saturation, and analyze a common-source amplifier
- [ ] Apply the two ideal-op-amp rules to solve inverting, non-inverting, summing, and difference amplifiers by inspection
- [ ] Design an op-amp integrator, differentiator, or first-order active filter to a target gain and cutoff
- [ ] Analyze comparators and Schmitt triggers and compute their hysteresis
- [ ] State what negative feedback buys you (gain stability, impedance, bandwidth) and quantify it with loop gain
- [ ] Use the gain–bandwidth product to find a closed-loop amplifier's bandwidth
- [ ] Sketch a CMOS inverter's transfer curve, build logic gates from it, and estimate its static and dynamic power

## Modules

### Module 1: Diodes & applications

Start with just enough semiconductor physics to make the junction make sense, then master the one-way valve — its models, and the rectifier, waveshaping, and regulator circuits it enables.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Semiconductors, carriers & doping | Explain where mobile charge comes from and why doping controls it | intrinsic vs extrinsic, electrons & holes, donors/acceptors, n-type & p-type, majority/minority carriers |
| 1.2 | The pn-junction diode: I–V & models | Analyze a diode circuit with the ideal, constant-voltage-drop, and small-signal models | built-in potential, diode equation, forward/reverse bias, load line, $r_d = V_T/I_D$ |
| 1.3 | Rectifiers & power supplies | Design a rectifier + filter cap and estimate DC output and ripple | half-wave, full-wave, bridge, smoothing capacitor, ripple voltage, PIV |
| 1.4 | Clippers, clampers & the Zener regulator | Shape a waveform with diodes and regulate a rail with a Zener | series/shunt clippers, DC restorer (clamper), Zener breakdown, shunt regulator, line & load regulation |

**Boss problem 1:** A full-wave bridge (constant-drop model, 0.7 V per conducting diode, two in the path) is driven by a 12 V-peak, 60 Hz secondary, feeds a 1000 µF smoothing capacitor, and supplies a 120 Ω load. (a) Estimate the peak DC output and the peak-to-peak ripple. (b) That ≈10 V rail now feeds a 5.1 V Zener shunt regulator (assume $r_z \approx 0$) supplying a load that draws up to 20 mA. Choose the series resistor so the Zener still carries at least 5 mA at full load, and state what happens to Zener current when the load is removed.

### Module 2: Transistors — BJT & MOSFET

The device that made electronics an industry: a small signal controlling a large one. Learn both flavors — how each conducts, how to bias it into its active region, and how to read off small-signal gain.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The BJT: how it works | Explain transistor action and place a BJT in cutoff, active, or saturation | npn/pnp, base–emitter/base–collector junctions, $\beta$, $I_C = \beta I_B$, active-region conditions |
| 2.2 | BJT DC biasing | Compute a stable Q-point from a voltage-divider bias network | load line, voltage-divider bias, emitter degeneration, $\beta$-independence, thermal stability |
| 2.3 | BJT small-signal amplifiers | Build the small-signal model and find gain and impedances of a common-emitter stage | hybrid-$\pi$, $g_m = I_C/V_T$, $r_\pi$, common-emitter gain, emitter bypass, $R_\text{in}$/$R_\text{out}$ |
| 2.4 | The MOSFET: how it works | Explain channel formation and place a MOSFET in cutoff, triode, or saturation | enhancement NMOS/PMOS, threshold $V_t$, inversion, triode vs saturation, square-law $I_D$ |
| 2.5 | MOSFET biasing & the common-source amplifier | Bias a MOSFET into saturation and compute common-source gain | $g_m = 2I_D/V_{ov}$, self/divider bias, common-source stage, source degeneration, comparison to the BJT |

**Boss problem 2:** A common-emitter amplifier uses voltage-divider bias with $V_{CC}=15\text{ V}$, $R_1=47\text{ k}\Omega$, $R_2=10\text{ k}\Omega$, $R_C=3.3\text{ k}\Omega$, $R_E=1\text{ k}\Omega$, $\beta=100$, $V_{BE}=0.7\text{ V}$. (a) Find the Q-point ($I_C$, $V_{CE}$) and confirm the transistor is in the active region. (b) With the emitter fully bypassed, compute $g_m$ and the midband voltage gain. (c) Now leave a 100 Ω portion of $R_E$ unbypassed — recompute the gain and say in one sentence what that resistor buys you.

### Module 3: Op-amps & analog design

The op-amp turns amplifier design into algebra: assume ideal, apply two rules, and read the circuit's function off its feedback network. This is where you design signal chains.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The ideal op-amp: inverting & non-inverting | Solve the two canonical amplifiers with the golden rules | ideal model, virtual short, no input current, inverting/non-inverting gain, buffer |
| 3.2 | Summing, difference & instrumentation amps | Analyze and design multi-input op-amp circuits | inverting summer, difference amp, common-mode rejection, instrumentation amp (touch) |
| 3.3 | Integrators & differentiators | Build op-amp circuits that integrate or differentiate a signal | integrator, differentiator, reset/leak resistor, noise trade-off, $s$-domain view |
| 3.4 | Active filters | Design a first-order active low-/high-pass to a target gain and cutoff | active vs passive filters, transfer function, corner frequency, roll-off, Sallen–Key (touch) |
| 3.5 | Comparators & Schmitt triggers | Analyze open-loop comparison and add hysteresis with positive feedback | comparator, saturation, positive feedback, Schmitt trigger, hysteresis width, relaxation oscillator (touch) |

**Boss problem 3:** Design a two-stage op-amp signal chain. (a) An inverting summer must produce $V_x = -(2V_1 + 5V_2)$ using a 100 kΩ feedback resistor — give the two input resistors. (b) $V_x$ then drives an inverting first-order active low-pass filter with DC gain $-10$ and a 1 kHz cutoff — choose its input resistor, feedback resistor, and capacitor. (c) Give the overall gain from $V_2$ to the output at DC, and its magnitude at 10 kHz.

### Module 4: Feedback, frequency response & the digital interface

Why every real amplifier uses feedback, what sets its bandwidth, and how the same transistors — arranged as complementary switches — become the CMOS logic that bridges into the digital world.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Negative feedback: what it buys you | Quantify how loop gain trades raw gain for stability, impedance, and linearity | loop gain $T$, closed-loop gain $\approx 1/\beta$, gain desensitivity, impedance shaping, distortion reduction |
| 4.2 | Frequency response & the gain–bandwidth product | Find a closed-loop amplifier's bandwidth from its GBW | dominant pole, Bode magnitude, $\text{GBW}$, gain–bandwidth trade, Miller effect (touch), slew rate |
| 4.3 | CMOS: the inverter, gates & logic families | Read the CMOS inverter's transfer curve and build gates from complementary switches | complementary NMOS/PMOS, VTC, noise margins, static vs dynamic power, NAND/NOR, logic-family comparison (touch) |
| 4.4 | A taste of ADC & DAC | Explain how signals cross between analog and digital and where resolution/speed limits come from | sampling, quantization, resolution (bits/LSB), R-2R DAC, flash & successive-approximation ADC (touch) |

**Boss problem 4:** (a) An op-amp with gain–bandwidth product $\text{GBW} = 1\text{ MHz}$ and open-loop DC gain $2\times10^5$ is wired as a non-inverting amplifier with closed-loop gain 50. Find the closed-loop bandwidth and the DC loop gain, then estimate how much a $\pm10\%$ shift in the op-amp's open-loop gain moves the closed-loop gain. (b) A CMOS inverter runs from a 5 V supply with $|V_t| = 1\text{ V}$ for both devices. State its switching threshold for a symmetric design, explain why it draws essentially zero static current, and estimate its dynamic power switching a 10 pF load at 50 MHz.

## Sources of truth

- Sedra & Smith, *Microelectronic Circuits* — device models, small-signal notation, and op-amp/feedback treatment.
- Razavi, *Fundamentals of Microelectronics* — intuition-first framing of diodes, transistors, and biasing.
- Horowitz & Hill, *The Art of Electronics* — practical design rules of thumb and the "what actually matters" perspective.
- Neamen, *Microelectronics: Circuit Analysis and Design* — worked-problem style and CMOS logic conventions.
