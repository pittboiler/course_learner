# Immunology · Lesson 4.4: Autoimmunity & hypersensitivity

> ⏱ ~15 min · Module 4: Cellular Immunity, Memory & Immune Pathology · Builds on: [4.3](04-03-self-tolerance-regulation.md), [3.4](03-04-antibody-effector-functions.md), [3.5](03-05-helper-t-cells-polarization.md) · Unlocks: [4.5](04-05-immunodeficiency-tumor-transplant.md)

## Why this matters

[4.3](04-03-self-tolerance-regulation.md) ended on a trade-off: tolerance is a **threshold**, set at a compromise, so a repertoire tight enough to never attack you would also be too narrow to cover the pathogen world. Autoimmunity is what that compromise costs. This lesson is the bill.

But it is not a disease list, and the reason is worth stating up front. **The adaptive system has only a handful of ways to deliver damage, and you have already met every one of them.** IgE sitting on mast cells ([3.4](03-04-antibody-effector-functions.md)); IgG stuck to a cell surface, pulling in complement ([1.5](01-05-complement-system.md)) and NK cells ([1.4](01-04-inflammation-innate-effectors.md)); IgG bound to something *soluble*, making a lattice that has to go somewhere; and T cells ([3.5](03-05-helper-t-cells-polarization.md), [4.1](04-01-cytotoxic-t-cells.md)). That is four. The Gell–Coombs classification is not a taxonomy of diseases — **it is an enumeration of the effector deliveries the system possesses**, and once you see it that way it stops being something to memorize.

The payoff is diagnostic and mechanical: **the clock tells you which delivery fired.** Minutes means preformed granules. Days means cells had to be recruited. Nothing in between is a coincidence.

## The idea

**Two independent axes.** A disease of immunity has a *target* problem and a *delivery* problem, and they are separate questions:

- **Autoimmunity** answers *why is the target wrong* — which tolerance mechanism from [4.3](04-03-self-tolerance-regulation.md) failed.
- **Hypersensitivity** answers *how is the damage delivered* — which of the four effector routes is doing the harm.

So type 1 diabetes is "molecular mimicry and/or weak thymic antigen display" on one axis and "type IV" on the other; an anaphylactic peanut reaction has a perfectly *foreign* target and is still a disease of immunity, because the delivery is catastrophic. Neither axis determines the other. **A disease list conflates them; the two-axis reading predicts.**

**How tolerance breaks, each traced to a mechanism you already have.**

- **Molecular mimicry.** Negative selection deletes clones that bind self *too strongly*; by construction it leaves behind clones that bind self *weakly*. A microbial epitope resembling a self epitope engages one of those survivors with high affinity, in a tissue full of PAMPs, so signal 2 is present ([3.5](03-05-helper-t-cells-polarization.md)). The clone activates on the microbe — and once activated, its threshold falls and it no longer needs costimulation, so it can now be re-triggered by the weak self antigen. **The clean case is rheumatic fever:** antibodies raised against streptococcal M protein cross-react with cardiac myosin and valve glycoproteins, weeks after a pharyngitis that has already cleared.
- **Bystander activation.** Infection supplies signal 2 in a tissue where self antigen is supplying signal 1. Anergy is bypassed not by changing the receptor but by changing the context.
- **Release of sequestered antigen.** Immune-privileged sites hold antigens the thymus never displayed, so there is no central tolerance to them at all. Trauma to one eye can drive sympathetic ophthalmia in the other.
- **Epitope spreading.** The first wave of destruction releases *new* self proteins into a tissue whose APCs are now fully licensed. The response broadens from one epitope to many. This is why autoimmunity is progressive, and why early intervention beats late.
- **Failed regulation.** Defective Treg function or defective AIRE-driven thymic display of tissue antigens — IPEX and APS-1 are the human knockouts that prove both ([4.3](04-03-self-tolerance-regulation.md)).

**Three autoimmune diseases where the mechanism is genuinely known**, each landing on a different effector:

| Disease | Autoantigen | What the effector does | Type |
|---|---|---|---|
| Type 1 diabetes | insulin, GAD65, IA-2 | CD8 CTLs kill β cells ([4.1](04-01-cytotoxic-t-cells.md)) | IV |
| Myasthenia gravis | acetylcholine receptor | antibody **blocks** and internalizes the receptor | II |
| Graves disease | TSH receptor | antibody **stimulates** the receptor | II |

