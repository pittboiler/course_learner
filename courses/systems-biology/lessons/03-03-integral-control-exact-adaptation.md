# Systems Biology · Lesson 3.3: Robustness & feedback — integral control & exact adaptation

> ⏱ ~15 min · Module 3: Dynamics, feedback & bistability · Builds on: [3.2](03-02-bistability-toggle-switch.md), [2.5](02-05-incoherent-ffl-temporal-programs.md) · Unlocks: [3.4](03-04-oscillations-repressilator-hopf.md) (the repressilator & the Hopf bifurcation)

## Why this matters

[2.5](02-05-incoherent-ffl-temporal-programs.md) built an adapting circuit — the incoherent FFL pulses and then settles back toward baseline. But its adaptation is *approximate*: how close it returns depends on the repression strength, and a twofold change in one rate constant visibly degrades it. That circuit adapts because somebody tuned it.

**Exact adaptation is a different animal.** It means the steady-state output returns to *precisely* the pre-stimulus value — for any input magnitude, and for any values of the rate constants. Nothing is tuned. And there is a theorem behind it: **exact, robust adaptation requires integral feedback control.** Not "is often implemented by" — requires. That is one of the very few genuine theorems in systems biology, it is the same integral action as the I in a PID controller ([control-systems 4.1](../../control-systems/lessons/04-01-pid-control.md)), and it turns a *qualitative* experimental observation ("this works reliably in every strain we tried") into a *hard constraint on which models can be correct*.

The second payoff is a distinction that most treatments blur and that this lesson insists on: **robustness is a property of specific quantities, not of systems.** In bacterial chemotaxis, adaptation *precision* is robust to fifty-fold changes in protein expression; adaptation *time* and the baseline tumbling rate are not, and vary severalfold. Knowing which is which tells you where the mechanism lives.

## The idea

Start with a thermostat that only responds to the current deviation. Room is 2 degrees cold, so it pushes heat proportional to 2 degrees. As the room warms, the push weakens. It stops pushing exactly when the deviation reaches zero — but at zero push the room is losing heat and cooling again. So it settles somewhere *short* of the setpoint, with a permanent residual chill. Turning up the gain shrinks the offset but never removes it, and how big the offset is depends on the gain, on the insulation, on the outside temperature. **Proportional feedback attenuates error; it does not abolish it.**

Now add a device that accumulates the error — a running total, an integral. As long as the room is even slightly cold, the total keeps growing and the heat keeps ratcheting up. The device can only *stop changing* when the error is exactly zero.

**That is the whole argument, and it is worth saying in one sentence: the integrator's steady-state condition is "error equals zero", so if the system settles anywhere at all, it settles at zero error.**

Notice what that argument did *not* use. It did not use the insulation, the heater's power, the outside temperature, or the integrator's own gain. **Those parameters cannot appear in the conclusion because they never appeared in the equation.** Zero error is forced by the *structure* of the loop — by the presence of a variable whose rate of change is the error — rather than by any numerical relationship among constants. That is exactly what "robust" means here, and it is why robustness and structure are the same subject.

And notice the price. The integrator's own value at the new steady state is *not* the same as before: it has moved to whatever level is needed to cancel the new input. **The controller has recorded the input in its own state.** In chemotaxis this is not a side effect — it is memory, and it is the thing that lets the cell notice the *next* change.

## The formal version

**Setup.** Let $y(t)$ be the output we care about, $u$ a constant input or disturbance, $p$ the vector of all rate constants, and $y_0$ a target value. Define the error $e = y - y_0$. The controller is a state variable $m$ obeying

$$\dot m = -k\,e = -k\,(y - y_0), \qquad k \neq 0,$$

while the plant sets the output as some function $y = g(u, m; p)$, decreasing in $m$.

**Theorem (zero steady-state error).** *If this system possesses a stable steady state, then at that steady state $e^* = 0$, i.e. $y^* = y_0$, for every value of $u$ and every value of $p$.*

*Proof.* At a steady state $\dot m = 0$. Since $\dot m = -k(y^*-y_0)$ and $k \neq 0$, we get $y^* = y_0$. $\blacksquare$

*In words: the only place the integrator can stop is where the error is exactly zero, so wherever the system settles, it settles on target.* No property of $g$ — not its shape, not its parameters, not the input — appears anywhere in that argument.

