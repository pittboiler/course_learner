# Quantum Networking · Lesson 4.2: Compensation as a control loop

> ⏱ ~15 min · Module 4: Keeping the channel alive · Builds on: [4.1 Learning the fiber's rotation](04-01-learning-the-fibers-rotation.md), [control-systems 1.1](../../control-systems/lessons/01-01-feedback-and-the-control-problem.md) · Unlocks: [4.3 Reading the GothamQ result](04-03-reading-the-gothamq-result.md)

## Why this matters

[4.1](04-01-learning-the-fibers-rotation.md) measured the fiber's rotation once and undid it. But [2.3](02-03-drift-in-buried-fiber.md) showed the rotation never sits still. So compensation is not a calibration; it is a **loop** that runs forever: look, decide, correct, then pause and repeat. Every look costs something, because the probe light shares the fiber with the photons. Qunnect's APC module is exactly this loop, and its two settings, how often it looks and how bad things must get before it acts, decide both the fidelity and the uptime a customer gets.

## The idea

In the language of [control-systems 1.1](../../control-systems/lessons/01-01-feedback-and-the-control-problem.md), the pieces are:

| Loop element | In Qunnect's APC (GothamQ settings) |
|---|---|
| Plant | the drifting 34 km fiber |
| Disturbance | temperature, vibration, handling: slow wander plus jumps |
| Sensor | fast polarimeter, $10^4$ measurements/s, reading classical probe pulses |
| Actuator | EEOM (elasto-electro-optic modulator), about 120 kHz bandwidth |
| Controller | every ~20 s: measure fidelity against a stored reference; if below 99%, gradient descent on the EEOM until above 99% |
| Cost of a look | 30 to 1000 ms per cycle with the photons switched out |

Two features make it unlike the cruise control of control-systems 1.1. First, it is **sampled**: between checks the link runs open loop, and whatever drift happens goes uncorrected. Second, looking is **expensive**: the 1324 nm probe is time-multiplexed with the photons through optical switches, and an AOM (acousto-optic modulator) shutters it off otherwise. Why not run the probe at a different wavelength, all the time? Because of the PMD from 2.3: a probe offset by $\delta\lambda$ steers the compensator wrong by $\kappa\,\delta\lambda$, where $\kappa$ is the fiber's rotation per nanometre. Same colour means sharing the fiber's time.

So the design question is a tradeoff: **look often** (high fidelity, more downtime) or **look rarely** (more uptime, more drift between looks). To size it we need a model of how fast fidelity leaks away.

## The formal version

**Drift model.** Let the residual rotation (fiber times last correction) take a small random kick every short interval $dt$: a rotation vector $d\vec\omega$ whose three components are independent, zero-mean, with variance $2D\,dt$ each. $D$ (rad²/s) is the **drift constant**. *In words: the residual rotation does an isotropic [random walk](../reference.md#rotational-random-walk), with no preferred axis.*

**Short times.** Small rotation vectors add, so the angle $\theta$ grows like a 3D random walk:

$$\langle\theta^2\rangle=6Dt.$$

With $F=\cos^2(\theta/2)\approx1-\theta^2/4$ from 2.3, the expected loss is $1-\langle F\rangle\approx\tfrac32Dt$. *In words: fidelity leaks linearly in time, at rate $1.5D$.*

**Any time.** Take any Stokes vector $\vec s$ the fiber carries. A small kick about an axis perpendicular to $\vec s$ by angle $\phi$ shortens its projection on the old direction by $1-\cos\phi\approx\phi^2/2$. The two perpendicular components contribute $\langle\phi^2\rangle=4D\,dt$, so on average $\vec s$ shrinks by $1-2D\,dt$ per step, giving $\langle\vec s(t)\rangle=e^{-2Dt}\vec s(0)$. The pair's correlations $\langle\sigma_i\otimes\sigma_j\rangle$ ride on the travelling photon's axes, so they shrink by the same factor. Averaged over drift histories, the delivered pair is a [Werner state](../reference.md#werner-state) with $p=e^{-2Dt}$:

$$\langle F(t)\rangle=\frac{1+3e^{-2Dt}}{4}.$$

*In words: uncorrected drift, averaged, is depolarizing noise that grows with time since the last correction.* (Python check: a Monte Carlo of composed random SU(2) kicks matches this to MC noise, and the averaged density matrix matches the Werner form.)

**Cadence from drift.** If each correction resets the residual to zero, the expected fidelity just before the next one stays above $F_{th}$ when

$$T\le\frac{1}{2D}\ln\frac{3}{4F_{th}-1}\approx\frac{2(1-F_{th})}{3D}.$$

*In words: the allowed interval between looks scales as $1/D$; double the drift, halve the interval.*

**Uptime.** If a check starts every $T_c$ and costs $t_{\text{down}}$ of switched-out time,

$$\text{uptime}=1-\frac{\langle t_{\text{down}}\rangle}{T_c}\ \ge\ 1-\frac{t_{\max}}{T_c}.$$

*In words: the worst case assumes every check runs the longest cycle; a threshold loop does better because most checks find nothing to fix* ([uptime](../reference.md#uptime)).

## Picture

![Simulated pair fidelity over 300 seconds with drift constant 2 times 10 to the minus 4 radians squared per second. A dashed black uncompensated trace wanders down and leaves the plot below 0.90 near 265 seconds. A solid blue compensated trace stays near 1, with checks every 20 seconds marked as ticks; at four checks, at 40, 160, 260 and 280 seconds, it is below the red dashed 0.99 threshold and snaps back to 1. A jump of 0.4 radians at 147 seconds drops the compensated trace to about 0.96 until the check at 160 seconds repairs it.](assets/04-02-fig1.svg)

One seeded history of the threshold loop, corrections modelled as perfect. Three things to see. Most checks find $F>0.99$ and do nothing. The trace dips below 0.99 *between* checks (around 35 s) and nobody notices until the next tick. And the 0.4 rad jump costs about 0.04 of fidelity for 13 seconds, because the loop is blind until 160 s. Time-averaged, this history delivers $F=0.993$; the uncompensated path falls below 0.90 within about four and a half minutes.

## Worked examples

**Example 1 (sizing a loop).** A fiber has $D=2\times10^{-4}$ rad²/s.

*No correction for 30 s:* $2DT=0.012$, $e^{-0.012}=0.9881$, so $\langle F\rangle=(1+3\times0.9881)/4=0.991$. The short-time rule gives the same: $1.5\times2\times10^{-4}\times30=0.009$ lost.

*Full-reset cadence for 0.99:* $(4\times0.99-1)/3=0.98667$ and $\ln(1/0.98667)=0.01342$, so

$$T\le\frac{0.01342}{2\times2\times10^{-4}}=33.6\text{ s}.$$

*Threshold loop instead:* check every $T_c=10$ s; a quiet check costs 40 ms, a triggered cycle 500 ms (invented hardware numbers). Worst case, uptime $=1-0.5/10=95\%$. A simulation of this loop finds about 20% of checks trigger, so the average downtime per check is $0.8\times0.040+0.2\times0.500=0.132$ s and

$$\text{uptime}=1-\frac{0.132}{10}=98.68\%.$$

The same simulation gives a time-averaged fidelity of 0.995. The worst-case bound is honest but pessimistic by almost four points.

**Example 2 (what GothamQ's settings can absorb).** Qunnect ran the APC every ~20 s with a 99% threshold. Invert the cadence formula to get the largest drift that keeps the expected fidelity above 0.99 at each check:

$$D_{\max}=\frac{0.01342}{2\times20}=3.4\times10^{-4}\ \text{rad}^2/\text{s}.$$

That is an rms rotation of $\sqrt{6\times3.4\times10^{-4}\times20}=0.20$ rad (11.5°) per 20 s, the same 0.200 rad that 2.3 found as the whole budget for $F\ge0.99$. A cycle has a measurement budget too: at $10^4$ readings/s, a 30 ms cycle is 300 polarimeter readings and a 1000 ms cycle is $10^4$, so a large rotation costs many gradient steps. The measured uptime and 15-day fidelity are unpacked in [4.3](04-03-reading-the-gothamq-result.md).

## Watch out

- You might think a 99% trigger guarantees 99% pair fidelity, but actually the loop measures *probe* overlap. If the metric is the average overlap of H, D and R probes (an assumption; the paper does not give the formula), it equals $(2+\cos\theta)/3$ while the pair has $(1+\cos\theta)/2$, so 0.99 on the probes is 0.985 on the pair ([fidelity to a Bell state](../reference.md#fidelity-to-a-bell-state)).
- You might think a correction returns the link to perfect, but actually GothamQ's gradient descent stops once it exceeds 99%, its optimization threshold. A link left at 0.991 is likely to trigger again at the next check. A tighter stop threshold buys margin at the price of longer cycles.
- You might think faster checks only cost a little probe light, but actually every check switches the photons out. Checking twice as often roughly doubles the quiet-check downtime, whatever the fiber is doing.

## Business lens

The two knobs, cadence and threshold, are an **SLA conversation**. A customer buying "99% fidelity, 99.5% uptime" is buying a cadence matched to their fiber's drift constant, and the $1/D$ scaling says who is expensive to serve: aerial fiber that swings in wind and sun, routes next to construction, anything with frequent jumps. A sharp question for any vendor: "what is your recovery time after a jump?" The honest answer is up to one cadence plus one cycle, not zero.

This is also why [automated polarization compensation](../reference.md#automated-polarization-compensation) is the product, not a feature. The physics of 4.1 is textbook; making the [compensation cycle](../reference.md#compensation-cycle) fast enough that looking is cheap is where engineering differentiates. In August 2026 DARPA awarded Qunnect a contract to advance Carina's next-generation polarization compensation. Read it as funding for exactly these knobs: shorter cycles and resilience to faster drift. The limitation to state plainly: today's loop is sampled, so fidelity between checks is open loop.

## One-liner

> Polarization compensation is a sampled feedback loop whose cadence must scale as one over the fiber's drift constant, and every look it takes is time the photons are switched out.

## Problems

**P1 (🟢)** A compensator checks every 10 s (start to start), and in the worst case every check runs a full 200 ms cycle with the photons switched out. What is the worst-case uptime, and how many minutes of downtime per day is that?

**P2 (🟡)** Use the lesson's drift model, with each correction resetting the residual to zero. During commissioning, with compensation off, the drift-averaged pair fidelity falls from 1 to 0.97 in 60 s.

(a) What is the drift constant $D$?

(b) What is the longest full-reset cadence that keeps the expected fidelity just before each correction at or above 0.995?

**P3 (🔴, practical)** A prospective customer's route is aerial fiber that drifts 10 times faster (10 times the $D$) than the buried fiber your loop was tuned for. Name two concrete changes to the compensation loop and the cost of each, in four sentences or fewer.

<details>
<summary>Solutions</summary>

**P1** Worst case, downtime fraction $=0.2/10=0.02$, so uptime $=98.0\%$. Per day: $0.02\times24\times60=28.8$ minutes.

---

**P2** (a) The averaged state is Werner with $p=e^{-2Dt}$. From $F=0.97$: $p=(4\times0.97-1)/3=0.96$. Then

$$D=\frac{-\ln0.96}{2\times60}=\frac{0.04082}{120}=3.40\times10^{-4}\ \text{rad}^2/\text{s}.$$

(b) Require $p=e^{-2DT}\ge(4\times0.995-1)/3=0.99333$, so $2DT\le-\ln0.99333=0.006689$:

$$T\le\frac{0.006689}{2\times3.40\times10^{-4}}=9.83\text{ s}.$$

The short-time rule $2(1-F_{th})/(3D)=0.01/(1.02\times10^{-3})=9.80$ s agrees. Halving the allowed infidelity (0.01 to 0.005) halves the cadence; that is the $1/D$ scaling read the other way.

---

**P3** *(practical)*

**Accept:** any two distinct, concrete changes, each paired with a real cost; at least one should use the $T\propto1/D$ scaling or name downtime.

**Must hit:**

- Shorten the cadence about tenfold (for example 20 s to 2 s) to hold the same fidelity budget, since $T\propto1/D$. Cost: quiet-check downtime rises tenfold (a 40 ms check is 0.2% of a 20 s cadence but 2% of a 2 s one), and triggered cycles become about ten times more frequent.
- Make each cycle faster: compute the correction directly from two probes (4.1) instead of iterating gradient descent, or use a faster polarimeter and actuator. Cost: engineering and hardware, which is the kind of work the DARPA contract funds.
- Also acceptable: relax the threshold (cost: a lower fidelity SLA); a continuous probe at an offset wavelength (cost: PMD steers it wrong by $\kappa\,\delta\lambda$, from 2.3); move the worst segment underground (cost: the customer's capex and time).

**Model answer:** "Ten times the drift means checking about ten times as often, every 2 s instead of 20 s, which multiplies the time the photons are switched out by roughly ten. To claw that back we'd shorten each cycle, solving for the correction directly from the probes rather than by gradient descent, which is engineering work on the compensator. If neither is enough, the remaining lever is a lower fidelity commitment on that route."

</details>

## Flashback

**From Lesson [3.3](03-03-proving-a-link-is-entangled.md) (Proving a link is entangled):** A link records 8,000 pairs in each basis. Z basis: $C_{HH}=3{,}780$, $C_{VV}=3{,}740$, $C_{HV}=260$, $C_{VH}=220$. X basis: $C_{DD}=3{,}900$, $C_{AA}=3{,}880$, $C_{DA}=110$, $C_{AD}=110$. (a) Compute $V_Z$ and $V_X$. (b) Compute both two-basis brackets: the one with the Z-basis error term $\sqrt{P_{HV}P_{VH}}$, and the swapped one, $\big(1+V_X+2V_Z\mp4\sqrt{P_{DA}P_{AD}}\big)/4$. What bracket do you report? (c) In one sentence: why does the swapped pair set the upper bound here?

<details>
<summary>Solution</summary>

(a)

$$V_Z=\frac{3{,}780+3{,}740-260-220}{8{,}000}=\frac{7{,}040}{8{,}000}=0.880$$

$$V_X=\frac{3{,}900+3{,}880-110-110}{8{,}000}=\frac{7{,}560}{8{,}000}=0.945$$

(b) *Z-basis error term.* $P_{HV}=0.0325$ and $P_{VH}=0.0275$, so $4\sqrt{P_{HV}P_{VH}}=4\times0.02990=0.1196$. Also $1+V_Z+2V_X=1+0.880+1.890=3.770$. So

$$\frac{3.770-0.1196}{4}=0.913\;\le F\le\;\frac{3.770+0.1196}{4}=0.972.$$

*Swapped (X-basis error term).* $P_{DA}=P_{AD}=0.01375$, so $4\sqrt{P_{DA}P_{AD}}=0.0550$. Also $1+V_X+2V_Z=1+0.945+1.760=3.705$. So

$$\frac{3.705-0.0550}{4}=0.9125\;\le F\le\;\frac{3.705+0.0550}{4}=0.940.$$

Report the highest lower bound and the lowest upper bound: $0.913\le F\le0.940$. It certifies entanglement comfortably (0.913 is far above 0.5).

(c) The bracket's width is set by the error counts of the basis that supplies the populations, and the X basis here has half the error rate of the Z basis (2.75% against 6%), so its error term is less than half as large.

</details>

## Connections

- **Backward:** [4.1](04-01-learning-the-fibers-rotation.md) is one look of this loop; [2.3](02-03-drift-in-buried-fiber.md) supplied the drift, the jumps and the 0.200 rad budget; [1.3](01-03-fidelity-and-rate.md) supplied the Werner state that drift-averaging produces.
- **Forward:** [4.3](04-03-reading-the-gothamq-result.md) reads GothamQ's 15-day uptime and fidelity through this loop; memories in [5.1](05-01-why-memories.md) face the same "fidelity decays with waiting time" curve.
- **Sideways:** the cost of looking is [control-systems 1.1](../../control-systems/lessons/01-01-feedback-and-the-control-problem.md)'s "sensors lie" and "you spend control effort" in new clothes. The $\langle\theta^2\rangle=6Dt$ random walk is the same $\sqrt t$ diffusion behind the DGD's $\sqrt L$ growth in [2.3](02-03-drift-in-buried-fiber.md).
