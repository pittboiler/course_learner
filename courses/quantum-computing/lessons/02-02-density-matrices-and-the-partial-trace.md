# Quantum Computing · Lesson 2.2: Density matrices and the partial trace

> ⏱ ~15 min · Module 2: Entanglement as a resource · Builds on: [2.1 (Bell states)](02-01-bell-states-and-generating-entanglement.md), [`quantum-mechanics` 5.4 (mixed states and the density matrix)](../../quantum-mechanics/lessons/05-04-density-matrix-mixed-states.md) · Unlocks: [2.3 (no-cloning)](02-03-the-no-cloning-theorem.md), [5.1 (quantum channels)](05-01-quantum-channels-and-decoherence.md)

## Why this matters

State vectors cannot describe two things a quantum computer does constantly: **hold half of an entangled pair**, and **be noisy**. In both cases there is no $\lvert\psi\rangle$ to write down, and pretending otherwise gives wrong predictions.

The density matrix $\rho$ fixes both at once, and this lesson's job is narrow. [`quantum-mechanics` 5.4](../../quantum-mechanics/lessons/05-04-density-matrix-mixed-states.md) already built $\rho$ from the physics side; here it becomes **circuit bookkeeping**. You need three skills: take a partial trace to see what one party holds, read a purity to measure how much entanglement or noise you have, and use the fact that local operations cannot change a distant reduced state — which is the entire proof that entanglement sends no signals.

Everything in Module 5 is written in this language. Noise is a map on $\rho$; a code's performance is a fidelity between two $\rho$'s. Learn it here and Module 5 costs half as much.

## The idea

A density matrix answers one question: **for every possible measurement, what are the odds?** Nothing more. Two preparations that give identical odds for every measurement are the same $\rho$ and are physically indistinguishable, even if they were made in completely different ways.

Geometrically the picture is a small upgrade from [1.1](01-01-the-qubit-and-the-bloch-sphere.md). A pure state is a point on the Bloch **sphere**. A general state is a point in the Bloch **ball**: same directions, but now the arrow can be short. The length of the arrow measures how much you know.

- Length 1, on the surface: a pure state. Some measurement gives a certain answer.
- Length 0, dead centre: the maximally mixed state $I/2$. **Every** measurement is 50/50. You know nothing.
- In between: partial knowledge.

Two entirely different situations produce a short arrow, and here is the striking part — **they are the same object**.

1. *Classical ignorance.* A machine emits $\lvert0\rangle$ or $\lvert1\rangle$ on a coin flip and doesn't tell you which.
2. *Entanglement.* You hold one qubit of a Bell pair. The **pair** is pure, perfectly known; your qubit alone is not.

Both give $\rho = I/2$. No experiment on your qubit distinguishes "the universe flipped a coin" from "my qubit is entangled with something far away." That equivalence is not a limitation of the formalism; it is a physical fact, and it is why noise and entanglement-with-the-environment are the same subject ([5.1](05-01-quantum-channels-and-decoherence.md)).

## The formal version

> **Definition (density matrix).** A state is a matrix $\rho$ that is Hermitian, positive semidefinite, and has $\mathrm{tr}\,\rho = 1$. A **pure** state has $\rho = \lvert\psi\rangle\langle\psi\rvert$; a general **mixed** state is a convex combination $\rho = \sum_i p_i\lvert\psi_i\rangle\langle\psi_i\rvert$ with $p_i \ge 0$, $\sum_i p_i = 1$.

In words: replace the vector by the outer product, then allow probabilistic mixtures. Positivity guarantees no negative probabilities; unit trace makes them sum to one.

The rules of [1.2](01-02-single-qubit-gates.md) and [1.3](01-03-measurement-and-the-born-rule.md) translate directly:

$$\text{gate: } \rho \mapsto U\rho U^\dagger, \qquad \text{Born rule: } P(m) = \mathrm{tr}\!\left(\Pi_m \rho\right), \qquad \text{expectation: } \langle A\rangle = \mathrm{tr}(A\rho).$$

