# Quantum Computing · Lesson 1.5: Multi-qubit gates and quantum circuits

> ⏱ ~15 min · Module 1: Qubits, gates, and circuits · Builds on: [1.4 (two qubits and entanglement)](01-04-two-qubits-tensor-products-and-entanglement.md), [1.2 (single-qubit gates)](01-02-single-qubit-gates.md) · Unlocks: [1.6 (universal gate sets)](01-06-universal-gate-sets-and-circuit-synthesis.md), [2.1 (Bell states)](02-01-bell-states-and-generating-entanglement.md)

## Why this matters

Single-qubit gates alone are useless. They keep product states product, so a circuit of them is $n$ independent classical-ish spheres and a classical computer simulates it in linear time. **The entire computational power of the model comes from two-qubit gates**, and in practice from exactly one: the controlled-NOT.

This lesson is also where circuit diagrams stop being decoration and become the notation you compute in. By the end you should be able to look at a five-gate circuit and simulate it without writing a single $4\times4$ matrix, because matrices are the slow way and basis-state tracking is the fast way.

## The idea

A two-qubit gate is a $4\times4$ unitary, and the useful ones are **controlled**: pick a control wire and a target wire, and do something to the target only on the branch where the control is 1.

The word "branch" is doing the work. Classically, "only if the control is 1" is an if-statement, and the control is either 1 or it isn't. Quantum mechanically the control can be in superposition, and then the gate happens on *part* of the state and not on the rest. That is not an if-statement; it is the machine forking, and the fork is what produces entanglement:

$$\mathrm{CNOT}\,\lvert+\rangle\lvert0\rangle = \mathrm{CNOT}\,\tfrac{1}{\sqrt2}\left(\lvert00\rangle + \lvert10\rangle\right) = \tfrac{1}{\sqrt2}\left(\lvert00\rangle + \lvert11\rangle\right).$$

Two gates in, a maximally entangled state out. That two-gate circuit — $H$ then CNOT — is the most-used circuit in the subject, and you will recognize it in teleportation, in error correction, and in every discussion of Bell tests.

A diagram is read like a score: one horizontal line per qubit, time flowing left to right, gates as boxes, a filled dot for a control and $\oplus$ for a NOT target. The only trap is that **diagrams read left to right while matrix products read right to left**, so a circuit "first $A$ then $B$" is the matrix $BA$.

## The formal version

Applying a single-qubit gate $U$ to qubit $k$ of an $n$-qubit register means tensoring with identities:

$$U^{(k)} = I \otimes \cdots \otimes \underbrace{U}_{\text{slot }k} \otimes\cdots\otimes I.$$

In words: the gate is the identity on every wire it does not touch. This is the formal version of "the other wires just pass through the diagram."

> **CNOT.** With qubit 0 the control and qubit 1 the target, $\mathrm{CNOT}\lvert x, y\rangle = \lvert x,\, y\oplus x\rangle$, where $\oplus$ is XOR. As a matrix in the basis $\lvert00\rangle,\lvert01\rangle,\lvert10\rangle,\lvert11\rangle$:
> $$\mathrm{CNOT} = \begin{pmatrix}1&0&0&0\\0&1&0&0\\0&0&0&1\\0&0&1&0\end{pmatrix}.$$

In words: leave the target alone if the control reads 0, flip it if the control reads 1. The matrix is a permutation of basis states, which makes it the reversible version of the classical XOR gate.

The general form, for any single-qubit $U$:

> **Controlled-$U$.** $\mathrm{C}U = \lvert0\rangle\langle0\rvert \otimes I + \lvert1\rangle\langle1\rvert\otimes U = \begin{pmatrix}I & 0\\ 0 & U\end{pmatrix}$ in block form.

In words: identity in the control-is-0 block, $U$ in the control-is-1 block. The block form is worth internalizing, because it makes controlled gates' phases obvious — the phase of $U$ appears in only one block, which is precisely why it becomes *relative* ([3.1](03-01-oracles-reversibility-and-phase-kickback.md)).

