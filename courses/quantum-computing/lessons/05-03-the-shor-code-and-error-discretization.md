# Quantum Computing · Lesson 5.3: The Shor code and error discretization

> ⏱ ~15 min · Module 5: Noise and quantum error correction · Builds on: [5.2 (the three-qubit codes)](05-02-the-three-qubit-codes.md), [5.1 (quantum channels)](05-01-quantum-channels-and-decoherence.md) · Unlocks: [5.4 (stabilizer codes)](05-04-stabilizer-codes-and-the-css-construction.md)

## Why this matters

[5.2](05-02-the-three-qubit-codes.md) left a hole. The bit-flip code is blind to phase errors, the phase-flip code is blind to bit flips, and real noise has both. Neither code is usable.

Shor's nine-qubit code plugs the hole by the obvious construction — **use one code inside the other** — and that would be a footnote if it were all that happened. What makes this lesson essential is the theorem it forces you to prove along the way.

Real errors are not discrete. A qubit does not helpfully suffer an exact $X$ gate; it suffers a small over-rotation, a partial relaxation, a slight coherent drift. There is a continuum of possible errors and only finitely many corrections. So how can *any* finite code work?

The answer is the **discretization theorem**: every single-qubit error, however continuous, is a linear combination of just four operators $\{I, X, Y, Z\}$. A code that corrects those four corrects everything. And the mechanism is the syndrome measurement itself, which projects a continuous error onto one of finitely many discrete branches. **Measuring the syndrome digitizes the noise**, and that is the single fact that makes fault-tolerant quantum computing possible rather than an analog-computing fantasy.

## The idea

**The construction.** Take one qubit and encode it with the phase-flip code, so it becomes three qubits in the $\lvert\pm\rangle$ basis:

$$\alpha\lvert0\rangle + \beta\lvert1\rangle \;\longmapsto\; \alpha\lvert{+}{+}{+}\rangle + \beta\lvert{-}{-}{-}\rangle.$$

Now take each of those three qubits and encode *it* with the bit-flip code, using $\lvert\pm\rangle \to \tfrac{1}{\sqrt2}(\lvert000\rangle\pm\lvert111\rangle)$. Three blocks of three: nine qubits.

Each inner block corrects one bit flip within itself. The outer structure across blocks corrects one phase flip. Together they correct any single $X$, any single $Z$, and hence — since $Y = iXZ$ — any single $Y$ too. **One arbitrary error on one qubit, fully corrected.**

**The theorem.** Here is why "any $X$, $Y$, or $Z$" is the same as "anything." Any $2\times2$ matrix can be written in the Pauli basis:

$$E = c_0 I + c_1X + c_2Y + c_3Z.$$

That is not a physics fact; it is linear algebra — the four Paulis are a basis for $2\times2$ matrices. So an arbitrary error acting on the encoded state produces a *superposition* of four outcomes: nothing happened, an $X$ happened, a $Y$ happened, a $Z$ happened.

Now measure the syndrome. The four possibilities have different syndromes, so the measurement collapses the superposition onto one of them, with the amplitudes $c_k$ becoming probabilities. Whichever branch you land in, you know which Pauli to undo, and you undo it **exactly**. The continuous parameters $c_k$ never appear in the recovered state — they only set which branch you got.

This is the deepest idea in the module, and the reason is worth stating: a small continuous error does not produce a small amount of damage. It produces a **small probability of a large, correctable event.** Analog error has been converted into digital error, and digital error is correctable.

## The formal version

> **The Shor nine-qubit code.** Logical states
> $$\lvert0_L\rangle = \frac{1}{2\sqrt2}\left(\lvert000\rangle+\lvert111\rangle\right)^{\otimes3}, \qquad \lvert1_L\rangle = \frac{1}{2\sqrt2}\left(\lvert000\rangle-\lvert111\rangle\right)^{\otimes3}.$$
> It is a $[[9,1,3]]$ code: 9 physical qubits, 1 logical qubit, distance 3, correcting any single-qubit error.

> **Syndrome observables.** Six $Z$-type checks, two within each block, detect bit flips:
> $$Z_1Z_2,\ Z_2Z_3;\quad Z_4Z_5,\ Z_5Z_6;\quad Z_7Z_8,\ Z_8Z_9.$$
> Two $X$-type checks, comparing whole blocks, detect phase flips:
> $$X_1X_2X_3X_4X_5X_6,\qquad X_4X_5X_6X_7X_8X_9.$$
> All eight commute and all act as $+1$ on the code space, so $k = 9 - 8 = 1$ logical qubit.