In words: sandwich by the gate, trace against the projector. Each formula reduces to the vector version when $\rho = \lvert\psi\rangle\langle\psi\rvert$.

> **Bloch ball.** Every single-qubit state is $\rho = \tfrac12\left(I + \vec r\cdot\vec\sigma\right)$ with $\lvert\vec r\rvert \le 1$, where $r_k = \mathrm{tr}(\sigma_k\rho)$. The state is pure exactly when $\lvert\vec r\rvert = 1$.

> **Purity.** $\mathrm{tr}\,\rho^2 = \tfrac12\left(1 + \lvert\vec r\rvert^2\right)$, so purity runs from $1$ (pure) down to $1/2$ (maximally mixed) for one qubit, and down to $1/d$ in dimension $d$.

In words: one number tells you how far from the surface you are. Purity is the workhorse diagnostic — it detects decoherence in an experiment and entanglement in a subsystem, with the same arithmetic.

Now the operation that makes all of this necessary:

> **Partial trace.** For a joint state $\rho_{AB}$, the state of $A$ alone is
> $$\rho_A = \mathrm{tr}_B\,\rho_{AB} = \sum_j \left(I\otimes\langle j\rvert\right)\rho_{AB}\left(I \otimes \lvert j\rangle\right),$$
> summing over any orthonormal basis $\{\lvert j\rangle\}$ of $B$. It is the unique map giving correct statistics for every measurement on $A$ alone.

In words: sum over $B$'s possibilities, keeping $A$'s indices. For two qubits with $\rho_{AB}$ written as $2\times2$ blocks, $\rho_A$ is the matrix of block traces:

$$\rho_{AB} = \begin{pmatrix} M_{00} & M_{01}\\ M_{10} & M_{11}\end{pmatrix} \implies \rho_A = \begin{pmatrix}\mathrm{tr}\,M_{00} & \mathrm{tr}\,M_{01}\\ \mathrm{tr}\,M_{10} & \mathrm{tr}\,M_{11}\end{pmatrix}.$$

Three consequences carry the rest of Module 2.

> **Entanglement shows up as impurity.** For a pure $\rho_{AB}$, the state $\rho_A$ is pure if and only if $\rho_{AB}$ is a product state. Maximal entanglement gives $\rho_A = I/2$.

> **No-signaling.** Any operation performed on $B$ alone — a gate, a measurement whose result is not revealed, even discarding the qubit — leaves $\rho_A$ unchanged.

> **Purification.** Every mixed $\rho_A$ is the reduced state of some pure state on a larger system. So "mixed" never means "incompletely specified reality" — only "I hold part of something."

In words: local mixedness measures global entanglement; nothing done far away can be detected locally; and every mixture can be viewed as entanglement with something you cannot see. The third is the conceptual bridge to noise: a noisy qubit *is* a qubit entangled with its environment.

## Picture

![Left: a filled disk representing a cross-section of the Bloch ball in the x-z plane. Four blue dots sit on the boundary circle, labelled ket 0 at the top, ket 1 at the bottom, ket plus at the right and ket minus at the left, annotated that the surface is pure with trace rho squared equal to 1. A red dot at the exact centre is labelled I over 2 with trace rho squared equal to one half. An orange arrow of half the radius points up from the centre to an orange dot, labelled magnitude of r equals one half, mixed. Captions read that the state space is a ball not a sphere, radius equals purity, centre means know nothing. Right: a two-wire circuit on wires A and B with an H box and a CNOT, boxed by a dashed green outline labelled pure, ket Phi plus, trace rho squared equal to 1. Below a dashed separator, red text reads throw away B, trace it out, giving rho subscript A equals I over 2, with the note that a pure pair has each half maximally mixed, so entanglement is local ignorance.](assets/02-02-fig1.svg)

