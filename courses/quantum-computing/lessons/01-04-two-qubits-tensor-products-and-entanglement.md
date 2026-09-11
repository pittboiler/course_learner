# Quantum Computing · Lesson 1.4: Two qubits, tensor products, and entanglement

> ⏱ ~15 min · Module 1: Qubits, gates, and circuits · Builds on: [1.3 (measurement and the Born rule)](01-03-measurement-and-the-born-rule.md), [`quantum-mechanics` 5.2 (tensor products and entanglement)](../../quantum-mechanics/lessons/05-02-tensor-products-entanglement.md) · Unlocks: [1.5 (multi-qubit gates and circuits)](01-05-multi-qubit-gates-and-quantum-circuits.md), [2.1 (Bell states)](02-01-bell-states-and-generating-entanglement.md)

## Why this matters

One qubit is a sphere and holds two real parameters. Fifty qubits hold about $2.3\times10^{15}$ — and that gap, computed in [1.1](01-01-the-qubit-and-the-bloch-sphere.md) P3, is *entirely entanglement*. Every speedup in this course is paid for out of that account.

So you need two skills from this lesson. The first is bookkeeping: how to write an $n$-qubit state, in what order, and how to apply a gate to just one wire. It is dull and it is where most hand-simulation errors come from. The second is the diagnosis: given four amplitudes, decide in five seconds whether the state factors. For two qubits that test is a $2\times2$ determinant, which makes "is this entangled?" a computation rather than a debate.

## The idea

Two classical bits have four configurations: 00, 01, 10, 11. Two qubits have an amplitude **for each** of those four configurations, and that is the whole definition:

$$\lvert\psi\rangle = c_{00}\lvert00\rangle + c_{01}\lvert01\rangle + c_{10}\lvert10\rangle + c_{11}\lvert11\rangle.$$

Dimensions multiply, they do not add: $2\times2 = 4$, and $n$ qubits give $2^n$. That exponential is the source of both the promise and the simulation cost.

Now the interesting question. If the two qubits happen to be independent — qubit 0 in some state, qubit 1 in some other, no relationship — the four amplitudes are not free. They must be products, $c_{ij} = a_i b_j$, one factor from each qubit. Such a state is a **product state** and carries only $2+2 = 4$ real parameters.

When the amplitudes are *not* of that form, no assignment of individual states to the two qubits reproduces them. The pair has a joint state; neither member has one. That is **entanglement**, and it is not exotic — it is the generic case. Product states are the thin shell of special states, not the rule.

Arrange the four amplitudes in a $2\times2$ table, rows indexed by qubit 0 and columns by qubit 1. "The amplitudes are products $a_ib_j$" says exactly "the table is a column vector times a row vector," which says exactly "the table has rank 1," which for a $2\times2$ table says exactly "the determinant vanishes." One arithmetic operation, and you have your answer.

## The formal version

> **Definition (tensor product of states).** For $\lvert a\rangle = a_0\lvert0\rangle + a_1\lvert1\rangle$ and $\lvert b\rangle = b_0\lvert0\rangle+b_1\lvert1\rangle$,
> $$\lvert a\rangle \otimes \lvert b\rangle = \begin{pmatrix}a_0 b_0\\ a_0 b_1\\ a_1 b_0 \\ a_1 b_1\end{pmatrix}$$
> in the ordered basis $\lvert00\rangle, \lvert01\rangle, \lvert10\rangle, \lvert11\rangle$. We abbreviate $\lvert a\rangle\otimes\lvert b\rangle$ as $\lvert a\rangle\lvert b\rangle$ or $\lvert ab\rangle$.

In words: multiply every amplitude of the first qubit by every amplitude of the second, in a fixed order. The ordering convention matters and this course fixes it once: **qubit 0 is written leftmost and is the most significant bit**, so $\lvert 10\rangle$ means qubit 0 is 1 and qubit 1 is 0, and its index in the vector is binary 10, namely 2.

An $n$-qubit computational basis state is a bit string: $\lvert x\rangle$ for $x \in \{0,1\}^n$, or equivalently $\lvert x\rangle$ for the integer $x \in \{0,\dots,2^n-1\}$. Both readings are used, often in the same formula, and the switch is always harmless once you have fixed the bit order.

