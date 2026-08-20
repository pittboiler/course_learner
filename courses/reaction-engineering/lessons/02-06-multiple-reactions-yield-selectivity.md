# Chemical Reaction Engineering · Lesson 2.6: Multiple reactions — yield & selectivity

> ⏱ ~15 min · Module 2: Isothermal Reactor Design · Builds on: [2.1 Conversion & design equations](02-01-conversion-design-equations.md), [2.2 Levenspiel plots & reactors in series](02-02-levenspiel-plots-reactors-in-series.md), [1.5 CSTR](01-05-cstr.md), [1.6 PFR & packed bed](01-06-pfr-packed-bed.md) · Unlocks: real process design — every later module (energy balance, catalysis) exists to hit a selectivity target

## Why this matters

Real feedstock almost never does exactly one thing. Throw ethylene and oxygen together and you get ethylene oxide (the money-maker) **and** a chunk that burns to CO₂ and water (worthless). Crack a hydrocarbon and the product you want is an *intermediate* that keeps reacting if you leave it in too long. Up to now we sized reactors to push **conversion** $X$ as high as possible. But when reactions compete, high conversion can *destroy* the thing you're selling. What makes money is **selectivity** and **yield** — and the levers that control them are exactly the reactor, feed, and temperature choices from Modules 1–2. This lesson is where reactor design stops being bookkeeping and becomes engineering for a goal.

## The idea

Picture two reactions racing for the same reactant $A$: one makes your desired product $D$, the other makes junk $U$. You can't stop $U$ from forming — but you *can* rig the race. The trick is that the two paths usually respond **differently** to how crowded the reactant is and to how hot it is. If the good path is hungrier for $A$ (higher order), you win by keeping $A$ concentrated — run a PFR or batch, high pressure, no dilution. If the good path is the mild one (lower order), you win by keeping $A$ dilute — a CSTR, which by design runs at its low *exit* concentration everywhere inside. Same chemistry, opposite reactor, all decided by which path is greedier.

**Series** reactions ($A \to D \to U$) are a different trap. Here $D$ is a stepping-stone: it forms from $A$, then decays to $U$. Leave the mixture too briefly and little $D$ has formed; leave it too long and the $D$ you made has moved on to $U$. So there's a **sweet-spot time** — a best $\tau$, hence a best reactor size — where $D$ peaks. Overshoot it and more conversion means *less* product. This is why "run it to completion" is often exactly wrong.

## The formal version

Let $r_D$ be the rate of formation of desired $D$ and $r_U$ the rate of the undesired path (both in $\mathrm{mol\,L^{-1}\,s^{-1}}$).

**Selectivity** — how cleanly you're making $D$ versus $U$:

$$S_{D/U} = \frac{r_D}{r_U} \quad(\text{instantaneous}), \qquad \tilde S_{D/U} = \frac{F_D}{F_U} \quad(\text{overall}),$$

where $F_D, F_U$ are the exit molar flow rates ($\mathrm{mol\,s^{-1}}$). *In words: the instantaneous $S$ is the ratio of the two formation rates right here, right now; the overall $\tilde S$ is the ratio of totals that actually walk out the door.*

**Yield** — how much of the reactant you spent actually became $D$:

$$Y_D = \frac{F_D}{F_{A0} - F_A} = \frac{\text{moles of }D\text{ formed}}{\text{moles of }A\text{ consumed}}.$$

*In words: of every mole of $A$ you burned through, what fraction ended up as product.* Yield is bounded by 1 (dimensionless); conversion tells you how much $A$ you used, yield tells you whether that use was worth it.

**Parallel reactions.** Let $A \to D$ have rate $r_D = k_D C_A^{a_D}$ and $A \to U$ have rate $r_U = k_U C_A^{a_U}$. Then

$$S_{D/U} = \frac{k_D}{k_U}\,C_A^{\,a_D - a_U}.$$

