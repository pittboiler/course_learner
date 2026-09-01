# Immunology · Reference Card

> Open book. This card is meant to be open while you work — including during
> quizzes. Nothing here is something you're expected to recall cold.

One system, two strategies: a few dozen germline receptors that recognize what a
microbe cannot afford to stop being, and a somatically generated repertoire of
order $10^{11}$ that manufactures specificity on demand and must then be edited
so it does not attack you. Almost every hard part of this course is an
abbreviation you half-remember or a threshold you half-remember, so the
**abbreviations table is the first thing on this card** and the numeric tables
are the second. Use it for the acronyms, for the isotype/MHC/subset/hypersensitivity
lookups, and for the handful of formulas — repertoire combinatorics, avidity,
proofreading, complement's $R$, the germinal center's $i\sigma$, the CTL
threshold $E^{*}$ — that everything quantitative in the course reduces to.

## Scope discipline

`immunology` owns **immune defense end to end**: innate sensing and barriers,
complement, inflammation, antigen recognition and presentation, repertoire
generation, the adaptive response, effector function, memory, tolerance and
immune pathology.

It **cites and does not re-derive**:

- equilibrium binding, $K_d$, occupancy and diffusion →
  [`biophysics`](../biophysics/syllabus.md);
- the immunoglobulin fold and protein structure →
  [`biochemistry`](../biochemistry/syllabus.md);
- receptors, second messengers, kinase cascades, endomembrane trafficking and
  the proteasome → [`molecular-cell-biology`](../molecular-cell-biology/syllabus.md);
- double-strand-break repair and NHEJ, mutation and DNA repair chemistry →
  [`genetics`](../genetics/syllabus.md) and `molecular-cell-biology`;
- selection, fitness, balancing selection and heterozygote advantage →
  [`evolution-ecology`](../evolution-ecology/syllabus.md);
- combinatorial counting and the Poisson/binomial machinery →
  [`combinatorics`](../combinatorics/syllabus.md) and
  [`prob-stat-refresher`](../prob-stat-refresher/syllabus.md).

**A ceded topic is used freely here; it is just cited to its owner.** The
"Assumed, not taught here" table at the bottom is the complete list.

## Notation

Two vocabularies collide on this card — **abbreviations** (the course's real
barrier) and **symbols** (few, but heavily overloaded). Abbreviations first.

### Abbreviations

| Abbrev. | Means | Where |
|---|---|---|
| ADCC | antibody-dependent cellular cytotoxicity — NK cell reads bound IgG through FcγRIIIA and kills | [3.4](lessons/03-04-antibody-effector-functions.md) |
| AID | activation-induced cytidine deaminase — deaminates C to U; drives **both** SHM and CSR | [3.3](lessons/03-03-germinal-centers-affinity-maturation.md) |
| AIRE | autoimmune regulator — forces mTECs to transcribe tissue-restricted antigens | [4.3](lessons/04-03-self-tolerance-regulation.md) |
| aHUS | atypical hemolytic uremic syndrome — factor H that cannot dock on host surfaces | [1.5](lessons/01-05-complement-system.md) |
| APC | antigen-presenting cell; "professional" means it also carries B7 and signal 3 | [3.5](lessons/03-05-helper-t-cells-polarization.md) |
| APS-1 | autoimmune polyendocrine syndrome type 1 — the AIRE-null phenotype | [4.3](lessons/04-03-self-tolerance-regulation.md) |
| B7 | CD80/CD86 on an APC; ligand for CD28 (activating) and CTLA-4 (inhibitory) | [3.5](lessons/03-05-helper-t-cells-polarization.md) |
| BCR | B-cell receptor — membrane immunoglobulin plus the Igα/Igβ signalling pair | [2.2](lessons/02-02-bcr-affinity-avidity.md) |
| Bcl-6 / Blimp-1 | master TFs for the germinal-center and plasma-cell fates respectively | [3.2](lessons/03-02-clonal-selection-b-cell-activation.md) |
| BTK | Bruton tyrosine kinase, downstream of Igα/Igβ; lost in XLA | [4.5](lessons/04-05-immunodeficiency-tumor-transplant.md) |
| CAR-T | chimeric antigen receptor T cell — an antibody Fv wired to CD3ζ plus costimulation | [4.5](lessons/04-05-immunodeficiency-tumor-transplant.md) |
| CDR | complementarity-determining region — the three hypervariable loops per V domain | [2.1](lessons/02-01-antigens-antibody-structure.md) |
| CGD | chronic granulomatous disease — NADPH oxidase failure | [4.5](lessons/04-05-immunodeficiency-tumor-transplant.md) |
| CLIP | class-II-associated invariant chain peptide — the Ii remnant in the class II groove | [2.5](lessons/02-05-antigen-processing-presentation.md) |
| CLP / CMP | common lymphoid / common myeloid progenitor — the first branch below the HSC | [1.1](lessons/01-01-immune-problem-cellular-cast.md) |
| CR1, CR2 | complement receptor 1 (C3b, immune-complex ferrying) and 2 (CD21, binds C3d) | [1.5](lessons/01-05-complement-system.md) |
| CSR | class-switch recombination — swaps the heavy-chain constant region, V exon untouched | [3.3](lessons/03-03-germinal-centers-affinity-maturation.md) |
| CTL | cytotoxic T lymphocyte — CD8, kills MHC-I-displaying targets | [4.1](lessons/04-01-cytotoxic-t-cells.md) |
| CTLA-4 | outcompetes CD28 for B7 and strips it by trans-endocytosis; a Treg tool and a checkpoint | [4.3](lessons/04-03-self-tolerance-regulation.md) |
| DAF | decay-accelerating factor (CD55), GPI-anchored; lost in PNH | [1.5](lessons/01-05-complement-system.md) |
| DAMP | damage-associated molecular pattern — host molecules in the wrong compartment (ATP, urate, mtDNA, HMGB1) | [1.3](lessons/01-03-barriers-sensing-danger.md) |
| DC, cDC1 | dendritic cell; conventional type 1 DC, the cross-presenting subset | [2.5](lessons/02-05-antigen-processing-presentation.md) |
| DRiP | defective ribosomal product — misfolded/truncated nascent protein; the main class I substrate | [2.5](lessons/02-05-antigen-processing-presentation.md) |
| ERAP1 | ER aminopeptidase — trims the peptide N-terminus to 8–10 residues | [2.5](lessons/02-05-antigen-processing-presentation.md) |
| Fab, Fc | fragment antigen-binding (decides *what*) and fragment crystallizable (decides *what next*) | [2.1](lessons/02-01-antigens-antibody-structure.md) |
| FcRn | neonatal Fc receptor — rescues IgG from catabolism and carries it across the placenta | [3.4](lessons/03-04-antibody-effector-functions.md) |
| FcεRI, FcγR, FcαRI | high-affinity IgE receptor (mast cells); IgG receptors (I/IIA/IIB/IIIA/IIIB); IgA receptor | [3.4](lessons/03-04-antibody-effector-functions.md) |
| FDC | follicular dendritic cell — holds intact antigen on CR1/CR2 in the light zone | [3.3](lessons/03-03-germinal-centers-affinity-maturation.md) |
| FoxP3 | master TF of regulatory T cells; loss gives IPEX | [4.3](lessons/04-03-self-tolerance-regulation.md) |
| GATA3 / T-bet / RORγt | master TFs of Th2 / Th1 / Th17 | [3.5](lessons/03-05-helper-t-cells-polarization.md) |
| GVHD | graft-versus-host disease — donor T cells reading recipient minor H antigens | [4.5](lessons/04-05-immunodeficiency-tumor-transplant.md) |
| HEV | high endothelial venule — where about 90 percent of lymphocytes enter a node, from blood | [1.2](lessons/01-02-lymphoid-organs-cell-traffic.md) |
| HIGM | hyper-IgM syndrome — CD40L (X-linked) or AID (autosomal recessive) | [3.3](lessons/03-03-germinal-centers-affinity-maturation.md) |
| HLA | human leukocyte antigen — the human MHC loci (A, B, C; DP, DQ, DR) | [2.4](lessons/02-04-mhc-molecules.md) |
| HLA-DM / HLA-DO | endosomal peptide editor that releases CLIP; and its dampener | [2.5](lessons/02-05-antigen-processing-presentation.md) |
| HLA-E | non-classical class I displaying leader peptides; read by NKG2A | [2.4](lessons/02-04-mhc-molecules.md) |
| HSC | hematopoietic stem cell | [1.1](lessons/01-01-immune-problem-cellular-cast.md) |
| ICAM-1, VCAM-1, MAdCAM-1, PNAd | endothelial ligands for LFA-1, VLA-4, gut $\alpha_4\beta_7$, and L-selectin | [1.2](lessons/01-02-lymphoid-organs-cell-traffic.md) |
| Ig | immunoglobulin; isotypes IgM, IgG (1–4), IgA, IgE, IgD | [2.1](lessons/02-01-antigens-antibody-structure.md) |
| Ii | invariant chain (CD74) — plugs the class II groove in the ER and routes it to the endosome | [2.5](lessons/02-05-antigen-processing-presentation.md) |
| Igα/Igβ | CD79a/CD79b — the ITAM-bearing signalling pair beside membrane Ig | [2.2](lessons/02-02-bcr-affinity-avidity.md) |
| IPEX | immune dysregulation, polyendocrinopathy, enteropathy, X-linked — FoxP3 loss | [4.4](lessons/04-04-autoimmunity-hypersensitivity.md) |
| ITAM / ITIM | immunoreceptor tyrosine-based **activation** / **inhibitory** motif | [2.2](lessons/02-02-bcr-affinity-avidity.md) · [3.4](lessons/03-04-antibody-effector-functions.md) |
| KIR | killer immunoglobulin-like receptor — NK inhibitory receptors reading MHC-I | [1.4](lessons/01-04-inflammation-innate-effectors.md) |
| LAD | leukocyte adhesion deficiency — CD18 ($\beta_2$ integrin); infection with **no pus** | [4.5](lessons/04-05-immunodeficiency-tumor-transplant.md) |
| LFA-1, VLA-4 | leukocyte integrins ($\alpha_L\beta_2$, $\alpha_4\beta_1$) — the arrest step | [1.2](lessons/01-02-lymphoid-organs-cell-traffic.md) |
| LPS | lipopolysaccharide — the canonical PAMP, sensed by TLR4 with MD-2/CD14 | [1.3](lessons/01-03-barriers-sensing-danger.md) |
| MAC | **membrane-attack complex**, C5b–C9 (not "macrophage") | [1.5](lessons/01-05-complement-system.md) |
| MASP | MBL-associated serine protease — the lectin pathway's C1r/C1s equivalent | [1.5](lessons/01-05-complement-system.md) |
| MBL | mannose-binding lectin — a soluble PRR that triggers complement | [1.5](lessons/01-05-complement-system.md) |
| MHC | major histocompatibility complex — class I and class II peptide-display platforms | [2.4](lessons/02-04-mhc-molecules.md) |
| MICA/MICB | stress-induced ligands for the activating NK receptor NKG2D | [1.4](lessons/01-04-inflammation-innate-effectors.md) |
| MIIC | the MHC class II loading compartment (acidified late endosome) | [2.5](lessons/02-05-antigen-processing-presentation.md) |
| MPO | myeloperoxidase — makes HOCl from $\text{H}_2\text{O}_2$ in the phagosome | [1.4](lessons/01-04-inflammation-innate-effectors.md) |
| mTEC | medullary thymic epithelial cell — the AIRE-expressing cell | [4.3](lessons/04-03-self-tolerance-regulation.md) |
| MTOC | microtubule-organizing centre (centrosome) — docks at the CTL synapse to aim delivery | [4.1](lessons/04-01-cytotoxic-t-cells.md) |
| MyD88 / TRIF | the two TLR adaptors; MyD88 to NF-κB, TRIF to IRF3/7 and type I interferon | [1.3](lessons/01-03-barriers-sensing-danger.md) |
| NET | neutrophil extracellular trap — extruded chromatin studded with histones and elastase | [1.4](lessons/01-04-inflammation-innate-effectors.md) |
| NHEJ | non-homologous end joining — ligates the sloppy V(D)J coding joint and the CSR break | [3.1](lessons/03-01-vdj-recombination.md) |
| NK | natural killer cell — lymphoid lineage, innate behaviour, missing-self rule | [1.4](lessons/01-04-inflammation-innate-effectors.md) |
| NLR, NLRP3 | NOD-like receptor family; the inflammasome sensor requiring two signals | [1.3](lessons/01-03-barriers-sensing-danger.md) |
| PAMP | pathogen-associated molecular pattern — a microbial feature that is expensive to change | [1.3](lessons/01-03-barriers-sensing-danger.md) |
| PD-1 | inhibitory receptor raising the activation threshold in tissue; a checkpoint target | [3.5](lessons/03-05-helper-t-cells-polarization.md) |
| pIgR | polymeric-Ig receptor — transcytoses dimeric IgA; its cleaved part is secretory component | [3.4](lessons/03-04-antibody-effector-functions.md) |
| PNH | paroxysmal nocturnal hemoglobinuria — *PIGA* mutation, loss of GPI-anchored CD55 and CD59 | [1.5](lessons/01-05-complement-system.md) |
| PRR | pattern-recognition receptor — TLRs, NLRs, RLRs, C-type lectins, cGAS/AIM2 | [1.3](lessons/01-03-barriers-sensing-danger.md) |
| RAG1/RAG2 | the V(D)J recombinase — precise cutting, obeys the 12/23 rule | [3.1](lessons/03-01-vdj-recombination.md) |
| RLR | RIG-I-like receptor (RIG-I, MDA5, LGP2) — cytosolic viral RNA | [1.3](lessons/01-03-barriers-sensing-danger.md) |
| RSS | recombination signal sequence — heptamer, 12- or 23-bp spacer, nonamer | [3.1](lessons/03-01-vdj-recombination.md) |
| S1P, S1PR1 | sphingosine-1-phosphate and its GPCR — the lymph-node exit gradient and its reader | [1.2](lessons/01-02-lymphoid-organs-cell-traffic.md) |
| SCID | severe combined immunodeficiency (IL2RG, ADA, RAG1/2, Artemis) | [3.1](lessons/03-01-vdj-recombination.md) · [4.5](lessons/04-05-immunodeficiency-tumor-transplant.md) |
| SHM | somatic hypermutation — AID-driven point mutation of the rearranged V exon | [3.3](lessons/03-03-germinal-centers-affinity-maturation.md) |
| SMAC | supramolecular activation cluster: cSMAC (TCR), pSMAC (LFA-1 gasket), dSMAC (CD45 excluded) | [4.1](lessons/04-01-cytotoxic-t-cells.md) |
| TAP | transporter associated with antigen processing — pumps peptides into the ER for class I | [2.5](lessons/02-05-antigen-processing-presentation.md) |
| TCR | T-cell receptor — $\alpha\beta$ heterodimer, monovalent, signals through CD3 | [2.3](lessons/02-03-t-cell-receptor.md) |
| TdT | terminal deoxynucleotidyl transferase — adds templateless N nucleotides at the joint | [3.1](lessons/03-01-vdj-recombination.md) |
| Tfh | T follicular helper — Bcl-6, IL-21, CD40L; the limiting resource in a germinal center | [3.5](lessons/03-05-helper-t-cells-polarization.md) |
| Th1/Th2/Th17 | helper subsets for intracellular pathogens / helminths / mucosal bacteria and fungi | [3.5](lessons/03-05-helper-t-cells-polarization.md) |
| TI-1, TI-2 | T-independent antigens: type 1 carries its own TLR ligand, type 2 is highly repetitive | [3.2](lessons/03-02-clonal-selection-b-cell-activation.md) |
| TLR | Toll-like receptor — 10 functional in humans, surface and endosomal | [1.3](lessons/01-03-barriers-sensing-danger.md) |
| TNF | tumour necrosis factor — endothelial activation locally, septic shock systemically | [1.4](lessons/01-04-inflammation-innate-effectors.md) |
| TREC / KREC | T-cell / kappa-deleting recombination excision circles — what newborn SCID screening counts | [3.1](lessons/03-01-vdj-recombination.md) |
| Treg | regulatory T cell — FoxP3, IL-10/TGF-β, CTLA-4 stripping, IL-2 sink | [4.3](lessons/04-03-self-tolerance-regulation.md) |
| $T_{CM}$, $T_{EM}$, $T_{RM}$ | central-memory, effector-memory and **tissue-resident** memory T cells | [4.2](lessons/04-02-immunological-memory-vaccines.md) |
| UNG, APE1 | uracil-DNA glycosylase and AP endonuclease — turn AID's U into mutations or breaks | [3.3](lessons/03-03-germinal-centers-affinity-maturation.md) |
| VLP | virus-like particle — a dense, regular epitope array; a geometry trick, not a chemistry one | [2.2](lessons/02-02-bcr-affinity-avidity.md) |
| XLA | X-linked agammaglobulinemia — BTK; no B cells, no immunoglobulin of any isotype | [4.5](lessons/04-05-immunodeficiency-tumor-transplant.md) |
| $\beta_2$m | $\beta_2$-microglobulin — invariant class I partner, encoded on chromosome 15, **not** in the MHC | [2.4](lessons/02-04-mhc-molecules.md) |

