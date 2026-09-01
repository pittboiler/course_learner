# Systems Biology · Lesson 2.2: Negative autoregulation

> ⏱ ~15 min · Module 2: Gene-regulatory networks & motifs · Builds on: [2.1](02-01-input-functions-promoter-logic.md), [1.4](01-04-cooperativity-hill-ultrasensitivity.md) · Unlocks: [2.3](02-03-positive-autoregulation.md) (positive autoregulation)

## Why this matters

[2.1](02-01-input-functions-promoter-logic.md) ended on a constraint that looks inescapable: a gene under simple regulation approaches its steady state with half-time $t_{1/2} = \ln 2/\alpha$, where $\alpha$ is the **removal rate** — active degradation plus dilution by growth. Production rate does not appear. **A cell cannot make a stable protein respond faster by making more of it**, and for a stable protein in a growing bacterium $\alpha$ is fixed by the generation time. Response time equals one cell cycle, and there is nothing you can tune.

Negative autoregulation — a transcription factor that represses its own promoter — breaks that constraint. It is one edge added to a graph, and it buys three things at once: a response time that can be an order of magnitude shorter than the protein's lifetime allows, a steady state that barely moves when production rates drift, and reduced cell-to-cell noise.

This is the first **motif** in the course, and it sets the template every later motif lesson follows: **wiring → dynamics → the function it performs → the evidence it was selected for.** That last step is what separates network biology from storytelling, and it has a specific statistical shape — count the subgraph, randomize the network, compute a $Z$-score.

[molecular-cell-biology 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md) already gave the qualitative pass: negative feedback stabilizes, and strong feedback compresses the input–output relation as $\sqrt{u}$. This lesson supplies the two numbers that account does not have — **the speedup factor and the attenuation factor** — and shows they are the same number.

## The idea

**The trick is to overshoot the production you need, then shut it off when you arrive.**

Simple regulation is a car driven at constant throttle: it accelerates until drag balances thrust, and the approach to cruising speed is exponential with a time constant set by drag alone. Push the throttle harder and you cruise faster, but you take just as long to get there, because the extra thrust and the extra drag scale together.

Negative autoregulation is a car driven flat-out and then braked at the target. **Full throttle from the start, so the rise is fast; the brake is the protein repressing its own gene as it accumulates.** The final speed is set by *where you decide to brake* — the repression threshold $K$ — not by how hard you were pushing. Two consequences follow immediately, and they are the whole lesson:

1. **Fast approach.** You spend the entire rise at a production rate far above the one that sustains the steady state, so you reach the target in a fraction of the time.
2. **A steady state pinned to $K$, not to $\beta$.** Change the throttle and the cruising speed barely moves, because the brake point did not move.

**The single quantity controlling both is the loop gain** — how strongly production falls when $Y$ rises, measured logarithmically. Call it $L$. Then, near the steady state,

$$\text{speedup} = 1 + L, \qquad \text{attenuation of a change in } \beta = \frac{1}{1+L}.$$

*In words: the same feedback strength that makes the circuit fast makes it insensitive, in exactly reciprocal proportion.* If you have met the **sensitivity function** $S = 1/(1+L)$ in [control-systems 1.1](../../control-systems/lessons/01-01-feedback-and-the-control-problem.md), you have already met this result; the cell got there first.

**Third benefit, stated and deferred: noise reduction.** The same restoring force that pulls $Y$ back toward $K$ after a parameter drift also pulls it back after a random burst of transcription, so NAR genes show narrower cell-to-cell distributions than unregulated genes at the same mean. [4.3](04-03-stochastic-gene-expression.md) does this properly with the master equation; here it is enough to know the sign of the effect.

## The formal version

### Setup and a fair comparison

**Simple regulation** ([2.1](02-01-input-functions-promoter-logic.md)), with $Y$ the protein concentration, $\beta$ the production rate and $\alpha$ the removal rate:

$$\dot Y = \beta - \alpha Y, \qquad Y(t) = \frac{\beta}{\alpha}\left(1 - e^{-\alpha t}\right), \qquad Y_{st} = \frac{\beta}{\alpha}, \qquad t_{1/2} = \frac{\ln 2}{\alpha}.$$

