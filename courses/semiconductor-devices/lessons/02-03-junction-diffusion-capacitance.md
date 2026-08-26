# Semiconductor Devices · Lesson 2.3: Junction and diffusion capacitance

> ⏱ ~15 min · Module 2: The p–n junction · Builds on: [2.1 Junction electrostatics](02-01-junction-electrostatics.md), [2.2 The ideal-diode equation](02-02-ideal-diode-equation.md) · Unlocks: [2.4 Reverse breakdown](02-04-reverse-breakdown.md), [3.4 Threshold voltage and the C–V curve](03-04-threshold-voltage-cv.md)

## Why this matters

A diode is not just an I–V curve. It stores charge, and how much it stores as a function of voltage decides how fast it can switch — which for a rectifier, a logic gate, or a switching power supply is the parameter that actually limits the design.

There are two entirely separate storage mechanisms, dominant in opposite bias directions, with completely different physics and wildly different magnitudes. Confusing them is a classic error. This lesson separates them, and then turns the reverse-bias one into a **measurement instrument**: the $1/C^2$ plot, which extracts a doping profile from a capacitance sweep and is the single most-used characterization technique in semiconductor work.

## The idea

**Reverse bias: junction (depletion) capacitance.** The depletion region is an insulating layer sandwiched between two conducting neutral regions — a parallel-plate capacitor whose dielectric is depleted silicon. Change the voltage and $W$ changes ([2.1](02-01-junction-electrostatics.md)), which uncovers or re-covers a sliver of fixed dopant charge at each edge. The capacitance is $C_j = \varepsilon_s/W$ per unit area, and since $W\propto\sqrt{V_{bi}-V}$, the capacitance falls as $(V_{bi}-V)^{-1/2}$.

Two consequences. First, **the diode is a voltage-controlled capacitor** — that is a varactor, and it tunes every radio you own. Second, and more useful in the lab: $1/C^2$ is *linear* in $V$, with a slope that gives the doping and an intercept that gives $V_{bi}$. Because $W$ moves as you sweep, each bias probes the doping at a different depth, so a sweep returns a **doping profile**, not just a number.

**Forward bias: diffusion (charge-storage) capacitance.** Now the depletion region is squeezed thin and irrelevant. What matters is the cloud of injected minority carriers sitting in the neutral regions — the exponential profiles of [2.2](02-02-ideal-diode-equation.md). That stored charge is proportional to the current, and both grow exponentially with voltage, so $dQ/dV$ grows exponentially too. At any appreciable forward current, diffusion capacitance is **orders of magnitude larger** than junction capacitance.

And it has a beautifully simple form: the stored charge equals the current times the **transit time** $\tau_T$ — the average time a carrier spends in the device before recombining or being collected. That single parameter, $\tau_T$, is what a device designer optimizes for speed.

