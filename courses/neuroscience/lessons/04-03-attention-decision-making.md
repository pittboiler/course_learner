# Neuroscience · Lesson 4.3: Attention and decision-making

> ⏱ ~15 min · Module 4: Learning, memory & cognition · Builds on: [4.2](04-02-memory-systems.md), [2.6](02-06-circuit-motifs-computation.md) · Unlocks: 4.4 (disease, a taste)

## Why this matters

Everything before this lesson has been about *capacity used well*: channels, synapses, maps, memories. This lesson is about **capacity exceeded**. The brain receives far more than it can process, and processes far more than it can act on, so at two different points it is forced to **select** — attention selects what gets processed, decision selects what gets done.

The syllabus calls this "a taste," and there is a version of it that is a tour of cognitive-neuroscience vocabulary. That version is not worth your fifteen minutes. Instead: **two problems, each with a quantitative model that fits behaviour and neurons at the same time**, which is a rare thing in this field and worth seeing done properly.

The unifying claim is that neither selection needs a chooser. **Attention is a rescaling of the terms in an equation you already met in [2.6](02-06-circuit-motifs-computation.md); decision is a random walk to a threshold.** No homunculus appears in either, and the models make quantitative predictions that a homunculus could not.

## The idea

**The capacity argument, in numbers.** Each optic nerve carries roughly $1.2\times10^{6}$ ganglion-cell axons ([3.2](03-02-vision.md)). Even at a conservative few bits per second per axon, both eyes together deliver on the order of

$$2 \times (1.2\times10^{6}) \times 3\ \text{bits s}^{-1} \approx 7\times10^{6}\ \text{bits s}^{-1}$$

while the rate at which a person can report or act on visual information is measured in **tens** of bits per second. The individual estimates are soft — retinal output-rate estimates vary by an order of magnitude, and behavioural throughput depends entirely on the task. **The gap is not soft.** It is four to five orders of magnitude, and no defensible revision of either number closes it. Something must throw almost everything away, and the interesting question is what governs the discarding.

**Two ways to steer the discarding.** *Bottom-up* (salience-driven) selection is stimulus-controlled — the one red item among green ones "pops out" whether you want it to or not. *Top-down* (goal-directed) selection is controlled by what you are looking for, and is carried by a frontoparietal network — frontal eye fields, intraparietal areas — projecting back onto sensory cortex. Naming the areas is the least interesting part. **What matters is what those projections do to a sensory neuron.**

**Three measured effects of attention on a neuron, and one model that produces all three.**

1. **Response gain** — attending to a stimulus in a neuron's receptive field multiplies its firing rate, typically by tens of percent.
2. **Receptive-field shrinkage** — the field contracts around the attended location, so the neuron reports about a smaller patch of the world.
3. **Decorrelation** — attention *reduces* the shared trial-to-trial noise between neurons in the population.

The third is the least intuitive and, quantitatively, the most consequential. Hold onto it; the formal section shows that **no amount of extra neurons can substitute for a small decrease in noise correlation**.

**The model: attention adjusts the terms of a normalization equation.** [2.6](02-06-circuit-motifs-computation.md) gave divisive normalization — a neuron's response is its own drive divided by a pooled drive from its neighbours. The normalization model of attention says that attention does not add a separate "attention signal." It **multiplies the drive from the attended stimulus by a gain factor before the division happens**, and everything else follows.

This is worth stating as a prediction rather than a description, because it makes a sharp one: **attentional effects should be large when a competing stimulus is present and small when the attended stimulus is alone in the field.** With no competitor, boosting the numerator also boosts the denominator, and the two nearly cancel. With a competitor, boosting one stimulus's drive raises your numerator and steals denominator share from the rival. Worked example 1 does the arithmetic; the effect is roughly **three times larger** with a competitor. That is what is observed, and it is the reason the older "attention is a spotlight that brightens things" picture failed — the spotlight has no reason to care whether something else is nearby.

The older framing this modernizes is **biased competition**: stimuli in a receptive field compete, and attention biases the competition rather than creating a signal. Normalization is what that framing looks like when you write it as an equation.

**Now the decision half.** Once evidence has been selected, something has to commit. The dominant model — and the field's cleanest instance of one model fitting behaviour and single neurons simultaneously — is the **drift–diffusion model**: noisy evidence is integrated over time, and the first moment the running total reaches a bound, the corresponding choice is made.

