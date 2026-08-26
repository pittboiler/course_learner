# Control Systems · Lesson 3.4: Gain & phase margins

> ⏱ ~15 min · Module 3: Root locus & frequency response · Builds on: [3.3 Frequency response & Bode plots](03-03-frequency-response-bode-plots.md), [2.4 Stability & Routh–Hurwitz](02-04-stability-routh-hurwitz.md) · Unlocks: [3.5 The Nyquist criterion](03-05-nyquist-criterion.md), [4.3 Lead & lag compensators](04-03-lead-lag-compensators.md)

## Why this matters

Routh–Hurwitz gives you a yes/no: stable, or not. That is a terrible answer for a real machine. Your model has the wrong mass, the amplifier gain drifts with temperature, the sensor takes 40 ms to report, and there are resonances above 200 Hz you never modeled. "Stable" for the equations on paper is not stable for the thing on the bench.

Margins fix this. From **one measurement you can actually make on hardware** — sweep a sine into the loop, record magnitude and phase — you read off two numbers that say *how much wrongness this design tolerates before it oscillates*. And, remarkably, those same two numbers predict the closed-loop **time response** you'll see: damping, ringing, settling time. That is the payoff of this lesson: a frequency-domain measurement that tells you the time-domain future.

## The idea

Everything here is distance from a single point: $-1$.

Recall the unity-feedback closed loop from [1.5](01-05-block-diagram-algebra.md), with open-loop transfer function $L(s) = G_c(s)G(s)H(s)$:

$$T(s) = \frac{G_cG}{1+L(s)}, \qquad \text{characteristic equation } \; 1 + L(s) = 0.$$

Closed-loop poles are the roots of $1+L(s)=0$, i.e. the places where $L(s) = -1$. A pole sitting exactly on the imaginary axis, $s = j\omega$, means a mode that rings forever — the brink. So:

> The loop is on the brink of instability when $L(j\omega) = -1$ for some real $\omega$.

Now unpack what $L(j\omega) = -1$ *means* as a pair of conditions on the Bode plot you drew in [3.3](03-03-frequency-response-bode-plots.md). The complex number $-1$ has magnitude $1$ and angle $-180^\circ$. So instability needs **both**, **at the same frequency**:

- $|L(j\omega)| = 1$, i.e. $0\ \text{dB}$ — the signal comes back around the loop *the same size*, and
- $\angle L(j\omega) = -180^\circ$ — it comes back *exactly inverted*, which the negative-feedback summing junction inverts again into perfect reinforcement.

Picture the physical loop: a wiggle at frequency $\omega$ goes around, gets flipped by $180^\circ$ of lag, gets flipped again by the minus sign at the summer, and arrives back in phase with itself. If it also came back at full size, it sustains itself with no input. That is the oscillation.

The escape hatch is that the two conditions usually happen at **different frequencies**. At the frequency where the size is right, the phase is wrong; at the frequency where the phase is right, the size is too small. Margins measure exactly those two gaps. **Phase margin** is the phase gap, measured where the gain is 1. **Gain margin** is the gain gap, measured where the phase is $-180^\circ$.

## The formal version

Two frequencies, defined by one condition each.

**Gain crossover frequency $\omega_{gc}$** (rad/s): the frequency where $|L(j\omega_{gc})| = 1$ ($0\ \text{dB}$). *In words: where the loop returns a signal at its original size.*

**Phase crossover frequency $\omega_{pc}$** (rad/s): the frequency where $\angle L(j\omega_{pc}) = -180^\circ$. *In words: where the loop returns a signal exactly inverted.*

Now the two margins — **note carefully which crossover each one lives at.**

$$\boxed{\;\text{PM} = 180^\circ + \angle L(j\omega_{gc}), \qquad \text{GM} = \frac{1}{|L(j\omega_{pc})|}\;}$$

and in decibels $\ \text{GM}_{\text{dB}} = -20\log_{10}|L(j\omega_{pc})|$.