**Negative autoregulation** replaces the constant $\beta$ with a repressing input function ([1.4](01-04-cooperativity-hill-ultrasensitivity.md)), where $\beta_m$ is the *unrepressed* (maximal) production rate, $K$ the repression threshold and $n$ the Hill coefficient:

$$\dot Y = \beta_m\,h(Y) - \alpha Y, \qquad h(Y) = \frac{1}{1 + (Y/K)^{n}}.$$

**The comparison must be made at equal steady state**, or the result is meaningless — a circuit that is faster only because it settles lower has done nothing. So we always tune $\beta$ and $\beta_m$ so that both genes end at the same $Y_{st}$, and ask only about the time taken to get there.

### Result 1a: the large-signal speedup

Take the **strong-repression (logic) limit**: with $n$ large, $h$ is effectively 1 below $K$ and 0 above it, so production runs flat out at $\beta_m$ until $Y$ hits $K$ and then stops. The steady state is $Y_{st} = K$. Matching the simple gene to it requires $\beta = \alpha K$. Define the **promoter-strength ratio**

$$\rho \equiv \frac{\beta_m}{\beta} = \frac{\beta_m}{\alpha K} > 1,$$

*in words: how much stronger the autoregulated promoter is, unrepressed, than the constitutive one it replaces.* While $Y < K$ the dynamics are $\dot Y = \beta_m - \alpha Y$, so $Y(t) = \rho K\,(1 - e^{-\alpha t})$. Setting $Y = K/2$:

$$1 - e^{-\alpha t_{1/2}} = \frac{1}{2\rho} \quad\Longrightarrow\quad \boxed{\;t_{1/2}^{\text{NAR}} = -\frac{1}{\alpha}\ln\!\left(1 - \frac{1}{2\rho}\right)\;}$$

and the speedup factor, dividing the simple gene's $\ln 2/\alpha$ by it:

$$\Sigma = \frac{\ln 2}{-\ln\!\left(1 - \dfrac{1}{2\rho}\right)} \;\approx\; 2\rho \ln 2 \quad (\rho \gg 1).$$

*In words: build the promoter $\rho$ times stronger than it needs to be and let the protein rein it in, and the gene arrives roughly $1.39\rho$ times sooner.* Note that $\alpha$ has cancelled out of $\Sigma$ entirely — **the speedup is a property of the circuit, not of the protein's lifetime.** That is the point.

For a stable protein in a bacterium with a 30-minute generation time ($\alpha = \ln 2/30 = 0.0231\ \text{min}^{-1}$, so $t_{1/2} = 30$ min without feedback):

| $\rho$ | $t_{1/2}^{\text{NAR}}$ | speedup $\Sigma$ |
|---|---|---|
| 2 | 12.5 min | 2.4 |
| 5 | 4.6 min | 6.6 |
| 10 | 2.2 min | 13.5 |
| 20 | 1.1 min | 27.4 |

**NAR decouples response time from protein lifetime.** The only cost is a promoter that must be strong when unrepressed — and, importantly, *not* a higher ongoing expense: at steady state, production balances removal, so the NAR gene and the simple gene burn exactly the same amount of ATP per unit time. The high rate is transient.

### Result 1b: the small-signal speedup, and the honest caveat

The logic limit is a large-signal argument. Linearizing the full system at $Y_{st}$ gives the local relaxation rate. Write $\theta$ for the **fraction of promoter repressed at steady state**,

$$\theta = \frac{(Y_{st}/K)^{n}}{1 + (Y_{st}/K)^{n}} \in (0,1), \qquad \text{so} \quad \frac{d\ln h}{d\ln Y}\bigg|_{Y_{st}} = -n\theta.$$

Since $\beta_m h(Y_{st}) = \alpha Y_{st}$ at steady state, the Jacobian $J = \beta_m h'(Y_{st}) - \alpha$ evaluates to

$$-J = \alpha\,(1 + n\theta) \equiv \alpha(1+L), \qquad \boxed{\;L \equiv n\theta \;=\; \text{loop gain}.\;}$$

