# Systems Biology · Lesson 3.4: Oscillations — the repressilator & the Hopf bifurcation

> ⏱ ~15 min · Module 3: Dynamics, feedback & bistability · Builds on: [3.3](03-03-integral-control-exact-adaptation.md), [3.1](03-01-steady-states-stability-phase-planes.md) · Unlocks: 4.1 (metabolic networks & stoichiometric modeling)

## Why this matters

Cells keep time. The cell cycle, circadian rhythms, segmentation clocks, p53 pulses, NF-κB pulses, glycolytic oscillations — all of them are chemistry that refuses to settle down. And every one of them is built from the same parts you have been assembling since Module 2: repressors, Hill functions, degradation.

So here is the question this lesson owns: **given a repression circuit, when does it oscillate?** Not "can negative feedback oscillate" — [molecular-cell-biology 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md) already told you it can. The question is the quantitative one, with a threshold and a number on it.

The answer turns out to be sharp, and it has teeth. **There is a single dimensionless quantity — a loop gain — that decides the matter, and for a three-gene ring the threshold is exactly 2.** Below it the circuit hunts and settles; above it, it runs forever. And because that gain can never exceed the Hill coefficient, **a three-gene repression ring built from non-cooperative parts cannot oscillate at any expression level whatsoever.** That is not a modelling artifact. It is an engineering constraint that a synthetic biologist has to design around, and it is why [4.5](04-05-synthetic-biology-pattern-formation.md)'s founding experiment used dimeric repressors.

[dynamical-systems 3.3](../../dynamical-systems/lessons/03-03-hopf-bifurcation.md) and [2.3](../../dynamical-systems/lessons/02-03-limit-cycles.md) own the mathematics of Hopf bifurcations and limit cycles — the normal form, the criticality, the existence theorems. We use all of it and re-derive none of it. What we do here is find where the biology sits relative to that threshold.

## The idea

**Sustained oscillation needs three ingredients, and all three are necessary.**

**1. Negative feedback.** Something has to push the system back. Without it there is nothing to overshoot.

**2. Delay.** This is the ingredient people forget, and it is the one that does the real work. **Negative feedback with no delay is just a thermostat that works: it corrects the error and settles.** Negative feedback with a *lag* is a thermostat whose sensor is in the wrong room — by the time it learns the room is cold, the heater has already overshot, so it slams off, and by the time it learns the room is hot, it has overcooled. The correction always arrives aimed at a state that has already passed. **Delay is what converts correction into overshoot.**

**3. Nonlinearity.** Delay alone gives you overshoot, but a linear system's overshoots decay geometrically — a damped spiral, ringing that dies. To keep the swing going forever you need the response to *stiffen*: a Hill function ([1.4](01-04-cooperativity-hill-ultrasensitivity.md)) that barely reacts to small excursions but slams hard on large ones. That is what pumps energy back into the cycle and holds the amplitude fixed.

**Now the move that makes this concrete.** In an ODE model there is no explicit time delay — every rate depends on the state *right now*. So where does the delay come from? **From intermediate steps.** Each species in the loop is a first-order lag: it takes about $1/\alpha$ for a change upstream to fully register downstream. Chain $m$ of them and you have accumulated $m$ lags' worth of phase.

**This immediately predicts something you can check.** A gene repressing *itself* has only one lag in the loop — that is negative autoregulation ([2.2](02-02-negative-autoregulation.md)), and it does not oscillate, it just settles faster. **A one-step loop cannot supply enough phase lag no matter how strong or how steep it is.** You need to go around the ring. Three genes gives you three lags, and three turns out to be enough.

**One more piece of vocabulary before the algebra.** The quantity that will decide everything is the **loop gain**: how much a small perturbation is amplified in one trip around the ring. It combines *steepness* (how sharply each repressor responds) with *depth* (how strongly the promoters are actually repressed at the operating point). Neither alone is enough — and that distinction is the single most useful thing in this lesson.

## The formal version

**The repressilator.** Three genes in a cycle, each repressing the next, with symmetric parameters. After scaling concentrations by the repression threshold $K$ and time by the removal rate $\alpha$ (the same nondimensionalization as [2.1](02-01-input-functions-promoter-logic.md)):

$$\frac{dx_i}{d\tau} = \frac{\tilde\beta}{1 + x_{i-1}^{\,n}} - x_i, \qquad i = 1,2,3 \ (\text{indices mod } 3)$$