**What the theorem does not say**, and both omissions matter:

1. **It does not guarantee a steady state exists.** If $m$ is bounded (methyl groups on a receptor, molecules in a pool) and the required $m^*$ lies outside its range, the integrator drives to its limit and sticks. In control engineering this is **integrator windup**; in chemotaxis it is why very large attractant steps are not adapted to at all.
2. **It says nothing whatsoever about the transient.** Amplitude, overshoot, settling time — none of these are pinned. **Precision lives in the steady-state equations, which do not contain the plant's parameters; adaptation time lives in the eigenvalues, which contain all of them.** That single sentence is the sharpest thing in this lesson.

**The minimal model, solved.** Take the fast-output case where the plant equilibrates instantly relative to the controller. Linearizing about the pre-stimulus state, with $\kappa$ the input sensitivity and $\lambda$ the controller's authority over the output:

$$y - y_0 = \kappa u - \lambda m, \qquad \dot m = k\,(y - y_0).$$

Substituting, $\dot m = k\kappa u - k\lambda m$, so $m(t) = \dfrac{\kappa u}{\lambda}\left(1 - e^{-k\lambda t}\right)$ and

$$\boxed{\;y(t) - y_0 = \kappa u\, e^{-k\lambda t}\;}$$

*In words: the output jumps by the full open-loop excursion and then relaxes exponentially to exactly zero error.*

Read the three factors separately, because they are the lesson:

| Quantity | Value | Depends on |
|---|---|---|
| Peak excursion | $\kappa u$ | input size and plant sensitivity — **not robust** |
| Relaxation rate | $k\lambda$ | controller gain and plant gain — **not robust** |
| **Final error** | $\mathbf{0}$ | **nothing** — **robust** |

**Why a leaky integrator is not good enough.** Suppose the controller species is itself degraded, $\dot m = k(y-y_0) - \alpha m$. Then at steady state $m^*(k\lambda + \alpha) = k\kappa u$, and

$$y^* - y_0 = \kappa u\,\frac{\alpha}{k\lambda + \alpha}.$$

*In words: any leak reintroduces a residual error, proportional to the input and dependent on every parameter.* With $\alpha \ll k\lambda$ the adaptation looks excellent, but it is now *approximate and tuned* — precision degrades as you push the input harder. **A true integrator therefore requires a species whose production and removal rates are independent of its own concentration**, which in biochemistry means enzymes operating at **saturation** (zero order). That is not a modelling convenience; it is a mechanistic requirement, and it is why 4.4's zero-order regime keeps showing up in adaptive circuits.

**The converse — why integral control is *required*.** Robust exact adaptation means the steady-state output is independent of $u$ *and* stays independent under perturbation of $p$: the DC gain from input to output is zero, and remains zero on an open set of parameters. A zero that survives arbitrary parameter perturbation cannot arise from cancellation between terms — that would require a tuned relation among constants, which perturbation would break. It must be **structural**. In transfer-function language a structurally zero DC gain forces the loop to contain a pole at $s = 0$, and a pole at the origin *is* an integrator: a state whose only steady-state condition is $e = 0$. This is the Yi–Huang–Simon–Doyle result, proved for linear systems and holding locally for nonlinear ones by linearization ([dynamical-systems 1.4](../../dynamical-systems/lessons/01-04-linearization-hartman-grobman.md)). **Honest caveat:** a complete nonlinear classification is still open. The best current map is an exhaustive computational search over all three-node enzyme topologies, which found exactly two adaptive architectures — a negative-feedback loop with a saturated buffer node (integral control, *this* lesson) and an incoherent feed-forward loop with a tuned node ([2.5](02-05-incoherent-ffl-temporal-programs.md), approximate).

**Bacterial chemotaxis: the biological instance.** *E. coli* cannot steer. At its size and speed the Reynolds number is around $10^{-5}$, so it coasts a fraction of an atomic diameter when the motor stops ([biophysics 1.5](../../biophysics/lessons/01-05-low-reynolds-number.md)), and rotational Brownian motion randomizes its heading in seconds — far too fast to hold a bearing, and its body is far too short to read a spatial gradient across. **So it must compare concentrations over time**: run, sample, and decide whether things are getting better. A temporal-comparison strategy only works if the sensor resets itself after every change — which is exactly adaptation, and why the mechanism had to be exact.

