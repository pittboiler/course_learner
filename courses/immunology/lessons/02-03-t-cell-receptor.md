# Immunology · Lesson 2.3: The T-cell receptor

> ⏱ ~15 min · Module 2: Antigen Recognition · Builds on: [2.2](02-02-bcr-affinity-avidity.md), [2.1](02-01-antigens-antibody-structure.md) · Unlocks: [2.4](02-04-mhc-molecules.md) (MHC molecules)

## Why this matters

A B cell sees antigen the obvious way: the receptor binds the pathogen's surface directly, and [2.2](02-02-bcr-affinity-avidity.md) showed how multivalency turns weak grips into tight ones. A T cell does something that looks perverse. It cannot see intact antigen at all. It sees a short **peptide fragment displayed in the groove of a host molecule** on the surface of one of your own cells — a constraint called **MHC restriction** (MHC = major histocompatibility complex).

Students meet this as an arbitrary rule. It is the opposite. **An antibody can only find a pathogen where the pathogen is exposed**, and a virus replicating in your cytoplasm is never exposed. The only way to police the inside of a cell from the outside is to make every cell publish a continuously updated sample of its own protein contents on its surface — and then build a cell type whose whole job is to read that report. **MHC restriction is the mechanism that makes the interior of a cell auditable.**

Two consequences fall out immediately and organize the rest of the course. First, the receptor is **monovalent** — one binding site, no avidity trick — and its affinity for its ligand is roughly a thousand-fold *weaker* than an antibody's, yet a T cell can respond to a handful of correct complexes among a hundred thousand wrong ones. That contradiction is resolved by **kinetic proofreading**, an idea worth learning in its own right because it recurs wherever biology needs accuracy it cannot buy with binding energy. Second, the coreceptors CD4 and CD8 read the *class* of the display molecule, which is what makes the whole of [2.4](02-04-mhc-molecules.md) and [2.5](02-05-antigen-processing-presentation.md) predictable rather than a list.

## The idea

**The auditing problem.** Antibody is a surveillance system for the extracellular world. It is useless against an intracellular pathogen, which is where viruses and organisms like *Mycobacterium* and *Listeria* spend their lives. The immune system's solution is a compulsory disclosure requirement: every nucleated cell chops up a sample of the proteins it is currently making and hangs the pieces on MHC class I molecules at its surface. A cytotoxic T cell then reads the surface report instead of the books.

**Three design consequences, each non-obvious:**

1. **There is no secreted TCR.** Antibody's whole point is that it can leave the cell and act at a distance; a TCR reading a report on a *specific* cell's surface would be meaningless in solution, because the information is not in the peptide alone but in *which cell is displaying it*. So T-cell recognition is inseparable from cell-to-cell contact — and everything that follows (the synapse, directed killing in [4.1](04-01-cytotoxic-t-cells.md), licensing in [3.5](03-05-helper-t-cells-polarization.md)) is a consequence of that.
2. **The ligand is a composite surface**, part foreign peptide and part host MHC. The receptor lands across both, and its diagonal footprint puts different loops on different halves. That single geometric fact explains why the T-cell repertoire is inherently biased toward MHC, why the thymus has to select for MHC binding at all ([4.3](04-03-self-tolerance-regulation.md)), and why an unusually large fraction of your T cells react to *someone else's* MHC ([4.5](04-05-immunodeficiency-tumor-transplant.md)).
3. **The receptor is monovalent.** One α chain, one β chain, one site. **The avidity multiplication of [2.2](02-02-bcr-affinity-avidity.md) is unavailable inside a single molecule** — a T cell gets multivalency only across the whole cell–cell contact, not within one receptor.

