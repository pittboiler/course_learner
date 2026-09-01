# Immunology · Lesson 4.5: Immunodeficiency, tumor & transplant immunity

> ⏱ ~15 min · Module 4: Cellular Immunity, Memory & Immune Pathology · Builds on: [4.4](04-04-autoimmunity-hypersensitivity.md), [4.1](04-01-cytotoxic-t-cells.md) · Unlocks: nothing — this is the final lesson of the course

## Why this matters

Every lesson so far has been construction. This one is the audit, and it uses three natural experiments that probe the same architecture from three directions:

- **Delete a layer** and see what gets through — immunodeficiency.
- **Give the system a target that is 99.9 percent self and evolving under fire** — a tumor.
- **Give it a target that is entirely foreign but not a pathogen at all** — a graft.

The payoff of the first is the strongest evidence in the whole course that the division of labour we have been drawing is real: **the infection names the missing component.** A patient who gets recurrent *Neisseria* meningitis and nothing else has a terminal complement defect; a patient who gets *Serratia* abscesses and *Aspergillus* has a phagocyte oxidase defect. That specificity would be impossible if the layers were redundant.

The second and third are where clinical immunology currently is: checkpoint blockade and CAR-T are not new biology, they are **Module 3 and Module 4 turned into drugs**, and their side effects were predicted by [4.3](04-03-self-tolerance-regulation.md)'s trade-off before they were observed.

## The idea

**Immunodeficiency is a knockout panel that nature has already run.** Each layer of the system is uniquely good at one class of threat, so removing it produces a *characteristic* susceptibility rather than general sickness. Antibody handles extracellular bacteria that resist phagocytosis until they are opsonized; T cells handle anything that lives inside a cell; phagocyte oxidase handles organisms that survive ingestion; the membrane-attack complex handles the small number of organisms that resist phagocytosis outright. **Lose one and you lose exactly its clientele.**

**A tumor is the target that fights back on the immune system's own terms.** Cancer cells present peptides like any other cell ([2.5](02-05-antigen-processing-presentation.md)), and mutated proteins yield **neoantigens** — peptides that were never in the thymus, so no tolerance was ever imposed on them ([4.3](04-03-self-tolerance-regulation.md)). That is why tumors are visible at all. But a tumor is also a population of $10^8$–$10^9$ replicating, mutating cells under selection, so **immune pressure does not merely fail against a tumor; it shapes it.** This is exactly the germinal center of [3.3](03-03-germinal-centers-affinity-maturation.md) — mutation, selection, amplification, iteration — running with the signs reversed, and it is the same standing-variation-plus-selection logic as [evolution-ecology 1.2](../../evolution-ecology/lessons/01-02-modes-of-selection.md).

**A graft is rejected mostly because of MHC, and violently.** The counterintuitive fact is the magnitude: a normal antigen has a naive precursor frequency around $10^{-5}$–$10^{-6}$, but **1 to 10 percent of a person's T cells respond to a single foreign MHC allele** — three to four orders of magnitude more. This is not an anomaly of transplantation, which evolution never saw. It is a direct consequence of two facts already established: TCRs have a germline docking bias toward MHC helices ([2.3](02-03-t-cell-receptor.md)), and negative selection only ever tested them against *self*-peptides on *self*-MHC ([4.3](04-03-self-tolerance-regulation.md)). An allogeneic cell presents an entire proteome's worth of peptides on an untested platform.

**One trade-off underlies all three.** Tolerance thresholds are set at a compromise: tighten them and you lose repertoire and pathogen coverage; loosen them and you get autoimmunity. Immunodeficiency is that dial turned down, autoimmunity ([4.4](04-04-autoimmunity-hypersensitivity.md)) is it turned up, tumor escape is a target that finds the dial, and transplantation is a case where we deliberately turn it down and then pay in infection and cancer.

## The formal version

### The layer-to-phenotype map

