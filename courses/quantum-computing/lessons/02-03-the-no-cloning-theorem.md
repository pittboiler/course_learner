# Quantum Computing · Lesson 2.3: The no-cloning theorem

> ⏱ ~15 min · Module 2: Entanglement as a resource · Builds on: [1.2 (single-qubit gates)](01-02-single-qubit-gates.md), [2.2 (density matrices and the partial trace)](02-02-density-matrices-and-the-partial-trace.md) · Unlocks: [2.4 (teleportation)](02-04-quantum-teleportation.md), [5.2 (the three-qubit codes)](05-02-the-three-qubit-codes.md)

## Why this matters

Classical computing rests on an assumption so basic nobody states it: you can copy a bit. Backups, fan-out in a circuit, reading a register twice, error correction by repetition — all of it is copying.

None of it is available. The **no-cloning theorem** says no machine copies an unknown quantum state, and the proof is two lines. The consequences run through the rest of the course:

- **Error correction cannot work by repetition** — so Module 5 needs a genuinely different idea, and the encoding $\alpha\lvert000\rangle + \beta\lvert111\rangle$ is not three copies of anything.
- **You cannot do tomography on one qubit**, because tomography needs many copies and you have one.
- **Eavesdropping is detectable**, which is what quantum key distribution sells ([`photonics-quantum-optics` 4.5](../../photonics-quantum-optics/lessons/04-05-quantum-information-taste.md)).
- **Teleportation must destroy the original** — otherwise it would be a copier.

What matters most is knowing precisely what is forbidden, because the theorem is routinely overstated. Copying *known* states is fine. Copying *orthogonal* states is fine, and is exactly classical bit-copying. *Moving* a state is fine. What is impossible is a single device that copies everything handed to it.

## The idea

Suppose a copier exists: a gate that takes your unknown qubit plus a blank one and returns two of yours.

Feed it $\lvert0\rangle$: out come two $\lvert0\rangle$'s. Feed it $\lvert1\rangle$: two $\lvert1\rangle$'s. So far, so classical. Now feed it $\lvert+\rangle$, which is *half* $\lvert0\rangle$ and half $\lvert1\rangle$.

A gate is linear. It has no choice: it must act on each piece separately and add the results. So it produces half "two zeros" and half "two ones":

$$\tfrac{1}{\sqrt2}\left(\lvert00\rangle + \lvert11\rangle\right) = \lvert\Phi^+\rangle.$$

But two copies of $\lvert+\rangle$ is $\lvert+\rangle\lvert+\rangle$, which is a **product** state and not that at all. Linearity gave us an entangled pair when we asked for a duplicate.

That is the whole theorem: **copying is not a linear operation, and quantum mechanics has nothing but linear operations.** Everything else in this lesson is that argument said more carefully, plus the list of loopholes it leaves open.

## The formal version

> **No-cloning theorem.** There is no unitary $U$ on two qubits with
> $$U\left(\lvert\psi\rangle\otimes\lvert0\rangle\right) = \lvert\psi\rangle\otimes\lvert\psi\rangle \quad\text{for every state } \lvert\psi\rangle.$$

**Proof by linearity.** Suppose $U$ clones $\lvert0\rangle$ and $\lvert1\rangle$: $U\lvert00\rangle = \lvert00\rangle$ and $U\lvert10\rangle = \lvert11\rangle$. Apply $U$ to $\lvert+\rangle\lvert0\rangle = \tfrac{1}{\sqrt2}(\lvert00\rangle + \lvert10\rangle)$ using linearity:

$$U\left(\lvert+\rangle\lvert0\rangle\right) = \tfrac{1}{\sqrt2}\left(U\lvert00\rangle + U\lvert10\rangle\right) = \tfrac{1}{\sqrt2}\left(\lvert00\rangle + \lvert11\rangle\right).$$

Cloning demands $\lvert+\rangle\lvert+\rangle = \tfrac12(\lvert00\rangle+\lvert01\rangle+\lvert10\rangle+\lvert11\rangle)$. These differ — one is entangled, the other a product ([1.4](01-04-two-qubits-tensor-products-and-entanglement.md)) — so no such $U$ exists. $\blacksquare$

**Proof by inner products.** Suppose $U$ clones both $\lvert\psi\rangle$ and $\lvert\varphi\rangle$. Unitaries preserve inner products, so

$$\langle\psi\vert\varphi\rangle = \left(\langle\psi\vert\otimes\langle0\rvert\right)\left(\lvert\varphi\rangle\otimes\lvert0\rangle\right) = \left(\langle\psi\vert\otimes\langle\psi\rvert\right)\left(\lvert\varphi\rangle\otimes\lvert\varphi\rangle\right) = \left(\langle\psi\vert\varphi\rangle\right)^2.$$

