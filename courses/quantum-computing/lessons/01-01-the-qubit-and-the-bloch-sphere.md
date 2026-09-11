# Quantum Computing · Lesson 1.1: The qubit and the Bloch sphere

> ⏱ ~15 min · Module 1: Qubits, gates, and circuits · Builds on: [`quantum-mechanics` 4.5 (spin-1/2 and the Pauli matrices)](../../quantum-mechanics/lessons/04-05-spin-pauli-stern-gerlach.md), [`linalg-refresher` 4.1 (inner products)](../../linalg-refresher/lessons/04-01-inner-products-orthogonality.md) · Unlocks: [1.2 (single-qubit gates)](01-02-single-qubit-gates.md)

## Why this matters

Everything in this course is a sequence of three moves: prepare a state, hit it with unitaries, measure. You cannot do any of the three until you can say precisely what a state *is*, and the answer is startlingly small — a unit vector in $\mathbb{C}^2$, which after stripping the one piece of unobservable junk is exactly a point on an ordinary sphere.

That sphere is not decoration. It is the working diagram of the entire single-qubit theory: gates become rotations of it ([1.2](01-02-single-qubit-gates.md)), measurements become projections onto an axis ([1.3](01-03-measurement-and-the-born-rule.md)), noise becomes a shrinking toward the center ([2.2](02-02-density-matrices-and-the-partial-trace.md)), and error correction becomes the observation that the sphere's continuum can be policed with a finite number of checks ([5.3](05-03-the-shor-code-and-error-discretization.md)).

Get the half-angle convention right once here and a dozen later calculations become mental arithmetic.

## The idea

A classical bit is a switch: up or down, nothing between. A qubit is a **direction on a globe**. Two of those directions — the north and south poles — are the classical answers, which we name $\lvert 0\rangle$ and $\lvert 1\rangle$. Every other direction is a **superposition**.

The temptation is to read a superposition as "secretly 0 or 1, and I don't know which." Resist it, because that reading makes a false prediction. A qubit pointing at the equator gives 50/50 when you ask "which pole?" — but it gives a *completely certain* answer when you ask "which side of the equator's east-west line?" A coin that is secretly heads-or-tails has no such question. Superposition is a *direction*, and "which pole" is only one of infinitely many questions you can aim at it.

Two angles specify a direction, so a qubit carries two continuous real numbers:

- the **polar angle** $\theta$ from the north pole, which fixes the odds of each classical outcome, and
- the **azimuth** $\phi$ around the equator, which fixes nothing at all about those odds — and is nonetheless the single most important number in quantum computing, because it is what interference destroys and creates.

Hold on to that asymmetry. Algorithms in Module 3 and 4 work entirely by arranging $\phi$ so that unwanted amplitudes cancel.

## The formal version

> **Definition (qubit).** A qubit's pure state is a unit vector in $\mathbb{C}^2$,
> $$\lvert\psi\rangle = \alpha\lvert0\rangle + \beta\lvert1\rangle, \qquad \alpha,\beta\in\mathbb{C},\quad \lvert\alpha\rvert^2 + \lvert\beta\rvert^2 = 1,$$
> where $\lvert0\rangle = \binom{1}{0}$ and $\lvert1\rangle = \binom{0}{1}$ are the **computational basis**. The numbers $\alpha,\beta$ are **amplitudes**.

In words: a state is a length-one arrow in a two-dimensional complex space, and the two coordinates along the classical axes are the amplitudes. "Unit length" is not aesthetic — it is what makes the Born rule's probabilities sum to one ([1.3](01-03-measurement-and-the-born-rule.md)).

Naively that is four real numbers ($\alpha$ and $\beta$ each have a real and imaginary part). Normalization removes one. And one more is pure fiction:

> **Global phase is unphysical.** For any real $\gamma$, the states $\lvert\psi\rangle$ and $e^{i\gamma}\lvert\psi\rangle$ produce identical statistics for every measurement and remain identical under every gate.

In words: multiplying the whole state by a phase changes nothing observable, because every prediction is built from quantities like $\lvert\langle x\vert\psi\rangle\rvert^2$, where the phase cancels against its own conjugate. **Relative** phase — the phase of $\beta$ *compared to* $\alpha$ — is emphatically physical. The two facts are easy to blur and the blur is fatal.

