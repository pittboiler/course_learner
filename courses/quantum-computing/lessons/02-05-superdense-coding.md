# Quantum Computing · Lesson 2.5: Superdense coding

> ⏱ ~15 min · Module 2: Entanglement as a resource · Builds on: [2.1 (Bell states)](02-01-bell-states-and-generating-entanglement.md), [2.4 (teleportation)](02-04-quantum-teleportation.md) · Unlocks: [2.6 (the CHSH game)](02-06-the-chsh-game-and-device-independence.md)

## Why this matters

Teleportation spent entanglement to move a qubit using classical bits. Superdense coding runs the trade **backwards**: spend entanglement to move classical bits using a qubit. Together the two protocols pin down what a Bell pair is worth, and the answer is a clean exchange rate rather than a vague slogan about spooky correlations.

The second reason to care is the boundary it probes. The **Holevo bound** says $n$ qubits carry at most $n$ classical bits — a hard theorem, no exceptions. Superdense coding appears to send two bits with one qubit, so either Holevo is wrong or the accounting is subtler than it looks. Working out which is the most instructive hour in this module, because the resolution is where "entanglement is a resource you pay for in advance" stops being a metaphor and becomes arithmetic.

## The idea

Alice wants to send Bob two classical bits. They share a Bell pair, made earlier.

From [2.1](02-01-bell-states-and-generating-entanglement.md) we know one thing that makes this work: applying $I$, $X$, $Z$, or $XZ$ to **one qubit** of $\lvert\Phi^+\rangle$ produces the four different Bell states. Four local gates, four globally distinguishable outcomes.

So: Alice picks the gate matching her two bits, applies it to her half, and mails that single qubit to Bob. Bob now holds both halves and performs a Bell measurement, which tells him which of the four states he has — and hence Alice's two bits, with certainty.

One qubit crossed the channel; two bits arrived. The trick is where the second bit's worth of capacity came from: **Bob's half of the pair was already in his lab.** Alice's gate did not create information in her qubit; it changed a *correlation* that only becomes readable when the two halves are reunited. Half the message was pre-positioned before Alice knew what she wanted to say.

## The formal version

> **The protocol.** Alice and Bob share $\lvert\Phi^+\rangle = \tfrac{1}{\sqrt2}(\lvert00\rangle+\lvert11\rangle)$, Alice holding qubit 0.
> 1. To send bits $b_0 b_1$, Alice applies $Z^{b_0}X^{b_1}$ to her qubit.
> 2. She sends her qubit to Bob.
> 3. Bob applies $\mathrm{CNOT}_{0\to1}$ then $H$ on qubit 0 and measures both qubits, recovering $b_0 b_1$ exactly.

| message $b_0b_1$ | Alice applies | resulting state | Bob measures |
|---|---|---|---|
| 0 0 | $I$ | $\lvert\Phi^+\rangle$ | 0 0 |
| 0 1 | $X$ | $\lvert\Psi^+\rangle$ | 0 1 |
| 1 0 | $Z$ | $\lvert\Phi^-\rangle$ | 1 0 |
| 1 1 | $XZ$ | $-\lvert\Psi^-\rangle$ | 1 1 |

In words: the two bits index the four Bell states, and a Bell measurement reads the index off. Success probability is exactly 1 — the four Bell states are orthogonal, so a projective measurement in that basis never errs. Note the phase in the last row is global and invisible.

The resource statement, alongside teleportation's for contrast:

$$\text{superdense: } 1\ \text{ebit} + 1\ \text{qubit} \;\ge\; 2\ \text{cbits}, \qquad\qquad \text{teleportation: } 1\ \text{ebit} + 2\ \text{cbits} \;\ge\; 1\ \text{qubit}.$$

In words: entanglement halves the quantum cost of sending classical information, and halves the classical cost of sending quantum information. The two are duals, and both are tight.

Now the theorem that makes this interesting:

> **Holevo bound (the case we need).** Without pre-shared entanglement, transmitting $n$ qubits conveys at most $n$ classical bits of accessible information.

In words: quantum states are not a denser medium than bits for classical messages. This is why "one qubit, two bits" needs explaining, and the explanation is an accounting one:

> **The resolution.** Distributing the Bell pair already required sending one qubit from Alice's lab to Bob's. Superdense coding sends a second. **Two qubits crossed the channel in total for two bits** — exactly at the Holevo bound.

In words: entanglement does not beat Holevo. It lets you pay the channel cost **before you know the message**, which is a scheduling win, not a compression win. That distinction matters practically: if the channel is cheap at night and expensive at noon, superdense coding is a real saving; if you count total qubits moved, it saves nothing.

Finally, the piece that makes it feel less like a trick:

