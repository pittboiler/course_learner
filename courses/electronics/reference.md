# Electronics & Semiconductors · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Three devices — the diode, the transistor, the op-amp — and one recurring method:
**linearize about an operating point.** This card holds the device models and
when each applies, the bias and small-signal formulas, the op-amp topologies, the
feedback and bandwidth relations, and the CMOS and converter numbers — plus the
notation collisions and sign traps that cause most real errors.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $n$, $p$ | electron and hole concentrations, cm$^{-3}$ | [1.1](lessons/01-01-semiconductors-carriers-doping.md) |
| $n_i$ | intrinsic carrier concentration; $\approx1.0\times10^{10}\ \text{cm}^{-3}$ for Si at 300 K | [1.1](lessons/01-01-semiconductors-carriers-doping.md) |
| $N_D$, $N_A$ | donor and acceptor doping concentrations | [1.1](lessons/01-01-semiconductors-carriers-doping.md) |
| $E_g$ | band gap; Si 1.12 eV, Ge 0.67 eV, GaAs 1.42 eV | [1.1](lessons/01-01-semiconductors-carriers-doping.md) |
| $\mu_n$, $\mu_p$ | electron / hole mobility; Si $\approx1350$ / $480\ \text{cm}^2/\text{V·s}$ | [1.1](lessons/01-01-semiconductors-carriers-doping.md) |
| $V_T$ | **thermal voltage** $kT/q \approx 25\ \text{mV}$ at 300 K (exactly 25.85). Appears everywhere | [1.2](lessons/01-02-pn-junction-diode-models.md) |
| $I_S$ | diode saturation current, $\sim10^{-14}\ \text{A}$ | [1.2](lessons/01-02-pn-junction-diode-models.md) |
| $V_{bi}$ | built-in junction potential, 0.6–0.8 V — **not** the forward drop | [1.2](lessons/01-02-pn-junction-diode-models.md) |
| $r_d$ | diode small-signal resistance, $nV_T/I_D$ | [1.2](lessons/01-02-pn-junction-diode-models.md) |
| $V_r$, $f_r$ | ripple voltage (peak-to-peak) and ripple frequency | [1.3](lessons/01-03-rectifiers-power-supplies.md) |
| PIV | peak inverse voltage a diode must survive | [1.3](lessons/01-03-rectifiers-power-supplies.md) |
| $V_Z$, $r_z$ | Zener breakdown voltage and its slope resistance (5–20 Ω) | [1.4](lessons/01-04-clippers-clampers-zener.md) |
| $R_S$ | the series resistor in a shunt regulator | [1.4](lessons/01-04-clippers-clampers-zener.md) |
| $\beta$ | **BJT current gain** $I_C/I_B$, 50–300, varies 3:1 part to part | [2.1](lessons/02-01-bjt-how-it-works.md) |
| $\alpha$ | $I_C/I_E = \beta/(\beta+1)$, just under 1 | [2.1](lessons/02-01-bjt-how-it-works.md) |
| $V_A$ | Early voltage — the tilt of the active-region characteristics | [2.1](lessons/02-01-bjt-how-it-works.md) |
| $V_{TH}$, $R_{TH}$ | Thévenin equivalent of the bias divider | [2.2](lessons/02-02-bjt-dc-biasing.md) |
| Q-point | the DC operating point $(I_C, V_{CE})$ | [2.2](lessons/02-02-bjt-dc-biasing.md) |
| $g_m$ | transconductance. BJT $I_C/V_T$; MOSFET $2I_D/V_{ov}$ | [2.3](lessons/02-03-bjt-small-signal-amplifiers.md) |
| $r_\pi$ | BJT input resistance at the base, $\beta/g_m$ | [2.3](lessons/02-03-bjt-small-signal-amplifiers.md) |
| $r_o$ | small-signal output resistance; $V_A/I_C$ or $1/(\lambda I_D)$ | [2.3](lessons/02-03-bjt-small-signal-amplifiers.md) |
| $V_t$ | MOSFET threshold voltage. **Not** $V_T$ the thermal voltage | [2.4](lessons/02-04-mosfet-how-it-works.md) |
| $V_{ov}$ | overdrive $V_{GS}-V_t$ — the MOSFET's real control variable | [2.4](lessons/02-04-mosfet-how-it-works.md) |
| $k_n' = \mu_nC_{ox}$ | process transconductance, $\approx100$–$200\ \mu\text{A/V}^2$ | [2.4](lessons/02-04-mosfet-how-it-works.md) |
| $W/L$ | channel width-to-length ratio — a **design variable** with no BJT analogue | [2.4](lessons/02-04-mosfet-how-it-works.md) |
| $\lambda$ | channel-length modulation, $\approx0.01$–$0.1\ \text{V}^{-1}$ | [2.4](lessons/02-04-mosfet-how-it-works.md) |
| $A$, $A_{OL}$ | op-amp open-loop gain, $10^5$–$10^6$ | [3.1](lessons/03-01-ideal-op-amp-inverting-noninverting.md) |
| $A_v$, $A_{CL}$ | voltage gain / closed-loop gain | [3.1](lessons/03-01-ideal-op-amp-inverting-noninverting.md) |
| CMRR | common-mode rejection ratio, $20\log_{10}\lvert A_d/A_{cm}\rvert$ | [3.2](lessons/03-02-summing-difference-instrumentation.md) |
| $R_G$ | the single gain-setting resistor of an instrumentation amp | [3.2](lessons/03-02-summing-difference-instrumentation.md) |
| $V_{sat}$ | comparator output limit — about a volt inside the rails, and it drifts | [3.5](lessons/03-05-comparators-schmitt-triggers.md) |
| $V_{TH}$, $V_{TL}$ | Schmitt trigger upper and lower thresholds. **Note the clash with the Thévenin $V_{TH}$ of [2.2](lessons/02-02-bjt-dc-biasing.md)** | [3.5](lessons/03-05-comparators-schmitt-triggers.md) |
| $\beta_f$ | **feedback factor** — written $\beta_f$ here, because $\beta$ is the BJT current gain | [4.1](lessons/04-01-negative-feedback.md) |
| $T = A\beta_f$ | **loop gain**; $1+T$ is the desensitivity factor | [4.1](lessons/04-01-negative-feedback.md) |
| GBW, $f_t$ | gain–bandwidth product = unity-gain frequency | [4.2](lessons/04-02-frequency-response-gain-bandwidth.md) |
| SR | slew rate, V/µs — a **large-signal** limit GBW does not capture | [4.2](lessons/04-02-frequency-response-gain-bandwidth.md) |
| $V_M$ | CMOS inverter switching threshold | [4.3](lessons/04-03-cmos-inverter-gates.md) |
| $NM_L$, $NM_H$ | low and high noise margins | [4.3](lessons/04-03-cmos-inverter-gates.md) |
| $\alpha$ (CMOS) | activity factor in $P_{dyn}$. **Not** the BJT $\alpha$ of [2.1](lessons/02-01-bjt-how-it-works.md) | [4.3](lessons/04-03-cmos-inverter-gates.md) |
| LSB | one least-significant-bit step, $V_{FS}/2^N$ | [4.4](lessons/04-04-adc-dac.md) |
| ENOB | effective number of bits — always below the nameplate | [4.4](lessons/04-04-adc-dac.md) |

