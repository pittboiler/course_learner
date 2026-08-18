# Biophysics · Lesson 4.5: Excitable membranes and the action potential

> ⏱ ~15 min · Module 4: Motors, kinetics, and membrane potentials · Builds on: [4.4 Membrane potentials: Nernst and Goldman](04-04-membrane-potentials-nernst-goldman.md), [2.2 The Boltzmann distribution and two-state systems](02-02-boltzmann-two-state.md) · Unlocks: [4.6 Single-molecule statistical inference](04-06-single-molecule-inference.md)

## Why this matters

A neuron is a wire that would fail as a wire. Back in [Boss problem 1](../syllabus.md) you found that a signal diffusing down a 1 m axon would take *years* — passive spread leaks and smears out over a millimeter. Yet a pain signal reaches your brain in tens of milliseconds. The trick is that nerve and muscle are **excitable**: nudge the membrane past a **threshold** and it fires an **action potential** — a stereotyped, all-or-nothing voltage spike of about 100 mV lasting roughly 1 ms — and then *regenerates* that spike at every point down the axon, so it never decays. This lesson explains the machinery, and the payoff is that its heart is a formula you already own: the two-state Boltzmann switch of [2.2](02-02-boltzmann-two-state.md), now driven by voltage.

## The idea

The membrane sits at rest around $-70$ mV (Goldman, from [4.4](04-04-membrane-potentials-nernst-goldman.md)). Studded in it are **voltage-gated ion channels** — pores whose *open probability depends on the membrane voltage itself*. That feedback is the whole story.

Here is the spike in one breath. A small depolarization cracks open some fast $\mathrm{Na}^+$ channels. $\mathrm{Na}^+$ is far from equilibrium — its Nernst potential $V_{\mathrm{Na}}\approx +60$ mV sits *way* above rest — so it rushes **in**, carrying positive charge that depolarizes the membrane **further**, which opens **more** $\mathrm{Na}^+$ channels. That is a **positive-feedback loop**: more open $\to$ more depolarization $\to$ more open. Below threshold the leak wins and the nudge dies; above threshold the loop runs away and the voltage explodes upward toward $V_{\mathrm{Na}}$. That runaway *is* the all-or-nothing **upstroke**, and the threshold is simply the tipping point where feedback overtakes leak.

It doesn't reach $V_{\mathrm{Na}}$, and it doesn't stay up, for two reasons that kick in a fraction of a millisecond later: the $\mathrm{Na}^+$ channels **inactivate** (a second gate plugs them), and slower **voltage-gated $\mathrm{K}^+$ channels** open. Now $\mathrm{K}^+$ flows **out** toward its Nernst potential $V_{\mathrm{K}}\approx -86$ mV, dragging the voltage back down — the **repolarization** downstroke, often overshooting into a brief hyperpolarized **undershoot**. Finally, while the $\mathrm{Na}^+$ channels are still inactivated, the membrane *cannot* fire again: the **refractory period**. That dead time is a feature — it forces the spike to travel one way down the axon and caps the maximum firing rate.

## The formal version

**Gating is the two-state Boltzmann switch.** A voltage-gated channel is open or closed — exactly the two-state system of [2.2](02-02-boltzmann-two-state.md). Its open probability is that same sigmoid:

$$\boxed{\;P_{\text{open}}(V) = \frac{1}{1 + e^{(V_{1/2}-V)/V_s}}\;}$$

*In words: the fraction of channels open is an S-curve in voltage — half-open at $V=V_{1/2}$, and switching over a width $V_s$.* Here $V_{1/2}$ (mV) is the **half-activation voltage** where $P_{\text{open}}=\tfrac12$, and $V_s$ (mV) is the **slope factor** setting how sharp the switch is. Compare it term-for-term with the [2.2](02-02-boltzmann-two-state.md) occupancy $p = 1/(1+e^{\Delta E/k_BT})$: the energy gap is

$$\Delta E = q_{\text{gate}}\,(V_{1/2}-V),$$

so that $\dfrac{\Delta E}{k_BT} = \dfrac{V_{1/2}-V}{V_s}$ with

$$\boxed{\;V_s = \frac{k_BT}{q_{\text{gate}}}\;}$$

**What sets the gap is voltage acting on the channel's gating charge.** The voltage sensor carries charged residues — the **gating charge** $q_{\text{gate}} = z\,e$, where $z$ is the number of elementary charges $e$ that move across the membrane field when the channel opens. Depolarizing (raising $V$) does electrical work on those charges, lowering the open state's energy: $\Delta E$ tilts, and you slide up the sigmoid. *In words: the membrane voltage is the knob that tilts the two-state gap, exactly the "master move" of [2.2](02-02-boltzmann-two-state.md) — here the knob is $V$ instead of ligand concentration.*

