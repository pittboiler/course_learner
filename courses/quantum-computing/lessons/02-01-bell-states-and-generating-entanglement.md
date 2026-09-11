# Quantum Computing · Lesson 2.1: Bell states and generating entanglement

> ⏱ ~15 min · Module 2: Entanglement as a resource · Builds on: [1.4 (two qubits and entanglement)](01-04-two-qubits-tensor-products-and-entanglement.md), [1.5 (multi-qubit gates and circuits)](01-05-multi-qubit-gates-and-quantum-circuits.md) · Unlocks: [2.2 (density matrices)](02-02-density-matrices-and-the-partial-trace.md), [2.4 (teleportation)](02-04-quantum-teleportation.md)

## Why this matters

Four specific two-qubit states do more work in quantum information than all others combined. They are the **Bell states**, and they are the standard unit of entanglement: protocols are priced in "how many Bell pairs does this consume," the way classical protocols are priced in bits.

Two facts make them the right basis to think in. First, one two-gate circuit makes any of them, and **the same circuit run backwards measures which one you have** — so "prepare a Bell pair" and "perform a Bell measurement" are one piece of hardware. Second, the four states are distinguished by two signs, and those signs are the values of two commuting observables. That observation looks like bookkeeping here and becomes the entire stabilizer formalism in [5.4](05-04-stabilizer-codes-and-the-css-construction.md).

## The idea

Start from $\lvert00\rangle$, put qubit 0 into superposition with $H$, then let it control a NOT on qubit 1. The result is the state where **both qubits are random and always agree**:

$$\lvert\Phi^+\rangle = \tfrac{1}{\sqrt2}\left(\lvert00\rangle + \lvert11\rangle\right).$$

Feed the same circuit the other three computational basis states and you get the other three Bell states. The pattern is clean: the **first** input bit becomes a relative minus sign, and the **second** input bit decides whether the two qubits agree or disagree.

The deeper point is what "always agree" means here, because it is stronger than classical agreement. Two coins glued to the same answer agree when you look at them in the one way they were glued. $\lvert\Phi^+\rangle$ agrees in the computational basis *and* in the $X$ basis — you can rotate both qubits together into a different question and the perfect correlation survives. No prearranged classical answer can do that, which is the substance of the CHSH game in [2.6](02-06-the-chsh-game-and-device-independence.md).

## The formal version

> **Definition (Bell basis).** The four states
> $$\lvert\Phi^\pm\rangle = \tfrac{1}{\sqrt2}\left(\lvert00\rangle \pm \lvert11\rangle\right), \qquad \lvert\Psi^\pm\rangle = \tfrac{1}{\sqrt2}\left(\lvert01\rangle \pm \lvert10\rangle\right)$$
> form an orthonormal basis of the two-qubit space. Each is maximally entangled.

In words: four mutually exclusive, maximally entangled states that between them span everything two qubits can be. Check maximality with the determinant test of [1.4](01-04-two-qubits-tensor-products-and-entanglement.md): each coefficient table is $\tfrac{1}{\sqrt2}$ times a permutation matrix with signs, so $\lvert\det C\rvert = 1/2$, the maximum.

> **The Bell circuit.** With $B = \mathrm{CNOT}_{0\to1}\,(H\otimes I)$,
> $$B\lvert x y\rangle = \tfrac{1}{\sqrt2}\left(\lvert 0, y\rangle + (-1)^x\lvert 1, \bar y\rangle\right),$$
> so $\lvert00\rangle\mapsto\lvert\Phi^+\rangle$, $\lvert10\rangle\mapsto\lvert\Phi^-\rangle$, $\lvert01\rangle\mapsto\lvert\Psi^+\rangle$, $\lvert11\rangle\mapsto\lvert\Psi^-\rangle$.

In words: two gates map the computational basis onto the Bell basis, one to one. And since $B$ is unitary, $B^\dagger = (H\otimes I)\,\mathrm{CNOT}_{0\to1}$ maps back:

> **Bell measurement.** Applying $B^\dagger$ and then measuring both qubits in the computational basis returns the two bits $x,y$ identifying which Bell state you had. This is a projective measurement in the Bell basis.

In words: run the circuit backwards and read two bits. This is the single most important subroutine in Module 2 — teleportation and superdense coding are both just "Bell-measure and act on the answer."