*In words: selectivity rides on the concentration of $A$ raised to the difference in orders.* The whole design rule falls out of the sign of $a_D - a_U$:

- $a_D > a_U$ (desired path is **higher** order): $S_{D/U}$ **rises** with $C_A$ → keep $C_A$ **high** — batch or PFR, high pressure, no inert dilution, low conversion per pass.
- $a_D < a_U$ (desired path is **lower** order): $S_{D/U}$ **falls** with $C_A$ → keep $C_A$ **low** — CSTR (runs at its low exit $C_A$), dilute the feed, or add product recycle.

**Temperature** is the other knob. Since $k_D/k_U = (A_D/A_U)\,e^{-(E_D - E_U)/(RT)}$ with $R = 8.314\ \mathrm{J\,mol^{-1}K^{-1}}$, raising $T$ favors whichever path has the **higher activation energy** $E$. *In words: heat speeds up both, but it speeds up the steeper-$E$ path faster* — so if $E_D > E_U$, run hot; if $E_D < E_U$, run cold and accept a slower reactor.

**Series reactions.** For $A \xrightarrow{k_1} D \xrightarrow{k_2} U$ with both steps first order, a batch reactor (or PFR, reading $t$ as $\tau$) gives

$$C_A = C_{A0}\,e^{-k_1 t}, \qquad C_D = C_{A0}\,\frac{k_1}{k_2 - k_1}\left(e^{-k_1 t} - e^{-k_2 t}\right).$$

$C_D$ starts at 0, rises, peaks, and decays. Setting $dC_D/dt = 0$ gives the optimum:

$$\boxed{\,t_{\mathrm{opt}} = \frac{\ln(k_1/k_2)}{k_1 - k_2}\,}, \qquad \frac{C_{D,\max}}{C_{A0}} = \left(\frac{k_1}{k_2}\right)^{\!k_2/(k_2 - k_1)}.$$

*In words: there is one best residence time; run shorter and you've under-cooked $D$, run longer and you've over-cooked it into $U$.* A PFR (every molecule sees the same clean $t_{\mathrm{opt}}$) beats a CSTR (broad spread of residence times, some molecules over-react) for grabbing a target intermediate.

## Picture

![Left: selectivity S_D/U versus C_A, one curve rising for a higher-order desired path and one falling for a lower-order desired path, with CSTR/dilute and PFR/batch operating regions marked. Right: concentration of intermediate C_D versus time, rising to a peak at tau_opt then falling as D over-reacts to U, with C_A decaying alongside.](assets/02-06-fig1.svg)

## Worked examples

**Example 1 (parallel — pick the reactor).** Desired $A \to D$ is **second order**, $r_D = k_D C_A^2$ with $k_D = 0.10\ \mathrm{L\,mol^{-1}min^{-1}}$; undesired $A \to U$ is **first order**, $r_U = k_U C_A$ with $k_U = 0.20\ \mathrm{min^{-1}}$. Feed $C_{A0} = 2\ \mathrm{mol/L}$, target conversion $X = 0.9$ (so exit $C_A = C_{A0}(1-X) = 0.2\ \mathrm{mol/L}$). Which reactor?

Instantaneous selectivity:

$$S_{D/U} = \frac{k_D C_A^2}{k_U C_A} = \frac{k_D}{k_U}\,C_A = \frac{0.10}{0.20}\,C_A = 0.5\,C_A.$$

Desired is higher order → **keep $C_A$ high** → PFR, not CSTR. Quantify it:

- **CSTR** runs *entirely* at the exit concentration $C_A = 0.2\ \mathrm{mol/L}$, so $\tilde S_{\text{CSTR}} = 0.5(0.2) = 0.10$.
- **PFR** sweeps $C_A$ from 2 down to 0.2. The overall selectivity is the ratio of totals; with $r_D/(r_D+r_U) = C_A/(C_A + k_U/k_D) = C_A/(C_A+2)$ and $r_U/(r_D+r_U) = 2/(C_A+2)$,

