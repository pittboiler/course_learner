# Climate Physics · Lesson 1.1: The climate system and its timescales

> ⏱ ~15 min · Module 1: Radiative foundations, past the slab · Builds on: [atmospheric-science 1.1](../../atmospheric-science/lessons/01-01-composition-vertical-structure.md), [atmospheric-science 6.5](../../atmospheric-science/lessons/06-05-predictability-two-week-limit.md) · Unlocks: [1.2](01-02-gray-atmosphere-radiative-equilibrium.md) (the gray atmosphere)

## Why this matters

Weather forecasts fail after about two weeks, yet climate projections for 2100 are taken seriously. That is not a contradiction, and the reason is the whole subject in one sentence: **weather is an initial-value problem and climate is a boundary-value problem.** You cannot say what the atmosphere will be doing on a particular Tuesday in 2075, but you can say what its *statistics* must be, because those are pinned by the energy budget and by the slow components underneath it. This lesson lays out those components and the clock each one runs on — which is also, in advance, the table of contents for the rest of the course.

## The idea

**One system, five reservoirs, wildly different memories.** The climate system is the atmosphere, the ocean, the cryosphere (ice in all its forms), the land surface and the biosphere, coupled by exchanges of energy, water, momentum and carbon. What makes it hard is not the number of components but the spread of their response times — from days to millions of years, nine orders of magnitude.

**Heat capacity is the clock.** A reservoir's response time is roughly how much energy you have to pour in to warm it by a kelvin, divided by how fast the imbalance supplies energy. Everything else follows. The atmosphere is astonishingly light: a square metre of it masses about $p_s/g \approx 10^4$ kg, and it takes about a month to adjust radiatively. The ocean's top 70 metres alone holds nearly thirty times as much heat capacity; the whole ocean, over a thousand times. So the ocean is not a passive partner — **it is the memory of the system**, and it is why the answer to "how fast?" is almost never the answer to "how much?"

**Fast, slow, and the trick that makes climate tractable.** Pick a question with a timescale attached — say, the next century. Every process much faster than that has already equilibrated and can be treated statistically: you do not track individual storms, you track their aggregate transport. Every process much slower than that is effectively frozen and can be treated as a fixed boundary: continents don't move in a century, and neither does the deep-ocean carbon inventory. Only the processes with timescales *comparable* to the question have to be modelled dynamically. Change the question's timescale and the same process moves category — which is exactly what happens between this course's Module 3 (a century, so the deep ocean is dynamic) and Module 6 (a million years, so silicate weathering is).

**Forcing versus variability.** Something can change the climate from outside — a change in solar output, a volcano, our emissions. Call that a **forcing**: an imposed perturbation to the energy budget, independent of the state. But the system also wanders on its own, without any push, because it is a coupled nonlinear fluid: heat sloshes between ocean and atmosphere on multi-year and multi-decadal timescales and the global temperature wiggles as a result. Call that **internal variability**. Almost every hard question in observational climate science — is a trend real, is a record year attributable, did warming "pause" — is a question about telling those two apart, which is Module 3's job.

## The formal version

**The components and their exchanges.**

| Component | Mass/extent | Adjustment time | What it exchanges |
|---|---|---|---|
| Atmosphere | $10^4$ kg m⁻² | days to ~1 month | heat, water vapour, momentum, $\mathrm{CO_2}$ |
| Ocean mixed layer | 50–100 m | months to a few years | heat, $\mathrm{CO_2}$, water |
| Deep ocean | 3700 m mean | $10^2$–$10^3$ yr | heat, carbon (the long-term sink) |
| Sea ice | seasonal, 1–3 m thick | weeks to years | albedo, insulation, salt |
| Land surface & seasonal snow | thin, low $c$ | days to seasons | albedo, water, sensible/latent heat |
| Glaciers & ice caps | mountain-scale | decades to centuries | sea-level mass |
| Ice sheets (Greenland, Antarctica) | km-thick | $10^3$–$10^5$ yr | albedo, sea level, freshwater |
| Biosphere & soils | ~2200 PgC | years to millennia | carbon, albedo, evapotranspiration |
| Lithosphere (weathering, tectonics, volcanism) | — | $10^5$–$10^7$ yr | carbon in and out of rock |

**Heat capacity per unit area.** For a column of material of depth $h$, density $\rho$ and specific heat $c$,

