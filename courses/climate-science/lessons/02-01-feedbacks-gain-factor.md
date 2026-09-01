# Climate Physics · Lesson 2.1: Feedbacks and the gain factor

> ⏱ ~15 min · Module 2: Feedbacks & climate sensitivity · Builds on: [1.4](01-04-radiative-forcing-defined.md), [1.1](01-01-climate-system-timescales.md) · Unlocks: [2.2](02-02-planck-water-vapour-lapse-rate.md), [2.3](02-03-surface-albedo-cryosphere-feedback.md), [2.4](02-04-clouds-the-wild-card.md)

## Why this matters

The direct effect of doubling $\mathrm{CO_2}$ is about 1.2 K. The expected warming is about 3 K. The factor of 2.5 between them is *all* feedback, and it is where every serious disagreement about climate lives. This lesson builds the algebra that turns a list of individual feedbacks into a single number — and, more importantly, explains the two structural facts that follow from that algebra: **gains add while amplifications multiply**, and **a symmetric uncertainty in the feedbacks produces a badly skewed uncertainty in the warming.** The long upper tail on climate sensitivity that has resisted forty years of research is not a failure of measurement. It is a property of the function $1/(1-g)$.

## The idea

**Feedback means the response modifies the forcing.** Warm the surface and the atmosphere holds more water vapour; water vapour is a greenhouse gas; so the warming produces additional forcing, which produces additional warming. Nothing about this is special to climate — it is the standard structure of a loop.

**Start with the response that would happen with nothing else changing.** Warm the planet and it radiates more, at $4\sigma T^3$ per kelvin. That is the **Planck response**, and it is the only *stabilizing* term in the list: without it there would be no equilibrium at all. Everything else is a modification.

**Then linearize.** Feedbacks are not fundamental physics; they are the first-order Taylor expansion of "how does the outgoing radiation change per kelvin of surface warming" about the present state. That framing carries two health warnings that we will spend the rest of the module cashing out: it is a *linearization*, so it fails far from the base state, and it is defined *about a state*, so $\lambda$ itself can drift when the state changes ([3.2](03-02-tcr-ecs-pattern-effect.md)).

**The gain factor is the fraction of the response that gets fed back.** If a kelvin of warming produces enough extra forcing to cause $g$ more kelvins directly, then the total is the geometric series $1 + g + g^2 + \cdots = 1/(1-g)$. The series converges only for $g<1$; at $g = 1$ the loop gain reaches unity and the system runs away. Earth sits at about $g = 0.6$, which is comfortable for the algebra and uncomfortable for the uncertainty, because $1/(1-g)$ is steep there.

## The formal version

**Definition.** Let $R$ be the net outgoing radiation at the top of atmosphere. Perturb the surface temperature by $\Delta T$ and expand:

$$\Delta R = \left(\frac{\partial R}{\partial T} + \sum_i \frac{\partial R}{\partial x_i}\frac{dx_i}{dT}\right)\Delta T \equiv \lambda\,\Delta T,$$

where the $x_i$ are climate variables (water vapour, lapse rate, surface albedo, clouds) that respond to $T$. *In words: the total feedback parameter is the direct radiative response plus, for each responding variable, how much it changes per kelvin times how much radiation that change costs.*

**Sign convention — read this carefully, because the literature is split.** We use $\lambda > 0$ meaning *stabilizing*, so that

$$N = F - \lambda\,\Delta T, \qquad \Delta T_{\text{eq}} = \frac{F}{\lambda}.$$

Individual feedbacks are quoted as strengths $c_i$ with **positive meaning amplifying**, and combine as

$$\boxed{\ \lambda = \lambda_0 - \sum_i c_i\ }$$

with $\lambda_0$ the Planck response. IPCC AR6 instead uses $\alpha_i$ with negative meaning stabilizing, so $\alpha_{\text{Planck}} = -3.22$ and $\lambda = -\sum_i\alpha_i$. The physics is identical; the signs are not. **Always check which convention a paper is using before comparing numbers**, and the fast way to check is to look at the Planck term: if it is negative, they are using the AR6 convention.

**The Planck response.** Differentiate $R = \sigma T_e^4$ with respect to surface temperature, assuming the whole profile shifts together:

$$\lambda_0 = \frac{dR}{dT} = 4\sigma T_e^3 = 4(5.67\times10^{-8})(254.6)^3 = 3.74\ \mathrm{W\,m^{-2}\,K^{-1}}.$$

