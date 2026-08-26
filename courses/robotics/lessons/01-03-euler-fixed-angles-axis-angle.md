# Robotics & Kinematics · Lesson 1.3: Euler angles, fixed angles, and axis–angle

> ⏱ ~15 min · Module 1: Spatial descriptions and forward kinematics · Builds on: [1.2 Rotation matrices](01-02-rotation-matrices.md) · Unlocks: [1.4 Quaternions](01-04-quaternions.md), [1.5 Homogeneous transforms](01-05-homogeneous-transforms.md)

## Why this matters

A rotation matrix is nine numbers for three degrees of freedom. That redundancy is what makes it robust, but it is unusable as an interface: nobody teaches a robot by typing nine direction cosines, and nobody stores a million orientations as nine floats each when three would do.

So orientation gets compressed — into three [Euler angles](../reference.md#euler-angles), or into an axis and an angle. Both are used constantly: roll–pitch–yaw is how every aircraft, drone and robot teach pendant reports orientation, and axis–angle is how every rotation interpolation and every angular-velocity integration is actually done.

The catch is that three numbers cannot cover all of $SO(3)$ smoothly. Somewhere they must break, and where they break is **gimbal lock** — a real failure that has grounded real vehicles. Understanding exactly what fails, and why no three-parameter scheme can avoid it, is the reason [1.4](01-04-quaternions.md) exists.

## The idea

**Euler angles** decompose an orientation into three successive rotations about coordinate axes. The catch is that "coordinate axes" is ambiguous: about the *body's* axes, which move along with it, or about the *world's* axes, which do not?

**Euler angles (body axes)** rotate about the current, moving axes. Post-multiply: $R = R_1R_2R_3$.

**Fixed angles (world axes)** rotate about the stationary axes. Pre-multiply: $R = R_3R_2R_1$.

And here is the fact that makes the whole zoo manageable:

$$\boxed{\;\text{ZYX Euler angles } (\alpha,\beta,\gamma) \ \equiv\ \text{XYZ fixed angles } (\gamma,\beta,\alpha).\;}$$

*In words: the same three numbers, applied to body axes in one order, give exactly the same rotation as applying them to world axes in the reverse order.* This is the reason the literature's twelve Euler conventions and twelve fixed-angle conventions collapse to twelve distinct rotations rather than twenty-four.

**Gimbal lock** is the failure. In the ZYX convention, when the middle angle $\beta = \pm90°$, the first and third rotation axes become **parallel**, so $\alpha$ and $\gamma$ do the same thing. Three angles collapse to two independent effects, one degree of freedom is lost, and the extraction formulas divide by $\cos\beta = 0$.

It is not a defect of the ZYX choice. **No three-parameter representation of $SO(3)$ can be free of singularities** — a topological fact, not an engineering oversight — which is why the four-parameter quaternion of [1.4](01-04-quaternions.md) is the standard for anything that must not fail.

**Axis–angle** takes a different route. Euler's rotation theorem says any orientation is a single rotation by an angle $\theta$ about some axis $\hat k$. That is four numbers with one constraint ($\|\hat k\| = 1$), so still three degrees of freedom — and it, too, degenerates, but only at $\theta = 0$ (where the axis is undefined) and $\theta = 180°$ (where $\hat k$ and $-\hat k$ are indistinguishable).

## The formal version

**ZYX Euler angles (equivalently XYZ fixed angles) — the robotics standard.**

$$\boxed{\;R = R_z(\alpha)\,R_y(\beta)\,R_x(\gamma)\;}$$

with $\alpha$ = **yaw**, $\beta$ = **pitch**, $\gamma$ = **roll**. Multiplying out:

$$R = \begin{bmatrix}
c_\alpha c_\beta & c_\alpha s_\beta s_\gamma-s_\alpha c_\gamma & c_\alpha s_\beta c_\gamma+s_\alpha s_\gamma\\
s_\alpha c_\beta & s_\alpha s_\beta s_\gamma+c_\alpha c_\gamma & s_\alpha s_\beta c_\gamma-c_\alpha s_\gamma\\
-s_\beta & c_\beta s_\gamma & c_\beta c_\gamma
\end{bmatrix}$$

with $c_\alpha = \cos\alpha$ and so on.

**Extraction (matrix → angles).** Use the bottom-left column, which is the cleanest:

$$\boxed{\;\beta = \operatorname{atan2}\left(-r_{31},\ \sqrt{r_{11}^2+r_{21}^2}\right), \qquad \alpha = \operatorname{atan2}\left(\frac{r_{21}}{\cos\beta},\frac{r_{11}}{\cos\beta}\right), \qquad \gamma = \operatorname{atan2}\left(\frac{r_{32}}{\cos\beta},\frac{r_{33}}{\cos\beta}\right).\;}$$

**Always use `atan2`, never `atan` or `acos`.** `atan2(y,x)` knows the quadrant from the signs of both arguments; `atan(y/x)` throws that away and lands in the wrong half-plane half the time.

**Two solutions.** Taking the other branch, $\beta' = \pi-\beta$, gives a second $(\alpha',\beta',\gamma')$ producing the *identical* matrix. The extraction above returns the branch with $\beta\in[-90°,90°]$ by convention; both are correct, and Example 1 exhibits both.

