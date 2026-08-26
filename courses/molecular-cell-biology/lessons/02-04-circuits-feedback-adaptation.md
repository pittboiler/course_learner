# Molecular & Cell Biology · Lesson 2.4: Circuits — feedback, adaptation & crosstalk

> ⏱ ~15 min · Module 2: Signalling — How a Cell Decides · Builds on: [2.3](02-03-kinase-cascades-switch.md), [2.2](02-02-second-messengers-amplification.md) · Unlocks: 3.1 (the cell-cycle engine)

## Why this matters

Everything so far has been a chain: ligand in at the top, response out at the bottom. Real pathways are not chains. They are **circuits** — the output loops back and changes the input — and once you close a loop the system acquires behaviours that no chain has: it can ignore a constant signal, remember a transient one, oscillate, or refuse to respond until a threshold is crossed.

This is also where cell biology stops being a list of molecules and starts being engineering. The same handful of wiring motifs appear in bacteria, in your immune system, and in a thermostat, and they behave the same way in all three because **behaviour follows from topology, not from chemistry.**

## The idea

**Negative feedback: output inhibits its own production.** Four consequences, all worth knowing:

- **Stability.** Perturbations are corrected. The steady state is robust to changes in component levels.
- **Speed.** Counterintuitively, a negatively-fed-back system reaches its (lower) steady state *faster*, because the effective decay rate is larger.
- **Linearization.** The steep, ultrasensitive response of [2.3](02-03-kinase-cascades-switch.md) is flattened back into a usable dynamic range. Feedback and ultrasensitivity are antagonists, and cells use both to place the response where they want it.
- **Adaptation**, if the feedback is *slow* relative to the response: the system spikes, then returns to baseline even though the stimulus persists.

**Positive feedback: output promotes its own production.** With enough gain, this gives **bistability** — two stable states with an unstable threshold between them. The system will sit in either, and a transient push past the threshold flips it permanently. **Positive feedback is how a cell converts a passing signal into a lasting decision**, and it is the mechanism behind the restriction point ([3.1](03-01-cell-cycle-engine-irreversibility.md)), apoptotic commitment ([3.2](03-02-dna-damage-response.md)), and stable cell identity ([4.5](04-05-stem-cells-differentiation-reprogramming.md)).

**Hysteresis is bistability's fingerprint.** In a bistable system, the input level at which the switch turns *on* is higher than the level at which it turns *off*. The state depends on history, not just on the current input — which is exactly what "memory" means for a molecular circuit, and how you experimentally distinguish true bistability from a merely steep response.

**Adaptation: why you stop smelling your own kitchen.** A cell that responds to *absolute* concentration saturates and is then blind. A cell that responds to *change* stays sensitive across many orders of magnitude. Adaptation is implemented by either a slow negative feedback (the response builds its own inhibitor) or an **incoherent feedforward loop** — the input both activates the output and, on a delay, activates a repressor of it.

**Crosstalk is what specificity has to defeat.** Pathways share components. Scaffolds ([2.3](02-03-kinase-cascades-switch.md)), compartmentalization, and combinatorial requirements at the target promoter all serve to keep signals apart — and where crosstalk is *deliberate*, it is how a cell integrates several inputs into one decision (T cells requiring two independent signals before activating is the canonical example, and the reason autoimmunity is rarer than it might be).

## The formal version

**A negative-feedback module.** Let $x$ be the output, produced at rate $\alpha$ in proportion to the input $u$, degraded at rate $\beta$, and inhibited by its own product with strength $k$:

$$\frac{dx}{dt} = \frac{\alpha u}{1 + k x} - \beta x .$$

For strong feedback ($kx \gg 1$) the steady state is

$$x_{ss} \approx \sqrt{\frac{\alpha u}{\beta k}} \;\propto\; \sqrt{u},$$

*in words: strong negative feedback compresses the response — a hundredfold change in input becomes a tenfold change in output.* That compression is the price of the robustness, and it is why an ultrasensitive step is often placed *inside* a feedback loop: the two effects partially cancel and leave a wide, well-behaved dynamic range.

