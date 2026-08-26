# Semiconductor Devices · Lesson 3.3: The MOS capacitor

> ⏱ ~15 min · Module 3: Transistors · Builds on: [2.1 Junction electrostatics](02-01-junction-electrostatics.md), [1.1 Carriers, doping and the Fermi level](01-01-carriers-doping-fermi-level.md) · Unlocks: [3.4 Threshold voltage and the C–V curve](03-04-threshold-voltage-cv.md), [3.5 The MOSFET I–V](03-05-mosfet-iv.md)

## Why this matters

The MOSFET is the most manufactured object in history — something like $10^{22}$ of them exist. And at its heart is a structure so simple it barely looks like a device: a metal plate, an insulator, and a slab of silicon. A capacitor.

What makes it a *transistor* is that one of the plates is a semiconductor, and a semiconductor's carrier concentration responds exponentially to potential. Put a voltage on the gate and you do not merely store charge on a plate — you **change what the silicon underneath is made of**, from $p$-type to depleted to effectively $n$-type. That inversion layer is the channel, and gating it on and off is the whole of digital electronics.

This lesson analyzes the capacitor alone, with no source or drain. Get the three regimes and the threshold condition right here and [3.4](03-04-threshold-voltage-cv.md) and [3.5](03-05-mosfet-iv.md) are bookkeeping.

## The idea

Take a $p$-type substrate with a thin oxide and a gate on top. Sweep the gate voltage from negative to positive and watch the silicon surface pass through three regimes.

**Accumulation ($V_G$ negative).** The negative gate attracts holes — the majority carriers — to the surface. A thin, dense sheet of mobile holes piles up right against the oxide. Since those charges sit essentially *at* the interface, the structure is just a parallel-plate capacitor with the oxide as dielectric: $C = C_{ox}$, the maximum possible.

**Depletion ($V_G$ slightly positive).** Now the gate repels holes. They retreat, leaving behind the fixed negative acceptor ions — exactly the depletion region of [2.1](02-01-junction-electrostatics.md), but created by a gate instead of by a junction. The silicon's charge is now spread over a depletion width $W$, which acts as a *second capacitor in series* with the oxide. Total capacitance drops. And as $V_G$ rises, $W$ grows and $C$ keeps falling.

