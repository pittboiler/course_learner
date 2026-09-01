# Climate Physics · Lesson 6.5: Scenarios, projections and the physics of intervention

> ⏱ ~15 min · Module 6: Models, deep time and the long view · Builds on: [6.2](06-02-model-hierarchy.md), [4.4](04-04-tcre-carbon-budgets-net-zero.md), [1.5](01-05-forcing-agents.md), [5.1](05-01-hydrological-cycle-response.md) · Unlocks: — (final lesson)

## Why this matters

Everything in this course converges here. A scenario is an emissions path; TCRE turns it into a temperature; the feedbacks set how much; the ocean sets how fast; the carbon cycle sets what fraction stays. And by 2100 the largest source of spread in any projection is **not** climate sensitivity or clouds or the pattern effect — it is which scenario. That is worth sitting with: after fifty years of work on the physics, the dominant uncertainty in what happens is a choice, not a measurement. This lesson closes the course by putting numbers on the futures, including the two engineered ones, and by being precise about what the physics says each of them can and cannot do.

## The idea

**A scenario is a story about emissions, not a prediction.** The Shared Socioeconomic Pathways describe self-consistent futures for population, energy, technology and land use; each is paired with a forcing level, and the label's number is the 2100 forcing in W m⁻². SSP2-4.5 means "middle-of-the-road development reaching 4.5 W m⁻²".

**Three uncertainties dominate at three different times.** Over the next two decades, **internal variability** ([3.4](03-04-internal-variability-detection.md)) is the largest term. By mid-century, **model and sensitivity uncertainty** takes over. By 2100, **scenario** dominates everything else combined. The practical implication is sharp: better physics narrows the mid-century range and does almost nothing to the 2100 range.

**Solar geoengineering works, in a narrow and specific sense.** Injecting sulphate into the stratosphere would reflect sunlight and reduce global-mean temperature — the physics is not in doubt, because volcanoes run the experiment for us. What it does *not* do is restore the climate: it over-corrects the water cycle ([5.1](05-01-hydrological-cycle-response.md)), does nothing at all about acidification ([4.3](04-03-ocean-acidification.md)), and creates a termination risk that grows with how long it is used.

**Carbon removal is thermodynamically cheap and practically expensive.** The minimum work to separate $\mathrm{CO_2}$ from air is about 120 kWh per tonne. Real direct air capture uses 15 to 20 times that. **The thermodynamic floor is not the binding constraint** — engineering and scale are — but the floor is worth knowing, because it says the problem is not fundamentally impossible, only very large.

**And the scenario choice is worth more than everything else in this course.** The difference between SSP1-1.9 and SSP5-8.5 in 2100 is 3 K. The full uncertainty in climate sensitivity contributes about 1.5 K to any single scenario. **The lever is emissions, by a factor of two.**

## The formal version

**The scenarios.** Assessed global warming for 2081–2100 relative to 1850–1900 (AR6):

| Scenario | 2100 forcing | Best estimate | Very likely range |
|---|---|---|---|
| SSP1-1.9 | 1.9 W m⁻² | 1.4 K | 1.0–1.8 |
| SSP1-2.6 | 2.6 | 1.8 | 1.3–2.4 |
| SSP2-4.5 | 4.5 | 2.7 | 2.1–3.5 |
| SSP3-7.0 | 7.0 | 3.6 | 2.8–4.6 |
| SSP5-8.5 | 8.5 | 4.4 | 3.3–5.7 |

Two remarks on how to read these. **SSP5-8.5 is now generally regarded as implausible** — it requires a coal-intensive expansion inconsistent with observed technology costs and deployment, and it was designed as a high-end bounding case rather than a business-as-usual path. Current policies point to roughly 2.5 to 3 K, between SSP2-4.5 and SSP3-7.0. And **the ranges overlap heavily until mid-century** and separate only afterwards, which is the visible signature of the uncertainty decomposition below.

**Where the uncertainty comes from, and when.** Following Hawkins and Sutton, decompose the variance in projected warming into three sources:

