# Immunology · Lesson 4.2: Immunological memory & the basis of vaccines

> ⏱ ~15 min · Module 4: Cellular Immunity, Memory & Immune Pathology · Builds on: [4.1](04-01-cytotoxic-t-cells.md), [3.4](03-04-antibody-effector-functions.md) · Unlocks: [4.3](04-03-self-tolerance-regulation.md)

## Why this matters

Vaccination is the single intervention that has saved the most human lives, and its entire logic fits in one sentence: **you can have the second response without paying for the first.** Everything in this course up to now has been mechanism; this lesson is where the mechanism becomes an engineering discipline.

The interesting part is that **memory is not a new mechanism.** Nothing in the secondary response uses machinery that the primary response lacked. What changed is the *initial condition* — the size of the responding clone, the receptors it already carries, and, most importantly, the antibody already in the blood at the moment of exposure. Once you see that, vaccine design stops being a catalogue of platforms and becomes a set of predictions: which arm protects, what an adjuvant is for, and why some vaccines need reformulating every year.

## The idea

A second exposure differs from the first along **four axes**, and each has a separate mechanistic cause:

| Axis | Primary | Secondary | Why |
|---|---|---|---|
| **Lag** | ~5–7 days to detectable antibody | ~1–3 days, and standing antibody acts at $t = 0$ | bigger precursor pool, no search delay, pre-positioned cells |
| **Magnitude** | reference | 10–100× higher peak titre | fewer doublings needed from a larger start |
| **Isotype** | IgM first, IgG late | switched IgG (or IgA) from the outset | class switching already happened ([3.3](03-03-germinal-centers-affinity-maturation.md)) |
| **Affinity** | germline, $K_d \sim 10^{-6}\ \text{M}$ | matured, $K_d \sim 10^{-9}\ \text{M}$ | somatic hypermutation already happened ([3.3](03-03-germinal-centers-affinity-maturation.md)) |

**Every one of those four is a downstream consequence of things you already know.** Memory contributes no new effector function — a memory-derived plasma cell secretes ordinary IgG, a memory CTL kills with ordinary perforin ([4.1](04-01-cytotoxic-t-cells.md)). It just starts from a better place.

**The counterintuitive part is which of the four does the protecting.** The instinct is that a hundredfold larger memory pool is what makes the response fast. It is not, and the arithmetic below shows why: clonal expansion is exponential, so the time saved by starting larger is only **logarithmic** in the pool size. A hundredfold larger army buys you about seven doublings — roughly two days. That is real, but it is not the difference between getting sick and not.

**What actually protects a vaccinated person is usually the antibody already circulating before the pathogen arrives.** It acts with zero lag, at the port of entry, by neutralization ([3.4](03-04-antibody-effector-functions.md)) — no cells need to be found, activated, or divide at all. This is why the regulatory currency of vaccinology is a **titre**, not a memory-cell count.

**And that immediately explains the division of labour among memory cells.** Long-lived plasma cells sitting in bone-marrow niches secrete antibody constitutively for decades — the standing army, covering the pathogen you already met. Memory B cells secrete nothing but recirculate, and on rechallenge can enter fresh germinal centers and mutate further — the reserve, covering that pathogen's *descendants*. You need both because pathogens evolve.

## The formal version

**The lag, from first principles.** Let $N_0$ be the number of antigen-specific precursor cells at the moment of exposure, $N_{\text{eff}}$ the number of effector cells needed to clear the infection, $\tau$ the division time of an activated lymphocyte, and $t_{\text{search}}$ the time for antigen and a specific lymphocyte to find each other in a lymph node ([1.2](01-02-lymphoid-organs-cell-traffic.md)). Then

$$t_{\text{peak}} \;=\; t_{\text{search}} \;+\; \tau \log_2\!\frac{N_{\text{eff}}}{N_0}$$

*In words: the response time is the time to find the antigen plus the number of doublings needed, times the doubling time.*

Take $N_{\text{eff}} = 10^8$, $\tau = 8$ h $= \tfrac13$ d.

