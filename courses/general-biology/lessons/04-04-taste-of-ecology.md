# General Biology · Lesson 4.4: A taste of ecology

> ⏱ ~15 min · Module 4: Evolution & the diversity of life · Builds on: [2.3](02-03-photosynthesis.md), [4.1](04-01-natural-selection.md) · Unlocks: end of course

## Why this matters

Every previous lesson looked inward — into cells, molecules, genomes. Ecology looks outward, at organisms in relation to each other and to their surroundings. It is where the whole course cashes out: photosynthesis becomes the base of a food web, respiration becomes the leak that limits its height, and natural selection becomes the mechanism by which species partition a habitat.

It is also the level at which biology becomes a public question. Every argument about climate, fisheries, extinction and land use is an argument about the material in this lesson.

## The idea

Two quantities move through an ecosystem, and they behave completely differently. **Getting that distinction right is most of ecology.**

**Energy flows through, once.** It enters as sunlight, is captured by photosynthesis ([2.3](02-03-photosynthesis.md)), passes up through feeding, and leaves as heat. It cannot be recycled, because every transfer degrades some of it to heat and heat cannot be reassembled into chemical bonds. **The sun must keep shining or the whole thing stops.**

**Matter cycles round, indefinitely.** The carbon in you was in the atmosphere, in a plant, in something else's body. Carbon, nitrogen, phosphorus and water move in loops with no external supply and no external sink. Earth is effectively closed to matter and wide open to energy, and that asymmetry drives everything below.

**The consequence of one-way energy: transfers are expensive.** Only about 10 percent of the energy at one feeding level ends up in the next. The rest is spent on the organism's own respiration, lost as heat, or never eaten at all. Ten percent per step compounds brutally:

$$1000 \to 100 \to 10 \to 1$$

**That is why food chains are short.** Four or five levels exhausts the supply — a sixth-level predator would have a thousandth of a percent of the original energy to live on, and there is simply not enough biomass to sustain a viable population. **The length of a food chain is set by thermodynamics, not by biology's imagination.**

The same arithmetic explains why a hectare of grain feeds roughly ten times as many people as the same hectare converted to beef, and why large predators are always rare — a fact that makes them the first species lost when habitat shrinks.

**Every species has a job, and no two can have the same one.** A **niche** is the full description of how an organism makes a living: what it eats, where and when, what eats it, what conditions it tolerates. Two species with identical niches in the same place cannot coexist — one will out-compete the other. So coexisting similar species always turn out to differ somewhere, and the differences are frequently the product of selection acting to reduce competition.

## The formal version

**Levels of organization**, each the subject of its own questions:

$$\text{organism} \to \text{population} \to \text{community} \to \text{ecosystem} \to \text{biosphere}$$

A **population** is one species in one area ([4.2](04-02-evolution-in-populations.md)); a **community** is all the interacting populations; an **ecosystem** adds the non-living environment.

**Trophic levels:**

| Level | Name | Role |
|---|---|---|
| 1 | **Producers** (autotrophs) | make organic matter from $\ce{CO2}$, usually by photosynthesis |
| 2 | Primary consumers | herbivores |
| 3 | Secondary consumers | carnivores eating herbivores |
| 4 | Tertiary consumers | carnivores eating carnivores |
| — | **Decomposers** | break down dead matter at every level, returning nutrients |

**Decomposers are not a level but a return path.** They are what closes the matter cycle; without them, nutrients would be locked in corpses and the system would halt within a few generations.

**The ten percent rule.** Roughly 10 percent of the energy at one trophic level is incorporated into the next:

$$E_{n+1} \approx 0.1\,E_n \;\Longrightarrow\; E_n \approx 0.1^{\,n-1}E_1$$

*In words: each step up costs an order of magnitude.* The lost 90 percent goes to the organism's own respiration ([2.2](02-02-cellular-respiration.md)), to indigestible material, and to organisms that die uneaten. The figure varies — closer to 20 percent in some aquatic systems, nearer 1 percent in others — but the order of magnitude is what matters. See [ten percent rule](../reference.md#ten-percent-rule).

**Biomass pyramids** follow directly: each level supports roughly a tenth the biomass of the one below. (Marine plankton systems can appear inverted at an instant in time, because the producers are tiny and turn over so fast that their standing biomass is small while their *productivity* is enormous — a good reminder that a snapshot of biomass is not the same as a rate of energy flow.)

**Population growth.** Two models bracket reality:

$$\textbf{Exponential:}\quad \frac{dN}{dt} = rN \qquad\qquad \textbf{Logistic:}\quad \frac{dN}{dt} = rN\left(1 - \frac{N}{K}\right)$$

with $N$ the population size, $r$ the per-capita growth rate, and $K$ the **carrying capacity** — the population the environment can sustain.

*In words: exponential growth assumes unlimited resources and cannot last; logistic growth slows as the population approaches what the environment can support.* The bracketed factor is a brake that approaches zero as $N \to K$. Real populations show exponential growth briefly — a new colonization, a recovery — then something like logistic behaviour, often overshooting and oscillating. See [logistic growth](../reference.md#logistic-growth).

**Species interactions:**

| Interaction | Species 1 | Species 2 | Example |
|---|---|---|---|
| **Competition** | − | − | two birds after the same seeds |
| **Predation** | + | − | fox and rabbit |
| **Parasitism** | + | − | tapeworm and host |
| **Mutualism** | + | + | pollinator and flower |
| **Commensalism** | + | 0 | barnacle on a whale |

**The competitive exclusion principle:** two species cannot coexist indefinitely on identical niches in the same place. The better competitor eliminates the other.

The interesting consequence is what happens instead. Coexisting similar species usually show **resource partitioning** — dividing the resource in space, time, or kind. Where that partitioning is caused by selection reducing overlap, the species become *more* different where they coexist than where either lives alone, which is called **character displacement** and is a directly testable prediction of the principle.

**Biogeochemical cycles.** Carbon moves between atmosphere, organisms, soil and ocean — photosynthesis pulls it down, respiration and combustion return it. Nitrogen is abundant as $\ce{N2}$ but useless to most organisms until **nitrogen-fixing bacteria** convert it to ammonia, making them a bottleneck the entire biosphere depends on.

**Human beings have altered both cycles more than any other species.** Fossil-fuel combustion returns carbon that photosynthesis removed over hundreds of millions of years, on a timescale of centuries; industrial nitrogen fixation now roughly matches the natural biological rate.

## Picture

![An energy pyramid with producers at the base holding a thousand units, primary consumers a hundred, secondary consumers ten and tertiary consumers one, showing about ten percent passing up each level while the rest is lost as heat and waste, with notes on why food chains are short and why eating plants feeds more people](assets/04-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — follow the energy).** A field's producers capture 20,000 kJ per square metre per year. Estimate the energy available to secondary and tertiary consumers.

Applying 10 percent per step:

| Level | Energy (kJ per m² per year) |
|---|---|
| Producers | 20,000 |
| Primary consumers | 2,000 |
| **Secondary consumers** | **200** |
| **Tertiary consumers** | **20** |

**A tertiary consumer has 0.1 percent of what the plants captured.** A fifth level would leave 2 kJ — enough for essentially nothing.

*Check.* The general formula $E_n = 0.1^{n-1}E_1$ gives $E_4 = 0.001 \times 20{,}000 = 20$ ✓. Compare a large predator's needs: a lynx requires several hundred kilojoules per day, so 20 kJ per m² per year means a single animal needs a territory of many hectares. **The ten percent rule sets territory size**, and therefore how many predators a landscape can hold — which is why top predators are the first species lost when habitat is fragmented.

**Example 2 (why you'd care — two ways to see the same arithmetic).**

**Food production.** Growing grain and eating it directly, against feeding it to cattle and eating the cattle: the second route inserts an extra trophic step, costing about 90 percent. A hectare of cropland feeding people directly supports **roughly ten times** as many as the same hectare producing beef.

This is not an argument that everyone should stop eating meat — much grazing land cannot grow crops, livestock convert inedible cellulose into protein, and there are cultural and nutritional considerations. But **the thermodynamic accounting is not negotiable**, and it explains why meat is land-expensive wherever it is grain-fed, and why global dietary shifts have such large land-use consequences.

**Biomagnification, which runs the arithmetic in reverse.** A persistent, fat-soluble toxin — DDT, mercury, PCBs — is not metabolized or excreted. Energy decreases tenfold at each step, but the toxin is *retained*. So the toxin's concentration per unit body mass **multiplies** by roughly ten at each level:

| Level | Energy | DDT concentration |
|---|---|---|
| Water | — | 0.000003 ppm |
| Plankton | high | 0.04 ppm |
| Small fish | 10% | 0.5 ppm |
| Large fish | 1% | 2 ppm |
| **Fish-eating birds** | **0.1%** | **25 ppm** |

That is roughly a **ten-million-fold** concentration from water to bird. DDT at those levels disrupts calcium metabolism, so eggshells thin and break under the incubating parent — which is what nearly eliminated bald eagles, peregrine falcons and ospreys before DDT was banned in the United States in 1972. The populations have since recovered.

**The same mechanism operating today** sets mercury advisories for tuna and swordfish: long-lived predatory fish at high trophic levels accumulate methylmercury from everything they have ever eaten. **Ecology's arithmetic is why a public-health rule about tuna exists** — and it is exactly the ten percent rule, read from the other end.

## Watch out

- **You might say energy cycles through an ecosystem.** **Matter** cycles; **energy flows through and leaves as heat.** It is the single most important distinction in ecology, and it follows from thermodynamics, not from biology.
- **You might treat the ten percent rule as precise.** It is an order-of-magnitude heuristic that varies from about 1 to 20 percent. Its value is that it explains why chains are short, not that it predicts a number.
- **You might expect exponential growth to continue.** It never does. Every population meets some limit — food, space, predation, disease — and the logistic model's brake is what the limit looks like mathematically.
- **You might think a niche is a place.** A habitat is a place; a niche is a *role* — the whole way of making a living, including diet, timing, tolerances and predators.
- **You might assume competitive exclusion means similar species never coexist.** They coexist constantly, by partitioning the resource. The principle forbids *identical* niches, and what you observe is the partitioning it forces.
- **You might expect biomass pyramids always to be upright.** Aquatic systems can look inverted because the tiny producers turn over so fast; the *energy* pyramid is never inverted.

## One-liner

> Energy enters once and leaves as heat, losing about 90 percent at every step, so food chains are short and predators rare — while matter cycles indefinitely, and a niche is a job that no two species can hold at once.

## Problems

**P1 (🟢)** Producers in an ecosystem capture 50,000 kJ per square metre per year. Estimate the energy reaching tertiary consumers, and state the assumption you used.

**P2 (🟡)** Explain why an ecosystem can support many more herbivores than carnivores, using the ten percent rule. Why does this also make top predators especially vulnerable to habitat loss?

**P3 (🔴)** A persistent fat-soluble pesticide enters a lake at 0.000003 ppm in the water. Explain why fish-eating birds show concentrations near 25 ppm while energy *decreases* up the same chain, and identify the two properties a chemical must have to biomagnify.

<details>
<summary>Solutions</summary>

**P1** Applying roughly 10 percent per trophic transfer:

| Level | Energy (kJ per m² per year) |
|---|---|
| Producers (1) | 50,000 |
| Primary consumers (2) | 5,000 |
| Secondary consumers (3) | 500 |
| **Tertiary consumers (4)** | **50** |

$$E_4 = 0.1^{3} \times 50{,}000 = 50\ \mathrm{kJ\ m^{-2}\ yr^{-1}}$$

**Assumption:** that about 10 percent of the energy at each level is incorporated into the next — with the remaining 90 percent lost to respiration, indigestible material and organisms that die uneaten.

*Check.* Three transfers give a factor of $10^{-3}$, so tertiary consumers get 0.1 percent of primary production ✓. Worth flagging: the 10 percent figure is an order-of-magnitude heuristic. At 20 percent efficiency the answer would be $0.008\times50{,}000 = 400$ kJ — eight times larger. The conclusion that survives regardless is that the number is *small*, which is what limits chain length.

**P2** **Why herbivores outnumber carnivores.** Herbivores feed at level 2 and receive about 10 percent of what producers captured. Carnivores feed at level 3 and receive about 10 percent of *that* — roughly 1 percent of primary production. With a tenth of the energy available, and comparable per-individual requirements, the environment supports on the order of a tenth as many carnivores.

The effect compounds: each additional level costs another factor of ten, which is why tertiary consumers are rarer still and why chains rarely exceed four or five levels.

**Why top predators are especially vulnerable to habitat loss** — three reinforcing consequences:

1. **They need enormous territories.** Since only about 0.1 percent of primary production reaches them, a single individual requires the output of a very large area. Fragmenting a landscape into patches smaller than one territory makes it uninhabitable for them even if the total area is unchanged.
2. **Their populations are small to begin with**, so they are far more exposed to genetic drift and to chance extinction from disease or a bad year ([4.2](04-02-evolution-in-populations.md)) — small populations are fragile for statistical reasons alone.
3. **They sit at the top of every chain below them.** Any disruption at a lower level propagates upward and is amplified by the same factor of ten at each step.

*Check.* This matches what conservation biology observes — large carnivores are consistently among the first species lost from shrinking habitats, and reserve design is driven by predator territory size rather than by total area ✓.

**P3** **Why the two quantities move in opposite directions.** Energy and a persistent toxin are subject to completely different accounting.

**Energy is consumed.** Most of what an organism eats is respired to power its own metabolism ([2.2](02-02-cellular-respiration.md)) and leaves as heat. Only about 10 percent is retained as new body mass to be eaten by the next level. So energy is destroyed as it passes and decreases tenfold per step.

**The toxin is not consumed.** Being fat-soluble it is stored in tissue, and being persistent it is neither metabolized nor excreted. So essentially **all** of the toxin an organism ever eats stays in its body.

Now put them together. A predator eats roughly ten times its own mass in prey over its life. It retains about 10 percent of that mass as body tissue but **100 percent of the toxin**. So the toxin is packed into a tenth as much tissue:

$$\text{concentration multiplies by} \approx \frac{100\%\ \text{toxin retained}}{10\%\ \text{mass retained}} = 10\times \text{per level}$$

Over four transfers that is $10^4$, and combined with each organism's lifetime accumulation the observed factor from water to bird reaches roughly $10^7$.

**The two required properties:**

1. **Fat-soluble (lipophilic), not water-soluble.** A water-soluble compound is excreted in urine and never accumulates. Fat-solubility means it partitions into adipose tissue and stays. This is [1.1](01-01-chemistry-of-life.md)'s hydrophobic/hydrophilic distinction determining an environmental outcome.
2. **Persistent — resistant to metabolic breakdown.** A compound the liver can degrade never builds up, however fat-soluble it is.

*Check.* The properties predict correctly which chemicals cause the problem: DDT, PCBs and methylmercury are all fat-soluble and metabolically stable, and all biomagnify ✓; by contrast, many modern pesticides are designed to be water-soluble or rapidly degraded precisely so that they do not ✓. Note the design principle — the fix is chemical, at the source, because once a compound has both properties no ecological intervention can stop the concentration.

</details>

## Flashback

**From Lesson 3.4 (The central dogma):** A single base is deleted from the middle of a protein-coding gene. Explain the effect on the protein and why it is more severe than a substitution.

<details>
<summary>Solution</summary>

The deletion causes a **frameshift**. The ribosome reads the message in fixed triplets from the start codon, so removing one base shifts every downstream base one position forward. Every codon after the deletion is re-cut and misread, producing a completely different amino acid sequence from that point on. The original stop codon is no longer in frame, so translation typically runs on until it meets a premature stop by chance — giving a truncated, garbled, non-functional protein.

**Why it is worse than a substitution:** a substitution changes at most **one** codon, so the effect is bounded — often nothing at all (silent), sometimes one altered amino acid (missense). A frameshift corrupts **everything downstream**, so the damage scales with how much of the gene remains after the deletion point.

*Check.* The rule follows: an indel is damaging unless its length is a multiple of three, which preserves the reading frame and removes or adds whole amino acids ✓. Bringing it back to this lesson — such mutations supply the variation that selection acts on ([4.1](04-01-natural-selection.md)), and frameshifts are the class most reliably removed by it, which is why surviving indels in coding regions are strongly biased toward multiples of three.

</details>

## Connections

- **Backward:** producers run [2.3](02-03-photosynthesis.md)'s photosynthesis and everything above them runs [2.2](02-02-cellular-respiration.md)'s respiration — the 90 percent lost at each step is respiration's heat; niches are partitioned by [4.1](04-01-natural-selection.md)'s selection acting to reduce competition.
- **Forward:** this closes the course. The natural continuations are [`evolution-ecology`](../../evolution-ecology/syllabus.md), which takes both halves of Module 4 much deeper, and [`molecular-cell-biology`](../../molecular-cell-biology/syllabus.md), which reopens Modules 1 to 3 at full mechanistic depth.
- **Sideways (dynamical systems):** the logistic equation is one of the most-studied equations in applied mathematics — its discrete version is the standard route into chaos, showing how a simple population model produces period doubling and unpredictability. See [`dynamical-systems` 5.2](../../dynamical-systems/lessons/05-02-logistic-map-period-doubling.md).
