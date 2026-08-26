# Molecular & Cell Biology — Syllabus

> Life Sciences · Tier 1 · 17 lessons · Prereqs: [general-biology](../general-biology/syllabus.md) · Roadmap id: `molecular-cell-biology`

## Goal

Learn how a cell works as a machine that builds, moves, decides, divides, and repairs itself. You will be able to reason mechanistically — given a component, predict what breaks when it fails — from a motor stepping along a filament, through a signalling cascade that turns one ligand into a transcriptional program, to the switches that make cell division a one-way street and the failures of those switches that produce cancer.

**Scope discipline.** This course owns the *cell-biological* layer and deliberately does not re-derive material that other courses in this library own:

| Already taught elsewhere | Owner |
|---|---|
| Protein structure, folding, enzymes, allostery | [biochemistry](../biochemistry/syllabus.md) 1.3–1.4, 2.1–2.4 |
| Bilayer physics, transport energetics, $\Delta G$ of pumping | [biochemistry](../biochemistry/syllabus.md) 4.1, 4.3 · [biophysics](../biophysics/syllabus.md) 3.4–3.5 |
| Nernst, Goldman, resting and action potentials | [biophysics](../biophysics/syllabus.md) 4.4–4.5 |
| Motor stepping as a Brownian ratchet (the *physics* of motors) | [biophysics](../biophysics/syllabus.md) 4.3 |
| Nucleic-acid structure, the genetic code, semiconservative replication | [biochemistry](../biochemistry/syllabus.md) 4.4–4.5 · [general-biology](../general-biology/syllabus.md) 3.3–3.4 |
| Cell-cycle phases, mitosis and meiosis, organelle inventory | [general-biology](../general-biology/syllabus.md) 1.4, 2.4–2.5 |
| Mutation classes, lesion-specific DNA repair chemistry, operons, epigenetic inheritance | [genetics](../genetics/syllabus.md) 3.2–3.5 |

Those facts are *used* freely here; every one of them is listed on the [reference card](reference.md) with a pointer to the course that derives it.

## Dangerous Checklist

When you finish, you can:

- [ ] Explain why the cytoplasm behaves like a crowded, partly-condensed gel rather than a dilute solution, and predict what crowding does to a binding equilibrium
- [ ] Distinguish actin, microtubules, and intermediate filaments by polarity, dynamics, and mechanical job — and predict the phenotype of a drug that blocks each
- [ ] Explain how track polarity plus motor identity determines the direction cargo moves, and diagnose a trafficking disease from a missing adaptor
- [ ] Trace a secreted protein from ribosome to cell surface, naming every compartment, coat, and sorting signal on the way
- [ ] Diagram a signalling cascade from ligand to response, locate the amplification steps, and estimate the fold-amplification
- [ ] Explain how phosphorylation, feedback, and scaffolds turn a graded input into a switch-like output
- [ ] Explain why cell-cycle transitions are irreversible, in terms of cyclin–CDK activity and targeted protein destruction
- [ ] Trace the DNA-damage response from lesion to decision (arrest, senescence, or apoptosis) and say where p53 sits in it
- [ ] Explain why homologous recombination is available only in part of the cycle, and why that fact underlies BRCA-targeted cancer therapy
- [ ] Argue why cancer requires several mutations in specific categories, and distinguish drivers from passengers
- [ ] Explain how chromatin state, enhancers, splicing, and protein turnover each set the abundance of one protein
- [ ] Explain how one genome produces many stable cell identities, and what reprogramming demonstrates about that stability

## Modules

### Module 1: The Cell as a Built, Moving Machine

