# Evolution & Ecology · Lesson 4.2: Predation & the Lotka–Volterra oscillator

> ⏱ ~15 min · Module 4: Community & Ecosystem Ecology · Builds on: [4.1](04-01-competition-and-the-niche.md), [3.2](03-02-logistic-growth-carrying-capacity.md) · Unlocks: 4.3 (mutualism, succession & diversity)

## Why this matters

Competition produced equilibria. **Predation produces cycles**, and it does so for a reason that is entirely structural: predators respond to prey with a **delay**, and delayed negative feedback oscillates ([molecular-cell-biology 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md)). Once you see that, predator–prey cycles stop being a curiosity of the Canadian boreal forest and become an instance of something general.

The Lotka–Volterra predator–prey model is also the cleanest example in this course of a model that is **structurally wrong in an instructive way**. Its cycles are *neutrally* stable — they neither grow nor decay, and their amplitude is set entirely by the initial conditions. That is not how any real system behaves, and fixing it produces two of the most important results in ecology: the paradox of enrichment, and the reason a predator can *increase* the diversity of its community.

## The idea

**The original model, in its starkest form.** Prey $N$ grow exponentially in the absence of predators $P$; predators starve in the absence of prey; and they meet at a rate proportional to the product of their densities:

$$\frac{dN}{dt} = rN - aNP, \qquad \frac{dP}{dt} = \varepsilon aNP - mP$$

| Symbol | Meaning |
|---|---|
| $r$ | prey intrinsic growth rate |
| $a$ | attack rate — captures per predator per prey per unit time |
| $\varepsilon$ | conversion efficiency — prey biomass into predator biomass |
| $m$ | predator mortality rate |

**The $NP$ term is the mass-action assumption:** encounters are proportional to the product of densities, exactly as in a chemical reaction ([reaction-engineering 1.1](../../reaction-engineering/lessons/01-01-rate-of-reaction-rate-law.md)) or an epidemic model. It is the strongest assumption in the model and the first one to relax.

**Why it cycles.** Trace the loop:

$$\text{prey abundant} \to \text{predators increase} \to \text{prey decline} \to \text{predators starve} \to \text{prey recover}$$

Each arrow takes time. **The predator's numerical response requires a generation**, so it peaks *after* the prey peak rather than with it. That lag is the whole mechanism, and it produces a phase shift of a quarter cycle.

**And here is the model's characteristic failure: the cycles are neutrally stable.** The trajectories are closed loops in the phase plane, and *which* loop you are on depends only on where you started. Perturb the system and it moves to a different loop and stays there — it neither returns nor diverges.

$$\textbf{A neutrally stable cycle is structurally unstable: any modification to the model destroys it.}$$

Real systems are perturbed constantly, so a neutrally stable model cannot describe one. **The right conclusion is not that the model is useless but that its cycles are not the explanation of real cycles** — and the modifications that make it realistic are where the biology is.

**Functional responses: how consumption depends on prey density.**

| Type | Form | Behaviour | Effect on stability |
|---|---|---|---|
| **I** | linear, $aN$ | consumption rises without limit | the original model |
| **II** | saturating | **handling time** limits intake at high $N$ | **destabilizing** — predators are least effective when prey are common |
| **III** | sigmoid | low attack at low $N$ (prey refuge, search image, prey switching) | **stabilizing at low density** |

**Type II is the commonest and it is destabilizing**, because a saturated predator cannot respond to further prey increases — so prey escape control at exactly the moment control is most needed.

**Type III is the interesting one.** The low-density inefficiency can come from a **refuge** (the last few prey hide), from **prey switching** (the predator turns to an alternative when this prey gets rare), or from a **search image** that takes time to form. All three make the predator a *weaker* consumer when prey are rare, which prevents extinction and stabilizes.

**Keystone predation.** A predator that preferentially consumes the **competitively dominant** prey prevents competitive exclusion ([4.1](04-01-competition-and-the-niche.md)) and thereby **raises** diversity. Paine's removal of the sea star *Pisaster* from a rocky shore caused the mussel *Mytilus* to overgrow everything, and species richness fell from 15 to 8.

