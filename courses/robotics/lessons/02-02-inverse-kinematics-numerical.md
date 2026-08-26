# Robotics & Kinematics · Lesson 2.2: Inverse kinematics — numerical

> ⏱ ~15 min · Module 2: Inverse kinematics and the Jacobian · Builds on: [2.1 Inverse kinematics: analytic](02-01-inverse-kinematics-analytic.md) · Unlocks: [2.3 The manipulator Jacobian](02-03-manipulator-jacobian.md), [2.4 Singularities](02-04-singularities.md)

## Why this matters

[2.1](02-01-inverse-kinematics-analytic.md) built closed forms for arms that admit them. Many do not: a general 6R arm without a spherical wrist, a redundant 7-DOF arm, a humanoid, or an arm whose real geometry differs slightly from its nominal DH table after calibration.

For those, inverse kinematics becomes **root-finding**: iterate until the pose error is small enough. The method is Newton's, applied to the forward-kinematics map, with the [Jacobian](../reference.md#manipulator-jacobian) as the derivative.

It is universal — it works for any arm, any number of joints, any task dimension — and it degrades gracefully, returning a nearest-possible pose when the target is unreachable rather than simply failing. The price is that it needs a starting guess, converges only locally, and breaks down near singularities. Damped least squares is the fix for the last of those, and it is one of the most consequential three-line modifications in the field.

## The idea

Forward kinematics is a map $\mathbf{f}: \mathcal{C}\to\mathcal{W}$ from joints to pose. Inverse kinematics asks for $\mathbf{f}(\mathbf{q}) = \mathbf{x}_d$, which is $\mathbf{f}(\mathbf{q})-\mathbf{x}_d = \mathbf{0}$ — a root-finding problem.

Newton's method linearizes. Near a current guess $\mathbf{q}_k$,

$$\mathbf{f}(\mathbf{q}_k+\Delta\mathbf{q})\approx\mathbf{f}(\mathbf{q}_k)+J(\mathbf{q}_k)\Delta\mathbf{q},$$

where $J = \partial\mathbf{f}/\partial\mathbf{q}$ is the manipulator Jacobian ([2.3](02-03-manipulator-jacobian.md) constructs it properly). Setting the linearized result equal to the target gives

$$J\,\Delta\mathbf{q} = \mathbf{e}, \qquad \mathbf{e} = \mathbf{x}_d-\mathbf{f}(\mathbf{q}_k),$$

and the iteration is: compute the error, solve for a joint correction, apply it, repeat.

The only complication is that $J$ is usually not square, so "solve" needs care:

**Square and invertible** (joints = task dimensions): $\Delta\mathbf{q} = J^{-1}\mathbf{e}$.

**Redundant** (more joints than task dimensions, $J$ is wide): infinitely many solutions. The **pseudoinverse** $J^{+} = J^{\top}(JJ^{\top})^{-1}$ picks the one with the smallest $\|\Delta\mathbf{q}\|$ — which is exactly the right default, since it moves the joints as little as possible.

**Over-constrained** (fewer joints than task dimensions, $J$ is tall): generally no exact solution. $J^{+} = (J^{\top}J)^{-1}J^{\top}$ gives the least-squares best, and "the arm gets as close as it can" is usually the right behaviour.

**Near-singular:** $J$ loses rank, $J^{+}$ blows up, and the method commands enormous joint motions. This is not an edge case — it happens whenever a target is near the workspace boundary — and **damped least squares** is the standard cure.

## The formal version

**The iteration.**

$$\boxed{\;\mathbf{q}_{k+1} = \mathbf{q}_k+\alpha\,J^{+}(\mathbf{q}_k)\left[\mathbf{x}_d-\mathbf{f}(\mathbf{q}_k)\right],\;}$$

with $\alpha\in(0,1]$ a step size. Full Newton is $\alpha = 1$; smaller values trade speed for robustness far from the solution.

**Pseudoinverse.**

$$J^{+} = \begin{cases}J^{\top}\left(JJ^{\top}\right)^{-1} & \text{wide (redundant): minimum-norm solution}\\ \left(J^{\top}J\right)^{-1}J^{\top} & \text{tall (over-constrained): least-squares solution}\\ J^{-1} & \text{square and nonsingular}\end{cases}$$

*In words: the pseudoinverse always returns the best available answer — exact if one exists, least-squares if not, and the smallest one if several do.*

**Damped least squares (Levenberg–Marquardt).**

$$\boxed{\;\Delta\mathbf{q} = J^{\top}\left(JJ^{\top}+\lambda^2I\right)^{-1}\mathbf{e}.\;}$$

*In words: add a small multiple of the identity before inverting, so the inverse stays bounded even when $J$ loses rank.*

The effect is visible in the singular-value decomposition. If $J$ has singular values $\sigma_i$, then

$$J^{+}\ \text{scales by}\ \frac{1}{\sigma_i}, \qquad \text{DLS scales by}\ \frac{\sigma_i}{\sigma_i^2+\lambda^2}.$$

