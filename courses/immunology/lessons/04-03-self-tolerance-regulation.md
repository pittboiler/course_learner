# Immunology · Lesson 4.3: Self-tolerance & immune regulation

> ⏱ ~15 min · Module 4: Cellular Immunity, Memory & Immune Pathology · Builds on: [4.2](04-02-immunological-memory-vaccines.md), [3.1](03-01-vdj-recombination.md) · Unlocks: [4.4](04-04-autoimmunity-hypersensitivity.md) (autoimmunity & hypersensitivity)

## Why this matters

Everything the course has built so far is a weapon. [3.4](03-04-antibody-effector-functions.md) can punch holes in membranes, [4.1](04-01-cytotoxic-t-cells.md) can execute any nucleated cell it touches, and [3.1](03-01-vdj-recombination.md) manufactures the aiming mechanism **at random**. Randomness is the whole trick — and it means the repertoire is generated with no knowledge whatsoever of what "self" looks like.

So tolerance is not a safety feature bolted on afterwards. **It is a logical consequence of the diversity strategy**: if you build receptors blind, you must edit them after the fact, and the editing must happen before the cells are armed. This lesson is where the system audits its own output.

The payoff is that autoimmunity stops being mysterious. **Tolerance is a threshold, thresholds are set at compromises, and a compromise is by definition wrong some of the time** — which is why roughly one person in twenty has an autoimmune disease, and why releasing the brakes to treat cancer ([4.5](04-05-immunodeficiency-tumor-transplant.md)) reliably produces autoimmune toxicity.

## The idea

**Start with the arithmetic problem.** V(D)J recombination shuffles segments and adds templateless junctional nucleotides with no reference to the host proteome. A newly minted TCR is a random draw from receptor space. Two things can go wrong:

1. It binds **nothing** the host displays — useless, because a T cell that cannot engage self-MHC at all can never engage a peptide *on* self-MHC either.
2. It binds **self too well** — lethal.

The fix is one axis with two thresholds. **Positive selection** rescues thymocytes whose TCR binds self peptide–MHC weakly; **negative selection** kills those that bind strongly. Survivors live in the window between.

**This is the sentence to hold onto: the repertoire is selected on self and then used on non-self.** Nothing in the thymus ever tests a receptor against a pathogen. The thymus only asks "can you see our MHC, and are you dangerous to us?" — and the answer to the second question is a proxy, measured against whatever self-peptides happen to be on display.

That proxy has an obvious hole, and the system patches it twice. **AIRE** forces medullary thymic epithelial cells to transcribe genes they have no business transcribing — insulin, thyroglobulin, myelin proteins — so the thymus builds a miniature model of the whole body and tests thymocytes against it. And because no model is complete, a **peripheral** layer re-tests every cell after export: anergy, deletion, privileged sites, and an entire cell lineage (regulatory T cells) whose job is suppression.

**B cells get a mechanism T cells do not: a second chance.** A self-reactive immature B cell in the marrow re-expresses RAG and rearranges a *new* light chain onto the existing heavy chain — **receptor editing**. It is deleted only if editing fails. That is repair before disposal, and it is possible only because the light-chain locus retains unused V and J segments after the first rearrangement ([3.1](03-01-vdj-recombination.md)).

## The formal version

**Thymic yield.** Let $f_\beta$ be the fraction of thymocytes producing an in-frame TCRβ chain, $f_+$ the fraction of those positively selected, and $f_-$ the fraction of positively-selected cells that survive negative selection. The export fraction is

$$\boxed{\;Y = f_\beta \, f_+ \, f_-\;}$$

*In words: surviving the thymus means passing three independent filters in series, and the yield is their product.* With two β alleles tried in succession and each rearrangement in-frame with probability $1/3$,

$$f_\beta = 1 - \left(\tfrac{2}{3}\right)^{2} = \tfrac{5}{9} \approx 0.56, \qquad f_+ \approx 0.10, \qquad f_- \approx 0.5$$

$$Y \approx 0.56 \times 0.10 \times 0.5 \approx 0.028 .$$

**About 3 percent of thymocytes leave alive** — matching the measured 2–4 percent. The thymus destroys most of what it makes, every day, forever.

**Self-reactivity before editing.** Model a positively-selected TCR as reacting above the deletion threshold with any given self peptide–MHC complex with probability $p$, independently across the $m$ distinct complexes displayed in the medulla. Then

