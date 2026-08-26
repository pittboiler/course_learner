# Evolution & Ecology · Lesson 1.1: Fitness — making selection quantitative

> ⏱ ~15 min · Module 1: Evolutionary Mechanisms & Population Genetics · Builds on: [general-biology 4.1](../../general-biology/lessons/04-01-natural-selection.md), [general-biology 4.2](../../general-biology/lessons/04-02-evolution-in-populations.md) · Unlocks: 1.2 (modes of selection)

## Why this matters

[general-biology 4.1](../../general-biology/lessons/04-01-natural-selection.md) established that natural selection *must* happen: given variation, heredity, and differential reproduction, the argument is deductive and there is no way out of it. That is the qualitative case, and it is airtight.

It is also unable to answer a single quantitative question. **How fast?** How many generations does it take a beneficial mutation to spread? Is a 1 percent fitness advantage enough to matter, or is it lost in the noise? Does a recessive advantageous allele behave like a dominant one?

The answers are not intuitions — they are arithmetic, and the arithmetic is startling. A 1 percent advantage is enormous over evolutionary time; a beneficial *recessive* allele can sit at low frequency for thousands of generations doing almost nothing; and selection against a recessive deleterious allele becomes weaker the rarer it gets, which is why it can never be eliminated. This lesson builds the machine that produces those results.

## The idea

**Fitness is reproductive output, and nothing else.** Not strength, not health, not longevity except insofar as it buys reproduction. The **absolute fitness** $W$ of a genotype is the expected number of offspring an individual of that genotype leaves.

**Relative fitness $w$ is what actually matters**, because selection is a competition:

$$w_i = \frac{W_i}{W_{\max}}$$

Scale so the best genotype has $w = 1$. *In words: fitness is a ratio, so a population where everyone leaves 10 offspring and one where everyone leaves 2 are, from selection's point of view, identical.*

**The selection coefficient measures the disadvantage:**

$$s = 1 - w$$

So $w = 1$ means $s = 0$ (no disadvantage) and $w = 0$ means $s = 1$ (lethal).

**Fitness has two components, and both count.** $W = (\text{probability of surviving to reproduce}) \times (\text{fecundity given survival})$. A genotype that survives beautifully and produces no offspring has zero fitness. **Viability selection and fertility selection are both selection.**

**The core calculation, in three steps.** Given genotype frequencies and fitnesses, one generation of selection is:

1. Weight each genotype by its fitness → the frequency **after** selection, before normalizing.
2. Divide by the **mean fitness** $\bar{w}$ to renormalize.
3. Read off the new allele frequency.

$$\bar{w} = p^{2}w_{AA} + 2pq\,w_{Aa} + q^{2}w_{aa}$$

*In words: the mean fitness is the population's average reproductive output, and it is the denominator that keeps frequencies summing to one.*

**And the payoff is a formula for how fast an allele moves.** Everything about the speed of selection follows from one expression, and the interesting behaviour is all in how **dominance** changes it.

## The formal version

**Standard fitness array.** Write the three genotypes' relative fitnesses with a dominance parameter $h$:

| Genotype | $AA$ | $Aa$ | $aa$ |
|---|---|---|---|
| Fitness | $1$ | $1 - hs$ | $1 - s$ |

| $h$ | Meaning |
|---|---|
| $0$ | $a$ is **recessive** deleterious — heterozygote is fully fit |
| $\tfrac12$ | **additive (codominant)** — heterozygote exactly intermediate |
| $1$ | $a$ is **dominant** deleterious |
| $<0$ | **overdominance** — heterozygote fitter than either homozygote |

**One generation of selection.** After selection the allele frequency is

$$q' = \frac{q^{2}w_{aa} + pq\,w_{Aa}}{\bar w}$$

*In words: count the $a$ alleles surviving — all of them in $aa$ individuals, half of them in $Aa$ — and divide by the population's mean fitness.*

The change per generation is $\Delta q = q' - q$, and after simplification:

$$\boxed{\;\Delta q = \frac{-\,pq\,\big[\,q s (1 - h) + p s h\,\big]}{\bar w}\;}$$

**You will rarely need the general form. The three special cases are what you use.**

**Case 1 — additive ($h = \tfrac12$), weak selection.** Then $\bar w \approx 1$ and

$$\Delta q \approx -\tfrac12 s\,pq .$$