The standard two- and three-qubit library:

| Gate | Action | Note |
|---|---|---|
| CNOT | $\lvert x,y\rangle \to \lvert x, y\oplus x\rangle$ | the workhorse entangler |
| CZ | $\lvert x,y\rangle \to (-1)^{xy}\lvert x,y\rangle$ | **symmetric** in its two wires |
| SWAP | $\lvert x,y\rangle\to\lvert y,x\rangle$ | equals three CNOTs |
| Toffoli (CCNOT) | $\lvert x,y,z\rangle \to \lvert x,y,z\oplus xy\rangle$ | reversible AND; classically universal |
| Fredkin (CSWAP) | swap the last two if the first is 1 | reversible; used for state comparison |

Three identities repay memorizing:

$$\mathrm{CNOT} = (I\otimes H)\,\mathrm{CZ}\,(I\otimes H), \qquad (H\otimes H)\,\mathrm{CNOT}_{0\to1}\,(H\otimes H) = \mathrm{CNOT}_{1\to 0}, \qquad \mathrm{SWAP} = \mathrm{CNOT}_{0\to1}\mathrm{CNOT}_{1\to0}\mathrm{CNOT}_{0\to1}.$$

In words, in order: a CNOT is a CZ with Hadamards on the target, so hardware that natively does one does both; **conjugating a CNOT by Hadamards on both wires reverses which wire is the control**, so "control" is a basis-dependent label, not a physical direction; and a swap needs no new hardware.

## Picture

![Top left: a two-wire circuit starting from ket 0 on both wires, with an H box on the top wire followed by a CNOT whose control dot is on the top wire and whose target circle-plus is on the bottom, annotated that the output is ket 00 plus ket 11 over root two and that one H plus one CNOT gives maximal entanglement. Top right: three two-wire gate symbols side by side, a CNOT with a control dot and target circle-plus, a CZ with two filled dots, and a SWAP with two crosses joined by a line. Bottom left: a three-wire Toffoli with two control dots and one target circle-plus. Bottom middle: three CNOTs in a row with alternating control wires, labelled three CNOTs equals one SWAP. Bottom right: a controlled-U, a control dot on the top wire connected to a box labelled U on the bottom wire.](assets/01-05-fig1.svg)

Note what the CZ symbol tells you: **two identical dots, no distinguished target.** That is not a drawing shortcut, it is the fact that CZ is symmetric — $(-1)^{xy}$ does not care which bit you call the control. CNOT looks asymmetric only because the computational basis breaks the symmetry, and the middle identity above dissolves even that.

## Worked examples

**Example 1 — simulate a three-gate circuit without matrices.**

Circuit: start at $\lvert00\rangle$, apply $H$ to qubit 0, then CNOT (0 controls 1), then $Z$ to qubit 0.

Track basis states, one line per gate.

*After $H$ on qubit 0:* $\lvert0\rangle\to\lvert+\rangle$, so
$$\tfrac{1}{\sqrt2}\lvert00\rangle + \tfrac{1}{\sqrt2}\lvert10\rangle.$$

*After CNOT:* flip qubit 1 wherever qubit 0 is 1. The $\lvert00\rangle$ term is untouched; the $\lvert10\rangle$ term becomes $\lvert11\rangle$:
$$\tfrac{1}{\sqrt2}\lvert00\rangle + \tfrac{1}{\sqrt2}\lvert11\rangle = \lvert\Phi^+\rangle.$$

*After $Z$ on qubit 0:* multiply by $-1$ wherever qubit 0 is 1:
$$\tfrac{1}{\sqrt2}\lvert00\rangle - \tfrac{1}{\sqrt2}\lvert11\rangle = \lvert\Phi^-\rangle.$$

