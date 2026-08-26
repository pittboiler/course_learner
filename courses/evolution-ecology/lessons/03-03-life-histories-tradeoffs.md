# Evolution & Ecology · Lesson 3.3: Life histories & trade-offs

> ⏱ ~15 min · Module 3: Population Ecology · Builds on: [3.2](03-02-logistic-growth-carrying-capacity.md), [3.1](03-01-exponential-growth-demography.md) · Unlocks: 4.1 (competition & the niche)

## Why this matters

[3.1](03-01-exponential-growth-demography.md) and [3.2](03-02-logistic-growth-carrying-capacity.md) treated $r$, $K$, $l_x$ and $m_x$ as parameters you are handed. This lesson asks where they come from — and the answer is that they are **evolved**, jointly, under a constraint.

The constraint is the reason there is anything to say. If an organism could reproduce early, often, abundantly, and live a long time, every species would do all four and there would be no variation to explain. **Because energy and time are finite, gains in one component of fitness must be paid for elsewhere**, and a life history is a solution to an optimization problem under that budget.

This also fixes a common misreading. A trait like "produces few offspring" is not a deficiency — **it is a purchase**, made with resources that could have gone to numbers and were spent on quality instead. Asking what was bought is usually the right question.

## The idea

**The trade-offs are the content.** Four that recur:

| Trade-off | The tension |
|---|---|
| **Current vs. future reproduction** | energy spent breeding now is unavailable for survival and growth |
| **Number vs. size of offspring** | a fixed reproductive budget divided more ways gives smaller shares |
| **Reproduction vs. survival** | breeding is dangerous and costly; **the cost of reproduction** |
| **Growth vs. reproduction** | resources to grow bigger are resources not spent on offspring |

**The number-versus-size trade-off is the cleanest.** With a fixed reproductive budget $B$ and offspring each receiving investment $s$, the number produced is $n = B/s$. **You can have many small or few large, and nothing lets you have many large.** Every point on that hyperbola is available; selection picks one.

**$r$-selection and $K$-selection: a useful frame with real limits.**

| | $r$-selected | $K$-selected |
|---|---|---|
| Environment | unpredictable, disturbed, uncrowded | stable, predictable, crowded |
| Development | rapid | slow |
| Maturity | early | late |
| Body size | small | large |
| Offspring | many, small | few, large |
| Parental care | little or none | extensive |
| Reproduction | often **semelparous** | **iteroparous** |
| Survivorship | Type III | Type I |
| Selection favours | **high $r$** — grow fast when space is open | **competitive ability** near $K$ |
| Examples | insects, weeds, bacteria, many fish | elephants, oaks, albatrosses, humans |

**The frame's limitation, which matters:** it is a **continuum and a correlation**, not a dichotomy, and it explains rather less than it appears to. A **demographic** framing does better — asking *which age class experiences the variable mortality*:

- Variable mortality falling on **adults** → favours **early, heavy reproduction** (do not bank on surviving to breed again).
- Variable mortality falling on **juveniles** → favours **iteroparity and long life** (spread the bets across years).

$$\textbf{It is not the environment's harshness that matters but } \textit{which stage} \textbf{ the harshness lands on.}$$

**Semelparity versus iteroparity.** **Semelparous** organisms reproduce once, massively, and die — Pacific salmon, agaves, annual plants, many insects. **Iteroparous** organisms reproduce repeatedly. Semelparity is favoured when the cost of a reproductive attempt is so high that surviving to try again is improbable anyway, or when a single enormous effort is disproportionately effective.

**Bet-hedging.** In a variable environment, the quantity selection maximizes is not the arithmetic mean of fitness across years but the **geometric mean**, because fitness across generations multiplies rather than adds. **A strategy with a lower average but lower variance can win**, and this is why seeds stay dormant for years, why clutch sizes are conservative, and why "playing it safe" can be the fitness-maximizing choice rather than a failure of optimization.

## The formal version

**The cost of reproduction, formally.** Let $R_t$ be reproduction now and $S(R_t)$ the probability of surviving to reproduce again, with $S' < 0$. Total lifetime fitness is

$$W = R_t + S(R_t)\,V_{t+1}$$

where $V_{t+1}$ is **residual reproductive value** — expected future reproduction ([3.1](03-01-exponential-growth-demography.md)). Optimize:

$$\frac{dW}{dR_t} = 1 + S'(R_t)V_{t+1} = 0 \quad\Longrightarrow\quad \boxed{\;-S'(R_t) = \frac{1}{V_{t+1}}\;}$$

