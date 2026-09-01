# Systems Biology · Lesson 2.1: Modeling transcription — input functions & logic

> ⏱ ~15 min · Module 2: Gene-regulatory networks & motifs · Builds on: [1.4](01-04-cooperativity-hill-ultrasensitivity.md), [1.2](01-02-mass-action-rate-odes.md) · Unlocks: [2.2](02-02-negative-autoregulation.md) (negative autoregulation)

## Why this matters

Module 1 built nonlinear response curves out of chemistry. Module 2 spends them. The move that starts it is deceptively small: **stop thinking of a gene as a stretch of DNA and start thinking of it as a device with an input–output function.** Feed it a transcription-factor concentration, get a production rate. Everything downstream — motifs, delays, switches, clocks — is composition of these devices.

[molecular-cell-biology 4.2](../../molecular-cell-biology/lessons/04-02-eukaryotic-transcription-machine.md) owns the machinery: polymerase, mediator, general factors, the chemistry of initiation. **None of that appears here.** A promoter is a function; the machinery is why the function has the shape it does.

The payoff arrives within a page and it is the most useful single number in the module. A regulated gene approaches its new level with a half-time of $\ln 2/\alpha$, where $\alpha$ is the *removal* rate — **and this is completely independent of how hard the promoter is driving.** A cell cannot make a stable protein respond faster by making more of it. That constraint is the reason [2.2](02-02-negative-autoregulation.md) exists.

## The idea

A gene under regulation does two things at once: it makes protein at a rate set by whatever regulators are bound, and it loses protein by degradation and by dilution as the cell grows. Level is the balance of the two.

**The first thing to notice is that the two halves have completely different jobs.** Production sets *where* the protein level ends up. Removal sets *how fast* it gets there. They do not trade off — they are answers to different questions, and confusing them is the standard beginner error.

The intuition for the response-time result: think of filling a bucket with a hole in it. Turn the tap up and the water settles at a higher level, because the hole leaks faster when the water is deeper. But the *fraction* of the way to the new level you have travelled after a given time depends only on how big the hole is. Doubling the tap doubles both the inflow and the eventual depth, and the two doublings cancel exactly.

**Why "instantaneous" input function is legitimate at all** is a timescale-separation argument, the move from [1.1](01-01-systems-view-of-the-cell.md). A transcription factor binds and unbinds its operator in seconds; protein levels change over tens of minutes. The ratio is roughly $10^{3}$, so on the timescale we care about the promoter is always at binding equilibrium and its occupancy is a *function* of the current regulator concentration, not a dynamical variable of its own. **That is what licenses writing $f(X(t))$ instead of tracking bound and unbound promoter states.** It is the same reduction that gave the Michaelis–Menten law in [1.3](01-03-michaelis-menten-qssa.md).

## The formal version

**The regulated gene.** Let $Y$ be the concentration (or copy number) of the protein product, $X$ the concentration of its regulator, $f$ the **input function** in units of concentration per time, and $\alpha$ the total first-order removal rate in units of inverse time:

$$\frac{dY}{dt} = f(X) - \alpha Y$$

*In words: level changes at the production rate the promoter dictates, minus a loss proportional to how much is already there.*

The input function is a Hill function from [1.4](01-04-cooperativity-hill-ultrasensitivity.md). For an activator with maximal rate $\beta$, half-maximal input $K$ and Hill coefficient $n$:

$$f(X) = \beta\,\frac{X^{n}}{K^{n}+X^{n}}, \qquad \text{and for a repressor}\qquad f(X) = \frac{\beta}{1+(X/K)^{n}}$$

**The response to a step.** Hold $X$ constant so $f(X) = \beta$ is a constant, and solve the linear ODE from $Y(0) = Y_0$:

$$\boxed{\;Y(t) = \frac{\beta}{\alpha} + \left(Y_0 - \frac{\beta}{\alpha}\right)e^{-\alpha t}\;}$$

Two readings come straight out. The **steady state**, setting $\dot Y = 0$:

$$Y_{st} = \frac{\beta}{\alpha}$$

*In words: level is production divided by removal — a ratio, so it is raised equally by making more or by degrading less.*

And the **response time**. Define $t_{1/2}$ as the time to close half the gap between $Y_0$ and $Y_{st}$. From the boxed solution, the gap is $(Y_0 - Y_{st})e^{-\alpha t}$, so:

$$e^{-\alpha t_{1/2}} = \tfrac12 \quad\Longrightarrow\quad \boxed{\;t_{1/2} = \frac{\ln 2}{\alpha}\;}$$

**$\beta$ has vanished, and so has $Y_0$.** *In words: the fractional approach to steady state is governed by the removal rate alone — not by the production rate, not by the step size, not by where you started.* Doubling $\beta$ doubles $Y_{st}$ and leaves $t_{1/2}$ untouched. That is panel (b) of the figure, and it is the module's load-bearing fact.

**Where $\alpha$ comes from.** Removal has two channels, and they are *both* first-order in $Y$:

$$\alpha = \alpha_{\text{deg}} + \alpha_{\text{dil}}, \qquad \alpha_{\text{dil}} = \frac{\ln 2}{\tau_{\text{cell}}}$$

with $\tau_{\text{cell}}$ the cell's doubling time. Dilution is first-order because a growing cell's volume rises exponentially: even with zero degradation, concentration falls as the same molecules are spread through more cytoplasm. Writing each channel as its own half-life $t_{\text{deg}} = \ln 2/\alpha_{\text{deg}}$ and $t_{\text{dil}} = \tau_{\text{cell}}$:

$$\boxed{\;\frac{1}{t_{1/2}} = \frac{1}{t_{\text{deg}}} + \frac{1}{t_{\text{dil}}}\;}$$

*In words: half-lives combine reciprocally, so the faster channel dominates — exactly like resistors in parallel.*

**The consequence for bacteria is severe.** Most *E. coli* proteins are not actively degraded, so $\alpha \approx \alpha_{\text{dil}}$ and

$$t_{1/2} \approx \tau_{\text{cell}}.$$

**A stable bacterial protein takes one full generation to reach half its new level.** The cell's transcriptional response time is welded to its growth rate. Every trick in Module 2 for going faster — active degradation, negative autoregulation ([2.2](02-02-negative-autoregulation.md)), incoherent feed-forward ([2.5](02-05-incoherent-ffl-temporal-programs.md)) — exists to beat this bound.

**Basal expression and dynamic range.** Real promoters leak. With basal rate $\beta_0 > 0$ and maximal $\beta_{\max}$:

$$f(X) = \beta_0 + (\beta_{\max}-\beta_0)\,\frac{X^{n}}{K^{n}+X^{n}}, \qquad D \equiv \frac{\beta_{\max}}{\beta_0}$$

$D$ is the **dynamic range**, and since $Y_{st} = f/\alpha$ scales both ends by the same $\alpha$, the dynamic range in protein equals the dynamic range in promoter activity. The *lac* promoter reaches $D \approx 10^{3}$; many promoters manage only 10 to 50, and **leakiness, not the regulator, usually caps what a circuit can do.**

**Two regulators: promoter logic.** Write $h_X = X^{n}/(K_X^{n}+X^{n})$ for the fraction of the time $X$'s site is productively occupied, likewise $h_Y$. Three standard forms:

| Gate | Input function | Meaning |
|---|---|---|
| **AND** | $f = \beta\, h_X h_Y$ | both sites must be occupied simultaneously |
| **OR** | $f = \beta\,\bigl(h_X + h_Y - h_X h_Y\bigr)$ | either suffices; the product term avoids double-counting |
| **SUM** | $f = \beta_X h_X + \beta_Y h_Y$ | independent additive contributions |

*In words: AND is a product because two independent events must co-occur; OR is one-minus-the-probability-that-neither-happened.*

**The Boolean idealization is a limit, not a description.** As $n \to \infty$ each $h$ becomes a step $\theta(X-K)$ and the surfaces collapse to genuine truth tables — panel (c), right. At real Hill coefficients of 1 to 3 the surface is a smooth graded hill, and **most measured two-input promoters sit somewhere between AND and OR rather than at either corner.** Treat gate names as labels for regions of a continuum. The general statement is that $f: \mathbb{R}_{\ge 0}^{2} \to \mathbb{R}_{\ge 0}$ can be any surface monotone in each argument, and the thermodynamic model of promoter occupancy — a ratio of Boltzmann weights over promoter states, [biophysics 2.3](../../biophysics/lessons/02-03-ligand-binding-occupancy.md) — generates that whole family.