Writing $c = \langle\psi\vert\varphi\rangle$, we need $c = c^2$, so $c = 0$ or $c = 1$. **A cloner works only on sets of states that are mutually orthogonal or identical.** $\blacksquare$

The second proof is the more informative one, because it tells you exactly where the boundary is (the card states the theorem itself under [no-cloning](../reference.md#no-cloning-theorem)):

| Task | Possible? | Why |
|---|---|---|
| Copy a **known** state | Yes | just prepare a second one from the recipe |
| Copy states from a known **orthogonal** set | Yes | this is classical bit-copying; CNOT does it |
| **Move** a state to another wire | Yes | SWAP ([1.5](01-05-multi-qubit-gates-and-quantum-circuits.md)), or teleportation ([2.4](02-04-quantum-teleportation.md)) |
| Copy an unknown state from a non-orthogonal set | **No** | the theorem |
| Copy *approximately* | Partly | best universal fidelity is $5/6$ per copy |
| **Delete** an unknown state (no-deleting) | **No** | the time-reverse of the same argument |
| Broadcast a **mixed** state (no-broadcasting) | **No** | the generalization to density matrices |

Two entries deserve a sentence each. The $5/6$ is the optimal universal $1\to2$ cloner: you can always *try*, and the best possible average overlap between each output and the intended state is $5/6 \approx 0.833$, not 1. And no-deleting matters because it says quantum information is conserved in a strong sense — you cannot make it go away, only move it (which is why an error that leaks into the environment is still *somewhere*, and that is what makes error correction conceivable at all).

Finally, the connection that explains why the theorem is not negotiable:

> **Cloning would permit superluminal signaling.** If Bob could clone, Alice's choice of measurement basis on her half of a Bell pair would become detectable by Bob alone, contradicting no-signaling ([2.2](02-02-density-matrices-and-the-partial-trace.md)).

In words: no-cloning is not an independent postulate but a consequence of linearity, and linearity is what protects relativity. P3 works the argument out.

## Picture

![Left: a two-wire circuit with inputs ket psi and ket 0 entering a tall red box labelled U, whose two outputs are both labelled ket psi. Red text below reads that no such U exists for all unknown psi at once, with grey notes that it works fine for any fixed psi and for any orthogonal set. Right: a circle with two blue arrows from the centre separated by an arc labelled Theta at 60 degrees, representing two states before cloning, and an orange arrow at a wider separation labelled Theta prime, representing where the cloned pair would sit. Captions read that cloning would send cosine Theta to cosine squared Theta, so angles change and it is therefore not unitary, and that 60 degrees apart would become 75.5 degrees apart.](assets/02-03-fig1.svg)

The right panel is the inner-product proof drawn. Unitaries are **rigid motions** — they rotate the space without changing any angle between states. Cloning squares every overlap, and squaring a number less than 1 makes it smaller, so overlaps shrink and angles open up. A machine that spreads states apart is not a rotation, and that is the entire obstruction.

## Worked examples

**Example 1 — how badly the best attempt fails, quantified.**

The map $\lvert x\rangle\lvert0\rangle\to\lvert x\rangle\lvert x\rangle$ on basis states is just a CNOT, which is a perfectly good gate. So ask: how good a copier is CNOT?

Feed it $\lvert\psi\rangle = \alpha\lvert0\rangle+\beta\lvert1\rangle$ with a blank:

$$\mathrm{CNOT}\left(\alpha\lvert00\rangle + \beta\lvert10\rangle\right) = \alpha\lvert00\rangle + \beta\lvert11\rangle.$$

Compare with the target $\lvert\psi\rangle\lvert\psi\rangle = \alpha^2\lvert00\rangle + \alpha\beta\lvert01\rangle+\alpha\beta\lvert10\rangle+\beta^2\lvert11\rangle$. The fidelity is the squared overlap:

$$F = \left\lvert\langle\psi\vert\langle\psi\vert\left(\alpha\lvert00\rangle+\beta\lvert11\rangle\right)\right\rvert^2 = \left\lvert \bar\alpha^2\alpha + \bar\beta^2\beta\right\rvert^2 = \left(\lvert\alpha\rvert^3 + \lvert\beta\rvert^3\right)^2 \text{ for real } \alpha,\beta\ge 0.$$

Evaluate at the extremes:

| input | $F$ |
|---|---|
| $\lvert0\rangle$ | 1 |
| $\lvert1\rangle$ | 1 |
| $\lvert+\rangle$ | $\left(2\cdot 2^{-3/2}\right)^2 = 1/2$ |

Perfect on the basis, worst possible on the equator. And what CNOT actually produced from $\lvert+\rangle$ was $\lvert\Phi^+\rangle$: instead of two copies, it made the two qubits *entangled*. This is the single most useful way to remember the theorem — **an attempted copy comes out as entanglement instead**, and the "copy" and the original are then correlated rather than independent.

Note in passing what CNOT does to the *original*, by the partial trace: qubit 0's reduced state after the attempt is $\mathrm{diag}(\lvert\alpha\rvert^2, \lvert\beta\rvert^2)$, which for $\lvert+\rangle$ is $I/2$. The attempt to copy **destroyed the coherence of the input.** That is measurement disturbance, and it is the same mechanism that exposes an eavesdropper.

**Example 2 — the encoding that looks like copying and is not.**

Module 5's three-qubit code encodes
$$\alpha\lvert0\rangle + \beta\lvert1\rangle \;\longmapsto\; \alpha\lvert000\rangle + \beta\lvert111\rangle.$$

It is tempting to read that as three copies. It is not. Three copies would be

$$\left(\alpha\lvert0\rangle+\beta\lvert1\rangle\right)^{\otimes 3} = \alpha^3\lvert000\rangle + \alpha^2\beta\lvert001\rangle + \cdots + \beta^3\lvert111\rangle,$$

which has all eight terms. Take $\alpha = \sqrt{0.7}$, $\beta = \sqrt{0.3}$ and compare the two eight-component vectors:

| basis state | encoded | three copies |
|---|---|---|
| $\lvert000\rangle$ | 0.837 | 0.586 |
| $\lvert001\rangle$ | 0 | 0.383 |
| $\lvert111\rangle$ | 0.548 | 0.164 |

Their overlap is $\lvert\langle\text{copies}\vert\text{encoded}\rangle\rvert^2 = 0.336$ — they are barely related. The encoded state is a **superposition of two collective configurations**, all-zeros and all-ones; it is a GHZ-like state ([1.4](01-04-two-qubits-tensor-products-and-entanglement.md) P3), entangled across every cut, and each of its three qubits alone is in the mixed state $\mathrm{diag}(0.7, 0.3)$ with no coherence whatsoever.

This is the loophole error correction lives in. **The encoding map is linear and is defined only on the two-dimensional code space** — it sends $\lvert0\rangle\to\lvert000\rangle$ and $\lvert1\rangle\to\lvert111\rangle$, two orthogonal states, and extends by linearity. Those are the "orthogonal set" row of the table, so the map is a legitimate unitary. It never copies $\alpha$ and $\beta$; it spreads a single logical qubit across three physical ones, which is exactly what lets you detect damage to one of them without learning $\alpha$ or $\beta$ ([5.2](05-02-the-three-qubit-codes.md)).

## Watch out

- You might think no-cloning forbids all copying and therefore forbids classical computing on quantum hardware. It forbids copying *unknown non-orthogonal* states. Copying $\lvert0\rangle$ or $\lvert1\rangle$ when you know that is what you have is a CNOT, and every reversible classical circuit is built from exactly that.
- You might think no-cloning makes teleportation impossible, or that teleportation violates it. Teleportation moves a state and **destroys the original in the process** — Alice's qubit ends up in a random basis state with no trace of $\alpha$ or $\beta$. If the original survived you would have a cloner, so the destruction is forced by the theorem, not incidental to the protocol.
- You might think you could clone by measuring the state first and then preparing copies. You can, and it is a bad copier: one measurement of one qubit gives one bit ([1.3](01-03-measurement-and-the-born-rule.md)), so you learn almost nothing about $\theta$ and $\phi$ and your "copies" are wrong. Doing it optimally gives average fidelity $2/3$, worse than the $5/6$ of the best coherent cloner.
- You might think approximate cloning being possible weakens the theorem. It sharpens it: the optimal fidelity $5/6$ is a *theorem*, not an engineering limit, and security proofs for quantum key distribution are built on exactly that number — an eavesdropper's best possible copy is quantifiably imperfect, so her disturbance is quantifiably detectable.

## One-liner

> Copying squares every overlap and unitaries preserve them, so a universal copier would have to change angles it cannot change — and what you get instead of a copy is entanglement.

## Problems

**P1 (🟢)** Assume a gate $U$ satisfies $U\lvert00\rangle = \lvert00\rangle$ and $U\lvert10\rangle = \lvert11\rangle$. Compute $U\left(\lvert+\rangle\lvert0\rangle\right)$ by linearity, write down what perfect cloning would have required, and compute the fidelity $\lvert\langle{+}{+}\vert U(\lvert+\rangle\lvert0\rangle)\rangle\rvert^2$ between the two. Then say which of the two outputs is entangled.

**P2 (🟡)** Give the inner-product proof in full: assume $U$ clones two states $\lvert\psi\rangle,\lvert\varphi\rangle$ with overlap $c = \langle\psi\vert\varphi\rangle$, derive $c = c^2$, and state the two solutions. Then use the result to decide which of these sets of states admits a perfect cloner, with a one-line reason each: (a) $\{\lvert0\rangle,\lvert1\rangle\}$; (b) $\{\lvert0\rangle,\lvert+\rangle\}$; (c) $\{\lvert0\rangle,\lvert1\rangle,\lvert+\rangle,\lvert-\rangle\}$; (d) the four Bell states.

**P3 (🔴, optional)** Show that a perfect cloner would let Alice signal to Bob faster than light. Setup: they share $\lvert\Phi^+\rangle$; Alice measures her qubit in either the $Z$ basis or the $X$ basis, encoding one bit in her *choice*; Bob does not learn her outcome. (a) Write Bob's reduced state in each case and confirm they are equal, so that with one qubit he learns nothing. (b) Now let Bob clone his qubit once before measuring, so his state becomes the corresponding mixture of two-qubit *product* states. Write both two-qubit mixtures, find a measurement whose statistics differ, and compute the two probabilities. (c) State what the calculation proves, and which axiom of quantum mechanics is doing the protecting.

<details>
<summary>Solutions</summary>

**P1** Write $\lvert+\rangle\lvert0\rangle = \tfrac{1}{\sqrt2}\left(\lvert00\rangle + \lvert10\rangle\right)$. By linearity,

$$U\left(\lvert+\rangle\lvert0\rangle\right) = \tfrac{1}{\sqrt2}\left(\lvert00\rangle + \lvert11\rangle\right) = \lvert\Phi^+\rangle.$$

Perfect cloning would have required

$$\lvert+\rangle\lvert+\rangle = \tfrac12\left(\lvert00\rangle+\lvert01\rangle+\lvert10\rangle+\lvert11\rangle\right).$$

Fidelity: the overlap is $\langle{+}{+}\vert\Phi^+\rangle = \tfrac12\cdot\tfrac{1}{\sqrt2} + \tfrac12\cdot\tfrac{1}{\sqrt2} = \tfrac{1}{\sqrt2}$ (only the $\lvert00\rangle$ and $\lvert11\rangle$ components contribute), so

$$F = \left\lvert\tfrac{1}{\sqrt2}\right\rvert^2 = \tfrac12.$$

Half. Of the two outputs, $\lvert\Phi^+\rangle$ is **maximally entangled** (determinant $1/2$) and $\lvert+\rangle\lvert+\rangle$ is a **product state** (determinant 0). The attempted copy produced entanglement instead of duplication — the fastest way to remember the theorem.

**P2** Unitaries preserve inner products, so compute the overlap of the two inputs and the two outputs and set them equal. Inputs:

$$\left(\langle\psi\vert\otimes\langle0\rvert\right)\left(\lvert\varphi\rangle\otimes\lvert0\rangle\right) = \langle\psi\vert\varphi\rangle\,\langle0\vert0\rangle = c.$$

Outputs, assuming both were cloned:

$$\left(\langle\psi\vert\otimes\langle\psi\rvert\right)\left(\lvert\varphi\rangle\otimes\lvert\varphi\rangle\right) = \langle\psi\vert\varphi\rangle\langle\psi\vert\varphi\rangle = c^2.$$

Hence $c = c^2$, so $c(c-1) = 0$ and $c \in \{0, 1\}$: the two states are either orthogonal or identical (up to phase).

(a) $\{\lvert0\rangle,\lvert1\rangle\}$: **clonable.** Overlap 0. The cloner is CNOT.

(b) $\{\lvert0\rangle,\lvert+\rangle\}$: **not clonable.** Overlap $1/\sqrt2$, neither 0 nor 1.

(c) $\{\lvert0\rangle,\lvert1\rangle,\lvert+\rangle,\lvert-\rangle\}$: **not clonable.** The set contains the non-orthogonal pair from (b). Note this is exactly the BB84 state set, and its unclonability is the security foundation of that protocol.

(d) The four Bell states: **clonable in principle.** They are mutually orthogonal ([2.1](02-01-bell-states-and-generating-entanglement.md)), so the theorem permits it — measure in the Bell basis to learn which one you have (deterministically, under the promise), then prepare two fresh ones. Note this uses the promise: the procedure fails on a general two-qubit state.

**P3**

(a) All four Bell states, and hence $\lvert\Phi^+\rangle$, give Bob's reduced state $\rho_B = I/2$ ([2.2](02-02-density-matrices-and-the-partial-trace.md) P2). If Alice measures in the $Z$ basis, Bob holds $\lvert0\rangle$ or $\lvert1\rangle$ with probability 1/2 each, so his state is
$$\rho_B^{(Z)} = \tfrac12\lvert0\rangle\langle0\rvert + \tfrac12\lvert1\rangle\langle1\rvert = \tfrac{I}{2}.$$
If she measures in the $X$ basis, he holds $\lvert+\rangle$ or $\lvert-\rangle$ with probability 1/2 each, so
$$\rho_B^{(X)} = \tfrac12\lvert+\rangle\langle+\rvert + \tfrac12\lvert-\rangle\langle-\rvert = \tfrac{I}{2}.$$
Identical. With one qubit, Bob has exactly zero information about Alice's choice, no matter how cleverly he measures — the calculation of [2.2](02-02-density-matrices-and-the-partial-trace.md) P1, seen from the other side.

(b) Now give Bob a cloner. Each pure state in the mixture becomes two copies of itself:

$$\rho^{(Z)}_{BB'} = \tfrac12\lvert00\rangle\langle00\rvert + \tfrac12\lvert11\rangle\langle11\rvert, \qquad \rho^{(X)}_{BB'} = \tfrac12\lvert{+}{+}\rangle\langle{+}{+}\rvert + \tfrac12\lvert{-}{-}\rangle\langle{-}{-}\rvert.$$

These are **different matrices**. A measurement that separates them: measure both qubits in the computational basis and ask whether the two results agree, i.e. measure the projector $\Pi_{\text{agree}} = \lvert00\rangle\langle00\rvert + \lvert11\rangle\langle11\rvert$.

$$P(\text{agree}\mid Z) = \mathrm{tr}\left(\Pi_{\text{agree}}\rho^{(Z)}\right) = 1, \qquad P(\text{agree}\mid X) = \mathrm{tr}\left(\Pi_{\text{agree}}\rho^{(X)}\right) = \tfrac12,$$

the second because $\lvert{+}{+}\rangle$ and $\lvert{-}{-}\rangle$ each give all four computational outcomes with probability 1/4, so agreement half the time. (Their trace distance is $1/2$, so a single shot already distinguishes them with probability $3/4$, and repeating with more clones drives the error to zero.)

(c) So a cloner would let Bob read Alice's **choice of basis** — one bit she encoded by a free decision — from his qubit alone, with no message sent, at arbitrary distance and instantaneously. That is superluminal signaling, and it is inconsistent with relativity.

The axiom doing the protecting is **linearity of quantum evolution.** No-signaling was proved in [2.2](02-02-density-matrices-and-the-partial-trace.md) using only linearity and the cyclicity of the trace, and no-cloning was proved above using only linearity. They are two faces of one constraint: the reason Bob's marginal is untouchable and the reason he cannot make copies are the same reason. Notably, this makes no-cloning *non-negotiable* — any modification of quantum mechanics that permitted cloning would have to break either linearity or relativity, which is why proposals to do so are met with the calculation above rather than with an experiment.

</details>

## Connections

- **Backward:** both proofs use only that gates are linear and preserve inner products, which is the definition of unitary from [1.2](01-02-single-qubit-gates.md). The "attempted copy becomes entanglement" observation is the CNOT-on-superposition calculation of [1.5](01-05-multi-qubit-gates-and-quantum-circuits.md) P1, read as a failure rather than a feature.
- **Forward:** [2.4](02-04-quantum-teleportation.md) is the protocol that moves a state legally, and its destruction of the original is enforced by this theorem. [5.2](05-02-the-three-qubit-codes.md) builds the encoding of Example 2 and shows how to correct errors without ever copying or reading the logical state; [5.3](05-03-the-shor-code-and-error-discretization.md) explains why that is enough even for continuous errors.
- **Sideways:** no-cloning is the physical foundation of quantum key distribution, taught in [`photonics-quantum-optics` 4.5](../../photonics-quantum-optics/lessons/04-05-quantum-information-taste.md) — this course does not re-teach BB84. It is also the reason the data-processing inequality of [`information-theory` 1.5](../../information-theory/lessons/01-05-data-processing-inequality.md) has a strict quantum analogue: information cannot be amplified by local processing, classically or quantumly, and quantumly you cannot even duplicate it.
