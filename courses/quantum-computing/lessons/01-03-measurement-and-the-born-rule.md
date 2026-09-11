# Quantum Computing · Lesson 1.3: Measurement and the Born rule for qubits

> ⏱ ~15 min · Module 1: Qubits, gates, and circuits · Builds on: [1.1 (the qubit and the Bloch sphere)](01-01-the-qubit-and-the-bloch-sphere.md), [1.2 (single-qubit gates)](01-02-single-qubit-gates.md), [`quantum-mechanics` 1.5 (measurement and expectation values)](../../quantum-mechanics/lessons/01-05-measurement-expectation-values.md) · Unlocks: [1.4 (two qubits and entanglement)](01-04-two-qubits-tensor-products-and-entanglement.md)

## Why this matters

Measurement is the only place a quantum computer produces output, and it is the only step that is not reversible. That makes it the bottleneck of every algorithm design problem in this course: you have an exponentially large amplitude vector inside the machine and a narrow, probabilistic straw to drink through.

Two practical consequences fall out immediately. First, **you never read an amplitude** — you sample a bit, so an algorithm must arrange for the *right* bit to be likely, which is what interference is for. Second, **estimating an average costs shots**: getting an expectation value to precision $\epsilon$ takes about $1/\epsilon^2$ runs, and that single fact is why variational algorithms strain to be useful ([6.4](06-04-variational-algorithms-vqe-and-qaoa.md)).

This lesson also installs the move you will use in nearly every circuit: hardware measures along one fixed axis, so to measure along any other, rotate the state first.

## The idea

A measurement is a **question with a fixed set of allowed answers**, and on the Bloch sphere the question is an axis. Pick the axis $\hat n$; the two answers are "along $+\hat n$" and "along $-\hat n$."

Then one rule covers everything: the closer your state points to an answer, the likelier that answer. Quantitatively it is the cosine of the half-angle, squared. Nothing else about the state matters — only its tilt from the chosen axis.

After the answer comes out, the state **is** that answer: it snaps to the axis. Ask the same question again and you get the same answer with certainty, which is why measurement is idempotent and why it destroys the superposition it found. Ask a *different* question, though, and the snap has scrambled you — the information about the old axis is gone.

That is the whole of measurement theory for one qubit. The computational-basis measurement everyone speaks of is just the choice $\hat n = \hat z$.

## The formal version

> **Born rule (projective measurement).** Let $\{\lvert m\rangle\}$ be an orthonormal basis of the state space. Measuring in that basis on $\lvert\psi\rangle$ yields outcome $m$ with probability
> $$P(m) = \lvert\langle m\vert\psi\rangle\rvert^2,$$
> and leaves the system in the state $\lvert m\rangle$.

In words: project the state onto each basis direction, square the length of the shadow, and that is the probability; the state then collapses to whichever direction you got. Since the basis is orthonormal and $\lvert\psi\rangle$ has unit length, the probabilities sum to one automatically.

For a qubit measured in the computational basis this reads $P(0) = \lvert\alpha\rvert^2$, $P(1) = \lvert\beta\rvert^2$. For a general axis:

> **Measurement along an axis.** For a unit vector $\hat n$, the projectors onto the $\pm1$ eigenspaces of $\hat n\cdot\vec\sigma$ are $\Pi_\pm = \tfrac12\left(I \pm \hat n\cdot\vec\sigma\right)$, and a state with Bloch vector $\vec r$ gives
> $$P(\pm) = \langle\psi\vert\Pi_\pm\vert\psi\rangle = \frac{1 \pm \vec r\cdot\hat n}{2} = \cos^2\frac{\Theta_\pm}{2},$$
> where $\Theta_\pm$ is the angle between $\vec r$ and $\pm\hat n$.

In words: dot the state's arrow into the measurement axis, shift and halve. Perfectly aligned gives probability 1, perpendicular gives 1/2, antipodal gives 0 — matching "orthogonal states are antipodal" from [1.1](01-01-the-qubit-and-the-bloch-sphere.md).

The two bases used constantly:

| Basis | Axis | States | How to do it with $Z$ hardware |
|---|---|---|---|
| computational ($Z$) | $\hat z$ | $\lvert0\rangle, \lvert1\rangle$ | measure |
| Hadamard ($X$) | $\hat x$ | $\lvert+\rangle, \lvert-\rangle$ | apply $H$, then measure |

> **Basis change before measurement.** Measuring the observable $U^\dagger Z U$ on $\lvert\psi\rangle$ gives the same statistics as applying $U$ and then measuring $Z$.

In words: you only ever need one detector. To ask a different question, rotate the state so that your question's axis lands on the detector's axis. The $X$-basis row above is the case $U = H$, since $HZH = X$ ([1.2](01-02-single-qubit-gates.md)).

Finally, the quantity you actually estimate in practice — the card collects all of these under [measurement](../reference.md#measurement):

> **Expectation value.** For an observable $A$ with eigenvalues $\pm1$, $\langle A\rangle = \langle\psi\vert A\vert\psi\rangle = P(+) - P(-)$, estimated by averaging $\pm1$ over repeated runs. The standard error after $N$ shots is $\sqrt{(1-\langle A\rangle^2)/N} \le 1/\sqrt N$.

In words: an expectation value is the average of the two outcomes weighted by their chances, and you get it by running the circuit many times and averaging. Precision improves only as $1/\sqrt N$, so **ten times more accuracy costs a hundred times more runs.**

## Picture

![Left: a Bloch sphere with a state arrow at polar angle theta equals 60 degrees, the z axis drawn thick in blue as the measurement axis, and a dashed line dropping the state's tip onto the z axis at height cosine theta, labelled expectation of Z equals cosine theta. Middle: the same state arrow with the measurement axis tilted to a general direction n-hat, and an orange arc marking the angle Theta between the state and the axis, labelled probability of plus equals cosine-squared of Theta over two. Right: a two-gate circuit diagram showing a box U followed by a box Z on a single wire, captioned rotate n-hat onto z-hat then use the only detector you own.](assets/01-03-fig1.svg)

The middle and right panels are the same statement. You can imagine tilting the detector to any axis, or you can keep the detector bolted to $\hat z$ and tilt the *state* instead. Real hardware does the second, always.

## Worked examples

**Example 1 — the same state, two questions.**

Take $\lvert\psi\rangle = \tfrac{\sqrt3}{2}\lvert0\rangle + \tfrac12\lvert1\rangle$, whose Bloch vector is $\vec r = (\tfrac{\sqrt3}{2}, 0, \tfrac12)$ — polar angle $\theta = 60^\circ$, azimuth $\phi = 0$.

*Question one, the $Z$ basis.* Directly from the amplitudes:
$$P(0) = \left(\tfrac{\sqrt3}{2}\right)^2 = \tfrac34, \qquad P(1) = \tfrac14.$$
Cross-check with the axis formula: $(1 + \vec r\cdot\hat z)/2 = (1 + 0.5)/2 = 0.75$. ✓

*Question two, the $X$ basis.* Project onto $\lvert+\rangle = \tfrac{1}{\sqrt2}(\lvert0\rangle+\lvert1\rangle)$:
$$\langle+\vert\psi\rangle = \tfrac{1}{\sqrt2}\left(\tfrac{\sqrt3}{2} + \tfrac12\right) = \frac{\sqrt3+1}{2\sqrt2}, \qquad P(+) = \frac{(\sqrt3+1)^2}{8} = \frac{4 + 2\sqrt3}{8} = \frac{2+\sqrt3}{4} \approx 0.933.$$
Cross-check: $(1 + \vec r\cdot\hat x)/2 = (1 + 0.866)/2 = 0.933$. ✓

One state, two wildly different answer distributions — 75/25 versus 93/7. **The state does not "have" probabilities; it has probabilities relative to a question.** And if you run the circuit, measure $Z$, get 0, then measure $X$, the 0.933 is gone: the collapse to $\lvert0\rangle$ resets the $X$ statistics to 50/50.

**Example 2 — what a measurement costs.**

Suppose you want $\langle Z\rangle$ for the state above to a precision of $\pm 0.01$. The true value is $\langle Z\rangle = P(0) - P(1) = 0.5$.

Each shot returns $+1$ or $-1$. The variance of one shot is $1 - \langle Z\rangle^2 = 1 - 0.25 = 0.75$, so the standard error after $N$ shots is $\sqrt{0.75/N}$. Setting that to 0.01:

$$N = \frac{0.75}{10^{-4}} = 7{,}500 \text{ shots}.$$

For $\pm0.001$ it becomes 750,000. The scaling is the whole story:

| target precision | shots needed |
|---|---|
| $10^{-1}$ | 75 |
| $10^{-2}$ | 7,500 |
| $10^{-3}$ | 750,000 |

This is not a quantum penalty — it is ordinary sampling statistics, identical to polling. But it lands hard on quantum algorithms whose output *is* an expectation value rather than a bit string. A variational chemistry calculation ([6.4](06-04-variational-algorithms-vqe-and-qaoa.md)) needs chemical accuracy, around $1.6\times10^{-3}$ Hartree, on a sum of hundreds of such terms — and the shot count is the reason those calculations take days of machine time for molecules a laptop handles. Algorithms that end in a *bit string* (Shor, [4.4](04-04-shors-factoring-algorithm.md)) dodge this entirely, and that difference in output type is one of the sharpest practical dividing lines in the field.

## Watch out

- You might think collapse means the state is ruined and the run is over. It means the state is now the outcome you got, which is often exactly what you want: [2.4](02-04-quantum-teleportation.md) *uses* collapse as a mechanism, and syndrome measurement in [5.2](05-02-the-three-qubit-codes.md) deliberately collapses an ancilla while leaving the data untouched.
- You might think measuring twice gives you two bits of information about the state. Measuring the same observable twice gives the same answer twice — the projector satisfies $\Pi^2 = \Pi$, so the second measurement is free and useless. To learn about a state you need *fresh copies*, which no-cloning ([2.3](02-03-the-no-cloning-theorem.md)) says you cannot manufacture.
- You might think you can determine an unknown $\alpha$ and $\beta$ from one qubit if you are clever about the basis. You cannot: one qubit yields one bit. Even with many copies you need measurements in at least three bases to pin down the three Bloch components, and each is subject to the $1/\sqrt N$ cost above — this is quantum state tomography, and its cost grows exponentially in the number of qubits.
- You might think a measurement in the middle of a circuit is fundamentally different from one at the end. The **principle of deferred measurement** says otherwise: any mid-circuit measurement followed by classically-controlled gates can be replaced by a coherent controlled gate with the measurement moved to the end. Useful for proofs, expensive in practice, and the reason teleportation's classical communication can be analysed either way.

## One-liner

> A measurement is an axis, the answer's probability is the squared cosine of the half-angle to it, and the state afterwards *is* the answer.

## Problems

**P1 (🟢)** For $\lvert\psi\rangle = \tfrac{1}{\sqrt2}\left(\lvert0\rangle - i\lvert1\rangle\right)$, give the outcome probabilities for a measurement in each of the $Z$, $X$, and $Y$ bases (the $Y$ basis is $\lvert{\pm i}\rangle$). Explain the pattern using the Bloch vector, and state which single measurement identifies this state with certainty.

**P2 (🟡)** Derive $P(+) = (1 + \vec r\cdot\hat n)/2$ from the projector $\Pi_+ = \tfrac12(I + \hat n\cdot\vec\sigma)$, using only $\langle\psi\vert\vec\sigma\vert\psi\rangle = \vec r$ and linearity. Then apply it: measure $\lvert0\rangle$ along the Hadamard axis $\hat n = (\hat x + \hat z)/\sqrt2$, and connect the answer to Example 1 of [1.2](01-02-single-qubit-gates.md).

**P3 (🔴, optional)** You are handed one qubit, promised it is either $\lvert0\rangle$ or $\lvert+\rangle$ with equal prior probability, and asked to guess which. Show that measuring in the $Z$ basis and guessing "$\lvert0\rangle$" on outcome 0 succeeds with probability $3/4$. Then find a better measurement axis, compute its success probability exactly, and explain geometrically why that axis is the right one. (The Helstrom bound says no strategy beats $\tfrac12\left(1 + \sqrt{1 - \lvert\langle\psi_0\vert\psi_1\rangle\rvert^2}\right)$; check that your answer saturates it.)

<details>
<summary>Solutions</summary>

**P1** The state is $\lvert{-i}\rangle$, Bloch vector $\vec r = (0,-1,0)$.

*$Z$ basis:* $P(0) = \lvert 1/\sqrt2\rvert^2 = 1/2$, $P(1) = \lvert{-i}/\sqrt2\rvert^2 = 1/2$. Formula check: $(1 + \vec r\cdot\hat z)/2 = 1/2$. ✓

*$X$ basis:* $\langle+\vert\psi\rangle = \tfrac12(1 - i)$, so $P(+) = \tfrac14\lvert 1-i\rvert^2 = \tfrac14\cdot 2 = 1/2$, and $P(-) = 1/2$. Formula check: $(1 + \vec r\cdot\hat x)/2 = 1/2$. ✓

*$Y$ basis:* $\langle{+i}\vert\psi\rangle = \tfrac12\left(1 + (-i)(\overline{i})\right)$. Careful with the conjugate: $\lvert{+i}\rangle = \tfrac{1}{\sqrt2}(\lvert0\rangle + i\lvert1\rangle)$, so $\langle{+i}\vert = \tfrac{1}{\sqrt2}(\langle0\rvert - i\langle1\rvert)$ and
$$\langle{+i}\vert\psi\rangle = \tfrac12\left(1\cdot 1 + (-i)(-i)\right) = \tfrac12(1 - 1) = 0.$$
So $P(+i) = 0$ and $P(-i) = 1$.

The pattern is the Bloch vector read three times. $\vec r$ is perpendicular to both $\hat z$ and $\hat x$, so those two measurements are maximally uninformative at 50/50; it is *antiparallel* to $+\hat y$, so the $Y$ measurement is certain. **The $Y$ measurement identifies the state with certainty** — every state is a definite answer to exactly one question (up to sign), namely the one whose axis it lies on.

**P2** Using linearity of the inner product,
$$P(+) = \langle\psi\vert\Pi_+\vert\psi\rangle = \tfrac12\left(\langle\psi\vert I\vert\psi\rangle + \hat n\cdot\langle\psi\vert\vec\sigma\vert\psi\rangle\right) = \tfrac12\left(1 + \hat n\cdot\vec r\right),$$
where the first term is 1 by normalization and the second is the definition of the Bloch vector. Note this derivation never assumed the state was pure — it holds verbatim for density matrices with $\vec r$ possibly shorter than 1 ([2.2](02-02-density-matrices-and-the-partial-trace.md)), which is why the Bloch *ball* is the right object there.

Applying it to $\lvert0\rangle$ ($\vec r = \hat z$) along $\hat n = (\hat x + \hat z)/\sqrt2$:
$$P(+) = \frac{1 + \hat z\cdot(\hat x + \hat z)/\sqrt2}{2} = \frac{1 + 1/\sqrt2}{2} = \frac{2+\sqrt2}{4} \approx 0.8536.$$

That is $\cos^2(\pi/8)$, and it is the same number as Example 1 of [1.2](01-02-single-qubit-gates.md), where $HTH\lvert0\rangle$ gave $P(0) = \cos^2(\pi/8)$. No coincidence: the Hadamard axis is 45 degrees from $\hat z$, so the half-angle is 22.5 degrees either way. Measuring $\lvert0\rangle$ along the tilted axis and rotating $\lvert0\rangle$ toward the tilted axis before measuring along $\hat z$ are the same experiment, which is the basis-change principle in action.

**P3** *The naive strategy.* Measure $Z$. If the state was $\lvert0\rangle$, outcome 0 is certain. If it was $\lvert+\rangle$, outcome 0 has probability 1/2. Guessing "$\lvert0\rangle$" on outcome 0 and "$\lvert+\rangle$" on outcome 1:
$$P(\text{correct}) = \tfrac12\underbrace{(1)}_{\text{state }\lvert0\rangle} + \tfrac12\underbrace{\left(\tfrac12\right)}_{\text{state }\lvert+\rangle\text{, got }1} = \tfrac34.$$

*The better strategy.* The two Bloch vectors are $\hat z$ and $\hat x$, 90 degrees apart. The right axis is the one that makes the two states as *opposite* as possible with respect to it, which means pointing along the difference $\hat z - \hat x$:
$$\hat m = \frac{\hat z - \hat x}{\sqrt2}.$$
Then
$$P(+\hat m \mid \lvert0\rangle) = \frac{1 + \hat z\cdot\hat m}{2} = \frac{1 + 1/\sqrt2}{2} = 0.8536, \qquad P(+\hat m\mid \lvert+\rangle) = \frac{1 + \hat x\cdot\hat m}{2} = \frac{1 - 1/\sqrt2}{2} = 0.1464.$$
Guess "$\lvert0\rangle$" on $+\hat m$ and "$\lvert+\rangle$" on $-\hat m$:
$$P(\text{correct}) = \tfrac12(0.8536) + \tfrac12(1 - 0.1464) = \tfrac12(0.8536 + 0.8536) = 0.8536 = \cos^2\frac{\pi}{8} = \frac{2+\sqrt2}{4}.$$

Geometrically, $\hat m$ is the axis that bisects $\hat z$ and $-\hat x$ — it sits symmetrically between "state 0's arrow" and "the opposite of state 1's arrow," so each state is tilted 45 degrees from its own favoured outcome and both errors are equal and as small as possible. Tilting the axis either way helps one state and hurts the other by more.

Saturation check: $\lvert\langle0\vert+\rangle\rvert = 1/\sqrt2$, so the Helstrom bound is
$$\tfrac12\left(1 + \sqrt{1 - \tfrac12}\right) = \tfrac12\left(1 + \tfrac{1}{\sqrt2}\right) = 0.8536,$$
exactly what we achieved. So a single copy of one of two non-orthogonal states can be identified correctly 85.4 percent of the time and no better — the 14.6 percent is irreducible. That irreducibility is not a limitation to work around; it is the *resource* behind quantum key distribution, where an eavesdropper forced to guess a basis cannot avoid leaving traces ([`photonics-quantum-optics` 4.5](../../photonics-quantum-optics/lessons/04-05-quantum-information-taste.md)).

</details>

## Connections

- **Backward:** this is the Born rule of [`quantum-mechanics` 1.5](../../quantum-mechanics/lessons/01-05-measurement-expectation-values.md) restricted to a two-dimensional space, where "integrate $\lvert\psi(x)\rvert^2$ over a region" degenerates into "square two numbers." The projectors $\Pi_\pm = \tfrac12(I\pm\hat n\cdot\vec\sigma)$ are the spectral projectors of the Hermitian observable $\hat n\cdot\vec\sigma$, exactly as the spectral theorem of [`linalg-refresher` 5.1](../../linalg-refresher/lessons/05-01-spectral-theorem-quadratic-forms.md) constructs them.
- **Forward:** [1.4](01-04-two-qubits-tensor-products-and-entanglement.md) applies the Born rule to *part* of a two-qubit state, where collapse of one qubit changes the other — the engine of every protocol in Module 2. The $1/\sqrt N$ shot cost returns as the binding constraint in [6.4](06-04-variational-algorithms-vqe-and-qaoa.md).
- **Sideways:** the $1/\sqrt N$ standard error is the central limit theorem of [`prob-stat-refresher` 3.3](../../prob-stat-refresher/lessons/03-03-central-limit-theorem.md), and quantum metrology's whole ambition is to beat it using entanglement — the "Heisenberg limit" $1/N$ — which is the same amplitude-amplification structure as [3.6](03-06-amplitude-amplification-counting-and-optimality.md).
