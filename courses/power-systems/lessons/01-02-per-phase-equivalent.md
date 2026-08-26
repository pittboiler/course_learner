# Power Systems · Lesson 1.2: Three-phase power and the per-phase equivalent

> ⏱ ~15 min · Module 1: Three-phase power and the per-unit system · Builds on: [1.1 AC power recalled, and balanced three-phase](01-01-ac-power-and-three-phase.md) · Unlocks: [1.3 The per-unit system](01-03-the-per-unit-system.md), [3.1 The bus admittance matrix](03-01-bus-admittance-matrix.md)

## Why this matters

A three-phase network has three times as many wires as a single-phase one, and if you had to carry all of them through every calculation, analyzing a national grid would be hopeless.

You do not. **If the system is balanced, the three phases carry identical information shifted by $120°$**, so solving one phase solves all three. That reduction — the [per-phase equivalent](../reference.md#per-phase-equivalent) — is what makes every diagram in this course a *single line* with one impedance on it. Every $Y_{bus}$, every power-flow solution, every fault calculation in Modules 3 and 4 is done on a per-phase circuit, and the three-phase answer is recovered at the end by multiplying by three or by $\sqrt3$.

Getting the reduction right, and knowing exactly when it is legal, is therefore the most reused skill in the subject.

## The idea

Take a balanced three-phase source feeding a balanced wye load through three identical lines. Write KVL around the phase-$a$ loop. Then write it around phase $b$ — and notice you get exactly the same equation with every phasor rotated by $-120°$. Phase $c$ likewise, rotated by $+120°$.

So there is only *one* equation. Solve phase $a$, and phases $b$ and $c$ follow by rotation. That is the whole justification, and it rests on two things: the sources being balanced, and the impedances being identical in all three phases.

Two consequences make it clean.

**The neutral carries no current**, because the three phase currents are balanced and sum to zero. So the neutral is at zero potential regardless of whether a wire is actually there — which means you may *insert* an ideal neutral connection in the equivalent circuit even for a three-wire system, and the answer is unchanged. That is what lets you draw a single closed loop for phase $a$.

**Delta loads must be converted to wye first**, because the per-phase circuit is always drawn in wye. The conversion is $Z_Y = Z_\Delta/3$, and it is exact for balanced loads.

What you end up with is one loop: one source of $V_{LN}$, one line impedance, one load impedance, returning through an ideal neutral. Solve it like any single-phase circuit. Then scale: total power is three times the per-phase power, and line-to-line voltage is $\sqrt3$ times what you computed.

## The formal version

**Total three-phase power.** With balanced quantities:

$$\boxed{\;P_{3\phi} = 3V_\phi I_\phi\cos\theta = \sqrt3\,V_{LL}I_L\cos\theta,\;}$$
$$Q_{3\phi} = 3V_\phi I_\phi\sin\theta = \sqrt3\,V_{LL}I_L\sin\theta, \qquad |S_{3\phi}| = 3V_\phi I_\phi = \sqrt3\,V_{LL}I_L.$$

*In words: three times the phase quantities, or $\sqrt3$ times the line quantities — and $\theta$ is always the angle of the load impedance, never the $30°$ between line and phase voltage.*

The two forms are identical because the $\sqrt3$ that appears in one factor is cancelled by the $\sqrt3$ removed from the other:

- Wye: $V_{LL} = \sqrt3V_\phi$, $I_L = I_\phi$, so $\sqrt3V_{LL}I_L = \sqrt3(\sqrt3V_\phi)I_\phi = 3V_\phi I_\phi$ ✓
- Delta: $V_{LL} = V_\phi$, $I_L = \sqrt3I_\phi$, so $\sqrt3V_{LL}I_L = \sqrt3V_\phi(\sqrt3I_\phi) = 3V_\phi I_\phi$ ✓

**The line-quantity form works for both connections.** That is why utilities use it exclusively: you can compute a load's power from its terminal measurements without knowing how it is connected internally.

**The $\theta$ trap, stated once.** In $\sqrt3V_{LL}I_L\cos\theta$, the angle $\theta$ is between the **phase** voltage and the **phase** current — that is, the impedance angle. It is *not* the angle between $V_{LL}$ and $I_L$, which differs by $30°$. The $\sqrt3$ formula already accounts for that $30°$; inserting it again is the single most common error in three-phase calculations.

**Delta-to-wye conversion (balanced).**

$$\boxed{\;Z_Y = \frac{Z_\Delta}{3}.\;}$$

*In words: a delta load looks, from the terminals, like a wye load of one third the impedance.* The check is power: the delta element sees $\sqrt3$ times the voltage, and $P\propto V^2/Z$, so $Z$ must be $3\times$ larger to draw the same power.

**The per-phase equivalent circuit.** For a balanced system:

1. Convert every delta element to its wye equivalent.
2. Draw **one phase** — source $V_{LN} = V_{LL}/\sqrt3$, series line impedance, load impedance.
3. Connect all the neutrals with an ideal zero-impedance wire (legal because no current flows in it).
4. Solve as a single-phase circuit.
5. Scale up: $S_{3\phi} = 3S_{1\phi}$; line voltages are $\sqrt3\times$ the computed phase voltages.

*In words: analyze one third of the circuit and multiply the answer by three.*

**When the reduction is legal.** All of the following must hold:

| Requirement | If violated |
|---|---|
| Balanced sources (equal magnitude, $120°$ apart) | use symmetrical components ([4.2](04-02-symmetrical-components.md)) |
| Identical impedance in all three phases | same |
| Balanced loads | same |
| Symmetric (transposed) line geometry | same, or accept small error |

In practice utility systems are balanced to within a percent or two under normal operation, so the per-phase equivalent is used essentially always — and abandoned only for **faults**, which are the archetypally unbalanced event, and which is precisely why Module 4 needs a different tool.

**Choosing a reference.** Take one phasor as $\angle0°$ and measure everything from it. Conventionally the receiving-end (load) voltage is the reference in a line calculation, so the source voltage comes out with a positive angle — the **power angle** $\delta$, which becomes the central variable of [4.5](04-05-swing-equation-rotor-dynamics.md) and [4.6](04-06-transient-stability-equal-area.md).

**Power flow direction.** With $S = VI^*$ and current defined *into* an element:

$$P>0 \Rightarrow \text{element absorbs real power}, \qquad Q>0 \Rightarrow \text{element absorbs reactive power}.$$

A generator therefore has $P<0$ in load convention, which is why power-system convention flips the sign for generators and states injections as positive. [3.2](03-02-power-flow-problem-bus-types.md) fixes this convention properly.

## Picture

![A two-panel figure. Left: a full three-phase circuit with a balanced wye source, three identical line impedances, and a balanced wye load, with the neutral connection drawn as a dashed line carrying zero current. Right: the extracted per-phase equivalent — a single loop with one source of V_LL over root three, one line impedance, and one load impedance returning through the neutral — with annotations showing that the total power is three times this loop's power and the line-to-line voltage is root three times its phase voltage.](assets/01-02-fig1.svg)

Left: the real circuit, and the dashed neutral that carries nothing. Because the three currents sum to zero, that wire could be present or absent without changing a single voltage — which is exactly what licenses the extraction on the right.

Right: what you actually solve. One source, one line impedance, one load. Everything in Modules 2–4 is drawn this way, and the two scaling rules at the bottom are how you get back to three-phase answers. Note the source is $V_{LL}/\sqrt3$, not $V_{LL}$ — the most common slip when setting one of these up.

## Worked examples

**Example 1 (a line feeding a load, done per-phase).** A balanced three-phase load draws 150 kW at 0.80 power factor lagging from a 480 V (line-to-line) bus. It is fed through a line of impedance $0.05+j0.20\ \Omega$ per phase from a source. Find the line current, the source voltage, and the power delivered by the source.

*Per-phase setup.* Load voltage $V_\phi = 480/\sqrt3 = 277.1\angle0°$ V (taking it as reference).

*Line current.* From $P_{3\phi} = \sqrt3V_{LL}I_L\cos\theta$:

$$I_L = \frac{150{,}000}{\sqrt3(480)(0.80)} = \frac{150{,}000}{665.1} = 225.5\ \mathrm{A}.$$

$$\theta = \arccos(0.80) = 36.87°\ \text{lagging}, \qquad I = 225.5\angle{-36.87°}\ \mathrm{A}.$$

*Source voltage.* KVL around the single loop:

$$V_S = V_\phi+IZ_{\rm line}.$$

$Z_{\rm line} = 0.05+j0.20 = 0.2062\angle75.96°$, so

$$IZ = (225.5)(0.2062)\angle(75.96°-36.87°) = 46.50\angle39.09° = 36.08+j29.32,$$

$$V_S = 277.1+36.08+j29.32 = 313.2+j29.32 = 314.5\angle5.35°\ \mathrm{V},$$

$$V_{S,LL} = \sqrt3(314.5) = 544.7\ \mathrm{V}.$$

*Source power.* The source supplies the load plus the line losses:

$$P_{\rm line} = 3I^2R = 3(225.5)^2(0.05) = 7626\ \mathrm{W},$$
$$Q_{\rm line} = 3I^2X = 3(225.5)^2(0.20) = 30{,}505\ \mathrm{var}.$$

Load $Q = 150\tan(36.87°) = 112.5$ kvar, so

$$P_S = 150.0+7.63 = 157.6\ \mathrm{kW}, \qquad Q_S = 112.5+30.5 = 143.0\ \mathrm{kvar}.$$

*Cross-check directly from the source phasors:*

$$S_S = 3V_SI^* = 3(314.5\angle5.35°)(225.5\angle{+36.87°}) = 212{,}760\angle42.22°,$$

giving $P_S = 212.76\cos(42.22°) = 157.6$ kW ✓ and $Q_S = 212.76\sin(42.22°) = 142.9$ kvar ✓.

*What the numbers say.* Delivering 150 kW cost 7.6 kW of loss (5.1%) and required the source to sit 13% above the load voltage. Both figures are dominated by the same current, and both are why power is transmitted at high voltage — [1.3](01-03-the-per-unit-system.md) makes that quantitative.

**Example 2 (mixed wye and delta loads on one bus).** A 4160 V (line-to-line) bus supplies, in parallel: a delta-connected motor load drawing 500 kVA at 0.85 pf lagging, and a wye-connected capacitor bank of $-j250\ \Omega$ per phase. Find the total current drawn from the bus and the resulting power factor.

*Motor load.* Work in complex power — connection is irrelevant when you are given kVA:

$$P_M = 500(0.85) = 425\ \mathrm{kW}, \qquad Q_M = 500\sin(\arccos0.85) = 500(0.5268) = 263.4\ \mathrm{kvar}.$$

$$S_M = 425+j263.4\ \mathrm{kVA}.$$

*Capacitor bank.* Wye-connected, so each element sees $V_\phi = 4160/\sqrt3 = 2402$ V:

$$Q_C = -\frac{3V_\phi^2}{|X_C|} = -\frac{3(2402)^2}{250} = -\frac{1.731\times10^{7}}{250} = -69{,}240\ \mathrm{var} = -69.24\ \mathrm{kvar}.$$

(Negative because a capacitor *supplies* reactive power.) $P_C = 0$.

*Total.*

$$S_{\rm tot} = 425+j(263.4-69.24) = 425+j194.2\ \mathrm{kVA},$$

$$|S_{\rm tot}| = \sqrt{425^2+194.2^2} = \sqrt{180{,}625+37{,}714} = 467.3\ \mathrm{kVA},$$

$$\mathrm{pf} = \frac{425}{467.3} = 0.909\ \text{lagging}.$$

*Line current.*

$$I_L = \frac{|S_{\rm tot}|}{\sqrt3V_{LL}} = \frac{467{,}300}{\sqrt3(4160)} = \frac{467{,}300}{7205} = 64.86\ \mathrm{A}.$$

*The lesson in method.* Notice that the two loads' connections — one delta, one wye — never entered the calculation. **Complex powers add regardless of connection**, because $S$ is a terminal quantity. Converting to a per-phase impedance would have required the Δ→Y step; adding complex powers did not.

That is the practical reason power engineers work in $S = P+jQ$ rather than in impedances: loads are specified as MW and Mvar, they add trivially, and the connection is somebody else's problem. Impedances are used for *network elements* (lines, transformers) where the geometry is known and fixed; complex power is used for *loads* where it is not. [3.2](03-02-power-flow-problem-bus-types.md) builds the whole power-flow formulation on exactly this split — network as admittance, loads as injections.

## Watch out

- **You might use the $30°$ angle in the power formula.** In $P = \sqrt3V_{LL}I_L\cos\theta$, $\theta$ is the *impedance* angle (between phase voltage and phase current). The $\sqrt3$ already contains the $30°$. Using $\cos(\theta+30°)$ is wrong.
- **You might forget to divide the source by $\sqrt3$.** The per-phase equivalent uses $V_{LN} = V_{LL}/\sqrt3$. Building the loop with $V_{LL}$ overstates every voltage by 73%.
- **You might apply the per-phase reduction to an unbalanced system.** It is exact only for balance. Faults, single-phase loads, and untransposed lines all break it — which is what Module 4's symmetrical components exist for.
- **You might convert a delta load with $Z_Y = 3Z_\Delta$.** It is $Z_\Delta/3$. Check by power: the delta element sees more voltage, so the equivalent wye element must have *less* impedance to draw the same power.
- **You might add loads by impedance when they are given in kVA.** Complex powers add directly; impedances add as parallel admittances *and* require knowing the connection. Use whichever the data is given in.

## One-liner

> A balanced three-phase circuit is one circuit written three times, so solve one phase with $V_{LL}/\sqrt3$ and an ideal neutral, then scale by three — and remember that the $\theta$ in $\sqrt3V_{LL}I_L\cos\theta$ is the impedance angle, not the $30°$.

## Problems

**P1 (🟢)** A balanced three-phase load absorbs 250 kW at 0.90 power factor lagging from a 13.8 kV (line-to-line) bus. (a) Find $|S|$, $Q$, and the line current. (b) Find the equivalent per-phase wye impedance. (c) If the load were instead specified as delta-connected, what per-phase impedance would it have?

**P2 (🟡)** A 2400 V (line-to-line) source feeds, through a line of $0.4+j1.2\ \Omega$ per phase, a balanced delta load of $Z_\Delta = 30+j40\ \Omega$ per phase. (a) Convert the load to wye and draw the per-phase circuit. (b) Find the line current. (c) Find the load terminal voltage (line-to-line) and the voltage regulation. (d) Find the total real power delivered to the load and lost in the line.

**P3 (🔴)** A 34.5 kV (line-to-line) substation bus supplies two feeders. Feeder A delivers 8 MW at 0.88 pf lagging; feeder B delivers 5 MVA at 0.95 pf leading. A third feeder is to be added carrying 6 MW, and the substation transformer is rated 20 MVA. (a) Find the total complex power on the bus before the addition, and the bus power factor. (b) What is the maximum power factor angle the new feeder may have if the transformer must not exceed its rating? (c) Express that as a power-factor limit, and state whether lagging or leading is more permissive. (d) Instead of constraining feeder C, a capacitor bank is installed on the bus. What size (Mvar) brings the *original two* feeders to unity power factor, and how much transformer headroom does that free?

<details>
<summary>Solutions</summary>

**P1** (a) $$|S| = \frac{P}{\mathrm{pf}} = \frac{250}{0.90} = 277.8\ \mathrm{kVA},$$
$$\theta = \arccos(0.90) = 25.84°, \qquad Q = 277.8\sin(25.84°) = 277.8(0.4359) = 121.1\ \mathrm{kvar},$$
$$I_L = \frac{277{,}800}{\sqrt3(13{,}800)} = \frac{277{,}800}{23{,}902} = 11.62\ \mathrm{A}.$$

(b) $V_\phi = 13{,}800/\sqrt3 = 7967$ V:

$$|Z_Y| = \frac{V_\phi}{I_\phi} = \frac{7967}{11.62} = 685.6\ \Omega,$$
$$Z_Y = 685.6\angle25.84° = 617.1+j298.8\ \Omega.$$

(Check: $P = 3V_\phi^2\cos\theta/|Z| = 3(7967)^2(0.90)/685.6 = 250{,}000$ W ✓.)

(c) $$Z_\Delta = 3Z_Y = 1851+j896.4 = 2057\angle25.84°\ \Omega.$$

**P2** (a) $$Z_Y = \frac{Z_\Delta}{3} = \frac{30+j40}{3} = 10+j13.33\ \Omega.$$

Per-phase circuit: source $V_S = 2400/\sqrt3 = 1386\angle0°$ V, in series with $0.4+j1.2$, feeding $10+j13.33$.

(b) Total per-phase impedance:

$$Z_{\rm tot} = (0.4+10)+j(1.2+13.33) = 10.4+j14.53 = 17.87\angle54.42°\ \Omega,$$

$$I_L = \frac{1386}{17.87} = 77.56\ \mathrm{A}\angle{-54.42°}.$$

(c) Load phase voltage:

$$V_{\rm load,\phi} = I\,Z_Y = (77.56)(16.66)\angle(-54.42°+53.13°) = 1292\angle{-1.29°}\ \mathrm{V},$$

using $|Z_Y| = \sqrt{100+177.7} = 16.66\ \Omega$ and $\angle Z_Y = 53.13°$.

$$V_{\rm load,LL} = \sqrt3(1292) = 2238\ \mathrm{V}.$$

Voltage regulation, measured from the fixed source:

$$\mathrm{VR} = \frac{V_{S,LL}-V_{\rm load,LL}}{V_{\rm load,LL}} = \frac{2400-2238}{2238} = 7.24\%.$$

(d) $$P_{\rm load} = 3I^2R_Y = 3(77.56)^2(10) = 180{,}500\ \mathrm{W} = 180.5\ \mathrm{kW},$$
$$P_{\rm line} = 3I^2R_{\rm line} = 3(77.56)^2(0.4) = 7220\ \mathrm{W} = 7.22\ \mathrm{kW}.$$

(Total from the source: $3(77.56)^2(10.4) = 187.7$ kW ✓, and efficiency $= 180.5/187.7 = 96.2\%$.)

**P3** (a) *Feeder A:* $P_A = 8$ MW, $\theta_A = \arccos(0.88) = 28.36°$,

$$Q_A = 8\tan(28.36°) = 8(0.5397) = 4.318\ \mathrm{Mvar\ (lagging, so } +).$$

*Feeder B:* $|S_B| = 5$ MVA at 0.95 **leading**,

$$P_B = 5(0.95) = 4.75\ \mathrm{MW}, \qquad Q_B = -5\sin(\arccos0.95) = -5(0.3122) = -1.561\ \mathrm{Mvar}.$$

$$S_{\rm tot} = (8+4.75)+j(4.318-1.561) = 12.75+j2.757\ \mathrm{MVA},$$

$$|S_{\rm tot}| = \sqrt{162.56+7.601} = 13.04\ \mathrm{MVA}, \qquad \mathrm{pf} = \frac{12.75}{13.04} = 0.978\ \text{lagging}.$$

(b) Adding feeder C with $P_C = 6$ MW and unknown $Q_C$, the transformer limit is

$$|S_{\rm new}| = \sqrt{(12.75+6)^2+(2.757+Q_C)^2} \le 20,$$

$$(18.75)^2+(2.757+Q_C)^2 \le 400 \quad\Longrightarrow\quad (2.757+Q_C)^2 \le 400-351.6 = 48.44,$$

$$-6.960 \le 2.757+Q_C \le 6.960 \quad\Longrightarrow\quad -9.717 \le Q_C \le 4.203\ \mathrm{Mvar}.$$

The **lagging** limit is the binding one: $Q_C \le 4.203$ Mvar.

$$\theta_C \le \arctan\frac{4.203}{6} = \arctan(0.7005) = 35.01°.$$

(c) $$\mathrm{pf}_C \ge \cos(35.01°) = 0.819\ \text{lagging}.$$

On the leading side, $Q_C \ge -9.717$ Mvar gives $\theta_C \le \arctan(9.717/6) = 58.29°$, i.e. pf $\ge0.525$ **leading**.

**Leading is far more permissive** — the feeder could run at 0.53 leading but only 0.82 lagging. The reason is that the bus already carries $+2.757$ Mvar of lagging reactive power, so a leading feeder *cancels* some of it and moves the operating point away from the rating circle, while a lagging feeder adds to it. Reactive power is signed, and the existing imbalance decides which direction has room.

(d) To bring the original two feeders to unity power factor the bank must supply their net $Q$:

$$Q_{\rm cap} = 2.757\ \mathrm{Mvar}.$$

With the bank installed, the bus carries $S = 12.75+j0$, i.e. 12.75 MVA. Adding feeder C at 6 MW and $Q_C$:

$$(18.75)^2+Q_C^2\le400 \quad\Longrightarrow\quad |Q_C|\le6.960\ \mathrm{Mvar},$$

so feeder C may now run down to $\mathrm{pf} = \cos(\arctan(6.960/6)) = \cos(49.24°) = 0.653$ lagging — a substantial relaxation from 0.819.

*Headroom freed.* Before the bank, apparent power was 13.04 MVA; after, 12.75 MVA — only 0.29 MVA of direct relief, which looks disappointing. But the *useful* measure is how much additional load the transformer can now serve. Before: $\sqrt{400-13.04^2}$ is not the right question either, since new load adds vectorially.

The honest framing: a 2.757 Mvar bank costing perhaps 60 000 dollars relaxed feeder C's power-factor requirement from 0.82 to 0.65, which in practice is the difference between "the new industrial customer must install their own correction" and "connect them as they are." **Reactive compensation buys transformer capacity far more cheaply than a new transformer does** — a 20 MVA substation transformer runs to seven figures — and that economics is why capacitor banks are on essentially every distribution feeder.

(Note also the quadrature effect: because $|S| = \sqrt{P^2+Q^2}$, removing $Q$ when $Q\ll P$ buys little, but removing it when $Q\sim P$ buys a great deal. Correcting a 0.98 pf bus is nearly pointless; correcting a 0.75 pf bus is transformative. Compensation is deployed where the power factor is *bad*, not uniformly.)

</details>

## Flashback

**From Lesson 1.1 (AC power recalled, and balanced three-phase):** A balanced wye load of $20\angle30°\ \Omega$ per phase is fed from a 600 V (line-to-line) source. (a) Find the phase voltage and line current. (b) Find $P$, $Q$ and $|S|$. (c) Find the equivalent delta impedance that would draw the same power.

<details>
<summary>Solution</summary>

(a) $$V_\phi = \frac{600}{\sqrt3} = 346.4\ \mathrm{V}, \qquad I_L = I_\phi = \frac{346.4}{20} = 17.32\ \mathrm{A}\angle{-30°}.$$

(b) $$|S| = 3V_\phi I_\phi = 3(346.4)(17.32) = 18{,}000\ \mathrm{VA} = 18.0\ \mathrm{kVA},$$
$$P = 18.0\cos30° = 15.59\ \mathrm{kW}, \qquad Q = 18.0\sin30° = 9.00\ \mathrm{kvar}.$$

(Check with line quantities: $\sqrt3(600)(17.32) = 18{,}000$ VA ✓.)

(c) $$Z_\Delta = 3Z_Y = 60\angle30°\ \Omega.$$

Verify: the delta element sees $V_{LL} = 600$ V, so $I_\phi = 600/60 = 10$ A, $|S| = 3(600)(10) = 18{,}000$ VA ✓ — identical, as it must be.

Note the internal quantities differ completely (17.32 A through a 20 Ω wye element versus 10 A through a 60 Ω delta element) while every *terminal* quantity matches. That is exactly what "equivalent" means, and it is why the per-phase equivalent can substitute one for the other with impunity.

</details>

## Connections

- **Backward:** the $\sqrt3$ and $30°$ relationships and the Δ→Y conversion are [1.1](01-01-ac-power-and-three-phase.md)'s.
- **Forward:** [1.3](01-03-the-per-unit-system.md) normalizes this single-phase circuit so transformers vanish from it; [3.1](03-01-bus-admittance-matrix.md) assembles many such per-phase circuits into a network; Module 4 abandons the reduction when faults make the system unbalanced.
- **Sideways:** "exploit a symmetry to reduce three coupled equations to one" is the same move as using a symmetry-adapted basis in [`representation-theory`](../../representation-theory/syllabus.md) — and symmetrical components in [4.2](04-02-symmetrical-components.md) is precisely that idea done properly, with the balanced case as the trivial one-component instance.