$$\textbf{The predator was not reducing diversity by eating things; it was maintaining diversity by eating the winner.}$$

## The formal version

**Equilibria of the original model.** Set both derivatives to zero:

$$rN - aNP = 0 \;\Longrightarrow\; \hat P = \frac{r}{a}, \qquad \varepsilon aNP - mP = 0 \;\Longrightarrow\; \hat N = \frac{m}{\varepsilon a}$$

**The result is startlingly counterintuitive and worth stating carefully:**

$$\boxed{\;\hat N \text{ depends only on } \textbf{predator} \text{ parameters}; \quad \hat P \text{ depends only on } \textbf{prey} \text{ parameters}.\;}$$

*In words: improving the prey's growth rate $r$ does not increase the prey — it increases the **predators**.* Any extra prey production is converted into predators, which eat it back down. **This is the general logic of top-down control**, and it is why fertilizing a system with a predator in it often produces more predator rather than more producer.

**The isoclines are straight lines**, one horizontal and one vertical, meeting at right angles at the equilibrium. Trajectories circle it. Linearizing gives purely imaginary eigenvalues, $\lambda = \pm i\sqrt{rm}$ — a **centre**, and the cycle period is

$$T = \frac{2\pi}{\sqrt{rm}}.$$

**A centre is the marginal case between a stable and an unstable spiral** ([dynamical-systems 1.3](../../dynamical-systems/lessons/01-03-trace-determinant-classification.md)), which is precisely why it is structurally unstable: any perturbation to the model's form tips it one way or the other.

**Add prey density dependence and the centre becomes a spiral.** Replace exponential prey growth with logistic ([3.2](03-02-logistic-growth-carrying-capacity.md)):

$$\frac{dN}{dt} = rN\left(1-\frac{N}{K}\right) - aNP$$

The prey isocline is no longer horizontal — it now slopes downward:

$$P = \frac{r}{a}\left(1 - \frac{N}{K}\right)$$

and the equilibrium becomes a **stable spiral**: damped oscillations converging on a steady state. **Self-limitation in the prey stabilizes the interaction**, which is the same conclusion as [4.1](04-01-competition-and-the-niche.md)'s coexistence condition in a different guise.

**Add a Type II functional response and it destabilizes again.** With handling time $h$:

$$\text{consumption per predator} = \frac{aN}{1+ahN}$$

the prey isocline becomes **hump-shaped**. Now the stability depends on **where the predator isocline crosses it**:

$$\textbf{crossing to the RIGHT of the hump} \Rightarrow \textbf{stable}; \qquad \textbf{crossing to the LEFT} \Rightarrow \textbf{unstable limit cycle}.$$

**The paradox of enrichment.** Raising $K$ — enriching the system with nutrients — stretches the prey isocline to the right and **moves the hump to the right**, so a fixed predator isocline that used to cross on the stable side now crosses on the unstable side.

$$\textbf{Enrichment destabilizes.} \quad \text{More food} \Rightarrow \text{larger oscillations} \Rightarrow \text{extinction at the troughs.}$$

Rosenzweig's 1971 result, and it is genuinely counterintuitive: **adding resources to a system can drive its species extinct.** It has been demonstrated in laboratory chemostats, and it is a live concern in eutrophied lakes.

**Ratio-dependent and prey-dependent predation.** The mass-action term assumes consumption depends on prey density alone. If predators interfere with each other, consumption depends on the **ratio** $N/P$ instead. The two formulations make sharply different predictions under enrichment — prey-dependent models predict all extra production goes to predators, ratio-dependent models predict both trophic levels increase — and which is right remains a real argument ([4.4](04-04-ecosystems-energy-nutrients.md)).

## Picture

