# Human Physiology · Lesson 1.1: Homeostasis and feedback control

> ⏱ ~15 min · Module 1: Homeostasis, cells, and excitable tissue · Builds on: nothing in this course · Unlocks: 1.2 (transport across the cell membrane)

## Why this matters

Physiology looks like an enormous pile of parts — nephrons, baroreceptors, thyroid axes, sweat glands — and most people try to memorize it. That is the wrong move, because **nearly every one of those parts is the same object wearing a different costume: a controller correcting an error.** Once you can read a mechanism as a loop, you can predict what it will do before you know what it is made of.

This lesson gives you the loop and, more importantly, the *algebra* of the loop. That algebra answers questions that vocabulary cannot: how tightly is a variable actually held? Why is no regulated variable ever exactly constant? Why does a stronger reflex sometimes make things worse? Why is a fever not a failure of thermoregulation? And why does a heart-failure patient's breathing wax and wane in a slow cycle?

**Everything after this lesson is a special case.** The baroreflex ([2.3](02-03-hemodynamics-blood-pressure.md)), tubuloglomerular feedback ([3.1](03-01-glomerular-filtration-clearance.md)), every endocrine axis ([3.4](03-04-endocrine-axes.md)), thermoregulation ([4.2](04-02-thermoregulation.md)) — all of them are this diagram with the boxes relabelled.

## The idea

Claude Bernard, around 1865, noticed the thing the whole field is built on: complex animals do not adapt to their environment so much as **carry a private one around with them**. Your cells sit in interstitial fluid — the *milieu intérieur* — whose temperature, pH, osmolarity, glucose, and ion concentrations barely move while the outside world swings wildly. **The constancy of the internal environment is the condition of the free life**, Bernard said, and he meant it as an engineering claim: independence from the environment is purchased by regulating an internal one.

Walter Cannon, in the 1920s, named the achievement **homeostasis** and identified its machinery. Every regulated variable has four pieces:

- a **set point** — the value the system behaves as if it wants;
- a **sensor** — something that measures the actual value (baroreceptors, osmoreceptors, thermoreceptors, the glucose-sensing beta cell);
- an **integrating centre** — something that compares measured to desired and computes the **error**;
- an **effector** — something that acts to shrink the error (a muscle, a gland, a vessel, a tubule).

The key structural fact, and the one that generates all the algebra: **the effector is driven by the error itself.** No error, no drive. That single feature is why a homeostatic system works, and — as we are about to see — also why it can never work perfectly.

Now the part most textbooks skip. **Negative feedback does not eliminate a disturbance; it divides it.** Suppose something pushes your core temperature. Call $d$ the deviation that push *would* produce if you had no thermoregulation at all — the raw, unopposed disturbance. Your loop does not remove $d$. It leaves behind a fraction of it, and the size of that fraction is set by one number: **the loop gain.**

## The formal version

**Set up the simplest possible loop.** Let $y$ be the regulated variable, $y_0$ its set point, and $\Delta = y - y_0$ the deviation. Let $d$ be the deviation the disturbance would produce with the controller switched off. Let the effector produce a correction proportional to the sensed error, with constant of proportionality $G > 0$ — the **open-loop gain**, dimensionless (units of correction per unit of error). Then

$$\Delta = d - G\,\Delta .$$

*In words: the deviation you end up with is the raw disturbance minus whatever the controller pushed back, and what the controller pushed back is proportional to the deviation you ended up with.* Solving,

$$\boxed{\;\Delta = \frac{d}{1+G}\;}$$

**A fraction $1/(1+G)$ of every disturbance survives correction, permanently.** This leftover is the **residual error** (or *steady-state error*), and it is not a defect of a sloppy biological implementation — it is forced by the loop's structure. **The effector only acts because the error exists. Abolish the error and you abolish the drive that was correcting it.** A proportional controller therefore always settles somewhere short of its set point.

