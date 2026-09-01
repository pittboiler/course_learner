# Immunology · Lesson 1.5: The complement system

> ⏱ ~15 min · Module 1: Architecture & Innate Defense · Builds on: [1.4](01-04-inflammation-innate-effectors.md), [1.3](01-03-barriers-sensing-danger.md) · Unlocks: 2.1 (antigens & antibody structure)

## Why this matters

Complement is where a cascade's **design** is the content. Roughly 30 plasma proteins, three entry points, one shared bottleneck, three outputs — and every structural choice in that architecture is answering a specific engineering problem.

Two of those choices are worth the lesson on their own. The first is **amplification**: a cascade's gain is the product of its stages, and complement's central stage is autocatalytic, so a single initiating event can coat a bacterium with $10^5$ molecules in minutes. The second is stranger. The dominant activation pathway **recognizes nothing at all** — it fires continuously, on every surface in your body, including your own cells. What distinguishes you from a bacterium is not that complement fails to attack you; it is that **your surfaces carry brakes and bacterial surfaces do not.**

That is a general principle, and complement is the cleanest instance of it: **discrimination by inhibition rather than by recognition.** Once you have it, paroxysmal nocturnal hemoglobinuria and atypical hemolytic uremic syndrome stop being facts to memorize and become predictions.

## The idea

**A cascade is an amplifier.** Each stage is an enzyme that makes many copies of the next stage's enzyme, so the gains multiply. Complement's cascade has one further trick: its central product, **C3b**, both *is* the output and *seeds more of the enzyme that made it*. That closes a positive feedback loop, and a positive feedback loop has a threshold.

**Three ways in, one door, three ways out.**

- **Classical** — triggered by clustered antibody Fc regions. This is an *adaptive* trigger wired into an innate system, which is why complement reappears in [3.4](03-04-antibody-effector-functions.md).
- **Lectin** — mannose-binding lectin (MBL) and ficolins bind microbial sugar patterns. These are soluble pattern-recognition receptors, exactly the PAMP logic of [1.3](01-03-barriers-sensing-danger.md) with a different output.
- **Alternative** — spontaneous hydrolysis of C3 in plasma, **continuously, on everything.**

All three converge on a **C3 convertase**, and everything downstream flows from there. The outputs:

| Output | Molecule | What it does | How important |
|---|---|---|---|
| Opsonization | C3b, iC3b on the surface | tagged for CR1/CR3 phagocytes ([1.4](01-04-inflammation-innate-effectors.md)) | **the workhorse** |
| Recruitment | C3a, C5a (anaphylatoxins) | diffuse away; C5a is a potent neutrophil chemoattractant | major |
| Lysis | C5b–C9 membrane-attack complex | punches a $\sim 10$ nm pore | **narrow** |

**Rank them now, because the deficiency phenotypes will confirm the ranking later.** Opsonization is what complement is mostly for. The membrane-attack complex (MAC) is a specialist tool that only works on an exposed lipid bilayer.

**The alternative pathway is the surprising one.** C3 has a strained internal thioester bond that hydrolyses spontaneously at a low rate, generating C3(H₂O), which recruits factor B and factor D to make a fluid-phase convertase. That convertase makes C3b, and C3b's exposed thioester attacks any nearby hydroxyl or amine — **any surface within reach.** There is no recognition step anywhere in that sentence.

So why are you not continuously destroyed? Because your cells are covered in regulators — DAF/CD55 and factor H accelerate the convertase's decay, MCP/CD46 with factor I cleave deposited C3b into inert iC3b, CD59 blocks C9 polymerization — and a bacterium's surface has none of them. **The cascade is a runaway process that host surfaces damp below threshold.**

## The formal version

Fix a surface and let $n(t)$ be the number of active C3 convertases on it. Three parameters:

- $k$ — C3 molecules cleaved per convertase per second. Order $1\ \text{s}^{-1}$.
- $\tau$ — mean lifetime of a convertase before it spontaneously decays. About $90$ s bare; about $30$ min ($\tau \approx 1800$ s) when stabilized by properdin.
- $f$ — the probability that a deposited C3b goes on to nucleate a *new* convertase (it must land on the surface, survive, and recruit factor B).

Each convertase makes new convertases at rate $fk$ and dies at rate $1/\tau$:

$$\frac{dn}{dt} = \left(fk - \frac{1}{\tau}\right) n \equiv \lambda n, \qquad n(t) = n_0 e^{\lambda t}$$

*In words: convertases breed by depositing C3b and die by falling apart; whichever rate is larger decides everything.*

Cumulative C3b deposited, since $dC/dt = k\,n(t)$:

$$\boxed{\;C(t) = \frac{k\,n_0}{\lambda}\left(e^{\lambda t} - 1\right)\;}$$

The sign of $\lambda$ is set by a single dimensionless group — the expected number of daughter convertases one convertase produces in its lifetime:

$$\boxed{\;R \equiv f k \tau, \qquad \lambda > 0 \iff R > 1\;}$$

*In words: $R$ is a reproduction number, exactly the $R_0$ of an epidemic, and complement's self/non-self decision is the threshold crossing $R = 1$.* Below it the deposition dies out; above it, it runs away. This is the transcritical threshold of [dynamical-systems 3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md), and the growth law is the one from [evolution-ecology 3.1](../../evolution-ecology/lessons/03-01-exponential-growth-demography.md).

**Two useful limits.**

If $\lambda > 0$, deposition doubles every $t_{1/2} = \ln 2/\lambda$ and saturates the surface. If $\lambda < 0$, the total C3b *ever* deposited from one seed is finite:

$$C(\infty) = \frac{k\,n_0}{|\lambda|} \qquad (\lambda < 0)$$

*In words: on a regulated surface the whole episode is over after a countable number of molecules.*

**Now put in numbers.** Take $k = 1\ \text{s}^{-1}$ throughout.

| Surface | $f$ | $\tau$ | $R = fk\tau$ | $\lambda$ (s⁻¹) | Outcome |
|---|---|---|---|---|---|
| Bacterium (no regulators) | $10^{-2}$ | $1800$ s | $\mathbf{18}$ | $+9.4\times10^{-3}$ | doubles every **73 s** |
| Your cell (DAF, factor H, MCP) | $10^{-3}$ | $10$ s | $\mathbf{0.01}$ | $-9.9\times10^{-2}$ | **$\sim\!10$ C3b, then stop** |

**The chemistry is identical on both surfaces. Only $f$ and $\tau$ differ, and they differ only because one surface carries regulators.** A factor of 10 in $f$ and a factor of 180 in $\tau$ buy four orders of magnitude in output.

**The rest of the cascade in one paragraph.** Classical and lectin entry both build the convertase $\text{C4b2a}$ (C1q → C1r/C1s, or MBL → MASP-1/2, cleaving C4 and C2); the alternative pathway builds $\text{C3bBb}$. Adding one more C3b to either converts it into a **C5 convertase**, which cleaves C5 into C5a (the chemoattractant) and C5b. C5b then nucleates the non-enzymatic assembly of C6, C7, C8 and 12–18 copies of C9 into the MAC. **Note where the enzymatic amplification stops: everything after C5 is stoichiometric**, one MAC per C5b, which is a second reason the lytic output is weaker than the numbers upstream suggest.

## Picture

![The complement cascade drawn left to right. Three input boxes on the left: classical, triggered by clustered antibody Fc through C1q and C1r and C1s; lectin, in which mannose-binding lectin or ficolin binds microbial sugars and activates MASP enzymes; and alternative, spontaneous C3 tickover at about one percent of plasma C3 per hour, always on. All three arrows converge on a central panel labelled C3 convertase, containing the two convertase forms C4b2a and C3bBb, which cleaves C3 at about one molecule per second for about thirty minutes, giving roughly two thousand C3b per convertase. A dashed blue amplification loop runs from the deposited C3b back to the convertase panel, labelled with the fact that about one in a hundred deposited C3b seeds a new convertase. On the right, three output boxes: opsonization by C3b and iC3b read by CR1 and CR3 on phagocytes, recruitment by the C3a and C5a anaphylatoxins, and lysis by the membrane-attack complex built from C5b through C9. A coral panel at the bottom lists the host regulators, and coral inhibitory bars mark where they act on the convertase and on the MAC. A callout compares the net gain from one seed convertase: one hundred thousand C3b in twelve minutes on an unprotected surface versus about ten C3b on a host surface.](assets/01-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — what always-on surveillance costs).** Plasma C3 is about $1.2$ mg/mL with molecular weight $185$ kDa, plasma volume about 3 L, and tickover consumes roughly 1 percent of the plasma C3 pool per hour. (a) Molar concentration and total molecules. (b) Molecules and grams burned per day. (c) Sanity-check against measured C3 turnover.