![Left: the phase plane for the original Lotka-Volterra model, with a vertical prey isocline and a horizontal predator isocline crossing at right angles, and several nested closed orbits circling the equilibrium, annotated as neutrally stable so that the amplitude depends only on the starting point. Centre: time series of predator and prey showing the predator peak lagging the prey peak by a quarter cycle. Right: the prey isocline made hump-shaped by a Type II functional response, drawn twice, once with the predator isocline crossing to the right of the hump giving a stable spiral and once with a higher K stretching the hump rightward so the crossing falls on the left, giving a growing limit cycle, labelled the paradox of enrichment.](assets/04-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — equilibria, period, and the counterintuitive consequence).** A predator–prey system has $r = 0.8\ \mathrm{yr}^{-1}$, $a = 0.002$ per predator per year, $\varepsilon = 0.1$, $m = 0.4\ \mathrm{yr}^{-1}$. (a) Compute both equilibrium densities. (b) Compute the cycle period. (c) Habitat improvement raises the prey growth rate to $r = 1.2$. Predict the new equilibria and comment.

(a) $$\hat N = \frac{m}{\varepsilon a} = \frac{0.4}{0.1 \times 0.002} = \frac{0.4}{2\times10^{-4}} = \mathbf{2000\ \text{prey}}.$$

$$\hat P = \frac{r}{a} = \frac{0.8}{0.002} = \mathbf{400\ \text{predators}}.$$

(b) $$T = \frac{2\pi}{\sqrt{rm}} = \frac{2\pi}{\sqrt{0.8 \times 0.4}} = \frac{6.2832}{\sqrt{0.32}} = \frac{6.2832}{0.5657} = \mathbf{11.1\ \text{years}}.$$

(c) With $r = 1.2$:

$$\hat N = \frac{m}{\varepsilon a} = \mathbf{2000\ \text{prey — unchanged}}.$$

$$\hat P = \frac{r}{a} = \frac{1.2}{0.002} = \mathbf{600\ \text{predators}}.$$

**Improving the prey's growth rate by 50 percent left the prey population exactly where it was and increased the predators by 50 percent.**

This is the top-down control result, and it is worth dwelling on because it inverts the intuitive picture. The prey equilibrium is set entirely by what the *predator* needs: $\hat N = m/\varepsilon a$ is the prey density at which predator births exactly balance predator deaths. Below it predators decline, above it they increase — **so the predator population acts as a thermostat holding the prey at that value**, and any extra prey productivity is simply converted into more predators.

**The practical reading:** habitat improvement aimed at a prey species, in a system with an effective predator, may produce no more prey. This is a documented frustration in game and fisheries management, and it is why predator control and habitat improvement are often pursued together.

*(The period also changes: $T = 2\pi/\sqrt{1.2 \times 0.4} = 9.1$ years — enrichment speeds the cycle as well as amplifying it.)*

