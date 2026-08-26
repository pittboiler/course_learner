# Robotics & Kinematics · Lesson 4.2: Computed-torque control

> ⏱ ~15 min · Module 4: Control and mobile robots · Builds on: [4.1 Independent-joint control](04-01-independent-joint-control.md), [3.3 Newton–Euler recursive dynamics](03-03-newton-euler-recursive-dynamics.md) · Unlocks: [4.3 Force and hybrid control](04-03-force-hybrid-control.md)

## Why this matters

[4.1](04-01-independent-joint-control.md) treated the manipulator's own dynamics as a disturbance and relied on gearing to make that reasonable. It works for geared arms at moderate speed and fails for direct-drive arms, for fast motion, and whenever accuracy matters at the sub-millimetre level.

[Computed-torque control](../reference.md#computed-torque-control) takes the opposite approach: **compute the nonlinear dynamics and cancel them exactly.** What remains is a set of decoupled double integrators — the simplest possible plant — on which a linear controller can be designed once and used everywhere in the workspace.

The idea is elegant and the result is striking: with a perfect model, the tracking error goes to zero at a rate you choose, independent of configuration, speed or payload. The catch is the phrase "with a perfect model," and quantifying what happens when the model is wrong is most of the practical content.

## The idea

The dynamics are

$$M(\mathbf{q})\ddot{\mathbf{q}}+C(\mathbf{q},\dot{\mathbf{q}})\dot{\mathbf{q}}+\mathbf{g}(\mathbf{q}) = \boldsymbol\tau.$$

Choose the torque to be

$$\boldsymbol\tau = M(\mathbf{q})\,\mathbf{a}_{\rm command}+C(\mathbf{q},\dot{\mathbf{q}})\dot{\mathbf{q}}+\mathbf{g}(\mathbf{q}),$$

for any $\mathbf{a}_{\rm command}$ you like. Substituting:

$$M\ddot{\mathbf{q}}+C\dot{\mathbf{q}}+\mathbf{g} = M\mathbf{a}_{\rm command}+C\dot{\mathbf{q}}+\mathbf{g} \quad\Longrightarrow\quad M\ddot{\mathbf{q}} = M\mathbf{a}_{\rm command},$$

and since $M$ is invertible ([3.2](03-02-manipulator-dynamics-equation.md), Property 1),

$$\ddot{\mathbf{q}} = \mathbf{a}_{\rm command}.$$

**The arm has become $n$ independent double integrators.** Whatever acceleration you command, you get. All the coupling, the configuration dependence, the Coriolis terms and gravity are gone — not approximated away, *cancelled*.

Now pick $\mathbf{a}_{\rm command}$ to make the error decay:

$$\mathbf{a}_{\rm command} = \ddot{\mathbf{q}}_d-K_d\dot{\mathbf{e}}-K_p\mathbf{e}, \qquad \mathbf{e} = \mathbf{q}-\mathbf{q}_d,$$

giving

$$\ddot{\mathbf{e}}+K_d\dot{\mathbf{e}}+K_p\mathbf{e} = \mathbf{0}$$

— a decoupled, linear, second-order error equation with poles exactly where you place them, at every configuration and every speed.

**Two names for the same thing.** In control theory this is **feedback linearization**: a nonlinear state feedback that renders the closed-loop system linear. In robotics it is called **computed torque** or **inverse dynamics control**. The robotics version is the textbook case of feedback linearization, and it is unusually clean because the manipulator equation has exactly the right structure.

**Why it is affordable.** The cancellation requires evaluating $M\mathbf{a}+C\dot{\mathbf{q}}+\mathbf{g}$ every cycle — which is precisely one call to the $O(n)$ recursion of [3.3](03-03-newton-euler-recursive-dynamics.md), with $\ddot{\mathbf{q}}$ replaced by $\mathbf{a}_{\rm command}$. **No matrices are ever formed.** For a six-jointed arm that is a few microseconds.

## The formal version

**The control law.**

$$\boxed{\;\boldsymbol\tau = \hat M(\mathbf{q})\left[\ddot{\mathbf{q}}_d-K_d\dot{\mathbf{e}}-K_p\mathbf{e}\right]+\hat C(\mathbf{q},\dot{\mathbf{q}})\dot{\mathbf{q}}+\hat{\mathbf{g}}(\mathbf{q}),\;}$$

with hats denoting the *model's* estimates and $\mathbf{e} = \mathbf{q}-\mathbf{q}_d$.

**Error dynamics with a perfect model** ($\hat M = M$, etc.):

$$\boxed{\;\ddot{\mathbf{e}}+K_d\dot{\mathbf{e}}+K_p\mathbf{e} = \mathbf{0}.\;}$$

**Gain selection.** With $K_p = \operatorname{diag}(\omega_{n,i}^2)$ and $K_d = \operatorname{diag}(2\zeta_i\omega_{n,i})$, each joint is an independent second-order system:

$$\boxed{\;K_{p,i} = \omega_{n,i}^2, \qquad K_{d,i} = 2\zeta_i\omega_{n,i}.\;}$$

**Note the units.** Because the dynamics were cancelled, $K_p$ and $K_d$ have units of $\mathrm{s^{-2}}$ and $\mathrm{s^{-1}}$ — **not** N·m/rad. They are acceleration gains, not torque gains, and they do not depend on the arm's mass at all. Critical damping is $\zeta = 1$, i.e. $K_d = 2\sqrt{K_p}$.

**Error dynamics with an imperfect model.** Substituting the control law into the true dynamics and rearranging:

$$\ddot{\mathbf{e}}+K_d\dot{\mathbf{e}}+K_p\mathbf{e} = \boldsymbol\eta,$$

$$\boxed{\;\boldsymbol\eta = \hat M^{-1}\left[\left(\hat M-M\right)\ddot{\mathbf{q}}+\left(\hat C-C\right)\dot{\mathbf{q}}+\left(\hat{\mathbf{g}}-\mathbf{g}\right)\right].\;}$$

*In words: the model error appears as a disturbance on an otherwise-linear system.* The gains must be large enough to reject it, which is why computed torque is always paired with feedback rather than run open-loop.

**Sensitivity, term by term.**

| Error source | Enters as | Worst when |
|---|---|---|
| $\Delta M$ | $\hat M^{-1}\Delta M\,\ddot{\mathbf{q}}$ | high acceleration |
| $\Delta C$ | $\hat M^{-1}\Delta C\,\dot{\mathbf{q}}$ | high speed |
| $\Delta\mathbf{g}$ | $\hat M^{-1}\Delta\mathbf{g}$ | always — a constant bias |
| unmodelled friction | $\hat M^{-1}\boldsymbol\tau_f$ | low speed (Coulomb) |

**Gravity error is the most damaging** because it is persistent: a 10% error in the gravity model produces a steady-state offset that no amount of derivative gain removes.

**The independent-joint version of the same idea.** If only gravity is compensated,

$$\boldsymbol\tau = -K_p\mathbf{e}-K_d\dot{\mathbf{e}}+\hat{\mathbf{g}}(\mathbf{q}),$$

which is **PD plus gravity compensation** — provably asymptotically stable for regulation (a classical result of Takegaki and Arimoto) for *any* positive-definite $K_p$, $K_d$, and requiring only the gravity model. It does not track well, but it never falls over, and it is the safe fallback.

**Cartesian-space computed torque.** To control the tool directly rather than the joints:

$$\boldsymbol\tau = \hat M J^{-1}\left[\ddot{\mathbf{x}}_d-\dot J\dot{\mathbf{q}}-K_d\dot{\mathbf{e}}_x-K_p\mathbf{e}_x\right]+\hat C\dot{\mathbf{q}}+\hat{\mathbf{g}},$$

using $\ddot{\mathbf{x}} = J\ddot{\mathbf{q}}+\dot J\dot{\mathbf{q}}$. It inherits every singularity problem of [2.4](02-04-singularities.md) through the $J^{-1}$, so it needs the damping of [2.2](02-02-inverse-kinematics-numerical.md).

**Adaptive computed torque.** Property 3 of [3.2](03-02-manipulator-dynamics-equation.md) — linearity in the parameters — allows the model to be learned online:

$$\boldsymbol\tau = Y\left(\mathbf{q},\dot{\mathbf{q}},\ddot{\mathbf{q}}_r\right)\hat{\boldsymbol\Theta}-K\mathbf{s}, \qquad \dot{\hat{\boldsymbol\Theta}} = -\Gamma Y^{\top}\mathbf{s},$$

with $\mathbf{s} = \dot{\mathbf{e}}+\Lambda\mathbf{e}$ a combined error. **Provably convergent tracking with an unknown payload**, using only the passivity property — no persistent excitation needed for stability (though it is needed for the parameters themselves to converge).

**Practical requirements.**

| Requirement | Why | Typical |
|---|---|---|
| High control rate | the cancellation is only valid at the sampling instant | $\geq1$ kHz |
| Torque-controllable actuators | the law commands torque, not position | current control on a low-friction drive |
| Accurate inertial parameters | model error becomes disturbance | identify, do not trust the CAD |
| Clean velocity estimate | $\dot{\mathbf{q}}$ enters $C$ and $K_d$ | observer, not raw differentiation |

## Picture

![A two-panel figure. Left: a block diagram with an inner and an outer loop — the outer loop computes the commanded acceleration from the desired trajectory and the position and velocity errors through Kp and Kd blocks, and the inner loop multiplies that by the mass-matrix estimate and adds the Coriolis and gravity estimates to form the commanded torque, which drives the robot, whose measured position and velocity feed back to both loops, with the inner loop labelled nonlinearity cancellation and the outer labelled linear error control. Right: three tracking-error curves against time for the same commanded trajectory — a nearly flat line at zero labelled perfect model, a modest bump labelled twenty percent payload error, and a much larger sustained excursion labelled PD only without any model — with the peak error of each annotated.](assets/04-02-fig1.svg)

Left: the two-loop structure. The inner loop makes the plant linear; the outer loop controls the linear plant. Separating them is what makes the design trivially simple *given* a model.

Right: what the model buys. The gap between "perfect model" and "PD only" is a factor of a hundred; the gap between "perfect model" and "20% wrong model" is a factor of ten thousand — which says that most of the benefit survives a fairly poor model, and none of it survives no model.

## Worked examples

**Example 1 (the boss problem: a single link, and what model error costs).** The single-link arm of [3.1](03-01-lagrangian-dynamics.md): $I = ml^2 = 0.5$ kg·m², $m = 2$ kg, $l = 0.5$ m, with

$$I\ddot\theta+mgl\cos\theta = \tau.$$

*The control law.*

$$\tau = \hat I\left(\ddot\theta_d-K_d\dot e-K_pe\right)+\widehat{mgl}\cos\theta.$$

*With a perfect model*, substituting into the plant:

$$I\ddot\theta+mgl\cos\theta = I\left(\ddot\theta_d-K_d\dot e-K_pe\right)+mgl\cos\theta,$$
$$I\ddot\theta = I\ddot\theta_d-IK_d\dot e-IK_pe,$$
$$\ddot e+K_d\dot e+K_pe = 0\ \checkmark$$

*Gains for $\omega_n = 10$ rad/s, $\zeta = 1$:*

$$K_p = \omega_n^2 = 100\ \mathrm{s^{-2}}, \qquad K_d = 2\zeta\omega_n = 20\ \mathrm{s^{-1}}.$$

**Both boss-problem values** ✓, and note they contain no reference to $I$, $m$, $l$ or $g$ — that is the whole point.

*Now with model errors.* Suppose the inertia estimate is 20% high ($\hat I = 1.2I$) and the gravity estimate is 10% low ($\widehat{mgl} = 0.9mgl$). Substituting:

$$I\ddot e+\hat IK_d\dot e+\hat IK_pe = \left(\hat I-I\right)\ddot\theta_d+\left(\widehat{mgl}-mgl\right)\cos\theta.$$

*Effect on the closed-loop poles:*

$$\omega_n^{\rm eff} = \sqrt{\frac{\hat IK_p}{I}} = \sqrt{1.2(100)} = 10.95\ \mathrm{rad/s}, \qquad \zeta^{\rm eff} = \frac{\hat IK_d}{2\sqrt{I\hat IK_p}} = \sqrt{1.2} = 1.095.$$

**A 20% inertia error shifts the bandwidth and damping by only 9.5%** — the square root softens it, and the loop stays comfortably stable and overdamped.

*Effect on steady-state accuracy.* At $\theta = 45°$ with $\ddot\theta_d = 0$:

$$e_{ss} = \frac{\left(\widehat{mgl}-mgl\right)\cos45°}{\hat IK_p} = \frac{-0.1(9.81)(0.7071)}{1.2(0.5)(100)} = \frac{-0.6937}{60} = -0.01156\ \mathrm{rad} = -0.66°.$$

*And the acceleration-induced bias.* At $\ddot\theta_d = 2$ rad/s²:

$$e = \frac{\left(\hat I-I\right)\ddot\theta_d}{\hat IK_p} = \frac{0.1(2)}{60} = 0.0033\ \mathrm{rad} = 0.19°.$$

*The comparison that matters.*

| Model error | Effect on $\omega_n$, $\zeta$ | Steady-state error |
|---|---|---|
| $\hat I$ 20% high | $+9.5\%$ | $0.19°$ (acceleration-dependent) |
| $\widehat{mgl}$ 10% low | none | $0.66°$ (persistent) |

**A 10% gravity error costs three times as much as a 20% inertia error**, because it is a persistent bias while the inertia error only appears during acceleration.

*The lesson for parameter identification.* Effort spent measuring the **gravity parameters** — the first moments $m_i\mathbf{r}_{c_i}$ — pays off far more than effort spent on the full inertia tensors. And gravity parameters are also the *easiest* to identify: hold the arm at a set of static poses, measure the torques, and solve a linear least-squares problem with no velocity or acceleration data at all.

**Example 2 (a 2R arm, simulated, against the alternatives).** The arm of [3.1](03-01-lagrangian-dynamics.md) Example 2 ($m_1 = 3$ kg at $l_1 = 0.5$ m, $m_2 = 2$ kg at $l_2 = 0.4$ m) tracks a cubic trajectory from $(10°, 20°)$ to $(90°, 90°)$ in 2 s, with $K_p = 100I$ and $K_d = 20I$.

*Simulating the closed loop* and recording the peak joint tracking error:

| Controller | Model quality | Peak $\vert e\vert$ |
|---|---|---|
| Computed torque | exact | **0.0002°** |
| Computed torque | payload 10% high | 1.42° |
| Computed torque | payload 20% high | 2.63° |
| Computed torque | payload 20% **low** | 3.83° |
| Computed torque | payload 50% high | 5.34° |
| PD + gravity comp. | exact gravity model | 2.63° |
| PD only | no model at all | **21.87°** |

*Four things worth reading off that table.*

**With an exact model the tracking is essentially perfect** — two ten-thousandths of a degree, which is numerical integration error rather than control error. That is the promise of exact cancellation, and it is genuinely achieved.

**PD alone is catastrophic: 21.9°.** With $K_p = 100$ (an *acceleration* gain of $100\ \mathrm{s^{-2}}$, so a torque gain of only $M_{11}K_p\approx200$ N·m/rad at this arm's scale), gravity is simply not rejected, and the arm sags far behind its trajectory throughout the move.

**Gravity compensation alone recovers most of it** — from 21.9° to 2.63°, a factor of 8.3. **One term, evaluated once per cycle, buys 88% of the available improvement.** That is the highest-value line in any manipulator controller, and it is the point [4.1](04-01-independent-joint-control.md) made from the disturbance-rejection side.

**Computed torque with a 20% payload error performs identically to PD-plus-gravity with a perfect model** (2.63° in both cases). So the *marginal* value of modelling $M$ and $C$ on top of $\mathbf{g}$ is exactly what the model's accuracy delivers: with a good model it is a factor of ten thousand; with a 20% error it is nothing at all.

*Why underestimating the payload is worse than overestimating.* At $-20\%$ the error is 3.83° against 2.63° at $+20\%$. The reason is in the error dynamics:

$$I\ddot e+\hat IK_d\dot e+\hat IK_pe = \ldots$$

The effective gains are multiplied by $\hat M$. **Underestimating the inertia lowers the effective gains** ($\hat M<M$), reducing both bandwidth and damping, so the loop is slower *and* less damped exactly when the disturbance is larger. Overestimating raises the gains, which partly compensates.

**A conservative model should therefore err high on inertia** — a rule that is the opposite of the usual engineering instinct to be conservative by assuming less. Here, assuming *more* inertia is the safe direction.

*What to do about a genuinely unknown payload.* Adaptive control, using the linearity in parameters. The regressor $Y$ is computed from the measured motion; the parameter estimate $\hat{\boldsymbol\Theta}$ is updated by $\dot{\hat{\boldsymbol\Theta}} = -\Gamma Y^{\top}\mathbf{s}$; and the tracking error is proved to converge to zero using the skew-symmetry property, **without** the parameters themselves needing to converge. In practice a robot picking up an unknown box converges to good tracking within a second or two of motion.

*And the honest caveat.* Adaptive control converges the *tracking*, not the *parameters*, unless the trajectory is persistently exciting. A robot that only ever repeats one motion will find a parameter set that works for that motion and may be badly wrong for any other — which is fine until the trajectory changes.

## Watch out

- **You might use torque units for $K_p$ and $K_d$.** After cancellation they are acceleration gains, $\mathrm{s^{-2}}$ and $\mathrm{s^{-1}}$. Copying gains from a PD controller gives values wrong by the inertia.
- **You might run it too slowly.** The cancellation is exact only at the sampling instant; between samples the true dynamics act uncancelled. Below about 500 Hz the benefit erodes fast.
- **You might trust CAD inertias.** Real arms differ from their models by 10–30% because of cabling, fasteners, and unmodelled structure. Identify the parameters ([3.2](03-02-manipulator-dynamics-equation.md), Property 3).
- **You might forget friction.** It is not in $M\ddot{\mathbf{q}}+C\dot{\mathbf{q}}+\mathbf{g}$, and Coulomb friction on a geared joint can be 10–30% of the torque. Model it or let the feedback absorb it.
- **You might differentiate encoder signals for $\dot{\mathbf{q}}$.** $C(\mathbf{q},\dot{\mathbf{q}})$ is quadratic in velocity, so velocity noise is amplified. Use an observer.
- **You might command torque to a position-controlled drive.** The law needs torque (current) control. A drive with its own position loop cannot execute it.
- **You might use Cartesian computed torque near a singularity.** The $J^{-1}$ blows up exactly as in [2.4](02-04-singularities.md). Damp it.
- **You might assume adaptive control converges the parameters.** It converges the tracking; parameter convergence needs persistent excitation.

## One-liner

> Command $\boldsymbol\tau = \hat M(\ddot{\mathbf{q}}_d-K_d\dot{\mathbf{e}}-K_p\mathbf{e})+\hat C\dot{\mathbf{q}}+\hat{\mathbf{g}}$ and the arm becomes $n$ decoupled double integrators with $\ddot{\mathbf{e}}+K_d\dot{\mathbf{e}}+K_p\mathbf{e} = 0$ — exactly, at every configuration — with the model error appearing as a disturbance the feedback must then reject.

## Problems

**P1 (🟢)** A single link with $I = 0.8$ kg·m² and $mgl = 12$ N·m is controlled by computed torque. (a) Write the control law. (b) Find $K_p$ and $K_d$ for $\omega_n = 15$ rad/s, $\zeta = 1$. (c) Verify the error dynamics with a perfect model. (d) State the units of the gains.

**P2 (🟡)** The link of P1 has a model with $\hat I = 0.9$ kg·m² and $\widehat{mgl} = 11$ N·m. (a) Write the error dynamics. (b) Find the effective $\omega_n$ and $\zeta$. (c) Find the steady-state error at $\theta = 30°$ with $\ddot\theta_d = 0$. (d) Find the additional error at $\ddot\theta_d = 4$ rad/s².

**P3 (🔴)** A 2R arm tracks a trajectory with computed torque at $K_p = 144$, $K_d = 24$. The payload is unknown to within $\pm30\%$ of $m_2 = 2$ kg. (a) State whether $\zeta = 1$ and find $\omega_n$. (b) Find the effective $\zeta$ range if the payload error propagates to $M_{22}$ proportionally, given $M_{22} = m_2l_2^2$ with $l_2 = 0.4$ m and a nominal $M_{22}$ of $0.32$ kg·m². (c) Determine the worst case and state whether the loop remains stable. (d) Propose two remedies, quantify one, and explain which failure mode each addresses.

<details>
<summary>Solutions</summary>

**P1** (a) $$\tau = \hat I\left(\ddot\theta_d-K_d\dot e-K_pe\right)+\widehat{mgl}\cos\theta, \qquad e = \theta-\theta_d.$$

(b) $$K_p = \omega_n^2 = 225\ \mathrm{s^{-2}}, \qquad K_d = 2\zeta\omega_n = 2(1)(15) = 30\ \mathrm{s^{-1}}.$$

(c) With $\hat I = I$ and $\widehat{mgl} = mgl$, substituting into $I\ddot\theta+mgl\cos\theta = \tau$:

$$I\ddot\theta+mgl\cos\theta = I\ddot\theta_d-IK_d\dot e-IK_pe+mgl\cos\theta.$$

The gravity terms cancel, and dividing by $I$:

$$\ddot\theta-\ddot\theta_d+K_d\dot e+K_pe = 0 \quad\Longrightarrow\quad \ddot e+30\dot e+225e = 0\ \checkmark$$

Characteristic roots $s^2+30s+225 = (s+15)^2$ — a **double pole at $-15$**, critically damped, as designed.

(d) $$[K_p] = \mathrm{s^{-2}}, \qquad [K_d] = \mathrm{s^{-1}}.$$

*Why.* The bracketed quantity $\ddot\theta_d-K_d\dot e-K_pe$ must have units of acceleration (rad/s²) so that $\hat I$ times it is a torque. With $e$ in rad and $\dot e$ in rad/s, $K_p$ must be $\mathrm{s^{-2}}$ and $K_d$ must be $\mathrm{s^{-1}}$.

**The gains do not depend on the arm at all** — the same $K_p = 225$ works on a 1 gram link and a 1 tonne link, because the inertia has already been divided out. That configuration-independence is the entire product of the cancellation.

**P2** (a) Substituting the control law with hats into the true plant:

$$I\ddot\theta+mgl\cos\theta = \hat I\left(\ddot\theta_d-K_d\dot e-K_pe\right)+\widehat{mgl}\cos\theta.$$

With $\ddot\theta = \ddot\theta_d+\ddot e$:

$$I\ddot e+\hat IK_d\dot e+\hat IK_pe = \left(\hat I-I\right)\ddot\theta_d+\left(\widehat{mgl}-mgl\right)\cos\theta.$$

Numerically, with $I = 0.8$, $\hat I = 0.9$, $mgl = 12$, $\widehat{mgl} = 11$:

$$0.8\ddot e+27\dot e+202.5e = 0.1\ddot\theta_d-1.0\cos\theta.$$

(b) Dividing by $I = 0.8$:

$$\ddot e+33.75\dot e+253.125e = \ldots$$

$$\omega_n^{\rm eff} = \sqrt{253.125} = 15.91\ \mathrm{rad/s}, \qquad \zeta^{\rm eff} = \frac{33.75}{2(15.91)} = 1.0607.$$

*Or directly:* $\omega_n^{\rm eff} = \omega_n\sqrt{\hat I/I} = 15\sqrt{1.125} = 15.91$ ✓ and $\zeta^{\rm eff} = \zeta\sqrt{\hat I/I} = 1.0607$ ✓.

**A 12.5% inertia error gives a 6.1% shift in bandwidth and damping** — the square root again.

(c) At steady state with $\ddot\theta_d = 0$ and $\theta = 30°$:

$$e_{ss} = \frac{\left(\widehat{mgl}-mgl\right)\cos30°}{\hat IK_p} = \frac{-1.0(0.86603)}{0.9(225)} = \frac{-0.86603}{202.5} = -4.277\times10^{-3}\ \mathrm{rad} = -0.245°.$$

(d) With $\ddot\theta_d = 4$ rad/s²:

$$\Delta e = \frac{\left(\hat I-I\right)\ddot\theta_d}{\hat IK_p} = \frac{0.1(4)}{202.5} = 1.975\times10^{-3}\ \mathrm{rad} = 0.113°.$$

**Total error during that acceleration:** $-0.245°+0.113° = -0.132°$ — the two errors partly cancel, which is a coincidence of signs at this configuration and not something to rely on.

*The ranking, again:* the 8.3% gravity error contributes twice what the 12.5% inertia error does, even at a substantial $4$ rad/s². **Gravity parameters first.**

**P3** (a) $$\omega_n = \sqrt{K_p} = \sqrt{144} = 12\ \mathrm{rad/s},$$
$$\zeta = \frac{K_d}{2\sqrt{K_p}} = \frac{24}{2(12)} = 1.000.$$

**Critically damped** ✓, by design.

(b) With $M_{22} = m_2l_2^2$, a payload error scales $M_{22}$ proportionally:

$$m_2 = 2\ \mathrm{kg} \pm30\% \quad\Longrightarrow\quad m_2\in[1.4,\ 2.6]\ \mathrm{kg},$$
$$M_{22}\in\left[1.4(0.16),\ 2.6(0.16)\right] = [0.224,\ 0.416]\ \mathrm{kg\cdot m^2},$$

against a nominal $\hat M_{22} = 0.32$.

$$\zeta^{\rm eff} = \zeta\sqrt{\frac{\hat M}{M}}: \qquad \zeta_{\min} = 1.0\sqrt{\frac{0.32}{0.416}} = \sqrt{0.7692} = 0.877,$$
$$\zeta_{\max} = 1.0\sqrt{\frac{0.32}{0.224}} = \sqrt{1.4286} = 1.195.$$

$$\omega_n^{\rm eff}\in\left[12\sqrt{0.7692},\ 12\sqrt{1.4286}\right] = [10.5,\ 14.3]\ \mathrm{rad/s}.$$

(c) **Worst case: the payload is heavier than modelled** ($m_2 = 2.6$ kg), giving $\zeta = 0.877$ and $\omega_n = 10.5$ rad/s.

*Overshoot:*

$$M_p = \exp\left(\frac{-\pi(0.877)}{\sqrt{1-0.769}}\right) = \exp\left(\frac{-2.7551}{0.4806}\right) = \exp(-5.732) = 0.0032 = 0.32\%.$$

**Stable, with under half a percent of overshoot.** The loop is entirely robust to this level of parameter error *in the dynamics* — which is the reassuring half of the story.

*But the tracking error is another matter.* The disturbance term $\hat M^{-1}(\hat M-M)\ddot{\mathbf{q}}$ scales with the *acceleration*, and at $30\%$ error with $\ddot q = 5$ rad/s²:

$$|\eta|\approx\frac{|0.32-0.416|}{0.32}(5) = 0.3(5) = 1.5\ \mathrm{rad/s^2},$$

$$e_{ss}\approx\frac{|\eta|}{K_p} = \frac{1.5}{144} = 0.0104\ \mathrm{rad} = 0.60°.$$

**Over half a degree of tracking error during acceleration**, which for a 0.9 m arm is $9.4$ mm at the tool. Stable but not accurate — the distinction that matters.

*And there is a worse problem the linear analysis hides.* A 30% payload error also means a 30% error in the **gravity** term, since $g_2 = m_2gl_2\cos(\theta_1+\theta_2)$. That error is up to

$$\Delta g_2 = 0.3(2)(9.81)(0.4) = 2.35\ \mathrm{N\cdot m},$$

which appears in $\boldsymbol\eta$ as $\hat M^{-1}\Delta\mathbf{g}$ and produces a **persistent** offset — one that does not vanish when the acceleration does, and is therefore present even when the arm is holding still.

(d) *Remedy 1: adaptive computed torque.* Use Property 3 of [3.2](03-02-manipulator-dynamics-equation.md):

$$\boldsymbol\tau = Y\left(\mathbf{q},\dot{\mathbf{q}},\ddot{\mathbf{q}}_r\right)\hat{\boldsymbol\Theta}-K\mathbf{s}, \qquad \dot{\hat{\boldsymbol\Theta}} = -\Gamma Y^{\top}\mathbf{s},$$

with $\mathbf{s} = \dot{\mathbf{e}}+\Lambda\mathbf{e}$. The estimate $\hat m_2$ converges as the arm moves, and the tracking error converges to zero regardless.

*Quantified.* The relevant parameter is $\hat\Theta_2 = m_2l_2^2$ (and $\hat\Theta_5 = m_2l_2$ for gravity). With a typical adaptation gain, a single 2 s trajectory with meaningful acceleration and gravity variation identifies $m_2$ to within a few percent, reducing the tracking error from $0.60°$ to under $0.06°$ — **a factor of ten**, achieved within the first move.

*What it costs:* the regressor $Y$ must be computed (comparable to one inverse-dynamics call), the adaptation gain $\Gamma$ must be tuned, and the estimate must be bounded to prevent drift when the trajectory is not exciting.

*Remedy 2: measure the payload.* Weigh it, or — better — perform a brief identification move on picking it up: hold two or three static poses, read the joint torques, and solve the linear least-squares problem for the gravity parameters $m_2l_2$ and the first moment. It takes under a second, needs no velocity data, and gives the *gravity* parameters — the ones that matter most — directly.

*Which failure mode each addresses.*

| Remedy | Fixes | Does not fix |
|---|---|---|
| Adaptive control | both inertia and gravity errors, continuously | needs excitation; can drift on repetitive paths |
| Static identification | gravity errors, exactly and immediately | inertial errors during acceleration |
| Higher gains | reduces the *effect* of any error | limited by drivetrain resonance and noise |

**The practical answer combines them:** identify the gravity parameters statically on pick-up (fast, reliable, addresses the persistent error), then let adaptation handle the inertial parameters during motion (addresses the acceleration-dependent error). And keep the feedback gains high enough that whatever remains is rejected.

*The general principle.* **Computed torque converts a control problem into an identification problem.** That is a genuine improvement — identification is a well-posed estimation task with a linear structure and a mature toolkit, while nonlinear coupled control is not — but it is a transformation, not an elimination. **The model has to come from somewhere**, and pretending otherwise is how computed-torque implementations fail in the field.

</details>

## Flashback

**From Lesson 4.1 (Independent-joint control):** A geared joint ($r = 100$) uses PD plus gravity feedforward, with $K_p = 2.785$ N·m/rad. Compare with computed torque on the same joint. (a) What does each cancel? (b) When is the extra machinery worth it?

<details>
<summary>Solution</summary>

(a) | Controller | Cancels | Leaves as disturbance |
|---|---|---|
| PD + gravity FF ([4.1](04-01-independent-joint-control.md)) | gravity | coupling $M_{kj}\ddot q_j$, Coriolis, inertia variation |
| Computed torque | gravity, Coriolis, coupling, **and** the configuration-dependent inertia | model error, friction, flexibility |

**PD plus gravity feedforward cancels one term; computed torque cancels all three.** And it does something the feedforward cannot: by multiplying the acceleration command by $\hat M$, it **normalizes the loop gain**, so the closed-loop poles are where you placed them at every configuration rather than drifting with the inertia.

(b) *When the extra machinery is worth it.*

**Not on this joint.** At $r = 100$, [4.1](04-01-independent-joint-control.md) Example 1 found the bandwidth and damping varying by only 4% across the workspace, and the reflected coupling and Coriolis torques divided by 100. Gravity feedforward removes the dominant term, and what is left is a few percent. **Computed torque would remove a few percent of a few percent** — real, but not worth the model, the identification, the torque-controlled drive and the 1 kHz loop.

*It becomes worth it when any of these hold:*

**Low gear ratio.** At $r = 10$, [4.1](04-01-independent-joint-control.md) P2 found a 55% variation in bandwidth and damping. The coupling is divided by 10 rather than 100 and is no longer negligible. **Direct-drive and collaborative arms need it.**

**High speed.** Coriolis terms scale as $\dot q^2$ and are fast disturbances that no integrator can reject. Above roughly 5 rad/s at the joint ([3.1](03-01-lagrangian-dynamics.md) P3) they dominate.

**Tight accuracy.** Example 2's table gives the numbers: gravity compensation alone reaches $2.6°$ of peak tracking error on a fast trajectory; computed torque with a good model reaches $0.0002°$. If the specification is tighter than a degree during motion, only the full model delivers it.

**Cartesian control or force control.** Both need the tool's dynamics, not the joint's, and the mapping between them is $M$ — which the feedforward approach never forms.

*The design guideline that emerges.* **Match the controller to where the arm's inertia lives.** [4.1](04-01-independent-joint-control.md)'s Flashback gave the threshold $r\gtrsim\sqrt{M_{kk}^{\max}/J_m}$: above it, the motor dominates and independent-joint control with gravity feedforward is the right engineering answer; below it, the link dominates and the full model is required.

**Neither is more advanced than the other in any useful sense.** A 200:1 geared palletizer running independent-joint PID is not using an inferior controller; it is using the correct one, and adding computed torque to it would add cost, fragility and a dependence on inertial parameters, in exchange for nothing measurable.

</details>

## Connections

- **Backward:** the dynamics being cancelled are [3.2](03-02-manipulator-dynamics-equation.md)'s; the $O(n)$ evaluation is [3.3](03-03-newton-euler-recursive-dynamics.md)'s; the alternative it improves on is [4.1](04-01-independent-joint-control.md)'s; the trajectory it tracks is [3.4](03-04-joint-space-trajectories.md)'s.
- **Forward:** [4.3](04-03-force-hybrid-control.md) builds force and impedance control on the same cancellation, replacing the outer loop's objective.
- **Sideways:** this is exact feedback linearization from nonlinear control, and the manipulator equation is its canonical worked example. The two-loop structure — an inner loop that linearizes and an outer loop that controls the linearized plant — recurs as gain scheduling, as the interaction–decoupling design of multivariable control in [`control-systems` 5.4](../../control-systems/lessons/05-04-pole-placement-observers.md), and as the preconditioning of an ill-conditioned linear system in [`numerical-analysis`](../../numerical-analysis/syllabus.md).