| $G$ | fraction surviving $\dfrac{1}{1+G}$ | fraction corrected $\dfrac{G}{1+G}$ |
|---|---|---|
| 0 | 1.000 | 0 (no regulation) |
| 1 | 0.500 | 50 percent |
| 4 | 0.200 | 80 percent |
| 9 | 0.100 | 90 percent |
| 24 | 0.040 | 96 percent |
| 99 | 0.010 | 99 percent |

**Read the table for its shape, not its numbers.** Halving the residual error requires roughly *doubling* the gain. Going from $G=9$ to $G=99$ — an elevenfold increase in the strength of the reflex — buys you 9 percent of the disturbance. **Tight regulation is expensive and the returns diminish fast.**

**This is also how physiologists measure a reflex.** Guyton's definition of feedback gain is

$$G = \frac{\text{correction achieved}}{\text{error remaining}},$$

and it agrees exactly with the $G$ above: the correction is $d - \Delta = dG/(1+G)$, the remainder is $d/(1+G)$, and the ratio is $G$. So you can measure a loop's gain without opening it — knock out the reflex, see how far the variable moves; restore it, see how far it moves; the ratio of the difference to the remainder is the gain. Measured reflex gains in the body run from about 1 to a few tens, which is why **regulated variables are stable, not constant.**

**One formula covers both signs of feedback.** Write the effector's contribution with a signed **loop gain** $L$, so the effector adds $L\Delta$:

$$\Delta = d + L\,\Delta \quad\Longrightarrow\quad \boxed{\;\Delta = \frac{d}{1 - L}\;}$$

- **Negative feedback**: $L = -G < 0$, so $\Delta = d/(1+G)$ — the disturbance is *divided*. Stabilizing.
- **Positive feedback with $0 < L < 1$**: $\Delta = d/(1-L)$ — the disturbance is *multiplied* by $1/(1-L)$, but the result is finite. This is a regenerative amplifier, and it is a perfectly respectable thing for a body to build.
- **Positive feedback with $L \ge 1$**: the denominator hits zero and there is no steady state at all. **Runaway.**

*In words: the entire qualitative behaviour of a loop is decided by where its signed loop gain sits relative to 1.* That is the sentence to keep.

**Positive feedback is not pathology. It is the mechanism the body uses whenever it needs an irreversible commitment.** Negative feedback is for holding things still; positive feedback is for *deciding*, quickly and once. Four examples you will meet:

| Loop | What amplifies what | Why commitment is wanted |
|---|---|---|
| Action-potential upstroke ([1.4](01-04-action-potential.md)) | depolarization opens $\text{Na}^+$ channels, whose current depolarizes further | an all-or-none signal must not be half-sent |
| Clotting cascade | thrombin activates factors that make more thrombin | a leak must be plugged fast, completely |
| Ovulatory LH surge ([3.4](03-04-endocrine-axes.md)) | high oestrogen *reverses sign* and stimulates LH, which drives more oestrogen | ovulation is one-shot; a partial surge is useless |
| Parturition | uterine stretch triggers oxytocin, which contracts the uterus, which stretches it more | labour must finish |

Notice what all four share: **an explicit terminator.** The spike is stopped by $\text{Na}^+$ inactivation and $\text{K}^+$ efflux; clotting by antithrombin and fibrinolysis; the surge by ovulation itself; labour by delivery. **A positive loop without a terminator is exactly what pathological positive feedback looks like** — and the pathology is not a new kind of process, it is the same process with the brake missing. Decompensated haemorrhagic shock (low pressure starves the heart, the weakened heart drops pressure further) is a positive loop that got loose, and we will price it out in Example 2.

**Feedforward: why a pure feedback controller is always late.** A feedback controller cannot act until an error exists, because the error *is* its input. If a disturbance ramps at rate $r$ and the loop takes time $\tau$ to sense-compute-act, the variable is already off by

$$\Delta_{\min} \approx r\,\tau$$

before correction even begins. *In words: a reactive controller pays for its own reaction time in units of the variable it is defending.*