The figure is the lesson: a pure global state can have maximally mixed parts, and **the ball's radius is a single number that measures both noise and entanglement.** An experimentalist watching a qubit's arrow shrink cannot tell, from that alone, whether the qubit is decohering or getting entangled with a neighbour. Distinguishing them requires looking at the neighbour too, which is exactly what a syndrome measurement does in [5.2](05-02-the-three-qubit-codes.md).

## Worked examples

**Example 1 — a superposition and a coin flip, told apart.**

*The superposition.* $\lvert+\rangle = \tfrac{1}{\sqrt2}(\lvert0\rangle+\lvert1\rangle)$ gives

$$\rho_+ = \lvert+\rangle\langle+\rvert = \tfrac12\begin{pmatrix}1&1\\1&1\end{pmatrix}, \qquad \vec r = (1,0,0), \qquad \mathrm{tr}\,\rho_+^2 = 1.$$

*The coin flip.* Half $\lvert0\rangle$, half $\lvert1\rangle$:

$$\rho_{\text{mix}} = \tfrac12\begin{pmatrix}1&0\\0&0\end{pmatrix} + \tfrac12\begin{pmatrix}0&0\\0&1\end{pmatrix} = \tfrac12 I, \qquad \vec r = (0,0,0), \qquad \mathrm{tr}\,\rho_{\text{mix}}^2 = \tfrac12.$$

They differ only in the **off-diagonal entries**, which are called *coherences* precisely because they are what carries interference. And the measurement that exposes the difference is the $X$ basis:

| | $P(0)$, $Z$ basis | $P(+)$, $X$ basis |
|---|---|---|
| $\rho_+$ | $1/2$ | $1$ |
| $\rho_{\text{mix}}$ | $1/2$ | $1/2$ |

Compute the second column with the trace rule. With $\Pi_+ = \lvert+\rangle\langle+\rvert$: $\mathrm{tr}(\Pi_+\rho_+) = 1$ since $\rho_+ = \Pi_+$ and $\Pi_+^2 = \Pi_+$; and $\mathrm{tr}(\Pi_+ \cdot \tfrac12 I) = \tfrac12\mathrm{tr}\,\Pi_+ = \tfrac12$.

**Decoherence is exactly the decay of those off-diagonal entries**, and the Bloch picture shows it as the arrow falling from the equator toward the centre. That is the $T_2$ process of [5.1](05-01-quantum-channels-and-decoherence.md), and this table is how you measure it in the lab.

**Example 2 — how much entanglement, from a purity.**

Consider the one-parameter family
$$\lvert\psi(t)\rangle = \cos t\,\lvert00\rangle + \sin t\,\lvert11\rangle.$$

Write $\rho_{AB} = \lvert\psi\rangle\langle\psi\rvert$ and trace out qubit B. Only the diagonal survives, because the off-diagonal term $\cos t\sin t\,\lvert00\rangle\langle11\rvert$ has mismatched B indices and contributes nothing to any block trace:

$$\rho_A = \begin{pmatrix}\cos^2 t & 0\\ 0 & \sin^2 t\end{pmatrix}, \qquad \vec r = (0,0,\cos 2t), \qquad \mathrm{tr}\,\rho_A^2 = \cos^4 t + \sin^4 t = 1 - \tfrac12\sin^2 2t.$$

Read off three cases:

| $t$ | $\rho_A$ | purity | $\lvert\vec r\rvert$ | verdict |
|---|---|---|---|---|
| $0$ | $\lvert0\rangle\langle0\rvert$ | 1 | 1 | product state, no entanglement |
| $\pi/6$ | $\mathrm{diag}(0.75, 0.25)$ | 0.625 | 0.5 | partially entangled |
| $\pi/4$ | $I/2$ | 0.5 | 0 | Bell state, maximal |

So **the purity of one half is a measure of the entanglement of the whole** — for pure joint states, the only measure you need. The Schmidt coefficients of [1.4](01-04-two-qubits-tensor-products-and-entanglement.md) are $\cos t$ and $\sin t$, and $\rho_A$'s eigenvalues are their squares. That is not an accident: the eigenvalues of the reduced state *are* the squared Schmidt coefficients, always, and the standard entanglement measure (the entanglement entropy) is just the Shannon entropy of that list.

