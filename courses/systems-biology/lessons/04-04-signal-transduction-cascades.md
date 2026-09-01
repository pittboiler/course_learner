# Systems Biology · Lesson 4.4: Signal transduction — cascades & ultrasensitivity

> ⏱ ~15 min · Module 4: Metabolic networks, noise & spatial pattern · Builds on: [4.3](04-03-stochastic-gene-expression.md), [1.4](01-04-cooperativity-hill-ultrasensitivity.md), [1.3](01-03-michaelis-menten-qssa.md) · Unlocks: [4.5](04-05-synthetic-biology-pattern-formation.md)

## Why this matters

[molecular-cell-biology 2.3](../../molecular-cell-biology/lessons/02-03-kinase-cascades-switch.md) told you what a kinase cascade *is* — receptor to Raf to MEK to ERK, scaffolds, amplification, a graded input turned into an all-or-none decision. What it could not tell you is **where the steepness comes from**, because the honest answer is a calculation.

[1.4](01-04-cooperativity-hill-ultrasensitivity.md) listed the ways a cell manufactures a switch out of graded parts, and left one blank with a promise: **zero-order ultrasensitivity, deferred to here.** This is that lesson, and the result is the most surprising one in the list.

Here is the claim. Take one protein, no multimers, no allostery, no cooperative binding of any kind, interconverted between two forms by a kinase and a phosphatase. **Run both enzymes in their saturated regime and the fraction modified becomes a step function of the kinase-to-phosphatase ratio, with an effective Hill coefficient of 10, 30, 100 — numbers no cooperative binding site has ever produced.** The steepness comes from nothing but the *operating regime*. Goldbeter and Koshland found this in 1981, and it remains the cleanest demonstration in the course that **a behaviour can live in the dynamics rather than in the molecules** — the claim [1.1](01-01-systems-view-of-the-cell.md) opened with.

## The idea

**The module is a cycle, not a reaction.** A protein $W$ sits in a pool of fixed total size, shuttled back and forth between an unmodified form $W$ and a modified form $W^*$ by two opposing enzymes. Nothing is made and nothing is destroyed — the only state variable is *what fraction of the pool is modified*.

**Now the intuition, which is worth getting before any algebra.** Ask what sets the steady state. It is the balance point where the kinase's conversion rate equals the phosphatase's.

- **If both enzymes are far from saturation** (their Michaelis constants are large compared with the pool), each works at a rate roughly *proportional* to how much of its own substrate is around. That is a self-correcting arrangement: push the pool toward $W^*$ and the phosphatase — now with more substrate — speeds up and pushes back. The balance point moves smoothly, and you get a hyperbola. Boring.

- **If both enzymes are saturated** (Michaelis constants tiny compared with the pool), each runs flat out at $V_{max}$ **regardless of how much substrate it has**, right up until its substrate nearly runs out. There is no self-correction. If the kinase's $V_{max}$ exceeds the phosphatase's by even a hair, the kinase wins outright and drives the pool almost entirely to $W^*$; reverse the inequality and it collapses almost entirely to $W$.

$$\boxed{\;\text{Saturated enzymes have no way to negotiate. Whoever is faster takes the whole pool.}\;}$$

**"Zero-order" is the name of that flatness** — a saturated Michaelis–Menten enzyme has a rate independent of substrate concentration, i.e. zeroth order in its substrate. The switch is not built out of a switch-like part. It is built out of two perfectly ordinary enzymes operated in a regime where their rates stop caring about concentration.

**And that is the conceptual payoff:** ultrasensitivity with a monomeric substrate, no cooperativity, no allosteric transition, no multiple binding sites. [biophysics 2.4](../../biophysics/lessons/02-04-cooperativity-allostery.md) explains how hemoglobin gets a Hill coefficient near 3 by working hard at it. A saturated futile cycle beats that with a single polypeptide.

## The formal version

**The cycle.** Let $W_T$ be the total protein, conserved by the moiety argument of [1.2](01-02-mass-action-rate-odes.md):

$$W + W^* = W_T .$$

*In words: the pool is closed; only its composition changes.* Write both arms with Michaelis–Menten rates from [1.3](01-03-michaelis-menten-qssa.md) — kinase with maximal rate $V_1$ and Michaelis constant $K_1$, phosphatase with $V_2$ and $K_2$:

$$\frac{dW^*}{dt} \;=\; \underbrace{\frac{V_1 W}{K_1 + W}}_{\text{kinase}} \;-\; \underbrace{\frac{V_2 W^*}{K_2 + W^*}}_{\text{phosphatase}} .$$

**Non-dimensionalize** — this is where the structure appears. Let $w^* = W^*/W_T$ be the fraction modified, and define the **normalized Michaelis constants**

$$J_1 = \frac{K_1}{W_T}, \qquad J_2 = \frac{K_2}{W_T},$$

together with the **input**, the kinase-to-phosphatase ratio $\theta = V_1/V_2$. *In words: $J$ measures how far from saturation an enzyme is — $J \gg 1$ means it never saturates, $J \ll 1$ means it is saturated over almost the whole range.* Setting $dW^*/dt = 0$ and dividing by $V_2$:

$$\frac{\theta\,(1-w^*)}{J_1 + 1 - w^*} \;=\; \frac{w^*}{J_2 + w^*} .$$

**Invert it.** This is a quadratic in $w^*$, but you almost never need to solve it, because it is *linear in $\theta$*:

$$\boxed{\;\theta \;=\; \frac{w^*\,\bigl(J_1 + 1 - w^*\bigr)}{\bigl(1 - w^*\bigr)\bigl(J_2 + w^*\bigr)}\;}$$

*In words: pick the output you want, read off the input that produces it.* Every number in this lesson comes from that one line. (Solving the quadratic forward gives the **Goldbeter–Koshland function** $w^* = 2\theta J_2 \big/ \bigl[B + \sqrt{B^2 - 4(1-\theta)\theta J_2}\bigr]$ with $B = 1 - \theta + \theta J_2 + J_1$; it is the same equation rearranged, and it is what you code up, not what you reason with.)

**The two limits.**

- **First order, $J_1, J_2 \gg 1$:** denominators become $J_1$ and $J_2$; with $J_1 = J_2$ this collapses to $w^* = \theta/(1+\theta)$ — a plain hyperbola, Hill coefficient exactly 1.
- **Zero order, $J_1, J_2 \ll 1$:** both denominators become their numerators, the equation reduces to $\theta = 1$, and there is no interior solution at all except at that one point. The steady state is $w^* \approx 0$ for $\theta < 1$ and $w^* \approx 1$ for $\theta > 1$. **A perfect step at $\theta = 1$**, approached as $J \to 0$.

**Quantify the steepness.** Use [1.4](01-04-cooperativity-hill-ultrasensitivity.md)'s definition: the effective Hill coefficient is fixed by the input fold-change needed to move the output from 10 percent to 90 percent,

$$n_H = \frac{\ln 81}{\ln\!\bigl(\theta_{90}/\theta_{10}\bigr)} .$$

With $J_1 = J_2 = J$, the inversion formula gives $\theta_{90} = 9\,(J+0.1)/(J+0.9)$ and $\theta_{10} = 1/\theta_{90}$ — reciprocals, by the symmetry of the cycle. Everything follows:

| $J = K_M/W_T$ | $\theta_{10}$ | $\theta_{90}$ | fold-span | $n_H$ |
|---|---|---|---|---|
| 10 | 0.120 | 8.34 | 69.6 | **1.04** |
| 1 | 0.192 | 5.21 | 27.2 | 1.33 |
| 0.1 | 0.556 | 1.80 | 3.24 | 3.74 |
| 0.02 | 0.852 | 1.174 | 1.38 | **13.7** |
| 0.01 | 0.919 | 1.088 | 1.18 | 26.1 |
| 0.001 | 0.9912 | 1.0089 | 1.018 | **249** |

Expanding $\theta_{90}$ for small $J$ gives the scaling law worth memorizing:

$$\boxed{\;n_H \;\approx\; \frac{9\ln 9}{80\,J} \;=\; \frac{0.25}{J} \;=\; \frac{W_T}{4 K_M}\;}$$

*In words: the effective Hill coefficient is roughly the substrate pool divided by four times the Michaelis constant.* **There is no ceiling.** Cooperative binding caps $n$ at the number of sites; this mechanism buys steepness by lowering $K_M$, and $K_M$ can always go lower.

**What it costs: the sharpness–speed trade.** Linearize the cycle about its steady state. The relaxation rate is

