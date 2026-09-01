# Systems Biology · Lesson 3.2: Bistability, hysteresis & cell fate — the toggle switch

> ⏱ ~15 min · Module 3: Dynamics, feedback & bistability · Builds on: [3.1](03-01-steady-states-stability-phase-planes.md), [2.3](02-03-positive-autoregulation.md) · Unlocks: [3.3](03-03-integral-control-exact-adaptation.md) (integral control & exact adaptation)

## Why this matters

Your liver cells and your neurons carry identical genomes and were specified by transient signals that vanished decades ago. **Something has to remember.** The memory is not written in the DNA sequence and it is not, in general, written in any single molecule — it is a *dynamical* property of a circuit: the circuit has two stable steady states, and it is sitting in one of them.

[molecular-cell-biology 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md) told that story qualitatively and worked a one-variable cubic; [2.3](02-03-positive-autoregulation.md) gave the graphical criterion — a sigmoidal production curve crossing a linear removal line three times. **This lesson does the two-variable analysis and names the bifurcation**, which is where the real content is: you get an exact critical parameter, an exact separatrix, and the experimental signature — hysteresis — that distinguishes a genuine switch from a merely steep response. That last distinction is worth a paper's worth of confusion in the literature, and by the end of this lesson you will be able to settle it from a dose–response curve.

## The idea

**Mutual repression is positive feedback wearing a disguise.** Two genes, $u$ and $v$, each repressing the other. If $u$ rises it pushes $v$ down, which relieves $v$'s repression of $u$, which pushes $u$ up further. Double negative equals positive. The circuit is a pair of politicians each shouting the other down: the loudest one gets louder.

**Winner-take-all needs two things.** First, enough **gain** — the repression has to be strong enough that a small lead compounds instead of decaying. Second, enough **nonlinearity** — the repression curve must be steeper than a hyperbola, which is exactly the $n>1$ from [1.4](01-04-cooperativity-hill-ultrasensitivity.md). Miss either and the circuit settles into a stable tie with both genes at middling levels, which is a perfectly respectable steady state and a useless memory device.

**So there is a threshold, and crossing it is a bifurcation.** Turn up the strength parameter and, at one precise value, the tie state stops being stable and two asymmetric states appear. Below the threshold the cell has one option; above it, two, plus a threshold between them. **A cell fate is a basin of attraction, and a developmental decision is the choice of which side of the separatrix you land on.**

**And here is the point everyone gets wrong.** A dose–response curve that looks like a step is *not* evidence of bistability. Ultrasensitivity gives you a steep single-valued curve; bistability gives you a curve that is **multi-valued** — the state depends on how you got there. The operational test is a **hysteresis loop**: sweep the input up and the cell flips at one value, sweep it back down and it flips at a *lower* one. **Only the loop proves a second stable state exists.**

## The formal version

The symmetric mutual-repression toggle, in dimensionless form (concentrations scaled by the repression threshold, time by the decay rate, so both proteins have unit lifetime):

$$\dot u = \frac{\alpha}{1+v^{\,n}} - u, \qquad \dot v = \frac{\alpha}{1+u^{\,n}} - v$$

*In words: each protein is produced at a rate that its partner shuts off with a Hill function of steepness $n$, and each decays at rate 1.* Here $\alpha>0$ is the maximal production rate — the **gain** — and $n$ is the Hill coefficient. Take $n=2$ throughout.

**Step 1 — locate every fixed point exactly.** Set both derivatives to zero: $u(1+v^2)=\alpha$ and $v(1+u^2)=\alpha$. Subtract:

$$u - v + uv^2 - vu^2 = 0 \;\Longrightarrow\; (u-v)(1 - uv) = 0$$

**So every fixed point either lies on the diagonal ($u=v$) or satisfies $uv=1$.** That factorization is the whole analysis in one line, and it is worth savoring — a two-variable nonlinear system that solves in closed form.

- **Diagonal (symmetric) branch:** $s(1+s^2)=\alpha$, i.e. $s^3+s=\alpha$. The left side increases monotonically from 0 to $\infty$, so **there is exactly one symmetric fixed point for every $\alpha>0$** — it never disappears.
- **Off-diagonal (asymmetric) branch:** with $uv=1$, $u(1+v^2)=u+v(uv)=u+v$, so the condition becomes $u+v=\alpha$. Then $u$ and $v$ are the two roots of $t^2-\alpha t+1=0$:

$$\boxed{\;u,v = \frac{\alpha \pm \sqrt{\alpha^2-4}}{2}\;}$$

*In words: the two asymmetric states are real only when $\alpha \ge 2$, and at $\alpha=2$ they are born on top of the symmetric state at $u=v=1$.*

**Step 2 — the Jacobian.** With $f = \alpha(1+v^2)^{-1}-u$ and $g = \alpha(1+u^2)^{-1}-v$:

$$J = \begin{pmatrix} -1 & -\dfrac{2\alpha v}{(1+v^2)^2} \\[2mm] -\dfrac{2\alpha u}{(1+u^2)^2} & -1 \end{pmatrix}$$

**At the symmetric point**, substitute $\alpha = s(1+s^2)$ and both off-diagonals collapse to the same number:

$$\frac{2\alpha s}{(1+s^2)^2} = \frac{2s^2}{1+s^2} \equiv g_s, \qquad J = \begin{pmatrix}-1 & -g_s\\ -g_s & -1\end{pmatrix}$$

A matrix of that form has eigenvalues $-1 \pm g_s$ with eigenvectors $(1,1)$ and $(1,-1)$:

$$\lambda_{\text{sym}} = -1-g_s \;\text{ along } (1,1), \qquad \lambda_{\text{anti}} = -1+g_s \;\text{ along } (1,-1)$$

*In words: perturbations that raise both proteins together always decay; perturbations that raise one and lower the other are the dangerous ones.* **The symmetric direction is always stable; only the antisymmetric direction can go unstable — and the antisymmetric direction is precisely "one gene starts winning."** The math knows what the biology is about.

**Step 3 — the critical gain.** Stability is lost when $\lambda_{\text{anti}}>0$:

$$g_s = \frac{2s^2}{1+s^2} > 1 \iff 2s^2 > 1+s^2 \iff s > 1$$

and $s=1$ gives $\alpha = s^3+s = 2$. So

$$\boxed{\;\alpha_c = 2\;}$$

*In words: below a maximal production rate of twice the decay-and-threshold scale, the toggle has one state; above it, three.* Exactly the value at which the asymmetric branch became real — the two calculations agree, as they must.

**Step 4 — stability of the outer states.** Using $uv=1$ and $u+v=\alpha$, the product of the off-diagonals is

$$\frac{4\alpha^2 uv}{[(1+u^2)(1+v^2)]^2} = \frac{4\alpha^2}{[2+u^2+v^2]^2} = \frac{4\alpha^2}{[(u+v)^2]^2} = \frac{4}{\alpha^2}$$

(using $u^2+v^2 = \alpha^2-2$), so

$$\lambda_\pm = -1 \pm \frac{2}{\alpha}$$

**Both negative for $\alpha>2$: the two asymmetric states are stable nodes, at exactly the parameter values where the symmetric state is a saddle.** At $\alpha=2$ they are marginal ($\lambda=0,-2$), which is the bifurcation.

### Naming the bifurcation — and this is the part people get wrong

The system is invariant under the swap $(u,v)\to(v,u)$: it has a $\mathbb{Z}_2$ symmetry. Write $w = u-v$ for the antisymmetric coordinate. The symmetric state is $w=0$, it is stable for $\alpha<2$, it loses stability at $\alpha=2$, and two stable branches appear with

$$w = \pm\sqrt{\alpha^2-4} \approx \pm 2\sqrt{\alpha-2} \quad (\alpha \to 2^+)$$

**Square-root amplitude growth, a symmetric pair of new branches, the old branch surviving but turning unstable: that is a supercritical pitchfork** ([dynamical-systems 3.2](../../dynamical-systems/lessons/03-02-pitchfork-symmetry.md)).

**But no real toggle is symmetric.** Two promoters never have identical strength, the two proteins never have identical lifetimes, and any input you apply hits one arm and not the other. **A pitchfork requires exact symmetry, so it is structurally unstable** — the smallest asymmetry destroys it ([dynamical-systems 3.4](../../dynamical-systems/lessons/03-04-normal-forms-structural-stability.md)). What it unfolds into is the generic picture: one branch that connects smoothly from low to high, and a separate disconnected branch, joined by **two saddle-node (fold) bifurcations** ([dynamical-systems 3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md)).

