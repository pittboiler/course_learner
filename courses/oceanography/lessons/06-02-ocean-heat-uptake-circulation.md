# Physical Oceanography · Lesson 6.2: How the ocean takes up heat

> ⏱ ~15 min · Module 6: The ocean in the climate system · Builds on: [4.1](04-01-water-masses-world-ocean.md), [6.1](06-01-southern-ocean-hinge.md) · Unlocks: [6.5](06-05-observing-the-ocean.md)

## Why this matters

The ocean has absorbed about **91 percent** of the excess energy the planet has accumulated since 1970. [climate-science 3.1](../../climate-science/lessons/03-01-ocean-heat-uptake-thermal-inertia.md) built the consequences of that — the two-layer model, the transient response, committed warming, the uptake efficiency $\kappa \approx 0.7\ \mathrm{W\,m^{-2}\,K^{-1}}$ and the efficacy $\varepsilon \approx 1.3$. What it treated as given, and explicitly deferred to this course, is the **circulation** that does the work: which water carries the heat down, along what pathways, and why the uptake concentrates where it does.

That is not a detail. The efficacy exceeding one — the fact that ocean heat uptake suppresses global warming about 30 percent more than its raw magnitude implies — is entirely a statement about *where* the heat goes, and it is what this lesson explains. So is the North Atlantic "warming hole", the one region of the world ocean that has not warmed, which turns out to be a circulation signal rather than a heat-uptake one.

## The idea

**Heat does not diffuse into the ocean; it is carried.** Molecular and even turbulent diffusion across the thermocline ($\kappa \approx 10^{-5}\ \mathrm{m^2\,s^{-1}}$, from [4.3](04-03-diapycnal-mixing-abyssal-recipe.md)) would move a temperature signal about $\sqrt{4\kappa t} = 25$ m in fifty years. Observed anthropogenic heat has penetrated to 2000 m. **The difference is advection**, and the specific mechanism is subduction.

**Subduction is how the surface gets sealed under the surface.** Each winter the mixed layer deepens and takes on the atmosphere's properties over a few hundred metres. Each spring it restratifies, leaving the deep winter water below the new shallow summer layer. Water that has meanwhile moved equatorward along an isopycnal is now *permanently* beneath the mixed layer — it will not see the atmosphere again until it returns to an outcrop, which may be decades or centuries later. **Everything the interior ocean knows about the atmosphere, it learned in some late winter.**

**So the uptake is limited by supply of outcrop, not by capacity.** The abyss has enormous heat capacity and is almost entirely untouched by anthropogenic warming, because no pathway connects it to the surface on a century timescale. What matters is the **ventilated volume**: the part of the ocean whose isopycnals outcrop somewhere. That is the subtropical thermocline, the mode waters, and — above all — the Southern Ocean, where isopycnals from great depth reach the surface ([6.1](06-01-southern-ocean-hinge.md)).

**Two different things are called "ocean heat uptake".** *Added* heat is genuinely new energy entering through the surface. *Redistributed* heat is existing heat moved around by a change in the circulation. Globally, redistribution sums to zero and only addition matters; regionally, redistribution often dominates and has the opposite sign to what you would guess.

**And that is what the North Atlantic warming hole is.** The subpolar North Atlantic south of Greenland is the only substantial region of ocean that has cooled. It is not receiving less heat from the atmosphere; it is receiving less heat from the *south*, because the AMOC that delivers it has weakened ([4.5](04-05-meridional-heat-transport-bjerknes.md)). **A cooling region in a warming ocean is a circulation signal, not a forcing signal.**

## The formal version

**Diffusion cannot do it.** The distance a temperature signal diffuses in time $t$ is $L = \sqrt{4\kappa t}$. With $\kappa = 10^{-5}\ \mathrm{m^2\,s^{-1}}$ and $t = 50\ \mathrm{yr} = 1.58\times10^{9}\ \mathrm{s}$:

$$L = \sqrt{4\times10^{-5}\times1.58\times10^{9}} = \sqrt{6.31\times10^{4}} = 251\ \mathrm{m}.$$

Better than the naive estimate but still far short of the observed 2000 m penetration, and it would give a smooth exponential profile rather than the observed structure with maxima along specific density surfaces. **The pattern of ocean warming follows ventilation pathways, not a diffusion profile**, and that is the strongest single piece of evidence that advection dominates.

**The subduction rate.**