**Feedforward control escapes this by acting on the disturbance's predictor rather than its consequence.** It does not measure $y$ at all; it measures something that *forecasts* $d$, and fires pre-emptively:

- **Cephalic-phase insulin release.** The sight, smell, and taste of food trigger vagal stimulation of pancreatic beta cells, releasing insulin *before* any glucose has been absorbed. Glucose is rising at roughly 2 mg/dL per minute after a meal; a purely reactive insulin loop with a 10-minute latency would let glucose overshoot by around 20 mg/dL before the effector engaged. Cephalic release cuts that latency toward zero.
- **Central command in exercise ([4.3](04-03-exercise-integrative-physiology.md)).** Heart rate and ventilation rise *at the instant* exercise begins — before oxygen has been consumed, before $\text{CO}_2$ or $\text{H}^+$ have accumulated. The motor cortex sends a copy of its command to the cardiovascular and respiratory centres. The body is not responding to the exercise; it is responding to the *intention* to exercise.

**The catch is that feedforward is open-loop: it has no way to know it was wrong.** It runs on a model of the disturbance, and if the model is wrong the error is uncorrected — cephalic insulin released for a meal you then do not eat produces hypoglycaemia. **So real systems use both: feedforward for speed, feedback for accuracy.** That combination is the actual architecture of nearly every fast physiological response.

**Homeostasis, acclimatization, allostasis — three different things.** These get blurred constantly, and the distinction is exactly about *which part of the loop changed*.

| | Timescale | What changes | Example |
|---|---|---|---|
| **Homeostasis** | seconds to hours | nothing structural — the existing loop runs | sweating when hot |
| **Acclimatization** | days to weeks | the **effectors and gain** are rebuilt; set point unchanged | heat acclimatization: sweating starts sooner, sweat is more dilute, plasma volume expands. Altitude: more red cells, more 2,3-BPG ([2.5](02-05-gas-exchange-and-transport.md)) |
| **Allostasis / rheostasis** | minutes to months | the **set point itself is moved**, deliberately, by the controller | fever; the circadian swing in core temperature; the raised plasma-volume target of pregnancy |

**Fever is the case worth internalizing, and 4.2 will lean on it.** Pyrogens raise the hypothalamic thermal set point. The regulation is then working *perfectly* — it is defending a higher target. That is why you shiver and vasoconstrict at a core temperature of 37 °C during the rising phase: 37 is now *below* set point, so you feel cold and generate heat. Compare heat stroke, where thermoregulation genuinely fails: there the effectors are overwhelmed or idle while temperature climbs. **The clinical discriminator is what the effectors are doing.** Full-throttle heat *production* at an elevated temperature means a raised set point. Absent or exhausted heat *loss* at an elevated temperature means failed regulation. Same number on the thermometer, opposite mechanism, opposite treatment.

**Delay plus high gain equals oscillation.** Take the loop above and give it a lag: the correction applied now is computed from the error as it was a time $\tau$ ago. Model a full cycle of sense-compute-act as one discrete step in which the controller removes a fraction $g$ of the error it saw at the start of the step:

$$x_{n+1} = (1-g)\,x_n \quad\Longrightarrow\quad x_n = (1-g)^n x_0 .$$

The behaviour depends entirely on $|1-g|$:

| $g$ | $1-g$ | behaviour |
|---|---|---|
| $0 < g < 1$ | positive, $<1$ | smooth monotone decay — undercorrects, converges |
| $g = 1$ | 0 | perfect: back to set point in one step |
| $1 < g < 2$ | negative, $\lvert\cdot\rvert<1$ | **overshoot on every step**, alternating, but decaying — ringing |
| $g > 2$ | negative, $\lvert\cdot\rvert>1$ | **growing oscillation — unstable** |

*In words: a controller that corrects harder than it can see becomes an oscillator.* The high gain is not the problem and the delay is not the problem; **the product is.** The continuous version of the same statement is the classic delayed-negative-feedback equation $\dot x = -k\,x(t-\tau)$, whose stability boundary sits at

