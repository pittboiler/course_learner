# Climate Physics · Lesson 3.3: Constraining sensitivity from observations

> ⏱ ~15 min · Module 3: The transient problem · Builds on: [3.2](03-02-tcr-ecs-pattern-effect.md), [2.5](02-05-diagnosing-feedbacks.md), [1.5](01-05-forcing-agents.md) · Unlocks: [3.5](03-05-detection-attribution.md), [6.3](06-03-ice-ages-100-kyr-problem.md)

## Why this matters

For forty years the assessed range for climate sensitivity was 1.5 to 4.5 K. In 2021 it became 2.5 to 4.0 K. That narrowing is the single biggest quantitative advance the field has made this century, and it did not come from a new measurement or a better model. It came from combining **three largely independent lines of evidence in the right variable**, and from finally understanding why the historical record had been giving an answer that was too low. This lesson is about how you actually get a number out of the world — and about the structural reason the high tail is so much harder to close than the low one.

## The idea

**Three routes, three independent kinds of error.**

- **Process**: add up the individual feedbacks ([2.2](02-02-planck-water-vapour-lapse-rate.md)–[2.4](02-04-clouds-the-wild-card.md)) from theory, observation and high-resolution simulation. Errors here are about cloud physics.
- **Historical**: use the observed warming, forcing and energy imbalance since 1850. Errors here are about aerosol forcing and the pattern effect.
- **Paleo**: use a past climate whose temperature and forcing can both be reconstructed — the Last Glacial Maximum, the mid-Pliocene, the PETM. Errors here are about proxies and about state dependence.

**They are independent, which is what makes them powerful.** No shared assumption dominates all three. When three broad, differently-shaped likelihoods with different failure modes all overlap in the same place, their product is much narrower than any of them — and much more trustworthy than a single sharp constraint would be.