Graves is the one to dwell on. The antibody is an *agonist* — it mimics the hormone. And because it is an antibody, it is invisible to the negative feedback that would normally shut the axis down: T3 and T4 suppress pituitary TSH, but nothing suppresses an IgG. **The lesion is not a destroyed cell; it is a severed control loop** ([physiology 3.4](../../physiology/lessons/03-04-endocrine-axes.md)). Type 1 diabetes is worth a second look too: one of the strongest non-MHC risk loci is a promoter variant of the insulin gene that sets how much insulin the thymic medulla displays. Lower thymic insulin, weaker negative selection, higher risk — a genetic risk allele whose mechanism is literally [4.3](04-03-self-tolerance-regulation.md)'s AIRE step.

## The formal version

The quantitative spine of this lesson is one function, and it governs types I and III alike.

**Cross-linking is bell-shaped in dose.** Let a bivalent ligand at concentration $[A]$ bind receptor sites with single-site dissociation constant $K_d$. Site occupancy is the standard result from [biophysics 2.3](../../biophysics/lessons/02-03-ligand-binding-occupancy.md):

$$f = \frac{[A]}{[A] + K_d}$$

A ligand only *cross-links* if one arm is bound **and** its second arm finds a **free** neighbouring site. To leading order those two requirements are independent, so the fraction of sites held in cross-links goes as

$$\boxed{\;X \;\propto\; f\,(1-f)\;}$$

*In words: you need both a partner and a vacancy, so signalling is killed by too little ligand and by too much.* $X$ is maximal at $f = 1/2$, i.e. at $[A] = K_d$, and falls symmetrically on a log-concentration axis. At $[A] = 100K_d$ every receptor is capped by its own private ligand and nothing is bridged.

**The same arithmetic, one level up, is the antigen–antibody lattice.** Let antigen carry $n$ epitopes and IgG carry 2 Fab arms, and define the arm-to-epitope ratio

$$r = \frac{2[\text{Ab}]}{n[\text{Ag}]}$$

*In words: $r$ counts binding arms per available epitope.* At $r \ll 1$ (antigen excess) each antibody is saturated by two separate antigens and the complex stops at $\text{Ag}_2\text{Ab}$. At $r \gg 1$ (antibody excess) each antigen is coated in antibodies all dangling free arms. Only near $r \approx 1$ — **equivalence** — does the lattice grow large.

**And that is where the pathology comes from, because clearance has a valency threshold.** C1q needs several clustered Fc regions to fix complement ([3.4](03-04-antibody-effector-functions.md)); C3b then lets erythrocyte CR1 ferry the complex to hepatic and splenic macrophages. A complex carrying one or two IgG molecules clears **none** of those bars.

$$\text{antigen excess} \;\Rightarrow\; \text{small complexes} \;\Rightarrow\; \text{too few clustered Fc} \;\Rightarrow\; \text{not cleared} \;\Rightarrow\; \text{deposited}$$

*In words: the complexes that are pathogenic are precisely the ones the clearance machinery cannot see.* Where they deposit is set by plumbing rather than immunology — high hydrostatic filtration pressure and turbulent flow, so glomerular capillaries ([physiology 3.1](../../physiology/lessons/03-01-glomerular-filtration-clearance.md)), synovium, skin venules and vessel bifurcations. Cationic antigens do worse because the glomerular basement membrane is anionic.

**The four types, stated by mechanism:**

| Type | Effector | Target | Damage route | Onset |
|---|---|---|---|---|
| I | IgE on FcεRI | soluble allergen | preformed granule mediators, then lipid mediators | seconds–minutes, late phase 6–12 h |
| II | IgG/IgM | **fixed** cell-surface or matrix antigen | complement lysis, opsonization, ADCC — or block/stimulate | hours–days |
| III | IgG | **soluble** antigen | deposited complexes → C5a → neutrophils | hours–days, after antibody appears |
| IV | T cells | peptide–MHC on tissue cells | Th1 → IFN-γ → macrophages; CTL killing | 24–72 h |