$$P(\text{survive negative selection}) = (1-p)^{m} \approx e^{-pm}$$

*In words: escaping deletion means failing to react with every one of thousands of self-complexes in a row, so survival falls off exponentially in the size of the self-peptidome.*

**AIRE coverage.** If each mTEC expresses a random fraction $f$ of tissue-restricted antigen genes and a thymocyte scans $n$ of them, the probability a given tissue antigen is seen at least once is

$$C(n) = 1 - (1-f)^{n} .$$

*In words: no single thymic cell shows the whole body, so coverage is built by a mosaic — and the thymocyte has to walk the mosaic.* This is why negative selection requires days in the medulla rather than a single encounter.

**Peripheral tolerance: the two-signal rule, inverted.** [3.5](03-05-helper-t-cells-polarization.md) gave activation as signal 1 (peptide–MHC) **and** signal 2 (CD28–B7). Read it the other way:

$$\text{signal 1 without signal 2} \;\Longrightarrow\; \textbf{anergy}$$

*In words: a T cell that meets its antigen on a cell that never got a danger signal is not merely un-activated — it is functionally disabled.* Because resting tissue cells and unlicensed dendritic cells lack B7, **self-antigen encounter in a quiet body is actively tolerizing.**

**Regulatory T cells.** FoxP3-positive CD4 cells, about 5–10 percent of the CD4 compartment, arising either in the thymus (from cells in the *upper* part of the affinity window — diverted rather than deleted) or induced in the periphery under TGF-β. Four mechanisms worth naming: IL-10 and TGF-β secretion; CTLA-4 **trans-endocytosis stripping B7 off the antigen-presenting cell**; consumption of IL-2 as a competitive sink; and direct cytolysis.

## Picture

![Thymic selection drawn on a single affinity axis with three outcome zones, a bar showing that about 90 of 100 thymocytes die by neglect and only a few are exported, a panel showing AIRE-driven display of tissue antigens in the thymic medulla, a panel listing the peripheral tolerance mechanisms, and a flow showing receptor editing in the bone marrow.](assets/04-03-fig1.svg)

The blue curve is the point of the figure: most random receptors bind self-MHC too weakly to be rescued at all, so **death by neglect, not deletion, is the leading cause of thymocyte death.** The two dashed thresholds are the entire mechanism.

## Worked examples

### Example 1 — How self-reactive is a random receptor?

Take $m \approx 10^{4}$ distinct self peptide–MHC complexes displayed in the medulla, and the observed result that roughly half of positively-selected thymocytes are deleted. Solve $e^{-pm} = 0.5$:

$$p = \frac{\ln 2}{m} = \frac{0.693}{10^{4}} = 6.9\times10^{-5} \approx \frac{1}{14{,}000}.$$

**A single TCR reacts strongly with about one in fourteen thousand of the complexes it meets.** That number is doing two jobs at once. It is small enough that the receptor is specific, and large enough that with $10^4$ self-complexes on offer, *half of all useful receptors are dangerous*. Self-reactivity is not a rare manufacturing defect; it is the expected outcome, at coin-flip odds.

**Sanity check, and an honest caveat.** [4.5](04-05-immunodeficiency-tumor-transplant.md) will note that only 1–10 percent of mature T cells respond to a foreign MHC displaying a comparably large novel peptide set — far below the 50 percent implied here. The two numbers are not in conflict: **the thymic deletion threshold sits lower than the peripheral activation threshold.** The thymus deliberately over-deletes, killing cells that would never have been activated in the periphery. That gap is a design choice, and Example 2 and P3 are about what it costs.

### Example 2 — Why one Treg can hold down twenty effectors

Tregs are outnumbered roughly 1 to 20 by conventional CD4 cells, yet losing them (FoxP3 mutation, IPEX) is fatal in infancy — massive multi-organ autoimmunity within months. How does a minority suppress a majority?

**Because suppression acts at the hub, not the leaves.** A Treg that finds its antigen on a dendritic cell uses CTLA-4 to physically pull B7 off that cell's surface by trans-endocytosis. The dendritic cell is now **signal-2 deficient for every T cell that subsequently docks on it** — and by the two-signal rule above, those cells do not merely fail to activate, they anergize.

One Treg therefore does not neutralize one effector; it disarms an antigen-presenting cell that would otherwise have primed hundreds. Add IL-2 consumption — Tregs express the high-affinity IL-2 receptor constitutively but make no IL-2, so they act as a sink that starves neighbouring activated cells of their own growth factor — and the leverage compounds.

