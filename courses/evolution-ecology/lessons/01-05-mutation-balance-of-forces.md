# Evolution & Ecology · Lesson 1.5: Mutation & the balance of forces

> ⏱ ~15 min · Module 1: Evolutionary Mechanisms & Population Genetics · Builds on: [1.4](01-04-drift-ne-gene-flow.md), [1.1](01-01-fitness-quantitative.md) · Unlocks: 2.1 (what is a species?)

## Why this matters

[1.1](01-01-fitness-quantitative.md) established that selection removes deleterious alleles, slowly and never completely. [1.4](01-04-drift-ne-gene-flow.md) established that drift erodes variation at a rate $1/(2N_e)$ per generation. Both are destructive. Neither creates anything.

**So why is there any variation left?** Every population studied is full of it — polymorphism at thousands of loci, deleterious alleles at measurable frequencies, and in some cases alleles that are *lethal in homozygotes* sitting at frequencies of 10 percent or more. Something must be replenishing what selection and drift remove, and this lesson is about the equilibria that result.

There are two mechanisms and they are completely different. **Mutation–selection balance** explains why deleterious alleles persist at low frequency: a steady drip of new mutations replaces what selection removes. **Balancing selection** explains something stranger — alleles maintained at *high* frequency by selection itself, because the heterozygote is fittest. The second is far rarer and far more interesting, and sickle-cell haemoglobin is its textbook case.

## The idea

**Mutation–selection balance, in one sentence.** Deleterious alleles are created by mutation at rate $\mu$ per generation and removed by selection at a rate proportional to their frequency and to $s$. Where the two rates are equal, the frequency stops changing.

$$\text{input} = \mu \qquad\text{versus}\qquad \text{removal} \propto s \times (\text{frequency exposed to selection})$$

**And "frequency exposed to selection" is where dominance changes everything.** For a **recessive** allele only homozygotes are exposed, at frequency $q^2$; for a **dominant** or partially dominant allele the heterozygotes are exposed too, at frequency $2pq \approx 2q$.

$$\text{recessive: removal} \propto sq^{2} \qquad\qquad \text{dominant: removal} \propto sq$$

Setting each equal to $\mu$ gives equilibria of completely different form — $\sqrt{\mu/s}$ versus $\mu/s$ — and since $\mu$ is tiny, **a square root is enormously larger than the number itself.**

$$\textbf{Recessive deleterious alleles sit at far higher frequencies than dominant ones of equal severity.}$$

**The mutational load.** At equilibrium, the population's mean fitness is reduced by the deleterious alleles it carries. The remarkable result — Haldane's — is that **for a recessive allele the load depends only on $\mu$, not on $s$ at all.** A more severe allele is removed more efficiently and sits at a proportionally lower frequency, and the two effects cancel exactly.

**Balancing selection is the opposite kind of explanation.** Here the polymorphism is not a nuisance being replenished; it is **actively maintained**, and mutation is irrelevant to the equilibrium. Three mechanisms:

- **Overdominance (heterozygote advantage)** — $Aa$ fitter than both $AA$ and $aa$. Neither allele can be eliminated because eliminating it destroys the heterozygotes.
- **Negative frequency dependence** — rare types do better ([1.2](01-02-modes-of-selection.md)). MHC alleles, self-incompatibility alleles, prey colour morphs.
- **Spatial or temporal variation** — different alleles favoured in different patches or seasons.

**Overdominance produces an equilibrium that is stable**, in the strong sense that the population returns to it after any perturbation — unlike mutation–selection balance, which is stable only because mutation keeps pushing.

**Sickle cell is the case where the arithmetic can be checked against reality**, and it works.

## The formal version

**Mutation–selection balance, three cases.**

**Recessive ($h = 0$).** Removal rate is $sq^{2}$ (only homozygotes exposed), input $\mu$:

$$\mu = sq^{2} \quad\Longrightarrow\quad \boxed{\;\hat q = \sqrt{\frac{\mu}{s}}\;}$$

