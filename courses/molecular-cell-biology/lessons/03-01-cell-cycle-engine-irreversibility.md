# Molecular & Cell Biology · Lesson 3.1: The cell-cycle engine & why transitions are irreversible

> ⏱ ~15 min · Module 3: Division, Damage & Cancer · Builds on: [2.4](02-04-circuits-feedback-adaptation.md), [general-biology 2.4](../../general-biology/lessons/02-04-the-cell-cycle.md) · Unlocks: 3.2 (the DNA-damage response)

## Why this matters

[general-biology 2.4](../../general-biology/lessons/02-04-the-cell-cycle.md) gave you the phases — G1, S, G2, M — and the fact that checkpoints exist. This lesson asks the mechanistic question that leaves open: **what physically prevents a cell from going backwards?**

The answer matters because the cycle's whole reliability rests on it. A cell that has replicated its DNA must not replicate it again before dividing; a cell that has separated its chromosomes must not un-separate them. Neither constraint can be enforced by a reversible chemical switch, because a reversible switch flickers. The cell's solution is to make the key transitions **thermodynamically one-way** by destroying the protein that defined the previous state — and once you see that, the strange fact that the cycle runs on targeted protein destruction stops being a curiosity and becomes the central design decision.

## The idea

**The engine is one enzyme family with interchangeable timers.** Cyclin-dependent kinases (CDKs) are always present and always inactive on their own. They become active only when bound to a **cyclin**, and cyclins are synthesized and destroyed on a schedule. So:

$$\text{which phase the cell is in} \;=\; \text{which cyclin currently exists}.$$

*One kinase, several timers, and the timer's abundance is the clock.* G1 cyclins license the commitment to divide; S cyclins fire replication origins; M cyclins drive entry into mitosis.

**Three layers of control on the same enzyme.** Cyclin binding is necessary but not sufficient:

1. **Cyclin abundance** — synthesis and, above all, regulated destruction.
2. **Activating and inhibitory phosphorylation** on the CDK itself. Wee1 kinase adds an inhibitory phosphate; Cdc25 phosphatase removes it. Note that these are the *same enzyme* being switched both ways by two opposing activities — the zero-order comparator of [2.3](02-03-kinase-cascades-switch.md).
3. **CDK inhibitor proteins** (p21, p27) that bind the complex and block it stoichiometrically. This is the layer the damage response uses ([3.2](03-02-dna-damage-response.md)).

**Now the irreversibility.** Two ubiquitin ligases mark cyclins and inhibitors for destruction by the proteasome ([4.4](04-04-protein-quality-control-degradation.md)):

- **SCF** destroys the CDK inhibitor at the G1/S transition, releasing S-phase CDK.
- **APC/C** destroys securin (freeing separase to cut the cohesin holding sister chromatids together) and then M cyclin, at the metaphase-to-anaphase transition and exit from mitosis.

**Proteolysis is irreversible in a way phosphorylation is not.** A phosphatase can undo a kinase. Nothing can un-hydrolyse a peptide bond. **The cell buys the arrow of time in its cycle by paying for it in destroyed protein** — a substantial, deliberate waste, and the price of never going backwards.

**And the transitions are switches, not ramps.** Cdc25 activates M-CDK; M-CDK activates Cdc25. Wee1 inhibits M-CDK; M-CDK inhibits Wee1. That is **positive feedback twice over** — a double-positive loop and a double-negative loop, both of which are positive in effect — wrapped around an ultrasensitive step. By [2.4](02-04-circuits-feedback-adaptation.md), that gives bistability, and bistability with a delayed destruction arm gives a relaxation oscillator. **The cell cycle *is* the circuit you analysed in 2.4.**

## The formal version

**The restriction point as a bistable switch.** In G1, the retinoblastoma protein Rb binds and sequesters the transcription factor E2F, which drives expression of S-phase genes including cyclin E. Growth signalling ([2.3](02-03-kinase-cascades-switch.md)) raises cyclin D–CDK4/6, which phosphorylates Rb, releasing some E2F. E2F makes cyclin E, cyclin E–CDK2 phosphorylates Rb *further* — and there is the loop:

$$\text{E2F} \;\longrightarrow\; \text{cyclin E–CDK2} \;\longrightarrow\; \text{Rb phosphorylation} \;\longrightarrow\; \text{more free E2F}.$$

*In words: E2F promotes its own release.* With the multisite phosphorylation of Rb supplying an effective Hill coefficient well above 1, this is exactly the

$$\frac{dx}{dt} = \alpha\frac{x^{n}}{K^{n}+x^{n}} + b - \beta x$$

system of [2.4](02-04-circuits-feedback-adaptation.md), with three steady states. Below threshold the cell sits in G1 and remains responsive to growth factors; past threshold it flips to the high-E2F state and **stays there even if the growth factor is removed.** That transition is the **restriction point**, and the withdrawal of dependence on external signal is precisely the hysteresis of a bistable system.

**Hysteresis is measurable here.** Experiments in *Xenopus* extracts show that the cyclin concentration required to *enter* mitosis is substantially higher than the concentration required to *stay* in it. Two different thresholds for the same transition — the experimental signature of bistability, exactly as [2.4](02-04-circuits-feedback-adaptation.md) predicted.

**Why destruction and not dephosphorylation.** Consider the free-energy bookkeeping. Removing a phosphate releases a few $k_BT$ and the reverse reaction is a kinase away. Degrading a cyclin destroys tens of kilojoules per mole of peptide bonds and disperses hundreds of residues into the amino-acid pool; the reverse requires re-synthesizing the protein from scratch, which takes minutes and thousands of ATP. **The transition is not made irreversible by a large barrier — it is made irreversible by deleting the reactant.**

**The spindle-assembly checkpoint, in one line.** An unattached kinetochore ([1.2](01-02-cytoskeleton-three-filaments.md)) catalytically generates a diffusible inhibitor of APC/C. *In words: a single unattached chromosome anywhere in the cell can veto anaphase for the whole cell*, which is the only acceptable design when the cost of an error is aneuploidy.

## Picture

![Top: the cycle as a ring with G1, S, G2 and M, showing which cyclin-CDK pair is active in each phase and marking the two irreversible destruction events — SCF destroying the CDK inhibitor at G1/S and APC/C destroying securin and M-cyclin at metaphase to anaphase. Bottom left: the Rb-E2F positive feedback loop drawn as a circuit. Bottom right: a hysteresis plot of CDK activity against cyclin concentration showing a higher threshold for entering mitosis than for leaving it, with the unstable branch dashed between them.](assets/03-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — read the restriction point off the circuit).** A simplified E2F module obeys

$$\frac{dE}{dt} = 4\,\frac{E^{2}}{1 + E^{2}} + 0.1\,S - 2E,$$

where $E$ is free E2F and $S$ is the growth-factor input. (a) Find the steady states at $S = 0$. (b) Find the input at which the OFF state ceases to exist. (c) Interpret both biologically.

**Set up the polynomial once.** Multiplying $4E^2/(1+E^2) + 0.1S = 2E$ through by $(1+E^2)$:

$$\boxed{\;2E^{3} - (4 + 0.1S)\,E^{2} + 2E - 0.1S = 0\;}$$

(a) At $S = 0$ this factors cleanly:

$$2E^{3} - 4E^{2} + 2E = 2E\,(E - 1)^{2} = 0 \;\Longrightarrow\; E = 0, \quad E = 1 \ \text{(double root)}.$$

A **double** root means production is exactly *tangent* to decay at $E = 1$ — the marginal case. With no growth factor, the only genuinely stable state is $E = 0$: **a cell with no growth signal rests in G1 with E2F fully sequestered.**

(b) Raising $S$ lifts the production curve by the constant $0.1S$, which pushes the OFF root *up* and the threshold root *down* until the two collide and annihilate. Tracking the roots numerically:

| $S$ | OFF | threshold | ON |
|---|---|---|---|
| 0 | 0 | 1 (tangent) | 1 (tangent) |
| 0.5 | 0.026 | 0.773 | 1.226 |
| 1 | 0.056 | 0.671 | 1.322 |
| 2 | 0.137 | 0.500 | 1.463 |
| **2.70** | **0.296** | **0.296** | 1.544 |
| 3 | — | — | 1.576 |

The OFF and threshold roots merge at $S^{*} \approx 2.70$ and vanish. Above that, **one steady state remains** and it is the ON state.

(c) **Below $S^{*}$ the cell has a genuine choice.** Two stable states coexist, so which one it occupies depends on its history — it can sit quiescent in G1 for years with the S-phase machinery poised but off, and a transient growth signal that fails to push $E$ past the threshold leaves it exactly where it was.

**At $S^{*}$ the choice disappears.** The OFF state is annihilated in a saddle-node bifurcation ([dynamical-systems 3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md)) and the cell must proceed; there is nowhere else for it to be. That input level *is* the restriction point.

**And now read the cancer mutations off the same picture.** A mutation that raises the effective $S$ (a constitutively active Raf, [2.3](02-03-kinase-cascades-switch.md)) pushes the cell permanently past $S^{*}$. A mutation that inactivates Rb removes the sequestration that made the OFF state stable at all — it deletes the low branch outright, so no value of $S$ can hold the cell in G1. **Two different genes, two different mechanisms, one bifurcation diagram**, and that is why Rb-pathway lesions and growth-signalling lesions are alternatives rather than additions in tumour genomes.

