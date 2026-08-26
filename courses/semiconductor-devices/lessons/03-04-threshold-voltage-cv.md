# Semiconductor Devices · Lesson 3.4: Threshold voltage and the C–V curve

> ⏱ ~15 min · Module 3: Transistors · Builds on: [3.3 The MOS capacitor](03-03-mos-capacitor.md), [2.3 Junction and diffusion capacitance](02-03-junction-diffusion-capacitance.md) · Unlocks: [3.5 The MOSFET I–V](03-05-mosfet-iv.md), [3.6 Short-channel effects and scaling](03-06-short-channel-effects-scaling.md)

## Why this matters

$V_T$ is the most important number in a digital process. It sets the supply voltage you can use, the speed you get, the leakage you burn, and — because leakage is exponential in $V_T$ — the battery life of every phone. A modern process controls it to within tens of millivolts across billions of transistors, and the ability to *set it deliberately* is what makes CMOS possible at all.

This lesson assembles $V_T$ from the pieces [3.3](03-03-mos-capacitor.md) built, shows how to shift it on purpose with an implant, and adds the one effect that makes $V_T$ not a constant: **body bias**, which matters because in a real circuit the source is rarely at the substrate potential.

## The idea

Threshold is a charge-balance statement. The gate must supply enough charge to do three separate jobs, and $V_T$ is the sum of what each one costs.

**Job 1: undo the built-in bending.** Before you apply anything, the work-function difference and the fixed oxide charge have already bent the bands. Getting to flat band costs $V_{FB}$ — which is usually *negative*, so it is a head start rather than a cost.

**Job 2: bend the bands to $2\phi_F$.** That potential drop appears across the silicon, so it adds directly.

**Job 3: support the depletion charge across the oxide.** The exposed acceptor ions must be mirrored by charge on the gate, and pushing that charge across the oxide costs $|Q_{dep}|/C_{ox}$ volts.

Add the three and you have $V_T$. That is the whole derivation, and its structure tells you every lever: a thinner oxide raises $C_{ox}$ and shrinks job 3; heavier doping raises both $\phi_F$ and $Q_{dep}$, raising $V_T$; and a different gate material changes $V_{FB}$.