**Five collisions to keep straight.** $V_T$ (thermal, 25 mV) vs $V_t$ (MOSFET
threshold, ~1 V) — case is the only difference. $\beta$ (BJT current gain) vs
$\beta_f$ (feedback factor); this card and the lessons always subscript the
latter. $\alpha$ (BJT $I_C/I_E$) vs $\alpha$ (CMOS activity factor). $V_{TH}$
(Thévenin voltage in [2.2](lessons/02-02-bjt-dc-biasing.md)) vs $V_{TH}$ (Schmitt upper
threshold in [3.5](lessons/03-05-comparators-schmitt-triggers.md)). And **"saturation"
means opposite things** for the two transistors — see the pitfalls.

## Definitions

### Doping

Adding group-V donors (n-type, electrons majority) or group-III acceptors
(p-type, holes majority) to control conductivity. About one dopant atom per five
million silicon atoms raises conductivity roughly a millionfold.

*Introduced:* [1.1](lessons/01-01-semiconductors-carriers-doping.md)

### Mass-action law

In **thermal equilibrium only** — no bias, no light, no injection:

$$np = n_i^2$$

*In words: doping raises one carrier type and suppresses the other by the same factor.*

*Introduced:* [1.1](lessons/01-01-semiconductors-carriers-doping.md)

### Charge neutrality

Doped silicon is still electrically neutral — the fixed dopant ion cores balance
the mobile carriers: $p + N_D = n + N_A$. "n-type" names the majority carrier,
not a net charge.

*Introduced:* [1.1](lessons/01-01-semiconductors-carriers-doping.md)

### Diode equation

$$I_D = I_S\left(e^{V_D/(nV_T)} - 1\right)$$

with $n$ the ideality factor (take 1 unless told otherwise). Because current is
exponential in voltage, **voltage is nearly constant in current** — about
60 mV per decade — which is what makes the 0.7 V model work.

*Introduced:* [1.2](lessons/01-02-pn-junction-diode-models.md)

### The three diode models

Ideal switch (quick checks), constant-voltage-drop 0.7 V (DC bias analysis),
small-signal $r_d = nV_T/I_D$ (signals riding on a bias). Pick the simplest that
answers the question — the habit recurs for transistors and op-amps.

*Introduced:* [1.2](lessons/01-02-pn-junction-diode-models.md)

### Linearize about an operating point

The course's central method, appearing four times: the diode's $r_d$
([1.2](lessons/01-02-pn-junction-diode-models.md)), the Zener's $r_z$
([1.4](lessons/01-04-clippers-clampers-zener.md)), the BJT's hybrid-$\pi$
([2.3](lessons/02-03-bjt-small-signal-amplifiers.md)), and the MOSFET's $g_m$
([2.5](lessons/02-05-mosfet-biasing-common-source.md)). Solve DC and signal separately,
then superpose.

