# Systems Biology · Lesson 4.5: A taste — synthetic biology & pattern formation

> ⏱ ~15 min · Module 4: Metabolic networks, noise & spatial pattern · Builds on: [4.4](04-04-signal-transduction-cascades.md), [3.4](03-04-oscillations-repressilator-hopf.md) · Unlocks: nothing — this is the last lesson of the course

## Why this matters

Everything since [1.1](01-01-systems-view-of-the-cell.md) has been an argument that **behaviour follows from topology**. That argument has two possible endings, and this lesson takes both.

The first is engineering: if the analysis is right, you should be able to **build** a circuit from the motifs and get the predicted behaviour out. In 2000, two labs did exactly that — a toggle switch and an oscillator, assembled from repressors, published within months of each other. They worked. **That is the strongest evidence the modelling enterprise has ever produced**, because a prediction that survives construction was not fitted to anything.

The second is prediction: if the analysis is right, you should be able to look at a system nobody designed and say what pattern it will make. Turing did this in 1952, before anyone knew what a gene was, and got an answer that still sounds wrong when you say it out loud: **two chemicals that react and diffuse will spontaneously arrange themselves into stripes, and diffusion — the process that destroys every other structure — is what creates this one.**

Both endings come with a bill, and the bill is where the real content is. The built circuits were noisy, fragile, and evolutionarily unstable; the patterns are hard to pin on specific molecules. Learning what broke is more useful than learning what worked.

## The idea

**Half one: a circuit is a device, so build one.**

[3.2](03-02-bistability-toggle-switch.md) analysed mutual repression and found bistability with hysteresis. Gardner, Cantor and Collins put two mutually repressing repressors on a plasmid in *E. coli*, flipped the switch one way with a chemical inducer and the other way with a heat pulse, and measured the hysteresis loop. [3.4](03-04-oscillations-repressilator-hopf.md) analysed a three-gene repression ring and found a Hopf bifurcation above a Hill-coefficient threshold. Elowitz and Leibler built that ring — the **repressilator** — and watched single cells blink for hours.

**Neither result was a fit.** The models were written first, the parts were chosen to satisfy the models' conditions, and the predicted behaviour appeared. That is what "predictive, not merely descriptive" means, and it is why network-motif modelling stopped being a hobby.

**Then the bill arrived.** The repressilator's period was around 150 minutes — longer than the cell's own division time, so a mother's phase was smeared across her daughters. Amplitudes varied wildly cell to cell, many cells did not oscillate visibly at all, and phase drifted within a few cycles. The toggle worked, but only inside a parameter window that had to be found by trying variants. Circuits burdened the host, and populations lost them within days. **The gap between a working model and a working organism is not a detail — it is the discipline.**

**Half two: a pattern is a circuit run in space.**

Take [2.5](02-05-incoherent-ffl-temporal-programs.md)'s single-input module — one regulator, several targets, different thresholds, so the targets fire in threshold order as the regulator rises. Now replace "as the regulator rises in time" with "as the morphogen falls with distance". You get the **French flag**: one smooth gradient, read against two thresholds, cut into three sharp domains. **The same trick, one dimension over.** No cell needs to know where it is; it only needs to know how much morphogen it sees.

**Turing's mechanism is the opposite in every respect and that is the point.** The French flag needs a pre-existing gradient — somebody has to put the source at one end. Turing needs nothing: start with a *uniform* field of two chemicals, sitting at a steady state that is perfectly stable when you stir it, and let them diffuse. Under a condition on the diffusion constants, the uniform state becomes unstable and the system organizes itself into a periodic pattern with a wavelength set by the chemistry.

**The intuition is local self-activation plus long-range inhibition.** An activator makes more of itself and also makes an inhibitor. A chance bump of activator grows — but the inhibitor it produces runs away faster than the activator does, and suppresses the neighbourhood. So the bump grows *and* forbids competitors within a radius. Bumps space themselves out, and the spacing is a property of the molecules, not of the tissue.

**Kill the differential diffusion and the mechanism dies.** If the inhibitor diffused at the same speed as the activator, it would stay where it was made and simply damp the bump locally. **The inhibitor must outrun the activator**, which is the condition, and which is why this is one of the few places in biology where a diffusion constant is a design parameter rather than a nuisance.

## The formal version

### Where the engineering abstraction leaks: retroactivity

Synthetic biology borrowed electronics' abstraction hierarchy — **parts** (promoters, RBSs, coding sequences) compose into **devices** (an inverter, a sensor), devices compose into **systems** — and with it the assumption that makes block diagrams legal in [control-systems 1.5](../../control-systems/lessons/01-05-block-diagram-algebra.md): **connecting a module's output to something downstream does not change the module.** In electronics that is enforced by impedance. In a cell nothing enforces it.

