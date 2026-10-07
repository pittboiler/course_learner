# Quantum Networking · Lesson 2.2: Polarization as a qubit

> ⏱ ~15 min · Module 2: Photons in real fiber · Builds on: [`waves-optics` 4.3](../../waves-optics/lessons/04-03-polarization.md), [`quantum-computing` 1.1](../../quantum-computing/lessons/01-01-the-qubit-and-the-bloch-sphere.md), [`quantum-computing` 1.2](../../quantum-computing/lessons/01-02-single-qubit-gates.md), [1.3](01-03-fidelity-and-rate.md) · Unlocks: [2.3](02-03-drift-in-buried-fiber.md), [4.1](04-01-learning-the-fibers-rotation.md)

## Why this matters

Qunnect's source emits pairs in $|\Phi^+\rangle=(|HH\rangle+|VV\rangle)/\sqrt2$, where H and V are horizontal and vertical polarization. The 1324 nm photon then crosses 34 km of buried Brooklyn and Queens fiber, and the fiber turns its polarization by some angle nobody chose. This lesson gives you the one picture that makes everything in Modules 2 and 4 legible: **polarization is a qubit, the Poincaré sphere is its Bloch sphere, and a fiber is a rotation of that sphere.** It also fixes the sphere's orientation for the rest of the course.

## The idea

A photon's polarization is a two-level system: any polarization is a superposition of H and V. So everything you know about qubits applies. In particular, every pure polarization is a point on a sphere, and every lossless optical element (a waveplate, a twisted fiber, a stressed splice) is a **rigid rotation** of that sphere. Nothing is lost and nothing is added: a point moves to another point.

Now send one photon of an entangled pair through such an element. The pair is still perfectly entangled, because a rotation on one side can't create or destroy entanglement. But it is entangled **in a different way**. Alice measures H and expects Bob to see H; Bob now sees some tilted mixture. The correlations the customer was promised are gone, yet the entanglement is fully there, waiting for someone to undo the rotation. That gap between "lost" and "misaligned" is the business case for polarization compensation.

## The formal version

**Jones vector.** A pure polarization state is

$$|\psi\rangle = a\,|H\rangle + b\,|V\rangle,\quad |a|^2+|b|^2=1,$$

