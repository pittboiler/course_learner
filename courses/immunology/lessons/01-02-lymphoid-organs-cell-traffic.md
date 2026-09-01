# Immunology · Lesson 1.2: Lymphoid organs & cell traffic

> ⏱ ~15 min · Module 1: Architecture & Innate Defense · Builds on: [1.1](01-01-immune-problem-cellular-cast.md) · Unlocks: 1.3 (barriers & the sensing of danger), 3.2 (clonal selection)

## Why this matters

[1.1](01-01-immune-problem-cellular-cast.md) left you with a repertoire of $10^{11}$ receptors and no way to use it. Having the right lymphocyte somewhere in your body is worthless unless that cell physically touches the antigen, and the odds are terrible: the one cell type that can see a given peptide is roughly one in a million of your lymphocytes, and the antigen is at one unpredictable cubic centimetre of tissue.

**An immune response is a search problem before it is a biochemistry problem.** This lesson is the architecture that solves it — and once you see it as a search, three things stop being trivia and become predictions: why lymph nodes sit where they sit, why an infected node swells, and why the adaptive response takes days.

The punchline is the surprising part. **The several-day lag of a primary response is almost entirely proliferation, not search.** Finding the needle takes hours. Making enough needles takes a week.

## The idea

**The design principle is a funnel.** You cannot make lymphocytes visit every cubic millimetre of tissue, and you cannot make antigen go looking for lymphocytes. So the body does two things instead:

1. **It drains all tissue fluid to a small number of fixed addresses.** Every region of the body has a lymph node downstream of it. Whatever leaks out of a capillary and is not reabsorbed becomes lymph, and lymph goes to a node. Antigen has nowhere else to go.
2. **It makes lymphocytes visit those addresses continuously.** A naive lymphocyte does not patrol tissue. It shuttles blood → node → lymph → blood, roughly two nodes a day, its whole life, until it either meets its antigen or dies.

So the antigen and the searcher are both funnelled into the same room, and the room is small. **That is the entire architecture: a rendezvous protocol replacing a random collision.**

Three consequences worth stating before the formalism:

- **Naive lymphocytes are actively excluded from ordinary tissue.** They carry the molecular address for lymph nodes and not the one for inflamed skin. The random search isn't merely inefficient — it is forbidden.
- **The innate system supplies the courier.** A dendritic cell that has fired its pattern receptors in tissue ([1.3](01-03-barriers-sensing-danger.md)) switches on a chemokine receptor and walks itself up the lymphatic into the node. It carries the antigen *to* the room. This is the mechanical version of "the dendritic cell is the bridge" from [1.1](01-01-immune-problem-cellular-cast.md).
- **Traffic is an addressing system, not a soup.** Where a leukocyte goes is set by which pair of receptors it displays, and the pairs read like postcodes.

## The formal version

### Primary versus secondary organs

**Primary (generative) lymphoid organs** are where the repertoire is *built and edited*: **bone marrow** (all hematopoiesis; B cells complete development here) and **thymus** (T cells). No foreign antigen is deliberately presented here; the antigen that matters is *self*, used to censor the repertoire ([4.3](04-03-self-tolerance-regulation.md)).

**Secondary (peripheral) lymphoid organs** are where the repertoire *meets antigen*: **lymph nodes** (tissue-derived antigen, arriving in lymph), **spleen** (blood-borne antigen), and **mucosal tissue** — Peyer's patches, tonsils, appendix, and the diffuse lamina propria.

*In words: primary organs manufacture, secondary organs match. Diversity generation and antigen encounter are separated in space, which is exactly what clonal selection ([3.2](03-02-clonal-selection-b-cell-activation.md)) requires.*

### Lymph node architecture

| Zone | Contents | Chemokine → receptor |
|---|---|---|
| Subcapsular sinus | afferent lymph arrives; sinus macrophages capture particulate antigen | — |
| Cortex: B-cell follicles | B cells, follicular dendritic cells (FDCs) holding intact antigen | CXCL13 → CXCR5 |
| Paracortex (deep cortex) | naive T cells, dendritic cells, fibroblastic reticular cells, **high endothelial venules (HEVs)** | CCL19 / CCL21 → CCR7 |
| Medulla | plasma cells, macrophages, efferent sinus | — |
| Conduit system | collagen tubes ensheathed by fibroblastic reticular cells, carrying small soluble antigen (below about 70 kDa) from the sinus straight into the T zone | — |