*In words: change is proportional to $s$ and to $pq$, which is maximal at $q = 0.5$.* Selection is fastest when the alleles are at intermediate frequency and slows at both ends — the classic S-shaped trajectory.

**Case 2 — deleterious recessive ($h = 0$).**

$$\Delta q \approx -s\,q^{2}p .$$

**Note the $q^{2}$.** As the allele gets rare, $\Delta q$ falls as the *square* of its frequency, because selection can only see it in homozygotes and those become vanishingly rare. This is the quantitative version of [general-biology 4.2](../../general-biology/lessons/04-02-evolution-in-populations.md)'s observation that almost every copy of a rare recessive allele hides in a heterozygote.

$$\textbf{Selection against a rare recessive is asymptotically ineffective.}$$

**Case 3 — beneficial recessive, the mirror image.** A new advantageous *recessive* mutation arises at frequency $q \approx 1/(2N)$. It is essentially never homozygous, so selection cannot see it at all, and it drifts — often to extinction. **A beneficial recessive mutation is nearly invisible to selection when rare**, which is why new beneficial alleles that sweep are overwhelmingly dominant or additive. This is called **Haldane's sieve**, and it is a real and non-obvious prediction that population genetics makes and casual reasoning does not.

**Time to change frequency.** For an additive allele under weak selection, treating $\Delta q$ as a derivative:

$$\frac{dq}{dt} = \tfrac12 s\,q(1-q) \quad\Longrightarrow\quad t = \frac{2}{s}\ln\!\left[\frac{q_t(1-q_0)}{q_0(1-q_t)}\right]$$

*In words: the trajectory is logistic, and the time to traverse a given range of frequencies is inversely proportional to $s$.* Halve the selection coefficient and you double every timescale.

**Complete selection against a recessive ($s = 1$).** This case has an exact solution worth knowing:

$$\boxed{\;q_t = \frac{q_0}{1 + t\,q_0}\;} \qquad\text{equivalently}\qquad \frac{1}{q_t} = \frac{1}{q_0} + t$$

*In words: the reciprocal of the frequency increases by exactly one per generation.* Beautifully simple, and its consequence is severe: going from $q = 0.1$ to $q = 0.01$ takes 90 generations, and from $0.01$ to $0.001$ takes 900. **Each tenfold reduction takes ten times as long as the last.**

**Mean fitness increases (in this model).** Under constant fitnesses with no frequency dependence, $\bar w$ never decreases — Fisher's "fundamental theorem," loosely. The rate of increase is proportional to the additive genetic variance in fitness. *In words: a population climbs a fitness landscape, and it climbs faster the more heritable variation in fitness it has.* This fails, importantly, when fitness is frequency-dependent ([1.2](01-02-modes-of-selection.md)).

## Picture

