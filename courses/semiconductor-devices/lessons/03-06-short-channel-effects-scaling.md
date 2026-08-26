# Semiconductor Devices · Lesson 3.6: Short-channel effects and scaling

> ⏱ ~15 min · Module 3: Transistors · Builds on: [3.5 The MOSFET I–V](03-05-mosfet-iv.md), [3.4 Threshold voltage and the C–V curve](03-04-threshold-voltage-cv.md) · Unlocks: [4.4 A taste of device fabrication](04-04-device-fabrication.md)

## Why this matters

Every assumption in [3.5](03-05-mosfet-iv.md) fails in a modern transistor, and this lesson is about what replaced them.

It is also the lesson that explains Moore's law — not as an observation about transistor counts, but as an engineering *recipe*. Dennard's 1974 constant-field scaling rules said exactly how to shrink every dimension and voltage together so that a smaller transistor is faster, denser, and consumes proportionally less power. Follow the recipe and everything improves at once. The industry followed it for thirty years, and then it broke — and understanding precisely *which* term stopped scaling tells you why chips stopped getting faster around 2005 and why the answer was multi-core.

## The idea

A long-channel MOSFET is a one-dimensional device: the gate controls the surface, the source and drain are far away, and the two problems separate. Shrink $L$ and that stops being true. The source and drain depletion regions, each a few tens of nanometres wide ([2.1](02-01-junction-electrostatics.md)), start to occupy a substantial fraction of the channel — and the charge in them is controlled by the *source and drain*, not by the gate.

Everything called a "short-channel effect" is a consequence of that competition for control.

**Threshold roll-off.** Part of the depletion charge under the channel is already accounted for by the source and drain junctions, so the gate has to supply less of it — and $V_T$ falls as $L$ shrinks. Since $L$ varies across a wafer, so does $V_T$.

**DIBL** (drain-induced barrier lowering). Raise the drain voltage and its depletion region reaches further toward the source, lowering the potential barrier the source must inject over. $V_T$ falls with $V_{DS}$. The gate is no longer the only thing controlling the channel — the drain has a vote.

