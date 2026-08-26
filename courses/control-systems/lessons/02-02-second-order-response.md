# Control Systems · Lesson 2.2: Second-order response

> ⏱ ~15 min · Module 2: Time response & stability · Builds on: [2.1 First-order response](02-01-first-order-response.md), [1.4 Transfer functions, poles & zeros](01-04-transfer-functions-poles-zeros.md), [`ode-refresher` 2.2](../../ode-refresher/lessons/02-02-oscillations-damping.md) · Unlocks: [2.3](02-03-steady-state-error-system-type.md), [3.2 Root-locus design](03-02-root-locus-design.md), [4.2](04-02-tuning-pid.md)

## Why this matters

This is the lesson you will use more than any other in this course. A customer never says "put the poles at $-1 \pm j1.73$." They say **"no more than 10 percent overshoot, settled within 4 seconds."** The formulas below are the dictionary between those two languages — and they run in both directions, which is what makes *design* possible instead of just analysis.

Every later design lesson is this dictionary plus one graphical tool: root-locus design ([3.2](03-02-root-locus-design.md)) draws the spec region and finds where the locus enters it; PID tuning ([4.2](04-02-tuning-pid.md)) turns knobs until $\zeta$ and $\omega_n$ land where these formulas say; pole placement ([5.4](05-04-pole-placement-observers.md)) solves for the gain that puts the poles exactly there. Learn this once, properly, and the rest of the course is bookkeeping.

## The idea

[2.1](02-01-first-order-response.md) had one pole, so it had one behavior: a lazy exponential crawl to the final value, no drama. Two poles give the system something new — it can **store energy in two places** (a spring *and* a mass; a capacitor *and* an inductor) and slosh it back and forth. That sloshing is overshoot.

So a second-order system has exactly two independent questions to answer, and it turns out you can ask them in a way that separates cleanly:

1. **How fast is the thing intrinsically?** That's $\omega_n$ — a pure speed dial. Double $\omega_n$ and the *entire* response replays at double speed: same shape, half the time on every axis.
2. **How much does it slosh?** That's $\zeta$ — a pure *shape* dial, dimensionless, with no units to trip over. It alone decides overshoot.

That split is the whole lesson. **$\zeta$ owns the shape; $\omega_n$ owns the clock.** Percent overshoot depends on $\zeta$ and nothing else — not on $\omega_n$, not on the gain, not on the DC value. Settling time and peak time depend on both, in the simplest possible way: they're a shape-number divided by $\omega_n$.

And here's the payoff that makes Module 3 work. Those two dials are **coordinates in the s-plane** — not Cartesian ones, but polar ones. $\omega_n$ is the pole's distance from the origin; $\zeta$ is the cosine of its angle. So "overshoot under 10 percent" is not an abstract constraint: it is a literal **wedge** on a piece of paper, and you design by putting a pole inside it.

## The formal version

### Canonical form

Any second-order system with no zeros and unity DC gain can be written

$$\boxed{\;G(s) = \frac{\omega_n^2}{s^2 + 2\zeta\omega_n s + \omega_n^2}\;}$$

- $\omega_n > 0$ — the **natural frequency**, in rad/s. The frequency the system would ring at with all damping removed.
- $\zeta \ge 0$ — the **damping ratio**, *dimensionless*. Actual damping divided by the damping that would just barely stop oscillation.

*In words: two numbers — a speed and a sloshiness — pin down the whole system.* The $\omega_n^2$ on top is not decoration: it forces $G(0) = 1$, so the step response settles at exactly 1 and "percent overshoot" is measured against a clean final value.

Setting the denominator to zero (the characteristic equation) and using the quadratic formula:

$$s = \frac{-2\zeta\omega_n \pm \sqrt{4\zeta^2\omega_n^2 - 4\omega_n^2}}{2} = -\zeta\omega_n \pm \omega_n\sqrt{\zeta^2-1}.$$

For $0 < \zeta < 1$ the square root is imaginary and this becomes the form you will use constantly:

$$\boxed{\;s = -\zeta\omega_n \pm j\,\omega_n\sqrt{1-\zeta^2} \;=\; -\sigma \pm j\omega_d\;}$$