Four reals, minus normalization, minus global phase, is two. So:

> **Bloch parametrization.** Every qubit pure state can be written, uniquely up to global phase, as
> $$\lvert\psi\rangle = \cos\frac{\theta}{2}\lvert0\rangle + e^{i\phi}\sin\frac{\theta}{2}\lvert1\rangle, \qquad \theta\in[0,\pi],\ \phi\in[0,2\pi),$$
> corresponding to the point on the unit sphere with **Bloch vector**
> $$\vec r = (\sin\theta\cos\phi,\ \sin\theta\sin\phi,\ \cos\theta) = \big(\langle X\rangle, \langle Y\rangle, \langle Z\rangle\big),$$
> where $\langle A\rangle = \langle\psi\vert A\vert\psi\rangle$ and $X,Y,Z$ are the Pauli matrices.

In words: pick a direction in ordinary 3D space and you have named a qubit. The three components of that direction are the expected values of the three Pauli observables, which is why the sphere is a *physical* picture and not an analogy.

The **half-angle** $\theta/2$ in the amplitudes is the whole reason the picture works, and it has one consequence worth stating on its own:

> **Orthogonal states are antipodal, not perpendicular.** $\langle\psi\vert\psi^\perp\rangle = 0$ holds exactly when the two Bloch vectors point in opposite directions, and more generally $\lvert\langle\psi_1\vert\psi_2\rangle\rvert^2 = \tfrac12\left(1 + \vec r_1\cdot\vec r_2\right) = \cos^2\frac{\Theta}{2}$, with $\Theta$ the angle between the Bloch vectors.

In words: a 90-degree turn on the sphere does *not* get you to an orthogonal state — it gets you to a state that still has a 50 percent overlap. You must go all the way around to the far side. Six directions get names because you will meet them constantly:

| State | Amplitudes | $(\theta,\phi)$ | Bloch vector |
|---|---|---|---|
| $\lvert0\rangle$ | $(1,0)$ | $\theta=0$ | $+\hat z$ |
| $\lvert1\rangle$ | $(0,1)$ | $\theta=\pi$ | $-\hat z$ |
| $\lvert+\rangle = \tfrac{1}{\sqrt2}(\lvert0\rangle+\lvert1\rangle)$ | $\tfrac{1}{\sqrt2}(1,1)$ | $(\tfrac\pi2, 0)$ | $+\hat x$ |
| $\lvert-\rangle = \tfrac{1}{\sqrt2}(\lvert0\rangle-\lvert1\rangle)$ | $\tfrac{1}{\sqrt2}(1,-1)$ | $(\tfrac\pi2, \pi)$ | $-\hat x$ |
| $\lvert{+i}\rangle = \tfrac{1}{\sqrt2}(\lvert0\rangle+i\lvert1\rangle)$ | $\tfrac{1}{\sqrt2}(1,i)$ | $(\tfrac\pi2, \tfrac\pi2)$ | $+\hat y$ |
| $\lvert{-i}\rangle = \tfrac{1}{\sqrt2}(\lvert0\rangle-i\lvert1\rangle)$ | $\tfrac{1}{\sqrt2}(1,-i)$ | $(\tfrac\pi2, -\tfrac\pi2)$ | $-\hat y$ |

## Picture

![Left: a Bloch sphere with the z axis vertical, x pointing toward the lower left and y to the right. The six named states are marked as blue dots at the axis intersections, with the north pole labelled ket 0 and the south pole ket 1, plus-x labelled ket plus, minus-x ket minus, plus-y ket plus-i and minus-y ket minus-i. A red arrow from the center points to a state at polar angle theta equals 60 degrees and azimuth phi equals 50 degrees, with the theta arc drawn from the z axis and the phi arc drawn in the equatorial plane from the x axis. Right: a plot of the probability of outcome zero against theta, showing the curve cosine-squared of theta over two falling from 1 at theta equals 0 to 0 at theta equals pi, with the point at theta equals 60 degrees marked at probability 0.75.](assets/01-01-fig1.svg)

