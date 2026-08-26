# Control Systems · Lesson 4.2: Tuning PID

> ⏱ ~15 min · Module 4: PID & compensator design · Builds on: [4.1 PID control](04-01-pid-control.md), [2.4 Stability & Routh–Hurwitz](02-04-stability-routh-hurwitz.md), [3.1 Root locus: construction](03-01-root-locus-construction.md), [3.4 Gain & phase margins](03-04-gain-and-phase-margins.md) · Unlocks: [4.3 Lead & lag compensators](04-03-lead-lag-compensators.md)

## Why this matters

[4.1](04-01-pid-control.md) told you what each of the three knobs *does*. That is not the same as knowing where to set them. Three continuous knobs is a three-dimensional search space in which every axis interacts with every other — and on a real plant, a distillation column or an extruder or a quadrotor, you usually don't have $G(s)$ at all. You have a machine, an actuator, and a chart recorder.

Tuning rules exist for exactly that situation: **two cheap measurements in, a full set of gains out.** They are not optimal and they were never claimed to be. They put you in the right neighborhood in ten minutes so you can spend the rest of the afternoon refining instead of flailing.

The payoff for you specifically is the bridge in the middle of this lesson: the two numbers the classic experiment measures are *precisely* the critical gain from the Routh array in [2.4](02-04-stability-routh-hurwitz.md) and the $j\omega$-crossing frequency from the root locus in [3.1](03-01-root-locus-construction.md). Same quantities, one read off a plant, one computed from a model. That is what makes a tuning table stop being a magic recipe.

## The idea

Every tuning rule answers the same question: *how much can this plant take before it fights back?*

There are two ways to ask. **The aggressive way** is to close the loop with proportional control only and turn the gain up until the loop sits on the edge of instability — ringing at constant amplitude, neither growing nor dying. The gain that does it and the period of that ringing are two numbers that summarize the plant's whole personality: how much gain it tolerates, and how fast it likes to oscillate. Ziegler and Nichols' insight in 1942 was that you can back off from that edge by a *fixed fraction* and get a workable controller for a huge class of industrial plants.

**The gentle way** is to open the loop entirely, poke the plant with a step, and watch. Most industrial processes trace an S-shaped climb: nothing for a while (transport delay, mixing time), then a steady rise, then a flattening. Two numbers again — how long the nothing lasts, and how steep the rise is. Those two also determine a controller.

Both are the same act of humility — *don't model the plant, interrogate it* — and both produce a **starting point**, not a design. Ziegler–Nichols deliberately aims at a snappy, ringy response; you will almost always detune it afterward.

## The formal version

Throughout, the controller is the unity-feedback PID of [4.1](04-01-pid-control.md), written in both the forms that lesson introduced:

$$G_c(s) = K_p + \frac{K_i}{s} + K_d s = K_p\left(1 + \frac{1}{T_i s} + T_d s\right),$$

so the two parameter sets convert as

$$\boxed{\;K_i = \frac{K_p}{T_i}, \qquad K_d = K_p T_d.\;}$$

*In words: $T_i$ (the **integral time**, seconds) and $T_d$ (the **derivative time**, seconds) are the gains re-expressed as times.* Tuning tables are written in $T_i, T_d$ because those are what a process engineer dials into a panel; simulation code wants $K_i, K_d$. Always report both.

### Method 1 — Ultimate gain (closed-loop, "continuous cycling")

**The procedure.**

1. Switch off integral and derivative: $K_i = K_d = 0$. Pure proportional.
2. Raise $K_p$ step by step, disturbing the loop each time, until the output **oscillates with sustained, constant amplitude** — not growing, not decaying. Call that gain the **ultimate gain** $K_u$, and the period of the oscillation the **ultimate period** $P_u$ (seconds).
3. Read the gains off the table.

| Controller | $K_p$ | $T_i$ | $T_d$ |
|---|---|---|---|
| P | $0.5K_u$ | — | — |
| PI | $0.45K_u$ | $P_u/1.2$ | — |
| PID | $0.6K_u$ | $P_u/2$ | $P_u/8$ |

Equivalently, in the $K_i, K_d$ form (just apply the boxed conversion):