**(a)** $$[\text{C3}] = \frac{1.2\ \text{g L}^{-1}}{1.85\times10^{5}\ \text{g mol}^{-1}} = 6.5\times10^{-6}\ \text{M} = 6.5\ \mu\text{M}.$$

$$N_{\text{total}} = 6.5\times10^{-6}\times 3\ \text{L}\times 6.022\times10^{23} = 1.2\times10^{19}\ \text{molecules} \;(\approx 3.6\ \text{g}).$$

**(b)** One percent per hour of $1.2\times10^{19}$ is $1.2\times10^{17}$ molecules per hour, i.e. $3\times10^{13}$ per second, or

$$0.01 \times 3.6\ \text{g/hr} \times 24 = \mathbf{0.86\ \text{g of C3 per day}}.$$

**(c)** Measured hepatic C3 synthesis is roughly 1–2 mg per kg per hour, which for a 70 kg adult is $1.7$–$3.4$ g/day. **Our tickover estimate is a large fraction of the entire measured turnover** — the numbers are consistent, and they say something real: a substantial share of your C3 budget is spent firing at nothing.

**That expense is why C3 is one of the most abundant plasma proteins.** An always-on sensor has to be paid for continuously, and complement pays in protein. **The cheap alternative — recognize first, then activate — is exactly what complement refused to do**, and the reason is coverage: a recognition-based system can only see what its receptors encode ([1.3](01-03-barriers-sensing-danger.md)'s few dozen specificities), while tickover covers every surface that exists.

**Example 2 (why you'd care — a red cell that lost its brakes).** Paroxysmal nocturnal hemoglobinuria (PNH) is a somatic mutation in *PIGA* in a hematopoietic stem cell, abolishing GPI-anchor synthesis. DAF/CD55 and CD59 are both GPI-anchored, so the entire clone's red cells lose both. Predict the phenotype quantitatively.

Losing DAF removes the decay acceleration, so the convertase lifetime on the red cell reverts toward the properdin-stabilized value. Take $\tau: 10\ \text{s} \to 1800\ \text{s}$ and, with factor H still partly working via sialic acid, $f: 10^{-3} \to 3\times10^{-3}$:

$$R = fk\tau = 3\times10^{-3}\times 1 \times 1800 = \mathbf{5.4} > 1 .$$

$$\lambda = 3\times10^{-3} - \frac{1}{1800} = 2.44\times10^{-3}\ \text{s}^{-1}, \qquad t_{1/2} = \frac{0.693}{2.44\times10^{-3}} = 284\ \text{s} \approx 5\ \text{min}.$$

**The red cell has crossed the threshold and is now, as far as complement is concerned, a bacterium.** It accumulates C3b and progresses to C5 convertase — and because CD59 is *also* gone, nothing stops C9 polymerization. The prediction is **chronic intravascular hemolysis**, which is exactly the disease: hemoglobinuria, worst at night, with a smouldering rather than explosive course because $R$ sits a little above 1 rather than far above it.

**The therapy falls straight out of the model.** Eculizumab is an anti-C5 antibody: it cannot restore the brakes, so it lets C3b keep accumulating, but it blocks the terminal step and abolishes the MAC. Prediction: intravascular hemolysis stops, but C3b-opsonized red cells are now cleared extravascularly by liver and spleen phagocytes — which is precisely what is observed in treated patients. **A drug that blocks one output cannot fix a defect in the shared step.**

## Watch out

- **You might think the alternative pathway is a backup that fires when the other two fail. It is the default, and it is also the amplifier.** Whichever pathway *initiates*, the majority of C3b that ends up on the surface is deposited by the alternative amplification loop. Classical and lectin are ignition; alternative is the engine.
- **You might think complement "recognizes" pathogens. Two-thirds of it does not.** The alternative pathway has no recognition step whatsoever. Its selectivity is entirely subtractive — it attacks everything and is switched off on self. Any statement of the form "complement distinguishes self from non-self by binding X" is describing at most the lectin pathway.
- **You might think the MAC is complement's main weapon because it is the dramatic one.** Opsonization is. C3 sits at the bottleneck and feeds every output; C5–C9 sit at the end of one branch and act stoichiometrically on a narrow class of target. If you rank the outputs by what their deficiencies cost, MAC comes last — which is the next section.

## One-liner

> Complement is an always-on amplifier that would coat every surface it touches; what makes a surface *self* is not that complement fails to see it, but that it carries the brakes.

## Problems

**P1 (🟢)** A single properdin-stabilized C3 convertase runs at $k = 1$ C3 per second for a mean lifetime $\tau = 1800$ s. (a) Ignoring the amplification loop, how many C3b does it deposit? (b) Using $[\text{C3}] = 6.5\ \mu\text{M}$, how many C3 molecules sit in the $1\ \mu\text{m}^3$ of plasma next to the convertase? (c) A 185 kDa protein has diffusion coefficient $D \approx 40\ \mu\text{m}^2\,\text{s}^{-1}$. Does the convertase locally exhaust its substrate? *(Diffusion is [biophysics 1.3](../../biophysics/lessons/01-03-diffusion-ficks-laws.md).)*

**P2 (🟡)** Atypical hemolytic uremic syndrome (aHUS) is often caused by a factor H mutation that leaves the protein's C3b-binding site intact but destroys its ability to dock on the host glycocalyx. On glomerular endothelium, take the healthy values $f = 10^{-3}$, $\tau = 10$ s and the mutant values $f = 5\times10^{-3}$, $\tau = 300$ s, with $k = 1\ \text{s}^{-1}$. (a) Compute $R$ for both. (b) With $f$ fixed at the mutant value, what is the critical $\tau$ at which the surface tips over? (c) Explain, from the value of $R$, why aHUS is an episodic chronic disease triggered by infection or pregnancy rather than a catastrophe at birth.

**P3 (🔴, optional)** Four patients, four defects: (i) complete C3 deficiency; (ii) factor H deficiency; (iii) C7 deficiency; (iv) a PNH clone lacking CD55 and CD59. Predict each one's dominant infectious or clinical phenotype and justify it from *which output is lost*. Then answer the question Module 1's boss problem asks: why is terminal (C5–C9) deficiency's phenotype so strikingly narrow — essentially *Neisseria* and little else?

<details>
<summary>Solutions</summary>

**P1**

**(a)** $$C = k\tau = 1\ \text{s}^{-1} \times 1800\ \text{s} = \mathbf{1800 \approx 2\times10^{3}\ \text{C3b}}.$$

Already an amplification of nearly $10^{3}$ from a *single* enzyme, before the loop does anything.

**(b)** $1\ \mu\text{m}^3 = 10^{-15}$ L, so

$$N = 6.5\times10^{-6}\ \text{mol L}^{-1} \times 10^{-15}\ \text{L} \times 6.022\times10^{23} = \mathbf{3.9\times10^{3}\ \text{molecules}}.$$

**(c)** No — and it is not close. The convertase consumes $1$ molecule per second from a local pool of $\sim\!3900$. Resupply time across $1\ \mu\text{m}$:

$$t = \frac{x^2}{6D} = \frac{(1\ \mu\text{m})^2}{6 \times 40\ \mu\text{m}^2\text{s}^{-1}} = 4.2\ \text{ms}.$$

**Substrate is replaced about 240 times per second against a consumption rate of once per second** — the enzyme is bathed at bulk concentration throughout.

*The useful corollary:* since the Michaelis constant for C3 is comparable to its plasma concentration, the convertase runs near half-maximal rate and **the cascade's speed is roughly proportional to serum C3**. That is why a falling serum C3 in active complement-consuming disease is both a marker of activation *and* a partial brake on it.

**P2**

**(a)** $$R_{\text{healthy}} = fk\tau = 10^{-3}\times 1 \times 10 = \mathbf{0.01} \ll 1 \quad \text{(dies out)}$$

$$R_{\text{mutant}} = 5\times10^{-3}\times 1 \times 300 = \mathbf{1.5} > 1 \quad \text{(runs away)}$$

The crossing is what matters, not the magnitude: healthy tissue sits **two orders of magnitude below threshold**, and the mutation moves it barely past it.

**(b)** Threshold is $R = fk\tau = 1$, so

$$\tau^{*} = \frac{1}{fk} = \frac{1}{5\times10^{-3}\times 1} = \mathbf{200\ \text{s}}.$$

At $\tau = 300$ s the surface is over threshold; at $\tau = 150$ s it would still be safe. **The margin is a factor of 1.5** — this is a system living close to its own bifurcation.

**(c)** With $R = 1.5$,

$$\lambda = 5\times10^{-3} - \frac{1}{300} = 1.67\times10^{-3}\ \text{s}^{-1}, \qquad t_{1/2} = \frac{0.693}{1.67\times10^{-3}} = 415\ \text{s} \approx 7\ \text{min}.$$

Compare the bacterial surface's 73 s. **Barely-supercritical growth is slow growth**, so damage accumulates over years in patches rather than all at once. And because $R$ is only 1.5, small perturbations decide the outcome: an infection raises properdin and consumes fluid-phase regulators (raising $\tau$ and $f$), pregnancy shifts complement regulation, and either can push a marginal surface over. **Between insults, $R$ can fall back below 1 and the process stops — which is what "episodic" means mechanistically.**

*(Why the kidney? The glomerular endothelium is fenestrated with a thin glycocalyx and depends unusually heavily on **fluid-phase** factor H docking rather than on membrane-bound regulators — so a factor H that cannot dock hurts it first.)*

**P3**

| Defect | Output lost | Phenotype | Reasoning |
|---|---|---|---|
| **(i) C3** | **all three** | severe, early, recurrent pyogenic infection (encapsulated bacteria); plus immune-complex disease | C3 is the bottleneck; no C3b means no opsonization, no C5 convertase, no MAC. Also no C3b tagging of immune complexes, which is how they are cleared |
| **(ii) Factor H** | effectively all three | *functionally* like C3 deficiency, plus aHUS / C3 glomerulopathy | unrestrained fluid-phase tickover **consumes** the C3 pool to exhaustion — a regulator deficiency presenting as a component deficiency |
| **(iii) C7** | **lysis only** | recurrent *Neisseria*; otherwise near-normal | opsonization and C3a/C5a are untouched, so nearly all of complement's real work still happens |
| **(iv) CD55 + CD59** | *no* output lost — brakes lost | chronic intravascular hemolysis (PNH) | the failure is excess, not deficit: $R$ on the red cell crosses 1 (Example 2) |

**Why the terminal phenotype is so narrow.** The MAC requires a **directly exposed lipid bilayer**. A Gram-positive organism's thick peptidoglycan wall holds the complex too far from the membrane for it to insert, so MAC never worked against those; a Gram-negative organism's outer membrane is exposed and *can* be lysed. So the MAC's entire domain is Gram-negative bacteria — and for almost all of those, opsonophagocytosis works fine, so losing the MAC costs nothing.

**The exception is the organism that defeats the other output.** *Neisseria* combines a polysaccharide capsule that blunts opsonophagocytosis with the ability to survive inside neutrophils, and it has the exposed outer membrane the MAC needs. It sits in the one cell of the table where MAC is the *only* mechanism that works:

|  | susceptible to opsonophagocytosis | resists opsonophagocytosis |
|---|---|---|
| **exposed outer membrane** | most Gram-negatives — MAC redundant | ***Neisseria*** — **MAC essential** |
| **thick wall / no exposed bilayer** | Gram-positives — MAC useless anyway | needs cellular immunity |

**The infection tells you the missing component**, which is the strongest evidence that the division of labour in this course is real — a theme [4.5](04-05-immunodeficiency-tumor-transplant.md) builds a whole lesson on.

*One clinical payoff:* eculizumab blocks C5, which is an **acquired** terminal deficiency. Meningococcal vaccination before treatment is therefore mandatory — the model predicts the required prophylaxis.

</details>

## Flashback

**From Lesson 1.3 (barriers & the sensing of danger):** (a) Classify bacterial flagellin, monosodium urate crystals, and host serum albumin as PAMP, DAMP, or neither, and name the sensing compartment for each. (b) Macrophages are treated with LPS alone, with extracellular ATP alone, or with LPS followed by ATP; mature IL-1β is released only in the third condition. Explain the interlock and why IL-1β specifically needs it. (c) Which activation pathway in today's lesson is a soluble version of a 1.3 pattern receptor, and what single host sugar keeps *both* that pathway and the alternative pathway off your cells?

<details>
<summary>Solution</summary>

**(a)**

| Molecule | Class | Sensed where, by what |
|---|---|---|
| Flagellin | **PAMP** | cell surface (TLR5) and cytosol (NAIP/NLRC4) — a structurally load-bearing microbial protein the bacterium cannot freely mutate |
| Monosodium urate crystals | **DAMP** | cytosol, via the NLRP3 inflammasome — a host metabolite in the wrong physical state and compartment |
| Serum albumin | **neither** | abundant host protein in its correct compartment; it carries no signal at all |

**The organizing rule from 1.3: compartment is information.** Nothing about urate is foreign; what is abnormal is where it is and what phase it is in.

**(b)** IL-1β is made as an inactive precursor and needs **two independent signals**:

- **Signal 1 (priming).** LPS → TLR4 → NF-κB → transcription of pro-IL-1β and NLRP3. Substrate now exists, but nothing cleaves it.
- **Signal 2 (activation).** Extracellular ATP → P2X7 → NLRP3 inflammasome assembly → caspase-1 → cleavage and release of mature IL-1β.

ATP alone fails because there is no pro-IL-1β to cleave; LPS alone fails because there is no active caspase-1. **Only the conjunction fires.**

**Why IL-1β in particular.** It is a systemic pyrogen with no signal peptide — its release is non-classical and effectively irreversible, and it drives fever and the acute-phase response body-wide. An interlock requiring *both* "a microbe is present" (signal 1) and "a cell nearby has been damaged" (signal 2) prevents a costly systemic response to a transient, harmless microbial encounter. **A weapon with systemic consequences is gated by a logical AND** — the same design argument as the two-signal requirement that will gate lymphocyte activation in Module 3.

**(c)** The **lectin pathway**. MBL and the ficolins are soluble pattern-recognition receptors reading the same kind of ligand as a membrane PRR — repetitive, terminally mannosylated microbial glycans — but coupling to a protease cascade instead of to a signalling cascade.

The sugar is **terminal sialic acid**, and it does double duty:

1. Host glycans are capped with sialic acid and galactose, so they are **not** in MBL's ligand set — the lectin pathway never starts on you.
2. Sialic acid (with heparan-sulfate glycosaminoglycans) is the polyanion that **docks factor H** onto host surfaces, collapsing $\tau$ and shutting the alternative pathway's amplification loop down.

**One host modification blocks one pathway by recognition and the other by regulation** — and it is exactly the modification several successful pathogens acquire. *Neisseria* and group B *Streptococcus* sialylate their own surfaces to recruit factor H, which is molecular mimicry aimed at a brake rather than at a receptor.

</details>

## Connections

- **Backward:** [1.4](01-04-inflammation-innate-effectors.md) introduced opsonins and asked what puts them on a bacterium — C3b is the answer, and C5a is the chemoattractant that recruits the neutrophils in that lesson's timeline. [1.3](01-03-barriers-sensing-danger.md)'s PAMP logic reappears as MBL, and its DAMP logic as complement activation on necrotic surfaces.
- **Forward:** the classical pathway is an *antibody effector function*, so it returns in [2.1](02-01-antigens-antibody-structure.md) (why pentameric IgM fixes complement so much better than a lone IgG) and [3.4](03-04-antibody-effector-functions.md). C3d-tagged antigen engaging the CD19/CD21 coreceptor lowers the B-cell activation threshold in [2.2](02-02-bcr-affinity-avidity.md) — innate output *licensing* adaptive activation. The deficiency logic is picked up in [4.5](04-05-immunodeficiency-tumor-transplant.md).
- **Sideways:** $R = fk\tau$ is a branching-process reproduction number — the same object as $R_0$ in epidemiology and the growth rate of [evolution-ecology 3.1](../../evolution-ecology/lessons/03-01-exponential-growth-demography.md); the sign change at $R = 1$ is the transcritical bifurcation of [dynamical-systems 3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md), and the one-dimensional flow picture is [dynamical-systems 1.1](../../dynamical-systems/lessons/01-01-flows-on-the-line.md). The convertase itself is ordinary enzyme kinetics ([biophysics 4.1](../../biophysics/lessons/04-01-reaction-kinetics-mass-action.md)), and the substrate-resupply argument in P1 is diffusion ([biophysics 1.3](../../biophysics/lessons/01-03-diffusion-ficks-laws.md)). GPI anchoring, whose loss causes PNH, is installed in the secretory pathway of [molecular-cell-biology 1.4](../../molecular-cell-biology/lessons/01-04-endomembrane-trafficking.md).
