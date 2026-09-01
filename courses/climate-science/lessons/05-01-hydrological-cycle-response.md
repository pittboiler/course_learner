# Climate Physics · Lesson 5.1: The hydrological cycle response

> ⏱ ~15 min · Module 5: What actually changes · Builds on: [2.2](02-02-planck-water-vapour-lapse-rate.md), [atmospheric-science 2.2](../../atmospheric-science/lessons/02-02-saturation-moist-adiabatic-lapse-rate.md) · Unlocks: [5.2](05-02-extremes-event-attribution.md), [5.5](05-05-circulation-regional-response.md)

## Why this matters

Nobody experiences a global mean temperature. What people experience is water — too much or too little of it, at the wrong time. And the water response contains the single most useful non-obvious result in applied climate physics: **atmospheric moisture rises at 7 percent per kelvin but global precipitation rises at only about 2**. Those two numbers cannot both be right unless something else gives, and what gives is the *circulation*. That mismatch, once you see it, organizes everything else — why the wet places get wetter and the dry places drier, why extreme rainfall scales differently from mean rainfall, and why the tropical overturning must weaken.

## The idea

**Moisture is set by thermodynamics; rainfall is set by energetics.** Clausius–Clapeyron fixes how much water vapour a warmer atmosphere holds: 7 percent more per kelvin, at fixed relative humidity ([2.2](02-02-planck-water-vapour-lapse-rate.md)). But precipitation is not limited by supply. It is limited by how fast the atmosphere can get rid of the latent heat that condensation releases.

**The atmosphere's energy budget is the constraint.** Every kilogram of water that condenses releases $L_v = 2.5\times10^{6}$ J of latent heat *into the atmosphere*. In steady state that heat must leave, and the only way out is radiation to space and to the surface. So global precipitation is pinned by the atmosphere's radiative cooling rate — and that rises only 2 to 3 percent per kelvin, because it is essentially a Stefan–Boltzmann response, not an exponential one.

**The gap must be paid in circulation.** Precipitation is, crudely, the mass of air passing through convection times the water it carries: $P \approx M\,q$. If $q$ rises 7 percent per kelvin and $P$ rises 2, then $M$ must **fall** about 5 percent per kelvin. The tropical overturning circulation slows down. This is one of the most robust dynamical predictions in the field, and it comes from two thermodynamic constraints and one line of algebra.

**Where the water goes is a separate question with a separate scaling.** The *transport* of moisture — which is what makes some places wet and others dry — scales with $q$ itself, not with $P$. So the existing pattern of surplus and deficit is amplified at close to 7 percent per kelvin: **wet gets wetter, dry gets drier.** This works well over ocean and badly over land, where circulation changes dominate.

**And $\mathrm{CO_2}$ has a direct effect on rainfall independent of temperature.** Adding $\mathrm{CO_2}$ reduces the atmosphere's ability to radiate away its heat, which *suppresses* precipitation immediately, before any warming has occurred. This "fast response" is why the hydrological response to $\mathrm{CO_2}$ forcing differs from the response to an equivalent solar forcing — and it is the reason solar geoengineering cannot restore the pre-industrial water cycle even if it restores the temperature ([6.5](06-05-scenarios-projections-intervention.md)).

## The formal version

**The moisture constraint.** From [2.2](02-02-planck-water-vapour-lapse-rate.md), at constant relative humidity,

$$\frac{1}{q}\frac{dq}{dT} = \frac{L_v}{R_vT^2} \approx 0.07\ \mathrm{K^{-1}}.$$

**The energetic constraint on precipitation.** The atmospheric column's energy budget in steady state:

$$\underbrace{L_v P}_{\text{latent heating}} + \underbrace{\mathrm{SH}}_{\text{sensible}} + \underbrace{S_{\text{atm}}}_{\text{solar absorbed}} = \underbrace{Q_{\text{rad}}}_{\text{net radiative cooling}}.$$

