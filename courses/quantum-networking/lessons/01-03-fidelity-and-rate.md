# Quantum Networking · Lesson 1.3: Fidelity and rate

> ⏱ ~15 min · Module 1: The map · Builds on: [1.2 The stack in one picture](01-02-the-stack-in-one-picture.md), [`quantum-computing` 2.2](../../quantum-computing/lessons/02-02-density-matrices-and-the-partial-trace.md), [2.4](../../quantum-computing/lessons/02-04-quantum-teleportation.md), [2.6](../../quantum-computing/lessons/02-06-the-chsh-game-and-device-independence.md) · Unlocks: [3.2](03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md), [3.3](03-03-proving-a-link-is-entangled.md), [5.3](05-03-bell-state-measurement-and-swapping.md)

## Why this matters

Every entanglement-distribution claim reduces to two numbers: **how good** the delivered pairs are (fidelity) and **how many** arrive per second (rate). Quote one without the other and the claim is empty. A source can hit 99% fidelity by trickling out a few pairs, or flood a link with pairs too noisy to make a key. This lesson gives you the scale on which fidelity is read: three thresholds that say whether a pair is entangled, whether it can beat a classical trick, and whether it can prove nonlocality. It also gives you the knob that trades fidelity against rate.

## The idea

A perfect pair is the Bell state $|\Phi^+\rangle$ from [1.2](01-02-the-stack-in-one-picture.md). A real pair is a perfect pair *some of the time*, and junk the rest of the time. Junk here means an accidental coincidence of two photons from different pairs, or a dark count, or a photon whose polarization the fiber scrambled. Junk has no correlation at all: coin flips on both sides.

So picture a bag of pairs. A fraction $p$ are perfect Bell pairs and a fraction $1-p$ are uncorrelated noise, and you can't tell which is which. Every useful thing you do with the bag is **linear** in that mixture: the good fraction does its job perfectly, and the junk fraction contributes exactly what random coin flips would. All three thresholds below come from asking how big $p$ must be before the good fraction outweighs the junk for a given task.

Rate fights fidelity because the sources are probabilistic. Pump harder and real pairs grow in proportion to the pump. Coincidences between photons from *two different* pairs grow with its square ([multi-pair emission](../../photonics-quantum-optics/lessons/03-06-single-photon-sources-photodetection.md)). More pairs per second means a larger junk fraction.

## The formal version

**Werner state.** The standard noise model mixes the Bell state with white noise:

$$\rho_W = p\,|\Phi^+\rangle\langle\Phi^+| + (1-p)\,\frac{I}{4}, \qquad 0\le p\le 1.$$