| Controller | $K_p$ | $K_i = K_p/T_i$ | $K_d = K_pT_d$ |
|---|---|---|---|
| PI | $0.45K_u$ | $0.54K_u/P_u$ | — |
| PID | $0.6K_u$ | $1.2K_u/P_u$ | $0.075K_uP_u$ |

*(Check the PID row: $K_i = 0.6K_u/(P_u/2) = 1.2K_u/P_u$ ✓, and $K_d = 0.6K_u \cdot P_u/8 = 0.075K_uP_u$ ✓.)*

Notice the shape of the recipe: **cut the gain to 60 percent of the breaking point, integrate over half a cycle, differentiate over an eighth of a cycle.** The plant's own oscillation period sets the controller's clock.

### The bridge: $K_u$ and $P_u$ are things you already know how to compute

Here is the part that turns the table from folklore into control theory.

"Sustained, constant-amplitude oscillation" is the textbook definition of **marginal stability**: a closed-loop pole pair sitting exactly *on* the imaginary axis. You have met that condition twice already, from two directions.

- **Routh–Hurwitz ([2.4](02-04-stability-routh-hurwitz.md)):** the gain at which a whole row of the Routh array vanishes is the critical gain, and the *auxiliary polynomial* built from the row above gives the imaginary-axis roots $\pm j\omega_c$.
- **Root locus ([3.1](03-01-root-locus-construction.md)):** the gain where the locus crosses the $j\omega$ axis, at crossing frequency $\omega_c$.

They are the same number. So

$$\boxed{\;K_u = K_{\text{crit}}, \qquad P_u = \frac{2\pi}{\omega_c}.\;}$$

*In words: the ultimate gain is the critical gain, and the ultimate period is one period of the marginal oscillation.* If you **do** have a model, you never touch the hardware — compute $K_u$ and $\omega_c$ on paper and go straight to the table. If you don't, the experiment measures them for you. Example 1 does exactly this, on the plant from Module 3's boss problem.

One structural bonus, free from the table: since $T_i = P_u/2$ and $T_d = P_u/8$, Ziegler–Nichols PID always sets $T_i = 4T_d$. The controller numerator then factors:

$$K_p\left(1 + \frac{1}{T_is} + T_ds\right) = \frac{K_pT_d}{s}\left(s^2 + \frac{s}{T_d} + \frac{1}{4T_d^2}\right) = \frac{K_pT_d}{s}\left(s + \frac{1}{2T_d}\right)^2.$$

*In words: Z-N PID is always an integrator plus a **double zero** at $s = -1/(2T_d) = -4/P_u$.* So in root-locus language ([3.1](03-01-root-locus-construction.md)) the rule says: add a pole at the origin to kill steady-state error, and drop two coincident zeros at four-over-the-ultimate-period to bend the locus back left. That is a design decision, stated as a fraction.

### Method 2 — Reaction curve (open-loop step test)

If driving the plant to the edge of instability is out of the question, open the loop instead.

**The procedure.**

1. Put the controller in manual. Wait for steady state.
2. Step the plant *input* (the actuator command) by an amount $\Delta u$ and record the output.
3. Fit a **first-order-plus-dead-time (FOPDT)** model to the S-shaped trace:

$$G(s) \approx \frac{K e^{-Ls}}{Ts+1}.$$

*In words: the plant does nothing for $L$ seconds, then behaves like the single-time-constant system of [2.1](02-01-first-order-response.md) with time constant $T$ and gain $K$.* The factor $e^{-Ls}$ is a pure **time delay** of $L$ seconds — the Laplace shift theorem, borrowed here and used as a black box.

**Extracting the three parameters — the tangent-line construction.**

- **Gain** $K = \Delta y/\Delta u$, where $\Delta y$ is the total change in output. (Units: output-units per input-unit.)
- Draw the **tangent to the trace at its steepest point** (the inflection). Extend it both ways.
- **Dead time** $L$ = time from the step instant to where the tangent crosses the *initial* output level.
- **Time constant** $T$ = time from that crossing to where the tangent crosses the *final* output level.