**The load-bearing fact is that naive T cells and mature dendritic cells use the same receptor.** Both express **CCR7**; the fibroblastic reticular cells of the paracortex make its ligands CCL19 and CCL21. **The cell carrying the antigen and the cell looking for it are addressed to the same room by the same signal.** That is not a coincidence — it is the mechanism.

B cells use **CXCR5** and follow **CXCL13** from FDCs into the follicle. A B cell that has just bound antigen upregulates CCR7 and drifts to the T–B border, which is precisely where its helper is waiting ([3.2](03-02-clonal-selection-b-cell-activation.md)). **Position is programmable by swapping receptors, and the immune system uses that constantly.**

**Where the lymph comes from:** capillaries filter roughly 20 L/day and reabsorb most of it; the residual 2–4 L/day is collected by lymphatics and returned to the great veins ([physiology 2.3](../../physiology/lessons/02-03-hemodynamics-blood-pressure.md)). Immunologically that "residual" is the entire sampling stream of the peripheral tissues.

**The spleen** has the same functional zoning with no afferent lymphatics — it filters *blood*. White pulp: a periarteriolar lymphoid sheath (T cells) around a central arteriole, with adjacent B follicles; a **marginal zone** of specialized B cells and macrophages positioned to catch blood-borne encapsulated bacteria; red pulp for erythrocyte turnover. **This is why splenectomy produces a specific, predictable hole** — overwhelming infection by encapsulated organisms, not general immunodeficiency.

### Trafficking: the multistep adhesion cascade

A lymphocyte moving at centimetres per second in blood must stop on a specific patch of endothelium. It cannot do that in one step, so it does it in four.

| Step | Molecules | Timescale |
|---|---|---|
| 1. Tethering and rolling | **L-selectin (CD62L)** on the lymphocyte ↔ **PNAd** on HEV; E-/P-selectin at inflamed sites | milliseconds |
| 2. Triggering | **CCL21** displayed on the HEV lumen → **CCR7**, a GPCR ([molecular-cell-biology 2.1](../../molecular-cell-biology/lessons/02-01-receptors-reading-outside-world.md)) → inside-out signalling | under a second |
| 3. Arrest | **LFA-1** ($\alpha_L\beta_2$) switched to high affinity ↔ **ICAM-1/2**; VLA-4 ↔ VCAM-1 | seconds |
| 4. Diapedesis | PECAM-1, CD99, actin-driven crawling between endothelial cells ([molecular-cell-biology 1.2](../../molecular-cell-biology/lessons/01-02-cytoskeleton-three-filaments.md)) | minutes |

*In words: selectins slow you down, a chemokine tells you to stop, an integrin actually stops you, and then you squeeze through.*

**Step 2 is where all the specificity lives.** Selectins are promiscuous and integrins are everywhere; what makes a cell stop *here* and not *there* is which chemokine receptor it carries and which chemokine that endothelium displays. **Rolling without a chemokine signal ends in the cell letting go.**

### Addresses are combinations