> **Alice's qubit alone carries nothing.** For all four messages, the reduced state of Alice's qubit is $I/2$.

In words: an eavesdropper who intercepts the transmitted qubit and measures it learns **zero bits** about the message, because a local Pauli cannot change a maximally mixed reduced state ([2.2](02-02-density-matrices-and-the-partial-trace.md)). The information lives in the correlation with Bob's half, which Eve does not have.

## Picture

![A two-wire circuit. Wires labelled Alice on top and Bob below start from ket 0 and pass through an H box and a CNOT enclosed in a blue dashed box labelled Bell pair made in advance. Then Alice's wire passes through an orange box labelled Z to the b-zero power times X to the b-one power, enclosed in a dashed box labelled Alice encodes 2 bits. A green arrow above the wire is labelled Alice sends her ONE qubit to Bob. Then both wires pass through a CNOT and an H box ending in two meter symbols labelled b-zero and b-one, enclosed in a red dashed box labelled Bob, Bell measurement. Below, a four-row table lists each two-bit message, the gate Alice applies (I, X, Z, XZ), the resulting Bell state, and the bits Bob decodes, which always match the message.](assets/02-05-fig1.svg)

Compare this diagram with [2.4](02-04-quantum-teleportation.md)'s. They are near mirror images: teleportation has a quantum wire early and two classical wires late; superdense coding has the quantum wire late and the two bits are the *message* rather than the correction. The Bell-pair preparation and the Bell measurement appear in both, in swapped positions.

## Worked examples

**Example 1 — send the message 10, start to finish.**

Alice's bits are $b_0 = 1$, $b_1 = 0$, so she applies $Z^1 X^0 = Z$ to her qubit:

$$(Z\otimes I)\tfrac{1}{\sqrt2}\left(\lvert00\rangle + \lvert11\rangle\right) = \tfrac{1}{\sqrt2}\left(\lvert00\rangle - \lvert11\rangle\right) = \lvert\Phi^-\rangle,$$

since $Z$ leaves $\lvert0\rangle$ alone and flips the sign of $\lvert1\rangle$. She sends qubit 0 to Bob.

Bob applies $\mathrm{CNOT}_{0\to1}$, which sends $\lvert11\rangle \to \lvert10\rangle$:

$$\tfrac{1}{\sqrt2}\left(\lvert00\rangle - \lvert10\rangle\right) = \left(\tfrac{1}{\sqrt2}(\lvert0\rangle - \lvert1\rangle)\right)\lvert0\rangle = \lvert-\rangle\lvert0\rangle.$$

The pair is now unentangled — the CNOT undid the entanglement, as in [2.1](02-01-bell-states-and-generating-entanglement.md) Example 2. Bob applies $H$ to qubit 0, sending $\lvert-\rangle\to\lvert1\rangle$:

$$\lvert1\rangle\lvert0\rangle.$$

Measuring gives $1, 0$ with certainty. Message received, no errors, no repeats. ✓

**Example 2 — the accounting, done honestly.**

Tally every qubit that crosses between the two labs, over the whole lifetime of the protocol.

| stage | qubits sent | bits sent | when |
|---|---|---|---|
| distribute the Bell pair | 1 | 0 | before the message exists |
| transmit the encoded qubit | 1 | 0 | after Alice decides |
| **total** | **2** | **0** | conveying 2 bits |

Two qubits for two bits: **precisely the Holevo rate of one bit per qubit.** No violation, and no free lunch.

What did the entanglement actually buy? Look at the *timing* column. One of the two qubit-transmissions happened before Alice knew her message. So if the quantum channel is a scarce resource that must be booked in advance — a satellite pass, a fibre slot, an overnight shipment of a quantum memory — superdense coding lets you move half the traffic to the cheap window. That is the real use case, and it is why the protocol shows up in proposals for satellite quantum links rather than in terrestrial telecom.

Now push the idea to see where it breaks. Could 1 ebit plus 1 qubit send **three** bits? No: the four Bell states are the *only* states Alice can reach with local operations on her half, so she has exactly four distinguishable messages, or 2 bits. More generally the entanglement-assisted classical capacity of a noiseless qubit channel is exactly 2 bits per qubit, and the factor of 2 is the whole benefit entanglement can ever provide here. **Entanglement doubles classical capacity and no more** — a sharp, finite, provable payoff, which is a better advertisement than any amount of talk about nonlocality.

## Watch out

- You might think superdense coding beats the Holevo bound, and therefore that qubits are a denser medium than bits. It does not. Count the Bell-pair distribution and the rate is exactly one bit per qubit transmitted; what changes is *when* you pay.
- You might think Alice's gate puts information into her qubit. It does not: her qubit's state is $I/2$ before and after, for every message. The gate rewrites a **correlation**, and a correlation is not stored in either half. This is also why the protocol is unaffected by an eavesdropper who reads the travelling qubit.
- You might think entanglement alone could send the bits, with no qubit transmitted. It cannot — that would be signaling, forbidden by [2.2](02-02-density-matrices-and-the-partial-trace.md). The travelling qubit is not a formality; it is the only channel in the protocol.
- You might think the protocol degrades gracefully if the shared pair is imperfect. It degrades, but you must check how: with a partially entangled pair the four encoded states stop being orthogonal, so Bob's Bell measurement makes errors, and the channel becomes noisy rather than merely slower. P3 computes the rate.

## One-liner

> One shared Bell pair turns one qubit into two bits, because the four local Paulis reach all four Bell states — and Holevo survives because distributing the pair already cost a qubit.

## Problems

**P1 (🟢)** Alice wants to send the message $b_0b_1 = 01$. State the gate she applies, compute the resulting two-qubit state, then run Bob's decoding circuit ($\mathrm{CNOT}_{0\to1}$, then $H$ on qubit 0) step by step and confirm he measures $0,1$.

**P2 (🟡)** Show that the reduced state of Alice's qubit is $I/2$ for all four messages, using the partial-trace rule. Then state what an eavesdropper who intercepts the travelling qubit, measures it in any basis, and forwards it to Bob learns about the message, and what Bob notices. Contrast with the classical case of intercepting a two-bit message.

**P3 (🔴, optional)** Suppose the shared pair is only partially entangled: $\lvert\psi(t)\rangle = \cos t\,\lvert00\rangle + \sin t\,\lvert11\rangle$ with $0 < t < \pi/4$. (a) Compute the overlap between the states Alice's $I$ and $Z$ encodings produce, and show they are no longer orthogonal. (b) Show that if Bob still performs a Bell measurement, the probability he decodes correctly is $\tfrac12\left(1 + \sin 2t\right)$, and evaluate it at $t = \pi/6$ and $t = \pi/4$. (c) Explain in terms of [2.2](02-02-density-matrices-and-the-partial-trace.md)'s purity why perfect superdense coding requires *maximal* entanglement, not merely some.

<details>
<summary>Solutions</summary>

**P1** With $b_0 = 0, b_1 = 1$, Alice applies $Z^0X^1 = X$ to qubit 0:

$$(X\otimes I)\tfrac{1}{\sqrt2}\left(\lvert00\rangle+\lvert11\rangle\right) = \tfrac{1}{\sqrt2}\left(\lvert10\rangle + \lvert01\rangle\right) = \lvert\Psi^+\rangle.$$

Bob's $\mathrm{CNOT}_{0\to1}$ flips qubit 1 where qubit 0 is 1, so $\lvert10\rangle\to\lvert11\rangle$ and $\lvert01\rangle$ is untouched:

$$\tfrac{1}{\sqrt2}\left(\lvert11\rangle+\lvert01\rangle\right) = \left(\tfrac{1}{\sqrt2}(\lvert0\rangle+\lvert1\rangle)\right)\lvert1\rangle = \lvert+\rangle\lvert1\rangle.$$

Then $H$ on qubit 0 sends $\lvert+\rangle\to\lvert0\rangle$, giving $\lvert01\rangle$. Measurement returns $0,1$. ✓

**P2** Each encoded state is $(P\otimes I)\lvert\Phi^+\rangle$ for $P \in \{I,X,Z,XZ\}$, and each is one of the four Bell states. By the calculation in [2.2](02-02-density-matrices-and-the-partial-trace.md) P2, **every** Bell state has reduced state $I/2$ on each qubit. So

$$\rho_{\text{Alice's qubit}} = \frac{I}{2} \quad \text{for all four messages.}$$

Alternatively, argue directly: $\rho = \mathrm{tr}_B\left[(P\otimes I)\rho_{\Phi^+}(P^\dagger\otimes I)\right] = P\left(\mathrm{tr}_B \rho_{\Phi^+}\right)P^\dagger = P\,\tfrac{I}{2}\,P^\dagger = \tfrac{I}{2}$, since the partial trace over B commutes with an operation on A, and any unitary leaves $I/2$ fixed.

*The eavesdropper.* Eve intercepts the travelling qubit. Its state is $I/2$ regardless of the message, so **every measurement she performs gives a uniformly random result carrying zero bits** about $b_0b_1$. She cannot do better by being clever about the basis, because identical states cannot yield different statistics.

*What Bob notices.* Plenty. Eve's measurement collapses her qubit and destroys the correlation with Bob's half. If she measures in the $Z$ basis and forwards the result, the pair becomes a classical mixture rather than a Bell state, and Bob's Bell measurement now returns a random answer roughly half the time. So Eve learns nothing and wrecks the channel — detectable as an error rate.

*Contrast with classical.* A classical two-bit message sent down a wire is fully readable by anyone who taps the wire, undetectably. Here the message is split between the channel and Bob's lab, so **tapping the channel yields nothing and cannot be done invisibly.** That asymmetry is the same physics that quantum key distribution ([`photonics-quantum-optics` 4.5](../../photonics-quantum-optics/lessons/04-05-quantum-information-taste.md)) turns into a security proof.

**P3**

(a) The two encodings give
$$\lvert\psi_I\rangle = \cos t\lvert00\rangle + \sin t\lvert11\rangle, \qquad \lvert\psi_Z\rangle = (Z\otimes I)\lvert\psi(t)\rangle = \cos t\lvert00\rangle - \sin t\lvert11\rangle.$$
Their overlap is
$$\langle\psi_I\vert\psi_Z\rangle = \cos^2 t - \sin^2 t = \cos 2t, \qquad \lvert\langle\psi_I\vert\psi_Z\rangle\rvert^2 = \cos^2 2t.$$
At $t = \pi/6$ this is $\cos^2 60^\circ = 1/4$, decidedly nonzero. Only at $t = \pi/4$ does it vanish. Since non-orthogonal states cannot be distinguished with certainty ([1.3](01-03-measurement-and-the-born-rule.md) P3), Bob's decoding must now make errors.

(b) Bob measures in the Bell basis. For message $I$ he is correct when he projects onto $\lvert\Phi^+\rangle$:
$$\langle\Phi^+\vert\psi(t)\rangle = \tfrac{1}{\sqrt2}\left(\cos t + \sin t\right), \qquad P(\text{correct}) = \tfrac12\left(\cos t+\sin t\right)^2 = \tfrac12\left(1 + 2\sin t\cos t\right) = \tfrac12\left(1+\sin 2t\right).$$
By symmetry each of the other three messages gives the same value (each is the same calculation conjugated by a Pauli). Evaluating:

| $t$ | $P(\text{correct})$ |
|---|---|
| $\pi/6$ ($30^\circ$) | $\tfrac12(1 + \sin 60^\circ) = 0.933$ |
| $\pi/4$ ($45^\circ$) | $\tfrac12(1+1) = 1$ |

So a 30-degree pair still works 93 percent of the time — the protocol degrades smoothly rather than collapsing, and the residual error rate could be cleaned up with classical error-correcting codes at a cost in rate.

(c) The reason is the reduced state. From [2.2](02-02-density-matrices-and-the-partial-trace.md) Example 2, Alice's half of $\lvert\psi(t)\rangle$ has $\rho_A = \mathrm{diag}(\cos^2 t, \sin^2 t)$, which is $I/2$ only at $t = \pi/4$. Away from maximal entanglement, $\rho_A$ has a **preferred basis** — it is not rotationally symmetric — and a Pauli applied to it no longer moves the global state to an orthogonal one. Concretely, the four Paulis generate four perfectly distinguishable global states only when the local state is maximally mixed, because that is the condition under which the Pauli group acts on the pair as a group of "translations" with no fixed structure to bump into.

Stated as a slogan: **superdense coding needs the local state to be blank.** Any local information left in Alice's half is capacity she cannot use, and the purity of her reduced state measures exactly how much. This is the general pattern for entanglement-assisted protocols — teleportation fidelity, superdense rate, and CHSH violation ([2.6](02-06-the-chsh-game-and-device-independence.md)) all peak at the same place, when each half alone says nothing at all.

</details>

## Connections

- **Backward:** the encoding table is the "local Paulis move you around the Bell basis" fact from [2.1](02-01-bell-states-and-generating-entanglement.md) P3, and the decoding is its Bell measurement. The privacy of the travelling qubit is the partial trace of [2.2](02-02-density-matrices-and-the-partial-trace.md); the exchange rate is the mirror of [2.4](02-04-quantum-teleportation.md).
- **Forward:** [2.6](02-06-the-chsh-game-and-device-independence.md) closes the module by proving that the correlations both protocols rely on have no classical explanation at all, which is the last thing needed before entanglement can be treated as a genuine resource rather than a strange bookkeeping device.
- **Sideways:** the Holevo bound is the quantum ceiling on channel capacity, the direct analogue of the classical capacity theorem in [`information-theory` 3.1](../../information-theory/lessons/03-01-discrete-channels-capacity.md) — and the fact that entanglement exactly doubles it, no more, is one of the cleanest quantitative statements in quantum information theory.
