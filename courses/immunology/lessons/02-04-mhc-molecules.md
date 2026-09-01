# Immunology · Lesson 2.4: MHC molecules

> ⏱ ~15 min · Module 2: Antigen Recognition · Builds on: [2.3](02-03-t-cell-receptor.md), [1.4](01-04-inflammation-innate-effectors.md) · Unlocks: [2.5](02-05-antigen-processing-presentation.md) (antigen processing & presentation)

## Why this matters

[2.3](02-03-t-cell-receptor.md) established that a T cell reads a peptide displayed on a host molecule, and that CD8 binds one class of that molecule while CD4 binds the other. This lesson is about the display molecule itself — and it splits cleanly into two halves.

The first half is structural and almost mechanical: **two platforms, one closed and one open, and every functional difference between them falls out of that one structural fact.** Class I closes its groove, so it takes short peptides and is expressed everywhere; class II leaves the groove open, so it takes long ones and is restricted to a few cell types. You should be able to derive the biology rather than memorize it.

The second half is the interesting one. **MHC is the most polymorphic locus in the human genome** — and the polymorphism is not spread evenly over the protein, it is concentrated almost exactly in the residues that touch the peptide. That is not an accident and it is not neutral variation. It is a **population-level defense**, and the argument for why is genuinely quantitative: a monomorphic population is one escape mutation away from being universally susceptible. Everything downstream — transplant matching ([4.5](04-05-immunodeficiency-tumor-transplant.md)), vaccine non-responders ([4.2](04-02-immunological-memory-vaccines.md)), the HLA associations of autoimmune disease ([4.4](04-04-autoimmunity-hypersensitivity.md)) — is a consequence of that one design decision.

## The idea

**A cell needs to publish a summary of its contents, and the summary has to be short.** A groove that binds a peptide *is* the publishing format, and the two formats differ in one respect only: whether the ends of the groove are walled off.

**Class I: closed groove.** Conserved tyrosines at each end hydrogen-bond the peptide's free amino and carboxyl termini, so the peptide must *fit* — 8 to 10 residues, essentially always 9. Two consequences follow immediately:

1. **The length is forced**, so the register is unambiguous and prediction is tractable.
2. **The molecule is a compact, self-contained reporter**, cheap enough to put on every nucleated cell. Which is exactly what you want, because [2.3](02-03-t-cell-receptor.md)'s whole point was that the inside of *any* cell must be auditable.

**Class II: open groove.** No end walls; the peptide runs through and hangs out both ends, 13 to 25 residues. Binding is to the peptide *backbone along the groove*, not to the termini. Consequences:

1. **Length is unconstrained**, so the same protein can yield a family of nested peptides sharing a 9-residue core.
2. **Loading requires a dedicated compartment and a chaperone** ([2.5](02-05-antigen-processing-presentation.md)), which is expensive, which is why class II is confined to professional antigen-presenting cells rather than everywhere.

**Anchor residues are how one groove binds thousands of different peptides while still being selective.** The groove floor has deep pockets at fixed positions. A peptide binds if the side chains at those positions fit the pockets — for HLA-B\*27:05, a positively charged arginine at position 2; for HLA-A\*02:01, a small hydrophobic residue at 2 and 9. **Everything between the anchors is free**, which is exactly the point: the anchors hold the peptide down and the middle bulges up for the TCR to read. One allele therefore binds on the order of a percent of all possible 9-mers, in a well-defined motif.

**Now the fact that organizes the rest of the lesson.** Change the pocket residues and you change the motif — a different slice of the peptide universe gets displayed. And the human population has done exactly that, thousands of times over. **The IMGT/HLA database catalogues tens of thousands of HLA alleles**, with HLA-B the single most variable locus in the genome, and when you map the variable positions onto the structure they land in the groove.

**Why polymorphism is a defense, in one sentence:** a pathogen escapes a T-cell response by mutating away the presented epitope, but which peptides are presented depends on the host's alleles, so **an escape mutation that works in one host is useless in the next.** In a monomorphic host population, one mutation works on everyone.