*Introduced:* [1.2](lessons/01-02-pn-junction-diode-models.md)

### Transistor action

A **thin, lightly doped base** lets ~99 percent of the carriers injected by the
emitter cross to the collector before recombining. The leftover few percent is
the base current. Two discrete diodes back-to-back do **not** amplify — the
geometry is the mechanism.

*Introduced:* [2.1](lessons/02-01-bjt-how-it-works.md)

### Q-point

The DC operating point $(I_C, V_{CE})$ — where the transistor is parked so a
signal has room to swing both ways. Set by bias, independent of the signal.

*Introduced:* [2.2](lessons/02-02-bjt-dc-biasing.md)

### Pinch-off

In a MOSFET, when $V_{DS} \ge V_{ov}$ the local gate-to-channel voltage at the
drain end falls to $V_t$ and the inversion layer vanishes there. Current
saturates: further $V_{DS}$ does not increase it. This is the **amplifying**
region.

*Introduced:* [2.4](lessons/02-04-mosfet-how-it-works.md)

### The two golden rules

For an op-amp **with negative feedback and not saturated**: (1) no current flows
into the inputs; (2) the inputs sit at the same voltage (virtual short). Rule 2
follows from $v_+-v_- = v_{out}/A$ with $A\to\infty$. **Both fail without
negative feedback** — which is exactly the comparator.

*Introduced:* [3.1](lessons/03-01-ideal-op-amp-inverting-noninverting.md)

### Virtual ground

The inverting input held at 0 V by feedback. It makes summed inputs
**independent** of each other, which is what the summing amplifier and the R-2R
DAC are built on. Note it does **not** mean high input impedance — the source
still drives $R_1$.

*Introduced:* [3.1](lessons/03-01-ideal-op-amp-inverting-noninverting.md)

### Common-mode rejection

The ability to amplify a difference while ignoring what both inputs share
(mains hum on a long cable). **Set by resistor matching, not by the op-amp** —
which is why instrumentation amps come as single ICs.

*Introduced:* [3.2](lessons/03-02-summing-difference-instrumentation.md)

### Hysteresis

Two switching thresholds instead of one, created by **positive** feedback: after
switching, the threshold moves away from the input, so noise cannot switch it
back. The simplest circuit in the course whose output depends on history.

*Introduced:* [3.5](lessons/03-05-comparators-schmitt-triggers.md)

### Loop gain and desensitivity

$T = A\beta_f$ is the gain around the loop; $1+T$ is the factor by which feedback
divides gain error, output impedance, and distortion, and multiplies input
impedance and bandwidth.

*Introduced:* [4.1](lessons/04-01-negative-feedback.md)

### Gain–bandwidth product

For a dominant-pole op-amp, closed-loop gain times bandwidth is a constant equal
to the unity-gain frequency: $\text{GBW} = A_0f_p = A_{CL}f_{3dB} = f_t$.

*Introduced:* [4.2](lessons/04-02-frequency-response-gain-bandwidth.md)

### Slew rate

The maximum output $dv/dt$, set by the compensation capacitor's charging current.
A **large-signal** limit, independent of GBW — an amplifier can be well inside its
GBW budget and still slew-limit.

*Introduced:* [4.2](lessons/04-02-frequency-response-gain-bandwidth.md)

### CMOS complementary operation

An NMOS and PMOS with gates and drains tied: for any static input exactly one is
on, so there is **no DC path** from supply to ground and static power is only
leakage.

*Introduced:* [4.3](lessons/04-03-cmos-inverter-gates.md)

### Quantization

An $N$-bit converter divides its range into $2^N$ steps of one LSB; the rounding
error is bounded by $\pm\frac12$ LSB with RMS value $\text{LSB}/\sqrt{12}$.
**Resolution is not accuracy.**

*Introduced:* [4.4](lessons/04-04-adc-dac.md)

## Formulas and rules

### Semiconductor basics

| Quantity | Relation |
|---|---|
| Mass action (equilibrium) | $np = n_i^2$ |
| Charge neutrality | $p + N_D = n + N_A$ |
| n-type, $N_D \gg n_i$ | $n \approx N_D$, $p \approx n_i^2/N_D$ |
| Conductivity | $\sigma = q(n\mu_n + p\mu_p)$ |
| Temperature | $n_i \propto T^{3/2}e^{-E_g/2kT}$; roughly doubles per 10 °C |
| Thermal voltage | $V_T = kT/q \approx 25\ \text{mV}$ at 300 K |

*From* [1.1](lessons/01-01-semiconductors-carriers-doping.md)

### Diodes

