# Immunology · Lesson 3.4: Antibody effector functions

> ⏱ ~15 min · Module 3: Generating Diversity & the Adaptive Response · Builds on: [3.3](03-03-germinal-centers-affinity-maturation.md), [2.1](02-01-antigens-antibody-structure.md) · Unlocks: [4.2](04-02-immunological-memory-vaccines.md) (memory & vaccines)

## Why this matters

An antibody is not a weapon. With one exception, sticking to a pathogen accomplishes nothing by itself — **the antibody is an adaptor, and the killing is done by cells and cascades it recruits.** [2.1](02-01-antigens-antibody-structure.md) gave the structural reading: Fab decides *what* is bound, Fc decides *what happens next*. This lesson cashes that in.

It also explains why [3.3](03-03-germinal-centers-affinity-maturation.md) bothered with class-switch recombination. Switching changes the constant region and leaves the V region alone, so it changes the **instruction** while preserving the **address**. That only matters if different constant regions really do issue different instructions. They do, and the differences are large — orders of magnitude, not percentages.

And it is the layer where immunology became an engineering discipline. Every therapeutic monoclonal antibody is an exercise in choosing an Fc: rituximab, trastuzumab and the checkpoint blockers of [4.5](04-05-immunodeficiency-tumor-transplant.md) all share the design question *which effector functions do I want switched on, and which off?*

## The idea

There are **five effector mechanisms and two transport functions**, and every one of them except neutralization is triggered by the Fc.

1. **Neutralization** — the antibody physically covers the business end of a virus, toxin or adhesin. Needs nothing else. This is the only Fab-only mechanism.
2. **Opsonization** — Fc regions on a coated particle are gripped by Fcγ receptors on phagocytes, which then eat it ([1.4](01-04-inflammation-innate-effectors.md)).
3. **Complement fixation** — clustered Fc regions recruit C1q, launching the classical pathway of [1.5](01-05-complement-system.md) toward opsonization, C3a/C5a and the membrane-attack complex.
4. **ADCC** (antibody-dependent cellular cytotoxicity) — an NK cell reads bound IgG through FcγRIIIA and kills the coated cell.
5. **Mast-cell degranulation** — IgE pre-loaded onto FcεRI, cross-linked by antigen, dumps histamine and proteases in seconds.

Plus two pure addressing functions: **FcRn**, which rescues IgG from degradation and hauls it across the placenta, and the **poly-Ig receptor**, which transcytoses dimeric IgA onto mucosal surfaces.

**Here is the unifying quantitative point, and it is the one worth carrying out of this lesson.** Your plasma contains roughly 10 mg/mL of IgG — about 70 μM — floating freely and specific for a thousand things you met years ago. If Fc receptors and C1q were triggered by *binding* IgG, you would be in permanent systemic inflammation. So they are not:

$$\boxed{\;\text{Every Fc-dependent effector function is a readout of antibody \textbf{density on a surface}, not antibody concentration in solution.}\;}$$

*In words: C1q and the Fcγ receptors are switched on by **clustering**, not by occupancy.* Free monomeric IgG binds them and does nothing; the same IgG bound side by side on a bacterium fires everything. That single design choice is why an antibody response can be both enormous and safe, and it is what the arithmetic below makes precise.

## The formal version

### Complement fixation: a surface-density threshold

C1q is a hexamer — six globular heads on collagen-like stalks — and it must engage **at least two Fc regions simultaneously** to bind stably enough to activate C1r and C1s. The heads sit roughly 30 nm apart, so two engaged Fc regions must lie within about $d = 30$ nm of each other.

Model bound IgG as a random (Poisson) array on the surface with **surface density** $\sigma$ (molecules per nm²). For a given bound IgG, the number of neighbours within $d$ is Poisson with mean $\sigma\pi d^2$, so

$$P(\text{at least one partner within } d) = 1 - e^{-\sigma \pi d^{2}} .$$

*In words: an IgG can fix complement only if a second IgG happens to land within a C1q span of it, and that is a coverage problem.* Setting this to $\tfrac12$:

$$\sigma_{1/2} = \frac{\ln 2}{\pi d^{2}} = \frac{0.693}{\pi(30)^{2}} = 2.45\times10^{-4}\ \text{nm}^{-2} = 245\ \mu\text{m}^{-2}.$$

