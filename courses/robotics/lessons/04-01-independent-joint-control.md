# Robotics & Kinematics · Lesson 4.1: Independent-joint control

> ⏱ ~15 min · Module 4: Control and mobile robots · Builds on: [3.2 The manipulator dynamics equation](03-02-manipulator-dynamics-equation.md), [`control-systems` 4.1](../../control-systems/lessons/04-01-pid-control.md) · Unlocks: [4.2 Computed-torque control](04-02-computed-torque-control.md), [4.3 Force and hybrid control](04-03-force-hybrid-control.md)

## Why this matters

[3.2](03-02-manipulator-dynamics-equation.md) presented a coupled, nonlinear, configuration-dependent system of $n$ equations. A rigorous controller for that is the subject of [4.2](04-02-computed-torque-control.md).

But the overwhelming majority of industrial robots ever built do something far cruder: **control each joint as an independent, linear, second-order system with a PID loop**, ignoring the coupling entirely. It works, and understanding *why* it works — and where it stops working — is the honest starting point for manipulator control.

The answer is **gearing**. A high gear ratio divides the reflected link inertia by $r^2$, and a factor of a hundred squared makes the wildly varying link dynamics almost invisible to the motor. What was a factor-of-three variation in inertia becomes a factor of 1.09, and a decentralized controller is then entirely reasonable.

The catch is that gearing is also what makes an arm heavy, slow to respond to external forces, and unable to do force control — which is why direct-drive and low-reduction arms exist, and why they need [4.2](04-02-computed-torque-control.md).

## The idea

Take one joint in isolation. Motor, gearbox, link. The motor sees:

$$J_{\rm eff}\ddot\theta_m+B\dot\theta_m = \tau_m-\frac{\tau_{\rm link}}{r},$$

with $\theta_m$ the **motor** angle, $r$ the gear ratio ($\theta_m = r\theta_{\rm joint}$), and $\tau_{\rm link}$ everything the manipulator dynamics demand at the joint.

The two facts that make this work:

**The link inertia is divided by $r^2$.** Reflecting the joint-side inertia $M_{kk}$ to the motor side gives $M_{kk}/r^2$, so

$$J_{\rm eff} = J_m+\frac{M_{kk}(\mathbf{q})}{r^2}.$$

With $r = 100$ and $M_{kk}$ varying from $0.66$ to $1.62$ kg·m², the reflected contribution varies from $6.6\times10^{-5}$ to $1.62\times10^{-4}$ — against a motor inertia $J_m$ of perhaps $10^{-3}$. **The configuration dependence has shrunk from 145% to 9%.**

**Everything else becomes a bounded disturbance.** Gravity, Coriolis terms and inter-joint coupling all appear divided by $r$, and a well-tuned loop with integral action rejects them.

So the design problem reduces to something from [`control-systems` 4.1](../../control-systems/lessons/04-01-pid-control.md): a second-order plant with a disturbance, controlled by PID. The manipulator-specific content is entirely in knowing *which* effects the gearing suppresses and which it does not.

**Where it fails**, and each failure has a name:

**Low gear ratio.** Direct-drive and harmonic-drive arms with $r<20$ do not suppress the coupling, and $J_{\rm eff}$ varies by nearly as much as $M_{kk}$ does.

**High speed.** Coriolis terms scale as $\dot q^2$ ([3.1](03-01-lagrangian-dynamics.md) P3) and eventually exceed what a bounded-gain loop can reject.

**Accuracy requirements.** Gravity produces a steady-state error inversely proportional to $K_p$; getting it below a few tenths of a degree by gain alone requires gains that excite the drivetrain's own flexible modes.

**Force control.** Gearing makes the joint stiff and non-backdrivable. That is a virtue for position control and fatal for anything involving contact ([4.3](04-03-force-hybrid-control.md)).

## The formal version

**The single-joint model, motor side.**

$$\boxed{\;J_{\rm eff}\ddot\theta_m+B\dot\theta_m = \tau_m-d(t), \qquad J_{\rm eff} = J_m+\frac{M_{kk}(\mathbf{q})}{r^2},\;}$$

where $d(t)$ collects gravity, Coriolis and coupling torques reflected to the motor:

$$d = \frac{1}{r}\left[g_k(\mathbf{q})+\sum_{j\neq k}M_{kj}\ddot q_j+\left(C\dot{\mathbf{q}}\right)_k\right].$$

**PD control.**