This is [2.1](02-01-first-order-response.md)'s tangent trick — "extend the tangent to the final value; the horizontal distance is $\tau$" — moved from the origin to the inflection, because a plant with several lags ramps up gradually instead of starting at full slope. The delay $L$ absorbs whatever the single lag $T$ can't explain.

The original table is written with the **normalized slope** $R = K/T$: the slope of the reaction curve per unit of input step.

| Controller | $K_p$ | $T_i$ | $T_d$ |
|---|---|---|---|
| P | $\dfrac{1}{RL} = \dfrac{T}{LK}$ | — | — |
| PI | $\dfrac{0.9}{RL} = \dfrac{0.9T}{LK}$ | $\dfrac{L}{0.3} = 3.33L$ | — |
| PID | $\dfrac{1.2}{RL} = \dfrac{1.2T}{LK}$ | $2L$ | $0.5L$ |

with $K_i = K_p/T_i$ and $K_d = K_pT_d$ as always.

*In words: push harder on a sluggish plant (big $T$), back off on one that delays (big $L$) or already has a lot of muscle (big $K$).* Two sanity checks that catch most algebra slips: (i) the product $K_pK$ is **dimensionless** and equals $1.2T/L$ for PID — a pure ratio of times; (ii) every time setting scales with $L$, so a plant with twice the dead time gets a controller twice as slow and half as strong.

### Method 3 — Manual tuning, which is what people actually do

No table, no experiment: just an order and a symptom list. Change one thing at a time and watch the response after each.

1. Start with $K_p$ small, $K_i = K_d = 0$. Raise $K_p$ until the response starts to oscillate, then back off to roughly half that gain.
2. Add integral action (raise $K_i$, i.e. lower $T_i$) until the steady-state offset disappears in an acceptable time. Stop as soon as overshoot starts to climb.
3. Add derivative (raise $K_d$) to damp the ringing $K_p$ and $K_i$ introduced. If the actuator starts chattering, you have gone too far.

**Symptom → fix.**

| Symptom | Fix |
|---|---|
| Response too sluggish | increase $K_p$ |
| Steady-state offset never closes | increase $K_i$ (decrease $T_i$) |
| Overshoot, ringing, oscillation | decrease $K_p$, **or** increase $K_d$, **or** decrease $K_i$ |
| Actuator buzzing / noisy control signal | decrease $K_d$, or filter the derivative harder |
| Big overshoot only after a long saturation | integral windup — add anti-windup ([4.1](04-01-pid-control.md)) |

The noise row is why step 3 is delicate: derivative action amplifies high-frequency measurement noise, so it is always implemented as a filtered derivative $\dfrac{K_ds}{\alpha s + 1}$ rather than raw $K_ds$ — that filter is the "derivative filtering" knob in the table.

**Other rule sets, one sentence.** Cohen–Coon uses the same $K, L, T$ from the reaction curve but is tuned for plants with a large $L/T$ ratio; IMC (also called lambda) tuning lets you dial a single desired closed-loop time constant and is much gentler than Z-N; and modern practice usually runs a model-based design or the vendor's software auto-tuner rather than any hand table.

## Picture

![Two tuning experiments drawn as procedures: on the left, a closed-loop output oscillating at constant amplitude with the ultimate period marked between two successive peaks and the gain labelled as the ultimate gain; on the right, an open-loop S-shaped reaction curve with the tangent drawn at its steepest point, showing how the dead time L and the time constant T are read off the time axis](assets/04-02-fig1.svg)

## Worked examples

**Example 1 (model-based Ziegler–Nichols, end to end).** The Module 3 plant, in unity feedback:

$$G(s) = \frac{1}{s(s+2)(s+4)}.$$

*Step 1 — find $K_u$ and $\omega_c$ without touching hardware.* With proportional gain $K$, the closed-loop characteristic polynomial is

$$s(s+2)(s+4) + K = s^3 + 6s^2 + 8s + K.$$

Routh array ([2.4](02-04-stability-routh-hurwitz.md)):

$$\begin{array}{c|cc}
s^3 & 1 & 8\\
s^2 & 6 & K\\
s^1 & \dfrac{48-K}{6} & 0\\
s^0 & K &
\end{array}$$

The $s^1$ entry vanishes at $K = 48$, so the loop is stable for $0 < K < 48$ and marginal at