**A crucial corollary that people miss.** MHC molecules are not selective for foreign peptide — they present *whatever is around*, and in an uninfected cell that is overwhelmingly self peptide. A typical nucleated cell displays roughly $10^5$ class I molecules carrying on the order of $10^4$ distinct self peptides, and a viral epitope may occupy a few hundred of them. **The MHC molecule does no self/non-self discrimination whatsoever.** That job belongs entirely to the T-cell repertoire, and it is done by editing that repertoire in the thymus ([4.3](04-03-self-tolerance-regulation.md)).

## The formal version

**Domain architecture.**

| | Class I | Class II |
|---|---|---|
| Chains | one $\alpha$ chain (~45 kDa) + $\beta_2$-microglobulin (12 kDa) | $\alpha$ chain + $\beta$ chain, both membrane-anchored |
| Groove formed by | $\alpha 1 + \alpha 2$ | $\alpha 1 + \beta 1$ |
| Groove ends | **closed** | **open** |
| Peptide length | 8–10 (usually 9) | 13–25, nested |
| Ig-like domain | $\alpha 3$ | $\beta 2$ |
| Coreceptor | **CD8** binds $\alpha 3$ | **CD4** binds $\beta 2$ |
| Human loci | HLA-A, -B, -C | HLA-DP, -DQ, -DR |
| Expression | all nucleated cells | professional APCs, thymic epithelium; IFN-$\gamma$-inducible |
| Reports | the cytosol | the endosomal compartment |

*In words: one chain plus a borrowed invariant partner versus two real chains — and the coreceptor binds the domain that is **not** polymorphic, which is why CD4 and CD8 work across every allele you could inherit.*

**$\beta_2$-microglobulin is not MHC-encoded.** It sits on chromosome 15, is invariant, and is required for class I to fold and reach the surface. Lose it and you lose *all* class I — a fact that shows up in tumor escape ([4.5](04-05-immunodeficiency-tumor-transplant.md)), because one loss-of-function mutation in one non-MHC gene removes the entire CD8 surveillance channel at a stroke.

**Codominant expression.** Both the maternal and paternal alleles are expressed at every locus. So the number of *distinct display platforms* an individual has is a counting problem — and for class II it is subtler than it looks, because the $\alpha$ and $\beta$ chains are encoded separately and can pair **in trans** (a maternal $\alpha$ with a paternal $\beta$).

$$\text{class I (full heterozygote)} = 3 \text{ loci} \times 2 \text{ alleles} = 6$$

$$\text{class II (full heterozygote)} = \underbrace{2}_{\text{DR}} + \underbrace{2\times 2}_{\text{DQ}} + \underbrace{2 \times 2}_{\text{DP}} = 10$$

*In words: DRA is effectively monomorphic so DR gives one molecule per DRB allele, while DQ and DP have two variable chains each and every $\alpha$–$\beta$ combination assembles.* A full heterozygote therefore carries about **16 distinct MHC molecules**; a fully homozygous individual carries **6**. (Many haplotypes also carry a second expressed DRB gene — DRB3, DRB4 or DRB5 — which pushes the class II count higher still.)

**Peptide coverage.** Let $p$ be the probability that a random 9-mer carries the anchor motif of a given allele; empirically $p \approx 0.01$, i.e. roughly one peptide in a hundred. A protein antigen of length $L$ yields about $L$ overlapping 9-mers, so for a single allele:

$$P(\text{no epitope presented}) = (1-p)^{L} \approx e^{-pL}$$

$$\boxed{\;P(\text{individual with } k \text{ alleles presents nothing}) \approx \left(e^{-pL}\right)^{k} = e^{-pLk}\;}$$

*In words: your chance of having a hole in the repertoire for a given antigen falls exponentially in the number of distinct MHC molecules you carry — which is the individual-level payoff of heterozygosity.*

**Balancing selection, and the evidence for it.** The signature is genetic rather than immunological. Under neutrality, the ratio of nonsynonymous to synonymous substitution rates satisfies $d_N/d_S = 1$ — which is exactly the neutral-substitution result of [evolution-ecology 1.4](../../evolution-ecology/lessons/01-04-drift-ne-gene-flow.md), where the fixation rate equals the mutation rate and nothing else. Purifying selection gives $d_N/d_S < 1$; positive or diversifying selection gives $d_N/d_S > 1$.