$$\tau_m = K_p\left(\theta_d-\theta\right)+K_d\left(\dot\theta_d-\dot\theta\right) = -K_pe-K_d\dot e,$$

giving the closed-loop error dynamics

$$\boxed{\;J_{\rm eff}\ddot e+\left(B+K_d\right)\dot e+K_pe = d(t).\;}$$

$$\omega_n = \sqrt{\frac{K_p}{J_{\rm eff}}}, \qquad \zeta = \frac{B+K_d}{2\sqrt{K_pJ_{\rm eff}}}.$$

**Gain selection** for a target $\omega_n$ and $\zeta$:

$$\boxed{\;K_p = J_{\rm eff}\omega_n^2, \qquad K_d = 2\zeta J_{\rm eff}\omega_n-B.\;}$$

**Steady-state error under PD.** With a constant disturbance $d_0$ and $\dot e = \ddot e = 0$:

$$\boxed{\;e_{ss} = \frac{d_0}{K_p} = \frac{g_k/r}{K_p}.\;}$$

*In words: gravity produces a permanent droop inversely proportional to the position gain.* Raising $K_p$ shrinks it — but $K_p$ is bounded above by the drivetrain resonance, so this is a limited remedy.

**PID.** Adding integral action removes the steady-state error at the cost of a third-order loop:

$$\tau_m = -K_pe-K_d\dot e-K_i\int e\,dt,$$

$$J_{\rm eff}\dddot e+\left(B+K_d\right)\ddot e+K_p\dot e+K_ie = \dot d.$$

Routh–Hurwitz ([`control-systems` 2.4](../../control-systems/lessons/02-04-stability-routh-hurwitz.md)) gives the stability condition

$$\boxed{\;K_i<\frac{\left(B+K_d\right)K_p}{J_{\rm eff}}.\;}$$

**Too much integral gain destabilizes**, and the bound is a real constraint rather than a formality.

**Gravity feedforward** — cheaper and better than integral action for this particular disturbance:

$$\boxed{\;\tau_m = -K_pe-K_d\dot e+\frac{\hat g_k(\mathbf{q})}{r}.\;}$$

*In words: compute the gravity torque from the model and add it directly.* It removes the dominant disturbance without the phase lag an integrator introduces, and it needs only $\mathbf{g}(\mathbf{q})$ — the cheapest part of the dynamics ([3.3](03-03-newton-euler-recursive-dynamics.md) Flashback). **This is the single highest-value line in a manipulator controller.**

**The upper bound on the gains.** In practice $K_p$ is limited not by the rigid-body model but by unmodelled dynamics:

| Limit | Mechanism | Typical |
|---|---|---|
| Drivetrain resonance | joint flexibility, gear compliance | $\omega_n\lesssim\tfrac13\omega_{\rm res}$ |
| Sampling rate | digital delay | $\omega_n\lesssim\tfrac{1}{10}\omega_{\rm sample}$ |
| Sensor noise | differentiating position for $\dot\theta$ | limits $K_d$ |
| Actuator saturation | torque limit | limits transient gains |

**The joint flexibility limit is usually the binding one**, and it is why a robot with harmonic drives (which are compliant) cannot be tuned as aggressively as one with rigid gearing.

**Why gearing suppresses coupling — the quantitative version.**

| $r$ | Reflected $M_{kk}$ range | $J_{\rm eff}$ range | Variation |
|---|---|---|---|
| 1 (direct drive) | 0.66–1.62 | 0.661–1.621 | **145%** |
| 20 | $1.7$–$4.1\times10^{-3}$ | $2.7$–$5.1\times10^{-3}$ | 91% |
| 50 | $2.6$–$6.5\times10^{-4}$ | $1.26$–$1.65\times10^{-3}$ | 30% |
| 100 | $6.6$–$16.2\times10^{-5}$ | $1.066$–$1.162\times10^{-3}$ | **9%** |

(Using $J_m = 10^{-3}$ kg·m² and the $M_{11}$ range of [3.2](03-02-manipulator-dynamics-equation.md) P1.)

**At $r = 100$ the arm's own dynamics are a 9% perturbation on the motor's inertia.** That is the entire justification for independent-joint control, in one table.

## Picture

