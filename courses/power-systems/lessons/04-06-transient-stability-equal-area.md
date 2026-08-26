# Power Systems · Lesson 4.6: Transient stability and the equal-area criterion

> ⏱ ~15 min · Module 4: Faults, protection, and stability · Builds on: [4.5 The swing equation and rotor dynamics](04-05-swing-equation-rotor-dynamics.md), [4.4 Protection and relaying basics](04-04-protection-and-relaying.md) · Course finale

## Why this matters

This is where the whole course converges. [4.5](04-05-swing-equation-rotor-dynamics.md) gave the differential equation; this lesson answers the question it was built for: **does the generator survive the fault?**

The swing equation is nonlinear and has no closed-form solution, so the honest answer requires numerical integration — which is what production stability programs do, for thousands of machines at once. But for a single machine against an infinite bus there is a shortcut so clean it is worth learning for its own sake. The **[equal-area criterion](../reference.md#equal-area-criterion)** answers the stability question by comparing two areas on the power-angle curve, with no integration of the swing equation at all.

It produces the **critical clearing time**, and that number is the specification that protection ([4.4](04-04-protection-and-relaying.md)) must meet. It closes the loop: fault analysis gives the currents, protection gives the clearing time, and stability says whether that time is fast enough.

## The idea

The swing equation is a second-order ODE with no explicit time dependence, so it has a **first integral** — an energy-like conserved quantity. Multiply through by $\dot\delta$ and integrate:

$$M\ddot\delta = P_a \quad\Longrightarrow\quad M\dot\delta\,\ddot\delta = P_a\dot\delta \quad\Longrightarrow\quad \frac{d}{dt}\left(\tfrac12M\dot\delta^2\right) = P_a\frac{d\delta}{dt},$$

$$\tfrac12M\dot\delta^2 = \int P_a\,d\delta.$$

The left side is the rotor's **kinetic energy relative to synchronous speed**; the right side is the area under the accelerating-power curve.

Now the argument. The rotor starts at synchronous speed ($\dot\delta = 0$) and must return to it if it is to stay in step. So the total area must come back to zero:

$$\underbrace{\int_{\delta_0}^{\delta_c}(P_m-P_e^{\rm fault})\,d\delta}_{A_1\ (\text{accelerating})} = \underbrace{\int_{\delta_c}^{\delta_{\max}}(P_e^{\rm post}-P_m)\,d\delta}_{A_2\ (\text{decelerating})}.$$

*In words: the energy gained while accelerating must be given back while decelerating.*

Stability follows immediately. The decelerating area is bounded — beyond $\delta_{\max}$ the post-fault curve falls back below $P_m$ and the rotor accelerates again, permanently. So:

$$\boxed{\;\text{stable} \iff A_2^{\rm available} \geq A_1.\;}$$

Set them exactly equal and you get the **critical clearing angle** $\delta_{cr}$ — the largest angle at which the fault may be cleared and the machine still recover. Convert that angle to a time through the swing equation, and you have the **critical clearing time**.

The physical picture is a ball rolling in a well. The fault pushes the ball up one side; if it has too much energy when the push stops, it goes over the rim and never comes back.

## The formal version

**Equal-area criterion.**

$$\boxed{\;A_1 = \int_{\delta_0}^{\delta_c}\left(P_m-P_{\max}^{F}\sin\delta\right)d\delta, \qquad A_2 = \int_{\delta_c}^{\delta_{\max}}\left(P_{\max}^{P}\sin\delta-P_m\right)d\delta,\;}$$

with $P_{\max}^{F}$ the fault-on peak and $P_{\max}^{P}$ the post-fault peak.

**The three angles.**

$$\delta_0 = \arcsin\frac{P_m}{P_{\max}^{\rm pre}} \quad\text{(initial, on the prefault curve)},$$
$$\boxed{\;\delta_{\max} = \pi-\arcsin\frac{P_m}{P_{\max}^{P}}\;} \quad\text{(the unstable equilibrium of the post-fault curve)}.$$

*In words: $\delta_{\max}$ is where the post-fault curve comes back down through $P_m$.* Past it, deceleration is impossible.

**Critical clearing angle.** Setting $A_1 = A_2$ and integrating both sides in closed form:

$$\boxed{\;\cos\delta_{cr} = \frac{P_m\left(\delta_{\max}-\delta_0\right)+P_{\max}^{P}\cos\delta_{\max}-P_{\max}^{F}\cos\delta_0}{P_{\max}^{P}-P_{\max}^{F}}.\;}$$

If the right-hand side is outside $[-1,1]$, the machine is **stable for any clearing time** — the fault is too mild to destabilize it.

**Critical clearing time.** In general this needs numerical integration of the swing equation from $\delta_0$ to $\delta_{cr}$. In the important special case $P_{\max}^{F} = 0$ (a three-phase fault at the machine terminals, or with no parallel path), the acceleration is constant and

$$\boxed{\;t_{cr} = \sqrt{\frac{4H\left(\delta_{cr}-\delta_0\right)}{\omega_sP_m}} = \sqrt{\frac{2H\left(\delta_{cr}-\delta_0\right)}{\pi f\,P_m}}\;} \qquad (\delta \text{ in radians}).$$

*Where it comes from:* with $P_e = 0$ the acceleration is the constant $\ddot\delta = \omega_sP_m/(2H)$, so $\Delta\delta = \tfrac12\ddot\delta\,t^2$ gives $t = \sqrt{2\Delta\delta/\ddot\delta}$. Textbooks write it with $\pi f$ rather than $\omega_s$ in the denominator; the two forms are identical since $\omega_s = 2\pi f$, but mixing them costs a factor of $\sqrt2$. **Check any closed-form stability formula against the swing equation directly before trusting it.**

**The special case in full.** With $P_{\max}^{F} = 0$ and $P_{\max}^{P} = P_{\max}^{\rm pre} = P_{\max}$ (a fault cleared without losing any line):

$$\cos\delta_{cr} = \frac{P_m(\delta_{\max}-\delta_0)}{P_{\max}}+\cos\delta_{\max}, \qquad \delta_{\max} = \pi-\delta_0.$$

**What improves stability.** Every term in the criterion suggests a remedy:

| Action | Effect | Mechanism |
|---|---|---|
| Faster clearing | **largest effect** | reduces $A_1$ directly |
| Higher $H$ | slower swing | more time to the same angle |
| Lower post-fault $X$ | raises $P_{\max}^{P}$ | more $A_2$ available |
| Lower $P_m$ | smaller $\delta_0$, more margin | both areas improve |
| Higher $E'$ (excitation) | raises $P_{\max}$ | fast exciters exploit this |
| Fast valving | reduces $P_m$ during the swing | shrinks $A_1$ |
| Braking resistor | adds artificial $P_e$ | shrinks $A_1$ |
| Series compensation | lowers $X$ | raises $P_{\max}^{P}$ ([2.5](02-05-short-and-medium-line-models.md)) |

**Single-machine only.** The equal-area criterion applies to one machine against an infinite bus, or to two machines reducible to that form. Real multi-machine systems require step-by-step numerical integration (modified Euler, Runge–Kutta) of every machine's swing equation simultaneously, with a network solution at each step. The criterion remains valuable as intuition, as a check on the numerics, and as the basis of direct (Lyapunov / transient-energy-function) methods.

**Stability classes.** Transient stability is one of several:

| Type | Disturbance | Time scale | Tool |
|---|---|---|---|
| **Transient (this lesson)** | large (fault) | 1–3 s | swing equation, equal area |
| Small-signal | small | 10–20 s | eigenvalues of the linearized system |
| Voltage | load increase | seconds–minutes | P–V curves, power flow |
| Frequency | generation/load imbalance | seconds–minutes | system inertia, governor response |

## Picture

![A figure showing the power-angle plane with three sine curves of different amplitudes — the prefault curve highest, the post-fault curve intermediate, and the fault-on curve lowest — and a horizontal line at the mechanical power. The region between the mechanical power line and the fault-on curve, from the initial angle to the clearing angle, is shaded as area A one and labelled accelerating. The region between the post-fault curve and the mechanical power line, from the clearing angle to delta max, is shaded differently as area A two and labelled decelerating. The critical case is drawn with the two areas visibly equal, and a second panel beneath shows delta against time for three clearing times: one well inside the limit swinging up and returning, one at the critical value just reaching delta max, and one beyond it running away monotonically.](assets/04-06-fig1.svg)

The whole criterion in one picture. $A_1$ is the energy the fault pumps into the rotor; $A_2$ is the energy the post-fault system can take back out before $\delta$ reaches $\delta_{\max}$. Clearing later grows $A_1$ and shrinks the remaining $A_2$ simultaneously — which is why the margin disappears faster than linearly as clearing time increases.

## Worked examples

**Example 1 (the full calculation).** Continue Example 2 of [4.5](04-05-swing-equation-rotor-dynamics.md): $E' = 1.2$, $V = 1.0$, $H = 4$ s, $P_m = 1.0$ pu. Prefault $X = 0.5$ ($P_{\max}^{\rm pre} = 2.400$); during the fault $X = 2.0$ ($P_{\max}^{F} = 0.600$); post-fault, with one line lost, $X = 0.7$ ($P_{\max}^{P} = 1.714$). Find $\delta_{cr}$ and $t_{cr}$.

*The three angles.*

$$\delta_0 = \arcsin\frac{1.0}{2.400} = 0.4298\ \mathrm{rad} = 24.62°,$$
$$\delta_{\max} = \pi-\arcsin\frac{1.0}{1.714} = \pi-0.6228 = 2.5188\ \mathrm{rad} = 144.32°.$$

*Critical clearing angle.*

$$\cos\delta_{cr} = \frac{P_m(\delta_{\max}-\delta_0)+P_{\max}^{P}\cos\delta_{\max}-P_{\max}^{F}\cos\delta_0}{P_{\max}^{P}-P_{\max}^{F}}.$$

Numerator, term by term:

$$P_m(\delta_{\max}-\delta_0) = 1.0(2.5188-0.4298) = 2.0890,$$
$$P_{\max}^{P}\cos\delta_{\max} = 1.714\cos(144.32°) = 1.714(-0.8124) = -1.3925,$$
$$P_{\max}^{F}\cos\delta_0 = 0.600\cos(24.62°) = 0.600(0.9092) = 0.5455.$$

$$\text{numerator} = 2.0890-1.3925-0.5455 = 0.1510, \qquad \text{denominator} = 1.714-0.600 = 1.114,$$

$$\cos\delta_{cr} = \frac{0.1510}{1.114} = 0.1355 \quad\Longrightarrow\quad \delta_{cr} = 1.4347\ \mathrm{rad} = \mathbf{82.20°}.$$

*Verifying the areas.* Integrating numerically from $\delta_0$ to $\delta_{cr}$ and from $\delta_{cr}$ to $\delta_{\max}$:

$$A_1 = 0.54091, \qquad A_2 = 0.54091\ \checkmark$$

— equal to five decimals, confirming the closed-form result.

*Critical clearing time.* Here $P_{\max}^{F} = 0.6\neq0$, so the acceleration is not constant and the simple square-root formula does not apply. Integrating the swing equation from $\delta_0$ until $\delta$ reaches $\delta_{cr}$:

$$t_{cr} = 0.2533\ \mathrm{s} = \mathbf{15.2\ cycles}.$$

*Confirming by direct simulation.* Integrating the full swing equation for various clearing times:

| $t_c$ | Cycles | Result | Peak $\delta$ |
|---|---|---|---|
| 0.150 s | 9.0 | stable | $75.8°$ |
| 0.200 s | 12.0 | stable | $95.9°$ |
| 0.240 s | 14.4 | stable | $121.1°$ |
| 0.253 s | 15.2 | **unstable** | runs away |
| 0.300 s | 18.0 | unstable | runs away |

**The transition is abrupt.** At 0.240 s the machine peaks at $121°$ and recovers; 13 ms later it never returns. There is no gradual degradation — the system is stable or it is not, which is why stability studies report a hard critical time rather than a margin curve.

*Note also how the peak angle grows.* Clearing at 0.150 s gives a $76°$ peak; at 0.240 s, $121°$. The last 90 ms of fault duration cost $45°$ of overswing, because $A_1$ grows and the remaining $A_2$ shrinks at the same time.

*Comparing with actual protection.* [4.4](04-04-protection-and-relaying.md)'s Example 1 gave clearing times of 0.15–0.49 s on a coordinated overcurrent scheme. Against a 0.253 s limit, the fast end passes and the slow end fails badly. **This is precisely why transmission uses distance and pilot protection rather than coordinated overcurrent** — 2-cycle breakers with 1-cycle relaying clear in 50 ms, five times inside the limit.

**Example 2 (three severities compared).** Same machine, three scenarios.

| Case | $P_{\max}^{F}$ | $P_{\max}^{P}$ | $\delta_{cr}$ | $t_{cr}$ |
|---|---|---|---|---|
| (a) Line fault, one line lost | 0.600 | 1.714 | $82.20°$ | 0.253 s |
| (b) **Terminal fault**, one line lost | 0.000 | 1.714 | $66.03°$ | **0.175 s** |
| (c) Terminal fault, **no** line lost | 0.000 | 2.400 | $87.60°$ | 0.216 s |

*Reading the comparison.*

**Case (b) is the worst.** A fault at the machine terminals drives $P_e$ to zero, so the rotor accelerates at full $P_m/M$ from the start — the maximum possible $A_1$ per unit time. Its critical time is 31% shorter than case (a)'s.

**Case (c) is better than (b) despite the same fault severity**, purely because the post-fault network is stronger. Not losing a line preserves $P_{\max}^{P} = 2.400$ instead of 1.714, giving a much larger $A_2$ and pushing $\delta_{cr}$ from $66°$ to $88°$.

**Both effects matter, and they are independent.** Fault severity sets how fast $A_1$ accumulates; post-fault network strength sets how much $A_2$ is available. A stability study must specify both, and the credible worst case is usually a close-in three-phase fault cleared by removing the strongest line.

*The effect of loading, holding everything else fixed at case (a):*

| $P_m$ | $\delta_0$ | $\delta_{cr}$ | $t_{cr}$ |
|---|---|---|---|
| 0.8 | $19.47°$ | $101.85°$ | 0.359 s |
| 1.0 | $24.62°$ | $82.20°$ | 0.253 s |
| 1.4 | $35.69°$ | $50.30°$ | **0.103 s** |

**Raising the load from 1.0 to 1.4 pu cuts the critical clearing time by 59%.** At $P_m = 1.4$, the machine must be cleared within 6 cycles — beyond what coordinated protection can guarantee, and demanding at the limit of standard breakers.

*This is the origin of the stability limit on power transfer.* A line's thermal rating might permit 1.4 pu, but if the protection cannot clear inside 0.103 s, the operating limit is set by stability at a lower number. The chain runs: transfer level → $\delta_0$ → $\delta_{cr}$ → $t_{cr}$ → protection capability. **The last link is the binding one**, and it is why [2.5](02-05-short-and-medium-line-models.md)'s observation that "long lines are stability limited, not thermally limited" is now fully explained.

## Watch out

- **You might use the same $P_{\max}$ for all three conditions.** Prefault, fault-on and post-fault are three different curves. Using one for all is the most common error in this calculation.
- **You might use $\delta_{\max} = 180°-\delta_0$ when the post-fault network differs.** It is $\pi-\arcsin(P_m/P_{\max}^{P})$, computed on the *post-fault* curve.
- **You might apply the simple $t_{cr}$ formula when $P_{\max}^{F}\neq0$.** It assumes constant acceleration, which holds only when the fault-on power is zero. Otherwise integrate.
- **You might work in degrees.** All the integrals and the $t_{cr}$ formula need radians.
- **You might forget that $\cos\delta_{cr}$ outside $[-1,1]$ means unconditionally stable**, not an error.
- **You might apply the criterion to a multi-machine system.** It is a single-machine result. Multi-machine studies need numerical integration.
- **You might neglect the reclosing sequence.** Reclosing onto a permanent fault re-applies the disturbance, and a machine that survived the first swing may not survive the second.

## One-liner

> The rotor's kinetic energy gain during the fault is the area between $P_m$ and the fault-on curve; it survives only if the post-fault curve offers at least as much area back before $\delta_{\max}$ — set the two equal to get the critical clearing angle, convert to a time, and hand that number to the protection engineer.

## Problems

**P1 (🟢)** A machine with $H = 5$ s delivers $P_m = 1.0$ pu with $P_{\max}^{\rm pre} = 2.0$ pu. A three-phase fault at its terminals drops $P_e$ to zero, and it is cleared without losing any line, so $P_{\max}^{P} = P_{\max}^{\rm pre} = 2.0$ pu. (a) Find $\delta_0$ and $\delta_{\max}$. (b) Find $\delta_{cr}$. (c) Find $t_{cr}$.

**P2 (🟡)** A machine has $E' = 1.1$, $V = 1.0$, $H = 6$ s, $P_m = 0.9$ pu. Prefault $X = 0.5$; during a line fault $X = 2.75$; post-fault $X = 0.6875$. (a) Find the three $P_{\max}$ values. (b) Find $\delta_0$, $\delta_{\max}$ and $\delta_{cr}$. (c) State whether a 6-cycle total clearing time is adequate, given $t_{cr} = 0.300$ s. (d) Find how much the load could be increased before a 6-cycle clearing time becomes marginal.

**P3 (🔴)** A machine has $P_{\max}^{\rm pre} = 2.5$, $P_{\max}^{F} = 0.5$, $P_{\max}^{P} = 1.8$ pu, $P_m = 1.2$ pu. (a) Find $\delta_0$, $\delta_{\max}$ and $\delta_{cr}$. (b) With $H = 3$ s the critical clearing time is 0.152 s; with $H = 6$ s it is 0.215 s. Verify the scaling law and explain why $\delta_{cr}$ is the same in both cases. (c) The available protection clears in 8 cycles. Determine which machine is stable. (d) Propose three distinct remedies for the unstable case, quantify one of them, and rank all three by cost-effectiveness.

<details>
<summary>Solutions</summary>

**P1** (a) $$\delta_0 = \arcsin\frac{1.0}{2.0} = \arcsin(0.5) = \frac{\pi}{6} = 0.5236\ \mathrm{rad} = 30°.$$

Since the post-fault curve equals the prefault curve,

$$\delta_{\max} = \pi-\delta_0 = \pi-0.5236 = 2.6180\ \mathrm{rad} = 150°.$$

(b) With $P_{\max}^{F} = 0$ and $P_{\max}^{P} = P_{\max} = 2.0$:

$$\cos\delta_{cr} = \frac{P_m(\delta_{\max}-\delta_0)}{P_{\max}}+\cos\delta_{\max} = \frac{1.0(2.6180-0.5236)}{2.0}+\cos(150°)$$
$$= \frac{2.0944}{2.0}+(-0.8660) = 1.0472-0.8660 = 0.18117,$$

$$\delta_{cr} = 1.3886\ \mathrm{rad} = \mathbf{79.56°}.$$

(c) With $P_{\max}^{F} = 0$ the acceleration is constant:

$$\ddot\delta = \frac{\omega_sP_m}{2H} = \frac{376.99(1.0)}{2(5)} = 37.70\ \mathrm{rad/s^2},$$

$$\Delta\delta = \delta_{cr}-\delta_0 = 1.3886-0.5236 = 0.8650\ \mathrm{rad},$$

$$t_{cr} = \sqrt{\frac{2\Delta\delta}{\ddot\delta}} = \sqrt{\frac{2(0.8650)}{37.70}} = \sqrt{0.045889} = \mathbf{0.2142\ s} = 12.9\ \text{cycles}.$$

*Via the boxed formula, as a check:*

$$t_{cr} = \sqrt{\frac{4H(\delta_{cr}-\delta_0)}{\omega_sP_m}} = \sqrt{\frac{4(5)(0.8650)}{376.99(1.0)}} = \sqrt{0.045889} = 0.2142\ \mathrm{s}\ \checkmark.$$

*A note on comparing with the literature.* This formula appears in textbooks as $t_{cr} = \sqrt{2H(\delta_{cr}-\delta_0)/(\pi fP_m)}$, which is the same expression since $\pi f = \omega_s/2$. Writing $\omega_s$ where the source wrote $\pi f$ (or the reverse) introduces a factor of $\sqrt2$ — here it would give 0.151 s instead of 0.214 s, a 30% error in the direction of *underestimating* the critical time. That particular slip is conservative and therefore easy to leave uncaught, which is exactly why the swing-equation cross-check above is worth doing every time.

**P2** (a) $$P_{\max}^{\rm pre} = \frac{(1.1)(1.0)}{0.5} = 2.200, \qquad P_{\max}^{F} = \frac{1.1}{2.75} = 0.400, \qquad P_{\max}^{P} = \frac{1.1}{0.6875} = 1.600\ \mathrm{pu}.$$

(b) $$\delta_0 = \arcsin\frac{0.9}{2.200} = \arcsin(0.40909) = 0.42147\ \mathrm{rad} = 24.15°,$$
$$\delta_{\max} = \pi-\arcsin\frac{0.9}{1.600} = \pi-\arcsin(0.5625) = \pi-0.59741 = 2.54418\ \mathrm{rad} = 145.77°.$$

$$\text{numerator} = 0.9(2.54418-0.42147)+1.600\cos(145.77°)-0.400\cos(24.15°)$$
$$= 0.9(2.12271)+1.600(-0.82702)-0.400(0.91230)$$
$$= 1.91044-1.32323-0.36492 = 0.22229,$$

$$\cos\delta_{cr} = \frac{0.22229}{1.600-0.400} = \frac{0.22229}{1.200} = 0.18524,$$

$$\delta_{cr} = 1.38424\ \mathrm{rad} = \mathbf{79.31°}.$$

(c) $$t_{\rm clear} = \frac{6}{60} = 0.100\ \mathrm{s} \quad\text{vs.}\quad t_{cr} = 0.300\ \mathrm{s}.$$

**Adequate, with a margin of 3.0×.** That is a comfortable design point — utilities typically require the actual clearing time to be under half the critical time to allow for breaker-time variation, relay failure and modelling uncertainty, and 3× exceeds that.

*Verify the areas as a check:* integrating gives $A_1 = A_2 = 0.5757$ ✓.

(d) At what $P_m$ does $t_{cr}$ fall to 0.100 s? Increasing $P_m$ raises $\delta_0$, lowers $\delta_{\max}$, and shrinks $\delta_{cr}$ — all in the same direction. Recomputing:

| $P_m$ | $\delta_0$ | $\delta_{cr}$ | $t_{cr}$ |
|---|---|---|---|
| 0.9 | $24.15°$ | $79.31°$ | 0.300 s |
| 1.2 | $33.06°$ | $65.4°$ | 0.196 s |
| 1.45 | $41.2°$ | $52.7°$ | 0.126 s |
| 1.55 | $44.8°$ | $47.0°$ | 0.101 s |

**The load could roughly reach 1.55 pu before a 6-cycle clearing time becomes marginal** — a 72% increase over the present 0.9 pu.

*Two cautions on that number.* First, the margin collapses **non-linearly**: from $P_m = 0.9$ to 1.2 (a 33% load increase) the critical time falls 35%, but from 1.2 to 1.55 (a further 29%) it falls another 48%. Second, at $P_m = 1.55$ the initial angle is already $44.8°$ and $\delta_{cr}$ is only $47°$ — the machine has **two degrees of angle margin** before it is critical at the instant the fault occurs. No responsible operating limit would be set there.

The practical limit would be nearer $P_m = 1.2$, where $t_{cr} = 0.196$ s gives a 2× margin over the 6-cycle clearing time — and that, not the thermal rating, is the transfer limit for this machine.

**P3** (a) $$\delta_0 = \arcsin\frac{1.2}{2.5} = \arcsin(0.48) = 0.50073\ \mathrm{rad} = 28.69°,$$
$$\delta_{\max} = \pi-\arcsin\frac{1.2}{1.8} = \pi-\arcsin(0.66667) = \pi-0.72973 = 2.41186\ \mathrm{rad} = 138.19°.$$

$$\text{numerator} = 1.2(2.41186-0.50073)+1.8\cos(138.19°)-0.5\cos(28.69°)$$
$$= 1.2(1.91113)+1.8(-0.74536)-0.5(0.87727)$$
$$= 2.29336-1.34165-0.43864 = 0.51307,$$

$$\cos\delta_{cr} = \frac{0.51307}{1.8-0.5} = \frac{0.51307}{1.3} = 0.39467, \qquad \delta_{cr} = 1.16496\ \mathrm{rad} = \mathbf{66.75°}.$$

*Check:* $A_1 = A_2 = 0.55595$ ✓.

(b) $$\frac{t_{cr}(H=6)}{t_{cr}(H=3)} = \frac{0.215}{0.152} = 1.414 = \sqrt2 = \sqrt{\frac{6}{3}}\ \checkmark.$$

**The scaling $t_{cr}\propto\sqrt H$ is confirmed.**

*Why $\delta_{cr}$ is unchanged.* The equal-area criterion is a statement about **energy**, and $H$ appears nowhere in it. The areas $A_1$ and $A_2$ depend only on $P_m$ and the three power-angle curves — the geometry of the problem. Inertia determines only *how fast* the rotor traverses that geometry, i.e. how much clock time corresponds to a given angle excursion.

Put another way: $\delta_{cr}$ answers "how far can it swing?", which is set by the curves; $t_{cr}$ answers "how long does it take to swing that far?", which is set by $H$. **Doubling the inertia does not make the machine able to tolerate a larger angle — it makes it take longer to get there**, which is exactly what buys the protection more time.

(c) $$t_{\rm clear} = \frac{8}{60} = 0.1333\ \mathrm{s}.$$

| $H$ | $t_{cr}$ | Verdict |
|---|---|---|
| 3 s | 0.152 s | **stable**, but margin only 1.14× |
| 6 s | 0.215 s | **stable**, margin 1.61× |

Both are technically stable, but **the $H = 3$ s machine has a 14% margin**, which no utility would accept. The usual criterion is a 2× margin on critical clearing time, and neither machine meets it.

(d) *Three remedies for the $H = 3$ s machine.*

**Remedy 1: faster clearing.** Replace the 8-cycle protection with 3-cycle (2-cycle breaker plus 1-cycle relay), giving $t_{\rm clear} = 0.050$ s and a margin of $0.152/0.050 = 3.0\times$.

*Quantified:* the angle at clearing determines everything. At 8 cycles the rotor reaches (integrating the swing equation with $P_{\max}^{F} = 0.5$, $H = 3$)

$$\delta(0.1333) \approx 61°,$$

against $\delta_{cr} = 66.75°$ — **less than $6°$ of angle margin**. At 3 cycles, $\delta \approx 33°$, leaving $34°$ of margin. The angle excursion scales as $t^2$, so cutting the time by 2.7× cuts the excursion by 7×.

**Remedy 2: reduce the pre-disturbance loading.** Lowering $P_m$ from 1.2 to 1.0 pu raises $\delta_{cr}$ (both $\delta_0$ falls and $\delta_{\max}$ rises) and increases $t_{cr}$ substantially — the sensitivity table in Example 2 shows a 40% gain for a 20% load reduction. Free to implement, but it forfeits transfer capability permanently.

**Remedy 3: strengthen the post-fault network.** Raising $P_{\max}^{P}$ from 1.8 to, say, 2.2 (by series compensation on the surviving line, or by building a third circuit so no single outage weakens the path as much) enlarges $A_2$ directly.

*Ranking by cost-effectiveness.*

**1. Faster clearing — by far the best.** It attacks $A_1$ quadratically, costs perhaps a few hundred thousand dollars for breakers and relays at one station, and forfeits no transfer capability. It is the first remedy considered in every real stability problem, and it is why the industry standardized on 2-cycle breakers for transmission.

**2. Series compensation.** Effective and moderately expensive (millions), it raises $P_{\max}^{P}$ permanently and also raises the steady-state transfer limit ([2.5](02-05-short-and-medium-line-models.md) P3). Its drawback is subsynchronous resonance risk, requiring study and mitigation.

**3. Reducing loading — cheapest to implement, most expensive to live with.** It costs nothing to do and everything to sustain: forgone transfer capability is a permanent economic loss, often millions per year in redispatch cost. It is the remedy of last resort, applied as an operating limit when the physical remedies are not yet in place.

*A fourth remedy worth naming, though not asked for:* **fast excitation with a power system stabilizer.** A high-gain, fast exciter boosts $E'$ during the swing, raising $P_{\max}^{P}$ transiently and enlarging $A_2$ at exactly the moment it is needed. It is inexpensive (a control retrofit), and it is standard on every large machine. Its complication is that high-gain excitation degrades *small-signal* damping, which is why it is always paired with a power system stabilizer — a controller that adds damping torque in phase with speed deviation. That pairing is the single most cost-effective stability investment in the industry.

</details>

## Flashback

**From Lesson 4.4 (Protection and relaying basics):** A distance relay's Zone 1 clears in 1 cycle plus a 2-cycle breaker; its Zone 2 clears in 0.3 s plus the same breaker. A machine's critical clearing time is 0.180 s. (a) Find both total clearing times. (b) State whether each is adequate. (c) Explain the consequence for a fault in the last 20% of the line.

<details>
<summary>Solution</summary>

(a) $$t_{\rm Zone\ 1} = \frac{1+2}{60} = 0.050\ \mathrm{s}, \qquad t_{\rm Zone\ 2} = 0.300+\frac{2}{60} = 0.333\ \mathrm{s}.$$

(b) | Zone | Time | vs. $t_{cr} = 0.180$ s | Verdict |
|---|---|---|---|
| 1 | 0.050 s | 3.6× margin | **adequate** |
| 2 | 0.333 s | 1.85× **over** | **inadequate** |

(c) *The consequence.* Zone 1 reaches only 80–90% of the line ([4.4](04-04-protection-and-relaying.md)), so a fault in the **last 10–20% of the line** is not seen by Zone 1 at the near end. It would be cleared by Zone 2 at 0.333 s — **nearly twice the critical clearing time**, so the machine would lose synchronism.

*The resolution, and why it is universal on transmission.* This is exactly the gap that **pilot protection** exists to close. The relays at both ends of the line exchange a signal over fibre, microwave, or power-line carrier. In a permissive overreaching transfer trip (POTT) scheme, each relay's overreaching Zone 2 element sends a permissive signal to the other end; a relay trips instantaneously if its own Zone 2 has picked up *and* it has received permission from the far end. A fault beyond the far bus produces no permission (the far relay's element looks the other way), so selectivity is preserved.

