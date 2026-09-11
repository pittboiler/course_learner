# Quantum Computing · Lesson 1.2: Single-qubit gates

> ⏱ ~15 min · Module 1: Qubits, gates, and circuits · Builds on: [1.1 (the qubit and the Bloch sphere)](01-01-the-qubit-and-the-bloch-sphere.md), [`linalg-refresher` 5.1 (the spectral theorem)](../../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md) · Unlocks: [1.3 (measurement and the Born rule)](01-03-measurement-and-the-born-rule.md), [1.6 (universal gate sets)](01-06-universal-gate-sets-and-circuit-synthesis.md)

## Why this matters

States are the nouns; gates are the verbs. A quantum algorithm is nothing but a product of gate matrices applied to a starting state, so if you can multiply $2\times2$ matrices you can already run half this course by hand.

But the gate set has a shape you need to feel, and the shape is strange from a classical angle. **Every quantum gate is reversible** — there is no quantum AND gate, because AND throws information away and unitary matrices cannot. That single constraint forces the whole design of oracles in Module 3, and it is why classical circuits must be rebuilt as reversible ones before a quantum computer can run them at all.

The other thing to take from this lesson is a mental animation. Once you see a gate as *a rotation of the sphere*, statements that look like matrix trivia — that $H$ turns a $Z$ measurement into an $X$ measurement, that two flips make a phase — become obvious by looking.

## The idea

A gate must do two things: keep the state's length 1 (so probabilities still sum to one) and be undoable (so evolution is reversible). Length-preserving invertible linear maps are exactly the **unitary** matrices, so "gate" and "unitary" are synonyms for the rest of the course.

On the Bloch sphere the picture is cleaner still. A length-preserving map of the sphere to itself that doesn't tear it is a **rotation**: an axis and an angle. So:

> Every single-qubit gate is "spin the sphere by some angle about some axis."

Three special cases carry names.

- **$X$** is a half-turn about the $x$ axis. It swaps the poles, so it swaps $\lvert0\rangle$ and $\lvert1\rangle$ — the bit flip.
- **$Z$** is a half-turn about the $z$ axis. It leaves the poles alone and swaps $\lvert+\rangle$ with $\lvert-\rangle$ — the phase flip.
- **$H$** (Hadamard) is a half-turn about the diagonal axis midway between $x$ and $z$. That single move exchanges the two axes: poles go to the equator and back. It is the gate that *creates* superposition, and you will use it more than all the others combined.

Notice that $X$ and $Z$ are the same gate seen from different angles — literally, since $H X H = Z$. "Bit flip" and "phase flip" are not two kinds of error; they are one kind of error and two choices of basis. Module 5 leans on that hard.

## The formal version

> **Definition (gate).** A single-qubit gate is a unitary $U \in \mathbb{C}^{2\times2}$: $U^\dagger U = U U^\dagger = I$, where $U^\dagger$ is the conjugate transpose. Acting on a state, $\lvert\psi'\rangle = U\lvert\psi\rangle$, and the inverse gate is $U^\dagger$.

In words: a gate is a matrix whose columns are orthonormal, and running it backwards means applying its conjugate transpose. Every gate has an undo button; this is the structural break from classical logic.

The standard library:

| Gate | Matrix | Bloch action | Effect |
|---|---|---|---|
| $X$ | $\begin{pmatrix}0&1\\1&0\end{pmatrix}$ | $\pi$ about $\hat x$ | $\lvert0\rangle\!\leftrightarrow\!\lvert1\rangle$ |
| $Y$ | $\begin{pmatrix}0&-i\\i&0\end{pmatrix}$ | $\pi$ about $\hat y$ | $\lvert0\rangle\!\to\! i\lvert1\rangle$, $\lvert1\rangle\!\to\!-i\lvert0\rangle$ |
| $Z$ | $\begin{pmatrix}1&0\\0&-1\end{pmatrix}$ | $\pi$ about $\hat z$ | $\lvert+\rangle\!\leftrightarrow\!\lvert-\rangle$ |
| $H$ | $\tfrac{1}{\sqrt2}\begin{pmatrix}1&1\\1&-1\end{pmatrix}$ | $\pi$ about $\tfrac{\hat x+\hat z}{\sqrt2}$ | $\lvert0\rangle\!\to\!\lvert+\rangle$, $\lvert1\rangle\!\to\!\lvert-\rangle$ |
| $S$ | $\begin{pmatrix}1&0\\0&i\end{pmatrix}$ | $\pi/2$ about $\hat z$ | $\lvert+\rangle\!\to\!\lvert{+i}\rangle$ |
| $T$ | $\begin{pmatrix}1&0\\0&e^{i\pi/4}\end{pmatrix}$ | $\pi/4$ about $\hat z$ | the "small" phase; $T^2=S$, $T^4=Z$ |

