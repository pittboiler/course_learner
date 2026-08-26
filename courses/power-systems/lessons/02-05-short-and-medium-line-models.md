# Power Systems · Lesson 2.5: Short and medium-length line models

> ⏱ ~15 min · Module 2: Transformers and transmission lines · Builds on: [2.4 Transmission-line parameters](02-04-transmission-line-parameters.md), [1.2 Three-phase power and the per-phase equivalent](01-02-per-phase-equivalent.md) · Unlocks: [2.6 The long line and surge impedance](02-06-long-line-surge-impedance.md), [3.1 The bus admittance matrix](03-01-bus-admittance-matrix.md)

## Why this matters

[2.4](02-04-transmission-line-parameters.md) produced $R$, $L$ and $C$ **per kilometre**. A line is a distributed system — those parameters are spread continuously along it — but solving distributed equations for every line in a 3000-bus network is unnecessary. For most lines a lumped circuit is accurate to a fraction of a percent.

This lesson establishes which lumped model to use when, and introduces the **[ABCD parameters](../reference.md#abcd-parameters)** that describe any two-port line uniformly. That uniformity matters: once a line is reduced to four constants, a line, a transformer, a cascade of both, and a compensated line all look the same to the rest of the analysis.

## The idea

Three regimes, distinguished by whether the shunt capacitance matters and whether it can be lumped.

**Short line** (under about 80 km). The total charging current is a small fraction of the load current, so **neglect $C$ entirely**. The line is a series impedance $Z = (R+jX)\ell$. Simple, and accurate to about 1% at this length.

**Medium line** (80–250 km). Charging is no longer negligible, but the line is short compared with a wavelength, so lumping the capacitance is fine. Split the total shunt admittance in half and put a quarter... no — put **half at each end**. That is the **nominal-π** model, and the choice of splitting evenly is what makes it symmetric and second-order accurate.

**Long line** (over about 250 km). Lumping starts to err noticeably, and the distributed solution of [2.6](02-06-long-line-surge-impedance.md) is needed.

The reason a wavelength sets the scale is worth stating: at 60 Hz the wavelength on an overhead line is about 5000 km, so a 250 km line is a twentieth of a wavelength. Lumping is a low-frequency approximation, and it degrades as the electrical length $\beta\ell$ approaches a radian.

**ABCD parameters** describe any linear two-port:

$$\begin{bmatrix}V_S\\I_S\end{bmatrix} = \begin{bmatrix}A&B\\C&D\end{bmatrix}\begin{bmatrix}V_R\\I_R\end{bmatrix}.$$

The advantage is composition: cascade two elements and the matrices simply multiply. A transformer, a line, and another transformer become one matrix product, and the whole path is characterized by four numbers.

## The formal version

**Short-line model.** $Z = (R+jX)\ell$, shunt neglected:

$$\boxed{\;V_S = V_R+ZI_R, \qquad I_S = I_R.\;}$$

ABCD: $A = D = 1$, $B = Z$, $C = 0$.

**Nominal-π model.** Total series $Z = z\ell$, total shunt $Y = y\ell$, with $Y/2$ at each end:

$$\boxed{\;A = D = 1+\frac{ZY}{2}, \qquad B = Z, \qquad C = Y\left(1+\frac{ZY}{4}\right).\;}$$

*In words: the series impedance is unchanged, and the shunt admittance modifies $A$, $D$ and $C$ by terms in $ZY$.*

**Properties of ABCD parameters.**

| Property | Statement | Meaning |
|---|---|---|
| Reciprocity | $AD-BC = 1$ | any passive bilateral network |
| Symmetry | $A = D$ | the line looks the same from both ends |
| Units | $A,D$ dimensionless; $B$ in Ω; $C$ in S | — |
| Cascade | $\mathbf{T} = \mathbf{T}_1\mathbf{T}_2$ | matrices multiply in order |

*In words: $AD-BC=1$ is a free check on any ABCD calculation* — if it fails, there is an arithmetic error.

**Physical meanings.**

$$A = \frac{V_S}{V_R}\bigg|_{I_R=0}\ \text{(no-load voltage ratio)}, \qquad B = \frac{V_S}{I_R}\bigg|_{V_R=0}\ \text{(short-circuit transfer impedance)}.$$

**Voltage regulation.** With the sending voltage held fixed, the no-load receiving voltage is $V_S/A$ (since at no load $V_S = AV_R$), so

$$\boxed{\;\mathrm{VR} = \frac{|V_S|/|A|-|V_{R,FL}|}{|V_{R,FL}|}\times100\%.\;}$$

*In words: compare the receiving voltage at no load with the one at full load, both for the same sending voltage.* For a short line $A = 1$ and this reduces to the familiar $(|V_S|-|V_R|)/|V_R|$.

**Efficiency.**

$$\eta = \frac{P_R}{P_S} = \frac{P_R}{P_R+P_{\rm loss}}, \qquad P_{\rm loss} = 3|I|^2R \ \text{(short line)}.$$

**Power transfer over a reactive line.** Neglecting $R$ (a good approximation on transmission, where $X/R$ is 5–15) and shunt:

$$\boxed{\;P = \frac{V_SV_R}{X}\sin\delta, \qquad Q_R = \frac{V_SV_R\cos\delta-V_R^2}{X},\;}$$

where $\delta$ is the angle by which $V_S$ leads $V_R$ — the **power angle**.

These two lines are among the most important in the subject, and they encode the decoupling noted back in [1.1](01-01-ac-power-and-three-phase.md):

- **Real power is controlled by angle.** $P$ depends on $\sin\delta$ and hardly on the magnitudes.
- **Reactive power is controlled by magnitude.** For small $\delta$, $Q_R\approx V_R(V_S-V_R)/X$ — it flows from the higher voltage to the lower.

*In words: to move watts, change the angle; to move vars, change the voltage.* That is the basis of [3.4](03-04-newton-raphson-power-flow.md)'s fast-decoupled power flow and of every operator's mental model.

**Maximum power and the stability limit.** $P$ peaks at $\delta = 90°$:

$$P_{\max} = \frac{V_SV_R}{X}.$$

Beyond $90°$ the line is unstable — an increase in angle *reduces* transmitted power, so a disturbance runs away. Real lines operate at $\delta$ of $20$–$30°$ to keep margin, which means **long lines are limited by stability, not by thermal rating**. A 500 km line's thermal capacity may be 2000 MW while its stability limit is 600 MW, and the fix is **series compensation** — capacitors in series with the line to cancel part of $X$.

**Choosing the model.**

| Length | Model | Typical error |
|---|---|---|
| $<80$ km | short (series $Z$) | $<1\%$ |
| 80–250 km | nominal-π | $<2\%$ |
| $>250$ km | long (distributed) | — |

## Picture

![A two-panel figure. Left: the three line models drawn as circuits — the short line as a single series impedance, the nominal-pi with the series impedance and half the shunt admittance at each end, and the long line indicated as a distributed ladder of infinitesimal sections — with a length scale beneath showing the eighty and two hundred fifty kilometre boundaries. Right: the power-angle curve, P equals V_S V_R over X times sine delta, drawn as a sine arc from zero to ninety degrees and beyond, with a typical operating point marked near thirty degrees, the maximum at ninety marked as the stability limit, and the region beyond shaded as unstable.](assets/02-05-fig1.svg)

Left: the three models and where each applies. The nominal-π's even split of shunt admittance is what makes it symmetric ($A=D$) and gives it second-order accuracy — an uneven split would be worse at the same complexity.

Right: the power-angle curve, which reappears in [4.5](04-05-swing-equation-rotor-dynamics.md) and [4.6](04-06-transient-stability-equal-area.md) as the heart of stability analysis. Operating at $30°$ leaves ample margin; the peak at $90°$ is a hard ceiling that no amount of thermal capacity can exceed.

## Worked examples

**Example 1 (a short line, end to end).** A three-phase 60 Hz short line has $Z = 5+j20\ \Omega$ per phase and delivers 40 MW at 66 kV (line-to-line), 0.85 lagging, to the receiving bus. Find the line current, the sending-end voltage, the regulation, and the efficiency.

*Line current.*

$$|I| = \frac{P}{\sqrt3V_{LL}\cos\theta} = \frac{40\times10^{6}}{\sqrt3(66{,}000)(0.85)} = \frac{4\times10^{7}}{97{,}167} = 411.7\ \mathrm{A}.$$

$$\theta = \arccos(0.85) = 31.79°, \qquad I = 411.7\angle{-31.79°}\ \mathrm{A}.$$

*Sending-end voltage.* Per phase, $V_R = 66{,}000/\sqrt3 = 38{,}105\angle0°$ V.

$Z = 5+j20 = 20.62\angle75.96°$:

$$IZ = (411.7)(20.62)\angle(75.96°-31.79°) = 8489\angle44.17° = 6088+j5915,$$

$$V_S = 38{,}105+6088+j5915 = 44{,}193+j5915 = 44{,}587\angle7.62°\ \mathrm{V},$$

$$V_{S,LL} = \sqrt3(44{,}587) = 77{,}225\ \mathrm{V} = 77.2\ \mathrm{kV}.$$

*Voltage regulation.* For a short line, $A = 1$:

$$\mathrm{VR} = \frac{44{,}587-38{,}105}{38{,}105} = \frac{6482}{38{,}105} = 0.1701 = 17.0\%.$$

*Efficiency.*

$$P_{\rm loss} = 3|I|^2R = 3(411.7)^2(5) = 2.542\times10^{6}\ \mathrm{W} = 2.54\ \mathrm{MW},$$

$$\eta = \frac{40}{40+2.54} = \frac{40}{42.54} = 0.9403 = 94.0\%.$$

*Reading the result.* A 17% regulation is **very poor** — utilities target under 5%. The line is heavily loaded relative to its impedance, and the reactive term dominates:

$$\mathrm{VR}\approx\frac{|I|(R\cos\theta+X\sin\theta)}{|V_R|} = \frac{411.7\left[5(0.85)+20(0.5268)\right]}{38{,}105} = \frac{411.7(4.25+10.54)}{38{,}105} = \frac{6089}{38{,}105} = 16.0\%,$$

of which the $X\sin\theta$ part contributes 71%. **Correcting the power factor is the obvious fix**, and it is worth checking: at unity power factor the same 40 MW would draw 350 A, and the regulation would fall to 6.2%. A capacitor bank at the receiving end is far cheaper than rebuilding the line.

*Check the power angle:* $\delta = 7.62°$, well inside the stable region, so this line is limited by voltage drop and losses rather than by stability — the characteristic situation for a short line.

**Example 2 (a medium line by nominal-π, and how much the shunt matters).** A 150 km, 230 kV line has $z = 0.05+j0.45\ \Omega$/km and $y = j3.4\times10^{-6}$ S/km. It delivers 150 MW at 0.95 lagging at 230 kV. Find the ABCD parameters, the sending-end voltage, and compare with the short-line model.

*Total parameters.*

$$Z = (0.05+j0.45)(150) = 7.5+j67.5\ \Omega = 67.92\angle83.66°,$$
$$Y = j3.4\times10^{-6}(150) = j5.10\times10^{-4}\ \mathrm{S}.$$

*ABCD.*

$$\frac{ZY}{2} = \frac{(67.92\angle83.66°)(5.10\times10^{-4}\angle90°)}{2} = \frac{0.03464\angle173.66°}{2} = 0.01732\angle173.66°$$
$$= -0.01721+j0.00191.$$

$$A = D = 1-0.01721+j0.00191 = 0.98279+j0.00191 = 0.98279\angle0.11°,$$
$$B = Z = 7.5+j67.5\ \Omega,$$
$$C = Y\left(1+\frac{ZY}{4}\right) = j5.10\times10^{-4}\left(1-0.00861+j0.00096\right) = -4.9\times10^{-7}+j5.056\times10^{-4}.$$

*Check reciprocity.* $AD-BC$ should be 1:

$$A^2 = 0.96588+j0.00375, \qquad BC = (67.92\angle83.66°)(5.056\times10^{-4}\angle90.06°) = 0.03434\angle173.72° = -0.03414+j0.00376,$$
$$AD-BC = 0.96588+j0.00375+0.03414-j0.00376 = 1.00002-j0.00001 \approx 1\ \checkmark.$$

*Receiving-end quantities.*

$$|I_R| = \frac{150\times10^{6}}{\sqrt3(230{,}000)(0.95)} = \frac{1.5\times10^{8}}{378{,}400} = 396.4\ \mathrm{A}\angle{-18.19°},$$
$$V_R = \frac{230{,}000}{\sqrt3} = 132{,}791\angle0°\ \mathrm{V}.$$

*Sending-end voltage.*

$$V_S = AV_R+BI_R = (0.98279\angle0.11°)(132{,}791)+(67.92\angle83.66°)(396.4\angle{-18.19°}).$$

First term: $130{,}506\angle0.11° = 130{,}506+j251$.

Second term: $26{,}924\angle65.47° = 11{,}185+j24{,}490$.

$$V_S = 141{,}691+j24{,}741 = 143{,}836\angle9.91°\ \mathrm{V}, \qquad V_{S,LL} = 249.1\ \mathrm{kV}.$$

*Voltage regulation.*

$$\mathrm{VR} = \frac{|V_S|/|A|-|V_R|}{|V_R|} = \frac{143{,}836/0.98279-132{,}791}{132{,}791} = \frac{146{,}355-132{,}791}{132{,}791} = 10.2\%.$$

*Now the short-line model for comparison* ($A=1$, $C=0$):

$$V_S = V_R+ZI_R = 132{,}791+26{,}924\angle65.47° = 143{,}976+j24{,}490 = 146{,}046\angle9.66°,$$
$$V_{S,LL} = 252.9\ \mathrm{kV}, \qquad \mathrm{VR} = \frac{146{,}046-132{,}791}{132{,}791} = 9.98\%.$$

*The comparison.*

| | nominal-π | short | difference |
|---|---|---|---|
| $V_{S,LL}$ | 249.1 kV | 252.9 kV | 1.5% |
| VR | 10.2% | 10.0% | 0.2 points |

**The short-line model overestimates the sending voltage by 1.5%** at 150 km. That is small but not negligible — and the direction is instructive: neglecting the shunt capacitance ignores the vars the line generates, so the model thinks the source must supply more reactive power than it really does, and asks for a higher voltage.

*Where the error goes.* At 80 km the same comparison gives well under 1%; at 300 km it exceeds 4% and the long-line model of [2.6](02-06-long-line-surge-impedance.md) becomes necessary. The 80/250 km boundaries in the table are chosen to keep the error inside about 1% and 2% respectively.

*A useful sanity check on the whole calculation.* The line's charging is

$$Q_{\rm chg} = V_{LL}^2\omega C\ell = (230\times10^{3})^2(5.10\times10^{-4}) = 27.0\ \mathrm{Mvar},$$

against a load reactive demand of $150\tan(18.19°) = 49.3$ Mvar. The line supplies more than half the load's vars by itself — which is exactly why neglecting it shifted the answer, and why lightly loaded lines can raise voltage rather than lower it.

## Watch out

- **You might use the short model past 80 km.** The error grows with $\ell^2$ (through $ZY$) and reaches a few percent by 150 km. Check the charging Mvar against the load's reactive demand — if it is a significant fraction, use nominal-π.
- **You might compute regulation without dividing by $A$.** The no-load receiving voltage is $V_S/A$, not $V_S$. For a short line $A=1$ and it does not matter; for a long line $A$ can be 0.9 and it matters a great deal.
- **You might forget to check $AD-BC=1$.** It is free and catches most arithmetic slips.
- **You might assume thermal rating is the limit.** For lines beyond about 300 km the stability limit at $\delta = 90°$ binds first, often at a third of the thermal capacity.
- **You might treat $P = V_SV_R\sin\delta/X$ as exact.** It neglects $R$ and the shunt. On transmission ($X/R>5$) it is excellent; on distribution ($X/R\approx1$) it is not, and both terms matter.

## One-liner

> Neglect the shunt below 80 km, lump it half at each end to 250 km, and describe either with four ABCD constants — then remember that $P = V_SV_R\sin\delta/X$ makes angle control watts and magnitude control vars.

## Problems

**P1 (🟢)** A short line has $Z = 8+j30\ \Omega$ per phase and delivers 25 MW at 0.9 lagging, 138 kV. (a) Find the line current. (b) Find the sending-end line-to-line voltage. (c) Find the voltage regulation. (d) Find the efficiency.

**P2 (🟡)** A 200 km line has $z = 0.04+j0.42\ \Omega$/km, $y = j3.2\times10^{-6}$ S/km, operating at 345 kV. (a) Find $Z$, $Y$ and the nominal-π ABCD parameters. (b) Verify $AD-BC = 1$. (c) For a load of 300 MW at 0.92 lagging, find the sending-end voltage and the regulation. (d) Find the line's charging Mvar and compare with the load's reactive demand.

**P3 (🔴)** A 400 km, 500 kV line has $X = 0.32\ \Omega$/km and negligible resistance, connecting two buses both held at 1.0 pu. (a) Find the total reactance and the maximum transmittable power. (b) Find the power at $\delta = 30°$ and the corresponding operating margin. (c) Series capacitors compensate 50% of the reactance. Recompute (a) and (b). (d) The line's thermal rating is 2500 MVA. Determine which limit binds before and after compensation, and comment on why series compensation is used on long lines but rarely on short ones.

<details>
<summary>Solutions</summary>

**P1** (a) $$|I| = \frac{25\times10^{6}}{\sqrt3(138{,}000)(0.9)} = \frac{2.5\times10^{7}}{215{,}100} = 116.2\ \mathrm{A},$$
$$\theta = 25.84°, \qquad I = 116.2\angle{-25.84°}\ \mathrm{A}.$$

(b) $V_R = 138{,}000/\sqrt3 = 79{,}674\angle0°$ V; $Z = 8+j30 = 31.05\angle75.07°$:

$$IZ = (116.2)(31.05)\angle(75.07°-25.84°) = 3608\angle49.23° = 2355+j2733,$$
$$V_S = 79{,}674+2355+j2733 = 82{,}029+j2733 = 82{,}075\angle1.91°\ \mathrm{V},$$
$$V_{S,LL} = \sqrt3(82{,}075) = 142{,}158\ \mathrm{V} = 142.2\ \mathrm{kV}.$$

(c) $$\mathrm{VR} = \frac{82{,}075-79{,}674}{79{,}674} = \frac{2401}{79{,}674} = 0.03014 = 3.01\%.$$

(d) $$P_{\rm loss} = 3(116.2)^2(8) = 324{,}100\ \mathrm{W} = 0.324\ \mathrm{MW},$$
$$\eta = \frac{25}{25.324} = 0.9872 = 98.7\%.$$

(A well-designed line: 3% regulation and 98.7% efficiency, in contrast to Example 1's 17% and 94%, which was badly overloaded.)

**P2** (a) $$Z = (0.04+j0.42)(200) = 8+j84\ \Omega = 84.38\angle84.56°,$$
$$Y = j3.2\times10^{-6}(200) = j6.40\times10^{-4}\ \mathrm{S}.$$

$$\frac{ZY}{2} = \frac{(84.38\angle84.56°)(6.40\times10^{-4}\angle90°)}{2} = \frac{0.05400\angle174.56°}{2} = 0.02700\angle174.56° = -0.02688+j0.00256.$$

$$A = D = 0.97312+j0.00256 = 0.97312\angle0.15°,$$
$$B = 8+j84\ \Omega,$$
$$C = Y\left(1+\frac{ZY}{4}\right) = j6.40\times10^{-4}(1-0.01344+j0.00128) = -8.19\times10^{-7}+j6.314\times10^{-4}.$$

(b) $$A^2 = 0.94696+j0.00498,$$
$$BC = (84.38\angle84.56°)(6.314\times10^{-4}\angle90.07°) = 0.05328\angle174.63° = -0.05305+j0.00499,$$
$$AD-BC = 0.94696+j0.00498+0.05305-j0.00499 = 1.00001-j0.00001 \approx 1\ \checkmark.$$

(c) $$|I_R| = \frac{300\times10^{6}}{\sqrt3(345{,}000)(0.92)} = \frac{3\times10^{8}}{549{,}700} = 545.8\ \mathrm{A}\angle{-23.07°},$$
$$V_R = \frac{345{,}000}{\sqrt3} = 199{,}186\angle0°\ \mathrm{V}.$$

$$AV_R = 193{,}833\angle0.15° = 193{,}832+j508,$$
$$BI_R = (84.38)(545.8)\angle(84.56°-23.07°) = 46{,}054\angle61.49° = 21{,}983+j40{,}471.$$

$$V_S = 215{,}815+j40{,}979 = 219{,}671\angle10.76°\ \mathrm{V}, \qquad V_{S,LL} = 380.5\ \mathrm{kV}.$$

$$\mathrm{VR} = \frac{219{,}671/0.97312-199{,}186}{199{,}186} = \frac{225{,}738-199{,}186}{199{,}186} = 13.3\%.$$

(d) $$Q_{\rm chg} = V_{LL}^2|Y| = (345\times10^{3})^2(6.40\times10^{-4}) = 76.2\ \mathrm{Mvar}.$$

Load reactive demand: $300\tan(23.07°) = 300(0.4262) = 127.9$ Mvar.

The line generates **60% of the load's reactive demand** by itself. That is a large fraction, and it explains why the nominal-π model is essential here — a short-line model would ignore 76 Mvar of generation and badly overstate the sending voltage.

**P3** (a) $$X = 0.32(400) = 128\ \Omega.$$

On a 100 MVA, 500 kV base, $Z_{base} = 500^2/100 = 2500\ \Omega$, so $X = 128/2500 = 0.0512$ pu.

$$P_{\max} = \frac{V_SV_R}{X} = \frac{(1.0)(1.0)}{0.0512} = 19.53\ \mathrm{pu} = 1953\ \mathrm{MW}.$$

(Equivalently in volts: $P_{\max} = V_{LL}^2/X = 500^2/128 = 1953$ MW ✓.)

(b) $$P(30°) = 1953\sin(30°) = 977\ \mathrm{MW}.$$

Margin to the $90°$ limit: the line could carry up to 1953 MW, so it is at 50% of its stability limit — a **100% margin** in power, or $60°$ of angle margin.

(c) With 50% series compensation, $X_{\rm eff} = 0.5(128) = 64\ \Omega$:

$$P_{\max} = \frac{500^2}{64} = 3906\ \mathrm{MW}, \qquad P(30°) = 3906\sin(30°) = 1953\ \mathrm{MW}.$$

**Both doubled.** Series compensation is unusual among power-system measures in that it improves capacity essentially linearly for a passive, relatively cheap component.

(d) *Before compensation:* thermal rating 2500 MVA, stability limit 1953 MW. **Stability binds** — the line cannot use 22% of its conductor capacity.

*After compensation:* stability limit 3906 MW, thermal 2500 MVA. **Thermal now binds**, and the compensation has unlocked the full conductor rating with margin to spare.

*Why series compensation suits long lines and not short ones.* The benefit is proportional to the reactance removed, and $X\propto\ell$ — so a 400 km line has four times the reactance of a 100 km line and four times as much to gain. On a short line, $X$ is already small, the stability limit is far above the thermal rating, and compensating it buys nothing that matters.

There is also a cost that scales the wrong way. Series capacitors introduce a resonance between the capacitor and the generator's mechanical shaft modes — **subsynchronous resonance (SSR)** — which has physically destroyed turbine-generator shafts (Mohave, 1970 and 1971). Guarding against it requires damping filters, protective bypass gaps, and careful study. On a long line the transfer gain justifies that complexity; on a short one it does not.

The general pattern is worth carrying: **short lines are thermally limited, medium lines are voltage-drop limited, and long lines are stability limited** — and each limit has its own remedy (bigger conductor, reactive support, series compensation).

</details>

## Flashback

**From Lesson 2.4 (Transmission-line parameters):** A line has $X_L = 0.50\ \Omega$/km and $C = 8.5$ nF/km, operating at 345 kV. (a) Find the surge impedance. (b) Find the surge-impedance loading. (c) For a 120 km length, find the total series reactance and the charging Mvar.

<details>
<summary>Solution</summary>

(a) $L = X_L/\omega = 0.50/376.99 = 1.326\times10^{-3}$ H/km:

$$Z_c = \sqrt{\frac{L}{C}} = \sqrt{\frac{1.326\times10^{-3}}{8.5\times10^{-9}}} = \sqrt{156{,}000} = 395\ \Omega.$$

(b) $$\mathrm{SIL} = \frac{V_{LL}^2}{Z_c} = \frac{345^2}{395} = \frac{119{,}025}{395} = 301\ \mathrm{MW}.$$

(c) $$X_{\rm tot} = 0.50(120) = 60\ \Omega,$$
$$Q_{\rm chg} = V_{LL}^2\omega C\ell = (345\times10^{3})^2(376.99)(8.5\times10^{-9})(120) = 45.8\ \mathrm{Mvar}.$$

*The connection to this lesson:* SIL is the loading at which the line's own charging exactly balances its reactive absorption $I^2X$, so the line neither generates nor consumes vars and its voltage profile is flat. Loaded below SIL it generates vars and the far end rises; above SIL it absorbs them and the far end sags. At 301 MW this line is naturally balanced, and the 45.8 Mvar of charging is exactly offset at that loading.

That is why SIL is the natural yardstick for a transmission line — more informative than either the thermal or the stability limit for judging how the line will behave. [2.6](02-06-long-line-surge-impedance.md) derives it properly.

</details>

## Connections

- **Backward:** the per-km $R$, $L$, $C$ are [2.4](02-04-transmission-line-parameters.md)'s; the per-phase framing is [1.2](01-02-per-phase-equivalent.md)'s.
- **Forward:** [2.6](02-06-long-line-surge-impedance.md) replaces the lumped models with the exact distributed solution; [3.1](03-01-bus-admittance-matrix.md) inserts the π-model directly into $Y_{bus}$; the power-angle equation is the foundation of [4.5](04-05-swing-equation-rotor-dynamics.md) and [4.6](04-06-transient-stability-equal-area.md).
- **Sideways:** ABCD parameters are the transfer matrix of a two-port, identical in structure to the ray-transfer matrices of optics and the transfer matrices of [`quantum-mechanics` 2.5](../../quantum-mechanics/lessons/02-05-scattering-barriers-tunneling.md) — in all three, cascading elements means multiplying $2\times2$ matrices, and reciprocity appears as a unit determinant.
