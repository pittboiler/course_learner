# Climate Physics · Lesson 6.2: The model hierarchy

> ⏱ ~15 min · Module 6: Models, deep time and the long view · Builds on: [6.1](06-01-energy-balance-models-bistability.md), [2.4](02-04-clouds-the-wild-card.md), [2.5](02-05-diagnosing-feedbacks.md) · Unlocks: [6.3](06-03-ice-ages-100-kyr-problem.md), [6.5](06-05-scenarios-projections-intervention.md)

## Why this matters

"The models say" is how most climate results reach the public, and it obscures something important: there is no single model, and the most useful ones are often the simplest. [6.1](06-01-energy-balance-models-bistability.md)'s one-equation model told us Snowball Earth is possible; no general circulation model was needed and none would have made the point as clearly. Conversely, no energy-balance model can say anything about Mediterranean rainfall. **Each rung of the hierarchy answers a different question, and using the wrong rung is the most common methodological error in the field** — including the error of assuming that the most complex model is the most trustworthy.

## The idea

**Detail and duration trade off, brutally.** A model's cost scales roughly as the fourth power of its resolution — three spatial dimensions plus a shorter timestep for stability. So doubling the resolution costs sixteen times more, and going from a 100 km grid to a 1 km grid costs $10^{8}$ times more. That is the constraint the whole hierarchy is organized around: you can resolve the processes or you can run for a long time, not both.

**So build a ladder and use the right rung.** Energy-balance models for equilibria and timescales. Radiative–convective models for the vertical profile and for computing forcings. Intermediate-complexity models for glacial cycles. General circulation models for regional patterns and variability. Earth system models when the carbon cycle has to respond. Kilometre-scale models when convection must be resolved and a few years will do.

**Complexity is not accuracy.** Adding a process adds parameters, and parameters must be tuned. CMIP6 models have better cloud microphysics than CMIP5 and a *wider* spread in climate sensitivity, with several above 5 K. Adding a mechanism does not reduce structural error; it moves it, and sometimes it amplifies it.

**And understanding comes from the bottom of the ladder.** A general circulation model that reproduces a phenomenon has not explained it. Explanation comes from finding the simplest model that still shows the effect — because that model contains only the ingredients that are necessary. This is the central methodological argument for the hierarchy, and it is why climate physics still writes down zero-dimensional models in 2026.

## The formal version

**The rungs.**

| Model | Dimensions | Typical integration | What it is for |
|---|---|---|---|
| **Energy-balance (EBM)** | 0-D or 1-D (latitude) | $10^{6}$–$10^{9}$ yr | equilibria, bistability, hysteresis, timescale reasoning |
| **Radiative–convective (RCM)** | 1-D (vertical) | steady state | temperature profile, radiative forcing, feedback kernels |
| **Intermediate complexity (EMIC)** | simplified 3-D atmosphere, full ocean | $10^{4}$–$10^{6}$ yr | glacial cycles, carbon-cycle equilibration, AMOC hysteresis |
| **General circulation (GCM)** | full 3-D, ~25–100 km | $10^{2}$–$10^{3}$ yr | regional climate, circulation, variability, projections |
| **Earth system (ESM)** | GCM plus carbon, chemistry, vegetation, ice | $10^{2}$–$10^{3}$ yr | emissions-driven runs, TCRE, carbon feedbacks |
| **Km-scale / cloud-resolving** | 1–5 km global | 1–10 yr | resolved deep convection, no convective parameterization |

*In words: each rung buys process fidelity by giving up integration length, and the exchange rate is set by the cost scaling.*

**The cost scaling.** A three-dimensional grid with spacing $\Delta x$ has $N \propto \Delta x^{-3}$ cells. Numerical stability requires the Courant condition $\Delta t \lesssim \Delta x/U$, so the number of timesteps for a fixed simulation length goes as $\Delta x^{-1}$. Total cost:

$$\mathrm{Cost} \propto \Delta x^{-4}.$$

*In words: halve the grid spacing and pay sixteen times more.* Concretely:

| Resolution | Relative cost |
|---|---|
| 100 km (typical CMIP) | 1 |
| 25 km (high-resolution CMIP) | 256 |
| 5 km | $1.6\times10^{5}$ |
| 1 km (convection-resolving) | $10^{8}$ |

