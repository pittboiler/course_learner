# Semiconductor Devices · Lesson 3.2: BJT currents and gain

> ⏱ ~15 min · Module 3: Transistors · Builds on: [3.1 The BJT: transistor action](03-01-bjt-transistor-action.md), [2.2 The ideal-diode equation](02-02-ideal-diode-equation.md) · Unlocks: [3.3 The MOS capacitor](03-03-mos-capacitor.md), [3.6 Short-channel effects and scaling](03-06-short-channel-effects-scaling.md)

## Why this matters

[3.1](03-01-bjt-transistor-action.md) established that nearly every injected carrier crosses the base, and computed a transport-limited $\beta$ of 1655. Real transistors have $\beta$ near 100. This lesson finds the missing factor.

It is not in the base at all — it is at the *emitter*. Some of the emitter–base junction current is holes injected backwards from base into emitter, and those holes contribute to $I_B$ while contributing nothing to $I_C$. That back-injection, not recombination, is what actually limits gain in a well-made silicon BJT, and it is why the emitter is doped a hundred times more heavily than the base.

Understanding which term dominates is the whole game: it tells you what to change to improve a device, and it explains why $\beta$ falls off at both low and high current — a shape you will recognize from every transistor datasheet.

## The idea

Split the emitter current into its two pieces.

**Electrons injected forward, emitter into base.** These are the useful ones. They cross the base and become $I_C$.

**Holes injected backward, base into emitter.** These are pure loss. They are a diode current like any other — the base–emitter junction is symmetric in that respect — and by [2.2](02-02-ideal-diode-equation.md) their magnitude is set by the minority-hole density in the *emitter*, which is $n_i^2/N_E$. They must be supplied through the base terminal, so they inflate $I_B$ and depress $\beta$, while doing nothing for $I_C$.