$$S_{\text{ann}} = -w_{-h} - \mathbf{u}_h\cdot\nabla h,$$

*In words: the rate water leaves the mixed layer is Ekman pumping through its base plus lateral induction — flow into a region where the mixed layer is shallower.* Lateral induction usually dominates, by a factor of two to five, because winter mixed-layer depth changes far more sharply with latitude than Ekman pumping does.

Because subduction is set by the *deepest* mixed layer of the year and the restratification is fast, the whole year's imprint is fixed in a few weeks of late winter — **Stommel's demon** ([4.1](04-01-water-masses-world-ocean.md)).

**The heat uptake budget.** If subduction at rate $Q$ carries water whose temperature anomaly is $\Delta T$, the heat flux into the interior is

$$\boxed{\ H = \rho_0 c_p\,Q\,\Delta T\ }$$

*In words: the same expression as the overturning heat transport of [4.5](04-05-meridional-heat-transport-bjerknes.md), applied vertically instead of meridionally.*

**Where the heat goes.**

| Region | Share of anthropogenic heat uptake | Share of ocean area |
|---|---|---|
| Southern Ocean (south of 30°S) | 60–75 percent | about 30 percent |
| North Atlantic | 10–20 percent | about 15 percent |
| Rest | remainder | about 55 percent |

| Depth range | Share of heat gained since 1971 |
|---|---|
| 0–700 m | about 60 percent |
| 700–2000 m | about 30 percent |
| below 2000 m | about 10 percent |

*In words: the uptake concentrates where deep isopycnals outcrop, and it is nearly all in the ventilated upper 2000 m.*

**Why the efficacy exceeds one.** [climate-science 3.1](../../climate-science/lessons/03-01-ocean-heat-uptake-thermal-inertia.md) defined $\varepsilon \approx 1.3$ by $N = \varepsilon\gamma(T_u - T_d)$ and asserted it without a mechanism. Here it is. Uptake happens in the Southern Ocean and the subpolar North Atlantic — regions that are cloud-covered, have strongly stabilizing local feedbacks, and communicate their surface temperature efficiently to the free troposphere. Suppressing warming *there* reduces the planet's outgoing longwave radiation more, per kelvin of global-mean warming suppressed, than suppressing it uniformly would. **The efficacy is a geographical fact about where the ventilated volume is.**

**Added versus redistributed heat.** Decompose the ocean's temperature tendency:

$$\underbrace{\frac{\partial T}{\partial t}}_{\text{total}} = \underbrace{-\mathbf{u}\cdot\nabla T'}_{\text{added: mean flow carrying the anomaly}} \;\underbrace{- \mathbf{u}'\cdot\nabla \bar T}_{\text{redistributed: changed flow carrying the mean}} \;+\;\ldots$$

*In words: heat can change because new heat is being carried by the existing circulation, or because the circulation has changed and is moving the existing heat elsewhere.* The global integral of the second term is zero. Regionally it can dominate: in the North Atlantic subpolar gyre the redistribution term is negative and larger than the addition term, hence the warming hole.

**Ocean heat content, and how it is measured.** The quantity actually reported is

$$\mathrm{OHC} = \rho_0 c_p\int_{-H}^{0}T'\,dz,$$

integrated over depth and area. Converting a global-mean $\mathrm{W\,m^{-2}}$ imbalance into an observable temperature change:

$$\Delta T = \frac{N\,A_{\text{Earth}}\,t\,\times\,0.91}{\rho_0c_p\,A_{\text{ocean}}\,H}.$$

For $N = 0.6\ \mathrm{W\,m^{-2}}$ over 50 years and the top 2000 m, this gives about 0.15 K — the calculation done in [climate-science 3.1](../../climate-science/lessons/03-01-ocean-heat-uptake-thermal-inertia.md)'s P3. **Measuring 0.15 K as a global mean is why Argo had to exist** ([6.5](06-05-observing-the-ocean.md)).

## Picture