Read the two halves together. The **left** panel says a qubit is a direction; the **right** says that direction's *height* is the only thing a computational-basis measurement can see. Rotating around the vertical axis sweeps $\phi$ through every value without moving the point on the right-hand curve at all — which is precisely why phase is invisible until you rotate the sphere first and *then* look.

## Worked examples

**Example 1 — from amplitudes to a point on the sphere.**

Take
$$\lvert\psi\rangle = \tfrac12\lvert0\rangle + \tfrac{\sqrt3}{2}e^{i\pi/3}\lvert1\rangle.$$

Check the norm first: $\left(\tfrac12\right)^2 + \left(\tfrac{\sqrt3}{2}\right)^2 = \tfrac14 + \tfrac34 = 1$. Good. Now match the parametrization. The coefficient of $\lvert0\rangle$ is real and positive, so it is already $\cos(\theta/2)$:

$$\cos\frac\theta2 = \frac12 \implies \frac\theta2 = \frac\pi3 \implies \theta = \frac{2\pi}{3} = 120^\circ,$$

and the phase attached to $\lvert1\rangle$ is $\phi = \pi/3 = 60^\circ$. Sanity check the sine: $\sin(\theta/2) = \sin 60^\circ = \sqrt3/2$, which matches the magnitude of the second amplitude.

The Bloch vector:
$$\vec r = \left(\sin 120^\circ\cos 60^\circ,\ \sin 120^\circ \sin 60^\circ,\ \cos 120^\circ\right) = (0.433,\ 0.750,\ -0.500),$$
with $\lvert\vec r\rvert = 1$ as required. The negative $z$ component says the state leans toward the south pole, and indeed the chance of measuring 0 is $\lvert\alpha\rvert^2 = 1/4$ while measuring 1 has chance $3/4$. Note the clean relation $\langle Z\rangle = P(0) - P(1) = 1/4 - 3/4 = -1/2$ — the $z$ coordinate *is* the probability difference.

**Example 2 — what the relative phase buys you, and what global phase doesn't.**

Compare three states.

| State | $P(0)$ in the $Z$ basis | Bloch vector |
|---|---|---|
| $\lvert+\rangle$ | $1/2$ | $+\hat x$ |
| $\lvert-\rangle$ | $1/2$ | $-\hat x$ |
| $-\lvert+\rangle = e^{i\pi}\lvert+\rangle$ | $1/2$ | $+\hat x$ |

The first two are *indistinguishable* by a computational-basis measurement: both give 50/50 forever, no matter how many copies you test. Yet they are **orthogonal**, so some measurement distinguishes them perfectly — and the Bloch picture says which one, since they are antipodal along $\hat x$. Measuring along $\hat x$ (the "$X$ basis" of [1.3](01-03-measurement-and-the-born-rule.md)) separates them with certainty. Their difference is one minus sign on $\beta$: a **relative** phase.

The third row is $\lvert+\rangle$ multiplied by $e^{i\pi}$, a **global** phase. It has the same Bloch vector as the first row because it *is* the first row — no experiment, ever, separates them.

Here is the payoff. Both minus signs look identical on the page. One is the most consequential object in the course and the other does not exist. The Bloch sphere tells them apart at a glance, which is worth more than any algebraic rule you could memorize.

## Watch out

- You might think a qubit stores unlimited information, since $\theta$ and $\phi$ are real numbers with infinitely many digits. You cannot get the digits out. One measurement of one qubit yields one bit, and the Holevo bound ([2.5](02-05-superdense-coding.md)) caps the *retrievable* classical information at exactly one bit per qubit. The continuum is real but it is write-only — its job is to steer interference, not to store data.
- You might think superposition means "it is really 0 or 1 and I am ignorant." That describes a different object, the maximally mixed state, whose Bloch vector sits at the sphere's *center* rather than on its surface ([2.2](02-02-density-matrices-and-the-partial-trace.md)). The two agree on every $Z$-basis prediction and disagree on every $X$-basis one, so the distinction is experimentally sharp.
- You might think two states 90 degrees apart on the sphere are orthogonal. They are not: the overlap is $\cos^2(\Theta/2) = \cos^2 45^\circ = 1/2$. The half-angle is doing real work, and forgetting it is the single most common factor-of-two error in this subject.
- You might think you can just set the global phase to make $\alpha$ real and positive and then forget phases entirely. That works for one isolated qubit and fails the moment there are two, because a phase that is "global" on one qubit is *relative* once that qubit sits inside a superposition of a larger register. This is exactly the mechanism of phase kickback ([3.1](03-01-oracles-reversibility-and-phase-kickback.md)).

