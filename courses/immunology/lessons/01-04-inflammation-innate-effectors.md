# Immunology · Lesson 1.4: Inflammation & innate effector cells

> ⏱ ~15 min · Module 1: Architecture & Innate Defense · Builds on: [1.3](01-03-barriers-sensing-danger.md), [1.1](01-01-immune-problem-cellular-cast.md) · Unlocks: 1.5 (the complement system)

## Why this matters

[1.3](01-03-barriers-sensing-danger.md) ended with a receptor firing. This lesson is what happens next, and it is where innate immunity stops being a recognition problem and becomes a **logistics problem under a deadline**.

The deadline is real and it is short. *Staphylococcus aureus* in warm tissue doubles roughly every 30 minutes. An adaptive response takes 3–5 days. **If the innate system could not hold the line, nothing the rest of this course describes would ever arrive in time** — by day four the bacteria would have had nearly 200 doublings. The whole architecture of inflammation follows from that arithmetic: the responders must be pre-made, pre-positioned, and summonable in minutes.

Two payoffs. First, the four cardinal signs of inflammation — redness, heat, swelling, pain — stop being a list and become *predictions* from vascular mechanics. Second, you get the course's most elegant piece of logic in NK cells, which kill targets for **not** displaying something. That inverted rule is what closes the escape route from cytotoxic T cells ([4.1](04-01-cytotoxic-t-cells.md)) before we have even met them.

## The idea

**Inflammation is a deliberate, locally-triggered change in the state of the blood vessels.** That is the whole of it. A sentinel cell in the tissue detects a breach and releases mediators; the mediators act on the nearest post-capillary venules; the vessel wall becomes leaky and sticky; and blood-borne cells and plasma proteins that were previously confined to the lumen are delivered into the tissue.

**The four cardinal signs are four consequences of that one change**, and each falls out of a mechanism you can name:

| Sign | Mechanism |
|---|---|
| *Rubor* (redness), *calor* (heat) | Arteriolar **vasodilation** — histamine, prostaglandins, NO — raises local blood flow, bringing warm, oxygenated, red blood |
| *Tumor* (swelling) | **Increased venular permeability** — endothelial junctions open — so plasma protein escapes, interstitial oncotic pressure rises, and net filtration jumps |
| *Dolor* (pain) | **Bradykinin and PGE2 sensitize nociceptors**, lowering their firing threshold |
| *Functio laesa* (loss of function) | The other four, plus swelling-induced mechanical disruption |

*Rubor* and *calor* are Poiseuille's law; *tumor* is the Starling equation with two of its terms altered ([physiology 2.3](../../physiology/lessons/02-03-hemodynamics-blood-pressure.md)); *dolor* is receptor sensitization ([neuroscience 3.3](../../neuroscience/lessons/03-03-audition-somatosensation.md)). **Nothing here is immunology-specific except the trigger.**

**The exudate is not incidental damage — it is the point.** Plasma leaking into tissue delivers complement ([1.5](01-05-complement-system.md)), antibody, clotting factors and fibrin, which walls off the site. Swelling is a delivery mechanism that happens to hurt.

**Then the cells arrive, in a fixed order, and the order is informative.** Neutrophils first (hours), monocytes second (days). Neutrophils are cheap, abundant, short-lived and violent; macrophages are expensive, durable, and do the thinking — cytokine production, antigen presentation, and eventually repair.

**The uncomfortable fact worth stating early: most of the tissue damage in inflammation is self-inflicted.** A neutrophil's arsenal — hypochlorous acid, elastase, extruded chromatin — has no specificity whatsoever. It cannot distinguish bacterium from host collagen. The immune system accepts collateral damage because the alternative is losing the exponential race, and then it must spend days actively cleaning up.

## The formal version

### The race: containment as a threshold, not a gradient

Let $B(t)$ be the number of bacteria at the site, $\mu$ their net growth rate (per hour), $P$ the number of phagocytes present, and $k$ the number of bacteria one phagocyte kills per hour. When bacteria are plentiful each phagocyte works at capacity, so clearance is **capacity-limited**, not proportional to $B$:

$$\frac{dB}{dt} = \mu B - kP$$

