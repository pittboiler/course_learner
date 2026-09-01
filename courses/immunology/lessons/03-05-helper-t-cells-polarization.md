# Immunology · Lesson 3.5: Helper T cells & subset polarization

> ⏱ ~15 min · Module 3: Generating Diversity & the Adaptive Response · Builds on: [3.2](03-02-clonal-selection-b-cell-activation.md), [2.5](02-05-antigen-processing-presentation.md) · Unlocks: [4.1](04-01-cytotoxic-t-cells.md) (cytotoxic T cells)

## Why this matters

The CD4 T cell kills nothing. It secretes no lytic enzyme, punches no hole, opsonizes nothing. **It is the decision layer** — the node that decides *which kind* of response the body mounts, and everything downstream obeys.

That makes it the most consequential cell in the course, and the most dangerous. **The same pathogen, presented in a different cytokine context, produces a different response — and sometimes the wrong one.** *Mycobacterium leprae* is the clean natural experiment: one organism, two diseases, and the difference is not the bacterium but the CD4 cell's choice. It is also why HIV, by depleting exactly this cell, degrades antibody *and* cytotoxic responses at once ([4.5](04-05-immunodeficiency-tumor-transplant.md)) — one node whose loss collapses the network.

This lesson has two halves. First, **how a CD4 cell is licensed to act at all** — a two-signal interlock in which the innate system holds the second key. Second, **how it commits to a programme** — which turns out to be a mutual-repression toggle switch, the same circuit motif you met in [molecular-cell-biology 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md), and which we will solve exactly.

## The idea

**Activation is an AND gate, and the innate system holds one of the inputs.**

- **Signal 1** — peptide–MHC class II engaging the TCR ([2.3](02-03-t-cell-receptor.md), [2.5](02-05-antigen-processing-presentation.md)). This says *what* is there.
- **Signal 2** — B7 (CD80/CD86) on the antigen-presenting cell engaging **CD28** on the T cell. This says *it is worth responding to.*

Signal 1 alone does not give a weak response. It gives **anergy** — a lasting unresponsive state — or deletion. That is not a bug; it is the safety interlock that makes the whole architecture survivable, and it is the T-cell twin of [3.2](03-02-clonal-selection-b-cell-activation.md)'s two-signal rule for B cells.

**Here is the part that ties Module 1 to Module 3.** A resting dendritic cell displays plenty of self-peptide on class II and essentially no B7. It upregulates B7 only after **its own** pattern-recognition receptors have fired ([1.3](01-03-barriers-sensing-danger.md)). So:

$$\boxed{\;\text{innate recognition licenses adaptive activation.}\;}$$

**The adaptive system cannot start itself.** A T cell whose receptor happens to fit a self-peptide meets that peptide daily on a resting dendritic cell, receives signal 1 without signal 2, and is anergized — which is peripheral tolerance ([4.3](04-03-self-tolerance-regulation.md)) falling out of the same mechanism for free. And the brakes are real molecules: **CTLA-4** outcompetes CD28 for B7, and **PD-1** raises the activation threshold in tissue. Blocking them is checkpoint-blockade cancer therapy ([4.5](04-05-immunodeficiency-tumor-transplant.md)) — releasing a brake the immune system installed on purpose, with exactly the autoimmune side effects you would predict.

**Signal 3 is the interesting one.** Signals 1 and 2 decide *whether*. The polarizing cytokine the dendritic cell secretes — set by *which* PRR fired, so by what class of pathogen it saw — decides *what*. The naive CD4 cell reads that cytokine and commits to a programme it then holds onto.

**Why "commits" and not "adjusts."** Each subset is defined by a master transcription factor that (i) drives its own expression and its own signature cytokines, and (ii) represses the master regulators of the other subsets. T-bet drives IFN-γ and represses GATA3; GATA3 drives IL-4 and shuts down the IL-12 receptor; IFN-γ inhibits Th2 induction while IL-4 inhibits Th1. **Self-activation plus mutual repression is a toggle switch**, and a toggle switch does not average its inputs — it picks a side. That is the difference between a response that is *tuned* and one that is *decided*, and it is why polarization is hard to reverse once it has happened.

## The formal version

**The subsets, each as problem → response.** Read the figure below as the table; the compressed version is that the pathogen's *location and size* selects the cytokine, and the cytokine selects the programme.