with $a, b$ complex amplitudes; an overall phase is unobservable. *In words: two complex numbers, one normalization, one irrelevant phase, so two real parameters, a point on a sphere.* The [Jones vector](../reference.md#jones-vector) is the column $(a, b)^T$. The course's six named states:

| State | Jones vector | Sphere point |
|---|---|---|
| H | $(1,0)$ | north pole, $+z$ |
| V | $(0,1)$ | south pole, $-z$ |
| D | $(1,1)/\sqrt2$ | $+x$ |
| A | $(1,-1)/\sqrt2$ | $-x$ |
| R | $(1,-i)/\sqrt2$ | $-y$ |
| L | $(1,i)/\sqrt2$ | $+y$ |

**Course convention (fixed here, used everywhere after).** The [Poincaré sphere](../reference.md#poincare-sphere) *is* the Bloch sphere of [`quantum-computing` 1.1](../../quantum-computing/lessons/01-01-the-qubit-and-the-bloch-sphere.md) with $|0\rangle=|H\rangle$, $|1\rangle=|V\rangle$. So H sits on top, D on $+x$, and, because $|{+i}\rangle=(|0\rangle+i|1\rangle)/\sqrt2$ is on $+y$, **L sits on $+y$ and R on $-y$.** The handedness labels follow the Jones vectors above, not the other way round.

The point itself is the [Stokes vector](../reference.md#stokes-vector) $\vec s=(s_x,s_y,s_z)$, the Bloch vector:

$$s_z = P_H - P_V,\quad s_x = P_D - P_A,\quad s_y = P_L - P_R,$$

where $P_H$ is the probability that a polarizer set to H passes the photon, and so on. *In words: each coordinate is how much more the photon favors one end of an axis than the other, measured with a polarizer.* Partially polarized light has $|\vec s|<1$, a point inside the ball, the density matrix of [`quantum-computing` 2.2](../../quantum-computing/lessons/02-02-density-matrices-and-the-partial-trace.md).

Linear polarization at real-space angle $t$ from horizontal, $\cos t\,|H\rangle+\sin t\,|V\rangle$, lands at $\vec s=(\sin 2t,\,0,\,\cos 2t)$: **the linear states fill the $x$–$z$ great circle, and lab angles double on the sphere.** Optics texts usually lay the sphere on its side with H on the equator; it is the same sphere, turned.

**Waveplates as rotations.** A retarder delays the component along one axis by phase $\delta$ relative to the perpendicular one. With its axis at lab angle $t$, it is

$$U = \exp\!\left(-\tfrac{i\delta}{2}\,\hat n\cdot\vec\sigma\right),$$

$$\hat n=(\sin 2t,\,0,\,\cos 2t),$$

with $\vec\sigma$ the Pauli matrices: a rotation by $\delta$ about the sphere point of the plate's own axis ([waveplates as rotations](../reference.md#waveplates-as-rotations)). A half-wave plate (HWP) has $\delta=\pi$, a quarter-wave plate (QWP) $\delta=\pi/2$. *In words: a waveplate spins the sphere about the polarization it leaves alone.* A lossless fiber of any length is a product of such pieces, so its Jones matrix is $e^{i\alpha}U$ with $U\in SU(2)$: **a fiber is one rotation, axis $\hat n$ and angle $\theta$**, by the "every gate is a rotation" result of [`quantum-computing` 1.2](../../quantum-computing/lessons/01-02-single-qubit-gates.md).

**What a rotation does to a pair.** Rotate Bob's photon of $|\Phi^+\rangle$:

$$|\psi_U\rangle=(I\otimes U)|\Phi^+\rangle.$$

Its fidelity to the target, $F=|\langle\Phi^+|\psi_U\rangle|^2$ ([fidelity to a Bell state](../reference.md#fidelity-to-a-bell-state)), follows from writing $|\Phi^+\rangle=\tfrac1{\sqrt2}\sum_i|ii\rangle$:

$$\langle\Phi^+|(I\otimes U)|\Phi^+\rangle=\tfrac12\sum_{i,j}\langle i|j\rangle\langle i|U|j\rangle=\tfrac12\,\mathrm{tr}\,U.$$

Because the Pauli matrices are traceless, $\mathrm{tr}\,e^{-i\theta\hat n\cdot\vec\sigma/2}=2\cos(\theta/2)$, so

$$F=\cos^2(\theta/2)\quad\text{for any axis }\hat n.$$

*In words: only the rotation's angle matters, never its axis, and the fiber's global phase drops out* (see [fidelity after a fiber rotation](../reference.md#fidelity-after-a-fiber-rotation)). Bob's reduced state is still $I/2$, so $|\psi_U\rangle$ is still maximally entangled. Two more facts, both checked numerically:

- $(I\otimes U)|\Phi^+\rangle=(U^T\otimes I)|\Phi^+\rangle$. A rotation at Bob's end is equivalent to one at Alice's, so compensation can sit at either end.
- For a [Werner state](../reference.md#werner-state) $\rho=p\,|\Phi^+\rangle\langle\Phi^+|+(1-p)I/4$, the identity part is rotation-proof: $F=p\cos^2(\theta/2)+(1-p)/4$.

## Picture

![A Poincare sphere drawn in perspective. H is at the north pole and V at the south pole. D is on the plus x axis at the front right of the equator, A on minus x at the back left, R on minus y at the front left, and L on plus y at the back right. A green great circle through H, D, V and A marks the linear polarizations. A blue dashed line through the center along the D direction marks the axis of a quarter-wave plate at 45 degrees, and a red arc with an arrow carries the H point a quarter-turn down to R. A side panel lists the course convention: ket 0 is H, the Stokes vector is the Bloch vector, D is on plus x, R is on minus y, L is on plus y, linear states lie on the x-z circle with lab angle t at 2t, orthogonal states are antipodal.](assets/02-02-fig1.svg)

## Worked examples

**Example 1 (a QWP makes circular light).** A QWP with its axis at $t=45^\circ$ has $\hat n=(\sin90^\circ,0,\cos90^\circ)=(1,0,0)$, the D axis, and $\delta=\pi/2$:

$$U=\cos\tfrac{\pi}{4}\,I-i\sin\tfrac{\pi}{4}\,\sigma_x=\frac{1}{\sqrt2}\begin{pmatrix}1&-i\\-i&1\end{pmatrix}.$$

On H: $U(1,0)^T=(1,-i)^T/\sqrt2=|R\rangle$. On the sphere: a quarter-turn about $+x$ carries the north pole to $-y$, which is R in our convention. The same plate sends V to $(-i,1)^T/\sqrt2=-i\,(1,i)^T/\sqrt2$, which is L up to a global phase, at $+y$. Antipodal in, antipodal out: rotations preserve orthogonality.

**Example 2 (what a 99% trigger allows).** In GothamQ, the compensator checks the fiber against a stored reference about every 20 s and only corrects when the measured fidelity falls below a 99% trigger threshold. Read that threshold as a Bell-fidelity budget: the largest unnoticed rotation obeys

$$\cos^2(\theta/2)=0.99\ \Rightarrow\ \theta=2\arccos\sqrt{0.99}=11.5^\circ.$$

Stack that worst case on a source that is itself a Werner state at $F=0.95$ (the long run's source-limited level): $p=(4\cdot0.95-1)/3=0.933$, so

$$F=0.933\times0.99+\frac{1-0.933}{4}=0.941.$$

About one point of fidelity is the price of tolerating rotations up to the threshold, the same scale as the gap between the 0.95 source limit and the 0.937 lower bound the 15-day run reported. That is a consistency check, not a diagnosis.

## Watch out

- You might think a pair at $F=0.75$ is "barely entangled," since that is below the [CHSH threshold for Werner states](../reference.md#chsh-threshold-for-werner-states), 0.780. But if the loss of fidelity came from a rotation, the pair is still **maximally** entangled, just in the wrong frame; applying $U^\dagger$ restores it. Fidelity to $|\Phi^+\rangle$ lumps noise and misalignment together; only noise is irreversible.
- You might think a $90^\circ$ turn of a polarizer is $90^\circ$ on the sphere. Lab angles **double**: H and V are $90^\circ$ apart on the bench and $180^\circ$ apart on the sphere, so a $10^\circ$ physical twist of linear light is a $20^\circ$ rotation.
- You might think perfect HH/VV correlations prove the channel is fine. A rotation about the $z$ axis only adds a phase between H and V: $|HH\rangle+e^{i\theta}|VV\rangle$ keeps every H/V coincidence perfect and still has $F=\cos^2(\theta/2)$. You need a second basis ([3.3](03-03-proving-a-link-is-entangled.md)).

## Business lens

Polarization is the easiest qubit to make and read: passive, cheap optics. GothamQ's measurement station was a half-waveplate and a polarizing beam splitter. It is also the qubit that the channel attacks most directly, because every buried fiber applies an unknown rotation that wanders ([2.3](02-03-drift-in-buried-fiber.md)). Qunnect's bet is to keep the easy encoding and build a product, QU-APC, that cancels its weakness. DARPA's August 2026 contract to advance Carina's next-generation polarization compensation is a bet on the same box.

What a customer should ask: "What does an uncorrected twist cost me?" The answer is $\cos^2(\theta/2)$: 3% at $20^\circ$, a quarter of the fidelity at $60^\circ$. The honest corollary is that compensation is mission-critical, not a feature. If it stalls, the fidelity drops while the source and the H/V counts look healthy. A time-bin competitor will pitch exactly that fragility; the reply is uptime data, not physics.

## One-liner

> Polarization is a qubit, the fiber is a rotation of its sphere, and a rotation by $\theta$ on one photon of $|\Phi^+\rangle$ leaves the pair fully entangled but at fidelity $\cos^2(\theta/2)$ until someone turns it back.

## Problems

**P1 (🟢)** A half-wave plate has its axis at $22.5^\circ$ from horizontal. (a) Give the output Jones vector and sphere point when the input is H. (b) The same for input V. (c) Name the rotation (axis and angle) on the Poincaré sphere.

**P2 (🟡)** A deployed fiber rotates the travelling photon by $20^\circ$ about an axis you don't know. (a) If the source emits a perfect $|\Phi^+\rangle$, what is the delivered fidelity? (b) If the source is instead a Werner state with $F=0.90$, what is it? Assume the fiber adds no noise.

**P3 (🔴)** (a) How large a one-photon rotation brings a perfect $|\Phi^+\rangle$ down to the Werner CHSH threshold $F=0.780$? (b) *(practical)* A customer's engineer reports: "Our fidelity is 0.75 with a near-perfect source and no added noise on the fiber. That's below the CHSH line, so the entanglement is gone." Reply in three sentences or fewer.

<details>
<summary>Solutions</summary>

**P1** (a) Axis at $t=22.5^\circ$ gives $\hat n=(\sin45^\circ,0,\cos45^\circ)$, halfway between H and D, and the HWP matrix is $\begin{pmatrix}\cos2t&\sin2t\\\sin2t&-\cos2t\end{pmatrix}$ up to global phase. With $\cos45^\circ=\sin45^\circ=1/\sqrt2$:

$$\frac{1}{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}\begin{pmatrix}1\\0\end{pmatrix}=\frac{1}{\sqrt2}\begin{pmatrix}1\\1\end{pmatrix}=|D\rangle,$$

sphere point $+x$.

(b) On V: $(1,-1)^T/\sqrt2=|A\rangle$, sphere point $-x$.

(c) A half-turn ($180^\circ$) about the axis $(1,0,1)/\sqrt2$. A half-turn swaps the two points symmetric about the axis, so $+z\to+x$ and $-z\to-x$. In the lab this is the familiar fact that an HWP at $22.5^\circ$ turns linear polarization by $45^\circ$.

---

**P2** (a) The axis doesn't matter: $F=\cos^2(10^\circ)=0.970$.

(b) $p=(4\cdot0.90-1)/3=0.867$. Only the entangled part is rotated:

$$F=0.867\times0.970+\frac{1-0.867}{4}=0.841+0.033=0.874.$$

That is a 2.6-point loss from the source's 0.90, slightly less than the 3.0 points a perfect source loses, because the white-noise part is unaffected.

---

**P3** (a) Set $\cos^2(\theta/2)=0.780$:

$$\theta=2\arccos\sqrt{0.780}=2\times27.97^\circ=55.9^\circ.$$

(b) *(practical)*

**Accept:** any reply that says the pair is still maximally entangled, that the 0.780 threshold assumes noise (a Werner state), and that undoing the rotation restores the fidelity.

**Must hit:**

- A pure rotation can't reduce entanglement; $F=0.75$ means a rotation of $60^\circ$ (since $\cos^2 30^\circ=0.75$), not damage.
- The CHSH threshold 0.780 is for Werner (white-noise) states, not for a rotated pure state.
- Fix: compensate (apply the inverse rotation at either end), and fidelity returns to the source level.

**Model answer:** "Nothing is broken: with no added noise, a 0.75 fidelity means the fiber has rotated your photon by about 60°, and the pair is still maximally entangled, just in the wrong frame. The 0.78 CHSH line applies to noisy Werner states, not to a rotated pure state. Run the compensator, or apply the inverse rotation at either end, and you're back at the source's fidelity."

</details>

## Flashback

**From Lesson [1.4](01-04-the-loss-wall.md) (The loss wall):** A competitor announces that upgrading its detectors from 85% to 98% efficiency "doubles our repeaterless O-band reach from 50 km to 100 km at the same pair rate." Fiber is 0.33 dB/km. (a) How many dB does the detector upgrade buy, and how many km of fiber is that? (b) How many dB does the extra 50 km cost, and by what factor in transmission? (c) *(practical)* In two sentences or fewer, give your verdict on the claim.

<details>
<summary>Solution</summary>

(a) The rate scales with detector efficiency, so the gain is a factor $0.98/0.85=1.153$, or $10\log_{10}1.153=0.62$ dB. At 0.33 dB/km that buys $0.62/0.33=1.9$ km.

(b) $0.33\times50=16.5$ dB, a factor $10^{1.65}=44.7$ in transmission.

(c)

**Accept:** any verdict that the claim is false because a 15% efficiency gain recovers well under 1 dB (about 2 km) while the extra 50 km costs 16.5 dB (a factor of about 45), and that only an active middle node, not a better detector, changes the distance scaling.

**Must hit:**

- The two numbers side by side: about 0.6 dB gained versus 16.5 dB lost.
- Better hardware moves a link toward the loss-set ceiling; it does not move the ceiling (repeaters or relays do).

**Model answer:** The upgrade is worth about 0.6 dB, roughly 2 km of O-band fiber, while the extra 50 km costs 16.5 dB, a 45-fold drop in transmission, so the same rate at 100 km is off by a factor of about 39. Detector gains cannot outrun exponential fiber loss; doubling reach needs a repeater or a relay in the middle.

</details>

## Connections

- **Backward:** the Bloch sphere and "orthogonal = antipodal" are [`quantum-computing` 1.1](../../quantum-computing/lessons/01-01-the-qubit-and-the-bloch-sphere.md); "every gate is a rotation" is [`quantum-computing` 1.2](../../quantum-computing/lessons/01-02-single-qubit-gates.md); the waveplate is the birefringence taste of [`waves-optics` 4.3](../../waves-optics/lessons/04-03-polarization.md) made quantitative. Polarization Bell states and $E(a,b)$ are owned by [`photonics-quantum-optics` 4.4](../../photonics-quantum-optics/lessons/04-04-entangled-photons-bell-tests.md); Werner states and the 0.780 threshold by [1.3](01-03-fidelity-and-rate.md).
- **Forward:** [2.3](02-03-drift-in-buried-fiber.md) makes the fiber's rotation random, time-varying and wavelength-dependent. [3.3](03-03-proving-a-link-is-entangled.md) uses the "second basis" point to bound fidelity. [4.1](04-01-learning-the-fibers-rotation.md) asks how many probe states it takes to learn $U$ so it can be undone.
- **Sideways:** the map from $SU(2)$ to sphere rotations, with its half-angle $\theta/2$, is the same one that turns a spin-1/2 in a magnetic field; a fiber is a Larmor precession you didn't ask for.