In words: the inner checks ask "do neighbours within a block agree?" and the outer checks ask "do whole blocks agree in phase?" The eight answers pin down any single-qubit error. Notice the counting: eight independent checks on nine qubits leave exactly one logical qubit, which is the general rule made precise in [5.4](05-04-stabilizer-codes-and-the-css-construction.md).

Now the theorem that justifies the whole enterprise:

> **Discretization of errors.** Let $\{I, X, Y, Z\}$ be the Pauli basis. Any single-qubit operator satisfies $E = c_0I + c_1X + c_2Y + c_3Z$ for complex $c_k$. Consequently, **a code that corrects $X$, $Y$, and $Z$ on each qubit corrects every single-qubit error**, including non-unitary ones and continuous ones.

**Why.** Acting on an encoded state, $E\lvert\psi_L\rangle = c_0\lvert\psi_L\rangle + c_1X\lvert\psi_L\rangle+c_2Y\lvert\psi_L\rangle+c_3Z\lvert\psi_L\rangle$. The four terms lie in **orthogonal** subspaces, one per distinct syndrome. So the syndrome measurement projects onto one term, with probability $\lvert c_k\rvert^2$ (up to normalization), and the corresponding correction restores $\lvert\psi_L\rangle$ exactly. $\blacksquare$

The condition on the code for this to work is worth having by name:

> **Knill–Laflamme conditions.** Let $P$ project onto the code space and $\{E_i\}$ be the set of errors to be corrected. A recovery operation exists if and only if
> $$P\,E_i^\dagger E_j\,P = \alpha_{ij}\,P$$
> for some Hermitian matrix $\alpha$. Equivalently: no correctable error maps one code state onto another, and the "damage" $E_i^\dagger E_j$ carries no information about which code state it hit.

In words: distinct correctable errors must send the code space to distinguishable places, and no error may reveal anything about the encoded data. The second half is the no-cloning constraint of [5.2](05-02-the-three-qubit-codes.md) in operator form — **$\alpha_{ij}$ must not depend on which code state you are in.**

Two more standard facts, stated for use later; the card lists each code's parameters under [codes](../reference.md#codes):

> **Distance and correction capacity.** A code with distance $d$ detects $d-1$ errors and corrects $\lfloor(d-1)/2\rfloor$. So $d = 3$ corrects one error, $d=5$ corrects two, and so on.

> **The quantum Hamming/Singleton bounds.** A code correcting one arbitrary error on $n$ qubits needs $n \ge 5$ for $k=1$. The $[[5,1,3]]$ code achieves it, so **five qubits is optimal**, and Shor's nine is not.

In words: nine qubits was the first construction, not the best one. The five-qubit code and the seven-qubit Steane code ([5.4](05-04-stabilizer-codes-and-the-css-construction.md)) both beat it, and Steane wins in practice because its structure allows cheaper fault-tolerant gates.

## Picture

![Top: a chain showing that alpha ket 0 plus beta ket 1 maps to alpha ket plus-plus-plus plus beta ket minus-minus-minus, and then each ket plus or minus maps to ket 000 plus or minus ket 111 over root two, giving nine physical qubits. Middle: three dashed orange boxes, each containing three blue circles, labelled block 1, block 2 and block 3, each correcting one bit flip, with a green note that across blocks the code corrects one phase flip and that the parameters are 9, 1, 3. Bottom: a section headed DISCRETIZATION stating that any single-qubit error is a combination of just four operators, E equals c-zero I plus c-one X plus c-two Y plus c-three Z, so a code correcting X, Y and Z on every qubit corrects every single-qubit error including continuous over-rotations, because the syndrome measurement digitizes them.](assets/05-03-fig1.svg)

The nesting is the construction and the bottom line is the theorem. Keep them separate in your head: the nine-qubit layout is a historical first attempt that was quickly beaten, while the discretization theorem is permanent and underlies every code ever built.

## Worked examples

**Example 1 — correct an arbitrary error, not a Pauli one.**

Suppose qubit 5 suffers the error

$$E = \begin{pmatrix}1 & 0.1\\ 0.05 & 0.9\end{pmatrix},$$