| Subset | Master TF | Induced by | Signature output | Problem it solves |
|---|---|---|---|---|
| **Th1** | T-bet | IL-12, IFN-γ | IFN-γ, IL-2 | pathogens *inside* macrophages and cells — arms the macrophage to kill what it swallowed |
| **Th2** | GATA3 | IL-4 | IL-4, IL-5, IL-13 | helminths — too big to phagocytose, so: IgE, eosinophils, mucus, expulsion |
| **Th17** | RORγt | TGF-β + IL-6, IL-23 | IL-17, IL-22 | extracellular bacteria and fungi at mucosal surfaces — recruits neutrophils, tightens epithelium |
| **Tfh** | Bcl-6 | IL-6, IL-21, ICOS | IL-21, CD40L | licensing the germinal center ([3.3](03-03-germinal-centers-affinity-maturation.md)) |
| **Treg** | FoxP3 | TGF-β, IL-2 | IL-10, TGF-β | self and commensals — suppression ([4.3](04-03-self-tolerance-regulation.md)) |

*In words: Th1 makes the phagocyte lethal, Th2 makes the barrier hostile, Th17 calls neutrophils to a mucosal surface, Tfh upgrades antibody, Treg turns everything off.*

**The polarization circuit.** Take two competing master regulators with concentrations $x$ and $y$ (say T-bet and GATA3), each repressing the other's synthesis with Hill coefficient $n$, each degrading linearly. In units where the degradation rate and the repression threshold are both 1:

$$\dot{x} = \frac{\alpha}{1+y^{\,n}} - x, \qquad \dot{y} = \frac{\alpha}{1+x^{\,n}} - y$$

*In words: each regulator is made at a rate that its rival shuts down, and decays at a fixed rate. The single parameter $\alpha$ is the maximum production rate measured in units of the degradation rate — how hard the circuit is driven.*

**Take $n = 2$** (the master regulators act as dimers on multiple sites — cooperativity is not decoration, as we are about to prove). Subtracting the two equations:

$$x - y + xy^2 - x^2y = 0 \;\Longrightarrow\; (x-y)(1 - xy) = 0$$

So every steady state satisfies **either $x = y$ (uncommitted) or $xy = 1$ (committed)**. Substituting $xy=1$ into the first equation gives $x + y = \alpha$, so the committed states are the two roots of

$$\boxed{\;t^2 - \alpha t + 1 = 0 \quad\Longrightarrow\quad t = \frac{\alpha \pm \sqrt{\alpha^2 - 4}}{2}\;}$$

*In words: the two committed states are a matched pair — whatever one master regulator gains, the other loses reciprocally, since their product is fixed at 1. And they exist only when $\alpha > 2$.*

**Stability, exactly.** The Jacobian at a committed state has diagonal $-1$ and off-diagonal terms whose product works out to $4xy/\alpha^2 = 4/\alpha^2$, so its eigenvalues are

$$\lambda_{\pm} = -1 \pm \frac{2}{\alpha}$$

**Stable exactly when $\alpha > 2$** — the same threshold at which they came into existence. Meanwhile the uncommitted state $x=y=s$ (with $s(1+s^2)=\alpha$) has eigenvalues $-1 \pm 2s^2/(1+s^2)$, and becomes a **saddle** exactly when $s > 1$, i.e. when $\alpha > 2$.

$$\alpha < 2: \ \text{one stable mixed state} \qquad \alpha = 2: \ \text{pitchfork} \qquad \alpha > 2: \ \text{two committed states} + \text{saddle}$$

**This is a supercritical pitchfork** ([dynamical-systems 3.2](../../dynamical-systems/lessons/03-02-pitchfork-symmetry.md)) — the separation $x - y = \sqrt{\alpha^2-4}$ opens with the characteristic square-root shape.

**Cooperativity is required, not helpful.** Redo the subtraction with $n=1$: $x - y + xy - xy = 0$, so $x = y$ is the *only* possibility. **A non-cooperative mutual-repression pair has a unique steady state for every $\alpha$ — it can never commit.** Two regulators that merely inhibit each other produce a blend; only cooperative self-reinforcement produces a decision.

**And the separatrix is exactly the diagonal.** In the symmetric circuit the saddle's stable manifold is the line $x = y$, so the rule is as simple as it can be: **whichever regulator is ahead when the switch turns on, wins.** Signal 3 does not have to dominate the cell — it only has to break the tie.

## Picture

