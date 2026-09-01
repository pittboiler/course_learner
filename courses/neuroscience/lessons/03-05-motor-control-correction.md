# Neuroscience · Lesson 3.5: Motor control and correction

> ⏱ ~15 min · Module 3: Sensory & motor systems · Builds on: [3.4](03-04-motor-systems.md), [2.6](02-06-circuit-motifs-computation.md) · Unlocks: 4.1 (plasticity), 4.3 (attention & decision-making)

## Why this matters

[3.4](03-04-motor-systems.md) ended with a beautiful piece of engineering: the stretch reflex is a genuine negative-feedback loop, with a sensor, a controller, a plant, and a reference signal set by gamma motor neurons. It is exactly the architecture [control-systems 1.1](../../control-systems/lessons/01-01-feedback-and-the-control-problem.md) opens with.

**And it cannot possibly control a fast movement.** A reach to a coffee cup takes about 300 ms. The visual loop — retina, cortex, motor cortex, cord, muscle — takes 100 ms or more to produce any correction at all. By the time the first feedback-driven correction arrives, the movement is a third over and the error it was correcting no longer exists. Push the gain up to compensate and the loop does not converge, it rings.

So the nervous system's motor problem is not "how do I close the loop?" It is **"how do I control a plant when every measurement I have is out of date?"** That is a question with a known answer in control theory, and — this is the interesting part — the brain appears to have found the same answer. **The cerebellum and the basal ganglia are not topics; they are the two solutions.** This lesson leads with the control problem and lets the anatomy fall out of it.

## The idea

**Delay is not just slowness. Delay converts negative feedback into positive feedback.**

Here is the whole argument in one picture. A feedback controller responds to an error by pushing the opposite way. If the response arrives a time $T$ late, then at any oscillation frequency $f$ where $T$ happens to be half a period, the "correction" arrives exactly when the error has reversed sign — and it *adds* to the new error instead of cancelling it. Half a period late means

$$T = \frac{1}{2f} \quad\Longrightarrow\quad f = \frac{1}{2T}$$

*In words: a loop with delay $T$ has a frequency at which its correction is perfectly wrong, and that frequency is one over twice the delay.* Raise the gain until the loop's response at that frequency exceeds the error, and you get a sustained oscillation — a [limit cycle](../../dynamical-systems/lessons/02-03-limit-cycles.md), not a runaway.

**Put real numbers in and something clicks.** The fast spinal loop has a round trip of roughly 50 ms, giving $f \approx 10$ Hz — the frequency band of ordinary physiological tremor, the fine shake you see holding a laser pointer. The long transcortical loop runs about 100 ms, giving $f \approx 5$ Hz — the band of the coarse intention tremor that appears when the cerebellum is damaged. **Tremor is not a malfunction of some tremor-generating circuit; it is the frequency signature of a delayed loop running at too high a gain.**

The nervous system has exactly two ways out, and it uses both.

**Solution 1: mechanical impedance.** Co-contract the antagonists. Muscle is a spring with damping, so opposing a perturbation with stiffness costs *zero* delay — the spring resists at the speed of mechanics, not the speed of axons. This is robust, dumb and immediate. It is also metabolically expensive (you are burning ATP in two muscles to produce no net torque) and it makes you stiff, which is bad for anything that needs compliance. Novices co-contract; experts stop.

**Solution 2: predict.** If you cannot measure the present, *compute* it. You know the command you just sent. If you also know how the arm responds to commands, you can simulate the arm forward and get an estimate of where it is right now — with no delay at all, because the simulation is running inside your head. **This is the single most important idea in motor control**, and it requires the brain to hold a model of its own body.

## The formal version

### Two internal models, and they are not the same object

The distinction gets blurred constantly, so state it sharply. Let $x$ be the state of the limb (positions and velocities), $u$ the motor command, $y$ the sensory measurement.

$$\textbf{Forward model:}\quad \hat{x}_{t+1} = f(\hat{x}_t,\,u_t) \qquad \text{command} \longrightarrow \text{predicted consequence}$$

$$\textbf{Inverse model:}\quad u_t = g(x^{*}_{t+1},\,\hat{x}_t) \qquad \text{desired consequence} \longrightarrow \text{command}$$