Computing power has grown by roughly a factor of $10^{3}$ per two decades, so a factor of $10^{8}$ is about fifty years of Moore's-law-equivalent progress — which is why global kilometre-scale climate modelling arrived in the 2020s and not the 1990s, and why the first such runs are a few years long, not a few centuries.

**What is parameterized, and why it matters.** At 100 km resolution, everything on the following list is unresolved and must be represented by a statistical rule:

| Process | Native scale | Consequence of getting it wrong |
|---|---|---|
| Deep convection | 1–10 km | tropical precipitation, MJO, cloud feedback |
| Boundary-layer turbulence | 10–100 m | low-cloud feedback ([2.4](02-04-clouds-the-wild-card.md)) |
| Cloud microphysics | micrometres | cloud phase feedback, aerosol indirect effect |
| Gravity waves | 1–100 km | stratospheric circulation, QBO |
| Land surface, vegetation | metres | evapotranspiration, land carbon |
| Sea-ice thermodynamics | metres | Arctic amplification, melt ponds |

**The single most consequential is deep convection**, because it sets tropical rainfall and interacts with the low-cloud feedback that dominates sensitivity spread. Removing that parameterization is the entire motivation for kilometre-scale modelling.

**Tuning, stated plainly.** Every model is tuned: parameters within the uncertain ranges of their parameterizations are adjusted so the model reproduces a set of targets — most importantly a closed top-of-atmosphere energy balance in the pre-industrial control, and usually global-mean temperature, cloud radiative effect and sea-ice extent. This is legitimate and unavoidable, and it has two consequences worth internalizing:

1. **Agreement with a tuning target is not evidence.** If a model was tuned to reproduce twentieth-century warming, its reproduction of twentieth-century warming tests nothing. Modelling centres now document their tuning targets partly for this reason.
2. **Models are not independent.** They share parameterization schemes, code lineage, and tuning practices. A 30-model ensemble has an effective size closer to 10 ([3.3](03-03-constraining-sensitivity-observations.md), P3), so "29 of 30 models agree" is much weaker evidence than it sounds.

**Why CMIP6's spread got wider.** CMIP5 gave ECS from 2.1 to 4.7 K; CMIP6 gave 1.8 to 5.6 K, with about ten models above 4.5 K. The cause is traceable: improved treatment of mixed-phase cloud microphysics removed a spurious negative shortwave feedback in the Southern Ocean ([2.4](02-04-clouds-the-wild-card.md)), which is a genuine improvement — and it left several models with cloud feedbacks that other evidence says are too positive. AR6's response was decisive and worth understanding as a methodological turning point: **it did not report the model spread as the assessed range.** It assessed sensitivity from independent evidence ([3.3](03-03-constraining-sensitivity-observations.md)) and used that to judge the models, concluding that several were too sensitive. The assessed range narrowed while the model range widened.

**Three kinds of ensemble, answering three questions.**

| Ensemble | Varies | Question answered |
|---|---|---|
| Multi-model (CMIP) | model structure | how much does the answer depend on modelling choices? |
| Perturbed-parameter | parameters within one model | how much does it depend on parameter values? |
| Initial-condition (large ensemble) | starting state only | how much is internal variability? ([3.4](03-04-internal-variability-detection.md)) |

*In words: structural, parametric and internal uncertainty are different things and require different experiments.* Conflating them is common — a multi-model spread is often presented as though it were a confidence interval, which it is not: it is a sample from an unknown distribution of modelling choices, with no guarantee that the truth lies inside it.

**The hierarchy as epistemics.** The case for simple models is not that they are cheap. It is that **a model you can fully understand tells you which ingredients are necessary.** [6.1](06-01-energy-balance-models-bistability.md)'s model has exactly two ingredients — a temperature-dependent albedo and a radiative damping — and it produces bistability; therefore bistability requires no more than those two things. A GCM that also shows bistability confirms the result but cannot isolate the cause, because everything is in it.

The productive workflow, used throughout modern climate science, runs both ways: find a phenomenon in a complex model, reproduce it in the simplest model that can host it, understand it there, then return to the complex model to check that the mechanism is the same one. The fixed-anvil-temperature hypothesis ([2.4](02-04-clouds-the-wild-card.md)) and the pattern effect ([3.2](03-02-tcr-ecs-pattern-effect.md)) were both established this way.

## Picture