Let $A$ be the fraction of receptor complexes in the kinase-active state (high $A$ drives CheY phosphorylation, clockwise flagellar rotation, and tumbling), and $M$ the mean methylation level of the receptors. Attractant binding lowers $A$; methylation raises it, so $A = A(M, L)$ with $\partial A/\partial M > 0$ and $\partial A/\partial L < 0$. The Barkai–Leibler structural assumptions:

- **CheR methylates receptors at a rate independent of how many are unmethylated** — it is present at low copy number and works saturated, so the methylation rate is a constant $V_R$.
- **CheB demethylates only *active* receptors**, at a rate proportional to the active fraction, $k_B B A$.

Then, writing $k \equiv k_B B$,

$$\frac{dM}{dt} = V_R - k A \;=\; -k\left(A - \frac{V_R}{k}\right).$$

*In words: methylation integrates the difference between current activity and the fixed ratio $V_R/k$.* This is the theorem's form exactly, with the integrator being the methylation level and the setpoint being

$$\boxed{\;A^* = \frac{V_R}{k_B B}\;}$$

**The ligand concentration $L$ does not appear.** The steady-state activity — and therefore the steady-state tumbling frequency — is independent of the ambient attractant level, and independent of every property of the function $A(M,L)$: receptor number, binding affinity, cooperativity, cluster size. Change any of them and the transient changes; the destination does not.

**Adaptation time, for contrast.** Linearize near the steady state with $a \equiv \partial A/\partial M > 0$. Then $\delta A = a\,\delta M$ and $\delta \dot M = -k a\,\delta M$, so

$$\tau_{\text{adapt}} = \frac{1}{k_B B\,a}.$$

**This contains CheB abundance and receptor sensitivity — both of which vary several-fold between genetically identical cells.** So does the baseline $A^* = V_R/(k_B B)$, which depends on the CheR-to-CheB ratio. **The precise statement of the experimental result is therefore subtler than "chemotaxis is robust":** over roughly a fifty-fold range of CheR expression, adaptation *precision* — the return to that cell's own pre-stimulus baseline — stayed near 1, while the value of that baseline and the time taken to reach it both varied severalfold. Robustness attaches to the fixed-point equation, not to the system.

## Picture

![Panel a shows an integral feedback block diagram: attractant enters a plant box whose activity is a function of methylation and ligand, the activity output is compared against a setpoint equal to V-R over k-B times B, and the resulting error feeds an integrator box labelled as the CheR and CheB methylation machinery, whose methylation output returns into the plant. Panel b plots receptor activity against time through three successive attractant steps of equal fold size: each step drops the activity sharply and it then relaxes back to precisely the same dashed baseline, with a second dashed trace at doubled receptor sensitivity reaching the identical baseline about twice as fast.](assets/03-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — proportional versus integral, on the same plant).** A plant has output deviation $y = \kappa u - \lambda m$ where $m$ is the controller's output. Take $\kappa = 1$, $u = 1$ (so the uncontrolled excursion is 1 unit) and $\lambda = 1$ per unit. Compare (i) proportional control $m = g\,y$ with $g = 9$, and (ii) integral control $\dot m = k y$ with $k = 1$ per minute. Then halve $\lambda$ and redo both.

**(i) Proportional.** Substituting $m = gy$:

$$y = \kappa u - \lambda g y \;\Longrightarrow\; y^* = \frac{\kappa u}{1 + \lambda g} = \frac{1}{1+9} = \mathbf{0.100}.$$

A residual error of 10 percent of the open-loop excursion. Now $\lambda \to 0.5$:

$$y^* = \frac{1}{1 + 4.5} = \mathbf{0.182}.$$

**A twofold change in one plant parameter degraded the precision by 82 percent.** Nothing is broken — the controller is doing exactly what it was designed to do — but the *accuracy is a function of the parameters*, so it inherits all their variability.

**(ii) Integral.** From the boxed solution, $y(t) = \kappa u\,e^{-k\lambda t}$:

$$y^* = \mathbf{0} \ \text{exactly}, \qquad \tau = \frac{1}{k\lambda} = \frac{1}{1\times 1} = \mathbf{1.0\ \text{min}}.$$

