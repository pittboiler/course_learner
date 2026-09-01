# Climate Physics · Lesson 3.1: Ocean heat uptake and thermal inertia

> ⏱ ~15 min · Module 3: The transient problem · Builds on: [1.1](01-01-climate-system-timescales.md), [2.1](02-01-feedbacks-gain-factor.md) · Unlocks: [3.2](03-02-tcr-ecs-pattern-effect.md), [3.3](03-03-constraining-sensitivity-observations.md)

## Why this matters

Module 2 answered "how much". This module answers "when", and the answer is set almost entirely by the ocean, which has absorbed **91 percent** of the excess energy the planet has accumulated since 1970. That single fact reorganizes the problem: the destination $\Delta T = F/\lambda$ contains no heat capacity, so the ocean cannot change where we end up — but it controls the pace so thoroughly that essentially every practically important question (how fast, how much is already locked in, what does the record so far tell us) is a question about ocean heat uptake. This lesson builds the two models that do the work, and extracts the one number people most often get wrong: **committed warming**.

## The idea

**One box: an exponential approach.** Treat the ocean as a well-mixed slab of depth $h$. Apply a step forcing. The system warms exponentially toward $F/\lambda$ with time constant $\tau = C/\lambda$. For a 70 m mixed layer that is about 7 years — fast enough that the surface would be nearly in equilibrium with its forcing today.

**But it isn't, and the reason is that the ocean has a basement.** Heat leaks from the mixed layer into the deep ocean, and the deep ocean is 20 to 50 times larger. The two-box model — a fast surface layer exchanging with a slow deep layer — produces a response with two very different timescales: a rapid rise over a decade to about two thirds of the equilibrium value, then a centuries-long creep for the rest.

**During the fast phase, the deep ocean acts like extra damping.** Heat going downward is heat not warming the surface, and to a good approximation the downward flux is proportional to the surface warming, $\gamma\,\Delta T$. So the transient balance is $F = (\lambda + \gamma)\Delta T$: the system behaves as though its feedback parameter were $\lambda + \gamma$ rather than $\lambda$. **Ocean heat uptake masquerades as a stronger negative feedback**, which is exactly why the transient response is smaller than the equilibrium one ([3.2](03-02-tcr-ecs-pattern-effect.md)).

**Committed warming is the imbalance divided by the feedback.** Freeze the forcing today and the planet keeps warming until the current top-of-atmosphere imbalance is radiated away — an additional $N/\lambda$. With $N = 0.8\ \mathrm{W\,m^{-2}}$ that is a few tenths of a kelvin. It is *not* the same as "warming if we stopped emitting", which is nearly zero for a different reason entirely ([4.4](04-04-tcre-carbon-budgets-net-zero.md)).

## The formal version

**The one-box model.** With $C = \rho c_p h$ the heat capacity per unit area,

$$C\frac{d\,\Delta T}{dt} = F - \lambda\,\Delta T.$$

For a step forcing $F$ applied at $t = 0$ from equilibrium, the solution is

$$\boxed{\ \Delta T(t) = \frac{F}{\lambda}\left(1 - e^{-t/\tau}\right), \qquad \tau = \frac{C}{\lambda}.\ }$$

*In words: the warming approaches its equilibrium value exponentially, with a time constant equal to heat capacity over feedback.*

Derivation, for completeness: rearrange to $\frac{d\Delta T}{F/\lambda - \Delta T} = \frac{\lambda}{C}dt$, integrate both sides, apply $\Delta T(0)=0$.

Evaluating with $\rho c_p = 4.09\times10^{6}\ \mathrm{J\,m^{-3}\,K^{-1}}$ and $\lambda = 1.3\ \mathrm{W\,m^{-2}\,K^{-1}}$:

| Depth $h$ | $C$ (J m⁻² K⁻¹) | $\tau$ |
|---|---|---|
| 70 m (mixed layer) | $2.87\times10^{8}$ | 7.0 yr |
| 700 m | $2.86\times10^{9}$ | 70 yr |
| 2000 m | $8.19\times10^{9}$ | 200 yr |

