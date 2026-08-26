# Power Systems · Lesson 2.1: The ideal and real transformer

> ⏱ ~15 min · Module 2: Transformers and transmission lines · Builds on: [1.4 Base changes and the single-line diagram](01-04-base-changes-one-line-diagram.md), [`em-refresher` 3.3](../../em-refresher/lessons/03-03-electromagnetic-induction.md) · Unlocks: [2.2 Transformer performance in per-unit](02-02-transformer-performance-per-unit.md), [2.3 Three-phase transformer connections](02-03-three-phase-transformer-connections.md)

## Why this matters

The transformer is why the grid exists. Power lost in a line is $I^2R$; power delivered is $VI$. So for a given delivery, raising the voltage by ten cuts the current by ten and the loss by **a hundred**. Without a cheap, efficient way to change voltage, generation would have to sit next to load, and there would be no grid at all.

Transformers are also the most efficient machines ever built — a large power transformer runs above 99.5% — which means their losses, though small in percentage, are large in absolute terms and worth modelling carefully. This lesson builds the [equivalent circuit](../reference.md#transformer-equivalent-circuit-and-tests) and shows how to extract its parameters from two bench tests that any utility can run in an afternoon.

## The idea

Two coils on a common iron core. Alternating current in the primary makes an alternating flux; that flux links the secondary and induces a voltage. Faraday's law gives the voltage per turn as $d\phi/dt$, identical for both coils since they share the flux — so voltages divide as the turns do.

Power must be conserved, so if voltage goes up by $a$, current must come down by $a$. And impedance, being $V/I$, transforms by $a^2$ — the fact that made per-unit work in [1.3](01-03-the-per-unit-system.md).

A **real** transformer departs from that ideal in four ways, and the equivalent circuit is just those four departures drawn as circuit elements:

- **Winding resistance** — copper has resistance. Series $R$ in each winding.
- **Leakage flux** — not all flux links both coils. Series $X$ in each winding.
- **Magnetizing current** — the core needs current to establish flux at all. Shunt $X_m$.
- **Core loss** — hysteresis and eddy currents heat the iron. Shunt $R_c$.

The series pair (called the **equivalent** or **leakage** impedance) causes voltage drop and load-dependent loss. The shunt pair draws a small, nearly constant current regardless of load. That split — series elements scaling with load, shunt elements constant — is what makes the two bench tests work: one test with the secondary shorted isolates the series branch, one with it open isolates the shunt branch.

## The formal version

**Ideal transformer.** With $N_1$ primary and $N_2$ secondary turns and $a = N_1/N_2$:

$$\boxed{\;\frac{V_1}{V_2} = a, \qquad \frac{I_1}{I_2} = \frac{1}{a}, \qquad S_1 = S_2, \qquad Z_1^{\rm referred} = a^2Z_2.\;}$$

*In words: voltage up by $a$, current down by $a$, power unchanged, impedance up by $a^2$.*

The first relation comes from Faraday's law applied to both coils sharing one flux $\phi$:

$$v_1 = N_1\frac{d\phi}{dt}, \qquad v_2 = N_2\frac{d\phi}{dt} \quad\Longrightarrow\quad \frac{v_1}{v_2} = \frac{N_1}{N_2}.$$

**Exact equivalent circuit.** Primary $R_1+jX_1$, shunt $R_c\parallel jX_m$, then ideal transformer, then secondary $R_2+jX_2$.

**Referred (approximate) equivalent circuit.** Refer the secondary quantities to the primary and, because the magnetizing current is small (0.5–5% of rated), move the shunt branch to the terminals:

$$R_{eq} = R_1+a^2R_2, \qquad X_{eq} = X_1+a^2X_2, \qquad Z_{eq} = R_{eq}+jX_{eq}.$$

*In words: one series impedance and one shunt branch, both referable to either side.* The error from moving the shunt branch is well under a percent for a power transformer, and the circuit becomes trivially solvable.

**Open-circuit test** — secondary open, rated voltage applied (usually on the **LV** side, for safety and instrument range). With the secondary open there is no load current, so only the shunt branch draws current:

$$R_c = \frac{V_{oc}^2}{P_{oc}}, \qquad I_c = \frac{P_{oc}}{V_{oc}}, \qquad I_m = \sqrt{I_{oc}^2-I_c^2}, \qquad X_m = \frac{V_{oc}}{I_m}.$$

*In words: the wattmeter reading is core loss, and the rest of the current is magnetizing.* Because rated voltage is applied, $P_{oc}$ **is** the core loss at rated flux — and core loss depends on voltage, not on load, so this one number is the transformer's no-load loss for all time.

**Short-circuit test** — secondary shorted, voltage raised (usually from the **HV** side) until rated current flows. That voltage is small (typically 5–10% of rated), so the flux and hence the core loss are negligible, and only the series branch matters:

$$|Z_{eq}| = \frac{V_{sc}}{I_{sc}}, \qquad R_{eq} = \frac{P_{sc}}{I_{sc}^2}, \qquad X_{eq} = \sqrt{|Z_{eq}|^2-R_{eq}^2}.$$

*In words: the wattmeter reading is the full-load copper loss, and the applied voltage divided by rated current is the leakage impedance.*

**The two tests are complementary by design:**

| Test | Excited at | Isolates | Measures |
|---|---|---|---|
| Open circuit | rated **voltage**, no current | shunt branch | core loss, $R_c$, $X_m$ |
| Short circuit | rated **current**, low voltage | series branch | copper loss, $R_{eq}$, $X_{eq}$ |

**Per-unit impedance and the short-circuit test.** Note that the SC test voltage, expressed in per-unit, *is* the per-unit impedance:

$$Z_{pu} = \frac{|Z_{eq}|}{Z_{base}} = \frac{V_{sc}/I_{rated}}{V_{rated}/I_{rated}} = \frac{V_{sc}}{V_{rated}}.$$

*In words: a transformer with "8% impedance" is one that needs 8% of rated voltage to push rated current into a short.* That is where the nameplate percentage comes from, and it is why the number is directly meaningful.

**Losses.**

| Loss | Depends on | Scales as |
|---|---|---|
| Core (iron) loss | applied voltage | roughly constant with load |
| Copper loss | load current | $I^2$, i.e. (load fraction)$^2$ |

**Why the leakage reactance is deliberately non-zero.** It might seem you would want $X_{eq}\to0$ for perfect voltage regulation. You do not: the leakage reactance is what **limits fault current**. An 8% transformer passes at most about $1/0.08 = 12.5$ pu into a bolted short, which sets the interrupting duty of every breaker downstream. Reduce it and the fault current rises proportionally. Transformer impedance is therefore a *designed* compromise between regulation and fault duty, not a defect.

## Picture

![A two-panel figure. Left: the exact transformer equivalent circuit, showing primary resistance and leakage reactance, a shunt branch with core-loss resistance in parallel with magnetizing reactance, an ideal transformer symbol with turns ratio a, and secondary resistance and leakage reactance. Right: the same circuit after referring the secondary to the primary and moving the shunt branch to the terminals, leaving one series R plus jX and one shunt branch, with two insets showing which branch each bench test isolates — open circuit exciting only the shunt, short circuit exciting only the series.](assets/02-01-fig1.svg)

Left: the four departures from ideality, each as one element. Series elements scale with load current; shunt elements are set by the applied voltage and barely move.

Right: the working model, and why two tests suffice. Open-circuit — no load current, so all the current goes through the shunt branch. Short-circuit — negligible voltage across the shunt branch, so all the current goes through the series branch. Each test sees one branch cleanly, which is why the parameters separate so neatly.

## Worked examples

**Example 1 (extracting the model from bench tests).** A 20 kVA, 2400/240 V, 60 Hz transformer gives:

- **Open circuit** (LV side, 240 V): $V = 240$ V, $I = 1.038$ A, $P = 122$ W
- **Short circuit** (HV side): $V = 52.0$ V, $I = 8.33$ A, $P = 220$ W

Find the equivalent circuit and the per-unit impedance.

*Rated currents.* $I_{HV} = 20{,}000/2400 = 8.33$ A ✓ (the SC test was indeed at rated current). $I_{LV} = 20{,}000/240 = 83.3$ A.

*Open-circuit test → shunt branch (referred to LV).*

$$R_c = \frac{V_{oc}^2}{P_{oc}} = \frac{240^2}{122} = \frac{57{,}600}{122} = 472\ \Omega,$$

$$I_c = \frac{P_{oc}}{V_{oc}} = \frac{122}{240} = 0.508\ \mathrm{A}, \qquad I_m = \sqrt{1.038^2-0.508^2} = \sqrt{1.0774-0.2581} = 0.905\ \mathrm{A},$$

$$X_m = \frac{240}{0.905} = 265\ \Omega\ \text{(LV side)}.$$

*Sanity check on magnetizing current:* $1.038/83.3 = 1.25\%$ of rated — right in the normal range.

*Short-circuit test → series branch (referred to HV).*

$$|Z_{eq}| = \frac{52.0}{8.33} = 6.242\ \Omega, \qquad R_{eq} = \frac{220}{8.33^2} = \frac{220}{69.4} = 3.171\ \Omega,$$

$$X_{eq} = \sqrt{6.242^2-3.171^2} = \sqrt{38.96-10.06} = \sqrt{28.91} = 5.377\ \Omega\ \text{(HV side)}.$$

*Per-unit.* On the transformer's own rating, $Z_{base,HV} = 2400^2/20{,}000 = 288\ \Omega$:

$$Z_{pu} = \frac{3.171+j5.377}{288} = 0.0110+j0.0187 = 0.0217\ \mathrm{pu}\ (2.17\%).$$

*Cross-check with the shortcut:* $Z_{pu} = V_{sc}/V_{rated} = 52.0/2400 = 0.0217$ ✓.

*What the numbers say.* A 2.2% impedance is low even for a distribution transformer, which means good regulation but a high fault contribution — roughly $1/0.0217 = 46$ pu, or 920 kVA of fault duty on a 20 kVA unit. Small transformers routinely have low per-unit impedance for exactly this reason, and their downstream protection must be rated for it.

**Example 2 (referring across, and why per-unit is easier).** Take the same transformer and express the series impedance on the LV side, then confirm the per-unit value is unchanged.

*Referring HV → LV.* The turns ratio is $a = 2400/240 = 10$, and impedance refers by $1/a^2$:

$$Z_{eq,LV} = \frac{Z_{eq,HV}}{a^2} = \frac{3.171+j5.377}{100} = 0.03171+j0.05377\ \Omega.$$

*Per-unit on the LV side.* $Z_{base,LV} = 240^2/20{,}000 = 2.88\ \Omega$:

$$Z_{pu} = \frac{0.03171+j0.05377}{2.88} = 0.0110+j0.0187\ \mathrm{pu}\ \checkmark$$

— identical to the HV-side value, exactly as [1.3](01-03-the-per-unit-system.md) promised.

*The comparison that makes the point.* The two ohmic values differ by a factor of 100 and mean nothing without stating a side. The per-unit value is one number, valid from either side, and it is the number on the nameplate. **This is why every utility datasheet quotes percent impedance and not ohms** — the ohms depend on where you stand, and the percentage does not.

*A useful corollary for parallel transformers.* Two transformers operated in parallel share load in inverse proportion to their per-unit impedances (on a common base). Two units of equal MVA and equal percent impedance share equally; a 5% unit paralleled with a 10% unit of the same rating takes **two thirds** of the load and will overheat first. Matching percent impedance is therefore a hard requirement for paralleling, and it is checkable directly from nameplates without any referring at all.

## Watch out

- **You might apply the open-circuit result to the wrong side.** OC is usually run on the LV side, so $R_c$ and $X_m$ come out referred to LV. Referring them to HV multiplies by $a^2$ — a factor of 100 here.
- **You might think core loss depends on load.** It depends on *voltage*, so it is essentially constant from no load to full load. Copper loss is the load-dependent one, scaling as the square of load fraction.
- **You might treat leakage reactance as a defect.** It is the fault-current limiter, and its value is a deliberate design choice. Zero impedance would mean infinite fault current.
- **You might use the ohmic impedance without stating a side.** The per-unit value is side-independent; the ohmic value is not, and differs by $a^2$.
- **You might parallel transformers with mismatched impedances.** Load divides inversely with per-unit impedance, so the lower-impedance unit overloads. Percent impedance must match within a few percent for paralleling.

## One-liner

> Faraday's law makes voltages divide as the turns, and the four real-world departures — winding resistance, leakage flux, magnetizing current, core loss — are exactly what the short-circuit and open-circuit tests separate.

## Problems

**P1 (🟢)** A 50 kVA, 4800/240 V transformer has short-circuit test data (HV side): 180 V, 10.42 A, 617 W. (a) Confirm the test was at rated current. (b) Find $|Z_{eq}|$, $R_{eq}$ and $X_{eq}$ referred to HV. (c) Find the per-unit impedance. (d) Verify with the $V_{sc}/V_{rated}$ shortcut.

**P2 (🟡)** A 100 kVA, 11 000/400 V transformer gives: OC (LV, 400 V) — 3.2 A, 640 W; SC (HV) — 470 V, 9.09 A, 1360 W. (a) Find $R_c$ and $X_m$ referred to LV. (b) Find $R_{eq}$ and $X_{eq}$ referred to HV. (c) Find the per-unit impedance. (d) Find the total loss at full load and at half load.

**P3 (🔴)** Two transformers are to be paralleled on a 33 kV bus: unit A is 10 MVA with 7.5% impedance, unit B is 15 MVA with 6.0% impedance. (a) Convert both to a common 25 MVA base. (b) Find how a 20 MVA load divides between them. (c) Determine the maximum total load before either unit exceeds its rating. (d) What impedance would unit B need for the pair to share load in proportion to their ratings, and comment on the practical options.

<details>
<summary>Solutions</summary>

**P1** (a) $$I_{rated,HV} = \frac{50{,}000}{4800} = 10.42\ \mathrm{A}\ \checkmark.$$

(b) $$|Z_{eq}| = \frac{180}{10.42} = 17.27\ \Omega, \qquad R_{eq} = \frac{617}{10.42^2} = \frac{617}{108.6} = 5.682\ \Omega,$$

$$X_{eq} = \sqrt{17.27^2-5.682^2} = \sqrt{298.3-32.3} = \sqrt{266.0} = 16.31\ \Omega.$$

(c) $$Z_{base} = \frac{4800^2}{50{,}000} = \frac{23.04\times10^{6}}{5\times10^{4}} = 460.8\ \Omega,$$

$$Z_{pu} = \frac{5.682+j16.31}{460.8} = 0.01233+j0.03540 = 0.03748\ \mathrm{pu}\ (3.75\%).$$

(d) $$\frac{V_{sc}}{V_{rated}} = \frac{180}{4800} = 0.0375\ \checkmark.$$

**P2** (a) $$R_c = \frac{400^2}{640} = \frac{160{,}000}{640} = 250\ \Omega,$$
$$I_c = \frac{640}{400} = 1.60\ \mathrm{A}, \qquad I_m = \sqrt{3.2^2-1.6^2} = \sqrt{10.24-2.56} = \sqrt{7.68} = 2.771\ \mathrm{A},$$
$$X_m = \frac{400}{2.771} = 144.4\ \Omega\ \text{(LV)}.$$

(b) Rated HV current: $100{,}000/11{,}000 = 9.09$ A ✓.

$$|Z_{eq}| = \frac{470}{9.09} = 51.71\ \Omega, \qquad R_{eq} = \frac{1360}{9.09^2} = \frac{1360}{82.63} = 16.46\ \Omega,$$
$$X_{eq} = \sqrt{51.71^2-16.46^2} = \sqrt{2674-270.9} = \sqrt{2403} = 49.02\ \Omega.$$

(c) $$Z_{base} = \frac{11{,}000^2}{100{,}000} = 1210\ \Omega, \qquad Z_{pu} = \frac{16.46+j49.02}{1210} = 0.01360+j0.04051 = 0.04273\ \mathrm{pu}.$$

(Check: $470/11{,}000 = 0.04273$ ✓.)

(d) *Full load:* copper $= P_{sc} = 1360$ W, core $= P_{oc} = 640$ W.

$$P_{\rm loss,FL} = 1360+640 = 2000\ \mathrm{W}.$$

*Half load:* copper scales as $(0.5)^2$, core is unchanged:

$$P_{\rm loss,HL} = 0.25(1360)+640 = 340+640 = 980\ \mathrm{W}.$$

(Note the crossover: at half load the core loss dominates. Maximum efficiency occurs where the two are equal, at load fraction $\sqrt{P_{oc}/P_{sc}} = \sqrt{640/1360} = 0.686$ — about 69% of rating, which is roughly where distribution transformers are designed to sit on average.)

**P3** (a) On a 25 MVA base:

$$Z_A = 0.075\left(\frac{25}{10}\right) = 0.1875\ \mathrm{pu}, \qquad Z_B = 0.060\left(\frac{25}{15}\right) = 0.100\ \mathrm{pu}.$$

(b) Parallel transformers see the same voltage across them, so load divides **inversely** with impedance:

$$\frac{S_A}{S_B} = \frac{Z_B}{Z_A} = \frac{0.100}{0.1875} = 0.5333.$$

With $S_A+S_B = 20$ MVA:

$$S_A = 20\left(\frac{0.5333}{1.5333}\right) = 20(0.3478) = 6.96\ \mathrm{MVA}, \qquad S_B = 20-6.96 = 13.04\ \mathrm{MVA}.$$

*Loading fractions:* A at $6.96/10 = 69.6\%$, B at $13.04/15 = 86.9\%$.

(c) Unit B is the more heavily loaded one relative to its rating, so it hits its limit first. B reaches 15 MVA when

$$S_{\rm tot} = 15\left(\frac{1.5333}{1}\right) = 15(1.5333)\cdot\frac{1}{1} \ldots$$

More directly: B always takes the fraction $1-0.3478 = 0.6522$ of the total, so

$$S_{\rm tot,max} = \frac{15}{0.6522} = 23.0\ \mathrm{MVA}.$$

At that point A carries $23.0-15 = 8.0$ MVA, i.e. 80% of its 10 MVA rating.

**So the pair can only carry 23.0 MVA of the 25 MVA installed** — 8% of the capacity is stranded, because the impedance mismatch loads B harder than A.

(d) For proportional sharing, per-unit impedances **on a common base** must be inversely proportional to ratings — equivalently, the *percent impedances on their own ratings* must be **equal**:

$$Z_B^{\rm own} = Z_A^{\rm own} = 7.5\%.$$

Check: on 25 MVA that gives $Z_B = 0.075(25/15) = 0.125$ pu, and

$$\frac{S_A}{S_B} = \frac{0.125}{0.1875} = 0.6667 = \frac{10}{15}\ \checkmark$$

— exactly the ratio of the ratings, so both reach 100% together and the full 25 MVA is usable.

*Practical options,* in rough order of preference:

1. **Specify matched percent impedance when purchasing.** Standard practice, and free if done at the order stage — this is precisely why utilities specify impedance rather than accepting whatever the manufacturer offers.
2. **Accept the derating.** Losing 2 MVA of 25 may be cheaper than any fix, especially if load growth is slow.
3. **Add series reactance to unit B.** A small reactor raises B's impedance to match, restoring sharing — but it adds cost, losses and voltage drop, and is rarely worth it.
4. **Use the tap changers.** Adjusting taps changes the *no-load voltage ratio*, which drives a **circulating current** between the units even at no load. This shifts load sharing, but it is a blunt tool: circulating current adds losses and eats capacity, and it cannot correct an impedance mismatch cleanly because it acts on voltage, not on impedance.

The general rule worth carrying: **parallel transformers share load inversely with per-unit impedance and are limited by whichever hits its rating first**, so mismatched impedance always strands capacity. It is one of the few problems in power systems best solved on the purchase order.

</details>

## Flashback

**From Lesson 1.4 (Base changes and the single-line diagram):** A 30 MVA, 138/13.8 kV transformer has $X = 0.10$ pu. (a) Convert to a 100 MVA base. (b) Find its reactance in ohms on both sides. (c) State what current a bolted three-phase fault on the LV terminals would draw, in per-unit and in amps, ignoring the source impedance.

<details>
<summary>Solution</summary>

(a) $$X = 0.10\left(\frac{100}{30}\right) = 0.3333\ \mathrm{pu}.$$

(b) HV: $Z_{base} = 138^2/100 = 190.4\ \Omega$, so $X = 0.3333(190.4) = 63.5\ \Omega$.

LV: $Z_{base} = 13.8^2/100 = 1.904\ \Omega$, so $X = 0.3333(1.904) = 0.635\ \Omega$.

(Ratio $63.5/0.635 = 100 = (138/13.8)^2$ ✓.)

(c) On the transformer's own base the impedance is 0.10 pu, so the fault current is

$$I_f = \frac{1.0}{0.10} = 10\ \mathrm{pu\ of\ its\ own\ rating}.$$

In amps, using the transformer's own LV rated current $I_{rated} = 30\times10^{6}/(\sqrt3\times13{,}800) = 1255$ A:

$$I_f = 10(1255) = 12{,}550\ \mathrm{A}.$$

(Equivalently on the 100 MVA base: $I_f = 1.0/0.3333 = 3.0$ pu, and $I_{base} = 100\times10^{6}/(\sqrt3\times13{,}800) = 4184$ A, giving $3.0(4184) = 12{,}550$ A ✓ — the same current, as it must be.)

That number is the switchgear specification: any breaker on that LV bus must interrupt at least 12.55 kA, and this single calculation — nameplate MVA divided by percent impedance — is how a preliminary fault duty is estimated in seconds.

</details>

## Connections

- **Backward:** the $a^2$ impedance scaling is [1.3](01-03-the-per-unit-system.md)'s, and Faraday's law is [`em-refresher` 3.3](../../em-refresher/lessons/03-03-electromagnetic-induction.md).
- **Forward:** [2.2](02-02-transformer-performance-per-unit.md) uses this circuit to compute regulation and efficiency; [2.3](02-03-three-phase-transformer-connections.md) assembles three of them into a bank; [4.1](04-01-symmetrical-faults.md) uses the leakage reactance as the dominant fault-limiting element.
- **Sideways:** the open-circuit/short-circuit pair is the same parameter-extraction strategy as any two-port characterization — drive one port to zero impedance, then to infinite, and read the two branches separately. It is the electrical twin of the $C$–$V$ extraction in [`semiconductor-devices` 3.4](../../semiconductor-devices/lessons/03-04-threshold-voltage-cv.md).
