# Climate Physics · Lesson 1.4: Radiative forcing, properly defined

> ⏱ ~15 min · Module 1: Radiative foundations, past the slab · Builds on: [1.3](01-03-bands-saturation-logarithmic-forcing.md), [1.2](01-02-gray-atmosphere-radiative-equilibrium.md) · Unlocks: [1.5](01-05-forcing-agents.md) (ranking the agents), [2.1](02-01-feedbacks-gain-factor.md) (feedbacks)

## Why this matters

The whole architecture of climate science rests on one hoped-for simplification: that you can characterise *any* perturbation — a gas, a volcano, a change in land cover — by a single number in watts per square metre, and then get the surface warming from $\Delta T = F/\lambda$ with the *same* $\lambda$ every time. That hope is not automatic. It only works if $F$ is defined carefully, and getting the definition wrong changes the answer by tens of percent for $\mathrm{CO_2}$ and by a **factor of several** for black carbon. This lesson is about the fine print, and the fine print is the reason IPCC quotes 3.93 W m⁻² for a $\mathrm{CO_2}$ doubling when [1.3](01-03-bands-saturation-logarithmic-forcing.md) computed 3.7.

## The idea

**Forcing is meant to be a predictor, not a measurement.** We want a quantity $F$ such that the eventual surface warming is $F/\lambda$, with $\lambda$ a property of the *climate*, not of the perturbation. So the definition should be chosen to make that true — and that means deciding which parts of the system are allowed to move before you take the reading.

**The trouble is that "before the response" is ambiguous.** Some parts of the system respond almost instantly to the perturbation itself, not to the resulting surface warming. Add $\mathrm{CO_2}$ and the stratosphere cools within months, entirely independently of what the surface does. Add black carbon and it heats the air it sits in within days, changing the local stability and burning off cloud. These are **rapid adjustments**: responses to the forcing agent, not to $\Delta T$. Do you count them as part of the forcing, or as part of the response?

**The answer, arrived at over thirty years, is: count them as forcing.** Anything that happens without needing the surface to warm is bookkept into $F$; anything that happens *because* the surface warmed is bookkept into $\lambda$. That is the modern **effective radiative forcing** (ERF), and it is defined operationally: run a model with the perturbation and with sea surface temperature and sea ice held fixed, let everything else equilibrate, and read the top-of-atmosphere flux imbalance.

**Three definitions, three numbers.** Each is a legitimate quantity; they are just answers to different questions. Instantaneous forcing asks what changes the moment you add the gas. Stratosphere-adjusted forcing waits a few months. Effective forcing waits for the whole atmosphere and land surface. For $\mathrm{CO_2}$ these differ by around 5 percent — annoying but survivable. For aerosols they differ enormously, which is exactly why aerosols dominate the uncertainty in [1.5](01-05-forcing-agents.md).

## The formal version

**The framework.** Write the top-of-atmosphere net downward flux imbalance $N$ as

$$N = F - \lambda\,\Delta T,$$

with $F$ the forcing (W m⁻²), $\lambda$ the feedback parameter (W m⁻² K⁻¹) and $\Delta T$ the global-mean surface warming. *In words: the imbalance is what you pushed with, minus what the warming has already radiated away.* At equilibrium $N = 0$ and $\Delta T = F/\lambda$. The definition of $F$ is whatever makes $\lambda$ as close to agent-independent as possible.

**Definition 1 — instantaneous radiative forcing (IRF).** Change the perturbing agent; change *nothing* else; recompute the radiative fluxes. Report the change in net downward flux, either at the top of atmosphere or at the tropopause.

These two levels give different answers, and the difference is physically meaningful: it is the flux *convergence* into the stratosphere. For $2\times\mathrm{CO_2}$, IRF at the tropopause is about 4.1 W m⁻² while IRF at the top of atmosphere is only about 2.8 W m⁻². The gap of roughly 1.3 W m⁻² is energy being deposited *in the stratosphere*, which is not going to stay there.

**Definition 2 — stratosphere-adjusted radiative forcing (SARF).** Hold the surface and troposphere fixed, but let the stratosphere relax back to radiative equilibrium — a few months, as [1.1](01-01-climate-system-timescales.md)'s timescale table would predict for a thin, low-heat-capacity layer with no convection. Then read the flux change.

