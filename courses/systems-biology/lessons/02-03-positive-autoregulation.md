# Systems Biology · Lesson 2.3: Positive autoregulation

> ⏱ ~15 min · Module 2: Gene-regulatory networks & motifs · Builds on: [2.2](02-02-negative-autoregulation.md), [2.1](02-01-input-functions-promoter-logic.md), [1.4](01-04-cooperativity-hill-ultrasensitivity.md) · Unlocks: [2.4](02-04-feed-forward-loop.md) (the feed-forward loop), [3.2](03-02-bistability-toggle-switch.md) (bistability in full)

## Why this matters

This lesson is [2.2](02-02-negative-autoregulation.md) with one sign flipped, and almost everything reverses. Negative autoregulation made a gene **fast, flat and quiet**. Positive autoregulation makes it **slow, big and noisy** — and, past a threshold, gives it something no NAR circuit can have: **memory**.

That is the trade the cell is actually making. A gene that must respond in seconds to a transient signal wires itself negatively. A gene that must commit — become a spore, a lysogen, a muscle cell, and *stay* one after the signal that specified it is long gone — wires itself positively and accepts the delay.

The mirror is exact enough to be worth stating as an identity before we do any work: **autoregulation does not change how much protein a gene can make; it trades output amplitude against response speed at a fixed product.** NAR spends amplitude to buy speed. PAR spends speed to buy amplitude — and, if the input function is steep enough, buys a second stable state with the change.

## The idea

**One picture covers both motifs.** A gene's protein $Y$ is made at a rate that depends on how much of it is already around, and removed at a rate proportional to how much is around:

$$\dot{Y} = f(Y) - \alpha Y$$

where $Y$ is protein concentration, $f(Y)$ is the promoter's input function ([2.1](02-01-input-functions-promoter-logic.md)) — now with $Y$ itself as one of its inputs — and $\alpha$ is the removal rate, degradation plus dilution by growth.

Everything follows from the **slope of $f$ at the operating point.** Suppose $Y$ sits at a steady state $Y_{st}$ and gets bumped up slightly. Removal rises by $\alpha$ per unit of bump. Production also changes, by $f'(Y_{st})$ per unit of bump. The *net* restoring rate is the difference:

$$\alpha_{\text{eff}} = \alpha - f'(Y_{st})$$

*In words: feedback does not change the protein's actual lifetime; it changes the rate at which the circuit erases a deviation.*

- **Simple regulation** ([2.1](02-01-input-functions-promoter-logic.md)): $f' = 0$, so $\alpha_{\text{eff}} = \alpha$. Nothing happens.
- **NAR** ([2.2](02-02-negative-autoregulation.md)): $f' < 0$. A bump up *cuts* production, so the deviation is erased faster than removal alone would manage. $\alpha_{\text{eff}} > \alpha$.
- **PAR** (here): $f' > 0$. A bump up *raises* production, which partly cancels the extra removal. The deviation is erased more slowly. $\alpha_{\text{eff}} < \alpha$.

**And when $f'(Y_{st}) > \alpha$, the "restoring" rate is negative — the bump grows.** The steady state is unstable, the circuit runs away from it, and the only place it can land is somewhere else. That single inequality is simultaneously the PAR slowdown formula, the stability criterion, and the entrance to bistability. Hold on to it.

Define the dimensionless **feedback strength**

