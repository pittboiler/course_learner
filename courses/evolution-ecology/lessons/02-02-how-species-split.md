# Evolution & Ecology · Lesson 2.2: How species split

> ⏱ ~15 min · Module 2: Speciation, Phylogenetics & Macroevolution · Builds on: [2.1](02-01-what-is-a-species.md), [1.4](01-04-drift-ne-gene-flow.md) · Unlocks: 2.3 (inferring trees & dating them)

## Why this matters

[2.1](02-01-what-is-a-species.md) catalogued the barriers that make two lineages separate species. This lesson asks how they arise — and the whole difficulty is one number from [1.4](01-04-drift-ne-gene-flow.md).

**One migrant per generation is enough to keep two populations genetically similar.** So any account of speciation has to explain how divergence proceeds against gene flow that is, by that standard, almost nothing. Geography solves it trivially: cut the migration to zero and divergence is automatic. Every other mode of speciation is a story about how divergence beat gene flow, and that is why the modes are ranked by how much geographical help they get.

The second thing this lesson supplies is a genuine exception. **Polyploidy makes a new species in one generation**, instantaneously and sympatrically, and it is responsible for a large fraction of flowering-plant diversity. It is the one case where the difficulty above simply does not arise.

## The idea

**The geographic modes, ranked by how much gene flow they must overcome.**

| Mode | Geography | Gene flow during divergence | Frequency |
|---|---|---|---|
| **Allopatric** | complete physical separation | **zero** | the default; most speciation |
| **Peripatric** | a small isolated peripheral population | near zero | common; drift-assisted |
| **Parapatric** | adjoining ranges, contact along a boundary | intermediate | occasional |
| **Sympatric** | fully overlapping ranges | **full** | rare, and contested case by case |

**Allopatric speciation is easy and is therefore the null hypothesis.** Split a range with a river, a mountain range, a rising sea level or a glacier, and the two halves accumulate different mutations and experience different selection. Reproductive isolation arises as an **incidental by-product** of independent divergence — nobody was selected to be isolated, and Dobzhansky–Muller incompatibilities ([2.1](02-01-what-is-a-species.md)) accumulate simply because the two lineages never test each other's combinations.

$$\textbf{In allopatry, isolation is a side-effect. In sympatry, it must be built against opposition.}$$

**Peripatric speciation adds drift.** A small population at the edge of a range — or founding a new island — has a tiny $N_e$, so from [1.4](01-04-drift-ne-gene-flow.md) it drifts fast and loses heterozygosity fast. Divergence is accelerated, and a founder event can shift allele frequencies dramatically in one generation. This is why island archipelagos produce so many species.

**Sympatric speciation is hard for a specific, quantifiable reason: recombination.** Suppose disruptive selection favours two ecological types ([1.2](01-02-modes-of-selection.md)) and assortative mating is beginning to keep them apart. Two sets of loci are involved — those controlling the **ecological trait** and those controlling the **mating preference** — and every generation, recombination between them shuffles the association apart, producing individuals adapted to one niche and preferring to mate with the other type.

**The solution, when it happens, is to remove recombination from the problem:**

- A **"magic trait"** — one trait serving as both the ecological adaptation *and* the mating cue, so there are no two sets of loci to recombine. Host preference in phytophagous insects is the canonical case: the insects mate *on* their host plant, so choosing a host is choosing a mate.
- **Physical linkage** or an **inversion** suppressing recombination between the two sets ([genetics 2.4](../../genetics/lessons/02-04-chromosomal-mutations.md)).

**Reinforcement — selection *for* isolation.** When two partially-diverged populations meet again and their hybrids are unfit, an individual that mates with its own type leaves more surviving offspring. **Prezygotic barriers are therefore favoured directly**, and this is the one circumstance in which reproductive isolation is selected for rather than arising incidentally.

**Its signature is testable and specific: reproductive character displacement.** Mating preferences should be *stronger in sympatry than in allopatry* for the same species pair — the discrimination is enhanced exactly where it is needed.

**Polyploidy: instantaneous speciation.** A doubling of the chromosome set produces, in one generation, an individual reproductively isolated from its parents:

$$\text{tetraploid } (4n) \times \text{diploid } (2n) \;\longrightarrow\; \text{triploid } (3n) \;\longrightarrow\; \textbf{sterile}$$