A spherical bacterium 1 μm across has surface area $\pi(1\ \mu\text{m})^2 = 3.14\ \mu\text{m}^2$, so it needs

$$N_{\text{IgG}} \approx 245 \times 3.14 \approx 770 \ \text{IgG molecules}$$

before half of them have a partner. **One IgM pentamer does the same job on its own.** Bound to a surface, IgM adopts a "staple" conformation that lifts its Fc regions into a planar array already presenting several C1q docking sites within one footprint — the multivalency that [2.2](02-02-bcr-affinity-avidity.md) used for *binding* is reused here for *signalling*. Molar potency ratios of $10^2$–$10^3$ in favour of IgM are exactly what hemolysis assays measure.

**The honest refinement:** real IgG does better than this Poisson estimate, because IgG Fc regions make weak lateral Fc–Fc contacts and self-assemble into ordered **hexamers** on an antigen-coated surface, which C1q then grips with all six heads. So IgGs cluster rather than scattering at random, and the true requirement runs an order of magnitude below the estimate. The estimate is the right *upper bound* and the right *intuition*: density, not concentration.

### The Fcγ receptors: occupancy is not signal

| Receptor | CD | Where | $K_d$ for monomeric IgG | Signal |
|---|---|---|---|---|
| FcγRI | CD64 | macrophages, monocytes | $\sim10^{-9}$ M (**high**) | activating (FcRγ ITAM) |
| FcγRIIA | CD32a | phagocytes, platelets | $\sim10^{-6}$ M | activating (ITAM in its own tail) |
| FcγRIIB | CD32b | B cells, macrophages | $\sim10^{-6}$ M | **inhibitory** (ITIM) |
| FcγRIIIA | CD16a | NK cells, macrophages | $\sim10^{-6}$ M | activating (FcRγ/ζ ITAM) |
| FcγRIIIB | CD16b | neutrophils | $\sim10^{-6}$ M, GPI-anchored | no ITAM — tethering only |

Now do the occupancy arithmetic that [biophysics 2.3](../../biophysics/lessons/02-03-ligand-binding-occupancy.md) supplies. Plasma IgG at 10 g/L with a molar mass of 150 kDa is

$$[\text{IgG}] = \frac{10\ \text{g L}^{-1}}{1.5\times10^{5}\ \text{g mol}^{-1}} = 6.7\times10^{-5}\ \text{M} = 67\ \mu\text{M},$$

so even a "low-affinity" receptor with $K_d = 1\ \mu$M sits at fractional occupancy

$$\theta = \frac{[\text{IgG}]}{[\text{IgG}]+K_d} = \frac{67}{68} = 0.985 .$$

**Your phagocytes walk around with essentially every Fcγ receptor occupied by irrelevant IgG, and they are not activated.** ITAM phosphorylation requires receptors to be brought together and held together, which only a multivalent coated surface achieves. This is precisely the cross-linking logic of [2.2](02-02-bcr-affinity-avidity.md), applied on the effector side.

**Two consequences worth naming.** First, FcγRIIB carries an **ITIM** and is co-ligated along with the activating receptors, so the response to an immune complex is set by the **activating-to-inhibitory ratio**, not by activating signal alone — which is why the FcγRIIIA V158F polymorphism predicts how well a patient responds to rituximab. Second, the Fc's instruction is **glycan-encoded**: the N-linked glycan at Asn297 in the CH2 domain is required for FcγR and C1q binding at all (aglycosylated IgG is effector-dead), and removing its core fucose raises FcγRIIIA affinity roughly 50-fold. Afucosylated therapeutic antibodies such as obinutuzumab exploit exactly this.

### IgE and FcεRI: the receptor loaded before the antigen arrives

Every other mechanism here waits for antigen. Mast cells do not. FcεRI binds IgE with $K_d \approx 10^{-10}$ M, and serum IgE, though present at only about 100 ng/mL, is

$$[\text{IgE}] = \frac{1\times10^{-4}\ \text{g L}^{-1}}{1.9\times10^{5}\ \text{g mol}^{-1}} = 5.3\times10^{-10}\ \text{M}, \qquad \theta = \frac{5.3}{5.3+1.0} = 0.84 .$$