For MHC class I, $d_N/d_S$ is **below 1 across most of the molecule and above 1 specifically at the ~57 codons lining the peptide-binding groove.** *In words: selection is actively rewarding amino-acid change at precisely the positions that determine which peptides are displayed, and forbidding it everywhere else.* That is about as clean a molecular signature of selection as exists.

Two mechanisms maintain it, both covered in [evolution-ecology 1.5](../../evolution-ecology/lessons/01-05-mutation-balance-of-forces.md):

- **Overdominance** — heterozygotes present a strictly larger peptide set, so neither allele can be eliminated. Documented in HIV: class I heterozygotes progress to AIDS more slowly than homozygotes.
- **Negative frequency dependence** — pathogens adapt to *common* alleles, so a rare allele is protective precisely because it is rare, and rises; as it becomes common the pathogen adapts and its advantage decays. This is the same rare-type-wins logic as prey colour morphs and self-incompatibility alleles.

**Haplotype inheritance.** The HLA loci sit within about 4 Mb on chromosome 6p, tightly linked, so recombination between them is rare ([genetics 2.2](../../genetics/lessons/02-02-linkage-recombination.md)). The whole set is inherited as a **haplotype**. Each child receives one paternal and one maternal haplotype, and for two siblings:

$$P(\text{identical at both haplotypes}) = \tfrac12 \times \tfrac12 = \tfrac14, \quad P(\text{share one}) = \tfrac12, \quad P(\text{share none}) = \tfrac14$$

*In words: full siblings are HLA-identical one time in four — which is why sibling donors dominate transplant matching and why unrelated matching requires registries of millions.* Certain allele combinations are also in strong linkage disequilibrium and travel together as **extended haplotypes** (the European A1–B8–DR3 haplotype is the classic case) — [genetics 4.4](../../genetics/lessons/04-04-linkage-disequilibrium-gwas.md).

**Non-classical MHC, in one line each.** HLA-E displays leader peptides cleaved from *other* class I molecules and is read by the NK receptor NKG2A — so HLA-E is a running self-report of "class I synthesis is normal," which is the molecular substrate of the missing-self logic from [1.4](01-04-inflammation-innate-effectors.md). CD1 is class-I-like but presents **lipids**, not peptides. MICA/MICB are stress-induced ligands for the activating NK receptor NKG2D.

## Picture

![Side-by-side comparison of MHC class I and MHC class II. On the left, class I is drawn as one alpha chain with an alpha-3 immunoglobulin domain plus a separate beta-2 microglobulin subunit, topped by the alpha-1 alpha-2 platform carrying a short peptide, with CD8 binding alpha-3. On the right, class II is drawn as two membrane-anchored chains with alpha-2 and beta-2 domains topped by an alpha-1 beta-1 platform carrying a longer peptide that extends past the platform on both sides, with CD4 binding beta-2. Below each molecule the groove is shown in side view as a channel: the class I channel has walls at both ends and holds exactly nine residues anchored at pockets P2 and P9, while the class II channel has no end walls and a longer peptide runs straight through and overhangs, anchored at P1, P4, P6 and P9. Small coral dots mark polymorphic peptide-contact residues along both grooves.](assets/02-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — counting platforms, and what a homozygous stretch costs).** A patient is heterozygous at HLA-A and HLA-C, homozygous at HLA-B, heterozygous at DRB1 and at both DQ chains, and homozygous across DP. (a) How many distinct class I and class II molecules do they express? (b) Compare their chance of failing to present *any* epitope from a 100-residue vaccine antigen to a full heterozygote's, taking $p = 0.01$.

**(a) Class I.** Count alleles per locus:

$$\text{HLA-A} = 2, \quad \text{HLA-B} = 1, \quad \text{HLA-C} = 2 \;\Longrightarrow\; \mathbf{5}\ \text{class I molecules}$$

