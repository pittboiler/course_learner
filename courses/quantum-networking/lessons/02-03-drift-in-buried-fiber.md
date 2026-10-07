# Quantum Networking · Lesson 2.3: Drift in buried fiber

> ⏱ ~15 min · Module 2: Photons in real fiber · Builds on: [2.2 Polarization as a qubit](02-02-polarization-as-a-qubit.md) · Unlocks: [4.1 Learning the fiber's rotation](04-01-learning-the-fibers-rotation.md), [4.2 Compensation as a control loop](04-02-compensation-as-a-control-loop.md)

## Why this matters

In [2.2](02-02-polarization-as-a-qubit.md) a fiber was one fixed rotation $U$ on the Poincaré sphere: measure it once, undo it, done. Real buried fiber breaks that picture in two ways. The rotation **changes with time**, slowly with temperature and suddenly when something moves the cable. It also **changes with wavelength**, so a photon with any spectral width gets rotated by many slightly different amounts at once. Those two facts are why polarization entanglement over city fiber stayed a lab demo for years. They also explain the two design choices at the centre of Qunnect's product: a narrowband source and automatic compensation done at the photon's own wavelength.

## The idea

Think of the fiber as a 34 km stack of thin, randomly oriented waveplates. Each centimetre has a little [birefringence](../reference.md#birefringence): the core is not perfectly round, the glass is squeezed by cabling and bends, and temperature changes all of that. Each slice rotates the polarization a tiny amount about its own random axis. The output is the product of millions of these small rotations, so it is effectively a **random point in SU(2)**. Nobody can predict it from a drawing of the route.

Now let the world move. A few degrees of soil temperature, a truck over a manhole, a technician re-routing a patch panel: each one nudges some of the slices, and the product rotation **wanders** across the sphere. Mostly it wanders slowly. Sometimes it **jumps**, because a connector or a loose cable section moved at once. Qunnect's GothamQ team saw both on their uncompensated path in New York: slow drifts plus discrete jumps.

The second effect is subtler. Each slice delays its two polarization eigenmodes by slightly different amounts, so the phase between them depends on frequency. The net rotation therefore depends on wavelength: this is **polarization mode dispersion (PMD)**. Fix the rotation perfectly at 1324.00 nm and a component at 1325 nm is still rotated. A photon is a little spread of frequencies, and each colour lands at a different point on the sphere. Averaging over them blurs the polarization, and with it the entanglement.

So there are two defences. Make the photon **narrow** in wavelength, so it samples almost no spread. And **re-measure the fiber often, at the photon's wavelength**, so the time drift never runs far.

## The formal version

**Fidelity after a rotation (from 2.2).** If one photon of $|\Phi^+\rangle=(|HH\rangle+|VV\rangle)/\sqrt2$ passes a lossless fiber that is a rotation by angle $\theta$ about any axis, then

$$F=\big|\langle\Phi^+|(I\otimes U)|\Phi^+\rangle\big|^2=\cos^2(\theta/2).$$

*In words: what costs fidelity is the residual rotation angle, whatever its axis.* A useful corollary: $F\ge0.99$ requires $\theta\le 2\arccos\sqrt{0.99}=0.200$ rad, about 11.5°. That is the pointing budget a compensator has to hit ([fidelity to a Bell state](../reference.md#fidelity-to-a-bell-state)).

**PMD model.** After compensating perfectly at the centre wavelength $\lambda_0$, assume the residual rotation is about a fixed axis with angle growing linearly in detuning:

$$\theta(\lambda)=\kappa\,(\lambda-\lambda_0).$$

Here $\kappa$ (rad/nm) is the fiber's rotation per nanometre. *In words: one nanometre away from where you calibrated, the polarization is off by $\kappa$ radians.* This is first-order PMD. The fixed axis is the fiber's "principal state" and $\kappa$ is set by its **differential group delay** (DGD) $\tau$, the arrival-time difference between the two eigenmodes. Since $\theta=\tau\,\Delta\omega$ and $\Delta\omega=2\pi c\,\Delta\lambda/\lambda^2$,

$$\kappa=\frac{2\pi c\,\tau}{\lambda^2}.$$

At 1324 nm, $\tau=1$ ps gives $\kappa=1.07$ rad/nm. Because the slices have random axes, the DGD adds like a random walk: $\tau\propto\sqrt{L}$, so four times the length doubles it.

**Bandwidth-averaged fidelity.** Let the travelling photon's wavelength be Gaussian with standard deviation $\sigma_\lambda$. When the photon's frequency is not measured, the delivered polarization state is a mixture of $(I\otimes U_\lambda)|\Phi^+\rangle$ weighted by the spectrum, so its fidelity is the weighted average of $\cos^2(\theta/2)=\tfrac12(1+\cos\theta)$. Using $\langle\cos(\kappa x)\rangle=e^{-\kappa^2\sigma_\lambda^2/2}$ for Gaussian $x$,

$$\bar F=\tfrac12\Big(1+e^{-\kappa^2\sigma_\lambda^2/2}\Big)\approx1-\frac{\kappa^2\sigma_\lambda^2}{4}\quad(\kappa\sigma_\lambda\ll1).$$

*In words: the infidelity grows as the square of (rotation per nm) times (photon width in nm), and a very broad photon falls to $\tfrac12$, a polarization-scrambled pair.* (Python check: a Monte Carlo over the actual density matrix agrees to three decimals.) This is the [polarization mode dispersion](../reference.md#polarization-mode-dispersion) penalty.

**Linewidth in nanometres.** Sources quote linewidth in frequency; the fiber cares about wavelength:

$$\Delta\lambda=\frac{\lambda^2\,\Delta\nu}{c}.$$

*In words: at 1324 nm, every GHz of linewidth is 5.85 pm of wavelength* ([linewidth to wavelength width](../reference.md#linewidth-to-wavelength-width)).

**Drift in time.** Let $\kappa$ and the centre rotation $U_{\lambda_0}(t)$ both depend on time $t$. Then a correction that was perfect at $t_0$ leaves a residual $U_{\lambda_0}(t)U_{\lambda_0}(t_0)^{-1}$ whose angle grows until the next correction. [Polarization drift](../reference.md#polarization-drift) is that growth; [4.2](04-02-compensation-as-a-control-loop.md) models it as a random walk and sizes the correction cadence.

## Picture

![Average fidelity versus the spectral width of the travelling photon, from 0 to 3 nanometres, for two fibers. A solid blue curve for 0.5 radians per nanometre falls slowly; a dashed black curve for 1.07 radians per nanometre, which is 1 picosecond of differential group delay, falls fast and crosses the CHSH threshold of 0.780 near 1 nanometre, reaching 0.782 at exactly 1 nanometre. A green dot at the far left marks a narrowband vapor photon about 0.0025 nanometres wide, at fidelity essentially 1.](assets/02-03-fig1.svg)

Read the green dot first. A sub-GHz photon sits at the very left edge, where both curves are flat at 1. A photon filtered to about 1 nm, typical for a broadband crystal source, sits where a 1 ps fiber has already dragged it down to the [CHSH threshold](../reference.md#chsh-threshold-for-werner-states).

## Worked examples

**Example 1 (the model, mechanically).** Take $\kappa=0.5$ rad/nm. For $\sigma_\lambda=1$ nm, the exponent is $\kappa^2\sigma_\lambda^2/2=0.125$, and $e^{-0.125}=0.882$, so

$$\bar F=\tfrac12(1+0.882)=0.941.$$

The small-angle estimate $1-\kappa^2\sigma_\lambda^2/4=1-0.0625=0.938$ is close. Triple the width to $\sigma_\lambda=3$ nm: the exponent is $1.125$, $e^{-1.125}=0.325$, and $\bar F=0.662$, below the 0.780 CHSH threshold from [1.3](01-03-fidelity-and-rate.md). Same fiber, same compensation, three times the bandwidth, and the link can no longer certify entanglement.

**Example 2 (why the rubidium photon is narrow on purpose).** Qunnect's GothamQ source produces photons with a linewidth below 1 GHz. Treat 1 GHz as a full width at half maximum:

$$\Delta\lambda=\frac{(1324\times10^{-9}\,\text{m})^2(10^9\,\text{Hz})}{3.00\times10^{8}\,\text{m/s}}=5.85\times10^{-12}\,\text{m}=0.00585\text{ nm}.$$

Dividing the FWHM by $2\sqrt{2\ln2}=2.355$ gives $\sigma_\lambda=0.00248$ nm. Now take a harsh fiber with $\tau=1$ ps, so $\kappa=1.07$ rad/nm:

$$1-\bar F\approx\frac{(1.07)^2(0.00248)^2}{4}=1.8\times10^{-6}.$$

Bandwidth costs essentially nothing. A crystal source filtered to $\sigma_\lambda=1$ nm on the same fiber gets $\bar F=0.782$, barely above the CHSH line. Filtering it to 0.3 nm recovers $\bar F=0.975$, but every nanometre filtered away is pairs thrown away. That matches GothamQ's conclusion from its wavelength-swept measurements: high-fidelity polarization distribution over that fiber needs narrowband photons.

**Polarization vs time-bin.** The other standard fix is to stop encoding in polarization. A [time-bin](../reference.md#time-bin-encoding) qubit is a photon in a superposition of an early and a late pulse. Birefringence barely touches the relative phase of two pulses a nanosecond apart, so the encoding shrugs off drift.

| | Polarization | Time-bin |
|---|---|---|
| Make and measure | Passive optics: waveplates, polarizing beam splitters | Unbalanced interferometers, stabilised to a fraction of a wavelength, at both ends |
| Fiber drift | Needs active compensation | Largely immune to polarization drift (interferometers still drift) |
| Storage | Dual-rail memories store each polarization separately (Qunnect's memory does this) | Many memories need conversion to another encoding first |
| Hard part moves to | The fiber (compensator) | The end stations (interferometers) |

## Watch out

- You might think calibrating at the photon's centre wavelength fixes the whole photon, but actually every other colour in it is still rotated by $\kappa(\lambda-\lambda_0)$. Compensation fixes one point of the spectrum; bandwidth decides how much of the photon lives near that point.
- You might think the probe laser can sit anywhere in the O-band, but actually a probe offset by $\delta\lambda$ from the photon steers the compensator to the wrong rotation by $\kappa\,\delta\lambda$. For $F\ge0.99$ that needs $\kappa\,\delta\lambda\le0.200$ rad, which is why GothamQ's probe is the same kind of 1324 nm light, on the same fiber.
- You might think buried fiber is stable enough to calibrate once, but actually GothamQ's uncompensated path drifted and jumped over 15 days. Buried fiber is slower than aerial fiber, which swings in wind and sun, but nothing is static.

## Business lens

Drift is why "we distributed entanglement over city fiber" used to come with an asterisk: a physicist re-aligned it before the run. A telco will not send a technician to twist waveplates every hour, so the product is the word **automatic**. Qunnect's answer has two halves, and a sharp reader should see both. The rubidium source is narrowband by physics (below 1 GHz), so PMD barely bites. Its APC module then tracks the slow drift and the jumps with probe light at the photon's wavelength. A crystal-source competitor can match the fidelity only by filtering hard and giving up rate, the tradeoff in Example 2. A time-bin competitor avoids compensation but moves the stabilization burden into interferometers at every node, and has a harder time with memories.

The honest limit: compensation is periodic. A jump that lands between checks costs fidelity until the next cycle catches it, and aerial or construction-heavy routes will jump more often. When a customer asks "what happens when the cable moves?", the answer is a cadence and a recovery time, not "nothing".

## One-liner

> Buried fiber is a random rotation that wanders in time and smears across wavelength, so polarization entanglement survives only with narrowband photons and automatic compensation at the photon's own colour.

## Problems

**P1 (🟢)** A source quotes a 500 MHz linewidth for its 1324 nm photon. What is that linewidth in nanometres (and picometres)?

**P2 (🟡)** Use the lesson's first-order PMD model: residual rotation about a fixed axis, $\theta=\kappa(\lambda-\lambda_0)$, Gaussian spectrum, compensation perfect at $\lambda_0$, no other noise. A fiber has $\kappa=0.8$ rad/nm.

(a) What is $\bar F$ for a travelling photon with $\sigma_\lambda=0.5$ nm?

(b) What is the largest $\sigma_\lambda$ that keeps $\bar F\ge0.99$?

**P3 (🔴, practical)** A competitor using time-bin encoding tells a prospective customer: "We need no polarization compensation, so our system is simpler." Reply in three sentences or fewer: what is true in the claim, and what it costs them.

<details>
<summary>Solutions</summary>

**P1** Use $\Delta\lambda=\lambda^2\Delta\nu/c$:

$$\Delta\lambda=\frac{(1324\times10^{-9})^2\,(5\times10^{8})}{2.998\times10^{8}}\ \text{m}=2.92\times10^{-12}\ \text{m}.$$

That is 0.00292 nm, or 2.92 pm: half the 5.85 pm of a 1 GHz line, as it must be since $\Delta\lambda\propto\Delta\nu$.

---

**P2** (a) The exponent is $\kappa^2\sigma_\lambda^2/2=(0.8)^2(0.5)^2/2=0.08$, and $e^{-0.08}=0.923$. So

$$\bar F=\tfrac12(1+0.923)=0.962.$$

(b) Require $\tfrac12(1+e^{-\kappa^2\sigma_\lambda^2/2})\ge0.99$, so $e^{-\kappa^2\sigma_\lambda^2/2}\ge0.98$, so $\kappa^2\sigma_\lambda^2/2\le-\ln0.98=0.0202$. Then

$$\sigma_\lambda\le\frac{\sqrt{2\times0.0202}}{0.8}=\frac{0.201}{0.8}=0.251\text{ nm}.$$

Halving the width from 0.5 nm to 0.25 nm cuts the infidelity by about four, from 0.038 to 0.010, because it scales as $\sigma_\lambda^2$.

---

**P3** *(practical)*

**Accept:** any reply that concedes time-bin's real robustness to polarization drift and names at least one concrete cost.

**Must hit:**

- True: time-bin qubits are largely insensitive to fiber birefringence, so they need no polarization compensator.
- Cost: every node needs unbalanced interferometers stabilised to a fraction of a wavelength, so the stabilization problem moves from the fiber to the end stations.
- Cost (any one more): harder interfacing with memories that store polarization (dual-rail), or extra optics and loss at each end.

**Model answer:** "They're right that time-bin photons don't care about polarization drift, so they skip the compensator. The stabilization doesn't disappear, though: it moves into precision interferometers at every node, which drift too and must be locked. It also makes interfacing with polarization-storing memories harder, so the real comparison is one automated compensator per link against locked interferometers at every endpoint."

</details>

## Flashback

**From Lesson [2.1](02-01-loss-and-the-telecom-bands.md) (Loss and the telecom bands):** A receiver needs at least 10% of the travelling photons to arrive. The link's fixed hardware is four connectors at 0.25 dB each and a 1.6 dB polarization compensator. (a) With O-band fiber at 0.34 dB/km, what is the longest span that meets the requirement? (b) If you instead sent the 795 nm photon, through fiber at about 2.5 dB/km with the same hardware, how far could it go?

<details>
<summary>Solution</summary>

10% transmission is a 10 dB budget, since $\eta=10^{-10/10}=0.10$. The hardware takes $4\times0.25+1.6=2.6$ dB, leaving $10-2.6=7.4$ dB for fiber.

(a) $L=7.4/0.34=21.8$ km.

(b) $L=7.4/2.5=2.96$ km, about 3 km. Same budget, about 7.4 times less reach: the 795 nm photon is for the atoms next door, never for the span.

</details>

## Connections

- **Backward:** [2.2](02-02-polarization-as-a-qubit.md) gave the fixed rotation and $F=\cos^2(\theta/2)$; this lesson lets the rotation vary with time and wavelength. The birefringence mechanism is the taste from [waves-optics 4.3](../../waves-optics/lessons/04-03-polarization.md).
- **Forward:** [4.1](04-01-learning-the-fibers-rotation.md) shows how probe states measure the rotation at one instant; [4.2](04-02-compensation-as-a-control-loop.md) turns the drift into a control loop with a cadence; [3.1](03-01-rubidium-vapor-vs-crystal-sources.md) compares the narrowband vapor source with broadband crystal sources.
- **Sideways:** linewidth and bandwidth are Fourier partners, the same relation behind coherence time in [photonics 2.1](../../photonics-quantum-optics/lessons/02-01-temporal-coherence-g1.md). The DGD random walk ($\tau\propto\sqrt L$) is the same $\sqrt N$ that sets diffusion and shot noise.