![A meridional section of a subtropical gyre from 50 north on the left to 15 north on the right, surface to 1000 m. A dashed grey line marks the base of the winter mixed layer, deep at 350 m in the north and shoaling to 40 m in the south; a solid grey line just below the surface marks the shallow summer mixed layer. Coral isopycnals outcrop at successive latitudes on the left and dive equatorward to the right. A blue parcel leaves the winter mixed layer at 45 north and travels along an isopycnal down and equatorward, sealed beneath the summer surface. A coral arrow at the outcrop marks a warm anomaly of 0.5 K entering the interior. In the lower right, a marked-off region is the shadow zone, where no isopycnal outcrops upstream and the water is never ventilated](assets/06-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — how much subduction does the observed uptake require?).** The planetary energy imbalance is $N = 0.8\ \mathrm{W\,m^{-2}}$, 91 percent of it goes into the ocean, and Earth's area is $5.1\times10^{14}\ \mathrm{m^2}$. Subducted water carries a temperature anomaly of $\Delta T = 0.5\ \mathrm{K}$. Take $\rho_0c_p = 4.10\times10^{6}\ \mathrm{J\,m^{-3}\,K^{-1}}$.

(a) *Total ocean heat uptake.*
$$H = 0.91\times0.8\times5.1\times10^{14} = 3.71\times10^{14}\ \mathrm{W}.$$

(b) *Subduction rate required.*
$$Q = \frac{H}{\rho_0c_p\,\Delta T} = \frac{3.71\times10^{14}}{4.10\times10^{6}\times0.5} = \frac{3.71\times10^{14}}{2.05\times10^{6}} = 1.81\times10^{8}\ \mathrm{m^3\,s^{-1}} = 181\ \mathrm{Sv}.$$

(c) *Is that plausible?* Estimates of global annual subduction into the permanent pycnocline run from about 100 to 300 Sv, so **181 Sv sits comfortably in the observed range**. The whole of anthropogenic ocean heat uptake is accounted for by the ordinary, pre-existing ventilation of the thermocline carrying a half-degree anomaly. **No new circulation is required, and none is invoked.**

(d) *A check on the sensitivity.* If $\Delta T$ were 0.25 K instead of 0.5, the required $Q$ would double to 362 Sv, which is at the very top of plausible estimates. If it were 1.0 K, only 90 Sv would be needed. The anomaly carried by subducting water is therefore constrained to a few tenths of a kelvin by the subduction rate alone — an independent check that agrees with the observed warming of mode waters.