**The design reading:** the immune system has one shared bottleneck through which all adaptive activation must pass (the licensed APC), and regulation is aimed squarely at it. Attacking a bottleneck is cheap; attacking every effector individually would not be.

## Watch out

- **You might think negative selection removes all self-reactive lymphocytes, but actually it removes only those reactive above a threshold, against the peptides that happen to be displayed in the thymus.** Self-antigens that are expressed only after puberty, only in an inflamed tissue, or only after post-translational modification (citrullination, for instance) were never on the exam. Mature, fully "tolerant" T cells specific for such antigens circulate in every healthy person — which is exactly the raw material [4.4](04-04-autoimmunity-hypersensitivity.md) needs.
- **You might think positive selection selects for receptors that will be useful, but actually it only tests whether the receptor can bind self-MHC at all.** Usefulness against pathogens is never assessed. The by-product is MHC restriction ([2.3](02-03-t-cell-receptor.md), [2.4](02-04-mhc-molecules.md)): your T cells are restricted to your MHC alleles because your thymus was the only thing they were ever screened against.
- **You might think tolerance means deletion, but actually deletion is only one of at least five outcomes** — deletion, receptor editing, anergy, ignorance (the antigen is present but below the concentration that triggers anything), and active suppression by Tregs. A T cell can be tolerant while alive, competent, and sitting next to its antigen.

## One-liner

> A repertoire built at random must be edited against self before it is armed — and since editing is a threshold and every threshold is a compromise, autoimmunity is the price of coverage, not a malfunction.

## Problems

**P1 (🟢)** A young thymus imports $2\times10^{8}$ progenitors per day. Using $f_\beta = 5/9$, $f_+ = 0.10$, $f_- = 0.5$, compute the daily export of naive T cells and the overall survival percentage. Then state which single filter destroys the most cells, and why that one is *not* about self-tolerance.

**P2 (🟡)** Each mTEC stochastically expresses a fraction $f = 0.02$ of the tissue-restricted antigen genes.
(a) How many mTECs must a thymocyte scan for a given tissue antigen to be displayed to it with probability at least 0.99?
(b) A patient carries a hypomorphic *AIRE* allele that halves promiscuous expression to $f = 0.01$. Holding the number of encounters at your answer to (a), what fraction of tissue antigens is now never displayed? Name the clinical consequence.

**P3 (🔴, optional)** Tolerance as an optimization problem — this is the argument behind checkpoint-blockade toxicity ([4.5](04-05-immunodeficiency-tumor-transplant.md)).

Take the survival model $P = e^{-pm}$ with baseline $pm = \ln 2$, and suppose a hypothetical variant lowers the deletion threshold so that the effective per-complex deletion probability doubles to $2p$.
(a) What fraction of positively-selected thymocytes now survives, and by what factor does the exported repertoire shrink?
(b) Model pathogen coverage as follows: with a repertoire of $N$ distinct clones, a given foreign epitope escapes recognition with probability $(1-q)^{N}$, and at baseline this "hole rate" is $10^{-3}$. Compute the hole rate after the shrinkage in (a).
(c) State in one sentence what (a) and (b) together say about where the real threshold should sit, and why an autoimmune-disease prevalence of a few percent is evidence that the system is tuned correctly rather than broken.

<details>
<summary>Solutions</summary>

**P1** Apply the filters in series:

$$2\times10^{8} \times \tfrac{5}{9} = 1.11\times10^{8} \;\xrightarrow{\;\times 0.10\;}\; 1.11\times10^{7} \;\xrightarrow{\;\times 0.5\;}\; \mathbf{5.6\times10^{6}\ \text{cells exported per day}}$$

Overall survival $Y = 5.6\times10^{6} / 2\times10^{8} = 0.028$, i.e. **2.8 percent**.

Cell losses at each step: $0.89\times10^{8}$ at β-selection, $1.0\times10^{8}$ at positive selection, $0.56\times10^{7}$ at negative selection. **Positive selection destroys the most** — about $10^{8}$ cells a day, half of everything imported.

And that filter has nothing to do with self-tolerance. It discards receptors that are *useless*, not receptors that are *dangerous*: a TCR that cannot engage self-MHC can never read a peptide displayed on self-MHC, so it could not participate in cell-mediated immunity at all. **The overwhelming majority of the thymus's carnage is quality control on the randomness of [3.1](03-01-vdj-recombination.md), not safety screening.** Only the last, smallest filter is tolerance proper.