*In words: the mixed layer sets the decadal pace; the deep ocean sets the centennial one.* And note that with $\tau = 7$ yr the surface alone would have equilibrated decades ago — the observed persistent imbalance is direct evidence that something deeper is engaged.

**The two-layer model.** Let $T_u$ be the mixed-layer temperature anomaly and $T_d$ the deep-ocean one, with heat capacities $C_u$ and $C_d$ and an exchange coefficient $\gamma$ (W m⁻² K⁻¹):

$$C_u\frac{dT_u}{dt} = F - \lambda T_u - \gamma\left(T_u - T_d\right), \qquad C_d\frac{dT_d}{dt} = \gamma\left(T_u - T_d\right).$$

*In words: the surface is forced, radiates, and loses heat downward at a rate proportional to how much warmer it is than the deep ocean; the deep ocean simply accumulates what it receives.*

Two limits make this transparent.

*Early ($T_d \approx 0$, and $dT_u/dt \approx 0$ once the fast transient is over):*
$$F \approx (\lambda + \gamma)\,T_u \quad\Longrightarrow\quad T_u \approx \frac{F}{\lambda+\gamma}.$$
With $\lambda = 1.3$ and $\gamma = 0.7$, $F_{2\times}/(\lambda+\gamma) = 3.93/2.0 = 1.97$ K against an ECS of 3.02 K. **This ratio is what makes the transient climate response about two thirds of ECS.**

*Late ($T_d \to T_u$):* the exchange term vanishes and $T_u \to F/\lambda$, the true equilibrium.

**Ocean heat uptake efficiency.** Define $\kappa$ by $N = \kappa\,\Delta T$ during the transient. In the two-layer picture $\kappa \approx \gamma$ when $T_d \ll T_u$. Observationally, $N = 0.8\ \mathrm{W\,m^{-2}}$ and $\Delta T = 1.2$ K give

$$\kappa = \frac{0.8}{1.2} = 0.67\ \mathrm{W\,m^{-2}\,K^{-1}},$$

consistent with the $\gamma \approx 0.7$ used above. This is a real, measurable number, and it is one of the few quantities in Module 3 that can be read almost directly off observations.

**Ocean heat uptake efficacy.** The simple model treats a watt going into the ocean as a watt not warming the surface, full stop. In reality the heat goes down preferentially in specific places — the Southern Ocean and the North Atlantic, where deep water forms — and *cooling those places* has a different effect on global radiation than cooling everywhere equally. The correction is an **efficacy** $\varepsilon$:

$$N = \varepsilon\,\gamma\left(T_u - T_d\right), \qquad \varepsilon \approx 1.3.$$

*In words: ocean heat uptake damps the surface response about 30 percent more than its raw magnitude would suggest, because it happens in high-latitude regions whose cooling has an outsized radiative effect.* This is the two-layer model's version of the pattern effect, and it is the bridge to [3.2](03-02-tcr-ecs-pattern-effect.md).

**Where the energy actually goes.** Of the excess energy accumulated by the Earth system since 1971:

| Reservoir | Share |
|---|---|
| Ocean | 91 percent |
| Land (soil, rock) | 5 percent |
| Ice melt | 3 percent |
| Atmosphere | 1 percent |

*In words: essentially all of global warming is ocean warming; the part we live in is a rounding error.* This is why ocean heat content is the cleanest measure of the planetary energy imbalance ([1.3](01-03-bands-saturation-logarithmic-forcing.md), Flashback) and why the Argo float array is arguably the single most valuable climate observing system.

**Committed warming.** Hold the forcing constant at today's value. Equilibrium requires $N = 0$, which requires an additional warming of

$$\Delta T_{\text{committed}} = \frac{N}{\lambda}.$$