## One-liner

> A qubit is a direction on a sphere: the polar angle sets the odds, the azimuth sets the phase, and only the azimuth can be made to cancel.

## Problems

**P1 (🟢)** For $\lvert\psi\rangle = \tfrac{\sqrt3}{2}\lvert0\rangle - \tfrac12\lvert1\rangle$, find $\theta$ and $\phi$, give the Bloch vector, and state $P(0)$ and $P(1)$ for a computational-basis measurement. Then say what changes in all four answers if the state is multiplied by $-1$.

**P2 (🟡)** Consider the family of equatorial states $\lvert\psi(\phi)\rangle = \tfrac{1}{\sqrt2}\left(\lvert0\rangle + e^{i\phi}\lvert1\rangle\right)$. Show that all of them give $P(0) = 1/2$, then compute $\lvert\langle\psi(\phi_1)\vert\psi(\phi_2)\rangle\rvert^2$ in closed form. Use the result to confirm the "antipodal, not perpendicular" claim, and state which two members of the family are orthogonal to $\lvert+\rangle$ and to $\lvert{+i}\rangle$.

**P3 (🔴, optional)** Count parameters. An $n$-qubit pure state is a unit vector in $\mathbb{C}^{2^n}$ modulo global phase; show it carries $2^{n+1} - 2$ real parameters. Compare with the number carried by $n$ *independently* described qubits, evaluate both at $n = 3$ and $n = 50$, and say in one sentence what the gap consists of. Then explain why this counting is the honest version of the slogan "a quantum computer explores all $2^n$ possibilities at once."

<details>
<summary>Solutions</summary>

**P1** The coefficient of $\lvert0\rangle$ is real and positive, so $\cos(\theta/2) = \sqrt3/2$, giving $\theta/2 = \pi/6$ and $\theta = \pi/3 = 60^\circ$. The coefficient of $\lvert1\rangle$ is $-1/2$, whose magnitude $1/2 = \sin 30^\circ$ matches $\sin(\theta/2)$, and whose phase is $\pi$ since $-1 = e^{i\pi}$. So $\phi = \pi = 180^\circ$.

Bloch vector:
$$\vec r = (\sin 60^\circ\cos 180^\circ,\ \sin 60^\circ \sin 180^\circ,\ \cos 60^\circ) = (-0.866,\ 0,\ 0.5).$$

It lies in the $xz$ plane (as every state with real amplitudes must, since $\langle Y\rangle = 0$ requires no imaginary part), tilted from the north pole toward $\lvert-\rangle$. Probabilities: $P(0) = \lvert\sqrt3/2\rvert^2 = 3/4$ and $P(1) = \lvert{-1/2}\rvert^2 = 1/4$. Check: $\langle Z\rangle = 3/4 - 1/4 = 1/2$, matching the third component.

Multiplying by $-1$ changes **nothing** in any of the four answers. Writing $-\lvert\psi\rangle = -\tfrac{\sqrt3}{2}\lvert0\rangle + \tfrac12\lvert1\rangle$ and re-standardizing (pull out $e^{i\pi}$ to make the first amplitude positive again) returns the original. This is global phase, and the Bloch sphere is built precisely to quotient it away.

**P2** Every member has $\lvert\alpha\rvert^2 = \lvert 1/\sqrt2\rvert^2 = 1/2$, so $P(0) = 1/2$ regardless of $\phi$ — the whole family sits on the equator, at $\theta = \pi/2$, and $\phi$ never touches the $Z$-basis statistics.

The overlap:
$$\langle\psi(\phi_1)\vert\psi(\phi_2)\rangle = \tfrac12\left(1\cdot 1 + e^{-i\phi_1}e^{i\phi_2}\right) = \tfrac12\left(1 + e^{i\Delta}\right), \qquad \Delta = \phi_2 - \phi_1.$$
Taking the squared modulus, and using $\lvert 1 + e^{i\Delta}\rvert^2 = (1+\cos\Delta)^2 + \sin^2\Delta = 2 + 2\cos\Delta$:
$$\lvert\langle\psi(\phi_1)\vert\psi(\phi_2)\rangle\rvert^2 = \frac{2 + 2\cos\Delta}{4} = \frac{1+\cos\Delta}{2} = \cos^2\frac{\Delta}{2}.$$