**Now the puzzle.** A typical TCR binds its agonist peptide–MHC with $K_d$ between about $1\ \mu\text{M}$ and $100\ \mu\text{M}$; a matured antibody reaches $10^{-9}$ to $10^{-11}$ M. So the TCR is a **weak, monovalent binder that must nonetheless pick 1–10 correct complexes out of roughly $10^5$ MHC molecules displaying $\sim 10^4$ different self peptides.** It must discriminate at better than one part in $10^4$ using a binding site that a biochemist would call unimpressive.

**It cannot be doing this with binding energy, so it does it with time.** The insight — Hopfield's, transplanted to the TCR by McKeithan — is that if a receptor must complete a *chain* of slow modifications before it signals, and if dissociation **resets the chain to the beginning**, then the receptor is running a stopwatch. A ligand that falls off early never finishes, no matter how often it rebinds. Discrimination then depends on the **off-rate**, and it is amplified geometrically by the number of steps.

*The one-sentence version: the cell does not ask "how tightly did you bind?" — it asks "did you hold still long enough?", and it asks that question five times in a row.*

## The formal version

**Structure.** The αβ TCR is a disulfide-linked heterodimer, each chain built from one variable ($\mathrm{V}$) and one constant ($\mathrm{C}$) immunoglobulin domain — the same β-sandwich module as the antibody Fab ([biochemistry 1.3](../../biochemistry/lessons/01-03-four-levels-protein-structure.md), [2.1](02-01-antigens-antibody-structure.md)). Each V domain carries three hypervariable **CDR** (complementarity-determining region) loops.

**Docking has a fixed polarity, and the polarity is the point.**

| Loop | What it contacts | Where its diversity comes from |
|---|---|---|
| CDR1, CDR2 (α and β) | the two MHC α-helices flanking the groove | germline V segments |
| **CDR3α, CDR3β** | **the displayed peptide** | **junctional diversity at the V(D)J join ([3.1](03-01-vdj-recombination.md))** |

*In words: the germline-encoded loops read the host molecule, and the somatically generated loops read the foreign peptide.* **This is not a coincidence — it is the architecture that lets a randomly generated repertoire still be reliably aimed at MHC.** The receptor sits diagonally, at roughly 45–70 degrees to the groove axis, with Vα over one helix and Vβ over the other.

**Signalling.** The TCR's own cytoplasmic tails are about five residues long: **the receptor that does the recognizing cannot do any signalling.** It is assembled with the invariant **CD3 complex** — CD3γε and CD3δε heterodimers plus a ζζ homodimer:

$$\underbrace{1_{\gamma} + 2_{\varepsilon} + 1_{\delta}}_{\text{4 ITAMs}} \;+\; \underbrace{3 + 3}_{\zeta\zeta,\ \text{6 ITAMs}} \;=\; \mathbf{10\ \text{ITAMs}} = 20\ \text{tyrosines}$$

An **ITAM** (immunoreceptor tyrosine-based activation motif) is a twin-tyrosine motif that, when doubly phosphorylated, becomes a docking site. The kinase **Lck** phosphorylates them; **ZAP-70** docks on a doubly phosphorylated ITAM through its tandem SH2 domains and phosphorylates the scaffold LAT, from which the familiar cascades run ([molecular-cell-biology 2.3](../../molecular-cell-biology/lessons/02-03-kinase-cascades-switch.md)). **Twenty tyrosines is a lot of intermediate states to pass through, and that is exactly what the proofreading argument needs.**

**Coreceptors.** CD4 binds the β2 domain of MHC class II; CD8 binds the α3 domain of MHC class I. Both contact sites are **non-polymorphic** — they lie outside the variable groove region.

$$\text{CD4} \longleftrightarrow \text{MHC II} \longleftrightarrow \text{helper}, \qquad \text{CD8} \longleftrightarrow \text{MHC I} \longleftrightarrow \text{killer}$$

*In words: the coreceptor reads the class of the display platform, never the peptide, and therefore reports which compartment the antigen came from.* And it does a second job: **CD4 and CD8 carry Lck on their cytoplasmic tails**, so engaging the correct class physically delivers the initiating kinase to the ITAMs. That is why coreceptor engagement raises sensitivity by roughly two orders of magnitude rather than merely adding binding energy.