Two parameters do all the work. The **drift rate** $A$ is the quality of the evidence per unit time (how strong the motion is, how distinct the two faces are). The **bound height** $B$ is how much accumulated evidence you demand before committing — and it is not a property of the stimulus at all. **It is chosen, and choosing it is exactly the speed–accuracy trade-off.**

**The claim that makes this more than a curve fit:** accuracy and the entire reaction-time distribution — mean, spread, skew, the difference between error and correct trials — all fall out of those two numbers. The model has almost no freedom to make one of them fit and the other not.

## The formal version

**Normalization with an attentional gain.** For a neuron $i$ with drive $d_i$ from each stimulus $j$ and a normalization pool that sums the stimulus energies $D_j$:

$$\boxed{\;R_i \;=\; R_{\max}\,\frac{\sum_j \beta_j\, d_{ij}}{\sigma \;+\; \sum_j \beta_j D_j}\;}$$

*In words: the neuron's response is the tuned drive it receives, divided by the total drive present in its normalization pool plus a saturation constant — and attention enters as a multiplier $\beta_j$ on one stimulus, appearing in the numerator and the denominator alike.*

Here $\beta_j = 1$ for unattended stimuli and $\beta_j > 1$ for the attended one; $\sigma$ is the semi-saturation constant; $d_{ij}$ is the drive stimulus $j$ delivers to *this* neuron (large for its preferred stimulus, small otherwise); $D_j$ is the untuned energy stimulus $j$ contributes to the pool. **Attention adds no term. It reweights the terms already there** — which is why its size depends on what else is in the field.

**Noise correlations and why decorrelation is not a small effect.** Take $N$ neurons, each with response variance $\sigma_r^2$ and mean pairwise correlation $\rho$ between them. A downstream reader that averages them gets

$$\mathrm{Var}(\bar r) \;=\; \frac{\sigma_r^{2}}{N}\bigl[\,1 + (N-1)\rho\,\bigr] \;\xrightarrow[\;N\to\infty\;]{}\; \rho\,\sigma_r^{2}$$

*In words: averaging kills independent noise but not shared noise, so the pooled variance does not go to zero — it floors at $\rho\sigma_r^2$ no matter how many neurons you pool.*

$$\boxed{\;\text{Correlated noise sets a ceiling on population precision that more neurons cannot raise.}\;}$$

This is the [3.1](03-01-transduction-neural-coding.md) point about correlated noise limiting Fisher information, made arithmetically. **It is why "attention reduces noise correlations by a few hundredths" is a large claim, not a small one** — P3 shows that a reduction from $\rho = 0.12$ to $0.08$ beats what infinitely many neurons could achieve at $\rho = 0.12$.

**The drift–diffusion model.** Let $x(t)$ be the accumulated evidence, $x(0)=0$, evolving as

$$dx \;=\; A\,dt \;+\; \sigma\,dW$$

with $W$ a standard Wiener process, and absorbing bounds at $x = +B$ (choice 1) and $x = -B$ (choice 2). *In words: evidence arrives at an average rate $A$ with noise of size $\sigma$ per unit $\sqrt{\text{time}}$, and the decision is whichever bound is hit first.* Solving the first-passage problem — a martingale plus optional stopping, exactly the machinery of [probability-theory 5.4](../../probability-theory/lessons/05-04-stopping-times-optional-stopping.md) — gives two closed forms:

$$\boxed{\;P_{\text{correct}} \;=\; \frac{1}{1+\exp\!\left(-\dfrac{2AB}{\sigma^{2}}\right)}, \qquad T_{\text{decision}} \;=\; \frac{B}{A}\,\tanh\!\left(\frac{AB}{\sigma^{2}}\right)\;}$$

*In words: accuracy is a logistic function of $2AB/\sigma^2$, and the mean decision time is the ballistic time $B/A$ discounted by a factor that approaches 1 when the evidence is strong.* Measured reaction time is $T_{\text{decision}} + T_{\text{nd}}$, where the **non-decision time** $T_{\text{nd}}$ (sensory delay plus motor execution, typically 200–400 ms) is the model's one concession to biology.

**Two limits worth checking.** With $A\to0$, $\tanh(u)\approx u$ and $T\to B^2/\sigma^2$ — the exit time of a pure random walk, quadratic in the bound. With $A$ large, $\tanh\to1$ and $T\to B/A$ — straight to the bound with no dithering.

**The asymmetry that governs everything.** For a high bound, $P_{\text{error}} \approx e^{-2AB/\sigma^2}$ while $T \to B/A$. So:

$$\boxed{\;\text{Errors fall \textit{exponentially} in bound height; time grows only \textit{linearly}.}\;}$$