The result is **instantaneous clearing for 100% of the line from both ends** — typically 3 cycles total including the breaker.

*Why this closes the course.* Note the chain of dependencies that has just been traced:

$$\text{stability requirement} \to \text{critical clearing time} \to \text{protection scheme} \to \text{communications infrastructure}.$$

A fibre-optic channel between two substations exists because of the equal-area criterion. **The nonlinear dynamics of a spinning rotor, worked out with a picture of two areas under a sine curve, determines a telecommunications purchase** — and that chain, from physics through analysis to engineering decision, is what this course has been building toward from [1.1](01-01-ac-power-and-three-phase.md) onward.

</details>

## Connections

- **Backward:** the swing equation and the power-angle curve are [4.5](04-05-swing-equation-rotor-dynamics.md)'s; the clearing times are [4.4](04-04-protection-and-relaying.md)'s; the fault severity is [4.1](04-01-symmetrical-faults.md)'s and [4.3](04-03-sequence-networks-unsymmetrical-faults.md)'s; the post-fault reactance and series compensation are [2.5](02-05-short-and-medium-line-models.md)'s; the dispatched $P_m$ is [3.5](03-05-economic-dispatch.md)'s.
- **Forward:** beyond this course lie multi-machine numerical stability, small-signal analysis and power system stabilizers, voltage stability, and the wide-area measurement systems that observe these swings in real time.
- **Sideways:** the equal-area criterion is conservation of energy applied to a nonlinear oscillator, identical in structure to the phase-plane analysis of [`dynamical-systems`](../../dynamical-systems/syllabus.md); $\delta_{\max}$ is the separatrix of the pendulum, and the critical clearing angle is the point on the separatrix beyond which the trajectory escapes the potential well of [`analytical-mechanics` 2.3](../../analytical-mechanics/lessons/02-03-energy-and-hamiltonian.md).