**A bistable module.** Positive feedback with a cooperative (Hill) form:

$$\frac{dx}{dt} = \underbrace{\alpha \frac{x^{n}}{K^{n} + x^{n}} + b}_{\text{production, self-promoting}} \;-\; \underbrace{\beta x}_{\text{decay}} .$$

Steady states are where the sigmoid production curve crosses the straight decay line. Geometry does the rest:

- $n = 1$: the curves cross **once** — one stable state, no switch.
- $n \ge 2$ with suitable $\alpha, \beta$: they cross **three** times — a low stable state, an unstable middle, and a high stable state.

*In words: bistability needs a production curve that rises faster than linearly somewhere, which is precisely what ultrasensitivity supplies.* This is why [2.3](02-03-kinase-cascades-switch.md) had to come first — **ultrasensitivity is the raw material and positive feedback is the construction.**

**Perfect adaptation via an incoherent feedforward loop.** Input $u$ activates output $x$ and also activates a repressor $y$:

$$\frac{dy}{dt} = \gamma u - \delta y, \qquad x \;\propto\; \frac{u}{y}.$$

At steady state $y_{ss} = \gamma u/\delta$, so $x_{ss} \propto u/(\gamma u/\delta) = \delta/\gamma$ — **independent of $u$ entirely**. A step change in $u$ produces a transient spike in $x$ (because $y$ lags) followed by exact return to the same baseline.

*In words: divide the signal by a delayed copy of itself and what survives is the change, not the level.* This is a differentiator built from two production reactions, and it is how bacterial chemotaxis, photoreceptor light adaptation, and your sense of smell all work.

## Picture

![Three circuit motifs with their time courses. Top: negative feedback, showing a step input producing an output that rises and settles at a compressed, stable level, and a note that response speed increases. Middle: positive feedback, showing the sigmoid production curve crossing the linear decay line three times, with the low and high crossings marked stable and the middle one unstable, plus a hysteresis loop of output against input where the on-threshold lies to the right of the off-threshold. Bottom: an incoherent feedforward loop in which input activates both the output and, on a delay, a repressor of the output, producing a transient spike that returns to baseline despite a sustained input.](assets/02-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — count the steady states).** A self-activating protein has

$$\frac{dx}{dt} = 5\,\frac{x^{2}}{1 + x^{2}} + 0.05 - 2x .$$

Find the steady states and classify them.

Set production equal to decay and clear the denominator:

$$5x^{2} + 0.05(1 + x^{2}) = 2x(1 + x^{2}) \;\Longrightarrow\; 2x^{3} - 5.05x^{2} + 2x - 0.05 = 0 .$$

Evaluate $f(x) = 2x^{3} - 5.05x^{2} + 2x - 0.05$ and watch the signs:

| $x$ | 0 | 0.03 | 0.4 | 0.5 | 2 | 2.1 |
|---|---|---|---|---|---|---|
| $f(x)$ | $-0.050$ | $+0.006$ | $+0.070$ | $-0.063$ | $-0.250$ | $+0.402$ |

Three sign changes, so **three positive steady states**, at

$$x_1 \approx 0.027, \qquad x_2 \approx 0.457, \qquad x_3 \approx 2.04 .$$

**Classify them geometrically.** Production $P(x) = 5x^2/(1+x^2) + 0.05$ against decay $D(x) = 2x$; a root is stable when $P$ crosses $D$ from *above* (so $P - D$ goes positive to negative). Check a point in each interval:

| $x$ | $P(x)$ | $D(x)$ | sign of $\dot x$ | pushes toward |
|---|---|---|---|---|
| 0.1 | 0.099 | 0.20 | $-$ | $x_1$ |
| 1.0 | 2.55 | 2.00 | $+$ | $x_3$ |
| 3.0 | 4.55 | 6.00 | $-$ | $x_3$ |

