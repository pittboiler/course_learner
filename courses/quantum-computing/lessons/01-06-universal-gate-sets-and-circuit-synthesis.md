# Quantum Computing · Lesson 1.6: Universal gate sets and circuit synthesis

> ⏱ ~15 min · Module 1: Qubits, gates, and circuits · Builds on: [1.2 (single-qubit gates)](01-02-single-qubit-gates.md), [1.5 (multi-qubit gates and circuits)](01-05-multi-qubit-gates-and-quantum-circuits.md) · Unlocks: [5.5 (fault tolerance and the threshold)](05-05-fault-tolerance-the-threshold-and-the-surface-code.md), [6.6 (resource estimation)](06-06-resource-estimation-and-the-state-of-the-field.md)

## Why this matters

Every gate so far had a knob: rotate by *any* angle about *any* axis. Real machines do not work that way, and neither does fault tolerance. Once you encode qubits in an error-correcting code ([5.5](05-05-fault-tolerance-the-threshold-and-the-surface-code.md)), only a **discrete** set of gates can be applied safely, and a continuously tunable rotation is exactly what you cannot have.

So the question is forced: what can a finite gate set do? The answer has three parts, and each one changes how you read every later resource estimate.

1. **Exactly, it cannot do everything.** A finite set generates a countable group; the unitaries are uncountable.
2. **Approximately, it can do everything** — this is universality, and $\{H, T, \mathrm{CNOT}\}$ suffices.
3. **Cheaply, it cannot do everything.** A generic $n$-qubit unitary needs exponentially many gates no matter what set you use.

Point 3 is the one people skate past. Universality is a statement about reach, not about cost, and the gap between them is why "a quantum computer can implement any unitary" is true and nearly useless.

## The idea

Think about rotating a circle by a fixed angle, over and over. If the angle is a rational fraction of a full turn — say 90 degrees — you visit four points and then repeat forever. If the angle is an *irrational* fraction, you never return to where you started, and your orbit comes arbitrarily close to every point on the circle. You cannot land exactly on a chosen target, but you can get within any $\epsilon$ you name, by going around enough times.

That is exactly the situation with a discrete gate set. The gate $T$ alone is a rotation by 45 degrees, a rational fraction, so it repeats after eight applications and reaches nothing new. But **$THTH$ is a rotation by about 62.8 degrees, an irrational fraction of a full turn**, so its powers densely fill a circle on the Bloch sphere. Add a conjugate copy with a different axis and the two dense circles generate rotations about every axis — the whole sphere becomes reachable, approximately.

The remaining question is the exchange rate: how many gates buy you accuracy $\epsilon$? The answer is pleasingly cheap, $O(\log(1/\epsilon))$, which means **accuracy is nearly free**. Doubling the number of correct digits roughly doubles the gate count, rather than squaring it. That single logarithm is what makes the whole discrete-gate-set program practical.

## The formal version

> **Definition (universality).** A gate set $\mathcal G$ is **universal** if for every $n$, every $n$-qubit unitary $U$, and every $\epsilon > 0$, there is a circuit $V$ of gates from $\mathcal G$ with $\lVert U - V\rVert < \epsilon$ in the operator norm.

In words: you can come as close as you like to any operation you like, on any number of qubits. The norm choice matters little — closeness in operator norm implies closeness of all output probabilities, with errors adding at most linearly along a circuit.

Two theorems carry the subject.

> **Exact universality.** CNOT together with *all* single-qubit unitaries is exactly universal: every $n$-qubit unitary factors into finitely many of them, with no approximation.

In words: two-qubit interactions plus arbitrary local control is all the physics you need. The proof route is a decomposition ladder — any unitary into two-level unitaries, any two-level unitary into controlled-single-qubit gates via Gray codes, any controlled gate into CNOTs plus local rotations.