The practical consequence of diffusion capacitance is [reverse recovery](../reference.md#reverse-recovery): a diode conducting forward current has a reservoir of stored minority charge, and when you abruptly reverse the voltage, that charge must be removed before the diode can block. Until it is, the diode conducts *backwards*, hard. Every switching-supply designer has been bitten by this.

## The formal version

**Junction (depletion) capacitance.** Defined as the small-signal $dQ/dV$ of the depletion charge. Per unit area, with $Q_j = qN_dx_n$ the charge uncovered on the $n$-side:

$$\boxed{\;C_j = \left|\frac{dQ_j}{dV}\right| = \frac{\varepsilon_s}{W(V)} = \sqrt{\frac{q\varepsilon_s}{2(V_{bi}-V)}\cdot\frac{N_aN_d}{N_a+N_d}}\;}$$

*In words: it is exactly the parallel-plate formula with the depletion width as the plate separation — which is not a coincidence but a theorem, and it holds for any doping profile.*

For a one-sided junction ($N_a\gg N_d$):

$$C_j = \sqrt{\frac{q\varepsilon_sN_d}{2(V_{bi}-V)}} = \frac{C_{j0}}{\sqrt{1-V/V_{bi}}}, \qquad C_{j0} = \sqrt{\frac{q\varepsilon_sN_d}{2V_{bi}}}.$$

**The $1/C^2$ technique.** Squaring and inverting the one-sided result:

$$\boxed{\;\frac{1}{C_j^2} = \frac{2(V_{bi}-V)}{q\varepsilon_sN_d}.\;}$$

*In words: plot $1/C^2$ against $V$ and you get a straight line.*

- **Slope** $= -\dfrac{2}{q\varepsilon_sN_d}$, so $N_d = -\dfrac{2}{q\varepsilon_s}\left[\dfrac{d(1/C^2)}{dV}\right]^{-1}$.
- **Intercept** on the voltage axis $= V_{bi}$.

And the *local* form, valid for arbitrary non-uniform doping — this is the part that makes it a profiling tool:

$$N(x) = \frac{2}{q\varepsilon_s}\left[\frac{d(1/C^2)}{dV}\right]^{-1}\ \text{evaluated at } x = \frac{\varepsilon_s}{C}.$$

*In words: each bias point measures the doping at the current depletion edge, whose depth is $\varepsilon_s/C$.* Sweep the bias and you sweep the depth, recovering $N(x)$ directly. Curvature in the $1/C^2$ plot is non-uniform doping; the plot's *failure* to be straight is the useful signal.

**Diffusion (charge-storage) capacitance.** Under forward bias the stored minority charge on the $n$-side is the area under the excess profile:

$$Q_p = qA\int_{x_n}^{\infty}\delta p_n(x)\,dx = qA\,\delta p_n(x_n)\,L_p = qAp_{n0}L_p\left(e^{V/V_T}-1\right).$$

Compare with the hole current $I_p = qAD_pp_{n0}(e^{V/V_T}-1)/L_p$ and the two are proportional:

$$\boxed{\;Q_p = I_p\cdot\frac{L_p^2}{D_p} = I_p\,\tau_p.\;}$$

*In words: stored charge is current times lifetime* — a completely general and very useful relation (a steady current $I$ delivering carriers that live for $\tau$ maintains a population $I\tau/q$).

Differentiating:

$$\boxed{\;C_d = \frac{dQ}{dV} = \frac{\tau_T I}{V_T}\;}$$

where $\tau_T$ is the **transit time**: $\tau_T = \tau$ for a long-base diode, and $\tau_T = W_B^2/2D$ for a short-base one.

*The short-base transit time is worth deriving,* because it is the parameter every fast device optimizes. In a short base the profile is a triangle of height $\delta p_0$ and width $W_B$, so $Q = qA\delta p_0W_B/2$, while $I = qAD\delta p_0/W_B$. Dividing:

$$\tau_T = \frac{Q}{I} = \frac{W_B^2}{2D}.$$

*In words: transit time scales as the square of the base width* — halve the base and the device is four times faster. That quadratic is why every advance in bipolar speed has been an advance in making the base thinner ([3.2](03-02-bjt-currents-and-gain.md)).

**The two capacitances compared.** At 1 mA in a typical small diode with $\tau_T = 100$ ns:

$$C_d = \frac{(10^{-7})(10^{-3})}{0.0259} = 3.9\times10^{-9}\ \mathrm{F} = 3.9\ \mathrm{nF},$$

against a junction capacitance of perhaps 1 pF. **Four thousand times larger.** The rule is simple: *reverse bias → junction capacitance; forward bias → diffusion capacitance, and it dominates completely.*

**Reverse recovery.** A diode carrying forward current $I_F$ stores $Q_S = I_F\tau_T$. Switch the applied voltage to reverse and the stored charge must be swept out; until it is, the junction cannot support a reverse voltage and the diode conducts backwards at whatever current the external circuit allows, $I_R$. The **storage time** is

$$t_s \approx \tau_T\ln\left(1+\frac{I_F}{I_R}\right),$$

followed by a transition time as the last charge clears. Total **reverse recovery time** $t_{rr}$ is the headline spec on any rectifier datasheet.

The design response is to cut $\tau_T$ deliberately — gold doping or electron irradiation ([1.3](01-03-generation-recombination.md)) drops the lifetime from microseconds to nanoseconds. The price is a larger $I_0$ and hence a higher forward drop ([2.2](02-02-ideal-diode-equation.md)), so **fast diodes have worse conduction loss**. That is the central trade in rectifier selection, and it is why the Schottky diode ([2.5](02-05-metal-semiconductor-heterojunctions.md)) — a *majority-carrier* device with essentially **no** stored minority charge and hence no reverse recovery at all — dominates low-voltage switching.

**Small-signal model.** Putting the pieces together, a diode at bias $I$ is

$$r_d = \frac{V_T}{I}, \qquad C = C_j+C_d,$$

in parallel, plus series resistance. The RC time constant at forward bias is

$$r_dC_d = \frac{V_T}{I}\cdot\frac{\tau_TI}{V_T} = \tau_T,$$

**independent of the bias current** — a tidy result, and it says the diode's intrinsic speed limit *is* the transit time, no matter how hard you drive it.

## Picture

![Two panels. Left: a 1/C squared versus reverse voltage plot, showing a straight line for uniform doping whose x-intercept is labelled V_bi and whose slope gives the doping, alongside a curved trace labelled non-uniform doping to show what the diagnostic detects. Right: a reverse-recovery waveform in time, showing forward current, then an abrupt switch where the current goes sharply negative and stays at minus I_R for the storage time t_s while stored charge is removed, then decays to zero over the transition time, with the shaded area labelled as the stored charge Q_S equals I_F times tau_T.](assets/02-03-fig1.svg)

Left: the measurement. A straight $1/C^2$ line means uniform doping; its slope gives $N$ and its intercept gives $V_{bi}$. The curved trace is what you actually see for a graded or implanted profile — and rather than being a nuisance, differentiating it point by point returns $N(x)$ versus depth.

Right: the price of stored charge. When the voltage reverses, the diode does not block immediately — it conducts backwards, hard, for as long as it takes to sweep out the minority carriers that forward conduction left behind. The shaded area is that charge, $Q_S = I_F\tau_T$, and every nanosecond of $t_{rr}$ is switching loss.

## Worked examples

**Example 1 (a $1/C^2$ extraction, done as a measurement).** A one-sided silicon junction of area $A = 10^{-3}\ \mathrm{cm^2}$ is measured:

| $V$ (V) | $C$ (pF) |
|---|---|
| 0 | 31.6 |
| $-2$ | 17.4 |
| $-5$ | 12.0 |
| $-10$ | 8.8 |

*Compute $1/C^2$ in units of $10^{22}\ \mathrm{F^{-2}}$:*

| $V$ | $C$ (F) | $1/C^2$ |
|---|---|---|
| 0 | $3.16\times10^{-11}$ | $1.001\times10^{21}$ |
| $-2$ | $1.74\times10^{-11}$ | $3.303\times10^{21}$ |
| $-5$ | $1.20\times10^{-11}$ | $6.944\times10^{21}$ |
| $-10$ | $8.8\times10^{-12}$ | $1.291\times10^{22}$ |

*Check linearity.* Successive slopes $\Delta(1/C^2)/\Delta V$:

$$\frac{3.303-1.001}{-2-0} = -1.151\times10^{21}, \quad \frac{6.944-3.303}{-3} = -1.214\times10^{21}, \quad \frac{12.91-6.944}{-5} = -1.193\times10^{21}.$$

Constant to about 3% — the profile is uniform ✓. Take the average slope $-1.19\times10^{21}\ \mathrm{F^{-2}V^{-1}}$.

*Doping.* The per-area capacitance is $C/A$, so in terms of the measured $C$ the slope relation carries an $A^2$:

$$\frac{d(1/C^2)}{dV} = -\frac{2}{q\varepsilon_sN_dA^2} \quad\Longrightarrow\quad N_d = \frac{2}{q\varepsilon_sA^2}\left|\frac{dV}{d(1/C^2)}\right|^{-1}\!\!\!,$$

$$N_d = \frac{2}{(1.602\times10^{-19})(1.04\times10^{-12})(10^{-3})^2(1.19\times10^{21})} = \frac{2}{1.982\times10^{-13}} \times 10^{-21}.$$

Working it through: $(1.602\times10^{-19})(1.04\times10^{-12}) = 1.666\times10^{-31}$; times $A^2 = 10^{-6}$ gives $1.666\times10^{-37}$; times the slope $1.19\times10^{21}$ gives $1.983\times10^{-16}$. So

$$N_d = \frac{2}{1.983\times10^{-16}} = 1.01\times10^{16}\ \mathrm{cm^{-3}}.$$

*Built-in potential from the intercept.* Extrapolate to $1/C^2 = 0$ using the point at $V=0$ and the slope:

$$V_{bi} = \frac{1.001\times10^{21}}{1.19\times10^{21}} = 0.841\ \mathrm{V}.$$

Cross-check against theory for $N_d = 10^{16}$, $N_a\gg N_d$: $V_{bi} = 0.0259\ln(10^{18}\times10^{16}/10^{20}) = 0.835$ V ✓ — agreement to under 1%.

*Depth probed.* At $V=0$, $x = \varepsilon_sA/C = (1.04\times10^{-12})(10^{-3})/(3.16\times10^{-11}) = 3.29\times10^{-5}$ cm $= 0.33$ µm; at $-10$ V, $x = 1.18$ µm. So the sweep profiled the doping from 0.33 to 1.18 µm below the junction — and found it uniform there.

**Example 2 (reverse recovery, and why Schottky diodes exist).** A silicon rectifier carries $I_F = 1$ A with $\tau_T = 2\ \mu$s. It is switched off into a circuit that limits the reverse current to $I_R = 2$ A. Find the stored charge, storage time, and the switching energy lost.

*Stored charge.*

$$Q_S = I_F\tau_T = (1)(2\times10^{-6}) = 2\ \mu\mathrm{C}.$$

*Storage time.*

$$t_s = \tau_T\ln\left(1+\frac{I_F}{I_R}\right) = 2\ \mu\mathrm{s}\times\ln(1.5) = 2\times0.405 = 0.81\ \mu\mathrm{s}.$$

*Switching loss.* During $t_s$ the diode carries 2 A backwards while the circuit holds, say, 200 V across the loop. Taking a rough triangular approximation over the full $t_{rr}\approx1.2\ \mu$s:

$$E_{\rm sw}\approx\frac{1}{2}V\,I_R\,t_{rr} = \frac{1}{2}(200)(2)(1.2\times10^{-6}) = 2.4\times10^{-4}\ \mathrm{J} = 240\ \mu\mathrm{J}.$$

At a 100 kHz switching frequency:

$$P_{\rm sw} = E_{\rm sw}f = (2.4\times10^{-4})(10^{5}) = 24\ \mathrm{W}.$$

**Twenty-four watts of pure switching loss** — against perhaps 1 W of conduction loss ($I_FV_F = 1\times1$ V). The diode's reverse recovery is not a detail; at this frequency it *is* the loss budget, and it would destroy the device.

*The three fixes, and their costs.*

1. **Gold-dope it.** Cut $\tau_T$ to 100 ns and the loss falls by 20× to about 1.2 W. Price: $I_0$ rises by $\sqrt{20} = 4.5$ ([2.2](02-02-ideal-diode-equation.md)), so $V_F$ rises by $V_T\ln4.5 = 39$ mV — negligible. This is why fast-recovery rectifiers exist and why they are always lifetime-killed.

2. **Switch slower.** Halving the frequency halves the loss but doubles the magnetics — usually the wrong direction, since the whole point of high frequency is small passives.

3. **Use a Schottky diode.** A metal–semiconductor junction conducts by *majority* carriers, so there is essentially **no stored minority charge and no reverse recovery at all** — $t_{rr}$ falls to the junction-capacitance charging time, tens of picoseconds. Loss goes to nearly zero. The price is a lower breakdown voltage and higher reverse leakage, which is why Schottky rectifiers own the low-voltage end (under ~100 V) and silicon PIN diodes the high-voltage end. Above that, silicon carbide Schottky diodes — which combine the majority-carrier switching with a critical field ten times higher — have taken over, and this calculation is precisely why they were worth developing.

## Watch out

- **You might add $C_j$ and $C_d$ and worry about which dominates.** They differ by three or four orders of magnitude in their respective regimes, so in practice you use $C_j$ under reverse bias and $C_d$ under forward bias and ignore the other entirely.
- **You might think junction capacitance rises with reverse bias.** It *falls*, as $(V_{bi}-V)^{-1/2}$ — more reverse bias means a wider depletion region means smaller capacitance. This is what makes a varactor tune.
- **You might forget the area in a $1/C^2$ extraction.** The formula is per unit area; a measured capacitance carries $A$, so the doping formula carries $A^2$. Getting the area wrong by 2× gives a doping wrong by 4×.
- **You might use the diffusion-capacitance formula in reverse bias.** $C_d = \tau_TI/V_T$ vanishes when $I\to-I_0$, correctly — but the derivation assumed injected minority carriers, which do not exist under reverse bias. There is nothing to store.
- **You might treat $t_{rr}$ as a fixed device property.** It depends on $I_F$ and on how hard the circuit yanks it off ($I_R$), through $t_s = \tau_T\ln(1+I_F/I_R)$. Datasheet values are quoted at a specified test condition and do not transfer.

## One-liner

> Reverse bias stores charge in the depletion layer, giving $C_j = \varepsilon_s/W$ and the $1/C^2$ profiling trick; forward bias stores it as injected minority carriers, giving $C_d = \tau_TI/V_T$ and the reverse-recovery penalty that Schottky diodes exist to avoid.

## Problems

**P1 (🟢)** A one-sided silicon junction has $N_d = 2\times10^{16}\ \mathrm{cm^{-3}}$, $V_{bi} = 0.85$ V, area $10^{-4}\ \mathrm{cm^2}$. (a) Find $C_{j0}$ per unit area and in farads. (b) Find $C_j$ at $-4$ V. (c) Find the depletion width at $-4$ V. (d) A varactor tunes an LC circuit; by what factor does the resonant frequency change between 0 and $-4$ V?

**P2 (🟡)** A short-base silicon diode has $W_B = 1\ \mu$m, $D_p = 12\ \mathrm{cm^2/s}$. (a) Find the transit time. (b) Find $C_d$ at 5 mA. (c) Find $r_d$ at 5 mA and the product $r_dC_d$; comment. (d) The base is thinned to 0.5 µm. Recompute (a) and (b) and state the scaling.

**P3 (🔴)** A $1/C^2$ measurement on a $p^+n$ junction of area $2\times10^{-3}\ \mathrm{cm^2}$ gives: $V=0$, $C = 100$ pF; $V=-1$, $C=70.7$ pF; $V=-3$, $C=50.0$ pF; $V=-7$, $C=35.4$ pF. (a) Tabulate $1/C^2$ and test for linearity. (b) Extract $N_d$ and $V_{bi}$. (c) Find the depth probed at each bias. (d) Now suppose the sample instead gave $C = 100, 74, 58, 44$ pF at the same biases. Show the plot is no longer straight, and determine qualitatively whether the doping increases or decreases with depth.

<details>
<summary>Solutions</summary>

**P1** (a) $$C_{j0}' = \sqrt{\frac{q\varepsilon_sN_d}{2V_{bi}}} = \sqrt{\frac{(1.602\times10^{-19})(1.04\times10^{-12})(2\times10^{16})}{2(0.85)}} = \sqrt{\frac{3.332\times10^{-15}}{1.70}} = \sqrt{1.960\times10^{-15}}$$

$$= 4.43\times10^{-8}\ \mathrm{F/cm^2} = 44.3\ \mathrm{nF/cm^2}.$$

Times the area: $C_{j0} = (4.43\times10^{-8})(10^{-4}) = 4.43\times10^{-12}\ \mathrm{F} = 4.43\ \mathrm{pF}$.

(b) $$C_j(-4) = \frac{C_{j0}}{\sqrt{1-V/V_{bi}}} = \frac{4.43}{\sqrt{1+4/0.85}} = \frac{4.43}{\sqrt{5.706}} = \frac{4.43}{2.389} = 1.85\ \mathrm{pF}.$$

(c) $$W = \frac{\varepsilon_sA}{C_j} = \frac{(1.04\times10^{-12})(10^{-4})}{1.85\times10^{-12}} = 5.62\times10^{-5}\ \mathrm{cm} = 0.562\ \mu\mathrm{m}.$$

(Check directly: $W = \sqrt{2\varepsilon_s(V_{bi}-V)/qN_d} = \sqrt{2(1.04\times10^{-12})(4.85)/((1.602\times10^{-19})(2\times10^{16}))} = \sqrt{3.149\times10^{-9}} = 5.61\times10^{-5}$ ✓.)

(d) $f_0 = 1/(2\pi\sqrt{LC})$, so $f\propto C^{-1/2}$:

$$\frac{f(-4)}{f(0)} = \sqrt{\frac{C_j(0)}{C_j(-4)}} = \sqrt{\frac{4.43}{1.85}} = \sqrt{2.394} = 1.55.$$

A 55% tuning range from 4 volts — which is exactly how a voltage-controlled oscillator sweeps, and why varactors are specified by their capacitance ratio.

**P2** (a) $$\tau_T = \frac{W_B^2}{2D_p} = \frac{(10^{-4})^2}{2(12)} = \frac{10^{-8}}{24} = 4.17\times10^{-10}\ \mathrm{s} = 417\ \mathrm{ps}.$$

(b) $$C_d = \frac{\tau_TI}{V_T} = \frac{(4.17\times10^{-10})(5\times10^{-3})}{0.0259} = \frac{2.083\times10^{-12}}{0.0259} = 8.04\times10^{-11}\ \mathrm{F} = 80.4\ \mathrm{pF}.$$

(c) $$r_d = \frac{V_T}{I} = \frac{0.0259}{5\times10^{-3}} = 5.18\ \Omega, \qquad r_dC_d = (5.18)(8.04\times10^{-11}) = 4.16\times10^{-10}\ \mathrm{s} = \tau_T\ \checkmark.$$

The product is the transit time exactly, independent of current — as the general result predicts. Physically: raising the current lowers the resistance and raises the capacitance in exact proportion, so the intrinsic RC speed limit is fixed by geometry and diffusivity alone. You cannot bias your way to a faster diode; you have to build a thinner one.

(d) $W_B = 0.5\ \mu$m:

$$\tau_T = \frac{(0.5\times10^{-4})^2}{24} = \frac{2.5\times10^{-9}}{24} = 1.04\times10^{-10}\ \mathrm{s} = 104\ \mathrm{ps},$$

$$C_d = \frac{(1.04\times10^{-10})(5\times10^{-3})}{0.0259} = 20.1\ \mathrm{pF}.$$

**Halving the base quartered both** — the $W_B^2$ scaling. This quadratic is the reason base and channel dimensions have been the relentless target of every process generation: a linear shrink buys a quadratic speed-up.

**P3** (a) $1/C^2$ with $C$ in farads:

| $V$ (V) | $C$ (pF) | $1/C^2$ ($\mathrm{F^{-2}}$) |
|---|---|---|
| 0 | 100 | $1.000\times10^{20}$ |
| $-1$ | 70.7 | $2.000\times10^{20}$ |
| $-3$ | 50.0 | $4.000\times10^{20}$ |
| $-7$ | 35.4 | $7.980\times10^{20}$ |

Successive slopes: $(2.000-1.000)/(-1) = -1.000\times10^{20}$; $(4.000-2.000)/(-2) = -1.000\times10^{20}$; $(7.980-4.000)/(-4) = -0.995\times10^{20}$.

**Constant to 0.5% — a straight line**, so the doping is uniform over the probed depth.

(b) Slope magnitude $1.00\times10^{20}\ \mathrm{F^{-2}V^{-1}}$, $A^2 = (2\times10^{-3})^2 = 4\times10^{-6}\ \mathrm{cm^4}$:

$$N_d = \frac{2}{q\varepsilon_sA^2\,|{\rm slope}|} = \frac{2}{(1.602\times10^{-19})(1.04\times10^{-12})(4\times10^{-6})(1.00\times10^{20})}.$$

Denominator: $(1.602\times10^{-19})(1.04\times10^{-12}) = 1.666\times10^{-31}$; $\times4\times10^{-6} = 6.665\times10^{-37}$; $\times10^{20} = 6.665\times10^{-17}$.

$$N_d = \frac{2}{6.665\times10^{-17}} = 3.00\times10^{16}\ \mathrm{cm^{-3}}.$$

*Intercept:* extrapolating from $V=0$: $V_{bi} = (1.000\times10^{20})/(1.00\times10^{20}) = 1.00$ V.

That is high for silicon — the theoretical value for $N_d = 3\times10^{16}$ against a $p^+$ side at $10^{19}$ is $0.0259\ln(3\times10^{35}/10^{20}) = 0.0259(35.6) = 0.92$ V. The 0.08 V discrepancy is typical and usually attributed to the difference between the true $V_{bi}$ and the extrapolated intercept (the depletion approximation overestimates it by about $2k_BT/q = 52$ mV, a standard correction).

(c) Depth $x = \varepsilon_sA/C$:

| $V$ | $C$ | $x = \varepsilon_sA/C$ |
|---|---|---|
| 0 | 100 pF | $(1.04\times10^{-12})(2\times10^{-3})/10^{-10} = 2.08\times10^{-5}$ cm $= 0.21$ µm |
| $-1$ | 70.7 pF | 0.29 µm |
| $-3$ | 50.0 pF | 0.42 µm |
| $-7$ | 35.4 pF | 0.59 µm |

So this sweep profiled 0.21–0.59 µm below the junction. To probe deeper you need more reverse bias — and eventually you hit breakdown, which is the fundamental depth limit of C–V profiling. (Probing *shallower* than 0.21 µm requires forward bias, where the technique fails because diffusion capacitance takes over — so the near-surface region is a blind spot, and is characterized by other means such as spreading-resistance or SIMS.)

(d) With $C = 100, 74, 58, 44$ pF:

| $V$ | $1/C^2$ ($\times10^{20}$) | slope to next |
|---|---|---|
| 0 | 1.000 | |
| $-1$ | 1.826 | $-0.826$ |
| $-3$ | 2.973 | $-0.574$ |
| $-7$ | 5.165 | $-0.548$ |

The slope magnitude **decreases** with reverse bias (0.826 → 0.574 → 0.548), so the plot is concave — not a straight line.

Since $N(x)\propto1/|{\rm slope}|$, a *decreasing* slope magnitude means an **increasing** doping. The extracted values:

$$N \propto \frac{1}{|{\rm slope}|}: \quad \frac{1}{0.826} = 1.21, \quad \frac{1}{0.574} = 1.74, \quad \frac{1}{0.548} = 1.82,$$

so the doping rises by about 50% between the shallowest and deepest points probed and then flattens.

**The doping increases with depth.** Physically this is the signature of a junction formed by diffusing or implanting the $p^+$ dopant *into* a substrate: near the metallurgical junction the $p$-type tail partially compensates the $n$-type background, so the *net* $n$-doping is suppressed there and recovers to the full substrate value deeper in. It is an extremely common profile, and spotting it in a C–V sweep — rather than blindly fitting a straight line and quoting one number — is precisely the value of the technique.

</details>

## Flashback

**From Lesson 2.1 (Junction electrostatics):** A one-sided $p^+n$ junction has $N_d = 10^{16}\ \mathrm{cm^{-3}}$ and $V_{bi} = 0.835$ V. (a) Find $W$ at zero bias and at $-9$ V. (b) Find $C_j$ per unit area at both. (c) Verify that the ratio of capacitances equals the inverse ratio of widths.

<details>
<summary>Solution</summary>

(a) $$W(0) = \sqrt{\frac{2(1.04\times10^{-12})(0.835)}{(1.602\times10^{-19})(10^{16})}} = 3.29\times10^{-5}\ \mathrm{cm} = 0.329\ \mu\mathrm{m}.$$

At $-9$ V, $V_{bi}-V = 9.835$ V:

$$W(-9) = 0.329\times\sqrt{\frac{9.835}{0.835}} = 0.329\times\sqrt{11.78} = 0.329\times3.432 = 1.13\ \mu\mathrm{m}.$$

(b) $$C_j(0) = \frac{\varepsilon_s}{W} = \frac{1.04\times10^{-12}}{3.29\times10^{-5}} = 3.16\times10^{-8}\ \mathrm{F/cm^2} = 31.6\ \mathrm{nF/cm^2},$$

$$C_j(-9) = \frac{1.04\times10^{-12}}{1.13\times10^{-4}} = 9.20\times10^{-9}\ \mathrm{F/cm^2} = 9.20\ \mathrm{nF/cm^2}.$$

(c) $$\frac{C_j(0)}{C_j(-9)} = \frac{31.6}{9.20} = 3.43, \qquad \frac{W(-9)}{W(0)} = \frac{1.13}{0.329} = 3.43 \ \checkmark.$$

They match exactly, because $C_j = \varepsilon_s/W$ with no other bias dependence — which is the content of the claim that the depletion capacitance is *exactly* a parallel-plate capacitor with a voltage-dependent plate spacing. (And note $3.43 = \sqrt{11.78}$, the square-root law showing through.)

</details>

## Connections

- **Backward:** $C_j$ is $W(V)$ from [2.1](02-01-junction-electrostatics.md) read as a plate separation; $C_d$ is the stored charge behind [2.2](02-02-ideal-diode-equation.md)'s injected profiles.
- **Forward:** [2.5](02-05-metal-semiconductor-heterojunctions.md) explains why the Schottky diode escapes reverse recovery entirely; [3.4](03-04-threshold-voltage-cv.md) runs the identical C–V analysis on a MOS capacitor, where the same technique extracts oxide thickness and substrate doping.
- **Sideways:** "stored charge equals current times lifetime" is the same steady-state population argument as a well-mixed reactor's residence time in [`reaction-engineering`](../../reaction-engineering/syllabus.md), and as the mean-life relation in radioactive equilibrium ([`intro-nuclear-engineering` 1.4](../../intro-nuclear-engineering/lessons/01-04-decay-chains-equilibrium.md)).