**Kinetic proofreading.** Model the bound complex as passing through $N$ sequential modification steps, each occurring at rate $k_p$, with the complex dissociating at rate $k_{\text{off}}$ and **any dissociation returning the receptor to state 0**. At each step the receptor runs a race:

$$P(\text{advance one step}) = \frac{k_p}{k_p + k_{\text{off}}}$$

$$\boxed{\;P_N = \left(\frac{k_p}{k_p+k_{\text{off}}}\right)^{\!N} = \left(\frac{k_p\tau}{1+k_p\tau}\right)^{\!N}, \qquad \tau \equiv \frac{1}{k_{\text{off}}}\;}$$

*In words: the chance of signalling is the chance of winning the same race $N$ times running, and the only ligand property that enters is the dwell time $\tau$.* Note what is **absent**: $k_{\text{on}}$, and therefore $K_d$ itself. In the low-occupancy limit $k_p\tau \ll 1$ this becomes $P_N \approx (k_p\tau)^N$, so

$$\frac{P_N(\tau_1)}{P_N(\tau_2)} \approx \left(\frac{\tau_1}{\tau_2}\right)^{\!N}$$

**A modest difference in off-rate becomes an enormous difference in signal, and the exponent is a design parameter the cell chooses by choosing how many steps to require.**

**Two mechanisms make the reset real.** Proofreading only works if the intermediate states decay fast once the ligand leaves — otherwise a receptor accumulates progress across many brief encounters and the readout degrades into a measure of concentration. The phosphatases **CD45** and **SHP-1** provide that fast reset. And the **kinetic-segregation** model supplies the other half: a TCR–pMHC complex spans only about 14 nm, too narrow to admit the bulky ectodomain of CD45, so close contact locally *excludes* the phosphatase and tips the kinase–phosphatase balance only where a receptor is genuinely engaged.

**Sensitivity and serial engagement.** Because binding is short-lived, a single peptide–MHC complex does not occupy one receptor — it can serially trigger many, reported in the range of tens to a couple of hundred TCRs. **Short dwell times are therefore not purely a cost: they are what lets a handful of ligands reach a whole receptor population.** This sets up a genuine optimum, worked in P3.

**γδ T cells, briefly.** One to five percent of circulating T cells use a γδ receptor. They are largely **MHC-unrestricted**, recognizing phosphoantigens presented by butyrophilins, stress-induced ligands such as MICA and MICB, and lipids — and they are enriched in epithelia. Functionally they sit closer to the pattern recognition of [1.3](01-03-barriers-sensing-danger.md) than to the adaptive logic of this module, which is a useful way to remember them.

## Picture