$$\phi \equiv \frac{f'(Y_{st})}{\alpha}, \qquad \alpha_{\text{eff}} = \alpha(1-\phi).$$

PAR has $0 < \phi < 1$; NAR has $\phi < 0$; $\phi = 1$ is where the ground gives way.

## The formal version

### Response time: the exact mirror of 2.2

Take the linear-feedback model — the honest local version of an autoregulated gene, and globally exact if the input function is linear over the range travelled:

$$\dot{Y} = \beta_0 + \lambda Y - \alpha Y, \qquad Y(0) = 0,$$

with $\beta_0$ the basal (leak) production rate and $\lambda = f'$ the autoregulatory gain, positive for PAR and negative for NAR. This integrates exactly:

$$\boxed{\;Y(t) = Y_{st}\left(1 - e^{-\alpha_{\text{eff}}t}\right), \qquad Y_{st} = \frac{\beta_0}{\alpha(1-\phi)}, \qquad t_{1/2} = \frac{\ln 2}{\alpha(1-\phi)}\;}$$

*In words: the response is still a plain exponential, but the clock it runs on is $\alpha(1-\phi)$ instead of $\alpha$.*

| | $\phi$ | speed | plateau |
|---|---|---|---|
| NAR | $-3$ | $4\times$ **faster** | $4\times$ lower |
| NAR | $-1$ | $2\times$ faster | $2\times$ lower |
| simple | $0$ | $t_{1/2} = \ln 2/\alpha$ | $\beta_0/\alpha$ |
| PAR | $+0.5$ | $2\times$ **slower** | $2\times$ higher |
| PAR | $+0.75$ | $4\times$ slower | $4\times$ higher |
| PAR | $\to 1^-$ | arbitrarily slow | unbounded |

**The gain–bandwidth identity.** Multiply the last two columns:

$$\boxed{\;Y_{st}\,\alpha_{\text{eff}} = \frac{\beta_0}{\alpha(1-\phi)}\cdot\alpha(1-\phi) = \beta_0 \quad \text{— independent of the feedback.}\;}$$

*In words: however you wire the loop, output level times response rate is fixed by the basal production rate alone.* You cannot get a bigger output **and** a faster one out of autoregulation; the motif only chooses which one to spend. This is the same conserved gain–bandwidth product that appears in a feedback amplifier ([control-systems 2.1](../../control-systems/lessons/02-01-first-order-response.md)), and it is why [2.2](02-02-negative-autoregulation.md) had to *raise* $\beta$ to keep the plateau fixed while it bought its speedup.

**Why 2.2's headline number is bigger than the table suggests.** [2.2](02-02-negative-autoregulation.md) took the strong-repression limit — production pinned at its maximum $\beta$ all the way up, then slamming shut at threshold — and got $t_{1/2} = Y_{st}/2\beta$ against the unregulated $\ln 2/\alpha$, a speedup of $2F\ln 2$ where $F = \beta/(\alpha Y_{st})$ is the unrepressed-to-needed production ratio. That is a *global* statement about the whole rise; the table above is the *local* statement about the final approach. They agree in sign and in mechanism.

**And the asymmetry is real, not cosmetic.** For PAR the global picture is *worse* than the local one. NAR spends its whole rise at maximum production; PAR spends its whole rise at *minimum* production, because $Y$ is small exactly when the gene needs $Y$ to turn itself on. **A PAR gene starting from zero cannot start at all without a leak** — with a Hill input function and $n>1$, $f(0) = 0$ and the gene sits dead at the origin forever. Basal expression is not sloppiness in a PAR circuit; it is the starter motor.

### Noise: the same factor again

Treat the gene as a birth–death process with feedback and linearize the fluctuations around $Y_{st}$. At steady state, production flux equals removal flux equals $\alpha Y_{st}$, so total reaction traffic is $2\alpha Y_{st}$, and the fluctuation–dissipation balance gives variance = traffic / (2 × relaxation rate):

$$\sigma^2 = \frac{2\alpha Y_{st}}{2\alpha(1-\phi)} = \frac{Y_{st}}{1-\phi} \qquad\Longrightarrow\qquad \boxed{\;F \equiv \frac{\sigma^2}{\langle Y\rangle} = \frac{1}{1-\phi}\;}$$

where $F$ is the **Fano factor**, the standard dimensionless noise measure ([4.3](04-03-stochastic-gene-expression.md)).

*In words: an unregulated gene is Poissonian with $F = 1$; NAR pushes it below 1 and PAR pushes it above.*

**This is the sharpest difference between the two motifs.** NAR at $\phi = -3$ gives $F = 0.25$ — sub-Poissonian, quieter than the physics of counting molecules would naively allow. PAR at $\phi = 0.5$ gives $F = 2$. **Noise amplification and slowdown are the same number**: $F = \alpha_{\text{eff}}^{-1}\alpha = t_{1/2}/t_{1/2}^{\text{simple}}$, so a PAR circuit is noisier in exact proportion to how sluggish it is. A slow circuit integrates fluctuations for longer before erasing them.

Note where this stops being true. As $\phi \to 1$, $F \to \infty$ — which is a linearized theory announcing its own failure, not a real prediction. What actually happens past that point is not one enormously broad distribution but **two narrow ones**, and that is the next section.

### Bistability: the graphical criterion only

Now let the input function be a real Hill function ([1.4](01-04-cooperativity-hill-ultrasensitivity.md)):

$$\dot{Y} = \underbrace{\beta\,\frac{Y^{n}}{K^{n} + Y^{n}}}_{\text{production } f(Y)} - \underbrace{\alpha Y}_{\text{removal}}$$

with $\beta$ the maximal production rate, $K$ the activation threshold (half-maximal $Y$), and $n$ the Hill coefficient.

**Steady states are where the sigmoid crosses the line.** Plot $f(Y)$ and $\alpha Y$ on the same axes; every intersection is a fixed point. And by the slope argument above, **a crossing is stable when the sigmoid cuts the line from above ($f' < \alpha$) and unstable when it cuts from below ($f' > \alpha$)** — so intersections alternate stable, unstable, stable as you move right. Three crossings therefore means **two stable states separated by a threshold**: bistability. This is one-dimensional graphical stability exactly as in [dynamical-systems 1.1](../../dynamical-systems/lessons/01-01-flows-on-the-line.md).

**Why $n > 1$ is mandatory, algebraically.** Two facts do it:

1. **For $n>1$, $f(Y) \approx \beta Y^{n}/K^{n}$ near the origin, so $f'(0) = 0$ and $\dot Y \approx -\alpha Y$: the OFF state $Y=0$ is stable.** For $n=1$ the same expansion gives $f'(0) = \beta/K$, so OFF is stable only if $\beta < \alpha K$ — and then it is the *only* state.
2. **For $n = 1$, $f$ is concave on $Y>0$.** A concave curve and a straight line cross at most twice, and with $f(0)=0$ one of those crossings is the origin. So there is never a third. **A hyperbolic input function cannot make a switch, no matter how strong the feedback.**

*In words: without cooperativity, positive feedback gives you a slower, bigger, noisier gene and nothing else.* This is the first place the course *needs* the $n>1$ that [1.4](01-04-cooperativity-hill-ultrasensitivity.md) went to such trouble to obtain — and [3.4](03-04-oscillations-repressilator-hopf.md) will need it again.

For $n = 2$ the non-zero fixed points solve $\beta Y^{2}/(K^2+Y^2) = \alpha Y$, i.e.

$$\alpha Y^{2} - \beta Y + \alpha K^{2} = 0, \qquad \text{two positive roots} \iff \beta^{2} > 4\alpha^{2}K^{2} \iff \boxed{\;\beta > 2\alpha K\;}$$

*In words: the gene must be able to produce, at full blast, more than twice what removal consumes at the threshold concentration.* Below that the sigmoid never gets above the line and the cell can only be OFF.

**What is deferred, deliberately.** [molecular-cell-biology 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md) gave the qualitative account and worked a one-variable cubic; this lesson has added the criterion and the $n>1$ proof. **[3.2](03-02-bistability-toggle-switch.md) supplies the rest**: the two-variable mutual-repression toggle, the Jacobian and eigenvalues, the identification of the transition as a pitchfork (symmetric) or a pair of saddle-node bifurcations (generic, [dynamical-systems 3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md)), the S-shaped bifurcation diagram, and — the part that matters experimentally — **hysteresis**, which is the only measurement that distinguishes a genuine second stable state from a merely very steep response.

## Picture

![Three panels. Left: protein level against time for a negatively autoregulated gene, an unregulated gene and a positively autoregulated gene, all rising to the same plateau, with their three half-times marked on a horizontal line at half maximum and ordered NAR fastest, PAR slowest. Centre: a sigmoidal production curve crossing a straight removal line three times, with the two outer crossings marked stable and the middle one marked unstable and labelled as the switching threshold, annotated that the full bifurcation analysis is deferred to Lesson 3.2. Right: a histogram of protein per cell across a population showing two separate peaks with a dashed line at the population mean falling in the empty valley between them.](assets/02-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — the slowdown, the plateau, and the identity).** An *E. coli* protein is stable, so removal is dilution only, with a 30-minute generation time: $\alpha = \ln 2/30 = 0.0231\ \text{min}^{-1}$. Basal production is $\beta_0 = 2$ molecules per cell per minute. The protein activates its own promoter with local gain $\lambda = f'(Y_{st}) = 0.0139\ \text{min}^{-1}$. (a) Response time and steady state, with and without the loop. (b) Compare with a NAR version of the same gene at $\lambda = -0.0347\ \text{min}^{-1}$. (c) Check the identity.

(a) $$\phi = \frac{0.0139}{0.0231} = 0.60, \qquad \frac{1}{1-\phi} = 2.5 .$$

$$\text{simple:}\quad Y_{st} = \frac{2}{0.0231} = 86.6\ \text{molecules}, \quad t_{1/2} = \frac{\ln 2}{0.0231} = 30.0\ \text{min}.$$

$$\text{PAR:}\quad \alpha_{\text{eff}} = 0.0231 - 0.0139 = 0.00924\ \text{min}^{-1},$$
$$Y_{st} = \frac{2}{0.00924} = 216.5\ \text{molecules}, \quad t_{1/2} = \frac{0.6931}{0.00924} = 75.0\ \text{min}.$$

**Note what 30 minutes means here: for a stable protein the unregulated response time equals exactly one generation** — that is [2.1](02-01-input-functions-promoter-logic.md)'s constraint in its rawest form. PAR pushes it to **2.5 generations**. The cell has divided twice before the new level is half established.

(b) $$\phi = \frac{-0.0347}{0.0231} = -1.5, \qquad \frac{1}{1-\phi} = 0.4 .$$

$$\alpha_{\text{eff}} = 0.0578\ \text{min}^{-1}, \quad t_{1/2} = 12.0\ \text{min}, \quad Y_{st} = \frac{2}{0.0578} = 34.6\ \text{molecules}.$$

**Same gene, same protein lifetime, same basal promoter: 12 minutes or 75 minutes, 35 molecules or 217, depending only on the sign of one arrow.**

(c) $$\text{PAR: } 216.5 \times 0.00924 = 2.00 \qquad \text{simple: } 86.6\times 0.0231 = 2.00 \qquad \text{NAR: } 34.6\times 0.0578 = 2.00$$

All three equal $\beta_0$. **The feedback moved the circuit along a hyperbola of constant gain–bandwidth; it did not move it off the hyperbola.** Fano factors follow immediately: $F = 2.5$, $1$, $0.4$.

**Example 2 (why you'd care — memory, and what it costs).** A transcription factor autoactivates with $n = 2$, $K = 1\ \mu\text{M}$, $\alpha = 1\ \text{h}^{-1}$, $\beta = 3\ \mu\text{M}\,\text{h}^{-1}$. (a) Find every steady state and classify it. (b) A stimulus transiently drives $Y$ to $0.6\ \mu\text{M}$ and is then removed entirely. What happens? To $0.3\ \mu\text{M}$? (c) How noisy is the ON state?

(a) $Y = 0$ is a fixed point, and stable since $n>1$. The others solve $Y^{2} - 3Y + 1 = 0$:

$$Y = \frac{3 \pm \sqrt{5}}{2} = 0.382\ \text{and}\ 2.618\ \mu\text{M}.$$

Check the bistability condition first: $\beta = 3 > 2\alpha K = 2$. ✓ Verify the upper root directly: $f(2.618) = 3(6.854)/(7.854) = 2.618 = \alpha Y$. ✓

Classify by sign of $\dot Y = f(Y) - Y$ between them: $\dot Y(0.1) = 3(0.01)/1.01 - 0.1 = -0.070$; $\dot Y(1) = 1.5 - 1 = +0.5$; $\dot Y(3) = 2.7 - 3 = -0.3$.

$$\underbrace{0}_{\text{stable, OFF}} \;\longleftarrow\; \underbrace{0.382}_{\text{unstable}} \;\longrightarrow\; \underbrace{2.618}_{\text{stable, ON}}$$

**The unstable fixed point is not a nuisance — it is the circuit's threshold**, the concentration a signal must push past to commit the cell.

(b) $0.6 > 0.382$: the cell latches ON and climbs to $2.618\ \mu\text{M}$, **and stays there after the stimulus is gone**, because nothing about the ON state depends on the input. $0.3 < 0.382$: the cell relaxes back to zero and retains no record that anything happened. **This is memory in the only sense a molecular circuit can have it: the input selected which of two pre-existing states the cell occupies, and then became irrelevant.** A dose–response measured on a population would look like a sharp threshold at 0.382 — which is exactly why [3.2](03-02-bistability-toggle-switch.md) insists that sharpness alone proves nothing and you must sweep the input *back down* to see hysteresis.

(c) At the ON state, $f'(Y) = \beta \cdot 2YK^{2}/(K^{2}+Y^{2})^{2} = 6(2.618)/(7.854)^{2} = 15.71/61.69 = 0.255\ \text{h}^{-1}$, so

$$\phi = 0.255, \qquad F = \frac{1}{1-0.255} = 1.34 .$$

**Only 34 percent above Poisson — the ON state is barely noisier than an unregulated gene.** The noise amplification lives *near the threshold*, where $f'$ approaches $\alpha$, not deep in either well. So a bistable PAR population is not a smear: it is two tight peaks with an almost empty valley, and cells cross rarely. That is precisely the bimodality of panel (c), and it is why the population mean can sit at a concentration **no individual cell ever holds**.

**Real instances.** *B. subtilis* competence runs on ComK, which activates its own promoter; roughly 10–20 percent of a genetically identical, uniformly starved population turns ComK ON and takes up DNA while the rest do not — bet-hedging implemented by noise plus positive feedback. (Honestly: ComK's circuit also carries a slower negative loop through protein degradation, which makes it an *excitable pulse* rather than a permanent latch — real circuits are rarely one motif.) Phage lambda's CI repressor activates its own promoter, holding the lysogenic state stably through hundreds of cell divisions until DNA damage breaks it. And in vertebrate development, mutually reinforcing master regulators lock differentiated fates in place — the reason a muscle cell stays a muscle cell without a standing instruction to.

**Over-representation.** Applying [2.2](02-02-negative-autoregulation.md)'s method — count the motif in the real *E. coli* transcription network, recount in an ensemble of degree-preserving randomized networks, compute a $Z$-score — positive autoregulation does come out over-represented, but **substantially less strongly than negative autoregulation**, which decorates something like 40 percent of *E. coli* transcription factors. Two reasonable readings: PAR's benefits are situational (only genes that must commit want memory), and PAR's costs — slowness and noise — are paid by every gene that carries it. Over-representation remains evidence of selection for function, not proof of it.

## Watch out

- **You might think PAR's slowdown is a defect to be engineered away.** It is the price of the gain, and the gain–bandwidth identity says the price is exactly proportional. A synthetic circuit that "fixes" the slowness by weakening the loop gives back the amplitude and the memory in the same move.
- **You might think positive feedback implies bistability.** It does not. You need $n>1$ *and* $\beta > 2\alpha K$ (for $n=2$). Weak or non-cooperative PAR is perfectly monostable — just slower, larger and noisier than the gene without it.
- **You might read $f'(Y_{st}) > \alpha$ as "very strong feedback, very fast circuit."** The sign has flipped: that state is *unstable*, and the circuit leaves it. Strong positive feedback does not make a fast circuit; it makes a different circuit.
- **You might expect a switch to need a switch-like input.** It does not. Noise alone flips cells across the threshold, at a rate set by how deep the wells are — which is the whole mechanism behind bimodal populations and bet-hedging, and a real design hazard in synthetic circuits.
- **You might average the population.** In a bimodal PAR population the mean sits in the valley and describes nobody. Any assay that reports a bulk average — a Western blot, a plate reader — will report a middle state that no cell occupies. Single-cell measurement is not a refinement here; it is the difference between the right answer and a fiction.
- **You might forget the leak.** With $n>1$ and no basal expression, $f(0)=0$ and a PAR gene starting from zero never turns on. Basal expression is a structural requirement of the motif, not a defect of the promoter.

## One-liner

> Autoregulation trades output amplitude against response speed at fixed product $Y_{st}\alpha_{\text{eff}} = \beta_0$ — negative feedback buys speed and quiet, positive feedback buys size and, once the input function is steep enough for the sigmoid to cross the removal line three times, memory.

## Problems

**P1 (🟢)** A protein has removal rate $\alpha = 0.10\ \text{h}^{-1}$ and basal production $\beta_0 = 5\ \text{nM}\,\text{h}^{-1}$. It positively autoregulates with local gain $f'(Y_{st}) = 0.075\ \text{h}^{-1}$. (a) Give $t_{1/2}$ and $Y_{st}$ with and without the loop. (b) Verify the gain–bandwidth identity. (c) Give the Fano factor in each case.

**P2 (🟡)** A gene autoactivates with $\dot Y = \beta Y^{2}/(1+Y^{2}) - \alpha Y$, with $\alpha = 0.5$ (per hour) and $K = 1$ (concentration units). (a) What is the smallest $\beta$ that makes the circuit bistable? (b) At $\beta = 2$, find all steady states and classify them. (c) A pulse of signal transiently raises $Y$ to $0.6$; a weaker pulse raises it to $0.15$. Give the fate of each cell after the signal ends.

**P3 (🔴, bridges to control theory)** (a) Show that for $\dot Y = \beta Y^{n}/(K^{n}+Y^{n}) - \alpha Y$ with $n>1$, two positive fixed points exist exactly when
$$\beta > \beta_c = \alpha K\,\frac{n}{(n-1)^{(n-1)/n}},$$
and evaluate $\beta_c/\alpha K$ for $n = 2, 4$ and $n \to \infty$. (b) Interpret the trend. (c) Show that $t_{1/2}$ and the Fano factor diverge together as $\phi \to 1^{-}$, and say what a control engineer would call this.

<details>
<summary>Solutions</summary>

**P1 (a)** $$\phi = \frac{0.075}{0.10} = 0.75, \qquad \frac{1}{1-\phi} = 4 .$$

$$\text{simple:}\quad t_{1/2} = \frac{\ln 2}{0.10} = 6.93\ \text{h}, \qquad Y_{st} = \frac{5}{0.10} = 50\ \text{nM}.$$

$$\text{PAR:}\quad \alpha_{\text{eff}} = 0.10 - 0.075 = 0.025\ \text{h}^{-1}, \qquad t_{1/2} = \frac{0.6931}{0.025} = 27.7\ \text{h}, \qquad Y_{st} = \frac{5}{0.025} = 200\ \text{nM}.$$

Both changed by exactly the factor 4.

**(b)** $$200 \times 0.025 = 5.00 = \beta_0 \qquad\text{and}\qquad 50 \times 0.10 = 5.00 = \beta_0 . \;\checkmark$$

**(c)** $$F_{\text{simple}} = \frac{1}{1-0} = 1 \ \text{(Poisson)}, \qquad F_{\text{PAR}} = \frac{1}{1-0.75} = \mathbf{4}.$$

Four times the variance of a Poissonian gene at the same mean — and it took four times as long to get there. **Same factor, three times over: slowness, size and noise are one parameter.**

**P2 (a)** For $n=2$, bistability requires $\beta > 2\alpha K = 2(0.5)(1) = \mathbf{1.0}$.

**(b)** $Y=0$ is a fixed point and is stable (since $n = 2 > 1$, $f'(0)=0$). The others solve $\alpha Y^{2} - \beta Y + \alpha K^{2} = 0$:

$$0.5Y^{2} - 2Y + 0.5 = 0 \;\Longrightarrow\; Y^{2} - 4Y + 1 = 0 \;\Longrightarrow\; Y = 2 \pm \sqrt{3} = \mathbf{0.268}\ \text{and}\ \mathbf{3.732}.$$

Check the upper root: $f(3.732) = 2(13.928)/(14.928) = 1.866$ and $\alpha Y = 0.5(3.732) = 1.866$. ✓
Check the lower: $f(0.268) = 2(0.0718)/(1.0718) = 0.134 = 0.5(0.268)$. ✓

Signs of $\dot Y$: $\dot Y(0.1) = 2(0.01)/1.01 - 0.05 = -0.030$; $\dot Y(1) = 1 - 0.5 = +0.5$; $\dot Y(5) = 2(25)/26 - 2.5 = -0.577$.

$$Y=0 \ \textbf{stable (OFF)}, \qquad Y=0.268\ \textbf{unstable (threshold)}, \qquad Y=3.732\ \textbf{stable (ON)}.$$

**(c)** $0.6 > 0.268$, so that cell is past the threshold: it climbs to $Y = 3.732$ and **stays there permanently** after the signal ends. $0.15 < 0.268$: it falls back to $Y=0$ and **retains no memory of the pulse**. Two genetically identical cells given different transient doses of the same signal end up in permanently different states — cell-fate commitment in one line of algebra.

**P3 (a)** Non-zero fixed points satisfy $\beta Y^{n}/(K^n+Y^n) = \alpha Y$, i.e.

$$\beta = h(Y) \equiv \alpha\,\frac{K^{n}+Y^{n}}{Y^{n-1}} = \alpha\left(K^{n}Y^{1-n} + Y\right).$$

So the number of positive fixed points is the number of times the horizontal line $\beta$ meets $h$. Differentiate:

$$h'(Y) = \alpha\left[(1-n)K^{n}Y^{-n} + 1\right] = 0 \;\Longrightarrow\; Y^{n} = (n-1)K^{n} \;\Longrightarrow\; Y^{*} = K(n-1)^{1/n},$$

$$h''(Y) = \alpha\,n(n-1)K^{n}Y^{-n-1} > 0 \ \text{ for } n>1,$$

so $h$ is convex with a single minimum: the line meets it twice exactly when $\beta > h(Y^{*})$. Evaluate:

$$h(Y^{*}) = \alpha K\left[(n-1)^{-(n-1)/n} + (n-1)^{1/n}\right] = \alpha K (n-1)^{-(n-1)/n}\left[1 + (n-1)\right] = \alpha K\,\frac{n}{(n-1)^{(n-1)/n}} . \;\blacksquare$$

| $n$ | $\beta_c/\alpha K$ |
|---|---|
| 2 | $2/1 = \mathbf{2.000}$ |
| 4 | $4/3^{3/4} = 4/2.2795 = \mathbf{1.755}$ |
| 8 | $8/7^{7/8} = 8/5.489 = \mathbf{1.457}$ |
| $\to\infty$ | $\to \mathbf{1}$ |

(The $n=2$ entry reproduces $\beta > 2\alpha K$ from the body. ✓ The formula is valid only for $n>1$; at $n=1$ the minimum migrates to $Y^*=0$, the two roots merge into the origin, and the OFF state stops being stable — consistent with the body's proof that $n=1$ is never bistable.)

**(b)** **Steeper promoters make bistability cheaper.** At $n \to \infty$ the requirement collapses to $\beta > \alpha K$, which is just "the ON state $\beta/\alpha$ must lie above the threshold $K$" — obvious for a perfect step function. Finite $n$ costs you a premium over that floor, and the premium is 100 percent at $n=2$ but only 46 percent at $n=8$. **Cooperativity is what makes a switch affordable**, which is the design reason [1.4](01-04-cooperativity-hill-ultrasensitivity.md) mattered.

**(c)** $$t_{1/2} = \frac{\ln 2}{\alpha(1-\phi)} \to \infty, \qquad F = \frac{1}{1-\phi} \to \infty, \qquad \frac{F}{t_{1/2}} = \frac{\alpha}{\ln 2} = \text{const}.$$

Both diverge as $(1-\phi)^{-1}$, in lockstep.

**What a control engineer calls it: the closed-loop pole $-\alpha(1-\phi)$ is being driven to the origin by increasing loop gain.** The system's transfer function is first-order with pole at $-\alpha_{\text{eff}}$ ([control-systems 1.4](../../control-systems/lessons/01-04-transfer-functions-poles-zeros.md)); positive feedback walks that pole rightward along the real axis, and at $\phi = 1$ it hits zero and crosses into the right half-plane — instability. A dynamicist calls the same thing **critical slowing down** at a bifurcation, and the divergence of both the relaxation time and the variance is the classic **early-warning signature** of an approaching tipping point, used in ecology and climate as well as in cells. What actually lies past $\phi=1$ is not an infinitely noisy single state but two stable states — the subject of [3.2](03-02-bistability-toggle-switch.md).

</details>

## Flashback

**From Lesson 1.3 (Michaelis–Menten & the QSSA):** An enzyme has $k_1 = 10\ \mu\text{M}^{-1}\text{s}^{-1}$, $k_{-1} = 40\ \text{s}^{-1}$, $k_2 = 60\ \text{s}^{-1}$. (a) Compute $K_M$ and $K_d$. (b) With total enzyme $E_T = 0.01\ \mu\text{M}$ and substrate $S = 30\ \mu\text{M}$, give the rate and check the QSSA validity condition. (c) A colleague fits a hyperbola to the data, reads off the half-maximal constant, and calls it the dissociation constant of the enzyme–substrate complex. What is wrong, and by how much here?

<details>
<summary>Solution</summary>

**(a)** $$K_M = \frac{k_{-1}+k_2}{k_1} = \frac{40+60}{10} = \mathbf{10\ \mu\text{M}}, \qquad K_d = \frac{k_{-1}}{k_1} = \frac{40}{10} = \mathbf{4\ \mu\text{M}}.$$

**(b)** $$V_{\max} = k_2 E_T = 60(0.01) = 0.6\ \mu\text{M}\,\text{s}^{-1}, \qquad v = V_{\max}\frac{S}{K_M+S} = 0.6\cdot\frac{30}{40} = \mathbf{0.45\ \mu\text{M}\,\text{s}^{-1}}.$$

Validity condition: $E_T \ll K_M + S$. Here $0.01 \ll 40$, a ratio of $2.5\times10^{-4}$. **The QSSA is excellent.**

(Contrast a regime the cell really does inhabit: $E_T = 20\ \mu\text{M}$ with $S = 5\ \mu\text{M}$ gives $E_T/(K_M+S) = 20/15 = 1.33$, not small at all. There, a large fraction of the substrate is sequestered in complex, the free substrate driving the reaction is well below the total, and the MM rate law overestimates the flux — you simulate the full mass-action system instead.)

**(c)** **The half-maximal constant of a fitted hyperbola is $K_M$, not $K_d$, and the two coincide only in the rapid-equilibrium limit $k_2 \ll k_{-1}$.** That limit fails badly here: $k_2 = 60 > k_{-1} = 40$, so a bound substrate is *more* likely to be turned over than released, and

$$\frac{K_M}{K_d} = \frac{k_{-1}+k_2}{k_{-1}} = \frac{100}{40} = \mathbf{2.5}.$$

The colleague's "dissociation constant" is **2.5 times too large**, and the enzyme binds substrate 2.5-fold more tightly than reported. The deeper point from 1.3: QSSA and rapid equilibrium produce the *same* hyperbolic functional form with *different* constants, so **fitting a hyperbola tells you the shape of the rate law and nothing about the mechanism behind it.** Distinguishing them needs pre-steady-state kinetics or independent binding measurements.

</details>

## Connections

- **Backward:** the whole lesson is [2.2](02-02-negative-autoregulation.md) with $f' > 0$ instead of $f' < 0$; the baseline $t_{1/2} = \ln 2/\alpha$ and the input-function formalism are [2.1](02-01-input-functions-promoter-logic.md)'s; the requirement $n>1$ is what [1.4](01-04-cooperativity-hill-ultrasensitivity.md) built, and [biophysics 2.4](../../biophysics/lessons/02-04-cooperativity-allostery.md) supplies the binding mechanism that delivers it. [molecular-cell-biology 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md) is the qualitative version of this story with molecules attached.
- **Forward:** [3.2](03-02-bistability-toggle-switch.md) takes the graphical criterion into two variables and supplies the bifurcation and the hysteresis loop; [3.4](03-04-oscillations-repressilator-hopf.md) reuses "bistable switch plus slow negative feedback" as a relaxation oscillator; [4.3](04-03-stochastic-gene-expression.md) replaces the linearized Fano factor with the master equation and explains bimodality properly; [2.4](02-04-feed-forward-loop.md) leaves autoregulation behind for three-node motifs.
- **Sideways:** $\alpha_{\text{eff}} = \alpha(1-\phi)$ is a closed-loop pole moving under loop gain ([control-systems 1.4](../../control-systems/lessons/01-04-transfer-functions-poles-zeros.md), [2.1](../../control-systems/lessons/02-01-first-order-response.md)), and the gain–bandwidth identity is the feedback-amplifier result in genetic clothing; one-dimensional graphical stability is [dynamical-systems 1.1](../../dynamical-systems/lessons/01-01-flows-on-the-line.md), and the transition at $\phi=1$ is the saddle-node of [dynamical-systems 3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md).