Then the practical refinement. The formula assumes the source sits at the substrate potential. In a real circuit — a stack of transistors in a NAND gate, say — the source floats above the body. That reverse-biases the source–body junction, which *widens* the depletion region under the channel, which increases $Q_{dep}$, which **raises $V_T$**. That is the [body effect](../reference.md#body-effect), and it is why stacked transistors in a logic gate are slower than the bottom one.

## The formal version

**Threshold voltage.**

$$\boxed{\;V_T = V_{FB}+2\phi_F+\frac{|Q_{dep}^{\max}|}{C_{ox}} = V_{FB}+2\phi_F+\frac{\sqrt{4q\varepsilon_sN_a\phi_F}}{C_{ox}}.\;}$$

*In words: flat-band correction, plus the band bending, plus the voltage needed to hold the depletion charge across the oxide.*

Recall from [3.3](03-03-mos-capacitor.md):

$$\phi_F = V_T^{\rm therm}\ln\frac{N_a}{n_i}, \qquad V_{FB} = \phi_{MS}-\frac{Q_f}{C_{ox}}, \qquad C_{ox} = \frac{\varepsilon_{ox}}{t_{ox}}.$$

(Note the unfortunate notational clash: $V_T$ is the threshold voltage in this lesson, while $V_T^{\rm therm} = k_BT/q = 0.0259$ V is the thermal voltage. Context disambiguates; the reference card lists both.)

**How each parameter moves $V_T$:**

| Change | Effect on $V_T$ | Mechanism |
|---|---|---|
| Thinner oxide | **lower** | larger $C_{ox}$ shrinks the $Q_{dep}/C_{ox}$ term |
| Heavier $N_a$ | **higher** | raises both $\phi_F$ (log) and $Q_{dep}$ ($\sqrt{}$) |
| More positive $Q_f$ | **lower** | positive oxide charge attracts electrons |
| $n^+$ poly gate (vs $p^+$) | **lower** by ~1.1 V | $\phi_{MS}$ differs by roughly $E_g/q$ |
| Reverse body bias | **higher** | widens depletion, raises $Q_{dep}$ — the body effect |

**Threshold-adjust implant.** A shallow implant of dose $D_I$ (ions/cm²) placed close to the surface acts, to a good approximation, as a sheet of charge right at the interface:

$$\Delta V_T = \frac{qD_I}{C_{ox}}\quad\text{(acceptors: } V_T \text{ rises)}, \qquad \Delta V_T = -\frac{qD_I}{C_{ox}}\quad\text{(donors: } V_T \text{ falls)}.$$

*In words: a sheet of implanted charge shifts the threshold by the voltage needed to mirror it across the oxide.*

This is how every CMOS process sets its thresholds, and it is why both $n$- and $p$-channel devices can have well-controlled, roughly symmetric $V_T$ on the same wafer despite sharing one gate material. A **negative** $V_T$ $n$-channel device (a depletion-mode transistor, conducting at zero gate voltage) is made by implanting enough donors to push $V_T$ below zero — useful as a load device.

**Body effect.** With the source biased $V_{SB}$ above the body, the surface must bend by $2\phi_F+V_{SB}$ before inversion, so the depletion charge grows:

$$|Q_{dep}| = \sqrt{2q\varepsilon_sN_a(2\phi_F+V_{SB})},$$

$$\boxed{\;V_T(V_{SB}) = V_{T0}+\gamma\left(\sqrt{2\phi_F+V_{SB}}-\sqrt{2\phi_F}\right), \qquad \gamma = \frac{\sqrt{2q\varepsilon_sN_a}}{C_{ox}}.\;}$$

$\gamma$ is the **body-effect coefficient** (units $\sqrt{\mathrm{V}}$), typically 0.3–0.8 $\sqrt{\mathrm{V}}$ in older processes and much smaller in modern thin-oxide ones.

*In words: reverse-biasing the body raises the threshold as the square root of the bias.* Two consequences worth carrying:

- In a stacked logic gate (series transistors in a NAND), the upper transistors have $V_{SB}>0$ and therefore higher $V_T$ and less overdrive. This is why an $N$-input NAND is slower than a NOR of the same width, and why stack heights beyond 3–4 are avoided.
- Body bias can be used *deliberately*: forward-body-bias to lower $V_T$ and speed up a chip, reverse-body-bias to raise $V_T$ and cut leakage. Adaptive body biasing was a real technique until oxides became thin enough that $\gamma$ shrank and the junction leakage cost exceeded the benefit.

**Extracting $V_T$ from a C–V measurement.** From [3.3](03-03-mos-capacitor.md), the high-frequency C–V curve gives you everything:

1. **$C_{ox}$** from the accumulation plateau → $t_{ox} = \varepsilon_{ox}/C_{ox}$.
2. **$C_{\min}$** from the inversion plateau → $W_{\max} = \varepsilon_s(1/C_{\min}-1/C_{ox})$ → $N_a$ (by iterating with $\phi_F$).
3. **The flat-band capacitance** $C_{FB}$, computed from the extracted $N_a$ using the Debye length,

$$C_{FB} = \frac{C_{ox}\,\varepsilon_s/L_D}{C_{ox}+\varepsilon_s/L_D}, \qquad L_D = \sqrt{\frac{\varepsilon_sk_BT}{q^2N_a}},$$

read the voltage at which the measured $C$ equals $C_{FB}$ → that is $V_{FB}$.
4. **$V_T$** then follows from the boxed formula, or is read directly from the knee.

*In words: one capacitance sweep yields oxide thickness, substrate doping, flat-band voltage and threshold — the four numbers that define the device.*

**Extracting $V_T$ from an I–V measurement.** In a real transistor, the standard methods are:

- **Linear extrapolation:** plot $I_D$ against $V_G$ at small $V_{DS}$, extrapolate the steepest tangent to $I_D=0$; the intercept is $V_T+V_{DS}/2$.
- **Constant current:** define $V_T$ as the $V_G$ at which $I_D = 100\ \mathrm{nA}\times(W/L)$. Crude but robust and universal in production testing.
- **$\sqrt{I_D}$ extrapolation** in saturation, where the square law makes $\sqrt{I_D}$ linear in $V_G$.

These give slightly different answers — differing by tens of millivolts — which is a reminder that $V_T$ is a *defined* quantity, not a measured constant of nature.

## Picture

![A two-panel figure. Left: a stacked bar showing the three contributions to V_T — a negative flat-band term, the 2 phi_F band-bending term, and the depletion-charge term Q_dep over C_ox — summing to the final threshold voltage, with a second bar alongside showing how a threshold-adjust implant shifts the total. Right: the high-frequency C-V curve annotated as a measurement instrument, with the accumulation plateau labelled C_ox giving t_ox, the inversion plateau labelled C_min giving N_a, the flat-band point marked giving V_FB, and the knee marked giving V_T.](assets/03-04-fig1.svg)

Left: $V_T$ is a sum of three physically distinct costs, and each is a separate design lever. Notice that $V_{FB}$ is typically negative — the work-function difference gives you a head start — so the two positive terms have to overcome it before the channel forms.

Right: the same C–V curve from [3.3](03-03-mos-capacitor.md), now read as an instrument. Four numbers come off one sweep, and together they fully specify the MOS structure. This is the measurement a fab runs on every wafer.

## Worked examples

**Example 1 (assembling $V_T$, then adjusting it).** An $n$-channel MOSFET has $t_{ox} = 10$ nm, $N_a = 3\times10^{17}\ \mathrm{cm^{-3}}$, an $n^+$ polysilicon gate with $\phi_{MS} = -0.95$ V, and $Q_f/q = 2\times10^{10}\ \mathrm{cm^{-2}}$. Find $V_T$. Then find the implant needed to set $V_T = +0.7$ V.

*Oxide capacitance.*

$$C_{ox} = \frac{3.45\times10^{-13}}{10^{-6}} = 3.45\times10^{-7}\ \mathrm{F/cm^2}.$$

*Bulk potential.*

$$\phi_F = 0.0259\ln\frac{3\times10^{17}}{10^{10}} = 0.0259\ln(3\times10^{7}) = 0.0259(17.22) = 0.446\ \mathrm{V}, \qquad 2\phi_F = 0.892\ \mathrm{V}.$$

*Depletion charge at threshold.*

$$|Q_{dep}^{\max}| = \sqrt{4q\varepsilon_sN_a\phi_F} = \sqrt{4(1.602\times10^{-19})(1.04\times10^{-12})(3\times10^{17})(0.446)}$$

$$= \sqrt{4(1.602\times10^{-19})(1.04\times10^{-12})(1.338\times10^{17})} = \sqrt{8.917\times10^{-14}} = 2.986\times10^{-7}\ \mathrm{C/cm^2}.$$

$$\frac{|Q_{dep}^{\max}|}{C_{ox}} = \frac{2.986\times10^{-7}}{3.45\times10^{-7}} = 0.866\ \mathrm{V}.$$

*Flat-band voltage.*

$$\frac{Q_f}{C_{ox}} = \frac{(1.602\times10^{-19})(2\times10^{10})}{3.45\times10^{-7}} = \frac{3.204\times10^{-9}}{3.45\times10^{-7}} = 0.0093\ \mathrm{V},$$

$$V_{FB} = -0.95-0.0093 = -0.959\ \mathrm{V}.$$

*Threshold.*

$$V_T = -0.959+0.892+0.866 = 0.799\ \mathrm{V}.$$

*Adjusting to 0.7 V.* We need $\Delta V_T = 0.7-0.799 = -0.099$ V — a *reduction*, so implant **donors** (which partially compensate the surface acceptors):

$$D_I = \frac{|\Delta V_T|\,C_{ox}}{q} = \frac{(0.099)(3.45\times10^{-7})}{1.602\times10^{-19}} = \frac{3.416\times10^{-8}}{1.602\times10^{-19}} = 2.13\times10^{11}\ \mathrm{cm^{-2}}.$$

A dose of $2.1\times10^{11}\ \mathrm{cm^{-2}}$ — a very light implant, entirely routine, and delivered in seconds by an ion implanter ([4.4](04-04-device-fabrication.md)).

*Why the implant is so effective.* Notice the leverage: $2\times10^{11}\ \mathrm{cm^{-2}}$ of implanted charge is a *sheet* density, equivalent to spreading $2\times10^{11}/(5\times10^{-6}\ \mathrm{cm}) = 4\times10^{16}\ \mathrm{cm^{-3}}$ over a 50 nm depth — about 13% of the substrate doping. A 13% surface-doping change bought 100 mV of threshold shift, precisely because the implant sits where the oxide field is strongest.

**Example 2 (the body effect in a NAND gate).** The same transistor is used in a two-input NAND, where the upper device sees $V_{SB} = 0.6$ V. Find $\gamma$, the shifted $V_T$, and the consequence for drive current.

*Body-effect coefficient.*

$$\gamma = \frac{\sqrt{2q\varepsilon_sN_a}}{C_{ox}} = \frac{\sqrt{2(1.602\times10^{-19})(1.04\times10^{-12})(3\times10^{17})}}{3.45\times10^{-7}} = \frac{\sqrt{9.997\times10^{-14}}}{3.45\times10^{-7}}$$

$$= \frac{3.162\times10^{-7}}{3.45\times10^{-7}} = 0.917\ \sqrt{\mathrm{V}}.$$

*Shifted threshold.* Using the adjusted $V_{T0} = 0.7$ V from Example 1:

$$V_T(0.6) = 0.7+0.917\left(\sqrt{0.892+0.6}-\sqrt{0.892}\right) = 0.7+0.917\left(\sqrt{1.492}-\sqrt{0.892}\right)$$

$$= 0.7+0.917(1.2215-0.9445) = 0.7+0.917(0.2770) = 0.7+0.254 = 0.954\ \mathrm{V}.$$

**The threshold rose by 254 mV** — a 36% increase.

*Consequence for drive.* MOSFET current in saturation goes as $(V_{GS}-V_T)^2$ ([3.5](03-05-mosfet-iv.md)). At a supply of $V_{DD} = 1.8$ V, and taking $V_{GS} = 1.8$ V for the bottom device but $V_{GS} = 1.8-0.6 = 1.2$ V for the upper one (its source is lifted):

$$\text{bottom: } (1.8-0.7)^2 = 1.21, \qquad \text{upper: } (1.2-0.954)^2 = (0.246)^2 = 0.061.$$

The upper transistor delivers **5% of the bottom one's current**. Even accounting for the fact that in a real stack both share the same current and settle to an intermediate operating point, the message is stark: the body effect, compounded with the lifted source voltage, makes a stacked device dramatically weaker.

*What designers do about it.* Three standard responses, all visible in real layouts:

1. **Widen the stacked devices** — a 2-input NAND's NMOS transistors are typically drawn twice the width of an inverter's, to compensate.
2. **Limit stack height.** Beyond 3–4 series transistors the penalty compounds unacceptably, which is why wide fan-in gates are built as trees of small gates rather than one deep stack.
3. **Eliminate the body effect entirely** with a device that has no body to bias: **SOI** (silicon-on-insulator) devices with floating bodies, and **FinFETs**, whose fully depleted fin has essentially no neutral body at all. This is one of several reasons FinFETs replaced planar transistors around the 22 nm node — $\gamma\to0$ removes the stacking penalty and improves the subthreshold slope at the same time ([3.6](03-06-short-channel-effects-scaling.md)).

## Watch out

- **You might confuse the two $V_T$'s.** Threshold voltage (volts, ~0.3–1 V) and thermal voltage ($k_BT/q$ = 0.0259 V) share a symbol by unfortunate convention. Both appear in the same formulas.
- **You might treat $V_T$ as a fixed device constant.** It depends on $V_{SB}$ (body effect), on temperature (about $-1$ to $-2$ mV/°C, since $\phi_F$ falls as $n_i$ rises), and on channel length (via the short-channel effects of [3.6](03-06-short-channel-effects-scaling.md)).
- **You might forget that $V_{FB}$ is usually negative and large.** At around $-1$ V it is comparable to the whole threshold. Omitting it gives a $V_T$ nearly twice too large.
- **You might think the extraction method doesn't matter.** Linear extrapolation, constant-current and $\sqrt{I_D}$ methods differ by tens of millivolts on the same device. When comparing $V_T$ values, check they were extracted the same way.
- **You might implant to fix a threshold without checking the mobility cost.** A heavy threshold-adjust implant raises surface scattering and degrades channel mobility, cutting drive current. The implant is nearly free at $10^{11}\ \mathrm{cm^{-2}}$ and expensive at $10^{13}$.

## One-liner

> Threshold is three costs added — undo the built-in bending, bend to $2\phi_F$, then hold the depletion charge across the oxide — and a sheet implant of $qD_I/C_{ox}$ volts lets you set it to whatever the process needs.

## Problems

**P1 (🟢)** An $n$-MOSFET has $t_{ox} = 6$ nm, $N_a = 10^{17}\ \mathrm{cm^{-3}}$, $V_{FB} = -0.9$ V. (a) Find $C_{ox}$ and $\phi_F$. (b) Find $|Q_{dep}^{\max}|$. (c) Find $V_T$. (d) What implant dose (and type) would set $V_T = 0.4$ V?

**P2 (🟡)** A process has $t_{ox} = 12$ nm, $N_a = 5\times10^{16}\ \mathrm{cm^{-3}}$, $\phi_{MS} = -0.9$ V, $Q_f/q = 10^{11}\ \mathrm{cm^{-2}}$. (a) Find $V_T$. (b) Find $\gamma$. (c) Find $V_T$ at $V_{SB} = 1.0$ V and 2.0 V. (d) The oxide is thinned to 4 nm with the same doping. Recompute $V_T$ and $\gamma$, and comment on why modern processes have weak body effect.

**P3 (🔴)** A high-frequency C–V measurement on a MOS capacitor of area $10^{-3}\ \mathrm{cm^2}$ gives $C_{acc} = 345$ pF and $C_{\min} = 90$ pF, with the curve passing through $C = 250$ pF at $V_G = -0.85$ V. (a) Find $t_{ox}$. (b) Find $W_{\max}$ and hence $N_a$. (c) Compute $L_D$ and $C_{FB}$, and determine whether $-0.85$ V is the flat-band voltage. (d) Compute $V_T$ and state the assumed gate material.

<details>
<summary>Solutions</summary>

**P1** (a) $$C_{ox} = \frac{3.45\times10^{-13}}{6\times10^{-7}} = 5.75\times10^{-7}\ \mathrm{F/cm^2}.$$

$$\phi_F = 0.0259\ln(10^{7}) = 0.417\ \mathrm{V}, \qquad 2\phi_F = 0.835\ \mathrm{V}.$$

(b) $$|Q_{dep}^{\max}| = \sqrt{4q\varepsilon_sN_a\phi_F} = \sqrt{4(1.602\times10^{-19})(1.04\times10^{-12})(10^{17})(0.417)}$$
$$= \sqrt{2.779\times10^{-14}} = 1.667\times10^{-7}\ \mathrm{C/cm^2}.$$

(c) $$V_T = V_{FB}+2\phi_F+\frac{|Q_{dep}|}{C_{ox}} = -0.9+0.835+\frac{1.667\times10^{-7}}{5.75\times10^{-7}} = -0.9+0.835+0.290 = 0.225\ \mathrm{V}.$$

(d) Need $\Delta V_T = 0.4-0.225 = +0.175$ V, so implant **acceptors** (boron):

$$D_I = \frac{\Delta V_T\,C_{ox}}{q} = \frac{(0.175)(5.75\times10^{-7})}{1.602\times10^{-19}} = \frac{1.006\times10^{-7}}{1.602\times10^{-19}} = 6.28\times10^{11}\ \mathrm{cm^{-2}}.$$

**P2** (a) $$C_{ox} = \frac{3.45\times10^{-13}}{1.2\times10^{-6}} = 2.875\times10^{-7}\ \mathrm{F/cm^2}.$$

$$\phi_F = 0.0259\ln\frac{5\times10^{16}}{10^{10}} = 0.0259\ln(5\times10^{6}) = 0.0259(15.42) = 0.399\ \mathrm{V}, \quad 2\phi_F = 0.799\ \mathrm{V}.$$

$$|Q_{dep}| = \sqrt{4(1.602\times10^{-19})(1.04\times10^{-12})(5\times10^{16})(0.399)} = \sqrt{1.329\times10^{-14}} = 1.153\times10^{-7},$$

$$\frac{|Q_{dep}|}{C_{ox}} = \frac{1.153\times10^{-7}}{2.875\times10^{-7}} = 0.401\ \mathrm{V}.$$

$$\frac{Q_f}{C_{ox}} = \frac{(1.602\times10^{-19})(10^{11})}{2.875\times10^{-7}} = 0.0557\ \mathrm{V}, \qquad V_{FB} = -0.9-0.056 = -0.956\ \mathrm{V}.$$

$$V_T = -0.956+0.799+0.401 = 0.244\ \mathrm{V}.$$

(b) $$\gamma = \frac{\sqrt{2q\varepsilon_sN_a}}{C_{ox}} = \frac{\sqrt{2(1.602\times10^{-19})(1.04\times10^{-12})(5\times10^{16})}}{2.875\times10^{-7}} = \frac{\sqrt{1.666\times10^{-14}}}{2.875\times10^{-7}}$$

$$= \frac{1.291\times10^{-7}}{2.875\times10^{-7}} = 0.449\ \sqrt{\mathrm{V}}.$$

(c) $$V_T(1.0) = 0.244+0.449\left(\sqrt{1.799}-\sqrt{0.799}\right) = 0.244+0.449(1.3413-0.8939) = 0.244+0.201 = 0.445\ \mathrm{V}.$$

$$V_T(2.0) = 0.244+0.449\left(\sqrt{2.799}-\sqrt{0.799}\right) = 0.244+0.449(1.6730-0.8939) = 0.244+0.350 = 0.594\ \mathrm{V}.$$

The threshold more than doubles over 2 V of body bias.

(d) At $t_{ox} = 4$ nm, $C_{ox} = 3.45\times10^{-13}/4\times10^{-7} = 8.625\times10^{-7}\ \mathrm{F/cm^2}$ — three times larger.

$$\frac{|Q_{dep}|}{C_{ox}} = \frac{1.153\times10^{-7}}{8.625\times10^{-7}} = 0.134\ \mathrm{V}, \qquad \frac{Q_f}{C_{ox}} = 0.0186\ \mathrm{V},$$

$$V_{FB} = -0.9-0.019 = -0.919, \qquad V_T = -0.919+0.799+0.134 = 0.014\ \mathrm{V}.$$

$$\gamma = \frac{1.291\times10^{-7}}{8.625\times10^{-7}} = 0.150\ \sqrt{\mathrm{V}}.$$

*Comment.* Both the depletion term and $\gamma$ are inversely proportional to $C_{ox}$, hence proportional to $t_{ox}$. Thinning the oxide threefold cut $\gamma$ threefold, from 0.449 to 0.150.

**Modern processes have weak body effect because their oxides are thin.** The physical reason is that a thin oxide gives the gate much tighter electrostatic control of the surface, so the depletion charge under the channel — which is what the body bias modulates — becomes a smaller fraction of the total charge the gate must supply. The gate wins, and the body's influence shrinks.

Note also that $V_T$ collapsed to 14 mV, which is unusable. That is exactly why thin-oxide processes *must* use a threshold-adjust implant — the natural $V_T$ of a thin-oxide device is near zero, and the implant puts it back where the circuit needs it. In this case, reaching $V_T = 0.35$ V would need

$$D_I = \frac{(0.336)(8.625\times10^{-7})}{1.602\times10^{-19}} = 1.81\times10^{12}\ \mathrm{cm^{-2}}$$

of boron.

**P3** (a) Per unit area, with $A = 10^{-3}\ \mathrm{cm^2}$:

$$C_{ox}' = \frac{345\times10^{-12}}{10^{-3}} = 3.45\times10^{-7}\ \mathrm{F/cm^2}, \qquad t_{ox} = \frac{\varepsilon_{ox}}{C_{ox}'} = \frac{3.45\times10^{-13}}{3.45\times10^{-7}} = 10^{-6}\ \mathrm{cm} = 10\ \mathrm{nm}.$$

