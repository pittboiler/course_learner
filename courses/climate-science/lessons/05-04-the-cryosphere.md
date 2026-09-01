# Climate Physics · Lesson 5.4: The cryosphere

> ⏱ ~15 min · Module 5: What actually changes · Builds on: [2.3](02-03-surface-albedo-cryosphere-feedback.md), [5.3](05-03-sea-level-rise.md), [geology 3.4](../../geology/lessons/03-04-glaciers-ice-ages.md) · Unlocks: [5.6](05-06-tipping-elements-thresholds.md), [6.3](06-03-ice-ages-100-kyr-problem.md)

## Why this matters

[Geology 3.4](../../geology/lessons/03-04-glaciers-ice-ages.md) treats ice as a landform — how it flows, what it carves. This lesson treats it as a **climate component**: something with a mass budget that responds to forcing and feeds back on it. The reason to do so carefully is that the cryosphere contains the single largest source of genuinely open-ended risk in the entire subject. Almost every other quantity in this course has a bounded uncertainty; **marine ice-sheet instability does not**, because it is a positive feedback with no stabilizing term until the ice sheet is gone. If a threshold has already been crossed in West Antarctica — and it may have been — then several metres of sea-level rise are committed regardless of what happens to emissions.

## The idea

**Two ices, two entirely different problems.** Sea ice floats: melting it changes albedo and insulation but not sea level. Land ice sits on rock: melting it raises sea level but changes albedo only over its (large) footprint. Confusing them is the most common error in this area.

**Sea ice is thinning faster than it is shrinking.** September Arctic extent has fallen about 13 percent per decade, but *volume* has fallen far more, because the thick multi-year ice that used to survive the summer has largely been replaced by thin first-year ice. Extent is what satellites saw first and what gets reported; volume is what matters physically.

**An ice sheet's budget has three terms and only two of them are climate.** Mass balance is accumulation (snowfall) minus surface ablation (melt and runoff) minus **dynamic discharge** (ice flowing across the grounding line into the ocean). The first two respond to atmospheric conditions in a predictable way. The third is glaciology, and it is where the uncertainty lives.

**Greenland and Antarctica are losing mass by different mechanisms.** Greenland is warm enough at its margins to melt at the surface, and about two thirds of its loss is surface melt. Antarctica is far too cold for that; essentially all its loss is dynamic — glaciers accelerating because the floating ice shelves that restrained them are being thinned from below by warm ocean water.

**Ice shelves do not raise sea level and are the whole story anyway.** A floating shelf already displaces its weight, so its loss adds nothing directly. But it *buttresses* — it presses back against the grounded ice behind. Remove it and the tributary glaciers accelerate several-fold, which does raise sea level. Larsen B's collapse in 2002 was the natural experiment: its feeder glaciers sped up by factors of two to eight within a year.

**And on a bed that deepens inland, retreat is self-sustaining.** Ice discharge across the grounding line depends steeply on ice thickness there — roughly as the fifth power. If retreating puts the grounding line on *deeper* bedrock, the ice there is thicker, so discharge increases, so it retreats further. That is **marine ice-sheet instability**, and it is the mechanism behind the unbounded upper tail of [5.3](05-03-sea-level-rise.md).

## The formal version

**Sea ice.** Observed trends:

| Quantity | Trend |
|---|---|
| Arctic September extent | $-13$ percent per decade since 1979 |
| Arctic September volume | $-70$ percent since 1979 |
| Arctic multi-year ice fraction | from ~60 percent to ~20 percent |
| Antarctic sea ice | no significant trend 1979–2015, then sharp decline after 2016 |

The Antarctic behaviour is a genuine puzzle: sea ice there grew slightly for three decades against expectation (attributed variously to ozone-driven wind changes, freshening from ice-shelf melt, and internal variability), then dropped abruptly to record lows after 2016. Whether that is a regime shift or variability is unresolved.

