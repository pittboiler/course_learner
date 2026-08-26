# Evolution & Ecology · Lesson 4.4: Ecosystems — energy flow & nutrient cycling

> ⏱ ~15 min · Module 4: Community & Ecosystem Ecology · Builds on: [4.3](04-03-mutualism-succession-diversity.md), [4.2](04-02-predation-lotka-volterra.md) · Unlocks: 4.5 (behaviour & conservation)

## Why this matters

[general-biology 4.4](../../general-biology/lessons/04-04-taste-of-ecology.md) established the two governing facts: **energy flows through once and matter cycles indefinitely**, and roughly 10 percent of energy crosses each feeding link. This lesson makes both quantitative and asks what follows.

The reason to do it properly is that the ecosystem view **drops species identity entirely** and tracks joules and moles instead. That is a real change of level, and it buys something the community view could not give: a set of hard constraints. **Thermodynamics limits food-chain length, stoichiometry limits productivity, and residence time determines how long a pollutant stays in a system.** These are not tendencies — they are budgets, and a proposal that violates one is simply wrong.

The other reason is that the biggest applied questions in ecology — eutrophication, carbon sequestration, nitrogen pollution, biomagnification of toxins — are all ecosystem-level questions, and none of them can be answered by counting species.

## The idea

**Energy: one way through, degraded at every step.** Sunlight enters, is captured by photosynthesis, passes up through feeding, and leaves as heat. **It cannot be recycled**, because every transfer degrades some of it to heat and heat cannot be reassembled into chemical bonds ([thermodynamics-physics 2.1](../../thermodynamics-physics/syllabus.md)). The sun must keep shining.

**Matter: round and round, no source and no sink.** Carbon, nitrogen, phosphorus and water move in closed loops. **Earth is effectively closed to matter and wide open to energy**, and that asymmetry structures everything below.

**Productivity, defined precisely.**

- **GPP** — gross primary production: total carbon fixed by photosynthesis.
- **NPP** — net primary production: $\mathrm{GPP} - R_a$, what remains after the plants' own respiration. **This is what is available to everything else.**
- **NEP** — net ecosystem production: $\mathrm{NPP} - R_h$, after heterotrophic respiration. **This is whether the ecosystem is a net carbon sink or source.**

$$\mathrm{GPP} \;\xrightarrow{-\text{plant respiration}}\; \mathrm{NPP} \;\xrightarrow{-\text{decomposer and consumer respiration}}\; \mathrm{NEP}$$

**Roughly half of GPP is respired by the plants themselves**, so NPP is typically about 50 percent of GPP.

**Trophic efficiency and why the "10 percent rule" is a rough average.** Transfer efficiency between levels is the product of three separate efficiencies:

$$\text{TE} = \underbrace{\text{consumption}}_{\text{fraction eaten}} \times \underbrace{\text{assimilation}}_{\text{fraction digested}} \times \underbrace{\text{production}}_{\text{fraction into growth}}$$

Each is well below 1, and the product lands between about 2 and 20 percent depending on the system.

**And the variation is systematic rather than random**, which is the part worth knowing:

- **Endotherms have very low production efficiency** — 1 to 3 percent — because most assimilated energy is spent on maintaining body temperature. **Ectotherms** reach 10 to 40 percent.
- **Aquatic systems are more efficient** than terrestrial ones, because phytoplankton have no indigestible structural material. A cow eats grass that is largely cellulose and lignin; a copepod eats a diatom that is nearly all protein and lipid.

$$\textbf{This is why aquatic food chains are longer than terrestrial ones — the efficiency is higher, so more levels are affordable.}$$

**Ecological pyramids, and the one that can be inverted.**

| Pyramid | Terrestrial | Aquatic |
|---|---|---|
| **Energy** | always upright | **always upright** — thermodynamics forbids otherwise |
| **Numbers** | usually upright | usually upright |
| **Biomass** | upright | **often inverted** |

**An inverted biomass pyramid is not a violation of anything.** Phytoplankton have enormous turnover — they are consumed and replaced within days — so a small **standing stock** supports a large **flux**. Biomass is a stock; energy flow is a rate; and a small fast-turning stock can supply a large rate. **The energy pyramid is never inverted, and that is the one thermodynamics constrains.**