| Source | Dominant when | Reducible by |
|---|---|---|
| Internal variability | now to ~2040 | nothing (it is irreducible) |
| Model / response uncertainty | ~2040 to ~2070 | better physics, better constraints |
| Scenario | after ~2070 | choices, not science |

*In words: the near term is unpredictable in principle, the mid term is a science problem, and the long term is a policy problem.* At the regional scale everything shifts later — internal variability dominates regional projections well past mid-century ([3.4](03-04-internal-variability-detection.md)), which is why regional adaptation planning cannot wait for the science to narrow.

**Stratospheric aerosol injection: the physics.** Inject $\mathrm{SO_2}$ into the stratosphere; it oxidizes to sulphate aerosol with a lifetime of one to two years (against a week in the troposphere, [1.5](01-05-forcing-agents.md)); the aerosol scatters sunlight ([atmospheric-science 3.4](../../atmospheric-science/lessons/03-04-scattering-rayleigh-mie-aerosols.md)).

Pinatubo (1991) is the calibration: about 20 Tg of $\mathrm{SO_2}$ produced a peak global forcing near $-3\ \mathrm{W\,m^{-2}}$, decaying with an $e$-folding time of about a year, and cooled global mean temperature by roughly 0.4 K.

For a *sustained* offset, the steady-state burden is $B = I\tau$ with $I$ the injection rate and $\tau$ the lifetime. Published estimates cluster around

$$I \approx 2\ \mathrm{Tg\ S\ yr^{-1}}\ \text{per}\ \mathrm{W\,m^{-2}}\ \text{of offset},$$

with an important nonlinearity: **efficiency declines with loading**, because injected sulphur condenses onto existing particles rather than nucleating new ones, and larger particles scatter less per unit mass and sediment out faster. So offsetting 4 W m⁻² costs more than four times as much sulphur as offsetting 1.

Five physical objections, in order of how well established they are:

1. **It does not address acidification.** $\mathrm{CO_2}$ stays in the atmosphere and in the ocean ([4.3](04-03-ocean-acidification.md)). This objection is pure chemistry and admits no engineering answer.
2. **It over-corrects the hydrological cycle.** [5.1](05-01-hydrological-cycle-response.md)'s fast/slow decomposition: $\mathrm{CO_2}$ suppresses precipitation directly and warming increases it; cancel the warming with reduced sunlight and the suppression remains uncancelled, leaving a drier world at the right temperature. Model experiments give 2 to 4 percent less global precipitation at restored global-mean temperature.
3. **Termination shock.** The masked warming is realized within a decade or two if injection stops. If SAI is masking 2 K after fifty years of use and stops abruptly, the warming rate becomes of order $0.2\ \mathrm{K\,yr^{-1}}$ — **ten times the current rate**, and far beyond any ecosystem's adaptive capacity. The risk grows with the amount masked, which grows with time.
4. **Ozone.** Sulphate particles provide surface area for heterogeneous chlorine chemistry, the same mechanism as the polar ozone hole ([atmospheric-science 3.6](../../atmospheric-science/lessons/03-06-ozone-photochemistry-stratosphere.md)). Pinatubo produced measurable global ozone loss.
5. **Regional inequity.** A uniform reduction in sunlight does not cancel a spatially non-uniform greenhouse forcing. Overcooling the tropics while undercooling the poles, or vice versa, is unavoidable in principle; optimized injection latitudes can reduce but not eliminate the residual.

**Carbon dioxide removal: the thermodynamic floor.** The minimum reversible work to separate a dilute component at mole fraction $x$ from a mixture is, per mole of product,

$$w_{\min} = RT\ln\!\left(\frac{1}{x}\right)$$

in the dilute limit. *In words: separation costs energy because it reduces entropy, and the cost grows logarithmically as the target gets more dilute.*

| Source | $x$ | $w_{\min}$ | Per tonne $\mathrm{CO_2}$ |
|---|---|---|---|
| Ambient air | $4.2\times10^{-4}$ | 19.3 kJ mol⁻¹ | **122 kWh** |
| Power-plant flue gas | 0.12 | 5.25 kJ mol⁻¹ | **33 kWh** |