| Layer lost | Disease | Molecular defect | Characteristic infections | Why *these* |
|---|---|---|---|---|
| B cells / antibody | X-linked agammaglobulinemia | BTK, a kinase downstream of Igα/Igβ ([2.2](02-02-bcr-affinity-avidity.md)) | encapsulated pyogenic bacteria (*S. pneumoniae*, *H. influenzae*), from ~6 months | capsules block direct phagocytosis; only opsonization ([3.4](03-04-antibody-effector-functions.md)) defeats them |
| T cells | DiGeorge (22q11.2 deletion) | thymic aplasia — no organ to select in | viruses, fungi, intracellular bacteria | only [4.1](04-01-cytotoxic-t-cells.md)'s CTLs can reach an intracellular pathogen |
| Both | SCID (IL2RG, ADA, RAG1/2) | no lymphocyte development at all | everything, including *live vaccines* | no adaptive layer whatsoever |
| Phagocyte killing | Chronic granulomatous disease | NADPH oxidase ([1.4](01-04-inflammation-innate-effectors.md)) | catalase-positive organisms: *S. aureus*, *Serratia*, *Burkholderia*, *Aspergillus* | ingestion works, killing does not; granulomas wall off what cannot be digested |
| Phagocyte arrival | Leukocyte adhesion deficiency | CD18 (β2 integrin) — the arrest step of [1.2](01-02-lymphoid-organs-cell-traffic.md) | skin and mucosal infection **with no pus**, delayed cord separation | neutrophils are made in excess but cannot leave the vessel |
| Complement, early | C1/C2/C4 deficiency | classical pathway ([1.5](01-05-complement-system.md)) | pyogenic infection **plus** lupus-like immune-complex disease | classical complement also clears immune complexes (type III, [4.4](04-04-autoimmunity-hypersensitivity.md)) |
| Complement, terminal | C5–C9 deficiency | membrane-attack complex | ***Neisseria* — and essentially nothing else** | MAC lysis is the only mechanism that matters for an organism opsonization cannot finish |
| Regulation | IPEX | FoxP3 ([4.3](04-03-self-tolerance-regulation.md)) | none — the failure is *autoimmunity* | the "deficiency" here is of restraint |

*In words: the pattern of infection is a readout of which module is gone, and the narrower the phenotype, the less redundant that module is.* **Terminal complement deficiency is the sharpest case in medicine**: one missing output, one genus of organism.

Two lines of arithmetic make the table predictive rather than descriptive.

**Why the antibody defect declares itself at six months, not at birth.** Maternal IgG crosses the placenta via FcRn ([3.4](03-04-antibody-effector-functions.md)) and decays with the FcRn-protected half-life $t_{1/2} \approx 21$ days. With no endogenous production the decay is pure exponential:

$$C(t) = C_0\,2^{-t/t_{1/2}}$$

$$\frac{C(90\ \text{d})}{C_0} = 2^{-90/21} = 0.051, \qquad \frac{C(180\ \text{d})}{C_0} = 2^{-180/21} = 0.0026$$

*In words: a twentyfold fall every three months, so borrowed protection is 5 percent gone by three months and essentially absent by six.* **The clinical onset window of 6–12 months is a half-life calculation**, and the spread within that window reflects how much titre the mother supplied.

**Acquired immunodeficiency as deletion of a single node.** HIV depletes CD4 T cells — the decision layer of [3.5](03-05-helper-t-cells-polarization.md). Because that node licenses both germinal centers ([3.3](03-03-germinal-centers-affinity-maturation.md)) and CD8 priming ([4.1](04-01-cytotoxic-t-cells.md)), **removing it degrades antibody *and* cytotoxicity even though neither B cells nor CD8 cells are infected.** With a normal count of 500–1500 cells per microlitre and untreated loss of roughly 50–100 per microlitre per year, a set point of 800 reaches the opportunistic-infection threshold of 200 in about ten years — the classical natural history, from one subtraction.

### Alloreactive precursor frequency