**Example 2 (why you'd care — the one patch of ocean that cooled).** The subpolar North Atlantic south of Greenland has cooled by about 0.4 K since 1900 while the global ocean warmed by 0.7 K. Explain, and state what it does and does not imply.

*What it is not.* It is not a region of reduced greenhouse forcing — forcing is nearly uniform. It is not a region of anomalously effective heat uptake — that would show as subsurface warming, and the subsurface there has also cooled. And it is not measurement error; the pattern appears in independent sea-surface temperature datasets and in the subsurface record.

*What it is.* It is the **redistribution** term. The region's heat budget is dominated not by local surface fluxes but by the northward heat transport of the AMOC ([4.5](04-05-meridional-heat-transport-bjerknes.md)), which delivers about $50\ \mathrm{W\,m^{-2}}$ to the region — fifty times the anthropogenic forcing. A modest weakening of that delivery outweighs the forcing entirely.

*Quantifying it.* Suppose the AMOC weakened by 15 percent from 17 Sv, with $\Delta\theta = 15$ K:

$$\delta H = 4.10\times10^{6}\times(-0.15\times1.7\times10^{7})\times15 = -1.57\times10^{14}\ \mathrm{W} = -0.157\ \mathrm{PW}.$$

Spread over the subpolar gyre, roughly $5\times10^{12}\ \mathrm{m^2}$:

$$\delta F = \frac{1.57\times10^{14}}{5\times10^{12}} = 31\ \mathrm{W\,m^{-2}}.$$

Even with 85 percent Bjerknes compensation the residual is $4.7\ \mathrm{W\,m^{-2}}$ — still **twice the global anthropogenic forcing**, and easily enough to produce a local cooling against a warming background.

*The point, and the caution.* The warming hole is the clearest observational fingerprint of AMOC change we have, and it has been used to argue that the AMOC is already weakening. That inference is reasonable and it is not airtight, for two reasons worth holding onto.

First, **the same pattern can be produced by other things**: aerosol forcing over the North Atlantic was strong in the mid-20th century and is regionally concentrated, and it produces a similar cooling for entirely different reasons. Second, **the region's natural variability is large** — this is where the Atlantic Multidecadal Variability has its centre of action, with an amplitude of several tenths of a kelvin on 60-year timescales, comparable to the signal being attributed.

The general lesson is one this course has met before, in [4.5](04-05-meridional-heat-transport-bjerknes.md) and [6.1](06-01-southern-ocean-hinge.md): **where a regional budget is dominated by a transport term much larger than the forcing, the regional response is a poor guide to the forcing and a good guide to the transport.** That makes the warming hole an excellent AMOC diagnostic and a terrible climate-sensitivity diagnostic — and it is why the RAPID array ([6.5](06-05-observing-the-ocean.md)) exists to measure the transport directly rather than inferring it from temperature.

## Watch out

- **You might think** ocean heat uptake is limited by heat capacity. **Actually** it is limited by *ventilation*: how much water can be brought into contact with the atmosphere and then subducted. The abyss has vast unused capacity and is barely warming, because nothing connects it to the surface on the relevant timescale.
- **You might think** the ocean warms from the top down like a diffusing slab. **Actually** the warming maximum follows density surfaces, not depth, and appears at depths of several hundred metres in the subtropics where the ventilated isopycnals happen to be. A depth-only description hides the mechanism.
- **You might think** a cooling region means less heat is entering there. **Actually** globally the added-heat term is positive nearly everywhere; regional cooling almost always means heat has been moved away. Distinguishing the two requires either subsurface data or a transport measurement, and it cannot be done from sea surface temperature alone.

## One-liner

> The ocean takes up heat by carrying it, not by diffusing it — subducting a few tenths of a kelvin of surface anomaly at roughly 180 sverdrups along the ventilation pathways that outcrop in the Southern Ocean and North Atlantic — which is why the uptake is geographically concentrated, why its efficacy exceeds one, and why the only patch of ocean that has cooled did so because a current changed rather than because the forcing did.

## Problems

**P1 (🟢)** The planetary imbalance is $N = 0.9\ \mathrm{W\,m^{-2}}$, 91 percent goes into the ocean, Earth's area is $5.1\times10^{14}\ \mathrm{m^2}$, and $\rho_0c_p = 4.10\times10^{6}\ \mathrm{J\,m^{-3}\,K^{-1}}$. (a) Compute the ocean heat uptake in watts. (b) If subducted water carries a $0.4$ K anomaly, compute the required subduction rate in Sv. (c) Compute the total energy accumulated over 30 years.

**P2 (🟡)** Compare diffusion and advection as heat-transport mechanisms. (a) Compute the diffusive penetration depth $\sqrt{4\kappa t}$ over 60 years for $\kappa = 1.0\times10^{-5}$ and for $\kappa = 1.0\times10^{-4}\ \mathrm{m^2\,s^{-1}}$. (b) A subducted parcel moves along an isopycnal at $2\ \mathrm{cm\,s^{-1}}$ with the isopycnal sloping downward at $1:1000$. Compute how deep it gets in 60 years. (c) Compare, and state what the observed 2000 m penetration of anthropogenic heat implies about which mechanism dominates. (d) Comment on what would have to be true for a purely diffusive model to reproduce the observed penetration.

**P3 (🔴, optional)** The efficacy of ocean heat uptake. Suppose a fraction $\phi$ of the uptake occurs in high-latitude regions with a local feedback parameter $\lambda_H$, and the rest in the tropics with $\lambda_T$, with a global-mean $\lambda = \phi\lambda_H + (1-\phi)\lambda_T$. Uptake suppresses local warming in proportion to where it occurs. (a) Write the effective global feedback seen during the transient as $\lambda_{\text{eff}} = \lambda + (\varepsilon-1)\gamma$, and show that $\varepsilon > 1$ requires the uptake to be concentrated where $\lambda$ is large. (b) Take $\lambda_H = 2.2$, $\lambda_T = 1.0\ \mathrm{W\,m^{-2}\,K^{-1}}$ and a global $\lambda = 1.3$; find the area fraction of high-latitude ocean this implies. (c) If 70 percent of the uptake occurs in that region, compute the ratio of the uptake-weighted feedback to the area-weighted one, and compare with the quoted $\varepsilon \approx 1.3$. (d) State one prediction this makes that could be tested against a model.

<details>
<summary>Solutions</summary>

**P1** (a) $$H = 0.91\times0.9\times5.1\times10^{14} = 4.18\times10^{14}\ \mathrm{W}.$$

(b) $$Q = \frac{4.18\times10^{14}}{4.10\times10^{6}\times0.4} = \frac{4.18\times10^{14}}{1.64\times10^{6}} = 2.55\times10^{8}\ \mathrm{m^3\,s^{-1}} = 255\ \mathrm{Sv}.$$

(c) Over 30 yr $= 9.468\times10^{8}$ s:
$$E = 4.18\times10^{14}\times9.468\times10^{8} = 3.96\times10^{23}\ \mathrm{J}.$$

**P2** (a) Over 60 yr $= 1.894\times10^{9}$ s:
$$\kappa = 10^{-5}:\quad L = \sqrt{4\times10^{-5}\times1.894\times10^{9}} = \sqrt{7.57\times10^{4}} = 275\ \mathrm{m},$$
$$\kappa = 10^{-4}:\quad L = \sqrt{7.57\times10^{5}} = 870\ \mathrm{m}.$$

(b) The parcel travels $0.02\times1.894\times10^{9} = 3.79\times10^{7}\ \mathrm{m}$ along the isopycnal — 37,900 km, which is more than a full circuit of a gyre, so it will have recirculated. Taking the along-path distance at face value and a slope of $10^{-3}$:

$$\text{depth gained} = 3.79\times10^{7}\times10^{-3} = 3.79\times10^{4}\ \mathrm{m} = 38\ \mathrm{km}.$$

Absurdly deep, which tells you the parcel does not descend monotonically: it follows an isopycnal that flattens out, so it reaches the depth of that isopycnal (a few hundred to 1500 m) and then travels along it. **Advection is not depth-limited by time; it is depth-limited by where the isopycnal goes.**

(c) Diffusion with the measured $\kappa = 10^{-5}$ gives 275 m, five to seven times short of the observed 2000 m. Advection along ventilated isopycnals reaches 1000 to 1500 m easily, and mode-water subduction in the Southern Ocean reaches deeper still. **Advection dominates**, and the observed penetration is the depth of the ventilated isopycnals rather than any diffusive scale.

(d) A purely diffusive model would need $\kappa \approx 5\times10^{-4}\ \mathrm{m^2\,s^{-1}}$ to reach 2000 m in 60 years — fifty times the measured thermocline value and five times even the abyssal hot-spot values of [4.3](04-03-diapycnal-mixing-abyssal-recipe.md).

That is not merely a big number; it is a *falsified* one. And there is a second, sharper objection: a diffusive model predicts a monotonic exponential decay of the warming with depth, whereas the observations show warming maxima at specific depths that coincide with specific density surfaces and vary from basin to basin. **The vertical structure of the observed warming refutes diffusion independently of its magnitude** — which is a stronger argument than the magnitude one, because it does not depend on the value of $\kappa$ at all.

(Historically, this is why the early "upwelling–diffusion" climate models, which represented ocean heat uptake as a single diffusivity tuned to fit the observed uptake, gave usable global answers and completely wrong regional and vertical structure.)

**P3** (a) During the transient, $N = F - \lambda_{\text{eff}}\Delta T$ where $\lambda_{\text{eff}}$ is what an observer fitting the global-mean record would infer. Ocean heat uptake removes energy preferentially from certain regions; if it removes it from a region whose local $\lambda$ is *large*, the planet's outgoing radiation is reduced more per unit of global-mean warming suppressed, so the apparent $\lambda_{\text{eff}}$ exceeds the true equilibrium $\lambda$. Writing the excess as $(\varepsilon-1)\gamma$:

$$\varepsilon = \frac{\lambda_{\text{uptake-weighted}}}{\lambda_{\text{area-weighted}}},$$

so $\varepsilon > 1$ exactly when the uptake-weighted feedback exceeds the area-weighted one — i.e. when uptake is concentrated where $\lambda$ is large.

(b) $$\lambda = \phi\lambda_H + (1-\phi)\lambda_T \;\Longrightarrow\; 1.3 = 2.2\phi + 1.0(1-\phi) = 1.0 + 1.2\phi,$$
$$\phi = \frac{0.3}{1.2} = 0.25.$$

Twenty-five percent of the ocean area is "high latitude" in this sense — consistent with the Southern Ocean south of 30°S plus the subpolar North Atlantic.

(c) With 70 percent of the uptake in that 25 percent of the area:

$$\lambda_{\text{uptake-weighted}} = 0.70\times2.2 + 0.30\times1.0 = 1.54+0.30 = 1.84\ \mathrm{W\,m^{-2}\,K^{-1}},$$
$$\varepsilon = \frac{1.84}{1.30} = 1.42.$$

Against the quoted $\varepsilon \approx 1.3$ — **the right value to within 10 percent**, from nothing but a geographical partition of the uptake and two local feedback parameters. That is a genuine result: the efficacy, which [climate-science 3.1](../../climate-science/lessons/03-01-ocean-heat-uptake-thermal-inertia.md) had to take as an empirical fit, is derivable from where the ventilated volume is.

(d) Several predictions follow, any one of which is a complete answer:

- **The efficacy should be time-dependent.** As the Southern Ocean's surface eventually equilibrates, the uptake fraction there must fall, so $\varepsilon$ should decline toward 1 over centuries — and correspondingly the effective climate sensitivity inferred from the historical record should rise with time. This is observed in models and is one of the two standard explanations for why historically-constrained sensitivity estimates are low.
- **The efficacy should correlate across models with the modelled Southern Ocean uptake fraction.** Models that ventilate the Southern Ocean more vigorously should have larger $\varepsilon$. This is testable directly in a multi-model ensemble.
- **Deliberately suppressing uptake in a model's Southern Ocean, while holding the global uptake fixed, should reduce $\varepsilon$ toward 1** — a clean idealized experiment that isolates the geography from the magnitude.

</details>

## Flashback

**From Lesson 5.5 (The Walker circulation, the Bjerknes feedback and ENSO):** Use the delayed oscillator $dT/dt = aT - bT(t-\tau)$ with $\tau = 10$ months. (a) For $a/b = 0.6$, solve $\cos\omega\tau = a/b$ and find the period in units of $\tau$. (b) Convert to years. (c) State in one sentence why the period exceeds the delay, and by how much it would exceed it if $a$ were zero.

<details>
<summary>Solution</summary>

(a) $$\cos\omega\tau = 0.6 \;\Longrightarrow\; \omega\tau = 0.9273\ \mathrm{rad},$$
$$\frac{P}{\tau} = \frac{2\pi}{\omega\tau} = \frac{6.2832}{0.9273} = 6.776.$$

(b) $$P = 6.776\times10 = 67.8\ \mathrm{months} = 5.65\ \mathrm{yr}.$$

(c) The period exceeds the delay because the delayed feedback must not merely arrive but *overcome* the ongoing local growth before it can reverse the anomaly, and the stronger the local growth (larger $a/b$) the longer that takes.

With $a = 0$ there is no local growth to overcome, the delayed term acts alone, and $\cos\omega\tau = 0$ gives $\omega\tau = \pi/2$ and $P = 4\tau$ — **the minimum possible ratio**. Any positive $a$ lengthens the period beyond $4\tau$, and as $a\to b$ the period diverges and the oscillation ceases.

*Check.* Note that $P/\tau = 6.78$ here against $6.00$ at $a/b = 0.5$ and $4.00$ at $a/b = 0$: the ratio rises steeply as $a/b$ approaches 1. This is why ENSO's period is not sharply defined — modest changes in the background coupling strength, which vary with the mean state of the tropical Pacific, move the period across the observed 2 to 7 year range without any change in the wave travel time.

</details>

## Connections

- **Backward:** subduction and Stommel's demon are [4.1](04-01-water-masses-world-ocean.md)'s; the Southern Ocean's dominance is [6.1](06-01-southern-ocean-hinge.md)'s; the AMOC heat transport whose change makes the warming hole is [4.5](04-05-meridional-heat-transport-bjerknes.md)'s; the smallness of $\kappa$ that rules out diffusion is [4.3](04-03-diapycnal-mixing-abyssal-recipe.md)'s.
- **Forward:** the same subduction pathways carry anthropogenic carbon in [6.3](06-03-ocean-carbon-pumps.md); measuring the 0.15 K global signal is [6.5](06-05-observing-the-ocean.md)'s central problem; the AMOC weakening implicated in the warming hole is [6.4](06-04-amoc-stability-stommel-model.md)'s.
- **Sideways (climate science):** this discharges the debt [`climate-science` 3.1](../../climate-science/lessons/03-01-ocean-heat-uptake-thermal-inertia.md) incurred. That lesson's $\kappa$, $\gamma$ and $\varepsilon$ were empirical parameters; here $\varepsilon > 1$ is derived from the geography of ventilation, and the two-layer model's "exchange coefficient" is revealed to be a subduction rate.