> **Approximate universality (Solovay–Kitaev).** $\{H, T\}$ is universal for one qubit, and $\{H, T, \mathrm{CNOT}\}$ is universal for $n$ qubits. Moreover, if a gate set generates a dense subgroup of $SU(2)$, then any single-qubit unitary can be approximated to accuracy $\epsilon$ using $O\!\left(\log^{c}(1/\epsilon)\right)$ gates, with $c$ a small constant.

In words: two gates and a coupler suffice, and the cost of precision is polylogarithmic. The original constant was $c \approx 3.97$; for the specific case of Clifford+$T$, number-theoretic synthesis (Ross–Selinger) achieves the optimal linear form, about $3\log_2(1/\epsilon)$ $T$ gates.

Why *approximate* is the best possible:

> **No finite set is exactly universal.** A finite gate set generates a countable group of unitaries, while $SU(2)$ has the cardinality of the continuum. Hence almost every unitary is unreachable exactly.

In words: counting alone kills exactness, before any physics enters. This is why the $T$ gate's angle being $\pi/4$ rather than "whatever you need" is a genuine constraint and not bookkeeping.

Now the cost side, which is the part to take seriously.

> **Gate-count lower bounds.** A generic $n$-qubit unitary has $4^n$ real parameters (a $2^n\times2^n$ unitary, minus phase), so any circuit built from a fixed finite set needs $\Omega(4^n)$ gates. With exact CNOTs and free single-qubit gates the CNOT count alone is at least $\left\lceil\tfrac14\left(4^n - 3n - 1\right)\right\rceil$.