where $x_i$ is protein $i$'s scaled concentration, $n$ is the Hill coefficient, and $\tilde\beta = \beta/(\alpha K)$ is the scaled maximal production rate — the only free parameter left.

*In words: each protein is made at a rate that its upstream repressor shuts down, and removed in proportion to how much of it there is.*

**The symmetric fixed point.** By symmetry, look for $x_1 = x_2 = x_3 = x^*$:

$$\boxed{\;x^*\left(1 + x^{*n}\right) = \tilde\beta\;}$$

The left side increases monotonically from 0 to $\infty$, so **there is exactly one such fixed point for every $\tilde\beta > 0$.** The circuit always has a steady state. The whole question is whether it is stable.

**The Jacobian, and the quantity that matters.** With $f(x) = \tilde\beta/(1+x^n)$, the only off-diagonal derivative is $f'(x^*)$. Define the **loop gain**

$$g \equiv -f'(x^*) = \frac{\tilde\beta\, n\, x^{*\,n-1}}{\left(1 + x^{*n}\right)^{2}}.$$

Now substitute $\tilde\beta = x^*(1+x^{*n})$ from the fixed-point equation, and almost everything cancels:

$$\boxed{\;g = \frac{n\,x^{*n}}{1 + x^{*n}} = n\,\theta, \qquad \theta \equiv \frac{x^{*n}}{1+x^{*n}}\;}$$

*In words: the loop gain is the Hill coefficient times the fraction of the promoter that is actually repressed at the operating point.* $\theta$ is exactly the occupancy from [1.4](01-04-cooperativity-hill-ultrasensitivity.md) — it is how *deep* into repression the circuit sits — and $n$ is how *steep* the repression is. **You need both, and the product is what counts.**

**Note the bound that comes free: $\theta < 1$ always, so $g < n$ always.** Remember it; it is the whole design constraint.

The Jacobian at the symmetric point is then

$$J = \begin{pmatrix} -1 & 0 & -g \\ -g & -1 & 0 \\ 0 & -g & -1 \end{pmatrix} = -I - g\,P$$

where $P$ is the cyclic permutation matrix. **This is a circulant matrix, and circulants have their eigenvectors handed to you**: the roots of unity. With $\zeta = e^{2\pi i/3}$,

$$\boxed{\;\lambda_k = -1 - g\,\zeta^{k}, \qquad k = 0,1,2\;}$$

*In words: each eigenvector is a mode in which the three genes are phase-shifted by a fixed fraction of a cycle, and its eigenvalue is set by that phase shift.*

- $k=0$ (all three genes moving **together**): $\lambda_0 = -1 - g$, real and negative. **Always stable.** In-phase perturbations always die.
- $k=1,2$ (the three genes **120° out of phase**): $\zeta^{\pm1} = -\tfrac12 \pm i\tfrac{\sqrt3}{2}$, so

$$\lambda_{1,2} = \left(-1 + \frac{g}{2}\right) \mp i\,\frac{\sqrt3}{2}\,g .$$

**The complex pair is where the instability lives, and its real part crosses zero at $g = 2$.** At that moment $\lambda_{1,2} = \pm i\sqrt{3}$ — a pure imaginary pair with nonzero frequency, the definition of a **Hopf bifurcation** ([dynamical-systems 3.3](../../dynamical-systems/lessons/03-03-hopf-bifurcation.md)). A stable limit cycle is born, and the genes on it run 120° apart — which is precisely the mode that went unstable.

$$\boxed{\;\text{oscillates} \iff g = n\theta > 2\;}$$

**The design constraint.** Since $g < n$, oscillation requires $n > 2$. Strictly:

$$\theta > \frac{2}{n} \;\Longrightarrow\; x^{*n} > \frac{2}{n-2} \;\Longrightarrow\; \tilde\beta > \tilde\beta_c = \left(\frac{2}{n-2}\right)^{1/n}\frac{n}{n-2}$$

| $n$ | $\tilde\beta_c$ | comment |
|---|---|---|
| 1, 2 | **never** | no $\tilde\beta$ works, at any strength |
| 3 | 3.78 | just barely feasible |
| 4 | 2.00 | comfortable |
| 6 | 1.34 | easy |
| 10 | 1.09 | trivially easy |

