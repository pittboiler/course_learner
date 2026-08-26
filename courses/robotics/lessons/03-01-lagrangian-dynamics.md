# Robotics & Kinematics · Lesson 3.1: Lagrangian dynamics of manipulators

> ⏱ ~15 min · Module 3: Dynamics and trajectory generation · Builds on: [2.3 The manipulator Jacobian](02-03-manipulator-jacobian.md), [`analytical-mechanics` 1.4](../../analytical-mechanics/lessons/01-04-lagrangian-applications.md) · Unlocks: [3.2 The manipulator dynamics equation](03-02-manipulator-dynamics-equation.md), [3.3 Newton–Euler recursive dynamics](03-03-newton-euler-recursive-dynamics.md)

## Why this matters

Everything so far has been kinematics: where things are and how fast they move, with no mention of mass. That is enough to plan a path, and not nearly enough to *execute* one. Motors produce torque, and to command a motion you need to know what torque it takes.

The [Lagrangian](../reference.md#lagrangian) route to those equations is the one to learn first. Write down the kinetic and potential energy — both scalars, both straightforward — and turn a crank. No free-body diagrams, no constraint forces to eliminate, no vector bookkeeping about which frame a force is expressed in. The constraint forces that a Newtonian analysis has to introduce and then cancel never appear at all.

For a two-link arm it is a page of algebra. For a six-link arm it is a computer's job — but the *structure* it reveals, worked out in [3.2](03-02-manipulator-dynamics-equation.md), is what every model-based controller in Module 4 is built on.

## The idea

The recipe, from [`analytical-mechanics` 1.4](../../analytical-mechanics/lessons/01-04-lagrangian-applications.md), is four steps:

1. Choose generalized coordinates. For a manipulator, the joint variables $\mathbf{q}$ are already exactly that — independent, complete, and equal in number to the degrees of freedom.
2. Write the kinetic energy $T(\mathbf{q},\dot{\mathbf{q}})$ and the potential energy $V(\mathbf{q})$.
3. Form $L = T-V$.
4. Apply the Euler–Lagrange equation once per coordinate.

The step that does the real work is the kinetic energy. For a rigid link, it splits into translation of the centre of mass plus rotation about it:

$$T_i = \tfrac12m_i\mathbf{v}_{c_i}^{\top}\mathbf{v}_{c_i}+\tfrac12\boldsymbol\omega_i^{\top}I_i\boldsymbol\omega_i.$$

And both $\mathbf{v}_{c_i}$ and $\boldsymbol\omega_i$ are **linear in $\dot{\mathbf{q}}$**, through the Jacobians of [2.3](02-03-manipulator-jacobian.md) — built for each link's centre of mass rather than for the tool. So

$$T = \tfrac12\dot{\mathbf{q}}^{\top}M(\mathbf{q})\,\dot{\mathbf{q}},$$

a quadratic form whose matrix $M(\mathbf{q})$ is assembled directly from the per-link Jacobians. **The Jacobian machinery of Module 2 does the hardest part of the dynamics**, which is a good return on the effort of building it.

Potential energy is easier still: for gravity, $V = -\sum m_i\mathbf{g}^{\top}\mathbf{p}_{c_i}$, a sum of heights.

The one thing to be careful about: $M$ depends on $\mathbf{q}$, so when the Euler–Lagrange equation differentiates $T$ with respect to time, the chain rule produces terms in $\dot{\mathbf{q}}^2$ as well as $\ddot{\mathbf{q}}$. Those velocity-squared terms are the **Coriolis and centrifugal** forces, and they are not optional — at speed they can rival the inertial terms.

## The formal version

**Euler–Lagrange equation.**

$$\boxed{\;\frac{d}{dt}\left(\frac{\partial L}{\partial\dot q_i}\right)-\frac{\partial L}{\partial q_i} = \tau_i, \qquad L = T-V,\;}$$

with $\tau_i$ the generalized force (joint torque for revolute, force for prismatic) doing work on $q_i$.

**Kinetic energy of a manipulator.**

$$\boxed{\;T = \frac12\dot{\mathbf{q}}^{\top}M(\mathbf{q})\dot{\mathbf{q}}, \qquad M(\mathbf{q}) = \sum_{i=1}^{n}\left[m_iJ_{v_i}^{\top}J_{v_i}+J_{\omega_i}^{\top}\,{}^0R_i\,{}^{i}I_i\,{}^0R_i^{\top}\,J_{\omega_i}\right],\;}$$

where $J_{v_i}$ and $J_{\omega_i}$ are the linear and angular Jacobians of link $i$'s centre of mass, and $^iI_i$ is its inertia tensor in its own frame (constant) rotated into the base frame.

*In words: every link contributes a translational term and a rotational term, and both are quadratic forms in $\dot{\mathbf{q}}$.*

**Potential energy.**

$$V(\mathbf{q}) = -\sum_{i=1}^{n}m_i\,\mathbf{g}^{\top}\mathbf{p}_{c_i}(\mathbf{q}), \qquad \mathbf{g} = (0,0,-9.81)\ \mathrm{m/s^2}\ \text{(a vector, pointing down)}.$$

**Working out the Euler–Lagrange terms.** Since $V$ does not depend on $\dot{\mathbf{q}}$:

$$\frac{\partial L}{\partial\dot q_k} = \frac{\partial T}{\partial\dot q_k} = \sum_jM_{kj}\dot q_j,$$

$$\frac{d}{dt}\left(\frac{\partial L}{\partial\dot q_k}\right) = \sum_jM_{kj}\ddot q_j+\sum_j\dot M_{kj}\dot q_j = \sum_jM_{kj}\ddot q_j+\sum_{i,j}\frac{\partial M_{kj}}{\partial q_i}\dot q_i\dot q_j,$$

$$\frac{\partial L}{\partial q_k} = \frac12\sum_{i,j}\frac{\partial M_{ij}}{\partial q_k}\dot q_i\dot q_j-\frac{\partial V}{\partial q_k}.$$

Collecting gives the canonical form:

$$\boxed{\;\sum_jM_{kj}\ddot q_j+\sum_{i,j}c_{kij}\dot q_i\dot q_j+g_k = \tau_k,\;}$$

with the **Christoffel symbols of the first kind**

$$\boxed{\;c_{kij} = \frac12\left(\frac{\partial M_{kj}}{\partial q_i}+\frac{\partial M_{ki}}{\partial q_j}-\frac{\partial M_{ij}}{\partial q_k}\right), \qquad g_k = \frac{\partial V}{\partial q_k}.\;}$$

*In words: the mass matrix supplies the inertial term, its derivatives supply the velocity-squared terms, and the potential's gradient supplies gravity.* That is the whole of manipulator dynamics, and [3.2](03-02-manipulator-dynamics-equation.md) reads the structure.

**Distinguishing the velocity terms.**

| Term | Form | Physical origin |
|---|---|---|
| Centrifugal | $c_{kii}\dot q_i^2$ | a single joint's rotation flinging mass outward |
| Coriolis | $c_{kij}\dot q_i\dot q_j$, $i\neq j$ | two joints rotating simultaneously |

**Standard 2R planar arm.** With point masses $m_1$, $m_2$ at the link ends, link lengths $l_1$, $l_2$:

$$M(\mathbf{q}) = \begin{bmatrix}(m_1+m_2)l_1^2+m_2l_2^2+2m_2l_1l_2\cos\theta_2 & m_2l_2^2+m_2l_1l_2\cos\theta_2\\ m_2l_2^2+m_2l_1l_2\cos\theta_2 & m_2l_2^2\end{bmatrix},$$

$$C(\mathbf{q},\dot{\mathbf{q}}) = \begin{bmatrix}h\dot\theta_2 & h(\dot\theta_1+\dot\theta_2)\\-h\dot\theta_1&0\end{bmatrix}, \qquad h = -m_2l_1l_2\sin\theta_2,$$

$$\mathbf{g}(\mathbf{q}) = \begin{bmatrix}(m_1+m_2)gl_1\cos\theta_1+m_2gl_2\cos(\theta_1+\theta_2)\\m_2gl_2\cos(\theta_1+\theta_2)\end{bmatrix}.$$

**This is the reference model** for the rest of the course; it is worth being able to write down.

**Adding non-conservative effects.** Friction and other losses are appended on the right:

$$\boldsymbol\tau = M\ddot{\mathbf{q}}+C\dot{\mathbf{q}}+\mathbf{g}+\underbrace{F_v\dot{\mathbf{q}}+F_s\operatorname{sgn}(\dot{\mathbf{q}})}_{\text{viscous + Coulomb friction}}+\underbrace{J^{\top}\mathbf{F}_{\rm ext}}_{\text{contact, from }2.5}.$$

**Cost.** The Lagrangian derivation is $O(n^4)$ in the number of joints if done naively, which is why [3.3](03-03-newton-euler-recursive-dynamics.md)'s recursive $O(n)$ formulation is what actually runs in a controller. The Lagrangian route earns its place by making the **structure** visible — and structure is what a controller design needs.

## Picture

![A two-panel figure. Left: a planar two-link arm with each link's centre of mass marked, showing the velocity of each centre of mass decomposed into contributions from the two joint rates, above the resulting expression for kinetic energy as one half q-dot transpose M q-dot, with the mass matrix drawn as a two-by-two block whose entries are annotated with which link contributes to each. Right: a flow diagram of the Lagrangian recipe — choose generalized coordinates, write T and V, form L equals T minus V, differentiate by the Euler-Lagrange formula — with an arrow out of the last box into the canonical form M q-double-dot plus C q-dot plus g equals tau, and each of the three terms labelled with where it came from.](assets/03-01-fig1.svg)

Left: kinetic energy is a quadratic form whose matrix is assembled from per-link Jacobians. Every entry of $M$ has a physical meaning: $M_{kk}$ is the effective inertia felt by joint $k$, and $M_{kj}$ is the inertial coupling between joints $k$ and $j$.

Right: the recipe. Two scalars in, a vector equation out, with no constraint forces anywhere in between.

## Worked examples

**Example 1 (a single link, the boss problem).** A point mass $m = 2$ kg at the end of a massless rod of length $l = 0.5$ m rotates in a vertical plane, with $\theta$ measured **from horizontal**. Derive the equation of motion.

*Generalized coordinate.* One degree of freedom: $q = \theta$.

*Kinetic energy.* The mass moves on a circle of radius $l$ at speed $l\dot\theta$:

$$T = \tfrac12m\left(l\dot\theta\right)^2 = \tfrac12ml^2\dot\theta^2 = \tfrac12I\dot\theta^2, \qquad I = ml^2 = 2(0.25) = 0.5\ \mathrm{kg\cdot m^2}.$$

*Potential energy.* With $\theta$ from horizontal, the height is $l\sin\theta$:

$$V = mgl\sin\theta.$$

*Lagrangian.*

$$L = \tfrac12ml^2\dot\theta^2-mgl\sin\theta.$$

*Euler–Lagrange.*

$$\frac{\partial L}{\partial\dot\theta} = ml^2\dot\theta, \qquad \frac{d}{dt}\left(\frac{\partial L}{\partial\dot\theta}\right) = ml^2\ddot\theta,$$
$$\frac{\partial L}{\partial\theta} = -mgl\cos\theta.$$

$$ml^2\ddot\theta+mgl\cos\theta = \tau,$$

$$\boxed{\;I\ddot\theta+mgl\cos\theta = \tau.\;}$$

*Sanity checks.*

At $\theta = 90°$ (straight up) and $\theta = -90°$ (straight down), $\cos\theta = 0$ and the gravity torque vanishes — correct, since the mass is directly above or below the pivot and gravity has no moment arm.

At $\theta = 0$ (horizontal), $\cos\theta = 1$ and the gravity torque is maximal at $mgl = 2(9.81)(0.5) = 9.81$ N·m — again correct, since the moment arm is the full length.

*The static holding torque* to keep the link at $\theta = 45°$:

$$\tau = mgl\cos45° = 9.81(0.70711) = 6.937\ \mathrm{N\cdot m}.$$

**About 6.9 N·m just to hold still.** That is the number a motor must supply continuously with no motion at all, and it is why gravity compensation is the first thing any manipulator controller does.

*Comparing against the accelerating torque.* To accelerate the link at $\ddot\theta = 2$ rad/s² takes $I\ddot\theta = 0.5(2) = 1$ N·m — **seven times less than holding it against gravity**. For a slow, heavily loaded arm, gravity dominates the torque budget entirely; only at high acceleration does the inertial term compete.

**Example 2 (the 2R arm, derived and evaluated).** $m_1 = 3$ kg at $l_1 = 0.5$ m, $m_2 = 2$ kg at $l_2 = 0.4$ m, both point masses at the link ends, in a vertical plane.

*Positions.*

$$\mathbf{p}_1 = \left(l_1c_1,\ l_1s_1\right), \qquad \mathbf{p}_2 = \left(l_1c_1+l_2c_{12},\ l_1s_1+l_2s_{12}\right),$$

writing $c_1 = \cos\theta_1$, $c_{12} = \cos(\theta_1+\theta_2)$.

*Velocities.*

$$\dot{\mathbf{p}}_1 = \left(-l_1s_1\dot\theta_1,\ l_1c_1\dot\theta_1\right), \qquad \|\dot{\mathbf{p}}_1\|^2 = l_1^2\dot\theta_1^2.$$

$$\dot{\mathbf{p}}_2 = \left(-l_1s_1\dot\theta_1-l_2s_{12}(\dot\theta_1+\dot\theta_2),\ l_1c_1\dot\theta_1+l_2c_{12}(\dot\theta_1+\dot\theta_2)\right).$$

Squaring and using $c_1c_{12}+s_1s_{12} = \cos\theta_2$:

$$\|\dot{\mathbf{p}}_2\|^2 = l_1^2\dot\theta_1^2+l_2^2(\dot\theta_1+\dot\theta_2)^2+2l_1l_2\cos\theta_2\,\dot\theta_1(\dot\theta_1+\dot\theta_2).$$

*Kinetic energy.*

$$T = \tfrac12m_1l_1^2\dot\theta_1^2+\tfrac12m_2\left[l_1^2\dot\theta_1^2+l_2^2(\dot\theta_1+\dot\theta_2)^2+2l_1l_2c_2\dot\theta_1(\dot\theta_1+\dot\theta_2)\right].$$

Collecting into $T = \tfrac12\dot{\mathbf{q}}^{\top}M\dot{\mathbf{q}}$ gives exactly the $M$ quoted above.

*Potential energy.*

$$V = m_1gl_1s_1+m_2g\left(l_1s_1+l_2s_{12}\right), \qquad \mathbf{g}(\mathbf{q}) = \frac{\partial V}{\partial\mathbf{q}}$$

as quoted.

*Evaluating at $\mathbf{q} = (30°, 45°)$, $\dot{\mathbf{q}} = (1.0, -0.5)$ rad/s, $\ddot{\mathbf{q}} = (2.0, 1.0)$ rad/s².*

$$M = \begin{bmatrix}2.13569&0.60284\\0.60284&0.32000\end{bmatrix}\ \mathrm{kg\cdot m^2}, \qquad h = -m_2l_1l_2\sin45° = -2(0.5)(0.4)(0.70711) = -0.28284,$$

$$C = \begin{bmatrix}h\dot\theta_2&h(\dot\theta_1+\dot\theta_2)\\-h\dot\theta_1&0\end{bmatrix} = \begin{bmatrix}0.14142&-0.14142\\0.28284&0\end{bmatrix}, \qquad \mathbf{g} = \begin{bmatrix}23.2705\\2.0312\end{bmatrix}\ \mathrm{N\cdot m}.$$

$$\boldsymbol\tau = M\ddot{\mathbf{q}}+C\dot{\mathbf{q}}+\mathbf{g} = \begin{bmatrix}4.8742\\1.5257\end{bmatrix}+\begin{bmatrix}0.2121\\0.2828\end{bmatrix}+\begin{bmatrix}23.2705\\2.0312\end{bmatrix} = \begin{bmatrix}28.3568\\3.8397\end{bmatrix}\ \mathrm{N\cdot m}.$$

*Reading the three contributions.*

| Term | $\tau_1$ | $\tau_2$ | Share of $\tau_1$ |
|---|---|---|---|
| Inertial $M\ddot{\mathbf{q}}$ | 4.874 | 1.526 | 17% |
| Coriolis/centrifugal $C\dot{\mathbf{q}}$ | 0.212 | 0.283 | **0.7%** |
| Gravity $\mathbf{g}$ | 23.270 | 2.031 | **82%** |

**Gravity dominates at these speeds**, exactly as Example 1 suggested. The Coriolis terms are under 1% — but that is a statement about $\dot\theta\approx1$ rad/s, not a general one: those terms scale as $\dot\theta^2$, so at $10$ rad/s they would be a hundred times larger, contributing 21 N·m and rivalling gravity.

**This velocity scaling is why fast arms need full dynamic models and slow ones do not.** A slow, heavily loaded arm can be controlled with gravity compensation and a PD loop; a fast one cannot.

*Two structural checks worth running on any $M$ you compute.*

**Symmetry.** $M_{12} = M_{21} = 0.60284$ ✓. This is forced — $M$ is the matrix of a quadratic form — and an asymmetric result means an algebra error.

**Positive definiteness.** Eigenvalues $(0.138,\ 2.318)$, both positive ✓. Kinetic energy is $\tfrac12\dot{\mathbf{q}}^{\top}M\dot{\mathbf{q}}>0$ for any nonzero motion, so $M$ must be positive definite — and this guarantees $M^{-1}$ exists, which every controller in Module 4 relies on.

**The skew-symmetry property.** Computing $\dot M-2C$ numerically:

$$\dot M-2C = \begin{bmatrix}0&0.42426\\-0.42426&0\end{bmatrix},$$

**skew-symmetric** ✓. This is not a coincidence of these numbers; it is an identity that holds for every manipulator, and it encodes energy conservation:

$$\frac{d}{dt}\left(\tfrac12\dot{\mathbf{q}}^{\top}M\dot{\mathbf{q}}\right) = \dot{\mathbf{q}}^{\top}\left(\boldsymbol\tau-\mathbf{g}\right)$$

follows from it — the Coriolis terms do no net work. [3.2](03-02-manipulator-dynamics-equation.md) develops the consequence, which is that a passivity-based controller can be proved stable without ever knowing the parameter values.

## Watch out

- **You might measure $\theta$ from the wrong reference.** From horizontal, gravity gives $\cos\theta$; from vertical, $\sin\theta$. Both appear in the literature; state yours.
- **You might use the tool Jacobian for a link's kinetic energy.** Each link needs the Jacobian of **its own** centre of mass.
- **You might drop the Coriolis terms.** They are negligible at 1 rad/s and dominant at 10. Check $\dot\theta^2$ against $\ddot\theta$ before deciding.
- **You might forget that $M$ depends on $\mathbf{q}$.** That configuration dependence is exactly what generates the velocity-squared terms; treating $M$ as constant loses them entirely.
- **You might treat gravity as a constant torque.** $\mathbf{g}(\mathbf{q})$ varies with configuration and can change sign as a link passes vertical.
- **You might produce an asymmetric $M$.** It must be symmetric and positive definite. Check both.
- **You might use the Lagrangian method for real-time computation.** It is $O(n^4)$; use [3.3](03-03-newton-euler-recursive-dynamics.md)'s $O(n)$ recursion in a controller.
- **You might forget the rotational kinetic energy.** Point-mass models drop it, but a real link with distributed mass has $\tfrac12\boldsymbol\omega^{\top}I\boldsymbol\omega$ as well, and for a long thin link it is not small.

## One-liner

> Write $T = \tfrac12\dot{\mathbf{q}}^{\top}M(\mathbf{q})\dot{\mathbf{q}}$ from the per-link Jacobians and $V$ from the link heights, apply Euler–Lagrange once per joint, and out comes $M\ddot{\mathbf{q}}+C\dot{\mathbf{q}}+\mathbf{g} = \boldsymbol\tau$ with no free-body diagrams and no constraint forces anywhere.

## Problems

**P1 (🟢)** A point mass $m = 3$ kg at $l = 0.4$ m rotates in a vertical plane, $\theta$ from horizontal. (a) Find $I$. (b) Write $T$ and $V$. (c) Derive the equation of motion. (d) Find the torque to hold it at $\theta = 60°$ and the torque to accelerate it at $5$ rad/s² there.

**P2 (🟡)** A 2R planar arm has $m_1 = 4$ kg at $l_1 = 0.4$ m, $m_2 = 2$ kg at $l_2 = 0.3$ m (point masses at the link ends), in a vertical plane. At $\mathbf{q} = (0°, 90°)$: (a) compute $M$. (b) Compute $\mathbf{g}$. (c) Verify $M$ is symmetric and positive definite. (d) Find the torques needed for $\ddot{\mathbf{q}} = (1, 0)$ rad/s² from rest.

**P3 (🔴)** For the arm of P2 at $\mathbf{q} = (0°, 90°)$ with $\dot{\mathbf{q}} = (3, -2)$ rad/s and $\ddot{\mathbf{q}} = (1, 1)$ rad/s²: (a) compute $h$ and $C$. (b) Compute all three torque contributions separately. (c) Repeat at $\dot{\mathbf{q}} = (9, -6)$ rad/s (three times faster) and tabulate. (d) Determine the joint speed at which the Coriolis term equals the gravity term for joint 1, and explain what this implies about when a full dynamic model is required.

<details>
<summary>Solutions</summary>

**P1** (a) $$I = ml^2 = 3(0.4)^2 = 3(0.16) = 0.48\ \mathrm{kg\cdot m^2}.$$

(b) $$T = \tfrac12I\dot\theta^2 = 0.24\dot\theta^2, \qquad V = mgl\sin\theta = 3(9.81)(0.4)\sin\theta = 11.772\sin\theta\ \mathrm{J}.$$

(c) $$L = 0.24\dot\theta^2-11.772\sin\theta,$$
$$\frac{d}{dt}\left(\frac{\partial L}{\partial\dot\theta}\right) = 0.48\ddot\theta, \qquad \frac{\partial L}{\partial\theta} = -11.772\cos\theta,$$

$$\boxed{0.48\ddot\theta+11.772\cos\theta = \tau.}$$

(d) *Holding torque at $\theta = 60°$:*

$$\tau = 11.772\cos60° = 11.772(0.5) = 5.886\ \mathrm{N\cdot m}.$$

*With $\ddot\theta = 5$ rad/s²:*

$$\tau = 0.48(5)+5.886 = 2.400+5.886 = 8.286\ \mathrm{N\cdot m}.$$

**Gravity is 71% of the total** even at a fairly brisk $5$ rad/s². The motor must be sized for the sum, and the static component is what determines whether the arm can hold a pose indefinitely without overheating — a separate and often binding constraint.

**P2** (a) At $\theta_2 = 90°$, $\cos\theta_2 = 0$:

$$M_{11} = (m_1+m_2)l_1^2+m_2l_2^2+2m_2l_1l_2\cos\theta_2 = 6(0.16)+2(0.09)+0 = 0.96+0.18 = 1.14,$$
$$M_{12} = M_{21} = m_2l_2^2+m_2l_1l_2\cos\theta_2 = 0.18+0 = 0.18,$$
$$M_{22} = m_2l_2^2 = 0.18.$$

$$M = \begin{bmatrix}1.14&0.18\\0.18&0.18\end{bmatrix}\ \mathrm{kg\cdot m^2}.$$

(b) At $\theta_1 = 0°$, $\theta_1+\theta_2 = 90°$: $\cos\theta_1 = 1$, $\cos(\theta_1+\theta_2) = 0$.

$$g_1 = (m_1+m_2)gl_1\cos\theta_1+m_2gl_2\cos(\theta_1+\theta_2) = 6(9.81)(0.4)(1)+2(9.81)(0.3)(0) = 23.544,$$
$$g_2 = m_2gl_2\cos(\theta_1+\theta_2) = 0.$$

$$\mathbf{g} = \begin{bmatrix}23.544\\0\end{bmatrix}\ \mathrm{N\cdot m}.$$

**$g_2 = 0$** because the second link points straight up: its mass is directly above joint 2, so gravity has no moment arm about it.

(c) *Symmetry:* $M_{12} = M_{21} = 0.18$ ✓

*Positive definiteness* by Sylvester's criterion:

$$M_{11} = 1.14>0\ \checkmark, \qquad \det M = 1.14(0.18)-0.18^2 = 0.2052-0.0324 = 0.1728>0\ \checkmark$$

(Eigenvalues, for completeness: $\lambda^2-1.32\lambda+0.1728 = 0$ gives $\lambda = 1.1726,\ 0.1474$, both positive ✓.)

(d) From rest, $\dot{\mathbf{q}} = \mathbf{0}$, so the Coriolis term vanishes:

$$\boldsymbol\tau = M\begin{bmatrix}1\\0\end{bmatrix}+\mathbf{g} = \begin{bmatrix}1.14\\0.18\end{bmatrix}+\begin{bmatrix}23.544\\0\end{bmatrix} = \begin{bmatrix}24.684\\0.180\end{bmatrix}\ \mathrm{N\cdot m}.$$

**Note that accelerating joint 1 requires torque at joint 2** (0.18 N·m), even though joint 2 is not accelerating. That is the off-diagonal $M_{12}$ — **inertial coupling** — and it is why independent-joint control ([4.1](04-01-independent-joint-control.md)) treats it as a disturbance and computed-torque control ([4.2](04-02-computed-torque-control.md)) cancels it.

**P3** (a) $$h = -m_2l_1l_2\sin\theta_2 = -2(0.4)(0.3)\sin90° = -0.24.$$

$$C = \begin{bmatrix}h\dot\theta_2&h(\dot\theta_1+\dot\theta_2)\\-h\dot\theta_1&0\end{bmatrix} = \begin{bmatrix}-0.24(-2)&-0.24(3-2)\\0.24(3)&0\end{bmatrix} = \begin{bmatrix}0.48&-0.24\\0.72&0\end{bmatrix}.$$

(b) $$M\ddot{\mathbf{q}} = \begin{bmatrix}1.14&0.18\\0.18&0.18\end{bmatrix}\begin{bmatrix}1\\1\end{bmatrix} = \begin{bmatrix}1.32\\0.36\end{bmatrix},$$

$$C\dot{\mathbf{q}} = \begin{bmatrix}0.48&-0.24\\0.72&0\end{bmatrix}\begin{bmatrix}3\\-2\end{bmatrix} = \begin{bmatrix}1.44+0.48\\2.16\end{bmatrix} = \begin{bmatrix}1.92\\2.16\end{bmatrix},$$

$$\mathbf{g} = \begin{bmatrix}23.544\\0\end{bmatrix}.$$

$$\boldsymbol\tau = \begin{bmatrix}26.784\\2.520\end{bmatrix}\ \mathrm{N\cdot m}.$$

(c) At $\dot{\mathbf{q}} = (9, -6)$ rad/s, every entry of $C$ triples, and $C\dot{\mathbf{q}}$ therefore scales by **nine**:

$$C = \begin{bmatrix}1.44&-0.72\\2.16&0\end{bmatrix}, \qquad C\dot{\mathbf{q}} = \begin{bmatrix}12.96+4.32\\19.44\end{bmatrix} = \begin{bmatrix}17.28\\19.44\end{bmatrix}.$$

| Term | $\dot{\mathbf{q}} = (3,-2)$ | $\dot{\mathbf{q}} = (9,-6)$ | Scaling |
|---|---|---|---|
| $M\ddot{\mathbf{q}}$ | $(1.32,\ 0.36)$ | $(1.32,\ 0.36)$ | unchanged |
| $C\dot{\mathbf{q}}$ | $(1.92,\ 2.16)$ | $(17.28,\ 19.44)$ | **$\times9$** |
| $\mathbf{g}$ | $(23.544,\ 0)$ | $(23.544,\ 0)$ | unchanged |
| $\boldsymbol\tau$ | $(26.784,\ 2.520)$ | $(42.144,\ 19.800)$ | — |

**Joint 2's torque grows by a factor of 7.9** — from 2.5 to 19.8 N·m — entirely from the velocity terms, with no change in the commanded acceleration. And at the higher speed the Coriolis term is 98% of joint 2's total torque.

(d) *When the Coriolis term equals gravity for joint 1.* Scale the velocity by $k$, so $\dot{\mathbf{q}} = k(3,-2)$ and

$$\left(C\dot{\mathbf{q}}\right)_1 = 1.92k^2.$$

Setting this equal to $g_1 = 23.544$:

$$k^2 = \frac{23.544}{1.92} = 12.263, \qquad k = 3.502.$$

$$\dot{\mathbf{q}} = 3.502(3,\ -2) = (10.5,\ -7.0)\ \mathrm{rad/s}.$$

**At about $10$ rad/s at joint 1, the Coriolis and centrifugal terms match gravity.** Ten rad/s is 1.7 revolutions per second — fast, but entirely ordinary for an industrial arm doing pick-and-place, where joint speeds of 5–15 rad/s are standard.

*What this implies about modelling, and the answer is a spectrum rather than a rule:*

**Below about $1$ rad/s: gravity compensation suffices.** The velocity terms are under 1% of gravity ($k = 0.33$ gives $0.21$ N·m against $23.5$). A PD controller with a gravity feedforward term will track well, and this is why teaching pendants, surgical robots and large slow palletizers get away with simple control.

**Between $1$ and $5$ rad/s: the velocity terms are a significant disturbance.** At $k = 1.67$ ($\dot\theta_1 = 5$ rad/s) the Coriolis term is $5.4$ N·m, or 23% of gravity. A high-gain PD loop can reject it, but the tracking error during fast segments will be visible and the joint torques will show it.

**Above $5$ rad/s: a full dynamic model is required.** The velocity terms are comparable to or larger than everything else, they are strongly configuration-dependent, and no fixed feedforward can anticipate them. **This is where computed-torque control ([4.2](04-02-computed-torque-control.md)) stops being a refinement and becomes necessary.**

*Two further points worth carrying.*

**The threshold depends on the arm, not just the speed.** $h = -m_2l_1l_2\sin\theta_2$ scales with the distal mass and both link lengths, while gravity scales with the total mass and the horizontal reach. A long, light arm has a lower crossover speed than a short, heavy one. The number $10$ rad/s is this arm's, not a universal constant.

**Configuration matters as much as speed.** At $\theta_2 = 0$ or $180°$, $h = 0$ and the Coriolis terms vanish entirely regardless of speed — the arm is collinear, and there is no "flinging" geometry. Conversely, at $\theta_2 = 90°$ (this configuration) $|h|$ is maximal. **The same arm at the same speed can have negligible or dominant Coriolis terms depending only on the elbow angle**, which is precisely why these terms cannot be handled by a fixed feedforward and must be computed from the current configuration each cycle.

</details>

## Flashback

**From Lesson 2.5 (Statics and the Jacobian transpose):** A 2R planar arm has $m_1 = 4$ kg at $l_1 = 0.4$ m and $m_2 = 2$ kg at $l_2 = 0.3$ m. At $\mathbf{q} = (0°, 90°)$: (a) compute the gravity torques using $\boldsymbol\tau_g = -\sum J_{v_i}^{\top}m_i\mathbf{g}$. (b) Compare with the $\partial V/\partial\mathbf{q}$ result of P2.

<details>
<summary>Solution</summary>

(a) *Centres of mass* (point masses at the link ends):

$$\mathbf{p}_{c1} = (0.4\cos0°,\ 0.4\sin0°) = (0.4,\ 0), \qquad \mathbf{p}_1 = (0.4,\ 0),$$
$$\mathbf{p}_{c2} = \mathbf{p}_1+(0.3\cos90°,\ 0.3\sin90°) = (0.4,\ 0.3).$$

*Jacobians.*

$$J_{v1} = \begin{bmatrix}\hat k\times\mathbf{p}_{c1}&\mathbf{0}\end{bmatrix} = \begin{bmatrix}0&0\\0.4&0\end{bmatrix},$$

$$J_{v2} = \begin{bmatrix}\hat k\times(\mathbf{p}_{c2}-\mathbf{p}_0)&\hat k\times(\mathbf{p}_{c2}-\mathbf{p}_1)\end{bmatrix}.$$

With $\mathbf{p}_{c2}-\mathbf{p}_0 = (0.4,\ 0.3,\ 0)$ and $\mathbf{p}_{c2}-\mathbf{p}_1 = (0,\ 0.3,\ 0)$:

$$\hat k\times(0.4,0.3,0) = (-0.3,\ 0.4), \qquad \hat k\times(0,0.3,0) = (-0.3,\ 0),$$

$$J_{v2} = \begin{bmatrix}-0.3&-0.3\\0.4&0\end{bmatrix}.$$

*Gravity torques* with $m_1\mathbf{g} = (0,\ -39.24)$ N and $m_2\mathbf{g} = (0,\ -19.62)$ N:

$$J_{v1}^{\top}m_1\mathbf{g} = \begin{bmatrix}0&0.4\\0&0\end{bmatrix}\begin{bmatrix}0\\-39.24\end{bmatrix} = \begin{bmatrix}-15.696\\0\end{bmatrix},$$

$$J_{v2}^{\top}m_2\mathbf{g} = \begin{bmatrix}-0.3&0.4\\-0.3&0\end{bmatrix}\begin{bmatrix}0\\-19.62\end{bmatrix} = \begin{bmatrix}-7.848\\0\end{bmatrix}.$$

$$\boldsymbol\tau_g = -\left(\begin{bmatrix}-15.696\\0\end{bmatrix}+\begin{bmatrix}-7.848\\0\end{bmatrix}\right) = \begin{bmatrix}23.544\\0\end{bmatrix}\ \mathrm{N\cdot m}.$$

(b) **Identical to P2's $\mathbf{g} = (23.544,\ 0)$** ✓

*Why they must agree.* The two routes compute the same thing by different means:

**The statics route** ([2.5](02-05-statics-jacobian-transpose.md)) sums the moment of each link's weight about each joint, using the Jacobian transpose as a systematic moment-taking device.

**The Lagrangian route** takes the gradient of the total potential energy, $\mathbf{g} = \partial V/\partial\mathbf{q}$.

These are the same operation because $V = -\sum m_i\mathbf{g}^{\top}\mathbf{p}_{c_i}$ and $\partial\mathbf{p}_{c_i}/\partial\mathbf{q} = J_{v_i}$, so

$$\frac{\partial V}{\partial\mathbf{q}} = -\sum_im_iJ_{v_i}^{\top}\mathbf{g}.$$

**The Jacobian transpose *is* the gradient operator here**, and that identity is worth internalizing: it is why "the force needed to hold a position" and "the gradient of the potential" are the same computation, and it recurs throughout mechanics.

*The practical value of having both routes.* The Lagrangian gives $\mathbf{g}(\mathbf{q})$ as a by-product of a derivation you were doing anyway. The statics route gives it directly, in a form a controller can evaluate from the same Jacobians it is already computing for velocity control. Most real implementations use the second — **gravity compensation costs almost nothing once the link Jacobians exist**, and it removes the largest single term from the torque budget.

</details>

## Connections

- **Backward:** the per-link Jacobians that build $M$ are [2.3](02-03-manipulator-jacobian.md)'s; the gravity vector is [2.5](02-05-statics-jacobian-transpose.md)'s $-\sum J_{v_i}^{\top}m_i\mathbf{g}$; the Euler–Lagrange machinery is [`analytical-mechanics` 1.4](../../analytical-mechanics/lessons/01-04-lagrangian-applications.md)'s.
- **Forward:** [3.2](03-02-manipulator-dynamics-equation.md) reads the structure of $M\ddot{\mathbf{q}}+C\dot{\mathbf{q}}+\mathbf{g} = \boldsymbol\tau$; [3.3](03-03-newton-euler-recursive-dynamics.md) computes the same thing in $O(n)$; [4.2](04-02-computed-torque-control.md) inverts it to cancel the nonlinearities.
- **Sideways:** this is Lagrangian mechanics with generalized coordinates from [`analytical-mechanics` 1.3](../../analytical-mechanics/lessons/01-03-generalized-coordinates-constraints.md); $M(\mathbf{q})$ is a metric tensor on the configuration manifold and the Christoffel symbols are literally the Christoffel symbols of that metric, so a free manipulator's motion is a geodesic — the same geometry as [`differential-geometry`](../../differential-geometry/syllabus.md) and general relativity.