The single distinction between II and III is whether the antigen was **anchored or floating**. Same isotype, same complement, different geography.

## Picture

![Four rows, one per hypersensitivity type, sharing a single logarithmic time axis: each row gives the effector molecule, a schematic of what binds what, the route by which tissue is damaged, and a bar marking when damage appears, with the bars marching rightward from minutes for the IgE mast-cell route to one to three days for the T-cell route.](assets/04-04-fig1.svg)

Read it down the right-hand column first. The bars march rightward for a reason you can state: preformed granules need no synthesis, antibody-mediated damage needs complement and phagocytes recruited to a target, complexes must first *be made* before they can deposit, and T cells must be summoned and then must summon macrophages.

## Worked examples

### 1. Why a bigger dose is not always a bigger reaction

A mast cell carries $R_T = 2\times10^{5}$ FcεRI receptors, all loaded with IgE. In a peanut-allergic patient, suppose 1 percent of that IgE is peanut-specific, so $N = 2000$ specific sites. Take a bivalent allergen epitope pair with $K_d = 10^{-9}$ M, and a degranulation threshold of a few hundred cross-linked receptors. Cross-linked sites: $C = N f(1-f)$.

| $[A]$ | $f$ | $f(1-f)$ | $C$ | Fires? |
|---|---|---|---|---|
| $10^{-11}$ M | $0.0099$ | $0.0098$ | $\approx 20$ | no |
| $10^{-9}$ M | $0.500$ | $0.250$ | $500$ | **yes** |
| $10^{-7}$ M | $0.990$ | $0.0098$ | $\approx 20$ | no |

Two things fall out. First, **only 500 of 200,000 receptors — a quarter of one percent — need bridging.** That is why nanogram quantities of allergen matter: the threshold is a rounding error on the receptor count. Second, the response is bell-shaped, and the peak sits at $[A] = K_d$.

Now change one number: if only 0.1 percent of the patient's IgE is peanut-specific, $N = 200$ and the peak is $C = 50$ — potentially sub-threshold at every dose. **Severity tracks the allergen-specific fraction of IgE, not the total IgE**, which is exactly what allergy testing measures and exactly why total IgE is a poor predictor.

The honest caveat: this is a per-cell caricature. In a whole patient a larger dose reaches more mast cells across more tissue, so the *systemic* dose–response is not bell-shaped even though the per-cell one is.

### 2. Serum sickness: the delay is the primary response

A patient with a snakebite receives 200 mg of equine antivenom (foreign IgG, 150 kDa) on day 0 into roughly 3 L of plasma:

$$[\text{Ag}]_0 = \frac{0.200\ \text{g}}{150{,}000\ \text{g/mol} \times 3\ \text{L}} = 4.4\times10^{-7}\ \text{M} = 0.44\ \mu\text{M}$$

Foreign IgG is catabolized with a half-life near 6 days, so by day 9 (1.5 half-lives, factor $2^{-1.5} = 0.354$):

$$[\text{Ag}]_9 = 0.354 \times 4.4\times10^{-7} = 1.6\times10^{-7}\ \text{M}$$

Meanwhile the patient mounts a **primary** anti-horse-IgG response, which by [4.2](04-02-immunological-memory-vaccines.md) does not produce useful antibody until day 5–7. Take the antigen to carry $n = 6$ accessible epitopes; equivalence needs $2[\text{Ab}] = n[\text{Ag}]$:

$$[\text{Ab}]_{\text{eq}} = 3 \times 1.6\times10^{-7} = 4.7\times10^{-7}\ \text{M} \;\;\Longrightarrow\;\; 4.7\times10^{-7} \times 150{,}000 = 0.071\ \text{g/L} = 7\ \text{mg/dL}$$

Total serum IgG is about 1000 mg/dL. **A specific titre under one percent of total IgG is enough to sweep the system through equivalence** — which is why serum sickness needs no memory, no unusual patient, and no large antibody response. Fever, urticaria, arthralgia and glomerulonephritis appear around day 8–12, then resolve on their own as antibody excess finally makes complexes large enough to clear.