The cell's interior is neither a bag of soup nor a rigid solid. This module builds the physical scaffolding — the crowded, self-organizing medium, the polymer skeleton that gives it shape, the motors that haul things along it, and the membrane-traffic system that delivers.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The crowded cell & biomolecular condensates | Explain why cytoplasm is not a test tube, and how membraneless organelles form | macromolecular crowding, excluded volume, weak multivalent interaction, liquid–liquid phase separation, nucleolus & stress granules |
| 1.2 | The cytoskeleton: three filament systems | Distinguish actin, microtubules, and intermediate filaments by polarity and dynamics | polarity ($+$/$-$ ends), nucleation, critical concentration, treadmilling, dynamic instability, mechanical roles |
| 1.3 | Motors & cargo logistics | Predict which way a cargo moves from track polarity and motor identity | kinesin/dynein/myosin directionality, cargo adaptors, processivity, the mitotic spindle as a motor problem |
| 1.4 | The endomembrane system & protein trafficking | Trace a protein through the secretory pathway and name each sorting signal | signal sequence, co-translational translocation, COPII/COPI/clathrin coats, SNARE fusion, glycosylation, lysosomal targeting |

**Boss problem 1:** A cultured neuron is treated with a drug that severs microtubules, and separately with one that blocks dynein. (a) For each treatment, predict what happens to a vesicle carrying a synaptic protein that was budding from the Golgi, and say precisely which step fails. (b) The neuron's axon is 1 mm long. Estimate, using diffusion alone, how long a 50 kDa protein would need to reach the tip ($D \approx 20\ \mu\mathrm{m}^2/\mathrm{s}$), and compare with a kinesin walking at $1\ \mu\mathrm{m/s}$ — then state the general rule this comparison establishes about when cells must use motors instead of diffusion. (c) A patient has a mutation in the adaptor that links a specific cargo to kinesin, while kinesin itself is normal. Explain why the defect is cargo-selective rather than global.

### Module 2: Signalling — How a Cell Decides

The molecular circuitry that turns an external molecule into an internal decision. Four lessons, because signalling is the part of cell biology that behaves most like engineering: reception, transduction, amplification, and control.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Receptors: reading the outside world | Classify a receptor and predict its response from ligand affinity and occupancy | GPCRs, receptor tyrosine kinases, ion-channel-coupled and nuclear receptors, $K_d$ and occupancy, receptor number & sensitivity |
| 2.2 | Second messengers & amplification | Trace a cascade from receptor to response and compute its amplification | heterotrimeric G proteins, cAMP–PKA, PLC–IP$_3$–DAG–Ca$^{2+}$, catalytic amplification, signal termination |
| 2.3 | Kinase cascades & the phosphorylation switch | Explain why cells relay signals with kinases and how a cascade sharpens a response | RTK → Ras → Raf → MEK → ERK, phosphorylation as a reversible switch, scaffolds, ultrasensitivity & the Hill coefficient |
| 2.4 | Circuits: feedback, adaptation & crosstalk | Predict a circuit's dynamic behaviour from its feedback wiring | negative feedback & adaptation, positive feedback & bistability, feedforward motifs, crosstalk, receptor desensitization |

**Boss problem 2:** A growth factor binds an RTK; the cell responds by transcribing new genes and by crawling toward the source. (a) Diagram the path from ligand to (i) transcription and (ii) actin remodelling, naming each relay and noting where the two branches diverge. (b) One ligand molecule ultimately produces roughly $10^{5}$ phosphorylated ERK molecules. Identify the two catalytic steps that supply most of that gain and estimate the fold-amplification at each. (c) A mutation locks Raf in its active conformation. Predict the effect on ERK output, on the negative feedback that normally limits it, and on the cell's division behaviour — then say which Module 3 lesson picks the story up.

### Module 3: Division, Damage & Cancer

How a cell commits to dividing, how it detects that its genome is broken, how it chooses a repair strategy, and what happens when those controls fail. Cancer is not an appendix here — it is the failure mode that explains why every switch is built the way it is.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The cell-cycle engine & why transitions are irreversible | Explain cycle progression as cyclin–CDK activity made one-way by destruction | cyclin–CDK pairs, CDK inhibitors, SCF and APC/C ubiquitin ligases, the restriction point as a bistable switch |
| 3.2 | The DNA-damage response | Trace a lesion to a cellular decision and place p53 in the pathway | damage sensors, ATM/ATR, checkpoint kinases, p53 stabilization, arrest vs. senescence vs. apoptosis |
| 3.3 | Double-strand breaks: HR vs. NHEJ | Explain why the repair choice depends on cell-cycle phase, and its clinical consequence | end resection, homologous recombination, non-homologous end joining, BRCA1/2, PARP inhibitors & synthetic lethality |
| 3.4 | Cancer as a failure of control | Argue why cancer needs several specific mutations, and read a tumour genome | oncogene vs. tumour suppressor, two-hit hypothesis, driver vs. passenger, hallmarks, targeted therapy & resistance |

