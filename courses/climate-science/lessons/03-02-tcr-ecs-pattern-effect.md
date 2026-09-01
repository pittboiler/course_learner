# Climate Physics · Lesson 3.2: TCR, ECS and the pattern effect

> ⏱ ~15 min · Module 3: The transient problem · Builds on: [3.1](03-01-ocean-heat-uptake-thermal-inertia.md), [2.5](02-05-diagnosing-feedbacks.md), [2.4](02-04-clouds-the-wild-card.md) · Unlocks: [3.3](03-03-constraining-sensitivity-observations.md)

## Why this matters

Two [sensitivities](../reference.md#equilibrium-climate-sensitivity-ecs) circulate, and they answer different questions. **ECS** is where the planet ends up; **TCR** is where it is when the $\mathrm{CO_2}$ doubles, which for any realistic emissions path is the number that describes this century. TCR is about 60 percent of ECS, and understanding why is [3.1](03-01-ocean-heat-uptake-thermal-inertia.md)'s ocean uptake. But there is a second, subtler reduction on top of that — the **pattern effect** — which says that $\lambda$ itself is smaller in the long run than in the short run, because *where* the ocean warms changes over time and the feedbacks care where. For about a decade this was the largest unresolved discrepancy in the field: observations said sensitivity was low, models said it was higher, and the pattern effect is most of the reconciliation.

## The idea

**TCR is defined by an experiment, not by a limit.** Increase $\mathrm{CO_2}$ at 1 percent per year; after 70 years it has doubled; report the warming, averaged over years 60–80. That is the transient climate response. It bakes in a particular forcing history and a particular amount of ocean heat uptake, which is a feature — it makes TCR the quantity most directly comparable to the observed record.

**TCR is smaller than ECS for one reason: the ocean is still absorbing.** During the transient, the top-of-atmosphere balance is $F = (\lambda + \varepsilon\kappa)\Delta T$ rather than $F = \lambda\Delta T$, because a fraction of the forcing is going downward instead of being radiated. Ocean uptake acts as an additional damping term. With $\lambda = 1.3$ and $\varepsilon\kappa \approx 0.87$, TCR $= 3.93/2.17 = 1.81$ K against ECS $= 3.02$ K — a ratio of 0.60.

**The pattern effect is a different and less obvious reduction.** It says the feedback parameter $\lambda$ depends on the *spatial pattern* of surface warming, not just its global mean. Two warmings of the same global magnitude but different geography produce different amounts of outgoing radiation. Since the pattern evolves — the ocean warms unevenly, fast in some places and slow in others — $\lambda$ drifts with time. That is the curvature in the Gregory plot of [2.5](02-05-diagnosing-feedbacks.md), and it is why the effective sensitivity inferred from a short record is systematically too low.

**The mechanism is in the tropical Pacific.** The tropics are a nearly-isothermal free troposphere: convection over the warm pool sets an upper-level temperature that is then communicated across the entire tropical belt, because the Coriolis parameter is small there and horizontal temperature gradients cannot be sustained (the **weak temperature gradient** approximation). So warming the *west* Pacific warms the free troposphere everywhere in the tropics — including over the cool eastern Pacific, where it *strengthens the inversion* capping the stratocumulus decks, thickening the low cloud and reflecting more sunlight. Strongly stabilizing. Warming the *east* Pacific instead warms the surface under those decks without warming the free troposphere as much, weakening the inversion and thinning the cloud. Weakly stabilizing, or not at all.

**The historical warming pattern has been the stabilizing one.** Since 1980 the west Pacific and Indian Ocean have warmed while the eastern equatorial Pacific cold tongue has warmed little or even cooled. Models forced with $\mathrm{CO_2}$ produce the opposite eventually. So the historical record has sampled a period of unusually strong negative feedback — which makes the observationally-inferred $\lambda$ too high and the inferred ECS too low.

## The formal version

**Definitions.**

| Quantity | Definition | Assessed value (AR6) |
|---|---|---|
| ECS | equilibrium warming for $2\times\mathrm{CO_2}$, fast feedbacks only | 3.0 K [2.5–4.0] |
| TCR | warming at year 70 of a 1 percent per year $\mathrm{CO_2}$ increase | 1.8 K [1.4–2.2] |
| EffCS | $F_{2\times}\Delta T/(F - N)$ from a finite record | period-dependent, typically below ECS |
| ESS | Earth system sensitivity, including ice sheets and vegetation | roughly 1.5 × ECS |

**TCR from the two-layer model.** In the transient, with the deep ocean much colder than the surface,

$$F = \lambda\,\Delta T + N, \qquad N = \varepsilon\kappa\,\Delta T \quad\Longrightarrow\quad \mathrm{TCR} = \frac{F_{2\times}}{\lambda + \varepsilon\kappa}.$$

*In words: the transient response is the equilibrium response with the feedback inflated by the ocean's heat uptake.* Note the immediate corollary:

$$\frac{\mathrm{TCR}}{\mathrm{ECS}} = \frac{\lambda}{\lambda + \varepsilon\kappa},$$

so the ratio is **not a constant** — a model with a small $\lambda$ (high ECS) has a lower TCR/ECS ratio, because ocean uptake is a larger fraction of the total damping. This is why the spread in TCR across models is much narrower than the spread in ECS: the two terms in the denominator partly compensate. **TCR is the better-constrained quantity, and it is the one that matters for this century.**

**The pattern effect, formally.** Write the feedback parameter as depending on the warming pattern:

$$N = F - \lambda(\text{pattern})\,\Delta T.$$

Define the pattern effect as the difference between the effective feedback during the historical period and the long-term equilibrium value:

$$\Delta\lambda \equiv \lambda_{\text{hist}} - \lambda_{\text{eq}} \approx 0.5\ \mathrm{W\,m^{-2}\,K^{-1}}, \qquad \text{uncertainty} \approx \pm0.3.$$

*In words: the climate has been shedding heat about half a watt per square metre per kelvin more efficiently over the historical period than it will in the long run.*

**Why the tropical Pacific has so much leverage.** Three ingredients stack:

1. **Weak temperature gradient.** In the tropics the Coriolis parameter $f = 2\Omega\sin\phi$ is small ([atmospheric-science 4.2](../../atmospheric-science/lessons/04-02-coriolis-effect.md)), so pressure gradients cannot be balanced by rotation and are instead wiped out by gravity waves in days. The free-tropospheric temperature is therefore nearly uniform across the whole tropical belt, and it is set by the *warmest* surface waters, where deep convection occurs.

2. **Convective control.** Only the warm pool convects. Its SST therefore sets the tropical free-troposphere temperature, which is then exported everywhere.

3. **Inversion strength controls low cloud.** The subtropical stratocumulus decks sit under a temperature inversion whose strength is the difference between the free-troposphere temperature (set by the warm pool) and the local SST. A stronger inversion traps a moister, more persistent, thicker cloud deck. This is quantified as the **estimated inversion strength**, and it is the single best empirical predictor of low-cloud cover.

Put together: warming the warm pool while the cold tongue stays put strengthens inversions everywhere and *increases* low cloud, which reflects more sunlight — a large negative feedback. Warming the cold tongue does the reverse.

**Numbers.** The historical record (1870–2020) with $F = 2.72$, $\Delta T = 1.2$, $N = 0.8$ gives

$$\lambda_{\text{hist}} = \frac{2.72-0.8}{1.2} = 1.60\ \mathrm{W\,m^{-2}\,K^{-1}} \quad\Longrightarrow\quad \mathrm{EffCS} = \frac{3.93}{1.60} = 2.46\ \mathrm{K}.$$

Correcting for the pattern effect, $\lambda_{\text{eq}} = 1.60 - 0.5 = 1.10$:

$$\mathrm{ECS} = \frac{3.93}{1.10} = 3.57\ \mathrm{K}.$$

*In words: the same observations that appear to say 2.5 K say 3.6 K once you allow that the warming pattern so far has been unrepresentatively stabilizing.* The correction is large — more than a kelvin — and it is the main reason the observational and model-based estimates, which looked irreconcilable in 2014, now agree.

**Is the observed pattern forced or internal?** This is the live question and it matters enormously. If the eastern Pacific's failure to warm is **internal variability** (a multi-decadal excursion), then it will reverse, models are right, and the pattern effect correction is appropriate. If it is a **forced response** that models systematically miss — for instance because they get the ocean's thermostat mechanism or the Walker circulation response wrong — then the stabilizing pattern persists, and warming this century is slower than projected while the eventual equilibrium is unchanged. Models overwhelmingly produce eastern Pacific warming under $\mathrm{CO_2}$; observations show the opposite trend over 40 years; the discrepancy exceeds what models' own internal variability produces. Nobody has closed this, and it is arguably the most consequential open observational problem in the field.

## Picture

![A schematic east-west cross-section of the equatorial Pacific from the surface to the tropopause. On the left, the west Pacific warm pool at 30 degrees Celsius drives a deep convective tower with an anvil near the tropopause. On the right, the east Pacific cold tongue at 24 degrees sits under subsidence, capped by a stratocumulus deck beneath an inversion. Walker circulation arrows run eastward aloft, downward over the east, and back westward as trade winds at the surface. A dashed line across the whole tropics marks the free troposphere, which is at essentially one temperature because horizontal gradients cannot be sustained. Annotations state that warming the west strengthens the inversion and increases low cloud, giving a strongly stabilizing feedback, while warming the east weakens the inversion and reduces low cloud](assets/03-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — TCR from feedback and uptake).** A model has $\lambda = 1.05\ \mathrm{W\,m^{-2}\,K^{-1}}$, ocean heat uptake efficiency $\kappa = 0.72$, efficacy $\varepsilon = 1.25$, and $F_{2\times} = 3.93$. (a) Compute ECS and TCR. (b) Compute TCR/ECS. (c) A second model has $\lambda = 1.75$ with the same $\kappa$ and $\varepsilon$; repeat and compare the ratios.

(a) $$\mathrm{ECS} = \frac{3.93}{1.05} = 3.74\ \mathrm{K}, \qquad \varepsilon\kappa = 1.25\times0.72 = 0.90,$$
$$\mathrm{TCR} = \frac{3.93}{1.05+0.90} = \frac{3.93}{1.95} = 2.02\ \mathrm{K}.$$

(b) $$\frac{\mathrm{TCR}}{\mathrm{ECS}} = \frac{1.05}{1.95} = 0.54.$$

(c) Second model: ECS $= 3.93/1.75 = 2.25$ K; TCR $= 3.93/2.65 = 1.48$ K; ratio $= 1.75/2.65 = 0.66$.

*The point.* The ECS values differ by 1.49 K (3.74 against 2.25, a 66 percent difference); the TCR values differ by only 0.54 K (2.02 against 1.48, 36 percent). **Ocean uptake compresses the spread**, because it adds the same absolute damping to both models and therefore matters proportionally more to the low-$\lambda$ one. This is why TCR is better constrained than ECS both across models and from observations, and it is a good reason to argue about this century in terms of TCR.

**Example 2 (why you'd care — reconciling an observational study with models).** A 2014-vintage study reports ECS $= 2.0$ K from the energy budget over 1860–2010, using $F_{2\times} = 3.71$, $\Delta F = 2.30$, $\Delta T = 0.85$ K, $\Delta N = 0.65\ \mathrm{W\,m^{-2}}$. Models of the day said 3.2 K. Reconcile them.

Reproduce the study's number:

$$\lambda_{\text{eff}} = \frac{\Delta F - \Delta N}{\Delta T} = \frac{2.30-0.65}{0.85} = 1.94\ \mathrm{W\,m^{-2}\,K^{-1}}, \qquad \mathrm{EffCS} = \frac{3.71}{1.94} = 1.91\ \mathrm{K}.$$

Now apply the three corrections that have since been identified.

1. **Forcing definition** ([1.4](01-04-radiative-forcing-defined.md)): move to ERF. $F_{2\times}$ goes 3.71 → 3.93 and $\Delta F$ goes 2.30 → 2.72. Recompute: $\lambda_{\text{eff}} = (2.72-0.65)/0.85 = 2.44$, EffCS $= 3.93/2.44 = 1.61$ K. *Lower* — because the historical forcing rose proportionally more than $F_{2\times}$ did.

2. **Observational coverage** — the historical temperature record was sparsely sampled in the fast-warming Arctic, biasing $\Delta T$ low. Corrected records give about $0.95$ K rather than 0.85. Recompute: $\lambda_{\text{eff}} = 2.07/0.95 = 2.18$, EffCS $= 1.80$ K.

3. **Pattern effect**: subtract $\Delta\lambda = 0.5$. $\lambda_{\text{eq}} = 2.18 - 0.5 = 1.68$, so

$$\mathrm{ECS} = \frac{3.93}{1.68} = 2.34\ \mathrm{K}.$$

Still on the low side, and applying a larger but defensible $\Delta\lambda = 0.8$ gives $3.93/1.38 = 2.85$ K, essentially the model value.

*The general principle.* The 2014 discrepancy was not one error but a stack of them, each modest, all in the same direction. **When an inference is a ratio of small differences of uncertain quantities, small systematic errors compound rather than cancel** — and the pattern effect, which was not even recognized as a distinct term at the time, was the largest. This is also a caution about the reverse: nothing here proves the corrections are all correct, and if the observed Pacific pattern turns out to be forced rather than internal, correction 3 evaporates.

## Watch out

- **You might think** TCR/ECS is a fixed number like 0.6 that can be used to convert between them. **Actually** it is $\lambda/(\lambda+\varepsilon\kappa)$, which falls as $\lambda$ falls, so high-sensitivity models have *lower* ratios. Converting a TCR to an ECS with a fixed factor systematically compresses the high tail.
- **You might think** the pattern effect means models are wrong about the physics. **Actually** models contain the pattern effect — it is visible as the curvature in their own Gregory plots ([2.5](02-05-diagnosing-feedbacks.md)). What is disputed is whether they get the *observed* historical pattern right, which is a question about ocean dynamics and internal variability, not about feedbacks.
- **You might think** ECS is the number that matters. **Actually** for anything on a hundred-year horizon, TCR (or better, TCRE, [4.4](04-04-tcre-carbon-budgets-net-zero.md)) is the operative quantity, because the system will be nowhere near equilibrium. ECS matters for the eventual state, for sea level, and for interpreting paleoclimate — all important, none of them the twenty-first century.

## One-liner

> The transient response is smaller than the equilibrium one because the ocean is still absorbing, and smaller again because the pattern of warming so far has been the kind the planet is unusually good at radiating away.

## Problems

**P1 (🟢)** A model has $\lambda = 1.4\ \mathrm{W\,m^{-2}\,K^{-1}}$, $\kappa = 0.65$, $\varepsilon = 1.2$, $F_{2\times} = 3.93$. (a) Compute ECS. (b) Compute TCR. (c) Compute TCR/ECS.

**P2 (🟡)** Historical estimates give $\Delta F = 2.72$, $\Delta T = 1.15$ K, $\Delta N = 0.75\ \mathrm{W\,m^{-2}}$, $F_{2\times}=3.93$. (a) Compute $\lambda_{\text{hist}}$ and the effective climate sensitivity. (b) Apply pattern-effect corrections of $\Delta\lambda = 0.3$, $0.5$ and $0.8\ \mathrm{W\,m^{-2}\,K^{-1}}$ and report the three ECS values. (c) Comment on the shape of the resulting range and identify what would happen for $\Delta\lambda = 1.2$.

**P3 (🔴, optional)** In the weak-temperature-gradient picture, the tropical free-troposphere temperature $T_{\text{ft}}$ is set by the warm pool SST $T_w$ via moist-adiabatic amplification, $\Delta T_{\text{ft}} = a\,\Delta T_w$ with $a \approx 2$. Estimated inversion strength over a stratocumulus region is $\mathrm{EIS} = T_{\text{ft}} - T_{\text{sst,east}}$ (schematically), and low-cloud fraction responds as $\Delta f_{\text{low}} = b\,\Delta\mathrm{EIS}$ with $b = 0.06$ per kelvin. Low cloud has albedo 0.5 against ocean's 0.06 under local insolation 400 W m⁻², over 20 percent of Earth's surface. (a) For a pattern in which the warm pool warms 1.0 K and the east Pacific 0.2 K, compute $\Delta\mathrm{EIS}$ and the change in low-cloud fraction. (b) Convert to a global radiative flux change and hence to a contribution to $\lambda$, using the global-mean warming of 0.6 K implied by this pattern. (c) Repeat for a pattern in which the warm pool warms 0.6 K and the east Pacific 1.4 K, and comment on the difference in $\lambda$.

<details>
<summary>Solutions</summary>

**P1** (a) $$\mathrm{ECS} = \frac{3.93}{1.4} = 2.81\ \mathrm{K}.$$

(b) $\varepsilon\kappa = 1.2\times0.65 = 0.78$, so

$$\mathrm{TCR} = \frac{3.93}{1.4+0.78} = \frac{3.93}{2.18} = 1.80\ \mathrm{K}.$$

(c) $$\frac{1.80}{2.81} = 0.64 \quad\left(= \frac{1.4}{2.18}\right).$$

**P2** (a) $$\lambda_{\text{hist}} = \frac{2.72-0.75}{1.15} = \frac{1.97}{1.15} = 1.71\ \mathrm{W\,m^{-2}\,K^{-1}}, \qquad \mathrm{EffCS} = \frac{3.93}{1.71} = 2.30\ \mathrm{K}.$$

(b) $\Delta\lambda = 0.3$: $\lambda_{\text{eq}} = 1.41$, ECS $= 2.79$ K.
$\Delta\lambda = 0.5$: $\lambda_{\text{eq}} = 1.21$, ECS $= 3.25$ K.
$\Delta\lambda = 0.8$: $\lambda_{\text{eq}} = 0.91$, ECS $= 4.32$ K.

(c) The range is strongly right-skewed: equal increments in $\Delta\lambda$ (0.2, then 0.3) give ECS increments of 0.46 K then 1.07 K. This is [2.1](02-01-feedbacks-gain-factor.md)'s convexity again — ECS is $1/\lambda$, and $\lambda$ is being pushed toward zero.

At $\Delta\lambda = 1.2$: $\lambda_{\text{eq}} = 1.71-1.2 = 0.51$, ECS $= 7.7$ K; at $\Delta\lambda = 1.71$, $\lambda_{\text{eq}} = 0$ and ECS is infinite. **The pattern-effect correction therefore cannot be applied naively as a large number** — the uncertainty on $\Delta\lambda$ propagates into an unbounded ECS tail, which is precisely why AR6 combined the historical constraint with paleo and process evidence rather than relying on it alone.

**P3** (a) $$\Delta T_{\text{ft}} = 2\times1.0 = 2.0\ \mathrm{K}, \qquad \Delta\mathrm{EIS} = 2.0 - 0.2 = 1.8\ \mathrm{K},$$
$$\Delta f_{\text{low}} = 0.06\times1.8 = +0.108.$$

Low cloud increases by nearly 11 percentage points — strongly stabilizing.

(b) Albedo change over the stratocumulus region: $0.108\times(0.50-0.06) = 0.0475$. Extra reflected sunlight locally: $0.0475\times400 = 19.0\ \mathrm{W\,m^{-2}}$. Over 20 percent of the globe:

$$\Delta N = -19.0\times0.20 = -3.80\ \mathrm{W\,m^{-2}}.$$

Per kelvin of global-mean warming (0.6 K):

$$\text{contribution to }\lambda = \frac{3.80}{0.6} = +6.3\ \mathrm{W\,m^{-2}\,K^{-1}}.$$

(c) Second pattern: $\Delta T_{\text{ft}} = 2\times0.6 = 1.2$, $\Delta\mathrm{EIS} = 1.2 - 1.4 = -0.2$ K, so $\Delta f_{\text{low}} = -0.012$ — low cloud *decreases*. Albedo change $-0.012\times0.44 = -0.0053$; local flux $+2.11\ \mathrm{W\,m^{-2}}$; globally $+0.42\ \mathrm{W\,m^{-2}}$. Global-mean warming implied is again about 0.6–1.0 K, so the contribution to $\lambda$ is roughly $-0.5$ W m⁻² K⁻¹ — *destabilizing*.

The two patterns, with comparable global-mean warming, give feedback contributions differing by nearly 7 W m⁻² K⁻¹ in this crude calculation. The real numbers are far smaller (the parameterization here exaggerates $b$ and applies the full contrast over too large an area), but **the sign flip and the enormous leverage are real**, and they are why a few tenths of a kelvin of difference in eastern-Pacific SST trends is worth more to the sensitivity problem than most global-mean quantities.

*Check.* Sanity-check the direction against the mechanism: a pattern that warms the convecting region relative to the subsiding region must strengthen inversions and thicken low cloud, hence stabilize. The calculation gives exactly that in (a) and the reverse in (c), so the algebra has not flipped a sign. And note the deep connection to [2.4](02-04-clouds-the-wild-card.md): the pattern effect is, mechanistically, **the low-cloud feedback evaluated on a different warming pattern**. The wild card and the pattern effect are the same wild card.

</details>

## Flashback

**From Lesson 1.3 (Bands, saturation & why forcing is logarithmic):** A scenario reaches 700 ppm $\mathrm{CO_2}$ by 2100, from 420 ppm today and 280 ppm pre-industrial. (a) Compute the additional forcing between now and 2100. (b) Compute the total forcing relative to pre-industrial. (c) Express the 2100 concentration in doublings of pre-industrial, and use it to check (b) against the per-doubling value.

<details>
<summary>Solution</summary>

(a) $$\Delta F = 5.35\ln\!\left(\frac{700}{420}\right) = 5.35\ln(1.667) = 5.35 \times 0.5108 = 2.73\ \mathrm{W\,m^{-2}}.$$

(b) $$\Delta F = 5.35\ln\!\left(\frac{700}{280}\right) = 5.35\ln(2.5) = 5.35\times0.9163 = 4.90\ \mathrm{W\,m^{-2}}.$$

(c) $$n = \frac{\ln 2.5}{\ln 2} = \frac{0.9163}{0.6931} = 1.322\ \text{doublings}.$$

Check: $1.322 \times 3.71 = 4.90\ \mathrm{W\,m^{-2}}$. ✓ (Using the SARF-convention 3.71; with ERF's 3.93 the total is $1.322\times3.93 = 5.20$, and the coefficient in the logarithmic formula would correspondingly be $3.93/\ln 2 = 5.67$ rather than 5.35 — a reminder from [1.4](01-04-radiative-forcing-defined.md) to keep conventions consistent.)

*Check.* Worth noting what this scenario implies with this lesson's machinery. Warming in 2100 is a *transient* quantity, so use TCR-like reasoning rather than ECS: with $\lambda + \varepsilon\kappa = 2.17\ \mathrm{W\,m^{-2}\,K^{-1}}$, the warming at 2100 is roughly $4.90/2.17 = 2.26$ K above pre-industrial, whereas the eventual equilibrium at that composition would be $4.90/1.3 = 3.77$ K. The gap of 1.5 K is what the ocean is holding back — and the gap is *larger* than the entire warming to date, which is a compact statement of why "how fast" and "how much" must be kept separate.

</details>

## Connections

- **Backward:** the transient balance and the efficacy $\varepsilon$ are [3.1](03-01-ocean-heat-uptake-thermal-inertia.md)'s; the Gregory-plot curvature is [2.5](02-05-diagnosing-feedbacks.md)'s, now explained; the low-cloud mechanism is [2.4](02-04-clouds-the-wild-card.md)'s, now evaluated on a pattern instead of on a global mean.
- **Forward:** [3.3](03-03-constraining-sensitivity-observations.md) applies the pattern-effect correction to the full observational constraint; [3.4](03-04-internal-variability-detection.md) takes up the question of whether the observed Pacific trend is forced or internal.
- **Sideways (oceanography):** the Walker circulation, the cold tongue and the mechanisms that set the east–west Pacific gradient — including the Bjerknes feedback that could make the gradient self-reinforcing — belong to [`oceanography`](../../oceanography/syllabus.md); this course cites them and owns only their radiative consequences. The weak-temperature-gradient argument rests on the smallness of $f$ near the equator, from [atmospheric-science 4.2](../../atmospheric-science/lessons/04-02-coriolis-effect.md).