> **Get this right:** the *symmetric* toggle undergoes a **pitchfork** at $\alpha_c=2$. Every *real* toggle, and every toggle you sweep with an input, undergoes a **pair of saddle-nodes**. The pitchfork is the idealized organizing centre; the saddle-node pair is what you measure. The gap between the two folds is the hysteresis loop.

**Hysteresis, operationally.** Sweep the input up: the system rides the lower branch until that branch is annihilated at the upper fold, then jumps. Sweep down: it rides the upper branch past the up-jump point, because that branch still exists, until the lower fold destroys it. Two different switching thresholds for the same circuit. **The width of the loop is the amount of memory the circuit has**, measured in input units.

## Picture

![Three panels. Left and centre show the toggle-switch nullclines in the u-v plane below and above the bifurcation threshold: at a gain of 1 the two sigmoidal nullclines cross once on the diagonal at a stable node, while at a gain of 3 they cross three times, with two stable nodes off the diagonal and a saddle on the diagonal, and the diagonal drawn as the separatrix that divides the two basins. Right shows the bifurcation diagram of steady-state u against the input for the symmetry-broken toggle: an S-shaped curve with a solid lower branch, a dashed unstable middle branch and a solid upper branch, the two saddle-node fold points marked at inputs 2.70 and 3.54, and vertical arrows showing the upward jump on the way up and the downward jump at the lower input on the way down.](assets/03-02-fig1.svg)

**The separatrix is exact here.** By symmetry the diagonal $u=v$ is an invariant line, and on it the dynamics reduce to $\dot u = \alpha/(1+u^2)-u$, which flows to $s$. So **the diagonal is the stable manifold of the saddle — the separatrix — and it divides the positive quadrant into the two basins of attraction.** Start with even a hair more $u$ than $v$ and you end up in the $u$-high state. That is a cell fate decision, and in the symmetric case it is decided by noise ([4.3](04-03-stochastic-gene-expression.md)).

## Worked examples

**Example 1 (mechanical — the full classification at $\alpha=3$).** Find all fixed points of the $n=2$ toggle at $\alpha=3$ and classify each.

**Symmetric:** solve $s^3+s=3$ numerically $\Rightarrow s = 1.2134$. Then

$$g_s = \frac{2(1.2134)^2}{1+(1.2134)^2} = \frac{2.9447}{2.4723} = 1.1911, \qquad \lambda = -1 \pm 1.1911 = \{+0.191,\; -2.191\}$$

**Saddle.** Unstable along $(1,-1)$, stable along $(1,1)$ — consistent with the separatrix being the diagonal.

**Asymmetric:** $t^2-3t+1=0 \Rightarrow t = (3\pm\sqrt5)/2 = \{2.6180,\ 0.3820\}$, giving the pair $(2.618, 0.382)$ and $(0.382, 2.618)$. Check the definition directly: $3/(1+0.382^2) = 3/1.1459 = 2.618$ ✓. Eigenvalues:

$$\lambda_\pm = -1 \pm \tfrac{2}{3} = \{-0.333,\ -1.667\}$$

**Stable nodes**, both. Trace $-2$, determinant $5/9>0$, discriminant positive — a node, not a spiral, in the [trace–determinant](../../dynamical-systems/lessons/01-03-trace-determinant-classification.md) plane.

**Read the biology off it.** The winner sits at 2.62 and the loser at 0.38 — **a 6.9-fold separation**, achieved with a Hill coefficient of only 2. The states are well resolved, so a fluorescent reporter would show two clean populations. The slow eigenvalue is $-1/3$, so relaxation into a state takes about $3$ protein lifetimes — **committing takes longer than the proteins themselves last**, which is a general feature of circuits operating near a bifurcation and a hint of the critical slowing down that flags an approaching switch.

