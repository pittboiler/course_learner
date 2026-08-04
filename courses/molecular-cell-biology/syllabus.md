# Molecular & Cell Biology — Syllabus

> Life Sciences · Tier 1 · ~22 lessons · Prereqs: [general-biology](../general-biology/syllabus.md) · Roadmap id: `molecular-cell-biology`

## Goal

Learn how a cell works as a physical machine: how proteins fold into shapes that do jobs, how membranes and pumps build the electrical and chemical gradients life runs on, how the cell traffics and moves its own parts, how it reads signals and decides to divide, and how it copies, repairs, and expresses its genome. You will be able to reason mechanistically — given a component, predict what breaks when it fails — from the atomic scale of a binding site up to the logic of the cell cycle. This course deliberately skips organismal physiology (see `physiology`) and the detailed enzymology of metabolic pathways (see `biochemistry`); it uses just enough thermodynamics and kinetics to make mechanisms make sense.

## Dangerous Checklist

When you finish, you can:

- [ ] Predict a protein's behavior from its structure — read a fold, locate a binding site, and explain how a point mutation could abolish function
- [ ] Compute a membrane potential from ion gradients using the Nernst and Goldman equations, and say what the number means physically
- [ ] Classify a transport event as passive, primary-active, or secondary-active, and trace where its energy comes from
- [ ] Trace a secreted protein from ribosome to cell surface, naming each compartment and the sorting signal that routes it
- [ ] Explain how motor proteins convert ATP hydrolysis into directed motion, and why cytoskeletal filaments are polarized
- [ ] Diagram a signaling cascade from ligand to cellular response, and identify where amplification and feedback occur
- [ ] Explain how the cell cycle is gated by checkpoints and cyclin–CDK activity, and how loss of that control produces cancer
- [ ] Describe DNA replication at a fork, naming the enzymes and why the two strands are copied differently
- [ ] Match a type of DNA damage to the repair pathway that fixes it, and predict the consequence of losing that pathway
- [ ] Explain how transcription is initiated and regulated, distinguishing prokaryotic operons from eukaryotic combinatorial control
- [ ] Trace a eukaryotic mRNA from primary transcript through splicing, capping, and export to a finished protein
- [ ] Explain how a single genome yields many cell types, using differential gene expression and a worked example of stem-cell fate

## Modules

### Module 1: Molecules, Membranes & Transport

Build the cell's parts list and its border: what macromolecules are shaped like, why membranes separate inside from outside, and how the cell moves things across that border to store energy as gradients.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | Proteins: from sequence to shape | Read the four levels of protein structure and predict folding drivers | primary/secondary/tertiary/quaternary structure, hydrophobic collapse, domains |
| 1.2 | Protein function & binding | Explain function as shape-complementary binding, and how mutations break it | active sites, ligand affinity, conformational change, allostery |
| 1.3 | Nucleic acids as information | Explain how DNA/RNA structure encodes and templates information | base pairing, antiparallel strands, major/minor groove, RNA vs DNA |
| 1.4 | Membranes: the fluid bilayer | Explain why lipids self-assemble into a selective barrier | amphipathic lipids, self-assembly, fluidity, membrane proteins |
| 1.5 | Passive transport & diffusion | Predict which molecules cross freely and which need a channel | permeability, channels, facilitated diffusion, electrochemical gradient |
| 1.6 | Pumps, gradients & the membrane potential | Compute a membrane potential and trace the energy behind active transport | Na⁺/K⁺-ATPase, primary vs secondary active transport, Nernst & Goldman equations |

**Boss problem 1:** A cell sits in seawater-like fluid with given intracellular/extracellular Na⁺, K⁺, and Cl⁻ concentrations. (a) Compute the Nernst potential for each ion. (b) Given relative permeabilities, use the Goldman equation to find the resting potential and say which ion dominates and why. (c) A toxin blocks the Na⁺/K⁺-ATPase. Predict, step by step, what happens to the gradients, the resting potential, and the cell's volume over the next minutes to hours — and explain the causal chain.

### Module 2: The Cytoskeleton & Cell Signaling