$$K_u = 48.$$

The auxiliary polynomial from the $s^2$ row gives the imaginary-axis roots: $6s^2 + 48 = 0 \Rightarrow s^2 = -8 \Rightarrow s = \pm j2\sqrt{2}$. So

$$\omega_c = 2\sqrt2 = 2.828\ \text{rad/s}, \qquad P_u = \frac{2\pi}{\omega_c} = \frac{6.2832}{2.8284} = 2.221\ \text{s}.$$

*(Cross-check without Routh: put $s = j\omega$ in the characteristic polynomial and split into real and imaginary parts. $(j\omega)^3 + 6(j\omega)^2 + 8(j\omega) + K = (K - 6\omega^2) + j(8\omega - \omega^3)$. The imaginary part vanishes at $\omega^2 = 8$, and then the real part forces $K = 6(8) = 48$ ✓ — the same pair, which is also exactly where the root locus of [3.1](03-01-root-locus-construction.md) crosses the $j\omega$ axis.)*

*Step 2 — read the table.* For PID:

$$K_p = 0.6K_u = 0.6(48) = 28.8, \qquad T_i = \frac{P_u}{2} = 1.111\ \text{s}, \qquad T_d = \frac{P_u}{8} = 0.2777\ \text{s},$$

and converting,

$$K_i = \frac{K_p}{T_i} = \frac{28.8}{1.1107} = 25.93\ \text{s}^{-1}, \qquad K_d = K_pT_d = 28.8(0.27768) = 8.00\ \text{s}.$$

*(Check via the closed forms: $K_i = 1.2K_u/P_u = 57.6/2.2214 = 25.93$ ✓; $K_d = 0.075K_uP_u = 3.6(2.2214) = 8.00$ ✓.)* The double zero sits at $s = -4/P_u = -1.801$, twice.

*Step 3 — verify with the Module 3 tools, because a table is not a proof.* The open-loop transfer function is now

$$L(s) = \frac{8.00s^2 + 28.8s + 25.93}{s^2(s+2)(s+4)},$$

and the closed-loop characteristic polynomial is $s^4 + 6s^3 + 16.00s^2 + 28.8s + 25.93$. Two things to check:

- **Closed-loop poles.** They are $-0.600 \pm j2.056$, $-2.070$, $-2.730$ — all in the left half-plane, so the design is stable, but the dominant pair has $\zeta = 0.600/\sqrt{0.600^2 + 2.056^2} = 0.280$. From [2.2](02-02-second-order-response.md), $\zeta = 0.28$ is *lightly damped*. (Quick independent stability check without factoring: the Routh array of that quartic has first column $1,\ 6,\ 11.20,\ 14.91,\ 25.93$ — all positive ✓.)
- **Phase margin ([3.4](03-04-gain-and-phase-margins.md)).** Gain crossover is at $\omega_{gc} = 2.18$ rad/s, where $\angle L = -155.2^\circ$, giving

$$\text{PM} = 180^\circ - 155.2^\circ = 24.8^\circ.$$

The usual healthy band is $45^\circ$–$60^\circ$. So Ziegler–Nichols handed us a stable loop with a **thin** margin. Simulating the unit-step response confirms it: peak 1.595 at $t = 1.34$ s, i.e. **59.5 percent overshoot**, and a 2-percent settling time of 6.46 s.

*Step 4 — refine, which was always the plan.* The symptom is overshoot, so weaken integral action and back off gain: take $T_i$ from 1.11 s to 2.22 s and $K_p$ to $0.7 \times 28.8 = 20.2$, keeping $K_d = 8.00$. That gives $K_i = 20.16/2.221 = 9.08\ \text{s}^{-1}$, and the same checks now report overshoot 28.9 percent, $t_s = 4.14$ s, and $\text{PM} = 48.5^\circ$. Faster settling, half the overshoot, and a margin inside the healthy band. **The table got us to the right neighborhood in one line of arithmetic; Module 3 told us which way to walk.**

**Example 2 (reaction curve on a process you have no model of).** A jacketed reactor's temperature is controlled by a valve. With the loop in manual, you step the valve from 30 percent to 40 percent open and record: temperature holds at 50 °C for a while, then climbs and levels off at 70 °C.