Three lines, no matrix multiplication. The general recipe: **a controlled-$X$ permutes basis labels, a controlled-$Z$ (or any diagonal gate) only touches signs, and a Hadamard splits each basis state into two.** Only the Hadamard grows the number of terms, which is why circuit simulation cost is governed by how many Hadamards you have crossed — and why the Clifford circuits of [5.4](05-04-stabilizer-codes-and-the-css-construction.md) are classically simulable despite being full of them.

Determinant check on the output: $C = \tfrac{1}{\sqrt2}\begin{pmatrix}1&0\\0&-1\end{pmatrix}$, $\det C = -\tfrac12$. Maximally entangled, as expected.

**Example 2 — the control direction is a basis choice.**

Claim: $\mathrm{CNOT}\,\lvert+\rangle\lvert-\rangle = \lvert-\rangle\lvert-\rangle$. Expand and see.

$$\lvert+\rangle\lvert-\rangle = \tfrac12\left(\lvert00\rangle - \lvert01\rangle + \lvert10\rangle - \lvert11\rangle\right).$$

Apply CNOT, flipping qubit 1 on the terms where qubit 0 is 1. The first two terms are untouched; $\lvert10\rangle\to\lvert11\rangle$ and $\lvert11\rangle\to\lvert10\rangle$, so the last two become $+\lvert11\rangle - \lvert10\rangle$:

$$\tfrac12\left(\lvert00\rangle - \lvert01\rangle - \lvert10\rangle + \lvert11\rangle\right) = \tfrac12(\lvert0\rangle - \lvert1\rangle)\otimes(\lvert0\rangle-\lvert1\rangle) = \lvert-\rangle\lvert-\rangle.$$

So the gate left the *target* alone and flipped the *control* — in the $X$ basis, the arrow points the other way. This is the middle identity of the formal section, seen concretely, and it has two consequences that matter:

1. **Error propagation is directional and basis-dependent.** A bit-flip error on the control of a CNOT spreads to the target; a *phase*-flip error on the target spreads back to the control. Fault-tolerant circuit design in [5.5](05-05-fault-tolerance-the-threshold-and-the-surface-code.md) is largely the discipline of tracking which way errors travel.
2. **There is no "information flow direction" in a CNOT.** It is a symmetric interaction that our choice of basis dresses up as a one-way conditional.

## Watch out

- You might think a controlled gate "measures" the control to decide what to do. It does not, and it must not: measuring would collapse the superposition and destroy the entanglement the gate is there to create. A controlled gate acts on all branches simultaneously and coherently.
- You might think CNOT's control wire is unaffected. In the computational basis it is. In any other basis it is not — Example 2 is the proof. "The control is unchanged" is a statement about basis states only.
- You might think ordering conventions are a detail. They are the single most common source of wrong answers in hand simulation. This course fixes: qubit 0 leftmost and most significant, so $\lvert q_0 q_1 q_2\rangle$ has integer index $4q_0 + 2q_1 + q_2$. Some textbooks and most quantum SDKs use the opposite (little-endian) convention, which transposes every multi-qubit matrix you look up.
- You might think a Toffoli is "just" a CNOT with an extra control. It is much more expensive: in the standard fault-tolerant gate set a Toffoli costs several $T$ gates ([1.6](01-06-universal-gate-sets-and-circuit-synthesis.md)), and since $T$ gates dominate the cost of a fault-tolerant computation, **Toffoli count is the currency of resource estimation** ([6.6](06-06-resource-estimation-and-the-state-of-the-field.md)).

## One-liner

> Single-qubit gates spin spheres and change nothing important; one controlled gate forks the machine, and that fork is where all the power is.

## Problems

**P1 (🟢)** Compute the output of CNOT (qubit 0 controlling qubit 1) on each of these inputs, and for each say whether the result is entangled: (a) $\lvert+\rangle\lvert0\rangle$, (b) $\lvert0\rangle\lvert+\rangle$, (c) $\lvert-\rangle\lvert+\rangle$. Explain the pattern in one sentence.