The prediction worth extracting: **on a second exposure to the same antiserum, memory antibody appears in 1–3 days**, so the ratio $r$ sweeps through the pathogenic window almost immediately — accelerated serum sickness. The delay in the primary case was never a slow effector. It was the lag of the primary response, borrowed intact from [4.2](04-02-immunological-memory-vaccines.md).

## Watch out

- **You might think type II and type III are distinguished by the tissue or the isotype, but they are distinguished by whether the antigen was anchored.** Both can wreck the same glomerulus with the same IgG and the same complement. Goodpasture disease targets a *fixed* matrix antigen (collagen IV) and stains as a smooth linear band along the basement membrane; lupus nephritis deposits *pre-formed soluble* complexes and stains lumpy and granular. One immunofluorescence pattern, two types, and the mechanism is readable off the picture.
- **You might think a type I wheal and a type IV induration are the same kind of swelling, but one is fluid and the other is cells.** The immediate wheal is plasma leaking through mediator-widened venules — soft, and gone in an hour. The tuberculin reaction at 48 h is a firm infiltrate of T cells and macrophages that had to be recruited. This is why the PPD test is read by palpating the *induration* and ignoring the erythema: you are measuring cells, not oedema.
- **You might think an MHC association is a mechanism, but it usually is not.** HLA-B27 raises ankylosing spondylitis risk by a large factor, yet most carriers never develop it and the mechanism is still unresolved — the association is a statistical fact awaiting an explanation. Contrast celiac disease, where the mechanism *is* known: tissue transglutaminase deamidates gliadin glutamines to glutamate, creating the negatively charged anchor residues that fit the HLA-DQ2 pocket ([2.4](02-04-mhc-molecules.md)). Same kind of association line in a table; completely different epistemic status.
- **The classification leaks, and pretending otherwise is worse than admitting it.** Lupus is types II and III together; rheumatoid arthritis runs III and IV; celiac is type IV damage with a diagnostic *antibody*. The classification is by effector, not by biomarker, and several real diseases use more than one.

## One-liner

> Autoimmunity says the target is wrong; hypersensitivity says which of the four deliveries fired — and the clock on the wall tells you which, because preformed granules take minutes and recruited cells take days.

## Problems

**P1 (🟢)** A mast cell carries $N = 1000$ allergen-specific IgE sites, $K_d = 10^{-9}$ M, bivalent allergen, degranulation threshold 100 cross-linked sites. (a) Compute $C = Nf(1-f)$ at $[A] = 10^{-10}$, $10^{-9}$ and $10^{-8}$ M and say which doses fire. (b) Omalizumab is an anti-IgE antibody that binds the IgE Fc region FcεRI would occupy, removing 95 percent of free IgE from circulation before it can arm mast cells. Compute the new peak $C$ and explain the drug in one sentence.

**P2 (🟡)** A woman with untreated Graves disease gives birth. (a) Predict what happens to the neonate, naming the transport mechanism from [3.4](03-04-antibody-effector-functions.md). (b) Estimate how long it lasts, given a maternal IgG half-life of about 21 days in the infant. (c) A second woman has type 1 diabetes. Predict what her neonate experiences, and state the general rule this comparison gives you for classifying an autoimmune disease at the bedside.

**P3 (🔴, optional)** A patient receives a chimeric therapeutic monoclonal antibody; at day 10 the free drug concentration is $2\times10^{-7}$ M and the drug carries $n = 4$ accessible foreign epitopes. (a) Compute the anti-drug antibody concentration at equivalence, in M and in mg/dL (150 kDa). (b) The patient is at 100-fold antigen excess. Explain, using the clearance threshold, why this produces vasculitis and nephritis rather than uneventful clearance. (c) Name the one change to the drug that would remove the problem, and say which lesson's principle it exploits.

<details>
<summary>Solutions</summary>

**P1 (a)** $f = [A]/([A]+K_d)$:

| $[A]$ | $f$ | $f(1-f)$ | $C$ | vs. threshold 100 |
|---|---|---|---|---|
| $10^{-10}$ M | $10^{-10}/1.1\times10^{-9} = 0.0909$ | $0.0826$ | $82.6$ | below — no |
| $10^{-9}$ M | $0.500$ | $0.250$ | $250$ | **above — fires** |
| $10^{-8}$ M | $10^{-8}/1.1\times10^{-8} = 0.9091$ | $0.0826$ | $82.6$ | below — no |