![A two-panel figure. Left: a block diagram of a single joint control loop — a summing junction taking desired and actual position, feeding a PID block, then a motor block, then a gearbox block dividing by r, then the link dynamics, with a disturbance arrow labelled gravity plus coupling plus Coriolis entering after the gearbox and annotated as divided by r, and a feedback path from the joint position back to the summing junction, plus an optional dashed feedforward path from the desired position through a gravity model block into the torque summation. Right: a bar chart of effective motor inertia against gear ratio, showing for each of four gear ratios a bar whose height is the motor inertia with a shaded band on top representing the range of reflected link inertia, the band dominating at ratio one and shrinking to a thin sliver at ratio one hundred, annotated with the percentage variation at each.](assets/04-01-fig1.svg)

Left: the loop, with everything manipulator-specific pushed into a disturbance that the gearbox has already divided by $r$.

Right: why it works. The shaded band is the configuration dependence; the gearbox squashes it into insignificance.

## Worked examples

**Example 1 (designing a joint loop, and what gearing bought).** A joint has motor inertia $J_m = 1.0\times10^{-3}$ kg·m², motor damping $B = 1.0\times10^{-4}$ N·m·s/rad, and gear ratio $r = 100$. The link inertia $M_{11}$ varies from $0.66$ to $1.62$ kg·m². Design a PD loop for $\omega_n = 50$ rad/s, $\zeta = 1$.

*Effective inertia at the mid-range configuration* ($M_{11} = 1.14$):

$$J_{\rm eff} = 1.0\times10^{-3}+\frac{1.14}{10^4} = 1.0\times10^{-3}+1.14\times10^{-4} = 1.114\times10^{-3}\ \mathrm{kg\cdot m^2}.$$

*Gains.*

$$K_p = J_{\rm eff}\omega_n^2 = 1.114\times10^{-3}(2500) = 2.785\ \mathrm{N\cdot m/rad},$$
$$K_d = 2\zeta J_{\rm eff}\omega_n-B = 2(1)(1.114\times10^{-3})(50)-1.0\times10^{-4} = 0.1114-0.0001 = 0.1113\ \mathrm{N\cdot m\cdot s/rad}.$$

*How the loop behaves across the workspace, with these fixed gains:*

| $M_{11}$ | $J_{\rm eff}$ | $\omega_n$ | $\zeta$ |
|---|---|---|---|
| 0.66 | $1.066\times10^{-3}$ | 51.11 | 1.022 |
| 1.14 | $1.114\times10^{-3}$ | 50.00 | 1.000 |
| 1.62 | $1.162\times10^{-3}$ | 48.96 | 0.979 |

**The bandwidth varies by 4% and the damping ratio by 4%.** Compare [3.2](03-02-manipulator-dynamics-equation.md) P3, where the *ungeared* joint's damping swung from 0.84 to 1.31 — a 56% spread. **The gearbox reduced a 56% variation to 4%.**

At $\zeta = 0.979$ the overshoot is

$$M_p = \exp\left(\frac{-\pi(0.979)}{\sqrt{1-0.958}}\right) = \exp\left(\frac{-3.076}{0.205}\right) = \exp(-15.0)\approx0,$$

**effectively zero**. A fixed-gain PD loop is entirely adequate for position control on this joint, which is the practical claim this lesson is defending.

*But now the gravity disturbance.* At the worst configuration, $g_1 = 23.5$ N·m at the joint, so at the motor

$$d_0 = \frac{23.5}{100} = 0.235\ \mathrm{N\cdot m}.$$

$$e_{ss} = \frac{d_0}{K_p} = \frac{0.235}{2.785} = 0.0844\ \mathrm{rad}\ \text{(motor)} = \frac{0.0844}{100} = 8.44\times10^{-4}\ \mathrm{rad\ (joint)} = 0.048°.$$

**About 0.05° of droop** at the joint. For a tool 0.9 m out, that is

$$0.9(8.44\times10^{-4}) = 0.76\ \mathrm{mm}$$

of sag.

*Is that acceptable?* For palletizing, welding, or spray painting, comfortably. For a $\pm0.1$ mm assembly insertion, no.

*Three ways to reduce it, and their costs.*

| Remedy | Effect | Cost |
|---|---|---|
| Raise $K_p$ 10× | droop → 0.076 mm | $\omega_n$ → 158 rad/s: excites drivetrain resonance |
| Add integral action | droop → 0 | third-order loop, must satisfy $K_i<(B+K_d)K_p/J_{\rm eff}$, adds phase lag |
| Gravity feedforward | droop → residual model error | one evaluation of $\mathbf{g}(\mathbf{q})$ per cycle |