With $N = 0.8\ \mathrm{W\,m^{-2}}$: $\lambda = 1.3$ gives $0.62$ K; $\lambda = 1.6$ gives $0.50$ K. **A few tenths of a kelvin, not several.**

This is worth being careful about, because three different "commitments" circulate and they are routinely conflated:

| Name | Definition | Value |
|---|---|---|
| **Constant-composition commitment** | forcing frozen at today's level | $N/\lambda \approx 0.5$ K |
| **Zero-emissions commitment** | emissions stop; $\mathrm{CO_2}$ then declines | $\approx 0$ ([4.4](04-04-tcre-carbon-budgets-net-zero.md)) |
| **Constant-emissions commitment** | emissions continue at today's rate | large and growing |

The middle one is the surprising and important result: stopping emissions does not lock in further warming, because the ocean and land carbon sinks pull $\mathrm{CO_2}$ down at roughly the rate the ocean releases its committed warming, and the two nearly cancel.

## Picture

![Global-mean warming against time after an abrupt 3.93 watt per square metre forcing. A dashed line marks the equilibrium value of 3.02 K. The coral curve, a single 70 m slab ocean, rises steeply and reaches equilibrium within about 30 years. The blue curve, a 70 m mixed layer coupled to a 1200 m deep ocean, rises almost as fast for the first decade to about 1.8 K but then bends over into a slow centuries-long creep, reaching only 2.4 K after 200 years, with about 0.6 K still committed](assets/03-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — how far along are we?).** With $F = 2.72\ \mathrm{W\,m^{-2}}$, observed warming $\Delta T = 1.2$ K and observed imbalance $N = 0.8\ \mathrm{W\,m^{-2}}$: (a) infer the effective $\lambda$; (b) compute the equilibrium warming at today's forcing; (c) compute the fraction of the equilibrium response already realized.

(a) From $N = F - \lambda\Delta T$:

$$\lambda = \frac{F - N}{\Delta T} = \frac{2.72 - 0.8}{1.2} = 1.60\ \mathrm{W\,m^{-2}\,K^{-1}}.$$

(b) $$\Delta T_{\text{eq}} = \frac{F}{\lambda} = \frac{2.72}{1.60} = 1.70\ \mathrm{K}.$$

(c) $$\frac{1.2}{1.70} = 71\ \text{percent}.$$

*The point.* About 70 percent of the warming that today's atmospheric composition eventually delivers has already happened. That is a much larger fraction than most people expect, and it follows directly from the two-layer picture: the fast mixed-layer response is nearly complete, and what remains is the slow deep-ocean creep. The corresponding committed warming is $0.8/1.60 = 0.50$ K.

Note also that the $\lambda = 1.60$ inferred here is *effective*, not equilibrium — it is contaminated by the pattern effect, which is why it exceeds the model-derived $\lambda \approx 1.3$. [3.3](03-03-constraining-sensitivity-observations.md) takes this apart properly.