**Nutrient cycles have biological bottlenecks.** The **nitrogen** cycle's key step is **fixation** — breaking the N≡N triple bond — which is energetically brutal and is done biologically only by prokaryotes with nitrogenase. The **phosphorus** cycle has **no gaseous phase** at all, so it moves only through rock weathering, water and organisms, and is therefore the more common limiting nutrient in freshwater and in old, weathered soils.

## The formal version

**Energy transfer up a food chain.** With transfer efficiency $\varepsilon$ at each link, the energy reaching trophic level $n$ from a base of $E_0$ is

$$\boxed{\;E_n = E_0\,\varepsilon^{\,n-1}\;}$$

*In words: energy available falls geometrically with trophic level.* At $\varepsilon = 0.10$:

| Level | Fraction of NPP |
|---|---|
| 1 (producers) | 100 percent |
| 2 (herbivores) | 10 percent |
| 3 (primary carnivores) | 1 percent |
| 4 (secondary carnivores) | 0.1 percent |
| 5 | **0.01 percent** |

**Why food chains are short.** Two constraints, and they are different:

1. **The energetic constraint.** A top predator needs a minimum energy intake to sustain a viable population. Given $E_n = E_0\varepsilon^{n-1}$, the maximum $n$ is set by

$$n_{\max} = 1 + \frac{\ln(E_{\min}/E_0)}{\ln\varepsilon}.$$

*In words: more productive systems and more efficient transfers support longer chains.*

2. **The dynamic constraint.** Longer chains are less stable — perturbations propagate and amplify, and top predators with small populations are extinction-prone ([4.5](04-05-behavior-conservation.md)). Both constraints point the same way, and the observed limit of **four to five levels** is consistent with both.

**Residence time and turnover.** For a nutrient pool of size $M$ with flux $F$ in and out at steady state:

$$\boxed{\;\tau = \frac{M}{F}\;}$$

*In words: how long an average atom stays in the pool.* And the turnover rate is $1/\tau$.

This single ratio explains much of how ecosystems differ:

| System | Nutrient stock | Turnover |
|---|---|---|
| **Tropical rainforest** | mostly **in the biomass**; soil poor | very fast — decomposition is rapid, nutrients are recaptured immediately |
| **Temperate forest** | substantial in soil organic matter | moderate |
| **Boreal/tundra** | mostly in **soil and peat**; cold | very slow — decomposition is temperature-limited |

**The tropical case has a direct practical consequence.** Because the nutrients are in the trees rather than the soil, clearing a rainforest removes the nutrient capital. The soil supports crops for two or three years and then fails — which is why slash-and-burn agriculture must be rotational, and why permanent conversion of rainforest to cropland performs so poorly.

**Limiting nutrients and Liebig's law of the minimum.** Production is limited by whichever resource is scarcest **relative to requirement**, not by the one that is absolutely scarcest.

$$\text{growth} \propto \min_i\left(\frac{\text{supply}_i}{\text{requirement}_i}\right)$$

**Ecological stoichiometry** makes this quantitative. Marine plankton have a remarkably consistent elemental ratio — the **Redfield ratio**:

$$\mathrm{C} : \mathrm{N} : \mathrm{P} = 106 : 16 : 1 \ \text{(by atoms)}$$

Compare the ambient N:P ratio with 16 and you can predict which nutrient limits:

$$\text{ambient N:P} < 16 \Rightarrow \textbf{nitrogen-limited}; \qquad \text{ambient N:P} > 16 \Rightarrow \textbf{phosphorus-limited}$$

**Broadly, freshwater is phosphorus-limited and the open ocean is nitrogen-limited** — the difference being that nitrogen fixation is available in freshwater (cyanobacteria draw down atmospheric N₂ until P becomes limiting) while in the ocean fixation is constrained by iron.

**Biomagnification.** A substance that is **fat-soluble, poorly excreted and slowly degraded** is retained rather than passed on, so its concentration rises at each trophic level. If a fraction $\phi$ of the ingested contaminant is retained and transfer efficiency is $\varepsilon$:

$$\frac{\text{concentration at level } n+1}{\text{concentration at level } n} \approx \frac{\phi}{\varepsilon}$$

*In words: the contaminant magnifies whenever it is retained more efficiently than energy is.* With $\phi \approx 0.9$ and $\varepsilon = 0.10$, that is a **ninefold increase per level** — a factor of 6500 over four levels.

**This is exactly why DDT devastated raptors and left insects untouched**, and why mercury advisories target tuna and swordfish rather than sardines.

## Picture

![Left: an energy pyramid with four levels, each 10 percent of the one below, drawn to scale so the top level is barely visible, alongside an inverted biomass pyramid for an aquatic system with a small phytoplankton base supporting a larger zooplankton biomass, annotated that biomass is a stock and energy flow is a rate. Centre: the nitrogen and phosphorus cycles side by side, with nitrogen having a large atmospheric reservoir accessible only through fixation and phosphorus having no gaseous phase at all. Right: biomagnification up four trophic levels with contaminant concentration rising ninefold per level while energy falls tenfold.](assets/04-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — energy budgets and chain length).** A grassland fixes 20,000 kJ/m²/yr as GPP, with plant respiration consuming 55 percent. Transfer efficiency is 10 percent per link, and a viable top-predator population requires at least 0.5 kJ/m²/yr. (a) Compute NPP. (b) Compute the energy available at each trophic level. (c) How many trophic levels can this system support? (d) Repeat for a productive aquatic system with NPP of 9000 kJ/m²/yr and $\varepsilon = 0.20$.

(a) $$\mathrm{NPP} = \mathrm{GPP}(1 - 0.55) = 20{,}000 \times 0.45 = \mathbf{9000\ \mathrm{kJ/m^2/yr}}.$$

(b) $E_n = E_0\varepsilon^{n-1}$ with $E_0 = 9000$, $\varepsilon = 0.10$:

| Level | Energy (kJ/m²/yr) |
|---|---|
| 1 producers | 9000 |
| 2 herbivores | 900 |
| 3 primary carnivores | 90 |
| 4 secondary carnivores | 9 |
| 5 tertiary carnivores | **0.9** |
| 6 | 0.09 |

(c) The threshold is 0.5 kJ/m²/yr. Level 5 has 0.9 (above), level 6 has 0.09 (below):

$$n_{\max} = \mathbf{5\ \text{trophic levels}}.$$

Check with the formula:

$$n_{\max} = 1 + \frac{\ln(0.5/9000)}{\ln 0.10} = 1 + \frac{\ln(5.56\times10^{-5})}{-2.3026} = 1 + \frac{-9.797}{-2.3026} = 1 + 4.255 = 5.26,$$

so 5 complete levels ✓

(d) Aquatic, $E_0 = 9000$ (the same) but $\varepsilon = 0.20$:

$$n_{\max} = 1 + \frac{\ln(0.5/9000)}{\ln 0.20} = 1 + \frac{-9.797}{-1.6094} = 1 + 6.087 = \mathbf{7\ \text{levels}}.$$

**The identical productivity supports seven levels instead of five, purely because the transfer efficiency doubled.**

$$\textbf{Chain length depends on efficiency far more sensitively than on productivity.}$$

To confirm: to get from 5 levels to 7 by raising productivity instead, at $\varepsilon = 0.10$, you would need $E_0$ to rise by a factor of $0.10^{-2} = 100$. **A doubling of efficiency is worth a hundredfold increase in productivity**, which is exactly why marine food chains — with their digestible phytoplankton and ectothermic consumers — are longer than terrestrial ones despite comparable primary production.