**Gravity feedforward is the right answer**, and it is nearly free. If the model is accurate to 5%, the residual disturbance is $0.05(0.235) = 0.0118$ N·m and the droop drops to $0.038$ mm — a twentyfold improvement for one function call.

*The integral bound, for completeness:*

$$K_i<\frac{(B+K_d)K_p}{J_{\rm eff}} = \frac{(0.1114)(2.785)}{1.114\times10^{-3}} = 278.5,$$

so $K_i$ must stay well below 278 — and in practice one would use perhaps a tenth of that, since the bound is the *stability* limit, not a performance recommendation.

**Example 2 (where independent-joint control breaks down).** The same joint, but now consider three departures from the design assumptions.

*(a) A direct-drive arm,* $r = 1$.

$$J_{\rm eff} = 1.0\times10^{-3}+M_{11}, \qquad \text{ranging }0.661\text{ to }1.621\ \mathrm{kg\cdot m^2}.$$

**The motor inertia is now negligible** — the link dominates completely, and $J_{\rm eff}$ varies by 145%. With gains tuned at mid-range:

$$\zeta\propto\frac{1}{\sqrt{J_{\rm eff}}}: \qquad \zeta_{\rm max} = \zeta_{\rm mid}\sqrt{\frac{1.14}{0.661}} = 1.31\,\zeta_{\rm mid}, \qquad \zeta_{\rm min} = \zeta_{\rm mid}\sqrt{\frac{1.14}{1.621}} = 0.84\,\zeta_{\rm mid}.$$

Exactly the ungeared spread of [3.2](03-02-manipulator-dynamics-equation.md) P3. **Direct-drive arms require model-based control**, and that is why they were rare until computers were fast enough for [4.2](04-02-computed-torque-control.md).

*And the gravity disturbance is 100 times larger* at the motor: $d_0 = 23.5$ N·m, so with a proportionally larger $K_p$ the droop is comparable — but the *transient* excursions from Coriolis coupling are not attenuated at all.

*(b) High speed.* At $\dot{\mathbf{q}} = (10,-7)$ rad/s, [3.1](03-01-lagrangian-dynamics.md) P3 found the Coriolis term rivalling gravity — roughly 20 N·m at the joint. Reflected to the motor at $r = 100$ that is $0.2$ N·m, and it is **not constant**: it varies rapidly with configuration and velocity.

$$e_{\rm transient}\approx\frac{0.2}{K_p} = \frac{0.2}{2.785} = 0.072\ \mathrm{rad\ (motor)} = 0.041°\ \text{(joint)},$$

comparable to the gravity droop — **but integral action cannot remove it**, because it is not a constant disturbance. An integrator with a bandwidth low enough to be stable simply cannot track a term that changes over tens of milliseconds.

**This is the fundamental limitation.** PID rejects *slow* disturbances. Coriolis terms at high speed are fast disturbances, and the only way to reject them is to compute them and cancel them — [4.2](04-02-computed-torque-control.md).

*(c) Contact.* Suppose the tool touches a surface and a $10$ N force acts at the tool, $0.9$ m out. The reflected disturbance is

$$d_0 = \frac{10(0.9)}{100} = 0.09\ \mathrm{N\cdot m}, \qquad e_{ss} = \frac{0.09}{2.785} = 0.032\ \mathrm{rad\ (motor)} = 0.29\ \mathrm{mm\ at\ the\ tool}.$$

Read the other way: **the joint's apparent Cartesian stiffness is $10/0.00029 = 34{,}000$ N/m.** That is very stiff.

*Why that is bad for contact.* Approaching a rigid surface at $50$ mm/s and overshooting the contact point by even $1$ mm generates

$$F = 34{,}000(0.001) = 34\ \mathrm{N}$$

of contact force, far beyond what a delicate assembly tolerates. And the arm cannot be **backdriven**: pushing on the tool with $10$ N moves it 0.29 mm, so a human cannot guide it and a misalignment cannot be accommodated compliantly.

**Stiffness is a virtue for position control and a liability for contact**, and the gear ratio is what sets it. That tension is the entire subject of [4.3](04-03-force-hybrid-control.md), and it is why collaborative robots use low gear ratios and torque sensing rather than high gear ratios and position control.

## Watch out