which is not unitary, not a Pauli, and not even normalized in any convenient way. Decompose it in the Pauli basis using $c_k = \tfrac12\mathrm{tr}(\sigma_kE)$:

$$c_0 = \tfrac12(1+0.9) = 0.95, \qquad c_1 = \tfrac12(0.1+0.05) = 0.075, \qquad c_2 = 0.025\,i, \qquad c_3 = \tfrac12(1-0.9) = 0.05.$$

Check by reassembling: the diagonal entries are $c_0\pm c_3 = 1.0$ and $0.9$ ✓, and the off-diagonal entries are $c_1 \pm 0.025 = 0.1$ and $0.05$ ✓ (the $0.025$ coming from $c_2Y$). So the decomposition exists and has four terms. Acting on the encoded state,

$$E_5\lvert\psi_L\rangle = c_0\lvert\psi_L\rangle + c_1 X_5\lvert\psi_L\rangle + c_2Y_5\lvert\psi_L\rangle + c_3Z_5\lvert\psi_L\rangle.$$

The four terms have four distinct syndromes:

| branch | $Z$-checks in block 2 | $X$-checks | syndrome distinct? |
|---|---|---|---|
| $I$ | $(+,+)$ | $(+,+)$ | — |
| $X_5$ | $(-,-)$ | $(+,+)$ | yes |
| $Z_5$ | $(+,+)$ | $(-,-)$ | yes |
| $Y_5 = iX_5Z_5$ | $(-,-)$ | $(-,-)$ | yes |

Since all four syndromes differ, the measurement collapses to one branch. Say it returns the $Y_5$ syndrome, with probability $\lvert c_2\rvert^2/\mathcal N$. Apply $Y_5$ — and since $Y^2 = I$, the state becomes

$$Y_5\left(c_2 Y_5\lvert\psi_L\rangle\right)/\lvert c_2\rvert = e^{i\theta}\lvert\psi_L\rangle,$$

exactly the original up to a global phase. **The coefficients $c_k$ have vanished from the answer.** They determined *which* correction was needed, and nothing else.

Note what this means practically: **the code does not need to know the noise model.** You never measure $E$, never characterize the channel, never calibrate anything. The syndrome tells you what to do, whatever the physics was.

**Example 2 — count the resources and see why nine is not the answer.**

*Overhead.* Nine physical qubits per logical qubit, plus ancillas for eight syndrome measurements — typically 8 more, reusable, so about 17 physical qubits in play.

*Logical error rate.* The code fails when two or more errors occur in a way it cannot correct. To leading order in the physical error rate $p$, the failure probability is $O(p^2)$ with a combinatorial prefactor counting the harmful weight-2 error patterns. For the Shor code that prefactor is large (there are many bad pairs), giving roughly

$$p_L \approx 36\,p^2$$

for depolarizing noise, so the code helps only when $36p^2 < p$, i.e. $p < 1/36 \approx 0.028$. **The break-even threshold is a few percent**, not 50 percent as the naive three-qubit calculation suggested — because more qubits mean more ways to fail.

*Compare the alternatives.*

| code | $n$ | corrects | note |
|---|---|---|---|
| 3-qubit bit-flip | 3 | one $X$ | not a real code — blind to $Z$ |
| Shor | 9 | one arbitrary | first construction, 1995 |
| $[[5,1,3]]$ | 5 | one arbitrary | **optimal** qubit count |
| Steane $[[7,1,3]]$ | 7 | one arbitrary | best for fault-tolerant gates ([5.4](05-04-stabilizer-codes-and-the-css-construction.md)) |
| surface code, distance $d$ | $\approx 2d^2$ | $\lfloor(d-1)/2\rfloor$ | best threshold, what gets built ([5.5](05-05-fault-tolerance-the-threshold-and-the-surface-code.md)) |

Why does the field use the surface code rather than the optimal five-qubit code? Because **qubit count is not the binding constraint — threshold and locality are.** The five-qubit code needs weight-4 checks among all five qubits, which requires long-range connectivity; the surface code needs only nearest-neighbour checks on a 2D grid, which is what hardware can actually build. Its threshold is around 1 percent, an order of magnitude better than concatenated small codes, and that difference decides everything.

## Watch out

