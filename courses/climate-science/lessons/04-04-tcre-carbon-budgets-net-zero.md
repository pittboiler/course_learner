# Climate Physics · Lesson 4.4: TCRE, carbon budgets and net zero

> ⏱ ~15 min · Module 4: The carbon cycle & ocean chemistry · Builds on: [4.1](04-01-the-carbon-cycle.md), [3.2](03-02-tcr-ecs-pattern-effect.md), [3.1](03-01-ocean-heat-uptake-thermal-inertia.md) · Unlocks: [6.5](06-05-scenarios-projections-intervention.md), Module 5

## Why this matters

This is the lesson where the physics becomes a number people act on. Peak warming turns out to depend, to a very good approximation, on **cumulative** $\mathrm{CO_2}$ emissions and on nothing else — not the rate, not the path, not when they were emitted. That result, the **[transient climate response to cumulative emissions](../reference.md#tcre)** (TCRE), is what makes a "carbon budget" a coherent physical object rather than a policy metaphor. It is also why "net zero" is the target rather than "80 percent reduction", and why the answer to "how much can we still emit" is a fixed quantity being spent down. Almost everything counterintuitive about climate policy follows from the near-linearity established here.

## The idea

**Warming is proportional to cumulative emissions.** Across models and across scenarios, plotting global-mean warming against total $\mathrm{CO_2}$ emitted gives a nearly straight line through the origin, with slope about 1.65 K per 1000 PgC. It holds up to about 2000 PgC and across widely different emission trajectories.

**This should be surprising, and the reason it works is a double cancellation.** Forcing is *logarithmic* in concentration ([1.3](01-03-bands-saturation-logarithmic-forcing.md)) — a strong diminishing return. Pulling the other way: the airborne fraction *rises* as sinks saturate ([4.2](04-02-ocean-carbon-revelle-factor.md)), and the *realized* fraction of equilibrium warming also rises as the forcing growth slows and the ocean catches up ([3.1](03-01-ocean-heat-uptake-thermal-inertia.md)). Two convex effects cancel one concave one, and the product comes out linear. **It is a coincidence in the sense that no principle demands it, and a robust one in the sense that every model reproduces it.**

**The consequences are unusually clean.** Peak warming is set by total emissions, so it does not matter whether we emit a given total quickly or slowly — only the total. A temperature target maps directly onto a quantity of carbon. And every tonne emitted uses up part of a fixed allowance.

**Net zero stabilizes temperature; it does not reduce it.** When emissions reach zero, $\mathrm{CO_2}$ concentration starts falling as sinks continue to absorb — which cools. Simultaneously the ocean stops taking up heat as fast, so the surface catches up toward equilibrium — which warms. These two nearly cancel, and the **zero-emissions commitment** is assessed at approximately zero.

**But not everything is reversible.** Temperature tracks cumulative emissions in both directions, so net-negative emissions could in principle bring it back down. Sea level, ice sheets and deep-ocean heat do not follow, because their timescales are centuries to millennia. **Overshoot is not undoable at the same speed it was done.**

## The formal version

**Definition.**

$$\mathrm{TCRE} \equiv \frac{\Delta T}{E_{\text{cum}}}, \qquad \mathrm{TCRE} = 1.65\ \mathrm{K\ per\ 1000\ PgC} \ \ [1.0\ \mathrm{to}\ 2.3].$$

In the other common units, $1000\ \mathrm{PgC} = 3664\ \mathrm{GtCO_2}$, so

$$\mathrm{TCRE} = 0.45\ \mathrm{K\ per\ 1000\ GtCO_2}.$$

**Why it is linear.** Decompose the warming:

$$\Delta T = \underbrace{\frac{1}{\lambda + \varepsilon\kappa}}_{\text{realized response}} \times \underbrace{\frac{F_{2\times}}{\ln 2}\ln\!\left(\frac{C}{C_0}\right)}_{\text{forcing}}, \qquad \frac{C}{C_0} = 1 + \frac{\mathrm{AF}\cdot E_{\text{cum}}}{C_0}.$$

Three factors, and each is nonlinear in $E_{\text{cum}}$:

| Factor | Behaviour as emissions accumulate | Curvature |
|---|---|---|
| $\ln(C/C_0)$ | saturating | concave |
| $\mathrm{AF}$ | rising (buffer weakens, [4.2](04-02-ocean-carbon-revelle-factor.md)) | convex |
| $1/(\lambda+\varepsilon\kappa)$ | rising (ocean uptake falls off) | convex |

*In words: each extra tonne buys less forcing, but a larger share of it stays in the air and a larger share of the resulting warming is realized.* The three effects are of comparable magnitude and opposite curvature, and the product is straight to within about 10 percent over the range 0 to 2000 PgC.

Beyond about 2000 PgC the cancellation degrades and TCRE declines — the logarithm eventually wins. Below a few hundred PgC it is also imperfect. **TCRE is an emergent regularity valid over the range that matters for policy, not a law.**

**Carbon budgets.** Invert:

$$E_{\text{remaining}} = \frac{T_{\text{target}} - T_{\text{now}}}{\mathrm{TCRE}}.$$

With $T_{\text{now}} = 1.1$ K and TCRE $= 1.65$ K per 1000 PgC:

| Target | Central (PgC) | GtCO₂ | Years at 10 PgC yr⁻¹ |
|---|---|---|---|
| 1.5 K | 242 | 889 | 24 |
| 2.0 K | 545 | 2000 | 55 |

And with the TCRE range:

| Target | TCRE $=1.0$ | TCRE $=1.65$ | TCRE $=2.3$ |
|---|---|---|---|
| 1.5 K | 400 PgC | 242 PgC | 174 PgC |
| 2.0 K | 900 PgC | 545 PgC | 391 PgC |

**Why IPCC's number is smaller.** AR6 assessed about 500 GtCO₂ (136 PgC) from the start of 2020 for a 50 percent chance of staying below 1.5 K — smaller than the 889 GtCO₂ above. Four reasons, all legitimate:

1. **Non-$\mathrm{CO_2}$ forcing.** TCRE relates warming to $\mathrm{CO_2}$ alone, but methane, $\mathrm{N_2O}$ and aerosols also contribute. Projected non-$\mathrm{CO_2}$ warming of a few tenths of a kelvin must be subtracted from the allowance, costing roughly 200 GtCO₂.
2. **Unrepresented Earth-system feedbacks.** Permafrost thaw and wetland methane are absent or weak in most models used to derive TCRE; AR6 subtracts about 100 GtCO₂ for them, with large uncertainty.
3. **Probability level.** A "50 percent chance" budget uses the median TCRE; a 67 percent chance uses a higher one, shrinking the budget by roughly a third.
4. **Historical warming.** Using 1.2 K rather than 1.1 K to date removes another 60 GtCO₂.

**A carbon budget is therefore not a single number**, and the differences between published values are mostly definitional rather than scientific. Always ask: which target, which probability, which base year, and are non-$\mathrm{CO_2}$ forcings netted out?

**Zero-emissions commitment.** Stop emitting $\mathrm{CO_2}$ entirely and two things happen at once:

- $\mathrm{CO_2}$ concentration **falls**, because the land and ocean sinks keep absorbing the disequilibrium. Forcing declines. This cools.
- Ocean heat uptake **declines**, because the forcing is no longer growing, so a larger fraction of the remaining forcing shows up at the surface. This warms.

Multi-model estimates give

$$\mathrm{ZEC}_{50} = 0 \pm 0.3\ \mathrm{K}$$

over 50 years after cessation. *In words: temperature approximately holds where it was when emissions stopped.* This finding — which only became firm around 2020 — changed the framing of climate policy substantially: it means there is **no additional warming locked in beyond what our cumulative emissions have already bought**, and equally that stopping does not undo anything.

Contrast the three commitments, which are routinely conflated:

| Commitment | Setup | Value |
|---|---|---|
| Constant composition | $\mathrm{CO_2}$ held at today's level | $+0.5$ K ([3.1](03-01-ocean-heat-uptake-thermal-inertia.md)) |
| Zero emissions | emissions stop; $\mathrm{CO_2}$ declines | $\approx 0$ |
| Constant emissions | emissions continue at today's rate | large and growing |

The first two differ because the first freezes the *concentration* — which requires the sinks to be artificially switched off. The second is the physically achievable one.

**Reversibility and overshoot.** Because $\Delta T \approx \mathrm{TCRE}\times E_{\text{cum}}$ and $E_{\text{cum}}$ can decrease with net-negative emissions, temperature is roughly reversible. But:

- **Sea level is not.** Thermal expansion continues for centuries, and ice-sheet loss for millennia ([5.3](05-03-sea-level-rise.md)).
- **Ice sheets may pass thresholds** during the overshoot that removing the carbon does not reverse ([5.4](05-04-the-cryosphere.md), [5.6](05-06-tipping-elements-thresholds.md)).
- **Removal is not symmetric with emission.** The airborne fraction of a *removal* is not the airborne fraction of an emission: taking a tonne out of the atmosphere causes the ocean and land to *outgas*, so you must remove more than a tonne to lower atmospheric concentration by one tonne's worth. The asymmetry is roughly a factor of 1.5 to 2.

## Picture

![Global warming plotted against cumulative carbon dioxide emissions since 1850 in PgC. A blue line through the origin with slope 1.65 K per 1000 PgC shows the central TCRE, flanked by a shaded wedge spanning the assessed range 1.0 to 2.3. A coral point marks the present position at 660 PgC and 1.2 K. Dashed lines show that reaching 1.5 K corresponds to about 900 PgC cumulative, leaving a remaining budget of roughly 240 PgC — about 24 years at current emissions — while 2.0 K corresponds to about 1210 PgC](assets/04-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — a national budget).** A country emits 1.5 GtCO₂ per year and pledges to reach net zero in 2050, declining linearly from 2025. (a) Compute its cumulative emissions over that period. (b) Convert to warming using TCRE. (c) Compare with the global remaining 1.5 K budget of 500 GtCO₂.

(a) Linear decline from 1.5 to 0 over 25 years:

$$E = \tfrac12 \times 1.5 \times 25 = 18.75\ \mathrm{GtCO_2}.$$

(b) $$\Delta T = 0.45\ \mathrm{K}\ \text{per}\ 1000\ \mathrm{GtCO_2} \times \frac{18.75}{1000} = 0.0084\ \mathrm{K}.$$

Eight thousandths of a kelvin.

(c) $$\frac{18.75}{500} = 3.8\ \text{percent}$$ of the global budget.

*The point.* TCRE makes national and corporate claims directly commensurable — every emitter's contribution to peak warming is its cumulative emissions times a universal constant, with no need to model anything. It also makes the arithmetic of "we're only 4 percent" visible for what it is: 26 such countries exhaust the entire budget, and the *linear decline* assumption is doing a lot of work — a country that holds flat until 2045 and then crashes to zero emits $1.5\times20 + \tfrac12\times1.5\times5 = 33.75$ GtCO₂, 80 percent more, for the same net-zero date. **Under TCRE, the date is nearly irrelevant and the area under the curve is everything**, which is exactly the property that net-zero-date pledges fail to capture.

**Example 2 (why you'd care — does the emission path matter?).** Two scenarios both emit 500 PgC between now and 2100. Scenario A emits it evenly at 5.6 PgC per year. Scenario B emits 10 PgC per year until 2070 and then zero. (a) Compare peak warming. (b) Compare the warming in 2070. (c) What does this imply about the value of early action?

(a) Both emit 500 PgC, so both reach the same peak warming, $\Delta T = 1.1 + 1.65\times0.5 = 1.93$ K. **Identical.**

(b) In 2070, A has emitted $5.6\times45 = 252$ PgC, giving $1.1+0.42 = 1.52$ K. B has emitted $10\times45 = 450$ PgC, giving $1.1+0.74 = 1.84$ K. B is 0.32 K warmer at that date, then flat; A continues rising to meet it.

(c) Two conclusions that pull in opposite directions, and both are true.

*Peak warming does not care about the path.* If the constraint is peak temperature, then delaying reductions and cutting harder later gives the same outcome as smooth reduction, provided the total is the same. This is a genuine and underappreciated implication of TCRE.

*Everything else does care.* Scenario B spends decades at higher temperature, which means more cumulative heat into the ocean, more sea-level rise (which integrates temperature over time, [5.3](05-03-sea-level-rise.md)), more time spent near ecological thresholds, and more accumulated damage. It also requires an implausibly abrupt transition — 10 PgC per year to zero overnight — and buys no time to develop the technologies it depends on.

*The general principle.* **TCRE says peak temperature is a stock problem; almost every impact is a flow problem.** Framing the whole issue as a budget is exactly right for the temperature target and quietly wrong for damages, which depend on the time-integral of warming rather than its maximum. Keep both framings available and know which question each answers.

## Watch out

- **You might think** TCRE's linearity means the carbon cycle is linear. **Actually** it is the product of three strongly nonlinear factors that happen to cancel. The cancellation degrades beyond about 2000 PgC and at very low emissions, and it is not guaranteed to hold in a model with a different carbon cycle. Treat it as an empirical regularity with a stated range of validity.
- **You might think** reaching net zero will cool the planet. **Actually** the zero-emissions commitment is about zero: temperature roughly holds. Cooling requires **net-negative** emissions, and removing a tonne raises atmospheric concentration by less than emitting a tonne lowered it, because the ocean and land outgas in response. Removal is harder than emission was, by roughly a factor of two.
- **You might think** published carbon budgets disagree because the science is unsettled. **Actually** most of the spread is definitional: target, probability level, base year, and whether non-$\mathrm{CO_2}$ forcing is netted out. Two budgets differing by a factor of two often encode the same physics. Read the footnotes before comparing.

## One-liner

> Peak warming is cumulative emissions times a constant, so a temperature target is a quantity of carbon and net zero is the only stabilizing state — but the constant is a coincidence of three cancelling nonlinearities, and it says nothing about sea level.

## Problems

**P1 (🟢)** Using TCRE $= 1.65$ K per 1000 PgC and warming to date of 1.15 K: (a) compute the remaining budget in PgC for a 1.7 K target; (b) convert to GtCO₂; (c) compute the years remaining at current emissions of 10.8 PgC per year.

**P2 (🟡)** A scenario emits 400 PgC and then achieves net-negative emissions totalling 150 PgC of removals. Take TCRE $= 1.65$ K per 1000 PgC for emissions, and assume removals are only 55 percent as effective per tonne (because the ocean and land outgas). Warming to date is 1.1 K. (a) Compute the peak warming. (b) Compute the warming after the removals. (c) Compute how much removal would be needed to return to 1.5 K, and comment on the scale relative to current global emissions.

**P3 (🔴, optional)** Verify the TCRE cancellation numerically. Take $C_0 = 280$ ppm ($595$ PgC), $F_{2\times} = 3.93\ \mathrm{W\,m^{-2}}$, and model the airborne fraction as $\mathrm{AF} = 0.45 + 0.10\,E_{\text{cum}}/1000$ and the realized-response coefficient as $1/(\lambda+\varepsilon\kappa)$ with $\lambda = 1.3$ and $\varepsilon\kappa = 0.87 - 0.15\,E_{\text{cum}}/1000$ (ocean uptake weakening), all with $E_{\text{cum}}$ in PgC. (a) Compute $\Delta T$ at $E_{\text{cum}} = 500$, 1000, 1500 and 2000 PgC. (b) Compute the implied TCRE at each. (c) Comment on the degree of linearity and identify which factor breaks it first.

<details>
<summary>Solutions</summary>

**P1** (a) $$E = \frac{1.7-1.15}{1.65}\times1000 = \frac{0.55}{1.65}\times1000 = 333\ \mathrm{PgC}.$$

(b) $$333\times3.664 = 1221\ \mathrm{GtCO_2}.$$

(c) $$\frac{333}{10.8} = 31\ \mathrm{yr}.$$

**P2** (a) Peak warming occurs at the end of the positive-emissions phase:

$$\Delta T_{\text{peak}} = 1.1 + 1.65\times\frac{400}{1000} = 1.1 + 0.66 = 1.76\ \mathrm{K}.$$

(b) Removals at 55 percent effectiveness are equivalent to $0.55\times150 = 82.5$ PgC of avoided emissions:

$$\Delta T = 1.76 - 1.65\times\frac{82.5}{1000} = 1.76 - 0.136 = 1.62\ \mathrm{K}.$$

(c) To reach 1.5 K from the 1.76 K peak requires removing $0.26$ K of warming:

$$E_{\text{eff}} = \frac{0.26}{1.65}\times1000 = 158\ \mathrm{PgC\ equivalent}, \qquad E_{\text{removed}} = \frac{158}{0.55} = 287\ \mathrm{PgC}.$$

That is $287\times3.664 = 1050\ \mathrm{GtCO_2}$ of removal — **about 26 years of current total global emissions, run in reverse.** Global engineered removal today is of order 0.01 GtCO₂ per year, so this requires scaling by roughly four orders of magnitude and sustaining it for decades. The energy requirement alone is formidable ([6.5](06-05-scenarios-projections-intervention.md)).

The moral is the asymmetry: it took about 400 PgC of emission to add 0.66 K, and it takes 287 PgC of removal to take back 0.26 K. **Undoing is roughly twice as expensive as doing**, per kelvin, and that factor is pure carbon-cycle physics ([4.2](04-02-ocean-carbon-revelle-factor.md)) rather than economics.

**P3** (a) For each $E$, compute $\mathrm{AF}$, the airborne carbon, the concentration, the forcing, and the response coefficient.

$E = 500$: $\mathrm{AF} = 0.45+0.05 = 0.50$; airborne $= 250$ PgC; $C = (595+250)/2.124 = 398$ ppm; $\Delta F = (3.93/\ln 2)\ln(398/280) = 5.67\times0.3516 = 1.994$; $\varepsilon\kappa = 0.87-0.075 = 0.795$; $\Delta T = 1.994/(1.3+0.795) = 1.994/2.095 = 0.952$ K.

$E = 1000$: $\mathrm{AF} = 0.55$; airborne $= 550$; $C = (595+550)/2.124 = 539$ ppm; $\Delta F = 5.67\ln(539/280) = 5.67\times0.6551 = 3.714$; $\varepsilon\kappa = 0.72$; $\Delta T = 3.714/2.02 = 1.839$ K.

$E = 1500$: $\mathrm{AF} = 0.60$; airborne $= 900$; $C = 704$ ppm; $\Delta F = 5.67\ln(704/280) = 5.67\times0.9219 = 5.227$; $\varepsilon\kappa = 0.645$; $\Delta T = 5.227/1.945 = 2.687$ K.

$E = 2000$: $\mathrm{AF} = 0.65$; airborne $= 1300$; $C = 893$ ppm; $\Delta F = 5.67\ln(893/280) = 5.67\times1.1596 = 6.575$; $\varepsilon\kappa = 0.57$; $\Delta T = 6.575/1.87 = 3.516$ K.

(b) Implied TCRE $= 1000\,\Delta T/E$:

| $E$ (PgC) | $\Delta T$ (K) | TCRE (K per 1000 PgC) |
|---|---|---|
| 500 | 0.952 | 1.90 |
| 1000 | 1.839 | 1.84 |
| 1500 | 2.687 | 1.79 |
| 2000 | 3.516 | 1.76 |

(c) The implied TCRE falls from 1.90 to 1.76 over a fourfold range of cumulative emissions — a **7 percent** decline. That is remarkably flat given that the forcing itself is strongly concave: without the two convex corrections, the implied TCRE would have fallen from $1.994/0.5 = 3.99$ down to $6.575/2 = 3.29$ in forcing terms *and* been further reduced by a constant response coefficient, giving a decline of about 18 percent. The two convex terms recover most of that.

**The logarithm breaks it first.** Its curvature grows steadily as $C/C_0$ increases, while the airborne fraction and the ocean-uptake terms are modelled as linear and eventually run out of room (the airborne fraction cannot exceed 1, and $\varepsilon\kappa$ cannot go below 0 — indeed at $E = 5800$ this parameterization gives $\varepsilon\kappa = 0$, which is unphysical). Beyond about 2000–2500 PgC the cancellation fails and TCRE declines meaningfully, which is exactly what full models show.

*Check.* The absolute values here (1.76–1.90) sit above the assessed central 1.65, because the parameterization is crude and neglects the pattern effect and non-$\mathrm{CO_2}$ interactions. What the exercise establishes is the *shape*, not the level — and the shape is the point: linearity is not assumed anywhere, it emerges from three curved factors.

</details>

## Flashback

**From Lesson 3.4 (Internal variability and the detection problem):** Annual global $\mathrm{CO_2}$ emissions fluctuate about their trend with $\sigma = 0.25\ \mathrm{PgC}$ and lag-1 autocorrelation 0.3. A mitigation policy causes emissions to decline at 1 percent per year from a base of 11 PgC, i.e. a trend of $-0.11\ \mathrm{PgC\,yr^{-1}}$. (a) Compute the standard-error inflation factor for autocorrelation. (b) Compute how many years of data are needed to detect the decline at $t = 2$. (c) Comment on what this implies for verifying that global emissions have peaked.

<details>
<summary>Solution</summary>

(a) $$\sqrt{\frac{1+r}{1-r}} = \sqrt{\frac{1.3}{0.7}} = \sqrt{1.857} = 1.363.$$

(b) Detection at $t = 2$ requires $\mathrm{SE} \le 0.11/2 = 0.055\ \mathrm{PgC\,yr^{-1}}$:

$$1.363\times0.25\times\sqrt{\frac{12}{n(n^2-1)}} \le 0.055 \quad\Longrightarrow\quad \sqrt{\frac{12}{n(n^2-1)}} \le 0.1614,$$
$$n(n^2-1) \ge \frac{12}{0.1614^2} = 460.$$

$n = 7$: $7\times48 = 336$. ✗ $n = 8$: $8\times63 = 504$. ✓

So **8 years**.

(c) It takes roughly a decade of data to establish statistically that a 1-percent-per-year decline in global emissions is real. That has three uncomfortable consequences. A peak can only be confirmed long after it has happened — which is why claims that emissions have peaked are always contested at the time and settled retrospectively. Any single year's drop (the 2020 pandemic dip of about 6 percent, for instance) tells you almost nothing about the trend. And policies must be evaluated on a timescale far shorter than the one on which their effect becomes statistically visible, which is a genuine governance problem, not merely a scientific inconvenience.

*Check.* The partial remedy is that emissions are not only *inferred* from a noisy record — they are *inventoried* from fuel sales, cement production and land-use data, with reported uncertainties around 5 percent for fossil fuels. That is a direct measurement rather than a trend fit, so a policy's effect on the inventory is visible immediately. The statistical problem above applies to the *atmospheric* verification route — inferring emissions from concentration growth — which is noisy precisely because the land sink swings with ENSO ([4.1](04-01-the-carbon-cycle.md), P1). Independent atmospheric verification of national inventories is an active goal, and this calculation is why it is hard.

</details>

## Connections

- **Backward:** the three cancelling factors are [1.3](01-03-bands-saturation-logarithmic-forcing.md)'s logarithm, [4.2](04-02-ocean-carbon-revelle-factor.md)'s weakening buffer and [3.1](03-01-ocean-heat-uptake-thermal-inertia.md)'s ocean uptake; the zero-emissions commitment resolves the ambiguity in "committed warming" flagged in [3.1](03-01-ocean-heat-uptake-thermal-inertia.md).
- **Forward:** carbon budgets and removal are the currency of the scenarios in [6.5](06-05-scenarios-projections-intervention.md); the irreversibility of sea level under a temperature overshoot is [5.3](05-03-sea-level-rise.md) and [5.6](05-06-tipping-elements-thresholds.md).
- **Sideways (economics):** TCRE converts a stock externality into a fixed physical quota, which is what makes cap-and-trade and a carbon price theoretically equivalent instruments for a temperature target — the damage depends on the total, not on who emits or when. The asymmetry between emission and removal, though, breaks that equivalence for offsets. Compare [`micro-refresher` 5.2](../../micro-refresher/lessons/05-02-externalities-public-goods.md).