### Symbols

| Symbol | Means | First used |
|---|---|---|
| $n_0$, $n_e$, $k$, $\tau$ | precursor count; effectors needed; doublings required; division time | [1.1](lessons/01-01-immune-problem-cellular-cast.md) |
| $\tau$ (dwell) | how long a lymphocyte stays in a node — about 12 h for T, 24 h for B | [1.2](lessons/01-02-lymphoid-organs-cell-traffic.md) |
| $B$, $\mu$, $P$, $k$ (innate) | bacteria present; their net growth rate; phagocytes present; kills per phagocyte per hour | [1.4](lessons/01-04-inflammation-innate-effectors.md) |
| $B^{*} = kP/\mu$ | the **unstable** threshold inoculum — below it the infection is erased, above it, it escapes | [1.4](lessons/01-04-inflammation-innate-effectors.md) |
| $S = A - I$ | the NK decision: total activating signal minus total inhibitory (MHC-I) signal | [1.4](lessons/01-04-inflammation-innate-effectors.md) |
| $n(t)$, $k$, $\tau$, $f$ (complement) | active convertases; C3 cleaved per convertase per second; convertase lifetime; probability a deposited C3b seeds a new convertase | [1.5](lessons/01-05-complement-system.md) |
| $R = fk\tau$ | complement's **reproduction number**; the self/non-self decision is the crossing $R = 1$ | [1.5](lessons/01-05-complement-system.md) |
| $L$, $\theta$, $d$ | Fab arm length (about 7 nm); hinge included angle; separation of the two combining sites | [2.1](lessons/02-01-antigens-antibody-structure.md) |
| $K_d$, $k_{\text{on}}$, $k_{\text{off}}$ | single-site dissociation constant and its rate constants; $1/k_{\text{off}}$ is the bond's residence time | [2.2](lessons/02-02-bcr-affinity-avidity.md) |
| $C_{\text{eff}}$ | effective local concentration seen by a tethered second arm, $1/(N_A V)$ | [2.2](lessons/02-02-bcr-affinity-avidity.md) |
| $K_d^{\text{app}}$ | **apparent** (avidity-enhanced) constant — a property of the antibody *and* the antigen | [2.2](lessons/02-02-bcr-affinity-avidity.md) |
| $\theta$ (occupancy) | fractional site occupancy, $[L]/(K_d+[L])$ | [2.2](lessons/02-02-bcr-affinity-avidity.md) |
| $k_p$, $N$, $\tau$ (TCR) | proofreading step rate; number of steps; receptor dwell time $1/k_{\text{off}}$ | [2.3](lessons/02-03-t-cell-receptor.md) |
| $p$, $L$, $k$ (MHC) | probability a random 9-mer fits an allele's motif (about 0.01); antigen length; number of distinct alleles | [2.4](lessons/02-04-mhc-molecules.md) |
| $d_N/d_S$ | nonsynonymous over synonymous substitution rate; 1 is neutral, above 1 diversifying | [2.4](lessons/02-04-mhc-molecules.md) |
| $R$, $\tau$, $N_{\text{ss}}$ (display) | surface complexes produced per hour; mean surface lifetime; steady-state display $R\tau$ | [2.5](lessons/02-05-antigen-processing-presentation.md) |
| $f_{\text{DRiP}}$, $\varepsilon$ | fraction of new protein promptly degraded (about 0.15); pipeline yield (about $10^{-3}$) | [2.5](lessons/02-05-antigen-processing-presentation.md) |
| $V$, $D$, $J$ | the three gene-segment arrays; light chains have no D | [3.1](lessons/03-01-vdj-recombination.md) |
| $R_{\text{comb}}$, $R_{\text{junc}}$ | repertoire from segment choice and pairing; repertoire from junctional invention | [3.1](lessons/03-01-vdj-recombination.md) |
| $N_0$, $N_{\text{target}}$, $n_{\text{div}}$ | recruited precursors; cells needed; doublings, $\log_2$ of their ratio | [3.2](lessons/03-02-clonal-selection-b-cell-activation.md) |
| $\mu_{\text{SHM}}$, $m_1$ | hypermutation rate per bp per division ($10^{-3}$); mutations per cell per division (about 0.7) | [3.3](lessons/03-03-germinal-centers-affinity-maturation.md) |
| $i$, $\sigma$, $S$, $R$, $h^2$ | selection intensity; SD of log affinity; selection differential $i\sigma$; response $h^2S$; heritability, **exactly 1** here | [3.3](lessons/03-03-germinal-centers-affinity-maturation.md) |
| $\sigma$ (density) | bound IgG per unit area on a surface; the variable C1q actually reads | [3.4](lessons/03-04-antibody-effector-functions.md) |
| $f$ (FcRn) | fraction of IgG rescued per endosomal pass; half-life scales as $1/(1-f)$ | [3.4](lessons/03-04-antibody-effector-functions.md) |
| $x$, $y$, $\alpha$, $n$ (switch) | two master TFs; drive (max production over degradation); Hill coefficient | [3.5](lessons/03-05-helper-t-cells-polarization.md) |
| $\sigma$ (polarizing) | the signal-3 input added to one master regulator's production | [3.5](lessons/03-05-helper-t-cells-polarization.md) |
| $T$, $E$, $r$, $\kappa$ | infected cells; CTLs; per-capita spread rate; targets killed per CTL per day | [4.1](lessons/04-01-cytotoxic-t-cells.md) |
| $E^{*} = rT_0/\kappa$ | the sharp CTL threshold — below it the infection is never cleared | [4.1](lessons/04-01-cytotoxic-t-cells.md) |
| $t_{\text{search}}$, $t_{\text{peak}}$ | time for antigen and a specific lymphocyte to meet; time to peak response | [4.2](lessons/04-02-immunological-memory-vaccines.md) |
| $f_\beta$, $f_+$, $f_-$, $Y$ | thymic filter fractions (in-frame β, positively selected, surviving deletion) and their product | [4.3](lessons/04-03-self-tolerance-regulation.md) |
| $p$, $m$ (tolerance) | per-complex deletion probability; number of distinct self peptide–MHC complexes displayed | [4.3](lessons/04-03-self-tolerance-regulation.md) |
| $f$ (occupancy, mast) | fraction of IgE sites bound; cross-linking goes as $f(1-f)$ | [4.4](lessons/04-04-autoimmunity-hypersensitivity.md) |
| $r$ (lattice) | antibody arms per epitope, $2[\text{Ab}]/(n[\text{Ag}])$; equivalence at $r \approx 1$ | [4.4](lessons/04-04-autoimmunity-hypersensitivity.md) |
| $N_p$, $f_{\text{allo}}$ | distinct peptide species on a cell (about $10^4$); alloreactive precursor frequency | [4.5](lessons/04-05-immunodeficiency-tumor-transplant.md) |
| $u$, $N$ (tumour) | per-division probability of inactivating the class I pathway; tumour cell number | [4.5](lessons/04-05-immunodeficiency-tumor-transplant.md) |

### Collisions worth flagging

- **$C$** is a **complement component** in [1.5](lessons/01-05-complement-system.md)
  (C3, C5, C1q, C5b–C9 — always with a number or letter attached, and never
  italicized as a variable), but a **concentration** almost everywhere else:
  $C_{\text{eff}}$ in [2.2](lessons/02-02-bcr-affinity-avidity.md), $C(t)$ for
  maternal IgG in [4.5](lessons/04-05-immunodeficiency-tumor-transplant.md),
  $C_{ss}$ for steady-state IgG in [3.4](lessons/03-04-antibody-effector-functions.md).
  In [1.5](lessons/01-05-complement-system.md) itself $C(t)$ is **cumulative C3b
  deposited**, which is a count, not a component. And in
  [2.1](lessons/02-01-antigens-antibody-structure.md) $C_H$ and $C_L$ are
  **constant domains** of a chain.
- **$K_d$** is the **single-site** constant; $K_d^{\text{app}}$ is the
  avidity-enhanced apparent constant, $K_d^{2}/C_{\text{eff}}$, which is **not a
  molecular property** — it depends on epitope spacing
  ([2.2](lessons/02-02-bcr-affinity-avidity.md)). Any measurement made against a
  surface (ELISA, loaded SPR chip, cell staining) has an unknown $C_{\text{eff}}$
  baked into it. Separately, the $K_d$ quoted for an Fc receptor is always for
  **monomeric** ligand ([3.4](lessons/03-04-antibody-effector-functions.md)) and
  says nothing about signalling, which needs clustering.
- **"Class"** means **MHC class** (I versus II — two different display molecules,
  [2.4](lessons/02-04-mhc-molecules.md)) or **antibody class**, i.e. isotype
  (IgM/IgG/IgA/IgE/IgD, [2.1](lessons/02-01-antigens-antibody-structure.md)).
  "Class switching" is the antibody sense only, and it changes no MHC anything.
- **$R$** is complement's reproduction number $fk\tau$
  ([1.5](lessons/01-05-complement-system.md)), the **response to selection**
  $i\sigma$ ([3.3](lessons/03-03-germinal-centers-affinity-maturation.md)), the
  **production rate** of surface complexes
  ([2.5](lessons/02-05-antigen-processing-presentation.md)), and a **repertoire
  size** $R_{\text{comb}}$ ([3.1](lessons/03-01-vdj-recombination.md)).
- **$f$** is the C3b re-seeding probability
  ([1.5](lessons/01-05-complement-system.md)), the fraction of centrocytes helped
  ([3.3](lessons/03-03-germinal-centers-affinity-maturation.md)), the FcRn rescue
  fraction ([3.4](lessons/03-04-antibody-effector-functions.md)), an allele
  frequency ([2.4](lessons/02-04-mhc-molecules.md)), the mTEC gene fraction
  ([4.3](lessons/04-03-self-tolerance-regulation.md)), and site occupancy
  ([4.4](lessons/04-04-autoimmunity-hypersensitivity.md)).
- **$\tau$** is a node dwell time ([1.2](lessons/01-02-lymphoid-organs-cell-traffic.md)),
  a convertase lifetime ([1.5](lessons/01-05-complement-system.md)), a **receptor
  dwell time** ([2.3](lessons/02-03-t-cell-receptor.md)), a **mean surface
  lifetime** ([2.5](lessons/02-05-antigen-processing-presentation.md)), and a
  **cell division time** ([3.2](lessons/03-02-clonal-selection-b-cell-activation.md),
  [4.2](lessons/04-02-immunological-memory-vaccines.md)).
- **$\sigma$** is a **surface density** of IgG
  ([3.4](lessons/03-04-antibody-effector-functions.md)), the **spread of log
  affinity** in a germinal center
  ([3.3](lessons/03-03-germinal-centers-affinity-maturation.md)), and the
  **polarizing input** to the toggle switch
  ([3.5](lessons/03-05-helper-t-cells-polarization.md)).
- **$\theta$** is a **hinge angle** ([2.1](lessons/02-01-antigens-antibody-structure.md)),
  a **fractional occupancy** ([2.2](lessons/02-02-bcr-affinity-avidity.md)), and
  the NK **kill threshold** ([1.4](lessons/01-04-inflammation-innate-effectors.md)).
- **$\mu$** is a bacterial growth rate
  ([1.4](lessons/01-04-inflammation-innate-effectors.md)) and a **mutation rate**
  $\mu_{\text{SHM}}$ ([3.3](lessons/03-03-germinal-centers-affinity-maturation.md));
  the tumour escape rate is deliberately called $u$ instead
  ([4.5](lessons/04-05-immunodeficiency-tumor-transplant.md)). It is also the
  $\mu$ **heavy chain** of IgM ([2.1](lessons/02-01-antigens-antibody-structure.md)).
- Small ones: **$N$** is proofreading steps in
  [2.3](lessons/02-03-t-cell-receptor.md) but surface complexes in
  [2.5](lessons/02-05-antigen-processing-presentation.md) and a cell count
  elsewhere; **$S$** is the NK net signal
  ([1.4](lessons/01-04-inflammation-innate-effectors.md)), the selection
  differential ([3.3](lessons/03-03-germinal-centers-affinity-maturation.md)) and
  a switch-region ($\text{S}\mu$) in CSR; **$E$** is a CTL count in
  [4.1](lessons/04-01-cytotoxic-t-cells.md), never an energy.

## Definitions

### PAMPs and DAMPs

A PAMP is a microbial feature so structurally load-bearing that abandoning it
costs the microbe fitness; a DAMP is one of *your* molecules found where it does
not belong.

$$\text{PAMP: LPS, flagellin, peptidoglycan, dsRNA, unmethylated CpG DNA, } \beta\text{-glucan}$$

$$\text{DAMP: extracellular ATP, uric acid crystals, mitochondrial DNA, HMGB1}$$

The right reading is not "PAMPs cannot change" but "changing them is expensive,"
and the immune system is content to charge a fitness tax.

*Introduced:* [1.3](lessons/01-03-barriers-sensing-danger.md)

### Compartment is information

Several of the most informative microbial signatures — DNA, RNA, ATP — are also
yours, so the receptor is placed where your version is not supposed to be.
Endosomal TLRs see only what the cell swallowed; cytosolic sensors see only what
is already inside. **Location, not chemistry, is the primary discrimination
mechanism**; the receptor's specificity is the backup. The same argument
reappears as the entire class I / class II split.

*Introduced:* [1.3](lessons/01-03-barriers-sensing-danger.md) ·
reused in [2.5](lessons/02-05-antigen-processing-presentation.md)

### Inflammasome

An AND gate for IL-1β: signal 1 (a PRR firing) transcribes pro-IL-1β and NLRP3;
signal 2 (potassium efflux, crystals, pore-forming toxins, lysosomal rupture)
assembles NLRP3–ASC–caspase-1, which cleaves the precursor and cleaves gasdermin
D into pores. Death is **pyroptosis** — lytic and inflammatory by design.
Independent misfires multiply, so the false-positive rate falls quadratically.

*Introduced:* [1.3](lessons/01-03-barriers-sensing-danger.md)

### Cardinal signs of inflammation

Redness, heat, swelling, pain and loss of function are four consequences of **one
change** — the vascular state of post-capillary venules. Vasodilation gives
rubor and calor (Poiseuille); increased permeability gives tumor (Starling);
bradykinin and PGE2 sensitizing nociceptors give dolor. **The exudate is the
point** — it delivers complement, antibody and fibrin into tissue.

*Introduced:* [1.4](lessons/01-04-inflammation-innate-effectors.md)

### Missing-self recognition

An NK cell is not persuaded that a target is healthy; it is **vetoed** by MHC
class I. Inhibitory receptors (KIR, NKG2A) read MHC-I, activating receptors
(NKG2D, NCRs) read stress ligands, and killing follows when the balance tips.

$$S = \sum_i a_i A_i - \sum_j b_j I_j, \qquad \text{kill if } S > \theta$$

Missing self **removes a brake; it does not press an accelerator** — a red cell
has no MHC-I and no stress ligands and is spared.

*Introduced:* [1.4](lessons/01-04-inflammation-innate-effectors.md) ·
completed in [4.1](lessons/04-01-cytotoxic-t-cells.md)

### Opsonization

Coating a microbe with a soluble tag that a phagocyte receptor grips — C3b/iC3b
read by CR1/CR3, or clustered IgG Fc read by FcγR. It is complement's dominant
output and the mechanism by which the adaptive system commands innate effectors.

*Introduced:* [1.4](lessons/01-04-inflammation-innate-effectors.md) ·
[1.5](lessons/01-05-complement-system.md)

### Discrimination by inhibition

The alternative complement pathway has **no recognition step at all**: C3's
strained thioester hydrolyses spontaneously and deposited C3b attacks any nearby
surface. What makes a surface *self* is that it carries brakes (DAF/CD55, factor
H, MCP/CD46 with factor I, CD59) which a bacterium does not.

$$\text{same chemistry on both surfaces; only } f \text{ and } \tau \text{ differ}$$

The characteristic vulnerability of this design is **impersonation of the
inhibitor** — sialylation to recruit factor H, as in *Neisseria*.