- You might think a continuous error causes continuous damage that accumulates. The syndrome measurement prevents exactly that: it forces the error to be either nothing or a full Pauli, both correctable. **Error correction is a repeated projection**, and it is the projection, not the correction, that does the essential work.
- You might think the code must be told the noise model. It must not and does not. The discretization theorem covers *all* single-qubit errors simultaneously, so one recovery procedure handles amplitude damping, dephasing, coherent drift, and errors nobody characterized. Codes tailored to a known noise bias can do better, but generic codes do not fail without that knowledge.
- You might think nine qubits is the answer, since it is the famous one. It is the first answer. Five is optimal for qubit count, seven is better for gates, and the surface code — which is enormously *less* efficient per logical qubit — is what anyone actually builds, for the reasons in Example 2.
- You might think correcting one error per code block is enough for a long computation. It is not: over $10^9$ gates you will see many errors, and the point of the threshold theorem ([5.5](05-05-fault-tolerance-the-threshold-and-the-surface-code.md)) is that **repeated** rounds of correction on a large-distance code suppress the logical rate arbitrarily. Single-shot correction of a single error is the building block, not the goal.

## One-liner

> Nest a bit-flip code inside a phase-flip code and you correct anything on one qubit — because any error is a combination of $I$, $X$, $Y$, $Z$, and the syndrome measurement collapses that combination onto one correctable branch.

## Problems

**P1 (🟢)** Write out $\lvert0_L\rangle$ for the Shor code explicitly as a superposition of nine-qubit computational basis states, and count how many terms it has. Then state which syndrome observables would fire for an $X$ error on qubit 5 and for a $Z$ error on qubit 5, and explain why those two syndromes are different.

**P2 (🟡)** Prove the discretization theorem for a concrete non-Pauli error. Take $E = \cos\epsilon\,I - i\sin\epsilon\,Z$ (a small coherent $Z$-rotation) acting on qubit 1 of a Shor-encoded state. (a) Identify the Pauli decomposition and its coefficients. (b) Give the two possible syndromes and their probabilities. (c) Show the state is recovered exactly in both branches, and state where the parameter $\epsilon$ ended up.

**P3 (🔴, optional)** The Knill–Laflamme conditions require $PE_i^\dagger E_jP = \alpha_{ij}P$ for all correctable errors $E_i$. (a) Explain, in terms of [2.3](02-03-the-no-cloning-theorem.md) and [5.2](05-02-the-three-qubit-codes.md), why the right-hand side must be a multiple of $P$ rather than a general operator on the code space — what would go wrong if $\alpha_{ij}$ depended on the code state? (b) Verify the condition for the three-qubit bit-flip code with error set $\{I, X_1, X_2, X_3\}$ by computing $PE_i^\dagger E_jP$ for the pairs $(I, X_1)$ and $(X_1, X_2)$. (c) Show that the condition **fails** for the error set $\{I, Z_1\}$ on the same code, and identify which part of the condition breaks and what that tells you.

<details>
<summary>Solutions</summary>

**P1** Each of the three blocks contributes $\tfrac{1}{\sqrt2}(\lvert000\rangle+\lvert111\rangle)$, so

$$\lvert0_L\rangle = \frac{1}{2\sqrt2}\left(\lvert000\rangle+\lvert111\rangle\right)\otimes\left(\lvert000\rangle+\lvert111\rangle\right)\otimes\left(\lvert000\rangle+\lvert111\rangle\right),$$

which expands to $2\times2\times2 = 8$ terms, each with amplitude $1/(2\sqrt2)$:

$$\lvert0_L\rangle = \frac{1}{2\sqrt2}\Big(\lvert000\,000\,000\rangle + \lvert000\,000\,111\rangle + \lvert000\,111\,000\rangle + \cdots + \lvert111\,111\,111\rangle\Big).$$

