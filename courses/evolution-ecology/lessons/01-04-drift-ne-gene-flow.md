# Evolution & Ecology · Lesson 1.4: Drift, effective population size & gene flow

> ⏱ ~15 min · Module 1: Evolutionary Mechanisms & Population Genetics · Builds on: [1.3](01-03-hardy-weinberg-testable-null.md), [1.1](01-01-fitness-quantitative.md) · Unlocks: 1.5 (mutation & the balance of forces)

## Why this matters

[general-biology 4.2](../../general-biology/lessons/04-02-evolution-in-populations.md) named drift and gave the vocabulary — bottleneck, founder effect, "matters most in small populations." This lesson turns that into numbers, and the numbers overturn several things the vocabulary suggests.

**Drift is not a weak version of selection; it is a competing force with a definite strength**, and there is a clean criterion for which wins. It is not "drift matters when populations are small" — it is $N_e s$ versus 1, and since most of the genome has $s$ near zero, **drift is the dominant force acting on most of your DNA.** That single realization is the foundation of the neutral theory and of every method that reads history out of a genome.

The second surprise is gene flow. The amount of migration needed to keep two populations genetically similar is not a large fraction — it is **about one migrant per generation, regardless of population size**, which is one of the most counterintuitive and practically important results in the field.

## The idea

**Drift is sampling error in reproduction.** Each generation is a finite sample of gametes from the previous one, and a finite sample does not exactly reproduce the parental frequencies — the same reason 100 coin flips rarely give exactly 50 heads.

**Three consequences follow immediately, and each is quantitative:**

1. **Allele frequencies wander**, with variance inversely proportional to population size.
2. **Heterozygosity decays**, because wandering eventually hits 0 or 1 and stays there.
3. **Alleles are lost or fixed at random**, with fixation probability equal to current frequency.

**That third fact is the one worth pausing on.** For a *neutral* allele, the probability it eventually reaches fixation is simply its current frequency:

$$P(\text{fixation}) = p$$

*In words: every copy of a neutral allele in the population is equally likely to be the ancestor of all future copies.* A new neutral mutation, present in one copy out of $2N$, therefore fixes with probability $1/(2N)$ — and this trivial-looking statement produces the most important result in molecular evolution ([2.3](02-03-inferring-trees-dating.md)).

**Drift versus selection: the criterion.** Selection changes frequency by roughly $sp q$ per generation; drift changes it by roughly $\sqrt{pq/2N_e}$. Comparing:

$$\text{selection dominates when } \; N_e |s| \gg 1, \qquad \text{drift dominates when } \; N_e|s| \ll 1 .$$

$$\boxed{\;\text{The controlling quantity is } N_e s, \text{ not } N_e \text{ or } s \text{ separately.}\;}$$

**This is the "drift barrier."** An allele with $s = 10^{-4}$ is under effective selection in a population of $10^{6}$ and is effectively neutral in a population of $10^{3}$. **The same mutation is beneficial in one species and invisible in another**, purely because of population size — which is why bacteria (huge $N_e$) have compact, streamlined genomes and vertebrates (small $N_e$) accumulate introns, transposons and other mildly deleterious clutter that selection cannot see.

**Effective population size is almost always much smaller than census size.** $N_e$ is the size of an idealized population that would drift at the observed rate, and real populations depart from the ideal in every direction: unequal sex ratios, variance in offspring number, and — most severely — fluctuations over time.

**Gene flow homogenizes, and it needs less migration than you would guess.** The equilibrium differentiation between subpopulations exchanging migrants is

$$F_{ST} \approx \frac{1}{1 + 4N_e m}$$

and $N_e m$ is the **absolute number of migrants per generation**, not the fraction. So a single migrant per generation holds $F_{ST}$ near 0.2 whether the populations number a hundred or a million.

## The formal version

**Variance of allele frequency change.** In a population of $N$ diploids, the $2N$ gametes are a binomial sample:

$$\mathrm{Var}(\Delta p) = \frac{p(1-p)}{2N_e}$$

*In words: the standard deviation of one generation's drift is $\sqrt{pq/2N_e}$.* At $p = 0.5$ and $N_e = 50$, that is $\sqrt{0.25/100} = 0.05$ — a 5 percent wobble per generation, which compounds fast.

**Decay of heterozygosity.** Each generation, heterozygosity falls by a fraction $1/(2N_e)$:

$$\boxed{\;H_t = H_0\left(1 - \frac{1}{2N_e}\right)^{t} \approx H_0\,e^{-t/2N_e}\;}$$

*In words: heterozygosity decays exponentially with a time constant of $2N_e$ generations.* A population of 50 loses about 1 percent of its heterozygosity per generation and half of it in 69 generations.

**Fixation probability and time.**

| Quantity | Neutral allele | New beneficial allele ($s \ll 1$) |
|---|---|---|
| Fixation probability | $p$; for a new mutation, $\dfrac{1}{2N}$ | $\approx 2s$ |
| Mean time to fixation (given it fixes) | $\approx 4N_e$ generations | $\approx \dfrac{2\ln(2N)}{s}$ |
| Mean time to loss | $\approx 2\ln(2N)$ generations | — |

**Two things to notice.** First, $P_{\text{fix}} \approx 2s$ for a beneficial allele is **independent of population size** — a mutation with $s = 0.01$ fixes with probability about 2 percent whether the population is a thousand or a billion. Even strongly beneficial mutations are usually lost, and lost early, to the sampling noise of their first few generations.

Second, **the time to fixation ($4N_e$) is far longer than the time to loss ($2\ln 2N$)**. Most neutral alleles disappear quickly; the rare survivors take a very long time. This asymmetry is what makes coalescent trees look the way they do.

**The neutral substitution rate — a result that seems too good to be true.** In a diploid population of size $N$ with neutral mutation rate $\mu$ per gamete per generation:

$$\text{new mutations per generation} = 2N\mu, \qquad P(\text{each fixes}) = \frac{1}{2N}$$

$$\boxed{\;k = 2N\mu \times \frac{1}{2N} = \mu\;}$$

**The population size cancels exactly.** The rate at which neutral mutations become fixed differences between species equals the mutation rate, and *nothing else* — not population size, not generation time in the simplest formulation, not demographic history.

*In words: big populations make more mutations but fix a smaller fraction of each; the two effects cancel perfectly.* **This is the molecular clock**, it is the theoretical foundation of [2.3](02-03-inferring-trees-dating.md), and it is why Kimura's neutral theory was taken seriously despite being so counterintuitive.

**Effective population size, three ways it shrinks:**

$$\text{unequal sex ratio:} \quad N_e = \frac{4N_mN_f}{N_m+N_f}$$

$$\text{variance in offspring number } V_k: \quad N_e \approx \frac{4N}{V_k + 2}$$

$$\text{fluctuating size:} \quad N_e = \text{harmonic mean} = \left(\frac{1}{t}\sum_{i=1}^{t}\frac{1}{N_i}\right)^{-1}$$

**The harmonic mean is the brutal one.** It is dominated by the smallest term, so **a single bad generation determines $N_e$ for a long time afterwards** — which is exactly what a bottleneck is, expressed as a formula.

**Gene flow: the island model.** With a fraction $m$ of each subpopulation replaced by migrants from a common pool each generation, drift pushing populations apart and migration pulling them together balance at

$$F_{ST} \approx \frac{1}{1 + 4N_e m}$$

| $N_e m$ | $F_{ST}$ | Interpretation |
|---|---|---|
| 0.1 | 0.71 | strongly differentiated |
| **1** | **0.20** | **substantial but connected** |
| 5 | 0.05 | nearly panmictic |
| 25 | 0.01 | effectively one population |

**The one-migrant-per-generation rule.** $N_e m = 1$ — one successful migrant per generation — is enough to prevent populations from diverging by drift alone. **It depends on the absolute number, not the rate**, so an island of a million needs the same single migrant as an island of a hundred.

**The caveat that matters for conservation:** one migrant per generation prevents *drift-driven* divergence but does not prevent **local adaptation** from being swamped, and it does not by itself rescue a small population from inbreeding depression. The rule is often quoted as a management target and is really a lower bound on connectivity, not a sufficient condition for anything.

## Picture

![Left: ten replicate allele-frequency trajectories starting at 0.5, simulated for a small population and a large one, showing wide wandering with several fixations and losses in the small population and near-constant frequencies in the large one. Centre: heterozygosity decaying exponentially over generations for three effective population sizes, with a time constant of twice N-e. Right: F-ST plotted against the number of migrants per generation N-e times m, on a log axis, showing the curve crossing 0.2 at exactly one migrant and flattening toward zero beyond about ten, annotated with the one-migrant-per-generation rule.](assets/01-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — bottleneck arithmetic with the harmonic mean).** A population has census sizes over five generations of 1000, 1000, **10**, 1000, 1000. (a) Compute the arithmetic and harmonic means. (b) What fraction of heterozygosity is lost over the five generations? (c) Comment.