$$\lambda = -\frac{\partial \dot{w}^*}{\partial w^*} = \frac{1}{W_T}\left[\frac{V_1 J_1}{(J_1+1-w^*)^2} + \frac{V_2 J_2}{(J_2+w^*)^2}\right] \;\xrightarrow[\;J \ll 1,\; w^*=1/2\;]{}\; \frac{4J\,(V_1+V_2)}{W_T}.$$

**The relaxation rate falls linearly in $J$ while $n_H$ rises as $1/J$**, so their product is a constant:

$$\boxed{\;n_H \,\lambda \;\approx\; \frac{V_1+V_2}{W_T} \;=\; \frac{1}{\tau_{\text{turnover}}}\;}$$

*In words: a modification cycle can be sharp or fast, and the product is fixed by how quickly the enzymes could turn the pool over at full speed.* This is a real design constraint, and it is exactly the kind of statement [molecular-cell-biology 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md)'s qualitative pass could not make. The mechanism is also **dissipative**: every futile turn of the cycle hydrolyzes an ATP, and the zero-order regime is precisely the regime in which both enzymes run flat out at once. **You pay for the switch in ATP, continuously, at steady state** — the cell-is-never-at-equilibrium point from [1.2](01-02-mass-action-rate-odes.md), now with a price tag.

**Cascades: what actually composes.** Hill coefficients multiplying across layers is a rule of thumb. The exact statement is the chain rule on **logarithmic gains** (the response coefficient of metabolic control analysis):

$$R \;=\; \frac{d\ln x_n}{d\ln x_0} \;=\; \prod_{i=1}^{n} \frac{d\ln x_i}{d\ln x_{i-1}} .$$

*In words: local sensitivities multiply exactly, because sensitivity is a derivative and derivatives compose.* This is the same fact as gains multiplying through blocks in series ([control-systems 1.5](../../control-systems/lessons/01-05-block-diagram-algebra.md)); the biology adds only the constraint that **each layer must be sitting in its own sensitive range**, since a layer already saturated contributes a gain near zero and kills the product.

**Amplification and ultrasensitivity are different quantities**, and a cascade trades them. *Amplification* is gain in absolute molecule number — one active kinase modifies many substrate molecules, and each successive layer of a MAPK cascade is typically present at higher abundance than the one above it, so the flux gain compounds into the thousands. *Ultrasensitivity* is steepness of the **fractional** response, and it needs $K_M \ll W_T$, i.e. an enzyme saturated by its substrate. A cascade can amplify enormously with every layer hyperbolic, or be razor-sharp with almost no number gain.

## Picture

![Three panels. Left: the covalent modification cycle, with inactive W converted to active W-star by a kinase of maximal rate V1 and Michaelis constant K1, and back again by a phosphatase of rate V2 and constant K2, with the total of the two forms conserved. Centre: fraction modified plotted against the kinase-to-phosphatase ratio on a logarithmic axis, with a shallow hyperbolic curve for the unsaturated case where the normalized Michaelis constant is 10, spanning 70-fold with an effective Hill coefficient of 1.0, and a near-vertical curve for the saturated case where it is 0.02, spanning only 1.4-fold with an effective Hill coefficient of 14. Right: a three-layer MAPKKK to MAPKK to MAPK cascade with each layer contributing a factor of 1.7, giving cumulative effective Hill coefficients of 1.7, 2.9 and 4.9, so the 81-fold input span of a single hyperbolic step becomes 2.4-fold.](assets/04-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — the whole lesson in four numbers).** A cycle has $W_T = 10\ \mu\text{M}$ and $K_1 = K_2 = 0.2\ \mu\text{M}$, so $J_1 = J_2 = 0.02$. Compute $w^*$ at $\theta = 0.8$ and at $\theta = 1.2$, and compare with the first-order limit.

Use the quadratic form $(1-\theta)(w^*)^2 - B\,w^* + \theta J_2 = 0$ with $B = 1 - \theta + \theta J_2 + J_1$.

At $\theta = 1.2$: $B = -0.2 + 0.024 + 0.02 = -0.156$, so $-0.2\,(w^*)^2 + 0.156\,w^* + 0.024 = 0$, i.e. $(w^*)^2 - 0.78\,w^* - 0.12 = 0$:

$$w^* = \frac{0.78 + \sqrt{0.6084 + 0.48}}{2} = \frac{0.78 + 1.0433}{2} = \mathbf{0.912}.$$

At $\theta = 0.8$: $B = 0.2 + 0.016 + 0.02 = 0.236$, so $0.2\,(w^*)^2 - 0.236\,w^* + 0.016 = 0$, i.e. $(w^*)^2 - 1.18\,w^* + 0.08 = 0$:

$$w^* = \frac{1.18 - \sqrt{1.3924 - 0.32}}{2} = \frac{1.18 - 1.0356}{2} = \mathbf{0.072}.$$

(Check the first with the inversion formula: $\theta = 0.9116(0.02+0.0884)/[(0.0884)(0.02+0.9116)] = 0.0988/0.0823 = 1.200$ ✓.)

**A 1.5-fold change in the kinase-to-phosphatase ratio drove the pool from 7 percent modified to 91 percent.** In the first-order limit the same input change gives $w^* = 0.8/1.8 = 0.444$ and $1.2/2.2 = 0.545$ — from 44 percent to 55 percent.

$$\text{same input change} \;\longrightarrow\; \underbrace{44\% \to 55\%}_{\text{unsaturated}} \quad\text{or}\quad \underbrace{7\% \to 91\%}_{\text{saturated}}$$

**Identical molecules. Identical wiring. Only the operating regime differs.** That is the callback [1.4](01-04-cooperativity-hill-ultrasensitivity.md) promised: no cooperativity anywhere in this system, and $n_H = 13.7$.

**Example 2 (why you'd care — the MAPK cascade, and where Module 3 walks back in).** The Huang–Ferrell analysis of the three-tier MAPK cascade found each tier contributing a modest steepness — roughly $n_H \approx 1.7$ per layer, from dual phosphorylation plus partial saturation — with the cumulative steepness measured at the terminal layer.

(a) Composed across three layers:

$$n_{\text{eff}} = 1.7^3 = \mathbf{4.9}, \qquad \text{fold-span} = 81^{1/4.913} = e^{4.3944/4.913} = e^{0.8948} = \mathbf{2.4}.$$

**A 2.4-fold change in stimulus takes the output from 10 percent to 90 percent**, where a single Michaelian step would have needed 81-fold. Ferrell and Machleder measured exactly this in *Xenopus* oocytes: individual cells responding all-or-none to progesterone while the population average looked graded — and note that this is the [4.3](04-03-stochastic-gene-expression.md) lesson again, that a population mean can describe nobody.

(b) **Now close a loop.** An ultrasensitive input–output curve is precisely the $n>1$ ingredient every circuit in Module 3 was short of:

| Add to the cascade | What you get | Where it is analysed |
|---|---|---|
| Positive feedback from output to input | Bistability, hysteresis, irreversible commitment | [3.2](03-02-bistability-toggle-switch.md) |
| Delayed negative feedback | Sustained oscillation via a Hopf bifurcation | [3.4](03-04-oscillations-repressilator-hopf.md) |
| Neither | A steep but reversible amplifier | this lesson |

Both are real: the *Xenopus* oocyte maturation switch is a MAPK cascade wrapped in positive feedback, and it is irreversible in exactly the sense [molecular-cell-biology 3.1](../../molecular-cell-biology/lessons/03-01-cell-cycle-engine-irreversibility.md) describes for the cell cycle; Kholodenko showed that the cascade's own negative feedback from ERK to Raf, with the delay supplied by the intermediate layers, is enough to oscillate. **Module 3 supplied the topologies and Module 1 supplied the nonlinearity; this lesson is where they meet.**

(c) **The caveat that keeps modellers honest: sequestration.** The whole derivation assumed $W + W^* = W_T$, i.e. that every molecule is free to be counted. In the zero-order regime the enzymes are saturated, which means a substantial fraction of the pool is *bound in enzyme–substrate complex*, and bound protein neither acts as an output nor is available to the opposing enzyme. Downstream binding partners sequester it further — a load that feeds back on the upstream module, which the synthetic-biology literature calls **retroactivity** ([4.5](04-05-synthetic-biology-pattern-formation.md)). Sequestration systematically **flattens** the predicted ultrasensitivity, and it is the main reason measured $n_H$ values sit around 5 rather than the 25 the naive formula offers.

## Watch out

- **You might think ultrasensitivity requires cooperativity.** It does not require it, does not require multimers, and does not require multiple binding sites. **A single monomeric substrate and two saturated enzymes will do it**, and will beat hemoglobin by a factor of five. Cooperative binding is one mechanism on [1.4](01-04-cooperativity-hill-ultrasensitivity.md)'s list, not the definition.
- **You might read $n_H$ here as counting something.** It counts nothing. As in [1.4](01-04-cooperativity-hill-ultrasensitivity.md), it is a **fitted steepness parameter** — here a continuous function of $K_M/W_T$ that passes through 13.7 and 249 on its way to infinity. A measured $n_H$ of 4.9 in a cascade does not mean five of anything.
- **You might think a steeper switch is strictly better.** $n_H\lambda \approx (V_1+V_2)/W_T$ is fixed: **steepening the response slows it in exact inverse proportion**, because the same flatness of the rate curves that sharpens the steady state also removes the restoring force that drives you to it. Ultrasensitive cycles are sluggish near threshold.
- **You might multiply Hill coefficients across layers without checking.** Gains compose exactly, Hill coefficients only approximately, and **only if every layer is operating in its own sensitive range.** A layer already 95 percent modified has a local gain near zero and collapses the whole product.
- **You might call a steep response a switch.** It is not one. A steep sigmoid is single-valued and reversible; **bistability requires hysteresis**, and proving it takes the up-sweep and down-sweep of [3.2](03-02-bistability-toggle-switch.md), not a steep dose–response curve.

## One-liner

> Saturate both enzymes of a modification cycle and their rates stop depending on substrate, so whichever is faster takes the whole pool — an effective Hill coefficient of about $W_T/4K_M$ with no cooperativity anywhere, paid for in ATP and, exactly inversely, in speed.

## Problems

**P1 (🟢)** A cycle has $W_T = 5\ \mu\text{M}$ and $K_1 = K_2 = 1\ \mu\text{M}$, with the kinase twice as fast as the phosphatase ($\theta = 2$). (a) Compute $J_1, J_2$ and the steady-state fraction modified $w^*$. (b) Compute $w^*$ in the first-order limit. (c) One sentence: is this cycle a switch?

**P2 (🟡, a design calculation)** You need a single modification cycle with $n_H \ge 10$, with $J_1 = J_2 = J$. (a) Using $\theta_{90} = 9(J+0.1)/(J+0.9)$ and $\theta_{10} = 1/\theta_{90}$, find the largest $J$ that works. (b) If $W_T = 4\ \mu\text{M}$, what $K_M$ does that demand of both enzymes? (c) Name one assumption of the derivation that this design pushes hard against.

**P3 (🔴, bridges to control theory and to Module 3)** (a) Show in one line that logarithmic gains compose multiplicatively across a cascade. (b) A three-layer cascade has per-layer gains 1.4, 1.4 and 2.5 at the operating point. Compute the overall steepness and the input fold-change needed for a 10-to-90 swing. (c) The middle layer's substrate pool is depleted by a mutation so that at the same operating point it now sits at 96 percent modified. Explain what happens to the overall steepness, without new arithmetic. (d) Someone wraps this cascade in positive feedback and reports a "bistable switch" on the basis of a very steep dose–response curve. What single experiment would you demand?

<details>
<summary>Solutions</summary>

**P1 (a)** $J_1 = J_2 = 1/5 = \mathbf{0.2}$. With $\theta = 2$: $B = 1 - 2 + 2(0.2) + 0.2 = -0.4$, and $(1-\theta) = -1$, $\theta J_2 = 0.4$, so

$$-(w^*)^2 + 0.4\,w^* + 0.4 = 0 \;\Longrightarrow\; (w^*)^2 - 0.4\,w^* - 0.4 = 0$$

$$w^* = \frac{0.4 + \sqrt{0.16 + 1.6}}{2} = \frac{0.4 + 1.3267}{2} = \mathbf{0.863}.$$

Check by inversion: $\theta = 0.8633(0.2 + 0.1367)/[(0.1367)(0.2+0.8633)] = 0.2907/0.1453 = 2.000$ ✓.

**(b)** First order: $w^* = \theta/(1+\theta) = 2/3 = \mathbf{0.667}$.

**(c)** **Partly.** $J = 0.2$ gives $\theta_{90} = 9(0.3)/(1.1) = 2.455$, so $n_H = \ln 81/\ln(2.455^2) = 4.394/1.796 = \mathbf{2.45}$ — steeper than hyperbolic and comparable to hemoglobin, but nowhere near a step. Real switching needs $K_M$ well below a fifth of the pool.

**P2 (a)** $n_H \ge 10$ means $\ln(\theta_{90}^2) \le \ln 81 / 10$, i.e. $\ln \theta_{90} \le 0.21972$, so $\theta_{90} \le 1.2457$. Then

$$9\,\frac{J+0.1}{J+0.9} \le 1.2457 \;\Longrightarrow\; \frac{J+0.1}{J+0.9} \le 0.13841 \;\Longrightarrow\; J\,(1 - 0.13841) \le 0.024573$$

$$J \le \frac{0.024573}{0.86159} = \mathbf{0.0285}.$$

(Sanity check against the scaling law: $0.25/J = 0.25/0.0285 = 8.8$, the right order — the asymptotic form slightly under-reads at this $J$.)

**(b)** $K_M \le 0.0285 \times 4\ \mu\text{M} = \mathbf{0.114\ \mu\text{M}}$, about 110 nM, **for both enzymes**. That is at the tight end of measured protein-kinase Michaelis constants for protein substrates (typically 0.1 to 10 micromolar) but entirely physical — which is the point: cells really can build these.

**(c)** Any of three, all real:

1. **Sequestration.** $K_M \ll W_T$ with a working enzyme means much of the pool is tied up in complex, so $W + W^* = W_T$ — the conservation law the whole derivation rests on — is violated by the very regime it is describing.
2. **The QSSA itself.** [1.3](01-03-michaelis-menten-qssa.md) requires total enzyme small compared with substrate plus $K_M$. Driving $K_M$ down shrinks that margin, and the Michaelis–Menten rate laws in the model stop being trustworthy exactly where the model gets interesting.
3. **Speed.** $n_H \lambda \approx (V_1+V_2)/W_T$: buying $n_H = 10$ costs you a tenfold slower relaxation than the cycle's turnover time allows. A signalling switch that takes ten times too long to flip is not a solution.

**P3 (a)** Write the cascade as $x_0 \to x_1 \to x_2 \to x_3$. Then

$$\frac{d \ln x_3}{d\ln x_0} = \frac{d\ln x_3}{d\ln x_2}\cdot\frac{d\ln x_2}{d\ln x_1}\cdot\frac{d\ln x_1}{d\ln x_0},$$

which is just the chain rule applied to $\ln x_i$ as functions of $\ln x_{i-1}$. **Local sensitivities multiply because they are derivatives.**

**(b)** $$n_{\text{eff}} = 1.4 \times 1.4 \times 2.5 = \mathbf{4.9}.$$

$$\text{fold-span} = 81^{1/4.9} = e^{4.39445/4.9} = e^{0.89683} = \mathbf{2.45}\text{-fold}.$$

**(c)** A layer at 96 percent modified is **saturated at its own output end** — nearly all of its pool is already converted, so a further increase in its input produces almost no further increase in its output, and its local gain drops toward zero. Since gains multiply, the cascade's overall steepness collapses toward whatever the remaining layers supply, and the downstream layer stops seeing a varying input at all.

**The general lesson: a cascade is only as sensitive as its worst-positioned layer.** Ultrasensitivity is a property of the *operating point*, not of the wiring — which is why the same cascade can be a switch in one cell and a dead wire in another, and why "the pathway is ultrasensitive" is not a well-formed claim without saying where on the curve it sits.

**(d)** **Demand a hysteresis measurement**: sweep the stimulus up until the output flips, then sweep it back down and find where it flips back. If the two thresholds coincide, the response is steep but single-valued — no second stable state, no memory, no switch. If the down-threshold is lower, the system is genuinely bistable and the width of the loop is the width of the bistable region ([3.2](03-02-bistability-toggle-switch.md), and the pair of saddle-node points of [dynamical-systems 3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md)).

Add one refinement: **measure single cells, not populations.** A population of cells switching sharply at scattered thresholds averages into a smooth graded curve, so a graded population measurement is compatible with every cell being a perfect switch — and vice versa ([4.3](04-03-stochastic-gene-expression.md)).

</details>

## Flashback

**From Lesson 3.2 (bistability & the toggle switch):** the symmetric toggle was analysed there at $n = 2$. Do it for general $n$: for

$$\dot u = \frac{\alpha}{1+v^{\,n}} - u, \qquad \dot v = \frac{\alpha}{1+u^{\,n}} - v, \qquad \alpha > 0,$$

(a) find the condition on the symmetric fixed point $u = v = s$ at which it loses stability, (b) get the critical $\alpha$ as a function of $n$ and evaluate it at $n = 3$, and (c) show that $n = 1$ never works.

<details>
<summary>Solution</summary>

**(a)** The symmetric fixed point satisfies $\alpha/(1+s^n) = s$, i.e.

$$\alpha = s\,(1+s^{\,n}).$$

The Jacobian at $(s,s)$ has diagonal entries $-1$ and off-diagonal entries

$$\frac{\partial}{\partial v}\!\left[\frac{\alpha}{1+v^{\,n}}\right]_{v=s} = -\frac{\alpha\, n\, s^{\,n-1}}{(1+s^{\,n})^{2}} \;=\; -\frac{n\,s^{\,n}}{1+s^{\,n}} \;\equiv\; -b,$$

using $\alpha = s(1+s^n)$ to eliminate $\alpha$. So

$$J = \begin{pmatrix} -1 & -b \\ -b & -1\end{pmatrix}, \qquad \text{eigenvalues } \; -1 \pm b$$

(eigenvectors $(1,1)$ and $(1,-1)$ — the symmetric and antisymmetric perturbations). The symmetric state is stable while $b < 1$ and **loses stability through the antisymmetric mode when $b > 1$**:

$$\frac{n\,s^{\,n}}{1+s^{\,n}} > 1 \;\Longleftrightarrow\; s^{\,n} > \frac{1}{n-1}.$$

**(b)** Threshold at $s_c^{\,n} = 1/(n-1)$, i.e. $s_c = (n-1)^{-1/n}$, and therefore

$$\alpha_c = s_c\,(1+s_c^{\,n}) = (n-1)^{-1/n}\,\frac{n}{n-1}.$$

Check $n=2$: $\alpha_c = 1^{-1/2}\times 2 = 2$, matching 3.2's result $s_c = 1$, $\alpha_c = 2$ ✓.

At $n = 3$: $s_c = 2^{-1/3} = 0.7937$, and

$$\alpha_c = 0.7937 \times \frac{3}{2} = \mathbf{1.191}.$$

**Steeper repression makes bistability cheaper** — $\alpha_c$ falls from 2 to 1.19 on going from $n=2$ to $n=3$, so a weaker promoter suffices.

**(c)** At $n = 1$ the condition reads $s^{1} > 1/0$, which no finite $s$ satisfies; equivalently $b = s/(1+s) < 1$ always, so both eigenvalues $-1 \pm b$ are negative for every $\alpha$. **Non-cooperative mutual repression is never bistable, at any strength.** This is [1.4](01-04-cooperativity-hill-ultrasensitivity.md)'s $n>1$ requirement appearing as a hard algebraic obstruction — and it is why the present lesson matters for Module 3: **zero-order ultrasensitivity is one way to obtain the $n>1$ that a switch cannot do without.**

</details>

## Connections

- **Backward:** the conserved moiety is [1.2](01-02-mass-action-rate-odes.md); both rate laws and the validity worry are [1.3](01-03-michaelis-menten-qssa.md); the effective-Hill-coefficient definition and the deferred promise are [1.4](01-04-cooperativity-hill-ultrasensitivity.md); the molecular account of the cascade is [molecular-cell-biology 2.3](../../molecular-cell-biology/lessons/02-03-kinase-cascades-switch.md), and the qualitative feedback pass is [molecular-cell-biology 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md).
- **Forward:** [4.5](04-05-synthetic-biology-pattern-formation.md) needs both retroactivity and the fact that engineered parts load each other; the $n>1$ supplied here is what makes the switch of [3.2](03-02-bistability-toggle-switch.md) and the oscillator of [3.4](03-04-oscillations-repressilator-hopf.md) constructible out of proteins rather than promoters, and [2.3](02-03-positive-autoregulation.md)'s bimodality is what you see when you add noise ([4.3](04-03-stochastic-gene-expression.md)) to a steep cycle.
- **Sideways:** the mechanism is a **saturated integrator with two opposing actuators**, and the gain composition is literally blocks in series ([control-systems 1.5](../../control-systems/lessons/01-05-block-diagram-algebra.md)); the enzymology behind $V_{max}$ and $K_M$ belongs to [biophysics 4.2](../../biophysics/lessons/04-02-michaelis-menten.md) and [biochemistry 2.2](../../biochemistry/lessons/02-02-michaelis-menten-kinetics.md); and the contrast with genuinely cooperative binding is [biophysics 2.4](../../biophysics/lessons/02-04-cooperativity-allostery.md).