As $\sigma_i\to0$ the first blows up and the second goes smoothly to zero. **The damping trades tracking accuracy for bounded joint rates**, and near a singularity that is exactly the right trade — the alternative is an arm that lunges.

**Adaptive damping** turns it off when it is not needed:

$$\lambda^2 = \begin{cases}0 & \sigma_{\min}\geq\epsilon\\ \left(1-\left(\frac{\sigma_{\min}}{\epsilon}\right)^2\right)\lambda_{\max}^2 & \sigma_{\min}<\epsilon\end{cases}$$

so the solver is exact away from singularities and damped only near them.

**Jacobian transpose.** A cheaper alternative avoids the inverse entirely:

$$\Delta\mathbf{q} = \alpha\,J^{\top}\mathbf{e}.$$

It is gradient descent on $\tfrac12\|\mathbf{e}\|^2$, since $\nabla_{\mathbf{q}}\tfrac12\|\mathbf{e}\|^2 = -J^{\top}\mathbf{e}$. It never blows up, needs no matrix inverse, and converges **linearly** rather than quadratically — much slower, but unconditionally stable. It also has a beautiful physical reading, made precise in [2.5](02-05-statics-jacobian-transpose.md): $J^{\top}\mathbf{e}$ is the joint torque produced by a spring pulling the tool toward the target.

**Redundancy resolution.** When $J$ is wide, the general solution is

$$\boxed{\;\Delta\mathbf{q} = J^{+}\mathbf{e}+\left(I-J^{+}J\right)\mathbf{z},\;}$$

where $\mathbf{z}$ is arbitrary. The second term lies in the **null space** of $J$ — joint motions that do not move the tool at all — so it can be used to pursue a secondary objective (avoid joint limits, dodge an obstacle, maximize manipulability) **without disturbing the task**. This is the algorithmic version of the self-motion manifold from [1.1](01-01-robots-links-configuration-space.md).

**Convergence.**

| Property | Behaviour |
|---|---|
| Rate | quadratic near the solution; erratic far from it |
| Guarantee | local only — a bad seed can diverge or find a different branch |
| Cost | one Jacobian and one small solve per iteration |
| Typical | 3–10 iterations from a good seed |

**Seeding.** The current joint configuration is almost always the right seed for a trajectory: consecutive waypoints are close, the previous solution is nearby, and the method converges in two or three steps *and* returns the branch that requires the least motion — solving the branch-selection problem of [2.1](02-01-inverse-kinematics-analytic.md) for free.

**Orientation error.** For a full 6-DOF pose, the position error is a simple subtraction but the orientation error is not. Use the axis–angle of the rotation discrepancy:

$$\mathbf{e}_{\rm orient} = \theta\hat k \quad\text{from}\quad R_e = R_d R^{\top},$$

which is a genuine three-vector that goes smoothly to zero — precisely the reason [1.3](01-03-euler-fixed-angles-axis-angle.md) argued axis–angle is the right error representation.

## Picture