**Example 2 (why you'd care — measuring hysteresis, and the trap).** Now break the symmetry, which is what any experiment does. An inducer raises the maximal production of $u$ only, so

$$\dot u = \frac{\alpha_1}{1+v^2}-u, \qquad \dot v = \frac{3}{1+u^2}-v$$

with $\alpha_1$ the experimental knob. Find the switching thresholds.

Eliminate $v$: at steady state $v = 3/(1+u^2)$, so $u\left[1 + \dfrac{9}{(1+u^2)^2}\right] = \alpha_1$. Define

$$F(u) = u + \frac{9u}{(1+u^2)^2} = \alpha_1$$

**This is the bifurcation diagram, written backwards** — $\alpha_1$ as an explicit function of the steady-state $u$, which is why the S-curve is easy to draw even though $u(\alpha_1)$ is multi-valued. The folds are where $F'(u)=0$:

$$F'(u) = 1 + \frac{9(1-3u^2)}{(1+u^2)^3} = 0 \;\Longrightarrow\; x^3+3x^2-24x+10 = 0, \quad x \equiv u^2$$

The positive roots are $x = 0.4451$ and $x = 3.3206$, giving

| Fold | $u$ | $\alpha_1$ | What happens |
|---|---|---|---|
| upper | 0.667 | **3.542** | on the way **up**, $u$ jumps $0.67 \to 3.34$ |
| lower | 1.822 | **2.701** | on the way **down**, $u$ drops $1.82 \to 0.32$ |

**The hysteresis loop is 0.84 wide in $\alpha_1$ — about a 31 percent change in inducer.** Between $\alpha_1 = 2.70$ and $3.54$ the circuit has two stable states and *the same input gives different outputs depending on history*. Outside that window it has one.

**Now the trap.** Suppose you only ever sweep the inducer upward, take a population average by flow cytometry, and plot it. You get a steep sigmoid. **You cannot conclude bistability from it**, for two independent reasons:

1. **A steep curve is not a multi-valued curve.** An ultrasensitive but monostable circuit ($n$ large, $\alpha < \alpha_c$) produces an arbitrarily steep single-valued response with no memory at all. Steepness is [1.4](01-04-cooperativity-hill-ultrasensitivity.md); bistability is this lesson.
2. **A population average can look graded even when every cell is a perfect switch.** If cells vary slightly in their thresholds, the fraction that has flipped rises gradually with input, and the mean traces a smooth sigmoid **that describes no individual cell**. The population mean is ON-fraction, not per-cell level.

**Two experiments settle it, and both are single-cell.** (i) Run the sweep in both directions and look for the loop. (ii) Look at the *distribution*, not the mean: bimodality with a stable gap and a shifting weight between the two modes is a switch; a unimodal peak that slides is a graded response. **A histogram beats a mean, and a round trip beats a one-way sweep.**

**Where this is real.** Phage lambda's lysis–lysogeny decision is a mutual-repression toggle (CI and Cro) whose lysogenic state is stable for generations and is deliberately destabilized by DNA damage — memory with a documented erase signal. Gardner, Cantor and Collins built the toggle above out of two repressors on a plasmid in 2000, and measured exactly this hysteresis loop — **a circuit designed on paper from this analysis and then made to work**, which is the strongest evidence the modelling is predictive rather than decorative ([4.5](04-05-synthetic-biology-pattern-formation.md)). And progenitor commitment runs on mutually repressing transcription-factor pairs — GATA1 and PU.1 in blood — where the "primed" undecided progenitor is the symmetric state and differentiation is the pitchfork ([molecular-cell-biology 4.5](../../molecular-cell-biology/lessons/04-05-stem-cells-differentiation-reprogramming.md)).

**Why irreversibility is the point.** A differentiated cell has to *stay* differentiated after the specifying signal is gone — otherwise development would have to run continuously forever. Bistability converts a transient signal into a permanent state, and the width of the hysteresis loop is exactly the margin of noise the commitment can survive. The same logic runs the cell cycle's irreversible transitions ([molecular-cell-biology 3.1](../../molecular-cell-biology/lessons/03-01-cell-cycle-engine-irreversibility.md)).

## Watch out

- **You might call the toggle's bifurcation a saddle-node because that is what the syllabus says, or a pitchfork because that is what the symmetric algebra says.** Both, in their place: the perfectly symmetric system has a **pitchfork** at $\alpha_c=2$; any asymmetry or any applied input unfolds it into a **pair of saddle-nodes**. Since exact symmetry is a measure-zero fiction, **what you measure is always the saddle-node pair**.
- **You might read a steep dose–response as a switch.** Steepness is ultrasensitivity and needs no feedback at all. **Only hysteresis — a different threshold up than down — proves a second stable state.** Report a one-way sweep and you have reported nothing about memory.
- **You might read a graded population mean as graded single-cell behaviour.** With cell-to-cell threshold variation, a population of perfect switches averages to a smooth sigmoid. Look at the histogram.
- **You might think stronger repression alone gives bistability.** With $n=1$ it never does, at any $\alpha$ — see P1. **You need $n>1$; gain without nonlinearity just moves the tie.**
- **You might expect the unstable middle state to be observable.** It is a saddle, so no cell sits there; it is the *threshold*, and its stable manifold is the separatrix. It shows up in data only as the gap between the two modes.

## One-liner

> Mutual repression is positive feedback in disguise: above a critical gain the tie state turns into a saddle whose stable manifold is the separatrix between two cell fates — a pitchfork if the circuit is exactly symmetric, a pair of saddle-nodes in every real case, and it is the hysteresis loop between those two folds, never the steepness of the curve, that proves the memory is there.

## Problems

**P1 (🟢)** Show that the toggle with $n=1$, namely $\dot u = \alpha/(1+v)-u$ and $\dot v = \alpha/(1+u)-v$, has exactly one fixed point for every $\alpha>0$ and that it is always stable. Conclude what $n=1$ costs you.

**P2 (🟡)** Take the symmetric $n=2$ toggle at $\alpha=4$. (a) Find all three fixed points. (b) A cell sits in the $u$-high state. An experimenter transiently induces $v$; assuming $u$ has no time to change, how large must $v$ be pushed for the cell to flip, and what fold-change over its resting $v$ is that? (c) Why does this number tell you how noise-resistant the memory is?

**P3 (🔴, bridges to `dynamical-systems` and back to [2.3](02-03-positive-autoregulation.md))** A single self-activating gene with cooperative binding and no leak, nondimensionalized: $\dot x = \dfrac{a x^2}{1+x^2} - x$, with $a>0$ the gain. (a) Find all fixed points and the critical $a$ at which the circuit becomes bistable. (b) Classify each fixed point for $a=3$. (c) **Name the bifurcation and explain why it is a different one from the symmetric toggle's**, despite both circuits becoming bistable at the same critical value of their gain.

<details>
<summary>Solutions</summary>

**P1** Fixed points satisfy $u(1+v)=\alpha$ and $v(1+u)=\alpha$. Subtract:

$$u + uv - v - uv = u - v = 0$$

**The $uv$ terms cancel exactly**, so only $u=v$ survives — there is no off-diagonal branch at all, and this is the whole difference from $n=2$, where subtracting left $(u-v)(1-uv)$. The symmetric condition $s(1+s)=\alpha$ gives the unique positive root

$$s = \frac{-1+\sqrt{1+4\alpha}}{2}$$

which exists for every $\alpha>0$.

Stability: $\partial_v[\alpha(1+v)^{-1}] = -\alpha/(1+s)^2$, and substituting $\alpha = s(1+s)$ gives $-s/(1+s)$. So

$$\lambda_\pm = -1 \pm \frac{s}{1+s}$$

Since $s>0$, we have $0 < s/(1+s) < 1$ **for every $s$**, so both eigenvalues are strictly negative. **Stable node, always, at every $\alpha$.** Check the limits: $\alpha=1 \Rightarrow s=0.618$, $\lambda=\{-0.382,-1.618\}$; $\alpha=50 \Rightarrow s=6.589$, $\lambda=\{-0.132,-1.868\}$ — a fiftyfold increase in gain and the state is still stable, merely slower.

**What $n=1$ costs you: everything.** No amount of repression strength produces a switch. The circuit approaches marginality only as $s\to\infty$ and never reaches it. **Cooperativity is not a way to make a good switch better; it is a precondition for having a switch at all** — which is why [1.4](01-04-cooperativity-hill-ultrasensitivity.md) insisted that $n>1$ is the raw material Module 3 consumes.

**P2 (a)** Symmetric: $s^3+s=4 \Rightarrow s = 1.3787$ (check: $2.6213+1.3787=4.000$ ✓). Since $s>1$, it is a saddle; $g_s = 2(1.9008)/2.9008 = 1.3106$, so $\lambda = \{+0.311, -2.311\}$.

Asymmetric: $t^2-4t+1=0 \Rightarrow t = 2\pm\sqrt3 = \{3.7321,\ 0.2679\}$, so the states are $(3.732,\,0.268)$ and $(0.268,\,3.732)$, with $\lambda_\pm = -1\pm 2/4 = \{-0.5,\,-1.5\}$ — **stable nodes**.

**(b)** The separatrix is the diagonal $u=v$. Holding $u = 3.732$ fixed, the cell crosses into the other basin once

$$v > u = 3.732$$

Its resting $v$ is $0.268$, so the required fold-change is

$$\frac{3.732}{0.268} = \mathbf{13.9\text{-fold}}$$

**A 14-fold transient spike in the repressed gene is needed to flip the switch** — and anything less relaxes straight back, which is the definition of memory.

**(c)** That factor is the **noise margin**, in the units the cell actually experiences. Gene expression noise at these copy numbers has a coefficient of variation of order tens of percent ([4.3](04-03-stochastic-gene-expression.md)) — well under a 14-fold excursion — so spontaneous flipping is rare, and the state persists for many generations. **Raise $\alpha$ and the two states separate further, deepening the wells and lengthening the memory; lower $\alpha$ toward $\alpha_c=2$ and the separation collapses like $\sqrt{\alpha-2}$**, the barrier shrinks, and cells start flipping at random. **Where a circuit sits relative to its bifurcation sets how long it remembers** — and lambda lysogens, which persist for thousands of generations, sit very far above threshold.

**P3 (a)** $\dot x = 0$ gives $x\left[\dfrac{ax}{1+x^2}-1\right]=0$, so

$$x_0 = 0 \quad\text{(always)}, \qquad x^2 - ax + 1 = 0 \;\Rightarrow\; x_\pm = \frac{a\pm\sqrt{a^2-4}}{2}$$

**The nonzero pair is real only for $a\ge 2$, so $a_c = 2$**, where they are born together at $x=1$. (Same quadratic as the toggle's asymmetric branch — a pleasant coincidence of the scaling, not a deep identity.)

**(b)** $f'(x) = \dfrac{2ax}{(1+x^2)^2}-1$. At $a=3$ the roots are $x_\pm = (3\pm\sqrt5)/2 = \{2.618,\ 0.382\}$.

| Fixed point | $f'$ | Type |
|---|---|---|
| $x=0$ | $-1$ | **stable** — the OFF state |
| $x=0.382$ | $+0.745$ | **unstable** — the threshold |
| $x=2.618$ | $-0.745$ | **stable** — the ON state |

(At $x=2.618$: $2(3)(2.618)/(7.854)^2 = 15.708/61.69 = 0.2546$, minus 1 gives $-0.745$ ✓.) Bistable, with the unstable point separating the basins — the one-variable version of a separatrix.

**(c) It is a saddle-node bifurcation**, and the contrast is the point of the problem.

Here **two fixed points appear out of nothing at $a=2$** — one stable, one unstable — while the pre-existing $x=0$ state is untouched and stays stable throughout. Nothing changes stability; something is *created*. The amplitude of the new pair separates like $\sqrt{a-2}$ around $x=1$, but they are **not symmetric about a surviving branch** — that is the tell.

In the symmetric toggle, by contrast, **no new object appears from nothing**: the symmetric state persists, *loses* its stability, and emits two new branches symmetrically placed around it. That is a pitchfork, and it happens only because the swap $(u,v)\to(v,u)$ is an exact symmetry of the equations. This circuit has no such symmetry to break — $x$ has no partner — so the pitchfork is unavailable and the generic fold is what occurs.

**The general rule worth carrying:** *pitchforks live in symmetric systems and are destroyed by any perturbation that breaks the symmetry; saddle-nodes are generic and survive perturbation* ([dynamical-systems 3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md), [3.2](../../dynamical-systems/lessons/03-02-pitchfork-symmetry.md)). Since the biological question is always "what happens as I turn a knob," and turning a knob breaks the symmetry, **the saddle-node is what biology delivers and the pitchfork is the organizing skeleton underneath it.**

</details>

## Flashback

**From Lesson 2.3 (positive autoregulation):** A gene activates itself *non*-cooperatively, so the feedback is linear rather than Hill-shaped:

$$\dot Y = \beta_0 + \beta_1 Y - \alpha Y$$

with basal production $\beta_0 = 10$ nM/h, feedback strength $\beta_1 = 0.75\ \text{h}^{-1}$, and removal rate $\alpha = 1\ \text{h}^{-1}$. (a) Find the steady state and the response time $t_{1/2}$, and compare both with the unregulated gene ($\beta_1 = 0$) from [2.1](02-01-input-functions-promoter-logic.md). (b) What happens as $\beta_1 \to \alpha$, and beyond? (c) Given P3 above, why does this circuit have no memory?

<details>
<summary>Solution</summary>

**(a)** Group the linear terms: $\dot Y = \beta_0 - (\alpha-\beta_1)Y$, which is the *same* first-order equation as an unregulated gene with an **effective removal rate** $\alpha_{\text{eff}} = \alpha - \beta_1 = 0.25\ \text{h}^{-1}$.

$$Y_{st} = \frac{\beta_0}{\alpha-\beta_1} = \frac{10}{0.25} = \mathbf{40\ \text{nM}}, \qquad t_{1/2} = \frac{\ln 2}{\alpha-\beta_1} = \frac{0.693}{0.25} = \mathbf{2.77\ \text{h}}$$

Unregulated: $Y_{st} = 10/1 = 10$ nM and $t_{1/2} = 0.693$ h.

**Positive autoregulation raised the steady state fourfold and slowed the response by exactly the same factor of four.** That is the trade 2.3 is about, and here it is visible as a single algebraic substitution: self-activation does not add a new term to the dynamics, it *cancels part of the decay*, and since [2.1](02-01-input-functions-promoter-logic.md) established that removal alone sets response time, weakening removal must slow the gene down. Compare [2.2](02-02-negative-autoregulation.md), where the sign is flipped: negative autoregulation effectively *increases* the removal rate and speeds the gene up.

**(b)** As $\beta_1 \to \alpha^-$, $\alpha_{\text{eff}} \to 0$: the steady state diverges and the response time goes to infinity. For $\beta_1 > \alpha$ the coefficient is positive, the only fixed point ($Y = \beta_0/(\alpha-\beta_1) < 0$) is unphysical, and **$Y$ grows exponentially without bound.** Linear positive feedback has no stable high state to offer — it either damps or runs away.

**(c)** **A linear system has no room for two fixed points.** $\dot Y = \beta_0 - \alpha_{\text{eff}} Y$ is a straight line in $Y$, and a straight line crosses zero once (or never). Memory requires *multiple* stable steady states, which requires the production curve to cross the removal line more than once, which requires production to be **nonlinear and specifically sigmoidal** — the $n>1$ of P3, where $ax^2/(1+x^2)$ starts flat, rises steeply, then saturates and so can cut the line $y=x$ three times.

**So the bistability lineage runs: cooperativity ([1.4](01-04-cooperativity-hill-ultrasensitivity.md)) → sigmoidal input function → multiple crossings ([2.3](02-03-positive-autoregulation.md)) → saddle-node bifurcation and hysteresis (this lesson).** Remove the first link and the whole chain fails, which is precisely what P1 showed for the toggle.

</details>

## Connections

- **Backward:** [3.1](03-01-steady-states-stability-phase-planes.md) supplied the nullcline–Jacobian–eigenvalue procedure executed here; [2.3](02-03-positive-autoregulation.md) gave the graphical three-crossing criterion this lesson turns into an exact $\alpha_c$; [1.4](01-04-cooperativity-hill-ultrasensitivity.md) supplied the $n>1$ without which none of it happens; [1.2](01-02-mass-action-rate-odes.md) supplied the ODEs.
- **Forward:** [3.3](03-03-integral-control-exact-adaptation.md) asks the opposite question — how a circuit stays *insensitive* to its input rather than latching onto it; [3.4](03-04-oscillations-repressilator-hopf.md) bolts a slow negative-feedback variable onto a bistable switch to build a relaxation oscillator, which is how the cell cycle works; [4.3](04-03-stochastic-gene-expression.md) explains the bimodal histograms and how long a state survives noise; [4.5](04-05-synthetic-biology-pattern-formation.md) returns to the Gardner–Collins toggle as built hardware.
- **Sideways:** the bifurcation mathematics is [dynamical-systems 3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md) and [3.2](../../dynamical-systems/lessons/03-02-pitchfork-symmetry.md), with [1.4](../../dynamical-systems/lessons/01-04-linearization-hartman-grobman.md) licensing the linearization away from the bifurcation point and [3.4](../../dynamical-systems/lessons/03-04-normal-forms-structural-stability.md) explaining why the pitchfork does not survive contact with a real cell; the cell-biology account of the same circuits is [molecular-cell-biology 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md), and its use in differentiation is [molecular-cell-biology 4.5](../../molecular-cell-biology/lessons/04-05-stem-cells-differentiation-reprogramming.md).