**Inversion ($V_G$ large).** Here is the interesting part. Pushing the bands down far enough eventually brings $E_c$ at the surface close to $E_F$ — so the surface, though doped $p$-type, now has more *electrons* than holes. It has [inverted](../reference.md#inversion). Those electrons form a thin conducting sheet: the channel.

And once inversion starts, something abrupt happens. Electron density depends *exponentially* on surface potential, so a tiny additional band bending produces an enormous increase in inversion charge. The inversion layer takes over from the depletion region as the sink for further gate charge, and **the depletion width stops growing** — it pins at a maximum value $W_{\max}$. That pinning is what makes "threshold voltage" a sharp, well-defined quantity rather than a gradual transition.

The conventional threshold condition — surface potential $\psi_s = 2\phi_F$ — is the point where the surface electron density equals the bulk hole density, i.e. the surface is exactly as strongly $n$-type as the bulk is $p$-type. It is a convention, not a phase transition, but the exponential makes it a good one.

## The formal version

**Structure.** Gate (metal or heavily doped polysilicon), oxide of thickness $t_{ox}$ and permittivity $\varepsilon_{ox} = 3.9\varepsilon_0 = 3.45\times10^{-13}$ F/cm, on $p$-type silicon of doping $N_a$.

**Oxide capacitance per unit area.**

$$\boxed{\;C_{ox} = \frac{\varepsilon_{ox}}{t_{ox}}.\;}$$

Useful anchor: at $t_{ox} = 10$ nm, $C_{ox} = 3.45\times10^{-7}\ \mathrm{F/cm^2} = 345\ \mathrm{nF/cm^2}$.

**Bulk potential.** How far the Fermi level sits below midgap in the neutral bulk, in volts:

$$\phi_F = V_T\ln\frac{N_a}{n_i}.$$

For $N_a = 10^{17}$: $\phi_F = 0.0259\ln(10^7) = 0.417$ V.

**Surface potential.** $\psi_s$ is the total band bending from bulk to surface (positive when bands bend *down*, i.e. toward $n$-type). The regimes:

| $\psi_s$ | Regime | Surface condition |
|---|---|---|
| $\psi_s<0$ | Accumulation | holes piled up, $p_s>N_a$ |
| $\psi_s = 0$ | Flat band | no bending, $p_s = N_a$ |
| $0<\psi_s<\phi_F$ | Depletion | carriers swept out |
| $\psi_s = \phi_F$ | Intrinsic surface | $n_s = p_s = n_i$ |
| $\phi_F<\psi_s<2\phi_F$ | Weak inversion | $n_s>p_s$ but still small |
| $\psi_s\ge2\phi_F$ | **Strong inversion** | $n_s\ge N_a$ — the threshold condition |

*In words: bend the bands by twice the bulk potential and the surface is as strongly $n$-type as the bulk is $p$-type.*

**Surface carrier density.** From [1.1](01-01-carriers-doping-fermi-level.md), with the bands bent by $\psi_s$:

$$n_s = n_{p0}e^{\psi_s/V_T} = \frac{n_i^2}{N_a}e^{\psi_s/V_T}, \qquad p_s = N_ae^{-\psi_s/V_T}.$$

At $\psi_s = 2\phi_F$: $n_s = \dfrac{n_i^2}{N_a}\cdot\dfrac{N_a^2}{n_i^2} = N_a$ ✓ — which is exactly the definition.

**Depletion charge.** In depletion, the same Poisson solution as [2.1](02-01-junction-electrostatics.md) with a one-sided junction and $\psi_s$ playing the role of the junction voltage:

$$W = \sqrt{\frac{2\varepsilon_s\psi_s}{qN_a}}, \qquad Q_{dep} = -qN_aW = -\sqrt{2q\varepsilon_sN_a\psi_s}.$$

At threshold, $\psi_s = 2\phi_F$:

$$\boxed{\;W_{\max} = \sqrt{\frac{4\varepsilon_s\phi_F}{qN_a}}, \qquad Q_{dep}^{\max} = -\sqrt{4q\varepsilon_sN_a\phi_F}.\;}$$

**Why $W$ pins at $W_{\max}$.** Beyond threshold, $n_s\propto e^{\psi_s/V_T}$ rises by a factor of 10 for every 60 mV of extra bending. To supply a further increment of gate charge the silicon needs only a *microscopic* increase in $\psi_s$ if it uses inversion electrons, versus a large one if it must widen the depletion region. The exponential wins overwhelmingly, so $\psi_s$ essentially freezes at $\approx2\phi_F$ and all additional gate charge goes into the inversion layer:

$$Q_{inv} = -C_{ox}(V_G-V_T)\ \text{for } V_G>V_T .$$

*In words: past threshold the MOS capacitor is a plain parallel-plate capacitor again, and the charge it stores is the channel.* That linear relation is the foundation of the MOSFET I–V in [3.5](03-05-mosfet-iv.md).

**Gate voltage bookkeeping.** The applied voltage divides between the oxide and the silicon:

$$V_G = V_{FB}+\psi_s+V_{ox}, \qquad V_{ox} = \frac{-Q_s}{C_{ox}},$$

where $Q_s$ is the total charge per unit area in the silicon (negative for $p$-type in depletion/inversion) and $V_{FB}$ is the **flat-band voltage** — the gate voltage needed to produce zero band bending.

**Flat-band voltage.** Two contributions:

$$\boxed{\;V_{FB} = \phi_{MS}-\frac{Q_f}{C_{ox}},\;}$$

- $\phi_{MS} = \phi_M-\phi_S$, the gate–semiconductor work-function difference. Even with no applied voltage, dissimilar materials in contact bend the bands ([2.5](02-05-metal-semiconductor-heterojunctions.md)); $V_{FB}$ undoes that.
- $Q_f$, the **fixed oxide charge** at the Si–SiO₂ interface — always positive in practice, a residue of the oxidation process. Positive oxide charge attracts electrons, so it shifts $V_{FB}$ (and hence $V_T$) *negative*.

Historically $Q_f$ was the barrier to MOS technology at all: 1960s oxides were contaminated with mobile sodium ions that drifted under bias, making the threshold voltage wander unpredictably. Solving that — with cleaner processing, chlorine gettering, and phosphosilicate glass to trap the sodium — is what made MOS manufacturable. **The MOSFET was invented in 1930 (Lilienfeld) and worked in 1960, and the thirty-year gap was interface quality**, not device physics.

**Capacitance in the three regimes.** The measured small-signal $C$ is the oxide capacitance in series with the silicon capacitance:

$$\frac{1}{C} = \frac{1}{C_{ox}}+\frac{1}{C_s}.$$

| Regime | $C_s$ | Total $C$ |
|---|---|---|
| Accumulation | very large (mobile holes at the surface) | $\approx C_{ox}$ |
| Depletion | $\varepsilon_s/W$, falling as $W$ grows | falls with $V_G$ |
| Inversion, low frequency | very large (mobile electrons) | back up to $C_{ox}$ |
| Inversion, **high frequency** | pinned at $\varepsilon_s/W_{\max}$ | $C_{\min} = \dfrac{C_{ox}\varepsilon_s/W_{\max}}{C_{ox}+\varepsilon_s/W_{\max}}$ |

*In words: the C–V curve falls from $C_{ox}$ through a minimum and then either recovers (slow measurement) or stays down (fast measurement).*

The high/low-frequency split is worth understanding because it is a *measurement* choice with real information in it. The inversion layer must be supplied with minority carriers, which in a capacitor with no source/drain can only come from thermal generation in the depletion region — a slow process, with a time constant of milliseconds to seconds. Sweep the gate slowly and the inversion layer keeps up, giving the low-frequency curve. Sweep it at 1 MHz and it cannot, so the AC signal is carried by the depletion edge instead, and $C$ stays at $C_{\min}$. **In a real MOSFET the source and drain supply electrons instantly, so the channel always behaves as "low frequency" regardless of speed** — which is precisely why a MOSFET works at gigahertz.

## Picture

![A four-panel figure. Panels one to three are band diagrams of the MOS structure under accumulation, depletion and inversion, showing the gate, oxide and silicon with the bands flat, bent slightly, and bent enough that E_c approaches E_F at the surface, with the accumulated hole sheet, the depletion region, and the thin inversion electron layer drawn respectively. Panel four is the capacitance-voltage curve, starting at C_ox in accumulation, falling through depletion to a minimum, and then either rising back to C_ox for the low-frequency case or staying flat at C_min for the high-frequency case, with the threshold voltage marked at the knee.](assets/03-03-fig1.svg)

The first three panels are the same structure at three gate voltages — only the band bending changes. Watch the surface: holes crowd it, then are swept away leaving fixed negative ions, then electrons appear in a layer just a few nanometres thick. That third panel *is* the channel of a MOSFET.

The fourth panel is the measurement. $C$ starts at the oxide value, falls as the depletion region widens, and bottoms out when the depletion width pins at $W_{\max}$. Whether it then recovers tells you how fast you swept — and the gap between the two curves is a direct measure of how quickly the substrate can generate minority carriers, which is a lifetime measurement in disguise.

## Worked examples

**Example 1 (the full MOS calculation).** An MOS capacitor has $t_{ox} = 8$ nm, $N_a = 5\times10^{17}\ \mathrm{cm^{-3}}$, an $n^+$ polysilicon gate ($\phi_{MS} = -1.0$ V), and fixed oxide charge $Q_f/q = 5\times10^{10}\ \mathrm{cm^{-2}}$. Find $C_{ox}$, $\phi_F$, $W_{\max}$, $Q_{dep}^{\max}$, $V_{FB}$, and $C_{\min}$.

*Oxide capacitance.*

$$C_{ox} = \frac{\varepsilon_{ox}}{t_{ox}} = \frac{3.45\times10^{-13}}{8\times10^{-7}} = 4.31\times10^{-7}\ \mathrm{F/cm^2} = 431\ \mathrm{nF/cm^2}.$$

*Bulk potential.*

$$\phi_F = V_T\ln\frac{N_a}{n_i} = 0.0259\ln\frac{5\times10^{17}}{10^{10}} = 0.0259\ln(5\times10^{7}) = 0.0259(17.73) = 0.459\ \mathrm{V}.$$

*Maximum depletion width.*

$$W_{\max} = \sqrt{\frac{4\varepsilon_s\phi_F}{qN_a}} = \sqrt{\frac{4(1.04\times10^{-12})(0.459)}{(1.602\times10^{-19})(5\times10^{17})}} = \sqrt{\frac{1.910\times10^{-12}}{8.01\times10^{-2}}} = \sqrt{2.384\times10^{-11}}$$

$$= 4.88\times10^{-6}\ \mathrm{cm} = 48.8\ \mathrm{nm}.$$

*Depletion charge.*

$$|Q_{dep}^{\max}| = qN_aW_{\max} = (1.602\times10^{-19})(5\times10^{17})(4.88\times10^{-6}) = 3.91\times10^{-7}\ \mathrm{C/cm^2}.$$

*Flat-band voltage.*

$$\frac{Q_f}{C_{ox}} = \frac{(1.602\times10^{-19})(5\times10^{10})}{4.31\times10^{-7}} = \frac{8.01\times10^{-9}}{4.31\times10^{-7}} = 0.0186\ \mathrm{V},$$

$$V_{FB} = \phi_{MS}-\frac{Q_f}{C_{ox}} = -1.0-0.0186 = -1.019\ \mathrm{V}.$$

(The oxide charge contributes only 19 mV here — a *good* oxide. In 1965 this term was volts, and unstable.)

*Minimum capacitance.*

$$C_{s,\min} = \frac{\varepsilon_s}{W_{\max}} = \frac{1.04\times10^{-12}}{4.88\times10^{-6}} = 2.13\times10^{-7}\ \mathrm{F/cm^2},$$

$$C_{\min} = \frac{C_{ox}C_{s,\min}}{C_{ox}+C_{s,\min}} = \frac{(4.31\times10^{-7})(2.13\times10^{-7})}{6.44\times10^{-7}} = 1.43\times10^{-7}\ \mathrm{F/cm^2}.$$

$$\frac{C_{\min}}{C_{ox}} = \frac{1.43}{4.31} = 0.331.$$

**The C–V curve falls to 33% of its maximum** — and that ratio is itself a measurement: it depends only on $t_{ox}$ and $N_a$, so measuring $C_{ox}$ and $C_{\min}$ extracts both. That is the standard MOS characterization, and [3.4](03-04-threshold-voltage-cv.md) uses it.

**Example 2 (how sharply inversion switches on).** For the same device, compare the surface electron density at $\psi_s = \phi_F$, $2\phi_F$, and $2\phi_F+0.1$ V, and check the claim that the depletion width stops growing.

*Electron densities.* With $n_{p0} = n_i^2/N_a = 10^{20}/(5\times10^{17}) = 200\ \mathrm{cm^{-3}}$:

$$\psi_s = \phi_F = 0.459: \quad n_s = 200\,e^{0.459/0.0259} = 200\,e^{17.72} = 200(4.97\times10^{7}) = 9.9\times10^{9}\ \mathrm{cm^{-3}}.$$

(Equal to $n_i$ ✓ — this is the intrinsic surface, by definition.)

$$\psi_s = 2\phi_F = 0.918: \quad n_s = 200\,e^{35.44} = 200(2.50\times10^{15}) = 5.0\times10^{17}\ \mathrm{cm^{-3}}.$$

(Equal to $N_a$ ✓ — strong inversion, again by definition.)

$$\psi_s = 1.018: \quad n_s = 200\,e^{39.31} = 200(1.19\times10^{17}) = 2.4\times10^{19}\ \mathrm{cm^{-3}}.$$

**One hundred millivolts of extra bending multiplied the inversion charge by 47.5.** Meanwhile the depletion charge would grow only as $\sqrt{\psi_s}$:

$$\frac{W(1.018)}{W(0.918)} = \sqrt{\frac{1.018}{0.918}} = 1.053,$$

a 5% increase. So of the extra gate charge required, the inversion layer supplies 47× more per volt than the depletion region does — and the disparity grows exponentially with further bending.

*Quantifying the pinning.* If the depletion region were somehow forced to absorb the charge instead, $\psi_s$ would have to rise enough for $\sqrt{\psi_s}$ to grow by the same factor of 47.5, requiring $\psi_s\to 47.5^2\times0.918 = 2071$ V. Obviously impossible. **The surface potential is clamped at $\approx2\phi_F$ by the exponential**, varying by only a few tens of millivolts across the entire useful gate-voltage range.

*Why this matters.* That clamping is what makes $V_T$ meaningful. If $\psi_s$ kept rising with $V_G$, there would be no sharp threshold — just a gradual onset, and digital logic would have no clean "on" and "off". The exponential response of carrier density to potential, inherited straight from Boltzmann statistics in [1.1](01-01-carriers-doping-fermi-level.md), is what gives the transistor a switch-like character.

*And the flip side, which returns in [3.6](03-06-short-channel-effects-scaling.md):* below threshold, that same exponential means the current does not go to zero — it falls at 60 mV per decade and no faster. That is the subthreshold leakage that sets the floor on modern chip power.

## Watch out

- **You might think $\psi_s = 2\phi_F$ is a physical transition.** It is a *convention* marking where $n_s = N_a$. Nothing discontinuous happens there; the exponential just makes it a sharp enough marker to be useful. More careful treatments define threshold by the inversion charge reaching a specific value, and get slightly different $V_T$.
- **You might expect the depletion width to keep growing with $V_G$.** It pins at $W_{\max}$ once inversion sets in, because the inversion layer is an exponentially better charge sink. That pinning is why $C_{\min}$ exists and why $V_T$ is sharp.
- **You might confuse the high- and low-frequency C–V curves.** They differ only in whether the inversion layer can be supplied fast enough. A capacitor with no source/drain relies on thermal generation (slow); a MOSFET's channel is fed by the source and drain (instant), so a real transistor always behaves "low-frequency".
- **You might forget $V_{FB}$.** Work-function difference plus oxide charge routinely shifts the threshold by a volt or more — comparable to $V_T$ itself. It is not a correction term; it is a leading term.
- **You might use $\varepsilon_{ox}$ where $\varepsilon_s$ belongs.** Oxide is 3.9, silicon is 11.7 — a factor of three. The oxide capacitance uses $\varepsilon_{ox}/t_{ox}$; the depletion capacitance uses $\varepsilon_s/W$.

## One-liner

> A gate voltage does not just store charge on a plate — it changes what the silicon underneath is, from accumulated to depleted to inverted; and because carrier density is exponential in potential, the surface potential clamps at $2\phi_F$ and gives the transistor a sharp threshold.

## Problems

**P1 (🟢)** An MOS capacitor has $t_{ox} = 5$ nm and $N_a = 10^{17}\ \mathrm{cm^{-3}}$. (a) Find $C_{ox}$. (b) Find $\phi_F$. (c) Find $W_{\max}$. (d) Find $|Q_{dep}^{\max}|$.

**P2 (🟡)** For an MOS capacitor with $N_a = 2\times10^{16}\ \mathrm{cm^{-3}}$ and $t_{ox} = 20$ nm: (a) find $\phi_F$, $W_{\max}$, $C_{ox}$ and $C_{\min}$. (b) Find the ratio $C_{\min}/C_{ox}$. (c) The measured $C_{\min}/C_{ox}$ is 0.45 instead. What substrate doping does that imply, assuming $t_{ox}$ is correct? (d) Suggest one physical reason the measured doping might differ from the nominal.

**P3 (🔴)** A MOS capacitor on $p$-type silicon is swept from $-3$ V to $+3$ V. (a) Sketch (describe) the low- and high-frequency C–V curves and mark the regimes. (b) Explain quantitatively why the two curves differ only in inversion, estimating the inversion-response time constant for $\tau_g = 1\ \mu$s generation lifetime, $N_a = 10^{17}$, $W_{\max} = 0.1\ \mu$m. (c) A **deep-depletion** curve appears if the sweep is very fast. Explain what it is and why it goes *below* $C_{\min}$. (d) State how each of these three curves is used as a measurement.

<details>
<summary>Solutions</summary>

**P1** (a) $$C_{ox} = \frac{3.45\times10^{-13}}{5\times10^{-7}} = 6.90\times10^{-7}\ \mathrm{F/cm^2} = 690\ \mathrm{nF/cm^2}.$$

(b) $$\phi_F = 0.0259\ln\frac{10^{17}}{10^{10}} = 0.0259\ln(10^{7}) = 0.0259(16.12) = 0.417\ \mathrm{V}.$$

(c) $$W_{\max} = \sqrt{\frac{4(1.04\times10^{-12})(0.417)}{(1.602\times10^{-19})(10^{17})}} = \sqrt{\frac{1.735\times10^{-12}}{1.602\times10^{-2}}} = \sqrt{1.083\times10^{-10}} = 1.041\times10^{-5}\ \mathrm{cm} = 104\ \mathrm{nm}.$$

(d) $$|Q_{dep}^{\max}| = qN_aW_{\max} = (1.602\times10^{-19})(10^{17})(1.041\times10^{-5}) = 1.67\times10^{-7}\ \mathrm{C/cm^2}.$$

**P2** (a) $$\phi_F = 0.0259\ln\frac{2\times10^{16}}{10^{10}} = 0.0259\ln(2\times10^{6}) = 0.0259(14.51) = 0.376\ \mathrm{V}.$$

$$W_{\max} = \sqrt{\frac{4(1.04\times10^{-12})(0.376)}{(1.602\times10^{-19})(2\times10^{16})}} = \sqrt{\frac{1.564\times10^{-12}}{3.204\times10^{-3}}} = \sqrt{4.882\times10^{-10}} = 2.21\times10^{-5}\ \mathrm{cm} = 221\ \mathrm{nm}.$$

$$C_{ox} = \frac{3.45\times10^{-13}}{2\times10^{-6}} = 1.725\times10^{-7}\ \mathrm{F/cm^2},$$

$$C_{s,\min} = \frac{1.04\times10^{-12}}{2.21\times10^{-5}} = 4.71\times10^{-8}\ \mathrm{F/cm^2},$$

$$C_{\min} = \frac{(1.725\times10^{-7})(4.71\times10^{-8})}{1.725\times10^{-7}+4.71\times10^{-8}} = \frac{8.125\times10^{-15}}{2.196\times10^{-7}} = 3.70\times10^{-8}\ \mathrm{F/cm^2}.$$

(b) $$\frac{C_{\min}}{C_{ox}} = \frac{3.70\times10^{-8}}{1.725\times10^{-7}} = 0.214.$$

(c) A *higher* ratio means a *thinner* depletion region, hence *heavier* doping. Set

$$\frac{C_{\min}}{C_{ox}} = \frac{1}{1+C_{ox}W_{\max}/\varepsilon_s} = 0.45 \quad\Longrightarrow\quad \frac{C_{ox}W_{\max}}{\varepsilon_s} = \frac{1}{0.45}-1 = 1.222,$$

$$W_{\max} = \frac{1.222\,\varepsilon_s}{C_{ox}} = \frac{1.222(1.04\times10^{-12})}{1.725\times10^{-7}} = 7.37\times10^{-6}\ \mathrm{cm} = 73.7\ \mathrm{nm}.$$

Now solve $W_{\max} = \sqrt{4\varepsilon_s\phi_F/qN_a}$ for $N_a$, iterating because $\phi_F$ depends on $N_a$:

$$N_a = \frac{4\varepsilon_s\phi_F}{qW_{\max}^2} = \frac{4(1.04\times10^{-12})\phi_F}{(1.602\times10^{-19})(5.43\times10^{-11})} = \frac{4.16\times10^{-12}\phi_F}{8.70\times10^{-30}} = 4.78\times10^{17}\phi_F.$$

Guess $\phi_F = 0.45$: $N_a = 2.15\times10^{17}$, giving $\phi_F = 0.0259\ln(2.15\times10^7) = 0.437$. Iterate: $N_a = 4.78\times10^{17}(0.437) = 2.09\times10^{17}$, $\phi_F = 0.436$. Converged.

$$N_a \approx 2.1\times10^{17}\ \mathrm{cm^{-3}},$$

about **ten times** the nominal $2\times10^{16}$.

(d) Several plausible reasons, and distinguishing them matters:

- A **threshold-adjust implant** — a deliberate shallow boron dose near the surface, universal in CMOS to set $V_T$. C–V senses the doping in the depletion region near the surface, not the bulk wafer doping, so it correctly reports the implanted value. This is by far the most likely explanation and shows the measurement working as intended.
- **Boron pile-up** at the Si–SiO₂ interface during oxidation (boron segregates into the oxide, but subsequent anneals can redistribute it).
- An error in the assumed $t_{ox}$ — but the problem stipulated it is correct, and note that $C_{ox}$ is measured directly from the accumulation value anyway, so this is checkable.

The general point: a C–V sweep measures the *surface* doping profile, which in any real MOSFET is deliberately different from the substrate. Quoting "the substrate doping" from a C–V measurement without saying which region was probed is a common misreading.

**P3** (a) Both curves start at $C = C_{ox}$ for $V_G$ well negative (accumulation: mobile holes at the surface act as a plate). As $V_G$ rises past $V_{FB}$ the surface depletes and $C$ falls, as the depletion capacitance $\varepsilon_s/W$ enters in series. The fall continues until $W$ pins at $W_{\max}$ near $V_T$.

- **Low frequency (quasi-static):** past $V_T$ the inversion layer forms and can follow the AC signal, so the silicon looks like a good conductor again and $C$ **rises back to $C_{ox}$**.
- **High frequency (e.g. 1 MHz):** the inversion layer cannot be replenished fast enough, so the AC response comes from the depletion edge, and $C$ **stays flat at $C_{\min}$**.

(b) The inversion layer in a gated capacitor is supplied only by thermal generation in the depletion region ([1.3](01-03-generation-recombination.md)). The generation rate per unit area is

$$G = \frac{n_iW_{\max}}{2\tau_g} = \frac{(10^{10})(10^{-5})}{2(10^{-6})} = 5\times10^{10}\ \mathrm{cm^{-2}s^{-1}}.$$

The inversion charge needed is of order $N_a\times$ (inversion layer thickness $\sim5$ nm), or roughly

$$n_{inv} \approx (10^{17})(5\times10^{-7}) = 5\times10^{10}\ \mathrm{cm^{-2}}.$$

$$\tau_{\rm inv} \approx \frac{n_{inv}}{G} = \frac{5\times10^{10}}{5\times10^{10}} = 1\ \mathrm{s}.$$

**About a second.** So a 1 MHz signal — a million times faster — sees no inversion response at all, while a sweep taking many seconds per point sees full response. That enormous separation is why the two curves are so cleanly distinct.

(And it confirms the earlier claim: in a MOSFET, the source and drain are $n^+$ regions in direct contact with the channel, so electrons arrive by *majority-carrier* conduction in nanoseconds instead of by generation in seconds. A MOSFET's channel is always in equilibrium with its source.)

(c) **Deep depletion** occurs if the gate voltage is ramped *faster* than the inversion layer can form (say, a 1 V/ms ramp against the 1 s response time). The silicon has no inversion charge available, so it must respond to the increasing gate voltage the only way it can — by widening the depletion region further.

$W$ therefore grows **past $W_{\max}$**, and since $C_s = \varepsilon_s/W$, the capacitance falls **below $C_{\min}$** and keeps falling as long as the ramp continues. It is a non-equilibrium state: hold the voltage and the curve slowly relaxes up to the equilibrium high-frequency value as generation fills the inversion layer.

(d) Each curve is a different instrument:

- **Accumulation value** → $C_{ox}$, hence the **oxide thickness** $t_{ox} = \varepsilon_{ox}/C_{ox}$. The most basic process monitor there is.
- **Depletion slope / $C_{\min}$** → the **substrate doping profile** near the surface, exactly as in P2, via $1/C^2$ differentiation just like the junction case in [2.3](02-03-junction-diffusion-capacitance.md).
- **Voltage shift of the whole curve** → $V_{FB}$, hence the **fixed oxide charge** $Q_f$ and any mobile-ion contamination. Sweeping at two temperatures (bias-temperature stress) makes mobile sodium drift and shifts the curve, which is precisely the test that diagnosed the 1960s contamination problem.
- **Gap between low- and high-frequency curves in inversion** → **interface trap density** $D_{it}$, since traps respond at intermediate frequencies and distort the low-frequency curve. This is the standard interface-quality measurement, and it is the one that showed SiC's Si/SiO₂ problem in [2.4](02-04-reverse-breakdown.md).
- **Deep-depletion relaxation rate** → the **generation lifetime** $\tau_g$, a purity measure (the Zerbst technique).

Five distinct process parameters from one swept capacitor. It is hard to overstate how central this measurement is to semiconductor manufacturing.

</details>

## Flashback

**From Lesson 2.1 (Junction electrostatics):** A one-sided junction into $N_a = 10^{17}\ \mathrm{cm^{-3}}$ has 0.9 V across it. (a) Find the depletion width and the charge per unit area. (b) Compare with the MOS $W_{\max}$ for the same doping computed in P1(c), and explain why they are similar.

<details>
<summary>Solution</summary>

(a) $$W = \sqrt{\frac{2\varepsilon_s(0.9)}{qN_a}} = \sqrt{\frac{2(1.04\times10^{-12})(0.9)}{(1.602\times10^{-19})(10^{17})}} = \sqrt{\frac{1.872\times10^{-12}}{1.602\times10^{-2}}} = \sqrt{1.169\times10^{-10}} = 1.081\times10^{-5}\ \mathrm{cm} = 108\ \mathrm{nm}.$$

$$|Q| = qN_aW = (1.602\times10^{-19})(10^{17})(1.081\times10^{-5}) = 1.73\times10^{-7}\ \mathrm{C/cm^2}.$$

(b) P1(c) gave $W_{\max} = 104$ nm for the MOS case. They agree to within 4%.

**They are the same calculation.** In both cases you are solving Poisson's equation in a uniformly doped, fully depleted region with a fixed total potential drop across it. The junction has $V_{bi}-V = 0.9$ V; the MOS capacitor has $\psi_s = 2\phi_F = 0.834$ V. The 4% difference in width is just the square root of the 8% difference in potential.

The physical unity is worth stating: **a MOS capacitor in depletion is a one-sided junction whose "other side" is the gate.** The gate holds the positive charge that the $n$-side would have held, and the oxide is an extra series capacitance the junction does not have. That is the only structural difference, and it is why every formula from [2.1](02-01-junction-electrostatics.md) transfers directly.

</details>

## Connections

- **Backward:** the depletion analysis is [2.1](02-01-junction-electrostatics.md) with a gate replacing the $n$-side; the exponential surface density is [1.1](01-01-carriers-doping-fermi-level.md); the work-function difference is [2.5](02-05-metal-semiconductor-heterojunctions.md).
- **Forward:** [3.4](03-04-threshold-voltage-cv.md) turns the charge bookkeeping into $V_T$; [3.5](03-05-mosfet-iv.md) adds a source and drain and lets the inversion layer carry current.
- **Sideways:** the series-capacitance decomposition $1/C = 1/C_{ox}+1/C_s$ is the same "resistances in series" reasoning as thermal circuits in [`heat-transfer`](../../heat-transfer/syllabus.md); and the exponential response of surface charge to potential is the same Boltzmann relation that gives an electrolyte its Debye layer.