**Example 2 (why you'd care — biomagnification, and why the advisory names tuna).** A lake receives a persistent organic pollutant. Phytoplankton contain 0.02 ppm. Transfer efficiency is 10 percent, and 90 percent of the ingested contaminant is retained at each level. (a) Compute the magnification factor per level. (b) Compute the concentration at each of four levels. (c) Explain why the pattern targets top predators and long-lived species specifically, and what properties a chemical must have.

(a) $$\text{magnification per level} = \frac{\phi}{\varepsilon} = \frac{0.90}{0.10} = \mathbf{9\times}.$$

*The logic:* a consumer must eat 10 units of prey biomass to build 1 unit of its own. It thereby ingests the contaminant from 10 units and retains 90 percent of it — concentrating it into 1 unit of tissue.

(b)

| Level | Organism | Concentration (ppm) |
|---|---|---|
| 1 | phytoplankton | 0.02 |
| 2 | zooplankton | 0.18 |
| 3 | small fish | 1.62 |
| 4 | large fish | 14.6 |
| 5 | osprey / eagle | **131** |

$$\text{total magnification, level 1 to 5} = 9^{4} = \mathbf{6561\times}.$$

**A concentration harmless in the water becomes lethal four links up**, and the increase is exponential in trophic position.

(c) **Why top predators specifically.** Three compounding reasons:

1. **The exponential.** Concentration rises as $9^{n-1}$, so trophic position is the dominant variable — far more so than exposure, diet volume, or proximity to the source.
2. **Longevity.** Top predators are typically long-lived ([3.3](03-03-life-histories-tradeoffs.md), $K$-selected), so they accumulate over decades while their prey turn over in months. **Time and trophic level multiply.**
3. **Low fecundity.** A $K$-selected species with a low reproductive rate cannot compensate for reproductive failure — and biomagnifying contaminants characteristically cause reproductive rather than acute toxicity. DDT did not poison eagles; **it thinned their eggshells**, and a species laying one or two eggs a year has no margin.

**What properties a chemical must have to biomagnify** — all four, and this is the useful predictive list:

| Property | Why |
|---|---|
| **Lipophilic** (fat-soluble) | it partitions into fat and is stored rather than excreted |
| **Poorly metabolized** | the body cannot break it down |
| **Poorly excreted** | not water-soluble, so it cannot leave in urine |
| **Environmentally persistent** | it does not degrade before being eaten |

**And the converse is the useful design principle.** A chemical that is **water-soluble** is excreted rather than stored, and does not biomagnify however toxic it is. This is why the persistent organochlorines — DDT, PCBs, dioxins — were the disaster, and why modern pesticide regulation screens explicitly for the octanol–water partition coefficient and environmental half-life.

**The mercury case adds one more mechanism worth knowing.** Inorganic mercury is not strongly lipophilic and does not biomagnify well. **Bacteria in anoxic sediments methylate it** into methylmercury, which *is* lipophilic and does biomagnify — so the hazard depends not only on how much mercury enters a system but on whether the system has the anoxic conditions that produce methylation. **This is why creating a reservoir raises fish mercury for years afterwards**: flooding vegetation creates exactly those conditions.

$$\textbf{The contaminant that matters is often not the one that was released.}$$

## Watch out

- **You might treat the 10 percent rule as a constant.** It is a rough average of a quantity that ranges from about 2 to 20 percent, and the variation is systematic — endotherms are far less efficient, aquatic systems far more.
- **You might think an inverted biomass pyramid is impossible.** It is common in aquatic systems, because biomass is a **stock** and energy flow is a **rate**, and a small fast-turning stock supports a large flux. The **energy** pyramid is never inverted.
- **You might expect a rainforest to have rich soil.** The nutrients are in the **biomass**, and turnover is fast. Clearing removes the nutrient capital, which is why cleared rainforest soil fails within a few years.
- **You might treat nutrients and energy alike.** Energy passes through **once**; matter **cycles**. Only the energy budget is thermodynamically constrained.
- **You might expect a more productive system to have a much longer food chain.** Chain length depends far more sensitively on **transfer efficiency** — doubling $\varepsilon$ is worth a hundredfold increase in productivity.
- **You might assume the most toxic chemical is the most dangerous ecologically.** Biomagnification requires lipophilicity, persistence and poor excretion. A highly toxic water-soluble compound is excreted and does not magnify.

## One-liner

> Energy passes through once and degrades, matter cycles indefinitely, and the geometric fall of $E_n = E_0\varepsilon^{n-1}$ limits food chains to four or five levels — while any contaminant retained more efficiently than energy is transferred magnifies by $\phi/\varepsilon$ at every link.

## Problems

**P1 (🟢)** An ecosystem has GPP of 15,000 kJ/m²/yr with 60 percent lost to plant respiration, and transfer efficiency of 12 percent. (a) Compute NPP. (b) Compute the energy at trophic levels 2, 3 and 4. (c) If a top predator needs 1 kJ/m²/yr, how many levels are supported?

**P2 (🟡)** A lake has a phosphorus pool of 4000 kg with an annual input and output flux of 500 kg/yr. (a) Compute the residence time. (b) Agricultural runoff doubles the input to 1000 kg/yr while output processes are unchanged in rate constant. Predict the new steady-state pool size and the time to approach it. (c) The lake's ambient N:P ratio is 25:1 by atoms. Which nutrient limits production, and what does the runoff do to that?

**P3 (🔴, bridges to 4.5 and to policy)** A persistent contaminant enters a marine food web at 0.005 ppm in phytoplankton. Transfer efficiency is 15 percent and retention is 85 percent. (a) Compute the magnification per level and the concentration at level 5. (b) The advisory limit for human consumption is 1 ppm. At which trophic level is fish unsafe to eat? (c) A policy proposal bans the contaminant entirely. Estimate the timescale over which concentrations in top predators would fall, and explain what determines it — connecting to residence time and to life history.

<details>
<summary>Solutions</summary>

**P1 (a)** $$\mathrm{NPP} = 15{,}000 \times (1 - 0.60) = \mathbf{6000\ \mathrm{kJ/m^2/yr}}.$$

**(b)** $E_n = 6000 \times (0.12)^{n-1}$:

| Level | Energy |
|---|---|
| 2 | $6000 \times 0.12 = \mathbf{720}$ |
| 3 | $720 \times 0.12 = \mathbf{86.4}$ |
| 4 | $86.4 \times 0.12 = \mathbf{10.4}$ |
| 5 | $10.4 \times 0.12 = 1.24$ |
| 6 | $0.15$ |

**(c)** Level 5 has 1.24 kJ/m²/yr (above the 1 kJ threshold); level 6 has 0.15 (below).

$$n_{\max} = \mathbf{5\ \text{levels}}.$$

Check: $n_{\max} = 1 + \ln(1/6000)/\ln(0.12) = 1 + (-8.700)/(-2.120) = 1 + 4.10 = 5.1$ ✓

**P2 (a)** $$\tau = \frac{M}{F} = \frac{4000\ \mathrm{kg}}{500\ \mathrm{kg/yr}} = \mathbf{8\ \text{years}}.$$

**(b)** Output is proportional to the pool with rate constant $k = F/M = 500/4000 = 0.125\ \mathrm{yr^{-1}}$ (equivalently $1/\tau$).

$$\frac{dM}{dt} = F_{\text{in}} - kM \;\Longrightarrow\; M_{ss} = \frac{F_{\text{in}}}{k} = \frac{1000}{0.125} = \mathbf{8000\ \mathrm{kg}}.$$

**Doubling the input doubles the steady-state pool** — as it must, since $M_{ss} = F_{\text{in}}\tau$.

*Time to approach it.* The approach is exponential with time constant $1/k = \tau = 8$ years:

$$M(t) = 8000 - 4000\,e^{-t/8}.$$

Reaching 90 percent of the way takes $\ln 10 \times 8 = 2.303 \times 8 = \mathbf{18.4\ \text{years}}$.

**The residence time sets both the equilibrium and the response time** — which is the same production-over-decay structure as mRNA and protein abundance ([molecular-cell-biology 4.3](../../molecular-cell-biology/lessons/04-03-rna-processing-mrna-life-cycle.md)), and it means a lake with a long residence time responds slowly both to pollution **and** to remediation.

**(c)** Ambient N:P is 25:1, against the Redfield ratio of 16:1.

$$25 > 16 \;\Longrightarrow\; \textbf{phosphorus-limited}.$$

There is more nitrogen available than the plankton need relative to phosphorus, so phosphorus is the binding constraint (Liebig's law of the minimum).

**What the runoff does:** if the runoff is phosphorus-rich — which agricultural runoff typically is, from fertilizer and manure — it **relieves the limiting constraint directly**, and the production response is large. Doubling the phosphorus pool roughly doubles the achievable algal biomass.

**And that is eutrophication, with the cascade following from [4.2](04-02-predation-lotka-volterra.md):**

1. **Algal blooms**, since the limiting nutrient was released.
2. **Destabilization** — the paradox of enrichment ([4.2](04-02-predation-lotka-volterra.md)) says raising $K$ with a Type II grazer destabilizes the interaction, producing boom-and-bust rather than a steady higher biomass.
3. **Anoxia** — the bloom dies, decomposers consume oxygen, and the bottom water goes hypoxic. Fish die.
4. **A possible flip to an alternative stable state** ([4.3](04-03-mutualism-succession-diversity.md)), from which reducing phosphorus back to its original level does not recover the lake, because internal phosphorus release from anoxic sediments sustains the new state.

**The management implication follows from (b):** even a complete cessation of phosphorus input takes about 18 years to move the pool most of the way back, and that is the optimistic case ignoring internal loading. **Residence time is the fundamental timescale of lake remediation.**

**P3 (a)** $$\text{magnification per level} = \frac{\phi}{\varepsilon} = \frac{0.85}{0.15} = \mathbf{5.67\times}.$$

| Level | Concentration (ppm) |
|---|---|
| 1 | 0.005 |
| 2 | 0.0283 |
| 3 | 0.161 |
| 4 | 0.911 |
| 5 | **5.16** |

Total magnification from level 1 to 5: $5.67^{4} = \mathbf{1033\times}$.

**(b)** The advisory limit is 1 ppm.

- Level 4 is at **0.911 ppm** — just below the limit.
- Level 5 is at **5.16 ppm** — five times over.

$$\textbf{Fish at trophic level 5 and above are unsafe; level 4 is marginal.}$$

**This is exactly the structure of real fish-consumption advisories.** Sardines and anchovies (level 2–3) are unrestricted; tuna, swordfish, king mackerel and shark (level 4–5) carry limits, and the limits are strictest for the highest-level species and for pregnant women and children.

Note the sharpness of the transition: **one trophic level takes the fish from safe to five times over the limit.** There is no gradual gradient in practice, which is why advisories are species-specific rather than concentration-graded.

**(c) Timescale for recovery after a total ban**, and it is set by three things acting in series:

**1. Environmental residence time.** The contaminant must leave the water and sediment. From P2's framework, $\tau = M/F$, and for a persistent organochlorine in lake or coastal sediment this is **years to decades** — sediments act as a reservoir that continues to release long after inputs stop.

**2. Turnover of the food web from the bottom up.** Even once the water is clean, the contaminant already in the food web must be flushed through. **Each trophic level clears at its own rate**, and the clearance is slowest at the top.

**3. The top predator's own lifespan and body burden.** This is usually the binding constraint. A long-lived predator that accumulated a body burden over 20 years does not shed it quickly — lipophilic compounds are stored in fat and released only slowly, and mobilizing fat (during migration, breeding, or starvation) can actually *raise* circulating concentrations. **The existing adults carry their burden until they die.**

$$\textbf{Recovery time} \approx \text{sediment residence time} + \text{one top-predator generation}$$

**Estimate: two to four decades**, and this matches the historical record precisely. DDT was banned in the United States in 1972; bald eagle and peregrine falcon populations began recovering within a decade and were delisted in 2007 and 1999 respectively — **roughly 25 to 35 years.** PCB concentrations in Great Lakes fish declined with a half-life of about 10 years after the 1979 ban and are still measurable.

**What determines it, stated as a principle:**

$$\textbf{Systems with long residence times and long-lived top predators recover slowly, and the two multiply.}$$

Three consequences for policy:

- **Prevention is enormously cheaper than remediation**, because the recovery timescale is set by physical and biological constants that no intervention can shorten.
- **Monitoring must continue for decades** after a ban — a policy evaluated after five years will appear to have failed.
- **The species that recover last are the ones the policy was for.** Top predators are both the most contaminated and the slowest to clear, which is a particularly unfortunate combination.

</details>

## Flashback

**From Lesson 4.3 (diversity indices and the species–area relationship):** A forest of 20,000 km² holds 1200 bird species, with $z = 0.20$. (a) Predict richness if 75 percent is cleared. (b) A surveyed patch has 6 species with abundances 45, 25, 15, 10, 3, 2 out of 100 — compute $H'$ and evenness. (c) Explain why the species–area prediction in (a) understates the short-term loss and overstates the long-term one.

<details>
<summary>Solution</summary>

**(a)** 75 percent cleared leaves 25 percent of the area:

$$\frac{S_{\text{new}}}{1200} = (0.25)^{0.20} = e^{0.20\ln 0.25} = e^{0.20(-1.3863)} = e^{-0.2773} = 0.7579$$

$$S_{\text{new}} = 1200 \times 0.7579 = \mathbf{909\ \text{species}},$$

a loss of 291 species, or **24 percent**, from losing three-quarters of the forest.

**(b)** Proportions: 0.45, 0.25, 0.15, 0.10, 0.03, 0.02.

$$H' = -[0.45\ln0.45 + 0.25\ln0.25 + 0.15\ln0.15 + 0.10\ln0.10 + 0.03\ln0.03 + 0.02\ln0.02]$$
$$= 0.45(0.7985) + 0.25(1.3863) + 0.15(1.8971) + 0.10(2.3026) + 0.03(3.5066) + 0.02(3.9120)$$
$$= 0.3593 + 0.3466 + 0.2846 + 0.2303 + 0.1052 + 0.0782 = \mathbf{1.404}.$$

$$J = \frac{H'}{\ln 6} = \frac{1.404}{1.7918} = \mathbf{0.784}.$$

**(c)** The two errors run in opposite directions on different timescales, which is why a single number is misleading:

**It understates the short-term loss** because clearing does not merely remove area — it **fragments** what remains. Edge effects, isolation and the loss of large-bodied wide-ranging species act immediately and are not captured by area alone ([4.3](04-03-mutualism-succession-diversity.md), Example 2). Populations also crash below viable sizes well before they disappear, so functional loss precedes recorded extinction.

**It overstates the immediate loss and understates the eventual one** because of **extinction debt.** The species–area relationship predicts an **equilibrium**, and equilibria are approached slowly. Immediately after clearing, most of the original 1200 species are still present — they simply cannot persist at the new area. **The debt is paid over decades to centuries**, so a survey conducted five years after clearing finds far more than 909 species and would wrongly conclude the impact was small.

$$\textbf{Short term: more species present than predicted, and already doomed.}$$
$$\textbf{Long term: the prediction is approached, plus fragmentation effects the model does not include.}$$

**The practical consequence** is that habitat-loss impact assessments based on short-term surveys systematically understate the damage, and that conservation action taken during the debt period — restoring connectivity, expanding reserves — can still prevent extinctions that the equilibrium calculation treats as already determined. **The debt is a window of opportunity as well as a warning.**

</details>

## Connections

- **Backward:** [general-biology 4.4](../../general-biology/lessons/04-04-taste-of-ecology.md) established energy flow and the ten-percent rule qualitatively; this lesson makes both quantitative and derives food-chain length from them. [4.2](04-02-predation-lotka-volterra.md)'s paradox of enrichment is the dynamic consequence of the nutrient loading described here.
- **Forward:** [4.5](04-05-behavior-conservation.md) closes the course by applying trophic structure, residence time and population viability to conservation decisions.
- **Sideways:** the one-way degradation of energy is the second law ([thermodynamics-physics 2.1](../../thermodynamics-physics/syllabus.md)); residence time $\tau = M/F$ is the same production-over-decay structure as [molecular-cell-biology 4.3](../../molecular-cell-biology/lessons/04-03-rna-processing-mrna-life-cycle.md) and as a well-mixed reactor in [reaction-engineering 1.4](../../reaction-engineering/lessons/01-04-batch-reactor.md); the biogeochemical cycles in detail are [climate-science](../../climate-science/syllabus.md) and [oceanography](../../oceanography/syllabus.md).