*In words: what heats the atmosphere — condensation, contact with the warm surface, and absorbed sunlight — must equal what it radiates away.* Rearranging and perturbing,

$$L_v\,\Delta P = \Delta Q_{\text{rad}} - \Delta\mathrm{SH} - \Delta S_{\text{atm}}.$$

The dominant term is $\Delta Q_{\text{rad}}$, and a warmer atmosphere radiates more: roughly 2 to 3 percent per kelvin. Hence

$$\boxed{\ \frac{1}{P}\frac{dP}{dT} \approx 0.02\ \mathrm{K^{-1}}.\ }$$

*In words: global rainfall rises about 2 percent per kelvin — a third of the rate at which moisture rises.* This is the **hydrological sensitivity**, and it is a much better-constrained quantity than climate sensitivity, because it follows from a radiative budget rather than from clouds.

**Fast and slow response.** Decompose the precipitation change into a part proportional to the forcing and a part proportional to the warming:

$$\frac{\Delta P}{P} = -\underbrace{\mu\,\Delta F}_{\text{fast, }\approx\,-0.02\ \text{per W m}^{-2}} + \underbrace{\eta\,\Delta T}_{\text{slow, }\approx\,+0.03\ \mathrm{K^{-1}}}.$$

*In words: greenhouse gases immediately suppress rainfall by making the atmosphere a worse radiator, and then the resulting warming increases it again.* For $2\times\mathrm{CO_2}$ with $\Delta F = 3.93$ and $\Delta T = 3$ K:

$$\frac{\Delta P}{P} = -0.02\times3.93 + 0.03\times3.0 = -0.079 + 0.090 = +0.011,$$

about 1 percent — and note how much cancellation there is. The apparent hydrological sensitivity of "2 percent per kelvin" is the *net* of a larger positive slow response and a substantial negative fast one, which is why it differs between forcing agents. A solar forcing of the same magnitude has almost no fast suppression (sunlight is absorbed at the surface, not in the air), so it produces roughly twice the precipitation increase per kelvin.

**The circulation weakening.** Model convective mass flux $M$ (kg m⁻² s⁻¹) carrying boundary-layer specific humidity $q$:

$$P \approx M\,q \quad\Longrightarrow\quad \frac{\Delta M}{M} = \frac{\Delta P}{P} - \frac{\Delta q}{q}.$$

Per kelvin: $0.02 - 0.07 = -0.05$. Over 3 K of warming, compounding:

$$\frac{M}{M_0} = \frac{(1.02)^3}{(1.07)^3} = \frac{1.0612}{1.2250} = 0.866,$$

a **13 percent weakening**.

Which circulation weakens? Not all of them equally. The **Walker circulation** — the zonal east–west overturning of the equatorial Pacific ([3.2](03-02-tcr-ecs-pattern-effect.md)) — takes most of it, because it is the least constrained by other considerations. The **Hadley cell** weakens less, and instead *expands poleward*, because it is additionally constrained by angular momentum conservation ([atmospheric-science 4.4](../../atmospheric-science/lessons/04-04-thermal-wind-general-circulation.md)); its response is more about width than strength ([5.5](05-05-circulation-regional-response.md)).

**An honest complication.** Models robustly project Walker weakening. Observations since 1980 show the Pacific east–west gradient *strengthening*. This is the same discrepancy that appeared as the pattern effect in [3.2](03-02-tcr-ecs-pattern-effect.md), and it is unresolved. Either the observed trend is internal variability that will reverse, or models are missing something about how the tropical Pacific responds. **The theory here is clean; whether the real world is doing it is genuinely open.**

**Wet gets wetter, dry gets drier.** Local water availability is $P - E$, and in steady state the atmosphere's moisture budget gives

$$P - E = -\nabla\cdot\left(\text{moisture transport}\right) \approx -\nabla\cdot(\mathbf{u}\,q).$$