**[Subthreshold slope](../reference.md#subthreshold-swing) degradation.** The 60 mV/decade floor of [3.5](03-05-mosfet-iv.md) applies when the gate has perfect control. It does not, and the penalty factor is $n = 1+C_{dep}/C_{ox}$: the gate's capacitance competes with the body's. Worse control means a slope of 80–100 mV/decade, so the off-current is much higher.

Those three, plus velocity saturation and mobility degradation, are the whole list.

Then the scaling recipe. **Dennard's insight** was that if you scale dimensions *and* voltages by the same factor $\kappa$, and doping by $\kappa$ upward, then the electric fields stay constant everywhere — so the physics does not change, and no new effect appears. Delay falls by $\kappa$, density rises by $\kappa^2$, and **power per unit area stays constant**. That last one is the magic: you get more transistors, running faster, in the same thermal budget.

It ran out because voltage stopped scaling. And voltage stopped scaling because of the 60 mV/decade limit: lowering $V_T$ to keep the overdrive up raises the off-current exponentially, and there is no way around 60 mV per decade at room temperature. Once leakage became the dominant power term, the whole recipe inverted — and the industry switched from making transistors faster to making more of them run in parallel.

## The formal version

**Threshold roll-off (charge-sharing model).** The gate need only supply the depletion charge it *actually controls*. Modelling the source and drain junctions as taking a trapezoidal share:

$$\Delta V_T \approx -\frac{qN_aW_{\max}}{C_{ox}}\cdot\frac{x_j}{L}\left[\sqrt{1+\frac{2W_{\max}}{x_j}}-1\right],$$

with $x_j$ the source/drain junction depth. *In words: $V_T$ falls roughly as $1/L$, and the effect is worse for deep junctions and thick depletion regions.*

The design responses follow directly from the formula: **shallow junctions** (hence ultra-shallow implants and laser anneals, [4.4](04-04-device-fabrication.md)), **thin oxide** (larger $C_{ox}$), and **halo/pocket implants** — extra local doping near the source and drain that raises $V_T$ there and compensates the roll-off.

**DIBL.** Quantified as the threshold shift per volt of drain bias:

$$\mathrm{DIBL} = -\frac{\Delta V_T}{\Delta V_{DS}} \quad (\text{mV/V}), \qquad \text{typically } 50\text{–}150\ \mathrm{mV/V}.$$

*In words: every volt on the drain lowers the threshold by 50–150 mV.* Consequences: the off-current rises with supply voltage; the output conductance in saturation worsens (killing analog gain); and in the extreme, **punch-through** — the drain depletion region touches the source, the gate loses control entirely, and current flows regardless of $V_{GS}$.

**The characteristic length.** A useful single figure of merit for gate control:

$$\lambda_{\rm ch} = \sqrt{\frac{\varepsilon_s}{\varepsilon_{ox}}t_{ox}x_{dep}},$$

the distance over which the drain's influence decays into the channel. Short-channel effects are acceptable when

$$L \gtrsim 5\text{–}10\,\lambda_{\rm ch}.$$

*In words: the channel must be several times longer than the drain's reach.* This one relation drives essentially every structural innovation: thinner $t_{ox}$, higher-$\kappa$ dielectric (raises $\varepsilon_{ox}$, shrinking $\lambda_{\rm ch}$ *without* thinning the physical oxide), thinner depletion depth, and ultimately **multi-gate geometries** where the gate surrounds the channel so the drain has nowhere to reach from.

**Subthreshold swing.**

$$\boxed{\;S = \frac{dV_{GS}}{d(\log_{10}I_D)} = \frac{k_BT}{q}\ln(10)\left(1+\frac{C_{dep}}{C_{ox}}\right) = 60\left(1+\frac{C_{dep}}{C_{ox}}\right)\ \mathrm{mV/decade\ at\ 300\ K}.\;}$$

*In words: 60 mV per decade if the gate has perfect control, degraded by the ratio of body to oxide capacitance.* The 60 mV is not an engineering shortfall — it is $k_BT/q\cdot\ln10$, the Boltzmann tail, the same constant as the diode's 60 mV/decade in [2.2](02-02-ideal-diode-equation.md). **No conventional transistor can beat it at room temperature.**

Its consequence is the central constraint of modern CMOS. The off-current is

$$I_{\rm off} = I_0\,10^{-V_T/S},$$

so with $S = 80$ mV/decade, lowering $V_T$ by 80 mV multiplies the leakage by ten.

**Velocity saturation.** From [3.5](03-05-mosfet-iv.md), when $V_{ov}/L \gg v_{\rm sat}/\mu$:

$$I_{D,\rm sat} \approx WC_{ox}(V_{GS}-V_T)v_{\rm sat}, \qquad g_m = WC_{ox}v_{\rm sat},$$

**linear in overdrive and independent of $L$**.

**Dennard's constant-field scaling.** Scale all dimensions ($L$, $W$, $t_{ox}$, $x_j$) and all voltages by $1/\kappa$, and doping by $\kappa$. Then:

| Quantity | Scaling | Effect for $\kappa = 2$ |
|---|---|---|
| Dimensions $L,W,t_{ox}$ | $1/\kappa$ | half |
| Voltage $V_{DD}, V_T$ | $1/\kappa$ | half |
| Doping $N_a$ | $\kappa$ | double |
| Field $\mathcal{E}$ | $1$ | **unchanged** |
| $C_{ox}$ per area | $\kappa$ | double |
| Gate capacitance $C = C_{ox}WL$ | $1/\kappa$ | half |
| Current $I_D$ | $1/\kappa$ | half |
| **Delay** $CV/I$ | $1/\kappa$ | **half** |
| Power per device $IV$ | $1/\kappa^2$ | quarter |
| Density | $\kappa^2$ | **quadruple** |
| **Power density** | $1$ | **unchanged** |

*In words: everything gets better at once, and the chip's power per square centimetre does not move.* This is the engine behind Moore's law, and it is why the industry could shrink relentlessly for three decades without a thermal crisis.

**Why it broke.** Three things, in order of arrival:

1. **Voltage stopped scaling (~2003).** $V_T$ cannot follow $V_{DD}$ down, because $I_{\rm off} = I_010^{-V_T/S}$ and $S\ge60$ mV/decade. Dropping $V_T$ by 300 mV raises static leakage by a factor of $10^{5}$ at $S=60$. So $V_{DD}$ stalled around 1 V, fields rose with each shrink, and **power density began climbing as $\kappa^2$** instead of staying flat.

2. **Gate oxide hit atomic limits (~2005).** At $t_{ox} = 1.2$ nm — about five atomic layers — direct tunnelling through the oxide made gate leakage comparable to channel leakage. The fix was **high-$\kappa$ dielectrics** (hafnium oxide, $\varepsilon_r\approx25$): a physically thicker layer with the same *electrical* thickness

$$\mathrm{EOT} = t_{\rm high-\kappa}\frac{\varepsilon_{ox}}{\varepsilon_{\rm high-\kappa}},$$

so $C_{ox}$ stayed high while tunnelling fell by orders of magnitude. Introduced by Intel at 45 nm in 2007, paired with metal gates to avoid poly depletion.

3. **Electrostatics ran out (~2011).** Even with thin EOT, planar devices could not keep $L>5\lambda_{\rm ch}$. The answer was geometry: the **FinFET**, with the gate wrapping three sides of a thin fin, and later the **gate-all-around nanosheet**. Wrapping the channel removes the body's competing capacitance, driving $C_{dep}\to0$ and $S\to60$ mV/decade, and cutting $\lambda_{\rm ch}$ dramatically. FinFETs arrived at 22 nm (2011), nanosheets at 3 nm.

**What replaced Dennard scaling.** Since power density could no longer stay flat, the industry pivoted:

- **Multi-core.** Rather than one faster core, put several slower ones on the die. Clock frequencies have been flat near 3–5 GHz since 2005.
- **Dark silicon.** A large fraction of a die cannot be powered simultaneously within the thermal budget, so chips are designed around power gating and specialized accelerators used intermittently.
- **Specialization.** A fixed-function accelerator does more work per joule than a general-purpose core, which is why modern chips are covered in them (GPUs, neural engines, video codecs).

The 60 mV/decade limit is therefore not a footnote — **it is the reason your laptop has eight cores instead of one at 40 GHz.**

**Beyond 60 mV/decade.** Research devices that try to break the Boltzmann limit by using a different injection mechanism:

- **Tunnel FETs**, where carriers tunnel through a band-edge filter rather than surmounting a barrier, cutting off the thermal tail. Sub-60 mV/decade demonstrated, but on-currents remain too low.
- **Negative-capacitance FETs**, using a ferroelectric gate stack to amplify the surface potential internally, giving effective $n<1$.

Neither has displaced the MOSFET, and the 60 mV/decade wall remains the defining constraint of digital electronics.

## Picture

![A two-panel figure. Left: subthreshold characteristics on a log current axis against gate voltage, showing three curves — an ideal 60 mV per decade slope, a degraded 90 mV per decade slope, and a curve shifted left by DIBL at high drain voltage — with the resulting off-current at zero gate voltage marked on each and spanning orders of magnitude. Right: a scaling chart plotting supply voltage, gate length and power density against calendar year, showing voltage and length falling together until about 2003, then voltage flattening near 1 volt while length continues to fall, with power density consequently turning upward.](assets/03-06-fig1.svg)

Left: why the subthreshold slope is the master parameter. A degraded slope and a DIBL shift both raise the off-current at $V_{GS}=0$ — and since a chip has billions of transistors, that current multiplied by $10^9$ is the idle power of the whole device. Note the axis is logarithmic: a 30 mV/decade degradation in slope costs an order of magnitude in leakage.

Right: the historical record, and the break. Voltage and gate length fell in lockstep through the 1990s exactly as Dennard prescribed, and power density stayed flat. Around 2003 voltage flattened — it could not go lower without leakage exploding — while length kept shrinking, so the fields rose and the power density turned upward. That inflection is where single-thread performance stopped improving.

## Worked examples

**Example 1 (the leakage budget of a real chip).** A processor has $10^9$ transistors, $V_T = 0.35$ V, $S = 85$ mV/decade, and an extrapolated $I_0$ (the current at $V_{GS}=V_T$) of $1\ \mu$A per transistor. Estimate the static leakage power at $V_{DD} = 1.0$ V, then find the effect of lowering $V_T$ by 100 mV.

*Off-current per transistor.*

$$I_{\rm off} = I_0\,10^{-V_T/S} = (10^{-6})\,10^{-350/85} = (10^{-6})\,10^{-4.118} = (10^{-6})(7.62\times10^{-5}) = 7.62\times10^{-11}\ \mathrm{A}.$$

*Total.* Assume roughly half the transistors are off at any moment:

$$I_{\rm leak} = (5\times10^{8})(7.62\times10^{-11}) = 3.81\times10^{-2}\ \mathrm{A} = 38\ \mathrm{mA},$$

$$P_{\rm leak} = (1.0)(0.038) = 38\ \mathrm{mW}.$$

Modest — a few percent of a chip's power budget.

*Now lower $V_T$ to 0.25 V* (to gain speed, since drive current goes as the overdrive):

$$I_{\rm off} = (10^{-6})\,10^{-250/85} = (10^{-6})\,10^{-2.941} = (10^{-6})(1.15\times10^{-3}) = 1.15\times10^{-9}\ \mathrm{A},$$

$$P_{\rm leak} = (1.0)(5\times10^{8})(1.15\times10^{-9}) = 0.573\ \mathrm{W}.$$

**A 100 mV threshold reduction multiplied the leakage by 15** — exactly $10^{100/85} = 15.0$ ✓.

*And if $S$ were the ideal 60 mV/decade instead of 85?* At $V_T = 0.35$:

$$I_{\rm off} = (10^{-6})10^{-350/60} = (10^{-6})(1.47\times10^{-6}) = 1.47\times10^{-12}\ \mathrm{A}, \qquad P_{\rm leak} = 0.74\ \mathrm{mW}.$$

**Fifty times less leakage from the slope alone.** That factor is precisely what the FinFET bought — driving $C_{dep}\to0$ takes $S$ from 85 back toward 65 — and it is why the transition to 3-D gates was worth the enormous process cost. Equivalently, at fixed leakage it allowed $V_T$ to drop by $(85-60)\times4.1 \approx 100$ mV, buying speed.

**Example 2 (scaling a generation, with and without voltage scaling).** A process shrinks from $L = 90$ nm, $V_{DD} = 1.2$ V to $L = 45$ nm ($\kappa = 2$). Compare ideal Dennard scaling with what actually happened (voltage scaling to only 1.1 V).

*Ideal Dennard ($V_{DD}\to0.6$ V):*

| Quantity | Old | New | Ratio |
|---|---|---|---|
| $L$ | 90 nm | 45 nm | $1/2$ |
| $V_{DD}$ | 1.2 V | 0.6 V | $1/2$ |
| $C$ per device | $C$ | $C/2$ | $1/2$ |
| $I$ | $I$ | $I/2$ | $1/2$ |
| Delay $CV/I$ | $\tau$ | $\tau/2$ | $1/2$ |
| Energy per switch $CV^2$ | $E$ | $E/8$ | $1/8$ |
| Devices per area | $n$ | $4n$ | $4$ |
| Dynamic power density $\propto nCV^2f$ | $P$ | $4\cdot\tfrac18\cdot2\,P = P$ | **1** |

Power density unchanged ✓ — the Dennard promise.

*What actually happened ($V_{DD}\to1.1$ V, a factor of only 1.09):*

$$\text{Energy per switch} \propto CV^2: \quad \frac{1}{2}\times\left(\frac{1.1}{1.2}\right)^2 = \frac{1}{2}(0.840) = 0.420,$$

$$\text{Power density} \propto 4\times0.420\times(\text{frequency ratio}).$$

With frequency up by 2 (delay halved):

$$\text{Power density ratio} = 4\times0.420\times2 = 3.36.$$

**Power density more than tripled in one generation** instead of staying flat. Repeat that twice and the chip is unmanageable — which is exactly what happened between 2003 and 2005, when projected power densities passed 100 W/cm² and headed for figures compared, in a famous Intel slide, to a rocket nozzle.

*The industry's actual response*, visible in the numbers above: since power density $\propto$ density × energy × frequency, and density was going to rise regardless, the only remaining lever was **frequency**. Holding $f$ constant instead of doubling it gives a power density ratio of 1.68 — still bad but survivable. That is why clock speeds froze around 3 GHz in 2004 and have barely moved since, and why the extra transistors went into cores, cache, and accelerators rather than into a faster single pipeline.

## Watch out

- **You might think 60 mV/decade is an engineering limitation.** It is $\ln(10)k_BT/q$ — thermodynamics. No material, geometry, or process improves it for a device that works by injecting carriers over a barrier. Only a different injection mechanism (tunnelling, negative capacitance) can, and neither is production-ready.
- **You might think scaling stopped.** Dimensions kept shrinking; *voltage* scaling stopped, which broke the constant-field condition. Fields have been rising for two decades, which is why reliability (hot carriers, oxide breakdown, electromigration) became a first-order design constraint.
- **You might treat $V_T$ as a constant in a short-channel device.** It depends on $L$ (roll-off), on $V_{DS}$ (DIBL), and on $V_{SB}$ (body effect). Statistical variation in $V_T$ across a die — from random dopant fluctuation, since a 20 nm device contains only tens of dopant atoms — is itself a major design problem.
- **You might think high-$\kappa$ made the oxide thicker electrically.** It made it thicker *physically* at the same *electrical* thickness (EOT), which is the point: capacitance preserved, tunnelling suppressed.
- **You might expect a FinFET to be faster per transistor.** Its main gains are electrostatic — better $S$, less DIBL, lower leakage — which are then *spent* on lowering $V_T$ and $V_{DD}$. The speed comes indirectly.

## One-liner

> Short channels lose control to the drain, and the Boltzmann tail forbids switching off in less than 60 mV per decade — so voltage stopped scaling, Dennard's recipe broke, and the industry traded clock speed for cores.

## Problems

**P1 (🟢)** A MOSFET has $C_{ox} = 1.4\times10^{-6}\ \mathrm{F/cm^2}$ and $C_{dep} = 2.8\times10^{-7}\ \mathrm{F/cm^2}$. (a) Find the body factor $n$. (b) Find the subthreshold swing at 300 K. (c) Find it at 85 °C. (d) If $V_T = 0.4$ V and the current at threshold is 1 µA, find $I_{\rm off}$ at both temperatures.

**P2 (🟡)** A process has DIBL of 100 mV/V and $S = 90$ mV/decade, with $V_T = 0.4$ V at $V_{DS} = 0.05$ V. (a) Find $V_T$ at $V_{DS} = 1.0$ V. (b) Find the ratio of off-currents at the two drain voltages. (c) The supply is reduced from 1.0 V to 0.8 V. Find the new off-current ratio relative to the low-$V_{DS}$ case. (d) Comment on how DIBL interacts with supply-voltage choice.

**P3 (🔴)** A generation shrinks $L$ from 32 nm to 22 nm ($\kappa = 1.45$) with $V_{DD}$ going from 1.0 V to 0.95 V, and frequency rising 20%. (a) Compute the ideal Dennard voltage and the actual one. (b) Compute the dynamic power density ratio. (c) The process also moves from planar to FinFET, improving $S$ from 95 to 68 mV/decade at fixed off-current. How much can $V_T$ be lowered, and what does that do to drive current if $I_D\propto(V_{DD}-V_T)$ under velocity saturation? (d) Combine the effects and comment on whether the generation is a net win.

<details>
<summary>Solutions</summary>

**P1** (a) $$n = 1+\frac{C_{dep}}{C_{ox}} = 1+\frac{2.8\times10^{-7}}{1.4\times10^{-6}} = 1+0.2 = 1.2.$$

(b) $$S = n\frac{k_BT}{q}\ln10 = 1.2(0.0259)(2.3026) = 1.2(0.0596) = 0.0716\ \mathrm{V} = 71.6\ \mathrm{mV/decade}.$$

(c) At 85 °C = 358 K, $k_BT/q = 0.0259\times(358/300) = 0.0309$ V:

$$S = 1.2(0.0309)(2.3026) = 0.0854\ \mathrm{V} = 85.4\ \mathrm{mV/decade}.$$

(d) $$I_{\rm off}(300\ \mathrm{K}) = (10^{-6})10^{-400/71.6} = (10^{-6})10^{-5.587} = (10^{-6})(2.59\times10^{-6}) = 2.59\times10^{-12}\ \mathrm{A},$$

$$I_{\rm off}(358\ \mathrm{K}) = (10^{-6})10^{-400/85.4} = (10^{-6})10^{-4.684} = (10^{-6})(2.07\times10^{-5}) = 2.07\times10^{-11}\ \mathrm{A}.$$

**Eight times more leakage at 85 °C**, from the slope degradation alone. (In reality it is worse still, because $V_T$ also falls with temperature at about $-1$ mV/°C, adding another factor of $10^{58/85} = 4.8$ — so nearly 40× in total. This is why chip leakage power is specified at maximum junction temperature, and why thermal runaway through leakage is a real failure mode.)

**P2** (a) $$\Delta V_{DS} = 1.0-0.05 = 0.95\ \mathrm{V}, \qquad \Delta V_T = -(100\ \mathrm{mV/V})(0.95) = -95\ \mathrm{mV}.$$

$$V_T(1.0\ \mathrm{V}) = 0.400-0.095 = 0.305\ \mathrm{V}.$$

(b) $$\frac{I_{\rm off}(1.0)}{I_{\rm off}(0.05)} = 10^{\Delta V_T/S} = 10^{95/90} = 10^{1.056} = 11.4.$$

**An order of magnitude more leakage at full supply**, purely from DIBL.

(c) At $V_{DS} = 0.8$ V: $\Delta V_T = -(100)(0.75) = -75$ mV, so $V_T = 0.325$ V, and

$$\frac{I_{\rm off}(0.8)}{I_{\rm off}(0.05)} = 10^{75/90} = 10^{0.833} = 6.8.$$

(d) Reducing the supply from 1.0 to 0.8 V cut the DIBL-induced leakage penalty from 11.4× to 6.8× — a **40% reduction in static leakage** on top of the direct $P = IV$ saving and the $CV^2$ dynamic saving.

The interaction is worth naming: **DIBL makes leakage superlinear in supply voltage.** Naively, lowering $V_{DD}$ by 20% cuts static power by 20% (through $P = I_{\rm off}V_{DD}$). But because DIBL also raises $V_T$ as $V_{DS}$ falls, the off-*current* falls too, and the combined effect here is $0.8\times(6.8/11.4) = 0.48$ — a **52% reduction**, more than twice the naive estimate.

This is a large part of why dynamic voltage and frequency scaling (DVFS) is so effective in practice, and why idle power management aggressively drops the supply rail rather than merely gating clocks. It also cuts the other way: pushing the supply up for a turbo mode costs leakage disproportionately, which is why turbo is thermally limited and time-limited.

**P3** (a) Ideal Dennard with $\kappa = 1.45$: $V_{DD}\to1.0/1.45 = 0.69$ V. Actual: 0.95 V — a reduction of only 5% where 31% was needed.

(b) Dynamic power density $\propto$ (device density) × (energy per switch) × (frequency):

- Density $\propto\kappa^2 = 1.45^2 = 2.10$.
- Energy per switch $\propto CV^2$, with $C\propto1/\kappa$: $\dfrac{1}{1.45}\times\left(\dfrac{0.95}{1.0}\right)^2 = 0.690\times0.9025 = 0.622$.
- Frequency $\times1.20$.

$$\text{Power density ratio} = 2.10\times0.622\times1.20 = 1.57.$$

**A 57% increase in power density** in one generation, against Dennard's promise of zero.

(c) At fixed off-current, $I_{\rm off} = I_010^{-V_T/S}$ requires $V_T/S$ to stay constant:

$$\frac{V_T^{\rm new}}{68} = \frac{V_T^{\rm old}}{95} \quad\Longrightarrow\quad V_T^{\rm new} = V_T^{\rm old}\frac{68}{95} = 0.716\,V_T^{\rm old}.$$

Taking $V_T^{\rm old} = 0.35$ V: $V_T^{\rm new} = 0.251$ V, a reduction of **99 mV**.

Under velocity saturation, $I_D\propto(V_{DD}-V_T)$:

$$\frac{I^{\rm new}}{I^{\rm old}} = \frac{0.95-0.251}{0.95-0.35} = \frac{0.699}{0.600} = 1.165.$$

**16.5% more drive current** at the same leakage — bought entirely by the improved subthreshold slope.

(d) *Combining.* The generation delivers:

- **2.1× the transistor density** ✓
- **~17% more drive current per device** from the FinFET's slope improvement, which translates into roughly that much more speed at fixed leakage ✓
- **1.57× the power density** ✗

*Is it a net win?* Yes — but a qualitatively different kind of win from a 1990s generation. The density doubling is real and is the main product; the FinFET recovers some of the voltage-scaling loss by letting $V_T$ fall without a leakage penalty. But power density still rises 57%, so the extra transistors cannot all be used at once.

The design consequence is that this generation's gains must be spent on **area-efficient, duty-cycled** functions — more cache (dense and low-activity), more specialized accelerators (used intermittently), more cores at modest clocks — rather than on a faster single pipeline. That is the "dark silicon" regime, and it is a direct arithmetic consequence of the three numbers computed above.

It is also worth noting what the FinFET *did not* do: it did not restore voltage scaling. It improved $S$ from 95 toward the 60 mV/decade floor, which is a one-time gain of at most 95/60 = 1.6× in the $V_T$ budget. Once $S$ reaches ~65 mV/decade there is nothing left to harvest, which is why gate-all-around nanosheets deliver electrostatic improvements but progressively smaller ones, and why the industry's attention has shifted to packaging, 3-D stacking, and architecture.

</details>

## Flashback

**From Lesson 3.5 (The MOSFET I–V):** A short-channel device has $L = 40$ nm, $V_{ov} = 0.6$ V, $\mu_n = 250\ \mathrm{cm^2/V\cdot s}$, $v_{\rm sat} = 10^7$ cm/s. (a) Find the average channel field and compare with the critical field. (b) State which current model applies. (c) Find $g_m$ per unit width and comment on its dependence on $V_{ov}$.

<details>
<summary>Solution</summary>

(a) $$\mathcal{E}_{\rm avg} = \frac{V_{ov}}{L} = \frac{0.6}{40\times10^{-7}\ \mathrm{cm}} = 1.5\times10^{5}\ \mathrm{V/cm}.$$

The critical field is $\mathcal{E}_c = v_{\rm sat}/\mu_n = 10^{7}/250 = 4\times10^{4}$ V/cm. So

$$\frac{\mathcal{E}_{\rm avg}}{\mathcal{E}_c} = \frac{1.5\times10^{5}}{4\times10^{4}} = 3.75.$$

Nearly four times the critical field.

(b) **Velocity saturation.** The square law would predict a drift velocity of $\mu_n\mathcal{E} = (250)(1.5\times10^5) = 3.75\times10^7$ cm/s — nearly four times the physical maximum. Use $I_{D,\rm sat} = WC_{ox}V_{ov}v_{\rm sat}$.

(c) $$\frac{g_m}{W} = C_{ox}v_{\rm sat},$$

**independent of $V_{ov}$ entirely.**

The comment: in a long-channel device $g_m\propto V_{ov}$, so an analog designer raises the overdrive to buy transconductance, trading away voltage headroom for gain. In this device that trade does not exist — raising $V_{ov}$ costs headroom and delivers nothing. The only remaining levers for $g_m$ are device *width* and oxide capacitance.

That is why modern analog CMOS design biases at low overdrive (often 100–150 mV, in moderate inversion) where the transconductance efficiency $g_m/I_D$ is highest, and why the design methodology shifted from closed-form square-law sizing to $g_m/I_D$ lookup tables generated from simulation.

</details>

## Connections

- **Backward:** every effect here is a failure of an assumption listed at the end of [3.5](03-05-mosfet-iv.md); the 60 mV/decade floor is [2.2](02-02-ideal-diode-equation.md)'s Boltzmann slope; the drain's reach into the channel is [2.1](02-01-junction-electrostatics.md)'s depletion width.
- **Forward:** [4.4](04-04-device-fabrication.md) shows how shallow junctions, high-$\kappa$ stacks and fins are actually manufactured — this lesson's list of fixes is that lesson's list of processes.
- **Sideways:** the scaling table is a dimensional-analysis argument of exactly the kind used for similitude in [`fluid-dynamics`](../../fluid-dynamics/syllabus.md) — hold the dimensionless group (here the electric field) constant and the physics is unchanged under a change of scale. Dennard scaling worked precisely as long as the field was the only group that mattered, and broke when a second one (the ratio $V_T/(k_BT/q)$, which cannot scale) began to bind.
