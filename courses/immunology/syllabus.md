# Immunology — Syllabus

> Life Sciences · Tier 2 · ~20 lessons · Prereqs: [molecular-cell-biology](../molecular-cell-biology/syllabus.md) · Roadmap id: `immunology`

## Goal

Understand the immune system as a layered, self-correcting defense: fast, hard-wired innate barriers that buy time, and a slow but exquisitely specific adaptive system that learns each pathogen and remembers it. You will be able to reason mechanistically from a molecular event to a physiological outcome — given a pathogen and where it lives (in your blood, inside your cells), predict which cells recognize it, how they get activated, what they do, and what goes wrong when the system misfires as autoimmunity, allergy, or immunodeficiency. The through-line is the central puzzle of immunology: how a genome with ~20,000 genes builds a repertoire of billions of distinct receptors, and how the body then edits that repertoire so it attacks pathogens but not you. This course deliberately skips clinical-immunology protocol depth (assay pipelines, dosing) and advanced systems-immunology modeling; it uses just enough combinatorics and cascade logic to make the mechanisms quantitative.

## Dangerous Checklist

When you finish, you can:

- [ ] Classify an immune cell by lineage and job, and place each in the innate/adaptive division of labor
- [ ] Trace a naive lymphocyte through the lymphoid organs and explain where and why an immune response is actually staged
- [ ] Explain how pattern-recognition receptors distinguish "infection" from "self" without ever having seen the pathogen before
- [ ] Walk the complement cascade from trigger to membrane-attack complex, and name what each pathway opsonizes, recruits, or lyses
- [ ] Read an antibody's structure and predict how each region maps to a function (binding vs. effector)
- [ ] Explain why a T cell can only see a peptide displayed on MHC, and predict which MHC class presents a given antigen
- [ ] Estimate the combinatorial size of the receptor repertoire from gene-segment counts, and identify which mechanisms add the most diversity
- [ ] Diagram B-cell activation through a germinal center, explaining how affinity maturation and class switching upgrade the antibody
- [ ] Contrast helper T-cell subsets and predict which one a given pathogen elicits and why
- [ ] Explain how a cytotoxic T cell finds and kills exactly the infected cells while sparing neighbors
- [ ] Explain how immunological memory makes a second exposure faster and stronger, and use that to reason about vaccine design
- [ ] Identify where self-tolerance is enforced, and explain a specific autoimmune, allergic, or immunodeficiency disease as a failure of a named mechanism

## Modules

### Module 1: Architecture & Innate Defense

Build the cast and the battlefield, then the fast layer. Innate immunity is the response that is ready before you are infected — hard-wired, non-specific, and the trigger that decides whether the slow adaptive system ever gets called.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 1.1 | The immune problem & the cellular cast | Frame defense as a layered problem and classify the leukocytes by lineage | innate vs. adaptive, myeloid/lymphoid lineages, self vs. non-self, the hematopoietic tree |
| 1.2 | Lymphoid organs & cell traffic | Trace where immune cells are made, mature, and meet antigen | bone marrow, thymus, lymph nodes, spleen, lymphatics, homing & recirculation |
| 1.3 | Barriers & the sensing of danger | Explain how the body detects a pathogen it has never seen | physical/chemical barriers, PAMPs & DAMPs, pattern-recognition receptors, Toll-like receptors |
| 1.4 | Inflammation & innate effector cells | Trace the inflammatory response from breach to recruited killers | phagocytosis, neutrophils & macrophages, NK cells, cytokines, the cardinal signs |
| 1.5 | The complement system | Walk the three activation pathways to a shared lytic and opsonizing output | classical/lectin/alternative pathways, C3 convertase, opsonization, membrane-attack complex |

**Boss problem 1:** A splinter drives *Staphylococcus aureus* into the dermis. (a) Minute by minute, trace the innate response: which barrier failed, which receptors first sense the bacterium, which cytokines are released, and which cells are recruited in what order. (b) The alternative complement pathway fires on the bacterial surface — walk it from spontaneous C3 tickover to MAC formation, and name what opsonization and C3a/C5a each contribute. (c) The patient has a genetic deficiency in the C5–C9 components. Predict which class of pathogen they will fail to control and explain mechanistically why complement's other outputs cannot fully compensate.

### Module 2: Antigen Recognition

The molecular basis of specificity: the receptors that let the adaptive system see a single molecular feature, and the display system that forces T cells to look inside cells. This module is pure structure-to-function, building directly on protein folding and binding from `molecular-cell-biology`.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 2.1 | Antigens & antibody structure | Read an antibody and map each region to binding or effector function | epitopes, the immunoglobulin fold, heavy/light chains, Fab vs. Fc, isotypes |
| 2.2 | The B-cell receptor: affinity & avidity | Quantify how tightly and how selectively a receptor grips its antigen | membrane Ig, affinity vs. avidity, cross-linking, Igα/Igβ signaling |
| 2.3 | The T-cell receptor | Explain why T cells see processed peptides, not free antigen | TCR α/β structure, MHC restriction, CD4 vs. CD8 coreceptors |
| 2.4 | MHC molecules | Contrast the two display platforms and explain their extreme polymorphism | MHC class I vs. II, the peptide-binding groove, codominance, population-level polymorphism |
| 2.5 | Antigen processing & presentation | Predict which pathway presents a given antigen to which T cell | cytosolic/proteasome/TAP → class I, endosomal → class II, cross-presentation |