*Introduced:* [1.5](lessons/01-05-complement-system.md)

### Membrane-attack complex

C5b nucleates the non-enzymatic assembly of C6, C7, C8 and 12–18 copies of C9
into a pore about 10 nm across. **Everything after C5 is stoichiometric** — one
MAC per C5b — and it needs a directly exposed lipid bilayer, which is why its
entire clientele is Gram-negative and, in practice, essentially *Neisseria*.

*Introduced:* [1.5](lessons/01-05-complement-system.md)

### Antigen, epitope, immunogen, hapten

An **antigen** is anything a receptor binds; an **epitope** is the patch it binds
(6–9 nm², 15–22 residues); an **immunogen** is an antigen that can also provoke a
response on its own; a **hapten** is a small molecule that is bound perfectly
well and provokes nothing until coupled to a carrier. Penicillin allergy is the
hapten–carrier effect in the wild.

*Introduced:* [2.1](lessons/02-01-antigens-antibody-structure.md)

### Conformational epitope

More than 90 percent of epitopes on a native globular protein are
**discontinuous** — assembled from residues far apart in sequence but adjacent on
the folded surface. Denature the antigen and the epitope ceases to exist, which
is why a monoclonal can be beautiful on ELISA and blank on a reducing Western,
and why linear-peptide vaccines raise high titres of useless antibody.

*Introduced:* [2.1](lessons/02-01-antigens-antibody-structure.md)

### Fab and Fc

$$\textbf{Fab decides }\textit{what}\textbf{ is bound. Fc decides }\textit{what happens next.}$$