![Left: a T-cell receptor facing a peptide-MHC class I molecule across the gap between two cells. The MHC has its alpha-3 and beta-2-microglobulin domains, a groove domain, and a bound peptide of eight to ten residues; the receptor has V-alpha and V-beta domains whose coral CDR3 loops sit over the peptide and whose blue CDR1 and CDR2 loops sit over the MHC helices. The CD8 coreceptor grips the non-polymorphic alpha-3 domain and carries Lck on its cytoplasmic tail, while the CD3 gamma-epsilon, delta-epsilon and zeta-zeta chains carry ten ITAMs below the T-cell membrane and the receptor's own tail is marked as only five residues. An inset shows the top view of the interface with the receptor footprint lying about fifty degrees across the groove. Right: signalling probability plotted against receptor dwell time from zero to twenty seconds, for one proofreading step and for five, showing that a fivefold difference in dwell time buys only 2.1-fold in signal with one step but 45-fold with five.](assets/02-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — what proofreading actually buys).** Take $k_p = 0.5\ \text{s}^{-1}$ and $N = 5$. An agonist peptide gives a dwell time $\tau_A = 5$ s; an altered peptide ligand differing by one residue gives $\tau_B = 1$ s — a fivefold difference. (a) Compute the signalling probability for each. (b) Compare the discrimination with what a single step would give, and with the ideal power law. (c) What happens if the proofreading steps are made slower, $k_p = 0.05\ \text{s}^{-1}$?

**(a)** With $k_p\tau_A = 2.5$ and $k_p\tau_B = 0.5$:

$$P_5(A) = \left(\frac{2.5}{3.5}\right)^{5} = (0.7143)^5 = \mathbf{0.1859}, \qquad P_5(B) = \left(\frac{0.5}{1.5}\right)^{5} = \left(\tfrac{1}{3}\right)^5 = \mathbf{0.004115}.$$

**(b)** $$\frac{P_5(A)}{P_5(B)} = \frac{0.1859}{0.004115} = \mathbf{45.2}.$$

With a single step, $P_1(A)/P_1(B) = 0.7143/0.3333 = \mathbf{2.14}$ — barely more than the twofold you would get from occupancy alone. **Five steps convert a fivefold ligand difference into a forty-fivefold signal difference.**

But note it is *not* the ideal $5^5 = 3125$. **The reason is worth understanding: the power law holds only while $k_p\tau \ll 1$.** Here $k_p\tau_A = 2.5$, so the agonist is already winning most of its races and extra dwell time buys it little. **The agonist has partly saturated the proofreading chain, and a saturated discriminator stops discriminating.**

**(c)** With $k_p = 0.05\ \text{s}^{-1}$, both ligands drop into the linear regime ($k_p\tau_A = 0.25$, $k_p\tau_B = 0.05$):

$$P_5(A) = (0.2)^5 = 3.20\times10^{-4}, \qquad P_5(B) = (0.047619)^5 = 2.449\times10^{-7}, \qquad \frac{P_5(A)}{P_5(B)} = \mathbf{1307}.$$

**Discrimination improves 29-fold — and the agonist's own signal collapses by a factor of 581.** That is the whole trade-off in one pair of numbers: **proofreading buys specificity and pays for it in sensitivity**, and a cell that must respond to ten ligands cannot afford to set $k_p$ arbitrarily low. Every real immune-recognition system sits somewhere on this curve, and where it sits is a tuned parameter, not an accident.

**Example 2 (why you'd care — why engineering a "better" TCR killed two patients).** Therapeutic T cells can be given a TCR engineered for higher affinity, on the reasonable assumption that a tighter receptor is a more potent one. Model the engineering as a **tenfold reduction in $k_{\text{off}}$**, i.e. all dwell times $\times 10$. Keep $k_p = 0.5\ \text{s}^{-1}$, $N = 5$. Take the tumour agonist at $\tau = 5$ s and an abundant self peptide at $\tau_{\text{self}} = 0.5$ s.

**Before engineering:**

$$P_5(\text{agonist}) = 0.1859, \qquad P_5(\text{self}) = \left(\frac{0.25}{1.25}\right)^5 = (0.2)^5 = 3.20\times10^{-4}$$

$$\text{discrimination} = \frac{0.1859}{3.20\times 10^{-4}} = \mathbf{581}\text{-fold}.$$

**After a tenfold slower off-rate** ($\tau_{\text{agonist}} = 50$ s, $\tau_{\text{self}} = 5$ s):

$$P_5(\text{agonist}) = \left(\frac{25}{26}\right)^5 = 0.8219, \qquad P_5(\text{self}) = \left(\frac{2.5}{3.5}\right)^5 = 0.1859$$

$$\text{discrimination} = \frac{0.8219}{0.1859} = \mathbf{4.4}\text{-fold}.$$

**Read the second line carefully. The self peptide now signals exactly as strongly as the original agonist did** — the engineered receptor treats a self peptide the way the natural receptor treated its target. Discrimination has fallen from 581-fold to 4.4-fold, a **132-fold loss of specificity**, in exchange for a 4.4-fold gain in agonist signal.

**Mechanistically, the reason is that affinity engineering pushes every ligand toward saturation together.** Raising affinity is a *uniform* shift along the dwell-time axis, and the discriminating region of the curve is at the bottom. **A proofreading device works only in its linear regime; you cannot make it more potent without making it blinder.**

**This is not a thought experiment.** A 2013 trial of an affinity-enhanced TCR against the tumour antigen MAGE-A3 caused fatal cardiogenic shock in two patients: the engineered receptor cross-reacted with an unrelated peptide from titin, a cardiac protein, which the parent receptor had ignored. **A tolerance mechanism ([4.3](04-03-self-tolerance-regulation.md)) that had worked perfectly for the natural repertoire failed for an engineered one, because the natural repertoire's affinity ceiling was doing safety work that nobody had noticed.**

## Watch out

- **You might think a higher-affinity TCR is a better TCR.** The signal reads dwell time, not $K_d$, and there is an interior optimum (P3). Beyond it, extra affinity buys almost nothing and costs specificity catastrophically. Evolution's failure to make TCRs as tight as antibodies is a design decision, not a limitation.
- **You might treat the TCR as "an antibody on a T cell."** It is monovalent, never secreted, roughly a thousand-fold weaker, does not undergo somatic hypermutation ([3.3](03-03-germinal-centers-affinity-maturation.md) applies to B cells only), and its ligand is two-thirds host molecule.
- **You might think CD4 and CD8 help read the peptide.** They contact **non-polymorphic** MHC domains — they certify the *class*, and therefore the compartment the antigen came from, and they deliver Lck. A CD8 T cell is not "specific for class I peptides"; it is a T cell whose coreceptor only works on class I.
- **You might think MHC restriction is an experimental artifact of how T cells are grown.** It is the mechanism by which intracellular infection becomes visible at all, and the diagonal docking geometry that produces it is also the origin of alloreactivity ([4.5](04-05-immunodeficiency-tumor-transplant.md)).
- **You might think the peptide is the epitope.** Because CDR1/2 grip the MHC helices, the *same peptide on a different MHC allele is a different ligand* to the same T cell. Peptide plus allele is the unit of recognition, which is why [2.4](02-04-mhc-molecules.md)'s polymorphism matters so much.
- **You might take the proofreading model as settled.** It is the right first-order account and it makes correct predictions, but the number of steps, the role of mechanical force and catch bonds, and how serial engagement and receptor clustering enter are all still argued about. Hold the mechanism firmly and the parameters loosely.

## One-liner

> A T cell audits the inside of a cell by reading peptides displayed on host MHC, and because its single weak binding site cannot discriminate by affinity, it discriminates by time — requiring a chain of $N$ resettable steps so that a fivefold difference in dwell time becomes a fortyfold difference in signal.

## Problems

**P1 (🟢)** Using $P_N = (k_p\tau/(1+k_p\tau))^N$ with $k_p = 0.5\ \text{s}^{-1}$, compare an agonist with $\tau = 5$ s against a weak ligand with $\tau = 2$ s. (a) Compute the discrimination ratio for $N = 3$. (b) Repeat for $N = 8$. (c) State what the cell gains and what it gives up by requiring more steps.

**P2 (🟡)** A drug inhibits the phosphatases CD45 and SHP-1 so that phosphorylated ITAMs, once formed, persist for minutes instead of about a second. Binding events themselves are unaffected. (a) Explain what this does to the proofreading model's central assumption, and what quantity the receptor now effectively measures. (b) Given that self peptide–MHC complexes outnumber any given foreign complex by roughly $10^4$ to 1, predict the clinical consequence. (c) Name the general principle this illustrates about accuracy mechanisms.

**P3 (🔴, optional — bridges to TCR engineering and CAR-T design)** Because engagement is short-lived, one peptide–MHC complex serially triggers many receptors. Model the number of fully signalled TCRs produced in time $T$ by $M$ complexes as

$$S(\tau) = M\,\frac{T}{\tau + \tau_s}\,\left(\frac{k_p\tau}{1+k_p\tau}\right)^{\!N}$$

where $\tau_s = 1$ s is the time to find the next receptor after releasing the last. Take $M = 10$, $T = 3600$ s, $k_p = 0.5\ \text{s}^{-1}$, $N = 5$. (a) Evaluate $S$ at $\tau = 2$ s, $\tau = 10$ s and $\tau = 100$ s. (b) Explain the shape of the result in terms of two competing effects, and estimate where the optimum lies. (c) State what this predicts for someone trying to improve a therapeutic T cell by affinity maturation of its receptor.

<details>
<summary>Solutions</summary>

**P1 (a)** With $k_p\tau_A = 2.5$ and $k_p\tau_B = 1.0$, the per-step advance probabilities are $u_A = 2.5/3.5 = 0.7143$ and $u_B = 1.0/2.0 = 0.5$.

$$P_3(A) = (0.7143)^3 = 0.3644, \qquad P_3(B) = (0.5)^3 = 0.1250, \qquad \frac{P_3(A)}{P_3(B)} = \mathbf{2.92}.$$

**(b)** $$P_8(A) = (0.7143)^8 = 0.06776, \qquad P_8(B) = (0.5)^8 = 0.003906, \qquad \frac{P_8(A)}{P_8(B)} = \mathbf{17.3}.$$

**(c)** The ratio is $(u_A/u_B)^N = (1.4286)^N$, so **discrimination grows geometrically in the number of steps** — 2.9-fold at three steps, 17-fold at eight.

The cost is in the numerator: the agonist's own signal fell from $0.364$ to $0.0678$, a **5.4-fold loss of sensitivity**, and it keeps falling by a factor of $1/u_A = 1.4$ per added step. So the chain length $N$ is a dial trading **specificity against sensitivity**, and a T cell that must respond to a handful of complexes cannot set it arbitrarily high. Roughly five steps is the number usually inferred, and this is why.

**P2 (a)** Kinetic proofreading requires that the intermediate states be **memory-less**: dissociation must return the receptor to step 0 before it can bind again. That is what makes the readout a function of a *single* dwell time. If phosphorylated intermediates persist for minutes while unbinding takes about a second, a receptor **accumulates progress across many separate short binding events**.

The receptor then no longer measures how long any one ligand stayed. It measures **total time bound over the integration window**, which is $\propto$ (number of ligands) × (mean dwell time) — that is, **occupancy, i.e. concentration**. Discrimination collapses from $(\tau_1/\tau_2)^N$ to roughly $\tau_1/\tau_2$: the exponent is lost, because the exponent was purchased entirely by the reset.

**(b)** With self complexes outnumbering any foreign complex by about $10^4$ to 1, a system that grades on abundance rather than dwell time will be driven hardest by **self**. A weakly binding self peptide present at $10^4$ copies now integrates to a suprathreshold signal, while the genuine agonist at 1–10 copies does not stand out. **Predicted consequence: loss of self/non-self discrimination and systemic autoimmunity** — with, secondarily, poor responses to real antigen.

This is observed. Mice lacking functional SHP-1 (the *motheaten* mutant) develop severe, early, multi-organ autoimmune disease, and reduced phosphatase activity is a recurring theme in human autoimmune susceptibility. The prediction runs the right way from the model.

**(c)** **Accuracy beyond what binding energy can deliver always costs something irreversible.** A proofreading chain buys discrimination by discarding partially completed intermediates — it is an error-correcting device that spends free energy on erasure, and the erasure step (here, the phosphatase) is not an accessory to the mechanism, it *is* the mechanism. Break the reset and you have not weakened the proofreader; you have removed it. The same logic runs in replication fidelity ([genetics 3.3](../../genetics/lessons/03-03-dna-repair.md)) and in Hopfield's original setting, translational accuracy.

**P3 (a)** Let $u = k_p\tau/(1+k_p\tau)$ and note $MT = 36{,}000$.

| $\tau$ (s) | $k_p\tau$ | $u$ | $u^5$ | engagements $MT/(\tau+1)$ | $S$ |
|---|---|---|---|---|---|
| 2 | 1.0 | 0.5000 | 0.03125 | $36{,}000/3 = 12{,}000$ | **375** |
| 10 | 5.0 | 0.8333 | 0.40188 | $36{,}000/11 = 3273$ | **1315** |
| 100 | 50 | 0.9804 | 0.90573 | $36{,}000/101 = 356$ | **323** |

**(b)** Two effects pull in opposite directions:

- **Longer dwell raises the probability that any one engagement completes the chain** ($u^5$ climbs from 0.031 to 0.906).
- **Longer dwell lowers the number of engagements**, because the complex is tied up: the rate falls as $1/(\tau+\tau_s)$.

The first saturates at 1 while the second decays without bound, so the product has an **interior maximum**. Setting $\frac{d}{d\tau}\left[N\ln u - \ln(\tau+\tau_s)\right] = 0$ gives

$$N\left(\frac{1}{\tau} - \frac{k_p}{1+k_p\tau}\right) = \frac{1}{\tau+\tau_s},$$

and substituting $N=5$, $k_p = 0.5$, $\tau_s = 1$: at $\tau = 9$ the left side is $5(0.1111 - 0.0909) = 0.101$ against a right side of $0.100$. **The optimum is $\tau^* \approx 9$ s**, giving $S \approx 1320$ — barely above the value at $\tau = 10$, so the peak is broad.

**Sanity check on the physics:** $\tau^* \approx 9$ s corresponds to $k_{\text{off}} \approx 0.11\ \text{s}^{-1}$, squarely inside the range measured for genuine agonist peptide–MHC pairs. **The model reproduces the observed dwell times of real agonists from a sensitivity argument alone**, which is the strongest evidence for it.

**(c)** **Affinity maturation of a therapeutic TCR has a ceiling, and it is close.** A natural agonist already sits near $\tau^*$, so lowering $k_{\text{off}}$ tenfold moves it to $\tau = 50$ s, where $S = 36{,}000/51 \times (25/26)^5 = 706 \times 0.822 = 580$ — **less than half the output of the unmodified receptor**, despite each individual engagement being far more likely to signal. Serial engagement was doing more work than the extra binding energy can replace.

And it is worse than a wasted effort, because Example 2 showed the same tenfold change collapses discrimination from 581-fold to 4.4-fold. **You lose potency and specificity at once.** This is a real design constraint: it is part of why chimeric antigen receptors are pointed at abundant, tissue-restricted *surface* antigens like CD19, where the receptor need not perform fine peptide discrimination at all, rather than at peptide–MHC targets where the proofreading trade-off bites.

</details>

## Flashback

**From Lesson 1.5 (the complement system):** *Streptococcus pyogenes* displays M protein on its surface, which recruits the host regulator **factor H**. Model an unregulated alternative-pathway C3 convertase (C3bBb) as cleaving C3 at $10\ \text{s}^{-1}$ with a mean lifetime of 90 s. (a) How many C3b molecules does one convertase deposit before it decays? (b) Factor H recruitment accelerates its decay so the mean lifetime falls to 6 s; recompute. (c) If each deposited C3b has probability $p = 0.002$ of nucleating a new convertase, compute the branching number in each case and explain why the effect on the bacterium's survival is far larger than the ratio in (b) suggests. Which principle from 1.5 is the bacterium exploiting?

<details>
<summary>Solution</summary>

**(a)** $$n = k\,\tau = 10\ \text{s}^{-1} \times 90\ \text{s} = \mathbf{900\ \text{C3b}}.$$

**(b)** $$n' = 10 \times 6 = \mathbf{60\ \text{C3b}} \quad \text{— a 15-fold reduction.}$$

**(c)** Each convertase seeds $R = np$ daughter convertases:

$$R_{\text{unregulated}} = 900 \times 0.002 = \mathbf{1.8}, \qquad R_{\text{factor H}} = 60 \times 0.002 = \mathbf{0.12}.$$

**The 15-fold change in per-convertase yield straddles the threshold $R = 1$, and that is what matters, not the factor of 15.** With $R = 1.8 > 1$ the deposition is a supercritical branching process: each generation is larger than the last, so C3b accumulates exponentially and the surface is opsonized within seconds. With $R = 0.12 < 1$ it is subcritical and dies out after roughly $1/(1-R) \approx 1.14$ generations — about 68 C3b molecules in total, essentially nothing on a bacterial surface. **A modest change in a rate constant produces a qualitative change in outcome because the system has a threshold**, the same $R$ greater than one criterion that governs any multiplying population ([evolution-ecology 3.1](../../evolution-ecology/lessons/03-01-exponential-growth-demography.md)).

Because everything downstream of C3 depends on deposited C3b, all three complement outputs fail together: opsonization directly, the C5 convertase (and therefore C5a and the membrane-attack complex) because C3b is its building block, and C3a/C5a recruitment along with it.

**The principle from 1.5: the alternative pathway is always on, and self is distinguished from non-self by regulation, not by recognition.** The system never asks whether a surface is foreign; it asks whether the surface carries a regulator. A microbe that borrows a host regulator therefore becomes self *without altering anything the system actually inspects* — which is why this exact trick (factor H recruitment) has evolved independently in *Streptococcus pyogenes*, *Neisseria meningitidis* and *Borrelia burgdorferi*. **Discrimination by inhibition is cheap and general, and its characteristic vulnerability is impersonation of the inhibitor.**

</details>

## Connections

- **Backward:** [2.2](02-02-bcr-affinity-avidity.md) is the deliberate contrast — the BCR gets avidity inside one molecule, the TCR cannot, and the difference forces the proofreading solution. [2.1](02-01-antigens-antibody-structure.md) supplies the Ig fold that both receptors reuse, and [biophysics 2.3](../../biophysics/lessons/02-03-ligand-binding-occupancy.md) supplies the equilibrium $K_d$ that this lesson shows is *not* the quantity being read.
- **Forward:** [2.4](02-04-mhc-molecules.md) is the display platform whose class the coreceptors certify and whose polymorphism CDR1/2 must accommodate; [2.5](02-05-antigen-processing-presentation.md) explains where each class's peptides come from; [3.1](03-01-vdj-recombination.md) generates precisely the CDR3 loops that touch the peptide; [3.5](03-05-helper-t-cells-polarization.md) adds costimulation as signal 2 on top of this signal 1; [4.1](04-01-cytotoxic-t-cells.md) turns the contact into a killing synapse; and [4.3](04-03-self-tolerance-regulation.md)'s thymic selection window is a threshold set on exactly the dwell-time axis plotted here.
- **Sideways:** the ITAM–Lck–ZAP-70–LAT chain is a worked instance of [molecular-cell-biology 2.3](../../molecular-cell-biology/lessons/02-03-kinase-cascades-switch.md), and the receptor-to-cascade architecture is [molecular-cell-biology 2.1](../../molecular-cell-biology/lessons/02-01-receptors-reading-outside-world.md). Kinetic proofreading itself is Hopfield's answer to translational fidelity and is the same logic as replicative proofreading in [genetics 3.3](../../genetics/lessons/03-03-dna-repair.md): **when binding energy cannot supply the required accuracy, buy it with time and pay for it with discarded intermediates.**