> **Definition (product vs entangled).** A two-qubit state is a **product state** if $\lvert\psi\rangle = \lvert a\rangle\otimes\lvert b\rangle$ for some single-qubit states; otherwise it is **entangled**.

> **The determinant test.** Write the amplitudes as $C = \begin{pmatrix}c_{00} & c_{01}\\ c_{10} & c_{11}\end{pmatrix}$. Then
> $$\lvert\psi\rangle \text{ is a product state} \iff \det C = c_{00}c_{11} - c_{01}c_{10} = 0.$$

In words: compute one cross-multiplication difference. Zero means the qubits are independent; anything else means they are entangled, and the larger the determinant's magnitude the more entangled they are, up to the maximum $\lvert\det C\rvert = 1/2$.

The reason the magnitude means something is the Schmidt decomposition:

> **Schmidt decomposition (two qubits).** Every two-qubit state can be written $\lvert\psi\rangle = \lambda_1\lvert u_1\rangle\lvert v_1\rangle + \lambda_2\lvert u_2\rangle\lvert v_2\rangle$ with $\lambda_1 \ge \lambda_2 \ge 0$, $\lambda_1^2+\lambda_2^2 = 1$, and orthonormal $\{\lvert u_i\rangle\}$, $\{\lvert v_i\rangle\}$. The $\lambda_i$ are the singular values of $C$; the number of nonzero ones is the **Schmidt rank**.

In words: in the right local bases, any two-qubit state needs at most two terms. Schmidt rank 1 is a product state, rank 2 is entangled, and $\lambda_1 = \lambda_2 = 1/\sqrt2$ is maximal entanglement. This is the singular value decomposition of [`linalg-refresher` 5.2](../../linalg-refresher/lessons/05-02-svd.md) applied to the coefficient table — the same theorem, wearing a physics hat.

Finally, measuring only one qubit:

> **Partial measurement.** Measuring qubit 0 in the computational basis gives outcome 0 with probability $P(0) = \lvert c_{00}\rvert^2 + \lvert c_{01}\rvert^2$, after which the state is
> $$\lvert0\rangle \otimes \frac{c_{00}\lvert0\rangle + c_{01}\lvert1\rangle}{\sqrt{P(0)}},$$
> and correspondingly for outcome 1.

In words: collect the amplitudes consistent with the outcome, square-and-sum them for the probability, then keep that row and renormalize. **Qubit 1's state after the measurement generally depends on which outcome you got** — and that dependence is entanglement, made operational.

## Picture

![Left: a two-by-two grid of boxes labelled c-zero-zero, c-zero-one, c-one-zero, c-one-one, with each cell also tagged by its basis state ket 00 through ket 11, rows labelled as qubit 0 and columns as qubit 1, under the caption that a state is a product state exactly when the determinant c-zero-zero times c-one-one minus c-zero-one times c-one-zero vanishes. Right: two small two-by-two grids. The upper one has all four entries equal to one half, determinant one quarter minus one quarter equals zero, marked PRODUCT and identified as ket plus tensor ket plus. The lower one has the same entries except the bottom-right is minus one half, determinant minus one half, marked MAXIMALLY ENTANGLED with Schmidt values one over root two each. A dashed arrow between them is labelled flip one sign.](assets/01-04-fig1.svg)

The right-hand column is the lesson in one image. Four amplitudes of equal magnitude, one sign changed, and the state goes from **two completely independent qubits to maximally entangled** — no amplitude magnitudes moved at all. Entanglement lives in the *pattern* of relative phases, not in the size of the amplitudes, which is why a single controlled-$Z$ gate can create it out of nothing ([1.5](01-05-multi-qubit-gates-and-quantum-circuits.md)).

## Worked examples

**Example 1 — the Bell state, tested and interpreted.**

$$\lvert\Phi^+\rangle = \tfrac{1}{\sqrt2}\left(\lvert00\rangle + \lvert11\rangle\right), \qquad C = \tfrac{1}{\sqrt2}\begin{pmatrix}1&0\\0&1\end{pmatrix}, \qquad \det C = \tfrac12.$$

Nonzero, so entangled — and at the maximum value $1/2$, so *maximally* entangled. The singular values of $C$ are $1/\sqrt2$ and $1/\sqrt2$, confirming it.

