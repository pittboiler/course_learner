# Immunology · Lesson 1.3: Barriers & the sensing of danger

> ⏱ ~15 min · Module 1: Architecture & Innate Defense · Builds on: [1.1](01-01-immune-problem-cellular-cast.md) · Unlocks: 1.4 (inflammation & innate effector cells)

## Why this matters

[1.1](01-01-immune-problem-cellular-cast.md) left you with an arithmetic problem — 20,000 genes, a repertoire of order $10^{11}$ receptors — and Module 3 will solve it. This lesson answers the *other* half of the question, and it is the half that has to work on day one of an infection with a pathogen your species has never met.

**How do you recognize something you have never seen?** You cannot enumerate pathogens; there are too many and they mutate too fast. But you can do something better: **recognize what pathogens cannot change.** A few dozen germline-encoded receptors, fixed at birth, cover essentially every microbial class on Earth — not by knowing any organism, but by watching a handful of molecular features that a microbe cannot abandon without ceasing to be viable.

That is the intellectually satisfying part. The subtle part is the second half of the recognition problem, and it is where the design gets genuinely clever: several of the most informative microbial signatures — DNA, RNA, ATP — are things **you are also made of**. The system solves this not with better receptors but with **geography**. Where a receptor sits is half of what its firing means.

## The idea

**Barriers first, because most of the immune system's work is done before there is an immune response at all.**

The numbers are worth having, because they invert the intuitive picture. Skin is about 2 square metres. The mucosal surfaces — gut, airway, urogenital — are on the order of 100 square metres, of which the small intestine alone is roughly 32 and the alveolar surface roughly 70. **The barrier that matters, by area, is not skin; it is wet epithelium fifty times larger, one cell thick, and deliberately permeable.** Everything about mucosal immunology follows from that.

The barrier layer is chemical and ecological, not just physical:

| Barrier | Mechanism | Rough magnitude |
|---|---|---|
| Stratum corneum | dead keratinized cells, pH ~5, continuously shed | epidermis renews in ~4 weeks |
| Mucus | two layers in colon; inner ~50 µm layer is essentially sterile | mucociliary escalator clears ~5 mm/min |
| Gastric acid | pH 1.5–3.5 | raises the infectious dose of *Vibrio cholerae* by $10^{3}$–$10^{4}$ |
| Antimicrobial peptides | defensins, cathelicidin; Paneth cells dump α-defensins into crypts | local concentrations in the mg/mL range |
| Microbiota | competitive exclusion of niche and nutrients | ~$3.8\times10^{13}$ bacteria, roughly one per human cell |

**The microbiota entry is not a curiosity — it is a defense you can knock out.** Broad-spectrum antibiotics clear the competitors, *Clostridioides difficile* takes the vacant niche, and faecal transplant restores the barrier by restoring the ecology. That is competitive exclusion as therapy.

**Now the sensing layer.** Innate recognition rests on two categories.

**PAMPs — pathogen-associated molecular patterns.** Conserved, structurally constrained microbial features: lipopolysaccharide (LPS) in the Gram-negative outer membrane, flagellin, peptidoglycan, unmethylated CpG DNA, double-stranded RNA, fungal β-glucan. Each is **load-bearing** for the microbe. That is the whole design principle: **escape by mutation costs fitness, so the target holds still on evolutionary timescales.** The immune system is not betting on being faster than a mutating pathogen; it is betting on the pathogen not being able to move.

The bet is a good one but not free. *Acinetobacter baumannii* under colistin selection can lose LPS entirely — so the target is not literally immovable — but the resulting strain is badly impaired. **The right reading is not "PAMPs cannot change" but "changing them is expensive," and the immune system is content to charge a fitness tax.**

**DAMPs — damage-associated molecular patterns.** Host molecules in the wrong place: extracellular ATP, uric acid crystals, mitochondrial DNA, HMGB1. These are what makes a sterile splinter, a crush injury, or a gout flare inflame with no microbe present. Mitochondrial DNA is a particularly elegant case: it is CpG-rich and hypomethylated — a fossil of its bacterial ancestry — so it trips the same sensor bacterial DNA does, which is why massive trauma can produce a sepsis-like syndrome with sterile blood cultures.

