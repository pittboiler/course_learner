# Quantum Computing · Lesson 2.4: Quantum teleportation

> ⏱ ~15 min · Module 2: Entanglement as a resource · Builds on: [2.1 (Bell states)](02-01-bell-states-and-generating-entanglement.md), [2.2 (density matrices and the partial trace)](02-02-density-matrices-and-the-partial-trace.md), [2.3 (no-cloning)](02-03-the-no-cloning-theorem.md) · Unlocks: [2.5 (superdense coding)](02-05-superdense-coding.md), [5.5 (fault tolerance)](05-05-fault-tolerance-the-threshold-and-the-surface-code.md)

## Why this matters

Teleportation is the first protocol in this course that does something genuinely impossible classically, and it is far more useful than its name suggests. Three places it is load-bearing:

- **Quantum repeaters.** Photons in fibre are lost exponentially with distance, so you cannot send a qubit 1,000 km. But you can teleport it across short hops and stitch the hops together, which is entanglement swapping (P3) and the basis of every long-distance quantum network proposal.
- **Fault tolerance.** In a fault-tolerant machine you cannot apply a $T$ gate directly to encoded data. You teleport the gate in, consuming a special resource state. **Magic-state distillation** ([5.5](05-05-fault-tolerance-the-threshold-and-the-surface-code.md)) exists to manufacture those states, and it dominates the cost of every large quantum computation.
- **Measurement-based computing.** An entire model of quantum computation replaces gates with measurements on a pre-entangled lattice, and its elementary step is teleportation with a twist.

There is also a clean conceptual payoff: teleportation shows exactly how entanglement and classical communication trade against each other. One Bell pair plus two classical bits moves one qubit. Remove either ingredient and it fails, which is the sharpest available statement of what entanglement is worth.

## The idea

Alice has a qubit in an unknown state $\lvert\psi\rangle = \alpha\lvert0\rangle + \beta\lvert1\rangle$. She wants Bob to have it. She cannot measure it (one bit out, $\alpha$ and $\beta$ lost), cannot copy it ([2.3](02-03-the-no-cloning-theorem.md)), and cannot send it — there is no quantum channel.

What they do have is a Bell pair, made earlier when they were together: Alice holds one half, Bob the other.

Here is the move. Alice performs a **Bell measurement on her unknown qubit together with her half of the pair** — a joint measurement, asking "which Bell state are these two in?" That measurement gives her two random bits and tells her nothing about $\alpha$ and $\beta$. But it does something remarkable to Bob's qubit: it snaps into $\lvert\psi\rangle$, up to one of four known Pauli errors, with which error being exactly the two bits Alice got.

So she phones him the two bits. He applies the matching correction. He now has $\lvert\psi\rangle$ exactly, and Alice's copy is gone — her two qubits collapsed into a Bell state carrying no trace of $\alpha, \beta$.

Two things are worth pausing on. The four outcomes are **equally likely regardless of $\lvert\psi\rangle$**, which is why Alice learns nothing and why no information leaks. And before the phone call, Bob's qubit is in the state $I/2$ — maximally mixed, useless. **The state arrives only when the classical bits do**, which is how relativity survives contact with entanglement.

## The formal version

Label Alice's unknown qubit 0, her half of the pair qubit 1, and Bob's half qubit 2. The initial three-qubit state:

$$\lvert\psi\rangle_0 \otimes \lvert\Phi^+\rangle_{12} = \left(\alpha\lvert0\rangle+\beta\lvert1\rangle\right)\otimes\tfrac{1}{\sqrt2}\left(\lvert00\rangle+\lvert11\rangle\right).$$

Expand and regroup so that Alice's two qubits are written in the **Bell basis**:

$$= \tfrac12\Big[\lvert\Phi^+\rangle_{01}\left(\alpha\lvert0\rangle+\beta\lvert1\rangle\right) + \lvert\Psi^+\rangle_{01}\left(\alpha\lvert1\rangle+\beta\lvert0\rangle\right) + \lvert\Phi^-\rangle_{01}\left(\alpha\lvert0\rangle-\beta\lvert1\rangle\right) + \lvert\Psi^-\rangle_{01}\left(\alpha\lvert1\rangle - \beta\lvert0\rangle\right)\Big]_2.$$

In words: the same state, rewritten. **Every term already has $\lvert\psi\rangle$ on Bob's qubit, up to a Pauli.** Nothing has happened yet — this is algebra, not dynamics, which is why people call teleportation "a change of basis that happens to be useful."