*In words (PM): at the frequency where the gain is already dangerous, how many more degrees of lag could you add before the phase becomes dangerous too?* An extra $\text{PM}$ degrees of lag at $\omega_{gc}$ would put you exactly at $-1$.

*In words (GM): at the frequency where the phase is already dangerous, by what factor could you crank the gain up before the magnitude becomes dangerous too?* Multiplying $L$ by $\text{GM}$ raises $|L(j\omega_{pc})|$ to exactly $1$, landing on $-1$.

Both are **positive = good**. $\text{PM} = 50^\circ$ means you have $50^\circ$ of phase to burn. $\text{GM} = 12\ \text{dB}$ means gain can rise by a factor of $10^{12/20} \approx 4$ before trouble. A **negative** margin means you have already passed the critical point: the closed loop is unstable. (For an open-loop-stable $L$ with a single crossover of each type — the caveat at the end of this lesson.)

**How to read them off the plot.** These are literally ruler operations on the two stacked Bode axes, which share a frequency axis:

- **Phase margin:** find where the magnitude curve cuts the $0\ \text{dB}$ line. Drop straight down to the phase curve. Measure *up* from the $-180^\circ$ line to the curve. That vertical height is PM.
- **Gain margin:** find where the phase curve cuts the $-180^\circ$ line. Go straight up to the magnitude curve. Measure *down* from the $0\ \text{dB}$ line to the curve. That vertical drop, in dB, is GM.

Two crossings, two drops, two rulers — and you never solved a polynomial.

## Picture

![Stacked Bode magnitude and phase plots for L = 12/(s(s+2)(s+4)), with dashed verticals at the gain crossover 1.22 rad/s and the phase crossover 2.83 rad/s; a coral double arrow shows the phase margin of 41.5 degrees measured up from minus 180 degrees at the gain crossover, and another shows the gain margin of 12.0 dB measured down from 0 dB at the phase crossover](assets/03-04-fig1.svg)

## What the numbers mean in practice

This is the engineering judgment the lesson exists to deliver.

**Target band.** Most classical designs aim for $\text{PM}$ between $30^\circ$ and $60^\circ$, with $45^\circ\!-\!60^\circ$ the sweet spot: well damped, quick, not twitchy. Below about $30^\circ$ the step response rings badly and the loop becomes hypersensitive to everything; near $0^\circ$ it is nominally stable and practically useless. Gain margins of $6\!-\!12\ \text{dB}$ (a factor of 2 to 4) are typical targets.

**PM predicts damping.** For a system whose closed loop is dominated by a second-order pair with damping ratio $\zeta$ ([2.2](02-02-second-order-response.md)), the exact relation for the prototype loop $L = \omega_n^2/\big(s(s+2\zeta\omega_n)\big)$ is

$$\text{PM} = \arctan\!\left(\frac{2\zeta}{\sqrt{\sqrt{1+4\zeta^4}\;-\;2\zeta^2}}\right),$$

which is monotone and nearly straight for $\text{PM} \lesssim 70^\circ$. Hence the rule every control engineer carries:

$$\boxed{\;\zeta \;\approx\; \frac{\text{PM in degrees}}{100}\;}$$

*Check it.* At $\zeta = 0.5$ the exact formula gives $\text{PM} = 51.83^\circ$, so the rule returns $\zeta \approx 0.518$ against a true $0.5$ — about $4\%$ high. At $\zeta = 0.3$: exact $\text{PM} = 33.27^\circ$, rule gives $0.333$. At $\zeta = 0.7$: exact $\text{PM} = 65.16^\circ$, rule gives $0.652$. Good to roughly $10\%$ across the useful range, and it degrades above $70^\circ$. It is an approximation, and it is only as good as the "dominant second-order pair" assumption behind it.