That is why the speed–accuracy curve has the shape it does: cheap accuracy at the start, then brutally diminishing returns. In the figure's numbers, raising $B$ from 0.25 to 2.0 costs $17\times$ more time and buys an $800$-fold drop in errors — but almost all of that gain arrives in the first third of the time spent.

**Why this model and not another: it is optimal.** Note that the accuracy formula says

$$\log\frac{P_{\text{correct}}}{1-P_{\text{correct}}} \;=\; \frac{2AB}{\sigma^{2}}$$

which is exactly the value of $2Ax/\sigma^2$ at the bound. **The decision variable, correctly scaled, *is* the log posterior odds** between the two hypotheses — a running log-likelihood ratio ([information-theory 1.4](../../information-theory/lessons/01-04-relative-entropy-kl-jensen.md)). Stopping when it reaches $\pm B$ is Wald's **sequential probability ratio test**, which minimizes the expected number of samples for any fixed pair of error rates ([prob-stat-refresher 4.3](../../prob-stat-refresher/lessons/04-03-hypothesis-testing.md)). The drift–diffusion model is its continuous-time limit.

**So behaviour is being compared against a normative standard rather than a plausible mechanism** — which is why deviations from it are informative rather than merely disappointing.

**Neural evidence.** In monkeys discriminating motion direction, neurons in area LIP and related regions ramp during the decision, with a **slope that scales with evidence strength** and a level at the moment of commitment that is roughly the same regardless of how long the trial took. That is the accumulator's signature: variable rate, fixed threshold. It is as direct a measurement of a posited computational variable as neuroscience has.

**Confidence falls out for free.** At the bound, log-odds correct is $2AB/\sigma^2$ — fixed. But the drift rate varies from trial to trial, so **elapsed time is informative**: reaching the same bound quickly implies a steeper drift, hence better evidence, hence higher confidence. Confidence is readable as $P(\text{correct}\mid x, t)$ from the same accumulator, with no separate confidence machinery, and it predicts the observed pattern — fast decisions are reported more confidently even when they are wrong.

## Picture

![Panel a shows the drift-diffusion model. A decision variable starts at zero and accumulates noisy evidence over time. Four blue single-trial trajectories wander upward and cross the upper green bound at different times between about 180 and 780 milliseconds, and one red trajectory drifts the wrong way and crosses the lower red bound at about 450 milliseconds. A dashed black line shows the mean path, whose slope is the drift rate. Above the upper bound a green reaction-time density rises quickly and falls with a long right tail; below the lower bound a much smaller red error reaction-time density is drawn, scaled eight times so it is visible. With drift 2 units per second, noise 1, and bound 1 unit, accuracy is 98.2 percent and the mean decision time is 482 milliseconds. Panel b plots accuracy against mean decision time as the bound height alone is varied, with drift and noise held fixed. The curve rises steeply from 73 percent at 58 milliseconds to 88 percent at 190 milliseconds, then flattens toward 100 percent, reaching 99.97 percent at 999 milliseconds. A table beside it lists bound heights, decision times and error rates, showing that seventeen times more time buys an eight hundred fold reduction in errors, because the error rate falls exponentially in bound height while decision time grows only linearly.](assets/04-03-fig1.svg)

## Worked examples