| Quantity | Value |
|---|---|
| Shockley equation | $I_D = I_S(e^{V_D/nV_T}-1)$ |
| Decade rule | $V_T\ln 10 \approx 58\ \text{mV}$ per decade of current |
| Small-signal resistance | $r_d = nV_T/I_D$ (25 Ω at 1 mA) |
| Forward drop tempco | $\approx-2\ \text{mV/}^\circ\text{C}$ |
| Schottky | $\approx0.3$ V, negligible reverse recovery |

*From* [1.2](lessons/01-02-pn-junction-diode-models.md)

### Rectifiers

| | Half-wave | Full-wave centre-tapped | Bridge |
|---|---|---|---|
| Diodes | 1 | 2 | 4 |
| Drops in path | 1 | 1 | **2** |
| Ripple frequency | $f_{line}$ | $2f_{line}$ | $2f_{line}$ |
| Ideal average | $V_p/\pi$ | $2V_p/\pi$ | $2V_p/\pi$ |
| PIV | $V_p$ ($2V_p$ with cap) | $2V_p$ | $V_p$ |

$$V_r \approx \frac{I_L}{f_rC} = \frac{V_{dc}}{f_rR_LC}, \qquad V_{dc} \approx V_{peak} - \frac{V_r}{2}$$

Valid while the ripple is small (diodes conduct in brief spikes near the peaks —
so peak diode current far exceeds $I_L$, and an uncharged cap is an inrush short).

*From* [1.3](lessons/01-03-rectifiers-power-supplies.md)

### Zener shunt regulator

$$R_S \le \frac{V_{in,\min} - V_Z}{I_{Z,\min} + I_{L,\max}}$$

| Check | Where it bites |
|---|---|
| $I_Z \ge I_{Z,\min}$ | **maximum** load (Zener gets the least) |
| $I_Z \le I_{Z,\max}$, power rating | **no** load (Zener takes everything) |
| Line regulation | $\Delta V_o/\Delta V_{in} \approx r_z/(R_S+r_z)$ |

Clipper level is $V_B + 0.7$, not $V_B$. A clamper **translates** the waveform —
peak-to-peak swing is unchanged.

*From* [1.4](lessons/01-04-clippers-clampers-zener.md)

### BJT regions and bias

| Region | B–E | B–C | Behaviour |
|---|---|---|---|
| Cutoff | reverse | reverse | off |
| **Active** | forward | reverse | $I_C = \beta I_B$ — amplifying |
| **Saturation** | forward | forward | fully on, $V_{CE}\approx0.2$ V |

$$I_E = I_B + I_C,\qquad \alpha = \frac{\beta}{\beta+1},\qquad I_C = I_Se^{V_{BE}/V_T}$$

**Voltage-divider bias:**

$$V_{TH} = V_{CC}\frac{R_2}{R_1+R_2},\quad R_{TH}=R_1\parallel R_2,\quad I_E = \frac{V_{TH}-V_{BE}}{R_E + R_{TH}/(\beta+1)}$$

Design rule: $R_{TH} \le 0.1\beta R_E$ makes the Q-point $\beta$-independent.
Load line: $V_{CE} = V_{CC} - I_C(R_C+R_E)$.

*From* [2.1](lessons/02-01-bjt-how-it-works.md), [2.2](lessons/02-02-bjt-dc-biasing.md)

### BJT small-signal

$$g_m = \frac{I_C}{V_T},\qquad r_\pi = \frac{\beta}{g_m},\qquad r_o = \frac{V_A}{I_C}$$

| Configuration | Gain | $R_{in}$ | $R_{out}$ |
|---|---|---|---|
| CE, emitter bypassed | $-g_m(R_C\parallel R_L)$ | $R_1\parallel R_2\parallel r_\pi$ | $\approx R_C$ |
| CE, $R_E$ unbypassed | $\dfrac{-g_m(R_C\parallel R_L)}{1+g_mR_E}\approx-\dfrac{R_C\parallel R_L}{R_E}$ | $\approx R_1\parallel R_2\parallel \beta R_E$ | $\approx R_C$ |
| Emitter follower | $\approx1$ | high | low |

Useful ceiling: $\lvert A_v\rvert = I_CR_C/V_T$ — the DC drop across $R_C$ divided
by 25 mV. Signal must satisfy $v_{be} \ll 25$ mV.

*From* [2.3](lessons/02-03-bjt-small-signal-amplifiers.md)

### MOSFET regions and small-signal

| Region | Condition | $I_D$ |
|---|---|---|
| Cutoff | $V_{GS} < V_t$ | $\approx0$ |
| **Triode** | $V_{DS} < V_{ov}$ | $k_n'\frac{W}{L}\left[V_{ov}V_{DS}-\frac12V_{DS}^2\right]$ |
| **Saturation** | $V_{DS} \ge V_{ov}$ | $\frac12k_n'\frac{W}{L}V_{ov}^2(1+\lambda V_{DS})$ |

$$g_m = k_n'\frac{W}{L}V_{ov} = \frac{2I_D}{V_{ov}} = \sqrt{2k_n'\tfrac{W}{L}I_D},\qquad r_o = \frac{1}{\lambda I_D}$$

