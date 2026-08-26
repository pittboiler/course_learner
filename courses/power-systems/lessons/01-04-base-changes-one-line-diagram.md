# Power Systems · Lesson 1.4: Base changes and the single-line diagram

> ⏱ ~15 min · Module 1: Three-phase power and the per-unit system · Builds on: [1.3 The per-unit system](01-03-the-per-unit-system.md) · Unlocks: [2.1 The ideal and real transformer](02-01-ideal-and-real-transformer.md), [3.1 The bus admittance matrix](03-01-bus-admittance-matrix.md)

## Why this matters

[1.3](01-03-the-per-unit-system.md) established per-unit on a single base. Real networks have a problem it did not address: **every piece of equipment arrives rated on its own base.** A generator is 0.20 pu on 25 MVA; the transformer next to it is 0.08 pu on 40 MVA; the line is in ohms. Adding those numbers directly is meaningless — they must first be moved onto a common base with the [base-change formula](../reference.md#per-unit-bases).

This lesson supplies the conversion, then uses it to build the artifact every later module operates on: the **impedance diagram** — one single-line drawing of a multi-voltage network, every element a per-unit impedance on one common base, no transformer ratios anywhere. Getting from a set of nameplates to that diagram is the routine first step of every power-system study, and it is where careless engineers lose factors of ten.

## The idea

An impedance in ohms is a physical fact. Its per-unit value is not — it depends on the base you divided by. So converting between bases is just re-dividing:

$$Z_{pu}^{\rm new} = \frac{Z_\Omega}{Z_{base}^{\rm new}} = Z_{pu}^{\rm old}\cdot\frac{Z_{base}^{\rm old}}{Z_{base}^{\rm new}}.$$

Substituting $Z_{base} = V_{base}^2/S_{base}$ gives the working formula, and its shape is worth internalizing: **impedance scales *up* with power base and *down* with the square of voltage base.** Doubling the MVA base doubles every per-unit impedance; halving the kV base quadruples them.

Then the assembly. Pick $S_{base}$ once for the whole network — 100 MVA by convention. Pick $V_{base}$ once, anywhere, and let the transformers propagate it: crossing a transformer multiplies the voltage base by its turns ratio. This partitions the network into **zones**, each with one voltage base, separated by transformers.

The result is a diagram where an ideal transformer is a wire, a real transformer is a series impedance, a line is a series impedance, a generator is a source behind a reactance, and a load is a complex power injection. That is the object [3.1](03-01-bus-admittance-matrix.md) turns into a matrix.

One trap deserves naming now. A transformer's nameplate per-unit impedance is on **its own rated voltages**. If the voltage base in its zone differs from its rating — because some other transformer set the zone's base — you must correct for that too, and it enters *squared*.

## The formal version

**Base-change formula.**

$$\boxed{\;Z_{pu}^{\rm new} = Z_{pu}^{\rm old}\left(\frac{S_{base}^{\rm new}}{S_{base}^{\rm old}}\right)\left(\frac{V_{base}^{\rm old}}{V_{base}^{\rm new}}\right)^2.\;}$$

*In words: scale linearly by the power-base ratio and inversely by the square of the voltage-base ratio.*

For per-unit **admittance**, the ratios invert; for per-unit **power**, only the $S$ ratio applies; per-unit **voltage** uses only the $V$ ratio.

**Building the impedance diagram — the procedure.**

1. **Choose $S_{base}$**, common to the entire network (100 MVA unless there is a reason).
2. **Choose $V_{base}$ in one zone** — usually the generator's rated voltage, or a transmission voltage of interest.
3. **Propagate the voltage bases** through every transformer by its turns ratio. This defines the zones.
4. **Convert every element:**
   - Devices rated in per-unit → base-change formula.
   - Elements in ohms → divide by that zone's $Z_{base} = V_{base}^2/S_{base}$.
   - Loads in MVA → divide by $S_{base}$.
5. **Draw it** as one line, transformers replaced by their series impedances.

**Zone bases are forced, not chosen.** Once step 2 fixes one zone, every other zone's voltage base follows from the turns ratios. You may not pick them for convenience — doing so reintroduces the ratios per-unit was meant to eliminate.

**The nameplate-mismatch correction.** A transformer rated $V_1/V_2$ but sitting in zones whose bases are $V_{base,1}/V_{base,2}$ needs

$$Z_{pu}^{\rm system} = Z_{pu}^{\rm nameplate}\left(\frac{S_{base}}{S_{rated}}\right)\left(\frac{V_{rated}}{V_{base}}\right)^2,$$

with $V_{rated}$ and $V_{base}$ taken on the **same side**. *In words: if the transformer's rated voltage does not match its zone's base, correct by the square of the mismatch.* Both sides give the same answer if the bases were propagated correctly — which is a useful check.

**Symbols on a one-line diagram.**

| Element | Symbol | Impedance-diagram representation |
|---|---|---|
| Generator | circle with G | EMF behind $jX_d''$ (or $jX_d'$, per study) |
| Two-winding transformer | two coupled coils | series $R+jX$ (ratio gone) |
| Transmission line | plain line | series $R+jX$, plus shunt $B/2$ each end if long |
| Load | arrow | constant $S = P+jQ$ injection, or an impedance |
| Bus | vertical bar | a node |

**One-line versus impedance diagram.** The **one-line** shows topology and equipment: breakers, ratings, connections. The **impedance diagram** is the electrical model derived from it — per-unit values only, per-phase, positive-sequence. Studies are run on the second; operators look at the first.

**Which reactance for a generator.** A synchronous machine has three, used for different studies:

| Reactance | Symbol | Typical (pu) | Used for |
|---|---|---|---|
| Subtransient | $X_d''$ | 0.10–0.25 | breaker duty, first cycle ([4.1](04-01-symmetrical-faults.md)) |
| Transient | $X_d'$ | 0.15–0.35 | stability studies ([4.6](04-06-transient-stability-equal-area.md)) |
| Synchronous | $X_d$ | 1.0–2.0 | steady-state, sustained fault |

*In words: the machine looks progressively "stiffer" the sooner you look at it after a disturbance*, because flux trapped in the damper and field windings resists change and then decays.

## Picture

![A two-panel figure. Left: a one-line diagram of a small network — generator, step-up transformer, transmission line, step-down transformer, load — with voltage zones shaded and labelled with their voltage bases, showing the bases propagating through the transformers by their turns ratios while a single S_base of 100 MVA spans the whole drawing. Right: the same network redrawn as an impedance diagram, with each transformer collapsed to a series reactance, the line as a series impedance, the generator as an EMF behind a reactance, and every value labelled in per-unit on the common base.](assets/01-04-fig1.svg)

Left: zones and bases. $S_{base}$ is one number for the whole network; the voltage base changes only at transformers, and only by their turns ratio. Shading the zones before converting anything is the habit that prevents most per-unit errors.

Right: what you actually compute with. Every ratio is gone, every number is per-unit on one base, and the network is a plain series–shunt circuit. Everything in Modules 3 and 4 operates on a diagram of this form.

## Worked examples

**Example 1 (a complete conversion).** Build the impedance diagram for:

- **G**: 25 MVA, 13.8 kV, $X_d'' = 0.20$ pu
- **T1**: 40 MVA, 13.8/138 kV, $X = 0.08$ pu
- **Line**: $j50\ \Omega$
- **T2**: 30 MVA, 138/69 kV, $X = 0.07$ pu
- **Load**: 20 MVA at 0.85 pf lagging, 69 kV

Use $S_{base} = 100$ MVA and $V_{base} = 13.8$ kV in the generator zone.

*Zone voltage bases.* Generator zone: 13.8 kV. Through T1 (13.8/138): $13.8\times(138/13.8) = 138$ kV. Through T2 (138/69): $138\times(69/138) = 69$ kV. All three transformers' rated voltages match their zone bases, so no mismatch correction is needed.

*Generator.*

$$X_G = 0.20\left(\frac{100}{25}\right)\left(\frac{13.8}{13.8}\right)^2 = 0.20(4) = 0.80\ \mathrm{pu}.$$

*T1.*

$$X_{T1} = 0.08\left(\frac{100}{40}\right)(1)^2 = 0.08(2.5) = 0.20\ \mathrm{pu}.$$

*Line.* In the 138 kV zone,

$$Z_{base} = \frac{138^2}{100} = 190.4\ \Omega, \qquad X_{\rm line} = \frac{50}{190.4} = 0.2626\ \mathrm{pu}.$$

*T2.*

$$X_{T2} = 0.07\left(\frac{100}{30}\right)(1)^2 = 0.07(3.333) = 0.2333\ \mathrm{pu}.$$

*Load.*

$$S_L = \frac{20\angle31.79°}{100} = 0.20\angle31.79° = 0.170+j0.1053\ \mathrm{pu}.$$

*The diagram.* Source $E$ behind $j0.80$, then $j0.20$, $j0.2626$, $j0.2333$, into a load drawing $0.170+j0.1053$ pu.

$$X_{\rm total} = 0.80+0.20+0.2626+0.2333 = 1.496\ \mathrm{pu}.$$

*What that tells you immediately.* A three-phase fault at the load bus would draw roughly $1/1.496 = 0.67$ pu on a 100 MVA base — about 67 MVA of fault duty. And more than half of the total reactance is the *generator*, which is typical: for a small machine feeding through a strong network, the machine dominates the fault impedance. That observation, available at a glance from per-unit numbers, is why the diagram is built this way.

**Example 2 (the nameplate-mismatch trap).** The same network, but T2 is rated **138/66 kV** instead of 138/69 kV, while the load bus is still operated at 69 kV.

*The zone base is forced.* The base propagates by the *actual turns ratio* of the transformer, 138/66:

$$V_{base,\rm load} = 138\times\frac{66}{138} = 66\ \mathrm{kV}.$$

Not 69. The zone base is 66 kV whether or not the bus is operated at 69 kV — bases follow hardware, not operating points.

*T2's impedance.* Its rated voltages now match the bases (138 and 66), so:

$$X_{T2} = 0.07\left(\frac{100}{30}\right)(1)^2 = 0.2333\ \mathrm{pu},$$

unchanged.

*But the load and the voltage change.* The load bus at 69 kV is now

$$V_{pu} = \frac{69}{66} = 1.045\ \mathrm{pu},$$

not 1.000. And $Z_{base}$ in that zone is $66^2/100 = 43.56\ \Omega$, not $69^2/100 = 47.61\ \Omega$ — a 9% difference in any impedance expressed there.

*Now the trap.* Suppose instead you had (wrongly) declared the load-zone base to be 69 kV, to make the operating voltage come out at 1.000 pu. Then T2's rated 66 kV no longer matches its zone base, and its impedance must be corrected:

$$X_{T2} = 0.07\left(\frac{100}{30}\right)\left(\frac{66}{69}\right)^2 = 0.2333(0.9147) = 0.2134\ \mathrm{pu}.$$

Omit that squared correction and you overstate T2's reactance by 9.3%.

*The general lesson.* There are two self-consistent choices — propagate bases by turns ratios and accept off-nominal per-unit voltages, or force a convenient voltage base and correct every device impedance by the squared mismatch. **The first is standard**, because a network has many devices and one voltage per zone: correcting one voltage is cheaper than correcting every impedance.

It also explains why utilities specify transformers at the system's nominal voltages wherever possible, and why **off-nominal tap ratios** are handled explicitly in the power flow ([3.2](03-02-power-flow-problem-bus-types.md)) rather than being buried in the bases. A tap-changing transformer's ratio moves during operation; you cannot rebuild the bases every time it steps.

## Watch out

- **You might invert the base-change formula.** Impedance scales as $S_{new}/S_{old}$ and $(V_{old}/V_{new})^2$. A useful check: moving to a *larger* MVA base makes per-unit impedances *larger*, because the same ohms are a bigger fraction of a smaller $Z_{base}$.
- **You might choose voltage bases for convenience.** They are forced by the turns ratios once one zone is fixed. Choosing them freely means every transformer needs a mismatch correction.
- **You might use a nameplate per-unit value directly.** It is on the device's own rating. This is the most common error in the whole subject, and it typically produces answers wrong by a factor of two to five.
- **You might forget the mismatch correction is squared.** A 5% voltage-base mismatch is a 10% impedance error. It compounds through a chain of transformers.
- **You might use the wrong generator reactance.** $X_d''$ for breaker duty, $X_d'$ for stability, $X_d$ for steady state. Using $X_d$ in a fault study understates the fault current by roughly a factor of five.

## One-liner

> Rescale nameplate impedances with $Z_{new} = Z_{old}(S_{new}/S_{old})(V_{old}/V_{new})^2$, let one $S_{base}$ and the transformer turns ratios define the zones, and the whole multi-voltage network collapses to one per-unit impedance diagram.

## Problems

**P1 (🟢)** A generator is rated 50 MVA, 13.8 kV with $X'' = 0.18$ pu. (a) Convert to a 100 MVA, 13.8 kV base. (b) Convert to a 100 MVA, 14.4 kV base. (c) Find its reactance in ohms. (d) Confirm the ohmic value is the same from both per-unit results.

**P2 (🟡)** A network has: G (30 MVA, 11 kV, $X = 0.15$), T1 (35 MVA, 11/132 kV, $X = 0.09$), line ($j80\ \Omega$), T2 (25 MVA, 132/33 kV, $X = 0.10$), load bus at 33 kV. Use $S_{base} = 50$ MVA and $V_{base} = 11$ kV at the generator. (a) Give the voltage base in each zone. (b) Convert every element to per-unit. (c) Find the total series reactance. (d) Estimate the three-phase fault MVA at the load bus.

**P3 (🔴)** A 100 MVA base network contains a transformer rated 60 MVA, 230/34.5 kV with $X = 0.11$ pu, but the 230 kV zone's base was set to 220 kV by an upstream transformer of ratio 13.8/220 kV. (a) Find the 34.5 kV side's voltage base. (b) Convert the transformer's impedance to the system base, working from the high side. (c) Repeat working from the low side and confirm agreement. (d) A second engineer instead declares the low-voltage zone base to be 34.5 kV. Show what that does to the two transformers' per-unit impedances and explain which convention is correct.

<details>
<summary>Solutions</summary>

**P1** (a) $$X = 0.18\left(\frac{100}{50}\right)(1)^2 = 0.36\ \mathrm{pu}.$$

(b) $$X = 0.18\left(\frac{100}{50}\right)\left(\frac{13.8}{14.4}\right)^2 = 0.36(0.9184) = 0.3306\ \mathrm{pu}.$$

(c) On its own base, $Z_{base} = 13.8^2/50 = 3.809\ \Omega$:

$$X_\Omega = 0.18(3.809) = 0.6856\ \Omega.$$

(d) From (a): $Z_{base} = 13.8^2/100 = 1.904\ \Omega$, so $X = 0.36(1.904) = 0.6856\ \Omega$ ✓.

From (b): $Z_{base} = 14.4^2/100 = 2.074\ \Omega$, so $X = 0.3306(2.074) = 0.6857\ \Omega$ ✓.

All three agree — as they must, since ohms are physical and per-unit is bookkeeping.

**P2** (a) Generator zone: 11 kV. Through T1 (11/132): $11\times12 = 132$ kV. Through T2 (132/33): $132\times(33/132) = 33$ kV.

All ratings match their zone bases, so no mismatch corrections.

(b) $$X_G = 0.15\left(\frac{50}{30}\right) = 0.15(1.667) = 0.250\ \mathrm{pu},$$
$$X_{T1} = 0.09\left(\frac{50}{35}\right) = 0.09(1.4286) = 0.1286\ \mathrm{pu},$$
$$Z_{base,132} = \frac{132^2}{50} = \frac{17{,}424}{50} = 348.5\ \Omega, \qquad X_{\rm line} = \frac{80}{348.5} = 0.2296\ \mathrm{pu},$$
$$X_{T2} = 0.10\left(\frac{50}{25}\right) = 0.200\ \mathrm{pu}.$$

(c) $$X_{\rm tot} = 0.250+0.1286+0.2296+0.200 = 0.8082\ \mathrm{pu}.$$

(d) $$I_f = \frac{1.0}{0.8082} = 1.237\ \mathrm{pu} \quad\Longrightarrow\quad S_f = 1.237(50\ \mathrm{MVA}) = 61.9\ \mathrm{MVA}.$$

(A modest fault level, dominated by the generator's 0.250 pu and T2's 0.200 pu. Note that a real study would use $X''$ for the generator and would include the network behind it.)

**P3** (a) The base propagates by the transformer's actual turns ratio, 230/34.5:

$$V_{base,LV} = 220\times\frac{34.5}{230} = 220(0.15) = 33.0\ \mathrm{kV}.$$

(b) *From the high side*, with $V_{rated} = 230$ kV and $V_{base} = 220$ kV:

$$X = 0.11\left(\frac{100}{60}\right)\left(\frac{230}{220}\right)^2 = 0.11(1.6667)(1.0930) = 0.2004\ \mathrm{pu}.$$

(c) *From the low side*, with $V_{rated} = 34.5$ kV and $V_{base} = 33.0$ kV:

$$X = 0.11\left(\frac{100}{60}\right)\left(\frac{34.5}{33.0}\right)^2 = 0.11(1.6667)(1.0930) = 0.2004\ \mathrm{pu}\ \checkmark.$$

They agree exactly, because the base was propagated by the same turns ratio the transformer has, so the mismatch factor $(230/220)^2 = (34.5/33.0)^2$ is identical on both sides. **This agreement is the standard check that your bases were propagated correctly** — if the two sides disagree, a ratio has been inverted somewhere.

(d) Declaring the LV zone base to be 34.5 kV instead of 33.0 kV:

*This transformer* now has matching rated and base voltages on the LV side, so

$$X = 0.11\left(\frac{100}{60}\right)(1)^2 = 0.1833\ \mathrm{pu},$$

but on the HV side its rating is 230 while the base is 220, giving $0.11(1.6667)(1.093) = 0.2004$ — **the two sides now disagree**, which is the signature of an inconsistent base set. The declared 34.5 kV base is not reachable from 220 kV through a 230/34.5 transformer.

*The upstream transformer* is unaffected (it lives in different zones), but the inconsistency propagates: any impedance in the LV zone would now be divided by $34.5^2/100 = 11.90\ \Omega$ instead of $33.0^2/100 = 10.89\ \Omega$ — a 9% error — and voltages in that zone would be misreported by the same factor.

**The first convention is correct.** Voltage bases must be related by exactly the transformer turns ratios, forming a consistent set across the whole network; only then does the ideal transformer vanish. Choosing a base to make one bus read 1.000 pu breaks that chain and silently corrupts every quantity in the zone.

The practical way to avoid the whole issue: build the base set first, propagating from a single starting zone, *before* converting any impedance — and then check a transformer from both sides as a verification. The off-nominal per-unit voltages that result (here 230/220 = 1.045 pu at the HV bus) are not a problem; they are information, telling you the equipment ratings and the system nominal voltages differ, which is often worth knowing.

</details>

## Flashback

**From Lesson 1.3 (The per-unit system):** A transformer is rated 25 MVA, 69/13.8 kV with $X = 0.09$ pu. (a) Find its reactance in ohms referred to each side. (b) Convert to a 100 MVA base with matching voltage bases. (c) Confirm the ohmic values are unchanged.

<details>
<summary>Solution</summary>

(a) HV side: $Z_{base} = 69^2/25 = 190.4\ \Omega$, so $X = 0.09(190.4) = 17.14\ \Omega$.

LV side: $Z_{base} = 13.8^2/25 = 7.618\ \Omega$, so $X = 0.09(7.618) = 0.6856\ \Omega$.

*Check the referral:* $17.14\times(13.8/69)^2 = 17.14(0.04) = 0.6856\ \Omega$ ✓ — referring across the transformer and switching sides give the same number, which is the ohmic statement of why per-unit works.

(b) $$X_{\rm new} = 0.09\left(\frac{100}{25}\right)(1)^2 = 0.36\ \mathrm{pu}.$$

(c) HV: $Z_{base} = 69^2/100 = 47.61\ \Omega$, so $X = 0.36(47.61) = 17.14\ \Omega$ ✓.

LV: $Z_{base} = 13.8^2/100 = 1.904\ \Omega$, so $X = 0.36(1.904) = 0.6856\ \Omega$ ✓.

The per-unit number changed (0.09 → 0.36) but the physical reactance did not. That is the whole content of a base change: you have relabelled the same ohms against a different yardstick.

</details>

## Connections

- **Backward:** the base definitions and the transformer-vanishing argument are [1.3](01-03-the-per-unit-system.md)'s.
- **Forward:** [2.1](02-01-ideal-and-real-transformer.md)–[2.2](02-02-transformer-performance-per-unit.md) supply the transformer impedance this diagram needs; [3.1](03-01-bus-admittance-matrix.md) converts the finished diagram into $Y_{bus}$; [4.1](04-01-symmetrical-faults.md) uses it to compute fault duty.
- **Sideways:** propagating a consistent set of bases through a network is a *gauge choice* — the physics (ohms, amps) is invariant, and only the labels change, exactly as in the unit systems of [`mathematical-methods-physics`](../../mathematical-methods-physics/syllabus.md).