The value actually used is $\lambda_0 \approx 3.2\ \mathrm{W\,m^{-2}\,K^{-1}}$, smaller because the real calculation weights the emission by where it happens, and the warm tropics — which emit most — warm less than the global mean. Keep 3.2 as the working number.

**The no-feedback sensitivity.** With $F_{2\times} = 3.93\ \mathrm{W\,m^{-2}}$,

$$\Delta T_0 = \frac{F_{2\times}}{\lambda_0} = \frac{3.93}{3.2} = 1.23\ \mathrm{K}.$$

*In words: if nothing but the temperature changed, doubling $\mathrm{CO_2}$ would warm the surface 1.2 K.* That number is not in serious dispute. Everything in dispute is what multiplies it.

**Gain.** Define

$$g \equiv \frac{\sum_i c_i}{\lambda_0}, \qquad \text{so} \qquad \lambda = \lambda_0(1-g) \quad\text{and}\quad \Delta T = \frac{F}{\lambda_0(1-g)} = \frac{\Delta T_0}{1-g}.$$

*In words: $g$ is the extra warming caused by one kelvin of warming, and the total is the geometric series that sums.* The **amplification factor** is $A = 1/(1-g)$.

**Gains add; amplifications do not multiply.** Suppose two feedbacks with gains $g_1 = g_2 = 0.3$. Each alone gives $A = 1/0.7 = 1.43$. Naively multiplying, $1.43^2 = 2.04$. The correct answer is

$$A = \frac{1}{1 - (g_1+g_2)} = \frac{1}{0.4} = 2.50.$$

*In words: the combined effect is more than the product of the individual effects, because each feedback acts on the warming that the other one already amplified.* This is why feedbacks must always be summed in $g$-space (or equivalently in $\lambda$-space, which is linear) and never composed multiplicatively. It is also why the *last* feedback added always looks the most important — a fact worth remembering when someone tells you their favourite mechanism is decisive.

**Runaway.** The loop diverges when $g \to 1$, i.e. $\lambda \to 0$: the planet radiates no extra energy in response to warming, so no equilibrium exists at all. Earth's $\lambda \approx 1.2\ \mathrm{W\,m^{-2}\,K^{-1}}$ gives

$$g = 1 - \frac{\lambda}{\lambda_0} = 1 - \frac{1.2}{3.2} = 0.62.$$