(b) $$C_{\min}' = \frac{90\times10^{-12}}{10^{-3}} = 9.0\times10^{-8}\ \mathrm{F/cm^2}.$$

$$W_{\max} = \varepsilon_s\left(\frac{1}{C_{\min}'}-\frac{1}{C_{ox}'}\right) = 1.04\times10^{-12}\left(\frac{1}{9.0\times10^{-8}}-\frac{1}{3.45\times10^{-7}}\right)$$

$$= 1.04\times10^{-12}(1.1111\times10^{7}-2.899\times10^{6}) = 1.04\times10^{-12}(8.212\times10^{6}) = 8.54\times10^{-6}\ \mathrm{cm} = 85.4\ \mathrm{nm}.$$

Now solve $W_{\max} = \sqrt{4\varepsilon_s\phi_F/qN_a}$ iteratively:

$$N_a = \frac{4\varepsilon_s\phi_F}{qW_{\max}^2} = \frac{4(1.04\times10^{-12})\phi_F}{(1.602\times10^{-19})(7.293\times10^{-11})} = \frac{4.16\times10^{-12}\phi_F}{1.168\times10^{-29}} = 3.561\times10^{17}\phi_F.$$

Guess $\phi_F = 0.44$: $N_a = 1.567\times10^{17}$, $\phi_F = 0.0259\ln(1.567\times10^7) = 0.429$. Iterate: $N_a = 1.528\times10^{17}$, $\phi_F = 0.4283$. Converged:

$$N_a \approx 1.53\times10^{17}\ \mathrm{cm^{-3}}, \qquad \phi_F = 0.428\ \mathrm{V}, \qquad 2\phi_F = 0.857\ \mathrm{V}.$$

(c) Debye length:

$$L_D = \sqrt{\frac{\varepsilon_sk_BT}{q^2N_a}} = \sqrt{\frac{\varepsilon_sV_T^{\rm therm}}{qN_a}} = \sqrt{\frac{(1.04\times10^{-12})(0.0259)}{(1.602\times10^{-19})(1.53\times10^{17})}} = \sqrt{\frac{2.694\times10^{-14}}{2.451\times10^{-2}}}$$

$$= \sqrt{1.099\times10^{-12}} = 1.048\times10^{-6}\ \mathrm{cm} = 10.5\ \mathrm{nm}.$$

$$C_{s,FB} = \frac{\varepsilon_s}{L_D} = \frac{1.04\times10^{-12}}{1.048\times10^{-6}} = 9.92\times10^{-7}\ \mathrm{F/cm^2},$$

$$C_{FB}' = \frac{(3.45\times10^{-7})(9.92\times10^{-7})}{3.45\times10^{-7}+9.92\times10^{-7}} = \frac{3.422\times10^{-13}}{1.337\times10^{-6}} = 2.56\times10^{-7}\ \mathrm{F/cm^2},$$