**P2**

**(a)** Require $C(n) = 1-(0.98)^{n} \ge 0.99$, i.e. $(0.98)^{n} \le 0.01$:

$$n \ge \frac{\ln 0.01}{\ln 0.98} = \frac{-4.605}{-0.0202} = 227.9 \;\Rightarrow\; \mathbf{n \approx 228\ \text{mTEC encounters}}.$$

This is why medullary residence is measured in days, not minutes — a thymocyte must physically tour a few hundred epithelial cells to be screened against the body.

**(b)** With $f = 0.01$ and $n = 228$:

$$(0.99)^{228} = e^{228\ln 0.99} = e^{-2.29} = 0.101 .$$

**About 10 percent of tissue-restricted antigens are never displayed**, versus 1 percent at baseline — a **tenfold increase in the number of organs against which no tolerance was ever imposed.**

Clinically this is APS-1 (autoimmune polyendocrine syndrome type 1): the null phenotype is multi-organ autoimmunity — hypoparathyroidism, adrenal failure, and more — and the striking feature is that it is *organ-scattered rather than organ-specific*, exactly as a randomly-thinned mosaic predicts. Note the shape of the prediction: **AIRE loss does not cause a disease, it causes a distribution of diseases**, with which organs are hit depending on which antigens fell out of the sample.

**P3**

**(a)** $P = e^{-2\ln 2} = e^{-1.386} = 0.25$. Survival drops from 0.5 to **0.25**, so the exported repertoire is **halved**.

**(b)** Baseline: $(1-q)^{N} = 10^{-3}$. After halving, the hole rate is

$$(1-q)^{N/2} = \left[(1-q)^{N}\right]^{1/2} = \sqrt{10^{-3}} = 3.2\times10^{-2}.$$

**The fraction of foreign epitopes no clone can see rises from 0.1 percent to 3.2 percent — a 32-fold increase in blind spots for a mere twofold increase in safety margin.** The asymmetry is the whole argument: coverage depends on repertoire size through a *square root* here, so repertoire is expensive to buy and cheap to lose.

**(c)** Tightening tolerance buys safety linearly and costs pathogen coverage steeply, so the optimal threshold sits where the marginal autoimmune risk avoided equals the marginal infection risk incurred — **which is necessarily above zero autoimmunity.** A system tuned to eliminate autoimmunity entirely would be riddled with holes precisely where pathogens resemble host proteins, and pathogens are under selection to resemble host proteins. A few percent population prevalence of autoimmune disease is therefore the expected cost of a repertoire broad enough to be useful, not evidence of a broken mechanism.

This is also the mechanistic prediction behind checkpoint blockade: anti-CTLA-4 and anti-PD-1 therapies work by *moving the peripheral threshold in the permissive direction* to unmask tumor antigens, and the immune-related adverse events that follow in a large fraction of treated patients are not an off-target side effect — they are the same trade-off, deliberately shifted, showing up on the other side of the ledger ([4.5](04-05-immunodeficiency-tumor-transplant.md)).

</details>

## Flashback

**From Lesson 4.1 (cytotoxic T cells & cell-mediated killing):** A CTL clone is assayed against its virus-infected targets in three pairings — wild-type CTL with wild-type target, a **perforin-null** CTL with wild-type target, and wild-type CTL with a **Fas-null** target — and killing is scored at 45 minutes and again at 9 hours.

(a) State which pairings show killing at each time point, and name the route responsible in each.
(b) Each infected cell holds 850 assembled virions at the moment of the lethal hit, and one CTL kills 26 targets over the response. If its killing were necrotic rather than apoptotic, and each released virion had probability 0.002 of establishing a new infected cell, how many new infections would that single CTL cause? Compare with the 26 it removed, and find the per-virion infection probability at which lytic killing would break even.
(c) This lesson uses one of the two routes to delete lymphocytes rather than pathogens. Which one, and why is a route dismissed as "too slow" for antiviral defense entirely adequate for that job?

<details>
<summary>Solution</summary>

**(a)**

| Pairing | 45 min | 9 h | Route |
|---|---|---|---|
| WT CTL + WT target | killed | killed | perforin/granzyme (minutes) |
| perforin-null CTL + WT target | nothing | killed | Fas–FasL only (hours) |
| WT CTL + Fas-null target | killed | killed | perforin/granzyme, unaffected |