![A trade-off plot with process detail and spatial resolution on the horizontal axis and achievable integration length in years, logarithmic, on the vertical. Points run from upper left to lower right along a dashed frontier: energy-balance models at a billion years and minimal detail, radiative-convective models, intermediate-complexity models at a hundred thousand years, general circulation models and Earth system models at hundreds of years, and kilometre-scale convection-resolving models at a few years with the finest detail. Each is annotated with what it is for](assets/06-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — what does resolution cost?).** A modelling centre runs a 100 km global model for 500 years using one month of machine time. (a) How long would the same run take at 25 km? (b) At 1 km? (c) What length of 1 km run fits in one month?

Cost scales as $\Delta x^{-4}$.

(a) $$\left(\frac{100}{25}\right)^4 = 4^4 = 256 \quad\Longrightarrow\quad 256\ \text{months} = 21\ \text{years}.$$

(b) $$\left(\frac{100}{1}\right)^4 = 10^{8} \quad\Longrightarrow\quad 10^{8}\ \text{months} = 8.3\ \text{million years of machine time}.$$

(c) Inverting: one month buys $500/10^{8} = 5\times10^{-6}$ years $= 2.6$ minutes of simulated time.

*The point.* On the *same machine*. Actual kilometre-scale runs happen because the machines are also thousands of times larger — the largest current systems deliver perhaps $10^{5}$ times the throughput of a typical centre's CMIP allocation, which converts 2.6 minutes into a few months of simulated climate. That is enough to study convective organization and cloud feedbacks directly, and nowhere near enough to run a 150-year projection. **The hierarchy is not going away; it is shifting one rung.**