Let $f$ be the naive precursor frequency for one specific peptide–MHC ligand, and $N_p$ the number of *distinct* peptide species a cell displays on class I. On an allogeneic cell, both the MHC surface and the bound peptide set are novel, so effectively all $N_p$ complexes are new ligands:

$$\boxed{\;f_{\text{allo}} \;\approx\; 1-(1-f)^{N_p} \;\approx\; N_p f\;}$$

*In words: alloreactivity is high not because any single ligand is recognized unusually well, but because a foreign MHC molecule presents ten thousand new ligands at once.* With $N_p \approx 10^4$:

| $f$ (per ligand) | $f_{\text{allo}}$ |
|---|---|
| $10^{-6}$ | $1-e^{-0.01} = 0.010$ |
| $10^{-5}$ | $1-e^{-0.1} = 0.095$ |

**That reproduces the observed 1–10 percent from first principles**, and it explains why alloreactivity needed no evolutionary explanation of its own.

### HLA matching between siblings

Each parent carries two HLA haplotypes; a child takes one from each, and the MHC region is inherited essentially as a block ([2.4](02-04-mhc-molecules.md)). Two siblings share the paternal haplotype with probability $1/2$ and the maternal with probability $1/2$, independently:

$$P(\text{HLA-identical}) = \tfrac14, \qquad P(\text{haploidentical}) = \tfrac12, \qquad P(\text{no shared haplotype}) = \tfrac14$$

$$P(\text{at least one match among } n \text{ siblings}) = 1-\left(\tfrac34\right)^{n}$$

*In words: one sibling in four matches, and you need three or four siblings before a match is more likely than not.*

### Tumor escape is selection on standing variation

Let $u$ be the per-division probability that a cell inactivates its class-I pathway (loss of $\beta_2$-microglobulin, of TAP, or of the locus itself) and $N$ the number of cell divisions producing the tumor. Escape variants arise as a Poisson process:

$$\boxed{\;\mathbb{E}[\text{escape clones}] = uN, \qquad P(\text{no escape variant}) = e^{-uN}\;}$$

Take $u \approx 10^{-7}$ (an order-of-magnitude placeholder, not a measured constant) and a clinically detectable tumor of $N \approx 10^{9}$ cells: $uN \approx 100$, so **about a hundred independent MHC-I-loss clones already exist before any therapy begins.** Escape becomes near-certain at $uN \approx 1$, i.e. $N \approx 10^{7}$ cells — a nodule about 2 mm across, far below detection.

*In words: immune pressure does not create the escape mutant, it selects one that was already there.* This is the tumor version of [evolution-ecology 1.4](../../evolution-ecology/lessons/01-04-drift-ne-gene-flow.md)'s point that fate depends on population size, and it is why **immunoediting** (elimination → equilibrium → escape) is the right frame even though the direct human evidence for the elimination phase is thinner than the model's popularity suggests.

## Picture

![A grid whose rows are the immune layers built across this course, from barrier and phagocytes through complement, antigen presentation, the CD4 decision layer, antibody, cytotoxic T cells and regulation, and whose three columns show how each layer appears in immunodeficiency as an absent component, in tumor escape as an evaded one, and in transplantation as a misdirected one. The caption notes that the infection names the layer that is missing while the escape route names the layer that was working.](assets/04-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — read the layer off the infection).** Three patients. Name the missing component and justify it from mechanism alone.

**(a) An 8-month-old boy: third episode of pneumococcal otitis and a pneumonia. Serum IgG, IgA and IgM all undetectable; circulating B cells absent; T-cell counts normal.**

No B cells and no immunoglobulin of any isotype, with intact T cells, isolates the B lineage — **X-linked agammaglobulinemia (BTK)**. The infections are encapsulated pyogenic bacteria because a polysaccharide capsule blocks direct phagocyte recognition; only C3b and IgG opsonization get them ingested ([1.5](01-05-complement-system.md), [3.4](03-04-antibody-effector-functions.md)). **The age is the diagnostic clue**: from the half-life calculation above, maternal IgG is 5 percent of its birth value at three months and 0.3 percent at six, so the boy was protected until borrowed antibody ran out.

