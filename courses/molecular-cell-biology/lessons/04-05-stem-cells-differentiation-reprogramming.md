# Molecular & Cell Biology · Lesson 4.5: Stem cells, differentiation & reprogramming

> ⏱ ~15 min · Module 4: Expression Control & Cell Identity · Builds on: [4.4](04-04-protein-quality-control-degradation.md), [4.1](04-01-chromatin-packaging-regulation.md), [2.4](02-04-circuits-feedback-adaptation.md) · Unlocks: end of course

## Why this matters

Every cell in your body carries the same genome. A neuron and a hepatocyte differ in nothing but which genes they express — and yet a hepatocyte has never once spontaneously become a neuron in your lifetime, across trillions of cell divisions.

That combination is the puzzle this course has been building toward. **Identity must be stable enough to last a lifetime and yet must be established from a single fertilized cell in nine months, and it must be encoded without changing a single base.** Everything you need to answer it is already in hand: bistable switches from [2.4](02-04-circuits-feedback-adaptation.md), self-propagating chromatin from [4.1](04-01-chromatin-packaging-regulation.md), combinatorial transcription from [4.2](04-02-eukaryotic-transcription-machine.md), and regulated destruction from [4.4](04-04-protein-quality-control-degradation.md).

## The idea

**Potency is a hierarchy of what a cell can still become.**

| Term | Can make | Example |
|---|---|---|
| **Totipotent** | every cell type *plus* placenta | zygote |
| **Pluripotent** | all three germ layers, not placenta | embryonic stem cell |
| **Multipotent** | several types within one lineage | haematopoietic stem cell |
| **Unipotent** | one type | spermatogonial stem cell |

**A stem cell is defined by a behaviour, not a marker:** it self-renews *and* it can produce differentiated progeny. The standard trick for doing both at once is **asymmetric division** — one daughter keeps the stem identity, one commits — achieved either by segregating fate determinants unequally at division, or by orienting the spindle ([1.2](01-02-cytoskeleton-three-filaments.md)) so one daughter stays in a **niche** that supplies the self-renewal signals and the other leaves it.

**Identity is a self-sustaining transcription-factor network.** A master regulator turns on its own gene. Two or three such factors turn on each other. The result is a circuit that, once switched on, keeps itself on — **exactly the positive-feedback bistability of [2.4](02-04-circuits-feedback-adaptation.md)** — and simultaneously represses the master regulators of alternative fates. Mutual repression between two self-activating factors gives a **toggle switch**: two stable states, one for each fate, with an unstable middle nobody occupies.

The pluripotency network (OCT4, SOX2, NANOG) is exactly this. Each binds its own enhancer and the others', and the network as a whole also represses lineage-specifying factors.

**Chromatin makes the state heritable.** Transcription-factor networks are fast but they are diluted at division. What carries identity through mitosis is the chromatin: enhancers of the wrong lineage are packed into H3K27me3-marked domains that re-establish themselves after replication by the reader–writer loop of [4.1](04-01-chromatin-packaging-regulation.md), and DNA methylation at their promoters is copied by a maintenance methyltransferase. **Two layers, and they reinforce each other** — the network keeps the chromatin open where it needs it, and the chromatin keeps the network's alternatives shut.

**Waddington's landscape, taken literally.** A ball rolling down a branching valley system: the valleys are the stable states, the ridges the unstable thresholds, and the depth of a valley is how hard the state is to leave. It is a genuine picture of the dynamical system, not a metaphor — the valleys *are* the attractors of the network's dynamics.

**And then Yamanaka rolled the ball uphill.** Forcing expression of four transcription factors (OCT4, SOX2, KLF4, MYC) in a fibroblast reprogrammes it to a pluripotent state. Success rate is around 0.1 percent and it takes weeks — but it works, and it proves that **differentiation removes no information from the genome.** Identity is a state of a dynamical system, and states can be changed.

## The formal version

**The toggle switch.** Two mutually repressing, self-activating factors $x$ and $y$:

$$\frac{dx}{dt} = \frac{\alpha}{1 + y^{n}} - x, \qquad \frac{dy}{dt} = \frac{\alpha}{1 + x^{n}} - y .$$

*In words: each factor is made at a rate that falls as the other rises.* For $n > 1$ and $\alpha$ large enough, this system has **three** steady states: high-$x$/low-$y$, low-$x$/high-$y$, and a symmetric unstable state at $x = y$ in the middle. The two stable ones are the two cell fates; the middle is the ridge no cell sits on.

The symmetric state is easy to find: setting $x = y$ gives