**Where the parameters come from.** $\alpha$: block production and watch the decay, or read $\alpha_{\text{dil}}$ off the growth rate. $K$ and $n$: titrate an inducer across a gradient, measure a fluorescent reporter at steady state, fit the Hill form. $\beta$: from $\beta = \alpha Y_{st}$ at saturation. **Note what the standard dose–response experiment actually measures**: it reports $Y_{st}(X) = f(X)/\alpha$, so it recovers $f$ only up to the factor $\alpha$ — and if $\alpha$ shifts with growth condition, the same promoter yields a different curve.

**The transcription network as a graph.** Collect every gene as a node and draw a directed edge $X \to Z$ whenever $X$'s protein regulates $Z$'s promoter, signed $+$ for activation and $-$ for repression. The *E. coli* network has a few hundred regulators controlling a couple of thousand genes, and its structure is lopsided: **out-degree is long-tailed** (a handful of global regulators like CRP hit hundreds of targets) while **in-degree is narrow** (most genes read one to three inputs). Directed cycles other than self-loops are almost absent.

And then the observation the rest of the module answers: **counted against randomized networks that preserve every node's degree, a few three-node subgraphs appear far more often than chance allows.** Those are the **network motifs**. [2.2](02-02-negative-autoregulation.md) makes the counting argument precise and starts on the first one.

## Picture

![Three panels. Panel a plots a Hill input function against activator concentration, with the half-maximal point K marked on the curve and the maximal rate beta marked as a dashed asymptote. Panel b plots protein level against time after an input step for two different production rates; both curves reach half of their own plateau at exactly the same time, marked as the natural log of 2 divided by alpha, even though one plateau is twice as high as the other. Panel c shows a two-input promoter as three shaded grids, an AND gate and an OR gate at Hill coefficient 2 and the Boolean limit of the AND gate, with darker cells meaning higher output.](assets/02-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — response time, and what actually speeds it up).** An *E. coli* culture doubles every 30 min. A stably folded reporter protein is induced by a step of activator at $t=0$ from a starting level of zero, with $\beta$ set so that $Y_{st} = 1000$ molecules per cell. (a) Find $\alpha$, $t_{1/2}$ and the time to reach 90 percent of steady state. (b) The strain is re-engineered with a stronger ribosome binding site that doubles $\beta$. What changes? (c) The protein is instead tagged for active degradation with a 6 min half-life. Now what? (d) A downstream promoter fires when $Y$ crosses a *fixed* threshold of 200 molecules. Compute that crossing time at $\beta$ and at $2\beta$, and reconcile the answer with (b).

**(a)** With no degradation, removal is dilution alone:

$$\alpha = \frac{\ln 2}{\tau_{\text{cell}}} = \frac{0.693}{30\ \text{min}} = 0.0231\ \text{min}^{-1}, \qquad t_{1/2} = \frac{\ln 2}{\alpha} = \mathbf{30\ \text{min}}.$$

The response half-time equals the generation time exactly — as it must, since dilution *is* the generation clock. For 90 percent, set $1 - e^{-\alpha t} = 0.9$:

$$t_{90} = \frac{\ln 10}{\alpha} = \frac{2.303}{0.0231} = \mathbf{99.7\ \text{min}} \approx 3.3\,t_{1/2}.$$

**(b)** $Y_{st}$ doubles to 2000 molecules. $t_{1/2}$ is **unchanged at 30 min**, and so is $t_{90}$. Nothing about the timing moves, because $\alpha$ did not move.

**(c)** Now the two removal channels combine reciprocally:

$$\frac{1}{t_{1/2}} = \frac{1}{6\ \text{min}} + \frac{1}{30\ \text{min}} = 0.1667 + 0.0333 = 0.200\ \text{min}^{-1} \;\Longrightarrow\; t_{1/2} = \mathbf{5.0\ \text{min}}.$$

**A sixfold speedup, and it cost the cell its protein.** The steady state fell by the same factor 6 (to about 167 molecules), so holding the old level requires burning six times the synthesis flux, continuously. **Speed is bought with amino acids and ATP** — this is the trade [2.2](02-02-negative-autoregulation.md) finds a way around.

**(d)** Time to cross a fixed absolute level $L$, from the boxed solution with $Y_0=0$:

$$L = Y_{st}\left(1-e^{-\alpha t}\right) \;\Longrightarrow\; t = -\frac{1}{\alpha}\ln\!\left(1 - \frac{L}{Y_{st}}\right).$$