*In words: bacteria grow exponentially while phagocytes remove them at a flat rate set by how many phagocytes are present.* Setting the right-hand side to zero gives

$$\boxed{\;B^{*} = \frac{kP}{\mu}\;}$$

**and $B^{*}$ is an *unstable* equilibrium.** Below it, clearance wins and the infection is erased; above it, growth wins and the infection escapes. **This is why an infectious dose exists at all** — a threshold inoculum, not a dose–response curve.

The clean experimental confirmation is Elek and Conen's 1957 result: it takes on the order of $10^{6}$ staphylococci injected into human skin to produce a lesion, but only about $10^{2}$ **if a silk suture is placed with them**. The foreign body does not make the bacteria fitter; it locally cripples phagocytes, lowering $kP$ and hence $B^{*}$ by four orders of magnitude. **The threshold is a property of the defense, not of the pathogen.**

At low bacterial density the limiting step is encounter rather than killing capacity, and clearance becomes $cPB$ for some encounter rate $c$. Then $dB/dt = (\mu - cP)B$ and the criterion is $P > \mu/c$ — a *density* criterion independent of $B$. Both regimes matter; the capacity-limited one is where the deadline bites.

### Phagocytosis

1. **Recognition.** Either **direct** — a PRR on the phagocyte binding a PAMP ([1.3](01-03-barriers-sensing-danger.md)) — or **opsonin-mediated**, in which a soluble protein coats the microbe and the phagocyte binds *that*. The opsonins are complement C3b ([1.5](01-05-complement-system.md)) and antibody Fc ([3.4](03-04-antibody-effector-functions.md)). **Opsonization can raise uptake efficiency by orders of magnitude, and it is the mechanism by which adaptive immunity commands innate effectors.**
2. **Engulfment.** Actin-driven pseudopod extension zippers the membrane around the particle.
3. **Phagosome maturation.** Sequential Rab exchange and fusion with endosomes then lysosomes ([molecular-cell-biology 1.4](../../molecular-cell-biology/lessons/01-04-endomembrane-trafficking.md)), with the vacuolar ATPase acidifying the lumen to pH 4.5–5.
4. **The respiratory burst.** NADPH oxidase assembles on the phagosome membrane and dumps electrons onto oxygen:

$$\text{NADPH} + 2\,\text{O}_2 \;\longrightarrow\; \text{NADP}^{+} + \text{H}^{+} + 2\,\text{O}_2^{\bullet-}$$

$$2\,\text{O}_2^{\bullet-} + 2\,\text{H}^{+} \;\xrightarrow{\ \text{SOD}\ }\; \text{H}_2\text{O}_2 + \text{O}_2 , \qquad \text{H}_2\text{O}_2 + \text{Cl}^{-} + \text{H}^{+} \;\xrightarrow{\ \text{MPO}\ }\; \text{HOCl} + \text{H}_2\text{O}$$

*In words: the cell deliberately makes bleach in a sealed compartment.* Oxygen consumption rises many-fold within seconds — hence "burst". Lose the oxidase and you have **chronic granulomatous disease**, whose phenotype is a prediction we will make in [4.5](04-05-immunodeficiency-tumor-transplant.md).

### The three innate effectors

**Neutrophils.** 50–70 percent of blood leukocytes, $2$–$7 \times 10^{9}$ per litre, produced at about $10^{11}$ per day, and dead within a day or two of leaving the marrow. They are **consumables**. Recruitment follows the adhesion cascade of [1.2](01-02-lymphoid-organs-cell-traffic.md) — selectin-mediated rolling, chemokine-triggered integrin activation, arrest, diapedesis — with CXCL8 (IL-8) as the dominant chemokine. Beyond phagocytosis they degranulate extracellularly and they cast **NETs**: decondensed chromatin studded with histones and elastase, thrown out as a sticky trap. NETs also seed thrombosis and expose nuclear self-antigens, which is one route into lupus ([4.4](04-04-autoimmunity-hypersensitivity.md)). Pus is spent neutrophils.

