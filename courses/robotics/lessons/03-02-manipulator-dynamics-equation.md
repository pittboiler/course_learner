# Robotics & Kinematics · Lesson 3.2: The manipulator dynamics equation

> ⏱ ~15 min · Module 3: Dynamics and trajectory generation · Builds on: [3.1 Lagrangian dynamics of manipulators](03-01-lagrangian-dynamics.md) · Unlocks: [3.3 Newton–Euler recursive dynamics](03-03-newton-euler-recursive-dynamics.md), [4.2 Computed-torque control](04-02-computed-torque-control.md)

## Why this matters

[3.1](03-01-lagrangian-dynamics.md) derived the equations. This lesson reads them.

$$M(\mathbf{q})\ddot{\mathbf{q}}+C(\mathbf{q},\dot{\mathbf{q}})\dot{\mathbf{q}}+\mathbf{g}(\mathbf{q}) = \boldsymbol\tau$$

is the same for every serial manipulator ever built — two links or twenty, planar or spatial, revolute or prismatic. Only the entries change. Recognizing what each term does, and what structural properties the equation always has, is what lets a controller be designed once and applied to any arm.

Those properties are not decoration. **Positive-definiteness of $M$** is what guarantees the inverse dynamics is always solvable. **Skew-symmetry of $\dot M-2C$** is what makes passivity-based controllers provably stable without knowing a single parameter value. **Linearity in the parameters** is what makes adaptive control possible. Each is a licence to do something a controller otherwise could not.

## The idea

Four terms, four distinct physical jobs.

**$M(\mathbf{q})\ddot{\mathbf{q}}$ — inertia.** The generalization of $F = ma$. $M$ is symmetric and positive definite, and its **off-diagonal entries are coupling**: accelerating joint 1 requires torque at joint 2, even if joint 2 is not accelerating. That coupling is what makes a manipulator hard to control and what a decentralized controller must treat as a disturbance.

**$C(\mathbf{q},\dot{\mathbf{q}})\dot{\mathbf{q}}$ — Coriolis and centrifugal.** Quadratic in velocity. **Centrifugal** terms ($\dot q_i^2$) come from one joint flinging distal mass outward; **Coriolis** terms ($\dot q_i\dot q_j$) come from two joints moving at once. They vanish at rest, are negligible at 1 rad/s, and dominate at 10 — the scaling worked out in [3.1](03-01-lagrangian-dynamics.md) P3.

**$\mathbf{g}(\mathbf{q})$ — gravity.** Depends on configuration only. Usually the largest term on a slow arm, and the first thing any controller compensates.

**$\boldsymbol\tau$ — the applied joint torques**, plus, when the arm is touching something, $J^{\top}\mathbf{F}_{\rm ext}$ from [2.5](02-05-statics-jacobian-transpose.md).

Two problems live in this one equation, and they are not equally hard:

**Inverse dynamics.** Given $\mathbf{q},\dot{\mathbf{q}},\ddot{\mathbf{q}}$, find $\boldsymbol\tau$. Just evaluate the left side. $O(n)$ with the recursion of [3.3](03-03-newton-euler-recursive-dynamics.md), and it is what every model-based controller computes.

**Forward dynamics.** Given $\boldsymbol\tau$, find $\ddot{\mathbf{q}}$. Requires solving $M\ddot{\mathbf{q}} = \boldsymbol\tau-C\dot{\mathbf{q}}-\mathbf{g}$, so it needs $M$ explicitly and a linear solve — $O(n^3)$ naively. Used for simulation, not control.

**The direction that matters for control is the easy one**, which is a piece of luck the field has made full use of.

## The formal version

**The equation.**

$$\boxed{\;M(\mathbf{q})\ddot{\mathbf{q}}+C(\mathbf{q},\dot{\mathbf{q}})\dot{\mathbf{q}}+\mathbf{g}(\mathbf{q})+F_v\dot{\mathbf{q}}+F_s\operatorname{sgn}(\dot{\mathbf{q}}) = \boldsymbol\tau+J^{\top}\mathbf{F}_{\rm ext}.\;}$$

**Property 1: $M$ is symmetric and positive definite.**

$$M = M^{\top}, \qquad \mathbf{x}^{\top}M\mathbf{x}>0\ \ \forall\mathbf{x}\neq\mathbf{0}.$$

*Why:* $T = \tfrac12\dot{\mathbf{q}}^{\top}M\dot{\mathbf{q}}$ is the kinetic energy, which is positive for any nonzero motion.