**Dominant ($h = 1$).** Every carrier is exposed; heterozygotes are frequency $\approx 2q$, and each loses fraction $s$:

$$2\mu = 2sq \quad\Longrightarrow\quad \boxed{\;\hat q = \frac{\mu}{s}\;}$$

*(Writing the mutation input per diploid genome as $2\mu$, since either allele can mutate.)*

**Partially dominant ($0 < h < 1$).** Heterozygotes bear cost $hs$ and are far commoner than homozygotes, so they dominate the removal:

$$\hat q \approx \frac{\mu}{hs}$$

**The comparison is the point.** Take $\mu = 10^{-6}$ and $s = 1$ (lethal):

| Dominance | $\hat q$ | Value |
|---|---|---|
| Recessive | $\sqrt{\mu/s}$ | $\mathbf{10^{-3}}$ |
| Dominant | $\mu/s$ | $\mathbf{10^{-6}}$ |
| Partially dominant, $h = 0.02$ | $\mu/hs$ | $5\times10^{-5}$ |

**A thousandfold difference for identical mutation rate and identical severity**, and it explains a real pattern: recessive lethal alleles are individually rare but collectively common (each of us carries a handful), while dominant lethal alleles essentially do not exist except as new mutations.

**Note the implication for $h$.** Even *very slight* dominance — $h = 0.02$, meaning heterozygotes are 2 percent less fit than normal — cuts the equilibrium frequency twentyfold below the pure-recessive value. **Most "recessive" alleles have a small but non-zero $h$**, and this is why measured frequencies of recessive disease alleles are usually below the naive $\sqrt{\mu/s}$ prediction.

**Mutational load.** Mean fitness at equilibrium relative to a mutation-free population:

$$L = 1 - \bar w$$

For a recessive allele at $\hat q = \sqrt{\mu/s}$, the frequency of affected homozygotes is $\hat q^{2} = \mu/s$, each losing fitness $s$:

$$L = s\,\hat q^{2} = s\cdot\frac{\mu}{s} = \boxed{\mu}$$

**The load equals the mutation rate and is completely independent of $s$.** *In words: it does not matter how bad the allele is — a lethal and a mildly harmful allele impose the same load, because the lethal one is held at a correspondingly lower frequency.* This is **Haldane's principle**, and it is one of the most surprising results in the field. For a dominant allele the load is $2\mu$.

**Summed over the genome, this is not a small number.** With $\sim 20{,}000$ genes and a per-gene deleterious mutation rate of $\sim 10^{-5}$, the total load is on the order of $U \approx 0.2$–1 deleterious mutations per genome per generation, giving a mean-fitness reduction of roughly $1 - e^{-U}$ — 20 to 60 percent. **How populations tolerate this is a genuine open problem** (synergistic epistasis and truncation-like selection are the leading answers).

**Overdominance.** Fitnesses $w_{AA} = 1-s$, $w_{Aa} = 1$, $w_{aa} = 1-t$:

$$\boxed{\;\hat q = \frac{s}{s+t}\;}$$

*In words: the equilibrium frequency of each allele is proportional to the selection **against the other** homozygote.* Derive it by setting $\Delta q = 0$: the allele increases when rare (because it is then almost always in a heterozygote, which is the fittest genotype) and decreases when common, so the equilibrium is **stable**.

Mean fitness at that equilibrium is

$$\bar w = 1 - \frac{st}{s+t},$$

which is **less than 1**. The population is permanently paying a **segregational load** — each generation it produces unfit homozygotes it cannot avoid, because the fittest genotype does not breed true ([genetics 1.2](../../genetics/lessons/01-02-when-dominance-breaks-down.md)). **This is the price of balanced polymorphism**, and it is why overdominance cannot be a common explanation for genome-wide variation: the load would be unbearable if thousands of loci did it.

**Interaction with drift.** Both equilibria assume selection is effective. From [1.4](01-04-drift-ne-gene-flow.md), that requires $N_e s \gg 1$. In a small population:

$$N_e s < 1 \;\Longrightarrow\; \text{the allele behaves neutrally, and } \hat q \text{ is irrelevant — drift determines its fate.}$$