The three Paulis satisfy one relation that generates all the rest:

$$X^2=Y^2=Z^2=I, \qquad XY = iZ, \qquad YZ = iX, \qquad ZX = iY,$$

and distinct Paulis **anticommute**: $XZ = -ZX$. In words: applying two different Paulis in the two possible orders differs by a minus sign, which is a phase you can usually ignore on a single qubit and never on two ([1.5](01-05-multi-qubit-gates-and-quantum-circuits.md)).

The general rotation, written with the Pauli vector $\vec\sigma = (X,Y,Z)$:

> **Rotation gates.** For a unit vector $\hat n$ and angle $\vartheta$,
> $$R_{\hat n}(\vartheta) = \exp\!\left(-i\frac{\vartheta}{2}\,\hat n\cdot\vec\sigma\right) = \cos\frac{\vartheta}{2}\,I - i\sin\frac{\vartheta}{2}\,(\hat n\cdot\vec\sigma),$$
> and this rotates the Bloch vector by angle $\vartheta$ about the axis $\hat n$.

In words: exponentiate a Pauli and you get a rotation about that Pauli's axis, with the familiar half-angle in the matrix and the full angle on the sphere. The second equality holds because $(\hat n\cdot\vec\sigma)^2 = I$, which collapses the exponential series into a cosine plus a sine — the same trick as Euler's formula.

> **Every gate is a rotation.** Any single-qubit unitary can be written $U = e^{i\alpha} R_{\hat n}(\vartheta)$ for some real $\alpha$, unit $\hat n$, and angle $\vartheta$; equivalently $U = e^{i\alpha}R_z(\beta)R_y(\gamma)R_z(\delta)$ (**Euler decomposition**).

In words: three angles and an irrelevant phase describe every possible single-qubit gate, which is the same "two parameters plus phase" count as a state plus one more for the rotation angle. The Euler form matters practically: hardware usually offers only $R_z$ (free, done in software) and one physical rotation, and this says that is enough.

The named gates are rotations with the phase made explicit: $X = i R_x(\pi)$, $Z = i R_z(\pi)$, $H = i R_{\hat n}(\pi)$ with $\hat n = (\hat x + \hat z)/\sqrt2$, and $T = e^{i\pi/8}R_z(\pi/4)$.

## Picture

![Three Bloch spheres side by side. Left: a dashed red arc showing a half-turn about the x axis, with a blue arrow at the north pole labelled ket 0 and a red arrow at the south pole labelled ket 1. Middle: a dashed red arc showing a half-turn about the z axis, with a blue arrow along plus-x labelled ket plus and a red arrow along minus-x labelled ket minus. Right: an orange dashed line marking the diagonal axis n-hat midway between x and z, with a dashed red arc for the half-turn about it, a blue arrow at the north pole labelled ket 0 and a red arrow along plus-x labelled ket plus.](assets/01-02-fig1.svg)

All three are half-turns. They differ only in the axis, and the axis is the entire content of the gate. The right-hand panel is the one to memorize: $H$'s axis sits at 45 degrees between $\hat x$ and $\hat z$, so a half-turn about it **swaps those two axes** — which is exactly the statement $HXH = Z$ and $HZH = X$, read off a picture instead of multiplied out.

## Worked examples

**Example 1 — simulate a three-gate circuit two ways.**

Apply $H$, then $T$, then $H$ to $\lvert0\rangle$. Matrix route, left to right in time means right to left in the product:

$$\lvert\psi\rangle = H T H \lvert0\rangle.$$

Step one: $H\lvert0\rangle = \lvert+\rangle = \tfrac{1}{\sqrt2}(\lvert0\rangle+\lvert1\rangle)$.
Step two: $T$ multiplies the $\lvert1\rangle$ amplitude by $e^{i\pi/4}$, giving $\tfrac{1}{\sqrt2}\left(\lvert0\rangle + e^{i\pi/4}\lvert1\rangle\right)$.
Step three: apply $H$ to each basis ket, using $H\lvert0\rangle = \tfrac{1}{\sqrt2}(\lvert0\rangle+\lvert1\rangle)$ and $H\lvert1\rangle = \tfrac{1}{\sqrt2}(\lvert0\rangle-\lvert1\rangle)$:

$$\lvert\psi\rangle = \tfrac12\left[(1 + e^{i\pi/4})\lvert0\rangle + (1 - e^{i\pi/4})\lvert1\rangle\right] = (0.8536 + 0.3536i)\lvert0\rangle + (0.1464 - 0.3536i)\lvert1\rangle.$$

So $P(0) = \lvert 0.8536+0.3536i\rvert^2 = 0.7286 + 0.1250 = 0.8536$. That number is $\cos^2(\pi/8)$, and the geometry says why.

Geometric route: $H$ sends the north pole to $+\hat x$. Then $T$ rotates by $\pi/4$ about $\hat z$, carrying $+\hat x$ to $(\cos45^\circ, \sin45^\circ, 0)$. Then the second $H$ swaps $x$ and $z$ while flipping $y$, i.e. $(x,y,z)\mapsto(z,-y,x)$, landing at

$$\vec r = \left(0,\ -\tfrac{1}{\sqrt2},\ \tfrac{1}{\sqrt2}\right).$$

The polar angle of that vector is $\theta = 45^\circ$, so $P(0) = \cos^2(\theta/2) = \cos^2(22.5^\circ) = 0.8536$. Same answer, no complex arithmetic. **The sandwich $HTH$ converted a phase rotation into a probability rotation** — that is the entire mechanism by which phases become visible, and it recurs in every algorithm from [3.2](03-02-deutsch-jozsa.md) onward.

**Example 2 — why $HZH = X$ is the most useful identity here.**

Multiply it out:
$$HZH = \tfrac12\begin{pmatrix}1&1\\1&-1\end{pmatrix}\begin{pmatrix}1&0\\0&-1\end{pmatrix}\begin{pmatrix}1&1\\1&-1\end{pmatrix} = \tfrac12\begin{pmatrix}1&1\\1&-1\end{pmatrix}\begin{pmatrix}1&1\\-1&1\end{pmatrix} = \tfrac12\begin{pmatrix}0&2\\2&0\end{pmatrix} = X.$$

Since $H = H^\dagger = H^{-1}$, this reads: **do $H$, act with $X$, undo $H$, and the net effect was $Z$** (and vice versa). Conjugation by $H$ is a change of basis, and it exchanges the roles of "flip the bit" and "flip the phase."

Two payoffs, both used constantly:

1. **Measurement in any basis needs no new hardware.** To measure along $\hat x$, apply $H$ and measure along $\hat z$ ([1.3](01-03-measurement-and-the-born-rule.md)).
2. **Phase-flip errors are bit-flip errors in disguise.** The three-qubit phase-flip code in [5.2](05-02-the-three-qubit-codes.md) is literally the bit-flip code with an $H$ glued to each end, and that one observation saves half the work of building it.

## Watch out

- You might think $X$ is the quantum NOT gate in the full sense. It flips the poles, but $X\lvert+\rangle = \lvert+\rangle$ — the state that is "half 0 and half 1" is completely unmoved by a bit flip. Calling $X$ "NOT" invites you to forget that it is a rotation with a fixed axis, and that axis has states on it.
- You might think $T$ rotates the sphere by $\pi/8$, since $e^{i\pi/4} = e^{2i\pi/8}$ and the half-angle shows up everywhere. It rotates by $\pi/4$. The rule: a diagonal gate $\mathrm{diag}(1, e^{i\lambda})$ turns the Bloch sphere by exactly $\lambda$ about $\hat z$, because $\lambda$ is the *relative* phase and the azimuth $\phi$ is the relative phase.
- You might think you can ignore all phases in front of gates, since global phase is unphysical. True for a gate applied to the whole register, false for a gate applied *conditionally*. The $-1$ in $X Z = -ZX$ becomes an observable relative phase the moment either gate is controlled on another qubit, which is exactly how phase kickback works ([3.1](03-01-oracles-reversibility-and-phase-kickback.md)).
- You might think reversibility is a mild technical condition. It forbids the gate you use most in classical code: AND, which maps four inputs to two outputs and therefore cannot be inverted. Making AND quantum requires keeping the inputs around, which is why the Toffoli gate has three wires ([1.5](01-05-multi-qubit-gates-and-quantum-circuits.md)) and why oracles carry ancillas ([3.1](03-01-oracles-reversibility-and-phase-kickback.md)).

## One-liner

> A gate is a rotation of the sphere: the axis is the gate's identity, the angle is its strength, and conjugating by $H$ swaps the $x$ and $z$ axes so bit flips and phase flips trade places.

## Problems