![A naive CD4 T cell at the top receives signal one from peptide-MHC class two on the T-cell receptor and signal two from B7 binding CD28, which the dendritic cell supplies only after its own pattern-recognition receptors have fired. Five arrows fan down to five panels, one per helper subset: Th1 with T-bet, Th2 with GATA3, Th17 with ROR-gamma-t, Tfh with Bcl-6 and Treg with FoxP3. Each panel lists the cytokines that induce the subset, the cytokines it secretes, the pathogen class it handles and its main job. Bars beneath the panels mark mutual repression between neighbouring subsets, indicating that the subsets form a toggle switch rather than a blend.](assets/03-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — solve the switch at $\alpha = 3$).** Find every steady state of the $n=2$ circuit at $\alpha = 3$, classify each, and report the fold-difference between master regulators in a committed cell.

**Committed states** ($xy = 1$, $x + y = 3$): roots of $t^2 - 3t + 1 = 0$,

$$t = \frac{3 \pm \sqrt{5}}{2} = 2.618 \ \text{ or } \ 0.382 .$$

So the two attractors are $(x,y) = (2.618,\, 0.382)$ — call it Th1 — and $(0.382,\, 2.618)$ — Th2. Check the first directly: $\alpha/(1+y^2) = 3/(1+0.1459) = 2.618$ ✓ and $3/(1+6.854) = 0.382$ ✓.

**Stability:** $\lambda_\pm = -1 \pm 2/\alpha = -1 \pm 0.667 = \{-0.333,\, -1.667\}$ — both negative, so both committed states are **stable nodes**.

**Uncommitted state:** $s(1+s^2) = 3 \Rightarrow s^3 + s - 3 = 0 \Rightarrow s = 1.213$. Then $2s^2/(1+s^2) = 2(1.472)/2.472 = 1.191$, giving $\lambda_\pm = -1 \pm 1.191 = \{+0.191,\, -2.191\}$ — a **saddle**.

**Fold-difference in a committed cell:** $x/y = 2.618/0.382 = 6.85$. Note this equals $x^2$, since $y = 1/x$ — a general feature of this circuit.

**The reading.** A sevenfold ratio does not sound decisive, but it is a *stable* sevenfold ratio: perturb the cell and it returns. Push the drive up to $\alpha = 5$ and the ratio becomes $4.791/0.209 = 23$; the switch sharpens with drive. **A polarized T cell is not a cell that happens to be making more IFN-γ; it is a cell sitting in an attractor.**

**Example 2 (why you'd care — leprosy, and why the outcome is not the pathogen's to choose).** *Mycobacterium leprae* infects macrophages. Two patients, same organism, two diseases:

- **Tuberculoid leprosy** — strong Th1 response, IFN-γ activates macrophages, few surviving bacteria, localized granulomas, nerve damage from the inflammation itself. Paucibacillary. Milder.
- **Lepromatous leprosy** — Th2 response, abundant antibody that does nothing to a bacterium living inside a macrophage, massive bacterial loads, disseminated disease. Multibacillary. Severe.

