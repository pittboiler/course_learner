# Evolution & Ecology · Lesson 4.3: Mutualism, succession & diversity

> ⏱ ~15 min · Module 4: Community & Ecosystem Ecology · Builds on: [4.2](04-02-predation-lotka-volterra.md), [4.1](04-01-competition-and-the-niche.md) · Unlocks: 4.4 (ecosystems: energy flow & nutrient cycling)

## Why this matters

[4.1](04-01-competition-and-the-niche.md) and [4.2](04-02-predation-lotka-volterra.md) covered interactions where at least one party loses. This lesson covers the ones where both gain — and mutualism turns out to be far more consequential than its treatment as an afterthought suggests. **Nearly every plant on land depends on a fungal partner; roughly 90 percent of flowering plants depend on animal pollinators; you carry more bacterial cells than human ones.** Several major evolutionary transitions, including the origin of eukaryotes, were mutualisms.

The lesson then turns to the two questions that organize community ecology: **how does a community assemble over time** (succession), and **what determines how many species it holds** (diversity). Both have textbook answers that turned out to be substantially wrong, and the corrections are more interesting than the originals.

## The idea

**Classify interactions by their sign for each party.**

| Interaction | Species 1 | Species 2 |
|---|---|---|
| **Mutualism** | $+$ | $+$ |
| **Commensalism** | $+$ | $0$ |
| **Competition** | $-$ | $-$ |
| **Predation / parasitism** | $+$ | $-$ |
| **Amensalism** | $-$ | $0$ |

**And the signs are not fixed.** The same partnership can shift along the continuum with conditions: a mycorrhizal fungus is a mutualist when soil phosphorus is low and a **parasite** when phosphorus is abundant and the plant no longer needs it but still pays the carbon cost. **Mutualism is conditional cooperation, not a property of a species pair.**

**The central problem of mutualism is cheating.** A partner that takes the benefit without paying the cost does better than one that pays — so cooperation should be invaded by defection, and the puzzle is why it is not. The stabilizing mechanisms are worth knowing because they are general:

- **Partner fidelity** — the same individuals interact repeatedly, so cheating harms the cheater's own future returns.
- **Partner choice** — the host preferentially rewards good partners and withholds from bad ones. Legumes divert oxygen away from root nodules that fix little nitrogen; figs abort fruits whose wasps failed to pollinate.
- **Vertical transmission** — the symbiont is passed to offspring, so its fitness is tied to the host's.
- **Byproduct benefits** — cooperation costs nothing extra, so there is nothing to cheat on.

**Succession: how a community assembles.** **Primary** succession starts on bare substrate with no soil — new lava, a retreating glacier, a landslide scar. **Secondary** succession starts where a disturbance removed the community but left the soil — after fire, storm, or abandoned farmland.

**Clements' original model was wrong in an instructive way.** He proposed that a community develops toward a single, predictable **climax** determined by climate, with species arriving in an obligate sequence like the development of an organism. Gleason argued instead that species respond individually to conditions and that a "community" is a coincidence of overlapping distributions.

**Gleason was substantially right**, and the modern picture keeps three mechanisms that operate simultaneously rather than one:

| Mechanism | Early species… |
|---|---|
| **Facilitation** | make conditions **better** for later ones (nitrogen fixers build soil) |
| **Tolerance** | are irrelevant — later species simply grow more slowly and win eventually |
| **Inhibition** | make conditions **worse**; later species enter only when early ones die |

**And the endpoint is not unique.** Priority effects ([4.1](04-01-competition-and-the-niche.md)) mean the same site can end in different states depending on arrival order — **alternative stable states**, with hysteresis.

**The intermediate disturbance hypothesis.** Diversity should peak at **intermediate** disturbance frequency or intensity:

- **Too little** — competitive exclusion completes and the dominant takes over ([4.1](04-01-competition-and-the-niche.md)).
- **Too much** — only the fastest colonizers survive.
- **Intermediate** — both good competitors and good colonizers persist.