*In words: at ordinary serum levels, most FcεRI molecules on your mast cells are already carrying IgE.* And they hold on: with $k_{\text{off}} \approx 10^{-6}\,\text{s}^{-1}$, the complex has a dissociation half-time of $\ln2/k_{\text{off}} \approx 8$ days. **The mast cell is a pre-armed tripwire — antigen only has to cross-link what is already there**, which is why an allergic reaction takes seconds rather than days ([4.4](04-04-autoimmunity-hypersensitivity.md)).

### FcRn: why IgG lasts three weeks

Endothelial and myeloid cells continuously pinocytose plasma. In the acidified endosome (pH ≈ 6.0) FcRn binds the IgG Fc; everything unbound goes to the lysosome; the rescued IgG is returned to the surface and released at pH 7.4. Let $k_0$ be the catabolic rate constant of a non-rescued protein and $f$ the fraction rescued per pass:

$$k = k_0(1-f), \qquad t_{1/2} = \frac{\ln 2}{k}, \qquad C_{ss} = \frac{P}{k}$$

where $P$ is the plasma-cell production rate. *In words: FcRn does not stop IgG being taken up — it gives most of it a way back out, and both half-life and steady-state titre scale as $1/(1-f)$.*

### The isotype table

| Isotype | Serum (mg/mL) | Valency | Classical complement | Main receptor | Serum $t_{1/2}$ | Signature job |
|---|---|---|---|---|---|---|
| IgM | 1.5 | 10 (≈5 usable) | **++++** | FcμR; no FcγR | ~5 d | primary response, intravascular, agglutination |
| IgG1 | 9 | 2 | ++ | all FcγR | 21 d | the workhorse: neutralize, opsonize, ADCC |
| IgG2 | 3 | 2 | + | FcγRIIA only | 21 d | anti-polysaccharide responses |
| IgG3 | 1 | 2 | **++++** | all FcγR, tightest | **~7 d** | most potent per molecule; long hinge |
| IgG4 | 0.5 | 2, but Fab-arm exchanges → functionally monovalent | − | FcγRIIB-biased | 21 d | blocking, anti-inflammatory; chronic antigen |
| IgA (dimeric secretory) | 2–3 | 2 serum, 4 secretory | − | FcαRI; **pIgR** for transcytosis | ~6 d | mucosal neutralization *without* inflammation |
| IgE | $5\times10^{-5}$ | 2 | − | **FcεRI**, $K_d\approx10^{-10}$ M | ~2 d free, weeks on mast cells | helminths, allergy |
| IgD | 0.03 | 2 | − | poorly defined | ~3 d | mostly membrane BCR |

**Read the table as a shipping manifest, not a list.** Same specificity, five destinations: IgM stays in blood and lyses; IgG goes everywhere including across the placenta and does everything; IgA goes onto mucosal surfaces and deliberately does *not* inflame, because a gut coated in commensals must be patrolled without being set on fire; IgE goes onto mast cells at barrier surfaces; IgD mostly stays on the B cell. **Class switching ([3.3](03-03-germinal-centers-affinity-maturation.md)) is the decision of where to ship and what to say on arrival.**

Two numbers in that table repay attention. **IgG3 is the most potent isotype per molecule and has the shortest half-life** — because it carries Arg435 instead of His435 in the FcRn contact, so it is rescued less efficiently. In people carrying the His435 variant, IgG3 half-life rises to the usual 21 days. That is the FcRn model above being confirmed by a single amino acid. And **IgA is the isotype you make the most of by mass** (several grams a day, nearly all secreted) while being nearly absent from the effector table — abundance and aggression are independent axes.

## Picture

