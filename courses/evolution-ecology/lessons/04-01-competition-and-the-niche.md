# Evolution & Ecology · Lesson 4.1: Competition & the niche

> ⏱ ~15 min · Module 4: Community & Ecosystem Ecology · Builds on: [3.2](03-02-logistic-growth-carrying-capacity.md), [3.3](03-03-life-histories-tradeoffs.md) · Unlocks: 4.2 (predation & the Lotka–Volterra oscillator)

## Why this matters

Every population so far has been alone. Module 4 puts species together, and the first thing that happens when two species need the same thing is that each makes life harder for the other.

The model is one line longer than the logistic and it produces a genuinely non-obvious result: **coexistence requires each species to limit itself more than it limits the other.** That sentence is the whole of competition theory, and it has an immediate consequence — two species that use resources identically cannot coexist, so **every coexisting pair must differ**, and the differences are what an ecological community is made of.

The result also has a sharp edge that made it one of ecology's most contested ideas. If coexistence requires difference, then observed differences between coexisting species can be read as *evidence of past competition* — and that inference turns out to be much harder to justify than it looks.

## The idea

**Add a competitor to the logistic.** In [3.2](03-02-logistic-growth-carrying-capacity.md), growth slowed as $N$ approached $K$. Now let a second species also take up space:

$$\frac{dN_1}{dt} = r_1N_1\left(\frac{K_1 - N_1 - \alpha N_2}{K_1}\right), \qquad \frac{dN_2}{dt} = r_2N_2\left(\frac{K_2 - N_2 - \beta N_1}{K_2}\right)$$

**$\alpha$ is the competition coefficient** — the effect of one individual of species 2 on species 1, measured in units of species-1 individuals. $\alpha = 0.5$ means one species-2 individual crowds species 1 as much as half a species-1 individual would.

*In words: each species has a logistic ceiling, and the other species uses up part of it.*

**The niche.** Hutchinson's definition: the **fundamental niche** is the $n$-dimensional hypervolume of conditions and resources in which a species can persist, given the physical environment alone. The **realized niche** is the part it actually occupies once competitors, predators and parasites are accounted for.

$$\text{realized} \subseteq \text{fundamental}, \ \text{almost always strictly.}$$

**Connell's barnacles are the classic demonstration.** *Chthamalus* occurs only high on the shore; *Balanus* occurs lower. Remove *Balanus* experimentally and *Chthamalus* spreads downward — its fundamental niche included the lower shore all along, and competition was excluding it. Remove *Chthamalus* and *Balanus* does **not** spread upward: it genuinely cannot tolerate the desiccation.

**The asymmetry is the point.** *Chthamalus*'s upper limit is set by physiology; its lower limit by competition. **You cannot tell which from observation alone** — only the removal experiment distinguishes them, which is why field experiments rather than surveys became the standard method.

**Competitive exclusion.** Gause's principle: **two species with identical requirements cannot coexist indefinitely** — the better competitor eliminates the other. Stated as a theorem: at equilibrium, the number of coexisting species cannot exceed the number of limiting resources.

**And the interesting question is why the world is not simpler than it is.** Hutchinson's "paradox of the plankton": dozens of phytoplankton species coexist in a well-mixed water column on a handful of limiting nutrients. Several resolutions, all real:

- **Non-equilibrium dynamics.** Conditions change faster than exclusion completes.
- **Spatial heterogeneity.** The environment is not well-mixed at the scale that matters to a cell.
- **Predation.** A predator that preferentially eats whichever prey is commonest prevents any one from winning ([4.2](04-02-predation-lotka-volterra.md)).
- **Trade-offs.** No species is best at everything — being best at low nutrients costs you at high nutrients.

**Resource partitioning and character displacement.** Coexisting species often differ in exactly the dimension that matters — MacArthur's warblers feeding in different parts of the same spruce, Darwin's finches differing in beak depth. **Character displacement** is the pattern where two species differ *more* in sympatry than in allopatry.

**But this is where the field got into trouble.** Reading observed difference as evidence of past competition — "the ghost of competition past" — is unfalsifiable as usually deployed, since *any* pattern of difference can be explained that way. **The correct approach is a null model**: is the observed spacing of traits more regular than random assembly would produce? That question is answerable and the answer is often no.