**Example 2 (why you'd care — which model answers the question?).** For each question, name the lowest rung of the hierarchy that can answer it, and say why the rungs below fail.

*(a) "Could the Earth have two stable climates?"* — **EBM.** Requires only a state-dependent albedo and radiative damping. Nothing below the EBM exists; nothing above adds to the *existence* argument, only to the location of the folds.

*(b) "How much does doubling $\mathrm{CO_2}$ change the outgoing longwave radiation?"* — **Radiative–convective model** (or line-by-line radiative transfer). An EBM has no vertical structure and no spectrum, so it cannot compute a forcing at all — Budyko's $A$ and $B$ are fitted, not derived.

*(c) "Why did glacial cycles switch from 41 kyr to 100 kyr periodicity?"* — **EMIC.** Requires an ice sheet with memory, a carbon cycle, and a million-year integration. A GCM cannot run that long; an EBM has no ice-sheet dynamics.

*(d) "Will the Mediterranean get drier?"* — **GCM.** Requires resolved circulation, a Hadley cell with a definable edge, and storm tracks. An EMIC's atmosphere is too crude to place a subtropical dry edge.

*(e) "How much warming for a given cumulative emission?"* — **ESM.** Requires an interactive carbon cycle so the model can be driven by emissions rather than concentrations. A GCM prescribes $\mathrm{CO_2}$ and therefore cannot compute an airborne fraction.

*(f) "Do stratocumulus decks break up under 4×$\mathrm{CO_2}$?"* — **Large-eddy simulation**, above the whole global hierarchy in resolution and far below it in domain. No global model resolves the entraining inversion.

*The general principle.* **Match the rung to the question, and be suspicious of a result that came from a rung much higher than the question required** — extra complexity means extra parameters, extra tuning, and extra ways to be wrong without noticing. A GCM answer to question (a) would be less convincing than the EBM answer, not more.

## Watch out

- **You might think** a more complex model is more reliable. **Actually** complexity adds tunable parameters and structural assumptions faster than it adds constraints. CMIP6 has better cloud physics and a wider sensitivity spread than CMIP5. The right response is not to distrust models but to constrain them with independent evidence, which is what AR6 did.
- **You might think** the multi-model spread is a confidence interval. **Actually** it is a sample from the set of modelling choices people happened to make, with models sharing code and tuning practices. It has no guarantee of containing the truth, its effective size is much smaller than its nominal size, and it is not a probability distribution.
- **You might think** simple models are pedagogical toys superseded by real ones. **Actually** they are how the field's central results are *understood* — the ice–albedo bistability, the fixed anvil temperature, the pattern effect, TCRE's near-linearity. A complex model can demonstrate a phenomenon; only a simple one can explain it.

## One-liner

> Cost goes as the fourth power of resolution, so every model buys detail with duration — and the deepest results in the field came from the cheapest rung, because a model you can fully understand tells you which ingredients were necessary.

## Problems

**P1 (🟢)** A model runs at 50 km resolution. (a) By what factor does the cost increase at 12.5 km? (b) If the 50 km version simulates 1000 years in one week, how long does the 12.5 km version take for the same period? (c) How many years can the 12.5 km version simulate in one week?

**P2 (🟡)** A modelling group tunes its model by adjusting the entrainment rate in the convection scheme until the pre-industrial top-of-atmosphere imbalance is under $0.1\ \mathrm{W\,m^{-2}}$. The tuned model then reproduces observed twentieth-century warming to within 0.05 K. (a) Is that agreement evidence that the model's climate sensitivity is correct? (b) What *would* be evidence? (c) The same model is one of 30 in an ensemble, of which 25 also reproduce the warming; assess what that tells you.

**P3 (🔴, optional)** Three ensembles are run with the same model set. Ensemble A: 30 different models, one run each. Ensemble B: one model, 30 different parameter settings. Ensemble C: one model, one parameter setting, 30 different initial conditions. All report the 2050 global-mean warming. Ensemble A gives a standard deviation of 0.42 K, B gives 0.31 K, C gives 0.13 K. (a) Interpret each standard deviation. (b) Can the three be combined in quadrature to give a total uncertainty of $\sqrt{0.42^2+0.31^2+0.13^2} = 0.54$ K? Explain. (c) What additional uncertainty is present in none of the three?

<details>
<summary>Solutions</summary>

**P1** (a) $$\left(\frac{50}{12.5}\right)^4 = 4^4 = 256.$$

(b) $$256\ \text{weeks} = 4.9\ \text{years}.$$

(c) One week at 256 times the cost buys $1000/256 = 3.9$ years of simulated climate.

Worth noting what that means practically: a four-fold resolution increase turns a routine millennial control run into something you cannot do at all, and turns a century-scale projection into a multi-year commitment of a whole machine. This is why high-resolution model intercomparisons (HighResMIP) use far fewer models, shorter runs and smaller ensembles than the standard ones.

**P2** (a) **No.** The model was tuned on the pre-industrial energy balance, and the entrainment rate it was tuned with is one of the strongest controls on the low-cloud feedback and hence on climate sensitivity ([2.4](02-04-clouds-the-wild-card.md)). More importantly, reproducing twentieth-century warming can be achieved across a wide range of sensitivities by compensating with the aerosol forcing, which is itself uncertain by a factor of four ([1.5](01-05-forcing-agents.md)). A high-sensitivity model with strong aerosol cooling and a low-sensitivity model with weak aerosol cooling both fit the record. **The historical record constrains the product, not the factors.**

(b) Evidence would be out-of-sample and process-level:

- Reproducing quantities the model was *not* tuned to — the seasonal cycle amplitude, the response to Pinatubo, the observed interannual radiation–temperature relationship.
- Getting the *processes* right: the observed supercooled-liquid fraction in Southern Ocean clouds, the observed low-cloud response to its controlling factors, the observed tropical upper-tropospheric amplification.
- Matching paleoclimate states with independent forcing reconstructions ([3.3](03-03-constraining-sensitivity-observations.md)).
- Reporting its aerosol forcing and having *that* be consistent with independent estimates, so the compensation in (a) is closed off.

(c) Very little on its own. The 30 models share parameterization families, code lineage and tuning targets, so their effective independent number is perhaps 10. And all of them were developed in an environment where reproducing twentieth-century warming is a known expectation — a selection effect that operates even without deliberate tuning, because a model that failed badly would be revised before publication. **Twenty-five of thirty agreeing on a quantity everyone knew the answer to in advance is close to uninformative.**

**P3** (a) *Ensemble A, 0.42 K:* **structural uncertainty** — how much the answer depends on which modelling choices were made (which parameterization schemes, which dynamical core, which resolution). It also contains B's and C's uncertainties, since each model was run with one parameter setting and one initial condition.

*Ensemble B, 0.31 K:* **parametric uncertainty** within a single structure — how much the answer depends on the values of uncertain constants inside a fixed set of schemes. Also contains C's.

*Ensemble C, 0.13 K:* **internal variability** — the irreducible spread from the chaotic evolution of the system itself ([3.4](03-04-internal-variability-detection.md)), with structure and parameters held fixed.

(b) **No.** Quadrature addition requires independent contributions, and these are **nested**: A already contains parametric variation (different models have different parameters) and internal variability (each run has one initial condition). Adding them double-counts, and it double-counts twice. A defensible decomposition would subtract: the structural contribution is roughly $\sqrt{0.42^2 - 0.31^2} = 0.28$ K, and the parametric-beyond-internal contribution roughly $\sqrt{0.31^2-0.13^2} = 0.28$ K. Total remains 0.42 K, which is just A — as it should be, since A is the broadest sample.

(c) **Scenario uncertainty**, and it is usually the largest term by 2050 and overwhelmingly the largest by 2100. All three ensembles assume a given emissions pathway; none of them samples the possibility that emissions follow a different one. Also absent: **common structural error** — a bias shared by every model in the set, which no ensemble of those models can reveal. The Southern Ocean supercooled-liquid bias of CMIP5 was exactly this, and it was found by comparing with observations, not by looking at ensemble spread.

*Check.* The moral generalizes past climate: **an ensemble measures the variation among the things you tried, not the distance from the truth.** Any uncertainty estimate built purely from ensemble spread is a lower bound, and the gap between it and the real uncertainty is exactly the shared error that the ensemble cannot see.

</details>

## Flashback

**From Lesson 5.5 (Circulation and regional response):** The southern-hemisphere jet shifted poleward by 1.5 degrees of latitude between 1980 and 2000, and by only 0.2 degrees between 2000 and 2020. (a) Compute the rate in each period. (b) Explain the change, naming the two competing forcings. (c) Predict the sign of the trend over the coming decades and say what would falsify your prediction.

<details>
<summary>Solution</summary>

(a) $$1980\text{–}2000: \frac{1.5}{2} = 0.75\ \text{degrees per decade}; \qquad 2000\text{–}2020: \frac{0.2}{2} = 0.10\ \text{degrees per decade}.$$

A factor of 7.5 slowdown.

(b) Two anthropogenic forcings act on the southern jet with opposite signs.

**Stratospheric ozone depletion** (1980–2000) cooled the Antarctic lower stratosphere in spring, strengthening the polar vortex; that signal couples downward to the troposphere and drives a poleward shift of the surface westerlies and the jet. This was the dominant term over that period and it acted in the same direction as greenhouse forcing.

**Ozone recovery** (post-2000, following the Montreal Protocol) reverses that stratospheric cooling and therefore pushes the jet *equatorward*, opposing the continuing greenhouse-driven poleward shift. The two now largely cancel, which is why the trend flattened.

(c) Over the coming decades, ozone recovery completes (roughly by mid-century) while greenhouse forcing continues to grow. So the prediction is a **resumed poleward shift**, slow at first while the two forcings still partly cancel and accelerating as ozone recovery finishes.

Falsification: if the jet continues to show no trend or shifts equatorward through 2040–2050 while ozone has substantially recovered, the greenhouse-driven poleward push would have to be weaker than projected — which would in turn call into question the upper-level gradient argument of [5.5](05-05-circulation-regional-response.md). A cleaner test is seasonal: the ozone effect is concentrated in austral spring and summer, so the two forcings should separate by season, with a continuing poleward trend in autumn and winter where ozone does not compete.

*Check.* This is a rare and valuable case for this course: **two anthropogenic forcings with opposite effects on the same circulation feature, on known and different timelines.** It provides a genuine out-of-sample test of the mechanism, of the kind Example 2 above and P2 argued is what actually constitutes evidence — nobody tuned a model to a trend that had not happened yet.

</details>

## Connections

- **Backward:** [6.1](06-01-energy-balance-models-bistability.md) is the bottom rung, demonstrated; the parameterization problem is [2.4](02-04-clouds-the-wild-card.md)'s scale-separation argument; the kernel and Gregory diagnostics of [2.5](02-05-diagnosing-feedbacks.md) are how models on the middle rungs are compared.
- **Forward:** [6.3](06-03-ice-ages-100-kyr-problem.md) is an EMIC-scale problem; [6.5](06-05-scenarios-projections-intervention.md) is where scenario uncertainty — the term missing from every ensemble here — dominates everything else.
- **Sideways (numerical analysis):** the Courant condition that forces the timestep to shrink with the grid is the stability constraint on explicit schemes for hyperbolic equations, and it is why the cost is $\Delta x^{-4}$ rather than $\Delta x^{-3}$. See [`numerical-analysis` 5.4](../../numerical-analysis/lessons/05-04-heat-equation-explicit-implicit.md). The tuning discussion is model selection with more free parameters than independent constraints — overfitting, in the sense that agreement with a target used for fitting carries no information about out-of-sample skill.