- **You might use the joint-side inertia in the motor-side loop.** The reflected inertia is $M_{kk}/r^2$, and the reflected torque is $\tau/r$. Mixing sides is the most common error in geared-joint design.
- **You might tune at one configuration and assume it holds.** Check across the workspace, especially at low gear ratios.
- **You might raise $K_p$ to kill the droop.** It works until the drivetrain resonance is excited, and then it does not work at all.
- **You might add integral action without checking the bound.** $K_i<(B+K_d)K_p/J_{\rm eff}$ is a hard stability limit.
- **You might expect integral action to reject Coriolis terms.** It rejects *constant* disturbances; Coriolis terms are fast and configuration-dependent.
- **You might differentiate a noisy encoder for $\dot\theta$.** Differentiation amplifies noise proportionally to frequency; filter it, or use a state observer ([`control-systems` 5.4](../../control-systems/lessons/05-04-pole-placement-observers.md)).
- **You might ignore backlash and friction.** Both are worse on geared joints than the rigid model suggests, and Coulomb friction in particular causes limit cycles with integral action.
- **You might assume high stiffness is always good.** For contact tasks it is exactly wrong.

## One-liner

> Gearing divides the reflected link inertia by $r^2$ and every disturbance torque by $r$, turning a coupled nonlinear arm into $n$ nearly independent second-order plants — so PID plus gravity feedforward suffices, until the gear ratio is low, the speed is high, or the tool touches something.

## Problems

**P1 (🟢)** A joint has $J_m = 2\times10^{-3}$ kg·m², $B = 2\times10^{-4}$ N·m·s/rad, $r = 80$, and link inertia $1.5$ kg·m². (a) Find $J_{\rm eff}$. (b) Find the gains for $\omega_n = 40$ rad/s, $\zeta = 1$. (c) Find the steady-state error for a joint-side gravity torque of $18$ N·m.

**P2 (🟡)** For the joint of P1, the link inertia varies from $0.8$ to $2.2$ kg·m². (a) Find $J_{\rm eff}$ at both extremes. (b) Find $\omega_n$ and $\zeta$ at both with the P1 gains. (c) Find the peak overshoot at the worst case. (d) Repeat (a) and (b) for $r = 10$ and comment.

**P3 (🔴)** A collaborative robot joint has $J_m = 5\times10^{-4}$ kg·m², $r = 50$, link inertia $0.9$ kg·m², and must both position accurately and permit a human to push it aside. (a) Find $J_{\rm eff}$ and design a PD loop for $\omega_n = 30$ rad/s, $\zeta = 1$. (b) Find the Cartesian stiffness at the tool, 0.8 m out. (c) A safety standard requires that a $50$ N push move the tool at least $20$ mm. Determine whether the design passes, and if not by how much. (d) Propose a redesign, quantify it, and explain the trade-off it forces on position accuracy.

<details>
<summary>Solutions</summary>

**P1** (a) $$J_{\rm eff} = J_m+\frac{M_{kk}}{r^2} = 2\times10^{-3}+\frac{1.5}{6400} = 2\times10^{-3}+2.344\times10^{-4} = 2.234\times10^{-3}\ \mathrm{kg\cdot m^2}.$$

**The link contributes only 10.5%** of the total — the gearing at work.

(b) $$K_p = J_{\rm eff}\omega_n^2 = 2.234\times10^{-3}(1600) = 3.575\ \mathrm{N\cdot m/rad},$$
$$K_d = 2\zeta J_{\rm eff}\omega_n-B = 2(1)(2.234\times10^{-3})(40)-2\times10^{-4} = 0.17875-0.00020 = 0.17855\ \mathrm{N\cdot m\cdot s/rad}.$$

(c) $$d_0 = \frac{18}{80} = 0.225\ \mathrm{N\cdot m}\ \text{(motor side)},$$

$$e_{ss}^{\rm motor} = \frac{0.225}{3.575} = 0.06294\ \mathrm{rad}, \qquad e_{ss}^{\rm joint} = \frac{0.06294}{80} = 7.87\times10^{-4}\ \mathrm{rad} = 0.045°.$$

**P2** (a) $$J_{\rm eff}(0.8) = 2\times10^{-3}+\frac{0.8}{6400} = 2\times10^{-3}+1.250\times10^{-4} = 2.125\times10^{-3},$$
$$J_{\rm eff}(2.2) = 2\times10^{-3}+\frac{2.2}{6400} = 2\times10^{-3}+3.438\times10^{-4} = 2.344\times10^{-3}.$$

