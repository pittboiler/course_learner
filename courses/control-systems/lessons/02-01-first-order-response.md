# Control Systems · Lesson 2.1: First-order response

> ⏱ ~15 min · Module 2: Time response & stability · Builds on: [1.3 The Laplace transform toolkit](01-03-laplace-transform-toolkit.md), [1.4 Transfer functions, poles & zeros](01-04-transfer-functions-poles-zeros.md), [1.5 Block-diagram algebra](01-05-block-diagram-algebra.md) · Unlocks: [2.2 Second-order response](02-02-second-order-response.md), [2.3 Steady-state error](02-03-steady-state-error-system-type.md)

## Why this matters

Module 1 gave you a machine for turning hardware into $G(s)$. Now we cash it in. This is the first lesson where you look at a transfer function and *say what the thing does in time* — how fast, how far, when it's done — without solving a differential equation, without a simulation, without a lab bench.

First order is the place to learn that reflex, because a first-order system has exactly **one** pole, and therefore exactly one number to know. Everything else in this course — overshoot, margins, root loci, PID tuning — is decoration on the idea you meet here: **the pole location is the behavior, and moving the pole is the design.** By the end of this lesson you will have moved one, with feedback, and seen the price.

## The idea

A first-order system is anything that *fills up*, or *coasts down*, with no wiggle. A capacitor charging through a resistor. A room warming toward the thermostat's setpoint. A motor's speed climbing after you apply voltage. All three have the same shape of story: the further you are from where you're headed, the harder the system pulls toward it — so it moves fast at first and lazily at the end, approaching the target but (in theory) never quite arriving.

That story is governed by one quantity, the **time constant** $\tau$: the natural clock of the system, in seconds. Everything about the response is measured in units of $\tau$. Not "the response takes 3 seconds" but "the response takes about 4 clock-ticks, and this system's tick is 0.75 s."

And here's the hinge for the rest of the course. That clock lives at a specific spot on the s-plane: the system's single pole sits at $s = -1/\tau$. A pole far to the left means a tiny $\tau$ — a fast tick. A pole hugging the imaginary axis means a huge $\tau$ — a sluggish system that takes forever. So:

> **For a first-order system, the pole location is the entire story.** There is nothing else to know.

## The formal version

**Canonical form.** Every first-order system with no zero can be written

$$\boxed{\;G(s) = \frac{K}{\tau s + 1}\;}$$

where $K$ is the **DC gain** (dimensionless, or output-units per input-unit) and $\tau > 0$ is the **time constant** (seconds). *In words: $K$ says how far the output eventually goes for a unit input, and $\tau$ says how long it takes to get there.*

Two readings of the same object:

- $K = G(0)$ — set $s = 0$ (a constant input, zero frequency) and read the gain, as in [1.4](01-04-transfer-functions-poles-zeros.md).
- The single **pole** is where $\tau s + 1 = 0$, i.e. $s = -1/\tau$. Equivalently $\tau = 1/|\sigma|$ where $\sigma$ is the pole's real part.

**Step response.** Apply a unit step $r(t) = u(t)$, so $R(s) = 1/s$. Then $Y(s) = G(s)R(s)$, and partial fractions ([1.3](01-03-laplace-transform-toolkit.md)) does the rest:

$$Y(s) = \frac{K}{(\tau s + 1)s} = \frac{K}{s} - \frac{K\tau}{\tau s + 1} = \frac{K}{s} - \frac{K}{s + 1/\tau}.$$

*(Check the middle step by recombining: $\frac{K(\tau s+1) - K\tau s}{(\tau s+1)s} = \frac{K}{(\tau s+1)s}$. ✓)* Inverting term by term with the pairs $1/s \leftrightarrow u(t)$ and $1/(s+a) \leftrightarrow e^{-at}u(t)$:

$$\boxed{\;y(t) = K\left(1 - e^{-t/\tau}\right), \quad t \ge 0.\;}$$

*In words: the output starts at zero and closes the remaining gap to $K$ exponentially, shrinking the gap by a factor $e$ every $\tau$ seconds.*

