# Physical Oceanography · Lesson 6.4: AMOC stability, the Stommel model and abrupt change

> ⏱ ~15 min · Module 6: The ocean in the climate system · Builds on: [4.2](04-02-deep-water-formation-convection.md), [4.4](04-04-what-drives-the-overturning.md), [dynamical-systems 3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md) · Unlocks: [6.5](06-05-observing-the-ocean.md)

## Why this matters

[climate-science 5.5](../../climate-science/lessons/05-05-circulation-regional-response.md) and [5.6](../../climate-science/lessons/05-06-tipping-elements-thresholds.md) treated the AMOC as a tipping element and named its hysteresis without deriving it. This lesson derives it, from a model Henry Stommel wrote down in 1961 that fits on one line and contains the entire phenomenon: two stable states, a bifurcation, hysteresis, and a threshold in freshwater forcing.

The mechanism is the **salt-advection feedback**, and it is worth stating plainly because it is unlike the feedbacks elsewhere in this course. A strong AMOC carries salty subtropical water north. Salt makes that water dense. Dense water sinks, which strengthens the AMOC. **The circulation supplies the very salt that keeps it running.** Weaken it, and it delivers less salt, which weakens it further. That is a positive feedback with the circulation as both cause and effect, and positive feedbacks of that shape produce multiple equilibria.

The paleorecord shows the ocean using both states. The last glacial period contains 25 abrupt warmings — Dansgaard–Oeschger events — in which Greenland warmed 8 to 16 K in a few decades, and the standard interpretation is that the AMOC switched on and off. Whether the modern system is close to such a threshold is genuinely unresolved, and this lesson explains both why the question is hard and why the models may be biased toward saying no.

## The idea

**Two boxes, and one competition.** Model the Atlantic as an equatorial box and a polar box. The equatorial box is warm and salty; the polar box is cold and fresh. Temperature makes the polar box denser and drives an overturning; salinity makes it lighter and opposes. **The overturning runs on the difference, and the difference can go either way.**

**The circulation carries its own salt.** The stronger the overturning, the faster it flushes the polar box with salty water from the south, and the smaller the salinity contrast becomes — which strengthens the overturning further. So the salinity difference is not an external parameter; it is set by the circulation that it in turn controls.

**Add freshwater and the loop can break.** Freshening the polar box weakens the overturning, which flushes less salt north, which lets the polar box freshen further. Below a critical circulation strength the loop runs away and the overturning collapses to a second, much weaker or reversed state. **The transition is abrupt, not gradual**, because it happens at a fold in the solution curve.

**And it does not come back when you stop.** The two states coexist over a range of freshwater forcing. Having crossed the fold in one direction, you must reverse the forcing well past where you started to cross back. That is **hysteresis**, and it is what distinguishes a tipping point from a threshold response.

**The paleorecord shows both states in use.** During the last glacial, Greenland ice cores record 25 abrupt warmings of 8 to 16 K within decades, each followed by a slow cooling. Antarctic cores record the mirror image, warming slowly whenever the North was cold — the **bipolar seesaw**, which is exactly what an AMOC switching on and off would produce, since the overturning steals heat from the southern hemisphere and delivers it north ([4.5](04-05-meridional-heat-transport-bjerknes.md)).

## The formal version

**The Stommel two-box model.** Let $\Delta T$ and $\Delta S$ be the equator-minus-pole temperature and salinity differences, and let the overturning strength be proportional to the density difference:

$$q = C\left(\alpha\,\Delta T - \beta\,\Delta S\right).$$

*In words: the overturning is driven by the temperature contrast and opposed by the salinity contrast.* Temperature relaxes fast to the atmosphere's imposed value, so treat $\Delta T$ as fixed. Salinity obeys

$$\frac{d\,\Delta S}{dt} = F_S - \frac{2|q|}{V}\Delta S,$$

*In words: freshwater forcing $F_S$ builds up the salinity contrast; the overturning flushes it away.*

**Non-dimensionalize.** Define

$$y = \frac{\beta\,\Delta S}{\alpha\,\Delta T}, \qquad E = \frac{\beta F_S V}{2C(\alpha\Delta T)^2}.$$

*In words: $y$ is the fraction of the density contrast that salinity cancels, and $E$ is the freshwater forcing scaled by the thermal driving.* The steady state becomes

$$\boxed{\ E = y\left|1-y\right|, \qquad q \propto 1-y\ }$$

**The S-curve.** For $y<1$ (thermally driven, $q>0$) the relation $E = y(1-y)$ is a parabola with a maximum:

$$\frac{dE}{dy} = 1-2y = 0 \;\Longrightarrow\; y = \tfrac12, \qquad E_{\max} = \tfrac14.$$

So:

| Branch | $y$ | $E$ | $q$ | Stability |
|---|---|---|---|---|
| **ON** | $0$ to $0.5$ | $0$ to $0.25$ | $1$ down to $0.5$ | **stable** |
| middle | $0.5$ to $1$ | $0.25$ down to $0$ | $0.5$ down to $0$ | **unstable** |
| **OFF** | $>1$ | $0$ upward | negative | **stable** |

*In words: for $E < 1/4$ there are two stable states; at $E = 1/4$ the ON branch meets the unstable one and both vanish; beyond that only the reversed state exists.* The disappearance of a stable and an unstable solution in a pair, at a fold, is a **saddle-node bifurcation** ([dynamical-systems 3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md)).

**Where is the real system?** Using $\alpha = 1.5\times10^{-4}\ \mathrm{K^{-1}}$, $\beta = 8\times10^{-4}$, an equator-to-pole $\Delta T$ of 20 K and $\Delta S$ of 1.5:

$$y = \frac{8\times10^{-4}\times1.5}{1.5\times10^{-4}\times20} = \frac{1.2\times10^{-3}}{3.0\times10^{-3}} = 0.40, \qquad E = 0.40\times0.60 = 0.24.$$

Against $E_{\text{crit}} = 0.25$ — **four percent below the fold.** Varying $\Delta T$ over a plausible 18 to 25 K moves $y$ from 0.44 to 0.32 and $E$ from 0.247 to 0.218, so the conclusion is robust *within the model*: the box model places the present AMOC very close to its threshold.

**That result must be quoted with its caveats, and they are large.** The model has two boxes, one salinity, no wind, no eddies, no Southern Ocean, and a hydraulic law with no derivation. The values of $\Delta T$ and $\Delta S$ are not sharply defined for a real basin. Comprehensive models generally place the threshold further away. The honest statement is: **the simplest model that contains the physics says we are close, which is why the question is taken seriously, not that we have measured the distance.**

**How much freshwater?** Moving from $y = 0.40$ to $y = 0.50$ at $\Delta T = 20$ K requires $\Delta S$ to rise from 1.5 to

$$\Delta S_{\text{crit}} = \frac{0.5\,\alpha\Delta T}{\beta} = \frac{0.5\times3.0\times10^{-3}}{8\times10^{-4}} = 1.875,$$

a further freshening of the polar box by 0.375. Diluting a polar box 1000 m deep and $2\times10^{13}\ \mathrm{m^2}$ in area by that much requires a freshwater layer of

$$h = 1000\times\frac{0.375}{34.5} = 10.9\ \mathrm{m}, \qquad V = 2.2\times10^{14}\ \mathrm{m^3},$$

which delivered over a century is

$$Q = \frac{2.2\times10^{14}}{3.156\times10^{9}} = 6.9\times10^{4}\ \mathrm{m^3\,s^{-1}} = 0.069\ \mathrm{Sv}.$$

Greenland's current net loss is about $0.0086\ \mathrm{Sv}$, so this is **eight times the present melt rate sustained for a century**. Large, but not absurd — and Greenland's loss rate has roughly quadrupled since the 1990s.

**Why models may be biased stable.** There is a diagnostic, $M_{\text{ov}}$: the freshwater transported *by the overturning* across the Atlantic's southern boundary at 34°S.

- If $M_{\text{ov}} < 0$, the overturning **exports** freshwater from the Atlantic (equivalently, imports salt). Weaken it and it exports less freshwater, so freshwater accumulates in the Atlantic, so it weakens further. **Positive feedback: bistable.**
- If $M_{\text{ov}} > 0$, the overturning **imports** freshwater. Weaken it and less freshwater arrives, so the Atlantic gets saltier and the overturning recovers. **Negative feedback: monostable, no collapse possible.**

**Observations put $M_{\text{ov}} < 0$; most CMIP-class models put it $> 0$.** A model with the wrong sign of $M_{\text{ov}}$ cannot exhibit bistability regardless of how well everything else is represented, so the widespread model result that the AMOC weakens smoothly and does not collapse may be a structural artefact rather than a finding. This is the strongest argument that the risk is underestimated, and it is why $M_{\text{ov}}$ is now a standard model-evaluation metric.

**Dansgaard–Oeschger events and the bipolar seesaw.**