**This is the same "window" as keystone predation** ([4.2](04-02-predation-lotka-volterra.md)), and for the same reason: both are mortality that prevents exclusion, and both work only within a range. **The hypothesis is intuitive, widely taught, and empirically much weaker than its fame suggests** — meta-analyses find humped diversity–disturbance relationships in only about 20 percent of studies. It is a real mechanism that is not the general explanation for diversity.

## The formal version

**Measuring diversity: three numbers, and they answer different questions.**

**Richness** $S$ — the number of species. Simple, and **strongly dependent on sample size**, since more sampling always finds more species.

**Shannon index:**

$$H' = -\sum_{i=1}^{S} p_i \ln p_i$$

where $p_i$ is the proportional abundance of species $i$. *In words: the uncertainty in the identity of a randomly drawn individual.* It is an entropy ([information-theory 1.1](../../information-theory/lessons/01-01-entropy-uncertainty-surprise.md)) — literally the same quantity — and it weights rare species relatively heavily.

**Simpson index:**

$$D = 1 - \sum_i p_i^{2}$$

*In words: the probability that two individuals drawn at random are different species.* It weights common species heavily and is insensitive to rare ones.

**Evenness:**

$$J = \frac{H'}{H'_{\max}} = \frac{H'}{\ln S}$$

ranging from 0 (one species dominates completely) to 1 (all species equally abundant).

**The three can disagree, and knowing which to use matters.** A community with many rare species and one dominant has high $S$, moderate $H'$, and low $D$ and $J$. **Report richness and evenness separately** rather than a single index that conflates them.

**Diversity partitioning.**

$$\gamma = \alpha \times \beta$$

- **$\alpha$** — diversity within one site.
- **$\beta$** — turnover between sites; how much site composition differs.
- **$\gamma$** — total diversity of the region.

*In words: regional diversity is local diversity times how much sites differ from each other.* **High $\beta$ is a conservation argument for many small reserves; high $\alpha$ with low $\beta$ argues for one large one.**

**The species–area relationship.** One of the most robust patterns in ecology:

$$\boxed{\;S = cA^{z}\;} \qquad\text{equivalently}\qquad \log S = \log c + z\log A$$

with $z$ typically **0.15 to 0.25** for samples within a continuous area, and **0.25 to 0.35** for true islands (which are more isolated and lose species faster).

**The practical consequence is severe and is the standard tool for estimating extinction from habitat loss.** With $z = 0.25$:

$$\frac{S_{\text{new}}}{S_{\text{old}}} = \left(\frac{A_{\text{new}}}{A_{\text{old}}}\right)^{0.25}$$

$$\text{lose 90 percent of area} \Rightarrow \frac{S_{\text{new}}}{S_{\text{old}}} = (0.1)^{0.25} = 0.56 \;\Longrightarrow\; \textbf{lose about 44 percent of species.}$$

**Island biogeography.** MacArthur and Wilson: species richness on an island is a dynamic equilibrium between **immigration** (falling as more species are already present) and **extinction** (rising with richness).

$$\hat S \text{ is set where the two curves cross.}$$

Two predictions, both confirmed:

- **Distance effect** — islands further from the mainland have lower immigration, hence lower $\hat S$.
- **Area effect** — larger islands have lower extinction, hence higher $\hat S$.

**And the third prediction is the one that made it a theory rather than a description: turnover.** At equilibrium, richness is constant but **species identity keeps changing** — immigration and extinction continue and balance. This was tested by Simberloff and Wilson, who fumigated small mangrove islands and watched richness return to its previous level with a **different species composition**. **The number is at equilibrium; the community is not.**

## Picture

![Left: the immigration and extinction curves of island biogeography plotted against species richness, with immigration falling and extinction rising, crossing at the equilibrium richness, and additional curves showing how a near island raises immigration and a large island lowers extinction, giving four equilibria. Centre: the species-area relationship on log-log axes as a straight line of slope z, with the habitat-loss calculation marked. Right: three hypothetical communities with the same richness but different evenness, showing that Shannon and Simpson indices separate them while richness alone does not.](assets/04-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — diversity indices that disagree).** Three communities each contain 5 species. Abundances out of 100 individuals:

| Community | sp1 | sp2 | sp3 | sp4 | sp5 |
|---|---|---|---|---|---|
| A | 20 | 20 | 20 | 20 | 20 |
| B | 60 | 20 | 10 | 5 | 5 |
| C | 92 | 2 | 2 | 2 | 2 |

(a) Compute richness for each. (b) Compute $H'$ and $J$. (c) Compute Simpson's $D$. (d) Comment on what each index captures.

(a) $$S_A = S_B = S_C = \mathbf{5} \ \text{— identical.}$$

(b) $$H'_A = -5\left(0.2\ln 0.2\right) = -5(0.2)(-1.6094) = \mathbf{1.609}, \qquad J_A = \frac{1.609}{\ln 5} = \frac{1.609}{1.609} = \mathbf{1.000}.$$

$$H'_B = -[0.6\ln0.6 + 0.2\ln0.2 + 0.1\ln0.1 + 2(0.05\ln0.05)]$$
$$= -[0.6(-0.5108) + 0.2(-1.6094) + 0.1(-2.3026) + 0.1(-2.9957)]$$
$$= 0.3065 + 0.3219 + 0.2303 + 0.2996 = \mathbf{1.158}, \qquad J_B = \frac{1.158}{1.609} = \mathbf{0.720}.$$

$$H'_C = -[0.92\ln0.92 + 4(0.02\ln0.02)] = -[0.92(-0.0834) + 0.08(-3.9120)] = 0.0767 + 0.3130 = \mathbf{0.390},$$
$$J_C = \frac{0.390}{1.609} = \mathbf{0.242}.$$

(c) $$D = 1 - \sum p_i^{2}$$

$$D_A = 1 - 5(0.04) = 1 - 0.20 = \mathbf{0.800}$$
$$D_B = 1 - [0.36 + 0.04 + 0.01 + 2(0.0025)] = 1 - 0.415 = \mathbf{0.585}$$
$$D_C = 1 - [0.8464 + 4(0.0004)] = 1 - 0.848 = \mathbf{0.152}$$

(d) Summarizing:

| | $S$ | $H'$ | $J$ | $D$ |
|---|---|---|---|---|
| A (even) | 5 | 1.609 | 1.000 | 0.800 |
| B (moderate) | 5 | 1.158 | 0.720 | 0.585 |
| C (dominated) | 5 | 0.390 | 0.242 | 0.152 |

**Richness cannot distinguish them at all** — all three are "5 species," which is why a species count alone is nearly useless for comparing communities.

$H'$ and $D$ both fall from A to C, but at different rates. **Simpson's $D$ falls more sharply** ($0.80 \to 0.15$, a factor of 5.3) than Shannon ($1.61 \to 0.39$, a factor of 4.1) — because $D$ weights common species by squaring their proportions, so a single 92-percent dominant drives it toward zero. **Shannon gives more weight to the rare species**, which is why $H'_C$ is not lower still.

**The practical rule:** if you care about the rare species — as conservation usually does — use richness and Shannon. If you care about the community's functional character, which is dominated by the abundant species, use Simpson. **And report evenness explicitly**, because it is the axis richness misses.

**Example 2 (why you'd care — habitat loss and the species–area relationship).** A tropical forest of 100,000 km² contains 5000 plant species, and $z = 0.25$. (a) Predict richness if 50 percent is cleared. (b) If 90 percent is cleared. (c) A reserve system preserves 10 percent of the area but in 20 scattered fragments rather than one block. Assess whether this is better or worse, and identify what the species–area relationship alone cannot tell you.

(a) $$\frac{S_{\text{new}}}{5000} = \left(\frac{50{,}000}{100{,}000}\right)^{0.25} = (0.5)^{0.25} = 0.8409$$

$$S_{\text{new}} = 5000 \times 0.8409 = \mathbf{4205\ \text{species}},$$

a loss of 795 species, or **16 percent** — from losing **half** the forest.

(b) $$\frac{S_{\text{new}}}{5000} = (0.1)^{0.25} = 0.5623 \;\Longrightarrow\; S_{\text{new}} = \mathbf{2812\ \text{species}},$$

a loss of 2188 species, or **44 percent** — from losing 90 percent of the area.

**The relationship is strongly decelerating**, and both directions of that are important:

- **Encouraging:** you do not lose species in proportion to area. The first half of the forest is cheap in species terms.
- **Alarming:** the last fragments are enormously valuable. Going from 10 percent remaining to 1 percent takes richness from 56 percent to $(0.01)^{0.25} = 32$ percent — **each successive tenfold reduction costs about the same absolute number of species**, so the endgame is as costly as the beginning.

(c) **Twenty fragments of 500 km² each versus one block of 10,000 km².**

*Naive application of the species–area curve, treating each fragment separately:*

$$S_{\text{fragment}} = 5000\left(\frac{500}{100{,}000}\right)^{0.25} = 5000(0.005)^{0.25} = 5000 \times 0.2659 = 1330\ \text{species per fragment}.$$

$$S_{\text{single block}} = 5000\left(\frac{10{,}000}{100{,}000}\right)^{0.25} = 5000 \times 0.5623 = 2812\ \text{species}.$$

**So one block holds 2812 species and each fragment holds 1330.** But the twenty fragments **collectively** may hold more than 2812, because different fragments contain different species — the $\beta$ diversity term.

$$\gamma_{\text{fragments}} = \alpha \times \beta$$

**And this is precisely the SLOSS debate** — Single Large Or Several Small — which was one of the most contentious arguments in conservation biology and which the species–area relationship **cannot resolve on its own.**

**What the relationship cannot tell you:**

1. **Which species.** Fragments preferentially lose large-bodied, wide-ranging, low-density species — top predators, large frugivores — regardless of total counts. **A fragmented system with the same richness has a different and functionally poorer species set.**

2. **$\beta$ diversity between fragments.** If the fragments are ecologically similar, they hold largely the same species and the sum is close to 1330, not $20 \times 1330$. If they span different soils, elevations or rainfall, $\beta$ is high and several small wins.

3. **Edge effects.** A 500 km² square has a perimeter of about 89 km against 400 km for the block — but *per unit area*, the fragments have far more edge. Edge habitat is hotter, drier, windier and more invaded, so the **effective interior area is much smaller than the mapped area**. This systematically favours the single block.

4. **Connectivity and rescue.** Isolated fragments lose species by local extinction with no recolonization ([1.4](01-04-drift-ne-gene-flow.md)'s one-migrant rule applies to species as well as alleles). Corridors change the answer entirely.

5. **Extinction debt.** The species–area relationship predicts the **eventual** equilibrium, not the immediate count. A fragment retains species for years to decades after it can no longer support them — **the debt is real and it is paid late**, which is why fragmentation studies that measure richness soon after clearing systematically understate the loss.

**The honest modern answer:** *several small* wins where $\beta$ diversity between sites is high and the species are small-bodied and sedentary; *single large* wins where interior habitat, large-bodied species, or connectivity matter. **Most real systems need both**, which is why the debate was eventually resolved by rejecting the question rather than answering it.

## Watch out

- **You might treat mutualism as a fixed property of a species pair.** The sign of the interaction shifts with conditions — mycorrhizae become parasitic when soil nutrients are abundant.
- **You might expect succession to have a single predictable endpoint.** Clements' climax model is largely wrong. Priority effects give **alternative stable states**, and facilitation, tolerance and inhibition all operate.
- **You might use richness alone to compare communities.** It is blind to evenness — three communities with identical richness can differ fivefold in Simpson's $D$ — and it depends heavily on sampling effort.
- **You might treat the intermediate disturbance hypothesis as established.** It is intuitive, widely taught, and supported in only about a fifth of studies. It is a real mechanism and not the general explanation.
- **You might read the species–area relationship as predicting immediate loss.** It predicts the **eventual** equilibrium. **Extinction debt** means the loss is paid over decades, so short-term surveys understate it.
- **You might resolve SLOSS with the species–area curve.** It cannot address which species are lost, $\beta$ diversity, edge effects, or connectivity — all of which decide the answer.

## One-liner

> Mutualisms are conditional and constantly threatened by cheating, succession has no single endpoint, and diversity needs richness *and* evenness measured separately — while the species–area relationship $S = cA^z$ predicts that losing 90 percent of a habitat eventually costs 44 percent of its species, on a debt paid over decades.

## Problems

**P1 (🟢)** A community of 4 species has abundances 50, 30, 15, 5 out of 100. (a) Compute $H'$. (b) Compute $J$. (c) Compute Simpson's $D$.

**P2 (🟡)** An island archipelago fits $S = cA^{0.3}$, and an island of 400 km² holds 60 species. (a) Find $c$. (b) Predict richness on islands of 100 km² and 1600 km². (c) A land bridge connects two 400 km² islands into one 800 km² island. Predict the new richness and compare with the sum of the two separate islands, explaining the discrepancy.

**P3 (🔴, bridges to 4.5 and to conservation)** A grassland reserve of 50 km² has been protected from fire and grazing for 40 years. Richness has fallen from 85 species to 34, with one tall grass now covering 80 percent of the area. (a) Diagnose the mechanism using [4.1](04-01-competition-and-the-niche.md) and [4.2](04-02-predation-lotka-volterra.md). (b) Compute Shannon's $H'$ and evenness before and after, assuming the remaining species are equally abundant in each case. (c) Propose a management intervention, predict its effect, and state the risk of overshooting.

<details>
<summary>Solutions</summary>

**P1 (a)** Proportions: 0.50, 0.30, 0.15, 0.05.

$$H' = -[0.5\ln0.5 + 0.3\ln0.3 + 0.15\ln0.15 + 0.05\ln0.05]$$
$$= -[0.5(-0.6931) + 0.3(-1.2040) + 0.15(-1.8971) + 0.05(-2.9957)]$$
$$= 0.3466 + 0.3612 + 0.2846 + 0.1498 = \mathbf{1.142}.$$

**(b)** $$J = \frac{H'}{\ln S} = \frac{1.142}{\ln 4} = \frac{1.142}{1.3863} = \mathbf{0.824}.$$

Reasonably even — no single species overwhelmingly dominant.

**(c)** $$D = 1 - (0.25 + 0.09 + 0.0225 + 0.0025) = 1 - 0.365 = \mathbf{0.635}.$$

*In words: two individuals drawn at random are different species 63.5 percent of the time.*

**P2 (a)** $$60 = c(400)^{0.3} \;\Longrightarrow\; c = \frac{60}{400^{0.3}} = \frac{60}{6.034} = \mathbf{9.94}.$$

**(b)** $$S(100) = 9.94(100)^{0.3} = 9.94 \times 3.981 = \mathbf{40\ \text{species}}.$$

$$S(1600) = 9.94(1600)^{0.3} = 9.94 \times 9.148 = \mathbf{91\ \text{species}}.$$

Note the decelerating relationship: a **16-fold** area increase (100 → 1600) gives only a **2.3-fold** richness increase.

**(c)** $$S(800) = 9.94(800)^{0.3} = 9.94 \times 7.432 = \mathbf{74\ \text{species}}.$$

*Compare with the two separate islands:* each holds 60, so the naive sum is 120.

$$74 \ \text{versus}\ 120 .$$

**Explaining the discrepancy.** The naive sum of 120 assumes the two islands share **no** species, which is almost certainly false. If the two islands are ecologically similar and near each other, they will hold largely overlapping species sets, and their combined richness before joining was somewhere between 60 (complete overlap) and 120 (no overlap).

$$\gamma = \alpha \times \beta$$

The species–area prediction of 74 for the joined island is a statement about the *equilibrium* richness a single 800 km² island supports. Three readings:

- **If the two islands overlapped heavily** (say they shared 50 of their 60 species, so $\gamma = 70$), then joining them and reaching 74 is a small **gain** — the larger island supports a few more species because extinction rates fall with area ([island biogeography above](#the-formal-version)).
- **If they overlapped little** ($\gamma$ near 120), then joining causes a **loss** to 74, because the combined island is one habitat where competitive exclusion can operate across the whole area, and the $\beta$ diversity that came from isolation is destroyed.
- **In either case the change is not instantaneous** — the new equilibrium is approached over decades, through the same extinction debt or colonization credit as in Example 2.

**The general point: the species–area relationship predicts richness for a given area, and says nothing about $\beta$ diversity.** Combining habitats can raise or lower total regional diversity depending on how different they were, and this is the same argument as SLOSS.

**P3 (a)** **Competitive exclusion following the removal of a disturbance/consumer regime.**

The mechanism combines both preceding lessons. Fire and grazing were acting as **density-dependent mortality falling disproportionately on the competitive dominant** — exactly the role of a keystone predator in [4.2](04-02-predation-lotka-volterra.md), and exactly what [4.1](04-01-competition-and-the-niche.md)'s coexistence conditions require. Tall grasses are competitively superior for **light** once they are allowed to accumulate biomass, and grazing and fire both remove that accumulated biomass preferentially from the tallest plants.

Remove the disturbance and the dominant's competitive superiority is fully expressed: $\alpha$ and $\beta$ now exceed the coexistence conditions, exclusion proceeds, and 51 species are lost over 40 years.

**This is also the intermediate-disturbance hypothesis observed from its low-disturbance end** — the reserve was pushed to zero disturbance and lost the species that required it.

**(b)** *Before:* 85 species, assumed equally abundant, so $p_i = 1/85$:

$$H' = \ln 85 = \mathbf{4.443}, \qquad J = \frac{4.443}{\ln 85} = \mathbf{1.000}.$$

*After:* one species at 0.80, and 33 remaining species sharing 0.20 equally, so $p_i = 0.20/33 = 0.006061$ each:

$$H' = -\left[0.80\ln 0.80 + 33(0.006061)\ln(0.006061)\right]$$
$$= -\left[0.80(-0.2231) + 0.20(-5.1059)\right] = 0.1785 + 1.0212 = \mathbf{1.200}.$$

$$J = \frac{1.200}{\ln 34} = \frac{1.200}{3.526} = \mathbf{0.340}.$$

| | $S$ | $H'$ | $J$ |
|---|---|---|---|
| Before | 85 | 4.443 | 1.000 |
| After | 34 | 1.200 | 0.340 |

**Richness fell 60 percent; Shannon diversity fell 73 percent; evenness fell 66 percent.** The community lost both species *and* the balance among those remaining — a much worse outcome than the richness figure alone conveys, and a good illustration of why evenness should be reported.

**(c) Intervention: reintroduce disturbance — prescribed burning, grazing, or mowing.**

*Predicted effect.* Fire and grazing remove accumulated biomass from the dominant tall grass, opening light gaps at ground level and releasing the suppressed species. Many grassland forbs persist as a **seed bank** for decades, so recovery can be substantial and fast — richness recovering over 3 to 10 years. Grassland restoration by reintroduced burning is well documented and works.

*Predicted mechanism, in the framework:* the intervention restores the mortality that made the dominant limit itself more than it limits the others, moving $\alpha$ and $\beta$ back inside the coexistence conditions of [4.1](04-01-competition-and-the-niche.md).

**The risk of overshooting**, which is the real content of the question:

Diversity peaks at **intermediate** disturbance ([the hypothesis above](#the-idea)). Burning or grazing too frequently or too intensely pushes past the peak and diversity falls again — now for the opposite reason:

- **Too-frequent fire** eliminates species that cannot reach reproductive maturity between fires — exactly the semelparous life-history problem of [3.3](03-03-life-histories-tradeoffs.md), where a fire return interval shorter than the time to first reproduction is fatal regardless of how many individuals survive each fire.
- **Too-intense grazing** removes palatable species entirely and leaves only grazing-tolerant or unpalatable ones, converting a diverse grassland into a different low-diversity state.
- **Both** create bare ground, which is an invasion opportunity for exotic annuals that may then establish a new alternative stable state resistant to reversal.

**The practical prescription follows from the framework rather than from tradition:** start with a disturbance regime approximating the historical one, monitor **richness and evenness together**, and adjust. And because there is a peak, **the response to increasing disturbance is non-monotonic** — a manager who sees diversity rise with burning and infers "more burning is better" will overshoot.

$$\textbf{Any intervention with an interior optimum can be overshot, and the failure looks identical to under-treatment in the raw richness number.}$$

Two further cautions worth stating: some species will not return from the seed bank after 40 years and may need reintroduction, and if the reserve has crossed into an **alternative stable state** ([the succession section above](#the-idea)) — for instance if woody encroachment has altered the soil — restoring the disturbance regime may not be sufficient on its own.

</details>

## Flashback

**From Lesson 4.2 (predation and keystone effects):** A predator–prey system has $r = 0.6$, $a = 0.004$, $\varepsilon = 0.15$, $m = 0.36$. (a) Compute both equilibrium densities and the cycle period. (b) A disease raises predator mortality to $m = 0.54$. Recompute and comment. (c) Explain how this relates to the mechanism you would invoke for a keystone predator's removal.

<details>
<summary>Solution</summary>

**(a)** $$\hat N = \frac{m}{\varepsilon a} = \frac{0.36}{0.15 \times 0.004} = \frac{0.36}{6\times10^{-4}} = \mathbf{600\ \text{prey}}.$$

$$\hat P = \frac{r}{a} = \frac{0.6}{0.004} = \mathbf{150\ \text{predators}}.$$

$$T = \frac{2\pi}{\sqrt{rm}} = \frac{6.2832}{\sqrt{0.6 \times 0.36}} = \frac{6.2832}{\sqrt{0.216}} = \frac{6.2832}{0.4648} = \mathbf{13.5\ \text{time units}}.$$

**(b)** With $m = 0.54$:

$$\hat N = \frac{0.54}{6\times10^{-4}} = \mathbf{900\ \text{prey}}, \qquad \hat P = \frac{0.6}{0.004} = \mathbf{150\ \text{predators — unchanged}}.$$

**A 50 percent increase in predator mortality raised the prey equilibrium by 50 percent and left the predator population exactly where it was** — the counterintuitive result of [4.2](04-02-predation-lotka-volterra.md), because $\hat P$ depends only on prey parameters.

$$T = \frac{6.2832}{\sqrt{0.6 \times 0.54}} = \frac{6.2832}{0.5692} = 11.0 \ \text{— the cycle also speeds up.}$$

**(c)** The connection is direct: **weakening the predator increases the prey's equilibrium density**, and if that prey is a competitive dominant, the increase drives competitive exclusion of everything else.

In the keystone case ([4.2](04-02-predation-lotka-volterra.md), P3), removing *Pisaster* let mussels expand — which this calculation quantifies. A disease that halves a sea star population does not merely reduce sea stars; it **raises the mussel equilibrium**, and the mussel is the species whose expansion causes the diversity collapse.

**This is exactly what happened in 2013–2014**, when sea star wasting disease removed *Pisaster* from much of the North American Pacific coast, and mussel beds expanded downshore in the following years — an unplanned repeat of Paine's removal experiment on a continental scale, with the same result.

**The general form of the argument:** an interaction's importance to community structure is not measured by how many individuals it kills but by **whose equilibrium density it sets** — and the equations in [4.2](04-02-predation-lotka-volterra.md) say that a predator sets its prey's density entirely.

</details>

## Connections

- **Backward:** [4.1](04-01-competition-and-the-niche.md)'s exclusion is what disturbance and predation prevent; [4.2](04-02-predation-lotka-volterra.md)'s keystone predation is the same "window" mechanism as intermediate disturbance.
- **Forward:** [4.4](04-04-ecosystems-energy-nutrients.md) drops species identity entirely and follows energy and matter through trophic levels; [4.5](04-05-behavior-conservation.md) applies the species–area relationship and extinction debt to real conservation decisions.
- **Sideways:** the Shannon index **is** the entropy of [information-theory 1.1](../../information-theory/lessons/01-01-entropy-uncertainty-surprise.md), same formula and same interpretation; alternative stable states and hysteresis are [dynamical-systems](../../dynamical-systems/syllabus.md) and [molecular-cell-biology 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md); the cheating problem in mutualism is the prisoner's dilemma of [game-theory-refresher 1.2](../../game-theory-refresher/syllabus.md).