**Boss problem 2:** Cell A is infected by an influenza virus replicating in its cytosol; nearby, a macrophage (Cell B) has phagocytosed free viral particles from the extracellular fluid. (a) For each cell, trace how a viral protein becomes a peptide displayed on the surface, naming the compartment, the class of MHC, and the machinery involved. (b) Predict which T-cell subset (CD4⁺ or CD8⁺) each cell activates, and justify it from the MHC class. (c) A drug blocks the TAP transporter. Which presentation pathway fails, which infected cells now become invisible to the immune system, and what does that predict about the virus's incentive to evolve TAP inhibitors?

### Module 3: Generating Diversity & the Adaptive Response

The heart of the course: how the genome manufactures a near-infinite receptor repertoire from a finite gene set, and how, once a lymphocyte finds its antigen, the humoral response is activated and upgraded. The diversity story is a combinatorics story — it links directly to `probability-theory`.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 3.1 | V(D)J recombination: the diversity engine | Estimate the repertoire size and rank the sources of diversity | gene segments, RAG recombinase, combinatorial + junctional diversity, allelic exclusion |
| 3.2 | Clonal selection & B-cell activation | Explain how one antigen selects and expands its matching lymphocytes | clonal selection, T-dependent vs. T-independent antigens, the immunological synapse |
| 3.3 | Germinal centers: affinity maturation & class switching | Explain how the antibody response gets better and changes its job | somatic hypermutation, AID, selection for affinity, class-switch recombination |
| 3.4 | Antibody effector functions | Map an antibody isotype to what it actually does to a pathogen | neutralization, opsonization, complement fixation, ADCC, isotype specialization |
| 3.5 | Helper T cells & subset polarization | Predict which helper subset a pathogen elicits and what it orchestrates | two-signal activation, costimulation, Th1/Th2/Th17/Tfh, cytokine polarization |

**Boss problem 3:** (a) Given a species with 40 V, 25 D, and 6 J heavy-chain segments and 40 V, 5 J light-chain segments, estimate the combinatorial receptor diversity from segment joining alone, then explain qualitatively why the true repertoire is orders of magnitude larger — and which mechanism dominates the gap. (b) A T-dependent protein antigen enters a lymph node. Trace the B cell from first antigen encounter through germinal-center affinity maturation to a class-switched, high-affinity plasma cell, naming the helper subset that licenses each step. (c) The patient has a mutation abolishing AID activity. Predict, specifically, which two features of their antibody response are lost and which is preserved, and connect this to a real hyper-IgM phenotype.

### Module 4: Cellular Immunity, Memory & Immune Pathology

The killing arm, the memory that makes vaccines possible, and the failure modes. This module closes the loop: tolerance is the mechanism that keeps every powerful tool from the earlier modules pointed outward, and its breakdown is the story of immune disease.

| # | Lesson | Goal (one line) | Key concepts |
|---|---|---|---|
| 4.1 | Cytotoxic T cells & cell-mediated killing | Explain how a CTL finds and kills only the infected cells | CD8⁺ CTLs, perforin/granzyme, Fas–FasL, serial killing, MHC-I surveillance |
| 4.2 | Immunological memory & the basis of vaccines | Explain why a second exposure is faster and stronger, and design around it | memory B/T cells, primary vs. secondary response, adjuvants, correlates of protection |
| 4.3 | Self-tolerance & immune regulation | Locate where the repertoire is edited to spare the self | central tolerance (thymic/marrow selection), peripheral tolerance, anergy, regulatory T cells |
| 4.4 | Autoimmunity & hypersensitivity | Explain a specific disease as a named tolerance or effector failure | autoimmunity mechanisms, the four hypersensitivity types, allergy & IgE/mast cells |
| 4.5 | Immunodeficiency, tumor & transplant immunity | Reason about the system by its failures and its hardest targets | primary vs. acquired immunodeficiency, immune evasion, tumor surveillance, alloreactivity & rejection |

**Boss problem 4:** A vaccine developer must design protection against a virus that infects and replicates inside epithelial cells. (a) Argue from mechanism whether neutralizing antibody alone can protect, or whether cytotoxic T-cell memory is also required — and explain how each arm would act on the virus at a different stage of its life cycle. (b) Explain what an adjuvant does in terms of the innate-signaling concepts from Module 1, and why a purified protein antigen without one produces weak memory. (c) A candidate vaccine unexpectedly triggers an autoimmune response cross-reacting with a host protein. Name the tolerance mechanism that should have prevented this, explain why molecular mimicry can defeat it, and classify the resulting damage by hypersensitivity type.

## Sources of truth

- Murphy & Weaver, *Janeway's Immunobiology* — the spine for mechanism, terminology, and the logic of immune defense.
- Abbas, Lichtman & Pillai, *Cellular and Molecular Immunology* — for effector-function detail and clinical framing.
- Combinatorial arguments for repertoire diversity follow standard counting conventions (see `probability-theory`); protein-structure and signaling background follows `molecular-cell-biology`. All counts, constants, and abbreviations are defined at first use in each lesson.