**Look at the top row.** At $n=2$ and $\tilde\beta = 10^{6}$ — repression a million-fold, promoters essentially silent — the loop gain is $1.9998$. It never reaches 2. **Cranking up repression strength buys you nothing once $\theta$ is near 1; only steepness can push $g$ past the threshold.** This is the sharpest lesson in the module about the difference between "strong" and "switch-like."

**Ring length substitutes for cooperativity.** Run the same circulant argument on a ring of $m$ repressors. The eigenvalues are $\lambda_k = -1 - g e^{2\pi i k/m}$, so $\mathrm{Re}\,\lambda_k = -1 - g\cos(2\pi k/m)$, and the most dangerous mode is whichever $k$ makes the cosine most negative. For **odd** $m$ that is $k = (m-1)/2$, giving

$$\boxed{\;g_c = \sec\!\left(\frac{\pi}{m}\right), \qquad \omega_H = \tan\!\left(\frac{\pi}{m}\right)\;}$$

| ring $m$ | $g_c$ | minimum $n$ | period at onset |
|---|---|---|---|
| 1 | — | **impossible** | — |
| 3 | 2.000 | $n > 2$ | $3.63/\alpha$ |
| 5 | 1.236 | $n > 1.24$ | $8.65/\alpha$ |
| 7 | 1.110 | $n > 1.11$ | $13.05/\alpha$ |

*In words: the longer the ring, the more phase lag it supplies, and the less cooperativity you need — but the slower the clock.* A five-gene ring oscillates with ordinary $n=2$ dimeric repressors; a three-gene ring does not. **Delay and nonlinearity trade against each other**, and that is the general principle behind the specific number 2.

**Even rings are switches, not clocks.** For even $m$ the worst mode has $\cos = -1$ exactly, so $\lambda = -1 + g$ — **real**, not complex. The instability is a real eigenvalue crossing zero, which is a pitchfork or saddle-node, not a Hopf. That is bistability, not oscillation. **An even number of repressions is net positive feedback**, and at $m=2$ this reproduces the toggle switch of [3.2](03-02-bistability-toggle-switch.md) exactly, critical value and all. Odd ring → clock; even ring → switch.

**The other architecture: relaxation oscillators.** The repressilator is a *smooth* oscillator — it is born from a Hopf, and near onset it is nearly sinusoidal. Biology's other clock design is cruder and more robust: **take a bistable switch ([3.2](03-02-bistability-toggle-switch.md)) and add a slow negative-feedback variable that drives it back and forth across its own hysteresis loop.** The fast subsystem snaps between branches; the slow variable creeps along each branch until it falls off the end. The output is sharply non-sinusoidal — long plateaus punctuated by fast transitions — and it exploits exactly the timescale separation introduced in [1.1](01-01-systems-view-of-the-cell.md). **The eukaryotic cell cycle is built this way** ([molecular-cell-biology 3.1](../../molecular-cell-biology/lessons/03-01-cell-cycle-engine-irreversibility.md)): Cdk activity latches high, then slow accumulation of the degradation machinery kicks it back down. Relaxation oscillators tolerate parameter sloppiness far better than Hopf oscillators, because the amplitude is set by the switch's two branches rather than by a delicate balance near a bifurcation.

**Real clocks add two requirements the models above do not have.** A circadian oscillator must be **temperature compensated** — its period must stay near 24 h even though every rate constant in it roughly doubles per 10 K — and it must be **entrainable**, able to lock phase to a light cue without losing its free-running rhythm. Both are strong constraints on architecture, and neither falls out of a bare negative-feedback ring.

## Picture

![Three panels. On the left, a ring of three genes labelled LacI, TetR and cI, each repressing the next with a blunt-ended arrow, annotated as an odd ring giving net negative feedback with three steps of delay. In the centre, the three protein concentrations plotted against time, oscillating in a steady rhythm 120 degrees out of phase, crossing the dashed line marking the unstable symmetric fixed point, with the period bracketed. On the right, two phase-plane projections: below the Hopf threshold with loop gain 1.84 a trajectory spirals inward and dies at a filled stable fixed point, while above the threshold with loop gain 2.49 a trajectory spirals outward from an open unstable fixed point onto a closed limit cycle.](assets/03-04-fig1.svg)

## Worked examples

**Example 1 (mechanical — does this circuit tick, and how fast?).** A three-gene repressilator has $n = 3$ and $\tilde\beta = 10$. Find the fixed point, the loop gain, the eigenvalues, and the period.