**P1 (🟢)** Compute $H S H \lvert 0\rangle$ as an explicit vector, give its Bloch vector, and identify the resulting state by name from the table in [1.1](01-01-the-qubit-and-the-bloch-sphere.md). Then state, in axis-and-angle language, what gate $HSH$ is.

**P2 (🟡)** Verify $XY = iZ$ by direct multiplication, and then interpret it on the Bloch sphere: a half-turn about $\hat x$ followed by a half-turn about $\hat y$ equals a half-turn about $\hat z$. Where did the factor of $i$ go, and why is it safe to drop here but not when the gates are controlled? Also state what $X$ and $Y$ applied in the opposite order gives, and what that says about the order of operations on a sphere.

**P3 (🔴, optional)** Find explicit Euler angles for the Hadamard gate: real numbers $\alpha,\beta,\gamma,\delta$ with $H = e^{i\alpha}R_z(\beta)R_y(\gamma)R_z(\delta)$. Then explain why hardware that implements only $R_z$ rotations in software (a "virtual $Z$," free and exact) plus a single physical $R_y(\pi/2)$ pulse can nonetheless produce every single-qubit gate, and say how many physical pulses an arbitrary gate needs.

<details>
<summary>Solutions</summary>

**P1** Take it in three steps. $H\lvert0\rangle = \tfrac{1}{\sqrt2}(\lvert0\rangle + \lvert1\rangle)$. Then $S$ multiplies the $\lvert1\rangle$ amplitude by $i$: $\tfrac{1}{\sqrt2}(\lvert0\rangle + i\lvert1\rangle) = \lvert{+i}\rangle$. Then $H$:

$$H\lvert{+i}\rangle = \tfrac{1}{2}\left[(1+i)\lvert0\rangle + (1-i)\lvert1\rangle\right] = \left(\tfrac12+\tfrac{i}{2}\right)\lvert0\rangle + \left(\tfrac12-\tfrac{i}{2}\right)\lvert1\rangle.$$

Factor out the global phase $\tfrac12+\tfrac{i}{2} = \tfrac{1}{\sqrt2}e^{i\pi/4}$:

$$= \tfrac{1}{\sqrt2}e^{i\pi/4}\left(\lvert0\rangle + \frac{1/2 - i/2}{1/2+i/2}\lvert1\rangle\right) = \tfrac{e^{i\pi/4}}{\sqrt2}\left(\lvert0\rangle - i\lvert1\rangle\right),$$

since $(1-i)/(1+i) = -i$. Up to global phase this is $\lvert{-i}\rangle$, Bloch vector $(0,-1,0)$, so $P(0) = P(1) = 1/2$.

As an axis-and-angle gate: $S = e^{i\pi/4}R_z(\pi/2)$, and conjugating by $H$ swaps $\hat z$ with $\hat x$, so $HSH = e^{i\pi/4}R_x(\pi/2)$ — **a quarter-turn about $\hat x$.** Check it against the answer: a quarter-turn about $\hat x$ carries $+\hat z$ to $-\hat y$, which is exactly $\lvert0\rangle \to \lvert{-i}\rangle$.

**P2** Multiplication:
$$XY = \begin{pmatrix}0&1\\1&0\end{pmatrix}\begin{pmatrix}0&-i\\i&0\end{pmatrix} = \begin{pmatrix}i&0\\0&-i\end{pmatrix} = i\begin{pmatrix}1&0\\0&-1\end{pmatrix} = iZ.$$

Geometrically: $X$ is a half-turn about $\hat x$ and $Y$ a half-turn about $\hat y$; composing two half-turns about perpendicular axes gives a half-turn about the axis perpendicular to both, namely $\hat z$. The rotation content of the identity is exactly right.

The factor of $i$ is the **global phase** that the Bloch sphere throws away. It is a real feature of the matrices, not an error: the map from $SU(2)$ matrices to sphere rotations is two-to-one, since $U$ and $-U$ rotate identically, so an identity that is exact on rotations can be off by a phase on matrices. Dropping it is safe when the gate acts on the whole register, because no measurement sees a global phase ([1.1](01-01-the-qubit-and-the-bloch-sphere.md)). It is **not** safe under control: a controlled-$U$ applies the phase only to the branch where the control is 1, turning a global phase into a relative one between branches. That is not a nuisance; it is the engine of phase kickback ([3.1](03-01-oracles-reversibility-and-phase-kickback.md)) and hence of every algorithm in Module 3 and 4.

Opposite order: $YX = -iZ$, so $XY = -YX$. Rotations do not commute, and here the two orders give half-turns about $+\hat z$ and about $-\hat z$ — which are the *same rotation* of the sphere, differing only by the phase. So the anticommutation is invisible on one qubit and decisive on two.