**Example 2 (why you'd care — why re-replication is impossible, and what it costs).** A cell must fire each replication origin exactly once per cycle. Explain the mechanism, and say why it requires two mutually exclusive states rather than one counter.

The mechanism is a **two-phase licence** whose two phases cannot coexist:

1. **Licensing (only in G1, only when CDK is low).** The MCM helicase is loaded onto every origin. Loading *requires* low CDK activity.
2. **Firing (only in S, only when CDK is high).** S-CDK activates loaded origins. Firing *requires* high CDK activity — and high CDK simultaneously **blocks any further loading**, by phosphorylating and exporting or degrading the loading machinery.

A fired origin has lost its MCM and cannot be re-licensed while CDK stays high. CDK stays high from S through M and only falls when APC/C destroys M-cyclin at mitotic exit — by which time the chromosomes have been separated into two cells. So the two states form a strict alternation:

$$\underbrace{\text{low CDK: load, do not fire}}_{\text{G1}} \;\longrightarrow\; \underbrace{\text{high CDK: fire, do not load}}_{\text{S, G2, M}} \;\longrightarrow\; \text{APC/C destroys cyclin} \;\longrightarrow\; \text{G1}$$

**Why not a counter?** A counter would need memory of how many times each of ~50,000 origins had fired, and it would have to be reset — and any counter that can be reset can be reset at the wrong time. The two-state design needs no memory at all: **the licence and the trigger are chemically incompatible, so the ordering is enforced by the chemistry rather than by bookkeeping.**

**The cost is the destruction.** The only way out of the high-CDK state is to destroy the cyclin, which means every cycle the cell throws away all of its M-cyclin and rebuilds it. That waste *is* the mechanism: it is what makes "high CDK" a state the cell cannot slip back into accidentally, and it is why deregulated APC/C or a non-degradable cyclin mutant arrests cells in mitosis permanently.

## Watch out

- **You might think CDK levels oscillate.** CDK protein is roughly constant. **Cyclin** oscillates, and CDK *activity* follows it. Measuring CDK abundance tells you almost nothing about the cycle.
- **You might expect the checkpoints to be the primary controls.** Checkpoints are *brakes* — they are dispensable in an unperturbed cell, and yeast lacking them cycle fine until you damage their DNA. The primary control is the cyclin–CDK oscillator itself, and the checkpoints act on it.
- **You might read "irreversible" as "a big energy barrier."** It is not kinetic; it is that the reactant no longer exists. Ubiquitin-mediated proteolysis converts a reversible switch into a one-way door by removing the door.
- **You might think one unattached chromosome is a small problem.** The spindle checkpoint treats it as a total veto, because segregating 45 chromosomes correctly and one incorrectly is not 98 percent success — it is aneuploidy, and aneuploidy is usually lethal or oncogenic.

## One-liner

> The cycle is one kinase with interchangeable timers, made into a switch by positive feedback and made one-way by destroying the timer — the cell buys the arrow of time in its own division by paying for it in shredded protein.

## Problems

**P1 (🟢)** For each event, name the ubiquitin ligase responsible and state what is destroyed: (a) release of S-phase CDK from its inhibitor at G1/S; (b) separation of sister chromatids at anaphase; (c) exit from mitosis and return to low CDK.

**P2 (🟡)** A geneticist makes a **non-degradable M-cyclin** by deleting the sequence APC/C recognizes. (a) Predict the phenotype of a cell expressing it. (b) Explain why the cell can still enter mitosis normally but cannot leave. (c) Predict what happens to the *next* cycle's origin licensing, and connect this to Example 2.

**P3 (🔴, bridges to 2.4 and to dynamical-systems)** *Xenopus* extract experiments find that entry into mitosis requires cyclin above 32 nM, while exit occurs only when cyclin falls below 16 nM. (a) What does the two-threshold result demonstrate, and what would a merely ultrasensitive (non-bistable) system have shown instead? (b) Sketch the CDK-activity-versus-cyclin curve implied, labelling the two saddle-node points. (c) Cyclin is synthesized at a constant rate and destroyed only when CDK activity is high. Explain how this combination converts the bistable switch into an oscillator, and identify the fast and slow variables.

<details>
<summary>Solutions</summary>

**P1**

| | Ligase | Destroyed |
|---|---|---|
| (a) | **SCF** | the CDK inhibitor (p27 / Sic1), releasing S-CDK |
| (b) | **APC/C** | **securin**, which frees separase to cleave cohesin |
| (c) | **APC/C** | **M-cyclin**, dropping CDK activity and permitting mitotic exit |

**P2 (a)** The cell enters mitosis and **arrests there permanently** — chromosomes condensed, spindle assembled, unable to exit. This is one of the classic experiments establishing that cyclin destruction, not merely inactivation, drives mitotic exit.

**(b)** Entry requires *high* M-CDK, which the non-degradable cyclin supplies perfectly well. Exit requires CDK activity to *fall*, and the only route to that is APC/C-mediated cyclin destruction. Removing the destruction signal removes the only exit. Note that APC/C is still active and still destroys **securin**, so sister chromatids *do* separate — the cell reaches anaphase and then stops, which is diagnostic: it separates the two APC/C substrates and shows they are destroyed for different purposes.

**(c)** There is no next cycle. Origin licensing requires **low CDK**, and CDK never falls, so MCM helicases can never be reloaded. Even if the cell were somehow forced onward, its origins would be unlicensed and it could not replicate. This is Example 2's alternation seen from the failure side: the two states are mutually exclusive by design, so a cell stuck in the high-CDK state is stuck out of the licensing state as well.

**P3 (a)** It demonstrates **bistability with hysteresis** — over the range 16–32 nM the system has *two* stable states, and which one it occupies depends on where it came from. A merely ultrasensitive system would have shown a single steep curve with **one** threshold traced identically in both directions; the up-sweep and down-sweep would superimpose. Two distinct thresholds is the operational definition of memory.

**(b)** The sketch is an S-shaped curve of CDK activity against cyclin, lying on its side: a low-activity branch running right to 32 nM, a high-activity branch running left to 16 nM, and an unstable middle branch (dashed) connecting them backwards. The saddle-node points sit at the two ends of the dashed branch — at **32 nM** (right, where the low branch is annihilated: entry) and **16 nM** (left, where the high branch is annihilated: exit).

**(c)** Cyclin is the **slow** variable; CDK activity is the **fast** one. Starting low: cyclin accumulates steadily while CDK stays low (the system tracks the lower branch). At 32 nM the lower branch vanishes and CDK **jumps** to the high branch — mitosis. High CDK now activates APC/C (after a delay), which destroys cyclin, so cyclin falls while CDK stays high (tracking the upper branch leftward). At 16 nM the upper branch vanishes and CDK **drops** back — mitotic exit. Cyclin then accumulates again and the loop repeats.

This is exactly the **relaxation oscillator** of [2.4](02-04-circuits-feedback-adaptation.md), problem P3: a bistable fast subsystem plus a slow negative-feedback variable that drags it back and forth across its own saddle-nodes. The period is set almost entirely by the slow cyclin dynamics, and the transitions are near-instantaneous — which is precisely what a cell cycle looks like on a microscope: long quiet phases punctuated by abrupt transitions.

</details>

## Flashback

**From Lesson 2.4 (bistability from positive feedback):** A self-activating protein obeys $dx/dt = 6x^{2}/(1+x^{2}) + 0.05 - 2x$. (a) Write the steady-state polynomial. (b) Evaluate it at $x = 0,\ 0.05,\ 0.2,\ 1,\ 3$ and locate the three roots. (c) Classify each, and say which biological state each corresponds to if $x$ is free E2F.

<details>
<summary>Solution</summary>

**(a)** Multiply $6x^2/(1+x^2) + 0.05 = 2x$ by $(1+x^2)$:

$$6x^{2} + 0.05 + 0.05x^{2} = 2x + 2x^{3} \;\Longrightarrow\; 2x^{3} - 6.05x^{2} + 2x - 0.05 = 0.$$

**(b)** Let $g(x) = 2x^3 - 6.05x^2 + 2x - 0.05$:

| $x$ | 0 | 0.05 | 0.2 | 1 | 3 |
|---|---|---|---|---|---|
| $g(x)$ | $-0.050$ | $+0.035$ | $+0.124$ | $-2.100$ | $+5.500$ |

Sign changes between 0 and 0.05, between 0.2 and 1, and between 1 and 3. Refining:

$$x_1 \approx 0.027, \qquad x_2 \approx 0.346, \qquad x_3 \approx 2.65 .$$

**(c)** Compare production $P(x) = 6x^2/(1+x^2) + 0.05$ with decay $D(x) = 2x$ inside each interval: at $x = 0.1$, $P = 0.109 < D = 0.2$ (falls to $x_1$); at $x = 1$, $P = 3.05 > D = 2$ (rises to $x_3$); at $x = 4$, $P = 5.70 < D = 8$ (falls to $x_3$).

$$x_1 \approx 0.027 \ (\textbf{stable}), \qquad x_2 \approx 0.346 \ (\textbf{unstable}), \qquad x_3 \approx 2.65 \ (\textbf{stable}).$$

Biologically: the low stable state is **G1 with E2F sequestered by Rb** — quiescent, still dependent on external growth factor. The high stable state is **past the restriction point** — E2F free, S-phase genes on, committed to divide whether or not the growth factor remains. The unstable root is the **threshold** itself: not a state any cell occupies, but the dividing line between two that it does.

</details>

## Connections

- **Backward:** [2.4](02-04-circuits-feedback-adaptation.md) built the bistable switch and the relaxation oscillator abstractly; this lesson is the cell's implementation of both, and [general-biology 2.4](../../general-biology/lessons/02-04-the-cell-cycle.md) supplied the phases the oscillator moves through.
- **Forward:** [3.2](03-02-dna-damage-response.md) shows how damage signalling injects a CDK inhibitor into this engine to stop it; [3.4](03-04-cancer-failure-of-control.md) catalogues what happens when the switch's components mutate.
- **Sideways:** the saddle-node annihilation of the OFF state is [dynamical-systems 3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md), and the fast–slow relaxation structure is [dynamical-systems 2.3](../../dynamical-systems/lessons/02-03-limit-cycles.md) — the cell cycle is one of the cleanest biological examples of both.
