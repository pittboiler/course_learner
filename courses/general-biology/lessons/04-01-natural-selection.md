# General Biology · Lesson 4.1: Natural selection

> ⏱ ~15 min · Module 4: Evolution & the diversity of life · Builds on: [2.5](02-05-mitosis-meiosis.md), [3.4](03-04-central-dogma.md) · Unlocks: 4.2 (evolution in populations)

## Why this matters

Everything in this course so far has been mechanism. This lesson supplies the reason any of it looks the way it does. Dobzhansky's line — nothing in biology makes sense except in the light of evolution — is not rhetoric: without selection, the four biomolecule families, the shape of the genetic code, and the existence of mitochondria are a pile of unrelated facts.

Natural selection is also the most misunderstood idea in science, and most of the misunderstanding comes from a single mistake: reading purpose into a process that has none.

## The idea

The argument is short enough to state in full, and it is *deductive* — given the premises, the conclusion follows necessarily.

1. **Individuals within a population vary.** They differ in size, speed, colour, biochemistry.
2. **Some of that variation is heritable.** Offspring resemble their parents more than they resemble strangers.
3. **More offspring are produced than can survive.** Resources are finite.
4. **Survival and reproduction are not random with respect to the variation.** Some variants do better in the current environment.

**Therefore:** the variants that do better become more common in the next generation. Repeat, and the population changes.

That's it. There is no additional mechanism and no force pushing toward improvement. **Selection is not a thing that acts; it is a name for what happens when those four statements are true.** They are true of nearly every population, which is why the conclusion is nearly inescapable.

**Where the variation comes from.** Selection cannot create variation — it can only filter what exists. The source is **mutation** ([3.4](03-04-central-dogma.md)), which is random with respect to need, plus the **recombination** of meiosis ([2.5](02-05-mitosis-meiosis.md)), which shuffles existing variants into new combinations.

**And this is the crux of the whole subject.** Mutation is random; selection is not. A bacterium does not mutate *because* it needs antibiotic resistance — the mutations were already there, arising blindly, and the antibiotic merely determined which lineage survived. **Random variation, non-random survival.** Getting this backwards produces essentially every popular misconception about evolution.

**Fitness means reproduction, not health.** In evolutionary usage, fitness is the number of surviving offspring, full stop. A frail organism that reproduces prolifically is fitter than a magnificent one that doesn't. And fitness is always *relative to a specific environment* — the dark colouring that hides you on dark bark advertises you on pale bark, and nothing about the allele changed.

## The formal version

**The three requirements** — necessary and jointly sufficient:

| Requirement | Meaning | Source |
|---|---|---|
| **Variation** | individuals differ in a trait | mutation, recombination |
| **Heritability** | the difference is passed to offspring | genes ([3.4](03-04-central-dogma.md)) |
| **Differential fitness** | the trait affects reproductive success | interaction with the environment |