**Gimbal lock.** At $\beta = \pm90°$, $\cos\beta = 0$ and the formulas fail. The matrix becomes

$$\beta = +90°: \quad R = \begin{bmatrix}0&\ast&\ast\\0&\ast&\ast\\-1&0&0\end{bmatrix},$$

and only the **difference** $\alpha-\gamma$ (for $\beta = +90°$) or the **sum** $\alpha+\gamma$ (for $\beta = -90°$) is determined. Convention: set $\alpha = 0$ and solve for $\gamma$.

**Axis–angle and Rodrigues' formula.** Given $\hat k = (k_x,k_y,k_z)$ with $\|\hat k\| = 1$ and angle $\theta$:

$$\boxed{\;R = I+\sin\theta\,[\hat k]_\times+(1-\cos\theta)\,[\hat k]_\times^2,\;}$$

where $[\hat k]_\times$ is the skew-symmetric matrix of [1.2](01-02-rotation-matrices.md). Written out:

$$R = \begin{bmatrix}
k_x^2v+c & k_xk_yv-k_zs & k_xk_zv+k_ys\\
k_xk_yv+k_zs & k_y^2v+c & k_yk_zv-k_xs\\
k_xk_zv-k_ys & k_yk_zv+k_xs & k_z^2v+c
\end{bmatrix}, \qquad c = \cos\theta,\ s = \sin\theta,\ v = 1-\cos\theta.$$

**Inverse (matrix → axis and angle).**

$$\boxed{\;\theta = \arccos\frac{\operatorname{tr}(R)-1}{2}, \qquad \hat k = \frac{1}{2\sin\theta}\begin{bmatrix}r_{32}-r_{23}\\r_{13}-r_{31}\\r_{21}-r_{12}\end{bmatrix}.\;}$$

*In words: the trace gives the angle, and the antisymmetric part gives the axis.*

**Degenerate cases.** At $\theta = 0$ the axis is undefined ($R = I$); at $\theta = 180°$, $\sin\theta = 0$ and the formula fails — extract the axis from the *diagonal* instead, using $r_{ii} = 2k_i^2-1$, and accept that $\hat k$ and $-\hat k$ give the same rotation.

**Matrix exponential.** Axis–angle is the exponential map of $SO(3)$:

$$R = \exp\left(\theta[\hat k]_\times\right),$$

which is Rodrigues' formula summed as a power series. This is the sense in which $[\omega]_\times$ from [1.2](01-02-rotation-matrices.md) "generates" rotations, and it is why integrating an angular velocity means exponentiating a skew matrix.

