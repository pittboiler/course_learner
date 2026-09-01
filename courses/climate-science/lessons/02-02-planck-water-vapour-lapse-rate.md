# Climate Physics · Lesson 2.2: Planck, water vapour and lapse rate

> ⏱ ~15 min · Module 2: Feedbacks & climate sensitivity · Builds on: [2.1](02-01-feedbacks-gain-factor.md), [atmospheric-science 2.2](../../atmospheric-science/lessons/02-02-saturation-moist-adiabatic-lapse-rate.md) · Unlocks: [2.3](02-03-surface-albedo-cryosphere-feedback.md), [2.5](02-05-diagnosing-feedbacks.md)

## Why this matters

Three of the four big [feedbacks](../reference.md#feedback-parameter) are essentially thermodynamics, and they can be understood — not merely quoted — from things already in hand. The Planck response is a derivative of Stefan–Boltzmann. The water-vapour feedback is Clausius–Clapeyron plus one empirical assumption. The lapse-rate feedback is the moist adiabat. Together they supply about $+1.2\ \mathrm{W\,m^{-2}\,K^{-1}}$ of net amplification against a Planck response of 3.2, which is most of the journey from a 1.2 K direct response to a 3 K sensitivity. And they come with a lesson that generalizes: **the water-vapour and lapse-rate feedbacks are strongly anticorrelated, so their sum is far better known than either part** — a fact that has repeatedly misled people who quote one of them alone.

## The idea

**Planck: the only thing holding the system together.** Warm anything and it radiates more. For the planet, $R = \sigma T_e^4$, so $dR/dT = 4\sigma T_e^3 = 3.74\ \mathrm{W\,m^{-2}\,K^{-1}}$. In practice the number used is $3.2$, and the discrepancy is instructive: the real planet does not warm uniformly, and the places that emit most (the warm, dry tropics, and the atmospheric window straight from the surface) warm less than the global mean. Weighting by where the emission actually comes from lowers the effective $\lambda_0$.

**Water vapour: warmer air holds more, and more water vapour is more greenhouse.** [Clausius–Clapeyron](../../atmospheric-science/lessons/02-02-saturation-moist-adiabatic-lapse-rate.md) says saturation vapour pressure rises about 7 percent per kelvin. If **relative humidity stays roughly constant** — the crucial empirical claim, discussed below — then actual water vapour rises 7 percent per kelvin too. Water vapour is the dominant greenhouse gas, so the emission level rises and the planet emits less. Strongly positive: about $+1.8\ \mathrm{W\,m^{-2}\,K^{-1}}$, over half the Planck response on its own.

**Lapse rate: it matters *where* the warming happens.** The planet emits from aloft, not from the surface. If the upper troposphere warms *more* than the surface, the emission level warms more than $\Delta T_s$ and the planet sheds heat more efficiently than the Planck calculation assumed — a **negative** feedback. That is what happens in the tropics, where the profile is pinned to the moist adiabat and moist adiabats warm top-heavy. In the polar regions the opposite happens: stable stratification traps the warming near the surface, so the emission level warms *less* than the surface, and the feedback is positive. Globally the tropics win: about $-0.6\ \mathrm{W\,m^{-2}\,K^{-1}}$.

**And the two are the same physics seen twice.** Both descend from moist-adiabatic adjustment. A model whose tropical upper troposphere warms strongly gets a *more negative* lapse-rate feedback and, because warmer air aloft holds more vapour, a *more positive* water-vapour feedback. The errors cancel. Their sum, about $+1.2$, is much better constrained than the $+1.8$ and $-0.6$ that compose it, and quoting either alone as "the water-vapour feedback" overstates the case badly.

## The formal version

**The Planck feedback.** Assume the whole temperature profile shifts uniformly by $\Delta T$ and recompute the outgoing longwave radiation:

$$\lambda_0 \equiv \left.\frac{\partial R}{\partial T}\right|_{\text{uniform shift}} = 4\sigma T_e^3 = 3.74\ \mathrm{W\,m^{-2}\,K^{-1}}.$$

*In words: a blackbody at 254.6 K sheds an extra 3.74 watts per square metre for every kelvin.* Line-by-line calculations with realistic profiles and spectra give $\lambda_0 \approx 3.2$, and the reduction comes from the emission-weighting effect above. Use 3.2.

**Clausius–Clapeyron, quantitatively.** From [atmospheric-science 2.2](../../atmospheric-science/lessons/02-02-saturation-moist-adiabatic-lapse-rate.md),

$$\frac{1}{e_s}\frac{de_s}{dT} = \frac{L_v}{R_vT^2}.$$

*In words: the fractional rise in saturation vapour pressure per kelvin.* Evaluating with $L_v = 2.5\times10^{6}\ \mathrm{J\,kg^{-1}}$ and $R_v = 461.5\ \mathrm{J\,kg^{-1}\,K^{-1}}$:

| $T$ | $\frac{1}{e_s}\frac{de_s}{dT}$ |
|---|---|
| 288 K (surface) | 6.5 percent per K |
| 270 K | 7.4 percent per K |
| 250 K (mid-troposphere) | 8.7 percent per K |
| 230 K (upper troposphere) | 10.2 percent per K |

Note the rate *increases* with height, because $T^2$ is in the denominator. This matters: the upper troposphere is where water vapour has the most radiative leverage (it is coldest there, so the brightness contrast with the surface is largest), and it is exactly where the fractional moistening per kelvin is greatest.

**The constant-relative-humidity assumption.** The feedback requires that *actual* vapour, not just saturation vapour, rises with temperature. Relative humidity is $\mathrm{RH} = e/e_s$, so constant RH means $e$ tracks $e_s$. Why should it? Two reasons, one supply-side and one dynamical.

- **Supply.** Seventy percent of the surface is ocean, so the boundary layer is never short of water; evaporation adjusts quickly.
- **Dynamics.** Free-tropospheric humidity is set by where air last saturated as it ascended and by subsequent subsidence and mixing. Both processes are essentially *dynamical* — they depend on where air parcels travel relative to their saturation point — and warming the whole system by a uniform amount leaves that geometry unchanged. This is the argument that survived; it predicts constant RH as an emergent property of an unchanged circulation, not as an assumption.

Observations back it: satellite records of upper-tropospheric humidity show RH roughly constant while specific humidity has risen, and the interannual signal (drier upper troposphere in cold years) is unambiguous.

**The water-vapour feedback.** Water vapour's greenhouse effect is roughly logarithmic in its column amount, so writing $F_{\text{wv}} = k\ln q$,

$$c_{\text{wv}} = \frac{dF_{\text{wv}}}{dT} = k\,\frac{1}{q}\frac{dq}{dT} \approx k \times 0.07.$$

Radiative calculations give $c_{\text{wv}} \approx +1.8\ \mathrm{W\,m^{-2}\,K^{-1}}$, which back-solves to $k \approx 26\ \mathrm{W\,m^{-2}}$ per $e$-fold — about 19 W m⁻² per *doubling* of water vapour, comfortably consistent with water vapour supplying roughly half of Earth's 155 W m⁻² total greenhouse effect.

*In words: about 7 percent more water vapour per kelvin, worth about 1.8 watts per square metre per kelvin.* Note this single feedback has $g = 1.8/3.2 = 0.56$ on its own — it nearly doubles the sensitivity by itself, and it is the reason no serious analysis has ever produced a sensitivity below about 1.5 K.

**The lapse-rate feedback.** Define it as the radiative effect of the departure of the warming profile from uniform. If the atmosphere at height $z$ warms by $\Delta T(z)$ while the surface warms by $\Delta T_s$, then

$$c_{\text{lr}} \propto -\left\langle \Delta T(z_{\text{emission}}) - \Delta T_s \right\rangle,$$

with the sign such that extra warming aloft is a **negative** (stabilizing) feedback.

*In the tropics*, convection ties the profile to the moist adiabat. Because the moist adiabat's slope depends on temperature — a warmer atmosphere releases more latent heat per kelvin of ascent, so it is *less* steep — warming the surface by 1 K warms the tropical upper troposphere by roughly 2 K. Emission increases more than uniform, and the feedback is strongly negative.

*In the polar regions*, the surface is stably stratified, convection is weak or absent, and the warming is trapped in the lowest kilometre. Emission increases *less* than uniform, and the feedback is positive.

Global-mean: about $-0.6\ \mathrm{W\,m^{-2}\,K^{-1}}$, dominated by the tropics because that is where most of the planet's longwave emission occurs.

**Why they are anticorrelated, and what to do about it.** Both feedbacks are driven by the same quantity — the vertical structure of warming. Increase the tropical upper-tropospheric amplification and you simultaneously (i) make $c_{\text{lr}}$ more negative and (ii) make $c_{\text{wv}}$ more positive, because $q_{\text{sat}}$ up there rises with $T$ at 10 percent per kelvin. Across models the correlation is strong and the sum is tight:

$$c_{\text{wv}} + c_{\text{lr}} \approx +1.2\ \mathrm{W\,m^{-2}\,K^{-1}}, \qquad \sigma \approx 0.15,$$

against individual spreads several times larger. **This is why they are always quoted together.**

There is a cleaner way to see it, due to Held and Shell: decompose in terms of **relative** humidity instead of specific humidity. Write the water-vapour change as "the part that follows from constant RH" plus "the RH change". The first part is naturally grouped with the lapse-rate term, and what is left — the genuine RH feedback — is small and only weakly correlated with anything. In that decomposition the near-cancellation stops looking like a coincidence and starts looking like a bad choice of coordinates, which is what it is.

## Picture

![Two vertical profiles of local warming divided by global-mean warming, plotted against height up to 16 km. A dashed vertical line marks uniform warming. The blue tropical profile starts at one at the surface and increases with height to about two at 10 km before falling off near the tropopause, which is moist-adiabatic amplification and produces a negative lapse-rate feedback because the emission level warms more than the surface. The coral polar profile starts near 2.8 at the surface and falls rapidly to below one within 3 km, warming trapped near the surface by stable stratification, which produces a positive lapse-rate feedback](assets/02-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — how much extra water vapour).** Global-mean surface temperature has risen about 1.2 K since pre-industrial times. (a) By what percentage should column water vapour have risen at constant relative humidity? (b) What forcing does that represent, using $k = 26\ \mathrm{W\,m^{-2}}$ per $e$-fold? (c) Compare with the $\mathrm{CO_2}$ forcing over the same period.

(a) At 6.5 percent per kelvin, compounding:

$$\frac{q}{q_0} = (1.065)^{1.2} = 1.079,$$

about **8 percent** more water vapour. (Observations give 7–9 percent since 1988 scaled appropriately — this is one of the better-verified predictions in the field.)

(b) $$\Delta F_{\text{wv}} = 26\ln(1.079) = 26 \times 0.0760 = 1.98\ \mathrm{W\,m^{-2}}.$$

(c) $\mathrm{CO_2}$ has supplied 2.16 W m⁻² ([1.5](01-05-forcing-agents.md)). The water vapour *feedback* has supplied nearly as much again — about 2.0 W m⁻².

*The point.* The single most important number to take from this: **water vapour has already contributed roughly as much extra greenhouse forcing as $\mathrm{CO_2}$ has**, and it did so entirely as a response, with no emissions involved. It is also why "water vapour is the dominant greenhouse gas, so $\mathrm{CO_2}$ doesn't matter" gets the logic exactly backwards: water vapour is a *feedback*, not a *forcing* — its concentration is set by temperature, on a residence time of about nine days, so it cannot drive anything. It can only multiply what does.

**Example 2 (why you'd care — checking a model's tropical amplification against the satellite record).** A model warms the tropical surface by 1.0 K and the tropical upper troposphere at 250 hPa by 2.1 K. Another warms them by 1.0 K and 1.6 K. (a) Which has the more negative lapse-rate feedback? (b) Which has the more positive water-vapour feedback? (c) What does this predict about the spread in their combined feedback, and how would you test which is right?

(a) The first. Emission from aloft increases more relative to the surface warming, which is the definition of a stabilizing lapse-rate feedback.

(b) Also the first. The 250 hPa level is around 230 K, where Clausius–Clapeyron gives 10.2 percent per kelvin; warming it by 2.1 K instead of 1.6 K adds

$$(1.102)^{2.1}/(1.102)^{1.6} = (1.102)^{0.5} = 1.050,$$

5 percent more upper-tropospheric vapour — precisely where vapour has the most radiative leverage.

(c) The two effects have opposite signs and comparable magnitude, so the **combined** feedback of the two models will be much closer together than either component. This is the anticorrelation in action, and it means comparing models on their water-vapour feedbacks alone would grossly overstate their disagreement about sensitivity.

Testing it: the tropical upper-tropospheric warming rate is directly observable, from radiosondes and from satellite microwave sounding of the mid-to-upper troposphere. The observed tropical amplification has been a genuine and long-running dispute — early satellite records suggested less amplification than models produced, which would have implied a *less* negative lapse-rate feedback and hence a higher sensitivity, until successive corrections to the satellite calibration and to radiosonde homogenization narrowed the gap. It remains a live area, and it is a good illustration that "models disagree with observations" is a claim about instruments as often as about physics.

## Watch out

- **You might think** water vapour, being the largest greenhouse gas, is the main *cause* of warming. **Actually** its atmospheric residence time is about nine days, so its concentration is slaved to temperature — it is a pure feedback. You cannot force the climate with water vapour; add some and it rains out within a fortnight. $\mathrm{CO_2}$ can force because it persists for centuries to millennia ([4.1](04-01-the-carbon-cycle.md)). **Lifetime is what separates a forcing from a feedback.**
- **You might think** the lapse-rate feedback is positive because warming aloft "traps more heat". **Actually** it is negative, and the sign follows from remembering that the planet emits *from aloft*: extra warming at the emission level means extra emission, which is stabilizing. The polar regions do have a positive lapse-rate feedback, for exactly the opposite structural reason, but they emit too little to dominate the global mean.
- **You might think** the near-cancellation of water vapour and lapse rate means neither matters. **Actually** the residual $+1.2\ \mathrm{W\,m^{-2}\,K^{-1}}$ is the largest single positive term in the budget — it takes $\lambda$ from 3.2 to 2.0 all by itself, raising sensitivity from 1.2 K to 2.0 K before clouds or ice have said anything.

## One-liner

> Warmer air holds seven percent more water per kelvin and that alone would nearly double the sensitivity — except that the same moist thermodynamics warms the tropical upper troposphere twice as fast as the surface, and the planet emits from up there.

## Problems

**P1 (🟢)** Using $\frac{1}{e_s}\frac{de_s}{dT} = \frac{L_v}{R_vT^2}$ with $L_v = 2.5\times10^{6}$ and $R_v = 461.5$: (a) evaluate the fractional rate at 300 K and at 240 K; (b) for 3 K of warming at constant relative humidity, compute the fractional increase in vapour at each temperature; (c) state in one sentence why the difference matters for the feedback.

**P2 (🟡)** A climate model reports $c_{\text{wv}} = +2.0$ and $c_{\text{lr}} = -0.9\ \mathrm{W\,m^{-2}\,K^{-1}}$; another reports $+1.5$ and $-0.35$. Both also have $\lambda_0 = 3.2$, $c_\alpha = +0.35$ and $c_{\text{cl}} = +0.45$. (a) Compute each model's $\lambda$ and ECS for $F_{2\times}=3.93$. (b) Compute the spread in ECS. (c) Now compute what the spread *would* have been had the two models had the same lapse-rate feedback of $-0.6$ but kept their own water-vapour values, and comment.

**P3 (🔴, optional)** Suppose relative humidity is not exactly constant but falls by 1 percent (relative) per kelvin of warming — a plausible magnitude for a modest RH feedback. (a) What is the net fractional change in specific humidity per kelvin? (b) Recompute the water-vapour feedback, taking $c_{\text{wv}} = k\,(d\ln q/dT)$ with $k = 26\ \mathrm{W\,m^{-2}}$. (c) With $\lambda_0=3.2$, $c_{\text{lr}}=-0.6$, $c_\alpha=+0.3$, $c_{\text{cl}}=+0.4$, compute the change in ECS relative to the constant-RH case, and comment on how tightly RH needs to be observed to matter.

<details>
<summary>Solutions</summary>

**P1** (a) At 300 K: $$\frac{2.5\times10^{6}}{461.5\times(300)^2} = \frac{2.5\times10^{6}}{4.154\times10^{7}} = 0.0602 = 6.0\ \text{percent per K}.$$

At 240 K: $$\frac{2.5\times10^{6}}{461.5\times(240)^2} = \frac{2.5\times10^{6}}{2.658\times10^{7}} = 0.0941 = 9.4\ \text{percent per K}.$$

(b) At 300 K: $(1.060)^3 = 1.191$, a **19 percent** increase.

At 240 K: $(1.094)^3 = 1.309$, a **31 percent** increase.

(c) Because the fractional moistening is much larger in the cold upper troposphere, and because that is where water vapour has the greatest radiative leverage (the emission there is coldest, so the brightness contrast with the surface is largest), most of the water-vapour feedback comes from a region holding a tiny fraction of the atmosphere's total water.

**P2** (a) Model A: $$\sum c_i = 2.0 - 0.9 + 0.35 + 0.45 = 1.90, \quad \lambda = 1.30, \quad \mathrm{ECS} = \frac{3.93}{1.30} = 3.02\ \mathrm{K}.$$

Model B: $$\sum c_i = 1.5 - 0.35 + 0.35 + 0.45 = 1.95, \quad \lambda = 1.25, \quad \mathrm{ECS} = \frac{3.93}{1.25} = 3.14\ \mathrm{K}.$$

(b) Spread: $3.14 - 3.02 = 0.12$ K. Tiny — despite the models disagreeing by 0.5 W m⁻² K⁻¹ on water vapour, a 33 percent difference.

(c) With $c_{\text{lr}} = -0.6$ for both:

Model A: $\sum c_i = 2.0 - 0.6 + 0.8 = 2.20$, $\lambda = 1.00$, ECS $= 3.93$ K.
Model B: $\sum c_i = 1.5 - 0.6 + 0.8 = 1.70$, $\lambda = 1.50$, ECS $= 2.62$ K.

Spread: 1.31 K — **eleven times larger**. Comment: the models' water-vapour feedbacks differ a great deal, and their lapse-rate feedbacks differ in exactly the compensating way, so their sensitivities barely differ. Artificially imposing a common lapse-rate feedback destroys the compensation and manufactures a disagreement that does not exist. This is why any model intercomparison, emergent constraint, or observational test that targets the water-vapour feedback in isolation is close to meaningless: the physically meaningful variable is the sum.

**P3** (a) $q \propto \mathrm{RH}\times q_{\text{sat}}$, so

$$\frac{d\ln q}{dT} = \frac{d\ln \mathrm{RH}}{dT} + \frac{d\ln q_{\text{sat}}}{dT} = -0.01 + 0.07 = 0.06\ \mathrm{K^{-1}},$$

6 percent per kelvin instead of 7.

(b) $$c_{\text{wv}} = 26 \times 0.06 = 1.56\ \mathrm{W\,m^{-2}\,K^{-1}},$$

down from $26\times0.07 = 1.82$.

(c) Constant RH: $\sum c_i = 1.82 - 0.6 + 0.3 + 0.4 = 1.92$, $\lambda = 1.28$, ECS $= 3.93/1.28 = 3.07$ K.

Falling RH: $\sum c_i = 1.56 - 0.6 + 0.3 + 0.4 = 1.66$, $\lambda = 1.54$, ECS $= 3.93/1.54 = 2.55$ K.

A 1 percent-per-kelvin drift in relative humidity — utterly invisible to casual inspection, and at the edge of what the observing system can resolve — changes ECS by **0.52 K**, about 17 percent. That is the answer to "how tightly does RH need to be observed": very tightly, to a fraction of a percent per kelvin, which is beyond the current radiosonde and satellite humidity record's homogeneity over multi-decade timescales.

*Check.* This is the quantitative version of why the constant-RH assumption is doing real work rather than being a harmless idealization, and why the Held–Shell relative-humidity decomposition is worth the trouble: it isolates precisely this small, poorly-observed residual instead of burying it inside a large term.

</details>

## Flashback

**From Lesson 1.2 (The gray atmosphere in radiative equilibrium):** In the gray radiative-equilibrium solution $T^4(\tau) = \tfrac12 T_e^4(1+\tfrac32\tau)$: (a) find the optical depth at which the air temperature equals the effective emission temperature $T_e$; (b) for a planet with $\tau_s = 6$, what fraction of the atmosphere's total optical depth lies *above* that level? (c) Interpret the result in one sentence in terms of what a distant observer sees.

<details>
<summary>Solution</summary>

(a) Set $T = T_e$:

$$T_e^4 = \frac{T_e^4}{2}\left(1+\tfrac32\tau\right) \quad\Longrightarrow\quad 2 = 1 + \tfrac32\tau \quad\Longrightarrow\quad \tau = \frac{2}{3}.$$

(b) $$\frac{2/3}{6} = 0.111,$$ about **11 percent** of the column's optical depth lies above the level where $T = T_e$.

(c) A distant observer measuring this planet's outgoing flux would infer $T_e$, and that temperature is found only about a ninth of the way down the atmosphere's optical depth — so the effective emission temperature is a real temperature at a real level, but a level far above most of the absorbing mass, and the surface below it is much warmer.

*Check.* $\tau = 2/3$ is the same number as stellar astrophysics' "you see down to $\tau = 2/3$" rule, and it appears here for exactly the same reason: it is where the Eddington gray solution passes through $T_e$. The fraction in (b) depends on $\tau_s$ and shrinks as the atmosphere thickens — for Venus's $\tau_s \approx 134$ ([1.4](01-04-radiative-forcing-defined.md), Flashback) it is 0.5 percent, which is a compact statement of why Venus's surface is invisible in the infrared.

</details>

## Connections

- **Backward:** the combination rule and the gain framework are [2.1](02-01-feedbacks-gain-factor.md)'s; Clausius–Clapeyron and the moist adiabat are [atmospheric-science 2.2](../../atmospheric-science/lessons/02-02-saturation-moist-adiabatic-lapse-rate.md)'s, here converted from a description of a lapse rate into a feedback.
- **Forward:** the polar surface-trapped warming sketched here is the vertical half of Arctic amplification, completed in [2.3](02-03-surface-albedo-cryosphere-feedback.md) and [5.4](05-04-the-cryosphere.md); the 7-percent-per-kelvin moistening drives the hydrological response of [5.1](05-01-hydrological-cycle-response.md); the anticorrelation problem is what radiative kernels in [2.5](02-05-diagnosing-feedbacks.md) are built to disentangle.
- **Sideways (statistics):** the water-vapour/lapse-rate pair is a textbook case of two strongly negatively correlated estimators whose sum has far smaller variance than either — the same structure as a well-chosen control variate, and the reason a covariance matrix, not a list of standard deviations, is the honest way to report a set of feedbacks. See [`prob-stat-refresher` 3.1](../../prob-stat-refresher/lessons/03-01-joint-distributions-covariance.md).
