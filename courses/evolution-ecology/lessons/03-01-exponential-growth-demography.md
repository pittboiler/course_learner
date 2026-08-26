# Evolution & Ecology · Lesson 3.1: Exponential growth & demography

> ⏱ ~15 min · Module 3: Population Ecology · Builds on: [2.4](02-04-macroevolution-history-of-life.md), [1.1](01-01-fitness-quantitative.md) · Unlocks: 3.2 (logistic growth & carrying capacity)

## Why this matters

Darwin's argument for natural selection has an arithmetic step in the middle of it, and the step is this lesson: **more offspring are produced than can survive.** He got it from Malthus, and it is not a claim about any particular species — it is a mathematical inevitability. Any population with a positive per-capita growth rate grows exponentially, and exponential growth exceeds any finite resource base.

$$\textbf{Selection is not an extra hypothesis added to reproduction; it is what happens when unlimited reproduction meets a limited world.}$$

The second thing this lesson supplies is the demographic machinery that turns "birth rate" and "death rate" into a prediction. A population's growth is not determined by its current rates alone — it is determined by its **age structure**, and two populations with identical birth and death schedules can be growing and shrinking simultaneously because of how their individuals are distributed across ages. That is a fact with enormous practical consequences, and it is not obvious.

## The idea

**Exponential growth, in two forms.** For continuous breeding:

$$\frac{dN}{dt} = rN \quad\Longrightarrow\quad N(t) = N_0 e^{rt}$$

where $r$ is the **intrinsic rate of increase** — births minus deaths, per individual per unit time. For discrete generations:

$$N_{t+1} = \lambda N_t \quad\Longrightarrow\quad N_t = N_0\lambda^{t}, \qquad \lambda = e^{r}.$$

*In words: $r$ is the per-capita growth rate and $\lambda$ is the per-generation multiplier.* $r > 0$ ($\lambda > 1$) means growth, $r = 0$ ($\lambda = 1$) means stability, $r < 0$ means decline.

**This is the same equation as the birth–death process of [2.4](02-04-macroevolution-history-of-life.md)** with individuals replacing species — and, for that matter, the same equation as compound interest and as an allele spreading under weak selection ([1.1](01-01-fitness-quantitative.md)). **Exponential growth is not a biological fact; it is what any per-capita constant rate does.**

**Why the consequences are always underestimated.** Exponential growth is slow-looking then abrupt, and human intuition is linear. The classic illustration: a lily pad doubling daily that covers a pond in 30 days covers **half** the pond on day 29. **There is one doubling time of warning, no matter how long the process has been running.**

**Life tables organize the demography.** For each age class $x$:

| Symbol | Meaning |
|---|---|
| $l_x$ | **survivorship** — proportion of the original cohort alive at age $x$ |
| $m_x$ | **fecundity** — mean number of female offspring produced by a female of age $x$ |
| $l_x m_x$ | expected offspring from age $x$, per individual originally born |

**Three survivorship curve types**, plotted as $\log l_x$ against age:

- **Type I** — convex: low mortality early, high late. Large mammals, humans. Few offspring, heavy investment.
- **Type II** — straight line: **constant mortality rate at all ages**. Many birds, some reptiles. (Note this is the same memoryless exponential as species lifespans in [2.4](02-04-macroevolution-history-of-life.md).)
- **Type III** — concave: enormous early mortality, then low. Fish, insects, most plants, oysters. Vast numbers of offspring, no investment.

**And age structure determines the growth rate as much as the vital rates do.** Two populations with identical $l_x$ and $m_x$ schedules can grow at different rates if one has a higher proportion of individuals in reproductive age classes. A population with many young people will keep growing for decades after its birth rate falls to replacement — **demographic momentum** — because the large cohort of children has yet to reach reproductive age.

## The formal version

**Net reproductive rate.** The expected number of female offspring a newborn female produces over her whole life:

$$\boxed{\;R_0 = \sum_x l_x m_x\;}$$

*In words: sum, over all ages, the chance of surviving to that age times the offspring produced at it.*

| $R_0$ | Meaning |
|---|---|
| $> 1$ | the population **grows** per generation |
| $= 1$ | replacement — each female replaces herself exactly |
| $< 1$ | decline |

**Generation time.** The mean age of the mothers of all offspring produced by a cohort:

$$T = \frac{\sum_x x\,l_x m_x}{\sum_x l_x m_x} = \frac{\sum_x x\,l_x m_x}{R_0}$$

**Approximating $r$ from $R_0$ and $T$.** Since the population multiplies by $R_0$ every $T$ time units:

$$e^{rT} \approx R_0 \quad\Longrightarrow\quad \boxed{\;r \approx \frac{\ln R_0}{T}\;}$$

*In words: the growth rate is the log of the per-generation multiplier divided by how long a generation takes.* Exact solutions require the Euler–Lotka equation $\sum_x e^{-rx}l_xm_x = 1$; this approximation is good when $r$ is small.

**And it has a design consequence worth carrying.** $T$ is in the denominator, so **shortening the generation time raises $r$ exactly as effectively as increasing $R_0$ does** — the same structure as the annual genetic gain in [genetics 4.2](../../genetics/lessons/04-02-response-to-selection-qtl.md). This is why bacteria, insects and weeds outrun elephants and oaks: not by having more offspring per lifetime, but by having lifetimes measured in hours.

**Doubling time.**

$$N(t) = 2N_0 \;\Longrightarrow\; t_2 = \frac{\ln 2}{r} = \frac{0.693}{r}$$

**The "rule of 70":** at a growth rate of $p$ percent per year, doubling takes about $70/p$ years.

**The stable age distribution.** A population with fixed $l_x$ and $m_x$ converges, from *any* starting age structure, to a fixed proportional distribution across age classes, after which it grows at the constant rate $r$. **The transient before convergence is where demographic momentum lives**, and it can last a generation or more.

**Formally**, with a **Leslie matrix** $\mathbf{L}$ containing survival probabilities on the subdiagonal and fecundities in the top row:

$$\mathbf{n}_{t+1} = \mathbf{L}\,\mathbf{n}_t$$

- The **dominant eigenvalue** of $\mathbf{L}$ is $\lambda$, the asymptotic growth rate.
- Its **right eigenvector** is the stable age distribution.
- Its **left eigenvector** is the **reproductive value** by age — how much each age class contributes to future population.

*In words: the whole of age-structured demography is an eigenvalue problem*, and everything about the long-run behaviour is in the leading eigenpair ([linalg-refresher 5.1](../../linalg-refresher/syllabus.md)).

**Reproductive value is the concept that most changes how you think.** A newborn in a Type III species has low reproductive value — it will probably die. A juvenile that has survived the dangerous period has **higher** reproductive value than a newborn, sometimes far higher. **Conservation effort should be directed at the age class with the highest reproductive value per individual saved**, and that is often not the young.

## Picture

![Left: exponential growth curves for three values of r, with a linear line for comparison, illustrating that the exponential is nearly flat for a long time and then abruptly steep, annotated with the lily-pad observation that the pond is half covered one doubling before it is full. Centre: the three survivorship curve types plotted as log survivorship against age, convex for Type I, straight for Type II, concave for Type III, with example taxa. Right: two age pyramids with identical vital rates, one broad-based and one columnar, showing that the broad-based population continues growing for decades after its birth rate falls to replacement.](assets/03-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — a full life-table calculation).** A population of small mammals has this schedule:

| Age $x$ (yr) | $l_x$ | $m_x$ |
|---|---|---|
| 0 | 1.00 | 0 |
| 1 | 0.50 | 2.0 |
| 2 | 0.20 | 3.0 |
| 3 | 0.05 | 1.0 |
| 4 | 0.00 | — |

(a) Compute $R_0$. (b) Compute $T$. (c) Estimate $r$ and the doubling time. (d) What survivorship type is this?

(a) Build the $l_xm_x$ column:

| $x$ | $l_x$ | $m_x$ | $l_xm_x$ | $x\,l_xm_x$ |
|---|---|---|---|---|
| 0 | 1.00 | 0 | 0 | 0 |
| 1 | 0.50 | 2.0 | 1.00 | 1.00 |
| 2 | 0.20 | 3.0 | 0.60 | 1.20 |
| 3 | 0.05 | 1.0 | 0.05 | 0.15 |
| | | **sum** | $\mathbf{1.65}$ | $\mathbf{2.35}$ |

$$R_0 = \mathbf{1.65}.$$

Each female replaces herself 1.65 times — the population **grows**.