If the circulation $\mathbf{u}$ were unchanged and only $q$ rose, then

$$\Delta(P-E) \approx \frac{\Delta q}{q}(P-E) \approx 0.07\,(P-E)\ \text{per K}.$$

*In words: regions that already have a surplus gain more; regions with a deficit lose more — at 7 percent per kelvin, the moisture rate, not the 2 percent precipitation rate.* This is the **thermodynamic** or "rich-get-richer" scaling.

It works well over the ocean. Over **land** it works badly, for a reason worth understanding: land has limited moisture supply, so $E$ cannot rise freely, and the response is dominated by *dynamic* changes — shifts in where the storm tracks and convergence zones sit — which are exactly the least agreed-upon part of any projection ([3.4](03-04-internal-variability-detection.md)). "Wet gets wetter" is a confident statement about zonal-mean ocean bands and a much weaker one about any particular country.

**Land aridity even without less rain.** Land warms about 1.5 times as fast as ocean, but the moisture supplied to it comes from the ocean. So specific humidity over land rises at roughly the *ocean's* rate while saturation humidity rises at the *land's* rate — and relative humidity over land therefore **falls**, by a few percent per kelvin. The consequence is a rising **vapour pressure deficit**: the atmosphere's drying power over land increases even where precipitation is unchanged, which increases evaporative demand, plant water stress and fire risk. This is why aridity indices worsen more broadly than precipitation projections alone would suggest, and it is one of the more robust land-surface results.

## Picture

![Two panels. On the left, fractional change plotted against global warming: column moisture in blue rises at 7 percent per kelvin, reaching 40 percent at 5 K, while precipitation in coral rises at only 2 percent per kelvin, reaching 10 percent. The gap between them at 3 K is marked as a 13 percent weakening of the circulation. On the right, the change in precipitation minus evaporation by latitude: positive at the equator where the intertropical convergence zone gets wetter, negative in both subtropical bands which get drier, and positive again in the mid-latitude storm-track bands — the existing pattern amplified rather than shifted](assets/05-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — the three rates for 2 K of warming).** For 2 K of global warming, compute the fractional change in (a) column moisture, (b) global precipitation, (c) tropical overturning mass flux, and (d) $P-E$ in a region where it is currently $+800\ \mathrm{mm\,yr^{-1}}$ and one where it is $-400\ \mathrm{mm\,yr^{-1}}$.

(a) $$(1.07)^2 - 1 = 0.145, \quad +14.5\ \text{percent}.$$

(b) $$(1.02)^2 - 1 = 0.040, \quad +4.0\ \text{percent}.$$

(c) $$\frac{(1.02)^2}{(1.07)^2} - 1 = \frac{1.0404}{1.1449}-1 = -0.091, \quad -9.1\ \text{percent}.$$

(d) Wet region: $0.145\times800 = +116\ \mathrm{mm\,yr^{-1}}$. Dry region: $0.145\times(-400) = -58\ \mathrm{mm\,yr^{-1}}$, i.e. the deficit deepens by 58 mm per year.

*The point.* Note that the wet region gains twice as much water as the dry region loses, in absolute terms — because the scaling is multiplicative. The global integral of $P-E$ must be zero, and it is: the wet regions are smaller in area than the dry ones. **Amplification of an existing pattern is not the same as a uniform change, and it is the pattern, not the mean, that determines who is affected.**