## The formal version

**Zero-growth isoclines.** Species 1 stops growing where $dN_1/dt = 0$, i.e.

$$N_1 + \alpha N_2 = K_1 \quad\Longrightarrow\quad N_2 = \frac{K_1 - N_1}{\alpha}$$

a straight line with intercepts at $N_1 = K_1$ (on its own axis) and $N_2 = K_1/\alpha$. Similarly for species 2, intercepts $N_2 = K_2$ and $N_1 = K_2/\beta$.

**On the $N_1$–$N_2$ phase plane, each species grows below its own isocline and declines above it.** Four configurations follow, from which isocline lies outside the other:

| Configuration | Outcome |
|---|---|
| Isocline 1 entirely outside isocline 2 | **species 1 always wins** |
| Isocline 2 entirely outside isocline 1 | **species 2 always wins** |
| Isoclines cross, species-1 isocline outside on its own axis | **stable coexistence** |
| Isoclines cross the other way | **unstable — founder controlled** (priority effect) |

**The coexistence conditions.** Reading the crossing condition off the intercepts:

$$\boxed{\;\text{stable coexistence} \iff \alpha < \frac{K_1}{K_2} \quad\text{and}\quad \beta < \frac{K_2}{K_1}\;}$$

Multiply the two together — the $K$'s cancel:

$$\boxed{\;\alpha\beta < 1\;}$$

*In words: the product of the two interspecific competition coefficients must be less than the product of the intraspecific ones (both scaled to 1).* Which is to say:

$$\textbf{Each species must limit itself more than it limits the other.}$$

**That is the whole of coexistence theory in one sentence**, and it survives into the modern framework almost unchanged.

**The founder-controlled case is the mirror image.** If $\alpha > K_1/K_2$ and $\beta > K_2/K_1$ — so $\alpha\beta > 1$, each limiting the other more than itself — the interior equilibrium is **unstable** and whichever species arrives first excludes the other. This is a **priority effect**, and it means the community's composition depends on history rather than on the species' properties.

**Equilibrium densities.** Solving the two isocline equations simultaneously:

$$\hat N_1 = \frac{K_1 - \alpha K_2}{1 - \alpha\beta}, \qquad \hat N_2 = \frac{K_2 - \beta K_1}{1 - \alpha\beta}$$

Note that both are positive only when the coexistence conditions hold — the algebra and the geometry agree.

**The modern reframing, worth knowing.** Chesson's coexistence theory splits the problem into two quantities:

- **Niche differences** — how much each species limits itself more than the other. These *stabilize* coexistence.
- **Fitness differences** — how much better one competitor is overall. These *destabilize* it.

$$\text{coexistence} \iff \text{niche difference} > \text{fitness difference}$$

*In words: two species can coexist if they differ enough in what limits them to overcome any difference in overall competitive ability.* This is $\alpha\beta < 1$ generalized, and it makes the trade-off explicit: **similar species need only small niche differences; very unequal competitors need large ones.**

**Testing for coexistence: the invasion criterion.** The operational test is whether each species can **increase from rare** when the other is at its equilibrium:

$$\left.\frac{1}{N_1}\frac{dN_1}{dt}\right|_{N_1 \to 0,\ N_2 = K_2} > 0 \quad\text{and vice versa.}$$

For species 1: $r_1(K_1 - \alpha K_2)/K_1 > 0$, i.e. $K_1 > \alpha K_2$ — the same condition as before. **Mutual invasibility is the definition of stable coexistence**, and it is what field and laboratory tests actually measure.

## Picture