The two failing doses are symmetric about the peak on a log axis, as $f(1-f)$ demands: a tenfold under-dose and a tenfold over-dose give identical cross-linking.

**(b)** With 95 percent of IgE sequestered, $N = 0.05 \times 1000 = 50$, so the peak value is

$$C_{\max} = 50 \times 0.25 = 12.5 \ll 100$$

**No dose of allergen can now reach threshold.** The drug does not block the allergen and does not block the receptor — it removes the *supply* of arming IgE, and because cross-linking scales linearly in $N$ while the threshold is fixed, a 20-fold cut in specific IgE takes the entire bell curve under the bar.

**P2 (a)** Graves autoantibody is a **stimulating IgG** against the TSH receptor. IgG — and only IgG — crosses the placenta, actively, via **FcRn** ([3.4](03-04-antibody-effector-functions.md)). The neonate is therefore born with maternal anti-TSHR IgG in circulation and develops **transient neonatal hyperthyroidism**: tachycardia, poor weight gain, goitre. Nothing was inherited; a molecule was delivered.

**(b)** The infant makes none of this antibody, so the titre decays with the IgG half-life:

$$\text{after } t = 21k \text{ days, titre } = 2^{-k}$$

Three half-lives (about 9 weeks) leaves $1/8$ of the starting titre; four leaves $1/16$. Since the effect is threshold-like, resolution over roughly **1–3 months** is expected — and the disease is self-limiting without any change in the child's own immune system.

**(c)** Type 1 diabetes is **CTL-mediated** (type IV). **T cells do not cross the placenta.** The neonate is unaffected. Hence the rule:

> A maternal autoimmune disease that transfers to the newborn and then resolves on an IgG decay curve is **antibody-mediated**; one that does not transfer is **T-cell-mediated**.

Neonatal myasthenia gravis (blocking anti-AChR IgG, transient) is the same experiment run on a different receptor, and it confirms the rule from the type II side.

**P3 (a)** Equivalence is $2[\text{Ab}] = n[\text{Ag}]$, so

$$[\text{Ab}]_{\text{eq}} = \frac{n[\text{Ag}]}{2} = \frac{4 \times 2\times10^{-7}}{2} = 4\times10^{-7}\ \text{M}$$

$$4\times10^{-7}\ \text{mol/L} \times 150{,}000\ \text{g/mol} = 0.060\ \text{g/L} = 60\ \text{mg/L} = 6.0\ \text{mg/dL}$$

Again well under one percent of total serum IgG.

**(b)** At 100-fold antigen excess, $r \approx 0.01$: every antibody arm has its own antigen and complexes stall at roughly $\text{Ag}_2\text{Ab}$ — **one Fc region per complex.** C1q needs several clustered Fc regions to fix complement, and CR1-mediated ferrying by erythrocytes needs the C3b that only complement fixation supplies. The complex therefore fails both clearance bars, stays in circulation, and is removed only by being filtered out mechanically — at glomerular capillaries, synovium and skin venules. *There* it finally becomes locally concentrated enough to fix complement, releasing C5a, which recruits neutrophils whose granule contents damage the vessel wall. The lesion is neutrophilic vasculitis and glomerulonephritis.

The general statement, worth keeping: **the pathogenic complexes are the ones small enough to escape clearance and large enough to lodge — a window, not a monotone.**

**(c)** **Fully humanize the antibody.** The whole cascade requires that the drug present foreign epitopes at all; a fully human framework leaves little for a primary response to see, so anti-drug antibody stays low and $r$ never approaches the pathogenic window. This exploits [2.1](02-01-antigens-antibody-structure.md)'s point that antibodies bind surface shape — the murine framework of a chimeric antibody is a large foreign surface, and removing it removes the antigen rather than the effector. (Immunogenicity does not fall to zero: anti-idiotype responses against the human CDR loops remain possible, because those loops are unique to the drug.)

</details>

## Flashback

**From Lesson 4.3 (self-tolerance & immune regulation):** A knock-in mouse expresses a single TCR whose affinity for a self-peptide–MHC complex sits **just below** the negative-selection threshold.

