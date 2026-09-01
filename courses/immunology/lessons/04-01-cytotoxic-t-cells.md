# Immunology · Lesson 4.1: Cytotoxic T cells & cell-mediated killing

> ⏱ ~15 min · Module 4: Cellular Immunity, Memory & Immune Pathology · Builds on: [3.5](03-05-helper-t-cells-polarization.md), [2.5](02-05-antigen-processing-presentation.md) · Unlocks: [4.2](04-02-immunological-memory-vaccines.md)

## Why this matters

Antibody can only touch what is exposed. A virus replicating in the cytosol of one of your epithelial cells is chemically unreachable — no antibody, no complement, no phagocyte can get at it. **The only way to stop the factory is to destroy the building**, which means the immune system has to carry out an execution inside its own tissue.

That is a hard engineering problem, and it is worth stating precisely before any mechanism:

1. The target looks almost exactly like its neighbours — same tissue, same genome, differing only in a few peptides on its surface ([2.5](02-05-antigen-processing-presentation.md)).
2. The target is in **physical contact** with those neighbours.
3. The weapons are indiscriminate. Perforin and granzyme B will kill a hepatocyte, a neuron, or the killer itself.

**So the specificity of cytotoxic killing cannot be chemical. It has to be spatial.** That single sentence is the lesson: the cytotoxic T lymphocyte (CTL) does not carry a selective poison, it builds a sealed room around its target and releases a general poison into it. Everything else — the synapse geometry, the reoriented centrosome, the choice of apoptosis over lysis — follows from that constraint.

## The idea

A CD8 T cell does four things, in order.

**1. Read the report.** Every nucleated cell continuously loads samples of what its cytosol is making onto MHC class I and puts them on the surface ([2.5](02-05-antigen-processing-presentation.md)). This is a broadcast audit. The CTL's job is to read it and find a peptide that shouldn't be there.

**2. Get licensed.** Reading is not enough to start. A naive CD8 cell must be primed by a dendritic cell that has itself been activated by innate danger signals ([1.3](01-03-barriers-sensing-danger.md), [3.5](03-05-helper-t-cells-polarization.md)) — and often by a virus the dendritic cell was never infected with, which is exactly why **cross-presentation** exists.

**3. Build a room.** On meeting a target, the CTL forms an immunological synapse: a tight adhesion ring enclosing a cleft a few tens of nanometres deep. This is the containment vessel.

**4. Kill quietly.** Granules are delivered into that cleft and the target dies by **apoptosis**, not lysis — packaged, sealed, and eaten. A CTL that burst its targets would spray infectious virions and inflammatory debris into the tissue it is trying to protect.

Then it detaches, rearms, and does it again. **One CTL kills many targets in sequence**, which is the only reason the arithmetic of an antiviral response works at all.

## The formal version

### Priming: three signals and a licence

| Signal | Molecules | What it certifies |
|---|---|---|
| 1 | peptide–MHC I → TCR, stabilized by CD8 | "this exact peptide is present" |
| 2 | B7 (CD80/86) → CD28 | "an innate receptor fired; this is real" |
| 3 | IL-12, type I interferon | "it is a virus; become a killer" |

*In words: signal 1 says what, signal 2 says whether to believe it, signal 3 says what kind of response to make.* Signal 1 alone gives anergy or deletion — the same interlock as [3.5](03-05-helper-t-cells-polarization.md).

**CD4 help licenses the dendritic cell rather than the CD8 cell.** A Tfh-adjacent or Th1 CD4 cell engaging the same dendritic cell delivers CD40L → CD40, which raises B7 and 4-1BBL on that dendritic cell. **"Helpless" CD8 cells expand normally in a strong infection but make defective memory** — a fact that returns in [4.2](04-02-immunological-memory-vaccines.md) as a vaccine-design constraint.

### The synapse: three concentric zones

Seen face-on, the mature synapse is a bullseye of **supramolecular activation clusters** (SMACs):

- **cSMAC** (centre): TCR–peptide–MHC complexes and signalling kinases.
- **pSMAC** (ring): LFA-1 on the CTL gripping ICAM-1 on the target. **This ring is a gasket, not a handshake** — its job is to close the cleft.
- **dSMAC** (outer): the tall phosphatase CD45 and other bulky glycoproteins, physically excluded from the close-contact zone — the kinetic-segregation mechanism that lets TCR phosphorylation accumulate.