**P3** One valid choice is
$$H = e^{i\pi/2}\,R_z(0)\,R_y(\pi/2)\,R_z(\pi) = i\,R_y(\pi/2)R_z(\pi).$$

Check it on the sphere: $R_z(\pi)$ is a half-turn about $\hat z$, carrying $+\hat x \to -\hat x$ and fixing $\pm\hat z$. Then $R_y(\pi/2)$ is a quarter-turn about $\hat y$, carrying $+\hat z \to +\hat x$ and $-\hat x \to +\hat z$. Net: $+\hat z \leftrightarrow +\hat x$ and $-\hat y \to -\hat y$ reversed appropriately — precisely $H$'s action of swapping $\hat x$ and $\hat z$ while flipping $\hat y$. (Matrix check: $R_y(\pi/2)R_z(\pi) = \tfrac{1}{\sqrt2}\begin{pmatrix}1&-1\\1&1\end{pmatrix}\begin{pmatrix}-i&0\\0&i\end{pmatrix}$, and multiplying then pulling out $i$ gives $H$.)

Why $R_z$-in-software plus one fixed physical pulse suffices: the Euler decomposition says every gate is $e^{i\alpha}R_z(\beta)R_y(\gamma)R_z(\delta)$, so the only *physical* rotation needed is one with an arbitrary angle. Conjugation by a $z$-rotation slides the axis around the equator,
$$R_y(\gamma) = R_z(\pi/2)\,R_x(\gamma)\,R_z(-\pi/2),$$
so an arbitrary-angle $R_x$ would do just as well as an arbitrary-angle $R_y$ — and better, because a *fixed* quarter-turn $R_x(\pi/2)$ is the easiest pulse to calibrate precisely. Two of those, with $z$-rotations interleaved, reach everything:
$$U = e^{i\alpha}\,R_z(\lambda_1)\,R_x(\pi/2)\,R_z(\lambda_2)\,R_x(\pi/2)\,R_z(\lambda_3)$$
has a solution $(\lambda_1,\lambda_2,\lambda_3)$ for every single-qubit unitary $U$. That is the industry-standard form: **two calibrated pulses and three free virtual $z$-rotations realize any single-qubit gate exactly.**

The word *exactly* is what separates this from [1.6](01-06-universal-gate-sets-and-circuit-synthesis.md). Here the rotation angles are continuous knobs, so arbitrary gates come for free. When the gate set is *discrete* — $H$ and $T$ only, as fault tolerance will force in [5.5](05-05-fault-tolerance-the-threshold-and-the-surface-code.md) — exact synthesis becomes impossible and you pay a $\log(1/\epsilon)$ price for approximation instead.

</details>

## Connections

- **Backward:** $R_{\hat n}(\vartheta) = \exp(-i\vartheta\,\hat n\cdot\vec\sigma/2)$ is the time-evolution operator $e^{-iHt/\hbar}$ of [`quantum-mechanics` 2.2](../../quantum-mechanics/lessons/02-02-stationary-states-time-evolution.md) with the Hamiltonian chosen to be a Pauli — a gate is not something different from Schrödinger evolution, it is Schrödinger evolution for a controlled duration. The collapse of the exponential series uses $(\hat n\cdot\vec\sigma)^2 = I$, the same square-root-of-identity structure that made the spectral theorem cheap in [`linalg-refresher` 5.1](../../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md).
- **Forward:** [1.3](01-03-measurement-and-the-born-rule.md) uses $HZH = X$ to measure in any basis with $Z$-basis hardware. [1.6](01-06-universal-gate-sets-and-circuit-synthesis.md) asks which *finite* subsets of these rotations generate the rest, and pays the price of approximation. [5.2](05-02-the-three-qubit-codes.md) turns the same identity into a free phase-flip code.
- **Sideways:** an $R_{\hat n}(\vartheta)$ driven by a laser field is a Rabi oscillation, and $\vartheta$ is the pulse area — see [`photonics-quantum-optics` 1.2](../../photonics-quantum-optics/lessons/01-02-two-level-atom-rabi-oscillations.md), where the "$\pi$ pulse" that inverts a two-level atom is the physicists' name for the $X$ gate. The two-to-one map from matrices to rotations, $SU(2)\to SO(3)$, is the spinor double cover of [`analytical-mechanics`](../../analytical-mechanics/syllabus.md)'s rotation-group discussion, and is why a $2\pi$ rotation returns a qubit to $-\lvert\psi\rangle$ rather than $\lvert\psi\rangle$.
