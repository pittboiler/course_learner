# Robotics & Kinematics · Lesson 4.5: Localization — a taste

> ⏱ ~15 min · Module 4: Control and mobile robots · Builds on: [4.4 Wheeled mobile robots](04-04-wheeled-mobile-robots.md) · Unlocks: [4.6 Motion planning](04-06-motion-planning.md)

## Why this matters

[4.4](04-04-wheeled-mobile-robots.md) gave the equations that turn wheel speeds into a pose. Integrate them and you have **dead reckoning** — the robot's estimate of where it is, from its own motion alone.

It does not work. Not "works imperfectly" — a 1% mismatch between two wheel radii sends a robot that believes it is driving straight around a 30 metre circle, and after 100 metres it is facing backwards. The error is not noise; it is a systematic bias that integrates without bound.

**Localization** is the estimation problem that follows: combine the motion model with external measurements to keep the pose estimate bounded. This lesson is a taste — enough to see why the problem is hard, what structure the solution has, and where the [Kalman filter](../reference.md#kalman-filter) fits, without deriving it.

## The idea

Two sources of information, with opposite failure modes.

**The motion model (odometry).** Wheel encoders, integrated through [4.4](04-04-wheeled-mobile-robots.md)'s equations. **Available continuously, smooth, precise over short intervals — and its error grows without bound.**

**Measurements.** A laser scan matched against a map, a camera seeing a landmark, GPS, a wall detected by a bumper. **Bounded error, but intermittent, noisy, and sometimes ambiguous.**

Neither is usable alone. The whole art is combining them, and the combining rule is Bayesian:

$$\underbrace{p\left(\mathbf{q}_t\mid\mathbf{z}_{1:t},\mathbf{u}_{1:t}\right)}_{\text{belief}} \propto \underbrace{p\left(\mathbf{z}_t\mid\mathbf{q}_t\right)}_{\text{measurement}}\int\underbrace{p\left(\mathbf{q}_t\mid\mathbf{q}_{t-1},\mathbf{u}_t\right)}_{\text{motion}}\,\underbrace{p\left(\mathbf{q}_{t-1}\mid\cdots\right)}_{\text{prior belief}}d\mathbf{q}_{t-1}.$$

*In words: predict where you moved to, then correct with what you see.* Every localization algorithm — Kalman filter, particle filter, graph-based SLAM — is a way of representing that belief and doing those two steps.

**Two kinds of odometry error**, and the distinction matters enormously:

**Systematic errors** — a wheel radius slightly off, a wheelbase measured wrong, a wheel not quite perpendicular. **These integrate linearly and dominate.** They are also *calibratable*: measure them once and correct them.

**Random errors** — slip, encoder quantization, uneven floor. These accumulate as a **random walk**, so the standard deviation grows as $\sqrt{\text{distance}}$ rather than linearly. Much more benign, and not calibratable.

**Calibration attacks the dominant term**, and the standard procedure (the UMBmark test) reduces systematic odometry error by an order of magnitude for the price of driving a square twice.

## The formal version

**Dead reckoning.** Integrate [4.4](04-04-wheeled-mobile-robots.md)'s model:

$$\boxed{\;\phi_{k+1} = \phi_k+\omega_k\Delta t, \qquad x_{k+1} = x_k+\frac{v_k}{\omega_k}\left[\sin\phi_{k+1}-\sin\phi_k\right], \qquad y_{k+1} = y_k-\frac{v_k}{\omega_k}\left[\cos\phi_{k+1}-\cos\phi_k\right],\;}$$

with the straight-line degenerate case for $|\omega|<\epsilon$.

**Systematic error growth.** A constant bias $\Delta\omega$ in the turn rate gives, after distance $d$ at speed $v$:

$$\boxed{\;\Delta\phi = \frac{\Delta\omega}{v}d\ \ \text{(linear in }d\text{)}, \qquad \Delta y_{\rm lateral}\approx\frac{\Delta\omega}{2v}d^2\ \ \text{(quadratic)}.\;}$$

**The lateral error grows quadratically** because a heading error, once acquired, keeps being integrated into position.

**The two dominant systematic sources.**

| Error | Symptom | Effect |
|---|---|---|
| Unequal effective wheel radii $E_d = r_R/r_L$ | curves when commanded straight | $\Delta\omega = \dfrac{r(\dot\varphi)(E_d-1)}{L}$ |
| Wrong wheelbase $E_b = L_{\rm actual}/L_{\rm nominal}$ | turns by the wrong amount | $\Delta\phi/\phi = E_b-1$ |

**Random error growth.** With independent per-step heading noise of standard deviation $\sigma_\phi$ per unit distance:

$$\boxed{\;\sigma_\phi(d) = \sigma_\phi^{(1)}\sqrt{d}, \qquad \sigma_{\rm lateral}(d)\approx\frac{\sigma_\phi^{(1)}d^{3/2}}{\sqrt3}.\;}$$

**The Bayes filter, in two steps.**

$$\text{Predict:} \quad \overline{bel}\left(\mathbf{q}_t\right) = \int p\left(\mathbf{q}_t\mid\mathbf{u}_t,\mathbf{q}_{t-1}\right)bel\left(\mathbf{q}_{t-1}\right)d\mathbf{q}_{t-1},$$

$$\text{Update:} \quad bel\left(\mathbf{q}_t\right) = \eta\,p\left(\mathbf{z}_t\mid\mathbf{q}_t\right)\overline{bel}\left(\mathbf{q}_t\right).$$

**Prediction always increases uncertainty; update always decreases it.** Localization works when the updates arrive often enough to keep pace.

**The Kalman filter** is the Bayes filter when everything is Gaussian and linear. For the scalar case, combining a prediction $\mathcal{N}(\hat x^-,\sigma_-^2)$ with a measurement $\mathcal{N}(z,\sigma_z^2)$:

$$\boxed{\;K = \frac{\sigma_-^2}{\sigma_-^2+\sigma_z^2}, \qquad \hat x^+ = \hat x^-+K\left(z-\hat x^-\right), \qquad \sigma_+^2 = (1-K)\sigma_-^2.\;}$$

*In words: weight the two estimates by their inverse variances.* Equivalently

$$\frac{1}{\sigma_+^2} = \frac{1}{\sigma_-^2}+\frac{1}{\sigma_z^2},$$

**precisions add** — the cleanest statement of the update, and the reason a second independent measurement always helps.

**The extended Kalman filter (EKF)** linearizes the nonlinear motion and measurement models about the current estimate and applies the linear equations. It is the standard tool, it works well when the nonlinearity is mild and the uncertainty small, and it fails when either is not — because a Gaussian cannot represent a multi-modal belief.

**The particle filter** represents the belief as a cloud of weighted samples. It handles arbitrary distributions and multi-modal beliefs (the **kidnapped robot** problem: "I am in one of four identical corridors"), at the cost of needing many particles in high dimensions.

**Localization versus SLAM.**

| Problem | Known | Unknown |
|---|---|---|
| Localization | map | pose |
| Mapping | pose | map |
| **SLAM** | neither | **both** |

SLAM works because the two unknowns constrain each other: revisiting a place — **loop closure** — corrects the accumulated drift over the whole trajectory at once. It is the single most important mechanism in practical mobile robotics, and it is out of this course's scope.

## Picture

![A two-panel figure. Left: a robot's true path drawn as a straight line and its odometry-estimated path drawn curving away from it, with the gap between them widening quadratically along the route and annotated with the heading error at three points, plus a small inset showing the two wheels with slightly different radii that caused it. Right: a sequence of belief distributions along a corridor — an initial narrow Gaussian, a wider one after a prediction step labelled uncertainty grows, a narrow one again after a measurement update labelled uncertainty shrinks, and a repeat of the cycle — with the true position marked and staying inside the belief throughout.](assets/04-05-fig1.svg)

Left: what uncorrected odometry does. The lateral error grows as the square of distance because a heading error keeps being integrated.

Right: the predict–update cycle. Each prediction inflates the belief, each measurement deflates it, and localization succeeds when the measurements keep pace.

## Worked examples

**Example 1 (how bad odometry is, in numbers).** A differential-drive robot has $r = 0.05$ m, $L = 0.3$ m. Its right wheel's **effective** radius is 1% larger than its left's — a completely ordinary manufacturing and wear tolerance. Both wheels are commanded at $10$ rad/s, so the robot believes it is driving straight.

*What it actually does.*

$$v = \frac{r_R+r_L}{2}(10) = \frac{0.0505+0.0500}{2}(10) = 0.5025\ \mathrm{m/s},$$

$$\omega = \frac{\left(r_R-r_L\right)(10)}{L} = \frac{0.0005(10)}{0.3} = 0.016667\ \mathrm{rad/s}.$$

**The robot is turning**, on a circle of radius

$$R = \frac{v}{\omega} = \frac{0.5025}{0.016667} = 30.15\ \mathrm{m}.$$

*The accumulated error, by distance travelled.*

| $d$ | Heading error | Lateral error | As % of $d$ |
|---|---|---|---|
| 1 m | $1.90°$ | 1.7 cm | 1.7% |
| 10 m | $19.0°$ | 1.66 m | 17% |
| 100 m | $190°$ | 166 m | **166%** |

**After 100 metres the robot is facing the wrong way.** Its odometry says "I drove 100 m in a straight line"; the truth is that it drove three full circuits of a 30 m circle and is back near where it started, pointing backwards.

*The scaling.* Heading error is **linear** in distance; lateral error is **quadratic**. So over 10 m the error is 17% of the distance, and over 100 m it is 166% — the estimate is worse than useless.

*A one percent error did that.* Wheel radius varies with tyre wear, inflation, temperature and load; 1% is optimistic, not pessimistic.

*Now the random component, for comparison.* Suppose slip and encoder quantization contribute an independent heading noise of $\sigma_\phi^{(1)} = 0.002$ rad per metre travelled:

| $d$ | $\sigma_\phi$ | $\sigma_{\rm lateral}$ |
|---|---|---|
| 1 m | 0.0020 rad ($0.11°$) | 0.1 cm |
| 10 m | 0.0063 rad ($0.36°$) | 3.6 cm |
| 100 m | 0.0200 rad ($1.15°$) | 1.15 m |

**At 100 m the systematic error is 166 m and the random error is 1.15 m** — a factor of 144. The systematic term dominates completely, and its $\sqrt d$-versus-$d^2$ scaling means the gap widens.

*The immediate practical conclusion.* **Calibrate before you filter.** The UMBmark procedure drives a $4\times4$ m square clockwise and counterclockwise, measures the return-position error, and solves for the two systematic parameters $E_d$ (wheel-radius ratio) and $E_b$ (effective wheelbase). Applying the correction typically reduces systematic error by a factor of 10–20 — bringing 166 m down to 8–17 m at 100 m.

**Still not good enough.** Even calibrated odometry drifts without bound, which is why the correction step exists.

**Example 2 (the correction step, and what it buys).** A robot's pose estimate along a corridor has $\sigma_- = 0.5$ m after a stretch of dead reckoning. A laser scan matched against a wall feature gives a measurement with $\sigma_z = 0.2$ m.

*The Kalman update.*

$$K = \frac{\sigma_-^2}{\sigma_-^2+\sigma_z^2} = \frac{0.25}{0.25+0.04} = \frac{0.25}{0.29} = 0.862,$$

$$\sigma_+ = \sqrt{(1-K)\sigma_-^2} = \sqrt{0.138(0.25)} = \sqrt{0.0345} = 0.186\ \mathrm{m}.$$

*Or by the precision form:*

$$\frac{1}{\sigma_+^2} = \frac{1}{0.25}+\frac{1}{0.04} = 4+25 = 29 \quad\Longrightarrow\quad \sigma_+ = \frac{1}{\sqrt{29}} = 0.186\ \mathrm{m}\ \checkmark$$

**A 0.5 m uncertainty became 0.186 m** — better than the measurement alone (0.2 m), because the prior contributed information too.

*Reading the gain.* $K = 0.862$ means the update moves the estimate 86% of the way to the measurement. **The gain is the fraction of the total precision the measurement supplies:** with $\sigma_z\ll\sigma_-$ the gain approaches 1 (trust the measurement); with $\sigma_z\gg\sigma_-$ it approaches 0 (trust the model). No tuning required — the variances decide.

*The steady state, which is the number that matters.* Suppose the robot drives 2 m between measurements, accumulating $\sigma_{\rm added} = 0.15$ m of new uncertainty each time (from the random component, after calibration). Then each cycle is

$$\sigma_-^2 = \sigma_+^2+0.15^2, \qquad \frac{1}{\sigma_+^2} = \frac{1}{\sigma_-^2}+\frac{1}{0.04}.$$

At steady state $\sigma_+ = \sigma_+^{ss}$, so

$$\frac{1}{\left(\sigma_+^{ss}\right)^2} = \frac{1}{\left(\sigma_+^{ss}\right)^2+0.0225}+25.$$

Solving: let $u = (\sigma_+^{ss})^2$. Then $\dfrac{1}{u}-\dfrac{1}{u+0.0225} = 25$, so $\dfrac{0.0225}{u(u+0.0225)} = 25$, giving

$$u^2+0.0225u-0.0009 = 0, \qquad u = \frac{-0.0225+\sqrt{0.000506+0.0036}}{2} = \frac{-0.0225+0.0641}{2} = 0.0208,$$

$$\sigma_+^{ss} = 0.144\ \mathrm{m}.$$

**The uncertainty stops growing and settles at 14 cm**, indefinitely, however far the robot drives.

*That is the whole point of localization.* Dead reckoning's error grows without bound; a filtered estimate reaches a **steady state** where the information gained from measurements exactly balances the information lost to motion noise. **Bounded error, forever** — and the bound depends only on the measurement quality and the measurement rate, not on how far the robot has travelled.

*What sets that bound.* Two knobs:

**Better measurements** ($\sigma_z$ smaller). Halving $\sigma_z$ to 0.1 m gives $\sigma_+^{ss} = 0.083$ m — a factor of 1.7 improvement.

**More frequent measurements** ($\sigma_{\rm added}$ smaller per cycle). Halving the distance between measurements to 1 m gives $\sigma_{\rm added} = 0.15/\sqrt2 = 0.106$ m and $\sigma_+^{ss} = 0.115$ m.

**Measurement quality helps more than measurement rate**, because the added uncertainty enters as $\sqrt{\text{distance}}$ while the measurement enters directly.

*Two honest caveats on all of this.*

**The Gaussian assumption is doing work.** If the robot could be in one of several places — two identical corridors, a symmetric room — the true belief is multi-modal and no Gaussian represents it. The Kalman filter will confidently report the average of two possibilities, which is a location the robot is definitely *not* in. **A particle filter is required** for global localization and for the kidnapped-robot problem.

**Data association is the hard part in practice.** The update assumed the measurement was correctly matched to the right landmark. Match it to the wrong one and the filter is corrupted, often irrecoverably — and the filter's own confidence makes it *less* likely to recover, since a confident prior rejects the correct measurement as an outlier. **Most real-world localization failures are association failures, not estimation failures.**

## Watch out

- **You might filter before calibrating.** Systematic errors dominate by two orders of magnitude and a filter cannot remove a bias it does not model. Calibrate first.
- **You might treat all odometry error as noise.** Systematic error grows linearly (heading) and quadratically (position); random error grows as $\sqrt d$ and $d^{3/2}$. They are different problems.
- **You might trust a Gaussian belief through an ambiguity.** A Kalman filter cannot represent "here or there," and its mean will be neither.
- **You might over-trust the measurement model.** Setting $\sigma_z$ too small makes the filter reject good predictions and jump around; too large and it ignores measurements and drifts.
- **You might forget that prediction always inflates.** If measurements stop, the estimate degrades to dead reckoning immediately.
- **You might mis-associate a landmark.** A single wrong association can corrupt a filter permanently. Gate the associations and validate them.
- **You might expect a filter to fix a bad motion model.** The filter combines the model and the measurements; a systematically wrong model biases the result no matter how good the measurements.
- **You might use an EKF where the nonlinearity is severe.** Linearizing about a poor estimate can diverge. Use an unscented or particle filter.

## One-liner

> Dead reckoning's error grows without bound and is dominated by calibratable systematic terms — a 1% wheel mismatch turns 100 m of straight driving into a $190°$ heading error — so localization predicts with the motion model, corrects with measurements weighted by inverse variance, and reaches a steady-state uncertainty that no longer grows with distance.

## Problems

**P1 (🟢)** A differential-drive robot with $r = 0.06$ m, $L = 0.4$ m has both wheels commanded at $8$ rad/s, but the right wheel's effective radius is 0.5% larger. (a) Find $v$ and the true $\omega$. (b) Find the true turning radius. (c) Find the heading error after 20 m.

**P2 (🟡)** A pose estimate has $\sigma_- = 0.8$ m. Two independent measurements arrive, with $\sigma_1 = 0.3$ m and $\sigma_2 = 0.5$ m. (a) Find the posterior after the first. (b) Find the posterior after both. (c) Verify using the precision form. (d) State the Kalman gain for each update and interpret.

**P3 (🔴)** A warehouse robot drives 3 m between landmark sightings, accumulating $\sigma_{\rm added} = 0.12$ m of position uncertainty per interval. Landmark measurements have $\sigma_z = 0.15$ m. (a) Find the steady-state uncertainty. (b) Find it if the landmark spacing is halved. (c) Find it if the measurement quality is doubled instead. (d) The robot must dock to $\pm3$ cm. Determine whether either change suffices, propose what would, and explain the trade-offs.

<details>
<summary>Solutions</summary>

**P1** (a) $$r_R = 0.06(1.005) = 0.0603\ \mathrm{m}, \qquad r_L = 0.0600\ \mathrm{m}.$$

$$v = \frac{\left(r_R+r_L\right)(8)}{2} = \frac{0.1203(8)}{2} = 0.4812\ \mathrm{m/s},$$

$$\omega = \frac{\left(r_R-r_L\right)(8)}{L} = \frac{0.0003(8)}{0.4} = \frac{0.0024}{0.4} = 0.006\ \mathrm{rad/s}.$$

(b) $$R = \frac{v}{\omega} = \frac{0.4812}{0.006} = 80.2\ \mathrm{m}.$$

(c) Time to travel 20 m: $t = 20/0.4812 = 41.56$ s.

$$\Delta\phi = \omega t = 0.006(41.56) = 0.2494\ \mathrm{rad} = 14.29°.$$

*Or directly:* $\Delta\phi = d/R = 20/80.2 = 0.2494$ rad ✓

**Fourteen degrees of heading error after twenty metres**, from a half-percent wheel mismatch. The lateral error is roughly $d^2/(2R) = 400/160.4 = 2.49$ m — over 12% of the distance travelled.

**P2** (a) $$K_1 = \frac{\sigma_-^2}{\sigma_-^2+\sigma_1^2} = \frac{0.64}{0.64+0.09} = \frac{0.64}{0.73} = 0.8767,$$

$$\sigma_a^2 = (1-K_1)\sigma_-^2 = 0.1233(0.64) = 0.0789, \qquad \sigma_a = 0.2809\ \mathrm{m}.$$

(b) Using $\sigma_a$ as the new prior:

$$K_2 = \frac{0.0789}{0.0789+0.25} = \frac{0.0789}{0.3289} = 0.2399,$$

$$\sigma_b^2 = (1-K_2)(0.0789) = 0.7601(0.0789) = 0.0600, \qquad \sigma_b = 0.2449\ \mathrm{m}.$$

(c) *Precision form* — all three sources at once:

$$\frac{1}{\sigma_b^2} = \frac{1}{0.64}+\frac{1}{0.09}+\frac{1}{0.25} = 1.5625+11.1111+4.0000 = 16.6736,$$

$$\sigma_b = \frac{1}{\sqrt{16.6736}} = 0.2449\ \mathrm{m}\ \checkmark$$

**The precision form gives the answer in one line**, and it makes the structure obvious: independent information sources contribute additively in *precision* (inverse variance), so the order of processing is irrelevant and the result is the same whether they arrive together or sequentially.

(d) | Update | $K$ | Interpretation |
|---|---|---|
| 1 | 0.877 | measurement much better than prior — trust it heavily |
| 2 | 0.240 | measurement now *worse* than the (improved) prior — trust it lightly |

**The same sensor gets a much smaller gain the second time**, because the prior improved. The gain is not a property of the sensor; it is the ratio of the information the sensor supplies to the total. A $0.5$ m measurement is valuable against a $0.8$ m prior and marginal against a $0.28$ m one.

*Note also that the second measurement still helped* — $0.281\to0.245$ m, a 13% improvement. **A worse-than-prior measurement never hurts**, which is a real property of Bayesian fusion and a reason to use every sensor you have.

**P3** (a) At steady state, with $u = (\sigma_+^{ss})^2$:

$$\frac{1}{u} = \frac{1}{u+\sigma_{\rm added}^2}+\frac{1}{\sigma_z^2} = \frac{1}{u+0.0144}+\frac{1}{0.0225}.$$

$$\frac{1}{u}-\frac{1}{u+0.0144} = 44.444 \quad\Longrightarrow\quad \frac{0.0144}{u(u+0.0144)} = 44.444,$$

$$u^2+0.0144u-3.24\times10^{-4} = 0,$$

$$u = \frac{-0.0144+\sqrt{2.0736\times10^{-4}+1.296\times10^{-3}}}{2} = \frac{-0.0144+\sqrt{1.5034\times10^{-3}}}{2} = \frac{-0.0144+0.038773}{2}$$
$$= 0.012187,$$

$$\sigma_+^{ss} = 0.1104\ \mathrm{m} = 11.0\ \mathrm{cm}.$$

(b) *Halving the landmark spacing* to 1.5 m. Since the added variance scales with distance, $\sigma_{\rm added}^2$ halves:

$$\sigma_{\rm added}^2 = \frac{0.0144}{2} = 0.0072.$$

$$u^2+0.0072u-1.62\times10^{-4} = 0, \qquad u = \frac{-0.0072+\sqrt{5.184\times10^{-5}+6.48\times10^{-4}}}{2} = \frac{-0.0072+0.026458}{2}$$
$$= 0.009629, \qquad \sigma_+^{ss} = 0.0981\ \mathrm{m} = 9.8\ \mathrm{cm}.$$

**Only an 11% improvement** for twice as many landmarks.

(c) *Doubling the measurement quality* to $\sigma_z = 0.075$ m, keeping the 3 m spacing:

$$\frac{1}{\sigma_z^2} = \frac{1}{0.005625} = 177.78.$$

$$\frac{0.0144}{u(u+0.0144)} = 177.78 \quad\Longrightarrow\quad u^2+0.0144u-8.1\times10^{-5} = 0,$$

$$u = \frac{-0.0144+\sqrt{2.0736\times10^{-4}+3.24\times10^{-4}}}{2} = \frac{-0.0144+0.023049}{2} = 0.0043245,$$

$$\sigma_+^{ss} = 0.0658\ \mathrm{m} = 6.6\ \mathrm{cm}.$$

**A 40% improvement** — nearly four times the benefit of doubling the landmark density.

*Why quality beats quantity here.* At steady state the balance is

$$\frac{\sigma_{\rm added}^2}{\sigma_z^2}\approx\frac{\sigma_{\rm added}^2}{u} \quad\Longrightarrow\quad \sigma_+^{ss}\sim\sqrt{\sigma_{\rm added}\sigma_z}$$

when the two are comparable. **The steady-state uncertainty is roughly the geometric mean of the two**, so improving either by a factor $k$ improves the result by only $\sqrt k$ — but halving the *spacing* only improves $\sigma_{\rm added}$ by $\sqrt2$, so it improves the result by $2^{1/4} = 1.19$, while halving $\sigma_z$ improves it by $\sqrt2 = 1.41$.

*Checking that scaling against the numbers:* $0.1104/0.0981 = 1.13$ (predicted 1.19) and $0.1104/0.0658 = 1.68$ (predicted 1.41). The agreement is rough because the two terms are not equal here, but the ordering — quality beats density — is right and is the useful takeaway.

(d) *Against a $\pm3$ cm docking requirement:*

| Configuration | $\sigma_+^{ss}$ | Meets 3 cm? |
|---|---|---|
| Baseline | 11.0 cm | no (3.7× too large) |
| Double landmark density | 9.8 cm | no |
| Double measurement quality | 6.6 cm | no |
| **Both** | 6.1 cm | no |

**Nothing works.** Even both improvements together leave $\sigma = 6.1$ cm, and at $\pm3$ cm as a $2\sigma$ requirement one would need $\sigma\approx1.5$ cm — **seven times better than baseline.**

*What would actually work.* The answer is not to improve the general localization; it is to **change the problem for the docking step specifically**:

**A dedicated docking sensor.** A fiducial marker, a reflective target, or an IR beacon at the dock, sensed at close range. A camera reading an AprilTag at 0.5 m gives $\sigma\approx2$ mm — two orders of magnitude better than corridor localization, because it is a direct, short-range, unambiguous measurement of exactly the quantity that matters.

**Mechanical guidance.** A funnel, a chamfered receptacle, or a V-groove that converts a $\pm5$ cm approach into a $\pm3$ mm final position through geometry alone. This is the mobile-robot version of the RCC device from [4.3](04-03-force-hybrid-control.md), and it is free after installation.

**Compliant docking.** Let the dock absorb the misalignment — spring-loaded contacts, a floating connector — so the requirement becomes $\pm5$ cm rather than $\pm3$ cm.

*The trade-offs, and the general principle.*

| Approach | Cost | Robustness | Generality |
|---|---|---|---|
| Better global localization | high (sensors everywhere) | good | works anywhere |
| Dedicated docking sensor | low (one marker per dock) | good at close range | only at the dock |
| Mechanical guidance | very low | excellent | only at the dock |

**Do not solve a local problem globally.** Improving localization everywhere to meet a tolerance required at one point is enormously more expensive than adding a three-dollar fiducial marker at that point — and less reliable, since global localization degrades with map changes, lighting and clutter while a marker at half a metre does not.

*The same lesson recurs throughout robotics.* [4.3](04-03-force-hybrid-control.md) made an impossible peg-in-hole tolerance easy with compliance rather than with accuracy; here an impossible docking tolerance becomes easy with a local sensor rather than with a better filter. **The engineering move is to change what the tolerance is measured against**, and it is usually available and usually cheap.

</details>

## Flashback

**From Lesson 4.4 (Wheeled mobile robots):** A differential-drive robot with $r = 0.05$ m, $L = 0.3$ m drives with $\dot\varphi_R = 10$, $\dot\varphi_L = 8$ rad/s for 3 s from $(0,0,0)$. Its odometry uses the exact arc formulas. (a) Give the estimated pose. (b) If the true wheelbase is $0.31$ m rather than the assumed $0.30$ m, find the true pose and the error.

<details>
<summary>Solution</summary>

(a) From [4.4](04-04-wheeled-mobile-robots.md) Example 1, using $L = 0.30$ m:

$$v = 0.450\ \mathrm{m/s}, \qquad \omega = 0.3333\ \mathrm{rad/s}, \qquad R = 1.350\ \mathrm{m},$$

$$\left(x,\ y,\ \phi\right)_{\rm estimated} = \left(1.1360,\ 0.6206,\ 1.0000\ \mathrm{rad}\right).$$

(b) With the **true** $L = 0.31$ m, the forward speed is unaffected but the turn rate is not:

$$\omega_{\rm true} = \frac{r\left(\dot\varphi_R-\dot\varphi_L\right)}{L_{\rm true}} = \frac{0.05(2)}{0.31} = 0.32258\ \mathrm{rad/s},$$

$$R_{\rm true} = \frac{0.450}{0.32258} = 1.395\ \mathrm{m}.$$

$$\phi_{\rm true} = 0.32258(3) = 0.96774\ \mathrm{rad} = 55.45°,$$
$$x_{\rm true} = 1.395\sin(0.96774) = 1.395(0.82357) = 1.1489\ \mathrm{m},$$
$$y_{\rm true} = -1.395\left[\cos(0.96774)-1\right] = -1.395(0.56718-1) = 1.395(0.43282) = 0.6038\ \mathrm{m}.$$

*The error.*

| | Estimated | True | Error |
|---|---|---|---|
| $x$ | 1.1360 | 1.1489 | $-0.0129$ m |
| $y$ | 0.6206 | 0.6038 | $+0.0168$ m |
| $\phi$ | 1.0000 rad | 0.9677 rad | $+0.0323$ rad ($1.85°$) |

$$\left\|\Delta\mathbf{p}\right\| = \sqrt{0.0129^2+0.0168^2} = 0.0212\ \mathrm{m} = 2.1\ \mathrm{cm}.$$

*Reading it.* A **3.3% wheelbase error** produced a $1.85°$ heading error and 2.1 cm of position error over just 1.35 m of travel.

*And here is the part that matters.* The heading error is **proportional to the total turning**, so

$$\frac{\Delta\phi}{\phi} = \frac{L_{\rm true}-L_{\rm nominal}}{L_{\rm nominal}} = \frac{0.01}{0.30} = 3.33\%,$$

**a constant fraction of every turn the robot ever makes.** Driving a route with $100$ rad of cumulative turning — a few dozen corners — accumulates $3.33$ rad of heading error, well over $180°$.

*Which is exactly why the wheelbase is one of the two parameters the UMBmark calibration solves for.* The two systematic parameters have distinguishable signatures:

| Parameter | Signature |
|---|---|
| Wheel-radius ratio $E_d$ | curves when commanded straight |
| Effective wheelbase $E_b$ | turns by the wrong amount |

Driving a square **clockwise** and **counterclockwise** separates them, because the radius error's contribution reverses sign with direction while the wheelbase error's does not. Two runs, two equations, two unknowns — and a factor of 10–20 reduction in systematic odometry error for a few minutes of work.

**Calibration is not optional and it is not hard.** It is the highest-return activity in mobile robotics, and Example 1's numbers explain why: it attacks the term that is two orders of magnitude larger than everything else.

</details>

## Connections

- **Backward:** the motion model being integrated is [4.4](04-04-wheeled-mobile-robots.md)'s; the pose transforms are [1.5](01-05-homogeneous-transforms.md)'s.
- **Forward:** [4.6](04-06-motion-planning.md) plans paths that a localized robot then follows, and planning under pose uncertainty is a research area in its own right.
- **Sideways:** the Bayes filter is Bayesian inference from [`probability-theory`](../../probability-theory/syllabus.md); the Kalman filter is recursive least squares and the optimal linear estimator, connected to the projection and least-squares machinery of [`linalg-refresher` 4.2](../../linalg-refresher/lessons/04-02-projection-least-squares.md); and the random-walk growth of odometry error is Brownian motion, whose $\sqrt t$ scaling is the same result that governs diffusion.