**P2 (🟡)** Verify $\mathrm{SWAP} = \mathrm{CNOT}_{0\to1}\,\mathrm{CNOT}_{1\to0}\,\mathrm{CNOT}_{0\to1}$ by tracing all four computational basis states through the three gates, writing the intermediate bit pairs. Then explain why this identity does not violate the no-cloning theorem, even though a SWAP appears to "move" an unknown state from one wire to another.

**P3 (🔴, optional)** Show that a Toffoli gate whose target is prepared in the state $\lvert-\rangle$ acts as
$$\mathrm{CCNOT}\,\lvert x\rangle\lvert y\rangle\lvert-\rangle = (-1)^{xy}\lvert x\rangle\lvert y\rangle\lvert-\rangle$$
for all $x,y\in\{0,1\}$, so that the target is left untouched and the AND of the controls appears as a **phase** on the control register. Then state what two-qubit gate this reproduces, and explain why this construction is the template for every oracle-based algorithm in Module 3.

<details>
<summary>Solutions</summary>

**P1**

(a) $\lvert+\rangle\lvert0\rangle = \tfrac{1}{\sqrt2}(\lvert00\rangle+\lvert10\rangle) \to \tfrac{1}{\sqrt2}(\lvert00\rangle+\lvert11\rangle) = \lvert\Phi^+\rangle$. Coefficient table $\tfrac{1}{\sqrt2}\begin{pmatrix}1&0\\0&1\end{pmatrix}$, determinant $1/2$: **maximally entangled.**

(b) $\lvert0\rangle\lvert+\rangle = \tfrac{1}{\sqrt2}(\lvert00\rangle+\lvert01\rangle)$. Qubit 0 is never 1, so the gate does nothing: output $\lvert0\rangle\lvert+\rangle$. Determinant of $\tfrac{1}{\sqrt2}\begin{pmatrix}1&1\\0&0\end{pmatrix}$ is 0: **product.**

(c) $\lvert-\rangle\lvert+\rangle = \tfrac12(\lvert00\rangle+\lvert01\rangle-\lvert10\rangle-\lvert11\rangle)$. Flipping qubit 1 on the last two terms gives $\tfrac12(\lvert00\rangle+\lvert01\rangle-\lvert11\rangle-\lvert10\rangle)$, the same set of terms with the same signs, so the state is unchanged: $\lvert-\rangle\lvert+\rangle$, **product.**

The pattern: **CNOT entangles only when the control is in superposition and the target is not already in an $X$-basis eigenstate.** In (b) the control has nothing to superpose. In (c) the target sits on the $\hat x$ axis, and a target in $\lvert+\rangle$ is a fixed point of $X$, so there is nothing for the control to correlate with. Entanglement requires the gate to distinguish the two branches, and in both (b) and (c) it cannot.

**P2** Trace each basis state. Write the pair as $(q_0, q_1)$ and let $A = \mathrm{CNOT}_{0\to1}$, $B = \mathrm{CNOT}_{1\to0}$.

| start | after $A$ | after $B$ | after $A$ |
|---|---|---|---|
| $(0,0)$ | $(0,0)$ | $(0,0)$ | $(0,0)$ |
| $(0,1)$ | $(0,1)$ | $(1,1)$ | $(1,0)$ |
| $(1,0)$ | $(1,1)$ | $(0,1)$ | $(0,1)$ |
| $(1,1)$ | $(1,0)$ | $(1,0)$ | $(1,1)$ |

Reading start against finish: $(0,1)\leftrightarrow(1,0)$ and the other two fixed. That is exactly SWAP. In XOR algebra the same computation is $(x,y) \to (x, x\oplus y) \to (x\oplus x\oplus y,\, x\oplus y) = (y, x\oplus y) \to (y, y\oplus x\oplus y) = (y,x)$.

