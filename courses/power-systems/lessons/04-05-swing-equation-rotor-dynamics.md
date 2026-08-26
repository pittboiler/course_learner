# Power Systems · Lesson 4.5: The swing equation and rotor dynamics

> ⏱ ~15 min · Module 4: Faults, protection, and stability · Builds on: [2.5 Short and medium-length line models](02-05-short-and-medium-line-models.md), [3.5 Economic dispatch](03-05-economic-dispatch.md) · Unlocks: [4.6 Transient stability and the equal-area criterion](04-06-transient-stability-equal-area.md)

## Why this matters

A power system's generators are physically spinning masses, and they must all spin at *exactly* the same electrical frequency. Not approximately — exactly. If one machine's rotor pulls permanently ahead of the others, it loses synchronism, and it must be tripped immediately or it will tear itself apart.

That constraint has no analogue in ordinary circuit analysis, and it is the reason a fault that lasts 200 ms instead of 100 ms can black out a region. Everything in Modules 1–3 was an *algebraic* steady state; stability is a **differential equation**, and the [swing equation](../reference.md#swing-equation) is that equation.

It is remarkably simple — Newton's second law for rotation, written in per-unit — and it is the foundation of [4.6](04-06-transient-stability-equal-area.md)'s equal-area criterion and of every transient-stability program in the industry.

## The idea

A synchronous generator is a rotor spinning at synchronous speed, driven by mechanical torque from a turbine and retarded by electromagnetic torque from the stator current.

**In steady state the two balance exactly** and the speed is constant. If they do not balance, the rotor accelerates or decelerates, and its angular position drifts relative to the synchronously rotating reference. That drift is the **rotor angle $\delta$**, and it is the same $\delta$ that appears in the power-angle equation $P = EV\sin\delta/X$ from [2.5](02-05-short-and-medium-line-models.md).

That coincidence is the entire mechanism, and it is worth stating carefully:

**The rotor angle is both a mechanical position and an electrical variable.** As the rotor swings forward mechanically, the machine's internal EMF phasor rotates forward electrically, and the power it delivers rises as $\sin\delta$. The mechanical and electrical systems are coupled through the power-angle relation, and that coupling is what provides the restoring force.

Now trace what happens in a fault:

1. A fault occurs near the machine. The terminal voltage collapses, so $P_e = EV\sin\delta/X$ collapses too.
2. The turbine cannot respond in milliseconds, so $P_m$ stays put. Suddenly $P_m>P_e$.
3. The rotor **accelerates**, and $\delta$ grows.
4. The fault clears. $P_e$ recovers, and if $\delta$ has not grown too far, $P_e>P_m$ and the rotor **decelerates**.
5. It swings back, overshoots, and — with damping — settles at a new equilibrium.

Or, if $\delta$ grew past the point where $P_e$ can exceed $P_m$ again, it never decelerates. It runs away, and the machine falls out of step. The dividing line is the **critical clearing angle**, and finding it is [4.6](04-06-transient-stability-equal-area.md)'s job.

## The formal version

**Newton's second law for the rotor.**

$$J\frac{d^2\theta_m}{dt^2} = T_m-T_e,$$

with $J$ the moment of inertia (kg·m²) and $\theta_m$ the mechanical angle. Multiply by $\omega_m$ to convert torque to power:

$$J\omega_m\frac{d^2\theta_m}{dt^2} = P_m-P_e.$$

**The inertia constant.** Rather than quote $J$ (which spans orders of magnitude across machine sizes), define

$$\boxed{\;H = \frac{\text{stored kinetic energy at rated speed}}{\text{machine MVA rating}} = \frac{\tfrac12J\omega_m^2}{S_{\rm rated}}\ \ \text{seconds}.\;}$$

*In words: $H$ is how many seconds the machine could supply its rated output from its rotational kinetic energy alone.* It is 2–10 s for almost every machine ever built, regardless of size — a beautiful normalization, and one of the best arguments for the per-unit habit of [1.3](01-03-the-per-unit-system.md).

| Machine type | $H$ (s) |
|---|---|
| Steam turbine, 2-pole (3600 rpm) | 3–7 |
| Steam turbine, 4-pole (1800 rpm) | 2–4 |
| Hydro turbine (low speed) | 2–4 |
| Combustion turbine | 4–10 |
| Synchronous condenser | 1–2 |

**Base change for $H$**, which follows directly from the definition:

$$\boxed{\;H_{\rm new} = H_{\rm old}\frac{S_{\rm old}}{S_{\rm new}}.\;}$$

**The swing equation.** In per-unit, with $\delta$ the *electrical* rotor angle in radians and $\omega_s = 2\pi f$ the synchronous electrical speed:

$$\boxed{\;\frac{2H}{\omega_s}\frac{d^2\delta}{dt^2} = P_m-P_e = P_a\ \ \mathrm{pu},\;}$$

often written with the **inertia coefficient** $M = 2H/\omega_s$:

$$M\ddot\delta = P_a, \qquad M = \frac{2H}{\omega_s}\ \ \mathrm{s^2/rad}.$$

*In words: accelerating power divided by inertia gives angular acceleration* — $F = ma$ with $P_a$ for force, $M$ for mass, and $\ddot\delta$ for acceleration.

**With damping** (from damper windings and load frequency sensitivity):

$$M\ddot\delta+D\dot\delta = P_m-P_e,$$

with $D$ typically 1–3 pu. Damping is neglected in first-swing analysis because it acts over seconds while the first swing takes under one, and neglecting it is **conservative** — the real machine has more margin than the calculation shows.

**Electrical power.** The classical model represents the machine as a constant EMF $E'$ behind its transient reactance $X_d'$, connected to an infinite bus of voltage $V$ through a total reactance $X$:

$$\boxed{\;P_e = \frac{E'V}{X}\sin\delta = P_{\max}\sin\delta.\;}$$

$X$ includes $X_d'$ plus the transformer and line reactances — so **the network topology enters the stability problem through $X$**, and losing a line raises $X$, lowers $P_{\max}$, and reduces stability margin.

**Electrical vs. mechanical angle.** For a machine with $p$ poles:

$$\delta_{\rm elec} = \frac{p}{2}\delta_{\rm mech}.$$

The swing equation is written in electrical radians throughout, and $\omega_s$ is the electrical synchronous speed ($377$ rad/s at 60 Hz).

**Equilibrium and small-signal stability.** At equilibrium $P_m = P_{\max}\sin\delta_0$, so

$$\delta_0 = \arcsin\frac{P_m}{P_{\max}}.$$

Linearizing about $\delta_0$ with $\delta = \delta_0+\Delta\delta$:

$$M\Delta\ddot\delta = -P_{\max}\cos\delta_0\,\Delta\delta \quad\Longrightarrow\quad \Delta\ddot\delta+\frac{P_s}{M}\Delta\delta = 0,$$

where

$$\boxed{\;P_s = \left.\frac{dP_e}{d\delta}\right|_{\delta_0} = P_{\max}\cos\delta_0\;}$$

is the **synchronizing power coefficient**. Simple harmonic motion, with natural frequency

$$\boxed{\;\omega_n = \sqrt{\frac{P_s}{M}} = \sqrt{\frac{P_s\omega_s}{2H}}\ \ \mathrm{rad/s}.\;}$$

*In words: the rotor behaves like a mass on a spring whose stiffness is $P_{\max}\cos\delta_0$.* These are the **electromechanical oscillations** seen at 0.2–2 Hz on any real system after a disturbance.

Two consequences follow immediately:

**$P_s>0$ requires $\delta_0<90°$.** Beyond $90°$ the "spring" pushes the wrong way and the equilibrium is unstable — the same $90°$ limit found in [2.5](02-05-short-and-medium-line-models.md), now derived dynamically rather than as a maximum of a curve.

**Stiffness falls as loading rises.** At $\delta_0 = 20°$, $P_s = 0.94P_{\max}$; at $\delta_0 = 60°$, only $0.50P_{\max}$. A heavily loaded machine oscillates more slowly and has less margin — which is why stability limits bind before thermal limits on long lines.

## Picture

![A two-panel figure. Left: the classical machine model drawn as an internal EMF phasor E prime at angle delta behind a transient reactance, in series with transformer and line reactances, feeding an infinite bus at V angle zero, with the rotor drawn beside it as a disc having mechanical torque applied on one side and electromagnetic torque on the other, and the angle delta marked between the rotor position and the synchronously rotating reference. Right: the power-angle curve P equals P max sine delta, with the horizontal mechanical power line crossing it at two points — a stable equilibrium at delta zero on the rising part and an unstable one on the falling part past ninety degrees — with the slope at the stable point marked as the synchronizing power coefficient and arrows showing the restoring action for small displacements either side.](assets/04-05-fig1.svg)

Left: the classical model. Everything about the network is compressed into a single series reactance $X$, and everything about the machine into $E'$ and $H$.

Right: why the equilibrium is stable below $90°$. Displace $\delta$ upward and $P_e$ rises above $P_m$, decelerating the rotor back; displace it downward and $P_e$ falls, accelerating it back. Past $90°$ the curve descends and both restoring actions reverse sign.

## Worked examples

**Example 1 (from moment of inertia to swing).** A 100 MVA, 60 Hz, 2-pole steam turbine-generator has $J = 5000$ kg·m². Find $H$, $M$, and the initial rotor acceleration if a fault reduces its electrical output to zero while it carries 0.9 pu.

*Mechanical speed and stored energy.* A 2-pole machine at 60 Hz runs at 3600 rpm:

$$\omega_m = \frac{2\pi(3600)}{60} = 376.99\ \mathrm{rad/s}.$$

$$\mathrm{KE} = \tfrac12J\omega_m^2 = \tfrac12(5000)(376.99)^2 = 3.5531\times10^{8}\ \mathrm{J} = 355.3\ \mathrm{MJ}.$$

*Inertia constant.*

$$H = \frac{355.3\ \mathrm{MJ}}{100\ \mathrm{MVA}} = 3.553\ \mathrm{s}.$$

Right in the expected 3–7 s band for a 2-pole steam unit ✓.

*Inertia coefficient.*

$$M = \frac{2H}{\omega_s} = \frac{2(3.553)}{376.99} = 0.018850\ \mathrm{s^2/rad}.$$

*Initial acceleration.*

$$P_a = P_m-P_e = 0.9-0 = 0.9\ \mathrm{pu},$$
$$\ddot\delta = \frac{P_a}{M} = \frac{0.9}{0.018850} = 47.75\ \mathrm{rad/s^2} = 2736\ \mathrm{elec.\ deg/s^2}.$$

*What this means practically.* If the fault persists, the angle grows as $\delta = \delta_0+\tfrac12\ddot\delta t^2$. Time to advance $60°$ (1.047 rad):

$$t = \sqrt{\frac{2(1.047)}{47.75}} = \sqrt{0.04386} = 0.2094\ \mathrm{s}.$$

**About 200 ms to swing 60 degrees** — which is exactly the same order as protection clearing times from [4.4](04-04-protection-and-relaying.md). That is not a coincidence; protection is designed to clear inside the stability window, and the two disciplines are set by the same number.

*Base change.* On a 200 MVA system base:

$$H = 3.553\left(\frac{100}{200}\right) = 1.777\ \mathrm{s}.$$

The machine has not changed; only the yardstick has. Every machine in a multi-machine study must be converted to the common system base before the swing equations are integrated — the same discipline as [1.4](01-04-base-changes-one-line-diagram.md)'s.

**Example 2 (the power-angle curve, before, during and after a fault).** A generator with $E' = 1.2$ pu, $H = 4$ s, delivers $P_m = 1.0$ pu to an infinite bus at $V = 1.0$ pu through a total reactance $X = 0.5$ pu. A three-phase fault on one of two parallel lines raises the effective reactance during the fault to $2.0$ pu; after the faulted line is cleared, the remaining reactance is $0.7$ pu. Find the three power-angle curves, the initial angle, and the initial acceleration.

*Prefault.*

$$P_{\max}^{\rm pre} = \frac{E'V}{X} = \frac{(1.2)(1.0)}{0.5} = 2.400\ \mathrm{pu}.$$

$$\delta_0 = \arcsin\frac{P_m}{P_{\max}} = \arcsin\frac{1.0}{2.400} = \arcsin(0.4167) = 0.4300\ \mathrm{rad} = 24.62°.$$

*Synchronizing coefficient and oscillation frequency.*

$$P_s = P_{\max}\cos\delta_0 = 2.400\cos(24.62°) = 2.400(0.9092) = 2.182\ \mathrm{pu/rad}.$$

$$M = \frac{2(4)}{376.99} = 0.021221, \qquad \omega_n = \sqrt{\frac{2.182}{0.021221}} = \sqrt{102.83} = 10.14\ \mathrm{rad/s},$$
$$f_n = \frac{10.14}{2\pi} = 1.61\ \mathrm{Hz}.$$

Inside the 0.2–2 Hz band of real electromechanical modes ✓.

*During the fault.*

$$P_{\max}^{\rm fault} = \frac{1.2}{2.0} = 0.600\ \mathrm{pu}, \qquad P_e(\delta_0) = 0.600\sin(24.62°) = 0.250\ \mathrm{pu}.$$

$$P_a = 1.0-0.250 = 0.750\ \mathrm{pu}, \qquad \ddot\delta = \frac{0.750}{0.021221} = 35.34\ \mathrm{rad/s^2}.$$

**Note that $P_e$ does not fall to zero.** A fault on one of two parallel lines leaves a path to the system, so the machine keeps delivering 0.25 pu. The severity of a fault, for stability purposes, is measured by how much of $P_{\max}$ survives — and a fault at the machine's own terminals (where $P_e = 0$) is the worst case.

*Post-fault.*

$$P_{\max}^{\rm post} = \frac{1.2}{0.7} = 1.714\ \mathrm{pu}.$$

New equilibrium:

$$\delta_{\rm new} = \arcsin\frac{1.0}{1.714} = \arcsin(0.5833) = 35.68°.$$

*The three curves, side by side.*

| Condition | $X$ | $P_{\max}$ | Equilibrium $\delta$ |
|---|---|---|---|
| Prefault | 0.5 | 2.400 | $24.62°$ |
| During fault | 2.0 | 0.600 | none (no intersection with $P_m = 1$) |
| Post-fault | 0.7 | 1.714 | $35.68°$ |

*Three observations, each important for [4.6](04-06-transient-stability-equal-area.md).*

**During the fault there is no equilibrium at all.** $P_{\max}^{\rm fault} = 0.6 < P_m = 1.0$, so $P_a>0$ for every $\delta$ and the rotor accelerates continuously. Nothing stops it while the fault is on — which is why clearing time is the decisive variable.

**The post-fault system is permanently weaker.** Losing one line raised $X$ from 0.5 to 0.7, dropping $P_{\max}$ by 29% and pushing the steady-state angle from $24.6°$ to $35.7°$. The machine survives but with less margin, and the new synchronizing coefficient is

$$P_s^{\rm post} = 1.714\cos(35.68°) = 1.393\ \mathrm{pu/rad},$$

36% lower than before — so the system also oscillates more slowly and is more vulnerable to the *next* disturbance. **Cascading failures work exactly this way**: each loss weakens the system's ability to survive the following one.

**The margin is finite and computable.** The rotor accelerates at $35.3\ \mathrm{rad/s^2}$ during the fault and must be able to decelerate afterward on the post-fault curve. Whether it can depends on how far $\delta$ got, and that is precisely the equal-area question.

*A quick numerical look.* Integrating the swing equation with the fault sustained gives:

| $t$ (s) | $\delta$ |
|---|---|
| 0.00 | $24.6°$ |
| 0.05 | $27.0°$ |
| 0.10 | $34.5°$ |
| 0.15 | $46.2°$ |
| 0.20 | $62.0°$ |
| 0.25 | $81.6°$ |

The angle passes $90°$ at about 0.27 s. Once past the post-fault curve's unstable equilibrium, recovery is impossible. **The clearing time must be well under a quarter second** — a hard requirement that flows directly into the relay and breaker specifications of [4.4](04-04-protection-and-relaying.md).

## Watch out

- **You might mix electrical and mechanical angles.** The swing equation uses electrical radians. For a $p$-pole machine, $\delta_{\rm elec} = (p/2)\delta_{\rm mech}$.
- **You might forget to convert $H$ to the system base.** $H_{\rm new} = H_{\rm old}(S_{\rm old}/S_{\rm new})$, and every machine must be on a common base before the equations are coupled.
- **You might use $X_d$ instead of $X_d'$.** Transient stability plays out over the transient period, so use $X_d'$ with $E'$ held constant.
- **You might assume $P_e = 0$ during any fault.** Only for a fault at the machine terminals, or a three-phase fault with no parallel path. Example 2's $P_e = 0.25$ pu is the general case.
- **You might forget the post-fault network differs from the prefault one.** Clearing a fault usually means removing a line, permanently raising $X$.
- **You might assume $\delta_0<90°$ guarantees stability.** It guarantees *small-signal* stability. A large disturbance can push $\delta$ past the unstable equilibrium regardless.
- **You might include damping in a first-swing study.** Standard practice omits it; it is conservative and simplifies the analysis to the point where the equal-area criterion works.

## One-liner

> $M\ddot\delta = P_m-P_e$ with $M = 2H/\omega_s$ is Newton's law for a rotor, coupled to the network through $P_e = (E'V/X)\sin\delta$ — a mass on a spring of stiffness $P_{\max}\cos\delta_0$, stable only below $90°$ and stiffer the more lightly it is loaded.

## Problems

**P1 (🟢)** A 250 MVA, 60 Hz, 4-pole generator has $J = 28{,}000$ kg·m². (a) Find its rated speed and stored kinetic energy. (b) Find $H$. (c) Find $H$ on a 100 MVA system base. (d) Find $M$ on that base.

**P2 (🟡)** A generator with $E' = 1.15$ pu, $H = 5$ s (on a 100 MVA base), delivers $P_m = 0.8$ pu to an infinite bus at $V = 1.0$ through $X = 0.45$ pu. (a) Find $P_{\max}$ and $\delta_0$. (b) Find the synchronizing power coefficient and the natural oscillation frequency in Hz. (c) A three-phase fault at the machine terminals drops $P_e$ to zero. Find the initial acceleration in electrical degrees per second squared. (d) Find $\delta$ at $t = 0.1$ s and $t = 0.2$ s, assuming constant acceleration, and comment.

**P3 (🔴)** The boss problem: a generator with $H = 4$ s carries $P_m = 1.0$ pu when a fault suddenly drops $P_e$ to zero on a 60 Hz system. (a) Find $M$ and the initial acceleration in rad/s² and in electrical degrees per second squared. (b) Find the time for $\delta$ to advance $30°$, $60°$ and $90°$. (c) Repeat for a machine with $H = 2$ s and for one with $H = 8$ s, and state the scaling law. (d) The protection clears the fault in 5 cycles plus 2 cycles of relay time. Determine how far $\delta$ has advanced for each of the three machines, and discuss what this implies about the stability of low-inertia systems with high inverter-based generation.

<details>
<summary>Solutions</summary>

**P1** (a) A 4-pole machine at 60 Hz:

$$n = \frac{120f}{p} = \frac{120(60)}{4} = 1800\ \mathrm{rpm}, \qquad \omega_m = \frac{2\pi(1800)}{60} = 188.50\ \mathrm{rad/s}.$$

$$\mathrm{KE} = \tfrac12J\omega_m^2 = \tfrac12(28{,}000)(188.50)^2 = \tfrac12(28{,}000)(35{,}532) = 4.974\times10^{8}\ \mathrm{J} = 497.4\ \mathrm{MJ}.$$

(b) $$H = \frac{497.4}{250} = 1.990\ \mathrm{s}.$$

(Low, but in range for a 4-pole steam unit — the table gives 2–4 s.)

(c) $$H_{100} = 1.990\left(\frac{250}{100}\right) = 4.975\ \mathrm{s}.$$

(d) $$M = \frac{2H}{\omega_s} = \frac{2(4.975)}{376.99} = 0.026393\ \mathrm{s^2/rad}.$$

**P2** (a) $$P_{\max} = \frac{E'V}{X} = \frac{(1.15)(1.0)}{0.45} = 2.5556\ \mathrm{pu},$$
$$\delta_0 = \arcsin\frac{0.8}{2.5556} = \arcsin(0.3130) = 0.3184\ \mathrm{rad} = 18.24°.$$

(b) $$P_s = P_{\max}\cos\delta_0 = 2.5556\cos(18.24°) = 2.5556(0.94983) = 2.4274\ \mathrm{pu/rad}.$$

$$M = \frac{2(5)}{376.99} = 0.026526\ \mathrm{s^2/rad},$$
$$\omega_n = \sqrt{\frac{2.4274}{0.026526}} = \sqrt{91.51} = 9.566\ \mathrm{rad/s}, \qquad f_n = \frac{9.566}{2\pi} = 1.523\ \mathrm{Hz}.$$

(c) $$P_a = 0.8-0 = 0.8\ \mathrm{pu}, \qquad \ddot\delta = \frac{0.8}{0.026526} = 30.16\ \mathrm{rad/s^2} = 1728\ \mathrm{elec.\ deg/s^2}.$$

(d) With constant acceleration, $\delta = \delta_0+\tfrac12\ddot\delta t^2$:

$$t = 0.1: \quad \Delta\delta = \tfrac12(1728)(0.01) = 8.64°, \qquad \delta = 18.24+8.64 = 26.88°.$$
$$t = 0.2: \quad \Delta\delta = \tfrac12(1728)(0.04) = 34.56°, \qquad \delta = 18.24+34.56 = 52.80°.$$

*Comment.* The angle grows as $t^2$, so the second 100 ms costs **three times** as much angle as the first (25.9° versus 8.6°). Clearing time is therefore far more valuable than it looks: halving it cuts the angle excursion by a factor of four, not two.

That quadratic dependence is the single strongest argument for high-speed protection, and it is why utilities pay for 2-cycle breakers and pilot relaying on critical lines rather than accepting 5-cycle equipment. The extra three cycles cost 50 ms, which at 1728 deg/s² near the end of the swing is a large fraction of the available margin.

**P3** (a) $$M = \frac{2H}{\omega_s} = \frac{2(4)}{376.99} = 0.021221\ \mathrm{s^2/rad},$$
$$\ddot\delta = \frac{P_a}{M} = \frac{1.0}{0.021221} = 47.12\ \mathrm{rad/s^2} = 2700\ \mathrm{elec.\ deg/s^2}.$$

*Equivalently, and worth knowing as a formula:*

$$\ddot\delta = \frac{\omega_sP_a}{2H} = \frac{377(1.0)}{8} = 47.1\ \mathrm{rad/s^2}\ \checkmark.$$

(b) From $\Delta\delta = \tfrac12\ddot\delta t^2$, so $t = \sqrt{2\Delta\delta/\ddot\delta}$ with $\Delta\delta$ in radians:

| $\Delta\delta$ | radians | $t$ |
|---|---|---|
| $30°$ | 0.5236 | $\sqrt{2(0.5236)/47.12} = 0.149$ s |
| $60°$ | 1.0472 | $\sqrt{2(1.0472)/47.12} = 0.211$ s |
| $90°$ | 1.5708 | $\sqrt{2(1.5708)/47.12} = 0.258$ s |

(c) $$H = 2:\ \ddot\delta = \frac{377}{4} = 94.25\ \mathrm{rad/s^2}, \qquad H = 8:\ \ddot\delta = \frac{377}{16} = 23.56\ \mathrm{rad/s^2}.$$

| $\Delta\delta$ | $H=2$ | $H=4$ | $H=8$ |
|---|---|---|---|
| $30°$ | 0.105 s | 0.149 s | 0.211 s |
| $60°$ | 0.149 s | 0.211 s | 0.298 s |
| $90°$ | 0.183 s | 0.258 s | 0.365 s |

*The scaling law.* Since $\ddot\delta \propto 1/H$ and $t\propto1/\sqrt{\ddot\delta}$:

$$\boxed{\;t \propto \sqrt{H}.\;}$$

Doubling the inertia buys $\sqrt2 = 1.414$ times as much time — a real gain, but a **sublinear** one. Halving the inertia costs a factor of $1/\sqrt2 = 0.707$, i.e. 29% of the available time.

(d) *Clearing time:* 5 cycles (breaker) + 2 cycles (relay) = 7 cycles at 60 Hz:

$$t_c = \frac{7}{60} = 0.1167\ \mathrm{s}.$$

*Angle advanced during the fault*, $\Delta\delta = \tfrac12\ddot\delta t_c^2$:

| $H$ | $\ddot\delta$ (rad/s²) | $\Delta\delta$ |
|---|---|---|
| 2 s | 94.25 | $\tfrac12(94.25)(0.013617) = 0.6417$ rad $= \mathbf{36.8°}$ |
| 4 s | 47.12 | $0.3208$ rad $= \mathbf{18.4°}$ |
| 8 s | 23.56 | $0.1604$ rad $= \mathbf{9.2°}$ |

**A four-fold reduction in inertia quadruples the angle excursion** for the same clearing time — because $\Delta\delta\propto1/H$ at fixed $t$.

*What this implies for low-inertia systems.*

**The problem is real and growing.** Wind and solar connect through power-electronic inverters, which have **no rotating mass** and contribute nothing to system inertia. As synchronous machines are displaced, system $H$ falls. Grids that once had an effective $H$ of 5–6 s now see 2–3 s at high renewable penetration, and small islanded systems have gone lower still.

**Frequency changes faster.** The same physics governs system frequency: $\mathrm{d}f/\mathrm{d}t \propto P_a/H$. In 2014 the UK grid saw a maximum rate of change of frequency around 0.125 Hz/s; by 2020, planning studies were dealing with 1 Hz/s. Rate-of-change-of-frequency protection on distributed generation, originally set to detect islanding, began tripping on ordinary system events — a protection setting invalidated by a change in system physics.

**Protection must get faster, but there is a floor.** Halving $H$ demands clearing times a factor of $\sqrt2$ shorter to preserve the same angle margin. Breakers are already at 2 cycles (33 ms) and cannot go much below that; relay decision times are already 1 cycle. The margin cannot be recovered from protection speed alone.

**Which is why the response has been to synthesize inertia.** Several approaches are in use or in development:

- **Synthetic (virtual) inertia** — inverter controls that measure $\mathrm{d}f/\mathrm{d}t$ and inject power proportionally, mimicking a rotating mass. Effective, but it requires headroom or storage: the energy has to come from somewhere.
- **Grid-forming inverters** — controls that establish voltage and frequency rather than following them, providing an inertial and synchronizing response intrinsically. Increasingly the preferred approach.
- **Synchronous condensers** — real spinning machines with no prime mover, installed purely for inertia, short-circuit current, and reactive support. Several grids have retained or recommissioned retired generators as condensers for exactly this.
- **Fast frequency response** — batteries responding in under a second, which does not replace inertia (which acts instantaneously) but reduces how much is needed.

*The deeper point.* The swing equation was derived for synchronous machines and expresses a physical fact about spinning steel. **The grid's stability has always depended on a property nobody chose** — it came free with the technology. As that technology is replaced, the property must be deliberately engineered back in, and the equation in this lesson is the specification for how much is needed.

</details>

## Flashback

**From Lesson 2.5 (Short and medium-length line models):** A generator delivers power to an infinite bus through a reactance of $X = 0.4$ pu with $E' = 1.1$ and $V = 1.0$ pu. (a) Find $P_{\max}$ and the power delivered at $\delta = 30°$. (b) Find the angle at which the machine delivers 1.5 pu. (c) Find the synchronizing power coefficient at each of those two angles.

<details>
<summary>Solution</summary>

(a) $$P_{\max} = \frac{(1.1)(1.0)}{0.4} = 2.75\ \mathrm{pu}, \qquad P(30°) = 2.75\sin(30°) = 1.375\ \mathrm{pu}.$$

(b) $$\sin\delta = \frac{1.5}{2.75} = 0.5455 \quad\Longrightarrow\quad \delta = 33.06°.$$

(c) $$P_s(30°) = 2.75\cos(30°) = 2.75(0.8660) = 2.382\ \mathrm{pu/rad},$$
$$P_s(33.06°) = 2.75\cos(33.06°) = 2.75(0.8381) = 2.305\ \mathrm{pu/rad}.$$

*The connection between the two lessons.* [2.5](02-05-short-and-medium-line-models.md) introduced $P = (V_SV_R/X)\sin\delta$ as a **steady-state** transfer relation, and treated $\delta = 90°$ as a static maximum. This lesson shows that the *same* curve, with $\delta$ now interpreted as a rotor position, is the restoring force in a dynamical system — and its slope $P_s$ is a spring constant.

The two views agree on the $90°$ limit but explain it differently, and the dynamical explanation is the more useful one. Statically, $90°$ is where the curve peaks. Dynamically, it is where the spring constant passes through zero and reverses sign, so the system loses its restoring force entirely.

Note also how gently $P_s$ falls between $30°$ and $33°$ — only 3% for a 9% increase in power. The stiffness holds up well at moderate angles and then collapses: at $60°$ it is $1.375$ pu/rad (42% down), and at $80°$ only $0.478$ (80% down). **Stability margin does not degrade linearly with loading; it falls off a cliff near the end**, which is why operating limits are set well back from $90°$.

</details>

## Connections

- **Backward:** the power-angle relation is [2.5](02-05-short-and-medium-line-models.md)'s; the mechanical power $P_m$ is what [3.5](03-05-economic-dispatch.md) dispatched; the machine reactance $X_d'$ is the transient value from [4.1](04-01-symmetrical-faults.md)'s three-regime picture.
- **Forward:** [4.6](04-06-transient-stability-equal-area.md) integrates this equation graphically to find the critical clearing angle and time.
- **Sideways:** this is the nonlinear pendulum — $M\ddot\delta+P_{\max}\sin\delta = P_m$ is the driven pendulum equation of [`analytical-mechanics` 1.4](../../analytical-mechanics/lessons/01-04-lagrangian-applications.md), with the same small-angle harmonic limit, the same separatrix in phase space, and the same "goes over the top" instability. The energy-conservation argument that gives the equal-area criterion in [4.6](04-06-transient-stability-equal-area.md) is the pendulum's first integral.