*In words: invest in current reproduction until the marginal survival cost equals the reciprocal of what the future is worth.*

**This immediately explains two observations that otherwise look like separate facts:**

1. **Terminal investment.** As an organism ages, $V_{t+1}$ falls, so $1/V_{t+1}$ rises and the optimum shifts toward more current reproduction. **Old individuals should breed harder**, and they do — measured in red deer, in birds, and in insects.
2. **Semelparity is the corner solution.** If $V_{t+1} \approx 0$ — because the migration is one-way, or the habitat will not persist — the optimum is to spend everything. **Semelparity is not a distinct strategy; it is iteroparity with a worthless future.**

**Lack's clutch size, and why it is wrong in an instructive way.** David Lack proposed that clutch size is set by the number of young the parents can feed — the clutch maximizing the number *fledged*. If offspring survival $s(n)$ declines with clutch size $n$, maximize:

$$\frac{d}{dn}\big[n\,s(n)\big] = s(n) + n\,s'(n) = 0 \quad\Longrightarrow\quad -\frac{s'(n)}{s(n)} = \frac{1}{n}$$

**Observed clutches are consistently *smaller* than this optimum**, which is a real and repeatable discrepancy. Three reasons, all of which are corrections to Lack's assumption that only this season matters:

- **Cost of reproduction.** A bigger clutch reduces parental survival and future breeding — the Lack calculation ignores $V_{t+1}$ entirely.
- **Offspring quality.** More fledglings of lower quality may yield fewer *recruits*, and fledging is not the right currency.
- **Bet-hedging.** In a variable environment, the geometric mean beats the arithmetic mean.

**Bet-hedging, quantitatively.** Over $T$ generations with fitness $W_t$ in generation $t$, the population grows by $\prod_t W_t$, so the relevant long-run rate is the **geometric mean**:

$$\bar W_g = \left(\prod_{t=1}^{T} W_t\right)^{1/T}, \qquad \ln \bar W_g = \frac{1}{T}\sum_t \ln W_t$$

And for moderate variance, a useful approximation:

$$\boxed{\;\bar W_g \approx \bar W_a - \frac{\sigma^{2}}{2\bar W_a}\;}$$

*In words: variance in fitness across generations is subtracted from the arithmetic mean.* **A strategy with lower mean and much lower variance can have a higher geometric mean and win** — and note the asymmetry: a single year with $W = 0$ makes the geometric mean **zero forever**, no matter how good every other year was.

$$\textbf{One catastrophic year is unrecoverable, which is why bet-hedging is not timidity but arithmetic.}$$

**Ageing, and why it exists at all.** Selection weakens with age because fewer individuals are alive to experience late-life effects, so the **force of selection declines with age** regardless of the cause. Two consequences:

- **Mutation accumulation** (Medawar): deleterious alleles acting only late in life are barely selected against and accumulate.
- **Antagonistic pleiotropy** (Williams): an allele beneficial early and harmful late is *favoured*, because early effects are weighted more heavily.

**The testable prediction:** organisms with low extrinsic mortality — those that fly, burrow, or carry armour — should evolve **slower ageing**, because more of them survive to experience late-life effects and selection there is stronger. Bats live three to four times longer than ground-dwelling mammals of the same size; birds outlive comparable mammals; naked mole-rats live 30 years where a mouse lives 3. **The correlation is strong and it is a genuine prediction rather than a description.**

## Picture

