# Power Systems · Lesson 4.3: Sequence networks and unsymmetrical faults

> ⏱ ~15 min · Module 4: Faults, protection, and stability · Builds on: [4.2 Symmetrical components](04-02-symmetrical-components.md), [4.1 Symmetrical faults](04-01-symmetrical-faults.md) · Unlocks: [4.4 Protection and relaying basics](04-04-protection-and-relaying.md)

## Why this matters

[4.2](04-02-symmetrical-components.md) supplied the decomposition. This lesson supplies the payoff: a procedure that turns any unbalanced fault into a small network problem.

The three [sequence networks](../reference.md#sequence-network) are drawn once for the system. Then the **fault type determines only how they are connected together** — in series, in parallel, or one of them ignored. Four fault types, four connection patterns, and every unbalanced short circuit on any network falls out.

This is the calculation that sizes every breaker and sets every ground relay on the grid, and single-line-to-ground faults — 70% of all faults — are exactly the case per-phase analysis cannot touch.

## The idea

Each sequence network is the whole power system as seen by that sequence, viewed from the fault bus and reduced to its Thevenin equivalent:

**Positive-sequence network.** Generators as EMF sources behind $Z_1$, all lines and transformers at their $Z_1$. **The only network with a source**, because a synchronous machine generates only positive-sequence voltage.

**Negative-sequence network.** The same topology with $Z_2$ values, no sources.

**Zero-sequence network.** The topology can be *completely different*, because it depends on transformer connections and grounding — deltas block zero sequence, ungrounded neutrals block it, and neutral impedances appear as $3Z_n$.

Now write the fault's boundary conditions in phase quantities, translate them into sequence quantities, and read off how the networks must connect.

For a single-line-to-ground fault on phase $a$: $I_b = I_c = 0$ and $V_a = 0$. Translating gives $I_0 = I_1 = I_2$ (equal currents) and $V_0+V_1+V_2 = 0$ (voltages summing to zero). **Equal current through each with voltages summing to zero is a series connection** — so the three networks go in series, and the fault current is $3E/(Z_0+Z_1+Z_2)$.

Every fault type works the same way: boundary conditions in, connection pattern out.

## The formal version

**The three networks, as Thevenin equivalents at the fault bus.**

$$Z_1 = \text{positive-sequence Thevenin impedance (with a source } E\text{)},$$
$$Z_2 = \text{negative-sequence Thevenin impedance}, \qquad Z_0 = \text{zero-sequence Thevenin impedance}.$$

**Fault formulas.** With prefault voltage $E$ (usually $1.0$ pu) and fault impedance $Z_f$:

| Fault | Connection | Sequence currents | Fault current |
|---|---|---|---|
| Three-phase | positive only | $I_1 = \dfrac{E}{Z_1+Z_f}$, $I_2=I_0=0$ | $I_f = I_1$ |
| Single-line-to-ground | all three in **series** | $I_0=I_1=I_2 = \dfrac{E}{Z_0+Z_1+Z_2+3Z_f}$ | $I_f = 3I_1$ |
| Line-to-line | 1 and 2 in **parallel**, 0 absent | $I_1 = -I_2 = \dfrac{E}{Z_1+Z_2+Z_f}$, $I_0=0$ | $I_f = \sqrt3\,I_1$ |
| Double-line-to-ground | 2 and 0 in parallel, then in series with 1 | $I_1 = \dfrac{E}{Z_1+\dfrac{Z_2(Z_0+3Z_f)}{Z_2+Z_0+3Z_f}}$ | $I_{\rm ground} = 3I_0$ |

**Boldface the two most-used results:**

$$\boxed{\;I_f^{\rm SLG} = \frac{3E}{Z_0+Z_1+Z_2+3Z_f}, \qquad I_f^{\rm LL} = \frac{\sqrt3\,E}{Z_1+Z_2+Z_f}.\;}$$

**Where the $3Z_f$ comes from.** For an SLG fault, $V_a = I_aZ_f = 3I_1Z_f$. Dividing through to put it per-sequence gives $3Z_f$ in the series loop. The same reasoning gives $3Z_f$ in the LLG zero-sequence branch, and a plain $Z_f$ for LL (where the fault impedance is between two phases, not to ground).

**Deriving the SLG connection** (worth seeing once):

Boundary conditions: $I_b = I_c = 0$, $V_a = I_aZ_f$.

$$I_0 = \tfrac13(I_a+0+0) = \tfrac{I_a}{3}, \quad I_1 = \tfrac13(I_a+0+0) = \tfrac{I_a}{3}, \quad I_2 = \tfrac{I_a}{3},$$

so $I_0 = I_1 = I_2$ — **the same current flows in each network**, i.e. they are in series.

$$V_a = V_0+V_1+V_2 = I_aZ_f = 3I_1Z_f.$$

Writing each network's Thevenin relation ($V_1 = E-I_1Z_1$, $V_2 = -I_2Z_2$, $V_0 = -I_0Z_0$) and substituting:

$$E-I_1(Z_0+Z_1+Z_2) = 3I_1Z_f \quad\Longrightarrow\quad I_1 = \frac{E}{Z_0+Z_1+Z_2+3Z_f}\ \checkmark.$$

**Building the zero-sequence network.** The rules from [4.2](04-02-symmetrical-components.md), restated as a construction procedure:

1. A **grounded-wye** winding connects to the zero-sequence bus.
2. A **delta** winding connects to the *reference* (a dead end that traps circulating current) but not through.
3. An **ungrounded wye** is an open circuit.
4. A **neutral impedance $Z_n$** appears as $3Z_n$ in series.
5. Line $Z_0$ is **2–3.5 times** its $Z_1$.

**Relative severity.** Which fault is worst depends entirely on the ratio $Z_0/Z_1$:

$$\frac{I_f^{\rm SLG}}{I_f^{3\phi}} = \frac{3Z_1}{Z_0+Z_1+Z_2}\approx\frac{3Z_1}{2Z_1+Z_0} \quad\text{(taking }Z_2\approx Z_1\text{)}.$$

$$\boxed{\;Z_0<Z_1 \Longrightarrow \text{SLG is worse than three-phase.}\;}$$

*In words: on a strongly grounded system near a generator, the ground fault can exceed the three-phase fault.* Both must be checked when specifying a breaker — [4.1](04-01-symmetrical-faults.md)'s assumption that three-phase is worst is a good default, not a theorem.

**Post-fault voltages.** Once the sequence currents are known:

$$V_1 = E-I_1Z_1, \qquad V_2 = -I_2Z_2, \qquad V_0 = -I_0Z_0,$$

and the phase voltages follow by the reconstruction of [4.2](04-02-symmetrical-components.md). A notable consequence: during an SLG fault on an ungrounded or lightly grounded system, the **healthy phases' voltages rise** — up to $\sqrt3$ times normal when ungrounded — which is why insulation levels depend on the grounding method.

## Picture

![A four-panel figure showing the sequence-network interconnections. Panel one, three-phase fault: only the positive-sequence network with its source, shorted at the fault terminals. Panel two, single-line-to-ground: the positive, negative and zero networks stacked in series in one loop with three times the fault impedance. Panel three, line-to-line: the positive and negative networks connected in parallel across the fault impedance with the zero network absent. Panel four, double-line-to-ground: the negative and zero networks in parallel with each other, that combination in series with the positive network, with three times the fault impedance in the zero branch. Each network is drawn as a box labelled with its Thevenin impedance, the positive one alone carrying a source symbol.](assets/04-03-fig1.svg)

Four fault types, four connection patterns. The positive-sequence network is always present and always the only source; the zero-sequence network appears only when the fault involves ground; and whether the connection is series or parallel comes straight from whether the boundary conditions equate the currents or the voltages.

## Worked examples

**Example 1 (all four faults on one bus).** At a fault bus, $Z_1 = Z_2 = j0.20$ pu and $Z_0 = j0.05$ pu, with $E = 1.0$ pu and $Z_f = 0$. Compute all four fault currents and compare.

*Three-phase.*

$$I_f = \frac{1.0}{j0.20} = -j5.000\ \mathrm{pu}, \qquad |I_f| = 5.000\ \mathrm{pu}.$$

*Single-line-to-ground.* Networks in series:

$$I_0 = I_1 = I_2 = \frac{1.0}{j(0.05+0.20+0.20)} = \frac{1.0}{j0.45} = -j2.222\ \mathrm{pu},$$
$$I_f = 3I_0 = -j6.667\ \mathrm{pu}, \qquad |I_f| = 6.667\ \mathrm{pu}.$$

*Line-to-line* (between $b$ and $c$). Networks 1 and 2 in parallel, zero absent:

$$I_1 = -I_2 = \frac{1.0}{j(0.20+0.20)} = \frac{1.0}{j0.40} = -j2.500\ \mathrm{pu},$$
$$I_b = -I_c = (a^2-a)I_1 = (-j\sqrt3)(-j2.5) = -4.330\ \mathrm{pu}, \qquad |I_b| = 4.330\ \mathrm{pu}.$$

*Cross-check with the formula:* $\sqrt3E/(Z_1+Z_2) = 1.732/0.40 = 4.330$ ✓.

*Double-line-to-ground* ($b$ and $c$ to ground). Networks 2 and 0 in parallel, then in series with 1:

$$Z_2\parallel Z_0 = \frac{(0.20)(0.05)}{0.20+0.05} = \frac{0.01}{0.25} = 0.040,$$
$$I_1 = \frac{1.0}{j(0.20+0.040)} = \frac{1.0}{j0.24} = -j4.167\ \mathrm{pu}.$$

Current divides between the two parallel branches inversely to their impedances:

$$I_2 = -I_1\frac{Z_0}{Z_2+Z_0} = -(-j4.167)\frac{0.05}{0.25} = +j0.833\ \mathrm{pu},$$
$$I_0 = -I_1\frac{Z_2}{Z_2+Z_0} = -(-j4.167)\frac{0.20}{0.25} = +j3.333\ \mathrm{pu}.$$

Phase currents:

$$I_b = I_0+a^2I_1+aI_2 = 6.614\angle130.89°, \qquad I_c = I_0+aI_1+a^2I_2 = 6.614\angle49.11°,$$
$$I_{\rm ground} = 3I_0 = 10.000\ \mathrm{pu}.$$

*The comparison.*

| Fault type | Phase current | Ground current | vs. 3φ |
|---|---|---|---|
| Three-phase | 5.000 | 0 | 100% |
| **SLG** | **6.667** | 6.667 | **133%** |
| Line-to-line | 4.330 | 0 | 87% |
| **LLG** | 6.614 | **10.000** | 132% / **200%** |

*Reading it.*

**The three-phase fault is not the worst here.** SLG exceeds it by 33% because $Z_0 = 0.05 \ll Z_1 = 0.20$ — a solidly grounded bus with a low zero-sequence impedance, typical near a generator or a large grounded-wye transformer bank.

**The ground current in the LLG fault is 10 pu — double the three-phase fault.** This is the largest number in the table and it flows in the *ground path*, so it sizes the ground grid, the neutral connections, and the ground-relay settings. It is easy to miss if only phase currents are tabulated.

**Line-to-line is the mildest**, at 87% of three-phase. It always is, since $\sqrt3/2 = 0.866$ when $Z_1 = Z_2$ — a useful fixed ratio.

**Example 2 (a realistic network, where $Z_0$ is large).** A generator ($Z_1 = Z_2 = j0.15$, $Z_0 = j0.05$, solidly grounded) feeds a $\Delta$–Y$_g$ transformer ($Z = j0.10$, delta on the generator side) and then a line ($Z_1 = Z_2 = j0.10$, $Z_0 = j0.30$). A fault occurs at the far end of the line. Find all four fault currents.

*Positive and negative sequence.* Everything is in series from the generator to the fault:

$$Z_1 = Z_2 = j0.15+j0.10+j0.10 = j0.35\ \mathrm{pu}.$$

*Zero sequence — and here the network is different.* The transformer's **delta winding faces the generator**, so zero-sequence current from the fault flows through the grounded-wye winding, circulates in the delta, and **never reaches the generator**. The generator's $Z_0 = j0.05$ is therefore *not in the path at all*.

$$Z_0 = \underbrace{j0.10}_{\text{transformer}}+\underbrace{j0.30}_{\text{line }Z_0} = j0.40\ \mathrm{pu}.$$

*This is the crux of the example.* $Z_0 = j0.40$ against $Z_1 = j0.35$ — and the ratio $Z_0/Z_1 = 1.14$ is completely different from Example 1's $0.25$, purely because of a transformer connection and the line's ground-return path.

Taking $Z_0 = j0.60$ for a case with a more resistive earth return and a longer line — a common range, since line $Z_0$ runs 2–3.5 times $Z_1$ — gives:

*Three-phase.*

$$I_f = \frac{1.0}{j0.35} = -j2.857\ \mathrm{pu}.$$

*Single-line-to-ground.*

$$I_0 = \frac{1.0}{j(0.60+0.35+0.35)} = \frac{1.0}{j1.30} = -j0.769\ \mathrm{pu}, \qquad I_f = 3(0.769) = 2.308\ \mathrm{pu}.$$

*Line-to-line.*

$$I_1 = \frac{1.0}{j0.70} = -j1.429, \qquad I_f = \sqrt3(1.429) = 2.474\ \mathrm{pu}.$$

*Double-line-to-ground.*

$$Z_2\parallel Z_0 = \frac{(0.35)(0.60)}{0.95} = 0.2211, \qquad I_1 = \frac{1.0}{j(0.35+0.2211)} = -j1.751\ \mathrm{pu},$$
$$I_2 = +j1.106, \qquad I_0 = +j0.645, \qquad I_{\rm ground} = 3(0.645) = 1.935\ \mathrm{pu},$$
$$|I_b| = |I_c| = 2.657\ \mathrm{pu}.$$

*The comparison, and the contrast with Example 1.*

| Fault | Example 1 ($Z_0/Z_1 = 0.25$) | Example 2 ($Z_0/Z_1 = 1.71$) |
|---|---|---|
| Three-phase | 5.000 (100%) | 2.857 (**100%**) |
| SLG | 6.667 (133%) | 2.308 (81%) |
| Line-to-line | 4.330 (87%) | 2.474 (87%) |
| LLG (phase) | 6.614 (132%) | 2.657 (93%) |
| LLG (ground) | 10.000 (200%) | 1.935 (68%) |

**The ranking has completely reversed.** In Example 1, SLG was the worst; in Example 2, the three-phase fault is worst and SLG is the *mildest*. The only thing that changed is $Z_0/Z_1$.

*The general rule, now visible:*

| $Z_0/Z_1$ | Which fault is worst | Typical situation |
|---|---|---|
| $<1$ | SLG | generator bus, solidly grounded Y$_g$ transformer |
| $\approx1$ | roughly equal | close-coupled grounded system |
| $>1$ | three-phase | remote line fault, long ground return |

**Note that line-to-line is 87% in both cases.** That ratio is $\sqrt3/2$ and is independent of $Z_0$, because the zero-sequence network is not involved at all. It is the one entry in the table that never moves.

*Why the delta mattered so much.* Had the transformer been Y$_g$–Y$_g$, the generator's $Z_0 = j0.05$ would have been in the zero-sequence path, giving $Z_0 = j0.05+j0.10+j0.30 = j0.45$ instead of $j0.40$ — a modest change here. But had the transformer been $\Delta$–$\Delta$ or Y–$\Delta$ with an ungrounded wye at the fault side, the zero-sequence network would be **open** and the SLG fault current would be **zero**. A single connection choice spans the range from "worst fault on the system" to "no fault current at all," which is why the zero-sequence network must be drawn explicitly and never assumed to mirror the positive one.

## Watch out

- **You might use the positive-sequence topology for the zero-sequence network.** They are frequently different. Draw the zero-sequence network from the connection rules, every time.
- **You might forget the $3Z_f$.** It is $3Z_f$ for SLG (in the series loop) and for LLG (in the zero branch), but plain $Z_f$ for LL.
- **You might forget the $3Z_n$** for a neutral grounding impedance.
- **You might report $I_1$ as the fault current.** SLG gives $I_f = 3I_1$; LL gives $I_f = \sqrt3 I_1$; only the three-phase fault has $I_f = I_1$.
- **You might assume three-phase is always worst.** It depends on $Z_0/Z_1$, and generator buses routinely violate it.
- **You might overlook the ground current in an LLG fault.** It can be the largest current anywhere in the study, as Example 1's 10 pu shows.
- **You might use $Z_0 = Z_1$ for a line.** It is 2–3.5 times larger.

## One-liner

> Draw three sequence networks — only the positive one has a source, and the zero one has its own topology set by grounding — then connect them in series for SLG, in parallel for LL, and 2-parallel-0-then-series-with-1 for LLG; whether the ground fault beats the three-phase fault comes down to whether $Z_0<Z_1$.

## Problems

**P1 (🟢)** At a fault bus, $Z_1 = Z_2 = j0.25$ pu and $Z_0 = j0.10$ pu, with $E = 1.0$ pu and $Z_f = 0$. (a) Find the three-phase fault current. (b) Find the SLG fault current. (c) State which is worse and why.

**P2 (🟡)** At a fault bus, $Z_1 = j0.25$, $Z_2 = j0.28$, $Z_0 = j0.10$ pu, $E = 1.0$ pu, $Z_f = 0$. (a) Compute all four fault currents (for LLG give both the phase and the ground current). (b) Rank them. (c) On a 100 MVA, 138 kV base, convert the largest to amperes.

**P3 (🔴)** A bus has $Z_1 = Z_2 = j0.20$ and $Z_0 = j0.08$ pu, $E = 1.0$ pu. (a) Find the three-phase, SLG and LL fault currents for a bolted fault. (b) Repeat with an arcing fault impedance $Z_f = j0.05$ pu. (c) Quantify how much each fault type is reduced by the arc impedance, and explain why they differ. (d) A ground relay is set to pick up at 3.0 pu. Determine whether it detects each SLG case, and discuss what this implies about setting ground relays for high-impedance faults.

<details>
<summary>Solutions</summary>

**P1** (a) $$I_f^{3\phi} = \frac{1.0}{j0.25} = -j4.000\ \mathrm{pu}, \qquad |I_f| = 4.000\ \mathrm{pu}.$$

(b) $$I_0 = I_1 = I_2 = \frac{1.0}{j(0.10+0.25+0.25)} = \frac{1.0}{j0.60} = -j1.667\ \mathrm{pu},$$
$$I_f^{\rm SLG} = 3(1.667) = 5.000\ \mathrm{pu}.$$

(c) **SLG is worse**, at 125% of the three-phase fault.

*Why:* $Z_0 = j0.10 < Z_1 = j0.25$. Applying the ratio formula,

$$\frac{I^{\rm SLG}}{I^{3\phi}} = \frac{3Z_1}{Z_0+Z_1+Z_2} = \frac{3(0.25)}{0.60} = 1.25\ \checkmark.$$

Physically, the low $Z_0$ means the ground return path is *easier* than the phase path — characteristic of a solidly grounded bus close to a grounding source. Both faults must be checked when specifying breakers, and here the ground fault sets the rating.

**P2** (a) *Three-phase:*

$$I_f = \frac{1.0}{j0.25} = -j4.000\ \mathrm{pu}.$$

*SLG:*

$$I_0 = I_1 = I_2 = \frac{1.0}{j(0.10+0.25+0.28)} = \frac{1.0}{j0.63} = -j1.587\ \mathrm{pu}, \qquad I_f = 4.762\ \mathrm{pu}.$$

*Line-to-line:*

$$I_1 = \frac{1.0}{j(0.25+0.28)} = \frac{1.0}{j0.53} = -j1.887\ \mathrm{pu}, \qquad I_f = \sqrt3(1.887) = 3.268\ \mathrm{pu}.$$

*Double-line-to-ground:*

$$Z_2\parallel Z_0 = \frac{(0.28)(0.10)}{0.38} = 0.07368,$$
$$I_1 = \frac{1.0}{j(0.25+0.07368)} = \frac{1.0}{j0.32368} = -j3.089\ \mathrm{pu},$$
$$I_2 = -I_1\frac{Z_0}{Z_2+Z_0} = +j3.089\left(\frac{0.10}{0.38}\right) = +j0.813\ \mathrm{pu},$$
$$I_0 = -I_1\frac{Z_2}{Z_2+Z_0} = +j3.089\left(\frac{0.28}{0.38}\right) = +j2.276\ \mathrm{pu}.$$

$$I_b = I_0+a^2I_1+aI_2 = 4.804\angle134.70°, \qquad I_c = 4.804\angle45.30°,$$
$$I_{\rm ground} = 3I_0 = 6.829\ \mathrm{pu}.$$

(b) | Rank | Quantity | Value (pu) |
|---|---|---|
| 1 | LLG ground current | **6.829** |
| 2 | LLG phase current | 4.804 |
| 3 | SLG | 4.762 |
| 4 | Three-phase | 4.000 |
| 5 | Line-to-line | 3.268 |

**The three-phase fault ranks fourth of five.** With $Z_0/Z_1 = 0.40$, every ground-involving fault beats it.

(c) $$I_{base} = \frac{100\times10^{6}}{\sqrt3(138\times10^{3})} = 418.4\ \mathrm{A},$$
$$I_{\rm ground}^{\rm LLG} = 6.829(418.4) = 2857\ \mathrm{A}.$$

For comparison, the largest *phase* current is $4.804(418.4) = 2010$ A. **The ground path carries 42% more current than any phase**, which is what sizes the substation ground grid and the neutral conductors.

**P3** (a) *Bolted* ($Z_f = 0$):

$$I^{3\phi} = \frac{1.0}{j0.20} = 5.000\ \mathrm{pu},$$
$$I^{\rm SLG} = \frac{3(1.0)}{j(0.08+0.20+0.20)} = \frac{3}{0.48} = 6.250\ \mathrm{pu},$$
$$I^{\rm LL} = \frac{\sqrt3(1.0)}{0.40} = 4.330\ \mathrm{pu}.$$

(b) *With $Z_f = j0.05$:*

$$I^{3\phi} = \frac{1.0}{j(0.20+0.05)} = \frac{1}{0.25} = 4.000\ \mathrm{pu},$$
$$I^{\rm SLG} = \frac{3(1.0)}{j(0.48+3(0.05))} = \frac{3}{0.63} = 4.762\ \mathrm{pu},$$
$$I^{\rm LL} = \frac{\sqrt3(1.0)}{Z_1+Z_2+Z_f} = \frac{1.732}{0.20+0.20+0.05} = \frac{1.732}{0.45} = 3.849\ \mathrm{pu}.$$

(c) | Fault | Bolted | With $Z_f = j0.05$ | Reduction |
|---|---|---|---|
| Three-phase | 5.000 | 4.000 | **20.0%** |
| SLG | 6.250 | 4.762 | **23.8%** |
| Line-to-line | 4.330 | 3.849 | **11.1%** |

*Why they differ.* The fault impedance enters each formula with a different weight:

| Fault | Denominator | $Z_f$ weight | Base denominator |
|---|---|---|---|
| Three-phase | $Z_1+Z_f$ | $\times1$ | 0.20 |
| SLG | $Z_0+Z_1+Z_2+3Z_f$ | $\times3$ | 0.48 |
| LL | $Z_1+Z_2+Z_f$ | $\times1$ | 0.40 |

**SLG is reduced most** because $Z_f$ enters as $3Z_f$ — the physical fault impedance is traversed by the full $I_a = 3I_0$, so per-sequence it counts three times.

**LL is reduced least** because $Z_f$ enters singly against the largest base denominator ($Z_1+Z_2 = 0.40$), so $0.05$ is only a 12.5% addition.

The general statement: **the reduction is $Z_f$'s weighted contribution as a fraction of the total denominator.** For SLG that is $0.15/0.63 = 23.8\%$ ✓; for three-phase, $0.05/0.25 = 20.0\%$ ✓; for LL, $0.05/0.45 = 11.1\%$ ✓.

(d) *Relay set at 3.0 pu:*

| Case | $I^{\rm SLG}$ | Detected? |
|---|---|---|
| Bolted | 6.250 pu | **Yes** (2.1× pickup) |
| $Z_f = j0.05$ | 4.762 pu | **Yes** (1.6× pickup) |

Both are detected here. But push the fault impedance further:

$$Z_f = j0.20: \quad I^{\rm SLG} = \frac{3}{0.48+0.60} = 2.778\ \mathrm{pu} \quad\Longrightarrow\quad \textbf{missed}.$$

$$Z_f = j0.50: \quad I^{\rm SLG} = \frac{3}{0.48+1.50} = 1.515\ \mathrm{pu} \quad\Longrightarrow\quad \textbf{badly missed}.$$

*What this implies for ground-relay setting.* This is one of the genuinely hard, genuinely dangerous problems in protection.

**High-impedance faults are common and are the most hazardous.** A conductor lying on dry soil, asphalt, or gravel can present tens or hundreds of ohms — often more than the whole system impedance. The resulting current can be a few tens of amperes, indistinguishable from load.

**The setting is squeezed from both sides.** Set the pickup low enough to catch high-impedance faults and it will trip on normal load unbalance, on transformer inrush, on CT saturation errors, and on the standing residual current of an untransposed line. Set it high enough to be secure and it misses exactly the faults that most need clearing.

**The compromise in practice.** Ground relays are set at roughly 10–20% of the phase-relay pickup — much more sensitive than phase protection, exploiting the fact that residual current *should* be near zero in normal operation. That catches most ground faults but still not the highest-impedance ones.

**Beyond overcurrent.** Because the sensitivity problem cannot be solved by a threshold alone, utilities deploy other principles: **directional** ground relays (which use the phase of $I_0$ relative to $V_0$ to distinguish a fault from load unbalance and so can be set far more sensitively), **ground differential** protection on transformers, and dedicated **high-impedance-fault detection** algorithms that look for the characteristic randomness and harmonic signature of arcing on the ground rather than for magnitude at all.

**And the residual risk is accepted.** No scheme catches every downed conductor. This is why utilities also invest in fast reclosing blocks, downed-conductor detection on distribution feeders, and public safety programs — a candid acknowledgment that the protection problem is not fully solved, and the reason it remains an active area of engineering.

</details>

## Flashback

**From Lesson 4.2 (Symmetrical components):** A single-line-to-ground fault on phase $a$ produces $I_a = 4.5\angle{-90°}$ pu with $I_b = I_c = 0$. (a) Find the sequence currents. (b) Given $Z_1 = Z_2 = j0.20$ pu, find $Z_0$.

<details>
<summary>Solution</summary>

(a) $$I_0 = I_1 = I_2 = \frac{I_a}{3} = \frac{4.5\angle{-90°}}{3} = 1.5\angle{-90°}\ \mathrm{pu}.$$

(b) From the SLG relation with $E = 1.0$ and $Z_f = 0$:

$$I_1 = \frac{E}{Z_0+Z_1+Z_2} \quad\Longrightarrow\quad 1.5 = \frac{1.0}{|Z_0|+0.20+0.20},$$
$$|Z_0|+0.40 = \frac{1.0}{1.5} = 0.6667 \quad\Longrightarrow\quad Z_0 = j0.2667\ \mathrm{pu}.$$

*Check:* $I_f = 3(1.0)/(0.2667+0.40) = 3/0.6667 = 4.5$ pu ✓.

*Why this is a real procedure, not just an exercise.* Zero-sequence impedance is the hardest sequence parameter to predict, because it depends on soil resistivity, on the overhead ground wires, on tower footing resistances, and on every transformer connection in the path — none of which are known accurately from design data.

So it is **measured**, and this is how: apply a controlled staged fault (or use a recording of a real one), read $I_a$ from the fault recorder, and back out $Z_0$ exactly as above. Utilities do this on new lines and after major reconfigurations, because a $Z_0$ that is wrong by 30% makes every ground-relay reach setting wrong by a comparable amount.

Note also that $Z_0 = j0.2667 > Z_1 = j0.20$ here, so this bus's SLG fault (4.5 pu) is *milder* than its three-phase fault ($1.0/0.20 = 5.0$ pu) — the remote-line regime of Example 2.

</details>

## Connections

- **Backward:** the transformation and the sequence-impedance rules are [4.2](04-02-symmetrical-components.md)'s; the Thevenin-at-the-fault-bus method is [4.1](04-01-symmetrical-faults.md)'s; the transformer connections that shape the zero-sequence network are [2.3](02-03-three-phase-transformer-connections.md)'s.
- **Forward:** [4.4](04-04-protection-and-relaying.md) uses these currents to set and coordinate relays.
- **Sideways:** connecting sub-networks according to boundary conditions is the two-port interconnection logic of [2.5](02-05-short-and-medium-line-models.md)'s ABCD parameters, and the same "decompose into modes, solve each independently, recombine at the boundary" strategy is how [`pdes`](../../pdes/syllabus.md) handles separation of variables.