Because $V_s = k_BT/(ze)$, using $k_BT/e \approx 26$ mV at body temperature,

$$V_s \approx \frac{26\ \text{mV}}{z}.$$

*In words: a **steeper** gating curve means **more** gating charge — fewer millivolts are needed to flip the channel.* Real $\mathrm{Na}^+$/$\mathrm{K}^+$ channels have effective $z\sim 4$–$12$, so $V_s\sim$ a few mV: a sharp switch.

**The Hodgkin–Huxley loop (qualitative).** No ODEs — just the causal chain and which Nernst potential drives each phase.

1. **Upstroke.** Depolarization $\uparrow V$ $\to$ $P_{\text{open}}^{\mathrm{Na}}\uparrow$ $\to$ $\mathrm{Na}^+$ current inward (toward $V_{\mathrm{Na}}\approx+60$) $\to$ more depolarization. Regenerative; runs away past threshold.
2. **Repolarization.** $\mathrm{Na}^+$ channels **inactivate**; slower $\mathrm{K}^+$ channels open $\to$ $\mathrm{K}^+$ current outward (toward $V_{\mathrm{K}}\approx-86$) $\to$ voltage falls, undershooting toward $V_{\mathrm{K}}$.
3. **Refractory period.** $\mathrm{Na}^+$ inactivation persists briefly $\to$ no new spike can start $\to$ one-way propagation and a ceiling on firing rate.

**Propagation.** Each patch's spike depolarizes its neighbor past threshold, which fires its own spike, and so on — an **active**, self-renewing wave, not passive diffusion. This is why the axon of [Boss 1](../syllabus.md)'s meter-long neuron can signal at all: it pays ATP (via the $\mathrm{Na}^+$/$\mathrm{K}^+$ pump that keeps the gradients charged) to regenerate the signal rather than let it leak away.

## Picture

![Action-potential trace V(t): resting at −70 mV, a threshold crossing, a sharp coral Na⁺ upstroke toward V_Na ≈ +60 mV, a blue K⁺ repolarization downstroke toward V_K ≈ −86 mV, a hyperpolarizing undershoot, and a marked refractory period; inset shows the two-state gating sigmoid P_open(V) with its midpoint V₁/₂ and slope set by 1/V_s](assets/04-05-fig1.svg)

## Worked examples

**Example 1 ($P_{\text{open}}$ shifts with voltage).** Take a $\mathrm{Na}^+$ channel with $V_{1/2}=-40$ mV and $V_s=7$ mV. At rest ($V=-70$ mV):

$$\frac{V_{1/2}-V}{V_s} = \frac{-40-(-70)}{7} = \frac{30}{7} = 4.29,\qquad P_{\text{open}} = \frac{1}{1+e^{4.29}} = \frac{1}{1+73} \approx 0.014.$$

Only about **1% open** — the membrane is quiet. Now depolarize to $V=-20$ mV:

$$\frac{-40-(-20)}{7} = \frac{-20}{7} = -2.86,\qquad P_{\text{open}} = \frac{1}{1+e^{-2.86}} = \frac{1}{1+0.057} \approx 0.95.$$

A **50 mV** depolarization swung the channel from 1% to **95% open**. That steep swing, feeding inward $\mathrm{Na}^+$ current, is exactly the fuel for the runaway upstroke.

**Example 2 ($V_s$ from gating charge).** Suppose measuring the curve gives $V_s = 6.5$ mV. How many gating charges move? From $V_s = 26\ \text{mV}/z$,

$$z = \frac{26\ \text{mV}}{V_s} = \frac{26}{6.5} = 4.$$

Four elementary charges cross the field per channel. Sharper switching needs more charge: halve $V_s$ to $3.25$ mV and you need $z=8$. This is the voltage-world version of a cooperative binding curve — in [2.4](02-04-cooperativity-allostery.md) a Hill coefficient $n$ sharpened the ligand sigmoid; here the gating charge $z$ sharpens the voltage sigmoid. Same S-curve, sharpened by moving more "units" together.

**Example 3 (tracing the spike — which potential drives each phase).** Read the figure left to right:

- **Rest ($-70$ mV):** Goldman balance, dominated by $\mathrm{K}^+$ leak, so $V$ sits near (but above) $V_{\mathrm{K}}$.
- **Upstroke:** $\mathrm{Na}^+$ conductance dominates, so $V$ is dragged toward $V_{\mathrm{Na}}\approx+60$ mV. It stops short (~$+40$ mV) because $\mathrm{Na}^+$ inactivation and $\mathrm{K}^+$ opening arrive before equilibrium.
- **Downstroke and undershoot:** $\mathrm{K}^+$ conductance dominates, so $V$ heads toward $V_{\mathrm{K}}\approx-86$ mV, briefly dipping below rest.
- **Recovery:** $\mathrm{K}^+$ channels close, inactivation lifts, Goldman balance returns to $-70$ mV.