$$\text{primary}: \; N_0 = 10^{3} \;\Rightarrow\; t_{\text{peak}} = 2 + \tfrac13\log_2(10^{5}) = 2 + \tfrac13(16.6) = \mathbf{7.5\ \text{d}}$$

$$\text{secondary}: \; N_0 = 10^{5} \;\Rightarrow\; t_{\text{peak}} = 0.5 + \tfrac13\log_2(10^{3}) = 0.5 + \tfrac13(9.97) = \mathbf{3.8\ \text{d}}$$

**Now isolate the contribution of pool size alone:**

$$\Delta t_{\text{pool}} \;=\; \tau \log_2\!\frac{N_0^{\text{mem}}}{N_0^{\text{naive}}} \;=\; \tfrac13\log_2(100) \;=\; \mathbf{2.2\ \text{d}}$$

**Only 2.2 of the 3.7 days saved comes from the larger clone; the rest is the search that memory cells do not have to do.** The logarithm is the whole point — expanding the memory pool by another factor of 100 would buy just 2.2 days more. **You cannot make a response fast by making it big.** You make it fast by removing the search (tissue-resident memory) or by removing the need to respond at all (standing antibody).

**Memory compartments.**

| Compartment | Marker/location | Recirculates? | Job |
|---|---|---|---|
| Central memory T ($T_{CM}$) | CCR7$^+$, CD62L$^+$, lymph nodes | yes | proliferative reserve; re-expands hard |
| Effector memory T ($T_{EM}$) | CCR7$^-$, blood and non-lymphoid tissue | yes | rapid effector function, little expansion |
| Tissue-resident memory T ($T_{RM}$) | CD69$^+$, CD103$^+$, skin/gut/airway | **no** | already at the port of entry; $t_{\text{search}} \approx 0$ |
| Memory B | recirculating, lymphoid tissue | yes | rapid recall; can re-enter germinal centers ([3.3](03-03-germinal-centers-affinity-maturation.md)) |
| Long-lived plasma cell | bone-marrow niche (CXCL12, BAFF/APRIL) | no | constitutive antibody secretion, no antigen required |

**Serum antibody decades later is not leftover antibody.** IgG has a serum half-life of about 21 days, set by FcRn recycling ([3.4](03-04-antibody-effector-functions.md)). The first-order decay constant is

$$k = \frac{\ln 2}{21\ \text{d}} = 0.033\ \text{d}^{-1}, \qquad \text{so a steady titre requires } P = k\,C\,V$$

with $P$ the production rate, $C$ the serum concentration and $V$ the distribution volume. Over 50 years the IgG pool turns over $18{,}260/21 \approx 870$ times. **A flat antibody titre 50 years after vaccination therefore proves that some cell is still secreting**, at a rate matched to decay — which is precisely the evidence for long-lived plasma cells.

Measured titre half-lives in vaccinated humans bear this out and vary enormously by antigen: vaccinia antibody has an estimated half-life near 90 years, while tetanus and diphtheria antitoxin decay with half-lives of roughly 11 and 19 years. **Live viral vaccines induce far more durable plasma-cell compartments than protein toxoids** — which is why the tetanus booster interval exists and the measles one does not.

**How is memory maintained?** Two candidate mechanisms, and the honest answer is that the balance is not settled. Memory T cells undergo slow **homeostatic self-renewal** driven by IL-7 and IL-15, and persist after transfer into hosts that never see the antigen — so antigen is not strictly required. Long-lived plasma cells depend on niche signals, not antigen. Against that, follicular dendritic cells retain intact antigen for long periods, and some memory clearly is boosted by subclinical re-exposure. Treat "antigen-independent self-renewal, with antigen persistence contributing variably" as the current position, not a settled fact.

**Adjuvants, explained by Module 1.** A purified protein antigen delivers **signal 1 only**. No pattern-recognition receptor fires ([1.3](01-03-barriers-sensing-danger.md)), so the dendritic cell never upregulates B7, never supplies CD28 costimulation ([3.5](03-05-helper-t-cells-polarization.md)), and the T-cell response is weak or tolerizing.