**Step 1 — fixed point.** Solve $x^*(1+x^{*3}) = 10$ numerically: $x^* = 1.697$, so $x^{*3} = 4.891$.

**Step 2 — occupancy and loop gain.**

$$\theta = \frac{4.891}{1+4.891} = 0.830, \qquad g = n\theta = 3 \times 0.830 = \mathbf{2.49}.$$

**Step 3 — eigenvalues.**

$$\lambda_0 = -1 - 2.49 = -3.49, \qquad \lambda_{1,2} = \left(-1 + \tfrac{2.49}{2}\right) \mp i\,\tfrac{\sqrt3}{2}(2.49) = \mathbf{+0.245 \mp 2.157\,i}.$$

**Step 4 — read it.** $g = 2.49 > 2$, and the complex pair has positive real part. **The symmetric state is an unstable spiral; the circuit oscillates.** The third eigenvalue is strongly negative, so trajectories are pulled quickly onto the two-dimensional oscillating mode — which is why the phase-plane projection in the figure looks so clean.

**Step 5 — period, and an honest caveat.** The linear frequency gives $T \approx 2\pi/2.157 = 2.91$ in units of $1/\alpha$. **But numerical integration of the full system gives $T = 4.95$** — 70 percent longer. **The linear frequency is only the period *at the bifurcation*** ($2\pi/\sqrt3 = 3.63$ there); once you are well past onset the trajectory spends long stretches out on the flat tails of the Hill function, and the cycle slows. **Linearization tells you *whether* a cycle exists, not what it looks like.**

Sanity check against reality: for a protein removed mainly by dilution in a bacterium doubling every 30 min, $\alpha = \ln 2 / 30 = 0.0231\ \mathrm{min}^{-1}$, so $T = 4.95/\alpha \approx 214$ min. The observed repressilator period was around 150 min, or two to three generations. **The right order of magnitude from a model with one free parameter.**