**Arctic amplification, seasonally resolved.** The Arctic warms 3–4 times the global rate, and the warming is concentrated in **autumn and winter**, not summer. The mechanism was set up in [2.3](02-03-surface-albedo-cryosphere-feedback.md) and completes here: summer sunlight goes into *melting ice at 0 °C*, which stores energy in the ocean at fixed temperature; then in autumn, with the ice thin or absent, that heat escapes upward and warms the air. Sea ice is also a thermal insulator — 2 m of ice cuts the winter ocean-to-atmosphere heat flux by an order of magnitude — so removing it opens a heat leak that operates precisely when the atmosphere is coldest.

**Ice-sheet mass balance.**

$$\frac{dM}{dt} = \underbrace{A}_{\text{accumulation}} - \underbrace{R}_{\text{surface runoff}} - \underbrace{D}_{\text{dynamic discharge}}.$$

*In words: snow in, melt out, ice flowing into the sea.* Current values, Gt per year (2010s averages):

| | Greenland | Antarctica |
|---|---|---|
| Accumulation | ~700 | ~2100 |
| Surface runoff | ~500 | ~0 |
| Discharge | ~470 | ~2250 |
| **Net** | $\approx -270$ | $\approx -150$ |

Note the structure. Greenland's loss is roughly two-thirds surface melt; Antarctica's is entirely dynamic. That difference matters for projections: surface melt scales fairly predictably with air temperature, while discharge depends on ocean heat delivered beneath ice shelves and on grounding-line dynamics.

**Ice shelves and buttressing.** A floating shelf is in hydrostatic equilibrium, so its melting produces no direct sea-level change. Its role is mechanical: where it contacts sidewalls or grounds on seabed pinning points, it exerts back-stress on the grounded ice upstream. Reduce that back-stress and the grounded ice accelerates.

The dominant process thinning Antarctic shelves is not surface melt but **basal melt** by Circumpolar Deep Water — relatively warm (about $+1$ °C), salty water that upwells onto the continental shelf and reaches the ice-shelf cavities. In the Amundsen Sea sector (Pine Island and Thwaites glaciers), basal melt rates reach tens of metres per year.

**Marine ice-sheet instability.** The key result (Schoof, 2007) is that the ice flux across the grounding line depends very steeply on the ice thickness there:

$$Q_g \propto h_g^{\,\beta}, \qquad \beta \approx 5.$$

*In words: doubling the thickness at the grounding line increases discharge roughly thirty-fold.* And by flotation, the thickness at the grounding line is fixed by the water depth:

$$h_g = \frac{\rho_w}{\rho_i}\,d \approx 1.12\,d,$$

with $d$ the bed depth below sea level. So $Q_g \propto d^{\,5}$.

Now consider the stability. On a **prograde** bed (deepening seaward), a retreat moves the grounding line to *shallower* water, thinning it, reducing discharge — self-limiting, stable. On a **retrograde** bed (deepening inland), retreat moves it to *deeper* water, thickening it, increasing discharge — self-amplifying, **unstable**. There is no equilibrium grounding-line position on a retrograde slope.

$$\boxed{\ \text{retrograde bed} \ \Longrightarrow\ \text{no stable grounding line}\ }$$

The West Antarctic Ice Sheet sits almost entirely on a retrograde bed, much of it more than a kilometre below sea level, with the deepest basins inland. That is the physical basis for the concern, and it is geometry, not modelling.

**Marine ice-cliff instability.** A more speculative amplification. If a shelf is removed entirely, the grounded ice terminates in a vertical cliff. Above roughly 90–100 m of exposed cliff height, the ice cannot support its own weight and fails structurally, exposing a new cliff behind it. In the deep West Antarctic basins the cliff heights after shelf loss would be far above that. Including MICI in models produces multi-metre 21st-century contributions; excluding it produces tens of centimetres. **The mechanism is contested** — it has been observed in small Greenland outlet glaciers but never at the required scale, and subsequent work suggests the failure rate may be self-limiting. This single unresolved question is most of the width of the sea-level upper tail.