Here $I/4$ is the maximally mixed two-qubit state ([`quantum-computing` 2.2](../../quantum-computing/lessons/02-02-density-matrices-and-the-partial-trace.md)) and $p$ is the "good fraction". In words: with probability $p$ you hold a perfect pair, otherwise four equally likely random outcomes. See [Werner state](../reference.md#werner-state).

**Fidelity to a Bell state.** $F=\langle\Phi^+|\rho|\Phi^+\rangle$. For the Werner state the noise term leaves $\tfrac14$ of its weight on $|\Phi^+\rangle$, so

$$F = p + \frac{1-p}{4} = \frac{1+3p}{4}, \qquad p = \frac{4F-1}{3}.$$

In words: fidelity is the probability the pair would pass a perfect "are you $|\Phi^+\rangle$?" test, and pure noise already scores $\tfrac14$. See [fidelity to a Bell state](../reference.md#fidelity-to-a-bell-state).

**Threshold 1: entangled iff $F>\tfrac12$.** The [Peres–Horodecki criterion](../reference.md#peres-horodecki-criterion) says a two-qubit state is entangled exactly when its partial transpose $\rho^{T_B}$ (transpose Bob's indices only) has a negative eigenvalue. The partial transpose of $|\Phi^+\rangle\langle\Phi^+|$ is half the SWAP operator, which has eigenvalue $-1$ on the singlet $|\Psi^-\rangle$ and $+1$ on the other three Bell states. Hence $\rho_W^{T_B}$ has eigenvalue $-\tfrac p2+\tfrac{1-p}{4}=\tfrac{1-3p}{4}$ on $|\Psi^-\rangle$ and $\tfrac{1+p}{4}$ three times. That eigenvalue is negative iff $p>\tfrac13$, i.e. $F>\tfrac12$. In words: below half fidelity, a Werner pair is a mixture of unentangled pairs and is worth nothing as entanglement.

**Threshold 2: CHSH violation iff $F>0.780$.** The CHSH value $S$ ([`quantum-computing` 2.6](../../quantum-computing/lessons/02-06-the-chsh-game-and-device-independence.md)) is an expectation value, $S=\mathrm{tr}(\rho\,\mathcal B)$, so it is linear in $\rho$. Every term of $\mathcal B$ is a product of Pauli operators, which has zero trace, so the noise contributes $\mathrm{tr}(\mathcal B\,I/4)=0$. The Bell part contributes $2\sqrt2$ at the best settings, and no other settings do better, so

$$|S| = 2\sqrt2\,p, \qquad |S|>2 \iff p>\tfrac{1}{\sqrt2} \iff F>\frac{1+3/\sqrt2}{4}\approx 0.780.$$

In words: noise dilutes the Tsirelson value $2\sqrt2$ linearly, and the classical ceiling 2 is crossed once more than about 71% of the pairs are good. See [CHSH threshold for Werner states](../reference.md#chsh-threshold-for-werner-states).

**Threshold 3: teleportation beats classical iff $F>\tfrac12$.** Teleport an unknown qubit ([`quantum-computing` 2.4](../../quantum-computing/lessons/02-04-quantum-teleportation.md)) through $\rho_W$. Teleportation is also linear in the resource. The Bell part teleports perfectly. The $I/4$ part leaves Bob holding $I/2$, which overlaps any pure input with fidelity $\tfrac12$. Averaged over inputs,

$$F_\text{tel} = p\cdot 1 + (1-p)\cdot\tfrac12 = \frac{1+p}{2} = \frac{2F+1}{3}.$$

The best classical strategy, measure the qubit and phone the result, averages $\tfrac23$ ([`quantum-computing` 2.3](../../quantum-computing/lessons/02-03-the-no-cloning-theorem.md)). So $F_\text{tel}>\tfrac23$ iff $F>\tfrac12$. In words: any entangled Werner pair beats a phone call at teleportation, if not by much. See [teleportation fidelity](../reference.md#teleportation-fidelity).

**A fourth, forward pointer.** Entanglement-based QKD ([6.1](06-01-entanglement-based-qkd-and-the-pqc-debate.md)) gives zero key once the error rate $e=\tfrac23(1-F)$ passes about 11%, i.e. below $F\approx0.835$.

**Rate.** *Delivered pairs per second*: coincidences counted at the two ends, after fiber loss and detector efficiency. A loose synonym is ebits per second. The [rate–fidelity tradeoff](../reference.md#rate-fidelity-tradeoff) is the curve $F(\text{rate})$ traced out as the pump is turned up. Its shape is set by accidentals, opened in [3.2](03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md).

## Picture

![Two stacked plots sharing a horizontal axis of fidelity F from 0.25 to 1. The top plot shows teleportation fidelity rising as a straight blue line from 0.5 to 1, crossing the red dashed classical limit of 2/3 exactly at F equals one half. The bottom plot shows the best CHSH value rising as a straight blue line from 0 to 2.83, crossing the red dashed local-hidden-variable bound of 2 at F equals 0.780. The region below F equals one half is shaded and labelled separable. Vertical dashed lines mark F equals one half (entangled), 0.780 (CHSH) and 0.835 (QKD key).](assets/01-03-fig1.svg)

Read the figure left to right as a ladder of capability. Between $F=0.5$ and $0.780$ a pair is entangled and beats classical teleportation, yet it *cannot* violate CHSH. Past 0.835 it can make a key. Both lines are straight because everything is linear in $p$.

## Worked examples

**Example 1 (mechanical).** A Werner pair has $F=0.90$. Then $p=(3.6-1)/3=0.8667$, so 13.3% of pairs are noise. Partial-transpose eigenvalue: $(1-3p)/4=-0.40<0$, entangled. CHSH: $S=2\sqrt2\times0.8667=2.45>2$. Teleportation: $F_\text{tel}=(1.8+1)/3=0.933$, well above $\tfrac23$. QKD error rate $e=\tfrac23(0.10)=0.067$, under the 11% cliff. All four thresholds pass.

**Example 2 (Qunnect's two operating points).** On the GothamQ 34 km loop of buried New York fiber, Qunnect's team turned the source's pump power up and down (PRX Quantum, 2024):

| Delivered rate | Fidelity | $p$ | noise $1-p$ | $S$ | $F_\text{tel}$ |
|---|---|---|---|---|---|
| about $2\times10^4$ pairs/s | about 0.99 | 0.987 | 1.3% | 2.79 | 0.993 |
| about $5\times10^5$ pairs/s | bound $>0.84$ | 0.787 | 21% | 2.23 | 0.893 |
| same, source-limited estimate | about 0.88 | 0.840 | 16% | 2.38 | 0.920 |

The rate rose 25-fold. The noise fraction rose 12-fold on the estimate, and 16-fold on the bound. Both points violate CHSH. The high-rate point's *proven* fidelity, 0.84, clears the QKD line at 0.835 by only 0.005. The paper's abstract mentions "nearly 5×10^5 pairs/s" and "approximately 99%" in the same sentence. Those are two different operating points, not one.

## Watch out

- **You might think a link that fails CHSH is not entangled.** Actually every Werner pair with $0.5<F<0.780$ is entangled but violates no CHSH inequality. A Bell test is a sufficient witness, not a necessary one.
- **You might think "the CHSH threshold" is one number.** Qunnect's memory paper uses 77.5% under its own noise model. For a Werner state it is 0.780. This course uses 0.780; always ask which noise model sits behind a quoted threshold.
- **You might think a fidelity figure is a measurement.** GothamQ reports *bounds* from two-basis counts ([3.3](03-03-proving-a-link-is-entangled.md)). A lower bound of 0.84 and an estimate of 0.88 are different claims about the same pairs.

## Business lens

"99% fidelity" is half a sentence. The other half is **at what rate, over what loss, for how long, and is it a bound or an estimate**. Ask all four every time, of a competitor's datasheet and of your own press release. Qunnect's honest long-run point is the 15-day GothamQ run: about $2\times10^5$ pairs/s after 34 km, compensated-path fidelity bounded between 0.937 and 0.967 on average, and 99.84% uptime. That is a strong result, and it is not "99% at half a million pairs per second." A Chief of Staff who conflates the two will get caught by the first physicist on a customer call.

Thresholds also segment the market. A CHSH demo for a funder needs only 0.78. A QKD pilot needs comfortably more than 0.835, because key per pair falls steeply near the cliff. Linking quantum processors needs fidelities high enough to survive swaps ([5.3](05-03-bell-state-measurement-and-swapping.md)), and each swap multiplies the good fractions. The GothamQ data show one source running at either end of the curve: brightness for a key-rate buyer, purity for a networking-research buyer. The honest pitch names the operating point.

## One-liner

> A delivered pair is a good Bell pair with probability $p$ and coin-flip noise otherwise, so fidelity $F=(1+3p)/4$ must clear 1/2 to be entangled, 0.780 to violate CHSH and about 0.835 to make a key, and every fidelity claim is meaningless without the rate it was measured at.

## Problems

**P1 (🟢)** A link delivers Werner pairs with $F=0.92$. Find (a) the good fraction $p$, (b) the best CHSH value $S$, and (c) the average teleportation fidelity through one pair.

**P2 (🟡)** An application needs teleportation fidelity of at least 0.90 through a single Werner pair. (a) What is the minimum pair fidelity $F$? (b) Does a pair at exactly that fidelity violate CHSH? Give $S$.

**P3 (🔴, practical)** Two invented vendors send datasheets. Vendor A: $F=0.97$ at 1,000 pairs/s. Vendor B: $F=0.80$ at 100,000 pairs/s. Assume both deliver Werner pairs, the numbers are measured at the receiving ends over the same fiber, and (from [6.1](06-01-entanglement-based-qkd-and-the-pqc-debate.md)) entanglement-based QKD yields zero key below $F\approx0.835$ at any rate. Which vendor do you pick for (a) a QKD pilot and (b) a one-day CHSH demonstration for investors on a field link whose fidelity drifts by a few hundredths? Answer each in at most three sentences, with numbers.

<details>
<summary>Solutions</summary>

**P1** (a) $p=(4F-1)/3=(3.68-1)/3=0.893$.

(b) $S=2\sqrt2\,p=2.828\times0.893=2.53$, comfortably above 2.

(c) $F_\text{tel}=(2F+1)/3=(1.84+1)/3=0.947$, versus the classical $\tfrac23$.

---

**P2** (a) Invert $F_\text{tel}=(2F+1)/3$: $F=(3F_\text{tel}-1)/2=(2.7-1)/2=0.85$.

(b) Yes. $p=(3.4-1)/3=0.80>1/\sqrt2=0.707$, so $S=2\sqrt2\times0.80=2.26>2$. (Equivalently $0.85>0.780$.)

---

**P3** *(practical)*

**Accept:** (a) Vendor A, because B sits below the key threshold, so its extra rate is worthless. (b) Vendor A, or a qualified answer that B violates CHSH but with too thin a margin to survive drift.

**Must hit:**

- B's $F=0.80$ is below 0.835, so B's QKD key rate is zero however many pairs it ships; A's 0.97 clears it easily.
- A gives $S=2\sqrt2\times0.96=2.72$; B gives $S=2\sqrt2\times0.733=2.07$, a margin of only 0.07 above 2.
- A drift from 0.80 to 0.78 takes B to $S=2.00$, so B's violation can vanish during the demo.

**Model answer:** (a) Pick A: B's 0.80 fidelity is below the roughly 0.835 line where entanglement-based QKD stops producing key, so its 100-fold rate advantage buys nothing, while A at 0.97 clears the line with room to spare. (b) Pick A again: it gives $S\approx2.72$, far above 2, while B gives only 2.07. A slip of 0.02 in fidelity, routine on a drifting field fiber, puts B at $S\approx2.00$ in front of the investors.

</details>

## Flashback

**From Lesson [1.1](01-01-what-a-quantum-network-delivers.md) (What a quantum network delivers, and who pays):** Place each invented system on the Wehner–Elkouss–Hanson stages of a quantum internet (1 trusted repeater, 2 prepare-and-measure, 3 entanglement distribution, 4 quantum memory, 5 few-qubit fault-tolerant, 6 quantum computing networks), with a one-line reason. Then say which of the three could teleport a user's qubit on demand. (a) A bank links two offices 90 km apart through two relay huts, each of which decrypts the key from one hop and re-encrypts it for the next. (b) A university sends one photon of each entangled pair across campus; both photons are measured the moment they arrive, and the results feed a Bell test. (c) A lab heralds a pair over 200 m of fiber while the stay-home photon sits in a quantum memory, then reads it out only after the herald arrives.

<details>
<summary>Solution</summary>

**Accept:** (a) stage 1, (b) stage 3, (c) stage 4, each with a reason naming the capability that places it; for the last part, only (c), or "none reliably, (c) is the only candidate."

**Must hit:**

- (a) Stage 1: every relay hut holds the key in the clear, so the route must be trusted; no end-to-end quantum state exists.
- (b) Stage 3: end-to-end entanglement is delivered, but it is spent on arrival with nothing stored.
- (c) Stage 4: the pair is *stored* until the herald says it is good, which is the defining capability of the memory stage.
- Teleport on demand: only (c), because teleporting a user's qubit needs the pair to wait until the qubit is ready; (a) has no entanglement and (b) measures it immediately.

**Model answer:** (a) is stage 1, because the key is decrypted and re-encrypted at trusted relays. (b) is stage 3, because entanglement crosses end to end but is measured on arrival. (c) is stage 4, because the pair is held in memory until it is heralded, and it is the only one that could teleport a user's qubit on demand, since teleportation needs a pair that waits for the qubit.

</details>

## Connections

- **Backward:** density matrices and fidelity from [`quantum-computing` 2.2](../../quantum-computing/lessons/02-02-density-matrices-and-the-partial-trace.md); the $I/4$ noise term is the two-qubit depolarizing channel of [`quantum-computing` 5.1](../../quantum-computing/lessons/05-01-quantum-channels-and-decoherence.md); CHSH and Tsirelson from [2.6](../../quantum-computing/lessons/02-06-the-chsh-game-and-device-independence.md); the classical $\tfrac23$ from [2.3](../../quantum-computing/lessons/02-03-the-no-cloning-theorem.md).
- **Forward:** [3.2](03-02-detectors-noise-and-the-brightness-fidelity-tradeoff.md) derives the rate–fidelity curve from accidentals and $g_{SI}$; [3.3](03-03-proving-a-link-is-entangled.md) shows how the fidelity *bounds* are measured; [5.3](05-03-bell-state-measurement-and-swapping.md) multiplies good fractions through a swap; [6.1](06-01-entanglement-based-qkd-and-the-pqc-debate.md) turns $F$ into a key rate; [1.4](01-04-the-loss-wall.md) caps the rate with distance.
- **Sideways:** the QKD cliff is a channel-coding statement. The key fraction $1-2h(e)$ uses the binary entropy behind the binary symmetric channel's capacity $1-h(e)$ in [`information-theory` 3.2](../../information-theory/lessons/03-02-canonical-channels.md): Alice and Bob pay $h(e)$ per bit to correct errors and another $h(e)$ to evict an eavesdropper, and at $e\approx11\%$ the two costs eat the whole bit.