(b) $$T = \frac{\sum x\,l_xm_x}{R_0} = \frac{2.35}{1.65} = \mathbf{1.42\ \text{years}}.$$

(c) $$r \approx \frac{\ln R_0}{T} = \frac{\ln 1.65}{1.42} = \frac{0.5008}{1.42} = \mathbf{0.353\ \text{per year}}.$$

$$t_2 = \frac{\ln 2}{r} = \frac{0.693}{0.353} = \mathbf{1.96\ \text{years}}.$$

**The population doubles roughly every two years.** Over a decade that is a factor of $e^{0.353 \times 10} = 34$.

(d) Survivorship falls steeply and immediately — 50 percent lost in the first year, and 90 percent by age 2. Plotted as $\log l_x$: $\log(1.00) = 0$, $\log(0.50) = -0.30$, $\log(0.20) = -0.70$, $\log(0.05) = -1.30$. The successive drops are $-0.30$, $-0.40$, $-0.60$ — **steepening**, so the log curve is **concave**: **Type III**, heavy early mortality.

**Note the consistency check.** A Type III schedule with substantial fecundity and a short generation time is exactly what produces a high $r$. **The three quantities are not independent** — they are facets of one life-history strategy ([3.3](03-03-life-histories-tradeoffs.md)).

**Example 2 (why you'd care — demographic momentum and why a policy takes 50 years to work).** A country's total fertility rate falls to exactly replacement level in a single year. Its population continues growing for another 40 to 60 years. (a) Explain why. (b) Roughly how much additional growth is implied? (c) What would have to be true for the population to stop growing immediately?

(a) **Because the age structure is not at its stable distribution.**

The country has been growing, so each cohort is larger than the one before it: many children, fewer middle-aged, fewest elderly — a broad-based pyramid. When fertility drops to replacement, **each woman now has exactly enough daughters to replace herself** — but the large cohort of girls already born has not yet reached reproductive age.

So for the next few decades, an **unusually large number of women** enter reproduction, each having a replacement-level number of children. Births exceed deaths not because fertility is high but because **the number of potential mothers is high and the number of elderly people dying is low**.

$$\textbf{Demographic momentum: the population is committed to growth already encoded in its age structure.}$$

Growth continues until the broad base has aged through the whole pyramid and the distribution has converged to the stable age distribution — roughly one to two generations, hence 40 to 60 years.

(b) A useful rule of thumb: momentum adds roughly **20 to 50 percent** to a population that reaches replacement fertility from a rapidly-growing state, with the exact figure depending on how young the age structure is and how fast the transition happened.

A rough calculation: if the population has been growing at $r = 0.02$ with a generation time of 25 years, then during the transition roughly one generation's worth of "excess" reproducers passes through, and the population grows by a factor of order $e^{0.02 \times 25} \approx 1.65$ before stabilizing — though real transitions are gentler because mortality also improves.

**The important point is not the exact number but the sign and the timescale**: the growth is already determined, and no fertility policy can undo it.

(c) The population would stop growing immediately only if **the age structure were already at the stable distribution for replacement fertility** — that is, if the population had already been at zero growth for a generation or more, so that cohort sizes were roughly equal across ages.

**The alternative — and this is the uncomfortable part — is for fertility to drop *below* replacement**, so that the shrinking cohorts compensate for the oversized ones already alive. Several countries have done exactly this, and the result is a rapid transition to population decline and severe age-structure distortion once the momentum is spent.

**Two implications worth stating:**

1. **Demographic projections are unusually reliable over 20 to 30 years**, because most of the people who will be reproducing then are already born. This is why population forecasts outperform economic ones.
2. **Momentum works in both directions.** A population that has fallen below replacement has a *shrinking* momentum — it will continue to decline for decades even if fertility recovers to replacement, because the small cohorts already born are what will reproduce. **Japan, South Korea and much of Europe are in this phase, and it is why pro-natalist policy has such disappointing short-run effects.**

## Watch out

- **You might think exponential growth is a special case.** It is what *any* constant per-capita rate produces, and it is the null model. The interesting question is always what stops it ([3.2](03-02-logistic-growth-carrying-capacity.md)).
- **You might confuse $r$ with $\lambda$.** $\lambda = e^{r}$. Stability is $r = 0$ but $\lambda = 1$; a $\lambda$ of 0 means total extinction, not stability.
- **You might read $R_0 > 1$ as "the population is growing right now."** $R_0$ is a per-*generation* quantity computed from a schedule; the current growth rate also depends on the age structure, which may not be stable.
- **You might expect a policy change to have an immediate demographic effect.** Momentum means the outcome for the next 40 to 60 years is largely already determined by the age structure.
- **You might direct conservation effort at the youngest age class.** In a Type III species, newborns have **low reproductive value** — most will die anyway. Saving a juvenile that has already survived the dangerous stage is worth far more per individual.
- **You might read Type II survivorship as "average."** It means a **constant mortality rate at every age** — memoryless, like species lifespans in [2.4](02-04-macroevolution-history-of-life.md) — which is a strong and specific claim, not a compromise between I and III.

## One-liner

> Any constant per-capita rate gives exponential growth, which is why Malthus's arithmetic makes selection inevitable — and a population's growth is set as much by its age structure as by its vital rates, which is why demographic momentum commits a country to decades of growth the day its fertility reaches replacement.

## Problems

**P1 (🟢)** A population grows from 500 to 2000 individuals in 12 years. (a) Compute $r$. (b) Compute the doubling time. (c) Compute $\lambda$ per year. (d) Project the size after another 20 years, assuming exponential growth continues.

**P2 (🟡)** A life table for an insect:

| $x$ (weeks) | $l_x$ | $m_x$ |
|---|---|---|
| 0 | 1.00 | 0 |
| 1 | 0.30 | 0 |
| 2 | 0.15 | 8 |
| 3 | 0.05 | 12 |
| 4 | 0.00 | — |

(a) Compute $R_0$, $T$ and $r$. (b) Compute the doubling time in weeks. (c) A control programme halves survivorship at every age. Recompute $R_0$ and $r$, and state whether control succeeds.

**P3 (🔴, bridges to 3.3 and to conservation)** A sea turtle population has: eggs and hatchlings with 0.1 percent survival to age 1; juveniles with 80 percent annual survival for 20 years; adults with 90 percent annual survival, laying 100 eggs per year from age 21. (a) Roughly why is this a Type III curve, and what is the reproductive value of an egg relative to a 20-year-old juvenile? (b) Two conservation programmes are proposed: protecting nests (raising egg survival tenfold) or fitting trawl nets with turtle excluder devices (raising adult and large-juvenile survival from 0.90 to 0.95). Argue which is more effective, quantitatively. (c) Explain what general principle this illustrates about where to intervene in a life cycle.

<details>
<summary>Solutions</summary>

**P1 (a)** $$N(t) = N_0e^{rt} \;\Longrightarrow\; 2000 = 500\,e^{12r} \;\Longrightarrow\; e^{12r} = 4 \;\Longrightarrow\; r = \frac{\ln 4}{12} = \frac{1.386}{12} = \mathbf{0.1155\ \text{per year}}.$$

**(b)** $$t_2 = \frac{\ln 2}{r} = \frac{0.693}{0.1155} = \mathbf{6\ \text{years}}.$$

(Check: 12 years is two doublings, $500 \to 1000 \to 2000$ ✓)

**(c)** $$\lambda = e^{r} = e^{0.1155} = \mathbf{1.122}\ \text{per year},$$

i.e. 12.2 percent growth per year. (The rule of 70: $70/12.2 = 5.7$ years, close to the exact 6.)

**(d)** $$N(20\ \text{more}) = 2000\,e^{0.1155 \times 20} = 2000\,e^{2.31} = 2000 \times 10.07 = \mathbf{20{,}100}.$$

**P2 (a)**

| $x$ | $l_x$ | $m_x$ | $l_xm_x$ | $x\,l_xm_x$ |
|---|---|---|---|---|
| 0 | 1.00 | 0 | 0 | 0 |
| 1 | 0.30 | 0 | 0 | 0 |
| 2 | 0.15 | 8 | 1.20 | 2.40 |
| 3 | 0.05 | 12 | 0.60 | 1.80 |
| | | **sum** | $\mathbf{1.80}$ | $\mathbf{4.20}$ |

$$R_0 = \mathbf{1.80}, \qquad T = \frac{4.20}{1.80} = \mathbf{2.33\ \text{weeks}}, \qquad r \approx \frac{\ln 1.80}{2.33} = \frac{0.5878}{2.33} = \mathbf{0.252\ \text{per week}}.$$

**(b)** $$t_2 = \frac{0.693}{0.252} = \mathbf{2.75\ \text{weeks}}.$$

**(c)** Halving all $l_x$ halves every $l_xm_x$ term, so $R_0$ halves:

$$R_0' = \frac{1.80}{2} = \mathbf{0.90}.$$

$T$ is **unchanged** — it is a ratio of two sums that were both halved:

$$T' = \frac{4.20/2}{1.80/2} = \frac{2.10}{0.90} = 2.33\ \text{weeks} \ \checkmark$$

$$r' \approx \frac{\ln 0.90}{2.33} = \frac{-0.1054}{2.33} = \mathbf{-0.045\ \text{per week}}.$$

**Control succeeds** — $R_0 < 1$ and $r < 0$, so the population declines.

But note **how narrowly**. $R_0$ fell from 1.80 to 0.90, only just below 1. A control programme achieving a 45 percent survivorship reduction instead of 50 percent would give $R_0 = 0.99$ — still declining, barely. **A programme achieving 40 percent would fail.** This is characteristic of pest control: the effort required scales with how far above 1 the starting $R_0$ is, and a species with $R_0 = 5$ needs an 80 percent kill rate just to break even.

**Halving time**: $\ln 2 / 0.045 = 15.4$ weeks — slow, so the programme must be sustained.

**P3 (a)** **Type III** because mortality is overwhelmingly concentrated at the earliest stage: 99.9 percent of eggs die before age 1, and survival then becomes high (80 percent, then 90 percent annually). Plotted as $\log l_x$, that is a near-vertical drop followed by a gentle slope — the concave Type III shape.

**Reproductive value of an egg relative to a 20-year-old juvenile.** Reproductive value is expected future reproduction. Work with survival to first reproduction at age 21:

*From an egg:*

$$P(\text{egg} \to \text{age 21}) = \underbrace{0.001}_{\text{to age 1}} \times \underbrace{(0.80)^{20}}_{\text{ages 1--21}} = 0.001 \times 0.01153 = 1.15\times10^{-5}.$$

*From a 20-year-old juvenile:*

$$P(\text{age 20} \to \text{age 21}) = 0.80 .$$

$$\frac{RV_{\text{20-year-old}}}{RV_{\text{egg}}} = \frac{0.80}{1.15\times10^{-5}} = \mathbf{\sim 69{,}000}.$$

**A single large juvenile is worth roughly seventy thousand eggs.** That number is the whole argument.

**(b)** Compare the two programmes by their effect on $R_0$, which is proportional to survival to reproduction times lifetime fecundity.

*Programme 1 — nest protection, raising egg survival tenfold (0.001 → 0.01):*

Survival to age 21 rises tenfold, so $R_0$ rises by a factor of **10**.

*Programme 2 — turtle excluder devices, raising annual survival from 0.90 to 0.95 for large juveniles and adults.*

Two effects, and both matter:

**Effect on reaching maturity.** Take the excluder device as raising the later juvenile years (say ages 11–21, when turtles are large enough to be caught in trawls) from 0.80 to 0.85:

$$\frac{(0.85)^{10}}{(0.80)^{10}} = \frac{0.1969}{0.1074} = 1.83 .$$

**Effect on adult lifespan.** Expected reproductive lifespan with annual survival $s$ is $1/(1-s)$:

$$\frac{1/(1-0.95)}{1/(1-0.90)} = \frac{20}{10} = \mathbf{2.0}\ \text{— adults live twice as long and lay twice as many clutches.}$$

Combined: $1.83 \times 2.0 = \mathbf{3.7}$-fold increase in $R_0$.

**So on these numbers, nest protection looks better — 10× against 3.7×.** But the comparison is misleading and the real answer is the opposite, for three reasons:

1. **The tenfold improvement in egg survival is far harder than it sounds.** Egg survival is 0.001 largely because of predation, disease, and the extraordinary hazards of the pelagic juvenile phase — most of which happen at sea, where no nest programme reaches. Realistic nest protection raises survival to *emergence*, which is a small part of the 0.001. Achieving a genuine tenfold improvement in survival to age 1 is not attainable.

2. **The five-percentage-point improvement in annual survival is achievable**, and demonstrably so — turtle excluder devices are a fixed engineering change with measured effects.

3. **Elasticity analysis settles it.** Formal analysis of the Leslie matrix asks what proportional change in $\lambda$ follows a proportional change in each vital rate. For long-lived species with delayed maturity, **$\lambda$ is far more sensitive to adult and large-juvenile survival than to fecundity or egg survival** — because an adult contributes many future clutches while an egg contributes one very unlikely individual.

**This is exactly the analysis Crouse, Crowder and Caswell published in 1987**, and its conclusion — that headstarting and nest protection alone could not save loggerhead turtles, and that reducing trawl mortality could — led directly to the US requirement for turtle excluder devices. **It is one of the clearest cases of a demographic model changing policy.**

**(c) The general principle: intervene where $\lambda$ is most elastic, which for long-lived, late-maturing species is adult and large-juvenile survival, not fecundity.**

The reasoning is reproductive value. An intervention that saves an individual with high reproductive value saves all its expected future reproduction; an intervention that saves an individual with low reproductive value saves very little, because that individual was probably going to die anyway.

$$\textbf{The intuitive target — the young and numerous — is usually the wrong one.}$$

**And the principle inverts for short-lived species.** An annual plant or an insect has essentially no adult survival to protect, so $\lambda$ *is* most sensitive to fecundity and early survival. **The right intervention depends on the life history**, which is exactly what [3.3](03-03-life-histories-tradeoffs.md) is about — and it is why "protect the babies" is a policy that works for pest control and fails for turtles.

</details>

## Flashback

**From Lesson 2.4 (diversification as a birth–death process):** A clade has 1200 extant species and is 25 million years old, with a fossil-based extinction rate $\mu = 0.20$ per lineage per Myr. (a) Estimate $r$ and $\lambda$. (b) Compute the mean species lifespan. (c) Point out the structural correspondence between that calculation and this lesson's exponential population growth, and say what plays the role of what.

<details>
<summary>Solution</summary>

**(a)** $$r \approx \frac{\ln 1200}{25} = \frac{7.090}{25} = \mathbf{0.284\ \text{per lineage per Myr}}.$$

$$\lambda = r + \mu = 0.284 + 0.20 = \mathbf{0.484\ \text{per lineage per Myr}}.$$

**(b)** $$\bar t = \frac{1}{\mu} = \frac{1}{0.20} = \mathbf{5\ \text{Myr}}.$$

**(c)** The two calculations are **the same equation with different objects**:

| Macroevolution ([2.4](02-04-macroevolution-history-of-life.md)) | Population ecology (this lesson) |
|---|---|
| species | individuals |
| speciation rate $\lambda$ | per-capita birth rate $b$ |
| extinction rate $\mu$ | per-capita death rate $d$ |
| net diversification $r = \lambda - \mu$ | intrinsic rate of increase $r = b - d$ |
| $dN/dt = (\lambda-\mu)N$ | $dN/dt = (b-d)N = rN$ |
| $r \approx \ln N/t$ from a dated tree | $r = \ln(N_t/N_0)/t$ from a census |
| species lifespan $\sim \mathrm{Exp}(1/\mu)$ | Type II survivorship |

**The correspondence is exact, not analogical.** A birth–death process does not care what is being born and dying, and both cases are "each unit independently produces new units at rate $\lambda$ and disappears at rate $\mu$."

**One notational trap worth flagging:** $\lambda$ means *speciation rate* in macroevolution and *the finite rate of increase $e^{r}$* in population ecology. The same letter, two different quantities, and both appear in this course. Read it from context.

</details>

## Connections

- **Backward:** [2.4](02-04-macroevolution-history-of-life.md)'s birth–death process is this equation with species as the units; [1.1](01-01-fitness-quantitative.md)'s fitness is $R_0$ measured per genotype rather than per population.
- **Forward:** [3.2](03-02-logistic-growth-carrying-capacity.md) asks what stops exponential growth; [3.3](03-03-life-histories-tradeoffs.md) explains why the $l_x$ and $m_x$ schedules take the shapes they do, and why the right conservation intervention depends on them.
- **Sideways:** the Leslie matrix is an eigenvalue problem ([linalg-refresher 5.1](../../linalg-refresher/syllabus.md)); the exponential-growth ODE is [ode-refresher 1.2](../../ode-refresher/syllabus.md); $R_0$ is the same quantity as the basic reproduction number in epidemiology, with infections replacing offspring.
