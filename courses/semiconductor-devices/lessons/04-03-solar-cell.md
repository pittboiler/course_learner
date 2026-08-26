# Semiconductor Devices · Lesson 4.3: The solar cell

> ⏱ ~15 min · Module 4: Optoelectronic devices and fabrication · Builds on: [4.1 Light and semiconductors](04-01-light-absorption-emission-detection.md), [2.2 The ideal-diode equation](02-02-ideal-diode-equation.md) · Unlocks: [4.4 A taste of device fabrication](04-04-device-fabrication.md)

## Why this matters

A solar cell is a p–n junction operated in a quadrant you have not used yet: positive voltage, negative current — **delivering** power rather than consuming it. Everything needed is already in place; this lesson mostly reinterprets [2.2](02-02-ideal-diode-equation.md)'s equation with a photogenerated term added.

What makes it worth a lesson is the efficiency limit. The band gap sets both the voltage you can extract and the fraction of the spectrum you can absorb, and those pull in **opposite** directions. That single tension produces the [Shockley–Queisser limit](../reference.md#shockleyqueisser-limit) of about 33% for a single junction, explains why silicon at 1.12 eV is nearly optimal by luck, and explains exactly what multi-junction cells do to beat it.

## The idea

Illuminate a junction. Photons absorbed within a diffusion length of the depletion region create pairs; the built-in field sweeps them apart — electrons to the $n$-side, holes to the $p$-side. That is a current, flowing in the *reverse* direction, and it exists with no applied bias at all.

Now leave the terminals open. The photocurrent has nowhere to go, so charge accumulates until the resulting forward bias drives a recombination current exactly cancelling it. That equilibrium voltage is $V_{oc}$, and it is capped by how far you can split the quasi-Fermi levels — which is capped by the band gap.

Short the terminals instead and the full photocurrent flows at zero voltage: $I_{sc}$. Between those extremes lies a knee where the product $IV$ is maximized, and how square that knee is — the **fill factor** — measures how good the diode is.

Then the central trade. A **wide** gap gives high voltage but ignores all photons below $E_g$; silicon at 1.12 eV already throws away 20% of the solar spectrum's energy as unabsorbed infrared. A **narrow** gap absorbs almost everything but each photon's excess energy above $E_g$ is immediately lost as heat when the carrier thermalizes to the band edge, and the voltage is low. Optimizing gives a broad maximum near 1.3–1.4 eV, which is why silicon (1.12) and GaAs (1.42) both work well and why nothing exotic is needed.

## The formal version

**The illuminated diode equation.** Add the photogenerated current to [2.2](02-02-ideal-diode-equation.md):

$$\boxed{\;I = I_0\left(e^{qV/nk_BT}-1\right)-I_L.\;}$$

*In words: the dark diode current minus a constant photocurrent.* Illumination shifts the whole I–V curve **down** by $I_L$, dragging part of it into the fourth quadrant ($V>0$, $I<0$) where the device delivers power.

By convention solar-cell curves are drawn with the sign flipped, $I = I_L-I_0(e^{qV/nk_BT}-1)$, so the working quadrant appears in the first.

**Short-circuit current.** At $V=0$:

$$I_{sc} = I_L = q\,A\!\int \eta(\lambda)\,\Phi(\lambda)\,d\lambda,$$

using the quantum efficiency of [4.1](04-01-light-absorption-emission-detection.md). *In words: every collected photon contributes one electron.* For silicon under AM1.5 (1000 W/m²), $J_{sc}$ reaches about **42 mA/cm²** at the theoretical limit and 40–43 mA/cm² in the best real cells.

**Open-circuit voltage.** Setting $I=0$:

$$\boxed{\;V_{oc} = \frac{nk_BT}{q}\ln\left(\frac{I_L}{I_0}+1\right)\approx nV_T\ln\frac{I_L}{I_0}.\;}$$

*In words: the open-circuit voltage is the forward bias at which the dark recombination current equals the photocurrent.*

Two crucial readings. First, $V_{oc}$ grows only **logarithmically** with light intensity: ten suns adds just $V_T\ln10 = 60$ mV. Second, and more useful, $I_0\propto n_i^2\propto e^{-E_g/k_BT}$ ([2.2](02-02-ideal-diode-equation.md)), so

$$V_{oc}\approx\frac{E_g}{q}-V_T\ln\frac{(\text{prefactor})}{I_L},$$

giving the empirical rule $V_{oc}\approx E_g/q-0.4\ \mathrm{V}$. **Reducing $I_0$ — that is, improving material quality and passivation ([1.3](01-03-generation-recombination.md)) — is the only way to push $V_{oc}$ toward the gap.** Silicon's record cells reach 0.75 V against a 1.12 V gap; the 0.37 V deficit is almost entirely recombination.

**Fill factor and efficiency.**

$$\mathrm{FF} = \frac{P_{\max}}{V_{oc}I_{sc}} = \frac{V_{mp}I_{mp}}{V_{oc}I_{sc}}, \qquad \boxed{\;\eta = \frac{P_{\max}}{P_{\rm in}} = \frac{V_{oc}I_{sc}\,\mathrm{FF}}{P_{\rm in}}.\;}$$

*In words: fill factor measures how square the knee is — how close the actual maximum-power rectangle comes to the $V_{oc}\times I_{sc}$ box.*

An ideal diode's fill factor depends only on the normalized $V_{oc}$:

$$\mathrm{FF}_0 \approx \frac{v_{oc}-\ln(v_{oc}+0.72)}{v_{oc}+1}, \qquad v_{oc} = \frac{V_{oc}}{nV_T}.$$

For silicon with $V_{oc} = 0.65$ V and $n=1$, $v_{oc} = 25.1$ and $\mathrm{FF}_0 = 0.84$. Real cells reach 0.78–0.83; the shortfall is series and shunt resistance.

**Parasitic resistances.** Two, and they attack different parts of the curve:

$$I = I_L-I_0\left(e^{q(V+IR_s)/nk_BT}-1\right)-\frac{V+IR_s}{R_{sh}}.$$

- **Series resistance $R_s$** — from the emitter sheet, the metal fingers, and the contacts. It flattens the curve *near $V_{oc}$* and cuts FF. It does not affect $I_{sc}$ much or $V_{oc}$ at all.
- **Shunt resistance $R_{sh}$** — from edge leakage and defects. It tilts the curve *near $I_{sc}$*. It does not affect $I_{sc}$ much but does reduce $V_{oc}$.

*In words: series resistance is a problem at high current, shunt resistance at low.* Their signatures on a measured I–V are distinct — a sloped region near $V_{oc}$ versus near $I_{sc}$ — which is how cells are diagnosed on a production line.

The series-resistance number worth carrying: at $J = 35\ \mathrm{mA/cm^2}$, a specific resistance of $1\ \Omega\cdot\mathrm{cm^2}$ costs $35$ mV — about 5% of $V_{oc}$. That is why front metallization is a serious design problem: fingers must be dense enough to collect current without shading too much of the cell, a direct trade with a well-defined optimum.

**The Shockley–Queisser limit.** For a single junction under an unconcentrated blackbody spectrum, the losses are:

| Loss | Mechanism | Magnitude for Si |
|---|---|---|
| **Sub-gap transmission** | photons with $h\nu<E_g$ not absorbed | ~19% of incident energy |
| **Thermalization** | excess energy $h\nu-E_g$ lost as heat | ~33% |
| **Voltage deficit** | $qV_{oc}<E_g$ from entropy and radiative recombination | ~20% of the rest |
| **Fill factor** | the knee is not square | ~12% of the rest |

The first two are set by the gap alone and pull opposite ways, giving

$$\eta_{\max}\approx33\%\ \text{at } E_g\approx1.34\ \mathrm{eV},$$

with a broad maximum: silicon's 1.12 eV gives 32%, GaAs's 1.42 eV gives 33%. **The optimum is shallow, which is fortunate — it means the choice of material is driven by cost and manufacturability rather than by being locked to one gap.**

Silicon's practical record is 26.8%, against its 29.4% detailed-balance limit (slightly below SQ because Auger recombination in silicon sets an additional floor).

**Beating the limit.** Every approach attacks the gap trade directly:

- **Multi-junction (tandem) cells.** Stack subcells of decreasing gap so each absorbs a slice of the spectrum near its own gap, cutting thermalization loss. Three junctions reach 39% one-sun, 47% concentrated — the current record.
- **Concentration.** $I_L$ rises linearly with intensity while $V_{oc}$ rises logarithmically, so efficiency *improves* with concentration. 500-sun systems gain several absolute points, at the cost of tracking and cooling.
- **Perovskite–silicon tandems.** A 1.7 eV perovskite on top of silicon, exploiting the fact that silicon's gap is nearly ideal as a *bottom* cell. Already above 33% in the laboratory — beating the single-junction limit with a silicon base, which is why it is the most commercially interesting route.

## Picture

![A two-panel figure. Left: solar cell I-V characteristics, showing the dark diode curve passing through the origin and the illuminated curve shifted down by I_L into the fourth quadrant, replotted in the conventional flipped orientation with I_sc on the current axis, V_oc on the voltage axis, the maximum power point marked with its rectangle shaded, and the full V_oc times I_sc box outlined to show what the fill factor compares against. Right: efficiency against band gap, a broad hump peaking near 1.34 eV at about 33 percent, with silicon at 1.12 eV and gallium arsenide at 1.42 eV both marked near the top, and dashed curves below showing the two competing loss mechanisms — sub-gap transmission falling with gap and thermalization rising with gap.](assets/04-03-fig1.svg)

Left: the fill factor made visible. The outer rectangle is $V_{oc}\times I_{sc}$ — what you would get if the diode were perfect. The shaded inner rectangle is the actual maximum power. Their ratio is FF, and everything that degrades the diode (series resistance, shunt leakage, high ideality factor) shrinks the inner rectangle without moving the outer one.

Right: the band-gap trade, drawn as the two loss curves that produce it. Sub-gap transmission (rising with $E_g$) and thermalization (falling with $E_g$) cross near 1.3 eV, and the efficiency hump sits at that crossing. Note how flat the top is — anything between about 1.1 and 1.6 eV is within a couple of points of optimal, which is why silicon, GaAs, CdTe and perovskites are all viable.

## Worked examples

**Example 1 (a complete cell characterization).** A silicon solar cell of area 100 cm² has $I_0 = 10^{-12}$ A, $n = 1$, and produces $I_L = 3.5$ A under one sun (1000 W/m²). Find $I_{sc}$, $V_{oc}$, FF, $P_{\max}$ and $\eta$.

*Short-circuit current.* $I_{sc} = I_L = 3.5$ A, so $J_{sc} = 3.5/100 = 35\ \mathrm{mA/cm^2}$.

*Open-circuit voltage.*

$$V_{oc} = V_T\ln\left(\frac{I_L}{I_0}+1\right) = 0.0259\ln\left(\frac{3.5}{10^{-12}}\right) = 0.0259\ln(3.5\times10^{12}) = 0.0259(28.88) = 0.748\ \mathrm{V}.$$

*Fill factor.*

$$v_{oc} = \frac{V_{oc}}{V_T} = \frac{0.748}{0.0259} = 28.88,$$

$$\mathrm{FF}_0 = \frac{v_{oc}-\ln(v_{oc}+0.72)}{v_{oc}+1} = \frac{28.88-\ln(29.60)}{29.88} = \frac{28.88-3.388}{29.88} = \frac{25.49}{29.88} = 0.853.$$

*Maximum power and efficiency.*

$$P_{\max} = V_{oc}I_{sc}\mathrm{FF} = (0.748)(3.5)(0.853) = 2.233\ \mathrm{W}.$$

Input power: $1000\ \mathrm{W/m^2}\times100\ \mathrm{cm^2} = 1000\times0.01 = 10$ W.

$$\eta = \frac{2.233}{10} = 0.223 = 22.3\%.$$

*Sanity check against reality.* 22.3% with $J_{sc} = 35\ \mathrm{mA/cm^2}$ and $V_{oc} = 0.748$ V is a very good commercial cell — and note that this ideal-diode calculation assumed **no series or shunt resistance**, so FF = 0.853 is the ceiling. A real cell with $R_s = 0.5\ \Omega\cdot\mathrm{cm^2}$ loses about $J_{sc}R_s = (0.035)(0.5) = 17.5$ mV at the maximum-power point, cutting FF to roughly 0.81 and efficiency to about 21%. That gap between 0.85 and 0.81 is where cell manufacturers compete.

**Example 2 (the band-gap trade, quantified).** Compare three hypothetical single-junction cells with $E_g = 0.7$, 1.34 and 2.0 eV under AM1.5. Estimate $J_{sc}$ from the available photon flux and $V_{oc}$ from the empirical rule, and find which wins.

*Available current.* The AM1.5 spectrum delivers roughly these integrated photon fluxes above a given gap (standard values):

| $E_g$ | $\lambda_g$ | Photons above gap | $J_{sc}$ ceiling |
|---|---|---|---|
| 0.7 eV | 1.77 µm | $4.0\times10^{17}\ \mathrm{cm^{-2}s^{-1}}$ | 64.1 mA/cm² |
| 1.34 eV | 0.93 µm | $2.4\times10^{17}$ | 38.4 mA/cm² |
| 2.0 eV | 0.62 µm | $1.1\times10^{17}$ | 17.6 mA/cm² |

*Voltage,* using $V_{oc}\approx E_g/q-0.4$ V:

| $E_g$ | $V_{oc}$ |
|---|---|
| 0.7 eV | 0.30 V |
| 1.34 eV | 0.94 V |
| 2.0 eV | 1.60 V |

*Power, with FF ≈ 0.83:*

$$P = J_{sc}V_{oc}\,\mathrm{FF}:$$

| $E_g$ | $P$ (mW/cm²) | $\eta$ (of 100 mW/cm²) |
|---|---|---|
| 0.7 eV | $(64.1)(0.30)(0.83) = 16.0$ | 16.0% |
| 1.34 eV | $(38.4)(0.94)(0.83) = 30.0$ | 30.0% |
| 2.0 eV | $(17.6)(1.60)(0.83) = 23.4$ | 23.4% |

**The middle gap wins**, and the mechanism is visible in the columns: the narrow-gap cell has three and a half times the current but only a fifth of the voltage; the wide-gap cell has the voltage but has thrown away most of the photons.

*Why the peak is broad.* Compute silicon at 1.12 eV: photons above gap $\approx2.75\times10^{17}$, $J_{sc}\approx44.1\ \mathrm{mA/cm^2}$, $V_{oc}\approx0.72$ V, giving $P = (44.1)(0.72)(0.83) = 26.3\ \mathrm{mW/cm^2}$ — 26.3%, within 3 points of the 1.34 eV optimum. The two effects trade off almost linearly over a wide range, so the product is flat near its maximum.

*What a tandem does, in one line.* Put the 2.0 eV cell on top of the 0.7 eV cell. The top absorbs the blue half at high voltage; the bottom absorbs the red half that passes through, also near *its* gap. Summing the two (in series, so currents must match — the real design constraint):

$$P\approx(17.6)(1.60)(0.83)+(17.6)(0.30)(0.83) = 23.4+4.4 = 27.8\ \mathrm{mW/cm^2},$$

with the bottom cell current-limited to match the top. Choosing better-matched gaps (1.7 eV over 1.1 eV) gives well over 35%. **The tandem beats the single junction not by absorbing more photons but by extracting more voltage from the ones it already absorbs** — attacking thermalization, the largest single loss.

## Watch out

- **You might think more light means proportionally more voltage.** $I_{sc}\propto$ intensity, but $V_{oc}$ rises only as $\ln$ — 60 mV per decade. Concentration therefore improves efficiency, but slowly.
- **You might confuse the two parasitic resistances.** $R_s$ flattens the curve near $V_{oc}$; $R_{sh}$ tilts it near $I_{sc}$. They have distinct signatures and distinct causes (metallization versus edge leakage).
- **You might think a narrow gap is better because it absorbs more.** It absorbs more photons but extracts less energy from each, because everything above $E_g$ thermalizes to the band edge within picoseconds. The product peaks near 1.34 eV.
- **You might quote the Shockley–Queisser limit as a hard ceiling.** It applies to a *single* junction under *one sun*. Tandems and concentrators legitimately exceed it — 47% has been demonstrated — because they violate its assumptions rather than its physics.
- **You might ignore temperature.** $V_{oc}$ falls about 2 mV/°C (through $I_0\propto n_i^2$, exactly as in [2.2](02-02-ideal-diode-equation.md)), so a panel at 65 °C loses about 0.08 V — roughly 10% of its power relative to the 25 °C rating. Real installations are specified at NOCT for this reason.

## One-liner

> A solar cell is a diode pushed into its fourth quadrant by a photocurrent; the gap sets both the voltage you extract and the photons you can absorb, and because those pull opposite ways the efficiency peaks near 1.34 eV at about 33%.

## Problems

**P1 (🟢)** A silicon solar cell in the dark obeys the ideal-diode law with $I_0 = 2\times10^{-12}$ A; under illumination it delivers $I_L = 2.8$ A. (a) Write the illuminated I–V. (b) Find $V_{oc}$ and $I_{sc}$. (c) Find the fill factor and $P_{\max}$. (d) The cell is 80 cm² under one sun; find its efficiency. (e) Compute the longest wavelength it can absorb, and explain in one sentence why the same $E_g$ that sets $V_{oc}$ also caps the current.

**P2 (🟡)** A cell has $V_{oc} = 0.62$ V, $I_{sc} = 8.5$ A, area 240 cm², and measured $P_{\max} = 4.2$ W under one sun. (a) Find FF and efficiency. (b) Find the ideal FF for this $V_{oc}$ with $n = 1$. (c) Estimate the series resistance responsible for the shortfall, in $\Omega\cdot\mathrm{cm^2}$. (d) If the metallization is improved to halve $R_s$ at the cost of 1% more shading, is it worth it?

**P3 (🔴)** A two-junction tandem has a 1.65 eV top cell and a 1.12 eV silicon bottom cell, connected in series. Photon fluxes above each gap under AM1.5: above 1.65 eV, $1.6\times10^{17}\ \mathrm{cm^{-2}s^{-1}}$; above 1.12 eV, $2.75\times10^{17}$. (a) Find the current each subcell would produce alone. (b) In a series (two-terminal) tandem the current is limited by the smaller. Find the operating current and the wasted current. (c) Find the tandem $V_{oc}$ and efficiency with FF = 0.82 and $V_{oc}\approx E_g/q-0.4$. (d) Compare with silicon alone, and state what a four-terminal configuration would change.

<details>
<summary>Solutions</summary>

**P1** (a) $$I = I_L-I_0\left(e^{qV/k_BT}-1\right) = 2.8-2\times10^{-12}\left(e^{V/0.0259}-1\right)\ \mathrm{A}.$$

(b) $I_{sc} = I_L = 2.8$ A.

$$V_{oc} = V_T\ln\left(\frac{I_L}{I_0}+1\right) = 0.0259\ln\left(\frac{2.8}{2\times10^{-12}}\right) = 0.0259\ln(1.4\times10^{12}) = 0.0259(27.97) = 0.724\ \mathrm{V}.$$

(c) $$v_{oc} = \frac{0.724}{0.0259} = 27.97, \qquad \mathrm{FF}_0 = \frac{27.97-\ln(28.69)}{28.97} = \frac{27.97-3.356}{28.97} = \frac{24.61}{28.97} = 0.850.$$

$$P_{\max} = (0.724)(2.8)(0.850) = 1.723\ \mathrm{W}.$$

(d) $P_{\rm in} = (1000\ \mathrm{W/m^2})(80\times10^{-4}\ \mathrm{m^2}) = 8.0$ W.

$$\eta = \frac{1.723}{8.0} = 0.215 = 21.5\%.$$

(e) $$\lambda_g = \frac{1.240}{1.12} = 1.107\ \mu\mathrm{m} = 1107\ \mathrm{nm}.$$

The same $E_g$ caps both because it is simultaneously the *minimum photon energy that can be absorbed* (so photons below it contribute nothing to the current) and the *maximum energy each absorbed carrier pair can retain* (so $qV_{oc}<E_g$). Widening the gap raises the voltage ceiling but pushes more of the spectrum below the absorption threshold; narrowing it does the reverse. **One parameter, two opposing effects — which is the entire content of the Shockley–Queisser limit.**

**P2** (a) $$\mathrm{FF} = \frac{P_{\max}}{V_{oc}I_{sc}} = \frac{4.2}{(0.62)(8.5)} = \frac{4.2}{5.27} = 0.797.$$

$$P_{\rm in} = (1000)(240\times10^{-4}) = 24\ \mathrm{W}, \qquad \eta = \frac{4.2}{24} = 0.175 = 17.5\%.$$

(b) $$v_{oc} = \frac{0.62}{0.0259} = 23.94, \qquad \mathrm{FF}_0 = \frac{23.94-\ln(24.66)}{24.94} = \frac{23.94-3.205}{24.94} = \frac{20.74}{24.94} = 0.831.$$

(c) The fractional FF loss from series resistance is approximately

$$\frac{\mathrm{FF}}{\mathrm{FF}_0} \approx 1-\frac{R_s}{R_{ch}}, \qquad R_{ch} = \frac{V_{oc}}{I_{sc}}\ \text{(the characteristic resistance)}.$$

$$\frac{\mathrm{FF}}{\mathrm{FF}_0} = \frac{0.797}{0.831} = 0.959 \quad\Longrightarrow\quad \frac{R_s}{R_{ch}} = 0.041.$$

$$R_{ch} = \frac{0.62}{8.5} = 0.0729\ \Omega \quad\Longrightarrow\quad R_s = (0.041)(0.0729) = 2.99\times10^{-3}\ \Omega.$$

In specific terms (multiplying by area):

$$R_s' = (2.99\times10^{-3})(240) = 0.72\ \Omega\cdot\mathrm{cm^2}.$$

A typical value for a screen-printed commercial cell.

(d) Halving $R_s$ to $0.36\ \Omega\cdot\mathrm{cm^2}$ gives $R_s/R_{ch} = 0.0205$, so

$$\mathrm{FF} = 0.831(1-0.0205) = 0.814, \qquad \text{a gain of } \frac{0.814}{0.797} = 1.021 \ \ (+2.1\%).$$

Costing 1% more shading reduces $I_{sc}$ by 1%, and power scales with it:

$$\text{Net} = 1.021\times0.99 = 1.011 \quad\Longrightarrow\quad \textbf{+1.1\%} \ \text{relative power}.$$

**Worth it, but only just** — a 1.1% relative gain takes the cell from 17.5% to 17.7% absolute. That thin margin is exactly why front-grid design is such a carefully optimized problem, and why the industry moved to fundamentally different approaches rather than tuning fingers: **busbarless multi-wire** interconnects (many thin round wires that shade less for the same conductance), and **back-contact** cells (IBC), which move all metallization to the rear and eliminate front shading entirely. Both attack the trade rather than optimizing within it.

**P3** (a) Current density from a photon flux $\Phi$ is $J = q\Phi$:

$$J_{\rm top} = (1.602\times10^{-19})(1.6\times10^{17}) = 2.563\times10^{-2}\ \mathrm{A/cm^2} = 25.6\ \mathrm{mA/cm^2}.$$

The bottom cell receives only the photons the top one did *not* absorb — those between 1.12 and 1.65 eV:

$$\Phi_{\rm bot} = 2.75\times10^{17}-1.6\times10^{17} = 1.15\times10^{17}\ \mathrm{cm^{-2}s^{-1}},$$

$$J_{\rm bot} = (1.602\times10^{-19})(1.15\times10^{17}) = 1.842\times10^{-2} = 18.4\ \mathrm{mA/cm^2}.$$

(b) In series, the current is limited by the smaller:

$$J_{\rm op} = \min(25.6, 18.4) = 18.4\ \mathrm{mA/cm^2}.$$

Wasted: $25.6-18.4 = 7.2\ \mathrm{mA/cm^2}$ of the top cell's capability — **28% of its potential current** is thrown away because it cannot flow.

(c) Series-connected subcells add their voltages:

$$V_{oc} = (1.65-0.40)+(1.12-0.40) = 1.25+0.72 = 1.97\ \mathrm{V}.$$

$$P = J_{\rm op}V_{oc}\,\mathrm{FF} = (18.4\times10^{-3})(1.97)(0.82) = 2.98\times10^{-2}\ \mathrm{W/cm^2} = 29.8\ \mathrm{mW/cm^2},$$

$$\eta = \frac{29.8}{100} = 29.8\%.$$

(d) Silicon alone: $J_{sc} = q(2.75\times10^{17}) = 44.1\ \mathrm{mA/cm^2}$, $V_{oc} = 0.72$ V:

$$P = (44.1\times10^{-3})(0.72)(0.82) = 2.60\times10^{-2} = 26.0\ \mathrm{mW/cm^2} = 26.0\%.$$

So the tandem gives **29.8% versus 26.0%** — a gain of 3.8 absolute points, or 14% relative. Real but modest, and the reason it is modest is the current mismatch: the top cell is throwing away 28% of its photocurrent.

*What four terminals would change.* Wiring the two subcells independently (four terminals, separate power conditioning) removes the series constraint, so each operates at its own maximum power point:

$$P = (25.6\times10^{-3})(1.25)(0.82)+(18.4\times10^{-3})(0.72)(0.82) = 26.2+10.9 = 37.1\ \mathrm{mW/cm^2},$$

$$\eta = 37.1\%.$$

**A jump from 29.8% to 37.1%** — 7.3 absolute points — purely from removing the current-matching constraint.

*Why two-terminal devices are built anyway.* Four-terminal modules need two separate inverters or DC-DC converters, doubled wiring, and an optically transparent intermediate contact — significant cost and loss. Two-terminal tandems avoid all that, and the industry's response has been to **engineer the gaps for current matching** instead: raising the top gap from 1.65 to about 1.72–1.75 eV, or thinning the top cell so it deliberately transmits some above-gap light to the bottom. That tuning brings the two currents close and recovers most of the four-terminal advantage in a monolithic device.

This is exactly what perovskite–silicon tandems do — the perovskite's gap is compositionally tunable over 1.5–2.3 eV, which is precisely the freedom needed to hit current match on top of a fixed 1.12 eV silicon bottom cell. It is the main reason that material combination, rather than a III–V on silicon, became the commercial front-runner.

</details>

## Flashback

**From Lesson 2.2 (The ideal-diode equation):** A silicon diode has $I_0 = 10^{-12}$ A at 300 K. (a) Find the forward voltage at 3 A. (b) The temperature rises to 65 °C; estimate the new $I_0$ and the new voltage at 3 A. (c) Relate this to a solar panel's temperature coefficient.

<details>
<summary>Solution</summary>

(a) $$V = V_T\ln\frac{I}{I_0} = 0.0259\ln\frac{3}{10^{-12}} = 0.0259\ln(3\times10^{12}) = 0.0259(28.73) = 0.744\ \mathrm{V}.$$

(b) $I_0\propto n_i^2\propto e^{-E_g/k_BT}$. From 300 K to 338 K:

$$\frac{I_0(338)}{I_0(300)} = \exp\left[\frac{1.12}{8.617\times10^{-5}}\left(\frac{1}{300}-\frac{1}{338}\right)\right] = \exp\left[13000(3.333\times10^{-3}-2.959\times10^{-3})\right]$$

$$= \exp[13000(3.746\times10^{-4})] = e^{4.87} = 130.$$

So $I_0 = 1.3\times10^{-10}$ A. And $V_T$ rises to $0.0259(338/300) = 0.0292$ V:

$$V = 0.0292\ln\frac{3}{1.3\times10^{-10}} = 0.0292\ln(2.31\times10^{10}) = 0.0292(23.86) = 0.697\ \mathrm{V}.$$

A drop of $0.744-0.697 = 47$ mV over 38 °C, i.e. **$-1.2$ mV/°C**.

(c) A solar cell's $V_{oc}$ is exactly this forward voltage — the bias at which the dark current equals $I_L$ — so it carries the same temperature coefficient, typically quoted as $-2$ mV/°C for a real silicon cell (larger than the ideal value because real cells have higher ideality and additional recombination paths).

The panel consequence: with $V_{oc}\approx0.72$ V at 25 °C, a cell at 65 °C loses $40\times2 = 80$ mV, about 11% of its voltage, and the module's power falls by roughly the same fraction — hence the standard **$-0.35\%$/°C** power temperature coefficient on every silicon module datasheet.

This is why real-world panels underperform their lab ratings on hot days, why installations leave an air gap behind the panels for convective cooling, and why the industry rates modules at **NOCT** (nominal operating cell temperature, ~45 °C) in addition to the 25 °C standard test condition. It is also why cell efficiency matters twice over: a more efficient cell converts more of the incident energy and therefore *heats less*, gaining a second-order advantage on a hot roof.

</details>

## Connections

- **Backward:** the illuminated equation is [2.2](02-02-ideal-diode-equation.md) with [4.1](04-01-light-absorption-emission-detection.md)'s photogenerated term; the collection problem is [1.4](01-04-continuity-equations.md) P3, where back-surface passivation was worth 35%.
- **Forward:** [4.4](04-04-device-fabrication.md) covers how cells are actually made — texturing, diffusion, screen printing — and why the process cost, not the physics, sets the price per watt.
- **Sideways:** the detailed-balance argument behind the Shockley–Queisser limit is a thermodynamic one — a cell in the dark must emit as much as it absorbs at equilibrium — and is the same reasoning as Kirchhoff's law of thermal radiation in [`stat-mech`](../../stat-mech/syllabus.md). The single-gap efficiency limit is, at bottom, a Carnot-like statement about extracting work from a broadband thermal source.