**Example 2 (why you'd care — why the ocean does not save us).** A colleague argues that since the ocean has 1400 times the heat capacity of the atmosphere and has absorbed 91 percent of the excess heat, warming will be 1400 times slower than it would otherwise be, and therefore negligible. Diagnose the error quantitatively.

Two errors, one of magnitude and one of kind.

*Magnitude.* Only the part of the ocean that is *dynamically engaged* on the relevant timescale contributes. On a 50-year timescale the engaged depth is the mixed layer plus the ventilated thermocline, a few hundred metres — not 3700 m. Using the two-layer numbers: with $\gamma = 0.7$ and $\lambda = 1.3$, the transient response is $F/(\lambda+\gamma) = F/2.0$ against an equilibrium of $F/1.3$. The ocean slows things by a factor of $2.0/1.3 = 1.54$, **not 1400.**

*Kind.* Heat capacity does not appear in $\Delta T_{\text{eq}} = F/\lambda$ at all. The ocean changes the trajectory, not the destination. Delay is real and valuable — it buys decades to act — but it is a loan, not a discount.

*The general principle.* The confusion comes from mixing up two quantities with the same units: the ocean's total heat *content* (enormous) and its heat *uptake rate per degree of surface warming* (modest, $\kappa \approx 0.7\ \mathrm{W\,m^{-2}\,K^{-1}}$). Only the second one enters the dynamics, because it is limited by how fast heat can be mixed downward, not by how much room there is down there. **Ask always which one a claim is about.**

## Watch out

- **You might think** heat capacity reduces the eventual warming. **Actually** $\Delta T_{\text{eq}} = F/\lambda$ has no $C$ in it. Heat capacity sets the timescale only. A planet with a hundred times more ocean would take a hundred times longer to reach exactly the same temperature.
- **You might think** "warming in the pipeline" is several kelvin. **Actually** it is $N/\lambda$, currently about 0.5 K at fixed composition. Larger numbers usually come from quietly assuming continued emissions, which is a projection, not a commitment.
- **You might think** the single-slab exponential is a decent approximation. **Actually** it is qualitatively wrong at long times: it reaches equilibrium in decades, whereas the real system is still 20 percent short after two centuries. Fitting a single exponential to observations therefore *underestimates* both the timescale and the sensitivity — which is one of the mechanisms behind the low bias in observational ECS estimates ([3.3](03-03-constraining-sensitivity-observations.md)).

## One-liner

> The ocean absorbs ninety-one percent of the extra energy and thereby controls entirely when we get there and not at all where we end up — and the part of it that matters is not its total heat capacity but the modest rate, about 0.7 watts per square metre per kelvin, at which heat can be mixed downward.

## Problems

**P1 (🟢)** A planet's ocean mixed layer is 120 m deep, $\rho c_p = 4.09\times10^{6}\ \mathrm{J\,m^{-3}\,K^{-1}}$, and $\lambda = 1.1\ \mathrm{W\,m^{-2}\,K^{-1}}$. A step forcing of $2.5\ \mathrm{W\,m^{-2}}$ is applied. (a) Compute $C$ and $\tau$ in years. (b) Compute the equilibrium warming. (c) Compute the warming after 10 years and after 30 years.

**P2 (🟡)** Using the two-layer transient balance $F \approx (\lambda+\gamma)\Delta T$ with $\lambda = 1.25$ and $\gamma = 0.75\ \mathrm{W\,m^{-2}\,K^{-1}}$: (a) compute the transient warming for $F_{2\times} = 3.93$ and the ratio to ECS. (b) Now include an ocean heat uptake efficacy $\varepsilon = 1.3$, so the balance is $F = (\lambda + \varepsilon\gamma)\Delta T$; recompute. (c) Explain in two sentences why the efficacy is greater than 1, and what it implies for inferring $\lambda$ from the historical record.

**P3 (🔴, optional)** Earth's energy imbalance has averaged about $0.6\ \mathrm{W\,m^{-2}}$ over 1971–2020 (50 yr), and 91 percent of it went into the ocean. Earth's surface area is $5.1\times10^{14}\ \mathrm{m^2}$, the ocean covers 71 percent of it, and $\rho c_p = 4.09\times10^{6}\ \mathrm{J\,m^{-3}\,K^{-1}}$. (a) Compute the total energy accumulated by the ocean in joules. (b) If that heat were spread uniformly through the top 2000 m of the ocean, compute the mean temperature rise. (c) Compare with the observed surface warming of about 0.9 K over the same period, and explain in three sentences why the two numbers are so different and why the small one is the more reliable measure of the imbalance.

<details>
<summary>Solutions</summary>

**P1** (a) $$C = 4.09\times10^{6}\times120 = 4.91\times10^{8}\ \mathrm{J\,m^{-2}\,K^{-1}},$$
$$\tau = \frac{C}{\lambda} = \frac{4.91\times10^{8}}{1.1} = 4.46\times10^{8}\ \mathrm{s} = \frac{4.46\times10^{8}}{3.156\times10^{7}} = 14.1\ \mathrm{yr}.$$

(b) $$\Delta T_{\text{eq}} = \frac{2.5}{1.1} = 2.27\ \mathrm{K}.$$

(c) $$\Delta T(10) = 2.27\left(1-e^{-10/14.1}\right) = 2.27(1-0.4913) = 1.15\ \mathrm{K},$$
$$\Delta T(30) = 2.27\left(1-e^{-30/14.1}\right) = 2.27(1-0.1186) = 2.00\ \mathrm{K}.$$

**P2** (a) $$\Delta T_{\text{transient}} = \frac{3.93}{1.25+0.75} = \frac{3.93}{2.00} = 1.97\ \mathrm{K}, \qquad \mathrm{ECS} = \frac{3.93}{1.25} = 3.14\ \mathrm{K},$$
$$\text{ratio} = \frac{1.97}{3.14} = 0.63.$$

(b) $$\Delta T = \frac{3.93}{1.25 + 1.3\times0.75} = \frac{3.93}{1.25+0.975} = \frac{3.93}{2.225} = 1.77\ \mathrm{K}, \qquad \text{ratio} = 0.56.$$

(c) The efficacy exceeds 1 because ocean heat uptake is concentrated in the Southern Ocean and North Atlantic, where deep water forms. Suppressing warming *there* has a disproportionately large effect on global outgoing radiation, because those regions are cloud-covered, have strongly stabilizing local feedbacks, and communicate their surface temperature efficiently to the free troposphere and hence to space.

The implication for inference is direct and important: a study that fits $N = F - \lambda\Delta T$ to the historical record recovers not $\lambda$ but an *effective* $\lambda_{\text{eff}} = \lambda + (\varepsilon-1)\gamma$, which is larger — here by $0.3\times0.75 = 0.225$. Using $\lambda_{\text{eff}}$ as if it were $\lambda$ therefore **underestimates ECS**, by about 15 percent in this example, and this is one of the two main mechanisms behind the historical-record low bias.

**P3** (a) Mean power over Earth: $0.6\ \mathrm{W\,m^{-2}} \times 5.1\times10^{14}\ \mathrm{m^2} = 3.06\times10^{14}\ \mathrm{W}$.

Over 50 yr $= 1.578\times10^{9}$ s: $$E_{\text{total}} = 3.06\times10^{14}\times1.578\times10^{9} = 4.83\times10^{23}\ \mathrm{J}.$$

Ocean share: $$E_{\text{ocean}} = 0.91\times4.83\times10^{23} = 4.39\times10^{23}\ \mathrm{J}.$$

(b) Ocean area: $0.71\times5.1\times10^{14} = 3.62\times10^{14}\ \mathrm{m^2}$. Volume of the top 2000 m: $7.24\times10^{17}\ \mathrm{m^3}$. Heat capacity:

$$C_{\text{tot}} = 4.09\times10^{6}\times7.24\times10^{17} = 2.96\times10^{24}\ \mathrm{J\,K^{-1}}.$$

$$\Delta T_{\text{ocean}} = \frac{4.39\times10^{23}}{2.96\times10^{24}} = 0.148\ \mathrm{K}.$$

(c) The surface warmed 0.9 K while the upper 2000 m of ocean warmed 0.15 K — a factor of six — because the heat is being *distributed* through a column six times thicker than the layer that sets surface temperature, and because the deeper water has not fully received it. The small number is the more reliable measure of the imbalance for two reasons: it is an **integral** of the imbalance rather than an instantaneous response, so year-to-year internal variability (an El Niño moving heat from ocean to atmosphere, say) largely cancels out of it; and it involves no feedbacks, so converting it to watts requires only a heat capacity rather than a climate model. The price is that measuring 0.15 K in the global ocean requires a global array of profiling floats, which is why the record is only fully trustworthy after Argo reached full deployment around 2005.

*Check.* Sanity-check (a) against the flashback in [1.3](01-03-bands-saturation-logarithmic-forcing.md), which gave $3.8\times10^{23}$ J for the top 2000 m over 30 yr. This calculation covers 50 yr at a lower mean imbalance (the imbalance grew over the period), and gets $4.4\times10^{23}$ — larger, but not proportionally, exactly as it should be.

</details>

## Flashback

**From Lesson 2.3 (Surface albedo and the cryosphere feedback):** Deforestation converts 2 percent of Earth's surface from boreal forest (albedo 0.12) to cropland (albedo 0.20). Local annual-mean insolation is 250 W m⁻². (a) Compute the global-mean radiative forcing. (b) Compare with the AR6 land-use forcing of $-0.20\ \mathrm{W\,m^{-2}}$. (c) Name two effects of deforestation that this calculation omits, and state the sign of each.

<details>
<summary>Solution</summary>

(a) The albedo *increases* by $0.20 - 0.12 = 0.08$, so less sunlight is absorbed:

$$\Delta F_{\text{local}} = -0.08 \times 250 = -20\ \mathrm{W\,m^{-2}},$$
$$\Delta F_{\text{global}} = -20 \times 0.02 = -0.40\ \mathrm{W\,m^{-2}}.$$

A **cooling** — because forests are dark and crops are bright, and the effect is much larger in winter when snow can lie on cropland but is masked by the canopy in a forest.

(b) AR6 assesses $-0.20\ \mathrm{W\,m^{-2}}$, a factor of two smaller. The estimate here is high because it applies the full boreal albedo contrast to all deforested land, whereas most historical deforestation was in the tropics, where the forest-to-crop albedo contrast is much smaller (roughly 0.13 to 0.17) and there is no snow to unmask.

(c) Two omissions, with opposite signs:

1. **Carbon release** — clearing forest transfers biomass carbon to the atmosphere. Cumulative land-use $\mathrm{CO_2}$ emissions are of order 200 PgC, a large *positive* forcing already counted inside the $\mathrm{CO_2}$ line of the [1.5](01-05-forcing-agents.md) ledger rather than under "land use".
2. **Evapotranspiration** — forests transpire far more than crops, converting absorbed sunlight into latent rather than sensible heat. Removing them therefore warms the surface locally even when the albedo effect cools the planet globally. This is not a top-of-atmosphere forcing at all (it redistributes energy within the column) but it is what people actually experience, and it is why tropical deforestation warms locally while boreal deforestation cools.

*Check.* This is a good illustration of a general trap: **a global-mean forcing and a local temperature effect can have opposite signs.** Boreal deforestation has a negative global forcing and a positive local temperature effect; the ledger of [1.5](01-05-forcing-agents.md) records only the first. Any land-use policy argued purely from the forcing column is missing half the physics.

</details>

## Connections

- **Backward:** the heat capacities and timescales are [1.1](01-01-climate-system-timescales.md)'s, now used dynamically rather than as a classification; $\lambda$ is Module 2's.
- **Forward:** the transient balance $F = (\lambda+\varepsilon\gamma)\Delta T$ *is* the TCR of [3.2](03-02-tcr-ecs-pattern-effect.md); the efficacy $\varepsilon > 1$ is the seed of the pattern effect; the committed-warming distinction is completed by the zero-emissions commitment in [4.4](04-04-tcre-carbon-budgets-net-zero.md).
- **Sideways (ODEs):** the two-layer model is a linear two-dimensional system whose eigenvalues are the fast and slow response times, and the separation between them is what makes the response look like "quick rise, slow creep". This is the standard stiff-system structure of [`ode-refresher` 3.1](../../ode-refresher/lessons/03-01-linear-systems-eigenvalues.md); the ocean circulation that sets $\gamma$ is [`oceanography`](../../oceanography/syllabus.md)'s.