Common source: $A_v = -g_m(R_D\parallel R_L)$; with $R_S$ unbypassed, divide by
$1+g_mR_S$. $R_{in} = R_1\parallel R_2$ (no $r_\pi$ term — the gate is open).

**BJT vs MOSFET**

| | BJT | MOSFET |
|---|---|---|
| Control | base **current** | gate **voltage** |
| Input current | $I_B = I_C/\beta$ | zero (DC) |
| Transfer law | exponential | square law |
| $g_m$ vs current | $\propto I_C$ | $\propto\sqrt{I_D}$ — much lower |
| Design knob | none | $W/L$ |
| Bias resistors | must be stiff | can be megohms |

*From* [2.4](lessons/02-04-mosfet-how-it-works.md), [2.5](lessons/02-05-mosfet-biasing-common-source.md)

### Op-amp topologies

| Circuit | Output |
|---|---|
| Inverting | $-\dfrac{R_f}{R_1}v_{in}$, $R_{in}=R_1$ |
| Non-inverting | $\left(1+\dfrac{R_f}{R_1}\right)v_{in}$, $R_{in}\to\infty$ |
| Buffer | $v_{in}$, gain 1 — impedance transformation |
| Inverting summer | $-R_f\left(\dfrac{v_1}{R_1}+\dfrac{v_2}{R_2}+\cdots\right)$ |
| Difference (matched) | $\dfrac{R_2}{R_1}(v_2-v_1)$ |
| Instrumentation | $\left(1+\dfrac{2R_1}{R_G}\right)\dfrac{R_3}{R_2}(v_2-v_1)$ |
| Integrator | $-\dfrac{1}{RC}\displaystyle\int v_{in}\,dt$; $H=-1/(sRC)$ |
| Differentiator | $-RC\dfrac{dv_{in}}{dt}$; $H=-sRC$ |
| Active LPF (inverting) | $-\dfrac{R_f}{R_1}\cdot\dfrac{1}{1+sR_fC_f}$, $f_c=\dfrac{1}{2\pi R_fC_f}$ |
| Active HPF (inverting) | $-\dfrac{R_f}{R_1}\cdot\dfrac{sR_1C_1}{1+sR_1C_1}$, $f_c=\dfrac{1}{2\pi R_1C_1}$ |

**Practical fixes:** integrator needs $R_f$ across $C$ (caps DC gain at $-R_f/R$,
corner at $1/2\pi R_fC$) or offset walks it into a rail; differentiator needs
$R_1$ in series with $C$ or it amplifies noise and rings.

**CMRR worst case:** $\text{CMRR} \ge \dfrac{1+K}{4t}$ for gain $K$ and tolerance
$t$ — 1 percent parts give 34 dB at unity gain, 48.8 dB at gain 10; 0.1 percent
adds 20 dB.

Keep resistors 1 kΩ–100 kΩ: smaller loads the output, larger worsens offset and
noise.

*From* [3.1](lessons/03-01-ideal-op-amp-inverting-noninverting.md), [3.2](lessons/03-02-summing-difference-instrumentation.md), [3.3](lessons/03-03-integrators-differentiators.md), [3.4](lessons/03-04-active-filters.md)

### Comparators and Schmitt triggers

| Topology | Thresholds |
|---|---|
| Non-inverting Schmitt ($R_1$ input, $R_2$ feedback, both to $+$) | $\pm\dfrac{R_1}{R_2}V_{sat}$, width $2\dfrac{R_1}{R_2}V_{sat}$ |
| Inverting Schmitt (divider $R_1$/$R_2$ to $+$) | $\pm\dfrac{R_1}{R_1+R_2}V_{sat}$ |
| Relaxation oscillator | $T = 2RC\ln\!\left(1+\dfrac{2R_1}{R_2}\right)$ |

*From* [3.5](lessons/03-05-comparators-schmitt-triggers.md)

### Feedback and bandwidth

$$A_f = \frac{A}{1+A\beta_f},\qquad T = A\beta_f,\qquad A_f \approx \frac{1}{\beta_f}\ (T\gg1)$$

| Effect | Result |
|---|---|
| Gain sensitivity | $\dfrac{dA_f/A_f}{dA/A} = \dfrac{1}{1+T}$ |
| Series mixing at input | $R_{in} \times (1+T)$ |
| Shunt mixing at input | $R_{in} \div (1+T)$ |
| Shunt (voltage) sampling at output | $R_{out} \div (1+T)$ |
| Series (current) sampling at output | $R_{out} \times (1+T)$ |
| Distortion | $\div(1+T)$ |
| Bandwidth | $\times(1+T)$ |

$$\text{GBW} = A_0f_p = A_{CL}\,f_{3dB} = f_t,\qquad f_{max} = \frac{SR}{2\pi V_p}$$

**Bandwidth uses the noise gain** $1+R_f/R_1$, which for an inverting amp is one
more than $\lvert A_{CL}\rvert$. Cascading beats one big stage: two gain-10 stages
give 64.4 kHz overall from a 1 MHz part, versus 10 kHz for one gain-100 stage.
Miller: a bridging $C$ looks like $C(1+A_v)$ at the input.