**The unifying idea, and the one to remember: compartment is itself information.** DNA in the nucleus is normal. DNA in the cytosol means either a virus or a catastrophe, and either way it warrants an alarm. **The receptor does not have to distinguish self DNA from microbial DNA if you put it somewhere self DNA is not supposed to be.** That is not a hack; it is the primary discrimination mechanism, and the receptor's chemical specificity is the backup.

## The formal version

**Pattern-recognition receptors (PRRs), organized by location — and read each location as a hypothesis about where the threat is.**

| Location | Receptors | Ligands | What firing here implies |
|---|---|---|---|
| Plasma membrane | TLR4 (with MD-2/CD14), TLR5, TLR2/1 and TLR2/6 heterodimers; C-type lectins (Dectin-1, Mincle, DC-SIGN) | LPS, flagellin, lipopeptides and lipoteichoic acid, fungal glucans and mannans | a microbe is outside the cell — surface lipids, proteins, sugars |
| Endosome / lysosome | TLR3, TLR7, TLR8, TLR9 | double-stranded RNA, single-stranded RNA, unmethylated CpG DNA | something the cell **swallowed** contains nucleic acid |
| Cytosol | RIG-I, MDA5; cGAS–STING, AIM2; NOD1, NOD2; NLRP3, NAIP/NLRC4 | 5'-triphosphate and long double-stranded RNA, cytosolic DNA, peptidoglycan fragments, membrane disruption | something is **already inside** |

*In words: the surface sensors ask "is there a microbe out there?", the endosomal sensors ask "did what I just ate contain a genome?", and the cytosolic sensors ask "is there something in here with me?"*

**Why the nucleic-acid sensors are in endosomes is the load-bearing design decision in this table**, and it is quantitative — Example 2 works it.

**Signalling, in outline.** Every TLR except TLR3 recruits the adaptor **MyD88**; TLR3 and endosomal TLR4 recruit **TRIF**. MyD88 runs through IRAK4/IRAK1 and TRAF6 to the IKK complex and **NF-κB**; TRIF runs through TBK1 to **IRF3/IRF7** and type I interferon. The kinase-cascade machinery itself — amplification, thresholding, scaffolds — is [molecular-cell-biology 2.3](../../molecular-cell-biology/lessons/02-03-kinase-cascades-switch.md), and the feedback that shapes the response is [molecular-cell-biology 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md). We use those results; we do not re-derive them.

$$\text{a few dozen receptors} \;\longrightarrow\; \{\text{MyD88}, \text{TRIF}\} \;\longrightarrow\; \{\text{NF-}\kappa\text{B}, \text{IRF3/7}\} \;\longrightarrow\; \text{a handful of programs}$$

*In words: a wide input layer collapses onto two adaptors and two transcription-factor families, and out the far side comes a small menu of responses.* Hold that shape — it is the whole lesson, and Example 1 makes it numerical.

The outputs are three things, and **the third is the one people forget**: inflammatory cytokines (TNF, IL-6, pro-IL-1β) and chemokines, which drive [1.4](01-04-inflammation-innate-effectors.md); type I interferon, which puts neighbouring cells into an antiviral state; and **upregulation of CCR7 and of the costimulatory molecules B7 (CD80/CD86) on the dendritic cell**. That last one is how the innate system *licenses* the adaptive one. No PRR firing, no B7, no T-cell activation — a point [3.5](03-05-helper-t-cells-polarization.md) will make load-bearing and [4.2](04-02-immunological-memory-vaccines.md) will turn into the theory of adjuvants.

**The inflammasome: a deliberate AND gate.** Interleukin-1β is potent enough that releasing it by mistake is dangerous, so its release requires **two independent signals**:

$$\text{signal 1 (priming)}: \; \text{PRR} \to \text{NF-}\kappa\text{B} \to \text{pro-IL-1}\beta \; \text{and} \; \text{NLRP3 transcribed}$$

$$\text{signal 2 (activation)}: \; \text{K}^{+} \text{ efflux, crystals, pore-forming toxins, lysosomal rupture} \to \text{NLRP3 assembles}$$