Read off the four branches — the card keeps this table alongside superdense coding's as [teleportation and superdense coding](../reference.md#teleportation-and-superdense-coding):

| $m_0 m_1$ | Alice's Bell state | Bob's qubit | Bob applies | probability |
|---|---|---|---|---|
| 0 0 | $\lvert\Phi^+\rangle$ | $\alpha\lvert0\rangle+\beta\lvert1\rangle$ | $I$ | 1/4 |
| 0 1 | $\lvert\Psi^+\rangle$ | $\alpha\lvert1\rangle+\beta\lvert0\rangle$ | $X$ | 1/4 |
| 1 0 | $\lvert\Phi^-\rangle$ | $\alpha\lvert0\rangle-\beta\lvert1\rangle$ | $Z$ | 1/4 |
| 1 1 | $\lvert\Psi^-\rangle$ | $\alpha\lvert1\rangle-\beta\lvert0\rangle$ | $X$ then $Z$ | 1/4 |

> **The protocol.** Alice applies $\mathrm{CNOT}_{0\to1}$ then $H$ on qubit 0 (the Bell measurement circuit of [2.1](02-01-bell-states-and-generating-entanglement.md) run backwards), measures both qubits to get bits $m_0, m_1$, and sends them to Bob. Bob applies $Z^{m_0}X^{m_1}$ to his qubit and holds $\lvert\psi\rangle$.

In words: undo the Bell circuit, read two bits, phone them over, apply the matching Paulis. The correction is $X$ first, then $Z$ — and because $ZX = -XZ$ the other order works too, differing by an unobservable global phase.

The resource statement is worth memorizing in the standard notation, where **1 ebit** means one shared Bell pair and **1 cbit** one classical bit:

$$1\ \text{ebit} + 2\ \text{cbits} \;\ge\; 1\ \text{qubit teleported}.$$

Neither cost can be cut. Two cbits are necessary because one bit would leave Bob with a two-way ambiguity he cannot resolve; the ebit is necessary because classical communication alone cannot transmit a qubit. And the accounting cuts the other way in [2.5](02-05-superdense-coding.md), where 1 ebit plus 1 qubit buys 2 cbits — the two protocols are duals.

## Picture

![A three-wire circuit. The top wire carries ket psi and is labelled ALICE; the bottom wire is labelled BOB. Wires two and three first pass through an H box and a CNOT enclosed in a blue dashed box labelled shared Bell pair, made in advance. Then wires one and two pass through a CNOT and an H box enclosed in a red dashed box labelled Alice, Bell measurement, ending in two meter symbols whose outputs are labelled m-zero and m-one. Green double lines carry those two bits down to the bottom wire, where an orange X box is conditioned on m-one and an orange Z box on m-zero, and the output is labelled ket psi. Below, a four-row table lists the measurement outcomes 00, 01, 10 and 11 with the Bell state found, the state Bob holds, and the correction he applies: nothing, X, Z, and X then Z, each at probability one quarter.](assets/02-04-fig1.svg)

The green double lines are the crucial part of the diagram. They are **classical** wires, and they travel no faster than light. Everything quantum in this circuit happened before the protocol started, when the Bell pair was made; the only thing that moves during the protocol is two ordinary bits.

## Worked examples

**Example 1 — teleport a specific state and check every branch.**

Take $\lvert\psi\rangle = \sqrt{0.8}\,\lvert0\rangle + \sqrt{0.2}\,\lvert1\rangle \approx 0.894\lvert0\rangle + 0.447\lvert1\rangle$, so $P(0) = 0.8$ on the original.

Run Alice's circuit on $\lvert\psi\rangle_0\lvert\Phi^+\rangle_{12}$ and expand. After $\mathrm{CNOT}_{0\to1}$ and $H$ on qubit 0, the three-qubit state is

$$\tfrac12\Big[\lvert00\rangle(0.894\lvert0\rangle + 0.447\lvert1\rangle) + \lvert01\rangle(0.447\lvert0\rangle+0.894\lvert1\rangle) + \lvert10\rangle(0.894\lvert0\rangle - 0.447\lvert1\rangle) + \lvert11\rangle(-0.447\lvert0\rangle+0.894\lvert1\rangle)\Big],$$

where the first two labels are Alice's measurement results. Each branch has norm $1/2$, so each outcome has probability $1/4$ — **independent of $\alpha$ and $\beta$**, exactly as promised.

Now check the corrections, branch by branch:

| $m_0m_1$ | Bob has | apply | result | $P(0)$ |
|---|---|---|---|---|
| 00 | $0.894\lvert0\rangle+0.447\lvert1\rangle$ | — | $\lvert\psi\rangle$ | 0.8 |
| 01 | $0.447\lvert0\rangle+0.894\lvert1\rangle$ | $X$ | $\lvert\psi\rangle$ | 0.8 |
| 10 | $0.894\lvert0\rangle-0.447\lvert1\rangle$ | $Z$ | $\lvert\psi\rangle$ | 0.8 |
| 11 | $-0.447\lvert0\rangle+0.894\lvert1\rangle$ | $X$, then $Z$ | $-\lvert\psi\rangle$ | 0.8 |

Verify the last row by hand: $X(-0.447\lvert0\rangle + 0.894\lvert1\rangle) = -0.447\lvert1\rangle + 0.894\lvert0\rangle$, then $Z$ flips the sign of the $\lvert1\rangle$ term: $0.894\lvert0\rangle + 0.447\lvert1\rangle$. Exactly $\lvert\psi\rangle$. (Applying $Z$ before $X$ instead gives $-\lvert\psi\rangle$, the same state.)

Note what happened to Alice's qubits: they are now in a *computational basis state* $\lvert m_0 m_1\rangle$, which contains no $\alpha$ or $\beta$ at all. **The original is destroyed**, as no-cloning requires.

**Example 2 — why the classical bits are not optional.**

Suppose Bob skips the phone call and guesses. Before receiving $m_0, m_1$ his state is the average of the four branches:

$$\rho_B = \tfrac14\left[\lvert\psi\rangle\langle\psi\rvert + X\lvert\psi\rangle\langle\psi\rvert X + Z\lvert\psi\rangle\langle\psi\rvert Z + XZ\lvert\psi\rangle\langle\psi\rvert ZX\right].$$

Evaluate it with the Bloch-vector form $\lvert\psi\rangle\langle\psi\rvert = \tfrac12(I + \vec r\cdot\vec\sigma)$. Conjugating by $X$ flips the $y$ and $z$ components; by $Z$ flips $x$ and $y$; by $XZ$ flips $x$ and $z$. Add the four:

$$r_x: \ \ r_x + r_x - r_x - r_x = 0, \qquad r_y:\ -r_y - r_y + r_y + r_y = 0, \qquad r_z:\ r_z - r_z + r_z - r_z = 0.$$

Every component cancels, so

$$\rho_B = \frac{I}{2}.$$

Maximally mixed, for **every** input state. Bob holds a perfectly random qubit until the bits arrive, and no measurement he makes gives any information about $\lvert\psi\rangle$.

Two things follow. First, this is the promised no-signaling check: nothing detectable happened at Bob's end when Alice measured, so no information travelled faster than light ([2.2](02-02-density-matrices-and-the-partial-trace.md) P3 proves this in general). Second, it shows the two bits are carrying **all** the usable information in the protocol — the entanglement was pre-positioned, the classical message is what activates it. Alice mailed Bob a locked box long ago; the two bits are the key.

## Watch out

- You might think teleportation transmits the state faster than light. It does not, and Example 2 is the proof: Bob's qubit is $I/2$ until the two bits arrive by ordinary channel. The pattern is general — entanglement plus classical communication does more than either alone, and never beats the classical channel's speed.
- You might think matter or energy is transported. Nothing moves except two bits. Bob's qubit was always his; the protocol reconfigures it. If Bob has no qubit ready to receive, there is no protocol.
- You might think Alice could keep her copy by not measuring. Without the measurement Bob's qubit stays $I/2$ forever — the collapse is the mechanism, not a side effect. And if she could somehow keep hers, you would have a cloner ([2.3](02-03-the-no-cloning-theorem.md)), so the destruction is theorem-enforced.
- You might think the Bell measurement can be done by Alice and Bob each measuring locally. It cannot: a Bell measurement is a **joint** measurement on two qubits and requires them in the same place, interacting. This is why teleportation needs the unknown qubit brought to Alice's half of the pair, and why experimental Bell measurements are the hard part of every quantum-network demonstration.

## One-liner

> Rewrite the joint state in the Bell basis and Bob's qubit is already $\lvert\psi\rangle$ up to a Pauli; the two classical bits just tell him which one to undo.

## Problems

**P1 (🟢)** Alice teleports $\lvert\psi\rangle = \alpha\lvert0\rangle+\beta\lvert1\rangle$ and her Bell measurement returns $m_0 m_1 = 10$. State which Bell state she found, write Bob's qubit before correction, name the gate he applies, and verify explicitly that it returns $\lvert\psi\rangle$. Then say what state Alice's two qubits are in afterwards, and why that is required.