Once the stratosphere is in radiative equilibrium it has no net flux divergence, so **the tropopause and top-of-atmosphere numbers become equal**. That is the reason this definition was adopted: it removes the level ambiguity. For $2\times\mathrm{CO_2}$, SARF $= 3.75$ W m⁻².

Note the direction. The stratosphere *cools* when you add $\mathrm{CO_2}$ ([1.2](01-02-gray-atmosphere-radiative-equilibrium.md), Example 2). A cooler stratosphere emits less — both upward and downward — so less escapes to space, and the TOA forcing goes *up* from 2.8 to 3.75. Meanwhile the tropopause value comes *down* from 4.1, because the colder stratosphere also sends less back into the troposphere. The two definitions meet in the middle.

**Definition 3 — effective radiative forcing (ERF).** Allow **all** rapid adjustments — stratospheric temperature, tropospheric temperature and humidity, cloud changes, land-surface temperature and snow — while holding sea surface temperature and sea ice fixed. Operationally:

$$\mathrm{ERF} = \Delta N \big|_{\text{SST, sea ice fixed}}.$$

*In words: run the model with the perturbation and a frozen ocean, wait for the atmosphere to settle, and read the imbalance it is left holding.* For $2\times\mathrm{CO_2}$, ERF $= 3.93 \pm 0.47$ W m⁻² (AR6). This is the number in every modern assessment, and the reason $F_{2\times}$ is quoted as 3.93 rather than 3.7.

| Definition | What is held fixed | $2\times\mathrm{CO_2}$ |
|---|---|---|
| IRF, top of atmosphere | everything | ~2.8 W m⁻² |
| IRF, tropopause | everything | ~4.1 W m⁻² |
| SARF | surface and troposphere | 3.75 W m⁻² |
| ERF | sea surface temperature, sea ice | 3.93 W m⁻² |

**Efficacy — the concept ERF was invented to retire.** Before ERF, the mismatch was handled by an *efficacy* $E$, defined so that

$$\Delta T = \frac{E \cdot \mathrm{RF}}{\lambda},$$

with $E$ tabulated per agent. Black carbon's efficacy came out near 0.2, solar's near 1.0, ozone's around 0.8 — a mess, and a sign the bookkeeping was wrong rather than the physics. **ERF is the definition that makes $E \approx 1$ by construction**, because it moves exactly the agent-specific fast responses out of the response and into the forcing.

**Why black carbon is the extreme case.** Soot absorbs sunlight in the atmosphere. Its instantaneous forcing is strongly positive — around $+0.7$ W m⁻² at the top of atmosphere — because it converts reflected sunlight into absorbed sunlight. But that absorption happens *in the air*, warming the layer directly. A warmed layer is more stable, which suppresses convection and evaporates low cloud beneath it (the **semi-direct effect**), and burning off bright low cloud is a strong negative forcing. The rapid adjustments therefore cancel most of the direct effect, and the ERF is only about $+0.1$ W m⁻². **The same particle gets a forcing seven times smaller under the definition that actually predicts warming.** This is not a technicality; it is the difference between soot being a major and a minor climate agent.

**The boundary is a convention, and it has to be enforced consistently.** "Rapid adjustment" versus "feedback" is defined by *what it responds to*, not by how fast it is. A cloud change caused directly by $\mathrm{CO_2}$'s radiative heating of the troposphere is an adjustment (into $F$); a cloud change caused by the surface having warmed is a feedback (into $\lambda$). Both happen on similar physical timescales. The fixed-SST experiment is precisely the device that separates them: with the ocean frozen, $\Delta T \approx 0$, so anything that still changes must be an adjustment. Get this bookkeeping wrong in either direction and you double-count.

## Picture