$$C = \rho\,c\,h \qquad [\mathrm{J\,m^{-2}\,K^{-1}}].$$

*In words: $C$ is the energy needed to warm a square metre of the column by one kelvin.* For the atmosphere, the column mass is set by pressure rather than depth, $M = p_s/g$, so $C_{\text{atm}} = c_p\,p_s/g$:

$$C_{\text{atm}} = 1004 \times \frac{1.013\times10^{5}}{9.81} = 1.04\times10^{7}\ \mathrm{J\,m^{-2}\,K^{-1}}.$$

For seawater, $\rho c_p \approx 1027 \times 3985 = 4.09\times10^{6}\ \mathrm{J\,m^{-3}\,K^{-1}}$, so a 70 m mixed layer gives $2.87\times10^{8}$ and the full 3700 m column gives $1.51\times10^{10}$ — **28 times** and **1460 times** the atmosphere respectively.

**Adjustment time.** If a reservoir is warmed by an imbalance and damped by outgoing radiation at rate $\lambda$ (W m⁻² K⁻¹ — the feedback parameter, built properly in [2.1](02-01-feedbacks-gain-factor.md)), the relaxation time is

$$\tau = \frac{C}{\lambda}.$$

*In words: divide "energy per degree" by "watts lost per degree" and you get seconds.* With the no-feedback value $\lambda = 4\sigma T_e^3 = 3.74\ \mathrm{W\,m^{-2}\,K^{-1}}$ (from [atmospheric-science 3.1](../../atmospheric-science/lessons/03-01-solar-terrestrial-radiation.md)'s $T_e = 254.6$ K):

| Reservoir | $C$ (J m⁻² K⁻¹) | $\tau = C/\lambda$ |
|---|---|---|
| Atmosphere | $1.04\times10^{7}$ | 32 days |
| 70 m mixed layer | $2.87\times10^{8}$ | 2.4 yr |
| Full ocean column | $1.51\times10^{10}$ | 128 yr |

The last row is a lower bound on the true equilibration time, because the deep ocean is not warmed by a surface imbalance directly — it is *ventilated*, on the overturning timescale of many centuries. Module 3 replaces this one-box estimate with the two-layer model it deserves.

**Forcing, response, feedback — the framework.** Everything in this course fits one equation, which we will meet again and again:

$$C\frac{dT}{dt} = F(t) - \lambda\,\Delta T.$$

*In words: the rate at which the system stores heat equals the push minus what the warming itself radiates away.* Three symbols, three modules. $F$ — the forcing — is Module 1. $\lambda$ — the feedback parameter, and hence the equilibrium answer $\Delta T = F/\lambda$ — is Module 2. $C$ — the heat capacity, and hence *when* — is Module 3. Modules 4 through 6 ask where $F$ comes from, what the warming does regionally, and how we know any of it.

**Why climate is a boundary-value problem.** [Atmospheric science 6.5](../../atmospheric-science/lessons/06-05-predictability-two-week-limit.md) established that the atmosphere's sensitive dependence on initial conditions destroys forecast skill in about two weeks. That statement is about a *trajectory*. Climate asks instead for the *attractor* — the statistics the trajectory visits — and those are set by the boundary conditions: incoming solar radiation, atmospheric composition, ocean heat capacity, surface albedo, topography. Change a boundary condition and the statistics shift, predictably, even though no individual day is predictable. The standard analogy: nobody can tell you what the third roll of a loaded die will be, but everyone can tell you the mean of ten thousand rolls, and how it changes if you load it further.

## Picture

![A logarithmic timescale axis running from a day to a million years, with horizontal bars showing where each component of the climate system responds: the atmosphere in weeks, the ocean mixed layer in months to years, sea ice and land surface at similar speeds, the deep ocean over centuries to a millennium, glaciers and vegetation over decades to centuries, ice sheets over thousands to hundreds of thousands of years, and silicate weathering and tectonics over the longest span. A dashed window between a decade and a century marks the timescale of the question this course mostly asks](assets/01-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — the ocean's grip on the pace).** Earth is currently absorbing about $N = 0.8\ \mathrm{W\,m^{-2}}$ more than it emits. If all of that went into the atmosphere alone, how fast would it warm? If instead it goes into a 70 m mixed layer, how fast?

Rate of warming is $dT/dt = N/C$.

Atmosphere: $$\frac{dT}{dt} = \frac{0.8}{1.04\times10^{7}} = 7.7\times10^{-8}\ \mathrm{K\,s^{-1}} = 2.4\ \mathrm{K\,yr^{-1}}.$$

Mixed layer: $$\frac{dT}{dt} = \frac{0.8}{2.87\times10^{8}} = 2.8\times10^{-9}\ \mathrm{K\,s^{-1}} = 0.088\ \mathrm{K\,yr^{-1}}.$$

*The point.* Without the ocean, the present imbalance would warm the surface by more than two kelvin per year — the transition to a new climate would be over inside a decade and everyone alive would have watched it happen. The ocean's heat capacity slows it by a factor of 28 to under a tenth of a kelvin per year, which is close to the observed rate. It also, note, does not change the *destination* at all: $\Delta T = F/\lambda$ has no $C$ in it. **The ocean buys time; it does not buy safety.**

**Example 2 (why you'd care — is a process fast or slow?).** You are asked whether vegetation change should be treated as a feedback or as a fixed boundary in (a) a seasonal forecast, (b) a projection to 2100, (c) a simulation of the last glacial maximum.

The rule is: compare the process time to the question time.

(a) **Seasonal forecast, ~3 months.** Boreal forests take decades to shift. Much slower than the question, so vegetation type is a **fixed boundary**; only its seasonal cycle (leaf-out, snow masking) matters, and that is prescribed.

(b) **Projection to 2100, ~80 yr.** Comparable to the ecosystem-shift timescale, so vegetation must be **dynamic** — a genuine feedback. This is precisely why Earth System Models added interactive vegetation and a land carbon cycle; the shrubification of the Arctic tundra darkens the surface, and boreal forest expanding into tundra is a real albedo feedback on this timescale.

(c) **Last glacial maximum, 21 000 yr ago.** Vegetation had fully equilibrated to the glacial state, so it is again a **boundary condition** — but a *different* one from today's, and getting it wrong biases the simulated climate. Ice sheets, by contrast, are slower still and are prescribed from geological reconstructions rather than grown.

*The general principle.* "Feedback" and "boundary condition" are not properties of a process. They are properties of a process **relative to the question**, and the first thing to establish about any climate problem is what its clock reads.

## Watch out

- **You might think** climate and weather differ in the physics. **Actually** the physics is identical — same fluid, same radiation, same equations. They differ in the *question*: weather asks for a trajectory from a known state (initial-value), climate asks for the statistics forced by known boundaries (boundary-value). This is why a model that cannot forecast next month can still project next century, and why "they can't get the weekend right" is not the argument it sounds like.
- **You might think** the ocean's enormous heat capacity means warming will be small. **Actually** it means warming will be *slow*. Equilibrium is $\Delta T = F/\lambda$ — heat capacity is nowhere in it. What the ocean creates is **committed warming**: heat already absorbed that has not yet shown up at the surface. See [3.1](03-01-ocean-heat-uptake-thermal-inertia.md).
- **You might think** internal variability, being unforced, must average to zero and can be ignored. **Actually** over 10–20 years it is comparable in size to the forced trend, which is why short trends are nearly uninformative and why every "the warming stopped" claim of the last thirty years has been an artefact of picking the start year. Quantified in [3.4](03-04-internal-variability-detection.md).

## One-liner

> Every component of the climate system has a clock; whether something is a feedback, a boundary or noise depends entirely on which clock your question is asking about.

## Problems

**P1 (🟢)** A lake 25 m deep has the same $\rho c_p$ as seawater, $4.09\times10^{6}\ \mathrm{J\,m^{-3}\,K^{-1}}$. (a) Compute its heat capacity per square metre. (b) With $\lambda = 3.74\ \mathrm{W\,m^{-2}\,K^{-1}}$, compute its radiative adjustment time in months. (c) Would you expect such a lake to show a strong seasonal temperature cycle? Explain in one sentence.

**P2 (🟡)** Suppose a hypothetical Earth had no ocean — a rocky surface with an effectively zero-depth heat reservoir, so that only the atmosphere provides heat capacity. Using $F = 2.7\ \mathrm{W\,m^{-2}}$ and $\lambda = 1.3\ \mathrm{W\,m^{-2}\,K^{-1}}$: (a) compute the equilibrium warming, (b) compute the $e$-folding time, and (c) state what the observational consequence would be for detecting human-caused warming.

**P3 (🔴, optional)** The permafrost carbon pool holds roughly 1500 PgC, and thaw releases it over decades to centuries as the active layer deepens. (a) Classify permafrost carbon as fast, slow or comparable for a projection to 2100. (b) Explain why treating it as a *fixed boundary* biases a projection in a specific direction, and name the sign of the bias. (c) The same reservoir, in a simulation of the last deglaciation (~10 kyr), belongs in a different category. Say which, and why the change of category is not inconsistent.

<details>
<summary>Solutions</summary>

**P1** (a) $$C = \rho c_p h = 4.09\times10^{6} \times 25 = 1.02\times10^{8}\ \mathrm{J\,m^{-2}\,K^{-1}}.$$

(b) $$\tau = \frac{C}{\lambda} = \frac{1.02\times10^{8}}{3.74} = 2.73\times10^{7}\ \mathrm{s}.$$

Converting: $2.73\times10^{7}/(2.63\times10^{6}\ \mathrm{s\ per\ month}) = 10.4$ months, so about **10 months** — call it a year.

(c) The adjustment time is comparable to the length of a season, so the lake can partially follow the seasonal forcing but lags it substantially: a deep lake shows a damped, phase-shifted seasonal cycle, warmest in late summer and still releasing heat into early winter. (A 2 m pond, with $\tau$ under a month, tracks the air temperature closely instead — which is the everyday version of the same calculation.)

**P2** (a) $$\Delta T_{\text{eq}} = \frac{F}{\lambda} = \frac{2.7}{1.3} = 2.08\ \mathrm{K}.$$

Note this is **identical** to the ocean-covered case: equilibrium warming does not depend on heat capacity.

(b) $$\tau = \frac{C_{\text{atm}}}{\lambda} = \frac{1.04\times10^{7}}{1.3} = 8.0\times10^{6}\ \mathrm{s} = 93\ \mathrm{days}.$$

(c) With an $e$-folding time of about three months, such a planet would sit essentially **in equilibrium with its forcing at all times**. The observational consequences are sharp: temperature would track the forcing history year by year with no lag, there would be no committed warming and no ocean heat content to measure, and the transient and equilibrium responses would be the same number — so the entire distinction between TCR and ECS ([3.2](03-02-tcr-ecs-pattern-effect.md)) would not exist. Detection would be far easier, because the signal would not be smeared across decades. The price is that the same planet would swing violently with every volcanic eruption.

**P3** (a) Decades to centuries is **comparable** to an 80-year projection, so permafrost carbon must be treated dynamically — it is a genuine, active feedback over this century, not a boundary.

(b) Holding it fixed removes a carbon source that responds positively to warming: thaw releases $\mathrm{CO_2}$ and $\mathrm{CH_4}$, which increases the forcing, which causes more thaw. Freezing the reservoir therefore **biases the projected warming low** (and biases the remaining carbon budget of [4.4](04-04-tcre-carbon-budgets-net-zero.md) high, which is the more decision-relevant version of the same error).

(c) Over a 10 000-year deglaciation the pool has time to fully equilibrate to the new climate, so it becomes a **boundary condition** — you prescribe the glacial and interglacial inventories rather than integrating the flux. This is not inconsistent: as established above, fast/slow/comparable is a statement about the process *relative to the question*, and the question changed by two orders of magnitude. What stays fixed is the physics; what changes is which terms you are allowed to drop.

</details>

## Connections

- **Backward:** the two-week predictability limit of [atmospheric-science 6.5](../../atmospheric-science/lessons/06-05-predictability-two-week-limit.md) is what forces the boundary-value framing here; the column mass $p_s/g$ comes straight from the hydrostatic balance of [atmospheric-science 1.2](../../atmospheric-science/lessons/01-02-hydrostatic-equation-barometric-law.md).
- **Forward:** the equation $C\,dT/dt = F - \lambda\Delta T$ is the spine of the course. [1.2](01-02-gray-atmosphere-radiative-equilibrium.md)–[1.5](01-05-forcing-agents.md) build $F$, Module 2 builds $\lambda$, Module 3 builds $C$ and takes the equation seriously in time.
- **Sideways (dynamical systems):** "fast variables equilibrate and can be replaced by their statistics; slow variables are frozen" is timescale separation, the same move that justifies the quasi-steady-state approximation and adiabatic elimination in [`dynamical-systems` 3.4](../../dynamical-systems/lessons/03-04-normal-forms-structural-stability.md). Climate modelling is one long exercise in choosing which variables to eliminate.
