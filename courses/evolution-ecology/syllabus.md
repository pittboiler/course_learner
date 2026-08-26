# Evolution & Ecology — Syllabus

> Life Sciences · Tier 1 · 17 lessons · Prereqs: [general-biology](../general-biology/syllabus.md), [prob-stat-refresher](../prob-stat-refresher/syllabus.md) · Roadmap id: `evolution-ecology`

## Goal

Learn to read life the way an evolutionary biologist and an ecologist do: as a system of populations shaped by heredity, chance, and the arithmetic of birth and death. `general-biology` 4.1–4.2 already gave you *that* selection happens and *that* Hardy–Weinberg is the null model; this course makes both quantitative. You will measure fitness, compute the per-generation change in an allele frequency from a fitness array, test a real population against Hardy–Weinberg with a statistic, weigh drift against selection using $N_e s$, and derive the equilibria where a "harmful" allele stays common. From there: how one lineage becomes two, how to date a split from sequence data, and how populations grow, compete, eat each other, and cycle energy.

**Scope discipline.** This course owns population genetics *as evolutionary process*, and ecology entire. It does not re-derive:

| Already taught elsewhere | Owner |
|---|---|
| That selection follows from variation + heredity + differential reproduction; the evidence for common descent | [general-biology](../general-biology/syllabus.md) 4.1 |
| Hardy–Weinberg as an equation, carrier arithmetic, drift/bottleneck/founder vocabulary | [general-biology](../general-biology/syllabus.md) 4.2 |
| Reading a phylogeny, clades, homology vs. analogy | [general-biology](../general-biology/syllabus.md) 4.3 |
| Energy flow, the ten-percent rule, nutrient cycles at intro level | [general-biology](../general-biology/syllabus.md) 4.4 |
| Solving and classifying the ODEs (logistic, Lotka–Volterra) as dynamical systems | [dynamical-systems](../dynamical-systems/syllabus.md) 1.3, 3.1–3.3 |
| Evolutionarily stable strategies as game theory | [grad-game-theory](../grad-game-theory/syllabus.md) 6.4 |
| Mendelian transmission, linkage, mutation classes, heritability, inbreeding, LD | [genetics](../genetics/syllabus.md) |