**P2 (🟡)** Show that the four measurement outcomes are equally likely for *every* input state $\lvert\psi\rangle$, by computing the norm of each branch in the Bell-basis expansion. Then explain what would go wrong with the protocol — and with relativity — if the probabilities depended on $\alpha$ and $\beta$.

**P3 (🔴, optional)** **Entanglement swapping.** Alice and a middle station share a Bell pair on qubits 0 and 1; the middle station and Bob share another on qubits 2 and 3. The station performs a Bell measurement on qubits 1 and 2 and broadcasts the two bits. Work out the resulting state of qubits 0 and 3 for each of the four outcomes, show that in every case it is a Bell state after the appropriate correction, and state the probability of each. Then say why this makes long-distance quantum communication possible despite exponential photon loss in fibre, and name the resource the scheme needs that today's hardware lacks.

<details>
<summary>Solutions</summary>

**P1** Outcome $m_0m_1 = 10$ means Alice found $\lvert\Phi^-\rangle$ (the $m_0 = 1$ branch is the one carrying the minus sign; see the table in [2.1](02-01-bell-states-and-generating-entanglement.md)). Bob's qubit is then

$$\alpha\lvert0\rangle - \beta\lvert1\rangle.$$

He applies $Z^{m_0}X^{m_1} = Z^1 X^0 = Z$. Verify: $Z(\alpha\lvert0\rangle - \beta\lvert1\rangle) = \alpha\lvert0\rangle + \beta\lvert1\rangle = \lvert\psi\rangle$. ✓

Alice's two qubits are left in the computational basis state $\lvert 1 0\rangle$ — a definite, known state containing no trace of $\alpha$ or $\beta$. This is required by no-cloning ([2.3](02-03-the-no-cloning-theorem.md)): if Alice's qubit still held $\lvert\psi\rangle$ while Bob's did too, the pair of them would constitute a perfect copy of an unknown state, which is impossible. **Teleportation is a move, and the deletion of the source is not politeness but arithmetic.**

**P2** In the Bell-basis expansion

$$\lvert\psi\rangle_0\lvert\Phi^+\rangle_{12} = \tfrac12\Big[\lvert\Phi^+\rangle(\alpha\lvert0\rangle+\beta\lvert1\rangle) + \lvert\Psi^+\rangle(\alpha\lvert1\rangle+\beta\lvert0\rangle) + \lvert\Phi^-\rangle(\alpha\lvert0\rangle-\beta\lvert1\rangle) + \lvert\Psi^-\rangle(\alpha\lvert1\rangle-\beta\lvert0\rangle)\Big],$$