**Why the seal matters, quantitatively.** Take a synaptic cleft as a disc of radius $a = 2.5\ \mu\text{m}$ and gap $h = 15$ nm. Its volume is

$$V_{\text{cleft}} = \pi a^2 h = \pi (2.5\times10^{-6}\,\text{m})^2 (1.5\times10^{-8}\,\text{m}) = 2.9\times10^{-19}\ \text{m}^3 = 2.9\times10^{-16}\ \text{L}.$$

Release $n = 10^3$ perforin molecules into it:

$$c_{\text{cleft}} = \frac{10^3}{(6.02\times10^{23})(2.9\times10^{-16}\ \text{L})} = 5.6\times10^{-6}\ \text{M} \approx 5.6\ \mu\text{M}.$$

Release the same $10^3$ molecules into the free volume around a cell, a sphere of radius $10\ \mu\text{m}$ ($V = 4.2\times10^{-12}$ L), and you get $4.0\times10^{-10}$ M.

$$\boxed{\;\frac{c_{\text{cleft}}}{c_{\text{free}}} \approx 1.4\times10^{4}\;}$$

*In words: the seal buys four orders of magnitude in local concentration.* The target sits at micromolar perforin; a bystander one micron away sits at sub-nanomolar. **That ratio is the entire specificity mechanism.** No molecular recognition is involved in the killing step at all.

### Delivery: the centrosome does the aiming

Within one to two minutes of TCR engagement, the CTL's **centrosome (MTOC) migrates to the plasma membrane at the synapse** and effectively docks there. Lytic granules — secretory lysosomes — are then carried along microtubules toward their **minus ends** by dynein ([molecular-cell-biology 1.3](../../molecular-cell-biology/lessons/01-03-motors-cargo-logistics.md)), which now converge on the contact site, and fuse via SNAREs ([molecular-cell-biology 1.4](../../molecular-cell-biology/lessons/01-04-endomembrane-trafficking.md)) at a **secretory domain** just outside the cSMAC but inside the pSMAC ring.

**Read the logic backwards and it is elegant: the cell does not steer the granule, it moves the destination.** Relocating one organelle converts the entire pre-existing transport network into a delivery system aimed at one point.

### The two kill routes

**Perforin/granzyme (fast, minutes).** Perforin binds the target membrane in a $\text{Ca}^{2+}$-dependent way and oligomerizes — up to about 20 monomers — into a pore of order 10–20 nm ([biophysics 3.5](../../biophysics/lessons/03-05-membrane-mechanics.md) for the membrane physics). Its function is **delivery, not lysis**: it admits granzymes to the cytosol, directly and via disrupted endosomes. **Granzyme B** is a serine protease cutting after aspartate — the same specificity as a caspase — and it enters apoptosis by two redundant doors: direct cleavage of procaspase-3, and cleavage of Bid to tBid, triggering mitochondrial outer-membrane permeabilization and the apoptosome.

**Fas–FasL (slow, hours).** FasL trimers on the CTL cluster Fas on the target, assembling a death-inducing signalling complex (FADD → caspase-8 → caspase-3). Granule-independent and much slower; **its main job is immune regulation, not antiviral defense** — activation-induced cell death of lymphocytes, which is where it reappears in [4.3](04-03-self-tolerance-regulation.md).

### Why apoptosis and not lysis — a design point, not a detail

$$\text{necrosis} \Rightarrow \text{membrane rupture} \Rightarrow \text{infectious virions} + \text{DAMPs released}$$
$$\text{apoptosis} \Rightarrow \text{sealed blebs} + \text{caspase-activated DNase} \Rightarrow \text{phagocytosed intact}$$

Apoptosis keeps the membrane intact until phosphatidylserine exposure invites a macrophage to swallow the corpse whole. The caspase-activated DNase shreds the target's DNA — **including the viral genome**. Nothing infectious escapes, and no danger signals ([1.3](01-03-barriers-sensing-danger.md)) are spilled, so killing thousands of cells does not itself ignite inflammation.

**The CTL's own protection** is layered rather than absolute: LAMP1 (CD107a) lines the granule membrane, cathepsin B is deposited on the CTL surface during degranulation and chews up stray perforin, and the CTL's synaptic membrane is unusually lipid-ordered. This is why a CTL survives its own weapon while the cell 15 nm away does not.