The triploid cannot pair its chromosomes evenly at meiosis I and produces aneuploid gametes ([genetics 2.4](../../genetics/lessons/02-04-chromosomal-mutations.md)). **A new tetraploid is instantly isolated from its diploid parents and fully fertile with other tetraploids.**

This is common — roughly **15 percent of angiosperm speciation events** and 30 percent in ferns involve polyploidy, and all flowering plants are ancient polyploids.

## The formal version

**Divergence against gene flow.** From [1.4](01-04-drift-ne-gene-flow.md), migration and drift balance at $F_{ST} \approx 1/(1+4N_em)$. Add selection favouring different alleles in the two environments, with strength $s$, and the condition for a locus to remain differentiated is roughly

$$\boxed{\;s > m\;}$$

*In words: local selection must be stronger than the migration rate, or the locally adapted allele is swamped.* This is a genuinely simple and demanding criterion, and it explains why parapatric divergence is patchy: some loci exceed it and stay differentiated while the rest of the genome is homogenized.

**Genomic islands of divergence.** The consequence of $s > m$ acting locus by locus is that a genome scan across two parapatric populations shows **most of the genome at low $F_{ST}$ with a few sharp peaks** — regions where selection exceeds migration. The peaks are the "islands," and they are where speciation genes are sought.

**Why an inversion helps, quantitatively.** An inversion suppresses recombination across the region it spans ([genetics 2.4](../../genetics/lessons/02-04-chromosomal-mutations.md)), so all the locally adaptive alleles inside it are inherited as **one unit**. Instead of each locus needing $s_i > m$ individually, the whole block needs

$$\sum_i s_i > m .$$

*In words: linkage lets weak loci pool their selective advantage.* This is why inversions are found at unusually high frequency in the differentiated regions of hybridizing species pairs, and why "supergenes" — inversions carrying co-adapted allele sets — turn up repeatedly in mimicry, in social behaviour in ants, and in bird plumage morphs.

**Reinforcement, formally.** Let hybrid fitness be $1-h$ and let a fraction $\alpha$ of an individual's matings be with the other type. A discriminating allele that reduces $\alpha$ gains

$$\Delta w \approx \alpha h ,$$

so reinforcement is favoured when **hybrids are unfit ($h$ large) and encounters are frequent ($\alpha$ large)**.

**But there is a tension that decides the outcome.** Gene flow through the surviving hybrids also **homogenizes the discrimination alleles themselves**, working against the process. Reinforcement therefore succeeds when isolation is already substantial and fails when it is weak — an intermediate window:

$$\text{too little divergence} \Rightarrow \text{gene flow swamps the discrimination alleles}$$
$$\text{too much divergence} \Rightarrow \text{no hybrids form, nothing to select on}$$

**Reinforcement is a finishing process, not a starting one**, and that is why it is almost always found in taxa that were already largely isolated.

**Polyploidy: auto versus allo.**

| Type | Origin | Meiosis | Fertility |
|---|---|---|---|
| **Autopolyploid** | genome doubling within one species | multivalents form; irregular | often reduced |
| **Allopolyploid** | hybridization **then** doubling | each subgenome pairs with its own homologue | **regular and fertile** |

**Allopolyploidy is the productive route**, because doubling *restores* a pairing partner for every chromosome. The classic worked case is bread wheat ($AABBDD$, hexaploid), and *Tragopogon* in eastern Washington provides two allopolyploid species that arose in the wild within the last century — speciation observed in real time.

## Picture

![Left: four panels showing the geographic modes. Allopatric, with a range split by a barrier and two populations diverging in isolation. Peripatric, with a small founder population budding off the edge of a large range. Parapatric, with two populations meeting along a boundary and a cline in allele frequency across it. Sympatric, with two forms overlapping completely. Right: a genome scan of F-ST along a chromosome for a parapatric pair, mostly flat and low with two sharp peaks labelled genomic islands of divergence, one of which is annotated as spanning an inversion, with a note that inside the inversion the loci are inherited as one unit so their selection coefficients sum against migration.](assets/02-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — will local adaptation survive gene flow?).** Two populations of a plant occupy adjacent soil types. Three loci confer local adaptation, with selection coefficients $s_1 = 0.15$, $s_2 = 0.04$ and $s_3 = 0.02$. Migration between them is $m = 0.05$. (a) Which loci remain differentiated? (b) An inversion arises spanning all three loci. Recompute. (c) Explain the consequence for a genome scan.

