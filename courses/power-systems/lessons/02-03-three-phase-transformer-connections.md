# Power Systems · Lesson 2.3: Three-phase transformer connections

> ⏱ ~15 min · Module 2: Transformers and transmission lines · Builds on: [2.2 Transformer performance in per-unit](02-02-transformer-performance-per-unit.md), [1.1 AC power recalled, and balanced three-phase](01-01-ac-power-and-three-phase.md) · Unlocks: [2.4 Transmission-line parameters](02-04-transmission-line-parameters.md), [4.3 Sequence networks and unsymmetrical faults](04-03-sequence-networks-unsymmetrical-faults.md)

## Why this matters

Three single-phase transformers (or one three-phase unit) can be wired [four ways](../reference.md#three-phase-transformer-connections), and the choice is not cosmetic. It determines whether a neutral exists for grounding, whether third-harmonic currents have a path, whether zero-sequence current can cross the transformer at all, and whether the voltages on the two sides are in phase or shifted by $30°$.

That last one bites hardest. A Δ-Y bank introduces a $30°$ phase shift, and if you get its sign wrong, every angle in a power flow is wrong and every parallel connection is a short circuit. The $30°$ shift is also why [4.3](04-03-sequence-networks-unsymmetrical-faults.md)'s sequence networks need careful bookkeeping across transformers.

## The idea

Each of the four connections is a trade among three properties.

**A neutral point.** A wye winding has one; a delta does not. You need a neutral to ground the system, to supply single-phase line-to-neutral loads, and to provide a return path for ground-fault current. Grounding is not optional on a transmission system — it fixes the voltage of the un-faulted phases during a ground fault, which sets the insulation requirement for the whole network.

**A path for triplen harmonics.** Transformer cores saturate, and the magnetizing current they demand is rich in third harmonic. Third harmonics in a three-phase system are **in phase** across all three phases (since $3\times120° = 360°$), so they behave like a zero-sequence quantity: they cannot flow in the lines of an ungrounded wye, and they distort the voltage waveform badly if they have nowhere to go. A **delta winding gives them a circulating path**, and this is why a delta appears somewhere in almost every transformer bank — often as a third "tertiary" winding whose only job is to circulate harmonics.

**Zero-sequence isolation.** A delta blocks zero-sequence current from crossing the transformer, while a grounded wye passes it. That means a Δ-Y bank *isolates* ground faults on one side from the other — desirable, because it keeps a distribution ground fault from disturbing the transmission system.

The $30°$ shift comes for free with any Y-Δ or Δ-Y bank, and it is not a defect: it is the $30°$ between line and phase voltage from [1.1](01-01-ac-power-and-three-phase.md), showing up because one side's line voltage is compared with the other side's phase voltage.

## The formal version

**The four connections.**

| Connection | Neutral | Triplen path | Zero-seq | Phase shift | Typical use |
|---|---|---|---|---|---|
| **Y-Y** | both sides | **none** — problematic | passes if both grounded | $0°$ | rare alone; needs a delta tertiary |
| **Y-Δ** | HV only | delta side | blocked | $30°$ | step-down from transmission |
| **Δ-Y** | LV only | delta side | blocked | $30°$ | **generator step-up**, distribution |
| **Δ-Δ** | neither | both sides | blocked | $0°$ | industrial; one unit can be removed (open delta) |

**Per-phase equivalent of a bank.** Convert any delta winding to its wye equivalent ($Z_Y = Z_\Delta/3$), then analyze one phase. **In per-unit, the per-phase impedance of a three-phase bank is the same number as a single unit's**, because the bank's rating is three times the unit's and the voltage bases follow the connection. That is a genuinely useful invariance: a bank of three 10 MVA, 8% transformers is a 30 MVA, 8% bank whatever the connection.

**Voltage and current relationships.** For a bank of units with per-unit turns ratio $n = N_1/N_2$ (per *winding*):

| Connection | $V_{LL,1}/V_{LL,2}$ |
|---|---|
| Y-Y | $n$ |
| Δ-Δ | $n$ |
| Y-Δ | $\sqrt3\,n$ |
| Δ-Y | $n/\sqrt3$ |

*In words: mixing connections introduces a $\sqrt3$ in the overall line-voltage ratio on top of the winding ratio.* A common source of confusion: a "13.8/138 kV Δ-Y" bank made from three units each wound 13.8 kV to 79.7 kV, since $79.7\sqrt3 = 138$.

**The $30°$ phase shift — the standard convention.** ANSI/IEEE standard connection (designated **Dy1** or **Yd1** in IEC notation):

$$\boxed{\;\text{The high-voltage side leads the low-voltage side by }30°\text{ for positive sequence.}\;}$$

*In words: going from LV to HV through a standard Δ-Y bank, positive-sequence phasors advance by $30°$.*

Three consequences that matter:

1. **Negative sequence shifts the opposite way.** Positive sequence gains $+30°$ HV-to-LV; negative sequence gains $-30°$. This asymmetry is essential in [4.3](04-03-sequence-networks-unsymmetrical-faults.md).
2. **Magnitudes are unaffected**, so a *balanced* power-flow study can ignore the shift entirely — it appears in every bus angle equally and cancels out of every power calculation. Most load-flow programs therefore omit it by default.
3. **Parallel banks must have the same shift.** Connecting a Δ-Y bank in parallel with a Y-Y bank puts $30°$ across the tie — a near short circuit. Vector-group compatibility is checked before any parallel operation.

**Why Y-Y is avoided.** With both neutrals ungrounded (or only one grounded), third-harmonic magnetizing current has no path. The core is then forced to produce flux without its required harmonic current, and the flux — and hence the induced voltage — distorts, with a large third harmonic appearing between neutral and ground. Remedies: ground both neutrals (giving triplens a path through the ground, which creates telephone interference), or — the standard fix — add a **delta tertiary winding**, typically rated one third of the main windings, whose sole purpose is to circulate triplen harmonics and provide a zero-sequence path.

**Open delta (V-V).** Remove one unit from a Δ-Δ bank and the remaining two still deliver balanced three-phase voltages, at reduced capacity:

$$\frac{S_{\rm open\ \Delta}}{S_{\rm full\ \Delta}} = \frac{\sqrt3}{3} = 0.577.$$

*In words: two thirds of the transformers deliver 57.7% of the capacity* — a utilization of $0.577/0.667 = 86.6\%$ per remaining unit. Useful as an emergency measure and for small rural loads expected to grow.

**Grounding through the connection.** A Δ-Y grounded bank is the standard **grounding source** for a delta-connected or ungrounded system: the wye neutral provides the ground reference and the ground-fault current path, while the delta blocks that current from propagating upstream. Where no wye winding exists, a **zig-zag** grounding transformer is used, which presents low impedance to zero sequence and high impedance to positive sequence.

## Picture

![A two-panel figure. Left: the four connection schematics side by side — Y-Y, Y-delta, delta-Y and delta-delta — each showing three transformer windings on each side with their interconnections, the neutral points marked where they exist, and a note under each recording whether triplen harmonics have a circulating path. Right: a phasor diagram for a delta-Y bank showing the delta-side line voltages and the wye-side line-to-neutral voltages, with the 30 degree advance from low to high voltage marked, and a smaller inset showing negative-sequence phasors shifting the opposite way.](assets/02-03-fig1.svg)

Left: the four banks and their properties. Notice how often a delta appears — it is the harmonic and zero-sequence gatekeeper, and the Y-Y bank's lack of one is precisely why it needs a tertiary.

Right: where the $30°$ comes from. It is the same $30°$ as in [1.1](01-01-ac-power-and-three-phase.md), between a wye's line-to-line and line-to-neutral voltages — the mixed connection simply compares one side's line quantity with the other's phase quantity. The inset is the fact that catches people out in fault studies: negative sequence shifts the other way.

## Worked examples

**Example 1 (sizing and rating a Δ-Y bank).** Three single-phase transformers, each 10 MVA, 13.8 kV / 79.7 kV, are connected Δ on the LV side and grounded Y on the HV side. Find the bank's three-phase rating, its line-to-line voltages, and its per-unit impedance if each unit is 8%.

*Bank rating.*

$$S_{3\phi} = 3(10) = 30\ \mathrm{MVA}.$$

*LV side (delta).* Each winding sees the full line voltage:

$$V_{LL,LV} = 13.8\ \mathrm{kV}.$$

*HV side (wye).* Each winding is line-to-neutral:

$$V_{LL,HV} = \sqrt3(79.7) = 138.0\ \mathrm{kV}.$$

So the bank is **30 MVA, 13.8/138 kV, Δ-Y**.

*Per-unit impedance.* Each unit is 8% on its own 10 MVA, 13.8 kV (LV winding) base. The bank's LV base is 30 MVA, 13.8 kV.

Working on the LV (delta) side: three units in delta present a per-phase wye equivalent of $Z_\Delta/3$. Each unit's ohmic impedance is

$$Z_{\rm unit} = 0.08\times\frac{13.8^2}{10} = 0.08(19.04) = 1.523\ \Omega,$$

and as a delta this is $Z_\Delta = 1.523\ \Omega$, so

$$Z_Y = \frac{1.523}{3} = 0.5077\ \Omega.$$

Bank $Z_{base} = 13.8^2/30 = 6.348\ \Omega$:

$$Z_{pu} = \frac{0.5077}{6.348} = 0.0800\ \mathrm{pu} = 8\%\ \checkmark.$$

**The bank's per-unit impedance equals each unit's.** The factor of 3 from the delta conversion is exactly cancelled by the factor of 3 in the bank's MVA base. The same holds for a wye connection (where the $\sqrt3$ in voltage squares to 3), and for every combination.

*Why this matters practically.* You never need to re-derive a bank's impedance from its units — the nameplate percentage carries over unchanged. It is one of the quiet conveniences that makes per-unit worth the setup cost.

**Example 2 (the $30°$ shift, and what happens when you get it wrong).** A generator at 13.8 kV feeds a 138 kV transmission bus through a Δ-Y step-up bank (LV delta, HV wye, standard connection). The generator's phase-$a$ voltage is $1.0\angle0°$ pu. Find the HV-side voltage, then examine what a wrong sign would do.

*Correct shift.* The standard connection has HV leading LV by $30°$ for positive sequence:

$$V_{A,HV} = 1.0\angle{+30°}\ \mathrm{pu}.$$

Every bus angle downstream of the transformer is measured on this shifted reference.

*Does it affect the power flow?* Compute the power delivered into a line from the HV bus to a remote bus at $1.0\angle{-10°}$ through $j0.1$ pu:

$$P = \frac{V_1V_2}{X}\sin(\delta_1-\delta_2) = \frac{(1.0)(1.0)}{0.1}\sin(30°-(-10°)) = 10\sin(40°) = 6.43\ \mathrm{pu}.$$

Now suppose the remote bus angle had also been referenced through the same transformer chain, so its "true" angle is $-10°+30° = 20°$:

$$P = 10\sin(30°-20°) = 10\sin(10°) = 1.74\ \mathrm{pu}.$$

**The two answers differ by a factor of 3.7.** The lesson is not that the shift changes the physics — it does not — but that **angles are only meaningful relative to a consistent reference**, and a transformer shift silently redefines that reference for everything downstream.

*The saving grace, and why load-flow programs often ignore it.* If **every** bank in the network has the standard $30°$ shift and you apply it consistently, then all angle *differences* across lines are unchanged, and every power flow is identical to the no-shift calculation. The shift cancels globally.

It stops cancelling in exactly two situations, and both are important:

1. **Parallel paths with different vector groups.** If two paths between the same buses have different net shifts — say one goes through two Δ-Y banks ($60°$) and the other through one Δ-Δ and one Δ-Y ($30°$) — a $30°$ difference appears across the loop, driving a large circulating current. This is a real and expensive mistake; it is why utilities catalogue vector groups rigorously and why paralleling requires matching them.

2. **Unbalanced and fault studies.** Positive and negative sequence shift in *opposite* directions, so the shift does not cancel between them. Computing a line-to-ground fault on the LV side of a Δ-Y bank and reporting the HV currents requires tracking $+30°$ on positive sequence and $-30°$ on negative — and zero sequence does not cross the delta at all. [4.3](04-03-sequence-networks-unsymmetrical-faults.md) does this carefully.

*The practical convention.* Most commercial load-flow software omits the $30°$ shift in balanced studies (it cancels) but carries it in short-circuit and unbalanced studies (it does not). Knowing *why* the two treatments differ is what keeps you from being surprised when the same network gives different angles in two programs.

## Watch out

- **You might size a bank's per-unit impedance by scaling.** It is unchanged from the single-unit value, whatever the connection. The $\sqrt3$'s and 3's cancel exactly.
- **You might confuse winding voltage with line voltage.** In a delta they are equal; in a wye the line voltage is $\sqrt3$ times the winding voltage. A "138 kV wye" bank is built from 79.7 kV windings.
- **You might parallel banks with different vector groups.** A $30°$ mismatch across a tie is close to a short circuit. Vector-group compatibility is checked before any paralleling.
- **You might use a Y-Y bank without a delta tertiary.** Third-harmonic magnetizing current then has no path, distorting the voltage and producing large neutral-to-ground harmonic voltage. Almost every real Y-Y bank has a tertiary.
- **You might apply the same $30°$ sign to negative sequence.** It shifts the opposite way. Getting this wrong inverts unbalanced fault currents referred across a transformer.

## One-liner

> The four connections trade a neutral, a triplen-harmonic path, and zero-sequence isolation — and any Y-Δ mixture adds the same $30°$ that separates a wye's line and phase voltages, positive sequence one way and negative sequence the other.

## Problems

**P1 (🟢)** Three single-phase transformers, each 5 MVA, 7.97/34.5 kV with 6% impedance, are connected Y (LV) to Δ (HV). (a) Find the bank's three-phase rating. (b) Find both line-to-line voltages. (c) Find the bank's per-unit impedance. (d) State the phase shift and which side leads.

**P2 (🟡)** A 50 MVA, 138/13.8 kV Δ-Y transformer has $X = 0.09$ pu and supplies a 13.8 kV bus. (a) Give the winding voltages on each side. (b) On a 100 MVA base, find its per-unit reactance. (c) The 138 kV bus is at $1.03\angle0°$ pu. Find the no-load 13.8 kV bus voltage in magnitude and angle, using the standard connection. (d) At a load of 40 MVA, 0.9 pf lagging, find the 13.8 kV bus voltage.

**P3 (🔴)** A Δ-Δ bank of three 12 MVA units supplies an industrial plant. One unit fails. (a) Find the original three-phase rating and the open-delta rating. (b) Find the per-unit loading of each remaining unit if the plant draws 18 MVA. (c) The plant must run at 18 MVA until a replacement arrives. State whether this is possible and what the consequence is. (d) A Δ-Y bank is proposed as the replacement design. List two advantages and one complication it would introduce.

<details>
<summary>Solutions</summary>

**P1** (a) $$S_{3\phi} = 3(5) = 15\ \mathrm{MVA}.$$

(b) LV side is **wye**, so the line voltage is $\sqrt3$ times the winding voltage:

$$V_{LL,LV} = \sqrt3(7.97) = 13.8\ \mathrm{kV}.$$

HV side is **delta**, so the line voltage equals the winding voltage:

$$V_{LL,HV} = 34.5\ \mathrm{kV}.$$

The bank is **15 MVA, 13.8/34.5 kV, Y-Δ**.

(c) **6%**, unchanged from the single-unit value — the connection factors cancel against the bank's rating.

(Verification on the LV wye side: each unit's impedance is $0.06(7.97^2/5) = 0.06(12.70) = 0.7622\ \Omega$, already a per-phase wye value. The bank's LV base is $13.8^2/15 = 12.70\ \Omega$, giving $0.7622/12.70 = 0.0600$ pu ✓.)

(d) $30°$. Under the standard connection the **high-voltage side leads** — so the 34.5 kV side leads the 13.8 kV side by $30°$ for positive sequence.

**P2** (a) HV is **delta**: winding voltage $=$ line voltage $= 138$ kV.

LV is **wye**: winding voltage $= 13.8/\sqrt3 = 7.97$ kV.

(b) $$X = 0.09\left(\frac{100}{50}\right) = 0.18\ \mathrm{pu}.$$

(c) At no load there is no current, so no internal drop. The magnitude transfers directly and the standard shift applies with the HV side leading:

$$|V_{LV}| = 1.03\ \mathrm{pu} = 1.03(13.8) = 14.21\ \mathrm{kV},$$

and since HV leads LV by $30°$, with $V_{HV} = 1.03\angle0°$:

$$V_{LV} = 1.03\angle{-30°}\ \mathrm{pu}.$$

(d) Load $= 40$ MVA at 0.9 pf lagging, on the 100 MVA base:

$$S = \frac{40\angle25.84°}{100} = 0.40\angle25.84° = 0.360+j0.1744\ \mathrm{pu}.$$

Taking the LV bus as the unknown and iterating once from $V_{LV}\approx1.0$:

$$I \approx \left(\frac{0.40\angle25.84°}{1.0}\right)^* = 0.40\angle{-25.84°}\ \mathrm{pu}.$$

$$V_{LV} = V_{HV}-I(jX) = 1.03-\left(0.40\angle{-25.84°}\right)\left(0.18\angle90°\right)$$
$$= 1.03-0.072\angle64.16° = 1.03-(0.03135+j0.06481) = 0.99865-j0.06481,$$
$$|V_{LV}| = \sqrt{0.99730+0.00420} = 1.00075 \approx 1.001\ \mathrm{pu}.$$

Refining once with $|V| = 1.001$ changes the result in the fourth decimal, so

$$V_{LV} \approx 1.00\ \mathrm{pu} = 13.8\ \mathrm{kV}, \quad\text{at } -30°-3.7° = -33.7°\ \text{including the transformer shift}.$$

The 3% boost at the HV bus was almost exactly consumed by the transformer's internal drop at this load — which is a common design point, and why the HV bus is deliberately operated above nominal.

**P3** (a) $$S_{\Delta\Delta} = 3(12) = 36\ \mathrm{MVA}, \qquad S_{\rm open\ \Delta} = \frac{\sqrt3}{3}(36) = 0.5774(36) = 20.8\ \mathrm{MVA}.$$

(Equivalently $\sqrt3\times12 = 20.8$ MVA.)

(b) With two units carrying 18 MVA in open delta, each unit carries

$$S_{\rm unit} = \frac{18}{\sqrt3} = 10.39\ \mathrm{MVA},$$

so each is loaded to $10.39/12 = 86.6\%$ of its rating.

(c) **Yes, it is possible.** 18 MVA is below the 20.8 MVA open-delta rating, and each unit runs at 86.6% — within nameplate.

The consequences, which are real but manageable:

- **No margin.** The bank is at 87% of the open-delta limit; a modest load increase or a hot day would push it over.
- **Unbalanced voltage regulation.** Open delta does not regulate the three phases equally, so the plant sees roughly 2–3× the voltage unbalance of a full bank. Three-phase motors are sensitive to this — a few percent of negative-sequence voltage causes disproportionate rotor heating, since the negative-sequence impedance of an induction motor is small.
- **Reduced efficiency.** The same power flows through two units instead of three, so copper losses rise by $(3/2)^2\times(2/3) = 1.5\times$.

The practical answer is to run at 18 MVA while expediting the replacement, and to shed non-essential load if the ambient temperature is high.

(d) *Advantages of a Δ-Y replacement:*

1. **A grounded neutral on the LV side.** The plant gains a ground reference, enabling ground-fault detection and protection (a delta system's first ground fault is undetectable and merely shifts the neutral — the second one is a phase-to-phase fault through two ground paths). It also allows line-to-neutral loads.
2. **Zero-sequence isolation.** The delta HV winding blocks ground-fault current from propagating to the utility system, so a plant ground fault does not disturb the supply network, and the plant's ground-fault current is set by its own grounding impedance rather than by the utility's.

*Complication:*

The **$30°$ phase shift** means the new bank cannot be paralleled with the surviving Δ-Δ units, even temporarily during a changeover — a $30°$ difference across a tie is effectively a short circuit. The transfer must therefore be a break-before-make outage, and any future spare must match the new vector group. In a plant that has standardized on Δ-Δ, changing the vector group of one bank creates a permanent spares-compatibility problem that has to be managed deliberately.

</details>

## Flashback

**From Lesson 2.2 (Transformer performance in per-unit):** A 30 MVA Δ-Y bank has $Z = 0.02+j0.08$ pu. (a) Find the full-load voltage regulation at 0.85 lagging. (b) Find it at unity. (c) State whether the $30°$ phase shift affects either answer.

<details>
<summary>Solution</summary>

(a) $\theta = 31.79°$, $\sin\theta = 0.5268$:

$$\mathrm{VR}\approx(0.02)(0.85)+(0.08)(0.5268) = 0.01700+0.04214 = 0.05914 = 5.91\%.$$

Exactly: $Z = 0.0825\angle75.96°$, $I = 1.0\angle{-31.79°}$, $IZ = 0.0825\angle44.17° = 0.05917+j0.05752$, $V_S = 1.05917+j0.05752$, $|V_S| = 1.06073$, VR $= 6.07\%$.

(b) $$\mathrm{VR}\approx(0.02)(1.0)+(0.08)(0) = 0.0200 = 2.00\%.$$

Exactly: $IZ = 0.0825\angle75.96° = 0.02+j0.08$, $V_S = 1.02+j0.08$, $|V_S| = 1.02313$, VR $= 2.31\%$.

(c) **No.** Voltage regulation is a ratio of *magnitudes*, and the $30°$ shift changes only angles. It rotates both $V_S$ and $V_R$ by the same amount when referred across the bank, leaving $|V_S|/|V_R|$ untouched.

This is the same reason balanced power-flow studies can omit the shift: every quantity that matters for regulation, loading and losses depends on magnitudes and on angle *differences* within a side, neither of which the shift disturbs. It matters only where the two sides are compared directly — parallel paths, and sequence networks.

</details>

## Connections

- **Backward:** the $30°$ and $\sqrt3$ relationships are [1.1](01-01-ac-power-and-three-phase.md)'s; the single-unit model is [2.1](02-01-ideal-and-real-transformer.md)'s.
- **Forward:** [4.3](04-03-sequence-networks-unsymmetrical-faults.md) needs the zero-sequence blocking and the opposite-sign shift; [4.4](04-04-protection-and-relaying.md) relies on the delta's ground-fault isolation to define protection zones.
- **Sideways:** "the third harmonic is common-mode across three phases" is the same modular arithmetic that makes symmetrical components work in [4.2](04-02-symmetrical-components.md) — harmonics of order $3k$ land on the zero-sequence component, $3k+1$ on positive, $3k+2$ on negative.