No conflict with no-cloning ([2.3](02-03-the-no-cloning-theorem.md)): SWAP **moves** a state, it does not copy it. After the swap, wire 0 holds what wire 1 held and wire 1 holds what wire 0 held — there is exactly one copy of each state, in a new place. Cloning would require ending with the *same* unknown state on both wires, and that is what is forbidden. Teleportation ([2.4](02-04-quantum-teleportation.md)) is likewise a move, not a copy, and this is why the original is necessarily destroyed.

**P3** Write $\lvert-\rangle = \tfrac{1}{\sqrt2}(\lvert0\rangle - \lvert1\rangle)$ and let $a = xy \in \{0,1\}$ denote the AND of the controls. The Toffoli maps $\lvert x,y,z\rangle\to\lvert x,y,z\oplus a\rangle$, so acting on the superposition in the third slot:

$$\lvert x,y\rangle\otimes\tfrac{1}{\sqrt2}\left(\lvert0\rangle - \lvert1\rangle\right) \;\longrightarrow\; \lvert x,y\rangle\otimes\tfrac{1}{\sqrt2}\left(\lvert 0\oplus a\rangle - \lvert 1\oplus a\rangle\right).$$

Two cases. If $a = 0$, nothing happens and we recover $\lvert-\rangle$. If $a=1$, the two terms exchange places, giving $\tfrac{1}{\sqrt2}(\lvert1\rangle - \lvert0\rangle) = -\lvert-\rangle$. Combining both cases:

$$\lvert x,y\rangle\lvert-\rangle \to (-1)^{a}\lvert x,y\rangle\lvert-\rangle = (-1)^{xy}\lvert x,y\rangle\lvert-\rangle.$$

The third qubit is returned exactly as it was found, and the value $xy$ has become a sign on the first two qubits. Since $(-1)^{xy}$ is precisely the action of **CZ**, this construction reproduces a controlled-$Z$ on the control register at the cost of one Toffoli and one ancilla in $\lvert-\rangle$.

Why this is the template: $\lvert-\rangle$ is the $(-1)$-eigenvector of $X$, so any gate that conditionally applies $X$ to it gets paid back in a phase instead. Replace "the AND of two bits" with "the value of an arbitrary function $f$" and you have **phase kickback** ([3.1](03-01-oracles-reversibility-and-phase-kickback.md)): an oracle that computes $f$ into an ancilla becomes an oracle that *stamps* $(-1)^{f(x)}$ onto the input register, leaving no garbage behind. Deutsch–Jozsa, Bernstein–Vazirani, Simon, and Grover all begin with exactly this move, and the reason it works is the two-line case analysis above.

</details>

## Connections

- **Backward:** the block form $\mathrm{C}U = \begin{pmatrix}I&0\\0&U\end{pmatrix}$ is block-diagonal, so its eigenvalues are the union of those of $I$ and $U$ — a fact from [`linalg-refresher` 3.1](../../linalg-refresher/lessons/03-01-eigenvalues-eigenvectors.md) that phase estimation exploits directly ([4.2](04-02-quantum-phase-estimation.md)). The Toffoli's role as a classically universal reversible gate is the reversible-computing counterpart of NAND's universality in [`digital-logic` 1.3](../../digital-logic/lessons/01-03-boolean-algebra-logic-gates.md).
- **Forward:** [1.6](01-06-universal-gate-sets-and-circuit-synthesis.md) asks how many of these gates it takes to build an arbitrary unitary and proves that CNOT plus single-qubit gates is enough. [2.1](02-01-bell-states-and-generating-entanglement.md) runs the $H$-then-CNOT circuit backwards to *measure* in the Bell basis, which is the enabling step of teleportation.
- **Sideways:** the $\oplus$ arithmetic of CNOT and Toffoli is linear algebra over $\mathbb{F}_2$, the same field as the classical linear codes of [`communications` 4.3](../../communications/lessons/04-03-block-codes.md); the CSS construction in [5.4](05-04-stabilizer-codes-and-the-css-construction.md) uses that coincidence to turn two classical codes into one quantum code.