**$\omega_{gc}$ predicts speed.** The closed-loop bandwidth satisfies $\omega_{BW} \approx \omega_{gc}$, reliably within a factor of about 2 ($\omega_{gc} \le \omega_{BW} \le 2\omega_{gc}$ for typical loops). And for the prototype above, solving $|L(j\omega_{gc})|=1$ gives $\omega_{gc} = \omega_n\sqrt{\sqrt{1+4\zeta^4}-2\zeta^2}$, which at $\zeta \approx 0.5$ is $\omega_{gc} \approx 0.79\,\omega_n$, i.e. $\omega_n \approx 1.27\,\omega_{gc}$. Chain that into the 2% settling-time estimate from [2.2](02-02-second-order-response.md), $t_s \approx 4/(\zeta\omega_n)$:

$$t_s \;\approx\; \frac{4}{\zeta\,\omega_n} \;\approx\; \frac{4}{(0.5)(1.27\,\omega_{gc})} \;\approx\; \frac{6.3}{\omega_{gc}} \quad \text{(at } \text{PM}\approx 50^\circ\text{)}.$$

So: **PM sets the shape of the response, $\omega_{gc}$ sets its timescale.** Push $\omega_{gc}$ right and everything gets faster; that is the entire purpose of the lead compensator in [4.3](04-03-lead-lag-compensators.md).

**Delay margin — the most practical margin of all.** A pure transport delay $T$ (seconds) multiplies the loop by $e^{-j\omega T}$: magnitude exactly $1$ at every frequency, phase $-\omega T$ radians. So a delay costs you *phase and nothing else* — and phase is precisely what PM budgets. Since $|L|$ is unchanged, $\omega_{gc}$ doesn't move, and the loop survives as long as the delay's lag at $\omega_{gc}$ stays under PM:

$$\boxed{\;T_{\max} = \frac{\text{PM in radians}}{\omega_{gc}}\;}$$

Work a number: a loop with $\text{PM} = 45^\circ = 0.785$ rad and $\omega_{gc} = 1$ rad/s tolerates $T_{\max} = 0.785$ s of delay. Halve the PM to $22.5^\circ$ and you halve the tolerance. This is the number to quote when someone proposes running your controller over a network, or at a sample rate you didn't choose ([5.5](05-05-digital-control.md)).

## Worked examples

**Example 1 — design a gain for a phase-margin spec (boss problem 4(a)).** Plant $G(s) = \dfrac{1}{s(s+1)}$ in unity feedback with proportional gain $K$, so $L(s) = \dfrac{K}{s(s+1)}$. Find $K$ giving $\text{PM} = 45^\circ$.

The key move: **phase does not depend on $K$.** A constant gain shifts the magnitude curve up or down and leaves phase untouched. So find the frequency where the phase is right, *then* set $K$ to put crossover there.

$$\angle L(j\omega) = \underbrace{-90^\circ}_{\text{from }j\omega} - \arctan(\omega).$$

We need $\text{PM} = 180^\circ + \angle L(j\omega_{gc}) = 45^\circ$, i.e. $\angle L(j\omega_{gc}) = -135^\circ$:

$$-90^\circ - \arctan(\omega_{gc}) = -135^\circ \;\Longrightarrow\; \arctan(\omega_{gc}) = 45^\circ \;\Longrightarrow\; \omega_{gc} = \tan 45^\circ = 1\ \text{rad/s}.$$

Now force $|L(j1)| = 1$. With $|j\cdot 1| = 1$ and $|j\cdot 1 + 1| = \sqrt{1^2+1^2} = \sqrt2$:

$$|L(j1)| = \frac{K}{1\cdot\sqrt2} = 1 \;\Longrightarrow\; \boxed{K = \sqrt2 \approx 1.414}, \qquad \omega_{gc} = 1\ \text{rad/s}.$$

*Verify.* $L(j1) = \dfrac{\sqrt2}{j(1+j)} = \dfrac{\sqrt2}{-1+j}$. Magnitude $= \sqrt2/\sqrt2 = 1$. Angle $= 0 - \angle(-1+j) = -135^\circ$ (second quadrant, $135^\circ$). PM $= 180 - 135 = 45^\circ$. Correct.