At $Y_{st}=1000$, $L=200$: $t = -\ln(0.8)/0.0231 = 0.2231/0.0231 = \mathbf{9.7\ \text{min}}$.
At $Y_{st}=2000$, $L=200$: $t = -\ln(0.9)/0.0231 = 0.1054/0.0231 = \mathbf{4.6\ \text{min}}$ — **2.1 times faster.**

**Both statements are true and they are not in conflict.** Doubling $\beta$ does not change how fast $Y$ approaches *its own* steady state, but it does raise the whole trajectory, so a *fixed* downstream threshold is crossed sooner. **Relative timing is $\beta$-independent; absolute threshold-crossing is not.** Keep the formula in (d): it is exactly the delay $t_{\text{ON}}$ that makes the coherent feed-forward loop a persistence detector in [2.4](02-04-feed-forward-loop.md).

**Example 2 (why you'd care — the *lac* promoter as a leaky AND gate).** *lacZYA* fires only when lactose is present *and* glucose is absent: allolactose $A$ relieves LacI repression, and low glucose raises cAMP so that cAMP-CRP activates. Model both arms with $n=2$ Hill terms and AND logic, $f = \beta\,h_C h_A$, where $h_C$ is cAMP-CRP activation and $h_A$ is derepression. Take "high" to mean 5 times the relevant $K$; "low glucose" therefore means $C = 5K_C$ and "high glucose" $C = 0.2K_C$; lactose present means $A = 5K_A$, absent $A = 0.1K_A$. (a) Tabulate the four conditions. (b) Add 0.1 percent basal leak and recompute the dynamic range. (c) Convert to molecules with $\alpha = 0.0231\ \text{min}^{-1}$ and $\beta/\alpha = 1000$.

**(a)** With $h(x) = x^2/(1+x^2)$ in units of $K$: $h(5) = 25/26 = 0.962$, $h(0.2) = 0.04/1.04 = 0.0385$, $h(0.1) = 0.01/1.01 = 0.0099$.

| Glucose | Lactose | $h_C$ | $h_A$ | $f/\beta = h_C h_A$ |
|---|---|---|---|---|
| high | absent | 0.0385 | 0.0099 | $3.81\times10^{-4}$ |
| high | present | 0.0385 | 0.962 | $0.0370$ |
| low | absent | 0.962 | 0.0099 | $0.00952$ |
| **low** | **present** | 0.962 | 0.962 | $\mathbf{0.925}$ |

The gate works: the ON corner is **25 times** the best single-input condition and **2430 times** the OFF corner. **Note that neither input alone gets past 4 percent of maximum** — that is what "AND" buys, and it is why a strong excess of one signal cannot substitute for the other (compare P2).

**(b)** Add $\beta_0 = 0.001\beta$ to every entry. ON becomes $0.001+0.925 = 0.926$; OFF becomes $0.001+0.00038 = 0.00138$:

$$D = \frac{0.926}{0.00138} = \mathbf{670},$$

down from 2430. **The leak, not the logic, now sets the dynamic range** — and this is the general situation. A promoter engineered with a perfect gate and a 1 percent leak cannot exceed a hundredfold range no matter how cooperative its regulators are.

**(c)** $Y_{st} = f/\alpha$, so with $\beta/\alpha = 1000$ molecules: **926 molecules in the ON state, 1.4 in the OFF state**, and — the point of the lesson — **both are reached with the same $t_{1/2} = 30$ min.** Turning the gate on changes the destination, never the schedule. The genetics of this operon, including why CRP and LacI act where they do, is [genetics 3.4](../../genetics/lessons/03-04-prokaryotic-regulation-operon.md).

## Watch out

- **You might think a cell speeds up a response by transcribing harder.** For approach to *its own* steady state it cannot: $t_{1/2} = \ln 2/\alpha$ contains no $\beta$. The only levers are degradation, dilution, and circuit topology. But be precise — as Example 1(d) shows, raising $\beta$ *does* pull forward the crossing of a **fixed absolute** threshold, which is a different question.
- **You might add half-lives.** They combine reciprocally, $1/t_{1/2} = 1/t_{\text{deg}} + 1/t_{\text{dil}}$, so the *shorter* one dominates. A protein with a 6 min degradation half-life in a cell doubling every 30 min has a 5 min response time, not 36 or 18.
- **You might forget dilution entirely.** For most bacterial proteins it is the *only* removal channel, which means **response time is a property of the growth medium as much as of the gene.** The same construct in rich medium and in minimal medium has different dynamics.
- **You might read a measured dose–response curve as $f(X)$.** It is $f(X)/\alpha$. The shape (hence $K$ and $n$) is right; the vertical scale is not, and it shifts whenever growth rate does.
- **You might take AND and OR literally.** They are the $n\to\infty$ corners of a continuum of graded surfaces. Real promoters interpolate, and a promoter measured at four corners can be labelled "AND" while behaving nothing like a gate in between.
- **You might treat $K$ as a property of the transcription factor alone.** It is a property of the factor *and* its binding site; the same regulator has different $K$ at different promoters, and [2.5](02-05-incoherent-ffl-temporal-programs.md) turns exactly that spread into a temporal program.

## One-liner

> A regulated gene is a Hill function feeding a leaky bucket: the promoter decides where the level lands, the removal rate alone decides how fast it gets there — so $Y_{st} = \beta/\alpha$ but $t_{1/2} = \ln 2/\alpha$, and no amount of extra transcription buys speed.

## Problems

**P1 (🟢)** A mammalian transcription factor has a protein half-life of 4 h in cells that double every 20 h. (a) Compute $t_{1/2}$ and $\alpha$ for its response to an input step. (b) A drug doubles the transcription rate of its gene. Give the new steady state and the new response time. (c) You need to halve the response time without touching transcription. What protein half-life is required?

**P2 (🟡)** A promoter reads two activators, both with $n=2$ and $K=1$ in arbitrary units. Compute the normalized output at $(X,Y) = (2,2)$, $(2,0.5)$ and $(4,0.25)$ for (a) AND logic and (b) OR logic. (c) In one sentence, say which gate implements "either signal suffices" and quantify how differently the two gates treat a large excess of $X$ paired with a scarce $Y$.

**P3 (🔴, bridges to `control-systems` and forward to 2.2)** A bacterium doubling every 50 min must mount a stress response — reaching half its new protein level within 5 min — using a stable protein under simple regulation. (a) Show the specification is impossible as stated, and say what the actual half-time and 63 percent time are. (b) Give the degradation half-life that would meet the spec. (c) State the metabolic cost of that route quantitatively, assuming the same steady-state level must be maintained. (d) Name the two escape routes real cells use instead, one of which is [2.2](02-02-negative-autoregulation.md)'s subject.

<details>
<summary>Solutions</summary>

**P1 (a)** Combine the channels reciprocally:

$$\frac{1}{t_{1/2}} = \frac{1}{4\ \text{h}} + \frac{1}{20\ \text{h}} = 0.25 + 0.05 = 0.30\ \text{h}^{-1} \;\Longrightarrow\; t_{1/2} = \mathbf{3.33\ \text{h}} = 3\ \text{h}\ 20\ \text{min}.$$

$$\alpha = \frac{\ln 2}{t_{1/2}} = \frac{0.693}{3.33} = \mathbf{0.208\ \text{h}^{-1}}.$$

Note that degradation dominates here (0.25 versus 0.05), the opposite of the bacterial case — **mammalian cells grow slowly enough that they must degrade actively to have any transcriptional dynamics at all.**

**(b)** $Y_{st} = \beta/\alpha$ **doubles**. $t_{1/2}$ is **unchanged at 3.33 h**, because $\alpha$ was untouched.

**(c)** Halving $t_{1/2}$ to 1.67 h means $1/t_{1/2} = 0.60\ \text{h}^{-1}$. Dilution still supplies $0.05$, so

$$\frac{1}{t_{\text{deg}}} = 0.60 - 0.05 = 0.55\ \text{h}^{-1} \;\Longrightarrow\; t_{\text{deg}} = \mathbf{1.82\ \text{h}}.$$

Cutting the protein half-life from 4 h to about 1 h 49 min. And note the side effect: $\alpha$ doubled, so $Y_{st}$ **halved** — you would have to double $\beta$ as well just to stand still.

**P2** With $h(x) = x^2/(1+x^2)$: $h(2) = 0.800$, $h(0.5) = 0.200$, $h(4) = 16/17 = 0.941$, $h(0.25) = 0.0625/1.0625 = 0.0588$.

| $(X,Y)$ | $h_X$ | $h_Y$ | **(a) AND** $=h_Xh_Y$ | **(b) OR** $=h_X+h_Y-h_Xh_Y$ |
|---|---|---|---|---|
| $(2,2)$ | 0.800 | 0.800 | **0.640** | **0.960** |
| $(2,0.5)$ | 0.800 | 0.200 | **0.160** | **0.840** |
| $(4,0.25)$ | 0.941 | 0.0588 | **0.055** | **0.945** |

**(c)** **OR** implements "either signal suffices." Going from $(2,2)$ to $(4,0.25)$ — doubling $X$ while cutting $Y$ eightfold — collapses the AND gate **11.6-fold** ($0.640 \to 0.055$) while the OR gate barely moves, actually staying within 2 percent of its previous value ($0.960 \to 0.945$).

**The design reading: an AND gate is a coincidence detector that no excess of one input can spoof, and an OR gate is a redundancy device.** Which one a promoter implements tells you whether the cell is guarding against false positives or against the loss of one input channel.

**P3 (a)** With no degradation, $\alpha = \alpha_{\text{dil}} = \ln 2/50\ \text{min} = 0.01386\ \text{min}^{-1}$, so

$$t_{1/2} = \tau_{\text{cell}} = \mathbf{50\ \text{min}},$$

ten times the specification. The 63 percent time (one time constant) is $1/\alpha = 50/\ln 2 = \mathbf{72\ \text{min}}$. **Nothing done to the promoter changes either number**, since neither contains $\beta$: the spec asks for a change in $\alpha$ while offering only $\beta$.

**(b)** Require $t_{1/2} = 5$ min:

$$\frac{1}{t_{\text{deg}}} = \frac{1}{5} - \frac{1}{50} = 0.200 - 0.020 = 0.180\ \text{min}^{-1} \;\Longrightarrow\; t_{\text{deg}} = \mathbf{5.6\ \text{min}}.$$

A protein that must be actively destroyed within minutes of being made — in *E. coli*, an ssrA-type degradation tag routing it to ClpXP.

**(c)** $\alpha$ has risen from $\ln2/50$ to $\ln2/5$, a factor of **10**. To hold $Y_{st} = \beta/\alpha$ fixed, $\beta$ must rise tenfold:

$$\textbf{ten times the transcription, translation and amino-acid flux, sustained forever, purely to buy speed.}$$

That is the futile cycle: at steady state, ten times the protein is being synthesized and ten times destroyed, with the same amount present. For a highly expressed protein this is a real fraction of the cell's budget, which is why active degradation is reserved for regulators the cell genuinely needs to be fast — sigma factors, cell-cycle proteins, stress regulators — and not used everywhere.

**(d)** Two escapes:

1. **Don't use transcription.** The fastest cellular responses are post-translational: phosphorylate, allosterically activate, or release from sequestration a protein that is *already present*. There is no $\ln 2/\alpha$ to pay because no new protein is made — this is the whole point of signalling cascades ([molecular-cell-biology 2.2](../../molecular-cell-biology/lessons/02-02-second-messengers-amplification.md), and quantitatively in [4.4](04-04-signal-transduction-cascades.md)). Two-component systems in bacteria respond in seconds for exactly this reason.
2. **Change the topology.** [2.2](02-02-negative-autoregulation.md) shows that a gene repressing itself is driven hard while it is scarce and shuts down as it nears target, reaching steady state in a fraction of $\ln 2/\alpha$ **without any increase in $\alpha$ and without a futile cycle**. That is negative autoregulation, and it decouples response time from protein lifetime — the constraint this lesson just established.

**The control-theory framing**, which is the same content in another vocabulary: $\dot Y = \beta - \alpha Y$ is a first-order lag with time constant $\tau = 1/\alpha$ and DC gain $1/\alpha$. The pole sits at $s = -\alpha$, and **the pole location is what sets settling time while the input scaling sets only the final value** — see [control-systems 2.1](../../control-systems/lessons/02-01-first-order-response.md). Route (2) is feedback moving the pole; route (1) is not using this block at all.

</details>

## Flashback

**From Lesson 1.4 (cooperativity, Hill functions & ultrasensitivity):** You titrate an inducer against a fluorescent reporter and measure normalized steady-state output 0.10 at 2 µM inducer and 0.90 at 8 µM. (a) Fit $n$ and $K$ for a Hill activator. (b) A colleague concludes the activator has three binding sites. Respond. (c) The reporter gene has $\alpha = 0.02\ \text{min}^{-1}$ and a saturating steady state of 500 molecules. Give the steady state and the response half-time at 4 µM inducer, and at 8 µM.

<details>
<summary>Solution</summary>

**(a)** For $h = X^{n}/(K^{n}+X^{n})$, invert at the two levels. At $h = 0.1$: $X^n = K^n/9$, so $X_{10} = K\cdot 9^{-1/n}$. At $h=0.9$: $X^n = 9K^n$, so $X_{90} = K \cdot 9^{1/n}$. Two consequences:

$$\frac{X_{90}}{X_{10}} = 9^{2/n} = 81^{1/n}, \qquad \sqrt{X_{10}X_{90}} = K.$$

The measured 10-to-90 fold-span is $8/2 = 4$, so

$$81^{1/n} = 4 \;\Longrightarrow\; n = \frac{\ln 81}{\ln 4} = \frac{4.394}{1.386} = \mathbf{3.17}, \qquad K = \sqrt{2 \times 8} = \mathbf{4}\ \mu\text{M}.$$

Check: with $n=3.17$ and $K=4$, $h(2) = 2^{3.17}/(4^{3.17}+2^{3.17}) = 0.100$ and $h(8) = 0.900$. ✓

**(b)** **The conclusion is unwarranted, and 3.17 is not even an integer.** The Hill form is a phenomenological fit whose derivation assumes *infinitely* cooperative all-or-nothing binding; real binding is partially cooperative, which always pushes the fitted $n$ **below** the site count. So $n = 3.17$ is a lower bound on the number of sites at best — and it is not even that, because ultrasensitivity can be manufactured with no cooperative binding at all, by molecular titration, multistep requirements, or cascade composition. **$n$ is a measure of steepness, not a count of anything.**

**(c)** Both parts of the question have an answer that is independent of the other. Steady state scales with the input function:

$$X = 4\ \mu\text{M} = K: \quad h = 0.5, \quad Y_{st} = 0.5 \times 500 = \mathbf{250\ \text{molecules}}.$$
$$X = 8\ \mu\text{M}: \quad h = 0.9, \quad Y_{st} = \mathbf{450\ \text{molecules}}.$$

Response time is set by $\alpha$ alone:

$$t_{1/2} = \frac{\ln 2}{\alpha} = \frac{0.693}{0.02} = \mathbf{34.7\ \text{min at both inducer levels}}.$$

**Which is this lesson's whole point applied to 1.4's curve.** The Hill function is a map from input to *destination*; it says nothing about the schedule. Raising the inducer from 4 to 8 µM raises the final level by 80 percent and leaves the time course's shape identical — same exponential, same half-time, taller plateau.

</details>

## Connections

- **Backward:** the input function $f$ is [1.4](01-04-cooperativity-hill-ultrasensitivity.md)'s Hill function put to work; $\dot Y = f(X) - \alpha Y$ is [1.2](01-02-mass-action-rate-odes.md)'s rate-ODE recipe applied to a one-species system; treating promoter occupancy as instantaneous is [1.1](01-01-systems-view-of-the-cell.md)'s timescale separation, the same move that produced the QSSA in [1.3](01-03-michaelis-menten-qssa.md).
- **Forward:** $t_{1/2} = \ln 2/\alpha$ is the bound [2.2](02-02-negative-autoregulation.md) beats and [2.3](02-03-positive-autoregulation.md) makes worse; the threshold-crossing formula from Example 1(d) becomes the delay $t_{\text{ON}}$ of the coherent feed-forward loop in [2.4](02-04-feed-forward-loop.md); the spread of $K$ values across promoters becomes a temporal program in [2.5](02-05-incoherent-ffl-temporal-programs.md); the graph and the motif-counting question are taken up in [2.2](02-02-negative-autoregulation.md); low copy number makes $Y$ a random variable in [4.3](04-03-stochastic-gene-expression.md).
- **Sideways:** $\dot Y = \beta - \alpha Y$ is the first-order lag of [control-systems 2.1](../../control-systems/lessons/02-01-first-order-response.md) — pole at $-\alpha$, time constant $1/\alpha$, DC gain $1/\alpha$ — and the rest of Module 3 is what happens when you close a loop around it. The transcription machinery behind $f$ is [molecular-cell-biology 4.2](../../molecular-cell-biology/lessons/04-02-eukaryotic-transcription-machine.md); the classic bacterial gate is [genetics 3.4](../../genetics/lessons/03-04-prokaryotic-regulation-operon.md); the equilibrium-occupancy foundation for $h_X$ is [biophysics 2.3](../../biophysics/lessons/02-03-ligand-binding-occupancy.md).