*In words: near its steady state the autoregulated gene relaxes as if its removal rate were $(1+L)$ times larger — but the protein's actual lifetime is untouched.*

**The caveat that Alon's textbook treatment can obscure:** because $\theta < 1$, the *local* speedup is bounded by $1 + n$. With $n = 1$ you cannot do better than a factor of 2 near the steady state. The large factors in the table above come from the **far-from-equilibrium** part of the trajectory, where production is still flat out. Both statements are true and they describe different phases of the same rise; measured speedups in engineered NAR constructs are around fivefold, which is where the two pictures meet.

### Result 2: steady-state robustness

Differentiate the steady-state condition $\beta_m h(Y_{st}) = \alpha Y_{st}$ logarithmically in $\beta_m$:

$$d\ln\beta_m + \frac{d\ln h}{d\ln Y}\,d\ln Y_{st} = d\ln Y_{st} \quad\Longrightarrow\quad \boxed{\;S \equiv \frac{d\ln Y_{st}}{d\ln \beta_m} = \frac{1}{1 + n\theta} = \frac{1}{1+L}.\;}$$

*In words: a fold-change $\lambda$ in production rate produces only a fold-change $\lambda^{S}$ in the output.* For the unregulated gene $L = 0$ and $S = 1$: output tracks production one-for-one.

In the strong-repression limit $\theta \to 1$, $S \to 1/(1+n)$, and integrating gives the closed form

$$Y_{st} = K\left(\frac{\beta_m}{\alpha K}\right)^{1/(n+1)} \;=\; K\,\rho^{\,1/(n+1)}.$$

**At $n = 1$ this is $Y_{st} \propto \sqrt{\beta_m}$ — exactly the $\sqrt{u}$ compression [molecular-cell-biology 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md) derived**, now identified as the $n=1$ case of a family. A twofold change in production moves the output by:

| $n$ (strong repression) | $S = 1/(n+1)$ | output change for a 2-fold change in $\beta_m$ |
|---|---|---|
| 0 (no feedback) | 1 | 100 percent |
| 1 | 0.50 | 41 percent |
| 2 | 0.33 | 26 percent |
| 4 | 0.20 | 15 percent |

**The output is now set mostly by $K$ — a binding affinity, encoded in the operator sequence — rather than by $\beta_m$, which depends on polymerase abundance, ribosome load, temperature and growth rate.** The cell has moved the specification of its own expression level from a quantity it cannot control to one it can write down in DNA.

### Result 3: is it actually a motif?

None of the above shows that evolution *used* it. The argument that it did is statistical.

**The procedure.** (i) Count occurrences $N_{\text{real}}$ of the subgraph — here, a negative self-edge — in the curated network. (ii) Generate an ensemble of randomized networks that preserve each node's in-degree and out-degree (see [graph-theory 1.1](../../graph-theory/lessons/01-01-degree-and-handshake-lemma.md) for degree sequences), so that hubs stay hubs and only the wiring is scrambled. (iii) Compare:

$$Z = \frac{N_{\text{real}} - \langle N_{\text{rand}}\rangle}{\sigma_{\text{rand}}}.$$

*In words: how many randomized-ensemble standard deviations the real count sits above what the network's degree sequence alone would produce.* Degree preservation is what makes the test non-trivial — without it you would only be rediscovering that some genes have many regulatory targets.

**The *E. coli* numbers.** The curated transcription network used in the founding analysis has about $N = 424$ operon nodes and $E = 519$ directed regulatory edges, and roughly **40** of its transcription factors repress their own promoter — on the order of a third to a half of all the transcription factors in it. Under a null where each edge picks its source and target independently and uniformly, an edge is a self-edge with probability $1/N$, so the count is binomial:

$$\langle N_{\text{rand}}\rangle = \frac{E}{N} = \frac{519}{424} = 1.22, \qquad \sigma_{\text{rand}} = \sqrt{E \cdot \tfrac{1}{N}\left(1 - \tfrac{1}{N}\right)} = \sqrt{1.221} = 1.11,$$

