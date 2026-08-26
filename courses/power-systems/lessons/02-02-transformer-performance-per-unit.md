# Power Systems · Lesson 2.2: Transformer performance in per-unit

> ⏱ ~15 min · Module 2: Transformers and transmission lines · Builds on: [2.1 The ideal and real transformer](02-01-ideal-and-real-transformer.md), [1.3 The per-unit system](01-03-the-per-unit-system.md) · Unlocks: [2.3 Three-phase transformer connections](02-03-three-phase-transformer-connections.md), [3.1 The bus admittance matrix](03-01-bus-admittance-matrix.md)

## Why this matters

Two numbers decide whether a transformer is fit for a job: how much its output voltage sags between no load and full load ([**regulation**](../reference.md#voltage-regulation)), and how much power it wastes (**efficiency**). Both come straight out of the equivalent circuit of [2.1](02-01-ideal-and-real-transformer.md), and both are far easier to compute in per-unit — where the turns ratio has vanished and the answers come out as percentages you can compare across the industry.

This lesson also settles the practical question the per-unit machinery was built for: **what does a transformer look like inside a network model?** The answer is short — a series impedance — and it is what [3.1](03-01-bus-admittance-matrix.md) will drop straight into $Y_{bus}$.

## The idea

**Voltage regulation.** Load a transformer and its output voltage falls, because load current drops voltage across the internal series impedance. Regulation is the fractional sag between no-load and full-load output at fixed input:

$$\mathrm{VR} = \frac{V_{\rm no\ load}-V_{\rm full\ load}}{V_{\rm full\ load}}.$$

In per-unit with the load at 1.0 pu, this is simply $|V_S|-1$ — the source voltage needed, minus one.

And here is the fact worth carrying: **regulation depends strongly on power factor, and can be negative.** A lagging (inductive) load makes the drop worse; a *leading* load can make the output voltage *rise* above the input. The reason is the phasor geometry — the $IX$ drop is perpendicular to the current, so where it lands relative to the load voltage depends on the current's angle.

**Efficiency.** Two losses: core loss, fixed by voltage and therefore essentially constant, and copper loss, scaling as the square of load. Their sum is what you divide against.

The consequence is a characteristic shape. At light load, fixed core loss dominates and efficiency is poor. At heavy load, copper loss grows quadratically and efficiency falls again. In between there is a maximum, and it sits exactly where **copper loss equals core loss** — a result worth knowing because it tells a designer where to place the peak.

**Transformers in per-unit are just impedances.** With the ratio gone, a two-winding transformer contributes one series $R+jX$ between two buses. That is the entire model used in load flow, and it is why the network diagrams in Module 3 have no transformer symbols on them at all.

## The formal version

**Voltage regulation.**

$$\boxed{\;\mathrm{VR} = \frac{|V_{S}|-|V_{R}|}{|V_{R}|}\times100\%,\;}$$

where $V_S$ is the sending (source) voltage and $V_R$ the receiving (load) voltage, both referred to the same side, at the stated load. In per-unit with $V_R = 1.0\angle0°$:

$$V_S = 1.0+I_{pu}Z_{pu}, \qquad \mathrm{VR} = |V_S|-1.$$

**The approximate form**, valid because $|IZ|\ll|V_R|$:

$$\mathrm{VR} \approx I_{pu}\left(R_{pu}\cos\theta+X_{pu}\sin\theta\right),$$

with $\theta$ positive for a lagging load. *In words: regulation is the component of the internal impedance drop that lies along the load voltage.*

This form makes the power-factor dependence explicit:

| Load power factor | $\sin\theta$ | Effect |
|---|---|---|
| Lagging | $>0$ | both terms add — **worst** regulation |
| Unity | $0$ | only the $R$ term — small |
| Leading | $<0$ | $X$ term subtracts — regulation can go **negative** |

*In words: an inductive load pulls the output voltage down; a capacitive load props it up.* Since $X\gg R$ in a power transformer, the $X\sin\theta$ term dominates — which is why regulation is chiefly a reactive-power phenomenon, exactly as in [1.1](01-01-ac-power-and-three-phase.md) P3.

**Zero-regulation power factor.** Setting the approximate expression to zero:

$$R\cos\theta+X\sin\theta = 0 \quad\Longrightarrow\quad \tan\theta = -\frac{R}{X},$$

a leading power factor of $\cos\theta = X/|Z|$. *In words: there is one leading power factor at which the transformer's output voltage does not sag at all.*

**Efficiency.**

$$\boxed{\;\eta = \frac{P_{\rm out}}{P_{\rm out}+P_{\rm core}+P_{\rm cu}} = \frac{x\,S_{\rm rated}\cos\theta}{x\,S_{\rm rated}\cos\theta+P_{\rm core}+x^2P_{\rm cu,FL}},\;}$$

where $x$ is the fraction of rated load and $P_{\rm cu,FL}$ is the full-load copper loss (the short-circuit test wattage from [2.1](02-01-ideal-and-real-transformer.md)).

**Maximum efficiency.** Differentiating with respect to $x$ and setting to zero:

$$\boxed{\;x_{\rm opt} = \sqrt{\frac{P_{\rm core}}{P_{\rm cu,FL}}}, \qquad\text{i.e. } P_{\rm cu} = P_{\rm core}.\;}$$

*In words: efficiency peaks where the load-dependent loss equals the fixed loss.* Distribution transformers are designed with $x_{\rm opt}$ around 0.5–0.7, because they spend most of their lives lightly loaded and the peak should sit near the average duty, not at nameplate.

**All-day efficiency.** For distribution transformers, energized 24 hours but loaded only part of the time, the meaningful figure is energy-based:

$$\eta_{\rm all\text{-}day} = \frac{\text{kWh output over 24 h}}{\text{kWh output}+\text{kWh losses over 24 h}},$$

with core loss accrued for the full 24 hours regardless of load. *In words: a transformer that idles most of the day is judged mainly on its core loss*, which is why modern distribution units use amorphous-metal or high-grade silicon-steel cores despite the cost.

**Tap changing, briefly.** Regulation is compensated by changing the turns ratio in steps, typically $\pm10\%$ in 32 steps of 0.625%:

- **Off-load tap changer (OLTC, de-energized)** — set seasonally, cheap.
- **On-load tap changer (LTC)** — switches under load, used for continuous voltage control.

In a power-flow model, an off-nominal tap ratio does **not** vanish in per-unit (the bases were set by the *nominal* ratio, not the tapped one), so it appears explicitly as a modelled ratio in $Y_{bus}$. [3.2](03-02-power-flow-problem-bus-types.md) handles it.

**The network model.** In per-unit, a two-winding transformer between buses $i$ and $j$ is

$$\text{series impedance } Z_{pu} = R_{pu}+jX_{pu},$$

with the magnetizing branch normally neglected (its admittance is 0.5–2% and contributes almost nothing to power flow). That is the whole model.

## Picture

![A two-panel figure. Left: three phasor diagrams for the same transformer at lagging, unity and leading power factor, each showing the load voltage as a horizontal reference, the current at its angle, and the IR and jIX drops added to reach the source voltage — with the lagging case giving the longest source phasor, unity intermediate, and leading giving a source phasor shorter than the load voltage, so the regulation is negative. Right: efficiency plotted against load fraction, rising steeply from zero, peaking where the rising copper-loss curve crosses the flat core-loss line, and falling gently thereafter, with the two loss curves drawn beneath.](assets/02-02-fig1.svg)

Left: why power factor decides regulation. The $jIX$ drop is always perpendicular to the current, so as the current angle rotates, that drop swings from adding to the load voltage (lagging) to subtracting from it (leading). At the leading extreme the source voltage is *below* the load voltage and regulation is negative.

Right: the efficiency curve and its two ingredients. Core loss is flat; copper loss is a parabola. Efficiency peaks exactly where they cross, and the designer positions that crossing by choosing the core material and the winding cross-section.

## Worked examples

**Example 1 (regulation at three power factors).** The 20 kVA, 2400/240 V transformer of [2.1](02-01-ideal-and-real-transformer.md) has $Z_{pu} = 0.0110+j0.0187$ pu. Find the full-load voltage regulation at 0.8 lagging, unity, and 0.8 leading.

*Setup.* At full load, $I_{pu} = 1.0$; take $V_R = 1.0\angle0°$ pu.

*0.8 lagging* ($\theta = +36.87°$, so $I = 1.0\angle{-36.87°}$):

$$V_S = 1.0+(1.0\angle{-36.87°})(0.0110+j0.0187).$$

$Z_{pu} = 0.02170\angle59.53°$, so $IZ = 0.02170\angle22.66° = 0.02003+j0.00836$:

$$V_S = 1.02003+j0.00836, \qquad |V_S| = 1.02006, \qquad \mathrm{VR} = 2.01\%.$$

*Unity* ($I = 1.0\angle0°$):

$$IZ = 0.02170\angle59.53° = 0.01100+j0.01870, \qquad V_S = 1.01100+j0.01870,$$
$$|V_S| = 1.01117, \qquad \mathrm{VR} = 1.12\%.$$

*0.8 leading* ($I = 1.0\angle{+36.87°}$):

$$IZ = 0.02170\angle96.40° = -0.00242+j0.02156, \qquad V_S = 0.99758+j0.02156,$$
$$|V_S| = 0.99781, \qquad \mathrm{VR} = -0.22\%.$$

*The pattern.* $+2.01\%$, $+1.12\%$, $-0.22\%$ — regulation falls monotonically as the power factor moves from lagging through unity to leading, and goes **negative**: the output voltage rises above nominal.

*Check with the approximate formula* at 0.8 lagging:

$$\mathrm{VR}\approx R\cos\theta+X\sin\theta = 0.0110(0.8)+0.0187(0.6) = 0.00880+0.01122 = 0.02002 = 2.00\%\ \checkmark$$

— agreeing to two decimals, which is why the approximation is used in practice.

*Zero-regulation power factor:* $\tan\theta = -R/X = -0.0110/0.0187 = -0.588$, so $\theta = -30.5°$ and $\cos\theta = 0.862$ leading. At exactly 0.862 leading this transformer holds its output voltage perfectly.

**Example 2 (efficiency and where it peaks).** The same transformer has $P_{\rm core} = 122$ W and $P_{\rm cu,FL} = 220$ W. Find the efficiency at full load, half load, and at maximum, all at 0.8 power factor.

*Full load* ($x=1$):

$$P_{\rm out} = 20{,}000(0.8) = 16{,}000\ \mathrm{W}, \qquad P_{\rm loss} = 122+220 = 342\ \mathrm{W},$$

$$\eta = \frac{16{,}000}{16{,}342} = 0.97907 = 97.91\%.$$

*Half load* ($x = 0.5$):

$$P_{\rm out} = 8000\ \mathrm{W}, \qquad P_{\rm loss} = 122+0.25(220) = 122+55 = 177\ \mathrm{W},$$

$$\eta = \frac{8000}{8177} = 0.97836 = 97.84\%.$$

*Maximum.*

$$x_{\rm opt} = \sqrt{\frac{122}{220}} = \sqrt{0.5545} = 0.7447,$$

$$P_{\rm out} = 0.7447(16{,}000) = 11{,}915\ \mathrm{W}, \qquad P_{\rm loss} = 122+122 = 244\ \mathrm{W},$$

$$\eta_{\max} = \frac{11{,}915}{12{,}159} = 0.97993 = 97.99\%.$$

*What the numbers show.* The efficiency curve is remarkably **flat**: 97.84% at half load, 97.99% at peak, 97.91% at full load — a spread of 0.15 percentage points across a 2:1 range of loading. That flatness is characteristic and is why transformer efficiency is rarely the binding design constraint at a given size.

*Where it does bind: all-day efficiency.* Suppose this unit carries full load for 6 hours, half load for 10 hours, and no load for 8 hours.

$$\text{Energy out} = 16{,}000(6)+8000(10)+0 = 96+80 = 176\ \mathrm{kWh}.$$

$$\text{Copper loss} = 220(6)+55(10)+0 = 1320+550 = 1870\ \mathrm{Wh} = 1.87\ \mathrm{kWh}.$$

$$\text{Core loss} = 122(24) = 2928\ \mathrm{Wh} = 2.93\ \mathrm{kWh}\quad\text{(all 24 hours — it is energized regardless)}.$$

$$\eta_{\rm all\text{-}day} = \frac{176}{176+1.87+2.93} = \frac{176}{180.8} = 0.97345 = 97.35\%.$$

**Core loss contributed 61% of the total energy loss** despite being the smaller instantaneous loss at full load. That is the whole argument for low-loss cores in distribution transformers: a unit that sits energized 8760 hours a year and loaded only a fraction of that is judged on its idling loss, not its full-load loss.

It is also why regulators (in the US, DOE efficiency standards) specify distribution-transformer efficiency at **35–50% load** rather than at nameplate — that is where the units actually live.

## Watch out

- **You might assume regulation is always positive.** At a leading power factor it can be zero or negative — the output rises above the input. Long lightly loaded cables and over-compensated feeders do this routinely.
- **You might use full-load copper loss at partial load.** Copper loss scales as $x^2$. At half load it is a *quarter* of nameplate, not half.
- **You might place maximum efficiency at full load.** It sits at $x = \sqrt{P_{\rm core}/P_{\rm cu,FL}}$, typically 0.5–0.75. Designing the peak at nameplate would waste energy in real duty.
- **You might use ordinary efficiency for a distribution transformer.** All-day (energy) efficiency is the meaningful figure when the unit is energized far longer than it is loaded.
- **You might expect an off-nominal tap to vanish in per-unit.** It does not — the bases were set by the *nominal* ratio, so a tapped transformer carries an explicit ratio in the network model.

## One-liner

> Regulation is the internal $IR\cos\theta+IX\sin\theta$ drop and goes negative at leading power factor; efficiency peaks where copper loss equals core loss — and in per-unit the whole device is one series impedance.

## Problems

**P1 (🟢)** A transformer has $Z_{pu} = 0.015+j0.06$ pu. (a) Find the full-load voltage regulation at 0.9 lagging using the approximate formula. (b) Repeat exactly. (c) Repeat at 0.9 leading. (d) Find the power factor of zero regulation.

**P2 (🟡)** A 250 kVA transformer has core loss 800 W and full-load copper loss 2400 W. (a) Find the efficiency at full load, 0.85 pf. (b) Find the load fraction of maximum efficiency and the peak value. (c) The unit runs at 80% load for 8 h, 40% for 10 h, and no load for 6 h, all at 0.85 pf. Find the all-day efficiency. (d) Comment on which loss dominates the daily energy waste.

**P3 (🔴)** A 100 MVA, 230/34.5 kV transformer with $Z = 0.006+j0.10$ pu supplies a load bus. (a) Find the regulation at full load, 0.90 lagging. (b) The utility requires the 34.5 kV bus to stay within $\pm5\%$ while the 230 kV bus is held at 1.02 pu. Determine whether a fixed ratio suffices across a load range of 0 to 1.0 pu at 0.90 lagging. (c) The transformer has a $\pm10\%$ LTC in 0.625% steps. How many steps are needed to hold 1.00 pu at full load? (d) A capacitor bank of 30 Mvar is installed at the load bus instead. Recompute the full-load regulation and comment on which solution a utility would prefer.

<details>
<summary>Solutions</summary>

**P1** (a) $\theta = \arccos(0.9) = 25.84°$, $\sin\theta = 0.4359$:

$$\mathrm{VR} \approx (0.015)(0.9)+(0.06)(0.4359) = 0.01350+0.02615 = 0.03965 = 3.97\%.$$

(b) $Z = 0.015+j0.06 = 0.06185\angle75.96°$; $I = 1.0\angle{-25.84°}$:

$$IZ = 0.06185\angle50.12° = 0.03963+j0.04748,$$
$$V_S = 1.03963+j0.04748, \qquad |V_S| = \sqrt{1.08083+0.00225} = 1.04072,$$
$$\mathrm{VR} = 4.07\%.$$

(The approximation is 0.1 percentage points low — it drops the second-order term $(IX\cos\theta-IR\sin\theta)^2/2$, which matters slightly at this larger impedance.)

(c) $I = 1.0\angle{+25.84°}$:

$$IZ = 0.06185\angle101.80° = -0.01271+j0.06053,$$
$$V_S = 0.98729+j0.06053, \qquad |V_S| = \sqrt{0.97474+0.00366} = 0.98914,$$
$$\mathrm{VR} = -1.09\%.$$

(d) $$\tan\theta = -\frac{R}{X} = -\frac{0.015}{0.06} = -0.25, \qquad \theta = -14.04°,$$
$$\mathrm{pf} = \cos(14.04°) = 0.970\ \text{leading}.$$

**P2** (a) $$P_{\rm out} = 250{,}000(0.85) = 212{,}500\ \mathrm{W}, \qquad P_{\rm loss} = 800+2400 = 3200\ \mathrm{W},$$
$$\eta = \frac{212{,}500}{215{,}700} = 0.98516 = 98.52\%.$$

(b) $$x_{\rm opt} = \sqrt{\frac{800}{2400}} = \sqrt{0.3333} = 0.5774,$$
$$P_{\rm out} = 0.5774(212{,}500) = 122{,}700\ \mathrm{W}, \qquad P_{\rm loss} = 800+800 = 1600\ \mathrm{W},$$
$$\eta_{\max} = \frac{122{,}700}{124{,}300} = 0.98713 = 98.71\%.$$

(c) *Energy out:*

$$E_{\rm out} = 212{,}500\left[0.8(8)+0.4(10)\right] = 212{,}500(6.4+4.0) = 212{,}500(10.4) = 2210\ \mathrm{kWh}.$$

*Copper loss:*

$$E_{\rm cu} = 2400\left[(0.8)^2(8)+(0.4)^2(10)\right] = 2400\left[5.12+1.60\right] = 2400(6.72) = 16{,}128\ \mathrm{Wh} = 16.13\ \mathrm{kWh}.$$

*Core loss:* energized all 24 hours,

$$E_{\rm core} = 800(24) = 19{,}200\ \mathrm{Wh} = 19.20\ \mathrm{kWh}.$$

$$\eta_{\rm all\text{-}day} = \frac{2210}{2210+16.13+19.20} = \frac{2210}{2245.3} = 0.98428 = 98.43\%.$$

(d) Core loss contributed $19.20/35.33 = 54\%$ of the daily energy waste, despite being only a quarter of the instantaneous full-load loss.

The reason is duty cycle: copper loss accrues only while loaded (and quadratically, so light hours contribute almost nothing), while core loss accrues every hour of the year. For a unit like this the annual core-loss energy is $800\times8760 = 7008$ kWh — at 10 cents/kWh, roughly 700 dollars a year, every year, whether or not the transformer serves a single customer.

**That capitalized no-load loss is a large fraction of a distribution transformer's lifetime cost**, which is why utilities evaluate bids using loss-capitalization formulas (an "A factor" for no-load and a "B factor" for load loss, in dollars per watt) rather than purchase price alone — and why amorphous-core transformers, with roughly a third the core loss at a higher purchase price, win those evaluations in high-duty applications.

**P3** (a) $\theta = 25.84°$; $Z = 0.006+j0.10 = 0.10018\angle86.56°$:

$$IZ = 0.10018\angle60.72° = 0.04899+j0.08739,$$
$$V_S = 1.04899+j0.08739, \qquad |V_S| = \sqrt{1.10038+0.00764} = 1.05263,$$
$$\mathrm{VR} = 5.26\%.$$

(b) With the HV bus held at 1.02 pu and a nominal (1:1 in per-unit) ratio, the LV bus voltage is $V_S^{\rm bus}$ minus the internal drop.

*At no load:* no current, no drop, so $V_{LV} = 1.02$ pu — within $+5\%$ ✓ (just, at $+2\%$).

*At full load:* the drop is 5.26% of the LV voltage, so

$$V_{LV} \approx \frac{1.02}{1.0526} = 0.969\ \mathrm{pu},$$

i.e. $-3.1\%$ — also within $\pm5\%$ ✓.

**So a fixed ratio does suffice**, but the bus swings from $+2.0\%$ to $-3.1\%$ across the load cycle, a 5.1% excursion using most of the allowed 10% band. There is little margin for a heavier load, a weaker source, or a worse power factor — which in practice is why an LTC would be specified anyway.

(c) To hold exactly 1.00 pu at full load, the ratio must supply the shortfall from 0.969:

$$\text{boost needed} = \frac{1.000}{0.969}-1 = 0.0320 = 3.20\%.$$

$$\text{steps} = \frac{3.20}{0.625} = 5.12 \to \textbf{6 steps}\ \text{(rounding up; 6 steps gives }3.75\%).$$

With 6 steps the LV voltage becomes $0.969(1.0375) = 1.005$ pu — comfortably on target.

(d) A 30 Mvar capacitor bank at the load bus reduces the reactive current the transformer must carry. At full load the original load is $S = 1.0\angle25.84° = 0.900+j0.436$ pu on 100 MVA. Adding 0.30 pu of capacitive support:

$$S_{\rm net} = 0.900+j(0.436-0.300) = 0.900+j0.136\ \mathrm{pu},$$
$$|S| = \sqrt{0.810+0.0185} = 0.9101\ \mathrm{pu}, \qquad \theta = \arctan\frac{0.136}{0.900} = 8.59°.$$

$$I = 0.9101\angle{-8.59°}\ \mathrm{pu},$$
$$IZ = (0.9101)(0.10018)\angle(86.56°-8.59°) = 0.09117\angle77.97° = 0.01907+j0.08916,$$
$$V_S = 1.01907+j0.08916, \qquad |V_S| = \sqrt{1.03850+0.00795} = 1.02297,$$
$$\mathrm{VR} = 2.30\%.$$

**Regulation fell from 5.26% to 2.30% — more than halved.**

*Which would a utility prefer?* Usually **both**, and for different reasons.

- The **LTC** is a voltage-control device: it acts fast, tracks load continuously, and is the standard means of holding a distribution bus. But it does nothing about the reactive power itself — the $Q$ still flows through the transformer and the network upstream, consuming capacity and causing losses everywhere along the path.
- The **capacitor bank** attacks the cause. It cuts the current by 9%, the transformer's copper loss by 17% ($0.91^2$), frees 9% of transformer capacity, and reduces $Q$ flow on every element upstream — benefits the LTC cannot provide.

The usual answer is that capacitors are installed for **loss and capacity** reasons and LTCs for **voltage regulation**, and the two are complementary rather than competing. Where they interact badly is at light load: a fixed capacitor bank left in service overnight can drive the bus *above* limits (leading power factor, negative regulation — part (c) of P1), which is why large banks are switched, often automatically on a voltage or var schedule.

</details>

## Flashback

**From Lesson 2.1 (The ideal and real transformer):** A 100 kVA transformer has SC test data giving $R_{eq} = 16.5\ \Omega$, $X_{eq} = 49.0\ \Omega$ on the 11 kV side, and OC test core loss 640 W. (a) Find $Z_{pu}$. (b) Find the full-load regulation at 0.85 lagging. (c) Find the efficiency at full load, 0.85 pf.

<details>
<summary>Solution</summary>

(a) $Z_{base} = 11{,}000^2/100{,}000 = 1210\ \Omega$:

$$Z_{pu} = \frac{16.5+j49.0}{1210} = 0.01364+j0.04050 = 0.04273\ \mathrm{pu}.$$

(b) $\theta = \arccos(0.85) = 31.79°$, $\sin\theta = 0.5268$:

$$\mathrm{VR}\approx(0.01364)(0.85)+(0.04050)(0.5268) = 0.01159+0.02134 = 0.03293 = 3.29\%.$$

(c) Full-load copper loss is the SC wattage: $P_{cu} = I^2R_{eq} = (9.09)^2(16.5) = 1363$ W.

$$P_{\rm out} = 100{,}000(0.85) = 85{,}000\ \mathrm{W}, \qquad P_{\rm loss} = 640+1363 = 2003\ \mathrm{W},$$

$$\eta = \frac{85{,}000}{87{,}003} = 0.97698 = 97.70\%.$$

Note the pattern across this course's transformer examples: a 20 kVA unit at 97.9%, a 100 kVA unit at 97.7%, a 250 kVA unit at 98.5%. Efficiency rises with size — larger units have better surface-to-volume ratios for cooling and can afford more copper — and a 500 MVA generator step-up transformer reaches 99.7%. The per-unit impedance rises with size too (2% to 10%), which is the same trade seen from the other side: bigger units tolerate more reactance because they need to limit larger fault currents.

</details>

## Connections

- **Backward:** the equivalent circuit and the loss data are [2.1](02-01-ideal-and-real-transformer.md)'s; the per-unit machinery is [1.3](01-03-the-per-unit-system.md).
- **Forward:** [2.3](02-03-three-phase-transformer-connections.md) puts three of these into a bank; [3.1](03-01-bus-admittance-matrix.md) inserts the series impedance into $Y_{bus}$; [3.2](03-02-power-flow-problem-bus-types.md) handles off-nominal taps explicitly.
- **Sideways:** "fixed loss plus load-squared loss, peaking where they cross" is the same optimization as any system with a standing overhead and a quadratic variable cost — it is the transformer's version of the economic order quantity in [`operations-research`](../../operations-research/syllabus.md).