![Left: the offspring number versus size trade-off drawn as a hyperbola of constant reproductive budget, with points marked for a fish producing millions of tiny eggs and an elephant producing one large calf, and a shaded region labelled unattainable in the upper right. Centre: the optimal reproductive effort found where the marginal gain from current reproduction equals the marginal loss of residual reproductive value, with a second curve showing how the optimum shifts toward current reproduction as an organism ages and its future value falls. Right: two strategies compared across variable years, one with high mean and high variance and one with lower mean and low variance, with the geometric means marked showing the low-variance strategy winning.](assets/03-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — find the optimal clutch size, then correct it).** A bird's offspring survival to fledging declines with clutch size as $s(n) = 0.9 - 0.1n$. (a) Find the clutch maximizing the number fledged. (b) Adding a cost of reproduction, parental survival to next season is $P(n) = 0.8 - 0.05n$, and a surviving parent's future value is worth 3 fledglings. Find the new optimum. (c) Comment.

(a) Maximize $F(n) = n\,s(n) = n(0.9 - 0.1n) = 0.9n - 0.1n^{2}$:

$$\frac{dF}{dn} = 0.9 - 0.2n = 0 \;\Longrightarrow\; n = \mathbf{4.5}, \ \text{so } \mathbf{4\ \text{or}\ 5\ \text{eggs}}.$$

At $n = 4$: $F = 4(0.5) = 2.0$ fledged. At $n = 5$: $F = 5(0.4) = 2.0$. Equal — **Lack's optimum is 4 or 5.**

(b) Now maximize total fitness including the future:

$$W(n) = \underbrace{n(0.9 - 0.1n)}_{\text{fledged now}} + \underbrace{(0.8 - 0.05n)(3)}_{\text{future value}} = 0.9n - 0.1n^{2} + 2.4 - 0.15n$$

$$W(n) = -0.1n^{2} + 0.75n + 2.4$$

$$\frac{dW}{dn} = -0.2n + 0.75 = 0 \;\Longrightarrow\; n = \mathbf{3.75}, \ \text{so } \mathbf{4\ \text{eggs}}.$$

Check: $W(3) = -0.9 + 2.25 + 2.4 = 3.75$; $W(4) = -1.6 + 3.0 + 2.4 = 3.80$; $W(5) = -2.5 + 3.75 + 2.4 = 3.65$. **Four is the optimum.**

(c) **The cost of reproduction shifts the optimum down**, from 4.5 to 3.75 — modestly here, because the future is worth only 3 fledglings.

**Push the future's value up and the effect grows.** If a surviving parent were worth 10 fledglings:

$$W(n) = 0.9n - 0.1n^{2} + (0.8-0.05n)(10) = -0.1n^{2} + 0.4n + 8, \qquad n^{*} = \mathbf{2}.$$