## Watch out

- You might think a mixed state's decomposition into pure states tells you which one it "really" is. It does not, and the decomposition is not even unique: $\tfrac12 I$ is a 50/50 mix of $\lvert0\rangle$ and $\lvert1\rangle$, *and* a 50/50 mix of $\lvert+\rangle$ and $\lvert-\rangle$, *and* a uniform average over every point on the sphere. All the same matrix, all the same physics. Only $\rho$ is real; the recipe is not.
- You might think tracing out a qubit is like marginalizing a probability distribution, and therefore harmless bookkeeping. It is the right analogy but it is not harmless: the information is *gone* from your description, irreversibly, and if the discarded qubit was entangled with yours, the loss is what noise *is*. Discarding is the least reversible thing in the theory.
- You might think a pure state cannot have mixed parts, since pure means "maximal knowledge." Maximal knowledge of the **whole** is compatible with zero knowledge of the **parts** — that is the whole content of entanglement, and it has no classical analogue, since classically knowing a joint distribution exactly means knowing each marginal exactly.
- You might think $\mathrm{tr}(A\rho)$ is a different formula from $\langle\psi\vert A\vert\psi\rangle$. It is the same one: $\mathrm{tr}(A\lvert\psi\rangle\langle\psi\rvert) = \langle\psi\vert A\vert\psi\rangle$ by cyclicity of the trace. Every vector formula you know is the $\rho$ formula in disguise.

## One-liner

> A density matrix is a point in the Bloch ball whose radius is how much you know, and half of a Bell pair sits exactly at the centre — pure globally, blank locally.

## Problems

**P1 (🟢)** Write the density matrix, Bloch vector, and purity for each: (a) $\lvert+\rangle$; (b) an equal mixture of $\lvert0\rangle$ and $\lvert1\rangle$; (c) an equal mixture of $\lvert+\rangle$ and $\lvert-\rangle$. Show that (b) and (c) are the *same matrix*, and name one measurement that distinguishes (a) from (b).

**P2 (🟡)** For the Bell state $\lvert\Phi^+\rangle$, compute $\rho_{AB}$ explicitly as a $4\times4$ matrix, then take the partial trace over B using the block-trace rule and confirm $\rho_A = I/2$. Then do the same for $\lvert\Psi^-\rangle$ and explain why all four Bell states give the same reduced state, and what that fact implies about a local observer's ability to tell which Bell state they are part of.

**P3 (🔴, optional)** Prove no-signaling in two parts. (a) Show that if Bob applies a unitary $U_B$ to his qubit, $\rho_A$ is unchanged — use $\mathrm{tr}_B\left[(I\otimes U_B)\rho_{AB}(I\otimes U_B^\dagger)\right] = \mathrm{tr}_B\,\rho_{AB}$ and cyclicity of the trace. (b) Show the same when Bob *measures* in any basis and does not reveal the outcome, so that Alice's state is the outcome-weighted average. Then state what Bob must send Alice before her description changes, and how many bits that is for teleportation.

<details>
<summary>Solutions</summary>

**P1**

(a) $\rho_a = \lvert+\rangle\langle+\rvert = \tfrac12\begin{pmatrix}1&1\\1&1\end{pmatrix}$. Bloch components: $\mathrm{tr}(X\rho_a) = 1$, $\mathrm{tr}(Y\rho_a) = 0$, $\mathrm{tr}(Z\rho_a) = 0$, so $\vec r = (1,0,0)$. Purity: $\rho_a^2 = \rho_a$ (a projector), so $\mathrm{tr}\,\rho_a^2 = 1$. Pure, on the surface at $+\hat x$.

(b) $\rho_b = \tfrac12\lvert0\rangle\langle0\rvert + \tfrac12\lvert1\rangle\langle1\rvert = \tfrac12\begin{pmatrix}1&0\\0&1\end{pmatrix} = \tfrac12 I$. All three Pauli traces vanish, so $\vec r = \vec 0$. Purity $\mathrm{tr}(\tfrac14 I) = \tfrac12$.