(a) Apply $s > m$ locus by locus, with $m = 0.05$:

| Locus | $s$ | $s > m$? | Outcome |
|---|---|---|---|
| 1 | 0.15 | $0.15 > 0.05$ ✓ | **remains differentiated** |
| 2 | 0.04 | $0.04 < 0.05$ ✗ | **swamped** |
| 3 | 0.02 | $0.02 < 0.05$ ✗ | **swamped** |

Only locus 1 survives; the other two are homogenized by migration despite being genuinely adaptive.

(b) Inside the inversion, recombination is suppressed, so the three loci are inherited as a single unit and their advantages pool:

$$\sum_i s_i = 0.15 + 0.04 + 0.02 = 0.21 > 0.05 = m .$$

**All three now remain differentiated**, because the block as a whole is under selection four times stronger than migration.

**The inversion did not change any locus's selective value.** It changed the *unit of inheritance*, and that alone converted two swamped loci into two maintained ones.

(c) The genome scan changes character completely.

*Without the inversion:* one narrow $F_{ST}$ peak at locus 1, and background elsewhere. The two adaptive loci that were swamped are invisible.

*With the inversion:* one **broad, high** $F_{ST}$ peak spanning the entire inverted region — not just the three selected sites, because suppressed recombination means the whole block diverges together, including all the neutral sites inside it.

**This is why inversions dominate genome scans of hybridizing species pairs**, and it is a caution for interpretation: a wide divergent region is evidence of **suppressed recombination**, not of many closely-spaced selected sites. Finding the causal loci inside an inversion is correspondingly hard, because the usual tool — recombination narrowing the interval ([genetics 4.4](../../genetics/lessons/04-04-linkage-disequilibrium-gwas.md)) — is exactly what the inversion has removed.