$$x_1 \approx 0.027 \ (\textbf{stable, OFF}), \qquad x_2 \approx 0.457 \ (\textbf{unstable — the threshold}), \qquad x_3 \approx 2.04 \ (\textbf{stable, ON}).$$

**Now check that the Hill exponent was load-bearing.** Replace $x^2/(1+x^2)$ with $x/(1+x)$ — same shape family, $n = 1$ — and the steady-state equation becomes

$$2x^{2} - 3.05x - 0.05 = 0 \;\Longrightarrow\; x = 1.54 \ \text{(one positive root)} .$$

**One state, no switch.** The $n \ge 2$ requirement is not a technicality: a production curve that rises only linearly can cross a line once, and once is not a decision. This is exactly why the ultrasensitivity of [2.3](02-03-kinase-cascades-switch.md) had to be built before feedback could make a switch out of it.

**Example 2 (why you'd care — transient versus sustained ERK, and why the same signal builds different cells).** In PC12 cells, epidermal growth factor produces a *transient* ERK pulse and the cells proliferate; nerve growth factor produces *sustained* ERK activation and the cells differentiate into neurons. Same kinase, same substrate list, opposite fates. Explain the mechanism and why duration, rather than amplitude, carries the message.

The EGF receptor is rapidly internalized and degraded, and it engages a fast negative-feedback phosphatase; the NGF receptor is retained (in part signalling from endosomes) and engages positive feedback through PKC. So the two ligands differ mainly in the **circuit** they close around the same cascade, and therefore in the *shape* of the ERK time course.

Duration carries the message because the downstream readers are slow. The transcription factor c-Fos is only stabilized when it is itself phosphorylated by ERK, and it must first be *synthesized* — which takes tens of minutes. A transient ERK pulse is over before enough c-Fos exists to be stabilized, so c-Fos is made and immediately degraded. Sustained ERK is still active when c-Fos appears, phosphorylates it, stabilizes it, and c-Fos accumulates and drives the differentiation program.

**This is a coincidence detector built from a delay.** The cell asks "is ERK still on *when the protein arrives*?" — and the answer is a yes-or-no read on signal *duration* from machinery that measures no time at all. The general principle: **to decode duration, put a slow step downstream of a fast one.** It also explains the [2.3](02-03-kinase-cascades-switch.md) result that a BRAF mutation is so transforming — it produces *sustained* signalling with no possibility of a transient, and the cell's fate machinery has no way to read that as anything but a permanent instruction.

## Watch out

- **You might think negative feedback slows a system down.** It speeds up the *approach to steady state* (the effective decay rate rises) while lowering the steady state itself. Slowness comes from *delay* in the loop, not from negativity — and delay plus negative feedback gives oscillation, not stability.
- **You might read a steep dose–response as bistability.** Steepness is not memory. The test is **hysteresis**: sweep the input up, then down, and see whether the switch turns off at a lower input than it turned on at. Only then is there a stable second state.
- **You might expect adaptation to mean the signal was ignored.** The response *happened* — a spike — and then the baseline was restored. The system reported the change and threw away the level, which is usually what you want.
- **You might treat crosstalk as noise.** Sometimes it is deliberate integration. Requiring two independent pathways to fire before committing is a cheap way to raise specificity, at the cost of sensitivity — the same trade a two-key launch system makes.

## One-liner

> Close a loop and the pathway acquires a new verb: negative feedback stabilizes and adapts, positive feedback remembers, and a delay in either turns a signal's duration into information the cell can read.

## Problems

**P1 (🟢)** A system obeys $dx/dt = \alpha u/(1+kx) - \beta x$ with strong feedback. (a) Show the steady state scales as $\sqrt{u}$. (b) By what factor does the output change when the input increases 100-fold? (c) State in one sentence what the cell gains and loses by this.

**P2 (🟡)** For $dx/dt = 8x^{2}/(1 + x^{2}) + 0.05 - 2x$: (a) Write the steady-state polynomial. (b) Show by evaluating the cubic at $x = 0.05,\ 0.5,\ 1,\ 3,\ 4$ that there are three positive roots, and bracket each. (c) Which are stable? (d) The cell degrades $x$ faster, raising the decay coefficient from 2 to 5. Show that the switch is destroyed, and say which state survives.

**P3 (🔴, bridges to 3.1 and to dynamical-systems)** A circuit has a protein $x$ that activates itself with Hill coefficient 4 and also, on a slower timescale, activates its own repressor $y$: $\dot x = f(x) - \beta x - \gamma xy$, $\dot y = \epsilon(x - y)$ with $\epsilon \ll 1$. (a) With $\epsilon = 0$ (no repressor dynamics), what behaviour does the $x$ system show? (b) Argue qualitatively what happens as $\epsilon$ becomes small but nonzero, and name the resulting dynamic behaviour. (c) Identify one cell-biological process built exactly this way, and explain what would go wrong if the repressor arm were lost.

<details>
<summary>Solutions</summary>

**P1 (a)** At steady state $\alpha u/(1+kx) = \beta x$. With $kx \gg 1$, $1 + kx \approx kx$, so

$$\frac{\alpha u}{k x} = \beta x \;\Longrightarrow\; x^{2} = \frac{\alpha u}{\beta k} \;\Longrightarrow\; x_{ss} = \sqrt{\frac{\alpha u}{\beta k}} \propto \sqrt{u}.$$

**(b)** $$\sqrt{100} = \mathbf{10\text{-fold}}.$$

**(c)** The cell gains a wide, robust dynamic range — it can report inputs spanning two decades without saturating, and the output is insensitive to changes in $\alpha$ or $k$ — at the cost of resolution, since a doubling of input now produces only a 1.4-fold change in output.

**P2 (a)** Set $8x^2/(1+x^2) + 0.05 = 2x$ and multiply by $(1+x^2)$:

$$8x^{2} + 0.05 + 0.05x^{2} = 2x + 2x^{3} \;\Longrightarrow\; 2x^{3} - 8.05x^{2} + 2x - 0.05 = 0.$$

**(b)** Let $g(x) = 2x^3 - 8.05x^2 + 2x - 0.05$:

| $x$ | 0.05 | 0.5 | 1 | 3 | 4 |
|---|---|---|---|---|---|
| $g(x)$ | $2(1.25\times10^{-4}) - 8.05(0.0025) + 0.1 - 0.05 = +0.030$ | $0.25 - 2.013 + 1 - 0.05 = -0.813$ | $2 - 8.05 + 2 - 0.05 = -4.10$ | $54 - 72.45 + 6 - 0.05 = -12.5$ | $128 - 128.8 + 8 - 0.05 = +7.15$ |

Also $g(0) = -0.05 < 0$. So sign changes occur between $0$ and $0.05$ (root near **0.028**), between $0.05$ and $0.5$ (root near **0.236**), and between 3 and 4 (root near **3.76**). Three positive roots.

**(c)** Production crosses decay from above at the outer two, from below at the middle: $x \approx 0.028$ **stable (OFF)**, $x \approx 0.236$ **unstable (threshold)**, $x \approx 3.76$ **stable (ON)**.

**(d)** With decay $5x$: $8x^2/(1+x^2) + 0.05 = 5x$ gives

$$5x^{3} - 8.05x^{2} + 5x - 0.05 = 0.$$

Evaluate $h(x) = 5x^3 - 8.05x^2 + 5x - 0.05$: $h(0) = -0.05$, $h(0.02) = +0.047$, $h(0.5) = 0.625 - 2.013 + 2.5 - 0.05 = +1.06$, $h(1) = 5 - 8.05 + 5 - 0.05 = +1.90$, $h(2) = 40 - 32.2 + 10 - 0.05 = +17.75$. Only **one** sign change (near $x \approx 0.010$), so a single positive root: the switch is gone.

**Which survives:** the **OFF state**. Raising decay tilts the straight line up until it no longer intersects the sigmoid's plateau — the ON state is annihilated in a saddle-node bifurcation ([dynamical-systems 3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md)). This is precisely how a cell dismantles a commitment: it does not need to reverse the switch, only to raise the degradation rate past the point where the ON state exists.

**P3 (a)** With $\epsilon = 0$, $y$ is frozen and the $x$ equation is a self-activating system with $n = 4$ against linear decay — three steady states, so **bistability with hysteresis**: a transient input past threshold flips $x$ permanently ON.

**(b)** With small $\epsilon > 0$, $y$ slowly accumulates whenever $x$ is high. The extra $-\gamma x y$ term progressively raises the effective decay, tilting the decay line up until the ON state is destroyed (exactly the P2(d) mechanism) — and $x$ falls to OFF. Then $y$ slowly decays, the ON state reappears, and $x$ jumps back up. The result is a **relaxation oscillator**: fast switching between two states, with the period set by the slow variable $y$. This is the classic fast–slow structure of [dynamical-systems 2.3](../../dynamical-systems/lessons/02-03-limit-cycles.md).

**(c)** The **cell cycle** is built this way. Cyclin–CDK activates itself through positive feedback (a bistable jump into mitosis, [3.1](03-01-cell-cycle-engine-irreversibility.md)) and simultaneously, on a delay, activates the APC/C, which destroys cyclin — the slow repressor arm. Lose the repressor and the cell would enter mitosis and **stay there**: high CDK activity with no route back, chromosomes condensed, no cytokinesis, no next cycle. The oscillation is not a byproduct of the switch; it is the switch plus a delayed brake, and both are required for the cycle to be a *cycle* rather than a one-way trip.

</details>

## Flashback

**From Lesson 2.3 (composing Hill coefficients):** A four-layer cascade has per-layer Hill coefficients 1.5, 1.5, 2.0, and 1.2. (a) Estimate $n_{\text{eff}}$. (b) Compute the 10-to-90 fold-span. (c) A drug removes the third layer entirely, connecting layer 2 directly to layer 4. Recompute $n_{\text{eff}}$ and the span, and say in one sentence what the cell has lost besides amplification.

<details>
<summary>Solution</summary>

**(a)** $$n_{\text{eff}} \approx 1.5 \times 1.5 \times 2.0 \times 1.2 = \mathbf{5.4}.$$

**(b)** $$81^{1/5.4} = e^{4.394/5.4} = e^{0.814} = \mathbf{2.26\text{-fold}}.$$

**(c)** Without layer 3: $n_{\text{eff}} \approx 1.5 \times 1.5 \times 1.2 = 2.7$, and the span becomes

$$81^{1/2.7} = e^{4.394/2.7} = e^{1.627} = \mathbf{5.1\text{-fold}}.$$

Besides amplification, the cell has lost **decisiveness** — the response is now more than twice as gradual, so inputs that should have produced a clean all-or-none answer produce intermediate outputs instead. It has also lost a **regulatory node**: each layer is a place where feedback, a phosphatase, or a scaffold can act, and removing one removes a control point as well as a multiplier.

</details>

## Connections

- **Backward:** [2.3](02-03-kinase-cascades-switch.md) supplied the ultrasensitivity that positive feedback needs in order to produce bistability; without $n > 1$ there is no switch to build.
- **Forward:** [3.1](03-01-cell-cycle-engine-irreversibility.md) is this lesson applied — the restriction point is a bistable switch and the cycle itself is a relaxation oscillator; [4.5](04-05-stem-cells-differentiation-reprogramming.md) uses the same construction for stable cell identity.
- **Sideways:** the steady-state geometry, saddle-node bifurcation, and relaxation oscillation are all developed formally in [dynamical-systems](../../dynamical-systems/syllabus.md) 1.3, 3.1 and 2.3 — this lesson is that mathematics with molecules attached, and the incoherent feedforward loop is a differentiator in the sense of [signals-systems 1.3](../../signals-systems/lessons/01-03-systems-and-properties.md).