**(b) A 19-year-old with a second episode of meningococcal meningitis and an otherwise unremarkable infectious history.**

Two *Neisseria* infections and nothing else is close to pathognomonic for **terminal complement (C5–C9) deficiency**. The narrowness is the mechanism: opsonization and C3a/C5a recruitment are intact, so every other organism is handled normally. *Neisseria* is the case where they are not enough — a thin peptidoglycan wall and effective resistance to phagocytic killing leave MAC lysis as the load-bearing output. **Losing one output of one cascade costs you exactly one genus.**

**(c) A 3-year-old with recurrent *Serratia marcescens* abscesses, an *Aspergillus* lung lesion, and biopsy-proven granulomas. Immunoglobulins and lymphocyte subsets normal; neutrophil count high.**

Normal adaptive layers, abundant neutrophils, and failure against catalase-positive organisms points to **chronic granulomatous disease** — NADPH oxidase, so phagocytosis succeeds and killing fails ([1.4](01-04-inflammation-innate-effectors.md)). Granulomas are the giveaway: they are what macrophages do with something they can contain but not digest. The textbook explanation for the catalase association — that catalase-negative organisms supply the phagosome with the $\text{H}_2\text{O}_2$ the cell cannot make — is tidy but **contested; treat the association as robust and the explanation as provisional.**

**Contrast worth noticing:** leukocyte adhesion deficiency also gives bacterial skin infection, but with **no pus at all** and a *high* blood neutrophil count. The neutrophils are made, they simply cannot arrest and cross the endothelium ([1.2](01-02-lymphoid-organs-cell-traffic.md)). Same clientele, different step, opposite-looking picture.