$$\tilde S_{\text{PFR}} = \frac{\displaystyle\int_{0.2}^{2}\frac{C_A}{C_A+2}\,dC_A}{\displaystyle\int_{0.2}^{2}\frac{2}{C_A+2}\,dC_A} = \frac{\big[\,C_A - 2\ln(C_A+2)\,\big]_{0.2}^{2}}{\big[\,2\ln(C_A+2)\,\big]_{0.2}^{2}} = \frac{0.604}{1.196} \approx 0.51.$$

The PFR delivers about **5× the selectivity** of the CSTR at the same conversion — because it spends most of its length at high $C_A$, where the second-order path dominates. *Units check:* $S$ is a ratio of like rates → dimensionless ✓; $k_D/k_U = \mathrm{L\,mol^{-1}min^{-1}}/\mathrm{min^{-1}} = \mathrm{L\,mol^{-1}}$, times $C_A$ in $\mathrm{mol/L}$ → dimensionless ✓. *Design meaning:* same 0.9 conversion, but switching from a tank to a tube roughly quintuples saleable product per mole of $A$.

**Example 2 (series — find the best size).** $A \xrightarrow{k_1} D \xrightarrow{k_2} U$, both first order, in a PFR (or batch). $k_1 = 0.5\ \mathrm{min^{-1}}$, $k_2 = 0.1\ \mathrm{min^{-1}}$. Find the residence time that maximizes $D$ and the yield there.

$$t_{\mathrm{opt}} = \frac{\ln(k_1/k_2)}{k_1 - k_2} = \frac{\ln(0.5/0.1)}{0.5 - 0.1} = \frac{\ln 5}{0.4} = \frac{1.609}{0.4} \approx 4.0\ \mathrm{min}.$$

Maximum intermediate:

$$\frac{C_{D,\max}}{C_{A0}} = \left(\frac{k_1}{k_2}\right)^{k_2/(k_2 - k_1)} = 5^{\,0.1/(0.1 - 0.5)} = 5^{-0.25} \approx 0.67.$$

Check directly at $t = 4.0$ min: $e^{-k_1 t} = e^{-2.0} = 0.135$, $e^{-k_2 t} = e^{-0.4} = 0.670$, so $C_D/C_{A0} = \frac{0.5}{0.1-0.5}(0.135 - 0.670) = (-1.25)(-0.535) = 0.67$ ✓. *Units check:* $t_{\mathrm{opt}} = (\text{dimensionless})/\mathrm{min^{-1}} = \mathrm{min}$ ✓. *Design meaning:* the best you can do is a **67% yield** of $D$, and it takes a PFR sized for exactly $\tau = 4$ min — build it bigger (chasing higher conversion of $A$) and you *lose* product to $U$. A CSTR on the same kinetics peaks near $C_D/C_{A0} \approx 0.48$ at $\tau = 1/\sqrt{k_1 k_2} \approx 4.5$ min — worse, because its spread of residence times over-cooks part of the feed.

## Watch out

- **You might think maximizing conversion always maximizes product — but for a series reaction it destroys it.** Past $t_{\mathrm{opt}}$, every extra mole of $A$ converted comes at the cost of $D$ decaying to $U$. Conversion and yield are different objectives; optimize the one that pays.
- **You might think a CSTR is always the "worse" reactor — but for a lower-order desired path it's the *right* one.** The CSTR's defining feature — the whole tank sits at the low exit $C_A$ — is a liability when you want $C_A$ high and an asset when you want it low. There's no universally best reactor, only a best reactor *for this selectivity problem*.
- **You might think raising temperature always helps — but it only helps the higher-$E$ path.** If the junk-forming route has the larger activation energy, heating makes your product *dirtier*. Always check the sign of $E_D - E_U$ before reaching for the thermostat.

## One-liner