*What it licenses:* $M^{-1}$ always exists, so the forward dynamics always has a unique solution and no configuration is "dynamically singular." **Kinematic singularities do not have dynamic counterparts** — an arm at a kinematic singularity still accelerates normally in joint space.

Bounds that controllers use:

$$\lambda_{\min}I\preceq M(\mathbf{q})\preceq\lambda_{\max}I \qquad\text{uniformly in }\mathbf{q}.$$

**Property 2: $\dot M-2C$ is skew-symmetric** (for the Christoffel choice of $C$).

$$\boxed{\;\mathbf{x}^{\top}\left(\dot M-2C\right)\mathbf{x} = 0 \quad\forall\mathbf{x}.\;}$$

*Why it matters:* it is a statement of energy conservation. Differentiating the kinetic energy,

$$\dot T = \dot{\mathbf{q}}^{\top}M\ddot{\mathbf{q}}+\tfrac12\dot{\mathbf{q}}^{\top}\dot M\dot{\mathbf{q}} = \dot{\mathbf{q}}^{\top}\left(\boldsymbol\tau-\mathbf{g}\right),$$

using the skew-symmetry to cancel the Coriolis contribution. **The Coriolis and centrifugal forces do no net work** — they redistribute energy among the joints but never add or remove any.

*What it licenses:* passivity-based control. A Lyapunov function built from kinetic plus potential energy has a derivative that does not involve $C$ at all, so stability can be proved **without knowing $M$ or $C$ numerically**. That is a remarkable licence, and it is the foundation of adaptive manipulator control.

**Property 3: linearity in the parameters.**

$$\boxed{\;M\ddot{\mathbf{q}}+C\dot{\mathbf{q}}+\mathbf{g} = Y(\mathbf{q},\dot{\mathbf{q}},\ddot{\mathbf{q}})\,\boldsymbol\Theta,\;}$$

where $\boldsymbol\Theta$ collects the inertial parameters (masses, first moments $m\mathbf{r}_c$, inertia-tensor entries) and $Y$ — the **regressor** — depends only on the motion.

*What it licenses:* the parameters enter **linearly**, so they can be identified by least squares from measured torques, and adapted online. A robot that does not know its own payload can learn it.

**Property 4: bounds.**

$$\|C(\mathbf{q},\dot{\mathbf{q}})\|\leq k_c\|\dot{\mathbf{q}}\|, \qquad \|\mathbf{g}(\mathbf{q})\|\leq k_g,$$

for revolute arms (where all configurations are bounded). These give the gain conditions in robust control designs.

**Christoffel form of $C$.**

$$C_{kj} = \sum_i c_{kij}\dot q_i, \qquad c_{kij} = \frac12\left(\frac{\partial M_{kj}}{\partial q_i}+\frac{\partial M_{ki}}{\partial q_j}-\frac{\partial M_{ij}}{\partial q_k}\right).$$

**$C$ is not unique** — only the product $C\dot{\mathbf{q}}$ is determined by the physics. The Christoffel choice is the one that makes $\dot M-2C$ skew-symmetric, which is why it is the standard.

**Reading the entries.**

| Entry | Meaning |
|---|---|
| $M_{kk}$ | effective inertia seen by joint $k$ with the others locked |
| $M_{kj}$ | inertial coupling: torque at $k$ caused by acceleration at $j$ |
| $c_{kii}\dot q_i^2$ | centrifugal: joint $i$'s rotation loading joint $k$ |
| $c_{kij}\dot q_i\dot q_j$ | Coriolis: joints $i$ and $j$ together loading joint $k$ |
| $g_k$ | gravity load on joint $k$ |

**Effective inertia varies enormously with configuration.** For the 2R arm, $M_{11}$ ranges from $(m_1+m_2)l_1^2+m_2l_2^2-2m_2l_1l_2$ (folded) to $(m_1+m_2)l_1^2+m_2l_2^2+2m_2l_1l_2$ (extended) — often a factor of three or more. **A fixed-gain controller tuned for one configuration is mistuned for another**, which is the central argument for the model-based control of [4.2](04-02-computed-torque-control.md).

## Picture

![A two-panel figure. Left: the dynamics equation written out with each term boxed and annotated — the mass matrix term labelled inertia with a note that off-diagonal entries couple the joints, the C term labelled Coriolis and centrifugal with a note that it scales as velocity squared, the g term labelled gravity with a note that it depends on configuration only, and tau labelled applied torque — with small icons beside each showing the physical effect. Right: a plot of the two diagonal entries of the mass matrix for a two-link arm against the elbow angle, showing M-one-one varying by a factor of about three between the folded and extended configurations while M-two-two stays constant, with the extreme configurations sketched above the corresponding points on the curve.](assets/03-02-fig1.svg)

