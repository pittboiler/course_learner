# Quantum Computing · Lesson 5.1: Quantum channels and decoherence

> ⏱ ~15 min · Module 5: Noise and quantum error correction · Builds on: [2.2 (density matrices and the partial trace)](02-02-density-matrices-and-the-partial-trace.md), [1.2 (single-qubit gates)](01-02-single-qubit-gates.md) · Unlocks: [5.2 (the three-qubit codes)](05-02-the-three-qubit-codes.md)

## Why this matters

Modules 1 through 4 assumed perfect unitaries. Real qubits are not perfect, and the gap is not a detail — it is the reason the machines in [4.4](04-04-shors-factoring-algorithm.md)'s resource estimate do not exist.

This module fixes that, and this lesson supplies the vocabulary. You need three things.

- **A language for noise.** Unitaries do not describe noise, because noise is not reversible. The right object is a **quantum channel**, written as a sum of Kraus operators, and every physical process — a gate, a wait, a measurement you throw away — is one.
- **The catalogue.** Four channels cover nearly everything: bit flip, phase flip, depolarizing, amplitude damping. Recognizing them by their effect on the Bloch ball makes noise calculations visual instead of algebraic.
- **The budget.** $T_1$ and $T_2$ are the two numbers an experimentalist quotes, and dividing them by the gate time gives the only figure of merit that matters: **how many gates you can run before the state is garbage.** Today that number is a few thousand, which is why Module 5 exists.

The big conceptual payoff is that noise and entanglement are the same phenomenon seen from different sides. A noisy qubit is a qubit that has become entangled with its environment, and the partial trace of [2.2](02-02-density-matrices-and-the-partial-trace.md) is what converts one into the other.

## The idea

Take a qubit, let it interact with its surroundings, and then — since you cannot track the surroundings — trace them out. What comes back is not a unitary map on your qubit. It is something that shrinks the Bloch ball.

That shrinkage is the whole picture of noise, and the *shape* of it names the channel.

- **Bit flip.** With probability $p$, an $X$ gate happens. The $\hat x$ axis is $X$'s rotation axis, so it survives; the other two shrink. The ball becomes a cigar along $\hat x$.
- **Phase flip.** Same story with $Z$: the $\hat z$ axis survives, the equator shrinks. This is the dominant error on most hardware, because a qubit's energy levels are well-defined but its *relative phase* drifts with every stray field.
- **Depolarizing.** With probability $p$ the qubit is replaced by the maximally mixed state. The ball shrinks uniformly toward the centre. This is the standard worst-case model, used because it has no preferred direction and therefore no basis in which you got lucky.
- **Amplitude damping.** The qubit relaxes toward $\lvert0\rangle$ by emitting energy. The ball shrinks *and drifts* toward the north pole. This is $T_1$, spontaneous emission, and it is the one channel that is not symmetric.

Two of these deserve names you will hear in every lab. $T_1$ is the amplitude-damping time — how long before the qubit falls to the ground state. $T_2$ is the dephasing time — how long before the relative phase is scrambled. Phase is more fragile than energy, so typically $T_2 \le 2T_1$, and it is $T_2$ that limits computation.

## The formal version

> **Definition (quantum channel).** A quantum channel is a map $\mathcal E$ on density matrices that is linear, trace-preserving, and completely positive (CPTP). Every such map has a **Kraus decomposition**
> $$\mathcal E(\rho) = \sum_k E_k\,\rho\,E_k^\dagger, \qquad \sum_k E_k^\dagger E_k = I,$$
> and conversely any set of operators satisfying that condition defines a channel.

In words: apply several operators, each with its own weight, and add the results. The completeness condition $\sum_k E_k^\dagger E_k = I$ is exactly what makes the output trace 1, so probabilities still sum to one. A unitary is the special case of a single Kraus operator.

> **Where channels come from.** $\mathcal E(\rho) = \mathrm{tr}_{\text{env}}\left[U(\rho\otimes\lvert0\rangle\langle0\rvert_{\text{env}})U^\dagger\right]$ for some unitary $U$ on system plus environment. Every channel arises this way (**Stinespring**), and the Kraus operators are $E_k = \langle k\rvert U\lvert 0\rangle_{\text{env}}$.

In words: **noise is a unitary you cannot see all of.** Nothing non-unitary happens in the universe; you just lack access to part of it. This is the purification statement of [2.2](02-02-density-matrices-and-the-partial-trace.md) read backwards, and it is why error correction is possible at all — the information is not destroyed, only relocated.

The catalogue, with the Bloch action written out:

| channel | Kraus operators | Bloch action on $(r_x,r_y,r_z)$ |
|---|---|---|
| bit flip | $\sqrt{1-p}\,I,\ \sqrt p\,X$ | $(r_x,\ (1-2p)r_y,\ (1-2p)r_z)$ |
| phase flip | $\sqrt{1-p}\,I,\ \sqrt p\,Z$ | $((1-2p)r_x,\ (1-2p)r_y,\ r_z)$ |
| depolarizing | $\sqrt{1-p}\,I,\ \sqrt{p/3}\,X,\ \sqrt{p/3}\,Y,\ \sqrt{p/3}\,Z$ | $\left(1-\tfrac{4p}{3}\right)\vec r$ |
| amplitude damping | $\begin{pmatrix}1&0\\0&\sqrt{1-\gamma}\end{pmatrix},\ \begin{pmatrix}0&\sqrt\gamma\\0&0\end{pmatrix}$ | $\left(\sqrt{1-\gamma}\,r_x,\ \sqrt{1-\gamma}\,r_y,\ (1-\gamma)r_z+\gamma\right)$ |

An equivalent and very useful form of the depolarizing channel:

$$\mathcal E_{\text{dep}}(\rho) = (1-q)\rho + q\,\frac I2, \qquad q = \frac{4p}{3},$$

which reads "with probability $q$, forget the qubit entirely."

> **$T_1$ and $T_2$.** Over a wait of duration $t$, amplitude damping has $\gamma = 1 - e^{-t/T_1}$ and dephasing contracts the equator by $e^{-t/T_2}$. Pure dephasing plus relaxation gives $\frac{1}{T_2} = \frac{1}{2T_1} + \frac{1}{T_\phi}$, hence $T_2\le 2T_1$.

> **Fidelity.** For a target pure state, $F = \langle\psi\vert\rho\vert\psi\rangle$; the **error** is $1 - F$. Along a circuit of $G$ gates each with error $\epsilon$, the total error is roughly $G\epsilon$ until it saturates.

In words: errors add, so the number of gates you can run is about $1/\epsilon$. That single division is the whole NISQ constraint.

| platform | $T_1$ | $T_2$ | gate time | gates before decoherence |
|---|---|---|---|---|
| superconducting | $\sim$100 µs | $\sim$100 µs | 20–400 ns | $10^3$–$10^4$ |
| trapped ion | $\sim$10 s | $\sim$1 s | 10–100 µs | $10^4$–$10^5$ |
| neutral atom | $\sim$1 s | $\sim$1 s | $\sim$1 µs | $\sim10^5$ |

## Picture