$$Z = \frac{40 - 1.22}{1.11} \approx 35.$$

**Forty observed against one expected.** This is the observation that founded network-motif biology, and its logic is the null-hypothesis reasoning of [prob-stat-refresher 4.3](../../prob-stat-refresher/lessons/04-03-hypothesis-testing.md) applied to graphs rather than to means.

**Be honest about what it establishes.** Over-representation is evidence of *selection*, not proof of *the function you have in mind*. Three specific gaps: the null model may be wrong (a network grown by gene duplication and divergence has its own self-edge statistics); curated networks are biased toward well-studied regulators; and a $Z$ of 35 is not a Gaussian tail probability, since the null count distribution is a low-mean discrete one — the defensible statement is an empirical rank over the ensemble. **The convincing evidence is direct measurement**: an engineered gene built with and without self-repression, tuned to the same steady state, and timed — which is what Rosenfeld, Elowitz and Alon did in 2002, finding roughly a fivefold speedup.

## Picture

![Left panel: protein concentration against time for two genes reaching the same steady state. The simple regulated gene rises as a slow exponential with its half-time marked at thirty minutes; the negatively autoregulated gene rises steeply and levels off at the same plateau with its half-time marked at 4.6 minutes, giving a 6.6-fold speedup. Right panel: a histogram of the number of negative self-loops found in randomized networks, clustered tightly around one, with the count observed in the real network marked by an arrow far to the right at forty, and the resulting Z-score of about thirty-five.](assets/02-02-fig1.svg)

## Worked examples

**Example 1 (mechanical — the speedup, and the asymmetry nobody mentions).** A stable protein sits in a bacterium growing with a 45-minute doubling time; there is no active degradation, so removal is dilution only. Its gene is rebuilt with negative autoregulation, using a promoter 8 times stronger unrepressed, tuned to the same steady state. (a) Find $t_{1/2}$ before and after. (b) The signal is now withdrawn and production stops entirely. How long until the protein falls to half? (c) Interpret.

**(a)** $$\alpha = \frac{\ln 2}{45} = 0.015403\ \text{min}^{-1}, \qquad t_{1/2}^{\text{simple}} = \frac{\ln 2}{\alpha} = \mathbf{45\ \text{min}}.$$

With $\rho = 8$:

$$t_{1/2}^{\text{NAR}} = -\frac{1}{\alpha}\ln\!\left(1 - \frac{1}{16}\right) = \frac{-\ln 0.9375}{0.015403} = \frac{0.064539}{0.015403} = \mathbf{4.19\ \text{min}}.$$

$$\Sigma = \frac{45}{4.19} = \mathbf{10.7}.$$

(Check against $2\rho\ln 2 = 11.1$ — the asymptotic form, slightly optimistic at $\rho = 8$. ✓)

**(b)** With production off, $\dot Y = -\alpha Y$ **whatever the promoter architecture is**, because a repressor that has nothing to repress does nothing. The decay half-time is

$$\frac{\ln 2}{\alpha} = \mathbf{45\ \text{min}} \quad\text{— unchanged.}$$

**(c) The speedup is one-sided.** NAR accelerates the rise and does nothing at all for the fall. This is worth internalizing because it is a common misreading: **negative autoregulation does not shorten the protein's lifetime**; it only front-loads production. A circuit that must turn *off* quickly needs a different solution — active degradation, or the incoherent feed-forward loop of [2.5](02-05-incoherent-ffl-temporal-programs.md), or the sign-sensitive delay of [2.4](02-04-feed-forward-loop.md) pointed the other way.