Off the chart: the tangent at the steepest point crosses the 50 °C line at $t = 2$ min after the step, and crosses the 70 °C line at $t = 12$ min.

$$\Delta u = 10\ \text{percent}, \quad \Delta y = 20\ ^\circ\text{C} \;\Longrightarrow\; K = \frac{20}{10} = 2\ ^\circ\text{C per percent},$$
$$L = 2\ \text{min}, \qquad T = 12 - 2 = 10\ \text{min}.$$

So $G(s) \approx \dfrac{2e^{-2s}}{10s+1}$ (time in minutes). PID from the reaction-curve table:

$$K_p = \frac{1.2T}{LK} = \frac{1.2(10)}{2(2)} = \frac{12}{4} = 3.0\ \text{percent per }^\circ\text{C}, \qquad T_i = 2L = 4\ \text{min}, \qquad T_d = 0.5L = 1\ \text{min},$$
$$K_i = \frac{K_p}{T_i} = \frac{3.0}{4} = 0.75\ \text{percent per }^\circ\text{C per min}, \qquad K_d = K_pT_d = 3.0(1) = 3.0\ \text{percent}\cdot\text{min per }^\circ\text{C}.$$

*Checks.* $K_pK = 3.0 \times 2 = 6$, dimensionless, and it should equal $1.2T/L = 1.2(10)/2 = 6$ ✓. The ratio $L/T = 0.2$ sits in the band (roughly 0.1 to 0.6) where Z-N behaves; a plant with $L/T$ near or above 1 is delay-dominated and needs Cohen–Coon or a Smith predictor instead. And every time is a multiple of $L = 2$ min, as the table guarantees ✓.

Practical note: never step a real process only once. Step up, let it settle, step back down, and average the two fits — $L$ especially is easy to misread by a factor of two off a single noisy trace.

## Watch out

- **You might think Ziegler–Nichols is a design.** It is a *starting point*, and an aggressive one. The rules were fitted to give roughly **quarter-amplitude decay** — each overshoot a quarter the size of the last. For a dominant second-order pair the ratio of successive peak *excursions* is $e^{-2\pi\zeta/\sqrt{1-\zeta^2}} = M_p^2$, so a quarter-decay ratio means $M_p = \tfrac12$: **50 percent overshoot** and $\zeta \approx 0.215$. Example 1 measured 59.5 percent. If your spec says "overshoot under 10 percent," Z-N by itself has already failed it — detune, or use a gentler rule set.
- **You might think you can always run the ultimate-gain test.** You often cannot. Deliberately driving a plant into sustained oscillation may violate product-quality limits, hammer an actuator, or be flatly unsafe (think a reactor, a flight surface, a patient). The safe industrial substitute is **relay feedback auto-tuning** (Åström–Hägglund): replace the controller with an on/off relay of small amplitude $d$, which drives a limit cycle of bounded size; measuring that cycle's amplitude $a$ and period gives $K_u \approx 4d/(\pi a)$ and $P_u$ directly, with the oscillation amplitude under your control the whole time. It is what the "auto-tune" button on an industrial controller usually runs.
- **You might think the rules apply to any plant.** They assume first-order-plus-dead-time behavior: a monotone S-shaped open-loop step response, one lag and one delay. On an **oscillatory** plant (a lightly damped resonance — a flexible arm) the reaction curve isn't S-shaped at all and the fit is meaningless. On a **non-minimum-phase** plant (a right-half-plane zero, whose step response first moves the *wrong way*) the initial dip corrupts the tangent and Z-N badly overestimates the gain. Both are visible in the trace — look before you reach for a table.
- **You might think derivative action is free damping.** Raw $K_ds$ has gain growing without bound with frequency, so it amplifies sensor noise straight into the actuator. Always filter it, and on a noisy loop consider dropping to PI — which is why the PI row exists on both tables and why most industrial loops are PI, not PID.

## One-liner

> Ziegler–Nichols turns two measurements into a full PID: from the closed loop, $(K_u, P_u)$ — the critical gain and $2\pi/\omega_c$ that Routh and the root locus already predict — give $K_p = 0.6K_u$, $T_i = P_u/2$, $T_d = P_u/8$; and whatever the table hands you is a starting point aimed at 50-percent overshoot, so verify the margin and detune.