**Boss problem 3:** A cell lineage loses mismatch repair, then later loses one *TP53* allele and, later still, the second. (a) Say what each event does on its own — to mutation rate, and to the damage response. (b) Argue why the *order* matters and why the combination is far worse than the sum, connecting elevated mutation rate to the acquisition of driver mutations. (c) The resulting tumour is also *BRCA2*-deficient. Explain, in terms of pathway choice from 3.3, why a PARP inhibitor should selectively kill the tumour cells, and name one mechanism by which the tumour could become resistant.

### Module 4: Expression Control & Cell Identity

The payoff module. One genome, one set of instructions, and a hundred stable cell types — because expression is controlled at every layer from chromatin accessibility down to how fast the finished protein is destroyed.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Chromatin: packaging as regulation | Explain how DNA packaging sets which genes are even readable | nucleosome, histone tails & modifications, writers/readers/erasers, chromatin remodellers, euchromatin vs. heterochromatin |
| 4.2 | The eukaryotic transcription machine | Assemble the machinery at a promoter and explain what an enhancer physically does | RNA Pol II, general transcription factors, Mediator, enhancer–promoter looping, transcriptional bursting |
| 4.3 | RNA processing & the mRNA life cycle | Trace a transcript from nascent RNA to a translated, then degraded, message | 5′ cap, spliceosome & splicing, polyadenylation, export, alternative splicing, mRNA half-life, miRNA, nonsense-mediated decay |
| 4.4 | Protein quality control & degradation | Explain how the cell decides that a protein should be destroyed | chaperone triage, ubiquitin code, 26S proteasome, ER stress & the unfolded-protein response, autophagy, protein half-life |
| 4.5 | Stem cells, differentiation & reprogramming | Explain how one genome produces many stable identities, and what makes them stable | potency, master regulators, gene-regulatory networks, positive-feedback lock-in, Waddington landscape, iPSC reprogramming |

**Boss problem 4:** A progenitor cell must choose between a neuronal and an epidermal fate, and the choice is executed partly through an alternative-splicing switch. (a) Trace the information flow from an upstream signal (tie back to Module 2) through chromatin state, transcription, splicing, translation, and protein turnover, naming the control point at each layer. (b) Measured mRNA for the fate gene rises 4-fold while its protein rises 40-fold. Identify at least two layers that could supply the extra 10-fold and say how you would test which. (c) Both daughter cell types carry identical DNA. Explain mechanistically what makes each identity *stable* across subsequent divisions — and what Yamanaka's four factors demonstrate about how stable it really is.

## Sources of truth

- Alberts et al., *Molecular Biology of the Cell* — the spine for mechanism, terminology, and rigor level.
- Lodish et al., *Molecular Cell Biology* — for signalling and experimental framing.
- Weinberg, *The Biology of Cancer* — for Module 3's oncogene/tumour-suppressor logic.
- Physical numbers (diffusion coefficients, copy numbers, rates) follow Milo & Phillips, *Cell Biology by the Numbers*; constants are defined at first use.

> Note (2026-08-26): trimmed from a 22-lesson draft to 17. Seven lessons duplicated `biochemistry`, `biophysics`, `general-biology`, or `genetics` and were removed; the module structure was rebuilt around what this course uniquely owns. DNA repair *chemistry* now lives in [genetics 3.3](../genetics/lessons/03-03-dna-repair.md); this course owns the *decision* layer (3.2) and the double-strand-break pathway choice (3.3). Gene-regulatory *logic* lives in [genetics 3.4–3.5](../genetics/syllabus.md); this course owns the *machinery* (4.1–4.2).