**Example 2 (why you'd care — one number does both jobs).** A NAR gene has $n = 2$ and sits at 90 percent repression at steady state, so $\theta = 0.9$. (a) Compute the loop gain, the local speedup and the sensitivity. (b) The cell is shifted to a richer medium and ribosome abundance rises, doubling $\beta_m$. By how much does $Y_{st}$ move, compared with an unregulated gene? (c) What would it take to hold a tenfold change in $\beta_m$ to under 50 percent output change?

**(a)** $$L = n\theta = 2 \times 0.9 = \mathbf{1.8}.$$

$$\text{local speedup} = 1 + L = \mathbf{2.8\times}, \qquad S = \frac{1}{1+L} = \frac{1}{2.8} = \mathbf{0.357}.$$

**(b)** $$\frac{Y_{st}'}{Y_{st}} = 2^{\,0.357} = e^{0.357 \times 0.6931} = e^{0.2474} = \mathbf{1.28}.$$

**A 28 percent change instead of 100 percent** — the unregulated gene doubles. The circuit has absorbed roughly three-quarters of the disturbance, and it did so without measuring anything or knowing that the medium changed.

**(c)** Require $10^{S} \le 1.5$:

$$S \le \frac{\ln 1.5}{\ln 10} = \frac{0.4055}{2.3026} = 0.1761 \quad\Longrightarrow\quad 1 + L \ge \frac{1}{0.1761} = 5.68 \quad\Longrightarrow\quad L \ge \mathbf{4.68}.$$

Since $L = n\theta < n$, this needs $n \ge 5$ — **strong cooperativity is not optional if you want serious robustness.** That is the same demand [3.2](03-02-bistability-toggle-switch.md) will make for bistability and [3.4](03-04-oscillations-repressilator-hopf.md) for oscillation, and it is why [1.4](01-04-cooperativity-hill-ultrasensitivity.md)'s question — *where does a cell get $n > 1$ from?* — keeps returning.

**The bridge worth naming.** $S = 1/(1+L)$ is the classical **sensitivity function** of a negative feedback loop, and $1+L$ is the **bandwidth extension** it buys. Every point in this example is a statement a control engineer would make about an op-amp with feedback: high open-loop gain, closed-loop behaviour set by the feedback network rather than by the amplifier, faster settling, and a gain–bandwidth product you cannot cheat. [control-systems 1.1](../../control-systems/lessons/01-01-feedback-and-the-control-problem.md) and [2.3](../../control-systems/lessons/02-03-steady-state-error-system-type.md) are the same mathematics with different nouns. **The reciprocal relation between speed and sensitivity is not a biological fact; it is a fact about closed loops.**

## Watch out

- **You might think NAR works by making the protein less stable.** It does not touch $\alpha$. Example 1(b) is the test: switch production off and the NAR gene decays at exactly the unregulated rate. What the feedback changes is the *effective* return rate toward steady state, which is a property of production, not of degradation.
- **You might quote the big speedup and the local speedup as the same number.** The local bound is $1 + n\theta \le 1+n$; the large factors in the table are large-signal, from the flat-out phase of the rise. Say which regime you mean, especially when comparing with a measurement — where in the trajectory you define "response time" changes the answer.
- **You might compare the two circuits at different steady states.** A repressed gene settles lower than an unrepressed one, and a lower target is reached sooner for trivial reasons. **The comparison is only meaningful with $Y_{st}$ matched**, which is why $\rho > 1$ is forced: the NAR promoter has to be built stronger to end up in the same place.
- **You might read a high $Z$-score as proof of function.** It is evidence of non-randomness under one specific null. The null can be wrong, curated networks are sampled unevenly, and the observed structure could be easy to evolve rather than useful. Function is established by building the circuit and timing it, not by counting.
- **You might expect robustness to be free.** The price is dynamic range: $Y_{st} \propto \beta_m^{1/(n+1)}$ means the circuit is nearly as insensitive to *signals* as it is to *noise*. NAR is the right architecture for a housekeeping level that must not drift, and the wrong one for a gene that must report input magnitude faithfully.

## One-liner

> Repressing your own promoter lets you run flat out and brake at the target: the loop gain $L = n\theta$ multiplies the approach rate by $1+L$ and divides the effect of any production disturbance by $1+L$ — the same number, once for speed and once for robustness — and forty *E. coli* transcription factors do it against a randomized expectation of one.

## Problems

**P1 (🟢)** A transcription factor is diluted only by growth, in a culture with a 60-minute doubling time. Its gene is rebuilt with negative autoregulation using an unrepressed promoter 12 times stronger, matched to the same steady state. (a) Give $\alpha$ and the unregulated response time. (b) Compute $t_{1/2}^{\text{NAR}}$ and the speedup. (c) The engineer's alternative was to tag the protein for active degradation, leaving the promoter alone. What degradation rate would hit the same response time, and by what factor must production rise to hold $Y_{st}$ fixed? State which design is cheaper to run and why.

**P2 (🟡, bridges to control theory)** A NAR gene has $n = 3$ and its steady state sits where the promoter is 80 percent repressed. (a) Compute $L$, the local speedup, and $S$. (b) A mutation weakens the promoter, cutting $\beta_m$ to one-third. By what factor does $Y_{st}$ fall — and by what factor would it fall for the unregulated gene? (c) The same mutation in a *positively* autoregulated gene would have $L < 0$. Without doing the algebra, say what $S = 1/(1+L)$ then predicts, and what it predicts about response time.

**P3 (🔴)** A curated transcription network has $N = 500$ nodes and $E = 600$ directed edges. Exactly 40 nodes are transcription factors, each with out-degree 15 and in-degree 2; every other node has out-degree 0. You observe **18** negative self-loops. (a) Compute $\langle N_{\text{rand}}\rangle$, $\sigma_{\text{rand}}$ and $Z$ under the naive null in which each edge picks its endpoints uniformly at random. (b) Under a degree-preserving null, a node acquires a self-loop with probability approximately $k^{\text{out}}k^{\text{in}}/E$. Redo the calculation and the $Z$-score. (c) Explain in two sentences why the degree-preserving null is the right one, and state one reason a large $Z$ still would not settle whether NAR was selected for response-time speedup specifically.

<details>
<summary>Solutions</summary>

**P1 (a)** Removal is dilution alone, so $\alpha$ is set by the doubling time:

$$\alpha = \frac{\ln 2}{60} = 0.011552\ \text{min}^{-1}, \qquad t_{1/2}^{\text{simple}} = \frac{\ln 2}{\alpha} = \mathbf{60\ \text{min}}.$$

**(b)** With $\rho = 12$:

$$t_{1/2}^{\text{NAR}} = -\frac{1}{\alpha}\ln\!\left(1 - \frac{1}{24}\right) = \frac{-\ln(0.958333)}{0.011552} = \frac{0.042560}{0.011552} = \mathbf{3.68\ \text{min}}.$$

$$\Sigma = \frac{60}{3.68} = \mathbf{16.3\times}.$$

(Asymptotic check: $2\rho\ln 2 = 16.6$. ✓)

**(c)** To get $t_{1/2} = 3.68$ min by degradation alone, the *total* removal rate must be

$$\alpha_{\text{tot}} = \frac{\ln 2}{3.68} = 0.18815\ \text{min}^{-1}.$$

Dilution supplies 0.011552 of that, so the tag must supply

$$\alpha_{\text{deg}} = 0.18815 - 0.011552 = \mathbf{0.1766\ \text{min}^{-1}} \quad (\text{a protein half-life of } \ln 2/0.1766 = 3.9\ \text{min}).$$

Since $Y_{st} = \beta/\alpha_{\text{tot}}$, holding $Y_{st}$ fixed requires production to rise by the same factor as removal:

$$\frac{\beta'}{\beta} = \frac{0.18815}{0.011552} = \mathbf{16.3\times}.$$

**NAR is far cheaper to run.** The degradation design burns 16.3 times as much synthesis *forever*, because every protein made is destroyed within minutes and replaced — a futile cycle paid for in ATP and ribosome time at steady state. NAR's high production rate is **transient**: once $Y$ reaches $K$ the repressor shuts the promoter down, and at steady state production must equal $\alpha Y_{st}$, which is identical to the unregulated gene's. **Same steady-state cost, sixteenfold faster rise.** The prices NAR pays instead are a promoter that must be strong when unrepressed, and the compressed dynamic range of the "Watch out".

**P2 (a)** $$L = n\theta = 3 \times 0.8 = \mathbf{2.4}, \qquad 1 + L = \mathbf{3.4\times \text{ local speedup}}, \qquad S = \frac{1}{3.4} = \mathbf{0.294}.$$

**(b)** A fold-change $\lambda = 1/3$ in $\beta_m$ gives $\lambda^{S}$ in output:

$$\left(\tfrac{1}{3}\right)^{0.294} = e^{-0.294 \times 1.0986} = e^{-0.3230} = 0.724,$$

so $Y_{st}$ falls to **72 percent of its former value — a drop of 28 percent**, against the unregulated gene's fall to 33 percent (a drop of 67 percent).

**The mutation is nearly silenced by the circuit.** This is the practical meaning of robustness: NAR converts a large change in a hard-to-control parameter into a small change in the thing the cell cares about, and it does so with no sensor, no comparator and no measurement — only the algebra of a closed loop.

**(c)** With positive autoregulation the loop gain is negative, so $1 + L < 1$ and

$$S = \frac{1}{1+L} > 1,$$

meaning the circuit **amplifies** a change in $\beta_m$ rather than attenuating it: the same mutation would move $Y_{st}$ by *more* than the unregulated gene does. And since the relaxation rate is $\alpha(1+L)$, the same negative $L$ makes the approach to steady state **slower**, not faster.

**Both signs flip together, because they were the same number all along.** As $L \to -1$ the relaxation rate goes to zero and the sensitivity diverges — the system stops returning to its steady state at all, which is the fixed point losing stability. That is the doorway to bistability, and it is exactly the subject of [2.3](02-03-positive-autoregulation.md) and [3.2](03-02-bistability-toggle-switch.md).

**P3 (a)** Each of the 600 edges is a self-edge with probability $1/500 = 0.002$:

$$\langle N_{\text{rand}}\rangle = \frac{E}{N} = \frac{600}{500} = \mathbf{1.20}.$$

$$\sigma_{\text{rand}} = \sqrt{600 \times 0.002 \times 0.998} = \sqrt{1.1976} = \mathbf{1.094}.$$

$$Z = \frac{18 - 1.20}{1.094} = \frac{16.80}{1.094} = \mathbf{15.4}.$$

**(b)** Only the 40 transcription-factor nodes can carry a self-loop; the rest have out-degree 0. For each,

$$p = \frac{k^{\text{out}}k^{\text{in}}}{E} = \frac{15 \times 2}{600} = 0.05.$$

$$\langle N_{\text{rand}}\rangle = 40 \times 0.05 = \mathbf{2.00}, \qquad \sigma_{\text{rand}} = \sqrt{40 \times 0.05 \times 0.95} = \sqrt{1.90} = \mathbf{1.378}.$$

$$Z = \frac{18 - 2.00}{1.378} = \frac{16.00}{1.378} = \mathbf{11.6}.$$

**The stricter null nearly doubles the expected count and cuts $Z$ from 15.4 to 11.6 — and the conclusion survives.** That is the pattern to expect: a better null model always shrinks the effect, and a claim that only survives the naive null is not a claim.

**(c)** The degree-preserving null is right because **out-degree and in-degree are not free parameters of the biology** — some regulators are global and control dozens of operons, and any null that lets those hubs vanish is testing the wrong hypothesis. Randomizing while holding both degree sequences fixed asks the only interesting question: *given that this gene regulates 15 targets and is regulated by 2, is it more likely than chance to be one of its own targets?* (Here the effect is concentrated further still: 18 of the 40 transcription factors, 45 percent, autoregulate.)

**Why a large $Z$ still does not settle the function:** the count says the wiring is non-random, not *why*. A self-loop could be over-represented because it is easy to evolve — a repressor's own promoter already contains sequence its protein binds, so a single operator mutation creates one — or because it is selected for robustness, or for noise reduction ([4.3](04-03-stochastic-gene-expression.md)), all of which produce the same $Z$. Distinguishing them requires building the circuit both ways and measuring the property in question, which is why the Rosenfeld experiment, not the count, is the evidence for the speedup specifically.

</details>

## Flashback

**From Lesson 2.1 (Modeling transcription: input functions & logic):** A protein is actively degraded at $\alpha_{\text{deg}} = 0.020\ \text{min}^{-1}$ in a cell whose generation time is 50 min. (a) Find the total removal rate and the response time under simple regulation. (b) The cell doubles its promoter strength. What happens to $Y_{st}$, and what happens to $t_{1/2}$? (c) An engineer wants a 5-minute response time and insists on keeping the same $Y_{st}$. What $\alpha_{\text{deg}}$ is required, and what does it cost?

<details>
<summary>Solution</summary>

**(a)** Removal is degradation plus dilution:

$$\alpha_{\text{dil}} = \frac{\ln 2}{50} = 0.013863\ \text{min}^{-1}, \qquad \alpha = 0.020 + 0.013863 = \mathbf{0.033863\ \text{min}^{-1}}.$$

$$t_{1/2} = \frac{\ln 2}{\alpha} = \frac{0.693147}{0.033863} = \mathbf{20.5\ \text{min}}.$$

**(b)** $Y_{st} = \beta/\alpha$ **doubles**; $t_{1/2} = \ln 2/\alpha$ is **unchanged at 20.5 min**.

This is 2.1's central result and the constraint the present lesson exists to break: **production rate sets the level and nothing else; removal rate sets the timing and nothing else.**

**(c)** $$\alpha_{\text{required}} = \frac{\ln 2}{5} = 0.138629\ \text{min}^{-1} \quad\Longrightarrow\quad \alpha_{\text{deg}} = 0.138629 - 0.013863 = \mathbf{0.12477\ \text{min}^{-1}},$$

a **6.2-fold** increase over the original tag. And because $Y_{st} = \beta/\alpha$ must be held fixed:

$$\frac{\beta'}{\beta} = \frac{0.138629}{0.033863} = \mathbf{4.09\times}.$$

**The cost is permanent.** Four times the synthesis, forever, with the surplus immediately destroyed — a 4-fold futile cycle bought purely to make the gene react faster.

**Which is exactly the trade negative autoregulation avoids.** NAR reaches the same speedup by front-loading production and then shutting it off, so the steady-state synthesis rate is $\alpha Y_{st}$ either way. Fast response is available cheaply, but only if you are willing to put an edge in the graph.

</details>

## Connections

- **Backward:** [2.1](02-01-input-functions-promoter-logic.md) established $t_{1/2} = \ln 2/\alpha$ and its independence from $\beta$ — the constraint this lesson breaks. The Hill coefficient $n$ doing the work in both $L = n\theta$ and $S = 1/(1+L)$ is [1.4](01-04-cooperativity-hill-ultrasensitivity.md)'s. [molecular-cell-biology 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md)'s $\sqrt{u}$ compression is the $n = 1$ member of the family derived here.
- **Forward:** [2.3](02-03-positive-autoregulation.md) is this lesson with the sign of $L$ reversed — slower, more sensitive, and eventually bistable. [2.4](02-04-feed-forward-loop.md) reuses the $Z$-score methodology on three-node subgraphs. [4.3](04-03-stochastic-gene-expression.md) turns the hand-waved noise-reduction claim into a Fano factor. The demand for $n$ large enough, met here as robustness, returns as the bistability condition in [3.2](03-02-bistability-toggle-switch.md) and the oscillation threshold in [3.4](03-04-oscillations-repressilator-hopf.md).
- **Sideways:** $S = 1/(1+L)$ is the sensitivity function of [control-systems 1.1](../../control-systems/lessons/01-01-feedback-and-the-control-problem.md), and the speed–sensitivity reciprocity is its gain–bandwidth trade; [control-systems 4.1](../../control-systems/lessons/04-01-pid-control.md) is where proportional feedback like this one gets upgraded to the integral action that [3.3](03-03-integral-control-exact-adaptation.md) needs for *exact* adaptation. The degree-preserving null belongs to [graph-theory 1.1](../../graph-theory/lessons/01-01-degree-and-handshake-lemma.md); the inference from it to [prob-stat-refresher 4.3](../../prob-stat-refresher/lessons/04-03-hypothesis-testing.md).
