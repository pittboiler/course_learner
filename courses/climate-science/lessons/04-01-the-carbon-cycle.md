# Climate Physics · Lesson 4.1: The carbon cycle

> ⏱ ~15 min · Module 4: The carbon cycle & ocean chemistry · Builds on: [1.3](01-03-bands-saturation-logarithmic-forcing.md), [1.1](01-01-climate-system-timescales.md) · Unlocks: [4.2](04-02-ocean-carbon-revelle-factor.md), [4.4](04-04-tcre-carbon-budgets-net-zero.md)

## Why this matters

Everything so far has taken the forcing as given. But $\mathrm{CO_2}$ concentration is not an input we control — it is the output of a budget in which our emissions are a small perturbation on enormous natural flows, and only about half of what we emit stays in the air. Understanding why *half*, and why the other half does not come back, is what makes a carbon budget a meaningful object. The single most important and most misunderstood fact in this lesson: **an individual $\mathrm{CO_2}$ molecule stays in the atmosphere about four years, and a $\mathrm{CO_2}$ *perturbation* stays for millennia.** Those two statements are both true, they are not in conflict, and confusing them has produced decades of bad argument.

## The idea

**Two cycles, separated by five orders of magnitude in time.** The **fast** carbon cycle moves carbon between atmosphere, ocean, vegetation and soils on timescales of years to millennia. The **slow** cycle moves it between those reservoirs and *rock* — volcanic outgassing in, silicate weathering and carbonate burial out — on $10^5$ to $10^6$ years ([6.4](06-04-deep-time-slow-thermostat.md)). Human emissions are a fast-cycle perturbation being cleaned up, eventually, by the slow cycle.

**The natural flows dwarf the anthropogenic one, and that is not reassuring.** Photosynthesis takes about 120 PgC per year out of the atmosphere and respiration puts back about the same; the ocean exchanges about 80 each way. Against that, fossil emissions are 9.6 PgC per year. But those big flows are nearly *balanced* two-way exchanges. What matters is the imbalance, and the imbalance is entirely ours.

**Roughly half of what we emit stays airborne.** Of 10.8 PgC emitted per year (fossil plus land use), about 2.8 goes into the ocean, 3.1 into the land biosphere, and 5.1 stays in the atmosphere. The **airborne fraction** is about 47 percent, and it has been remarkably steady for sixty years — an important and slightly lucky empirical fact, because the sinks have grown roughly in proportion to emissions.

**But the sinks saturate, and the tail is long.** The land and ocean sinks are absorbing a *disequilibrium*, not consuming carbon. As atmospheric $\mathrm{CO_2}$ stabilizes, the sinks weaken. Stop emitting and the ocean keeps absorbing for centuries at a declining rate, but it cannot take it all: the ocean's chemistry limits how much it will hold ([4.2](04-02-ocean-carbon-revelle-factor.md)), and roughly 20 percent of an emitted pulse is still in the atmosphere after ten thousand years, waiting for rock weathering. **What we emit this century is a geological event.**

## The formal version

**Units.** Carbon is measured in petagrams of carbon (PgC; 1 PgC $= 10^{15}$ g $= 1$ GtC). Conversions worth memorizing:

$$1\ \mathrm{ppm}\ \mathrm{CO_2} = 2.124\ \mathrm{PgC}, \qquad 1\ \mathrm{PgC} = \frac{44}{12} = 3.664\ \mathrm{GtCO_2}.$$

The first follows from the mass of the atmosphere ($5.15\times10^{18}$ kg) and the molar masses; the second from the mass ratio of $\mathrm{CO_2}$ to C. **Watch which unit a source is using** — "gigatonnes" without a subscript is ambiguous by a factor of 3.664, and this trips people constantly.

**Reservoirs.** Approximate, for 2019:

| Reservoir | PgC |
|---|---|
| Atmosphere | 875 (410 ppm) |
| Ocean, dissolved inorganic carbon | 38 000 |
| — of which surface (top 100 m) | 900 |
| Soils | 1700 |
| Permafrost (frozen soil carbon) | 1400 |
| Vegetation | 450 |
| Fossil fuel reserves (recoverable) | ~1000, resources far more |
| Marine sediments and crust | $>10^{7}$ |