with $\sigma = \zeta\omega_n$ (the **decay rate**, 1/s) and $\omega_d = \omega_n\sqrt{1-\zeta^2}$ (the **damped frequency**, rad/s — the frequency you actually see it ring at, always slower than $\omega_n$). *In words: the real part sets how fast the wobble dies, the imaginary part sets how fast it wobbles.*

Note $\sigma^2 + \omega_d^2 = \zeta^2\omega_n^2 + \omega_n^2(1-\zeta^2) = \omega_n^2$ — remember this, it's the whole geometry in one line.

### The four regimes

Same $\omega_n$, four values of $\zeta$, four completely different personalities:

| $\zeta$ | Poles | Behavior | Name |
|---|---|---|---|
| $\zeta = 0$ | $\pm j\omega_n$, **on** the $j\omega$ axis | rings forever, never settles | **undamped** |
| $0<\zeta<1$ | $-\sigma \pm j\omega_d$, complex pair | overshoots, then decaying oscillation | **underdamped** |
| $\zeta = 1$ | $-\omega_n$, **repeated** real | fastest possible with *zero* overshoot | **critically damped** |
| $\zeta > 1$ | two distinct real poles | no overshoot, sluggish | **overdamped** |

This is the same trichotomy as the discriminant of the characteristic polynomial in [`ode-refresher` 2.2](../../ode-refresher/lessons/02-02-oscillations-damping.md), and the same pole-position-to-waveform reading as [`signals-systems` 2.5](../../signals-systems/lessons/02-05-transfer-functions-poles-zeros.md) — here it just has an engineering job.

Two facts worth internalizing:

- **Overdamped is not "safe," it's slow.** As $\zeta$ grows past 1 the poles split, one racing left and the other creeping toward the origin — and that slow one dominates. An overdamped system is really a first-order system in disguise, with a *worse* time constant than critical damping would give.
- **Control almost always lives in $0.4 < \zeta < 0.8$.** Below that it rings too much; above it you're paying a big speed penalty to buy an overshoot reduction you didn't need. $\zeta = 0.707$ is the classic default.

### The spec formulas

These are the payload. Assume $0 < \zeta < 1$ and a unit step. The response is

$$y(t) = 1 - \frac{e^{-\zeta\omega_n t}}{\sqrt{1-\zeta^2}}\,\sin\!\big(\omega_d t + \beta\big), \qquad \beta = \arccos\zeta .$$

*In words: the final value 1, minus a sinusoid at $\omega_d$ inside a decaying envelope $e^{-\sigma t}$.* Every formula below is read off this one expression.

**Peak time $t_p$.** Differentiate: the algebra collapses to $\dot y(t) = \dfrac{\omega_n}{\sqrt{1-\zeta^2}}e^{-\zeta\omega_n t}\sin(\omega_d t)$, which first vanishes at $\omega_d t = \pi$:

$$t_p = \frac{\pi}{\omega_d}.$$

*In words: the peak happens half a damped period after the step.*

**Percent overshoot $M_p$.** Evaluate $y$ at $t_p$. Since $\sin(\pi + \beta) = -\sin\beta$ and $\sin\beta = \sqrt{1-\zeta^2}$, the messy prefactor cancels exactly and only the envelope survives:

$$\boxed{\;M_p = e^{-\zeta\pi/\sqrt{1-\zeta^2}} \times 100\,\%\;}$$

*In words: overshoot depends on $\zeta$ alone — $\omega_n$ has cancelled out completely.* Speeding a system up does not make it overshoot more.

| $\zeta$ | 0.1 | 0.2 | 0.3 | 0.4 | 0.5 | 0.6 | 0.7 | **0.707** | 0.8 | 0.9 |
|---|---|---|---|---|---|---|---|---|---|---|
| $M_p$ | 72.9\% | 52.7\% | 37.2\% | 25.4\% | **16.3\%** | **9.5\%** | 4.6\% | **4.3\%** | 1.5\% | 0.15\% |

Memorize three of these: $\zeta = 0.5 \to 16.3\,\%$, $\zeta = 0.6 \to 9.5\,\%$, $\zeta = 0.707 \to 4.3\,\%$. Those three anchor almost every design problem you'll meet.

**The inverse — the one you actually need for design.** Specs come as overshoot, so you need $\zeta$ from $M_p$. Write $M_p$ as a **fraction** (0.163, not 16.3), take logs of $M_p = e^{-\zeta\pi/\sqrt{1-\zeta^2}}$, and solve:

$$\ln M_p = \frac{-\zeta\pi}{\sqrt{1-\zeta^2}} \;\Longrightarrow\; \ln^2 M_p\,(1-\zeta^2) = \zeta^2\pi^2 \;\Longrightarrow\; \boxed{\;\zeta = \frac{-\ln M_p}{\sqrt{\pi^2 + \ln^2 M_p}}\;}$$

*In words: turn an overshoot percentage into the damping ratio that produces it.*

*Round-trip check at $\zeta = 0.5$.* Forward: $M_p = e^{-0.5\pi/\sqrt{0.75}} = e^{-1.8138} = 0.16303$. Back: $\ln(0.16303) = -1.8138$, so $\zeta = 1.8138/\sqrt{9.8696 + 3.2899} = 1.8138/\sqrt{13.1595} = 1.8138/3.6276 = 0.5000$. ✓

Three design thresholds worth keeping:

$$M_p \le 20\,\% \Rightarrow \zeta \ge 0.456, \qquad M_p \le 10\,\% \Rightarrow \zeta \ge 0.591, \qquad M_p \le 5\,\% \Rightarrow \zeta \ge 0.690.$$

**Settling time $t_s$ (2 percent convention).** The oscillation is trapped inside the envelope $e^{-\sigma t}/\sqrt{1-\zeta^2}$. Ignore the $1/\sqrt{1-\zeta^2}$ (it's near 1 for useful $\zeta$) and ask when the envelope reaches 2 percent: $e^{-\sigma t_s} = 0.02 \Rightarrow \sigma t_s = \ln 50 = 3.912 \approx 4$.

$$\boxed{\;t_s \approx \frac{4}{\zeta\omega_n} = \frac{4}{\sigma}\;}$$

*In words: settling time is set by the real part of the pole — and by nothing else.* This is the most useful single fact in the lesson. **$\omega_d$ does not appear.** Two systems with wildly different ringing frequencies settle at the same time if their poles sit on the same vertical line. Consequence: **vertical lines in the s-plane are constant-settling-time lines**, and "settle faster" means one thing only — *move the pole left.*

(Other books use 1 percent, $t_s \approx 4.6/\sigma$, or 5 percent, $t_s \approx 3/\sigma$. State your convention; this course uses 2 percent throughout.)

**Rise time $t_r$.** For an underdamped system the response actually *reaches* 1, so the natural definition is 0 to 100 percent: set $y = 1$, which needs $\sin(\omega_d t_r + \beta) = 0$, i.e. $\omega_d t_r + \beta = \pi$:

$$t_r = \frac{\pi - \beta}{\omega_d}, \qquad \beta = \arccos\zeta \ \text{(rad)}.$$

*In words: the response crosses its final value a fraction $(\pi-\beta)/\pi$ of the way to the peak.*

**This is a genuine source of confusion, so be explicit.** Many texts (Franklin/Powell, most Bode-based design) instead use **10-to-90 percent** rise time, for which there is no closed form, only the fit

$$t_r \approx \frac{1.8}{\omega_n} \quad (\text{10--90\% convention, good to about } 10\,\% \text{ for } 0.3 \lesssim \zeta \lesssim 0.8).$$

The two are *not* the same number. At $\zeta = 0.5, \omega_n = 1$: the 0–100 formula gives $2.418$ s while the true 10–90 rise time is $1.637$ s and the fit predicts $1.8$ s. **This course quotes $t_r = (\pi-\beta)/\omega_d$ (0–100 percent)** and will say so whenever it matters. When you read a spec sheet, check which one it means before you design to it.

### The s-plane design geometry

Now the idea that turns all of this into a drawing. Put the pole $-\sigma + j\omega_d$ on the plane and look at it in **polar** coordinates about the origin:

- **Radius** $= \sqrt{\sigma^2 + \omega_d^2} = \omega_n$.
- **Angle** $\beta$ measured from the *negative* real axis: $\cos\beta = \sigma/\omega_n = \zeta\omega_n/\omega_n$, so

$$\boxed{\;\zeta = \cos\beta\;}$$

*In words: the damping ratio is literally the cosine of the pole's angle off the negative real axis.* On the negative real axis $\beta = 0^\circ$, $\zeta = 1$ (critical). On the $j\omega$ axis $\beta = 90^\circ$, $\zeta = 0$ (undamped). Everything useful is in between.

Four families of curves, one spec each:

| Locus in the s-plane | Constant | Therefore constant |
|---|---|---|
| **Ray** from the origin at angle $\beta$ | $\zeta = \cos\beta$ | **overshoot** $M_p$ |
| **Vertical** line $\mathrm{Re}(s) = -\sigma$ | $\sigma$ | **settling time** $t_s = 4/\sigma$ |
| **Horizontal** line $\mathrm{Im}(s) = \omega_d$ | $\omega_d$ | **peak time** $t_p = \pi/\omega_d$ |
| **Circle** of radius $\omega_n$ | $\omega_n$ | natural frequency / bandwidth |

A specification is an **intersection of half-planes and wedges**. "$M_p \le 10\,\%$ and $t_s \le 2$ s" becomes: inside the wedge $\beta \le 53.8^\circ$ (from $\zeta \ge 0.591$) **and** left of the line $\sigma = 4/2 = 2$. Shade both, and any pole in the overlap meets the spec — you no longer have to solve anything, you just have to *hit a region*.

That is exactly the picture [3.2 Root-locus design](03-02-root-locus-design.md) opens with: draw the region, draw the locus of where the closed-loop poles can go as gain varies, and read the gain off the point where the two meet.

### Dominant poles: why any of this applies to real systems

Real plants are third-, fifth-, tenth-order. The second-order formulas still get used — under one condition.

**The dominant-pole approximation.** If a system has a complex pair at $-\sigma \pm j\omega_d$ and *every* other pole is at least about **5 times farther left** (real part more negative than $5\sigma$), and there is no zero nearby, then the pair **dominates**: treat the system as second-order with that pair's $\zeta$ and $\omega_n$. The reason is [2.1](02-01-first-order-response.md)'s — a pole at $-p$ contributes a mode $e^{-pt}$, so one 5 times farther left decays 5 times faster and is gone before the dominant pair finishes its first swing (and its residue is small, so it barely registers even at $t=0$).

**It is an approximation, and it is honest about its error.** Two things break it:

1. **A nearby zero.** A zero close to the dominant pair adds a derivative-like kick that *increases* overshoot, often dramatically, while the poles haven't moved at all. Example: the second-order system with poles $-1 \pm j1.73$ overshoots 16.3 percent; add a zero at $-3$ and it jumps to 21.7 percent; move the zero to $-1.5$ and it hits 41.3 percent. The pole formulas see none of this.
2. **A third pole that isn't far enough.** At 10 times farther left the error is small; at 5 times it's noticeable; at 2 times the approximation is simply wrong. For a dominant pair with $\sigma = 1$ (predicting 16.3 percent), a third pole at $-10$ gives an actual 15.9 percent, at $-5$ gives 14.8 percent, and at $-2$ gives **8.1 percent** — a third pole that close acts like a lag filter and *suppresses* the overshoot.

Use dominance to get a design started, then verify. That verify-with-a-simulation step is not optional in practice.

## Picture

![Left: unit-step responses for damping ratios 0.2, 0.5, 0.707, 1 and 2 at natural frequency 1 rad/s, with percent overshoot and 2-percent settling time marked on the 0.5 curve. Right: the s-plane, showing a complex pole pair with its constant-damping ray, constant-decay vertical line, the angle beta off the negative real axis, and the natural-frequency radius.](assets/02-02-fig1.svg)

Panel (a) is the shape dial: same $\omega_n$, five values of $\zeta$, everything from a 52.7 percent ring down to a lethargic overdamped crawl. Panel (b) is the same information as geometry — and it is the panel worth memorizing, because it is the one you will *draw* from Module 3 onward.

## Worked examples

**Example 1 — poles to specs (the analysis direction).** A closed loop has poles at $s = -3 \pm j4$ and unity DC gain. Characterize it.

Read off $\sigma = 3$, $\omega_d = 4$. Then

$$\omega_n = \sqrt{3^2 + 4^2} = 5\ \text{rad/s}, \qquad \zeta = \frac{\sigma}{\omega_n} = \frac{3}{5} = 0.6, \qquad \beta = \arccos 0.6 = 53.13^\circ.$$

(A 3-4-5 triangle — this is why textbook problems love these poles.) Now the specs:

$$M_p = e^{-0.6\pi/\sqrt{1-0.36}}\times 100\,\% = e^{-1.885/0.8}\times 100\,\% = e^{-2.356}\times100\,\% = 9.5\,\%,$$

$$t_s = \frac{4}{\sigma} = \frac{4}{3} = 1.33\ \text{s}, \qquad t_p = \frac{\pi}{\omega_d} = \frac{\pi}{4} = 0.785\ \text{s}, \qquad t_r = \frac{\pi - 0.9273}{4} = 0.554\ \text{s}.$$

*Check.* $\zeta = 0.6$ hits the tabulated 9.5 percent. ✓ And $t_p > t_r$, $t_s > t_p$ — the ordering any real response must satisfy. ✓ The transfer function itself is $G(s) = 25/(s^2+6s+25)$, since $2\zeta\omega_n = 6$ and $\omega_n^2 = 25$.

**Example 2 — Boss problem 2(a): specs to gain (the design direction).** A unity-feedback loop has forward path $G(s) = \dfrac{K}{s(s+2)}$. Find $K$ giving $\zeta = 0.5$, and report the resulting overshoot and 2 percent settling time.

*Step 1 — close the loop.* Using the unity-feedback formula from [1.5](01-05-block-diagram-algebra.md):

$$T(s) = \frac{G}{1+G} = \frac{K/[s(s+2)]}{1 + K/[s(s+2)]} = \frac{K}{s(s+2)+K} = \frac{K}{s^2 + 2s + K}.$$

*Step 2 — match the canonical form.* Compare $s^2 + 2s + K$ with $s^2 + 2\zeta\omega_n s + \omega_n^2$ term by term:

$$\omega_n^2 = K \;\Rightarrow\; \omega_n = \sqrt{K}, \qquad 2\zeta\omega_n = 2 \;\Rightarrow\; \zeta = \frac{1}{\omega_n} = \frac{1}{\sqrt K}.$$

Notice the structure: **the damping constant $2$ came from the plant and cannot be changed by $K$**, so raising the gain raises $\omega_n$ and *lowers* $\zeta$. Speed and damping are coupled — one knob, two specs. That tension is the reason compensators exist ([4.3](04-03-lead-lag-compensators.md)).

*Step 3 — impose the spec.* $\zeta = 0.5$ needs $\sqrt K = 1/0.5 = 2$, so

$$\omega_n = 2\ \text{rad/s}, \qquad \boxed{K = 4}.$$

*Step 4 — the resulting response.* $\sigma = \zeta\omega_n = 0.5 \times 2 = 1$ and $\omega_d = 2\sqrt{1-0.25} = \sqrt 3 = 1.732$ rad/s, so the closed-loop poles are $s = -1 \pm j1.732$. Then

$$M_p = 16.3\,\% \ (\text{from } \zeta = 0.5), \qquad t_s = \frac{4}{\sigma} = \frac{4}{1} = 4\ \text{s}, \qquad t_p = \frac{\pi}{1.732} = 1.81\ \text{s}.$$

*Check.* Factor $s^2+2s+4$ directly: $s = \frac{-2 \pm \sqrt{4-16}}{2} = -1 \pm j\sqrt3$ ✓ — matches Step 4. Numerically integrating the step response of $4/(s^2+2s+4)$ gives a peak of $1.1630$ at $t = 1.814$ s and a final entry into the $\pm 2$ percent band at $t = 4.04$ s, against predictions of $1.163$, $1.814$ s, and $4.0$ s. ✓ (The settling prediction runs about 1 percent optimistic, as expected from dropping the $1/\sqrt{1-\zeta^2}$ factor.)

## Watch out

- **You might think a bigger $\omega_n$ means more overshoot.** It doesn't — $\omega_n$ cancels out of $M_p$ entirely. Raising $\omega_n$ at fixed $\zeta$ compresses the *time* axis (smaller $t_p$, smaller $t_s$) and leaves the *shape* untouched. What actually causes the coupling you see in practice is that turning up a gain usually raises $\omega_n$ **and** drops $\zeta$ at the same time, as Example 2 shows.
- **You might use $\omega_n$ where $\omega_d$ belongs.** The system rings at $\omega_d = \omega_n\sqrt{1-\zeta^2}$, not at $\omega_n$. At $\zeta = 0.6$ that's a 20 percent error; at $\zeta = 0.9$ it's a factor of 2.3. Rule: $\omega_n$ appears in $M_p$ and in $t_s = 4/(\zeta\omega_n)$; $\omega_d$ appears in $t_p$ and $t_r$.
- **You might feed a percentage into the inverse formula.** $\zeta = -\ln M_p/\sqrt{\pi^2+\ln^2 M_p}$ needs $M_p$ as a **fraction**. Passing 16.3 instead of 0.163 makes $\ln M_p$ positive and returns a *negative* $\zeta$ — an unstable system. If your $\zeta$ comes out negative, this is why.
- **You might apply these formulas to a system with a zero.** They are derived for $\omega_n^2/(s^2+2\zeta\omega_n s+\omega_n^2)$ — numerator constant. A zero changes overshoot without moving a single pole. Check the numerator before you trust the answer.

## One-liner

> $\zeta$ sets the shape and $\omega_n$ sets the clock: overshoot is $e^{-\zeta\pi/\sqrt{1-\zeta^2}}$ and nothing else, settling is $4/\sigma$ and nothing else — and in the s-plane those are a ray and a vertical line you can draw.

## Problems

**P1 (🟢)** A closed-loop system has $T(s) = \dfrac{20}{s^2+4s+20}$. Find $\zeta$, $\omega_n$, the pole locations, the percent overshoot, the 2 percent settling time, and the peak time.

**P2 (🟡)** A design must satisfy $M_p \le 5\,\%$ and $t_s \le 2$ s (2 percent). (a) Translate each spec into a constraint on the s-plane and state the allowed region in words. (b) Show that the pole pair $s = -2 \pm j2$ lies in the region, and give its actual $M_p$, $t_s$, and $\omega_n$.

**P3 (🔴)** A third-order closed loop is $T(s) = \dfrac{40}{(s+10)(s^2+2s+4)}$. (a) Verify the DC gain is 1. (b) Identify the dominant pair and check the 5× rule. (c) Predict $M_p$, $t_p$, and $t_s$ from the second-order formulas. (d) The true values are $M_p = 15.9\,\%$, $t_p = 1.92$ s, $t_s = 4.13$ s. Comment on the direction of each error, and say what would happen to your prediction's accuracy if the third pole moved from $-10$ to $-2$.

<details>
<summary>Solutions</summary>

**P1** Match $s^2+4s+20$ against $s^2 + 2\zeta\omega_n s + \omega_n^2$:

$$\omega_n^2 = 20 \Rightarrow \omega_n = \sqrt{20} = 4.472\ \text{rad/s}, \qquad 2\zeta\omega_n = 4 \Rightarrow \zeta = \frac{2}{4.472} = 0.4472.$$

Poles: $\sigma = \zeta\omega_n = 2$ and $\omega_d = \omega_n\sqrt{1-\zeta^2} = 4.472\sqrt{1-0.2} = 4.472 \times 0.8944 = 4$, so

$$s = -2 \pm j4.$$

(Confirm with the quadratic formula: $s = \frac{-4 \pm \sqrt{16-80}}{2} = \frac{-4 \pm j8}{2} = -2 \pm j4$ ✓.) Specs:

$$M_p = e^{-0.4472\pi/\sqrt{0.8}}\times100\,\% = e^{-1.4050/0.8944}\times100\,\% = e^{-1.5708}\times100\,\% = 20.8\,\%,$$

$$t_s = \frac{4}{\sigma} = \frac{4}{2} = 2\ \text{s}, \qquad t_p = \frac{\pi}{\omega_d} = \frac{\pi}{4} = 0.785\ \text{s}.$$

*Check.* $\zeta = 0.447$ sits between the table's 0.4 (25.4 percent) and 0.5 (16.3 percent), and 20.8 percent is between them. ✓ Also $\sigma^2+\omega_d^2 = 4+16 = 20 = \omega_n^2$ ✓. The angle is $\beta = \arccos 0.4472 = 63.4^\circ$ — a fairly lively design.

**P2** **(a)** Overshoot fixes the *angle*; settling fixes the *real part*.

$M_p \le 5\,\% = 0.05$: with $\ln 0.05 = -2.9957$,

$$\zeta \ge \frac{2.9957}{\sqrt{\pi^2 + 2.9957^2}} = \frac{2.9957}{\sqrt{9.8696+8.9743}} = \frac{2.9957}{4.3410} = 0.690.$$

Since $\zeta = \cos\beta$, this is $\beta \le \arccos 0.690 = 46.4^\circ$ — the poles must lie inside a **wedge** of half-angle $46.4^\circ$ about the negative real axis.

$t_s \le 2$ s: $t_s = 4/\sigma \le 2 \Rightarrow \sigma \ge 2$ — the poles must lie **at or to the left of the vertical line $\mathrm{Re}(s) = -2$**.

Allowed region: the intersection — inside the $46.4^\circ$ wedge *and* left of $\mathrm{Re}(s)=-2$.

**(b)** For $s = -2 \pm j2$: $\sigma = 2$ and $\omega_d = 2$, so

$$\omega_n = \sqrt{2^2+2^2} = 2\sqrt2 = 2.828\ \text{rad/s}, \qquad \zeta = \frac{\sigma}{\omega_n} = \frac{2}{2.828} = 0.7071.$$

Both constraints hold: $\zeta = 0.707 \ge 0.690$ ✓ (equivalently $\beta = 45^\circ \le 46.4^\circ$ ✓), and $\sigma = 2 \ge 2$ ✓ (on the boundary). Actual performance:

$$M_p = e^{-0.7071\pi/\sqrt{1-0.5}}\times100\,\% = e^{-2.2214/0.7071}\times100\,\% = e^{-3.1416}\times100\,\% = 4.3\,\%, \qquad t_s = \frac{4}{2} = 2\ \text{s}.$$

*Check.* $4.3\,\% \le 5\,\%$ ✓ and $2 \le 2$ s ✓ — it just makes it, which is what "corner of the region" means. Cute fact worth noticing: at $\zeta = 1/\sqrt2$ the exponent is exactly $-\pi$, so $M_p = e^{-\pi} = 4.32\,\%$. That's why $0.707$ is the classic default.

**P3** **(a)** $T(0) = \dfrac{40}{(10)(4)} = \dfrac{40}{40} = 1$ ✓ — so overshoot is measured against a final value of 1 and percentages are meaningful.

**(b)** Poles: $s = -10$ from the first factor, and from $s^2+2s+4 = 0$,

$$s = \frac{-2 \pm \sqrt{4-16}}{2} = -1 \pm j\sqrt3 = -1 \pm j1.732.$$

The dominant pair is $-1 \pm j1.732$, with $\sigma = 1$. The third pole's real part is $10 = 10\sigma$, comfortably past the $5\sigma$ threshold, so the approximation should be good.

**(c)** From the pair: $\omega_n = \sqrt{1 + 3} = 2$ rad/s, $\zeta = \sigma/\omega_n = 1/2 = 0.5$, $\omega_d = \sqrt3$. Hence

$$M_p \approx 16.3\,\%, \qquad t_p \approx \frac{\pi}{\sqrt3} = 1.81\ \text{s}, \qquad t_s \approx \frac{4}{1} = 4\ \text{s}.$$

(This is the same pole pair as Example 2 — deliberately, so you can see what the extra pole costs.)

**(d)** Errors: predicted 16.3 percent vs actual 15.9 percent (over-predicted by 0.4 point); predicted $t_p = 1.81$ vs 1.92 s (under-predicted); predicted $t_s = 4.0$ vs 4.13 s (under-predicted). All three errors point the same way: **the extra pole makes the system slightly slower and slightly tamer than second-order theory says**, because it adds a small lag that rounds off the leading edge. Errors of 2–5 percent — fine for design, then verify.

If the third pole moved to $-2$, it would sit only $2\sigma$ from the axis and the approximation would fail badly: its own mode $e^{-2t}$ decays on the same timescale as the dominant pair, so it stops being a small correction. The actual overshoot drops to about 8.1 percent — roughly **half** the predicted 16.3 percent — and $t_p$ stretches to about 2.46 s. You would have to keep all three poles and simulate.

</details>

## Flashback

**From Lesson 2.1 (First-order response):** A first-order plant has $G(s) = \dfrac{8}{s+4}$ and is driven by a unit step. Give its DC gain, its time constant $\tau$, the output value at $t = \tau$, and its 2 percent settling time. (Fresh variant — different pole and a DC gain that isn't 1.)

<details>
<summary>Solution</summary>

Put it in the standard first-order form $G(s) = \dfrac{A}{\tau s + 1}$ by dividing top and bottom by 4:

$$G(s) = \frac{8}{s+4} = \frac{2}{0.25s + 1} \;\Longrightarrow\; \text{DC gain } A = 2, \quad \tau = 0.25\ \text{s}.$$

Equivalently: the pole is at $s = -4$, and $\tau = 1/|{-4}| = 0.25$ s; the DC gain is $G(0) = 8/4 = 2$.

The unit-step response is $y(t) = 2\left(1 - e^{-t/\tau}\right) = 2\left(1-e^{-4t}\right)$, settling at 2. At $t = \tau$:

$$y(\tau) = 2(1 - e^{-1}) = 2(1 - 0.3679) = 1.264,$$

which is $63.2$ percent of the final value 2 — the defining property of $\tau$. Settling to within 2 percent needs $e^{-t_s/\tau} = 0.02$, so

$$t_s = \tau\ln 50 = 0.25 \times 3.912 = 0.978 \approx 4\tau = 1.0\ \text{s}.$$

*Check.* Same $\ln 50 \approx 4$ logic as this lesson's $t_s = 4/\sigma$ — and indeed a first-order pole at $-4$ has $\sigma = 4$, giving $t_s = 4/4 = 1$ s. ✓ The two formulas are the same statement: **settling time is $4$ over the distance from the pole to the $j\omega$ axis**, first order or second. A first-order system never overshoots, so there is no $M_p$ or $t_p$ to report.

</details>

## Connections

- **Backward:** [2.1](02-01-first-order-response.md) gave one pole and $t_s = 4\tau$; this lesson gives two and $t_s = 4/\sigma$ — literally the same rule, since $\sigma$ *is* the reciprocal time constant of the decay envelope. The four damping regimes are the discriminant cases of [`ode-refresher` 2.2](../../ode-refresher/lessons/02-02-oscillations-damping.md), and the pole-position-to-waveform dictionary is [`signals-systems` 2.5](../../signals-systems/lessons/02-05-transfer-functions-poles-zeros.md). The closed-loop reduction in Example 2 is [1.5](01-05-block-diagram-algebra.md)'s feedback formula.
- **Forward:** [3.1](03-01-root-locus-construction.md) draws where closed-loop poles *can* go as $K$ varies; [3.2](03-02-root-locus-design.md) overlays this lesson's spec wedge on that locus and reads off the gain — that single picture is the payoff for everything above. [4.1](04-01-pid-control.md) and [4.3](04-03-lead-lag-compensators.md) exist precisely because Example 2's one knob couldn't set $\zeta$ and $\omega_n$ independently. [5.4](05-04-pole-placement-observers.md) does the same job with full state feedback, where you *can* place every pole at once — and the target locations come from these formulas.
- **Sideways (physics and circuits):** you have already met this system twice under other names. [`mechanics-refresher` 3.2](../../mechanics-refresher/lessons/03-02-damped-driven-oscillations.md) writes the mass–spring–damper as $\ddot x + 2\gamma\dot x + \omega_0^2 x = 0$ with decay rate $\gamma = b/(2m)$; [`circuits` 3.3](../../circuits/lessons/03-03-second-order-rlc.md) writes the series RLC as $s^2 + 2\alpha s + \omega_0^2$ with neper frequency $\alpha = R/(2L)$. In both, their $\omega_0$ is our $\omega_n$ and their $\gamma$ or $\alpha$ is our $\sigma = \zeta\omega_n$, so the **translation is $\zeta = \gamma/\omega_0 = \alpha/\omega_0$** — giving $\zeta = b/(2\sqrt{km})$ for the spring and $\zeta = \tfrac{R}{2}\sqrt{C/L}$ for the circuit. Their three regimes are our four minus the $\zeta = 0$ ideal. A servo that overshoots 16 percent and a ringing RLC filter are the same two numbers wearing different hardware; control just adds the dimensionless $\zeta$ so the shape is separated from the clock.