### Serial killing and the clearance race

Because a CTL detaches once a target commits to apoptosis, its killing is best modelled as a **fixed capacity**, not a mass-action rate: with targets abundant, the limit is the CTL's own kill cycle. Let $T(t)$ be infected cells, $E$ the number of CTLs (roughly constant over a day), $r$ the per-capita rate at which infection spreads, and $\kappa$ the targets killed per CTL per day. Then

$$\boxed{\;\frac{dT}{dt} = rT - \kappa E\;}$$

*In words: the infection grows in proportion to how much of it there already is, but the killing term does not — it is capped by how many killers there are.* This is a saturated (Type II-like) functional response, the same structural point as the predation models in [evolution-ecology 4.2](../../evolution-ecology/lessons/04-02-predation-lotka-volterra.md); contrast the unsaturated mass-action form $dT/dt = (r - kE)T$ of [biophysics 4.1](../../biophysics/lessons/04-01-reaction-kinetics-mass-action.md), which decays whenever $kE > r$.

The linear equation solves immediately. With $T_{\max} \equiv \kappa E / r$,

$$T(t) = T_{\max} + (T_0 - T_{\max})\,e^{rt}, \qquad t_{\text{clear}} = \frac{1}{r}\ln\!\left(\frac{T_{\max}}{T_{\max}-T_0}\right).$$

$$\boxed{\;\text{Clearance is possible only if } E > E^* = \frac{r\,T_0}{\kappa}.\;}$$

**This is a hard threshold, not a gradient.** Below $E^*$ the infection grows without bound however long you wait; a hair above it, clearance happens in hours. That discontinuity is why the *timing* of the CD8 response — not just its size — decides the outcome.

### The system-level frame: MHC-I surveillance and the pincer

Every nucleated cell reports its cytosol; CTLs patrol; a virus that wants to hide must stop the report. But **downregulating MHC class I is a trap**: NK cells kill by missing-self detection, integrating inhibitory receptors that read MHC-I against activating receptors that read stress ligands ([1.4](01-04-inflammation-innate-effectors.md)).

$$\text{MHC-I high} \Rightarrow \text{CTL sees the peptide}, \qquad \text{MHC-I low} \Rightarrow \text{NK sees the absence}.$$

**Two mechanisms covering each other's escape route — the clearest instance in this course of the layered design actually paying off.** A non-lytic CTL product tightens the vice further: **IFN-γ** raises MHC-I, TAP and the immunoproteasome on neighbouring cells, so a single kill improves the auditability of the whole surrounding tissue.

## Picture

![A cytotoxic T cell and an infected target cell facing each other across a narrow synaptic cleft, with the adhesion ring drawn top and bottom as the seal, the central TCR and peptide-MHC cluster between them, and a secretory domain through which granule contents are released; inside the T cell the centrosome sits docked at the contact site with lytic granules travelling in along microtubules, while a bystander cell touching the same T cell is untouched and the target shows a fragmented nucleus. A table alongside shows that a cell with normal MHC-I is killed by the CTL and spared by NK cells, while a cell that has shut down MHC-I is invisible to the CTL but killed by NK cells, plus a small sketch of one T cell killing four targets in sequence.](assets/04-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — the kill-cycle budget, and why the dish lies).** Time-lapse microscopy of a CTL and target cells in a dish gives: 4 min of contact before the lethal hit is committed, a further 20 min attached before detachment, and 36 min of migration before the next contact. (a) Kills per hour and per day. (b) In tissue, intravital imaging gives 2–10 kills per CTL per day. Which term must change, and what does that connect to? (c) Recompute with a 6-hour search time.

(a) The cycle is
$$t_{\text{cycle}} = 4 + 20 + 36 = 60\ \text{min} \;\Rightarrow\; \mathbf{1\ \text{kill/hour}} = \mathbf{24\ \text{kills/day}}.$$

(b) The killing steps are fast and physically constrained; the free parameter is **search**. Setting 4 kills/day:
$$t_{\text{cycle}} = \frac{24\ \text{h}}{4} = 6\ \text{h} \;\Rightarrow\; t_{\text{search}} = 6\ \text{h} - 24\ \text{min} = \mathbf{5.6\ \text{h}}.$$