Real direct air capture consumes 1500 to 2500 kWh per tonne (thermal plus electrical), i.e. 15 to 20 times the floor — a respectable ratio for a separation process, and still a large absolute number.

**Scaling it.** Removing 10 GtCO₂ per year:

$$10^{10}\ \mathrm{t} \times 2000\ \mathrm{kWh\,t^{-1}} = 2\times10^{13}\ \mathrm{kWh} = 20\,000\ \mathrm{TWh\,yr^{-1}},$$

against world electricity generation of about 29 000 TWh per year — **roughly 70 percent of all the electricity humanity generates**. At the thermodynamic floor it would be 1220 TWh, about 4 percent. So the gap between the floor and practice is where the entire problem lives, and it is an engineering problem rather than a physical impossibility.

Three further constraints that the energy figure hides: the removed $\mathrm{CO_2}$ must be **permanently stored** (geological injection or mineralization — biological storage is a loan, [4.1](04-01-the-carbon-cycle.md)); removal is **asymmetric with emission**, so removing a tonne lowers atmospheric concentration by less than emitting a tonne raised it ([4.4](04-04-tcre-carbon-budgets-net-zero.md)); and enhanced weathering, the alternative route, requires moving rock at a fifth of the scale of all global mining per PgC ([6.4](06-04-deep-time-slow-thermostat.md)).

**What the physics does and does not settle.** It settles that SAI would cool the planet, that it would leave acidification untouched, that it would leave the water cycle over-suppressed, and that stopping it abruptly would be worse than never starting. It settles that removal is thermodynamically possible at a cost far below current practice. It does not settle whether either should be attempted — that is a question about governance, risk tolerance and distribution, and it is outside this course's scope by design.

## Picture

![Projected global warming since 1850 to 1900, from 2000 to 2100, for five scenarios. All five follow the same path to about 1.1 K in 2020 and then diverge. SSP1-1.9 in blue peaks near 1.5 K around 2050 and declines slightly to 1.4 K. SSP1-2.6 stabilizes near 1.8 K. SSP2-4.5 in grey reaches 2.7 K. SSP3-7.0 and SSP5-8.5 in coral reach 3.6 and 4.4 K. Vertical bars at 2100 show the very likely ranges, which overlap between adjacent scenarios. Dashed horizontal lines mark the 1.5 K and 2 K levels](assets/06-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — from a scenario to a temperature, without a model).** SSP2-4.5 reaches a 2100 forcing of $4.5\ \mathrm{W\,m^{-2}}$. (a) Estimate the 2100 warming using the transient relation $\Delta T = F/(\lambda+\varepsilon\kappa)$ with $\lambda = 1.3$ and $\varepsilon\kappa = 0.87$. (b) Compare with the assessed 2.7 K. (c) Estimate the eventual equilibrium warming at that composition.

(a) $$\Delta T = \frac{4.5}{1.3+0.87} = \frac{4.5}{2.17} = 2.07\ \mathrm{K}.$$

(b) The assessed value is 2.7 K — this estimate is 0.6 K low. Two reasons, both identifiable. The 4.5 W m⁻² is the *2100* forcing, but the system has been responding to a forcing that grew throughout the century, so more than the instantaneous transient fraction has been realized. And $\varepsilon\kappa$ declines as the forcing growth slows ([4.4](04-04-tcre-carbon-budgets-net-zero.md), P3). Using $\varepsilon\kappa = 0.5$ instead gives $4.5/1.8 = 2.5$ K, close to the assessed value.

(c) $$\Delta T_{\text{eq}} = \frac{4.5}{1.3} = 3.46\ \mathrm{K},$$

nearly 0.8 K above the 2100 value — heat the ocean has absorbed and not yet returned ([3.1](03-01-ocean-heat-uptake-thermal-inertia.md)).

*The point.* A two-line calculation using nothing but Module 2's $\lambda$ and Module 3's $\varepsilon\kappa$ reproduces a full Earth-system-model projection to within 20 percent, and identifying *why* it is 20 percent off requires only knowing which approximation was made. **That is what the framework in this course is for** — not to replace models, but to make their output legible and to make an error diagnosable.