(c) $\rho_c = \tfrac12\lvert+\rangle\langle+\rvert + \tfrac12\lvert-\rangle\langle-\rvert = \tfrac14\begin{pmatrix}1&1\\1&1\end{pmatrix} + \tfrac14\begin{pmatrix}1&-1\\-1&1\end{pmatrix} = \tfrac12\begin{pmatrix}1&0\\0&1\end{pmatrix} = \tfrac12 I$.

So $\rho_b = \rho_c$ **exactly**. The two preparations are physically identical: no measurement can tell "I flipped a coin between the poles" from "I flipped a coin between the equatorial states." This is the non-uniqueness of the decomposition, and it is the reason $\rho$ is the right description rather than the recipe.

Distinguishing (a) from (b): measure in the $X$ basis. State (a) gives outcome $+$ with certainty; state (b) gives 50/50. A $Z$-basis measurement would fail, since both give 50/50 there.

**P2** For $\lvert\Phi^+\rangle = \tfrac{1}{\sqrt2}(\lvert00\rangle + \lvert11\rangle)$, the outer product in the ordered basis $\lvert00\rangle,\lvert01\rangle,\lvert10\rangle,\lvert11\rangle$:

$$\rho_{AB} = \tfrac12\begin{pmatrix}1&0&0&1\\0&0&0&0\\0&0&0&0\\1&0&0&1\end{pmatrix} = \tfrac12\begin{pmatrix}M_{00} & M_{01}\\ M_{10} & M_{11}\end{pmatrix}, \quad M_{00} = \begin{pmatrix}1&0\\0&0\end{pmatrix},\ M_{01} = \begin{pmatrix}0&1\\0&0\end{pmatrix},\ M_{10} = \begin{pmatrix}0&0\\1&0\end{pmatrix},\ M_{11} = \begin{pmatrix}0&0\\0&1\end{pmatrix}.$$

Block traces: $\mathrm{tr}\,M_{00} = 1$, $\mathrm{tr}\,M_{01} = 0$, $\mathrm{tr}\,M_{10} = 0$, $\mathrm{tr}\,M_{11} = 1$. So

$$\rho_A = \tfrac12\begin{pmatrix}1&0\\0&1\end{pmatrix} = \tfrac{I}{2}. \checkmark$$

For $\lvert\Psi^-\rangle = \tfrac{1}{\sqrt2}(\lvert01\rangle - \lvert10\rangle)$ the nonzero entries sit at positions $(01,01)$, $(10,10)$ with $+\tfrac12$ and $(01,10)$, $(10,01)$ with $-\tfrac12$. The block traces are again $\mathrm{tr}\,M_{00} = \tfrac12\cdot 1$ from the $\lvert01\rangle$ diagonal term and $\mathrm{tr}\,M_{11} = \tfrac12$ from the $\lvert10\rangle$ one, with the off-diagonal blocks traceless (their entries sit off the diagonal). Again $\rho_A = I/2$.

All four Bell states give $\rho_A = I/2$ because each is maximally entangled, and maximal entanglement *means* the reduced state is maximally mixed (equal Schmidt coefficients). The implication: **a local observer holding one qubit of a Bell pair has no information whatsoever about which Bell state it is** — every measurement they can do gives 50/50. This is the calculation behind P3 of [2.1](02-01-bell-states-and-generating-entanglement.md) and the reason superdense coding requires the encoded qubit to be physically delivered.

**P3**

(a) *Bob applies a unitary.* Pick a basis $\{\lvert j\rangle\}$ for B and write the partial trace as $\rho_A = \sum_j (I\otimes\langle j\rvert)\rho_{AB}(I\otimes\lvert j\rangle)$. After Bob's gate,

$$\rho_A' = \mathrm{tr}_B\!\left[(I\otimes U_B)\,\rho_{AB}\,(I\otimes U_B^\dagger)\right].$$