*In words: the forward model answers "if I do this, what happens?"; the inverse model answers "to make that happen, what must I do?"* The inverse model is the **controller**. The forward model is the **predictor**, and its job is not to act but to see.

### The forward model as a state estimator

The predictor is not trusted blindly — it drifts, because no model is exact. The delayed measurement is not trusted blindly either — it is noisy, and it is stale. The right thing to do is combine them, weighted by how much you trust each. That is a Kalman filter, and its scalar form is all we need. Let the prediction have variance $\sigma_p^2$ and the measurement variance $\sigma_m^2$:

$$\boxed{\;\hat{x} = (1-K)\,\hat{x}^{-} + K\,y, \qquad K = \frac{\sigma_p^{2}}{\sigma_p^{2}+\sigma_m^{2}}, \qquad \sigma_{\text{post}}^{2} = \frac{\sigma_p^{2}\sigma_m^{2}}{\sigma_p^{2}+\sigma_m^{2}}\;}$$

*In words: weight each source by the other's variance, and the combined estimate is better than either one alone.* Jacob will recognize the structure from [control-systems 5.4](../../control-systems/lessons/05-04-pole-placement-observers.md) — an observer running a model of the plant in parallel with the plant itself, corrected by the measurement residual. **The claim of this lesson is that the brain builds one, and that the cerebellum is where it lives.**

### The bandwidth ceiling a delay imposes

A pure delay contributes phase lag $\phi = \omega T$ and no attenuation. If you insist on keeping a phase margin of $\phi_{\text{PM}}$ radians ([control-systems 3.4](../../control-systems/lessons/03-04-gain-and-phase-margins.md)), the delay alone caps the crossover frequency at

$$\omega_c \le \frac{\phi_{\text{PM}}}{T}$$

*In words: the fastest thing a delayed feedback loop can control is set by the delay, and no amount of clever gain tuning gets around it.* With $T = 100$ ms and a 60-degree budget, $\omega_c \le 1.047/0.1 = 10.5$ rad/s, i.e. **1.7 Hz**. A movement that finishes in 300 ms lives at about 3 Hz. **Feedback is not merely slow here; it is disqualified.**

### The evidence that the forward model is real