Only then does the NLRP3–ASC–caspase-1 complex form, cleave pro-IL-1β to its active form, and cleave gasdermin D into membrane pores — releasing the cytokine and killing the cell by **pyroptosis**, which is lytic and inflammatory by design, unlike apoptosis.

**Name the design pattern: this is a safety interlock, and its value is multiplicative.** If each signal misfires independently with probability $p_1$ and $p_2$, the pair misfires at $p_1 p_2$ — an error rate that is *quadratically* smaller, not linearly. It is the same two-key logic the adaptive system will use for B cells ([3.2](03-02-clonal-selection-b-cell-activation.md)) and T cells ([3.5](03-05-helper-t-cells-polarization.md)). **Whenever this course shows you a two-signal requirement, read it as a false-positive suppressor, not as bureaucracy.**

The predictions are immediate and correct: gain-of-function *NLRP3* mutations make signal 2 constitutive, giving the cryopyrin-associated periodic syndromes — recurrent fever and urticaria with no infection, exquisitely responsive to IL-1 blockade. Loss-of-function *NOD2* variants are the strongest single genetic association with Crohn's disease.

**Finally, the design logic that closes Module 1's first half.** Write the two strategies side by side:

| | Innate | Adaptive |
|---|---|---|
| Number of specificities | $\sim 50$, germline-encoded | $\sim 10^{11}$, somatically generated |
| Resolution | a microbial **class** | a single epitope |
| Available | immediately, in every cell | after days of search and expansion |
| Cost of a receptor | a gene, kept forever | a whole cell, usually discarded |

**The two are complements, not a draft and a final version.** Innate immunity trades resolution for coverage and speed; adaptive immunity trades speed for resolution. Neither works alone, and the dendritic cell is the component that converts the first into a mandate for the second.

## Picture

![A cell drawn in cross-section with pattern-recognition receptors at three locations. On the plasma membrane, TLR4 for LPS, TLR5 for flagellin, TLR2 dimers for lipopeptides and Dectin-1 for fungal glucan, annotated that surface sensors detect microbes still outside the cell. Inside, an endosome carries TLR3, TLR7 slash 8 and TLR9 for double-stranded RNA, single-stranded RNA and unmethylated CpG DNA, annotated that a vesicle only receives what the cell swallowed so plasma self-DNA never reaches it. In the cytosol, RIG-I and MDA5 for viral RNA, cGAS and AIM2 for cytosolic DNA, and NOD1 and NOD2 for peptidoglycan, annotated that the compartment itself is the alarm. Arrows from all three tiers converge on a single box reading MyD88 and TRIF to NF-kappa-B and IRF3 slash 7, which feeds the nucleus and an output list of cytokines, type one interferon, and upregulation of B7 and CCR7 that licenses the adaptive arm. A separate inset panel on the right shows the inflammasome as an AND gate: signal one priming makes pro-IL-1-beta and NLRP3, signal two activation assembles NLRP3, and only both together fire caspase-1 to release IL-1-beta and trigger pyroptosis, with a note that two conditions each misfiring at one in a hundred give a pair misfiring at one in ten thousand.](assets/01-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — how many specificities does "covering all pathogens" actually take?).** Count the human germline PRR repertoire and compare it with the adaptive repertoire from [1.1](01-01-immune-problem-cellular-cast.md). Then ask what the innate system is actually computing.

**(a) Count the receptors.**

| Family | Approximate human count |
|---|---|
| TLRs | 10 functional (TLR1–TLR10; TLR11–13 are non-functional in humans) |
| NLRs | ~22 |
| RLRs | 3 (RIG-I, MDA5, LGP2) |
| Signalling C-type lectins | ~10 |
| Other cytosolic sensors (cGAS, AIM2, OAS family) | ~5 |

$$R_{\text{innate}} \approx 10 + 22 + 3 + 10 + 5 \approx 50 .$$

$$\frac{R_{\text{adaptive}}}{R_{\text{innate}}} \approx \frac{10^{11}}{5\times 10^{1}} \approx 2\times 10^{9}.$$