**Example 2 (why you'd care — can I build this out of the parts I have?).** You want to build a genetic clock. Your repressor library is ordinary dimeric transcription factors, $n \approx 2$. You plan a three-gene ring and intend to tune it by driving expression hard. Will it work?

**The calculation.** $g = n\theta = 2\theta$, and $\theta < 1$, so $g < 2$ strictly — the threshold is never reached. Explicitly:

| $\tilde\beta$ | $x^*$ | $\theta$ | $g$ |
|---|---|---|---|
| 10 | 2.00 | 0.800 | 1.600 |
| 50 | 3.59 | 0.928 | 1.856 |
| 1,000 | 9.97 | 0.990 | 1.980 |
| 1,000,000 | 100.0 | 0.9999 | 1.9998 |

**No amount of expression works.** You are approaching the threshold asymptotically from below and never crossing. **The lever you were pulling is the wrong lever** — you were increasing $\theta$, which is already nearly maxed out, when the binding constraint is $n$.

**Three ways out, and all three are real engineering:**

1. **Raise $n$.** Add cooperative operator sites so a tetramer or a pair of coupled dimers is required. Getting to $n = 3$ makes it feasible at $\tilde\beta > 3.78$; $n=4$ makes it comfortable.
2. **Lengthen the ring.** Five genes needs only $n > 1.24$, so your existing dimeric parts suffice. You pay with a period roughly 2.4× longer.
3. **Add delay another way — and this is what actually happened.** The model above is *protein-only*. Real transcription goes through mRNA, and each mRNA species is another first-order lag in the loop. **Adding the three mRNA steps doubles the ring length in effect and lowers the cooperativity requirement below 2** — which is exactly why Elowitz and Leibler's repressilator, built from LacI, TetR and λcI with $n \approx 2$, oscillated at all. **The intermediate you were tempted to eliminate as "fast bookkeeping" was carrying the delay that made the clock possible.**

**And the reality check that closes the loop.** The original repressilator worked, but badly: individual cells oscillated with highly variable period and amplitude, sister cells lost phase coherence within a few generations, and many cells stopped oscillating altogether. The culprits were exactly what a deterministic ODE assumes away — low copy numbers and bursty expression ([4.3](04-03-stochastic-gene-expression.md)), plus plasmid-copy-number variation and load on the host. Later redesigns — integrating the circuit into the chromosome, adding a sponge to buffer repressor fluctuations, balancing degradation across the three arms — produced clocks that stayed coherent for dozens of generations. **The topology was right on the first try; the robustness took twenty years.** That gap is the honest subject of [4.5](04-05-synthetic-biology-pattern-formation.md).

## Watch out

- **You might think strong repression is what makes a circuit oscillate.** It is not. $g = n\theta$, and $\theta$ saturates at 1, so **strength alone tops out at $g = n$**. A million-fold repressor with $n=2$ gives $g = 1.9998$ and a perfectly stable steady state. **Steepness is the binding constraint; strength only gets you to the ceiling that steepness sets.**
- **You might read $n > 2$ as a law of biology.** It is a property of the *three-variable, protein-only* model. Adding mRNA steps, maturation delays, or nuclear transport adds phase lag and lowers the requirement — which is why real three-gene rings work with $n \approx 2$. **The general principle is $n$ and delay trading off; the number 2 is specific to a three-step ring.**
- **You might see complex eigenvalues and declare an oscillation.** Complex eigenvalues mean *spiralling*; whether it spirals in or out is the **sign of the real part** ([dynamical-systems 1.3](../../dynamical-systems/lessons/01-03-trace-determinant-classification.md)). A stable spiral is a damped ringing that dies — biologically a transient overshoot, not a clock. Both panels of the figure have complex eigenvalues.
- **You might expect the linear frequency to give the period.** It gives it *at the bifurcation only*. Example 1 was off by 70 percent well above onset, and a relaxation oscillator's period has essentially nothing to do with its Hopf frequency.
- **You might assume the limit cycle born at the Hopf is stable and small.** For the repressilator it is (a supercritical Hopf), but a **subcritical** Hopf throws off an *unstable* cycle and the system jumps to a distant attractor — so the linear analysis correctly predicts instability and completely misdescribes the outcome. [dynamical-systems 3.3](../../dynamical-systems/lessons/03-03-hopf-bifurcation.md) owns that distinction; check it before trusting a bifurcation diagram.

## One-liner

> Oscillation needs negative feedback, delay and nonlinearity — and for a ring of repressors all three collapse into one number, the loop gain $g = n\theta$, which must exceed $\sec(\pi/m)$; since $g < n$ always, a three-gene ring is a clock only if $n > 2$, while an even ring is not a clock at all but a switch.

## Problems

**P1 (🟢)** A three-gene repressilator with $n = 3$ is measured at its symmetric steady state, where each promoter is 75 percent repressed ($\theta = 0.75$). (a) Compute the loop gain and all three eigenvalues. (b) Does it oscillate? (c) Estimate the period in units of $1/\alpha$. (d) How low could $\theta$ fall before the oscillation is lost?

**P2 (🟡)** You have only ordinary dimeric repressors ($n = 2$) and want a clock anyway, so you build a **five-gene** repression ring. (a) Show the critical loop gain is $\sec 36^\circ = 1.236$. (b) What is the minimum promoter occupancy $\theta$, and the minimum $\tilde\beta$? (c) Compare the period at onset with the three-gene ring's and explain the trade in one sentence.

**P3 (🔴, bridges to 3.2 and to control theory)** A colleague builds a **four-gene** repression ring, reasoning that more delay is always better. (a) Using $\lambda_k = -1 - g e^{2\pi i k/m}$, find the most dangerous mode for $m=4$ and show the instability is through a *real* eigenvalue. (b) What does the circuit do instead of oscillating? (c) Specialize to $m = 2$ with $n = 2$ and recover the critical $\alpha$ of the toggle switch from [3.2](03-02-bistability-toggle-switch.md). (d) State the general rule and connect it to the frequency-domain criterion a control engineer would use.

<details>
<summary>Solutions</summary>

**P1 (a)** $$g = n\theta = 3 \times 0.75 = \mathbf{2.25}.$$

$$\lambda_0 = -1 - g = \mathbf{-3.25}, \qquad \lambda_{1,2} = \left(-1 + \tfrac{2.25}{2}\right) \mp i\,\tfrac{\sqrt3}{2}(2.25) = \mathbf{+0.125 \mp 1.949\,i}.$$

**(b)** $g = 2.25 > 2$, and the complex pair has real part $+0.125 > 0$. **Yes — the symmetric state is an unstable spiral and the circuit oscillates.** Note how narrow the margin is: the real part is only 0.125, so this circuit sits just above its Hopf point and the oscillation will be small-amplitude and easily extinguished by noise.

**(c)** $$T \approx \frac{2\pi}{1.949} = \mathbf{3.22}\ \text{in units of } 1/\alpha .$$

Because we are close to onset, this estimate is trustworthy here — compare the at-onset value $2\pi/\sqrt3 = 3.63$. (Contrast Example 1, at $g = 2.49$, where the linear estimate was badly off.)

**(d)** Oscillation requires $n\theta > 2$, so

$$\theta > \frac{2}{3} = \mathbf{0.667},$$

i.e. the promoter must be at least two-thirds repressed. In concentration terms, $x^{*3}/(1+x^{*3}) > 2/3$ gives $x^{*3} > 2$, so $x^* > 2^{1/3} = 1.26$ — and the corresponding $\tilde\beta_c = 1.26 \times 3 = 3.78$, matching the table. **The circuit at $\theta = 0.75$ has only about 12 percent of headroom in occupancy before it stops ticking.**

**P2 (a)** For a ring of $m$, $\mathrm{Re}\,\lambda_k = -1 - g\cos(2\pi k/m)$. For $m = 5$ the available angles are $0^\circ, 72^\circ, 144^\circ, 216^\circ, 288^\circ$, with cosines $1,\ 0.309,\ -0.809,\ -0.809,\ 0.309$. The most negative cosine is $-0.809$ at $k = 2$ (and its conjugate $k=3$), so

$$\mathrm{Re}\,\lambda_2 = -1 + 0.809\,g, \qquad \text{zero at } g_c = \frac{1}{0.809} = \frac{1}{\cos 36^\circ} = \mathbf{1.236}.$$

**(b)** With $n = 2$: $g = 2\theta > 1.236 \Rightarrow \theta > \mathbf{0.618}$. (That is $1/\varphi$, the reciprocal golden ratio — a pleasant accident of $\cos 36^\circ = \varphi/2$.)

Then $\theta = x^{*2}/(1+x^{*2}) > 0.618$ gives

$$x^{*2} > \frac{0.618}{0.382} = 1.618, \qquad x^* > 1.272,$$

$$\tilde\beta_c = x^*(1+x^{*2}) = 1.272 \times 2.618 = \mathbf{3.33}.$$

**So yes — the five-gene ring works with the parts you have**, and needs only a modest expression level.

**(c)** At onset the frequency is $\omega_H = \tan(\pi/m)$:

$$m=3: \ \omega_H = \tan 60^\circ = 1.732, \ T = 3.63/\alpha; \qquad m=5: \ \omega_H = \tan 36^\circ = 0.727, \ T = 8.65/\alpha .$$

**The five-gene ring is about 2.4 times slower.** *The trade: extra ring length buys you the phase lag that cooperativity would otherwise have to supply, and you pay for it in period* — every added stage contributes its own lag time, so a clock built from weak parts is necessarily a slow clock.

**P3 (a)** For $m = 4$ the angles are $0^\circ, 90^\circ, 180^\circ, 270^\circ$, with cosines $1, 0, -1, 0$. The most negative is $\cos 180^\circ = -1$ at $k = 2$, and $e^{i\pi} = -1$ is **real**, so

$$\lambda_2 = -1 - g(-1) = -1 + g,$$

a **real** eigenvalue, crossing zero at $g = 1$. There is no imaginary part to carry a frequency, so **this is not a Hopf bifurcation.** (The $k=1,3$ modes give $\lambda = -1 \mp ig$, which have real part $-1$ and are stable for every $g$ — the complex modes never destabilize.)

**(b)** A real eigenvalue crossing zero in a symmetric system is a **pitchfork** ([dynamical-systems 3.2](../../dynamical-systems/lessons/03-02-pitchfork-symmetry.md)); breaking the symmetry makes it a pair of saddle-nodes. The symmetric state loses stability to two asymmetric stable states. **The circuit is bistable — a switch with memory and hysteresis, not a clock.**

The reason is structural: **four repressions is an even number, and an even number of sign inversions is net *positive* feedback.** Your colleague's "more delay is always better" intuition failed because it ignored the sign of the loop.

**(c)** For $m = 2$ the angles are $0^\circ$ and $180^\circ$, so $\lambda = -1-g$ and $\lambda = -1+g$; instability at $g = 1$. With $n = 2$,

$$g = \frac{2 s^{2}}{1+s^{2}} = 1 \;\Longrightarrow\; 2s^2 = 1 + s^2 \;\Longrightarrow\; s = 1,$$

and the fixed-point equation $s(1+s^2) = \alpha$ gives

$$\boxed{\alpha_c = 1 \times (1+1) = 2}$$

which is exactly the toggle switch's critical value from [3.2](03-02-bistability-toggle-switch.md). **The mutual-repression toggle is just the $m=2$ member of the same family**, and one circulant calculation delivers both the switch and the clock.

**(d) The general rule:**

$$\textbf{odd ring} \Rightarrow \text{net negative feedback} \Rightarrow \text{complex pair crosses} \Rightarrow \textbf{Hopf} \Rightarrow \textbf{clock}$$
$$\textbf{even ring} \Rightarrow \text{net positive feedback} \Rightarrow \text{real eigenvalue crosses} \Rightarrow \textbf{pitchfork} \Rightarrow \textbf{switch}$$

**The control-theory connection.** A control engineer would not compute eigenvalues at all; they would open the loop and ask **at what frequency does the loop accumulate 180° of phase lag, and is the gain still above 1 there?** ([control-systems 3.4](../../control-systems/lessons/03-04-gain-and-phase-margins.md), [3.5](../../control-systems/lessons/03-05-nyquist-criterion.md).) Each of our $m$ first-order lags contributes at most 90° of phase, so a single lag can never reach 180° — **that is the frequency-domain reason a one-gene loop cannot oscillate**, and it is the same fact as "$k=0$ is the only mode when $m=1$." Three lags can reach 180° at a finite frequency, and there the requirement that the gain still exceed 1 becomes precisely $g > 2$.

**What we called "loop gain" is the loop gain**, and what we called "delay" is phase margin. The repressilator is a negative-feedback loop that has been detuned until it goes unstable on purpose — an oscillator is a controller you deliberately gave insufficient phase margin.

</details>

## Flashback

**From Lesson 3.1 (steady states, stability & phase planes in the cell):** An autocatalytic enzyme $v$ consumes a substrate $u$ that is fed into the cell at a constant rate, converting it into more of itself, and is degraded at rate $d$:

$$\dot u = 3 - u - uv, \qquad \dot v = uv - d\,v$$

(a) For $d = 2$, find the nullclines and all fixed points in the positive quadrant, and classify each from its Jacobian. (b) Read the biology off the classification in two sentences. (c) Now raise the degradation rate to $d = 4$. Show that one fixed point leaves the positive quadrant, say what that means biologically, and find the threshold $d$ at which it happens.

<details>
<summary>Solution</summary>

**(a) Nullclines.**

$$\dot v = 0: \quad v(u-d) = 0 \;\Longrightarrow\; v = 0 \ \text{ or } \ u = d$$

$$\dot u = 0: \quad u(1+v) = 3 \;\Longrightarrow\; u = \frac{3}{1+v}$$

*The $\dot v$ nullcline is a pair of straight lines; the $\dot u$ nullcline is a hyperbola falling from $u=3$ on the $v=0$ axis.*

**Fixed points** (with $d=2$), from the two branches:

- $v = 0$ branch: $u = 3$, giving $(3,\,0)$ — the **enzyme-free state**.
- $u = 2$ branch: $2(1+v) = 3 \Rightarrow v = 0.5$, giving $(2,\,0.5)$ — **coexistence**.

Both lie in the positive quadrant, so both are biologically admissible.

**Jacobian.**

$$J = \begin{pmatrix} -1-v & -u \\ v & u-d \end{pmatrix}$$

At $(3,0)$ with $d=2$:

$$J = \begin{pmatrix} -1 & -3 \\ 0 & 1 \end{pmatrix}, \qquad \operatorname{tr}J = 0, \quad \det J = -1 < 0 .$$

Upper triangular, so the eigenvalues are the diagonal: $\lambda = -1,\ +1$. **Saddle.**

At $(2,0.5)$:

$$J = \begin{pmatrix} -1.5 & -2 \\ 0.5 & 0 \end{pmatrix}, \qquad \operatorname{tr}J = -1.5, \quad \det J = 0 - (-2)(0.5) = 1 .$$

$$\operatorname{tr}^2 - 4\det = 2.25 - 4 = -1.75 < 0 \quad \Rightarrow \quad \lambda = -0.75 \pm 0.661\,i \quad \textbf{stable spiral}.$$

**(b) The biology.** The enzyme-free state is a **saddle**, and its unstable direction points into $v > 0$ — so **any trace of the enzyme invades and grows**; sterility is not a state the system can hold. The system then settles at coexistence, but as a *spiral*: substrate and enzyme overshoot and ring against each other, damping out with a period of $2\pi/0.661 \approx 9.5$ time units. **Damped oscillation, not a clock** — the real part is negative, which is exactly the distinction this lesson turns on.

**(c) $d = 4$.** The coexistence branch requires $u = d = 4$, so

$$4(1+v) = 3 \;\Longrightarrow\; v^* = \frac{3-4}{4} = -0.25 .$$

**Negative — so it is not in the positive quadrant, and it is not a state the cell can occupy.** The linearization still happily classifies it (it is a saddle), and that classification is **biologically meaningless**: a negative concentration is not a small amount of enzyme, it is no enzyme at all. This is 3.1's standing warning — *the math will hand you fixed points the biology cannot use, and screening them is your job, not the Jacobian's.*

Only $(3,0)$ survives, and it has changed character:

$$J = \begin{pmatrix} -1 & -3 \\ 0 & 3-4 \end{pmatrix} = \begin{pmatrix} -1 & -3 \\ 0 & -1 \end{pmatrix}, \qquad \lambda = -1,\, -1 \quad \textbf{stable (degenerate) node}.$$

**The enzyme now dies out from any starting point.** Degradation outruns autocatalysis.

**The threshold.** Coexistence is admissible exactly when

$$v^* = \frac{3-d}{d} > 0 \iff \boxed{d < 3}$$

At $d = 3$ the two fixed points **collide at $(3,0)$ and exchange stability** — $\det J = 0$ there, with eigenvalues $-1$ and $0$. That is a **transcritical bifurcation** ([dynamical-systems 3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md)), the generic way a biological state appears at the boundary of the positive quadrant rather than out of nowhere.

</details>

## Connections

- **Backward:** the Hill coefficient $n$ from [1.4](01-04-cooperativity-hill-ultrasensitivity.md) reappears as the hard ceiling on loop gain; the nondimensionalization and the response time $1/\alpha$ are [2.1](02-01-input-functions-promoter-logic.md)'s; the linearize-and-classify procedure is [3.1](03-01-steady-states-stability-phase-planes.md)'s, and [3.2](03-02-bistability-toggle-switch.md)'s toggle turns out to be the $m=2$ case of this lesson's ring formula. [3.3](03-03-integral-control-exact-adaptation.md) showed negative feedback making a system *insensitive*; here the same feedback with more delay makes it *unable to settle* — same wiring, opposite outcome, and the difference is phase.
- **Forward:** [4.3](04-03-stochastic-gene-expression.md) explains why the real repressilator was so much noisier than the ODE predicts; [4.4](04-04-signal-transduction-cascades.md) supplies a source of large effective $n$ with no cooperative binding at all, which is one way past this lesson's design constraint; [4.5](04-05-synthetic-biology-pattern-formation.md) tells the full story of building these circuits and what broke. [4.1](04-01-metabolic-networks-stoichiometry.md) then abandons kinetics entirely for a network scale where none of these parameters are knowable.
- **Sideways:** the mathematics is [dynamical-systems 3.3](../../dynamical-systems/lessons/03-03-hopf-bifurcation.md) and [2.3](../../dynamical-systems/lessons/02-03-limit-cycles.md), with the classification from [1.3](../../dynamical-systems/lessons/01-03-trace-determinant-classification.md). **The engineering version is the same subject in different clothes:** loop gain, phase lag and the 180° criterion are [control-systems 3.4](../../control-systems/lessons/03-04-gain-and-phase-margins.md) and [3.5](../../control-systems/lessons/03-05-nyquist-criterion.md) — a control engineer designs *against* the instability this lesson designs *for*. The relaxation-oscillator architecture is the cell cycle of [molecular-cell-biology 3.1](../../molecular-cell-biology/lessons/03-01-cell-cycle-engine-irreversibility.md), and the circulant-matrix trick that made the eigenvalues fall out is the discrete Fourier transform in disguise.