| Destination | Adhesion receptor | Chemokine receptor | Endothelial partner |
|---|---|---|---|
| Peripheral lymph node | L-selectin, LFA-1 | CCR7 | PNAd, ICAM-1, CCL21 |
| Gut (Peyer's patch, lamina propria) | $\alpha_4\beta_7$ | CCR9 | MAdCAM-1, CCL25 |
| Skin | CLA (E-selectin ligand) | CCR4, CCR10 | E-selectin, CCL17, CCL27 |
| Any inflamed tissue | VLA-4, LFA-1, PSGL-1 | CXCR3, CCR5 | VCAM-1, ICAM-1, CXCL9/10 |

**This is druggable at the level of the address.** Vedolizumab blocks $\alpha_4\beta_7$ and is therefore *gut-selective* in inflammatory bowel disease. Natalizumab blocks all $\alpha_4$, which works in multiple sclerosis by keeping lymphocytes out of the CNS — and costs CNS immune surveillance, which is why it carries a risk of progressive multifocal leukoencephalopathy. **The selectivity of the drug is exactly the selectivity of the postcode it blocks.**

### Exit: the S1P timer

**Sphingosine-1-phosphate (S1P)** is high in blood and lymph and low inside lymphoid tissue, because tissue expresses S1P lyase and destroys it. Naive lymphocytes carry **S1PR1**, a GPCR for S1P.

A cell arriving from blood has its S1PR1 internalized (it has been swimming in ligand). Inside the low-S1P node, S1PR1 is re-expressed over several hours. Retention by CCR7 and egress by S1PR1 pull in opposite directions:

$$\text{dwell time } \tau \;\approx\; 12\ \text{h for T cells},\qquad \approx 24\ \text{h for B cells}$$

*In words: how long a lymphocyte stays is set by a race between two GPCRs, and the winner changes as one of them recovers.*

**Two beautiful consequences.**

- **CD69**, induced within an hour or two of TCR engagement or interferon exposure, binds S1PR1 and drives its degradation. An activated cell therefore cannot leave. This is the "lymphocyte shutdown" that follows any infection: efferent lymph output from a reactive node falls within hours.
- **Fingolimod (FTY720)** is phosphorylated in vivo into an S1PR1 superagonist that causes sustained internalization — a *functional antagonist*. Lymphocytes cannot read the exit gradient, so they stay in nodes; circulating lymphocyte counts fall by roughly 70 percent, autoreactive cells never reach the CNS, and relapsing multiple sclerosis improves. **CD69 and fingolimod do the same thing to the same receptor** — one physiologically, for a day; one pharmacologically, for years.

**Why the node swells.** Three effects stack: egress shuts down (CD69), entry rises (blood flow to a reactive node increases several-fold and HEVs remodel), and cells proliferate. A node can grow five- to tenfold. **A swollen node is not the infection spreading; it is the funnel operating, made visible.**

## Picture

![Cross-section of a lymph node drawn as a bean with a subcapsular sinus ring, three green B-cell follicles in the cortex labelled with CXCL13 and CXCR5, a blue T paracortex labelled with CCL19, CCL21 and CCR7, a high endothelial venule drawn as a small tube inside the paracortex with lymphocytes in it, and a medulla with plasma cells near the exit. A coral box at the left is infected tissue containing a dendritic cell that has taken antigen and switched on CCR7. Black arrows trace the antigen route from tissue up the afferent lymph into the paracortex, with a dashed blue line marking the conduit shortcut that delivers small soluble antigen from the sinus in minutes. A coral arrow shows blood delivering ninety percent of entering lymphocytes into the high endothelial venule, and a blue path traces a naive lymphocyte scanning the paracortex and leaving through the efferent lymph up the sphingosine-1-phosphate gradient. A legend at the bottom gives timings for each route.](assets/01-02-fig1.svg)

## Worked examples

### Example 1 (mechanical) — how good is the funnel?

Take an adult with $N_T \approx 3\times10^{11}$ T cells and about $C \approx 2\times10^{7}$ distinct T-cell receptor clonotypes.

**(a) How many T cells can respond to one peptide–MHC?** The mean clone size is

$$\bar{n}_{\text{clone}} = \frac{N_T}{C} = \frac{3\times10^{11}}{2\times10^{7}} = 1.5\times10^{4}\ \text{cells}.$$

Receptor recognition is degenerate — of order 10–100 distinct clonotypes cross-react with any one peptide–MHC — so taking 20:

$$n \approx 20 \times 1.5\times10^{4} = 3\times10^{5}\ \text{cells}, \qquad \text{precursor frequency } f = \frac{n}{N_T} \approx 10^{-6}.$$

**Sanity check across species:** a mouse has $N_T \approx 10^{8}$, so the same frequency predicts about 100 specific cells — which is what direct tetramer counting finds. The number is right.

**(b) How many of them are in the node that drains the infection?** About 40 percent of T cells are inside lymph nodes at any instant, spread over $M \approx 500$ nodes:

$$n_{\text{node}} = \frac{0.4\, n}{M} = \frac{0.4 \times 3\times10^{5}}{500} \approx 240\ \text{cells}.$$

With a dwell time $\tau = 12$ h, fresh clone members arrive at

$$\lambda = \frac{n_{\text{node}}}{\tau} = \frac{240}{12\ \text{h}} = 20\ \text{per hour}.$$

**(c) Compare the two concentrations.** The T zone of one node is roughly $20\ \mu\text{L}$, and the drainage basin feeding it is of order 1 L of tissue:

$$\text{antigen concentration gain} = \frac{10^{3}\ \text{mL}}{2\times10^{-2}\ \text{mL}} = 5\times10^{4}.$$

$$\text{specific T cells in the T zone} = \frac{240}{20\ \mu\text{L}} = 12\ \text{per } \mu\text{L}, \qquad \text{spread over 60 L of body} = 5\times10^{-3}\ \text{per } \mu\text{L}.$$

**Both parties are concentrated by three to five orders of magnitude, into the same $20\ \mu\text{L}$.** And once there, a naive T cell crawling at about $10\ \mu\text{m/min}$ makes hundreds to thousands of dendritic-cell contacts per hour, against the $10^{3}$–$10^{4}$ antigen-bearing dendritic cells present at the peak — so it scans essentially the whole display during a single 12 h visit.

**Conclusion: the encounter is not rate-limiting.** Two hundred of the right cells are already in the room when the antigen arrives.

### Example 2 (why you'd care) — where the seven days actually go

Budget the primary CD8 response to a skin infection. Start from $\approx 200$ resident precursors and finish at $\approx 10^{7}$ effectors.

$$\text{doublings required} = \log_2\!\left(\frac{10^{7}}{200}\right) = \log_2(5\times10^{4}) = 15.6 .$$

At a division time of 7 h once the programme is running:

$$15.6 \times 7\ \text{h} = 109\ \text{h} = 4.6\ \text{days}.$$

| Stage | Time |
|---|---|
| Breach → pattern receptors fire ([1.3](01-03-barriers-sensing-danger.md)) | minutes |
| Dendritic cell matures and crawls to the node | ~18 h |
| **Finding the specific clone in the node** | **minutes to hours** |
| First division after antigen contact | ~24 h |
| 15.6 doublings at 7 h each | 109 h |
| Effectors leave the node and reach the tissue | ~18 h |
| **Total** | **~169 h ≈ 7 days** |

**The search costs hours out of seven days.** Well over half the lag is doubling time multiplied by a logarithm.

**Now the design consequence, which is the reason to do this arithmetic.** The number of doublings depends on the precursor count only through $\log_2$, so:

- Halving the recruited precursors (200 → 100) costs exactly **one doubling, 7 hours**.
- A tenfold reduction costs $\log_2 10 = 3.3$ doublings, about **23 hours**.
- A hundredfold *increase* — roughly what memory provides — saves $\log_2 100 = 6.6$ doublings, about **46 hours**.

**So a bigger starting pool buys you two days, not five.** The rest of memory's advantage ([4.2](04-02-immunological-memory-vaccines.md)) has to come from somewhere else: lower activation thresholds, receptors already class-switched and affinity-matured ([3.3](03-03-germinal-centers-affinity-maturation.md)), and — most importantly — tissue-resident memory cells pre-positioned at the barrier, which **skip the funnel entirely**. Memory's real trick is not starting bigger. It is not having to search.

## Watch out

- **You might think the several-day lag is the immune system slowly figuring out what the pathogen is.** Recognition happens within hours of the dendritic cell arriving. The lag is 15–17 cell divisions, and it is bounded below by division time.
- **You might think lymphocytes enter a node through the afferent lymph.** About 90 percent enter from *blood*, through HEVs. Afferent lymph delivers antigen and dendritic cells; it is the courier route, not the commuter route. (Efferent lymph is far richer in lymphocytes than afferent lymph, which is the observation that proves it.)
- **You might treat chemokines as vague "homing signals".** They are the trigger for step 2 of a four-step cascade: a rolling cell that receives no chemokine signal never converts LFA-1 to high affinity and simply detaches. **Selectins alone cannot arrest a cell.**
- **You might treat the spleen as a large lymph node.** It has no afferent lymphatics and samples blood, not tissue — hence a marginal zone specialized for encapsulated blood-borne bacteria, and hence the very specific vulnerability created by splenectomy.
- **You might read a swollen node as infection spreading into it.** It is egress shutdown plus increased entry plus proliferation: the node doing its job. The functionally alarming node is the one that *doesn't* swell.

## One-liner

> Lymphoid architecture converts an impossible random search into a scheduled rendezvous — a litre of tissue drained into a twenty-microlitre room that already holds a couple of hundred of the right cells — so the week-long lag of a primary response is not recognition, it is sixteen doublings.

## Problems

**P1 (🟢)** A naive T cell dwells $\tau = 12$ h in a lymph node, and there are $M = 500$ nodes. (a) How many nodes does one cell visit in 30 days, and what fraction of the total is that? (b) A clone specific for one peptide–MHC has $n = 3\times10^{5}$ members, 40 percent of them inside nodes at any moment. How many sit in the draining node, and at what rate do fresh ones arrive? (c) Given (a) and (b), is coverage achieved by each *cell* being thorough, or by something else?

**P2 (🟡)** A patient starts fingolimod, an S1PR1 functional antagonist. (a) Predict the direction and rough magnitude of the change in blood lymphocyte count, and give the mechanism. (b) Are the missing lymphocytes destroyed? What single measurement would settle it? (c) Effector-memory T cells are CCR7-negative and recirculate through tissue rather than nodes. Predict how strongly the drug affects them, and what that implies for the patient's infection risk relative to a drug that depletes lymphocytes outright.

**P3 (🔴, bridges to [4.2](04-02-immunological-memory-vaccines.md))** A primary CD8 response starts from 200 activated precursors, waits 24 h before the first division, then divides every 7 h until it reaches $10^{7}$ effectors. (a) Compute the time from first antigen contact to peak. (b) A vaccine adjuvant recruits ten times as many dendritic cells and so activates 2000 precursors instead of 200. How much earlier does the response peak? (c) A memory response starts from $2\times10^{4}$ precursors. Compute the saving, compare it with the observed primary-versus-secondary difference of roughly 7 days versus 2 days, and state what must account for the remainder. (d) What does the functional form of your answer say about the value of increasing precursor frequency as a vaccine-design strategy?

<details>
<summary>Solutions</summary>

**P1 (a)** With $\tau = 12$ h the cell visits $24/12 = 2$ nodes per day, so

$$30\ \text{days} \times 2 = \mathbf{60\ \text{nodes}}, \qquad \frac{60}{500} = \mathbf{12\ \text{percent}}\ \text{of the total}.$$

A single cell samples only a small minority of nodes even over a month.

**(b)**
$$n_{\text{node}} = \frac{0.4 \times 3\times10^{5}}{500} = \frac{1.2\times10^{5}}{500} = \mathbf{240\ \text{cells}},$$

$$\lambda = \frac{240}{12\ \text{h}} = \mathbf{20\ \text{cells per hour}} = 480\ \text{per day}.$$

**(c)** **Coverage is achieved by clone size, not by individual thoroughness.** No single cell can canvass the body — but with $3\times10^{5}$ members distributed at random across 500 nodes, *every node continuously holds a few hundred of them*. The redundancy is what makes each node a complete, if thin, copy of the repertoire.

The same arithmetic applied to a whole clonotype rather than an epitope: mean clone size $1.5\times10^{4}$, so about $0.4 \times 1.5\times10^{4}/500 \approx 12$ cells of *every* clonotype are in *every* node at all times. **That is the real design statement: 500 independent search sites, each stocked with a full sample of the repertoire.**

**P2 (a)** The count **falls**, by roughly **70 percent**. S1PR1 is the receptor a lymphocyte uses to read the high-S1P exit gradient in efferent lymph. Fingolimod-phosphate drives sustained S1PR1 internalization and degradation, so cells entering nodes from blood (via HEV, CCR7/L-selectin — untouched by the drug) cannot leave. **Entry is unaffected and exit is blocked, so lymphocytes accumulate in nodes and disappear from blood.**

**(b)** **No — they are sequestered, not killed.** The distinguishing measurement is what happens on withdrawal: lymphocyte counts recover over weeks as S1PR1 is re-expressed, with no need for new thymic output. (Equivalently, in an animal model, count lymph-node cellularity: it rises, and the "missing" blood lymphocytes are found there.) This is a redistribution, and the recovery kinetics prove it.

**(c)** **Effector-memory cells are relatively spared.** They are CCR7-negative, so they do not enter lymph nodes through HEVs in the first place — they recirculate through blood and peripheral tissue, where the trap does not apply. Fingolimod preferentially sequesters naive and central-memory (CCR7-positive) cells.

**Implication:** peripheral immune surveillance by pre-existing effector memory continues, so the infection risk is lower than for a depleting agent that removes the cells themselves. What is genuinely lost is the ability to mount *new* primary responses efficiently — because a new response requires exactly the naive cells that are now stuck in nodes. **The drug degrades learning, not memory**, which is precisely the trade you want in an autoimmune disease driven by ongoing recruitment.

**P3 (a)**
$$\text{doublings} = \log_2\!\left(\frac{10^{7}}{200}\right) = \log_2(5\times10^{4}) = \log_2 5 + \log_2 10^{4} = 2.32 + 13.29 = 15.61 .$$

$$t = 24\ \text{h} + 15.61 \times 7\ \text{h} = 24 + 109.3 = \mathbf{133\ \text{h} \approx 5.6\ \text{days}}.$$

(Adding the roughly 18 h of dendritic-cell migration beforehand and 18 h for effectors to reach tissue gives the familiar ~7-day peak.)

**(b)** With 2000 precursors:

$$\log_2\!\left(\frac{10^{7}}{2000}\right) = \log_2(5\times10^{3}) = 12.29\ \text{doublings}.$$

$$\Delta = (15.61 - 12.29) \times 7\ \text{h} = 3.32 \times 7 = \mathbf{23\ \text{h}}.$$

**A tenfold increase in precursors buys under one day** — because $\log_2 10 = 3.32$ doublings, always, regardless of where you start.

**(c)** With $2\times10^{4}$ precursors (a hundredfold increase):

$$\log_2\!\left(\frac{10^{7}}{2\times10^{4}}\right) = \log_2(500) = 8.97\ \text{doublings}, \qquad \Delta = 6.64 \times 7 = \mathbf{46\ \text{h} \approx 1.9\ \text{days}}.$$

So precursor expansion explains going from ~7 days to ~5 days. **The observed secondary response peaks at about 2 days, so roughly 3 days are unaccounted for.** They must come from mechanisms that are not "more starting cells":

1. **No search and no courier delay.** Tissue-resident memory cells are already at the barrier, so the 18 h of dendritic-cell migration plus the node round trip plus the 18 h of effector egress — about 1.5 days — is simply not spent.
2. **A shorter time to first division and a faster cycle.** Memory cells have lower activation thresholds, are less dependent on costimulation, and are epigenetically poised at effector loci.
3. **Pre-made product.** Memory B cells are already class-switched and affinity-matured ([3.3](03-03-germinal-centers-affinity-maturation.md)), and long-lived plasma cells maintain circulating antibody, so protection can precede any expansion at all.

**(d)** **The response time is logarithmic in precursor number, so raising precursor frequency has sharply diminishing returns as a design goal.** Each factor of 10 buys one fixed doubling-time debt of about a day, and you cannot buy many factors of 10.

The consequences for vaccine design are concrete: an adjuvant that raises precursor recruitment tenfold is worth about a day, whereas anything that shortens the *pre-division lag* or the *division time* pays off linearly, and anything that **pre-positions cells at the site of entry** removes a fixed cost of well over a day and does not care about the logarithm at all. **That is the mechanistic argument for mucosal and intranasal vaccination against respiratory pathogens** — you are not trying to make the clone bigger, you are trying to make the search unnecessary.

</details>

## Connections

- **Backward:** [1.1](01-01-immune-problem-cellular-cast.md) named the dendritic cell as the bridge between innate and adaptive immunity; this lesson is the bridge's physical construction — CCR7 up, walk to the paracortex, meet the T cells that followed the same gradient.
- **Forward:** [1.4](01-04-inflammation-innate-effectors.md) reuses the same four-step adhesion cascade, redirected by inflamed endothelium to recruit neutrophils into tissue instead of lymphocytes into nodes. [3.2](03-02-clonal-selection-b-cell-activation.md) happens at the T–B border you just located, and [3.3](03-03-germinal-centers-affinity-maturation.md) happens inside the follicles. [4.2](04-02-immunological-memory-vaccines.md) turns the timing budget above into vaccine strategy.
- **Sideways:** lymph is the residual of capillary filtration, so the Starling arithmetic in [physiology 2.3](../../physiology/lessons/02-03-hemodynamics-blood-pressure.md) is literally what generates the immune system's sampling stream. Chemokine receptors are GPCRs ([molecular-cell-biology 2.1](../../molecular-cell-biology/lessons/02-01-receptors-reading-outside-world.md)) and diapedesis is actin-driven crawling ([molecular-cell-biology 1.2](../../molecular-cell-biology/lessons/01-02-cytoskeleton-three-filaments.md)). Clone members arriving at a node at a constant mean rate with independent arrivals is a Poisson process ([prob-stat-refresher 2.2](../../prob-stat-refresher/lessons/02-02-discrete-distributions.md)) — the natural formalism if you want the *distribution* of the waiting time rather than just its mean.
