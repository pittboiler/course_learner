# Quantum Networking · Lesson 4.1: Learning the fiber's rotation

> ⏱ ~15 min · Module 4: Keeping the channel alive · Builds on: [2.2 Polarization as a qubit](02-02-polarization-as-a-qubit.md), [2.3 Drift in buried fiber](02-03-drift-in-buried-fiber.md) · Unlocks: [4.2 Compensation as a control loop](04-02-compensation-as-a-control-loop.md)

## Why this matters

[2.3](02-03-drift-in-buried-fiber.md) left you with a fiber that is an unknown rotation of the Poincaré sphere, and a different unknown rotation every few minutes. To undo it you first have to **know** it, and you cannot learn it from the entangled photons without spending them. The trick behind Qunnect's compensator, and every polarization-stabilized link, is to measure the fiber with bright classical **probe light** of known polarization. This lesson answers the geometric question underneath: how many probes do you need, how do you turn their outputs into the rotation, and how good does the measurement have to be?

## The idea

Picture a globe that someone has turned while you weren't looking. You are told where London ended up. Is that enough to put the globe back? No: the globe could also have spun any amount about the London axis, and London would sit in exactly the same place. Every point *except* London moved, but you didn't look at any of them.

Now you are also told where Quito ended up. Quito is not on the London axis, so the spin about London is now pinned: only one turn of the globe sends both cities where they went. **Two points that aren't the same or opposite fix a rotation.** A third point is then a free consistency check.

That is the whole method. Send H-polarized light into the fiber and read the output polarization with a polarimeter: one point. Send D: a second point. Solve for the rotation, then apply its inverse at the far end. GothamQ characterized its fibers with three probes, H, D and R, and a polarimeter at the output.

## The formal version