**Greenland's threshold: the elevation feedback.** Greenland's ice surface reaches 3 km, where the air is 20 K colder than at sea level. Lower the surface by melting and it sits in *warmer* air, so it melts faster. This **surface-elevation feedback** creates a threshold: above roughly 1.5–3 K of local warming sustained for long enough, the ice sheet has no stable configuration and the eventual loss is most of its 7.4 m, over one to ten millennia. Crossing the threshold does not produce fast sea-level rise; it produces *irreversible* rise.

**Permafrost carbon.** Roughly 1400 PgC is frozen in northern permafrost soils — comparable to the atmosphere's 875 and to all remaining conventional fossil reserves. Thaw deepens the active layer and exposes carbon to decomposition. Estimates of release by 2100 are 10–50 PgC per kelvin of high-latitude warming, with large uncertainty about the aerobic/anaerobic split (which determines whether it emerges as $\mathrm{CO_2}$ or as the far more potent $\mathrm{CH_4}$). This is smaller than fossil emissions but it is a *feedback*: it shrinks the remaining carbon budget of [4.4](04-04-tcre-carbon-budgets-net-zero.md) by roughly 100 GtCO₂, and it is one of the "unrepresented Earth-system feedbacks" that AR6 subtracts explicitly.

## Picture

![Cross-section of a marine ice sheet. The bedrock deepens inland, which is the retrograde geometry. Grounded ice rests on the bed and transitions at the grounding line into a floating ice shelf extending seaward. The present grounding line sits on a shallow sill where ice thickness is h-one. A dashed line marks a retreated grounding line further inland, where the bed is deeper and the ice thickness h-two is larger. Warm deep water is shown flowing under the shelf and melting it from below. The caption notes that grounding-line flux scales as the fifth power of thickness, so a retreat onto deeper bed increases discharge and drives further retreat](assets/05-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — the fifth-power law).** A grounding line retreats from a bed depth of 500 m to 900 m. (a) Compute the ice thickness at each position. (b) Compute the ratio of discharge fluxes using $Q_g \propto h_g^5$. (c) Comment on the implication for stability.

(a) $$h_g = 1.12\,d: \qquad h_1 = 1.12\times500 = 560\ \mathrm{m}, \qquad h_2 = 1.12\times900 = 1008\ \mathrm{m}.$$

(b) $$\frac{Q_2}{Q_1} = \left(\frac{1008}{560}\right)^5 = (1.8)^5 = 18.9.$$

(c) Retreating into a basin only 400 m deeper increases the discharge nearly **nineteenfold**. Since discharge is what causes retreat, there is nothing to stop it: the perturbation has amplified itself by more than an order of magnitude. Unless the bed shallows again further inland — which in West Antarctica it largely does not — the retreat continues to the far side of the basin.

*The point.* The fifth power is what makes this a genuine instability rather than a sensitivity. A first-power or second-power dependence would give a strong response but a stable equilibrium; the fifth power means the restoring term is overwhelmed. **Instability is a statement about an exponent, not about a magnitude.**