The partial trace over B of an operator of the form $(I\otimes V)$ acting on both sides can be reorganized because the trace over B is cyclic *within the B factor*: writing the operator in components and summing over $j$,

$$\rho_A' = \sum_j (I\otimes\langle j\rvert U_B)\rho_{AB}(I\otimes U_B^\dagger\lvert j\rangle),$$

and since $\{U_B^\dagger\lvert j\rangle\}$ is itself an orthonormal basis of B, this is the same sum with a relabelled basis. The partial trace is basis-independent, so $\rho_A' = \rho_A$. Nothing Bob does unitarily is visible to Alice.

(b) *Bob measures without telling.* Bob measures in a basis with projectors $\{\Pi_m\}$ on his side. Outcome $m$ occurs with probability $p_m = \mathrm{tr}\left[(I\otimes\Pi_m)\rho_{AB}\right]$ and leaves the joint state $(I\otimes\Pi_m)\rho_{AB}(I\otimes\Pi_m)/p_m$. Alice, ignorant of $m$, holds the weighted average:

$$\rho_A' = \sum_m p_m\,\mathrm{tr}_B\!\left[\frac{(I\otimes\Pi_m)\rho_{AB}(I\otimes\Pi_m)}{p_m}\right] = \mathrm{tr}_B\!\left[\sum_m (I\otimes\Pi_m)\rho_{AB}(I\otimes\Pi_m)\right].$$

The probabilities cancel. Now use $\Pi_m^2 = \Pi_m$ and cyclicity inside the B trace to collapse the two projectors into one, then $\sum_m\Pi_m = I$:

$$\rho_A' = \mathrm{tr}_B\!\left[\left(I\otimes\textstyle\sum_m\Pi_m\right)\rho_{AB}\right] = \mathrm{tr}_B\,\rho_{AB} = \rho_A.$$

So even a measurement — the most violent operation available — changes nothing on Alice's side until the outcome is communicated.

*What Bob must send.* **Classical information**, through an ordinary channel bounded by the speed of light. Alice's description changes only when she learns $m$, at which point she updates from the average to the specific branch. In teleportation ([2.4](02-04-quantum-teleportation.md)) that message is exactly **two bits** — Alice's Bell-measurement outcome — and the protocol's inability to work without them is not an engineering wart but the theorem above, enforcing relativistic causality. Entanglement plus classical communication is a resource; entanglement alone communicates nothing.

</details>

## Connections

- **Backward:** the density matrix, its properties, and von Neumann entropy are built in [`quantum-mechanics` 5.4](../../quantum-mechanics/lessons/05-04-density-matrix-mixed-states.md); this lesson adds only the circuit-side uses. The block-trace formula is a partial trace over a tensor factor, the same index contraction as taking a marginal of a joint distribution in [`prob-stat-refresher` 3.1](../../prob-stat-refresher/lessons/03-01-joint-distributions-covariance.md); and the eigenvalues of $\rho_A$ being squared Schmidt coefficients is the singular-value connection of [`linalg-refresher` 5.2](../../linalg-refresher/lessons/05-02-svd.md).
- **Forward:** [2.3](02-03-the-no-cloning-theorem.md) and [2.4](02-04-quantum-teleportation.md) use no-signaling to explain what entanglement cannot do. [5.1](05-01-quantum-channels-and-decoherence.md) makes noise a map $\rho\mapsto\sum_k E_k\rho E_k^\dagger$, which is precisely "unitary on system plus environment, then trace out the environment" — purification run in reverse.
- **Sideways:** purity and the entanglement entropy of a reduced state are the quantum version of Shannon entropy from [`information-theory` 1.1](../../information-theory/lessons/01-01-entropy-uncertainty-surprise.md); in condensed matter the same reduced-state entropy diagnoses phases through its scaling with subsystem size, which is why area laws appear in [`condensed-matter`](../../condensed-matter/syllabus.md) and why low-entanglement states are classically simulable ([6.3](06-03-sampling-advantage-and-verification.md)).