## Problems

**P1 (🟢)** A relay auto-tune on a flow loop reports $K_u = 12$ and $P_u = 3$ s. Give the Ziegler–Nichols P, PI, and PID settings, reporting the PID one in *both* the $(K_p, T_i, T_d)$ and $(K_p, K_i, K_d)$ forms. Where does the PID controller's double zero sit?

**P2 (🟡)** With a level controller in manual, you step the pump command by 5 percent and record the tank level rising from 40 to 60 units. The tangent drawn at the steepest point of the trace crosses the initial level at $t = 3$ min after the step and the final level at $t = 18$ min. Identify $K$, $L$, and $T$, write the FOPDT model, and give the Ziegler–Nichols PI and PID settings. Check your $K_p$ with the dimensionless product $K_pK$, and say whether this plant is in the range where Z-N is trustworthy.

**P3 (🔴)** A unity-feedback loop has plant $G(s) = \dfrac{1}{s(s+1)(s+5)}$. (a) Find $K_u$ and $P_u$ from the model, using the Routh array and its auxiliary polynomial. (b) Give the Z-N PID gains in both forms. (c) Write the closed-loop characteristic polynomial with those gains and use Routh to confirm the tuned loop is stable.

<details>
<summary>Solutions</summary>

**P1** $K_u = 12$, $P_u = 3$ s.

*P:* $K_p = 0.5K_u = 6$.

*PI:* $K_p = 0.45K_u = 0.45(12) = 5.4$; $T_i = P_u/1.2 = 3/1.2 = 2.5$ s; so $K_i = K_p/T_i = 5.4/2.5 = 2.16\ \text{s}^{-1}$.

*PID:*

$$K_p = 0.6(12) = 7.2, \qquad T_i = \frac{3}{2} = 1.5\ \text{s}, \qquad T_d = \frac{3}{8} = 0.375\ \text{s},$$
$$K_i = \frac{7.2}{1.5} = 4.8\ \text{s}^{-1}, \qquad K_d = 7.2(0.375) = 2.7\ \text{s}.$$

*Double zero:* at $s = -1/(2T_d) = -1/0.75 = -1.333$, i.e. $-4/P_u = -4/3$ ✓ (repeated).

*Check.* The closed-form columns agree: $K_i = 1.2K_u/P_u = 1.2(12)/3 = 4.8$ ✓ and $K_d = 0.075K_uP_u = 0.075(12)(3) = 2.7$ ✓. Ordering sanity on the three $K_p$ values, $5.4 < 6.0 < 7.2$: adding integral action *costs* gain (it eats phase, so PI sits below P), and adding derivative action *buys* gain back (it supplies phase, so PID sits above P) — exactly the trade [4.1](04-01-pid-control.md) described. ✓ Also $T_i = 1.5 = 4(0.375) = 4T_d$ ✓, as Z-N PID always requires.

**P2** *Gain.* $\Delta u = 5$ percent, $\Delta y = 60 - 40 = 20$ units, so

$$K = \frac{\Delta y}{\Delta u} = \frac{20}{5} = 4\ \text{units per percent.}$$

*Times.* The tangent hits the initial level 3 min after the step, so $L = 3$ min. It hits the final level at 18 min, so

$$T = 18 - 3 = 15\ \text{min}, \qquad G(s) \approx \frac{4e^{-3s}}{15s+1} \quad (\text{time in minutes}).$$

*PI:*

$$K_p = \frac{0.9T}{LK} = \frac{0.9(15)}{3(4)} = \frac{13.5}{12} = 1.125, \qquad T_i = \frac{L}{0.3} = \frac{3}{0.3} = 10\ \text{min}, \qquad K_i = \frac{1.125}{10} = 0.1125\ \text{min}^{-1}.$$

*PID:*

$$K_p = \frac{1.2T}{LK} = \frac{1.2(15)}{3(4)} = \frac{18}{12} = 1.5, \qquad T_i = 2L = 6\ \text{min}, \qquad T_d = 0.5L = 1.5\ \text{min},$$
$$K_i = \frac{1.5}{6} = 0.25\ \text{min}^{-1}, \qquad K_d = 1.5(1.5) = 2.25\ \text{min}.$$