*In words: if a heritable difference affects how many offspring you leave, its frequency will change.* Remove any one and selection stops: a non-heritable difference (a scar) is not passed on, and a heritable difference with no fitness effect drifts aimlessly ([4.2](04-02-evolution-in-populations.md)). See [natural selection](../reference.md#natural-selection).

**Fitness**, denoted $w$, is relative reproductive success — conventionally scaled so the best variant has $w = 1$. **Adaptation** is a heritable trait that raises fitness in the current environment.

**The modes of selection.** Traits vary continuously; selection can act on that distribution three ways:

| Mode | Favours | Effect on the distribution | Example |
|---|---|---|---|
| **Directional** | one extreme | mean shifts | antibiotic resistance; beak size in drought |
| **Stabilizing** | the middle | variance narrows | human birth weight |
| **Disruptive** | both extremes | becomes bimodal | seed-eating birds with two seed sizes available |

**Stabilizing selection is the commonest and the least noticed**, because it produces no change — it actively keeps a well-adapted population where it is. Human birth weight is the standard case: too small and survival falls, too large and delivery is dangerous, so selection presses from both sides toward the middle.

**Sexual selection** is selection for traits that improve mating success rather than survival, and it can push directly *against* survival — a peacock's tail is costly and conspicuous. It persists because fitness counts offspring, and a shorter life with more mating can beat a longer one with less.

**Artificial selection** is the same process with humans choosing the criterion. Every domestic crop and breed is a demonstration: broccoli, kale, cabbage, cauliflower, and Brussels sprouts are all *Brassica oleracea*, the same species, differing only by which part humans selected for. Darwin opened *On the Origin of Species* with artificial selection precisely because it made the mechanism familiar before he applied it to nature.

**What selection cannot do:**

- **It cannot plan.** No trait appears because it will be useful later.
- **It cannot create variation on demand.** It filters what mutation happens to supply.
- **It cannot optimize freely.** It works from existing structures, so it produces good-enough tinkering rather than design — the vertebrate eye's blind spot exists because the retina's wiring is in front of the photoreceptors, and no incremental path leads out of that.
- **It cannot act on non-heritable traits.** A trait acquired in life is not transmitted, which is the specific claim on which Lamarck's version failed.

## Picture

![The three requirements for natural selection - variation, heritability and differential fitness - leading to the conclusion that the population changes, beside a plot of a beetle population over ten generations in which the light form rises from 16 percent toward 76 percent as a visual predator hunts on pale soil](assets/04-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — check the three requirements).** A gardener notices that plants in a shaded bed grow taller than those in sun. Is this natural selection at work?

Test each requirement:

| Requirement | Present? |
|---|---|
| Variation in height | Yes — the plants differ |
| **Heritability** | **Unknown, and probably not.** The tall plants may simply be *responding* to shade by growing toward light |
| Differential fitness | Not demonstrated |

**This is most likely phenotypic plasticity, not selection.** The same genotype produces different heights in different environments. A single plant moved from sun to shade would grow taller — which no amount of selection could achieve within one individual.

**The test that distinguishes them:** grow seeds from the tall plants in the *sun*. If they are still tall, the difference is heritable and selection could act. If they revert to normal height, the difference was environmental and cannot be selected on.

*This is the commonest error in identifying selection* — observing a difference between groups and assuming it is genetic. Heritability is an empirical question requiring exactly this kind of common-garden experiment.

**Example 2 (why you'd care — antibiotic resistance in real time).** A patient takes antibiotics. The infection clears, then returns resistant. What happened?

**The wrong story:** the bacteria were exposed to the drug, sensed the threat, and developed resistance.

**What actually happened:**

1. **The variation was already there.** In a population of $10^9$ bacteria, with a mutation rate around $10^{-9}$ per base per division, essentially every possible single-base mutation is present in *some* cell before the drug ever arrives. A few cells carry resistance by chance.
2. **The antibiotic is the selective agent.** It kills the susceptible majority, leaving the rare resistant cells.
3. **Those cells reproduce.** With competitors removed and resources abundant, they multiply — a bacterium can divide every 20 minutes.
4. **The population is now resistant.** Not because it changed, but because its composition changed.

**Three practical consequences follow directly from this mechanism:**

- **Finish the course.** Stopping early leaves the partially resistant cells alive — the ones that survived longest — and hands them an empty field.
- **Don't use antibiotics for viruses.** No benefit, and every exposure selects resistant bacteria in the patient's normal flora.
- **Resistance can decline.** Resistance mutations usually carry a fitness cost in the absence of the drug, so removing the antibiotic can let susceptible strains recover ground. This is the basis of antibiotic-cycling strategies in hospitals.

**The general lesson:** selection acts *within the lifetime of a hospital ward*. Evolution is not confined to geological time — where generations are short and selection is strong, it is an operational fact you can watch.

## Watch out

- **You might say organisms evolve.** **Populations** evolve; individuals do not. You will die with the alleles you were born with. Evolution is a change in frequencies across a population over generations.
- **You might say a trait appeared because it was needed.** Mutations arise regardless of need. The environment selects among what exists; it does not induce what would be useful.
- **You might read fitness as health, strength, or complexity.** It is reproductive success. A parasite that has lost its digestive system, its nervous system and most of its genome can be extremely fit.
- **You might describe evolution as progress toward higher forms.** There is no ladder. Bacteria have been evolving exactly as long as you have and are magnificently successful; "higher" and "lower" are not evolutionary categories.
- **You might treat "survival of the fittest" as the definition.** Survival matters only insofar as it enables reproduction. An organism that survives a century and never breeds has a fitness of zero.
- **You might assume every trait is an adaptation.** Many are by-products, or the result of drift ([4.2](04-02-evolution-in-populations.md)), or structural consequences of something else. Asking "what is it for?" of every feature is a habit worth resisting.

## One-liner

> Heritable variation plus differential reproduction equals change — variation arrives at random, survival does not, and no part of the process looks ahead.

## Problems

**P1 (🟢)** A population of moths on soot-darkened tree bark shifts from mostly light to mostly dark over fifty years. Identify variation, heritability and differential fitness in this case, and name the mode of selection.

**P2 (🟡)** Explain why "the bacteria developed resistance in response to the antibiotic" is wrong, and give the correct account. What experiment could distinguish the two?

**P3 (🔴)** Human birth weight has changed little for millennia despite strong selection on it. Explain how strong selection can produce no change, name the mode, and predict what happened to this selection pressure after Caesarean section became common.

<details>
<summary>Solutions</summary>

**P1**

| Requirement | In this case |
|---|---|
| **Variation** | The moth population contains both light and dark individuals |
| **Heritability** | Colour is genetically determined and passed to offspring |
| **Differential fitness** | On soot-darkened bark, dark moths are camouflaged and light moths are conspicuous to birds, so dark moths survive to reproduce more often |

**Mode: directional selection** — one extreme of the trait distribution is favoured, so the population mean shifts toward it.

*Check.* This is the peppered moth (*Biston betularia*), and the reversal completes the argument: after clean-air legislation reduced soot from the 1960s, lichens returned, bark lightened, and the frequencies **swung back toward light** ✓. That reversal is the key evidence, because it shows the allele was not becoming intrinsically "better" — its fitness tracked the environment, and reversed when the environment did.

**P2** **Why it is wrong:** it implies the antibiotic *caused* the resistance mutations, and that individual bacteria changed in response to a threat. Neither is true. Mutations arise from copying errors and DNA damage at a roughly constant rate, **independent of whether they would be useful**. An individual bacterium does not become resistant during its lifetime.

**The correct account:** resistance mutations were already present at low frequency before the antibiotic arrived. In a population of $10^9$ cells with a per-base mutation rate near $10^{-9}$, rare resistant variants are effectively guaranteed to exist. The antibiotic then acts as a **selective agent**, killing susceptible cells and leaving the resistant ones to reproduce without competition. The *population* changed; no individual did.

**The distinguishing experiment — replica plating** (Lederberg and Lederberg, 1952):

1. Grow bacteria on a plate with **no antibiotic**, forming many separate colonies.
2. Press a velvet pad onto that plate and transfer the pattern to several new plates **containing** antibiotic.
3. Note **where** resistant colonies appear on each replica.

**The logic:** if the antibiotic *induces* resistance, resistant colonies should appear at random positions, different on each replica — each exposure is an independent event. If resistance **pre-existed**, the resistant colonies must appear at the **same positions** on every replica, because they descend from the same original colonies on the master plate, which never met the drug.

The result: the same positions every time. And the decisive step — you can then go back to the *original* untreated plate, pick the colony at that position, and culture it. It is resistant, despite having never encountered the antibiotic.

*Check.* This design is elegant because the master plate is never exposed, so any resistance found there cannot have been induced ✓ — the experiment isolates the causal question completely.

**P3** **How strong selection produces no change: stabilizing selection.**

Birth weight is under selection from **both directions at once**:

- **Too low:** poor thermoregulation, immature organs, higher infant mortality.
- **Too high:** obstructed labour, historically often fatal to both mother and infant.

Selection therefore removes individuals at both tails and favours the middle. The mean does not move — it is being actively *held* in place. The visible effect is on the **variance**, which narrows, not on the mean.

**This is the key conceptual point:** absence of change is not absence of selection. A population sitting at its optimum experiences strong selection whose entire effect is to keep it there. Stabilizing selection is probably the commonest mode in nature and the least visible, precisely because its signature is stasis.

**After Caesarean section became common:** the upper-tail penalty is largely removed. A birth weight that would once have been fatal to mother and child is now a surgical indication. The selection becomes **asymmetric** — still penalizing low birth weight, barely penalizing high — so the pressure shifts from stabilizing toward **directional**, and mean birth weight would be expected to drift upward over many generations.

*Check.* There is published evidence consistent with this — one widely discussed analysis estimated the rate of fetopelvic disproportion has risen measurably since Caesareans became routine. Two honest caveats: the effect is small and slow (human generation times are ~25 years, so even strong selection needs centuries), and birth weight is strongly influenced by maternal nutrition and health, which have changed enormously over the same period and in the same direction — so disentangling genetic change from environmental change is genuinely difficult ✓. This is a good example of a real evolutionary prediction that is hard to test cleanly.

</details>

## Flashback

**From Lesson 3.4 (The central dogma):** A single base substitution occurs in a protein-coding gene. Name the three possible outcomes and say which is most likely to be invisible to selection.

<details>
<summary>Solution</summary>

Three outcomes:

1. **Silent** — the new codon specifies the same amino acid, so the protein is unchanged.
2. **Missense** — a different amino acid is inserted; effect ranges from none to severe depending on the residue's chemistry and position.
3. **Nonsense** — a stop codon is created, truncating the protein; usually severe.

**Silent mutations are most likely to be invisible to selection**, because they produce no change in the protein and therefore no change in fitness. With no fitness effect, selection cannot see them — their frequencies change only by drift ([4.2](04-02-evolution-in-populations.md)).

*Check.* This connects directly to this lesson's central asymmetry: mutation supplies variation blindly, and selection can only act on the subset that affects reproduction ✓. It is also why silent sites are used as a molecular clock — accumulating at a roughly steady rate because nothing is filtering them — which is the basis of the sequence comparisons in [4.3](04-03-tree-of-life.md).

</details>

## Connections

- **Backward:** the variation selection acts on comes from [3.4](03-04-central-dogma.md)'s mutations and [2.5](02-05-mitosis-meiosis.md)'s recombination; heritability is [3.1](03-01-mendel-monohybrid-cross.md)'s particulate inheritance, which is what makes selection possible at all — blending would erase variation faster than selection could use it.
- **Forward:** [4.2](04-02-evolution-in-populations.md) makes this quantitative with allele frequencies and adds the other forces (drift, gene flow, mutation); [4.3](04-03-tree-of-life.md) shows the pattern that billions of years of this process left behind.
- **Sideways (medicine and agriculture):** antibiotic resistance, pesticide resistance, and cancer's evolution within a tumour are all this mechanism operating on human timescales — which is why evolutionary reasoning is a practical clinical tool, not only a historical explanation.