*In words: the ocean holds forty-four times as much carbon as the atmosphere, and yet takes up only a quarter of what we emit.* Resolving that apparent contradiction is [4.2](04-02-ocean-carbon-revelle-factor.md)'s job, and the answer is the Revelle factor.

**Fluxes.** Annual means for the 2010s, PgC per year:

| Flux | Value |
|---|---|
| Fossil fuel and cement emissions | $+9.6$ |
| Land-use change emissions | $+1.2$ |
| **Total emissions** | $+10.8$ |
| Ocean sink | $-2.8$ |
| Land sink | $-3.1$ |
| **Atmospheric growth** | $+5.1$ |
| (Gross photosynthesis) | $\sim120$ each way |
| (Gross ocean exchange) | $\sim80$ each way |

The budget closes to within about 0.5 PgC per year — the "budget imbalance", a real and honest residual in the Global Carbon Project's accounting.

**Airborne fraction.**

$$\mathrm{AF} = \frac{\text{atmospheric growth}}{\text{total emissions}} = \frac{5.1}{10.8} = 0.47.$$

*In words: about half of each year's emissions remain in the air.* Averaged over 1960–2020 the figure is 44 percent with no detectable trend, which is a nontrivial statement: the sinks have scaled with emissions. Whether they will continue to is one of the central open questions of the carbon cycle, and the evidence suggests weakening — both sinks are showing signs of it, the ocean via the Revelle factor rising and the land via drought and thermal stress on respiration.

**Residence time versus adjustment time — the central distinction.** Two quite different quantities:

**Residence time** is the mean time a molecule spends in the reservoir, $\tau_R = M/\Phi$ with $M$ the reservoir size and $\Phi$ the gross throughflow:

$$\tau_R = \frac{875}{120+80} = 4.4\ \mathrm{yr}.$$

**Adjustment time** is how long a *perturbation* to the reservoir takes to decay. Because the gross exchanges are two-way with reservoirs that fill up, this is enormously longer. The standard impulse-response function (Joos et al., for a pulse of about 100 PgC on a modern background) is

$$f(t) = a_0 + \sum_{i=1}^{3} a_i\,e^{-t/\tau_i}, \qquad
\begin{array}{llll}
a_0 = 0.217 & & & \text{(permanent on }10^4\text{ yr)}\\
a_1 = 0.224, & \tau_1 = 394\ \mathrm{yr} \\
a_2 = 0.282, & \tau_2 = 36.5\ \mathrm{yr} \\
a_3 = 0.276, & \tau_3 = 4.3\ \mathrm{yr}
\end{array}$$

*In words: an emitted pulse decays in four stages — a few years of fast surface-ocean and land uptake, decades of thermocline uptake, centuries of deep-ocean mixing, and then a fifth that essentially does not go away.* Evaluating:

| Years after the pulse | Fraction still airborne |
|---|---|
| 10 | 68 percent |
| 20 | 60 percent |
| 50 | 49 percent |
| 100 | 41 percent |
| 500 | 28 percent |
| 1000 | 24 percent |
| $>10\,000$ | 22 percent, until silicate weathering |

**Why the two times differ so wildly.** Carbon leaving the atmosphere for the surface ocean or a leaf is not *removed*; it is loaned. The surface ocean equilibrates with the atmosphere in about a year, so it comes back into balance quickly and stops absorbing. Real removal requires transport to the deep ocean (centuries, set by the overturning circulation) or burial in sediment (millennia and beyond). **The fast exchange determines residence time; the slow removal determines adjustment time; only the second matters for climate.**

An analogy that holds up: money moving in and out of a busy checking account has a short residence time, but a *deposit* raises the balance until it is actually spent. The turnover rate tells you nothing about how long the extra money stays.

**The long tail and the slow cycle.** After the ocean has done everything it can — limited by the carbonate buffer of [4.2](04-02-ocean-carbon-revelle-factor.md) — the remaining excess $\mathrm{CO_2}$ must be removed by reaction with rock:

$$\mathrm{CaSiO_3} + \mathrm{CO_2} \longrightarrow \mathrm{CaCO_3} + \mathrm{SiO_2}$$

(schematically; the real path is weathering on land followed by carbonate deposition in the ocean, [geology 3.1](../../geology/lessons/03-01-weathering-soils.md)). The timescale is $10^5$ years. *In words: the last fifth of our emissions will be removed by the same process that has regulated Earth's climate for four billion years, operating far too slowly to be of any use to us* — an argument developed properly in [6.4](06-04-deep-time-slow-thermostat.md).

## Picture

![A box diagram of the carbon cycle. The atmosphere holds 875 PgC and is growing at 5.1 PgC per year. Grey two-way arrows show the large natural exchanges: photosynthesis takes 120 PgC per year to the land while respiration and fire return 118, and the ocean dissolves 81 while outgassing 78. The land reservoir holds 450 in vegetation and 1700 in soils; the ocean holds 900 at the surface and 37 100 in the deep. A coral arrow from the fossil carbon reservoir adds 9.6 PgC per year of fossil emissions plus 1.2 from land-use change. Net sinks of 3.1 on land and 2.8 in the ocean leave an airborne fraction of 47 percent](assets/04-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — converting a budget).** Global $\mathrm{CO_2}$ emissions are about 40 GtCO₂ per year. (a) Convert to PgC. (b) With an airborne fraction of 0.47, compute the annual rise in atmospheric $\mathrm{CO_2}$ in ppm. (c) Check against the observed rise.

(a) $$40\ \mathrm{GtCO_2} \times \frac{12}{44} = 10.9\ \mathrm{PgC}.$$

(b) Airborne: $0.47\times10.9 = 5.1\ \mathrm{PgC}$. Converting:

$$\frac{5.1}{2.124} = 2.4\ \mathrm{ppm\ yr^{-1}}.$$

(c) Observed growth at Mauna Loa averages 2.4 ppm per year over the 2010s, rising toward 2.5–3 in recent years (with large interannual swings driven by ENSO, which modulates the land sink). ✓

*The point.* This three-line calculation connects an economic quantity (40 GtCO₂) to an observable one (2.4 ppm per year) using only two conversion factors and the airborne fraction, and it *works*. It is worth being able to do from memory, because it turns any emissions scenario into a concentration path and hence, via $5.35\ln(C/C_0)$, into a forcing.