![Four effector mechanisms arranged around a central antigen bound by one antibody specificity. Top left, neutralization: an antibody caps a virus spike and a red cross marks the blocked interaction with a host receptor in the membrane below, best done by IgG and secretory IgA. Top right, opsonization: three antibodies coat a microbe and their Fc stems engage Fc gamma receptors on a phagocyte, best done by IgG1 and IgG3. Bottom left, complement fixation: two antibodies stand on a pathogen surface about 30 nm apart with a six-headed C1q molecule bridging their Fc regions, leading to C3 convertase, C3b, C3a and C5a, and membrane-attack-complex lysis, best done by IgM. Bottom right, ADCC: two antibodies bridge an infected or tumour cell to an NK cell through Fc gamma receptor three A, which releases perforin and granzyme B. A footer notes that FcRn sets IgG half-life and crosses the placenta while the poly-Ig receptor ships secretory IgA across epithelium.](assets/03-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — the same red cell, two isotypes, two completely different diseases).** A human red blood cell has a surface area of about 140 μm². (a) Using the C1q criterion above, how many bound IgG molecules are needed before half of them can recruit C1q? (b) How many IgM? (c) Explain why ABO-mismatched blood causes immediate intravascular hemolysis while Rh incompatibility does not.

**(a)** Using $\sigma_{1/2} = 245\ \mu\text{m}^{-2}$ from the formal version:

$$N_{\text{IgG}} = 245\ \mu\text{m}^{-2} \times 140\ \mu\text{m}^{2} = 3.4\times10^{4}\ \text{molecules per cell.}$$

Experimentally the number is $10^3$–$10^4$ — lower than the estimate, for the hexamer reason noted above, but the same order and far above one.

**(b)** One. A single surface-bound IgM pentamer presents enough clustered Fc to nucleate a C1 complex. The molar potency ratio is

$$\frac{N_{\text{IgG}}}{N_{\text{IgM}}} \approx 10^{3}\text{–}10^{4} .$$

**(c) This is the whole clinical difference, and it falls straight out of (a) and (b).**

Anti-A and anti-B are **naturally occurring IgM** (they arise against cross-reactive bacterial carbohydrate, a T-independent response — [3.2](03-02-clonal-selection-b-cell-activation.md) — so they never class-switch). A transfused mismatched cell is immediately coated by pentamers, fixes complement to the MAC, and **lyses inside the vessel** within minutes. Free hemoglobin, C3a and C5a everywhere: fever, hypotension, renal failure. This is why ABO mismatch is a surgical emergency.

Anti-Rh(D) antibodies arise from a **T-dependent** response to a protein antigen and are class-switched **IgG**. RhD is present at only $10^4$–$3\times10^4$ copies per cell — right at, or below, the density threshold from (a). So Rh-coated cells largely **fail to fix complement**. They are instead bound by FcγR on splenic macrophages and removed **extravascularly**, a slower, milder hemolysis. And because they are IgG, they cross the placenta on FcRn — which is what makes hemolytic disease of the newborn possible in the first place.

**Same target cell. The isotype determined the mechanism, the mechanism determined the site of destruction, and the site determined the disease.**