**The instructive special case:** what is the gain margin here? $\angle L = -90^\circ - \arctan\omega$ approaches $-180^\circ$ only as $\omega \to \infty$ — it never *reaches* it at any finite frequency. There is no $\omega_{pc}$, so **the gain margin is infinite**: no amount of proportional gain destabilizes this loop. (Check against [2.4](02-04-stability-routh-hurwitz.md): the closed-loop characteristic polynomial is $s^2+s+K$, whose Routh array is stable for every $K>0$. Agreed.) Infinite GM does not mean a good design — crank $K$ up and PM collapses toward $0^\circ$, giving a violently ringing loop. **A big gain margin can coexist with a terrible phase margin.**

Sanity-check the time prediction: $\zeta \approx 45/100 = 0.45$. Exactly, $L = \sqrt2/(s(s+1))$ gives closed loop $s^2+s+\sqrt2$, so $\omega_n = 2^{1/4} = 1.189$ and $2\zeta\omega_n = 1 \Rightarrow \zeta = 0.420$. Rule says $0.45$, truth is $0.42$. And delay margin: $T_{\max} = (\pi/4)/1 = 0.785$ s.

**Example 2 — a gain margin from a known critical gain (boss problem 3).** $L(s) = \dfrac{K}{s(s+2)(s+4)}$. From the Routh array in [2.4](02-04-stability-routh-hurwitz.md) and the $j\omega$-crossing in [3.1](03-01-root-locus-construction.md), the locus crosses the imaginary axis at $K_{\text{crit}} = 48$, with oscillation frequency $\omega = 2\sqrt2 \approx 2.83$ rad/s. Set $K = 12$, one quarter of critical. What is the gain margin?

Two ways, and they must agree.

*Way 1 — by definition.* The critical gain is exactly the gain that puts $|L(j\omega_{pc})| = 1$, so at $K=12$ the magnitude there is $12/48 = 1/4$, and

$$\text{GM} = \frac{K_{\text{crit}}}{K} = \frac{48}{12} = 4 \;\Longrightarrow\; \text{GM}_{\text{dB}} = 20\log_{10}4 = \boxed{12.04\ \text{dB}}.$$

*Way 2 — from the frequency response, to check.* First confirm $\omega_{pc} = 2\sqrt2$:

$$\angle L(j\omega) = -90^\circ - \arctan\tfrac{\omega}{2} - \arctan\tfrac{\omega}{4}
\;\Big|_{\omega = 2\sqrt2}\; = -90^\circ - \arctan(1.4142) - \arctan(0.7071)$$
$$= -90^\circ - 54.74^\circ - 35.26^\circ = -180.00^\circ. \;\text{Correct.}$$

(Those two arctangents summing to exactly $90^\circ$ is not luck: $\arctan a + \arctan(1/(2a))$ with $a=\sqrt2$ — the arguments $1.4142$ and $0.7071$ are reciprocals, and $\arctan x + \arctan(1/x) = 90^\circ$.) Then the magnitude, with $|j\omega| = 2\sqrt2$, $|j\omega+2| = \sqrt{8+4} = \sqrt{12}$, $|j\omega+4| = \sqrt{8+16} = \sqrt{24}$:

$$|L(j\omega_{pc})| = \frac{12}{2\sqrt2 \cdot \sqrt{12}\cdot\sqrt{24}} = \frac{12}{\sqrt{8\cdot 12\cdot 24}} = \frac{12}{\sqrt{2304}} = \frac{12}{48} = 0.25,$$

so $\text{GM} = 1/0.25 = 4 = 12.04\ \text{dB}$. Both routes agree.

*And the phase margin.* Solving $|L(j\omega)| = 1$ numerically gives $\omega_{gc} = 1.224$ rad/s, where

$$\angle L = -90^\circ - \arctan(0.6118) - \arctan(0.3059) = -90^\circ - 31.46^\circ - 17.01^\circ = -138.47^\circ,$$

so $\text{PM} = 41.5^\circ$. These are the numbers marked in the figure. Predictions: $\zeta \approx 0.415$, and delay margin $T_{\max} = 0.7248/1.224 = 0.59$ s.

