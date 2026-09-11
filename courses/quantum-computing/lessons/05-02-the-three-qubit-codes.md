# Quantum Computing · Lesson 5.2: The three-qubit codes

> ⏱ ~15 min · Module 5: Noise and quantum error correction · Builds on: [5.1 (quantum channels and decoherence)](05-01-quantum-channels-and-decoherence.md), [2.3 (the no-cloning theorem)](02-03-the-no-cloning-theorem.md) · Unlocks: [5.3 (the Shor code)](05-03-the-shor-code-and-error-discretization.md)

## Why this matters

Quantum error correction looks impossible for two reasons, and both are real obstacles that this lesson dissolves.

- **You cannot copy the state** ([2.3](02-03-the-no-cloning-theorem.md)), so classical repetition — store three copies, take a majority vote — is unavailable.
- **You cannot look at the state.** Measuring it collapses the superposition you were protecting, so any check you perform must reveal *nothing* about the encoded data.

The three-qubit code solves both at once with one idea: **measure the parities of neighbouring qubits, never the qubits themselves.** "Do qubits 1 and 2 agree?" is answerable without learning whether they are both 0 or both 1, and the answer is exactly what you need to locate a flip.

Get this right and the rest of Module 5 is elaboration. The Shor code ([5.3](05-03-the-shor-code-and-error-discretization.md)) is two of these stacked; the stabilizer formalism ([5.4](05-04-stabilizer-codes-and-the-css-construction.md)) is the algebra of "which parities to measure"; the surface code ([5.5](05-05-fault-tolerance-the-threshold-and-the-surface-code.md)) is a two-dimensional lattice of them.

## The idea

Encode one logical qubit into three physical ones, not by copying but by **spreading**:

$$\alpha\lvert0\rangle + \beta\lvert1\rangle \;\longmapsto\; \alpha\lvert000\rangle + \beta\lvert111\rangle.$$

This is not three copies ([2.3](02-03-the-no-cloning-theorem.md) Example 2) — it is a superposition of two collective configurations, and each qubit alone carries no information about $\alpha$ or $\beta$. Two CNOTs build it.

Now suppose one qubit flips, say the second, giving $\alpha\lvert010\rangle + \beta\lvert101\rangle$. Here is the move. Measure two things:

- $s_1$: "do qubits 1 and 2 agree?"
- $s_2$: "do qubits 2 and 3 agree?"

Both questions have definite answers on *both* terms of the superposition — in $\lvert010\rangle$ qubits 1 and 2 disagree, and in $\lvert101\rangle$ they also disagree. So the measurement returns "disagree, disagree" with certainty and **does not collapse the superposition at all**, because it cannot distinguish the two branches.

That is the whole trick, and it is worth saying twice: the parity checks are chosen so that they give the same answer on $\lvert000\rangle$-like and $\lvert111\rangle$-like branches. They see the *error* and are blind to the *data*.

The two answers locate the flip: disagree-agree means qubit 1, disagree-disagree means qubit 2, agree-disagree means qubit 3, agree-agree means no error. Apply the matching $X$ and you are done, with $\alpha$ and $\beta$ untouched and unknown.

Phase flips get the same treatment for free. Since $HZH = X$ ([1.2](01-02-single-qubit-gates.md)), conjugating the whole scheme by Hadamards converts phase flips into bit flips, giving the **phase-flip code** $\alpha\lvert{+}{+}{+}\rangle + \beta\lvert{-}{-}{-}\rangle$ with parity checks in the $X$ basis. Two codes for the price of one, and neither handles both — which is what [5.3](05-03-the-shor-code-and-error-discretization.md) fixes.

## The formal version

> **The three-qubit bit-flip code.** Logical states $\lvert0_L\rangle = \lvert000\rangle$, $\lvert1_L\rangle = \lvert111\rangle$; the **code space** is their span, a two-dimensional subspace of the eight-dimensional physical space. The encoder is $\mathrm{CNOT}_{1\to2}$ followed by $\mathrm{CNOT}_{1\to3}$.