The cleanest behavioural signature is **sensory attenuation of self-generated stimulation**. If a forward model predicts the sensory consequences of your own commands, the predicted component can be subtracted, leaving only the unexpected part — which is what a sensory system should care about ([3.1](03-01-transduction-neural-coding.md)'s entire adaptation argument, applied to yourself).

**Prediction: you cannot tickle yourself.** You can't. And the experiment that makes it a real test rather than an anecdote: interpose a robot between your hand and the tickling, and *delay* or *rotate* the resulting touch. The attenuation is lost in proportion to the delay, and the self-generated touch starts to feel like someone else's. **A model that predicts the wrong thing stops subtracting**, which is exactly what a forward-model account requires and no "you just know it's you" account predicts.

### The cerebellum: a supervised-learning machine

The cerebellum contains most of the neurons in your brain in about a tenth of its volume, wired in one circuit repeated with almost no variation from front to back. That uniformity is the clue: **whatever it does, it does the same thing to everything.**

The circuit, in one line: **mossy fibres → granule cells → parallel fibres → Purkinje cells**, with exactly **one climbing fibre** per Purkinje cell, and Purkinje cells the sole output of the cortex (inhibitory, onto deep nuclei).

Three features carry the computational story.

1. **The mossy-to-granule expansion.** A modest number of mossy fibres drives an enormous number of granule cells, each sampling only about four mossy inputs. This is a **sparse, high-dimensional recoding** of the input — a random-feature expansion. Its purpose is separability: a linear readout over $N$ inputs can, by Cover's theorem, correctly classify on the order of $2N$ random patterns. With roughly $10^5$ parallel-fibre synapses on a Purkinje cell, the capacity is on the order of $2\times10^{5}$ input–output associations from **a single readout unit** — no hidden layer, no backpropagation, just a wide expansion plus one perceptron. This is the same trick as a random-feature kernel machine ([machine-learning](../../machine-learning/syllabus.md)), proposed by Marr and Albus in 1969–71, before anyone had that vocabulary.

2. **The climbing fibre is a teaching signal.** It fires about once a second and produces an unmissable complex spike. Pair it with parallel-fibre activity and those parallel-fibre synapses undergo **LTD** ([4.1](04-01-plasticity-ltp-ltd.md) does the mechanism). *In words: "you were active when the error happened — turn yourself down."* That is supervised learning with an explicit error signal, in a structure that has one.

3. **The lesion signature.** Cerebellar damage produces **no paralysis and no weakness.** It produces **dysmetria** (overshooting or undershooting a target), **intention tremor** that grows as the hand nears the target, and **decomposition of movement** — a smooth multi-joint reach broken into a sequence of single-joint movements. Read those off the block diagram: a controller that has lost its predictor must fall back on delayed feedback, so it overshoots, it oscillates at the loop frequency $1/2T$, and it cannot handle the interaction torques between joints that only a model of the limb's dynamics could anticipate. **Every symptom is a prediction of the account, not a fact appended to it.**

**Two clean learning paradigms.** *Eyeblink conditioning*: a tone predicts an air puff; after training the blink moves earlier, timed to arrive with the puff, and the timing depends on the cerebellum. *Force-field adaptation*: hold a robot handle that pushes sideways in proportion to your velocity. Reaches start out badly curved and straighten over a few dozen trials. Then switch the field off without warning — **the reaches curve the opposite way**. That **aftereffect** is the whole argument: a strategy would be abandoned the moment it stopped being needed. An internal model has to be *unlearned*, so it produces mirror-image errors first.

### The basal ganglia: an action-selection machine

Different problem. The cerebellum makes a chosen movement accurate; the basal ganglia decide **which** movement. And the wiring makes that decision in a way worth being surprised by.

**The output nuclei (GPi and SNr) are GABAergic and tonically active** — they fire continuously, clamping the motor thalamus off by default. Selection therefore does not work by exciting the winner. **It works by switching off the inhibition of the winner while leaving everyone else clamped.** Selection by *disinhibition* — [2.6](02-06-circuit-motifs-computation.md)'s winner-take-all, with global inhibition supplied as the resting state rather than as a competing input.

Two routes from striatum to the output nucleus set the balance:

| Route | Path | Net effect on thalamus |
|---|---|---|
| **Direct ("go")** | D1 striatum $\dashv$ GPi/SNr | inhibits the inhibitor → **disinhibits** → action released |
| **Indirect ("no-go")** | D2 striatum $\dashv$ GPe $\dashv$ STN $\to$ GPi/SNr | double inhibition plus excitation → **more** clamping |

Count the signs on the indirect route carefully: striatum inhibits GPe, GPe stops inhibiting STN, STN (the one glutamatergic nucleus in the group) excites GPi, GPi clamps harder. **Two inhibitions in series make an excitation** — this is where sign errors are made.

**Dopamine from the substantia nigra sets the balance between them**, acting on D1 receptors to facilitate the direct route and D2 receptors to suppress the indirect one. Both effects push the same way: more dopamine, more "go".

**And the dopamine signal is not a reward signal — it is a reward-prediction error.** Schultz's recordings: a burst to an *unpredicted* reward; after a cue reliably predicts it, the burst moves to the cue and the reward itself produces nothing; omit an expected reward and the cells **pause below baseline** at exactly the expected time. That is the temporal-difference error

$$\delta_t = r_t + \gamma V(s_{t+1}) - V(s_t)$$

measured in a neuron. **This is one of the closest correspondences in all of neuroscience between an algorithm written down by theorists and a signal recorded from an animal** — the reinforcement-learning literature had the equation first, and it turned out a midbrain nucleus was computing it.

Read the disorders off the model in one line each ([4.4](04-04-disease-a-taste.md) treats disease properly): **Parkinson's** is loss of the dopaminergic cells, so the balance tips to "no-go" — poverty and slowness of movement. **Huntington's** damages indirect-pathway striatal neurons first, releasing movement — excess, not poverty. **Hemiballismus** follows a lesion of the STN, the indirect route's amplifier, and produces violent involuntary limb flinging. Deep brain stimulation of the STN works because the circuit model said that node was the right place to intervene.

## Picture

![Panel a shows a block diagram of the motor control architecture. A desired state feeds an inverse model acting as the controller, whose motor command drives the plant, the limb and muscle, producing the true state. The true state returns through a sensory delay block of fifty to one hundred fifty milliseconds, arriving as a stale measurement. An efference copy of the motor command branches off into a forward model, which produces a prediction available immediately. A state estimator combines the undelayed prediction and the delayed measurement in weighted proportion and feeds the resulting best estimate of the present back to the controller. Panel b shows the basal ganglia. Cortex excites two striatal populations. The direct route from D1 striatum inhibits the tonically firing GPi and SNr output nucleus, which itself inhibits thalamus, so inhibiting the inhibitor releases the action. The indirect route from D2 striatum inhibits GPe, which inhibits the subthalamic nucleus, which excites GPi, clamping the thalamus harder. Thalamus closes the loop back to cortex.](assets/03-05-fig1.svg)

## Worked examples

**Example 1 (mechanical — what the delay costs, and what stiffness buys instead).** A transcortical corrective loop has a total round-trip latency of $T = 100$ ms. (a) At what frequency does its correction arrive exactly out of phase, and what does the nervous system call that? (b) If the loop must retain a 60-degree phase margin, what is the fastest disturbance it can suppress? (c) An elbow with relaxed muscles has joint stiffness $K = 10$ N·m/rad; co-contraction raises it to $50$ N·m/rad. A $1$ N·m perturbation arrives. Compare the deviation under stiffness with what feedback can do about it.

**(a)** Half a period equals the delay:

$$f = \frac{1}{2T} = \frac{1}{2(0.100\ \text{s})} = \mathbf{5.0\ \text{Hz}}.$$

That is the coarse **intention tremor** band. The fast spinal loop, $T \approx 50$ ms, gives $f = 1/(0.100) = 10$ Hz — **physiological tremor**. Two loops, two delays, two tremor frequencies, one formula.

**(b)** Convert the margin to radians: $60^{\circ} = \pi/3 = 1.047$ rad.

$$\omega_c \le \frac{1.047}{0.100\ \text{s}} = 10.5\ \text{rad/s}, \qquad f_c = \frac{10.5}{2\pi} = \mathbf{1.7\ \text{Hz}}.$$

A 300 ms reach has most of its content near $1/0.3 = 3.3$ Hz. **The required bandwidth is about twice what the loop can deliver**, and the shortfall is structural — it is set by $T$, not by tuning.

**(c)** Stiffness resists instantly, with $\Delta\theta = \tau/K$:

$$\Delta\theta_{\text{relaxed}} = \frac{1\ \text{N}\cdot\text{m}}{10\ \text{N}\cdot\text{m/rad}} = 0.100\ \text{rad} = 5.7^{\circ}, \qquad \Delta\theta_{\text{co-contracted}} = \frac{1}{50} = 0.020\ \text{rad} = 1.1^{\circ}.$$

**Feedback's deviation during the first 100 ms is not reduced at all**, because nothing has arrived yet — the limb deviates by whatever the mechanics allow and the neural correction begins afterwards. Stiffness is the only thing that acts inside the dead time. That is why you co-contract on ice, why a novice pipetting is rigid, and why the cost — ATP burned in two opposing muscles, and a limb that can no longer comply with the world — is one the system pays only when it must.

**Example 2 (why you'd care — the state estimator, and what cerebellar damage does to it).** During a reach, a forward model predicts hand position with standard deviation $\sigma_p = 1.0$ cm. Delayed proprioception reports it with $\sigma_m = 2.0$ cm. (a) Compute the optimal weight on the measurement and the resulting uncertainty. (b) Interpret. (c) The forward model degrades so that $\sigma_p = 8.0$ cm. Recompute, and say what changes about the *behaviour*, not just the number.

**(a)**

$$K = \frac{\sigma_p^2}{\sigma_p^2 + \sigma_m^2} = \frac{1.0}{1.0 + 4.0} = \mathbf{0.20}, \qquad \sigma_{\text{post}}^2 = \frac{(1.0)(4.0)}{5.0} = 0.80\ \text{cm}^2,$$

$$\sigma_{\text{post}} = \sqrt{0.80} = \mathbf{0.89\ \text{cm}}.$$

**(b)** Three things to notice. The estimate leans **80 percent on the prediction** and only 20 percent on the actual measurement — the "sensory" estimate of your hand position is mostly a simulation. The combined uncertainty, 0.89 cm, is **better than either source alone** (1.0 cm and 2.0 cm), because two independent noisy estimates always beat one. And the estimate is **current**: the prediction carries no delay, so fusing it with the stale measurement drags the whole estimate toward the present.

**(c)** With $\sigma_p = 8.0$ cm:

$$K = \frac{64}{64+4} = \mathbf{0.94}, \qquad \sigma_{\text{post}}^2 = \frac{(64)(4)}{68} = 3.76\ \text{cm}^2, \quad \sigma_{\text{post}} = \mathbf{1.94\ \text{cm}}.$$

The uncertainty roughly doubles — but **the number understates the damage.** The weight has flipped: the estimate is now 94 percent delayed measurement. **The controller is no longer estimating where the hand is; it is estimating where the hand was 100 ms ago**, and acting on that. A controller acting on a state that is one dead-time old is precisely the delayed feedback loop of Example 1(a), so it overshoots the target (dysmetria) and rings at about 5 Hz on the approach (intention tremor). **The two cardinal cerebellar signs are what a Kalman filter looks like when its prediction goes bad.** No new mechanism is needed to explain them.

## Watch out

- **You might think the cerebellum generates movement.** Remove it and the patient still moves, with normal strength. Movements become inaccurate, oscillatory and decomposed. It is a predictor and a calibrator, not an effector — which is why its deficits are *errors*, not *absences*.
- **You might treat the forward and inverse models as the same thing run backwards.** They map opposite directions and have different jobs: the inverse model is the controller, the forward model is the sense organ for the present. They also fail differently — a bad inverse model gives systematic, consistent errors; a bad forward model gives instability and overshoot.
- **You might think the basal ganglia initiate movement by exciting motor cortex.** Their output is inhibitory and tonically on. Selection is **release** from inhibition, so the "go" signal is literally a gap in a continuous inhibitory barrage — and the sign bookkeeping through the indirect route ($\dashv\ \dashv\ \to$) is where people go wrong.
- **You might read dopamine as "reward" or as "pleasure".** It signals **prediction error**. A fully predicted reward elicits nothing at all, and an omitted expected reward elicits a pause below baseline. A reward signal cannot go negative on the absence of something.
- **You might conclude feedback is obsolete.** It is fine for anything slow — posture, gaze holding, the final low-bandwidth homing of a reach. The delay only bites at high bandwidth, which is exactly where feedforward takes over. Real motor control is a blend whose mixture shifts with movement speed.

## One-liner

> A sensory delay of 100 ms disqualifies feedback above about 1.7 Hz and makes the loop ring at $1/2T$ — so the brain stiffens the limb, and learns a forward model that predicts the present from the command already sent; the cerebellum learns that model from error, and the basal ganglia choose what to do by lifting a tonic inhibition off one action while holding it on all the rest.

## Problems

**P1 (🟢)** A spinal corrective loop has round-trip latency $T_1 = 30$ ms; a transcortical loop has $T_2 = 90$ ms. (a) Find the frequency at which each loop's correction arrives perfectly out of phase. (b) With a 50-degree phase-margin budget consumed entirely by the delay, find the maximum crossover frequency of each loop in Hz. (c) A patient's tremor is measured at 5.5 Hz and appears only during goal-directed reaching. Which loop is implicated, and what does "only during reaching" tell you?

**P2 (🟡)** A forward model predicts fingertip position with $\sigma_p = 1.5$ cm; delayed proprioception gives $\sigma_m = 1.0$ cm. (a) Compute $K$ and $\sigma_{\text{post}}$. (b) Verify the identity $\sigma_{\text{post}}^2 = K\sigma_m^2$ and say in one sentence why it must hold. (c) In the dark, vision is unavailable and the remaining measurement noise rises to $\sigma_m = 4.0$ cm. Recompute $K$, and predict qualitatively what happens to reaching accuracy and to a patient whose forward model is also impaired.

**P3 (🔴, bridges to reinforcement learning)** A rat runs a two-step chain: state $s_0$ (a cue), then $s_1$, then a reward $r = 1$ delivered on leaving $s_1$. Use temporal-difference learning with discount $\gamma = 0.9$ and $\delta_t = r_t + \gamma V(s_{t+1}) - V(s_t)$, taking $V = 0$ at the terminal state. (a) Before any learning ($V \equiv 0$), compute $\delta$ on each transition, and say where a dopamine burst should appear. (b) After learning has converged, compute the converged $V(s_0)$ and $V(s_1)$ and both $\delta$ values, and say where the burst has moved to. (c) On a converged trial the reward is omitted. Compute $\delta$ on that transition and state what dopamine neurons should do and when. (d) A drug halves the dopamine signal. Using the direct/indirect balance *and* the teaching-signal role, name the two distinct deficits this predicts and explain why they are separable.

<details>
<summary>Solutions</summary>

**P1 (a)** $f = 1/(2T)$:

$$f_1 = \frac{1}{2(0.030)} = \mathbf{16.7\ \text{Hz}}, \qquad f_2 = \frac{1}{2(0.090)} = \mathbf{5.6\ \text{Hz}}.$$

**(b)** $50^{\circ} = 50\pi/180 = 0.873$ rad, and $\omega_c = \phi_{\text{PM}}/T$:

$$\omega_1 = \frac{0.873}{0.030} = 29.1\ \text{rad/s} \;\Rightarrow\; f_{c,1} = \frac{29.1}{2\pi} = \mathbf{4.6\ \text{Hz}},$$

$$\omega_2 = \frac{0.873}{0.090} = 9.70\ \text{rad/s} \;\Rightarrow\; f_{c,2} = \frac{9.70}{2\pi} = \mathbf{1.5\ \text{Hz}}.$$

**Tripling the delay divides the usable bandwidth by three.** Note also the clean relation implied by the two formulas: $f_c/f_{\text{osc}} = \phi_{\text{PM}}/\pi$, the same ratio for both loops — the phase margin *is* the safety factor in frequency.

**(c)** 5.5 Hz matches $f_2 = 5.6$ Hz: **the long transcortical loop.** "Only during reaching" is the diagnostic half. A loop that oscillates whenever it is closed would tremble at rest too. A tremor that appears only when the limb is being actively guided to a target says the loop is stable at low gain and destabilizes when the controller leans on it — which is what happens when the fast predictive path has dropped out and the controller has nothing to lean on *but* the delayed loop. This is **intention tremor**, and it points at the cerebellum rather than at the loop hardware.

**P2 (a)**

$$K = \frac{\sigma_p^2}{\sigma_p^2+\sigma_m^2} = \frac{2.25}{2.25+1.00} = \frac{2.25}{3.25} = \mathbf{0.692}.$$

$$\sigma_{\text{post}}^2 = \frac{(2.25)(1.00)}{3.25} = 0.692\ \text{cm}^2 \;\Rightarrow\; \sigma_{\text{post}} = \mathbf{0.832\ \text{cm}}.$$

Better than either input (1.5 cm and 1.0 cm), as it must be.

**(b)** $K\sigma_m^2 = 0.692 \times 1.00 = 0.692\ \text{cm}^2 = \sigma_{\text{post}}^2$ ✓. Algebraically:

$$K\sigma_m^2 = \frac{\sigma_p^2}{\sigma_p^2+\sigma_m^2}\,\sigma_m^2 = \frac{\sigma_p^2\sigma_m^2}{\sigma_p^2+\sigma_m^2} = \sigma_{\text{post}}^2 .$$

**Why it must hold:** the posterior variance is the measurement variance scaled down by exactly the fraction of the measurement that was actually used. Trusting the measurement less means both a smaller $K$ *and* a tighter posterior, because the reason you trusted it less is that you had something better.

**(c)** With $\sigma_m = 4.0$ cm:

$$K = \frac{2.25}{2.25+16.0} = \frac{2.25}{18.25} = \mathbf{0.123}, \qquad \sigma_{\text{post}}^2 = \frac{(2.25)(16.0)}{18.25} = 1.97\ \text{cm}^2, \quad \sigma_{\text{post}} = \mathbf{1.40\ \text{cm}}.$$

**A healthy person in the dark leans almost entirely on the forward model** ($K = 0.12$, so 88 percent prediction) and still ends up with 1.40 cm uncertainty — degraded from 0.83 cm, but far better than the 4.0 cm measurement alone. Reaching accuracy falls somewhat and drifts over a long movement as the unchecked prediction accumulates error.

**For a patient whose forward model is also impaired, both terms are bad at once and there is nothing left to lean on.** This predicts a specific and testable signature: cerebellar patients should be disproportionately worse *in the dark* than sighted controls are — the deficit is not a fixed penalty but one that grows as the sensory alternative is removed. That interaction, rather than the raw error, is the evidence that a predictor is missing.

**P3 (a)** With $V \equiv 0$:

$$\delta(s_0 \to s_1) = 0 + 0.9(0) - 0 = \mathbf{0}, \qquad \delta(s_1 \to \text{end}) = 1 + 0.9(0) - 0 = \mathbf{1}.$$

**The burst is at the reward.** Nothing predicts anything yet, so only the reward itself is a surprise.

**(b)** At convergence every $\delta = 0$, which pins the values. Working backwards from the terminal state:

$$V(s_1) = r + \gamma V(\text{end}) = 1 + 0 = \mathbf{1.0}, \qquad V(s_0) = \gamma V(s_1) = 0.9(1.0) = \mathbf{0.9}.$$

Check both transitions:

$$\delta(s_0\to s_1) = 0 + 0.9(1.0) - 0.9 = \mathbf{0}, \qquad \delta(s_1 \to \text{end}) = 1 + 0 - 1.0 = \mathbf{0}.$$

**The burst has vanished from the reward entirely.** During learning it migrated backwards to the earliest predictor; at $s_0$ itself there is a burst on *cue onset*, because the cue is unpredicted from the animal's point of view — the transition into $s_0$ carries $\delta = 0.9$ relative to a baseline expectation of nothing.

**(c)** Omission on a converged trial: $r = 0$ on leaving $s_1$, and $V(s_1)$ is still 1.0:

$$\delta(s_1 \to \text{end}) = 0 + 0 - 1.0 = \mathbf{-1.0}.$$

**Dopamine neurons should pause below their tonic firing rate, at exactly the time the reward was due.** This is the observation that kills the "dopamine = reward" reading outright: the cells respond to *nothing happening*, and they respond at a moment defined only by an internal expectation. They do.

**(d)** Halving dopamine hits two different mechanisms and therefore produces two separable deficits.

1. **A motor deficit, from the tonic balance.** Less dopamine means less D1 facilitation of the direct route and less D2 suppression of the indirect route, so the tonic clamp on thalamus is stronger and actions are harder to release: **bradykinesia and rigidity**, present on every movement, with no learning component. It should appear immediately on drug administration.

2. **A learning deficit, from the phasic teaching signal.** A halved $\delta$ halves the effective learning rate on the cortico-striatal synapses that encode which action is worth taking. The animal still moves, but **updates its action values more slowly** — it needs more trials to acquire a new reward-driven habit, and reward-omission-driven extinction slows too. This deficit is invisible on already-learned movements and only appears in a task requiring new learning.

**Why they are separable:** the first depends on ambient dopamine concentration at postsynaptic receptors and shows up in a movement-speed measurement with no reward contingency at all; the second depends on the *modulation* of dopamine around baseline and shows up only in a trial-to-trial learning curve. **A manipulation that flattened the phasic bursts while preserving tonic levels should give the second without the first** — which is the experiment the model demands, and roughly what selective interference with burst firing produces. It is also why L-DOPA can restore movement in Parkinson's while leaving reinforcement-learning abnormalities behind: replacing the tonic level does not restore a signal whose information is in its fluctuations ([4.4](04-04-disease-a-taste.md)).

</details>

## Flashback

**From Lesson 3.4 (motor systems):** Two alpha motor neurons share a pool. Neuron S has input resistance $R_{\text{in}} = 5.0$ MΩ; neuron L has $R_{\text{in}} = 1.0$ MΩ. Both rest at $-70$ mV with threshold $-55$ mV, and both receive the same descending synaptic current $I$. Neuron S innervates 80 muscle fibres, neuron L innervates 1200, and every fibre produces the same twitch force of 0.5 mN. (a) Find the current at which each reaches threshold. (b) Find each motor unit's force. (c) Explain why this recruitment order requires no controller, and why it is the right order.

<details>
<summary>Solution</summary>

**(a)** Both need the same voltage swing, $\Delta V = -55 - (-70) = 15$ mV, and Ohm's law gives the current that produces it:

$$I_S = \frac{\Delta V}{R_{\text{in},S}} = \frac{15\times10^{-3}\ \text{V}}{5.0\times10^{6}\ \Omega} = 3.0\times10^{-9}\ \text{A} = \mathbf{3.0\ \text{nA}},$$

$$I_L = \frac{15\times10^{-3}}{1.0\times10^{6}} = 1.5\times10^{-8}\ \text{A} = \mathbf{15\ \text{nA}}.$$

**S is recruited at one fifth the drive L needs**, purely because it is a smaller cell with fewer leak channels in parallel and therefore a higher input resistance.

**(b)**

$$F_S = 80 \times 0.5\ \text{mN} = \mathbf{40\ \text{mN}}, \qquad F_L = 1200 \times 0.5\ \text{mN} = \mathbf{600\ \text{mN}}.$$

**(c)** **No controller is needed** because the ordering is not imposed — it is a consequence of a passive electrical property. A common synaptic current delivered to a pool of cells with differing $R_{\text{in}}$ crosses threshold in every cell in ascending order of size, automatically, with no sequencing circuit, no labelled lines and no descending specification of *which* units to use. The command is a single scalar; the ordering is free.

**It is the right ordering** because the size of a force increment is matched to the force already being produced. At low force the only available step is 40 mN — fine control where fine control is needed. The 600 mN step arrives only once the drive is already high enough that hundreds of millinewtons are being produced, so the *relative* increment stays roughly constant across the range. That is a Weber-like proportional control law obtained from a resistance, not from a rule.

**And it hands straight to this lesson:** even perfect, perfectly graded recruitment tells you nothing about *when* to send the command. Recruitment is the output stage; the delay problem sits upstream of it, and no amount of cleanliness in the final common path removes 100 ms of sensory dead time.

</details>

## Connections

- **Backward:** [3.4](03-04-motor-systems.md) supplied the plant, the final common path, and the stretch reflex whose delay is the problem here; [2.6](02-06-circuit-motifs-computation.md)'s winner-take-all with global inhibition is exactly the basal ganglia output stage, with the inhibition supplied tonically; [3.1](03-01-transduction-neural-coding.md)'s adaptation argument reappears as sensory attenuation of your own movements. The contractile machinery this all commands is [physiology 1.6](../../physiology/lessons/01-06-muscle-contraction.md).
- **Forward:** [4.1](04-01-plasticity-ltp-ltd.md) gives the synaptic mechanism behind cerebellar LTD and the general learning rule; [4.3](04-03-attention-decision-making.md) takes the selection problem into decision-making, where the basal ganglia reappear as a plausible implementation of the decision bound; [4.4](04-04-disease-a-taste.md) treats Parkinson's properly as the field's best case of a circuit model earning a therapy.
- **Sideways:** the forward model is an observer, [control-systems 5.4](../../control-systems/lessons/05-04-pole-placement-observers.md); the delay-versus-bandwidth ceiling is a phase-margin calculation, [control-systems 3.4](../../control-systems/lessons/03-04-gain-and-phase-margins.md); tremor is a [limit cycle](../../dynamical-systems/lessons/02-03-limit-cycles.md), not a runaway. The granule-cell expansion is a random-feature map ([machine-learning](../../machine-learning/syllabus.md), [deep-learning](../../deep-learning/syllabus.md)), and the dopamine signal is a temporal-difference error from reinforcement learning — the theory was written first and the neuron was found afterwards.
- **The synthesis, held loosely:** three learning systems with three teaching signals — the cerebellum learning from **error** (supervised), the basal ganglia from **reward** (reinforcement), the cortex from the **statistics of its input** (unsupervised). It is a strikingly tidy correspondence with the three branches of machine learning, and it is an organizing frame rather than an established fact: the anatomy is real, the exclusivity is not.