*From* [4.1](lessons/04-01-negative-feedback.md), [4.2](lessons/04-02-frequency-response-gain-bandwidth.md)

### CMOS

| Quantity | Value |
|---|---|
| Switching threshold (symmetric) | $V_M = V_{DD}/2$ |
| $V_{IL}$, $V_{IH}$ (symmetric, square law) | $\dfrac{3V_{DD}+2V_t}{8}$, $\dfrac{5V_{DD}-2V_t}{8}$ |
| Noise margins | $NM_L = V_{IL}-V_{OL}$, $NM_H = V_{OH}-V_{IH}$ |
| Dynamic power | $P_{dyn} = \alpha C_LV_{DD}^2f$ |
| Static power | leakage only — no DC path in either state |
| PMOS sizing | 2–3× wider, since $\mu_n/\mu_p \approx 2$–$3$ |
| NAND | NMOS series, PMOS parallel |
| NOR | NMOS parallel, PMOS series |

CMOS builds **inverting** gates naturally, which is why NAND and NOR are the
primitives.

*From* [4.3](lessons/04-03-cmos-inverter-gates.md)

### Converters

| Quantity | Value |
|---|---|
| One LSB | $V_{FS}/2^N$ |
| Quantization error | $\pm\frac12$ LSB, RMS $\text{LSB}/\sqrt{12}$ |
| Best-case SNR | $6.02N + 1.76$ dB (full-scale sine) — **about 6 dB per bit** |
| Weighted-R DAC span | $2^{N-1}{:}1$ — 2048:1 at 12 bits, why R-2R wins |
| Flash ADC | $2^N-1$ comparators, one clock |
| SAR ADC | one comparator + DAC, $N$ clocks (binary search) |
| Dual-slope | slow, accurate, rejects mains hum |