**Example 2 (why you'd care — the termination shock, quantified).** Solar geoengineering is deployed from 2050, masking a forcing that grows to $3.0\ \mathrm{W\,m^{-2}}$ by 2100, holding global temperature at its 2050 value. In 2100 it stops abruptly. (a) Compute the masked equilibrium warming. (b) With an effective ocean response time of 15 years for the fast component, estimate the warming rate in the first decade after termination. (c) Compare with the current rate and with the fastest natural warming in the palaeorecord.

(a) $$\Delta T_{\text{masked}} = \frac{3.0}{1.3} = 2.3\ \mathrm{K}.$$

(b) The system relaxes toward the unmasked equilibrium with time constant $\tau \approx 15$ yr. In the first decade,

$$\Delta T(10\ \mathrm{yr}) = 2.3\left(1-e^{-10/15}\right) = 2.3\times0.487 = 1.12\ \mathrm{K},$$

i.e. about $1.1\ \mathrm{K\,decade^{-1}}$.

(Using the true multi-timescale response would give somewhat less in the first decade and more later, but the order of magnitude stands.)

(c) Current rate: $0.2\ \mathrm{K\,decade^{-1}}$ — so **five to six times faster**. The fastest sustained natural warming in the palaeorecord is the last deglaciation, at roughly $0.05\ \mathrm{K\,decade^{-1}}$ globally (5 K over 10 kyr, [6.3](06-03-ice-ages-100-kyr-problem.md)), so a termination shock would be **twenty times** the deglacial rate. Even the abrupt Dansgaard–Oeschger warmings, which reached several kelvin per decade regionally in Greenland, were not global.

*The general principle.* **The risk is not the deployment; it is the dependency.** SAI creates a commitment to continue, and the size of the commitment grows with every year of use and with every tonne emitted underneath it. A world that deploys SAI while continuing to emit has built a system whose failure mode is a rate of change no ecosystem has faced in the Cenozoic — and the failure mode can be triggered by war, economic collapse or political change, not only by a technical fault. This is why the physics community's near-unanimous position is that SAI could only ever be a supplement to emissions reduction, never a substitute: the substitute version is the one with the catastrophic failure mode.

## Watch out

- **You might think** narrowing climate sensitivity would narrow the 2100 projections. **Actually** by 2100 scenario uncertainty dominates: the spread between SSP1-1.9 and SSP5-8.5 is 3 K, while sensitivity uncertainty contributes about 1.5 K within any one scenario. Better physics helps the mid-century range and the regional detail, and it does not resolve the century-end question, which is not a scientific question.
- **You might think** SSP5-8.5 is business as usual. **Actually** it was constructed as a high-end bounding scenario requiring a coal-intensive twenty-first century, and observed technology-cost trends have made it implausible. Current policies point to about 2.5 to 3 K. Using SSP5-8.5 as "no policy" overstates the baseline; using SSP1-2.6 as "current trajectory" understates it.
- **You might think** solar geoengineering could return the climate to pre-industrial. **Actually** it can restore the global-mean temperature and necessarily fails to restore the water cycle (the forcing is applied in the wrong place, [5.1](05-01-hydrological-cycle-response.md)), the ocean chemistry (unaffected, [4.3](04-03-ocean-acidification.md)) or the regional pattern (uniform dimming against non-uniform forcing). It substitutes one perturbed climate for a different perturbed climate.

## One-liner

> By 2100 the physics has been settled to within about a kelvin and the answer still spans three — because the largest remaining term in every projection is not something anyone can measure.

## Problems

**P1 (🟢)** SSP1-2.6 reaches a 2100 forcing of $2.6\ \mathrm{W\,m^{-2}}$. (a) Estimate the 2100 warming with $\lambda+\varepsilon\kappa = 1.8\ \mathrm{W\,m^{-2}\,K^{-1}}$. (b) Estimate the eventual equilibrium warming with $\lambda = 1.3$. (c) State the committed additional warming and where that energy currently is.

**P2 (🟡)** A stratospheric aerosol programme must offset $2.0\ \mathrm{W\,m^{-2}}$, at 2 Tg S per year per W m⁻² in the linear regime, rising to an effective 3 Tg S per W m⁻² at this loading because of coagulation. (a) Compute the annual sulphur injection required. (b) Global anthropogenic $\mathrm{SO_2}$ emissions are about 50 Tg $\mathrm{SO_2}$ per year (25 Tg S); express the requirement as a fraction. (c) Explain why injecting the same mass into the stratosphere rather than the troposphere is far more effective, giving the ratio of lifetimes.

**P3 (🔴, optional)** Direct air capture. (a) Compute the minimum work per tonne of $\mathrm{CO_2}$ at a future atmospheric concentration of 550 ppm and compare with 420 ppm. (b) A plant achieves 1800 kWh per tonne; compute its second-law efficiency at 420 ppm. (c) If removal must reach 10 GtCO₂ per year and the plant is powered by solar photovoltaics at $200\ \mathrm{W\,m^{-2}}$ peak with a 20 percent capacity factor, compute the land area required and compare with a country of your choice.

<details>
<summary>Solutions</summary>

**P1** (a) $$\Delta T = \frac{2.6}{1.8} = 1.44\ \mathrm{K}.$$

(Assessed best estimate for SSP1-2.6 is 1.8 K; the shortfall is the same effect as Example 1 — the transient coefficient $\varepsilon\kappa$ falls as the forcing stops growing, and in a strongly-mitigating scenario the forcing has been roughly flat for decades by 2100, so more of the equilibrium response has been realized.)

(b) $$\Delta T_{\text{eq}} = \frac{2.6}{1.3} = 2.00\ \mathrm{K}.$$

(c) Committed additional warming: $2.00 - 1.8 = 0.2$ K using the assessed 2100 value (or $2.00-1.44 = 0.56$ K using the crude estimate). That energy is in the **deep ocean** — absorbed at the surface and mixed downward, and it returns to the surface over the following centuries as the vertical temperature gradient relaxes ([3.1](03-01-ocean-heat-uptake-thermal-inertia.md)). Note that this is the *constant-composition* commitment; under net zero, declining $\mathrm{CO_2}$ roughly cancels it ([4.4](04-04-tcre-carbon-budgets-net-zero.md)).

**P2** (a) $$I = 3\ \mathrm{Tg\ S}\ \mathrm{W^{-1}m^{2}\,yr^{-1}} \times 2.0\ \mathrm{W\,m^{-2}} = 6\ \mathrm{Tg\ S\ yr^{-1}}.$$

(b) $$\frac{6}{25} = 24\ \text{percent}$$ of current global anthropogenic sulphur emissions.

Worth pausing on: the amount of sulphur required is a *quarter* of what industry already emits — so the material requirement is not the obstacle. The obstacle is delivering it to 20 km altitude, continuously, forever.

(c) Tropospheric aerosol has a lifetime of about one week, set by wet deposition — rain removes it. The stratosphere is above the weather and has essentially no precipitation, so removal is by slow gravitational settling and by transport through the tropopause, giving a lifetime of one to two years. The ratio is

$$\frac{1.5\ \mathrm{yr}}{7\ \mathrm{days}} = \frac{548}{7} \approx 78.$$

Since the steady-state burden is $B = I\tau$, the same injection rate buys roughly **78 times** the burden in the stratosphere. Additionally, stratospheric aerosol is spread globally by the Brewer–Dobson circulation, whereas tropospheric aerosol stays near its source, so the forcing per unit burden is also more uniform. (Both facts are just [1.5](01-05-forcing-agents.md)'s volcanic mechanism restated.)

**P3** (a) $$w_{\min} = RT\ln(1/x): \qquad x = 5.5\times10^{-4}: \ \ 8.314\times298\times\ln(1818) = 2478\times7.506 = 18.6\ \mathrm{kJ\,mol^{-1}}.$$

Per tonne: $$18.6\times10^{3}\times\frac{10^{6}}{44}\ \mathrm{J} = 4.23\times10^{8}\ \mathrm{J} = 117\ \mathrm{kWh\,t^{-1}}.$$

At 420 ppm it was 122 kWh per tonne. **Only 4 percent cheaper for a 31 percent higher concentration** — because the dependence is logarithmic. Waiting for the air to get dirtier does not meaningfully help.

(b) $$\eta_{\mathrm{II}} = \frac{w_{\min}}{w_{\text{actual}}} = \frac{122}{1800} = 6.8\ \text{percent}.$$

Low in absolute terms, but not unusual for a separation of a very dilute species — for comparison, cryogenic air separation runs at 20 to 30 percent second-law efficiency on a far less dilute target.

(c) Energy required: $$10^{10}\ \mathrm{t}\times1800\ \mathrm{kWh\,t^{-1}} = 1.8\times10^{13}\ \mathrm{kWh\,yr^{-1}} = 18\,000\ \mathrm{TWh\,yr^{-1}}.$$

Solar output per square metre: $200\ \mathrm{W\,m^{-2}}$ peak at 20 percent capacity factor gives a mean $40\ \mathrm{W\,m^{-2}}$, and over a year ($8766$ h) that is $0.351\ \mathrm{kWh\,m^{-2}}\times10^{3}$... computing directly:

$$40\ \mathrm{W\,m^{-2}}\times8766\ \mathrm{h} = 3.51\times10^{5}\ \mathrm{Wh\,m^{-2}} = 351\ \mathrm{kWh\,m^{-2}\,yr^{-1}}.$$

$$A = \frac{1.8\times10^{13}}{351} = 5.1\times10^{10}\ \mathrm{m^2} = 5.1\times10^{4}\ \mathrm{km^2}.$$

About 51 000 km² — roughly the area of Costa Rica, or of Slovakia, or 1.4 times Belgium.

*Check.* That is a surprisingly *small* answer, and it is worth taking seriously in both directions. It says the land requirement is not the obstacle — 51 000 km² is under 0.04 percent of Earth's land, and less than the area already covered by solar farms and their planned expansion. What the number omits is the capital cost of the capture plants themselves (currently 300 to 1000 dollars per tonne, so $3$–$10$ trillion dollars per year at 10 Gt), the geological storage capacity and its verification, and the fact that this entire apparatus removes about 25 percent of current emissions.

**The honest summary, which is also this course's:** removal is physically permitted and economically enormous, geoengineering is physically effective and strategically hazardous, and neither changes the arithmetic of [4.4](04-04-tcre-carbon-budgets-net-zero.md) — peak warming is cumulative emissions times a constant, and the only term anyone can move by an order of magnitude is the emissions.

</details>

## Flashback

**From Lesson 5.6 (Tipping elements and thresholds):** A model of the AMOC has folds at freshwater forcing $+0.10\ \mathrm{Sv}$ (collapse) and $-0.05\ \mathrm{Sv}$ (recovery). The system currently sits at $+0.02\ \mathrm{Sv}$, and Greenland melt is increasing the forcing at $0.01\ \mathrm{Sv}$ per decade. (a) When is the collapse fold reached? (b) What forcing is required to recover, and how far below the collapse point is that? (c) Comment on what this implies about mitigation timing.

<details>
<summary>Solution</summary>

(a) $$t = \frac{0.10-0.02}{0.01\ \mathrm{Sv\,decade^{-1}}} = 8\ \text{decades} = 80\ \text{years}.$$

(b) Recovery requires reaching the lower fold at $-0.05$ Sv, which is $0.15$ Sv below the collapse point — and *below the pre-industrial baseline of zero*. So recovery cannot be achieved merely by stopping Greenland melt: that returns the forcing to at best its present value of $+0.02$ Sv, which is still $0.07$ Sv above the recovery fold. It would require *removing* freshwater from the North Atlantic, or an equivalent restoration of the density contrast by cooling — neither of which any plausible mitigation achieves.

Note also the ratio: the total rise that caused the collapse was $0.08$ Sv; the reduction needed to reverse it is $0.15$ Sv, nearly twice as large.

(c) The implication is that **for a hysteretic system, the value of acting early is not proportional to the amount of forcing avoided — it is the difference between reversible and irreversible.** Reducing the forcing rate from 0.01 to 0.005 Sv per decade buys 80 additional years and, if it can be brought to zero before the fold, avoids the transition entirely at essentially no long-run cost. Arriving one year after the fold costs the full hysteresis loop, permanently.

*Check.* This is the sharpest possible statement of why threshold systems change the logic of climate policy. For a smooth system, damage is a function of cumulative emissions and delaying action costs proportionally ([4.4](04-04-tcre-carbon-budgets-net-zero.md)). For a hysteretic one, the cost is a step function of *whether* the fold was crossed, and the timing matters in a way the smooth framing cannot capture. The difficulty — [5.6](05-06-tipping-elements-thresholds.md)'s difficulty — is that the fold's location is not known, so the step function is smeared into a slope again from the point of view of anyone deciding. **Uncertainty about a threshold converts it, for decision purposes, back into a smooth increasing risk.**

</details>

## Connections

- **Backward:** the projections use TCRE ([4.4](04-04-tcre-carbon-budgets-net-zero.md)), $\lambda$ (Module 2), $\varepsilon\kappa$ ([3.1](03-01-ocean-heat-uptake-thermal-inertia.md)) and the forcing ledger ([1.5](01-05-forcing-agents.md)); the geoengineering physics is [1.5](01-05-forcing-agents.md)'s volcanic mechanism deliberately reproduced, with [5.1](05-01-hydrological-cycle-response.md)'s hydrological objection and [4.3](04-03-ocean-acidification.md)'s chemical one.
- **Sideways (thermodynamics):** the separation work $RT\ln(1/x)$ is the reversible work to unmix, i.e. the entropy of mixing run backwards — the same expression that gives the osmotic pressure of a dilute solution and the free energy of a concentration cell. See [`thermodynamics-physics` 3.4](../../thermodynamics-physics/lessons/03-04-third-law-chemical-potential.md).

## Closing the course

You started with a slab greenhouse and a number, 3.7 watts per square metre, quoted rather than derived. You end able to derive it from the shape of a molecular absorption band, to explain why it is logarithmic, to say precisely what "forcing" means and which of four numbers is meant, to combine feedbacks into a sensitivity and know why its upper tail is stubborn, to compute when rather than only how much, to say where the carbon goes and why only half of it stays, to predict which regions dry and why, and to put numbers on both engineered futures.

Six things are worth carrying out of the course, and none of them is a number:

**The framework is three symbols.** $C\,dT/dt = F - \lambda\,\Delta T$. Module 1 built $F$, Module 2 built $\lambda$, Module 3 built $C$, and everything else is what those three imply. When a new claim arrives, the first question is which symbol it is about.

**Reciprocals make tails.** ECS is $F/\lambda$, and $\lambda$ is a difference of comparable terms. Every long upper tail in this subject — sensitivity, the pattern-effect correction, the observational constraint — is a symmetric uncertainty in a denominator passed through a division. Argue in $\lambda$-space.

**Timescale decides everything.** Whether something is a forcing or a feedback, a boundary condition or a dynamic variable, a commitment or a threshold, depends on the timescale of the question. Water vapour is a feedback because it lives nine days; $\mathrm{CO_2}$ is a forcing because it lives millennia. The silicate thermostat is why Earth is habitable and why it cannot help us. Same physics, different clock.

**Rate, not level, is our distinguishing feature.** The PETM released comparable carbon and the deglaciation moved comparable ice. Both were ten times slower. Nearly every buffer in the system — carbonate sediment dissolution, ocean mixing, ecosystem migration, weathering — works on a timescale we are outrunning.

**Cancellation is not absence.** TCRE is linear because three nonlinearities cancel. The water-vapour and lapse-rate feedbacks are quoted together because they anticorrelate. An agent with zero effective forcing can still reorganize a monsoon. When a quantity looks simple, ask which large terms are cancelling to produce it, because they will stop cancelling somewhere.

**And the physics has done its part.** The remaining uncertainty in what happens this century is dominated by a term that no measurement will reduce. That is an unusual place for a physical science to arrive at, and it is worth stating plainly rather than treating as a disappointment: the question stopped being a question about the climate some time ago.