Now measure qubit 0. Outcome 0 has probability $\lvert 1/\sqrt2\rvert^2 + 0 = 1/2$, leaving $\lvert0\rangle\lvert0\rangle$; outcome 1 has probability 1/2, leaving $\lvert1\rangle\lvert1\rangle$. So qubit 1 was in *no* definite state before, and is in a definite state after — a different one depending on the outcome, and the two always agree.

Watch what this does *not* do. Before hearing the outcome, someone holding qubit 1 alone sees 50/50 no matter what happens to qubit 0, because both branches give them a 50/50 mix. There is correlation but no signal, and making that precise is the job of the partial trace in [2.2](02-02-density-matrices-and-the-partial-trace.md).

**Example 2 — a product state hiding in plain sight, and its entangled twin.**

$$\lvert\psi_1\rangle = \tfrac12\left(\lvert00\rangle + \lvert01\rangle + \lvert10\rangle + \lvert11\rangle\right), \qquad C = \tfrac12\begin{pmatrix}1&1\\1&1\end{pmatrix}, \qquad \det C = \tfrac14 - \tfrac14 = 0.$$

Product state. To factor it, read off a row and a column: the rows are proportional, so take $\lvert a\rangle \propto (1,1)$ and $\lvert b\rangle \propto (1,1)$, normalize, and

$$\lvert\psi_1\rangle = \lvert+\rangle\otimes\lvert+\rangle.$$

Sanity check by expanding: $\tfrac{1}{\sqrt2}(\lvert0\rangle+\lvert1\rangle)\otimes\tfrac{1}{\sqrt2}(\lvert0\rangle+\lvert1\rangle)$ does give all four terms with amplitude 1/2. ✓

Now flip one sign:

$$\lvert\psi_2\rangle = \tfrac12\left(\lvert00\rangle + \lvert01\rangle + \lvert10\rangle - \lvert11\rangle\right), \qquad C = \tfrac12\begin{pmatrix}1&1\\1&-1\end{pmatrix}, \qquad \det C = -\tfrac14 - \tfrac14 = -\tfrac12.$$

Magnitude $1/2$: **maximally entangled.** Its singular values are both $1/\sqrt2$ (the matrix is $\tfrac{1}{\sqrt2}$ times a Hadamard, which is unitary, so all singular values are equal).

Two lessons. First, the measurement statistics of the two states are *identical* in the computational basis — all four outcomes at probability 1/4 — so you cannot tell a product state from a maximally entangled one by looking at one basis. Second, the gate that turns $\lvert\psi_1\rangle$ into $\lvert\psi_2\rangle$ is a single controlled-$Z$: it does nothing except multiply the $\lvert11\rangle$ amplitude by $-1$. **Maximal entanglement costs one two-qubit gate**, which is why generating it is easy and preserving it is hard.

## Watch out

- You might think entanglement is just correlation. Classical correlation exists — a coin flip that sets two bits to 00 or 11 with equal chance is perfectly correlated and has no quantum content. The difference is that the classical version is a *mixture* with a definite hidden answer, and the Bell state is a *superposition*. They agree in the computational basis and disagree in the $X$ basis, where the Bell state stays perfectly correlated and the coin flip goes random. Making this into a theorem is the CHSH game ([2.6](02-06-the-chsh-game-and-device-independence.md)).
- You might think "qubit 1's state depends on my measurement of qubit 0" means a signal was sent. Nothing was: your outcome is random, and someone examining qubit 1 alone sees identical statistics whichever branch occurred. The dependence only becomes visible when the two parties compare notes over a classical channel ([2.3](02-03-the-no-cloning-theorem.md)).
- You might think the determinant test generalizes by computing one determinant for three qubits. It does not. For $n \ge 3$ there is no single number that decides entanglement, and there are inequivalent *kinds* of tripartite entanglement — GHZ-type and W-type — with no unitary converting one into the other. Three qubits are genuinely harder than two, and the classification stops being finite at four.
- You might think a state is "entangled" full stop. Entanglement is always relative to a **cut** — a partition of the qubits into groups. A three-qubit state can be entangled across the cut $\{0\}\vert\{1,2\}$ and a product across $\{1\}\vert\{0,2\}$, and "the state is entangled" without naming the cut is incomplete.