The ratio of the two is what [2.2](02-02-ideal-diode-equation.md) Example 1 already showed: injection is overwhelmingly into the *lightly doped* side. So make the emitter heavily doped and the base lightly doped, and the useful term wins. The fraction of emitter current that is useful is the [emitter injection efficiency](../reference.md#emitter-injection-efficiency) $\gamma$, and it is the dominant limit in silicon.

So $\beta$ has two independent leaks — transport losses in the base, and back-injection at the emitter — and, being independent parallel loss channels, their *reciprocals* add. Whichever is worse dominates. In silicon, back-injection wins that competition easily.

Then two effects bend the curve at the extremes. At **low current**, recombination inside the emitter–base depletion region adds an $n=2$ component to $I_B$ (the same term as [2.2](02-02-ideal-diode-equation.md)) which grows more slowly than $I_C$, so $\beta$ falls. At **high current**, the injected carrier density in the base approaches the base doping — high-level injection — and the effective base doping rises, cutting $\gamma$. The result is the familiar humped $\beta$-versus-$I_C$ curve with a plateau in the middle, and the plateau is where you bias.

## The formal version

**The three current components.** For an $npn$ in forward active mode, at the emitter–base junction:

$$I_E = I_{nE}+I_{pE}, \qquad I_C = \alpha_T I_{nE}, \qquad I_B = I_{pE}+(1-\alpha_T)I_{nE}+I_{rec,dep}.$$

- $I_{nE}$: electrons injected into the base (useful).
- $I_{pE}$: holes injected back into the emitter (waste).
- $(1-\alpha_T)I_{nE}$: electrons lost to recombination inside the base (waste).
- $I_{rec,dep}$: recombination in the E–B depletion region (waste, low-current only).

**Emitter injection efficiency.**

$$\gamma \equiv \frac{I_{nE}}{I_E} = \frac{I_{nE}}{I_{nE}+I_{pE}} = \frac{1}{1+I_{pE}/I_{nE}}.$$

Both are ideal-diode currents from [2.2](02-02-ideal-diode-equation.md). For a short emitter of width $W_E$ and short base $W_B$:

$$I_{nE} = \frac{qAD_Bn_i^2}{W_BN_B}e^{qV_{BE}/k_BT}, \qquad I_{pE} = \frac{qAD_En_i^2}{W_EN_E}e^{qV_{BE}/k_BT},$$

so

$$\boxed{\;\gamma = \frac{1}{1+\dfrac{D_EN_BW_B}{D_BN_EW_E}}.\;}$$

*In words: back-injection is suppressed by the ratio of the emitter's dopant charge to the base's.* The controlling quantity is the **Gummel number ratio** $N_EW_E/N_BW_B$.

**Base transport factor.** From [3.1](03-01-bjt-transistor-action.md) and [1.4](01-04-continuity-equations.md):

$$\alpha_T = \frac{1}{\cosh(W_B/L_B)} \approx 1-\frac{1}{2}\left(\frac{W_B}{L_B}\right)^2 .$$

**Combining.**

$$\boxed{\;\alpha = \gamma\,\alpha_T, \qquad \beta = \frac{\alpha}{1-\alpha}, \qquad \frac{1}{\beta} \approx \underbrace{\frac{D_EN_BW_B}{D_BN_EW_E}}_{\text{back-injection}}+\underbrace{\frac{W_B^2}{2L_B^2}}_{\text{base recombination}}.\;}$$

*In words: the two loss mechanisms add as reciprocals, so the larger one sets $\beta$.* This is the single most useful formula in bipolar design — it tells you at a glance which term to attack.

**Which term dominates?** For the Example 1 device of [3.1](03-01-bjt-transistor-action.md) ($N_E = 10^{19}$, $N_B = 10^{17}$, $W_B = 0.5\ \mu$m, take $W_E = 0.5\ \mu$m, $D_E = 3.9$ at $10^{19}$, $D_B = 20.7$):

$$\text{back-injection: } \frac{(3.9)(10^{17})(0.5)}{(20.7)(10^{19})(0.5)} = 1.884\times10^{-3}, \qquad \text{base recombination: } 6.04\times10^{-4}.$$

Back-injection is **3.1 times larger**. So $1/\beta \approx 2.49\times10^{-3}$ and $\beta\approx402$ — well short of the transport-limited 1655, and limited by the emitter rather than the base. **In silicon, gain is usually an emitter problem**, which is why the fix is a heterojunction ([2.5](02-05-metal-semiconductor-heterojunctions.md)) rather than a thinner base — and why the loss terms must always be computed and compared, not assumed.

**The Early effect, quantitatively.** Raising $V_{CB}$ widens the base–collector depletion region into the base, shrinking the neutral base width:

$$I_C = \frac{qAD_Bn_i^2}{W_B(V_{CB})N_B}e^{qV_{BE}/k_BT}, \qquad \frac{\partial I_C}{\partial V_{CE}} = -\frac{I_C}{W_B}\frac{dW_B}{dV_{CE}}.$$

Defining the **Early voltage** $V_A$ by extrapolating the output characteristics back to their common intercept:

$$\boxed{\;I_C = I_S e^{qV_{BE}/k_BT}\left(1+\frac{V_{CE}}{V_A}\right), \qquad V_A = \frac{W_B}{|dW_B/dV_{CE}|} \approx \frac{qN_BW_B}{C_{jC}'},\;}$$

with $C_{jC}'$ the base–collector depletion capacitance per unit area. *In words: the Early voltage is the base's dopant charge divided by how fast the collector depletion eats into it.*

Consequences:

$$r_o = \frac{V_A}{I_C}, \qquad A_v^{\max} = g_mr_o = \frac{I_C}{V_T}\cdot\frac{V_A}{I_C} = \frac{V_A}{V_T},$$

**independent of bias current** — the intrinsic gain ceiling of [3.1](03-01-bjt-transistor-action.md) Example 2. Typical $V_A$ is 50–150 V, giving $A_v^{\max}$ of 2000–6000.

Note the tension: a large $V_A$ wants a *thick, heavily doped* base, while high $f_T$ and low base resistance want a *thin* one. The product $\beta V_A$ is roughly a technology constant, so you trade gain against output resistance — a classic bipolar design axis.

**The Gummel plot.** Measure $I_C$ and $I_B$ against $V_{BE}$ on a semilog axis at fixed $V_{CE}$. This single measurement is the standard bipolar characterization, and it separates every mechanism:

| Region | $I_C$ slope | $I_B$ slope | Cause of $\beta$ droop |
|---|---|---|---|
| Low $V_{BE}$ | 60 mV/dec | **120 mV/dec** | depletion-region recombination inflates $I_B$ |
| Mid | 60 mV/dec | 60 mV/dec | ideal — $\beta$ flat, this is the plateau |
| High $V_{BE}$ | **120 mV/dec** | 60 mV/dec | high-level injection in the base |

*In words: $\beta$ is the vertical gap between the two lines, and it is largest exactly where both are parallel.* Reading a Gummel plot tells you immediately whether a device's gain is limited by surface/depletion recombination (fix: passivation, cleaner process) or by high injection (fix: heavier base doping, larger emitter).

**Additional high-current effects.**

- **Kirk effect (base pushout).** At high $I_C$ the mobile carrier density in the collector depletion region becomes comparable to $N_C$, which alters the field profile and pushes the effective base boundary into the collector. $W_B$ grows, so $\beta$ and $f_T$ collapse. It is the reason $f_T$ peaks and then falls with current on every datasheet.
- **Emitter current crowding.** Base current flows *laterally* through the resistive base to reach the emitter, dropping voltage along the way, so the emitter periphery is biased harder than its centre. Current crowds to the edges. This is why power BJTs use interdigitated finger layouts with huge perimeter-to-area ratios.

## Picture

![A two-panel figure. Left: a Gummel plot, semilog current against V_BE, showing I_C as a straight 60 mV per decade line over most of the range bending to 120 mV per decade at high bias, and I_B showing a 120 mV per decade slope at low bias then becoming parallel to I_C in the middle, with the vertical gap between them labelled as beta. Right: beta plotted against collector current on log axes, showing the characteristic hump — rising at low current where depletion recombination dominates, flat across the useful plateau, and falling at high current from high-level injection and the Kirk effect.](assets/03-02-fig1.svg)

Left: one measurement, every mechanism. Where the two lines are parallel, $\beta$ is constant and the device is ideal; where they diverge, something is wrong and the *slope* tells you what. Right: the same information replotted as the datasheet curve. The plateau is where you bias an amplifier, and its width — typically two or three decades of current — is a figure of merit for the process.

## Worked examples

**Example 1 (finding what actually limits $\beta$).** An $npn$ has $N_E = 5\times10^{19}$, $N_B = 2\times10^{17}\ \mathrm{cm^{-3}}$, $W_E = 0.3\ \mu$m, $W_B = 0.4\ \mu$m, $\tau_B = 100$ ns. Diffusivities: $D_E = 2.0$ (heavily doped emitter), $D_B = 15\ \mathrm{cm^2/s}$. Find $\gamma$, $\alpha_T$, $\alpha$, $\beta$, and identify the limiting mechanism.

*Back-injection term:*

$$\frac{D_EN_BW_B}{D_BN_EW_E} = \frac{(2.0)(2\times10^{17})(0.4\times10^{-4})}{(15)(5\times10^{19})(0.3\times10^{-4})} = \frac{1.60\times10^{13}}{2.25\times10^{16}} = 7.11\times10^{-4}.$$

$$\gamma = \frac{1}{1+7.11\times10^{-4}} = 0.999289.$$

*Base transport term:*

$$L_B = \sqrt{D_B\tau_B} = \sqrt{(15)(10^{-7})} = 1.225\times10^{-3}\ \mathrm{cm} = 12.25\ \mu\mathrm{m},$$

$$\frac{W_B^2}{2L_B^2} = \frac{1}{2}\left(\frac{0.4}{12.2}\right)^2 = \frac{(0.0327)^2}{2} = 5.33\times10^{-4}, \qquad \alpha_T = 0.999467.$$

*Combine:*

$$\alpha = \gamma\alpha_T = (0.999289)(0.999467) = 0.998756,$$

$$\beta = \frac{0.998756}{1.244\times10^{-3}} = 803.$$

Or directly from the reciprocal sum: $1/\beta = 7.11\times10^{-4}+5.33\times10^{-4} = 1.244\times10^{-3}$, $\beta = 804$ ✓.

*What limits it?* Here the two terms are **comparable** — back-injection 57%, base recombination 43%. That is unusual and reflects the very heavy emitter doping ($5\times10^{19}$, which also crushed $D_E$ to 2.0). A well-balanced design.

*Where to improve.* Since neither dominates, improving only one gives diminishing returns:

- Halve $W_B$: base term falls 4× to $1.33\times10^{-4}$, giving $1/\beta = 8.44\times10^{-4}$, $\beta = 1184$ — a 47% gain.
- Double $N_E$ (if possible): back-injection halves to $3.56\times10^{-4}$, $1/\beta = 8.89\times10^{-4}$, $\beta = 1125$ — a 40% gain.

Doing **both** gives $1/\beta = 4.89\times10^{-4}$, $\beta = 2045$. This is the general lesson of reciprocal-sum limits: attack the largest term first, but once the terms are comparable you must attack both, and each alone saturates. (In practice $\beta = 800$ is already far more than any circuit needs — the design would instead spend the margin on a thinner base for speed, accepting $\beta = 200$.)

**Example 2 (reading a Gummel plot).** A measured transistor gives, at $V_{CE} = 2$ V:

| $V_{BE}$ (V) | $I_C$ (A) | $I_B$ (A) |
|---|---|---|
| 0.50 | $1.0\times10^{-8}$ | $4.0\times10^{-10}$ |
| 0.55 | $6.9\times10^{-8}$ | $1.4\times10^{-9}$ |
| 0.60 | $4.8\times10^{-7}$ | $5.6\times10^{-9}$ |
| 0.65 | $3.3\times10^{-6}$ | $3.0\times10^{-8}$ |
| 0.70 | $2.3\times10^{-5}$ | $2.1\times10^{-7}$ |
| 0.75 | $1.4\times10^{-4}$ | $1.5\times10^{-6}$ |
| 0.80 | $5.5\times10^{-4}$ | $1.0\times10^{-5}$ |

*Compute $\beta$ at each point:*

| $V_{BE}$ | $\beta = I_C/I_B$ |
|---|---|
| 0.50 | 25 |
| 0.55 | 49 |
| 0.60 | 86 |
| 0.65 | 110 |
| 0.70 | 110 |
| 0.75 | 93 |
| 0.80 | 55 |

The characteristic hump: rising, plateau at ~110 across 0.65–0.70 V, then falling.

*Diagnose the low end.* Between 0.50 and 0.60 V, $I_C$ rises by a factor of 48 over 100 mV — that is $100/\log_{10}48 = 60$ mV/decade ✓, ideal. But $I_B$ rises only by a factor of 14 over the same span — $100/\log_{10}14 = 87$ mV/decade, intermediate between 60 and 120. So $I_B$ has a substantial **$n\approx1.47$ component**: depletion-region recombination is inflating the base current at low bias, and it grows more slowly than $I_C$, so $\beta$ climbs as you increase bias. **Fix: cleaner emitter–base junction, better surface passivation** — this is the term that varies most between processes and is most sensitive to contamination.

*Diagnose the high end.* Between 0.75 and 0.80 V, $I_C$ rises by 3.9× over 50 mV, i.e. $50/\log_{10}3.9 = 85$ mV/decade — the collector current has started to *depart from ideal*, heading toward 120 mV/decade. Meanwhile $I_B$ rises 6.7× over 50 mV = 61 mV/decade, still ideal. So the droop at high current is **high-level injection in the base**, not anything happening to $I_B$.

At $V_{BE} = 0.80$ V and $I_C = 0.55$ mA, that is where the device leaves its useful range.

*The design conclusion.* Bias this transistor between about 3 µA and 150 µA of collector current, where $\beta\ge90$ and both currents are ideal. Below that, $\beta$ collapses and is contamination-sensitive; above it, high-level injection sets in and $f_T$ will be falling too. **The Gummel plot has told us the useful operating window without ever building a circuit** — which is exactly why it is the standard measurement.

## Watch out

- **You might attack the base to raise $\beta$.** In silicon, back-injection at the emitter usually dominates, and thinning the base does nothing for it (it actually makes it slightly worse, since the base Gummel number falls). Compute both terms before optimizing.
- **You might treat $\beta$ as constant.** It varies by 2–3× across the current range of a single device, plus 3:1 across a production lot, plus a strong positive temperature coefficient (about $+0.5\%$/°C, because $\gamma$ improves as $n_i$ rises faster in the lightly doped base). Design for the worst case.
- **You might forget that $I_E = I_C+I_B$ exactly.** It is Kirchhoff, not an approximation, and it is the most reliable check on any BJT calculation.
- **You might read $V_A$ off a single output curve.** The Early voltage is the *common* intercept of the extrapolated curves; a single curve's slope divided into its current gives $V_A+V_{CE}$, not $V_A$. And $V_A$ itself varies with bias in real devices.
- **You might design a power BJT as a scaled-up small one.** Emitter current crowding means the useful current scales with emitter *perimeter*, not area, so power devices are long thin interdigitated fingers rather than big squares.

## One-liner

> Gain has two independent leaks whose reciprocals add — holes back-injected into the emitter and electrons recombining in the base — and in silicon the emitter leak wins, which is why the emitter is doped a hundredfold harder than the base.

## Problems

**P1 (🟢)** A transistor has $\gamma = 0.995$ and $\alpha_T = 0.998$. (a) Find $\alpha$ and $\beta$. (b) Which mechanism limits the gain? (c) If $\gamma$ improves to 0.999, find the new $\beta$. (d) If instead $\alpha_T$ improves to 0.9995, find the new $\beta$. Compare.

**P2 (🟡)** An $npn$ has $N_E = 10^{19}$, $N_B = 10^{17}$, $W_E = W_B = 0.4\ \mu$m, $D_E = 3.9$, $D_B = 20.7\ \mathrm{cm^2/s}$, $\tau_B = 200$ ns. (a) Compute both loss terms and $\beta$. (b) Identify the dominant term and the factor by which it exceeds the other. (c) A SiGe base with $\Delta E_g = 100$ meV is introduced. Recompute $\beta$. (d) With that headroom, the designer raises $N_B$ to $10^{18}$ and thins $W_B$ to 0.15 µm (take $D_B = 9.1$ at that doping). Recompute $\beta$, $\tau_F$ and $f_T$, and comment.

**P3 (🔴)** A transistor has $V_A = 80$ V, $N_B = 2\times10^{17}\ \mathrm{cm^{-3}}$, $W_B = 0.3\ \mu$m, and a collector doped $N_C = 10^{16}\ \mathrm{cm^{-3}}$. (a) Verify $V_A$ against $qN_BW_B/C_{jC}'$ at $V_{CB} = 3$ V. (b) Find $r_o$ and $A_v^{\max}$ at $I_C = 100\ \mu$A and at 1 mA. (c) The base is thinned to 0.15 µm to double $f_T$. What happens to $V_A$ and to $A_v^{\max}$? (d) State the resulting design trade in one sentence, and estimate the product $\beta V_A$ before and after.

<details>
<summary>Solutions</summary>

**P1** (a) $$\alpha = \gamma\alpha_T = (0.995)(0.998) = 0.99301,$$
$$\beta = \frac{0.99301}{1-0.99301} = \frac{0.99301}{6.99\times10^{-3}} = 142.$$

(b) The loss terms are $1-\gamma = 5.0\times10^{-3}$ and $1-\alpha_T = 2.0\times10^{-3}$. **Emitter injection efficiency dominates**, by a factor of 2.5.

(c) $\gamma = 0.999$: $\alpha = (0.999)(0.998) = 0.997002$, $\beta = 0.997002/2.998\times10^{-3} = 333$.

(d) $\alpha_T = 0.9995$: $\alpha = (0.995)(0.9995) = 0.99450$, $\beta = 0.99450/5.50\times10^{-3} = 181$.

*Comparison.* Improving the **dominant** term (γ, from 0.995 to 0.999 — cutting its loss fivefold) took $\beta$ from 142 to 333, a **2.3× gain**. Improving the *subordinate* term ($\alpha_T$, cutting its loss fourfold) took $\beta$ only to 181, a **1.3× gain**.

The general principle for any reciprocal-sum limit: **effort spent on the smaller loss term is largely wasted.** Even reducing the base loss to *zero* would give $\beta = \gamma/(1-\gamma) = 199$, so no amount of base improvement can pass 199 while $\gamma = 0.995$.

**P2** (a) *Back-injection:*

$$\frac{D_EN_BW_B}{D_BN_EW_E} = \frac{(3.9)(10^{17})(0.4)}{(20.7)(10^{19})(0.4)} = \frac{3.9\times10^{17}}{2.07\times10^{20}} = 1.884\times10^{-3}.$$

*Base recombination:* $L_B = \sqrt{(20.7)(2\times10^{-7})} = \sqrt{4.14\times10^{-6}} = 2.03\times10^{-3}$ cm $= 20.3\ \mu$m.

$$\frac{W_B^2}{2L_B^2} = \frac{1}{2}\left(\frac{0.4}{20.3}\right)^2 = \frac{(0.0197)^2}{2} = 1.93\times10^{-4}.$$

$$\frac{1}{\beta} = 1.884\times10^{-3}+1.93\times10^{-4} = 2.077\times10^{-3} \quad\Longrightarrow\quad \beta = 481.$$

(b) **Back-injection dominates**, exceeding base recombination by $1.884\times10^{-3}/1.93\times10^{-4} = 9.7$ — nearly tenfold.

(c) A SiGe base with $\Delta E_g = 100$ meV suppresses hole back-injection by $e^{0.100/0.0259} = e^{3.861} = 47.5$:

$$\text{back-injection} \to \frac{1.884\times10^{-3}}{47.5} = 3.97\times10^{-5}.$$

$$\frac{1}{\beta} = 3.97\times10^{-5}+1.93\times10^{-4} = 2.33\times10^{-4} \quad\Longrightarrow\quad \beta = 4294.$$

The roles have **flipped**: base recombination is now 83% of the loss, and back-injection is negligible. $\beta$ rose nearly ninefold — but not by the full 47.5, precisely because the other term took over.

(d) With $N_B = 10^{18}$, $W_B = 0.15\ \mu$m, $D_B = 9.1$:

*Back-injection* (with the SiGe factor still applied):

$$\frac{(3.9)(10^{18})(0.15)}{(9.1)(10^{19})(0.4)}\cdot\frac{1}{47.5} = \frac{5.85\times10^{17}}{3.64\times10^{19}}\cdot\frac{1}{47.5} = 1.607\times10^{-2}\times\frac{1}{47.5} = 3.38\times10^{-4}.$$

*Base recombination:* $L_B = \sqrt{(9.1)(2\times10^{-7})} = 1.35\times10^{-3}$ cm $= 13.5\ \mu$m.

$$\frac{1}{2}\left(\frac{0.15}{13.5}\right)^2 = \frac{(0.0111)^2}{2} = 6.17\times10^{-5}.$$

$$\frac{1}{\beta} = 3.38\times10^{-4}+6.17\times10^{-5} = 4.00\times10^{-4} \quad\Longrightarrow\quad \beta = 2500.$$

*Speed:*

$$\tau_F = \frac{W_B^2}{2D_B} = \frac{(0.15\times10^{-4})^2}{2(9.1)} = \frac{2.25\times10^{-10}}{18.2} = 1.24\times10^{-11}\ \mathrm{s} = 12.4\ \mathrm{ps},$$
$$f_T = \frac{1}{2\pi(1.24\times10^{-11})} = 12.9\ \mathrm{GHz}.$$

Compare the original: $\tau_F = (0.4\times10^{-4})^2/(2\times20.7) = 38.6$ ps, $f_T = 4.1$ GHz.

*Comment.* The designer traded $\beta$ from 4294 down to 2500 — utterly irrelevant, since no circuit needs more than a few hundred — and bought **3.1× the cutoff frequency** plus a base sheet resistance reduced by roughly $(10^{18}\times0.15)/(10^{17}\times0.4) = 3.75\times$, which improves $f_{\max}$ further still.

**This is exactly what the heterojunction is for.** The 100 meV band offset created 47× of injection-efficiency headroom, and the designer spent essentially all of it on base doping and thinning rather than on gain. A homojunction device attempting the same base change would have gone from $\beta = 481$ to $\beta = 53$ — a crippling loss. The SiGe HBT gets the speed for free.

**P3** (a) The base–collector junction with $N_B = 2\times10^{17}$, $N_C = 10^{16}$:

$$V_{bi} = 0.0259\ln\frac{(2\times10^{17})(10^{16})}{10^{20}} = 0.0259\ln(2\times10^{13}) = 0.0259(30.63) = 0.793\ \mathrm{V}.$$

At $V_{CB} = 3$ V, total $= 3.793$ V:

$$W = \sqrt{\frac{2(1.04\times10^{-12})(3.793)}{1.602\times10^{-19}}\left(\frac{1}{2\times10^{17}}+\frac{1}{10^{16}}\right)} = \sqrt{\frac{7.890\times10^{-12}}{1.602\times10^{-19}}(1.05\times10^{-16})}$$

$$= \sqrt{(4.925\times10^{7})(1.05\times10^{-16})} = \sqrt{5.171\times10^{-9}} = 7.19\times10^{-5}\ \mathrm{cm} = 0.719\ \mu\mathrm{m}.$$

$$C_{jC}' = \frac{\varepsilon_s}{W} = \frac{1.04\times10^{-12}}{7.19\times10^{-5}} = 1.446\times10^{-8}\ \mathrm{F/cm^2}.$$

$$V_A \approx \frac{qN_BW_B}{C_{jC}'} = \frac{(1.602\times10^{-19})(2\times10^{17})(0.3\times10^{-4})}{1.446\times10^{-8}} = \frac{9.612\times10^{-7}}{1.446\times10^{-8}} = 66.5\ \mathrm{V}.$$

Against the stated 80 V — the same order, and the ~20% difference is expected since $V_A$ depends on bias through $C_{jC}'$ and the formula is a first-order estimate. ✓

(b) $$r_o(100\ \mu\mathrm{A}) = \frac{V_A}{I_C} = \frac{80}{10^{-4}} = 8.0\times10^{5}\ \Omega = 800\ \mathrm{k\Omega},$$
$$r_o(1\ \mathrm{mA}) = \frac{80}{10^{-3}} = 8.0\times10^{4}\ \Omega = 80\ \mathrm{k\Omega}.$$

$$A_v^{\max} = \frac{V_A}{V_T} = \frac{80}{0.0259} = 3089 \quad\text{at both currents}.$$

The output resistance falls tenfold with current, but $g_m$ rises tenfold, so the product is **bias-independent** — the hallmark result.

(c) $V_A\propto W_B$ at fixed $N_B$ and $C_{jC}'$, so halving $W_B$ **halves $V_A$** to 40 V, and

$$A_v^{\max} = \frac{40}{0.0259} = 1544.$$

The intrinsic gain **halves**.

(d) **The trade in one sentence:** thinning the base doubles $f_T$ (since $\tau_F\propto W_B^2$) and halves $V_A$ (since the collector depletion eats a larger *fraction* of a thinner base), so bipolar speed is bought directly with intrinsic voltage gain.

*The $\beta V_A$ product.* Before: with $W_B = 0.3\ \mu$m, take $\beta\approx200$ (typical), so $\beta V_A = 200\times80 = 16{,}000$ V. After: $W_B = 0.15\ \mu$m halves the base Gummel number, which *doubles* $\beta$ to 400 through the back-injection term, while $V_A$ halves to 40 V:

$$\beta V_A = 400\times40 = 16{,}000\ \mathrm{V}.$$

**Unchanged.** That invariance is not a coincidence: $\beta\propto1/(N_BW_B)$ through back-injection and $V_A\propto N_BW_B$ through the Early effect, so their product depends only on the emitter design and the collector capacitance, not on the base. $\beta V_A$ is therefore a genuine **technology figure of merit** — you can move gain between the two, but not create more of it without changing the emitter or the collector.

(And the same base change that redistributed $\beta$ and $V_A$ also doubled $f_T$ for free, which is why base thinning happened anyway and why analog designers learned to live with $V_A$ falling generation after generation.)

</details>

## Flashback

**From Lesson 2.2 (The ideal-diode equation):** A p–n junction has $N_a = 10^{19}$ on one side and $N_d = 10^{17}$ on the other. (a) Which side dominates the injected current, and by what factor? (b) Relate this to emitter injection efficiency. (c) State what a heterojunction changes about the answer.

<details>
<summary>Solution</summary>

(a) From [2.2](02-02-ideal-diode-equation.md), each side's contribution to $I_0$ is $\propto D n_i^2/(LN)$, so the ratio is roughly $N$-inverse. Injection is into the *lightly doped* side, so the current is dominated by carriers injected into the $N_d = 10^{17}$ side — by a factor of about

$$\frac{N_a}{N_d}\cdot\frac{D_{p}L_n}{D_nL_p} \approx \frac{10^{19}}{10^{17}} = 100$$

(up to the mobility and length ratios, which are order unity).

(b) That factor of 100 **is** the emitter injection efficiency mechanism. Call the $10^{19}$ side the emitter and the $10^{17}$ side the base: 99% of the junction current is carriers injected forward into the base (useful, becomes $I_C$) and 1% is carriers injected backward into the emitter (waste, becomes $I_B$). So

$$\gamma \approx \frac{100}{101} = 0.990, \qquad \beta_\gamma = \frac{\gamma}{1-\gamma} \approx 100.$$

A two-decade doping ratio buys a $\beta$ of about 100 — which is exactly the textbook number, and shows that a BJT's gain is essentially the emitter-to-base doping ratio.

(c) A heterojunction breaks the link between gain and the doping ratio. With a wider-gap emitter, back-injection is additionally suppressed by $e^{\Delta E_g/k_BT}$, so $\gamma$ no longer depends on $N_E/N_B$ alone:

$$\frac{I_n}{I_p} \approx \frac{N_E}{N_B}e^{\Delta E_g/k_BT}.$$

The designer can then set the doping ratio to whatever the *speed* and *resistance* requirements want — even inverting it, with a base doped more heavily than the emitter — and still have plenty of gain. That freedom is the entire point of the HBT, and P2(d) is what it buys.

</details>

## Connections

- **Backward:** both loss terms are [2.2](02-02-ideal-diode-equation.md)'s injected diode currents evaluated on the two sides; the base transport factor is [1.4](01-04-continuity-equations.md)'s short-base recombination fraction; the Early effect is [2.1](02-01-junction-electrostatics.md)'s $W(V)$ intruding on the base.
- **Forward:** [3.3](03-03-mos-capacitor.md)–[3.5](03-05-mosfet-iv.md) build the MOSFET, whose gain mechanism is entirely different (no input current at all) and whose intrinsic gain is far lower; [3.6](03-06-short-channel-effects-scaling.md) meets the MOSFET's version of the Early effect as channel-length modulation and DIBL.
- **Sideways:** the reciprocal-sum structure $1/\beta = \sum(\text{losses})$ is the same "the worst channel dominates" logic as parallel recombination paths in [1.3](01-03-generation-recombination.md) and thermal resistances in series in [`heat-transfer`](../../heat-transfer/syllabus.md) — whenever independent loss mechanisms compete, add the rates and let the largest win.