*Honest reality check.* The true closed-loop poles of $s^3+6s^2+8s+12$ are $-4.862$ and $-0.569 \pm 1.464j$, giving a dominant pair with $\zeta = 0.362$, $\omega_n = 1.571$, and $t_s = 4/(0.569) = 7.0$ s. The rule predicted $\zeta \approx 0.415$ and $t_s \approx 6.3/1.224 \approx 5.1$ s. Right ballpark, not exact — because the third pole at $-4.86$ is only about 8.5 times further out than the dominant pair's real part, so this loop is not purely second order. That gap *is* the approximation, and knowing it exists is part of using the rule honestly.

## Watch out

- **You might read both margins at the same frequency.** This is the classic error and it is worth over-drilling: PM lives at $\omega_{gc}$ (where the *magnitude* crosses $0\ \text{dB}$), GM lives at $\omega_{pc}$ (where the *phase* crosses $-180^\circ$). Mnemonic: **each margin is measured at the crossover named for the *other* quantity.** You measure the phase gap at the gain crossover, and the gain gap at the phase crossover.
- **You might think a good gain margin means a good design.** Example 1 has *infinite* GM and can still be made to ring horribly by raising $K$. In practice PM is the more informative of the two, because it is what unmodeled lag — delays, extra poles, sensor filters — eats into. Quote both.
- **You might think GM in dB and PM in degrees are interchangeable "safety numbers."** They protect against different errors: GM against a scale error in the loop gain, PM against a *timing* error. A design can be robust to one and fragile to the other.
- **You might forget PM is in radians for the delay formula.** $T_{\max} = \text{PM}/\omega_{gc}$ requires $\text{PM}$ in radians. Multiply degrees by $\pi/180$ first, or your delay budget is off by a factor of 57.

## Where margins lie to you

Everything above assumed the magnitude crosses $0\ \text{dB}$ once and the phase crosses $-180^\circ$ once. When a loop has **multiple crossovers**, or is **conditionally stable** (stable at the design gain but unstable if the gain is *lowered*), the single-number margins can report comfortable values for a loop that is one small perturbation from disaster. The reliable arbiter is the full picture of how $L(j\omega)$ wraps around the point $-1$ — the **Nyquist criterion**, which is [3.5](03-05-nyquist-criterion.md)'s entire job. Margins are the two easiest measurements you can extract from that picture; Nyquist is the picture.

## One-liner

> The enemy is $L(j\omega) = -1$; phase margin is how many degrees of lag you have left at the $0\ \text{dB}$ crossover, gain margin is how many dB of gain you have left at the $-180^\circ$ crossover, and $\zeta \approx \text{PM}/100$ turns that into the ringing you'll actually see.

## Problems

**P1 (🟢)** A measured loop has $|L| = 1$ at $\omega = 4$ rad/s, where $\angle L = -145^\circ$; and $\angle L = -180^\circ$ at $\omega = 9$ rad/s, where $|L| = -14\ \text{dB}$. Give the phase margin, the gain margin (as a dB value *and* as a plain factor), the estimated damping ratio, and the delay margin.

**P2 (🟡)** Plant $G(s) = \dfrac{1}{s(s+2)}$ with proportional gain $K$ in unity feedback. Find $K$ for a phase margin of exactly $50^\circ$, report $\omega_{gc}$, and state the gain margin.

**P3 (🔴)** The loop you designed in P2 is moved onto a digital controller that introduces $0.15$ s of transport delay. Does it stay stable, and what is the new phase margin? What delay would destabilize it?

<details>
<summary>Solutions</summary>

**P1** Everything is a direct application of the definitions — the point is picking the right frequency for each.