![Left: allele frequency trajectories over generations for a beneficial allele with s equal to 0.01, plotted for a dominant, additive and recessive allele, showing the dominant sweeping fastest early, the additive taking a symmetric S-curve, and the recessive lingering near zero for a very long time before rising sharply — Haldane's sieve. Right: the reciprocal-frequency plot for complete selection against a recessive, showing one over q rising as a perfect straight line with slope one, and beneath it the same data on a frequency axis showing the increasingly slow approach to zero.](assets/01-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — one generation from a fitness array).** A population has $p = 0.6$, $q = 0.4$, with fitnesses $w_{AA} = 1.0$, $w_{Aa} = 0.9$, $w_{aa} = 0.6$. (a) Compute $\bar w$. (b) Find $q'$ and $\Delta q$. (c) Identify $s$ and $h$, and check against the additive approximation.

(a) Genotype frequencies before selection: $p^2 = 0.36$, $2pq = 0.48$, $q^2 = 0.16$.

$$\bar w = 0.36(1.0) + 0.48(0.9) + 0.16(0.6) = 0.360 + 0.432 + 0.096 = \mathbf{0.888}.$$

(b) $$q' = \frac{q^{2}w_{aa} + pq\,w_{Aa}}{\bar w} = \frac{0.16(0.6) + (0.6)(0.4)(0.9)}{0.888} = \frac{0.096 + 0.216}{0.888} = \frac{0.312}{0.888} = \mathbf{0.3514}.$$

$$\Delta q = 0.3514 - 0.4 = \mathbf{-0.0486}.$$

(c) From $w_{aa} = 1 - s = 0.6$: $s = 0.4$. From $w_{Aa} = 1 - hs = 0.9$: $hs = 0.1$, so $h = 0.1/0.4 = \mathbf{0.25}$ — closer to recessive than additive.

Additive approximation ($h = 0.5$) would give $\Delta q \approx -\tfrac12(0.4)(0.6)(0.4) = -0.048$, which happens to land close. Using the exact general formula with $h = 0.25$:

$$\Delta q = \frac{-pq[qs(1-h) + psh]}{\bar w} = \frac{-(0.24)[0.4(0.4)(0.75) + 0.6(0.1)]}{0.888} = \frac{-(0.24)(0.12 + 0.06)}{0.888} = \frac{-0.0432}{0.888} = -0.0486 \ \checkmark$$

**The exact and approximate answers agreeing here is a coincidence of these numbers, not a general fact** — and the check is worth doing precisely because the approximations fail in exactly the interesting cases (strong selection, extreme frequencies, and recessives at low $q$).

**Example 2 (why you'd care — how long to eliminate a recessive disease, and why eugenics could not have worked).** A recessive lethal allele has frequency $q_0 = 0.02$ (so about 1 in 2500 affected, roughly cystic fibrosis in Europe). Suppose every affected individual fails to reproduce, i.e. $s = 1$. (a) How many generations to halve $q$? (b) To reach $q = 0.001$? (c) What fraction of $a$ alleles is exposed to selection at $q = 0.02$, and what does that tell you?

(a) Use $1/q_t = 1/q_0 + t$:

$$\frac{1}{0.01} = \frac{1}{0.02} + t \;\Longrightarrow\; 100 = 50 + t \;\Longrightarrow\; t = \mathbf{50\ \text{generations}}.$$

At ~25 years per human generation, about **1250 years** to halve it.

(b) $$\frac{1}{0.001} = \frac{1}{0.02} + t \;\Longrightarrow\; 1000 = 50 + t \;\Longrightarrow\; t = \mathbf{950\ \text{generations}} \approx 24{,}000\ \text{years}.$$

(c) Per 10,000 individuals at $q = 0.02$: affected $q^2 = 4\times10^{-4}$, so 4 individuals carrying 8 $a$ alleles; carriers $2pq = 0.0392$, so 392 individuals carrying 392 $a$ alleles. Total $a$ alleles $= 400$.

$$\text{fraction visible to selection} = \frac{8}{400} = \mathbf{2\ \text{percent}}.$$

**Ninety-eight percent of the alleles are hidden in healthy heterozygotes where selection cannot touch them** — and the hiding gets *worse* as $q$ falls, since the visible fraction is roughly $q$ itself.

**Two conclusions, and the second is the important one.**

*Scientifically:* this is why severe recessive diseases persist at stable low frequencies. Selection against them is weak by construction, and new mutation replenishes what is removed ([1.5](01-05-mutation-balance-of-forces.md) makes the balance exact).

*Historically:* it is a decisive refutation of eugenic sterilization programmes **on their own stated terms**. Preventing every affected individual from reproducing removes 2 percent of the allele copies per generation, and takes over a thousand years to halve the frequency. The arithmetic was published by **Hardy in 1908 and by R. A. Fisher and others well before most sterilization laws were enacted** — the programmes could not have achieved their stated aim even in principle, and this was known and stated at the time. **The mathematics did not merely fail to support the policy; it refuted it in advance.**

## Watch out

- **You might treat fitness as health or vigour.** It is expected reproductive output, full stop. A sterile animal in perfect condition has fitness zero; a sickly one that breeds successfully does not.
- **You might use absolute fitness where relative belongs.** Selection responds to *ratios*. A population declining toward extinction can still have strong selection favouring one genotype over another.
- **You might expect selection to be fastest when the beneficial allele is rare.** For an *additive* allele $\Delta q \propto pq$, which is maximal at $q = 0.5$. For a *recessive* beneficial allele it is nearly zero when rare — Haldane's sieve.
- **You might think a lethal recessive can be eliminated.** It cannot. The reciprocal-frequency law means each tenfold reduction takes ten times as long as the last, and mutation replenishes the allele meanwhile.
- **You might apply the weak-selection approximations to strong selection.** $\Delta q \approx -\tfrac12 spq$ assumes $\bar w \approx 1$; with $s = 0.4$ the mean fitness is 0.89 and the approximation is already noticeably off.

## One-liner

> Fitness is relative reproductive output, and one formula for $\Delta q$ produces everything: selection is fastest at intermediate frequencies, blind to rare recessives in both directions, and so slow against a lethal recessive that $1/q$ rises by exactly one per generation.

## Problems

**P1 (🟢)** A population has $p = 0.7$, $q = 0.3$, with $w_{AA} = 1.0$, $w_{Aa} = 1.0$, $w_{aa} = 0.5$. (a) Compute $\bar w$. (b) Find $q'$ and $\Delta q$. (c) What are $s$ and $h$?

**P2 (🟡)** A recessive lethal allele ($s = 1$) is at $q_0 = 0.05$. (a) Using $1/q_t = 1/q_0 + t$, find $q$ after 10, 100 and 1000 generations. (b) How many generations to reduce $q$ from 0.05 to 0.005, and then from 0.005 to 0.0005? (c) State the general pattern and explain it mechanistically.

**P3 (🔴, bridges to 1.4 and to molecular evolution)** Two new beneficial mutations arise in a population of $N = 10{,}000$ diploids, both with $s = 0.02$. Mutation D is **dominant** ($h = 1$ for the advantage, so the heterozygote gets the full benefit); mutation R is **recessive** ($h = 0$, so only homozygotes benefit). Each starts at $q_0 = 1/(2N)$. (a) Compute the initial per-generation increase for each. (b) Explain quantitatively why R is very likely to be lost even though it is exactly as beneficial as D. (c) State Haldane's sieve as a prediction about what kinds of alleles we should observe having swept in real genomes, and name one well-known apparent exception and why it is one.

<details>
<summary>Solutions</summary>

**P1 (a)** $p^2 = 0.49$, $2pq = 0.42$, $q^2 = 0.09$.

$$\bar w = 0.49(1.0) + 0.42(1.0) + 0.09(0.5) = 0.49 + 0.42 + 0.045 = \mathbf{0.955}.$$

**(b)** $$q' = \frac{q^{2}w_{aa} + pq\,w_{Aa}}{\bar w} = \frac{0.09(0.5) + (0.7)(0.3)(1.0)}{0.955} = \frac{0.045 + 0.21}{0.955} = \frac{0.255}{0.955} = \mathbf{0.2670}.$$

$$\Delta q = 0.2670 - 0.30 = \mathbf{-0.0330}.$$

**(c)** $w_{aa} = 1 - s = 0.5 \Rightarrow \mathbf{s = 0.5}$. $w_{Aa} = 1 - hs = 1.0 \Rightarrow hs = 0 \Rightarrow \mathbf{h = 0}$ — the allele is fully **recessive**.

Check with the recessive approximation $\Delta q \approx -sq^{2}p = -(0.5)(0.09)(0.7) = -0.0315$, close to the exact $-0.0330$ (the difference is the $\bar w = 0.955$ denominator).

**P2 (a)** $1/q_0 = 1/0.05 = 20$.

| $t$ | $1/q_t = 20 + t$ | $q_t$ |
|---|---|---|
| 10 | 30 | $\mathbf{0.0333}$ |
| 100 | 120 | $\mathbf{0.00833}$ |
| 1000 | 1020 | $\mathbf{0.00098}$ |

**(b)** From 0.05 to 0.005: $1/0.005 = 200$, so $t = 200 - 20 = \mathbf{180\ \text{generations}}$.

From 0.005 to 0.0005: $1/0.0005 = 2000$, so $t = 2000 - 200 = \mathbf{1800\ \text{generations}}$.

**(c)** **Each successive tenfold reduction takes exactly ten times as long as the previous one.**

The mechanism is the $q^2$ in $\Delta q \approx -sq^{2}p$. Selection acts only on homozygotes, whose frequency is $q^2$, so the *rate* of removal falls as the square of the frequency while the *amount remaining* falls only as $q$. Dividing, the per-generation *proportional* reduction falls linearly in $q$ — which is exactly what makes $1/q$ linear in $t$.

**Practically: a lethal recessive can be driven low but never eliminated**, and long before it gets low the removal rate is smaller than the rate at which new mutation supplies it ([1.5](01-05-mutation-balance-of-forces.md)).

**P3 (a)** $q_0 = 1/(2 \times 10{,}000) = 5\times10^{-5}$, so $p_0 \approx 1$.

*Mutation D (dominant beneficial).* Heterozygotes get the full advantage, and essentially all copies are in heterozygotes:

$$\Delta q \approx s\,p\,q\,(1-h)\big|_{\text{beneficial, } h=1 \text{ advantage}} \approx s\,pq = 0.02 \times 1 \times 5\times10^{-5} = \mathbf{1.0\times10^{-6}}.$$

*Mutation R (recessive beneficial).* Only homozygotes benefit, and their frequency is $q^2$:

$$\Delta q \approx s\,q^{2}p = 0.02 \times (5\times10^{-5})^{2} \times 1 = 0.02 \times 2.5\times10^{-9} = \mathbf{5.0\times10^{-11}}.$$

$$\frac{\Delta q_D}{\Delta q_R} = \frac{1.0\times10^{-6}}{5.0\times10^{-11}} = \mathbf{20{,}000\text{-fold}}.$$

**(b)** The deterministic push on R is $5\times10^{-11}$ per generation. Compare that with the random fluctuation from **genetic drift** ([1.4](01-04-drift-ne-gene-flow.md)): a single copy in a population of $2N = 20{,}000$ gene copies is lost purely by chance with probability about $1/e \approx 0.37$ in the very first generation, simply because its carrier may leave no offspring or may pass on the other allele.

$$\text{drift} \gg \text{selection, by many orders of magnitude, while } q \text{ is small.}$$

So R behaves as an effectively **neutral** allele: it wanders at random, and the overwhelmingly likely outcome of a random walk starting one step from an absorbing boundary is absorption at zero. Its probability of eventual fixation is close to the neutral value $1/(2N) = 5\times10^{-5}$, essentially independent of its advantage.

D, by contrast, has fixation probability approximately $2s = 0.04$ — about **800 times** the neutral value. Both mutations confer identical benefit; only D is *visible* to selection when rare.

**(c) Haldane's sieve, as a prediction:** **new beneficial alleles that sweep to fixation should be overwhelmingly dominant or additive**, because recessive ones are invisible to selection at the low frequencies where every new mutation begins, and are therefore lost to drift before they can ever be seen.

The prediction extends: adaptations arising from **standing variation** (an allele already segregating at appreciable frequency when the environment changes) need not be dominant, because such an allele is already common enough to appear in homozygotes. **So the sieve applies to new mutations and not to standing variation** — which is a testable distinction, and one of the clearer ways to tell the two modes of adaptation apart.

**A well-known apparent exception:** many adaptive alleles in *self-fertilizing* plants and in other highly inbred systems are recessive. This is not a violation but a confirmation of the mechanism: **selfing produces homozygotes immediately** ([genetics 4.3](../../genetics/lessons/04-03-inbreeding-relatedness-structure.md) — inbreeding moves a fraction $F$ of heterozygotes into the homozygous classes), so a recessive allele is exposed to selection even at low frequency and the sieve does not operate. The sieve is a consequence of *outcrossing*, not of dominance as such.

*(A second commonly cited case: recessive resistance alleles in pests and pathogens, which sweep readily under enormous selection pressure and huge population sizes — where $2N s q^2$ can still be large despite $q$ being tiny, because $N$ is astronomically large. The sieve is a statement about the relative strength of selection and drift, and enormous $N$ weakens drift.)*

</details>

## Connections

- **Backward:** [general-biology 4.1](../../general-biology/lessons/04-01-natural-selection.md) established that selection must happen; this lesson makes it a rate. [general-biology 4.2](../../general-biology/lessons/04-02-evolution-in-populations.md)'s observation that rare recessive alleles hide in heterozygotes becomes the $q^2$ in $\Delta q$.
- **Forward:** [1.2](01-02-modes-of-selection.md) applies the same machinery to continuous traits; [1.4](01-04-drift-ne-gene-flow.md) supplies the drift that Haldane's sieve depends on; [1.5](01-05-mutation-balance-of-forces.md) balances this removal against mutational input.
- **Sideways:** the same $R = h^2 S$ arithmetic from the breeder's side is [genetics 4.2](../../genetics/lessons/04-02-response-to-selection-qtl.md); the logistic trajectory of an allele under selection is the logistic growth equation of [3.2](03-02-logistic-growth-carrying-capacity.md) with a different interpretation; somatic evolution of a tumour under drug selection is [molecular-cell-biology 3.4](../../molecular-cell-biology/lessons/03-04-cancer-failure-of-control.md).