In words: the number of gates must be at least the number of parameters you are trying to set, and each gate sets $O(1)$ of them. The card carries these as [synthesis costs](../reference.md#synthesis-and-universality-costs); the table is brutal:

| $n$ | minimum CNOTs for a generic unitary |
|---|---|
| 2 | 3 |
| 3 | 14 |
| 4 | 61 |
| 5 | 252 |
| 10 | 262,137 |

**"A quantum computer can implement any unitary" is therefore true and almost content-free.** The unitaries worth implementing are the structured ones — a QFT in $O(n^2)$ gates ([4.1](04-01-the-quantum-fourier-transform.md)), a Trotterized Hamiltonian in polynomial gates ([6.2](06-02-hamiltonian-simulation.md)) — and finding structure is the entire job of algorithm design.

One last piece of vocabulary you will need constantly in Module 5:

> **Clifford group and Clifford+$T$.** The **Clifford** gates are those generated by $\{H, S, \mathrm{CNOT}\}$; they map Pauli operators to Pauli operators under conjugation. Clifford circuits are **not** universal and are classically simulable in polynomial time (**Gottesman–Knill**). Adding $T$ makes the set universal.

In words: the easy gates form a large, structured, classically simulable group, and one small phase gate outside it supplies all the quantum power. This is the sharpest available answer to "where does quantum advantage live," and it is also a budget line: in a fault-tolerant machine Clifford gates are cheap and $T$ gates are expensive, so **$T$-count is the currency** ([6.6](06-06-resource-estimation-and-the-state-of-the-field.md)).

## Picture

![Left: a Bloch sphere scattered with about seventy small blue dots lying on a single tilted circle, with the starting point at the north pole marked in red, and an orange dashed line through the sphere marking the rotation axis of the gate sequence THTH. Captions note that the rotation angle is 62.8 degrees, an irrational fraction of 360 degrees, so the orbit is dense on its circle and never repeats. Right: a three-step ladder of boxes joined by downward arrows. The top box reads arbitrary n-qubit unitary with 4-to-the-n real parameters. The middle box reads CNOT plus arbitrary one-qubit gates, marked EXACT, needing at least one quarter of 4-to-the-n minus 3n minus 1 CNOTs. The bottom box reads H and T only plus CNOT, marked APPROXIMATE, at about 3 log base 2 of 1 over epsilon T gates each, with the note that discrete sets lose exactness, not reach.](assets/01-06-fig1.svg)

The left panel is the key intuition and also its own limitation: repeated $THTH$ is dense on **one circle**, not on the sphere. A single irrational rotation is not universal even for one qubit. What closes the gap is that $\{H,T\}$ also generates rotations about a *second*, independent axis, and two independent dense rotations generate a dense subgroup of the whole rotation group.

## Worked examples

**Example 1 — the price of accuracy, in $T$ gates.**

You need an arbitrary single-qubit rotation to accuracy $\epsilon$, in Clifford+$T$. Using the Ross–Selinger count of about $3\log_2(1/\epsilon)$ $T$ gates:

| $\epsilon$ | $\log_2(1/\epsilon)$ | $T$ gates |
|---|---|---|
| $10^{-2}$ | 6.6 | ~20 |
| $10^{-3}$ | 10.0 | ~30 |
| $10^{-6}$ | 19.9 | ~60 |
| $10^{-10}$ | 33.2 | ~100 |

Ten digits of accuracy for about a hundred gates. Compare what that would cost if the exponent were quadratic instead of linear in $\log(1/\epsilon)$: roughly 1,100 gates, still tolerable — which is why the improvement from Solovay–Kitaev's $\log^{3.97}$ to the optimal $\log$ was worth a decade of work but was never make-or-break. **The logarithm is the win; the exponent on it is a detail.**

There is a subtlety worth flagging because it bites in real estimates. If a circuit contains $G$ approximated gates and you want total error below $\epsilon_{\text{total}}$, each gate must be accurate to about $\epsilon_{\text{total}}/G$, since errors add. A circuit with $10^{10}$ rotations needing $10^{-3}$ total error requires each to $10^{-13}$ — about 130 $T$ gates apiece, so $1.3\times10^{12}$ $T$ gates. The per-gate cost is logarithmic, the count is not, and it is the product that lands on the bill.

**Example 2 — why a finite set cannot be exact, in one paragraph.**

Each gate in a finite set $\mathcal G = \{g_1,\dots,g_k\}$ is one fixed matrix. A circuit of length $m$ is a word in those letters, so there are at most $k^m$ distinct circuits of length $m$, and the total number of circuits of any finite length is $\sum_m k^m$ — a **countable** set. But $SU(2)$ is parametrized by three real numbers, so it has uncountably many elements. A countable set cannot equal an uncountable one, so the set of exactly reachable unitaries has measure zero.

Now run the same counting argument to get a *lower bound on cost*, which is the more useful direction. To approximate every element of $SU(2)$ to accuracy $\epsilon$, the reachable circuits must form an $\epsilon$-net of a 3-dimensional space, which requires about $(1/\epsilon)^3$ points. So

$$k^m \gtrsim \left(\frac{1}{\epsilon}\right)^3 \implies m \gtrsim \frac{3\log(1/\epsilon)}{\log k}.$$

Universality cannot be cheaper than $\Omega(\log(1/\epsilon))$, and Ross–Selinger's $3\log_2(1/\epsilon)$ matches it up to the constant. **The counting argument gives both the impossibility and the optimal cost** — the same trick, run twice.

## Watch out

- You might think universality means a quantum computer can efficiently do anything unitary. It cannot: the parameter count forces $\Omega(4^n)$ gates for a generic unitary, so all useful algorithms exploit structure. Universality is about what is *possible*, and complexity theory ([6.1](06-01-bqp-and-the-complexity-landscape.md)) is about what is *affordable*.
- You might think you could dodge approximation by building hardware with continuously tunable gates. You can, and NISQ machines do ([6.4](06-04-variational-algorithms-vqe-and-qaoa.md)) — but a continuous knob has a continuous *error*, which error correction cannot digitize. Fault tolerance and continuous gates are incompatible, and that trade is the reason discrete synthesis is not optional.
- You might think Clifford circuits are quantum computation. They are the bulk of the gates in any real circuit and they are classically simulable in polynomial time, entanglement and all. A Bell state, teleportation, and superdense coding are all pure Clifford — impressive physics, zero computational advantage. That is why Module 2's protocols are not algorithms.
- You might think "approximating each gate to $\epsilon$" gives a circuit accurate to $\epsilon$. Errors accumulate roughly additively, so $G$ gates each at $\epsilon$ give up to $G\epsilon$ total. Every resource estimate in this field starts by dividing the error budget by the gate count, and forgetting to do it understates costs by orders of magnitude.

## One-liner

> A finite gate set cannot hit any unitary exactly, can come within $\epsilon$ of any of them for about $3\log_2(1/\epsilon)$ $T$ gates, and still cannot afford the generic one — reach is cheap, cost is not.

## Problems

**P1 (🟢)** Show that $T^8 = I$, and conclude that the group generated by $T$ alone has exactly 8 elements and is therefore not universal even on a single qubit. Then state what the group generated by $\{H, T\}$ is instead, and which of the three properties in "Why this matters" distinguishes the two cases.

**P2 (🟡)** A fault-tolerant circuit contains $10^{6}$ arbitrary-angle single-qubit rotations and you want the total output error below $10^{-2}$. Using the counting bound and the Ross–Selinger cost of about $3\log_2(1/\epsilon)$ $T$ gates per rotation, compute the required per-gate accuracy, the $T$ gates per rotation, and the total $T$-count. Then recompute for a total error budget of $10^{-6}$ and comment on which input the answer is more sensitive to.

**P3 (🔴, optional)** The single-qubit Clifford group, modulo global phase, has exactly 24 elements. Show this by a geometric argument: identify what the Clifford gates do to the three Bloch axes, and count the resulting symmetries. Then explain what the finiteness of the group implies about universality, and why Gottesman–Knill (Clifford circuits are classically simulable) is the *right* complement to that observation rather than a coincidence.

<details>
<summary>Solutions</summary>

**P1** $T = \mathrm{diag}(1, e^{i\pi/4})$ is diagonal, so powers are elementwise: $T^k = \mathrm{diag}(1, e^{ik\pi/4})$. Then $T^8 = \mathrm{diag}(1, e^{2\pi i}) = I$. The powers $T^0,\dots,T^7$ are distinct because $e^{ik\pi/4}$ takes eight distinct values on the unit circle, so the group generated by $T$ is cyclic of order 8.

Eight matrices cannot approximate the uncountably many elements of $SU(2)$: pick any target further than the largest gap in that eight-point set and no product of $T$'s comes close. Geometrically, $T$ is a rotation by $\pi/4$ about $\hat z$, and *every* power of it is a rotation about $\hat z$ — the entire group fixes the poles, so it never moves $\lvert0\rangle$ at all.

$\{H,T\}$ instead generates a **countable dense subgroup of $SU(2)$**: still countable, so still not exactly universal, but dense, so approximately universal. The distinguishing property is number 2 in the list: both sets fail exactness (property 1 applies to any finite set), but only $\{H,T\}$ achieves approximate universality. $H$ is what breaks the $\hat z$-axis monopoly.

**P2** *Budget $10^{-2}$.* With $G = 10^6$ rotations and errors adding,
$$\epsilon_{\text{per gate}} = \frac{10^{-2}}{10^{6}} = 10^{-8}.$$
Then $\log_2(10^{8}) = 8\log_2 10 = 26.6$, so each rotation costs about $3 \times 26.6 \approx 80$ $T$ gates, and the total is
$$10^{6}\times 80 = 8\times 10^{7}\ T\text{ gates}.$$

*Budget $10^{-6}$.* Now $\epsilon_{\text{per gate}} = 10^{-12}$, $\log_2(10^{12}) = 39.9$, about $120$ $T$ gates each, total $1.2\times10^8$.

Tightening the error budget by four orders of magnitude raised the cost by only 50 percent, because the budget enters through a logarithm. Raising the *rotation count* by four orders of magnitude, from $10^6$ to $10^{10}$, would multiply the total by about $10^4 \times (130/80) \approx 1.6\times10^4$ — it enters linearly, and it also pushes the per-gate accuracy, so it enters twice.

**The answer is overwhelmingly more sensitive to the gate count than to the error budget.** That asymmetry is the main lever in fault-tolerant compilation: the profitable optimization is always removing rotations (or merging them, or replacing them with exact Clifford identities), never relaxing precision.

**P3** A Clifford gate maps Paulis to Paulis under conjugation: $U X U^\dagger$, $U Y U^\dagger$, $U Z U^\dagger$ are each $\pm$ a Pauli. On the Bloch sphere, conjugation by $U$ is the rotation $U$ performs, so this says: **a single-qubit Clifford gate permutes the three coordinate axes, possibly with sign flips.** Those are exactly the rotational symmetries of the cube (equivalently the octahedron with vertices at the six named states $\lvert0\rangle,\lvert1\rangle,\lvert\pm\rangle,\lvert{\pm i}\rangle$).

Count them: the image of $\hat x$ can be any of the 6 signed axes; the image of $\hat y$ can then be any of the 4 signed axes perpendicular to it; the image of $\hat z$ is then forced, because the frame must stay right-handed (a rotation has determinant $+1$). So
$$6\times4 = 24$$
elements, matching the rotation group of the cube. Generators: $H$ (the $\hat x\leftrightarrow\hat z$ swap) and $S$ (the quarter-turn about $\hat z$).

Since the group is finite, it is not universal — same argument as P1, with 24 in place of 8. And unlike P1, the failure is not a degenerate one: Clifford circuits on many qubits create maximal entanglement, run teleportation, and encode and decode error-correcting codes. They just do not compute anything hard.

**Gottesman–Knill is the right complement because it explains why.** A Clifford circuit's whole evolution can be tracked by recording how it permutes Pauli operators — $2n$ generators with signs, so $O(n^2)$ bits — rather than $2^n$ amplitudes. The stabilizer formalism of [5.4](05-04-stabilizer-codes-and-the-css-construction.md) is literally that bookkeeping. So the two facts are one fact seen twice: the Clifford group is small and structured, which is simultaneously why it is efficiently simulable and why it cannot be universal. **The $T$ gate is precisely the gate that leaves the octahedron's symmetry group**, and every credible account of where quantum advantage comes from ends up pointing at it.

</details>

## Connections

- **Backward:** the exact-universality ladder rests on the Euler decomposition of [1.2](01-02-single-qubit-gates.md) and the controlled-gate constructions of [1.5](01-05-multi-qubit-gates-and-quantum-circuits.md); the "arbitrary unitary into two-level unitaries" step is Givens-rotation elimination, the same procedure as the QR factorization of [`linalg-refresher` 4.3](../../linalg-refresher/lessons/04-03-gram-schmidt-qr.md).
- **Forward:** [5.5](05-05-fault-tolerance-the-threshold-and-the-surface-code.md) explains *why* the gate set must be discrete (the Eastin–Knill theorem forbids a universal transversal gate set) and where $T$ gates come from in practice — magic-state distillation, at a cost of thousands of physical qubits apiece. [6.6](06-06-resource-estimation-and-the-state-of-the-field.md) turns the $T$-count arithmetic of Example 1 into full resource estimates for Shor.
- **Sideways:** "an irrational rotation is dense on the circle" is the ergodicity of an irrational circle rotation, the simplest case in [`dynamical-systems` 5.5](../../dynamical-systems/lessons/05-05-symbolic-dynamics-ergodicity.md) — an orbit that never repeats and visits every neighbourhood. The $\epsilon$-net counting argument is a covering-number bound, the same capacity counting that limits what a model class can fit in [`machine-learning` 1.2](../../machine-learning/lessons/01-02-generalization-and-the-bias-variance-tradeoff.md).