Now read off every spec you will ever be asked for.

**The 63.2 percent mark.** At $t = \tau$, $y = K(1 - e^{-1}) = K(1 - 0.36788) = 0.63212K$. So $\tau$ is *defined by* the instant the response first hits 63.2 percent of its final value. This is the number to memorize.

**The initial tangent.** Differentiate: $\dot y(t) = \frac{K}{\tau}e^{-t/\tau}$, so the slope at the origin is $\dot y(0) = K/\tau$. The tangent line is $y = (K/\tau)t$, which equals $K$ exactly when $t = \tau$. *In words: draw the tangent at the start of a recorded step response and extend it until it hits the final value — the horizontal distance is $\tau$.* That is a genuinely useful graphical trick, and it's the fastest way to eyeball $\tau$ off an oscilloscope trace.

**Settling time.** The response is "done" when it's inside a tolerance band around $K$. **Throughout this course we use the 2 percent convention.** Solve $e^{-t/\tau} = 0.02$: $t = \tau\ln 50 = 3.912\tau$, so

$$t_s \approx 4\tau \qquad (2\text{ percent}).$$

Verify by going the other way: $e^{-4} = 0.018316$, so at $t = 4\tau$ the response has reached 98.17 percent — just inside the band. (The other common convention is 5 percent, giving $t_s = \tau\ln 20 = 2.996\tau \approx 3\tau$. Always state which you're using; a "settling time" with no tolerance attached is meaningless.)

**Rise time.** The 10–90 percent rise time. From $1 - e^{-t/\tau} = 0.1$ we get $t_{10} = \tau\ln(10/9)$; from $= 0.9$ we get $t_{90} = \tau\ln 10$. Subtracting,

$$t_r = \tau\left(\ln 10 - \ln\tfrac{10}{9}\right) = \tau\ln 9 = 2.197\tau \approx 2.20\tau.$$

**The table to know cold.** Percent of final value reached at each tick, $100(1-e^{-n})$:

| $t$ | $\tau$ | $2\tau$ | $3\tau$ | $4\tau$ | $5\tau$ |
|---|---|---|---|---|---|
| percent complete | 63.2 | 86.5 | 95.0 | 98.2 | 99.3 |

Verified: $1-e^{-1}=0.63212$, $1-e^{-2}=0.86466$, $1-e^{-3}=0.95021$, $1-e^{-4}=0.98168$, $1-e^{-5}=0.99326$. Note there is **no overshoot** — $y(t)$ climbs monotonically. A first-order system cannot overshoot, ever; that requires the complex pole pair of [2.2](02-02-second-order-response.md).

**Impulse response.** With $R(s)=1$, $Y(s) = G(s) = \frac{K}{\tau s+1} = \frac{K/\tau}{s+1/\tau}$, so

$$h(t) = \frac{K}{\tau}e^{-t/\tau}, \quad t \ge 0.$$

*In words: a kick produces an instant jump to $K/\tau$ followed by pure exponential decay.* The two responses are linked by calculus, not coincidence: since a step is the integral of an impulse and the system is LTI, the step response is the integral of the impulse response —

$$\int_0^t \frac{K}{\tau}e^{-\lambda/\tau}\,d\lambda = K\left[-e^{-\lambda/\tau}\right]_0^t = K\left(1 - e^{-t/\tau}\right).$$

Which is the step response exactly. ✓ That "integrate the input, integrate the output" property is the convolution machinery from [`signals-systems` 1.4](../../signals-systems/lessons/01-04-convolution-continuous-time.md); we use the result and defer the proof there.

**Pole location $\leftrightarrow$ speed.** The pole sits at $\sigma = -1/\tau$, so $|\sigma| = 1/\tau$: **distance from the imaginary axis is speed.** Double $|\sigma|$ and you halve $\tau$, halve the rise time, halve the settling time — the whole response replays at double speed. This is your first instance of the sentence the rest of the course is built on: *move the pole, change the behavior*. Right now you can only observe where the pole is. In [3.2](03-02-root-locus-design.md) and [5.4](05-04-pole-placement-observers.md) you will put it where you want it.

**Identifying $\tau$ from measured data.** This is the practically important skill, and it needs no model at all — just a recorded step response:

1. Read the **final value** $y_\infty$ and the step size $\Delta r$. Then $K = y_\infty/\Delta r$.
2. Find where the trace crosses $0.632\,y_\infty$. The time from the step's start to that crossing is $\tau$.
3. Sanity-check with the tangent trick, or with the 95 percent point at $3\tau$.

You now have $G(s) = K/(\tau s + 1)$ for a piece of hardware whose physics you never wrote down. That is exactly the premise of the **Ziegler–Nichols reaction-curve** (open-loop) tuning method in [4.2](04-02-tuning-pid.md): bump the plant, fit a first-order-plus-delay model off the chart, and read PID gains from a table.

## Picture

![Unit step response of a first-order system, with the time constant tau, the 63.2 percent crossing, the tangent at the origin hitting the final value at t = tau, and the plus-or-minus 2 percent settling band at 4 tau all marked; an s-plane inset shows the single pole at −1/τ with an arrow indicating that farther left is faster](assets/02-01-fig1.svg)

## Worked examples

**Example 1 (read every spec off the form).** $G(s) = \dfrac{10}{2s+1}$, unit step input.

Match the canonical form: $K = 10$, $\tau = 2$ s, pole at $s = -0.5$. Then

- final value $y_\infty = K = 10$;
- $y(2\ \text{s}) = 10(0.632) = 6.32$;
- $t_s \approx 4\tau = 8$ s (2 percent), i.e. $y(8) = 9.82$;
- $t_r = 2.197 \times 2 = 4.39$ s;
- impulse response $h(t) = 5e^{-t/2}$, starting at $K/\tau = 5$.

Same system in disguise: $G(s) = \dfrac{5}{s+0.5}$. Do **not** read $K = 5$. Force the "+1": divide top and bottom by $0.5$ to get $\dfrac{10}{2s+1}$. Or just evaluate $G(0) = 5/0.5 = 10$. ✓ The pole was already visible at $-0.5$, and $\tau = 1/0.5 = 2$ s, consistent.

**Example 2 (closing the loop makes it faster — and slightly wrong).** Here is the calculation that makes this a control lesson rather than a math one.

Take a thermal plant $G(s) = \dfrac{2}{5s+1}$: $K = 2$ °C per percent-of-heater, $\tau = 5$ s. Left alone it settles in $t_s \approx 20$ s. Too slow. Wrap it in unity feedback with a proportional controller $G_c(s) = K_c$ ([1.5](01-05-block-diagram-algebra.md)):

$$T(s) = \frac{G_cG}{1+G_cG} = \frac{\dfrac{K_cK}{\tau s+1}}{1+\dfrac{K_cK}{\tau s+1}} = \frac{K_cK}{\tau s + 1 + K_cK}.$$

Divide top and bottom by $(1+K_cK)$ to force the canonical form:

$$\boxed{\;T(s) = \frac{\dfrac{K_cK}{1+K_cK}}{\dfrac{\tau}{1+K_cK}\,s + 1}\;}\qquad
\tau_{\text{cl}} = \frac{\tau}{1+K_cK}, \qquad K_{\text{cl}} = \frac{K_cK}{1+K_cK}.$$

*In words: proportional feedback divides the time constant by $1+K_cK$ and multiplies the DC gain by $\frac{K_cK}{1+K_cK}$, a number just under 1.* On the s-plane, the pole slid from $-1/\tau$ to $-(1+K_cK)/\tau$ — left, and therefore faster. **You moved a pole with a knob.**

Numbers with $K_c = 4$, so $K_cK = 8$:

$$\tau_{\text{cl}} = \frac{5}{9} = 0.556\ \text{s}, \qquad t_{s,\text{cl}} \approx 4(0.556) = 2.22\ \text{s}, \qquad K_{\text{cl}} = \frac{8}{9} = 0.889.$$

A **9× speedup**: 20 s down to 2.2 s. But look at the DC gain. Command a 1 °C rise and you get 0.889 °C — a permanent **steady-state error** of $1 - \frac{8}{9} = \frac{1}{9} = 11.1$ percent, sitting there forever. Cranking $K_c$ higher shrinks it ($K_c = 40$ gives 1.2 percent) but never kills it, and on a real plant with more poles the high gain will start to ring or go unstable.

That trade — **feedback buys speed and pays in accuracy** — is the central tension of the next two lessons. [2.3](02-03-steady-state-error-system-type.md) makes the error a formula you can compute in advance, and integral action in [4.1](04-01-pid-control.md) drives it to exactly zero by adding a pole at the origin, so the loop refuses to stop pushing while any error remains.

**Where first-order systems actually come from** (one line each):

- **RC circuit:** $V_{\text{out}}/V_{\text{in}} = 1/(RCs+1)$, so $K=1$, $\tau = RC$ — see [`circuits` 3.2](../../circuits/lessons/03-02-first-order-rc-rl-transients.md).
- **Thermal mass:** heat capacity $C_{th}$ leaking through thermal resistance $R_{th}$ gives $\tau = R_{th}C_{th}$ — a well-insulated oven has a big $\tau$.
- **DC motor speed vs. voltage:** rotor inertia $J$ against viscous friction $b$ gives $\tau = J/b$ (ignoring the fast electrical pole) — heavy rotor, slow spin-up.

## Watch out

- **You might think the numerator constant is the DC gain.** Only if the denominator is written with a "+1". For $G(s) = 5/(s+0.5)$ the DC gain is $G(0) = 10$, not 5. Normalize to $K/(\tau s + 1)$, or just evaluate at $s=0$ — the second is foolproof.
- **You might think $\tau$ is "how long it takes."** It's how long it takes to get 63 percent of the way, which is barely past halfway. The response is not done until roughly $4\tau$. Quoting $\tau$ as a settling time understates the wait by a factor of four.
- **You might think a first-order system can overshoot if you push it hard enough.** It cannot. $y(t) = K(1-e^{-t/\tau})$ is monotone for every $K$ and every $\tau > 0$ — one real pole gives one decaying exponential and nothing to oscillate against. If your data overshoots, your model has more than one pole, or a zero. (A first-order system *with* a zero, $K(as+1)/(\tau s+1)$, can jump instantly and even undershoot — the zero is not covered here.)
- **You might think a bigger $K_c$ is free speed.** It isn't. The closed-loop DC gain $\frac{K_cK}{1+K_cK}$ approaches 1 only in the limit, so error never vanishes from proportional control alone, and real plants stop being first-order long before $K_c$ gets large.

## One-liner

> A first-order system is one pole at $s = -1/\tau$: it hits 63.2 percent at $\tau$, 98 percent at $4\tau$, never overshoots — and proportional feedback drags that pole left, dividing $\tau$ by $1+K_cK$ at the cost of a $\frac{1}{1+K_cK}$ steady-state error.

## Problems

**P1 (🟢)** For $G(s) = \dfrac{3}{0.4s+1}$ driven by a unit step: give (a) the final value, (b) the time constant and the output value at that instant, (c) the 2 percent settling time, (d) the 10–90 percent rise time, (e) the output at $t = 0.8$ s.

**P2 (🟡)** You step a motor's armature voltage by 2 V and record the speed. It settles at 120 rad/s, and passes 75.9 rad/s at $t = 0.35$ s after the step. Find $K$ and $\tau$, write $G(s)$, locate the pole, and give the 2 percent settling time. Which tuning method uses exactly this procedure?

**P3 (🔴)** A plant is $G(s) = \dfrac{4}{s+0.5}$, placed in unity feedback with proportional gain $K_c$. (a) Put $G$ in canonical form and give $K$, $\tau$, and the open-loop pole. (b) Find the $K_c$ that makes the closed-loop time constant 0.25 s. (c) With that $K_c$, give the closed-loop DC gain, the steady-state error for a unit-step reference, and the closed-loop pole location. (d) How much faster is the closed loop than the plant?

<details>
<summary>Solutions</summary>

**P1** Canonical form already: $K = 3$, $\tau = 0.4$ s.

(a) $y_\infty = K = 3$.

(b) $\tau = 0.4$ s; $y(0.4) = 3(1-e^{-1}) = 3(0.632121) = 1.896$.

(c) $t_s \approx 4\tau = 4(0.4) = 1.6$ s. *(Exact: $\tau\ln 50 = 0.4 \times 3.912 = 1.565$ s — the $4\tau$ rule is the usual slightly-conservative rounding.)*

(d) $t_r = \tau\ln 9 = 0.4 \times 2.1972 = 0.879$ s.

(e) $t = 0.8$ s $= 2\tau$, so from the table $y = 3(0.864665) = 2.594$.

*Check.* Direct substitution at (e): $3(1 - e^{-0.8/0.4}) = 3(1-e^{-2}) = 3(1-0.135335) = 2.594$ ✓. Ordering sanity: $t_r < t_s$ and $y(\tau) < y(2\tau) < y_\infty$ ✓. Pole is at $s = -1/0.4 = -2.5$, consistent with $\tau = 0.4$ ✓.

**P2** Step size $\Delta r = 2$ V, final output $y_\infty = 120$ rad/s.

*DC gain:* $K = y_\infty/\Delta r = 120/2 = 60$ rad/s per volt.

*Time constant:* 63.2 percent of the final value is $0.63212 \times 120 = 75.85 \approx 75.9$ rad/s — which is the recorded crossing. So $\tau = 0.35$ s.

$$G(s) = \frac{60}{0.35s+1}, \qquad \text{pole at } s = -\frac{1}{0.35} = -2.857, \qquad t_s \approx 4(0.35) = 1.4\ \text{s}.$$

This "step the plant, read $K$ and $\tau$ off the chart" procedure is the **Ziegler–Nichols reaction-curve (open-loop) method**, covered in [4.2](04-02-tuning-pid.md).

*Check.* Equivalent unnormalized form: $60/(0.35s+1) = 171.4/(s+2.857)$, and $G(0) = 171.4/2.857 = 60$ ✓. Predicted 95 percent point: $3\tau = 1.05$ s at $0.95 \times 120 = 114$ rad/s — a second point you could verify against the same trace ✓.

**P3** (a) Force the "+1" by dividing top and bottom by 0.5:

$$G(s) = \frac{4}{s+0.5} = \frac{4/0.5}{(s+0.5)/0.5} = \frac{8}{2s+1}.$$

So $K = 8$, $\tau = 2$ s, open-loop pole at $s = -0.5$. *(Confirm: $G(0) = 4/0.5 = 8$ ✓.)*

(b) From the closed-loop formula, $\tau_{\text{cl}} = \dfrac{\tau}{1+K_cK}$:

$$0.25 = \frac{2}{1+8K_c} \;\Longrightarrow\; 1+8K_c = \frac{2}{0.25} = 8 \;\Longrightarrow\; K_c = \frac{7}{8} = 0.875.$$

(c) With $K_cK = 0.875 \times 8 = 7$:

$$K_{\text{cl}} = \frac{K_cK}{1+K_cK} = \frac{7}{8} = 0.875, \qquad e_{ss} = 1 - 0.875 = 0.125 \;(12.5\text{ percent}),$$

and the closed-loop pole is at $s = -1/\tau_{\text{cl}} = -4$.

(d) $\tau$ went from 2 s to 0.25 s, so the closed loop is **8× faster** ($t_s$: 8 s down to 1 s) — exactly the factor $1+K_cK = 8$.

*Check.* Build $T(s)$ from scratch: $G_cG = \dfrac{0.875 \times 8}{2s+1} = \dfrac{7}{2s+1}$, so

$$T(s) = \frac{7/(2s+1)}{1 + 7/(2s+1)} = \frac{7}{2s+8} = \frac{0.875}{0.25s+1}.$$

Read off $K_{\text{cl}} = 0.875$ and $\tau_{\text{cl}} = 0.25$ s ✓, pole at $2s+8=0 \Rightarrow s = -4$ ✓ — which is $8 \times 0.5$, the open-loop pole pushed left by the same factor $1+K_cK$. Note the speedup factor and the error factor are the *same* number wearing two hats: $\frac{1}{1+K_cK} = \frac18 = 0.125$ ✓.

</details>

## Flashback

**From Lesson 1.2 (Modeling systems as ODEs):** A 4 kg block slides on a surface with viscous friction, so the drag force is $b\dot x$ with $b = 0.8$ N·s/m. There is no spring. The input is an applied force $f(t)$ (N) and the output is the block's **velocity** $v = \dot x$ (m/s). Write the governing ODE, derive $G(s) = V(s)/F(s)$, put it in first-order canonical form, and give $K$, $\tau$, and the pole.

<details>
<summary>Solution</summary>

Newton's second law on the block, with drag opposing motion:

$$m\dot v = f - bv \;\Longrightarrow\; m\dot v + bv = f, \qquad 4\dot v + 0.8v = f.$$

Note this is **first order in $v$** even though the position equation would be second order — choosing velocity as the output drops the integrator, and the missing spring means there is no restoring term. Transform with zero initial conditions ($d/dt \to s$, from [1.3](01-03-laplace-transform-toolkit.md)):

$$(4s + 0.8)V(s) = F(s) \;\Longrightarrow\; G(s) = \frac{V(s)}{F(s)} = \frac{1}{4s+0.8}.$$

Force the "+1" by dividing top and bottom by 0.8:

$$G(s) = \frac{1/0.8}{(4/0.8)s + 1} = \frac{1.25}{5s+1}.$$

So $K = 1.25$ (m/s per N), $\tau = m/b = 4/0.8 = 5$ s, and the pole is at $s = -1/5 = -0.2$.

*Check.* $G(0) = 1/0.8 = 1.25$ ✓. Physical sanity on $K$: at steady state the block stops accelerating, so $f = bv$, giving $v = f/b = f/0.8 = 1.25f$ ✓ — the DC gain is just "force divided by drag coefficient." Physical sanity on $\tau = m/b$: a heavier block takes longer to reach terminal speed, a stickier surface gets there sooner ✓. Units: $\mathrm{kg}/(\mathrm{N\,s/m}) = \mathrm{kg}/(\mathrm{kg\,s^{-1}}) = \mathrm{s}$ ✓. Push a 1 N force and the block reaches 63.2 percent of its 1.25 m/s terminal speed, i.e. 0.79 m/s, after 5 s.

</details>

## Connections

- **Backward:** the partial-fraction inversion is [1.3](01-03-laplace-transform-toolkit.md) applied to the simplest possible case; $K = G(0)$ is the DC gain from [1.4](01-04-transfer-functions-poles-zeros.md); the closed-loop formula $T = G_cG/(1+G_cG)$ is straight out of [1.5](01-05-block-diagram-algebra.md). The plants themselves came from the modeling in [1.2](01-02-modeling-systems-as-odes.md).
- **Forward:** [2.2](02-02-second-order-response.md) adds a second pole, and the single real pole becomes a complex pair — $\tau$ splits into $\zeta$ and $\omega_n$, and overshoot appears. The steady-state error you just watched refuse to go away is quantified in [2.3](02-03-steady-state-error-system-type.md) and eliminated by integral action in [4.1](04-01-pid-control.md). The "read $K$ and $\tau$ off a step chart" recipe *is* the reaction-curve method of [4.2](04-02-tuning-pid.md). And "slide the pole left with a gain" is the one-pole preview of the root locus in [3.1](03-01-root-locus-construction.md).
- **Sideways:** the same exponential is the RC transient in [`circuits` 3.2](../../circuits/lessons/03-02-first-order-rc-rl-transients.md), the linear first-order ODE of [`ode-refresher` 1.2](../../ode-refresher/lessons/01-02-separable-and-linear-first-order.md), and the growth/decay models in [`ode-refresher` 1.3](../../ode-refresher/lessons/01-03-first-order-models.md). The step-is-the-integral-of-the-impulse relation is the convolution property from [`signals-systems` 1.4](../../signals-systems/lessons/01-04-convolution-continuous-time.md).