Since both states sit on the equator, the angle between their Bloch vectors is exactly $\Theta = \Delta$, so this is the general formula $\cos^2(\Theta/2)$ specialized to the equator. It confirms the claim: the overlap vanishes only at $\Delta = \pi$, which is the antipodal point, and at $\Delta = \pi/2$ the overlap is $\cos^2 45^\circ = 1/2$, so perpendicular Bloch vectors are *half* distinguishable, not fully.

Orthogonal partners: $\lvert+\rangle$ is $\phi = 0$, so its orthogonal family member is $\phi = \pi$, namely $\lvert-\rangle$. And $\lvert{+i}\rangle$ is $\phi = \pi/2$, so its partner is $\phi = 3\pi/2$, namely $\lvert{-i}\rangle$. Both pairs are antipodal, as expected.

**P3** A vector in $\mathbb{C}^{2^n}$ has $2^n$ complex entries, so $2\cdot 2^n = 2^{n+1}$ real parameters. Normalization is one real equation, removing one. Global phase is a one-parameter redundancy, removing one more. Total:
$$2^{n+1} - 2.$$

Now $n$ separately described qubits. Each carries 2 real parameters (its $\theta$ and $\phi$), so $n$ of them carry $2n$. The comparison:

| $n$ | product states: $2n$ | all states: $2^{n+1}-2$ |
|---|---|---|
| 1 | 2 | 2 |
| 3 | 6 | 14 |
| 50 | 100 | $\approx 2.25\times 10^{15}$ |

At $n=1$ the counts agree — a single qubit cannot be entangled with anything. From $n=2$ on, the gap is **entirely entanglement**: the extra parameters describe correlations that no assignment of individual states can reproduce ([1.4](01-04-two-qubits-tensor-products-and-entanglement.md)). At 50 qubits, the product states form a 100-dimensional sliver of a space with over $10^{15}$ dimensions, which is why classical simulation of a general quantum state is hopeless while simulating product states is trivial.

The honest version of the slogan: a quantum state genuinely holds $2^{n+1}-2$ real parameters, and a gate genuinely acts on all $2^n$ amplitudes at once. But a measurement returns $n$ bits, chosen probabilistically — so the exponential is a *scratchpad*, not an output register. Every algorithm in this course earns its speedup by arranging interference among those amplitudes so the few bits you do get out are the ones you wanted. Grover ([3.5](03-05-grovers-search.md)) makes the point sharpest: the exponential scratchpad still only buys a quadratic speedup for unstructured search, and [3.6](03-06-amplitude-amplification-counting-and-optimality.md) proves that is all it can buy.

</details>

## Connections

- **Backward:** this is the spin-1/2 system of [`quantum-mechanics` 4.5](../../quantum-mechanics/lessons/04-05-spin-pauli-stern-gerlach.md) with the physics stripped out. Where that lesson had a magnetic moment in a Stern–Gerlach field, here there is only the two-dimensional state space and the Pauli matrices — the qubit is spin-1/2 hired as a computational primitive. The unit-vector-modulo-phase structure is the projective space $\mathbb{CP}^1$, whose identification with the 2-sphere is the Riemann sphere of [`complex-analysis` 7.1](../../complex-analysis/lessons/07-01-mobius-transformations.md).
- **Forward:** [1.2](01-02-single-qubit-gates.md) shows every single-qubit gate is a rotation of this sphere, which converts matrix algebra into geometry. [1.3](01-03-measurement-and-the-born-rule.md) turns the right-hand panel of the figure into the general Born rule for any measurement axis.
- **Sideways:** the same two-level state space with the same Bloch picture is the two-level atom driven by a laser in [`photonics-quantum-optics` 1.2](../../photonics-quantum-optics/lessons/01-02-two-level-atom-rabi-oscillations.md) — Rabi oscillation *is* a Bloch-sphere rotation, and the qubit gates of the next lesson are how experimentalists actually implement them.