The spike is a controlled hand-off of dominance from the $\mathrm{Na}^+$ battery to the $\mathrm{K}^+$ battery and back — each "battery" being a Nernst potential from [4.4](04-04-membrane-potentials-nernst-goldman.md).

## Watch out

- **You might think the voltage reaches $V_{\mathrm{Na}}$ at the peak.** It doesn't — it only heads *toward* $+60$ mV. Inactivation and $\mathrm{K}^+$ opening cut the upstroke off near $+40$ mV. The Nernst potentials are the *targets* current pulls toward, never the actual settling points during a spike.
- **You might read "all-or-nothing" as "the channels are digital."** Each channel is a probabilistic two-state switch with a smooth $P_{\text{open}}(V)$. All-or-nothing is a *network* property: positive feedback among many channels makes the *population* response a runaway, even though each pore is soft.
- **You might think the refractory period is a bug.** It's what makes the axon a one-way street: the patch behind the spike is still inactivated and can't be re-triggered, so the wave only moves forward — and the recovery time sets the maximum firing rate.

## One-liner

> A voltage-gated channel is the [2.2](02-02-boltzmann-two-state.md) two-state switch with $\Delta E = q_{\text{gate}}(V_{1/2}-V)$; wire enough of them into $\mathrm{Na}^+$ positive feedback and you get an all-or-nothing spike toward $V_{\mathrm{Na}}$, cut off by $\mathrm{K}^+$ pulling back toward $V_{\mathrm{K}}$.

## Problems

**P1 (🟢)** A voltage-gated $\mathrm{K}^+$ channel has $V_{1/2}=-25$ mV and slope factor $V_s=10$ mV. Compute $P_{\text{open}}$ at $V=-25$ mV, at rest $V=-70$ mV, and at the spike peak $V=+5$ mV. In one sentence, say why this channel is well-suited to *repolarize* rather than to trigger the spike. *(Check: your three values should increase with $V$ and bracket $\tfrac12$.)*

**P2 (🟡)** (a) A gating curve is measured to switch with slope factor $V_s = 4$ mV at body temperature ($k_BT/e\approx26$ mV). How many elementary gating charges $z$ move across the field? (b) A mutation removes two of those charges. What is the new $V_s$, and is the channel now a sharper or softer voltage sensor? *(Check: $z$ should be a small integer of order a handful; fewer charges $\Rightarrow$ larger $V_s$.)*

**P3 (🔴, optional)** During the upstroke the membrane is heading toward $V_{\mathrm{Na}}\approx+60$ mV, and during repolarization toward $V_{\mathrm{K}}\approx-86$ mV. (a) Explain, using the positive-feedback loop, why there is a sharp *threshold* rather than a graded response. (b) The undershoot dips *below* the resting $-70$ mV but not below $-86$ mV. Which ion's Nernst potential sets that floor, and why can't the membrane pass it? *(Check: identify the dominant conductance in each phase and the battery it pulls toward.)*

<details>
<summary>Solutions</summary>

**P1** Use $P_{\text{open}} = 1/\big(1+e^{(V_{1/2}-V)/V_s}\big)$ with $V_{1/2}=-25$, $V_s=10$.

- $V=-25$: exponent $=0$, so $P_{\text{open}} = 1/(1+1) = \mathbf{0.5}$.
- $V=-70$: exponent $=(-25+70)/10 = 4.5$, so $P_{\text{open}} = 1/(1+e^{4.5}) = 1/(1+90) \approx \mathbf{0.011}$ (~1%).
- $V=+5$: exponent $=(-25-5)/10 = -3.0$, so $P_{\text{open}} = 1/(1+e^{-3}) = 1/(1+0.050) \approx \mathbf{0.95}$ (~95%).