**Two billion times fewer receptors, and yet the innate system covers every microbial class on day zero.** The reason is coverage per receptor. There are roughly 1,400 known human pathogen species; essentially all of them are Gram-positive, Gram-negative, fungal, or viral, and each of those categories is hit by several of the 50. Coverage per innate receptor is order $10^{2}$ species. Coverage per adaptive receptor is order one *epitope* — and on day zero, only about 1 lymphocyte in $10^{5}$–$10^{6}$ carries the right one.

**(b) But the receptors are read combinatorially, not one at a time.** A dendritic cell integrates *which* PRRs fired. With $n$ binary inputs the theoretical input space is

$$2^{n} = 2^{50} \approx 1.1\times 10^{15},$$

which is **larger than the adaptive repertoire.** That number is a ceiling, not a claim — the inputs are heavily correlated (any Gram-negative trips TLR4 and TLR5 and NOD1 together) — but it kills the idea that "innate" means "crude."

**(c) Now look at the output.** The dendritic cell's decision is essentially which response program to license: an antiviral interferon state, or one of the helper polarizations Th1 / Th2 / Th17 / Tfh / Treg ([3.5](03-05-helper-t-cells-polarization.md)). Call it six outcomes:

$$H \le \log_2 6 = 2.58 \text{ bits}.$$

$$\boxed{\; \sim 50 \text{ bits of sensor input} \;\longrightarrow\; \lesssim 3 \text{ bits of instruction} \;}$$

**The innate system is a classifier, and it is a deliberately lossy one.** It is not trying to identify the pathogen — that is the adaptive system's job, and the adaptive system does it with a receptor per epitope. Innate immunity's job is to answer two questions: *is this real?* and *what kind of thing is it?* Everything downstream needs only the class.

That framing is worth carrying: it makes the mutual-information view of [information-theory 1.3](../../information-theory/lessons/01-03-mutual-information.md) directly applicable, and it explains why the same organism presented in two cytokine contexts can produce two different diseases — a result [3.5](03-05-helper-t-cells-polarization.md) closes on.