Let an upstream module produce a transcription factor $X$, with $\dot X = f(X) - \alpha X$ when it drives nothing. Now attach a downstream module carrying a total concentration $p_T$ of binding sites for $X$, with dissociation constant $K$, and let binding be fast compared with production and decay ([1.1](01-01-systems-view-of-the-cell.md)'s timescale separation). Write $C$ for the bound complex. Production and decay act on free $X$, so the conserved bookkeeping is on the *total*:

$$\frac{d}{dt}\left(X + C\right) = f(X) - \alpha X, \qquad C = \frac{p_T X}{K + X}.$$

Differentiate the second and substitute:

$$\boxed{\;\dot X = \frac{f(X) - \alpha X}{1 + R(X)}, \qquad R(X) = \frac{p_T K}{(K+X)^2}\;}$$

*In words: attaching a load divides the upstream module's entire dynamics by $1+R$ — it slows everything down without changing a single upstream parameter.* $R$ is the **retroactivity**. The steady state is untouched (the numerator still vanishes at the same $X$), but every rate is scaled, so response times, periods and phase relationships all move.

**Two consequences worth stating.** First, **plugging a GFP reporter into a circuit changes the circuit you are reporting on** — the measurement is part of the system. Second, $R$ is largest exactly where you would want to operate: $\partial R/\partial K \propto (X - K)$, so $R$ peaks at $K = X$, giving $R_{\max} = p_T/(4X)$. **A downstream module tuned to respond well to its input is the one that loads it hardest.**

### The French flag: a gradient read against thresholds

A morphogen made at a source, diffusing with constant $D$ and degraded first-order at rate $k$, reaches a steady profile satisfying $D\,M'' - kM = 0$ ([pdes 2.1](../../pdes/lessons/02-01-heat-diffusion-equations.md)), so

$$M(x) = M_0\,e^{-x/\lambda}, \qquad \lambda = \sqrt{D/k}.$$

*In words: the gradient is an exponential whose decay length is the geometric compromise between how fast the molecule spreads and how fast it is destroyed.* This is the **synthesis–diffusion–degradation** picture, and $\lambda$ is the only length in it.

A cell at position $x$ compares $M(x)$ against thresholds $\theta_1 > \theta_2$ and adopts one of three fates. The boundaries sit at

$$x_i = \lambda \ln\!\left(\frac{M_0}{\theta_i}\right).$$

**Now the honest part, which is the reason this model is taught and then immediately qualified.** Differentiate: $\delta x = \lambda\,\delta M/M$. *In words: a relative error in reading the concentration becomes an absolute error in position, amplified by the decay length.* A 10 percent readout error on a gradient with $\lambda = 100\ \mu\text{m}$ misplaces the boundary by $10\ \mu\text{m}$ — **one cell diameter** — and real gradients are noisier than that. Sharp boundaries in real embryos are not delivered by the gradient; they are delivered by **downstream circuits that sharpen a fuzzy input**, typically mutual repression between the two fates, which is [3.2](03-02-bistability-toggle-switch.md)'s toggle used as a spatial threshold detector.

### Turing: diffusion-driven instability

Two species, reaction plus diffusion on a line:

$$\partial_t u = f(u,v) + D_u\,\partial_x^2 u, \qquad \partial_t v = g(u,v) + D_v\,\partial_x^2 v .$$

Let $(u_0,v_0)$ be a spatially uniform steady state and $A = \begin{pmatrix} a & b \\ c & d\end{pmatrix}$ its Jacobian, $a = f_u$, $b = f_v$, $c = g_u$, $d = g_v$, all evaluated at $(u_0,v_0)$. Perturb with a single Fourier mode, amplitude $\propto e^{\sigma t}\cos(kx)$. Each mode sees the matrix $A - k^2 D$ with $D = \mathrm{diag}(D_u,D_v)$, so $\sigma$ solves

$$\sigma^2 + \sigma\big[(D_u+D_v)k^2 - \operatorname{tr}A\big] + h(k^2) = 0, \qquad h(k^2) = D_uD_v\,k^4 - (D_v a + D_u d)\,k^2 + \det A .$$

We want a state that is **stable to uniform perturbations but unstable to a band of wavenumbers**. That gives four conditions:

| # | Condition | What it says |
|---|---|---|
| 1 | $\operatorname{tr}A = a+d < 0$ | stable when well-stirred |
| 2 | $\det A = ad-bc > 0$ | stable when well-stirred |
| 3 | $D_v a + D_u d > 0$ | **differential diffusion**, the new requirement |
| 4 | $(D_v a + D_u d)^2 > 4 D_u D_v \det A$ | the instability actually reaches $h<0$ |

**Condition 3 is the whole story.** Since $a + d < 0$, condition 3 can only hold if $a$ and $d$ have opposite signs *and* the diffusion constants differ. Take $a>0$ (self-activating $u$) and $d<0$ (self-limiting $v$): condition 3 becomes $D_v/D_u > |d|/a$. *In words: the inhibitor must diffuse faster than the activator, and by a factor at least as large as the ratio of their self-feedback strengths.* Condition 4 is strictly stronger and gives the real threshold.

At the onset, $h$ has a double root, and the surviving mode is

$$k_c^2 = \frac{D_v a + D_u d}{2 D_u D_v} = \sqrt{\frac{\det A}{D_uD_v}}, \qquad \boxed{\;\lambda_c = \frac{2\pi}{k_c} = 2\pi\left(\frac{D_uD_v}{\det A}\right)^{1/4}\;}$$

*In words: the pattern picks its own wavelength out of the diffusion constants and the reaction rates — and nothing in that formula knows how big the tissue is.* **A larger tissue therefore gets more stripes, not wider ones**, which is the sharpest experimental signature the mechanism has, and also its most awkward problem, since real embryos of different sizes often *do* scale their patterns.

The linear analysis says a pattern starts; it does not say what it settles into. Which mode wins, whether you get spots or stripes, and how defects anneal are nonlinear questions — see [dynamical-systems 1.4](../../dynamical-systems/lessons/01-04-linearization-hartman-grobman.md) for exactly what linearization is and is not entitled to claim.

## Picture

![Panel a shows the French-flag model: an exponential morphogen gradient decaying with a 100 micrometre decay length across a 500 micrometre tissue, with two dashed readout thresholds at 20 and 5 nanomolar, and a tissue bar beneath cut into three sharp fate domains with boundaries at 161 and 300 micrometres. Panel b shows a Turing pattern: activator and inhibitor concentration profiles across space, in phase, with the inhibitor shallower and longer-ranged because it diffuses 4.5 times faster, and beneath them the resulting periodic stripe pattern with the 109 micrometre wavelength marked between two activator peaks.](assets/04-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — find the critical diffusion ratio and the wavelength).** An activator–inhibitor pair has, at its uniform steady state,

$$A = \begin{pmatrix} 1 & -1 \\ 2 & -1.5 \end{pmatrix} \ \text{min}^{-1}, \qquad D_u = 100\ \mu\text{m}^2\,\text{min}^{-1}.$$

(a) Confirm the well-stirred state is stable. (b) Find the critical $D_v$. (c) Find the pattern wavelength there. (d) What happens at $D_v = 200$?

**(a)** $$\operatorname{tr}A = 1 - 1.5 = -0.5 < 0 \ \checkmark, \qquad \det A = (1)(-1.5) - (-1)(2) = -1.5 + 2 = 0.5 > 0 \ \checkmark$$

So with diffusion switched off this is a stable node or spiral: **stir the beaker and nothing happens.** Note the sign structure — $a>0$ means $u$ activates itself, $c>0$ means $u$ makes $v$, $b<0$ means $v$ represses $u$. Local self-activation, and an inhibitor. Exactly the architecture the intuition asked for.

**(b)** Condition 3 needs $D_v(1) + 100(-1.5) > 0$, i.e. $D_v > 150$ — necessary but, as promised, not sufficient. Condition 4 at equality:

$$(D_v - 150)^2 = 4(100)(D_v)(0.5) = 200 D_v$$
$$D_v^2 - 300 D_v + 22500 = 200 D_v \;\Longrightarrow\; D_v^2 - 500 D_v + 22500 = 0$$
$$D_v = \frac{500 \pm \sqrt{250000 - 90000}}{2} = \frac{500 \pm 400}{2} = 450 \ \text{or} \ 50 .$$

Only $D_v = 450$ satisfies $D_v > 150$, so

$$\boxed{\;D_v^{\text{crit}} = 450\ \mu\text{m}^2\,\text{min}^{-1}, \qquad \frac{D_v}{D_u} = 4.5\;}$$

**The gap between 1.5 and 4.5 is worth noticing.** Condition 3 is the one everybody quotes ("the inhibitor diffuses faster"), and it is off by a factor of three here. The real requirement is condition 4, and in most published models the critical ratio lands somewhere between 3 and 20 — **which is precisely why finding a genuine Turing pair in a vertebrate is hard**, since two proteins of similar size in the same tissue do not differ tenfold in diffusivity without help.

**(c)** At threshold both expressions for $k_c^2$ must agree, which is a free check on the algebra:

$$k_c^2 = \frac{D_v a + D_u d}{2D_uD_v} = \frac{450 - 150}{2(100)(450)} = \frac{300}{90000} = \frac{1}{300}\ \mu\text{m}^{-2}$$
$$k_c^2 = \sqrt{\frac{\det A}{D_uD_v}} = \sqrt{\frac{0.5}{45000}} = \sqrt{1.111\times10^{-5}} = 3.333\times10^{-3} = \frac{1}{300}\ \checkmark$$

$$\lambda_c = \frac{2\pi}{k_c} = 2\pi\sqrt{300} = 2\pi(17.32) = \mathbf{108.8\ \mu\text{m}} .$$

About eleven cell diameters — the right order for hair-follicle and feather-bud spacing, which is not an accident of my choice of numbers so much as a statement about what diffusion constants and protein turnover rates actually are.

**(d)** At $D_v = 200$: condition 3 passes ($200 > 150$), but condition 4 gives

$$(200-150)^2 = 2500 \quad \text{versus} \quad 4(100)(200)(0.5) = 40000 .$$

$2500 \ll 40000$, so $h(k^2) > 0$ for every $k$ and **no mode grows: the field stays uniform.** A 2-fold diffusion difference is not enough; this system needs 4.5-fold. **"The inhibitor diffuses faster" is a slogan, not a criterion.**

**Example 2 (why you'd care — how precise is a French flag, and what fixes it).** A morphogen has $D = 10\ \mu\text{m}^2\,\text{s}^{-1}$ and degradation rate $k = 10^{-3}\ \text{s}^{-1}$; the source holds it at $M_0 = 100$ nM. Fates switch at $\theta_1 = 20$ nM and $\theta_2 = 5$ nM. (a) Where are the boundaries? (b) Cells read concentration to 10 percent. How sharp is the boundary? (c) What would fix it?

**(a)** $$\lambda = \sqrt{D/k} = \sqrt{\frac{10}{10^{-3}}} = \sqrt{10^4} = 100\ \mu\text{m}.$$

$$x_1 = 100\ln\!\left(\frac{100}{20}\right) = 100\ln 5 = \mathbf{160.9\ \mu\text{m}}, \qquad x_2 = 100\ln\!\left(\frac{100}{5}\right) = 100\ln 20 = \mathbf{299.6\ \mu\text{m}} .$$

Three domains, of widths 161, 139 and (to 500 µm) 200 µm. **One gradient, two numbers, three tissues** — this is why Wolpert's picture was so persuasive, and it is [2.5](02-05-incoherent-ffl-temporal-programs.md)'s threshold ordering with $x$ in place of $t$.

**(b)** $$\delta x = \lambda\,\frac{\delta M}{M} = 100 \times 0.10 = \mathbf{10\ \mu\text{m}} .$$

**And it is 10 µm at both boundaries**, because the exponential's relative slope is constant — the error does not grow with distance from the source, which is a genuinely nice property. But 10 µm is one cell diameter, so **the boundary is fuzzy by about a cell even before you add noise in production, in receptor number, or in the readout machinery** ([4.3](04-03-stochastic-gene-expression.md)), and real measurements of morphogen gradients show 10–30 percent cell-to-cell variation. Yet *Drosophila* segment boundaries are reproducible to better than one cell.

**(c)** **The gradient cannot be the answer, so the answer is downstream.** Three mechanisms, all of them things this course has already built:

1. **Mutual repression between the two fates.** Feed the noisy gradient readout into a toggle ([3.2](03-02-bistability-toggle-switch.md)). Cells near the boundary get pushed to one of two stable states, and the separatrix — not the threshold — becomes the boundary. Bistability converts a graded, noisy input into a committed, sharp output, and it is irreversible afterwards.
2. **Ultrasensitivity at the readout.** A high effective Hill coefficient ([1.4](01-04-cooperativity-hill-ultrasensitivity.md), or zero-order in the covalent cycle of [4.4](04-04-signal-transduction-cascades.md)) compresses the transition zone, though it cannot beat the noise, only steepen the average.
3. **Time-averaging.** Reading the concentration over a longer window cuts the noise as $1/\sqrt{T}$ — cheap, and it costs only patience.

**The general lesson, and the one to take out of the whole course:** positional information tells you the *input*, and the circuit downstream determines whether that input becomes a decision. **The gradient proposes; the network disposes.**

## Watch out

- **You might think a built circuit that works validates the model.** It validates the *topology*. The toggle and the repressilator both needed parts hunted down to satisfy the models' conditions — high cooperativity, matched degradation rates, balanced promoter strengths — and variants outside that window failed. **The model predicted which circuit could work; it did not predict that any assembly of the right shape would.**
- **You might think modules compose.** Retroactivity says otherwise: $\dot X$ is divided by $1 + R$, and $R$ peaks exactly when the downstream module is well matched to its input. **A part characterized alone is not characterized.** Fixes are real but costly — weak, abundant binding sites ($K \gg X$), lower copy number, or an explicit insulation stage (a fast amplifier under strong negative feedback, which is [2.2](02-02-negative-autoregulation.md)'s attenuation used as an impedance buffer).
- **You might think diffusion smooths things out.** It does — for one species. With two species and unequal diffusivities the uniform state can be *destabilized* by diffusion, which is genuinely paradoxical and is the whole reason Turing's paper is famous. The resolution: diffusion smooths each species toward its own neighbourhood average, and when the two averaging lengths differ, the reaction between them is no longer the reaction that was stable.
- **You might think a periodic biological pattern is evidence of a Turing mechanism.** It is not. Somite spacing comes from a clock-and-wavefront, not a Turing instability; many stripes are painted by pre-existing gradients read against thresholds. **The discriminating predictions are that a Turing wavelength is set by the molecules (so bigger tissue means more stripes) and that perturbing an inhibitor's diffusivity should change the spacing** — and the honest state of the field is that digit spacing, hair-follicle spacing, and some fish pigmentation patterns are strong candidates, while unambiguous molecular identification of an activator–inhibitor pair in a vertebrate has been genuinely hard to get.
- **You might think "the inhibitor diffuses faster" is the Turing condition.** It is condition 3, which is necessary. Condition 4 is what bites, and it typically demands a several-fold ratio, not a marginal one.
- **You might think evolution is neutral about your circuit.** It is not: it is actively hostile to anything that costs growth rate, and it has an enormous population and a fast generation time on its side. See P3.

## One-liner

> The toggle and the repressilator proved that motif analysis predicts rather than describes, and then proved that modularity, host burden and evolutionary stability are where the engineering actually lives; Turing proved that two chemicals with unequal diffusivities will build a pattern with a wavelength of their own choosing, so a bigger tissue gets more stripes rather than wider ones.

## Problems

**P1 (🟢)** A morphogen has $D = 20\ \mu\text{m}^2\,\text{s}^{-1}$ and is degraded at $k = 5\times10^{-4}\ \text{s}^{-1}$; the source holds it at $M_0 = 80$ nM. (a) Find the decay length $\lambda$. (b) Where is the fate boundary set by a threshold of 10 nM? (c) If cells read concentration with 20 percent error, how far does that boundary wander, and how many 10-µm cells is that?

**P2 (🟡, bridges to control theory)** You attach a fluorescent reporter to one node of a synthetic circuit. The reporter construct presents $p_T = 60$ nM of operator sites with dissociation constant $K = 5$ nM, and the circuit node sits at $X = 5$ nM. (a) Compute the retroactivity $R$ and the factor by which that node's dynamics slow. (b) The circuit is a repressilator with a 150-minute period, and only this one node is loaded. What do you expect to happen to the oscillation, and why is this worse than a uniform slowdown? (c) You must keep $p_T$ fixed. Show that $R$ is *maximal* at $K = X$, and state the design move that follows.

**P3 (🔴, bridges to evolution & ecology)** Your circuit imposes an 8 percent growth-rate cost. Loss-of-function mutants — a deleted promoter, a frameshift — are present at frequency $10^{-5}$ when you inoculate a continuous culture. (a) After how many generations are the circuit-free cells the majority? (b) Convert to hours and days at 40 minutes per generation. (c) You can either halve the burden or make circuit loss lethal. Compare the two, and say which lesson of this course the comparison illustrates.

<details>
<summary>Solutions</summary>

**P1 (a)** $$\lambda = \sqrt{\frac{D}{k}} = \sqrt{\frac{20}{5\times10^{-4}}} = \sqrt{40000} = \mathbf{200\ \mu\text{m}} .$$

Note the square root: to double the range of a gradient you must *quadruple* the diffusivity or quarter the degradation rate. Gradients are expensive to lengthen.

**(b)** $$x = \lambda\ln\!\left(\frac{M_0}{\theta}\right) = 200\ln\!\left(\frac{80}{10}\right) = 200\ln 8 = 200(2.0794) = \mathbf{415.9\ \mu\text{m}} .$$

**(c)** $$\delta x = \lambda\,\frac{\delta M}{M} = 200 \times 0.20 = \mathbf{40\ \mu\text{m}} = \textbf{4 cell diameters}.$$

**The comparison with Example 2 is the point.** There, $\lambda = 100\ \mu\text{m}$ and a 10 percent error gave 10 µm. Here the decay length is twice as long and the readout twice as sloppy, and the errors multiply: **a long, shallow gradient is a *less* precise ruler, not a more precise one**, because positional error is $\lambda$ times relative concentration error. A designer who lengthens a gradient to pattern a bigger tissue pays for it in boundary sharpness, and must recover the sharpness downstream.

**P2 (a)** $$R = \frac{p_T K}{(K+X)^2} = \frac{(60)(5)}{(5+5)^2} = \frac{300}{100} = \mathbf{3} .$$

$$\text{slowdown factor} = 1 + R = \mathbf{4} .$$

**Adding a reporter — a component whose entire purpose is to be passive — slows that node's dynamics fourfold.**

**(b)** The steady states are unchanged, so the *levels* look right; only the rates move. A uniform fourfold slowdown of all three nodes would simply stretch the period to about 600 minutes and leave the waveform intact. **Loading one node breaks the symmetry**, and the symmetry was load-bearing: [3.4](03-04-oscillations-repressilator-hopf.md)'s analysis put the three destabilized eigenvalues in a circulant structure that assumed identical nodes. With one node slow, the phase spacing is no longer 120 degrees, the amplitudes differ, and — since the Hopf condition involves the loop gain against the removal rates — the circuit can be pushed back across the bifurcation and **stop oscillating altogether**. So the reporter can abolish the very phenomenon it was installed to observe.

**(c)** Treat $R$ as a function of $K$ at fixed $p_T$ and $X$:

$$\frac{dR}{dK} = p_T\,\frac{(K+X)^2 - K\cdot 2(K+X)}{(K+X)^4} = p_T\,\frac{(K+X) - 2K}{(K+X)^3} = \frac{p_T\,(X-K)}{(K+X)^3} .$$

This is positive for $K < X$ and negative for $K > X$, so $R$ is maximal at $K = X$, where

$$R_{\max} = \frac{p_T X}{(2X)^2} = \frac{p_T}{4X} = \frac{60}{20} = 3 \ \checkmark$$

confirming that part (a) was sitting exactly on the worst case.

**The design move: push $K$ far above $X$.** For $K \gg X$, $R \to p_T/K$. At $K = 500$ nM: $R = (60)(500)/(505)^2 = 30000/255025 = 0.118$, a slowdown of only 1.12 — **a 25-fold reduction in loading from one parameter.** The cost is that weak sites need high $X$ to be occupied, so you trade load against sensitivity; that trade is why the field builds explicit **insulation devices** instead — a buffer stage with fast dynamics and strong negative feedback, which is the biological version of an op-amp follower and exactly the same job [control-systems 1.5](../../control-systems/lessons/01-05-block-diagram-algebra.md) silently assumes has already been done.

(Note $K < X$ is not an escape either: $R$ falls, but the sites are saturated and the downstream module has stopped responding to changes in $X$ at all.)

**P3 (a)** With a per-generation selective advantage $s = 0.08$ for the circuit-free mutant, the odds ratio grows exponentially:

$$\frac{q_t}{1-q_t} = \frac{q_0}{1-q_0}\,e^{st} \approx 10^{-5}e^{0.08t} .$$

Majority means odds $=1$:

$$e^{0.08t} = 10^{5} \;\Longrightarrow\; t = \frac{\ln 10^{5}}{0.08} = \frac{11.513}{0.08} = \mathbf{144\ \text{generations}} .$$

**(b)** $$144 \times 40\ \text{min} = 5760\ \text{min} = \mathbf{96\ \text{hours}} = \mathbf{4.0\ \text{days}} .$$

**Four days of continuous culture and your engineered population is mostly not engineered.** This is the single most under-appreciated fact about synthetic biology, and it is why industrial strains are evaluated over generations rather than over hours.

**(c)** **Halving the burden is a parametric fix and buys a linear gain.** Time to takeover scales as $\ln(1/q_0)/s$, so $s = 0.04$ gives 288 generations — 8 days instead of 4. Doubling the horizon is real (weaker promoters, chromosomal integration instead of a multicopy plasmid, removing degradation tags all help), but every such move also weakens the circuit, and no achievable reduction gets you to a month.

**Making loss lethal is a structural fix and changes the sign.** Couple the circuit to an essential function — put an essential gene under the circuit's control, or add a toxin–antitoxin addiction module — so that a cell losing the circuit has $s < 0$. Then circuit-free mutants are *purged* rather than enriched, and the population is stable indefinitely rather than for a computable number of days.

**The lesson this illustrates is [3.3](03-03-integral-control-exact-adaptation.md)'s.** A property you obtain by tuning parameters degrades when the parameters drift, and here the parameters are being actively driven by selection. A property you obtain from the *structure* of the loop does not. Integral feedback made adaptation exact by structure rather than by tuning; an addiction module makes circuit retention robust by structure rather than by tuning. **Same idea, and it is the most transferable thing in this course.**

*(A caveat from [evolution-ecology 1.4](../../evolution-ecology/lessons/01-04-drift-ne-gene-flow.md): a single mutant lineage still has to survive drift, and its establishment probability is only about $2s \approx 0.16$. That slows the first step, not the outcome — a chemostat at $10^9$ cells per mL generates loss-of-function mutants continuously, so establishment is essentially immediate and the deterministic calculation above is the right one.)*

</details>

## Flashback

**From Lesson 3.4 (oscillations: the repressilator & the Hopf bifurcation):** You want to build an oscillator, but the only repressors available to you are non-cooperative dimers with Hill coefficient $n = 2$ — below the three-gene ring's threshold. A colleague suggests using a **five**-gene repression ring instead. Model it as

$$\dot p_i = \frac{\beta}{1 + p_{i-1}^{\,n}} - p_i, \qquad i = 1,\dots,5 \ (\text{indices mod }5),$$

with a symmetric fixed point $p_i = p$ for all $i$.

(a) The Jacobian at the symmetric point is $J = -I - g\,P$, where $P$ is the cyclic shift matrix and $g$ is the loop gain. Show that $g = np^n/(1+p^n)$ and state the instability condition for a ring of $m$ genes. (b) Evaluate it for $m = 3$ and $m = 5$ and decide whether the colleague is right. (c) Find the smallest $\beta$ at which the five-ring oscillates with $n = 2$.

<details>
<summary>Solution</summary>

**(a)** The symmetric fixed point satisfies $\beta/(1+p^n) = p$, i.e. $\beta = p(1+p^n)$. Writing $f(p) = \beta/(1+p^n)$,

$$f'(p) = -\frac{\beta n p^{\,n-1}}{(1+p^n)^2} = -\frac{p(1+p^n)\,n p^{\,n-1}}{(1+p^n)^2} = -\frac{n p^n}{1+p^n} \equiv -g ,$$

where the middle step used $\beta = p(1+p^n)$ to eliminate $\beta$. So $g = np^n/(1+p^n) > 0$, and since each gene is repressed by exactly one predecessor and degraded at rate 1,

$$J = -I - g\,P .$$

$P$ is a cyclic permutation, so its eigenvalues are the $m$-th roots of unity $\omega_k = e^{2\pi i k/m}$, and

$$\lambda_k = -1 - g\,e^{2\pi i k / m}, \qquad \operatorname{Re}\lambda_k = -1 - g\cos\!\left(\frac{2\pi k}{m}\right).$$

Instability requires $\operatorname{Re}\lambda_k > 0$ for some $k$, i.e. $g\cos(2\pi k/m) < -1$. The easiest mode to destabilize is the one with the most negative cosine; for odd $m$ that is $k = (m\pm1)/2$, giving $\cos = -\cos(\pi/m)$. Hence

$$\boxed{\;g > \sec\!\left(\frac{\pi}{m}\right)\;}$$

and since those $k$ come in complex-conjugate pairs with $\operatorname{Im}\lambda_k \neq 0$, the crossing is a **Hopf bifurcation** — a limit cycle, not a new fixed point.

**(b)** $$m=3: \quad g > \sec 60^\circ = 2 . \qquad m = 5: \quad g > \sec 36^\circ = \frac{1}{0.80902} = 1.2361 .$$

Now the constraint that decides it: $g = n\theta$ where $\theta = p^n/(1+p^n) < 1$, so **$g < n$ always**. Therefore

$$m = 3 \ \text{needs}\ n > 2; \qquad m = 5 \ \text{needs}\ n > 1.236 .$$

**The colleague is right.** With $n = 2$ the three-ring can never oscillate — $g < 2$ strictly — but the five-ring only needs $g > 1.236$, which $n=2$ can supply. (And note the universal corollary: $\sec(\pi/m) > 1$ for every $m$, so $n = 1$ never oscillates on a ring of any length. **Non-cooperative repression cannot make a clock, no matter how many genes you chain.**)

**(c)** With $n = 2$, oscillation needs

$$g = \frac{2p^2}{1+p^2} > 1.2361 \;\Longrightarrow\; \frac{p^2}{1+p^2} > 0.61803 \;\Longrightarrow\; p^2 > \frac{0.61803}{0.38197} = 1.61803 \;\Longrightarrow\; p > 1.27202 .$$

Since $\beta = p(1+p^2)$ is increasing in $p$,

$$\beta_c = 1.27202\,(1 + 1.61803) = 1.27202 \times 2.61803 = \mathbf{3.33} .$$

(The golden ratio is not a coincidence: $\cos 36^\circ = \varphi/2$, so $\sec 36^\circ = 2/\varphi$ and the algebra inherits $\varphi = 1.618$.)

**The design reading, which is the point of this lesson:** *lengthening the ring buys you nonlinearity you could not get from the parts.* The price is that a longer ring has a longer period and more components to express, mis-tune and lose — five genes of burden instead of three, on a host that is already paying the bill P3 computes. **Real repressilator improvements went the other way**, keeping three genes and attacking the noise instead: lower copy number, no degradation tags, and a decoy "sponge" to buffer exactly the retroactivity this lesson derived.

</details>

## Connections

- **Backward:** this lesson is Module 2 and 3 handed back as hardware. The toggle is [3.2](03-02-bistability-toggle-switch.md), the repressilator is [3.4](03-04-oscillations-repressilator-hopf.md), the French flag is [2.5](02-05-incoherent-ffl-temporal-programs.md)'s threshold ordering rotated from time into space, retroactivity is [1.1](01-01-systems-view-of-the-cell.md)'s timescale separation plus [1.2](01-02-mass-action-rate-odes.md)'s conservation law, boundary sharpening is [1.4](01-04-cooperativity-hill-ultrasensitivity.md) and [4.4](04-04-signal-transduction-cascades.md), and the reason a built circuit is messier than a simulated one is [4.3](04-03-stochastic-gene-expression.md).
- **Sideways:** the Turing analysis is a linear stability calculation on a reaction–diffusion PDE — [pdes 2.1](../../pdes/lessons/02-01-heat-diffusion-equations.md) for the diffusion operator and [pdes 4.2](../../pdes/lessons/04-02-heat-equation-line-heat-kernel.md) for what a diffusion length means, [dynamical-systems 1.4](../../dynamical-systems/lessons/01-04-linearization-hartman-grobman.md) for the licence to linearize and [dynamical-systems 3.3](../../dynamical-systems/lessons/03-03-hopf-bifurcation.md) for the bifurcation vocabulary. Retroactivity is the loading problem that [control-systems 1.5](../../control-systems/lessons/01-05-block-diagram-algebra.md) assumes away and [control-systems 4.1](../../control-systems/lessons/04-01-pid-control.md)'s integral action ties back to [3.3](03-03-integral-control-exact-adaptation.md). The four-day takeover in P3 is [evolution-ecology 1.1](../../evolution-ecology/lessons/01-01-fitness-quantitative.md)'s selection coefficient applied to your own plasmid.

### Closing the course

**What the modelling has actually established.** Three things, and they are not small. **Motifs are real and they have functions** — over-representation against degree-preserving randomized networks is a statistical claim that survived, and the derived functions (sign-sensitive delay, pulse generation, response acceleration, memory, threshold ordering) were confirmed by construction. **Robustness is structural, not tuned** — [3.3](03-03-integral-control-exact-adaptation.md) is the cleanest result in the course, and its converse is a research heuristic: if a property is robust to parameters, look for a structure that forces it. **Stoichiometry alone constrains a great deal** — [4.1](04-01-metabolic-networks-stoichiometry.md) and [4.2](04-02-flux-balance-analysis.md) predict growth rates and gene essentiality at genome scale with no kinetic parameters at all, which nobody expected to work.

**What is still open.** Parameter uncertainty does not go away at scale — a genome-scale kinetic model is not currently writable, which is exactly why FBA exists. Predicting phenotype from genotype remains out of reach except in narrow cases. And multicellular coordination — how thousands of cells running noisy circuits produce a reproducible organism — is only beginning to have the tools this course would recognize.

**Where to go next in your own library.** [computational-biology](../../computational-biology/syllabus.md) is the direct sequel — sequence analysis, network inference, structure — but it is blocked pending [algorithms](../../algorithms/syllabus.md), so that is the prerequisite to clear first. [machine-learning](../../machine-learning/syllabus.md) is where network inference and phenotype prediction now actually live. [control-systems](../../control-systems/syllabus.md) has 23 lessons on disk and will make [3.3](03-03-integral-control-exact-adaptation.md) feel like the sketch it was. And [dynamical-systems](../../dynamical-systems/syllabus.md) has 24 — including the chaos module this course never needed but which is where population and epidemiological models go.

**The one sentence to keep.** A wiring diagram is a hypothesis about behaviour, it is falsifiable, and — as of 2000 — it is buildable.