**Example 2 (why you'd care — is Thwaites already committed?).** Thwaites Glacier drains a basin holding about 0.65 m of sea-level equivalent and buttresses a further 2–3 m of West Antarctic ice. Its grounding line has retreated about 14 km since the 1990s and now sits near the head of a shallow ridge, with the bed deepening inland beyond it. (a) What does the geometry predict? (b) What would falsify the concern? (c) Why is the question so hard to settle observationally?

(a) The geometry predicts that once the grounding line passes the ridge crest onto the retrograde slope, no stable position exists until the far side of the Thwaites basin. Retreat would then proceed regardless of subsequent ocean or atmospheric conditions — a **commitment**, not a projection.

(b) Several things would. If the ridge is more effective at pinning than mapped; if lateral shear from the basin walls provides enough back-stress to stabilize a partial retreat; if basal friction is higher than assumed (the bed is poorly known beneath a kilometre of ice); if increased snowfall over the interior compensates the discharge. Each is plausible, and each is a live research question.

(c) Because the decisive variables are hidden. The bed topography under Thwaites is known from radar sounding with tens of metres of uncertainty in places, and the basal friction law — whether the ice slides on deformable till or on rock — cannot be measured directly. The grounding line moves a kilometre or so a year, so a decade of observation resolves the *rate* but not the *stability*, which is a statement about what happens after the ridge is passed. **The instability is a claim about a future bifurcation, and no amount of pre-bifurcation observation settles it.**

*The general principle.* This is the characteristic epistemics of a threshold system, and it recurs in [5.6](05-06-tipping-elements-thresholds.md): the observable behaviour before the threshold contains limited information about whether the threshold exists or where it is. You cannot measure your way to the answer in advance; the best available approach is to constrain the *geometry* (which is measurable) and the *mechanism* (which is theory), and to accept that the timing remains uncertain.

## Watch out

- **You might think** Arctic sea-ice loss is the biggest cryosphere problem. **Actually** it contributes essentially nothing to sea level, and its global radiative effect is a few tenths of a watt per square metre ([2.3](02-03-surface-albedo-cryosphere-feedback.md)). The Antarctic ice sheet, which gets far less attention, is where the unbounded risk sits.
- **You might think** ice-shelf collapse raises sea level. **Actually** shelves are already floating and displace their own weight. Their loss matters entirely through **buttressing** — removing the back-stress on the grounded ice behind, which then accelerates. The distinction is worth being pedantic about, because it is why "an ice shelf the size of Wales broke off" is not by itself a sea-level story.
- **You might think** more warming means more Antarctic melt, straightforwardly. **Actually** Antarctica's surface is far below freezing almost everywhere, so warming increases **snowfall** there (a warmer atmosphere holds more moisture, [5.1](05-01-hydrological-cycle-response.md)) — a *negative* contribution to sea level that partly offsets the dynamic loss. Which term wins is genuinely uncertain, and it is the reason Antarctic projections span both signs at the low end.

## One-liner

> Grounding-line discharge goes as the fifth power of ice thickness and thickness is set by the water depth, so an ice sheet resting on a bed that deepens inland has no stable retreat position — which is the geometry of West Antarctica.

## Problems

**P1 (🟢)** Greenland's mass balance components are: accumulation 700, surface runoff 500, discharge 470 Gt per year. (a) Compute the net mass balance. (b) Convert to global sea-level rise in mm per year (360 Gt per mm). (c) If warming raises runoff by 40 percent with accumulation and discharge unchanged, compute the new net balance and sea-level contribution.

**P2 (🟡)** A grounding line sits at 400 m depth on a ridge, beyond which the bed deepens to 1100 m. Take $h_g = 1.12d$ and $Q_g \propto h_g^5$. (a) Compute the discharge ratio between the two positions. (b) The glacier currently discharges 120 Gt per year. Compute the discharge after full retreat into the basin, and the resulting sea-level rate. (c) The basin contains 0.6 m of sea-level equivalent; estimate how long it would take to drain at that rate, and state one reason the estimate is too simple.

**P3 (🔴, optional)** Permafrost holds 1400 PgC. Suppose the fraction of it that becomes vulnerable scales with high-latitude warming as $f = 0.02\,\Delta T_{\text{Arctic}}$, that Arctic warming is 3 times global, and that 80 percent of the released carbon emerges as $\mathrm{CO_2}$ and 20 percent as $\mathrm{CH_4}$. (a) For 2 K of global warming, compute the carbon released. (b) Compute the direct $\mathrm{CO_2}$ forcing from the $\mathrm{CO_2}$ portion, assuming an airborne fraction of 0.5 and a background of 500 ppm. (c) Compute the additional warming with $\lambda = 1.3\ \mathrm{W\,m^{-2}\,K^{-1}}$, and comment on whether this constitutes a runaway.

<details>
<summary>Solutions</summary>

**P1** (a) $$\frac{dM}{dt} = 700 - 500 - 470 = -270\ \mathrm{Gt\,yr^{-1}}.$$

(b) $$\frac{270}{360} = 0.75\ \mathrm{mm\,yr^{-1}}.$$

(c) Runoff becomes $500\times1.4 = 700$ Gt per year:

$$\frac{dM}{dt} = 700 - 700 - 470 = -470\ \mathrm{Gt\,yr^{-1}} \quad\Longrightarrow\quad \frac{470}{360} = 1.31\ \mathrm{mm\,yr^{-1}}.$$

A 40 percent increase in runoff produced a 74 percent increase in the sea-level contribution, because the net is a difference of large numbers — the same amplification structure as [4.3](04-03-ocean-acidification.md)'s carbonate ion and [3.3](03-03-constraining-sensitivity-observations.md)'s sensitivity denominator.

**P2** (a) $$h_1 = 1.12\times400 = 448\ \mathrm{m}, \qquad h_2 = 1.12\times1100 = 1232\ \mathrm{m},$$
$$\frac{Q_2}{Q_1} = \left(\frac{1232}{448}\right)^5 = (2.75)^5 = 157.$$

(b) $$Q_2 = 120\times157 = 1.89\times10^{4}\ \mathrm{Gt\,yr^{-1}} \quad\Longrightarrow\quad \frac{18\,900}{360} = 52\ \mathrm{mm\,yr^{-1}}.$$

(c) The basin holds 0.6 m $= 600$ mm:

$$t = \frac{600}{52} = 11.5\ \mathrm{yr}.$$

Absurdly fast — the estimate is far too simple, for several reasons. The flux formula applies at the *grounding line* instantaneously, but the ice upstream cannot be delivered to the grounding line that fast; the actual rate is limited by ice flow speed and by the drawdown of the interior, which takes centuries. As the interior thins, the driving stress and hence the flow speed fall. The grounding line does not jump to the deepest point but migrates gradually, so the discharge climbs through intermediate values rather than jumping by 157. And the geometry narrows: the whole basin does not drain through one grounding line at maximum depth.

Realistic modelling of a full West Antarctic collapse gives centuries to a couple of millennia, i.e. multi-metre rise at rates of order 10 mm per year sustained — which is still three times today's total rate from all sources, and fast enough to defeat any coastal adaptation. **The fifth-power law tells you the instability exists; it does not tell you the rate**, and confusing the two produces the wildly implausible numbers that occasionally appear in popular accounts.

**P3** (a) $$\Delta T_{\text{Arctic}} = 3\times2 = 6\ \mathrm{K}, \qquad f = 0.02\times6 = 0.12,$$
$$C_{\text{released}} = 0.12\times1400 = 168\ \mathrm{PgC}.$$

(b) The $\mathrm{CO_2}$ portion is $0.8\times168 = 134$ PgC; airborne at 50 percent gives 67 PgC, i.e.

$$\frac{67}{2.124} = 31.6\ \mathrm{ppm}.$$

From a 500 ppm background:

$$\Delta F = 5.35\ln\!\left(\frac{531.6}{500}\right) = 5.35\times0.0613 = 0.328\ \mathrm{W\,m^{-2}}.$$

(c) $$\Delta T = \frac{0.328}{1.3} = 0.25\ \mathrm{K}.$$

(The methane portion would add roughly as much again over the decades while it persists, so call the total 0.4–0.5 K — consistent with published estimates of a few tenths of a kelvin.)

**Is it a runaway?** No, and it is worth being precise about why. Runaway requires the loop gain to exceed 1: the extra warming must release enough additional carbon to produce at least as much warming again. Here 2 K of global warming produced 0.25 K of extra warming, a gain of $g = 0.125$. Iterating the geometric series gives a total amplification of $1/(1-0.125) = 1.14$ — a 14 percent amplification of whatever warming occurs, not an explosion.

*Check.* This is [2.1](02-01-feedbacks-gain-factor.md)'s gain machinery applied to the carbon cycle rather than to radiation, and it gives the right frame for every "methane bomb" claim: **compute the gain.** The permafrost gain is around 0.1; the total carbon-cycle feedback gain (permafrost plus weakening land and ocean sinks) is perhaps 0.15 to 0.25. Substantial, worth including in a carbon budget, and nowhere near unity. A genuine runaway would require a reservoir that releases carbon proportional to warming at roughly ten times this rate, and no such reservoir has been identified — the marine methane hydrates sometimes invoked release far too slowly, because heat takes millennia to reach them through sediment.

</details>

## Flashback

**From Lesson 5.1 (The hydrological cycle response):** Antarctic accumulation is currently about 2100 Gt per year. Antarctic air is around 250 K, where Clausius–Clapeyron gives 8.7 percent per kelvin, and snowfall there is moisture-limited rather than energy-limited, so it scales with atmospheric moisture. Antarctica warms by 2 K. (a) Compute the fractional increase in snowfall. (b) Compute the extra accumulation in Gt per year and convert to sea level. (c) Compare with the current dynamic loss of 150 Gt per year and comment.

<details>
<summary>Solution</summary>

(a) $$(1.087)^2 - 1 = 1.181 - 1 = 0.181, \qquad +18.1\ \text{percent}.$$

(b) $$\Delta A = 0.181\times2100 = 380\ \mathrm{Gt\,yr^{-1}},$$

which *removes* water from the ocean:

$$\frac{380}{360} = 1.06\ \mathrm{mm\,yr^{-1}}\ \text{of sea-level fall}.$$

(c) The current net loss of 150 Gt per year is 0.42 mm per year of rise. The projected snowfall increase, 380 Gt per year, is **more than twice as large and of the opposite sign**. On this arithmetic alone, a 2 K warmer Antarctica would be a net *sink* for sea level.

That is a real effect and it is why Antarctic sea-level projections have a low end that is negative. But three things cut against it. Dynamic discharge is not held fixed — it is projected to grow, potentially by far more than 380 Gt per year if grounding lines retreat into the deep basins (P2 above). Increased snowfall on the interior takes centuries to reach the margins as ice flow, whereas discharge responds within years, so the two terms operate on different timescales and the negative one is slow. And the scaling here assumes precipitation tracks moisture exactly, which overstates it — the global constraint of [5.1](05-01-hydrological-cycle-response.md) applies partially even in a moisture-limited regime, and models give Antarctic accumulation increases nearer 5 to 10 percent per kelvin rather than 8.7.

*Check.* The lesson to carry is that **Antarctica has one large negative and one potentially unbounded positive contribution to sea level**, and the negative one is well understood while the positive one is not. That asymmetry is exactly why the AR6 likely range for Antarctica in 2100 straddles zero while the low-confidence high end reaches a metre — the distribution is not merely wide, it is a mixture of two different physical regimes.

</details>

## Connections

- **Backward:** the albedo and insulation arguments are [2.3](02-03-surface-albedo-cryosphere-feedback.md)'s; the ice reservoirs and the sea-level bookkeeping are [5.3](05-03-sea-level-rise.md)'s; the mechanics of glacier flow are [geology 3.4](../../geology/lessons/03-04-glaciers-ice-ages.md)'s.
- **Forward:** marine ice-sheet instability is the strongest candidate tipping element in [5.6](05-06-tipping-elements-thresholds.md); the nonlinear, threshold-like response of ice sheets is what resolves the 100-kyr problem in [6.3](06-03-ice-ages-100-kyr-problem.md).
- **Sideways (dynamical systems):** "no equilibrium exists on a retrograde bed" is the statement that the fixed-point condition has no solution over an interval of the bifurcation parameter — the ice sheet has passed a fold and is on the fast branch. The bed topography plays the role of the bifurcation diagram. See [`dynamical-systems` 3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md).