*Phase margin*, at the **gain** crossover $\omega_{gc} = 4$ rad/s (that's where $|L|=1$):

$$\text{PM} = 180^\circ + (-145^\circ) = 35^\circ.$$

*Gain margin*, at the **phase** crossover $\omega_{pc} = 9$ rad/s (that's where $\angle L = -180^\circ$). The magnitude sits $14\ \text{dB}$ *below* $0\ \text{dB}$, so there is $14\ \text{dB}$ of room:

$$\text{GM}_{\text{dB}} = -20\log_{10}|L(j\omega_{pc})| = -(-14) = 14\ \text{dB}, \qquad \text{GM} = 10^{14/20} = 5.01.$$

So the gain can rise by a factor of about 5 before instability.

*Damping estimate:* $\zeta \approx \text{PM}/100 = 35/100 = 0.35$ — moderately underdamped, expect noticeable overshoot (roughly 30 percent for a clean second-order pair).

*Delay margin:* convert PM to radians first, $35^\circ \times \pi/180 = 0.6109$ rad, then

$$T_{\max} = \frac{0.6109}{4} = 0.153\ \text{s}.$$

*Check.* Both margins are positive and PM sits inside the usual $30^\circ\!-\!60^\circ$ band, GM inside the usual $6\!-\!12\ \text{dB}$ band — a plausible working design. Sanity on the delay: $0.153$ s of delay at $4$ rad/s contributes $4 \times 0.153 = 0.611$ rad $= 35^\circ$ of lag, exactly consuming the phase margin. Correct.

**P2** $L(s) = \dfrac{K}{s(s+2)}$. Phase is independent of $K$, so locate the frequency first.

$$\angle L(j\omega) = -90^\circ - \arctan\!\frac{\omega}{2}.$$

$\text{PM}=50^\circ$ requires $\angle L(j\omega_{gc}) = -130^\circ$:

$$-90^\circ - \arctan\frac{\omega_{gc}}{2} = -130^\circ \;\Longrightarrow\; \arctan\frac{\omega_{gc}}{2} = 40^\circ \;\Longrightarrow\; \omega_{gc} = 2\tan 40^\circ = 2(0.8391) = 1.678\ \text{rad/s}.$$

Now set $|L(j\omega_{gc})| = 1$. With $|j\omega_{gc}| = 1.678$ and $|j\omega_{gc}+2| = \sqrt{1.678^2 + 2^2} = \sqrt{2.816+4} = \sqrt{6.816} = 2.611$:

$$K = \omega_{gc}\sqrt{\omega_{gc}^2+4} = 1.678 \times 2.611 = 4.38.$$

**$K \approx 4.38$, $\omega_{gc} = 1.678$ rad/s.**

*Gain margin:* $\angle L = -90^\circ - \arctan(\omega/2) \to -180^\circ$ only as $\omega \to \infty$, so there is no finite phase crossover: **$\text{GM} = \infty$.** (Consistent with Routh: the closed loop is $s^2+2s+K$, stable for all $K>0$.)

*Check.* $\zeta$ exactly: closed loop $s^2+2s+4.38$ gives $\omega_n = \sqrt{4.38} = 2.093$ and $2\zeta\omega_n = 2 \Rightarrow \zeta = 0.478$. The rule $\zeta \approx \text{PM}/100 = 0.50$ lands within 5 percent — and here it *should* be tight, because this closed loop really is exactly second order. Correct.

**P3** A transport delay $T$ multiplies the loop by $e^{-j\omega T}$, which has magnitude exactly $1$ at every frequency. So the magnitude plot — and therefore $\omega_{gc} = 1.678$ rad/s — is **unchanged**. Only phase moves, by $-\omega T$ radians:

$$\Delta\phi = -\omega_{gc}T = -(1.678)(0.15) = -0.2517\ \text{rad} = -14.42^\circ.$$

New phase margin:

$$\text{PM}_{\text{new}} = 50^\circ - 14.42^\circ = 35.6^\circ.$$

Positive, so **yes, it stays stable** — but the design has moved from comfortable to merely acceptable, with $\zeta$ dropping from about $0.50$ to about $0.36$ and visibly more overshoot.

Destabilizing delay: consume the *original* $50^\circ$ entirely.

$$T_{\max} = \frac{\text{PM in radians}}{\omega_{gc}} = \frac{50 \times \pi/180}{1.678} = \frac{0.8727}{1.678} = 0.520\ \text{s}.$$

Any delay beyond about $0.52$ s makes this loop unstable.

*Check.* The proposed $0.15$ s is $29$ percent of the $0.520$ s budget, and it consumed $14.42^\circ$ of $50^\circ$ — also $29$ percent. The two agree because delay-induced lag is exactly linear in $T$ at fixed $\omega_{gc}$. Correct.

</details>

## Flashback

**From Lesson 2.4 (Stability & Routh–Hurwitz):** A unity-feedback loop has forward path $G(s) = \dfrac{K}{s(s+1)(s+2)}$. Use the Routh array to find the full range of $K$ for which the closed loop is stable, and the frequency at which it oscillates at the upper limit. (Fresh variant — different pole locations from the $s(s+2)(s+4)$ system used in this lesson.)

<details>
<summary>Solution</summary>

Closed-loop characteristic equation, $1 + G(s) = 0$:

$$s(s+1)(s+2) + K = 0 \;\Longrightarrow\; s^3 + 3s^2 + 2s + K = 0.$$

Routh array:

$$\begin{array}{c|cc}
s^3 & 1 & 2 \\
s^2 & 3 & K \\
s^1 & \dfrac{3\cdot 2 - 1\cdot K}{3} = \dfrac{6-K}{3} & 0 \\
s^0 & K &
\end{array}$$

All first-column entries must be positive: $\dfrac{6-K}{3} > 0 \Rightarrow K < 6$, and $K > 0$. So

$$\boxed{0 < K < 6.}$$

At the upper limit $K = 6$ the $s^1$ row vanishes; form the auxiliary polynomial from the row above, $3s^2 + K = 3s^2 + 6 = 0 \Rightarrow s^2 = -2 \Rightarrow s = \pm j\sqrt2$. The oscillation frequency is $\omega = \sqrt2 \approx 1.41$ rad/s.

*Check, using this lesson.* The critical point must also be where $\angle L = -180^\circ$:

$$-90^\circ - \arctan\sqrt2 - \arctan\frac{\sqrt2}{2} = -90^\circ - 54.74^\circ - 35.26^\circ = -180^\circ. \;\text{Correct.}$$

And the magnitude there should be exactly 1 at $K=6$: $|j\sqrt2| = 1.414$, $|j\sqrt2+1| = \sqrt{3} = 1.732$, $|j\sqrt2+2| = \sqrt{6} = 2.449$, product $= 1.414 \times 1.732 \times 2.449 = 6.00$, so $|L| = 6/6 = 1$. Correct — Routh and the frequency response agree, which is the whole point of this lesson.

</details>

## Connections

- **Backward:** the two crossover frequencies are read straight off the asymptotic Bode construction of [3.3](03-03-frequency-response-bode-plots.md), and the critical gain a margin measures is the same $K$ the Routh array flags in [2.4](02-04-stability-routh-hurwitz.md) and the imaginary-axis crossing of the root locus in [3.1](03-01-root-locus-construction.md). Three methods, one number — Example 2 checks all three against each other. The $\zeta \to M_p, t_s$ translation is [2.2](02-02-second-order-response.md).
- **Forward:** [3.5](03-05-nyquist-criterion.md) replaces these two scalar gaps with the full geometry of $L(j\omega)$ relative to $-1$, and handles the cases where margins mislead. Then [4.3](04-03-lead-lag-compensators.md) is *margin surgery*: a lead network injects phase right at $\omega_{gc}$ to buy PM, a lag network raises low-frequency gain for steady-state error ([2.3](02-03-steady-state-error-system-type.md)) while pulling $\omega_{gc}$ down to protect PM. Boss problem 4(b) is exactly that trade.
- **Sideways:** $L(j\omega)$ is the loop's frequency response, the same eigenfunction idea as [`signals-systems` 2.1](../../signals-systems/lessons/02-01-eigenfunctions-frequency-response.md) — a sinusoid in gives a sinusoid out, scaled and shifted. Control adds the twist that the sinusoid comes back around and meets itself. The delay margin is the design-time reason sample rate matters in [5.5](05-05-digital-control.md): a zero-order hold costs roughly half a sample period of lag, straight out of your phase budget.