> **Syndrome measurement.** Measure the two commuting observables
> $$M_1 = Z_1Z_2, \qquad M_2 = Z_2Z_3.$$
> Each has eigenvalues $\pm1$, reads "+1 if the two qubits agree," and acts as $+1$ on the entire code space.

In words: $Z_1Z_2$ is the parity of the first two bits. It commutes with $Z_2Z_3$ ([2.1](02-01-bell-states-and-generating-entanglement.md) P2), so both can be measured simultaneously, and neither distinguishes $\lvert000\rangle$ from $\lvert111\rangle$ — both are $+1$ eigenstates of both. **That is the design requirement**, and in [5.4](05-04-stabilizer-codes-and-the-css-construction.md) it becomes the definition of a stabilizer.

The syndrome table, with $s_i = 0$ meaning outcome $+1$ (the card keeps every code side by side under [codes](../reference.md#codes)):

| $s_1 s_2$ | diagnosis | correction | probability |
|---|---|---|---|
| 0 0 | no error | none | $(1-p)^3$ |
| 1 0 | flip on qubit 1 | $X_1$ | $p(1-p)^2$ |
| 1 1 | flip on qubit 2 | $X_2$ | $p(1-p)^2$ |
| 0 1 | flip on qubit 3 | $X_3$ | $p(1-p)^2$ |

> **Logical error rate.** The code fails when two or three qubits flip, since then the majority is wrong:
> $$p_L = 3p^2(1-p) + p^3 = 3p^2 - 2p^3.$$
> This is below $p$ exactly when $p < 1/2$.

In words: **the code helps whenever the physical error rate is under 50 percent**, and it converts a linear error rate into a quadratic one. At $p = 10^{-2}$ the logical rate is $3\times10^{-4}$ — a factor of 33 improvement for a factor of 3 in qubits, which is the trade error correction always offers.

| $p$ | $p_L = 3p^2-2p^3$ | improvement |
|---|---|---|
| $10^{-1}$ | $2.8\times10^{-2}$ | 3.6× |
| $10^{-2}$ | $3.0\times10^{-4}$ | 33× |
| $10^{-3}$ | $3.0\times10^{-6}$ | 333× |

> **The phase-flip code.** Logical states $\lvert0_L\rangle = \lvert{+}{+}{+}\rangle$, $\lvert1_L\rangle = \lvert{-}{-}{-}\rangle$; encoder is the bit-flip encoder followed by $H$ on each qubit; syndrome observables are $X_1X_2$ and $X_2X_3$. It corrects one $Z$ error and **no** $X$ errors.

> **What neither code does.** The bit-flip code is blind to phase errors: a $Z$ on any qubit takes $\alpha\lvert000\rangle+\beta\lvert111\rangle$ to $\alpha\lvert000\rangle-\beta\lvert111\rangle$, which is inside the code space with both syndromes $+1$. The error is **undetectable and logical**. Symmetrically for the phase-flip code and $X$ errors.

In words: each code protects one basis and sacrifices the other. Since real noise has both components ([5.1](05-01-quantum-channels-and-decoherence.md)), neither code is usable alone, and the fix is to concatenate them ([5.3](05-03-the-shor-code-and-error-discretization.md)).

## Picture

![A five-wire circuit. The top wire carries ket psi and the rest start at ket 0. Two CNOTs from the top wire to wires two and three are enclosed in a blue dashed box labelled encode. Then a small red box labelled E sits on wire two, marked noise. Next, four CNOTs in green write parities onto the two ancilla wires: wires one and two each control a CNOT onto ancilla four, and wires two and three each control a CNOT onto ancilla five; the two ancillas end in meters labelled s-one and s-two, all enclosed in a green dashed box labelled syndrome, parity of neighbours. Below, a four-row table lists the syndrome pairs 00, 10, 11 and 01 with their diagnoses of no error or a flip on qubit one, two or three, the matching correction, and the probability of each. A closing red line gives the logical error rate as three p squared minus two p cubed, better than p whenever p is below one half.](assets/05-02-fig1.svg)

Count the CNOTs in the syndrome block: **four CNOTs and two ancillas**, and no gate ever touches the data qubits in a way that depends on their state. The syndrome extraction is entirely a parity computation onto fresh ancillas, which are then measured and discarded — the data is never looked at, only its internal consistency.

## Worked examples

**Example 1 — one flip, traced through.**

Encode $\lvert\psi_L\rangle = \alpha\lvert000\rangle+\beta\lvert111\rangle$ and suppose an $X$ hits qubit 2:

$$\lvert\psi'\rangle = X_2\lvert\psi_L\rangle = \alpha\lvert010\rangle + \beta\lvert101\rangle.$$

*Syndrome 1, $Z_1Z_2$.* On $\lvert010\rangle$ the first two bits are $0,1$: parity odd, eigenvalue $-1$. On $\lvert101\rangle$ they are $1,0$: also odd, also $-1$. **Both branches give $-1$**, so the measurement returns $s_1 = 1$ deterministically and the superposition survives intact.

*Syndrome 2, $Z_2Z_3$.* On $\lvert010\rangle$: bits $1,0$, odd, $-1$. On $\lvert101\rangle$: bits $0,1$, odd, $-1$. So $s_2 = 1$.

*Diagnosis.* $(s_1,s_2) = (1,1)$ says "qubit 2 disagrees with both its neighbours," which happens exactly when qubit 2 is the flipped one. Apply $X_2$:

$$X_2\lvert\psi'\rangle = \alpha\lvert000\rangle+\beta\lvert111\rangle = \lvert\psi_L\rangle. \checkmark$$

The correction is exact, and at no point did anyone learn $\alpha$ or $\beta$. Note also that the *same* syndrome would have been produced for any $\alpha,\beta$ — which is the formal statement that the measurement gives zero information about the data, and hence cannot disturb it.

*Now the failure case.* Suppose instead a $Z$ hits qubit 1:

$$Z_1\lvert\psi_L\rangle = \alpha\lvert000\rangle - \beta\lvert111\rangle.$$

Compute both syndromes: $Z_1Z_2$ gives $+1$ on both branches (bits agree), and so does $Z_2Z_3$. **Syndrome $(0,0)$ — "no error."** But the state is wrong: the relative phase between $\alpha$ and $\beta$ has flipped, which is a logical $Z$ error. The code is not merely bad at phase errors; it is completely blind to them.

**Example 2 — is the code worth it? The break-even calculation.**

The code uses three physical qubits and four extra gates per round of correction, so it is only worth it if the logical error rate beats the physical one.

*Uncorrected.* One qubit, error rate $p$.

*Corrected.* Failure requires at least two of the three qubits to flip:

$$p_L = \binom32 p^2(1-p) + \binom33p^3 = 3p^2 - 2p^3.$$

*Break-even.* Set $p_L = p$:

$$3p^2 - 2p^3 = p \implies p\left(2p^2 - 3p + 1\right) = 0 \implies p(2p-1)(p-1) = 0,$$

so the nontrivial crossings are $p = 1/2$ and $p = 1$. For $0 < p < 1/2$ the code helps; above $1/2$ it hurts.

This is the **threshold**, in its simplest possible incarnation, and the shape of the answer is the shape of the general theory ([5.5](05-05-fault-tolerance-the-threshold-and-the-surface-code.md)): there is a critical physical error rate below which encoding improves things and above which it makes them worse, because more qubits mean more chances to fail.

Two honest caveats that make the real threshold far below 1/2.

1. **The syndrome circuit is itself noisy.** Four CNOTs and two measurements per round, each with their own error rate, so faulty syndrome extraction can *introduce* errors. Realistic analysis replaces the clean $p<1/2$ with a threshold of around $10^{-2}$ for good codes ([5.5](05-05-fault-tolerance-the-threshold-and-the-surface-code.md)).
2. **This code corrects only bit flips.** With realistic noise containing both $X$ and $Z$ components, it fails on the $Z$ half entirely, so its true logical error rate is dominated by the uncorrected phase errors and is roughly $p$ — no improvement at all. **The three-qubit code is a teaching device, not a usable code.**

## Watch out

- You might think the syndrome measurement collapses the encoded superposition. It cannot, because both logical basis states are $+1$ eigenstates of both syndrome observables. The measurement's outcome is independent of $\alpha$ and $\beta$, and a measurement whose statistics do not depend on a parameter cannot disturb it ([2.2](02-02-density-matrices-and-the-partial-trace.md)).
- You might think the encoding makes three copies. It makes a GHZ-like entangled state whose individual qubits are maximally mixed in the relevant sense and carry no information. The distinction is enforced by no-cloning and is computed explicitly in [2.3](02-03-the-no-cloning-theorem.md) Example 2.
- You might think correcting one error type is half the job. It is much less than half: uncorrected phase errors dominate the logical error rate, so the bit-flip code applied to realistic noise gives essentially no benefit. **A code that corrects only one error type is not a code**, and this is why the first real code needed nine qubits.
- You might think you could measure each qubit and take a majority vote. Measuring the qubits destroys the superposition immediately, returning $\lvert000\rangle$ or $\lvert111\rangle$ with probabilities $\lvert\alpha\rvert^2,\lvert\beta\rvert^2$ and losing the state. The *parities* are measurable; the qubits are not.

## One-liner

> Spread one qubit over three, measure whether neighbours agree rather than what they are, and the syndrome names the flip without ever naming the data.

## Problems

**P1 (🟢)** An $X$ error hits qubit 3 of the encoded state $\alpha\lvert000\rangle+\beta\lvert111\rangle$. Write the damaged state, compute both syndrome values by checking each branch, give the diagnosis and correction, and verify the state is restored. Then state what syndrome a $Z$ error on qubit 3 would give.

**P2 (🟡)** Build the phase-flip code. (a) Write its two logical basis states and its encoding circuit in terms of the bit-flip encoder plus Hadamards. (b) Show that its syndrome observables are $X_1X_2$ and $X_2X_3$, and verify that both logical states are $+1$ eigenstates of both. (c) Show explicitly that this code is blind to $X$ errors, and identify which single-qubit error acts as a logical bit flip on it.

**P3 (🔴, optional)** A qubit in the three-qubit bit-flip code suffers a small coherent over-rotation on qubit 2 rather than a full flip:
$$E = \cos\epsilon\,I + i\sin\epsilon\,X_2.$$
(a) Write the damaged state and compute the probability of each syndrome outcome. (b) Show that in **both** branches the correction restores the logical state exactly, not approximately. (c) State in one sentence what this reveals about why digital error correction works on continuous errors, and connect it to the discretization theorem of [5.3](05-03-the-shor-code-and-error-discretization.md).

<details>
<summary>Solutions</summary>

**P1** *The damaged state.*
$$X_3\left(\alpha\lvert000\rangle+\beta\lvert111\rangle\right) = \alpha\lvert001\rangle + \beta\lvert110\rangle.$$

*Syndrome $Z_1Z_2$.* On $\lvert001\rangle$ the first two bits are $0,0$ — they agree, eigenvalue $+1$. On $\lvert110\rangle$ they are $1,1$ — agree, $+1$. So $s_1 = 0$.

*Syndrome $Z_2Z_3$.* On $\lvert001\rangle$: bits $0,1$, disagree, $-1$. On $\lvert110\rangle$: bits $1,0$, disagree, $-1$. So $s_2 = 1$.

*Diagnosis.* $(0,1)$: qubits 1 and 2 agree, qubits 2 and 3 disagree, so the odd one out is **qubit 3**. Apply $X_3$:
$$X_3\left(\alpha\lvert001\rangle+\beta\lvert110\rangle\right) = \alpha\lvert000\rangle+\beta\lvert111\rangle. \checkmark$$

*A $Z$ on qubit 3.* $Z_3(\alpha\lvert000\rangle+\beta\lvert111\rangle) = \alpha\lvert000\rangle - \beta\lvert111\rangle$. Both syndromes are $+1$ (all bits still agree within each branch), so the syndrome is $(0,0)$: **"no error."** The code reports success while the state has suffered a logical $Z$. Any $Z_i$ gives the same undetectable logical error, which is the code's fatal limitation.

**P2**

(a) Logical states:
$$\lvert0_L\rangle = \lvert{+}{+}{+}\rangle, \qquad \lvert1_L\rangle = \lvert{-}{-}{-}\rangle.$$
Encoder: run the bit-flip encoder (two CNOTs from qubit 1) to make $\alpha\lvert000\rangle+\beta\lvert111\rangle$, then apply $H$ to all three qubits. Since $H\lvert0\rangle = \lvert+\rangle$ and $H\lvert1\rangle = \lvert-\rangle$, the result is $\alpha\lvert{+}{+}{+}\rangle + \beta\lvert{-}{-}{-}\rangle$. ✓

(b) The syndrome observables are the Hadamard conjugates of the originals. Since $HZH = X$ ([1.2](01-02-single-qubit-gates.md)),
$$(H\otimes H\otimes H)\,Z_1Z_2\,(H\otimes H\otimes H) = X_1X_2,$$
and likewise $Z_2Z_3 \to X_2X_3$. They commute for the same even-overlap reason as before.

Verification: $X\lvert+\rangle = \lvert+\rangle$ and $X\lvert-\rangle = -\lvert-\rangle$. On $\lvert{+}{+}{+}\rangle$, $X_1X_2$ gives $(+1)(+1) = +1$. On $\lvert{-}{-}{-}\rangle$ it gives $(-1)(-1) = +1$. Both $+1$. ✓ Same for $X_2X_3$. So the code space is the joint $+1$ eigenspace, exactly as required.

(c) *Blind to $X$.* $X_i\lvert{+}\rangle = \lvert+\rangle$ and $X_i\lvert-\rangle = -\lvert-\rangle$, so
$$X_1\left(\alpha\lvert{+}{+}{+}\rangle+\beta\lvert{-}{-}{-}\rangle\right) = \alpha\lvert{+}{+}{+}\rangle - \beta\lvert{-}{-}{-}\rangle,$$
which is inside the code space with both syndromes $+1$. Undetected, and it is a **logical $Z$** on the encoded qubit (it flips the relative sign of the logical basis states).

*The logical bit flip.* A single $Z_i$ maps $\lvert+\rangle\leftrightarrow\lvert-\rangle$ on that qubit, so $Z_1$ takes $\lvert{+}{+}{+}\rangle$ to $\lvert{-}{+}{+}\rangle$ — outside the code space, hence *detectable*, which is the point of the code. It is $Z_1Z_2Z_3$ — **three** simultaneous phase flips — that maps $\lvert0_L\rangle\leftrightarrow\lvert1_L\rangle$ undetectably, acting as a logical $X$. So the code's distance is 3 in the $Z$ direction and 1 in the $X$ direction, the mirror image of the bit-flip code.

**P3**

(a) Apply $E$ to the encoded state:
$$E\lvert\psi_L\rangle = \cos\epsilon\left(\alpha\lvert000\rangle+\beta\lvert111\rangle\right) + i\sin\epsilon\left(\alpha\lvert010\rangle+\beta\lvert101\rangle\right).$$

The first term lies in the code space (both syndromes $+1$, so $(0,0)$); the second is the $X_2$-error subspace (both syndromes $-1$, so $(1,1)$), as computed in Example 1. The two subspaces are orthogonal, so the syndrome probabilities are the squared norms of the two pieces:

$$P(0,0) = \cos^2\epsilon, \qquad P(1,1) = \sin^2\epsilon.$$

For $\epsilon = 0.3$ radians, that is $0.913$ and $0.087$.

(b) *Branch $(0,0)$.* The measurement projects onto the code space, leaving
$$\frac{\cos\epsilon\left(\alpha\lvert000\rangle+\beta\lvert111\rangle\right)}{\cos\epsilon} = \lvert\psi_L\rangle$$
after renormalization. No correction is applied, and the state is **exactly** right — the $\cos\epsilon$ cancels.

*Branch $(1,1)$.* The measurement projects onto the $X_2$ subspace, leaving
$$\frac{i\sin\epsilon\left(\alpha\lvert010\rangle+\beta\lvert101\rangle\right)}{\sin\epsilon} = i\,X_2\lvert\psi_L\rangle.$$
The diagnosis says "flip on qubit 2," so apply $X_2$:
$$i\,X_2X_2\lvert\psi_L\rangle = i\lvert\psi_L\rangle,$$
which is $\lvert\psi_L\rangle$ up to a global phase — physically identical ([1.1](01-01-the-qubit-and-the-bloch-sphere.md)).

So in both branches the recovered state has fidelity **exactly 1** with the original. No residual error, no dependence on $\epsilon$.

(c) The single sentence: **the syndrome measurement projects a continuous error onto one of finitely many discrete error branches, and the code corrects each branch exactly — so analog errors become digital the moment you measure the syndrome.**

This is the mechanism that makes quantum computing possible at all, and it is worth dwelling on because it has no classical analogue at the level of analog computing. An analog classical computer accumulates small errors without bound, which is why analog computing lost. Here, an error of size $\epsilon$ does not stay size $\epsilon$: the measurement forces it to be either *nothing* (with probability $\cos^2\epsilon$) or a *full* $X_2$ flip (with probability $\sin^2\epsilon$), and both outcomes are correctable. The over-rotation's smallness has been converted from "a small amount of damage" into "a small *probability* of a large, correctable event."

[5.3](05-03-the-shor-code-and-error-discretization.md) generalizes this into the **discretization theorem**: any single-qubit error whatsoever can be written $E = c_0I + c_1X + c_2Y + c_3Z$, so a code that corrects $X$, $Y$, and $Z$ on each qubit corrects *every* single-qubit error, continuous ones included. The calculation you just did is that theorem's simplest instance.

</details>

## Connections

- **Backward:** the encoding is the GHZ-like state of [1.4](01-04-two-qubits-tensor-products-and-entanglement.md) P3, built with the CNOTs of [1.5](01-05-multi-qubit-gates-and-quantum-circuits.md); the "cannot copy, cannot look" constraints are [2.3](02-03-the-no-cloning-theorem.md) and [1.3](01-03-measurement-and-the-born-rule.md); the free phase-flip version comes from $HZH = X$ in [1.2](01-02-single-qubit-gates.md). The syndrome observables commute by the even-overlap rule of [2.1](02-01-bell-states-and-generating-entanglement.md) P2.
- **Forward:** [5.3](05-03-the-shor-code-and-error-discretization.md) concatenates the two three-qubit codes into the nine-qubit Shor code and proves the discretization theorem. [5.4](05-04-stabilizer-codes-and-the-css-construction.md) recognizes $\{Z_1Z_2, Z_2Z_3\}$ as a stabilizer group and builds better codes from that algebra.
- **Sideways:** the bit-flip code is literally the classical three-bit repetition code, and its logical error rate $3p^2-2p^3$ is the majority-vote failure probability from [`information-theory` 3.3](../../information-theory/lessons/03-03-noisy-channel-coding-achievability.md) — the quantum content is entirely in *how* the vote is taken, via parities rather than by reading the bits. The parity-check matrix language carries over exactly from the linear codes of [`communications` 4.3](../../communications/lessons/04-03-block-codes.md).
