# General Biology · Lesson 2.4: The cell cycle

> ⏱ ~15 min · Module 2: Energy, metabolism & cell division · Builds on: [1.3](01-03-cell-theory-two-kinds-of-cell.md), [2.1](02-01-energy-atp-enzymes.md) · Unlocks: 2.5 (mitosis and meiosis)

## Why this matters

Cell theory's third claim — every cell comes from a cell ([1.3](01-03-cell-theory-two-kinds-of-cell.md)) — describes a process that has to be almost unbelievably reliable. A human body performs something like $10^{16}$ cell divisions in a lifetime, each one copying three billion DNA base pairs and distributing them correctly. The error rate has to be tiny, and it is.

The machinery that makes it reliable is a set of **checkpoints**, and understanding them explains cancer better than any other single idea in biology. Cancer is not a disease of cells dividing; it is a disease of cells dividing *without permission*.

## The idea

Division looks dramatic, but it's the short part. Most of a cell's life is **interphase** — growing, doing its job, and quietly preparing. The actual splitting takes perhaps an hour out of a 24-hour cycle.

The cycle has four phases, and the logic behind the order is worth seeing.

- **G1** — the cell grows and does whatever it exists to do. This is also where it decides whether to divide at all.
- **S** — synthesis. The DNA is copied. Every chromosome becomes two identical **sister chromatids**, still joined together.
- **G2** — more growth, and a check that the copying finished correctly.
- **M** — mitosis and cytokinesis: chromosomes are separated and the cell splits in two.

Why the two gaps? Because copying DNA and separating it are both dangerous, and the cell wants to verify conditions before and after each. **G1 and G2 are not idle waiting; they are inspection stations.**

Cells that stop dividing — neurons, mature muscle — exit into a resting state called **G0**. Most of the cells in your body are sitting in G0 right now, fully functional and not preparing to divide at all.

**Checkpoints are the control system.** At three points the cycle can halt. The critical thing to grasp is the *default*: a checkpoint is not a green light that occasionally turns red. The cycle is stopped unless positively pushed forward, and the checkpoint machinery withholds that push when something is wrong. **Biology's default is "don't divide."** That framing makes cancer make sense — it takes multiple independent failures to override.

And the control logic is the feedback inhibition of [2.1](02-01-energy-atp-enzymes.md), scaled up: proteins that sense a condition and, through shape changes, switch other proteins on or off.

## The formal version

**The four phases.**

| Phase | What happens | Typical share of a 24-hour cycle |
|---|---|---|
| **G1** | growth, normal function, decision to divide | 11 h |
| **S** | DNA replication; each chromosome → 2 sister chromatids | 8 h |
| **G2** | growth, synthesis of division proteins, verification | 4 h |
| **M** | mitosis + cytokinesis | 1 h |

**Interphase = G1 + S + G2**, about 95 percent of the cycle. **G0** is an exit from G1, sometimes permanent.

**Chromosome bookkeeping — the part that confuses people.** A human cell has 46 chromosomes throughout. What changes is how many *chromatids* each one has:

| Stage | Chromosomes | Chromatids each | Total DNA |
|---|---|---|---|
| G1 | 46 | 1 | 1× |
| After S | 46 | 2 (sisters, joined) | 2× |
| After M | 46 | 1 | 1× |