*From* [4.4](lessons/04-04-adc-dac.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| KCL, KVL, and node/mesh analysis | [circuits 1.3](../circuits/lessons/01-03-kirchhoffs-laws-kcl-kvl.md), [2.1](../circuits/lessons/02-01-nodal-analysis.md) |
| Voltage and current dividers | [circuits 1.4](../circuits/lessons/01-04-voltage-current-dividers.md) |
| Superposition (used for the difference amp) | [circuits 2.3](../circuits/lessons/02-03-superposition-source-transformation.md) |
| Thévenin equivalents (used for divider bias) | [circuits 2.4](../circuits/lessons/02-04-thevenin-norton-max-power.md) |
| Capacitor $i = C\,dv/dt$ and RC transients | [circuits 3.1](../circuits/lessons/03-01-capacitors-and-inductors.md), [3.2](../circuits/lessons/03-02-first-order-rc-rl-transients.md) |
| Phasors and impedance | [circuits 4.1](../circuits/lessons/04-01-sinusoids-and-phasors.md), [4.2](../circuits/lessons/04-02-impedance-phasor-analysis.md) |
| Band structure, Fermi level, density of states | [condensed-matter 3.6](../condensed-matter/lessons/03-06-bands-zones-dos.md), [3.7](../condensed-matter/lessons/03-07-metals-insulators-semiconductors.md) |
| Intrinsic carrier statistics and doping physics | [condensed-matter 4.1](../condensed-matter/lessons/04-01-intrinsic-carriers.md), [4.2](../condensed-matter/lessons/04-02-doping-extrinsic.md) |
| Mobility, drift, and the Hall effect | [condensed-matter 4.4](../condensed-matter/lessons/04-04-transport-mobility-hall.md) |
| Full pn-junction derivation | [condensed-matter 4.5](../condensed-matter/lessons/04-05-pn-junction.md) |
| Electronic properties from the materials side | [materials-science 5.1](../materials-science/lessons/05-01-electronic-properties-band-picture.md), [5.2](../materials-science/lessons/05-02-semiconductors-optics-thermal.md) |
| Transfer functions, poles, and the $s$-domain | [signals-systems 2.4](../signals-systems/lessons/02-04-laplace-transform-roc.md), [2.5](../signals-systems/lessons/02-05-transfer-functions-poles-zeros.md) |
| Why a sinusoid in gives a sinusoid out | [signals-systems 2.1](../signals-systems/lessons/02-01-eigenfunctions-frequency-response.md) |
| Filter specs, dB, and why brick walls are unrealizable | [signals-systems 4.4](../signals-systems/lessons/04-04-filter-design-basics.md) |
| Sampling, the Nyquist rate, and aliasing | [signals-systems 3.1](../signals-systems/lessons/03-01-sampling-nyquist-shannon.md), [3.2](../signals-systems/lessons/03-02-aliasing-and-reconstruction.md) |
| Bode plotting by asymptotes | [control-systems 3.3](../control-systems/lessons/03-03-frequency-response-bode-plots.md) |
| Stability margins and why loops oscillate | [control-systems 3.4](../control-systems/lessons/03-04-gain-and-phase-margins.md) |
| The general sensitivity argument for feedback | [control-systems 1.1](../control-systems/lessons/01-01-feedback-and-the-control-problem.md) |
| Electric potential and capacitance | [em-refresher 1.3](../em-refresher/lessons/01-03-electric-potential.md), [2.1](../em-refresher/lessons/02-01-capacitance.md) |

## Pitfalls

### Semiconductors and diodes

- n-type silicon is **not** negatively charged — the fixed donor ions balance the freed electrons. *([1.1](lessons/01-01-semiconductors-carriers-doping.md))*
- A hole is a quasiparticle, not a positron; nothing positive physically moves. *([1.1](lessons/01-01-semiconductors-carriers-doping.md))*
- $np = n_i^2$ holds **only in thermal equilibrium** — a forward-biased junction violates it badly. *([1.1](lessons/01-01-semiconductors-carriers-doping.md))*
- "0.7 V" is a convention pinned to milliamp currents, not a constant of silicon. *([1.2](lessons/01-02-pn-junction-diode-models.md))*
- $V_{bi}$ (the zero-bias barrier) is not the forward drop, despite similar numbers. *([1.2](lessons/01-02-pn-junction-diode-models.md))*
- You cannot apply superposition or Thévenin to a circuit *containing* a diode — replace it with a linear model first. *([1.2](lessons/01-02-pn-junction-diode-models.md))*
- $r_d$ is a tangent, valid only while the signal is well under 25 mV. *([1.2](lessons/01-02-pn-junction-diode-models.md))*

### Power supplies

- The **bridge costs two** diode drops, not one. *([1.3](lessons/01-03-rectifiers-power-supplies.md))*
- $V_{avg} = 2V_p/\pi$ describes the *unfiltered* humps; add the cap and the output sits near the peak. *([1.3](lessons/01-03-rectifiers-power-supplies.md))*
- Doubling $C$ halves ripple but doubles size, cost, and inrush — a regulator is often the better answer. *([1.3](lessons/01-03-rectifiers-power-supplies.md))*
- A clamper **translates**, it does not clip — peak-to-peak swing is preserved. *([1.4](lessons/01-04-clippers-clampers-zener.md))*
- Size $R_S$ from **both** corners: minimum $I_Z$ at full load, maximum $I_Z$ and power at **no** load. *([1.4](lessons/01-04-clippers-clampers-zener.md))*
- A Zener forward-biased is just a 0.7 V diode — backwards in the socket kills the rail. *([1.4](lessons/01-04-clippers-clampers-zener.md))*
- A clipper's level is $V_B + 0.7$, not $V_B$. *([1.4](lessons/01-04-clippers-clampers-zener.md))*

### Transistors

- **"Saturation" means opposite things.** BJT saturation = fully on, switch closed, gain gone. MOSFET saturation = the amplifying region (BJT analogue: *active*); the MOSFET's switch region is *triode*. *([2.1](lessons/02-01-bjt-how-it-works.md), [2.4](lessons/02-04-mosfet-how-it-works.md), [2.5](lessons/02-05-mosfet-biasing-common-source.md))*
- Two back-to-back diodes are not a transistor — the thin base is the mechanism. *([2.1](lessons/02-01-bjt-how-it-works.md))*
- $I_C = \beta I_B$ holds in the **active region only**. *([2.1](lessons/02-01-bjt-how-it-works.md))*
- Never trust $\beta$: 3:1 part spread, drifts with temperature and current. If your answer moves when $\beta$ does, the circuit is wrong. *([2.1](lessons/02-01-bjt-how-it-works.md), [2.2](lessons/02-02-bjt-dc-biasing.md))*
- $V_B \ne V_{TH}$ — the base draws current, which is why $R_{TH}$ appears in the bias formula. *([2.2](lessons/02-02-bjt-dc-biasing.md))*
- "$\beta$-independent" applies to the **bias**, not the small-signal behaviour ($r_\pi = \beta/g_m$). *([2.2](lessons/02-02-bjt-dc-biasing.md))*
- A higher-$\beta$ transistor does **not** give more gain — $A_v = -g_m(R_C\parallel R_L)$ has no $\beta$ in it. *([2.3](lessons/02-03-bjt-small-signal-amplifiers.md))*
- $A_v$ is measured from the base; with a source resistance, multiply by $R_{in}/(R_{in}+R_S)$. *([2.3](lessons/02-03-bjt-small-signal-amplifiers.md))*
- "Small-signal" means $v_{be} \ll 25$ mV — push harder and the exponential returns as distortion. *([2.3](lessons/02-03-bjt-small-signal-amplifiers.md))*
- The triode equation is invalid past $V_{DS} = V_{ov}$; the parabola turns over and lies. *([2.4](lessons/02-04-mosfet-how-it-works.md))*
- Zero gate current is a **DC** statement — at speed the gate is a capacitor to charge. *([2.4](lessons/02-04-mosfet-how-it-works.md))*
- Discard the bias-quadratic root that gives $V_{GS} < V_t$; it is an artifact of squaring. *([2.5](lessons/02-05-mosfet-biasing-common-source.md))*
- There is no "$V_{GS} \approx 0.7$ V" shortcut — it varies over volts, and $V_t$ can differ 2:1 between parts. *([2.5](lessons/02-05-mosfet-biasing-common-source.md))*

### Op-amps

- The virtual short is **made** by the op-amp, not a connection — never draw a wire there. *([3.1](lessons/03-01-ideal-op-amp-inverting-noninverting.md))*
- The inverting amp's input impedance is exactly $R_1$, not infinite. *([3.1](lessons/03-01-ideal-op-amp-inverting-noninverting.md))*
- The "+1" in $1+R_f/R_1$ means a non-inverting stage can never attenuate. *([3.1](lessons/03-01-ideal-op-amp-inverting-noninverting.md))*
- Feedback resistors draw real current — add it to the output budget. *([3.1](lessons/03-01-ideal-op-amp-inverting-noninverting.md))*
- A better op-amp does **not** fix hum: $A_{cm}$ contains no op-amp parameter. Buy better resistors. *([3.2](lessons/03-02-summing-difference-instrumentation.md))*
- The difference amp's two inputs have **different** input impedances, and source-impedance imbalance destroys CMRR. *([3.2](lessons/03-02-summing-difference-instrumentation.md))*
- A bare integrator's infinite DC gain walks it into a rail within seconds — $R_f$ is mandatory. *([3.3](lessons/03-03-integrators-differentiators.md))*
- Below $f_c$ the DC-limited integrator is a plain inverting amplifier, not an integrator. *([3.3](lessons/03-03-integrators-differentiators.md))*
- Don't confuse the two rescue resistors: $R_f$ *across* the integrator's cap, $R_1$ *in series* with the differentiator's. *([3.3](lessons/03-03-integrators-differentiators.md))*
- Differentiation multiplies noise where integration averages it away — restructure to avoid differentiators. *([3.3](lessons/03-03-integrators-differentiators.md))*
- In the active low-pass, $R_1$ sets gain only; $R_f$ sets **both** gain and corner. *([3.4](lessons/03-04-active-filters.md))*
- At $f_c$ you have already lost 30 percent of the signal — $-3$ dB is not "small". *([3.4](lessons/03-04-active-filters.md))*
- Rolloff doesn't continue forever; the op-amp's own falling gain takes over. *([3.4](lessons/03-04-active-filters.md))*
- The golden rules **fail** in a comparator or Schmitt trigger — there is no negative feedback to enforce them. *([3.5](lessons/03-05-comparators-schmitt-triggers.md))*
- Non-inverting Schmitt uses $R_1/R_2$; inverting uses $R_1/(R_1+R_2)$. Mixing them is the classic error. *([3.5](lessons/03-05-comparators-schmitt-triggers.md))*
- $V_{sat}$ is not the rail, and it drifts — so thresholds drift with it. *([3.5](lessons/03-05-comparators-schmitt-triggers.md))*

### Feedback, bandwidth, and digital

- $\beta_f$ is not the BJT $\beta$, and in a discrete feedback amplifier both appear in one equation. *([4.1](lessons/04-01-negative-feedback.md))*
- Topology names differ between textbooks ("series–shunt" vs "voltage-series") — read the diagram, not the label. *([4.1](lessons/04-01-negative-feedback.md))*
- $A_f \approx 1/\beta_f$ holds only where $T \gg 1$; at high frequency $T$ collapses and the ideal formulas quietly fail. *([4.1](lessons/04-01-negative-feedback.md), [4.2](lessons/04-02-frequency-response-gain-bandwidth.md))*
- More loop gain is better for every static spec and worse for stability. *([4.1](lessons/04-01-negative-feedback.md))*
- Inverting-amp bandwidth uses the **noise gain** $1+R_f/R_1$, not $\lvert A_{CL}\rvert$. *([4.2](lessons/04-02-frequency-response-gain-bandwidth.md))*
- GBW is small-signal; slew rate is large-signal. Run both checks. *([4.2](lessons/04-02-frequency-response-gain-bandwidth.md))*
- CMOS draws no **static** current, but every transition costs $C_LV_{DD}^2$. *([4.3](lessons/04-03-cmos-inverter-gates.md))*
- $V_M = V_{DD}/2$ only for a symmetric design. *([4.3](lessons/04-03-cmos-inverter-gates.md))*
- You cannot build AND by swapping the networks — an NMOS passing a high level loses a threshold. *([4.3](lessons/04-03-cmos-inverter-gates.md))*
- Resolution is not accuracy; ENOB is what matters. *([4.4](lessons/04-04-adc-dac.md))*
- $6.02N+1.76$ dB assumes a **full-scale** sine; half amplitude throws away a whole bit. *([4.4](lessons/04-04-adc-dac.md))*
- An anti-alias filter cannot go after the ADC — aliased content is added at the instant of sampling. *([4.4](lessons/04-04-adc-dac.md))*