Diversity is confined to the variable domains' three CDR loops each, so the
constant region can be swapped without disturbing specificity. That physical
separation is the precondition for class switching. Papain cuts above the hinge
disulfides (two monovalent Fab plus intact Fc); pepsin cuts below (bivalent
$\mathrm{F(ab')_2}$, Fc destroyed).

*Introduced:* [2.1](lessons/02-01-antigens-antibody-structure.md)

### Affinity vs avidity

**Affinity** is one site's grip, $K_d = k_{\text{off}}/k_{\text{on}}$.
**Avidity** is what several grips on the same particle achieve together, and they
**multiply rather than add**, because for the complex to escape every arm must
release at once. Avidity is a property of the antibody *and the antigen's epitope
spacing*, never of the antibody alone.

*Introduced:* [2.2](lessons/02-02-bcr-affinity-avidity.md)

### Effective local concentration

Once one arm is anchored, the second explores a small volume containing one
partner epitope:

$$C_{\text{eff}} = \frac{1}{N_A V}, \qquad V = \tfrac{4}{3}\pi r^{3}$$

It falls as $r^{-3}$, which is why avidity is so brutally sensitive to spacing:
5 nm gives about 3 millimolar, 20 nm about 50 micromolar.

*Introduced:* [2.2](lessons/02-02-bcr-affinity-avidity.md)

### Cross-linking, not occupancy

$$\text{signal} \propto \text{receptor aggregation, not receptor occupancy}$$

Membrane Ig has a three-residue tail and transduces nothing; signalling needs the
Igα/Igβ ITAMs clustered so Src kinases phosphorylate them and Syk can dock. A
thousand receptors each holding a soluble monomer give no signal — and chronic
signal 1 without cross-linking or help is **tolerogenic**. The same rule governs
C1q and every Fcγ receptor on the effector side.

*Introduced:* [2.2](lessons/02-02-bcr-affinity-avidity.md) ·
[3.4](lessons/03-04-antibody-effector-functions.md)

### MHC restriction

A T cell cannot see intact antigen; it sees a peptide displayed in the groove of
a host MHC molecule on a particular cell's surface. This is not an arbitrary
rule — **it is the mechanism that makes the interior of a cell auditable**, since
a virus in the cytosol is chemically unreachable by antibody. Consequences: no
secreted TCR, a composite ligand two-thirds host molecule, and a germline docking
bias toward MHC helices.

*Introduced:* [2.3](lessons/02-03-t-cell-receptor.md)

### Kinetic proofreading

A weak, monovalent receptor discriminates by **time** rather than binding energy:
the complex must complete $N$ sequential modifications, and any dissociation
resets it to state 0.

$$P_N = \left(\frac{k_p\tau}{1+k_p\tau}\right)^{\!N}, \qquad \tau = 1/k_{\text{off}}$$

Note what is absent: $k_{\text{on}}$, and therefore $K_d$. In the linear regime
$P_N \propto \tau^N$, so discrimination is $(\tau_1/\tau_2)^N$. It works **only in
that linear regime** — raise every ligand's affinity together and the
discriminator saturates and goes blind.

*Introduced:* [2.3](lessons/02-03-t-cell-receptor.md)

### Kinetic segregation

A TCR–peptide–MHC complex spans about 14 nm, too narrow to admit the bulky
ectodomain of the phosphatase CD45, so close contact locally *excludes* the
phosphatase and tips the kinase–phosphatase balance only where a receptor is
genuinely engaged. CD45 and SHP-1 also supply the fast reset that proofreading
requires.

*Introduced:* [2.3](lessons/02-03-t-cell-receptor.md)

### Serial engagement

Because binding is short-lived, one peptide–MHC complex triggers many TCRs in
succession — tens to a couple of hundred. Short dwell times are therefore not
purely a cost, and the trade against completion probability produces an
**interior optimum** near a dwell time of 10 seconds, which is where real
agonists sit.

*Introduced:* [2.3](lessons/02-03-t-cell-receptor.md)

### Anchor residues

The MHC groove floor has deep pockets at fixed positions; a peptide binds if the
side chains there fit. Everything between the anchors is free and bulges up for
the TCR to read. One allele binds roughly one 9-mer in a hundred, in a
well-defined motif — HLA-A\*02:01 wants a small hydrophobic residue at P2 and P9,
HLA-B\*27:05 an arginine at P2. Class II anchors sit at P1/P4/P6/P9 of a
**sliding register**, which is why class II epitopes come as nested families.

*Introduced:* [2.4](lessons/02-04-mhc-molecules.md)

### Codominance and trans-pairing

Both parental alleles are expressed at every locus. Class I counts alleles
directly (one polymorphic chain plus invariant $\beta_2$m); class II has **two
polymorphic chains** at DQ and DP, so maternal and paternal chains pair in trans
and the combinations **multiply** rather than add.

$$\text{class I, full heterozygote} = 6, \qquad \text{class II} = \underbrace{2}_{\text{DR}} + \underbrace{2\times2}_{\text{DQ}} + \underbrace{2\times2}_{\text{DP}} = 10$$

*Introduced:* [2.4](lessons/02-04-mhc-molecules.md)

### MHC polymorphism as population defense

An escape mutation that abolishes an epitope works only in hosts carrying the
allele that presented it, and costs fitness in everyone else. In a monomorphic
population one mutation would work on everybody. The molecular fingerprint is
$d_N/d_S$ **above 1 at the roughly 57 groove-contact codons and below 1
everywhere else** in the same gene, plus trans-species polymorphism older than
the species.

*Introduced:* [2.4](lessons/02-04-mhc-molecules.md)

### DRiPs

Defective ribosomal products — the 10–30 percent of newly translated
polypeptides that misfold or terminate early and are ubiquitinated within
minutes. They dominate the class I substrate pool, so **class I samples the
synthetic flux, not the steady-state proteome**, and a virus cannot avoid it
while translating.

*Introduced:* [2.5](lessons/02-05-antigen-processing-presentation.md)

### Invariant chain and CLIP

Class II is born in the ER with its groove plugged by invariant chain, whose tail
also routes it to the endosome. Cathepsins trim Ii down to CLIP; HLA-DM then
exchanges CLIP for an antigenic peptide. **Ii exists to keep the two pathways
from talking to each other** — remove it and class II loads TAP-delivered
cytosolic peptides in the ER, and the whole compartmental logic collapses.

*Introduced:* [2.5](lessons/02-05-antigen-processing-presentation.md)

### Cross-presentation

Conventional type 1 dendritic cells route *exogenous* antigen onto class I, by a
cytosolic (TAP-dependent) or vacuolar (TAP-independent) route, and keep their
phagosomes deliberately inefficient so antigen survives to be sampled. Not a
leak: **without it, CD8 priming would work only against viruses that happen to
infect dendritic cells.**

*Introduced:* [2.5](lessons/02-05-antigen-processing-presentation.md)

### V(D)J recombination

RAG1/RAG2 binds a pair of recombination signal sequences, synapses them, and
leaves blunt signal ends (ligated precisely and excised as a circle) and
hairpin-sealed coding ends (repaired sloppily on purpose).

$$\textbf{12/23 rule: RAG joins a 12-spacer RSS only to a 23-spacer RSS}$$

At the heavy-chain locus V and J both carry 23-spacers and D carries 12-spacers
on both flanks, so V–J is **forbidden** and the D segment is obligatory.
**Precise cutting, sloppy repair** — and the diversity comes entirely from the
repair.

*Introduced:* [3.1](lessons/03-01-vdj-recombination.md)

### Junctional diversity

Exonuclease trimming (0–5 nt per end), **P nucleotides** (1–2 palindromic bases
from off-centre hairpin opening by Artemis:DNA-PKcs), and **N nucleotides**
(0–15, added templatelessly by TdT), ligated by NHEJ. It lands exactly on
**CDR3**, the loop at the centre of the binding site, and it outweighs all
segment combinatorics by a factor of about $10^{3.4}$.

*Introduced:* [3.1](lessons/03-01-vdj-recombination.md)

### Allelic exclusion

A productive heavy chain assembles with surrogate light chain into a pre-B-cell
receptor whose signal shuts RAG off, blocking the second allele. Attempts are
sequential and the first success ends the game. **The consequence is
one-cell-one-receptor**, without which clonal selection could not attribute
anything to anything.

*Introduced:* [3.1](lessons/03-01-vdj-recombination.md)

### Clonal selection

Antigen does not instruct; it **selects**, from cells that already exist, and
lets them multiply. Burnet's postulates and what each forces: one specificity per
cell (so allelic exclusion is mandatory); engagement required for activation (so
antigen is never a template); progeny inherit specificity (so memory is a
surviving expanded clone); self-reactive clones removed early (so tolerance is
deletion *after* generation). The instructional theory died on refolding: a
denatured antibody recovers its specificity with no antigen present.

*Introduced:* [3.2](lessons/03-02-clonal-selection-b-cell-activation.md)

### Two-signal rule

$$\text{outcome} = \begin{cases} \text{expansion and differentiation}, & S_1 \wedge S_2 \\ \text{anergy or deletion}, & S_1 \wedge \neg S_2 \\ \text{nothing}, & \neg S_1 \end{cases}$$

For a B cell $S_2$ is CD40L plus cytokines from a Tfh cell; for a T cell it is B7
engaging CD28. The asymmetry **is** the design: the default on ambiguous evidence
is disarmament, not inaction. And since a resting dendritic cell raises B7 only
after its own PRRs fire, **innate recognition licenses adaptive activation** —
the adaptive system cannot start itself.

*Introduced:* [3.2](lessons/03-02-clonal-selection-b-cell-activation.md) ·
[3.5](lessons/03-05-helper-t-cells-polarization.md)

### Linked recognition

The B cell and the T cell recognize **different epitopes on the same physical
molecule**: the B cell binds a surface feature of the intact antigen,
internalizes it through its receptor, and presents an internal peptide on class
II to a helper T cell. So an autoreactive B cell cannot borrow help from a T cell
specific for something else — **T-cell tolerance is inherited by the B-cell
compartment for free** — and a conjugate vaccine works by giving a polysaccharide
a T-cell epitope to be linked to.

*Introduced:* [3.2](lessons/03-02-clonal-selection-b-cell-activation.md)

### T-independent antigens

**TI-1** carries its own innate ligand (LPS through a TLR on the same B cell);
**TI-2** is so repetitive that massive cross-linking substitutes for
corroboration — no host protein presents 50 identical epitopes at rigid spacing.
The shortcut costs everything the germinal center provides: fast IgM in 2–3 days,
no switching, no affinity maturation, no memory. The responding marginal-zone and
B-1 populations are immature until about age two.

*Introduced:* [3.2](lessons/03-02-clonal-selection-b-cell-activation.md)

### Anergy

Not a failure to respond but an **actively induced, lasting refusal**: the cell
downregulates surface immunoglobulin, becomes refractory, is excluded from
follicles and is short-lived. Because resting tissue cells and unlicensed
dendritic cells lack B7, **self-antigen encounter in a quiet body is actively
tolerizing.**

*Introduced:* [3.2](lessons/03-02-clonal-selection-b-cell-activation.md) ·
[4.3](lessons/04-03-self-tolerance-regulation.md)

### Somatic hypermutation

AID deaminates cytosine to uracil in transiently single-stranded DNA behind an
elongating RNA polymerase — **transcription is the aiming device** — at about
$10^{-3}$ per bp per division over the rearranged V exon, a million times the
background rate. Three repair routes give C:G transitions (replication over U),
C:G transversions (UNG plus translesion polymerases) and A:T mutations
(MSH2/MSH6 plus polymerase η), concentrated at WRCY/RGYW hotspots in the CDRs.

*Introduced:* [3.3](lessons/03-03-germinal-centers-affinity-maturation.md)

### Class-switch recombination

The **same enzyme and the same lesion**, resolved differently. A cytokine opens a
switch region's germline promoter; transcription through the G-rich repeat forms
an R-loop, AID deaminates densely on both strands, UNG and APE1 convert uracils
to nicks, and nicks close together on opposite strands make a double-strand break
that NHEJ splices to a downstream switch region.

$$\text{one enzyme} \to \text{one lesion (C}\to\text{U)} \to \begin{cases}\text{dispersed point mutations in V} \\ \text{clustered double-strand breaks in S}\end{cases}$$

The V exon is untouched: same specificity, new instruction.

*Introduced:* [3.3](lessons/03-03-germinal-centers-affinity-maturation.md)

### Dark zone and light zone

Mutating and testing are separated in space because you cannot evaluate a
receptor while scrambling it. Centroblasts divide every 6 h in the **dark zone**
while AID rewrites their V regions; centrocytes stop mutating and compete in the
**light zone** for antigen held on FDCs and for limiting Tfh help. Most survivors
re-enter the dark zone (**cyclic re-entry**); a minority exit as plasma or memory
cells.

*Introduced:* [3.3](lessons/03-03-germinal-centers-affinity-maturation.md)

### Truncation selection with unit heritability

Selection is **competitive, not a threshold** — the criterion is being in the top
tenth of the cells presenting right now. Because daughters are clones and the
mutation *is* the genotype, $h^2 = 1$ exactly, so the response equals the whole
selection differential:

$$R = h^2 S = i\sigma, \qquad i = \phi(z_f)/f$$

**Help must be scarce, because $i$ is a function of scarcity alone.** Abundant
Tfh cells do not make antibodies faster; they make worse ones, slower.

*Introduced:* [3.3](lessons/03-03-germinal-centers-affinity-maturation.md)

### Neutralization

The only Fab-only effector mechanism: the antibody physically covers the business
end of a virus, toxin or adhesin. Everything else on the effector list is
triggered by the Fc, which is why $\mathrm{F(ab')_2}$ neutralizes and agglutinates
but opsonizes nothing, fixes no complement, and is not rescued by FcRn.

*Introduced:* [3.4](lessons/03-04-antibody-effector-functions.md)

### Complement fixation as a density threshold

C1q is a hexamer whose heads sit about 30 nm apart and must engage at least two
Fc regions at once, so what it reads is **surface density**, not concentration.

$$P(\text{a partner within } d) = 1 - e^{-\sigma\pi d^{2}}, \qquad \sigma_{1/2} = \frac{\ln 2}{\pi d^{2}}$$

One surface-bound IgM pentamer does the job alone; IgG needs of order $10^3$–$10^4$
molecules on a cell. (Real IgG does better than Poisson because Fc–Fc contacts
let it self-assemble into hexamers.)

*Introduced:* [3.4](lessons/03-04-antibody-effector-functions.md)

### FcRn rescue

Endothelial and myeloid cells pinocytose plasma; at endosomal pH 6.0 FcRn binds
the IgG Fc and returns it to the surface, releasing it at pH 7.4. Everything not
rescued goes to the lysosome.

$$k = k_0(1-f), \qquad t_{1/2} = \frac{\ln 2}{k}, \qquad C_{ss} = \frac{P}{k}$$

The system runs deep in saturation ($f \approx 0.95$), so **tiny changes in
rescue produce large changes in persistence** — which is both the YTE/LS
half-life-extension mutations and, run backwards, efgartigimod.

*Introduced:* [3.4](lessons/03-04-antibody-effector-functions.md)

### The polarization toggle

Each helper subset is defined by a master TF that drives its own expression and
represses its rivals'. Self-activation plus **cooperative** mutual repression is a
toggle switch, and a toggle switch does not average its inputs — it picks a side
and keeps it after the signal is gone (hysteresis). With $n = 1$ there is a
unique mixed steady state for every drive: **cooperativity is the mechanism, not
a refinement.**

*Introduced:* [3.5](lessons/03-05-helper-t-cells-polarization.md)

### Signal 3

Signals 1 and 2 decide *whether*; the polarizing cytokine decides *what*. Which
cytokine the dendritic cell secretes is set by which PRR fired, so by what class
of pathogen it saw. Because the separatrix of the symmetric switch is the
diagonal, **signal 3 only has to break a tie** — dose sets speed and reliability,
topology sets the outcome.

*Introduced:* [3.5](lessons/03-05-helper-t-cells-polarization.md)

### Immunological synapse

A bullseye: cSMAC (TCR–peptide–MHC and kinases) inside a pSMAC ring of
LFA-1/ICAM-1 that acts as a **gasket, not a handshake**, with bulky CD45 excluded
to the dSMAC. In a CTL the centrosome docks at the contact site so dynein-driven
minus-end transport delivers lytic granules there — **the cell does not steer the
granule, it moves the destination.**

*Introduced:* [4.1](lessons/04-01-cytotoxic-t-cells.md)

### Specificity is the seal

Perforin and granzyme would kill anything, so cytotoxic precision cannot be
chemical. Sealing the cleft concentrates the payload roughly $10^{4}$-fold over
the free volume, so the target sits at micromolar perforin and a bystander one
micron away at sub-nanomolar. **No molecular recognition occurs in the killing
step at all.**

*Introduced:* [4.1](lessons/04-01-cytotoxic-t-cells.md)

### Perforin as delivery, not lysis

Perforin oligomerizes into a 10–20 nm pore whose job is to admit **granzyme B**,
a serine protease cutting after aspartate that enters apoptosis by two redundant
doors: direct procaspase-3 cleavage, and Bid to tBid with mitochondrial
permeabilization. Death is apoptotic and the membrane stays intact, so **no
infectious virions and no DAMPs escape** and caspase-activated DNase shreds the
viral genome too. Fas–FasL is the slow, mainly regulatory second route.

*Introduced:* [4.1](lessons/04-01-cytotoxic-t-cells.md)

### Serial killing

A CTL detaches once a target commits to apoptosis, so its output is a **fixed
capacity** $\kappa$ (targets per CTL per day), not a mass-action rate — a
saturating functional response. In tissue $\kappa$ is 2–10 per day and is
dominated by **search time**, not by the lethal hit: killing is transport-limited,
so improving the weapon changes nothing.

*Introduced:* [4.1](lessons/04-01-cytotoxic-t-cells.md)

### Memory as an initial condition

Memory adds no new effector mechanism — a memory-derived plasma cell secretes
ordinary IgG, a memory CTL kills with ordinary perforin. It changes the starting
point along four axes (lag, magnitude, isotype, affinity), each of which is a
downstream consequence of something already built. **You cannot make a response
fast by making it big**, because the saving is logarithmic in pool size; what
protects a vaccinated person is standing antibody and tissue-resident memory,
both of which bypass the logarithm.

*Introduced:* [4.2](lessons/04-02-immunological-memory-vaccines.md)

### Adjuvant

$$\text{An adjuvant is a synthetic danger signal: it supplies the PAMP the purified antigen lacks.}$$

A purified protein delivers signal 1 only, so the dendritic cell never raises B7
and the response is weak or tolerizing. Modern adjuvants are literally PRR
agonists — MPL (TLR4) in AS04, CpG-1018 (TLR9) in Heplisav-B, and in mRNA
vaccines the lipid nanoparticle and the RNA itself.

*Introduced:* [4.2](lessons/04-02-immunological-memory-vaccines.md)

### Correlate of protection

A measurable immune quantity statistically associated with protection; a
*mechanistic* correlate also causes it. Tetanus antitoxin is mechanistic;
influenza HAI $1{:}40$ is a fitted 50-percent-protection point on a continuous
curve, **not a wall**, and reporting it like a threshold is a common and
consequential sloppiness.

*Introduced:* [4.2](lessons/04-02-immunological-memory-vaccines.md)

### Original antigenic sin

On exposure to a variant, high-affinity memory B cells against the shared
epitopes outcompete naive cells for antigen and are recalled preferentially, so
the response is skewed toward the **first** strain. Combined with antigenic
drift, this is why influenza vaccines are reformulated annually. The pathological
extreme is dengue, where cross-reactive non-neutralizing antibody *enhances* the
second infection by delivering virus into FcγR-bearing cells.

*Introduced:* [4.2](lessons/04-02-immunological-memory-vaccines.md)

### The affinity window

One axis, two thresholds. **Positive selection** rescues thymocytes whose TCR
binds self peptide–MHC weakly (a receptor that cannot see self-MHC can never see
a peptide on it); **negative selection** deletes those that bind strongly.
Survivors live in between. **The repertoire is selected on self and then used on
non-self** — nothing in the thymus ever tests a receptor against a pathogen, and
MHC restriction is the by-product.

*Introduced:* [4.3](lessons/04-03-self-tolerance-regulation.md)

### Death by neglect

The leading cause of thymocyte death is **failing positive selection**, not
deletion: most random receptors bind self-MHC too weakly to be rescued at all.
That filter is quality control on randomness, not safety screening; only the
last, smallest filter is tolerance proper.

*Introduced:* [4.3](lessons/04-03-self-tolerance-regulation.md)

### AIRE

Medullary thymic epithelial cells are forced to transcribe genes they have no
business transcribing — insulin, thyroglobulin, myelin proteins — so the thymus
builds a miniature model of the body. Each mTEC shows a random fraction, so
coverage is a **mosaic** the thymocyte must physically tour, which is why
medullary residence takes days.

*Introduced:* [4.3](lessons/04-03-self-tolerance-regulation.md)

### Receptor editing

A self-reactive immature B cell re-expresses RAG and rearranges a **new light
chain** onto the existing heavy chain, and is deleted only if editing fails.
Repair before disposal — possible only because the light-chain locus retains
unused V and J segments after the first rearrangement. T cells have no
equivalent.

*Introduced:* [4.3](lessons/04-03-self-tolerance-regulation.md)

### Regulatory T cells

FoxP3-positive CD4 cells, 5–10 percent of the CD4 compartment, thymically derived
(from the *upper* part of the affinity window, diverted rather than deleted) or
peripherally induced under TGF-β. Four tools: IL-10 and TGF-β; **CTLA-4
trans-endocytosis stripping B7 off the APC**; consumption of IL-2 as a
competitive sink; direct cytolysis. Suppression works **at the hub** — disarming
one licensed APC anergizes every T cell that later docks on it.

*Introduced:* [4.3](lessons/04-03-self-tolerance-regulation.md)

### Molecular mimicry

Negative selection deletes clones that bind self *too strongly*, so by
construction it leaves behind clones that bind self *weakly*. A microbial epitope
resembling a self epitope engages one of those survivors with high affinity in a
tissue full of PAMPs, so signal 2 is present; once activated, the clone's
threshold falls and it no longer needs costimulation, so the weak self antigen
can now re-trigger it. Rheumatic fever is the clean case.

*Introduced:* [4.4](lessons/04-04-autoimmunity-hypersensitivity.md)

### Epitope spreading

The first wave of destruction releases new self proteins into a tissue whose APCs
are now fully licensed, so the response broadens from one epitope to many. This
is why autoimmunity is progressive and why early intervention beats late.

*Introduced:* [4.4](lessons/04-04-autoimmunity-hypersensitivity.md)

### Equivalence

Define $r = 2[\text{Ab}]/(n[\text{Ag}])$, arms per epitope. At antigen excess
each antibody is saturated by separate antigens and complexes stall at
$\text{Ag}_2\text{Ab}$; at antibody excess each antigen is coated with free arms
dangling. Only near $r \approx 1$ does the lattice grow. **The pathogenic
complexes are the ones small enough to escape clearance and large enough to lodge
— a window, not a monotone.**

*Introduced:* [4.4](lessons/04-04-autoimmunity-hypersensitivity.md)

### The two axes of immune disease

**Autoimmunity** answers *why is the target wrong* (which tolerance mechanism
failed); **hypersensitivity** answers *how is the damage delivered* (which of the
four effector routes fired). Neither determines the other — an anaphylactic
peanut reaction has a perfectly foreign target — and the clock on the wall tells
you the delivery, because preformed granules take minutes and recruited cells
take days.

*Introduced:* [4.4](lessons/04-04-autoimmunity-hypersensitivity.md)

### Alloreactivity

1–10 percent of a person's T cells respond to one foreign MHC allele, against
$10^{-5}$–$10^{-6}$ for a normal antigen. Not an anomaly: TCRs have a germline
docking bias toward MHC helices and were only ever screened against *self*
peptides on *self* MHC, so an allogeneic cell presents an entire proteome's worth
of untested ligands at once.

*Introduced:* [4.5](lessons/04-05-immunodeficiency-tumor-transplant.md)

### Minor histocompatibility antigens

Peptides from ordinary polymorphic genes where donor and recipient differ,
presented on **shared** MHC — normal MHC restriction working exactly as designed
on genuinely foreign peptides. They drive slow rejection and GVHD. **Matching MHC
converts a violent high-frequency response into a slow ordinary one; it does not
create tolerance.**

*Introduced:* [4.5](lessons/04-05-immunodeficiency-tumor-transplant.md)

### Neoantigen and immunoediting

Mutated tumour proteins yield peptides that were never in the thymus, so no
tolerance was imposed on them — which is why tumours are visible at all. Under
immune pressure a population of $10^8$–$10^9$ mutating cells is **selected, not
merely resisted** (elimination → equilibrium → escape). Hold this as a useful
frame: elimination and escape are well supported for virus-associated and highly
mutated tumours; routine surveillance of ordinary tumours rests on inference.

*Introduced:* [4.5](lessons/04-05-immunodeficiency-tumor-transplant.md)

## Formulas and rules

### Response timing and clonal expansion

| Quantity | Expression |
|---|---|
| Doublings required | $k = \log_2(n_e/n_0)$ |
| Time to peak | $t_{\text{peak}} = t_{\text{search}} + \tau\log_2(N_{\text{eff}}/N_0)$ |
| Saving from a bigger pool alone | $\Delta t = \tau\log_2(N_0^{\text{mem}}/N_0^{\text{naive}})$ |
| Cost of a tenfold rarer precursor | exactly $\log_2 10 = 3.3$ doublings, wherever you start |

**The lag is logarithmic in precursor frequency**, which is what makes an
enormous repertoire affordable — and what caps the value of expanding a memory
pool. A hundredfold larger pool buys about 2–3 days and no more.

*From* [1.1](lessons/01-01-immune-problem-cellular-cast.md) ·
[1.2](lessons/01-02-lymphoid-organs-cell-traffic.md) ·
[3.2](lessons/03-02-clonal-selection-b-cell-activation.md) ·
[4.2](lessons/04-02-immunological-memory-vaccines.md)

### Innate containment

$$\frac{dB}{dt} = \mu B - kP \qquad\Longrightarrow\qquad B^{*} = \frac{kP}{\mu}$$

$B^{*}$ is an **unstable** equilibrium, which is why an infectious *dose* exists
at all rather than a dose–response curve. Clearance is capacity-limited (flat in
$B$) because each phagocyte works at capacity; at low density it becomes $cPB$
and the criterion is a phagocyte *density* $P > \mu/c$.

| Fact | Value |
|---|---|
| Phagocyte requirement at 30-min doubling | multiplies by $e^{\mu} = 4$ per hour of delay |
| Elek–Conen | $10^{6}$ staphylococci to make a lesion, $10^{2}$ with a silk suture — the threshold is a property of the **defense** |
| Respiratory burst | $\text{NADPH} + 2\,\text{O}_2 \to \text{NADP}^{+} + \text{H}^{+} + 2\,\text{O}_2^{\bullet-}$, then SOD to $\text{H}_2\text{O}_2$, then MPO to HOCl |

*From* [1.4](lessons/01-04-inflammation-innate-effectors.md)

### Complement amplification

$$\frac{dn}{dt} = \left(fk - \frac{1}{\tau}\right)n \equiv \lambda n, \qquad C(t) = \frac{k\,n_0}{\lambda}\left(e^{\lambda t}-1\right)$$

$$R \equiv fk\tau, \qquad \lambda > 0 \iff R > 1$$

On a subcritical (regulated) surface the total C3b ever deposited from one seed
is finite, $C(\infty) = k n_0/\lvert\lambda\rvert$.

| Surface | $f$ | $\tau$ | $R$ | Outcome |
|---|---|---|---|---|
| Bacterium, no regulators | $10^{-2}$ | 1800 s | 18 | doubles every 73 s |
| Host cell (DAF, factor H, MCP) | $10^{-3}$ | 10 s | 0.01 | about 10 C3b, then stop |
| PNH red cell (no CD55/CD59) | $3\times10^{-3}$ | 1800 s | 5.4 | doubling time about 5 min |
| aHUS glomerular endothelium | $5\times10^{-3}$ | 300 s | 1.5 | doubling time about 7 min, episodic |

One properdin-stabilized convertase deposits $k\tau \approx 2\times10^{3}$ C3b
before the loop does anything. Tickover burns roughly 0.9 g of C3 per day —
a large share of measured hepatic C3 turnover, spent firing at nothing.

*From* [1.5](lessons/01-05-complement-system.md)

### Antibody geometry and valency

$$d(\theta) = 2L\sin(\theta/2), \qquad L \approx 7\ \text{nm}$$

| $\theta$ | $30^\circ$ | $60^\circ$ | $90^\circ$ | $120^\circ$ | $180^\circ$ |
|---|---|---|---|---|---|
| $d$ (nm) | 3.6 | 7.0 | 9.9 | 12.1 | 14.0 |

A Fab arm is about 5 nm wide, so angles much below $30^\circ$ are blocked: **an
IgG bridges epitopes roughly 4–14 nm apart and no others.** Hinge length by
subclass: IgG1 15 residues, IgG2 12, **IgG3 62**, IgG4 12. IgM has no hinge at
all (an extra $C_H$ domain instead), so its geometry, not its flexibility, sets
what it grips — nominal valency 10, working valency about 5 on a real surface.

*From* [2.1](lessons/02-01-antigens-antibody-structure.md)

### Affinity, avidity and occupancy

$$\theta = \frac{[L]}{K_d+[L]}, \qquad C_{\text{eff}} = \frac{1}{N_A V}, \qquad V = \tfrac43\pi r^3$$

$$K_d^{\text{app}} = \frac{K_d^{2}}{C_{\text{eff}}}, \qquad \text{enhancement} = \frac{C_{\text{eff}}}{K_d}, \qquad K_d^{\text{app}} \approx K_d\left(\frac{K_d}{C_{\text{eff}}}\right)^{n-1}$$

In the time domain, from the doubly-bound state one arm releases at
$2k_{\text{off}}$ and the singly-bound intermediate either rebinds at
$k_{\text{on}}C_{\text{eff}}$ or escapes at $k_{\text{off}}$; the two routes give
the same answer.

| Reach $r$ | 5 nm | 10 nm | 20 nm |
|---|---|---|---|
| $C_{\text{eff}}$ | $3.2\times10^{-3}$ M | $4.0\times10^{-4}$ M | $5.0\times10^{-5}$ M |

**Three caps:** geometry (out of reach means $K_d^{\text{app}} \to K_d/2$, and
that factor of 2 is the *only* benefit of two arms); hinge strain (often an order
of magnitude); and meaning (past about three engaged arms the formula returns
numbers no measurement supports — say "effectively irreversible"). Affinity
maturation plateaus once $K_d \ll [L]$, around $10^{-10}$ M.

*From* [2.2](lessons/02-02-bcr-affinity-avidity.md)

### Kinetic proofreading

$$P_N = \left(\frac{k_p}{k_p+k_{\text{off}}}\right)^{\!N} = \left(\frac{k_p\tau}{1+k_p\tau}\right)^{\!N}, \qquad \frac{P_N(\tau_1)}{P_N(\tau_2)} \approx \left(\frac{\tau_1}{\tau_2}\right)^{\!N} \ \ (k_p\tau \ll 1)$$

Serial-engagement output, with $\tau_s$ the time to find the next receptor:

$$S(\tau) = M\,\frac{T}{\tau+\tau_s}\left(\frac{k_p\tau}{1+k_p\tau}\right)^{\!N}$$

which has an interior maximum near $\tau^{*} \approx 9$ s for $N = 5$,
$k_p = 0.5\ \text{s}^{-1}$ — squarely inside the measured range for real
agonists. **Raising $N$ buys specificity and pays in sensitivity; raising
affinity uniformly destroys discrimination** (the MAGE-A3 titin cross-reactivity
that killed two patients).

TCR signalling hardware: CD3$\gamma\varepsilon$, CD3$\delta\varepsilon$ and
$\zeta\zeta$ give $4 + 6 = 10$ ITAMs, 20 tyrosines; Lck (delivered on the CD4 or
CD8 tail) phosphorylates them, ZAP-70 docks, LAT propagates.

*From* [2.3](lessons/02-03-t-cell-receptor.md)

### MHC counting and coverage

$$P(\text{an individual with } k \text{ distinct molecules presents nothing}) \approx \left(e^{-pL}\right)^{k} = e^{-pLk}$$

with $p \approx 0.01$ the probability a random 9-mer fits an allele's motif and
$L$ the antigen length. **Length sits in the exponent**, so a fourfold longer
immunogen can drop the non-responder rate by five orders of magnitude — the
argument for whole-antigen over minimal-peptide vaccines. The honest correction
is that alleles cluster into **supertypes**, so the effective $k$ is well below
the allele count; and binding is neither presentation (the proteasome and TAP
must produce it) nor immunogenicity (a T cell must exist).

Sibling haplotype sharing, MHC inherited as a block:

$$P(\text{HLA-identical}) = \tfrac14, \quad P(\text{share one}) = \tfrac12, \quad P(\text{at least one of } n \text{ sibs}) = 1-\left(\tfrac34\right)^{n}$$

Escape-mutation arithmetic: a mutation aimed at an allele of frequency $f$ helps
in $1-(1-f)^2$ of hosts and is selected *against* in the rest, so universal
pre-adaptation would need roughly 20 mutations at about 5 percent fitness cost
each, i.e. $0.95^{20} = 0.36$ of wild-type fitness.

*From* [2.4](lessons/02-04-mhc-molecules.md) ·
[4.5](lessons/04-05-immunodeficiency-tumor-transplant.md)

### Antigen display steady state

$$\frac{dN}{dt} = R - kN, \qquad N(t) = R\tau\left(1-e^{-t/\tau}\right), \qquad N_{\text{ss}} = R\tau, \qquad \tau = \frac{t_{1/2}}{\ln 2}$$

$$R = R_{\text{syn}} \times f_{\text{DRiP}} \times \varepsilon, \qquad f_{\text{DRiP}} \approx 0.15, \quad \varepsilon \approx 10^{-3}$$

| Quantity | Value |
|---|---|
| Class I molecules per nucleated cell | about $10^{5}$ |
| Distinct peptide species displayed | about $10^{4}$ |
| Copies of a typical **self** peptide | about 10 |
| Copies of an immunodominant **viral** peptide | $10^{2}$–$10^{3}$ |
| Complexes needed to trigger a CTL | 3–10 |
| Complexes needed to trigger a CD4 cell | 50–100 |
| Surface half-life of a loaded class I complex | about 6 h |

**Steady state takes a day; the threshold is crossed in minutes.** And the
margin makes evasion a cliff: from 1300 complexes to below 10 requires removing
more than 99 percent of surface class I — at which point NK cells kill for
missing self.

*From* [2.5](lessons/02-05-antigen-processing-presentation.md)

### Repertoire combinatorics

| Locus | V | D | J | Combinations |
|---|---|---|---|---|
| Heavy (IGH) | 40 | 25 | 6 | $6.0\times10^{3}$ |
| $\kappa$ light | 40 | — | 5 | 200 |
| $\lambda$ light | 30 | — | 4 | 120 |
| TCR$\beta$ | 48 | 2 | 13 | $1.25\times10^{3}$ |
| TCR$\alpha$ | 45 | — | 50 | $2.25\times10^{3}$ |

$$R_{\text{comb}} = (V_HD_HJ_H)(V_LJ_L) = 6.0\times10^{3}\times3.2\times10^{2} = 1.9\times10^{6}$$

$$R_{\text{total}} \approx \underbrace{10^{3.8}}_{\text{heavy }VDJ}\times\underbrace{10^{8.0}}_{\text{heavy junctions}}\times\underbrace{10^{2.5}}_{\text{light }VJ}\times\underbrace{10^{1.7}}_{\text{light junction}} = 10^{16}$$

**Ranking:** junctional ($10^{9.7}$) $\gg$ chain pairing ($10^{4.2}$) $>$ heavy
segment joining ($10^{3.8}$). Per junction with TdT active, about
$50 \times 10^{3} = 5\times10^{4}$; without TdT, about 50. The TCR reaches
$\approx 10^{18}$ because **TdT is active at all three of its joints** — and it
must spend the whole budget up front, since a TCR is never improved after thymic
screening.

**Reading-frame tax.** Only the *net* offset from V to J matters, so
$P(\text{in frame}) = 1/3$, not $1/9$; correcting for stop codons in the random
junction, $P(\text{productive}) \approx \tfrac13 \times 0.87 = 0.29$. With $a$
sequential attempts, $P = 1-(1-p)^{a}$ — two shots at the heavy chain
($5/9 = 0.56$), several at the light ($1-(2/3)^4 = 0.80$), so under half of
precursors assemble a receptor.

**Realized versus potential:** about $10^{9}$ distinct B-cell receptors and
$2.5\times10^{7}$ TCR$\beta$ sequences in a person. You sample the possible
repertoire at about one part in $10^{7}$.

*From* [3.1](lessons/03-01-vdj-recombination.md)

### Germinal-center selection

$$m_1 = \mu_{\text{SHM}} L = 10^{-3}\times700 = 0.7 \ \text{mutations per cell per division}$$

$$R = h^2 S = i\sigma \ \ (h^2 = 1), \qquad i = \frac{\phi(z_f)}{f}$$

| $f$ helped | 0.10 | 0.20 | 0.50 |
|---|---|---|---|
| $i$ | 1.755 | 1.400 | 0.798 |

With $\sigma = 0.19$ and $f = 0.10$: $R = 0.333$ log units per round, i.e.
**2.15-fold per round**, 100-fold in 6 rounds, 1000-fold in 9, at about a day per
round. **Only the product $i\sigma$ matters** — weaker selection is exactly
compensated by more variance, so quoting one without the other tells you nothing.

The ledger of one four-division passage (16 daughters, $p_+ = 0.02$,
$p_- = 0.20$): **one improved, seven with a dead receptor, eight unchanged** —
which is why the default fate of an unselected centrocyte is apoptosis in hours.

The ceiling is kinetic: at $k_{\text{on}} \approx 10^{6}\ \text{M}^{-1}\text{s}^{-1}$,
$K_d = 10^{-6}$ M gives a complex half-life of 0.7 s and $K_d = 10^{-10}$ M gives
116 min. Once the complex outlives the FDC contact, **the readout saturates and
selection goes blind.** Drift also bites: a germinal center is seeded by only
50–200 clones, so $N_e \sim 10^2$ and improvements below the percent level are
invisible.

*From* [3.3](lessons/03-03-germinal-centers-affinity-maturation.md)

### Fc effector arithmetic

$$\sigma_{1/2} = \frac{\ln 2}{\pi d^{2}} = \frac{0.693}{\pi(30\ \text{nm})^{2}} = 245\ \mu\text{m}^{-2}$$

so a 1 μm bacterium needs roughly 770 bound IgG and a 140 μm² red cell about
$3\times10^{4}$ (measured $10^{3}$–$10^{4}$, because IgG hexamerizes). **One IgM
pentamer does it alone**, hence molar potency ratios of $10^{2}$–$10^{3}$.

Occupancy versus signal: plasma IgG at 10 g/L and 150 kDa is
$6.7\times10^{-5}$ M, so even a $K_d = 1\ \mu\text{M}$ FcγR sits at
$\theta = 0.985$ — **every Fcγ receptor on your phagocytes is occupied right now
and none is signalling.** Serum IgE at 100 ng/mL is $5.3\times10^{-10}$ M against
$K_d \approx 10^{-10}$ M for FcεRI, so $\theta = 0.84$ and the mast cell is armed
before any allergen appears; the complex's dissociation half-time is about 8
days, which is the clinical lag of omalizumab.

FcRn: $k = k_0(1-f)$, so $t_{1/2}$ and $C_{ss}$ both scale as $1/(1-f)$.
21 days corresponds to $f = 0.952$; 70 days to $f = 0.986$; a 12 percent cut in
rescue raises the escape fraction from 0.048 to 0.162 and **drops serum IgG by 70
percent**.

Neutralization stoichiometry: with hits per virion Poisson at mean $\lambda$,
$P(\ge n) \approx \lambda^{n}/n!$ at small $\lambda$, so a log–log neutralization
curve has **slope $n$** — shallow means single-hit, steep means coating, and only
the multi-hit case gives a genuine threshold titre.

*From* [3.4](lessons/03-04-antibody-effector-functions.md)

### The mutual-repression switch

$$\dot x = \frac{\alpha}{1+y^{n}} - x, \qquad \dot y = \frac{\alpha}{1+x^{n}} - y$$

For $n = 2$, subtracting gives $(x-y)(1-xy) = 0$, so every steady state is either
uncommitted ($x = y$) or committed ($xy = 1$, $x+y = \alpha$):

$$t^{2} - \alpha t + 1 = 0 \quad\Longrightarrow\quad t = \frac{\alpha \pm \sqrt{\alpha^{2}-4}}{2}, \qquad \lambda_{\pm} = -1 \pm \frac{2}{\alpha}$$

**Committed states exist and are stable exactly when $\alpha > 2$** — a
supercritical pitchfork, with separation $x-y = \sqrt{\alpha^{2}-4}$. The
committed ratio is $x/y = x^{2}$ (6.85 at $\alpha = 3$, 13.9 at $\alpha = 4$).
For $n = 1$ the cross terms cancel and $x = y$ is the only solution at any
drive: **without cooperativity the cell can never commit.** "Incomplete
commitment" (Th17 plasticity) is $\alpha$ just above 2 — shallow basins and
critical slowing down.

A strong enough signal 3 ($\sigma$ added to one numerator) does not merely favour
one side, it **annihilates the other attractor** by a saddle-node bifurcation;
withdraw it and the cell stays where it landed, because the separatrix is the
diagonal. **It is far cheaper to bias a decision than to reverse one.**

*From* [3.5](lessons/03-05-helper-t-cells-polarization.md)

### CTL clearance

$$\frac{dT}{dt} = rT - \kappa E, \qquad T(t) = T_{\max} + (T_0-T_{\max})e^{rt}, \qquad T_{\max} = \frac{\kappa E}{r}$$

$$t_{\text{clear}} = \frac{1}{r}\ln\!\left(\frac{T_{\max}}{T_{\max}-T_0}\right), \qquad \boxed{\;E^{*} = \frac{rT_0}{\kappa}\;}$$

The killing term is **flat in $T$** (a capacity, a saturating functional
response), which is what makes $E^{*}$ a hard threshold rather than a gradient: a
twofold change in CTL number spans never-cleared and same-day clearance. And
because $T_0$ grows exponentially while the response is still being built,

$$E^{*}(\tau_{\text{delay}}) = E^{*}(0)\,e^{r\tau_{\text{delay}}}$$

**The cost of delay is exponential and independent of how good the killing is** —
which is the mathematical argument for barriers, interferon, and vaccination.
Synaptic concentration: a cleft of radius 2.5 μm and gap 15 nm holds
$2.9\times10^{-16}$ L, so $10^{3}$ perforin molecules give 5.6 μM against
$4.0\times10^{-10}$ M in free volume — a factor of $1.4\times10^{4}$.

*From* [4.1](lessons/04-01-cytotoxic-t-cells.md)

### Primary versus secondary response

| Axis | Primary | Secondary |
|---|---|---|
| Lag | 5–7 d to detectable antibody | 1–3 d, and standing antibody acts at $t = 0$ |
| Peak titre | reference | 10–100 times higher |
| Isotype | IgM first, IgG late | switched IgG (or IgA) from the outset |
| Affinity | $K_d \sim 10^{-6}$ M | $K_d \sim 10^{-9}$ M |

Worked figures with $N_{\text{eff}} = 10^{8}$, $\tau = 8$ h: naive $N_0 = 10^{3}$
gives $t_{\text{peak}} = 7.5$ d; memory $N_0 = 10^{5}$ gives 3.8 d, of which only
2.2 d comes from pool size. Protection is the **product** of titre and affinity:
$\theta \approx [\text{Ab}]/K_d$ below saturation, and a 30-fold titre gain times
a 250-fold affinity gain is 7500-fold — neither alone crosses the threshold.

**Titre decay is not leftover antibody.** IgG's half-life is 21 d
($k = 0.033\ \text{d}^{-1}$), so the pool turns over about 870 times in 50 years;
a flat titre proves ongoing secretion. Measured titre half-lives: vaccinia about
90 years, diphtheria about 19, tetanus about 11.

Thresholds quoted as correlates: tetanus antitoxin $\ge 0.01$ IU/mL, hepatitis B
anti-HBs $\ge 10$ mIU/mL, measles neutralizing antibody $\ge 120$ mIU/mL,
influenza HAI $1{:}40$ (a 50-percent point, not a wall).

*From* [4.2](lessons/04-02-immunological-memory-vaccines.md)

### Thymic selection and tolerance

$$Y = f_\beta f_+ f_-, \qquad f_\beta = 1-\left(\tfrac23\right)^{2} = \tfrac59, \quad f_+ \approx 0.10, \quad f_- \approx 0.5 \;\Rightarrow\; Y \approx 0.028$$

$$P(\text{survive negative selection}) = (1-p)^{m} \approx e^{-pm}, \qquad C(n) = 1-(1-f)^{n}$$

With $m \approx 10^{4}$ and half of positively-selected cells deleted,
$p = \ln 2/m = 6.9\times10^{-5}$ — **a single TCR reacts strongly with about one
in fourteen thousand of the complexes it meets.** Self-reactivity is the expected
outcome at coin-flip odds, not a manufacturing defect. AIRE coverage at
$f = 0.02$ needs about 228 mTEC encounters for 0.99 coverage; halving $f$ raises
the never-displayed fraction from 1 to 10 percent (the APS-1 mechanism).

**The trade-off, quantified.** Doubling the deletion probability halves the
exported repertoire, and if the baseline "hole rate" for a foreign epitope is
$(1-q)^{N} = 10^{-3}$, halving $N$ takes it to $\sqrt{10^{-3}} = 3.2\times10^{-2}$
— **32-fold more blind spots for a twofold safety margin.** The optimal threshold
therefore sits above zero autoimmunity, and a few percent population prevalence
is the expected cost of a useful repertoire.

Note also that the **thymic deletion threshold sits below the peripheral
activation threshold** — the thymus deliberately over-deletes.

*From* [4.3](lessons/04-03-self-tolerance-regulation.md)

### Cross-linking and immune complexes

$$X \propto f(1-f), \qquad f = \frac{[A]}{[A]+K_d}$$

Maximal at $f = 1/2$, i.e. $[A] = K_d$, and symmetric on a log-concentration
axis — **a tenfold under-dose and a tenfold over-dose give identical
cross-linking** (the hook effect). Cross-linked sites scale linearly in the
number of specific sites $N$, so severity tracks the **allergen-specific
fraction** of IgE, not total IgE; and only a few hundred of a mast cell's
$2\times10^{5}$ receptors need bridging.

$$r = \frac{2[\text{Ab}]}{n[\text{Ag}]}, \qquad \text{equivalence at } r \approx 1$$

$$\text{antigen excess} \Rightarrow \text{small complexes} \Rightarrow \text{too few clustered Fc} \Rightarrow \text{not cleared} \Rightarrow \text{deposited}$$

Deposition sites are set by plumbing, not immunology: glomerular capillaries,
synovium, skin venules, vessel bifurcations — high filtration pressure and
turbulence, with cationic antigens worse against the anionic basement membrane.
Serum sickness needs a specific titre under one percent of total IgG, and its
delay is nothing but the primary-response lag; on re-exposure it is *accelerated*.

*From* [4.4](lessons/04-04-autoimmunity-hypersensitivity.md)

### Alloreactivity, matching and tumour escape

$$f_{\text{allo}} \approx 1-(1-f)^{N_p} \approx N_p f$$

With $N_p \approx 10^{4}$: $f = 10^{-6}$ gives 1 percent, $f = 10^{-5}$ gives 9.5
percent — the observed 1–10 percent from first principles. A $10^{9}$-cell graft
therefore transfers $10^{7}$ alloreactive T cells against $10^{3}$ for any one
conventional antigen, **on day zero with no priming lag**.

$$\mathbb{E}[\text{escape clones}] = uN, \qquad P(\text{no escape variant}) = e^{-uN}$$

With $u \approx 10^{-7}$ (an order-of-magnitude placeholder) a detectable
$10^{9}$-cell tumour already carries about 100 independent MHC-I-loss clones;
escape becomes more likely than not at $N \approx 10^{7}$, a nodule about 2 mm
across. **Therapy applies the selection pressure; it does not generate the
resistance.**

Maternal IgG decay, which is why an antibody defect declares itself at 6–12
months and not at birth:

$$C(t) = C_0 2^{-t/21\ \text{d}}, \qquad C(90\ \text{d})/C_0 = 0.051, \qquad C(180\ \text{d})/C_0 = 0.0026$$

HIV natural history is one subtraction: from a set point of 800 CD4 cells per
microlitre, losing 50–100 per year reaches the opportunistic threshold of 200 in
about ten years.

*From* [4.5](lessons/04-05-immunodeficiency-tumor-transplant.md)

### The cellular cast

| Cell | Lineage | Arm | Job, one line |
|---|---|---|---|
| Neutrophil | myeloid | innate | abundant, short-lived phagocyte; first in numbers; HOCl, elastase, NETs |
| Macrophage | myeloid | innate | long-lived tissue sentinel: phagocytoses, presents, makes TNF/IL-1/IL-6 |
| Dendritic cell | myeloid (mostly) | **the bridge** | samples tissue, senses danger, carries antigen to the node and licenses T cells |
| Mast cell | myeloid | innate | barrier resident; pre-armed with IgE; degranulates in seconds |
| Eosinophil / basophil | myeloid | innate | anti-helminth granule toxins; allergic inflammation |
| NK cell | **lymphoid** | **innate** | kills cells that have *lost* MHC class I |
| Innate lymphoid cell | lymphoid | innate | tissue cytokines, no rearranged receptor |
| B cell | lymphoid | adaptive | membrane Ig binds native antigen; becomes an antibody factory |
| CD4 helper T | lymphoid | adaptive | kills nothing; **decides what kind of response happens** |
| CD8 cytotoxic T | lymphoid | adaptive | kills host cells displaying foreign peptide on MHC class I |

**Lineage and arm are different axes** — the dendritic cell is myeloid and innate
yet switches the adaptive system on, and the NK cell is lymphoid yet carries no
rearranged receptor.

*From* [1.1](lessons/01-01-immune-problem-cellular-cast.md)

### Lymphoid organs and trafficking addresses

**Primary (generative)** — bone marrow and thymus: where the repertoire is built
and edited against *self*. **Secondary (peripheral)** — lymph nodes (tissue
antigen via lymph), spleen (blood-borne antigen, no afferent lymphatics), mucosal
tissue: where the repertoire meets antigen.

| Zone / destination | Chemokine → receptor | Adhesion |
|---|---|---|
| Node B-cell follicle | CXCL13 → CXCR5 | — |
| Node paracortex (T zone, HEVs) | CCL19/CCL21 → CCR7 | L-selectin, LFA-1 on PNAd, ICAM-1 |
| Gut (Peyer's patch, lamina propria) | CCL25 → CCR9 | $\alpha_4\beta_7$ on MAdCAM-1 |
| Skin | CCL17/CCL27 → CCR4, CCR10 | CLA on E-selectin |
| Any inflamed tissue | CXCL9/10 → CXCR3, CCR5 | VLA-4, LFA-1, PSGL-1 on VCAM-1/ICAM-1 |

**The four-step adhesion cascade:** selectin tethering and rolling
(milliseconds) → chemokine triggering and inside-out signalling (under a second)
→ integrin arrest (seconds) → diapedesis (minutes). **Step 2 carries all the
specificity** — a rolling cell that gets no chemokine signal never converts LFA-1
to high affinity and simply lets go.

**Exit is a timer.** S1P is high in blood and lymph, low inside lymphoid tissue;
S1PR1 re-expression races CCR7 retention, giving dwell times of about 12 h (T)
and 24 h (B). CD69, induced within an hour of TCR engagement, degrades S1PR1 — so
an activated cell cannot leave, and a reactive node swells from egress shutdown
plus increased entry plus proliferation. Fingolimod does the same thing
pharmacologically.

*From* [1.2](lessons/01-02-lymphoid-organs-cell-traffic.md)

### Pattern-recognition receptors by location

| Location | Receptors | Ligands | What firing here implies |
|---|---|---|---|
| Plasma membrane | TLR4 (with MD-2/CD14), TLR5, TLR2/1 and TLR2/6; C-type lectins (Dectin-1, Mincle, DC-SIGN) | LPS, flagellin, lipopeptides, fungal glucans and mannans | a microbe is **outside** the cell |
| Endosome / lysosome | TLR3, TLR7, TLR8, TLR9 | dsRNA, ssRNA, unmethylated CpG DNA | what the cell **swallowed** contains a genome |
| Cytosol | RIG-I, MDA5; cGAS–STING, AIM2; NOD1, NOD2; NLRP3, NAIP/NLRC4 | 5'-triphosphate and long dsRNA, cytosolic DNA, peptidoglycan fragments, membrane disruption | something is **already inside** |

Signalling: every TLR except TLR3 uses **MyD88** → IRAK4/IRAK1 → TRAF6 → IKK →
NF-κB; TLR3 and endosomal TLR4 use **TRIF** → TBK1 → IRF3/IRF7 → type I
interferon. Roughly 50 germline receptors (10 TLRs, about 22 NLRs, 3 RLRs, about
10 signalling C-type lectins, about 5 other cytosolic sensors), read
combinatorially, compressed to under 3 bits of instruction.

Three outputs, and the third is the one people forget: inflammatory cytokines and
chemokines; type I interferon; **and upregulation of CCR7 and B7 on the dendritic
cell** — the licence for adaptive immunity.

*From* [1.3](lessons/01-03-barriers-sensing-danger.md)

### Complement pathways

| | Classical | Lectin | Alternative |
|---|---|---|---|
| Trigger | clustered antibody Fc | MBL/ficolins on microbial sugars | spontaneous C3 thioester hydrolysis — **always on, on everything** |
| Initiators | C1q, C1r, C1s | MBL, MASP-1/2 | C3(H₂O), factor B, factor D |
| Convertase | C4b2a | C4b2a | C3bBb (properdin-stabilized) |
| Shared step | **C3 convertase → C3b** | | |
| Outputs | opsonization (C3b, iC3b → CR1/CR3) — **the workhorse**; recruitment (C3a, C5a) — major; lysis (C5b–C9 MAC) — **narrow** | | |
| Regulators | C1-inhibitor; DAF/CD55, factor H (decay); MCP/CD46 with factor I (cleavage to iC3b); CD59 (blocks C9) | | |

**Whichever pathway ignites, the alternative loop deposits most of the C3b** —
classical and lectin are ignition, alternative is the engine. Adding one more C3b
converts a C3 convertase into a C5 convertase; everything after C5 is
stoichiometric.

*From* [1.5](lessons/01-05-complement-system.md)

### Antibody isotypes

| Isotype | Heavy chain | Assembly | Valency | Serum (mg/mL) | Classical complement | Main receptor | Serum $t_{1/2}$ | Signature job |
|---|---|---|---|---|---|---|---|---|
| IgM | $\mu$, 4 $C_H$, **no hinge** | pentamer + J chain, about 970 kDa | 10 (about 5 usable) | 1.5 | **strongest** | FcμR; **no FcγR** | about 5 d | primary response, intravascular, agglutination |
| IgG1 | $\gamma$, 3 $C_H$ | monomer, 150 kDa | 2 | 9 | moderate | all FcγR | 21 d | the workhorse: neutralize, opsonize, ADCC |
| IgG2 | $\gamma$ | monomer | 2 | 3 | weak | FcγRIIA only | 21 d | anti-polysaccharide responses |
| IgG3 | $\gamma$, **62-residue hinge** | monomer | 2 | 1 | **strongest of the IgGs** | all FcγR, tightest | **about 7 d** | most potent per molecule; Arg435 costs it FcRn rescue |
| IgG4 | $\gamma$ | monomer, **Fab-arm exchanges** | 2, functionally monovalent | 0.5 | none | FcγRIIB-biased | 21 d | blocking, anti-inflammatory; chronic antigen |
| IgA (secretory) | $\alpha$, 3 $C_H$ | dimer + J chain + secretory component, about 400 kDa | 4 | 2–3 | none | FcαRI; **pIgR** for transcytosis | about 6 d | mucosal neutralization **without** inflammation |
| IgE | $\varepsilon$, 4 $C_H$, no hinge | monomer, about 190 kDa | 2 | $5\times10^{-5}$ | none | **FcεRI**, $K_d \approx 10^{-10}$ M | 2 d free, weeks on mast cells | helminths, allergy |
| IgD | $\delta$, long hinge | monomer | 2 | 0.03 | none | poorly defined | about 3 d | almost entirely membrane BCR |

**Switch direction is set by the cytokine:** IL-4 (with IL-13) → IgE and IgG4;
IFN-γ → IgG1 and IgG3; TGF-β (with IL-21, BAFF/APRIL) → IgA.

**Fcγ receptors:** FcγRI/CD64 (high affinity, $K_d \sim 10^{-9}$ M, macrophages),
FcγRIIA/CD32a (activating, own ITAM), **FcγRIIB/CD32b (inhibitory, ITIM)**,
FcγRIIIA/CD16a (NK, ADCC), FcγRIIIB/CD16b (GPI-anchored, tethering only). The
response to an immune complex is set by the **activating-to-inhibitory ratio**.
The Fc's instruction is glycan-encoded: the Asn297 glycan is required at all, and
removing its core fucose raises FcγRIIIA affinity about 50-fold.

*From* [2.1](lessons/02-01-antigens-antibody-structure.md) ·
[3.4](lessons/03-04-antibody-effector-functions.md)

### MHC class I versus class II

| | Class I | Class II |
|---|---|---|
| Chains | one $\alpha$ chain (about 45 kDa) + $\beta_2$m (12 kDa, chromosome 15) | $\alpha$ and $\beta$, both membrane-anchored |
| Groove formed by | $\alpha1 + \alpha2$ | $\alpha1 + \beta1$ |
| Groove ends | **closed** (conserved tyrosines bond the peptide termini) | **open** (peptide runs through and overhangs) |
| Peptide length | 8–10, essentially always 9 | 13–25, nested families on a shared 9-mer core |
| Anchor positions | P2 and P9, fixed register | P1/P4/P6/P9 of a sliding register |
| Ig-like domain | $\alpha3$ | $\beta2$ |
| Coreceptor | **CD8** binds $\alpha3$ | **CD4** binds $\beta2$ |
| Human loci | HLA-A, -B, -C | HLA-DP, -DQ, -DR |
| Expression | all nucleated cells | professional APCs, thymic epithelium; IFN-γ-inducible |
| Reports | the **cytosol** | the **endosome** |
| Loading pathway | proteasome (immunoproteasome under IFN-γ) → TAP → ERAP1 trimming → peptide-loading complex (tapasin, calreticulin, ERp57) | endocytosis → acidified MIIC → cathepsins S/L/B → Ii degraded to CLIP → HLA-DM exchange |
| Editor | tapasin | HLA-DM (dampened by HLA-DO) |
| T-cell partner | CD8 cytotoxic | CD4 helper |

Coreceptors bind the **non-polymorphic** domains, which is why CD4 and CD8 work
across every allele. Empty class I is unstable at 37 °C, so surface class I level
is a direct readout of peptide supply — block TAP and it falls to a few percent.
Non-classical: HLA-E (leader peptides, read by NKG2A), CD1 (**lipids**),
MICA/MICB (stress ligands for NKG2D).

$$\textbf{where the antigen is} \Rightarrow \textbf{which pathway degrades it} \Rightarrow \textbf{which MHC class} \Rightarrow \textbf{which T cell}$$

*From* [2.4](lessons/02-04-mhc-molecules.md) ·
[2.5](lessons/02-05-antigen-processing-presentation.md)

### Helper T subsets

| Subset | Master TF | Induced by | Signature output | Problem it solves |
|---|---|---|---|---|
| **Th1** | T-bet | IL-12, IFN-γ | IFN-γ, IL-2 | pathogens inside macrophages and cells — arms the macrophage to kill what it swallowed |
| **Th2** | GATA3 | IL-4 | IL-4, IL-5, IL-13 | helminths — too big to phagocytose: IgE, eosinophils, mucus, expulsion |
| **Th17** | RORγt | TGF-β + IL-6, IL-23 | IL-17, IL-22 | extracellular bacteria and fungi at mucosal surfaces — neutrophils, tighter epithelium |
| **Tfh** | Bcl-6 | IL-6, IL-21, ICOS | IL-21, CD40L | licensing and sustaining the germinal center |
| **Treg** | FoxP3 | TGF-β, IL-2 | IL-10, TGF-β | self and commensals — suppression |

**The subsets are attractors of varying depth, not cell types** — cells
co-expressing T-bet and RORγt are common, Th17 converts toward Th1 in inflamed
tissue, and Treg/Th17 interconvert depending on whether IL-6 accompanies TGF-β.

*From* [3.5](lessons/03-05-helper-t-cells-polarization.md)

### The four hypersensitivity types

| Type | Effector | Target | Damage route | Onset | Examples |
|---|---|---|---|---|---|
| **I** | IgE on FcεRI | soluble allergen | preformed granule mediators, then lipid mediators | seconds–minutes; late phase 6–12 h | anaphylaxis, allergic asthma, urticaria |
| **II** | IgG/IgM | **fixed** cell-surface or matrix antigen | complement lysis, opsonization, ADCC — or block/stimulate the target | hours–days | ABO transfusion reaction, hemolytic disease of the newborn, myasthenia gravis (block), Graves (stimulate), Goodpasture (linear staining) |
| **III** | IgG | **soluble** antigen | deposited complexes → C5a → neutrophils | hours–days, once antibody appears | serum sickness, lupus nephritis (granular staining), Arthus reaction |
| **IV** | T cells | peptide–MHC on tissue cells | Th1 → IFN-γ → macrophages; CTL killing | 24–72 h | tuberculin/PPD, contact dermatitis, type 1 diabetes |

**The only distinction between II and III is whether the antigen was anchored or
floating** — same isotype, same complement, different geography, and the
immunofluorescence pattern (linear versus granular) reads it off directly. The
classification leaks: lupus is II and III, rheumatoid arthritis III and IV,
celiac is type IV damage with a diagnostic antibody.

*From* [4.4](lessons/04-04-autoimmunity-hypersensitivity.md)

### Immunodeficiency to characteristic infection

| Layer lost | Disease | Molecular defect | Characteristic infections | Why these |
|---|---|---|---|---|
| B cells / antibody | X-linked agammaglobulinemia | BTK | encapsulated pyogenic bacteria (*S. pneumoniae*, *H. influenzae*), **from about 6 months** | capsules block direct phagocytosis; only opsonization defeats them |
| T cells | DiGeorge (22q11.2) | thymic aplasia | viruses, fungi, intracellular bacteria | only CTLs reach an intracellular pathogen |
| Both | SCID (IL2RG, ADA, RAG1/2, Artemis) | no lymphocyte development | everything, **including live vaccines** | no adaptive layer at all |
| Th1 polarization | Mendelian susceptibility to mycobacterial disease | IL-12Rβ1, IFN-γR | *Mycobacterium avium*, non-typhoidal *Salmonella*; viruses and helminths fine | no IFN-γ, so the macrophage is never armed |
| Phagocyte killing | chronic granulomatous disease | NADPH oxidase | catalase-positive: *S. aureus*, *Serratia*, *Burkholderia*, *Aspergillus*; granulomas | ingestion works, killing does not |
| Phagocyte arrival | leukocyte adhesion deficiency | CD18 ($\beta_2$ integrin) | skin and mucosal infection **with no pus**, high blood neutrophils, delayed cord separation | cells are made and cannot arrest |
| Complement, early | C1/C2/C4 deficiency | classical pathway | pyogenic infection **plus** lupus-like immune-complex disease | classical complement also clears immune complexes |
| Complement, terminal | C5–C9 deficiency | membrane-attack complex | ***Neisseria* and essentially nothing else** | MAC is the only mechanism that works where opsonophagocytosis fails |
| Complement regulation | factor H deficiency | tickover consumes the C3 pool | functionally like C3 deficiency, plus aHUS / C3 glomerulopathy | a regulator defect presenting as a component defect |
| GPI anchoring | PNH (*PIGA*) | loss of CD55 and CD59 | none infectious — **chronic intravascular hemolysis** | excess, not deficit |
| CD40L | X-linked hyper-IgM | CD40L | pyogenic bacteria **plus *Pneumocystis*** | CD40L also licenses macrophages, so the defect is cellular too |
| AID | autosomal recessive hyper-IgM | AID | pyogenic bacteria only | no switching, no maturation; T cells intact |
| Regulation | IPEX | FoxP3 | none — the failure is **autoimmunity** | the deficiency is of restraint |
| CD4 count (acquired) | HIV/AIDS | CD4 T-cell depletion | opportunists below 200 cells per microlitre | one node licenses both antibody and CD8 priming |

**The infection names the missing component, and the narrower the phenotype the
less redundant that module is.** Terminal complement deficiency is the sharpest
case in medicine: one missing output, one genus.

*From* [4.5](lessons/04-05-immunodeficiency-tumor-transplant.md)

### Vaccine classes by presentation pathway

| Class | Example | CD8 memory? | Mucosal IgA? | Note |
|---|---|---|---|---|
| Live attenuated | MMR, OPV, varicella, BCG | **yes** (endogenous synthesis) | yes if given mucosally | strongest and most durable; unsafe if immunocompromised |
| Inactivated whole | IPV, hepatitis A, rabies | weak (cross-presentation only) | no | safe; needs adjuvant and boosters |
| Subunit / toxoid / VLP | tetanus toxoid, HBsAg, HPV | little | no | purest signal 1 — **adjuvant obligatory** |
| Conjugate polysaccharide | Hib, PCV, MenACWY | no | no | converts TI-2 to T-dependent by linked recognition |
| Viral vector | ChAdOx1, Ad26 | **yes** | no | anti-vector immunity limits re-boosting |
| mRNA–LNP | COVID-19 vaccines | **yes** | weak | self-adjuvanting; strong systemic IgG, poor airway IgA |

**A vaccine primes the arm whose compartment it loads.** Reaching CD8 memory
means arranging endogenous synthesis or engineering for cross-presentation.

*From* [4.2](lessons/04-02-immunological-memory-vaccines.md)

### Numbers worth having

| Quantity | Value |
|---|---|
| Pathogen generations per host generation | about $5\times10^{5}$ |
| Potential adaptive repertoire | $10^{11}$ (conservative) to $10^{16}$ |
| Lymphocytes in an adult | about $10^{12}$; distinct live clones about $10^{8}$ |
| Naive precursor frequency for one epitope | $10^{-5}$–$10^{-6}$ |
| Specific T cells in the draining node when antigen arrives | a couple of hundred |
| Germline PRR count | about 50 |
| Mucosal surface area | about 100 m² (skin about 2 m²) |
| Commensal bacteria | about $3.8\times10^{13}$ |
| LPS detection threshold | 10 pg/mL, i.e. about 600 bacteria per mL |
| Blood neutrophils | $2$–$7\times10^{9}$/L; about $10^{11}$ made per day |
| Plasma C3 | 1.2 mg/mL, 6.5 μM; about 0.9 g/day burned by tickover |
| Plasma IgG | 10 g/L, about 67 μM; half-life 21 d |
| Serum IgE | about 100 ng/mL, $5.3\times10^{-10}$ M |
| Plasma-cell secretion rate | about $2\times10^{3}$ Ig molecules per second |
| Germinal-center division time | 6 h (fastest in the body) |
| Germinal-center founders | 50–200 clones |
| Thymic export | about 3 percent of thymocytes |
| Thymic self peptide–MHC complexes | about $10^{4}$ |
| CTL kill rate in tissue | 2–10 targets per day |
| Alloreactive T-cell frequency | 1–10 percent |
| Autoimmune disease prevalence | a few percent of the population |
| Squamous cell carcinoma risk on transplant immunosuppression | about 65 times background |

*From* [1.1](lessons/01-01-immune-problem-cellular-cast.md) ·
[1.3](lessons/01-03-barriers-sensing-danger.md) ·
[1.4](lessons/01-04-inflammation-innate-effectors.md) ·
[1.5](lessons/01-05-complement-system.md) ·
[3.2](lessons/03-02-clonal-selection-b-cell-activation.md) ·
[3.4](lessons/03-04-antibody-effector-functions.md) ·
[4.3](lessons/04-03-self-tolerance-regulation.md) ·
[4.5](lessons/04-05-immunodeficiency-tumor-transplant.md)

## Assumed, not taught here

| Fact | Where it's taught |
|---|---|
| Equilibrium binding, $K_d$, the Langmuir isotherm, fractional occupancy | [biophysics 2.3](../biophysics/lessons/02-03-ligand-binding-occupancy.md) |
| Cooperativity, Hill coefficients, allostery (the neutralization-slope reading) | [biophysics 2.4](../biophysics/lessons/02-04-cooperativity-allostery.md) |
| Diffusion and Fick's laws (substrate resupply to a convertase) | [biophysics 1.3](../biophysics/lessons/01-03-diffusion-ficks-laws.md) |
| Tethered-polymer reach and persistence length (behind $C_{\text{eff}}$) | [biophysics 3.2](../biophysics/lessons/03-02-persistence-length-wlc.md) |
| Membrane mechanics (perforin pore insertion) | [biophysics 3.5](../biophysics/lessons/03-05-membrane-mechanics.md) |
| Mass-action kinetics and enzyme rate ceilings | [biophysics 4.1](../biophysics/lessons/04-01-reaction-kinetics-mass-action.md) |
| Protein structure and the immunoglobulin fold ($\beta$-sandwich) | [biochemistry 1.3](../biochemistry/lessons/01-03-four-levels-protein-structure.md) |
| Receptors, GPCRs and reading the outside world | [molecular-cell-biology 2.1](../molecular-cell-biology/lessons/02-01-receptors-reading-outside-world.md) |
| Second messengers and signal amplification | [molecular-cell-biology 2.2](../molecular-cell-biology/lessons/02-02-second-messengers-amplification.md) |
| Kinase cascades, thresholding and scaffolds (ITAM → Syk/ZAP-70 → LAT) | [molecular-cell-biology 2.3](../molecular-cell-biology/lessons/02-03-kinase-cascades-switch.md) |
| Feedback circuits, adaptation and the bistable toggle switch | [molecular-cell-biology 2.4](../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md) |
| The proteasome, ubiquitin and protein quality control | [molecular-cell-biology 4.4](../molecular-cell-biology/lessons/04-04-protein-quality-control-degradation.md) |
| Endomembrane trafficking, phagosome maturation, endosomal acidification, GPI anchoring | [molecular-cell-biology 1.4](../molecular-cell-biology/lessons/01-04-endomembrane-trafficking.md) |
| Actin-driven crawling and diapedesis | [molecular-cell-biology 1.2](../molecular-cell-biology/lessons/01-02-cytoskeleton-three-filaments.md) |
| Dynein, microtubule polarity and minus-end cargo transport (granule delivery) | [molecular-cell-biology 1.3](../molecular-cell-biology/lessons/01-03-motors-cargo-logistics.md) |
| Oncogenic lesions behind AID's off-target damage | [molecular-cell-biology 3.4](../molecular-cell-biology/lessons/03-04-cancer-failure-of-control.md) |
| Double-strand-break repair and NHEJ (the V(D)J coding joint and the CSR break) | [molecular-cell-biology 3.3](../molecular-cell-biology/lessons/03-03-double-strand-breaks-hr-nhej.md) |
| DNA repair chemistry: uracil excision, translesion synthesis, mismatch repair, proofreading | [genetics 3.3](../genetics/lessons/03-03-dna-repair.md) |
| Mutation classes and rates; CpG suppression from cytosine methylation | [genetics 3.2](../genetics/lessons/03-02-mutation.md) · [3.5](../genetics/lessons/03-05-eukaryotic-regulatory-logic-epigenetics.md) |
| Linkage, recombination and haplotypes (why HLA is inherited as a block) | [genetics 2.2](../genetics/lessons/02-02-linkage-recombination.md) |
| Linkage disequilibrium, extended haplotypes, association studies | [genetics 4.4](../genetics/lessons/04-04-linkage-disequilibrium-gwas.md) |
| The breeder's equation $R = h^2 S$ and response to selection | [genetics 4.2](../genetics/lessons/04-02-response-to-selection-qtl.md) |
| Single-gene knockouts as natural experiments in human genetics | [genetics 4.5](../genetics/lessons/04-05-human-genetics-genome-medicine.md) |
| Fitness, relative fitness and selection as differential reproduction | [evolution-ecology 1.1](../evolution-ecology/lessons/01-01-fitness-quantitative.md) |
| Directional selection, and selection on standing variation | [evolution-ecology 1.2](../evolution-ecology/lessons/01-02-modes-of-selection.md) |
| Drift, $N_e$, the neutral $d_N/d_S = 1$ baseline, and the $N_e s$ criterion | [evolution-ecology 1.4](../evolution-ecology/lessons/01-04-drift-ne-gene-flow.md) |
| Balancing selection: overdominance, heterozygote advantage, negative frequency dependence | [evolution-ecology 1.5](../evolution-ecology/lessons/01-05-mutation-balance-of-forces.md) |
| Exponential growth with a removal term | [evolution-ecology 3.1](../evolution-ecology/lessons/03-01-exponential-growth-demography.md) |
| Saturating (Type II) functional responses in predation | [evolution-ecology 4.2](../evolution-ecology/lessons/04-02-predation-lotka-volterra.md) |
| The product rule and counting by construction | [combinatorics 1.1](../combinatorics/lessons/01-01-four-rules-twelvefold-way.md) |
| Poisson and binomial distributions, and Poisson processes | [prob-stat-refresher 2.2](../prob-stat-refresher/lessons/02-02-discrete-distributions.md) |
| The standard normal density and truncation points (for $i = \phi(z_f)/f$) | [prob-stat-refresher 2.3](../prob-stat-refresher/lessons/02-03-continuous-distributions.md) |
| Transcritical and saddle-node bifurcations (complement's $R = 1$; signal 3) | [dynamical-systems 3.1](../dynamical-systems/lessons/03-01-saddle-node-transcritical.md) |
| The supercritical pitchfork and eigenvalue classification (the polarization switch) | [dynamical-systems 3.2](../dynamical-systems/lessons/03-02-pitchfork-symmetry.md) · [1.3](../dynamical-systems/lessons/01-03-trace-determinant-classification.md) |
| Poiseuille's fourth power and the Starling equation (the cardinal signs, complex deposition) | [physiology 2.3](../physiology/lessons/02-03-hemodynamics-blood-pressure.md) · [3.1](../physiology/lessons/03-01-glomerular-filtration-clearance.md) |
| Set-point control and endocrine feedback loops (fever; why Graves severs a loop) | [physiology 1.1](../physiology/lessons/01-01-homeostasis-feedback-control.md) · [3.4](../physiology/lessons/03-04-endocrine-axes.md) |
| Nociceptor sensitization (dolor) | [neuroscience 3.3](../neuroscience/lessons/03-03-audition-somatosensation.md) |
| Mutual information and lossy classification (the innate sensor layer) | [information-theory 1.3](../information-theory/lessons/01-03-mutual-information.md) |

## Pitfalls

### Innate recognition and inflammation

- **"Innate means non-specific" is wrong** — TLR4 binds LPS and TLR5 binds a
  buried flagellin interface. The contrast is **fixed and inherited** versus
  **generated and disposable**, not vague versus precise.
  *([1.1](lessons/01-01-immune-problem-cellular-cast.md), [1.3](lessons/01-03-barriers-sensing-danger.md))*
- **Adaptive immunity is not the superior system.** It is slower by days, cannot
  start on its own, and is the only arm that can cause autoimmunity.
  *([1.1](lessons/01-01-immune-problem-cellular-cast.md))*
- **Lymphoid is not adaptive.** NK cells and innate lymphoid cells are
  lymphoid-derived with no rearranged receptor — lineage is developmental, arm is
  functional, and they cross.
  *([1.1](lessons/01-01-immune-problem-cellular-cast.md))*
- **Self versus non-self is the wrong rule.** Your microbiota is non-self and
  tolerated; a sterile crush injury is entirely self and inflames. The triggers
  are conserved microbial patterns and evidence of damage.
  *([1.1](lessons/01-01-immune-problem-cellular-cast.md), [1.3](lessons/01-03-barriers-sensing-danger.md))*
- **Not all PAMPs are molecules unique to microbes** — DNA, RNA and ATP are
  yours too, and for those the "pattern" being recognized is a **location**.
  *([1.3](lessons/01-03-barriers-sensing-danger.md))*
- **A PRR firing produces pro-IL-1β and nothing else.** The inflammasome does the
  cleavage and needs a second, independent signal.
  *([1.3](lessons/01-03-barriers-sensing-danger.md))*
- **The barrier layer is not passive** — its largest component is ecological, so
  broad-spectrum antibiotics create an immunodeficiency with no immune defect.
  *([1.3](lessons/01-03-barriers-sensing-danger.md))*
- **The cardinal signs are not a list to memorize** — given vasodilation and
  increased permeability you can derive all four.
  *([1.4](lessons/01-04-inflammation-innate-effectors.md))*
- **Most of the damage in acute inflammation is self-inflicted**, by your own
  neutrophils; the abscess cavity is largely your own doing.
  *([1.4](lessons/01-04-inflammation-innate-effectors.md))*
- **Resolution is an active program** with its own mediators (lipoxins,
  resolvins) and its own trigger (efferocytosis) — failure to terminate is a
  distinct disease category, not "more inflammation".
  *([1.4](lessons/01-04-inflammation-innate-effectors.md))*
- **Sepsis is not overwhelming infection; it is overwhelming response** — the
  same TNF-driven vasodilation and permeability applied to the whole vascular
  tree. *([1.4](lessons/01-04-inflammation-innate-effectors.md))*
- **M1 and M2 are ends of a continuum defined largely in culture**, not cell
  types; tissue-resident macrophages have identities set by their organ, and many
  are seeded embryonically rather than from blood monocytes.
  *([1.4](lessons/01-04-inflammation-innate-effectors.md))*
- **Missing self removes a brake; it does not press an accelerator.** NK cells
  also need an activating signal — an MHC-I-negative red cell is spared, and an
  unlicensed NK cell is hyporesponsive rather than autoreactive.
  *([1.4](lessons/01-04-inflammation-innate-effectors.md), [2.1](lessons/02-01-antigens-antibody-structure.md))*
- **The alternative pathway is not a backup — it is the default and the
  amplifier.** Whichever pathway ignites, most deposited C3b comes from the
  alternative loop. *([1.5](lessons/01-05-complement-system.md))*
- **Complement does not "recognize" pathogens**, at least not two-thirds of it:
  selectivity is subtractive. Any sentence of the form "complement distinguishes
  self from non-self by binding X" describes at most the lectin pathway.
  *([1.5](lessons/01-05-complement-system.md))*
- **The MAC is not complement's main weapon.** Rank the outputs by what their
  deficiencies cost and opsonization wins; MAC comes last.
  *([1.5](lessons/01-05-complement-system.md))*

### Trafficking

- **The several-day lag is not the system working out what the pathogen is** —
  recognition takes hours; the lag is 15–17 cell divisions.
  *([1.2](lessons/01-02-lymphoid-organs-cell-traffic.md))*
- **Lymphocytes enter a node from blood through HEVs**, not through afferent
  lymph — afferent lymph is the courier route for antigen and dendritic cells,
  and efferent lymph is far richer in lymphocytes than afferent.
  *([1.2](lessons/01-02-lymphoid-organs-cell-traffic.md))*
- **Chemokines are not vague homing signals** — they are step 2 of a four-step
  cascade, and **selectins alone cannot arrest a cell.**
  *([1.2](lessons/01-02-lymphoid-organs-cell-traffic.md))*
- **The spleen is not a large lymph node** — no afferent lymphatics, it samples
  blood, hence the marginal zone and the specific post-splenectomy vulnerability
  to encapsulated organisms.
  *([1.2](lessons/01-02-lymphoid-organs-cell-traffic.md))*
- **A swollen node is the funnel working**, not the infection spreading; the
  alarming node is the one that does not swell.
  *([1.2](lessons/01-02-lymphoid-organs-cell-traffic.md))*
- **A blood count measures a compartment, not a population** — ask whether the
  missing cells were destroyed or merely moved.
  *([1.4](lessons/01-04-inflammation-innate-effectors.md))*

### Antigen recognition and presentation

- **Antigen and immunogen are not synonyms** — a hapten is antigenic and not
  immunogenic, which is the mechanism of penicillin allergy.
  *([2.1](lessons/02-01-antigens-antibody-structure.md))*
- **An epitope on a native protein is usually not a stretch of sequence**, so
  sequence-based epitope prediction is unreliable and peptide vaccines
  disappoint. *([2.1](lessons/02-01-antigens-antibody-structure.md))*
- **The hinge is a functional element, not a linker** — IgG2 and IgG4 are
  genuinely worse at bridging widely spaced epitopes.
  *([2.1](lessons/02-01-antigens-antibody-structure.md))*
- **IgM's valency of 10 is not tenfold better binding** — only about half its
  sites engage a real surface, and the gain depends on epitope **spacing**.
  *([2.1](lessons/02-01-antigens-antibody-structure.md))*
- **Two arms do not give twice the affinity — they multiply.** Twofold is what
  you get when the geometry *fails*.
  *([2.2](lessons/02-02-bcr-affinity-avidity.md))*
- **An apparent $K_d$ measured against a surface is not an affinity.** It carries
  an unknown $C_{\text{eff}}$ and does not transfer to a different antigen
  density. *([2.2](lessons/02-02-bcr-affinity-avidity.md))*
- **Occupancy is not signalling.** A thousand BCRs each holding a soluble monomer
  give no ITAM clustering; and the same point holds for every Fcγ receptor, which
  are already about 98 percent occupied by irrelevant plasma IgG.
  *([2.2](lessons/02-02-bcr-affinity-avidity.md), [3.4](lessons/03-04-antibody-effector-functions.md))*
- **Do not carry avidity logic to T cells.** The TCR is monovalent; it solved the
  sensitivity problem with coreceptors, many low-affinity contacts and kinetic
  proofreading instead.
  *([2.2](lessons/02-02-bcr-affinity-avidity.md), [2.3](lessons/02-03-t-cell-receptor.md))*
- **A higher-affinity TCR is not a better TCR.** The signal reads dwell time, and
  there is an interior optimum; the natural affinity ceiling was doing safety
  work. *([2.3](lessons/02-03-t-cell-receptor.md))*
- **CD4 and CD8 do not help read the peptide** — they bind **non-polymorphic**
  domains, certify the class (and therefore the compartment), and deliver Lck.
  *([2.3](lessons/02-03-t-cell-receptor.md))*
- **The peptide is not the epitope** — the same peptide on a different MHC allele
  is a different ligand to the same T cell.
  *([2.3](lessons/02-03-t-cell-receptor.md))*
- **Hold the proofreading model firmly and its parameters loosely** — step count,
  catch bonds and clustering are all still argued about.
  *([2.3](lessons/02-03-t-cell-receptor.md))*
- **MHC molecules do not select foreign peptide.** They present whatever is
  around, overwhelmingly self. Discrimination is done by *which T cells exist*.
  *([2.4](lessons/02-04-mhc-molecules.md))*
- **MHC polymorphism is not spread over the protein** — it is concentrated in the
  groove, and $\alpha3$ and $\beta2$ are conserved because a polymorphic
  coreceptor site would break CD4 or CD8 in half the population.
  *([2.4](lessons/02-04-mhc-molecules.md))*
- **Heterozygosity is a modest individual advantage** (a factor of a few); the
  overwhelming benefit is at the population level.
  *([2.4](lessons/02-04-mhc-molecules.md))*
- **An HLA–disease association is usually not a mechanism.** Over 90 percent of
  ankylosing spondylitis patients carry B27 and almost no B27 carriers get the
  disease. Celiac (DQ2 plus deamidated gliadin) and abacavir hypersensitivity
  (the B\*57:01 F pocket) are the honourable exceptions.
  *([2.4](lessons/02-04-mhc-molecules.md), [4.4](lessons/04-04-autoimmunity-hypersensitivity.md))*
- **"Class I endogenous, class II exogenous" is a heuristic with two built-in
  exceptions** (cross-presentation, autophagy). The defensible version is that
  **the pathway is defined by the compartment of degradation.**
  *([2.5](lessons/02-05-antigen-processing-presentation.md))*
- **The proteasome is not an immune enzyme** — the immune system taps a
  housekeeping machine's waste stream; only the interferon-induced subunit swap
  is an immunological adaptation.
  *([2.5](lessons/02-05-antigen-processing-presentation.md))*
- **The invariant chain is not just a chaperone** — it is the placeholder that
  enforces compartmental logic, and the CD8/CD4 division of labour stops meaning
  anything without it.
  *([2.5](lessons/02-05-antigen-processing-presentation.md))*
- **Immunodominance is set by the pipeline, not by abundance.** A protein can be
  abundant and yield no presented epitope for a given allele.
  *([2.5](lessons/02-05-antigen-processing-presentation.md))*

### Diversity, selection and the adaptive response

- **The two heavy-chain junctions do not each need to be in frame.** Only the net
  offset matters, so the answer is $1/3$, not $1/9$.
  *([3.1](lessons/03-01-vdj-recombination.md))*
- **Combinatorial segment joining is the memorable mechanism and the minor one.**
  Junctional diversity outweighs it by about $10^{3.4}$, because N addition is
  unbounded by the genome. *([3.1](lessons/03-01-vdj-recombination.md))*
- **The potential repertoire is not the repertoire you have** — $10^{16}$
  possible, about $10^{9}$ realized; it is a sparse random sample.
  *([3.1](lessons/03-01-vdj-recombination.md), [4.3](lessons/04-03-self-tolerance-regulation.md))*
- **RAG does not cut at random.** Precise cutting, sloppy repair — and confusing
  the two makes the 12/23 rule look arbitrary instead of load-bearing.
  *([3.1](lessons/03-01-vdj-recombination.md))*
- **V(D)J recombination is not somatic hypermutation.** Different enzyme, time,
  place, target and logic — RAG before antigen in marrow or thymus, AID after
  antigen in a germinal center.
  *([3.1](lessons/03-01-vdj-recombination.md), [3.3](lessons/03-03-germinal-centers-affinity-maturation.md))*
- **Antigen never teaches, it only chooses.** The antibody is finished before the
  antigen arrives — denature and refold one with no antigen present and it
  recovers its specificity.
  *([3.2](lessons/03-02-clonal-selection-b-cell-activation.md))*
- **Linked recognition means the B and T cells see *different* epitopes** on the
  same molecule — which is why a hapten needs a carrier.
  *([3.2](lessons/03-02-clonal-selection-b-cell-activation.md))*
- **T-independent does not mean simpler, it means corroboration waived and
  therefore degraded** — IgM, germline affinity, no durable memory.
  *([3.2](lessons/03-02-clonal-selection-b-cell-activation.md))*
- **Anergy is an active response with a negative sign**, not idleness:
  under-evidenced activation is punished, not ignored.
  *([3.2](lessons/03-02-clonal-selection-b-cell-activation.md), [3.5](lessons/03-05-helper-t-cells-polarization.md))*
- **Class switching does not change what the antibody binds** — the V exon is not
  touched. *([2.1](lessons/02-01-antigens-antibody-structure.md), [3.3](lessons/03-03-germinal-centers-affinity-maturation.md))*
- **Germinal-center selection is a tournament, not a threshold** — a center
  seeded entirely with poor clones still matures, because $i$ depends on the
  fraction helped. *([3.3](lessons/03-03-germinal-centers-affinity-maturation.md))*
- **Selection acts on displayed peptide–MHC, not directly on affinity**, and that
  readout saturates — hence a ceiling near $10^{-10}$ M that has nothing to do
  with what antibodies are chemically capable of.
  *([3.3](lessons/03-03-germinal-centers-affinity-maturation.md), [2.2](lessons/02-02-bcr-affinity-avidity.md))*
- **A higher mutation rate is not strictly better** — $\sigma$ grows as
  $\sqrt{m}$ while the fraction of daughters killed grows roughly linearly.
  *([3.3](lessons/03-03-germinal-centers-affinity-maturation.md))*
- **AID is a mutagen you switched on deliberately**, and most B-cell lymphomas
  arise from germinal-center cells for exactly that reason.
  *([3.3](lessons/03-03-germinal-centers-affinity-maturation.md))*
- **A higher-affinity antibody is not always better.** Affinity is a Fab
  property; an exquisitely matured IgG4 binds beautifully and does almost
  nothing. *([3.4](lessons/03-04-antibody-effector-functions.md))*
- **Complement fixation is a property of an array, not of an antibody** —
  density, not identity.
  *([3.4](lessons/03-04-antibody-effector-functions.md))*
- **IgA is immune exclusion, not attack** — it fixes no complement, deliberately,
  because a surface carrying kilograms of commensals must be patrolled without
  being set on fire.
  *([3.4](lessons/03-04-antibody-effector-functions.md))*
- **Neutralizing titre is the correlate because it is cheap to assay**, not
  because Fc-dependent functions do not matter.
  *([3.4](lessons/03-04-antibody-effector-functions.md))*
- **Helper T cells do not exist to help B cells** — Tfh is one of five
  programmes, and a Th1 cell never enters a follicle.
  *([3.5](lessons/03-05-helper-t-cells-polarization.md))*
- **Presentation is cheap; what makes an APC professional is B7 and signal 3** —
  the authority to license and to instruct.
  *([3.5](lessons/03-05-helper-t-cells-polarization.md))*
- **Cross-inhibition without cooperativity produces a blend, never a decision.**
  The nonlinearity is the mechanism.
  *([3.5](lessons/03-05-helper-t-cells-polarization.md))*
- **The polarizing cytokine does not act in proportion to dose** — the separatrix
  is the diagonal, so dose sets speed and reliability while topology sets the
  outcome; and the subsets are attractors, not cell types.
  *([3.5](lessons/03-05-helper-t-cells-polarization.md))*

### Effector function and killing

- **A CTL does not aim its granules** — it relocates the centrosome and seals the
  cleft. **Specificity is the seal, not the trajectory.**
  *([4.1](lessons/04-01-cytotoxic-t-cells.md))*
- **Perforin does not kill by lysis** — it is a delivery device for granzymes,
  and the death is apoptotic with the membrane intact.
  *([4.1](lessons/04-01-cytotoxic-t-cells.md))*
- **Fas–FasL is not a second antiviral route** — it is slow and principally
  regulatory; perforin-deficient humans have catastrophic viral control despite
  intact Fas. *([4.1](lessons/04-01-cytotoxic-t-cells.md))*
- **Do not carry the in-vitro serial-killing rate into tissue** — in a dish the
  search time is nearly zero, and search is 85–90 percent of the real kill cycle.
  *([4.1](lessons/04-01-cytotoxic-t-cells.md))*
- **"Kills infected cells" is not "clears the virus"** — killing a cell that has
  already exported virions is bookkeeping.
  *([4.1](lessons/04-01-cytotoxic-t-cells.md))*
- **MHC-I downregulation is not a clean escape** — it converts a CTL problem into
  an NK problem, and partial downregulation buys nothing while costing the
  inhibitory ligand. Real escape is **locus-selective** (HIV Nef sparing HLA-C
  and -E; HCMV's UL18 and UL40 decoys).
  *([1.4](lessons/01-04-inflammation-innate-effectors.md), [2.5](lessons/02-05-antigen-processing-presentation.md), [4.1](lessons/04-01-cytotoxic-t-cells.md))*

### Memory, tolerance and pathology

- **Memory is not a distinct mechanism** — it is clonal selection restarted from
  a better initial condition; no new effector molecule appears.
  *([4.2](lessons/04-02-immunological-memory-vaccines.md))*
- **The big memory pool is not what makes the response fast.** Standing antibody
  and tissue-resident memory bypass the logarithm; pool size does not.
  *([4.2](lessons/04-02-immunological-memory-vaccines.md))*
- **Antibody decades after vaccination is not old antibody** — IgG's half-life is
  21 days, so a persistent titre is direct evidence of long-lived plasma cells.
  *([4.2](lessons/04-02-immunological-memory-vaccines.md))*
- **Not every vaccine that raises antibody primes CD8 memory** — class I loading
  needs antigen synthesized inside the presenting cell, or cross-presented.
  *([4.2](lessons/04-02-immunological-memory-vaccines.md), [2.5](lessons/02-05-antigen-processing-presentation.md))*
- **A correlate is not a mechanism and is often not a cliff** — influenza HAI
  $1{:}40$ is a fitted 50-percent point.
  *([4.2](lessons/04-02-immunological-memory-vaccines.md))*
- **Pre-existing antibody is not uniformly good** — imprinting biases recall
  toward the first strain, and dengue's cross-reactive non-neutralizing antibody
  makes the second infection worse.
  *([4.2](lessons/04-02-immunological-memory-vaccines.md))*
- **Negative selection does not remove all self-reactive lymphocytes** — only
  those above a threshold, against peptides that happened to be displayed. Every
  healthy person circulates weakly self-reactive clones, by design.
  *([4.3](lessons/04-03-self-tolerance-regulation.md))*
- **Positive selection does not test usefulness** — only whether the receptor can
  bind self-MHC at all; MHC restriction is the by-product.
  *([4.3](lessons/04-03-self-tolerance-regulation.md))*
- **Tolerance is not deletion.** There are at least five outcomes — deletion,
  receptor editing, anergy, ignorance, active suppression — so a T cell can be
  tolerant while alive, competent and sitting next to its antigen.
  *([4.3](lessons/04-03-self-tolerance-regulation.md))*
- **AIRE loss does not cause a disease, it causes a distribution of diseases** —
  organ-scattered rather than organ-specific, as a randomly-thinned mosaic
  predicts. *([4.3](lessons/04-03-self-tolerance-regulation.md))*
- **Types II and III are not distinguished by tissue or isotype** but by whether
  the antigen was **anchored or floating** — read it off the
  immunofluorescence (linear versus granular).
  *([4.4](lessons/04-04-autoimmunity-hypersensitivity.md))*
- **A type I wheal and a type IV induration are different substances** — fluid
  versus cells, which is why a PPD is read by palpating induration and ignoring
  erythema. *([4.4](lessons/04-04-autoimmunity-hypersensitivity.md))*
- **The Gell–Coombs classification leaks** — lupus is II and III, rheumatoid
  arthritis III and IV. It classifies by effector, not by biomarker.
  *([4.4](lessons/04-04-autoimmunity-hypersensitivity.md))*
- **A bigger dose is not always a bigger reaction** per mast cell — cross-linking
  goes as $f(1-f)$, so a tenfold excess is as ineffective as a tenfold deficit.
  (Systemically it is not bell-shaped, because more dose reaches more cells.)
  *([4.4](lessons/04-04-autoimmunity-hypersensitivity.md))*
- **Immunodeficiency does not mean "gets infections"** — it means gets a
  *specific class* of infection. A broad pattern suggests a combined or acquired
  defect. *([4.5](lessons/04-05-immunodeficiency-tumor-transplant.md))*
- **Live vaccines in SCID are a cause of death, not merely inadvisable** — a live
  vaccine is a controlled infection whose control was the patient's
  contribution. *([4.5](lessons/04-05-immunodeficiency-tumor-transplant.md))*
- **Immunoediting is a useful frame, not established fact** — elimination and
  escape are well supported for virus-associated and highly mutated tumours; the
  equilibrium phase rests on mouse models.
  *([4.5](lessons/04-05-immunodeficiency-tumor-transplant.md))*
- **Checkpoint blockade does not boost immunity; it releases a brake** on a
  response that already exists — which is why the immune-related adverse events
  look exactly like autoimmunity, and why
  [4.3](lessons/04-03-self-tolerance-regulation.md) predicted them.
  *([4.5](lessons/04-05-immunodeficiency-tumor-transplant.md))*
- **CAR-T is not simply a better T cell** — being MHC-independent defeats MHC-I
  loss but confines it to **surface** antigens, so it cannot see the
  intracellular proteome, which is the entire reason MHC exists.
  *([4.5](lessons/04-05-immunodeficiency-tumor-transplant.md))*
- **Matching HLA does not create tolerance** — minor histocompatibility antigens
  remain, so immunosuppression cannot be stopped even for an HLA-identical
  sibling. *([4.5](lessons/04-05-immunodeficiency-tumor-transplant.md))*

---

## Conventions

- **One card per course**, covering every lesson. The linter checks that every
  lesson file is cited somewhere on this card.
- **Intuition first**, same as lessons: a plain-English line before any formula.
- **Headings are anchors.** Renaming a `###` breaks inbound lesson links; the
  linter catches it, but prefer not to rename.
- **No prose dollar signs** — write "10 dollars", not the symbol (see CLAUDE.md).
- Length is not capped the way a lesson's is: this is a lookup surface, not a
  read-through. But every line still has to earn its place.