![A horizontal bar chart comparing four values of the forcing from doubling carbon dioxide. Instantaneous forcing at the top of atmosphere is 2.8 watts per square metre and at the tropopause 4.1, shown in grey. Stratosphere-adjusted forcing is 3.75, shown in blue, and effective radiative forcing is 3.93, shown in coral. A caption beneath notes that the sequence corresponds to allowing progressively more of the system to move: nothing, then the stratosphere, then all rapid adjustments with sea surface temperature held fixed](assets/01-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — which number goes in the equation).** A study reports an instantaneous tropopause forcing of 4.1 W m⁻² for $2\times\mathrm{CO_2}$ and uses $\lambda = 1.3\ \mathrm{W\,m^{-2}\,K^{-1}}$ to infer equilibrium warming. What does it get, what should it have got, and how large is the error?

Using IRF: $\Delta T = 4.1/1.3 = 3.15$ K.

Using ERF: $\Delta T = 3.93/1.3 = 3.02$ K.

The error is $0.13$ K, about 4 percent — modest for $\mathrm{CO_2}$.

*The point.* Four percent is tolerable, and it is why the older literature using SARF is still usable for greenhouse gases. But the *same* mistake applied to black carbon would give $0.7/1.3 = 0.54$ K instead of $0.1/1.3 = 0.08$ K — a factor of seven, and a completely different story about what soot does to the planet. The rule to carry: **the more the agent perturbs the atmosphere directly rather than the surface, the more the definition matters.**