**Class II.** DRA is monomorphic, so DR contributes one molecule per DRB1 allele; DQ has two variable chains that pair in cis and trans; DP is homozygous on both chains:

$$\underbrace{2}_{\text{DR}} + \underbrace{2 \times 2}_{\text{DQ}} + \underbrace{1 \times 1}_{\text{DP}} = \mathbf{7}\ \text{class II molecules}$$

Total: **12**, against a full heterozygote's 16.

**(b)** The class I channel is the one that matters for a CD8 response. With $L = 100$ and $p = 0.01$, a single allele fails with probability

$$(1 - 0.01)^{100} = e^{-1.005} = 0.366 .$$

$$\text{this patient } (k=5): \quad 0.366^{5} = \mathbf{0.0066} \qquad \text{full heterozygote } (k=6): \quad 0.366^{6} = \mathbf{0.0024}$$

**A single homozygous locus makes a repertoire hole 2.7 times more likely** — 0.66 percent versus 0.24 percent. Small in absolute terms, and that is the honest reading: **heterozygosity buys the individual a modest factor, not a dramatic one.** The dramatic benefit is at the population level, which is Example 2.

Compare the fully homozygous case, $k = 3$: $0.366^{3} = 0.049$, i.e. **5 percent of such individuals present nothing at all from this antigen** — a twentyfold higher non-responder rate than a full heterozygote. This is not a toy calculation: HLA-linked non-response to the hepatitis B surface-antigen vaccine is real and well documented, and it is the reason modern subunit vaccines are designed with enough epitope diversity that no common haplotype comes up empty.