$$\textbf{The optimal clutch falls from 4.5 to 2 purely because the parent's future became more valuable.}$$

This is the general resolution of the Lack discrepancy: **long-lived birds with high adult survival should have small clutches**, and they do — an albatross lays one egg, a blue tit lays ten, and the difference tracks adult survival rather than food supply. Lack's calculation is right about the mechanism within a season and wrong to stop there.

**Example 2 (why you'd care — bet-hedging, and why a lower average wins).** A desert annual can germinate all its seeds each year, or keep a fraction dormant. In good years (60 percent of years) a germinated seed yields 10 offspring; in drought years (40 percent) it yields 0. Dormant seeds survive to the next year with probability 0.9 and yield nothing that year. (a) Compute arithmetic and geometric mean fitness for germinating everything. (b) Repeat for germinating half. (c) Which strategy wins, and state the principle.

(a) **Germinate everything.** Fitness per year is 10 (good) or 0 (drought).

$$\bar W_a = 0.6(10) + 0.4(0) = \mathbf{6.0}.$$

$$\ln \bar W_g = 0.6\ln(10) + 0.4\ln(0) = -\infty \;\Longrightarrow\; \bar W_g = \mathbf{0}.$$

**The geometric mean is zero.** The population's cumulative growth is a product, and the first drought year multiplies it by zero — **extinction, guaranteed, and it takes on average 2.5 years to arrive.**

This is the crucial asymmetry: an arithmetic mean of 6 looks excellent and is completely misleading.

(b) **Germinate half, keep half dormant.** Per year, starting from a seed bank of 1 unit:

*Good year:* the germinated half yields $0.5 \times 10 = 5$; the dormant half survives at 0.9, contributing $0.5 \times 0.9 = 0.45$.

$$W_{\text{good}} = 5 + 0.45 = 5.45 .$$

*Drought year:* the germinated half yields 0; the dormant half survives.

$$W_{\text{drought}} = 0 + 0.45 = 0.45 .$$

$$\bar W_a = 0.6(5.45) + 0.4(0.45) = 3.27 + 0.18 = \mathbf{3.45}.$$

$$\ln\bar W_g = 0.6\ln(5.45) + 0.4\ln(0.45) = 0.6(1.6956) + 0.4(-0.7985) = 1.0174 - 0.3194 = 0.6980$$

$$\bar W_g = e^{0.6980} = \mathbf{2.01}.$$

(c) **The bet-hedging strategy wins decisively**, despite having a much lower arithmetic mean:

| Strategy | Arithmetic mean | **Geometric mean** | Long-run outcome |
|---|---|---|---|
| Germinate all | **6.0** | **0** | extinction, within a few years |
| Germinate half | 3.45 | **2.01** | doubling per year, indefinitely |

**The principle: fitness across generations multiplies, so what selection maximizes is the geometric mean, and the geometric mean punishes variance — absolutely, in the case of a zero.**

Three things follow that are worth carrying:

1. **A single catastrophic year is unrecoverable.** No number of good years compensates for one multiplication by zero. This is why strategies that appear excessively cautious — dormancy, small clutches, delayed maturity — are often optimal.
2. **The right comparison is never the average year.** A manager or a modeller who computes expected yield and ignores variance will systematically recommend the strategy that goes extinct.
3. **This is the same mathematics as the Kelly criterion in finance** — maximizing the expected log of wealth rather than expected wealth, precisely because returns compound. **A gambler who bets everything on a favourable wager goes broke with probability one**, for exactly the reason this desert annual does.

*(A caution on the numbers: the optimal germination fraction depends on the drought probability and the seed survival rate, and here it is not exactly one half — but the qualitative conclusion, that some dormancy beats none, is robust and is why essentially every desert annual has a persistent seed bank.)*

## Watch out

- **You might treat "few offspring" as a deficiency.** It is a **purchase** — resources not spent on numbers were spent on size, care, or parental survival. Ask what was bought.
- **You might use $r$/$K$ selection as a dichotomy.** It is a continuum and a correlation, and it explains less than it appears to. The demographic framing — *which age class bears the variable mortality* — predicts better.
- **You might maximize the arithmetic mean fitness.** Across generations fitness **multiplies**, so the geometric mean is what selection maximizes, and it penalizes variance severely.
- **You might apply Lack's clutch-size argument as stated.** It ignores the cost of reproduction, offspring quality, and bet-hedging, and observed clutches are consistently smaller than it predicts.
- **You might think ageing must have a purpose.** It follows from the **declining force of selection with age** — late-acting deleterious alleles are barely selected against, and early-benefit/late-cost alleles are actively favoured.
- **You might expect a harsh environment to select for high $r$.** It depends entirely on *which stage* the harshness hits. Variable adult mortality favours early heavy reproduction; variable juvenile mortality favours long life and iteroparity.

## One-liner

> A life history is an optimization under a fixed budget, so every trait is a purchase — and because fitness multiplies across generations, the quantity being maximized is the geometric mean, which punishes variance and makes apparent caution the arithmetically correct strategy.

## Problems

**P1 (🟢)** A fish has a reproductive budget of 1000 energy units per season. Egg survival to independence rises with per-egg investment as $s = 0.002\sqrt{e}$, where $e$ is units per egg. (a) Write the number of eggs as a function of $e$. (b) Write the number of surviving offspring, and find the $e$ maximizing it. (c) Comment on what the answer means.

**P2 (🟡)** A bird's fledging success is $s(n) = 0.8 - 0.08n$ and parental survival is $P(n) = 0.75 - 0.04n$. A surviving parent's residual reproductive value is worth $V$ fledglings. (a) Find the Lack optimum, ignoring the cost of reproduction. (b) Find the optimum for $V = 2$ and for $V = 8$. (c) State the general relationship between adult survival and clutch size, and name a taxon that fits.

**P3 (🔴, bridges to 4.5 and to conservation)** A plant in a fire-prone habitat can (i) flower every year from age 2, producing 20 seeds annually with 60 percent annual adult survival, or (ii) grow for 8 years then flower once with 400 seeds and die. Fires occur randomly and kill all above-ground plants; seeds survive in soil. (a) Compute lifetime reproductive output for each strategy in a fire-free environment. (b) With fires occurring at an annual probability of 0.12, compute expected output for each. (c) Explain which strategy the fire regime favours and what would change your answer, connecting to the residual-reproductive-value framework.

<details>
<summary>Solutions</summary>

**P1 (a)** With a budget of 1000 and $e$ units per egg:

$$n(e) = \frac{1000}{e}.$$

**(b)** Surviving offspring:

$$F(e) = n(e)\,s(e) = \frac{1000}{e} \times 0.002\sqrt{e} = \frac{2}{\sqrt{e}} = 2e^{-1/2}.$$

$$\frac{dF}{de} = -e^{-3/2} < 0 \ \text{for all } e > 0 .$$

**$F$ is strictly decreasing**, so it is maximized by making $e$ **as small as possible** — produce as many tiny eggs as physically possible.

**(c)** The answer is a corner solution, and it is telling you the model is incomplete rather than that fish should make infinitely many infinitesimal eggs.

**What the mathematics says:** with $s \propto \sqrt{e}$, doubling the investment per egg multiplies survival by only $\sqrt{2} = 1.41$ while halving the number of eggs — so numbers always win. The returns to investment are **decelerating**, and decelerating returns always favour spreading the budget thin.

**What is missing:** a **minimum viable egg size**. Below some $e_{\min}$ the egg does not contain enough material to develop at all and $s = 0$. The real optimum is at that floor, which is exactly what marine broadcast spawners do — cod produce millions of eggs at the smallest size that can develop.

**The general principle worth extracting:** whether a species makes many small or few large offspring depends on the **shape** of $s(e)$, not on its level.

- **Decelerating** returns ($s \propto \sqrt e$) → **many small**, pushed to the minimum viable size.
- **Accelerating** or **threshold** returns (survival negligible until $e$ passes a threshold, then rising steeply) → **few large**, because investing below the threshold is wasted entirely.

Species with a threshold — where an offspring must reach a size to compete, or must be carried, or must survive a winter — are the ones that make few large offspring. **The trade-off curve does not determine the answer; the survival function does.**

**P2 (a)** Lack: maximize $F(n) = n(0.8 - 0.08n) = 0.8n - 0.08n^{2}$.

$$\frac{dF}{dn} = 0.8 - 0.16n = 0 \;\Longrightarrow\; n = \mathbf{5}.$$

**(b)** Total fitness $W(n) = n\,s(n) + P(n)V$:

$$W(n) = 0.8n - 0.08n^{2} + (0.75 - 0.04n)V$$

$$\frac{dW}{dn} = 0.8 - 0.16n - 0.04V = 0 \;\Longrightarrow\; n^{*} = \frac{0.8 - 0.04V}{0.16} = 5 - 0.25V .$$

$$V = 2: \quad n^{*} = 5 - 0.5 = \mathbf{4.5} \ \text{(4 or 5 eggs)}$$
$$V = 8: \quad n^{*} = 5 - 2.0 = \mathbf{3\ \text{eggs}}$$

**(c)** From the formula $n^{*} = 5 - 0.25V$, the optimal clutch **declines linearly with residual reproductive value** — and $V$ is large exactly when adult survival is high, since a long-lived adult has many future breeding attempts.

$$\boxed{\;\text{high adult survival} \Rightarrow \text{high } V \Rightarrow \text{small clutch}\;}$$

*In words: an adult with a long expected future should not risk it on a large clutch this year.*

**Taxa that fit:** **procellariiform seabirds** — albatrosses, petrels, shearwaters — are the textbook case. Adult annual survival exceeds 95 percent, individuals live 40 to 60 years, and they lay a **single egg** and often skip years entirely. At the other end, small passerines with adult survival around 50 percent lay clutches of 8 to 12.

**The correlation across birds is strong and is one of the better-supported quantitative predictions in life-history theory** — and it explains why long-lived seabirds are so vulnerable to adult mortality from longline fishing: their entire strategy is built on adults surviving, and they have no capacity to compensate by breeding harder.

**P3 (a)** *Strategy (i) — iteroparous, from age 2, 20 seeds/year, 60 percent annual survival.*

Expected lifetime output is a geometric series. Surviving to age 2 is required; from then on, expected number of breeding seasons is $1/(1-0.6) = 2.5$:

$$\text{output} = 20 \times 2.5 = \mathbf{50\ \text{seeds}}.$$

(Strictly, the expected total is $20(1 + 0.6 + 0.6^2 + \cdots) = 20/(1-0.6) = 50$.)

*Strategy (ii) — semelparous, flowers once at age 8 with 400 seeds.* In a fire-free environment with no other mortality:

$$\text{output} = \mathbf{400\ \text{seeds}}.$$

**Semelparity wins eightfold** in a benign environment — the long growth period pays off enormously.

**(b)** Now add fire at annual probability $q = 0.12$, killing all above-ground plants.

*Strategy (ii).* The plant must survive 8 fire-free years to reproduce at all:

$$P(\text{survive to flower}) = (1 - 0.12)^{8} = (0.88)^{8} = 0.3596 .$$

$$\mathbb{E}[\text{output}] = 0.3596 \times 400 = \mathbf{144\ \text{seeds}}.$$

*Strategy (i).* Must survive 2 years to first flowering, then survives each subsequent year with probability $0.6 \times 0.88 = 0.528$ (its own mortality *and* fire):

$$P(\text{reach age 2}) = (0.88)^{2} = 0.7744 .$$

$$\mathbb{E}[\text{breeding seasons} \mid \text{reaches 2}] = \frac{1}{1 - 0.528} = 2.119 .$$

$$\mathbb{E}[\text{output}] = 0.7744 \times 20 \times 2.119 = \mathbf{32.8\ \text{seeds}}.$$

**Semelparity still wins**, 144 to 33 — the fire regime at this frequency is not severe enough to overturn the eightfold advantage of waiting.

**(c) What the fire regime favours, and what would change the answer.**

At $q = 0.12$ the answer is semelparity. But the *sensitivity* to $q$ is the interesting part, because the two strategies depend on it very differently:

$$\text{(ii) scales as } (1-q)^{8} \quad\text{versus}\quad \text{(i) scales roughly as } (1-q)^{2}\times\frac{1}{1-0.6(1-q)} .$$

**The semelparous strategy is exponentially punished by fire frequency** because it must survive eight consecutive fire-free years. Solving for the crossover:

| $q$ | Strategy (ii) | Strategy (i) | Winner |
|---|---|---|---|
| 0.00 | 400 | 50.0 | ii |
| 0.12 | 144 | 32.8 | ii |
| 0.25 | 40.0 | 20.5 | ii |
| 0.40 | 6.7 | 11.2 | **i** |
| 0.50 | 1.6 | 7.1 | **i** |

**The crossover is near $q \approx 0.33$.** Below it, wait and invest; above it, breed early and often.

**Three things would change the answer:**

1. **A higher fire frequency**, as above — the semelparous strategy's exponential dependence on $(1-q)^{8}$ makes it fragile.
2. **Fire-cued germination or resprouting.** If seeds germinate preferentially after fire, or if the plant can resprout from a lignotuber, fire stops being pure mortality and becomes an opportunity. Many Australian and Mediterranean species do exactly this, and it converts the calculation completely.
3. **Variance rather than expectation.** These are *arithmetic* means, and the bet-hedging argument says the **geometric** mean is what matters. The semelparous strategy has enormous variance — a 36 percent chance of 400 seeds and a 64 percent chance of **zero**. Its geometric mean fitness over the seed bank is much lower relative to its arithmetic mean than the iteroparous strategy's is. **A proper analysis would compute geometric means, and doing so shifts the crossover substantially in favour of iteroparity.**

**Connecting to residual reproductive value.** The semelparous strategy is the corner solution $V_{t+1} = 0$: at age 8 the plant spends everything because it has decided there is no future. That decision is *correct* precisely when the probability of surviving to breed again is low — and fire is what makes it low.

$$\textbf{Fire frequency sets } V_{t+1}, \textbf{ and } V_{t+1} \textbf{ sets the strategy.}$$

**And the conservation reading:** a species adapted to a particular fire return interval can be driven extinct by a change in fire regime that never kills a single extra plant — if fires become more frequent than the time to first reproduction, a semelparous species is destroyed by fires that leave an iteroparous neighbour untouched. **This is a documented cause of decline in Australian *Banksia* and Californian chaparral species**, and it is an unusually clear case where a life-history parameter is the whole explanation.

</details>

## Flashback

**From Lesson 3.2 (logistic growth and MSY):** A population grows logistically with $r = 0.25\ \mathrm{yr}^{-1}$ and $K = 8000$. (a) Compute the biomass at maximum growth and the MSY. (b) A quota is set at 450 per year. Determine whether an equilibrium exists, and if so find both equilibria and classify them. (c) The population is currently at 1200. Predict its fate under this quota.

<details>
<summary>Solution</summary>

**(a)** $$N^{*} = \frac{K}{2} = \mathbf{4000}, \qquad \mathrm{MSY} = \frac{rK}{4} = \frac{0.25 \times 8000}{4} = \mathbf{500\ \text{per year}}.$$

**(b)** The quota of 450 is below MSY of 500, so equilibria exist. Set $dN/dt = 0$:

$$0.25N\left(1 - \frac{N}{8000}\right) = 450 \;\Longrightarrow\; 0.25N - 3.125\times10^{-5}N^{2} = 450$$

$$3.125\times10^{-5}N^{2} - 0.25N + 450 = 0$$

$$N = \frac{0.25 \pm \sqrt{0.0625 - 4(3.125\times10^{-5})(450)}}{2(3.125\times10^{-5})} = \frac{0.25 \pm \sqrt{0.0625 - 0.05625}}{6.25\times10^{-5}} = \frac{0.25 \pm 0.0790}{6.25\times10^{-5}}$$

$$N = \mathbf{2736}\ \text{or}\ \mathbf{5264}.$$

Classification: the growth parabola rises to the left of $K/2 = 4000$ and falls to the right, so

- $N = 5264$ (right of the peak): a small increase reduces growth below the quota and the population falls back — **stable**.
- $N = 2736$ (left of the peak): a small decrease reduces growth below the quota and the population falls further — **unstable**.

**(c)** The population is at **1200**, which is **below the unstable equilibrium of 2736**. It is on the wrong side.

Check directly:

$$\left.\frac{dN}{dt}\right|_{1200} = 0.25(1200)\left(1 - \frac{1200}{8000}\right) - 450 = 300(0.85) - 450 = 255 - 450 = -195\ \text{per year}.$$

Negative, and it gets worse as $N$ falls — at $N = 600$ the deficit is $150(0.925) - 450 = -311$.

$$\textbf{The population declines to extinction, and the decline accelerates.}$$

**The lesson from [3.2](03-02-logistic-growth-carrying-capacity.md) made concrete:** a quota that is perfectly sustainable *at high biomass* is fatal at low biomass, because a fixed quota does not shrink when the stock does. Had the harvest been set as a fixed **fraction** instead, it would automatically have fallen with the population and no such threshold would exist.

</details>

## Connections

- **Backward:** [3.1](03-01-exponential-growth-demography.md)'s $l_x$, $m_x$ and reproductive value are the currency this lesson optimizes; [3.2](03-02-logistic-growth-carrying-capacity.md)'s $r$ and $K$ are outcomes of the strategies described here rather than independent parameters.
- **Forward:** [4.1](04-01-competition-and-the-niche.md) asks what happens when two species with different life histories compete for the same resources, and the $r$-versus-$K$ contrast reappears as a coexistence mechanism.
- **Sideways:** the geometric-mean argument is the Kelly criterion of [mathematical-finance 3.4](../../mathematical-finance/lessons/03-04-merton-optimal-consumption-portfolio.md); constrained optimization with a budget is the Lagrange-multiplier structure of [micro-refresher 2.3](../../micro-refresher/syllabus.md); the declining force of selection with age is [1.1](01-01-fitness-quantitative.md)'s fitness applied to age classes.