**This is why small populations accumulate deleterious mutations** — mutational meltdown — and it is a central concern in conservation ([4.5](04-05-behavior-conservation.md)).

## Picture

![Left: two curves plotted against the selection coefficient s, showing the equilibrium frequency under mutation-selection balance for a recessive allele following the square root of mu over s and for a dominant allele following mu over s, on a log scale, with the recessive curve lying orders of magnitude above the dominant one throughout. Right: for overdominance, mean fitness plotted against allele frequency showing a peak at the equilibrium s over s plus t, with arrows on both sides indicating that the population returns to the peak after any perturbation, and the segregational load marked as the gap between the peak and a fitness of one.](assets/01-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — mutation–selection balance both ways).** A locus has mutation rate $\mu = 4\times10^{-6}$ per generation. (a) A recessive lethal allele ($s = 1$, $h = 0$). Find $\hat q$ and the frequency of affected individuals. (b) The same $\mu$ and $s$, but the allele is dominant. Find $\hat q$. (c) Compute the mutational load in each case and comment.

(a) $$\hat q = \sqrt{\frac{\mu}{s}} = \sqrt{4\times10^{-6}} = \mathbf{2\times10^{-3}} = 0.002 .$$

Affected homozygotes:

$$\hat q^{2} = 4\times10^{-6}, \ \text{i.e. } \mathbf{1\ \text{in}\ 250{,}000}.$$

Carriers: $2pq \approx 2(0.002) = 0.004$, or **1 in 250** — a carrier-to-affected ratio of 1000, exactly the $2/q$ relationship of [general-biology 4.2](../../general-biology/lessons/04-02-evolution-in-populations.md).

(b) $$\hat q = \frac{\mu}{s} = 4\times10^{-6}.$$

Affected individuals are the heterozygotes, at frequency $\approx 2q = 8\times10^{-6}$, or **1 in 125,000**.

**The allele frequency differs 500-fold** between the two cases, for identical mutation rate and identical severity.

(c) $$L_{\text{recessive}} = \mu = \mathbf{4\times10^{-6}}, \qquad L_{\text{dominant}} = 2\mu = \mathbf{8\times10^{-6}}.$$

**Note what the load does *not* depend on.** Change $s$ from 1 to 0.1 and the recessive equilibrium frequency rises from 0.002 to $\sqrt{4\times10^{-5}} = 0.0063$ — but the load is still exactly $\mu = 4\times10^{-6}$, because the affected frequency $\hat q^2 = \mu/s$ rose by exactly the factor that $s$ fell.

**Haldane's principle in one line: making an allele less harmful does not reduce the harm the population suffers from it.** The population's fitness cost is set by the rate at which mutations arrive, not by how bad they are — which is a genuinely counterintuitive and load-bearing result for thinking about genetic disease at a population level.