**Example 2 (why you'd care — the paradox of enrichment, and a lake).** A shallow lake contains algae ($K = 100$ units of biomass) and grazing zooplankton, with a Type II functional response. The system currently shows damped oscillations converging on a steady state. Agricultural runoff raises nutrient loading, tripling the algal carrying capacity to $K = 300$. (a) Predict the qualitative change. (b) Explain the mechanism in terms of the isoclines. (c) What are the practical consequences, and what would you monitor?

(a) **Prediction: the system destabilizes.** The damped oscillations become **sustained and growing** — a limit cycle with large amplitude — and the troughs become deep enough that either the zooplankton or the algae may be driven locally extinct by demographic or environmental stochasticity.

**Enrichment makes the system less stable, not more productive in any useful sense.**

(b) **Mechanism.** With a Type II functional response the prey (algal) isocline is **hump-shaped**: it rises at low algal density and falls at high density, because a saturated grazer cannot keep up.

The predator (zooplankton) isocline is a **vertical line** at the algal density where zooplankton births balance deaths — and crucially, **it does not move when $K$ changes**, because it depends only on zooplankton parameters ($\hat N = m/\varepsilon a$, as in Example 1).

Raising $K$ **stretches the algal isocline to the right and moves its hump to the right**. So:

$$\text{before: predator isocline crossed to the } \textbf{right} \text{ of the hump} \Rightarrow \text{stable spiral}$$
$$\text{after: the hump has moved past the crossing, so the isocline now crosses to the } \textbf{left} \Rightarrow \text{unstable, limit cycle}$$

**The stability is determined by the slope of the prey isocline at the crossing point.** A downward-sloping crossing (right of the hump) means increasing prey density reduces the prey growth rate — stabilizing negative feedback. An upward-sloping crossing (left of the hump) means the opposite, and the feedback becomes positive.

$$\textbf{Nothing about the zooplankton changed. The enrichment moved the hump under a fixed crossing point.}$$

(c) **Practical consequences:**

1. **Increased extinction risk despite increased productivity.** Larger oscillations mean deeper troughs, and a population at a deep trough is vulnerable to a bad year, to an Allee effect ([3.2](03-02-logistic-growth-carrying-capacity.md)), and to demographic stochasticity. **The lake supports more biomass on average and is more likely to lose species.**

2. **Algal blooms.** The high phase of the cycle is a bloom — and with grazers crashed at the trough, the next bloom is unchecked. This is the boom-and-bust dynamic characteristic of eutrophied lakes, and it is distinct from the simple "more nutrients, more algae" story.

3. **Alternative stable states.** Real shallow lakes have a second mechanism: a clear-water state dominated by macrophytes and a turbid state dominated by algae, with hysteresis between them ([4.3](04-03-mutualism-succession-diversity.md)). Enrichment can flip the lake into the turbid state, from which it does not recover simply by reducing nutrients back to the previous level.

**What to monitor:**

- **Variance, not just the mean.** The signature of approaching instability is **rising variance and rising autocorrelation** in the time series — "critical slowing down," a general early-warning signal for an approaching bifurcation. Monitoring only average chlorophyll misses it entirely.
- **The amplitude and period of the oscillation**, which should both grow.
- **Grazer minimum densities**, since the trough is where extinction happens, not the peak.

**The general modelling lesson**, and it recurs: **enrichment and stability are not the same axis, and interventions that raise productivity can reduce persistence.** This applies well beyond lakes — it is why fertilizing a pasture can destabilize a grazing system, and why the intuition that "more resources is better" needs checking against the dynamics rather than the equilibrium.

## Watch out

- **You might take Lotka–Volterra's cycles as an explanation of real cycles.** They are **neutrally stable**, so their amplitude is set by initial conditions and any perturbation moves the system to a different orbit permanently. Real cycles require a mechanism that sets the amplitude.
- **You might expect helping the prey to increase the prey.** At equilibrium, $\hat N$ depends only on **predator** parameters. Extra prey productivity becomes extra predators.
- **You might assume enrichment stabilizes.** With a Type II functional response, raising $K$ moves the hump of the prey isocline rightward and **destabilizes** — the paradox of enrichment.
- **You might treat a Type II response as the safe default.** It is the commonest *and* it is destabilizing, precisely because a saturated predator cannot respond when prey are abundant.
- **You might think a predator reduces diversity.** A **keystone predator** that eats the competitive dominant *increases* diversity by preventing exclusion.
- **You might monitor only the mean.** Approaching instability shows up as **rising variance and autocorrelation** long before the mean moves.

## One-liner

> Predators respond to prey with a lag, and delayed negative feedback oscillates — but Lotka–Volterra's cycles are neutrally stable and therefore not an explanation of anything, and the modifications that fix it produce the two results worth knowing: prey density is set by predator parameters, and enrichment destabilizes.

## Problems

**P1 (🟢)** A system has $r = 0.5$, $a = 0.01$, $\varepsilon = 0.2$, $m = 0.3$. (a) Compute $\hat N$ and $\hat P$. (b) Compute the cycle period. (c) A pesticide raises predator mortality to $m = 0.6$. Recompute both equilibria and comment.

**P2 (🟡)** A predator has attack rate $a = 0.05$ and handling time $h = 0.5$ hours per prey. (a) Write the Type II functional response and compute consumption per predator per hour at prey densities of 5, 20 and 100. (b) What is the maximum possible consumption rate, and why? (c) Explain in one sentence why this response destabilizes the interaction.

**P3 (🔴, bridges to 4.3 and to management)** A rocky shore has a sea star predator, a competitively dominant mussel, and twelve other sessile species. Removing the sea star reduces richness from 15 species to 8 within two years. (a) Name the phenomenon and explain the mechanism using [4.1](04-01-competition-and-the-niche.md). (b) Predict what happens to *total* biomass and to *evenness*. (c) A manager proposes restoring diversity by removing mussels directly rather than protecting sea stars. Evaluate this, and identify one way it could fail that protecting the predator would not.

<details>
<summary>Solutions</summary>

**P1 (a)** $$\hat N = \frac{m}{\varepsilon a} = \frac{0.3}{0.2 \times 0.01} = \frac{0.3}{0.002} = \mathbf{150\ \text{prey}}.$$

$$\hat P = \frac{r}{a} = \frac{0.5}{0.01} = \mathbf{50\ \text{predators}}.$$

**(b)** $$T = \frac{2\pi}{\sqrt{rm}} = \frac{6.2832}{\sqrt{0.5 \times 0.3}} = \frac{6.2832}{\sqrt{0.15}} = \frac{6.2832}{0.3873} = \mathbf{16.2\ \text{time units}}.$$

**(c)** With $m = 0.6$:

$$\hat N = \frac{0.6}{0.002} = \mathbf{300\ \text{prey}}, \qquad \hat P = \frac{0.5}{0.01} = \mathbf{50\ \text{predators — unchanged}}.$$

**Killing predators doubled the prey and left the predator population exactly where it was.**

This is the mirror image of Example 1 and equally counterintuitive. The predator equilibrium depends only on **prey** parameters ($\hat P = r/a$), so raising predator mortality does not reduce the standing predator population — it raises the prey density needed to sustain that population.

**The practical warning is real.** A pesticide that kills both a pest and its natural enemy can **increase** the pest's equilibrium density while leaving the enemy's unchanged — one of the standard mechanisms of **pest resurgence** after broad-spectrum insecticide use, and a well-documented failure mode in agriculture. (The period also lengthens: $T = 6.2832/\sqrt{0.3} = 11.5$, so the cycle speeds up.)

**P2 (a)** Type II (Holling disc equation):

$$f(N) = \frac{aN}{1 + ahN} = \frac{0.05N}{1 + 0.025N}$$

| $N$ | $f(N)$ prey/hour |
|---|---|
| 5 | $\dfrac{0.25}{1.125} = \mathbf{0.222}$ |
| 20 | $\dfrac{1.0}{1.5} = \mathbf{0.667}$ |
| 100 | $\dfrac{5.0}{3.5} = \mathbf{1.429}$ |

Note the saturation: a 20-fold increase in prey (5 → 100) produces only a 6.4-fold increase in consumption.

**(b)** $$f_{\max} = \lim_{N\to\infty}\frac{aN}{1+ahN} = \frac{1}{h} = \frac{1}{0.5} = \mathbf{2\ \text{prey per hour}}.$$

**Because handling time is the binding constraint.** Each prey takes 0.5 hours to subdue, consume and digest, so even with prey infinitely abundant and search time zero, the predator cannot process more than two per hour. **The maximum is $1/h$ and depends on nothing else** — not on the attack rate, not on prey density.

**(c)** It destabilizes because **the proportion of prey consumed falls as prey become abundant** — a saturated predator exerts progressively weaker per-capita control exactly when the prey population is growing fastest, so prey escape regulation at high density and overshoot.

*(Formally: the per-capita mortality imposed on prey is $f(N)/N = a/(1+ahN)$, which decreases in $N$ — inverse density dependence, which is the definition of destabilizing.)*

**P3 (a)** **Keystone predation** (Paine, 1966 — this is the original experiment, on *Pisaster ochraceus* and *Mytilus californianus*).

**Mechanism, via [4.1](04-01-competition-and-the-niche.md).** The mussel is the superior competitor for primary space on the rock: it grows over and smothers barnacles, algae and everything else. In [4.1](04-01-competition-and-the-niche.md)'s terms, its competition coefficients against the others exceed the coexistence conditions, so left alone it drives them to competitive exclusion.

The sea star preferentially eats mussels. **Predation acts as a density-dependent mortality falling disproportionately on the dominant competitor**, which is exactly what the coexistence conditions require: it makes the mussel limit itself (via its own predator) more than it limits the others.

$$\textbf{The predator supplies the self-limitation the dominant competitor lacked.}$$

Remove the sea star and the mussel's competitive superiority is expressed, exclusion proceeds, and richness collapses. **Two years is fast because the mussel is a rapid colonizer of primary space.**

**(b)**

*Total biomass:* **increases.** Mussels are large and pack densely, and removing the predator both stops mussel mortality and lets mussels occupy space formerly held by smaller organisms. **A monoculture of the dominant competitor is usually the highest-biomass configuration** — which is why biomass and diversity can move in opposite directions.

*Evenness:* **collapses.** The community goes from 15 species with some distribution of abundances to 8 species dominated overwhelmingly by one. Both richness (15 → 8) and evenness fall, so any diversity index that combines them — Shannon, Simpson ([4.3](04-03-mutualism-succession-diversity.md)) — falls sharply, and by more than the richness change alone suggests.

**(c) Evaluating direct mussel removal.**

**In principle it can work**, because the mechanism is the same: what maintains diversity is *mortality falling on the dominant competitor*, and it does not intrinsically matter whether a sea star or a person imposes it. Manual removal of a dominant is a standard restoration technique.

**But it is inferior in several respects, and one of them is decisive:**

1. **Predation is density-dependent; manual removal is not.** A sea star's consumption rises where mussels are dense and falls where they are sparse — automatically, continuously, and everywhere on the shore. A removal programme applies effort where and when people go, which is neither. **The feedback that makes the mechanism work is precisely what manual removal lacks.**

2. **It must be sustained forever.** The sea star is self-maintaining; the programme requires permanent funding. Mussel recruitment is continuous, so a lapse of a few years restores the monoculture.

3. **It is spatially incomplete.** Sea stars reach the whole shore including crevices and the low intertidal at spring tides; people do not.

4. **The decisive failure mode: it does not restore the sea star's other functions.** *Pisaster* also consumes other prey, is itself prey and habitat, and its removal alters the shore's dynamics in ways that mussel removal does not replicate. **Removing a species and substituting one of its functions is not the same as keeping the species.**

**And a specific way it could fail that predator protection would not:** removing mussels creates **bare primary space**, and what colonizes bare space depends on what larvae are in the water at that moment. Mussel larvae are abundant and fast-settling, so cleared patches are frequently **re-colonized by mussels** rather than by the diverse assemblage — the manager creates a mussel nursery. A sea star, by contrast, eats mussels *preferentially at all sizes and continuously*, so recruits are removed as they arrive rather than after they have won the space.

$$\textbf{Continuous selective mortality and episodic clearance are not the same intervention, even when they remove the same species.}$$

**The general principle for restoration: restore the process, not the pattern.** A community's composition is an outcome of ongoing interactions, and manipulating the outcome without restoring the process gives a result that must be maintained indefinitely and that fails in ways the process would not.

</details>

## Flashback

**From Lesson 4.1 (competition and coexistence):** Two species have $K_1 = 1200$, $K_2 = 900$, $\alpha = 0.7$, $\beta = 0.5$. (a) Test both coexistence conditions and compute $\alpha\beta$. (b) Compute the equilibrium densities. (c) A predator is introduced that consumes only species 1, effectively reducing $K_1$ to 700. Recompute and state what the predator has done to the community.

<details>
<summary>Solution</summary>

**(a)** $$\alpha = 0.7 \quad\text{vs}\quad \frac{K_1}{K_2} = \frac{1200}{900} = 1.333 \;\Longrightarrow\; 0.7 < 1.333 \ \checkmark$$

$$\beta = 0.5 \quad\text{vs}\quad \frac{K_2}{K_1} = \frac{900}{1200} = 0.75 \;\Longrightarrow\; 0.5 < 0.75 \ \checkmark$$

$$\alpha\beta = 0.35 < 1 \ \checkmark \qquad \textbf{Stable coexistence.}$$

**(b)** $$\hat N_1 = \frac{1200 - 0.7(900)}{1-0.35} = \frac{1200-630}{0.65} = \frac{570}{0.65} = \mathbf{877}.$$

$$\hat N_2 = \frac{900 - 0.5(1200)}{0.65} = \frac{900-600}{0.65} = \frac{300}{0.65} = \mathbf{462}.$$

**(c)** With $K_1 = 700$:

$$\alpha = 0.7 \quad\text{vs}\quad \frac{700}{900} = 0.778 \;\Longrightarrow\; 0.7 < 0.778 \ \checkmark \ \text{(narrowly)}$$

$$\beta = 0.5 \quad\text{vs}\quad \frac{900}{700} = 1.286 \;\Longrightarrow\; 0.5 < 1.286 \ \checkmark \ \text{(comfortably)}$$

Still coexistence, and now more robustly for species 2.

$$\hat N_1 = \frac{700 - 630}{0.65} = \frac{70}{0.65} = \mathbf{108}, \qquad \hat N_2 = \frac{900 - 350}{0.65} = \frac{550}{0.65} = \mathbf{846}.$$

**What the predator did.** Species 1 fell from 877 to 108 — an 88 percent reduction. Species 2 **rose** from 462 to 846, nearly doubling, despite the predator never touching it.

$$\textbf{This is keystone predation, and this is apparent mutualism.}$$

Two things worth naming:

1. **Species 2 benefited from a predator that does not eat it**, purely by having its competitor suppressed. This indirect positive effect between two species that never interact directly is called **apparent mutualism** (or, more precisely here, competitive release), and indirect effects of this kind are routinely as large as direct ones in real communities.

2. **Total community abundance rose** from 1339 to 954... **it actually fell**, from 1339 to 954. This is worth checking rather than assuming: the predator reduced total abundance while shifting its composition dramatically. **Diversity and abundance are not the same currency**, and an intervention can raise one and lower the other.

Note also that species 1 is now close to elimination — a slightly stronger predator ($K_1 < 630$) would push $\alpha$ above $K_1/K_2$ and exclude it entirely. **A keystone predator maintains diversity only within a window of predation intensity**, which is the same "intermediate" logic as the disturbance hypothesis of [4.3](04-03-mutualism-succession-diversity.md).

</details>

## Connections

- **Backward:** [4.1](04-01-competition-and-the-niche.md)'s phase-plane and isocline machinery transfers directly; keystone predation works by supplying the self-limitation the coexistence conditions require.
- **Forward:** [4.3](04-03-mutualism-succession-diversity.md) generalizes this — disturbance and predation both maintain diversity by preventing exclusion, and the intermediate-disturbance hypothesis is the same window as the keystone one.
- **Sideways:** the centre and the transition to a stable spiral or a limit cycle are [dynamical-systems 1.3](../../dynamical-systems/lessons/01-03-trace-determinant-classification.md) and [2.3](../../dynamical-systems/lessons/02-03-limit-cycles.md); delayed negative feedback producing oscillation is [molecular-cell-biology 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md); the mass-action $NP$ term and the saturating Type II response are the same forms as [reaction-engineering 1.1](../../reaction-engineering/lessons/01-01-rate-of-reaction-rate-law.md) and Michaelis–Menten kinetics ([biochemistry 2.2](../../biochemistry/lessons/02-02-michaelis-menten-kinetics.md)).