**Combine in $\lambda$, not in ECS** ([why](../reference.md#the-reciprocal-tail)). This is the methodological choice that did most of the work. The evidence is roughly Gaussian in the feedback parameter and violently skewed in the sensitivity, because ECS $= F_{2\times}/\lambda$ is a reciprocal ([2.1](02-01-feedbacks-gain-factor.md)). Multiply likelihoods in $\lambda$-space, then transform — never the other way around.

**And the historical constraint had a correctable bias.** The energy-budget estimate looked like it said 2.0 K. Three corrections — the forcing convention, coverage of the observational record, and above all the pattern effect ([3.2](03-02-tcr-ecs-pattern-effect.md)) — move it up to roughly 2.5–3.5 K, which is no longer in tension with the others.

## The formal version

**The energy-budget constraint.** From $N = F - \lambda\Delta T$ applied between two periods,

$$\boxed{\ \mathrm{ECS} = \frac{F_{2\times}\,\Delta T}{\Delta F - \Delta N}\ }$$

*In words: the sensitivity is the doubling forcing times the observed warming, divided by the part of the forcing the planet has actually managed to radiate away.* With AR6 values,

$$\mathrm{ECS} = \frac{3.93 \times 1.03}{2.7 - 0.8} = \frac{4.048}{1.9} = 2.13\ \mathrm{K}.$$

This is **effective** climate sensitivity, not ECS, because $\lambda$ has been evaluated over the historical warming pattern.

Three properties of this expression govern everything:

1. **It is a ratio of small differences.** The denominator, 1.9, is the difference of two numbers each uncertain by tenths. A 15 percent error in $\Delta F$ becomes a 21 percent error in ECS.
2. **The dominant uncertainty is aerosol forcing** ([1.5](01-05-forcing-agents.md)), which alone moves the answer from 1.6 to 3.2 K.
3. **The tail is one-sided.** As the denominator approaches zero, ECS diverges. Symmetric errors in $\Delta F$ give a long upper tail in ECS — always.

**Correcting the historical estimate.** In order of size:

| Correction | Effect on ECS |
|---|---|
| Pattern effect: $\lambda_{\text{eq}} = \lambda_{\text{hist}} - 0.5$ | $+0.7$ to $+1.3$ K |
| Coverage bias in $\Delta T$ (sparse Arctic sampling) | $+0.2$ K |
| Forcing convention (SARF → ERF, consistently) | $-0.2$ K |
| Efficacy of non-$\mathrm{CO_2}$ forcings | $\pm0.2$ K |

Net: the corrected historical constraint centres near 3 K with a wide range, and is no longer the outlier it appeared to be.

**Paleo constraints.** Two epochs do the most work.

*Last Glacial Maximum (21 kyr ago).* $\Delta T \approx -5$ to $-6$ K, total forcing $\approx -8\ \mathrm{W\,m^{-2}}$ of which about $-3.2$ is greenhouse gases, $-3.7$ ice sheets, $-1.1$ dust and vegetation. Treating ice sheets as forcing:

$$\lambda = \frac{8.0}{5.5} = 1.45\ \mathrm{W\,m^{-2}\,K^{-1}} \quad\Longrightarrow\quad \mathrm{ECS} = 2.7\ \mathrm{K}.$$

This bounds the **low** end well — a very low sensitivity cannot produce a 5 K cooling from 8 W m⁻².

*Mid-Pliocene warm period (3.2 Myr) and the PETM (56 Myr).* Warm states, so they probe the *other* side of the state dependence and constrain the high end weakly but usefully.

The caveats are real and specific: proxy temperature reconstructions carry uncertainties of a kelvin or more; the forcing must be reconstructed from ice cores or from indirect $\mathrm{CO_2}$ proxies; and **feedbacks are state-dependent** ([2.3](02-03-surface-albedo-cryosphere-feedback.md)), so a glacial $\lambda$ is not the modern $\lambda$. The last problem is handled by an explicit state-dependence correction, and it is a source of genuine disagreement.

**Emergent constraints.** The idea: find an observable $X$ of the *present* climate that correlates with ECS across an ensemble of models, measure $X$ in the real world, and read off the implied ECS from the regression. Examples that have been proposed:

- **Lower-tropospheric mixing** in the tropics (Sherwood et al. 2014): models with stronger shallow mixing between the boundary layer and the free troposphere dry the boundary layer more under warming, lose more low cloud, and have higher ECS. Observed mixing sits at the high end, implying ECS above 3 K.
- **Southern Ocean cloud phase**: models with too much ice in mixed-phase clouds have too negative an optical-depth feedback ([2.4](02-04-clouds-the-wild-card.md)); satellite observations of supercooled liquid select the higher-ECS models.
- **Seasonal cycle amplitude**, **interannual temperature–radiation regressions**, and a dozen others.

**And the caveats are severe.** A cross-model correlation is not a causal law; models are not independent samples (they share code, parameterizations and lineage); the ensemble is small, so with enough candidate predictors some will correlate with ECS by chance; and published emergent constraints have a strong selection bias toward those that "worked". Most individually proposed constraints have not survived replication in a later model generation. The ones that have survived are those with a *mechanistic story* stated in advance — which is the useful lesson: an emergent constraint is only as good as the physics that predicted it.

**Putting it together.** The 2020 WCRP assessment (Sherwood et al.) formalized the combination as a Bayesian calculation in $\lambda$-space, with three likelihoods: process understanding, historical record and paleoclimate. Roughly:

| Line | $\lambda$ (W m⁻² K⁻¹) | 1$\sigma$ |
|---|---|---|
| Process | 1.35 | 0.44 |
| Historical (pattern-corrected) | 1.30 | 0.50 |
| Paleo | 1.25 | 0.45 |
| **Combined** | **1.30** | **0.27** |

Combining independent Gaussians, precisions add: $\sigma_c^{-2} = \sum\sigma_i^{-2}$. The combined $\sigma$ of 0.27 is nearly half the smallest individual one. Converting,

$$\mathrm{ECS} = \frac{3.93}{1.30} = 3.02\ \mathrm{K}, \qquad \text{5--95 percent: } 2.3\ \text{to}\ 4.6\ \mathrm{K},$$

essentially the AR6 assessment. *In words: three separate lines each too weak to settle the question become, together, decisive.*

**Why the high tail is intrinsically harder.** To exclude ECS $= 6$ K you must exclude $\lambda = 0.65$; to exclude ECS $= 2$ K you must exclude $\lambda = 1.97$. Those are equally distant from the mean in ECS, but $0.65$ is $2.4\sigma$ below the combined mean while $1.97$ is $2.5\sigma$ above — comparable. The asymmetry appears when you go further out: ECS $= 10$ K needs $\lambda = 0.39$, only $3.4\sigma$ away, while ECS $= 1.5$ K needs $\lambda = 2.62$, which is $4.9\sigma$. **Ruling out catastrophic sensitivity requires far more evidence than ruling out benign sensitivity**, and no amount of narrowing in $\lambda$ makes that go away.

## Picture

![Probability densities for equilibrium climate sensitivity from three independent lines of evidence, each broad and right-skewed with peaks between 2.5 and 3.5 K, drawn in grey with different dash patterns: process understanding, the historical record and paleoclimate. Their product, in blue, is much narrower and sharply peaked near 3 K, with 5 to 95 percent bounds marked in coral at 2.3 and 4.6 K. The product's peak is more than three times the height of any individual likelihood, showing how independent constraints multiply](assets/03-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — sensitivity of the estimate to its inputs).** With $F_{2\times} = 3.93$, $\Delta T = 1.03$, $\Delta F = 2.7$, $\Delta N = 0.8$: (a) compute EffCS; (b) recompute with each input perturbed by 10 percent in turn; (c) rank them.

(a) $\mathrm{EffCS} = 4.048/1.9 = 2.13$ K.

(b) $\Delta T \to 1.133$: $\mathrm{EffCS} = 3.93\times1.133/1.9 = 2.34$ K, change $+0.21$.
$\Delta F \to 2.97$: denominator $2.17$, $\mathrm{EffCS} = 4.048/2.17 = 1.87$ K, change $-0.26$.
$\Delta N \to 0.88$: denominator $1.82$, $\mathrm{EffCS} = 4.048/1.82 = 2.22$ K, change $+0.09$.
$F_{2\times} \to 4.32$: $\mathrm{EffCS} = 4.32\times1.03/1.9 = 2.34$ K, change $+0.21$.

(c) $\Delta F$ dominates ($0.26$), then $\Delta T$ and $F_{2\times}$ tied ($0.21$), then $\Delta N$ ($0.09$).

*The point.* $\Delta F$ has the largest *leverage* per unit of relative error **and** the largest actual uncertainty (26 percent, from aerosols) — the two compound. $\Delta N$ is well measured by Argo and has small leverage. So the observational programme with the best return is not better thermometers or better satellites but **better aerosol forcing**, which is the same conclusion [1.5](01-05-forcing-agents.md) reached from the error budget alone. Two independent routes to the same priority is a good sign the priority is real.

**Example 2 (why you'd care — combining two constraints properly).** Study A gives $\lambda = 1.5 \pm 0.5$; Study B gives $\lambda = 1.1 \pm 0.4\ \mathrm{W\,m^{-2}\,K^{-1}}$, independent. (a) Combine them in $\lambda$-space and report ECS. (b) Now combine their ECS values instead, by averaging, and compare. (c) Which is correct and why?

(a) Precisions: $1/0.25 = 4.0$ and $1/0.16 = 6.25$; total 10.25, so $\sigma_c = 10.25^{-1/2} = 0.312$.

$$\lambda_c = \frac{1.5\times4.0 + 1.1\times6.25}{10.25} = \frac{6.0+6.875}{10.25} = 1.256,$$
$$\mathrm{ECS} = \frac{3.93}{1.256} = 3.13\ \mathrm{K}, \qquad \text{1$\sigma$ range } \frac{3.93}{1.568}\ \text{to}\ \frac{3.93}{0.944} = 2.51\ \text{to}\ 4.16\ \mathrm{K}.$$

(b) ECS from each: $3.93/1.5 = 2.62$ K and $3.93/1.1 = 3.57$ K. Simple average: 3.10 K — close by luck. But the *uncertainties* transform badly: A's $\pm0.5$ in $\lambda$ maps to $[2.95, 2.36]$ K, i.e. $-0.26/+0.33$; B's $\pm0.4$ maps to $-0.53/+0.98$. Averaging those asymmetric intervals is not a well-defined operation, and doing it by treating them as symmetric would give a combined range far too narrow on the high side.

(c) **The $\lambda$-space combination is correct**, for three reasons. The likelihoods are approximately Gaussian in $\lambda$ and not in ECS. The precision-weighting formula, which is what "combining independent evidence" actually means, requires Gaussianity. And the physics is additive in $\lambda$ ($\lambda = \lambda_0 - \sum c_i$), so $\lambda$ is the natural variable in which two studies are estimating the *same thing*.

*The general principle.* **Do inference in the variable where your errors are symmetric and your model is linear, then transform at the end.** This is not a climate-specific point — it is the same reason you fit log-odds rather than probabilities, and log-price rather than price. Here it is worth about half the width of the assessed sensitivity range.

## Watch out

- **You might think** the historical record is the most direct evidence and should dominate. **Actually** it is the *least* direct, because it requires knowing the aerosol forcing (which is not observable), and it measures the wrong quantity (effective, not equilibrium, sensitivity). It contributes about a third of the combined precision, no more.
- **You might think** an emergent constraint with $r^2 = 0.8$ across 30 models is strong evidence. **Actually** the effective sample size is far below 30 (models share ancestry), and with dozens of candidate predictors tested across the literature, correlations that strong arise by chance. Demand a mechanism stated in advance and replication in an independent model generation.
- **You might think** the assessed range narrowed because models improved. **Actually** the models' own ECS spread *widened* in CMIP6, with several models above 5 K. The assessed range narrowed *despite* that, because AR6 for the first time did not simply report the model spread — it combined independent evidence in $\lambda$-space and used it to judge the models, several of which were assessed as too sensitive. That methodological shift is the headline, and it is worth understanding as a piece of scientific practice rather than of physics.

## One-liner

> No single line of evidence settles climate sensitivity; three independent broad ones, multiplied in the variable where the errors are symmetric, do — and the reason the upper tail stays stubborn is that it lives where the denominator approaches zero.

## Problems

**P1 (🟢)** Using $\mathrm{ECS} = F_{2\times}\Delta T/(\Delta F - \Delta N)$ with $F_{2\times} = 3.93$: (a) compute ECS for $\Delta T = 1.10$ K, $\Delta F = 2.60$, $\Delta N = 0.75\ \mathrm{W\,m^{-2}}$. (b) Repeat with $\Delta F = 2.20$ (a stronger aerosol offset). (c) State the percentage change in ECS for the 15 percent change in $\Delta F$.

**P2 (🟡)** Three independent studies give $\lambda = 1.45\pm0.40$, $1.15\pm0.55$ and $1.30\pm0.35\ \mathrm{W\,m^{-2}\,K^{-1}}$. (a) Combine by precision weighting and report the combined mean and standard deviation. (b) Convert to ECS and give the central value and the 5–95 percent range ($\pm1.645\sigma$ in $\lambda$). (c) Comment on the symmetry of the resulting ECS interval.

**P3 (🔴, optional)** An emergent constraint regresses ECS against a present-day observable $X$ across 25 models, obtaining $\mathrm{ECS} = 1.2 + 0.45X$ with residual standard deviation 0.55 K, and the models span $X$ from 1 to 6. The observed value is $X_{\text{obs}} = 4.6 \pm 0.5$. (a) Compute the constrained ECS and propagate both uncertainties. (b) The 25 models come from 12 modelling centres, several sharing components. Estimate the effective number of independent models and comment on how that affects the regression's standard error. (c) The constraint was found by testing 40 candidate observables. Estimate the probability that at least one uncorrelated observable would have shown $|r| \ge 0.6$ across 25 points by chance, taking $P(|r|\ge0.6 \mid n=25) \approx 0.0015$ for a single test, and state what this implies about how to read the result.

<details>
<summary>Solutions</summary>

**P1** (a) $$\mathrm{ECS} = \frac{3.93\times1.10}{2.60-0.75} = \frac{4.323}{1.85} = 2.34\ \mathrm{K}.$$

(b) $$\mathrm{ECS} = \frac{4.323}{2.20-0.75} = \frac{4.323}{1.45} = 2.98\ \mathrm{K}.$$

(c) $\Delta F$ fell by $0.40/2.60 = 15.4$ percent; ECS rose by $(2.98-2.34)/2.34 = 27$ percent. The amplification factor is $\Delta F/(\Delta F - \Delta N) = 2.60/1.85 = 1.41$, and $15.4\times1.41 = 21.7$ percent to first order; the extra 5 points come from the nonlinearity of the reciprocal, which always inflates the upward excursion.

**P2** (a) Precisions: $1/0.40^2 = 6.25$, $1/0.55^2 = 3.306$, $1/0.35^2 = 8.163$. Sum $= 17.72$.

$$\lambda_c = \frac{1.45(6.25)+1.15(3.306)+1.30(8.163)}{17.72} = \frac{9.063+3.802+10.612}{17.72} = \frac{23.477}{17.72} = 1.325,$$
$$\sigma_c = 17.72^{-1/2} = 0.238\ \mathrm{W\,m^{-2}\,K^{-1}}.$$

(b) $$\mathrm{ECS} = \frac{3.93}{1.325} = 2.97\ \mathrm{K}.$$

$\pm1.645\sigma$ in $\lambda$: $1.325 \pm 0.391$, i.e. $[0.934, 1.716]$. Converting (note the reversal):

$$\mathrm{ECS} \in \left[\frac{3.93}{1.716},\ \frac{3.93}{0.934}\right] = [2.29,\ 4.21]\ \mathrm{K}.$$

(c) The interval is $-0.68/+1.24$ about the central 2.97 — the upper half is 1.8 times the lower. The Gaussian in $\lambda$ was perfectly symmetric; the asymmetry is entirely manufactured by the reciprocal, exactly as in [2.1](02-01-feedbacks-gain-factor.md).

**P3** (a) $$\mathrm{ECS} = 1.2 + 0.45\times4.6 = 1.2 + 2.07 = 3.27\ \mathrm{K}.$$

Two uncertainty sources, added in quadrature:
- from the observation: $0.45\times0.5 = 0.225$ K;
- from the regression residual: $0.55$ K.

$$\sigma = \sqrt{0.225^2 + 0.55^2} = \sqrt{0.0506+0.3025} = \sqrt{0.3531} = 0.594\ \mathrm{K}.$$

So $\mathrm{ECS} = 3.27 \pm 0.59$ K — which is *not* obviously narrower than the assessed range, and that is worth noticing before treating the constraint as decisive.

(b) With 25 models from 12 centres and shared components, a reasonable estimate of the effective sample size is the number of centres or fewer — say $n_{\text{eff}} \approx 10$. Regression standard errors scale as $n^{-1/2}$, so the true standard error on the slope is larger than reported by $\sqrt{25/10} = 1.58$. The residual-driven uncertainty on the constrained ECS should be inflated correspondingly, to roughly $0.55\times1.58 = 0.87$ K, giving $\sigma \approx 0.90$ K overall. **The constraint is then barely narrower than the prior**, which is the honest reading.

(c) With 40 independent tests each having probability 0.0015 of a spurious $|r|\ge0.6$:

$$P(\text{at least one}) = 1 - (1-0.0015)^{40} = 1 - (0.9985)^{40} = 1 - 0.9417 = 0.058,$$

about 6 percent. Low, but not negligible — and the calculation understates the risk badly, because the 40 candidates were not independent of one another, because the literature-wide number of candidates tested across all groups is far more than 40, and because only the successful ones were published. The implication: **a published emergent constraint's nominal $p$-value is close to meaningless as evidence.** What makes one credible is (i) a physical mechanism specified *before* the correlation was measured, (ii) survival into an independent model generation, and (iii) the constrained quantity being consistent with other lines of evidence. Constraints that meet all three — such as the mixed-phase cloud one of [2.4](02-04-clouds-the-wild-card.md) — did contribute to AR6; most did not.

*Check.* Notice that (a), (b) and (c) each individually weaken the constraint, and they compound. That is the general pattern with emergent constraints, and it is why AR6 treated them as one input to the "process" line rather than as a fourth independent line of evidence.

</details>

## Flashback

**From Lesson 3.1 (Ocean heat uptake and thermal inertia):** A planet has $\lambda = 1.2\ \mathrm{W\,m^{-2}\,K^{-1}}$ and an effective heat capacity of $C = 5.0\times10^{8}\ \mathrm{J\,m^{-2}\,K^{-1}}$, and is subjected to a step forcing of $3.0\ \mathrm{W\,m^{-2}}$. (a) Compute $\tau$ in years and the equilibrium warming. (b) Compute the warming and the remaining top-of-atmosphere imbalance after 20 years. (c) Suppose an observer at year 20 applies the energy-budget formula $\lambda = (F-N)/\Delta T$ using those values. What do they get, and is it right?

<details>
<summary>Solution</summary>

(a) $$\tau = \frac{C}{\lambda} = \frac{5.0\times10^{8}}{1.2} = 4.17\times10^{8}\ \mathrm{s} = 13.2\ \mathrm{yr}, \qquad \Delta T_{\text{eq}} = \frac{3.0}{1.2} = 2.50\ \mathrm{K}.$$

(b) $$\Delta T(20) = 2.50\left(1-e^{-20/13.2}\right) = 2.50\left(1-0.2199\right) = 1.95\ \mathrm{K},$$
$$N = F - \lambda\Delta T = 3.0 - 1.2\times1.95 = 3.0 - 2.34 = 0.66\ \mathrm{W\,m^{-2}}.$$

(c) $$\lambda_{\text{inferred}} = \frac{3.0-0.66}{1.95} = \frac{2.34}{1.95} = 1.20\ \mathrm{W\,m^{-2}\,K^{-1}}.$$

**Exactly right** — and that is the point worth extracting. For a *single-box* system with a *constant* $\lambda$, the energy-budget formula is exact at every instant, no matter how far from equilibrium; it is algebra, not an approximation. The observer recovers the true sensitivity from a system only 78 percent of the way there.

So why does the method fail on the real Earth? Not because the planet is out of equilibrium. It fails for two reasons this lesson and [3.2](03-02-tcr-ecs-pattern-effect.md) identify: $\lambda$ is **not constant** (it depends on the warming pattern, and the historical pattern is unrepresentative), and $F$ is **not known** (aerosol forcing carries a factor-of-four uncertainty). Both are failures of the *inputs*, not of the formula.

*Check.* This is a useful diagnostic to carry: whenever a method appears to fail, check whether it fails on the idealized problem it was designed for. The energy-budget method does not, which immediately localizes the fault to the inputs and tells you where to spend effort — on aerosols and on the pattern effect, not on a better equation.

</details>

## Connections

- **Backward:** the pattern-effect correction is [3.2](03-02-tcr-ecs-pattern-effect.md)'s; the aerosol uncertainty that dominates $\Delta F$ is [1.5](01-05-forcing-agents.md)'s; the "combine in $\lambda$-space" argument is [2.1](02-01-feedbacks-gain-factor.md)'s skew result used constructively.
- **Forward:** the paleo line of evidence is developed in [6.3](06-03-ice-ages-100-kyr-problem.md) and [6.4](06-04-deep-time-slow-thermostat.md); the detection machinery that validates the historical $\Delta T$ is [3.5](03-05-detection-attribution.md)'s.
- **Sideways (Bayesian inference):** the whole calculation is a product of independent likelihoods with a prior, and the choice of variable is a choice of parameterization — a live issue because a flat prior in $\lambda$ is not a flat prior in ECS, and the difference shows up entirely in the tail. See [`prob-stat-refresher` 1.2](../../prob-stat-refresher/lessons/01-02-conditional-probability-bayes.md); the precision-addition rule for combining independent Gaussians is [`prob-stat-refresher` 3.2](../../prob-stat-refresher/lessons/03-02-sums-and-law-of-large-numbers.md).