**Example 1 (mechanical — why attention's size depends on the competition).** A V4 neuron has $R_{\max} = 100$ spikes/s and semi-saturation $\sigma = 10$. Its preferred stimulus delivers tuned drive $d_p = 40$; a non-preferred stimulus delivers $d_n = 5$. Each stimulus, whatever the tuning, contributes $D = 40$ to the normalization pool. Attention multiplies its target's drive by $\beta = 2$. Compute the response (a) to the preferred stimulus alone, unattended and attended; (b) to both stimuli together, unattended, attending the preferred, and attending the non-preferred.

**(a) Preferred stimulus alone.**

$$R_{\text{unatt}} = 100 \cdot \frac{40}{10+40} = \frac{4000}{50} = \mathbf{80.0\ \text{spikes/s}}$$

$$R_{\text{att}} = 100 \cdot \frac{2(40)}{10+2(40)} = \frac{8000}{90} = \mathbf{88.9\ \text{spikes/s}}$$

$$\text{attentional gain} = \frac{88.9}{80.0} = 1.111 \;\Rightarrow\; \mathbf{+11.1\ \text{percent}}$$

**Notice why it is small.** $\beta$ multiplied the numerator *and* most of the denominator, so the two effects nearly cancel. Only the constant $\sigma$ fails to scale, and that residue is the whole effect.

**(b) Both stimuli in the receptive field.** For reference, the non-preferred stimulus alone gives $100(5)/(10+40) = 10.0$ spikes/s.

$$R_{\text{pair, unatt}} = 100\cdot\frac{40+5}{10+40+40} = \frac{4500}{90} = \mathbf{50.0\ \text{spikes/s}}$$

**This is the classic biased-competition result before any attention is applied:** adding a second, poorly-driving stimulus *halves* the response to the good one. The neuron reports something intermediate between its two stimuli, not the sum.

$$R_{\text{attend preferred}} = 100\cdot\frac{2(40)+5}{10+2(40)+40} = \frac{8500}{130} = \mathbf{65.4\ \text{spikes/s}} \quad (+30.8\ \text{percent})$$

$$R_{\text{attend non-preferred}} = 100\cdot\frac{40+2(5)}{10+40+2(40)} = \frac{5000}{130} = \mathbf{38.5\ \text{spikes/s}} \quad (-23.1\ \text{percent})$$

**Compare the modulations: 30.8 percent with a competitor versus 11.1 percent without — a factor of 2.8.** Nothing was added to the model to produce that; it is the same equation with the same $\beta$.

And read the direction: attending the preferred stimulus pushes the paired response (50.0) toward the preferred-alone response (80.0); attending the non-preferred pushes it toward the non-preferred-alone response (10.0). **Attention makes the neuron behave partly as though the ignored stimulus were not there** — which is what "biased competition" meant all along, now with a number attached.

**Example 2 (why you'd care — the optimal observer is deliberately error-prone).** A subject performs a long block of two-choice trials with drift $A = 2$ units/s, $\sigma = 1$ unit/$\sqrt{\text{s}}$. Non-decision time is 300 ms and the inter-trial interval is 1000 ms, so every trial carries $1.3$ s of dead time regardless of the decision. The subject is rewarded per correct trial and wants to maximize **reward rate**, correct answers per second:

$$\mathrm{RR}(B) = \frac{P_{\text{correct}}(B)}{T_{\text{decision}}(B) + 1.3\ \text{s}}$$

Which bound should they choose?

Evaluate the two closed forms at several bounds:

| $B$ | $2AB/\sigma^2$ | accuracy | $T_{\text{decision}}$ | $\mathrm{RR}$ (correct/s) |
|---|---|---|---|---|
| 0.25 | 1.0 | 73.1 percent | 58 ms | 0.538 |
| 0.50 | 2.0 | 88.1 percent | 190 ms | 0.591 |
| **0.55** | **2.2** | **90.0 percent** | **220 ms** | **0.592** |
| 1.00 | 4.0 | 98.2 percent | 482 ms | 0.551 |
| 2.00 | 8.0 | 99.97 percent | 999 ms | 0.435 |

Check the optimum by hand at $B=0.55$:

$$P_c = \frac{1}{1+e^{-2.2}} = \frac{1}{1+0.1108} = 0.9002, \qquad T_d = \frac{0.55}{2}\tanh(1.1) = 0.275(0.8005) = 0.2201\ \text{s}$$

$$\mathrm{RR} = \frac{0.9002}{0.2201+1.3} = \frac{0.9002}{1.5201} = \mathbf{0.592\ \text{correct/s}}$$

**The reward-maximizing observer settles at about 90 percent accuracy, not 98.** Insisting on 98.2 percent costs 7 percent of the reward rate; insisting on 99.97 percent costs 27 percent.

$$\boxed{\;\text{Errors are not a failure of the machinery. At the optimum, one answer in ten is deliberately wrong.}\;}$$

**Now change one thing that has nothing to do with the stimulus.** Cut the dead time from 1.3 s to 0.5 s — same eyes, same evidence, same neurons. The optimum moves to $B = 0.33$, giving **78.9 percent accuracy** and a 95 ms decision.

**The optimal accuracy dropped by eleven points because the inter-trial interval got shorter.** This is the payoff of separating $A$ from $B$: evidence quality is imposed by the world, but the bound is a policy, and the right policy depends on what time is worth. It is also, incidentally, what makes drift–diffusion useful clinically and in applied settings — fitting a slowed subject's data separates "the evidence got worse" from "they got more cautious," which the raw accuracy and reaction times cannot.

## Watch out

- **You might think attention is a spotlight that adds brightness to what you look at.** It rescales the terms of a normalization equation. That is why the size of the effect depends on what *else* is in the receptive field — 31 percent with a competitor, 11 percent without, from the same gain factor. A spotlight has no reason to care about the neighbours.
- **You might treat the bound as a fixed property of the observer.** It is a policy variable, re-set trial by trial under instruction, reward and urgency. Two subjects with identical sensory machinery can differ by ten points of accuracy purely in $B$ — and fitting the model separates that from a genuine drift-rate difference, which is most of why anyone fits it.
- **You might read averaged ramping activity as proof of within-trial accumulation.** Averaging over trials in which the neuron *steps* abruptly at a random time produces a smooth ramp in the average. Distinguishing the two requires single-trial analysis, and the evidence there is genuinely mixed. **The lesson generalizes past this example: a trial-averaged time course can have a shape no single trial ever had.**
- **You might think reducing noise correlations is just "a bit less noise."** The pooled variance floors at $\rho\sigma_r^2$, so correlated noise is the one nuisance that adding neurons cannot average away. A drop from $\rho=0.12$ to $\rho=0.08$ beats what an *infinite* population could do at $\rho=0.12$ (P3).
- **You might think drift–diffusion is the truth about choice.** It is an excellent instrument with known failures: it does not extend cleanly to more than two alternatives, it does not naturally produce changes of mind, and fitting real data often requires a **collapsing bound** or an urgency signal — a deadline effect the pure model has no room for. Treat it as the right first model, not the last one.
- **You might expect this lesson to say something about consciousness or volition.** It does not, deliberately. Evidence accumulation to a bound explains commitment; it does not explain awareness of committing, and nothing in this lesson licenses the stronger claim.

## One-liner

> Both halves of selection are competition under a capacity limit and neither needs a chooser: attention multiplies one stimulus's drive inside a normalization equation — so its effect is large only when there is a rival to steal from — and choice is a noisy walk to a bound, where the drift is what the world gave you and the bound is a policy you set, with errors falling exponentially in it while time grows only linearly.

## Problems

**P1 (🟢)** An observer has drift rate $A = 3$ evidence units/s, noise $\sigma = 1$ unit/$\sqrt{\text{s}}$, symmetric bounds at $\pm B$ with $B = 0.8$ units, and non-decision time 250 ms.
(a) Compute the accuracy and the mean reaction time.
(b) A harder stimulus halves the drift rate to $A = 1.5$, with everything else unchanged. Recompute both.
(c) State in one sentence what makes this pair of results a *test* of the model rather than a fit.

**P2 (🟡)** A neuron has $R_{\max} = 100$ spikes/s and $\sigma = 8$. Its preferred stimulus delivers tuned drive $d_p = 30$, a non-preferred stimulus delivers $d_n = 6$, and each stimulus contributes $D = 30$ to the normalization pool. Attention multiplies its target's drive by $\beta = 3$.
(a) Response to the preferred stimulus alone, unattended and attended; give the attentional gain as a percentage.
(b) Response with both stimuli present, unattended and attending the preferred; give that gain.
(c) Compare (a) and (b) and state the experimental prediction this makes, plus how you would falsify it.

**P3 (🔴, bridges to information theory and to the drift–diffusion model)** A downstream area reads out a population of $N = 200$ neurons by averaging. Each has response variance $\sigma_r^2$; the mean pairwise noise correlation is $\rho = 0.12$.
(a) Compute the variance of the pooled average, and its limit as $N\to\infty$.
(b) Attention lowers the correlation to $\rho = 0.08$ with $N$ unchanged. Compute the new pooled variance, the improvement in signal-to-noise ratio, and show that **no population size whatsoever** achieves this at $\rho = 0.12$.
(c) Suppose that SNR improvement raises the drift rate proportionally, from $A = 2.0$ to the new value, with $B = 1$, $\sigma = 1$ unchanged. Compute the error rate and mean decision time before and after, and say why the result is *not* a movement along the speed–accuracy trade-off.

<details>
<summary>Solutions</summary>

**P1 (a)** With $A = 3$, $B = 0.8$, $\sigma^2 = 1$:

$$\frac{2AB}{\sigma^2} = 2(3)(0.8) = 4.8 \;\Longrightarrow\; P_c = \frac{1}{1+e^{-4.8}} = \frac{1}{1+0.008230} = \mathbf{0.9918}\ (99.18\ \text{percent})$$

$$T_d = \frac{B}{A}\tanh\!\left(\frac{AB}{\sigma^2}\right) = \frac{0.8}{3}\tanh(2.4) = 0.26667 \times 0.98367 = 0.2623\ \text{s}$$

$$\text{RT} = 262 + 250 = \mathbf{512\ \text{ms}}$$

**(b)** With $A = 1.5$: $\;2AB/\sigma^2 = 2.4$.

$$P_c = \frac{1}{1+e^{-2.4}} = \frac{1}{1.090718} = \mathbf{0.9168}\ (91.68\ \text{percent})$$

$$T_d = \frac{0.8}{1.5}\tanh(1.2) = 0.53333 \times 0.83366 = 0.4446\ \text{s} \;\Longrightarrow\; \text{RT} = \mathbf{695\ \text{ms}}$$

**(c)** **One parameter moved and both observables moved, in a *fixed* relationship.** Halving the drift made the observer 7.5 points less accurate *and* 183 ms slower, and the model had no freedom to choose those two numbers independently — with $B$, $\sigma$ and $T_{\text{nd}}$ pinned, $A$ traces out a one-dimensional curve in the (accuracy, RT) plane.

A model that fitted accuracy and reaction time with separate parameters would explain any pair of results and therefore predict nothing. This one can be wrong: if the harder condition had come out slower *and* equally accurate, or faster and less accurate, no value of $A$ would have produced it, and you would have to conclude the subject also changed the bound.

**P2 (a)** Preferred alone:

$$R_{\text{unatt}} = 100\cdot\frac{30}{8+30} = \frac{3000}{38} = \mathbf{78.9\ \text{spikes/s}}$$

$$R_{\text{att}} = 100\cdot\frac{3(30)}{8+3(30)} = \frac{9000}{98} = \mathbf{91.8\ \text{spikes/s}}$$

$$\text{gain} = \frac{91.84}{78.95} = 1.163 \;\Rightarrow\; \mathbf{+16.3\ \text{percent}}$$

**(b)** Both stimuli present. Numerator sums the tuned drives; denominator sums the pool contributions of both.

$$R_{\text{unatt}} = 100\cdot\frac{30+6}{8+30+30} = \frac{3600}{68} = \mathbf{52.9\ \text{spikes/s}}$$

$$R_{\text{attend preferred}} = 100\cdot\frac{3(30)+6}{8+3(30)+30} = \frac{9600}{128} = \mathbf{75.0\ \text{spikes/s}}$$

$$\text{gain} = \frac{75.00}{52.94} = 1.417 \;\Rightarrow\; \mathbf{+41.7\ \text{percent}}$$

**(c)** The same attentional gain $\beta = 3$ produces **16.3 percent modulation with the stimulus alone and 41.7 percent with a competitor — a factor of 2.6.**

**The prediction:** measure a neuron's attentional modulation twice, once with a single stimulus in the receptive field and once with a second stimulus added, holding the attended stimulus and the task identical. The modulation must be substantially larger in the paired condition, and the paired response must move *toward* the response the attended stimulus evokes alone (here $52.9 \to 75.0$, heading for $78.9$).

**How to falsify it:** if attentional modulation were roughly the same size in both conditions, the additive-signal ("spotlight") account would be right and the normalization account wrong. It is a genuinely risky prediction, because the additive account is the intuitive one and makes the opposite call.

A second, sharper test is available: attending the *non-preferred* member of the pair must **decrease** the response — here to $100(30+18)/(8+30+90) = 4800/128 = 37.5$ spikes/s, a 29 percent drop. An additive spotlight has no mechanism for attention to *reduce* a firing rate.

**P3 (a)** $$\mathrm{Var}(\bar r) = \frac{\sigma_r^2}{200}\bigl[1 + 199(0.12)\bigr] = \frac{\sigma_r^2}{200}(1+23.88) = \frac{24.88}{200}\sigma_r^2 = \mathbf{0.1244\,\sigma_r^2}$$

$$\lim_{N\to\infty}\mathrm{Var}(\bar r) = \rho\,\sigma_r^2 = \mathbf{0.1200\,\sigma_r^2}$$

**Two hundred neurons already sit within 4 percent of the infinite-population floor.** Pooling more is essentially worthless here.

**(b)** $$\mathrm{Var}(\bar r) = \frac{\sigma_r^2}{200}\bigl[1+199(0.08)\bigr] = \frac{1+15.92}{200}\sigma_r^2 = \frac{16.92}{200}\sigma_r^2 = \mathbf{0.0846\,\sigma_r^2}$$

Signal-to-noise scales as $1/\sqrt{\mathrm{Var}}$, so

$$\frac{\text{SNR}_{\text{new}}}{\text{SNR}_{\text{old}}} = \sqrt{\frac{0.1244}{0.0846}} = \sqrt{1.4704} = \mathbf{1.213} \;\Rightarrow\; \mathbf{+21\ \text{percent}}$$

**And it is unreachable by pooling.** At $\rho = 0.12$ the pooled variance is bounded below by $0.1200\,\sigma_r^2$ for *every* $N$, and

$$0.0846\,\sigma_r^2 \;<\; 0.1200\,\sigma_r^2$$

so **no population size at $\rho = 0.12$ matches what 200 decorrelated neurons achieve.** Recruiting neurons and decorrelating them are not interchangeable: the first hits a wall, the second moves the wall.

**(c)** The new drift is $A' = 2.0 \times 1.213 = 2.425$ units/s, with $B = 1$, $\sigma = 1$.

| | $2AB/\sigma^2$ | error rate | $T_{\text{decision}}$ |
|---|---|---|---|
| before | 4.00 | $1/(1+e^{4.00}) = 1.80$ percent | $\tfrac{1}{2}\tanh(2) = 482$ ms |
| after | 4.85 | $1/(1+e^{4.85}) = 0.78$ percent | $\tfrac{1}{2.425}\tanh(2.425) = 406$ ms |

$$\text{error reduction} = 1 - \frac{0.0078}{0.0180} = \mathbf{57\ \text{percent fewer errors}}, \qquad \text{and } \mathbf{76\ \text{ms faster}}$$

**Why this is not a speed–accuracy trade-off.** Moving $B$ trades one against the other — you buy accuracy with time, along the curve in the figure's panel (b). Here the observer got **more accurate and faster at once**, which no setting of $B$ can do. Raising $A$ does not move you along the curve; **it moves the whole curve**, because $A$ and $B$ enter accuracy through the product $AB$ but enter time through $B/A$.

That is the substantive claim behind "attention improves performance": it is not asserted to make the subject less cautious, it is asserted to improve the evidence — and the two are separable in the fit. Note also the leverage: **a 21 percent improvement in signal produced a 57 percent reduction in errors**, because errors are exponential in $2AB/\sigma^2$ while the signal improvement is linear in it. Small gains in the quality of a population code buy disproportionate gains in behaviour, which is a large part of why the noise-correlation result mattered.

</details>

## Flashback

**From Lesson 3.3 (audition and somatosensation):** A listener with a large head, modelled as a sphere of radius $r = 9.5$ cm, sits in a warm room where the speed of sound is $c = 350$ m/s. Woodworth's formula gives the interaural time difference for a source at azimuth $\theta$ measured from straight ahead,

$$\Delta t(\theta) = \frac{r}{c}\left(\theta + \sin\theta\right), \qquad \theta \text{ in radians.}$$

(a) Compute this listener's ITD for a source at $\theta = 30^\circ$ and the maximum ITD, at $\theta = 90^\circ$. Comment on the ratio.
(b) Psychophysics puts this listener's ITD discrimination threshold at 12 µs. Convert it into a minimum audible angle at the midline and at $\theta = 75^\circ$, and say what sets the difference.
(c) Give the frequency above which interaural *phase* is ambiguous for this listener, and the frequency above which the head casts an acoustic shadow. What does the band between them predict, and which way does a big head move it?

<details>
<summary>Solution</summary>

**(a)** Everything is set by the single time scale $r/c$:

$$\frac{r}{c} = \frac{0.095\ \text{m}}{350\ \text{m/s}} = 2.714\times10^{-4}\ \text{s} = 271.4\ \mu\text{s per radian.}$$

With $\theta = 30^\circ = 0.5236$ rad and $\sin 30^\circ = 0.5$:

$$\Delta t(30^\circ) = 271.4\,(0.5236 + 0.500) = 271.4\,(1.0236) = \mathbf{278\ \mu\text{s}}$$

$$\Delta t(90^\circ) = 271.4\,(1.5708 + 1.000) = 271.4\,(2.5708) = \mathbf{698\ \mu\text{s}}$$

**The ratio is $278/698 = 0.40$, not $30/90 = 0.33$.** A third of the way round in angle is two-fifths of the way to the maximum in time, because $\theta + \sin\theta$ grows faster than $\theta$ near the midline and then flattens. **The ITD-to-azimuth map is expanded in front and compressed at the side**, which is (b).

**(b)** Differentiate the formula — the minimum audible angle is the threshold divided by the local slope:

$$\frac{d(\Delta t)}{d\theta} = \frac{r}{c}\left(1 + \cos\theta\right)$$

$$\theta = 0: \quad 271.4\,(2.000) = 542.9\ \mu\text{s/rad} \;\Longrightarrow\; \delta\theta = \frac{12}{542.9} = 0.0221\ \text{rad} = \mathbf{1.27^\circ}$$

$$\theta = 75^\circ: \quad 271.4\,(1 + 0.2588) = 341.7\ \mu\text{s/rad} \;\Longrightarrow\; \delta\theta = \frac{12}{341.7} = 0.0351\ \text{rad} = \mathbf{2.01^\circ}$$

**The same 12 µs of timing precision buys 1.6 times worse angular resolution at the side than in front**, and the factor is exactly $2/(1+\cos 75^\circ) = 1.59$. Nothing about the neurons changed; the *geometry* delivers less ITD per degree once the source is lateral, and at $\theta = 90^\circ$ the slope has fallen to $271.4\ \mu$s/rad, half its midline value.

Read the caveat the same way [3.3](03-03-audition-somatosensation.md) read two-point discrimination: this is a **bound, not a measurement**. Measured minimum audible angles degrade by considerably more than 1.6 times off the midline, so geometry explains part of the effect and the rest is that timing thresholds themselves worsen for lateral sources.

**(c)** *Phase ambiguity.* An interaural phase difference names one azimuth only while half a period is longer than the largest possible ITD:

$$f_{\text{amb}} = \frac{1}{2\,\Delta t_{\max}} = \frac{1}{2(697.8\ \mu\text{s})} = \mathbf{717\ \text{Hz}}$$

*Head shadow.* A level difference requires the wavelength to be no larger than the head, i.e. $\lambda \lesssim 2r = 0.19$ m:

$$f_{\text{shadow}} \approx \frac{c}{2r} = \frac{350}{0.19} = \mathbf{1.84\ \text{kHz}}$$

**Between about 700 Hz and 1.8 kHz the timing cue is ambiguous and the level cue barely exists**, so localization should be worst in that band — the duplex-theory crossover, and it is where human azimuth judgements are in fact poorest.

**Which way the big head moves it: down, at both ends.** Against the 8.75 cm, 343 m/s head of [3.3](03-03-audition-somatosensation.md) — maximum ITD 656 µs, ambiguity at 760 Hz, shadow near 2 kHz — this listener gets a larger maximum ITD and a steeper midline slope (542.9 against $2 \times 255.1 = 510.2\ \mu$s/rad, about 6 percent more time per degree, hence proportionally finer azimuth resolution), and pays for it with phase ambiguity starting 43 Hz lower. Both frequencies scale as $c/r$ because both are set by the same ratio, so **you cannot buy the better ITD cue without moving the ambiguity limit down with it** — a bigger head is a better clock and a worse phase meter, by the same factor.

</details>

## Connections

- **Backward:** [2.6](02-06-circuit-motifs-computation.md) supplied divisive normalization and winner-take-all — this lesson is what those motifs look like when a task is imposed on them; [3.1](03-01-transduction-neural-coding.md)'s warning that correlated noise, not neuron count, limits population precision is the arithmetic behind the decorrelation result in P3; [3.2](03-02-vision.md) supplied the visual areas where attentional gain is measured, and [4.2](04-02-memory-systems.md)'s persistent recurrent activity is the same attractor machinery that could hold a decision variable.
- **Forward:** [4.4](04-04-disease-a-taste.md) reads Parkinson's off a basal-ganglia selection model that is the implementation side of the bound-crossing described here, and treats attentional and decision deficits in disorders where the diagnostic categories are symptom clusters rather than mechanisms; [4.5](04-05-methods-a-taste.md) returns to the single-trial-versus-average problem in the ramping debate as a methodological case study.
- **Sideways:** the first-passage results are a martingale plus optional stopping — [probability-theory 5.3](../../probability-theory/lessons/05-03-martingales.md) and [5.4](../../probability-theory/lessons/05-04-stopping-times-optional-stopping.md) — and the decision variable is a running log-likelihood ratio, which is [information-theory 1.4](../../information-theory/lessons/01-04-relative-entropy-kl-jensen.md) and the sequential test of [prob-stat-refresher 4.3](../../prob-stat-refresher/lessons/04-03-hypothesis-testing.md); the values that serve as evidence in value-based choice are set by the reward-prediction-error signal of [3.5](03-05-motor-control-correction.md), formalized as temporal-difference learning in [reinforcement-learning](../../reinforcement-learning/syllabus.md); and the normalization equation is the same computation that appears as a layer operation in [machine-learning](../../machine-learning/syllabus.md).