*Check.* $K_pK = 1.5 \times 4 = 6$, dimensionless, and the table predicts $1.2T/L = 1.2(15)/3 = 6$ ✓. Same check on the PI row: $1.125 \times 4 = 4.5 = 0.9T/L = 0.9(15)/3$ ✓. Every time setting is a multiple of $L = 3$ ✓.

*Trustworthy?* $L/T = 3/15 = 0.2$, comfortably inside the roughly 0.1–0.6 band where the reaction-curve rules were fitted, and the trace was a clean monotone S. So yes — as a starting point. Expect large overshoot and plan to detune.

**P3** (a) With proportional gain $K$, the closed-loop characteristic polynomial is

$$s(s+1)(s+5) + K = s^3 + 6s^2 + 5s + K.$$

Routh array:

$$\begin{array}{c|cc}
s^3 & 1 & 5\\
s^2 & 6 & K\\
s^1 & \dfrac{30-K}{6} & 0\\
s^0 & K &
\end{array}$$

The $s^1$ row vanishes at $K = 30$, so $K_u = 30$. The auxiliary polynomial from the $s^2$ row is $6s^2 + 30 = 0$, giving $s^2 = -5$, i.e. $s = \pm j\sqrt5$. Hence

$$\omega_c = \sqrt5 = 2.2361\ \text{rad/s}, \qquad P_u = \frac{2\pi}{\sqrt5} = \frac{6.28319}{2.23607} = 2.8099\ \text{s}.$$

*(Substitution check: $(j\omega)^3 + 6(j\omega)^2 + 5(j\omega) + K = (K - 6\omega^2) + j(5\omega - \omega^3)$. Imaginary part zero at $\omega^2 = 5$; real part then forces $K = 30$ ✓.)*

(b) Z-N PID:

$$K_p = 0.6(30) = 18, \qquad T_i = \frac{P_u}{2} = 1.4050\ \text{s}, \qquad T_d = \frac{P_u}{8} = 0.35124\ \text{s},$$
$$K_i = \frac{18}{1.4050} = 12.81\ \text{s}^{-1}, \qquad K_d = 18(0.35124) = 6.322\ \text{s}.$$

*(Closed-form check: $K_i = 1.2K_u/P_u = 36/2.8099 = 12.81$ ✓; $K_d = 0.075K_uP_u = 2.25(2.8099) = 6.322$ ✓.)*

(c) The controller contributes $\dfrac{K_ds^2 + K_ps + K_i}{s}$, and $G(s)$ contributes $\dfrac{1}{s(s+1)(s+5)}$, so the closed-loop characteristic polynomial is

$$s^2(s+1)(s+5) + K_ds^2 + K_ps + K_i = s^4 + 6s^3 + (5 + 6.322)s^2 + 18s + 12.81,$$

i.e. $s^4 + 6s^3 + 11.322s^2 + 18s + 12.81$. Routh:

$$\begin{array}{c|ccc}
s^4 & 1 & 11.322 & 12.81\\
s^3 & 6 & 18 & \\
s^2 & \dfrac{6(11.322)-18}{6} = 8.322 & 12.81 & \\
s^1 & \dfrac{8.322(18)-6(12.81)}{8.322} = 8.763 & & \\
s^0 & 12.81 & &
\end{array}$$

First column $1,\ 6,\ 8.322,\ 8.763,\ 12.81$ — all positive, no sign changes, so **the tuned loop is stable**.

*Check.* Factoring the quartic gives poles $-0.374 \pm j1.621$, $-1.120$, $-4.133$: all in the left half-plane ✓, consistent with Routh. But the dominant pair has $\zeta = 0.374/\sqrt{0.374^2 + 1.621^2} = 0.374/1.664 = 0.225$ — right at the quarter-decay damping predicted in "Watch out," so expect roughly 50 percent overshoot. Stable is not the same as good; detune before shipping.

</details>

## Flashback

**From Lesson 2.2 (Second-order response):** A different loop was tuned until its closed-loop transfer function came out as