The four states are also cleanly labeled by two observables:

> **Bell states as joint eigenstates.** $Z\otimes Z$ and $X\otimes X$ commute, and each Bell state is a simultaneous eigenstate of both (the card merges this with the local-Pauli column as [Bell states and local Paulis](../reference.md#bell-states-and-local-paulis)):

| Bell state | input $x\,y$ | $\langle Z\otimes Z\rangle$ | $\langle X\otimes X\rangle$ |
|---|---|---|---|
| $\lvert\Phi^+\rangle$ | 0 0 | $+1$ | $+1$ |
| $\lvert\Phi^-\rangle$ | 1 0 | $+1$ | $-1$ |
| $\lvert\Psi^+\rangle$ | 0 1 | $-1$ | $+1$ |
| $\lvert\Psi^-\rangle$ | 1 1 | $-1$ | $-1$ |

In words: "do the two bits agree?" is the observable $Z\otimes Z$, "do the two phases agree?" is $X\otimes X$, and the answers to those two yes/no questions name the state completely. Neither observable says anything about either qubit individually — that is exactly what makes the state entangled, and exactly the trick error correction will use to detect errors without reading data ([5.2](05-02-the-three-qubit-codes.md)).

One more fact, small and constantly useful:

> **Local Pauli gates move you around the Bell basis.** Applying $X$, $Z$, or $XZ$ to *either* qubit of $\lvert\Phi^+\rangle$ produces one of the other three Bell states:
> $$(I\otimes I)\lvert\Phi^+\rangle = \lvert\Phi^+\rangle,\quad (I\otimes X)\lvert\Phi^+\rangle = \lvert\Psi^+\rangle,\quad (I\otimes Z)\lvert\Phi^+\rangle = \lvert\Phi^-\rangle,\quad (I\otimes XZ)\lvert\Phi^+\rangle = -\lvert\Psi^-\rangle.$$

In words: the four Bell states are one Bell state plus a choice of Pauli applied to one side. Two bits of choice, four states — and that correspondence is precisely what superdense coding sells ([2.5](02-05-superdense-coding.md)) and what teleportation's corrections undo ([2.4](02-04-quantum-teleportation.md)).

## Picture

![Left: a two-wire circuit labelled PREPARE with inputs ket x and ket y, an H box on the top wire followed by a CNOT controlled from the top, annotated that the output is one of the four Bell states. Right: the same circuit reversed and labelled MEASURE, with the CNOT first, then the H box, then meter symbols on both wires, whose readouts are annotated as x and y. Below: a four-row table listing each Bell state with its input bits and its eigenvalues under Z tensor Z and X tensor X, all plus or minus one, with a note that the two signs are exactly the two input bits.](assets/02-01-fig1.svg)

The figure's real content is the symmetry between the two halves. A Bell measurement is not extra hardware; it is the preparation circuit with the arrow of time reversed, which is available on any machine that can prepare a Bell pair at all. That is why protocols that need Bell measurements are experimentally routine.

## Worked examples

**Example 1 — the correlations that no classical story reproduces.**

Take $\lvert\Phi^+\rangle$ and measure both qubits in the same basis, three times over.

*Computational ($Z$) basis.* Amplitudes are $1/\sqrt2$ on $\lvert00\rangle$ and $\lvert11\rangle$, zero elsewhere: outcomes 00 and 11 at probability 1/2 each. **Always agree.**

*Hadamard ($X$) basis.* Rewrite $\lvert\Phi^+\rangle$ in the $\lvert\pm\rangle$ basis. Using $\lvert0\rangle = \tfrac{1}{\sqrt2}(\lvert+\rangle+\lvert-\rangle)$ and $\lvert1\rangle = \tfrac{1}{\sqrt2}(\lvert+\rangle-\lvert-\rangle)$:

$$\lvert00\rangle + \lvert11\rangle = \tfrac12\left[(\lvert+\rangle+\lvert-\rangle)(\lvert+\rangle+\lvert-\rangle) + (\lvert+\rangle-\lvert-\rangle)(\lvert+\rangle-\lvert-\rangle)\right] = \lvert{+}{+}\rangle + \lvert{-}{-}\rangle,$$

the cross terms cancelling. So $\lvert\Phi^+\rangle = \tfrac{1}{\sqrt2}\left(\lvert{+}{+}\rangle + \lvert{-}{-}\rangle\right)$: **also always agree**, at 1/2 each.

*$Y$ basis.* The same computation in the $\lvert{\pm i}\rangle$ basis gives $\lvert\Phi^+\rangle = \tfrac{1}{\sqrt2}\left(\lvert{+i}\rangle\lvert{-i}\rangle + \lvert{-i}\rangle\lvert{+i}\rangle\right)$: **always disagree.**

Summarize as expectation values: $\langle ZZ\rangle = +1$, $\langle XX\rangle = +1$, $\langle YY\rangle = -1$. The product of the three signs is $-1$, which is forced, since $(Z\otimes Z)(X\otimes X)(Y\otimes Y) = -I\otimes I$ — two of the correlations determine the third.

Now the classical challenge. Write down hidden values $z_A, x_A, y_A$ for qubit A and $z_B, x_B, y_B$ for qubit B, each $\pm1$, prearranged before the measurement. Perfect agreement in $Z$ forces $z_A = z_B$; perfect agreement in $X$ forces $x_A = x_B$; perfect disagreement in $Y$ forces $y_A = -y_B$. A hidden-variable model can satisfy all three at once, so **no contradiction yet** — the Bell states' same-basis correlations are classically reproducible. The contradiction requires *different* bases on the two sides at *skew* angles, which is [2.6](02-06-the-chsh-game-and-device-independence.md). Worth knowing, because "spooky correlations" alone prove nothing.

**Example 2 — identifying an unknown Bell state with two bits.**

Someone hands you two qubits, promising the state is one of the four Bell states, and asks which. A single-qubit measurement is useless: every Bell state gives 50/50 on each qubit individually. But run $B^\dagger$ first.

Say the state is $\lvert\Psi^-\rangle = \tfrac{1}{\sqrt2}(\lvert01\rangle - \lvert10\rangle)$. Apply $\mathrm{CNOT}_{0\to1}$, flipping qubit 1 where qubit 0 is 1:

$$\tfrac{1}{\sqrt2}\left(\lvert01\rangle - \lvert11\rangle\right) = \left(\tfrac{1}{\sqrt2}(\lvert0\rangle - \lvert1\rangle)\right)\otimes\lvert1\rangle = \lvert-\rangle\lvert1\rangle.$$

The CNOT **disentangled** the pair — the state is now a product. Apply $H$ to qubit 0, sending $\lvert-\rangle\to\lvert1\rangle$:

$$\lvert1\rangle\lvert1\rangle.$$

Measure both: outcome $1,1$ with certainty, which is exactly the input pair $(x,y) = (1,1)$ that made $\lvert\Psi^-\rangle$. Two bits out, no ambiguity, no randomness.

The lesson generalizes and is worth stating sharply: **a Bell measurement extracts two deterministic bits from a state whose individual qubits are both maximally random.** All the information was in the correlations, and only a joint measurement can see it. That is why the two parties in teleportation must bring their qubits together — a Bell measurement cannot be performed by two people acting locally.

## Watch out

- You might think $\lvert\Phi^+\rangle$ means "both qubits are 0, or both are 1, I just don't know which." That mixture is a different object, with the same $Z$ statistics and *random* $X$ statistics instead of perfectly correlated ones. The distinction is the pure-versus-mixed distinction of [2.2](02-02-density-matrices-and-the-partial-trace.md), and it is measurable in one extra basis.
- You might think the Bell states are special because they are entangled. They are special because they are **maximally** entangled and **mutually orthogonal**, which is what makes them a basis and hence a measurement. Plenty of other states are entangled; only these four form the standard alphabet.
- You might think that since a Bell measurement gives two deterministic bits, you can use it to learn an unknown state. You cannot: it is deterministic only under the promise that the input is *one of the four*. Feed it a general two-qubit state and you get a probabilistic answer, and feed it a product state and you get pure noise.
- You might think Bell pairs are hard to make because entanglement sounds exotic. One $H$ and one CNOT is the cheapest nontrivial circuit there is; the difficulty is entirely in *keeping* the pair coherent, which is why Module 5 exists and this lesson does not.

## One-liner

> Four states, two signs, one circuit: the Bell basis is the alphabet of entanglement, and reading it is the same hardware as writing it, run backwards.

## Problems

**P1 (🟢)** Run the Bell circuit $B = \mathrm{CNOT}_{0\to1}(H\otimes I)$ on the input $\lvert10\rangle$ step by step, and confirm the output is $\lvert\Phi^-\rangle$. Then apply $B^\dagger$ to $\lvert\Phi^+\rangle$ and confirm you recover $\lvert00\rangle$.

**P2 (🟡)** Show that $Z\otimes Z$ and $X\otimes X$ commute, even though $Z$ and $X$ anticommute on a single qubit, and explain where the two minus signs go. Then verify the table's $\lvert\Psi^+\rangle$ row by applying both operators to $\lvert\Psi^+\rangle$ directly, and say why the existence of two commuting observables with no single-qubit content is what makes a *joint* measurement necessary.

**P3 (🔴, optional)** Show that Alice, acting on her qubit alone, can convert $\lvert\Phi^+\rangle$ into any of the four Bell states, and identify which Pauli gate produces which (up to an overall phase). Then prove the key security-flavoured consequence: Bob, examining only his qubit, cannot tell which of the four Alice chose. State what resource is therefore needed before the two bits Alice encoded become readable, and connect it to the Holevo bound's claim that one qubit carries at most one bit.

<details>
<summary>Solutions</summary>

**P1** *Forward.* Input $\lvert10\rangle$. Apply $H$ to qubit 0: $H\lvert1\rangle = \lvert-\rangle = \tfrac{1}{\sqrt2}(\lvert0\rangle-\lvert1\rangle)$, so the state is
$$\tfrac{1}{\sqrt2}\left(\lvert00\rangle - \lvert10\rangle\right).$$
Apply $\mathrm{CNOT}_{0\to1}$: the $\lvert00\rangle$ term has control 0 and is untouched; the $\lvert10\rangle$ term has control 1, so qubit 1 flips to give $\lvert11\rangle$:
$$\tfrac{1}{\sqrt2}\left(\lvert00\rangle - \lvert11\rangle\right) = \lvert\Phi^-\rangle. \checkmark$$

*Backward.* $B^\dagger = (H\otimes I)\mathrm{CNOT}_{0\to1}$. Start from $\lvert\Phi^+\rangle = \tfrac{1}{\sqrt2}(\lvert00\rangle+\lvert11\rangle)$. The CNOT sends $\lvert11\rangle\to\lvert10\rangle$:
$$\tfrac{1}{\sqrt2}\left(\lvert00\rangle+\lvert10\rangle\right) = \lvert+\rangle\lvert0\rangle.$$
Then $H$ on qubit 0 sends $\lvert+\rangle\to\lvert0\rangle$, giving $\lvert00\rangle$. ✓

**P2** *Commutation.* Compute both orders on a basis state $\lvert ab\rangle$, or work with the tensor structure directly:
$$(Z\otimes Z)(X\otimes X) = (ZX)\otimes(ZX), \qquad (X\otimes X)(Z\otimes Z) = (XZ)\otimes(XZ).$$
Since $ZX = -XZ$ on a single qubit, the first expression is $(-XZ)\otimes(-XZ) = (-1)^2\,(XZ)\otimes(XZ)$. **The two minus signs multiply to $+1$.** So the operators commute, and more generally two Pauli strings commute exactly when they anticommute on an *even* number of slots — the counting rule that organizes all of [5.4](05-04-stabilizer-codes-and-the-css-construction.md).

*The $\lvert\Psi^+\rangle$ row.* With $\lvert\Psi^+\rangle = \tfrac{1}{\sqrt2}(\lvert01\rangle+\lvert10\rangle)$:
$$(Z\otimes Z)\lvert01\rangle = (+1)(-1)\lvert01\rangle = -\lvert01\rangle, \qquad (Z\otimes Z)\lvert10\rangle = -\lvert10\rangle,$$
so $Z\otimes Z$ gives $-1$. And $X\otimes X$ flips both bits: $\lvert01\rangle\to\lvert10\rangle$, $\lvert10\rangle\to\lvert01\rangle$, which maps the symmetric combination to itself, giving $+1$. Matches the table. ✓

*Why joint.* Both operators have zero single-qubit content: $\langle Z\otimes I\rangle = \langle I\otimes Z\rangle = 0$ and likewise for $X$, since each qubit alone is maximally random. So there is no local measurement whose statistics depend on which Bell state you hold, while the *joint* observables $Z\otimes Z$ and $X\otimes X$ pin it down exactly. Information stored purely in correlations requires access to both halves to read — the operational core of both teleportation and quantum key distribution.

**P3** *The four conversions.* Applying a Pauli to Alice's qubit (qubit 0):
$$(I\otimes I)\lvert\Phi^+\rangle = \lvert\Phi^+\rangle,$$
$$(X\otimes I)\lvert\Phi^+\rangle = \tfrac{1}{\sqrt2}\left(\lvert10\rangle+\lvert01\rangle\right) = \lvert\Psi^+\rangle,$$
$$(Z\otimes I)\lvert\Phi^+\rangle = \tfrac{1}{\sqrt2}\left(\lvert00\rangle-\lvert11\rangle\right) = \lvert\Phi^-\rangle,$$
$$(XZ\otimes I)\lvert\Phi^+\rangle = \tfrac{1}{\sqrt2}\left(\lvert10\rangle - \lvert01\rangle\right) = -\lvert\Psi^-\rangle.$$
All four Bell states, from four local gates, with the last carrying a global phase that is unobservable. So Alice encodes two bits by choosing one of $\{I, X, Z, XZ\}$.

*Bob sees nothing.* Bob's qubit alone gives, in every case, probability 1/2 for each computational outcome — and the same for any other basis, since each Bell state is maximally entangled and hence maximally random on each side. Formally, Bob's reduced state is $I/2$ for all four Bell states ([2.2](02-02-density-matrices-and-the-partial-trace.md) computes this with the partial trace), and identical states cannot give different statistics. This is **no-signaling**: Alice's choice of gate is invisible to Bob, however many copies he measures, so her two bits have not travelled.

*The missing resource.* Bob needs **Alice's qubit**, physically delivered, so that he can perform a joint Bell measurement on both. Once he has it, Example 2's procedure reads out the two bits deterministically. That is superdense coding ([2.5](02-05-superdense-coding.md)): one qubit sent carries two bits, but only because a Bell pair was shared beforehand.

Connecting to Holevo: the bound says $n$ qubits transmitted carry at most $n$ classical bits — apparently contradicted by "one qubit, two bits." It is not, because Holevo counts *all* the qubits that moved. The Bell pair's distribution already required one qubit to travel to Bob earlier, so two qubits crossed the channel in total for two bits, exactly at the bound. **Entanglement does not beat Holevo; it lets you pay the cost in advance**, before you know what message you want to send.

</details>

## Connections

- **Backward:** the Bell circuit is the $H$-then-CNOT circuit of [1.5](01-05-multi-qubit-gates-and-quantum-circuits.md), and maximality is the determinant test of [1.4](01-04-two-qubits-tensor-products-and-entanglement.md) at its extreme value. The singlet $\lvert\Psi^-\rangle$ is the total-spin-zero state of [`quantum-mechanics` 4.6](../../quantum-mechanics/lessons/04-06-addition-angular-momenta.md), which is where its perfect anticorrelation in every basis comes from — a state with zero total angular momentum looks the same from every direction.
- **Forward:** [2.2](02-02-density-matrices-and-the-partial-trace.md) computes what one half of a Bell pair looks like on its own and finds it maximally mixed, which makes the no-signaling argument of P3 into a one-line calculation. [2.4](02-04-quantum-teleportation.md) and [2.5](02-05-superdense-coding.md) spend Bell pairs; [2.6](02-06-the-chsh-game-and-device-independence.md) proves their correlations have no classical explanation.
- **Sideways:** the $Z\otimes Z$ and $X\otimes X$ labelling is the two-qubit case of a **stabilizer group** ([5.4](05-04-stabilizer-codes-and-the-css-construction.md)) — a Bell state is the unique joint $+1$ eigenstate of two commuting Pauli strings, which makes it a $[[2,0,2]]$ code and the smallest nontrivial example of the formalism. Physically, the pairs are made by parametric down-conversion in [`photonics-quantum-optics` 4.3](../../photonics-quantum-optics/lessons/04-03-nonlinear-optics-parametric-down-conversion.md).