(a) $$\text{arithmetic mean} = \frac{1000+1000+10+1000+1000}{5} = \frac{4010}{5} = 802 .$$

$$\text{harmonic mean} = \left[\frac{1}{5}\left(\frac{1}{1000}+\frac{1}{1000}+\frac{1}{10}+\frac{1}{1000}+\frac{1}{1000}\right)\right]^{-1} = \left[\frac{1}{5}(0.104)\right]^{-1} = \frac{1}{0.0208} = \mathbf{48.1}.$$

**The arithmetic mean is 802 and $N_e$ is 48** — a sixteenfold difference, caused by one generation.

(b) Compute the loss generation by generation, since $H$ falls by $1/(2N_i)$ in each:

$$\frac{H_5}{H_0} = \prod_{i=1}^{5}\left(1 - \frac{1}{2N_i}\right) = (0.9995)^{4} \times \left(1 - \frac{1}{20}\right) = 0.998 \times 0.95 = 0.9481 .$$

$$\text{heterozygosity lost} = 1 - 0.948 = \mathbf{5.2\ \text{percent}}.$$

**Almost all of it — 5 percentage points out of 5.2 — was lost in the single bottleneck generation.**

(c) **This is why the harmonic mean is the right average.** Genetic diversity lost in a bottleneck is not recovered when numbers rebound; it can only be replaced by mutation, over thousands of generations. A population that crashed once and recovered has the *demography* of a large population and the *genetics* of a small one.

**Real cases make the point.** Northern elephant seals were reduced to perhaps 20 individuals in the 1890s and now number over 100,000 — with almost no genetic variation at the loci examined. Cheetahs show similarly low diversity, attributed to a bottleneck around 10,000 years ago. **Census size tells you about extinction risk today; $N_e$ tells you about genetic health, and they can differ by orders of magnitude.**

