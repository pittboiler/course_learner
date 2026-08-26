# Evolution & Ecology · Lesson 1.2: Modes of selection on a continuous trait

> ⏱ ~15 min · Module 1: Evolutionary Mechanisms & Population Genetics · Builds on: [1.1](01-01-fitness-quantitative.md) · Unlocks: 1.3 (Hardy–Weinberg as a testable null)

## Why this matters

[1.1](01-01-fitness-quantitative.md) tracked one allele at one locus. Almost nothing selection acts on in the field is like that. Beak depth, body size, flowering date, running speed — these are continuous, polygenic, and the thing that has a fitness is the **trait value**, not a genotype you can name.

So the machinery has to be rebuilt at the level of distributions: what does selection do to a **mean** and a **variance**, how do you measure it from field data, and — the question that separates a real evolutionary claim from a story — how do you tell selection acting on a trait from selection acting on something the trait merely correlates with?

That last question is where most naive adaptationism goes wrong, and the tool that fixes it is a multiple regression.

## The idea

**Three modes, defined by what happens to the distribution.**

| Mode | Which individuals do best | Mean | Variance |
|---|---|---|---|
| **Directional** | one extreme | **shifts** | usually falls slightly |
| **Stabilizing** | intermediates | unchanged | **falls** |
| **Disruptive** | both extremes | unchanged | **rises** |

*In words: directional selection moves the distribution, stabilizing selection narrows it, disruptive selection splits it.* Reading which mode is operating means comparing the distribution before and after selection — and it is the **variance**, not just the mean, that tells you.

**Stabilizing selection is the commonest and the least visible.** Most traits in most populations are near an optimum, and selection is busy holding them there. Human birth weight is the classic case: mortality rises for both very small and very large babies, and the fitness peak sits close to the population mean. **A population showing no change over time may be under intense selection**, which is why "no evolution observed" is not evidence of "no selection."

**Disruptive selection is rare and consequential.** It maintains variation rather than eroding it, and if it also produces assortative mating it is the beginning of speciation ([2.2](02-02-how-species-split.md)).

**Frequency dependence breaks the rules.** Everything in [1.1](01-01-fitness-quantitative.md) assumed fitness was a fixed property of a genotype. Often it is not:

- **Negative frequency dependence** — rare types do better. This *maintains* variation, and it is the reason for the enormous diversity of MHC alleles, of self-incompatibility alleles in plants, and of prey colour morphs whose predators form a search image for whatever is common.
- **Positive frequency dependence** — common types do better. This *eliminates* variation, and it produces the mimicry rings in which several unpalatable species converge on one warning pattern.

**Under negative frequency dependence, mean fitness does not necessarily increase**, so Fisher's fundamental theorem from [1.1](01-01-fitness-quantitative.md) fails. That is not a small caveat: it is why a fitness-landscape picture of evolution is sometimes actively misleading.

**And then the hardest problem: adaptation, by-product, or constraint?** A trait can be perfectly matched to its environment for three quite different reasons:

1. **Adaptation** — selection built it for that function.
2. **By-product** — it is a side-effect of something else that was selected. (Gould and Lewontin's "spandrel": the curved triangular spaces under a dome are not designed features, they are what is left over when you put a dome on arches.)
3. **Constraint** — development, physics, or phylogenetic history left no alternative.

**Demonstrating adaptation requires evidence, not a plausible story about function.**

## The formal version

**The selection differential, on a trait.** As in [genetics 4.2](../../genetics/lessons/04-02-response-to-selection-qtl.md):

$$S = \bar{z}_{\text{selected}} - \bar{z}$$

and the response across a generation is $R = h^{2}S$.

**But $S$ is a covariance**, and writing it that way is what makes the rest possible. With relative fitness $w$ and trait value $z$:

$$\boxed{\;S = \mathrm{Cov}(w, z)\;}$$

*In words: the selection differential is the covariance between fitness and the trait.* This is the **Robertson–Price identity**, and it is exact.

**The selection gradient** standardizes by the trait's variance:

$$\beta = \frac{\mathrm{Cov}(w,z)}{\mathrm{Var}(z)} = \frac{S}{\sigma_z^{2}}$$

which is precisely the **slope of a regression of relative fitness on the trait**. *In words: how much relative fitness you gain per unit of trait.*

**Now the crucial move — the multivariate version.** Two traits correlated with each other, only one under selection: the correlated one will *also* show a selection differential, purely by association. To separate them, regress fitness on **both** simultaneously:

$$w = \alpha + \beta_1 z_1 + \beta_2 z_2 + \varepsilon$$

$$\boldsymbol{\beta} = \mathbf{P}^{-1}\mathbf{S}$$

where $\mathbf{P}$ is the phenotypic covariance matrix and $\mathbf{S}$ the vector of differentials.

**$S$ measures total selection, direct plus indirect. $\beta$ measures direct selection only.** *In words: the differential tells you what changed; the gradient tells you what selection was actually acting on.* This is the Lande–Arnold framework, and it turned "is this trait adaptive?" from a debate into a measurement.

**Quadratic gradients distinguish the modes.** Add a squared term:

$$w = \alpha + \beta z + \tfrac12 \gamma z^{2}$$

| | Meaning |
|---|---|
| $\beta \ne 0$ | **directional** selection |
| $\gamma < 0$ | **stabilizing** — fitness peaks at an intermediate |
| $\gamma > 0$ | **disruptive** — fitness is lowest in the middle |

**Change in variance under stabilizing selection.** If fitness is Gaussian with width $\omega$ around an optimum, the variance after selection is

$$\sigma^{2}_{\text{after}} = \frac{\sigma^{2}\omega^{2}}{\sigma^{2} + \omega^{2}} < \sigma^{2}$$

*In words: narrower fitness function (smaller $\omega$) means stronger narrowing of the trait.* Note it is always a *reduction*, which raises the question [1.5](01-05-mutation-balance-of-forces.md) has to answer: why does any variation survive?

**Multivariate response, and why traits do not evolve independently.** The multivariate breeder's equation:

$$\boxed{\;\Delta\bar{\mathbf{z}} = \mathbf{G}\boldsymbol{\beta}\;}$$

where $\mathbf{G}$ is the **additive genetic covariance matrix**. Because $\mathbf{G}$ has off-diagonal terms, **selection on one trait drags correlated traits along with it**, and a trait can evolve in the direction *opposite* to the selection acting on it if it is genetically correlated with something under stronger selection. This is a genetic constraint, it is measurable, and it is one of the main reasons populations do not simply climb to their optima.

## Picture

![Three panels showing a trait distribution before selection as a dashed curve and after as a solid curve, with the fitness function drawn above each. Directional selection has a monotonic fitness function and shifts the mean. Stabilizing selection has a peaked fitness function centred on the mean and narrows the distribution without moving it. Disruptive selection has a valley in the middle and splits the distribution into two shoulders. Beside them, a scatter of relative fitness against trait value with a fitted line whose slope is the selection gradient beta, and a second panel showing two correlated traits where the total differential on trait two is positive while its direct gradient is zero.](assets/01-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — read the mode from the moments).** A population of beetles has body length mean 12.0 mm, variance 4.0 mm². After a season of predation, the survivors have mean 12.0 mm and variance 2.5 mm². (a) Which mode of selection? (b) Compute $S$ and comment. (c) What sign would $\gamma$ have, and what would $\beta$ be?

(a) The **mean is unchanged** and the **variance has fallen by 37.5 percent**. That is **stabilizing selection** — intermediates survived better than either extreme.

(b) $$S = \bar z_{\text{selected}} - \bar z = 12.0 - 12.0 = \mathbf{0}.$$

**And this is the trap.** A selection differential of zero would, from the mean alone, look like *no selection at all* — and yet more than a third of the trait variance has been removed. **Directional selection is what $S$ measures; stabilizing selection is invisible to it.** If you only report means, you will report that nothing happened.

(c) $\gamma < 0$ (fitness peaks at an intermediate value — the defining signature of stabilizing selection), and $\beta \approx 0$ (no directional component, consistent with $S = 0$).

**The general lesson:** always report the change in **variance** alongside the change in mean. The two together identify the mode; either alone can mislead.

**Example 2 (why you'd care — separating direct from indirect selection in Darwin's finches).** During the 1977 Galápagos drought, only large hard seeds remained. Among *Geospiza fortis*, survivors had larger **beak depth** and larger **body size** than non-survivors — but the two traits are strongly correlated ($r \approx 0.8$). (a) Why does the raw differential not establish which trait selection acted on? (b) How does a multiple regression settle it? (c) Beak depth rose about 0.5 mm in one generation, and reversed after the wet El Niño years of 1983. What does the reversal establish?

(a) Because **the differential $S$ measures total selection, direct plus indirect.** Two strongly correlated traits will *both* show a positive differential if selection acts on either one of them — a bird selected for a deep beak is, by correlation, also a large bird, and vice versa. The differentials cannot distinguish "selection on beak depth dragged body size along" from the reverse, or from selection on both.

$$\textbf{A positive } S \textbf{ on a trait is not evidence that selection acted on that trait.}$$

(b) Regress relative fitness (survival) on **both** traits simultaneously:

$$w = \alpha + \beta_{\text{beak}}\,z_{\text{beak}} + \beta_{\text{body}}\,z_{\text{body}} + \varepsilon$$

Each $\beta$ is the effect of that trait **holding the other constant** — the effect of being deeper-beaked *for a bird of given body size*. In the Grants' analysis, the direct gradient on **beak depth** was substantial and positive while the gradient on body size, controlling for beak, was much weaker.

**Mechanistically this is exactly what you would predict:** the birds were dying of an inability to crack large hard *Tribulus* seeds, and cracking force depends on beak depth. Body size correlated with survival because it correlated with beak depth, not because being large helped.

$$\mathbf{S} \text{ said both traits changed. } \boldsymbol{\beta} = \mathbf{P}^{-1}\mathbf{S} \text{ said only one was being selected.}$$

(c) The **reversal** in the wet years — when small soft seeds became abundant again and beak depth declined — establishes two things that a single episode could not.

**First, that the change was selection rather than drift or a sampling artefact.** Drift has no reason to reverse when the environment reverses; a measurement artefact has no reason to reverse at all. A trait that tracks the environment *in both directions* is responding to it.

**Second, that beak depth is under stabilizing selection on a moving optimum.** There is no intrinsic advantage to a deep beak — deep beaks are costly when seeds are small and soft. The population is not marching in a direction; it is chasing an optimum that moves with rainfall. **Over decades the net directional change is small while the year-to-year selection is intense**, which is precisely Example 1's warning made real: a population that looks static can be under fierce and continuously reversing selection.

*(This is also why the Grants' work mattered so much. Before it, the standard view was that selection in the wild was too weak to measure directly. They measured selection coefficients on the order of 0.1 in a single season — an order of magnitude larger than anyone had assumed.)*

## Watch out

- **You might report only the change in mean.** Stabilizing and disruptive selection leave the mean untouched and change the variance. $S = 0$ does not mean $s = 0$.
- **You might read a selection differential as evidence about a trait.** $S$ includes indirect selection through correlated traits. Only the multivariate gradient $\beta$ isolates direct selection.
- **You might assume a well-fitted trait is an adaptation.** By-products and constraints produce the same appearance. Demonstrating adaptation needs comparative, experimental, or genetic evidence — not a plausible functional story.
- **You might expect selection to always increase mean fitness.** Under negative frequency dependence it need not, and the fitness-landscape picture stops applying.
- **You might expect traits to evolve independently.** Genetic correlations in $\mathbf{G}$ mean a trait can evolve *against* the selection acting on it, dragged by a correlated trait under stronger selection.
- **You might treat stabilizing selection as rare because nothing seems to happen.** It is the commonest mode, and its signature is *absence of change* maintained by continuous culling of both tails.

## One-liner

> Directional selection moves the mean, stabilizing narrows the variance, disruptive splits it — and since the differential includes selection on everything a trait correlates with, only a multiple regression of fitness on all the traits tells you what selection was actually acting on.

## Problems

**P1 (🟢)** For each observation, name the mode of selection: (a) mean flowering date shifts 5 days earlier, variance unchanged; (b) mean seed mass unchanged, variance falls 40 percent; (c) mean bill size unchanged, variance rises 60 percent and the distribution becomes bimodal; (d) human birth weight, where mortality rises for both very light and very heavy infants.

**P2 (🟡)** A population of plants has mean height 40 cm with variance 100 cm². After selection, survivors have mean 44 cm and variance 64 cm². Narrow-sense heritability is $h^2 = 0.4$. (a) Compute $S$ and the selection gradient $\beta$. (b) Predict the response $R$ and the offspring mean. (c) What has happened to the variance, and name both modes of selection operating simultaneously.

**P3 (🔴, bridges to 1.5 and to 2.2)** In a population of seed-eating birds, two seed types are available: small soft and large hard. Beak depth determines which a bird can exploit; intermediate beaks handle neither well. (a) Name the mode of selection and give the sign of $\gamma$. (b) Explain why this mode is unusual in *maintaining* rather than eroding variation, and what would happen to $\sigma^2$ over generations. (c) Suppose birds begin to mate assortatively by beak depth. Explain what this predicts, and state precisely what additional condition would be needed for the two forms to become separate species.

<details>
<summary>Solutions</summary>

**P1**

| | Observation | Mode |
|---|---|---|
| (a) | mean shifts, variance unchanged | **directional** |
| (b) | mean unchanged, variance falls | **stabilizing** |
| (c) | mean unchanged, variance rises, bimodal | **disruptive** |
| (d) | mortality at both extremes | **stabilizing** |

Note (d) is the textbook human example, and it is worth flagging that it has weakened substantially with modern obstetric care — Caesarean section and neonatal intensive care have relaxed selection on both tails, and measured stabilizing selection on birth weight is now noticeably weaker than in the mid-twentieth-century data. **Selection coefficients are properties of an environment, and medicine is part of the environment.**

**P2 (a)** $$S = 44 - 40 = \mathbf{4\ \mathrm{cm}}.$$

$$\beta = \frac{S}{\sigma_z^{2}} = \frac{4}{100} = \mathbf{0.04\ \text{per cm}}.$$

*(That is, relative fitness rises by 0.04 per centimetre of height — a moderately strong gradient.)*

**(b)** $$R = h^{2}S = 0.4 \times 4 = \mathbf{1.6\ \mathrm{cm}}.$$

Offspring mean $= 40 + 1.6 = \mathbf{41.6\ \mathrm{cm}}$.

**Note the response is well short of the differential** — the survivors averaged 44 cm and their offspring average 41.6 cm, regressing $(1-h^2) = 60$ percent of the way back ([genetics 4.2](../../genetics/lessons/04-02-response-to-selection-qtl.md)).

**(c)** Variance fell from 100 to 64, a **36 percent reduction**.

So **two modes are operating simultaneously**: **directional** selection (the mean moved 4 cm) *and* **stabilizing** selection (the variance fell 36 percent). In the quadratic framework:

$$\beta > 0 \ \text{(directional)} \qquad\text{and}\qquad \gamma < 0 \ \text{(stabilizing)}.$$

These are not alternatives — a fitness function can be both tilted and peaked, and in real data it usually is. **The modes are components of one fitness surface, not a classification of mutually exclusive cases**, and reporting only "directional selection was observed" would miss more than a third of what happened.

*(A caution worth stating: some of the variance reduction is an automatic consequence of truncating a distribution, so a proper analysis compares the observed variance reduction with what directional selection alone would produce, and attributes only the excess to stabilizing selection.)*

**P3 (a)** **Disruptive selection**, with $\gamma > 0$ — fitness is *lowest* at intermediate beak depth and higher at both extremes.

**(b)** Every other mode removes variation: directional selection depletes one tail, stabilizing selection culls both. Disruptive selection **kills the middle**, so the individuals that survive and reproduce are disproportionately the extremes — and extremes breed extremes to the extent the trait is heritable.

Over generations $\sigma^{2}$ would **rise**, and the distribution would become increasingly **bimodal**.

**But there is a limit, and it is important.** Random mating between the two forms produces intermediate offspring, who are then killed. So the population reaches a stable, wide, bimodal distribution in which each generation regenerates the maladapted middle and each generation loses it. **Disruptive selection alone maintains variation at a high fitness cost** — the population is permanently paying to produce individuals that die.

**(c)** Assortative mating means deep-beaked birds preferentially mate with deep-beaked birds and shallow with shallow.

*What it predicts:* the two forms stop producing intermediate offspring. The wasteful middle disappears, mean fitness rises, and the two beak morphs become genetically as well as phenotypically distinct — with reduced gene flow between them. This is **exactly the situation that makes sympatric speciation possible** ([2.2](02-02-how-species-split.md)), and it is why assortative mating is the pivotal ingredient rather than the disruptive selection itself.

*The additional condition needed for separate species:* **reproductive isolation must become a property of the organisms rather than a consequence of the current environment** ([2.1](02-01-what-is-a-species.md)).

Assortative mating by beak depth is not yet isolation — it is a *behavioural correlation* that would vanish if the two seed types stopped being distinct, since beak depths would then converge and the mating preference would no longer separate anything. For speciation you need the barrier to persist independently:

- **Genetic incompatibility** between the two forms (hybrid inviability or sterility), which does not depend on the seed environment; or
- **A heritable mating preference that is genetically linked to the ecological trait** — a "magic trait" — so that the preference and the adaptation are inherited together and cannot be recombined apart.

**That last requirement is the crux of the sympatric-speciation problem.** Recombination in each generation breaks the association between the ecological trait and the mating preference, blending the two forms back together. Speciation in sympatry therefore requires something that resists recombination — physical linkage, an inversion suppressing recombination ([genetics 2.4](../../genetics/lessons/02-04-chromosomal-mutations.md)), or a single trait that serves as both adaptation and mating cue. **This is why sympatric speciation is theoretically possible, empirically documented, and much rarer than allopatric speciation** ([2.2](02-02-how-species-split.md)).

</details>

## Flashback

**From Lesson 1.1 (fitness arrays and $\Delta q$):** A population has $p = 0.5$, $q = 0.5$, with fitnesses $w_{AA} = 1.0$, $w_{Aa} = 0.95$, $w_{aa} = 0.80$. (a) Compute $\bar w$. (b) Find $q'$ and $\Delta q$. (c) Identify $s$ and $h$, and say whether selection here is faster or slower than it would be against a fully recessive allele of the same $s$.

<details>
<summary>Solution</summary>

**(a)** $p^2 = 0.25$, $2pq = 0.50$, $q^2 = 0.25$.

$$\bar w = 0.25(1.0) + 0.50(0.95) + 0.25(0.80) = 0.250 + 0.475 + 0.200 = \mathbf{0.925}.$$

**(b)** $$q' = \frac{q^{2}w_{aa} + pq\,w_{Aa}}{\bar w} = \frac{0.25(0.80) + (0.5)(0.5)(0.95)}{0.925} = \frac{0.200 + 0.2375}{0.925} = \frac{0.4375}{0.925} = \mathbf{0.4730}.$$

$$\Delta q = 0.4730 - 0.50 = \mathbf{-0.0270}.$$

**(c)** $w_{aa} = 1 - s = 0.80 \Rightarrow \mathbf{s = 0.20}$. $w_{Aa} = 1 - hs = 0.95 \Rightarrow hs = 0.05 \Rightarrow \mathbf{h = 0.25}$.

**Faster than a fully recessive allele.** For $h = 0$ with the same $s = 0.20$:

$$\Delta q \approx -s\,q^{2}p = -(0.20)(0.25)(0.5) = -0.025,$$

against $-0.027$ here. At $q = 0.5$ the difference is modest, because homozygotes are plentiful and selection can see the allele either way.

**The difference becomes enormous at low $q$**, which is the whole point of [1.1](01-01-fitness-quantitative.md). At $q = 0.01$: partial dominance gives $\Delta q \approx -pq\,psh = -(0.0099)(0.99)(0.05) \approx -4.9\times10^{-4}$, while full recessivity gives $\Delta q \approx -sq^{2}p = -(0.2)(10^{-4})(0.99) \approx -2.0\times10^{-5}$ — **a factor of 25**. Even a small amount of dominance ($h = 0.25$) makes selection against a rare allele vastly more effective than pure recessivity does.

</details>

## Connections

- **Backward:** [1.1](01-01-fitness-quantitative.md)'s single-locus machinery is rebuilt here for distributions; the Robertson–Price identity $S = \mathrm{Cov}(w,z)$ is what connects them.
- **Forward:** [1.3](01-03-hardy-weinberg-testable-null.md) asks how you detect that *any* of this is happening in a real population; [1.5](01-05-mutation-balance-of-forces.md) has to explain why stabilizing selection has not eliminated all the variation.
- **Sideways:** $S$, $\beta$ and $R = h^2 S$ are the breeder's equation seen from the field rather than the farm ([genetics 4.1](../../genetics/lessons/04-01-quantitative-traits-heritability.md), [4.2](../../genetics/lessons/04-02-response-to-selection-qtl.md)); the multiple regression that separates direct from indirect selection is [econometrics 2.1](../../econometrics/syllabus.md)'s omitted-variable problem in a different costume.