**Example 2 (why you'd care — why a pathogen cannot escape a polymorphic population).** A virus can abolish presentation of a CD8 epitope with a single point mutation in that epitope, at a replicative fitness cost of about 5 percent per mutation. Consider an escape mutation directed at one HLA allele of frequency $f = 0.10$. (a) In what fraction of hosts does it help? (b) What happens in the rest? (c) What would the pathogen need to be universally pre-adapted, and what would that cost?

**(a)** Under Hardy–Weinberg, the fraction of hosts carrying at least one copy of the allele is

$$1 - (1-f)^2 = 1 - 0.9^2 = 1 - 0.81 = \mathbf{0.19}.$$

The escape mutation is advantageous in **19 percent** of hosts.

**(b)** In the other 81 percent the epitope was never presented by that allele in the first place, so the mutation confers no immune benefit and the 5 percent replicative cost is unopposed. It is selected *against* — and this is observed, not hypothetical: HLA-B\*57:01-driven escape mutations in HIV Gag **revert to wild type within months** of transmission to a host lacking B\*57:01. The virus is being pushed in opposite directions by successive hosts.

**(c)** To be pre-adapted to an arbitrary host, the virus would have to have escaped every epitope presented by every common allele. Take a conservative accounting: each of a host's 6 class I molecules presents a handful of epitopes from the viral proteome, and the common alleles across a population number in the tens. Suppose universal escape requires 20 such mutations. Multiplicatively:

$$0.95^{20} = e^{20 \ln 0.95} = e^{-1.026} = \mathbf{0.36}$$

**A universally escaped virus would replicate at 36 percent of wild-type fitness** — a 64 percent handicap that would be outcompeted by ordinary virus in every host it entered.

**That is the whole argument, and it is worth stating sharply.** In a monomorphic host population, $f = 1$: escape helps in 100 percent of hosts, one mutation sweeps, and the species has no CD8 response to that pathogen ever again. Polymorphism converts a **single** escape mutation into a **combinatorially large** set of mutually incompatible ones, each carrying its own fitness cost.

**The consequence is a selection pressure on the host that never lets up**, which is why $d_N/d_S > 1$ at the groove codons, why the MHC has more alleles than any other locus, and why the polymorphism is *ancient* — some human and chimpanzee MHC alleles are more closely related to each other than to other alleles within their own species. **Trans-species polymorphism is the strongest possible evidence for long-term balancing selection**, because it means these allelic lineages have been maintained for longer than the species have existed.

## Watch out

- **You might think MHC molecules select foreign peptides.** They do not discriminate at all — a healthy cell's class I molecules are loaded almost entirely with self peptide. Self/non-self discrimination is done by *which T cells exist*, and that is thymic selection ([4.3](04-03-self-tolerance-regulation.md)). Confusing the display with the discrimination makes tolerance look unnecessary; it is not.
- **You might expect polymorphism to be spread over the whole protein.** It is concentrated in the groove-lining residues, and the $\alpha 3$ and $\beta 2$ domains are conserved *because they must be* — a polymorphic CD8-binding site would break the coreceptor in half the population.
- **You might think heterozygosity is a large individual advantage.** It is a factor of a few, as Example 1 shows. The overwhelming benefit is to the population, through frequency-dependence. Do not oversell the individual case.
- **You might read "HLA-B27 causes ankylosing spondylitis."** It does not. Over 90 percent of patients carry B27, but only a small percent of B27 carriers ever develop the disease, and **for most HLA–disease associations the mechanism is unknown.** There are honourable exceptions where it is solved: celiac disease, where tissue transglutaminase deamidates gliadin and the resulting negative charges fit the DQ2 pockets; and abacavir hypersensitivity, where the drug binds inside the HLA-B\*57:01 F pocket and changes which self peptides are displayed. Those are mechanisms. "Odds ratio 50" is a statistic.
- **You might carry class I's strict 8–10-mer rule over to class II.** The open groove means class II epitopes come as nested families sharing a 9-residue core — which is why class II epitope prediction reports a core plus flanking residues, and why class II binding registers are genuinely ambiguous in a way class I registers are not.

## One-liner

> Class I closes its groove and reports the cytosol to CD8; class II opens it and reports the endosome to CD4 — and the peptide-contact residues of both are the most polymorphic in the genome, because a monomorphic population is one escape mutation from universal susceptibility.

## Problems

**P1 (🟢)** An individual is homozygous at HLA-A and HLA-C, heterozygous at HLA-B, homozygous at DRB1, and heterozygous at both DQ chains and both DP chains. (a) Count their distinct class I and class II molecules. (b) Name the single structural feature that makes the class II count harder to compute than the class I count.

**P2 (🟡, bridges to vaccine design in 4.2)** A subunit vaccine consists of one 60-residue protein domain. Take $p = 0.01$ as the probability that a random 9-mer fits a given class I allele's motif. (a) For a full class I heterozygote ($k = 6$), what fraction of recipients present no CD8 epitope from this antigen? (b) The developer proposes lengthening the immunogen to 240 residues. What does the non-responder fraction become? (c) A colleague objects that the model overstates the gain. Give the strongest version of that objection.

**P3 (🔴, bridges to evolution-ecology and to transplantation)** (a) Two full siblings are typed. What is the probability they are HLA-identical, and what is the probability that a patient with three full siblings has at least one identical sib? State the assumption the calculation makes and say which direction it biases the answer. (b) A new allele arises at HLA-B and reaches frequency $f = 0.02$. A pathogen circulating in the population is already escaped at all common alleles. Argue quantitatively why the rare allele's carriers are protected, and what happens to that protection as $f$ rises. (c) You sequence MHC class I from 200 individuals and measure $d_N/d_S = 3.1$ over the 57 groove-contact codons and $0.28$ over the remaining codons. Interpret both numbers against the neutral expectation.

<details>
<summary>Solutions</summary>

**P1 (a) Class I.** Alleles per locus: A = 1, B = 2, C = 1.

$$1 + 2 + 1 = \mathbf{4}\ \text{class I molecules}$$

**Class II.** DRA is monomorphic and DRB1 is homozygous, so DR gives one molecule. DQ and DP each have two variable chains, heterozygous at both, giving $2 \times 2 = 4$ combinations each (cis and trans pairing):

$$\underbrace{1}_{\text{DR}} + \underbrace{4}_{\text{DQ}} + \underbrace{4}_{\text{DP}} = \mathbf{9}\ \text{class II molecules}$$

Total 13. Note the asymmetry: this person is *worse off* than average for class I (4 versus 6) and *better off* than average for class II (9 versus 10 is close, and their DP heterozygosity is doing real work).

**(b)** **Class II molecules are heterodimers of two separately encoded, both-polymorphic chains, so maternal and paternal chains can pair in trans.** Class I has one polymorphic chain and an invariant partner, so the count is simply the number of $\alpha$-chain alleles. Trans-pairing means class II heterozygosity multiplies rather than adds — which is precisely why the class II count exceeds the class I count despite there being the same number of loci.

**P2 (a)** With $L = 60$, a single allele fails with probability

$$(1-0.01)^{60} = e^{60 \ln 0.99} = e^{-0.603} = 0.547 .$$

For six independent alleles:

$$0.547^{6} = \mathbf{0.0268} \approx \mathbf{2.7\ \text{percent}}\ \text{of recipients present no CD8 epitope}.$$

**(b)** With $L = 240$, $\;(0.99)^{240} = e^{-2.412} = 0.0896$, so

$$0.0896^{6} = 5.2 \times 10^{-7} \approx \mathbf{5 \times 10^{-7}}.$$

**Fourfold more antigen drops the non-responder rate by about five orders of magnitude**, because the failure probability is $e^{-pLk}$ and $L$ sits in the exponent. Length buys coverage extremely cheaply — an argument for multi-epitope and whole-antigen immunogens over minimal peptides.

**(c) The strongest objection: the alleles are not independent.** HLA alleles cluster into **supertypes** — the A2 supertype, the B7 supertype — whose members share broadly similar anchor pockets and therefore overlapping peptide motifs. An individual carrying six alleles drawn from three supertypes is effectively sampling far fewer than six independent motifs, so the true $k$ in $e^{-pLk}$ is smaller than the allele count.

Three further objections, in decreasing force:

1. **Binding is not presentation.** The peptide must also be *generated* by the proteasome and transported by TAP ([2.5](02-05-antigen-processing-presentation.md)). Predicted binders that are never produced do not count, and the loss is substantial.
2. **Presentation is not immunogenicity.** A presented epitope still needs a T cell in the repertoire that recognizes it, and thymic negative selection ([4.3](04-03-self-tolerance-regulation.md)) will have deleted clones specific for anything resembling self — which is exactly why pathogens that mimic host sequence are hard to vaccinate against.
3. **$p$ is not constant across alleles.** Some alleles are markedly more permissive than others.

**The honest conclusion:** the exponential is the right *shape* — longer antigens really do close repertoire holes fast — but the absolute numbers should be treated as order-of-magnitude, and the effective $k$ is smaller than 6.

**P3 (a)** Each parent transmits one of their two haplotypes to each child independently:

$$P(\text{sibs share the paternal haplotype}) = \tfrac12, \qquad P(\text{share the maternal}) = \tfrac12$$

$$P(\text{HLA-identical}) = \tfrac12 \times \tfrac12 = \tfrac14 = \mathbf{0.25}$$

With three siblings, each independently a match with probability $1/4$:

$$P(\text{at least one match}) = 1 - \left(\tfrac34\right)^{3} = 1 - \frac{27}{64} = \frac{37}{64} = \mathbf{0.578}.$$

**The assumption is that the HLA region is transmitted as an intact unit — no recombination between HLA-A and HLA-DP.** Recombination across the region occurs at roughly one percent per meiosis, with hotspots between the class II and class III regions. So the true probability of a full match is **slightly below** $1/4$: the calculation is mildly optimistic, and a recombinant haplotype produces a partial match that ordinary serological typing can miss. (This also explains why the intact-haplotype approximation is nonetheless a good one — a 1 percent leak does not move 0.25 much.)

**(b)** The pathogen is pre-adapted to the common alleles, meaning it carries escape mutations in the epitopes those alleles present. It carries **no** escape mutation in epitopes presented by the new allele, because until now there was no selection to acquire one — the allele was too rare for such a variant to be favoured anywhere.

Carriers of the new allele at $f = 0.02$ are a fraction

$$1 - (1 - 0.02)^2 = 1 - 0.9604 = 0.0396 \approx \mathbf{4\ \text{percent}}\ \text{of the population},$$

and they mount a CD8 response the rest of the population cannot. The allele's carriers therefore have higher fitness and $f$ rises.

**Now the feedback that closes the loop.** A viral escape mutation against this allele is advantageous in 4 percent of hosts and costly in the other 96 percent, so it cannot spread — *yet*. As $f$ climbs, the carrier fraction $1-(1-f)^2$ climbs with it, and once the benefit in carriers outweighs the replicative cost in non-carriers, escape variants begin to accumulate. The allele's protective advantage then erodes, its rise halts, and it settles at an intermediate equilibrium frequency.

**This is negative frequency-dependent selection in its cleanest form** ([evolution-ecology 1.5](../../evolution-ecology/lessons/01-05-mutation-balance-of-forces.md)): the fitness of an allele is a decreasing function of its own frequency, so no allele fixes and no allele is lost — which is precisely how you maintain thousands of alleles at one locus instead of the one or two that directional selection would leave.

**(c) The neutral expectation is $d_N/d_S = 1$**, because under neutrality every mutation fixes at rate $\mu$ regardless of whether it changes an amino acid ([evolution-ecology 1.4](../../evolution-ecology/lessons/01-04-drift-ne-gene-flow.md)).

$$\text{groove codons: } d_N/d_S = 3.1 > 1 \;\Longrightarrow\; \textbf{diversifying (positive) selection}$$

Amino-acid-changing mutations at these sites fix **three times faster than silent ones at the same sites** — so a change in the peptide-contact residues is, on average, actively favoured. That is the molecular fingerprint of the balancing selection argued for in (b): new motifs are valuable because they are new.

$$\text{remaining codons: } d_N/d_S = 0.28 < 1 \;\Longrightarrow\; \textbf{purifying selection}$$

Roughly 72 percent of amino-acid changes elsewhere in the molecule are removed before fixing — the normal state of a functional protein, and here specifically the fold, the $\beta_2$m interface and the CD8-binding $\alpha 3$ domain, all of which must keep working across every allele.

**What makes this pair of numbers powerful is the contrast within one gene.** A gene-wide $d_N/d_S$ would be diluted toward 1 and might look unremarkable; partitioning by structural role shows that **the same molecule is under opposite selection pressures at different positions**, exactly as the functional argument predicts. This is Hughes and Nei's classic result, and it is one of the cleanest cases in molecular evolution where a structural hypothesis made a sequence-level prediction that held.

</details>

## Flashback

**From Lesson 2.3 (the T-cell receptor):** In the kinetic-proofreading model, a TCR must complete $n$ sequential modification steps, each at rate $k_p$, before the peptide–MHC complex dissociates at rate $k_{\text{off}}$; the probability of signalling is

$$P_{\text{signal}} = \left(\frac{k_p}{k_p + k_{\text{off}}}\right)^{n}.$$

Take $k_p = 0.2\ \text{s}^{-1}$. An agonist peptide–MHC complex has a dwell time of 10 s; a weak variant peptide has a dwell time of 2 s. (a) What is the ratio of their affinities, judged by dwell time? (b) How many proofreading steps are needed for the T cell to discriminate them by at least 100-fold in signalling? (c) At that $n$, what fraction of agonist encounters actually signal — and what happens to both quantities if $k_p$ is raised tenfold?

<details>
<summary>Solution</summary>

**(a)** $k_{\text{off}} = 1/\tau$, so $k_{\text{off}}^{\text{ag}} = 0.1\ \text{s}^{-1}$ and $k_{\text{off}}^{\text{var}} = 0.5\ \text{s}^{-1}$.

$$\text{ratio} = \frac{10\ \text{s}}{2\ \text{s}} = \mathbf{5}\text{-fold}.$$

**(b)** Per step, the two ligands have completion probabilities

$$\text{agonist: } \frac{0.2}{0.2+0.1} = \frac{2}{3} = 0.6667, \qquad \text{variant: } \frac{0.2}{0.2+0.5} = \frac{2}{7} = 0.2857 .$$

$$\text{discrimination}(n) = \left(\frac{0.6667}{0.2857}\right)^{n} = (2.333)^{n}$$

Require $2.333^{n} \ge 100$:

$$n \ge \frac{\ln 100}{\ln 2.333} = \frac{4.605}{0.8473} = 5.43 \;\Longrightarrow\; \boxed{n = 6}$$

Check: $2.333^{6} = 161$. And $n=5$ gives only $69$, so 6 is the minimum. **A 5-fold difference in dwell time has become a 161-fold difference in signalling** — the discrimination is $5^{n}$-ish in spirit, exponential in the number of steps.

**(c)** At $n = 6$:

$$P_{\text{signal}}^{\text{ag}} = 0.6667^{6} = \mathbf{0.088}, \qquad P_{\text{signal}}^{\text{var}} = 0.2857^{6} = 5.4\times10^{-4}$$

$$\text{ratio} = \frac{0.0878}{0.000544} = 161$$

which matches the target, as required.

**Only 8.8 percent of agonist encounters signal at all.** That is the price: proofreading discards the great majority of *correct* engagements in order to discard essentially all incorrect ones.

Now raise $k_p$ tenfold to $2\ \text{s}^{-1}$:

$$P^{\text{ag}} = \left(\frac{2}{2.1}\right)^{6} = 0.9524^{6} = 0.746, \qquad P^{\text{var}} = \left(\frac{2}{2.5}\right)^{6} = 0.8^{6} = 0.262$$

$$\text{discrimination} = \frac{0.746}{0.262} = \mathbf{2.8}\text{-fold}$$

**Sensitivity jumps from 9 percent to 75 percent and discrimination collapses from 161-fold to 2.8-fold.** This is the general trade-off, and it is why the sharp regime requires $k_p \sim k_{\text{off}}$: proofreading only discriminates while the enemy of completion — dissociation — is competitive with the steps themselves. Make the steps fast and every ligand completes them, correct or not.

**Why this matters for 2.4:** the peptide identity that sets $k_{\text{off}}$ is set by which peptide the MHC molecule loaded, and the polymorphic groove residues determine that. A single anchor-position change can move a peptide from a 10-second dwell time to a 2-second one — and this calculation shows that is the difference between a response and nothing at all. **That is the mechanistic reason MHC polymorphism translates into immune-response variation.**

</details>

## Connections

- **Backward:** [2.3](02-03-t-cell-receptor.md) established MHC restriction and the CD4/CD8 coreceptor split; this lesson supplies the two molecules those coreceptors bind and explains why they bind the *non*-polymorphic domains. [1.4](01-04-inflammation-innate-effectors.md)'s missing-self logic acquires a molecular substrate in HLA-E.
- **Forward:** [2.5](02-05-antigen-processing-presentation.md) is entirely a consequence of this lesson's structural split — a closed groove loaded in the ER from the cytosol, an open groove loaded in an acidified endosome. [4.3](04-03-self-tolerance-regulation.md) uses positive selection on self-MHC to impose restriction on the repertoire; [4.5](04-05-immunodeficiency-tumor-transplant.md) turns haplotype arithmetic into transplant matching and turns $\beta_2$m loss into tumor escape.
- **Sideways:** the balancing-selection machinery is [evolution-ecology 1.5](../../evolution-ecology/lessons/01-05-mutation-balance-of-forces.md), and the neutral $d_N/d_S = 1$ baseline against which the groove codons are read is [evolution-ecology 1.4](../../evolution-ecology/lessons/01-04-drift-ne-gene-flow.md). Haplotype transmission and the linkage that keeps HLA loci travelling together are [genetics 2.2](../../genetics/lessons/02-02-linkage-recombination.md) and [genetics 4.4](../../genetics/lessons/04-04-linkage-disequilibrium-gwas.md); the Ig-like $\alpha 3$ and $\beta 2$ domains are the same $\beta$-sandwich as [biochemistry 1.3](../../biochemistry/lessons/01-03-four-levels-protein-structure.md).