**Example 2 (why you'd care — sickle cell, and checking the theory against data).** In parts of West Africa the sickle allele $HbS$ reaches $q \approx 0.12$. The genotypes are: $HbA/HbA$ susceptible to malaria; $HbA/HbS$ resistant and healthy; $HbS/HbS$ has sickle-cell disease, historically usually fatal before reproduction. (a) Why can mutation–selection balance not explain $q = 0.12$? (b) Using $\hat q = s/(s+t)$ with $t = 1$ for the sickle homozygote, infer the selection coefficient against the normal homozygote. (c) Predict what happens to $q$ when malaria is eliminated, and estimate how fast.

(a) Under mutation–selection balance for a recessive lethal with a typical $\mu \approx 10^{-5}$:

$$\hat q = \sqrt{\frac{10^{-5}}{1}} = 3.2\times10^{-3} = 0.0032 .$$

Observed: $q = 0.12$ — **nearly 40 times higher.** To explain 0.12 by mutation alone you would need

$$\mu = s\hat q^{2} = (1)(0.12)^{2} = 0.0144,$$

a mutation rate of 1.4 percent per generation at a single locus — **a thousand times higher than any measured mutation rate anywhere.** Mutation–selection balance is decisively excluded, and the exclusion is quantitative rather than a matter of judgement.

(b) With $w_{AA} = 1-s$ (malaria-susceptible), $w_{AS} = 1$, $w_{SS} = 1-t = 0$ so $t = 1$:

$$\hat q = \frac{s}{s+t} \;\Longrightarrow\; 0.12 = \frac{s}{s+1} \;\Longrightarrow\; 0.12s + 0.12 = s \;\Longrightarrow\; s = \frac{0.12}{0.88} = \mathbf{0.136}.$$

**A 13.6 percent fitness reduction in normal homozygotes**, attributable to malaria mortality — which is entirely plausible for a region of holoendemic *falciparum* malaria, and independently consistent with epidemiological estimates of childhood malaria mortality. **The population-genetic inference and the epidemiology agree**, which is the strongest kind of confirmation available.

The segregational load:

$$\bar w = 1 - \frac{st}{s+t} = 1 - \frac{0.136 \times 1}{1.136} = 1 - 0.120 = 0.880 .$$

**The population pays a 12 percent fitness cost** to maintain this polymorphism — every generation, 1.4 percent of births ($q^2 = 0.0144$) are affected homozygotes. That is the price of the heterozygote's protection, and it is the clearest example anywhere of a population trapped at a fitness peak it cannot climb off.

(c) With malaria gone, $s \to 0$: $HbA/HbA$ is no longer disadvantaged, the heterozygote's advantage vanishes, and the equilibrium collapses to $\hat q = 0$. **$HbS$ becomes a simple recessive lethal**, and selection removes it by the reciprocal law of [1.1](01-01-fitness-quantitative.md):

$$\frac{1}{q_t} = \frac{1}{q_0} + t .$$

From $q_0 = 0.12$:

| Target $q$ | Generations | Years (~25 yr/gen) |
|---|---|---|
| 0.06 | $16.7 - 8.3 = 8$ | ~200 |
| 0.012 | $83.3 - 8.3 = 75$ | ~1900 |
| 0.0032 (the mutation–selection level) | $312 - 8 = 304$ | ~7600 |

**Fast at first, then glacially slow** — the frequency halves within a couple of centuries and then takes millennia to approach the mutation–selection floor it can never go below.

**This prediction is testable and has been tested.** African-Americans have been largely out of malarial environments for roughly 12 to 15 generations, and $HbS$ frequency in that population is around 0.04 to 0.05 against roughly 0.10 to 0.12 in the West African source populations. The reciprocal law predicts, from $q_0 = 0.12$ over 14 generations:

$$\frac{1}{q_{14}} = 8.3 + 14 = 22.3 \;\Longrightarrow\; q_{14} = 0.045 .$$

**Observed 0.04–0.05 against predicted 0.045.** The agreement is better than it has any right to be — admixture with non-African-ancestry populations also lowers the frequency and is a substantial part of the real story — but the order of magnitude and the direction are right, and it is a rare case where a population-genetic prediction can be checked against a natural experiment conducted over centuries.

## Watch out

- **You might use $\hat q = \mu/s$ for a recessive allele.** It is $\sqrt{\mu/s}$, and because $\mu$ is tiny the square root is enormously larger. Getting this wrong is off by orders of magnitude, not by a factor.
- **You might think a milder allele imposes less load.** For a recessive allele the load is exactly $\mu$, independent of $s$ — a milder allele sits at a proportionally higher frequency and the harm is identical.
- **You might treat any common deleterious allele as evidence of heterozygote advantage.** Check the arithmetic first: mutation–selection balance can support a recessive allele at $\sqrt{\mu/s}$, which for a mild allele is not that small. Balancing selection needs to be *excluded from* rather than *inferred by* elimination.
- **You might forget the segregational load.** Overdominance is not free — the population permanently produces unfit homozygotes, which is why it cannot be the general explanation for polymorphism.
- **You might apply these equilibria in a small population.** They assume $N_e s \gg 1$. When $N_e s < 1$ the allele is effectively neutral and drift, not the equilibrium, determines its fate.
- **You might expect a "recessive" allele to have $h$ exactly zero.** Most have small non-zero $h$, and even $h = 0.02$ cuts the equilibrium frequency by more than an order of magnitude below $\sqrt{\mu/s}$.

## One-liner

> Selection and drift both destroy variation, so something must resupply it — mutation does, at an equilibrium of $\sqrt{\mu/s}$ for recessives and $\mu/s$ for dominants, with a load that equals $\mu$ regardless of severity; and where a heterozygote is fittest, selection itself maintains the polymorphism at $s/(s+t)$ and pays a permanent segregational load for it.

## Problems

**P1 (🟢)** A locus has $\mu = 2\times10^{-6}$. (a) For a recessive allele with $s = 0.5$, find $\hat q$ and the frequency of affected homozygotes. (b) For a dominant allele with the same $s$, find $\hat q$. (c) Compute the load in each case.

**P2 (🟡)** At a locus, $w_{AA} = 0.7$, $w_{Aa} = 1.0$, $w_{aa} = 0.4$. (a) Identify $s$ and $t$. (b) Compute the equilibrium frequency $\hat q$. (c) Compute $\bar w$ at equilibrium and the segregational load, and explain why the population cannot escape it.

**P3 (🔴, bridges to 1.4 and to conservation)** A recessive deleterious allele has $\mu = 5\times10^{-6}$ and $s = 0.01$. (a) Compute $\hat q$ in a large population. (b) Compute $N_e s$ for populations of $N_e = 100$, $10^{4}$ and $10^{6}$, and state which force controls the allele in each. (c) A species is reduced to $N_e = 100$ and held there. Predict what happens to this allele and to the thousands of similar alleles across its genome, name the phenomenon, and explain why it is a distinct threat from inbreeding depression.

<details>
<summary>Solutions</summary>

**P1 (a)** $$\hat q = \sqrt{\frac{\mu}{s}} = \sqrt{\frac{2\times10^{-6}}{0.5}} = \sqrt{4\times10^{-6}} = \mathbf{2\times10^{-3}}.$$

$$\hat q^{2} = 4\times10^{-6}, \ \text{i.e. } \mathbf{1\ \text{in}\ 250{,}000}.$$

**(b)** $$\hat q = \frac{\mu}{s} = \frac{2\times10^{-6}}{0.5} = \mathbf{4\times10^{-6}}.$$

A **500-fold** lower frequency for identical $\mu$ and $s$.

**(c)** $$L_{\text{recessive}} = \mu = \mathbf{2\times10^{-6}}, \qquad L_{\text{dominant}} = 2\mu = \mathbf{4\times10^{-6}}.$$

Confirm the recessive case directly: affected frequency $\times$ fitness cost $= (4\times10^{-6})(0.5) = 2\times10^{-6} = \mu$ ✓ — **independent of $s$**, exactly as Haldane's principle requires.

**P2 (a)** $$w_{AA} = 1 - s = 0.7 \Rightarrow \mathbf{s = 0.3}, \qquad w_{aa} = 1 - t = 0.4 \Rightarrow \mathbf{t = 0.6}.$$

The heterozygote is fittest, so this is **overdominance**.

**(b)** $$\hat q = \frac{s}{s+t} = \frac{0.3}{0.3+0.6} = \frac{0.3}{0.9} = \mathbf{0.333}.$$

Note the direction: $q$ is the frequency of the $a$ allele, and the equilibrium is set by selection against the *other* homozygote. Since $AA$ is only mildly unfit ($s = 0.3$) while $aa$ is badly unfit ($t = 0.6$), the $a$ allele settles at the *lower* frequency of the two — one-third against two-thirds.

**(c)** At $\hat q = 1/3$, $\hat p = 2/3$: genotype frequencies $p^2 = 4/9$, $2pq = 4/9$, $q^2 = 1/9$.

$$\bar w = \tfrac49(0.7) + \tfrac49(1.0) + \tfrac19(0.4) = 0.3111 + 0.4444 + 0.0444 = \mathbf{0.800}.$$

Check against the formula: $\bar w = 1 - st/(s+t) = 1 - (0.3)(0.6)/0.9 = 1 - 0.20 = 0.800$ ✓

$$\text{segregational load} = 1 - 0.800 = \mathbf{0.200}.$$

**A 20 percent fitness reduction, permanently.**

**Why the population cannot escape it.** The fittest genotype is the **heterozygote**, and a heterozygote cannot breed true ([genetics 1.2](../../genetics/lessons/01-02-when-dominance-breaks-down.md)). $Aa \times Aa$ necessarily produces $\tfrac14 AA$ and $\tfrac14 aa$, both unfit. Every generation, Mendelian segregation regenerates the homozygotes that selection then removes.

There is no allele frequency that avoids this. Moving toward $q = 0$ eliminates the $aa$ homozygotes but converts the population to $AA$, which is 30 percent unfit; moving toward $q = 1$ does the reverse. **The maximum of $\bar w$ over $q$ is at $\hat q = 1/3$ and its value is 0.80** — the population is sitting on the highest point available to it, and that point is below 1.

**The only escapes are genuinely different mechanisms**: a duplication that lets one individual carry both alleles at separate loci (documented in some cases), or a modifier that confers the heterozygote's advantage without requiring heterozygosity. Both are rare, which is why segregational load persists wherever overdominance does.

**P3 (a)** $$\hat q = \sqrt{\frac{\mu}{s}} = \sqrt{\frac{5\times10^{-6}}{0.01}} = \sqrt{5\times10^{-4}} = \mathbf{0.0224}.$$

Affected homozygotes: $\hat q^2 = 5\times10^{-4}$, or 1 in 2000.

**(b)** $s = 0.01$:

| $N_e$ | $N_e s$ | Controlled by |
|---|---|---|
| $10^{2}$ | $\mathbf{1}$ | **borderline** — drift and selection comparable |
| $10^{4}$ | $\mathbf{100}$ | **selection**, efficiently |
| $10^{6}$ | $\mathbf{10^{4}}$ | **selection**, overwhelmingly |

**(c)** At $N_e = 100$, $N_e s = 1$ — right at the drift barrier. Selection can no longer reliably remove this allele; its frequency will wander substantially, and it may drift to appreciable frequency or even to fixation despite being deleterious.

**Now scale that up.** The genome contains thousands of loci with mildly deleterious alleles in this range, and *every one of them* becomes effectively neutral at $N_e = 100$. Each drifts independently, some rising, some falling, some fixing. Since deleterious mutations arrive continuously and cannot be removed, they **accumulate**.

**And the accumulation is self-accelerating.** Each fixed deleterious allele lowers mean fitness, which lowers survival and fecundity, which lowers $N_e$, which lowers the drift barrier further, which lets still more mildly deleterious alleles fix.

$$\text{deleterious fixation} \to \text{lower fitness} \to \text{smaller } N_e \to \text{weaker selection} \to \text{more fixation}$$

**This is mutational meltdown** (Lynch and Gabriel), and it is a positive-feedback loop with extinction at the end of it.

**Why it is distinct from inbreeding depression** — and this distinction is the point of the question:

| | Inbreeding depression | Mutational meltdown |
|---|---|---|
| Mechanism | **exposure** of existing recessive alleles in homozygotes | **fixation** of new deleterious alleles by drift |
| What changes | genotype frequencies ($F$ rises); allele frequencies unchanged | **allele frequencies** — the alleles become fixed |
| Timescale | immediate, within a generation or two | slow, over tens to hundreds of generations |
| **Reversible?** | **YES** — outcrossing restores heterozygosity immediately | **NO** — a fixed allele is fixed; the wild-type is gone |
| Fix | genetic rescue: introduce migrants ([1.4](01-04-drift-ne-gene-flow.md)) | nothing works after the fact |

**The reversibility difference is everything for conservation.** Inbreeding depression is a genotype-frequency problem, and [genetics 4.3](../../genetics/lessons/04-03-inbreeding-relatedness-structure.md) established that inbreeding leaves allele frequencies untouched — so the alleles are still there and outcrossing recovers the phenotype. The Florida panther recovered within a generation of introducing eight Texas pumas.

Mutational meltdown **removes the wild-type allele from the population entirely.** No amount of internal outcrossing can restore what is no longer present, and migrants from another population would have to be introduced at every one of the thousands of affected loci.

**Practical consequence: the two threats have different timescales and therefore different management priorities.** Inbreeding depression is the acute emergency and is fixable; meltdown is the chronic one and is not. A population held at $N_e = 100$ for a few generations can be rescued; one held there for centuries is accumulating damage that no intervention undoes. **This is why conservation genetics targets $N_e \ge 500$ — roughly the threshold at which $N_e s > 1$ for the mildly deleterious mutations that dominate the genome** — rather than merely avoiding close-kin matings.

</details>

## Flashback

**From Lesson 1.4 (drift, $N_e$ and gene flow):** A population's census sizes over four generations are 800, 40, 800, 800. (a) Compute the harmonic mean $N_e$. (b) What fraction of heterozygosity is lost across the four generations? (c) Two subpopulations exchange 2 migrants per generation. Compute the expected $F_{ST}$ and state whether they are effectively one population.

<details>
<summary>Solution</summary>

**(a)** $$N_e = \left[\frac{1}{4}\left(\frac{3}{800} + \frac{1}{40}\right)\right]^{-1} = \left[\frac{1}{4}(0.00375 + 0.025)\right]^{-1} = \left[\frac{0.02875}{4}\right]^{-1} = \frac{4}{0.02875} = \mathbf{139}.$$

Against an arithmetic mean of $(3 \times 800 + 40)/4 = 610$ — **a 4.4-fold difference from one bad generation.**

**(b)** $$\frac{H_4}{H_0} = \left(1 - \frac{1}{1600}\right)^{3}\left(1 - \frac{1}{80}\right) = (0.999375)^{3}(0.9875) = 0.99813 \times 0.9875 = 0.98566 .$$

$$\text{lost} = \mathbf{1.4\ \text{percent}},$$

of which 1.25 percentage points — nearly 90 percent of the total — came from the single bottleneck generation.

**(c)** $$F_{ST} \approx \frac{1}{1 + 4N_em} = \frac{1}{1 + 4(2)} = \frac{1}{9} = \mathbf{0.111}.$$

**Moderately differentiated, not effectively one population.** An $F_{ST}$ of 0.11 is comparable to the differentiation between human continental groups, so the two subpopulations retain real genetic distinctiveness.

The one-migrant rule gives $F_{ST} = 0.20$; two migrants brings it down to 0.11; reaching $F_{ST} < 0.05$ would require about 5 migrants per generation. **Two migrants prevents runaway divergence but does not homogenize** — which is often exactly what a manager wants, since it maintains local adaptation while avoiding drift-driven loss of diversity.

</details>

## Connections

- **Backward:** [1.1](01-01-fitness-quantitative.md)'s $\Delta q$ machinery is what these equilibria set to zero; [1.4](01-04-drift-ne-gene-flow.md)'s $N_e s$ criterion is what determines whether the equilibria apply at all.
- **Forward:** Module 1 closes here with a complete account of what maintains variation, which Module 2 then needs — [2.2](02-02-how-species-split.md) requires standing variation for populations to diverge, and [2.3](02-03-inferring-trees-dating.md) requires the neutral substitution rate from [1.4](01-04-drift-ne-gene-flow.md).
- **Sideways:** the carrier-to-affected arithmetic is [general-biology 4.2](../../general-biology/lessons/04-02-evolution-in-populations.md); sickle cell as a dominance-depends-on-the-assay case is [genetics 1.2](../../genetics/lessons/01-02-when-dominance-breaks-down.md); mutational meltdown and genetic rescue as conservation problems are [4.5](04-05-behavior-conservation.md).