$$\boxed{\;\text{An adjuvant is a synthetic danger signal: it supplies the PAMP the purified antigen lacks.}\;}$$

*In words: the antigen tells the immune system what to attack; the adjuvant tells it that attacking is warranted.* Modern adjuvants are literally PRR agonists — AS04 contains MPL (a detoxified TLR4 agonist), CpG-1018 in Heplisav-B is a TLR9 agonist, AS01 combines MPL with QS-21, and in mRNA vaccines the ionizable lipid nanoparticle and the RNA itself do the job. **This is the single most illuminating fact about vaccine formulation**, and it is a direct payoff of Module 1.

**Vaccine classes, read off the presentation pathways of [2.5](02-05-antigen-processing-presentation.md).** The question that separates them is *where the antigen is synthesized*, because only endogenously synthesized protein loads MHC class I directly.

| Class | Example | CD8 memory? | Mucosal IgA? | Note |
|---|---|---|---|---|
| Live attenuated | MMR, OPV, varicella, BCG | **yes** (endogenous synthesis) | yes if given mucosally | strongest and most durable; unsafe if immunocompromised, can revert |
| Inactivated whole | IPV, hepatitis A, rabies | weak (cross-presentation only) | no | safe; needs adjuvant and boosters |
| Subunit / toxoid / VLP | tetanus toxoid, HBsAg, HPV | little | no | purest signal 1 — **adjuvant obligatory** |
| Conjugate polysaccharide | Hib, PCV, MenACWY | no | no | see below |
| Viral vector | ChAdOx1, Ad26 | **yes** | no | anti-vector immunity limits re-boosting |
| mRNA–LNP | COVID-19 vaccines | **yes** | weak | self-adjuvanting; strong systemic IgG, poor airway IgA |

**Conjugate vaccines are the cleanest applied payoff in the course.** A bacterial capsular polysaccharide is a TI-2 antigen ([3.2](03-02-clonal-selection-b-cell-activation.md)): it cross-links BCRs and gives a fast IgM response with **no germinal center, no class switching, no affinity maturation and no memory** — and infants under two respond to it barely at all. Covalently conjugating it to a carrier protein means the B cell that binds the sugar internalizes the whole conjugate, processes the protein, and presents *protein* peptides on class II — so a Tfh cell specific for the carrier can help it. That is **linked recognition**, and it converts a T-independent antigen into a T-dependent one. Hib conjugate vaccines reduced invasive *Haemophilus influenzae* type b disease in children by over 95 percent.

**Correlates of protection.** A correlate is a measurable immune quantity statistically associated with protection; a *mechanistic* correlate is one that also causes it. Standard thresholds: tetanus antitoxin $\geq 0.01$ IU/mL, hepatitis B anti-HBs $\geq 10$ mIU/mL, measles neutralizing antibody $\geq 120$ mIU/mL, influenza HAI titre $1{:}40$. **Note that the influenza number is different in kind** — $1{:}40$ is the titre at which roughly half of exposed people are protected, not a threshold anyone crosses into safety. Reporting it like the others is a common and consequential sloppiness.

**Original antigenic sin, or immune imprinting.** On exposure to a *variant* of a previously seen antigen, high-affinity memory B cells specific for the shared epitopes outcompete naive B cells for the antigen and are recalled preferentially, so the response is skewed toward the *first* strain's epitopes rather than the new one's. Combined with **antigenic drift** — point mutation in surface glycoproteins under antibody-mediated selection ([evolution-ecology 1.2](../../evolution-ecology/lessons/01-02-modes-of-selection.md)) — this is why influenza vaccines are reformulated annually, and why your birth-year influenza exposure measurably shapes your antibody response decades later. The pathological extreme is dengue, where cross-reactive but non-neutralizing antibody from a first serotype *enhances* infection with a second by delivering virus into FcγR-bearing cells ([3.4](03-04-antibody-effector-functions.md)).

## Picture