(b) $$\omega_n = \sqrt{\frac{3.575}{J_{\rm eff}}}, \qquad \zeta = \frac{0.17875}{2\sqrt{3.575\,J_{\rm eff}}}.$$

| $M_{kk}$ | $J_{\rm eff}$ | $\omega_n$ | $\zeta$ |
|---|---|---|---|
| 0.8 | $2.125\times10^{-3}$ | 41.01 | 1.0256 |
| 1.5 (design) | $2.234\times10^{-3}$ | 40.00 | 1.0000 |
| 2.2 | $2.344\times10^{-3}$ | 39.05 | 0.9765 |

**A 5% spread in both** — comfortably within what a fixed-gain loop tolerates.

(c) At the worst case $\zeta = 0.9765$:

$$M_p = \exp\left(\frac{-\pi(0.9765)}{\sqrt{1-0.9536}}\right) = \exp\left(\frac{-3.0678}{0.21541}\right) = \exp(-14.24) = 6.6\times10^{-7}.$$

**Essentially zero overshoot** (7 parts in ten million). At damping ratios near 1 the overshoot formula falls off exponentially, so a 2% deviation in $\zeta$ is completely invisible in the response.

(d) At $r = 10$:

$$J_{\rm eff}(0.8) = 2\times10^{-3}+\frac{0.8}{100} = 2\times10^{-3}+8\times10^{-3} = 1.000\times10^{-2},$$
$$J_{\rm eff}(1.5) = 2\times10^{-3}+1.5\times10^{-2} = 1.700\times10^{-2},$$
$$J_{\rm eff}(2.2) = 2\times10^{-3}+2.2\times10^{-2} = 2.400\times10^{-2}.$$

Redesigning at mid-range: $K_p = 1.7\times10^{-2}(1600) = 27.2$, $K_d = 2(1.7\times10^{-2})(40)-2\times10^{-4} = 1.3598$.

| $M_{kk}$ | $J_{\rm eff}$ | $\omega_n$ | $\zeta$ |
|---|---|---|---|
| 0.8 | $1.00\times10^{-2}$ | 52.15 | 1.3038 |
| 1.5 | $1.70\times10^{-2}$ | 40.00 | 1.0000 |
| 2.2 | $2.40\times10^{-2}$ | 33.67 | 0.8416 |

**A 55% spread in bandwidth and a 55% spread in damping** — and at $\zeta = 0.8416$ the overshoot is

$$M_p = \exp\left(\frac{-\pi(0.8416)}{\sqrt{1-0.7083}}\right) = \exp\left(\frac{-2.6440}{0.5401}\right) = \exp(-4.895) = 0.0075 = 0.75\%.$$

*The comparison, and the general statement.*

| $r$ | Link share of $J_{\rm eff}$ | $\omega_n$ spread | $\zeta$ spread |
|---|---|---|---|
| 80 | 6–15% | 5% | 5% |
| 10 | 80–92% | **55%** | **55%** |

**The variation scales as the link's share of the total inertia**, which scales as $1/r^2$. Dropping the gear ratio by 8 raised the variation by 11.

*And the deeper point.* At $r = 10$ the arm's own dynamics dominate the motor's, so the "independent joint" abstraction is no longer describing the physical system. It still *works* here — 0.75% overshoot is fine — but the margin has largely evaporated, and adding Coriolis coupling and gravity to the picture would exhaust it.

**Low-gear-ratio arms need model-based control**, and that is not a preference but a consequence of where the inertia lives.

**P3** (a) $$J_{\rm eff} = 5\times10^{-4}+\frac{0.9}{2500} = 5\times10^{-4}+3.6\times10^{-4} = 8.6\times10^{-4}\ \mathrm{kg\cdot m^2}.$$

**The link contributes 42%** — this is a low-reduction joint, and its dynamics are not negligible.

$$K_p = 8.6\times10^{-4}(900) = 0.774\ \mathrm{N\cdot m/rad},$$
$$K_d = 2(1)(8.6\times10^{-4})(30) = 0.0516\ \mathrm{N\cdot m\cdot s/rad}$$

(taking $B\approx0$ for a low-friction joint).

(b) A tool force $F$ at radius $L = 0.8$ m produces a joint torque $FL$, hence a motor-side torque $FL/r$ and a motor deflection $FL/(rK_p)$. The joint deflects by $1/r$ of that, and the tool moves $L$ times the joint angle:

$$\delta x = L\cdot\frac{FL}{r^2K_p} = \frac{FL^2}{r^2K_p}.$$