**The fiber as a rotation of Stokes vectors.** From [2.2](02-02-polarization-as-a-qubit.md), a lossless fiber acts on Jones vectors as $U\in SU(2)$ (axis $\hat n$, angle $\theta$). On the [Stokes vector](../reference.md#stokes-vector) $\vec s$ (the Bloch vector, with H at $+z$, D at $+x$, L at $+y$, R at $-y$ on the [Poincaré sphere](../reference.md#poincare-sphere)) the same fiber acts as a $3\times3$ rotation matrix:

$$\vec s\,'=R\,\vec s,\qquad R_{ij}=\tfrac12\,\mathrm{tr}\big(\sigma_i\,U\sigma_jU^\dagger\big),\qquad R\in SO(3).$$

Here $\sigma_{1,2,3}=\sigma_x,\sigma_y,\sigma_z$ are the Pauli matrices. *In words: $U$ and $R$ are the same fiber written for amplitudes and for sphere points; $R$ has three unknown parameters, an axis (two) and an angle (one).*

**One probe is not enough.** A [probe state](../reference.md#probe-states) is classical light of known polarization $\vec s_1$; the polarimeter reports $\vec s_1{}'=R\vec s_1$. If $R_{\vec s_1{}'}(\varphi)$ is any rotation by $\varphi$ about the output direction, then $R_{\vec s_1{}'}(\varphi)\,R$ sends $\vec s_1$ to the same $\vec s_1{}'$. *In words: one probe pins two of the three parameters and leaves a one-parameter family of rotations, a spin about the output axis, that the data cannot see.* This is the same blind spot as 2.2's warning that perfect HH/VV correlations miss a rotation about the H axis.

**Two probes fix it.** Take two probes with $\vec s_2\neq\pm\vec s_1$ and build an orthonormal frame by [Gram–Schmidt](../../linalg-refresher/lessons/04-03-gram-schmidt-qr.md):

$$\hat e_1=\vec s_1,\qquad \hat e_2=\frac{\vec s_2-(\vec s_1\!\cdot\vec s_2)\,\vec s_1}{\lVert\vec s_2-(\vec s_1\!\cdot\vec s_2)\,\vec s_1\rVert},\qquad \hat e_3=\hat e_1\times\hat e_2.$$

Do the same with the outputs to get $\hat e_k{}'$. Rotations preserve dot products and cross products, so $R\hat e_k=\hat e_k{}'$ for all three, and with $M=[\hat e_1\,\hat e_2\,\hat e_3]$ (columns) and $M'$ likewise,

$$R=M'M^{T}.$$

*In words: rebuild the same rigid frame on both sides of the fiber, and the rotation is "output frame times inverse of input frame" (the inverse is the transpose because the frame is orthonormal).* Antipodal probes fail because $\hat e_2$ is $0/0$: H and V are the same axis. ([Rotation from two probes](../reference.md#rotation-from-two-probes); checked in Python on random rotations and random probe pairs.)

With H and D the frame is already orthonormal, and since $\hat z\times\hat x=\hat y$ the columns of $R$ (images of $\hat x,\hat y,\hat z$) are

$$R=\big[\ \vec s_D{}'\ \ \big|\ \ \vec s_H{}'\times\vec s_D{}'\ \ \big|\ \ \vec s_H{}'\ \big].$$

R sits at $-\hat y$, so the third probe must read $\vec s_R{}'=-\,\vec s_H{}'\times\vec s_D{}'$. Any mismatch is measurement error, or light that is no longer fully polarized.

**Fidelity straight from the probes.** A rotation has $\mathrm{tr}\,R=1+2\cos\theta$, and 2.2's [fidelity after a fiber rotation](../reference.md#fidelity-after-a-fiber-rotation) is $F=\cos^2(\theta/2)=(1+\cos\theta)/2$. Combine them, and use $\mathrm{tr}\,R=\sum_k\vec s_k\cdot R\,\vec s_k$ for the orthonormal triple H, D, R:

$$F=\frac{1+\mathrm{tr}\,R}{4}=\frac{1+\vec s_H\!\cdot\vec s_H{}'+\vec s_D\!\cdot\vec s_D{}'+\vec s_R\!\cdot\vec s_R{}'}{4}.$$

*In words: three classical probe readings tell you exactly what an uncorrected fiber would do to the entangled pair's fidelity, without a single photon pair being spent* ([probe-only fidelity readout](../reference.md#probe-only-fidelity-readout)).

**Inverting and noise.** The compensator applies $U^\dagger$, the rotation $R^{T}$: angle $\theta$ about $-\hat n$. If the estimated frame is off by a tilt of $\delta$ radians, the residual $R_{\text{est}}^{T}R$ is a rotation by $\delta$, and

$$F=\cos^2(\delta/2)\approx1-\frac{\delta^2}{4}.$$

*In words: estimation error costs fidelity quadratically, so small polarimeter errors are cheap.* (Monte Carlo: when both probe readings are misread by $\delta$ in random directions, the residual averages about $1.2\,\delta$.)

## Picture

![A Poincare sphere in perspective. Dashed black arrows show the two probe inputs: H in at the north pole and D in on the front of the equator. A green dotted line marks the fiber's rotation axis. Solid blue arrows show the outputs after the fiber turns the sphere: H out tilted toward the front left, D out toward the right. A red great circle runs perpendicular to H out and passes through D out. A side panel explains that two probes fix the rotation, while with only H out known, D out could sit anywhere on the red circle, because every turn about the H out axis fits the data.](assets/04-01-fig1.svg)

The red circle is the single-probe ambiguity made visible. D out is somewhere on it, guaranteed, because rotations keep H and D perpendicular; measuring D out picks the one point and kills the ambiguity.

## Worked examples

**Example 1 (Gram–Schmidt with non-orthogonal probes).** Probes: H, $\vec s_1=(0,0,1)$, and linear light at $22.5^\circ$, which doubles to $45^\circ$ on the sphere: $\vec s_2=(0.707,0,0.707)$. The polarimeter reads $\vec s_1{}'=(0,-1,0)$ and $\vec s_2{}'=(0.707,-0.707,0)$.

Input frame: $\vec s_1\cdot\vec s_2=0.707$, so $\vec s_2-0.707\,\vec s_1=(0.707,0,0)$ and $\hat e_2=(1,0,0)$; then $\hat e_3=\hat z\times\hat x=(0,1,0)$.

Output frame: $\vec s_1{}'\cdot\vec s_2{}'=0.707$, so $\vec s_2{}'-0.707\,\vec s_1{}'=(0.707,0,0)$, $\hat e_2{}'=(1,0,0)$, and $\hat e_3{}'=(0,-1,0)\times(1,0,0)=(0,0,1)$.

So $R$ sends $\hat z\to-\hat y$, $\hat x\to\hat x$, $\hat y\to\hat z$:

$$R=\begin{pmatrix}1&0&0\\0&0&-1\\0&1&0\end{pmatrix}.$$

That is a quarter-turn about $+\hat x$, the D axis: this fiber acts like 2.2's quarter-wave plate at $45^\circ$. Check: $\mathrm{tr}\,R=1$, so $\cos\theta=0$, $\theta=90^\circ$, and uncorrected $F=(1+1)/4=0.5$. The fix is $90^\circ$ about $-\hat x$.

**Example 2 (a compensator reads the pair's fidelity off classical light).** Suppose the fiber drifts by 0.25 rad ($14.3^\circ$) about the axis $\hat n=(1,2,2)/3$ since the last correction. Each probe's overlap is $\vec s_k\cdot\vec s_k{}'=\cos\theta+(1-\cos\theta)\,n_k^2$ along its axis, with $\cos 0.25=0.9689$, so the polarimeter reports

$$\vec s_H\!\cdot\vec s_H{}'=0.9827,\quad \vec s_D\!\cdot\vec s_D{}'=0.9724,\quad \vec s_R\!\cdot\vec s_R{}'=0.9827.$$

The sum is 2.9378, so $F=(1+2.9378)/4=0.9845$. A 99% threshold on this quantity needs the sum to reach $4(0.99)-1=2.96$, so a compensator applying a 99% trigger (GothamQ's setting) to it would fire and correct. Now look at the H probe alone: its state overlap is $(1+0.9827)/2=0.991$, comfortably "above 99%". A compensator that watched only H would declare the fiber fine while the pair sat at 0.984.

## Watch out

- You might think a probe whose polarization comes back unchanged proves the fiber is fine, but actually any rotation about that probe's own axis is invisible to it. A fiber that turns D into L returns H untouched.
- You might think a single probe's state fidelity is the pair's fidelity, but actually it overstates it: a probe sees only the part of the rotation perpendicular to its axis (Example 2: 0.991 for the H probe vs 0.984 for the pair). Score the fiber with $(1+\mathrm{tr}\,R)/4$.
- You might think any two distinct probes work equally well, but actually the frame degrades as $\vec s_2\to\pm\vec s_1$: Gram–Schmidt divides by $\sin$ of their angle on the sphere, amplifying polarimeter noise. H and D, $90^\circ$ apart on the sphere, are the robust choice.

## Business lens

The probe method is the engineering insight that turns a lab procedure into a product: **compensation never touches the quantum signal.** Probe light is bright, so a polarimeter reads it fast (Qunnect's compensator makes 10^4 measurements per second) instead of accumulating photon-pair statistics one coincidence at a time. It is also expendable, so the rotation is measured without consuming a single entangled pair. In GothamQ the probe is a 1324 nm laser within 1 nm of the photons, on the same fiber, time-multiplexed in through optical switches and shuttered by an AOM when not in use: same colour and same path, per 2.3's PMD warning.

The honest costs. The switches and compensator are in the photons' path: GothamQ's budget lists 0.22 dB for the injector and 1.54 dB for the compensator and switch, about 1.8 dB of loss bought for stability. Time spent probing is time not distributing, which is the duty-cycle question of [4.2](04-02-compensation-as-a-control-loop.md). And probes see the **fiber**, not the source: a clean probe readout says the channel is aligned, not that the delivered pairs are good. A customer quoting the APC's 99% should ask which fidelity that is.

## One-liner

> A fiber is an unknown rotation with three parameters; one classical probe pins two, a second non-antipodal probe pins the last, and three probes read the pair's fidelity off classical light as $(1+\mathrm{tr}\,R)/4$.

## Problems

**P1 (🟢)** You send H-polarized probe light through a fiber and the polarimeter reads H at the output. Give two different fiber rotations consistent with this reading, and name a second probe that tells them apart, with what the polarimeter would read for each.

**P2 (🟡)** A fiber sends the H probe to D and the D probe to L (Stokes vectors $\hat z\to\hat x$ and $\hat x\to\hat y$).

(a) What should the R probe read at the output?

(b) What is the fiber's rotation angle, and the fidelity to $|\Phi^+\rangle$ if a pair is sent uncorrected?

**P3 (🔴, practical)** Assume a perfect source and a perfect compensator actuator; the only error is in the estimated rotation, which leaves a residual rotation of angle $\delta$ about some axis.

(a) What is the fidelity for $\delta=0.05$ rad?

(b) What is the largest $\delta$ that keeps $F\ge0.999$?

(c) An engineer proposes dropping the classical probes and learning the rotation from the entangled photons' own coincidence counts. In three sentences or fewer, choose between the two designs and give your reason.

<details>
<summary>Solutions</summary>

**P1** **Accept:** the identity plus any nonzero rotation about the H/V axis, and any probe off that axis.

The identity, and a $90^\circ$ rotation about $+\hat z$ (the H axis). Both leave H at the north pole. Send D ($+\hat x$): the identity returns D, while the $90^\circ$ turn about $\hat z$ carries $+\hat x$ to $+\hat y$, so the polarimeter reads L. (A $180^\circ$ turn about $\hat z$ would read A.) This is the one-probe ambiguity: the H reading is blind to the spin about its own axis.

---

**P2** (a) Use the column formula. $\vec s_H{}'=\hat x$, $\vec s_D{}'=\hat y$, so the middle column is $\vec s_H{}'\times\vec s_D{}'=\hat x\times\hat y=\hat z$. R sits at $-\hat y$, so it goes to $-\hat z$: the polarimeter reads **V**.

(b) The matrix sends $\hat x\to\hat y$, $\hat y\to\hat z$, $\hat z\to\hat x$:

$$R=\begin{pmatrix}0&0&1\\1&0&0\\0&1&0\end{pmatrix},\qquad \mathrm{tr}\,R=0.$$

So $1+2\cos\theta=0$, $\cos\theta=-\tfrac12$, $\theta=120^\circ$ (about the axis $(1,1,1)/\sqrt3$, equal parts D, L and H). Uncorrected,

$$F=\cos^2(60^\circ)=0.25,$$

which matches $(1+\mathrm{tr}\,R)/4=0.25$. The pair is still maximally entangled, just in the wrong frame; the correction is $120^\circ$ about $-(1,1,1)/\sqrt3$.

---

**P3** (a) $F=\cos^2(0.025)=0.99938$, an infidelity of $6.2\times10^{-4}$, matching $\delta^2/4=6.25\times10^{-4}$.

(b) $\cos^2(\delta/2)\ge0.999$ gives

$$\delta\le2\arccos\sqrt{0.999}=0.0633\text{ rad}\approx3.6^\circ.$$

(Small-angle check: $2\sqrt{0.001}=0.0632$.)

(c) *(practical)*

**Accept:** either design, if the reason weighs measurement speed and the cost of spending pairs; the probe design is the strong answer.

**Must hit:**

- Pair statistics are slow and coordinated: each coincidence is one detected photon at each end, both ends must switch bases together, and pinning the rotation to a few hundredths of a radian needs many coincidences per setting while the fiber keeps drifting.
- Measuring the pairs in several bases to learn $R$ consumes them, so the payload pauses or shrinks.
- Credit to the alternative: it measures exactly the photons' wavelength and path and removes the probe hardware and its loss.

**Model answer:** "Keep the classical probes. Bright probe light gives a precise reading of the rotation in milliseconds without spending a single pair, while learning it from coincidences means sacrificing pairs and integrating long enough that the fiber can drift during the measurement. Pair statistics are still worth using as an independent check of the delivered fidelity, not as the steering signal."

</details>

## Flashback

**From Lesson [3.2](03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md) (Detectors, noise, and the brightness–fidelity tradeoff):** A continuous-wave pair source feeds a link with a coincidence window of $\tau=1.5$ ns. Assume all singles come from the source, the delivered state is Werner, and every window below catches essentially all true pairs. (a) What is the highest emitted pair rate $r$ that keeps $F\ge0.95$? (b) Two upgrades are on offer: lower-jitter detectors that let the window shrink to 0.75 ns, or detectors with 1.2 times the efficiency in each arm at the old window. For each, give the new maximum $r$ at $F\ge0.95$, and the factor by which the counted coincidence rate grows when the source runs at that maximum. Which upgrade buys more?

<details>
<summary>Solution</summary>

(a) Use $F=1-\tfrac34\cdot\tfrac{r\tau}{1+r\tau}$. Setting $F=0.95$ gives $\tfrac{r\tau}{1+r\tau}=\tfrac{0.05}{0.75}=\tfrac1{15}$, so $r\tau=\tfrac1{14}=0.0714$ (a CAR of 14). Then

$$r=\frac{0.0714}{1.5\times10^{-9}\ \text{s}}=4.76\times10^{7}\ \text{pairs/s}.$$

(b) **Narrower window:** the fidelity depends only on $r\tau$, so halving $\tau$ lets $r$ double, to $9.52\times10^{7}$ pairs/s. Counted coincidences scale as $\eta_1\eta_2\,r$, so they grow by a factor of 2.

**Higher efficiency:** $\text{CAR}=1/r\tau$ has no $\eta$ in it, so the ceiling stays at $4.76\times10^{7}$ pairs/s. Coincidences grow by $1.2^2=1.44$ at the same fidelity.

The jitter upgrade wins, 2 against 1.44: efficiency only collects more of the same pairs, while a narrower window lets the source run brighter without adding noise.

</details>

## Connections

- **Backward:** [2.2](02-02-polarization-as-a-qubit.md) made the fiber a rotation and gave $F=\cos^2(\theta/2)$; [2.3](02-03-drift-in-buried-fiber.md) showed the rotation drifts and depends on wavelength, which is why the probe must share the photons' colour and fiber.
- **Forward:** [4.2](04-02-compensation-as-a-control-loop.md) closes the loop: how often to probe, when to trigger, and what the cycle costs in uptime; [4.3](04-03-reading-the-gothamq-result.md) reads GothamQ's compensated vs uncompensated paths.
- **Sideways:** the two-vector frame is the look-at construction of [computer-graphics 1.4](../../computer-graphics/lessons/01-04-the-camera-and-view-transform.md), with the same failure mode when the two vectors line up. Solving for a rotation from noisy vector pairs is the attitude problem spacecraft star trackers solve, done in least squares with the SVD of [linalg-refresher 5.2](../../linalg-refresher/lessons/05-02-svd.md). Watching a feedback loop's sensor is [control-systems 1.1](../../control-systems/lessons/01-01-feedback-and-the-control-problem.md).