![Two panels sharing a logarithmic antibody-titre axis. The left panel shows the primary response after a first exposure: an IgM curve rising around day five to a modest peak and decaying, and an IgG curve rising later, peaking near day fourteen at a hundredfold level, then falling to a persistent plateau. The right panel shows the secondary response after a second exposure: the IgG curve starts already at the memory plateau above a dashed protective-threshold line, rises within two days, and peaks about twenty to a hundred times higher than the primary peak, while the IgM bump is small. Summary boxes beneath each panel state the lag, peak height, isotype composition and antibody affinity for that response.](assets/04-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — where the speed-up actually comes from).** A pathogen requires $N_{\text{eff}} = 3\times10^{7}$ specific effector cells for control. Naive precursors number $N_0 = 300$; after a primary infection the memory pool is $3\times10^{4}$. Activated lymphocytes divide every 10 h. Antigen–lymphocyte encounter takes 2 days in a naive host and 0.5 days in an immune host (memory cells are more frequent, and $T_{RM}$ are already in the tissue). (a) Compute $t_{\text{peak}}$ for each. (b) Decompose the saving. (c) Interpret.

(a) $\tau = 10/24 = 0.417$ d.

$$\text{primary}: \; \log_2\!\frac{3\times10^{7}}{300} = \log_2(10^{5}) = 16.61, \qquad t_{\text{peak}} = 2 + 0.417(16.61) = 2 + 6.92 = \mathbf{8.9\ \text{d}}$$

$$\text{secondary}: \; \log_2\!\frac{3\times10^{7}}{3\times10^{4}} = \log_2(10^{3}) = 9.97, \qquad t_{\text{peak}} = 0.5 + 0.417(9.97) = 0.5 + 4.16 = \mathbf{4.7\ \text{d}}$$

(b) Total saving $8.9 - 4.7 = 4.2$ d. Of this:

$$\text{from the 100-fold larger pool}: \; 0.417\log_2(100) = 0.417(6.64) = \mathbf{2.8\ \text{d}}$$
$$\text{from the shortened search}: \; 2.0 - 0.5 = \mathbf{1.5\ \text{d}}$$

(c) **A hundredfold larger starting population buys under three days**, because expansion is exponential and the saving is $\tau\log_2$ of the ratio. To halve the remaining lag you would need the memory pool to grow by another factor of $2^{5.6} \approx 50$ — biologically impossible, since the antigen-specific memory pool is already a percent-level share of the repertoire and every clone competes for the same space.

**So the fast arm of memory is not the cellular one at all.** Pre-existing serum IgG neutralizes at $t = 0$; $T_{RM}$ sitting in the epithelium act within hours without trafficking anywhere. **Both bypass the logarithm entirely, which is why they, and not memory-cell number, are what vaccines are engineered to produce.**