**Example 2 (why you'd care — FcRn arithmetic and the drugs it produced).** IgG1 has a serum half-life of 21 days; an Fc variant engineered not to bind FcRn has a half-life of about 1 day. (a) Find the per-pass rescue efficiency $f$. (b) Half-life-extension mutations push IgG1 to about 70 days — what $f$ is that? (c) An FcRn blocker reduces rescue efficiency by 12 percent relative to normal. What happens to serum IgG?

**(a)** From $k = k_0(1-f)$ with $t_{1/2} = \ln2/k$:

$$\frac{t_{1/2}^{\text{rescued}}}{t_{1/2}^{\text{unrescued}}} = \frac{1}{1-f} = \frac{21\ \text{d}}{1\ \text{d}} = 21 \;\Longrightarrow\; 1-f = 0.0476, \quad f = \mathbf{95.2\ \text{percent}} .$$

**(b)** $$1-f = \frac{1}{70} = 0.0143 \;\Longrightarrow\; f = \mathbf{98.6\ \text{percent}} .$$

**Stop and look at that.** Going from a 21-day to a 70-day antibody required raising rescue efficiency from 95.2 to 98.6 percent — a **3.5 percent relative improvement** in a process that was already nearly perfect. The system operates deep in saturation, where the half-life depends on the small *escape* fraction $1-f$, so tiny changes in rescue produce large changes in persistence. This is the entire basis of the YTE and LS mutations, which raise Fc affinity for FcRn at pH 6 while leaving release at pH 7.4 intact, and it is why a single injection of nirsevimab protects an infant for a whole RSV season.

**(c)** The same lever, pulled the other way. Rescue falls from $f = 0.952$ to $0.952 \times 0.88 = 0.838$, so the escape fraction rises from 0.048 to 0.162:

$$\frac{k_{\text{blocked}}}{k_{\text{normal}}} = \frac{0.162}{0.048} = 3.4, \qquad \frac{C_{ss}^{\text{blocked}}}{C_{ss}^{\text{normal}}} = \frac{1}{3.4} = 0.30 .$$

**A 12 percent reduction in rescue efficiency produces a 70 percent reduction in serum IgG.** That is efgartigimod, an engineered Fc fragment that outcompetes IgG for FcRn, used to strip pathogenic autoantibody in myasthenia gravis ([4.4](04-04-autoimmunity-hypersensitivity.md)) — a therapy that removes antibody without touching a single plasma cell. High-dose intravenous immunoglobulin works partly the same way, by saturating FcRn so that everyone's escape fraction rises.

**The lesson-level point:** most of your serum IgG concentration is not a measure of how hard your plasma cells are working. It is a measure of how well FcRn is recycling.

## Watch out

- **You might think a higher-affinity antibody is always the better antibody.** Affinity is a Fab property. An exquisitely affinity-matured IgG4 binds beautifully and, being a poor complement fixer and FcγRIIB-biased, does almost nothing — which is exactly why chronic allergen exposure driving an IgE-to-IgG4 switch is *protective*. Protection is often an Fc question.
- **You might think complement fixation is a property of an antibody.** It is a property of an **array**. The same IgG that cannot fix complement at $10^3$ molecules per cell fixes it briskly at $10^5$. Density, not identity.
- **You might think the low-affinity Fcγ receptors sit empty until an immune complex arrives.** They are ~98 percent occupied by irrelevant plasma IgG right now. Occupancy is not signal; clustering is.
- **You might expect IgA to be the mucosal complement fixer.** It does not activate the classical pathway at all, and that is deliberate — a surface carrying kilograms of commensal bacteria must be neutralized without being inflamed. IgA is *immune exclusion*, not attack.
- **You might read "neutralizing titre" as the correlate of protection because neutralization is the most important mechanism.** It is the correlate because it is the cheapest thing to assay. Fc-dependent functions are real, often decisive, and hard to measure — worth remembering when you meet correlates of protection in [4.2](04-02-immunological-memory-vaccines.md).

## One-liner

> Fab picks the target and Fc picks the consequence — and because C1q and the Fcγ receptors only fire when they are clustered, every Fc-dependent effector function is a readout of antibody **density on a surface**, never of antibody concentration in blood.

## Problems

**P1 (🟢)** A therapeutic **IgG1** monoclonal binds a protein expressed on the surface of a leukemia cell. (a) Name the three effector mechanisms available to it, and the effector cell or protein each recruits. (b) The same variable regions are re-made as an F(ab')₂ fragment. Which mechanisms survive? (c) The same variable regions are re-made as **IgG4**. Predict the change in tumour-cell killing and say why.

**P2 (🟡, connects to allergy therapy)** A patient has serum IgE of 100 ng/mL (molar mass 190 kDa) and mast-cell FcεRI with $K_d = 1.0\times10^{-10}$ M. (a) Compute fractional FcεRI occupancy. (b) Omalizumab, an anti-IgE antibody engineered *not* to cross-link receptor-bound IgE, lowers **free** IgE 100-fold. Compute the new occupancy. (c) Clinical benefit takes weeks to appear even though free IgE drops within days. Explain, using a number from this lesson.

**P3 (🔴, bridges to [prob-stat-refresher 2.2](../../prob-stat-refresher/lessons/02-02-discrete-distributions.md))** Antibodies bind independently to a virion's surface spikes, so the number bound per virion is Poisson with mean $\lambda$, proportional to antibody concentration. Virus A requires **at least 5** bound antibodies to be neutralized (a coating mechanism); virus B requires **at least 1** at a critical site (a single-hit mechanism). (a) Compute the neutralized fraction for each at $\lambda = 2$ and at $\lambda = 10$. (b) Show that at low $\lambda$ the neutralized fraction for a mechanism requiring $n$ hits scales as $\lambda^{n}$, and say what that means for the slope of a neutralization curve plotted on log–log axes. (c) Which virus gives a cleaner correlate of protection for a vaccine, and why?

<details>
<summary>Solutions</summary>

**P1 (a)** Three mechanisms, all Fc-dependent:

1. **Opsonization / phagocytosis** — clustered Fc engages **FcγRI, FcγRIIA and FcγRIIIA** on macrophages and neutrophils, which ingest the coated cell (in practice, for a large target, trogocytosis and phagocytosis by liver and splenic macrophages).
2. **Complement-dependent cytotoxicity** — clustered Fc recruits **C1q**, launching the classical pathway of [1.5](01-05-complement-system.md) to C3b deposition (more opsonin) and the C5b–C9 MAC.
3. **ADCC** — **NK-cell FcγRIIIA** reads the bound IgG and triggers directed perforin/granzyme release ([1.4](01-04-inflammation-innate-effectors.md), [4.1](04-01-cytotoxic-t-cells.md)).

*(Direct signalling through the target antigen itself — growth arrest, apoptosis — can also occur, but it is a Fab effect and antigen-specific, not a generic effector function.)*

**(b)** F(ab')₂ retains both Fab arms and both antigen-binding sites, so it retains **bivalent binding and any neutralizing or receptor-blocking activity**, and it can still agglutinate. It has **no Fc**, so it loses **all three** mechanisms in (a). It also loses **FcRn rescue**, so its half-life collapses from ~21 days to hours — which is precisely why F(ab')₂ and Fab fragments are used where you want fast, transient, Fc-silent binding (digoxin and snake-venom antitoxins, abciximab).

**(c) Killing falls sharply.** IgG4 has a **hinge and CH2 that bind C1q essentially not at all**, so complement-dependent cytotoxicity is lost; its FcγR profile is **biased toward the inhibitory FcγRIIB**, so the activating-to-inhibitory ratio drops and both phagocytosis and ADCC weaken. Worse, IgG4 undergoes **Fab-arm exchange**: its hinge disulfides are dynamic, so half-molecules swap between IgG4 molecules in vivo and the antibody becomes **functionally monovalent and bispecific** — it can no longer cross-link two target antigens, which removes even the avidity and clustering it would need to work.

**IgG4 is the isotype you choose when you want binding without consequences** — which is exactly why the checkpoint blockers pembrolizumab and nivolumab are IgG4: the point is to occupy PD-1 on the patient's own T cells, not to kill them ([4.5](04-05-immunodeficiency-tumor-transplant.md)). For a tumour-cell-killing antibody it is the wrong choice, and IgG1 is right.

**P2 (a)** $$[\text{IgE}] = \frac{1.0\times10^{-4}\ \text{g L}^{-1}}{1.9\times10^{5}\ \text{g mol}^{-1}} = 5.26\times10^{-10}\ \text{M}.$$

$$\theta = \frac{5.26\times10^{-10}}{5.26\times10^{-10} + 1.0\times10^{-10}} = \frac{5.26}{6.26} = \mathbf{0.84}.$$

**84 percent of FcεRI is already loaded** at an entirely ordinary serum IgE. The tripwire is armed before any allergen appears.

**(b)** Free IgE falls to $5.26\times10^{-12}$ M:

$$\theta = \frac{5.26\times10^{-12}}{5.26\times10^{-12} + 1.0\times10^{-10}} = \frac{5.26}{105.26} = \mathbf{0.050}.$$

**Occupancy falls from 84 percent to 5 percent** — a 17-fold reduction in armed receptor from a 100-fold reduction in free ligand. The sub-proportional response is just the shape of a binding curve: at 84 percent you are on the saturated shoulder, where large concentration changes buy modest occupancy changes, and the payoff arrives only once you drop below $K_d$.

**(c)** Because **the calculation in (b) describes the equilibrium, and mast cells are nowhere near equilibrium on a scale of days.** Already-bound IgE dissociates with a half-time of about **8 days** ($t_{1/2} = \ln2/k_{\text{off}}$ with $k_{\text{off}} \approx 10^{-6}\ \text{s}^{-1}$). Omalizumab is deliberately engineered *not* to bind receptor-bound IgE — if it did, it would cross-link FcεRI and cause the anaphylaxis it is meant to prevent — so it can only mop up free IgE and wait for the armed receptors to unload on their own.

Several dissociation half-times is several weeks, which is the observed clinical lag. (FcεRI is also progressively downregulated once unoccupied, which deepens the effect and lengthens it further.)

**P3 (a)** For a Poisson variable with mean $\lambda$, $P(k) = e^{-\lambda}\lambda^{k}/k!$.

*Virus A ($n \ge 5$), $\lambda = 2$:*

| $k$ | 0 | 1 | 2 | 3 | 4 |
|---|---|---|---|---|---|
| $P(k)$ | 0.1353 | 0.2707 | 0.2707 | 0.1804 | 0.0902 |

$$\sum_{k=0}^{4}P(k) = 0.9473 \;\Longrightarrow\; P(\ge5) = \mathbf{0.053}.$$

*Virus A, $\lambda = 10$:* $P(0..4) = 0.0000454 + 0.000454 + 0.00227 + 0.00757 + 0.01892 = 0.02925$, so

$$P(\ge5) = \mathbf{0.971}.$$

*Virus B ($n\ge1$):* $P = 1-e^{-\lambda}$, giving $1 - e^{-2} = \mathbf{0.865}$ at $\lambda = 2$ and $1-e^{-10} = \mathbf{0.99995}$ at $\lambda = 10$.

**A five-fold increase in antibody takes virus A from 5 percent to 97 percent neutralized, and virus B from 86 percent to 99.995 percent.** Same antibody, same concentrations, utterly different curves.

**(b)** For small $\lambda$ the leading term of $P(\ge n)$ is $P(n)$ itself:

$$P(\ge n) = e^{-\lambda}\sum_{k\ge n}\frac{\lambda^{k}}{k!} \approx \frac{\lambda^{n}}{n!} \quad (\lambda \ll 1).$$

Taking logs, $\log P \approx n\log\lambda - \log n!$, so **a plot of log neutralized fraction against log antibody concentration has slope $n$ at low concentration.**

*In words: the steepness of the neutralization curve reports the number of antibodies the mechanism requires* — the same Hill-slope-as-stoichiometry reading that cooperative binding gets in [biophysics 2.4](../../biophysics/lessons/02-04-cooperativity-allostery.md). A shallow curve means single-hit; a steep one means coating.

**(c) Virus A — the multi-hit virus — gives the cleaner correlate**, though it is the harder virus to protect against.

The reason is the threshold. A multi-hit mechanism is nearly all-or-nothing: below a critical titre almost nothing is neutralized, above it almost everything is, and the transition is compressed into well under a log of concentration. So there is a genuine **protective threshold titre**, it is sharply defined, and "titre above $T$" is a meaningful licensing criterion — the situation for measles and hepatitis B, where a numeric antibody threshold really does predict protection.

Virus B's shallow single-hit curve gives **graded partial protection with no threshold anywhere**. Every titre helps a little; no titre is a clean bar to clear. Correlates of protection for such pathogens end up statistical rather than mechanistic.

**The design corollary**, which matters for [4.2](04-02-immunological-memory-vaccines.md): for a multi-hit target, the vaccine's job is to keep titre *above the knee* for as long as possible, so half-life and boosting schedule dominate the design — and the FcRn arithmetic of Example 2 becomes a vaccine-design parameter, not a piece of trivia.

</details>

## Flashback

**From Lesson 2.5 (Antigen processing & presentation):** A dendritic cell is given the same viral protein in three forms: (i) free soluble protein, (ii) the protein as an IgG-containing immune complex, (iii) the protein synthesized from a transfected gene in the cell's own cytosol. (a) For each, name the compartment, the MHC class and the responding T cell. (b) The cell is now treated with chloroquine, which raises endosomal pH. Which presentation fails, and which two acid-dependent steps break? (c) In a separate experiment invariant chain is knocked out. Predict what class II reaches the surface carrying.

<details>
<summary>Solution</summary>

**(a)**

| Form | Route | Compartment | MHC | T cell |
|---|---|---|---|---|
| (i) soluble protein | fluid-phase endocytosis | acidifying endosome → MIIC | **class II** | CD4 |
| (ii) IgG immune complex | **FcγR-mediated uptake** | endosome → MIIC, *and* cross-presentation | **class II and class I** | CD4 **and** CD8 |
| (iii) cytosolic synthesis | proteasome → TAP → ER | cytosol / ER peptide-loading complex | **class I** | CD8 |

Form (ii) is the interesting one, and it is today's lesson arriving in the flashback: **an Fc receptor is not only a trigger for eating, it is a routing signal.** FcγR-mediated uptake delivers antigen to a cross-presentation-competent compartment and simultaneously supplies an activating signal that matures the dendritic cell, so IgG-complexed antigen primes CD8 responses far better than the identical free protein. Antibody made in an earlier round of the response therefore improves antigen *presentation* in the next — a feed-forward link from humoral to cellular immunity.

**(b) Class II presentation fails; class I is untouched.** Two acid-dependent steps break:

1. **Cathepsin proteolysis** — the endosomal cathepsins (S, L) that both fragment the antigen and chew invariant chain down to CLIP are acid-activated and acid-optimal.
2. **HLA-DM-catalysed peptide exchange** — DM's ability to release CLIP and edit in a higher-affinity peptide is strongly pH-dependent and essentially inactive at neutral pH.

Class I is generated in the cytosol and loaded in the ER, both at neutral pH, so it is unaffected. (The *vacuolar* branch of cross-presentation, which loads recycling class I in the endosome, is impaired; the dominant *cytosolic* branch, which exports antigen to the proteasome and back through TAP, is not.)

**(c) Class II reaches the surface loaded with the wrong peptides — endogenous, ER- and cytosol-derived ones — and gets there inefficiently.** Invariant chain has three jobs: it chaperones class II folding, its CLIP segment **occupies the groove in the ER so that class II cannot capture the peptides destined for class I**, and its cytoplasmic tail carries the targeting motif that routes class II to the MIIC. Knock it out and class II binds whatever is available during ER assembly, misfolds and aggregates more often, and traffics poorly.

**The compartmental logic of Module 2 collapses without it.** Invariant chain is not a chaperone detail — it is the mechanism that enforces "class I reports the cytosol, class II reports the endosome."

</details>

## Connections

- **Backward:** [2.1](02-01-antigens-antibody-structure.md) split the molecule into a recognition end and an instruction end; this lesson reads the instructions. The clustering requirement is [2.2](02-02-bcr-affinity-avidity.md)'s cross-linking logic reused on the effector side, the classical pathway is [1.5](01-05-complement-system.md) with an antibody as its trigger, and the effector cells are [1.4](01-04-inflammation-innate-effectors.md)'s phagocytes and NK cells taking orders from the adaptive system.
- **Forward:** [4.2](04-02-immunological-memory-vaccines.md) needs the isotype table for correlates of protection, and needs FcRn for maternal IgG transfer and the infant's window of vulnerability. [4.4](04-04-autoimmunity-hypersensitivity.md) is this lesson misdirected — type I is IgE on FcεRI, type II is complement and ADCC against a host cell, type III is immune complexes clustering Fc in the wrong place. [4.5](04-05-immunodeficiency-tumor-transplant.md) is this lesson as engineering.
- **Sideways:** the occupancy arithmetic is [biophysics 2.3](../../biophysics/lessons/02-03-ligand-binding-occupancy.md), and the hit-number-as-slope reading in P3 is the same argument as the Hill coefficient in [biophysics 2.4](../../biophysics/lessons/02-04-cooperativity-allostery.md); the Poisson machinery is [prob-stat-refresher 2.2](../../prob-stat-refresher/lessons/02-02-discrete-distributions.md); ITAM and ITIM signalling and the endosomal recycling that FcRn exploits are [molecular-cell-biology 2.1](../../molecular-cell-biology/lessons/02-01-receptors-reading-outside-world.md) and [molecular-cell-biology 1.4](../../molecular-cell-biology/lessons/01-04-endomembrane-trafficking.md).