Now $\lambda \to 0.5$:

$$y^* = \mathbf{0} \ \text{still exactly}, \qquad \tau = \frac{1}{1 \times 0.5} = \mathbf{2.0\ \text{min}}.$$

**The precision did not move at all; the speed halved.** And this is not a happy coincidence of the numbers — $\lambda$ was *algebraically absent* from the steady-state condition and *algebraically present* in the eigenvalue. Precision robust, time not, in four lines.

**Example 2 (why you'd care — chemotaxis with numbers, and the limit of the trick).** Take $V_R = 1.0$ methyl per minute, $k = k_B B = 3.0$ per minute, and near the operating point $a = \partial A/\partial M = 0.10$ per methyl group. The receptor's methylation level sits at $M_0 = 1.0$ and can range from 0 to 4.

**(a) Baseline.** $A^* = V_R/k = 1.0/3.0 = \mathbf{0.333}$ — a third of receptor complexes active, whatever the ambient attractant.

**(b) A step.** Add attractant; activity drops instantly to $A = 0.05$ before methylation can respond. Now $\dot M = 1.0 - 3.0(0.05) = +0.85$ methyls per minute — methylation climbs, and it cannot stop until $A$ is back at $0.333$. The methylation added:

$$\Delta M = \frac{0.333 - 0.05}{0.10} = \mathbf{2.83\ \text{methyl groups}}.$$

**(c) Time.** $\tau = 1/(k a) = 1/(3.0 \times 0.10) = \mathbf{3.33\ \text{min}}$.

**(d) A mutant with twice the CheB**, $k = 6.0$: baseline $A^* = 1.0/6.0 = \mathbf{0.167}$ and $\tau = 1/(6.0\times0.10) = \mathbf{1.67\ \text{min}}$. **Both changed.** But present either cell with an attractant step and both return to their *own* baseline exactly — precision 1 in both. That is the distinction the 1999 experiments actually measured, and stating it loosely as "chemotaxis is robust" gets it wrong.

**(e) Where it breaks.** The integrator has a range of only $4 - 1.0 = 3.0$ methyl groups, so the largest activity drop it can undo is $3.0 \times 0.10 = 0.30$ — activity cannot be rescued from below $0.333 - 0.30 = 0.033$. The step in (b) consumed 2.83 of 3.0 available methyls: **the cell adapted with 94 percent of its integrator spent.** A step to $A = 0.03$ would need 3.03 methyls, so $M$ saturates at 4, sticks, and activity settles at $0.033$ — a precision of $0.033/0.333 = 0.10$, i.e. essentially no adaptation. The cell swims smoothly and stops sensing. This is integrator windup, and it is the real reason chemotactic sensing has a finite dynamic range.

**(f) The research heuristic, which is the point.** Barkai and Leibler's argument was not that their model fit the data better. It was that adaptation precision is observed to be *robust* — insensitive to protein expression levels across strains — and that the then-standard models achieved precision only by tuning rate constants, so those models could not be right *whatever* they fit. **A qualitative observation about robustness ruled out a class of quantitative models.** Generalize it: if a biological property survives large parameter variation, look for a structural mechanism, because a tuned one would not have survived. That heuristic is the most portable thing in this lesson.

## Watch out

- **You might think exact adaptation means the output is held constant.** It means the *steady state* is pinned; the transient is completely free, and in chemotaxis the transient *is* the signal. Adaptation makes the DC gain zero — it turns the cell into a differentiator, sensitive to change and blind to level. A perfectly adapting sensor reports "getting better", never "good".
- **You might think robustness is a property of a system.** It is a property of a *quantity*. Precision is robust; adaptation time, peak amplitude and baseline activity are not, and they vary several-fold across genetically identical cells. Always ask "robust in what?"
- **You might think negative feedback gives adaptation.** Proportional negative feedback attenuates the steady-state error by $1/(1+L)$ and never removes it — and the attenuation depends on the loop gain $L$, so it is tuned. **Only integral action gives zero, and gives it at every gain.**
- **You might accept a leaky integrator as "close enough".** A leak $\alpha$ leaves residual error $\kappa u\,\alpha/(k\lambda+\alpha)$, which is small but scales with the input and depends on every parameter. Exactness is all-or-nothing: either the controller species has zero-order removal or the adaptation is tuned.
- **You might expect the theorem to guarantee adaptation always works.** It guarantees it *if a steady state is reached*. Integrators saturate, and integral feedback with delay is a classic route to instability and oscillation — which is exactly the door [3.4](03-04-oscillations-repressilator-hopf.md) walks through.

## One-liner

> An integrator can only stop where the error is zero, so exact adaptation is forced by the *presence of a loop*, not by the values in it — which is why precision survives fifty-fold changes in protein expression while adaptation time does not.

## Problems

**P1 (🟢)** A controller leaks: $\dot m = k(y-y_0) - \alpha m$, with the fast plant $y - y_0 = \kappa u - \lambda m$. (a) Solve for the steady-state error. (b) With $k\lambda = 1.00$ per minute and $\alpha = 0.02$ per minute, what fraction of the initial excursion remains? (c) In one sentence, why is this *not* robust adaptation even though the number is small?

**P2 (🟡)** Use the Barkai–Leibler model $\dot M = V_R - kA$ with $V_R = 1.0$ methyl per minute, $k = 3.0$ per minute and $a = \partial A/\partial M = 0.10$ per methyl. (a) A mutant overexpresses CheR fourfold, $V_R = 4.0$. Give its baseline activity and adaptation time constant. (b) Both wild type and mutant receive an attractant step that drops activity instantaneously by 0.15. Give the methylation change each must make, and the precision each achieves. (c) State which measured quantities distinguish the two strains and which do not.

**P3 (🔴, bridges to control-systems)** (a) Show that proportional feedback can never achieve exact adaptation, and compute the loop gain needed for a residual error of 1 percent of the open-loop excursion. (b) Explain, using the final-value theorem, why "the controller contains an integrator" and "the open-loop transfer function has a pole at the origin" are the same statement, and give the resulting system type number and its steady-state error to a step and to a ramp. (c) Say in one sentence why the pole-at-the-origin formulation makes the *robustness* obvious.

<details>
<summary>Solutions</summary>

**P1 (a)** At steady state $\dot m = 0$:

$$0 = k(\kappa u - \lambda m^*) - \alpha m^* \;\Longrightarrow\; m^*(k\lambda + \alpha) = k\kappa u \;\Longrightarrow\; m^* = \frac{k\kappa u}{k\lambda+\alpha}.$$

$$y^* - y_0 = \kappa u - \lambda m^* = \kappa u\left(1 - \frac{k\lambda}{k\lambda+\alpha}\right) = \boxed{\;\kappa u\,\frac{\alpha}{k\lambda+\alpha}\;}$$

**(b)** The initial excursion (before $m$ moves) is $\kappa u$, so the surviving fraction is

$$\frac{\alpha}{k\lambda+\alpha} = \frac{0.02}{1.00+0.02} = \mathbf{0.0196}, \ \text{i.e. } \mathbf{2.0\ \text{percent}}.$$

**(c)** Because the residual **contains every parameter and scales with the input**. Double $u$ and the absolute error doubles; halve $k$ and the fractional error roughly doubles. Adaptation this good is a *coincidence of the numbers*, maintainable only by holding $\alpha/k\lambda$ small — which is tuning. The exact case leaves nothing to tune, and that is the entire difference.

**P2 (a)** $$A^* = \frac{V_R}{k} = \frac{4.0}{3.0} = \mathbf{1.33}.$$

**This is impossible** — $A$ is a fraction and cannot exceed 1. The interpretation is exactly the windup of the formal section: the demanded setpoint lies outside the plant's range, so no steady state exists. Methylation runs to its ceiling, the receptors sit fully active, and the cell tumbles constantly without adapting. *The theorem's "if a stable steady state exists" clause is doing real work here.* (Take instead a milder overexpression, $V_R = 2.0$: then $A^* = 0.667$ and $\tau = 1/(ka) = 1/(3.0\times0.10) = 3.33$ min — the baseline doubles, the time constant is unchanged, since $\tau$ depends on $k$ and $a$ but not on $V_R$.)

**(b)** Wild type: $A^* = 0.333$, activity drops to $0.183$, so

$$\Delta M = \frac{0.150}{0.10} = \mathbf{1.50\ \text{methyls}}, \qquad \text{precision } = \frac{0.333}{0.333} = \mathbf{1}.$$

Mutant at $V_R = 2.0$: $A^* = 0.667$, activity drops to $0.517$, and

$$\Delta M = \frac{0.150}{0.10} = \mathbf{1.50\ \text{methyls}}, \qquad \text{precision } = \mathbf{1}.$$

**Identical methylation change, identical precision, different baselines.** The methylation change depends only on the size of the activity drop and on $a$ — it is set by the plant, not by the controller.

**(c)** **Distinguishes them:** steady-state activity, hence steady-state tumbling frequency and run length; also the adaptation time if $k$ or $a$ differs. **Does not distinguish them:** adaptation precision, which is 1 in both. So a population of cells with 50-fold scatter in CheR expression shows wide scatter in baseline swimming behaviour and near-zero scatter in precision — which is what the measurements found, and which is only interesting once you know the two are governed by different equations.

**P3 (a)** With $m = g\,y$ and plant $y = \kappa u - \lambda m$:

$$y^* = \frac{\kappa u}{1 + \lambda g} = \frac{\kappa u}{1 + L}, \qquad L \equiv \lambda g .$$

This is zero only in the limit $L \to \infty$; for any finite gain it is strictly nonzero. For a residual of 1 percent of $\kappa u$:

$$\frac{1}{1+L} = 0.01 \;\Longrightarrow\; L = \mathbf{99}.$$

**And that gain must be *held* at 99.** A 50 percent drop in $\lambda$ takes the residual from 1.0 percent to $1/(1+49.5) = 1.98$ percent — the precision tracks the gain, one for one. Meanwhile very high loop gain is exactly what destabilizes a loop with delay ([control-systems 2.4](../../control-systems/lessons/02-04-stability-routh-hurwitz.md)), so the proportional route buys precision with stability margin. Integral action buys it for free.

**(b)** Integral action means the controller's transfer function is $C(s) = k/s$. The error to a reference or disturbance $R(s)$ in a unit-feedback loop is $E(s) = R(s)/(1+L(s))$ with $L = CG$, so for a unit step $R(s) = 1/s$ the final-value theorem gives

$$e_{ss} = \lim_{s\to 0} s\,E(s) = \lim_{s \to 0}\frac{1}{1+L(s)} .$$

If $L$ has a pole at the origin, $L(s) \to \infty$ as $s \to 0$ and $e_{ss} = 0$. **So "there is an integrator in the loop" and "there is a pole at $s = 0$" are the same fact stated in two languages**, and both are the same fact as "$\dot m = e$ forces $e^* = 0$" — a Laplace pole at the origin *is* an undamped accumulator in the time domain.

One pole at the origin makes the loop **Type 1**: zero steady-state error to a step, and a finite nonzero error $1/K_v$ to a ramp ([control-systems 2.3](../../control-systems/lessons/02-03-steady-state-error-system-type.md)). *In biological terms: the cell adapts exactly to a sudden change in attractant level, but a steadily ramping concentration leaves a persistent offset in activity — which is precisely what makes a swimming bacterium report a gradient rather than a level.*

**(c)** Because **the number of poles at the origin is a topological fact about the loop, not a numerical one.** Perturbing rate constants slides the other poles around — changing the transient, the settling time, even the stability — but it cannot create or destroy a pole at $s=0$, because that pole exists by virtue of a variable having no self-decay term at all. Robustness of precision is the robustness of an integer.

</details>

## Flashback

**From Lesson 2.5 (Incoherent FFLs & temporal programs):** A single-input module has one activator $X$ driving four target genes. After induction $X$ rises as $X(t) = X_{\max}\left(1 - e^{-t/\tau}\right)$ with $X_{\max} = 100$ nM and $\tau = 10$ min. The four promoters have activation thresholds $K_1 = 20$, $K_2 = 45$, $K_3 = 70$, $K_4 = 90$ nM. (a) Give the order and the times at which the four genes switch on. (b) At $t = 60$ min the signal is removed and $X$ decays as $X(t) = X(60)\,e^{-(t-60)/\tau}$. Give the order and times at which they switch off. (c) State the design principle in one sentence, and say what encodes the schedule.

<details>
<summary>Solution</summary>

**(a)** Gene $i$ turns on when $X(t_i) = K_i$:

$$X_{\max}\left(1 - e^{-t_i/\tau}\right) = K_i \;\Longrightarrow\; t_i = -\tau\ln\!\left(1 - \frac{K_i}{X_{\max}}\right).$$

| Gene | $K_i$ (nM) | $1 - K_i/X_{\max}$ | $t_{\text{on}}$ (min) |
|---|---|---|---|
| 1 | 20 | 0.80 | $-10\ln 0.80 = \mathbf{2.23}$ |
| 2 | 45 | 0.55 | $-10\ln 0.55 = \mathbf{5.98}$ |
| 3 | 70 | 0.30 | $-10\ln 0.30 = \mathbf{12.04}$ |
| 4 | 90 | 0.10 | $-10\ln 0.10 = \mathbf{23.03}$ |

**Order 1, 2, 3, 4 — lowest threshold first.** Note the spacing accelerates: 2.2, then 3.8, then 6.1, then 11.0 minutes between successive genes, because $X$ is flattening as it approaches $X_{\max}$. A promoter set just below $X_{\max}$ fires very late and very imprecisely.

**(b)** $X(60) = 100\left(1 - e^{-6}\right) = 99.75$ nM. Gene $i$ turns off when $99.75\,e^{-(t-60)/10} = K_i$, i.e. $t = 60 + 10\ln(99.75/K_i)$:

| Gene | $K_i$ | $t_{\text{off}}$ (min) |
|---|---|---|
| 4 | 90 | $60 + 10\ln 1.108 = \mathbf{61.03}$ |
| 3 | 70 | $60 + 10\ln 1.425 = \mathbf{63.54}$ |
| 2 | 45 | $60 + 10\ln 2.217 = \mathbf{67.96}$ |
| 1 | 20 | $60 + 10\ln 4.988 = \mathbf{76.07}$ |

**Order 4, 3, 2, 1 — last in, first out.** The rank order reverses automatically, because the same thresholds are now crossed on the way down.

**(c)** **A monotonic regulator read against a set of promoter thresholds produces a fixed temporal sequence, and the sequence is stored entirely in binding affinities — there is no clock, no timer and no cascade of intermediates anywhere in the circuit.** In flagellar assembly and amino-acid biosynthesis the threshold rank matches the order in which the gene products are actually needed, giving just-in-time production; and the LIFO shutdown means the most recently committed, least-completed step is abandoned first when the signal is withdrawn.

</details>

## Connections

- **Backward:** [2.5](02-05-incoherent-ffl-temporal-programs.md)'s incoherent FFL is the *approximate*, tuned adaptor; this lesson supplies the exact, structural one, and the exhaustive three-node search says those two are the only options. [3.2](03-02-bistability-toggle-switch.md) analysed a fixed point that *moves* with a parameter; here the fixed point's output cannot move at all. [molecular-cell-biology 2.4](../../molecular-cell-biology/lessons/02-04-circuits-feedback-adaptation.md) gave the qualitative feedback-and-adaptation pass with the molecules attached — the theorem, the leak calculation and the precision-versus-time split are what this lesson adds.
- **Forward:** [3.4](03-04-oscillations-repressilator-hopf.md) takes the same negative feedback and adds enough delay to destabilize it, turning correction into oscillation — integral control and biological clocks are the stable and unstable branches of one story. The saturated-enzyme requirement for a true integrator is the zero-order regime derived in [4.4](04-04-signal-transduction-cascades.md). [4.5](04-05-synthetic-biology-pattern-formation.md) revisits robustness as the property engineered circuits most often lack.
- **Sideways:** this is [control-systems 4.1](../../control-systems/lessons/04-01-pid-control.md)'s integral term, [control-systems 2.3](../../control-systems/lessons/02-03-steady-state-error-system-type.md)'s Type-1 system, and [control-systems 1.5](../../control-systems/lessons/01-05-block-diagram-algebra.md)'s block algebra, with methylation playing the integrator. The same distinction organizes mammalian homeostasis — [physiology 1.1](../../physiology/lessons/01-01-homeostasis-feedback-control.md)'s set points are exactly the question of which regulated variables are pinned structurally and which merely tightly. And the physical reason a bacterium must adapt at all is [biophysics 1.5](../../biophysics/lessons/01-05-low-reynolds-number.md): no inertia, no steering, so sensing must be temporal.