It is nearly shut at rest (won't fire the spike) but opens only *after* the membrane has already depolarized to the peak — so its outward $\mathrm{K}^+$ current arrives late, perfectly timed to pull the voltage back down. It repolarizes.

*Check.* Values $0.011 < 0.5 < 0.95$ increase with $V$ and bracket $\tfrac12$ at $V_{1/2}$, as a gating sigmoid must. ✓

**P2** (a) $V_s = (k_BT/e)/z = 26\ \text{mV}/z$, so

$$z = \frac{26\ \text{mV}}{V_s} = \frac{26}{4} = 6.5 \approx \mathbf{6}\text{–}7\ \text{charges}.$$

(b) Removing two charges gives $z' \approx 4.5$, so

$$V_s' = \frac{26}{4.5} \approx \mathbf{5.8\ mV}.$$

Larger $V_s$ means a **softer** (shallower) voltage sensor — it now takes more millivolts to switch, so the channel responds less sharply to voltage.

*Check.* $z$ is a small handful, matching real voltage sensors ($z\sim4$–$12$); and $V_s \propto 1/z$, so fewer charges $\Rightarrow$ larger $V_s \Rightarrow$ softer switch. ✓

**P3** (a) Below threshold, a small depolarization opens a few $\mathrm{Na}^+$ channels, but the leak (mostly $\mathrm{K}^+$) removes charge faster than the trickle of $\mathrm{Na}^+$ adds it, so the perturbation decays. At threshold the inward $\mathrm{Na}^+$ current just balances the leak; one hair more and the loop *depolarize $\to$ open more $\mathrm{Na}^+$ $\to$ more inward current $\to$ depolarize* becomes self-amplifying and runs away to the peak. Because the outcome flips qualitatively at the balance point, the response is all-or-nothing, not graded.

(b) The floor is set by $V_{\mathrm{K}}\approx-86$ mV, the $\mathrm{K}^+$ Nernst potential. During repolarization $\mathrm{K}^+$ conductance dominates, so the membrane is pulled toward $V_{\mathrm{K}}$. It cannot pass $V_{\mathrm{K}}$: at $V=V_{\mathrm{K}}$ the net $\mathrm{K}^+$ driving force is zero (electrical and diffusive forces balance — the definition of the Nernst potential), so there is no current to push it further. The membrane can only *approach* $V_{\mathrm{K}}$ from above.

*Check.* Upstroke = $\mathrm{Na}^+$-dominated, target $V_{\mathrm{Na}}$; downstroke/undershoot = $\mathrm{K}^+$-dominated, target $V_{\mathrm{K}}$. A conductance can only drag $V$ toward its own battery, never past it. ✓

</details>

## Flashback

**From Lesson 4.4 (Membrane potentials: Nernst and Goldman):** The $\mathrm{Na}^+$ concentrations across a neuron's membrane are $[\mathrm{Na}^+]_{\text{out}} = 145$ mM and $[\mathrm{Na}^+]_{\text{in}} = 15$ mM. Using $k_BT/e \approx 26$ mV at body temperature, compute the $\mathrm{Na}^+$ Nernst potential $V_{\mathrm{Na}}$, and say in one sentence why this number is the target of the action-potential upstroke.

<details>
<summary>Solution</summary>

The Nernst potential for a $+1$ ion is $V_{\mathrm{Na}} = \dfrac{k_BT}{e}\ln\dfrac{[\mathrm{Na}^+]_{\text{out}}}{[\mathrm{Na}^+]_{\text{in}}}$:

$$V_{\mathrm{Na}} = (26\ \text{mV})\,\ln\frac{145}{15} = (26)\,\ln(9.67) = 26 \times 2.27 \approx \mathbf{+59\ mV}.$$

During the upstroke, $\mathrm{Na}^+$ conductance dominates, so the membrane voltage is driven toward this $\mathrm{Na}^+$ battery — that is why the spike shoots up toward roughly $+60$ mV (stopping short only because inactivation and $\mathrm{K}^+$ intervene).

*Check.* $\mathrm{Na}^+$ is more concentrated outside, so the equilibrium voltage is positive (pulling $+$ charge in) — sign correct, and $+59$ mV matches the textbook $V_{\mathrm{Na}}\approx+60$ mV. ✓

</details>

## Connections

- **Backward:** the gating curve $P_{\text{open}}(V)$ *is* the two-state Boltzmann occupancy of [2.2](02-02-boltzmann-two-state.md), with the gap $\Delta E = q_{\text{gate}}(V_{1/2}-V)$ set by voltage instead of a ligand; and the phase-by-phase targets $V_{\mathrm{Na}}$, $V_{\mathrm{K}}$ are the Nernst potentials of [4.4](04-04-membrane-potentials-nernst-goldman.md). The slope factor $V_s = k_BT/q_{\text{gate}}$ is the direct analogue of the Hill-sharpened binding curves of [2.4](02-04-cooperativity-allostery.md).
- **Forward:** [4.6 Single-molecule statistical inference](04-06-single-molecule-inference.md) takes a *single* channel's flickering open/closed record and extracts its rates and $P_{\text{open}}$ by maximum likelihood — putting an error bar on the sigmoid this lesson drew smoothly.
- **Sideways:** this is the physics entry point to the [`neuroscience` syllabus](../../neuroscience/syllabus.md), where the Hodgkin–Huxley ODEs, cable theory, and synaptic integration build directly on this qualitative picture; and it closes [Boss problem 1](../syllabus.md)'s puzzle — the axon fires actively precisely because passive diffusion is far too slow over a meter.