$$C_{FB} = (2.56\times10^{-7})(10^{-3}) = 256\ \mathrm{pF}.$$

The measured 250 pF at $V_G = -0.85$ V is within 2% of the computed $C_{FB} = 256$ pF, so **yes** — $V_{FB} \approx -0.85$ V. ✓

(d) $$|Q_{dep}^{\max}| = qN_aW_{\max} = (1.602\times10^{-19})(1.53\times10^{17})(8.54\times10^{-6}) = 2.093\times10^{-7}\ \mathrm{C/cm^2},$$

$$\frac{|Q_{dep}|}{C_{ox}'} = \frac{2.093\times10^{-7}}{3.45\times10^{-7}} = 0.607\ \mathrm{V}.$$

$$V_T = V_{FB}+2\phi_F+\frac{|Q_{dep}|}{C_{ox}} = -0.85+0.857+0.607 = 0.614\ \mathrm{V}.$$

*Gate material.* $V_{FB} = \phi_{MS}-Q_f/C_{ox}$. For $n^+$ polysilicon on $p$-type silicon of this doping, $\phi_{MS}\approx-(E_g/2q+\phi_F) = -(0.56+0.428) = -0.988$ V. Then

$$\frac{Q_f}{C_{ox}} = \phi_{MS}-V_{FB} = -0.988-(-0.85) = -0.138\ \mathrm{V},$$

which would require a *negative* $Q_f$ — unphysical, since fixed oxide charge is always positive.

So the gate is **not** $n^+$ poly. Try $p^+$ polysilicon: $\phi_{MS}\approx +(E_g/2q-\phi_F) = 0.56-0.428 = +0.132$ V, giving $Q_f/C_{ox} = 0.132+0.85 = 0.982$ V, i.e. $Q_f/q = 2.1\times10^{12}\ \mathrm{cm^{-2}}$ — implausibly large for a modern oxide.

The consistent answer is an **aluminium gate**, for which $\phi_{MS}\approx-0.9$ V on this substrate, giving $Q_f/q = (0.9-0.85)(3.45\times10^{-7})/(1.602\times10^{-19}) = 1.1\times10^{11}\ \mathrm{cm^{-2}}$ — a perfectly reasonable value for a decent thermal oxide.

The reasoning here is worth noting as a technique: **the sign and magnitude of the implied $Q_f$ is a consistency check on your assumed gate material**, because $Q_f$ must be positive and of order $10^{10}$–$10^{11}\ \mathrm{cm^{-2}}$. Anything outside that range means you assumed the wrong gate.

</details>

## Flashback

**From Lesson 3.3 (The MOS capacitor):** A MOS structure has $N_a = 2\times10^{17}\ \mathrm{cm^{-3}}$ and $t_{ox} = 8$ nm. (a) Find $\phi_F$ and $W_{\max}$. (b) Find $C_{ox}$ and $C_{\min}$. (c) Find the depletion term in $V_T$.

<details>
<summary>Solution</summary>

(a) $$\phi_F = 0.0259\ln\frac{2\times10^{17}}{10^{10}} = 0.0259\ln(2\times10^{7}) = 0.0259(16.81) = 0.435\ \mathrm{V}.$$

$$W_{\max} = \sqrt{\frac{4(1.04\times10^{-12})(0.435)}{(1.602\times10^{-19})(2\times10^{17})}} = \sqrt{\frac{1.810\times10^{-12}}{3.204\times10^{-2}}} = \sqrt{5.649\times10^{-11}} = 7.52\times10^{-6}\ \mathrm{cm} = 75.2\ \mathrm{nm}.$$

(b) $$C_{ox} = \frac{3.45\times10^{-13}}{8\times10^{-7}} = 4.31\times10^{-7}\ \mathrm{F/cm^2}, \qquad C_s = \frac{1.04\times10^{-12}}{7.52\times10^{-6}} = 1.383\times10^{-7},$$

$$C_{\min} = \frac{(4.31\times10^{-7})(1.383\times10^{-7})}{5.696\times10^{-7}} = 1.047\times10^{-7}\ \mathrm{F/cm^2}, \qquad \frac{C_{\min}}{C_{ox}} = 0.243.$$

(c) $$|Q_{dep}^{\max}| = qN_aW_{\max} = (1.602\times10^{-19})(2\times10^{17})(7.52\times10^{-6}) = 2.409\times10^{-7}\ \mathrm{C/cm^2},$$

$$\frac{|Q_{dep}^{\max}|}{C_{ox}} = \frac{2.409\times10^{-7}}{4.31\times10^{-7}} = 0.559\ \mathrm{V}.$$

So the depletion term alone contributes 0.56 V to the threshold, against 0.87 V from the band-bending term — the two positive contributions are comparable, and both must be overcome before the flat-band head start is spent.

</details>

## Connections

- **Backward:** every piece — $\phi_F$, $W_{\max}$, $Q_{dep}$, $V_{FB}$, the C–V shape — comes from [3.3](03-03-mos-capacitor.md); the $1/C^2$ extraction logic is [2.3](02-03-junction-diffusion-capacitance.md)'s.
- **Forward:** [3.5](03-05-mosfet-iv.md) uses $Q_{inv} = C_{ox}(V_{GS}-V_T)$ to get the drain current; [3.6](03-06-short-channel-effects-scaling.md) shows how $V_T$ stops being a constant once the channel is short.
- **Sideways:** the "sum of independent voltage costs" structure is the same as a series circuit's voltage division, and the threshold-adjust implant is the semiconductor analogue of trimming — deliberately adding a small, well-controlled offset to hit a target that the underlying physics does not naturally land on.