**Example 2 (why you'd care — testing for reinforcement, and what the test rules out).** Two species of frog occur in overlapping and non-overlapping parts of their ranges. Female preference for conspecific male calls is measured: in **allopatric** populations, females choose conspecific males 65 percent of the time; in **sympatric** populations, 92 percent. (a) What is this pattern called and what does it suggest? (b) Give two alternative explanations that do not involve reinforcement. (c) Design the experiment that distinguishes them.

(a) **Reproductive character displacement** — mating discrimination is stronger where the two species co-occur than where they do not.

It suggests **reinforcement**: in sympatry, females that mated with heterospecific males produced unfit hybrids and left fewer descendants, so selection strengthened discrimination exactly where hybridization was possible. In allopatry there was no such pressure, so discrimination drifted or was never elaborated.

(b) Two alternatives, both real and both commonly overlooked:

**1. Differential fusion (a sorting artefact).** Suppose many populations came into secondary contact with varying levels of discrimination. Those with **weak** discrimination hybridized extensively and merged back into a single species — so they no longer exist as separate species to be sampled. Those with **strong** discrimination remained distinct and are the sympatric populations we observe.

$$\textbf{The pattern is produced by which pairs survived as species, not by evolution within any population.}$$

This is a selection-of-observations effect rather than selection on organisms, and it produces the identical signature.

**2. Ecological character displacement with a byproduct effect.** In sympatry, competition for resources may drive divergence in body size ([4.1](04-01-competition-and-the-niche.md)). If call frequency depends on body size — which it does in frogs, since larger animals produce lower calls — then calls diverge in sympatry as an incidental consequence of ecological divergence, and females discriminate better simply because the signals are now more different.

**Nobody was selected for discrimination; the signals just moved apart.**

*(A third possibility worth naming: the sympatric and allopatric populations may differ for historical reasons unrelated to contact — different source populations, different ages.)*

(c) The distinguishing experiment has three parts, and each rules out a specific alternative:

**Part 1 — measure the signals, not just the responses.**

Record male calls in sympatry and allopatry and measure their acoustic properties. If **sympatric calls are more different from each other** than allopatric calls are, ecological character displacement (alternative 2) is supported. If the **calls are unchanged** and only the *females' discrimination* has sharpened, reinforcement is supported. **This is the single most informative measurement**, because reinforcement acts on preference while ecological displacement acts on the signal.

**Part 2 — reciprocal-transplant preference tests.**

Test allopatric females with **sympatric** males' calls, and sympatric females with **allopatric** males' calls. If sympatric females discriminate better *even against allopatric calls*, the change is in the female's perceptual or preference machinery, not in signal separation.

**Part 3 — the population-genetic test that addresses differential fusion.**

Reconstruct the phylogeography: are sympatric populations derived from allopatric ones (consistent with reinforcement evolving *in situ*), or do they form a separate old lineage (consistent with sorting)? And crucially, **look for populations currently in early secondary contact** — reinforcement predicts a *gradient* of discrimination with time since contact, while differential fusion predicts only the survivors, with no gradient.

**A fourth, decisive test if the system permits it:** **measure hybrid fitness directly.** Reinforcement requires hybrids to be unfit. If hybrids are fully viable and fertile, there is no selection pressure for reinforcement and the pattern must have another cause.

**Why this matters beyond frogs.** Reinforcement was rejected for decades — Darwin doubted it, and mid-century theorists showed it should usually fail because gene flow homogenizes the discrimination alleles. The modern evidence is much stronger, but it rests on studies that did exactly this work: **showing that the pattern is not differential fusion, not ecological displacement, and not history.** A reproductive-character-displacement pattern is the *beginning* of the argument, not the end of it.

## Watch out

- **You might treat sympatric speciation as impossible.** It is *difficult*, for the specific reason that recombination breaks the association between ecological adaptation and mating preference. Magic traits and inversions are the documented ways around it.
- **You might think allopatric speciation requires selection for isolation.** Isolation is an **incidental by-product** of independent divergence. Nobody is selected to be a different species.
- **You might expect gene flow to homogenize the whole genome.** Loci with $s > m$ stay differentiated. Genome scans of parapatric pairs show islands of divergence in a homogenized background.
- **You might read a broad $F_{ST}$ peak as many selected sites.** It is usually **suppressed recombination** — an inversion — dragging neutral sites along with a few selected ones.
- **You might read reproductive character displacement as proof of reinforcement.** Differential fusion and ecological character displacement produce the same pattern. Measure whether signals or preferences changed.
- **You might think polyploid speciation is a botanical curiosity.** It accounts for roughly 15 percent of angiosperm speciation events, and every flowering plant is an ancient polyploid.

## One-liner

> One migrant per generation is enough to prevent divergence, so every mode of speciation except allopatry is a story about beating gene flow — which requires $s > m$ locus by locus, unless an inversion lets weak loci pool their advantage, or unless a polyploid simply does it in one generation.

## Problems

**P1 (🟢)** Populations exchange migrants at $m = 0.02$. Four loci confer local adaptation with $s = 0.10$, $0.03$, $0.015$ and $0.008$. (a) Which remain differentiated? (b) An inversion captures the three weakest. Recompute. (c) State in one sentence what the inversion changed.

**P2 (🟡)** A tetraploid plant arises by genome doubling within a diploid population. (a) Explain why it is immediately reproductively isolated from its parents, being precise about the meiotic mechanism. (b) What is the immediate problem it faces, and what solves it? (c) Contrast auto- and allopolyploidy with respect to meiotic pairing, and explain why allopolyploids are usually the more fertile.

**P3 (🔴, bridges to 1.2 and to 4.1)** In a lake, a fish species feeds both on plankton in open water and on invertebrates on the bottom. Intermediate morphologies do neither well. (a) Name the mode of selection and predict what happens to trait variance. (b) Explain precisely why disruptive selection alone will not produce two species, using the recombination argument. (c) Suppose feeding morphology also determines where in the lake individuals spend their time, and mating occurs where individuals feed. Explain what this changes and why it is called a magic trait.

<details>
<summary>Solutions</summary>

**P1 (a)** With $m = 0.02$, apply $s > m$:

| Locus | $s$ | Outcome |
|---|---|---|
| 1 | 0.100 | $> 0.02$ → **differentiated** |
| 2 | 0.030 | $> 0.02$ → **differentiated** |
| 3 | 0.015 | $< 0.02$ → **swamped** |
| 4 | 0.008 | $< 0.02$ → **swamped** |

Two of four survive.

**(b)** The inversion captures loci 2, 3 and 4, so they are inherited as one unit:

$$\sum s = 0.030 + 0.015 + 0.008 = 0.053 > 0.02 = m .$$

**All three within the inversion now remain differentiated**, and locus 1 was already fine on its own. **All four loci are now maintained.**

**(c)** The inversion changed the **unit of inheritance**, letting three individually-swamped loci pool their selective advantage into one block that migration cannot break up — without changing any locus's own selection coefficient.

**P2 (a)** The tetraploid ($4n$) can cross with a diploid ($2n$) parent, but the offspring is **triploid** ($3n$).

At meiosis I, chromosomes must pair and segregate into two equal sets. A triploid has **three** copies of every chromosome, and three cannot be divided evenly into two. Each trivalent (or bivalent-plus-univalent) segregates independently, so gametes receive an essentially random number of copies of each chromosome — **aneuploid gametes** ([genetics 2.4](../../genetics/lessons/02-04-chromosomal-mutations.md)).

With $n$ chromosome types each segregating independently, the probability of a balanced gamete is roughly $(1/2)^{n-1}$ — vanishingly small for any real chromosome number. **The triploid is effectively sterile.**

So the tetraploid is **postzygotically isolated** from its diploid parents in a single generation, and fully fertile with other tetraploids (which pair normally, four copies forming two bivalents or one quadrivalent). This is instantaneous, sympatric speciation.

**(b)** The immediate problem is **finding a mate.** A single new tetraploid is one individual in a population of diploids; every mating available to it produces sterile triploids. This is the **minority cytotype disadvantage**, and it is why polyploidy usually fails.

What solves it:

- **Self-fertilization**, which many plants can do. A selfing tetraploid founds a tetraploid population by itself, and this is why polyploidy is so much commoner in selfing lineages.
- **Asexual or vegetative reproduction** — rhizomes, runners, apomixis — buying time to build up numbers.
- **Recurrent formation.** Polyploids arise repeatedly from the same parents (via unreduced gametes), so several may appear in the same place and find each other. Genetic evidence shows most natural polyploid species formed multiple independent times.
- **Local clumping**, since plant dispersal is limited and offspring grow near their parent.

**Note that all of these are features plants have and most animals do not** — which is the main reason polyploid speciation is a plant phenomenon.

**(c)**

| | Autopolyploid | Allopolyploid |
|---|---|---|
| Origin | doubling within **one** species | hybridization between two species, **then** doubling |
| Chromosome sets | four **homologous** copies (AAAA) | two pairs of **homoeologous** sets (AABB) |
| Pairing at meiosis | four similar chromosomes compete → **multivalents** | each A pairs with its A partner, each B with its B → **bivalents only** |
| Segregation | irregular; some aneuploid gametes | regular |
| Fertility | often reduced | **usually good** |

**Why allopolyploids are more fertile:** the key is that meiotic pairing requires each chromosome to have **exactly one** partner. In an autopolyploid, four identical chromosomes can pair in any combination, forming multivalents that segregate unpredictably. In an allopolyploid, the two subgenomes are divergent enough that A chromosomes pair only with A and B only with B — **each chromosome has exactly one correct partner, so meiosis is as regular as in a diploid.**

**The elegant part** is that hybridization *creates* the sterility problem (the $F_1$ hybrid has one A and one B set and cannot pair anything) and doubling *solves* it (now each has a partner). **Doubling rescues a sterile hybrid and simultaneously isolates it** — which is why allopolyploidy is by far the commonest route, and why bread wheat, cotton, tobacco, oilseed rape and many other crops are allopolyploids.

**P3 (a)** **Disruptive selection** ($\gamma > 0$ — fitness lowest at intermediate morphology, [1.2](01-02-modes-of-selection.md)).

Trait **variance rises**, and the distribution becomes **bimodal**, since the extremes survive and reproduce better than the middle.

**(b)** Because disruptive selection kills intermediates but **random mating keeps producing them.**

Concretely: suppose feeding morphology is polygenic. A plankton-adapted fish mates with a benthic-adapted fish at random, and their offspring are intermediate — precisely the morphology that does neither job. So each generation the population re-creates the maladapted middle and each generation loses it. The result is a stable, wide, bimodal distribution, not two species. **The population pays a permanent cost and never separates.**

Now add assortative mating — but suppose mating preference is controlled by a *different* set of loci from feeding morphology. Even if an association builds up between "benthic morphology" and "prefers benthic mates," **recombination breaks it every generation**, producing fish with benthic morphology and a preference for plankton-feeders. Those individuals mate across the divide and regenerate intermediates.

$$\textbf{Recombination is the enemy of sympatric speciation, and it acts every single generation.}$$

**(c)** If feeding morphology determines **where** the fish spends its time, and mating happens **where** it feeds, then choosing a habitat *is* choosing a mate. Plankton-feeders are in open water and mate with the other fish in open water — all of whom are plankton-feeders.

**What this changes:** there are no longer two sets of loci to recombine. The ecological adaptation **is** the mating cue, so a single trait, controlled by a single set of loci, does both jobs. Recombination has nothing to break apart, because the association is not statistical — it is **causal and automatic**.

**This is a magic trait**, and the name is deliberately slightly rueful: the trait "magically" solves the hardest problem in sympatric speciation by making the correlation between ecology and mating unbreakable.

**Real examples** are exactly of this form: host-plant preference in phytophagous insects (they mate on the host, so *Rhagoletis* apple and hawthorn races mate assortatively without any mate-choice behaviour at all), flowering time in plants (plants that flower at different times cannot cross, and flowering time is itself an ecological adaptation), and body size in fish where mating is size-assortative and size determines diet.

**And the prediction it makes:** sympatric speciation should be found disproportionately in systems where such a trait exists — which is exactly the pattern in the documented cases. **The rarity of sympatric speciation is not a rarity of disruptive selection; it is a rarity of magic traits.**

</details>

## Flashback

**From Lesson 2.1 (reproductive isolation and its accumulation):** Two species have sequential barriers of strength 0.50 (habitat), 0.80 (behavioural) and 0.95 (hybrid sterility). (a) Compute total isolation. (b) Compute each barrier's absolute contribution. (c) A researcher proposes to study "the genetics of speciation" in this pair by mapping the loci responsible for hybrid sterility. Comment on what that programme would and would not tell you.

<details>
<summary>Solution</summary>

**(a)** $$RI_{\text{total}} = 1 - (0.50)(0.20)(0.05) = 1 - 0.005 = \mathbf{0.995}.$$

**(b)**

| Barrier | $RI_i$ | Fraction reaching it | Contribution |
|---|---|---|---|
| Habitat | 0.50 | 1.00 | $\mathbf{0.500}$ |
| Behavioural | 0.80 | 0.50 | $\mathbf{0.400}$ |
| Hybrid sterility | 0.95 | 0.10 | $\mathbf{0.095}$ |

Sum: $0.500 + 0.400 + 0.095 = 0.995$ ✓

**(c)** The programme would tell you a great deal about **Dobzhansky–Muller incompatibilities** — how many loci, where they sit (probably disproportionately on the X, [2.1](02-01-what-is-a-species.md)), what the genes do, and how they interact. That is genuinely valuable and it is the bulk of the speciation-genetics literature.

**What it would not tell you is how these two species stay separate**, because hybrid sterility contributes only **9.5 percent** of the total isolation. Ninety percent of the work is done by habitat and behavioural barriers acting long before a hybrid could form. If hybrid sterility vanished entirely tomorrow, total isolation would fall only from 0.995 to 0.90 — still a substantial barrier.

**The general critique**, and it is a real one about the field: postzygotic barriers are tractable in the laboratory — you can cross the species, score the offspring, and map the loci — while prezygotic and especially ecological barriers require fieldwork and are much harder to quantify. **The literature is therefore biased toward the barriers that contribute least**, and a study that wants to explain why two species are separate should begin by measuring the barriers in sequence and finding out which one is doing the work.

</details>

## Connections

- **Backward:** [1.4](01-04-drift-ne-gene-flow.md)'s one-migrant rule is the obstacle every mode except allopatry must overcome; [1.2](01-02-modes-of-selection.md)'s disruptive selection is the starting condition for sympatric speciation and, on its own, is not enough.
- **Forward:** [2.3](02-03-inferring-trees-dating.md) reconstructs the splits catalogued here and puts dates on them; [2.4](02-04-macroevolution-history-of-life.md) asks what determines how *often* they happen.
- **Sideways:** inversions as recombination suppressors are [genetics 2.4](../../genetics/lessons/02-04-chromosomal-mutations.md), and the triploid block is the same aneuploidy argument; the ecological character displacement that mimics reinforcement is [4.1](04-01-competition-and-the-niche.md).