| Feature | Observation |
|---|---|
| Number in the last glacial | about 25 |
| Greenland warming per event | 8–16 K |
| Onset timescale | 1–3 decades |
| Recurrence | 1000–3000 yr |
| Antarctic counterpart | slow warming while Greenland is cold, and vice versa |

*In words: the north and south are anti-phased, with the south responding slowly.* The seesaw follows from [4.5](04-05-meridional-heat-transport-bjerknes.md): the AMOC carries heat *northward across the equator*, so switching it off warms the southern hemisphere and cools the northern one, with the south's response damped and lagged by the Southern Ocean's large heat capacity.

## Picture

![The Stommel model's S-curve: overturning strength q plotted against non-dimensional freshwater forcing E. The upper blue ON branch runs from q equal to 1 at E equal to zero, curving right and down to q equal to 0.5 at E equal to 0.25, where a coral dot marks a saddle-node bifurcation. A dashed grey unstable branch runs back from that fold to q equal to 0 at E equal to zero. A lower blue OFF branch, with q negative, extends to the right. A grey dot just left of the fold marks the present AMOC on this model's numbers. Dashed coral arrows show collapse downward from the fold and recovery upward only after E has returned to zero](assets/06-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — locating the system on the S-curve).** A two-box Atlantic has $\alpha = 1.5\times10^{-4}\ \mathrm{K^{-1}}$, $\beta = 8\times10^{-4}$, $\Delta T = 22\ \mathrm{K}$ and $\Delta S = 1.4$.

(a) *The non-dimensional salinity.*
$$y = \frac{\beta\Delta S}{\alpha\Delta T} = \frac{8\times10^{-4}\times1.4}{1.5\times10^{-4}\times22} = \frac{1.12\times10^{-3}}{3.30\times10^{-3}} = 0.339.$$

(b) *The forcing it implies.*
$$E = y(1-y) = 0.339\times0.661 = 0.224.$$

(c) *Distance to the fold.*
$$\frac{E_{\text{crit}} - E}{E_{\text{crit}}} = \frac{0.250-0.224}{0.250} = 10.4\ \text{percent}.$$

(d) *The freshwater needed to close the gap.* Crossing requires $y \to 0.5$, i.e.
$$\Delta S_{\text{crit}} = \frac{0.5\times3.30\times10^{-3}}{8\times10^{-4}} = 2.06,$$
a freshening of $2.06 - 1.40 = 0.66$ — nearly twice the previous case, because a warmer $\Delta T$ puts the system further from the fold.

Note how sensitive the answer is to $\Delta T$: raising it from 20 to 22 K moved the system from 4 percent to 10 percent below the fold. **The distance to the threshold is a small difference of two moderately-known quantities**, which is the recurring structural problem of this whole module.