Left: four terms, four jobs. Recognizing which one dominates in a given regime is most of what dynamic intuition consists of.

Right: why fixed gains do not work. The inertia a joint must accelerate changes by a factor of three across the workspace, so a gain that is critically damped at one configuration is underdamped or overdamped at another.

## Worked examples

**Example 1 (reading a 2R arm's dynamics across the workspace).** $m_1 = 3$ kg at $l_1 = 0.5$ m, $m_2 = 2$ kg at $l_2 = 0.4$ m.

$$M_{11} = (m_1+m_2)l_1^2+m_2l_2^2+2m_2l_1l_2\cos\theta_2 = 5(0.25)+2(0.16)+0.8\cos\theta_2 = 1.57+0.8\cos\theta_2,$$
$$M_{12} = M_{21} = 0.32+0.4\cos\theta_2, \qquad M_{22} = 0.32.$$

*Across the elbow's range:*

| $\theta_2$ | $M_{11}$ | $M_{12}$ | $M_{22}$ | $\det M$ |
|---|---|---|---|---|
| $0°$ (extended) | 2.370 | 0.720 | 0.32 | 0.240 |
| $45°$ | 2.136 | 0.603 | 0.32 | 0.320 |
| $90°$ | 1.570 | 0.320 | 0.32 | 0.400 |
| $135°$ | 1.004 | 0.037 | 0.32 | 0.320 |
| $180°$ (folded) | 0.770 | $-0.080$ | 0.32 | 0.240 |

**$M_{11}$ varies by a factor of 3.1** between folded and extended. Joint 1 must accelerate three times as much inertia when the arm is stretched out — which is intuitive (the mass is further away) and quantitatively severe.

**$M_{22}$ is constant.** Joint 2 only ever accelerates link 2, whose inertia about joint 2 does not depend on any joint angle. **The distal joint's inertia is configuration-independent, and every joint's inertia depends only on the joints distal to it** — a general structural fact, and the reason wrist joints can be controlled with fixed gains while shoulder joints cannot.

**$M_{12}$ changes sign** at $\cos\theta_2 = -0.8$, i.e. $\theta_2 = 143.1°$. Past that, accelerating joint 1 requires *negative* torque at joint 2. Coupling is not merely variable in magnitude; it reverses direction.

*The control consequence, made concrete.* Suppose a PD controller for joint 1 is tuned for critical damping at $\theta_2 = 90°$, where $M_{11} = 1.57$. The natural frequency of a joint controlled by $\tau = -K_pe-K_d\dot e$ is $\omega_n = \sqrt{K_p/M_{11}}$ and the damping ratio is $\zeta = K_d/(2\sqrt{K_pM_{11}})$.

$$\zeta\propto\frac{1}{\sqrt{M_{11}}}: \qquad \zeta(0°) = \zeta(90°)\sqrt{\frac{1.57}{2.37}} = 0.81\,\zeta(90°),$$
$$\zeta(180°) = \zeta(90°)\sqrt{\frac{1.57}{0.77}} = 1.43\,\zeta(90°).$$

**Tuned to $\zeta = 1$ at $90°$, the same gains give $\zeta = 0.81$ extended (overshoot) and $\zeta = 1.43$ folded (sluggish).** The natural frequency swings by the same factors. That is the entire argument for computed-torque control in one calculation.

**Example 2 (verifying the structural properties numerically).** The same arm at $\mathbf{q} = (30°,45°)$, $\dot{\mathbf{q}} = (1.0,-0.5)$ rad/s.

*Property 1: symmetry and positive definiteness.*

$$M = \begin{bmatrix}2.13569&0.60284\\0.60284&0.32000\end{bmatrix}.$$

Symmetric by inspection ✓. Sylvester: $M_{11} = 2.136>0$ ✓ and $\det M = 0.68342-0.36342 = 0.32000>0$ ✓. Eigenvalues $(0.138,\ 2.318)$, both positive ✓.

*The condition number* $\kappa(M) = 2.318/0.138 = 16.8$. Not alarming, but worth noting: it means joint 1 sees sixteen times the effective inertia of the "lightest" direction in joint-acceleration space, and a controller with equal gains on both joints will behave very differently on each.

*Property 2: skew-symmetry of $\dot M-2C$.* With $h = -m_2l_1l_2\sin\theta_2 = -0.28284$:

$$C = \begin{bmatrix}h\dot\theta_2&h(\dot\theta_1+\dot\theta_2)\\-h\dot\theta_1&0\end{bmatrix} = \begin{bmatrix}0.14142&-0.14142\\0.28284&0\end{bmatrix}.$$

$$\dot M = \frac{\partial M}{\partial\theta_2}\dot\theta_2 = \begin{bmatrix}-0.8\sin\theta_2&-0.4\sin\theta_2\\-0.4\sin\theta_2&0\end{bmatrix}(-0.5) = \begin{bmatrix}0.28284&0.14142\\0.14142&0\end{bmatrix}.$$

$$\dot M-2C = \begin{bmatrix}0.28284-0.28284&0.14142+0.28284\\0.14142-0.56569&0\end{bmatrix} = \begin{bmatrix}0&0.42426\\-0.42426&0\end{bmatrix}.$$

**Skew-symmetric** ✓ — the diagonal is zero and the off-diagonals are negatives.

*Confirming the energy statement.*

$$\dot{\mathbf{q}}^{\top}\left(\dot M-2C\right)\dot{\mathbf{q}} = \begin{bmatrix}1&-0.5\end{bmatrix}\begin{bmatrix}0&0.42426\\-0.42426&0\end{bmatrix}\begin{bmatrix}1\\-0.5\end{bmatrix}$$
$$= \begin{bmatrix}1&-0.5\end{bmatrix}\begin{bmatrix}-0.21213\\-0.42426\end{bmatrix} = -0.21213+0.21213 = 0\ \checkmark$$

**The Coriolis forces do exactly zero net work** at this instant, as they do at every instant. Note that the *individual* joint powers are not zero — joint 1 receives $-0.212$ W from the Coriolis term and joint 2 receives $+0.212$ W. **Energy is transferred between joints, not created or destroyed**, which is precisely what "skew-symmetric" encodes.

*Property 3: linearity in the parameters.* For this arm the independent inertial parameters are

$$\boldsymbol\Theta = \begin{bmatrix}(m_1+m_2)l_1^2\\m_2l_2^2\\m_2l_1l_2\\(m_1+m_2)l_1\\m_2l_2\end{bmatrix} = \begin{bmatrix}1.250\\0.320\\0.400\\2.500\\0.800\end{bmatrix},$$

and the equation can be written $\boldsymbol\tau = Y\boldsymbol\Theta$ with

$$Y_{11} = \ddot\theta_1, \qquad Y_{12} = \ddot\theta_1+\ddot\theta_2, \qquad Y_{13} = 2c_2\ddot\theta_1+c_2\ddot\theta_2-s_2\dot\theta_2^2-2s_2\dot\theta_1\dot\theta_2,$$
$$Y_{14} = gc_1, \qquad Y_{15} = gc_{12},$$

and a similar second row. **The masses and lengths appear only inside $\boldsymbol\Theta$**, never inside $Y$.

*Why this is the property that makes adaptive control possible.* Suppose the arm picks up an unknown payload, changing $m_2$. The regressor $Y$ — which depends only on the measured motion — is unchanged. The parameter vector $\boldsymbol\Theta$ shifts, and because the relation is linear, a standard least-squares or gradient update can estimate the new $\boldsymbol\Theta$ from measured torques:

$$\hat{\boldsymbol\Theta}\leftarrow\hat{\boldsymbol\Theta}+\Gamma Y^{\top}\left(\boldsymbol\tau_{\rm measured}-Y\hat{\boldsymbol\Theta}\right).$$

**The robot identifies its own payload while working**, with no separate calibration step and no nonlinear optimization. If the parameters entered nonlinearly — as they would if, say, $\sqrt{m}$ appeared — none of this would work.

*A caution worth stating.* Not every parameter is identifiable. Some combinations never affect the torques for any motion (a link's inertia about an axis it never rotates about, for instance), so $Y$ is rank-deficient in those directions and $\boldsymbol\Theta$ is determined only up to them. Identification routines work with a reduced set of **base parameters** — the identifiable combinations — and this is why published inertial parameters for the same robot from different labs disagree in individual entries while agreeing on every predicted torque.

## Watch out

- **You might treat $M$ as constant.** It varies by factors of three or more across a workspace, and its variation *is* the Coriolis terms.
- **You might expect $C$ to be unique.** Only $C\dot{\mathbf{q}}$ is physical. Use the Christoffel form if you need the skew-symmetry property.
- **You might confuse Coriolis with centrifugal.** Centrifugal is $\dot q_i^2$ (one joint); Coriolis is $\dot q_i\dot q_j$ with $i\neq j$ (two joints).
- **You might neglect velocity terms without checking.** Compare $\|C\dot{\mathbf{q}}\|$ with $\|\mathbf{g}\|$ at the intended speed before deciding.
- **You might assume a kinematic singularity is a dynamic problem.** $M$ stays positive definite everywhere; the arm accelerates fine at a singularity. Only the *task-space* behaviour degrades.
- **You might tune fixed gains at one configuration.** They will be wrong elsewhere by the square root of the inertia ratio.
- **You might forget friction.** Coulomb and viscous friction can be 10–30% of the torque on a geared joint, and Coulomb friction in particular is not captured by any of the four terms above.
- **You might expect all parameters to be identifiable.** Only the base parameters are.

## One-liner

> $M\ddot{\mathbf{q}}+C\dot{\mathbf{q}}+\mathbf{g} = \boldsymbol\tau$ is universal, and its three structural properties — $M$ symmetric positive definite, $\dot M-2C$ skew-symmetric, and linearity in the inertial parameters — are what license invertibility, passivity-based stability proofs, and adaptive control respectively.

## Problems

**P1 (🟢)** A 2R arm has $m_1 = 4$ kg at $l_1 = 0.4$ m, $m_2 = 2$ kg at $l_2 = 0.3$ m. (a) Write $M_{11}$, $M_{12}$, $M_{22}$ as functions of $\theta_2$. (b) Evaluate at $\theta_2 = 0°$, $90°$, $180°$. (c) Find the ratio of maximum to minimum $M_{11}$. (d) State which entry is configuration-independent and why.

**P2 (🟡)** For the arm of P1 at $\theta_2 = 60°$: (a) compute $M$ and verify positive definiteness. (b) Compute $h$ and $C$ at $\dot{\mathbf{q}} = (2,1)$ rad/s. (c) Compute $\dot M$ and verify $\dot M-2C$ is skew-symmetric. (d) Verify $\dot{\mathbf{q}}^{\top}(\dot M-2C)\dot{\mathbf{q}} = 0$ and interpret.

**P3 (🔴)** A PD controller for joint 1 of the P1 arm is tuned for critical damping ($\zeta = 1$) with $\omega_n = 12$ rad/s at $\theta_2 = 90°$, treating joint 1 as a decoupled second-order system $M_{11}\ddot\theta_1 = \tau_1$. (a) Find $K_p$ and $K_d$. (b) Find $\omega_n$ and $\zeta$ at $\theta_2 = 0°$ and $\theta_2 = 180°$. (c) Compute the peak overshoot at the worst configuration. (d) Propose two fixes, quantify the residual error of the cheaper one, and state when each is appropriate.

<details>
<summary>Solutions</summary>

**P1** (a) $$M_{11} = (m_1+m_2)l_1^2+m_2l_2^2+2m_2l_1l_2\cos\theta_2 = 6(0.16)+2(0.09)+2(2)(0.4)(0.3)\cos\theta_2$$
$$= 0.96+0.18+0.48\cos\theta_2 = 1.14+0.48\cos\theta_2,$$

$$M_{12} = M_{21} = m_2l_2^2+m_2l_1l_2\cos\theta_2 = 0.18+0.24\cos\theta_2,$$

$$M_{22} = m_2l_2^2 = 0.18.$$

(b) | $\theta_2$ | $M_{11}$ | $M_{12}$ | $M_{22}$ |
|---|---|---|---|
| $0°$ | 1.620 | 0.420 | 0.18 |
| $90°$ | 1.140 | 0.180 | 0.18 |
| $180°$ | 0.660 | $-0.060$ | 0.18 |

(c) $$\frac{M_{11}^{\max}}{M_{11}^{\min}} = \frac{1.620}{0.660} = 2.45.$$

(d) **$M_{22}$ is configuration-independent**, at $0.18$ kg·m² always.

*Why.* $M_{22}$ is the inertia joint 2 must accelerate when joint 1 is held still — which is link 2 rotating about joint 2. That inertia is $m_2l_2^2$, a property of link 2 alone, and no joint angle can change it.

**The general rule: joint $k$'s effective inertia depends only on joints $k+1,\ldots,n$** — the ones distal to it — because only those can change the mass distribution it sees. So the last joint's inertia is always constant, the second-to-last depends on one angle, and the base joint depends on all of them. That hierarchy is why distal joints are easy to control and proximal ones are not.

**P2** (a) $$\cos60° = 0.5:$$
$$M_{11} = 1.14+0.48(0.5) = 1.38, \qquad M_{12} = 0.18+0.24(0.5) = 0.30, \qquad M_{22} = 0.18.$$

$$M = \begin{bmatrix}1.38&0.30\\0.30&0.18\end{bmatrix}.$$

*Positive definiteness:* $M_{11} = 1.38>0$ ✓ and $\det M = 1.38(0.18)-0.09 = 0.2484-0.0900 = 0.1584>0$ ✓.

(b) $$h = -m_2l_1l_2\sin\theta_2 = -2(0.4)(0.3)\sin60° = -0.24(0.86603) = -0.20785.$$

$$C = \begin{bmatrix}h\dot\theta_2&h(\dot\theta_1+\dot\theta_2)\\-h\dot\theta_1&0\end{bmatrix} = \begin{bmatrix}-0.20785(1)&-0.20785(3)\\0.20785(2)&0\end{bmatrix} = \begin{bmatrix}-0.20785&-0.62354\\0.41569&0\end{bmatrix}.$$

(c) $M$ depends only on $\theta_2$, so

$$\dot M = \frac{\partial M}{\partial\theta_2}\dot\theta_2 = \begin{bmatrix}-0.48\sin\theta_2&-0.24\sin\theta_2\\-0.24\sin\theta_2&0\end{bmatrix}(1) = \begin{bmatrix}-0.41569&-0.20785\\-0.20785&0\end{bmatrix}.$$

$$\dot M-2C = \begin{bmatrix}-0.41569+0.41569&-0.20785+1.24708\\-0.20785-0.83138&0\end{bmatrix} = \begin{bmatrix}0&1.03923\\-1.03923&0\end{bmatrix}.$$

**Skew-symmetric** ✓ — diagonal zero, off-diagonals negatives of each other.

(d) $$\dot{\mathbf{q}}^{\top}\left(\dot M-2C\right)\dot{\mathbf{q}} = \begin{bmatrix}2&1\end{bmatrix}\begin{bmatrix}0&1.03923\\-1.03923&0\end{bmatrix}\begin{bmatrix}2\\1\end{bmatrix}$$
$$= \begin{bmatrix}2&1\end{bmatrix}\begin{bmatrix}1.03923\\-2.07846\end{bmatrix} = 2.07846-2.07846 = 0\ \checkmark$$

*Interpretation.* This holds for **any** $\dot{\mathbf{q}}$, not just this one — it is the definition of skew-symmetry. Physically it says the Coriolis and centrifugal forces do **no net work on the manipulator**:

$$\dot{\mathbf{q}}^{\top}C\dot{\mathbf{q}} = \tfrac12\dot{\mathbf{q}}^{\top}\dot M\dot{\mathbf{q}},$$

so the apparent "work" done by $C$ is exactly accounted for by the change in the mass matrix. Energy moves between joints — here, $C\dot{\mathbf{q}} = (-1.0393,\ 0.8314)$ N·m, so joint 1 absorbs $-2.08$ W and joint 2 receives $+0.83$ W... which do **not** cancel, because the *total* $\dot{\mathbf{q}}^{\top}C\dot{\mathbf{q}} = -2.078+0.831 = -1.247$ W is balanced by the $\tfrac12\dot{\mathbf{q}}^{\top}\dot M\dot{\mathbf{q}} = -1.247$ W change in the mass matrix ✓.

**The precise statement is not "$C$ does no work" but "$C$'s work is exactly the rate of change of the kinetic-energy metric."** That is what lets the Coriolis term drop out of a Lyapunov derivative, and it is the single property that makes manipulator control theory tractable.

**P3** (a) Modelling joint 1 as $M_{11}\ddot\theta_1 = \tau_1$ with $\tau_1 = -K_pe-K_d\dot e$:

$$M_{11}\ddot e+K_d\dot e+K_pe = 0 \quad\Longrightarrow\quad \omega_n = \sqrt{\frac{K_p}{M_{11}}}, \qquad \zeta = \frac{K_d}{2\sqrt{K_pM_{11}}}.$$

At $\theta_2 = 90°$, $M_{11} = 1.14$:

$$K_p = M_{11}\omega_n^2 = 1.14(144) = 164.16\ \mathrm{N\cdot m/rad},$$
$$K_d = 2\zeta\sqrt{K_pM_{11}} = 2(1)\sqrt{164.16(1.14)} = 2\sqrt{187.14} = 2(13.680) = 27.36\ \mathrm{N\cdot m\cdot s/rad}.$$

*Check:* $K_d = 2\zeta M_{11}\omega_n = 2(1)(1.14)(12) = 27.36$ ✓

(b) With $K_p$ and $K_d$ **fixed** and $M_{11}$ changing:

$$\omega_n = \sqrt{\frac{164.16}{M_{11}}}, \qquad \zeta = \frac{27.36}{2\sqrt{164.16\,M_{11}}} = \frac{27.36}{25.63\sqrt{M_{11}}}.$$

| $\theta_2$ | $M_{11}$ | $\omega_n$ (rad/s) | $\zeta$ |
|---|---|---|---|
| $0°$ (extended) | 1.620 | **10.07** | **0.839** |
| $90°$ (tuned) | 1.140 | 12.00 | 1.000 |
| $180°$ (folded) | 0.660 | **15.77** | **1.314** |

**The damping ratio swings from 0.84 to 1.31** and the bandwidth from 10.1 to 15.8 rad/s — a 56% spread — from the identical gains.

*The scaling:* $\omega_n\propto1/\sqrt{M_{11}}$ and $\zeta\propto1/\sqrt{M_{11}}$, so both degrade together and by the same square root.

(c) The worst configuration for overshoot is the **least damped**, $\theta_2 = 0°$ with $\zeta = 0.839$:

$$M_p = \exp\left(\frac{-\pi\zeta}{\sqrt{1-\zeta^2}}\right) = \exp\left(\frac{-\pi(0.839)}{\sqrt{1-0.704}}\right) = \exp\left(\frac{-2.6358}{0.5441}\right) = \exp(-4.8443) = 0.0079.$$

**0.79% overshoot.** For a step command of $10°$, that is $0.08°$ of overshoot.

*Is that a problem?* For many tasks, no — under 1% is barely visible. But note what it costs elsewhere: at $\theta_2 = 180°$ the loop is overdamped at $\zeta = 1.31$, and its settling time is longer than designed. **The gains that avoid overshoot at one end make the arm sluggish at the other**, and the designer must give up performance across the whole workspace to be safe at the worst point.

*And the situation is worse than this calculation suggests*, because it ignored two things: the coupling torque $M_{12}\ddot\theta_2$, which acts as a disturbance on joint 1 whenever joint 2 accelerates, and the gravity term $g_1$, which is a large configuration-dependent bias. Both are treated in [4.1](04-01-independent-joint-control.md).

(d) *Fix 1 (cheap): gain scheduling.* Compute $M_{11}(\theta_2)$ at each control cycle and set

$$K_p = M_{11}(\theta_2)\,\omega_n^2, \qquad K_d = 2\zeta M_{11}(\theta_2)\,\omega_n,$$

which restores $\omega_n = 12$ and $\zeta = 1$ **exactly**, at every configuration, for the price of one cosine and two multiplies.

*Residual error.* Gain scheduling on $M_{11}$ alone leaves untouched:

**The coupling term $M_{12}\ddot\theta_2$.** At $\theta_2 = 0°$, $M_{12} = 0.42$; an elbow acceleration of $5$ rad/s² injects $2.1$ N·m into joint 1. Against $K_p = 164.16(1.620/1.140) = 233.3$ N·m/rad, that is a steady-state error of

$$e = \frac{2.1}{233.3} = 0.0090\ \mathrm{rad} = 0.52°.$$

**The Coriolis term.** At $\dot{\mathbf{q}} = (5,-3)$ rad/s and $\theta_2 = 60°$, $(C\dot{\mathbf{q}})_1 = h\dot\theta_2\dot\theta_1+h(\dot\theta_1+\dot\theta_2)\dot\theta_2 = -0.208[(-3)(5)+(2)(-3)] = -0.208(-21) = 4.37$ N·m, giving another $\sim1°$ of error.

**The gravity term $g_1$**, which is by far the largest — up to $23.5$ N·m for this arm, or $5.8°$ of error at these gains, unless compensated separately.

So gain scheduling fixes the *dynamics* of the loop but leaves a **degree-scale tracking error** from the terms it does not model.

*Fix 2 (thorough): computed-torque control.* Compute the **full** inverse dynamics each cycle and command

$$\boldsymbol\tau = M(\mathbf{q})\left(\ddot{\mathbf{q}}_d-K_d\dot{\mathbf{e}}-K_p\mathbf{e}\right)+C(\mathbf{q},\dot{\mathbf{q}})\dot{\mathbf{q}}+\mathbf{g}(\mathbf{q}),$$

which cancels **every** nonlinear term and leaves the exactly linear, exactly decoupled error dynamics

$$\ddot{\mathbf{e}}+K_d\dot{\mathbf{e}}+K_p\mathbf{e} = \mathbf{0}$$

at every configuration and every speed. This is [4.2](04-02-computed-torque-control.md), and it is the right answer whenever the model is good.

*When each is appropriate.*

**Gain scheduling** is right when the arm is slow (velocity terms negligible), when gravity is separately compensated, when the model is uncertain, or when the controller runs on hardware that cannot evaluate full inverse dynamics at the servo rate. It also degrades gracefully: a wrong $M_{11}$ estimate detunes the loop but does not destabilize it.

**Computed torque** is right when the arm is fast, when tracking accuracy matters, and when the inertial parameters are known to a few percent. Its weakness is exactly its strength: it relies on the model, and a bad model injects the wrong feedforward. In practice it is always paired with feedback gains large enough to reject the modelling error, and often with the adaptive parameter update that Property 3 licenses.

*The honest summary.* **Neither fix removes the need for the other.** Production controllers do gravity compensation always, computed torque when the model supports it, and keep enough feedback gain to cover what the model misses.

</details>

## Flashback

**From Lesson 3.1 (Lagrangian dynamics of manipulators):** A single link with $I = 0.5$ kg·m², $m = 2$ kg, $l = 0.5$ m has $I\ddot\theta+mgl\cos\theta = \tau$. (a) Identify the $M$, $C$ and $\mathbf{g}$ terms. (b) Verify the skew-symmetry property. (c) Comment on what a one-link arm cannot illustrate.

<details>
<summary>Solution</summary>

(a) $$M = I = 0.5\ \mathrm{kg\cdot m^2}\ \text{(constant)}, \qquad C = 0, \qquad g(\theta) = mgl\cos\theta = 9.81\cos\theta\ \mathrm{N\cdot m}.$$

(b) $$\dot M = 0 \quad\text{(since }M\text{ is constant)}, \qquad C = 0,$$
$$\dot M-2C = 0,$$

which is trivially skew-symmetric (the $1\times1$ zero matrix) ✓.

*Why $C = 0$ here.* The Christoffel symbol is

$$c_{111} = \frac12\left(\frac{\partial M_{11}}{\partial q_1}+\frac{\partial M_{11}}{\partial q_1}-\frac{\partial M_{11}}{\partial q_1}\right) = \frac12\frac{\partial M}{\partial\theta} = 0,$$

because $M$ does not depend on $\theta$. **Constant mass matrix means no Coriolis terms** — and that is a general statement, not a coincidence of one link.

(c) *What a single link cannot show.*

**Inertial coupling.** With one joint there are no off-diagonal entries, so the phenomenon that makes multi-joint control hard is entirely absent.

**Coriolis and centrifugal forces.** These require $M$ to vary with configuration, which requires at least two joints whose relative angle changes the mass distribution. A single revolute link rotating about a fixed axis has a constant inertia, so $C \equiv 0$ **always**, at any speed.

**Configuration-dependent inertia.** $M = I$ is a number. All the gain-scheduling difficulty of P3 disappears.

**Non-trivial skew-symmetry.** The property holds, but vacuously.

*What it does show, and why it is still the right first example.* The single link exhibits the two things that dominate a real arm's torque budget at ordinary speeds: **inertial torque** $I\ddot\theta$ and **gravity torque** $mgl\cos\theta$. [3.1](03-01-lagrangian-dynamics.md) Example 1 found gravity to be seven times the inertial term at $2$ rad/s², and that ratio carries over to multi-link arms almost unchanged. **The single link gets the magnitudes right and the structure wrong**, which makes it an excellent sanity check and a poor design basis.

*The minimum interesting case is two links*, because two is the smallest number that produces a configuration-dependent $M$, and configuration dependence is where every genuinely manipulator-specific phenomenon comes from — the coupling, the Coriolis terms, the varying inertia, and the whole argument for model-based control.

</details>

## Connections

- **Backward:** the derivation is [3.1](03-01-lagrangian-dynamics.md)'s; the gravity vector is [2.5](02-05-statics-jacobian-transpose.md)'s; the per-link Jacobians that build $M$ are [2.3](02-03-manipulator-jacobian.md)'s.
- **Forward:** [3.3](03-03-newton-euler-recursive-dynamics.md) evaluates the left side in $O(n)$; [4.1](04-01-independent-joint-control.md) treats the coupling as a disturbance; [4.2](04-02-computed-torque-control.md) cancels it exactly.
- **Sideways:** $M(\mathbf{q})$ is a Riemannian metric on the configuration manifold and $C$ carries its Christoffel symbols, so free motion is geodesic flow — the geometry of [`differential-geometry`](../../differential-geometry/syllabus.md). The skew-symmetry is passivity, the same input–output property that underlies port-Hamiltonian systems and the stability arguments of [`control-systems` 5.3](../../control-systems/lessons/05-03-controllability-observability.md)'s state-space framework.