**Macrophages.** Long-lived tissue sentinels. Many tissue-resident populations (microglia, Kupffer cells, alveolar macrophages) are seeded embryonically and self-renew locally rather than descending from blood monocytes — the older textbook picture was wrong about this. They phagocytose, they are the main early source of TNF, IL-1 and IL-6, they present antigen, and they clear apoptotic cells. The **M1 versus M2** polarization scheme (classically activated and inflammatory versus alternatively activated and reparative) is a useful pair of poles and **a genuine oversimplification** — real macrophages occupy a continuum set by their tissue and the local cytokine mix.

**NK cells.** Lymphoid by lineage but innate in behaviour: no somatic receptor rearrangement, no clonal expansion needed, ready to kill immediately. Their decision rule is the counterintuitive part. An NK cell integrates **inhibitory** receptors (KIRs, NKG2A) reading MHC class I against **activating** receptors (NKG2D, natural cytotoxicity receptors) reading stress-induced ligands such as MICA/MICB. Schematically:

$$S = \underbrace{\textstyle\sum_i a_i A_i}_{\text{activating}} - \underbrace{\textstyle\sum_j b_j I_j}_{\text{inhibitory}}, \qquad \text{kill if } S > \theta$$

*In words: a cell is spared not because it proves it is healthy, but because it keeps showing enough MHC class I to veto the kill.* This is **missing-self** recognition, and it produces the course's tidiest piece of engineering:

$$\text{virus hides from CTLs by removing MHC-I} \;\Longrightarrow\; \text{the NK veto disappears} \;\Longrightarrow\; \text{NK kills}$$

**A pincer.** Display your peptides and cytotoxic T cells audit them ([2.5](02-05-antigen-processing-presentation.md), [4.1](04-01-cytotoxic-t-cells.md)); stop displaying and NK cells kill you for the silence. Notice also what missing-self demands: NK cells must be *calibrated* against the host's own MHC alleles during development — a process called licensing, and the reason [2.4](02-04-mhc-molecules.md)'s polymorphism has consequences here too.

### Cytokines: the coordination layer

| Mediator | Source | Effect worth remembering |
|---|---|---|
| **TNF** | macrophages, mast cells | Endothelial activation: adhesion molecules and permeability. Systemically, it *is* septic shock |
| **IL-1β** | inflammasome, after two signals ([1.3](01-03-barriers-sensing-danger.md)) | Fever, endothelial activation, IL-6 induction |
| **IL-6** | macrophages | Drives the hepatic **acute-phase response** — CRP can rise 1000-fold in 24–48 h |
| **CXCL8 and other chemokines** | many | The spatial gradient that steers leukocytes to the exact site |
| **Type I interferons (IFN-α/β)** | virus-infected cells, plasmacytoid DCs | The **antiviral state**: PKR, OAS/RNase L and Mx in *neighbouring, uninfected* cells |

**Type I interferon is the one worth pausing on**, because it is a different strategy from everything else here. An infected cell's dying message makes its *neighbours* hostile to replication before they are infected — defense by degrading the local environment rather than by killing an enemy. Fever is a coordinated set-point change: IL-1 and IL-6 raise hypothalamic PGE2, which resets the thermostat ([physiology 1.1](../../physiology/lessons/01-01-homeostasis-feedback-control.md)) — you then feel cold and shiver *up* to the new set point.

### Resolution is active

Inflammation does not merely run out of fuel. Arachidonic-acid metabolism **switches class** from prostaglandins and leukotrienes to lipoxins, resolvins and protectins; neutrophils undergo apoptosis and are eaten by macrophages (**efferocytosis**), which is itself an anti-inflammatory signal driving TGF-β and IL-10 release and flipping the macrophage into repair mode. **Failure to terminate is its own disease category**: chronic inflammation, granuloma formation, fibrosis.

And when the local program goes systemic — TNF acting on the entire vasculature at once — you get **sepsis**: body-wide vasodilation (blood pressure collapses), body-wide permeability (plasma volume moves into tissue), and disseminated intravascular coagulation. **Sepsis is not an infection that is too big; it is an inflammatory response that is not local any more.**

## Picture