$$x = \frac{\alpha}{1 + x^{n}} \quad\Longrightarrow\quad x^{n+1} + x - \alpha = 0 .$$

**Depth of a valley = how hard the state is to leave.** For a stochastic system in a bistable landscape, the mean time to spontaneously switch out of a state rises **exponentially** with the barrier height $\Delta U$ measured in units of the noise strength:

$$\boxed{\;\langle T_{\text{switch}}\rangle \;\sim\; \tau_0\, e^{\,\Delta U/D}\;}$$

*In words: doubling the barrier does not double the stability, it squares it.* This is Kramers' escape formula, the same relation that governs a chemical reaction rate over an activation barrier ([physical-chemistry 3.4](../../physical-chemistry/lessons/03-04-arrhenius-transition-state-theory.md)) — and it is why a modest-looking barrier gives a cell identity that survives for decades. It is also why reprogramming is rare rather than impossible: you are asking for a spontaneous barrier crossing, and forcing the four factors lowers the barrier rather than eliminating it.

**Pioneer factors do the hard part.** An ordinary transcription factor cannot bind DNA wrapped in a nucleosome in a closed domain — the free-energy cost is prohibitive ([4.1](04-01-chromatin-packaging-regulation.md)). A **pioneer factor** can engage its motif on the nucleosome surface and recruit remodellers to open the region. OCT4 and SOX2 are pioneer factors, and that is precisely why they, and not just any activators, can initiate reprogramming: **the barrier being crossed is a chromatin barrier, and only a pioneer factor can start to lower it.**

**Why reprogramming is slow and stochastic.** Each cell must, in some order: silence its somatic program, open pluripotency enhancers against a closed chromatin state, erase DNA methylation at those promoters, and establish the self-sustaining network — while its existing identity network actively opposes each step. The process is a sequence of low-probability events, which produces exactly the observed picture: **a small fraction of cells succeed, at unpredictable times, and the rest do not.**

## Picture

