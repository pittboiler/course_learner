# Power Systems · Lesson 1.1: AC power recalled, and balanced three-phase

> ⏱ ~15 min · Module 1: Three-phase power and the per-unit system · Builds on: [`circuits` 4.3](../../circuits/lessons/04-03-ac-power-power-factor.md), [`circuits` 4.2](../../circuits/lessons/04-02-impedance-phasor-analysis.md) · Unlocks: [1.2 Three-phase power and the per-phase equivalent](01-02-per-phase-equivalent.md), [1.3 The per-unit system](01-03-the-per-unit-system.md)

## Why this matters

The grid is three-phase, and it is three-phase for reasons that are worth understanding before you compute anything with it. Three-phase delivers **constant instantaneous power** — a single-phase load pulses at twice the line frequency, which shakes a generator shaft; three balanced phases sum to a steady number. It needs **less conductor** for the same power. And it produces a **rotating magnetic field** for free, which is why every industrial motor is three-phase and why the whole system exists at all.

This lesson does two things. It reloads the single-phase power vocabulary — $P$, $Q$, $S$, power factor — which [`circuits` 4.3](../../circuits/lessons/04-03-ac-power-power-factor.md) already derived from $p(t) = v(t)i(t)$, so this is a lookup pass rather than a derivation. Then it does the genuinely new part: the wye/delta algebra and the $\sqrt3$ and $30°$ relationships that every subsequent lesson uses without comment. Both live on the [reference card](../reference.md#three-phase-relationships) once derived.

## The idea

**Reactive power is not a bookkeeping fiction.** Current that lags the voltage produces a component of instantaneous power that flows *into* the load for a quarter cycle and back *out* the next — energy sloshing into and out of magnetic fields, averaging to zero over a cycle. It does no work, but the wires must carry it, the transformers must be sized for it, and the generators must supply it. A grid operator worries about $Q$ almost as much as $P$, and most of the control actions in a real control room are about voltage and reactive power rather than about watts.

**Three-phase is three single-phase sources 120° apart.** Take three sinusoids of equal magnitude, displaced by a third of a cycle each. Their sum is exactly zero at every instant — which is the whole trick. That is why a balanced wye connection needs no neutral current, why the instantaneous power is constant, and why a three-phase system can deliver the same power on three conductors that single-phase needs four for.

**Two ways to connect them.** Tie the three sources to a common point and you have a **wye** (Y, star); the common point is the neutral. Tie them head to tail in a loop and you have a **delta** (Δ); there is no neutral at all. Each has its own relationship between what you measure at the terminals (line quantities) and what exists inside each source or load (phase quantities), and the whole of three-phase arithmetic is keeping those two straight.

The relationships are dual, and worth memorizing as a pair rather than four separate facts: **wye multiplies voltage by $\sqrt3$ and leaves current alone; delta multiplies current by $\sqrt3$ and leaves voltage alone.** In both, the $\sqrt3$ comes with a $30°$ phase shift, and the sign of that shift is set by the phase sequence.

## The formal version

**Single-phase power (reload).** With $V$ and $I$ as RMS phasors and $\theta$ the angle by which current lags voltage:

$$\boxed{\;S = VI^* = P+jQ, \qquad P = VI\cos\theta, \qquad Q = VI\sin\theta, \qquad |S| = VI = \sqrt{P^2+Q^2}.\;}$$

*In words: complex power is voltage times conjugated current; its real part does work and its imaginary part sloshes.* Derived in [`circuits` 4.3](../../circuits/lessons/04-03-ac-power-power-factor.md).

| Quantity | Symbol | Unit | Meaning |
|---|---|---|---|
| Real (active) power | $P$ | W | net energy transfer — does work |
| Reactive power | $Q$ | var | oscillates into and out of fields |
| Apparent power | $S$ | VA | what the conductors and transformers must be sized for |
| Power factor | $\mathrm{pf} = \cos\theta = P/|S|$ | — | fraction of apparent power that does work |

**Sign convention, which matters.** Using $S = VI^*$ with load current *into* the load:

- **Inductive load** (current lags): $\theta>0$, $Q>0$, power factor **lagging**. Motors, transformers, lines.
- **Capacitive load** (current leads): $\theta<0$, $Q<0$, power factor **leading**. Capacitor banks, lightly loaded cables.

*In words: inductors absorb reactive power and capacitors supply it* — which is exactly why a capacitor bank next to an inductive load fixes the power factor locally so the line stops hauling the $Q$.

**Balanced three-phase source.** Three phasors of equal magnitude, $120°$ apart. For **positive (abc) sequence**:

$$V_{an} = V_\phi\angle0°, \qquad V_{bn} = V_\phi\angle{-120°}, \qquad V_{cn} = V_\phi\angle{+120°},$$

and the defining identity:

$$V_{an}+V_{bn}+V_{cn} = 0.$$

*In words: three equal phasors at $120°$ sum to zero — which is why the neutral carries no current in a balanced system.*

**The $a$-operator.** Define $a = 1\angle120° = -\tfrac12+j\tfrac{\sqrt3}{2}$. Then $a^2 = 1\angle240°$, $a^3 = 1$, and $1+a+a^2 = 0$. Positive sequence is $(V, a^2V, aV)$ for phases $(a,b,c)$. This operator does all the work in [4.2](04-02-symmetrical-components.md).

**Wye (Y) connection.**

$$\boxed{\;V_{LL} = \sqrt3\,V_{\phi}\angle{+30°}, \qquad I_L = I_\phi.\;}$$

*In words: in a wye, line-to-line voltage is $\sqrt3$ times line-to-neutral and leads it by $30°$; the line current is the phase current, because there is only one path.*

The derivation is one subtraction:

$$V_{ab} = V_{an}-V_{bn} = V_\phi\angle0°-V_\phi\angle{-120°} = V_\phi\left[1-\left(-\tfrac12-j\tfrac{\sqrt3}{2}\right)\right] = V_\phi\left(\tfrac32+j\tfrac{\sqrt3}{2}\right) = \sqrt3\,V_\phi\angle30°.$$

**Delta (Δ) connection.**

$$\boxed{\;V_{LL} = V_\phi, \qquad I_L = \sqrt3\,I_\phi\angle{-30°}.\;}$$

*In words: in a delta, the phase element sits directly across two lines so it sees the full line voltage; the line current is the difference of two phase currents, giving $\sqrt3$ and a $-30°$ shift.*

**The duality, stated once.** Wye: voltage gets the $\sqrt3$. Delta: current gets the $\sqrt3$. In both cases the $\sqrt3$-scaled quantity is a *difference* of two phase quantities $120°$ apart, and $|1-1\angle{-120°}| = \sqrt3$ is where the number comes from.

**Phase sequence.** Positive (abc) sequence has $b$ lagging $a$ by $120°$; negative (acb) sequence has $b$ *leading* $a$. Sequence sets the direction a motor turns, so swapping any two leads reverses a three-phase motor — and it flips the sign of every $30°$ shift above.

**Why the power is constant.** With balanced voltages and currents,

$$p(t) = \sum_{k=a,b,c}v_k(t)i_k(t) = 3V_\phi I_\phi\cos\theta = \text{constant},$$

because the three double-frequency terms are themselves $120°$ apart in $2\omega t$ and sum to zero. *In words: the pulsating parts cancel among the phases, so a three-phase machine sees steady torque.* A single-phase motor does not, which is why single-phase machines need starting windings and vibrate.

**Standard voltages worth recognizing.** In North America: 120/208 V (wye, small commercial), 277/480 V (wye, industrial), then transmission at 69, 115, 138, 230, 345, 500, 765 kV. A voltage quoted for a three-phase system is **always line-to-line** unless it is written as a pair like 120/208.

## Picture

![A two-panel figure. Left: a phasor diagram of a balanced wye source, showing the three line-to-neutral phasors V_an, V_bn, V_cn at 120 degrees apart, with the line-to-line phasor V_ab drawn as the vector difference V_an minus V_bn, visibly root-three times longer and leading V_an by 30 degrees. Right: side-by-side wye and delta connection schematics, the wye showing three impedances joined at a neutral with line current equal to phase current, and the delta showing three impedances in a loop with the phase element across the full line voltage and line current equal to root-three times phase current.](assets/01-01-fig1.svg)

Left: where the $\sqrt3$ and the $30°$ come from. $V_{ab}$ is the *difference* of two phasors $120°$ apart — geometrically the long diagonal of a rhombus with unit sides and a $60°$ angle, which has length $\sqrt3$ and bisects the angle, giving the $30°$ lead. Every $\sqrt3$ in this course traces back to this triangle.

Right: the two connections and their dual relationships. In the wye the line current has only one path through the phase impedance, so $I_L = I_\phi$; the $\sqrt3$ lands on the voltage. In the delta the phase impedance sits across the full line voltage, so $V_{LL} = V_\phi$; the $\sqrt3$ lands on the current instead.

## Worked examples

**Example 1 (a balanced wye load, end to end).** A balanced wye-connected load of $Z = 12+j9\ \Omega$ per phase is supplied from a 208 V (line-to-line), 60 Hz three-phase source. Find the phase voltage, line current, $P$, $Q$, $S$ and the power factor.

*Phase voltage.* For a wye, $V_\phi = V_{LL}/\sqrt3$:

$$V_\phi = \frac{208}{\sqrt3} = 120.1\ \mathrm{V}.$$

*Impedance in polar form.*

$$Z = 12+j9 = \sqrt{144+81}\,\angle\arctan\frac{9}{12} = 15\angle36.87°\ \Omega.$$

*Line current.* In a wye, $I_L = I_\phi$, and each phase sees $V_\phi$ across $Z$:

$$I_L = I_\phi = \frac{120.1}{15} = 8.01\ \mathrm{A}, \quad\text{lagging } V_{an} \text{ by } 36.87°.$$

*Powers.* Per phase, $S_\phi = V_\phi I_\phi^*$; total is three times that:

$$P = 3V_\phi I_\phi\cos\theta = 3(120.1)(8.01)(0.800) = 2308\ \mathrm{W} = 2.31\ \mathrm{kW},$$
$$Q = 3V_\phi I_\phi\sin\theta = 3(120.1)(8.01)(0.600) = 1731\ \mathrm{var} = 1.73\ \mathrm{kvar},$$
$$|S| = 3V_\phi I_\phi = 2885\ \mathrm{VA} = 2.88\ \mathrm{kVA}.$$

*Cross-check with the line-quantity formula*, which is how a utility engineer would do it:

$$|S| = \sqrt3\,V_{LL}I_L = \sqrt3(208)(8.01) = 2885\ \mathrm{VA} \ \checkmark.$$

Note that this formula uses **line** quantities with a $\sqrt3$ and *no* factor of 3 — a common source of error, and the reason [1.2](01-02-per-phase-equivalent.md) states it carefully.

*Power factor.*

$$\mathrm{pf} = \cos36.87° = 0.800\ \textbf{lagging}$$

(lagging because the load is inductive, $Q>0$).

*A useful shortcut.* $|S| = 3V_\phi^2/|Z| = 3(120.1)^2/15 = 2885$ VA ✓ — for a constant-impedance load you never need the current at all.

**Example 2 (why delta and wye look different but often aren't).** The same three impedances $Z = 15\angle36.87°\ \Omega$ are now connected in **delta** across the same 208 V source. Find the line current and total power, and compare.

*Phase voltage.* In a delta the element sits across two lines:

$$V_\phi = V_{LL} = 208\ \mathrm{V}.$$

*Phase current.*

$$I_\phi = \frac{208}{15} = 13.87\ \mathrm{A}.$$

*Line current.*

$$I_L = \sqrt3\,I_\phi = \sqrt3(13.87) = 24.02\ \mathrm{A}.$$

*Total power.*

$$|S| = 3V_\phi I_\phi = 3(208)(13.87) = 8654\ \mathrm{VA} = 8.65\ \mathrm{kVA},$$
$$P = 8654(0.800) = 6923\ \mathrm{W}, \qquad Q = 8654(0.600) = 5192\ \mathrm{var}.$$

*The comparison, which is the point.*

$$\frac{S_\Delta}{S_Y} = \frac{8654}{2885} = 3.00.$$

**The same impedances in delta draw exactly three times the power of the same impedances in wye.** The reason is immediate from the formulas: each delta element sees $\sqrt3$ times the voltage, and power goes as $V^2/|Z|$, so $(\sqrt3)^2 = 3$.

*Why this matters practically.* It is the basis of the **wye–delta starter**, once universal on large induction motors: start the motor with its windings in wye (drawing a third of the current and producing a third of the torque, so the inrush is manageable), then switch to delta once it is up to speed for full output. It is also why you must never assume a nameplate impedance without knowing the connection — a factor of three in load is not a rounding error.

*And the conversion that makes them interchangeable.* A delta load of $Z_\Delta$ is equivalent, seen from the lines, to a wye load of

$$Z_Y = \frac{Z_\Delta}{3}.$$

Check: $Z_Y = 15/3 = 5\ \Omega$ gives $|S| = 3(120.1)^2/5 = 8654$ VA ✓ — matching the delta result exactly. [1.2](01-02-per-phase-equivalent.md) uses this constantly, because the per-phase equivalent circuit is always drawn in wye.

## Watch out

- **You might forget that a quoted three-phase voltage is line-to-line.** "A 480 V system" means $V_{LL} = 480$ V and $V_\phi = 277$ V. Only a paired notation like 277/480 states both. Getting this wrong puts a $\sqrt3$ in every downstream number.
- **You might write $|S| = 3V_{LL}I_L$.** The correct forms are $|S| = 3V_\phi I_\phi$ (phase quantities, factor 3) or $|S| = \sqrt3\,V_{LL}I_L$ (line quantities, factor $\sqrt3$). Mixing them gives an answer off by $\sqrt3$.
- **You might assume the $30°$ shift always has the same sign.** It reverses with phase sequence, and it is opposite for wye voltages ($+30°$) and delta currents ($-30°$). It matters most in [2.3](02-03-three-phase-transformer-connections.md), where a Δ-Y transformer bank introduces a $30°$ shift that must be tracked through the whole network.
- **You might treat reactive power as fictitious.** It is not delivered as net energy, but it determines conductor size, transformer rating, and — most importantly — **voltage**. Voltage collapse is a reactive-power phenomenon, and most control-room actions are about $Q$.
- **You might apply balanced-system shortcuts to an unbalanced system.** Everything above (zero neutral current, constant instantaneous power, per-phase reduction) requires balance. Unbalanced systems need the symmetrical components of [4.2](04-02-symmetrical-components.md).

## One-liner

> Three equal phasors $120°$ apart sum to zero, which buys constant power, no neutral current, and a rotating field — and the $\sqrt3$ that lands on wye voltages and delta currents is nothing but the length of the difference of two of them.

## Problems

**P1 (🟢)** A balanced delta-connected load draws 30 kW at 0.85 power factor lagging from a 480 V (line-to-line) source. (a) Find $|S|$ and $Q$. (b) Find the line current. (c) Find the phase current. (d) Find the per-phase impedance.

**P2 (🟡)** A 208 V three-phase source supplies two balanced loads in parallel: load A is wye-connected, $18+j24\ \Omega$ per phase; load B is delta-connected, $45\ \Omega$ resistive per phase. (a) Convert load B to its wye equivalent. (b) Find the total per-phase admittance and the equivalent per-phase impedance. (c) Find the line current and total $P$, $Q$ and power factor. (d) What capacitance per phase (wye-connected) would correct the power factor to unity at 60 Hz?

**P3 (🔴)** A 480 V, three-phase, 60 Hz feeder supplies a 100 kVA load at 0.75 power factor lagging through a line of impedance $0.15+j0.40\ \Omega$ per phase. (a) Find the line current and the sending-end (source) line-to-line voltage. (b) Find the real and reactive power lost in the line. (c) A wye-connected capacitor bank at the load corrects the load power factor to 0.95 lagging. Recompute (a) and (b). (d) Quantify the benefit and explain which of the two effects — lower current or reduced $Q$ flow — matters more for the voltage.

<details>
<summary>Solutions</summary>

**P1** (a) $$|S| = \frac{P}{\mathrm{pf}} = \frac{30}{0.85} = 35.29\ \mathrm{kVA}.$$

$$\theta = \arccos(0.85) = 31.79°, \qquad Q = |S|\sin\theta = 35.29(0.5268) = 18.59\ \mathrm{kvar}.$$

(b) From $|S| = \sqrt3\,V_{LL}I_L$:

$$I_L = \frac{|S|}{\sqrt3\,V_{LL}} = \frac{35{,}290}{\sqrt3(480)} = \frac{35{,}290}{831.4} = 42.45\ \mathrm{A}.$$

(c) In a delta, $I_\phi = I_L/\sqrt3$:

$$I_\phi = \frac{42.45}{\sqrt3} = 24.51\ \mathrm{A}.$$

(d) The delta element sees the full line voltage:

$$|Z_\phi| = \frac{V_{LL}}{I_\phi} = \frac{480}{24.51} = 19.58\ \Omega,$$

$$Z_\phi = 19.58\angle31.79° = 16.64+j10.31\ \Omega.$$

(Check: $|S| = 3V_\phi^2/|Z| = 3(480)^2/19.58 = 35{,}300$ VA ✓.)

**P2** (a) $$Z_{B,Y} = \frac{Z_\Delta}{3} = \frac{45}{3} = 15\ \Omega\ \text{(resistive)}.$$

(b) Per-phase admittances:

$$Y_A = \frac{1}{18+j24} = \frac{18-j24}{18^2+24^2} = \frac{18-j24}{900} = 0.02-j0.02667\ \mathrm{S},$$
$$Y_B = \frac{1}{15} = 0.06667\ \mathrm{S}.$$

$$Y_{\rm tot} = 0.08667-j0.02667\ \mathrm{S}, \qquad |Y| = \sqrt{0.08667^2+0.02667^2} = 0.09068\ \mathrm{S},$$

$$Z_{\rm eq} = \frac{1}{Y_{\rm tot}} = \frac{1}{0.09068\angle{-17.11°}} = 11.03\angle17.11° = 10.54+j3.245\ \Omega.$$

(c) $V_\phi = 208/\sqrt3 = 120.1$ V:

$$I_L = \frac{120.1}{11.03} = 10.89\ \mathrm{A},$$

$$P = 3V_\phi^2\,\mathrm{Re}(Y) = 3(120.1)^2(0.08667) = 3750\ \mathrm{W} = 3.75\ \mathrm{kW},$$
$$Q = 3V_\phi^2\,(-\mathrm{Im}(Y)) = 3(120.1)^2(0.02667) = 1154\ \mathrm{var} = 1.15\ \mathrm{kvar},$$
$$\mathrm{pf} = \cos(17.11°) = 0.956\ \text{lagging}.$$

(Using $P = 3V_\phi^2\mathrm{Re}(Y)$ is much faster than finding currents — worth adopting whenever the load is given as an impedance.)

(d) To cancel $Q = 1154$ var, the capacitor bank must supply that much:

$$Q_C = 3\frac{V_\phi^2}{X_C} = 1154 \quad\Longrightarrow\quad X_C = \frac{3(120.1)^2}{1154} = \frac{43{,}272}{1154} = 37.50\ \Omega,$$

$$C = \frac{1}{2\pi f X_C} = \frac{1}{2\pi(60)(37.50)} = \frac{1}{14{,}137} = 70.7\ \mu\mathrm{F\ per\ phase}.$$

**P3** (a) $$I_L = \frac{|S|}{\sqrt3\,V_{LL}} = \frac{100{,}000}{\sqrt3(480)} = 120.3\ \mathrm{A}.$$

$$\theta = \arccos(0.75) = 41.41°, \qquad I = 120.3\angle{-41.41°}\ \mathrm{A}\ \text{(taking } V_{load} \text{ as reference)}.$$

Per-phase load voltage $V_\phi = 480/\sqrt3 = 277.1\angle0°$ V. Sending-end phase voltage:

$$V_S = V_\phi+IZ_{\rm line} = 277.1+\left(120.3\angle{-41.41°}\right)(0.15+j0.40).$$

$Z_{\rm line} = 0.15+j0.40 = 0.4272\angle69.44°$, so

$$IZ = (120.3)(0.4272)\angle(69.44°-41.41°) = 51.39\angle28.03° = 45.36+j24.15.$$

$$V_S = 277.1+45.36+j24.15 = 322.5+j24.15 = 323.4\angle4.28°\ \mathrm{V},$$

$$V_{S,LL} = \sqrt3(323.4) = 560.1\ \mathrm{V}.$$

(b) $$P_{\rm loss} = 3I^2R = 3(120.3)^2(0.15) = 6513\ \mathrm{W} = 6.51\ \mathrm{kW},$$
$$Q_{\rm loss} = 3I^2X = 3(120.3)^2(0.40) = 17{,}367\ \mathrm{var} = 17.37\ \mathrm{kvar}.$$

(c) Correcting to 0.95 lagging. The load's real power is unchanged:

$$P = 100(0.75) = 75\ \mathrm{kW}, \qquad |S|_{\rm new} = \frac{75}{0.95} = 78.95\ \mathrm{kVA},$$

$$I_{L,\rm new} = \frac{78{,}950}{\sqrt3(480)} = 94.96\ \mathrm{A}, \qquad \theta_{\rm new} = \arccos(0.95) = 18.19°.$$

$$IZ = (94.96)(0.4272)\angle(69.44°-18.19°) = 40.57\angle51.25° = 25.41+j31.64,$$

$$V_S = 277.1+25.41+j31.64 = 302.5+j31.64 = 304.2\angle5.97°\ \mathrm{V}, \qquad V_{S,LL} = 526.9\ \mathrm{V}.$$

$$P_{\rm loss} = 3(94.96)^2(0.15) = 4058\ \mathrm{W} = 4.06\ \mathrm{kW}, \qquad Q_{\rm loss} = 3(94.96)^2(0.40) = 10{,}822\ \mathrm{var} = 10.82\ \mathrm{kvar}.$$

(d) *The benefit:*

| | before | after | change |
|---|---|---|---|
| Line current | 120.3 A | 94.96 A | $-21\%$ |
| $P_{\rm loss}$ | 6.51 kW | 4.06 kW | $-38\%$ |
| Sending-end $V_{LL}$ | 560.1 V | 526.9 V | $-33.2$ V |
| Voltage drop | 80.1 V | 46.9 V | $-41\%$ |

Losses fell by 38% (they scale as $I^2$, so a 21% current reduction gives $1-0.79^2 = 38\%$), and the source no longer has to be pushed 17% above nominal to hold 480 V at the load.

*Which effect matters more for voltage?* Both are the same current reduction, but the *voltage* benefit is dominated by the **reactive** part, and the reason is worth stating. The approximate voltage drop across a line is

$$\Delta V \approx I(R\cos\theta+X\sin\theta) = \frac{PR+QX}{V}.$$

Here $X/R = 0.40/0.15 = 2.67$, so the reactive term is weighted 2.67 times more heavily per unit of power. Evaluating with the original numbers:

$$\Delta V \approx \frac{(25{,}000)(0.15)+(22{,}050)(0.40)}{277.1} = \frac{3750+8820}{277.1} = 45.4\ \mathrm{V\ per\ phase},$$

using per-phase $P = 25$ kW and $Q = 22.05$ kvar. **The $QX$ term contributes 70% of the drop** despite $Q$ being smaller than $P$, purely because transmission lines are far more inductive than resistive.

That asymmetry is one of the organizing facts of power-system operation: **real power flow is controlled by angle, reactive power flow by voltage magnitude**, and since $X\gg R$ on transmission, voltage is managed almost entirely by moving $Q$ around — with capacitor banks, generator excitation, and tap changers. It is why [3.2](03-02-power-flow-problem-bus-types.md) can decouple the power-flow Jacobian, and why the fast-decoupled method works at all.

</details>

## Flashback

*(First lesson of the course — retrieval practice starts in [1.2](01-02-per-phase-equivalent.md).)*

## Connections

- **Backward:** $P$, $Q$, $S$ and power factor are derived in [`circuits` 4.3](../../circuits/lessons/04-03-ac-power-power-factor.md); phasor and impedance algebra is [`circuits` 4.2](../../circuits/lessons/04-02-impedance-phasor-analysis.md).
- **Forward:** [1.2](01-02-per-phase-equivalent.md) collapses the three-phase circuit to one phase; [1.3](01-03-the-per-unit-system.md) normalizes it; the $a$-operator introduced here is the engine of [4.2](04-02-symmetrical-components.md).
- **Sideways:** three phasors summing to zero is the $N=3$ case of the discrete Fourier basis — the same orthogonality that makes [`signals-systems` 3.4](../../signals-systems/lessons/03-04-discrete-fourier-transform.md)'s DFT work, and symmetrical components in [4.2](04-02-symmetrical-components.md) are literally a 3-point DFT.