*In words: replication doubles the DNA but not the chromosome count, because the two copies stay attached at the centromere and count as one chromosome until they separate.* Chromosome number changes only when sister chromatids are pulled apart. See [chromosome vs chromatid](../reference.md#chromosome-vs-chromatid).

**The three checkpoints.**

| Checkpoint | Located | Asks |
|---|---|---|
| **G1** (restriction point) | end of G1 | Is the cell big enough? Are nutrients and growth signals present? **Is the DNA damaged?** |
| **G2** | end of G2 | Was replication completed? Is the DNA damaged? |
| **M** (spindle) | mid-mitosis | Is every chromosome correctly attached to the spindle from both sides? |

The **G1 checkpoint is the most consequential** — it is the last point at which the cell can decline cheaply. Past it, the cell is committed to a full cycle.

**The machinery.** Two protein families do the work:

- **Cyclins**, whose concentrations rise and fall through the cycle — this is the clock.
- **Cyclin-dependent kinases (CDKs)**, which are enzymes that are inactive alone and become active when bound to the right cyclin.

*In words: the CDK is the engine and the cyclin is the key; the key exists only at certain times.* An active cyclin–CDK complex phosphorylates target proteins, switching them on and driving the cell into the next phase. It is allosteric regulation ([2.1](02-01-energy-atp-enzymes.md)) used as a timer.

**Two classes of brake, and how cancer breaks them.**

| Gene type | Normal job | Analogy | Failure mode |
|---|---|---|---|
| **Proto-oncogene** | promotes division when signalled | accelerator | **Gain of function** — mutation makes it stuck on. One copy is enough. |
| **Tumour suppressor** | halts division when something is wrong | brake | **Loss of function** — mutation disables it. **Both copies must fail.** |

The asymmetry matters: a mutated proto-oncogene (now an **oncogene**) is dominant, while a tumour suppressor is recessive at the cellular level.

**p53**, the best-known tumour suppressor, sits at the G1 checkpoint. On detecting DNA damage it halts the cycle to allow repair, and if the damage is irreparable it triggers **apoptosis** — programmed cell death. It is mutated in roughly half of all human cancers, which is why it is nicknamed the guardian of the genome.

**Cancer needs several failures.** A single mutation rarely produces a tumour, because the checkpoints are redundant. Typically **five to ten** independent mutations must accumulate — disabling brakes, jamming accelerators, evading apoptosis, and enabling unlimited division. That requirement is why cancer risk rises so steeply with age: mutations accumulate over time, and the probability of collecting enough of them in one cell lineage grows with exposure.

## Picture

![The cell cycle drawn as a wheel with G1, S, G2 and M sectors showing interphase occupying about ninety percent of the cycle, with the three checkpoints marked and their questions listed: is the cell big enough and the DNA undamaged, was replication completed, and is every chromosome attached to the spindle](assets/02-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — count the DNA).** A human cell has 46 chromosomes in G1. How many chromosomes and how many chromatids does it have at the end of S phase, and immediately after mitosis?

| Point | Chromosomes | Chromatids | DNA content |
|---|---|---|---|
| G1 | 46 | 46 | 1× |
| End of S | **46** | **92** | 2× |
| Each daughter after M | **46** | **46** | 1× |

**The chromosome count never changes.** After replication each of the 46 chromosomes consists of two sister chromatids held at the centromere, so there are 92 chromatids but still 46 chromosomes. Mitosis separates the sisters and gives each daughter 46 single-chromatid chromosomes — genetically identical to the parent.

*Check.* DNA content doubles in S and halves in M, returning to where it started ✓. The trap is calling the 2× state "92 chromosomes"; the count changes only when the centromeres split, which happens in anaphase ([2.5](02-05-mitosis-meiosis.md)).

**Example 2 (why you'd care — how one checkpoint failure becomes a tumour).** Follow a cell whose **p53 is disabled in both copies**.

*Normally:* DNA damage → p53 activated → cycle halts at G1 → repair enzymes work → either the cell resumes, or p53 triggers apoptosis if the damage is beyond repair.

*Without p53:* damage occurs, and the cell divides anyway. Both daughters inherit the damage and any further mutations it causes. The lineage now accumulates mutations far faster than a normal one — **genomic instability**, which is the real danger. p53's loss is not directly cancerous; it removes the mechanism that would have prevented the *next* mutations from mattering.

That is why p53 loss is so often an early event in cancer: it doesn't cause the tumour, it makes every subsequent step more likely. The full progression from a normal colon cell to a metastatic carcinoma typically runs through a well-mapped sequence of about six or seven mutations over decades.

**Two consequences worth having:**

*Why chemotherapy works, and why it has the side effects it does.* Most classical chemotherapy targets rapidly dividing cells — disrupting DNA replication or spindle assembly. Tumour cells divide often, so they are hit hard. But so do bone marrow, hair follicles and gut lining, which is precisely why the characteristic side effects are immune suppression, hair loss and nausea. **The side-effect profile is a direct readout of which normal tissues divide fastest.**

*Why cancer is a disease of age.* Needing five to ten independent hits in one lineage means incidence rises roughly as a high power of age. It also explains why inherited cancer syndromes strike early: someone born with one defective copy of a tumour suppressor needs only one further hit rather than two, in every cell of their body.

## Watch out

- **You might think replication doubles the chromosome number.** It doubles the DNA. Chromosome count is unchanged until sister chromatids separate — 46 chromosomes with 92 chromatids, not 92 chromosomes.
- **You might read a checkpoint as a green light.** It is a stop signal, and the default is stopped. The cycle advances only when actively pushed, which is what makes it safe.
- **You might think one mutation causes cancer.** Typically five to ten are needed, in different genes, in the same cell lineage. The redundancy is the point.
- **You might think G0 means damaged or dying.** Most cells in your body are in G0 and perfectly healthy — neurons and cardiac muscle spend your entire life there. It is a functional state, not a failure.
- **You might think tumour-suppressor mutations behave like oncogene mutations.** They don't: an oncogene needs one copy hit to cause trouble, a tumour suppressor needs both. That asymmetry drives which cancers are inheritable and how.

## One-liner

> The cycle is grow, copy, check, divide — with three checkpoints whose default is stop, and cancer is what happens when enough of those brakes fail in the same lineage.

## Problems

**P1 (🟢)** A cell has 12 chromosomes in G1. How many chromosomes and chromatids does it have at the end of S phase? After mitosis, how many chromosomes does each daughter have?

**P2 (🟡)** A drug damages DNA. Explain how a healthy cell responds, and why a cell with non-functional p53 responds differently. Which is more dangerous in the long run, and why?

**P3 (🔴)** Explain why a tumour-suppressor mutation typically requires both copies to be disabled while an oncogene mutation requires only one. Use this to explain why people born with one defective *BRCA1* copy face a much higher lifetime breast-cancer risk.

<details>
<summary>Solutions</summary>

**P1**

| Point | Chromosomes | Chromatids |
|---|---|---|
| G1 | 12 | 12 |
| End of S | **12** | **24** |
| Each daughter after mitosis | **12** | 12 |

S phase replicates each chromosome into two sister chromatids joined at the centromere. The DNA content doubles, but because the sisters remain attached they still count as a single chromosome — so it is 12 chromosomes with 24 chromatids. Mitosis separates the sisters, giving each daughter 12 chromosomes, genetically identical to the parent and to each other.

*Check.* Chromosome count is conserved through mitosis by design — that is what mitosis is *for* ✓. Contrast [2.5](02-05-mitosis-meiosis.md), where meiosis deliberately halves it.

**P2** **A healthy cell:** damage is detected, p53 is activated, and the G1 checkpoint halts the cycle. Repair enzymes are given time to work. If repair succeeds the cell resumes; if the damage is too severe, p53 triggers **apoptosis** and the cell destroys itself.

**A p53-deficient cell:** no halt. The cell proceeds through S phase with damaged DNA as its template, so errors are copied and fixed into both daughters. No apoptosis is triggered, so cells that should have been eliminated survive and keep dividing.

**The p53-deficient cell is far more dangerous, and the reason is not the first mutation but the rate of all subsequent ones.** The cell has lost its quality-control system, so it enters a state of **genomic instability** where mutations accumulate much faster than normal. Each division is another opportunity to acquire the additional hits a tumour needs. p53 loss doesn't create cancer; it removes the obstacle to becoming cancer.

*Check.* This explains the clinical observation that p53 mutations are found in roughly half of all human cancers across many different tissues ✓ — not because p53 loss is a tissue-specific cause, but because it is a general accelerant of the mutation accumulation that every cancer requires.

**P3** **The asymmetry comes from what kind of failure each requires.**

A **tumour suppressor** is a brake — its protein product actively stops the cycle. Losing one copy still leaves a working copy producing functional protein, and one brake is usually enough. Only when **both** copies are disabled does the braking function disappear. This is a **loss of function**, and it is recessive at the cellular level.

An **oncogene** is a stuck accelerator. A proto-oncogene mutation doesn't remove a function, it creates a new, hyperactive one — a protein that signals "divide" continuously regardless of input. The intact second copy behaves normally but cannot counteract a partner that is constantly shouting. This is a **gain of function**, and it is dominant at the cellular level.

**BRCA1 and inherited risk.** *BRCA1* is a tumour suppressor involved in repairing double-strand DNA breaks. A person born with one defective copy has, in **every cell of their body**, only one functional copy standing between them and complete loss of the function. A single somatic mutation in that remaining copy — in any one of billions of breast or ovarian cells, over decades — is enough to knock the function out entirely in that lineage.

Compare someone with two intact copies: they need **two** independent somatic hits in the *same* cell. The probability of two specific hits in one cell is vastly lower than the probability of one.

$$P(\text{two hits in one cell}) \ll P(\text{one hit in one cell})$$

**So inheriting one defective copy does not cause cancer — it removes one of the two required steps, in every cell, for life.** That is why *BRCA1* carriers face a lifetime breast-cancer risk of roughly 55 to 70 percent against a population baseline near 13 percent, and why the cancers appear decades earlier on average.

*Check.* This is Knudson's **two-hit hypothesis**, originally inferred from exactly this pattern in retinoblastoma: inherited cases appear early and often in both eyes (one hit needed), sporadic cases appear later and usually in one eye (two hits needed) ✓. The hereditary pattern at the level of the *organism* is dominant — carriers pass on elevated risk — even though the mutation is recessive at the level of the *cell*, which is a distinction worth keeping straight.

</details>

## Flashback

**From Lesson 2.1 (Energy, ATP & enzymes):** In feedback inhibition, a pathway's end product binds the first enzyme at a site away from the active site and inactivates it. Name the type of regulation and explain in one sentence why it makes the pathway self-limiting.

<details>
<summary>Solution</summary>

This is **allosteric regulation**, specifically **feedback (end-product) inhibition** — the regulator binds a site distinct from the active site and works by changing the enzyme's shape.

**Why it is self-limiting:** the more product accumulates, the more first-enzyme molecules are bound and inactivated, so production slows exactly in proportion to how much product is already there — negative feedback that holds the concentration near a set point without any external controller.

*Check.* The cell cycle uses the same architecture at a larger scale: cyclin–CDK complexes are allosterically controlled switches, and the checkpoints are negative-feedback loops that sense a condition (DNA damage, incomplete replication) and inhibit progression until it clears ✓. Recognizing allosteric switching as the cell's default control mechanism is worth more than either example alone.

</details>

## Connections

- **Backward:** the cycle exists to satisfy [1.3](01-03-cell-theory-two-kinds-of-cell.md)'s third claim of cell theory; its control machinery is [2.1](02-01-energy-atp-enzymes.md)'s allosteric regulation used as a timer; the whole thing is expensive and paid for by [2.2](02-02-cellular-respiration.md).
- **Forward:** [2.5](02-05-mitosis-meiosis.md) opens up the M phase and contrasts it with the division that makes gametes; [3.3](03-03-dna-structure-replication.md) explains what S phase actually does at the molecular level.
- **Sideways (medicine):** essentially all classical chemotherapy targets this cycle — spindle poisons stop M phase, antimetabolites block S phase — and its side-effect profile is a direct readout of which healthy tissues divide fastest.