**Example 2 (why you'd care — the transplant decision, and the price of turning the dial down).** A 34-year-old needs a kidney. She has three siblings.

**(a) Probability that at least one sibling is HLA-identical.**

$$P = 1-\left(\tfrac34\right)^{3} = 1-0.422 = \mathbf{0.578}$$

Just better than a coin flip. With four siblings it rises to $1-(3/4)^4 = 0.684$, and the probability that exactly one of the four matches is $\binom{4}{1}(1/4)(3/4)^3 = 0.422$. **Family size is the dominant variable in matching**, which is why unrelated-donor registries exist and why patients from ancestries under-represented in those registries have measurably worse odds — HLA haplotype frequencies are population-specific ([2.4](02-04-mhc-molecules.md)).

**(b) If a sibling is HLA-identical, can immunosuppression be stopped?**

No, and the reason is instructive. HLA identity removes the alloreactive frequency computed above — the $10^{-2}$ term collapses back toward $10^{-5}$ — but donor and recipient still differ at thousands of ordinary polymorphic genes. Peptides from those proteins, presented on *shared* MHC, are **minor histocompatibility antigens**: normal MHC restriction working exactly as designed on genuinely foreign peptides. They drive slow rejection, and in a marrow transplant they drive graft-versus-host disease. **Matching MHC converts a violent, high-frequency response into a slow, ordinary one; it does not create tolerance.**

**(c) The cost of the immunosuppression.**

Long-term calcineurin inhibition and steroids suppress the T-cell layer, and the consequences read straight off this course. Cutaneous squamous cell carcinoma runs at roughly **65 times** the population rate, and EBV-driven post-transplant lymphoproliferative disorder appears in patients who previously controlled the virus without difficulty.

**This is the best human evidence for immunosurveillance, and it is also evidence for its limits.** The tumors that surge are overwhelmingly **virus-associated** — human papillomavirus, EBV, Kaposi's-sarcoma herpesvirus — where the antigens are frankly foreign viral proteins and CTL control was doing continuous work. Common non-viral epithelial cancers rise far less. **So T cells demonstrably suppress virally transformed cells; the claim that they routinely eliminate ordinary mutation-driven tumors is a weaker inference, and the immunoediting model should be held at that strength.**

The clinical loop closes on (a): **a better HLA match permits lighter immunosuppression, which buys back infection control and cancer surveillance.** The matching arithmetic is not bookkeeping — it sets the dose of the trade-off the patient lives with.

## Watch out

- **You might think immunodeficiency means "gets infections."** It means *gets a specific class of infection*. A history of recurrent viral and fungal disease with normal antibodies excludes the B-cell layer as surely as a lab test would. When the pattern is broad, suspect a combined or acquired defect, not a subtle one.
- **You might think live vaccines are merely inadvisable in SCID.** They are a cause of death — rotavirus, and BCG where it is given. **A live vaccine is a controlled infection whose control was the patient's contribution**, and this is exactly why newborn screening for SCID exists.
- **You might read immunoediting as established fact.** Elimination and escape are well supported for virus-associated and highly mutated tumors; the equilibrium phase and routine surveillance of ordinary tumors rest on mouse models and inference. Say "useful frame," not "proven."
- **You might think checkpoint blockade boosts immunity.** It *releases a brake* on a response that already exists — which is why response correlates with tumor mutational burden and with pre-existing T-cell infiltration, why mismatch-repair-deficient tumors ([genetics 3.3](../../genetics/lessons/03-03-dna-repair.md)) respond well, and why immune-related adverse events look exactly like autoimmunity. [4.3](04-03-self-tolerance-regulation.md) predicted the toxicity: you cannot loosen a threshold selectively.
- **You might think CAR-T is simply a better T cell.** A chimeric antigen receptor is an antibody Fv ([2.1](02-01-antigens-antibody-structure.md)) wired to CD3ζ plus a costimulatory domain ([3.5](03-05-helper-t-cells-polarization.md)) — so it is **MHC-independent, which defeats MHC-I-loss escape, but confines it to surface antigens.** It cannot see the intracellular proteome, which is the entire reason MHC exists ([2.3](02-03-t-cell-receptor.md)). That is the central obstacle in solid tumors, along with trafficking and the suppressive microenvironment.
- **You might think a tumor that loses MHC-I has escaped.** It has escaped CTLs and walked into NK missing-self detection ([1.4](01-04-inflammation-innate-effectors.md), [4.1](04-01-cytotoxic-t-cells.md)). Real escape usually means *partial* downregulation — low enough to avoid CTLs, high enough to keep NK inhibitory receptors satisfied. **The pincer forces the tumor into a narrow window, which is why NK-directed therapy is being combined with checkpoint blockade.**

## One-liner

> Delete a layer and the infection names it; a tumor is the same layered system meeting a target that mutates and is therefore selected rather than merely resisted; a graft is what happens when the display system itself is the antigen — and all three are the tolerance trade-off read at different settings.

## Problems

**P1 (🟢)** For each patient, name the missing layer and justify from mechanism, not from memory.
(a) A 4-month-old given rotavirus vaccine develops persistent disseminated rotavirus infection; absolute lymphocyte count is very low.
(b) A 22-year-old woman has had two episodes of *Neisseria gonorrhoeae* bacteremia. No other significant infections.
(c) A 6-year-old has recurrent bacterial skin infections that never form pus, with a blood neutrophil count three times normal.

**P2 (🟡)** A patient needs a marrow transplant and has four siblings.
(a) Probability at least one is HLA-identical, and probability exactly two are.
(b) A sibling matches. Explain why graft-versus-host disease is still expected, and what the transplanting T cells are recognizing.
(c) Suppose instead the donor is HLA-mismatched at one allele. Using $f_{\text{allo}} \approx N_p f$ with $N_p = 10^4$ and $f = 10^{-6}$, estimate how many of the graft's $10^{9}$ transferred T cells are alloreactive, and compare with the number specific for any one conventional antigen.

**P3 (🔴, bridges to evolution & ecology)** A melanoma is detected at $10^{9}$ cells. The per-division probability of inactivating the class-I pathway is $u \approx 10^{-7}$.
(a) Expected number of independent MHC-I-loss clones present at detection, and the probability that none exists.
(b) At what tumor size does escape first become more likely than not? Express it as an approximate diameter, using $10^{9}$ cells per cubic centimetre.
(c) The patient receives anti-PD-1 and responds, then relapses at 14 months with a tumor whose biopsy shows loss of $\beta_2$-microglobulin. Explain what the therapy did to the population, why the relapse was predictable from (a), and which effector arm the escape variant should now be vulnerable to.

<details>
<summary>Solutions</summary>

**P1 (a) Severe combined immunodeficiency.** The diagnostic element is not the low lymphocyte count on its own but **the vaccine strain causing disease**: a live attenuated virus is attenuated relative to a working immune system, so persistent infection by one means the adaptive layer is absent. Rotavirus is a cytosolic replicator, so CTLs ([4.1](04-01-cytotoxic-t-cells.md)) are the required arm; disseminated disease at 4 months, while maternal IgG is still around, additionally argues that the missing layer is T-cell, not antibody. SCID, and the reason newborn screening exists.

**(b) Terminal complement (C5–C9) deficiency.** Recurrent *Neisseria* with an otherwise clean history is the signature narrow phenotype. All other complement outputs — C3b opsonization, C3a/C5a recruitment — are intact, so every organism cleared by phagocytosis is handled normally. **The one organism class left uncovered is the one for which MAC lysis is load-bearing.** (Properdin deficiency gives a similar picture through the alternative pathway; both are worth screening for after a second neisserial infection.)

**(c) Leukocyte adhesion deficiency (CD18 / β2 integrin).** Pus is dead neutrophils; **no pus with a high blood neutrophil count means the cells are made and cannot arrive.** The defect is at the firm-arrest step of the rolling–activation–arrest–diapedesis sequence ([1.2](01-02-lymphoid-organs-cell-traffic.md)); integrin-mediated arrest fails, so neutrophils accumulate in the circulation instead of the tissue. Contrast with chronic granulomatous disease, where the cells arrive and cannot kill — same clientele, one step later, and granulomas rather than absent pus.

**P2 (a)** Each sibling matches independently with probability $1/4$:

$$P(\text{at least one}) = 1-\left(\tfrac34\right)^{4} = 1-0.3164 = \mathbf{0.684}$$

$$P(\text{exactly two}) = \binom{4}{2}\left(\tfrac14\right)^{2}\left(\tfrac34\right)^{2} = 6 \times 0.0625 \times 0.5625 = \mathbf{0.211}$$

**(b) Minor histocompatibility antigens.** HLA identity means donor T cells and recipient cells share the *presenting* molecules — so MHC restriction is satisfied and the donor T cells can read recipient cells perfectly well. What they read are peptides from the thousands of ordinary polymorphic genes where donor and recipient differ. Those peptides were **never present in the donor's thymus**, so no tolerance was imposed on them ([4.3](04-03-self-tolerance-regulation.md)). GVHD is therefore not a failure of matching — it is normal, correctly restricted T-cell recognition of genuinely foreign peptide.

**(c)** Alloreactive fraction:

$$f_{\text{allo}} \approx N_p f = 10^{4}\times 10^{-6} = 10^{-2}$$

$$10^{-2}\times 10^{9} = \mathbf{10^{7}\ \text{alloreactive T cells transferred}}$$

For a single conventional antigen at $f = 10^{-6}$, the graft carries $10^{-6}\times 10^{9} = 10^{3}$ specific cells. **A ten-thousandfold difference, transferred on day zero with no priming lag** — which is why acute rejection and acute GVHD are fast and violent while a primary response to a new pathogen takes a week ([4.2](04-02-immunological-memory-vaccines.md)).

**P3 (a)**

$$\mathbb{E}[\text{clones}] = uN = 10^{-7}\times 10^{9} = \mathbf{100}$$

$$P(\text{none}) = e^{-100} \approx 10^{-43}$$

**Escape variants are not a risk; at this size they are a certainty.**

**(b)** Set $uN = \ln 2 \approx 0.69$, or more simply $uN \approx 1$:

$$N \approx \frac{1}{u} = 10^{7}\ \text{cells}$$

$$V = \frac{10^{7}}{10^{9}\ \text{cells cm}^{-3}} = 10^{-2}\ \text{cm}^{3} = 10\ \text{mm}^{3} \;\Rightarrow\; d \approx \sqrt[3]{10} \approx \mathbf{2\ \text{mm}}$$

**By the time a tumor is the size of a peppercorn — years before imaging finds it — the escape mutant already exists.** Every clinically detected tumor is therefore being treated *after* the relevant variation has arisen.

**(c) What the therapy did.** Anti-PD-1 released the brake on tumor-infiltrating CD8 cells ([3.5](03-05-helper-t-cells-polarization.md), [4.1](04-01-cytotoxic-t-cells.md)), which killed the MHC-I-positive majority. That is a response — and it is also **a selection event**: removing 99-plus percent of the population while sparing the $\beta_2$-microglobulin-null clones enormously enriches them. The relapse is not a new mutation, it is the outgrowth of the standing variation quantified in (a). **Therapy applied the selection pressure; it did not generate the resistance** — precisely the structure of [evolution-ecology 1.2](../../evolution-ecology/lessons/01-02-modes-of-selection.md), and the mirror image of the germinal center of [3.3](03-03-germinal-centers-affinity-maturation.md), where we *want* selection on standing variation to run.

**Which arm the variant is now vulnerable to: NK cells.** Total loss of $\beta_2$-microglobulin abolishes all class-I surface expression, so every NK inhibitory receptor reading MHC-I goes unengaged while activating receptors read tumor stress ligands — the missing-self logic of [1.4](01-04-inflammation-innate-effectors.md). **The escape from one arm is the entry condition for the other**, which is the therapeutic rationale for combining NK-directed agents with checkpoint blockade, and is also why the commoner clinical escape is *partial* downregulation that threads between the two.

</details>

## Flashback

**From Lesson 3.5 (Helper T cells & subset polarization):** A 9-year-old has had disseminated infection with *Mycobacterium avium* and non-typhoidal *Salmonella*, but recovered normally from varicella, measles and a helminth infection. Antibody titres are normal; CD4 and CD8 counts are normal; his dendritic cells mature and express B7 normally in vitro. Sequencing finds a loss-of-function mutation in the IL-12 receptor β1 chain.

(a) Which step of CD4 activation has failed, in the signal 1 / signal 2 / signal 3 scheme, and which transcription factor and effector cytokine are consequently missing?
(b) Why do *these* organisms fail while viruses and helminths do not?
(c) His antigen-specific CD4 cells expand to normal numbers after stimulation. Explain why normal expansion is useless here.

<details>
<summary>Solution</summary>

**(a) Signal 3 — the polarizing cytokine.** Signal 1 (peptide–MHC II through the TCR) and signal 2 (CD28–B7, and his dendritic cells supply it normally) are intact. IL-12 is the **Th1-polarizing signal 3**; without a functional receptor the naive CD4 cell cannot induce **T-bet**, and therefore does not become an IFN-γ-producing Th1 cell.

**(b) Because these organisms live inside macrophage phagosomes.** Mycobacteria and non-typhoidal *Salmonella* survive ingestion by arresting phagosome maturation — they are only killed once the macrophage is **activated by IFN-γ from a Th1 cell**, which restores phagolysosomal fusion and the oxidative burst ([1.4](01-04-inflammation-innate-effectors.md)). No Th1, no macrophage activation, no killing.

Viruses do not need this arm: CD8 CTLs recognize peptide on class I from the cytosolic pathway ([2.5](02-05-antigen-processing-presentation.md), [4.1](04-01-cytotoxic-t-cells.md)) and require IL-12 far less absolutely. Helminths are a **Th2** problem — IL-4 and GATA3, a different branch entirely, and untouched by this mutation. **The infection names the branch**, exactly as it names the layer in the body of this lesson.

**(c) Because CD4 cells are a decision layer, not an effector one.** Expansion is driven by signals 1 and 2 and is working fine; what the cell does *after* expanding is set by signal 3. A large clone of unpolarized or wrongly polarized CD4 cells delivers no IFN-γ and therefore does nothing to a phagosomal pathogen. **Quantity of help is not the same as kind of help** — which is the whole reason polarization is a separate signal rather than a consequence of activation. (This is the mechanism of Mendelian susceptibility to mycobacterial disease, and it is why the therapy is recombinant IFN-γ: it supplies the missing output directly, bypassing the broken decision.)

</details>

## Connections

- **Backward:** this lesson is an index to the whole course — [1.4](01-04-inflammation-innate-effectors.md)'s oxidase and NK missing-self, [1.5](01-05-complement-system.md)'s MAC, [2.3](02-03-t-cell-receptor.md)'s MHC-biased docking (which *is* alloreactivity), [2.4](02-04-mhc-molecules.md)'s haplotypes, [2.5](02-05-antigen-processing-presentation.md)'s class-I pathway, [3.4](03-04-antibody-effector-functions.md)'s FcRn half-life, [3.5](03-05-helper-t-cells-polarization.md)'s checkpoints, and [4.3](04-03-self-tolerance-regulation.md)'s trade-off, which is the through-line.
- **Sideways:** the escape calculation is selection on standing variation ([evolution-ecology 1.2](../../evolution-ecology/lessons/01-02-modes-of-selection.md), [1.4](../../evolution-ecology/lessons/01-04-drift-ne-gene-flow.md)); tumor mutational burden as a response predictor comes from mismatch repair ([genetics 3.3](../../genetics/lessons/03-03-dna-repair.md)); the oncogenic lesions themselves are [molecular-cell-biology 3.4](../../molecular-cell-biology/lessons/03-04-cancer-failure-of-control.md); HLA association testing is the association-study machinery of [genetics 4.4](../../genetics/lessons/04-04-linkage-disequilibrium-gwas.md).
- **Forward:** nothing in this course — see the [syllabus](../syllabus.md) for the four boss problems, which are best attempted now that every mechanism is on the table.

**Where the course ends.** The design we have traced is layered because no single strategy covers the space: barriers exclude, germline-encoded receptors recognize a few dozen conserved microbial classes in minutes, and a somatically generated repertoire of order $10^{11}$ manufactures specificity on demand in days and then remembers it. Everything expensive about that design — the randomness, the editing, the two-signal interlocks, the brakes — is the cost of making disposable specificity safe.

Three problems remain genuinely hard, and each is hard for a reason this course can name. **A durable HIV vaccine** must elicit broadly neutralizing antibodies against a hypervariable, glycan-shielded envelope, which requires germinal-center selection ([3.3](03-03-germinal-centers-affinity-maturation.md)) to follow a mutational path it does not naturally take — while the virus destroys the CD4 help that drives it. **Antigen-specific tolerance induction** — switching off one response without touching the rest — is the therapy that would resolve autoimmunity, allergy and transplantation at once, and it is hard because tolerance is enforced by thresholds and competition rather than by an addressable per-antigen switch. **Solid-tumor immunotherapy** fails where a target is a self-derived surface antigen, because MHC-independent recognition ([2.3](02-03-t-cell-receptor.md)) is confined to the surface while the interesting mutations are usually inside.

All three are the same difficulty in different clothes: the immune system's power comes from generating specificity blindly and then editing it, and we still cannot aim that process at a chosen target on command.