![Four phase-plane panels with species-1 density on the horizontal axis and species-2 on the vertical, each showing the two zero-growth isoclines as straight lines and trajectory arrows. In the first, isocline 1 lies entirely outside isocline 2 and all trajectories go to species 1 winning. In the second the reverse. In the third the isoclines cross with each species' isocline outside on its own axis, and all trajectories converge on the interior crossing point, labelled stable coexistence. In the fourth the isoclines cross the other way, the interior point is a saddle, and trajectories diverge to one axis or the other depending on starting conditions, labelled founder controlled.](assets/04-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — determine the outcome and the equilibrium).** Two species have $K_1 = 500$, $K_2 = 400$, $\alpha = 0.6$ (effect of 2 on 1), $\beta = 0.9$ (effect of 1 on 2). (a) Test both coexistence conditions. (b) Compute the equilibrium densities. (c) Verify with the invasion criterion.

(a) Conditions are $\alpha < K_1/K_2$ and $\beta < K_2/K_1$:

$$\alpha = 0.6 \quad\text{vs}\quad \frac{K_1}{K_2} = \frac{500}{400} = 1.25 \quad\Longrightarrow\quad 0.6 < 1.25 \ \checkmark$$

$$\beta = 0.9 \quad\text{vs}\quad \frac{K_2}{K_1} = \frac{400}{500} = 0.80 \quad\Longrightarrow\quad 0.9 > 0.80 \ \boldsymbol{\times}$$

**The second condition fails.** Check the product: $\alpha\beta = 0.6 \times 0.9 = 0.54 < 1$ — but $\alpha\beta < 1$ is *necessary and not sufficient*; both individual conditions must hold.

**Species 1 wins and excludes species 2.**

(b) Compute the "equilibrium" anyway, to see what the failure looks like algebraically:

$$\hat N_1 = \frac{K_1 - \alpha K_2}{1-\alpha\beta} = \frac{500 - 0.6(400)}{1 - 0.54} = \frac{500 - 240}{0.46} = \frac{260}{0.46} = 565 .$$

$$\hat N_2 = \frac{K_2 - \beta K_1}{1-\alpha\beta} = \frac{400 - 0.9(500)}{0.46} = \frac{400 - 450}{0.46} = \frac{-50}{0.46} = \mathbf{-109}.$$

**A negative density**, which is the algebraic signature of no biologically meaningful interior equilibrium. Species 2 is excluded, and species 1 settles at its own carrying capacity, $N_1 = K_1 = 500$.

(c) **Invasion criterion.** Can each species increase from rare against the other at equilibrium?

*Species 1 invading a species-2 population at $N_2 = K_2 = 400$:*

$$\frac{1}{N_1}\frac{dN_1}{dt} = r_1\frac{K_1 - \alpha K_2}{K_1} = r_1\frac{500 - 240}{500} = 0.52\,r_1 > 0 \quad \checkmark \ \textbf{can invade}$$

*Species 2 invading a species-1 population at $N_1 = K_1 = 500$:*

$$\frac{1}{N_2}\frac{dN_2}{dt} = r_2\frac{K_2 - \beta K_1}{K_2} = r_2\frac{400 - 450}{400} = -0.125\,r_2 < 0 \quad \boldsymbol{\times} \ \textbf{cannot invade}$$

**Only one species can invade the other, so coexistence fails and species 1 wins** — consistent with (a) and (b), by a third route.

**The invasion criterion is the most useful of the three tests** because it is directly measurable: introduce a few individuals of one species into an established population of the other and see whether they increase.

**Example 2 (why you'd care — Connell's barnacles, and why surveys cannot answer the question).** On a rocky shore, *Chthamalus* occurs from mean high water down to mid-tide; *Balanus* from mid-tide down to low water. The boundary is sharp. (a) Write the two hypotheses a survey cannot distinguish. (b) Describe the experiment. (c) Explain what was found and what general principle it established.

(a) The two hypotheses, both fully consistent with the observed zonation:

**H1 (physiological zonation).** Each species occupies the tidal range it is physiologically adapted to. *Chthamalus* tolerates desiccation and is restricted to the high shore by something else — perhaps competition, perhaps predation, perhaps larval settlement. *Balanus* is confined to the low shore because it dries out.

**H2 (competitive exclusion).** Both species could live over a wider range, and each is excluded from part of it by the other.

**A survey cannot distinguish them**, because both predict the same distribution. **This is the central methodological problem of community ecology**: the pattern you observe is a *realized* niche, and the fundamental niche is invisible.

(b) **The experiment: reciprocal removal.**

Establish plots on the shore spanning the boundary. In each of four treatments:

| Treatment | Manipulation |
|---|---|
| Control | leave both species |
| Remove *Balanus* | scrape *Balanus* from the low shore, leave *Chthamalus* |
| Remove *Chthamalus* | scrape *Chthamalus* from the high shore |
| Remove both | scrape all |

Then monitor settlement and survival of each species across the whole tidal range over one or more seasons.

**The key design feature is that both removals are done**, because the two species may be limited by different things — and they are.

(c) **What was found, and it is asymmetric:**

- **Remove *Balanus*, and *Chthamalus* colonizes the low shore successfully** and persists. Its fundamental niche extends far below its realized one, and *Balanus* was excluding it — by direct interference, undercutting and overgrowing the smaller *Chthamalus*.
- **Remove *Chthamalus*, and *Balanus* does not spread upward.** It settles there and dies of desiccation. Its upper limit is genuinely physiological.

$$\textbf{The lower limit of } \textit{Chthamalus} \textbf{ is set by competition; the upper limit of } \textit{Balanus} \textbf{ by physiology.}$$

**The general principle, and it reshaped the field:**

1. **A species' distribution is not a map of its tolerances.** The realized niche is the fundamental niche minus what competitors, predators and parasites remove, and the subtraction is invisible without manipulation.

2. **Different boundaries have different causes, even for the same species.** *Chthamalus* is limited above by physiology (it too eventually dries out) and below by competition. **A single explanation for a species' range is usually wrong.**

3. **Observation cannot establish causation in community ecology; removal experiments can.** This is why Connell's 1961 study is one of the most cited papers in the field — not for the barnacles, but for the method. It is also why the "ghost of competition past" argument is unsatisfying: it explains a pattern with a process that is, by construction, no longer happening and therefore cannot be manipulated.

4. **There is a general prediction here worth noting.** Physiologically stressful boundaries (the upper shore, the arid edge of a range, the cold limit) tend to be set by tolerance; benign boundaries tend to be set by competition. **A species' range edge in the harsh direction is usually physiological and in the benign direction usually biotic** — a pattern that recurs from intertidal zonation to elevational gradients on mountains, and that matters for predicting range shifts under climate change.

## Watch out

- **You might read $\alpha\beta < 1$ as sufficient for coexistence.** It is **necessary but not sufficient** — both individual conditions $\alpha < K_1/K_2$ and $\beta < K_2/K_1$ must hold, as Example 1 shows.
- **You might read a species' distribution as its niche.** It is the **realized** niche. The fundamental niche is invisible without removal experiments.
- **You might infer competition from observed difference.** "The ghost of competition past" explains any pattern and is therefore not a test. Compare against a null model of random community assembly.
- **You might expect competitive exclusion to be fast or complete.** It is an *equilibrium* result, and real environments rarely reach equilibrium. The paradox of the plankton is the standard reminder.
- **You might treat the competition coefficients as fixed.** $\alpha$ and $\beta$ depend on resource availability, on the presence of other species, and on the environment — a pair that coexists in one place may not in another.
- **You might forget the founder-controlled case.** When $\alpha\beta > 1$, the outcome depends on **who arrived first**, not on the species' properties — so history, not competitive ability, determines the community.

## One-liner

> Coexistence requires each species to limit itself more than it limits the other, which is why two species using resources identically cannot coexist — and why a species' observed distribution is its realized niche, invisible in its true extent until you remove the competitor.

## Problems

**P1 (🟢)** Two species have $K_1 = 800$, $K_2 = 600$, $\alpha = 0.5$, $\beta = 0.7$. (a) Test both coexistence conditions. (b) Compute $\alpha\beta$. (c) State the outcome and, if coexistence occurs, the equilibrium densities.

**P2 (🟡)** Two species have $K_1 = 1000$, $K_2 = 1000$, $\alpha = 1.4$, $\beta = 1.6$. (a) Test the conditions and compute $\alpha\beta$. (b) What outcome does this predict, and what is the interior equilibrium? (c) Predict what happens if species 1 arrives first, and if species 2 does, and name the phenomenon.

**P3 (🔴, bridges to 4.2 and to 4.3)** In a well-mixed lake, twelve phytoplankton species coexist on three limiting nutrients. (a) State what competitive exclusion theory predicts and why the observation is a problem. (b) Give three distinct resolutions and explain the mechanism of each. (c) A researcher proposes that the species have subtly different nutrient requirements, so there are really twelve niches. Evaluate this proposal, and say what evidence would support or undermine it.

<details>
<summary>Solutions</summary>

**P1 (a)** $$\alpha = 0.5 \quad\text{vs}\quad \frac{K_1}{K_2} = \frac{800}{600} = 1.333 \;\Longrightarrow\; 0.5 < 1.333 \ \checkmark$$

$$\beta = 0.7 \quad\text{vs}\quad \frac{K_2}{K_1} = \frac{600}{800} = 0.75 \;\Longrightarrow\; 0.7 < 0.75 \ \checkmark$$

**Both hold** — though the second only just.

**(b)** $$\alpha\beta = 0.5 \times 0.7 = \mathbf{0.35} < 1 \ \checkmark$$

**(c)** **Stable coexistence.**

$$\hat N_1 = \frac{K_1 - \alpha K_2}{1-\alpha\beta} = \frac{800 - 0.5(600)}{1 - 0.35} = \frac{800-300}{0.65} = \frac{500}{0.65} = \mathbf{769}.$$

$$\hat N_2 = \frac{K_2 - \beta K_1}{1-\alpha\beta} = \frac{600 - 0.7(800)}{0.65} = \frac{600-560}{0.65} = \frac{40}{0.65} = \mathbf{61.5}.$$

Both positive ✓ — coexistence is real, but **highly asymmetric**: species 2 persists at only 10 percent of its own carrying capacity. It is hanging on, and a small increase in $\beta$ (from 0.70 to 0.75) would eliminate it entirely.

**This is worth noting as a general point:** coexistence conditions are frequently satisfied *narrowly*, so the observed community is not robustly coexisting — it is close to a boundary, and modest environmental change can flip it.

**P2 (a)** $$\alpha = 1.4 \quad\text{vs}\quad \frac{K_1}{K_2} = 1.0 \;\Longrightarrow\; 1.4 > 1.0 \ \boldsymbol{\times}$$

$$\beta = 1.6 \quad\text{vs}\quad \frac{K_2}{K_1} = 1.0 \;\Longrightarrow\; 1.6 > 1.0 \ \boldsymbol{\times}$$

**Both conditions fail, in the same direction.**

$$\alpha\beta = 1.4 \times 1.6 = \mathbf{2.24} > 1 .$$

**(b)** **Founder-controlled (unstable) competition.** Each species limits the other *more* than it limits itself — the opposite of the coexistence requirement.

Interior equilibrium:

$$\hat N_1 = \frac{1000 - 1.4(1000)}{1 - 2.24} = \frac{-400}{-1.24} = \mathbf{323}, \qquad \hat N_2 = \frac{1000 - 1.6(1000)}{-1.24} = \frac{-600}{-1.24} = \mathbf{484}.$$

Both are **positive**, so an interior equilibrium exists — but it is a **saddle point**, and therefore unstable. Any perturbation drives the system away from it toward one axis or the other.

**Note the trap:** positive equilibrium densities do *not* imply coexistence. You must check stability, and here the double sign flip (negative numerator over negative denominator) is the algebraic warning sign.

**(c)** *Species 1 arrives first* and reaches $N_1 = K_1 = 1000$. Can species 2 invade?

$$\frac{1}{N_2}\frac{dN_2}{dt}\bigg|_{N_2\to 0} = r_2\frac{K_2 - \beta K_1}{K_2} = r_2\frac{1000 - 1600}{1000} = -0.6\,r_2 < 0 \;\Longrightarrow\; \textbf{cannot invade}.$$

*Species 2 arrives first* and reaches $N_2 = 1000$. Can species 1 invade?

$$r_1\frac{K_1 - \alpha K_2}{K_1} = r_1\frac{1000-1400}{1000} = -0.4\,r_1 < 0 \;\Longrightarrow\; \textbf{cannot invade}.$$

**Neither can invade the other, so whichever arrives first wins permanently.**

**The phenomenon is a priority effect** (founder control, or an alternative stable state). Its consequences are worth stating:

- **The community's composition is determined by history, not by the species' properties.** Two identical lakes can end up with different species purely because of which propagule arrived first.
- **It is a form of hysteresis** ([dynamical-systems](../../dynamical-systems/syllabus.md), and the same structure as the bistable switches in [molecular-cell-biology 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md)): the state depends on the path, not just the current conditions.
- **It has a hard restoration implication.** If an invasive species has established through a priority effect, removing it is not enough — the native must be actively reintroduced, in numbers above the saddle threshold, or the invader simply returns.

**P3 (a)** **Competitive exclusion predicts that the number of coexisting species at equilibrium cannot exceed the number of limiting resources.** With three limiting nutrients, at most three species should persist.

Twelve species on three resources is a fourfold violation. This is **Hutchinson's paradox of the plankton** (1961), and it is a genuine problem rather than a curiosity, because the theory is not vague — it is a theorem about equilibria of a well-specified model.

**(b)** Three resolutions, with mechanisms:

**1. Non-equilibrium dynamics.** The theorem is about **equilibria**, and a lake never reaches one. Nutrient inputs, light, temperature and mixing change on timescales of days to weeks, while competitive exclusion takes many generations. **The competitively superior species changes before exclusion completes**, so no species ever wins. This is the resolution Hutchinson himself favoured, and it is supported by the observation that plankton communities in genuinely constant chemostats *do* collapse toward a few species.

**2. Spatial heterogeneity.** "Well-mixed" is a description at the scale of the lake, not at the scale of a 20 μm cell. Microscale patchiness — nutrient plumes from decomposing particles, the boundary layers around aggregates, vertical gradients between mixing events — creates many effectively separate micro-environments. **Twelve species on three nutrients in one habitat is impossible; twelve species on three nutrients in a hundred slightly different micro-habitats is not.**

**3. Predation and disease.** Grazers and viruses that attack whichever prey is commonest impose **negative frequency dependence** ([1.2](01-02-modes-of-selection.md)) — a species that starts to win is disproportionately consumed. This "kill the winner" dynamic prevents any competitor from reaching the density at which it would exclude the others, and it is why viral lysis is now regarded as a major structuring force in marine plankton ([4.2](04-02-predation-lotka-volterra.md), [4.3](04-03-mutualism-succession-diversity.md)).

*(A fourth, equally valid: **trade-offs**. Being best at low nutrient concentration requires high-affinity uptake systems that cost resources and perform poorly at high concentration. No species is best across the whole range of a single nutrient, so a fluctuating nutrient supply supports several species on one resource.)*

**(c) Evaluating "there are really twelve niches."**

**The proposal is not wrong in principle** — the theorem counts *limiting factors*, and if the species genuinely differ in ways that constitute distinct limiting axes (different optimal N:P ratios, different light or temperature optima, different trace-metal requirements), then there are more than three axes and no paradox.

**But as usually stated it is unfalsifiable, and that is the objection.** "They must differ somehow, because they coexist" assumes the conclusion. Any observed coexistence can be explained by positing an unmeasured niche axis, so the proposal makes no prediction and cannot fail.

**What would support it:**

- **Measure the differences directly.** Determine each species' Monod uptake kinetics ($\mu_{\max}$ and $K_s$) for each nutrient, and its optimal light and temperature. If species differ substantially and in *different directions* on different axes, the claim has content.
- **Test the prediction it makes.** Distinct niches predict **mutual invasibility** ([the invasion criterion above](#the-formal-version)). Grow each species to equilibrium in a chemostat and introduce each other species at low density. If every species can invade every established community, coexistence is genuinely niche-based.
- **Test the equilibrium claim.** Run a chemostat at constant conditions for many generations. **Niche-based coexistence should persist; non-equilibrium coexistence should collapse.** This is the decisive experiment, and it has been done — communities in constant chemostats generally do lose most of their diversity, which favours the non-equilibrium explanations.

**What would undermine it:**

- Species that are **measurably very similar** in resource use and yet coexist.
- Coexistence that **collapses under constant conditions** but persists under fluctuation — direct evidence that fluctuation, not niche difference, is doing the work.
- **Order-dependence**: if which species persist depends on introduction order, priority effects rather than niches are structuring the community.

**The honest modern position:** all four mechanisms operate, their relative importance varies between systems, and Chesson's framework was developed precisely to make the comparison quantitative — separating **fluctuation-dependent** from **fluctuation-independent** coexistence mechanisms and measuring each. **The paradox was not resolved by finding the answer; it was resolved by discovering that coexistence has several distinguishable causes and building the tools to tell them apart.**

</details>

## Flashback

**From Lesson 3.3 (life histories and the geometric mean):** A plant can produce 200 seeds every year with 50 percent annual adult survival, or 1500 seeds once at age 5 and then die. (a) Compute expected lifetime output for each in a benign environment. (b) In a habitat where a catastrophe kills all adults with annual probability 0.20, recompute. (c) State which strategy the catastrophe regime favours and connect it to residual reproductive value.

<details>
<summary>Solution</summary>

**(a)** *Iteroparous.* Expected number of breeding seasons is $1/(1-0.5) = 2$:

$$200 \times 2 = \mathbf{400\ \text{seeds}}.$$

*Semelparous.* Must reach age 5; in a benign environment it does:

$$\mathbf{1500\ \text{seeds}}.$$

**Semelparity wins**, by a factor of 3.75.

**(b)** Now catastrophes kill adults at annual probability 0.20, so annual survival is multiplied by 0.80.

*Semelparous.* Must survive 5 years:

$$(0.80)^{5} \times 1500 = 0.3277 \times 1500 = \mathbf{492\ \text{seeds}}.$$

*Iteroparous.* Annual survival becomes $0.5 \times 0.8 = 0.40$, so expected breeding seasons is $1/(1-0.40) = 1.667$. It must also survive to first flowering — take that as age 1, so multiply by 0.80:

$$0.80 \times 200 \times 1.667 = \mathbf{267\ \text{seeds}}.$$

**Semelparity still wins**, 492 to 267 — the catastrophe rate is not yet high enough to overturn it.

**(c)** The catastrophe regime **shifts the balance toward iteroparity**, and it does so at a rate that depends on the waiting time.

The semelparous strategy scales as $(1-q)^{5}$ and the iteroparous one roughly as $(1-q)$ times a milder factor, so **the semelparous advantage erodes exponentially in the disturbance rate**. Solving for the crossover: semelparity loses once $q$ exceeds roughly 0.35.

**Connecting to residual reproductive value ([3.3](03-03-life-histories-tradeoffs.md)):** the optimal reproductive effort satisfies $-S'(R) = 1/V_{t+1}$, and semelparity is the corner solution $V_{t+1} = 0$. **Catastrophes reduce $V_{t+1}$ directly** — they make surviving to breed again improbable — which is exactly the condition that favours spending everything now.

But the effect works on both strategies. What ultimately decides it is **how much of the future each strategy is banking on**: the semelparous plant is banking on five years, the iteroparous one on one. **The strategy that stakes more on the future is the one a risky future punishes more**, and that is why disturbance regimes select for early, repeated, smaller reproduction.

</details>

## Connections

- **Backward:** [3.2](03-02-logistic-growth-carrying-capacity.md)'s logistic is this model with one term added; $K$ and $r$ are outcomes of the life histories in [3.3](03-03-life-histories-tradeoffs.md).
- **Forward:** [4.2](04-02-predation-lotka-volterra.md) replaces competition with consumption and gets oscillations instead of equilibria; [4.3](04-03-mutualism-succession-diversity.md) shows how predation and disturbance rescue coexistence from exclusion.
- **Sideways:** the phase-plane analysis, isoclines and saddle points are [dynamical-systems 1.3](../../dynamical-systems/lessons/01-03-trace-determinant-classification.md); the priority effect is the same alternative-stable-state structure as bistability in [molecular-cell-biology 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md); the character-displacement inference problem is the same null-model question as [genetics 4.4](../../genetics/lessons/04-04-linkage-disequilibrium-gwas.md)'s stratification.
