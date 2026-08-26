# Evolution & Ecology · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

Populations shaped by heredity, chance, and the arithmetic of birth and death.
The same handful of structures recur at every scale: a per-capita rate gives
exponential growth whether the units are alleles, individuals or species; a
delayed negative feedback oscillates; and a fixed budget divided among competing
demands is a trade-off. Use this card for the formulas, for the notation that has
to be exact ($r$ vs. $\lambda$, $F$ vs. $F_{ST}$, $D'$ vs. $r^2$), and for the
numbers worth looking up rather than half-remembering.

## Notation

| Symbol | Means | First used |
|---|---|---|
| $w$, $s$ | relative fitness; selection coefficient $s = 1-w$ | [1.1](lessons/01-01-fitness-quantitative.md) |
| $h$ | dominance coefficient — 0 recessive, ½ additive, 1 dominant | [1.1](lessons/01-01-fitness-quantitative.md) |
| $\bar w$ | mean fitness of the population | [1.1](lessons/01-01-fitness-quantitative.md) |
| $S$, $\beta$, $\gamma$ | selection differential; selection gradient; quadratic gradient | [1.2](lessons/01-02-modes-of-selection.md) |
| $\mathbf{G}$, $\mathbf{P}$ | additive genetic and phenotypic covariance matrices | [1.2](lessons/01-02-modes-of-selection.md) |
| $F$ | inbreeding coefficient / proportional heterozygote deficit | [1.3](lessons/01-03-hardy-weinberg-testable-null.md) |
| $N_e$ | effective population size | [1.4](lessons/01-04-drift-ne-gene-flow.md) |
| $H$ | heterozygosity | [1.4](lessons/01-04-drift-ne-gene-flow.md) |
| $F_{ST}$ | fraction of variation between subpopulations | [1.4](lessons/01-04-drift-ne-gene-flow.md) |
| $m$, $N_em$ | migration rate; **number** of migrants per generation | [1.4](lessons/01-04-drift-ne-gene-flow.md) |
| $\mu$, $\nu$ | mutation rate forward and reverse | [1.5](lessons/01-05-mutation-balance-of-forces.md) |
| $\hat q$ | equilibrium allele frequency | [1.5](lessons/01-05-mutation-balance-of-forces.md) |
| $RI$ | reproductive isolation, as a fraction blocked | [2.1](lessons/02-01-what-is-a-species.md) |
| $p$, $d$ | observed sequence difference; corrected substitutions per site | [2.3](lessons/02-03-inferring-trees-dating.md) |
| $\lambda$, $\mu$ (macro) | **speciation** and **extinction** rates per lineage | [2.4](lessons/02-04-macroevolution-history-of-life.md) |
| $r$, $\lambda$ (pop) | intrinsic rate of increase; finite rate $\lambda = e^{r}$ | [3.1](lessons/03-01-exponential-growth-demography.md) |
| $l_x$, $m_x$ | survivorship to age $x$; fecundity at age $x$ | [3.1](lessons/03-01-exponential-growth-demography.md) |
| $R_0$, $T$ | net reproductive rate; generation time | [3.1](lessons/03-01-exponential-growth-demography.md) |
| $K$ | carrying capacity | [3.2](lessons/03-02-logistic-growth-carrying-capacity.md) |
| $A$ | Allee threshold — an extinction boundary | [3.2](lessons/03-02-logistic-growth-carrying-capacity.md) |
| $V_{t+1}$ | residual reproductive value | [3.3](lessons/03-03-life-histories-tradeoffs.md) |
| $\bar W_g$, $\bar W_a$ | geometric and arithmetic mean fitness | [3.3](lessons/03-03-life-histories-tradeoffs.md) |
| $\alpha$, $\beta$ (comp) | competition coefficients — effect of 2 on 1, and of 1 on 2 | [4.1](lessons/04-01-competition-and-the-niche.md) |
| $a$, $\varepsilon$ (pred) | attack rate; conversion efficiency | [4.2](lessons/04-02-predation-lotka-volterra.md) |
| $H'$, $D$, $J$ | Shannon, Simpson, evenness | [4.3](lessons/04-03-mutualism-succession-diversity.md) |
| $z$ | species–area exponent | [4.3](lessons/04-03-mutualism-succession-diversity.md) |
| $\varepsilon$ (trophic) | transfer efficiency between trophic levels | [4.4](lessons/04-04-ecosystems-energy-nutrients.md) |
| $\tau$ | residence time $= M/F$ | [4.4](lessons/04-04-ecosystems-energy-nutrients.md) |
| $r$ (kin) | coefficient of relationship | [4.5](lessons/04-05-behavior-conservation.md) |

**Notation trap:** $\lambda$ is the **speciation rate** in [2.4](lessons/02-04-macroevolution-history-of-life.md) and the **finite rate of increase $e^{r}$** in [3.1](lessons/03-01-exponential-growth-demography.md). $\mu$ is the **extinction rate** in [2.4](lessons/02-04-macroevolution-history-of-life.md) and the **mutation rate** everywhere else. $\alpha$/$\beta$ are **competition coefficients** in [4.1](lessons/04-01-competition-and-the-niche.md) and **diversity components** in [4.3](lessons/04-03-mutualism-succession-diversity.md). Read from context.

## Definitions

### Relative fitness

Reproductive output scaled so the best genotype is 1. Selection responds to
**ratios**, so a declining population can still have strong selection.

$$w_i = W_i/W_{\max}, \qquad s = 1 - w$$

*Introduced:* [1.1](lessons/01-01-fitness-quantitative.md)

### Haldane's sieve

A new beneficial **recessive** mutation is invisible to selection when rare
(because $\Delta q \propto sq^{2}$), so it is lost to drift. New alleles that
sweep should therefore be dominant or additive. Does **not** apply to standing
variation, or in selfers.

*Introduced:* [1.1](lessons/01-01-fitness-quantitative.md)

### Robertson–Price identity

The selection differential **is** the covariance between relative fitness and the
trait — exact, not an approximation.

$$S = \mathrm{Cov}(w, z)$$

*Introduced:* [1.2](lessons/01-02-modes-of-selection.md)

### Direct vs. indirect selection

$S$ measures **total** selection including everything a trait correlates with;
$\boldsymbol{\beta} = \mathbf{P}^{-1}\mathbf{S}$ isolates **direct** selection.
A positive $S$ on a trait is not evidence that selection acted on that trait.

*Introduced:* [1.2](lessons/01-02-modes-of-selection.md)

### Hardy–Weinberg as a null with no history

One round of random mating restores $p^2{:}2pq{:}q^2$ from **any** starting
genotype distribution — which is why it needs no assumptions about the past. True
for autosomal loci; **false for X-linked**, where the sexes converge in a damped
oscillation.

*Introduced:* [1.3](lessons/01-03-hardy-weinberg-testable-null.md)

### Genetic drift

Sampling error in reproduction. For a **neutral** allele the fixation probability
equals its current frequency, so a new mutation fixes with probability $1/(2N)$.

*Introduced:* [1.4](lessons/01-04-drift-ne-gene-flow.md)

### The drift barrier

The controlling quantity is $N_e s$, **not $N_e$ or $s$ separately**. Below
$N_e|s| \approx 1$ an allele is effectively neutral. Since most of the genome has
$s$ near zero, **drift is the dominant force on most DNA in every species.**

*Introduced:* [1.4](lessons/01-04-drift-ne-gene-flow.md)

### The one-migrant-per-generation rule

$N_em = 1$ holds $F_{ST}$ near 0.2 and prevents drift-driven divergence. It
depends on the **absolute number** of migrants, not the rate — so an island of a
million needs the same single migrant as an island of a hundred.

*Introduced:* [1.4](lessons/01-04-drift-ne-gene-flow.md)

### Haldane's principle (mutational load)

For a recessive deleterious allele the load equals $\mu$ and is **independent of
$s$** — a milder allele sits at a proportionally higher frequency, and the two
effects cancel exactly.

*Introduced:* [1.5](lessons/01-05-mutation-balance-of-forces.md)

### Segregational load

The permanent fitness cost of balanced polymorphism: the fittest genotype is a
heterozygote and a heterozygote **cannot breed true**, so unfit homozygotes are
regenerated every generation. This is why overdominance cannot explain
genome-wide variation.

*Introduced:* [1.5](lessons/01-05-mutation-balance-of-forces.md)

### Dobzhansky–Muller incompatibility

Isolation without either lineage passing through an unfit state: ancestor $AABB$,
lineage 1 → $aaBB$, lineage 2 → $AAbb$. Each substitution is fine in **its own
background**; the hybrid contains the untested $a$–$b$ combination.

*Introduced:* [2.1](lessons/02-01-what-is-a-species.md)

### The snowball effect

Untested cross-lineage pairs grow as $k^{2}$, so incompatibilities accumulate as
the **square** of divergence time. Isolation accelerates.

*Introduced:* [2.1](lessons/02-01-what-is-a-species.md)

### Haldane's rule

When one hybrid sex is absent, rare or sterile, it is the **heterogametic** sex —
XY males in mammals and flies, ZW **females** in birds and butterflies. Explained
by recessive incompatibilities exposed in the hemizygous sex, predicting the
**large-X effect**.

*Introduced:* [2.1](lessons/02-01-what-is-a-species.md)

### Magic trait

A single trait that is simultaneously the ecological adaptation **and** the mating
cue, so recombination has no association to break. This is what makes sympatric
speciation possible, and its rarity is why sympatric speciation is rare.

*Introduced:* [2.2](lessons/02-02-how-species-split.md)

### Synapomorphy

A shared **derived** character — the only kind that is evidence for a clade.
Shared **ancestral** characters (symplesiomorphies) group nothing, because they
are shared with everything outside too.

*Introduced:* [2.3](lessons/02-03-inferring-trees-dating.md)

### Long-branch attraction

Two fast-evolving lineages accumulate chance identical changes, which parsimony
counts as synapomorphies and groups together. **More data makes it worse** —
parsimony is statistically inconsistent here. Fixed by explicit substitution
models.

*Introduced:* [2.3](lessons/02-03-inferring-trees-dating.md)

### Why a molecular clock exists

$2N\mu$ neutral mutations arise per generation and each fixes with probability
$1/(2N)$, so $k = \mu$ **exactly** — population size cancels. The clock is a
theorem for neutral sites, not an empirical regularity.

*Introduced:* [1.4](lessons/01-04-drift-ne-gene-flow.md), used in [2.3](lessons/02-03-inferring-trees-dating.md)

### Incomplete lineage sorting

Gene trees are deeper than the species tree by $\sim 2N_e$ generations and can
differ in **topology** when speciation events are close relative to $N_e$. Not
error — a real property of populations, and why species trees need many genes.

*Introduced:* [2.3](lessons/02-03-inferring-trees-dating.md)

### Mass extinction as a regime change

Not intensified background extinction: the traits that predict survival in normal
times (broad range, large populations, generalism) **stop predicting it**.
Survival becomes closer to a lottery with respect to prior adaptedness.

*Introduced:* [2.4](lessons/02-04-macroevolution-history-of-life.md)

### Red Queen (Van Valen)

Constant-rate extinction gives **exponentially distributed** species lifespans, so
extinction risk is independent of a taxon's age — taxa do not accumulate
durability, because competitors and parasites co-evolve just as fast.

*Introduced:* [2.4](lessons/02-04-macroevolution-history-of-life.md)

### Signor–Lipps effect

The last individual of a taxon is essentially never fossilized, so last
occurrences smear backward and **an abrupt extinction looks gradual**. The bias
runs one way only.

*Introduced:* [2.4](lessons/02-04-macroevolution-history-of-life.md)

### Demographic momentum

A population whose age structure is not at its stable distribution keeps growing
(or shrinking) for decades after fertility reaches replacement, because the
cohorts already born have yet to reproduce. **Works in both directions.**

*Introduced:* [3.1](lessons/03-01-exponential-growth-demography.md)

### Reproductive value

Expected future reproduction. In a Type III species a newborn has **low**
reproductive value and a survivor of the dangerous stage has high value —
so conservation effort should target the survivors, not the young.

*Introduced:* [3.1](lessons/03-01-exponential-growth-demography.md)

### Density dependence

Only **density-dependent** mortality can regulate a population. Weather and other
density-independent factors kill the same *proportion* at any density and can
only perturb.

*Introduced:* [3.2](lessons/03-02-logistic-growth-carrying-capacity.md)

### MSY is a bifurcation

At $H = rK/4$ the stable and unstable equilibria **merge** (a saddle-node), so
maximum sustainable yield has zero safety margin by construction — and above it
there is no equilibrium at all. Proportional harvesting has no such cliff.

*Introduced:* [3.2](lessons/03-02-logistic-growth-carrying-capacity.md)

### Allee effect

Below a critical density $A$, per-capita growth goes **negative** — mates cannot
be found, group defence fails. $A$ is an extinction threshold, and the logistic
model contains no representation of it.

*Introduced:* [3.2](lessons/03-02-logistic-growth-carrying-capacity.md)

### Bet-hedging

Fitness across generations **multiplies**, so selection maximizes the *geometric*
mean, which punishes variance — and a single year of zero makes it zero forever.
A strategy with a lower average but lower variance can win.

*Introduced:* [3.3](lessons/03-03-life-histories-tradeoffs.md)

### Semelparity as a corner solution

Optimal effort satisfies $-S'(R) = 1/V_{t+1}$. Semelparity is the case
$V_{t+1} \approx 0$ — **iteroparity with a worthless future** — which is why it
is favoured where survival to breed again is improbable.

*Introduced:* [3.3](lessons/03-03-life-histories-tradeoffs.md)

### Fundamental vs. realized niche

The **fundamental** niche is set by physiology alone; the **realized** niche is
what remains after competitors, predators and parasites. A species' observed
distribution is the realized niche, and the fundamental one is invisible without
removal experiments.

*Introduced:* [4.1](lessons/04-01-competition-and-the-niche.md)

### The coexistence condition

Each species must limit **itself** more than it limits the other. Necessary
condition $\alpha\beta < 1$; both individual conditions must also hold.

*Introduced:* [4.1](lessons/04-01-competition-and-the-niche.md)

### Priority effect (founder control)

When $\alpha\beta > 1$ the interior equilibrium is a **saddle** and whichever
species arrives first excludes the other — so community composition depends on
history rather than on the species' properties.

*Introduced:* [4.1](lessons/04-01-competition-and-the-niche.md)

### Paradox of enrichment

With a Type II functional response, raising $K$ moves the hump of the prey
isocline rightward until the predator isocline crosses on the unstable side.
**Adding resources destabilizes** and can drive extinction at the troughs.

*Introduced:* [4.2](lessons/04-02-predation-lotka-volterra.md)

### Keystone predation

A predator that preferentially eats the **competitive dominant** prevents
exclusion and thereby **raises** diversity — it supplies the self-limitation the
dominant lacked. Works only within a window of predation intensity.

*Introduced:* [4.2](lessons/04-02-predation-lotka-volterra.md)

### Extinction debt

The species–area relationship predicts an **equilibrium**, approached over decades
to centuries. Species persist after their habitat can no longer support them, so
short-term surveys understate loss — and the debt is also a window for
intervention.

*Introduced:* [4.3](lessons/04-03-mutualism-succession-diversity.md)

### Turnover at equilibrium

Island biogeography's third and decisive prediction: at equilibrium the **number**
of species is constant while the **identity** keeps changing. Confirmed by
Simberloff and Wilson's mangrove fumigation.

*Introduced:* [4.3](lessons/04-03-mutualism-succession-diversity.md)

### Biomagnification

A contaminant retained more efficiently than energy is transferred concentrates
at each link, by a factor $\phi/\varepsilon$. Requires **all four**: lipophilic,
persistent, poorly metabolized, poorly excreted. Water-soluble toxins do not
magnify, however toxic.

*Introduced:* [4.4](lessons/04-04-ecosystems-energy-nutrients.md)

### The extinction vortex

Small → inbred → lower fitness → smaller → faster drift. A positive feedback loop
whose only fixed point is extinction, which is why a threshold exists.

*Introduced:* [4.5](lessons/04-05-behavior-conservation.md)

### Reversible vs. irreversible genetic threats

**Inbreeding depression** is a genotype-frequency problem, reversible by
outcrossing. **Fixation of deleterious alleles by drift** is an allele-frequency
problem and is **not reversible at all** — the wild-type is gone.

*Introduced:* [4.5](lessons/04-05-behavior-conservation.md)

## Formulas and rules

### Selection at one locus

Fitness array: $w_{AA} = 1$, $w_{Aa} = 1-hs$, $w_{aa} = 1-s$.

| Quantity | Formula |
|---|---|
| Mean fitness | $\bar w = p^2w_{AA} + 2pq\,w_{Aa} + q^2w_{aa}$ |
| New frequency | $q' = \dfrac{q^{2}w_{aa} + pq\,w_{Aa}}{\bar w}$ |
| General change | $\Delta q = \dfrac{-pq\left[qs(1-h) + psh\right]}{\bar w}$ |
| Additive ($h=\tfrac12$), weak $s$ | $\Delta q \approx -\tfrac12 s\,pq$ — **maximal at $q = 0.5$** |
| Recessive ($h=0$) | $\Delta q \approx -s\,q^{2}p$ — **falls as $q^2$; ineffective when rare** |
| Time, additive | $t = \dfrac{2}{s}\ln\!\left[\dfrac{q_t(1-q_0)}{q_0(1-q_t)}\right]$ |
| **Complete selection vs. recessive** | $\dfrac{1}{q_t} = \dfrac{1}{q_0} + t$ — **each tenfold reduction takes 10× as long** |
| Fixation prob., neutral | $p$; for a new mutation $\dfrac{1}{2N}$ |
| Fixation prob., beneficial | $\approx 2s$ — **independent of $N$** |
| Time to fixation / loss | $\approx 4N_e$ / $\approx 2\ln(2N)$ generations |

*From* [1.1](lessons/01-01-fitness-quantitative.md), [1.4](lessons/01-04-drift-ne-gene-flow.md)

### Selection on a trait

| Quantity | Formula |
|---|---|
| Differential | $S = \bar z_{\text{selected}} - \bar z = \mathrm{Cov}(w,z)$ |
| Gradient | $\beta = S/\sigma_z^{2}$ — slope of relative fitness on trait |
| Response | $R = h^{2}S$ |
| Multivariate gradient | $\boldsymbol\beta = \mathbf{P}^{-1}\mathbf{S}$ |
| Multivariate response | $\Delta\bar{\mathbf z} = \mathbf{G}\boldsymbol\beta$ |
| Quadratic | $\gamma < 0$ stabilizing, $\gamma > 0$ disruptive |

**Directional moves the mean; stabilizing narrows the variance; disruptive widens it. Always report both moments.**

*From* [1.2](lessons/01-02-modes-of-selection.md)

### Testing Hardy–Weinberg

| Quantity | Formula |
|---|---|
| $\chi^2$ | $\sum (O-E)^2/E$, **1 df** for two alleles (3 classes − 2 alleles), critical 3.84 |
| $k$ alleles | $\mathrm{df} = k(k-1)/2$ |
| Effect size | $F = 1 - H_{\text{obs}}/H_{\text{exp}}$ |
| X-linked recursion | $p_m' = p_f$, $p_f' = \tfrac12(p_f+p_m)$ |
| Sex difference | $d_t = \left(-\tfrac12\right)^{t}d_0$ — halves and **flips sign** |
| Overall | $\bar p = \tfrac23 p_f + \tfrac13 p_m$, constant |

**Diagnostic:** deficit at **all** loci → inbreeding or structure (split and re-test); deficit at **one** → null alleles or selection; excess → overdominance or a scoring error.

*From* [1.3](lessons/01-03-hardy-weinberg-testable-null.md)

### Drift, $N_e$ and gene flow

| Quantity | Formula |
|---|---|
| Variance of $\Delta p$ | $pq/2N_e$ |
| Heterozygosity decay | $H_t = H_0(1 - 1/2N_e)^{t} \approx H_0e^{-t/2N_e}$ |
| Half of $H$ lost in | $\approx 1.4N_e$ generations |
| Drift vs. selection | selection wins iff $N_e\lvert s\rvert \gg 1$ |
| Neutral substitution rate | $k = 2N\mu \times \dfrac{1}{2N} = \boldsymbol{\mu}$ |
| $N_e$, unequal sexes | $\dfrac{4N_mN_f}{N_m+N_f}$ — **the rarer sex dominates** |
| $N_e$, offspring variance | $\approx \dfrac{4N}{V_k+2}$ |
| $N_e$, fluctuating | **harmonic mean** — dominated by the smallest value |
| Differentiation | $F_{ST} \approx \dfrac{1}{1+4N_em}$ |

$N_em$: 0.1 → $F_{ST} = 0.71$ · **1 → 0.20** · 5 → 0.05 · 25 → 0.01

*From* [1.4](lessons/01-04-drift-ne-gene-flow.md)

### Equilibria that maintain variation

| Situation | Equilibrium | Load |
|---|---|---|
| Mutation–selection, **recessive** | $\hat q = \sqrt{\mu/s}$ | $L = \boldsymbol\mu$, independent of $s$ |
| Mutation–selection, **dominant** | $\hat q = \mu/s$ | $L = 2\mu$ |
| Partially dominant | $\hat q \approx \mu/hs$ | — |
| Mutation only, no selection | $\hat q = \mu/(\mu+\nu)$ | — |
| **Overdominance** | $\hat q = \dfrac{s}{s+t}$ | $1 - \bar w = \dfrac{st}{s+t}$ |

At $\mu = 10^{-6}$, $s = 1$: recessive $\hat q = 10^{-3}$, dominant $\hat q = 10^{-6}$ — **a thousandfold gap.**

*From* [1.5](lessons/01-05-mutation-balance-of-forces.md)

### Speciation

| Quantity | Formula |
|---|---|
| Total isolation | $RI_{\text{total}} = 1 - \prod_i(1-RI_i)$ |
| Contribution of barrier $i$ | $RI_i\prod_{j<i}(1-RI_j)$ — **position in the sequence dominates** |
| Local adaptation vs. gene flow | maintained iff $s > m$ |
| Inside an inversion | the block needs only $\sum_i s_i > m$ |
| Incompatibilities | $\propto k^{2}$ — the snowball |

*From* [2.1](lessons/02-01-what-is-a-species.md), [2.2](lessons/02-02-how-species-split.md)

### Trees and dating

| Quantity | Formula |
|---|---|
| Rooted binary trees | $T(n) = \dfrac{(2n-3)!}{2^{n-2}(n-2)!}$ |
| Jukes–Cantor correction | $d = -\tfrac34\ln\!\left(1-\tfrac43 p\right)$ |
| **Divergence time** | $T = \dfrac{d}{2\lambda}$ — **the 2 is for BOTH lineages** |
| Coalescence correction | subtract $2N_e \times$ generation time |
| ILS discordance | $\approx \tfrac23 e^{-t/2N_e}$ |

Saturation: $p = 0.20 \to d = 0.233$ · $p = 0.40 \to 0.572$ · $p = 0.60 \to 1.207$ · **$p = 0.75 \to \infty$, no signal left.**

*From* [2.3](lessons/02-03-inferring-trees-dating.md)

### Macroevolution

| Quantity | Formula |
|---|---|
| Diversification | $dN/dt = (\lambda-\mu)N$, $r = \lambda-\mu$ |
| From a dated tree | $r \approx \ln N / t$ |
| Species lifespan | $\mathrm{Exp}$ with mean $1/\mu$; $P(t) = e^{-\mu t}$ |
| Extinction rate | E/MSY; background 0.1–1 |
| Fraction lost | $1 - e^{-\mu T}$ |

*From* [2.4](lessons/02-04-macroevolution-history-of-life.md)

### Population growth and demography

| Quantity | Formula |
|---|---|
| Exponential | $N(t) = N_0e^{rt}$; discrete $N_t = N_0\lambda^{t}$, $\lambda = e^{r}$ |
| Doubling time | $t_2 = \ln 2/r$; "rule of 70" |
| Net reproductive rate | $R_0 = \sum_x l_xm_x$ |
| Generation time | $T = \sum_x x\,l_xm_x / R_0$ |
| Growth rate | $r \approx \ln R_0 / T$ — **short $T$ raises $r$ as effectively as high $R_0$** |
| Leslie matrix | $\mathbf n_{t+1} = \mathbf L\mathbf n_t$; dominant eigenvalue $= \lambda$ |

Survivorship: **I** convex (large mammals) · **II** straight line, constant *rate* (memoryless) · **III** concave (fish, insects, plants).

*From* [3.1](lessons/03-01-exponential-growth-demography.md)

### Logistic growth and harvesting

| Quantity | Formula |
|---|---|
| Logistic | $dN/dt = rN(1-N/K)$ |
| Solution | $N(t) = \dfrac{K}{1 + \left(\frac{K-N_0}{N_0}\right)e^{-rt}}$ |
| Max growth at | $N^{*} = K/2$ |
| **MSY** | $rK/4$ — and it sits at a **saddle-node** |
| Stability | $f'(0) = r > 0$ unstable; $f'(K) = -r < 0$ stable |
| Symmetry | time from $a$ to $K/2$ = time from $K/2$ to $K-a$ |
| Proportional harvest | $\hat N = K(1 - h/r)$ — **no bifurcation, no cliff** |
| Allee | $dN/dt = rN(1-N/K)(N/A - 1)$; $A$ is an extinction threshold |

*From* [3.2](lessons/03-02-logistic-growth-carrying-capacity.md)

### Life histories

| Quantity | Formula |
|---|---|
| Optimal effort | $-S'(R_t) = 1/V_{t+1}$ |
| Lack's clutch | maximize $n\,s(n)$ — **overpredicts**, ignores $V_{t+1}$ |
| With cost | $n^{*}$ declines linearly in $V$ |
| Geometric mean | $\bar W_g = \left(\prod_t W_t\right)^{1/T} \approx \bar W_a - \dfrac{\sigma^{2}}{2\bar W_a}$ |
| Number–size | $n = B/s$ — shape of $s(e)$ decides, not the trade-off itself |

**Terminal investment:** $V_{t+1}$ falls with age, so old individuals should breed harder — and they do.

*From* [3.3](lessons/03-03-life-histories-tradeoffs.md)

### Competition

| Quantity | Formula |
|---|---|
| Model | $\dfrac{dN_1}{dt} = r_1N_1\dfrac{K_1 - N_1 - \alpha N_2}{K_1}$ |
| Isocline 1 | $N_2 = (K_1 - N_1)/\alpha$; intercepts $K_1$ and $K_1/\alpha$ |
| **Coexistence** | $\alpha < K_1/K_2$ **and** $\beta < K_2/K_1$; hence $\alpha\beta < 1$ |
| Equilibria | $\hat N_1 = \dfrac{K_1-\alpha K_2}{1-\alpha\beta}$, $\hat N_2 = \dfrac{K_2-\beta K_1}{1-\alpha\beta}$ |
| Invasion criterion | species 1 invades iff $K_1 > \alpha K_2$ |
| Chesson | coexistence iff niche difference > fitness difference |

**$\alpha\beta < 1$ is necessary, not sufficient. Positive equilibrium densities do not imply stability — check whether $\alpha\beta \gtrless 1$.**

*From* [4.1](lessons/04-01-competition-and-the-niche.md)

### Predation

| Quantity | Formula |
|---|---|
| Model | $dN/dt = rN - aNP$, $dP/dt = \varepsilon aNP - mP$ |
| **Equilibria** | $\hat N = \dfrac{m}{\varepsilon a}$ (predator params), $\hat P = \dfrac{r}{a}$ (prey params) |
| Period | $T = 2\pi/\sqrt{rm}$ |
| Type II response | $f(N) = \dfrac{aN}{1+ahN}$, maximum $1/h$ |
| Stability with Type II | crossing **right** of the hump stable; **left** unstable |

**Helping the prey produces more predators. Killing predators raises the prey equilibrium and leaves the predator population unchanged.**

*From* [4.2](lessons/04-02-predation-lotka-volterra.md)

### Diversity

| Quantity | Formula |
|---|---|
| Shannon | $H' = -\sum p_i\ln p_i$ — literally entropy; weights rare species |
| Simpson | $D = 1 - \sum p_i^{2}$ — weights common species |
| Evenness | $J = H'/\ln S$ |
| Partition | $\gamma = \alpha \times \beta$ |
| **Species–area** | $S = cA^{z}$; $z$ 0.15–0.25 continuous, 0.25–0.35 islands |
| Habitat loss | $S_{\text{new}}/S_{\text{old}} = (A_{\text{new}}/A_{\text{old}})^{z}$ |

At $z = 0.25$: lose 50 percent of area → **16 percent** of species · lose 90 percent → **44 percent** · lose 99 percent → **68 percent**.

*From* [4.3](lessons/04-03-mutualism-succession-diversity.md)

### Ecosystems

| Quantity | Formula |
|---|---|
| Production | $\mathrm{NPP} = \mathrm{GPP} - R_a$; $\mathrm{NEP} = \mathrm{NPP} - R_h$ |
| Energy at level $n$ | $E_n = E_0\varepsilon^{n-1}$ |
| Max chain length | $n_{\max} = 1 + \dfrac{\ln(E_{\min}/E_0)}{\ln\varepsilon}$ |
| Residence time | $\tau = M/F$; steady state $M_{ss} = F_{\text{in}}\tau$ |
| Redfield ratio | C:N:P $= 106:16:1$; ambient N:P $<16$ → N-limited, $>16$ → P-limited |
| Biomagnification | $\phi/\varepsilon$ per level |

**Transfer efficiency is 2–20 percent, and the variation is systematic: endotherms 1–3 percent production efficiency, ectotherms 10–40; aquatic more efficient than terrestrial, which is why marine food chains are longer.**

*From* [4.4](lessons/04-04-ecosystems-energy-nutrients.md)

### Behaviour and conservation

| Quantity | Formula |
|---|---|
| **Hamilton's rule** | $rB > C$ |
| Marginal value theorem | $g'(t^{*}) = \dfrac{g(t^{*})}{T+t^{*}}$ — leave when marginal = average |
| Prey choice | include a type based only on encounter with **better** types (zero–one rule) |
| Inbreeding rate | $\Delta F = 1/(2N_e)$ |
| Interior area, circular | $A_{\text{int}} = \pi\left(\sqrt{A/\pi} - d\right)^{2}$ |
| **50/500 rule** | $N_e = 50$ short-term; $N_e \approx 1000$ long-term (revised up) |
| Census equivalent | $N_e/N \approx 0.1$, so $N \approx 10{,}000$ |

Relatedness: identical twins 1 · full sibs and parent–offspring $\tfrac12$ · half sibs, uncle–niece, grandchild $\tfrac14$ · first cousins $\tfrac18$. Haplodiploid full sisters $\tfrac34$.

*From* [4.5](lessons/04-05-behavior-conservation.md)

### Numbers worth having

| Quantity | Value |
|---|---|
| Human per-base mutation rate | $1.2\times10^{-8}$ per generation |
| Human $N_e$ (long-term) | ~10,000 |
| Human $F_{ST}$, continental | 0.10–0.15 |
| Human–chimp sequence divergence | ~1.2 percent |
| Genes discordant with the species tree (human/chimp/gorilla) | ~30 percent |
| Mean species lifespan | a few million years |
| End-Permian marine genera lost | ~81 percent |
| Recovery time after a mass extinction | 5–10 Myr |
| Background extinction | 0.1–1 E/MSY |
| Current extinction rate | 100–1000× background |
| Trophic transfer efficiency | 2–20 percent, ~10 average |
| Food-chain length | 4–5 levels |
| NPP as a fraction of GPP | ~50 percent |
| Angiosperm speciation involving polyploidy | ~15 percent |
| Human generation time | ~25 years |

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| That selection follows from variation + heredity + differential reproduction; the evidence for common descent | [general-biology 4.1](../general-biology/lessons/04-01-natural-selection.md) |
| Hardy–Weinberg derivation, the five assumptions, carrier arithmetic, drift/bottleneck/founder vocabulary | [general-biology 4.2](../general-biology/lessons/04-02-evolution-in-populations.md) |
| Reading a phylogeny; clades; homology vs. analogy | [general-biology 4.3](../general-biology/lessons/04-03-tree-of-life.md) |
| Energy flow, the ten-percent rule, nutrient cycles at intro level | [general-biology 4.4](../general-biology/lessons/04-04-taste-of-ecology.md) |
| Meiosis, recombination, chromosomes | [general-biology 2.5](../general-biology/lessons/02-05-mitosis-meiosis.md) |
| Mendelian transmission and dominance | [genetics 1.1](../genetics/lessons/01-01-mendels-laws-probability.md) · [1.2](../genetics/lessons/01-02-when-dominance-breaks-down.md) |
| Mutation classes, rates, the frame rule, CpG hotspots | [genetics 3.2](../genetics/lessons/03-02-mutation.md) |
| Inbreeding coefficient $F$, path counting, $F_{ST}$, Wahlund, $N_e$ from a breeding perspective | [genetics 4.3](../genetics/lessons/04-03-inbreeding-relatedness-structure.md) |
| Heritability, variance partition, $R = h^2S$ from the breeder's side | [genetics 4.1](../genetics/lessons/04-01-quantitative-traits-heritability.md) · [4.2](../genetics/lessons/04-02-response-to-selection-qtl.md) |
| Linkage, recombination frequency, inversions as recombination suppressors | [genetics 2.2](../genetics/lessons/02-02-linkage-recombination.md) · [2.4](../genetics/lessons/02-04-chromosomal-mutations.md) |
| Hemizygosity and the X (for Haldane's rule) | [genetics 2.1](../genetics/lessons/02-01-chromosomal-basis-sex-linkage.md) |
| Linkage disequilibrium and its decay | [genetics 4.4](../genetics/lessons/04-04-linkage-disequilibrium-gwas.md) |
| ODEs: separable equations, equilibria, stability, phase planes, saddle-node, limit cycles | [calc-refresher 2.2](../calc-refresher/lessons/02-02-integration-techniques.md) · [dynamical-systems 1.3](../dynamical-systems/lessons/01-03-trace-determinant-classification.md) · [3.1](../dynamical-systems/lessons/03-01-saddle-node-transcritical.md) · [2.3](../dynamical-systems/lessons/02-03-limit-cycles.md) |
| Eigenvalues and eigenvectors (for Leslie matrices) | [linalg-refresher](../linalg-refresher/syllabus.md) |
| Probability: binomial, Poisson, exponential, chi-square, normal tails, regression | [prob-stat-refresher](../prob-stat-refresher/syllabus.md) |
| Multiple regression and the omitted-variable problem | [econometrics](../econometrics/syllabus.md) |
| Entropy (the Shannon index **is** entropy) | [information-theory 1.1](../information-theory/lessons/01-01-entropy-uncertainty-surprise.md) |
| Evolutionarily stable strategies as game theory | [grad-game-theory 6.4](../grad-game-theory/lessons/06-04-evolutionary-game-theory.md) |
| The geometric-mean / Kelly argument in finance | [mathematical-finance 3.4](../mathematical-finance/lessons/03-04-merton-optimal-consumption-portfolio.md) |
| Mass action and saturating kinetics | [reaction-engineering 1.1](../reaction-engineering/lessons/01-01-rate-of-reaction-rate-law.md) · [biochemistry 2.2](../biochemistry/lessons/02-02-michaelis-menten-kinetics.md) |
| The second law (why energy flows one way) | [thermodynamics-physics](../thermodynamics-physics/syllabus.md) |
| Delayed negative feedback and bistability as circuit motifs | [molecular-cell-biology 2.4](../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md) |
| Tree-search heuristics, substitution models, imputation | [computational-biology](../computational-biology/syllabus.md) |

## Pitfalls

### Selection

- Fitness is **reproductive output**, not health or vigour, and selection responds to **ratios** — a declining population can have strong selection. *([1.1](lessons/01-01-fitness-quantitative.md))*
- Selection is **fastest at intermediate frequency** for an additive allele, and nearly **zero for a rare recessive** in both directions — Haldane's sieve. *([1.1](lessons/01-01-fitness-quantitative.md))*
- A lethal recessive **cannot be eliminated**: $1/q$ rises by exactly one per generation, so each tenfold reduction takes ten times as long. *([1.1](lessons/01-01-fitness-quantitative.md))*
- **Report the variance as well as the mean** — stabilizing and disruptive selection leave $S = 0$. *([1.2](lessons/01-02-modes-of-selection.md))*
- $S$ includes selection on everything a trait correlates with; only $\boldsymbol\beta$ isolates direct selection. *([1.2](lessons/01-02-modes-of-selection.md))*
- A well-fitted trait may be a **by-product** or a **constraint**, not an adaptation — a functional story is not a test. *([1.2](lessons/01-02-modes-of-selection.md))*
- Under **negative frequency dependence** mean fitness need not increase, and the fitness-landscape picture stops applying. *([1.2](lessons/01-02-modes-of-selection.md))*

### Drift and equilibria

- Use **1 df** for a two-allele Hardy–Weinberg test, and report $F$ as the effect size — with large $N$ trivial deviations are highly significant. *([1.3](lessons/01-03-hardy-weinberg-testable-null.md))*
- Most Hardy–Weinberg rejections are **null alleles or structure**, not selection. Selection is locus-specific; genome-wide deviations have genome-wide causes. *([1.3](lessons/01-03-hardy-weinberg-testable-null.md))*
- One generation of random mating restores equilibrium for **autosomal** loci only — X-linked loci converge in a damped oscillation over several generations. *([1.3](lessons/01-03-hardy-weinberg-testable-null.md))*
- Drift dominates whenever $N_e\lvert s\rvert < 1$, which is **most of the genome in every species**. *([1.4](lessons/01-04-drift-ne-gene-flow.md))*
- $N_e$ is set by the **harmonic mean** over generations, so one bottleneck determines it for a long time afterwards. *([1.4](lessons/01-04-drift-ne-gene-flow.md))*
- A beneficial mutation fixes with probability only $\approx 2s$, **independent of population size** — most are lost early. *([1.4](lessons/01-04-drift-ne-gene-flow.md))*
- One migrant per generation suffices because $N_em$ is an **absolute number**, not a rate. *([1.4](lessons/01-04-drift-ne-gene-flow.md))*
- For a recessive allele $\hat q = \sqrt{\mu/s}$, **not** $\mu/s$ — the square root is enormously larger. *([1.5](lessons/01-05-mutation-balance-of-forces.md))*
- A **milder** allele imposes the **same** load, because it sits at a proportionally higher frequency. *([1.5](lessons/01-05-mutation-balance-of-forces.md))*
- Do not infer heterozygote advantage from a common deleterious allele without checking whether mutation–selection balance suffices. *([1.5](lessons/01-05-mutation-balance-of-forces.md))*

### Speciation and phylogeny

- Species concepts are **tools with domains**, not competing truths; the BSC is the sharpest and applies to the smallest fraction of life. *([2.1](lessons/02-01-what-is-a-species.md))*
- Hybridization does not make two lineages one species — ecological separation maintains distinctness through gene flow. *([2.1](lessons/02-01-what-is-a-species.md))*
- A barrier's **contribution** depends on its position in the sequence, so an early weak barrier outweighs a late strong one. *([2.1](lessons/02-01-what-is-a-species.md), [2.2](lessons/02-02-how-species-split.md))*
- Sympatric speciation is hard because **recombination breaks the ecology–preference association every generation** — magic traits and inversions are the ways round it. *([2.2](lessons/02-02-how-species-split.md))*
- A **broad** $F_{ST}$ peak means suppressed recombination (an inversion), not many selected sites. *([2.2](lessons/02-02-how-species-split.md))*
- Reproductive character displacement is not proof of reinforcement — differential fusion and ecological displacement give the same pattern. *([2.2](lessons/02-02-how-species-split.md))*
- Only **shared derived** characters group taxa. *([2.3](lessons/02-03-inferring-trees-dating.md))*
- **Do not drop the 2** in $T = d/2\lambda$ — it doubles every date. *([2.3](lessons/02-03-inferring-trees-dating.md))*
- A high bootstrap value measures consistency, not truth: long-branch attraction produces **high support for the wrong tree**, and more data raises it. *([2.3](lessons/02-03-inferring-trees-dating.md))*
- A gene tree is not a species tree — deeper by $\sim 2N_e$ generations, and sometimes a different topology. *([2.3](lessons/02-03-inferring-trees-dating.md))*
- A raw fossil diversity curve is diversity **times sampling**; and Signor–Lipps makes every abrupt extinction look gradual. *([2.4](lessons/02-04-macroevolution-history-of-life.md))*
- $\lambda$ and $\mu$ separate poorly from a phylogeny of living species — the fossil record measures extinction, a tree infers it badly. *([2.4](lessons/02-04-macroevolution-history-of-life.md))*

### Populations

- $\lambda = e^{r}$: stability is $r = 0$ but $\lambda = 1$. *([3.1](lessons/03-01-exponential-growth-demography.md))*
- $R_0 > 1$ is a **per-generation** statement; current growth also depends on age structure. *([3.1](lessons/03-01-exponential-growth-demography.md))*
- **Demographic momentum** means the next 40–60 years are largely already determined — and it works in both directions. *([3.1](lessons/03-01-exponential-growth-demography.md))*
- In a Type III species a **newborn has low reproductive value** — target the survivors, not the young. *([3.1](lessons/03-01-exponential-growth-demography.md))*
- $K$ is not a fixed property of a habitat; it depends on climate, other species, and the population's own effects. *([3.2](lessons/03-02-logistic-growth-carrying-capacity.md))*
- **MSY is a bifurcation** — a target with zero safety margin. Harvest a fixed *fraction* instead. *([3.2](lessons/03-02-logistic-growth-carrying-capacity.md))*
- Stable catch statistics are not a stable stock: **landings measure fishing, not fish**. *([3.2](lessons/03-02-logistic-growth-carrying-capacity.md))*
- The logistic contains **no Allee effect**, so it systematically understates extinction risk at low density. *([3.2](lessons/03-02-logistic-growth-carrying-capacity.md))*
- Selection maximizes the **geometric** mean across generations — one year of zero is unrecoverable. *([3.3](lessons/03-03-life-histories-tradeoffs.md))*
- "Few offspring" is a **purchase**, not a deficiency; and $r$/$K$ selection is a correlation, not a dichotomy. *([3.3](lessons/03-03-life-histories-tradeoffs.md))*
- Ageing needs no purpose — it follows from the **declining force of selection with age**. *([3.3](lessons/03-03-life-histories-tradeoffs.md))*

### Communities and ecosystems

- $\alpha\beta < 1$ is **necessary, not sufficient**; and positive equilibrium densities do not imply stability. *([4.1](lessons/04-01-competition-and-the-niche.md))*
- A species' distribution is its **realized** niche — the fundamental one is invisible without removal experiments. *([4.1](lessons/04-01-competition-and-the-niche.md))*
- The "ghost of competition past" explains any pattern and is therefore not a test — use a null model. *([4.1](lessons/04-01-competition-and-the-niche.md))*
- Lotka–Volterra's cycles are **neutrally stable** and therefore explain nothing; real cycles need a mechanism that sets the amplitude. *([4.2](lessons/04-02-predation-lotka-volterra.md))*
- $\hat N$ depends only on **predator** parameters and $\hat P$ only on **prey** parameters — helping the prey produces more predators. *([4.2](lessons/04-02-predation-lotka-volterra.md))*
- **Enrichment destabilizes** with a Type II response; and a keystone predator *raises* diversity. *([4.2](lessons/04-02-predation-lotka-volterra.md))*
- Monitor **variance**, not just the mean — rising variance and autocorrelation precede a bifurcation. *([4.2](lessons/04-02-predation-lotka-volterra.md))*
- Mutualism is **conditional** — the sign flips with conditions. *([4.3](lessons/04-03-mutualism-succession-diversity.md))*
- Succession has **no single endpoint**; priority effects give alternative stable states. *([4.3](lessons/04-03-mutualism-succession-diversity.md))*
- **Richness alone is blind to evenness** and depends on sampling effort — report both. *([4.3](lessons/04-03-mutualism-succession-diversity.md))*
- The intermediate disturbance hypothesis is supported in only ~20 percent of studies. *([4.3](lessons/04-03-mutualism-succession-diversity.md))*
- The species–area relationship predicts the **eventual** equilibrium — extinction debt is paid over decades. *([4.3](lessons/04-03-mutualism-succession-diversity.md))*
- An **inverted biomass pyramid** is normal in water; the **energy** pyramid never is. *([4.4](lessons/04-04-ecosystems-energy-nutrients.md))*
- Chain length depends far more on **transfer efficiency** than on productivity — doubling $\varepsilon$ is worth a hundredfold in NPP. *([4.4](lessons/04-04-ecosystems-energy-nutrients.md))*
- A rainforest's nutrients are in the **biomass**, not the soil. *([4.4](lessons/04-04-ecosystems-energy-nutrients.md))*
- The most toxic chemical is not the most dangerous ecologically — biomagnification needs lipophilicity **and** persistence **and** poor excretion. *([4.4](lessons/04-04-ecosystems-energy-nutrients.md))*
- An animal in a **poor** habitat should stay **longer** in each patch, not shorter. *([4.5](lessons/04-05-behavior-conservation.md))*
- Haplodiploidy is a facilitator of eusociality, not its cause — termites and mole-rats are diploid. *([4.5](lessons/04-05-behavior-conservation.md))*
- **$N_e$, not census size**, and it is dominated by the rarer breeding sex. *([4.5](lessons/04-05-behavior-conservation.md))*
- **Inbreeding depression is reversible; drift-fixed alleles are not.** Rank interventions by which threat they address. *([4.5](lessons/04-05-behavior-conservation.md))*
- Use a PVA to **rank management options**, not to produce an absolute extinction probability. *([4.5](lessons/04-05-behavior-conservation.md))*