![Four panels, each showing a dashed circle representing the full Bloch ball with a shaded ellipse inside it representing the ball's image under a channel. The first, bit flip, is a horizontal cigar: the x axis is fixed while y and z shrink by one minus two p. The second, phase flip, is a vertical cigar: z is fixed while x and y shrink. The third, depolarizing, is a smaller circle: a uniform shrink by one minus four p over three. The fourth, amplitude damping, is a smaller ellipse displaced upward: it both shrinks and drifts toward the pole. Captions state that a channel maps the Bloch ball into an ellipsoid inside itself so noise is contraction, and give the Kraus form rho maps to the sum over k of E-k rho E-k-dagger with the sum of E-k-dagger E-k equal to the identity. A table below lists T-one, T-two, gate time, and gates before decoherence for superconducting, trapped-ion and neutral-atom platforms.](assets/05-01-fig1.svg)

The four shapes are worth memorizing as shapes. Any channel you meet will be one of them or a composition, and knowing which axis survives tells you immediately which basis is protected — which is the first question error correction asks.

## Worked examples

**Example 1 — push a state through three channels and read the numbers.**

Start with the state $\rho_0$ whose Bloch vector is $\vec r = (0.6,\ 0,\ 0.8)$ — a pure state, since $\lvert\vec r\rvert = 1$, tilted between $\lvert0\rangle$ and $\lvert+\rangle$.

*Bit flip, $p = 0.2$.* $\hat x$ survives, the others scale by $1 - 2p = 0.6$:
$$\vec r\ \to\ (0.6,\ 0,\ 0.48), \qquad \lvert\vec r\rvert = 0.768.$$

*Phase flip, $p = 0.2$.* Now $\hat z$ survives:
$$\vec r\ \to\ (0.36,\ 0,\ 0.8), \qquad \lvert\vec r\rvert = 0.877.$$

*Depolarizing, $p = 0.2$.* Uniform scaling by $1 - 4p/3 = 0.733$:
$$\vec r\ \to\ (0.44,\ 0,\ 0.587), \qquad \lvert\vec r\rvert = 0.733.$$

*Amplitude damping, $\gamma = 0.3$.* Equator scales by $\sqrt{1-\gamma} = 0.837$, and the $z$ component moves toward $+1$:
$$\vec r\ \to\ \left(0.502,\ 0,\ 0.8(0.7) + 0.3\right) = (0.502,\ 0,\ 0.86).$$

Note the last one: **$r_z$ went up.** Amplitude damping is not symmetric — it pulls toward the ground state, so a qubit already near $\lvert0\rangle$ is barely harmed and one near $\lvert1\rangle$ is destroyed. That asymmetry is real and exploitable, and codes tailored to it (amplitude-damping codes) beat generic ones on hardware where relaxation dominates.

Purity check on the depolarizing case: $\mathrm{tr}\,\rho^2 = \tfrac12(1+\lvert\vec r\rvert^2) = \tfrac12(1+0.537) = 0.769$, down from 1. The state is now genuinely mixed, and by the purification statement it is entangled with an environment you cannot reach.

**Example 2 — the gate budget, and why it is the whole story.**

Take a superconducting device: two-qubit gate error $\epsilon = 10^{-3}$, gate time 200 ns, $T_2 = 100$ µs.

*From gate error.* Errors accumulate roughly additively, so the circuit stays meaningful while $G\epsilon \lesssim 1$:

$$G_{\max} \approx \frac{1}{\epsilon} = 1{,}000 \text{ gates}.$$

*From coherence time.* The wall-clock limit is $T_2$ divided by the gate time:

$$G_{\max} \approx \frac{100\ \mu\text{s}}{200\ \text{ns}} = 500 \text{ sequential gates}.$$

The two estimates agree to within a factor of 2, which is not a coincidence — hardware is engineered so that gate error and decoherence contribute comparably, since improving only one is wasted effort.

Now compare with what the algorithms need:

| computation | gates required | feasible at $\epsilon = 10^{-3}$? |
|---|---|---|
| Bell pair + measurement ([2.1](02-01-bell-states-and-generating-entanglement.md)) | $\sim$3 | yes |
| Grover on $N = 2^{20}$ ([3.5](03-05-grovers-search.md)) | $\sim10^4$ | no |
| Shor on RSA-2048 ([4.4](04-04-shors-factoring-algorithm.md)) | $\sim3\times10^9$ | no, by six orders of magnitude |

**The gap between $10^3$ and $10^9$ is the entire justification for Module 5.** And notice that improving hardware cannot close it: getting to $\epsilon = 10^{-9}$ directly would require a nine-orders-of-magnitude improvement in a physical device, which nobody believes is possible. The only known route is error correction, which buys arbitrarily low *logical* error rates from merely good *physical* ones — provided the physical rate is below a threshold ([5.5](05-05-fault-tolerance-the-threshold-and-the-surface-code.md)).

## Watch out

- You might think noise is "the state getting a random gate applied." That is one model — the Pauli channels — and it is the easy case. Amplitude damping is not of that form (its Kraus operators are not unitary), and general channels can do things no random unitary does. Pauli channels are popular because they are analytically tractable and because **twirling** can convert a general channel into a Pauli one at the cost of some randomization.
- You might think a channel is irreversible because information is destroyed. Information is never destroyed; it moves into the environment (Stinespring). That is why syndrome measurement can pull an error back out — the error's *identity* is recoverable even though the qubit's state has been damaged ([5.2](05-02-the-three-qubit-codes.md)).
- You might think $T_1$ and $T_2$ tell you how good a qubit is. They tell you nothing until divided by the gate time. A trapped ion with $T_2 = 1$ s and 100 µs gates gets $10^4$ gates; a superconducting qubit with $T_2 = 100$ µs and 20 ns gates gets $5\times10^3$. **The dimensionless ratio is the figure of merit**, and it is why the two platforms compete despite five orders of magnitude difference in coherence time.
- You might think error rates add up to give you the right total. They add until the total approaches 1, after which the state is maximally mixed and further errors do nothing. So "$10^6$ gates at $10^{-3}$ gives error $10^3$" is meaningless — it means the output is noise.

## One-liner

> Noise is a unitary on system-plus-environment with the environment traced away, so it contracts the Bloch ball; the shape of the contraction names the channel, and coherence time over gate time is the only number that matters.

## Problems

**P1 (🟢)** A qubit in the state $\lvert+\rangle$ passes through a phase-flip channel with $p = 0.1$. Write the resulting density matrix, give its Bloch vector and purity, and compute the probability of measuring $+$ in the $X$ basis afterwards. Then state what the same channel does to $\lvert0\rangle$ and why.

**P2 (🟡)** Verify that the depolarizing channel with Kraus operators $\sqrt{1-p}I$, $\sqrt{p/3}X$, $\sqrt{p/3}Y$, $\sqrt{p/3}Z$ satisfies the completeness condition, and show that it maps $\vec r\mapsto(1-4p/3)\vec r$. Then find the value of $p$ at which the channel outputs the maximally mixed state for every input, and interpret it.

**P3 (🔴, optional)** A superconducting processor has two-qubit gate error $5\times10^{-3}$, single-qubit gate error $5\times10^{-4}$, gate time 300 ns, and $T_2 = 80$ µs. (a) Estimate the maximum circuit depth from gate error and from coherence separately, and say which binds. (b) A variational chemistry circuit for a 12-qubit molecule uses 400 two-qubit gates and 800 single-qubit gates per energy evaluation, and needs $10^6$ shots for chemical accuracy. Estimate the total error per evaluation and the total wall-clock time, and state whether the result would be meaningful. (c) Explain in one paragraph why increasing the shot count cannot fix the problem you found.

<details>
<summary>Solutions</summary>

**P1** *The state.* $\lvert+\rangle$ has $\rho_0 = \tfrac12\begin{pmatrix}1&1\\1&1\end{pmatrix}$, Bloch vector $(1,0,0)$.

*The channel.* Phase flip fixes $r_z$ and scales $r_x, r_y$ by $1-2p = 0.8$:

$$\vec r \to (0.8,\ 0,\ 0), \qquad \rho = \tfrac12\left(I + 0.8X\right) = \begin{pmatrix}0.5 & 0.4\\ 0.4 & 0.5\end{pmatrix}.$$

*Purity.* $\mathrm{tr}\,\rho^2 = \tfrac12(1+0.8^2) = \tfrac12(1.64) = 0.82$. Down from 1, so the state is mixed.

*The measurement.* $P(+) = \tfrac12(1 + \vec r\cdot\hat x) = \tfrac12(1.8) = 0.9$, using the formula from [1.3](01-03-measurement-and-the-born-rule.md). Directly: the channel leaves $\lvert+\rangle$ alone with probability 0.9 and sends it to $\lvert-\rangle$ with probability 0.1, so $P(+) = 0.9$. ✓

*On $\lvert0\rangle$.* Nothing happens: $\lvert0\rangle$ has $\vec r = (0,0,1)$, and the phase-flip channel fixes $r_z$ while scaling components that are already zero. Formally $Z\lvert0\rangle = \lvert0\rangle$, so both Kraus branches return the same state. **The states on the surviving axis are immune**, which is the general rule and the reason bases matter: a $Z$-error channel does nothing to computational basis states and everything to superpositions.

**P2** *Completeness.* Using $X^2 = Y^2 = Z^2 = I$ and $P^\dagger = P$ for each Pauli:

$$\sum_k E_k^\dagger E_k = (1-p)I + \frac p3\left(X^2 + Y^2 + Z^2\right) = (1-p)I + \frac p3\cdot 3I = I. \checkmark$$

*The Bloch action.* Write $\rho = \tfrac12(I + \vec r\cdot\vec\sigma)$ and use the conjugation rules: $X(\vec r\cdot\vec\sigma)X$ flips the signs of $r_y$ and $r_z$ and keeps $r_x$; similarly $Y$ flips $r_x, r_z$ and $Z$ flips $r_x,r_y$. So

$$X\rho X + Y\rho Y + Z\rho Z = \tfrac12\Big[3I + \left(r_x - r_x - r_x\right)X + \left(-r_y + r_y - r_y\right)Y + \left(-r_z - r_z + r_z\right)Z\Big] = \tfrac12\left[3I - \vec r\cdot\vec\sigma\right].$$

Therefore

$$\mathcal E(\rho) = (1-p)\cdot\tfrac12\left(I + \vec r\cdot\vec\sigma\right) + \frac p3\cdot\tfrac12\left(3I - \vec r\cdot\vec\sigma\right).$$

Collect the two kinds of term separately. The identity coefficients give $(1-p) + \tfrac p3\cdot3 = 1$, confirming the trace is preserved. The $\vec r\cdot\vec\sigma$ coefficients give $(1-p) - \tfrac p3 = 1 - \tfrac{4p}{3}$. So

$$\mathcal E(\rho) = \tfrac12\left[I + \left(1-\tfrac{4p}{3}\right)\vec r\cdot\vec\sigma\right], \qquad \vec r \mapsto \left(1 - \tfrac{4p}{3}\right)\vec r. \checkmark$$

*Complete depolarization.* The output is $I/2$ for every input when the contraction factor vanishes:

$$1 - \frac{4p}{3} = 0 \implies p = \frac34.$$

At $p = 3/4$ the channel destroys all information, because the four Kraus operators then have equal weight $1/4$ each and averaging over the whole Pauli group with equal weights is exactly the map $\rho\mapsto I/2$. Interpretation: **the worst case is not $p=1$ but $p = 3/4$.** At $p = 1$ the channel applies a uniformly random *non-identity* Pauli, which contracts by $1 - 4/3 = -1/3$ — a negative factor, meaning the ball is inverted and shrunk, and some information survives (you could undo the inversion). The genuinely destructive point is where the identity and the three Paulis are equally likely.

**P3**

(a) *From gate error.* Per-evaluation error accumulates as the sum over gates. For a depth-$D$ circuit dominated by two-qubit gates,

$$D_{\max} \approx \frac{1}{5\times10^{-3}} = 200 \text{ two-qubit gates}.$$

*From coherence.* $T_2 / t_{\text{gate}} = 80\ \mu\text{s} / 300\ \text{ns} \approx 267$ sequential gates.

The two are comparable, with **gate error binding slightly harder** (200 versus 267). Either way the honest number is a couple of hundred gates.

(b) *Error per evaluation.*

$$\text{error} \approx 400\times5\times10^{-3} + 800\times5\times10^{-4} = 2.0 + 0.4 = 2.4.$$

An "error" above 1 means the output is **indistinguishable from noise** — the state has fully decohered well before the circuit ends. Formally the fidelity has saturated at the maximally mixed value.

*Wall-clock time.* Each evaluation is 1,200 gates at 300 ns, so 360 µs of circuit time; with $10^6$ shots that is

$$10^6 \times 360\ \mu\text{s} = 360\ \text{s} \approx 6\ \text{minutes per energy evaluation},$$

before any overhead for state preparation, readout (typically microseconds each, often dominating), and the classical optimizer's hundreds of iterations. Realistically hours to days per molecule.

*Is the result meaningful?* **No.** An error of 2.4 per evaluation means the measured energy is the expectation value of the Hamiltonian in a nearly maximally mixed state, which is the trace of the Hamiltonian divided by the dimension — a number containing no information about the ground state.

(c) *Why more shots cannot help.* Shots reduce **statistical** error, which falls as $1/\sqrt N$ ([1.3](01-03-measurement-and-the-born-rule.md)). The problem here is **systematic**: the circuit is not preparing the state you asked for, so you are averaging over the wrong distribution. Averaging a biased estimator more times converges beautifully to the wrong answer.

Concretely, the estimator's expectation is $\mathrm{tr}(H\rho_{\text{noisy}})$, not $\mathrm{tr}(H\rho_{\text{ideal}})$, and no number of samples changes $\rho_{\text{noisy}}$. The only remedies are (i) shorten the circuit, (ii) improve the gates, (iii) apply error *mitigation*, which extrapolates toward the zero-noise limit at the cost of exponentially many shots in the circuit's error budget, or (iv) apply error *correction*, which is what the rest of this module builds. Distinguishing statistical from systematic error is the most common failure of judgement in reading NISQ results, and this calculation is the whole argument.

</details>

## Connections

- **Backward:** channels are the partial trace of [2.2](02-02-density-matrices-and-the-partial-trace.md) applied to system plus environment, and the Bloch-ball contractions are the conjugation rules for Paulis from [1.2](01-02-single-qubit-gates.md). The purification statement is the same theorem that made "mixed" mean "part of something bigger."
- **Forward:** [5.2](05-02-the-three-qubit-codes.md) corrects the bit-flip and phase-flip channels with a three-qubit code; [5.3](05-03-the-shor-code-and-error-discretization.md) shows that correcting just $\{X,Y,Z\}$ handles *every* single-qubit channel, which is why this catalogue is exhaustive enough. [5.5](05-05-fault-tolerance-the-threshold-and-the-surface-code.md) turns the gate budget of Example 2 into a threshold condition.
- **Sideways:** $T_1$ is spontaneous emission, the Fermi golden-rule rate of [`quantum-mechanics` 6.6](../../quantum-mechanics/lessons/06-06-fermi-golden-rule-radiation.md), and the two-level system coupled to a field mode is the Jaynes–Cummings model of [`photonics-quantum-optics` 4.2](../../photonics-quantum-optics/lessons/04-02-cavity-qed-jaynes-cummings.md). The CPTP condition is the quantum version of a stochastic matrix, and the contraction of the Bloch ball is the quantum data-processing inequality — the same monotonicity as [`information-theory` 1.5](../../information-theory/lessons/01-05-data-processing-inequality.md).