![A timeline of the innate response after a dermal breach. A row of six stage boxes runs from zero to ten minutes, where resident macrophages and mast cells sense microbial patterns and release histamine, TNF, IL-1 and CXCL8, through arteriolar dilation producing redness and heat, junction opening producing swelling and pain, neutrophil rolling and arrest with the oxidative burst and NETs, monocyte arrival and NK killing of missing-self targets, and finally efferocytosis and resolution or chronic granuloma. Below the boxes, three overlapping curves are plotted on a logarithmic vertical axis against a compressed time axis running from zero to seven days: bacterial load rises to a peak around six hours and then falls, neutrophils rise from about thirty minutes to a peak near twenty-four hours and then decline, and monocytes and macrophages start non-zero, rise later, and plateau across days two to seven. A footnote states that bacteria doubling every thirty minutes multiply the phagocyte requirement about fourfold for each hour of delay.](assets/01-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — the race, and the price of an hour).** A splinter drives $B_0 = 10^{4}$ *S. aureus* into the dermis, where they double every 30 minutes. About $10^{3}$ resident macrophages are present, each capable of killing $k = 5$ bacteria per hour. (a) Can the resident cells contain this? (b) What is the largest inoculum they *could* contain? (c) If neutrophil arrival is delayed, how many are needed at 2, 4, 6 and 12 hours?

**(a)** First the growth rate. A doubling time $t_d = 0.5$ h gives

$$\mu = \frac{\ln 2}{t_d} = \frac{0.693}{0.5} = 1.386\ \text{h}^{-1}.$$

Compare the two rates at $t = 0$:

$$\text{growth} = \mu B_0 = 1.386 \times 10^{4} = 1.39\times 10^{4}\ \text{bacteria/h}, \qquad \text{clearance} = kP = 5 \times 10^{3} = 5\times10^{3}\ \text{bacteria/h}.$$

**Growth beats clearance by 2.8-fold — the residents lose.** They will slow the infection, not stop it.

**(b)** The threshold inoculum:

$$B^{*} = \frac{kP}{\mu} = \frac{5\times10^{3}}{1.386} = \mathbf{3.6\times10^{3}\ \text{bacteria}}.$$

**A clean garden-splinter dose of a few hundred organisms is erased silently and you never notice.** Ten thousand is above threshold and becomes a boil. The difference between "nothing happened" and "I needed antibiotics" is a factor of three in the inoculum.

**(c)** With no effective clearance, $B(t) = B_0 e^{\mu t}$, and containment at time $t$ needs $P_{\text{crit}}(t) = \mu B(t)/k = 0.277\, B(t)$:

| $t$ | $B(t)$ | Neutrophils needed |
|---|---|---|
| 2 h | $1.6\times10^{5}$ | $4.4\times10^{4}$ |
| 4 h | $2.6\times10^{6}$ | $7.1\times10^{5}$ |
| 6 h | $4.1\times10^{7}$ | $1.1\times10^{7}$ |
| 12 h | $1.7\times10^{11}$ | $4.7\times10^{10}$ |

**The requirement multiplies by exactly $e^{\mu} = 4$ per hour** — a doubling time of 30 minutes *is* fourfold per hour. Four hours' worth of neutrophils is a trivial commitment; the blood holds roughly $2.5\times10^{10}$ circulating neutrophils with a similar marginated pool, so the **12-hour** figure is the entire body's supply of neutrophils, spent on one splinter.

**That is the design constraint that explains everything in [1.2](01-02-lymphoid-organs-cell-traffic.md) and [1.3](01-03-barriers-sensing-danger.md).** Detection must be immediate because the cost of detection is exponential in the delay, and the responders must already exist because there is no time to make them. Run the same argument out to the adaptive system's 4 days: $4^{96}$ is a number with 58 digits, so the calculation stops meaning anything long before then (nutrients and space bound it in reality) — **but the conclusion survives: the adaptive response can never be a first line of defense. It arrives to a battle the innate system has been holding.**

*(A caveat worth keeping: $\mu$ here is the *net* rate in tissue, well below the in-vitro maximum, since iron sequestration, antimicrobial peptides and complement are all working against the bacterium from minute zero. The model is a scaling argument, not a simulation.)*