**Example 2 (why you'd care — the drift barrier and why your genome is full of junk).** Consider a mildly deleterious mutation with $s = -10^{-5}$ (a 0.001 percent fitness cost — an inserted transposon, say, or a slightly suboptimal codon). Compare its fate in *E. coli* ($N_e \approx 10^{8}$) and in humans ($N_e \approx 10^{4}$). (a) Compute $N_e s$ for each. (b) Predict what happens in each. (c) Explain what this says about genome size and complexity.

(a) $$\text{\textit{E. coli}}: \; N_e|s| = 10^{8} \times 10^{-5} = \mathbf{10^{3}} \gg 1 .$$

$$\text{Humans}: \; N_e|s| = 10^{4} \times 10^{-5} = \mathbf{0.1} \ll 1 .$$

(b) In *E. coli*, $N_e|s| = 1000$, so **selection is overwhelmingly dominant** and the mutation is removed efficiently. Even a fitness cost of one part in $10^5$ is visible to a population that large.

In humans, $N_e|s| = 0.1$, so **drift is dominant and the mutation is effectively neutral.** It wanders at random and has roughly the neutral fixation probability of $1/(2N_e) = 5\times10^{-5}$ — selection barely biases its fate at all.

**The same mutation, with the same fitness cost, has completely different fates.** It is not that the mutation is more harmful in bacteria; it is that bacteria can *see* it.

(c) **This is Lynch's mutational-hazard hypothesis, and it inverts the usual story about genome complexity.**

Organisms with small $N_e$ — vertebrates, and especially large-bodied, long-lived ones — have a **drift barrier** at $|s| \approx 1/N_e \approx 10^{-4}$. Anything with a smaller fitness cost is invisible to selection and accumulates. Bacteria, with $N_e$ four orders of magnitude larger, have a barrier at $10^{-8}$ and can purge far subtler defects.

The predicted consequences match the data closely:

| Feature | Large $N_e$ (bacteria) | Small $N_e$ (vertebrates) |
|---|---|---|
| Genome size | small, compact | large |
| Introns | almost none | abundant |
| Transposable elements | few | **~45 percent of the human genome** |
| Intergenic DNA | minimal | vast |
| Codon usage bias | strong | weak |

**The provocative reading**, and the one worth stating carefully: the elaborate architecture of eukaryotic genomes — introns, spliceosomes, regulatory complexity — may have originated not because it was *advantageous* but because small populations could not prevent it from accumulating. Selection later found uses for some of it (alternative splicing, [molecular-cell-biology 4.3](../../molecular-cell-biology/lessons/04-03-rna-processing-mrna-life-cycle.md)), but the raw material arrived through a failure of purifying selection rather than a success of positive selection.

**This is contested, and it should be.** But the underlying arithmetic — that $N_e s$ and not $s$ determines a mutation's fate — is not contested at all, and it is one of the genuinely non-obvious things population genetics has established.

## Watch out

- **You might think drift only matters in small populations.** It dominates whenever $N_e|s| < 1$, and since most of the genome is nearly neutral, **drift is the dominant force acting on most DNA in every species**.
- **You might use census size for $N_e$.** Unequal sex ratios, variance in offspring number and — above all — past bottlenecks make $N_e$ far smaller. The harmonic mean over generations is dominated by the smallest value.
- **You might expect a beneficial mutation to be safe.** Its fixation probability is only about $2s$ — a 1 percent advantage fixes 2 percent of the time. Most beneficial mutations are lost to drift in their first few generations, **and this is independent of population size**.
- **You might think substantial migration is needed to homogenize populations.** One migrant per generation holds $F_{ST}$ near 0.2, and it is the **absolute number**, not the fraction, that matters.
- **You might read the one-migrant rule as a management target.** It prevents drift-driven divergence; it does not prevent inbreeding depression, and it can swamp local adaptation.
- **You might treat drift as random noise around a selective trend.** It is a force in its own right, and for most of the genome it is the *only* force operating.

## One-liner

> The controlling quantity is $N_e s$, not $N_e$ or $s$ separately — so the same mutation is purged in bacteria and invisible in humans, big populations make more mutations but fix a smaller fraction so the neutral substitution rate is exactly $\mu$, and one migrant per generation is enough regardless of population size.

## Problems

**P1 (🟢)** A population has $N_e = 200$. (a) What fraction of heterozygosity is lost per generation? (b) How much remains after 100 generations? (c) How many generations until half is gone?

**P2 (🟡)** A population's census sizes over six generations are 500, 500, 500, 25, 500, 500. (a) Compute the harmonic mean $N_e$. (b) Compute the total fraction of heterozygosity lost. (c) A conservation manager proposes that since the population "recovered fully," no genetic intervention is needed. Evaluate this.

**P3 (🔴, bridges to 2.3 and to genome evolution)** (a) A new neutral mutation arises in a diploid population of $N = 5000$. What is its probability of eventual fixation, and how long would fixation take if it occurred? (b) Show that the neutral substitution rate equals $\mu$ regardless of $N$, and state why this makes a molecular clock possible. (c) A mutation has $s = -2\times10^{-5}$. Compute $N_e s$ for a population of $10^{3}$, $10^{5}$ and $10^{7}$, and state in each case whether selection or drift controls its fate — then explain what this predicts about the relationship between population size and genome size.

<details>
<summary>Solutions</summary>

**P1 (a)** $$\frac{1}{2N_e} = \frac{1}{400} = \mathbf{0.0025}, \ \text{i.e. } 0.25\ \text{percent per generation}.$$

**(b)** $$\frac{H_{100}}{H_0} = \left(1 - \frac{1}{400}\right)^{100} = (0.9975)^{100} = \mathbf{0.7787},$$

so about **78 percent remains** and 22 percent has been lost.

(Check against the exponential approximation: $e^{-100/400} = e^{-0.25} = 0.779$ ✓)

**(c)** $$\frac{1}{2} = e^{-t/2N_e} \;\Longrightarrow\; t = 2N_e \ln 2 = 400 \times 0.693 = \mathbf{277\ \text{generations}}.$$

**Useful rule: half of heterozygosity is lost in about $1.4 N_e$ generations.**

**P2 (a)** $$N_e = \left[\frac{1}{6}\left(\frac{5}{500} + \frac{1}{25}\right)\right]^{-1} = \left[\frac{1}{6}(0.01 + 0.04)\right]^{-1} = \left[\frac{0.05}{6}\right]^{-1} = \frac{6}{0.05} = \mathbf{120}.$$

Against an arithmetic mean of $(5 \times 500 + 25)/6 = 421$ — **a 3.5-fold difference from one bad generation.**

**(b)** $$\frac{H_6}{H_0} = \left(1-\frac{1}{1000}\right)^{5}\left(1-\frac{1}{50}\right) = (0.999)^{5}(0.98) = 0.9950 \times 0.98 = 0.9751 .$$

$$\text{lost} = \mathbf{2.5\ \text{percent}}.$$

Of which 2.0 percentage points came from the single bottleneck generation and 0.5 from the other five combined — **80 percent of the loss from 17 percent of the time.**

**(c)** **The claim is wrong, and it confuses demographic recovery with genetic recovery.**

Three points:

1. **The lost heterozygosity does not come back when numbers do.** Diversity is restored only by mutation, at rate $\mu \approx 10^{-8}$ per site per generation — thousands of generations to replace what was lost in one. The population now has the census size of a healthy population and the genetic diversity of a small one.

2. **The consequences are real.** Reduced heterozygosity means reduced additive variance ([genetics 4.1](../../genetics/lessons/04-01-quantitative-traits-heritability.md)), so the population responds more slowly to selection and adapts more poorly to environmental change. It also means increased homozygosity for deleterious recessives — **inbreeding depression** — which raises the risk of an extinction vortex ([4.5](04-05-behavior-conservation.md)).

3. **The bottleneck may have removed specific alleles permanently**, including disease-resistance alleles at MHC loci where diversity is maintained precisely because it is valuable ([1.5](01-05-mutation-balance-of-forces.md)).

**What should be done instead:** measure heterozygosity directly and compare with related populations or with historical museum specimens. If diversity is genuinely depleted, consider **genetic rescue** — translocating a small number of individuals from another population. The Florida panther is the canonical success: eight Texas pumas introduced in 1995 reversed severe inbreeding depression, and the population tripled.

**The general point: census size and $N_e$ are different quantities answering different questions**, and a manager who monitors only the first is blind to the second.

**P3 (a)** A new mutation is present in one copy out of $2N = 10{,}000$:

$$P(\text{fixation}) = \frac{1}{2N} = \frac{1}{10{,}000} = \mathbf{10^{-4}}.$$

$$\text{time to fixation, given it fixes} \approx 4N_e = 4 \times 5000 = \mathbf{20{,}000\ \text{generations}}.$$

Note the contrast with the mean time to *loss*, $2\ln(2N) = 2\ln(10{,}000) = 18$ generations. **The overwhelming majority vanish within a couple of dozen generations; the one in ten thousand that survives takes twenty thousand.**

**(b)** In each generation, the population of $N$ diploids produces

$$2N\mu \text{ new neutral mutations},$$

and each has fixation probability $1/(2N)$. The rate at which mutations become fixed is the product:

$$k = 2N\mu \times \frac{1}{2N} = \boxed{\mu}$$

**$N$ cancels exactly.** A large population generates proportionally more mutations and fixes a proportionally smaller fraction of each, and the two effects are exact reciprocals.

**Why this makes a molecular clock possible:** the number of neutral substitutions accumulating between two diverging lineages depends only on the mutation rate and elapsed time — **not on population size, demographic history, bottlenecks, or expansions.** Two lineages that diverged $t$ generations ago will differ at approximately $2\mu t$ sites (a factor of 2 because substitutions accumulate independently on both lineages).

This is what licenses dating a divergence from sequence differences alone ([2.3](02-03-inferring-trees-dating.md)). **The clock is not an empirical regularity that happens to hold; it is a mathematical consequence of neutrality**, which is why Kimura's theory made the clock's existence a prediction rather than a puzzle.

*(Caveats worth knowing: the clock is a Poisson process, so it is noisy over short intervals; $\mu$ per year depends on generation time, so lineages with different generation times run at different rates; and selected sites do not obey it, which is why clocks are calibrated on synonymous or non-coding sites.)*

**(c)** With $|s| = 2\times10^{-5}$:

| $N_e$ | $N_e\lvert s\rvert$ | Controlled by |
|---|---|---|
| $10^{3}$ | $0.02$ | **drift** — effectively neutral |
| $10^{5}$ | $2$ | **borderline** — both forces comparable |
| $10^{7}$ | $200$ | **selection** — efficiently purged |

**What this predicts about genome size:** an inverse relationship between effective population size and genome bloat.

The reasoning: most of what enlarges a genome — transposable element insertions, intron gains, retained pseudogenes, expanded intergenic regions — carries a small but non-zero fitness cost, on the order of $10^{-5}$ to $10^{-8}$ per element (replication cost, transcriptional interference, mutational target size). Whether such an element is removed depends on whether $N_e|s|$ exceeds 1.

$$\textbf{Small } N_e \Rightarrow \text{high drift barrier} \Rightarrow \text{mildly deleterious clutter accumulates} \Rightarrow \text{large genome}$$
$$\textbf{Large } N_e \Rightarrow \text{low drift barrier} \Rightarrow \text{even tiny costs are purged} \Rightarrow \text{compact genome}$$

**The data match.** Bacteria ($N_e \sim 10^{8}$) have genomes of a few megabases with almost no non-coding DNA. Unicellular eukaryotes are intermediate. Multicellular eukaryotes ($N_e \sim 10^{4}$–$10^{6}$) have genomes from tens to thousands of megabases, mostly non-coding, and the largest genomes belong to organisms with the smallest population sizes.

**The strong version of the claim** — that eukaryotic genomic and regulatory complexity is a *consequence* of small $N_e$ rather than an adaptation — is genuinely contested and should be held loosely. **The weak version is not contested and is the real lesson: you cannot predict what selection will remove from $s$ alone, and a population's size is as much a determinant of its genome's contents as the selective value of what is in it.**

</details>

## Flashback

**From Lesson 1.3 (testing Hardy–Weinberg):** A sample of 600 individuals at a codominant locus gives $AA$ 216, $Aa$ 264, $aa$ 120. (a) Compute allele frequencies and expected counts. (b) Compute $\chi^2$ (1 df, critical 3.84) and $F$. (c) The same deficit appears at every locus tested. Name the two leading explanations and the single analysis that separates them.

<details>
<summary>Solution</summary>

**(a)** $$p = \frac{2(216)+264}{1200} = \frac{696}{1200} = 0.58, \qquad q = 0.42 .$$

$$E_{AA} = 600(0.58)^2 = 201.8, \quad E_{Aa} = 600(2)(0.58)(0.42) = 292.3, \quad E_{aa} = 600(0.42)^2 = 105.8 .$$

**(b)**

| | $O$ | $E$ | $(O-E)^2/E$ |
|---|---|---|---|
| $AA$ | 216 | 201.8 | 1.00 |
| $Aa$ | 264 | 292.3 | 2.74 |
| $aa$ | 120 | 105.8 | 1.90 |

$$\chi^{2} = 1.00 + 2.74 + 1.90 = \mathbf{5.64}.$$

Against 3.84 at 1 df: **reject** — a significant heterozygote deficit.

$$H_{\text{obs}} = \frac{264}{600} = 0.440, \qquad H_{\text{exp}} = 0.4872, \qquad F = 1 - \frac{0.440}{0.4872} = \mathbf{0.097}.$$

**A 10 percent heterozygote deficit** — statistically significant but modest, roughly what a population with occasional first-cousin mating would show.

**(c)** Since it appears at **every** locus, the cause is genome-wide, which rules out selection (locus-specific) and makes widespread null alleles unlikely. The two leading candidates are:

1. **Inbreeding** — non-random mating among relatives.
2. **Population structure** (Wahlund effect) — the sample pools subpopulations with different allele frequencies.

**The single analysis that separates them: split the sample into putative subgroups — by location, or by clustering on the multilocus genotypes — and re-test each separately.**

If the deficit **vanishes within subgroups**, it was structure. If it **persists**, it was inbreeding. As [1.3](01-03-hardy-weinberg-testable-null.md) noted, the two lead to opposite management decisions — genetic rescue versus managing the units separately — so the test is not optional.

</details>

## Connections

- **Backward:** [1.3](01-03-hardy-weinberg-testable-null.md)'s "large population" assumption is what this lesson removes; [1.1](01-01-fitness-quantitative.md)'s Haldane's sieve depended on drift overwhelming selection at low frequency, and $N_e s$ is why.
- **Forward:** [1.5](01-05-mutation-balance-of-forces.md) balances drift and selection against mutational input; [2.3](02-03-inferring-trees-dating.md) is built entirely on the neutral substitution rate $k = \mu$ derived here.
- **Sideways:** $N_e$ and $F_{ST}$ from the pedigree and breeding side are [genetics 4.3](../../genetics/lessons/04-03-inbreeding-relatedness-structure.md); the demographic history that sets LD block length is [genetics 4.4](../../genetics/lessons/04-04-linkage-disequilibrium-gwas.md); genetic rescue and the extinction vortex are [4.5](04-05-behavior-conservation.md).