each term is $\tfrac12$ times (an orthonormal Bell state) times (a **unit** vector on Bob's qubit). The Bob-side vectors are unit because each is a Pauli applied to $\lvert\psi\rangle$, and Paulis are unitary: $\lVert P\lvert\psi\rangle\rVert = 1$. Since the four Bell states are orthonormal, the probability of outcome $k$ is the squared norm of its term:

$$P(k) = \left\lvert\tfrac12\right\rvert^2 \cdot 1 = \tfrac14, \qquad k = 1,\dots,4,$$

with no dependence on $\alpha,\beta$ whatsoever. Note the whole argument rests on one fact — **the four corrections are unitary** — which is why the four Paulis are exactly the right set.

If the probabilities *did* depend on $\alpha$ and $\beta$, two things would break. Practically, Alice would learn something about $\lvert\psi\rangle$ from her outcome statistics, which combined with the fact that Bob ends up with $\lvert\psi\rangle$ would mean information was duplicated — a cloner, by another route. Worse, Bob's pre-message reduced state would then have to depend on $\alpha,\beta$ in a way that differed from the no-measurement case, and by [2.2](02-02-density-matrices-and-the-partial-trace.md) P3 that is impossible for *any* local operation. So uniform outcome probabilities are not a lucky feature of the protocol: they are forced by no-signaling.

**P3** Write both pairs as $\lvert\Phi^+\rangle_{01}\lvert\Phi^+\rangle_{23}$ and expand:

$$\tfrac12\left(\lvert00\rangle_{01}+\lvert11\rangle_{01}\right)\left(\lvert00\rangle_{23}+\lvert11\rangle_{23}\right) = \tfrac12\left(\lvert0000\rangle + \lvert0011\rangle + \lvert1100\rangle+\lvert1111\rangle\right)$$

in the order $q_0q_1q_2q_3$. Now regroup the middle two qubits into the Bell basis. Using $\lvert00\rangle_{12} = \tfrac{1}{\sqrt2}(\lvert\Phi^+\rangle+\lvert\Phi^-\rangle)$, $\lvert11\rangle_{12} = \tfrac{1}{\sqrt2}(\lvert\Phi^+\rangle - \lvert\Phi^-\rangle)$, $\lvert01\rangle_{12} = \tfrac{1}{\sqrt2}(\lvert\Psi^+\rangle+\lvert\Psi^-\rangle)$, $\lvert10\rangle_{12}=\tfrac{1}{\sqrt2}(\lvert\Psi^+\rangle-\lvert\Psi^-\rangle)$, and collecting the outer qubits:

| station outcome $m_0m_1$ | Bell state found on 1,2 | state of qubits 0,3 | probability | correction |
|---|---|---|---|---|
| 00 | $\lvert\Phi^+\rangle$ | $\tfrac{1}{\sqrt2}(\lvert00\rangle+\lvert11\rangle) = \lvert\Phi^+\rangle$ | 1/4 | none |
| 01 | $\lvert\Psi^+\rangle$ | $\tfrac{1}{\sqrt2}(\lvert01\rangle+\lvert10\rangle) = \lvert\Psi^+\rangle$ | 1/4 | $X$ on qubit 3 |
| 10 | $\lvert\Phi^-\rangle$ | $\tfrac{1}{\sqrt2}(\lvert00\rangle-\lvert11\rangle) = \lvert\Phi^-\rangle$ | 1/4 | $Z$ on qubit 3 |
| 11 | $\lvert\Psi^-\rangle$ | $\tfrac{1}{\sqrt2}(\lvert01\rangle-\lvert10\rangle) = \lvert\Psi^-\rangle$ | 1/4 | $X$ then $Z$ on qubit 3 |

Every outcome leaves qubits 0 and 3 **maximally entangled**, and the correction restores $\lvert\Phi^+\rangle$ in all four cases. The striking part: qubits 0 and 3 have never interacted and were never in the same place. Entanglement was created between them by a measurement performed on two *other* qubits — which is just teleportation with "the unknown state" being itself half of an entangled pair.

*Why this beats fibre loss.* Transmission through fibre attenuates as $e^{-L/L_0}$, so the probability a photon survives 1,000 km is astronomically small and the rate of direct Bell-pair distribution collapses. Break the distance into $N$ short hops, though, and each hop succeeds with decent probability; once neighbouring pairs exist, swapping stitches them into one long-distance pair. The end-to-end cost becomes roughly polynomial in distance rather than exponential, and that scaling change is the entire argument for quantum repeaters.

*The missing resource:* **quantum memory** good enough to hold one half of a pair while the neighbouring hop is being established and its result communicated. Swapping is sequential — a hop must wait for its neighbour — so the qubits must stay coherent for at least the classical communication time over the link, which at continental scale is milliseconds. That is orders of magnitude beyond the coherence times of most platforms today ([5.1](05-01-quantum-channels-and-decoherence.md)), and it, not the swapping operation, is why the quantum internet remains a laboratory demonstration.

</details>

## Connections

- **Backward:** Alice's measurement is the Bell measurement circuit of [2.1](02-01-bell-states-and-generating-entanglement.md), and the four corrections are the same four local Paulis that move you around the Bell basis there. Bob's pre-message state being $I/2$ is the partial-trace calculation of [2.2](02-02-density-matrices-and-the-partial-trace.md), and the destruction of the original is required by [2.3](02-03-the-no-cloning-theorem.md).
- **Forward:** [2.5](02-05-superdense-coding.md) runs the resource trade in the opposite direction. [5.5](05-05-fault-tolerance-the-threshold-and-the-surface-code.md) uses **gate teleportation** — teleporting a qubit through a specially prepared resource state applies a gate to it in transit, which is the only known way to get $T$ gates onto fault-tolerantly encoded data and the reason magic-state factories dominate resource estimates in [6.6](06-06-resource-estimation-and-the-state-of-the-field.md).
- **Sideways:** the experimental version uses photon pairs from down-conversion and a beamsplitter-based Bell measurement — see [`photonics-quantum-optics` 4.3](../../photonics-quantum-optics/lessons/04-03-nonlinear-optics-parametric-down-conversion.md) and [4.4](../../photonics-quantum-optics/lessons/04-04-entangled-photons-bell-tests.md), where the Hong–Ou–Mandel effect is what makes a photonic Bell measurement possible at all.