**In a dish the targets are a confluent lawn; in a tissue they are sparse and the CTL must crawl.** This is [1.2](01-02-lymphoid-organs-cell-traffic.md)'s search problem reappearing at the effector stage — and it explains why chemokine gradients and inflammation-driven adhesion, which shorten the search, matter as much to clearance as the killing machinery does.

(c) $t_{\text{cycle}} = 0.4 + 6 = 6.4$ h, so
$$\kappa = \frac{24}{6.4} = \mathbf{3.75\ \text{kills/CTL/day}}.$$

**A 10-fold change in search time changes the killing rate almost 7-fold. Nothing about the weapon changed.**

**Example 2 (why you'd care — the clearance race and its threshold).** A virus spreads through an epithelium such that infected cells double every 8 hours. At the moment CTLs arrive there are $T_0 = 10^6$ infected cells, and $\kappa = 4$ kills/CTL/day. Compute the CTL number required, and the clearance time for $E = 10^6$ and $E = 6\times10^5$.

$$r = \frac{\ln 2}{1/3\ \text{day}} = 3\ln 2 = 2.079\ \text{day}^{-1}.$$

$$E^* = \frac{r T_0}{\kappa} = \frac{(2.079)(10^6)}{4} = \mathbf{5.2\times10^{5}\ \text{CTLs}}.$$

**Roughly one CTL for every two infected cells** — killing capacity is not cheap, and this is why CD8 clones expand $10^4$–$10^5$-fold.

For $E = 10^6$: $T_{\max} = \kappa E/r = 4\times10^6/2.079 = 1.92\times10^6$, so
$$t_{\text{clear}} = \frac{1}{2.079}\ln\!\left(\frac{1.92}{1.92-1.00}\right) = \frac{\ln 2.08}{2.079} = \frac{0.734}{2.079} = 0.353\ \text{day} = \mathbf{8.5\ \text{h}}.$$

For $E = 6\times10^5$: $T_{\max} = 2.4\times10^6/2.079 = 1.154\times10^6$, so
$$t_{\text{clear}} = \frac{1}{2.079}\ln\!\left(\frac{1.154}{0.154}\right) = \frac{2.012}{2.079} = 0.968\ \text{day} = \mathbf{23\ \text{h}}.$$

For $E = 5\times10^5$: $T_{\max} = 9.6\times10^5 < T_0$, and $T$ **grows without bound. The virus wins.**

| $E$ | $E/E^*$ | Outcome |
|---|---|---|
| $5\times10^5$ | 0.96 | never cleared |
| $6\times10^5$ | 1.15 | cleared in 23 h |
| $10^6$ | 1.92 | cleared in 8.5 h |

**A twofold change in CTL number spans total failure and same-day clearance.** The nonlinearity is entirely in the $\ln$ term blowing up as $E \to E^*$.

**And $E^*$ scales with $T_0$, which is growing exponentially while the response is still being built.** Every 8 hours of delay in priming doubles the CTL number ultimately required. That is the quantitative statement of why the several-day adaptive lag ([1.2](01-02-lymphoid-organs-cell-traffic.md)) is so costly, why type I interferon buying time in the first hours ([1.4](01-04-inflammation-innate-effectors.md)) changes outcomes, and why pre-existing memory ([4.2](04-02-immunological-memory-vaccines.md)) is worth so much: memory does not make the killing faster, it makes $T_0$ small.

## Watch out

- **You might think the CTL aims its granules at the target.** It does not aim anything. It relocates the centrosome so that the pre-existing minus-end-directed transport network terminates at the contact site, and it seals the cleft so the released payload is concentrated $10^4$-fold. **Specificity is the seal, not the trajectory.**
- **You might think perforin kills by punching holes and letting the cell burst.** Osmotic lysis is not the main mode. Perforin is a **delivery device** for granzymes; the death is apoptotic, executed by caspases inside the target, and the target's membrane stays intact.
- **You might treat Fas–FasL as a second antiviral route.** It is real but slow, and its principal role is regulatory — deleting activated lymphocytes ([4.3](04-03-self-tolerance-regulation.md)). Perforin-deficient humans have catastrophic viral control despite intact Fas.
- **You might carry the in-vitro serial-killing rate into tissue.** It is an order of magnitude too high, because in a dish the search time is nearly zero.
- **You might read MHC-I downregulation as a clean escape.** It converts a CTL problem into an NK problem. Successful viruses do something much more specific — see P3.
- **You might equate "kills infected cells" with "clears the virus."** If a cell has already assembled and exported virions, killing it is bookkeeping. CTLs are one arm of a system in which interferon slows replication and antibody blocks the next round of entry ([3.4](03-04-antibody-effector-functions.md)).

## One-liner

> The cytotoxic T cell carries a poison that would kill anything, so its precision comes from geometry — a sealed synaptic cleft that concentrates the payload $10^4$-fold over the cell one micron away — and its power comes from serial killing, which still only clears an infection if the CTL count exceeds the sharp threshold $E^* = rT_0/\kappa$.

## Problems

**P1 (🟢)** A CTL in tissue takes 5 min to commit a lethal hit, stays attached 25 min more, then searches for 3.5 h before the next contact. (a) Compute $\kappa$ in kills per CTL per day. (b) An anti-inflammatory drug removes the chemokine gradient guiding the CTL, tripling the search time. Compute the new $\kappa$ and the fractional loss. (c) Which of the three time terms would you target to improve killing, and why is that not the same as improving the killing machinery?

**P2 (🟡)** Infected cells double every 12 h. CTLs arrive when $T_0 = 2\times10^5$, with $\kappa = 5$ kills/CTL/day. (a) Find $E^*$. (b) With $E = 3\times10^5$, find the clearance time. (c) The CTL response is delayed by one day, so the same $E = 3\times10^5$ arrives later. Recompute the required $E^*$ and the clearance time, and state the general scaling.

**P3 (🔴, bridges to tumour immunology in [4.5](04-05-immunodeficiency-tumor-transplant.md))** An infected cell normally displays $N = 200$ copies of the immunodominant viral peptide–MHC-I complex, and a CTL needs at least $n = 10$ such complexes to kill. Assume NK inhibitory receptors are satisfied — the cell is spared — only while surface MHC-I exceeds 30 percent of normal density. A virus encodes a protein that reduces all surface MHC-I to a fraction $f$ of normal, scaling the specific complex equally. (a) For what $f$ is the cell invisible to the CTL? (b) For what $f$ is it killed by NK cells? (c) Is there any $f$ that escapes both? Evaluate $f = 0.1$ explicitly. (d) Real viruses do escape CTLs. What must their strategy be instead, and name one implementation.

<details>
<summary>Solutions</summary>

**P1 (a)** Contact time is $5 + 25 = 30$ min $= 0.5$ h; search is 3.5 h.
$$t_{\text{cycle}} = 0.5 + 3.5 = 4\ \text{h} \;\Rightarrow\; \kappa = \frac{24}{4} = \mathbf{6\ \text{kills/CTL/day}}.$$

**(b)** Search becomes $3 \times 3.5 = 10.5$ h, so $t_{\text{cycle}} = 0.5 + 10.5 = 11$ h:
$$\kappa' = \frac{24}{11} = \mathbf{2.18\ \text{kills/CTL/day}}, \qquad \text{loss} = 1 - \frac{2.18}{6} = \mathbf{64\ \text{percent}}.$$

**(c)** **Target the search time** — it is 87.5 percent of the baseline cycle, so it is the only term with real leverage. Even reducing both contact terms to zero would raise $\kappa$ only from 6 to $24/3.5 = 6.9$, a 14 percent gain, while halving search raises it to $24/2.25 = 10.7$, a 78 percent gain.

**The point worth extracting: killing rate is a transport-limited quantity, not a biochemical one.** The lethal hit itself is already fast enough that improving perforin or granzyme would change nothing. This is the same structural situation as diffusion-limited enzymes — once a step is limited by finding the substrate, catalytic improvements are wasted — and it is why therapies that improve CTL *trafficking* into a tumour ([4.5](04-05-immunodeficiency-tumor-transplant.md)) can outperform therapies that improve CTL cytotoxicity.

**P2 (a)** $$r = \frac{\ln 2}{0.5\ \text{day}} = 1.386\ \text{day}^{-1}.$$

$$E^* = \frac{rT_0}{\kappa} = \frac{(1.386)(2\times10^5)}{5} = \mathbf{5.5\times10^{4}\ \text{CTLs}}.$$

**(b)** $T_{\max} = \kappa E/r = (5)(3\times10^5)/1.386 = 1.082\times10^6$, comfortably above $T_0 = 2\times10^5$:
$$t_{\text{clear}} = \frac{1}{1.386}\ln\!\left(\frac{1.082\times10^6}{1.082\times10^6 - 2\times10^5}\right) = \frac{\ln(1.227)}{1.386} = \frac{0.204}{1.386} = 0.147\ \text{day} = \mathbf{3.5\ \text{h}}.$$

**(c)** One day at a 12-hour doubling time is two doublings, so $T_0' = 4 \times 2\times10^5 = 8\times10^5$.

$$E^{*\prime} = \frac{(1.386)(8\times10^5)}{5} = \mathbf{2.2\times10^{5}} = 4E^*.$$

$E = 3\times10^5$ still exceeds this, so clearance still happens, but:
$$t_{\text{clear}}' = \frac{1}{1.386}\ln\!\left(\frac{1.082}{1.082-0.800}\right) = \frac{\ln(3.837)}{1.386} = \frac{1.345}{1.386} = 0.970\ \text{day} = \mathbf{23\ \text{h}}.$$

**A one-day delay quadrupled the CTL requirement and turned a 3.5-hour clearance into a 23-hour one — with an identical CTL army.**

**The scaling, stated generally:** $E^* \propto T_0$ and $T_0 \propto e^{r\tau}$ for a delay $\tau$, so

$$E^*(\tau) = E^*(0)\,e^{r\tau}.$$

**The cost of delay is exponential in the delay and independent of how good the killing is.** Every mechanism that buys time early — barriers ([1.3](01-03-barriers-sensing-danger.md)), interferon and innate effectors ([1.4](01-04-inflammation-innate-effectors.md)), pre-existing neutralizing antibody ([3.4](03-04-antibody-effector-functions.md)) — is therefore worth an exponential amount of adaptive effort later. That, and not any change in the killing step, is the mathematical argument for why vaccination works: memory collapses $\tau$.

**P3 (a)** The CTL sees $200f$ complexes and needs at least 10:
$$200f < 10 \;\Longrightarrow\; \boxed{f < 0.05}.$$

The virus must remove **95 percent** of surface MHC-I to blind the CTL.

**(b)** NK cells are held off only while $f > 0.30$, so
$$\boxed{f < 0.30 \Rightarrow \text{NK kills}}.$$

**(c)** Escaping both requires $f < 0.05$ **and** $f > 0.30$ simultaneously — an **empty set**. There is no level of global MHC-I downregulation that is safe.

At $f = 0.1$ the cell is at the worst point of the trade: it displays $200(0.1) = 20$ complexes, which is **above** the CTL threshold of 10, so the CTL still kills it; and $0.1 < 0.30$, so the NK cell kills it too. **Partial downregulation buys nothing and costs the inhibitory ligand.**

$$\begin{array}{lcc}
f & \text{CTL} & \text{NK} \\ \hline
1.00 & \text{kills} & \text{held off} \\
0.10 & \text{kills} & \text{kills} \\
0.02 & \text{blind} & \text{kills}
\end{array}$$

**(d)** The pincer forces escape to be **selective rather than global**: the virus must strip precisely the MHC-I molecules that restrict CTLs while preserving those that inhibit NK cells. Since the two functions are carried by different loci, this is possible.

- **HIV-1 Nef** downregulates HLA-A and HLA-B — the dominant CTL restriction elements — while **sparing HLA-C and HLA-E**, the dominant ligands for the inhibitory receptors KIR2DL and NKG2A. Both arms are defeated with one protein.
- **Human cytomegalovirus** goes further and supplies decoys: **UL18** is an MHC-I homologue that engages the inhibitory receptor LIR-1, and **UL40** carries a peptide that stabilizes surface HLA-E, satisfying NKG2A while the real class I molecules are being destroyed.

**Two lessons.** First, the existence of two independent surveillance mechanisms does not make escape impossible — it makes escape *expensive*, requiring dedicated, locus-specific viral genes rather than a single blunt one, which is a real evolutionary tax. Second, **tumours face exactly this problem and usually solve it worse**: many tumours lose $\beta_2$-microglobulin or the whole class I pathway outright, which should hand them to NK cells — and the fact that they nonetheless persist tells you the NK arm is being suppressed some other way, by the microenvironment and by Treg recruitment ([4.5](04-05-immunodeficiency-tumor-transplant.md)). Reading a tumour's MHC-I status is therefore diagnostic: it predicts whether checkpoint blockade, which works by unleashing CTLs, has anything to unleash.

</details>

## Flashback

**From Lesson 2.5 (antigen processing & presentation):** Two engineered B-cell lines, both with normal MHC class I, normal MHC class II genes, and normal TAP. Line A cannot express the **invariant chain** (Ii, CD74). Line B expresses invariant chain normally but lacks **HLA-DM**.

(a) In line A, where does a newly assembled class II molecule first meet peptides, and what peptides are they?
(b) Predict line A's ability to present an endocytosed bacterial toxin to a CD4 T cell.
(c) In line B, what occupies the class II groove at the cell surface, and why?
(d) Neither line has any defect presenting a cytosolic viral protein to a CD8 T cell. Why not?

<details>
<summary>Solution</summary>

**(a)** Class II α and β chains assemble in the **ER**, which is also where TAP is delivering cytosolic peptides for class I, and where signal-sequence fragments and misfolded-protein peptides accumulate. Invariant chain normally occupies the groove there. Without it, **class II meets peptides in the ER lumen — the class I pathway's cargo.** It leaves for the surface preloaded with the wrong compartment's peptides.

**(b) Severely impaired**, for two compounding reasons. The groove is already full before the molecule ever reaches an endosome, so the cathepsin-generated toxin peptides have nothing to bind. And Ii also carries the **targeting signal** that routes class II to the MIIC compartment, so without it much class II traffics straight to the plasma membrane and never visits the site of endocytic processing at all.

**(c) CLIP** — the residual invariant-chain fragment left in the groove after Ii is proteolytically trimmed. HLA-DM is the catalyst that releases CLIP and edits in higher-affinity peptides; with no DM, **class II reaches the surface still holding CLIP**, and CD4 responses to endocytosed antigen fail again — but for the opposite reason to line A. In A the groove was filled by the wrong peptides; in B it is blocked by the chaperone that was supposed to be removed.

**The pair makes 2.5's structural point sharply: invariant chain exists to enforce the separation of the two pathways, and HLA-DM exists to undo it at exactly the right moment.** Lose either and the compartmental logic collapses, in opposite directions.

**(d)** Because the class I pathway is **mechanistically independent**: proteasome → TAP → ER peptide-loading complex with tapasin and calreticulin → class I → surface. Neither Ii nor HLA-DM appears anywhere in it. Knocking out a class II-specific component leaves class I untouched — which is the whole design intent, and is why a cytosolic antigen still reaches a CD8 cell, exactly as it must for the surveillance system of this lesson to work.

</details>

## Connections

- **Backward:** [2.5](02-05-antigen-processing-presentation.md)'s class I pathway is the surface report this lesson reads, and cross-presentation is what makes CD8 priming possible against viruses that spare dendritic cells; [3.5](03-05-helper-t-cells-polarization.md)'s two-signal rule and CD40-mediated licensing govern whether a naive CD8 cell ever becomes a killer; [1.4](01-04-inflammation-innate-effectors.md)'s NK missing-self logic is the other half of the pincer.
- **Forward:** [4.2](04-02-immunological-memory-vaccines.md) turns $E^* = rT_0/\kappa$ into a vaccine argument, since memory works by shrinking $T_0$ rather than by improving $\kappa$; [4.3](04-03-self-tolerance-regulation.md) shows the same Fas–FasL machinery used to delete lymphocytes instead of pathogens; [4.5](04-05-immunodeficiency-tumor-transplant.md) applies the whole apparatus to tumour escape, checkpoint blockade and CAR-T.
- **Sideways:** the saturated killing term is a Type II functional response, structurally identical to [evolution-ecology 4.2](../../evolution-ecology/lessons/04-02-predation-lotka-volterra.md)'s predator–prey model, and the transport-limited killing rate of P1 is the same "diffusion beats catalysis" situation as the reaction-rate ceiling in [biophysics 4.1](../../biophysics/lessons/04-01-reaction-kinetics-mass-action.md); the granule delivery mechanism is minus-end dynein transport from [molecular-cell-biology 1.3](../../molecular-cell-biology/lessons/01-03-motors-cargo-logistics.md) with the destination moved rather than the route rewired.
