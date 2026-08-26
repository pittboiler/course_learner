# Power Systems · Lesson 4.1: Symmetrical (three-phase) faults

> ⏱ ~15 min · Module 4: Faults, protection, and stability · Builds on: [3.1 The bus admittance matrix](03-01-bus-admittance-matrix.md), [1.4 Base changes and the single-line diagram](01-04-base-changes-one-line-diagram.md) · Unlocks: [4.2 Symmetrical components](04-02-symmetrical-components.md), [4.4 Protection and relaying basics](04-04-protection-and-relaying.md)

## Why this matters

Everything so far assumed the system was intact and balanced. Module 4 breaks it.

A short circuit drives currents of ten to fifty times rated through equipment designed for rated. Two questions follow immediately, and both must be answered before anything is built: **how large is the current**, so a breaker can be specified that will actually interrupt it, and **how long can it persist**, so that conductors, transformers, and busbars survive the mechanical and thermal stress until the breaker clears.

The three-phase bolted [fault](../reference.md#fault-mva) — all three phases shorted to each other with zero impedance — is the natural starting point. It is usually the most severe, it is *rare* in practice (most faults are single-line-to-ground), and it has the enormous analytical advantage of staying **balanced**, so the per-phase equivalent of [1.2](01-02-per-phase-equivalent.md) still applies. Unbalanced faults need the machinery of [4.2](04-02-symmetrical-components.md) and [4.3](04-03-sequence-networks-unsymmetrical-faults.md).

## The idea

At the instant of a bolted fault at bus $k$, that bus's voltage is forced to zero. Everything upstream sees a short.

By Thevenin's theorem, the whole network as seen from bus $k$ reduces to a source equal to the **prefault voltage** at that bus behind an equivalent impedance:

$$I_f = \frac{V_k^{(0)}}{Z_{kk}}.$$

The prefault voltage is conventionally taken as $1.0$ pu, which is both convenient and conservative — the per-unit system of [1.3](01-03-the-per-unit-system.md) was designed to make it approximately true.

The one genuinely new physics is that **a synchronous generator's reactance is not a constant**. Immediately after the fault the machine's flux linkages cannot change instantaneously, so it presents a small reactance and delivers a large current. Over the following cycles the currents induced in the damper windings and then the field winding decay, and the effective reactance rises through three regimes:

| Regime | Reactance | Duration | Typical value |
|---|---|---|---|
| Subtransient | $X_d''$ | first 2–3 cycles | 0.10–0.25 pu |
| Transient | $X_d'$ | 0.1–2 s | 0.15–0.40 pu |
| Steady-state | $X_d$ | after several seconds | 1.0–2.0 pu |

*In words: the machine looks strong at first and weakens as the fault persists*, by a factor of five to ten from first cycle to steady state.

Which one to use depends on the question. **Breaker duty** — the current the breaker must survive and then interrupt — uses $X_d''$, because breakers operate in the first few cycles. **Relay coordination** and **stability studies** use $X_d'$, because they play out over hundreds of milliseconds.

## The formal version

**Bolted three-phase fault current.**

$$\boxed{\;I_f = \frac{V_{\rm prefault}}{Z_{th}}\ \ \mathrm{pu} \qquad\text{(usually } V_{\rm prefault} = 1.0\text{)}.\;}$$

Actual amperes follow from the base current at the fault's voltage level:

$$I_{f,\mathrm{A}} = I_{f,\rm pu}\times I_{base} = I_{f,\rm pu}\times\frac{S_{base}}{\sqrt3\,V_{base,LL}}.$$

**Fault MVA (short-circuit capacity).** A single number that characterizes how "strong" a bus is:

$$\boxed{\;\mathrm{MVA}_{sc} = \frac{S_{base}}{Z_{th,\rm pu}} = \sqrt3\,V_{LL}\,I_f.\;}$$

*In words: a strong bus has low Thevenin impedance and high fault MVA.* Utilities quote it constantly — "that's a 5000 MVA bus" means $Z_{th} = 100/5000 = 0.02$ pu on a 100 MVA base — and it is the cleanest way to state how stiff a connection point is.

**The $Z_{bus}$ method.** For a network with many buses, invert once and read off every answer:

$$\boxed{\;\mathbf{Z}_{bus} = \mathbf{Y}_{bus}^{-1}, \qquad I_f^{(k)} = \frac{V_k^{(0)}}{Z_{kk}}.\;}$$

*In words: the diagonal entry $Z_{kk}$ is exactly the Thevenin impedance at bus $k$.* This is the one place in power systems where $Z_{bus}$ earns its cost.

Post-fault voltages at every other bus follow immediately:

$$\boxed{\;V_i^{\rm fault} = V_i^{(0)}-\frac{Z_{ik}}{Z_{kk}}V_k^{(0)},\;}$$

and the current in a branch from $i$ to $j$ is $(V_i^{\rm fault}-V_j^{\rm fault})/z_{ij}$.

For fault studies the $Y_{bus}$ is built with **generators represented as shunt reactances to ground** ($1/jX_d''$ added to the diagonal) — otherwise there is no source and $Y_{bus}$ is singular.

**DC offset and asymmetry.** A fault initiated at a voltage zero produces a fully offset current wave:

$$i(t) = \sqrt2\,I''\left[\sin(\omega t-\alpha)+e^{-t/\tau}\sin\alpha\right], \qquad \tau = \frac{X}{\omega R} = \frac{L}{R}.$$

The first term is the symmetrical AC; the second is a decaying DC offset that exists because current in an inductance cannot change instantaneously.

The consequences are practical:

| Quantity | Expression | Typical value |
|---|---|---|
| Peak asymmetrical | up to $2\sqrt2\,I''$ | $2.6$–$2.7\times I''$ |
| First-cycle (momentary) rms | $I''\sqrt{1+2e^{-2t/\tau}}$ | $1.6\times I''$ |
| Interrupting (5-cycle) rms | mostly decayed | $1.1\times I''$ |

*In words: the first peak can be 2.6 times the symmetrical rms, and the first-cycle rms about 1.6 times.* Those two factors are the basis of the momentary and interrupting ratings stamped on every circuit breaker.

**Breaker ratings.** A breaker carries two distinct numbers:

- **Momentary (close-and-latch) rating** — the first-cycle asymmetrical current it can withstand mechanically, since force goes as $i^2$.
- **Interrupting rating** — the current it can actually break, several cycles later, quoted at its rated interrupting time.

Both must be checked. A breaker adequate for the interrupting duty can still be destroyed by the momentary duty.

**Prefault load current.** Strictly, the fault current superposes on the prefault load current. Since fault currents are ten to fifty times load current and roughly $90°$ out of phase with it, neglecting the load is standard and errs by a couple of percent — conservatively low in magnitude, which is why careful studies add a margin.

## Picture

![A two-panel figure. Left: a one-line diagram of a generator behind its subtransient reactance, feeding a transformer and then a transmission line to a fault symbol at the far bus, drawn above the corresponding per-unit reactance diagram in which the three elements are a series chain from a one-per-unit source to the fault point, with the Thevenin reactance marked as their sum. Right: an oscillogram of fault current against time showing a decaying asymmetrical wave — a sinusoid riding on an exponentially decaying DC offset — with the first peak labelled as roughly two point six times the symmetrical rms, the envelope decaying through a subtransient region, a transient region, and a steady-state region, each annotated with its reactance.](assets/04-01-fig1.svg)

Left: the reduction. Everything between the source and the fault is a series reactance chain, and the fault current is simply $1.0$ divided by their sum.

Right: what actually flows. Two separate decays are superimposed — the DC offset dying with the network's $L/R$ time constant, and the AC envelope shrinking as the machine's reactance rises from $X_d''$ to $X_d'$ to $X_d$. The breaker must survive the leftmost peak and interrupt somewhere in the middle.

## Worked examples

**Example 1 (a radial system, end to end).** A 25 MVA, 13.8 kV generator with $X_d'' = 0.15$ pu feeds a 25 MVA, 13.8/138 kV transformer with $X = 0.10$ pu, then a transmission line of $X = 0.15$ pu on the same base. A bolted three-phase fault occurs at the far end of the line. Find the fault current in pu and amperes, and the fault MVA.

*Thevenin reactance.* All three elements are in series from the source to the fault:

$$X_{th} = 0.15+0.10+0.15 = 0.40\ \mathrm{pu}.$$

*Fault current.*

$$I_f = \frac{1.0}{j0.40} = -j2.50\ \mathrm{pu}, \qquad |I_f| = 2.50\ \mathrm{pu}.$$

(The $-j$ says the current lags the voltage by $90°$, as it must in a purely reactive network — a useful check.)

*In amperes at the fault.* The fault is on the 138 kV side:

$$I_{base} = \frac{25\times10^{6}}{\sqrt3(138\times10^{3})} = \frac{25\times10^{6}}{239{,}022} = 104.6\ \mathrm{A},$$

$$I_f = 2.50(104.6) = 261.5\ \mathrm{A}.$$

*Fault MVA.*

$$\mathrm{MVA}_{sc} = \frac{25}{0.40} = 62.5\ \mathrm{MVA}.$$

*Reading it.* A 62.5 MVA fault level is **weak** — a major transmission bus is 5000–20,000 MVA. This is a small radial machine feeding a long line, so the line's reactance dominates and limits the fault current. The current on the generator side is a different matter, and Example 2 addresses it.

*Sanity check on the base:* generator rated current is $25\times10^6/(\sqrt3\times13.8\times10^3) = 1046$ A, so on the 138 kV side rated current is 104.6 A — exactly $I_{base}$, as it should be, since the machine and transformer are rated at the base MVA. The fault draws 2.5 times rated at the line's far end.

**Example 2 (a fault at the generator terminals, and breaker duty).** The same 25 MVA, 13.8 kV generator has $X_d'' = 0.15$, $X_d' = 0.25$, $X_d = 1.2$ pu. A bolted three-phase fault occurs at its terminals with $E = 1.0$ pu. Find the current in all three regimes and the breaker duties.

*Base current at 13.8 kV.*

$$I_{base} = \frac{25\times10^{6}}{\sqrt3(13{,}800)} = 1045.9\ \mathrm{A}.$$

*The three currents.*

| Regime | pu | Amperes | Multiple of rated |
|---|---|---|---|
| Subtransient $I''$ | $1.0/0.15 = 6.667$ | 6973 | 6.7× |
| Transient $I'$ | $1.0/0.25 = 4.000$ | 4184 | 4.0× |
| Steady-state | $1.0/1.2 = 0.833$ | 872 | 0.83× |

**The steady-state fault current is *below* rated.** That is not a mistake — a synchronous machine's steady-state short-circuit current is genuinely small, because $X_d$ is greater than 1 pu. If the fault persisted for ten seconds the machine would be fine, but the first few cycles would already have wrecked the breaker.

*Momentary duty.* At the moment of a worst-case fault, the DC offset roughly multiplies the first-cycle rms by 1.6:

$$I_{\rm momentary} = 1.6(6973) = 11{,}157\ \mathrm{A\ rms\ asymmetrical}.$$

The peak, which sets the mechanical force on the busbars, is about $2.6\times$ the symmetrical rms:

$$i_{\rm peak}\approx2.6(6973) = 18{,}130\ \mathrm{A}.$$

*Interrupting duty.* A five-cycle breaker parts its contacts about 83 ms in, by which time the DC offset has largely decayed:

$$I_{\rm interrupting}\approx1.1(6973) = 7670\ \mathrm{A\ rms}.$$

*Specifying the breaker.* It needs a **close-and-latch rating above 11,200 A** and an **interrupting rating above 7700 A**, at 13.8 kV. Both must be checked; the momentary rating is the larger number and is often the binding one on generator-terminal breakers.

*Where the asymmetry factors come from.* The DC offset decays with $\tau = X/(\omega R)$. Evaluating the first-cycle rms $I''\sqrt{1+2e^{-2t/\tau}}$ at $t$ = half a cycle:

| $X/R$ | $\tau$ | first-cycle factor | peak factor |
|---|---|---|---|
| 10 | 26.5 ms | 1.44 | 2.45 |
| 20 | 53.1 ms | 1.57 | 2.63 |
| 40 | 106 ms | 1.65 | 2.72 |

**Higher $X/R$ means slower DC decay and worse asymmetry.** Generator-terminal faults have $X/R$ of 30–80 (machines are nearly purely reactive), which is why the standard 1.6 factor is used there; a distribution fault with $X/R\approx5$ is much less asymmetrical. The theoretical ceiling is $\sqrt3 = 1.732$ for the rms factor and $2\sqrt2 = 2.83$ for the peak, approached only as $R\to0$.

**Example 3 (a meshed network by $Z_{bus}$).** A three-bus system, all impedances in pu on a 100 MVA base:

- Generator at bus 1: $X_d'' = 0.20$ (to ground)
- Generator at bus 3: $X_d'' = 0.25$ (to ground)
- Lines: 1–2 $j0.15$, 2–3 $j0.10$, 1–3 $j0.30$

Find the fault current for a bolted three-phase fault at bus 2, the post-fault voltages, and the line contributions.

*Build $Y_{bus}$ with the generators as shunts.*

$$Y_{11} = \frac{1}{j0.20}+\frac{1}{j0.15}+\frac{1}{j0.30} = -j(5+6.6667+3.3333) = -j15.0,$$
$$Y_{22} = \frac{1}{j0.15}+\frac{1}{j0.10} = -j16.6667,$$
$$Y_{33} = \frac{1}{j0.25}+\frac{1}{j0.10}+\frac{1}{j0.30} = -j(4+10+3.3333) = -j17.3333,$$
$$Y_{12} = j6.6667, \quad Y_{13} = j3.3333, \quad Y_{23} = j10.$$

*Invert.*

$$\mathbf{Z}_{bus} = j\begin{bmatrix}0.13178 & 0.10388 & 0.08527\\ 0.10388 & 0.17364 & 0.12016\\ 0.08527 & 0.12016 & 0.14341\end{bmatrix}\ \mathrm{pu}.$$

*Fault at bus 2.*

$$I_f = \frac{V_2^{(0)}}{Z_{22}} = \frac{1.0}{j0.17364} = -j5.759\ \mathrm{pu}, \qquad |I_f| = 5.759\ \mathrm{pu}.$$

$$\mathrm{MVA}_{sc} = \frac{100}{0.17364} = 576\ \mathrm{MVA}.$$

*Post-fault voltages.*

$$V_1 = 1.0-\frac{Z_{12}}{Z_{22}} = 1.0-\frac{0.10388}{0.17364} = 1.0-0.5982 = 0.4018\ \mathrm{pu},$$
$$V_2 = 0\ \mathrm{pu}\ \text{(the fault)}, \qquad V_3 = 1.0-\frac{0.12016}{0.17364} = 1.0-0.6920 = 0.3080\ \mathrm{pu}.$$

*Line contributions.*

$$I_{12} = \frac{V_1-V_2}{j0.15} = \frac{0.4018}{j0.15} = -j2.679\ \mathrm{pu},$$
$$I_{32} = \frac{V_3-V_2}{j0.10} = \frac{0.3080}{j0.10} = -j3.080\ \mathrm{pu},$$
$$I_{13} = \frac{V_1-V_3}{j0.30} = \frac{0.4018-0.3080}{j0.30} = -j0.3125\ \mathrm{pu}.$$

*Check:* the two branches entering the fault must carry the whole fault current:

$$2.679+3.080 = 5.759 = |I_f|\ \checkmark.$$

*Check bus 1's balance:* generator 1 supplies $(1.0-0.4018)/j0.20 = -j2.991$, and bus 1 exports $2.679$ to bus 2 and $0.3125$ to bus 3 — total $2.991$ ✓.

*What the meshed structure buys the fault.* Consider a naive estimate that treats only the nearest generator: bus 2's fault fed through generator 1 and line 1–2 alone would be

$$I_f^{\rm naive} = \frac{1.0}{j(0.20+0.15)} = -j2.857\ \mathrm{pu},$$

**less than half the true 5.759 pu.** The meshed network provides three parallel paths into the fault, and ignoring the remote generator underestimates the duty by 50%.

That underestimate is a serious engineering error, not a rounding issue: a breaker chosen for 2.9 pu would fail catastrophically at 5.8 pu. **This is precisely why $Z_{bus}$ fault studies exist** — hand reduction of a meshed network is error-prone, and the network keeps changing as lines are built, so fault levels must be recomputed for the whole system whenever the topology does.

*And note the voltages.* Bus 1 sits at 0.40 pu and bus 3 at 0.31 pu during the fault. **A fault does not only affect its own bus** — it depresses voltage across the whole region, which is why a single fault can trip motor contactors and stall induction motors far from the fault, and why fast clearing matters for reasons beyond equipment damage.

## Watch out

- **You might use $X_d$ for breaker duty.** Breakers act in cycles, so use $X_d''$. Using $X_d$ can underestimate the current by a factor of eight.
- **You might forget to convert to a common base.** Generator and transformer reactances come on their own ratings. Convert everything with the base-change formula of [1.4](01-04-base-changes-one-line-diagram.md) first.
- **You might use the wrong $I_{base}$.** It depends on the voltage level *at the fault*. A per-unit current is meaningless until multiplied by the right base.
- **You might forget the generator shunts when building $Y_{bus}$ for a fault study.** Without them there is no path to ground and the matrix is singular.
- **You might check only the interrupting rating.** The momentary duty is the larger number and can destroy a breaker that would otherwise have interrupted fine.
- **You might assume the three-phase fault is always worst.** It usually is, but on a solidly grounded system with low zero-sequence impedance, a single-line-to-ground fault can exceed it — see [4.3](04-03-sequence-networks-unsymmetrical-faults.md).
- **You might reduce a meshed network by inspection.** Example 3 shows the error is not small. Use $Z_{bus}$.

## One-liner

> A bolted three-phase fault draws $V_{\rm prefault}/Z_{th}$, with $Z_{th} = Z_{kk}$ read straight off $Z_{bus}$; use $X_d''$ for breaker duty, multiply by 1.6 for momentary and 1.1 for interrupting, and never estimate a meshed network's fault level by inspection.

## Problems

**P1 (🟢)** On a 100 MVA, 138 kV base, a generator with $X_d'' = 0.12$ pu feeds a transformer of $X = 0.08$ pu and then two identical parallel lines of $X = 0.30$ pu each. A bolted three-phase fault occurs at the far end. (a) Find the Thevenin reactance. (b) Find the fault current in pu and amperes. (c) Find the fault MVA.

**P2 (🟡)** A 50 MVA, 18 kV generator has $X_d'' = 0.16$, $X_d' = 0.28$, $X_d = 1.5$ pu, with $E = 1.05$ pu. A bolted three-phase fault occurs at its terminals. (a) Find the base current. (b) Find the subtransient, transient and steady-state fault currents in amperes. (c) Find the momentary and 5-cycle interrupting duties. (d) A breaker is offered with a 15 kA close-and-latch rating and a 12 kA interrupting rating. State whether it is adequate and which rating is binding.

**P3 (🔴)** For the three-bus system of Example 3, a bolted three-phase fault occurs at **bus 1** instead. (a) Find the fault current and the fault MVA. (b) Find the post-fault voltages at buses 2 and 3. (c) Find all three line currents and verify the balance at the fault bus. (d) Compare bus 1's and bus 2's fault levels, explain the difference physically, and state what a protection engineer would conclude about which bus needs the stronger breakers.

<details>
<summary>Solutions</summary>

**P1** (a) The two lines are in parallel:

$$X_{\rm lines} = \frac{0.30}{2} = 0.15\ \mathrm{pu},$$
$$X_{th} = 0.12+0.08+0.15 = 0.35\ \mathrm{pu}.$$

(b) $$I_f = \frac{1.0}{0.35} = 2.857\ \mathrm{pu}.$$

$$I_{base} = \frac{100\times10^{6}}{\sqrt3(138\times10^{3})} = 418.4\ \mathrm{A}, \qquad I_f = 2.857(418.4) = 1195\ \mathrm{A}.$$

(c) $$\mathrm{MVA}_{sc} = \frac{100}{0.35} = 285.7\ \mathrm{MVA}.$$

*Note the effect of the second line.* With one line ($X = 0.30$) the total would be $0.50$ pu, giving 2.0 pu and 200 MVA. The parallel line **raises the fault duty by 43%** — a reminder that adding transmission capacity also raises fault levels, and that breaker adequacy must be rechecked whenever a line is added. This is a routine and frequently overlooked consequence of network reinforcement.

**P2** (a) $$I_{base} = \frac{50\times10^{6}}{\sqrt3(18{,}000)} = \frac{50\times10^{6}}{31{,}177} = 1603.8\ \mathrm{A}.$$

(b) | Regime | pu | Amperes |
|---|---|---|
| Subtransient | $1.05/0.16 = 6.5625$ | **10,525** |
| Transient | $1.05/0.28 = 3.7500$ | 6014 |
| Steady-state | $1.05/1.5 = 0.7000$ | 1123 |

(c) $$I_{\rm momentary} = 1.6(10{,}525) = 16{,}840\ \mathrm{A\ rms\ asymmetrical},$$
$$I_{\rm interrupting} = 1.1(10{,}525) = 11{,}577\ \mathrm{A\ rms}.$$

(d) | Duty | Required | Breaker rating | Verdict |
|---|---|---|---|
| Close-and-latch | 16,840 A | 15,000 A | **FAILS** |
| Interrupting | 11,577 A | 12,000 A | passes (3.5% margin) |

**The breaker is inadequate.** The interrupting rating is fine, but the momentary duty exceeds the close-and-latch rating by 12%.

*The binding rating is close-and-latch*, and that is the usual situation at generator terminals, where $X/R$ is high (30–80 for a large machine) and the DC offset therefore decays slowly. The mechanical forces during the first cycle — proportional to $i^2$, so $(16{,}840/15{,}000)^2 = 1.26$, i.e. 26% above design — would risk contact welding or mechanical failure of the breaker even though it could have interrupted the current a few cycles later.

*What to do.* Specify a larger breaker; or add reactance between the generator and the bus (a generator-step-up transformer with higher impedance, or a current-limiting reactor). The second option costs losses and voltage regulation but is sometimes cheaper than re-rating an entire switchgear lineup, and it is the standard remedy when an existing station's fault duty grows past its equipment.

**P3** (a) From the $Z_{bus}$ of Example 3:

$$Z_{11} = j0.13178\ \mathrm{pu}, \qquad I_f = \frac{1.0}{j0.13178} = -j7.588\ \mathrm{pu}, \qquad |I_f| = 7.588\ \mathrm{pu}.$$

$$\mathrm{MVA}_{sc} = \frac{100}{0.13178} = 759\ \mathrm{MVA}.$$

(b) $$V_2 = 1.0-\frac{Z_{21}}{Z_{11}} = 1.0-\frac{0.10388}{0.13178} = 1.0-0.7883 = 0.2117\ \mathrm{pu},$$
$$V_3 = 1.0-\frac{Z_{31}}{Z_{11}} = 1.0-\frac{0.08527}{0.13178} = 1.0-0.6470 = 0.3530\ \mathrm{pu}.$$

(c) $$I_{21} = \frac{V_2-V_1}{j0.15} = \frac{0.2117-0}{j0.15} = -j1.411\ \mathrm{pu},$$
$$I_{31} = \frac{V_3-V_1}{j0.30} = \frac{0.3530}{j0.30} = -j1.177\ \mathrm{pu},$$
$$I_{32} = \frac{V_3-V_2}{j0.10} = \frac{0.3530-0.2117}{j0.10} = -j1.413\ \mathrm{pu}.$$

*Generator contributions.*

$$I_{g1} = \frac{1.0-V_1}{j0.20} = \frac{1.0}{j0.20} = -j5.000\ \mathrm{pu},$$
$$I_{g3} = \frac{1.0-V_3}{j0.25} = \frac{0.6470}{j0.25} = -j2.588\ \mathrm{pu}.$$

*Balance at the fault bus.* Current into bus 1 comes from generator 1 directly, plus the two lines:

$$5.000+1.411+1.177 = 7.588 = |I_f|\ \checkmark.$$

*Balance at bus 3:* generator 3 supplies 2.588, of which 1.177 goes directly to bus 1 and 1.413 goes via bus 2 — $1.177+1.413 = 2.590$ ✓ (rounding).

*Balance at bus 2:* it receives 1.413 from bus 3 and sends 1.411 to bus 1 ✓. Bus 2 has no generator, so it is purely a transit point.

(d) | Bus | $Z_{kk}$ | $I_f$ (pu) | MVA$_{sc}$ |
|---|---|---|---|
| 1 | $j0.13178$ | 7.588 | 759 |
| 2 | $j0.17364$ | 5.759 | 576 |
| 3 | $j0.14341$ | 6.973 | 697 |

**Bus 1 is the strongest bus and has the highest fault duty** — 32% above bus 2.

*Why, physically.* Three factors, all pointing the same way:

**Bus 1 has a generator directly attached**, and that generator's $X_d'' = 0.20$ is a direct low-impedance path to the fault. Generator 1 alone contributes 5.0 pu of the 7.6 pu total, or 66%.

**Bus 1 is better connected.** It has three branches (its generator plus lines to buses 2 and 3), while bus 2 has only two. More parallel paths means lower Thevenin impedance.

**Bus 2 has no local generation at all.** Every ampere reaching a bus-2 fault must cross at least one line reactance, and those line reactances ($j0.15$ and $j0.10$) are what limit it.

*What the protection engineer concludes.*

**Bus 1 needs the highest-rated breakers** — 759 MVA at its voltage level, against 576 MVA at bus 2.

**Generator buses are always the worst case**, which generalizes: strong buses close to generation have high fault duty, and remote buses at the end of long lines have low duty. This is the single most reliable rule of thumb in fault studies, and it is why substations adjacent to large power plants carry the heaviest, most expensive switchgear on a system.

**There is a design tension here worth naming.** A strong bus is *desirable* for voltage stability and power quality (small voltage sag when load is switched, good motor starting, high SIL utilization) but *expensive* for fault duty. Utilities sometimes deliberately weaken a bus — by splitting it into two sections with a normally-open bus tie, or by inserting a current-limiting reactor — precisely to keep the fault level under the rating of existing switchgear. **Bus-splitting is the most common remedy** when load growth pushes a station past its equipment ratings, because it is far cheaper than replacing an entire switchgear lineup.

**And this ranking will change** as soon as a line is added, a generator is commissioned, or the system is reconfigured. Fault studies are re-run for every such change, on the whole system, using exactly the $Z_{bus}$ machinery of this lesson.

</details>

## Flashback

**From Lesson 3.1 (The bus admittance matrix):** A two-bus fault-study network has a generator at bus 1 with $X_d'' = 0.25$ pu (shunt to ground), a generator at bus 2 with $X_d'' = 0.20$ pu, and a line between them of $j0.10$ pu. (a) Build $Y_{bus}$. (b) Find $Z_{bus}$. (c) Find the fault current for a bolted three-phase fault at bus 1.

<details>
<summary>Solution</summary>

(a) $$Y_{11} = \frac{1}{j0.25}+\frac{1}{j0.10} = -j(4+10) = -j14, \qquad Y_{22} = \frac{1}{j0.20}+\frac{1}{j0.10} = -j(5+10) = -j15,$$
$$Y_{12} = Y_{21} = +j10.$$

$$\mathbf{Y}_{bus} = \begin{bmatrix}-j14 & j10\\ j10 & -j15\end{bmatrix}.$$

(b) For a $2\times2$ matrix, $\mathbf{Z} = \frac{1}{\det}\begin{bmatrix}Y_{22}&-Y_{12}\\-Y_{21}&Y_{11}\end{bmatrix}$:

$$\det = (-j14)(-j15)-(j10)^2 = -210+100 = -110.$$

$$\mathbf{Z}_{bus} = \frac{1}{-110}\begin{bmatrix}-j15 & -j10\\ -j10 & -j14\end{bmatrix} = \begin{bmatrix}j0.13636 & j0.09091\\ j0.09091 & j0.12727\end{bmatrix}\ \mathrm{pu}.$$

(c) $$I_f = \frac{1.0}{Z_{11}} = \frac{1.0}{j0.13636} = -j7.333\ \mathrm{pu}.$$

*Check by direct reduction.* At bus 1 the two paths to ground are generator 1's $j0.25$, and generator 2's $j0.20$ in series with the line's $j0.10$ (i.e. $j0.30$), in parallel:

$$Z_{th} = \frac{(0.25)(0.30)}{0.25+0.30} = \frac{0.075}{0.55} = 0.13636\ \mathrm{pu}\ \checkmark.$$

*The point of the check.* On a two-bus network, hand reduction and $Z_{bus}$ agree trivially — and that is exactly why it is worth doing once. Verifying the method on a case you can reduce by inspection is what earns you the right to trust it on Example 3's meshed network, where inspection was off by 50%. Build the habit of validating a numerical method against a hand-solvable case before deploying it on one you cannot check.

</details>

## Connections

- **Backward:** $Y_{bus}$ construction is [3.1](03-01-bus-admittance-matrix.md)'s, now with generator shunts added; the base conversions are [1.4](01-04-base-changes-one-line-diagram.md)'s.
- **Forward:** [4.2](04-02-symmetrical-components.md) and [4.3](04-03-sequence-networks-unsymmetrical-faults.md) extend this to unbalanced faults, which are the majority in practice; [4.4](04-04-protection-and-relaying.md) uses these currents to set relays.
- **Sideways:** the DC offset is the natural response of an $RL$ circuit to a step, exactly as in [`circuits` 3.2](../../circuits/lessons/03-02-first-order-rc-rl-transients.md) — the fault current is a forced sinusoid plus a transient whose amplitude is set by the initial condition that inductor current cannot jump.