$$K_{\rm Cartesian} = \frac{F}{\delta x} = \frac{r^2K_p}{L^2} = \frac{2500(0.774)}{0.64} = \frac{1935}{0.64} = 3023\ \mathrm{N/m}.$$

(c) A $50$ N push gives

$$\delta x = \frac{50}{3023} = 0.01654\ \mathrm{m} = 16.5\ \mathrm{mm}.$$

**The requirement is $20$ mm; the design gives $16.5$ mm — it fails by 17%.**

*Equivalently*, the required stiffness is

$$K_{\rm required} = \frac{50}{0.020} = 2500\ \mathrm{N/m},$$

against the design's $3023$ N/m. **The joint is 21% too stiff.**

(d) *Redesign: lower $K_p$.* Since $K_{\rm Cartesian}\propto K_p$:

$$K_p^{\rm new} = K_p\times\frac{2500}{3023} = 0.774(0.827) = 0.640\ \mathrm{N\cdot m/rad}.$$

*The bandwidth consequence.*

$$\omega_n^{\rm new} = \sqrt{\frac{0.640}{8.6\times10^{-4}}} = \sqrt{744} = 27.3\ \mathrm{rad/s},$$

down from 30 — a **9% loss of bandwidth**. And $K_d$ must be re-derived to keep $\zeta = 1$:

$$K_d^{\rm new} = 2(8.6\times10^{-4})(27.3) = 0.0470.$$

*The position-accuracy consequence.* Steady-state droop under a gravity disturbance $d_0$ scales as $1/K_p$, so lowering $K_p$ by 17% **increases the droop by 21%**. If the gravity torque at the joint is, say, $12$ N·m:

$$e_{ss}^{\rm old} = \frac{12/50}{0.774} = 0.310\ \mathrm{rad\ (motor)} = 6.20\times10^{-3}\ \mathrm{rad\ (joint)} = 4.96\ \mathrm{mm\ at\ the\ tool},$$
$$e_{ss}^{\rm new} = \frac{0.24}{0.640} = 0.375\ \mathrm{rad} \to 6.00\ \mathrm{mm\ at\ the\ tool}.$$

**Five to six millimetres of gravity sag** — unusable for any positioning task.

*Which is exactly the point, and the resolution is not to trade the two against each other.*

**Add gravity feedforward.** It removes the sag entirely — to within the model error — **without changing $K_p$ at all**, and therefore without changing the compliance. With a 5% model error the residual sag is $0.3$ mm.

**This is the key insight of collaborative robot design:** compliance and accuracy are *not* fundamentally opposed. They appear opposed only if the controller relies on stiffness to reject disturbances. Compute the disturbance instead of stiffening against it, and you can have a soft joint that still holds position.

*The full collaborative-arm recipe, then:*

| Element | Purpose |
|---|---|
| Low gear ratio ($r\approx50$) | backdrivable, low reflected inertia, safe on impact |
| Low $K_p$ | compliant to external force |
| Gravity feedforward | removes the dominant disturbance without stiffness |
| Full inverse dynamics ([4.2](04-02-computed-torque-control.md)) | removes the rest |
| Joint torque sensing | measures contact directly rather than inferring it from position error |
| Impedance control ([4.3](04-03-force-hybrid-control.md)) | sets the apparent stiffness as a *commanded* quantity |

*The last row is the real answer.* Rather than accepting whatever stiffness the position loop happens to give, **command it**: an impedance controller sets the tool's apparent mass, damping and stiffness to specified values, independent of the gains needed for tracking. That decouples the safety requirement from the accuracy requirement entirely, and it is why modern collaborative arms can be both precise and safe to push.

*What it costs.* Torque sensors at every joint, a high-rate control loop, an accurate dynamic model, and a great deal more engineering than a PID loop on a geared joint. **Independent-joint control is not wrong; it is the right answer to a different problem** — and that problem, fast accurate positioning in free space with no human nearby, is still the majority of industrial robotics.

</details>

## Flashback

**From Lesson 3.2 (The manipulator dynamics equation):** A 2R arm's $M_{11}$ varies from $0.66$ to $1.62$ kg·m². With a direct drive ($r = 1$) and PD gains tuned at $M_{11} = 1.14$, the damping ratio varied from 0.84 to 1.31. (a) Recompute with $r = 60$ and $J_m = 10^{-3}$. (b) State the general rule.

<details>
<summary>Solution</summary>