The cell as a dynamic, responsive machine: the polymer scaffolding that gives it shape and motion, and the molecular circuitry that lets it sense and react to its environment.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | The cytoskeleton: three filament systems | Distinguish actin, microtubules, and intermediate filaments by structure and role | polarity, dynamic instability, treadmilling, mechanical roles |
| 2.2 | Motor proteins & cell motility | Explain how motors turn ATP into directed movement along filaments | myosin, kinesin, dynein, power stroke, cargo transport |
| 2.3 | The endomembrane system & protein trafficking | Trace a protein through the secretory pathway and name its sorting signals | ER, Golgi, signal sequences, vesicle budding & fusion, targeting |
| 2.4 | Signaling I: receptors & ligands | Classify receptor types and explain signal reception at the membrane | GPCRs, receptor tyrosine kinases, ligand binding, receptor activation |
| 2.5 | Signaling II: second messengers & amplification | Trace a cascade from receptor to response and locate amplification | cAMP, Ca²⁺, kinase cascades, signal amplification |
| 2.6 | Signaling III: circuits, feedback & integration | Explain how cells integrate multiple signals with feedback and crosstalk | MAPK cascade, negative/positive feedback, signal integration, adaptation |

**Boss problem 2:** A growth factor binds a receptor tyrosine kinase and triggers a MAPK cascade that ends in a transcriptional response, while the cell simultaneously reorganizes its actin to migrate toward the source. (a) Diagram the full path from ligand binding to (i) gene expression and (ii) cytoskeletal change, naming each relay. (b) Identify two points where the signal is amplified and estimate the fold-amplification qualitatively. (c) A mutation locks the downstream kinase in its active state independent of ligand. Predict the effect on the cell's behavior and connect it to the next module.

### Module 3: The Cell Cycle & Genome Maintenance

How a cell decides to divide, copies its genome faithfully, guards against damage, and what happens — cancer — when that control fails. This module deliberately bridges into cancer as the failure mode that motivates every checkpoint.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | The cell cycle & its engine | Explain the phases and how cyclin–CDK activity drives progression | G1/S/G2/M, cyclins, CDKs, cyclin degradation |
| 3.2 | Checkpoints, apoptosis & cancer | Explain how checkpoints gate the cycle and how their loss causes cancer | DNA-damage checkpoint, p53, apoptosis, oncogenes & tumor suppressors |
| 3.3 | DNA replication at the fork | Name the enzymes at a replication fork and why the strands differ | helicase, polymerase, leading/lagging strands, Okazaki fragments, semiconservative replication |
| 3.4 | DNA repair | Match a lesion to its repair pathway and predict loss-of-repair consequences | mismatch, base/nucleotide excision, double-strand break repair, mutation rate |
| 3.5 | Recombination | Explain homologous recombination and its roles in repair and diversity | strand exchange, crossing over, HR vs NHEJ, genetic diversity |

**Boss problem 3:** A cell acquires a mutation that inactivates its mismatch-repair system and, later, a mutation that disables a G1/S checkpoint. (a) Explain what each mutation does in isolation to mutation rate and cycle control. (b) Argue why the *combination* is far more dangerous than either alone, connecting elevated mutation rate to the accumulation of driver mutations. (c) A drug forces damaged cells into apoptosis by mimicking active p53. Explain why this could selectively kill the cancerous cells, and name one way the tumor could resist.

### Module 4: Gene Expression — Transcription to Translation

How the genome is read out into proteins, and how that read-out is controlled to make one genome build many cell types. The payoff module: it ties structure (M1), signaling (M2), and cell-cycle control (M3) into the flow of genetic information.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Transcription: reading DNA into RNA | Explain how RNA polymerase initiates, elongates, and terminates | promoters, RNA polymerase, template strand, initiation/elongation/termination |
| 4.2 | Regulating transcription | Contrast prokaryotic operons with eukaryotic combinatorial control | operons, transcription factors, enhancers, chromatin & accessibility |
| 4.3 | RNA processing | Trace a primary transcript through the modifications that make a mature mRNA | 5′ cap, splicing, polyadenylation, alternative splicing, export |
| 4.4 | Translation: the genetic code in action | Explain how the ribosome decodes mRNA into protein | codons, tRNA, ribosome, reading frame, start/stop |
| 4.5 | Stem cells & development: one genome, many cells | Explain how differential expression yields distinct cell types | differentiation, potency, master regulators, gene-regulatory networks |

**Boss problem 4:** A single alternative-splicing choice in a developing cell determines whether it becomes a neuron or a skin cell. (a) Trace the information flow from the relevant gene through transcription, splicing, and translation to the two possible protein outcomes. (b) Explain how an upstream signal (tie back to Module 2) could bias the splicing decision. (c) Given that both cell types carry identical DNA, explain in mechanistic terms — using differential expression and chromatin state — how the choice is made stable and heritable through subsequent divisions.

## Sources of truth

- Alberts et al., *Molecular Biology of the Cell* — the spine for mechanism, terminology, and rigor level.
- Lodish et al., *Molecular Cell Biology* — for signaling and experimental framing.
- For quantitative membrane/transport treatment (Nernst, Goldman), the conventions follow standard biophysics usage as in Alberts' quantitative appendices; numbers and constants are defined at first use in each lesson.