**Example 2 (why you'd care — reconciling two published sensitivities).** Two papers estimate equilibrium climate sensitivity from the historical record, both using $\mathrm{ECS} = F_{2\times}\Delta T/(\Delta F - \Delta N)$ with the same observed $\Delta T = 1.03$ K and $\Delta N = 0.8$ W m⁻². Paper A uses $F_{2\times} = 3.71$ and $\Delta F = 2.55$; Paper B uses $F_{2\times} = 3.93$ and $\Delta F = 2.7$. They report different sensitivities. How much of the difference is physics and how much is bookkeeping?

Paper A: $$\mathrm{ECS} = \frac{3.71\times1.03}{2.55 - 0.8} = \frac{3.821}{1.75} = 2.18\ \mathrm{K}.$$

Paper B: $$\mathrm{ECS} = \frac{3.93\times1.03}{2.7 - 0.8} = \frac{4.048}{1.9} = 2.13\ \mathrm{K}.$$

Only 0.05 K apart — and that is the important observation. **Neither the numerator nor the denominator is the right thing to compare in isolation.** Paper B's $F_{2\times}$ is 6 percent larger, which alone would raise ECS by 6 percent; but its historical $\Delta F$ is also larger, by 6 percent, which lowers it. The two changes are not independent — they come from the *same* switch from SARF to ERF, applied consistently to both.

*The general principle.* Forcing definitions must be applied consistently across every term in an expression. A study that upgrades $F_{2\times}$ to the modern value while leaving the historical forcing time series on the old convention introduces a bias that is entirely artificial, and this has happened in print. When comparing sensitivity estimates, the first question is not "what did they get" but "which forcing convention, and did they use it everywhere?"

## Watch out

- **You might think** rapid adjustments are called that because they are fast, and feedbacks because they are slow. **Actually** the distinction is what they respond to: adjustments respond to the *agent*, feedbacks respond to the *surface warming*. Cloud adjustments and cloud feedbacks happen on the same physical timescale of hours; they are separated by the fixed-SST experiment, not by a stopwatch.
- **You might think** the top of atmosphere and the tropopause must give the same forcing, since energy is conserved. **Actually** they differ by exactly the amount the stratosphere is absorbing and has not yet re-radiated — which for $2\times\mathrm{CO_2}$ is a hefty 1.3 W m⁻². They agree only *after* stratospheric adjustment, which is the entire reason SARF was defined.
- **You might think** ERF is measurable from observations. **Actually** it is defined by a model experiment (fixed SST), which is a real epistemic limitation. Forcing is not observable; only the *response* is. This is why the aerosol forcing uncertainty in [1.5](01-05-forcing-agents.md) has proved so stubborn, and why it propagates directly into the observational sensitivity estimate of [3.3](03-03-constraining-sensitivity-observations.md).

## One-liner

> A forcing number means nothing until you say what was allowed to move: hold everything fixed and you get 2.8, let the stratosphere relax and you get 3.75, let every fast response but the ocean go and you get the 3.93 that actually predicts the warming.

## Problems

**P1 (🟢)** For $2\times\mathrm{CO_2}$, the instantaneous forcing is 4.1 W m⁻² at the tropopause and 2.8 W m⁻² at the top of atmosphere. (a) How much energy per square metre per second is being deposited in the stratosphere immediately after the doubling? (b) Does the stratosphere warm or cool in response, and why does that seem to contradict (a)? Resolve the apparent contradiction in two sentences.

**P2 (🟡)** An aerosol species has instantaneous forcing $-0.4\ \mathrm{W\,m^{-2}}$ (it scatters sunlight) plus a cloud-brightening rapid adjustment of $-0.6\ \mathrm{W\,m^{-2}}$. (a) What is its ERF? (b) Using $\lambda = 1.3\ \mathrm{W\,m^{-2}\,K^{-1}}$, compute the equilibrium temperature change it produces. (c) A study that used only the instantaneous forcing would report what efficacy for this species, and would that be an accurate description of the physics or an artefact of bookkeeping?

**P3 (🔴, optional)** Consider a hypothetical agent whose ERF is zero but whose instantaneous forcing is $+1.0\ \mathrm{W\,m^{-2}}$, exactly cancelled by rapid adjustments. (a) What global-mean equilibrium surface warming does it cause? (b) Does that mean it has no climate effect at all? Argue both sides in three or four sentences, naming at least one specific way it could matter. (c) Explain why this case shows that ERF, although the right variable for global-mean temperature, is not a complete description of an agent.

<details>
<summary>Solutions</summary>

**P1** (a) The tropopause value counts the flux entering the troposphere-plus-surface system; the TOA value counts what the whole column gains. The difference is what the stratosphere retains:

$$4.1 - 2.8 = 1.3\ \mathrm{W\,m^{-2}}$$

is being converged into the stratosphere.

(b) It **cools**. The resolution: the 1.3 W m⁻² is the *instantaneous* convergence of upwelling longwave into the newly-added $\mathrm{CO_2}$, but the same added $\mathrm{CO_2}$ also makes the stratosphere a far more efficient *emitter*, and that term is the larger one because the layer is optically thin and radiates to space essentially unimpeded in both directions. The stratosphere is heated mainly by absorption of solar ultraviolet by ozone ([atmospheric-science 3.6](../../atmospheric-science/lessons/03-06-ozone-photochemistry-stratosphere.md)) and cooled by $\mathrm{CO_2}$ emission, so adding $\mathrm{CO_2}$ adds much more to the cooling term than to the heating term; the instantaneous absorption gain is real but is outweighed once the layer is allowed to equilibrate.

**P2** (a) $$\mathrm{ERF} = -0.4 + (-0.6) = -1.0\ \mathrm{W\,m^{-2}}.$$

(b) $$\Delta T = \frac{\mathrm{ERF}}{\lambda} = \frac{-1.0}{1.3} = -0.77\ \mathrm{K}.$$

(c) Using only IRF $= -0.4$ and demanding the same $-0.77$ K would require an efficacy

$$E = \frac{\mathrm{ERF}}{\mathrm{IRF}} = \frac{-1.0}{-0.4} = 2.5.$$

That is an **artefact of bookkeeping**, not physics. Nothing about this aerosol makes the climate system respond more strongly per watt; the cloud-brightening adjustment is simply a forcing term that the IRF convention failed to count, so it got smuggled into the response coefficient instead. Using ERF, the efficacy is 1 and the same $\lambda$ works for this agent as for $\mathrm{CO_2}$ — which is exactly the property ERF was designed to deliver.

**P3** (a) Zero, by construction: $\Delta T = \mathrm{ERF}/\lambda = 0$.

(b) *For "no effect":* global-mean surface temperature is unchanged, and since ERF is the correct predictor of that quantity, the agent is invisible in the metric that most of climate policy is written in.

*For "large effect":* the cancellation is between a top-of-atmosphere radiative gain and an atmospheric adjustment, and those act in different *places*. An agent that heats the mid-troposphere while brightening or burning off cloud beneath it changes the atmosphere's vertical heating profile, its stability and its cloud field — which changes precipitation, circulation and regional temperature even with the global mean pinned. Absorbing aerosol over South Asia is the real-world instance: its global-mean ERF is small, but it is implicated in monsoon weakening, because it cools the surface while heating the air above it, and the monsoon is driven by exactly that land–sea *contrast*. A second route: soot deposited on snow lowers the surface albedo, a purely regional effect with a strongly amplified Arctic response.

(c) ERF is a single global-mean scalar summarising a perturbation that is a full three-dimensional field. Any information about *where* the energy went — vertically or horizontally — is discarded in taking that mean. The framework $\Delta T = F/\lambda$ is a deliberate reduction of the climate system to one number in and one number out; it is remarkably successful for global-mean temperature and structurally blind to everything else. Recovering the regional picture is what Module 5 is for, and the pattern effect of [3.2](03-02-tcr-ecs-pattern-effect.md) is the point where this blindness bites even the global mean.

</details>

## Flashback

**From Lesson 1.2 (The gray atmosphere in radiative equilibrium):** Venus has an effective emission temperature of about 232 K (its clouds are highly reflective, albedo 0.77) and a surface temperature of 737 K. Treat its atmosphere as gray. (a) Compute its skin temperature. (b) Compute the surface optical depth $\tau_s$ required to produce the observed surface temperature. (c) Compare with Earth's $\tau_s \approx 0.85$ and say in one sentence what the comparison tells you about Venus's greenhouse.

<details>
<summary>Solution</summary>

(a) The skin temperature depends only on $T_e$:

$$T_{\text{skin}} = \frac{T_e}{2^{1/4}} = \frac{232}{1.1892} = 195\ \mathrm{K}.$$

(Venus's observed upper atmosphere near the 0.1 hPa level is around 200 K, so this is again close — the same success the gray model has on Earth's stratosphere, for the same reason.)

(b) From $T_g^4 = \tfrac12 T_e^4(2+\tfrac32\tau_s)$,

$$\tau_s = \frac{2}{3}\left(\frac{2T_g^4}{T_e^4}-2\right), \qquad \left(\frac{737}{232}\right)^4 = (3.1767)^4 = 101.8,$$

$$\tau_s = \frac{2}{3}\left(203.7 - 2\right) = 134.5.$$

(c) Venus's atmosphere is about **160 times** more optically thick in the infrared than Earth's — not 160 times more greenhouse gas *effect* in temperature terms, because the quarter-power compresses it, but 160 times more absorption lengths between the surface and space. That is what a 92-bar, 96 percent $\mathrm{CO_2}$ atmosphere buys.

*Check.* Note where the two planets' greenhouse effects come from: Venus's $T_e$ of 232 K is *colder* than Earth's 254.6 K, because its clouds reflect 77 percent of the sunlight. Venus is not hot because it is close to the Sun — it absorbs less sunlight per square metre than Earth does. It is hot entirely because of $\tau_s$. That is the cleanest demonstration available that the greenhouse effect, not insolation, is what sets a planet's surface temperature, and it is why comparative planetology is such a strong constraint on radiative-transfer physics (see [`planetary-science`](../../planetary-science/syllabus.md)).

</details>

## Connections

- **Backward:** the stratospheric cooling that makes SARF exceed the TOA IRF is the mechanism worked out in [1.2](01-02-gray-atmosphere-radiative-equilibrium.md); the 3.7 W m⁻² this lesson refines is [1.3](01-03-bands-saturation-logarithmic-forcing.md)'s band-shape estimate.
- **Forward:** [1.5](01-05-forcing-agents.md) applies these definitions to every agent and shows the aerosol case is where they bite hardest; the split between "adjustment" and "feedback" defined here is the exact boundary that [2.1](02-01-feedbacks-gain-factor.md) starts from, and the fixed-SST experiment reappears as the Gregory regression intercept in [2.5](02-05-diagnosing-feedbacks.md).
- **Sideways (systems and control):** $N = F - \lambda\Delta T$ is a first-order plant with proportional negative feedback, and the ERF-versus-IRF question is the standard modelling question of where to draw the boundary between the *input* and the *plant* — put a fast internal loop on the wrong side and your identified gain becomes input-dependent, which is exactly what a per-agent efficacy is. Compare [`control-systems` 1.1](../../control-systems/lessons/01-01-feedback-and-the-control-problem.md).