**Example 2 (why you'd care — how long does a tonne of $\mathrm{CO_2}$ matter?).** A company emits 1 million tonnes of $\mathrm{CO_2}$ and offsets it by planting trees that sequester the same amount over 40 years, holding it for 100 years before the forest burns. Is the offset equivalent?

Use the impulse-response function. The emitted pulse leaves a fraction $f(t)$ in the atmosphere; the forest removes carbon and then returns it at $t = 100$.

*Radiative-forcing-integral view.* The emission's cumulative airborne-years over 100 years is $\int_0^{100} f(t)\,dt$. Approximating from the table (values 1.00, 0.68, 0.60, 0.49, 0.41 at $t = 0, 10, 20, 50, 100$), trapezoidal integration gives roughly 52 PgC-years per PgC emitted. The forest holds carbon out of the atmosphere for about 80 effective years (40 to accumulate, then held), then releases it — after which its carbon rejoins the atmosphere and *its* pulse begins decaying, contributing further airborne-years beyond year 100.

So over a 100-year horizon the offset cancels roughly 80/52, i.e. more than 100 percent of the emission's effect — it looks like a good deal. Over a 1000-year horizon, the emission contributes about $\int_0^{1000}f\,dt \approx 300$ PgC-years while the forest offsets 80 plus its own subsequent decay, cancelling well under half.

*The general principle.* **A temporary removal cannot offset a permanent emission**, and the apparent equivalence depends entirely on the accounting horizon, which is a choice, not a physical constant. This is the same stock-versus-flow problem that made methane's GWP horizon-dependent ([1.3](01-03-bands-saturation-logarithmic-forcing.md)), now applied to removals. Biological storage is a loan against a debt that never matures; only geological storage — mineralization or deep injection — matches the permanence of the emission. This is the physical reason carbon-offset markets have proved so troublesome, and it is not an accounting problem that better rules can fix.

## Watch out

- **You might think** the natural fluxes being 20 times larger than ours means our contribution is negligible. **Actually** the natural fluxes are a near-balanced two-way exchange; only the *imbalance* changes the reservoir, and the imbalance is entirely anthropogenic. The isotopic evidence is decisive: fossil carbon is depleted in $^{13}\mathrm{C}$ and contains no $^{14}\mathrm{C}$, and atmospheric $\mathrm{CO_2}$ has become measurably lighter in both isotopes exactly as fossil use predicts (the Suess effect). Atmospheric oxygen has also fallen in the stoichiometric ratio combustion requires — which rules out the ocean as a source, since ocean outgassing would not consume oxygen.
- **You might think** the four-year residence time means $\mathrm{CO_2}$ leaves quickly. **Actually** residence time and adjustment time are different quantities. The relevant one for climate is the adjustment time: about 40 percent of a pulse remains after a century and about 20 percent effectively forever. Quoting the residence time as if it were the lifetime is the most persistent technical error in public discussion of this subject.
- **You might think** the airborne fraction is a constant of nature. **Actually** it has been roughly constant only because sinks happened to grow with emissions; it depends on emission *trajectory*, and it rises if emissions plateau (the sinks then catch up with a shrinking disequilibrium and the fraction of *each new tonne* remaining airborne goes up). Using a fixed 45 percent for a strong-mitigation scenario is a genuine error.

## One-liner

> Half of what we emit stays airborne, a fifth stays essentially forever, and the four-year residence time of a molecule tells you nothing about either — because the carbon that leaves the atmosphere quickly has only been loaned to a reservoir that fills up.

## Problems

**P1 (🟢)** In 2023 fossil emissions were about 10.0 PgC and land-use emissions about 1.1 PgC. Atmospheric $\mathrm{CO_2}$ rose by 2.8 ppm. (a) Convert the rise to PgC. (b) Compute the airborne fraction. (c) Compute the combined land plus ocean sink in PgC.

**P2 (🟡)** Using the impulse-response function $f(t) = 0.217 + 0.224e^{-t/394} + 0.282e^{-t/36.5} + 0.276e^{-t/4.3}$: (a) evaluate $f$ at $t = 0$, 30 and 300 years. (b) A 500 PgC pulse is emitted. Compute the atmospheric excess in PgC and in ppm at $t=300$. (c) Compute the resulting radiative forcing at $t = 300$ relative to a 280 ppm baseline, assuming no other emissions and that the pre-pulse concentration was 280 ppm.

**P3 (🔴, optional)** Suppose emissions are held constant at $E = 10$ PgC yr⁻¹ indefinitely, and the atmospheric excess $M(t)$ obeys the convolution $M(t) = \int_0^t E\,f(t-t')\,dt'$. (a) Show that $M$ grows without bound, and identify the term responsible. (b) Compute $M$ after 100 years by integrating the impulse-response function term by term. (c) Convert to ppm, add to a 280 ppm baseline, compute the forcing, and comment on what the unbounded term implies for any scenario that does not reach zero emissions.

<details>
<summary>Solutions</summary>

**P1** (a) $$2.8\ \mathrm{ppm}\times2.124 = 5.95\ \mathrm{PgC}.$$

(b) Total emissions $= 10.0 + 1.1 = 11.1$ PgC.

$$\mathrm{AF} = \frac{5.95}{11.1} = 0.536.$$

(c) $$\text{sinks} = 11.1 - 5.95 = 5.15\ \mathrm{PgC}.$$

(Note the airborne fraction of 54 percent is well above the long-term 44 percent — 2023 was a strong El Niño year, which suppresses the tropical land sink through drought and warmth. This is why airborne fraction must be assessed over a decade, not a year.)

**P2** (a) $$f(0) = 0.217+0.224+0.282+0.276 = 0.999 \approx 1.$$

$$f(30) = 0.217 + 0.224e^{-0.0761} + 0.282e^{-0.822} + 0.276e^{-6.98}$$
$$= 0.217 + 0.224(0.9267) + 0.282(0.4396) + 0.276(0.000932) = 0.217+0.208+0.124+0.000 = 0.549.$$

$$f(300) = 0.217 + 0.224e^{-0.761} + 0.282e^{-8.22} + 0 = 0.217+0.224(0.4672)+0.282(0.000268) = 0.217+0.105+0.000 = 0.322.$$

(b) $$M(300) = 500\times0.322 = 161\ \mathrm{PgC} = \frac{161}{2.124} = 75.8\ \mathrm{ppm}.$$

(c) Concentration $= 280 + 75.8 = 355.8$ ppm, so

$$\Delta F = 5.35\ln\!\left(\frac{355.8}{280}\right) = 5.35\ln(1.271) = 5.35\times0.2396 = 1.28\ \mathrm{W\,m^{-2}}.$$

Three centuries after a single 500 PgC pulse — roughly what humanity has already emitted — the forcing is still 1.28 W m⁻², about 60 percent of today's $\mathrm{CO_2}$ forcing.

**P3** (a) $$M(t) = E\int_0^t f(s)\,ds = E\left[a_0 t + \sum_i a_i\tau_i\left(1-e^{-t/\tau_i}\right)\right].$$

The exponential terms each saturate at $a_i\tau_i$, but the constant term $a_0$ integrates to $E a_0 t$, which **grows linearly without bound**. The responsible term is $a_0 = 0.217$: the fraction of every pulse that the fast carbon cycle simply cannot remove.

(b) $$M(100) = 10\left[0.217(100) + 0.224(394)\left(1-e^{-0.2538}\right) + 0.282(36.5)\left(1-e^{-2.740}\right) + 0.276(4.3)\left(1-e^{-23.3}\right)\right].$$

Term by term:
- $0.217\times100 = 21.7$
- $0.224\times394 = 88.3$; $1-e^{-0.2538} = 0.2242$; product $= 19.8$
- $0.282\times36.5 = 10.29$; $1-e^{-2.740} = 0.9354$; product $= 9.63$
- $0.276\times4.3 = 1.187$; $1-e^{-23.3} \approx 1$; product $= 1.19$

Sum $= 52.3$, so $M(100) = 10\times52.3 = 523\ \mathrm{PgC}$.

(c) $$523/2.124 = 246\ \mathrm{ppm}, \qquad C = 280+246 = 526\ \mathrm{ppm},$$
$$\Delta F = 5.35\ln\!\left(\frac{526}{280}\right) = 5.35\times0.6307 = 3.37\ \mathrm{W\,m^{-2}}.$$

*What the unbounded term means.* Because $a_0 > 0$, **any** constant nonzero emission rate produces atmospheric $\mathrm{CO_2}$ rising without limit, at an asymptotic rate of $E a_0/2.124 = 10\times0.217/2.124 = 1.02$ ppm per year. There is no emission rate, however small, at which concentration stabilizes — only zero. This is the physical content of the "net zero" requirement: stabilizing temperature requires stabilizing concentration, which requires **zero** net emissions, not reduced ones. A 90 percent emissions cut slows the rise by a factor of ten and does not stop it.

That is one of the two pillars of [4.4](04-04-tcre-carbon-budgets-net-zero.md), and it is why the policy target is a *stock* (cumulative emissions) rather than a *flow* (annual emissions) — a shift in framing that this single term $a_0$ forces.

*Check.* Sanity-check (b) against the airborne fraction: 1000 PgC emitted over 100 years, 523 remaining airborne — an effective airborne fraction of 52 percent over that period. Higher than the observed 44–47 percent because the observed value reflects emissions that were much smaller a century ago (so more of the older, better-absorbed carbon is in the denominator), while this idealization emits uniformly.

</details>

## Flashback

**From Lesson 3.3 (Constraining sensitivity from observations):** Two independent studies report equilibrium climate sensitivity as $2.6\ [2.0, 3.4]$ K and $3.4\ [2.6, 4.4]$ K (5–95 percent). Take $F_{2\times} = 3.93\ \mathrm{W\,m^{-2}}$. (a) Convert each to a mean and standard deviation in $\lambda$. (b) Combine them by precision weighting. (c) Convert back and give the combined central estimate and 5–95 percent range.

<details>
<summary>Solution</summary>

(a) Study 1: $\lambda_c = 3.93/2.6 = 1.512$. Bounds: $3.93/3.4 = 1.156$ and $3.93/2.0 = 1.965$. A 5–95 percent range spans $2\times1.645\sigma = 3.29\sigma$, so

$$\sigma_1 = \frac{1.965-1.156}{3.29} = \frac{0.809}{3.29} = 0.246.$$

Study 2: $\lambda_c = 3.93/3.4 = 1.156$. Bounds $3.93/4.4 = 0.893$ and $3.93/2.6 = 1.512$, so

$$\sigma_2 = \frac{1.512-0.893}{3.29} = \frac{0.619}{3.29} = 0.188.$$

Note that the interval in $\lambda$ is nearly symmetric about the central value in both cases (1.512 sits at $0.356$ and $0.453$ from the bounds) — much more so than the ECS intervals were, which is the whole reason for working here.

(b) Precisions: $1/0.246^2 = 16.53$ and $1/0.188^2 = 28.29$; total $44.82$.

$$\lambda_c = \frac{1.512(16.53)+1.156(28.29)}{44.82} = \frac{24.99+32.71}{44.82} = 1.287, \qquad \sigma_c = 44.82^{-1/2} = 0.149.$$

(c) $$\mathrm{ECS} = \frac{3.93}{1.287} = 3.05\ \mathrm{K}.$$

5–95 percent: $\lambda \in 1.287 \pm 1.645(0.149) = [1.042, 1.532]$, so

$$\mathrm{ECS} \in \left[\frac{3.93}{1.532},\ \frac{3.93}{1.042}\right] = [2.56,\ 3.77]\ \mathrm{K}.$$

*Check.* Note two things. The combined central value, 3.05 K, is **not** the average of 2.6 and 3.4 (which would be 3.0) — it is pulled slightly toward the *lower*-ECS study because that study is the more precise one in $\lambda$. And the combined range, $[2.56, 3.77]$, is narrower than either input, as combining independent evidence must give. Had the same combination been attempted in ECS-space by averaging the intervals, the result would have been $[2.3, 3.9]$ — wider, and with the wrong central value, because the individual likelihoods are not Gaussian in ECS. This is [3.3](03-03-constraining-sensitivity-observations.md)'s methodological point in a single worked case.

</details>

## Connections

- **Backward:** the $5.35\ln(C/C_0)$ that converts concentration to forcing is [1.3](01-03-bands-saturation-logarithmic-forcing.md)'s; the fast/slow timescale separation is [1.1](01-01-climate-system-timescales.md)'s classification applied to carbon rather than heat.
- **Forward:** [4.2](04-02-ocean-carbon-revelle-factor.md) explains why the ocean sink is as small as it is; [4.4](04-04-tcre-carbon-budgets-net-zero.md) turns the impulse response and the $a_0$ term into the carbon budget and the net-zero requirement; [6.4](06-04-deep-time-slow-thermostat.md) takes up the slow cycle that removes the tail.
- **Sideways (linear systems):** the impulse-response function is the Green's function of the carbon cycle, and $M(t) = \int E(t')f(t-t')\,dt'$ is a convolution — the same LTI machinery as [`signals-systems` 1.4](../../signals-systems/lessons/01-04-convolution-continuous-time.md). The multi-exponential form is a sum of first-order modes, exactly the eigen-decomposition of a linear box model. The weathering chemistry of the slow cycle is [geology 3.1](../../geology/lessons/03-01-weathering-soils.md)'s.