**Example 2 (why you'd care — the calculation that forces TLR9 into the endosome).** Suppose you wanted a DNA sensor on the cell surface, so it could detect bacteria without waiting for phagocytosis. Show why this cannot work, and what the two fixes buy.

**(a) The noise.** Healthy human plasma carries cell-free DNA — from normal cell turnover — at roughly

$$c_{\text{self}} \approx 10 \ \text{ng/mL}.$$

**(b) The signal.** An early bacteraemia is 1–10 colony-forming units per mL. An *E. coli* genome is $4.6\times10^{6}$ bp; at 650 g/mol per base pair,

$$m_{\text{genome}} = \frac{4.6\times10^{6} \times 650}{6.02\times 10^{23}} \ \text{g} = \frac{3.0\times10^{9}}{6.02\times10^{23}} \ \text{g} = 5.0\times10^{-15}\ \text{g} = 5 \ \text{fg}.$$

At 10 CFU/mL:

$$c_{\text{microbial}} = 10 \times 5\times10^{-15}\ \text{g/mL} = 5\times10^{-14}\ \text{g/mL} = 5\times 10^{-5} \ \text{ng/mL}.$$

**(c) The signal-to-noise ratio.**

$$\frac{c_{\text{microbial}}}{c_{\text{self}}} = \frac{5\times10^{-5}}{10} = 5\times 10^{-6}, \qquad \text{i.e. self exceeds non-self by} \;\; 2\times 10^{5}\!:\!1 .$$

**A surface DNA receptor would be firing on you, continuously, at two hundred thousand times the rate it fires on the infection.** It is not a marginal design; it is unusable. So the receptor is moved, and its chemistry is sharpened.

**(d) Fix one — compartment.** TLR9 sits in endolysosomes, reached only by material the cell has actively internalized. Phagocytosis is particulate: it concentrates whole bacteria into a vesicle of femtolitre volume, while soluble plasma DNA is both poorly internalized and actively degraded by secreted DNase I and DNASE1L3. Order-of-magnitude enrichment for microbial over soluble self DNA: call it $10^{3}$.

**(e) Fix two — dinucleotide statistics.** Bacterial genomes carry CpG at roughly its expected frequency, $1/16 = 6.25$ percent of dinucleotides, essentially all unmethylated. Vertebrate genomes are CpG-suppressed to about 20–25 percent of expected (~1.4 percent) and about 75 percent of those are methylated, leaving

$$\text{unmethylated CpG, host} \approx 1.4\ \text{percent} \times 0.25 \approx 0.35 \ \text{percent}.$$

$$\text{discrimination factor} = \frac{6.25}{0.35} \approx 18 .$$

**(f) Multiply.**

$$10^{3} \times 18 \approx 2\times 10^{4},$$

against a gap of $2\times10^{5}$ — most of the way, with the remainder covered by DNase clearance of what plasma DNA there is and by the requirement for multivalent engagement to signal. **Neither fix works alone. Compartment does the heavy lifting; chemistry does the rest.**

**(g) The prediction, and it is correct.** If the argument is right, then breaking *either* fix should produce autoimmunity against nucleic acids specifically. It does, in both directions:

- **Break the clearance/compartment arm:** loss-of-function *DNASE1L3* and *DNASE1* variants cause systemic lupus erythematosus, the prototype anti-DNA autoimmune disease.
- **Break the receptor arm:** a gain-of-function *TLR7* variant, lowering the threshold for endosomal RNA sensing, causes lupus in humans.

**Two independent ways of eroding the same margin produce the same disease** — which is about as strong as mechanistic evidence gets for a design argument, and it is the reason to take "compartment is information" as a principle rather than a slogan. It recurs in [2.5](02-05-antigen-processing-presentation.md), where the entire class I versus class II split is a compartment argument.

## Watch out

- **You might think "innate" means "non-specific."** It is exactly as specific as it needs to be — just at the resolution of a *class* rather than an individual. TLR5 binds a conserved buried region of flagellin and nothing else. What innate immunity lacks is not specificity but **generativity**: it cannot make a new receptor for a new target.
- **You might think PAMPs are molecules unique to microbes.** Some are (LPS, flagellin, peptidoglycan). Several of the most important are not: DNA, RNA and ATP are yours too. **For those, the "pattern" being recognized is a location, not a molecule** — which is why the DAMP concept is not a separate system bolted on, but the same sensors reading the same rule.
- **You might think a PRR firing produces IL-1β.** It produces the *pro*-form and nothing else. The inflammasome does the cleavage, and it needs a second, independent signal. Confusing the two makes the entire CAPS/anakinra story unreadable.
- **You might think PRR activation starts an adaptive response.** It *licenses* one. The dendritic cell raises B7 and CCR7 and goes to the node, but a T cell still needs its own antigen through its own receptor. This is why a purified protein injected without an adjuvant is nearly inert ([4.2](04-02-immunological-memory-vaccines.md)) — and it is one of the most useful facts in the course.
- **You might think the barrier layer is passive.** The largest component is ecological: roughly $4\times10^{13}$ commensals excluding competitors. Knock it out with antibiotics and you have created an immunodeficiency with no immune defect.

## One-liner

> Innate immunity does not recognize pathogens — it recognizes the few things a pathogen cannot afford to stop being, plus anything of yours found in the wrong compartment; about fifty germline receptors, read combinatorially, compressed into two or three bits of instruction for the adaptive system.

## Problems

**P1 (🟢)** Human monocytes respond to LPS at about 10 pg/mL. Take the LPS molecular weight as 10 kDa, and take an *E. coli* to carry $10^{6}$ LPS molecules in its outer leaflet. (a) Convert the threshold to a molar concentration. (b) How many LPS molecules is that in 1 mL? (c) How many bacteria per mL does that correspond to? (d) Comment on the margin, given that establishing a tissue infection generally requires far more organisms than this.

**P2 (🟡)** A macrophage exposed to LPS alone transcribes pro-IL-1β but releases none. Exposed to extracellular ATP alone, it releases none either. Together, it releases mature IL-1β within minutes. (a) Assign each stimulus to signal 1 or signal 2 and say what each accomplishes. (b) Suppose signal 1 misfires spuriously with probability $p_1 = 10^{-2}$ per cell per day and signal 2 with $p_2 = 5\times10^{-3}$, independently. For a tissue with $10^{6}$ resident macrophages, compute the number of cells per day that would release IL-1β under a one-signal design versus the AND design, and state the fold improvement. (c) Where does the independence assumption break, and does that break help or hurt the estimate? (d) A patient carries a *NLRP3* variant that makes signal 2 constitutive. Predict the clinical phenotype and the drug that should fix it.

**P3 (🔴, bridges to information theory and to 3.5)** *Salmonella* downregulates flagellin expression once it is inside a macrophage. (a) Argue why silencing a PAMP is a better evasion strategy than mutating it, in terms of the fitness argument that makes PAMPs good targets in the first place. (b) The host's counter is that NAIP/NLRC4 also senses the type III secretion system rod and needle proteins, which *Salmonella* must express to survive intracellularly. Formalize the redundancy: if a pathogen must express $k$ of $n$ sensed components to be viable, what is the condition for complete escape, and what does that say about how a host should choose which molecules to sense? (c) Using Example 1's framing, explain what the host actually loses when one input is silenced — not "detection," but something more precise about the classification the dendritic cell is performing.

<details>
<summary>Solutions</summary>

**P1 (a)** $$10 \ \text{pg/mL} = \frac{10^{-11}\ \text{g}}{10^{-3}\ \text{L}} = 10^{-8}\ \text{g/L}, \qquad \frac{10^{-8}\ \text{g/L}}{10^{4}\ \text{g/mol}} = 10^{-12}\ \text{M} = \mathbf{1 \ \text{pM}}.$$

**(b)** $$N = (10^{-12}\ \text{mol/L})(10^{-3}\ \text{L})(6.02\times10^{23}\ \text{mol}^{-1}) = \mathbf{6.0\times 10^{8}\ \text{molecules}}.$$

**(c)** $$\frac{6.0\times10^{8}}{10^{6}\ \text{per cell}} = \mathbf{6\times 10^{2} \approx 600 \ \text{bacteria per mL}}.$$

**(d)** Six hundred organisms per mL is a vanishingly small burden — orders of magnitude below the density at which a Gram-negative infection becomes a clinical problem, and well below typical infectious doses. **The detection threshold sits far below the threshold of harm**, which is exactly where you want a smoke detector.

Two consequences worth drawing out. First, this is why LPS is the canonical PAMP: it is present at $10^{6}$ copies per organism, so **the sensor is amplified by the target's own abundance before any signalling amplification occurs.** Second, it is also why Gram-negative sepsis is so violent — the same sensitivity that catches 600 organisms per mL responds catastrophically to $10^{8}$, and [1.4](01-04-inflammation-innate-effectors.md) closes on precisely that failure mode.

**P2 (a)** **LPS is signal 1**: TLR4 → MyD88 → NF-κB, transcribing *pro-IL-1β* and *NLRP3*. It builds the ammunition but fires nothing — pro-IL-1β is inactive.

**Extracellular ATP is signal 2**: acting through P2X7 it drives K⁺ efflux, which is the proximal trigger for NLRP3 oligomerization with ASC and caspase-1. Caspase-1 then cleaves pro-IL-1β to its active form and cleaves gasdermin D into pores for release.

The division is meaningful: **signal 1 says "there is a microbe here," signal 2 says "and cells are dying."** IL-1β is released only where both are true.

**(b)** One-signal design (signal 1 alone suffices):

$$10^{6} \times 10^{-2} = \mathbf{10^{4} \ \text{cells per day}}.$$

AND design:

$$p_1 p_2 = 10^{-2} \times 5\times10^{-3} = 5\times 10^{-5}, \qquad 10^{6} \times 5\times10^{-5} = \mathbf{50 \ \text{cells per day}}.$$

$$\text{fold improvement} = \frac{10^{4}}{50} = \mathbf{200\times} = \frac{1}{p_2}.$$

**The improvement factor is exactly $1/p_2$** — the AND gate's benefit is set entirely by how reliable the *second* condition is, which is a general fact about interlocks and a good thing to keep.

**(c)** Independence fails because **real insults produce both signals**. Tissue damage that releases ATP is usually accompanied by microbial products or by DAMPs that also prime NF-κB, so $p_2$ is elevated conditional on $p_1$. The true joint rate is therefore $p_1 P(p_2 \mid p_1) > p_1p_2$: **the estimate is optimistic, and the real interlock is weaker than $1/p_2$-fold.**

That is not a flaw in the argument — it is the reason sterile inflammation exists at all, and the reason gout (uric acid crystals supplying signal 2 with only a low-grade signal 1) is an IL-1β disease treatable with IL-1 blockade.

**(d)** A constitutive signal 2 means the AND gate reduces to signal 1 alone, so ordinary low-level priming now releases IL-1β continuously. Predicted phenotype: **recurrent, spontaneous, sterile fever with urticarial rash, elevated acute-phase reactants, and no identifiable infection** — with severity varying by how leaky the variant is, from familial cold autoinflammatory syndrome through Muckle–Wells to neonatal-onset multisystem inflammatory disease. Collectively, the cryopyrin-associated periodic syndromes.

**The drug follows directly from the mechanism, not from empiricism:** block IL-1 signalling — anakinra (IL-1 receptor antagonist), rilonacept, or canakinumab (anti-IL-1β). Response is dramatic and rapid, which is itself the confirmation that the single cytokine downstream of the broken gate is the whole disease.

**P3 (a)** The PAMP bet is that mutating a conserved microbial feature costs fitness — the flagellin epitope TLR5 reads is a buried polymerization interface, so an escape mutant tends to be a non-motile mutant.

**Silencing sidesteps the bet entirely.** Regulation is reversible and conditional: *Salmonella* keeps a wild-type flagellin gene and simply stops transcribing it in the one environment where being seen is fatal. It pays the cost of non-motility only inside the macrophage and recovers motility on exit. **The host's fitness tax is levied on the genotype; the pathogen pays it only on the phenotype, and only sometimes.** This is why regulatory evasion is more common than structural evasion, and it generalizes far beyond flagellin — it is the same logic behind antigenic variation and behind viral MHC-I downregulation ([2.5](02-05-antigen-processing-presentation.md)).

**(b)** Let the pathogen be viable only if it expresses at least $k$ of the $n$ components the host senses. Escape requires silencing every sensed component, i.e. expressing zero of them, which is compatible with viability only if

$$k = 0 .$$

Equivalently: **complete escape is possible if and only if the host is watching only dispensable components.** If even one sensed molecule is required in the niche the pathogen must occupy, detection is unavoidable there.

The design rule for the host follows and is the real answer: **do not sense what a pathogen has; sense what it needs, and sense several such things at once.** That is exactly the observed pattern — flagellin (motility), the T3SS rod (intracellular survival), LPS (outer-membrane integrity), peptidoglycan (cell-wall integrity). Every one is a load-bearing structure, and the redundancy means the pathogen must find a niche in which it needs *none* of them.

Note the resemblance to a covering problem: the host is choosing a set of features to monitor so that every viable pathogen phenotype expresses at least one. Redundancy is not waste here — it is what converts "hard to escape" into "impossible to escape while remaining viable."

**(c)** Detection is not lost — NAIP/NLRC4 still fires on the T3SS rod, and TLR4 still sees LPS. What is lost is **information about the class**.

From Example 1, the dendritic cell is running a classifier: ~50 correlated binary inputs compressed to under 3 bits of instruction. Flagellin is not just an alarm bell; it is a *feature* whose presence shifts the posterior toward one response program. Silencing it does not push the classifier to "no threat" — the other inputs prevent that. It pushes the classifier toward a **different class**, and therefore toward a different helper polarization ([3.5](03-05-helper-t-cells-polarization.md)).

**The precise loss is mutual information between the sensed pattern and the correct response**, and the cost is not a missed infection but a **mis-specified** one. That is the more dangerous failure. A response of the wrong type is worse than a delayed response of the right type — which is the point [3.5](03-05-helper-t-cells-polarization.md) makes with leprosy, where one organism produces two entirely different diseases depending on which way the classifier went.

</details>

## Flashback

**From Lesson 1.1 (the immune problem & the cellular cast):** A patient presents 36 hours after stepping on a nail. The wound is red, hot and exquisitely tender, but two sets of blood cultures and a wound culture are all negative. The white count is 14,000 per microlitre with 82 percent neutrophils and 9 percent lymphocytes (normal ranges: 50–70 percent and 20–40 percent).

(a) Compute the absolute neutrophil count and say which hematopoietic progenitor lineage the two cell types come from. (b) Name the single cell type that bridges innate and adaptive immunity, and state specifically what it physically carries from one to the other. (c) The cultures are negative. Explain why the site is nonetheless inflamed, and say precisely which of the two models of immune activation from 1.1 this observation supports and which it refutes.

<details>
<summary>Solution</summary>

**(a)** $$\text{ANC} = 14{,}000 \times 0.82 = \mathbf{11{,}480 \ \text{per} \ \mu\text{L}}$$

against a normal upper bound near 7,000 — a clear neutrophilia, and the lymphocyte fraction is depressed largely as an arithmetic consequence of the neutrophil surge.

**Lineages:** neutrophils descend from the **common myeloid progenitor** (via the granulocyte-monocyte progenitor); lymphocytes descend from the **common lymphoid progenitor**. Both from the hematopoietic stem cell. The smear is a snapshot of the myeloid arm mobilizing and the lymphoid arm not yet engaged — which is the innate/adaptive timing difference made visible in a lab value.

**(b)** The **dendritic cell**. It carries **antigen** — sampled at the tissue site, processed into peptides — together with **the innate system's verdict on that antigen**, encoded as surface costimulatory molecules (B7/CD80/CD86) and as a cytokine profile. It travels via CCR7 to the draining lymph node.

**The verdict is the important half.** The antigen is signal 1; the costimulation is signal 2. A dendritic cell that picked up protein without a danger signal presents antigen with no B7 and induces tolerance rather than activation.

**(c)** The nail carried mechanical trauma into the dermis. Dying cells released **DAMPs** — ATP, uric acid, mitochondrial DNA, HMGB1 — which trip the same pattern receptors and inflammasomes that microbial products do. Hence a fully inflamed, culture-negative wound.

**This supports the danger/pattern model and refutes the strict self/non-self model.** Under self/non-self, an inflammatory response requires foreignness, and there is nothing foreign here. Under the danger model, the system responds to conserved microbial patterns *and* to evidence of tissue damage, which is exactly what a sterile penetrating injury supplies.

**The corollary from 1.1 is the one worth restating:** the same logic run in reverse explains why a semi-allogeneic fetus — unambiguously foreign — is tolerated. Foreignness is neither necessary nor sufficient. **Damage is the trigger; identity is not.**

</details>

## Connections

- **Backward:** [1.1](01-01-immune-problem-cellular-cast.md) posed the speed-versus-specificity trade-off and the danger model; this lesson supplies the receptors that implement both, and the arithmetic showing why ~50 of them is enough. [1.2](01-02-lymphoid-organs-cell-traffic.md)'s CCR7 story is a downstream output of PRR firing.
- **Forward:** [1.4](01-04-inflammation-innate-effectors.md) is what NF-κB's output *does* — every cardinal sign traces back to a cytokine transcribed here. [1.5](01-05-complement-system.md) adds the soluble arm of the same idea: mannose-binding lectin is a PRR that circulates. [3.5](03-05-helper-t-cells-polarization.md) collects the B7 licensing debt, and [4.2](04-02-immunological-memory-vaccines.md) turns it into the theory of adjuvants — an adjuvant is nothing more than the PAMP a purified antigen lacks.
- **Sideways:** the cascade from adaptor to transcription factor is [molecular-cell-biology 2.3](../../molecular-cell-biology/lessons/02-03-kinase-cascades-switch.md) and its feedback structure is [molecular-cell-biology 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md); the "wide sensor layer compressed to few bits of output" reading is a channel-capacity question in the sense of [information-theory 1.3](../../information-theory/lessons/01-03-mutual-information.md); the CpG-suppression statistic that TLR9 exploits is the mutational consequence of cytosine methylation from [genetics 3.5](../../genetics/lessons/03-05-eukaryotic-regulatory-logic-epigenetics.md).