## One-liner

> Two qubits are four amplitudes in a table; the qubits are independent exactly when that table has rank one, and every speedup in this course is bought with the amplitudes that violate it.

## Problems

**P1 (🟢)** For $\lvert\psi\rangle = \tfrac{1}{2\sqrt2}\left(\sqrt3\lvert00\rangle + \lvert01\rangle + \sqrt3\lvert10\rangle + \lvert11\rangle\right)$, apply the determinant test, and if it factors, give the two single-qubit states explicitly. Then state what qubit 1's state is after measuring qubit 0, for each outcome, and say how that answer reflects the verdict.

**P2 (🟡)** Prove the operational form of the determinant test: show that for a **product** state, measuring qubit 0 leaves qubit 1 in the same state regardless of the outcome; and show that if measuring qubit 0 leaves qubit 1 in the same state for both outcomes, the state must have been a product. (Assume both outcomes have nonzero probability.)

**P3 (🔴, optional)** Compare the two standard three-qubit states
$$\lvert\mathrm{GHZ}\rangle = \tfrac{1}{\sqrt2}\left(\lvert000\rangle + \lvert111\rangle\right), \qquad \lvert W\rangle = \tfrac{1}{\sqrt3}\left(\lvert001\rangle + \lvert010\rangle + \lvert100\rangle\right).$$
For each, measure qubit 0 in the computational basis, list the outcomes with their probabilities and the resulting two-qubit state, and use the determinant test on what remains. Then say in one sentence what the contrast tells you about the two kinds of tripartite entanglement, and which one you would rather hold if one of your three qubits might be lost.

<details>
<summary>Solutions</summary>

**P1** The coefficient table is
$$C = \frac{1}{2\sqrt2}\begin{pmatrix}\sqrt3 & 1\\ \sqrt3 & 1\end{pmatrix}, \qquad \det C = \frac{1}{8}\left(\sqrt3\cdot 1 - 1\cdot\sqrt3\right) = 0.$$

Product state. The two rows are identical, so qubit 0's amplitudes are equal: $\lvert a\rangle = \tfrac{1}{\sqrt2}(\lvert0\rangle+\lvert1\rangle) = \lvert+\rangle$. The common row is proportional to $(\sqrt3, 1)$, normalized to $\lvert b\rangle = \tfrac{\sqrt3}{2}\lvert0\rangle + \tfrac12\lvert1\rangle$. So

$$\lvert\psi\rangle = \lvert+\rangle \otimes \left(\tfrac{\sqrt3}{2}\lvert0\rangle + \tfrac12\lvert1\rangle\right).$$

Check the normalization of the product: $\tfrac{1}{\sqrt2}\cdot\tfrac{\sqrt3}{2} = \tfrac{\sqrt3}{2\sqrt2}$, matching the stated $\lvert00\rangle$ amplitude. ✓

Measuring qubit 0: $P(0) = \tfrac{3}{8} + \tfrac18 = \tfrac12$, and the surviving row $(\sqrt3, 1)/(2\sqrt2)$ renormalizes to $\tfrac{\sqrt3}{2}\lvert0\rangle+\tfrac12\lvert1\rangle$. Outcome 1 gives probability 1/2 and the *same* residual state, because the second row is the same. Qubit 1 is untouched by the measurement, which is exactly what "product state" means operationally — and it is the content of P2.

**P2** *Product implies no change.* Let $\lvert\psi\rangle = \lvert a\rangle\otimes\lvert b\rangle$, so $c_{ij} = a_ib_j$. Measuring qubit 0 and getting outcome $i$ leaves the (unnormalized) residual $c_{i0}\lvert0\rangle + c_{i1}\lvert1\rangle = a_i\left(b_0\lvert0\rangle+b_1\lvert1\rangle\right) = a_i\lvert b\rangle$. Normalizing divides by $\lvert a_i\rvert$, leaving $\lvert b\rangle$ up to a phase — the same state for $i = 0$ and $i=1$. So qubit 1's state is independent of the outcome.