> Conversion tells you how much reactant you spent; selectivity and yield tell you whether you spent it well — and you steer them with concentration (which order wins?), reactor type, and temperature (which $E$ wins?).

## Problems

**P1 (🟢)** Desired $A \to D$ is **first order** ($r_D = k_D C_A$); undesired $A \to U$ is **second order** ($r_U = k_U C_A^2$). Write $S_{D/U}$ and state whether you should run a PFR or a CSTR, and why.

**P2 (🟡)** In a series reaction $A \xrightarrow{k_1} D \xrightarrow{k_2} U$ (both first order), $k_1 = 0.30\ \mathrm{min^{-1}}$ and $k_2 = 0.10\ \mathrm{min^{-1}}$. Find $t_{\mathrm{opt}}$ and the maximum yield $C_{D,\max}/C_{A0}$ in a PFR.

**P3 (🔴)** For a parallel reaction, $r_D = k_D C_A^2$ and $r_U = k_U C_A$, with $k_D/k_U = 0.5\ \mathrm{L/mol}$. The desired path also has a higher activation energy: $E_D = 90\ \mathrm{kJ/mol}$, $E_U = 60\ \mathrm{kJ/mol}$. You must run at $C_A = 0.5\ \mathrm{mol/L}$ (a downstream constraint). Qualitatively, and then roughly, how does raising $T$ from 300 K to 350 K change $S_{D/U}$? (Assume the pre-exponential ratio is fixed.)

<details>
<summary>Solutions</summary>

**P1** 
$$S_{D/U} = \frac{r_D}{r_U} = \frac{k_D C_A}{k_U C_A^2} = \frac{k_D}{k_U}\,C_A^{-1} = \frac{k_D}{k_U}\,\frac{1}{C_A}.$$
Selectivity **falls** as $C_A$ rises (desired path is lower order, $a_D - a_U = 1 - 2 = -1$). So keep $C_A$ **low** → run a **CSTR**, which operates everywhere at its low exit concentration. (Diluting the feed or adding inerts helps too.) *Design meaning:* here the tank beats the tube — the opposite of Example 1, and for exactly the opposite reason.

**P2** 
$$t_{\mathrm{opt}} = \frac{\ln(k_1/k_2)}{k_1 - k_2} = \frac{\ln 3}{0.20} = \frac{1.099}{0.20} \approx 5.5\ \mathrm{min}.$$
$$\frac{C_{D,\max}}{C_{A0}} = \left(\frac{k_1}{k_2}\right)^{k_2/(k_2 - k_1)} = 3^{\,0.1/(0.1 - 0.3)} = 3^{-0.5} = \frac{1}{\sqrt 3} \approx 0.58.$$
*Check:* at $t = 5.5$, $e^{-0.3(5.5)} = e^{-1.65} = 0.192$, $e^{-0.1(5.5)} = e^{-0.55} = 0.577$; $C_D/C_{A0} = \frac{0.3}{0.1-0.3}(0.192 - 0.577) = (-1.5)(-0.385) = 0.58$ ✓. A slower second step (smaller $k_2$) would let more $D$ survive, pushing the max yield higher — sanity holds.

**P3** Selectivity is $S_{D/U} = \frac{k_D}{k_U}C_A = \left(\frac{A_D}{A_U}\right)e^{-(E_D - E_U)/(RT)}\,C_A$. Since $E_D > E_U$, the exponent $-(E_D-E_U)/(RT)$ grows (less negative) as $T$ rises, so **$S_{D/U}$ increases** — run hot.