$$T(s) = \frac{25}{s^2 + 6s + 25}.$$

Find $\omega_n$, $\zeta$, the damped frequency $\omega_d$, the percent overshoot $M_p$, the peak time $t_p$, and the 2-percent settling time $t_s$. Then say whether this tuning is more or less aggressive than Ziegler–Nichols' quarter-decay target.

<details>
<summary>Solution</summary>

Match the standard form $\dfrac{\omega_n^2}{s^2 + 2\zeta\omega_ns + \omega_n^2}$:

$$\omega_n^2 = 25 \Rightarrow \omega_n = 5\ \text{rad/s}, \qquad 2\zeta\omega_n = 6 \Rightarrow \zeta = \frac{6}{2(5)} = 0.6.$$

Then

$$\omega_d = \omega_n\sqrt{1-\zeta^2} = 5\sqrt{1-0.36} = 5(0.8) = 4\ \text{rad/s},$$
$$M_p = e^{-\pi\zeta/\sqrt{1-\zeta^2}} = e^{-\pi(0.6)/0.8} = e^{-2.3562} = 0.0948 \Rightarrow 9.5\ \text{percent},$$
$$t_p = \frac{\pi}{\omega_d} = \frac{\pi}{4} = 0.785\ \text{s}, \qquad t_s \approx \frac{4}{\zeta\omega_n} = \frac{4}{3} = 1.333\ \text{s}.$$

*Check.* Factor the denominator directly: roots are $s = \dfrac{-6 \pm \sqrt{36-100}}{2} = -3 \pm j4$. So the real part is $-\zeta\omega_n = -3$ ✓ and the imaginary part is $\omega_d = 4$ ✓, with $|s| = \sqrt{9+16} = 5 = \omega_n$ ✓ and $\zeta = 3/5 = 0.6$ ✓. Everything is the 3-4-5 triangle.

*Comparison.* Quarter-amplitude decay corresponds to $\zeta \approx 0.215$ and about 50 percent overshoot. This loop sits at $\zeta = 0.6$ with under 10 percent overshoot — **substantially more conservative than Ziegler–Nichols**, and right in the range most specs actually ask for. It is roughly where you'd land after detuning a Z-N starting point.

</details>

## Connections

- **Backward:** the entire bridge in this lesson is [2.4](02-04-stability-routh-hurwitz.md)'s critical gain and auxiliary polynomial, plus [3.1](03-01-root-locus-construction.md)'s $j\omega$ crossing, re-labelled as $K_u$ and $\omega_c = 2\pi/P_u$. The reaction-curve fit is [2.1](02-01-first-order-response.md)'s tangent trick for extracting $\tau$, applied at the inflection point instead of the origin. The verification step is [3.4](03-04-gain-and-phase-margins.md)'s phase margin and [2.2](02-02-second-order-response.md)'s $\zeta \to M_p$ formula. The controller structure itself is [4.1](04-01-pid-control.md).
- **Forward:** when detuning a PID still can't meet both a margin spec and an error spec, you need to reshape the loop rather than rescale it — that is [4.3](04-03-lead-lag-compensators.md), where you place the compensator pole and zero deliberately instead of accepting the double zero at $-4/P_u$. [3.2](03-02-root-locus-design.md)'s dominant-pole placement is the model-based alternative to every table here. And any of these gains, once implemented on a microcontroller, becomes a difference equation with a sample period — [5.5](05-05-digital-control.md), where a sample time comparable to $P_u/10$ starts eating your phase margin.
- **Sideways:** "poke the system and fit two parameters" is system identification in miniature — the same step-response reading used for RC transients in [`circuits` 3.2](../../circuits/lessons/03-02-first-order-rc-rl-transients.md), and the same fit-a-model-to-data instinct as least squares in [`linalg-refresher` 4.2](../../linalg-refresher/lessons/04-02-projection-least-squares.md). The sustained-oscillation condition is a marginally stable pole pair on the imaginary axis — the boundary case of the phase-portrait classification in [`ode-refresher` 3.2](../../ode-refresher/lessons/03-02-phase-portraits-stability.md), where a center sits between a stable and an unstable spiral.