**Antibody is not merely useless here; making it is the failure mode.** The bacterium is in the one place antibody cannot reach — inside a host cell ([2.3](02-03-t-cell-receptor.md)'s founding argument) — and the Th2 programme actively represses the Th1 programme that would have worked.

Model it. Add a polarizing input $\sigma$ from IL-12 to the T-bet equation:

$$\dot{x} = \frac{\alpha + \sigma}{1+y^2} - x, \qquad \dot{y} = \frac{\alpha}{1+x^2} - y, \qquad \alpha = 3 .$$

With $\sigma = 1$, the unique steady state is $(x,y) = (3.863,\, 0.188)$: check $4/(1+0.188^2) = 4/1.0354 = 3.863$ ✓, $3/(1+14.92) = 0.188$ ✓. One can show this is the *only* fixed point — **a strong enough IL-12 signal does not merely favour Th1, it annihilates the Th2 state**, so every cell must go Th1 regardless of where it started.

Now withdraw IL-12 ($\sigma \to 0$). The cell sits at $(3.863, 0.188)$, which has $x > y$, so it lies on the Th1 side of the separatrix $x=y$ and relaxes to $(2.618, 0.382)$. **The commitment outlives the signal that caused it.** That is hysteresis, and clinically it is the reason a polarized lepromatous patient is not fixed by giving IL-12 late: the therapeutic window is at priming, when the cell is still near the diagonal and a small push decides everything.

**Then the honest caveat.** The tidy subset picture has softened considerably. Cells co-expressing T-bet and RORγt are common; Th17 cells convert to a Th1-like phenotype in inflamed tissue; Treg and Th17 interconvert depending on whether IL-6 accompanies TGF-β. The model explains this without embarrassment: **plasticity is what a toggle switch does when $\alpha$ is not comfortably above threshold** — weak self-reinforcement, shallow basins, and a cell that can be pushed across. The subsets are attractors of varying depth, not cell types.

## Watch out

- **You might think helper T cells "help" B cells and that is the job.** Tfh is one of five programmes. Th1 spends its time licensing macrophages and CD8 cells and never enters a follicle.
- **You might think signal 1 without signal 2 gives a small response.** It gives **anergy** — an actively induced, lasting refusal. Less signal is not a weaker yes; it is a durable no. This is the load-bearing safety feature of the whole adaptive system.
- **You might think the dendritic cell just presents antigen.** Presentation is cheap — every nucleated cell reports on class I ([2.5](02-05-antigen-processing-presentation.md)). What makes an antigen-presenting cell *professional* is B7 and signal 3, i.e. the authority to license and to instruct.
- **You might think cross-inhibition merely biases the outcome.** With $n = 1$ there are no committed states at all, for any drive. Mutual repression *without cooperativity* produces a blend, never a decision — the nonlinearity is the mechanism, not a refinement of it.
- **You might expect the polarizing cytokine to determine the outcome in proportion to its dose.** The separatrix is $x=y$: an arbitrarily small asymmetry decides which attractor is reached, and then the switch does the rest. **Dose sets the speed and the reliability; the topology sets the outcome.**
- **You might treat the subsets as cell types.** They are attractors, of varying depth, with real traffic between them.

## One-liner

> The CD4 cell is the immune system's decision layer: innate PRRs supply the B7 that licenses it to act at all, and the polarizing cytokine only has to break a tie — because mutual repression plus cooperative self-activation is a toggle switch whose committed states exist exactly when the drive exceeds twice the degradation rate, so the cell commits to one programme and keeps it after the signal is gone.

## Problems

**P1 (🟢)** For the symmetric $n=2$ circuit at $\alpha = 4$: (a) find both committed steady states exactly; (b) give the fold-difference between the two master regulators; (c) give the eigenvalues at a committed state and confirm stability.

**P2 (🟡, bridges to `dynamical-systems` and `molecular-cell-biology`)** Now set $n = 1$ — each master regulator represses the other non-cooperatively. (a) Show that the system has exactly one steady state for every $\alpha > 0$, and find it. (b) State what this implies for a T cell whose master regulators bind DNA as monomers at a single site. (c) The observed plasticity of Th17 cells is often described as "incomplete commitment." Express that in terms of a parameter of this model.

**P3 (🔴)** A dendritic cell that has sensed *M. leprae* through its PRRs secretes IL-12; model it as $\sigma$ added to the numerator of $\dot{x}$ only, with $\alpha = 3$, $n = 2$. (a) Verify that $(x,y) = (3.863,\, 0.188)$ is a steady state when $\sigma = 1$. (b) IL-12 is withdrawn at that point. Where does the cell end up, and what is the one fact you need to answer this? (c) A patient presents with established lepromatous disease. Explain, from the model, why IL-12 therapy at this stage is a much harder proposition than IL-12 at priming, and state the one thing such a therapy would have to achieve.

<details>
<summary>Solutions</summary>

**P1 (a)** Committed states satisfy $xy = 1$ and $x + y = \alpha = 4$, i.e. $t^2 - 4t + 1 = 0$:

$$t = \frac{4 \pm \sqrt{16-4}}{2} = 2 \pm \sqrt{3} = 3.732 \ \text{ or } \ 0.268 .$$

So $(x,y) = (3.732,\, 0.268)$ and its mirror image $(0.268,\, 3.732)$.

Check: $4/(1 + 0.268^2) = 4/1.0718 = 3.732$ ✓; $4/(1+13.93) = 4/14.93 = 0.268$ ✓.

**(b)** $$\frac{x}{y} = \frac{3.732}{0.268} = 13.93 = (2+\sqrt3)^2 = 7 + 4\sqrt3 .$$

(Recall $y = 1/x$, so the ratio is always $x^2$.) Compare $\alpha = 3$, where it was 6.85: **raising the drive from 3 to 4 doubles the sharpness of the commitment.**

**(c)** $$\lambda_\pm = -1 \pm \frac{2}{\alpha} = -1 \pm 0.5 = \{-0.5,\ -1.5\} .$$

Both negative → **stable node**. Consistent with the general rule that these states are stable exactly when $\alpha > 2$, and note that as $\alpha \downarrow 2$ the slow eigenvalue $-1+2/\alpha \to 0$: **near threshold the switch becomes sluggish and easily pushed** — critical slowing down at the pitchfork.

**P2 (a)** With $n=1$, $\dot x = \alpha/(1+y) - x$ and $\dot y = \alpha/(1+x) - y$. At steady state $x(1+y) = \alpha$ and $y(1+x) = \alpha$. Subtracting:

$$x + xy - y - xy = 0 \;\Longrightarrow\; x - y = 0 \;\Longrightarrow\; x = y .$$

**The cross terms cancel identically**, so no asymmetric branch exists — unlike $n=2$, where they left behind the factor $(1-xy)$. Then $x(1+x) = \alpha$ gives

$$x = y = \frac{-1 + \sqrt{1+4\alpha}}{2},$$

taking the positive root. This is stable: the off-diagonal Jacobian magnitude is $\alpha/(1+x)^2 = x/(1+x) < 1$, so both eigenvalues $-1 \pm x/(1+x)$ are negative for every $\alpha$.

**(b)** Such a T cell **can never polarize.** It would settle at a single mixed state with equal amounts of both master regulators — expressing a bit of IFN-γ and a bit of IL-4 — and would return there after any perturbation. Cooperativity ($n > 1$) is a *necessary* condition for commitment, which is why master regulators act as dimers or higher oligomers on clustered binding sites, and why they occupy super-enhancers with many sites rather than single promoters. This is the same requirement that makes the genetic toggle switch work in [molecular-cell-biology 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md); the pitchfork it produces is [dynamical-systems 3.2](../../dynamical-systems/lessons/03-02-pitchfork-symmetry.md).

**(c)** "Incomplete commitment" is **$\alpha$ close to 2 from above** (equivalently, effective cooperativity barely above 1). The committed states exist but are shallow — separation $x-y = \sqrt{\alpha^2-4}$ is small, and the slow eigenvalue $-1+2/\alpha$ is near zero, so relaxation back into the attractor is sluggish and a modest cytokine perturbation carries the cell across the diagonal. **Plasticity is not a violation of the model; it is the model near its bifurcation.**

**P3 (a)** With $\sigma = 1$ the equations are $\dot x = 4/(1+y^2) - x$ and $\dot y = 3/(1+x^2) - y$.

$$\frac{4}{1 + (0.188)^2} = \frac{4}{1.03534} = 3.863 \ \checkmark \qquad \frac{3}{1 + (3.863)^2} = \frac{3}{15.922} = 0.1884 \ \checkmark$$

Both equations are satisfied, so $\dot x = \dot y = 0$. *(It is in fact the only fixed point: eliminating $y$ gives $(1+x^2)^2(4-x) = 9x$, whose left side exceeds the right throughout $0 < x < 3.8$ and falls below it at $x \to 4$ — one sign change, one root. **The Th2 attractor has been destroyed, not merely disfavoured** — a saddle-node bifurcation induced by signal 3.)*

**(b)** Setting $\sigma = 0$ restores the symmetric $\alpha = 3$ system, whose attractors are $(2.618, 0.382)$ and $(0.382, 2.618)$. The one fact needed is **the separatrix is exactly the line $x = y$** (the stable manifold of the saddle, which symmetry pins to the diagonal). The cell sits at $(3.863, 0.188)$, where $x > y$, so it is on the Th1 side and relaxes to $\mathbf{(2.618,\, 0.382)}$ — **it stays Th1.**

The commitment outlives its cause. This is hysteresis, and it is what makes "memory of a decision" a property of the circuit rather than of any dedicated memory molecule.

**(c)** At priming the cell sits near the diagonal, where the separatrix is millimetres away in state space and a small IL-12 signal decides everything. In established lepromatous disease the responding cells are deep in the Th2 attractor at roughly $(0.382, 2.618)$, self-reinforcing, with GATA3 already repressing the IL-12 receptor — so the model's $\sigma$ input is partly disconnected at exactly the cell it needs to reach.

**What the therapy would have to achieve:** not "favour Th1" but **destroy the Th2 attractor** — drive $\sigma$ past the saddle-node point so the Th2 state ceases to exist and the cell has nowhere to sit but Th1. That is a categorically larger intervention than tipping an undecided cell, and it must be sustained long enough for the cell to cross. In practice the achievable route is the same one the model suggests from the other side: prime a *new* cohort of naive cells in a Th1-polarizing context (which is roughly what chemotherapy plus immunomodulation accomplishes by reducing bacterial load and changing the cytokine environment at priming), rather than trying to reverse committed cells.

**The general principle worth keeping:** in a bistable system, it is far cheaper to bias a decision than to reverse one. Immunotherapy is mostly the art of arriving before the switch flips.

</details>

## Flashback

**From Lesson 3.1 (V(D)J recombination):** Take a TCR locus set of 45 Vβ, 2 Dβ and 12 Jβ segments, and 45 Vα with 50 Jα segments. (a) Compute the combinatorial diversity of the αβ TCR from segment joining and chain pairing alone. (b) Junctional diversity pushes the theoretical repertoire past $10^{15}$, yet a human body contains roughly $3 \times 10^{11}$ T cells in total. What does that force you to conclude about the repertoire actually present in a person, and why does the system still work?

<details>
<summary>Solution</summary>

**(a)** β chain: $45 \times 2 \times 12 = 1080$ combinations. α chain: $45 \times 50 = 2250$.

$$\text{combinatorial } \alpha\beta \text{ diversity} = 1080 \times 2250 = 2.43 \times 10^{6}.$$

Chain pairing is a genuine multiplier: $10^3 \times 10^3$, not $10^3 + 10^3$.

**(b)** With a theoretical space above $10^{15}$ and only $3 \times 10^{11}$ T cells — of which the naive pool is smaller still, and each clone is present in multiple copies — **the repertoire in any individual is a sparse random sample of the possible one**, covering under one part in $10^4$ of sequence space. Two people, and even identical twins, carry largely non-overlapping repertoires.

It works because **the target is not to enumerate every receptor but to guarantee that some receptor binds any given epitope well enough to start a response** ([3.2](03-02-clonal-selection-b-cell-activation.md)). Binding is degenerate — one TCR cross-reacts with many peptide–MHC complexes — so a sparse sample still covers epitope space, and the germinal center then improves whatever was found ([3.3](03-03-germinal-centers-affinity-maturation.md)). Repertoire size buys the *precursor frequency* of roughly $10^{-5}$ to $10^{-6}$ that makes the lymph-node search ([1.2](01-02-lymphoid-organs-cell-traffic.md)) succeed in days rather than never.

**The point retrieved from 3.1: cell number, not sequence space, is the binding constraint on a real repertoire** — which is exactly why junctional diversity is concentrated in CDR3, the loop that contacts peptide ([2.3](02-03-t-cell-receptor.md)), rather than spread evenly.

</details>

## Connections

- **Backward:** the two-signal logic is [3.2](03-02-clonal-selection-b-cell-activation.md)'s B-cell interlock in T-cell form; signal 2 exists only because of the PRR firing in [1.3](01-03-barriers-sensing-danger.md); the peptide–MHC-II that supplies signal 1 was built in [2.5](02-05-antigen-processing-presentation.md), and the Tfh output is what licensed the germinal center in [3.3](03-03-germinal-centers-affinity-maturation.md).
- **Forward:** [4.1](04-01-cytotoxic-t-cells.md) needs CD4 help and IFN-γ to raise MHC-I on the cells CTLs patrol; [4.3](04-03-self-tolerance-regulation.md) develops Treg and the anergy branch into the full tolerance argument; [4.4](04-04-autoimmunity-hypersensitivity.md) reads type I hypersensitivity as a Th2 programme aimed at a harmless antigen and type IV as Th1/Th17 aimed at self; [4.5](04-05-immunodeficiency-tumor-transplant.md) removes this node entirely (HIV) and releases its brakes on purpose (checkpoint blockade).
- **Sideways:** the cross-inhibition circuit is the mutual-repression toggle of [molecular-cell-biology 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md), and the transition at $\alpha = 2$ is the supercritical pitchfork of [dynamical-systems 3.2](../../dynamical-systems/lessons/03-02-pitchfork-symmetry.md); the two-eigenvalue classification is [dynamical-systems 1.3](../../dynamical-systems/lessons/01-03-trace-determinant-classification.md). The same lineage-choice mathematics governs hematopoietic branching — the tree from [1.1](01-01-immune-problem-cellular-cast.md) is a cascade of these switches.