![A two-panel figure. Left: a plot of the arm's tool position over successive Newton iterations, showing the tool starting some distance from the target, overshooting past it on the first step, then spiralling in with rapidly shrinking steps, with each iterate numbered and the error magnitude annotated beside it, and a log-scale inset showing the error dropping by roughly squaring each iteration once close. Right: two singular-value scaling curves plotted against sigma — the pseudoinverse curve one over sigma rising to infinity as sigma approaches zero, and the damped least-squares curve sigma over sigma squared plus lambda squared rising to a bounded peak and then falling back to zero — with the two curves nearly coincident for large sigma and dramatically different near zero.](assets/02-02-fig1.svg)

Left: what Newton's method actually does — a poor first step from a far seed, then quadratic convergence once it is close. The first iteration making the error *worse* is normal, not a bug.

Right: why damping works. Away from a singularity the two curves agree, so nothing is lost; near one, the pseudoinverse diverges and DLS turns the motion off smoothly.

## Worked examples

**Example 1 (a redundant arm, solved by pseudoinverse iteration).** A planar 3R arm with $L = (0.4, 0.3, 0.2)$ m must reach $(0.5, 0.3)$ m. Position only, so the task is two-dimensional and the arm is redundant by one. Seed at $\mathbf{q}_0 = (20°, 40°, -10°)$.

*The Jacobian.* For a planar arm, with $c_1 = \theta_1$, $c_2 = \theta_1+\theta_2$, $c_3 = \theta_1+\theta_2+\theta_3$:

$$J = \begin{bmatrix}
-L_1s_{c_1}-L_2s_{c_2}-L_3s_{c_3} & -L_2s_{c_2}-L_3s_{c_3} & -L_3s_{c_3}\\
L_1c_{c_1}+L_2c_{c_2}+L_3c_{c_3} & L_2c_{c_2}+L_3c_{c_3} & L_3c_{c_3}
\end{bmatrix},$$

a $2\times3$ matrix — wide, so the pseudoinverse gives the minimum-norm step.

*Starting point.*

$$\mathbf{f}(\mathbf{q}_0) = (0.6544,\ 0.5498), \qquad \|\mathbf{e}_0\| = \|(0.5,0.3)-(0.6544,0.5498)\| = 0.2937\ \mathrm{m}.$$

*The iteration.*

| $k$ | $\Delta\mathbf{q}$ (deg) | $\mathbf{q}$ (deg) | $\|\mathbf{e}\|$ (m) |
|---|---|---|---|
| 0 | — | $(20.00,\ 40.00,\ -10.00)$ | $2.94\times10^{-1}$ |
| 1 | $(-73.43,\ 111.18,\ 21.55)$ | $(-53.43,\ 151.18,\ 11.55)$ | $3.92\times10^{-1}$ |
| 2 | $(15.62,\ -40.86,\ -20.21)$ | $(-37.81,\ 110.32,\ -8.66)$ | $7.98\times10^{-2}$ |
| 3 | $(11.50,\ -5.57,\ -1.48)$ | $(-26.32,\ 104.75,\ -10.14)$ | $7.73\times10^{-3}$ |
| 4 | $(-0.03,\ -0.75,\ -0.27)$ | $(-26.35,\ 104.00,\ -10.41)$ | $6.19\times10^{-5}$ |
| 5 | $(0.01,\ -0.01,\ 0.00)$ | $(-26.34,\ 103.99,\ -10.41)$ | $5.02\times10^{-9}$ |

**Converged in five iterations** to $\mathbf{q} = (-26.34°,\ 103.99°,\ -10.41°)$, and $\mathbf{f}(\mathbf{q}) = (0.5000,\ 0.3000)$ ✓.

*Two things in that table are worth dwelling on.*

**The first step made things worse** — the error rose from 0.294 to 0.392 m. That is characteristic of Newton far from the solution: the linearization is only valid locally, and the seed was $17$ cm off with joint corrections of over $100°$. Limiting the step ($\alpha = 0.5$, or capping $\|\Delta\mathbf{q}\|$) would have avoided the excursion at the cost of an extra iteration or two, and production solvers do exactly that.

**Once close, the error squares each step:** $8\times10^{-2}\to8\times10^{-3}\to6\times10^{-5}\to5\times10^{-9}$. The exponents roughly double — quadratic convergence, the same signature seen in any Newton method.

*What the pseudoinverse chose.* The arm is redundant, so a whole curve of configurations reaches $(0.5,0.3)$. The pseudoinverse returned the one reached by the **shortest path in joint space** from the seed. A different seed lands on a different member of the family — which is a feature when following a trajectory (it keeps the arm near where it already was) and a hazard when solving a single pose in isolation (the answer depends on the seed).

*Checking the final Jacobian.*

$$J = \begin{bmatrix}-0.300&-0.478&-0.184\\0.500&0.142&0.077\end{bmatrix}, \qquad \sigma = (0.741,\ 0.281).$$

Both singular values are healthy, so the configuration is far from singular and the solve was well-conditioned throughout.

**Example 2 (near a singularity, and what damping buys).** A planar 2R arm with $L_1 = 0.4$, $L_2 = 0.3$ m is nearly fully extended: $\theta_1 = 0°$, $\theta_2 = 1°$. It is asked to move 10 mm **radially outward** — the direction it can barely move in.

*The Jacobian and its condition.*

$$J = \begin{bmatrix}-0.0052&-0.0052\\0.6999&0.3000\end{bmatrix}, \qquad \det J = L_1L_2\sin\theta_2 = 0.4(0.3)\sin1° = 0.002094.$$

$$\sigma = (0.7616,\ 0.00275), \qquad \kappa = \frac{\sigma_{\max}}{\sigma_{\min}} = 277.$$

**A condition number of 277** — the arm is 277 times stiffer in one direction than the other, and the weak direction is precisely the radial one it has been asked to move in.

*Pure pseudoinverse* ($\lambda = 0$), for $\mathbf{e} = (0.01, 0)$ m:

$$\Delta\mathbf{q} = J^{+}\mathbf{e} = (82.06°,\ -191.49°), \qquad \|\Delta\mathbf{q}\| = 3.636\ \mathrm{rad}.$$

**The solver demands 82 degrees of shoulder and 191 degrees of elbow to move the tool 10 millimetres.** It achieves the 10 mm exactly — but no real arm can execute that, and commanding it means saturated actuators, a violent lunge, and a tool that leaves its path entirely.

*Damped least squares.*

| $\lambda$ | $\Delta\mathbf{q}$ (deg) | $\|\Delta\mathbf{q}\|$ (rad) | achieved motion (mm) |
|---|---|---|---|
| 0 | $(82.06,\ -191.49)$ | 3.636 | 10.00 |
| 0.01 | $(5.76,\ -13.47)$ | 0.256 | 0.71 |
| 0.02 | $(1.52,\ -3.56)$ | 0.068 | 0.21 |
| 0.05 | $(0.24,\ -0.58)$ | 0.011 | 0.09 |

**At $\lambda = 0.01$ the joint motion drops by a factor of 14** — from 3.64 rad to 0.26 rad — while the achieved motion drops from 10 mm to 0.71 mm.

*Reading that trade honestly.* The damped solver **does not reach the target**. It moves a fourteenth of the way there with a fourteenth of the joint motion, and it will keep moving on the next iteration. What it buys is that the arm never lunges: the joint rates stay bounded no matter how close to singular the configuration becomes, and the tool follows a slightly lagging but continuous path instead of an explosive one.

That is the right behaviour, and the reason is worth stating plainly: **near a singularity, the requested motion is close to physically impossible, and the only honest responses are to move slowly or to refuse.** DLS chooses to move slowly. The undamped pseudoinverse chooses to pretend, and the arm pays for it.

*How the situation degrades.* Halving the elbow angle to $\theta_2 = 0.5°$:

$$\sigma_{\min} = 0.00138, \qquad \kappa = 554, \qquad \|\Delta\mathbf{q}\|_{\lambda=0} = 7.27\ \mathrm{rad}.$$

**The required joint motion doubled** for the same 10 mm request, because $\sigma_{\min}\propto\sin\theta_2\approx\theta_2$ and the pseudoinverse scales as $1/\sigma_{\min}$. At $\theta_2 = 0.1°$ it would be 36 rad; at $\theta_2 = 0$ exactly, infinite. **The blow-up is a $1/\theta_2$ divergence**, which is why "just avoid exact singularities" is not a strategy — the neighbourhood is bad long before the point itself.

*Choosing $\lambda$.* Too small and the damping does nothing; too large and tracking is sluggish everywhere. Adaptive damping is the standard answer: keep $\lambda = 0$ while $\sigma_{\min}$ exceeds a threshold, then ramp it in. For this arm, with $\sigma_{\min} = 0.7616\sin\theta_2$ approximately, a threshold of $\epsilon = 0.05$ corresponds to $\theta_2\approx3.8°$ — so the solver runs undamped everywhere except within about four degrees of full extension, which is exactly the region an arm should not be working in anyway.

## Watch out

- **You might use a bad seed.** Newton is only locally convergent. For a trajectory, seed with the previous solution; for a cold start, try several seeds or run a few Jacobian-transpose steps first.
- **You might take a full Newton step far from the solution.** Example 1's first step made the error worse. Limit the step size or cap $\|\Delta\mathbf{q}\|$.
- **You might invert a near-singular Jacobian.** Use DLS, and monitor $\sigma_{\min}$ rather than $\det J$ (the determinant is misleading for non-square matrices and scales badly with units).
- **You might use the wrong pseudoinverse formula.** $J^{\top}(JJ^{\top})^{-1}$ for wide, $(J^{\top}J)^{-1}J^{\top}$ for tall. Getting it backwards inverts a singular matrix.
- **You might mix units in the error vector.** Position in metres and orientation in radians are not comparable; a weighting matrix is needed, or the solver silently prioritizes one over the other.
- **You might subtract Euler angles for orientation error.** Use the axis–angle of $R_dR^{\top}$; angle differences wrap and misbehave near gimbal lock.
- **You might expect a unique answer on a redundant arm.** The result depends on the seed. That is the correct behaviour, not a bug — but it means two calls with different seeds returning different joint vectors is expected.
- **You might not check that it converged.** Test $\|\mathbf{e}\|$ against a tolerance and cap the iteration count. An unreachable target will iterate forever at a nonzero residual, and that residual is the useful output.

## One-liner

> Treat inverse kinematics as root-finding on the forward map: iterate $\Delta\mathbf{q} = J^{+}\mathbf{e}$, use the pseudoinverse to pick the minimum-norm step when redundant, and damp it near singularities so the solver moves slowly instead of lunging.

## Problems

**P1 (🟢)** A planar 2R arm has $L_1 = 0.4$, $L_2 = 0.3$ m. Its Jacobian is $J = \begin{bmatrix}-L_1s_1-L_2s_{12}&-L_2s_{12}\\L_1c_1+L_2c_{12}&L_2c_{12}\end{bmatrix}$. At $\mathbf{q} = (30°, 60°)$: (a) compute $J$. (b) Compute $\det J$ and confirm it equals $L_1L_2\sin\theta_2$. (c) The tool is at $(0.3464, 0.5)$ and the target is $(0.36, 0.51)$ — compute one Newton step $\Delta\mathbf{q} = J^{-1}\mathbf{e}$.

**P2 (🟡)** For the arm of P1 at $\mathbf{q} = (0°, 5°)$: (a) compute $J$ and its determinant. (b) Compute the singular values and the condition number. (c) Compute $\Delta\mathbf{q} = J^{-1}\mathbf{e}$ for $\mathbf{e} = (0.005, 0)$ m. (d) Repeat with damped least squares at $\lambda = 0.02$ and compare the joint motion and the achieved tool motion.

**P3 (🔴)** A planar 3R arm with $L = (0.4, 0.3, 0.2)$ m is at $\mathbf{q} = (30°, 45°, -20°)$ and must track a target moving from its current position to a point 20 mm away in $+x$. (a) Compute the tool position and the $2\times3$ Jacobian. (b) Compute the minimum-norm step $J^{+}\mathbf{e}$. (c) Find a null-space vector — a joint motion that leaves the tool stationary — and verify it. (d) Explain how a controller would use the null space here, propose a concrete secondary objective with its gradient, and state one danger of using it carelessly.

<details>
<summary>Solutions</summary>

**P1** (a) $\theta_1 = 30°$, $\theta_{12} = 90°$:

$$s_1 = 0.5,\ c_1 = 0.8660, \qquad s_{12} = 1,\ c_{12} = 0.$$

$$J = \begin{bmatrix}-0.4(0.5)-0.3(1) & -0.3(1)\\0.4(0.8660)+0.3(0) & 0.3(0)\end{bmatrix} = \begin{bmatrix}-0.5000&-0.3000\\0.3464&0\end{bmatrix}.$$

(b) $$\det J = (-0.5)(0)-(-0.3)(0.3464) = 0.10392\ \mathrm{m^2}.$$

$$L_1L_2\sin\theta_2 = 0.4(0.3)\sin60° = 0.12(0.8660) = 0.10392\ \checkmark$$

(c) $$\mathbf{e} = (0.36-0.3464,\ 0.51-0.5) = (0.0136,\ 0.0100)\ \mathrm{m}.$$

$$J^{-1} = \frac{1}{0.10392}\begin{bmatrix}0&0.3000\\-0.3464&-0.5000\end{bmatrix} = \begin{bmatrix}0&2.8868\\-3.3333&-4.8113\end{bmatrix}.$$

$$\Delta\mathbf{q} = \begin{bmatrix}0&2.8868\\-3.3333&-4.8113\end{bmatrix}\begin{bmatrix}0.0136\\0.0100\end{bmatrix} = \begin{bmatrix}0.028868\\-0.045333-0.048113\end{bmatrix} = \begin{bmatrix}0.02887\\-0.09345\end{bmatrix}\ \mathrm{rad}$$

$$= (1.654°,\ -5.354°).$$

Small, well-behaved corrections for a small error — the mark of a well-conditioned configuration.

**P2** (a) $\theta_1 = 0°$, $\theta_{12} = 5°$:

$$s_1 = 0,\ c_1 = 1, \qquad s_{12} = 0.08716,\ c_{12} = 0.99619.$$

$$J = \begin{bmatrix}-0-0.3(0.08716) & -0.3(0.08716)\\0.4(1)+0.3(0.99619) & 0.3(0.99619)\end{bmatrix} = \begin{bmatrix}-0.026147&-0.026147\\0.698857&0.298857\end{bmatrix}.$$

$$\det J = (-0.026147)(0.298857)-(-0.026147)(0.698857) = -0.007814+0.018274 = 0.010460\ \mathrm{m^2}.$$

*Check:* $L_1L_2\sin5° = 0.12(0.08716) = 0.010459$ ✓

(b) $$JJ^{\top} = \begin{bmatrix}0.001368&-0.026086\\-0.026086&0.577693\end{bmatrix}.$$

Eigenvalues: $\lambda^2-0.579061\lambda+(0.001368\cdot0.577693-0.026086^2) = 0$, i.e. $\lambda^2-0.579061\lambda+0.000109 = 0$:

$$\lambda = \frac{0.579061\pm\sqrt{0.335312-0.000437}}{2} = \frac{0.579061\pm0.578684}{2} = 0.578873,\ 0.000189.$$

$$\sigma_1 = \sqrt{0.578873} = 0.76083, \qquad \sigma_2 = \sqrt{0.000189} = 0.01375.$$

$$\kappa = \frac{0.76083}{0.01375} = 55.3.$$

*Check the determinant:* $\sigma_1\sigma_2 = 0.76083(0.01375) = 0.010461$ ✓ — for a square matrix, $|\det J| = \prod\sigma_i$.

(c) $$J^{-1} = \frac{1}{0.010460}\begin{bmatrix}0.298857&0.026147\\-0.698857&-0.026147\end{bmatrix}.$$

$$\Delta\mathbf{q} = \frac{1}{0.010460}\begin{bmatrix}0.298857(0.005)\\-0.698857(0.005)\end{bmatrix} = \frac{1}{0.010460}\begin{bmatrix}0.0014943\\-0.0034943\end{bmatrix} = \begin{bmatrix}0.14286\\-0.33407\end{bmatrix}\ \mathrm{rad}$$

$$= (8.18°,\ -19.14°), \qquad \|\Delta\mathbf{q}\| = 0.3634\ \mathrm{rad}.$$

**A 5 mm move demands over 27 degrees of total joint motion** — a ratio of about 73 degrees per centimetre, against roughly 6 degrees per centimetre in P1's well-conditioned pose.

(d) With $\lambda = 0.02$:

$$JJ^{\top}+\lambda^2I = \begin{bmatrix}0.001768&-0.026086\\-0.026086&0.578093\end{bmatrix}, \qquad \det = 0.001022-0.000681 = 0.000341.$$

$$\left(JJ^{\top}+\lambda^2I\right)^{-1} = \frac{1}{0.000341}\begin{bmatrix}0.578093&0.026086\\0.026086&0.001768\end{bmatrix}.$$

$$\left(JJ^{\top}+\lambda^2I\right)^{-1}\mathbf{e} = \frac{1}{0.000341}\begin{bmatrix}0.578093(0.005)\\0.026086(0.005)\end{bmatrix} = \begin{bmatrix}8.4765\\0.3825\end{bmatrix}.$$

$$\Delta\mathbf{q} = J^{\top}\begin{bmatrix}8.4765\\0.3825\end{bmatrix} = \begin{bmatrix}-0.026147(8.4765)+0.698857(0.3825)\\-0.026147(8.4765)+0.298857(0.3825)\end{bmatrix} = \begin{bmatrix}-0.22163+0.26731\\-0.22163+0.11431\end{bmatrix}$$
$$= \begin{bmatrix}0.04568\\-0.10732\end{bmatrix}\ \mathrm{rad} = (2.62°,\ -6.15°), \qquad \|\Delta\mathbf{q}\| = 0.1166\ \mathrm{rad}.$$

*Achieved tool motion:*

$$J\Delta\mathbf{q} = \begin{bmatrix}-0.026147(0.04568)-0.026147(-0.10732)\\0.698857(0.04568)+0.298857(-0.10732)\end{bmatrix} = \begin{bmatrix}0.001611\\0.031925-0.032074\end{bmatrix} = \begin{bmatrix}0.001611\\-0.000149\end{bmatrix}\ \mathrm{m}.$$

| | Undamped | Damped ($\lambda = 0.02$) |
|---|---|---|
| $\|\Delta\mathbf{q}\|$ | 0.3634 rad | **0.1166 rad** (3.1× less) |
| Achieved $x$ motion | 5.00 mm | 1.61 mm |
| Achieved $y$ error | 0 | $-0.15$ mm |

**Damping cut the joint motion by a factor of 3.1 and delivered 32% of the requested move**, plus a small unwanted $y$ excursion of 0.15 mm.

*Which is preferable depends on what breaks first.* If the arm can execute $19°$ of elbow motion in one control cycle, the undamped step is better — it is exact. If it cannot, the undamped command saturates the actuator, the arm falls behind, and the actual path is worse than the damped one *and* uncontrolled. **Damping converts an unbounded demand into a bounded one, and the residual error is recovered over subsequent cycles.**

**P3** (a) $$\theta_1 = 30°, \quad \theta_{12} = 75°, \quad \theta_{123} = 55°.$$

$$x = 0.4\cos30°+0.3\cos75°+0.2\cos55° = 0.34641+0.07765+0.11472 = 0.53878\ \mathrm{m},$$
$$y = 0.4\sin30°+0.3\sin75°+0.2\sin55° = 0.20000+0.28978+0.16383 = 0.65361\ \mathrm{m}.$$

$$J = \begin{bmatrix}
-0.4s_{30}-0.3s_{75}-0.2s_{55} & -0.3s_{75}-0.2s_{55} & -0.2s_{55}\\
0.4c_{30}+0.3c_{75}+0.2c_{55} & 0.3c_{75}+0.2c_{55} & 0.2c_{55}
\end{bmatrix}$$

$$= \begin{bmatrix}-0.65361&-0.45361&-0.16383\\0.53878&0.19237&0.11472\end{bmatrix}.$$

**Notice the structure:** the first column is $(-y,\ x)$ and the last is $(-L_3s_{123},\ L_3c_{123})$. That is not a coincidence — it is the general form derived in [2.3](02-03-manipulator-jacobian.md), where column $j$ turns out to be $\hat z_j\times(\mathbf{p}_{\rm tool}-\mathbf{p}_j)$.

(b) $$\mathbf{e} = (0.020,\ 0)\ \mathrm{m}.$$

$$JJ^{\top} = \begin{bmatrix}0.65361^2+0.45361^2+0.16383^2 & \ast\\ \ast & 0.53878^2+0.19237^2+0.11472^2\end{bmatrix},$$

$$JJ^{\top}_{11} = 0.42721+0.20576+0.02684 = 0.65981,$$
$$JJ^{\top}_{12} = (-0.65361)(0.53878)+(-0.45361)(0.19237)+(-0.16383)(0.11472) = -0.35215-0.08726-0.01879 = -0.45820,$$
$$JJ^{\top}_{22} = 0.29028+0.03701+0.01316 = 0.34045.$$

$$\det\left(JJ^{\top}\right) = 0.65981(0.34045)-0.45820^2 = 0.22463-0.20995 = 0.01468.$$

$$\left(JJ^{\top}\right)^{-1}\mathbf{e} = \frac{1}{0.01468}\begin{bmatrix}0.34045&0.45820\\0.45820&0.65981\end{bmatrix}\begin{bmatrix}0.02\\0\end{bmatrix} = \frac{1}{0.01468}\begin{bmatrix}0.006809\\0.009164\end{bmatrix} = \begin{bmatrix}0.46383\\0.62425\end{bmatrix}.$$

$$\Delta\mathbf{q} = J^{\top}\begin{bmatrix}0.46383\\0.62425\end{bmatrix} = \begin{bmatrix}-0.65361(0.46383)+0.53878(0.62425)\\-0.45361(0.46383)+0.19237(0.62425)\\-0.16383(0.46383)+0.11472(0.62425)\end{bmatrix}$$
$$= \begin{bmatrix}-0.30316+0.33633\\-0.21039+0.12009\\-0.07599+0.07161\end{bmatrix} = \begin{bmatrix}0.03317\\-0.09030\\-0.00438\end{bmatrix}\ \mathrm{rad} = (1.90°,\ -5.17°,\ -0.25°).$$

*Verify:* $J\Delta\mathbf{q} = (0.0200,\ 0.0000)$ ✓ — exactly the requested motion.

(c) A null-space vector satisfies $J\mathbf{n} = \mathbf{0}$: two equations, three unknowns, so the null space is one-dimensional. Set $n_3 = 1$ and solve the first two components:

$$-0.65361n_1-0.45361n_2 = 0.16383,$$
$$0.53878n_1+0.19237n_2 = -0.11472.$$

From the second, $n_2 = \dfrac{-0.11472-0.53878n_1}{0.19237} = -0.59635-2.80075n_1$. Substituting:

$$-0.65361n_1-0.45361(-0.59635-2.80075n_1) = 0.16383,$$
$$-0.65361n_1+0.27051+1.27045n_1 = 0.16383,$$
$$0.61684n_1 = -0.10668 \quad\Longrightarrow\quad n_1 = -0.17295,$$
$$n_2 = -0.59635-2.80075(-0.17295) = -0.59635+0.48440 = -0.11195.$$

$$\mathbf{n} = (-0.17295,\ -0.11195,\ 1)\ \ \text{(unnormalized)}.$$

*Verify:*

$$J\mathbf{n} = \begin{bmatrix}-0.65361(-0.17295)-0.45361(-0.11195)-0.16383(1)\\0.53878(-0.17295)+0.19237(-0.11195)+0.11472(1)\end{bmatrix} = \begin{bmatrix}0.11304+0.05078-0.16383\\-0.09318-0.02154+0.11472\end{bmatrix}$$
$$= \begin{bmatrix}-0.00001\\0.00000\end{bmatrix} \approx \mathbf{0}\ \checkmark$$

**Moving the joints along $\mathbf{n}$ leaves the tool exactly where it is.** This is the self-motion of [1.1](01-01-robots-links-configuration-space.md), now computed rather than described.

(d) *How a controller uses it.* The full step becomes

$$\Delta\mathbf{q} = \underbrace{J^{+}\mathbf{e}}_{\text{does the task}}+\underbrace{\left(I-J^{+}J\right)\mathbf{z}}_{\text{does something else, for free}},$$

where the projector $(I-J^{+}J)$ maps any $\mathbf{z}$ into the null space, so the second term cannot disturb the tool.

*A concrete secondary objective: stay away from joint limits.* Define

$$H(\mathbf{q}) = \frac{1}{2n}\sum_{i=1}^{n}\left(\frac{\theta_i-\bar\theta_i}{\theta_i^{\max}-\theta_i^{\min}}\right)^2, \qquad \bar\theta_i = \frac{\theta_i^{\max}+\theta_i^{\min}}{2},$$

which is zero at the middle of every joint's range and grows toward the limits. Take $\mathbf{z} = -k\nabla H$ with

$$\frac{\partial H}{\partial\theta_i} = \frac{\theta_i-\bar\theta_i}{n\left(\theta_i^{\max}-\theta_i^{\min}\right)^2}.$$

*Numerically here.* Suppose every joint is limited to $\pm120°$, so $\bar\theta_i = 0$ and $\theta^{\max}-\theta^{\min} = 240°$. At $\mathbf{q} = (30°, 45°, -20°)$,

$$\nabla H \propto (30,\ 45,\ -20),$$

so $\mathbf{z} = -k(30, 45, -20)$ pushes every joint back toward centre. Joint 2, at $45°$, is furthest from its centre and gets the largest push — which is right, since it is the one nearest a limit.

*A second objective worth naming: maximize manipulability.* Take $\mathbf{z} = +k\nabla_{\mathbf{q}}\sqrt{\det(JJ^{\top})}$, which drives the arm away from the singularities of [2.4](02-04-singularities.md). It is more expensive (the gradient of a determinant) but it is what keeps a redundant arm well-conditioned over a long path.

*The danger of using it carelessly.* **Null-space motion is not free in the dynamics.** Three specific hazards:

**Instability from an over-aggressive gain.** The null-space term is a feedback loop with no task error to stabilize it. Too large a $k$ and the arm oscillates along its self-motion manifold — the tool stays put, but the elbow shakes. Since the tool is exactly on target, the *task* error gives no warning at all; the oscillation is invisible to the primary controller.

**Collisions.** The null-space motion sweeps the links through space. An obstacle-avoidance objective helps, but an objective that only knows about joint limits will happily drive the elbow into a fixture.

**Numerical trouble near singularities.** The projector $(I-J^{+}J)$ is built from $J^{+}$, which blows up near a singularity — so the null-space term inherits the conditioning problem. The damping of Example 2 must be applied to the projector too, not only to the task term.

**And it can fight the task.** If $\mathbf{z}$ is computed from a gradient that was evaluated at a stale configuration, the projection is no longer exact and the "null-space" motion leaks into tool motion. Recompute $J$ and the projector every cycle.

*The honest summary:* redundancy resolution is one of the highest-leverage tools in manipulator control and one of the easiest to deploy badly. The mathematics guarantees only that the *instantaneous* motion leaves the tool fixed; everything about whether the resulting behaviour is good is a control-design question, not a kinematics one.

</details>

## Flashback

**From Lesson 2.1 (Inverse kinematics: analytic):** A planar 2R arm has $L_1 = 0.4$, $L_2 = 0.3$ m. (a) Solve analytically for the target $(0.5, 0.2)$. (b) Compare with what a numerical solver would return from the seed $(50°, -70°)$.

<details>
<summary>Solution</summary>

(a) From [2.1](02-01-inverse-kinematics-analytic.md) P2:

$$\cos\theta_2 = \frac{0.29-0.25}{0.24} = 0.1667, \qquad \theta_2 = \pm80.41°,$$

$$(\theta_1,\theta_2) = (-11.52°,\ 80.41°) \quad\text{or}\quad (55.12°,\ -80.41°).$$

(b) A numerical solver seeded at $(50°, -70°)$ converges to **the elbow-up solution $(55.12°, -80.41°)$**, because Newton's method moves downhill from wherever it starts and the seed is only $15.5°$ away from that root in joint space, against $212°$ from the other.

*What this comparison shows about the two methods.*

**The analytic solver returns all solutions and no preference.** It has no idea where the arm is, and the caller must choose — which requires supplying the current configuration and comparing, as [2.1](02-01-inverse-kinematics-analytic.md) P2(c) worked through.

**The numerical solver returns one solution and it is the right one.** Seeding with the current configuration makes branch selection automatic: the method converges to the nearest root, which is the one requiring the least motion.

That is a genuine advantage of the iterative method and a frequently overlooked one. For **trajectory following** — where every waypoint is close to the last — numerical IK is often preferred *even on arms with a closed form*, because it inherits continuity for free. The closed form must be paired with a branch-tracking layer to achieve the same thing.

**The reverse trade appears on a cold start.** With no good seed, the numerical solver may converge to an awkward branch, take many iterations, or diverge; the analytic solver returns everything immediately and lets the planner pick. Production systems therefore use the closed form to *initialize* and the iterative method to *track* — the same hybrid pattern as the power-flow solvers of numerical analysis, and for the same reason.

</details>

## Connections

- **Backward:** the closed forms this lesson replaces are [2.1](02-01-inverse-kinematics-analytic.md)'s; the forward map being inverted is [1.6](01-06-denavit-hartenberg-forward-kinematics.md)'s; the axis–angle orientation error is [1.3](01-03-euler-fixed-angles-axis-angle.md)'s.
- **Forward:** [2.3](02-03-manipulator-jacobian.md) derives the Jacobian this lesson assumed; [2.4](02-04-singularities.md) explains the rank loss that damping works around; [2.5](02-05-statics-jacobian-transpose.md) gives $J^{\top}$ its physical meaning.
- **Sideways:** this is Newton's method for systems and Levenberg–Marquardt damping from [`numerical-analysis`](../../numerical-analysis/syllabus.md); the pseudoinverse and the null-space projector are [`linalg-refresher` 4.2](../../linalg-refresher/lessons/04-02-projection-least-squares.md)'s and [5.2](../../linalg-refresher/lessons/05-02-svd.md)'s, and the singular-value filtering that damping performs is the same regularization used in ill-posed inverse problems everywhere.