**Example 2 (why you'd care — does the titre or the affinity do the work?).** After a primary infection, peak specific serum IgG is $2\times10^{-8}$ M with $K_d = 1\times10^{-6}$ M. After a booster it is $6\times10^{-7}$ M with $K_d = 4\times10^{-9}$ M. Neutralization requires occupancy $\theta \geq 0.5$ of the receptor-binding site. Using the Langmuir isotherm from [biophysics 2.3](../../biophysics/lessons/02-03-ligand-binding-occupancy.md), $\theta = [\mathrm{Ab}]/(K_d + [\mathrm{Ab}])$: (a) compute $\theta$ for each; (b) decompose the improvement; (c) interpret.

(a)

$$\theta_{\text{primary}} = \frac{2\times10^{-8}}{1\times10^{-6} + 2\times10^{-8}} = \frac{2\times10^{-8}}{1.02\times10^{-6}} = 0.0196 \;\Rightarrow\; \mathbf{2.0\ \text{percent}}$$

$$\theta_{\text{secondary}} = \frac{6\times10^{-7}}{4\times10^{-9} + 6\times10^{-7}} = \frac{6\times10^{-7}}{6.04\times10^{-7}} = 0.993 \;\Rightarrow\; \mathbf{99.3\ \text{percent}}$$

**The primary response fails the threshold by a factor of 25; the secondary clears it by a factor of two and is essentially saturating.**

(b) Well below saturation, $\theta \approx [\mathrm{Ab}]/K_d$, so the meaningful figure of merit is that ratio:

$$\frac{[\mathrm{Ab}]}{K_d}\Big|_{\text{primary}} = 0.02, \qquad \frac{[\mathrm{Ab}]}{K_d}\Big|_{\text{secondary}} = 150$$

$$\text{improvement} = \underbrace{30}_{\text{titre}} \times \underbrace{250}_{\text{affinity}} = \mathbf{7500\times}$$

(c) **Neither axis alone would have crossed the threshold.** A 30-fold titre rise on germline antibody gives $\theta = 0.37$; a 250-fold affinity gain at the primary titre gives $\theta = 0.83$ — that one would just scrape through, but with no margin against antigen dose or drift. **The two mechanisms multiply**, which is the quantitative reason the germinal center ([3.3](03-03-germinal-centers-affinity-maturation.md)) is worth its cost: expansion alone is available cheaply and is not enough.

**The design lesson.** Because protection scales with $[\mathrm{Ab}]/K_d$, and antibody in mucosal lining fluid runs one to two orders of magnitude below serum, a vaccine giving excellent serum $\theta$ can give sub-threshold $\theta$ at the airway surface — protecting against disease while barely denting infection. That single inequality explains a great deal of the last few years of vaccine epidemiology.

## Watch out

- **You might think memory is a distinct mechanism.** It is clonal selection ([3.2](03-02-clonal-selection-b-cell-activation.md)) restarted from a better initial condition — a larger clone, already switched and already matured, plus antibody already in the blood. No new effector molecule appears.
- **You might think the big memory pool is what makes the response fast.** The saving is $\tau\log_2$ of the pool ratio, so a hundredfold larger pool buys two or three days. **Standing antibody and tissue-resident memory bypass the logarithm; pool size does not.**
- **You might think antibody detectable decades after vaccination is old antibody.** IgG's half-life is 21 days. Persistent titre is *ongoing secretion* by long-lived plasma cells, and it is direct evidence for their existence.
- **You might assume any vaccine that raises antibody also primes CD8 memory.** Class I loading needs antigen synthesized *inside* the presenting cell ([2.5](02-05-antigen-processing-presentation.md)) or cross-presented. Subunit and inactivated vaccines largely fail here; live, vectored and mRNA vaccines do not.
- **You might read a correlate of protection as a mechanism, or as a cliff.** Some correlates are mechanistic (tetanus antitoxin genuinely neutralizes the toxin); influenza HAI $1{:}40$ is a fitted 50-percent-protection point on a continuous curve, not a wall.
- **You might expect pre-existing antibody to be uniformly good.** Imprinting biases recall toward the first strain's epitopes, and in dengue, cross-reactive non-neutralizing antibody makes the second infection *worse*.

## One-liner

> Memory adds no new mechanism — it only changes the initial condition — and because clonal expansion is exponential, a larger memory pool buys only $\tau\log_2$ of its size in time, so what actually protects a vaccinated person is the antibody already circulating and the memory cells already sitting at the port of entry.

## Problems

**P1 (🟢)** A response needs $N_{\text{eff}} = 10^{8}$ effector cells. Naive precursors number 500; the memory pool after priming is $5\times10^{4}$. Division time is 8 h; encounter takes 2 days naive, 0.5 days immune. (a) Compute $t_{\text{peak}}$ for the primary and secondary responses. (b) What fraction of the time saved is attributable to the larger precursor pool alone?

**P2 (🟡)** A vaccinated person's serum IgG against a viral surface protein is at $4\times10^{-7}$ M with $K_d = 5\times10^{-9}$ M. Nasal lining fluid contains IgG at 1 percent of the serum concentration. Neutralization at a surface requires $\theta \geq 0.5$. (a) Compute $\theta$ in serum and in nasal fluid. (b) Predict what this vaccine does and does not prevent. (c) What change — to titre, to affinity, or to something else — would fix the mucosal gap, and by how much?

**P3 (🔴, bridges to `evolution-ecology`)** A respiratory virus replicates only in ciliated airway epithelium, with no viremic phase; disease comes from local epithelial destruction. Two candidates: **(i)** an adjuvanted recombinant surface-glycoprotein subunit given intramuscularly, and **(ii)** a live attenuated strain given intranasally. (a) For each, state which of mucosal IgA, systemic IgG and CD8 memory it primes, justifying each from where the antigen is synthesized and which MHC pathway sees it. (b) After ten years of mass use of vaccine (i), predict the direction of viral evolution at the glycoprotein and what it implies for reformulation. (c) What property should a drift-resistant vaccine have instead?

<details>
<summary>Solutions</summary>

**P1 (a)** $\tau = 8/24 = 1/3$ d.

$$\text{primary}: \; \log_2\!\frac{10^{8}}{500} = \log_2(2\times10^{5}) = 17.61, \qquad t_{\text{peak}} = 2 + \tfrac13(17.61) = 2 + 5.87 = \mathbf{7.9\ \text{d}}$$

$$\text{secondary}: \; \log_2\!\frac{10^{8}}{5\times10^{4}} = \log_2(2000) = 10.97, \qquad t_{\text{peak}} = 0.5 + \tfrac13(10.97) = 0.5 + 3.66 = \mathbf{4.2\ \text{d}}$$

**(b)** Total saving $= 7.9 - 4.2 = 3.7$ d. Pool contribution:

$$\tau\log_2(100) = \tfrac13(6.64) = 2.2\ \text{d} \;\Rightarrow\; \frac{2.2}{3.7} = \mathbf{60\ \text{percent}}$$

The other 40 percent (1.5 d) is the shortened search. **Note the diminishing return: a further hundredfold expansion of the memory pool would cut only another 2.2 days, and could never take the lag below $t_{\text{search}}$.**

**P2 (a)** Serum:

$$\theta_{\text{serum}} = \frac{4\times10^{-7}}{5\times10^{-9} + 4\times10^{-7}} = \frac{4\times10^{-7}}{4.05\times10^{-7}} = \mathbf{0.988}$$

Nasal fluid, $[\mathrm{Ab}] = 4\times10^{-9}$ M:

$$\theta_{\text{nasal}} = \frac{4\times10^{-9}}{5\times10^{-9} + 4\times10^{-9}} = \frac{4}{9} = \mathbf{0.444}$$

**Just below threshold — a hundredfold concentration drop turned a saturating interaction into a failing one**, because the serum concentration sat 80-fold above $K_d$ and the nasal one sits below it.

**(b)** Virus can establish and replicate in the upper airway, so **infection and shedding proceed largely unimpeded**. Once virus spreads to tissue compartments where IgG is at serum-like concentration, and once the recall response comes up within a few days, replication is contained. Prediction: **strong protection against severe disease, weak protection against infection and transmission** — exactly the observed profile of intramuscular subunit and mRNA vaccines against respiratory viruses.

**(c)** Three routes, with the arithmetic:

1. **More titre.** Need $\theta \geq 0.5$ at $4\times10^{-9}\times f$: solving $\theta = 0.5$ gives $[\mathrm{Ab}] = K_d = 5\times10^{-9}$ M, so a bare **1.25-fold** rise suffices *for the threshold* — but with no margin. For $\theta = 0.9$ you need $[\mathrm{Ab}] = 9K_d = 4.5\times10^{-8}$ M, i.e. an **11-fold** increase in nasal (hence serum) IgG. Achievable by boosting, but transient.
2. **Better affinity.** $\theta = 0.9$ at the existing nasal concentration needs $K_d \le 4\times10^{-9}/9 = 4.4\times10^{-10}$ M — an **11-fold** affinity gain. Within reach of further germinal-center rounds, but not something the formulator controls directly.
3. **Change the isotype and the route** — the real answer. Mucosal immunization elicits **secretory dimeric IgA**, which is actively transcytosed into the lumen by the poly-Ig receptor ([3.4](03-04-antibody-effector-functions.md)) rather than leaking in, and which is *tetravalent*, so avidity ([2.2](02-02-bcr-affinity-avidity.md)) supplies an apparent-$K_d$ improvement that no amount of serum IgG can. **The fix is not more of the same antibody in the wrong place; it is a different antibody delivered to the right one.**

**P3 (a)**

**(i) Intramuscular adjuvanted subunit.** The antigen is an exogenous protein: taken up by dendritic cells, degraded in the endocytic pathway, loaded on **MHC class II** ([2.5](02-05-antigen-processing-presentation.md)), presented to CD4 T cells, Tfh help, germinal center, **strong systemic IgG**. No protein is synthesized inside any host cell, so there is no direct class I loading — CD8 priming depends entirely on cross-presentation, which is inefficient for soluble protein: **little or no CD8 memory.** The intramuscular route imprints systemic, not mucosal, homing: **no secretory IgA, and no airway $T_{RM}$.**

**(ii) Intranasal live attenuated.** The virus replicates in mucosal epithelium, so viral protein is made *in the cytosol* of infected cells → proteasome → TAP → **class I** → **CD8 memory, including airway $T_{RM}$ with $t_{\text{search}} \approx 0$**. Priming in nasal-associated lymphoid tissue imprints mucosal homing → **secretory dimeric IgA at the port of entry**, plus systemic IgG. It primes all three arms; the cost is the safety profile of a replicating agent.

**(b)** Vaccine (i) produces high-affinity neutralizing IgG against a single glycoprotein while leaving upper-airway replication mostly intact (P2). That is a large, heterogeneous host population in which the virus keeps replicating **under antibody-mediated selection** — the textbook setup for **directional selection** on the neutralizing epitopes ([evolution-ecology 1.2](../../evolution-ecology/lessons/01-02-modes-of-selection.md)). Substitutions that reduce antibody binding raise fitness in immune hosts in proportion to the fraction immune, so the expected outcome is **antigenic drift** at the glycoprotein's neutralizing sites and a need for periodic reformulation, as with influenza HA.

Two aggravating features are worth naming. First, the mutational target is small — the vaccine focuses the entire response on one protein, so escape requires few substitutions. Second, because the vaccine does not block transmission, it does **not** reduce the total viral replication in which escape variants can arise; a transmission-blocking vaccine would suppress both the selection pressure's payoff and the mutational supply.

**(c)** A drift-resistant vaccine should target features the virus cannot change cheaply — the same logic as PAMPs in [1.3](01-03-barriers-sensing-danger.md), one level up:

- **Conserved epitopes** that are structurally or functionally load-bearing (a receptor-binding site's contact residues, a fusion-machinery stem), so escape carries a fitness cost.
- **T-cell epitopes**, which are drawn from internal proteins under weaker antibody selection and are presented on many different MHC alleles across the population ([2.4](02-04-mhc-molecules.md)) — a diverse population presents a diverse peptide set, so no single escape substitution works for everyone. This is MHC polymorphism doing at the population level exactly what it evolved to do.
- **Mucosal delivery**, to reduce transmission and thereby shrink the replicating population in which variants arise.

</details>

## Flashback

**From Lesson 3.3 (germinal centers: affinity maturation & class switching):** A germinal center reaction is under way against a protein antigen. Somatic hypermutation introduces point mutations at roughly $10^{-3}$ per base per division across a rearranged heavy-chain V region of 350 nucleotides. (a) Treating mutations as Poisson, compute the expected number per centroblast per division, and the number of dark-zone divisions after which 95 percent of a lineage's descendants carry at least one V-region mutation. (b) On day 7 the animal is given a blocking antibody against CD40L. Predict the isotype and affinity of the antibody present on day 21, and name the human syndrome this phenocopies. (c) Most V-region mutations *reduce* affinity. What stops the population from degrading?

<details>
<summary>Solution</summary>

**(a)** Mutations per division per cell:

$$\lambda = 10^{-3}\ \text{base}^{-1}\ \text{division}^{-1} \times 350\ \text{bases} = \mathbf{0.35}$$

Along a lineage of $n$ divisions, the count is Poisson with mean $0.35n$ ([prob-stat-refresher 2.2](../../prob-stat-refresher/lessons/02-02-discrete-distributions.md)), so

$$P(\text{no mutation}) = e^{-0.35n} \le 0.05 \;\Longrightarrow\; n \ge \frac{\ln 20}{0.35} = \frac{2.996}{0.35} = 8.6 \;\Rightarrow\; \mathbf{9\ \text{divisions}}$$

At 6–12 h per centroblast division that is **roughly 2–5 days in the dark zone** — which is why affinity maturation is measurable within a week, not a month. (Caveat: SHM is not uniform. It targets WRCY/RGYW hotspots and is concentrated in the CDRs, so the effective rate at the residues that matter is higher than a flat Poisson suggests.)

**(b)** CD40–CD40L engagement by Tfh cells is required to induce and sustain AID and to keep the germinal center alive. Blocking CD40L therefore **dissolves the germinal center**: both AID-dependent upgrades stop, since they are the same enzyme resolved by two different repair routes.

Day 21 prediction: **unswitched IgM, at germline affinity** ($K_d \sim 10^{-6}$–$10^{-5}$ M), present at normal or even elevated concentration because extrafollicular plasmablast output ([3.2](03-02-clonal-selection-b-cell-activation.md)) is unaffected. Specificity is preserved — nothing touched the V region's rearrangement.

This phenocopies **hyper-IgM syndrome**: X-linked hyper-IgM is CD40L deficiency, and the autosomal recessive form is AID deficiency itself. Normal or high IgM, absent IgG/IgA/IgE, no affinity maturation.

**(c)** **Selection, not accuracy.** The mutator is blind; the filter is competitive. In the light zone, centrocytes must capture antigen held on follicular dendritic cells, process it, and present peptide to Tfh cells — and **Tfh help is the limiting resource.** A cell whose mutation lowered affinity captures less antigen, presents less peptide, receives less help, and dies by the default apoptotic program; a cell whose mutation raised affinity outcompetes its siblings and re-enters the dark zone.

**The mean affinity of the population rises because the losers die, not because the mutations are good.** The cost is enormous wastage — the great majority of germinal-center B cells die — which is the same bargain the immune system strikes in V(D)J recombination and in thymic selection ([4.3](04-03-self-tolerance-regulation.md)): generate blind, then select hard.

</details>

## Connections

- **Backward:** memory inherits its receptors from [3.3](03-03-germinal-centers-affinity-maturation.md) (switched and matured) and its logic from [3.2](03-02-clonal-selection-b-cell-activation.md) (clonal selection, restarted); the lag it removes is the search problem of [1.2](01-02-lymphoid-organs-cell-traffic.md); the 21-day IgG half-life it must outrun is FcRn from [3.4](03-04-antibody-effector-functions.md); adjuvants are Module 1's PRRs ([1.3](01-03-barriers-sensing-danger.md)) sold in a vial.
- **Forward:** [4.3](04-03-self-tolerance-regulation.md) asks why a system that remembers so well does not remember *you*; [4.4](04-04-autoimmunity-hypersensitivity.md) covers what happens when a vaccine or infection primes memory against a self-mimicking epitope; [4.5](04-05-immunodeficiency-tumor-transplant.md) shows what memory looks like when the CD4 decision layer of [3.5](03-05-helper-t-cells-polarization.md) is destroyed.
- **Sideways:** the occupancy arithmetic is the Langmuir isotherm of [biophysics 2.3](../../biophysics/lessons/02-03-ligand-binding-occupancy.md), and the avidity escape route is [2.2](02-02-bcr-affinity-avidity.md); antigenic drift under vaccine pressure is directional selection in a structured host population ([evolution-ecology 1.2](../../evolution-ecology/lessons/01-02-modes-of-selection.md)); the mutation counting in the flashback is a Poisson process ([prob-stat-refresher 2.2](../../prob-stat-refresher/lessons/02-02-discrete-distributions.md)).
