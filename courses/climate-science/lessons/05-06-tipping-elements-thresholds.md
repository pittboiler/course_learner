# Climate Physics · Lesson 5.6: Tipping elements and thresholds

> ⏱ ~15 min · Module 5: What actually changes · Builds on: [5.4](05-04-the-cryosphere.md), [5.5](05-05-circulation-regional-response.md), [2.3](02-03-surface-albedo-cryosphere-feedback.md) · Unlocks: [6.1](06-01-energy-balance-models-bistability.md)

## Why this matters

"Tipping point" is the most-used and least-precisely-used phrase in public climate discussion. It has a specific technical meaning — a **[saddle-node bifurcation](../reference.md#tipping-point)**, where a stable state ceases to exist and the system jumps to a different one, with hysteresis so that reversing the forcing does not reverse the change. Most things called tipping points are not that. Some genuinely are. Telling them apart requires a criterion, and the criterion is available: **does the system have two stable states over a range of the control parameter?** This lesson supplies the test, applies it, and closes Module 5 by putting the previous five lessons' mechanisms on a common footing.

## The idea

**Bistability comes from a positive feedback that overwhelms the restoring force — over a range.** A stable system responds to a nudge by returning. If a positive feedback is strong enough, over some interval of the control parameter, the return force vanishes and the state runs away to a different equilibrium. Two stable states then coexist over that interval, separated by an unstable one that nothing can sit on.

**The signature is hysteresis.** Push the forcing past the fold, the system jumps. Bring the forcing back to where it was and the system **stays** in the new state, because in that region the new state is also stable. Restoring the original state requires going much further back — past the *other* fold. That path-dependence is the operational definition, and it is the thing that makes tipping different from merely large.

**Three things get confused.** A **threshold** (bifurcation, hysteresis, irreversible). A **strongly nonlinear but reversible response** (large, fast, but retraces its path). A **commitment** (slow and irreversible in practice, but with no bifurcation — the system is simply taking millennia). Sea-level rise is a commitment. Coral decline is a nonlinear response with a biological threshold. Marine ice-sheet instability is a genuine bifurcation.

**The candidates differ enormously in evidence and in timescale.** West Antarctic instability has a clean mechanism and a plausible threshold near 1.5 K, and unfolds over centuries to millennia. Arctic summer sea ice has *no* bistability in any model — the seasonal cycle is too strong. AMOC has a well-understood bistability mechanism and a threshold no one can locate. Amazon dieback has a plausible feedback and very weak quantitative support.

**Early warning is possible in principle: critical slowing down.** Approaching a fold, the restoring rate goes to zero, so the system's relaxation time diverges. That shows up as rising lag-1 autocorrelation and rising variance in the fluctuations — measurable, at least in principle, before the transition. In practice the records are short and the statistics are treacherous.

## The formal version

**The generic fold.** Take the normal form of a saddle-node bifurcation ([`dynamical-systems` 3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md)):

$$\frac{dx}{dt} = r + x - x^3$$

(this cubic version, the *pitchfork-with-imperfection*, is the standard climate caricature; the pure saddle-node is $\dot x = r - x^2$). Equilibria satisfy $r = x^3 - x$. For $|r| < 2/(3\sqrt3) = 0.385$ there are **three** equilibria — two stable and one unstable between them. Outside that interval there is one.

*In words: over a window of the control parameter, the system has two available states; outside the window, only one.* The edges of the window are the **folds**, and crossing one destroys the state you are sitting in.

**Stability and the vanishing restoring rate.** Linearizing about an equilibrium $x^*$, perturbations decay as $e^{\mu t}$ with

$$\mu = 1 - 3x^{*2}.$$

At a fold, $x^* = \pm1/\sqrt3$ and $\mu = 0$: the restoring rate has gone to zero. **This is the mathematical content of a tipping point, and it is also its observable signature** — the relaxation time $\tau = 1/|\mu|$ diverges as the fold is approached.

**Critical slowing down as an early warning.** Model the system as an Ornstein–Uhlenbeck process driven by noise with the restoring rate $|\mu|$. Then

$$\mathrm{Var}(x) = \frac{\sigma^2}{2|\mu|}, \qquad \text{lag-1 autocorrelation } \ \rho_1 = e^{-|\mu|\Delta t}.$$

*In words: as the fold is approached, $|\mu|\to0$, so the variance diverges and the autocorrelation approaches 1 — the system wanders more and forgets more slowly.* Both are measurable from a time series without knowing the model.

The practical difficulties are severe and worth naming: the signal is a *trend in a statistic*, so it needs a long record; detrending choices strongly affect the result; non-stationary noise mimics the signal; and the method gives no estimate of *when* or *at what forcing* the fold occurs. Published early-warning analyses of the AMOC find rising autocorrelation in sea-surface-temperature fingerprints since the twentieth century, and the finding is contested on exactly these grounds.

**The candidate tipping elements.** Central threshold estimates in global warming above pre-industrial, with the enormous caveat that ranges are wide and timescales vary by three orders of magnitude:

| Element | Threshold (K) | Timescale | Mechanism | Evidence for bistability |
|---|---|---|---|---|
| Greenland ice sheet | ~1.5 (0.8–3) | $10^3$–$10^4$ yr | surface-elevation feedback | strong |
| West Antarctic ice sheet | ~1.5 (1–3) | $10^2$–$10^3$ yr | marine ice-sheet instability | strong |
| Low-latitude coral reefs | ~1.5 (1–2) | 10 yr | bleaching plus $\Omega$ decline | ecological, not dynamical |
| Permafrost abrupt thaw | ~1.5 (1–2.3) | $10^2$ yr | thermokarst, local | local, not global |
| Barents Sea winter ice | ~1.6 (1.5–2.3) | 10 yr | ice–ocean heat flux | moderate |
| Amazon forest dieback | ~3.5 (2–6) | $10^2$ yr | moisture-recycling feedback | weak, contested |
| AMOC collapse | ~4 (1.4–8) | $10^2$ yr | salt-advection feedback | strong mechanism, unknown threshold |
| Boreal forest shift | ~4 (1.4–5) | $10^2$ yr | fire and permafrost | weak |
| **Arctic summer sea ice** | **none found** | — | — | **models show no bistability** |

That last row is the most useful entry in the table. Arctic summer sea ice is the element most often described as a tipping point in public discussion, and it is the one for which the evidence most clearly says otherwise: model studies that artificially remove the ice find it regrows within years, because the seasonal cycle of insolation is far too strong for the albedo feedback to sustain an ice-free state. **It is a fast, dramatic, and reversible response — precisely the category people mistake for a tipping point.**

**What makes the evidence strong or weak.** The strongest cases share three features: a mechanism identified from first principles (not from a model's behaviour), a geometry that makes the feedback exceed the restoring force (a retrograde bed; a salt-advection loop), and paleoclimate evidence that the transition has occurred. AMOC has the mechanism and the paleo evidence (Dansgaard–Oeschger events) but not a locatable threshold. Amazon dieback has a plausible mechanism and neither of the others.

**Cascades.** The suggestion that one element's tipping triggers another's — Greenland melt freshens the North Atlantic, weakening the AMOC, which shifts the ITCZ, which dries the Amazon — is physically coherent but quantitatively weak. Each link exists; whether any is strong enough to *force* the next past its own threshold is not established, and estimates of the coupling strengths come mostly from conceptual models rather than from anything resolved. **Treat cascades as a hypothesis about coupled systems, not as a result.**

**Why "tipping point" is often the wrong word.** Four distinct misuses:

1. **Applied to gradual responses.** Coral decline, Amazon drying and permafrost carbon release are all continuous functions of warming over the ranges considered. Sharp *impacts* are not sharp *dynamics*.
2. **Implying a single global threshold.** There is no "the" tipping point. There are regional elements with different thresholds spanning 1.5 to 5 K and timescales spanning a decade to ten millennia.
3. **Implying suddenness.** Crossing the West Antarctic threshold commits to multi-metre sea-level rise over centuries. The *commitment* is abrupt; the *change* is not.
4. **Implying a cliff-edge in policy terms.** Because thresholds are uncertain and spread over a range, the expected damage rises smoothly with warming even if each individual element is sharp — the smearing of many uncertain thresholds produces a smooth aggregate. There is no warming level below which nothing tips and above which everything does.

## Picture

![A bifurcation diagram: system state plotted against forcing. An upper stable branch, labelled circulation on, extends from low forcing rightward and terminates at a fold marked in coral. A lower stable branch, labelled circulation off, extends from high forcing leftward and terminates at a second fold at lower forcing. A dashed unstable branch connects the two folds. A downward arrow at the upper fold marks the collapse; an upward arrow at the lower fold marks recovery, which requires the forcing to be reduced far past its original value. The horizontal gap between the two folds is labelled hysteresis](assets/05-06-fig1.svg)

## Worked examples

**Example 1 (mechanical — finding the folds).** For $\dot x = r + x - x^3$: (a) find the equilibria as a function of $r$; (b) find the values of $r$ at which folds occur; (c) compute the stability eigenvalue at $r = 0$ for each equilibrium.

(a) Equilibria satisfy $r = x^3 - x$. For each $r$ the cubic may have one or three real roots.

(b) Folds occur where two equilibria merge, i.e. where $dr/dx = 0$:

$$\frac{dr}{dx} = 3x^2 - 1 = 0 \quad\Longrightarrow\quad x = \pm\frac{1}{\sqrt3} = \pm0.5774.$$

The corresponding $r$ values:

$$r = x^3 - x = \left(\frac{1}{\sqrt3}\right)^3 - \frac{1}{\sqrt3} = 0.1925 - 0.5774 = -0.385,$$

and by symmetry $r = +0.385$. So bistability exists for $-0.385 < r < 0.385$.

(c) At $r = 0$: $x^3 = x$, so $x^* \in \{-1, 0, +1\}$. The eigenvalue is $\mu = 1 - 3x^{*2}$:

| $x^*$ | $\mu$ | Stability | Relaxation time $1/|\mu|$ |
|---|---|---|---|
| $-1$ | $-2$ | stable | 0.5 |
| $0$ | $+1$ | **unstable** | — |
| $+1$ | $-2$ | stable | 0.5 |

*The point.* The relaxation time at $r=0$ is 0.5 in these units. Now approach the fold: at $r = -0.38$ the upper equilibrium is near $x = 0.59$, giving $\mu = 1 - 3(0.348) = -0.044$ and a relaxation time of 23 — **forty-six times longer**. That divergence is critical slowing down, and it is the quantity an early-warning statistic tries to detect.

**Example 2 (why you'd care — does a rising autocorrelation prove an approaching tipping point?).** A 150-year sea-surface-temperature record shows lag-1 autocorrelation rising from 0.55 to 0.78 over the period. (a) Convert each to a relaxation time in years. (b) Compute the implied change in the restoring rate. (c) Assess the claim that this shows the AMOC is approaching collapse.

(a) With $\rho_1 = e^{-|\mu|\Delta t}$ and $\Delta t = 1$ yr:

$$|\mu| = -\ln\rho_1: \qquad -\ln 0.55 = 0.598\ \mathrm{yr^{-1}}, \qquad -\ln 0.78 = 0.248\ \mathrm{yr^{-1}}.$$

Relaxation times: $1/0.598 = 1.67$ yr and $1/0.248 = 4.03$ yr.

(b) The restoring rate has fallen by a factor $0.598/0.248 = 2.4$, i.e. the system is recovering from perturbations 2.4 times more slowly than it was.

(c) The claim is **suggestive and far from proof**, for four reasons.

*The trend is consistent with slowing down but not diagnostic of it.* Any process that increases the memory of the system — a deepening mixed layer, a change in the noise's own spectrum, a shift in the observing network — produces the same signature.

*Detrending is a free parameter.* The autocorrelation of a residual depends on how the trend was removed, and the reported values shift materially between reasonable choices.

*It gives no threshold.* Critical slowing down says $|\mu|$ is decreasing; it does not say what value of the forcing sets $\mu = 0$, so it cannot say *when*. Linear extrapolation of $|\mu|$ to zero is not justified — near a fold $|\mu| \propto \sqrt{r_c - r}$, so the approach is *square-root*, meaning a naive linear extrapolation systematically overestimates the remaining time early and underestimates it late.

*The fingerprint is indirect.* The AMOC has been directly measured only since 2004 (the RAPID array); the 150-year record is a *proxy* — a sea-surface-temperature pattern assumed to track the overturning. That assumption is itself model-based.

*The general principle.* **Early-warning indicators are evidence about the direction of a stability parameter, not about the location of a threshold.** They are genuinely useful in that limited role, and they are routinely reported as though they were forecasts. The honest statement in this case is: consistent with a weakening system, unable to date a collapse, and dependent on a proxy whose validity is assumed.

## Watch out

- **You might think** Arctic summer sea ice is the canonical tipping element. **Actually** every model that has been tested shows it regrows within a few years if artificially removed — there is no bistability, because the seasonal insolation cycle dominates the albedo feedback. It is the clearest example of a dramatic, reversible response being mislabelled.
- **You might think** crossing a tipping point means rapid change. **Actually** it means *committed* change. Passing the West Antarctic threshold commits to metres of sea-level rise over centuries to millennia; nothing visible happens quickly. Abruptness of the commitment and abruptness of the consequence are different properties, and only the first is what "tipping" refers to.
- **You might think** the existence of thresholds means there is a safe level of warming below which nothing tips. **Actually** the thresholds are uncertain, spread over a wide range, and different for each element — so the *expected* number crossed rises smoothly with warming from about 1 K upward. Uncertainty over threshold locations converts a set of cliffs into a slope, which is why "avoid the tipping point" is not an implementable target and "less warming is better, continuously" is.

## One-liner

> A tipping point is a fold with hysteresis, not merely a big change — and the test is whether two stable states coexist, which Arctic summer sea ice fails and West Antarctica passes.

## Problems

**P1 (🟢)** For $\dot x = r + x - x^3$ at $r = 0.2$, the three equilibria are $x = 1.088$, $-0.879$ and $-0.209$. (a) Compute the stability eigenvalue $\mu = 1-3x^2$ at each. (b) Identify which is unstable. (c) Compute the relaxation time of each stable state, and say which of the two is the one that will be destroyed as $r$ increases toward the fold at $r = 0.385$.

**P2 (🟡)** A system's lag-1 autocorrelation is measured annually and rises from 0.60 in 1960 to 0.85 in 2020. (a) Compute the restoring rate $|\mu|$ at each date. (b) Near a fold, $|\mu| \propto \sqrt{r_c-r}$; if the forcing $r$ has increased linearly with time, use the two data points to estimate the year at which $|\mu| = 0$. (c) Compare with a naive linear extrapolation of $|\mu|$ itself and comment on which is more conservative.

**P3 (🔴, optional)** Classify each of the following as (i) a genuine bifurcation with hysteresis, (ii) a strongly nonlinear but reversible response, or (iii) a slow commitment with no bifurcation. Justify each in one or two sentences: (a) Arctic September sea ice; (b) West Antarctic ice-sheet retreat past a retrograde ridge; (c) thermosteric sea-level rise; (d) coral reef loss; (e) the snowball-Earth transition of a zero-dimensional energy-balance model.

<details>
<summary>Solutions</summary>

**P1** (a) $\mu = 1-3x^2$:

| $x^*$ | $3x^{*2}$ | $\mu$ |
|---|---|---|
| $1.088$ | $3.551$ | $-2.551$ |
| $-0.879$ | $2.318$ | $-1.318$ |
| $-0.209$ | $0.131$ | $+0.869$ |

(b) The middle root $x^* = -0.209$ has $\mu > 0$ and is **unstable** — as it must be, since stable and unstable equilibria alternate along the $x$-axis.

(c) $$\tau_{1.088} = \frac{1}{2.551} = 0.392, \qquad \tau_{-0.879} = \frac{1}{1.318} = 0.759.$$

As $r$ increases toward $+0.385$, the **lower** stable branch ($x = -0.879$) merges with the unstable branch ($x=-0.209$) and both vanish — that is the fold. Its relaxation time is already nearly twice the upper branch's, and it diverges as the fold is approached: at $r = 0.38$ the lower stable root sits near $-0.62$, giving $\mu = 1-3(0.384) = -0.153$ and $\tau = 6.5$, sixteen times the value at the far-from-fold branch. **The slowing branch is the one about to be destroyed**, which is exactly what makes critical slowing down a useful warning: the system tells you which state is at risk.

**P2** (a) $$|\mu|_{1960} = -\ln 0.60 = 0.511\ \mathrm{yr^{-1}}, \qquad |\mu|_{2020} = -\ln 0.85 = 0.163\ \mathrm{yr^{-1}}.$$

(b) With $|\mu| = k\sqrt{r_c-r}$ and $r$ linear in time, write $r_c - r = a(t_c - t)$ so $|\mu| = k\sqrt{a}\sqrt{t_c-t} \equiv K\sqrt{t_c - t}$. Two equations:

$$0.511 = K\sqrt{t_c - 1960}, \qquad 0.163 = K\sqrt{t_c-2020}.$$

Dividing: $$\frac{0.511}{0.163} = 3.135 = \sqrt{\frac{t_c-1960}{t_c-2020}} \quad\Longrightarrow\quad 9.83 = \frac{t_c-1960}{t_c-2020}.$$

$$9.83(t_c-2020) = t_c - 1960 \quad\Longrightarrow\quad 8.83\,t_c = 9.83(2020) - 1960 = 19\,856.6 - 1960 = 17\,896.6,$$
$$t_c = 2026.8.$$

(c) Naive linear extrapolation of $|\mu|$: it fell by $0.348$ over 60 years, i.e. $0.0058$ per year, so it reaches zero after a further $0.163/0.0058 = 28$ years, at **2048**.

The square-root form gives 2027; the linear form gives 2048. **The square-root form is the physically correct one near a fold, and it is far less conservative** — because $\sqrt{\cdot}$ flattens as it approaches zero, a given rate of decline in $|\mu|$ implies the fold is much closer than a straight line would suggest.

This is exactly the trap in reading early-warning analyses: fitting a line to a quantity that is intrinsically a square root will systematically place the threshold too far away. Two caveats in the other direction: the assumption that $r$ grows linearly is doing real work, and two data points cannot distinguish these functional forms in the presence of any noise at all. The honest conclusion from two autocorrelation estimates is "the restoring rate is falling", full stop.

**P3** (a) **Arctic September sea ice: (ii), strongly nonlinear but reversible.** Modelling studies that remove the ice artificially find it regrows within a few years; the seasonal insolation cycle is too strong for the ice–albedo feedback to sustain an ice-free state. Dramatic, fast, and not a bifurcation.

(b) **West Antarctic retreat past a retrograde ridge: (i), genuine bifurcation with hysteresis.** The fifth-power grounding-line flux law on an inland-deepening bed removes the stable equilibrium entirely ([5.4](05-04-the-cryosphere.md)); re-advancing the grounding line requires far more cooling than was needed to retreat it, because the ice must be regrown against the same geometry.

(c) **Thermosteric sea-level rise: (iii), slow commitment.** It is a linear integration of ocean heat uptake with no feedback and no multiple states. It is irreversible in practice only because the ocean's thermal timescale is centuries — the physics is entirely monotone.

(d) **Coral reef loss: (ii) with a biological threshold, not a dynamical one.** Calcification declines continuously with $\Omega$ ([4.3](04-03-ocean-acidification.md)) and bleaching risk rises continuously with temperature; the *impact* becomes discontinuous when net reef accretion crosses zero, but there is no bistability in the physics. Recovery, however, is limited by ecological rather than physical hysteresis (recruitment failure, algal phase shifts), which is a real form of path-dependence but a different one.

(e) **Snowball-Earth transition: (i), genuine bifurcation with enormous hysteresis.** The ice–albedo feedback becomes strong enough at low ice-line latitude that $\lambda$ passes through zero ([2.3](02-03-surface-albedo-cryosphere-feedback.md), P3); escaping the snowball state requires roughly 0.1 bar of $\mathrm{CO_2}$, orders of magnitude more forcing than was needed to enter it. This is the cleanest example in the whole subject and it is [6.1](06-01-energy-balance-models-bistability.md)'s subject.

*Check.* Notice the pattern: the genuine bifurcations both involve a feedback whose *strength grows with the state* — grounding-line flux with bed depth, albedo feedback with ice extent. A feedback of constant strength cannot produce bistability no matter how large it is; it produces amplification. **Bistability requires state-dependence, not merely positivity**, which is the single most useful diagnostic when assessing a claimed tipping element.

</details>

## Flashback

**From Lesson 4.3 (Ocean acidification):** A reef currently sits at $\Omega_{\text{arag}} = 3.2$ with atmospheric $\mathrm{CO_2}$ at 420 ppm, and $\Omega$ falls by 0.6 per 140 ppm. Calcification rate is proportional to $\Omega - 1$. (a) Compute $\Omega$ at 700 ppm. (b) Compute the calcification rate relative to today. (c) Is this a tipping point in the technical sense? Answer using this lesson's criterion.

<details>
<summary>Solution</summary>

(a) The rise is $700-420 = 280$ ppm, so

$$\Delta\Omega = -\frac{280}{140}\times0.6 = -1.2, \qquad \Omega = 3.2 - 1.2 = 2.0.$$

(b) $$\frac{G}{G_0} = \frac{\Omega-1}{\Omega_0-1} = \frac{2.0-1}{3.2-1} = \frac{1.0}{2.2} = 0.45,$$

a **55 percent reduction** in calcification.

(c) **No, not in the technical sense.** Apply the criterion: are there two stable states of the reef over a range of $\mathrm{CO_2}$? The chemistry says no — $\Omega$ is a monotone, single-valued function of atmospheric $\mathrm{CO_2}$, and calcification is a monotone function of $\Omega$. There is no fold, no unstable branch, no hysteresis in the *physical* system. Halve the $\mathrm{CO_2}$ and $\Omega$ returns to its former value immediately.

Two important qualifications, though, and they are why the reef nonetheless belongs on the tipping-element list:

**A threshold in the impact.** Net reef accretion is gross calcification minus erosion and dissolution. Erosion is roughly constant, so net accretion crosses zero at a particular $\Omega$ ([4.3](04-03-ocean-acidification.md), Example 2) — around $\Omega = 1.9$ in that calculation. Below it the structure erodes. The underlying function is smooth; the *sign change* is not, and reef structures are built by an accumulation, so a sign change in the rate is a qualitative change in the outcome.

**Ecological hysteresis, which is real.** A dead reef does not simply regrow when conditions improve. Algal overgrowth, loss of the three-dimensional structure that provides recruitment habitat, and loss of the fish that graze the algae combine into a self-sustaining degraded state. That *is* a bistability — but it is in the ecology, not in the carbonate chemistry, and its control parameter is not $\mathrm{CO_2}$.

*Check.* This is the general shape of the answer for most claimed tipping elements: **the physical driver is smooth and the system's response has a threshold somewhere else** — in an impact metric, in an ecological state, or in an engineering tolerance. That is worth knowing rather than dismissing: a threshold in the ecology is just as consequential as one in the physics. What is not defensible is calling it a tipping point *in the climate system*, which implies a feedback onto climate that does not exist here.

</details>

## Connections

- **Backward:** marine ice-sheet instability ([5.4](05-04-the-cryosphere.md)) and AMOC bistability ([5.5](05-05-circulation-regional-response.md)) are the two strongest candidates; the state-dependent albedo feedback of [2.3](02-03-surface-albedo-cryosphere-feedback.md) is the ingredient that makes bistability possible at all.
- **Forward:** [6.1](06-01-energy-balance-models-bistability.md) constructs the full bifurcation diagram for the simplest climate model there is and shows Snowball Earth falling out of it; [6.3](06-03-ice-ages-100-kyr-problem.md) uses threshold behaviour to resolve the 100-kyr problem.
- **Sideways (dynamical systems):** everything here is [`dynamical-systems` 3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md) — saddle-node bifurcations, hysteresis loops, and the vanishing eigenvalue at the fold. Critical slowing down is the Ornstein–Uhlenbeck variance formula with a diverging relaxation time, and it is the same phenomenon as critical opalescence at a phase transition ([`stat-mech` 5.4](../../stat-mech/lessons/05-04-critical-exponents-universality.md)) — fluctuations grow without bound as the restoring force vanishes.