$$k\,\tau = \frac{\pi}{2} \approx 1.571 .$$

Beyond that the equilibrium loses stability and a sustained oscillation is born — formally a Hopf bifurcation ([dynamical-systems 3.3](../../dynamical-systems/lessons/03-03-hopf-bifurcation.md)).

**The clinical instance is Cheyne–Stokes breathing.** Ventilation is controlled by a negative loop: rising arterial $\text{CO}_2$ is sensed at the chemoreceptors, ventilation increases, $\text{CO}_2$ falls. The loop's delay is essentially the **circulation time** from lung to chemoreceptor. In heart failure, low cardiac output stretches that transit time severely — and the chemoreflex, unchanged in strength, now finds itself past the stability boundary. The result is the characteristic crescendo–decrescendo cycle with apnoeas: the patient overventilates in response to a $\text{CO}_2$ level that no longer exists, blows off too much, stops breathing, accumulates $\text{CO}_2$, and overventilates again. **Nothing is broken. The gain is normal and the sensors are normal — only the delay changed.** That is a diagnosis you can make from loop structure alone, which is the whole point of this lesson.

## Picture

![Three panels. Panel a is the canonical negative feedback loop, drawn left to right: a set point enters a summing junction with a plus sign, the junction subtracts the sensed value and emits an error signal, which drives an integrating centre and then an effector; the effector's output meets the disturbance at a second summing junction and produces the regulated variable, which is measured by a sensor and fed back with a minus sign. Panel b plots the deviation of the regulated variable against time after a step disturbance, for three loops: low gain settles at half the raw disturbance, high gain settles at one tenth of it, and high gain with a delay overshoots badly, swings below the set point, and rings for several cycles before settling at the same small residual. Panel c shows positive feedback: a three-box cycle in which depolarization opens sodium channels, which admit sodium current, which depolarizes further, alongside a plot contrasting a bounded amplified response when loop gain is below one with an unbounded runaway when loop gain exceeds one.](assets/01-01-fig1.svg)

## Worked examples

**Example 1 (mechanical — pricing a thermoregulatory loop).** A person moves into a warm environment. With thermoregulation pharmacologically blocked, this heat load would raise core temperature by $d = 4.0$ °C. Intact, the loop has open-loop gain $G = 24$. (a) Find the actual rise in core temperature. (b) How much correction did the loop perform? (c) How much gain would be needed to hold the rise to 0.05 °C, and comment.

(a) $$\Delta = \frac{d}{1+G} = \frac{4.0}{1+24} = \frac{4.0}{25} = \mathbf{0.16\ ^\circ\text{C}} .$$

(b) $$\text{correction} = d - \Delta = 4.0 - 0.16 = \mathbf{3.84\ ^\circ\text{C}} .$$

Check against Guyton's definition: $3.84 / 0.16 = 24 = G$. ✓ The two definitions of gain are the same definition.

**Notice the shape of the answer. The loop removed 96 percent of a disturbance and still left 0.16 °C on the table** — and that leftover is not sloppiness, it is the signal keeping the sweat glands running. A body at exactly its set point would have switched its cooling off.

(c) We need $1+G = 4.0/0.05 = 80$, so $G = \mathbf{79}$ — more than triple the gain, to buy 0.11 °C. And **that is the optimistic reading**, because the extra gain comes with the instability of the previous section: thermoregulation is a slow loop (blood must carry heat to the skin and sweat must evaporate), so $\tau$ is large and pushing $k$ up walks the loop toward $k\tau = \pi/2$. **The body is not underachieving at $G = 24$; it is sitting where the trade-off between tightness and stability puts it.**

**Example 2 (why you'd care — how a stabilizing loop becomes a runaway).** A person haemorrhages. The volume lost would, unopposed, drop mean arterial pressure by $d = 30$ mmHg. The baroreflex ([2.3](02-03-hemodynamics-blood-pressure.md)) contributes a loop gain $L_1 = -4$. But once pressure falls far enough, coronary perfusion drops, the myocardium weakens, cardiac output falls, and pressure falls further — a positive loop, contributing $L_2 = +\alpha$, where $\alpha$ grows as pressure falls. Total signed loop gain $L = -4 + \alpha$. (a) Find the pressure drop as a function of $\alpha$. (b) Evaluate at $\alpha = 0,\;3,\;4.5$. (c) Interpret.

(a) $$\Delta = \frac{d}{1-L} = \frac{30}{1-(-4+\alpha)} = \frac{30}{5-\alpha}\ \text{mmHg}.$$

(b)

| $\alpha$ | $L$ | $\Delta$ (mmHg) | reading |
|---|---|---|---|
| 0 | $-4$ | $30/5 = \mathbf{6.0}$ | compensated: the reflex absorbs 80 percent of the loss |
| 3 | $-1$ | $30/2 = \mathbf{15.0}$ | the reflex is now only halving the disturbance |
| 4.5 | $+0.5$ | $30/0.5 = \mathbf{60.0}$ | **the loop is amplifying: the drop exceeds the raw haemorrhage** |
| 5 | $+1$ | denominator 0 — **no steady state** | irreversible shock |

(c) **Three things are worth extracting.**

First, at $\alpha = 4.5$ the pressure has fallen *further than the blood loss alone would have taken it.* The circulation is no longer resisting the haemorrhage; it is adding to it. Nothing new was switched on between the second and third rows — **the same two loops are running, with different weights.**

Second, the transition at $\alpha = 5$ is not gradual in character even though $\alpha$ moved gradually. Below it there is a stable operating point; above it there is none, and the linear model stops meaning anything except "this diverges." **This is what clinicians mean by *decompensation*, and it is a genuine qualitative change in the system, not a matter of degree.** Transfusing early, while $\alpha$ is small, is cheap; transfusing after crossing is a different problem, because the loop is now working against you.

Third, and most useful: **you predicted all of this from two numbers and a sign, without knowing a single thing about catecholamines, renin, or myocardial oxygen extraction.** That is the leverage the loop picture buys, and it is why this lesson comes first.

*(Caveat, stated honestly: the linear model is a local approximation. Real $\alpha$ is a nonlinear function of pressure, and the true object is a bifurcation in a nonlinear system — see [dynamical-systems 3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md). The linear version gets the structure right and the numbers approximately right near the operating point, which is all we need.)*

## Watch out

- **You might think a regulated variable is held constant.** It cannot be. A proportional loop leaves $d/(1+G)$ of every disturbance standing, and it *must*, because the residual error is the effector's own drive signal. **"Regulated" means "varies much less than the disturbance would make it vary" — it never means "fixed."** Your core temperature, arterial pH, and plasma sodium all wander; they wander in a narrow band.
- **You might think higher gain is always better.** Gain alone is harmless; **gain multiplied by delay is what destabilizes**, and the body's loops all have real delays (circulation time, diffusion time, hormone synthesis time). This is why reflexes are tuned to gains of order 1 to 30 rather than 1000.
- **You might think positive feedback means something has gone wrong.** It is the standard mechanism for any process that must go to completion — spikes, clots, surges, labour. **The pathological version is not a different mechanism; it is the same loop with its terminator missing or overwhelmed.**
- **You might think fever is a broken thermostat.** The thermostat is working; **its set point was moved.** Look at what the effectors are doing: full-blast heat production at an elevated temperature means a raised set point (fever), while absent heat loss at an elevated temperature means genuine failure (heat stroke). Flagged for [4.2](04-02-thermoregulation.md).
- **You might read "negative" in negative feedback as meaning the effector inhibits something.** It refers to the sign of the *loop*, not of any one arrow. A loop with two inhibitory steps is a *positive* loop. **Count the sign flips around the whole circuit; an even number is positive feedback.**
- **You might expect feedforward to improve accuracy.** It improves *speed*, and it can be flatly wrong, because it never checks the result. Accuracy is feedback's job.

## One-liner

> Every physiological mechanism is a loop, and one number decides its behaviour: negative feedback divides a disturbance by $1+G$ and so can never fully erase it, positive feedback multiplies it by $1/(1-L)$ and runs away once $L$ reaches 1, and any loop with enough gain times enough delay stops correcting and starts oscillating.

## Problems

**P1 (🟢)** A reflex defends mean arterial pressure. A standardized stimulus that would, with the reflex blocked, lower pressure by 40 mmHg produces an actual fall of 8 mmHg with the reflex intact. (a) Find the open-loop gain $G$. (b) What fraction of the disturbance did the loop correct? (c) A drug halves the gain. What is the new fall in pressure? (d) What gain would be required to hold the fall to 2 mmHg, and what does the answer say about the cost of tight regulation?

**P2 (🟡, sets up 1.4)** In an excitable membrane, a depolarization opens voltage-gated $\text{Na}^+$ channels whose inward current depolarizes further — a positive loop with signed loop gain $L$, so a stimulus $s$ produces a net depolarization $\Delta = s/(1-L)$. $L$ increases with depolarization, because the fraction of $\text{Na}^+$ channels activated is a steep increasing function of voltage. A 2 mV stimulus is applied. (a) Compute $\Delta$ for $L = 0.6$, $L = 0.9$, and $L = 0.95$. (b) What happens as $L \to 1$? (c) Give the physiological name for the voltage at which $L$ reaches 1, and say in one sentence why this explains the all-or-none character of the spike.

**P3 (🔴, bridges to control-systems and dynamical-systems)** A loop corrects a fraction $g$ of the error it measures, but its correction only takes effect one full cycle later, so the deviation obeys $x_{n+1} = (1-g)x_n$. (a) Starting from $x_0 = 12$ units, tabulate $x_1$ through $x_4$ for $g = 0.4$, $g = 1.4$, and $g = 2.4$, and describe each behaviour in a phrase. (b) State the exact stability condition on $g$, and the condition for the decay to be oscillatory rather than monotone. (c) The continuous analogue $\dot x = -k\,x(t-\tau)$ is stable exactly when $k\tau < \pi/2$. A patient's chemoreflex has $k = 0.12\ \text{s}^{-1}$ and a lung-to-chemoreceptor circulation time of $\tau = 8$ s. Is the loop stable? Heart failure triples the circulation time. Is it stable now? Find the critical delay, and name the clinical picture.

<details>
<summary>Solutions</summary>

**P1 (a)** With $d = 40$ mmHg and $\Delta = 8$ mmHg:

$$\Delta = \frac{d}{1+G} \;\Longrightarrow\; 8 = \frac{40}{1+G} \;\Longrightarrow\; 1+G = \frac{40}{8} = 5 \;\Longrightarrow\; G = \mathbf{4}.$$

Cross-check with the ratio definition: correction $= 40 - 8 = 32$ mmHg, residual $= 8$ mmHg, and $32/8 = 4$. ✓

**(b)** $$\frac{G}{1+G} = \frac{4}{5} = \mathbf{0.80}, \ \text{i.e. } 80\ \text{percent corrected}.$$

**(c)** With $G = 2$:

$$\Delta = \frac{40}{1+2} = \frac{40}{3} = \mathbf{13.3\ \text{mmHg}}.$$

**Halving the gain did not double the error — it raised it by a factor of $5/3 = 1.67$.** The relationship between gain and error is $1/(1+G)$, not $1/G$, and the difference matters most at low gain.

**(d)** $$2 = \frac{40}{1+G} \;\Longrightarrow\; 1+G = 20 \;\Longrightarrow\; G = \mathbf{19}.$$

**A fourfold reduction in error (8 mmHg to 2 mmHg) costs a 4.75-fold increase in gain**, from 4 to 19 — and the cost keeps getting worse: pushing to 1 mmHg would need $G = 39$, to 0.5 mmHg $G = 79$. This is the general shape of the trade-off. **Perfect regulation is not merely expensive; it is unreachable by a proportional controller at any finite gain**, and the extra gain drags the loop toward the instability of P3. The physiological escape route is not more proportional gain but an *integrating* effector — a slow controller that keeps acting for as long as any error persists, and so drives the steady-state error to zero. The kidney and the endocrine axes work this way, which is why long-term blood-pressure and osmolarity regulation is far tighter than any reflex ([3.3](03-03-fluid-electrolyte-acid-base.md), [3.4](03-04-endocrine-axes.md)). The engineering version is integral control ([control-systems 2.3](../../control-systems/lessons/02-03-steady-state-error-system-type.md), [control-systems 4.1](../../control-systems/lessons/04-01-pid-control.md)).

**P2 (a)** With $s = 2$ mV and $\Delta = s/(1-L)$:

$$L = 0.60: \quad \Delta = \frac{2}{1-0.60} = \frac{2}{0.40} = \mathbf{5.0\ \text{mV}}$$

$$L = 0.90: \quad \Delta = \frac{2}{0.10} = \mathbf{20\ \text{mV}}$$

$$L = 0.95: \quad \Delta = \frac{2}{0.05} = \mathbf{40\ \text{mV}}$$

**The same 2 mV stimulus produces a 5 mV, a 20 mV, or a 40 mV response.** The membrane is a regenerative amplifier whose gain depends on where it is already sitting.

**(b)** As $L \to 1^-$ the amplification factor $1/(1-L)$ diverges: the response becomes arbitrarily large for an arbitrarily small stimulus, and at $L = 1$ there is no finite steady state at all. The depolarization then runs on its own, no longer proportional to what triggered it — and it is stopped not by the loop but by *external* terminators: $\text{Na}^+$ channel inactivation, the approach of the sodium equilibrium potential, and delayed $\text{K}^+$ efflux ([1.4](01-04-action-potential.md)).

**(c)** The voltage at which $L = 1$ is the **threshold**.

**Why this gives all-or-none behaviour:** below threshold, $L < 1$, the loop is a bounded amplifier and the response is *graded* — proportional to the stimulus, and it decays when the stimulus stops. Above threshold, $L > 1$, the response no longer depends on the stimulus at all, because the loop is supplying its own drive; the spike's size is set by the ion gradients and the channel kinetics, not by what triggered it. **Threshold is not a number the membrane compares against; it is the voltage at which a loop gain crosses 1**, which is why the transition from "nothing much" to "full spike" is so sharp. The stimulus decides *whether*, never *how big*.

**P3 (a)** $x_n = (1-g)^n \cdot 12$.

| $n$ | $g = 0.4$ (factor $0.6$) | $g = 1.4$ (factor $-0.4$) | $g = 2.4$ (factor $-1.4$) |
|---|---|---|---|
| 0 | 12 | 12 | 12 |
| 1 | 7.2 | $-4.8$ | $-16.8$ |
| 2 | 4.32 | 1.92 | 23.52 |
| 3 | 2.592 | $-0.768$ | $-32.928$ |
| 4 | 1.5552 | 0.3072 | 46.0992 |

- $g = 0.4$: **smooth monotone decay** — the controller undercorrects every step and creeps in.
- $g = 1.4$: **damped ringing** — it overshoots the set point on every step, alternating sign, but each swing is smaller; it converges.
- $g = 2.4$: **growing oscillation** — every overcorrection is worse than the error that caused it. Unstable.

**(b)** $x_n \to 0$ iff $|1-g| < 1$:

$$-1 < 1-g < 1 \;\Longrightarrow\; \boxed{0 < g < 2}$$

The decay is **monotone** when $1-g > 0$, i.e. $g < 1$, and **oscillatory** when $1-g < 0$, i.e. $1 < g < 2$. At $g = 1$ the error is annihilated in a single step (dead-beat).

**Read this back as physiology.** $g$ is gain measured *in units of one loop delay*: a strong controller with a slow loop and a weak controller with a fast loop can have the same $g$. **The dangerous quantity is the product of gain and delay, not either alone** — which is exactly what the continuous criterion $k\tau$ says.

**(c)** The threshold is $k\tau = \pi/2 = 1.5708$.

$$\text{Normal:}\quad k\tau = 0.12 \times 8 = 0.96 < 1.571 \;\Rightarrow\; \textbf{stable}.$$

$$\text{Heart failure, } \tau = 24\ \text{s}: \quad k\tau = 0.12 \times 24 = 2.88 > 1.571 \;\Rightarrow\; \textbf{unstable}.$$

$$\text{Critical delay:}\quad \tau_c = \frac{\pi/2}{k} = \frac{1.5708}{0.12} = \mathbf{13.1\ \text{s}}.$$

The clinical picture is **Cheyne–Stokes breathing** — the crescendo–decrescendo cycle with intervening apnoeas seen in heart failure (and, by the same mechanism, at high altitude during sleep, where the chemoreflex gain $k$ rather than the delay is what rises).

**The diagnostic point, and the reason this problem is here:** the chemoreflex's *gain is normal* and its *sensors are normal*. The only thing that changed is the transit time from lung to carotid body, which low cardiac output stretched. **A structurally intact controller was pushed across a stability boundary by a delay**, and the resulting oscillation is not a symptom of the respiratory system at all — it is a symptom of the heart. You would not find this by examining the parts; you find it by writing down the loop.

For the engineering treatment of exactly this — how much delay a loop can absorb before ringing, quantified as phase margin — see [control-systems 3.4](../../control-systems/lessons/03-04-gain-and-phase-margins.md); the birth of the oscillation itself is [dynamical-systems 3.3](../../dynamical-systems/lessons/03-03-hopf-bifurcation.md).

</details>

## Connections

- **Backward:** [general-biology 2.1](../../general-biology/lessons/02-01-energy-atp-enzymes.md) established that cells run far from equilibrium on a continuous ATP supply — that is the bill homeostasis pays. Every effector in every loop in this course is spending energy to hold a gradient or a variable away from where physics would put it.
- **Forward — this loop *is* the rest of the course.** [1.2](01-02-membrane-transport.md) builds the first effectors (pumps and channels) and [1.4](01-04-action-potential.md) is the positive loop of P2 in full. [2.3](02-03-hemodynamics-blood-pressure.md) is the baroreflex, the fast pressure loop of Example 2. [3.1](03-01-glomerular-filtration-clearance.md) contains tubuloglomerular feedback, a loop entirely internal to one nephron. [3.4](03-04-endocrine-axes.md) is negative feedback drawn as a three-tier hormonal cascade — plus the LH surge, where the sign deliberately flips. [4.2](04-02-thermoregulation.md) is Example 1 in full, and is where the raised-set-point reading of fever pays off. [4.3](04-03-exercise-integrative-physiology.md) is every loop running at once, with feedforward central command out in front.
- **Sideways:** this is control theory with biological labels. The block diagram, the residual error $d/(1+G)$, and the gain-versus-stability trade-off are [control-systems 1.1](../../control-systems/lessons/01-01-feedback-and-the-control-problem.md) and [control-systems 2.3](../../control-systems/lessons/02-03-steady-state-error-system-type.md); the overshoot-and-ring behaviour of panel (b) is the second-order step response of [control-systems 2.2](../../control-systems/lessons/02-02-second-order-response.md); the loop-gain-crosses-1 threshold in P2 and the delay-driven oscillation in P3 are a transcritical and a Hopf bifurcation respectively ([dynamical-systems 3.1](../../dynamical-systems/lessons/03-01-saddle-node-transcritical.md), [dynamical-systems 3.3](../../dynamical-systems/lessons/03-03-hopf-bifurcation.md)). **The equations are not analogous to the engineering ones; they are the same equations.**