**Example 2 (why you'd care — what an early-warning signal would look like, and whether we have one).** Systems approaching a saddle-node bifurcation show a characteristic behaviour: the restoring rate goes to zero, so the system recovers ever more slowly from perturbations. This is **critical slowing down**. Work out what it predicts and evaluate whether the observations support it.

*The mathematics.* Near the fold, write the dynamics as $\dot x = \mu - x^2$ with $\mu \to 0^+$ at the bifurcation. The stable fixed point is $x^* = \sqrt\mu$, and linearizing there gives a decay rate

$$\lambda = -2\sqrt\mu, \qquad \tau_{\text{recovery}} = \frac{1}{2\sqrt\mu}.$$

As $\mu\to0$, $\tau\to\infty$. **The recovery time diverges at the bifurcation.**

*The observable consequences.* A system driven by noise, with a lengthening recovery time, shows:

- **Rising lag-1 autocorrelation** — each year resembles the last more closely, because perturbations persist longer.
- **Rising variance** — the same noise produces larger excursions when the restoring force is weaker.
- **Rising skewness**, because the fold is on one side.

These are model-free: they follow from the bifurcation's normal form, not from any oceanography.

*What the data show.* Several published analyses of AMOC "fingerprint" indices — subpolar North Atlantic sea surface temperature, salinity indices, and reconstructions from proxies — report increasing autocorrelation and variance over the 20th century, and some extrapolate the trend to estimate a collapse date. The extrapolations have produced dates ranging from the 2020s to 2100 and beyond, with enormous uncertainty.

*Why to be cautious, and it is worth being specific.*

1. **The indices are not the AMOC.** They are sea surface temperature patterns assumed to track it. If the pattern is contaminated by aerosol forcing or by Atlantic Multidecadal Variability ([6.2](06-02-ocean-heat-uptake-circulation.md)), the statistics of the index are not the statistics of the circulation.
2. **Rising variance has other causes.** Any increase in the *forcing* noise raises variance without any change in stability. Separating the two requires knowing the noise level independently, which we do not.
3. **The extrapolation assumes the normal form all the way.** Critical slowing down is a statement about behaviour *near* the fold; extrapolating a trend in autocorrelation to the date it reaches 1 assumes the system is already in the asymptotic regime, which cannot be checked.
4. **The direct record is 20 years long.** RAPID has measured the AMOC continuously since 2004 ([6.5](06-05-observing-the-ocean.md)), and 20 years is far too short to establish a trend against multidecadal variability of comparable amplitude.

*The point.* **Critical slowing down is a real and general prediction, and it is much easier to detect than to attribute.** The statistical signature is robust; the identification of what is slowing down, and whether the slowing is due to approaching a fold rather than to changing noise, is not. The proper response is neither to dismiss the analyses nor to treat their extrapolated dates as forecasts, but to note that they raise the prior on a mechanism whose existence is independently established by the paleorecord — and to keep the direct measurement running.

## Watch out

- **You might think** the salt-advection feedback is a small correction to a thermally-driven circulation. **Actually** it is the whole source of the multiple equilibria. Remove it — hold $\Delta S$ fixed externally — and the model has one solution for every forcing and no tipping point at all.
- **You might think** a gradual freshening produces a gradual weakening. **Actually** the ON branch weakens only from $q = 1$ to $q = 0.5$ over the whole approach to the fold, and then collapses discontinuously. **Half the total change happens in the last instant**, which is precisely what makes the threshold dangerous and the early warning valuable.
- **You might think** that because comprehensive models do not collapse, the risk is low. **Actually** most of them have the wrong sign of $M_{\text{ov}}$, which precludes bistability by construction. A model that cannot exhibit the phenomenon is not evidence against it.

## One-liner

> A stronger overturning carries more salt north, which makes the north denser, which strengthens the overturning — a feedback that gives Stommel's two-box model two stable states separated by a fold, so that a slow freshening produces a slow weakening and then an abrupt collapse that does not reverse when the freshening stops.

## Problems

**P1 (🟢)** A two-box model has $\alpha = 1.6\times10^{-4}\ \mathrm{K^{-1}}$, $\beta = 7.9\times10^{-4}$, $\Delta T = 18\ \mathrm{K}$, $\Delta S = 1.3$. (a) Compute $y$. (b) Compute $E$ and compare with $E_{\text{crit}} = 0.25$. (c) Compute the salinity difference at which the system would reach the fold, and the additional freshening required.

**P2 (🟡)** Take the steady-state relation $E = y(1-y)$ on the ON branch. (a) Solve for $y$ in terms of $E$ and identify which root is the stable one. (b) Compute $y$ and $q \propto (1-y)$ for $E = 0.10$, $0.20$, $0.24$ and $0.2499$. (c) Tabulate the fractional reduction in $q$ from its $E=0$ value at each. (d) Comment on how much warning a smooth observation of $q$ would give.

**P3 (🔴, optional)** Critical slowing down. Near a saddle-node, $\dot x = \mu - x^2$ with the stable point at $x^* = \sqrt\mu$. (a) Linearize about $x^*$ and find the decay rate and recovery time. (b) The system is forced by white noise of variance $\sigma^2$ per unit time. For an Ornstein–Uhlenbeck process $\dot x = -\lambda x + \xi$, the stationary variance is $\sigma^2/(2\lambda)$ and the lag-1 autocorrelation at sampling interval $\Delta t$ is $e^{-\lambda\Delta t}$. Express both in terms of $\mu$. (c) If $\mu$ falls by a factor of 4, compute the factors by which the recovery time, the variance, and $-\ln(\text{autocorrelation})$ change. (d) Given annual sampling and a present recovery time of 20 years, compute the lag-1 autocorrelation now and after $\mu$ falls by a factor of 4. (e) State how many years of data would be needed to distinguish those two autocorrelations at 95 percent confidence, given that the standard error of a lag-1 autocorrelation estimate from $n$ points is roughly $1/\sqrt n$, and comment.

<details>
<summary>Solutions</summary>

**P1** (a) $$y = \frac{7.9\times10^{-4}\times1.3}{1.6\times10^{-4}\times18} = \frac{1.027\times10^{-3}}{2.88\times10^{-3}} = 0.357.$$

(b) $$E = 0.357\times0.643 = 0.2295.$$

Against $E_{\text{crit}} = 0.25$, that is **8.2 percent below the fold**.

(c) The fold is at $y = 0.5$:
$$\Delta S_{\text{crit}} = \frac{0.5\times2.88\times10^{-3}}{7.9\times10^{-4}} = 1.823,$$
an additional freshening of $1.823 - 1.300 = 0.523$.

**P2** (a) $$y^2 - y + E = 0 \;\Longrightarrow\; y = \frac{1\pm\sqrt{1-4E}}{2}.$$

The **minus** root is the stable one: it gives $y < 0.5$, hence the ON branch. The plus root is the unstable middle branch.

(b) 

| $E$ | $\sqrt{1-4E}$ | $y$ | $q \propto 1-y$ |
|---|---|---|---|
| 0 | 1.000 | 0.000 | 1.000 |
| 0.10 | 0.7746 | 0.1127 | 0.8873 |
| 0.20 | 0.4472 | 0.2764 | 0.7236 |
| 0.24 | 0.2000 | 0.4000 | 0.6000 |
| 0.2499 | 0.0200 | 0.4900 | 0.5100 |

(c) Fractional reduction in $q$ from its $E=0$ value:

| $E$ | $E/E_{\text{crit}}$ | reduction in $q$ |
|---|---|---|
| 0.10 | 40 percent | 11 percent |
| 0.20 | 80 percent | 28 percent |
| 0.24 | 96 percent | 40 percent |
| 0.2499 | 99.996 percent | 49 percent |
| just past | — | **collapse to reversed** |

(d) **Very little warning, and the reason is the square root.** At 80 percent of the way to the threshold in forcing, the overturning has weakened by only 28 percent — a change comparable to natural multidecadal variability and to the measurement uncertainty. Even at 96 percent of the way, it has weakened by 40 percent, and it never weakens by more than 50 percent before collapsing.

The functional form is the culprit: near the fold $1-y \approx \tfrac12 + \tfrac12\sqrt{1-4E}$, so $q$ depends on the *square root* of the distance to the threshold. A square root has infinite slope at zero, which means $q$ changes slowly while $E$ is far away and then all at once — but in the *wrong* variable for early warning, since we can observe $q$ and not $E$.

**A smooth, monotonic, unalarming weakening is exactly what approaching this bifurcation looks like from the outside**, and it is why the statistical early-warning indicators of Example 2 — which respond to the *stability*, not the state — are pursued despite their difficulties.

**P3** (a) Let $x = \sqrt\mu + \delta$. Then

$$\dot\delta = \mu - (\sqrt\mu+\delta)^2 = \mu - \mu - 2\sqrt\mu\,\delta - \delta^2 \approx -2\sqrt\mu\,\delta,$$

$$\lambda = 2\sqrt\mu, \qquad \tau = \frac{1}{\lambda} = \frac{1}{2\sqrt\mu}.$$

(b) $$\mathrm{Var} = \frac{\sigma^2}{2\lambda} = \frac{\sigma^2}{4\sqrt\mu}, \qquad \mathrm{AC1} = e^{-\lambda\Delta t} = e^{-2\sqrt\mu\,\Delta t}.$$

(c) If $\mu \to \mu/4$, then $\sqrt\mu \to \sqrt\mu/2$:

| Quantity | Scaling | Factor |
|---|---|---|
| Recovery time $\tau$ | $\mu^{-1/2}$ | $\times2$ |
| Variance | $\mu^{-1/2}$ | $\times2$ |
| $-\ln(\mathrm{AC1}) = \lambda\Delta t$ | $\mu^{1/2}$ | $\times\tfrac12$ |

(d) With $\Delta t = 1$ yr and $\tau = 20$ yr, $\lambda = 0.05\ \mathrm{yr^{-1}}$:

$$\mathrm{AC1}_{\text{now}} = e^{-0.05} = 0.9512.$$

After $\mu$ falls by 4, $\lambda = 0.025$:

$$\mathrm{AC1}_{\text{after}} = e^{-0.025} = 0.9753.$$

(e) The difference is $0.9753 - 0.9512 = 0.0241$. For a two-sided 95 percent test the difference must exceed about $1.96\sqrt2/\sqrt n$ (two independent estimates), so

$$n > \left(\frac{1.96\sqrt2}{0.0241}\right)^2 = \left(\frac{2.772}{0.0241}\right)^2 = (115)^2 = 1.3\times10^{4}\ \text{years}.$$

**Thirteen thousand years of annual data** to distinguish, at 95 percent confidence, a system whose distance to the bifurcation has been *quartered*.

That number is the honest core of the early-warning problem, and it deserves to be stated without softening. A fourfold change in stability — an enormous change, taking the system from comfortably stable to nearly critical — produces a change in the lag-1 autocorrelation of 0.024, which is buried in the sampling noise of any record we will ever have.

Three qualifications, all of which help and none of which rescues the situation:

- Published analyses use **sliding windows and trend tests** rather than comparing two points, which is more efficient, and they combine multiple indicators (variance, autocorrelation, skewness), which helps if the indicators are independent.
- They use **monthly or higher-frequency data**, raising $n$ by an order of magnitude — though at the cost that the relevant $\lambda$ is contaminated by faster processes.
- The published claims are generally not "we have detected criticality" but "the indicator trends are consistent with destabilization", which is a much weaker and more defensible statement than the headlines they generate.

**The general lesson is worth more than the specific one: a diagnostic can be theoretically sound, correctly derived, and statistically hopeless.** Critical slowing down is real, and its signature in a century of noisy data from a system with 60-year internal variability is far too small to carry the weight that is often placed on it. The right response is to weight the paleoclimate evidence — which shows the transitions actually happening — more heavily than the statistical extrapolations, and to keep measuring the circulation directly.

</details>

## Flashback

**From Lesson 6.2 (How the ocean takes up heat):** The planetary energy imbalance is $N = 0.7\ \mathrm{W\,m^{-2}}$, 91 percent goes into the ocean, Earth's area is $5.1\times10^{14}\ \mathrm{m^2}$, and $\rho_0c_p = 4.10\times10^{6}\ \mathrm{J\,m^{-3}\,K^{-1}}$. (a) Compute the ocean heat uptake in watts. (b) If subducting water carries a 0.45 K anomaly, compute the subduction rate required, in Sv. (c) State in one sentence why a purely diffusive account of the uptake fails, referring to the vertical structure of the observed warming rather than to its magnitude.

<details>
<summary>Solution</summary>

(a) $$H = 0.91\times0.7\times5.1\times10^{14} = 3.25\times10^{14}\ \mathrm{W}.$$

(b) $$Q = \frac{3.25\times10^{14}}{4.10\times10^{6}\times0.45} = \frac{3.25\times10^{14}}{1.845\times10^{6}} = 1.76\times10^{8}\ \mathrm{m^3\,s^{-1}} = 176\ \mathrm{Sv},$$

comfortably within the 100 to 300 Sv range of estimated global subduction.

(c) A diffusive account predicts warming that decreases monotonically with depth in a smooth exponential profile, whereas the observed warming has maxima at particular *density* surfaces — different depths in different basins, tracking the ventilated isopycnals — which is the signature of advection along ventilation pathways and cannot be produced by any depth-dependent diffusivity.

*Check.* This is worth separating from the magnitude argument because the two have different logical force. The magnitude argument ("$\kappa$ would have to be fifty times larger") depends on the measured value of $\kappa$ and could in principle be evaded by claiming the measurement is unrepresentative — which is exactly what [4.3](04-03-diapycnal-mixing-abyssal-recipe.md) showed *can* happen for the abyssal average. The structural argument depends on nothing but the shape of the observed field, so it cannot be evaded that way. **When you have both a magnitude argument and a structure argument, the structure argument is usually the stronger one.**

</details>

## Connections

- **Backward:** the salt-advection feedback runs on the deep-water formation of [4.2](04-02-deep-water-formation-convection.md), whose sensitivity to freshwater that lesson computed directly; the bipolar seesaw follows from the cross-equatorial heat transport of [4.5](04-05-meridional-heat-transport-bjerknes.md); the mechanical driving of [4.4](04-04-what-drives-the-overturning.md) does *not* remove the instability, because it is the buoyancy forcing that is unstable.
- **Forward:** [6.5](06-05-observing-the-ocean.md) covers the RAPID and OSNAP arrays, built precisely because the indirect indicators discussed here are inadequate.
- **Sideways (dynamical systems):** the S-curve is a saddle-node bifurcation ([`dynamical-systems` 3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md)), the collapse is the fold, and the early-warning theory is the normal form's universal behaviour near it. The same structure governs the ice–albedo bistability of [`climate-science` 6.1](../../climate-science/lessons/06-01-energy-balance-models-bistability.md) and the Kuroshio's two paths in [3.3](03-03-gulf-stream-kuroshio.md) — three physically unrelated systems with identical mathematics.