**Eight terms.** (And $\lvert1_L\rangle$ has the same eight with signs $(-1)^{\#\text{blocks in the }111\text{ state}}$.)

*An $X$ on qubit 5* (the middle qubit of block 2) breaks the agreement within block 2 but does nothing to the blocks' relative phases. So the block-2 $Z$-checks $Z_4Z_5$ and $Z_5Z_6$ both read $-1$, and both $X$-type checks read $+1$.

*A $Z$ on qubit 5* leaves every bit pattern intact, so all six $Z$-checks read $+1$. But $Z_5$ flips the sign of block 2's internal superposition, taking $\lvert000\rangle+\lvert111\rangle$ to $\lvert000\rangle-\lvert111\rangle$ — that is, it flips block 2's "phase bit." The $X$-type checks compare blocks 1–2 and 2–3, so **both** read $-1$.

The syndromes are different because the two error types damage different structures: $X$ damages agreement *within* a block, which only $Z$-checks see; $Z$ damages the relative phase *between* blocks, which only $X$-checks see. The two layers of the code are watching two different things, and that separation is exactly what the concatenation bought.

**P2**

(a) $E = \cos\epsilon\,I - i\sin\epsilon\,Z$ is already in Pauli form, with

$$c_0 = \cos\epsilon, \quad c_1 = c_2 = 0, \quad c_3 = -i\sin\epsilon.$$

(Incidentally this $E$ is unitary — it is $R_z(2\epsilon)$ — which shows the theorem is not about non-unitary errors specifically.)

(b) Acting on qubit 1:

$$E_1\lvert\psi_L\rangle = \cos\epsilon\,\lvert\psi_L\rangle - i\sin\epsilon\, Z_1\lvert\psi_L\rangle.$$

The first term has the trivial syndrome (all checks $+1$); the second has the $Z_1$ syndrome (block-1's phase flipped, so the $X$-check comparing blocks 1 and 2 reads $-1$ while all $Z$-checks read $+1$). The two subspaces are orthogonal, so

$$P(\text{no error}) = \cos^2\epsilon, \qquad P(Z_1\text{ error}) = \sin^2\epsilon.$$

(c) *Branch "no error."* The projection gives $\cos\epsilon\lvert\psi_L\rangle$, which renormalizes to $\lvert\psi_L\rangle$ exactly. No correction needed.

*Branch "$Z_1$."* The projection gives $-i\sin\epsilon\,Z_1\lvert\psi_L\rangle$, which renormalizes to $-i\,Z_1\lvert\psi_L\rangle$. Apply the correction $Z_1$ (its own inverse):

$$Z_1\left(-i\,Z_1\lvert\psi_L\rangle\right) = -i\lvert\psi_L\rangle,$$

which is $\lvert\psi_L\rangle$ up to the global phase $-i$ — physically identical.

*Where $\epsilon$ went.* Into the **probabilities**, and nowhere else. The recovered state is exactly $\lvert\psi_L\rangle$ in both branches, with $\epsilon$ determining only how often each branch occurs. A small $\epsilon$ means the trivial branch is likely; a large $\epsilon$ means the correction branch is likely. Either way the output is perfect.

This is the general pattern and the reason error correction is not a matter of degree. Without correction, a rotation of $\epsilon$ per gate accumulates coherently: after $G$ gates the error is $G\epsilon$, and the state is ruined once $G\epsilon\sim1$. With correction, each round of syndrome measurement resets the error to exactly zero, at the cost of a $\sin^2\epsilon$ chance of needing a correction — and the *failures* only compound when two errors land in one round, giving $O(p^2)$ instead of $O(p)$. **Correction converts coherent accumulation into independent rare events.**

**P3**

(a) The condition $PE_i^\dagger E_jP = \alpha_{ij}P$ has two halves, and the fact that the right side is a *scalar* times $P$ is the second half.

Suppose instead $PE_i^\dagger E_jP = A_{ij}$ for some nontrivial operator $A_{ij}$ acting inside the code space. Then the quantity $\langle\psi_L\rvert E_i^\dagger E_j\lvert\psi_L\rangle$ would **depend on which code state $\lvert\psi_L\rangle$ is** — on $\alpha$ and $\beta$. But that quantity is precisely an overlap between the error branches, which shows up in the measurement statistics of the environment. So the environment would have acquired information about $\alpha$ and $\beta$.

And that is fatal twice over. First, by [2.2](02-02-density-matrices-and-the-partial-trace.md), if the environment learns about the state then the state's reduced density matrix has been disturbed in a state-dependent way, and no recovery operation can undo a state-dependent disturbance for all inputs at once. Second, if the environment holds information about an unknown state while you still hold the state, you have jointly cloned information about an unknown qubit — forbidden by [2.3](02-03-the-no-cloning-theorem.md).

So the scalar condition is exactly the "syndrome must reveal nothing about the data" requirement of [5.2](05-02-the-three-qubit-codes.md), written as an operator equation.

(b) Let $P = \lvert000\rangle\langle000\rvert + \lvert111\rangle\langle111\rvert$.

*Pair $(I, X_1)$.* $E_i^\dagger E_j = I^\dagger X_1 = X_1$. Now $X_1\lvert000\rangle = \lvert100\rangle$ and $X_1\lvert111\rangle = \lvert011\rangle$, and both results are **orthogonal to the code space**. So

$$P X_1 P = 0 = \alpha_{I,X_1}P \quad\text{with } \alpha_{I,X_1} = 0. \checkmark$$

*Pair $(X_1, X_2)$.* $E_i^\dagger E_j = X_1X_2$. Then $X_1X_2\lvert000\rangle = \lvert110\rangle$ and $X_1X_2\lvert111\rangle = \lvert001\rangle$, again both orthogonal to the code space, so

$$PX_1X_2P = 0 = \alpha_{X_1,X_2}P \quad\text{with }\alpha_{X_1,X_2} = 0.\checkmark$$

*Diagonal pairs.* $E_i^\dagger E_i = I$ for each Pauli, so $PIP = P$, i.e. $\alpha_{ii} = 1$. ✓

All conditions hold with $\alpha = I$ (the identity matrix indexed by errors), which is the "non-degenerate code" case: distinct errors take the code space to mutually orthogonal subspaces.

(c) *The failure.* Take the error set $\{I, Z_1\}$. Then $E_i^\dagger E_j = Z_1$ for the off-diagonal pair, and

$$Z_1\lvert000\rangle = \lvert000\rangle, \qquad Z_1\lvert111\rangle = -\lvert111\rangle,$$

so $Z_1$ maps the code space **into itself**, and

$$PZ_1P = \lvert000\rangle\langle000\rvert - \lvert111\rangle\langle111\rvert = Z_L,$$

the logical $Z$ operator. This is **not** a multiple of $P$: it is $+1$ on $\lvert0_L\rangle$ and $-1$ on $\lvert1_L\rangle$.

*Which part breaks, and what it tells you.* The scalar requirement fails, because $\langle\psi_L\rvert Z_1\lvert\psi_L\rangle = \lvert\alpha\rvert^2 - \lvert\beta\rvert^2$ depends on the encoded state. By the argument in (a), that means a $Z_1$ error leaks information about the logical qubit into the environment — and indeed it does: $Z_1$ *is* a logical operation, so the error has silently performed a computation on your data.

This is the formal version of "the bit-flip code is blind to phase errors" from [5.2](05-02-the-three-qubit-codes.md). It is not that the code corrects $Z$ badly; it is that $Z_1$ is not an error the code can even see, because $Z_1$ acts nontrivially *within* the code space. **An error that acts as a logical operator is undetectable and uncorrectable, by definition** — and the minimum weight of such an operator is exactly the code's distance ([5.4](05-04-stabilizer-codes-and-the-css-construction.md)). For the bit-flip code, a single $Z$ is a logical operator, so the distance in the phase direction is 1. Adding the outer phase-flip layer is what pushes it to 3.

</details>

## Connections

- **Backward:** the construction nests the two codes of [5.2](05-02-the-three-qubit-codes.md); the Pauli basis for $2\times2$ matrices is [1.2](01-02-single-qubit-gates.md); the requirement that syndromes reveal nothing about the data is [2.3](02-03-the-no-cloning-theorem.md) and the partial-trace reasoning of [2.2](02-02-density-matrices-and-the-partial-trace.md). The concrete over-rotation calculation is [5.2](05-02-the-three-qubit-codes.md) P3, generalized.
- **Forward:** [5.4](05-04-stabilizer-codes-and-the-css-construction.md) recognizes the eight syndrome observables as a stabilizer group, which makes designing codes a problem in linear algebra over $\mathbb{F}_2$ and yields the $[[7,1,3]]$ Steane code. [5.5](05-05-fault-tolerance-the-threshold-and-the-surface-code.md) shows why the surface code wins in practice despite its poor overhead.
- **Sideways:** the discretization theorem has no classical analogue, and its absence is why analog classical computers lost to digital ones — an analog error accumulates without bound, while a quantum error is projected back to zero or to a correctable Pauli by measurement. The $\{I,X,Y,Z\}$ decomposition is the statement that the Paulis span the $2\times2$ matrices, the same basis used for the Bloch decomposition $\rho = \tfrac12(I+\vec r\cdot\vec\sigma)$ in [2.2](02-02-density-matrices-and-the-partial-trace.md).