(a) What is this thymocyte's fate, and why is "just below threshold" the *expected* outcome of the selection design rather than an accident?
(b) The mouse is infected with a microbe carrying a peptide that engages the same TCR with 30-fold higher affinity, in a tissue where innate sensing has fully licensed the APCs. Predict what happens, and name the two peripheral mechanisms that must now hold the line.
(c) The same mouse is crossed onto a FoxP3-null background. Predict the outcome and name the human disease.

<details>
<summary>Solution</summary>

**(a)** It is **positively selected and exported.** The affinity window is the whole mechanism: a thymocyte must bind self-peptide–MHC well enough to be rescued from death by neglect, but not so well that it is deleted. A receptor sitting just under the deletion threshold clears the lower bar comfortably and misses the upper one — it is exactly what the window is built to keep.

And this is *not* a leak. Narrowing the window enough to remove such cells would delete a large slice of the repertoire, and the deleted slice is not chosen for uselessness — it is chosen for self-similarity, which is uncorrelated with pathogen coverage. **The peripheral repertoire is therefore stocked, by design, with weakly self-reactive clones**, and tolerance is a threshold rather than a guarantee.

**(b)** The microbial peptide clears the activation threshold, and because the APC is licensed, **signal 2 is present** — so the clone is genuinely activated, proliferates and differentiates. The critical consequence: an activated or memory T cell has a *lower* activation threshold than a naive one and no longer requires costimulation. The clone can now be restimulated by the weak self peptide that could never have primed it. This is **molecular mimicry**, and it is the bridge from tolerance into 4.4.

The two peripheral mechanisms that must contain it:

1. **Anergy and activation-induced cell death** — self antigen presented by resting tissue cells supplies signal 1 without signal 2, which inactivates or deletes rather than activates.
2. **Regulatory T cells** — suppression through IL-10 and TGF-β, CTLA-4-mediated stripping of B7 off APCs, and IL-2 consumption.

Note the asymmetry: neither is a hard stop. Both are damping terms, so the outcome is probabilistic — which is the mechanistic reason autoimmunity is common rather than aberrant.

**(c)** No FoxP3 means no functional Tregs, so half the peripheral machinery is gone and the self-reactive clone runs unchecked. Expect **early, aggressive, multi-organ autoimmunity**. The human disease is **IPEX** (immune dysregulation, polyendocrinopathy, enteropathy, X-linked) — the FoxP3 loss-of-function phenotype, and the cleanest available proof that peripheral tolerance is not a redundant backup to thymic selection but a load-bearing second mechanism.

</details>

## Connections

- **Backward:** this lesson is [3.4](03-04-antibody-effector-functions.md)'s isotype-to-effector map read as a pathology — types I, II and III *are* IgE-FcεRI, complement-plus-ADCC, and Fc clustering, applied to the wrong antigen. [1.5](01-05-complement-system.md) supplies the damage in II and III; [4.1](04-01-cytotoxic-t-cells.md) supplies it in IV; [4.3](04-03-self-tolerance-regulation.md)'s threshold argument supplies the reason any of it happens.
- **Forward:** [4.5](04-05-immunodeficiency-tumor-transplant.md) is this lesson applied deliberately and accidentally at once — checkpoint blockade releases the same brakes [3.5](03-05-helper-t-cells-polarization.md) named, so its autoimmune toxicity is a prediction rather than a side effect; and graft rejection is type II (hyperacute, preformed anti-HLA antibody) plus type IV (acute cellular) in the same organ.
- **Sideways:** the cross-linking function $f(1-f)$ is [biophysics 2.3](../../biophysics/lessons/02-03-ligand-binding-occupancy.md)'s occupancy curve with one extra factor for "and a free neighbour", the same structure that gives every bridging assay its hook effect. Where complexes deposit is a filtration question, not an immunological one ([physiology 3.1](../../physiology/lessons/03-01-glomerular-filtration-clearance.md)); why a stimulating autoantibody is worse than a destructive one is a control-loop question ([physiology 3.4](../../physiology/lessons/03-04-endocrine-axes.md)); and the Th1/Th2 lock-in that fixes an allergic phenotype for life is the mutually-repressing bistable switch of [molecular-cell-biology 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md).