**Example 2 (why you'd care — why geoengineering cannot restore the water cycle).** Suppose stratospheric aerosol injection is used to offset the $3.93\ \mathrm{W\,m^{-2}}$ forcing of doubled $\mathrm{CO_2}$, restoring global-mean temperature exactly. What happens to global precipitation?

Use the fast/slow decomposition. With temperature restored, $\Delta T = 0$, so the slow term vanishes. But the fast terms do not cancel, because the two agents act differently:

- $\mathrm{CO_2}$: fast suppression $-0.02\times3.93 = -0.079$.
- Solar dimming (which is what a stratospheric aerosol does, to first order): the forcing is a *reduction in absorbed sunlight*, mostly at the surface, so the atmospheric column's radiative budget is barely perturbed. Its fast precipitation response is small — take it as $-0.005\times3.93 = -0.020$, and of the same sign because reducing surface solar reduces evaporation.

Net: $$\frac{\Delta P}{P} \approx -0.079 - 0.020 = -0.099,$$

roughly a **10 percent reduction in global precipitation at unchanged global-mean temperature.**

(The real number from model experiments is 2 to 4 percent, because the crude coefficients above overstate both terms and because the geoengineering forcing needed is smaller than the full $\mathrm{CO_2}$ forcing once fast adjustments are counted. The sign and the mechanism are robust.)

*The general principle.* **Temperature and precipitation cannot both be restored by a single knob**, because they respond to different aspects of the forcing — one to the top-of-atmosphere imbalance, the other to the *atmospheric column's* radiative budget. Offsetting $\mathrm{CO_2}$ warming with reduced sunlight necessarily overcorrects the hydrological cycle, leaving a drier world at the right temperature. This is a first-order physical objection to solar geoengineering, independent of any governance concern, and it comes straight from the energetic constraint on precipitation.

## Watch out

- **You might think** more moisture means proportionally more rain. **Actually** rainfall is limited by the atmosphere's ability to shed latent heat, not by moisture supply, so it rises at a third of the moisture rate. The surplus moisture goes into making individual events more intense ([5.2](05-02-extremes-event-attribution.md)) rather than into more total rain.
- **You might think** "wet gets wetter" applies to your region. **Actually** the thermodynamic scaling is a statement about zonal-mean $P-E$, and it is dominated over land by *dynamic* shifts in circulation, which are model-dependent. Applying it to a specific country is exactly the overreach the signal-to-noise argument of [3.4](03-04-internal-variability-detection.md) warns against.
- **You might think** unchanged rainfall means unchanged water availability. **Actually** land relative humidity falls and vapour pressure deficit rises with warming, so evaporative demand increases even at constant precipitation. Soil moisture and streamflow can decline in regions where projected rainfall is flat, and this is a robust result.

## One-liner

> Moisture is thermodynamics and rainfall is energetics: seven percent per kelvin against two, and the five-percent difference is paid out of the circulation, which must slow down.

## Problems

**P1 (🟢)** For 2.5 K of warming: (a) compute the fractional change in column moisture at 7 percent per kelvin; (b) compute the change in global precipitation at 2 percent per kelvin; (c) compute the implied change in tropical overturning mass flux.

**P2 (🟡)** A region currently has $P = 1400$ and $E = 900\ \mathrm{mm\,yr^{-1}}$. (a) Compute $P - E$ now. (b) Under 3 K of warming with pure thermodynamic scaling, compute the new $P-E$. (c) If precipitation instead rises only at the global 2 percent per kelvin rate, compute the implied change in $E$ and comment on whether that is physically plausible for this region.

**P3 (🔴, optional)** The fast/slow decomposition is $\Delta P/P = -\mu\Delta F + \eta\Delta T$ with $\mu = 0.021$ per W m⁻² and $\eta = 0.031\ \mathrm{K^{-1}}$ for $\mathrm{CO_2}$. (a) Compute $\Delta P/P$ for $2\times\mathrm{CO_2}$ with $\Delta T = 3.0$ K, and express it as an apparent hydrological sensitivity in percent per kelvin. (b) Repeat for $4\times\mathrm{CO_2}$ ($\Delta F = 7.86$, $\Delta T = 6.0$ K). (c) Explain why the apparent hydrological sensitivity is the same in both cases but would *not* be the same for a solar forcing producing the same warming, and compute what it would be for a solar forcing with $\mu_{\text{solar}} = 0.005$.

<details>
<summary>Solutions</summary>

**P1** (a) $$(1.07)^{2.5}-1 = e^{2.5\ln 1.07}-1 = e^{0.16906}-1 = 0.184, \quad +18.4\ \text{percent}.$$

(b) $$(1.02)^{2.5}-1 = e^{2.5\times0.019803}-1 = e^{0.049507}-1 = 0.0508, \quad +5.1\ \text{percent}.$$

(c) $$\frac{1.0508}{1.1841}-1 = -0.1126, \quad -11.3\ \text{percent}.$$

**P2** (a) $$P-E = 1400-900 = 500\ \mathrm{mm\,yr^{-1}}.$$

(b) Thermodynamic scaling amplifies $P-E$ at 7 percent per kelvin:

$$(P-E)_{\text{new}} = 500\times(1.07)^3 = 500\times1.2250 = 613\ \mathrm{mm\,yr^{-1}},$$

an increase of 113 mm per year.

(c) If $P$ rises at only 2 percent per kelvin, $P_{\text{new}} = 1400\times(1.02)^3 = 1400\times1.0612 = 1486\ \mathrm{mm\,yr^{-1}}$. Then

$$E_{\text{new}} = P_{\text{new}} - (P-E)_{\text{new}} = 1486 - 613 = 873\ \mathrm{mm\,yr^{-1}},$$

a **decrease** of 27 mm per year, i.e. $-3$ percent.

Is that plausible? Over the **ocean** — no. Evaporation is not moisture-limited there and rises with temperature and with the vapour pressure deficit, so $E$ should increase. Over **land** — yes, and it is exactly what happens in water-limited regions: evaporation is capped by soil moisture supply, so it can fall even as demand rises.

The resolution is that the two scalings cannot both be applied to the same region. The 7-percent thermodynamic scaling of $P-E$ and the 2-percent global energetic constraint on $P$ are constraints on *different* quantities at *different* scales: the first is local moisture convergence, the second is a global-mean energy budget. A region can have $P$ rising faster than 2 percent per kelvin (many do) because the global constraint is a sum over all regions, not a limit on each.

**P3** (a) $$\frac{\Delta P}{P} = -0.021\times3.93 + 0.031\times3.0 = -0.0825 + 0.0930 = +0.0105,$$

$$\text{apparent sensitivity} = \frac{0.0105}{3.0} = 0.0035 = 0.35\ \text{percent per K}.$$

(b) $$\frac{\Delta P}{P} = -0.021\times7.86 + 0.031\times6.0 = -0.1651 + 0.1860 = +0.0209,$$
$$\text{apparent} = \frac{0.0209}{6.0} = 0.0035 = 0.35\ \text{percent per K}.$$

Identical.

(c) It is identical for $\mathrm{CO_2}$ at any level because both $\Delta F$ and $\Delta T$ scale together: with $\Delta T = \Delta F/\lambda_{\text{eff}}$, the apparent sensitivity is $\eta - \mu\lambda_{\text{eff}}$, which contains no reference to the magnitude of the forcing. Here $\lambda_{\text{eff}} = 3.93/3.0 = 1.31$, and $0.031 - 0.021\times1.31 = 0.031-0.0275 = 0.0035$. ✓

For a **solar** forcing, $\eta$ is essentially unchanged (the slow response is a property of the warmed climate, not of what warmed it) but $\mu$ is much smaller, because a change in absorbed sunlight barely perturbs the atmospheric column's radiative cooling — it acts at the surface:

$$\eta - \mu_{\text{solar}}\lambda_{\text{eff}} = 0.031 - 0.005\times1.31 = 0.031 - 0.0066 = 0.0244,$$

**2.4 percent per kelvin — seven times larger.**

*Check.* This is the quantitative content of Example 2 and of one of the sharpest results in the field: **the hydrological sensitivity is forcing-agent-dependent, and $\mathrm{CO_2}$ is the agent with the weakest hydrological response per kelvin.** It follows that (i) offsetting $\mathrm{CO_2}$ warming with solar dimming leaves the water cycle over-suppressed, and (ii) any inference of hydrological sensitivity from a period dominated by one forcing agent cannot be transferred to a period dominated by another — which is a real complication for using the observed record, where aerosols (also strongly atmospheric absorbers and scatterers) have played a large and time-varying role.

</details>

## Flashback

**From Lesson 4.1 (The carbon cycle):** Cumulative land-use $\mathrm{CO_2}$ emissions since 1750 total about 200 PgC. Suppose global reforestation returned all of it to the land biosphere. Use an equilibrium airborne fraction of 0.22, atmospheric carbon of 875 PgC, and $\lambda = 1.3\ \mathrm{W\,m^{-2}\,K^{-1}}$. (a) By how much would atmospheric carbon fall? (b) Convert to ppm and compute the change in forcing. (c) Compute the avoided warming and comment on the scale of the effort.

<details>
<summary>Solution</summary>

(a) Removing 200 PgC from the atmosphere causes the ocean and land to give some back, so the atmospheric drawdown is only the airborne fraction of the removal:

$$\Delta C_{\text{atm}} = 0.22\times200 = 44\ \mathrm{PgC}.$$

(b) $$\frac{44}{2.124} = 20.7\ \mathrm{ppm}.$$

Atmospheric carbon falls from 875 to 831 PgC, so

$$\Delta F = 5.35\ln\!\left(\frac{831}{875}\right) = 5.35\times(-0.0516) = -0.276\ \mathrm{W\,m^{-2}}.$$

(c) $$\Delta T = \frac{-0.276}{1.3} = -0.21\ \mathrm{K}.$$

The scale of effort: restoring 200 PgC to vegetation and soils means re-growing every forest cleared since 1750 — roughly doubling the current terrestrial vegetation carbon stock of 450 PgC by nearly half — and holding it there permanently. The reward is 0.21 K, about a sixth of the warming to date, and about two decades' worth of current emissions.

*Check.* Two lessons compound here. The factor 0.22 is doing enormous work: 200 PgC removed buys only 44 PgC of atmospheric reduction, because [4.2](04-02-ocean-carbon-revelle-factor.md)'s buffered reservoirs outgas in response. And the logarithm compounds the disappointment — 20.7 ppm off a base of 412 is a 5 percent reduction in concentration for a 0.28 W m⁻² reduction in forcing. **Nature-based removal is real, bounded, and roughly an order of magnitude smaller than the problem**, which is not an argument against it but is an argument against treating it as a substitute for emissions reduction. It is also, as [4.1](04-01-the-carbon-cycle.md)'s Example 2 argued, *impermanent* — a forest can burn, and the 0.21 K comes straight back.

</details>

## Connections

- **Backward:** the 7 percent per kelvin is [2.2](02-02-planck-water-vapour-lapse-rate.md)'s Clausius–Clapeyron result, and the constant-relative-humidity assumption it rests on; the tropical circulation whose weakening is predicted is [atmospheric-science 4.4](../../atmospheric-science/lessons/04-04-thermal-wind-general-circulation.md)'s.
- **Forward:** the surplus moisture that does not become extra mean rainfall becomes extra *extreme* rainfall in [5.2](05-02-extremes-event-attribution.md); the Hadley expansion and jet shift are [5.5](05-05-circulation-regional-response.md); the hydrological objection to solar geoengineering is developed in [6.5](06-05-scenarios-projections-intervention.md).
- **Sideways (fluid dynamics):** $P \approx Mq$ is a mass-flux closure — the same bulk-transport reasoning as a boundary-layer flux parameterization, and the same move that turns an unresolvable turbulent field into a product of a mean transport and a mean property. See [`fluid-dynamics` 4.5](../../fluid-dynamics/lessons/04-05-turbulence-kolmogorov.md).