Comfortably subcritical — but note what that comfort is worth: an additional feedback of $+1.2\ \mathrm{W\,m^{-2}\,K^{-1}}$ would tip it, and the individual feedbacks already in the list are of order 1. Earth is not near runaway by a wide margin; it is near it by about one water-vapour feedback. (True runaway — the moist greenhouse that boiled Venus's oceans — requires the water-vapour feedback to become unbounded, which happens when the atmosphere becomes optically thick enough that outgoing radiation saturates at the Simpson–Nakajima limit near 300 W m⁻², beyond which no amount of warming increases emission.)

**The skew.** Suppose the *feedbacks* are known symmetrically, $g = 0.6 \pm 0.1$. Then

| $g$ | $A = 1/(1-g)$ | $\Delta T = 1.23A$ |
|---|---|---|
| 0.5 | 2.00 | 2.46 K |
| 0.6 | 2.50 | 3.08 K |
| 0.7 | 3.33 | 4.10 K |

The downward excursion is $-0.62$ K, the upward is $+1.02$ K. *In words: a symmetric error bar on the feedbacks becomes a lopsided error bar on the warming, with a long upper tail.* The reason is pure calculus — $A$ is convex, with $dA/dg = A^2$, so the sensitivity to $g$ grows as the square of the amplification you already have. This is the **Roe–Baker** result, and it says something uncomfortable: narrowing the sensitivity range requires narrowing $g$ much more than proportionally, so the upper tail is intrinsically hard to close. Forty years of failing to shrink it is what the mathematics predicts.

## Picture

![The amplification factor one over one minus g plotted against total gain g from zero to 0.85. The curve is flat near g equals zero and rises steeply toward a vertical asymptote at g equals one, marked in coral as the runaway condition. A symmetric interval g equals 0.6 plus or minus 0.1 is marked on the horizontal axis; the corresponding amplifications are 2.0, 2.5 and 3.3, so the interval maps to minus 0.5 and plus 0.8 in amplification — visibly asymmetric, with the long tail on the high side](assets/02-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — assembling a sensitivity).** Given $\lambda_0 = 3.2$, water vapour $c_{\text{wv}} = +1.8$, lapse rate $c_{\text{lr}} = -0.6$, surface albedo $c_{\alpha} = +0.3$, cloud $c_{\text{cl}} = +0.4$ (all W m⁻² K⁻¹): compute $\lambda$, $g$, the amplification, and ECS for $F_{2\times}=3.7$.

$$\sum c_i = 1.8 - 0.6 + 0.3 + 0.4 = 1.9\ \mathrm{W\,m^{-2}\,K^{-1}}.$$

$$\lambda = 3.2 - 1.9 = 1.3\ \mathrm{W\,m^{-2}\,K^{-1}}, \qquad g = \frac{1.9}{3.2} = 0.594, \qquad A = \frac{1}{1-0.594} = 2.46.$$

$$\mathrm{ECS} = \frac{3.7}{1.3} = 2.85\ \mathrm{K}.$$

Cross-check via the amplification route: $\Delta T_0 = 3.7/3.2 = 1.156$ K, and $1.156 \times 2.46 = 2.85$ K. ✓

*The point.* Note that the lapse-rate feedback is *negative* and still enters the sum with its own sign — it is a feedback, not an absence of one. And note the ordering: water vapour alone would give $g = 0.5625$ and $A = 2.29$; adding the other three moves $A$ only to 2.46, because they partly cancel. Water vapour does most of the amplification; clouds do most of the *arguing*.

**Example 2 (why you'd care — why the cloud feedback dominates the uncertainty).** Water-vapour feedback is known to about $\pm0.2\ \mathrm{W\,m^{-2}\,K^{-1}}$; cloud feedback to about $\pm0.4$. Both are of order 1. Show why the cloud uncertainty matters so much more than a factor of two suggests.

Propagate through $\Delta T = F/\lambda$ with $\lambda = 3.2 - \sum c_i$:

$$\frac{d\Delta T}{dc_i} = \frac{F}{\lambda^2}.$$

With $F = 3.93$ and $\lambda = 1.3$: $d\Delta T/dc = 3.93/1.69 = 2.33\ \mathrm{K}$ per unit of feedback. So

- water vapour, $\pm0.2$: contributes $\pm0.47$ K;
- cloud, $\pm0.4$: contributes $\pm0.93$ K.

Combined in quadrature: $\sqrt{0.47^2+0.93^2} = 1.04$ K, of which clouds supply $0.93^2/1.04^2 = 80$ percent of the variance.

*The general principle.* Two multiplicative effects compound. First, the cloud uncertainty is twice as large in feedback units. Second — and this is the part that gets missed — the conversion factor $F/\lambda^2$ is itself large *because $\lambda$ is small*, which it is because all the other feedbacks are positive. **Positive feedbacks amplify not only the warming but the uncertainty in the warming**, and they do it quadratically. If Earth's feedbacks summed to zero, $\lambda$ would be 3.2 and the same cloud uncertainty would contribute only $3.93\times0.4/3.2^2 = 0.15$ K. The reason clouds are the wild card ([2.4](02-04-clouds-the-wild-card.md)) is partly clouds and partly everything else.

## Watch out

- **You might think** feedbacks multiply, so two feedbacks that each amplify by 1.4 give 1.96. **Actually** gains add: two gains of 0.3 give $1/(1-0.6) = 2.5$, not 1.96. Composing amplifications is the single most common algebra error in this subject, and it always *understates* the total.
- **You might think** a positive feedback implies instability. **Actually** it implies instability only if the positive feedbacks outweigh the Planck response, $\sum c_i > \lambda_0$. Earth has a large net positive feedback and is perfectly stable, because $\lambda$ remains positive. "Positive feedback" is not a synonym for "runaway", and treating it as one produces bad intuition in both directions.
- **You might think** $\lambda$ is a constant of the climate system. **Actually** it is a derivative evaluated at a state, and it drifts — with the base temperature (feedbacks are state-dependent, sharply so for ice–albedo, [2.3](02-03-surface-albedo-cryosphere-feedback.md)) and with the *pattern* of warming even at fixed global mean ([3.2](03-02-tcr-ecs-pattern-effect.md)). Linearizing is an approximation whose validity has to be checked, not a definition.

## One-liner

> Gains add and then get inverted: $\Delta T = \Delta T_0/(1-g)$, so a symmetric uncertainty in the feedbacks becomes a lopsided uncertainty in the warming, and the long upper tail is arithmetic, not ignorance.

## Problems

**P1 (🟢)** A planet has $\lambda_0 = 3.4\ \mathrm{W\,m^{-2}\,K^{-1}}$ and feedbacks $+1.5$ (water vapour), $-0.4$ (lapse rate) and $+0.6$ (ice albedo), all in the same units. (a) Compute $\lambda$, $g$ and the amplification factor. (b) Compute the equilibrium warming for a 4.0 W m⁻² forcing. (c) How large would an additional positive feedback have to be to make the planet unstable?

**P2 (🟡)** Two feedbacks have gains $g_1 = 0.45$ and $g_2 = 0.25$. (a) Compute the amplification with each acting alone. (b) Compute the amplification with both. (c) Compute the *product* of the two individual amplifications and state the percentage by which it underestimates the true answer. (d) Explain in one sentence why the discrepancy grows as $g_1+g_2 \to 1$.

**P3 (🔴, optional)** Suppose the total feedback sum $\sum c_i$ is normally distributed with mean 1.9 and standard deviation 0.5 W m⁻² K⁻¹, and $\lambda_0 = 3.2$, $F_{2\times} = 3.93$. (a) Compute the ECS at the mean and at $\pm1\sigma$ and $\pm2\sigma$ in $\sum c_i$. (b) Comment on the shape of the resulting ECS distribution, and identify what happens at $+2.6\sigma$. (c) Explain why this argument means a *bounded* upper limit on ECS cannot come from the feedback framework alone, and name one other line of evidence that does bound it.

<details>
<summary>Solutions</summary>

**P1** (a) $$\sum c_i = 1.5 - 0.4 + 0.6 = 1.7, \qquad \lambda = 3.4 - 1.7 = 1.7\ \mathrm{W\,m^{-2}\,K^{-1}},$$
$$g = \frac{1.7}{3.4} = 0.50, \qquad A = \frac{1}{1-0.5} = 2.0.$$

(b) $$\Delta T = \frac{F}{\lambda} = \frac{4.0}{1.7} = 2.35\ \mathrm{K}.$$

(c) Instability requires $\lambda \le 0$, i.e. $\sum c_i \ge \lambda_0 = 3.4$. The current sum is 1.7, so an additional positive feedback of **1.7 W m⁻² K⁻¹** would do it — as large as everything already present combined.

**P2** (a) $$A_1 = \frac{1}{1-0.45} = 1.818, \qquad A_2 = \frac{1}{1-0.25} = 1.333.$$

(b) $$A = \frac{1}{1-0.70} = 3.333.$$

(c) $$A_1 A_2 = 1.818 \times 1.333 = 2.424.$$

Underestimate: $(3.333-2.424)/3.333 = 27$ percent.

(d) Because $A_1A_2 = \frac{1}{(1-g_1)(1-g_2)} = \frac{1}{1-g_1-g_2+g_1g_2}$, which differs from the true $\frac{1}{1-g_1-g_2}$ by the spurious extra term $+g_1g_2$ in the denominator. As $g_1+g_2 \to 1$ the true denominator goes to zero while the product's denominator stays at $g_1g_2 > 0$, so the ratio diverges — the product form cannot produce a runaway at all, which is the clearest sign it is wrong.

**P3** (a) $\lambda = 3.2 - \sum c_i$, $\mathrm{ECS} = 3.93/\lambda$:

| $\sum c_i$ | $\lambda$ | ECS |
|---|---|---|
| $0.9$ ($-2\sigma$) | 2.3 | 1.71 K |
| $1.4$ ($-1\sigma$) | 1.8 | 2.18 K |
| $1.9$ (mean) | 1.3 | 3.02 K |
| $2.4$ ($+1\sigma$) | 0.8 | 4.91 K |
| $2.9$ ($+2\sigma$) | 0.3 | 13.1 K |

(b) The distribution is severely right-skewed. The $-1\sigma$ excursion moves ECS by $-0.84$ K; the $+1\sigma$ excursion by $+1.89$ K, more than twice as far. At $+2\sigma$ the value has become absurd, and at

$$\sum c_i = 3.2 \quad\Longleftrightarrow\quad \frac{3.2-1.9}{0.5} = +2.6\sigma$$

the feedback sum equals the Planck response, $\lambda = 0$, and **ECS is infinite**. A Gaussian in $\sum c_i$ assigns probability $P(Z>2.6) = 0.5$ percent to a runaway climate.

(c) Because ECS $\propto 1/\lambda$ and $\lambda$ has a finite probability of being arbitrarily close to zero, the ECS distribution implied by *any* Gaussian uncertainty on the feedbacks has an infinite mean and no upper bound. **The framework structurally cannot deliver an upper limit** — the tail is created by the reciprocal, not by any physical statement that very high sensitivity is plausible.

Bounding it therefore requires evidence of a different kind: (i) **paleoclimate**, which shows the Earth system has undergone large forcings without running away and constrains the response directly ([6.3](06-03-ice-ages-100-kyr-problem.md), [6.4](06-04-deep-time-slow-thermostat.md)); (ii) the **historical record**, which becomes very hard to reconcile with very high ECS given the observed warming and heat uptake ([3.3](03-03-constraining-sensitivity-observations.md)); and (iii) **emergent constraints** relating an observable present-day process to the modelled feedback. AR6's narrowing of the likely range to 2.5–4 K came precisely from combining these independent lines rather than from any single one, and specifically from arguing in $\lambda$-space, where the evidence is Gaussian, rather than in ECS-space, where it is not.

*Check.* Note the practical moral, which also explains a puzzle in the literature: assessments that average sensitivities across models get a different answer from assessments that average *feedbacks* and then invert. Averaging in $\lambda$-space is the defensible choice, because that is the space in which the physics is additive and the errors are roughly symmetric.

</details>

## Flashback

**From Lesson 1.4 (Radiative forcing, properly defined):** A modelling group runs a fixed-SST experiment with $\mathrm{CO_2}$ **quadrupled** and finds a top-of-atmosphere imbalance of $8.0\ \mathrm{W\,m^{-2}}$. (a) What quantity have they measured, and what is its value for $4\times\mathrm{CO_2}$? (b) Assuming forcing is exactly logarithmic in concentration, what is the implied forcing per doubling? (c) Compare with the assessed $3.93\ \mathrm{W\,m^{-2}}$ and say what a discrepancy in this direction would mean physically.

<details>
<summary>Solution</summary>

(a) Fixed sea surface temperature and sea ice, with all other rapid adjustments allowed, is the definition of **effective radiative forcing**. So $\mathrm{ERF}_{4\times} = 8.0\ \mathrm{W\,m^{-2}}$.

(b) Logarithmic forcing means equal increments per doubling, and $4\times$ is two doublings:

$$F_{2\times} = \frac{8.0}{2} = 4.0\ \mathrm{W\,m^{-2}}.$$

(c) The implied 4.0 exceeds the assessed 3.93 by about 2 percent — small, but the *sign* is the interesting part and it is a real effect, not noise. Forcing is slightly **super-logarithmic** at high concentrations: as the $\mathrm{CO_2}$ band widens ([1.3](01-03-bands-saturation-logarithmic-forcing.md)), its wings begin to encroach on spectral regions where the atmosphere was previously more transparent, so each successive doubling blackens spectrum with a *larger* brightness contrast than the last. The logarithmic law is a good approximation over roughly 100–1500 ppm and progressively underestimates forcing above that.

This matters in two places. For present-century projections it is a 2 percent effect and can be ignored. For deep-time hothouse climates at several thousand ppm ([6.4](06-04-deep-time-slow-thermostat.md)) it is not, and using $5.35\ln(C/C_0)$ there will systematically underestimate the forcing — and hence *overestimate* the sensitivity needed to explain a given reconstructed warmth.

*Check.* The practical lesson for reading model output: never infer $F_{2\times}$ from a $4\times$ experiment by halving without saying you have assumed logarithmicity. The abrupt-$4\times\mathrm{CO_2}$ experiment is the standard protocol precisely because it gives a large, clean signal — and the price of that cleanliness is this small extrapolation.

</details>

## Connections

- **Backward:** the split between forcing and feedback is [1.4](01-04-radiative-forcing-defined.md)'s adjustment-versus-feedback boundary made quantitative; $\lambda_0 = 4\sigma T_e^3$ is the same derivative that gave the emission-level shift in [atmospheric-science 3.3](../../atmospheric-science/lessons/03-03-radiative-transfer-vertical-profile.md).
- **Forward:** [2.2](02-02-planck-water-vapour-lapse-rate.md)–[2.4](02-04-clouds-the-wild-card.md) fill in the individual $c_i$; [2.5](02-05-diagnosing-feedbacks.md) shows how they are actually measured; the state-dependence warning becomes the pattern effect in [3.2](03-02-tcr-ecs-pattern-effect.md) and the bistability of [6.1](06-01-energy-balance-models-bistability.md).
- **Sideways (control theory):** $1/(1-g)$ is the closed-loop gain of a unity-feedback system, and $g\to1$ is the loss of stability margin. Climate scientists' "gain" is the control engineer's *loop gain*; the amplification is the *sensitivity function*. See [`control-systems` 1.1](../../control-systems/lessons/01-01-feedback-and-the-control-problem.md). The Roe–Baker skew is the standard warning that a plant identified near its stability boundary has badly non-Gaussian parameter uncertainty.