**Example 2 (why you'd care — the NK decision table, and why a virus cannot win by hiding).** Take the rule $S = A - I$ with kill threshold $\theta = 0$, where $A$ is total activating (stress-ligand) signal and $I$ is total inhibitory (MHC class I) signal, both in arbitrary matched units. Classify four cells.

| Cell | $A$ (stress ligands) | $I$ (MHC-I) | $S$ | NK verdict | CTL verdict |
|---|---|---|---|---|---|
| Healthy fibroblast | 1 | 10 | $-9$ | spared | spared (no foreign peptide) |
| Virus-infected, MHC-I intact | 6 | 10 | $-4$ | spared | **killed** (foreign peptide on MHC-I) |
| Virus-infected, MHC-I removed | 6 | 1 | $+5$ | **killed** | spared (nothing to audit) |
| Stressed tumour cell, MHC-I intact | 12 | 10 | $+2$ | **killed** | depends on neoantigen |

**Read the second and third rows together.** A virus that leaves MHC-I alone is destroyed by cytotoxic T cells. A virus that strips MHC-I to evade them lands in the third row and is destroyed by NK cells. **There is no value of $I$ that is safe once $A$ has risen** — the two mechanisms read opposite signals, so evasion of one is evidence for the other.

Row four is why NK cells matter in tumour surveillance ([4.5](04-05-immunodeficiency-tumor-transplant.md)): a transformed cell with intact MHC-I and no useful neoantigen is invisible to T cells but is flagged by NKG2D ligands, which are induced by DNA damage and by stalled replication — **NK cells read "this cell is under stress" rather than "this cell is foreign."**

**The system's own evasion counter-move is the tell that this logic is real.** Human cytomegalovirus encodes UL18, a decoy MHC-I homologue, and UL40, which supplies the peptide that stabilizes HLA-E — both of which restore the *inhibitory* signal after the virus has removed the real MHC-I. **A virus that pays for two extra genes purely to fake a veto signal is telling you the veto matters.**

## Watch out

- **You might think the cardinal signs are a memorized list.** They are four consequences of one change — the vascular state of post-capillary venules. Given vasodilation and increased permeability, you can *derive* all four, and derive edema's mechanism from the Starling terms ([physiology 2.3](../../physiology/lessons/02-03-hemodynamics-blood-pressure.md)).
- **You might think the damage in inflammation comes from the pathogen.** In most acute inflammation it comes from your own neutrophils. HOCl, elastase and NETs are not targeted weapons; the abscess cavity is largely self-inflicted, and this is why anti-inflammatory therapy can help even while the infection is uncleared.
- **You might read NK "missing-self" as killing anything without MHC-I.** In practice NK cells need an *activating* signal too — the healthy MHC-I-low cell in row one of the table is not killed, and NK cells that develop without ever engaging self-MHC are hyporesponsive rather than autoreactive (licensing). Missing-self removes a brake; it does not press an accelerator.
- **You might treat resolution as the response fizzling out.** It is an active program with its own mediators (lipoxins, resolvins) and its own triggering event (efferocytosis of apoptotic neutrophils). Failure of that program is chronic inflammation and fibrosis — a distinct disease mechanism, not just "more inflammation".
- **You might think sepsis is overwhelming infection.** It is overwhelming *response*: the same TNF-driven vasodilation and permeability that is useful in one cubic millimetre is lethal when applied to the whole vascular tree.
- **You might treat M1 and M2 as cell types.** They are ends of a continuum defined largely in culture. Tissue-resident macrophages have their own identities set by the organ they live in.

## One-liner

> Inflammation is one vascular change with four visible consequences, run against an exponential clock in which every hour of delay costs a fourfold larger phagocyte commitment — and the innate system covers its own blind spot by having NK cells kill for the *absence* of MHC class I, so the escape route from cytotoxic T cells leads straight into a second executioner.

## Problems

**P1 (🟢)** *E. coli* enters the peritoneum with a doubling time of 20 minutes. Resident macrophages number $2\times10^{4}$ and each kills $k = 4$ bacteria per hour. (a) Compute $\mu$ and the threshold inoculum $B^{*}$. (b) An inoculum of $10^{6}$ arrives — is it contained? (c) Neutrophils arrive at $t = 3$ h, by which time growth has been essentially unchecked. How many are required to halt the infection at that moment?

**P2 (🟡)** A virus deletes its MHC-I downregulation gene, so infected cells now display normal MHC-I loaded with viral peptide. (a) Using the $S = A - I$ rule, predict the NK and CTL verdicts on such a cell. (b) The mutant virus is *less* fit in a host with functioning CD8 T cells but *more* fit in a host given an NK-depleting antibody. Explain both results in one sentence each. (c) HCMV encodes a decoy MHC-I homologue rather than simply keeping its real MHC-I. What does the virus gain that keeping real MHC-I would not give it?

**P3 (🔴, bridges to physiology)** Inflamed tissue: arteriolar radius rises by 40 percent, capillary hydrostatic pressure $P_c$ rises from 32 to 45 mmHg, interstitial hydrostatic pressure $P_{if} = -2$ mmHg throughout, plasma oncotic pressure $\pi_c = 26$ mmHg, interstitial oncotic pressure $\pi_{if}$ rises from 5 to 18 mmHg as protein leaks, the reflection coefficient $\sigma$ falls from 0.9 to 0.5, and the filtration coefficient $K_f$ triples. (a) By what factor does blood flow through that arteriole change, and which cardinal signs does that produce? (b) Using $\text{NFP} = (P_c - P_{if}) - \sigma(\pi_c - \pi_{if})$, compute net filtration pressure before and after, and the fold change in fluid flux $J_v = K_f \times \text{NFP}$. (c) TNF now acts on the *entire* vasculature rather than one venule. State what happens to mean arterial pressure and to plasma volume, and name the syndrome.

<details>
<summary>Solutions</summary>

**P1 (a)** With $t_d = 20$ min $= 1/3$ h:

$$\mu = \frac{\ln 2}{1/3} = 3\ln 2 = 2.079\ \text{h}^{-1}.$$

$$B^{*} = \frac{kP}{\mu} = \frac{4 \times 2\times10^{4}}{2.079} = \frac{8\times10^{4}}{2.079} = \mathbf{3.85\times10^{4}\ \text{bacteria}}.$$

**(b)** $10^{6} \gg 3.85\times10^{4}$, so the inoculum is **26-fold above threshold and is not contained.** The residents remove $8\times10^{4}$ bacteria per hour while the population is generating $2.079\times10^{6}$ per hour — they are removing under 4 percent of the increment.

**(c)** Three hours at a 20-minute doubling time is exactly 9 doublings:

$$B(3) = 10^{6} \times 2^{9} = 5.12\times10^{8}.$$

$$P_{\text{crit}} = \frac{\mu B}{k} = \frac{2.079 \times 5.12\times10^{8}}{4} = \mathbf{2.7\times10^{8}\ \text{neutrophils}}.$$

The $2\times10^{4}$ residents are negligible against this. **Note the scaling: the requirement is $512$ times what it would have been at $t = 0$** ($5.2\times10^{5}$), because the phagocyte requirement inherits the bacterium's doubling time exactly. Every 20 minutes of delay doubles the bill.

**P2 (a)** Restoring MHC-I means $I$ is high, so $S = A - I < 0$ and **the NK cell spares it.** But high MHC-I loaded with viral peptide is precisely the CTL's substrate, so **the CTL kills it.** The mutant has traded one executioner for the other.

**(b)** *Less fit with CD8 T cells present:* the mutant now displays viral peptide on abundant MHC-I, so infected cells are efficiently found and killed by CTLs, which the parent virus evaded.

*More fit when NK cells are depleted:* the parent virus's MHC-I downregulation is only worth paying for because NK cells punish it — remove NK cells and the parent's evasion strategy becomes pure profit while the mutant's high MHC-I is pure liability, so relative fitness inverts.

**This is the pincer demonstrated experimentally**, and it is the standard design of the mouse experiments that established missing-self.

**(c)** Real MHC-I would also present **viral peptides** — the molecule is not selective about what it loads ([2.5](02-05-antigen-processing-presentation.md)). A decoy homologue like UL18, or a peptide that stabilizes HLA-E (UL40), supplies the **inhibitory ligand for NK receptors without supplying an antigen-presentation platform for CTLs.**

$$\text{decoy MHC-I} \;\Rightarrow\; I \text{ high (NK vetoed)} \;\text{and}\; \text{no viral peptide displayed (CTL blind)}$$

**The virus has separated the two functions that the host deliberately fused into one molecule.** That the host's evolutionary answer was to make NK receptors polymorphic and to add activating receptors that recognize the decoys themselves is the ongoing half of the arms race.

**P3 (a)** Poiseuille: $Q \propto r^{4}$ at fixed pressure drop ([physiology 2.3](../../physiology/lessons/02-03-hemodynamics-blood-pressure.md)):

$$\frac{Q_{\text{after}}}{Q_{\text{before}}} = (1.4)^{4} = \mathbf{3.84}.$$

Nearly a fourfold increase in local blood flow, delivering warm, oxygenated, oxyhemoglobin-rich blood: **rubor and calor**. Note the second consequence — dilating the upstream arteriole is also what raises $P_c$ downstream, so vasodilation is the *cause* of part (b) as well.

**(b)** Before:

$$\text{NFP} = (32 - (-2)) - 0.9(26 - 5) = 34 - 18.9 = \mathbf{+15.1\ \text{mmHg}}.$$

After:

$$\text{NFP} = (45 - (-2)) - 0.5(26 - 18) = 47 - 4.0 = \mathbf{+43.0\ \text{mmHg}}.$$

$$\frac{J_{v,\text{after}}}{J_{v,\text{before}}} = \frac{3 K_f \times 43.0}{K_f \times 15.1} = 3 \times 2.85 = \mathbf{8.5\text{-fold}}.$$

**Three separate terms moved in the same direction**, which is the design: raised $P_c$ pushes harder, and the leaked protein both lowers $\sigma$ and raises $\pi_{if}$, gutting the oncotic pull that normally opposes filtration. Swelling (**tumor**) appears once this exceeds lymphatic drainage capacity, and the escaped plasma is carrying complement, fibrinogen and antibody into the tissue — **the edema is the delivery.**

**(c)** Systemically, with $\text{MAP} \approx \text{CO} \times \text{TPR}$: whole-body vasodilation collapses total peripheral resistance, so **MAP falls**; whole-body permeability moves plasma into the interstitium, so **plasma volume and hence venous return and cardiac output fall too** — both factors push in the same direction, which is why the hypotension is refractory to fluids alone. Add disseminated intravascular coagulation from endothelial activation and consumption of clotting factors.

The syndrome is **sepsis / septic shock**. The mechanistic point: **no new mechanism has appeared.** Every element is the useful local response, applied at the wrong scale — which is why anti-TNF therapy for sepsis was such an attractive idea, and why it largely failed in trials (by the time the patient presents, the cascade is downstream of TNF and highly redundant).

</details>

## Flashback

**From Lesson 1.2 (lymphoid organs & cell traffic):** Fingolimod is a functional antagonist of the S1P receptor S1PR1 on lymphocytes, used in multiple sclerosis. (a) Which step of the recirculation loop does it block, and what happens to lymph node size? (b) A patient on fingolimod develops a *Staphylococcus* skin abscess, and neutrophil recruitment to it is entirely normal. Explain why, in terms of which trafficking steps each cell type uses. (c) Their blood lymphocyte count falls from $1.8\times10^{9}$ to $0.3\times10^{9}$ per litre. Given that blood holds roughly 2 percent of the body's lymphocytes at any instant, what fraction of the *total* lymphocyte pool has been newly sequestered, and what does that say about reading the blood count as a measure of immunosuppression?

<details>
<summary>Solution</summary>

**(a)** It blocks **egress**. A lymphocyte leaves a node by following the S1P gradient — low inside the node, high in lymph and blood — through the efferent lymphatic. Functional antagonism internalizes and degrades S1PR1, so the cell cannot read the gradient and stays. Entry through the high endothelial venule is untouched, so **cells continue to arrive and stop leaving: the nodes enlarge** and the blood is depleted.

**Note that the drug does not kill anything.** It converts the lymph node from a flow-through scanning station into a holding pen, which in multiple sclerosis keeps autoreactive T cells away from the central nervous system.

**(b)** Different cells use different parts of the trafficking toolkit, and fingolimod hits only one part of one route.

- A **naive lymphocyte** uses CCR7 and L-selectin to enter through a high endothelial venule, then **S1PR1 to leave via efferent lymph** — the loop the drug breaks.
- A **neutrophil** never enters a lymph node in this sense. It leaves blood directly into inflamed tissue at a post-capillary venule via the rolling–arrest–diapedesis cascade — E- and P-selectin, CXCL8-triggered integrin activation, LFA-1/ICAM-1 arrest, PECAM-mediated transmigration — and it **never needs to leave the tissue at all**; it dies there.

**Egress is a lymphocyte-specific problem because recirculation is a lymphocyte-specific strategy.** Innate effectors are one-way traffic. Hence normal abscess formation, and the drug's real infectious risks (VZV reactivation, cryptococcal disease) are the ones that need *T cells at the tissue*, not the ones that need neutrophils.

**(c)** The fraction of circulating lymphocytes lost:

$$1 - \frac{0.3}{1.8} = 1 - 0.167 = 0.833, \ \text{i.e. } 83\ \text{percent of the blood compartment}.$$

But blood is only about 2 percent of the total pool, so the newly sequestered fraction of all lymphocytes is

$$0.833 \times 0.02 = 0.0167 \approx \mathbf{1.7\ \text{percent of the total lymphocyte pool}}.$$

**An 83 percent fall in the measured count corresponds to redistributing under 2 percent of the body's lymphocytes.** The cells are alive, in nodes, functional, and the effect reverses over weeks after stopping.

**The lesson: the blood count measures a compartment, not a population.** Contrast a B-cell-depleting antibody such as rituximab, which also drops a blood count but does so by *killing* the cells across compartments — the same numerical readout, an entirely different immunological state. Any time you read a cell count, ask whether the missing cells were destroyed or merely moved — [1.2](01-02-lymphoid-organs-cell-traffic.md)'s whole point is that most lymphocytes are somewhere else at any given moment.

</details>

## Connections

- **Backward:** [1.3](01-03-barriers-sensing-danger.md)'s PRRs are the trigger for every mediator here, and the inflammasome's two-signal interlock is what gates IL-1β; [1.2](01-02-lymphoid-organs-cell-traffic.md)'s adhesion cascade is reused verbatim for neutrophil recruitment, with inflamed venules substituting for high endothelial venules.
- **Forward:** [1.5](01-05-complement-system.md) supplies the opsonin (C3b) and the chemoattractants (C3a, C5a) this lesson kept naming, and it is the innate system's other amplification device; [3.4](03-04-antibody-effector-functions.md) shows adaptive immunity commandeering these same phagocytes through Fc receptors; [4.1](04-01-cytotoxic-t-cells.md) completes the NK pincer; [4.5](04-05-immunodeficiency-tumor-transplant.md) reads chronic granulomatous disease straight off the NADPH oxidase reaction above.
- **Sideways:** the cardinal signs are Poiseuille's fourth power and the Starling equation from [physiology 2.3](../../physiology/lessons/02-03-hemodynamics-blood-pressure.md), with fever as a set-point change in the sense of [physiology 1.1](../../physiology/lessons/01-01-homeostasis-feedback-control.md) and pain as nociceptor sensitization from [neuroscience 3.3](../../neuroscience/lessons/03-03-audition-somatosensation.md); the $dB/dt = \mu B - kP$ race is exponential growth with a harvest term, the same structure as [evolution-ecology 3.1](../../evolution-ecology/lessons/03-01-exponential-growth-demography.md) and one unstable fixed point away from [evolution-ecology 4.2](../../evolution-ecology/lessons/04-02-predation-lotka-volterra.md)'s predation models; phagosome maturation is the endolysosomal pathway of [molecular-cell-biology 1.4](../../molecular-cell-biology/lessons/01-04-endomembrane-trafficking.md) with a killing step bolted on.