**Choosing a representation.**

| | Numbers | Singularity | Composition | Interpolation | Good for |
|---|---|---|---|---|---|
| Rotation matrix | 9 | none | matrix product | poor | computation, chains |
| Euler / fixed angles | 3 | gimbal lock | awkward | poor | human interface, storage |
| Axis–angle | 4 (1 constraint) | $\theta = 0$, $180°$ | awkward | good | angular velocity, small rotations |
| Unit quaternion | 4 (1 constraint) | **none** | quaternion product | excellent | integration, interpolation ([1.4](01-04-quaternions.md)) |

## Picture

![A two-panel figure. Left: a sequence of three small aircraft silhouettes showing a ZYX rotation applied step by step — first a yaw about the vertical axis, then a pitch about the new lateral axis, then a roll about the new longitudinal axis — with each rotated axis drawn in a different weight and the angle labelled. Beneath, a fourth panel shows the gimbal-lock case with pitch at ninety degrees, in which the yaw and roll axes have become parallel and are drawn overlapping, with a note that only their difference is determined. Right: a single axis vector k drawn through the origin with a cone of rotation about it by an angle theta, a vector shown before and after rotation, and the decomposition of the vector into a component along k that is unchanged and a perpendicular component that sweeps through theta.](assets/01-03-fig1.svg)

Left: three successive rotations, and the configuration where two of the three axes coincide. Gimbal lock is not an abstraction — it is those two arrows lying on top of each other.

Right: the axis–angle picture that Rodrigues' formula encodes. The component along $\hat k$ is untouched; only the perpendicular part rotates, which is where the $\sin\theta$ and $(1-\cos\theta)$ terms come from.

## Worked examples

**Example 1 (round trip, and the second solution).** Compute $R$ for ZYX angles $(\alpha,\beta,\gamma) = (30°,45°,60°)$, then extract the angles back.

*Forward.*

$$R = R_z(30°)R_y(45°)R_x(60°) = \begin{bmatrix}0.6124&0.2803&0.7392\\0.3536&0.7392&-0.5732\\-0.7071&0.6124&0.3536\end{bmatrix}.$$

*Spot-check one entry.* $r_{31} = -\sin\beta = -\sin45° = -0.7071$ ✓ — that entry depends on $\beta$ alone, which is exactly why the extraction starts there.

*Extraction.*

$$\beta = \operatorname{atan2}\left(-(-0.7071),\ \sqrt{0.6124^2+0.3536^2}\right) = \operatorname{atan2}(0.7071,\ \sqrt{0.3750+0.1250})$$
$$= \operatorname{atan2}(0.7071,\ 0.7071) = 45°\ \checkmark$$

$$\cos\beta = 0.7071:$$
$$\alpha = \operatorname{atan2}\left(\frac{0.3536}{0.7071},\ \frac{0.6124}{0.7071}\right) = \operatorname{atan2}(0.5000,\ 0.8660) = 30°\ \checkmark$$
$$\gamma = \operatorname{atan2}\left(\frac{0.6124}{0.7071},\ \frac{0.3536}{0.7071}\right) = \operatorname{atan2}(0.8660,\ 0.5000) = 60°\ \checkmark$$

*The second solution.* Take $\beta' = 180°-45° = 135°$, so $\cos\beta' = -0.7071$:

$$\alpha' = \operatorname{atan2}\left(\frac{0.3536}{-0.7071},\ \frac{0.6124}{-0.7071}\right) = \operatorname{atan2}(-0.5,\ -0.866) = -150°,$$
$$\gamma' = \operatorname{atan2}\left(\frac{0.6124}{-0.7071},\ \frac{0.3536}{-0.7071}\right) = \operatorname{atan2}(-0.866,\ -0.5) = -120°.$$