Deliberately skipped: molecular-genetics depth (that's `genetics`) and lab protocol. Every assumed fact is on the [reference card](reference.md) with a pointer to where it is taught.

## Dangerous Checklist

When you finish, you can:

- [ ] Convert survival and fecundity data into absolute and relative fitnesses, and compute $\Delta p$ for one generation from a fitness array
- [ ] Classify a selection regime as directional, stabilizing, or disruptive from how a trait distribution changes, and quantify it with a selection gradient
- [ ] Test a real genotype count against Hardy–Weinberg with a chi-square, and read the *direction* of the deviation as evidence about which assumption failed
- [ ] Predict how genetic drift, gene flow, mutation, and selection each move allele frequencies, and say which force wins in a given population size
- [ ] Derive the mutation–selection balance frequency of a deleterious allele and the overdominance equilibrium that keeps a "harmful" allele common
- [ ] Apply competing species concepts to a real case and explain what reproductive isolation actually requires
- [ ] Read a phylogenetic tree correctly — synapomorphies define clades, tips are all equally modern — and spot the classic tree-thinking mistakes
- [ ] Estimate a divergence time from sequence differences with a molecular clock, accounting for change on both lineages
- [ ] Model population growth with the exponential and logistic equations, locate the maximum-growth point, and predict a life-history strategy from r/K trade-offs
- [ ] Analyze the Lotka–Volterra competition and predator–prey models on the phase plane and state the conditions for coexistence, exclusion, or oscillation
- [ ] Trace energy and nutrients through an ecosystem, explain the ~10% rule and why food chains are short, and reason about extinction risk in small populations

## Modules

### Module 1: Evolutionary Mechanisms & Population Genetics

The engine room. We establish *why* evolution happens, then turn it into bookkeeping on allele frequencies — the null model and the four forces that break it.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Fitness: making selection quantitative | Turn survival and fecundity into fitnesses and compute one generation of allele-frequency change | absolute vs. relative fitness $w$, selection coefficient $s$, mean fitness $\bar w$, $\Delta p$ from a fitness array, dominance and the speed of selection |
| 1.2 | Modes of selection on a continuous trait | Read directional, stabilizing, and disruptive selection off a distribution and quantify the shift | selection differential and gradient, change in mean vs. variance, adaptation vs. by-product vs. constraint, frequency-dependent selection |
| 1.3 | Hardy–Weinberg as a testable null | Test observed genotype counts against equilibrium and read what the deviation means | chi-square goodness of fit, X-linked and multi-allele HW, one generation to equilibrium, deviation direction as a diagnostic |
| 1.4 | Drift, effective population size & gene flow | Predict when drift beats selection, and how much migration erases divergence | variance of $\Delta p$, fixation probability $p$ and time $\approx 4N_e$, heterozygosity decay $(1-1/2N_e)^t$, $N_e$ vs. census size, island model, $N_m$ and the one-migrant rule |
| 1.5 | Mutation & the Balance of Forces | Derive the equilibrium where mutation feeds a deleterious allele that selection removes, and where heterozygote advantage parks it | mutation rate $\mu$; mutation–selection balance $\hat q=\sqrt{\mu/s}$; overdominance / balancing selection; the drift barrier $4N_e s$ |

**Boss problem 1:** A recessive allele lethal in homozygotes ($w_{aa}=0$; $AA$ and $Aa$ both fitness 1) is fed by recurrent mutation $A\to a$ at rate $\mu = 4\times10^{-6}$ per generation. (a) Derive and compute the mutation–selection equilibrium frequency $\hat q$. (b) A bottleneck holds $N_e = 25$ for many generations; using the drift barrier $4N_e s_{\text{eff}}$ (note the allele is only "seen" by selection when it surfaces in homozygotes), argue whether selection or drift controls this allele when rare. (c) Contrast the sickle-cell case where the heterozygote is fittest — write the overdominance equilibrium $\hat q = s/(s+t)$ and explain why balancing selection keeps a "harmful" allele far more common than mutation alone ever could.

### Module 2: Speciation, Phylogenetics & Macroevolution

From frequencies within a population to the branching of the tree of life: how one lineage becomes two, how to read the tree that results, and how to think about deep time.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | What Is a Species? | Apply and critique the major species concepts and say what reproductive isolation demands | biological / morphological / phylogenetic species concepts; pre- and post-zygotic isolation; ring species, edge cases |
| 2.2 | How Species Split | Distinguish the geographic modes of speciation and the roles of selection and drift in divergence | allopatric / sympatric / parapatric speciation; reinforcement; adaptive radiation |
| 2.3 | Inferring trees & dating them | Build a tree from characters or distances and put a date on a node | parsimony, distance methods, synapomorphy vs. homoplasy; molecular clock, Jukes–Cantor correction, calibration, long-branch attraction, coalescence intuition |
| 2.4 | Macroevolution & the History of Life | Connect microevolutionary process to large-scale pattern across geologic time | speciation/extinction rates, mass extinctions, key innovations, convergence; punctuated equilibrium vs. gradualism |

**Boss problem 2:** Orthologous genes in two lineages differ at 8% of aligned sites; the neutral substitution rate is $2\times10^{-9}$ per site per year. (a) Estimate the divergence time with a molecular clock — being careful that the 8% is change accumulated on *both* lineages since their common ancestor. (b) Given a four-taxon dataset, explain why shared *derived* characters (synapomorphies), not overall similarity, define a clade, and how a single fast-evolving lineage can fool a naïve grouping (long-branch attraction). (c) Explain, in terms of the biological species concept, why this genetic distance alone does not prove the two lineages are separate species.

### Module 3: Population Ecology

Now the arithmetic of populations: births, deaths, and the growth curves they produce — plus the life-history trade-offs that decide a species' whole strategy. This is where the models connect to `dynamical-systems`.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | Exponential Growth & Demography | Model unregulated growth and read a population's fate from its age structure | per-capita rate $r$, $dN/dt = rN$, doubling time; birth/death schedules, age structure, geometric vs. continuous growth |
| 3.2 | Logistic Growth & Carrying Capacity | Add self-limitation, locate the maximum-growth point, and interpret the S-curve | density dependence, carrying capacity $K$, $dN/dt = rN(1-N/K)$, inflection at $K/2$, maximum sustainable yield |
| 3.3 | Life Histories & Trade-offs | Predict a species' reproductive strategy from the trade-offs it faces | r- vs. K-selection, semelparity vs. iteroparity, offspring number/size trade-off, survivorship curves |

**Boss problem 3:** A reintroduced population of 40 animals grows logistically toward $K = 500$ with $r = 0.3\,\text{yr}^{-1}$. (a) At what population size is the number of individuals *added per year* ($dN/dt$) maximized, and what is that maximum? (b) Argue, without grinding through the integral, why the time to grow from 40 to 250 equals the time from 250 to 460 (use the S-curve's symmetry about its inflection). (c) The species is long-lived with few, heavily-cared-for offspring; using r/K logic, judge whether harvesting at the "maximum sustainable yield" point $N=K/2$ is safe or risky for it.

### Module 4: Community & Ecosystem Ecology

Species stop living in isolation. We put them together — competing, eating each other, cooperating — with the Lotka–Volterra models as the workhorse, then zoom out to energy and nutrients moving through the whole system, and finish with a taste of behavior and conservation.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Competition & the Niche | Analyze two-species competition on the phase plane and state when coexistence is possible | fundamental vs. realized niche; Lotka–Volterra competition, zero-growth isoclines; competitive exclusion principle; resource partitioning |
| 4.2 | Predation & the Lotka–Volterra Oscillator | Explain why predator and prey cycles arise and what stabilizes or destabilizes them | predator–prey equations, neutral cycles, functional response, paradox of enrichment; keystone predators |
| 4.3 | Mutualism, Succession & Diversity | Reason about positive interactions and how communities assemble and diversify over time | mutualism / commensalism / parasitism; primary and secondary succession; species–area relationship, diversity indices, disturbance |
| 4.4 | Ecosystems: Energy Flow & Nutrient Cycling | Trace energy and matter through trophic levels and explain why food chains stay short | trophic levels, primary productivity, the ~10% rule, ecological pyramids; carbon and nitrogen cycles, decomposition |
| 4.5 | A Taste of Behavior & Conservation | Connect individual behavior and population viability to real conservation decisions | optimal foraging, kin selection & Hamilton's rule, ESS (game theory in [grad-game-theory 6.4](../grad-game-theory/lessons/06-04-evolutionary-game-theory.md)); extinction vortex, minimum viable population, reserve design |

**Boss problem 4:** Two species compete under Lotka–Volterra with carrying capacities $K_1, K_2$ and competition coefficients $\alpha$ (effect of 2 on 1) and $\beta$ (effect of 1 on 2). (a) State the two inequalities under which they *stably coexist* and translate them into the sentence "each species limits itself more than it limits the other." (b) Sketch the isocline configuration for stable coexistence versus the founder-controlled (priority-effect) bistable case, and say what flips between them. (c) Zoom out: if both species share a trophic level and only ~10% of energy crosses each link, explain why adding a trophic level above them is energetically "expensive," and connect competitive exclusion to why real food webs stay narrow and short.

> Note (2026-08-26): Module 1 was re-pitched so it *deepens* `general-biology` 4.1–4.2 rather than repeating it — 1.1 now starts from fitness arithmetic (the qualitative logic of selection is owned by gen-bio 4.1) and 1.3 starts from testing Hardy–Weinberg rather than stating it. This course is the library's owner of population genetics as evolutionary process, and of molecular clocks and coalescence, both ceded from `genetics`. Still 17 lessons.

## Sources of truth

- Futuyma & Kirkpatrick, *Evolution* — for evolutionary-mechanism and phylogenetics conventions and rigor level.
- Freeman & Herron, *Evolutionary Analysis* — for the population-genetics derivations and problem style.
- Begon, Townsend & Harper, *Ecology: From Individuals to Ecosystems* — for ecological scope and terminology.
- Gotelli, *A Primer of Ecology* — for the exponential, logistic, and Lotka–Volterra model treatments.