(a) $$J_{\rm eff} = 10^{-3}+\frac{M_{11}}{3600}.$$

| $M_{11}$ | $M_{11}/r^2$ | $J_{\rm eff}$ |
|---|---|---|
| 0.66 | $1.833\times10^{-4}$ | $1.183\times10^{-3}$ |
| 1.14 | $3.167\times10^{-4}$ | $1.317\times10^{-3}$ |
| 1.62 | $4.500\times10^{-4}$ | $1.450\times10^{-3}$ |

$$\zeta\propto\frac{1}{\sqrt{J_{\rm eff}}}: \qquad \zeta(0.66) = \sqrt{\frac{1.317}{1.183}} = 1.055, \qquad \zeta(1.62) = \sqrt{\frac{1.317}{1.450}} = 0.953,$$

taking $\zeta = 1$ at the design point.

**The spread is now 0.95 to 1.06 — about 11%**, against the direct-drive 0.84 to 1.31, a 56% spread.

(b) *The general rule.* The variation in $\zeta$ (and in $\omega_n$) is set by the variation in $J_{\rm eff}$, and

$$\frac{\Delta J_{\rm eff}}{J_{\rm eff}} = \frac{\Delta M_{kk}/r^2}{J_m+\bar M_{kk}/r^2} \xrightarrow{\ \text{large }r\ } \frac{\Delta M_{kk}}{J_mr^2}.$$

$$\boxed{\;\text{configuration sensitivity}\ \propto\ \frac{1}{r^2}\ \ \text{once}\ \frac{M_{kk}}{r^2}\ll J_m.\;}$$

*Checking against the numbers:* going from $r = 1$ to $r = 60$ should reduce the sensitivity by a factor of... not $3600$, because at $r = 60$ the reflected inertia is still 25% of the total, so the asymptotic regime has not been reached. The observed reduction is $56\%/11\% = 5.1$, and the formula's prediction —

$$\frac{\Delta M/r^2}{J_m+\bar M/r^2} = \frac{0.96/3600}{1.317\times10^{-3}} = \frac{2.667\times10^{-4}}{1.317\times10^{-3}} = 0.202,$$

against the direct-drive $0.96/1.141 = 0.841$ — gives a ratio of $4.2$, in the right range ✓ (the remaining discrepancy is the nonlinearity of the square root).

*The design guideline that follows.* **Choose $r$ so that the reflected link inertia is comparable to or smaller than the motor inertia:**

$$\frac{M_{kk}^{\max}}{r^2}\lesssim J_m \quad\Longrightarrow\quad r\gtrsim\sqrt{\frac{M_{kk}^{\max}}{J_m}}.$$

For this arm: $r\gtrsim\sqrt{1.62/10^{-3}} = \sqrt{1620} = 40$.

**Above $r\approx40$, independent-joint control is sound; below it, the arm's own dynamics dominate and model-based control is required.** That threshold — the square root of the inertia ratio — is worth carrying, because it explains at a glance why industrial arms use ratios of 50–200 and why every arm designed to be backdrivable needs a fundamentally different controller.

*And there is a matching principle from motor selection:* the **inertia-matched** condition $M_{kk}/r^2 = J_m$ maximizes acceleration for a given motor, and it sits exactly at the boundary computed above. **Peak performance and controller simplicity pull in opposite directions**, and the gear ratio is where that argument is settled.

</details>

## Connections

- **Backward:** the configuration-dependent inertia and the coupling being treated as a disturbance are [3.2](03-02-manipulator-dynamics-equation.md)'s; the gravity term is [2.5](02-05-statics-jacobian-transpose.md)'s; the PID design is [`control-systems` 4.1](../../control-systems/lessons/04-01-pid-control.md)'s.
- **Forward:** [4.2](04-02-computed-torque-control.md) computes and cancels what this lesson treats as disturbance; [4.3](04-03-force-hybrid-control.md) addresses the stiffness problem that gearing creates.
- **Sideways:** this is second-order servo design from [`control-systems` 2.2](../../control-systems/lessons/02-02-second-order-response.md) and [4.1](../../control-systems/lessons/04-01-pid-control.md), with the manipulator-specific content confined to what the gear ratio does to the disturbance and the inertia. The "reflect the load through the gear ratio squared" rule is the mechanical analogue of impedance transformation through a transformer in [`circuits` 4.2](../../circuits/lessons/04-02-impedance-phasor-analysis.md).
