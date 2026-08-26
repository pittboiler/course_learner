# Power Systems · Lesson 1.3: The per-unit system

> ⏱ ~15 min · Module 1: Three-phase power and the per-unit system · Builds on: [1.2 Three-phase power and the per-phase equivalent](01-02-per-phase-equivalent.md) · Unlocks: [1.4 Base changes and the single-line diagram](01-04-base-changes-one-line-diagram.md), [2.2 Transformer performance in per-unit](02-02-transformer-performance-per-unit.md)

## Why this matters

A real grid spans voltages from 480 V to 765 kV, connected by transformers with arbitrary turns ratios. Analyzing it in volts and amps means dragging every turns ratio through every equation, and it means numbers spanning nine orders of magnitude — hard to sanity-check and easy to get wrong by a factor of a thousand.

The [per-unit](../reference.md#per-unit) system fixes this by dividing everything by a chosen base. Two things then happen, and the second is the one that matters.

**Every quantity lands near 1.0.** A healthy bus is 0.95–1.05 pu. A transformer impedance is 0.05–0.10 pu. A fault current is 5–20 pu. You develop intuition fast, and a number like 4.7 pu voltage is instantly recognizable as a mistake.

**Transformers disappear.** Choose the voltage bases in the ratio of the turns, and an ideal transformer becomes a plain wire. A network spanning six voltage levels collapses into a single impedance diagram with no ratios in it at all. That is not a convenience — it is what makes network analysis of a real grid tractable, and it is why this lesson sits before everything else.

## The idea

Per-unit is normalization. Pick a base value for each quantity and express everything as a fraction of it:

$$\text{per-unit value} = \frac{\text{actual value}}{\text{base value}}.$$

The subtlety, and the whole content of the method, is that you do **not** get to choose four bases independently. Voltage, current, impedance and power are linked by Ohm's law and by $S=VI$, so choosing any two fixes the other two. The convention is to choose **$S_{base}$ and $V_{base}$**, because those are the two that engineers naturally know: the rating of the equipment and the nominal voltage of the bus.

Everything else follows:

$$I_{base} = \frac{S_{base}}{V_{base}}, \qquad Z_{base} = \frac{V_{base}}{I_{base}} = \frac{V_{base}^2}{S_{base}}.$$

Then the magic. Cross a transformer with turns ratio $a$ and physical quantities scale — voltage by $a$, current by $1/a$, impedance by $a^2$. But if you also scale the *bases* by exactly the same factors (which you do, by choosing $V_{base}$ to follow the turns ratio and keeping $S_{base}$ common), then every per-unit quantity is **unchanged**. The transformer's ratio cancels out of the normalized problem entirely.

The remaining subtlety is three-phase. There are two conventions in circulation, and mixing them is the classic per-unit error. This course uses the standard utility convention: **$S_{base}$ is the three-phase total and $V_{base}$ is line-to-line.** With that pairing, the formulas above work unchanged with no stray $\sqrt3$ or 3 — which is exactly why it is the standard.

## The formal version

**Definition.**

$$\text{pu} = \frac{\text{actual}}{\text{base}}, \qquad \text{actual} = \text{pu}\times\text{base}.$$

**Choosing bases (three-phase convention).** Choose:

- $S_{base}$ = **three-phase** apparent power (VA, or more usually MVA)
- $V_{base}$ = **line-to-line** voltage (V, or kV)

Then derive:

$$\boxed{\;I_{base} = \frac{S_{base}}{\sqrt3\,V_{base}}, \qquad Z_{base} = \frac{V_{base}^2}{S_{base}}.\;}$$

*In words: current base carries the $\sqrt3$; impedance base does not.* The reason $Z_{base}$ has no $\sqrt3$ is worth seeing once:

$$Z_{base} = \frac{V_{base,LN}}{I_{base}} = \frac{V_{base}/\sqrt3}{S_{base}/(\sqrt3V_{base})} = \frac{V_{base}}{\sqrt3}\cdot\frac{\sqrt3V_{base}}{S_{base}} = \frac{V_{base}^2}{S_{base}}\ \checkmark$$

The two $\sqrt3$'s cancel. **That cancellation is the entire reason for pairing three-phase MVA with line-to-line kV** — the alternative convention (per-phase MVA with line-to-neutral kV) gives the same $Z_{base}$ but forces you to remember which one you are in.

**Practical form.** With $S_{base}$ in MVA and $V_{base}$ in kV:

$$Z_{base}[\Omega] = \frac{(V_{base}[\mathrm{kV}])^2}{S_{base}[\mathrm{MVA}]}, \qquad I_{base}[\mathrm{A}] = \frac{S_{base}[\mathrm{MVA}]\times1000}{\sqrt3\,V_{base}[\mathrm{kV}]}.$$

These two lines are used constantly; they are worth committing to memory.

**Per-unit relationships are unchanged.** Because the bases satisfy the same relations as the actual quantities:

$$V_{pu} = I_{pu}Z_{pu}, \qquad S_{pu} = V_{pu}I_{pu}^*, \qquad P_{pu}+jQ_{pu} = S_{pu}.$$

*In words: Ohm's law and the power relations look identical in per-unit* — which is why you can simply re-solve the circuit with normalized numbers.

**Why transformers vanish.** An ideal transformer of turns ratio $a = N_1/N_2$ relates the sides by

$$V_1 = aV_2, \qquad I_1 = \frac{I_2}{a}, \qquad Z_1 = a^2Z_2.$$

Choose bases with $V_{base,1} = a\,V_{base,2}$ and a common $S_{base}$. Then

$$Z_{base,1} = \frac{V_{base,1}^2}{S_{base}} = \frac{a^2V_{base,2}^2}{S_{base}} = a^2Z_{base,2},$$

so

$$Z_{1,pu} = \frac{Z_1}{Z_{base,1}} = \frac{a^2Z_2}{a^2Z_{base,2}} = \frac{Z_2}{Z_{base,2}} = Z_{2,pu}.$$

$$\boxed{\;\text{An ideal transformer in per-unit is a short circuit.}\;}$$

*In words: referring an impedance across a transformer and rescaling its base are the same operation, so they cancel.* A real transformer keeps only its series leakage impedance, which is the same per-unit number viewed from either side ([2.2](02-02-transformer-performance-per-unit.md)).

**Nameplate per-unit values.** Equipment is rated in per-unit on **its own** rating:

| Equipment | Typical $Z$ (pu on own rating) |
|---|---|
| Distribution transformer | 0.02–0.06 |
| Power transformer (large) | 0.06–0.12 |
| Generator, subtransient $X''_d$ | 0.10–0.25 |
| Generator, transient $X'_d$ | 0.15–0.35 |
| Generator, synchronous $X_d$ | 1.0–2.0 |
| Transmission line (per 100 km at 230 kV) | ~0.03–0.08 |

*In words: a transformer's "8% impedance" means 0.08 pu on its own nameplate MVA and kV.* This is why a 10 MVA and a 500 MVA transformer both have impedances near 0.08 pu despite differing by a factor of 50 in ohms — per-unit factors out the size, so the numbers compare directly across the whole industry. The practical consequence: an 8% transformer will pass about $1/0.08 = 12.5$ pu of current into a bolted short, *whatever* its rating.

**Reading per-unit values.** Because everything sits near 1.0, errors are visible:

| Quantity | Healthy range |
|---|---|
| Bus voltage | 0.95–1.05 pu |
| Generator output | 0–1.0 pu of rating |
| Line loading | 0.3–0.9 pu of thermal limit |
| Fault current | 3–20 pu |
| Transformer impedance | 0.05–0.12 pu |

**Choosing $S_{base}$.** It is arbitrary but must be **common to the whole network**. Utilities almost always use 100 MVA, so that a per-unit impedance is directly comparable between studies and between companies. The voltage bases are then *not* free — they are set by the transformer turns ratios, propagating out from wherever you start. [1.4](01-04-base-changes-one-line-diagram.md) does that propagation.

## Picture

![A two-panel figure. Left: the same two-winding transformer drawn twice — in ohms, with a turns ratio symbol and impedances that must be referred across it, and in per-unit, where the transformer symbol has become a plain wire and a single series impedance remains. Right: a table-like diagram showing the base quantity chain, with S_base and V_base chosen at the top and arrows deriving I_base equals S over root three V, and Z_base equals V squared over S, and beneath it a bar showing typical per-unit ranges for bus voltage, transformer impedance and fault current all clustered near one.](assets/01-03-fig1.svg)

Left: the payoff, stated as a picture. In ohms you must carry the turns ratio and refer every impedance to a chosen side. In per-unit, with voltage bases chosen in the turns ratio, the ideal transformer becomes a wire and only the leakage impedance survives — the same number from either side.

Right: the base chain and why the numbers are readable. You choose two ($S_{base}$, $V_{base}$); the other two follow. And because everything then lands within a factor of a few of 1.0, a wrong answer usually announces itself.

## Worked examples

**Example 1 (converting a load and a line to per-unit).** A balanced wye load of $Z = 12+j9\ \Omega$ per phase is supplied at 208 V (line-to-line). Express the load impedance and the resulting current and power in per-unit on bases $S_{base} = 10$ kVA (three-phase) and $V_{base} = 208$ V (line-to-line).

*Base quantities.*

$$Z_{base} = \frac{V_{base}^2}{S_{base}} = \frac{(208)^2}{10{,}000} = \frac{43{,}264}{10{,}000} = 4.326\ \Omega,$$

$$I_{base} = \frac{S_{base}}{\sqrt3V_{base}} = \frac{10{,}000}{\sqrt3(208)} = \frac{10{,}000}{360.3} = 27.76\ \mathrm{A}.$$

*Load impedance in per-unit.*

$$Z_{pu} = \frac{12+j9}{4.326} = 2.774+j2.080 = 3.467\angle36.87°\ \mathrm{pu}.$$

*Voltage in per-unit.* The load is at nominal voltage, so

$$V_{pu} = \frac{208}{208} = 1.000\ \mathrm{pu}.$$

*Current in per-unit* — and here is the payoff, since Ohm's law works unchanged:

$$I_{pu} = \frac{V_{pu}}{Z_{pu}} = \frac{1.000\angle0°}{3.467\angle36.87°} = 0.2884\angle{-36.87°}\ \mathrm{pu}.$$

*Check against actual.* From [1.1](01-01-ac-power-and-three-phase.md) Example 1, the actual line current was 8.01 A:

$$I_{pu} = \frac{8.01}{27.76} = 0.2885\ \checkmark.$$

*Power in per-unit.*

$$S_{pu} = V_{pu}I_{pu}^* = (1.000)(0.2884\angle36.87°) = 0.2884\angle36.87° = 0.2307+j0.1730\ \mathrm{pu}.$$

Converting back: $P = 0.2307(10\ \mathrm{kVA}) = 2.307$ kW ✓ and $Q = 1.730$ kvar ✓ — matching [1.1](01-01-ac-power-and-three-phase.md) exactly.

*What to notice.* The per-unit calculation never used $\sqrt3$ or the factor 3 anywhere. Once you are in per-unit, three-phase and single-phase arithmetic are identical. That is the second, quieter benefit of the system, and it is why the rest of this course computes almost entirely in per-unit.

**Example 2 (why a transformer disappears — the same problem twice).** A generator supplies a load through a step-up transformer, a line, and a step-down transformer:

- Generator: 13.8 kV
- T1: 13.8/138 kV, 50 MVA, $X = 0.10$ pu on its own rating
- Line: $j40\ \Omega$ at 138 kV
- T2: 138/13.8 kV, 50 MVA, $X = 0.10$ pu on its own rating
- Load: 13.8 kV bus

Find the total series reactance from generator to load, first in ohms and then in per-unit on 50 MVA.

*In ohms — the painful way.* Refer everything to the 138 kV level.

T1's reactance in ohms on the 138 kV side: its own $Z_{base}$ is $138^2/50 = 380.9\ \Omega$, so

$$X_{T1} = 0.10(380.9) = 38.09\ \Omega.$$

Line: $40\ \Omega$, already at 138 kV.

T2: same rating and voltage, so also $38.09\ \Omega$ referred to 138 kV.

$$X_{\rm tot,138} = 38.09+40+38.09 = 116.2\ \Omega\ \text{(referred to 138 kV)}.$$

But the *load* is at 13.8 kV, so to use this you must refer it down by $a^2 = (13.8/138)^2 = 0.01$:

$$X_{\rm tot,13.8} = 1.162\ \Omega.$$

Two referrals, two chances to invert a ratio, and an answer whose meaning depends on which side you are standing on.

*In per-unit — the easy way.* Choose $S_{base} = 50$ MVA throughout, and voltage bases following the turns ratios: 13.8 kV in the generator zone, 138 kV in the line zone, 13.8 kV in the load zone.

- T1: already 0.10 pu on 50 MVA ✓ — no conversion needed.
- Line: $Z_{base} = 138^2/50 = 380.9\ \Omega$, so $X_{\rm line} = 40/380.9 = 0.1050$ pu.
- T2: 0.10 pu ✓.

$$X_{\rm tot} = 0.10+0.1050+0.10 = 0.3050\ \mathrm{pu}.$$

**One line of arithmetic, no referrals, and the answer is valid everywhere in the network.**

*Cross-check.* At the 13.8 kV level, $Z_{base} = 13.8^2/50 = 3.809\ \Omega$, so

$$X_{\rm tot} = 0.3050(3.809) = 1.162\ \Omega \ \checkmark$$

matching the ohmic calculation exactly.

*The comparison is the lesson.* Both routes give the same answer, but the ohmic one required knowing the turns ratios, choosing a reference side, and squaring the ratio correctly. The per-unit one required adding three numbers. Scale that difference to a network with 3000 buses and 400 transformers and the per-unit system stops being a convenience and becomes the only practical option.

*And a sanity check that per-unit makes easy.* A total reactance of 0.305 pu means a bolted fault at the load bus would draw about $1/0.305 = 3.28$ pu of current — about 3.3 times rated. That is immediately recognizable as a plausible number for a system with two transformers and a long line between the source and the fault, and no arithmetic in ohms would have told you so at a glance.

## Watch out

- **You might mix the two three-phase conventions.** This course pairs **three-phase $S_{base}$** with **line-to-line $V_{base}$**. The per-phase convention (single-phase MVA, line-to-neutral kV) gives the same $Z_{base}$ but different $I_{base}$ and $S$. Pick one and state it.
- **You might put a $\sqrt3$ in $Z_{base}$.** $Z_{base} = V_{base}^2/S_{base}$ with no $\sqrt3$ — the two $\sqrt3$'s cancel, as derived above. $I_{base}$ *does* carry one.
- **You might use a device's nameplate per-unit impedance directly in a system study.** It is on the device's own rating. Converting it to the system base requires [1.4](01-04-base-changes-one-line-diagram.md)'s base-change formula — this is the single most common per-unit error in practice.
- **You might choose voltage bases freely.** $S_{base}$ is free and common; voltage bases are **forced** by the transformer turns ratios once you pick one. Choosing them independently reintroduces the ratios you were trying to eliminate.
- **You might forget that per-unit impedances are complex.** $Z_{pu} = R_{pu}+jX_{pu}$, and both parts are divided by the same real $Z_{base}$, so the angle is preserved. Per-unit rescales magnitudes, never angles.

## One-liner

> Divide everything by a base, choose the voltage bases in the turns ratios, and an ideal transformer becomes a wire — leaving a single-voltage impedance diagram whose numbers all sit near 1.0 where mistakes are visible.

## Problems

**P1 (🟢)** A three-phase system has $S_{base} = 100$ MVA and $V_{base} = 230$ kV. (a) Find $Z_{base}$ and $I_{base}$. (b) A line has $Z = 18+j75\ \Omega$; express it in per-unit. (c) A bus is measured at 224 kV; express it in per-unit. (d) A load draws 60 MW at 0.9 pf lagging; express $S$ in per-unit.

**P2 (🟡)** On bases 50 MVA and 13.8 kV, a generator delivers $0.85+j0.40$ pu into a bus held at $1.02\angle0°$ pu. (a) Find the actual $P$, $Q$ and $|S|$ in MW, Mvar and MVA. (b) Find the actual bus voltage in kV. (c) Find the per-unit and actual line current. (d) Verify that $S = VI^*$ holds in both systems.

**P3 (🔴)** A 20 MVA, 13.8/69 kV transformer with $X = 8\%$ feeds a 69 kV line of $j25\ \Omega$, which supplies a load bus. On bases of 20 MVA and 13.8 kV in the generator zone: (a) State the voltage base in the line zone and compute $Z_{base}$ there. (b) Express the line reactance in per-unit. (c) The load draws 15 MVA at 0.85 pf lagging with its bus at 1.0 pu. Find the per-unit current and the per-unit voltage at the transformer's low-voltage terminals. (d) Convert that terminal voltage to kV and comment on whether the generator can hold it.

<details>
<summary>Solutions</summary>

**P1** (a) $$Z_{base} = \frac{V_{base}^2}{S_{base}} = \frac{(230)^2}{100} = \frac{52{,}900}{100} = 529\ \Omega,$$

$$I_{base} = \frac{S_{base}}{\sqrt3V_{base}} = \frac{100\times10^{6}}{\sqrt3(230\times10^{3})} = \frac{10^{8}}{398{,}372} = 251.0\ \mathrm{A}.$$

(b) $$Z_{pu} = \frac{18+j75}{529} = 0.03403+j0.14178\ \mathrm{pu}.$$

(c) $$V_{pu} = \frac{224}{230} = 0.9739\ \mathrm{pu}.$$

(d) $$|S| = \frac{60}{0.9} = 66.67\ \mathrm{MVA}, \qquad Q = 66.67\sin(\arccos0.9) = 66.67(0.4359) = 29.06\ \mathrm{Mvar},$$

$$S_{pu} = \frac{60+j29.06}{100} = 0.600+j0.2906\ \mathrm{pu}.$$

**P2** (a) $$P = 0.85(50) = 42.5\ \mathrm{MW}, \qquad Q = 0.40(50) = 20.0\ \mathrm{Mvar},$$
$$|S| = \sqrt{42.5^2+20.0^2} = \sqrt{1806+400} = 46.97\ \mathrm{MVA}.$$

(b) $$V = 1.02(13.8) = 14.08\ \mathrm{kV}.$$

(c) From $S_{pu} = V_{pu}I_{pu}^*$:

$$I_{pu}^* = \frac{S_{pu}}{V_{pu}} = \frac{0.85+j0.40}{1.02} = 0.8333+j0.3922,$$

$$I_{pu} = 0.8333-j0.3922 = 0.9210\angle{-25.20°}\ \mathrm{pu}.$$

$$I_{base} = \frac{50\times10^{6}}{\sqrt3(13.8\times10^{3})} = \frac{5\times10^{7}}{23{,}902} = 2092\ \mathrm{A},$$

$$I_{\rm actual} = 0.9210(2092) = 1927\ \mathrm{A}.$$

(d) *Per-unit:* $S = (1.02\angle0°)(0.9210\angle{+25.20°}) = 0.9394\angle25.20° = 0.850+j0.400$ ✓.

*Actual:* $S = \sqrt3V_{LL}I_L = \sqrt3(14{,}076)(1927) = 46.97\times10^{6}$ VA ✓, at angle $25.20°$, giving $P = 42.5$ MW and $Q = 20.0$ Mvar ✓.

Both hold, as they must — the per-unit system preserves every relationship, and the $\sqrt3$ that appears in the actual calculation is absorbed into $I_{base}$.

**P3** (a) The voltage base follows the turns ratio. With 13.8 kV in the generator zone and a 13.8/69 kV transformer:

$$V_{base,\rm line} = 13.8\times\frac{69}{13.8} = 69\ \mathrm{kV}.$$

$$Z_{base,\rm line} = \frac{69^2}{20} = \frac{4761}{20} = 238.1\ \Omega.$$

(b) $$X_{\rm line,pu} = \frac{25}{238.1} = 0.1050\ \mathrm{pu}.$$

(c) The transformer is already 0.08 pu on 20 MVA (its own rating equals the chosen base, so no conversion is needed).

Load: $|S| = 15$ MVA at 0.85 pf lagging, on a 20 MVA base:

$$S_{L,pu} = \frac{15\angle31.79°}{20} = 0.75\angle31.79° = 0.6375+j0.3949\ \mathrm{pu}.$$

With the load bus at $V_L = 1.0\angle0°$ pu:

$$I_{pu} = \left(\frac{S_{L,pu}}{V_L}\right)^* = (0.6375+j0.3949)^* = 0.6375-j0.3949 = 0.75\angle{-31.79°}\ \mathrm{pu}.$$

Total series reactance from the transformer LV terminals to the load:

$$X_{\rm tot} = 0.08+0.1050 = 0.1850\ \mathrm{pu}.$$

$$V_{\rm LV} = V_L+I\,(jX_{\rm tot}) = 1.0+\left(0.75\angle{-31.79°}\right)\left(0.1850\angle90°\right)$$

$$= 1.0+0.13875\angle58.21° = 1.0+0.07306+j0.11793 = 1.0731+j0.11793,$$

$$|V_{\rm LV}| = \sqrt{1.1515+0.01391} = \sqrt{1.1654} = 1.0795\ \mathrm{pu}, \qquad \angle6.27°.$$

(d) $$V_{\rm LV,actual} = 1.0795(13.8) = 14.90\ \mathrm{kV}\ \text{(line-to-line)}.$$

*Can the generator hold it?* It must supply 8% above nominal — 14.9 kV on a 13.8 kV machine. Whether that is acceptable depends on two things:

- **Generator capability.** Synchronous machines are normally rated to operate over roughly $\pm5\%$ of nominal terminal voltage, so 1.08 pu is *outside* the standard continuous range. The machine would be running with high field current, deep into its excitation limit, and its reactive capability curve may not permit it at this real-power output.
- **Whether this is the right fix at all.** The 8% rise is needed purely to push $Q$ through 0.185 pu of reactance — the $QX$ term from [1.1](01-01-ac-power-and-three-phase.md) P3. The load's reactive demand is 0.395 pu, and it is being hauled the whole way from the generator.

**The engineering answer is to compensate locally rather than to over-excite the generator.** A shunt capacitor bank at the load bus supplying, say, 0.25 pu (5 Mvar) would cut the current to

$$I = 0.6375-j(0.3949-0.25) = 0.6375-j0.1449 = 0.6538\angle{-12.81°}\ \mathrm{pu},$$

$$V_{\rm LV} = 1.0+(0.6538)(0.1850)\angle(90°-12.81°) = 1.0+0.12095\angle77.19° = 1.0268+j0.11794,$$

giving $|V_{\rm LV}| = 1.0336$ pu $= 14.26$ kV — comfortably inside the generator's range.

That is the same conclusion as [1.1](01-01-ac-power-and-three-phase.md) P3, now visible in per-unit and with far less arithmetic: **voltage problems are reactive-power problems, and they are solved where the reactive power is consumed, not where it is generated.**

</details>

## Flashback

**From Lesson 1.2 (Three-phase power and the per-phase equivalent):** A balanced delta load of $Z_\Delta = 45+j60\ \Omega$ per phase is fed at 4160 V (line-to-line). (a) Convert to a wye equivalent. (b) Find the line current and total complex power. (c) Express the load impedance in per-unit on 5 MVA and 4160 V.

<details>
<summary>Solution</summary>

(a) $$Z_Y = \frac{Z_\Delta}{3} = \frac{45+j60}{3} = 15+j20 = 25\angle53.13°\ \Omega.$$

(b) $V_\phi = 4160/\sqrt3 = 2402$ V:

$$I_L = \frac{2402}{25} = 96.08\ \mathrm{A}\angle{-53.13°},$$

$$|S| = 3V_\phi I_\phi = 3(2402)(96.08) = 692{,}400\ \mathrm{VA} = 692.4\ \mathrm{kVA},$$

$$P = 692.4(0.6) = 415.4\ \mathrm{kW}, \qquad Q = 692.4(0.8) = 553.9\ \mathrm{kvar}.$$

(c) $$Z_{base} = \frac{(4.16)^2}{5} = \frac{17.306}{5} = 3.461\ \Omega,$$

$$Z_{pu} = \frac{15+j20}{3.461} = 4.334+j5.779 = 7.223\angle53.13°\ \mathrm{pu}.$$

*Check via power:* $S_{pu} = V_{pu}^2/Z_{pu}^*$ with $V_{pu} = 1.0$:

$$|S_{pu}| = \frac{1}{7.223} = 0.13845\ \mathrm{pu} \quad\Longrightarrow\quad |S| = 0.13845(5\ \mathrm{MVA}) = 692.3\ \mathrm{kVA} \ \checkmark.$$

Note that the **wye** equivalent impedance is the one converted to per-unit, not the delta value — per-unit is built on the per-phase equivalent circuit, which is always wye. Converting $Z_\Delta$ directly would give an answer three times too large.

</details>

## Connections

- **Backward:** the per-phase circuit being normalized is [1.2](01-02-per-phase-equivalent.md)'s, and the $\sqrt3$ relationships that cancel in $Z_{base}$ are [1.1](01-01-ac-power-and-three-phase.md)'s.
- **Forward:** [1.4](01-04-base-changes-one-line-diagram.md) converts nameplate values to a common base and assembles the impedance diagram; every calculation in Modules 2–4 is done in per-unit on that diagram.
- **Sideways:** normalizing by a characteristic scale so the governing equations become dimensionless with $O(1)$ coefficients is exactly the nondimensionalization of [`fluid-dynamics`](../../fluid-dynamics/syllabus.md) — per-unit is the power engineer's Reynolds number, and "everything near 1.0" is the same benefit that makes dimensionless groups useful there.