![Waddington's landscape drawn as a branching valley system with a ball at the top, the valleys labelled as stable cell fates and the ridges as unstable thresholds, and an arrow showing Yamanaka reprogramming pushing the ball back up. Beside it, the toggle-switch circuit: two transcription factors each activating their own gene and repressing the other, with a phase portrait showing two stable fixed points on the axes and an unstable one on the diagonal. Below, a panel contrasting an ordinary transcription factor unable to bind its motif inside a closed nucleosome with a pioneer factor engaging the nucleosome surface and recruiting a remodeller to open the region.](assets/04-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — find the states of a toggle switch).** Take $n = 2$, $\alpha = 3$:

$$\frac{dx}{dt} = \frac{3}{1+y^{2}} - x, \qquad \frac{dy}{dt} = \frac{3}{1+x^{2}} - y .$$

(a) Find the symmetric steady state. (b) Verify that asymmetric states exist. (c) Interpret.

(a) Set $x = y$:

$$x = \frac{3}{1+x^{2}} \;\Longrightarrow\; x^{3} + x - 3 = 0 .$$

Evaluate: $f(1) = 1 + 1 - 3 = -1$; $f(1.2) = 1.728 + 1.2 - 3 = -0.072$; $f(1.25) = 1.953 + 1.25 - 3 = +0.203$. So

$$x = y \approx \mathbf{1.21}.$$

(b) Look for a state with $x$ high and $y$ low, by fixed-point iteration. Start from $y = 0.30$:

| iteration | $x = 3/(1+y^2)$ | $y = 3/(1+x^2)$ |
|---|---|---|
| 1 | $3/1.09 = 2.752$ | $3/8.574 = 0.350$ |
| 2 | $3/1.122 = 2.673$ | $3/8.145 = 0.368$ |
| 3 | $3/1.136 = 2.641$ | $3/7.975 = 0.376$ |
| … | converging | converging |

$$x \approx \mathbf{2.62}, \qquad y \approx \mathbf{0.38},$$

and by symmetry the mirror state $x \approx 0.37$, $y \approx 2.65$ also exists. **Three steady states.**

(c) The two asymmetric states are the two **cell fates** — one factor dominant, the other suppressed, each maintaining itself. The symmetric state at $x = y \approx 1.21$ is the **unstable ridge**: a hypothetical cell with both factors equal, which any fluctuation pushes off one way or the other. Real progenitors do transiently co-express opposing lineage factors ("multilineage priming") and then resolve — which is this middle state being occupied briefly and then abandoned, exactly as the model says it must be.

**And note what breaks it.** With $n = 1$ the equations become linear enough that only one steady state survives — no toggle. **Cooperativity is again the prerequisite**, the same requirement as in [2.4](02-04-circuits-feedback-adaptation.md) and [3.1](03-01-cell-cycle-engine-irreversibility.md). It is supplied here by transcription factors binding enhancers as dimers at multiple sites.

**Example 2 (why you'd care — the barrier is why you do not get tumours from cell-identity drift).** Suppose a differentiated cell's identity sits in a valley with barrier height $\Delta U = 15D$ (fifteen noise units), and the attempt frequency $\tau_0^{-1}$ is once per cell cycle, roughly once per day. (a) What is the mean time to spontaneous identity loss? (b) Reprogramming factors lower the barrier to $\Delta U = 8D$. Recompute. (c) What does the comparison say about how reprogramming works, and about cancer?

(a) $$\langle T\rangle = \tau_0 e^{15} = 1\ \mathrm{day} \times 3.27\times10^{6} = 3.27\times10^{6}\ \text{days} \approx \mathbf{9000\ \text{years}}.$$

Per cell, per identity — effectively never, over a human lifetime.

(b) $$\langle T\rangle = 1\ \mathrm{day} \times e^{8} = 2981\ \text{days} \approx \mathbf{8\ \text{years}}.$$

Still long for one cell. But reprogramming experiments use $10^{5}$ cells and run for ~3 weeks. Expected successes:

$$10^{5} \times \frac{21\ \text{days}}{2981\ \text{days}} = 10^{5} \times 7.0\times10^{-3} = \mathbf{\sim 700\ \text{colonies}},$$

which is an efficiency of 0.7 percent — the right order of magnitude for the observed 0.1–1 percent.

(c) **Reprogramming does not push the cell over the barrier; it lowers the barrier and waits.** The four factors do not deterministically convert a fibroblast — they make a very rare event merely rare, and the experiment supplies enough cells and enough time for the rare event to happen a few hundred times. This is why reprogramming is stochastic, why efficiency is so low, and why later methods (adding chemical inhibitors of the somatic program, or of the chromatin marks holding it) improve efficiency by orders of magnitude: **they lower the barrier further, and the response is exponential.**

**And the cancer reading.** A somatic mutation that lowers a cell-identity barrier does the same thing — and dedifferentiation is a recognized feature of aggressive tumours. Since the escape time is *exponential* in barrier height, a mutation that shaves the barrier by a factor of two does not double the rate of identity loss; from the numbers above it raises it roughly a thousandfold. **Anything that operates through an exponent should be assumed to be dangerous out of proportion to its apparent size.**

## Watch out

- **You might think differentiation removes genetic information.** It does not — Gurdon's nuclear-transfer experiments and Yamanaka's four factors both prove the genome is intact. What changes is chromatin state and network state, and both are reversible in principle.
- **You might expect the master regulator to be sufficient.** MyoD converts fibroblasts to muscle rather well, but the same trick fails for most lineages, because the target chromatin is closed and the factor is not a pioneer. **Sufficiency depends on the chromatin the factor lands on**, which is why the same experiment works spectacularly in one lineage and not at all in another.
- **You might read "stem cell" as a molecular type.** It is a *behaviour* defined by self-renewal plus potency, and it is often conferred by the **niche** rather than intrinsic to the cell — remove a cell from its niche and it may differentiate; put a committed cell back in and it may revert.
- **You might treat epigenetic stability as absolute.** It is a barrier, not a wall, and its stability is exponential in barrier height — meaning it is both extraordinarily reliable and, if the barrier is lowered even modestly, suddenly not.

## One-liner

> Cell identity is a bistable network locked in by self-propagating chromatin, and it lasts a lifetime because escape time is exponential in barrier height — which is also why lowering that barrier a little makes reprogramming, and dedifferentiation, suddenly possible.

## Problems

**P1 (🟢)** For the toggle switch with $n = 2$ and $\alpha = 4$: (a) Write the equation for the symmetric steady state. (b) Find it numerically by evaluating at $x = 1.2,\ 1.4,\ 1.5$.

**P2 (🟡)** A cell identity has barrier $\Delta U = 12D$ with an attempt rate of once per day. (a) Compute the mean escape time. (b) A drug lowers the barrier by 30 percent. Recompute, and give the fold-change in escape rate. (c) State the general lesson about interventions that act on a barrier height.

**P3 (🔴, synthesis — bridges the whole course)** A fibroblast is to be converted directly into a neuron by forced expression of three transcription factors, without passing through a pluripotent intermediate. For each of the following, name the mechanism from this course that must be overcome or exploited, citing the lesson: (a) the neuronal enhancers are in H3K27me3-marked closed chromatin; (b) the fibroblast identity network actively represses neuronal genes; (c) the fibroblast's existing structural proteins and identity transcription factors must disappear; (d) once converted, the neuronal state must remain stable for the life of the cell. Then (e) explain why direct conversion efficiency is generally *higher* than reprogramming to pluripotency followed by differentiation, in terms of barrier heights.

<details>
<summary>Solutions</summary>

**P1 (a)** $$x = \frac{4}{1+x^{2}} \;\Longrightarrow\; x^{3} + x - 4 = 0.$$

**(b)** $f(1.2) = 1.728 + 1.2 - 4 = -1.072$; $f(1.4) = 2.744 + 1.4 - 4 = +0.144$; $f(1.5) = 3.375 + 1.5 - 4 = +0.875$. Root between 1.2 and 1.4, closer to 1.4:

$$x = y \approx \mathbf{1.38}.$$

**P2 (a)** $$\langle T\rangle = e^{12}\ \text{days} = 1.63\times10^{5}\ \text{days} \approx \mathbf{446\ \text{years}}.$$

**(b)** New barrier $= 0.7 \times 12 = 8.4$:

$$\langle T\rangle = e^{8.4} = 4447\ \text{days} \approx \mathbf{12\ \text{years}},$$

and the fold-change in **rate** is

$$\frac{e^{12}}{e^{8.4}} = e^{3.6} = \mathbf{37\times}.$$

**(c)** **A modest change in a barrier produces an exponential change in rate.** Cutting the barrier by 30 percent raised the escape rate 37-fold; cutting it in half would raise it $e^{6} = 400$-fold. Any intervention acting on an exponent must be assessed by its effect on the exponent, not by its apparent proportional size — and this cuts both ways: it is why small-molecule additions improve reprogramming efficiency so dramatically, and why a mutation that modestly destabilizes a cell identity is far more dangerous than it looks.

**P3**

**(a) Closed chromatin.** The neuronal enhancers are in H3K27me3 domains that self-propagate through the reader–writer positive-feedback loop of [4.1](04-01-chromatin-packaging-regulation.md), and the Boltzmann accessibility calculation there shows an ordinary factor's binding is suppressed by orders of magnitude. This requires a **pioneer factor** (ASCL1 plays this role in neuronal conversion) that can engage its motif on the nucleosome surface and recruit remodellers — the only way to begin opening a closed domain from outside.

**(b) Active repression by the resident network.** The fibroblast identity circuit is a self-sustaining positive-feedback network ([2.4](02-04-circuits-feedback-adaptation.md)) that also represses alternative master regulators — the toggle-switch architecture of this lesson. The incoming factors are not merely acting on empty chromatin; they are competing against an entrenched attractor. Either the incoming factors must be expressed strongly enough to push the system past the unstable ridge, or the resident network must be suppressed directly (which is exactly why adding a repressor of the somatic program, or knocking down a lineage factor, improves efficiency).

**(c) Clearing the old proteome.** Existing fibroblast transcription factors and structural proteins must be removed, and by [4.4](04-04-protein-quality-control-degradation.md) that happens by regulated degradation plus dilution — and dilution requires division, which is a real constraint since neurons stop dividing. Cytoskeletal remodelling from a spread, stress-fibre-rich fibroblast morphology to a neuronal one requires dismantling actin structures and rebuilding a microtubule array ([1.2](01-02-cytoskeleton-three-filaments.md)). Note the timescale problem: a stable fibroblast protein with a 40 h half-life in a cell that has stopped dividing takes days to clear ([4.4](04-04-protein-quality-control-degradation.md), P2), which is part of why conversion takes weeks.

**(d) Long-term stability.** The new state must become an attractor in its own right: the neuronal factors must establish mutual positive feedback ([2.4](02-04-circuits-feedback-adaptation.md)) *and* the fibroblast enhancers must be closed into self-propagating heterochromatin ([4.1](04-01-chromatin-packaging-regulation.md)) with DNA methylation copied at each replication. **Both layers are needed** — a network alone is diluted at division, and chromatin alone does not produce the proteins. Conversions that establish the network but not the chromatin give cells that revert, which is a documented failure mode.

**(e) Why direct conversion is more efficient.** Reprogramming to pluripotency requires climbing all the way to the top of the Waddington landscape — erasing DNA methylation genome-wide, reactivating a silenced X chromosome, resetting telomeres — and then descending a different valley. That is **two** barrier crossings, one of them the largest in the landscape.

Direct conversion crosses **one** ridge between two adjacent valleys at roughly the same height. Since escape time is $\sim e^{\Delta U/D}$, and the barriers multiply when crossings are sequential:

$$\text{rate}_{\text{two-step}} \sim e^{-(\Delta U_{\text{up}} + \Delta U_{\text{down}})/D} \quad\text{versus}\quad \text{rate}_{\text{direct}} \sim e^{-\Delta U_{\text{ridge}}/D},$$

and $\Delta U_{\text{up}}$ alone is much larger than $\Delta U_{\text{ridge}}$. **The exponential makes the difference enormous** — direct conversion efficiencies of several percent against reprogramming efficiencies of 0.1 percent are exactly what this predicts.

The trade-off, worth stating: direct conversion gives you the target cell type and nothing else, while a pluripotent intermediate is expandable and can be differentiated into any lineage. **You are choosing between a cheap crossing to one destination and an expensive climb that reaches all of them** — which is the same trade every hub-versus-point-to-point network makes.

</details>

## Flashback

**From Lesson 4.4 (protein turnover and dilution):** A fibroblast identity transcription factor has an intrinsic half-life of 6 h. During direct conversion, its transcription is shut off completely. (a) In a dividing cell with a 24 h cycle, compute $k_{\text{eff}}$ and the time for the factor to fall to 5 percent. (b) The converting cell exits the cycle after 48 h and stops dividing. Recompute the time constant for what remains. (c) Explain why the cell-cycle exit is a problem for the conversion, and name one experimental fix.

<details>
<summary>Solution</summary>

**(a)** $$k_d = \frac{\ln 2}{6\ \mathrm{h}} = 0.1155\ \mathrm{h^{-1}}, \qquad k_{\text{dil}} = \frac{\ln 2}{24\ \mathrm{h}} = 0.0289\ \mathrm{h^{-1}},$$
$$k_{\text{eff}} = 0.1155 + 0.0289 = 0.1444\ \mathrm{h^{-1}}, \qquad t_{1/2}^{\text{eff}} = \frac{\ln 2}{0.1444} = 4.8\ \mathrm{h}.$$

Falling to 5 percent takes $\ln 20/\ln 2 = 4.32$ effective half-lives:

$$4.32 \times 4.8\ \mathrm{h} = \mathbf{20.7\ \mathrm{h}}.$$

**(b)** Without division, $k_{\text{eff}} = k_d = 0.1155\ \mathrm{h^{-1}}$ and $t_{1/2} = 6$ h — 25 percent slower. Time to 5 percent becomes $4.32 \times 6 = \mathbf{25.9\ \mathrm{h}}$.

**(c)** The problem is general rather than specific to this factor. **Dilution is often the dominant clearance route for the stable proteins** that make up a differentiated cell's structural identity ([4.4](04-04-protein-quality-control-degradation.md), P2 — for a 40 h protein in a 20 h cycle, dilution is two-thirds of removal). A cell that stops dividing loses that route entirely, so its long-lived fibroblast proteins now clear only by proteolysis, taking days instead of hours. Meanwhile the neuronal program is trying to establish itself in a cell still full of the old one, and residual fibroblast transcription factors keep the old network's positive feedback partially alive — which can pull the cell back into its original attractor.

*Experimental fixes:* allow or drive a few rounds of division early in the conversion before the neuronal program forces cycle exit (proliferation genuinely improves conversion efficiency, and this is one reason MYC helps in reprogramming); or actively degrade the residual factors rather than waiting for them — for example with a targeted degrader ([4.4](04-04-protein-quality-control-degradation.md), Example 2), or by knocking down the fibroblast master regulators directly rather than relying on the incoming factors to outcompete them.

</details>

## Connections

- **Backward:** this lesson is the course assembled — bistability from [2.4](02-04-circuits-feedback-adaptation.md), heritable chromatin from [4.1](04-01-chromatin-packaging-regulation.md), combinatorial and bursty transcription from [4.2](04-02-eukaryotic-transcription-machine.md), and turnover from [4.4](04-04-protein-quality-control-degradation.md), all required together to explain one fact about a liver cell.
- **Forward:** [neuroscience](../../neuroscience/syllabus.md) and [immunology](../../immunology/syllabus.md) both take this course's signalling and identity machinery as given; [systems-biology](../../systems-biology/syllabus.md) formalizes the gene-regulatory networks sketched here.
- **Sideways:** Kramers' escape formula is the Arrhenius rate law of [physical-chemistry 3.4](../../physical-chemistry/lessons/03-04-arrhenius-transition-state-theory.md) — a cell identity and a chemical reaction are stabilized by barriers in exactly the same way; the landscape's attractors are those of [dynamical-systems 1.4](../../dynamical-systems/lessons/01-04-linearization-hartman-grobman.md).