Roughly, the ratio of selectivities is
$$\frac{S(350)}{S(300)} = \exp\!\left[-\frac{E_D - E_U}{R}\left(\frac{1}{350} - \frac{1}{300}\right)\right].$$
With $E_D - E_U = 30{,}000\ \mathrm{J/mol}$ and $R = 8.314$:
$$\frac{1}{350} - \frac{1}{300} = 0.002857 - 0.003333 = -4.76\times10^{-4}\ \mathrm{K^{-1}},$$
$$\frac{S(350)}{S(300)} = \exp\!\left[-\frac{30000}{8.314}(-4.76\times10^{-4})\right] = \exp[3608 \times 4.76\times10^{-4}] = e^{1.72} \approx 5.6.$$
Heating by 50 K multiplies selectivity by roughly **5.6×** (the fixed $C_A$ cancels in the ratio). *Design meaning:* temperature, not just concentration, is a first-class selectivity lever — this is the bridge into Module 3, where the energy balance sets $T$.

</details>

## Flashback

**From Lesson 2.5 (Analysis of rate data):** A liquid-phase reaction $A \to$ products is run at constant volume, and the initial rate is measured at three feed concentrations:

| $C_A$ ($\mathrm{mol/L}$) | 1.0 | 2.0 | 4.0 |
|---|---|---|---|
| $-r_A$ ($\mathrm{mol\,L^{-1}min^{-1}}$) | 0.05 | 0.20 | 0.80 |

Find the reaction order $n$ and the rate constant $k$. (Fresh variant — new numbers.)

<details>
<summary>Solution</summary>

Take logs of $-r_A = k C_A^{\,n}$: $\ln(-r_A) = \ln k + n\ln C_A$, so $n$ is the slope of $\ln(-r_A)$ vs $\ln C_A$. Between the first two points,
$$n = \frac{\ln(0.20/0.05)}{\ln(2.0/1.0)} = \frac{\ln 4}{\ln 2} = \frac{1.386}{0.693} = 2.$$
Doubling $C_A$ quadruples the rate → **second order**. Then
$$k = \frac{-r_A}{C_A^{2}} = \frac{0.05}{(1.0)^2} = 0.05\ \mathrm{L\,mol^{-1}min^{-1}}.$$
*Check:* predicts $-r_A = 0.05(2.0)^2 = 0.20$ ✓ and $0.05(4.0)^2 = 0.80$ ✓. Units: $k$ for a second-order reaction carries $\mathrm{L\,mol^{-1}min^{-1}}$, matching. This is the same log-log slope trick from 2.5 — and notice it's exactly how you'd *measure* the orders $a_D, a_U$ that decide the selectivity strategy above.

</details>

## Connections

- **Backward:** each reaction gets its own mole balance and design equation from [2.1](02-01-conversion-design-equations.md); the reactor-choice reasoning (tube vs. tank, series arrangements) is [2.2](02-02-levenspiel-plots-reactors-in-series.md) applied to a new objective; the CSTR's "everything at exit $C_A$" and the PFR's concentration sweep come straight from [1.5](01-05-cstr.md) and [1.6](01-06-pfr-packed-bed.md). Measuring the orders that set the strategy is [2.5](02-05-analysis-of-rate-data.md).
- **Forward:** the temperature lever ($E_D$ vs. $E_U$) is why **Module 3** (energy balance, adiabatic and heat-exchange operation) matters for *selectivity*, not just for hitting a rate — you're choosing $T$ to win the race. **Module 4**'s selective catalysts are the ultimate parallel-reaction tool: a catalyst that speeds only the $D$ path.
- **Sideways (physical chemistry):** the competing rate laws $r_D = k_D C_A^{a_D}$, $r_U = k_U C_A^{a_U}$ are the parallel/consecutive kinetics of [`physical-chemistry` 3.1 (rate laws & reaction order)](../../physical-chemistry/lessons/03-01-rate-laws-reaction-order.md), and the $k_D/k_U = (A_D/A_U)e^{-(E_D-E_U)/RT}$ temperature argument is the Arrhenius/transition-state picture of [`physical-chemistry` 3.4](../../physical-chemistry/lessons/03-04-arrhenius-transition-state-theory.md) — here turned from a *description* of two rates into a *design decision* between them.