*No change implies product.* Suppose both outcomes have nonzero probability and both leave qubit 1 in the same state $\lvert b\rangle$, up to phase. Then row 0 of $C$ is $\mu_0 \lvert b\rangle$ and row 1 is $\mu_1\lvert b\rangle$ for nonzero scalars $\mu_0,\mu_1$ (the phases absorbed into the $\mu$'s). So
$$C = \begin{pmatrix}\mu_0 b_0 & \mu_0 b_1\\ \mu_1 b_0 & \mu_1 b_1\end{pmatrix},$$
whose rows are proportional, so $\det C = \mu_0\mu_1(b_0b_1 - b_1b_0) = 0$ and $C = \binom{\mu_0}{\mu_1}(b_0\ b_1)$ is rank 1. Hence $\lvert\psi\rangle = \lvert\mu\rangle\otimes\lvert b\rangle$ with $\lvert\mu\rangle$ the normalized $(\mu_0,\mu_1)$.

The two directions together say: **entanglement is precisely the property that measuring one qubit tells you something new about the other.** That is a far better working definition than "cannot be written as a product," because it says what entanglement *does*.

**P3** *GHZ.* Measuring qubit 0: outcome 0 with probability 1/2 leaves $\lvert00\rangle$; outcome 1 with probability 1/2 leaves $\lvert11\rangle$. Both residuals have coefficient tables $\begin{pmatrix}1&0\\0&0\end{pmatrix}$ and $\begin{pmatrix}0&0\\0&1\end{pmatrix}$, determinant 0 in both cases — **completely unentangled.**

*W.* Outcome 0 has probability $\lvert 1/\sqrt3\rvert^2 + \lvert1/\sqrt3\rvert^2 = 2/3$, collecting the $\lvert001\rangle$ and $\lvert010\rangle$ terms; the residual renormalizes to
$$\tfrac{1}{\sqrt2}\left(\lvert01\rangle+\lvert10\rangle\right) = \lvert\Psi^+\rangle, \qquad C = \tfrac{1}{\sqrt2}\begin{pmatrix}0&1\\1&0\end{pmatrix}, \qquad \det C = -\tfrac12.$$
**Maximally entangled** — one of the Bell states of [2.1](02-01-bell-states-and-generating-entanglement.md). Outcome 1 has probability 1/3 and leaves $\lvert00\rangle$, which is a product.

The contrast: GHZ entanglement is **all-or-nothing** — it is maximal across every cut, and measuring (or losing) a single qubit destroys all of it. W entanglement is **robust** — two thirds of the time, losing a qubit still leaves a maximally entangled pair behind. No unitary acting on the three qubits separately converts one into the other, so these are genuinely different resources rather than two descriptions of one thing.

If a qubit might be lost, hold the **W state**: its expected surviving entanglement is $\tfrac23$ of a Bell pair versus GHZ's zero. This is not a toy consideration. It is why the multipartite entanglement in error-correcting codes is engineered rather than chosen for elegance, and GHZ-like states appear in [5.4](05-04-stabilizer-codes-and-the-css-construction.md) precisely where a *detectable* total collapse is preferable to a graceful one.

</details>

## Connections

- **Backward:** the tensor product and the entanglement test are [`quantum-mechanics` 5.2](../../quantum-mechanics/lessons/05-02-tensor-products-entanglement.md) with the continuous degrees of freedom removed, which is what makes the determinant test available at all — two levels per particle means a $2\times2$ table. The Schmidt decomposition is the singular value decomposition of [`linalg-refresher` 5.2](../../linalg-refresher/lessons/05-02-svd.md), with the singular values renamed and the rank renamed.
- **Forward:** [1.5](01-05-multi-qubit-gates-and-quantum-circuits.md) supplies the gates that move between the product shell and the entangled bulk — one CNOT is all it takes. [2.1](02-01-bell-states-and-generating-entanglement.md) names the four maximally entangled states and builds them; [2.2](02-02-density-matrices-and-the-partial-trace.md) gives the language for describing one half of a pair, which the partial-measurement rule here only gestures at.
- **Sideways:** the exponential dimension count is the reason classical simulation of quantum systems is hard, which is Feynman's original argument for building a quantum computer ([6.2](06-02-hamiltonian-simulation.md)); and the fact that *low*-entanglement states are efficiently simulable classically, via the small Schmidt ranks of a matrix product state, is why the tensor-network spoofing results in [6.3](06-03-sampling-advantage-and-verification.md) had teeth.