$$(\alpha',\beta',\gamma') = (-150°,\,135°,\,-120°)$$

produces the **identical** rotation matrix — verified by multiplying it out.

**Every orientation has two Euler-angle representations** (except at gimbal lock, where it has infinitely many). Any code that compares orientations by comparing angle triples will report two identical orientations as different, which is a real and common bug. Compare the *matrices*, or the quaternions of [1.4](01-04-quaternions.md), never the angles.

**Example 2 (gimbal lock, and axis–angle).**

*(a) Gimbal lock.* Take $(\alpha,\beta,\gamma) = (20°, 90°, 50°)$:

$$R = R_z(20°)R_y(90°)R_x(50°) = \begin{bmatrix}0&0.5&0.866\\0&0.866&-0.5\\-1&0&0\end{bmatrix}.$$

Now take $(\alpha,\beta,\gamma) = (-30°, 90°, 0°)$:

$$R = R_z(-30°)R_y(90°) = \begin{bmatrix}0&0.5&0.866\\0&0.866&-0.5\\-1&0&0\end{bmatrix}.$$

**The same matrix.** And $(0°, 90°, 30°)$ gives it too, as does $(70°, 90°, 100°)$ — any pair with $\alpha-\gamma = -30°$.

*Why.* At $\beta = 90°$, the first rotation is about world $z$ and the third is about a body $x$-axis that the pitch has swung to point along world $z$. **They are the same physical axis**, so only their combined effect $\alpha-\gamma$ survives. The extraction formulas confirm it: $\cos\beta = 0$, and $r_{11} = r_{21} = 0$, so $\alpha$ is genuinely not recoverable.

*Why this is dangerous rather than merely inconvenient.* An orientation *controller* working in Euler angles near $\beta = 90°$ sees the mapping from angle rates to angular velocity become singular. Commanding a modest angular velocity requires enormous $\dot\alpha$ and $\dot\gamma$ that nearly cancel. Apollo 11's inertial platform had a physical gimbal-lock avoidance zone for exactly this reason, and the crew were warned off it in flight.

*(b) Axis–angle for the Example 1 rotation.*

$$\operatorname{tr}(R) = 0.6124+0.7392+0.3536 = 1.7052,$$
$$\theta = \arccos\frac{1.7052-1}{2} = \arccos(0.3526) = 69.36°.$$

$$\sin\theta = 0.9358, \qquad 2\sin\theta = 1.8716.$$

$$\hat k = \frac{1}{1.8716}\begin{bmatrix}r_{32}-r_{23}\\r_{13}-r_{31}\\r_{21}-r_{12}\end{bmatrix} = \frac{1}{1.8716}\begin{bmatrix}0.6124-(-0.5732)\\0.7392-(-0.7071)\\0.3536-0.2803\end{bmatrix} = \frac{1}{1.8716}\begin{bmatrix}1.1856\\1.4463\\0.0733\end{bmatrix}$$

$$= \begin{bmatrix}0.6335\\0.7728\\0.0391\end{bmatrix}.$$

*Check it is a unit vector:* $0.4013+0.5972+0.0015 = 1.0000$ ✓

*Check by reconstructing with Rodrigues:* substituting $\hat k$ and $\theta = 69.36°$ into $R = I+\sin\theta[\hat k]_\times+(1-\cos\theta)[\hat k]_\times^2$ reproduces the original matrix to four decimals ✓.

*Reading the result.* Three separate rotations of $30°$, $45°$ and $60°$ — totalling $135°$ if you naively add them — are equivalent to a **single** rotation of $69.4°$ about a tilted axis. That is Euler's rotation theorem in action, and the fact that the angles do not add is a compact statement of why rotations do not commute.

*Why axis–angle is the right thing for a controller.* The single number $\theta = 69.4°$ is a genuine, coordinate-free measure of "how far apart" two orientations are — something no set of three Euler angles provides. Orientation error in a robot controller is almost always computed as the axis–angle of $R_{\rm desired}R_{\rm actual}^{\top}$, precisely because $\theta$ then behaves like a distance and $\hat k$ like a direction to move in.

## Watch out

- **You might use `atan` instead of `atan2`.** `atan2` needs both arguments to resolve the quadrant. This is the single most common source of "the robot flipped over" bugs.
- **You might not specify the convention.** "Euler angles" is meaningless alone. State the axis sequence *and* whether the axes are body-fixed or world-fixed. There are twelve of each.
- **You might expect a unique answer.** Every orientation has two Euler triples, and infinitely many at gimbal lock.
- **You might compare orientations by comparing angles.** $(30°,45°,60°)$ and $(-150°,135°,-120°)$ are the *same* orientation. Compare matrices or quaternions.
- **You might interpolate Euler angles.** Linearly blending two angle triples produces a path that wanders, speeds up and slows down unpredictably, and misbehaves badly near gimbal lock. Interpolate quaternions ([1.4](01-04-quaternions.md)).
- **You might divide by $\sin\theta$ near $\theta = 0$ or $180°$** when extracting an axis. Guard both cases explicitly.
- **You might think gimbal lock is avoidable by a better axis order.** It is not. Any three-parameter chart on $SO(3)$ has singularities; only the choice of *where* is yours.
- **You might expect rotation angles to add.** Example 2 shows $30°+45°+60°$ becoming a single $69.4°$.

## One-liner

> Three angles compress a rotation matrix but must break somewhere — at gimbal lock, where two axes align and one degree of freedom vanishes — while axis–angle expresses any orientation as a single turn $\theta$ about one axis $\hat k$, degenerate only at $\theta = 0$ and $180°$.

## Problems

**P1 (🟢)** A rotation has ZYX Euler angles $(\alpha,\beta,\gamma) = (90°, 0°, 90°)$. (a) Write $R_z(90°)$, $R_y(0°)$, $R_x(90°)$ and form $R$. (b) Extract the Euler angles back and confirm they match. (c) Read the columns of $R$ to say where each rotated axis points.

**P2 (🟡)** A rotation has ZYX Euler angles $(45°, 30°, 0°)$. (a) Form $R$. (b) Find its axis and angle. (c) Verify that the axis is a unit vector. (d) Comment on how the single equivalent angle compares with the sum of the two Euler angles.

**P3 (🔴)** A drone's attitude controller uses ZYX Euler angles. It is commanded to pitch from $\beta = 80°$ to $\beta = 100°$ while holding $\alpha = 0$ and $\gamma = 0$. (a) Write $R$ at $\beta = 80°$, $90°$ and $100°$. (b) Find the axis and angle of each. (c) Explain, in terms of the extraction formulas, what happens to the reported $\alpha$ and $\gamma$ as the drone passes through $\beta = 90°$, given tiny numerical noise. (d) Propose two fixes, quantify why the singularity cannot be removed by choosing a different Euler sequence, and state what a production flight controller actually does.

<details>
<summary>Solutions</summary>

**P1** (a) $$R_z(90°) = \begin{bmatrix}0&-1&0\\1&0&0\\0&0&1\end{bmatrix}, \quad R_y(0°) = I, \quad R_x(90°) = \begin{bmatrix}1&0&0\\0&0&-1\\0&1&0\end{bmatrix}.$$

$$R = R_z(90°)\,I\,R_x(90°) = \begin{bmatrix}0&-1&0\\1&0&0\\0&0&1\end{bmatrix}\begin{bmatrix}1&0&0\\0&0&-1\\0&1&0\end{bmatrix} = \begin{bmatrix}0&0&1\\1&0&0\\0&1&0\end{bmatrix}.$$

(b) $$\beta = \operatorname{atan2}\left(-r_{31},\sqrt{r_{11}^2+r_{21}^2}\right) = \operatorname{atan2}\left(0,\sqrt{0+1}\right) = \operatorname{atan2}(0,1) = 0°\ \checkmark$$

$$\cos\beta = 1:$$
$$\alpha = \operatorname{atan2}(r_{21},r_{11}) = \operatorname{atan2}(1,0) = 90°\ \checkmark$$
$$\gamma = \operatorname{atan2}(r_{32},r_{33}) = \operatorname{atan2}(1,0) = 90°\ \checkmark$$

(c) | Column | Vector | The rotated frame's… |
|---|---|---|
| 1 | $(0,1,0)$ | $x$-axis points along world $+y$ |
| 2 | $(0,0,1)$ | $y$-axis points along world $+z$ |
| 3 | $(1,0,0)$ | $z$-axis points along world $+x$ |

A cyclic permutation $x\to y\to z\to x$ — which is the $120°$ rotation about the body diagonal $(1,1,1)/\sqrt3$ seen in [1.2](01-02-rotation-matrices.md) P2.

**P2** (a) $$R = R_z(45°)R_y(30°) = \begin{bmatrix}0.7071&-0.7071&0\\0.7071&0.7071&0\\0&0&1\end{bmatrix}\begin{bmatrix}0.8660&0&0.5\\0&1&0\\-0.5&0&0.8660\end{bmatrix}$$

$$= \begin{bmatrix}0.6124&-0.7071&0.3536\\0.6124&0.7071&0.3536\\-0.5000&0&0.8660\end{bmatrix}.$$

(b) $$\operatorname{tr}(R) = 0.6124+0.7071+0.8660 = 2.1855,$$
$$\theta = \arccos\frac{2.1855-1}{2} = \arccos(0.5928) = 53.65°.$$

$$\sin\theta = 0.8054, \qquad 2\sin\theta = 1.6108.$$

$$\hat k = \frac{1}{1.6108}\begin{bmatrix}r_{32}-r_{23}\\r_{13}-r_{31}\\r_{21}-r_{12}\end{bmatrix} = \frac{1}{1.6108}\begin{bmatrix}0-0.3536\\0.3536-(-0.5000)\\0.6124-(-0.7071)\end{bmatrix} = \frac{1}{1.6108}\begin{bmatrix}-0.3536\\0.8536\\1.3195\end{bmatrix}$$

$$= \begin{bmatrix}-0.2195\\0.5299\\0.8192\end{bmatrix}.$$

(c) $$\|\hat k\|^2 = 0.0482+0.2808+0.6711 = 1.0001 \approx 1\ \checkmark$$

(d) The Euler angles sum to $45°+30° = 75°$, but the single equivalent rotation is only **$53.65°$** — about 72% of the sum.

*Why it is smaller.* The two rotation axes ($z$, then the rotated $y$) are perpendicular, so the rotations partly work at cross purposes rather than reinforcing. Only when two rotations share the same axis do their angles add; otherwise the composite angle is strictly less than the sum.

*A useful bound:* for any two rotations, $\theta_{\rm composite}\leq\theta_1+\theta_2$, with equality only for parallel axes. The same triangle-inequality structure holds on any rotation group, and $\theta$ behaves as a genuine metric on $SO(3)$ — which is why it, and not any sum of Euler angles, is what an orientation controller should regulate.

**P3** (a) With $\alpha = \gamma = 0$, $R = R_y(\beta)$:

$$\beta = 80°: \ \begin{bmatrix}0.1736&0&0.9848\\0&1&0\\-0.9848&0&0.1736\end{bmatrix}, \quad \beta = 90°: \ \begin{bmatrix}0&0&1\\0&1&0\\-1&0&0\end{bmatrix},$$
$$\beta = 100°: \ \begin{bmatrix}-0.1736&0&0.9848\\0&1&0\\-0.9848&0&-0.1736\end{bmatrix}.$$

(b) For a pure $R_y(\beta)$ the axis is obviously $\hat y = (0,1,0)$ and the angle is $\beta$. Confirming with the formulas:

$$\operatorname{tr} = \cos\beta+1+\cos\beta = 1+2\cos\beta, \qquad \theta = \arccos\frac{2\cos\beta}{2} = \arccos(\cos\beta) = \beta\ \checkmark$$

$$\hat k = \frac{1}{2\sin\beta}\begin{bmatrix}0-0\\\sin\beta-(-\sin\beta)\\0-0\end{bmatrix} = \frac{1}{2\sin\beta}\begin{bmatrix}0\\2\sin\beta\\0\end{bmatrix} = (0,1,0)\ \checkmark$$

| $\beta$ | axis | angle |
|---|---|---|
| $80°$ | $(0,1,0)$ | $80°$ |
| $90°$ | $(0,1,0)$ | $90°$ |
| $100°$ | $(0,1,0)$ | $100°$ |

**Nothing whatsoever goes wrong.** The axis–angle description passes straight through the pitch-up manoeuvre with no hint of a problem, and the underlying rotation matrix varies smoothly. **The physical motion is entirely benign.**

(c) *But the Euler extraction breaks.* Near $\beta = 90°$:

$$\cos\beta\to0, \qquad r_{11} = \cos\alpha\cos\beta\to0, \qquad r_{21} = \sin\alpha\cos\beta\to0.$$

Both arguments of $\alpha = \operatorname{atan2}(r_{21}/\cos\beta,\ r_{11}/\cos\beta)$ approach $0/0$. With exact arithmetic the ratio is still $\tan\alpha$ and $\alpha = 0$ comes out fine, but with any noise $\epsilon$ in the matrix entries:

$$\frac{r_{21}}{\cos\beta} \approx \frac{\epsilon}{\cos\beta}, \qquad \frac{r_{11}}{\cos\beta} \approx \frac{\epsilon'}{\cos\beta},$$

and $\alpha$ becomes the arctangent of a ratio of two noise terms — **effectively random**. At $\beta$ exactly $90°$ it is a division by zero.

*Concretely:* at $\beta = 89.9°$, $\cos\beta = 0.00175$. A rounding error of $10^{-6}$ in $r_{21}$ produces an error in $\alpha$ of about $10^{-6}/0.00175 = 5.7\times10^{-4}$ rad. At $\beta = 89.999°$ the same noise produces $0.057$ rad — over three degrees. **The error blows up as $1/\cos\beta$**, and reported yaw and roll spin wildly while the drone is doing nothing unusual.

*The controller's version of the same problem.* The map from Euler rates to angular velocity,

$$\boldsymbol\omega = \begin{bmatrix}-s_\beta&0&1\\c_\beta s_\gamma&c_\gamma&0\\c_\beta c_\gamma&-s_\gamma&0\end{bmatrix}\begin{bmatrix}\dot\alpha\\\dot\beta\\\dot\gamma\end{bmatrix},$$

has determinant $-\cos\beta$. **Singular at $\beta = \pm90°$**: a bounded $\boldsymbol\omega$ requires unbounded $\dot\alpha$ and $\dot\gamma$, and a controller that inverts this matrix commands enormous, nearly-cancelling rates.

(d) *Two fixes.*

**Fix 1: use quaternions.** Store and integrate attitude as a unit quaternion ([1.4](01-04-quaternions.md)), and convert to Euler angles only for display. Four parameters, one constraint, **no singularity anywhere**, and the composition and interpolation are cheap. This is the standard fix.

**Fix 2: switch charts.** Use ZYX when $|\beta|$ is small and a different sequence (say ZXY, whose singularity is at a different attitude) when $\beta$ approaches $90°$. This works, and mechanical gimbals implement the physical version of it with a redundant fourth gimbal ring — but the bookkeeping at the switch is fiddly and it is strictly worse than fix 1.

*Why no Euler sequence escapes it.* $SO(3)$ is a compact three-manifold that is **not** homeomorphic to any open subset of $\mathbb{R}^3$ — it is $\mathbb{RP}^3$, and it cannot be covered by a single chart. Any smooth map from three parameters onto $SO(3)$ must therefore have points where its Jacobian drops rank.

Concretely, every one of the twelve Euler sequences has a determinant of the rate map proportional to $\cos$ or $\sin$ of its **middle** angle, and so has a singularity when that middle angle is $\pm90°$ (or $0°$/$180°$ for the symmetric sequences like ZXZ). **You can move the singularity; you cannot remove it.**

*What a production flight controller actually does.* It carries attitude internally as a **unit quaternion** (or as a full rotation matrix, sometimes called a DCM), integrated from gyro rates and renormalized each cycle. Euler angles appear only at the two edges of the system: in the pilot's display, and sometimes in a human-facing command interface. Attitude error is formed as a quaternion difference and converted to an axis–angle-like vector for the control law — which is why the axis–angle machinery of this lesson, not the Euler machinery, is what survives into the controller of [4.2](04-02-computed-torque-control.md).

</details>

## Flashback

**From Lesson 1.2 (Rotation matrices):** Given $R = R_z(90°)R_y(90°)$. (a) Compute the matrix. (b) Verify $R^{\top}R = I$. (c) Find its axis and angle.

<details>
<summary>Solution</summary>

(a) $$R = \begin{bmatrix}0&-1&0\\1&0&0\\0&0&1\end{bmatrix}\begin{bmatrix}0&0&1\\0&1&0\\-1&0&0\end{bmatrix} = \begin{bmatrix}0&-1&0\\0&0&1\\-1&0&0\end{bmatrix}.$$

(b) Columns are $(0,0,-1)$, $(-1,0,0)$, $(0,1,0)$ — each of unit length, and each pair has zero dot product ✓. $\det = 1$ ✓.

(c) $$\operatorname{tr}(R) = 0+0+0 = 0, \qquad \theta = \arccos\frac{0-1}{2} = \arccos(-0.5) = 120°.$$

$$\sin120° = 0.8660, \qquad 2\sin\theta = 1.7321.$$

$$\hat k = \frac{1}{1.7321}\begin{bmatrix}r_{32}-r_{23}\\r_{13}-r_{31}\\r_{21}-r_{12}\end{bmatrix} = \frac{1}{1.7321}\begin{bmatrix}0-1\\0-(-1)\\0-(-1)\end{bmatrix} = \frac{1}{1.7321}\begin{bmatrix}-1\\1\\1\end{bmatrix} = \begin{bmatrix}-0.5774\\0.5774\\0.5774\end{bmatrix}.$$

*Check:* $3(0.5774)^2 = 3(0.3334) = 1.0002 \approx 1$ ✓

**A $120°$ rotation about a body diagonal** — the same structure as P1's cyclic permutation, with a sign on the first component because this particular product permutes the axes in the opposite cyclic direction.

*The connecting observation.* Two $90°$ rotations about perpendicular axes compose into a single $120°$ rotation about a diagonal — a fact that is completely opaque in the matrix and completely transparent in axis–angle. That is the practical argument for having more than one representation available: each one makes a different property obvious, and the skill is knowing which to convert to.

</details>

## Connections

- **Backward:** the elementary rotation matrices, the composition order and the skew-symmetric $[\omega]_\times$ are [1.2](01-02-rotation-matrices.md)'s.
- **Forward:** [1.4](01-04-quaternions.md) removes the singularity with a fourth parameter; [1.5](01-05-homogeneous-transforms.md) adds translation; [3.5](03-05-cartesian-trajectories-via-points.md) needs a singularity-free interpolation for orientation paths.
- **Sideways:** Rodrigues' formula is the exponential map of a Lie group, the same construction that turns angular momentum operators into rotations in [`quantum-mechanics`](../../quantum-mechanics/syllabus.md); the impossibility of a global three-parameter chart is a statement about the topology of $\mathbb{RP}^3$ from [`algebraic-topology`](../../algebraic-topology/syllabus.md).