The third row is the one that tests understanding: **the granule route needs no death receptor on the target at all.** Perforin is a delivery device that admits granzyme B to the cytosol, and granzyme B cuts after aspartate — it activates procaspase-3 directly and cleaves Bid to tBid. It enters the apoptotic program *below* the receptor layer, so deleting Fas changes nothing.

The second row is the timescale point. FasL clusters Fas, assembling FADD → caspase-8 → caspase-3, over hours. **A short assay reads a perforin-null CTL as completely dead, and a long one reads it as nearly normal** — which is exactly why perforin deficiency in humans is catastrophic for viral control despite fully intact Fas.

**(b)** Virions released if the 26 targets burst instead of blebbing:

$$26 \times 850 = 22{,}100 \ \text{virions}, \qquad 22{,}100 \times 0.002 = \mathbf{44.2\ \text{new infected cells}}.$$

That CTL removed 26 infected cells and created 44.2 of them — a net gain of 18.2, a ratio of $44.2/26 = 1.7$. **Lytic killing would be worse than not killing at all.**

Break-even needs one target's payload to seed at most one new infection:

$$850\,p \le 1 \;\Longrightarrow\; p \le \frac{1}{850} = \mathbf{1.2\times10^{-3}},$$

below the 0.002 assumed here. So for this virus the lytic strategy loses, and it loses by construction: the burden per cell is set by viral assembly, not by the immune system.

**This retroactively justifies an assumption you already used.** Lesson 4.1's clearance model $dT/dt = rT - \kappa E$ treats a kill as removing one infected cell and adding nothing. That is only true because death is apoptotic — membrane intact until phosphatidylserine invites phagocytosis, caspase-activated DNase shredding the viral genome along with the host's, and no DAMPs spilled to inflame the tissue. **Necrotic killing would put a positive term back into the equation and the whole threshold argument would collapse.**

**(c) Fas–FasL**, in activation-induced cell death of lymphocytes. Slowness is irrelevant there because **there is no exponential adversary setting the clock.** Antiviral killing races a population growing at rate $r$, so hours cost doublings; contraction of a finished immune response is paced by resolution over hours to days, and nothing is doubling while you wait.

There is a second, deeper reason worth stating: **the two routes get their precision from different places.** Granule killing is precise *geometrically* — a sealed cleft concentrating a general poison — which is what you need to execute an arbitrary infected tissue cell that has no distinguishing surface protein. Fas killing is precise *by expression state*: only cells displaying Fas can die this way, and activated lymphocytes are exactly the cells that upregulate it. For a mechanism aimed at self, having the target's own activation status be the licence is precisely the right design.

</details>

## Connections

- **Backward:** [3.1](03-01-vdj-recombination.md) is the reason this lesson has to exist — random generation forces post-hoc editing, and receptor editing reuses the same RAG machinery and the same unspent V and J segments. Positive selection is where the MHC restriction of [2.3](02-03-t-cell-receptor.md) actually comes from, and the affinity thresholds here are read out by the dwell-time/kinetic-proofreading mechanism from that lesson. Anergy is the two-signal rule of [3.5](03-05-helper-t-cells-polarization.md) run in reverse.
- **Forward:** [4.4](04-04-autoimmunity-hypersensitivity.md) is this lesson's failure list — every mechanism named here (thymic deletion, AIRE, editing, anergy, Treg) has a disease attached to its loss. [4.5](04-05-immunodeficiency-tumor-transplant.md) exploits the trade-off deliberately with checkpoint blockade and inherits its toxicity, and uses Treg recruitment to explain the tumor microenvironment.
- **Sideways:** the threshold argument in P3 is a stabilizing-selection problem — an optimum pinned between two opposing costs, exactly the structure of [evolution-ecology 1.2](../../evolution-ecology/lessons/01-02-modes-of-selection.md). AIRE and FoxP3 are textbook single-gene knockouts of a regulatory circuit in humans, the kind of natural experiment catalogued in [genetics 4.5](../../genetics/lessons/04-05-human-genetics-genome-medicine.md); the graded, thresholded signalling that implements the affinity window is the switch behaviour of [molecular-cell-biology 2.3](../../molecular-cell-biology/lessons/02-03-kinase-cascades-switch.md).
